import type { Country } from "../types/documentTypes";

export const COUNTRIES: Country[] = [
  // EU/EEA Countries
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "IT",
    name: "Italy",
    flag: "🇮🇹",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "ES",
    name: "Spain",
    flag: "🇪🇸",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "NL",
    name: "Netherlands",
    flag: "🇳🇱",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "BE",
    name: "Belgium",
    flag: "🇧🇪",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "SE",
    name: "Sweden",
    flag: "🇸🇪",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "PL",
    name: "Poland",
    flag: "🇵🇱",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "AT",
    name: "Austria",
    flag: "🇦🇹",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "DK",
    name: "Denmark",
    flag: "🇩🇰",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "FI",
    name: "Finland",
    flag: "🇫🇮",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "PT",
    name: "Portugal",
    flag: "🇵🇹",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "GR",
    name: "Greece",
    flag: "🇬🇷",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "CZ",
    name: "Czech Republic",
    flag: "🇨🇿",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "HU",
    name: "Hungary",
    flag: "🇭🇺",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "RO",
    name: "Romania",
    flag: "🇷🇴",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "SK",
    name: "Slovakia",
    flag: "🇸🇰",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "HR",
    name: "Croatia",
    flag: "🇭🇷",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "BG",
    name: "Bulgaria",
    flag: "🇧🇬",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "LT",
    name: "Lithuania",
    flag: "🇱🇹",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "LV",
    name: "Latvia",
    flag: "🇱🇻",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "EE",
    name: "Estonia",
    flag: "🇪🇪",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "SI",
    name: "Slovenia",
    flag: "🇸🇮",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "LU",
    name: "Luxembourg",
    flag: "🇱🇺",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "MT",
    name: "Malta",
    flag: "🇲🇹",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  {
    code: "CY",
    name: "Cyprus",
    flag: "🇨🇾",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  // UK
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    frameworks: ["uk-dpa-2018", "gdpr"],
    primaryFramework: "uk-dpa-2018",
    optionalFrameworks: ["gdpr"],
  },
  // India
  {
    code: "IN",
    name: "India",
    flag: "🇮🇳",
    frameworks: ["india-dpdp-2023"],
    primaryFramework: "india-dpdp-2023",
  },
  // USA
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    frameworks: ["ccpa-cpra", "hipaa"],
    primaryFramework: "ccpa-cpra",
    optionalFrameworks: ["hipaa"],
  },
  // Canada
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    frameworks: ["pipeda"],
    primaryFramework: "pipeda",
  },
  // Australia
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    frameworks: ["australia-privacy-act"],
    primaryFramework: "australia-privacy-act",
  },
  // Asia-Pacific
  {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    frameworks: ["singapore-pdpa"],
    primaryFramework: "singapore-pdpa",
  },
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    frameworks: ["japan-appi"],
    primaryFramework: "japan-appi",
  },
  // Latin America
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    frameworks: ["brazil-lgpd"],
    primaryFramework: "brazil-lgpd",
  },
  // China
  {
    code: "CN",
    name: "China",
    flag: "🇨🇳",
    frameworks: ["china-pipl"],
    primaryFramework: "china-pipl",
  },
  // South Africa
  {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    frameworks: ["south-africa-popia"],
    primaryFramework: "south-africa-popia",
  },
  // South Korea
  {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    frameworks: ["korea-pipa"],
    primaryFramework: "korea-pipa",
  },
  // UAE
  {
    code: "AE",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    frameworks: ["uae-pdpl"],
    primaryFramework: "uae-pdpl",
  },
  // Saudi Arabia
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    frameworks: ["saudi-pdpl"],
    primaryFramework: "saudi-pdpl",
  },
  // Nigeria
  {
    code: "NG",
    name: "Nigeria",
    flag: "🇳🇬",
    frameworks: ["nigeria-ndpr"],
    primaryFramework: "nigeria-ndpr",
  },
  // Kenya
  {
    code: "KE",
    name: "Kenya",
    flag: "🇰🇪",
    frameworks: ["kenya-dpa"],
    primaryFramework: "kenya-dpa",
  },
  // Mexico
  {
    code: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    frameworks: ["mexico-lfpdppp"],
    primaryFramework: "mexico-lfpdppp",
  },
  // Argentina
  {
    code: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    frameworks: ["argentina-pdp"],
    primaryFramework: "argentina-pdp",
  },
  // Thailand
  {
    code: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    frameworks: ["thailand-pdpa"],
    primaryFramework: "thailand-pdpa",
  },
  // Indonesia
  {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    frameworks: ["indonesia-pdp"],
    primaryFramework: "indonesia-pdp",
  },
  // New Zealand
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    frameworks: ["newzealand-privacy-act"],
    primaryFramework: "newzealand-privacy-act",
  },
  // Israel
  {
    code: "IL",
    name: "Israel",
    flag: "🇮🇱",
    frameworks: ["israel-ppl"],
    primaryFramework: "israel-ppl",
  },
  // Philippines
  {
    code: "PH",
    name: "Philippines",
    flag: "🇵🇭",
    frameworks: ["philippines-dpa"],
    primaryFramework: "philippines-dpa",
  },
  // Switzerland
  {
    code: "CH",
    name: "Switzerland",
    flag: "🇨🇭",
    frameworks: ["switzerland-nfadp"],
    primaryFramework: "switzerland-nfadp",
  },
  // Turkey
  {
    code: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    frameworks: ["turkey-kvkk"],
    primaryFramework: "turkey-kvkk",
  },
  // Norway (EEA — GDPR)
  {
    code: "NO",
    name: "Norway",
    flag: "🇳🇴",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  // Iceland (EEA — GDPR)
  {
    code: "IS",
    name: "Iceland",
    flag: "🇮🇸",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
  // Liechtenstein (EEA — GDPR)
  {
    code: "LI",
    name: "Liechtenstein",
    flag: "🇱🇮",
    frameworks: ["gdpr"],
    primaryFramework: "gdpr",
  },
];

export const FRAMEWORK_LABELS: Record<string, string> = {
  gdpr: "GDPR (EU General Data Protection Regulation)",
  "uk-dpa-2018": "UK Data Protection Act 2018",
  "india-dpdp-2023": "India DPDP Act 2023",
  "ccpa-cpra": "California CCPA/CPRA",
  pipeda: "Canada PIPEDA",
  "australia-privacy-act": "Australia Privacy Act 1988",
  "brazil-lgpd": "Brazil LGPD (Lei Geral de Proteção de Dados)",
  "singapore-pdpa": "Singapore PDPA 2012",
  "japan-appi": "Japan APPI (Act on the Protection of Personal Information)",
  hipaa: "US HIPAA (Health Insurance Portability and Accountability Act)",
  "china-pipl": "China PIPL / CSL / DSL (Personal Information Protection Law)",
  "south-africa-popia":
    "South Africa POPIA (Protection of Personal Information Act)",
  "korea-pipa": "South Korea PIPA (Personal Information Protection Act)",
  "uae-pdpl": "UAE Federal Decree-Law No. 45/2021 (PDPL)",
  "saudi-pdpl": "Saudi Arabia PDPL (Personal Data Protection Law)",
  "nigeria-ndpr": "Nigeria NDPR / NDPA (Data Protection Act 2023)",
  "kenya-dpa": "Kenya Data Protection Act 2019",
  "mexico-lfpdppp": "Mexico LFPDPPP (Federal Data Protection Law)",
  "argentina-pdp": "Argentina Personal Data Protection Law 25.326",
  "thailand-pdpa": "Thailand PDPA (Personal Data Protection Act 2019)",
  "indonesia-pdp": "Indonesia PDP Law 2022 (UU PDP)",
  "newzealand-privacy-act": "New Zealand Privacy Act 2020",
  "israel-ppl": "Israel Protection of Privacy Law 5741-1981",
  "philippines-dpa": "Philippines Data Privacy Act 2012 (RA 10173)",
  "switzerland-nfadp": "Switzerland nFADP / revDSG (2023)",
  "turkey-kvkk": "Turkey KVKK (Law No. 6698)",
};

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find((c) => c.code === code);
}

