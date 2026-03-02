import type { CountryData } from "../../types/documentTypes";

export const ccpaCpraData: CountryData = {
  id: "ccpa-cpra",
  name: "California, USA",
  frameworkName: "CCPA/CPRA",
  version: "1.2.0",
  lastReviewed: "2025-01-10",
  sections: [
    {
      id: "ccpa-1",
      title: "1. Introduction",
      content:
        'This Privacy Policy describes how {{businessName}} ("we", "us", or "our") collects, uses, and discloses personal information about California residents in accordance with the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA). Our website is {{websiteUrl}}.',
    },
    {
      id: "ccpa-2",
      title: "2. Personal Information We Collect",
      content:
        "We collect the following categories of personal information:\n\n• Identifiers: name, email address, IP address, account name\n• Personal records: name, address, telephone number\n• Commercial information: products or services purchased\n• Internet activity: browsing history, search history, interactions with our website\n• Geolocation data\n• Professional or employment-related information\n• Inferences drawn from the above to create a profile",
    },
    {
      id: "ccpa-3",
      title: "3. How We Use Personal Information",
      content:
        "We use personal information for the following business purposes:\n\n• Providing and improving our services\n• Processing transactions\n• Sending communications\n• Security and fraud prevention\n• Complying with legal obligations\n• Analytics and research (via {{analyticsProvider}})",
    },
    {
      id: "ccpa-4",
      title: "4. Right to Know",
      content:
        "California residents have the right to request that we disclose:\n\n• The categories of personal information we have collected about you\n• The categories of sources from which we collected your personal information\n• Our business or commercial purpose for collecting or selling your personal information\n• The categories of third parties with whom we share your personal information\n• The specific pieces of personal information we have collected about you\n\nTo submit a Right to Know request, contact us at {{contactEmail}}.",
    },
    {
      id: "ccpa-5",
      title: "5. Right to Delete",
      content:
        "California residents have the right to request that we delete personal information we have collected from them, subject to certain exceptions. To submit a deletion request, contact us at {{contactEmail}}. We will respond within 45 days of receiving your request.",
    },
    {
      id: "ccpa-6",
      title: "6. Right to Opt-Out of Sale or Sharing",
      content:
        'California residents have the right to opt out of the sale or sharing of their personal information. We do not sell personal information for monetary consideration. However, we may share personal information with third-party advertising partners. To opt out, contact us at {{contactEmail}} or use the "Do Not Sell or Share My Personal Information" link on our website.',
    },
    {
      id: "ccpa-7",
      title: "7. Sensitive Personal Information",
      content:
        "Under the CPRA, you have the right to limit our use and disclosure of sensitive personal information. Sensitive personal information includes:\n\n• Social Security numbers\n• Financial account information\n• Precise geolocation\n• Racial or ethnic origin\n• Religious beliefs\n• Health information\n• Biometric data\n\nWe only use sensitive personal information for the purposes permitted by the CPRA.",
    },
    {
      id: "ccpa-8",
      title: "8. Right to Correct",
      content:
        "California residents have the right to request correction of inaccurate personal information we maintain about them. To submit a correction request, contact us at {{contactEmail}}.",
    },
    {
      id: "ccpa-9",
      title: "9. Non-Discrimination",
      content:
        "We will not discriminate against you for exercising any of your CCPA/CPRA rights. We will not deny goods or services, charge different prices, provide a different level of service, or suggest you will receive a different price or rate for exercising your privacy rights.",
    },
    {
      id: "ccpa-10",
      title: "10. Data Retention",
      content:
        "We retain your personal information for {{dataRetention}} or as long as necessary to fulfil the purposes for which it was collected, unless a longer retention period is required by law.",
    },
    {
      id: "ccpa-11",
      title: "11. California Attorney General",
      content:
        "For more information about your rights under the CCPA/CPRA, you may contact the California Attorney General's Office at https://oag.ca.gov/privacy/ccpa.",
    },
    {
      id: "ccpa-12",
      title: "12. Contact Us",
      content:
        "To exercise your rights or for any privacy-related questions:\n\n{{businessName}}\nEmail: {{contactEmail}}\nWebsite: {{websiteUrl}}",
    },
  ],
};
