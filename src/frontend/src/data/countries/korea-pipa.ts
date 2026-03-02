import type { CountryData } from "../../types/documentTypes";

export const koreaPipaData: CountryData = {
  id: "korea-pipa",
  name: "South Korea",
  frameworkName: "PIPA (Personal Information Protection Act)",
  version: "1.5",
  lastReviewed: "2024-09-15",
  sections: [
    {
      id: "pipa-intro",
      title: "1.0 Introduction — PIPA Compliance",
      content:
        "This Privacy Policy is prepared in compliance with South Korea's Personal Information Protection Act (PIPA, 개인정보 보호법), as amended. {{businessName}} ('Company', 'we', 'us') is committed to protecting the personal information of all users and data subjects in accordance with PIPA and the guidelines issued by the Personal Information Protection Commission (PIPC). This policy governs the collection, use, provision, and destruction of personal information.",
    },
    {
      id: "pipa-controller",
      title: "2.0 Personal Information Controller",
      content:
        "The Personal Information Controller (개인정보처리자) responsible for this website is {{businessName}}, reachable at {{contactEmail}}. We have designated a Personal Information Protection Manager (개인정보 보호책임자) who is responsible for overseeing all personal information processing activities. Contact details for our Privacy Officer are provided in the contact section of this policy.",
    },
    {
      id: "pipa-collection",
      title: "3.0 Items of Personal Information Collected",
      content:
        "Under Article 15 of PIPA, we collect only the minimum personal information necessary for the specified purposes. The following categories of personal information are collected:",
      subsections: [
        {
          id: "pipa-mandatory",
          title: "3.1 Mandatory Items",
          content:
            "Name, email address, and contact information necessary for service provision and account management. Collection of these items is mandatory for service use.",
        },
        {
          id: "pipa-optional",
          title: "3.2 Optional Items",
          content:
            "Additional profile information, preferences, and usage data collected with your explicit consent. Refusal to provide optional information will not affect access to core services.",
        },
        {
          id: "pipa-auto",
          title: "3.3 Automatically Collected Information",
          content:
            "IP address, device information, browser type, access logs, cookies, and service usage records are automatically collected during service use under Article 15(1)(6) for legitimate business purposes.",
        },
      ],
    },
    {
      id: "pipa-purpose",
      title: "4.0 Purpose of Personal Information Processing",
      content:
        "Pursuant to Article 15 of PIPA, personal information is collected and used only for the following specified purposes. Personal information will not be used for any purpose beyond those stated without prior consent:",
      subsections: [
        {
          id: "pipa-purpose-service",
          title: "4.1 Service Provision",
          content:
            "Provision of requested services, user authentication, account management, technical support, and improvement of service quality.",
        },
        {
          id: "pipa-purpose-marketing",
          title: "4.2 Marketing and Promotions",
          content:
            "With your separate consent, we may use your information to send promotional communications, personalized offers, and service updates. You may withdraw consent at any time.",
        },
        {
          id: "pipa-purpose-legal",
          title: "4.3 Legal Obligations",
          content:
            "Compliance with applicable laws, regulations, and orders from authorities, including tax record retention requirements under the Framework Act on National Taxes.",
        },
      ],
    },
    {
      id: "pipa-retention",
      title: "5.0 Retention and Destruction Period",
      content:
        "Under Article 21 of PIPA, personal information is destroyed without delay once the retention period expires or the processing purpose is achieved. Retention periods are as follows:",
      subsections: [
        {
          id: "pipa-retention-general",
          title: "5.1 General User Data",
          content:
            "Personal information collected for service provision is retained for {{dataRetention}} following account closure or achievement of the collection purpose, unless a longer period is required by law.",
        },
        {
          id: "pipa-retention-legal",
          title: "5.2 Legally Required Retention",
          content:
            "Consumer complaint records: 3 years (Act on Consumer Protection in Electronic Commerce). Contract or subscription withdrawal records: 5 years. Payment and transaction records: 5 years. Log records: 3 months (Communications Secrets Protection Act).",
        },
        {
          id: "pipa-destruction",
          title: "5.3 Destruction Method",
          content:
            "Electronic files are destroyed using technical methods that prevent restoration. Paper documents are shredded or incinerated. A Personal Information Destruction Record is maintained.",
        },
      ],
    },
    {
      id: "pipa-third-party",
      title: "6.0 Provision of Personal Information to Third Parties",
      content:
        "Under Article 17 of PIPA, personal information is not provided to third parties without consent, except as permitted by law. We may provide personal information to third parties in the following circumstances: (a) with your prior consent; (b) where required by law or court order; (c) to protect life, body, or property interests in urgent circumstances. All third-party recipients are disclosed including their identity, purpose, items received, and retention period.",
    },
    {
      id: "pipa-entrustment",
      title: "7.0 Entrustment of Personal Information Processing",
      content:
        "We entrust personal information processing to the following companies under strict contractual controls per Article 26 of PIPA. Entrusted parties are prohibited from processing personal information beyond the entrusted scope. A list of current entrusted parties (수탁자) is available upon request at {{contactEmail}}.",
    },
    {
      id: "pipa-rights",
      title: "8.0 Rights of Data Subjects",
      content:
        "Under Articles 35-39 of PIPA, you have the following rights regarding your personal information:",
      subsections: [
        {
          id: "pipa-rights-access",
          title: "8.1 Right to Access (열람)",
          content:
            "You have the right to request access to personal information we hold about you. Requests will be processed within 10 days.",
        },
        {
          id: "pipa-rights-correct",
          title: "8.2 Right to Correction (정정)",
          content:
            "You may request correction of any inaccurate personal information. We will process correction requests within 10 days and notify you of the outcome.",
        },
        {
          id: "pipa-rights-delete",
          title: "8.3 Right to Deletion (삭제)",
          content:
            "You may request deletion of your personal information where retention is no longer necessary, subject to legal retention requirements.",
        },
        {
          id: "pipa-rights-suspend",
          title: "8.4 Right to Suspend Processing (처리정지)",
          content:
            "You may request suspension of personal information processing. We will comply within 10 days unless processing is required by law.",
        },
        {
          id: "pipa-rights-exercise",
          title: "8.5 Exercising Rights",
          content:
            "Rights may be exercised by contacting us at {{contactEmail}} or through our online portal. Legal guardians may exercise rights on behalf of minors under 14. Complaints may be filed with the Personal Information Protection Commission (PIPC) at www.pipc.go.kr or the Korea Internet & Security Agency (KISA) at privacy.kisa.or.kr.",
        },
      ],
    },
    {
      id: "pipa-security",
      title: "9.0 Technical and Administrative Security Measures",
      content:
        "Under Article 29 of PIPA, we implement the following security measures for personal information protection:",
      subsections: [
        {
          id: "pipa-security-admin",
          title: "9.1 Administrative Measures",
          content:
            "Establishment and implementation of an internal management plan, regular employee training, and designation of a Personal Information Protection Manager.",
        },
        {
          id: "pipa-security-technical",
          title: "9.2 Technical Measures",
          content:
            "Access control systems, encryption of unique identification information and passwords, installation of security software, retention of access records, and intrusion detection systems.",
        },
        {
          id: "pipa-security-physical",
          title: "9.3 Physical Measures",
          content:
            "Access control to computer rooms and document storage areas, and secure locking of storage media.",
        },
      ],
    },
    {
      id: "pipa-cookies",
      title: "10.0 Cookies and Automated Data Collection",
      content:
        "Our website uses cookies (쿠키) to store and retrieve user information. Cookies are small files placed on your device. You can refuse cookies via your browser settings; however, this may limit some website functionality. We use both session cookies (deleted when browser is closed) and persistent cookies (retained for a specified period).",
    },
    {
      id: "pipa-children",
      title: "11.0 Personal Information of Children Under 14",
      content:
        "Under Article 22(6) of PIPA, the collection of personal information from children under 14 years of age requires the consent of a legal guardian. We do not knowingly collect information from children under 14 without verified parental/guardian consent. If we discover we have collected such information without valid consent, it will be promptly deleted.",
    },
    {
      id: "pipa-overseas",
      title: "12.0 Transfer of Personal Information Overseas",
      content:
        "Under Article 28-8 of PIPA (amended 2023), any transfer of personal information overseas requires explicit notification to data subjects of the recipient country, recipient identity, transfer date, and purpose. We will obtain your consent before transferring personal information to countries that do not provide equivalent protection. Current overseas transfer recipients (if any) are listed and updated at {{websiteUrl}}/privacy.",
    },
    {
      id: "pipa-officer",
      title: "13.0 Personal Information Protection Manager",
      content:
        "The designated Personal Information Protection Manager (개인정보 보호책임자) responsible for overseeing personal information processing activities is contactable at {{contactEmail}}. You may exercise your rights or submit complaints through this contact. Complaints unresolved by us may be escalated to the Personal Information Protection Commission (PIPC) at 182 or www.pipc.go.kr.",
    },
    {
      id: "pipa-changes",
      title: "14.0 Changes to This Privacy Policy",
      content:
        "Any changes to this Privacy Policy will be announced at least 7 days prior to implementation via {{websiteUrl}} or email notification. Significant changes affecting your rights will be announced at least 30 days in advance. This policy is effective from {{currentDate}}.",
    },
  ],
};
