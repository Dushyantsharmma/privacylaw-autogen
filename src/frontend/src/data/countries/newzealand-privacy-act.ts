import type { CountryData } from "../../types/documentTypes";

export const newZealandPrivacyActData: CountryData = {
  id: "newzealand-privacy-act",
  name: "New Zealand",
  frameworkName: "New Zealand Privacy Act 2020",
  version: "1.1",
  lastReviewed: "2024-03-01",
  sections: [
    {
      id: "nz-intro",
      title: "1.0 Introduction — New Zealand Privacy Act 2020",
      content:
        "This Privacy Policy is prepared in compliance with the New Zealand Privacy Act 2020 and the 13 Information Privacy Principles (IPPs), overseen by the Office of the Privacy Commissioner (OPC). {{businessName}} is committed to protecting the personal information of New Zealand users in accordance with the Privacy Act 2020.",
    },
    {
      id: "nz-principles",
      title: "2.0 Information Privacy Principles (IPPs)",
      content:
        "Our collection and use of personal information complies with the 13 Information Privacy Principles under Schedule 1 of the Privacy Act 2020, covering: purpose of collection, source of collection, collection of information from subject, manner of collection, storage and security, access to personal information, correction of personal information, accuracy, retention, use of personal information, limits on disclosure, unique identifiers, and trans-border data flows.",
    },
    {
      id: "nz-collection",
      title: "3.0 Personal Information We Collect",
      content:
        "Under IPP 1, we collect personal information only when it is necessary for our functions or activities. We collect: name and contact details, account credentials, usage data, transaction records, and device/technical information. We do not collect more information than is reasonably necessary.",
    },
    {
      id: "nz-source",
      title: "4.0 Source of Collection",
      content:
        "Under IPP 2, personal information is collected directly from you wherever practicable. We collect information directly via our website, forms, and account registration. We may collect from third parties where direct collection is not reasonably practicable, and will inform you when this occurs.",
    },
    {
      id: "nz-notice",
      title: "5.0 Notice at Collection",
      content:
        "Under IPP 3, we inform you of: the purpose of collection; whether collection is voluntary or mandatory; the consequences of not providing information; and the agencies to which we routinely disclose your information.",
    },
    {
      id: "nz-use",
      title: "6.0 Use and Disclosure of Personal Information",
      content:
        "Under IPP 10 and 11, personal information is used and disclosed only for the purpose for which it was collected or a directly related purpose, unless consent is given or another exception applies. We do not sell personal information.",
    },
    {
      id: "nz-rights",
      title: "7.0 Access and Correction Rights",
      content:
        "Under IPPs 6 and 7, you have the right to: access personal information we hold about you (responded to within 20 working days); request correction of inaccurate information; and attach a statement of correction to your record if we decline to correct it. Requests can be made at {{contactEmail}}.",
    },
    {
      id: "nz-security",
      title: "8.0 Security of Personal Information",
      content:
        "Under IPP 5, we implement appropriate technical and organizational security measures to protect personal information. In the event of a privacy breach that poses a risk of serious harm, we will notify the Privacy Commissioner and affected individuals under the mandatory notification requirements of the Privacy Act 2020.",
    },
    {
      id: "nz-transfer",
      title: "9.0 Disclosure Overseas (IPP 12)",
      content:
        "Under IPP 12, personal information may only be disclosed overseas if the destination country has comparable privacy protections, or with your consent, or under one of the specified exceptions. Australia is recognized as providing comparable protection.",
    },
    {
      id: "nz-retention",
      title: "10.0 Retention",
      content:
        "Under IPP 9, personal information is not kept longer than {{dataRetention}} or as required by New Zealand law. Upon expiry, data is securely destroyed.",
    },
    {
      id: "nz-complaints",
      title: "11.0 Complaints",
      content:
        "If you believe we have breached your privacy, contact us first at {{contactEmail}}. If unresolved, complaints may be made to the Privacy Commissioner at www.privacy.org.nz.",
    },
    {
      id: "nz-changes",
      title: "12.0 Changes to This Policy",
      content:
        "Updates to this Privacy Policy will be published at {{websiteUrl}}. Last updated: {{currentDate}}.",
    },
  ],
};
