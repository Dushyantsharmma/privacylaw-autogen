import type { BusinessTypeData } from "../types/documentTypes";

const businessTypes: BusinessTypeData[] = [
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    description: "Online retail stores and marketplaces",
    additionalSections: [
      {
        id: "ecommerce-data",
        title: "E-Commerce Specific Data Processing",
        content:
          "As an e-commerce business, we collect and process additional personal data necessary for the operation of our online store, including order details, purchase history, billing and shipping addresses, payment method information, and transaction records.",
        subsections: [
          {
            id: "ecommerce-orders",
            title: "Order and Transaction Data",
            content:
              "We collect order details, purchase history, billing and shipping addresses, payment method information (processed securely by our payment processor), and transaction records. This data is necessary for fulfilling your orders and maintaining accurate financial records.",
          },
          {
            id: "ecommerce-account",
            title: "Customer Account Data",
            content:
              "If you create an account, we store your account credentials, saved addresses, wish lists, and order history to provide a personalized shopping experience.",
          },
          {
            id: "ecommerce-marketing",
            title: "Marketing and Preferences",
            content:
              "With your consent, we may send promotional emails, newsletters, and personalized product recommendations based on your browsing and purchase history. You can unsubscribe at any time.",
          },
          {
            id: "ecommerce-returns",
            title: "Returns and Refunds",
            content:
              "We retain transaction data for the period required to process returns, refunds, and warranty claims, and to comply with consumer protection laws.",
          },
        ],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Clinic",
    icon: "🏥",
    description: "Medical clinics, hospitals, and health service providers",
    additionalSections: [
      {
        id: "healthcare-data",
        title: "Healthcare-Specific Data Processing",
        content:
          "As a healthcare provider, we process special category personal data (health data) in accordance with applicable data protection laws and healthcare regulations.",
        subsections: [
          {
            id: "healthcare-records",
            title: "Patient Health Records",
            content:
              "We collect and process patient health information including medical history, diagnoses, treatment records, prescriptions, test results, and clinical notes. This data is processed under the lawful basis of healthcare provision and, where required, explicit consent.",
          },
          {
            id: "healthcare-appointments",
            title: "Appointment and Scheduling Data",
            content:
              "We collect appointment details, scheduling preferences, and attendance records to manage your healthcare appointments and send reminders.",
          },
          {
            id: "healthcare-processors",
            title: "Healthcare Service Providers",
            content:
              "We may share your health data with other healthcare providers involved in your care, health insurance providers (with your consent), and regulatory bodies as required by law.",
          },
          {
            id: "healthcare-retention",
            title: "Medical Records Retention",
            content:
              "Medical records are retained for the minimum period required by applicable healthcare regulations and professional standards, which may exceed our standard data retention period.",
          },
        ],
      },
    ],
    childrenDataClause: {
      id: "healthcare-children",
      title: "Processing of Minor Patients' Data",
      content:
        "For patients under the age of majority, we obtain consent from a parent or legal guardian before processing health data. We maintain records of parental/guardian consent and ensure that minors' health data is processed with additional safeguards.",
    },
  },
  {
    id: "educational",
    name: "School / Educational Institute",
    icon: "🎓",
    description: "Schools, universities, and educational platforms",
    additionalSections: [
      {
        id: "educational-data",
        title: "Educational Institution Data Processing",
        content:
          "As an educational institution, we process personal data of students, parents/guardians, and staff in accordance with applicable data protection laws and educational regulations.",
        subsections: [
          {
            id: "educational-student",
            title: "Student Records",
            content:
              "We collect and process student enrollment data, academic records, attendance, assessment results, behavioral records, and educational progress information.",
          },
          {
            id: "educational-parent",
            title: "Parent and Guardian Data",
            content:
              "We collect contact information and relevant personal data of parents and guardians for communication purposes, emergency contacts, and to fulfill our duty of care obligations.",
          },
          {
            id: "educational-providers",
            title: "Educational Service Providers",
            content:
              "We may share student data with educational technology providers, examination boards, regulatory authorities, and other educational institutions as necessary for educational purposes.",
          },
        ],
      },
    ],
    childrenDataClause: {
      id: "educational-children",
      title: "Processing of Children's Data",
      content:
        "A significant portion of our data subjects are children. We process children's personal data with particular care and in accordance with applicable laws. For students under the applicable age of consent, we obtain parental or guardian consent before processing personal data beyond what is strictly necessary for educational purposes.",
    },
  },
  {
    id: "saas",
    name: "SaaS Product",
    icon: "💻",
    description: "Software-as-a-Service applications and platforms",
    additionalSections: [
      {
        id: "saas-data",
        title: "SaaS Platform Data Processing",
        content:
          "As a SaaS provider, we process personal data in connection with the provision of our software services.",
        subsections: [
          {
            id: "saas-account",
            title: "User Account and Profile Data",
            content:
              "We collect account registration information, user profiles, preferences, and settings necessary to provide and personalize our software services.",
          },
          {
            id: "saas-usage",
            title: "Usage and Telemetry Data",
            content:
              "We collect usage analytics, feature interaction data, error logs, and performance metrics to improve our software, diagnose issues, and understand how users interact with our platform.",
          },
          {
            id: "saas-subscription",
            title: "Subscription and Billing Data",
            content:
              "We process subscription plan information, billing history, and payment data (processed by our payment processor) to manage your subscription and provide invoices.",
          },
          {
            id: "saas-subprocessors",
            title: "Sub-Processors",
            content:
              "We use sub-processors to provide our SaaS services, including cloud infrastructure providers, analytics platforms, customer support tools, and communication services. A current list of our sub-processors is available upon request at {{contactEmail}}.",
          },
          {
            id: "saas-api",
            title: "API Access and Integration Data",
            content:
              "If you use our API or integrate third-party services, we may process API access logs, integration configuration data, and data exchanged through integrations.",
          },
        ],
      },
    ],
  },
  {
    id: "blog",
    name: "Blog / Content Website",
    icon: "✍️",
    description: "Blogs, news sites, and content platforms",
    additionalSections: [
      {
        id: "blog-data",
        title: "Content Website Data Processing",
        content:
          "As a content website, we process personal data in connection with our publishing and community activities.",
        subsections: [
          {
            id: "blog-subscribers",
            title: "Newsletter and Subscriber Data",
            content:
              "With your consent, we collect your email address and preferences to send newsletters, content updates, and promotional communications. You can unsubscribe at any time using the link in our emails.",
          },
          {
            id: "blog-comments",
            title: "Comments and User-Generated Content",
            content:
              "If you post comments or other user-generated content on our website, we collect your name, email address, and the content of your submission. Comments are publicly visible and may be moderated.",
          },
          {
            id: "blog-advertising",
            title: "Advertising Networks",
            content:
              "We may display advertisements on our website through third-party advertising networks. These networks may use cookies and similar technologies to serve personalized advertisements based on your browsing behavior.",
          },
        ],
      },
    ],
  },
  {
    id: "agency",
    name: "Digital Agency",
    icon: "🏢",
    description: "Marketing, design, and digital service agencies",
    additionalSections: [
      {
        id: "agency-data",
        title: "Digital Agency Data Processing",
        content:
          "As a digital agency, we process personal data in connection with our client services and business operations.",
        subsections: [
          {
            id: "agency-client",
            title: "Client and Project Data",
            content:
              "We collect client contact information, project briefs, deliverables, and communication records necessary to provide our services.",
          },
          {
            id: "agency-portfolio",
            title: "Portfolio and Case Studies",
            content:
              "With client consent, we may use project outcomes and results in our portfolio and marketing materials.",
          },
          {
            id: "agency-subcontractors",
            title: "Sub-Contractors and Partners",
            content:
              "We may engage sub-contractors and specialist partners to deliver client projects. Where personal data is shared with sub-contractors, we ensure appropriate data processing agreements are in place.",
          },
          {
            id: "agency-tools",
            title: "Third-Party Tools and Integrations",
            content:
              "We use various third-party tools for project management, communication, design, and analytics. A list of tools that may process personal data is available upon request at {{contactEmail}}.",
          },
        ],
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    icon: "📱",
    description: "iOS and Android mobile applications",
    additionalSections: [
      {
        id: "mobile-data",
        title: "Mobile Application Data Processing",
        content:
          "As a mobile application, we process personal data collected through your device in connection with the use of our app.",
        subsections: [
          {
            id: "mobile-permissions",
            title: "Device Permissions",
            content:
              "Our app may request device permissions such as camera, microphone, location, contacts, or storage access. Each permission is optional and can be revoked at any time through your device settings. We only request permissions that are necessary for specific app features.",
          },
          {
            id: "mobile-push",
            title: "Push Notifications",
            content:
              "With your consent, we may send push notifications to your device. You can opt out of push notifications at any time through your device settings.",
          },
          {
            id: "mobile-crash",
            title: "Crash Reports and Diagnostics",
            content:
              "We collect crash reports and diagnostic data to identify and fix technical issues in our app. This data may include device information, app version, and the state of the app at the time of the crash.",
          },
        ],
      },
    ],
  },
  {
    id: "fintech",
    name: "Fintech / Finance",
    icon: "💳",
    description: "Financial technology and financial service providers",
    additionalSections: [
      {
        id: "fintech-data",
        title: "Financial Services Data Processing",
        content:
          "As a financial services provider, we process personal and financial data in accordance with applicable financial regulations and data protection laws.",
        subsections: [
          {
            id: "fintech-kyc",
            title: "Identity Verification (KYC)",
            content:
              "We collect identity documents, proof of address, and other information required for Know Your Customer (KYC) compliance. This data is processed to comply with anti-money laundering (AML) regulations and FATF recommendations.",
          },
          {
            id: "fintech-transactions",
            title: "Financial Transaction Data",
            content:
              "We process transaction history, account balances, payment details, and financial records necessary to provide our financial services and comply with regulatory requirements including PCI DSS, Basel III guidelines, and applicable AML/KYC laws.",
          },
          {
            id: "fintech-credit",
            title: "Credit and Risk Assessment",
            content:
              "Where applicable, we may process credit history and financial data for risk assessment purposes. We will inform you when such processing occurs and obtain your consent where required.",
          },
          {
            id: "fintech-pci",
            title: "Payment Card Data (PCI DSS)",
            content:
              "We comply with the Payment Card Industry Data Security Standard (PCI DSS). Card payment data is processed exclusively by our PCI DSS certified payment processor ({{paymentProcessor}}). We do not store full card numbers, CVVs, or magnetic stripe data on our servers.",
          },
        ],
      },
    ],
  },
  {
    id: "driving-school",
    name: "Driving School",
    icon: "🚗",
    description:
      "Driving schools, vehicle training centres, and instructor platforms",
    additionalSections: [
      {
        id: "driving-data",
        title: "Driving School Specific Data Processing",
        content:
          "As a driving school, we process personal data of students, instructors, and guardians in connection with driving tuition services, licensing requirements, and regulatory compliance.",
        subsections: [
          {
            id: "driving-student",
            title: "Student Registration and Training Data",
            content:
              "We collect student name, contact details, date of birth, driving licence number (if existing), theory and practical test results, lesson progress records, and payment information. This data is necessary to manage your tuition, submit records to licensing authorities, and issue completion certificates.",
          },
          {
            id: "driving-license",
            title: "Licence and Regulatory Data",
            content:
              "We process driving licence data and test result information as required by national road traffic authorities. We may share relevant data with the national licensing authority as mandated by law.",
          },
          {
            id: "driving-location",
            title: "In-Vehicle Tracking and Location Data",
            content:
              "Where our vehicles are equipped with GPS tracking or dashcam systems, location and video data may be recorded for safety, insurance, and training quality purposes. Students are informed of this before lessons commence. Location data is retained for {{dataRetention}} and not shared except for insurance or legal requirements.",
          },
          {
            id: "driving-payments",
            title: "Payment and Booking Data",
            content:
              "We process payment information through our PCI DSS certified payment processor ({{paymentProcessor}}). Payment records are retained for the period required by applicable financial and tax law.",
          },
        ],
      },
    ],
    childrenDataClause: {
      id: "driving-children",
      title: "Processing of Data for Minors (Under 18)",
      content:
        "Where students are under 18 years of age, we obtain consent from a parent or legal guardian prior to collecting and processing personal data. We verify parental consent at enrolment and maintain records of such consent. Minors' data is afforded additional protections and is not used for marketing purposes without guardian consent.",
    },
  },
  {
    id: "travel",
    name: "Travel & Tourism",
    icon: "✈️",
    description:
      "Travel agencies, booking platforms, tour operators, and accommodation services",
    additionalSections: [
      {
        id: "travel-data",
        title: "Travel Industry Data Processing",
        content:
          "As a travel and tourism service provider, we process personal data necessary to fulfil bookings, comply with border and aviation regulations, and provide travel-related services.",
        subsections: [
          {
            id: "travel-booking",
            title: "Booking and Reservation Data",
            content:
              "We collect passenger name records (PNR), travel dates, destinations, seat preferences, special requirements (accessibility, dietary), contact details, and payment information to fulfil your bookings and comply with airline, hotel, and transport operator requirements.",
          },
          {
            id: "travel-passport",
            title: "Identity and Travel Document Data",
            content:
              "For international travel, we collect passport or national identity document details, nationality, and date of birth as required by airlines, immigration authorities, and the IATA Passenger Name Record (PNR) rules. This data is shared with carriers, border control agencies, and accommodation providers as legally required.",
          },
          {
            id: "travel-government",
            title: "Government and Regulatory Disclosure",
            content:
              "We are legally required to share passenger data with government authorities including immigration, customs, and law enforcement agencies. This includes compliance with IATA Timatic rules, Advance Passenger Information (API) requirements, and EU/US Passenger Name Record (PNR) Directives. Such disclosures occur regardless of your consent.",
          },
          {
            id: "travel-payments",
            title: "Payment and Financial Data",
            content:
              "Payment data is processed in compliance with PCI DSS through our certified payment processor ({{paymentProcessor}}). We retain transaction records for the period required by applicable tax and financial regulations.",
          },
          {
            id: "travel-health",
            title: "Health and Special Requirements",
            content:
              "Where you provide health or disability-related information (mobility assistance, medical conditions, dietary requirements), this sensitive personal data is processed only to fulfil your travel requirements and shared only with relevant service providers (airlines, hotels) with your consent.",
          },
        ],
      },
    ],
  },
  {
    id: "consulting",
    name: "Consulting / Professional Services",
    icon: "💼",
    description:
      "Management consultants, legal firms, accounting, and professional advisors",
    additionalSections: [
      {
        id: "consulting-data",
        title: "Professional Services Data Processing",
        content:
          "As a professional services provider, we process personal data of clients, prospective clients, and business contacts in connection with our consulting and advisory services.",
        subsections: [
          {
            id: "consulting-client",
            title: "Client and Engagement Data",
            content:
              "We collect client contact information, organisation details, engagement records, project documentation, financial data, and any personal information shared during the course of an engagement. This data is processed under the lawful basis of contract performance and legitimate business interests.",
          },
          {
            id: "consulting-confidentiality",
            title: "Confidentiality and Professional Privilege",
            content:
              "We maintain strict confidentiality of all client information. Where our services involve legal or regulatory matters, professional privilege rules may apply and are respected. Client data is not disclosed to third parties without consent except where required by law or professional regulatory bodies.",
          },
          {
            id: "consulting-subcontractors",
            title: "Sub-Contractors and Expert Networks",
            content:
              "We may engage specialist sub-contractors or expert networks to support engagement delivery. Where client personal data is shared, appropriate data processing agreements and confidentiality obligations are in place.",
          },
          {
            id: "consulting-business-contacts",
            title: "Business Contact and CRM Data",
            content:
              "We maintain records of business contacts, meeting notes, and correspondence in our CRM systems for relationship management and business development purposes. Business contacts may opt out of marketing communications at any time by contacting {{contactEmail}}.",
          },
          {
            id: "consulting-regulatory",
            title: "Regulatory and Compliance Obligations",
            content:
              "Where applicable, we may be required to collect and retain certain client data for regulatory purposes, including AML/KYC obligations (financial consultants), SRA or bar association requirements (legal consultants), or ICAEW/AICPA requirements (accounting consultants).",
          },
        ],
      },
    ],
  },
  {
    id: "marketplace",
    name: "Marketplace / Platform",
    icon: "🏪",
    description:
      "Multi-vendor marketplaces, gig platforms, and peer-to-peer platforms",
    additionalSections: [
      {
        id: "marketplace-data",
        title: "Marketplace Platform Data Processing",
        content:
          "As a marketplace platform, we process personal data of both buyers and sellers/service providers in connection with our platform services.",
        subsections: [
          {
            id: "marketplace-sellers",
            title: "Seller and Service Provider Data",
            content:
              "We collect seller registration data, business information, banking/payout details, product/service listings, ratings, and transaction records. This data is necessary for onboarding sellers, processing payouts, and maintaining platform integrity.",
          },
          {
            id: "marketplace-buyers",
            title: "Buyer and Customer Data",
            content:
              "We collect buyer account information, purchase history, payment details, delivery addresses, and reviews. This data is used to facilitate transactions and provide a personalised marketplace experience.",
          },
          {
            id: "marketplace-transactions",
            title: "Transaction and Escrow Data",
            content:
              "Transaction data including order details, payment records, and dispute history is retained for the period required by applicable consumer protection and financial regulations.",
          },
          {
            id: "marketplace-trust",
            title: "Trust and Safety",
            content:
              "We process user data including verification documents, dispute records, fraud signals, and review data to maintain platform trust and safety. Accounts may be suspended where fraud or policy violations are detected.",
          },
          {
            id: "marketplace-pci",
            title: "Payment Processing (PCI DSS)",
            content:
              "All payment card transactions are processed through our PCI DSS certified payment provider ({{paymentProcessor}}). We do not store full card numbers or CVVs. Payout data for sellers is handled in compliance with applicable financial regulations.",
          },
        ],
      },
    ],
  },
];

export default businessTypes;
