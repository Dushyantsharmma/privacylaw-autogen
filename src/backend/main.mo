import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import List "mo:core/List";
import AccessControl "authorization/access-control";
import Stripe "stripe/stripe";
import OutCall "http-outcalls/outcall";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Subscription Management
  type Subscription = {
    planTier : Text; // "free", "starter", "professional", "team", "enterprise"
    expiryTimestamp : Int; // in nanoseconds, 0 means no expiry
    monthlyUsageCount : Nat;
    usageResetTimestamp : Int;
    teamOwner : ?Principal;
  };

  let subscriptions = Map.empty<Principal, Subscription>();
  let teamMembers = Map.empty<Principal, List.List<Principal>>();
  var stripeConfig : ?Stripe.StripeConfiguration = null;

  // Stripe Integration
  public query func isStripeConfigured() : async Bool {
    stripeConfig != null;
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    stripeConfig := ?config;
  };

  func getStripeConfiguration() : Stripe.StripeConfiguration {
    switch (stripeConfig) {
      case (null) { Runtime.trap("Stripe must be configured first") };
      case (?config) { config };
    };
  };

  public shared ({ caller }) func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can check session status");
    };
    await Stripe.getSessionStatus(getStripeConfiguration(), sessionId, transform);
  };

  public shared ({ caller }) func createCheckoutSession(items : [Stripe.ShoppingItem], successUrl : Text, cancelUrl : Text) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create checkout sessions");
    };
    await Stripe.createCheckoutSession(getStripeConfiguration(), caller, items, successUrl, cancelUrl, transform);
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  // Helper: Inspect Website (fetch HTML)
  public shared ({ caller }) func inspectWebsite(url : Text) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can inspect websites");
    };
    try {
      await OutCall.httpGetRequest(url, [], transform);
    } catch (_) {
      "ERROR:fetch failed";
    };
  };

  // User Registration
  public shared ({ caller }) func registerUser() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can register");
    };

    switch (subscriptions.get(caller)) {
      case (null) {
        let newSub : Subscription = {
          planTier = "free";
          expiryTimestamp = 0;
          monthlyUsageCount = 0;
          usageResetTimestamp = Time.now();
          teamOwner = null;
        };
        subscriptions.add(caller, newSub);
      };
      case (?_) { Runtime.trap("User already registered") };
    };
  };

  // Plan Management
  public query ({ caller }) func getMyPlan() : async Subscription {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their plan");
    };

    switch (subscriptions.get(caller)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) { sub };
    };
  };

  public query ({ caller }) func getUserPlan(user : Principal) : async Subscription {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can get any user's plan");
    };
    switch (subscriptions.get(user)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) { sub };
    };
  };

  func calculateExpiry() : Int {
    let oneYearNs : Int = 365 * 24 * 60 * 60 * 1000000000;
    Time.now() + oneYearNs;
  };

  public shared ({ caller }) func upgradePlan(target : Principal, planTier : Text) : async () {
    if (caller != target and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: A user can only upgrade their own plan");
    };

    if (caller == target and not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upgrade plans");
    };

    switch (subscriptions.get(target)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) {
        let newSub = {
          sub with
          planTier;
          expiryTimestamp = if (planTier == "free") {
            0;
          } else {
            calculateExpiry();
          };
        };
        subscriptions.add(target, newSub);
      };
    };
  };

  public shared ({ caller }) func setUserPlan(target : Principal, planTier : Text, expiryTimestamp : Int) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can set user plans");
    };

    switch (subscriptions.get(target)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) {
        let newSub = {
          sub with
          planTier;
          expiryTimestamp;
        };
        subscriptions.add(target, newSub);
      };
    };
  };

  func maybeResetUsage(sub : Subscription) : Subscription {
    let now = Time.now();
    let monthNs = 30 * 24 * 60 * 60 * 1000000000;

    if (sub.usageResetTimestamp + monthNs <= now) {
      {
        sub with
        monthlyUsageCount = 0;
        usageResetTimestamp = now;
      };
    } else {
      sub;
    };
  };

  public shared ({ caller }) func incrementUsage() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can increment usage");
    };

    switch (subscriptions.get(caller)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) {
        let updatedSub = maybeResetUsage(sub);
        let limit = switch (updatedSub.planTier) {
          case ("free") { 3 };
          case ("starter") { 15 };
          case (_) { 99999 };
        };

        if (updatedSub.monthlyUsageCount >= limit) {
          Runtime.trap("Monthly limit reached, cannot increment usage further");
        };

        let newSub = {
          updatedSub with
          monthlyUsageCount = updatedSub.monthlyUsageCount + 1;
        };
        subscriptions.add(caller, newSub);
      };
    };
  };

  public query ({ caller }) func canGenerate() : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      return false;
    };

    switch (subscriptions.get(caller)) {
      case (null) { false };
      case (?sub) {
        let updatedSub = maybeResetUsage(sub);
        let limit = switch (updatedSub.planTier) {
          case ("free") { 3 };
          case ("starter") { 15 };
          case (_) { 99999 };
        };
        updatedSub.monthlyUsageCount < limit;
      };
    };
  };

  public query ({ caller }) func getUsageCount() : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view usage count");
    };

    switch (subscriptions.get(caller)) {
      case (null) { 0 };
      case (?sub) { sub.monthlyUsageCount };
    };
  };

  // Team Management
  func checkTeamRequirements(owner : Principal) : () {
    switch (subscriptions.get(owner)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) {
        if (sub.planTier != "team" and sub.planTier != "enterprise") {
          Runtime.trap("Not a team or enterprise plan");
        };
      };
    };
  };

  public shared ({ caller }) func addTeamMember(owner : Principal, member : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can manage teams");
    };

    if (caller != owner) {
      Runtime.trap("Unauthorized: Only the team owner can add members");
    };

    checkTeamRequirements(owner);

    let membersList = switch (teamMembers.get(owner)) {
      case (null) { List.empty<Principal>() };
      case (?list) { list };
    };

    switch (subscriptions.get(owner)) {
      case (null) { Runtime.trap("Subscription not found") };
      case (?sub) {
        if (sub.planTier == "team" and membersList.size() >= 5) {
          Runtime.trap("Team plan supports only up to 5 members");
        };
      };
    };

    let newMembers = List.fromArray(membersList.toArray().concat([member]));

    teamMembers.add(owner, newMembers);
  };

  public shared ({ caller }) func removeTeamMember(owner : Principal, member : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can manage teams");
    };

    if (caller != owner) {
      Runtime.trap("Unauthorized: Only the team owner can remove members");
    };

    checkTeamRequirements(owner);

    switch (teamMembers.get(owner)) {
      case (null) { Runtime.trap("No team members found") };
      case (?membersList) {
        let filtered = membersList.filter(func(p) { p != member });
        teamMembers.add(owner, filtered);
      };
    };
  };

  public query ({ caller }) func getTeamMembers() : async [Principal] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view team members");
    };

    switch (teamMembers.get(caller)) {
      case (null) { [] };
      case (?membersList) { membersList.toArray() };
    };
  };
};
