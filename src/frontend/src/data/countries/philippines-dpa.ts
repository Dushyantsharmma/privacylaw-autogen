import type { CountryData } from "../../types/documentTypes";

export const philippinesDpaData: CountryData = {
  id: "philippines-dpa",
  name: "Philippines",
  frameworkName: "Philippines Data Privacy Act 2012 (Republic Act 10173)",
  version: "1.0",
  lastReviewed: "2024-01-01",
  sections: [
    {
      id: "ph-intro",
      title: "1.0 Introduction — Philippines Data Privacy Act Compliance",
      content:
        "This Privacy Policy is prepared in compliance with the Philippines Data Privacy Act 2012 (Republic Act No. 10173) and its Implementing Rules and Regulations, overseen by the National Privacy Commission (NPC). {{businessName}} ('Personal Information Controller / PIC') is committed to protecting the personal information of Philippine data subjects.",
    },
    {
      id: "ph-controller",
      title: "2.0 Personal Information Controller",
      content:
        "{{businessName}} is the Personal Information Controller (PIC) registered with the National Privacy Commission. Contact our Data Protection Officer (DPO) at {{contactEmail}}.",
    },
    {
      id: "ph-principles",
      title: "3.0 Data Privacy Principles",
      content:
        "Under Section 11 of the DPA, personal information must be: (a) collected for specified, explicit, and legitimate purposes; (b) processed fairly and lawfully; (c) accurate, relevant, and updated; (d) adequate, not excessive; (e) retained no longer than necessary; (f) kept safe with appropriate security measures.",
    },
    {
      id: "ph-legal-basis",
      title: "4.0 Criteria for Lawful Processing",
      content:
        "Under Section 12, processing is lawful when: consent is given; processing is required for contractual obligations; processing is required by law; processing is necessary to respond to a national emergency; processing is required for legitimate interests. Sensitive personal information (Section 13) requires consent, a law specifically permitting processing, or one of the enumerated exceptions.",
    },
    {
      id: "ph-collection",
      title: "5.0 Personal Information Collected",
      content:
        "We collect: personal information (name, contact details, account data); sensitive personal information (health, racial or ethnic origin, religious or philosophical beliefs, biometric data — with explicit consent); privileged information (where applicable, with additional protections).",
    },
    {
      id: "ph-rights",
      title: "6.0 Rights of Data Subjects",
      content: "Under Chapter IV of the DPA, you have the following rights:",
      subsections: [
        {
          id: "ph-rights-informed",
          title: "6.1 Right to be Informed",
          content:
            "Be notified before, during, and after collection of personal information.",
        },
        {
          id: "ph-rights-access",
          title: "6.2 Right to Access",
          content:
            "Reasonable access to personal information we hold, including the source, recipients, and processing history.",
        },
        {
          id: "ph-rights-object",
          title: "6.3 Right to Object",
          content: "Object to processing on legitimate or related grounds.",
        },
        {
          id: "ph-rights-erase",
          title: "6.4 Right to Erasure or Blocking",
          content:
            "Request erasure or blocking of personal information for unlawful or outdated processing.",
        },
        {
          id: "ph-rights-damages",
          title: "6.5 Right to Damages",
          content:
            "Indemnification for damages suffered due to inaccurate, incomplete, outdated, or unlawfully processed personal information.",
        },
        {
          id: "ph-rights-portability",
          title: "6.6 Right to Data Portability",
          content:
            "Right to receive personal information in electronic or structured format and transmit to another controller.",
        },
        {
          id: "ph-rights-complaint",
          title: "6.7 Right to Complain",
          content:
            "Lodge a complaint with the National Privacy Commission at www.privacy.gov.ph.",
        },
      ],
    },
    {
      id: "ph-security",
      title: "7.0 Security Measures",
      content:
        "Under Section 20 of the DPA, we implement organizational, physical, and technical security measures. Personal data breaches are reported to the NPC within 72 hours and to affected data subjects within 72 hours if the breach is likely to result in harm.",
    },
    {
      id: "ph-transfer",
      title: "8.0 Cross-Border Data Transfer",
      content:
        "Under Section 21, transfers to foreign countries require that the recipient country provides an adequate level of protection, or appropriate safeguards are in place as approved by the NPC.",
    },
    {
      id: "ph-retention",
      title: "9.0 Data Retention",
      content:
        "Personal information is retained for {{dataRetention}} or as required by Philippine law. Upon expiry, data is securely destroyed.",
    },
    {
      id: "ph-dpo",
      title: "10.0 Data Protection Officer",
      content:
        "{{businessName}} has appointed a Data Protection Officer (DPO) registered with the NPC. The DPO may be contacted at {{contactEmail}}.",
    },
    {
      id: "ph-changes",
      title: "11.0 Changes to This Policy",
      content:
        "Updates will be published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
