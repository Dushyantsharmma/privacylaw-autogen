import { argentinaPdpData } from "../data/countries/argentina-pdp";
import { australiaPrivacyActData } from "../data/countries/australia-privacy-act";
import { brazilLgpdData } from "../data/countries/brazil-lgpd";
import { ccpaCpraData } from "../data/countries/ccpa-cpra";
import { chinaPiplData } from "../data/countries/china-pipl";
import { gdprData } from "../data/countries/gdpr";
import { hipaaData } from "../data/countries/hipaa";
import { indiaDpdp2023Data } from "../data/countries/india-dpdp-2023";
import { indonesiaPdpData } from "../data/countries/indonesia-pdp";
import { israelPplData } from "../data/countries/israel-ppl";
import { japanAppiData } from "../data/countries/japan-appi";
import { kenyaDpaData } from "../data/countries/kenya-dpa";
import { koreaPipaData } from "../data/countries/korea-pipa";
import { mexicoLfpdpppData } from "../data/countries/mexico-lfpdppp";
import { newZealandPrivacyActData } from "../data/countries/newzealand-privacy-act";
import { nigeriaNdprData } from "../data/countries/nigeria-ndpr";
import { philippinesDpaData } from "../data/countries/philippines-dpa";
import { pipedaData } from "../data/countries/pipeda";
import { saudiPdplData } from "../data/countries/saudi-pdpl";
import { singaporePdpaData } from "../data/countries/singapore-pdpa";
import { southAfricaPopiaData } from "../data/countries/south-africa-popia";
import { switzerlandNfadpData } from "../data/countries/switzerland-nfadp";
import { thailandPdpaData } from "../data/countries/thailand-pdpa";
import { turkeyKvkkData } from "../data/countries/turkey-kvkk";
import { uaePdplData } from "../data/countries/uae-pdpl";
import { ukDpa2018Data } from "../data/countries/uk-dpa-2018";
import type {
  ClauseSection,
  CountryData,
  DocumentInputs,
  MergedDocument,
} from "../types/documentTypes";
import { type SupportedLanguage, translateSectionTitle } from "./translations";

const FRAMEWORK_REGISTRY: Record<string, CountryData> = {
  gdpr: gdprData,
  "uk-dpa-2018": ukDpa2018Data,
  "india-dpdp-2023": indiaDpdp2023Data,
  "ccpa-cpra": ccpaCpraData,
  pipeda: pipedaData,
  "australia-privacy-act": australiaPrivacyActData,
  "brazil-lgpd": brazilLgpdData,
  "singapore-pdpa": singaporePdpaData,
  "japan-appi": japanAppiData,
  hipaa: hipaaData,
  "china-pipl": chinaPiplData,
  "south-africa-popia": southAfricaPopiaData,
  // New frameworks
  "korea-pipa": koreaPipaData,
  "uae-pdpl": uaePdplData,
  "saudi-pdpl": saudiPdplData,
  "nigeria-ndpr": nigeriaNdprData,
  "kenya-dpa": kenyaDpaData,
  "mexico-lfpdppp": mexicoLfpdpppData,
  "argentina-pdp": argentinaPdpData,
  "thailand-pdpa": thailandPdpaData,
  "indonesia-pdp": indonesiaPdpData,
  "newzealand-privacy-act": newZealandPrivacyActData,
  "israel-ppl": israelPplData,
  "philippines-dpa": philippinesDpaData,
  "switzerland-nfadp": switzerlandNfadpData,
  "turkey-kvkk": turkeyKvkkData,
};

// ─── Current date helper ──────────────────────────────────────────────────────

function currentDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function substitutePlaceholders(text: string, inputs: DocumentInputs): string {
  return text
    .replace(/\{\{businessName\}\}/g, inputs.businessName || "[Business Name]")
    .replace(/\{\{websiteUrl\}\}/g, inputs.websiteUrl || "[Website URL]")
    .replace(/\{\{contactEmail\}\}/g, inputs.contactEmail || "[Contact Email]")
    .replace(/\{\{dataRetention\}\}/g, inputs.dataRetention || "2 years")
    .replace(
      /\{\{analyticsProvider\}\}/g,
      inputs.analyticsProvider || "analytics services",
    )
    .replace(
      /\{\{paymentProcessor\}\}/g,
      inputs.paymentProcessor || "payment processors",
    )
    .replace(/\{\{currentDate\}\}/g, currentDate());
}

