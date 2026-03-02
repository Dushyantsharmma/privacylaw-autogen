import type { CountryData } from "../../types/documentTypes";

export const saudiPdplData: CountryData = {
  id: "saudi-pdpl",
  name: "Saudi Arabia",
  frameworkName:
    "Saudi Arabia PDPL (Personal Data Protection Law, Royal Decree M/19 2021)",
  version: "1.0",
  lastReviewed: "2024-09-14",
  sections: [
    {
      id: "sa-intro",
      title: "1.0 Introduction — Saudi Arabia PDPL Compliance",
      content:
        "This Privacy Policy is prepared in compliance with the Kingdom of Saudi Arabia's Personal Data Protection Law (PDPL), issued by Royal Decree M/19 dated 9/2/1443H (16 September 2021) and its Implementing Regulations, enforced by the Saudi Data and Artificial Intelligence Authority (SDAIA) and the National Data Management Office (NDMO). {{businessName}} ('Data Controller') is committed to protecting the personal data of Saudi data subjects.",
    },
    {
      id: "sa-controller",
      title: "2.0 Data Controller",
      content:
        "{{businessName}} is the Data Controller responsible for personal data collected through {{websiteUrl}}. Contact: {{contactEmail}}.",
    },
    {
      id: "sa-principles",
      title: "3.0 Data Processing Principles",
      content:
        "Under Article 5 of the Saudi PDPL, personal data must be processed: for a legitimate purpose; with transparency; only to the extent necessary; accurately and updated; with appropriate security; and not retained beyond the required period.",
    },
    {
      id: "sa-legal-basis",
      title: "4.0 Legal Basis for Processing",
      content:
        "Personal data may be processed with: the explicit consent of the data subject; for the performance of a contract; to comply with legal obligations; to protect vital interests; or for legitimate interests of the controller. Sensitive personal data requires explicit consent.",
    },
    {
      id: "sa-sensitive",
      title: "5.0 Sensitive Personal Data",
      content:
        "Sensitive personal data under Article 2 of the Saudi PDPL includes: ethnic or tribal origin, religious or ideological beliefs, criminal records, health and biometric data, financial data, and location data. Such data is processed only with explicit consent and enhanced security measures.",
    },
    {
      id: "sa-rights",
      title: "6.0 Rights of Data Subjects",
      content:
        "Under Chapter 3 of the Saudi PDPL, you have the right to: be informed of data processing; access your personal data; request correction of inaccurate data; request deletion of data; withdraw consent; and object to processing. Requests are submitted at {{contactEmail}} and responded to within 30 days.",
    },
    {
      id: "sa-transfer",
      title: "7.0 Cross-Border Data Transfer",
      content:
        "Cross-border transfer of personal data requires compliance with Article 29 of the Saudi PDPL. Data may be transferred only to countries with equivalent or higher protection, or with NDMO approval, and must not harm national interests or violate local laws.",
    },
    {
      id: "sa-security",
      title: "8.0 Data Security and Breach Notification",
      content:
        "We implement appropriate technical and organizational security measures. In the event of a personal data breach, we will notify SDAIA within 72 hours and affected data subjects if the breach poses high risk.",
    },
    {
      id: "sa-retention",
      title: "9.0 Data Retention",
      content:
        "Personal data is retained for {{dataRetention}} or as required by Saudi law. Data is securely deleted after the retention period.",
    },
    {
      id: "sa-changes",
      title: "10.0 Policy Changes",
      content:
        "Updates published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
