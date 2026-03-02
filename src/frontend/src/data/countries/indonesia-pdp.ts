import type { CountryData } from "../../types/documentTypes";

export const indonesiaPdpData: CountryData = {
  id: "indonesia-pdp",
  name: "Indonesia",
  frameworkName: "Indonesia Personal Data Protection Law (UU PDP 2022)",
  version: "1.0",
  lastReviewed: "2024-10-01",
  sections: [
    {
      id: "id-intro",
      title: "1.0 Introduction — Indonesia PDP Law Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Indonesia's Law Number 27 of 2022 on Personal Data Protection (Undang-Undang Pelindungan Data Pribadi / UU PDP), supervised by the Personal Data Protection Agency (Badan Pengawas Perlindungan Data Pribadi) under the Ministry of Communication and Information Technology (Kominfo). {{businessName}} ('Data Controller / Pengendali Data Pribadi') is committed to protecting the personal data of Indonesian data subjects.",
    },
    {
      id: "id-controller",
      title: "2.0 Data Controller Identity",
      content:
        "{{businessName}} acts as the Personal Data Controller (Pengendali Data Pribadi). Contact: {{contactEmail}} | {{websiteUrl}}. We have appointed a Personal Data Protection Officer (DPO) where required by the UU PDP.",
    },
    {
      id: "id-types",
      title: "3.0 Types of Personal Data Collected",
      content:
        "Under Article 4 of the UU PDP, personal data is categorized as general and specific personal data:",
      subsections: [
        {
          id: "id-general",
          title: "3.1 General Personal Data",
          content:
            "Full name, national identification number (NIK where applicable), email address, phone number, address, and service usage records.",
        },
        {
          id: "id-specific",
          title: "3.2 Specific Personal Data",
          content:
            "Health and medical data, biometric data, genetic data, criminal record data, child data, and financial data are processed only with explicit consent and with enhanced protective measures.",
        },
      ],
    },
    {
      id: "id-legal-basis",
      title: "4.0 Legal Basis for Processing",
      content:
        "Under Article 20 of the UU PDP, processing requires one of the following lawful bases: explicit consent; contract performance; legal obligation; protection of vital interests; public interest; or legitimate interests. For specific personal data, explicit consent is always required.",
    },
    {
      id: "id-rights",
      title: "5.0 Rights of Personal Data Subjects",
      content: "Under Chapter VI of the UU PDP, you have the following rights:",
      subsections: [
        {
          id: "id-rights-info",
          title: "5.1 Right to Information",
          content:
            "Right to receive clear information about the identity of the controller, purpose of processing, and how your data is used.",
        },
        {
          id: "id-rights-access",
          title: "5.2 Right of Access",
          content: "Request access to personal data held about you.",
        },
        {
          id: "id-rights-correct",
          title: "5.3 Right to Correct",
          content:
            "Request correction of inaccurate or incomplete personal data.",
        },
        {
          id: "id-rights-end",
          title: "5.4 Right to End Processing and Delete",
          content:
            "Request cessation of processing and deletion of personal data.",
        },
        {
          id: "id-rights-withdraw",
          title: "5.5 Right to Withdraw Consent",
          content:
            "Withdraw previously given consent at any time without affecting the lawfulness of prior processing.",
        },
        {
          id: "id-rights-object",
          title: "5.6 Right to Object",
          content:
            "Object to automated processing decisions that produce legal effects.",
        },
        {
          id: "id-rights-delay",
          title: "5.7 Right to Delay or Limit",
          content:
            "Request a delay or limitation on processing in certain circumstances.",
        },
        {
          id: "id-rights-complaint",
          title: "5.8 Right to Complain",
          content:
            "Lodge a complaint with the Personal Data Protection Agency (Kominfo) at pdp.kominfo.go.id.",
        },
      ],
    },
    {
      id: "id-transfer",
      title: "6.0 Cross-Border Data Transfer",
      content:
        "Cross-border data transfer requires compliance with Indonesia's transfer provisions under Article 56 of the UU PDP. Data may only be transferred to countries with equivalent or higher protection levels, or with contractual safeguards approved by the Personal Data Protection Agency. All cross-border transfers are recorded.",
    },
    {
      id: "id-security",
      title: "7.0 Data Security and Breach Notification",
      content:
        "We implement technical and organizational security measures per Article 35 of the UU PDP. In the event of a personal data breach, we will notify the Personal Data Protection Agency and affected data subjects within 14 days of discovery.",
    },
    {
      id: "id-retention",
      title: "8.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Indonesian law. Data is securely deleted or anonymized upon expiry of the retention period.",
    },
    {
      id: "id-children",
      title: "9.0 Children's Personal Data",
      content:
        "Processing of personal data belonging to children under 18 years of age requires consent from the child's parent or guardian. We implement additional safeguards for children's data.",
    },
    {
      id: "id-changes",
      title: "10.0 Policy Changes",
      content:
        "Updates to this Privacy Policy will be published at {{websiteUrl}} with a revised effective date. Last updated: {{currentDate}}.",
    },
  ],
};
