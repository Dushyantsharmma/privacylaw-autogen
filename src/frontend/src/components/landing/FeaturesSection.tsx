import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Building2,
  CheckSquare,
  Download,
  Eye,
  Globe,
  Lock,
  ScanLine,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "170+ Country Coverage",
    description:
      "Automatically loads country-specific legal clauses for 170+ jurisdictions — GDPR, UK DPA 2018, India DPDP 2023, CCPA, HIPAA, LGPD, PIPA, KVKK, and 25+ more frameworks.",
    badge: "Core Feature",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: Building2,
    title: "13 Business Types",
    description:
      "E-Commerce, Healthcare, School, SaaS, Blog, Agency, Mobile App, Marketplace, Fintech, Driving School, Travel, Consulting, Legal Services — each adds sector-specific clauses.",
    badge: "Smart Clauses",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
  },
  {
    icon: Eye,
    title: "Live Two-Column Preview",
    description:
      "See your policy update in real time as you type. Independent scrolling panel gives a seamless, professional editing experience.",
    badge: "Real-Time",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
  },
  {
    icon: Download,
    title: "4 Export Formats",
    description:
      "PDF (client-side via jsPDF), Word .doc, plain .txt, or copy to clipboard. Your logo on every export with white-label branding.",
    badge: "Export",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/50",
  },
  {
    icon: CheckSquare,
    title: "Compliance Checklist",
    description:
      "Dynamic checklist evaluates your configuration in real time — green checkmarks for satisfied requirements, warnings for gaps.",
    badge: "Compliance",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    icon: BarChart3,
    title: "Risk Score Indicator",
    description:
      "Client-side risk score (Low / Medium / High) calculated from missing fields, high-risk configurations, and compliance results.",
    badge: "Risk Analysis",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
  },
  {
    icon: Zap,
    title: "JSON Template Engine",
    description:
      "Country + business type clauses merged dynamically. Update law versions by editing a JSON file — all users get the latest instantly.",
    badge: "Extensible",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
  },
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    description:
      "Full dark mode. Your data never leaves your browser — all generation is 100% client-side. No server needed to create your legal documents.",
    badge: "Privacy-First",
    color: "text-slate-600 dark:text-slate-400",
    bg: "bg-slate-100 dark:bg-slate-800/50",
  },
  {
    icon: ScanLine,
    title: "AI Website Inspector",
    description:
      "Scan any website for GDPR/CCPA/DPDP/PIPA violations — auto-detects country from TLD, checks 60+ rules, shows fine exposure and fix recommendations.",
    badge: "AI Powered",
    color: "text-primary",
    bg: "bg-primary/8 dark:bg-primary/15",
  },
];

