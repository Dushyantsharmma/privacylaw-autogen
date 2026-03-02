import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQS = [
  {
    q: "What is GDPR and do I need a GDPR-compliant privacy policy?",
    a: "The General Data Protection Regulation (GDPR) is the EU's comprehensive data protection law that applies to any organization processing personal data of EU residents — regardless of where you're based. If you have EU visitors or customers, you need a GDPR-compliant privacy policy. Our tool generates policies covering all required GDPR elements: Article 6 lawful basis, data subject rights (access, rectification, erasure, portability, restriction, objection), DPO section, international transfer clauses, and supervisory authority references.",
  },
  {
    q: "Does this fully cover India's DPDP Act 2023?",
    a: "Yes — we fully support the Digital Personal Data Protection Act 2023. Our India DPDP template includes all required provisions: Data Fiduciary obligations, consent manager references, Data Principal rights (access, correction, erasure, grievance redressal, nomination), Data Protection Board of India references, cross-border transfer restrictions, and children's data protection under Section 9. Templates are updated to reflect the latest guidance from MeitY.",
  },
  {
    q: "Is UK DPA 2018 different from GDPR? Do I need a separate policy?",
    a: "The UK Data Protection Act 2018 works alongside the UK GDPR (EU GDPR as retained in UK law post-Brexit). Key differences: UK uses IDTAs instead of EU Standard Contractual Clauses, the ICO is the supervisory authority, the age of digital consent is 13 (not 16), and the UK has its own adequacy decisions. Our UK DPA 2018 template handles all these differences automatically.",
  },
  {
    q: "How does the business type selection work?",
    a: "When you select a business type (e.g., E-Commerce, Healthcare, SaaS), our JSON template engine automatically adds business-specific clauses. E-Commerce adds order processing, payment data, and returns clauses. Healthcare adds patient health records, special category data handling. SaaS adds sub-processor disclosures and API access logs. Mobile App adds device permissions and advertising IDs. Each business type is crafted to address the specific data processing activities of that sector.",
  },
  {
    q: "Can I export and use the policy directly on my website?",
    a: "Absolutely. Export in four formats: (1) Copy to Clipboard — paste into your CMS; (2) Download .txt — plain text for any use; (3) Download .doc — opens in Microsoft Word for editing; (4) PDF — client-side generated via jsPDF with your logo. All exports reflect the current state of your document and are watermark-free on paid plans.",
  },
  {
    q: "Is the generated policy legally sufficient for compliance?",
    a: "Our tool generates legally structured templates based on requirements of GDPR, UK DPA, India DPDP, CCPA, HIPAA, and more — designed to cover all required legal elements. However, this is a template tool and does not constitute legal advice. We strongly recommend having your final policy reviewed by a qualified data protection lawyer before publishing, especially for healthcare, financial services, or other regulated industries.",
  },
  {
    q: "How are law updates handled?",
    a: 'We use a JSON-driven template engine. When data protection laws are updated (e.g., new GDPR guidance, DPDP rules notified by MeitY), we update the corresponding JSON files. All users automatically generate policies based on the latest templates. Each template includes a version badge (e.g., "GDPR v1.2 · Updated 2026") so you always know which version you\'re using.',
  },
  {
    q: "Does my data get stored anywhere?",
    a: "No. PrivacyLaw AutoGen is fully client-side. All document generation, merging, and processing happens entirely in your browser. Your business name, email, website URL, and other inputs are never sent to any server. This is by design — we believe a privacy tool should itself be privacy-first.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs px-3 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Everything you need to know about privacy law compliance and our
            generator.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q.slice(0, 40)}
                value={`faq-${i}`}
                className="border border-border/60 rounded-xl px-5 bg-card shadow-xs"
              >
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline py-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Still have questions?{" "}
            <a
              href="mailto:support@privacylawautogen.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
