import type { CountryData } from "../../types/documentTypes";

export const kenyaDpaData: CountryData = {
  id: "kenya-dpa",
  name: "Kenya",
  frameworkName: "Kenya Data Protection Act 2019 (DPA)",
  version: "1.0",
  lastReviewed: "2024-01-15",
  sections: [
    {
      id: "kenya-intro",
      title: "1.0 Introduction — Kenya DPA Compliance",
      content:
        "This Privacy Policy is prepared in compliance with the Kenya Data Protection Act 2019 (DPA) and the Data Protection (General) Regulations 2021, overseen by the Office of the Data Protection Commissioner (ODPC). {{businessName}} is committed to the lawful, fair, and transparent processing of personal data of Kenyan residents.",
    },
    {
      id: "kenya-controller",
      title: "2.0 Data Controller Registration",
      content:
        "{{businessName}} is registered as a Data Controller with the Office of the Data Protection Commissioner (ODPC) as required by Section 19 of the Kenya DPA. Our registration number and contact details are available at {{contactEmail}}.",
    },
    {
      id: "kenya-principles",
      title: "3.0 Data Protection Principles",
      content:
        "Under Section 25 of the Kenya DPA, personal data must be: (a) collected for specific, explicit, and legitimate purposes; (b) processed lawfully, fairly, and in a transparent manner; (c) limited to what is necessary for the purpose; (d) accurate and kept up to date; (e) retained for no longer than necessary; (f) processed with appropriate security measures; and (g) processed with accountability and documentation.",
    },
    {
      id: "kenya-lawful-basis",
      title: "4.0 Lawful Basis for Processing",
      content:
        "Under Section 30 of the Kenya DPA, we process personal data on the following lawful bases: consent; contract performance; compliance with legal obligation; protection of vital interests; public interest; or legitimate interests. Where consent is the basis, you may withdraw consent at any time by contacting {{contactEmail}}.",
    },
    {
      id: "kenya-collection",
      title: "5.0 Personal Data Collected",
      content:
        "We collect personal data including: identification information (name, national ID where applicable), contact details (email, phone), service usage data, transaction records, and technical data. Sensitive data (health, biometric, financial information) is processed only with explicit consent and heightened security.",
    },
    {
      id: "kenya-rights",
      title: "6.0 Rights of Data Subjects",
      content: "Under Part IV of the Kenya DPA, you have the following rights:",
      subsections: [
        {
          id: "kenya-rights-access",
          title: "6.1 Right to Access",
          content:
            "Request confirmation of and access to your personal data (Section 26).",
        },
        {
          id: "kenya-rights-correct",
          title: "6.2 Right to Rectification",
          content:
            "Request correction of inaccurate or incomplete personal data (Section 27).",
        },
        {
          id: "kenya-rights-delete",
          title: "6.3 Right to Erasure",
          content:
            "Request deletion of personal data where it is no longer necessary (Section 27).",
        },
        {
          id: "kenya-rights-portability",
          title: "6.4 Right to Data Portability",
          content:
            "Receive personal data in a structured, machine-readable format (Section 28).",
        },
        {
          id: "kenya-rights-object",
          title: "6.5 Right to Object",
          content:
            "Object to processing based on legitimate interests or for direct marketing (Section 29).",
        },
        {
          id: "kenya-rights-automated",
          title: "6.6 Right Against Automated Processing",
          content:
            "Not be subject to decisions based solely on automated processing that produce legal effects (Section 30).",
        },
      ],
    },
    {
      id: "kenya-transfer",
      title: "7.0 Cross-Border Data Transfers",
      content:
        "Under Section 49 of the Kenya DPA, personal data may only be transferred to countries with adequate protection, or with appropriate safeguards such as binding contractual clauses. Transfer requires approval from the ODPC where adequate protection is not confirmed. We disclose all cross-border transfer recipients upon request.",
    },
    {
      id: "kenya-security",
      title: "8.0 Data Security and Breach Notification",
      content:
        "We maintain appropriate technical and organizational security measures. In the event of a personal data breach, we will notify the ODPC within 72 hours and affected data subjects without undue delay where the breach is likely to result in a high risk to their rights and freedoms.",
    },
    {
      id: "kenya-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Kenyan law. Retention periods are reviewed annually. Upon expiry, personal data is securely deleted or anonymized.",
    },
    {
      id: "kenya-dpo",
      title: "10.0 Data Protection Officer",
      content:
        "{{businessName}} has designated a Data Protection Officer (DPO) as required by the DPA. The DPO may be contacted at {{contactEmail}} for all privacy-related matters. Complaints may be lodged with the ODPC at www.odpc.go.ke.",
    },
    {
      id: "kenya-changes",
      title: "11.0 Policy Changes",
      content:
        "This policy will be updated to reflect changes in Kenyan law or our practices. Updates will be published at {{websiteUrl}} with a revised effective date. Last updated: {{currentDate}}.",
    },
  ],
};
