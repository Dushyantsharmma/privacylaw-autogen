import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ScanLine,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onNavigate?: (
    page: "landing" | "generator" | "dashboard" | "inspector" | "blog",
  ) => void;
}

const STATS = [
  { value: "25+", label: "Compliance Frameworks", icon: Globe },
  { value: "170+", label: "Countries Covered", icon: CheckCircle2 },
  { value: "13", label: "Business Types", icon: TrendingUp },
  { value: "60+", label: "Legal Checks", icon: Zap },
];

const FRAMEWORKS = [
  "GDPR",
  "UK DPA 2018",
  "India DPDP",
  "CCPA / CPRA",
  "HIPAA",
  "PIPEDA",
  "LGPD",
  "PDPA (SG)",
  "APPI (JP)",
  "Australia",
  "POPIA (ZA)",
  "PIPL (CN)",
  "PIPA (KR)",
  "UAE PDPL",
  "KVKK (TR)",
  "NDPR (NG)",
  "PDPA (TH)",
  "nFADP (CH)",
  "Argentina",
  "Mexico",
];

export function HeroSection({ onGetStarted, onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden hero-mesh noise-overlay">
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.85 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 rounded-full blur-3xl bg-blue-500 pointer-events-none" />

      <div className="relative container mx-auto px-4 pt-20 pb-8 md:pt-28 md:pb-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top badge */}
          <div className="flex justify-center mb-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              <span className="text-xs font-semibold text-blue-200 tracking-wide uppercase">
                No-Code · Country Auto Mode · Instant Export
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[2.6rem] md:text-[3.5rem] lg:text-[4.2rem] font-extrabold tracking-tight mb-5 text-balance leading-[1.1] text-white">
            Generate{" "}
            <span className="gradient-text-blue">Privacy Policies</span>
            <br className="hidden sm:block" />
            That Pass Legal Review
          </h1>

          <p className="text-base md:text-lg text-slate-300/80 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Auto-build GDPR, DPDP, CCPA, HIPAA, PIPA, KVKK & 20+ more compliance
            documents for 170+ countries, tailored to your business type — in
            under 2 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 h-12 text-[0.95rem] shadow-xl shadow-blue-600/30 transition-all duration-200 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Generate Your Policy — Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-white/15 text-white hover:bg-white/8 hover:border-white/25 font-semibold px-8 h-12 text-[0.95rem] backdrop-blur-sm transition-all duration-200"
            >
              View Pricing
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => onNavigate?.("inspector")}
              className="border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/8 hover:border-emerald-400/40 font-semibold px-7 h-12 text-[0.95rem] gap-2 transition-all duration-200"
            >
              <ScanLine className="h-4 w-4" />
              AI Privacy Inspector
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-10">
            {[
              "GDPR Article 6 Compliant",
              "7-day money-back guarantee",
              "Client-side — zero data sent",
              "Instant PDF / DOC export",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-blue-400/70" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/8 bg-white/[0.03] backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center py-3 px-4 gap-1"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-blue-400" />
                  <span className="text-2xl font-bold text-white tracking-tight">
                    {value}
                  </span>
                </div>
                <span className="text-xs text-slate-400 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frameworks ticker */}
      <div className="relative border-t border-white/8 bg-black/20 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0">
              Supported frameworks
            </span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {FRAMEWORKS.map((fw) => (
                <Badge
                  key={fw}
                  variant="outline"
                  className="border-white/10 bg-white/5 text-slate-300 text-[10px] px-2 py-0.5 font-medium"
                >
                  {fw}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
