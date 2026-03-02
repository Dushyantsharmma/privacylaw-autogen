import type { CountryData } from "../../types/documentTypes";

export const gdprData: CountryData = {
  id: "gdpr",
  name: "EU/EEA",
  frameworkName: "GDPR",
  version: "2.1.0",
  lastReviewed: "2025-01-15",
  sections: [
    {
      id: "gdpr-1",
      title: "1. Introduction",
      content:
        'This Privacy Policy describes how {{businessName}} ("we", "us", or "our") collects, uses, and shares information about you when you use our services at {{websiteUrl}}. We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679.',
    },
    {
      id: "gdpr-2",
      title: "2. Data Controller",
      content:
        "{{businessName}} is the data controller responsible for your personal data. You can contact us at {{contactEmail}} for any data protection queries.",
    },
    {
      id: "gdpr-3",
      title: "3. Data We Collect",
      content:
        "We collect the following categories of personal data:\n\n• Identity Data: name, username, or similar identifier\n• Contact Data: email address, telephone numbers\n• Technical Data: IP address, browser type, time zone, operating system\n• Usage Data: information about how you use our website and services\n• Marketing Data: your preferences in receiving marketing from us",
    },
    {
      id: "gdpr-4",
      title: "4. Legal Basis for Processing",
      content:
        "We process your personal data under the following legal bases:\n\n• Consent (Article 6(1)(a)): Where you have given clear consent\n• Contract (Article 6(1)(b)): Where processing is necessary for a contract with you\n• Legal Obligation (Article 6(1)(c)): Where we must comply with a legal obligation\n• Legitimate Interests (Article 6(1)(f)): Where it is necessary for our legitimate interests",
    },
    {
      id: "gdpr-5",
      title: "5. How We Use Your Data",
      content:
        "We use your personal data to:\n\n• Provide and improve our services\n• Process transactions and send related information\n• Send promotional communications (with your consent)\n• Comply with legal obligations\n• Protect against fraudulent or illegal activity",
    },
    {
      id: "gdpr-6",
      title: "6. Data Retention",
      content:
        "We retain your personal data for {{dataRetention}} or as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.",
    },
    {
      id: "gdpr-7",
      title: "7. Your Rights Under GDPR",
      content:
        "Under the GDPR, you have the following rights:\n\n• Right of Access (Article 15): Request a copy of your personal data\n• Right to Rectification (Article 16): Request correction of inaccurate data\n• Right to Erasure (Article 17): Request deletion of your personal data\n• Right to Restrict Processing (Article 18): Request restriction of processing\n• Right to Data Portability (Article 20): Receive your data in a structured format\n• Right to Object (Article 21): Object to processing based on legitimate interests\n• Rights related to automated decision-making (Article 22)\n\nTo exercise these rights, contact us at {{contactEmail}}.",
    },
    {
      id: "gdpr-8",
      title: "8. International Data Transfers",
      content:
        "Where we transfer your personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.",
    },
    {
      id: "gdpr-9",
      title: "9. Cookies",
      content:
        "We use cookies and similar tracking technologies to track activity on our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our Cookie Policy.",
    },
    {
      id: "gdpr-10",
      title: "10. Third-Party Services",
      content:
        "We may use third-party services including {{analyticsProvider}} for analytics and {{paymentProcessor}} for payment processing. These third parties have their own privacy policies governing the use of your information.",
    },
    {
      id: "gdpr-11",
      title: "11. Data Security",
      content:
        "We implement appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage.",
    },
    {
      id: "gdpr-12",
      title: "12. Supervisory Authority",
      content:
        "You have the right to lodge a complaint with your local data protection supervisory authority. In the EU, you can find your national authority at https://edpb.europa.eu/about-edpb/about-edpb/members_en.",
    },
    {
      id: "gdpr-13",
      title: "13. Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:\n\n{{businessName}}\nEmail: {{contactEmail}}\nWebsite: {{websiteUrl}}",
    },
  ],
};
