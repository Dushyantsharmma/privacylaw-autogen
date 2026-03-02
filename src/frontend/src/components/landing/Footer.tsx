import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Shield } from "lucide-react";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FRAMEWORKS_SHORT = [
  "GDPR",
  "UK DPA 2018",
  "India DPDP",
  "CCPA",
  "HIPAA",
  "LGPD",
  "PDPA",
  "APPI",
  "PIPEDA",
  "POPIA",
  "PIPL",
  "Privacy Act",
];

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    window.location.hostname || "privacylaw-autogen",
  );

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top section */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                <Shield className="h-4 w-4 text-blue-400" />
              </div>
              <span className="font-bold text-base text-white">
                PrivacyLaw AutoGen
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              The no-code privacy compliance platform trusted by freelancers,
              clinics, schools, e-commerce stores, SaaS startups, and digital
              agencies worldwide.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {FRAMEWORKS_SHORT.slice(0, 6).map((fw) => (
                <Badge
                  key={fw}
                  variant="outline"
                  className="border-slate-700 text-slate-400 text-[10px] px-2 py-0"
                >
                  {fw}
                </Badge>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                {
                  label: "Features",
                  action: () => {
                    onNavigate("landing");
                    setTimeout(
                      () =>
                        document
                          .querySelector("#features")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  },
                },
                {
                  label: "Pricing",
                  action: () => {
                    onNavigate("landing");
                    setTimeout(
                      () =>
                        document
                          .querySelector("#pricing")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  },
                },
                { label: "Generator", action: () => onNavigate("generator") },
                {
                  label: "AI Inspector",
                  action: () => onNavigate("inspector"),
                },
                {
                  label: "Blog",
                  action: () => onNavigate("blog"),
                },
                {
                  label: "Dashboard",
                  action: () => onNavigate("dashboard"),
                },
                {
                  label: "FAQ",
                  action: () => {
                    onNavigate("landing");
                    setTimeout(
                      () =>
                        document
                          .querySelector("#faq")
                          ?.scrollIntoView({ behavior: "smooth" }),
                      100,
                    );
                  },
                },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={action}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Compliance Coverage
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                "GDPR (EU) — Full Article 6",
                "UK DPA 2018 + UK GDPR",
                "India DPDP Act 2023",
                "CCPA / CPRA (California)",
                "HIPAA (US Healthcare)",
                "Brazil LGPD",
                "Canada PIPEDA",
                "Singapore PDPA",
                "Japan APPI",
                "Australia Privacy Act",
              ].map((item) => (
                <li key={item} className="text-xs leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 mb-7">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Refund Policy",
                "Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white transition-colors"
                    onClick={() => onNavigate("generator")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { label: "General", email: "hello@privacylawautogen.com" },
                { label: "Support", email: "support@privacylawautogen.com" },
                { label: "Legal", email: "legal@privacylawautogen.com" },
              ].map(({ label, email }) => (
                <li key={label} className="flex items-center gap-2">
                  <Mail className="h-3 w-3 shrink-0 text-slate-600" />
                  <a
                    href={`mailto:${email}`}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer callout */}
        <div className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-5 py-4 mb-8">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">
              ⚠ Legal disclaimer:
            </span>{" "}
            PrivacyLaw AutoGen generates legally structured privacy policy
            templates based on the requirements of GDPR, UK DPA 2018, India DPDP
            Act 2023, CCPA, HIPAA, and other frameworks. These templates are
            designed to cover required legal elements but do not constitute
            legal advice. We strongly recommend having your final policy
            reviewed by a qualified data protection lawyer before publishing,
            especially for healthcare, financial services, or other regulated
            industries.
          </p>
        </div>

        {/* Additional disclaimer */}
        <p className="text-[11px] text-slate-500 text-center leading-relaxed mb-6">
          PrivacyLaw AutoGen generates template legal documents for
          informational purposes only. Content is not legal advice. Consult a
          qualified lawyer for your specific needs.
        </p>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} PrivacyLaw AutoGen. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors hover:underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <p>ISO 27701 · SOC 2 Ready · GDPR Compliant</p>
        </div>
      </div>
    </footer>
  );
}
