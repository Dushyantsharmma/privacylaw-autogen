import type { CountryData } from "../../types/documentTypes";

export const nigeriaNdprData: CountryData = {
  id: "nigeria-ndpr",
  name: "Nigeria",
  frameworkName: "NDPR (Nigeria Data Protection Regulation 2019)",
  version: "1.1",
  lastReviewed: "2024-03-01",
  sections: [
    {
      id: "ndpr-intro",
      title: "1.0 Introduction — NDPR Compliance",
      content:
        "This Privacy Policy is issued pursuant to the Nigeria Data Protection Regulation 2019 (NDPR) and the Nigeria Data Protection Act 2023 (NDPA), issued by the National Information Technology Development Agency (NITDA) and enforced by the Nigeria Data Protection Commission (NDPC). {{businessName}} is committed to the lawful, fair, and transparent processing of personal data in compliance with Nigerian data protection law.",
    },
    {
      id: "ndpr-controller",
      title: "2.0 Data Controller Identity",
      content:
        "{{businessName}} is the Data Controller responsible for the personal data of Nigerian users processed through {{websiteUrl}}. Our designated Data Protection Compliance Organisation (DPCO) contact is available at {{contactEmail}}. We are registered with the Nigeria Data Protection Commission as required by the NDPA.",
    },
    {
      id: "ndpr-principles",
      title: "3.0 Lawful Basis and Data Processing Principles",
      content:
        "Under Article 2.2 of the NDPR and Section 24 of the NDPA, personal data must be processed in accordance with these principles:",
      subsections: [
        {
          id: "ndpr-principles-list",
          title: "3.1 Core Principles",
          content:
            "Personal data must be: (a) collected for specified, explicit, and legitimate purposes; (b) adequate, relevant, and limited to what is necessary; (c) accurate and kept up to date; (d) retained no longer than necessary; (e) processed securely with appropriate technical measures; (f) processed transparently with notice to data subjects.",
        },
        {
          id: "ndpr-lawful-basis",
          title: "3.2 Lawful Processing Grounds",
          content:
            "We process personal data under one or more of the following grounds: consent of the data subject; performance of a contract; compliance with a legal obligation; protection of vital interests; performance of a public task; or legitimate interests pursued by the controller.",
        },
      ],
    },
    {
      id: "ndpr-collection",
      title: "4.0 Personal Data Collected",
      content:
        "We collect personal data including name, contact details, email address, service usage information, device and technical data, and any other information you provide to us. Sensitive personal data (including health, financial, and biometric data) is collected only with explicit consent and additional protective measures.",
    },
    {
      id: "ndpr-rights",
      title: "5.0 Rights of Data Subjects",
      content:
        "Under Article 3.1 of the NDPR and Part IV of the NDPA, you have the following rights:",
      subsections: [
        {
          id: "ndpr-rights-access",
          title: "5.1 Right to Access",
          content:
            "You may request a copy of your personal data held by us. Requests will be responded to within 30 days.",
        },
        {
          id: "ndpr-rights-rectification",
          title: "5.2 Right to Rectification",
          content:
            "You may request correction of inaccurate personal data. We will process correction requests promptly.",
        },
        {
          id: "ndpr-rights-delete",
          title: "5.3 Right to Erasure",
          content:
            "You may request deletion of your personal data where the processing purpose has been achieved or where you withdraw consent.",
        },
        {
          id: "ndpr-rights-portability",
          title: "5.4 Right to Data Portability",
          content:
            "You have the right to receive your personal data in a commonly used, machine-readable format.",
        },
        {
          id: "ndpr-rights-object",
          title: "5.5 Right to Object",
          content:
            "You may object to processing of your personal data, particularly for direct marketing purposes.",
        },
        {
          id: "ndpr-rights-complaint",
          title: "5.6 Right to Lodge Complaint",
          content:
            "You may lodge a complaint with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng if you believe your rights have been violated.",
        },
      ],
    },
    {
      id: "ndpr-consent",
      title: "6.0 Consent Management",
      content:
        "Where processing is based on consent, consent is obtained in plain language before data collection. You may withdraw consent at any time by contacting {{contactEmail}}. We maintain records of consent as required by the NDPR. Marketing communications require active opt-in consent and each communication contains an unsubscribe mechanism.",
    },
    {
      id: "ndpr-transfer",
      title: "7.0 Cross-Border Data Transfers",
      content:
        "Under Article 2.11 of the NDPR, personal data may only be transferred to countries providing an adequate level of data protection, or with appropriate safeguards (contractual clauses, binding rules). Transfer to countries without adequate protection requires explicit consent. We maintain records of all cross-border transfers.",
    },
    {
      id: "ndpr-security",
      title: "8.0 Data Security",
      content:
        "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, accidental loss, destruction, or damage. In the event of a data breach affecting Nigerian data subjects, we will notify the NDPC within 72 hours of becoming aware, and notify affected data subjects within 7 days where the breach poses a high risk to their rights and freedoms.",
    },
    {
      id: "ndpr-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by applicable Nigerian law. Data retained for employment records, financial records, or regulatory compliance may be retained for longer periods as mandated by law. Upon expiry of the retention period, data is securely deleted or anonymized.",
    },
    {
      id: "ndpr-audit",
      title: "10.0 Data Audit and DPCO",
      content:
        "In compliance with the NDPR, {{businessName}} conducts an annual data audit and submits a Data Protection Audit report to the NITDA/NDPC. We have engaged a licensed Data Protection Compliance Organisation (DPCO) to support our compliance activities. Our DPCO contact is available at {{contactEmail}}.",
    },
    {
      id: "ndpr-changes",
      title: "11.0 Changes to This Policy",
      content:
        "This Privacy Policy will be reviewed at least annually and updated to reflect changes in law or our practices. Significant updates will be communicated to users via {{websiteUrl}} and/or email. This policy was last updated on {{currentDate}}.",
    },
  ],
};
