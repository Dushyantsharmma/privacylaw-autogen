import { useCallback, useState } from "react";
import {
  detectCountryFromLocale,
  getFrameworksForCountry,
} from "../lib/countryFrameworkMapping";
import type { DocumentInputs } from "../types/documentTypes";

const detectedCountry = detectCountryFromLocale();
const detectedFrameworks = getFrameworksForCountry(detectedCountry);

const DEFAULT_INPUTS: DocumentInputs = {
  country: detectedCountry,
  businessType: "",
  businessName: "",
  websiteUrl: "",
  contactEmail: "",
  dataRetention: "2 years",
  analyticsProvider: "",
  paymentProcessor: "",
  usesCookies: true,
  collectsChildrenData: false,
  transfersDataCrossBorder: false,
  selectedCountry: detectedCountry,
  selectedFrameworks: detectedFrameworks,
  outputLanguage: "en",
};

export function useDocumentInputs() {
  const [inputs, setInputs] = useState<DocumentInputs>(DEFAULT_INPUTS);

  const updateInputs = useCallback((updates: Partial<DocumentInputs>) => {
    setInputs((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetInputs = useCallback(() => {
    setInputs(DEFAULT_INPUTS);
  }, []);

  const validateInputs = useCallback((): string[] => {
    const missing: string[] = [];
    if (!inputs.businessName.trim()) missing.push("Business Name");
    if (!inputs.websiteUrl.trim()) missing.push("Website URL");
    if (!inputs.contactEmail.trim()) missing.push("Contact Email");
    if (!inputs.selectedCountry) missing.push("Country");
    if (!inputs.selectedFrameworks || inputs.selectedFrameworks.length === 0)
      missing.push("Compliance Framework");
    return missing;
  }, [inputs]);

  return { inputs, updateInputs, resetInputs, validateInputs };
}
