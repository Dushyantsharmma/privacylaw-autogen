// ─────────────────────────────────────────────────────────────────────────────
// PrivacyLaw AutoGen — AI Inspection Engine v2
// 50+ checks across 10 jurisdiction frameworks + global rules
// ─────────────────────────────────────────────────────────────────────────────

export type IssueSeverity = "critical" | "warning" | "info";

export type IssueCategory =
  | "GDPR"
  | "UK GDPR / DPA 2018"
  | "India DPDP 2023"
  | "CCPA / CPRA"
  | "PIPEDA"
  | "Australia Privacy Act"
  | "Brazil LGPD"
  | "Singapore PDPA"
  | "Japan APPI"
  | "HIPAA"
  | "Cookie Law"
  | "Security"
  | "Transparency"
  | "Children Safety"
  | "Global"
  | "Legal Docs"
  | "Data Rights"
  | "Payment Compliance"
  | "Marketing Compliance"
  | "Platform Liability"
  | "Korea PIPA"
  | "UAE PDPL"
  | "Turkey KVKK"
  | "Thailand PDPA"
  | "Indonesia PDP";

export type Jurisdiction =
  | "EU_GDPR"
  | "UK"
  | "India"
  | "USA_CCPA"
  | "Canada"
  | "Australia"
  | "Brazil"
  | "Singapore"
  | "Japan"
  | "USA_HIPAA"
  | "China"
  | "SouthAfrica"
  | "Korea"
  | "UAE"
  | "SaudiArabia"
  | "Nigeria"
  | "Kenya"
  | "Mexico"
  | "Argentina"
  | "Thailand"
  | "Indonesia"
  | "NewZealand"
  | "Israel"
  | "Philippines"
  | "Switzerland"
  | "Turkey"
  | "Global";

export interface InspectionIssue {
  id: string;
  severity: IssueSeverity;
  category: IssueCategory;
  title: string;
  description: string;
  recommendation: string;
  law: string;
  fineRange?: string;
  fixAction?:
    | "generate_privacy_policy"
    | "generate_cookie_policy"
    | "generate_tos"
    | "generate_dpia";
  jurisdictions: Jurisdiction[];
}

export interface JurisdictionInfo {
  code: Jurisdiction;
  label: string;
  flag: string;
  framework: string;
  regulator: string;
  maxFine: string;
}

export const JURISDICTION_INFO: Record<Jurisdiction, JurisdictionInfo> = {
  EU_GDPR: {
    code: "EU_GDPR",
    label: "European Union",
    flag: "🇪🇺",
    framework: "GDPR (Regulation 2016/679)",
    regulator: "National DPA (EDPB coordinates)",
    maxFine: "€20M or 4% global annual turnover",
  },
  UK: {
    code: "UK",
    label: "United Kingdom",
    flag: "🇬🇧",
    framework: "UK GDPR + Data Protection Act 2018",
    regulator: "ICO (Information Commissioner's Office)",
    maxFine: "£17.5M or 4% global annual turnover",
  },
  India: {
    code: "India",
    label: "India",
    flag: "🇮🇳",
    framework: "DPDP Act 2023 (Digital Personal Data Protection)",
    regulator: "Data Protection Board of India",
    maxFine: "₹250 crore per instance",
  },
  USA_CCPA: {
    code: "USA_CCPA",
    label: "United States (California)",
    flag: "🇺🇸",
    framework: "CCPA / CPRA (California Privacy Rights Act)",
    regulator: "California Privacy Protection Agency (CPPA)",
    maxFine: "$7,500 per intentional violation",
  },
  Canada: {
    code: "Canada",
    label: "Canada",
    flag: "🇨🇦",
    framework:
      "PIPEDA (Personal Information Protection and Electronic Documents Act)",
    regulator: "Office of the Privacy Commissioner of Canada",
    maxFine: "CAD $100,000 per violation",
  },
  Australia: {
    code: "Australia",
    label: "Australia",
    flag: "🇦🇺",
    framework: "Privacy Act 1988 (Australian Privacy Principles)",
    regulator: "Office of the Australian Information Commissioner (OAIC)",
    maxFine: "AUD $50M or 30% of adjusted turnover",
  },
  Brazil: {
    code: "Brazil",
    label: "Brazil",
    flag: "🇧🇷",
    framework: "LGPD (Lei Geral de Proteção de Dados No. 13.709/2018)",
    regulator: "ANPD (Autoridade Nacional de Proteção de Dados)",
    maxFine: "2% of Brazil revenue, max R$50M per infraction",
  },
  Singapore: {
    code: "Singapore",
    label: "Singapore",
    flag: "🇸🇬",
    framework: "PDPA 2012 (Personal Data Protection Act, amended 2020)",
    regulator: "PDPC (Personal Data Protection Commission)",
    maxFine: "SGD $1M or 10% of annual Singapore turnover",
  },
  Japan: {
    code: "Japan",
    label: "Japan",
    flag: "🇯🇵",
    framework:
      "APPI (Act on the Protection of Personal Information, 2022 amendment)",
    regulator: "PPC (Personal Information Protection Commission)",
    maxFine: "¥100M (corporate) + criminal penalties",
  },
  USA_HIPAA: {
    code: "USA_HIPAA",
    label: "USA Healthcare (HIPAA)",
    flag: "🏥",
    framework: "HIPAA (Health Insurance Portability and Accountability Act)",
    regulator: "HHS Office for Civil Rights (OCR)",
    maxFine: "$1.9M per violation category per year",
  },
  China: {
    code: "China",
    label: "China",
    flag: "🇨🇳",
    framework: "PIPL (Personal Information Protection Law 2021)",
    regulator: "CAC (Cyberspace Administration of China)",
    maxFine: "¥50M or 5% of prior year revenue",
  },
  SouthAfrica: {
    code: "SouthAfrica",
    label: "South Africa",
    flag: "🇿🇦",
    framework: "POPIA (Protection of Personal Information Act 4 of 2013)",
    regulator: "Information Regulator of South Africa",
    maxFine: "ZAR R10M or imprisonment",
  },
  Korea: {
    code: "Korea",
    label: "South Korea",
    flag: "🇰🇷",
    framework: "PIPA (Personal Information Protection Act)",
    regulator: "Personal Information Protection Commission (PIPC)",
    maxFine: "KRW 300M or 3% of annual turnover",
  },
  UAE: {
    code: "UAE",
    label: "United Arab Emirates",
    flag: "🇦🇪",
    framework: "UAE Federal Decree-Law No. 45/2021 (PDPL)",
    regulator: "UAE Data Office",
    maxFine: "AED 20M per violation",
  },
  SaudiArabia: {
    code: "SaudiArabia",
    label: "Saudi Arabia",
    flag: "🇸🇦",
    framework: "Saudi Arabia PDPL (Personal Data Protection Law)",
    regulator: "SDAIA / NDMO (National Data Management Office)",
    maxFine: "SAR 5M (first offence) / SAR 10M (repeat)",
  },
  Nigeria: {
    code: "Nigeria",
    label: "Nigeria",
    flag: "🇳🇬",
    framework: "Nigeria NDPA 2023 (Nigeria Data Protection Act)",
    regulator: "NDPC (Nigeria Data Protection Commission)",
    maxFine: "NGN 10M or 2% of annual gross revenue",
  },
  Kenya: {
    code: "Kenya",
    label: "Kenya",
    flag: "🇰🇪",
    framework: "Kenya Data Protection Act 2019",
    regulator: "ODPC (Office of the Data Protection Commissioner)",
    maxFine: "KES 5M or 1% of annual turnover",
  },
  Mexico: {
    code: "Mexico",
    label: "Mexico",
    flag: "🇲🇽",
    framework: "Mexico LFPDPPP (Federal Law on Protection of Personal Data)",
    regulator: "INAI (Instituto Nacional de Transparencia)",
    maxFine: "MXN 320M per violation",
  },
  Argentina: {
    code: "Argentina",
    label: "Argentina",
    flag: "🇦🇷",
    framework: "Argentina Personal Data Protection Law 25.326 (PDPL)",
    regulator: "AAIP (Agencia de Acceso a la Información Pública)",
    maxFine: "ARS 3M+ per violation (escalating)",
  },
  Thailand: {
    code: "Thailand",
    label: "Thailand",
    flag: "🇹🇭",
    framework: "Thailand PDPA (Personal Data Protection Act B.E. 2562/2019)",
    regulator: "PDPC Thailand (Personal Data Protection Committee)",
    maxFine: "THB 5M administrative + criminal liability",
  },
  Indonesia: {
    code: "Indonesia",
    label: "Indonesia",
    flag: "🇮🇩",
    framework: "Indonesia PDP Law 2022 (UU PDP No. 27/2022)",
    regulator: "Ministry of Communication and Information Technology (MOCI)",
    maxFine: "IDR 60B or 2% of annual revenue",
  },
  NewZealand: {
    code: "NewZealand",
    label: "New Zealand",
    flag: "🇳🇿",
    framework: "New Zealand Privacy Act 2020",
    regulator: "Privacy Commissioner of New Zealand",
    maxFine: "NZD 10,000 per individual violation",
  },
  Israel: {
    code: "Israel",
    label: "Israel",
    flag: "🇮🇱",
    framework: "Israel Protection of Privacy Law 5741-1981 (PPL)",
    regulator: "PPA (Privacy Protection Authority) / ILITA",
    maxFine: "ILS 3.2M per violation",
  },
  Philippines: {
    code: "Philippines",
    label: "Philippines",
    flag: "🇵🇭",
    framework: "Philippines Data Privacy Act 2012 (RA 10173)",
    regulator: "NPC (National Privacy Commission)",
    maxFine: "PHP 5M + 6 years imprisonment",
  },
  Switzerland: {
    code: "Switzerland",
    label: "Switzerland",
    flag: "🇨🇭",
    framework: "Switzerland nFADP / revDSG (effective 1 Sept 2023)",
    regulator: "FDPIC (Federal Data Protection and Information Commissioner)",
    maxFine: "CHF 250,000 per individual (criminal)",
  },
  Turkey: {
    code: "Turkey",
    label: "Turkey",
    flag: "🇹🇷",
    framework: "Turkey KVKK (Law No. 6698 on Protection of Personal Data)",
    regulator: "KVKK (Personal Data Protection Authority)",
    maxFine: "TRY 1.9M + criminal liability",
  },
  Global: {
    code: "Global",
    label: "Global",
    flag: "🌐",
    framework: "Global best practices & multiple laws",
    regulator: "Multiple regulators",
    maxFine: "Varies by jurisdiction",
  },
};

// ─── TLD → Jurisdiction mapping ──────────────────────────────────────────────

export function detectJurisdictionsFromUrl(url: string): Jurisdiction[] {
  try {
    const hostname = new URL(url).hostname.toLowerCase();

    // Country-code TLDs
    if (hostname.endsWith(".in") || hostname.endsWith(".co.in"))
      return ["India", "Global"];
    if (
      hostname.endsWith(".uk") ||
      hostname.endsWith(".co.uk") ||
      hostname.endsWith(".org.uk") ||
      hostname.endsWith(".me.uk") ||
      hostname.endsWith(".gov.uk")
    )
      return ["UK", "Global"];
    if (hostname.endsWith(".eu")) return ["EU_GDPR", "Global"];
    if (
      hostname.endsWith(".de") ||
      hostname.endsWith(".fr") ||
      hostname.endsWith(".es") ||
      hostname.endsWith(".it") ||
      hostname.endsWith(".nl") ||
      hostname.endsWith(".be") ||
      hostname.endsWith(".pl") ||
      hostname.endsWith(".se") ||
      hostname.endsWith(".dk") ||
      hostname.endsWith(".fi") ||
      hostname.endsWith(".no") ||
      hostname.endsWith(".at") ||
      hostname.endsWith(".ch") ||
      hostname.endsWith(".pt") ||
      hostname.endsWith(".gr") ||
      hostname.endsWith(".cz") ||
      hostname.endsWith(".hu") ||
      hostname.endsWith(".ro") ||
      hostname.endsWith(".sk") ||
      hostname.endsWith(".hr") ||
      hostname.endsWith(".bg") ||
      hostname.endsWith(".si") ||
      hostname.endsWith(".lt") ||
      hostname.endsWith(".lv") ||
      hostname.endsWith(".ee") ||
      hostname.endsWith(".lu") ||
      hostname.endsWith(".mt") ||
      hostname.endsWith(".ie") ||
      hostname.endsWith(".cy")
    )
      return ["EU_GDPR", "Global"];
    if (hostname.endsWith(".ca")) return ["Canada", "Global"];
    if (
      hostname.endsWith(".au") ||
      hostname.endsWith(".com.au") ||
      hostname.endsWith(".net.au") ||
      hostname.endsWith(".org.au")
    )
      return ["Australia", "Global"];
    if (hostname.endsWith(".br") || hostname.endsWith(".com.br"))
      return ["Brazil", "Global"];
    if (hostname.endsWith(".sg")) return ["Singapore", "Global"];
    if (hostname.endsWith(".jp")) return ["Japan", "Global"];
    if (hostname.endsWith(".us") || hostname.endsWith(".gov"))
      return ["USA_CCPA", "Global"];
    if (hostname.endsWith(".cn") || hostname.endsWith(".com.cn"))
      return ["China", "Global"];
    if (hostname.endsWith(".za") || hostname.endsWith(".co.za"))
      return ["SouthAfrica", "Global"];
    // South Korea — PIPA
    if (
      hostname.endsWith(".kr") ||
      hostname.endsWith(".co.kr") ||
      hostname.endsWith(".or.kr") ||
      hostname.endsWith(".go.kr")
    )
      return ["Korea", "Global"];
    // UAE — PDPL
    if (
      hostname.endsWith(".ae") ||
      hostname.endsWith(".com.ae") ||
      hostname.endsWith(".gov.ae") ||
      hostname.endsWith(".net.ae")
    )
      return ["UAE", "Global"];
    // Saudi Arabia — PDPL
    if (
      hostname.endsWith(".sa") ||
      hostname.endsWith(".com.sa") ||
      hostname.endsWith(".gov.sa") ||
      hostname.endsWith(".net.sa") ||
      hostname.endsWith(".org.sa")
    )
      return ["SaudiArabia", "Global"];
    // Nigeria — NDPA 2023
    if (
      hostname.endsWith(".ng") ||
      hostname.endsWith(".com.ng") ||
      hostname.endsWith(".gov.ng") ||
      hostname.endsWith(".org.ng") ||
      hostname.endsWith(".edu.ng")
    )
      return ["Nigeria", "Global"];
    // Kenya — DPA 2019
    if (
      hostname.endsWith(".ke") ||
      hostname.endsWith(".co.ke") ||
      hostname.endsWith(".go.ke") ||
      hostname.endsWith(".or.ke")
    )
      return ["Kenya", "Global"];
    // Mexico — LFPDPPP + CCPA where US users served
    if (
      hostname.endsWith(".mx") ||
      hostname.endsWith(".com.mx") ||
      hostname.endsWith(".gob.mx")
    )
      return ["Mexico", "Global"];
    // Argentina — PDPL 25.326
    if (
      hostname.endsWith(".ar") ||
      hostname.endsWith(".com.ar") ||
      hostname.endsWith(".gov.ar")
    )
      return ["Argentina", "Global"];
    // Thailand — PDPA
    if (
      hostname.endsWith(".th") ||
      hostname.endsWith(".co.th") ||
      hostname.endsWith(".go.th") ||
      hostname.endsWith(".or.th") ||
      hostname.endsWith(".ac.th")
    )
      return ["Thailand", "Global"];
    // Indonesia — PDP Law
    if (
      hostname.endsWith(".id") ||
      hostname.endsWith(".co.id") ||
      hostname.endsWith(".go.id") ||
      hostname.endsWith(".or.id") ||
      hostname.endsWith(".ac.id")
    )
      return ["Indonesia", "Global"];
    // New Zealand — Privacy Act 2020
    if (
      hostname.endsWith(".nz") ||
      hostname.endsWith(".co.nz") ||
      hostname.endsWith(".govt.nz")
    )
      return ["NewZealand", "Global"];
    // Israel — PPL
    if (
      hostname.endsWith(".il") ||
      hostname.endsWith(".co.il") ||
      hostname.endsWith(".gov.il")
    )
      return ["Israel", "Global"];
    // Philippines — DPA 2012
    if (
      hostname.endsWith(".ph") ||
      hostname.endsWith(".com.ph") ||
      hostname.endsWith(".gov.ph") ||
      hostname.endsWith(".edu.ph")
    )
      return ["Philippines", "Global"];
    // Turkey — KVKK
    if (
      hostname.endsWith(".tr") ||
      hostname.endsWith(".com.tr") ||
      hostname.endsWith(".gov.tr")
    )
      return ["Turkey", "Global"];
    // Switzerland — nFADP (not EU but adequacy decision granted)
    if (hostname.endsWith(".ch")) return ["Switzerland", "EU_GDPR", "Global"];
    // Malaysia — PDPA 2010 (similar to Singapore)
    if (hostname.endsWith(".my") || hostname.endsWith(".com.my"))
      return ["Singapore", "Global"];
    // Vietnam — PDPD (Decree 13/2023)
    if (hostname.endsWith(".vn") || hostname.endsWith(".com.vn"))
      return ["China", "Global"]; // Closest proxy — heavy data localisation requirements
    // Pakistan — PECA / draft Personal Data Protection Bill
    if (hostname.endsWith(".pk") || hostname.endsWith(".com.pk"))
      return ["Global", "EU_GDPR"];
    // Bangladesh
    if (hostname.endsWith(".bd") || hostname.endsWith(".com.bd"))
      return ["Global", "EU_GDPR"];
    // Sri Lanka — draft PDPA
    if (hostname.endsWith(".lk") || hostname.endsWith(".com.lk"))
      return ["Global", "EU_GDPR"];
    // Nepal
    if (hostname.endsWith(".np") || hostname.endsWith(".com.np"))
      return ["Global", "EU_GDPR"];
    // Hong Kong — PDPO (Cap. 486)
    if (hostname.endsWith(".hk") || hostname.endsWith(".com.hk"))
      return ["China", "Global"]; // PDPO closely mirrors HK jurisdiction
    // Taiwan — PDPA
    if (hostname.endsWith(".tw") || hostname.endsWith(".com.tw"))
      return ["Japan", "Global"]; // Similar structure to APPI
    // Russia — Federal Law No. 152-FZ
    if (hostname.endsWith(".ru") || hostname.endsWith(".com.ru"))
      return ["Global", "EU_GDPR"];
    // Ukraine — Law on Personal Data Protection
    if (hostname.endsWith(".ua") || hostname.endsWith(".com.ua"))
      return ["EU_GDPR", "Global"];
    // EEA countries not listed above (Norway, Iceland, Liechtenstein) — GDPR via EEA Agreement
    if (
      hostname.endsWith(".no") ||
      hostname.endsWith(".is") ||
      hostname.endsWith(".li")
    )
      return ["EU_GDPR", "Global"];

    // Generic TLDs — apply GDPR + CCPA as most commonly applicable globally
    return ["EU_GDPR", "USA_CCPA", "UK", "Global"];
  } catch {
    return ["EU_GDPR", "USA_CCPA", "Global"];
  }
}

// ─── Sector detection ─────────────────────────────────────────────────────────

export type Sector =
  | "healthcare"
  | "ecommerce"
  | "education"
  | "travel"
  | "fintech"
  | "generic";