function processSection(
  section: ClauseSection,
  inputs: DocumentInputs,
  language: SupportedLanguage,
): ClauseSection {
  const translatedTitle = translateSectionTitle(language, section.title);
  return {
    ...section,
    title: translatedTitle,
    content: substitutePlaceholders(section.content, inputs),
    subsections: section.subsections?.map((sub) =>
      processSection(sub, inputs, language),
    ),
  };
}

// ─── Global 7-Principles Compliance Statement ─────────────────────────────────

function buildGlobalComplianceStatement(inputs: DocumentInputs): ClauseSection {
  return {
    id: "global-principles",
    title:
      "0. Global Compliance Statement — 7 Universal Data Protection Principles",
    content: `${inputs.businessName || "[Business Name]"} is committed to protecting the personal data of all individuals who interact with our services, regardless of their location. Our data processing practices are built on the following seven universally recognised principles, which underpin data protection laws in over 100 countries:

1. Lawfulness, Fairness & Transparency — We process personal data only on a valid legal basis, in a fair manner, and with clear notice to individuals about what we do with their data.

2. Purpose Limitation — We collect data only for specified, explicit, and legitimate purposes. We do not use data in a manner incompatible with those original purposes.

3. Data Minimisation — We collect only the personal data that is adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.

4. Accuracy — We take reasonable steps to ensure that personal data is accurate, kept up to date, and corrected or deleted without delay when found to be inaccurate.

5. Storage Limitation — We retain personal data only for as long as necessary to fulfil the stated purpose or as required by applicable law. We delete or anonymise data once it is no longer needed.

6. Integrity & Confidentiality (Security) — We implement appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. Our security practices align with ISO 27701 (Privacy Information Management), ISO 27018 (Cloud Personal Data), SOC 2 Type II (SaaS data handling), and the NIST Privacy Framework.

7. Accountability — We take responsibility for demonstrating compliance with all applicable data protection laws and these principles. We maintain documentation of our processing activities, conduct Data Protection Impact Assessments (DPIAs) where required, and appoint Data Protection Officers or equivalent contacts where mandated by law.

These principles are consistent with the GDPR (EU), UK GDPR, India DPDP Act 2023, CCPA/CPRA (USA), PIPL (China), LGPD (Brazil), POPIA (South Africa), PDPA (Singapore), APPI (Japan), PIPEDA (Canada), and the Australian Privacy Principles.`,
  };
}

// ─── Industry-Specific Clause Injection ──────────────────────────────────────

