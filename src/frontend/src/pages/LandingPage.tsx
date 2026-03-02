import { FAQSection } from "@/components/landing/FAQSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { PricingSection } from "@/components/landing/PricingSection";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onGetStarted, onNavigate }: LandingPageProps) {
  return (
    <main>
      <HeroSection onGetStarted={onGetStarted} onNavigate={onNavigate} />
      <FeaturesSection />
      <PricingSection onGetStarted={onGetStarted} />
      <FAQSection />
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