export function detectSectorFromUrl(url: string): Sector {
  try {
    const lower = url.toLowerCase();
    // Healthcare — 30+ signals
    if (
      lower.includes("health") ||
      lower.includes("clinic") ||
      lower.includes("hospital") ||
      lower.includes("medical") ||
      lower.includes("pharmacy") ||
      lower.includes("pharma") ||
      lower.includes("doctor") ||
      lower.includes("dental") ||
      lower.includes("dentist") ||
      lower.includes("patient") ||
      lower.includes("nhs") ||
      lower.includes("rehab") ||
      lower.includes("therapy") ||
      lower.includes("therapist") ||
      lower.includes("physio") ||
      lower.includes("dietitian") ||
      lower.includes("nutrition") ||
      lower.includes("medit") ||
      lower.includes("wellness") ||
      lower.includes("optician") ||
      lower.includes("ophthalmol") ||
      lower.includes("dermatol") ||
      lower.includes("ortho") ||
      lower.includes("surgery") ||
      lower.includes("radiol") ||
      lower.includes("pathol") ||
      lower.includes("vet") ||
      lower.includes("telehealth") ||
      lower.includes("telemedi") ||
      lower.includes("emr") ||
      lower.includes("ehr") ||
      lower.includes("prescription")
    )
      return "healthcare";
    // E-commerce — 25+ signals
    if (
      lower.includes("shop") ||
      lower.includes("store") ||
      lower.includes("buy") ||
      lower.includes("cart") ||
      lower.includes("ecommerce") ||
      lower.includes("e-commerce") ||
      lower.includes("product") ||
      lower.includes("order") ||
      lower.includes("checkout") ||
      lower.includes("marketplace") ||
      lower.includes("retail") ||
      lower.includes("fashion") ||
      lower.includes("clothing") ||
      lower.includes("apparel") ||
      lower.includes("shoes") ||
      lower.includes("furniture") ||
      lower.includes("grocery") ||
      lower.includes("supermarket") ||
      lower.includes("electronics") ||
      lower.includes("gadget") ||
      lower.includes("deals") ||
      lower.includes("discount") ||
      lower.includes("coupon") ||
      lower.includes("shipping") ||
      lower.includes("delivery") ||
      lower.includes("amazon") ||
      lower.includes("flipkart") ||
      lower.includes("ebay")
    )
      return "ecommerce";
    // Education — 25+ signals
    if (
      lower.includes("school") ||
      lower.includes(".edu") ||
      lower.includes("learn") ||
      lower.includes("course") ||
      lower.includes("student") ||
      lower.includes("university") ||
      lower.includes("college") ||
      lower.includes("academy") ||
      lower.includes("tutor") ||
      lower.includes("teaching") ||
      lower.includes("teacher") ||
      lower.includes("class") ||
      lower.includes("lecture") ||
      lower.includes("curriculum") ||
      lower.includes("kindergarten") ||
      lower.includes("nursery") ||
      lower.includes("preschool") ||
      lower.includes("driving school") ||
      lower.includes("drivingschool") ||
      lower.includes("driving-school") ||
      lower.includes("skill") ||
      lower.includes("certification") ||
      lower.includes("exam") ||
      lower.includes("assessment") ||
      lower.includes("lms") ||
      lower.includes("edtech") ||
      lower.includes("mooc") ||
      lower.includes("moodle") ||
      lower.includes("coursera") ||
      lower.includes("udemy")
    )
      return "education";
    // Travel — 20+ signals
    if (
      lower.includes("travel") ||
      lower.includes("hotel") ||
      lower.includes("flight") ||
      lower.includes("booking") ||
      lower.includes("tour") ||
      lower.includes("trip") ||
      lower.includes("holiday") ||
      lower.includes("vacation") ||
      lower.includes("cruise") ||
      lower.includes("resort") ||
      lower.includes("hostel") ||
      lower.includes("airbnb") ||
      lower.includes("airlines") ||
      lower.includes("airport") ||
      lower.includes("visa") ||
      lower.includes("passport") ||
      lower.includes("itinerary") ||
      lower.includes("destination") ||
      lower.includes("excursion") ||
      lower.includes("safari") ||
      lower.includes("backpack") ||
      lower.includes("expedition") ||
      lower.includes("railway") ||
      lower.includes("train") ||
      lower.includes("bus")
    )
      return "travel";
    // Fintech — 25+ signals
    if (
      lower.includes("bank") ||
      lower.includes("finance") ||
      lower.includes("fintech") ||
      lower.includes("loan") ||
      lower.includes("invest") ||
      lower.includes("crypto") ||
      lower.includes("payment") ||
      lower.includes("wallet") ||
      lower.includes("insurance") ||
      lower.includes("insur") ||
      lower.includes("mortgage") ||
      lower.includes("forex") ||
      lower.includes("trading") ||
      lower.includes("exchange") ||
      lower.includes("credit") ||
      lower.includes("debit") ||
      lower.includes("neobank") ||
      lower.includes("lend") ||
      lower.includes("capital") ||
      lower.includes("fund") ||
      lower.includes("pension") ||
      lower.includes("savings") ||
      lower.includes("accountant") ||
      lower.includes("audit") ||
      lower.includes("tax") ||
      lower.includes("payroll") ||
      lower.includes("invoice") ||
      lower.includes("stripe") ||
      lower.includes("paypal") ||
      lower.includes("razorpay") ||
      lower.includes("defi") ||
      lower.includes("nft")
    )
      return "fintech";
    return "generic";
  } catch {
    return "generic";
  }
}

// ─── Enhanced path/URL analysis for better domain fallback ───────────────────

export function extractDomainKeywords(url: string): {
  hasCookieBanner: boolean;
  hasPrivacyFooter: boolean;
  hasContactPage: boolean;
  hasBlog: boolean;
  hasShop: boolean;
  hasLogin: boolean;
  hasApi: boolean;
  hasChildren: boolean;
  hasPayment: boolean;
  hasHealth: boolean;
} {
  const lower = url.toLowerCase();
  return {
    hasCookieBanner: lower.includes("cookie") || lower.includes("consent"),
    hasPrivacyFooter:
      lower.includes("privacy") || lower.includes("datenschutz"),
    hasContactPage: lower.includes("contact") || lower.includes("about"),
    hasBlog:
      lower.includes("blog") ||
      lower.includes("news") ||
      lower.includes("article"),
    hasShop:
      lower.includes("shop") ||
      lower.includes("store") ||
      lower.includes("cart") ||
      lower.includes("product"),
    hasLogin:
      lower.includes("login") ||
      lower.includes("signin") ||
      lower.includes("account"),
    hasApi:
      lower.includes("api") ||
      lower.includes("developer") ||
      lower.includes("integration"),
    hasChildren:
      lower.includes("kids") ||
      lower.includes("children") ||
      lower.includes("school") ||
      lower.includes("student") ||
      lower.includes("under13"),
    hasPayment:
      lower.includes("payment") ||
      lower.includes("pay") ||
      lower.includes("checkout") ||
      lower.includes("stripe") ||
      lower.includes("razorpay"),
    hasHealth:
      lower.includes("health") ||
      lower.includes("medical") ||
      lower.includes("patient") ||
      lower.includes("clinic"),
  };
}

// ─── Domain-based fallback analysis ──────────────────────────────────────────