const INDUSTRY_CLAUSES: Record<string, ClauseSection> = {
  "E-commerce": {
    id: "industry-ecommerce",
    title: "Industry Supplement: E-Commerce Data Processing",
    content: `As an e-commerce platform, ${"{businessName}"} processes additional categories of personal data and is subject to sector-specific obligations:

Payment Data & PCI DSS Compliance
We process payment information in accordance with PCI DSS v4.0. Card details are handled exclusively by our PCI-compliant payment processor (${"{paymentProcessor}"}) and are never stored on our servers. We maintain a PCI DSS compliance certificate and conduct annual security assessments.

Consumer Rights & Refund Policy
In accordance with applicable consumer protection laws (EU Consumer Rights Directive 2011/83/EU, UK Consumer Rights Act 2015, India Consumer Protection Rules 2020), you have the right to:
• Withdraw from a purchase within 14 days without reason (EU/UK)
• Receive a full refund within 14 days of return
• Access clear, complete pricing information including all taxes and charges
Our full refund and returns policy is available at [website URL]/refund-policy.

Transaction Records
We retain purchase records and transaction histories for tax and accounting purposes in accordance with applicable law (typically 5–7 years). Financial records are subject to separate retention obligations that may override standard deletion requests.

Pricing Transparency
All prices displayed include applicable taxes (VAT, GST) as required by law. We do not engage in dynamic pricing based on personal characteristics without disclosure.`,
  },

  "Healthcare Clinic": {
    id: "industry-healthcare",
    title: "Industry Supplement: Health & Medical Data Processing",
    content: `Health information is among the most sensitive categories of personal data. As a healthcare provider, we process it under the following heightened obligations:

Legal Classification of Health Data
Your health and medical data is classified as:
• "Special Category Data" under GDPR Article 9 (EU/UK) — requires explicit consent or other specific legal basis
• "Sensitive Personal Data" under India DPDP Act 2023 § 9 — requires additional safeguards
• "Protected Health Information (PHI)" under HIPAA (USA) — subject to Privacy Rule and Security Rule
• "Special Personal Information" under POPIA (South Africa) — explicit consent required

Lawful Basis for Health Data Processing
We process health data only under the following lawful bases:
• Explicit consent obtained separately from general consent
• Necessary for the provision of medical treatment or healthcare management
• Legal obligation (e.g., mandatory reporting to public health authorities)
• Vital interests where the data subject is physically or legally incapable of giving consent

Data Protection Impact Assessment (DPIA)
In compliance with GDPR Article 35 and equivalent laws, we conduct a DPIA before commencing any new health data processing activity. DPIA results are reviewed annually.

Healthcare Security Measures
In addition to standard security measures, we implement:
• HIPAA Security Rule safeguards (administrative, physical, technical)
• Business Associate Agreements (BAAs) with all health data processors
• Access logging and audit trails for all health data access
• Staff training on healthcare privacy obligations

Breach Notification — HIPAA
In the event of a breach of unsecured PHI, we notify: affected individuals within 60 days of discovery; the HHS Office for Civil Rights annually (or immediately for breaches of 500+ individuals); prominent media in affected states for large breaches.`,
  },

  "School / Educational Institute": {
    id: "industry-education",
    title:
      "Industry Supplement: Children's Data & Educational Records Protection",
    content: `Educational institutions process highly sensitive data about students, many of whom are minors. We apply heightened protections in accordance with applicable laws:

Age-Specific Protections
• Under 13 (COPPA, USA): We obtain verifiable parental consent before collecting personal information from children under 13. Parents may review, request deletion, or withdraw consent.
• Under 13–16 (GDPR/UK): Depending on EU member state law, the age of digital consent ranges from 13 to 16 years. We apply the strictest applicable standard. Parental consent is obtained for users below this threshold.
• India (DPDP 2023 § 9): We obtain verifiable parental consent before processing personal data of children and do not process data in a manner that causes harm to children.

Educational Records (FERPA — USA)
For students in US educational institutions, educational records are protected under FERPA. We:
• Maintain strict access controls on educational records
• Do not disclose records without written consent from eligible students or parents
• Comply with the annual notification requirements

Prohibition on Behavioural Advertising to Minors
We do not engage in behavioural advertising, targeted marketing, or profiling of children or students based on their personal data, in accordance with:
• GDPR Recital 38 and Article 8
• UK Children's Code (Age Appropriate Design Code)
• COPPA (USA)
• India DPDP § 9

Parental Rights
Parents and guardians of students under the age of consent may:
• Request access to their child's personal data
• Request correction or deletion
• Withdraw consent for specific processing activities
Contact: ${"{contactEmail}"}`,
  },

  "Mobile App": {
    id: "industry-mobileapp",
    title: "Industry Supplement: Mobile Application Data Processing",
    content: `Mobile applications collect additional data categories through device features. Our app processes the following:

Device Permissions
We request only the permissions necessary for the app's core functionality:
• Location (only when feature requires it): Your location data is processed with your explicit consent and only for the duration necessary. You can revoke location permission at any time through your device settings.
• Camera/Microphone: Accessed only when you actively use features requiring these. We do not record in the background.
• Device Identifiers: We collect device identifiers (advertising ID, device fingerprint) only with your consent and for the purposes disclosed.

App Store Privacy Requirements
Our app complies with:
• Apple App Store Privacy Policy requirements and App Privacy Labels
• Google Play Store Data Safety requirements

Push Notifications
Push notifications are sent only with your explicit opt-in consent. You can manage notification preferences in the app settings or your device notification settings at any time.

Advertising SDK Disclosure
Our app uses the following advertising or analytics SDKs: [list your SDKs]. Each SDK is subject to its own privacy policy. We ensure all third-party SDKs comply with applicable laws and our data processing requirements.`,
  },

  "SaaS Product": {
    id: "industry-saas",
    title: "Industry Supplement: SaaS & Cloud Service Data Processing",
    content: `As a Software-as-a-Service (SaaS) provider, we act as both a data controller (for our own user data) and a data processor (for data you upload to our platform on behalf of your users).

Data Controller vs. Data Processor
• For account data, billing, and platform usage: we are the Data Controller
• For customer data you upload or generate using our platform: we are the Data Processor, acting on your documented instructions under a Data Processing Agreement (DPA)

Data Processing Agreement (DPA)
Customers with paid subscriptions who require a DPA for GDPR compliance may request our standard DPA at ${"{contactEmail}"}. Our DPA includes:
• Standard Contractual Clauses (SCCs) for international transfers
• Details of our sub-processors
• Security obligations
• Breach notification procedures

Sub-Processor Transparency
We maintain an up-to-date list of sub-processors used in delivering our services. Material changes to our sub-processor list are communicated with 30 days' advance notice.

Security Certifications
Our platform security aligns with: ISO 27001 (Information Security Management), ISO 27701 (Privacy Information Management), SOC 2 Type II, and NIST Cybersecurity Framework.

Data Segregation
Customer data is logically segregated and not accessible to other customers. We do not use one customer's data to train models or improve services for other customers without express consent.`,
  },

  "Digital Agency": {
    id: "industry-agency",
    title: "Industry Supplement: Digital Agency — Acting as Data Processor",
    content: `Digital agencies frequently process client data and end-user data on behalf of clients. We clarify our roles and obligations:

When We Act as Data Processor
When processing personal data on behalf of clients, we:
• Act only on documented client instructions
• Ensure all staff involved are bound by confidentiality
• Implement appropriate security measures
• Assist clients in fulfilling data subject rights requests
• Delete or return all personal data upon termination of the contract
• Make available all information necessary to demonstrate compliance

Sub-Processing
We engage sub-processors only with client authorisation (either general or specific). We maintain a current list of sub-processors and notify clients of any intended changes.

Client Responsibility
Clients remain the Data Controller for data they provide to us. Clients are responsible for ensuring they have a lawful basis for the personal data they share with us.`,
  },
};

