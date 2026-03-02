export interface DocumentInputs {
  country: string;
  businessType: string;
  businessName: string;
  websiteUrl: string;
  contactEmail: string;
  dataRetention: string;
  analyticsProvider: string;
  paymentProcessor: string;
  usesCookies: boolean;
  collectsChildrenData: boolean;
  transfersDataCrossBorder: boolean;
  selectedCountry: string;
  selectedFrameworks: string[];
  outputLanguage: "en" | "hi" | "de" | "fr";
}

export interface ClauseSection {
  id: string;
  title: string;
  content: string;
  subsections?: ClauseSection[];
  isEdited?: boolean;
  editedContent?: string;
}

export interface MergedDocument {
  title: string;
  effectiveDate: string;
  sections: ClauseSection[];
  frameworkName: string;
  frameworkVersion?: string;
  lastReviewed?: string;
}

export interface CountryData {
  id: string;
  name: string;
  frameworkName: string;
  version: string;
  lastReviewed: string;
  sections: ClauseSection[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  frameworks: string[];
  primaryFramework: string;
  optionalFrameworks?: string[];
}

export type DocumentType =
  | "privacy-policy"
  | "terms-of-service"
  | "cookie-policy"
  | "data-breach";

export interface SavedDraft {
  id: string;
  name: string;
  timestamp: number;
  inputs: DocumentInputs;
  documentType: DocumentType;
  draftVersion: Record<string, string>;
}

export type TranslationMap = Record<string, Record<string, string>>;

// Legacy types kept for backward compatibility with existing hooks/components
export interface ComplianceItem {
  id: string;
  label: string;
  description: string;
  status: "pass" | "warning" | "fail";
  visible: boolean;
}

export type RiskLevel = "Low" | "Medium" | "High";

export interface RiskScore {
  score: number;
  level: RiskLevel;
  factors: string[];
}

export interface BusinessTypeData {
  id: string;
  name: string;
  icon: string;
  description: string;
  additionalSections: ClauseSection[];
  childrenDataClause?: ClauseSection;
}
