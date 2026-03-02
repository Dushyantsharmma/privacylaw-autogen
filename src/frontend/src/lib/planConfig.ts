// ─────────────────────────────────────────────────────────────────────────────
// PrivacyLaw AutoGen — Plan & Pricing Configuration
// 4 Tiers × 4 Billing Cycles × 4 Currencies
// ─────────────────────────────────────────────────────────────────────────────

export type Currency = "INR" | "USD" | "EUR" | "GBP";
export type BillingCycle = "monthly" | "quarterly" | "biannual" | "annual";
export type PlanTier = "basic" | "premium" | "pro" | "ultra";

// Monthly base prices (all other cycles derived from these with discounts)
// USD monthly base: Basic $9 | Premium $19 | Pro $39 | Ultra $79
const MONTHLY_BASE_USD: Record<PlanTier, number> = {
  basic: 9,
  premium: 19,
  pro: 39,
  ultra: 79,
};

// Currency multipliers relative to USD (approximate PPP-adjusted)
const CURRENCY_MULTIPLIER: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.8,
  INR: 83,
};

// Billing cycle discount rates
export const CYCLE_DISCOUNTS: Record<BillingCycle, number> = {
  monthly: 0,
  quarterly: 0.1, // 10% off
  biannual: 0.2, // 20% off
  annual: 0.35, // 35% off
};

export const CYCLE_MONTHS: Record<BillingCycle, number> = {
  monthly: 1,
  quarterly: 3,
  biannual: 6,
  annual: 12,
};

export const CYCLE_LABELS: Record<BillingCycle, string> = {
  monthly: "Monthly",
  quarterly: "3 Months",
  biannual: "6 Months",
  annual: "Annual",
};

export const CYCLE_SUBLABELS: Record<BillingCycle, string> = {
  monthly: "Billed every month",
  quarterly: "Billed every 3 months",
  biannual: "Billed every 6 months",
  annual: "Billed once per year",
};

function calcPrice(
  tier: PlanTier,
  cycle: BillingCycle,
  currency: Currency,
): number {
  const baseUsd = MONTHLY_BASE_USD[tier];
  const discountedMonthly = baseUsd * (1 - CYCLE_DISCOUNTS[cycle]);
  const totalUsd = discountedMonthly * CYCLE_MONTHS[cycle];
  const raw = totalUsd * CURRENCY_MULTIPLIER[currency];
  // Round to clean numbers
  if (currency === "INR") return Math.round(raw / 50) * 50;
  return Math.round(raw);
}

// Pre-computed price table: [tier][cycle][currency]
function buildPriceTable(): Record<
  PlanTier,
  Record<BillingCycle, Record<Currency, number>>
> {
  const tiers: PlanTier[] = ["basic", "premium", "pro", "ultra"];
  const cycles: BillingCycle[] = ["monthly", "quarterly", "biannual", "annual"];
  const currencies: Currency[] = ["INR", "USD", "EUR", "GBP"];

  const table = {} as Record<
    PlanTier,
    Record<BillingCycle, Record<Currency, number>>
  >;
  for (const tier of tiers) {
    table[tier] = {} as Record<BillingCycle, Record<Currency, number>>;
    for (const cycle of cycles) {
      table[tier][cycle] = {} as Record<Currency, number>;
      for (const cur of currencies) {
        table[tier][cycle][cur] = calcPrice(tier, cycle, cur);
      }
    }
  }
  return table;
}

export const PRICE_TABLE = buildPriceTable();

// Stripe link placeholders — replace with real Stripe Payment Links
// Format: STRIPE_LINKS[tier][cycle][currency]
function buildStripePlaceholders(): Record<
  PlanTier,
  Record<BillingCycle, Record<Currency, string | null>>
> {
  const tiers: PlanTier[] = ["basic", "premium", "pro", "ultra"];
  const cycles: BillingCycle[] = ["monthly", "quarterly", "biannual", "annual"];
  const currencies: Currency[] = ["INR", "USD", "EUR", "GBP"];
  const result = {} as Record<
    PlanTier,
    Record<BillingCycle, Record<Currency, string | null>>
  >;
  for (const tier of tiers) {
    result[tier] = {} as Record<BillingCycle, Record<Currency, string | null>>;
    for (const cycle of cycles) {
      result[tier][cycle] = {} as Record<Currency, string | null>;
      for (const cur of currencies) {
        result[tier][cycle][cur] =
          `https://buy.stripe.com/placeholder-${tier}-${cycle}-${cur.toLowerCase()}`;
      }
    }
  }
  return result;
}

export const STRIPE_LINKS = buildStripePlaceholders();

// ─── Plan feature definitions ─────────────────────────────────────────────────

export interface PlanDefinition {
  name: string;
  tagline: string;
  monthlyLimit: number;
  countries: string[] | "all";
  exportFormats: string[];
  savedDrafts: number;
  watermark: boolean;
  teamSeats: number;
  features: string[];
  notIncluded: string[];
  highlight?: boolean;
}