// ─── Standard Contractual Clauses (SCC) for cross-border transfers ────────────

function buildSccClause(inputs: DocumentInputs): ClauseSection {
  return {
    id: "scc-cross-border",
    title: "International Data Transfers — Standard Contractual Clauses",
    content: `${inputs.businessName || "[Business Name]"} may transfer personal data to countries outside your home country or the European Economic Area (EEA). We ensure all such transfers are protected by adequate safeguards:

Transfer Mechanisms We Use
• EU Standard Contractual Clauses (SCCs): For transfers from the EU/EEA to third countries, we rely on the 2021 EU SCCs (Commission Implementing Decision 2021/914) as the primary transfer mechanism.
• UK International Data Transfer Agreement (IDTA): For transfers from the UK, we use the UK IDTA (effective 21 March 2022) or UK Addendum to EU SCCs.
• EU-US Data Privacy Framework (DPF): Where applicable, we transfer data to US organisations certified under the EU-US DPF (effective July 2023), the UK Extension to DPF, and the Swiss-US DPF.
• Adequacy Decisions: For transfers to countries with an EU adequacy decision (including UK, Switzerland, Japan, Canada, New Zealand, Israel, South Korea, and Argentina), we rely on the adequacy finding.

Transfer Impact Assessments (TIAs)
Where required following the Schrems II ruling (C-311/18), we conduct Transfer Impact Assessments before transferring personal data to countries without adequate protection, and implement supplementary measures where necessary.

Data Localisation Requirements
For users in jurisdictions with data localisation requirements (including China under PIPL/DSL, Russia, India for certain categories), we ensure data is stored locally or transfer only where expressly permitted by applicable law.

Copies of Transfer Mechanisms
You may request a copy of the relevant transfer mechanism documents by contacting us at ${inputs.contactEmail || "[Contact Email]"}.`,
  };
}

