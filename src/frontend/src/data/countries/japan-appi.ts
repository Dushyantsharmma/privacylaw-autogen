import type { CountryData } from "../../types/documentTypes";

export const japanAppiData: CountryData = {
  id: "japan-appi",
  name: "Japan",
  frameworkName: "Japan APPI",
  version: "1.0.0",
  lastReviewed: "2026-01-10",
  sections: [
    {
      id: "appi-1",
      title: "1. Introduction / はじめに",
      content:
        'This Privacy Policy describes how {{businessName}} ("we", "us", or "our") handles your personal information in accordance with the Act on the Protection of Personal Information (APPI — 個人情報の保護に関する法律, Act No. 57 of 2003, as amended in 2022). Our website is {{websiteUrl}}.',
    },
    {
      id: "appi-2",
      title: "2. Personal Information Handler (個人情報取扱事業者)",
      content:
        "{{businessName}} is the Personal Information Handler (個人情報取扱事業者) responsible for the management of your personal information. For any questions regarding our personal information handling practices, please contact us at {{contactEmail}}.",
    },
    {
      id: "appi-3",
      title: "3. Personal Information We Collect",
      content:
        "We collect the following categories of personal information (個人情報):\n\n• Identification information: name, date of birth, gender, nationality (where required)\n• Contact information: email address, telephone number, postal address\n• Technical information: IP address, browser type, operating system, cookie identifiers\n• Usage information: access logs, browsing history on our platform, service usage records\n• Transaction information: purchase history, payment information\n• Any information you voluntarily provide through our services",
    },
    {
      id: "appi-4",
      title: "4. Purpose of Use (利用目的) — Article 17 APPI",
      content:
        "We clearly specify the purpose of use of your personal information as required under Article 17 of the APPI. We use your personal information for the following purposes:\n\n• Providing and administering our services at {{websiteUrl}}\n• Processing transactions and managing billing\n• Sending service notifications, updates, and relevant information\n• Responding to inquiries and providing customer support\n• Improving and developing our services through statistical analysis\n• Complying with applicable Japanese laws and regulations\n• Preventing unauthorised use and ensuring the security of our services\n\nWe will not use your personal information beyond these stated purposes without your prior consent, except where permitted by law.",
    },
    {
      id: "appi-5",
      title: "5. Consent and Lawful Basis",
      content:
        "Under the APPI, we handle your personal information with your consent where required. For sensitive personal information (要配慮個人情報 — Article 2(3) APPI), we obtain explicit prior consent before collection.\n\nSensitive personal information includes: race, creed (信条), social status, medical history (病歴), criminal records, status as a crime victim, disability information, and medical examination results.",
    },
    {
      id: "appi-6",
      title: "6. Third-Party Provision (第三者提供) — Article 27 APPI",
      content:
        "We do not provide your personal information to third parties without your prior consent, except in the following cases as permitted under Article 27 of the APPI:\n\n• Where required by law\n• Where necessary to protect human life, body, or property and obtaining consent is difficult\n• Where especially necessary to improve public health or promote healthy child development and obtaining consent is difficult\n• Where necessary to cooperate with national or local government in their statutory duties and obtaining consent would impede such duties\n\nFor any third-party provision with your consent, we will inform you of: (a) the name of the third party, (b) the items of personal information to be provided, (c) the means of provision, and (d) your right to request suspension.",
    },
    {
      id: "appi-7",
      title: "7. Joint Use (共同利用) — Article 27(5) APPI",
      content:
        "We may share your personal information jointly with affiliated companies within our group under Article 27(5) of the APPI. In such cases, we will publicly disclose: the items of personal information to be shared, the scope of joint users, the purposes of use, and the name of the entity responsible for managing such personal information.",
    },
    {
      id: "appi-8",
      title: "8. Entrustment of Personal Information Handling",
      content:
        "We may entrust all or part of the handling of your personal information to third-party service providers (受託者), including {{paymentProcessor}} for payment processing and {{analyticsProvider}} for analytics. We exercise necessary and appropriate supervision over such entrusted parties to ensure the security management of your personal information.",
    },
    {
      id: "appi-9",
      title:
        "9. Cross-Border Transfers (外国にある第三者への提供) — Article 28 APPI",
      content:
        "Where we transfer your personal information to a third party in a foreign country, we do so only in the following circumstances as required under Article 28 of the APPI:\n\n• The foreign country has been assessed by the Personal Information Protection Commission (PPC) as providing equivalent personal information protection to Japan\n• The recipient has implemented appropriate personal information protection measures equivalent to those required under the APPI (e.g., binding agreements, cross-border transfer standards)\n• You have provided prior consent for the transfer\n\nYou may request information about the personal information protection measures taken by the overseas recipient by contacting us at {{contactEmail}}.",
    },
    {
      id: "appi-10",
      title: "10. Data Retention (保存期間)",
      content:
        "We retain your personal information for {{dataRetention}} or for as long as necessary to fulfil the stated purpose of use. Retained personal information (保有個人データ) is erased without delay when it is no longer needed, in accordance with Article 19 of the APPI.",
    },
    {
      id: "appi-11",
      title: "11. Your Rights (開示等の請求)",
      content:
        "Regarding retained personal data (保有個人データ), you have the following rights under Articles 33–37 of the APPI:\n\n• Right to Disclosure (開示 — Art. 33): Request disclosure of the retained personal data we hold about you\n• Right to Correction (訂正 — Art. 34): Request correction, addition, or deletion of retained personal data that is factually inaccurate\n• Right to Suspension of Use or Erasure (利用停止・消去 — Art. 35): Request suspension of use or erasure where personal data is handled in violation of the APPI\n• Right to Suspension of Third-Party Provision (第三者提供の停止 — Art. 37): Request suspension of third-party provision where the provision violates the APPI\n• Right to Data Portability (Art. 33-2): In certain cases, request transmission of retained personal data in a structured, commonly used, machine-readable format\n\nTo exercise these rights, contact us at {{contactEmail}}. We will respond within the timeframe required under the APPI.",
    },
    {
      id: "appi-12",
      title:
        "12. Security Management Measures (安全管理措置) — Article 23 APPI",
      content:
        "We take necessary and appropriate security management measures to prevent leakage, loss, or damage of personal information, including:\n\n• Establishment of personal information handling rules\n• Implementation of organisational, human, physical, and technical safeguards\n• Regular staff training on personal information protection\n• Access controls and authentication measures\n\nIn the event of a personal information leak or breach that meets the reportable criteria under Article 26 of the APPI (2022 amendment), we will notify the Personal Information Protection Commission (PPC) and affected individuals without delay.",
    },
    {
      id: "appi-13",
      title: "13. Cookies and Tracking",
      content:
        "We use cookies and similar technologies on our platform. {{analyticsProvider}} is used for access analysis. You can manage cookie settings through your browser. Please note that disabling cookies may affect certain features of our services.",
    },
    {
      id: "appi-14",
      title:
        "14. Personal Information Protection Commission (個人情報保護委員会)",
      content:
        "If you have concerns about our handling of your personal information that cannot be resolved by contacting us directly, you may file a complaint with the Personal Information Protection Commission (PPC).\n\nPPC Website: www.ppc.go.jp\nPPC Consultation Desk: 03-6457-9849",
    },
    {
      id: "appi-15",
      title: "15. Contact Us / お問い合わせ",
      content:
        "For questions, requests, or complaints regarding our personal information handling, please contact us:\n\n{{businessName}}\nEmail: {{contactEmail}}\nWebsite: {{websiteUrl}}",
    },
  ],
};
