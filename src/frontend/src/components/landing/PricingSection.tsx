import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  type BillingCycle,
  CURRENCY_FLAGS,
  CURRENCY_LABELS,
  CURRENCY_SYMBOLS,
  CYCLE_DISCOUNTS,
  CYCLE_LABELS,
  CYCLE_MONTHS,
  type Currency,
  PLANS,
  PLAN_ORDER,
  PRICE_TABLE,
  type PlanTier,
  STRIPE_LINKS,
  detectCurrency,
  formatPrice,
  getMonthlyEquivalent,
} from "@/lib/planConfig";
import {
  ArrowRight,
  Check,
  Crown,
  Infinity as InfinityIcon,
  Rocket,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface PricingSectionProps {
  onGetStarted: () => void;
}

const PLAN_ICONS: Record<PlanTier, React.ReactNode> = {
  basic: <Rocket className="h-5 w-5" />,
  premium: <Zap className="h-5 w-5" />,
  pro: <Crown className="h-5 w-5" />,
  ultra: <InfinityIcon className="h-5 w-5" />,
};

const PLAN_COLORS: Record<
  PlanTier,
  {
    border: string;
    bg: string;
    iconBg: string;
    iconText: string;
    badge: string;
    button: "default" | "outline" | "secondary";
    highlight: boolean;
  }
> = {
  basic: {
    border: "border-slate-200 dark:border-slate-700",
    bg: "bg-white dark:bg-slate-900",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    iconText: "text-slate-600 dark:text-slate-400",
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    button: "outline",
    highlight: false,
  },
  premium: {
    border: "border-blue-400 dark:border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconText: "text-blue-600 dark:text-blue-400",
    badge: "bg-blue-600 text-white",
    button: "default",
    highlight: true,
  },
  pro: {
    border: "border-indigo-300 dark:border-indigo-600",
    bg: "bg-white dark:bg-slate-900",
    iconBg: "bg-indigo-100 dark:bg-indigo-900",
    iconText: "text-indigo-600 dark:text-indigo-400",
    badge:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    button: "default",
    highlight: false,
  },
  ultra: {
    border: "border-amber-300 dark:border-amber-600",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    iconBg: "bg-amber-100 dark:bg-amber-900",
    iconText: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-500 text-white",
    button: "default",
    highlight: false,
  },
};

const CYCLE_ORDER: BillingCycle[] = [
  "monthly",
  "quarterly",
  "biannual",
  "annual",
];

interface ComparisonRow {
  category: string;
  label: string;
  values: Record<PlanTier, string | boolean>;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: "Usage",
    label: "Policy generations / month",
    values: { basic: "5", premium: "25", pro: "Unlimited", ultra: "Unlimited" },
  },
  {
    category: "Usage",
    label: "Compliance frameworks",
    values: { basic: "3", premium: "12", pro: "12", ultra: "12" },
  },
  {
    category: "Documents",
    label: "Privacy Policy",
    values: { basic: true, premium: true, pro: true, ultra: true },
  },
  {
    category: "Documents",
    label: "Terms of Service",
    values: { basic: false, premium: true, pro: true, ultra: true },
  },
  {
    category: "Documents",
    label: "Cookie Policy",
    values: { basic: false, premium: true, pro: true, ultra: true },
  },
  {
    category: "Documents",
    label: "DPIA & Data Breach templates",
    values: { basic: false, premium: false, pro: true, ultra: true },
  },
  {
    category: "Export",
    label: "Copy + TXT export",
    values: { basic: true, premium: true, pro: true, ultra: true },
  },
  {
    category: "Export",
    label: "PDF export",
    values: { basic: false, premium: true, pro: true, ultra: true },
  },
  {
    category: "Export",
    label: "DOC export",
    values: { basic: false, premium: false, pro: true, ultra: true },
  },
  {
    category: "Export",
    label: "White-label branding",
    values: { basic: false, premium: false, pro: false, ultra: true },
  },
  {
    category: "Storage",
    label: "Saved drafts",
    values: { basic: "3", premium: "20", pro: "Unlimited", ultra: "Unlimited" },
  },
  {
    category: "Storage",
    label: "Watermark-free output",
    values: { basic: false, premium: true, pro: true, ultra: true },
  },
  {
    category: "Tools",
    label: "AI Website Inspector",
    values: { basic: false, premium: true, pro: true, ultra: true },
  },
  {
    category: "Tools",
    label: "Multi-language output",
    values: { basic: false, premium: false, pro: true, ultra: true },
  },
  {
    category: "Tools",
    label: "Logo branding on PDF",
    values: { basic: false, premium: false, pro: true, ultra: true },
  },
  {
    category: "Team",
    label: "Team seats",
    values: { basic: false, premium: false, pro: false, ultra: "Unlimited" },
  },
  {
    category: "Team",
    label: "Bulk CSV generation",
    values: { basic: false, premium: false, pro: false, ultra: true },
  },
  {
    category: "Team",
    label: "Client portal",
    values: { basic: false, premium: false, pro: false, ultra: true },
  },
  {
    category: "Support",
    label: "Email support",
    values: { basic: false, premium: false, pro: true, ultra: true },
  },
  {
    category: "Support",
    label: "API access",
    values: { basic: false, premium: false, pro: false, ultra: true },
  },
];

