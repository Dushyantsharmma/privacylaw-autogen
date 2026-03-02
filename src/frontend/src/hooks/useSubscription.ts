import { useCallback, useEffect, useState } from "react";
import type { Subscription } from "../backend.d";
import type { PlanTier } from "../lib/planConfig";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export interface SubscriptionState {
  plan: Subscription | null;
  planTier: PlanTier;
  isLoading: boolean;
  canGenerate: boolean;
  usageCount: bigint;
  refreshPlan: () => Promise<void>;
  isExpired: boolean;
}

function parsePlanTier(tier: string): PlanTier {
  // Support new tier names
  const newValid: PlanTier[] = ["basic", "premium", "pro", "ultra"];
  if (newValid.includes(tier as PlanTier)) return tier as PlanTier;
  // Legacy tier name mapping (for backward compatibility)
  const legacyMap: Record<string, PlanTier> = {
    free: "basic",
    starter: "basic",
    professional: "premium",
    team: "pro",
    enterprise: "ultra",
  };
  return legacyMap[tier] ?? "basic";
}

function isSubscriptionExpired(sub: Subscription): boolean {
  if (sub.expiryTimestamp === BigInt(0)) return false; // Free plan, no expiry
  return BigInt(Date.now()) * BigInt(1_000_000) > sub.expiryTimestamp;
}

export function useSubscription(): SubscriptionState {
  const { identity } = useInternetIdentity();
  const { actor, isFetching: actorLoading } = useActor();
  const [plan, setPlan] = useState<Subscription | null>(null);
  const [canGenerate, setCanGenerate] = useState(true);
  const [usageCount, setUsageCount] = useState<bigint>(BigInt(0));
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  const refreshPlan = useCallback(async () => {
    if (!actor || !isLoggedIn || actorLoading) return;

    setIsLoading(true);
    try {
      await Promise.all([
        actor.registerUser().catch(() => {
          // User may already be registered, ignore error
        }),
      ]);

      const [sub, canGen, usage] = await Promise.all([
        actor.getMyPlan(),
        actor.canGenerate(),
        actor.getUsageCount(),
      ]);

      setPlan(sub);
      setCanGenerate(canGen);
      setUsageCount(usage);
    } catch {
      // Graceful fallback
      setPlan(null);
      setCanGenerate(true);
      setUsageCount(BigInt(0));
    } finally {
      setIsLoading(false);
    }
  }, [actor, isLoggedIn, actorLoading]);

  useEffect(() => {
    if (isLoggedIn && actor && !actorLoading) {
      void refreshPlan();
    } else if (!isLoggedIn) {
      setPlan(null);
      setCanGenerate(true);
      setUsageCount(BigInt(0));
    }
  }, [isLoggedIn, actor, actorLoading, refreshPlan]);

  const planTier: PlanTier = plan ? parsePlanTier(plan.planTier) : "basic";
  const isExpired = plan ? isSubscriptionExpired(plan) : false;

  return {
    plan,
    planTier,
    isLoading,
    canGenerate: isLoggedIn ? canGenerate : true,
    usageCount,
    refreshPlan,
    isExpired,
  };
}
