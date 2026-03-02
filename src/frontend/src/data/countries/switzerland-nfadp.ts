import type { CountryData } from "../../types/documentTypes";

export const switzerlandNfadpData: CountryData = {
  id: "switzerland-nfadp",
  name: "Switzerland",
  frameworkName:
    "Switzerland nFADP (new Federal Act on Data Protection, revDSG)",
  version: "1.0",
  lastReviewed: "2024-09-01",
  sections: [
    {
      id: "ch-intro",
      title: "1.0 Introduction — Switzerland nFADP Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Switzerland's new Federal Act on Data Protection (nFADP, revidiertes Datenschutzgesetz / revDSG), which entered into force on 1 September 2023, under the oversight of the Federal Data Protection and Information Commissioner (FDPIC). {{businessName}} is committed to protecting the personal data of Swiss residents in accordance with the nFADP.",
    },
    {
      id: "ch-controller",
      title: "2.0 Data Controller",
      content:
        "{{businessName}} is the Controller (Verantwortlicher) for the processing of personal data collected through {{websiteUrl}}. Contact: {{contactEmail}}.",
    },
    {
      id: "ch-principles",
      title: "3.0 Data Processing Principles",
      content:
        "Under Article 6 of the nFADP, personal data must be processed: lawfully; in good faith; proportionately; for purposes that are recognizable to the data subject; and accurately. Processing must also be secure and transparent.",
    },
    {
      id: "ch-legal-basis",
      title: "4.0 Legal Basis for Processing",
      content:
        "Under the nFADP, processing of personal data is lawful when: justified by a legitimate purpose; based on consent; required to perform a contract; or required by law. Sensitive personal data requires explicit consent or a specific legal justification.",
    },
    {
      id: "ch-collection",
      title: "5.0 Personal Data Collected",
      content:
        "We collect general personal data (name, contact details, account information, usage data) and, where applicable, sensitive personal data (health data, biometric data, ideological or religious views, criminal records). Sensitive data is only processed with explicit consent.",
    },
    {
      id: "ch-rights",
      title: "6.0 Rights of Data Subjects",
      content:
        "Under Articles 25–32 of the nFADP, you have the following rights:",
      subsections: [
        {
          id: "ch-rights-access",
          title: "6.1 Right of Access",
          content:
            "Request information on whether we process your personal data and receive a copy (Article 25).",
        },
        {
          id: "ch-rights-correct",
          title: "6.2 Right to Rectification",
          content:
            "Request correction of inaccurate personal data (Article 32).",
        },
        {
          id: "ch-rights-delete",
          title: "6.3 Right to Deletion",
          content:
            "Request deletion of personal data where processing is unlawful or no longer necessary (Article 32).",
        },
        {
          id: "ch-rights-restrict",
          title: "6.4 Right to Restrict Processing",
          content:
            "Request restriction of processing in certain circumstances.",
        },
        {
          id: "ch-rights-portability",
          title: "6.5 Right to Data Delivery",
          content:
            "Receive personal data in a common electronic format and transfer it to another controller (Article 28).",
        },
        {
          id: "ch-rights-object",
          title: "6.6 Right to Object to Automated Decision-Making",
          content:
            "Be informed of and object to significant decisions made solely by automated processing (Article 21).",
        },
        {
          id: "ch-rights-complaint",
          title: "6.7 Right to Complain",
          content: "Lodge a complaint with the FDPIC at www.edoeb.admin.ch.",
        },
      ],
    },
    {
      id: "ch-transfer",
      title: "7.0 Cross-Border Data Transfers",
      content:
        "Under Articles 16–17 of the nFADP, data may only be transferred to countries with adequate protection (as determined by the Federal Council) or with appropriate safeguards (standard contractual clauses, BCRs). The EU/EEA is recognized. All cross-border transfers are documented.",
    },
    {
      id: "ch-security",
      title: "8.0 Security and Breach Notification",
      content:
        "We implement appropriate technical and organizational security measures per Article 8 of the nFADP. Data breaches that could result in significant risk to data subjects must be reported to the FDPIC as quickly as possible. Affected individuals are notified if the breach poses high risk.",
    },
    {
      id: "ch-dpia",
      title: "9.0 Privacy Impact Assessment (PIA)",
      content:
        "Under Article 22 of the nFADP, a Privacy Impact Assessment is conducted for processing operations that pose a high risk to the personality or fundamental rights of data subjects. PIAs are reviewed and updated regularly.",
    },
    {
      id: "ch-retention",
      title: "10.0 Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Swiss law. Upon expiry, data is securely deleted or anonymized.",
    },
    {
      id: "ch-changes",
      title: "11.0 Changes to This Policy",
      content:
        "Updates to this Privacy Policy will be published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
