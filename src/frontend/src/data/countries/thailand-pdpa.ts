import type { CountryData } from "../../types/documentTypes";

export const thailandPdpaData: CountryData = {
  id: "thailand-pdpa",
  name: "Thailand",
  frameworkName:
    "Thailand PDPA (Personal Data Protection Act B.E. 2562 / 2019)",
  version: "1.0",
  lastReviewed: "2024-06-01",
  sections: [
    {
      id: "th-intro",
      title: "1.0 Introduction — Thailand PDPA Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Thailand's Personal Data Protection Act B.E. 2562 (2019) (PDPA), supervised by the Personal Data Protection Committee (PDPC). {{businessName}} ('Data Controller') is committed to protecting the personal data of Thai data subjects in accordance with the PDPA and its subordinate regulations.",
    },
    {
      id: "th-controller",
      title: "2.0 Data Controller",
      content:
        "{{businessName}} is the Data Controller responsible for personal data collected through {{websiteUrl}}. Contact: {{contactEmail}}. Where required, we have appointed a Data Protection Officer (DPO) contactable at {{contactEmail}}.",
    },
    {
      id: "th-legal-basis",
      title: "3.0 Legal Basis for Collection and Processing",
      content:
        "Under Section 24 of the Thai PDPA, personal data may be collected, used, or disclosed based on: consent; contract performance; vital interests; public tasks; legitimate interests; or legal obligations. For sensitive personal data under Section 26, explicit consent is required.",
    },
    {
      id: "th-collection",
      title: "4.0 Personal Data Collected",
      content:
        "We collect personal data including: identification data (name, national ID where applicable), contact data (email, phone, address), service usage and behavioral data, and payment information. Sensitive personal data (health, racial origin, religious belief, criminal records, biometric data) is collected only with explicit consent.",
    },
    {
      id: "th-purpose",
      title: "5.0 Purposes of Processing",
      content:
        "Personal data is collected and processed for: service delivery and account management; improvement of our products and services; legal compliance and regulatory reporting; marketing and communications (with consent); and fraud prevention and security.",
    },
    {
      id: "th-rights",
      title: "6.0 Rights of Data Subjects",
      content:
        "Under Part 3 of the Thailand PDPA, you have the following rights:",
      subsections: [
        {
          id: "th-rights-informed",
          title: "6.1 Right to be Informed",
          content:
            "Right to be informed of the purposes and details of data processing before or at the time of collection (Section 23).",
        },
        {
          id: "th-rights-access",
          title: "6.2 Right of Access",
          content:
            "Request access to and a copy of your personal data (Section 30).",
        },
        {
          id: "th-rights-portability",
          title: "6.3 Right to Data Portability",
          content:
            "Receive your personal data in a machine-readable format and transfer it to another controller (Section 31).",
        },
        {
          id: "th-rights-object",
          title: "6.4 Right to Object",
          content:
            "Object to collection, use, or disclosure of personal data (Section 32).",
        },
        {
          id: "th-rights-erase",
          title: "6.5 Right to Erasure",
          content:
            "Request deletion or anonymization of personal data where processing is no longer necessary (Section 33).",
        },
        {
          id: "th-rights-restrict",
          title: "6.6 Right to Restrict Processing",
          content:
            "Request restriction of processing in certain circumstances (Section 34).",
        },
        {
          id: "th-rights-correct",
          title: "6.7 Right to Rectification",
          content:
            "Request correction of inaccurate personal data (Section 35).",
        },
        {
          id: "th-rights-complaint",
          title: "6.8 Right to Lodge Complaint",
          content: "Lodge a complaint with the PDPC at www.pdpc.go.th.",
        },
      ],
    },
    {
      id: "th-transfer",
      title: "7.0 International Data Transfers",
      content:
        "Under Section 28 of the Thai PDPA, personal data may only be transferred overseas if the destination country has adequate data protection standards, or with appropriate safeguards approved by the PDPC. Cross-border transfers are disclosed and recorded. You may request details of current transfer recipients at {{contactEmail}}.",
    },
    {
      id: "th-security",
      title: "8.0 Security and Breach Notification",
      content:
        "We implement appropriate technical and organizational security measures. In the event of a personal data breach under Section 37, we will notify the PDPC within 72 hours and affected data subjects without undue delay where a high risk to rights and freedoms exists.",
    },
    {
      id: "th-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Thai law. Upon expiry, data is securely deleted or anonymized.",
    },
    {
      id: "th-consent",
      title: "10.0 Consent and Withdrawal",
      content:
        "Where processing is based on consent, consent is obtained in a clear and explicit manner before collection. You may withdraw consent at any time by contacting {{contactEmail}}. Withdrawal does not affect processing that occurred before withdrawal.",
    },
    {
      id: "th-dpo",
      title: "11.0 Data Protection Officer",
      content:
        "Our Data Protection Officer is contactable at {{contactEmail}} for all personal data matters. Complaints may be escalated to the Personal Data Protection Committee (PDPC) at www.pdpc.go.th.",
    },
    {
      id: "th-changes",
      title: "12.0 Policy Updates",
      content:
        "This Privacy Policy will be updated to reflect changes in Thai law or our practices. Updates will be published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
