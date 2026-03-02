import type { CountryData } from "../../types/documentTypes";

export const argentinaPdpData: CountryData = {
  id: "argentina-pdp",
  name: "Argentina",
  frameworkName: "Argentina Personal Data Protection Law 25.326 (PDPL)",
  version: "1.0",
  lastReviewed: "2024-01-01",
  sections: [
    {
      id: "arg-intro",
      title: "1.0 Introduction — Argentina PDPL Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Argentina's Personal Data Protection Law No. 25.326 (Ley de Protección de Datos Personales) and its regulatory decree (Decree 1558/2001), supervised by the Agencia de Acceso a la Información Pública (AAIP). {{businessName}} ('Data Owner') is committed to protecting the personal data of Argentine users in accordance with Law 25.326.",
    },
    {
      id: "arg-controller",
      title: "2.0 Database Holder",
      content:
        "{{businessName}} is the Holder (titular) of the personal data database registered with the AAIP. Contact: {{contactEmail}} | {{websiteUrl}}. We maintain a registered database record with the AAIP as required by Article 21 of Law 25.326.",
    },
    {
      id: "arg-collection",
      title: "3.0 Personal Data Collected",
      content:
        "We collect personal data including identification information, contact details, service usage data, and transaction records. Sensitive data (datos sensibles) — including health, racial origin, political opinions, religious beliefs, sexual orientation — is only processed with explicit consent and afforded heightened protection under Article 7 of Law 25.326.",
    },
    {
      id: "arg-purpose",
      title: "4.0 Purpose of Processing",
      content:
        "Personal data is collected for specific, explicit, and legitimate purposes including service provision, account management, legal compliance, and improvement of services. Data will not be used for purposes incompatible with those for which it was collected.",
    },
    {
      id: "arg-rights",
      title: "5.0 Rights of Data Subjects (Habeas Data)",
      content:
        "Under Articles 13–19 of Law 25.326, you have the following rights regarding your personal data:",
      subsections: [
        {
          id: "arg-rights-access",
          title: "5.1 Right of Access",
          content:
            "Free access to your personal data every six months, or sooner if legitimate interest is established (Article 14).",
        },
        {
          id: "arg-rights-rectify",
          title: "5.2 Right of Rectification, Update, and Correction",
          content:
            "Request correction of inaccurate or incomplete data within 5 business days of notification (Article 16).",
        },
        {
          id: "arg-rights-delete",
          title: "5.3 Right of Suppression",
          content:
            "Request deletion of data where collection violates this law, within 5 business days of notification (Article 16).",
        },
        {
          id: "arg-rights-block",
          title: "5.4 Right of Confidentiality (Blocking)",
          content:
            "Request blocking of data under investigation or in legal proceedings.",
        },
        {
          id: "arg-habeas-data",
          title: "5.5 Habeas Data Action",
          content:
            "You may file a Habeas Data action before the courts to protect your personal data rights. You may also complain to the AAIP at www.argentina.gob.ar/aaip.",
        },
      ],
    },
    {
      id: "arg-consent",
      title: "6.0 Consent",
      content:
        "Processing of personal data requires prior, express, and informed consent of the data subject (Article 5). Consent may be withdrawn at any time. Processing without consent is only permissible in the cases expressly permitted by Law 25.326.",
    },
    {
      id: "arg-transfer",
      title: "7.0 International Data Transfer",
      content:
        "Transfer of personal data to countries that do not provide adequate protection is prohibited, unless the AAIP authorizes the transfer or one of the exceptions under Article 12 applies. Argentina is recognized as providing adequate protection by the EU under GDPR Article 45.",
    },
    {
      id: "arg-security",
      title: "8.0 Security Measures",
      content:
        "We implement technical and organizational security measures appropriate to the risks, including encryption, access controls, and staff training. Data breaches are reported to the AAIP and affected individuals as required.",
    },
    {
      id: "arg-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Argentine law. Upon expiry of the retention period, data is securely deleted or anonymized.",
    },
    {
      id: "arg-changes",
      title: "10.0 Changes to This Policy",
      content:
        "Changes to this Privacy Policy will be published at {{websiteUrl}}. Continued use of services after publication constitutes acceptance. This policy is effective from {{currentDate}}.",
    },
  ],
};