function renderCellValue(val: string | boolean): React.ReactNode {
  if (val === true)
    return <Check className="h-4 w-4 text-emerald-500 mx-auto" />;
  if (val === false)
    return <X className="h-4 w-4 text-slate-300 dark:text-slate-600 mx-auto" />;
  return <span className="text-xs font-semibold text-foreground">{val}</span>;
}

export function PricingSection({ onGetStarted }: PricingSectionProps) {
  const [currency, setCurrency] = useState<Currency>(() => detectCurrency());
  const [cycle, setCycle] = useState<BillingCycle>("annual");
  const [showComparison, setShowComparison] = useState(false);
  const { identity, login } = useInternetIdentity();
  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  const handlePlanCTA = (tier: PlanTier) => {
    const stripeUrl = STRIPE_LINKS[tier][cycle][currency];
    if (stripeUrl) {
      if (!isLoggedIn) {
        login();
        return;
      }
      window.open(stripeUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Group comparison rows by category
  const categories = [...new Set(COMPARISON_ROWS.map((r) => r.category))];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <Badge
            variant="secondary"
            className="mb-4 text-xs px-3 py-1 font-medium"
          >
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Plans that grow{" "}
            <span className="text-primary">with your business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start generating legally compliant policies in minutes. No hidden
            fees, cancel anytime, and every plan includes a 7-day money-back
            guarantee.
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-muted/60 border border-border/50 shadow-inner">
            {CYCLE_ORDER.map((c) => {
              const savings = Math.round(CYCLE_DISCOUNTS[c] * 100);
              const isActive = cycle === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCycle(c)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-foreground shadow-sm border border-border/40"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {CYCLE_LABELS[c]}
                  {savings > 0 && (
                    <span
                      className={`ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                          : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                      }`}
                    >
                      -{savings}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Currency switcher */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Currency:</span>
            {(["INR", "USD", "EUR", "GBP"] as Currency[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  currency === cur
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border/60 hover:border-primary/40"
                }`}
              >
                <span>{CURRENCY_FLAGS[cur]}</span>
                <span>{CURRENCY_LABELS[cur]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PLAN_ORDER.map((tier) => {
            const plan = PLANS[tier];
            const colors = PLAN_COLORS[tier];
            const price = PRICE_TABLE[tier][cycle][currency];
            const monthlyEq = getMonthlyEquivalent(tier, cycle, currency);
            const savingsPct = Math.round(CYCLE_DISCOUNTS[cycle] * 100);
            const months = CYCLE_MONTHS[cycle];

            return (
              <div
                key={tier}
                className={`relative rounded-2xl border-2 ${colors.border} ${colors.bg} flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  colors.highlight
                    ? "ring-2 ring-blue-400/40 shadow-lg shadow-blue-100/50 dark:shadow-blue-900/30"
                    : ""
                }`}
              >
                {colors.highlight && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                      <Star className="h-3 w-3" /> MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`p-6 flex flex-col h-full ${colors.highlight ? "pt-8" : ""}`}
                >
                  {/* Plan header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText}`}
                      >
                        {PLAN_ICONS[tier]}
                      </div>
                      <div>
                        <div className="font-bold text-base">{plan.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {plan.tagline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-end gap-1.5">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {formatPrice(price, currency)}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1.5 leading-none">
                        /{months === 1 ? "mo" : `${months} mo`}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {cycle === "monthly"
                        ? "Billed monthly"
                        : `${monthlyEq}/mo • billed ${cycle === "quarterly" ? "quarterly" : cycle === "biannual" ? "every 6 months" : "annually"}`}
                    </p>
                    {savingsPct > 0 && (
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                        Save {savingsPct}% vs monthly
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-foreground/80 leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.slice(0, 2).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <X className="h-4 w-4 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground/60 leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full gap-1.5 ${colors.highlight ? "shadow-md shadow-blue-200 dark:shadow-blue-900/40" : ""}`}
                    variant={colors.button}
                    onClick={() => handlePlanCTA(tier)}
                  >
                    Get {plan.name}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground mb-12">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-emerald-500" /> 7-day money-back
            guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-500" /> Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-500" /> Secure payment
            via Stripe
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-emerald-500" /> Prices shown in{" "}
            {CURRENCY_SYMBOLS[currency]} {CURRENCY_LABELS[currency]}
          </span>
        </div>

        {/* Free tier callout */}
        <div className="mb-12 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-sm mb-1">
              Not ready to commit? Start for free.
            </div>
            <p className="text-xs text-muted-foreground">
              Sign in with Internet Identity and get 3 free policy generations
              per month — no credit card required.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0"
            onClick={() => (isLoggedIn ? onGetStarted() : login())}
          >
            {isLoggedIn ? "Open Generator" : "Start Free"}
          </Button>
        </div>

        {/* Comparison table toggle */}
        <div className="text-center mb-8">
          <button
            type="button"
            className="text-sm text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            onClick={() => setShowComparison((v) => !v)}
          >
            {showComparison ? "Hide" : "View"} full feature comparison
          </button>
        </div>

        {showComparison && (
          <div className="overflow-x-auto rounded-2xl border border-border/60 shadow-sm">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground w-52">
                    Feature
                  </th>
                  {PLAN_ORDER.map((tier) => (
                    <th
                      key={tier}
                      className={`px-4 py-4 text-center text-xs font-bold ${
                        PLAN_COLORS[tier].highlight
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span>{PLANS[tier].name}</span>
                        <span className="font-normal text-muted-foreground/70">
                          {formatPrice(
                            PRICE_TABLE[tier][cycle][currency],
                            currency,
                          )}
                          /
                          {CYCLE_MONTHS[cycle] === 1
                            ? "mo"
                            : `${CYCLE_MONTHS[cycle]}mo`}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => {
                  const rows = COMPARISON_ROWS.filter(
                    (r) => r.category === cat,
                  );
                  return (
                    <>
                      <tr key={`cat-${cat}`} className="bg-muted/30">
                        <td
                          colSpan={5}
                          className="px-5 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider"
                        >
                          {cat}
                        </td>
                      </tr>
                      {rows.map((row, idx) => (
                        <tr
                          key={row.label}
                          className={`border-b border-border/30 transition-colors hover:bg-muted/20 ${
                            idx % 2 === 0 ? "bg-background" : "bg-muted/10"
                          }`}
                        >
                          <td className="px-5 py-3 text-xs font-medium text-foreground/80">
                            {row.label}
                          </td>
                          {PLAN_ORDER.map((tier) => (
                            <td key={tier} className="px-4 py-3 text-center">
                              {renderCellValue(row.values[tier])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
