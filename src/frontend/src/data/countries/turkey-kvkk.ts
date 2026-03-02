import type { CountryData } from "../../types/documentTypes";

export const turkeyKvkkData: CountryData = {
  id: "turkey-kvkk",
  name: "Turkey",
  frameworkName: "Turkey KVKK (Law on Protection of Personal Data No. 6698)",
  version: "1.0",
  lastReviewed: "2024-03-01",
  sections: [
    {
      id: "tr-intro",
      title: "1.0 Introduction — Turkey KVKK Compliance",
      content:
        "This Privacy Policy is prepared in compliance with Turkey's Law on Protection of Personal Data No. 6698 (Kişisel Verilerin Korunması Kanunu — KVKK), overseen by the Personal Data Protection Authority (Kişisel Verileri Koruma Kurumu — KVKK Authority). {{businessName}} ('Data Controller / Veri Sorumlusu') is committed to protecting the personal data of Turkish data subjects.",
    },
    {
      id: "tr-controller",
      title: "2.0 Data Controller",
      content:
        "{{businessName}} is registered in the Data Controllers' Registry (VERBİS) as required by Article 16 of the KVKK. Contact our designated personal data contact point at {{contactEmail}} | {{websiteUrl}}.",
    },
    {
      id: "tr-principles",
      title: "3.0 Data Processing Principles",
      content:
        "Under Article 4 of the KVKK, personal data must be processed: lawfully and in accordance with the rules of honesty; accurately and kept up-to-date when necessary; for specific, explicit, and legitimate purposes; in a proportionate manner; and only for the period required.",
    },
    {
      id: "tr-legal-basis",
      title: "4.0 Lawful Basis for Processing",
      content:
        "Under Articles 5 and 6 of the KVKK, processing of personal data requires one of: explicit consent; requirement by law; necessity for contract; obligation of the controller; protection of vital interests; requirement for public interest; or legitimate interests. Processing of sensitive personal data (special categories) requires explicit consent.",
    },
    {
      id: "tr-collection",
      title: "5.0 Personal Data Collected",
      content:
        "We collect personal data including identity data (name, national ID where required), contact data (email, phone), service usage data, and financial data. Special category personal data (health, biometric, criminal, racial origin, religious belief) is only processed with explicit consent.",
    },
    {
      id: "tr-rights",
      title: "6.0 Rights of Data Subjects",
      content:
        "Under Article 11 of the KVKK, you have the right to: learn whether your personal data is processed; request information about processing; learn the purpose of processing and whether data is used in accordance with it; know third-party recipients domestically or abroad; request correction of incomplete or inaccurate data; request erasure or destruction; request notification to third parties; object to automated processing; and claim compensation for damages from unlawful processing. Requests are submitted at {{contactEmail}} and must be responded to within 30 days.",
    },
    {
      id: "tr-transfer",
      title: "7.0 Transfer of Personal Data Abroad",
      content:
        "Under Article 9 of the KVKK, cross-border data transfer requires: explicit consent; or transfer to a country with adequate protection (determined by the KVKK Board); or written commitment undertaking adequate protection. The KVKK Board publishes a list of countries with adequate protection.",
    },
    {
      id: "tr-security",
      title: "8.0 Security Measures",
      content:
        "Under Article 12, we implement technical and administrative security measures to prevent unlawful processing, unauthorized access, and ensure preservation of personal data. Breaches are reported to the KVKK Board within 72 hours and to affected data subjects promptly.",
    },
    {
      id: "tr-verbis",
      title: "9.0 VERBİS Registration",
      content:
        "{{businessName}} is registered in the Data Controllers' Registry (VERBİS) as mandated by Article 16 of the KVKK. Our registration details are available at verbis.kvkk.gov.tr.",
    },
    {
      id: "tr-retention",
      title: "10.0 Retention and Destruction",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Turkish law. In accordance with the Regulation on Deletion, Destruction, or Anonymization of Personal Data, a Personal Data Storage and Destruction Policy is maintained.",
    },
    {
      id: "tr-changes",
      title: "11.0 Changes",
      content:
        "Updates to this Privacy Policy will be published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
