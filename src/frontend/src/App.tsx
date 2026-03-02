import { Navigation } from "@/components/Navigation";
import {
  ONBOARDING_STORAGE_KEY,
  type OnboardingData,
  OnboardingWizard,
} from "@/components/OnboardingWizard";
import { Toaster } from "@/components/ui/sonner";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { InternetIdentityProvider } from "@/hooks/useInternetIdentity";
import { BlogPage } from "@/pages/BlogPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { GeneratorPage } from "@/pages/GeneratorPage";
import { InspectorPage } from "@/pages/InspectorPage";
import { LandingPage } from "@/pages/LandingPage";
import { ThemeProvider } from "next-themes";
import { useEffect, useRef, useState } from "react";

export type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { identity } = useInternetIdentity();
  const prevIdentityRef = useRef<typeof identity | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Detect when user logs in for the first time
  useEffect(() => {
    const prevIdentity = prevIdentityRef.current;
    const isNowLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();
    const wasLoggedIn =
      !!prevIdentity && !prevIdentity.getPrincipal().isAnonymous();

    if (isNowLoggedIn && !wasLoggedIn) {
      // User just logged in — check onboarding status
      const alreadyOnboarded =
        localStorage.getItem(ONBOARDING_STORAGE_KEY) === "true";
      if (!alreadyOnboarded) {
        setShowOnboarding(true);
      }
    }

    prevIdentityRef.current = identity;
  }, [identity]);

  const handleOnboardingComplete = (data: OnboardingData) => {
    setShowOnboarding(false);
    // The prefill data is already stored in localStorage by the wizard.
    // Navigate to generator where it will be picked up.
    handleNavigate("generator");
    // Suppress unused warning — data is consumed via localStorage by GeneratorPage
    void data;
  };

  const handleOnboardingSkip = () => {
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === "landing" && (
        <LandingPage
          onGetStarted={() => handleNavigate("generator")}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "generator" && (
        <GeneratorPage onNavigate={handleNavigate} />
      )}
      {currentPage === "dashboard" && (
        <DashboardPage onNavigate={handleNavigate} />
      )}
      {currentPage === "inspector" && (
        <InspectorPage onNavigate={handleNavigate} />
      )}
      {currentPage === "blog" && <BlogPage onNavigate={handleNavigate} />}

      {/* Onboarding wizard — shown on first login */}
      <OnboardingWizard
        isOpen={showOnboarding}
        onComplete={handleOnboardingComplete}
        onSkip={handleOnboardingSkip}
      />
    </div>
  );
}

export default function App() {
  return (
    <InternetIdentityProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppContent />
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </InternetIdentityProvider>
  );
}
