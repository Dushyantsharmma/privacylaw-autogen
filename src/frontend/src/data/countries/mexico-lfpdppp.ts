import type { CountryData } from "../../types/documentTypes";

export const mexicoLfpdpppData: CountryData = {
  id: "mexico-lfpdppp",
  name: "Mexico",
  frameworkName:
    "LFPDPPP (Federal Law on Protection of Personal Data Held by Private Parties)",
  version: "1.0",
  lastReviewed: "2024-02-01",
  sections: [
    {
      id: "mexico-intro",
      title: "1.0 Introduction — Mexico LFPDPPP Compliance",
      content:
        "This Privacy Notice (Aviso de Privacidad) is issued in compliance with Mexico's Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP, Ley Federal de Protección de Datos Personales en Posesión de los Particulares) and its Regulations, as overseen by the National Institute of Transparency, Access to Information and Personal Data Protection (INAI). {{businessName}} ('Responsible Party') is committed to protecting personal data of Mexican users.",
    },
    {
      id: "mexico-controller",
      title: "2.0 Identity and Address of Responsible Party",
      content:
        "{{businessName}} is the Responsible Party (Responsable) for the personal data collected. Contact: {{contactEmail}} | {{websiteUrl}}. Any questions about this Privacy Notice may be directed to our data protection contact at {{contactEmail}}.",
    },
    {
      id: "mexico-data-collected",
      title: "3.0 Personal Data Subject to Processing",
      content:
        "We collect personal data including: identification data (name, contact information), contact data (email, phone, address), financial data (where applicable), usage and technical data. Sensitive personal data (datos personales sensibles) — including health data, biometric data, racial or ethnic origin — is collected only with explicit written consent.",
    },
    {
      id: "mexico-purpose",
      title: "4.0 Purposes of Processing",
      content:
        "Personal data is processed for the following primary purposes: service provision, account management, customer support, and legal compliance. Secondary purposes (marketing, personalization) are optional — you may oppose secondary processing at any time by contacting {{contactEmail}} without affecting access to primary services.",
    },
    {
      id: "mexico-transfer",
      title: "5.0 Data Transfers",
      content:
        "Personal data may be transferred to third parties within or outside Mexico only with your consent or as permitted by the LFPDPPP. Where transfer to foreign countries occurs, appropriate contractual protections are in place. Transfers required by law do not require your consent but will be disclosed.",
    },
    {
      id: "mexico-arco",
      title: "6.0 ARCO Rights (Derechos ARCO)",
      content:
        "Under the LFPDPPP, you have the rights of Access, Rectification, Cancellation, and Opposition (Acceso, Rectificación, Cancelación y Oposición — ARCO). Requests must be submitted in writing to {{contactEmail}} with: (a) your name and ID; (b) description of the right to be exercised; (c) any documents supporting the request. We will respond within 20 business days, with a further 15 days to give effect to any decision.",
    },
    {
      id: "mexico-consent",
      title: "7.0 Consent",
      content:
        "By using our services and acknowledging this Privacy Notice, you consent to the processing of your personal data for the stated purposes. Consent for sensitive personal data is collected through explicit, written mechanisms. Consent may be revoked at any time by written request to {{contactEmail}}.",
    },
    {
      id: "mexico-security",
      title: "8.0 Security Measures",
      content:
        "We implement administrative, technical, and physical security measures to protect personal data against unauthorized access, loss, or disclosure. In the event of a security breach, we will notify affected data subjects and INAI as required by law.",
    },
    {
      id: "mexico-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} from the date of collection or as required by applicable Mexican law. Upon expiry, data is blocked for the legally required period and then deleted.",
    },
    {
      id: "mexico-cookies",
      title: "10.0 Cookies and Web Beacons",
      content:
        "We use cookies and web beacons (web beacons) to collect usage data. You can disable cookies in your browser settings. Our cookies policy is available at {{websiteUrl}}/cookies.",
    },
    {
      id: "mexico-changes",
      title: "11.0 Changes to This Privacy Notice",
      content:
        "Any changes to this Privacy Notice will be published on {{websiteUrl}} and notified via email where required. The current version is effective from {{currentDate}}.",
    },
  ],
};
