import type { CountryData } from "../../types/documentTypes";

export const hipaaData: CountryData = {
  id: "hipaa",
  name: "United States (Healthcare)",
  frameworkName: "HIPAA",
  version: "1.0.0",
  lastReviewed: "2026-01-10",
  sections: [
    {
      id: "hipaa-1",
      title: "1. HIPAA Notice of Privacy Practices",
      content:
        'This HIPAA Addendum and Notice of Privacy Practices describes how {{businessName}} ("we", "us", or "our") may use and disclose Protected Health Information (PHI) and how you can access your health information. We are required by the Health Insurance Portability and Accountability Act of 1996 (HIPAA), as amended by the Health Information Technology for Economic and Clinical Health (HITECH) Act, to maintain the privacy and security of your PHI and to provide this notice.\n\nEffective Date: {{effectiveDate}}\nWebsite: {{websiteUrl}}',
    },
    {
      id: "hipaa-2",
      title: "2. Covered Entity / Business Associate",
      content:
        "{{businessName}} is a [Covered Entity / Business Associate] as defined under HIPAA (45 CFR § 160.103). A Covered Entity is a healthcare provider, health plan, or healthcare clearinghouse that electronically transmits health information. A Business Associate is an entity that creates, receives, maintains, or transmits PHI on behalf of a Covered Entity.\n\nFor all HIPAA-related inquiries, please contact our Privacy Officer at {{contactEmail}}.",
    },
    {
      id: "hipaa-3",
      title: "3. Protected Health Information (PHI)",
      content:
        'Protected Health Information (PHI) means individually identifiable health information that is transmitted or maintained in any form or medium (electronic, paper, or oral). PHI includes information that:\n\n• Relates to the past, present, or future physical or mental health condition of an individual\n• Relates to the provision of healthcare to an individual\n• Relates to the past, present, or future payment for the provision of healthcare\n\nCommon identifiers that make health information "individually identifiable" include: name, geographic data, dates (other than year), telephone numbers, email addresses, Social Security Numbers, medical record numbers, health plan beneficiary numbers, IP addresses, and other unique identifiers.',
    },
    {
      id: "hipaa-4",
      title: "4. Permitted Uses and Disclosures of PHI",
      content:
        "We may use and disclose your PHI without your authorisation for the following purposes:\n\n4.1 Treatment: To provide, coordinate, or manage your healthcare and related services, and to consult with other healthcare providers regarding your treatment.\n\n4.2 Payment: To obtain payment for services provided to you, including billing, claims management, and collection activities.\n\n4.3 Healthcare Operations: For activities necessary to run our healthcare organisation, including quality assessment, training, licensing, and business management functions.\n\n4.4 Required by Law: Where required by federal, state, or local law, including public health activities, abuse or neglect reporting, health oversight activities, judicial and administrative proceedings, law enforcement, and national security activities.\n\n4.5 Other Permitted Disclosures: To your personal representative, in situations involving serious threat to health or safety, and for certain research purposes with appropriate protections.",
    },
    {
      id: "hipaa-5",
      title: "5. Uses and Disclosures Requiring Your Authorisation",
      content:
        "Other uses and disclosures of your PHI will be made only with your written authorisation (HIPAA Authorisation — 45 CFR § 164.508), including:\n\n• Marketing communications (unless face-to-face communication or promotional gifts of nominal value)\n• Sale of PHI\n• Use or disclosure of psychotherapy notes\n• Uses or disclosures not otherwise permitted or required by the HIPAA Privacy Rule\n\nYou have the right to revoke your authorisation at any time in writing, except where we have already taken action based on it.",
    },
    {
      id: "hipaa-6",
      title: "6. Minimum Necessary Standard",
      content:
        "When using or disclosing PHI or when requesting PHI from another covered entity or business associate, we make reasonable efforts to use, disclose, or request only the minimum amount of PHI necessary to accomplish the intended purpose of the use, disclosure, or request, as required by 45 CFR § 164.502(b).",
    },
    {
      id: "hipaa-7",
      title: "7. Your Rights Under HIPAA",
      content:
        "You have the following rights regarding your PHI:\n\n7.1 Right of Access (45 CFR § 164.524): Request access to inspect and obtain a copy of your PHI in a designated record set. We must provide access within 30 days. You may be charged a reasonable cost-based fee for paper copies.\n\n7.2 Right to Amendment (45 CFR § 164.526): Request that we amend PHI or a record about you if you believe it is incorrect or incomplete. We have 60 days to act on your request.\n\n7.3 Right to an Accounting of Disclosures (45 CFR § 164.528): Request a list of certain disclosures of your PHI made by us in the past 6 years.\n\n7.4 Right to Request Restrictions (45 CFR § 164.522): Request a restriction on certain uses and disclosures of your PHI. We are required to agree to restrictions on disclosure to health plans for services paid out of pocket in full.\n\n7.5 Right to Request Confidential Communications (45 CFR § 164.522(b)): Request that we communicate with you about your health matters in a certain way or at a certain location.\n\n7.6 Right to a Paper Copy of this Notice: Request a paper copy of this Notice of Privacy Practices at any time.\n\nTo exercise these rights, contact our Privacy Officer at {{contactEmail}}.",
    },
    {
      id: "hipaa-8",
      title: "8. Business Associate Agreements (BAA)",
      content:
        "We enter into Business Associate Agreements (BAAs) with all vendors, contractors, and service providers who have access to PHI on our behalf, as required by 45 CFR §§ 164.502(e) and 164.504(e). BAAs require Business Associates to appropriately safeguard PHI, report breaches, and comply with applicable HIPAA requirements.",
    },
    {
      id: "hipaa-9",
      title: "9. HIPAA Security Safeguards",
      content:
        "We implement the following safeguards to protect electronic PHI (ePHI) in accordance with the HIPAA Security Rule (45 CFR Part 164, Subpart C):\n\n• Administrative Safeguards: Security management processes, workforce training, access authorisation and management, information access management, contingency planning, evaluation\n• Physical Safeguards: Facility access controls, workstation use and security, device and media controls\n• Technical Safeguards: Access controls (unique user IDs, automatic logoff, encryption), audit controls, integrity controls, transmission security (encryption of ePHI in transit)\n• Organisational Requirements: BAAs, group health plan policies\n\nWe conduct regular risk analyses and implement risk management procedures as required by 45 CFR § 164.308(a)(1).",
    },
    {
      id: "hipaa-10",
      title: "10. Data Breach Notification (HITECH Act)",
      content:
        "In the event of a breach of unsecured PHI, we will notify:\n\n• Affected individuals: Without unreasonable delay and no later than 60 calendar days following discovery of the breach (45 CFR § 164.404)\n• U.S. Department of Health and Human Services (HHS): For breaches affecting 500 or more individuals, we notify HHS contemporaneously with individual notifications. For smaller breaches, we report annually (45 CFR § 164.408)\n• Prominent media outlets: For breaches affecting 500 or more individuals in a state or jurisdiction (45 CFR § 164.406)\n\nNotifications include: a description of the breach, types of PHI involved, steps individuals should take to protect themselves, steps we are taking to investigate, mitigate, and prevent future breaches, and contact information.",
    },
    {
      id: "hipaa-11",
      title: "11. Data Retention",
      content:
        "We retain PHI and related documentation in accordance with applicable federal and state law. HIPAA requires covered entities to retain policies and procedures for at least 6 years from the date of creation or the date it was last in effect. Medical records are retained in accordance with applicable state law requirements, which may require longer retention periods.",
    },
    {
      id: "hipaa-12",
      title: "12. HHS Office for Civil Rights — Complaints",
      content:
        "If you believe your privacy rights under HIPAA have been violated, you may file a complaint with:\n\nU.S. Department of Health and Human Services\nOffice for Civil Rights (OCR)\nHIPAA Complaint Process: www.hhs.gov/hipaa/filing-a-complaint\nPhone: 1-800-368-1019 (TDD: 800-537-7697)\n\nYou may also file a complaint directly with us by contacting our Privacy Officer at {{contactEmail}}. We will not retaliate against you for filing a complaint.",
    },
    {
      id: "hipaa-13",
      title: "13. Changes to This Notice",
      content:
        "We reserve the right to change the terms of this Notice of Privacy Practices and to make the new provisions effective for all PHI we maintain. Any revised Notice will be posted on our website at {{websiteUrl}} and will be available upon request.",
    },
    {
      id: "hipaa-14",
      title: "14. Contact Our Privacy Officer",
      content:
        "For questions, concerns, or to exercise your HIPAA rights, please contact our Privacy Officer:\n\n{{businessName}}\nPrivacy Officer Email: {{contactEmail}}\nWebsite: {{websiteUrl}}",
    },
  ],
};
