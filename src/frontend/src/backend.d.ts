import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Subscription {
    expiryTimestamp: bigint;
    teamOwner?: Principal;
    monthlyUsageCount: bigint;
    usageResetTimestamp: bigint;
    planTier: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export interface UserProfile {
    name: string;
}
export interface http_header {
    value: string;
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addTeamMember(owner: Principal, member: Principal): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    canGenerate(): Promise<boolean>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getMyPlan(): Promise<Subscription>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    getTeamMembers(): Promise<Array<Principal>>;
    getUsageCount(): Promise<bigint>;
    getUserPlan(user: Principal): Promise<Subscription>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    incrementUsage(): Promise<void>;
    inspectWebsite(url: string): Promise<string>;
    isCallerAdmin(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    registerUser(): Promise<void>;
    removeTeamMember(owner: Principal, member: Principal): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    setUserPlan(target: Principal, planTier: string, expiryTimestamp: bigint): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    upgradePlan(target: Principal, planTier: string): Promise<void>;
}