// ─── Data Breach Response Template ───────────────────────────────────────────

export function buildDataBreachDocument(
  inputs: DocumentInputs,
): MergedDocument {
  const biz = inputs.businessName || "[Business Name]";
  const email = inputs.contactEmail || "[Contact Email]";
  const date = currentDate();

  const sections: ClauseSection[] = [
    buildLegalDisclaimerSection(),
    {
      id: "breach-0-principles",
      title: "0. Global Compliance Statement",
      content: buildGlobalComplianceStatement(inputs).content,
    },
    {
      id: "breach-1-intro",
      title: "1. Purpose of This Template",
      content: `This Data Breach Notification template enables ${biz} to communicate a personal data security incident to affected individuals and regulatory authorities in a structured, legally compliant manner.\n\nThis document should be completed immediately upon discovery of a confirmed or suspected breach. Legal counsel should be consulted before sending notifications.`,
    },
    {
      id: "breach-2-incident",
      title: "2. Incident Summary",
      content: `Incident Reference Number: [e.g., INC-2025-001]\nDate & Time of Discovery: [DD/MM/YYYY HH:MM]\nDate & Time of Incident (if known): [DD/MM/YYYY]\nIncident Type: [Ransomware / Unauthorised access / Accidental disclosure / Lost device / Insider threat / Other]\nSystems Affected: [List affected systems, databases, or services]\nData Categories Involved: [e.g., names, email addresses, payment data, health data]\nEstimated Number of Affected Individuals: [Number or "Under investigation"]\nGeographic Scope: [List affected countries/regions]\n\nIncident Description:\n[Provide a clear, factual description of what occurred, how the breach was discovered, and what data was involved.]`,
    },
    {
      id: "breach-3-timelines",
      title: "3. Regulatory Notification Timelines",
      content: `The following mandatory notification deadlines apply based on the jurisdictions of affected individuals:

EU GDPR (Regulation 2016/679 — Article 33/34):
• Authority notification: Within 72 hours of becoming aware of the breach (to the lead DPA)
• Individual notification: Without undue delay if high risk to rights and freedoms
• Authority: Your lead EU Data Protection Authority (e.g., CNIL, BfDI, ICO)

UK GDPR (Data Protection Act 2018 — Section 67):
• Authority notification: Within 72 hours (to the ICO)
• Individual notification: Without undue delay if high risk
• Authority: ICO — incident.report@ico.org.uk | 0303 123 1113

India DPDP Act 2023 (CERT-IN + DPDP):
• CERT-IN: Within 6 hours of discovery (for specified incidents under CERT-IN Directions 2022)
• Data Principal notification: Promptly as specified by the Data Protection Board
• Authority: CERT-IN — incident@cert-in.org.in | +91-1800-11-4949

Brazil LGPD (Art. 48):
• ANPD and affected individuals: Within a reasonable timeframe (guidance suggests 72 hours for high-risk)
• Authority: ANPD — www.gov.br/anpd

Australia (Privacy Act 1988 — NDB Scheme):
• OAIC notification: As soon as practicable after determining eligible data breach
• Individual notification: As soon as practicable
• Authority: OAIC — www.oaic.gov.au

USA — HIPAA (45 CFR § 164.400–414):
• HHS OCR: Within 60 days of discovery (annual report for <500 individuals)
• Individual notification: Within 60 days of discovery
• Media notification: Required for breaches affecting 500+ individuals in a state

Singapore PDPA (§ 26C):
• PDPC: Within 3 business days of becoming aware of notifiable breach
• Individual notification: Within 3 business days if significant harm
• Authority: PDPC — pdpc.gov.sg

South Africa POPIA (§ 22):
• Information Regulator: As soon as reasonably possible
• Data subject notification: As soon as reasonably possible
• Authority: inforeg@justice.gov.za`,
    },
    {
      id: "breach-4-authority-notification",
      title: "4. Authority Notification Template",
      content: `[To be sent to relevant regulatory authority]

Subject: Personal Data Breach Notification — [Incident Ref] — ${biz}

Dear [Authority Name],

We hereby notify you of a personal data breach in accordance with [applicable law and article].

Organisation: ${biz}
Data Protection Contact / DPO: [Name] | ${email}
Date of Notification: ${date}
Date Breach Discovered: [Date]
Estimated Date of Breach: [Date or "Under investigation"]

1. Nature of the Breach
[Describe: type of breach, circumstances, and how it was discovered]

2. Categories and Approximate Number of Data Subjects Concerned
Data subjects: [Number or estimate]
Categories of individuals: [e.g., customers, employees, patients]

3. Categories and Approximate Number of Personal Data Records
[e.g., 5,000 records including names, email addresses, and hashed passwords]

4. Likely Consequences of the Breach
[Describe the likely consequences for affected individuals — e.g., risk of phishing, identity theft, financial harm]

5. Measures Taken or Proposed
a) To address the breach: [e.g., system shutdown, password reset, forensic investigation initiated]
b) To mitigate adverse effects: [e.g., credit monitoring offered, individuals notified, two-factor authentication enforced]

6. DPO or Contact Point
[Name], [Title]
${email}
[Phone number]

We will provide further information as the investigation progresses. A full incident report will be submitted by [date].

Yours sincerely,
[Authorised signatory]
${biz}`,
    },
    {
      id: "breach-5-individual-notification",
      title: "5. Individual Notification Template",
      content: `[To be sent to affected individuals]

Subject: Important Security Notice — Your Data at ${biz}

Dear [First Name],

We are writing to inform you of a security incident that may have affected some of your personal information held by ${biz}.

What Happened
On [date], we discovered that [brief, plain-language description of the incident]. We immediately [describe initial response actions].

What Information Was Involved
The following types of information may have been affected:
[List specific data categories — e.g., name, email address, account information, but NOT specific values]

What We Are Doing
We have taken the following steps:
• [Immediate containment measures]
• [Investigation launched / external security firm engaged]
• [Notified relevant regulatory authorities]
• [Corrective technical measures implemented]

What You Can Do
We recommend that you take the following precautions:
• [Change your password at ${inputs.websiteUrl || "[Website URL]"} immediately]
• [Enable two-factor authentication if available]
• [Monitor your accounts for suspicious activity]
• [Be alert to phishing emails that may reference this incident]
• [Contact your bank if payment information was involved]

Free Credit Monitoring (if applicable)
We are offering affected individuals [X months] of free credit monitoring. To enrol, [instructions].

Contact Us
If you have questions or concerns about this incident, please contact:
Data Protection Contact: [Name]
Email: ${email}
Phone: [Phone number]
Hours: [Business hours]

We sincerely apologise for any concern or inconvenience this may cause. Protecting your personal information is our highest priority.

Yours sincerely,
[CEO / DPO / Privacy Team]
${biz}`,
    },
    {
      id: "breach-6-internal-checklist",
      title: "6. Internal Response Checklist",
      content: `Upon discovery of a suspected breach, complete the following checklist:

IMMEDIATE (0–6 hours):
☐ Confirm breach and scope (is this a real breach or false positive?)
☐ Contain the breach (revoke access, isolate systems)
☐ Preserve evidence (logs, screenshots) — do NOT delete
☐ Notify CISO/DPO/Privacy Team immediately
☐ Open incident record with timestamp
☐ Engage external forensic firm if needed
☐ Notify cyber insurance provider

SHORT-TERM (6–72 hours):
☐ Assess risk to data subjects (high/medium/low)
☐ Determine notification obligations per jurisdiction
☐ Draft authority notification(s) — deadline 72 hours for GDPR/UK
☐ Notify senior management and legal counsel
☐ Prepare holding statement for customer service team
☐ Document all actions with timestamps

72 HOURS+:
☐ Send individual notifications if high risk
☐ Implement long-term corrective measures
☐ Conduct full root cause analysis
☐ Update incident log
☐ Review and update security measures
☐ Staff training on lessons learned
☐ Submit full incident report to authorities as required
☐ Close incident record with all documentation`,
    },
  ];

  return {
    title: "Data Breach Notification Template",
    effectiveDate: date,
    sections,
    frameworkName:
      "GDPR Art. 33/34 · UK GDPR · India DPDP · LGPD · PDPA · POPIA · HIPAA",
    frameworkVersion: "1.0",
    lastReviewed: "2025-01-15",
  };
}

