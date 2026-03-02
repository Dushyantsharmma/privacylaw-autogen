import type { CountryData } from "../../types/documentTypes";

export const chinaPiplData: CountryData = {
  id: "china-pipl",
  name: "China",
  frameworkName: "PIPL / CSL / DSL",
  version: "1.0.0",
  lastReviewed: "2025-01-15",
  sections: [
    {
      id: "cn-1",
      title: "1. Introduction",
      content:
        'This Privacy Policy ("Policy") is published by {{businessName}} ("we", "us", or "our") in accordance with the People\'s Republic of China\'s Personal Information Protection Law (PIPL, effective November 1, 2021), Cybersecurity Law (CSL, effective June 1, 2017), and Data Security Law (DSL, effective September 1, 2021). It describes how we collect, use, store, share, transfer, and protect your personal information when you use our services at {{websiteUrl}}.',
    },
    {
      id: "cn-2",
      title: "2. Definitions",
      content:
        'Under PIPL:\n\n• "Personal Information" (个人信息): Any information recorded electronically or otherwise relating to identified or identifiable natural persons, excluding anonymized information.\n• "Sensitive Personal Information" (敏感个人信息): Biometric data, religious beliefs, specially designated status, medical health, financial accounts, location tracking, and personal information of minors under 14.\n• "Personal Information Handler" (个人信息处理者): Organizations or individuals that independently determine processing purposes and methods — equivalent to a data controller.\n• "Personal Information Processing" (个人信息处理): Activities including collection, storage, use, processing, transmission, provision, disclosure, and deletion.',
    },
    {
      id: "cn-3",
      title: "3. Legal Basis for Processing (PIPL Article 13)",
      content:
        "We process your personal information only where one of the following lawful bases applies under PIPL Article 13:\n\n• Consent (Article 13(1)): You have given voluntary, explicit, and informed consent\n• Contract (Article 13(2)): Necessary for conclusion or performance of a contract to which you are a party\n• Legal Obligation (Article 13(3)): Necessary to fulfil our statutory duties or obligations\n• Public Interest (Article 13(4)): Necessary to respond to public health emergencies or protect life, health, or property safety under emergency circumstances\n• Public Interest Tasks (Article 13(5)): Processing for news reporting, public opinion supervision, and other activities in the public interest\n• Legitimate Interests (Article 13(6)): Necessary for the legitimate interests of the handler or a third party\n\nFor sensitive personal information, we obtain your separate and explicit consent in accordance with PIPL Article 29.",
    },
    {
      id: "cn-4",
      title: "4. Information We Collect",
      content:
        "We collect the following categories of personal information:\n\n• Basic Identity Information: name, identification number, contact details\n• Account Information: username, password (stored encrypted), account settings\n• Device and Technical Information: device identifiers, IP address, operating system, browser type\n• Usage Information: pages visited, features used, time and frequency of use\n• Transaction Information: purchase history, payment records (payment card details are processed by third-party payment processors and not stored by us)\n• Communication Information: messages sent through our platform, customer service interactions\n• Location Information: only when you grant permission (see Section 9)\n\nWe collect only the minimum personal information necessary for the stated purposes (data minimisation principle, PIPL Article 6).",
    },
    {
      id: "cn-5",
      title: "5. Purpose Limitation and Notice (PIPL Articles 17–19)",
      content:
        "Before or at the time of collecting personal information, we provide clear notice of:\n\n• The name and contact information of the Personal Information Handler: {{businessName}}, reachable at {{contactEmail}}\n• The purposes and methods of processing\n• The types of personal information to be processed and the retention period\n• The methods and procedures by which individuals may exercise their rights under PIPL\n• Other matters required by laws and administrative regulations\n\nWe process your personal information only for the disclosed purposes. Any material change to processing purposes requires re-consent (PIPL Article 14).",
    },
    {
      id: "cn-6",
      title:
        "6. Your Rights as a Personal Information Subject (PIPL Articles 44–50)",
      content:
        "You have the following rights under PIPL, which we will respond to within 15 working days:\n\n• Right to Know and Decide (Article 44): Know how your personal information is processed and make decisions about it, including restricting or refusing processing\n• Right of Access and Copy (Article 45): Obtain copies of your personal information we hold\n• Right to Correction and Supplementation (Article 46): Request correction of inaccurate or incomplete information\n• Right to Erasure (Article 47): Request deletion in circumstances including: purpose achieved, consent withdrawn, processing beyond retention period, illegal processing\n• Right to Withdraw Consent (Article 15): Withdraw consent at any time; withdrawal does not affect lawfulness of prior processing\n• Right to Restrict Automated Decision-Making (Article 24): For decisions made solely by automated means with significant impact, you may request human review or refuse such decisions\n• Right to Deceased Persons' Data (Article 49): Close relatives may exercise the above rights for deceased individuals\n\nTo exercise your rights, contact our Personal Information Protection Officer at {{contactEmail}}. We will not charge a fee for reasonable requests.",
    },
    {
      id: "cn-7",
      title: "7. Data Retention (PIPL Article 19)",
      content:
        "We retain your personal information for the shortest period necessary to fulfil the processing purposes, subject to:\n\n• Your account data: retained while your account is active and for {{dataRetention}} thereafter\n• Transaction records: retained for 5 years as required by Chinese tax and accounting law\n• Logs and technical data: retained for no more than 6 months unless required by law\n• Communication records: retained for 60 days unless subject to a legal hold\n\nUpon expiry of the retention period or upon your valid erasure request, we delete or anonymize the information using technically sound methods that ensure the data cannot be reconstructed.",
    },
    {
      id: "cn-8",
      title:
        "8. Third-Party Provision and Entrusted Processing (PIPL Articles 21–26)",
      content:
        "We may share your personal information with:\n\n• Entrusted Processors (受托处理者): Third-party service providers that process data on our behalf pursuant to our instructions. We enter into written agreements specifying the purpose, duration, type, protection measures, and their obligations (PIPL Article 21)\n• Joint Controllers (共同处理者): Partners who jointly determine processing purposes. We will inform you of each party's obligations (PIPL Article 20)\n• Third-Party Recipients: We obtain your separate consent before providing your information to third parties outside the entrusted processing relationship (PIPL Article 23)\n\nWe do not sell your personal information.\n\nWe require all third parties to maintain appropriate technical and organisational measures and to handle personal information only as instructed.",
    },
    {
      id: "cn-9",
      title: "9. Cross-Border Data Transfer (PIPL Articles 38–43)",
      content:
        "If we need to transfer your personal information outside of China, we ensure the transfer complies with at least one of the following conditions under PIPL Article 38:\n\n• The receiving country or region has been certified as meeting a protection standard by the Cyberspace Administration of China (CAC) as having an adequate level of personal information protection\n• We have entered into Standard Contracts issued by the CAC with the overseas recipient\n• We have passed a security assessment organised by the CAC (required for Critical Information Infrastructure operators and for large-scale cross-border transfers)\n• Other conditions prescribed by CAC regulations\n\nFor transfers to critical information infrastructure operators or transfers exceeding CAC thresholds, we complete the mandatory CAC security assessment prior to transfer (PIPL Article 40).\n\nYou may contact us to obtain information about the specific safeguards applied to cross-border transfers.",
    },
    {
      id: "cn-10",
      title:
        "10. Security Measures (PIPL Article 51; CSL Articles 10, 21–23; DSL Articles 21–31)",
      content:
        "We implement the following technical and organisational measures to protect your personal information:\n\n• Encryption: Personal information is stored using AES-256 encryption; transmission is protected by TLS 1.2 or higher (SSL)\n• Access Control: Role-based access ensures only authorised personnel can access personal information on a need-to-know basis\n• Anonymisation and Pseudonymisation: Where feasible, personal identifiers are replaced with pseudonyms\n• Security Grading under MLPS: We operate at the security protection level required by the Multi-Level Protection Scheme (MLPS 2.0) under the Cybersecurity Law\n• Data Classification: We classify data in accordance with the Data Security Law's framework (general data, important data, core data) and apply heightened protections to important and core data\n• Security Assessments: We conduct annual personal information protection impact assessments (PIPIAs) for high-risk processing activities as required by PIPL Article 55\n• Breach Response: In the event of a personal information security incident, we notify the competent authority within the timeframe required and notify affected individuals promptly\n• Personnel Training: Staff with access to personal information receive regular training on data protection obligations",
    },
    {
      id: "cn-11",
      title: "11. Personal Information Protection Officer (PIPL Article 52)",
      content:
        "In accordance with PIPL Article 52, we have designated a Personal Information Protection Officer (个人信息保护负责人) responsible for supervising personal information processing activities and protection measures.\n\nPersonal Information Protection Officer: [Name]\nContact: {{contactEmail}}\nMailing Address: {{businessName}}, [registered address in China]\n\nYou may contact our Personal Information Protection Officer for any queries, complaints, or to exercise your rights under PIPL.",
    },
    {
      id: "cn-12",
      title: "12. Cookies and Similar Technologies",
      content:
        "We use cookies and similar tracking technologies on our website. In accordance with applicable regulations:\n\n• We obtain your consent before placing non-essential cookies\n• You can manage cookie preferences through our consent management tool\n• Our cookie policy provides detailed information on each category of cookie used\n\nFor the avoidance of doubt, cookies that contain personal information are subject to this Policy and all PIPL obligations.",
    },
    {
      id: "cn-13",
      title: "13. Children's Personal Information (PIPL Article 31)",
      content:
        "We do not knowingly process the personal information of children under the age of 14 without verifiable consent from a parent or legal guardian. When processing personal information of minors under 14:\n\n• We obtain separate and explicit consent from the child's parent or legal guardian\n• We apply stricter processing rules as required by PIPL Article 31 and the Provisions on the Online Protection of Children's Personal Information\n• Parents and guardians may exercise access, correction, erasure, and withdrawal rights on behalf of the minor\n\nIf you believe we have inadvertently collected information from a child under 14 without appropriate consent, please contact us immediately at {{contactEmail}}.",
    },
    {
      id: "cn-14",
      title: "14. Complaint and Supervisory Authority",
      content:
        "If you believe we have violated your rights or our obligations under PIPL, CSL, or DSL, you may:\n\n• Contact us directly at {{contactEmail}} — we will respond within 15 working days\n• File a complaint with the Cyberspace Administration of China (CAC): www.cac.gov.cn\n• File a complaint with the relevant local network information department\n• Bring a civil claim in a People's Court\n\nWe are committed to resolving complaints fairly and promptly.",
    },
    {
      id: "cn-15",
      title: "15. Updates to This Policy",
      content:
        "We may update this Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated to you via prominent notice on our website and, where required by PIPL, by re-obtaining your consent.\n\nThis Policy is effective as of the date shown at the top. The version history is maintained and previous versions are available upon request.\n\nLast updated: {{currentDate}}\nFramework version: China PIPL/CSL/DSL v1.0 (2025)",
    },
  ],
};