export function analyzeByDomain(
  url: string,
  jurisdictions: Jurisdiction[],
): InspectionIssue[] {
  const sector = detectSectorFromUrl(url);
  const urlKeywords = extractDomainKeywords(url);
  const issues: InspectionIssue[] = [];

  const isGDPR =
    jurisdictions.includes("EU_GDPR") || jurisdictions.includes("UK");
  const isIndia = jurisdictions.includes("India");
  const isCCPA = jurisdictions.includes("USA_CCPA");
  const isChina = jurisdictions.includes("China");
  const isSouthAfrica = jurisdictions.includes("SouthAfrica");
  const isBrazil = jurisdictions.includes("Brazil");
  const isSingapore = jurisdictions.includes("Singapore");
  const isJapan = jurisdictions.includes("Japan");
  const isCanada = jurisdictions.includes("Canada");
  const isAustralia = jurisdictions.includes("Australia");
  const isKorea = jurisdictions.includes("Korea");
  const isUAE = jurisdictions.includes("UAE");
  const isSaudi = jurisdictions.includes("SaudiArabia");
  const isNigeria = jurisdictions.includes("Nigeria");
  const isKenya = jurisdictions.includes("Kenya");
  const isMexico = jurisdictions.includes("Mexico");
  const isArgentina = jurisdictions.includes("Argentina");
  const isThailand = jurisdictions.includes("Thailand");
  const isIndonesia = jurisdictions.includes("Indonesia");
  const isNewZealand = jurisdictions.includes("NewZealand");
  const isIsrael = jurisdictions.includes("Israel");
  const isPhilippines = jurisdictions.includes("Philippines");
  const isSwitzerland = jurisdictions.includes("Switzerland");
  const isTurkey = jurisdictions.includes("Turkey");

  // Global requirements (cannot verify without HTML, flag as needing verification)
  issues.push({
    id: "DOM-01-verify-privacy-policy",
    severity: "critical",
    category: "Legal Docs",
    title: "Privacy Policy Presence Cannot Be Verified (Live Fetch Blocked)",
    description:
      "The website could not be fetched for live analysis (bot protection, Cloudflare, or JS-rendering). A privacy policy is legally required in all jurisdictions. Please verify manually that a clearly linked privacy policy exists in your footer.",
    recommendation:
      "Ensure your privacy policy is linked from the footer of every page with a clear label ('Privacy Policy'). If you need one, generate a compliant policy using the PrivacyLaw AutoGen generator.",
    law: "GDPR Art. 13 · CCPA §1798.100 · DPDP Act 2023 §7 · LGPD Art. 9 · PDPA §13",
    fineRange: "GDPR: up to €20M / CCPA: $7,500/violation",
    fixAction: "generate_privacy_policy",
    jurisdictions,
  });

  issues.push({
    id: "DOM-02-verify-cookie-consent",
    severity: "critical",
    category: "Cookie Law",
    title: "Cookie Consent Mechanism Cannot Be Verified",
    description:
      "Unable to verify if a cookie consent banner is present. Sites using analytics, advertising, or tracking cookies must display a consent banner before loading any non-essential cookies.",
    recommendation:
      "Implement a Consent Management Platform (CMP) such as Cookiebot, OneTrust, or CookieYes. Ensure all tracking scripts are blocked until the user consents.",
    law: "ePrivacy Directive Art. 5(3) · GDPR Art. 6(1)(a) · PECR (UK) · India DPDP §6",
    fineRange: "GDPR: up to €20M / PECR: up to £500,000",
    fixAction: "generate_cookie_policy",
    jurisdictions,
  });

  issues.push({
    id: "DOM-03-verify-tos",
    severity: "warning",
    category: "Legal Docs",
    title: "Terms of Service Cannot Be Verified",
    description:
      "Unable to confirm a Terms of Service or Terms of Use page exists. This document protects your business and sets enforceable expectations for users.",
    recommendation:
      "Publish Terms of Service and link from your footer. Use PrivacyLaw AutoGen to generate compliant ToS.",
    law: "Consumer Protection Directive (EU) · E-Commerce Regulations (UK) · Consumer Protection Act (India)",
    fixAction: "generate_tos",
    jurisdictions,
  });

  issues.push({
    id: "DOM-04-verify-security",
    severity: "warning",
    category: "Security",
    title: "Security Measures Cannot Be Verified From Domain Alone",
    description:
      "Technical security measures (HTTPS enforcement, encryption, breach response) cannot be confirmed without page access. All data protection laws require adequate technical security.",
    recommendation:
      "Ensure HTTPS is enforced site-wide, add security headers (HSTS, CSP, X-Frame-Options), and document your security measures in your privacy policy under a 'Security' section.",
    law: "GDPR Art. 32 · UK GDPR Art. 32 · India IT Act §43A · HIPAA §164.312",
    fineRange: "GDPR: up to €10M",
    fixAction: "generate_privacy_policy",
    jurisdictions,
  });

  // Jurisdiction-specific issues
  if (isGDPR) {
    issues.push({
      id: "DOM-GDPR-01",
      severity: "critical",
      category: "GDPR",
      title: "GDPR Lawful Basis Disclosure Required",
      description:
        "Your site serves EU/UK users and must disclose the lawful basis for every data processing activity under GDPR Article 6. This must appear in your privacy policy.",
      recommendation:
        "Add a 'Legal Basis for Processing' section to your privacy policy. For each data type collected, specify which of the 6 bases applies: consent, contract, legal obligation, vital interests, public task, or legitimate interests.",
      law: "GDPR Art. 6 · GDPR Art. 13(1)(c) · UK GDPR",
      fineRange: "Up to €20M or 4% global turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["EU_GDPR", "UK"],
    });

    issues.push({
      id: "DOM-GDPR-02",
      severity: "critical",
      category: "Data Rights",
      title: "GDPR Data Subject Rights (8 Rights) Must Be Disclosed",
      description:
        "GDPR grants 8 rights to EU/UK data subjects: access, rectification, erasure, restriction, portability, objection, automated decision-making, and complaint. These must be disclosed with instructions on how to exercise them.",
      recommendation:
        "Add a 'Your Rights Under GDPR' section listing all 8 rights. Include a dedicated contact method (e.g., privacy@yoursite.com) for rights requests and specify your response time (1 month under Art. 12).",
      law: "GDPR Art. 15–22 · GDPR Art. 13(2)(b) · UK GDPR",
      fineRange: "Up to €20M or 4% turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["EU_GDPR", "UK"],
    });

    issues.push({
      id: "DOM-GDPR-03",
      severity: "warning",
      category: "GDPR",
      title:
        "International Data Transfer Safeguards Required (Post-Schrems II)",
      description:
        "If your site uses any US-based services (analytics, CDN, cloud hosting), those transfers outside the EU/EEA require legal safeguards. Post-Schrems II, Standard Contractual Clauses must be accompanied by a Transfer Impact Assessment.",
      recommendation:
        "Identify all transfers to third countries. For each, document the transfer mechanism (EU SCCs, adequacy decision, BCRs). The EU-US Data Privacy Framework (2023) covers transfers to certified US companies. Add a 'International Transfers' section to your privacy policy.",
      law: "GDPR Art. 44–49 · UK GDPR Ch. V · Schrems II (C-311/18) · EU-US DPF 2023",
      fineRange: "Up to €20M or 4% turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["EU_GDPR", "UK"],
    });
  }

  if (isIndia) {
    issues.push({
      id: "DOM-IN-01",
      severity: "critical",
      category: "India DPDP 2023",
      title: "DPDP Act 2023 Compliance Required for India (.in domain)",
      description:
        "Your site uses an .in domain, indicating it serves Indian users and falls under India's Digital Personal Data Protection Act 2023. The Act mandates specific disclosures, a Grievance Officer, and verifiable consent mechanisms.",
      recommendation:
        "Update your privacy policy to: (1) identify yourself as a Data Fiduciary, (2) appoint and publish a Grievance Officer with Indian contact details, (3) use DPDP-compliant consent mechanisms, (4) disclose Data Principal rights (access, correction, erasure, nominee). Reference the DPDP Act 2023.",
      law: "DPDP Act 2023 §7 (Notice) · §8 (Consent) · §8(10) (Grievance) · §12-14 (Rights)",
      fineRange: "Up to ₹250 crore per instance",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["India"],
    });
  }

  if (isCCPA) {
    issues.push({
      id: "DOM-CA-01",
      severity: "critical",
      category: "CCPA / CPRA",
      title: "CCPA/CPRA 'Do Not Sell' Link Required (California Users)",
      description:
        "Sites serving California residents that sell or share personal data must provide a 'Do Not Sell or Share My Personal Information' link in the footer. This requirement applies to businesses with >$25M annual revenue, >100,000 consumers' data, or 50%+ revenue from data sales.",
      recommendation:
        "Add a 'Do Not Sell or Share My Personal Information' link to your footer. Even if you don't sell data, add a clear statement to this effect in your privacy policy to avoid confusion.",
      law: "CCPA §1798.120 · CPRA §1798.135",
      fineRange: "$7,500 per intentional violation",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["USA_CCPA"],
    });
  }

  if (isChina) {
    issues.push({
      id: "DOM-CN-01",
      severity: "critical",
      category: "Global",
      title: "China PIPL Compliance Required (.cn domain)",
      description:
        "Your site uses a .cn domain, indicating it operates in China and is subject to China's Personal Information Protection Law (PIPL) effective November 2021. PIPL has stringent requirements including a mandatory separate consent for sensitive data and strict cross-border transfer restrictions.",
      recommendation:
        "Ensure PIPL compliance: (1) Obtain separate consent for each processing purpose, (2) Appoint a Person in Charge of Personal Information Protection (PIP Officer), (3) For cross-border transfers, pass CAC security assessment or obtain SCCs, (4) Conduct Personal Information Protection Impact Assessments (PIPIAs) for sensitive data, (5) Store Chinese users' data locally where required by data localisation rules.",
      law: "PIPL Art. 13 (Consent) · Art. 17 (Notice) · Art. 23 (Transfer) · Art. 40 (Cross-border) · Art. 52 (Officer)",
      fineRange: "¥50M or 5% of prior year revenue + business suspension",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["China"],
    });

    issues.push({
      id: "DOM-CN-02",
      severity: "critical",
      category: "Security",
      title: "China Cybersecurity Law (CSL) + Data Security Law (DSL) Apply",
      description:
        "Sites operating in China must also comply with the Cybersecurity Law (CSL 2017) and Data Security Law (DSL 2021) in addition to PIPL. These laws require data classification, security protection grading, and network operator registration.",
      recommendation:
        "Implement the Multi-Level Protection Scheme (MLPS) under CSL. Classify your data under DSL's 'important data' / 'general data' / 'core data' framework. Appoint a network security officer. Conduct annual security assessments.",
      law: "CSL (2017) Art. 21 · DSL (2021) Art. 21 · PIPL Art. 51",
      fineRange: "Up to ¥1M + criminal liability",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["China"],
    });
  }

  if (isSouthAfrica) {
    issues.push({
      id: "DOM-ZA-01",
      severity: "critical",
      category: "Global",
      title: "POPIA Compliance Required (.za domain)",
      description:
        "Your site uses a .za domain and is subject to South Africa's Protection of Personal Information Act (POPIA 2013, effective July 2021). POPIA requires registration with the Information Regulator and compliance with 8 conditions for lawful processing.",
      recommendation:
        "Ensure POPIA compliance: (1) Appoint an Information Officer and register with the Information Regulator, (2) Implement all 8 POPIA conditions (Accountability, Processing Limitation, Purpose Specification, Further Processing Limitation, Information Quality, Openness, Security Safeguards, Data Subject Participation), (3) Report data breaches to the Information Regulator within 72 hours.",
      law: "POPIA Act 4 of 2013 §55 (Information Officer) · §69-71 (Conditions) · §22 (Breach notification)",
      fineRange: "ZAR R10M or 10 years' imprisonment",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["SouthAfrica"],
    });
  }

  if (isBrazil) {
    issues.push({
      id: "DOM-BR-01",
      severity: "critical",
      category: "Brazil LGPD",
      title: "LGPD Compliance Required (.br domain)",
      description:
        "Your site uses a .br domain and is subject to Brazil's Lei Geral de Proteção de Dados (LGPD No. 13.709/2018). LGPD requires a DPO (Encarregado), ANPD registration for significant processors, and disclosure of all 10 legal bases for processing.",
      recommendation:
        "Ensure LGPD compliance: (1) Appoint and publish a DPO (Encarregado), (2) Document your legal basis under Art. 7 for each processing activity, (3) Disclose all 9 data subject rights under Art. 18, (4) Implement 72-hour breach notification to ANPD.",
      law: "LGPD Art. 7 (Legal basis) · Art. 18 (Rights) · Art. 41 (DPO) · Art. 48 (Breach)",
      fineRange: "2% of Brazil revenue, max R$50M per infraction",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Brazil"],
    });
  }

  if (isSingapore) {
    issues.push({
      id: "DOM-SG-01",
      severity: "critical",
      category: "Singapore PDPA",
      title: "PDPA Compliance Required (.sg domain)",
      description:
        "Your site uses a .sg domain and is subject to Singapore's Personal Data Protection Act (PDPA 2012, amended 2020). The amended PDPA mandates mandatory DPO appointment, 3-business-day breach notification, and deemed consent provisions.",
      recommendation:
        "Appoint a mandatory DPO under §37. Implement 3-business-day breach notification to PDPC. Update privacy policy with PDPA-specific rights (access, correction, data portability, withdrawal of consent). Display the PDPC logo/reference.",
      law: "PDPA 2012 §37 (DPO) · §26D (Breach notification) · §13 (Consent) · §26 (Access/correction)",
      fineRange: "SGD $1M or 10% of annual Singapore turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Singapore"],
    });
  }

  if (isJapan) {
    issues.push({
      id: "DOM-JP-01",
      severity: "critical",
      category: "Japan APPI",
      title: "APPI Compliance Required (.jp domain)",
      description:
        "Your site uses a .jp domain and is subject to Japan's Act on the Protection of Personal Information (APPI, 2022 amendment). APPI requires disclosure of purpose of use, opt-out mechanism for third-party provision, and cross-border transfer consent.",
      recommendation:
        "Add APPI-compliant privacy policy. Disclose purpose of use conspicuously (Art. 17). For third-party data provision, obtain prior consent (Art. 27) or implement opt-out procedure. Cross-border transfers (Art. 28) require consent or adequacy equivalence. Publish disclosure requests procedure.",
      law: "APPI 2022 Art. 17 · Art. 27 · Art. 28 · Art. 33-37",
      fineRange: "¥100M corporate + criminal penalties",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Japan"],
    });
  }

  if (isCanada) {
    issues.push({
      id: "DOM-CA-PIPEDA-01",
      severity: "critical",
      category: "PIPEDA",
      title: "PIPEDA Compliance Required (.ca domain)",
      description:
        "Your site uses a .ca domain and is subject to Canada's PIPEDA (Personal Information Protection and Electronic Documents Act). PIPEDA's 10 Fair Information Principles must be reflected in your privacy policy.",
      recommendation:
        "Add PIPEDA-compliant privacy policy section: (1) Accountability (name Privacy Officer), (2) Identifying Purposes, (3) Consent, (4) Limiting Collection, (5) Limiting Use, (6) Accuracy, (7) Safeguards, (8) Openness, (9) Individual Access, (10) Challenging Compliance. Include OPC contact details.",
      law: "PIPEDA Schedule 1 (10 principles) · Privacy Act R.S.C. 1985",
      fineRange: "Up to CAD $100,000 per violation",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Canada"],
    });
  }

  if (isAustralia) {
    issues.push({
      id: "DOM-AU-01",
      severity: "critical",
      category: "Australia Privacy Act",
      title: "Australian Privacy Principles (APPs) Required (.au domain)",
      description:
        "Your site uses an .au domain and is subject to Australia's Privacy Act 1988 and its 13 Australian Privacy Principles (APPs). APP entities must publish a compliant APP Privacy Policy.",
      recommendation:
        "Publish an APP-compliant privacy policy: disclose types of PI collected, purposes, how accessed/corrected, whether PI disclosed overseas (APP 8), and how complaints handled. Reference OAIC contact details (oaic.gov.au). If annual turnover exceeds AUD $3M, compliance is mandatory.",
      law: "Privacy Act 1988 (Cth) · APPs · Notifiable Data Breaches Scheme",
      fineRange: "Up to AUD $50M or 30% of adjusted annual turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Australia"],
    });
  }

  // ─── New jurisdiction-specific domain checks ─────────────────────────────

  if (isKorea) {
    issues.push({
      id: "DOM-KR-01",
      severity: "critical",
      category: "Global",
      title: "South Korea PIPA Compliance Required (.kr domain)",
      description:
        "Your site uses a .kr domain and is subject to South Korea's Personal Information Protection Act (PIPA). PIPA requires explicit consent for collection, mandatory Chief Privacy Officer (CPO) appointment for businesses handling more than 50,000 individuals, and 72-hour breach notification to PIPC.",
      recommendation:
        "Ensure PIPA compliance: (1) Appoint a Chief Privacy Officer (CPO/개인정보 보호책임자), (2) Register with PIPC if processing >50,000 data subjects, (3) Post Privacy Policy in Korean and English, (4) Implement 72-hour breach notification, (5) Obtain separate consent for collection, use, provision, and overseas transfer.",
      law: "PIPA Art. 15 (Consent) · Art. 31 (CPO) · Art. 34 (Breach notification) · Art. 39 (International transfers)",
      fineRange: "KRW 300M or 3% of annual turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Korea"],
    });
  }

  if (isUAE) {
    issues.push({
      id: "DOM-AE-01",
      severity: "critical",
      category: "Global",
      title: "UAE PDPL Compliance Required (.ae domain)",
      description:
        "Your site uses a .ae domain and is subject to the UAE Federal Decree-Law No. 45/2021 on Personal Data Protection (PDPL). The UAE PDPL requires lawful basis for processing, appointment of a Privacy Officer, and mandatory breach notification to the UAE Data Office within 72 hours.",
      recommendation:
        "Ensure UAE PDPL compliance: (1) Obtain explicit consent or establish another lawful basis, (2) Appoint a Data Privacy Officer registered with UAE Data Office, (3) Implement cross-border transfer controls (UAE does not permit transfers without adequate protection), (4) Post bilingual (Arabic/English) privacy policy, (5) Notify UAE Data Office of breaches within 72 hours.",
      law: "UAE PDPL Federal Decree-Law 45/2021 Art. 5 · Art. 16 (DPO) · Art. 26 (Breach) · Art. 22 (Transfer)",
      fineRange: "AED 20M per violation",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["UAE"],
    });
  }

  if (isSaudi) {
    issues.push({
      id: "DOM-SA-01",
      severity: "critical",
      category: "Global",
      title: "Saudi Arabia PDPL Compliance Required (.sa domain)",
      description:
        "Your site uses a .sa domain and is subject to Saudi Arabia's Personal Data Protection Law (PDPL), enforced by SDAIA/NDMO effective September 2023. PDPL requires explicit consent for sensitive data, 72-hour breach notification, and data localisation for certain categories.",
      recommendation:
        "Ensure Saudi PDPL compliance: (1) Obtain explicit consent before collecting personal data, (2) Data localisation — personal data of Saudi residents may not be transferred outside the country without NDMO approval, (3) Appoint a Data Governance Officer, (4) Post privacy policy in Arabic, (5) Report breaches to NDMO within 72 hours.",
      law: "Saudi PDPL Art. 4 (Consent) · Art. 12 (Sensitive data) · Art. 29 (Breach) · Art. 21 (Transfer)",
      fineRange: "SAR 5M (first) / SAR 10M (repeat) + business suspension",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["SaudiArabia"],
    });
  }

  if (isNigeria) {
    issues.push({
      id: "DOM-NG-01",
      severity: "critical",
      category: "Global",
      title: "Nigeria NDPA 2023 Compliance Required (.ng domain)",
      description:
        "Your site uses a .ng domain and is subject to Nigeria's Data Protection Act 2023 (NDPA), which replaced the NDPR. NDPA requires appointment of a Data Protection Officer, filing Annual Data Audit Reports with NDPC, and robust consent mechanisms.",
      recommendation:
        "Ensure NDPA compliance: (1) Register with Nigeria Data Protection Commission (NDPC), (2) Appoint a DPO if processing personal data of >2,000 data subjects per 6 months, (3) File Annual Data Audit Report with NDPC, (4) Implement consent-based processing, (5) Notify NDPC of breaches within 72 hours. Reference NDPA 2023.",
      law: "NDPA 2023 §§ 32-35 (DPO) · §ticle 40 (Breach) · §25 (Cross-border) · NDPR 2019",
      fineRange: "NGN 10M or 2% of annual gross revenue",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Nigeria"],
    });
  }

  if (isKenya) {
    issues.push({
      id: "DOM-KE-01",
      severity: "critical",
      category: "Global",
      title: "Kenya Data Protection Act 2019 Compliance Required (.ke domain)",
      description:
        "Your site uses a .ke domain and is subject to Kenya's Data Protection Act 2019. The Act requires registration as a Data Controller or Processor with the Office of the Data Protection Commissioner (ODPC) and compliance with 8 data protection principles.",
      recommendation:
        "Ensure Kenya DPA compliance: (1) Register as Data Controller/Processor with ODPC (mandatory for organisations processing personal data), (2) Appoint a Data Protection Officer, (3) Implement 72-hour breach notification to ODPC, (4) Conduct Data Protection Impact Assessments (DPIAs) for high-risk processing, (5) Comply with 8 data protection principles.",
      law: "Kenya DPA 2019 §12 (Registration) · §24 (DPO) · §43 (Breach) · §31 (DPIA)",
      fineRange: "KES 5M or 1% of annual turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Kenya"],
    });
  }

  if (isMexico) {
    issues.push({
      id: "DOM-MX-01",
      severity: "critical",
      category: "Global",
      title: "Mexico LFPDPPP Compliance Required (.mx domain)",
      description:
        "Your site uses a .mx domain and is subject to Mexico's Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP 2010) enforced by INAI. Mexico law requires an 'Aviso de Privacidad' (Privacy Notice) prominently displayed.",
      recommendation:
        "Ensure LFPDPPP compliance: (1) Publish a mandatory 'Aviso de Privacidad' (Privacy Notice) in Spanish prominently on your site, (2) Provide ARCO rights (Acceso, Rectificación, Cancelación, Oposición), (3) Register with INAI's national data systems register, (4) Obtain express consent for sensitive data (salud, biométrico, genético), (5) Notify INAI of breaches.",
      law: "LFPDPPP Art. 8 (Consent) · Art. 15 (Aviso de Privacidad) · Art. 22 (ARCO rights) · Art. 40 (Breach) · Regulations LFPDPPP 2011",
      fineRange: "MXN 320M + imprisonment for aggravated cases",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Mexico"],
    });
  }

  if (isArgentina) {
    issues.push({
      id: "DOM-AR-01",
      severity: "critical",
      category: "Global",
      title: "Argentina PDPL 25.326 Compliance Required (.ar domain)",
      description:
        "Your site uses an .ar domain and is subject to Argentina's Personal Data Protection Law 25.326 (PDPL) enforced by AAIP. Argentina law is one of the oldest Latin American privacy laws (2000) and requires registration of data files with AAIP.",
      recommendation:
        "Ensure Argentina PDPL compliance: (1) Register your databases containing personal data with AAIP's national data register, (2) Implement 'Habeas Data' rights (access, rectification, suppression, confidentiality), (3) Obtain consent before collecting sensitive data (salud, genético, filiación política, sexual), (4) Post privacy policy in Spanish, (5) AAIP has adequacy recognition from EU.",
      law: "PDPL 25.326 Art. 5 (Consent) · Art. 21 (Register) · Art. 14 (Habeas Data) · Res. AAIP 47/2018",
      fineRange: "ARS 3M+ (escalating per severity)",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Argentina"],
    });
  }

  if (isThailand) {
    issues.push({
      id: "DOM-TH-01",
      severity: "critical",
      category: "Global",
      title: "Thailand PDPA Compliance Required (.th domain)",
      description:
        "Your site uses a .th domain and is subject to Thailand's Personal Data Protection Act B.E. 2562 (PDPA 2019, fully effective since June 2022). Thailand PDPA is closely modelled on GDPR and requires similar lawful basis, consent, and data subject rights mechanisms.",
      recommendation:
        "Ensure Thailand PDPA compliance: (1) Establish lawful basis under PDPA §24 for each processing activity, (2) Appoint a Data Protection Officer if required under §41, (3) Obtain explicit consent for sensitive data (§26), (4) Implement data subject rights (access, rectification, erasure, portability, objection), (5) Notify PDPC of breaches within 72 hours (§37).",
      law: "Thailand PDPA §24 (Lawful basis) · §26 (Sensitive data) · §37 (Breach) · §41 (DPO) · §55 (Rights)",
      fineRange:
        "THB 5M administrative + criminal liability (THB 1M + imprisonment)",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Thailand"],
    });
  }

  if (isIndonesia) {
    issues.push({
      id: "DOM-ID-01",
      severity: "critical",
      category: "Global",
      title: "Indonesia PDP Law 2022 Compliance Required (.id domain)",
      description:
        "Your site uses an .id domain and is subject to Indonesia's Personal Data Protection Law (UU PDP No. 27/2022, effective 17 October 2024). This is Indonesia's first comprehensive data protection law and requires consent, a Data Protection Officer for organisations processing >250,000 data subjects, and 14-day breach notification.",
      recommendation:
        "Ensure Indonesia PDP compliance: (1) Obtain specific, informed, and express consent before collecting personal data, (2) Appoint a DPO if processing >250,000 data subjects or sensitive data at scale, (3) Notify MOCI of breaches within 14 days, (4) Conduct PIAs for high-risk processing, (5) Cross-border transfers require MOCI approval or equivalent protection verification.",
      law: "UU PDP 27/2022 Art. 20 (Consent) · Art. 53 (DPO) · Art. 46 (Breach) · Art. 56 (Transfer) · Art. 65 (Prohibited uses)",
      fineRange: "IDR 60B or 2% of annual revenue",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Indonesia"],
    });
  }

  if (isNewZealand) {
    issues.push({
      id: "DOM-NZ-01",
      severity: "critical",
      category: "Global",
      title: "New Zealand Privacy Act 2020 Compliance Required (.nz domain)",
      description:
        "Your site uses a .nz domain and is subject to New Zealand's Privacy Act 2020 (in force December 2020). The Act introduces mandatory breach notification to the Privacy Commissioner, 13 updated Information Privacy Principles, and new offences for misleading access requests.",
      recommendation:
        "Ensure NZ Privacy Act compliance: (1) Comply with all 13 Information Privacy Principles (IPPs 1-13), (2) Notify Privacy Commissioner of serious privacy breaches within 72 hours, (3) Publish a Privacy Statement using plain language, (4) Respond to access requests within 20 working days, (5) Conduct Privacy Impact Assessments for new projects using personal information.",
      law: "Privacy Act 2020 IPP 1-13 · §113 (Breach notification) · §69 (Access requests) · §209 (PPIR agency)",
      fineRange: "NZD 10,000 per individual / unlimited for companies",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["NewZealand"],
    });
  }

  if (isIsrael) {
    issues.push({
      id: "DOM-IL-01",
      severity: "critical",
      category: "Global",
      title:
        "Israel Protection of Privacy Law Compliance Required (.il domain)",
      description:
        "Your site uses an .il domain and is subject to Israel's Protection of Privacy Law 5741-1981 (PPL) and its regulations. Israel is an EU-adequate country. The PPL requires registration of databases with the PPA (Privacy Protection Authority) and imposes strict rules on data security.",
      recommendation:
        "Ensure Israel PPL compliance: (1) Register databases containing personal data with PPA/ILITA's database registry (mandatory for certain types), (2) Comply with Database Regulations (security, access, backup), (3) Allow individuals to access, correct, or delete their data (§14 PPL), (4) Security Regulations 2017 require documented security program for significant databases, (5) Notify PPA of breaches.",
      law: "Israel PPL 5741-1981 §§ 8-16 · Privacy Regulations (Data Security) 5777-2017 · PPA Guidance",
      fineRange: "ILS 3.2M + potential criminal liability",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Israel"],
    });
  }

  if (isPhilippines) {
    issues.push({
      id: "DOM-PH-01",
      severity: "critical",
      category: "Global",
      title: "Philippines DPA 2012 Compliance Required (.ph domain)",
      description:
        "Your site uses a .ph domain and is subject to the Philippines Data Privacy Act 2012 (RA 10173) enforced by the National Privacy Commission (NPC). All personal information controllers and processors must register with the NPC if processing personal data of at least 1,000 data subjects.",
      recommendation:
        "Ensure Philippines DPA compliance: (1) Register with NPC if processing >1,000 data subjects, (2) Appoint a mandatory Data Protection Officer (DPO), (3) Implement Data Privacy Management Program, (4) Conduct Privacy Impact Assessments, (5) Report personal data breaches to NPC within 72 hours, (6) Allow data subjects their rights (access, rectification, erasure, objection, portability, damages).",
      law: "RA 10173 §21 (DPO) · §27 (Breach notification) · §16 (Rights) · IRR of RA 10173 Rule V · NPC Circular 2017-01",
      fineRange: "PHP 500K-5M + 1-6 years imprisonment",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Philippines"],
    });
  }

  if (isSwitzerland) {
    issues.push({
      id: "DOM-CH-01",
      severity: "critical",
      category: "Global",
      title: "Switzerland nFADP Compliance Required (.ch domain)",
      description:
        "Your site uses a .ch domain and is subject to Switzerland's revised Federal Act on Data Protection (nFADP / revDSG, in force 1 September 2023). Although not EU GDPR, Switzerland has adequacy status and nFADP is modelled closely on GDPR with additional requirements.",
      recommendation:
        "Ensure nFADP compliance: (1) Update privacy policy to reflect nFADP terminology and requirements, (2) Conduct Privacy Impact Assessments (PIAs) for high-risk processing, (3) Implement Data Protection by Design and Default, (4) Appoint a data protection representative in Switzerland if based abroad, (5) Notify FDPIC of breaches. Switzerland adequacy allows free data flows to EU/EEA.",
      law: "nFADP Art. 5 (Definitions) · Art. 17 (Data minimisation) · Art. 22 (PIA) · Art. 24 (Breach) · Art. 19 (DSAR)",
      fineRange: "CHF 250,000 per individual (criminal sanction)",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Switzerland"],
    });
  }

  if (isTurkey) {
    issues.push({
      id: "DOM-TR-01",
      severity: "critical",
      category: "Global",
      title: "Turkey KVKK Compliance Required (.tr domain)",
      description:
        "Your site uses a .tr domain and is subject to Turkey's Law on the Protection of Personal Data (KVKK No. 6698, in force April 2016). KVKK is similar to GDPR and requires registration of data controllers in KVKK's VERBİS (Data Controllers Registry).",
      recommendation:
        "Ensure KVKK compliance: (1) Register in VERBİS (Data Controllers Registry) if your company has >50 employees or annual balance exceeds TRY 25M, (2) Post privacy notice ('Aydınlatma Metni') in Turkish, (3) Obtain explicit consent ('açık rıza') for sensitive data processing (health, biometric, racial, political, sexual data), (4) Implement KVKK-compliant procedures for data subject rights, (5) Obtain Board approval for international transfers.",
      law: "KVKK Art. 5 (Lawful basis) · Art. 6 (Sensitive data) · Art. 16 (VERBİS) · Art. 12 (Security) · Art. 11 (Rights)",
      fineRange: "TRY 1.9M + criminal liability up to 4 years imprisonment",
      fixAction: "generate_privacy_policy",
      jurisdictions: ["Turkey"],
    });
  }

  // ─── URL keyword-enhanced checks ─────────────────────────────────────────

  if (urlKeywords.hasPayment) {
    issues.push({
      id: "DOM-URL-PAYMENT",
      severity: "warning",
      category: "Payment Compliance",
      title: "Payment Processing Detected — PCI DSS Compliance Required",
      description:
        "The URL contains payment-related keywords, suggesting this site processes payment card data. PCI DSS compliance is mandatory for any organisation that accepts, stores, processes, or transmits cardholder data.",
      recommendation:
        "Ensure PCI DSS v4.0 compliance: (1) Complete appropriate SAQ (Self-Assessment Questionnaire), (2) Add payment data handling section to your privacy policy, (3) Only use PCI-certified payment processors, (4) Never store CVV/CVC codes, (5) Implement TLS 1.2+ for all payment pages, (6) Display PCI DSS compliance badge.",
      law: "PCI DSS v4.0 · GDPR Art. 32 · India RBI Tokenisation Directive",
      fineRange:
        "Card brand fines $5K-$100K/month + card processing suspension",
      fixAction: "generate_privacy_policy",
      jurisdictions,
    });
  }

  if (urlKeywords.hasChildren) {
    issues.push({
      id: "DOM-URL-CHILDREN",
      severity: "critical",
      category: "Children Safety",
      title: "Children-Oriented Platform — Strict Data Protection Required",
      description:
        "The URL contains keywords indicating this platform serves children or students. All major privacy laws impose the strictest requirements on platforms processing children's personal data, including mandatory parental consent.",
      recommendation:
        "Implement: (1) Age verification gate before any data collection, (2) Verifiable parental consent mechanism (not just a checkbox), (3) Children's Data Protection Policy separate from main policy, (4) No behavioural advertising to minors, (5) Data minimisation — collect only what is strictly necessary, (6) DPIA specifically for children's data processing.",
      law: "COPPA (US, under 13) · GDPR Art. 8 (EU under 16) · UK Children's Code · India DPDP §9 (under 18) · LGPD Art. 14",
      fineRange: "COPPA: up to $51,744 per violation · GDPR: up to €20M",
      fixAction: "generate_dpia",
      jurisdictions,
    });
  }

  if (urlKeywords.hasHealth) {
    issues.push({
      id: "DOM-URL-HEALTH",
      severity: "critical",
      category: "HIPAA",
      title: "Health Platform — Special Category Data Rules Apply",
      description:
        "The URL contains health-related keywords. Health and medical data is classified as 'special category data' (GDPR), 'sensitive personal information' (CCPA/CPRA), or 'sensitive data' (DPDP/LGPD) requiring explicit consent and heightened security.",
      recommendation:
        "For health platforms: (1) Use explicit consent (not legitimate interests) for all health data, (2) Conduct mandatory DPIA before processing, (3) In the US — implement HIPAA Notice of Privacy Practices and BAAs with all vendors, (4) EU — appoint a DPO (mandatory for health data processors at scale), (5) Implement end-to-end encryption for all health records, (6) Do not share health data for advertising.",
      law: "GDPR Art. 9 (Special categories) · HIPAA Privacy Rule · India DPDP §9 · CCPA §1798.121 (Sensitive PI)",
      fineRange: "HIPAA: up to $1.9M/category/year · GDPR: up to €20M",
      fixAction: "generate_dpia",
      jurisdictions,
    });
  }

  if (urlKeywords.hasLogin) {
    issues.push({
      id: "DOM-URL-LOGIN",
      severity: "warning",
      category: "Security",
      title:
        "User Accounts Detected — Authentication Security & Data Breach Plan Required",
      description:
        "The URL suggests user authentication is implemented. Platforms with user accounts must implement strong authentication security and have a documented breach response plan.",
      recommendation:
        "Ensure: (1) Password hashing with bcrypt/Argon2 (never MD5/SHA1), (2) Multi-factor authentication option, (3) Account lockout after failed attempts, (4) Breach notification plan (notify users and authorities within required timeframe), (5) Disclose account data retention policy, (6) Provide account deletion/data erasure mechanism.",
      law: "GDPR Art. 32 + Art. 33-34 · UK GDPR · DPDP Act 2023 · NIST SP 800-63 (Authentication)",
      fixAction: "generate_privacy_policy",
      jurisdictions,
    });
  }

  // Sector-specific issues
  if (sector === "healthcare") {
    issues.push({
      id: "DOM-SECTOR-HEALTH",
      severity: "critical",
      category: "HIPAA",
      title:
        "Healthcare Sector: HIPAA + Health Data Special Category Rules Apply",
      description:
        "Your site appears to be in the healthcare sector. Health data is 'special category' data under GDPR (Art. 9) and 'sensitive personal data' under most global laws, requiring explicit consent and heightened protections. US healthcare providers must comply with HIPAA.",
      recommendation:
        "For health data: (1) Use explicit consent (not just legitimate interests), (2) Conduct DPIA before processing, (3) If in US — implement HIPAA Notice of Privacy Practices and BAAs with all vendors, (4) EU — appoint DPO (mandatory for health data processors), (5) Minimise data collected to the minimum necessary.",
      law: "GDPR Art. 9 · HIPAA Privacy Rule 45 CFR §164 · India DPDP §9 · UK DPA 2018 Schedule 1",
      fineRange: "HIPAA: up to $1.9M/category/year · GDPR: up to €20M",
      fixAction: "generate_dpia",
      jurisdictions,
    });
  }

  if (sector === "ecommerce") {
    issues.push({
      id: "DOM-SECTOR-ECOM",
      severity: "warning",
      category: "Legal Docs",
      title:
        "E-commerce Sector: Refund Policy, T&C, and Payment Data Rules Required",
      description:
        "Your site appears to be an e-commerce platform. E-commerce sites have additional legal obligations: mandatory refund/returns policy (EU Consumer Rights Directive), payment data handling (PCI DSS), and pricing transparency.",
      recommendation:
        "Publish: (1) Returns/Refund Policy (14-day EU right to withdrawal), (2) Payment security statement referencing PCI DSS compliance, (3) Pricing including all taxes (Price Transparency Directive EU 2021), (4) Delivery policy, (5) Dispute resolution mechanism.",
      law: "EU Consumer Rights Directive 2011/83/EU · UK Consumer Rights Act 2015 · India Consumer Protection (E-Commerce) Rules 2020 · PCI DSS v4.0",
      fixAction: "generate_tos",
      jurisdictions,
    });
  }

  if (sector === "education") {
    issues.push({
      id: "DOM-SECTOR-EDU",
      severity: "critical",
      category: "Children Safety",
      title: "Education Sector: Children's Data Protection Laws Apply",
      description:
        "Your site appears to be in the education sector. Schools and educational platforms process children's personal data and are subject to heightened protections including COPPA (US), GDPR Art. 8 (EU), UK Children's Code, and India DPDP §9.",
      recommendation:
        "Implement: (1) Parental consent mechanism for under-13 (COPPA/GDPR Art. 8), (2) GDPR Age of Digital Consent assessment (13-16 depending on EU country), (3) Data minimisation for student data, (4) Prohibition on behavioural advertising to children, (5) FERPA compliance if US school records involved.",
      law: "COPPA (US, under 13) · GDPR Art. 8 · UK Children's Code · India DPDP §9 · FERPA (US)",
      fineRange: "COPPA: up to $51,744 per violation · GDPR: up to €20M",
      fixAction: "generate_dpia",
      jurisdictions,
    });
  }

  if (sector === "fintech") {
    issues.push({
      id: "DOM-SECTOR-FINTECH",
      severity: "critical",
      category: "Security",
      title:
        "Financial Sector: PCI DSS + Financial Regulation Compliance Required",
      description:
        "Your site appears to be in the financial/fintech sector. Financial services are subject to sector-specific data protection rules in addition to general privacy laws: PCI DSS for payment data, FCA/SEC oversight, RBI guidelines (India), and MAS regulations (Singapore).",
      recommendation:
        "Ensure: (1) PCI DSS compliance for all payment data, (2) Sector-specific regulatory registration (FCA, RBI, SEBI, MAS, SEC as applicable), (3) Strong Customer Authentication (SCA) under PSD2/UK PSR, (4) Anti-money laundering (AML) data retention compliance, (5) Open Banking data rights implementation.",
      law: "PCI DSS v4.0 · PSD2 (EU) · UK PSR 2017 · India RBI Circular · MAS TRM Guidelines",
      fineRange:
        "PCI DSS: card processing suspension + fines · Regulatory: varies by jurisdiction",
      fixAction: "generate_privacy_policy",
      jurisdictions,
    });
  }

  if (sector === "travel") {
    issues.push({
      id: "DOM-SECTOR-TRAVEL",
      severity: "warning",
      category: "Legal Docs",
      title: "Travel Sector: Passenger Data + Booking Terms Required",
      description:
        "Your site appears to be in the travel sector. Travel companies process significant personal data including passport details, health information, and financial data, and may be subject to Passenger Name Record (PNR) data sharing requirements.",
      recommendation:
        "Ensure: (1) PNR data transfer compliance with EU/US PNR Agreement, (2) Passport/ID data minimisation and secure storage, (3) Health data processing under explicit consent (vaccination, dietary), (4) Clear booking terms with cancellation/refund policy, (5) GDPR Article 9 compliance for health data.",
      law: "EU PNR Directive 2016/681 · GDPR Art. 9 · Package Travel Directive 2015/2302 · India DPDP §9",
      fixAction: "generate_tos",
      jurisdictions,
    });
  }

  return issues;
}

