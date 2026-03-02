import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { type BlogArticle, CATEGORY_COLORS } from "@/lib/blogData";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  List,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface BlogArticlePageProps {
  article: BlogArticle;
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export function BlogArticlePage({
  article,
  onBack,
  onNavigate,
}: BlogArticlePageProps) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const colors =
    CATEGORY_COLORS[article.category as keyof typeof CATEGORY_COLORS];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      let current = 0;
      sectionRefs.current.forEach((ref, idx) => {
        if (ref && ref.offsetTop <= scrollPos) {
          current = idx;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (idx: number) => {
    const ref = sectionRefs.current[idx];
    if (ref) {
      const y = ref.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Article header */}
      <header className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background px-4 py-10">
        <div className="container mx-auto max-w-4xl">
          {/* Back link */}
          <button
            type="button"
            onClick={onBack}
            data-ocid="article.back_button"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Articles
          </button>

          {/* Meta row */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors.bg} ${colors.text}`}
            >
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {article.readTime} min read
            </span>
            <span className="text-xs text-muted-foreground">
              {article.publishedDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Content + ToC layout */}
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
          {/* Article content */}
          <div data-ocid="article.editor">
            {article.sections.map((section, idx) => (
              <section
                key={section.heading}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className="mb-10"
              >
                <h2
                  id={`section-${idx}`}
                  className="text-xl font-bold mb-4 text-foreground"
                >
                  {section.heading}
                </h2>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  {section.content.split("\n\n").map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-foreground/85 leading-relaxed mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {idx < article.sections.length - 1 && (
                  <Separator className="mt-10" />
                )}
              </section>
            ))}

            {/* CTA box */}
            <div
              data-ocid="article.cta.card"
              className="rounded-xl border border-primary/20 bg-primary/5 p-6 mt-10"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">
                    Ready to generate your compliant policy?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use our AI-powered generator to create a properly structured
                    privacy policy tailored to your country, business type, and
                    specific situation.
                  </p>
                  <Button
                    size="sm"
                    onClick={() => onNavigate("generator")}
                    data-ocid="article.cta.primary_button"
                    className="gap-1.5"
                  >
                    Generate Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Legal disclaimer */}
            <div className="mt-6 rounded-lg border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/30 p-4">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                  <span className="font-semibold">Legal Disclaimer:</span> This
                  article is for informational purposes only and does not
                  constitute legal advice. Laws vary by jurisdiction and change
                  over time. Consult a qualified data protection lawyer for
                  advice specific to your situation.
                </p>
              </div>
            </div>

            {/* Back link bottom */}
            <div className="mt-8 pt-6 border-t border-border/40">
              <button
                type="button"
                onClick={onBack}
                data-ocid="article.back_button_bottom"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to All Articles
              </button>
            </div>
          </div>

          {/* Sticky Table of Contents — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-xl border border-border/60 bg-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <List className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Contents
                  </span>
                </div>
                <ScrollArea className="max-h-[400px]">
                  <nav aria-label="Table of contents">
                    <ol className="space-y-1">
                      {article.sections.map((section, idx) => (
                        <li key={section.heading}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(idx)}
                            data-ocid={`article.toc.item.${idx + 1}`}
                            className={`w-full text-left text-xs leading-snug px-2 py-1.5 rounded-md transition-colors ${
                              activeSection === idx
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            {section.heading}
                          </button>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </ScrollArea>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