export function getFrameworksForCountry(code: string): string[] {
  const country = getCountryByCode(code);
  return country ? country.frameworks : ["gdpr"];
}

export function detectCountryFromLocale(): string {
  const lang = navigator.language || "en-US";
  const parts = lang.split("-");
  const region = parts[1]?.toUpperCase();
  const language = parts[0]?.toLowerCase();

  if (region) {
    const found = COUNTRIES.find((c) => c.code === region);
    if (found) return found.code;
  }

  // Fallback by language
  const langMap: Record<string, string> = {
    de: "DE",
    fr: "FR",
    it: "IT",
    es: "ES",
    nl: "NL",
    pl: "PL",
    sv: "SE",
    da: "DK",
    fi: "FI",
    pt: "PT",
    el: "GR",
    cs: "CZ",
    hu: "HU",
    ro: "RO",
    hr: "HR",
    bg: "BG",
    lt: "LT",
    lv: "LV",
    et: "EE",
    sl: "SI",
    hi: "IN",
    ja: "JP",
    ko: "KR",
    ar: "AE",
    th: "TH",
    id: "ID",
    ms: "ID",
    tr: "TR",
    he: "IL",
    tl: "PH",
    fil: "PH",
    zh: "CN",
  };

  if (language && langMap[language]) return langMap[language];
  return "US";
}
