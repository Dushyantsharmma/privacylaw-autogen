import type { CountryData } from "../../types/documentTypes";

export const uaePdplData: CountryData = {
  id: "uae-pdpl",
  name: "United Arab Emirates",
  frameworkName: "UAE Federal Decree-Law No. 45 of 2021 (PDPL)",
  version: "1.0",
  lastReviewed: "2024-06-01",
  sections: [
    {
      id: "uae-intro",
      title: "1.0 Introduction — UAE PDPL Compliance",
      content:
        "This Privacy Policy is prepared in compliance with the United Arab Emirates Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and its Executive Regulations. {{businessName}} ('Data Controller') is committed to protecting the privacy and personal data of all users in the UAE in accordance with the PDPL and the oversight of the UAE Data Office (formerly the Telecommunications and Digital Government Regulatory Authority — TDRA).",
    },
    {
      id: "uae-controller",
      title: "2.0 Data Controller",
      content:
        "{{businessName}} is the Data Controller responsible for processing your personal data. For privacy-related enquiries, please contact our Data Protection Officer at {{contactEmail}} or visit our website at {{websiteUrl}}.",
    },
    {
      id: "uae-collection",
      title: "3.0 Personal Data We Collect",
      content:
        "Under Article 6 of the UAE PDPL, personal data is collected only for specified, explicit, and legitimate purposes. We collect the following categories of personal data:",
      subsections: [
        {
          id: "uae-collection-basic",
          title: "3.1 Identity and Contact Data",
          content:
            "Full name, Emirates ID number (where required by law), email address, phone number, and mailing address.",
        },
        {
          id: "uae-collection-service",
          title: "3.2 Service and Transaction Data",
          content:
            "Account credentials, service usage history, transaction records, payment information, and correspondence.",
        },
        {
          id: "uae-collection-technical",
          title: "3.3 Technical and Usage Data",
          content:
            "IP addresses, device identifiers, browser information, cookies, and service interaction logs.",
        },
        {
          id: "uae-collection-sensitive",
          title: "3.4 Sensitive Personal Data",
          content:
            "We process sensitive personal data (including health data, biometric data, or financial data) only with your explicit consent and with enhanced security measures, as required under Article 9 of the PDPL.",
        },
      ],
    },
    {
      id: "uae-legal-basis",
      title: "4.0 Legal Basis for Processing",
      content:
        "Under Article 7 of the UAE PDPL, processing of personal data must be based on one of the following lawful grounds:",
      subsections: [
        {
          id: "uae-consent",
          title: "4.1 Consent",
          content:
            "Where consent is obtained, it must be explicit, informed, and freely given. You may withdraw consent at any time by contacting us at {{contactEmail}}. Withdrawal does not affect the lawfulness of processing prior to withdrawal.",
        },
        {
          id: "uae-contract",
          title: "4.2 Contractual Necessity",
          content:
            "Processing necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering a contract.",
        },
        {
          id: "uae-legal",
          title: "4.3 Legal Obligation",
          content:
            "Processing required to comply with applicable UAE laws, regulatory requirements, and court orders.",
        },
        {
          id: "uae-vital",
          title: "4.4 Vital Interests",
          content:
            "Processing necessary to protect the vital interests of the data subject or another person.",
        },
      ],
    },
    {
      id: "uae-rights",
      title: "5.0 Your Rights Under UAE PDPL",
      content:
        "Under Articles 14–19 of the UAE PDPL, you have the following rights regarding your personal data:",
      subsections: [
        {
          id: "uae-rights-access",
          title: "5.1 Right to Access",
          content:
            "You have the right to request a copy of your personal data and information about how it is processed.",
        },
        {
          id: "uae-rights-correct",
          title: "5.2 Right to Correction",
          content:
            "You may request correction of inaccurate or incomplete personal data.",
        },
        {
          id: "uae-rights-delete",
          title: "5.3 Right to Erasure",
          content:
            "You may request deletion of your personal data where it is no longer necessary for the original purpose, subject to legal retention requirements.",
        },
        {
          id: "uae-rights-restrict",
          title: "5.4 Right to Restrict Processing",
          content:
            "You may request restriction of processing in certain circumstances, such as while accuracy is contested.",
        },
        {
          id: "uae-rights-portability",
          title: "5.5 Right to Data Portability",
          content:
            "You have the right to receive your personal data in a structured, machine-readable format and to transfer it to another controller.",
        },
        {
          id: "uae-rights-object",
          title: "5.6 Right to Object",
          content:
            "You may object to processing of your personal data for direct marketing or where processing is based on legitimate interests.",
        },
      ],
    },
    {
      id: "uae-transfer",
      title: "6.0 Cross-Border Data Transfers",
      content:
        "Under Article 22 of the UAE PDPL, personal data may only be transferred outside the UAE to countries that provide adequate protection, or with appropriate safeguards such as binding corporate rules or standard contractual clauses approved by the UAE Data Office. Any cross-border transfer is disclosed in this policy. For details of current transfer recipients, contact {{contactEmail}}.",
    },
    {
      id: "uae-retention",
      title: "7.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or for the period required to fulfil the collection purpose. After the retention period, data is securely deleted or anonymized in compliance with UAE PDPL requirements. Retention schedules are reviewed annually by our Data Protection Officer.",
    },
    {
      id: "uae-security",
      title: "8.0 Security Measures",
      content:
        "We implement technical and organizational security measures in accordance with Article 20 of the UAE PDPL, including encryption, access controls, regular security assessments, and employee training. In the event of a personal data breach that poses a risk to data subjects, we will notify the UAE Data Office within 72 hours and affected individuals without undue delay.",
    },
    {
      id: "uae-dpo",
      title: "9.0 Data Protection Officer",
      content:
        "In accordance with UAE PDPL requirements, {{businessName}} has appointed a Data Protection Officer (DPO) accessible at {{contactEmail}}. Complaints or requests relating to personal data processing may be directed to the DPO. Unresolved complaints may be submitted to the UAE Data Office.",
    },
    {
      id: "uae-cookies",
      title: "10.0 Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies in accordance with applicable UAE regulations. Consent is obtained for non-essential cookies. You may manage cookie preferences via our cookie consent manager or through your browser settings.",
    },
    {
      id: "uae-changes",
      title: "11.0 Policy Updates",
      content:
        "This Privacy Policy may be updated to reflect changes in law or our practices. Material changes will be communicated via {{websiteUrl}} or email notification. Continued use of our services after changes constitutes acceptance of the updated policy. Last updated: {{currentDate}}.",
    },
  ],
};
