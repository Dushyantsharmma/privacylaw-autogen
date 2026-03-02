import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useActor } from "@/hooks/useActor";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useSubscription } from "@/hooks/useSubscription";
import {
  PLANS,
  PLAN_BADGE_STYLES,
  PLAN_ORDER,
  type PlanTier,
  getPlansAbove,
} from "@/lib/planConfig";
import type { Principal } from "@icp-sdk/core/principal";
import {
  ArrowRight,
  Calendar,
  Crown,
  Loader2,
  LogOut,
  Plus,
  Shield,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

interface DashboardPageProps {
  onNavigate: (
    page: "landing" | "generator" | "dashboard" | "inspector" | "blog",
  ) => void;
}

function truncatePrincipal(p: string): string {
  if (p.length <= 16) return p;
  return `${p.slice(0, 8)}...${p.slice(-8)}`;
}

function formatExpiry(timestamp: bigint): string {
  if (timestamp === BigInt(0)) return "No expiry";
  const ms = Number(timestamp / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getPlanProgress(usageCount: bigint, monthlyLimit: number): number {
  if (monthlyLimit === -1 || monthlyLimit === Number.POSITIVE_INFINITY)
    return 0;
  const used = Number(usageCount);
  return Math.min((used / monthlyLimit) * 100, 100);
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { identity, clear } = useInternetIdentity();
  const { actor } = useActor();
  const { plan, planTier, isLoading, usageCount, isExpired, refreshPlan } =
    useSubscription();
  const [teamMembers, setTeamMembers] = useState<Principal[]>([]);
  const [newMemberInput, setNewMemberInput] = useState("");
  const [teamLoading, setTeamLoading] = useState(false);

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();
  const principal = identity?.getPrincipal().toString() ?? "";
  const planConfig = PLANS[planTier];
  const monthlyLimit = planConfig.monthlyLimit;
  const progress = getPlanProgress(usageCount, monthlyLimit);
  const plansAbove = getPlansAbove(planTier);
  const hasTeam = planTier === "ultra";

  const loadTeamMembers = useCallback(async () => {
    if (!actor || !hasTeam) return;
    try {
      const members = await actor.getTeamMembers();
      setTeamMembers(members);
    } catch {
      // silently ignore
    }
  }, [actor, hasTeam]);

  useEffect(() => {
    void loadTeamMembers();
  }, [loadTeamMembers]);

  const handleAddMember = async () => {
    if (!actor || !newMemberInput.trim()) return;
    setTeamLoading(true);
    try {
      // Dynamically import Principal to parse from text
      const { Principal: PrincipalClass } = await import(
        "@icp-sdk/core/principal"
      );
      const memberPrincipal = PrincipalClass.fromText(newMemberInput.trim());
      await actor.addTeamMember(
        identity!.getPrincipal() as Principal,
        memberPrincipal as Principal,
      );
      toast.success("Team member added");
      setNewMemberInput("");
      await loadTeamMembers();
    } catch (_e) {
      toast.error("Failed to add member. Check the principal format.");
    } finally {
      setTeamLoading(false);
    }
  };

  const handleRemoveMember = async (member: Principal) => {
    if (!actor) return;
    setTeamLoading(true);
    try {
      await actor.removeTeamMember(
        identity!.getPrincipal() as Principal,
        member,
      );
      toast.success("Team member removed");
      await loadTeamMembers();
    } catch {
      toast.error("Failed to remove member");
    } finally {
      setTeamLoading(false);
    }
  };

  const handleSignOut = () => {
    clear();
    onNavigate("landing");
    toast.success("Signed out");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Please sign in to view your dashboard.
          </p>
          <Button onClick={() => onNavigate("landing")}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">My Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-0.5">
              Manage your subscription and account
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="gap-1.5 text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Plan Status Card */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Crown className="h-4 w-4 text-primary" />
                  Current Plan
                </CardTitle>
                {isExpired && (
                  <Badge variant="destructive" className="text-xs">
                    Expired
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center gap-2 text-muted-foreground text-sm py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading plan...
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-bold">
                        {PLANS[planTier].name}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${PLAN_BADGE_STYLES[planTier]}`}
                      >
                        {planTier.toUpperCase()}
                      </span>
                    </div>
                    {plan && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Expires: {formatExpiry(plan.expiryTimestamp)}
                      </p>
                    )}
                  </div>
                  {plansAbove.length > 0 && (
                    <Button
                      size="sm"
                      className="gap-1.5 shrink-0"
                      onClick={() => {
                        onNavigate("landing");
                        setTimeout(() => {
                          document
                            .getElementById("pricing")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      Upgrade Plan
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Usage This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {isLoading ? (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </div>
              ) : (
                <>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold">
                      {Number(usageCount)}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      {monthlyLimit === -1 ||
                      monthlyLimit === Number.POSITIVE_INFINITY
                        ? "/ Unlimited"
                        : `/ ${monthlyLimit} generations`}
                    </span>
                  </div>
                  {monthlyLimit !== -1 &&
                    monthlyLimit !== Number.POSITIVE_INFINITY && (
                      <>
                        <Progress value={progress} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {monthlyLimit - Number(usageCount) > 0
                            ? `${monthlyLimit - Number(usageCount)} generation${monthlyLimit - Number(usageCount) !== 1 ? "s" : ""} remaining`
                            : "Monthly limit reached — upgrade to continue"}
                        </p>
                      </>
                    )}
                  {(monthlyLimit === -1 ||
                    monthlyLimit === Number.POSITIVE_INFINITY) && (
                    <p className="text-xs text-muted-foreground">
                      Unlimited generations included in your plan
                    </p>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Account Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Internet Identity
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded font-mono block break-all">
                  {truncatePrincipal(principal)}
                </code>
              </div>
              <Separator />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 gap-1.5"
                  onClick={() => onNavigate("generator")}
                >
                  <Shield className="h-3.5 w-3.5" />
                  Generator
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 text-destructive hover:text-destructive"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-3.5 w-3.5" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team Management (Team/Enterprise only) */}
          {hasTeam && (
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Team Members
                  <Badge variant="secondary" className="text-xs">
                    {teamMembers.length}
                    {PLANS[planTier].teamSeats !== -1 &&
                    PLANS[planTier].teamSeats !== Number.POSITIVE_INFINITY
                      ? ` / ${PLANS[planTier].teamSeats}`
                      : " members"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add member */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Principal ID (e.g. aaaaa-aa...)"
                    value={newMemberInput}
                    onChange={(e) => setNewMemberInput(e.target.value)}
                    className="font-mono text-xs h-9"
                  />
                  <Button
                    size="sm"
                    onClick={handleAddMember}
                    disabled={teamLoading || !newMemberInput.trim()}
                    className="gap-1.5 shrink-0"
                  >
                    {teamLoading ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                    Add
                  </Button>
                </div>

                {/* Member list */}
                {teamMembers.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-4">
                    No team members added yet. Add members using their Principal
                    ID.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {teamMembers.map((member) => {
                      const memberStr = member.toString();
                      return (
                        <div
                          key={memberStr}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border border-border/40"
                        >
                          <code className="text-xs font-mono text-muted-foreground">
                            {truncatePrincipal(memberStr)}
                          </code>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 text-muted-foreground hover:text-destructive"
                            onClick={() => handleRemoveMember(member)}
                            disabled={teamLoading}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Upgrade options */}
          {plansAbove.length > 0 && (
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Upgrade Your Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {plansAbove.slice(0, 3).map((tier: PlanTier) => {
                    const upgradePlan = PLANS[tier];
                    return (
                      <div
                        key={tier}
                        className="p-4 rounded-xl border border-border/60 hover:border-primary/40 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm">
                            {upgradePlan.name}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${PLAN_BADGE_STYLES[tier]}`}
                          >
                            {upgradePlan.tagline}
                          </span>
                        </div>
                        <ul className="space-y-1 mb-3">
                          {upgradePlan.features.slice(0, 3).map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-1.5 text-xs text-muted-foreground"
                            >
                              <span className="text-success mt-0.5">✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Button
                          size="sm"
                          className="w-full gap-1.5"
                          onClick={() => {
                            onNavigate("landing");
                            setTimeout(() => {
                              document
                                .getElementById("pricing")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          Upgrade to {upgradePlan.name}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <button
          type="button"
          onClick={() => refreshPlan()}
          className="mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Refresh plan data
        </button>
      </div>
    </div>
  );
}