// ─── Tracker signatures ───────────────────────────────────────────────────────

const TRACKER_SIGNATURES: { name: string; patterns: string[] }[] = [
  {
    name: "Google Analytics / GTM",
    patterns: [
      "googletagmanager.com",
      "gtag(",
      "google-analytics.com",
      "ga('send",
      "ga('create",
    ],
  },
  {
    name: "Facebook / Meta Pixel",
    patterns: [
      "facebook.net/en_us/fbevents.js",
      "connect.facebook.net",
      "fbq(",
      "fbq('track",
    ],
  },
  { name: "Hotjar", patterns: ["hotjar.com", "hjsv=", "hotjar.io"] },
  {
    name: "Microsoft Clarity",
    patterns: ["clarity.ms", "microsoft.com/en-us/clarity"],
  },
  {
    name: "FullStory",
    patterns: ["fullstory.com", "fs.identify(", "window['_fs_"],
  },
  { name: "LogRocket", patterns: ["logrocket.com", "logrocket.identify"] },
  {
    name: "Segment",
    patterns: ["cdn.segment.com", "segment.io", "analytics.identify"],
  },
  {
    name: "Mixpanel",
    patterns: ["cdn.mxpnl.com", "mixpanel.com", "mixpanel.track"],
  },
  { name: "Amplitude", patterns: ["cdn.amplitude.com", "amplitude.com"] },
  {
    name: "Intercom",
    patterns: ["widget.intercom.io", "intercomcdn.com", "intercom('boot"],
  },
  {
    name: "Hubspot",
    patterns: ["js.hubspot.com", "js.hs-scripts.com", "hsq.push"],
  },
  {
    name: "Salesforce Pardot",
    patterns: ["pi.pardot.com", "salesforceliveagent.com"],
  },
  {
    name: "Twitter/X Pixel",
    patterns: ["static.ads-twitter.com", "t.co/i/adsct", "twq('event"],
  },
  {
    name: "LinkedIn Insight",
    patterns: ["snap.licdn.com", "linkedin.com/px", "_linkedin_partner_id"],
  },
  { name: "Pinterest Tag", patterns: ["ct.pinterest.com", "pintrk("] },
  {
    name: "TikTok Pixel",
    patterns: ["analytics.tiktok.com", "analytics-sg.tiktok.com", "ttq.track"],
  },
  {
    name: "Snapchat Pixel",
    patterns: ["sc-static.net/scevent.min.js", "snaptr("],
  },
  {
    name: "Criteo",
    patterns: ["static.criteo.net", "cas.criteo.com", "criteo.com/js"],
  },
  {
    name: "DoubleClick / Google Ads",
    patterns: [
      "doubleclick.net",
      "googleads.g.doubleclick.net",
      "googlesyndication.com",
    ],
  },
  {
    name: "Bing UET",
    patterns: ["bat.bing.com", "bat.r.msn.com", "uetq.push"],
  },
  { name: "Mouseflow", patterns: ["mouseflow.com"] },
  { name: "Crazy Egg", patterns: ["cetrk.com", "crazyegg.com"] },
  { name: "Heap Analytics", patterns: ["heapanalytics.com", "heap.io"] },
  { name: "Drift Chat", patterns: ["js.drift.com", "js.driftt.com"] },
  { name: "Zendesk", patterns: ["static.zdassets.com", "ekr.zdassets.com"] },
  { name: "Plausible (Privacy-Friendly)", patterns: ["plausible.io"] },
  {
    name: "Fathom (Privacy-Friendly)",
    patterns: ["cdn.usefathom.com", "usefathom.com"],
  },
  {
    name: "Matomo (Self-hosted)",
    patterns: ["matomo.js", "piwik.js", "/matomo/", "matomoQueue.push"],
  },
];

const CONSENT_MANAGER_SIGNATURES = [
  "cookiebot",
  "cookieconsent",
  "gdpr-consent",
  'class="gdpr',
  'id="gdpr',
  'class="cookie',
  'id="cookie',
  "consentmanager",
  "onetrust",
  "trustarc",
  "cookie-law",
  "cookieyes",
  "termly.io",
  "iubenda",
  "quantcast",
  "__tcfapi",
  "window.cmp",
  "cookiepro",
  "axeptio",
  "didomi",
  "klaro",
  "complianz",
  "borlabs-cookie",
  "cookieinformation",
  "cookie-script.com",
  "consent",
  "cookielaw.org",
  "__cfduid",
  "cookiefirst",
];

// ─── Main analysis engine ─────────────────────────────────────────────────────

