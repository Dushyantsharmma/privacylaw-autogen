export type SupportedLanguage = "en" | "hi" | "de" | "fr";

const translations: Record<SupportedLanguage, Record<string, string>> = {
  en: {},
  hi: {
    Introduction: "परिचय",
    "Data Controller": "डेटा नियंत्रक",
    "Data We Collect": "हम जो डेटा एकत्र करते हैं",
    "Legal Basis for Processing": "प्रसंस्करण का कानूनी आधार",
    "How We Use Your Data": "हम आपके डेटा का उपयोग कैसे करते हैं",
    "Data Retention": "डेटा प्रतिधारण",
    "Your Rights": "आपके अधिकार",
    "International Data Transfers": "अंतर्राष्ट्रीय डेटा स्थानांतरण",
    Cookies: "कुकीज़",
    "Third-Party Services": "तृतीय-पक्ष सेवाएं",
    "Data Security": "डेटा सुरक्षा",
    "Contact Us": "हमसे संपर्क करें",
    "Privacy Policy": "गोपनीयता नीति",
    "Data Fiduciary": "डेटा न्यासी",
    "Personal Data Collected": "एकत्रित व्यक्तिगत डेटा",
    "Purpose of Processing": "प्रसंस्करण का उद्देश्य",
    Consent: "सहमति",
    "Rights of Data Principals": "डेटा प्रमुखों के अधिकार",
    "Cross-Border Data Transfers": "सीमा पार डेटा स्थानांतरण",
    "Children's Data": "बच्चों का डेटा",
    "Grievance Officer": "शिकायत अधिकारी",
  },
  de: {
    Introduction: "Einleitung",
    "Data Controller": "Verantwortlicher",
    "Data We Collect": "Daten, die wir erheben",
    "Legal Basis for Processing": "Rechtsgrundlage der Verarbeitung",
    "How We Use Your Data": "Wie wir Ihre Daten verwenden",
    "Data Retention": "Datenspeicherung",
    "Your Rights Under GDPR": "Ihre Rechte gemäß DSGVO",
    "International Data Transfers": "Internationale Datenübertragungen",
    Cookies: "Cookies",
    "Third-Party Services": "Drittanbieterdienste",
    "Data Security": "Datensicherheit",
    "Supervisory Authority": "Aufsichtsbehörde",
    "Contact Us": "Kontakt",
    "Privacy Policy": "Datenschutzerklärung",
  },
  fr: {
    Introduction: "Introduction",
    "Data Controller": "Responsable du traitement",
    "Data We Collect": "Données que nous collectons",
    "Legal Basis for Processing": "Base légale du traitement",
    "How We Use Your Data": "Comment nous utilisons vos données",
    "Data Retention": "Conservation des données",
    "Your Rights Under GDPR": "Vos droits en vertu du RGPD",
    "International Data Transfers": "Transferts internationaux de données",
    Cookies: "Cookies",
    "Third-Party Services": "Services tiers",
    "Data Security": "Sécurité des données",
    "Supervisory Authority": "Autorité de contrôle",
    "Contact Us": "Nous contacter",
    "Privacy Policy": "Politique de confidentialité",
  },
};

export function getTranslation(
  language: SupportedLanguage,
  key: string,
  fallback?: string,
): string {
  if (language === "en") return fallback || key;
  const dict = translations[language];
  return dict[key] || fallback || key;
}

export function translateSectionTitle(
  language: SupportedLanguage,
  title: string,
): string {
  if (language === "en") return title;
  // Extract number prefix and the rest
  const match = title.match(/^(\d+\.\s*)(.+)$/);
  if (match) {
    const prefix = match[1];
    const rest = match[2];
    const translated = getTranslation(language, rest);
    return `${prefix}${translated}`;
  }
  return getTranslation(language, title);
}

export const LANGUAGE_OPTIONS: {
  value: SupportedLanguage;
  label: string;
  nativeLabel: string;
}[] = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { value: "de", label: "German", nativeLabel: "Deutsch" },
  { value: "fr", label: "French", nativeLabel: "Français" },
];
