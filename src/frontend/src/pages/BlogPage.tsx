import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BLOG_ARTICLES,
  BLOG_CATEGORIES,
  type BlogArticle,
  type BlogCategory,
  CATEGORY_COLORS,
} from "@/lib/blogData";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { useState } from "react";
import { BlogArticlePage } from "./BlogArticlePage";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(
    null,
  );

  const filtered =
    activeCategory === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === activeCategory);

  if (selectedArticle) {
    return (
      <BlogArticlePage
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background px-4 py-16">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Compliance Knowledge Base
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Expert guides to global privacy laws, GDPR, India DPDP, CCPA, and
            more. Stay informed and compliant.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-border/60 bg-background sticky top-16 z-30 px-4 py-3">
        <div className="container mx-auto">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
            data-ocid="blog.filter.tab"
            role="tablist"
            aria-label="Filter blog articles by category"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                data-ocid="blog.filter.tab"
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border-border/60"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({BLOG_ARTICLES.filter((a) => a.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="container mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div
            data-ocid="blog.empty_state"
            className="text-center py-20 text-muted-foreground"
          >
            No articles found in this category.
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="blog.list"
          >
            {filtered.map((article, idx) => {
              const colors =
                CATEGORY_COLORS[
                  article.category as keyof typeof CATEGORY_COLORS
                ];
              return (
                <article
                  key={article.slug}
                  data-ocid={`blog.item.${idx + 1}`}
                  className="group flex flex-col rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-semibold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <span className="text-xs text-muted-foreground">
                        {article.publishedDate}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSelectedArticle(article)}
                        data-ocid={`blog.item.button.${idx + 1}`}
                        className="gap-1.5 h-7 text-xs text-primary hover:text-primary hover:bg-primary/10 -mr-2"
                      >
                        Read Article
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA section */}
      <section className="border-t border-border/60 bg-muted/30 px-4 py-14">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="text-2xl font-bold mb-3">
            Ready to generate your compliant policy?
          </h2>
          <p className="text-muted-foreground mb-6">
            Put this knowledge into action. Generate a professionally structured
            privacy policy tailored to your country and business type in
            minutes.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button
              size="lg"
              onClick={() => onNavigate("generator")}
              data-ocid="blog.cta.primary_button"
              className="gap-2"
            >
              Generate Your Policy
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("inspector")}
              data-ocid="blog.cta.secondary_button"
              className="gap-2"
            >
              Inspect Your Website
            </Button>
          </div>
        </div>
      </section>

      {/* Back to landing */}
      <div className="container mx-auto px-4 py-4 border-t border-border/40">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate("landing")}
          data-ocid="blog.back_button"
          className="gap-1.5 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Button>
      </div>
    </main>
  );
}
