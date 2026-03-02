import type { CountryData } from "../../types/documentTypes";

export const israelPplData: CountryData = {
  id: "israel-ppl",
  name: "Israel",
  frameworkName: "Israel Protection of Privacy Law 5741-1981 (PPL)",
  version: "1.0",
  lastReviewed: "2024-01-01",
  sections: [
    {
      id: "il-intro",
      title: "1.0 Introduction — Israel PPL Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Israel's Protection of Privacy Law 5741-1981 (PPL), its Regulations, and the Privacy Protection Regulations (Data Security) 5777-2017, overseen by the Privacy Protection Authority (PPA, formerly ILITA). {{businessName}} is committed to protecting the personal information of Israeli data subjects.",
    },
    {
      id: "il-database",
      title: "2.0 Database Registration",
      content:
        "Where required by the PPL, {{businessName}}'s database is registered with the Privacy Protection Authority. Contact our privacy officer at {{contactEmail}}.",
    },
    {
      id: "il-collection",
      title: "3.0 Personal Information Collected",
      content:
        "We collect personal information including name, contact details, account credentials, service usage data, and any other information you voluntarily provide. Sensitive information (medical, financial, biometric) is collected only with explicit consent.",
    },
    {
      id: "il-purpose",
      title: "4.0 Purpose of Collection",
      content:
        "Personal information is collected for: providing and improving our services; account management; compliance with Israeli law; communications and customer support; and marketing (with consent). Information is not used beyond the stated purposes.",
    },
    {
      id: "il-rights",
      title: "5.0 Rights of Data Subjects",
      content:
        "Under Section 13 of the PPL, you have the right to review personal information held about you. Under Section 14, you may request correction of inaccurate information. Requests may be submitted at {{contactEmail}}. Complaints may be lodged with the Privacy Protection Authority at www.gov.il/en/departments/the_privacy_protection_authority.",
    },
    {
      id: "il-transfer",
      title: "6.0 Transfer Abroad",
      content:
        "Under Section 23B of the PPL, personal information may be transferred abroad only to countries with adequate protection (EU, EEA, and others determined by the PPA), or with consent, or where one of the statutory exceptions applies.",
    },
    {
      id: "il-security",
      title: "7.0 Data Security",
      content:
        "We comply with the Privacy Protection Regulations (Data Security) 5777-2017, implementing security measures appropriate to the level of sensitivity of the information. Security incidents are reported to the PPA as required.",
    },
    {
      id: "il-retention",
      title: "8.0 Retention",
      content:
        "Personal information is retained for {{dataRetention}} or as required by Israeli law.",
    },
    {
      id: "il-changes",
      title: "9.0 Changes",
      content:
        "Updates published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