export function analyzeHtml(
  html: string,
  url: string,
  jurisdictions: Jurisdiction[],
): InspectionIssue[] {
  const issues: InspectionIssue[] = [];
  const lower = html.toLowerCase();

  const hasJurisdiction = (j: Jurisdiction) => jurisdictions.includes(j);
  const isGDPR = hasJurisdiction("EU_GDPR") || hasJurisdiction("UK");
  const isUK = hasJurisdiction("UK");
  const isIndia = hasJurisdiction("India");
  const isCCPA = hasJurisdiction("USA_CCPA");
  const isCanada = hasJurisdiction("Canada");
  const isAustralia = hasJurisdiction("Australia");
  const isBrazil = hasJurisdiction("Brazil");
  const isSingapore = hasJurisdiction("Singapore");
  const isJapan = hasJurisdiction("Japan");
  const isHIPAA = hasJurisdiction("USA_HIPAA");
  const isKorea = hasJurisdiction("Korea");
  const isUAE = hasJurisdiction("UAE");
  const isSaudi = hasJurisdiction("SaudiArabia");
  const isNigeria = hasJurisdiction("Nigeria");
  const isKenya = hasJurisdiction("Kenya");
  const isMexico = hasJurisdiction("Mexico");
  const isArgentina = hasJurisdiction("Argentina");
  const isThailand = hasJurisdiction("Thailand");
  const isIndonesia = hasJurisdiction("Indonesia");
  const isNewZealand = hasJurisdiction("NewZealand");
  const isIsrael = hasJurisdiction("Israel");
  const isPhilippines = hasJurisdiction("Philippines");
  const isSwitzerland = hasJurisdiction("Switzerland");
  const isTurkey = hasJurisdiction("Turkey");

  // ─── Detect trackers ───────────────────────────────────────────────────────
  const detectedTrackers = TRACKER_SIGNATURES.filter((sig) =>
    sig.patterns.some((p) => lower.includes(p)),
  ).map((sig) => sig.name);

  const hasConsentManager = CONSENT_MANAGER_SIGNATURES.some((s) =>
    lower.includes(s),
  );
  const hasThirdPartyTrackers =
    detectedTrackers.filter(
      (t) => !t.includes("Privacy-Friendly") && !t.includes("Self-hosted"),
    ).length > 0;
  const hasPrivacyFriendlyAnalytics = detectedTrackers.some(
    (t) => t.includes("Privacy-Friendly") || t.includes("Self-hosted"),
  );

  // ── Enhanced multi-signal detection ──────────────────────────────────────

  // Detect meta tags (title, description, og:type, robots)
  const metaTagMatch =
    html.match(
      /<meta[^>]+name=["']([^"']+)["'][^>]*content=["']([^"']+)["']/gi,
    ) || [];
  const ogTypeMatch =
    lower.includes("og:type") || lower.includes("og:site_name");
  const hasMetaPrivacy =
    lower.includes('meta name="privacy"') ||
    lower.includes("meta name='privacy'");
  const hasJsonLd =
    lower.includes('"@type"') &&
    (lower.includes('"organization"') ||
      lower.includes('"webpage"') ||
      lower.includes('"website"'));
  const hasHreflang = lower.includes("hreflang=") || lower.includes("lang=");
  // Acknowledge meta signals (used for future scoring)
  void (
    metaTagMatch.length +
    (ogTypeMatch ? 1 : 0) +
    (hasMetaPrivacy ? 1 : 0) +
    (hasJsonLd ? 1 : 0) +
    (hasHreflang ? 1 : 0)
  );

  // Detect structured data and schema markup
  const hasSchemaOrg =
    lower.includes("schema.org") || lower.includes('"itemtype"');
  void hasSchemaOrg;

  // Better privacy policy detection — 40+ signals across 25 languages
  const hasPrivacyLink =
    lower.includes("href") &&
    (lower.includes('"privacy') ||
      lower.includes("'privacy") ||
      lower.includes("/privacy") ||
      lower.includes("datenschutz") ||
      lower.includes("confidentialite") ||
      lower.includes("privacidad") ||
      lower.includes("gizlilik") ||
      lower.includes("privacy-policy") ||
      lower.includes("privacy_policy") ||
      lower.includes("data-policy") ||
      lower.includes("data-protection") ||
      lower.includes("プライバシー") ||
      lower.includes("プライバシーポリシー") ||
      lower.includes("गोपनीयता") ||
      lower.includes("politique") ||
      lower.includes("datenschutzerklarung") ||
      lower.includes("datenschutzerkl") ||
      lower.includes("privacybeleid") ||
      lower.includes("privatlivspolitik") ||
      lower.includes("tietosuoja") ||
      lower.includes("integritetspolicy") ||
      lower.includes("politica-privacidad") ||
      lower.includes("politica-de-privacidad") ||
      lower.includes("informativa-privacy") ||
      lower.includes("persoonlijke-gegevens") ||
      lower.includes("avis-de-confidentialite") ||
      lower.includes("politique-de-confidentialite") ||
      lower.includes("개인정보") ||
      lower.includes("개인정보처리방침") ||
      lower.includes("隐私政策") ||
      lower.includes("隱私政策") ||
      lower.includes("개인정보보호방침") ||
      lower.includes("gizlilik-politikasi") ||
      lower.includes("πολιτική-απορρήτου") ||
      lower.includes("polityka-prywatnosci") ||
      lower.includes("zasady-ochrony") ||
      lower.includes("aviso-de-privacidade") ||
      lower.includes("declaracao-de-privacidade") ||
      lower.includes("privacy-notice") ||
      lower.includes("notice-de-confidentialite") ||
      lower.includes("privacidad-y-cookies") ||
      lower.includes("adatvédelmi") ||
      lower.includes("kebijakan-privasi") ||
      lower.includes("นโยบายความเป็นส่วนตัว") ||
      lower.includes("privacy statement") ||
      lower.includes("data privacy"));

  const hasCookieLink =
    lower.includes("/cookie") ||
    lower.includes('"cookie') ||
    lower.includes("'cookie") ||
    lower.includes("cookie-policy") ||
    lower.includes("cookie_policy") ||
    lower.includes("cookies") ||
    lower.includes("cookiebeleid") ||
    lower.includes("keksz") ||
    lower.includes("biscotti") ||
    lower.includes("galletas") ||
    lower.includes("cookie-consent") ||
    lower.includes("cookie-notice") ||
    lower.includes("cookie-information") ||
    lower.includes("kurabiye") || // Turkish
    lower.includes("çerez") || // Turkish (cookie)
    lower.includes("쿠키") || // Korean
    lower.includes("cookie설정") ||
    lower.includes("informazioni-sui-cookie") ||
    lower.includes("politique-cookies") ||
    lower.includes("cookierichtlinie") ||
    lower.includes("politica-cookies");

  const hasTosLink =
    lower.includes("/terms") ||
    lower.includes("terms-of-service") ||
    lower.includes("terms-of-use") ||
    lower.includes("terms-and-conditions") ||
    lower.includes("terms_of_service") ||
    lower.includes('"tos"') ||
    lower.includes("'tos'") ||
    lower.includes("terms &amp;") ||
    lower.includes("conditions") ||
    lower.includes("nutzungsbedingungen") ||
    lower.includes("condiciones") ||
    lower.includes("utilizzo") ||
    lower.includes("conditions-generales") ||
    lower.includes("gebruiksvoorwaarden") ||
    lower.includes("利用規約") || // Japanese
    lower.includes("이용약관") || // Korean
    lower.includes("使用条款") || // Chinese Simplified
    lower.includes("使用條款") || // Chinese Traditional
    lower.includes("termos-de-uso") ||
    lower.includes("termos-de-servico") ||
    lower.includes("condições-de-uso") ||
    lower.includes("cgv") || // French: Conditions générales de vente
    lower.includes("allgemeine-geschaeftsbedingungen") ||
    lower.includes("şartlar") || // Turkish
    lower.includes("kullanım-koşulları") || // Turkish
    lower.includes("/tos") ||
    lower.includes("/aup") || // Acceptable Use Policy
    lower.includes("legal-notice") ||
    lower.includes("service-agreement") ||
    lower.includes("user-agreement");

  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
  const hasEmail = emailRegex.test(html);
  const hasContactLink =
    lower.includes("/contact") ||
    lower.includes('"contact') ||
    lower.includes("'contact") ||
    lower.includes("kontakt") ||
    lower.includes("contacto") ||
    lower.includes("contato") ||
    lower.includes("お問い合わせ") ||
    lower.includes("संपर्क");

  const hasForms = /<form[\s>]/i.test(html);
  const hasPrivacyNearForms =
    lower.includes("privacy") ||
    lower.includes("personal data") ||
    lower.includes("data protection") ||
    lower.includes("by submitting") ||
    lower.includes("your data") ||
    lower.includes("information we collect") ||
    lower.includes("datos personales") ||
    lower.includes("datenschutz") ||
    lower.includes("données personnelles") ||
    lower.includes("persoonlijke gegevens");

  const hasRetentionInfo =
    lower.includes("retain") ||
    lower.includes("retention") ||
    lower.includes("store for") ||
    lower.includes("kept for") ||
    lower.includes("deleted after") ||
    lower.includes("stored for") ||
    lower.includes("years") ||
    lower.includes("months") ||
    lower.includes("speichern") ||
    lower.includes("aufbewahrung");

  const hasLawfulBasis =
    lower.includes("lawful basis") ||
    lower.includes("legal basis") ||
    lower.includes("legitimate interests") ||
    lower.includes("consent") ||
    lower.includes("rechtliche grundlage") ||
    lower.includes("base juridica") ||
    lower.includes("rechtsgrondslag") ||
    lower.includes("base legal");

  const hasDataSubjectRights =
    lower.includes("right to access") ||
    lower.includes("right to erasure") ||
    lower.includes("right to rectification") ||
    lower.includes("right to deletion") ||
    lower.includes("data subject rights") ||
    lower.includes("your rights") ||
    lower.includes("your data rights") ||
    lower.includes("vos droits") ||
    lower.includes("ihre rechte") ||
    lower.includes("sus derechos") ||
    lower.includes("right to object") ||
    lower.includes("right to restrict") ||
    lower.includes("access your data") ||
    lower.includes("delete your data") ||
    lower.includes("delete my data") ||
    lower.includes("request deletion") ||
    lower.includes("data portability") ||
    lower.includes("opt-out right") ||
    lower.includes("diritto di accesso") || // Italian
    lower.includes("droit d'accès") || // French
    lower.includes("recht auf auskunft") || // German
    lower.includes("derecho de acceso") || // Spanish
    lower.includes("recht op inzage") || // Dutch
    lower.includes("rätt till tillgång") || // Swedish
    lower.includes("権利") || // Japanese (rights)
    lower.includes("정보주체") || // Korean (data subject)
    lower.includes("数据主体") || // Chinese
    lower.includes("arco rights") || // Mexico ARCO
    lower.includes("habeas data") || // Argentina/Brazil
    lower.includes("direitos do titular") || // Portuguese/Brazilian
    lower.includes("direito de acesso") ||
    lower.includes("rights of the data principal"); // India DPDP

  const hasInternationalTransfer =
    lower.includes("international transfer") ||
    lower.includes("transfer of data") ||
    lower.includes("standard contractual clauses") ||
    lower.includes("scc") ||
    lower.includes("adequacy decision") ||
    lower.includes("binding corporate rules") ||
    lower.includes("drittland") ||
    lower.includes("derogation") ||
    lower.includes("cross-border") ||
    lower.includes("transfer to third countries");

  const hasDPO =
    lower.includes("data protection officer") ||
    lower.includes("dpo") ||
    lower.includes("datenschutzbeauftragter") ||
    lower.includes("délégué à la protection") ||
    lower.includes("functionaris voor gegevensbescherming");

  const hasSupervisoryAuthority =
    lower.includes("supervisory authority") ||
    lower.includes("data protection authority") ||
    lower.includes("information commissioner") ||
    lower.includes("ico") ||
    lower.includes("cnil") ||
    lower.includes("bfdi") ||
    lower.includes("aepd") ||
    lower.includes("garante") ||
    lower.includes("cnpd") ||
    lower.includes("datatilsynet") ||
    lower.includes("edpb") ||
    lower.includes("national data protection");

  const hasSecurityMeasures =
    lower.includes("security measures") ||
    lower.includes("encryption") ||
    lower.includes("ssl") ||
    lower.includes("tls") ||
    lower.includes("secure") ||
    lower.includes("firewall") ||
    lower.includes("access control") ||
    lower.includes("sicherheitsmaßnahmen") ||
    lower.includes("pseudonymization") ||
    lower.includes("anonymization");

  const hasConsentWithdrawal =
    lower.includes("withdraw consent") ||
    lower.includes("withdrawal of consent") ||
    lower.includes("opt out") ||
    lower.includes("unsubscribe") ||
    lower.includes("widerruf") ||
    lower.includes("révoquer");

  const hasAutomatedDecision =
    lower.includes("automated decision") ||
    lower.includes("profiling") ||
    lower.includes("automated processing") ||
    lower.includes("algorithmic") ||
    lower.includes("automat") ||
    lower.includes("scoring") ||
    lower.includes("ai decision");

  const _hasBreachNotification =
    lower.includes("breach notification") ||
    lower.includes("data breach") ||
    lower.includes("security incident") ||
    lower.includes("datenschutzverletzung") ||
    lower.includes("violation de données");

  const hasAccessibility =
    lower.includes("accessibility") ||
    lower.includes("wcag") ||
    lower.includes("aria-");

  const hasAgeVerification =
    lower.includes("age verification") ||
    lower.includes("verify your age") ||
    lower.includes("must be 18") ||
    lower.includes("must be 13") ||
    lower.includes("parental consent") ||
    lower.includes("age gate");

  const hasChildrenKeywords =
    lower.includes("school") ||
    lower.includes("children") ||
    lower.includes("kids") ||
    lower.includes("students") ||
    lower.includes("under 13") ||
    lower.includes("under 16") ||
    lower.includes("minors") ||
    lower.includes("child") ||
    lower.includes("kinder") ||
    lower.includes("enfants") ||
    lower.includes("niños") ||
    lower.includes("बच्चे");

  const paymentTools: string[] = [];
  if (lower.includes("js.stripe.com") || lower.includes("stripe.com/v3"))
    paymentTools.push("Stripe");
  if (lower.includes("paypal.com") || lower.includes("paypalobjects.com"))
    paymentTools.push("PayPal");
  if (lower.includes("razorpay.com")) paymentTools.push("Razorpay");
  if (lower.includes("square.com") || lower.includes("squareup.com"))
    paymentTools.push("Square");
  if (lower.includes("adyen.com")) paymentTools.push("Adyen");
  if (lower.includes("braintree")) paymentTools.push("Braintree");

  const iframeMatches = html.match(/<iframe[^>]+src=["']([^"']+)["']/gi) || [];
  const pageHost = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  })();
  const thirdPartyIframes = iframeMatches.filter((tag) => {
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    if (!srcMatch) return false;
    try {
      return new URL(srcMatch[1]).hostname !== pageHost;
    } catch {
      return false;
    }
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: GLOBAL CRITICAL CHECKS (all jurisdictions)
  // ═══════════════════════════════════════════════════════════════════════════

  // G-01: No privacy policy
  if (!hasPrivacyLink) {
    issues.push({
      id: "G-01-no-privacy-link",
      severity: "critical",
      category: "Global",
      title: "No Privacy Policy Link Found",
      description:
        "No link to a privacy policy was detected on this page. A publicly accessible privacy policy is a legal requirement in virtually every country with data protection legislation.",
      recommendation:
        "Add a clearly labeled 'Privacy Policy' link in your website footer visible from every page. Generate a compliant policy using PrivacyLaw AutoGen.",
      law: "GDPR Art. 13/14 · UK GDPR · CCPA §1798.100 · DPDP Act 2023 · LGPD Art. 9 · PDPA §13 · APPI Art. 21",
      fineRange:
        "GDPR: up to €20M / UK GDPR: up to £17.5M / CCPA: $7,500/violation",
      fixAction: "generate_privacy_policy",
      jurisdictions: jurisdictions,
    });
  }

  // G-02: Trackers without consent
  if (hasThirdPartyTrackers && !hasConsentManager) {
    const trackerList = detectedTrackers
      .filter(
        (t) => !t.includes("Privacy-Friendly") && !t.includes("Self-hosted"),
      )
      .join(", ");
    issues.push({
      id: "G-02-tracking-no-consent",
      severity: "critical",
      category: "Cookie Law",
      title: `Tracking Without Consent Banner (${trackerList})`,
      description: `The following tracking scripts were detected: ${trackerList}. These are loaded without a visible consent mechanism, which violates the ePrivacy Directive, GDPR, CCPA, and equivalent laws in most countries.`,
      recommendation:
        "Implement a Consent Management Platform (CMP) such as Cookiebot, OneTrust, CookieYes, or Axeptio. Ensure all tracking scripts are blocked until the user gives informed consent. Block scripts server-side where possible.",
      law: "GDPR Art. 6(1)(a) · ePrivacy Directive Art. 5(3) · UK PECR · CCPA §1798.120 · India DPDP §6",
      fineRange:
        "GDPR: up to €20M or 4% turnover / PECR (UK): up to £500,000 / CCPA: $7,500/intentional violation",
      fixAction: "generate_cookie_policy",
      jurisdictions: jurisdictions,
    });
  }

  // G-03: No contact / DPO info
  if (!hasEmail && !hasContactLink) {
    issues.push({
      id: "G-03-no-contact-info",
      severity: "critical",
      category: "Global",
      title: "No Contact Information Found",
      description:
        "No contact email address or contact page link was detected. All data protection laws require controllers to provide a clear way for users to exercise their rights (access, erasure, portability, etc.).",
      recommendation:
        "Add a visible contact email address and/or a link to a contact page. If GDPR applies, also provide a Data Protection Officer (DPO) contact. For DPDP India, a grievance officer contact is mandatory.",
      law: "GDPR Art. 13(1)(a) · GDPR Art. 37-39 · India DPDP §8 (Grievance Officer) · CCPA §1798.100 · LGPD Art. 41",
      fineRange: "GDPR: up to €10M or 2% turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: jurisdictions,
    });
  }

  // G-04: Forms without privacy notice
  if (hasForms && !hasPrivacyNearForms) {
    issues.push({
      id: "G-04-form-no-privacy-notice",
      severity: "critical",
      category: "Transparency",
      title: "Data Collection Forms Without Privacy Notice",
      description:
        "HTML forms were detected but no privacy notice or reference to data handling was found. At the point of data collection, users must be informed of how their data will be used.",
      recommendation:
        "Add a brief privacy notice near every form: 'By submitting this form, your data will be processed as described in our Privacy Policy [link].' This is the transparency principle.",
      law: "GDPR Art. 13 · GDPR Art. 5(1)(a) · UK GDPR · India DPDP §7 · LGPD Art. 9 · PIPEDA Principle 3",
      fineRange: "GDPR: up to €20M or 4% turnover for transparency violations",
      fixAction: "generate_privacy_policy",
      jurisdictions: jurisdictions,
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: GDPR (EU + UK) SPECIFIC CHECKS
  // ═══════════════════════════════════════════════════════════════════════════

  if (isGDPR) {
    // EU-01: No lawful basis
    if (!hasLawfulBasis) {
      issues.push({
        id: "EU-01-no-lawful-basis",
        severity: "critical",
        category: "GDPR",
        title: "No Lawful Basis for Processing Disclosed",
        description:
          "No mention of a lawful basis for data processing (consent, contract, legitimate interests, legal obligation, vital interests, or public task) was found. This is a fundamental GDPR requirement.",
        recommendation:
          "Add a 'Legal Basis for Processing' section to your privacy policy. For each type of data collected, specify which of the 6 GDPR lawful bases applies under Article 6. For special category data, also reference Article 9.",
        law: "GDPR Art. 6 (Lawful basis) · GDPR Art. 9 (Special categories) · GDPR Art. 13(1)(c)",
        fineRange: "Up to €20M or 4% global annual turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-02: No data subject rights
    if (!hasDataSubjectRights) {
      issues.push({
        id: "EU-02-no-dsr",
        severity: "critical",
        category: "GDPR",
        title: "Data Subject Rights Not Disclosed",
        description:
          "No mention of user/data subject rights was found. GDPR grants 8 rights that must be disclosed in your privacy policy: access, rectification, erasure, restriction, portability, objection, automated decision-making, and right to complain.",
        recommendation:
          "Add a dedicated 'Your Rights' section to your privacy policy listing all 8 GDPR rights with instructions on how to exercise each one. Include a contact method for rights requests (ideally a dedicated email like dpo@yourcompany.com).",
        law: "GDPR Art. 15-22 · GDPR Art. 13(2)(b) · UK GDPR",
        fineRange: "Up to €20M or 4% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-03: No consent withdrawal mechanism
    if (hasThirdPartyTrackers && !hasConsentWithdrawal) {
      issues.push({
        id: "EU-03-no-consent-withdrawal",
        severity: "warning",
        category: "GDPR",
        title: "No Consent Withdrawal Mechanism Found",
        description:
          "Tracking tools that require consent were detected, but no way for users to withdraw their consent was found. Under GDPR, withdrawing consent must be as easy as giving it.",
        recommendation:
          "Implement a cookie preference centre allowing users to change or withdraw consent at any time. Add a 'Cookie Settings' link in the footer. The withdrawal mechanism must be accessible and effortless.",
        law: "GDPR Art. 7(3) · GDPR Recital 42 · UK GDPR · ePrivacy Directive",
        fineRange: "Up to €20M or 4% turnover",
        fixAction: "generate_cookie_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-04: No international transfer clause
    if (!hasInternationalTransfer && hasThirdPartyTrackers) {
      issues.push({
        id: "EU-04-no-transfer-clause",
        severity: "warning",
        category: "GDPR",
        title: "International Data Transfer Not Disclosed",
        description:
          "Third-party services (analytics, advertising, or other tools) were detected that likely transfer personal data outside the EU/EEA. No international transfer mechanism or disclosure was found.",
        recommendation:
          "Add an 'International Data Transfers' section to your privacy policy. Specify which countries data is transferred to, the safeguard mechanism (Standard Contractual Clauses, adequacy decision, Binding Corporate Rules), and reference GDPR Article 46 or 49 as applicable. Post-Schrems II, SCCs must be accompanied by a Transfer Impact Assessment (TIA).",
        law: "GDPR Art. 44-49 · UK GDPR Ch. V · Schrems II (C-311/18)",
        fineRange: "Up to €20M or 4% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-05: No retention periods
    if (!hasRetentionInfo) {
      issues.push({
        id: "EU-05-no-retention",
        severity: "warning",
        category: "GDPR",
        title: "Data Retention Periods Not Specified",
        description:
          "No data retention periods were mentioned. GDPR's storage limitation principle requires specifying how long personal data is kept and the criteria used to determine that period.",
        recommendation:
          "Add a 'Data Retention' section to your privacy policy. Specify retention periods for each category of data (e.g., 'Account data: held for the duration of the account + 3 years after deletion', 'Marketing emails: until unsubscribed'). Where a fixed period cannot be given, explain the criteria.",
        law: "GDPR Art. 5(1)(e) (Storage limitation) · GDPR Art. 13(2)(a) · UK GDPR",
        fineRange: "Up to €10M or 2% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-06: No DPO information
    if (!hasDPO) {
      issues.push({
        id: "EU-06-no-dpo",
        severity: "warning",
        category: "GDPR",
        title: "Data Protection Officer (DPO) Not Mentioned",
        description:
          "No reference to a Data Protection Officer was found. While not every organisation needs a DPO, public authorities and organisations that process data at scale or systematically monitor individuals are legally required to appoint one.",
        recommendation:
          "If your organisation requires a DPO (check GDPR Art. 37 criteria), appoint one and publish their contact details in your privacy policy. If you don't require one, still consider adding a sentence confirming this and providing an alternative data protection contact.",
        law: "GDPR Art. 37-39 · UK GDPR Art. 37",
        fineRange:
          "Up to €10M or 2% turnover for non-appointment where required",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-07: No supervisory authority reference
    if (!hasSupervisoryAuthority) {
      issues.push({
        id: "EU-07-no-supervisory-authority",
        severity: "warning",
        category: "GDPR",
        title: "Supervisory Authority Not Referenced",
        description:
          "No mention of the right to lodge a complaint with a supervisory authority (data protection authority) was found. GDPR requires informing users of this right.",
        recommendation:
          "Add a clause to your privacy policy informing users of their right to lodge a complaint with the relevant national data protection authority (e.g., ICO for UK, CNIL for France, BfDI for Germany, AEPD for Spain). Include the authority's contact details or website.",
        law: "GDPR Art. 13(2)(d) · GDPR Art. 77 · UK GDPR",
        fineRange: "Up to €10M or 2% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-08: No security measures
    if (!hasSecurityMeasures) {
      issues.push({
        id: "EU-08-no-security-mention",
        severity: "warning",
        category: "Security",
        title: "Security Measures Not Disclosed",
        description:
          "No mention of technical or organisational security measures was found. GDPR requires describing the security measures applied to protect personal data, at least at a high level.",
        recommendation:
          "Add a 'Security' section to your privacy policy describing the measures you use (encryption in transit and at rest, access controls, regular security audits, pseudonymisation, etc.). You do not need to disclose exact technical details that could create security risks.",
        law: "GDPR Art. 32 · UK GDPR Art. 32 · ISO 27001",
        fineRange: "Up to €10M or 2% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-09: Automated decisions / profiling without disclosure
    if (
      hasAutomatedDecision &&
      !lower.includes("right to object") &&
      !lower.includes("automated decision-making")
    ) {
      issues.push({
        id: "EU-09-automated-decision",
        severity: "warning",
        category: "GDPR",
        title: "Automated Decision-Making / Profiling Not Adequately Disclosed",
        description:
          "References to profiling, scoring, or automated processing were detected but the required GDPR disclosure about automated decision-making rights was not found. Users must be informed of the existence of automated decisions and their right to object.",
        recommendation:
          "Add an 'Automated Decision-Making and Profiling' section to your privacy policy. Explain the logic involved, the significance and consequences, and the user's right to request human review under GDPR Art. 22.",
        law: "GDPR Art. 22 · GDPR Art. 13(2)(f) · UK GDPR",
        fineRange: "Up to €20M or 4% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }

    // EU-10: Third-party iframes without disclosure
    if (thirdPartyIframes.length > 0) {
      issues.push({
        id: "EU-10-third-party-iframes",
        severity: "warning",
        category: "GDPR",
        title: `Third-Party Embedded Content (${thirdPartyIframes.length} iframes) Without Disclosure`,
        description:
          "One or more cross-origin iframes were detected. Embedding third-party content (YouTube, Google Maps, Calendly, social media feeds, etc.) may involve sending user IP addresses and browsing data to those third parties without explicit user knowledge.",
        recommendation:
          "Disclose all third-party embeds and the data they may process in your privacy policy. Consider implementing 'consent facades' (thumbnails that load the actual embed only after user click/consent) to comply with GDPR without blocking content entirely.",
        law: "GDPR Art. 26 (Joint Controllers) · GDPR Art. 13(1)(e) · UK GDPR",
        fineRange: "Up to €20M or 4% turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["EU_GDPR", "UK"],
      });
    }
  }

  // ─── UK-Specific checks ────────────────────────────────────────────────────

  if (isUK) {
    const hasICO =
      lower.includes("ico") ||
      lower.includes("information commissioner") ||
      lower.includes("ico.org.uk");
    if (!hasICO) {
      issues.push({
        id: "UK-01-no-ico-reference",
        severity: "warning",
        category: "UK GDPR / DPA 2018",
        title: "ICO (UK Regulator) Not Referenced",
        description:
          "No reference to the ICO (Information Commissioner's Office) was found. UK GDPR requires informing users of their right to complain to the ICO, and many UK organisations must register with the ICO.",
        recommendation:
          "Add a reference to the ICO in your privacy policy: 'You have the right to complain to the ICO at https://ico.org.uk. ICO helpline: 0303 123 1113.' Check if your organisation needs to register with the ICO (most data controllers must pay the data protection fee).",
        law: "UK GDPR Art. 77 · Data Protection Act 2018 · ICO Registration (DPA 2018 Part 2)",
        fineRange: "Up to £17.5M or 4% global annual turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["UK"],
      });
    }

    const hasPECRCompliance =
      lower.includes("marketing emails") ||
      lower.includes("direct marketing") ||
      lower.includes("email marketing") ||
      lower.includes("opt-in") ||
      lower.includes("unsubscribe");
    const hasEmailMarketing =
      lower.includes("newsletter") ||
      lower.includes("subscribe") ||
      lower.includes("email list");
    if (hasEmailMarketing && !hasPECRCompliance) {
      issues.push({
        id: "UK-02-pecr-email-marketing",
        severity: "warning",
        category: "UK GDPR / DPA 2018",
        title: "Email Marketing Without PECR Compliance Statement",
        description:
          "An email subscription or newsletter was detected but no reference to PECR (Privacy and Electronic Communications Regulations) compliance or opt-in consent for marketing emails was found. PECR requires explicit opt-in consent for marketing emails.",
        recommendation:
          "Add a PECR compliance statement for email marketing: explain that you only send marketing emails to those who have explicitly opted in, provide easy unsubscribe mechanisms on every email, and add a double opt-in where possible. Reference PECR Regulation 22.",
        law: "PECR 2003 Reg. 22 · UK GDPR Art. 6(1)(a) · ICO Direct Marketing Guidance",
        fineRange: "ICO can issue fines up to £500,000 for PECR breaches",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["UK"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: INDIA DPDP ACT 2023
  // ═══════════════════════════════════════════════════════════════════════════

  if (isIndia) {
    const hasDataFiduciary =
      lower.includes("data fiduciary") || lower.includes("data principal");
    if (!hasDataFiduciary) {
      issues.push({
        id: "IN-01-no-data-fiduciary-disclosure",
        severity: "critical",
        category: "India DPDP 2023",
        title: "Data Fiduciary Disclosure Missing (DPDP Act 2023)",
        description:
          "Under India's DPDP Act 2023, entities that process personal data are called 'Data Fiduciaries'. The privacy notice must use this terminology and disclose the complete identity of the Data Fiduciary. This is mandatory since the DPDP Act came into force.",
        recommendation:
          "Update your privacy policy to use DPDP Act terminology: identify yourself as a 'Data Fiduciary', identify users as 'Data Principals', and include your full legal name, address, and grievance officer contact details. Reference the DPDP Act 2023.",
        law: "DPDP Act 2023 §2(i) (Data Fiduciary) · §7 (Notice) · §8 (Consent)",
        fineRange: "Up to ₹250 crore per instance",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["India"],
      });
    }

    const hasGrievanceOfficer =
      lower.includes("grievance") ||
      lower.includes("nodal officer") ||
      lower.includes("contact officer");
    if (!hasGrievanceOfficer) {
      issues.push({
        id: "IN-02-no-grievance-officer",
        severity: "critical",
        category: "India DPDP 2023",
        title: "Grievance Officer Contact Missing (DPDP Act 2023 §8)",
        description:
          "The DPDP Act 2023 requires every Data Fiduciary to publish the name and contact details of a Grievance Officer through whom Data Principals can lodge complaints. This contact must be in India.",
        recommendation:
          "Appoint a Grievance Officer and publish their name, designation, and contact email/phone in your privacy notice. The officer must respond to complaints within 7 days and resolve them within 30 days.",
        law: "DPDP Act 2023 §8(10) · IT Act 2000 §43A · Consumer Protection Act 2019",
        fineRange: "Up to ₹250 crore for repeated non-compliance",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["India"],
      });
    }

    const hasConsentManagerRef =
      lower.includes("consent manager") || lower.includes("consent artefact");
    if (!hasConsentManagerRef && hasForms) {
      issues.push({
        id: "IN-03-no-consent-manager",
        severity: "warning",
        category: "India DPDP 2023",
        title: "Consent Manager Not Referenced (DPDP Act 2023)",
        description:
          "Under the DPDP Act, Data Fiduciaries must provide consent through 'Consent Managers' — intermediaries registered with the Data Protection Board. For interactive services collecting personal data, reference to this mechanism is expected.",
        recommendation:
          "Plan to integrate with a DPDP-registered Consent Manager as the regulatory ecosystem develops. In the meantime, ensure your consent mechanisms are clear, specific, and free of pre-ticked boxes. Add a reference to your consent mechanism in your privacy notice.",
        law: "DPDP Act 2023 §6 (Consent) · §2(k) (Consent Manager) · Rule to be notified",
        fineRange: "Up to ₹50 crore for consent violations",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["India"],
      });
    }

    const hasDataProtectionBoard =
      lower.includes("data protection board") || lower.includes("dpb");
    if (!hasDataProtectionBoard) {
      issues.push({
        id: "IN-04-no-dpb-reference",
        severity: "warning",
        category: "India DPDP 2023",
        title: "Data Protection Board Not Referenced",
        description:
          "No reference to the Data Protection Board of India (the regulatory authority under the DPDP Act 2023) was found. Users must be informed of their right to file complaints with the Board.",
        recommendation:
          "Add a reference to the Data Protection Board of India in your privacy policy: 'You may file a complaint with the Data Protection Board of India if you believe your rights under the DPDP Act 2023 have been violated.'",
        law: "DPDP Act 2023 §§27-37 (Data Protection Board) · §40 (Complaints)",
        fineRange: "Fines adjudicated by the Board up to ₹250 crore",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["India"],
      });
    }

    if (hasChildrenKeywords && !hasAgeVerification) {
      issues.push({
        id: "IN-05-children-dpdp",
        severity: "critical",
        category: "Children Safety",
        title: "Children's Data Without Verifiable Parental Consent (DPDP §9)",
        description:
          "Content relevant to children was detected but no verifiable parental consent mechanism was found. The DPDP Act 2023 §9 requires verifiable parental consent before processing any child's (under 18) personal data. Processing children's data without this is a severe violation.",
        recommendation:
          "Implement a verifiable parental consent mechanism before collecting any data from users under 18. This must be more robust than a simple checkbox — consider age-gating with ID verification or parental confirmation. Conduct a DPIA for any service likely to be accessed by children.",
        law: "DPDP Act 2023 §9 · §11 (Special provisions) · POCSO Act 2012",
        fineRange: "Up to ₹200 crore for children's data violations",
        fixAction: "generate_dpia",
        jurisdictions: ["India"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: CCPA / CPRA (California / USA)
  // ═══════════════════════════════════════════════════════════════════════════

  if (isCCPA) {
    const hasDoNotSell =
      lower.includes("do not sell") ||
      lower.includes("do not share") ||
      lower.includes("opt-out of sale") ||
      lower.includes("opt out of sale") ||
      lower.includes("your privacy choices") ||
      lower.includes("privacy choices");
    if (!hasDoNotSell) {
      issues.push({
        id: "CA-01-no-do-not-sell",
        severity: "critical",
        category: "CCPA / CPRA",
        title: '"Do Not Sell or Share My Personal Information" Link Missing',
        description:
          "Under CCPA/CPRA, businesses that sell or share personal information must provide a prominent 'Do Not Sell or Share My Personal Information' link or button. This must be in the footer and accessible without login.",
        recommendation:
          "Add a 'Do Not Sell or Share My Personal Information' link to your website footer. This link must lead to an opt-out mechanism that allows California consumers to opt out of the sale or sharing of their personal information. This is not required if you do not sell/share personal data — but you must then state this clearly.",
        law: "CCPA §1798.120 · CPRA §1798.135 · Cal. Civ. Code §1798.100",
        fineRange:
          "$7,500 per intentional violation, $2,500 per unintentional violation",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["USA_CCPA"],
      });
    }

    const hasCCPARights =
      lower.includes("california") ||
      lower.includes("california consumer") ||
      lower.includes("ccpa") ||
      lower.includes("cpra");
    if (!hasCCPARights) {
      issues.push({
        id: "CA-02-no-ccpa-disclosure",
        severity: "critical",
        category: "CCPA / CPRA",
        title: "CCPA/CPRA Consumer Rights Not Disclosed",
        description:
          "No reference to CCPA/CPRA consumer rights was found. California consumers have the right to know, delete, correct, opt-out, limit use of sensitive PI, and non-discrimination. These must be disclosed in your privacy policy.",
        recommendation:
          "Add a 'California Consumer Privacy Rights' section to your privacy policy listing all CCPA/CPRA rights with instructions on how to submit requests. Specify your response time (45 days, extendable to 90). Include contact details for privacy requests.",
        law: "CCPA §1798.100-§1798.199 · CPRA (effective Jan 2023) · Cal. Civ. Code",
        fineRange: "$7,500 per intentional violation enforced by CPPA",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["USA_CCPA"],
      });
    }

    const hasSensitivePI =
      lower.includes("sensitive personal information") ||
      lower.includes("sensitive pi") ||
      lower.includes("limit the use");
    if (
      !hasSensitivePI &&
      (lower.includes("health") ||
        lower.includes("financial") ||
        lower.includes("biometric") ||
        lower.includes("location") ||
        lower.includes("race") ||
        lower.includes("religion") ||
        lower.includes("sexual"))
    ) {
      issues.push({
        id: "CA-03-sensitive-pi",
        severity: "warning",
        category: "CCPA / CPRA",
        title: "Sensitive Personal Information Categories Not Disclosed",
        description:
          "The website appears to collect sensitive personal information categories (health, financial, biometric, location, race, religion, or sexual orientation data) but no CPRA sensitive PI disclosure or 'Limit the Use of My Sensitive Personal Information' mechanism was found.",
        recommendation:
          "CPRA defines 'sensitive personal information' with stricter requirements. Add disclosures for each sensitive PI category you collect. Implement a 'Limit the Use of My Sensitive Personal Information' link in your footer. Review CPRA §1798.121.",
        law: "CPRA §1798.121 · CCPA §1798.140(ae) · Cal. Civ. Code",
        fineRange: "$7,500 per intentional violation",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["USA_CCPA"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: CANADA PIPEDA
  // ═══════════════════════════════════════════════════════════════════════════

  if (isCanada) {
    const hasPIPEDA =
      lower.includes("pipeda") ||
      lower.includes("privacy commissioner") ||
      lower.includes("opc.gc.ca") ||
      lower.includes("personal information protection");
    if (!hasPIPEDA) {
      issues.push({
        id: "CN-01-no-pipeda",
        severity: "critical",
        category: "PIPEDA",
        title: "PIPEDA Compliance Disclosure Missing",
        description:
          "No reference to PIPEDA (Personal Information Protection and Electronic Documents Act) compliance or the Office of the Privacy Commissioner of Canada was found. Canadian law requires transparency about data handling practices.",
        recommendation:
          "Add PIPEDA compliance language to your privacy policy. Reference Canada's 10 Fair Information Principles (Accountability, Identifying Purposes, Consent, Limiting Collection, Limiting Use, Accuracy, Safeguards, Openness, Individual Access, Challenging Compliance). Include contact details for the Privacy Commissioner of Canada.",
        law: "PIPEDA §11 · Privacy Act R.S.C. 1985 · CPPA (Bill C-27 pending)",
        fineRange: "Up to CAD $100,000 per violation",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Canada"],
      });
    }

    const hasAccountability =
      lower.includes("accountab") ||
      lower.includes("responsible") ||
      lower.includes("privacy officer");
    if (!hasAccountability) {
      issues.push({
        id: "CN-02-accountability",
        severity: "warning",
        category: "PIPEDA",
        title:
          "Privacy Officer / Accountability Not Disclosed (PIPEDA Principle 1)",
        description:
          "No mention of a designated Privacy Officer or accountability structure was found. PIPEDA's Principle 1 (Accountability) requires naming someone responsible for compliance.",
        recommendation:
          "Designate a Privacy Officer for PIPEDA compliance and publish their contact details in your privacy policy. State that your organisation is accountable for complying with PIPEDA principles.",
        law: "PIPEDA Schedule 1, Principle 1 (Accountability) · §4.1",
        fineRange: "Up to CAD $100,000 per violation",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Canada"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: AUSTRALIA PRIVACY ACT
  // ═══════════════════════════════════════════════════════════════════════════

  if (isAustralia) {
    const hasAPP =
      lower.includes("australian privacy principles") ||
      lower.includes("app") ||
      lower.includes("oaic") ||
      lower.includes("privacy act 1988") ||
      lower.includes("privacy commissioner");
    if (!hasAPP) {
      issues.push({
        id: "AU-01-no-app",
        severity: "critical",
        category: "Australia Privacy Act",
        title: "Australian Privacy Principles (APPs) Not Referenced",
        description:
          "No reference to the Australian Privacy Act 1988 or the Australian Privacy Principles was found. APP entities (with turnover > AUD $3M or in certain sectors) must have a compliant privacy policy referencing the APPs.",
        recommendation:
          "Add an Australian Privacy Act section to your privacy policy. Reference the 13 Australian Privacy Principles. Include OAIC contact details and note the user's right to complain to the OAIC at oaic.gov.au.",
        law: "Privacy Act 1988 (Cth) · Australian Privacy Principles (APPs) · Notifiable Data Breaches Scheme",
        fineRange: "Up to AUD $50M or 30% of adjusted annual turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Australia"],
      });
    }

    const hasCrossBorderDisclosure =
      lower.includes("overseas") ||
      lower.includes("cross-border") ||
      lower.includes("outside australia") ||
      lower.includes("international");
    if (!hasCrossBorderDisclosure && hasThirdPartyTrackers) {
      issues.push({
        id: "AU-02-cross-border",
        severity: "warning",
        category: "Australia Privacy Act",
        title:
          "Overseas Disclosure of Personal Information Not Disclosed (APP 8)",
        description:
          "Third-party services that may transfer personal data overseas were detected, but no disclosure of overseas recipients was found. APP 8 requires disclosing when personal information may be sent overseas and taking reasonable steps to ensure the recipient complies with the APPs.",
        recommendation:
          "Add an 'Overseas Disclosure' section to your privacy policy. List the countries where personal information may be sent and the safeguards in place. Reference APP 8 compliance.",
        law: "Privacy Act 1988 APP 8 · Notifiable Data Breaches Scheme (Part IIIC)",
        fineRange: "Up to AUD $50M",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Australia"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: BRAZIL LGPD
  // ═══════════════════════════════════════════════════════════════════════════

  if (isBrazil) {
    const hasLGPD =
      lower.includes("lgpd") ||
      lower.includes("lei geral") ||
      lower.includes("anpd") ||
      lower.includes("autoridade nacional");
    if (!hasLGPD) {
      issues.push({
        id: "BR-01-no-lgpd",
        severity: "critical",
        category: "Brazil LGPD",
        title: "LGPD Compliance Disclosure Missing",
        description:
          "No reference to the LGPD (Lei Geral de Proteção de Dados No. 13.709/2018) or the ANPD (Brazil's data protection authority) was found. Brazilian law requires specific disclosures about data processing.",
        recommendation:
          "Update your privacy policy to include LGPD-specific disclosures: legal basis under Art. 7, data subject rights under Art. 18 (all 9 rights), controller/processor identification, international transfer safeguards, and ANPD contact. Appoint a DPO (Encarregado) if required.",
        law: "LGPD Art. 9 (Required information) · Art. 7 (Legal basis) · Art. 18 (Rights) · Art. 41 (DPO)",
        fineRange: "2% of Brazil revenue, max R$50M per infraction",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Brazil"],
      });
    }

    const hasDPOBR =
      lower.includes("encarregado") ||
      lower.includes("dpo") ||
      lower.includes("data protection officer");
    if (!hasDPOBR) {
      issues.push({
        id: "BR-02-no-dpo",
        severity: "warning",
        category: "Brazil LGPD",
        title: "DPO (Encarregado) Not Appointed or Disclosed",
        description:
          "No reference to a DPO (Encarregado de Dados / Data Protection Officer) was found. Under LGPD Art. 41, controllers must appoint a DPO and publish their contact information.",
        recommendation:
          "Appoint a DPO (can be an individual or a company). Publish the DPO's name and contact details in your privacy policy and on your website. This is mandatory under LGPD for organisations processing Brazilian data.",
        law: "LGPD Art. 41 · ANPD Resolution CD/ANPD nº 2/2022",
        fineRange: "Up to R$50M per infraction",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Brazil"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 8: SINGAPORE PDPA
  // ═══════════════════════════════════════════════════════════════════════════

  if (isSingapore) {
    const hasPDPA =
      lower.includes("pdpa") ||
      lower.includes("pdpc") ||
      lower.includes("personal data protection commission") ||
      lower.includes("personal data protection act");
    if (!hasPDPA) {
      issues.push({
        id: "SG-01-no-pdpa",
        severity: "critical",
        category: "Singapore PDPA",
        title: "PDPA Compliance Disclosure Missing",
        description:
          "No reference to the PDPA (Personal Data Protection Act 2012, amended 2020) or the PDPC was found. Singapore organisations must comply with PDPA obligations including consent, purpose limitation, and mandatory breach notification.",
        recommendation:
          "Update your privacy policy to include PDPA-specific disclosures: identify the organisation and Data Protection Officer, state the purposes of collection, disclose overseas transfers, and explain how users can exercise access and correction rights. Reference the PDPC.",
        law: "PDPA 2012 §13 (Consent) · §18 (Purpose) · §20 (Notification) · §37 (DPO)",
        fineRange:
          "SGD $1M or 10% of Singapore annual turnover (higher of the two)",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Singapore"],
      });
    }

    const hasDPOSG =
      lower.includes("data protection officer") ||
      lower.includes("dpo") ||
      lower.includes("pdpa officer");
    if (!hasDPOSG) {
      issues.push({
        id: "SG-02-no-dpo",
        severity: "warning",
        category: "Singapore PDPA",
        title: "Data Protection Officer (DPO) Mandatory Under PDPA §37",
        description:
          "Under the amended PDPA 2020, all organisations must designate a Data Protection Officer. No DPO was mentioned on this site.",
        recommendation:
          "Designate at least one individual as DPO and publish their business contact details on your website and in your privacy policy. The DPO must ensure compliance and can be an employee or an outsourced provider.",
        law: "PDPA 2012 §37 (amended 2020) · PDPC Advisory Guidelines on PDPA",
        fineRange: "Financial penalty up to SGD $1M",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Singapore"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 9: JAPAN APPI
  // ═══════════════════════════════════════════════════════════════════════════

  if (isJapan) {
    const hasAPPI =
      lower.includes("appi") ||
      lower.includes("ppc") ||
      lower.includes("個人情報") ||
      lower.includes("personal information protection commission") ||
      lower.includes("act on the protection of personal information");
    if (!hasAPPI) {
      issues.push({
        id: "JP-01-no-appi",
        severity: "critical",
        category: "Japan APPI",
        title: "APPI Compliance Disclosure Missing",
        description:
          "No reference to Japan's APPI (Act on the Protection of Personal Information, 2022 amendment) or the PPC (Personal Information Protection Commission) was found. APPI requires disclosure of the purpose of use, third-party provision rules, and individual rights.",
        recommendation:
          "Add an APPI-compliant privacy policy section. Disclose: the purpose of use (Art. 17-19), third-party provision rules (Art. 27), individual rights including disclosure/correction/deletion requests (Art. 33-37), and cross-border transfer safeguards (Art. 28). Include PPC contact.",
        law: "APPI 2022 Art. 17 (Purpose of use) · Art. 27 (Third-party provision) · Art. 33-37 (Rights) · Art. 28 (Cross-border)",
        fineRange: "¥100M (corporate) + criminal penalties for individuals",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Japan"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 10: HIPAA (US Healthcare)
  // ═══════════════════════════════════════════════════════════════════════════

  if (isHIPAA) {
    const hasPHI =
      lower.includes("health information") ||
      lower.includes("medical") ||
      lower.includes("patient") ||
      lower.includes("healthcare") ||
      lower.includes("clinical") ||
      lower.includes("treatment") ||
      lower.includes("diagnosis");
    if (hasPHI) {
      const hasNPP =
        lower.includes("notice of privacy practices") ||
        lower.includes("hipaa") ||
        lower.includes("npp") ||
        lower.includes("protected health information") ||
        lower.includes("phi");
      if (!hasNPP) {
        issues.push({
          id: "HI-01-no-npp",
          severity: "critical",
          category: "HIPAA",
          title: "HIPAA Notice of Privacy Practices (NPP) Missing",
          description:
            "Health-related content was detected but no HIPAA Notice of Privacy Practices (NPP) was found. Covered entities and business associates must provide an NPP that describes how they use and disclose Protected Health Information (PHI).",
          recommendation:
            "If you are a HIPAA Covered Entity (healthcare provider, health plan, or healthcare clearinghouse) or Business Associate, you must post a HIPAA Notice of Privacy Practices on your website. The NPP must describe PHI uses, patient rights, and complaint procedures. Also ensure Business Associate Agreements (BAAs) are in place with all vendors who process PHI.",
          law: "HIPAA Privacy Rule 45 CFR §164.520 (NPP) · §164.308 (Safeguards) · §164.504 (Business Associates)",
          fineRange:
            "$100 to $50,000 per violation (up to $1.9M per category per year) + criminal penalties",
          fixAction: "generate_privacy_policy",
          jurisdictions: ["USA_HIPAA"],
        });
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 10b: EXPANDED JURISDICTION CHECKS (Korea, UAE, Saudi, etc.)
  // ═══════════════════════════════════════════════════════════════════════════

  if (isKorea) {
    const hasPIPA =
      lower.includes("pipa") ||
      lower.includes("개인정보") ||
      lower.includes("pipc") ||
      lower.includes("개인정보보호위원회");
    if (!hasPIPA) {
      issues.push({
        id: "KR-01-no-pipa",
        severity: "critical",
        category: "Global",
        title: "South Korea PIPA Compliance Disclosure Missing",
        description:
          "No reference to South Korea's PIPA (개인정보보호법) or the Personal Information Protection Commission (PIPC) was found. South Korean law requires explicit disclosures, a Chief Privacy Officer, and privacy policies in Korean.",
        recommendation:
          "Add PIPA-compliant privacy policy in Korean: disclose purpose, items collected, and retention period. Appoint a CPO (개인정보 보호책임자). Register with PIPC if processing >50,000 data subjects. Implement separate consent for cross-border transfers.",
        law: "PIPA Art. 15 · Art. 17 · Art. 24 · Art. 31 (CPO) · Art. 34 (breach 72h)",
        fineRange: "KRW 300M or 3% annual turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Korea"],
      });
    }
  }

  if (isUAE) {
    const hasPDPL_UAE =
      lower.includes("pdpl") ||
      lower.includes("uae data") ||
      lower.includes("federal decree");
    if (!hasPDPL_UAE) {
      issues.push({
        id: "AE-01-no-pdpl",
        severity: "critical",
        category: "Global",
        title: "UAE PDPL Compliance Disclosure Missing",
        description:
          "No reference to UAE Federal Decree-Law No. 45/2021 (PDPL) or the UAE Data Office was found. UAE PDPL requires lawful basis, DPO registration with UAE Data Office, and breach notification within 72 hours.",
        recommendation:
          "Publish bilingual (Arabic/English) privacy policy compliant with UAE PDPL. Register a Data Protection Officer with the UAE Data Office. Implement explicit consent or another PDPL lawful basis. Prohibit cross-border transfers without UAE Data Office approval.",
        law: "UAE PDPL Federal Decree-Law 45/2021 Art. 5 · Art. 16 (DPO) · Art. 26 (Breach) · Art. 22 (Transfer)",
        fineRange: "AED 20M per violation",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["UAE"],
      });
    }
  }

  if (isSaudi) {
    const hasSaudiPDPL =
      lower.includes("pdpl") ||
      lower.includes("sdaia") ||
      lower.includes("ndmo") ||
      lower.includes("سياسة الخصوصية");
    if (!hasSaudiPDPL) {
      issues.push({
        id: "SA-01-no-pdpl",
        severity: "critical",
        category: "Global",
        title: "Saudi Arabia PDPL Compliance Disclosure Missing",
        description:
          "No reference to Saudi Arabia's PDPL or SDAIA/NDMO was found. Saudi law requires Arabic-language privacy policy, data localisation for Saudi residents' data, and explicit consent for sensitive data.",
        recommendation:
          "Publish Arabic-language privacy policy (سياسة الخصوصية). Establish lawful basis for processing. Obtain explicit consent for sensitive data. Data localisation: Saudi residents' personal data may not be transferred outside KSA without NDMO approval. Report breaches to NDMO within 72 hours.",
        law: "Saudi PDPL Art. 4 · Art. 12 (Sensitive data) · Art. 21 (Transfer) · Art. 29 (Breach)",
        fineRange: "SAR 5M-10M + business suspension",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["SaudiArabia"],
      });
    }
  }

  if (isThailand) {
    const hasTHPDPA =
      lower.includes("pdpa") ||
      lower.includes("pdpc") ||
      lower.includes("นโยบายความเป็นส่วนตัว") ||
      (lower.includes("thai") && lower.includes("data protection"));
    if (!hasTHPDPA) {
      issues.push({
        id: "TH-01-no-pdpa",
        severity: "critical",
        category: "Global",
        title: "Thailand PDPA Compliance Disclosure Missing",
        description:
          "No reference to Thailand's PDPA (พรบ.คุ้มครองข้อมูลส่วนบุคคล) or PDPC was found. Thailand PDPA mirrors GDPR and requires lawful basis, data subject rights, and breach notification within 72 hours.",
        recommendation:
          "Publish Thai-language privacy policy (นโยบายความเป็นส่วนตัว). Establish lawful basis under §24. Obtain explicit consent (§26) for sensitive personal data. Implement PDPA data subject rights. Notify PDPC of breaches within 72 hours. Appoint DPO if required under §41.",
        law: "Thailand PDPA §24 · §26 · §37 (breach 72h) · §41 (DPO)",
        fineRange: "THB 5M + criminal liability",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Thailand"],
      });
    }
  }

  if (isIndonesia) {
    const hasIDPDP =
      lower.includes("uu pdp") ||
      lower.includes("kominfo") ||
      lower.includes("moci") ||
      lower.includes("kebijakan privasi");
    if (!hasIDPDP) {
      issues.push({
        id: "ID-01-no-pdp",
        severity: "critical",
        category: "Global",
        title: "Indonesia PDP Law 2022 Compliance Disclosure Missing",
        description:
          "No reference to Indonesia's UU PDP 2022 or Kominfo/MOCI was found. Indonesia's PDP Law (effective October 2024) requires explicit consent, data subject rights, and 14-day breach notification.",
        recommendation:
          "Publish Indonesian-language privacy policy (Kebijakan Privasi). Obtain specific, informed, and written consent before collecting personal data. Appoint DPO if processing >250,000 data subjects. Notify MOCI of breaches within 14 days. Cross-border transfers require MOCI approval.",
        law: "UU PDP 27/2022 Art. 20 · Art. 46 (breach 14 days) · Art. 53 (DPO) · Art. 56 (transfer)",
        fineRange: "IDR 60B or 2% annual revenue",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Indonesia"],
      });
    }
  }

  if (isTurkey) {
    const hasKVKK =
      lower.includes("kvkk") ||
      lower.includes("kişisel veri") ||
      lower.includes("verbis") ||
      lower.includes("aydınlatma metni");
    if (!hasKVKK) {
      issues.push({
        id: "TR-01-no-kvkk",
        severity: "critical",
        category: "Global",
        title: "Turkey KVKK Compliance Disclosure Missing",
        description:
          "No reference to Turkey's KVKK (Kişisel Verilerin Korunması Kanunu No. 6698) or the mandatory 'Aydınlatma Metni' (Privacy Notice) was found. Turkish law requires a separate 'Aydınlatma Metni' in addition to a privacy policy.",
        recommendation:
          "Publish mandatory 'Aydınlatma Metni' (Privacy Notice) in Turkish on your website. Register in VERBİS if required. Obtain explicit consent ('açık rıza') for sensitive data. Apply to KVKK for approval of cross-border transfers. Implement data subject rights: access (başvuru), correction, deletion, portability.",
        law: "KVKK Art. 5 · Art. 6 (sensitive) · Art. 11 (rights) · Art. 16 (VERBİS) · Art. 12 (security)",
        fineRange: "TRY 1.9M + criminal liability",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Turkey"],
      });
    }
  }

  if (isPhilippines) {
    const hasNPC =
      lower.includes("npc") ||
      lower.includes("national privacy commission") ||
      lower.includes("data privacy act") ||
      lower.includes("ra 10173");
    if (!hasNPC) {
      issues.push({
        id: "PH-01-no-dpa",
        severity: "critical",
        category: "Global",
        title: "Philippines DPA 2012 Compliance Disclosure Missing",
        description:
          "No reference to the Philippines Data Privacy Act 2012 (RA 10173) or NPC was found. Philippine law mandates mandatory DPO appointment, NPC registration for organisations processing >1,000 data subjects, and 72-hour breach notification.",
        recommendation:
          "Register with NPC if processing >1,000 data subjects. Appoint a mandatory DPO and publish their contact details. Implement Data Privacy Management Program. Conduct PIAs. Report breaches within 72 hours. Allow 6 data subject rights: access, rectification, erasure, objection, portability, damages.",
        law: "RA 10173 §16 · §21 (DPO) · §27 (breach 72h) · NPC Circular 2017-01",
        fineRange: "PHP 5M + 6 years imprisonment",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Philippines"],
      });
    }
  }

  if (isNewZealand) {
    const hasNZPA =
      lower.includes("privacy commissioner") ||
      lower.includes("new zealand privacy") ||
      lower.includes("privacy act 2020") ||
      lower.includes("opc.govt.nz");
    if (!hasNZPA) {
      issues.push({
        id: "NZ-01-no-pa",
        severity: "critical",
        category: "Global",
        title: "NZ Privacy Act 2020 Compliance Disclosure Missing",
        description:
          "No reference to the New Zealand Privacy Act 2020 or the Privacy Commissioner was found. NZ law requires mandatory breach notification for serious harms and compliance with 13 Information Privacy Principles.",
        recommendation:
          "Publish NZ Privacy Act 2020-compliant privacy policy. Notify Privacy Commissioner of serious breaches (must cause 'serious harm'). Comply with all 13 IPPs. Respond to access requests within 20 working days. Include contact details for privacy complaints.",
        law: "NZ Privacy Act 2020 IPP 1-13 · §113 (breach) · §69 (access)",
        fineRange: "NZD 10,000 per individual",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["NewZealand"],
      });
    }
  }

  if (isSwitzerland) {
    const hasNFADP =
      lower.includes("nfadp") ||
      lower.includes("revdsg") ||
      lower.includes("fdpic") ||
      lower.includes("datenschutz") ||
      lower.includes("fdp");
    if (!hasNFADP && !isGDPR) {
      issues.push({
        id: "CH-01-no-nfadp",
        severity: "warning",
        category: "Global",
        title: "Switzerland nFADP 2023 Compliance Disclosure Recommended",
        description:
          "No reference to Switzerland's revised Federal Act on Data Protection (nFADP, in force September 2023) or FDPIC was found. Switzerland is EU-adequate but has additional local requirements including PIA obligations.",
        recommendation:
          "Update privacy policy to reference nFADP/revDSG. Conduct PIAs for high-risk processing. Implement Data Protection by Design and Default. Appoint Swiss representative if based abroad. Notify FDPIC of serious data breaches.",
        law: "nFADP Art. 22 (PIA) · Art. 24 (Breach) · FDPIC guidance",
        fineRange: "CHF 250,000 per individual (criminal)",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Switzerland"],
      });
    }
  }

  if (isNigeria) {
    const hasNDPA =
      lower.includes("ndpa") ||
      lower.includes("ndpc") ||
      lower.includes("ndpr") ||
      lower.includes("nigeria data");
    if (!hasNDPA) {
      issues.push({
        id: "NG-01-no-ndpa",
        severity: "critical",
        category: "Global",
        title: "Nigeria NDPA 2023 Compliance Disclosure Missing",
        description:
          "No reference to Nigeria's Data Protection Act 2023 (NDPA) or NDPC was found. NDPA requires DPO appointment for large processors, Annual Data Audit Reports, and NDPC registration.",
        recommendation:
          "Register with NDPC. Appoint DPO if processing >2,000 data subjects per 6 months. File Annual Data Audit Report with NDPC. Obtain valid consent before collecting personal data. Notify NDPC of breaches within 72 hours.",
        law: "NDPA 2023 §§32-35 (DPO) · §40 (breach) · §25 (transfer) · NDPR 2019",
        fineRange: "NGN 10M or 2% of annual gross revenue",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Nigeria"],
      });
    }
  }

  if (isArgentina) {
    const hasARPDP =
      lower.includes("aaip") ||
      lower.includes("pdp 25.326") ||
      lower.includes("habeas data") ||
      lower.includes("dirección de protección");
    if (!hasARPDP) {
      issues.push({
        id: "AR-01-no-pdpl",
        severity: "warning",
        category: "Global",
        title: "Argentina PDPL 25.326 Compliance Disclosure Recommended",
        description:
          "No reference to Argentina's PDPL 25.326 or AAIP was found. Argentina has EU adequacy status and requires database registration with AAIP and Habeas Data rights implementation.",
        recommendation:
          "Register your personal data databases with AAIP's national register. Implement Habeas Data rights (access, rectification, suppression, confidentiality). Publish Spanish-language privacy policy. Obtain consent for sensitive data processing.",
        law: "PDPL 25.326 Art. 5 · Art. 21 (Register) · Art. 14 (Habeas Data) · Res. AAIP 47/2018",
        fineRange: "ARS 3M+ escalating",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Argentina"],
      });
    }
  }

  if (isKenya) {
    const hasKenyaDPA =
      lower.includes("odpc") ||
      lower.includes("kenya data protection") ||
      lower.includes("data protection commissioner");
    if (!hasKenyaDPA) {
      issues.push({
        id: "KE-01-no-dpa",
        severity: "critical",
        category: "Global",
        title: "Kenya DPA 2019 Compliance Disclosure Missing",
        description:
          "No reference to Kenya's Data Protection Act 2019 or ODPC was found. Kenya DPA requires mandatory registration as Data Controller/Processor and DPO appointment.",
        recommendation:
          "Register with ODPC as Data Controller/Processor. Appoint a DPO. Implement 72-hour breach notification. Conduct DPIAs for high-risk processing. Comply with 8 data protection principles.",
        law: "Kenya DPA 2019 §12 (Registration) · §24 (DPO) · §43 (breach) · §31 (DPIA)",
        fineRange: "KES 5M or 1% annual turnover",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Kenya"],
      });
    }
  }

  if (isIsrael) {
    const hasIsraelPPL =
      lower.includes("ppa") ||
      lower.includes("ilita") ||
      lower.includes("privacy protection") ||
      lower.includes("הגנת פרטיות");
    if (!hasIsraelPPL) {
      issues.push({
        id: "IL-01-no-ppl",
        severity: "warning",
        category: "Global",
        title: "Israel PPL Compliance Disclosure Recommended",
        description:
          "No reference to Israel's Protection of Privacy Law (PPL 5741-1981) or the PPA/ILITA was found. Israel has EU adequacy status and requires database registration with PPA for certain database types.",
        recommendation:
          "Register databases containing personal data with PPA/ILITA registry if applicable. Implement Security Regulations 2017 requirements for significant databases. Allow individuals right to review, correct, or delete their data (§14 PPL). Publish Hebrew-language privacy policy.",
        law: "Israel PPL 5741-1981 §14 · Privacy Regulations (Data Security) 5777-2017",
        fineRange: "ILS 3.2M + criminal liability",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Israel"],
      });
    }
  }

  if (isMexico) {
    const hasMexPDPL =
      lower.includes("lfpdppp") ||
      lower.includes("inai") ||
      lower.includes("aviso de privacidad") ||
      lower.includes("arco");
    if (!hasMexPDPL) {
      issues.push({
        id: "MX-01-no-aviso",
        severity: "critical",
        category: "Global",
        title: "Mexico Aviso de Privacidad Required (LFPDPPP)",
        description:
          "No 'Aviso de Privacidad' (Privacy Notice) or INAI reference was found. Mexico law MANDATES an Aviso de Privacidad prominently on the website — it is not optional and is required for all organisations processing personal data of Mexican residents.",
        recommendation:
          "Publish mandatory 'Aviso de Privacidad' (Privacy Notice) in Spanish. Include: controller identity, purposes of processing, ARCO rights mechanism, cross-border transfer notice. Aviso must be displayed where personal data is collected. Obtain express consent for sensitive data.",
        law: "LFPDPPP Art. 15 (Aviso de Privacidad) · Art. 8 (Consent) · Art. 22 (ARCO) · Art. 36 (Transfer)",
        fineRange: "MXN 320M + imprisonment",
        fixAction: "generate_privacy_policy",
        jurisdictions: ["Mexico"],
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 11: GLOBAL WARNINGS (all jurisdictions)
  // ═══════════════════════════════════════════════════════════════════════════

  // W-01: No cookie policy
  if (!hasCookieLink) {
    issues.push({
      id: "W-01-no-cookie-policy",
      severity: "warning",
      category: "Cookie Law",
      title: "No Cookie Policy Detected",
      description:
        "No link to a cookie policy was found. Websites that use cookies (including analytics and marketing cookies) must publish a cookie policy describing what cookies are used, their purpose, and retention period.",
      recommendation:
        "Create a Cookie Policy that inventories all cookies in use: name, provider, purpose, type (essential/functional/analytics/marketing), and expiry. Link to it from your footer and cookie consent banner. Use PrivacyLaw AutoGen to generate one.",
      law: "ePrivacy Directive Art. 5(3) · GDPR Recital 30 · ICO Cookie Guidance · India IT Rules 2021",
      fineRange: "GDPR: up to €20M / PECR (UK): up to £500,000",
      fixAction: "generate_cookie_policy",
      jurisdictions: jurisdictions,
    });
  }

  // W-02: No ToS
  if (!hasTosLink) {
    issues.push({
      id: "W-02-no-tos",
      severity: "warning",
      category: "Transparency",
      title: "No Terms of Service Link Found",
      description:
        "No link to Terms of Service or Terms of Use was detected. While not always legally required, ToS documents protect your business and set enforceable expectations for users.",
      recommendation:
        "Create and publish Terms of Service, link them from your footer and all sign-up flows. Use PrivacyLaw AutoGen to generate one. At minimum, cover: acceptable use, limitation of liability, intellectual property, dispute resolution, and governing law.",
      law: "Consumer Protection Directive (EU 2019/770) · E-Commerce Regulations (UK) · Consumer Protection Act (India) · Consumer Law Reform (Australia)",
      fixAction: "generate_tos",
      jurisdictions: jurisdictions,
    });
  }

  // W-03: No HTTPS
  if (url.startsWith("http://") && !url.startsWith("https://")) {
    issues.push({
      id: "W-03-no-https",
      severity: "critical",
      category: "Security",
      title: "Website Not Served Over HTTPS",
      description:
        "The website is served over unencrypted HTTP. Any personal data entered via forms — including login credentials, payment details, or health information — is transmitted in plaintext and vulnerable to interception (MITM attacks).",
      recommendation:
        "Obtain a TLS/SSL certificate (free via Let's Encrypt) and configure your server to redirect all HTTP traffic to HTTPS. Implement HSTS (HTTP Strict Transport Security) to prevent downgrade attacks. This is a mandatory technical security measure under all major data protection laws.",
      law: "GDPR Art. 32 · UK GDPR · PCI DSS v4.0 · India IT Act 2000 §43A · HIPAA §164.312",
      fineRange: "GDPR: up to €10M / PCI DSS: card processing suspension",
      jurisdictions: jurisdictions,
    });
  }

  // W-04: Payment processors
  if (paymentTools.length > 0) {
    issues.push({
      id: "W-04-payment-processors",
      severity: "info",
      category: "Security",
      title: `Payment Processors Detected: ${paymentTools.join(", ")}`,
      description: `Payment processing scripts from ${paymentTools.join(", ")} were detected. These require specific PCI DSS compliance disclosures and must be listed as data processors in your privacy policy with DPA references.`,
      recommendation: `Add payment processor disclosures to your privacy policy. For each processor (${paymentTools.join(", ")}), include: what data is shared, a link to their privacy policy, confirmation of Data Processing Agreement (DPA) in place, and PCI DSS compliance scope. Ensure your SAQ (Self-Assessment Questionnaire) type is appropriate.`,
      law: "PCI DSS v4.0 · GDPR Art. 28 · PSD2 (EU) · PSR 2017 (UK) · India RBI Tokenisation Directive",
      jurisdictions: jurisdictions,
    });
  }

  // W-05: Social media pixels
  const socialPixelDetected = detectedTrackers.filter((t) =>
    [
      "Twitter/X Pixel",
      "LinkedIn Insight",
      "Pinterest Tag",
      "TikTok Pixel",
      "Snapchat Pixel",
      "Facebook / Meta Pixel",
    ].some((name) => t === name),
  );
  if (socialPixelDetected.length > 0) {
    issues.push({
      id: "W-05-social-pixels",
      severity: "warning",
      category: "GDPR",
      title: `Social Media Pixels: ${socialPixelDetected.join(", ")}`,
      description: `Social media tracking pixels from ${socialPixelDetected.join(", ")} were detected. These scripts send user behavioural data to social media platforms and require explicit user consent under GDPR and ePrivacy Directive. In the EU, regulators have ruled that shared controllership with social media companies must be disclosed.`,
      recommendation: `Load social media pixels only after explicit cookie consent. For each platform (${socialPixelDetected.join(", ")}), add them to your cookie consent categories under 'Marketing'. Update your privacy policy to list each as a joint controller or processor with a link to their data processing terms.`,
      law: "GDPR Art. 6(1)(a) · GDPR Art. 26 (Joint Controllers) · GDPR Art. 28 · Facebook Ireland C-311/18 · CJEU Case C-40/17",
      fineRange: "GDPR: up to €20M or 4% turnover",
      fixAction: "generate_privacy_policy",
      jurisdictions: jurisdictions,
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 12: INFORMATIONAL
  // ═══════════════════════════════════════════════════════════════════════════

  // I-01: Analytics detected
  const analyticsDetected = detectedTrackers.filter((t) =>
    [
      "Google Analytics / GTM",
      "Matomo (Self-hosted)",
      "Mixpanel",
      "Amplitude",
      "Heap Analytics",
      "Plausible (Privacy-Friendly)",
      "Fathom (Privacy-Friendly)",
    ].some((name) => t === name),
  );
  if (analyticsDetected.length > 0) {
    const isPrivacyFriendly = analyticsDetected.every(
      (t) => t.includes("Privacy-Friendly") || t.includes("Self-hosted"),
    );
    issues.push({
      id: "I-01-analytics",
      severity: isPrivacyFriendly ? "info" : "info",
      category: "GDPR",
      title: `Analytics Tools: ${analyticsDetected.join(", ")}`,
      description: isPrivacyFriendly
        ? `Privacy-friendly analytics tools (${analyticsDetected.join(", ")}) were detected. These tools are generally designed to minimise personal data collection and may not require consent banners in all jurisdictions.`
        : `Analytics tools (${analyticsDetected.join(", ")}) were detected. These process visitor data including IP addresses and must be disclosed as data processors in your privacy policy with DPA references.`,
      recommendation: `List each analytics provider in your privacy policy under 'Data Processors' or 'Analytics'. Include: what data is shared, a link to each provider's privacy policy and DPA, and whether consent is required. For GDPR, ensure you have signed Data Processing Agreements with each provider.`,
      law: "GDPR Art. 28 (Processor obligations) · GDPR Art. 13(1)(e) · Google Analytics CJEU considerations",
      jurisdictions: jurisdictions,
    });
  }

  // I-02: Accessibility
  if (!hasAccessibility) {
    issues.push({
      id: "I-02-accessibility",
      severity: "info",
      category: "Transparency",
      title: "No Accessibility Statement Found",
      description:
        "No mention of WCAG compliance or an accessibility statement was found. Public sector organisations in the UK and EU are legally required to publish an accessibility statement. Private sector organisations increasingly face accessibility claims.",
      recommendation:
        "Conduct a WCAG 2.1 AA audit of your website and publish an accessibility statement describing conformance level, known issues, and contact details for accessibility-related feedback. Consider this business-critical for markets where accessibility laws apply.",
      law: "EU Web Accessibility Directive 2016/2102 · UK Equality Act 2010 · US ADA (Title III) · RPWD Act 2016 (India)",
      jurisdictions: jurisdictions,
    });
  }

  // I-03: Children's keywords
  if (hasChildrenKeywords && !hasAgeVerification && !isIndia) {
    issues.push({
      id: "I-03-children",
      severity: "info",
      category: "Children Safety",
      title: "Children-Related Content Without Visible Age Verification",
      description:
        "Keywords suggesting content relevant to children or minors were detected but no age verification mechanism was visible. Processing children's data requires special protections in most jurisdictions.",
      recommendation:
        "Add explicit age verification or parental consent mechanisms for services likely to be used by children. Include a dedicated children's privacy section in your policy. Review applicable requirements: COPPA (USA), GDPR Art. 8 (EU), UK Children's Code, India DPDP §9.",
      law: "GDPR Art. 8 · COPPA (US, under 13) · UK Children's Code · India DPDP §9 · LGPD Art. 14",
      jurisdictions: jurisdictions,
    });
  }

  // I-04: Privacy-friendly analytics note
  if (hasPrivacyFriendlyAnalytics) {
    issues.push({
      id: "I-04-privacy-friendly-analytics",
      severity: "info",
      category: "Global",
      title: "Privacy-Friendly Analytics Detected — Good Practice",
      description:
        "Privacy-respecting analytics tools (Plausible, Fathom, or Matomo self-hosted) were detected. These tools are generally designed to minimise personal data collection and are a good practice choice.",
      recommendation:
        "Continue using privacy-friendly analytics. Ensure they are still disclosed in your privacy policy. Self-hosted Matomo with IP anonymisation, no cross-site tracking, and no cookie may be exempt from GDPR consent requirements in some EU countries.",
      law: "GDPR Recital 26 (Anonymised data) · ePrivacy Directive · ICO Cookie Guidance",
      jurisdictions: jurisdictions,
    });
  }

  // I-05: Sub-processor count
  const subProcessorCount =
    detectedTrackers.filter((t) => !t.includes("Privacy-Friendly")).length +
    paymentTools.length;
  if (subProcessorCount > 5) {
    issues.push({
      id: "I-05-many-sub-processors",
      severity: "info",
      category: "GDPR",
      title: `High Sub-Processor Count: ${subProcessorCount}+ Third Parties Detected`,
      description: `${subProcessorCount} or more third-party services were detected. Each one that processes personal data is a sub-processor requiring a Data Processing Agreement (DPA) and disclosure in your privacy policy. A large sub-processor list increases your compliance risk surface.`,
      recommendation:
        "Conduct a data mapping exercise to document every data processor. Ensure DPAs are signed with each one. Consider reducing the number of third-party processors where possible to minimise your compliance obligation. Publish a complete sub-processor list in your privacy policy.",
      law: "GDPR Art. 28 · GDPR Art. 30 (Records of Processing Activities) · UK GDPR",
      jurisdictions: jurisdictions,
    });
  }

  return issues;
}

// ─── Score calculation ────────────────────────────────────────────────────────

export type CategoryScore = {
  category: string;
  score: number;
  weight: number;
  issueCount: number;
};

const EIGHT_CATEGORY_WEIGHTS = {
  Privacy: 0.3,
  Security: 0.2,
  Consent: 0.15,
  "Legal Docs": 0.15,
  "Data Rights": 0.1,
  Cookies: 0.05,
  Accessibility: 0.05,
  "Platform Liability": 0.05,
} as const;

function mapIssueToEightCategory(
  category: IssueCategory,
): keyof typeof EIGHT_CATEGORY_WEIGHTS {
  if (category === "Cookie Law") return "Cookies";
  if (category === "Security") return "Security";
  if (category === "Legal Docs" || category === "Transparency")
    return "Legal Docs";
  if (category === "Data Rights") return "Data Rights";
  if (category === "Marketing Compliance" || category === "Platform Liability")
    return "Platform Liability";
  if (category === "Payment Compliance") return "Security";
  return "Privacy";
}

export function computeCategoryScores(
  issues: InspectionIssue[],
): CategoryScore[] {
  const cats = Object.keys(
    EIGHT_CATEGORY_WEIGHTS,
  ) as (keyof typeof EIGHT_CATEGORY_WEIGHTS)[];
  return cats.map((cat) => {
    const catIssues = issues.filter(
      (i) => mapIssueToEightCategory(i.category) === cat,
    );
    const criticals = catIssues.filter((i) => i.severity === "critical").length;
    const warnings = catIssues.filter((i) => i.severity === "warning").length;
    const penalty = criticals * 20 + warnings * 10;
    const score = Math.max(0, 100 - penalty);
    return {
      category: cat,
      score,
      weight: EIGHT_CATEGORY_WEIGHTS[cat],
      issueCount: catIssues.length,
    };
  });
}

export function computeScore(issues: InspectionIssue[]): number {
  const catScores = computeCategoryScores(issues);
  const weighted = catScores.reduce((sum, cs) => sum + cs.score * cs.weight, 0);
  return Math.round(Math.max(0, Math.min(100, weighted)));
}

export function scoreToGrade(score: number): {
  grade: string;
  label: string;
  color: string;
} {
  if (score >= 90)
    return { grade: "A", label: "Excellent", color: "text-emerald-500" };
  if (score >= 75)
    return { grade: "B", label: "Good", color: "text-green-500" };
  if (score >= 60)
    return { grade: "C", label: "Moderate", color: "text-yellow-500" };
  if (score >= 45)
    return { grade: "D", label: "Poor", color: "text-orange-500" };
  return { grade: "F", label: "Critical Risk", color: "text-red-500" };
}

// ─── Report generation ────────────────────────────────────────────────────────

export function generateReportText(
  url: string,
  issues: InspectionIssue[],
  score: number,
  jurisdictions: Jurisdiction[],
): string {
  const grade = scoreToGrade(score);
  const lines: string[] = [
    "═══════════════════════════════════════════════════════════════════════",
    "              PRIVACY LAW COMPLIANCE INSPECTION REPORT",
    "                   Generated by PrivacyLaw AutoGen",
    "═══════════════════════════════════════════════════════════════════════",
    "",
    `Website:           ${url}`,
    `Inspected:         ${new Date().toLocaleString()}`,
    `Compliance Score:  ${score}/100 (Grade: ${grade.grade} — ${grade.label})`,
    `Jurisdictions:     ${jurisdictions.map((j) => JURISDICTION_INFO[j]?.framework || j).join(", ")}`,
    "",
    `  Critical Issues: ${issues.filter((i) => i.severity === "critical").length}`,
    `  Warnings:        ${issues.filter((i) => i.severity === "warning").length}`,
    `  Informational:   ${issues.filter((i) => i.severity === "info").length}`,
    `  Total Issues:    ${issues.length}`,
    "",
    "APPLICABLE REGULATORY FRAMEWORKS",
    "─────────────────────────────────────────────────────────────────────",
    "",
    ...jurisdictions.map((j) => {
      const info = JURISDICTION_INFO[j];
      return `  ${info?.flag || ""} ${info?.framework || j}\n     Regulator: ${info?.regulator || "N/A"}\n     Max Fine: ${info?.maxFine || "N/A"}`;
    }),
    "",
    "═══════════════════════════════════════════════════════════════════════",
    "CRITICAL ISSUES (Action Required — Risk of Regulatory Fine)",
    "─────────────────────────────────────────────────────────────────────",
    "",
  ];

  const criticals = issues.filter((i) => i.severity === "critical");
  if (criticals.length === 0) {
    lines.push("  ✓ No critical issues found");
    lines.push("");
  } else {
    criticals.forEach((issue, idx) => {
      lines.push(`  ${idx + 1}. [${issue.category}] ${issue.title}`);
      lines.push(`     Law Reference:  ${issue.law}`);
      if (issue.fineRange)
        lines.push(`     Fine Exposure:  ${issue.fineRange}`);
      lines.push(`     Issue:          ${issue.description}`);
      lines.push(`     Fix:            ${issue.recommendation}`);
      lines.push("");
    });
  }

  lines.push(
    "═══════════════════════════════════════════════════════════════════════",
  );
  lines.push("WARNINGS (Should Fix — Regulatory Risk)");
  lines.push(
    "─────────────────────────────────────────────────────────────────────",
  );
  lines.push("");

  const warnings = issues.filter((i) => i.severity === "warning");
  if (warnings.length === 0) {
    lines.push("  ✓ No warnings found");
    lines.push("");
  } else {
    warnings.forEach((issue, idx) => {
      lines.push(`  ${idx + 1}. [${issue.category}] ${issue.title}`);
      lines.push(`     Law Reference:  ${issue.law}`);
      if (issue.fineRange)
        lines.push(`     Fine Exposure:  ${issue.fineRange}`);
      lines.push(`     Issue:          ${issue.description}`);
      lines.push(`     Fix:            ${issue.recommendation}`);
      lines.push("");
    });
  }

  lines.push(
    "═══════════════════════════════════════════════════════════════════════",
  );
  lines.push("INFORMATIONAL (Best Practice Recommendations)");
  lines.push(
    "─────────────────────────────────────────────────────────────────────",
  );
  lines.push("");

  const infos = issues.filter((i) => i.severity === "info");
  if (infos.length === 0) {
    lines.push("  ✓ No informational notices");
    lines.push("");
  } else {
    infos.forEach((issue, idx) => {
      lines.push(`  ${idx + 1}. [${issue.category}] ${issue.title}`);
      lines.push(`     Law Reference:  ${issue.law}`);
      lines.push(`     Issue:          ${issue.description}`);
      lines.push(`     Fix:            ${issue.recommendation}`);
      lines.push("");
    });
  }

  lines.push(
    "═══════════════════════════════════════════════════════════════════════",
  );
  lines.push("DISCLAIMER");
  lines.push(
    "─────────────────────────────────────────────────────────────────────",
  );
  lines.push(
    "This report is generated by automated analysis of publicly visible page",
  );
  lines.push(
    "HTML. It is NOT legal advice. Regulatory exposure may differ based on",
  );
  lines.push(
    "your specific business context. Consult a qualified data protection",
  );
  lines.push("lawyer for a definitive legal assessment.");
  lines.push("");
  lines.push("Generated by PrivacyLaw AutoGen | privacylaw.autogen");
  lines.push(
    "═══════════════════════════════════════════════════════════════════════",
  );

  return lines.join("\n");
}