export const PLANS: Record<PlanTier, PlanDefinition> = {
  basic: {
    name: "Basic",
    tagline: "For freelancers and bloggers",
    monthlyLimit: 5,
    countries: [
      "gdpr",
      "uk-dpa-2018",
      "ccpa-cpra",
      "india-dpdp-2023",
      "pipeda",
    ] as string[],
    exportFormats: ["copy", "txt"],
    savedDrafts: 3,
    watermark: true,
    teamSeats: 0,
    features: [
      "5 policy generations / month",
      "5 compliance frameworks (GDPR, UK, CCPA, India, Canada)",
      "Privacy Policy generator",
      "Copy + TXT export",
      "3 saved drafts",
      "Dark mode",
    ],
    notIncluded: [
      "PDF / DOC export",
      "All 25+ frameworks",
      "ToS & Cookie Policy generators",
      "No watermark",
      "AI Website Inspector",
      "Team collaboration",
    ],
  },
  premium: {
    name: "Premium",
    tagline: "For small businesses and agencies",
    monthlyLimit: 25,
    countries: "all",
    exportFormats: ["copy", "txt", "pdf"],
    savedDrafts: 20,
    watermark: false,
    teamSeats: 0,
    highlight: true,
    features: [
      "25 policy generations / month",
      "All 25+ compliance frameworks",
      "170+ countries covered",
      "Privacy Policy, ToS & Cookie Policy",
      "Copy, TXT + PDF export",
      "20 saved drafts",
      "No watermark",
      "AI Website Inspector",
      "Compliance checklist + risk score",
      "Section-level editor",
    ],
    notIncluded: [
      "DOC export",
      "Team collaboration",
      "DPIA & Data Breach templates",
      "White-label export",
      "API access",
    ],
  },
  pro: {
    name: "Pro",
    tagline: "For SaaS, clinics and e-commerce",
    monthlyLimit: -1, // unlimited
    countries: "all",
    exportFormats: ["copy", "txt", "pdf", "doc"],
    savedDrafts: -1, // unlimited
    watermark: false,
    teamSeats: 0,
    features: [
      "Unlimited policy generations",
      "All 25+ compliance frameworks",
      "170+ countries covered",
      "All document types incl. DPIA & Data Breach",
      "All export formats (PDF, DOC, TXT)",
      "Unlimited saved drafts",
      "No watermark",
      "AI Website Inspector (full 60+ checks)",
      "Multi-language document output",
      "Logo branding on PDF export",
      "Priority email support",
    ],
    notIncluded: [
      "Team collaboration seats",
      "White-label export",
      "API access",
    ],
  },
  ultra: {
    name: "Ultra",
    tagline: "For agencies and enterprises",
    monthlyLimit: -1, // unlimited
    countries: "all",
    exportFormats: ["copy", "txt", "pdf", "doc"],
    savedDrafts: -1, // unlimited
    watermark: false,
    teamSeats: -1, // unlimited
    features: [
      "Everything in Pro",
      "25+ frameworks + 170+ countries",
      "Unlimited team seats",
      "White-label export (your brand)",
      "Bulk CSV policy generation",
      "Client portal for agencies",
      "API access",
      "Dedicated account manager",
      "Custom compliance modules",
      "SLA-backed priority support",
    ],
    notIncluded: [],
  },
};

export const PLAN_ORDER: PlanTier[] = ["basic", "premium", "pro", "ultra"];

// ─── Currency helpers ─────────────────────────────────────────────────────────

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export const CURRENCY_LABELS: Record<Currency, string> = {
  INR: "INR",
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
};

export const CURRENCY_FLAGS: Record<Currency, string> = {
  INR: "🇮🇳",
  USD: "🇺🇸",
  EUR: "🇪🇺",
  GBP: "🇬🇧",
};

export function detectCurrency(): Currency {
  const locale = navigator.language || "en-US";
  if (locale.includes("en-IN") || locale.startsWith("hi")) return "INR";
  if (locale.includes("en-GB")) return "GBP";
  const euroLocales = [
    "de",
    "fr",
    "es",
    "it",
    "nl",
    "pt",
    "pl",
    "sv",
    "da",
    "fi",
    "no",
  ];
  if (euroLocales.some((l) => locale.startsWith(l))) return "EUR";
  return "USD";
}

// ─── Plan rank helpers ────────────────────────────────────────────────────────

export function getPlanRank(tier: PlanTier): number {
  return PLAN_ORDER.indexOf(tier);
}

export function getPlansAbove(tier: PlanTier): PlanTier[] {
  const rank = getPlanRank(tier);
  return PLAN_ORDER.filter((_, i) => i > rank);
}

export const PLAN_BADGE_STYLES: Record<PlanTier, string> = {
  basic: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  premium: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  pro: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  ultra: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
};

// ─── Pricing display helpers ──────────────────────────────────────────────────

export function formatPrice(amount: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  if (currency === "INR") return `${symbol}${amount.toLocaleString("en-IN")}`;
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

export function getMonthlyEquivalent(
  tier: PlanTier,
  cycle: BillingCycle,
  currency: Currency,
): string {
  const total = PRICE_TABLE[tier][cycle][currency];
  const months = CYCLE_MONTHS[cycle];
  const perMonth = total / months;
  return formatPrice(Math.round(perMonth), currency);
}

export function getSavingsPercent(cycle: BillingCycle): number {
  return Math.round(CYCLE_DISCOUNTS[cycle] * 100);
}
