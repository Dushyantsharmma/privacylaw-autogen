import type { CountryData } from "../../types/documentTypes";

export const ukDpa2018Data: CountryData = {
  id: "uk-dpa-2018",
  name: "United Kingdom",
  frameworkName: "UK DPA 2018",
  version: "1.3.0",
  lastReviewed: "2025-02-01",
  sections: [
    {
      id: "uk-1",
      title: "1. Introduction",
      content:
        'This Privacy Policy explains how {{businessName}} ("we", "us", or "our") collects, uses, and protects your personal data in accordance with the UK Data Protection Act 2018 and the UK GDPR. Our website is {{websiteUrl}}.',
    },
    {
      id: "uk-2",
      title: "2. Data Controller",
      content:
        "{{businessName}} is the data controller. The Information Commissioner's Office (ICO) is the UK's independent authority set up to uphold information rights. Contact us at {{contactEmail}}.",
    },
    {
      id: "uk-3",
      title: "3. Personal Data We Collect",
      content:
        "We collect personal data including:\n\n• Name and contact details\n• Account and profile information\n• Technical data (IP address, browser type, device information)\n• Usage and behavioural data\n• Financial data where applicable",
    },
    {
      id: "uk-4",
      title: "4. Lawful Basis for Processing",
      content:
        "Under the UK GDPR, we rely on the following lawful bases:\n\n• Consent: You have given clear consent\n• Contract: Processing is necessary for a contract\n• Legal Obligation: We must comply with UK law\n• Legitimate Interests: Necessary for our legitimate business interests",
    },
    {
      id: "uk-5",
      title: "5. How We Use Your Data",
      content:
        "We use your personal data to provide our services, process payments, send communications, improve our website, and comply with legal obligations.",
    },
    {
      id: "uk-6",
      title: "6. Data Retention",
      content:
        "We retain your personal data for {{dataRetention}} unless a longer retention period is required or permitted by law.",
    },
    {
      id: "uk-7",
      title: "7. Your Rights Under UK GDPR",
      content:
        'You have the following rights:\n\n• Right to be informed\n• Right of access\n• Right to rectification\n• Right to erasure ("right to be forgotten")\n• Right to restrict processing\n• Right to data portability\n• Right to object\n• Rights related to automated decision-making\n\nContact us at {{contactEmail}} to exercise these rights.',
    },
    {
      id: "uk-8",
      title: "8. International Transfers",
      content:
        "If we transfer your data outside the UK, we ensure adequate protection through UK-approved transfer mechanisms, including the UK International Data Transfer Agreement (IDTA).",
    },
    {
      id: "uk-9",
      title: "9. Third-Party Services",
      content:
        "We use {{analyticsProvider}} for analytics and {{paymentProcessor}} for payment processing. These providers are bound by their own privacy policies.",
    },
    {
      id: "uk-10",
      title: "10. Cookies",
      content:
        "We use cookies in accordance with the Privacy and Electronic Communications Regulations (PECR). You can manage cookie preferences through your browser settings.",
    },
    {
      id: "uk-11",
      title: "11. Complaints",
      content:
        "You have the right to make a complaint to the Information Commissioner's Office (ICO) at www.ico.org.uk or by calling 0303 123 1113.",
    },
    {
      id: "uk-12",
      title: "12. Contact Us",
      content:
        "{{businessName}}\nEmail: {{contactEmail}}\nWebsite: {{websiteUrl}}",
    },
  ],
};