// ─── Legal Disclaimer Section ─────────────────────────────────────────────────

function buildLegalDisclaimerSection(): ClauseSection {
  return {
    id: "legal-disclaimer",
    title: "Important Legal Disclaimer",
    content:
      "This document was generated by PrivacyLaw AutoGen as a template for informational purposes only. It does NOT constitute legal advice and should not be relied upon as such. Laws vary by jurisdiction and change over time. You should consult a qualified data protection lawyer or legal counsel to review this document before publishing it on your website or using it in your business operations. PrivacyLaw AutoGen and its operators accept no liability for any use of this generated document.",
  };
}

// ─── Main merge function ──────────────────────────────────────────────────────

export function mergeDocument(inputs: DocumentInputs): MergedDocument {
  const frameworks =
    inputs.selectedFrameworks?.length > 0
      ? inputs.selectedFrameworks
      : ["gdpr"];

  const language = (inputs.outputLanguage || "en") as SupportedLanguage;

  // Build disclaimer section (always first)
  const disclaimerSection = buildLegalDisclaimerSection();

  // Build prepended global section
  const globalSection = buildGlobalComplianceStatement(inputs);
  const processedGlobal = processSection(globalSection, inputs, language);

  // Build industry-specific clause
  const industryClause = INDUSTRY_CLAUSES[inputs.businessType] || null;
  const processedIndustry = industryClause
    ? processSection(industryClause, inputs, language)
    : null;

  // Build SCC clause if cross-border transfers
  const sccClause = inputs.transfersDataCrossBorder
    ? buildSccClause(inputs)
    : null;
  const processedScc = sccClause
    ? processSection(sccClause, inputs, language)
    : null;

  const titleMap: Record<SupportedLanguage, string> = {
    en: "Privacy Policy",
    hi: "गोपनीयता नीति",
    de: "Datenschutzerklärung",
    fr: "Politique de confidentialité",
  };

  if (frameworks.length === 1) {
    const frameworkId = frameworks[0];
    const countryData = FRAMEWORK_REGISTRY[frameworkId] || gdprData;
    const sections: ClauseSection[] = [disclaimerSection, processedGlobal];
    for (const s of countryData.sections) {
      sections.push(processSection(s, inputs, language));
    }
    if (processedIndustry) sections.push(processedIndustry);
    if (processedScc) sections.push(processedScc);

    return {
      title: titleMap[language] || "Privacy Policy",
      effectiveDate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      sections,
      frameworkName: countryData.frameworkName,
      frameworkVersion: countryData.version,
      lastReviewed: countryData.lastReviewed,
    };
  }

  // Multi-framework merge
  const allSections: ClauseSection[] = [disclaimerSection, processedGlobal];
  let primaryVersion = "";
  let primaryReviewed = "";

  frameworks.forEach((frameworkId, idx) => {
    const countryData = FRAMEWORK_REGISTRY[frameworkId] || gdprData;
    if (idx === 0) {
      primaryVersion = countryData.version;
      primaryReviewed = countryData.lastReviewed;
    }

    allSections.push({
      id: `framework-header-${frameworkId}`,
      title: `— ${countryData.frameworkName} Compliance —`,
      content: `The following sections apply to ${countryData.name} under ${countryData.frameworkName}.`,
    });

    for (const s of countryData.sections) {
      allSections.push(processSection(s, inputs, language));
    }
  });

  if (processedIndustry) allSections.push(processedIndustry);
  if (processedScc) allSections.push(processedScc);

  return {
    title: titleMap[language] || "Privacy Policy",
    effectiveDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    sections: allSections,
    frameworkName: frameworks
      .map((f) => FRAMEWORK_REGISTRY[f]?.frameworkName || f)
      .join(" + "),
    frameworkVersion: primaryVersion,
    lastReviewed: primaryReviewed,
  };
}

export function getFrameworkVersions(
  frameworkIds: string[],
): Record<string, string> {
  const versions: Record<string, string> = {};
  for (const id of frameworkIds) {
    const data = FRAMEWORK_REGISTRY[id];
    if (data) versions[id] = data.version;
  }
  return versions;
}