const COMPLIANCE_FRAMEWORKS = [
  {
    region: "🇪🇺 Europe (EU/EEA)",
    frameworks: ["GDPR", "ePrivacy Directive", "NIS2", "AI Act", "DSA"],
    color: "border-blue-200 dark:border-blue-800",
    pill: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
  },
  {
    region: "🇬🇧 United Kingdom",
    frameworks: ["UK GDPR", "Data Protection Act 2018", "PECR"],
    color: "border-indigo-200 dark:border-indigo-800",
    pill: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
  },
  {
    region: "🇮🇳 India",
    frameworks: [
      "DPDP Act 2023",
      "IT Act 2000",
      "CERT-IN Rules",
      "RBI Guidelines",
    ],
    color: "border-orange-200 dark:border-orange-800",
    pill: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
  },
  {
    region: "🇺🇸 United States",
    frameworks: ["CCPA / CPRA", "HIPAA", "COPPA", "FERPA", "GLBA", "CAN-SPAM"],
    color: "border-red-200 dark:border-red-800",
    pill: "bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300",
  },
  {
    region: "🌏 East & SE Asia",
    frameworks: [
      "PIPL (China)",
      "PIPA (Korea)",
      "PDPA (Thailand)",
      "PDP Law (Indonesia)",
      "DPA (Philippines)",
    ],
    color: "border-rose-200 dark:border-rose-800",
    pill: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
  },
  {
    region: "🇯🇵 Japan & 🇸🇬 Singapore",
    frameworks: ["APPI (Japan)", "PDPA (Singapore)"],
    color: "border-violet-200 dark:border-violet-800",
    pill: "bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
  },
  {
    region: "🌍 Africa",
    frameworks: [
      "POPIA (South Africa)",
      "NDPR / NDPA (Nigeria)",
      "DPA (Kenya)",
    ],
    color: "border-amber-200 dark:border-amber-800",
    pill: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  },
  {
    region: "🌐 Middle East",
    frameworks: ["PDPL (UAE)", "PDPL (Saudi Arabia)", "PPL (Israel)"],
    color: "border-yellow-200 dark:border-yellow-800",
    pill: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/60 dark:text-yellow-300",
  },
  {
    region: "🌎 Latin America",
    frameworks: ["LGPD (Brazil)", "LFPDPPP (Mexico)", "PDPL (Argentina)"],
    color: "border-green-200 dark:border-green-800",
    pill: "bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-300",
  },
  {
    region: "🌏 Oceania",
    frameworks: [
      "Privacy Act 2020 (NZ)",
      "Privacy Act 1988 (Australia)",
      "APPs",
    ],
    color: "border-teal-200 dark:border-teal-800",
    pill: "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300",
  },
  {
    region: "🇨🇦 Canada & 🇨🇭 Switzerland",
    frameworks: ["PIPEDA", "CASL", "nFADP / revDSG (Switzerland)"],
    color: "border-cyan-200 dark:border-cyan-800",
    pill: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300",
  },
  {
    region: "🌐 Global Standards",
    frameworks: ["ISO 27001", "ISO 27701", "SOC 2", "PCI DSS", "NIST", "HIPAA"],
    color: "border-slate-200 dark:border-slate-700",
    pill: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
];

const INDUSTRY_COMPLIANCE = [
  {
    industry: "🏫 Schools",
    laws: ["GDPR / DPDP", "COPPA", "FERPA", "Child consent laws"],
    color:
      "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
  },
  {
    industry: "🚗 Driving Schools",
    laws: [
      "GDPR / DPDP",
      "Child data consent",
      "PCI DSS",
      "Licence regulations",
    ],
    color:
      "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
  },
  {
    industry: "🛍 Ecommerce",
    laws: ["GDPR / CCPA", "PCI DSS", "Consumer protection", "Cookie law"],
    color:
      "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800",
  },
  {
    industry: "✈ Travel",
    laws: ["GDPR / CCPA", "IATA PNR rules", "API requirements", "PCI DSS"],
    color:
      "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800",
  },
  {
    industry: "🏥 Hospitals",
    laws: ["HIPAA", "GDPR health rules", "ISO 27799", "HL7 / FHIR"],
    color:
      "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800",
  },
  {
    industry: "☁ SaaS",
    laws: ["GDPR", "SOC 2", "ISO 27001", "CCPA", "DPA obligations"],
    color:
      "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
  },
  {
    industry: "💰 Fintech",
    laws: ["PCI DSS", "AML / KYC", "FATF", "PSD2 (EU)", "GLBA (US)"],
    color:
      "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
  },
  {
    industry: "💼 Consulting",
    laws: [
      "GDPR / local law",
      "Client confidentiality",
      "AML (financial)",
      "SRA (legal)",
    ],
    color:
      "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700",
  },
];

export function FeaturesSection() {
  return (
    <>
      {/* Features grid */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
              Full Feature Set
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Everything You Need for{" "}
              <span className="text-primary">Global Privacy Compliance</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              A complete no-code compliance suite — country-specific legal
              clauses for 170+ countries, real-time preview, AI inspection, and
              professional export in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="card-hover border-border/50 bg-card group"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${feature.bg} transition-transform duration-200 group-hover:scale-110`}
                      >
                        <Icon className={`h-4 w-4 ${feature.color}`} />
                      </div>
                      <span
                        className={`mt-0.5 text-[10px] font-bold uppercase tracking-wider ${feature.color} opacity-80`}
                      >
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global compliance frameworks */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
              Global Coverage
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              25+ Compliance Frameworks.{" "}
              <span className="text-primary">
                170+ Countries. One Platform.
              </span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Select your country and the tool automatically loads the exact
              legal clauses that apply — no guesswork, no manual research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {COMPLIANCE_FRAMEWORKS.map((group) => (
              <div
                key={group.region}
                className={`rounded-xl border-2 ${group.color} bg-card p-4`}
              >
                <div className="font-semibold text-sm mb-3">{group.region}</div>
                <div className="flex flex-wrap gap-1.5">
                  {group.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${group.pill}`}
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">170+</span>
              <span className="text-xs text-muted-foreground mt-1">
                Countries Covered
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">25+</span>
              <span className="text-xs text-muted-foreground mt-1">
                Legal Frameworks
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">13</span>
              <span className="text-xs text-muted-foreground mt-1">
                Business Types
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">4</span>
              <span className="text-xs text-muted-foreground mt-1">
                Document Types
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry compliance matrix */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
              Industry Compliance
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              Every Business Type.{" "}
              <span className="text-primary">Every Required Law.</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              The platform knows which laws apply to your sector and
              automatically includes the right clauses for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {INDUSTRY_COMPLIANCE.map((item) => (
              <div
                key={item.industry}
                className={`rounded-xl border ${item.color} p-4`}
              >
                <div className="font-semibold text-sm mb-3">
                  {item.industry}
                </div>
                <ul className="space-y-1">
                  {item.laws.map((law) => (
                    <li
                      key={law}
                      className="text-[11px] text-muted-foreground flex items-start gap-1.5"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      {law}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            Meeting GDPR + ISO 27001 + PCI DSS + your local privacy law aligns
            your business with 90% of global data regulations.
          </p>
        </div>
      </section>
    </>
  );
}
