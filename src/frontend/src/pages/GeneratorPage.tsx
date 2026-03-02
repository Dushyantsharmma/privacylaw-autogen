import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { AccessGate } from "@/components/generator/AccessGate";
import { ComplianceChecklist } from "@/components/generator/ComplianceChecklist";
import { DocumentTypeTabs } from "@/components/generator/DocumentTypeTabs";
import { DraftsPanel } from "@/components/generator/DraftsPanel";
import { ExportButtons } from "@/components/generator/ExportButtons";
import { LivePreviewPanel } from "@/components/generator/LivePreviewPanel";
import { LogoUpload } from "@/components/generator/LogoUpload";
import { OutdatedDraftWarning } from "@/components/generator/OutdatedDraftWarning";
import { RiskScoreIndicator } from "@/components/generator/RiskScoreIndicator";
import { SaveDraftButton } from "@/components/generator/SaveDraftButton";
import { SmartInputPanel } from "@/components/generator/SmartInputPanel";
import { ValidationAlert } from "@/components/generator/ValidationAlert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@/hooks/useActor";
import { useComplianceChecklist } from "@/hooks/useComplianceChecklist";
import { useDocumentInputs } from "@/hooks/useDocumentInputs";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useLogoUpload } from "@/hooks/useLogoUpload";
import { useSavedDrafts } from "@/hooks/useSavedDrafts";
import { useSubscription } from "@/hooks/useSubscription";
import { generateCookiePolicy } from "@/lib/cookiePolicyEngine";
import { FRAMEWORK_LABELS } from "@/lib/countryFrameworkMapping";
import { buildDataBreachDocument, mergeDocument } from "@/lib/documentEngine";
import { getFrameworkVersions } from "@/lib/documentEngine";
import { PLANS } from "@/lib/planConfig";
import { calculateRiskScore } from "@/lib/riskCalculation";
import { generateToSDocument } from "@/lib/tosEngine";
import type {
  DocumentType,
  MergedDocument,
  SavedDraft,
} from "@/types/documentTypes";
import {
  AlertTriangle,
  ArrowRight,
  CheckSquare,
  FileText,
  FolderOpen,
  Lock,
  Settings,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

interface GeneratorPageProps {
  onNavigate?: (
    page: "landing" | "generator" | "dashboard" | "inspector" | "blog",
  ) => void;
}

const PREFILL_KEY = "privacylaw_onboarding_prefill";

export function GeneratorPage({ onNavigate }: GeneratorPageProps) {
  const { inputs, updateInputs, validateInputs } = useDocumentInputs();
  const complianceItems = useComplianceChecklist(inputs);
  const riskScore = useMemo(
    () => calculateRiskScore(inputs, complianceItems),
    [inputs, complianceItems],
  );
  const missing = useMemo(() => validateInputs(), [validateInputs]);

  // Pick up onboarding prefill data on first mount
  const prefillAppliedRef = useRef(false);
  useEffect(() => {
    if (prefillAppliedRef.current) return;
    prefillAppliedRef.current = true;
    try {
      const raw = localStorage.getItem(PREFILL_KEY);
      if (!raw) return;
      const prefill = JSON.parse(raw) as {
        country?: string;
        businessType?: string;
        businessName?: string;
        websiteUrl?: string;
        email?: string;
      };
      const updates: Record<string, string | boolean | string[]> = {};
      if (prefill.businessName) updates.businessName = prefill.businessName;
      if (prefill.websiteUrl) updates.websiteUrl = prefill.websiteUrl;
      if (prefill.email) updates.contactEmail = prefill.email;
      if (prefill.businessType) updates.businessType = prefill.businessType;
      if (Object.keys(updates).length > 0) {
        updateInputs(updates as Parameters<typeof updateInputs>[0]);
      }
      localStorage.removeItem(PREFILL_KEY);
    } catch {
      // ignore
    }
  }, [updateInputs]);

  // Document type tabs
  const [activeDocType, setActiveDocType] =
    useState<DocumentType>("privacy-policy");

  // Drafts panel
  const [draftsOpen, setDraftsOpen] = useState(false);

  // Outdated draft warning
  const [outdatedWarning, setOutdatedWarning] = useState(false);
  const [loadedDraftFrameworks, setLoadedDraftFrameworks] = useState<
    Record<string, string>
  >({});

  // Logo upload
  const {
    logoDataUrl,
    logoFileName,
    error: logoError,
    uploadLogo,
    removeLogo,
  } = useLogoUpload();

  // Generate the active document based on tab
  const document = useMemo<MergedDocument>(() => {
    if (activeDocType === "terms-of-service")
      return generateToSDocument(inputs);
    if (activeDocType === "cookie-policy") return generateCookiePolicy(inputs);
    if (activeDocType === "data-breach") return buildDataBreachDocument(inputs);
    return mergeDocument(inputs);
  }, [inputs, activeDocType]);

  const { identity } = useInternetIdentity();
  const { actor } = useActor();
  const { planTier, canGenerate, usageCount, refreshPlan } = useSubscription();
  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  const planConfig = PLANS[planTier];
  const monthlyLimit = planConfig.monthlyLimit; // -1 means unlimited
  const isUnlimited = monthlyLimit === -1;
  const usageNum = Number(usageCount);
  const usageLeft = isUnlimited
    ? Number.POSITIVE_INFINITY
    : monthlyLimit - usageNum;
  const isNearLimit = !isUnlimited && usageLeft <= 2 && usageLeft > 0;
  const isAtLimit = !canGenerate && isLoggedIn;

  // Stripe success handling on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (!sessionId || !isLoggedIn || !actor || !identity) return;

    const principal = identity.getPrincipal();

    void (async () => {
      try {
        const status = await actor.getStripeSessionStatus(sessionId);
        if (status.__kind__ === "completed") {
          // Determine plan from session response
          let planTierFromSession = "basic";
          try {
            const responseData = JSON.parse(status.completed.response) as {
              metadata?: { plan?: string };
            };
            if (responseData.metadata?.plan) {
              planTierFromSession = responseData.metadata.plan;
            }
          } catch {
            // keep default
          }
          await actor.upgradePlan(principal, planTierFromSession);
          await refreshPlan();
          const planName =
            planTierFromSession.charAt(0).toUpperCase() +
            planTierFromSession.slice(1);
          toast.success(`Plan upgraded! Welcome to ${planName} 🎉`);
          window.history.replaceState({}, "", window.location.pathname);
        }
      } catch {
        // Stripe session check failed silently
      }
    })();
  }, [actor, isLoggedIn, identity, refreshPlan]);

  // Check if loaded draft is outdated
  useEffect(() => {
    if (Object.keys(loadedDraftFrameworks).length === 0) return;
    const currentVersions = getFrameworkVersions(
      inputs.selectedFrameworks?.length > 0
        ? inputs.selectedFrameworks
        : ["gdpr"],
    );
    const isOutdated = Object.entries(loadedDraftFrameworks).some(
      ([fw, ver]) => currentVersions[fw] && currentVersions[fw] !== ver,
    );
    setOutdatedWarning(isOutdated);
  }, [loadedDraftFrameworks, inputs.selectedFrameworks]);

  // Debounce usage tracking — only increment once per distinct document generation
  const lastTrackedRef = useRef<string>("");
  const trackUsage = useCallback(async () => {
    if (!actor || !isLoggedIn) return;
    const docKey = `${inputs.businessName}|${inputs.selectedCountry}|${inputs.businessType}`;
    if (docKey === lastTrackedRef.current) return;
    lastTrackedRef.current = docKey;
    try {
      await actor.incrementUsage();
      await refreshPlan();
    } catch {
      // silently ignore
    }
  }, [
    actor,
    isLoggedIn,
    inputs.businessName,
    inputs.selectedCountry,
    inputs.businessType,
    refreshPlan,
  ]);

  // Track when user makes meaningful inputs (has business name, country, and business type)
  const hasGeneratedDocument =
    inputs.businessName.trim().length > 0 &&
    inputs.selectedCountry.length > 0 &&
    inputs.businessType.length > 0;

  useEffect(() => {
    if (hasGeneratedDocument && isLoggedIn) {
      void trackUsage();
    }
  }, [hasGeneratedDocument, isLoggedIn, trackUsage]);

  const frameworkLabel =
    inputs.selectedFrameworks?.length > 0
      ? inputs.selectedFrameworks
          .map((f) => FRAMEWORK_LABELS[f] || f)
          .join(" + ")
      : "GDPR";

  const handleUpgradeClick = () => {
    if (onNavigate) {
      onNavigate("landing");
      setTimeout(() => {
        window.document
          .getElementById?.("pricing")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      toast("Navigate to the pricing section to upgrade your plan.");
    }
  };

  // Load draft handler
  const handleLoadDraft = (draft: SavedDraft) => {
    updateInputs(draft.inputs);
    setActiveDocType(draft.documentType);
    setLoadedDraftFrameworks(draft.draftVersion);
    toast.success(`Draft "${draft.name}" loaded`);
  };

  const docTypeLabel: Record<DocumentType, string> = {
    "privacy-policy": "Privacy Policy",
    "terms-of-service": "Terms of Service",
    "cookie-policy": "Cookie Policy",
    "data-breach": "Data Breach Template",
  };

  return (
    <AccessGate
      onNavigateToPricing={() => {
        if (onNavigate) {
          onNavigate("landing");
          setTimeout(() => {
            window.document
              .getElementById?.("pricing")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }}
    >
      <div className="min-h-screen bg-background">
        {/* Generator header */}
        <div className="border-b border-border/60 bg-muted/20 px-4 py-3">
          <div className="container mx-auto flex items-center justify-between gap-3">
            <div>
              <h1 className="text-base font-bold">
                {docTypeLabel[activeDocType]} Generator
              </h1>
              <p className="text-xs text-muted-foreground">
                {frameworkLabel}
                {inputs.businessType &&
                  ` · ${inputs.businessType.charAt(0).toUpperCase() + inputs.businessType.slice(1)}`}
                {" · "}Real-time generation
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDraftsOpen(true)}
                className="gap-1.5 hidden sm:flex"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                Drafts
              </Button>
              <ExportButtons
                document={document}
                logoDataUrl={logoDataUrl}
                planTier={planTier}
              />
            </div>
          </div>
        </div>

        {/* Document type tabs */}
        <div className="border-b border-border/40 bg-background px-4 py-2">
          <div className="container mx-auto">
            <DocumentTypeTabs
              activeTab={activeDocType}
              onTabChange={setActiveDocType}
            />
          </div>
        </div>

        {/* Legal disclaimer banner */}
        <DisclaimerBanner />

        {/* Usage warning banner */}
        {isLoggedIn && isNearLimit && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800/50 px-4 py-2.5">
            <div className="container mx-auto flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>
                  You have{" "}
                  <strong>
                    {usageLeft} generation{usageLeft !== 1 ? "s" : ""}
                  </strong>{" "}
                  left this month.
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="shrink-0 gap-1.5 border-amber-400/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 h-7 text-xs"
                onClick={handleUpgradeClick}
              >
                Upgrade
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}

        {/* Limit reached banner */}
        {isAtLimit && (
          <div className="bg-destructive/10 border-b border-destructive/30 px-4 py-3">
            <div className="container mx-auto flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Lock className="h-4 w-4 text-destructive shrink-0" />
                <span>
                  Monthly limit reached. Upgrade to continue generating
                  policies.
                </span>
              </div>
              <Button
                size="sm"
                className="shrink-0 gap-1.5 h-7 text-xs"
                onClick={handleUpgradeClick}
              >
                Upgrade Now
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        )}

        {/* Watermark notice for free plan */}
        {planConfig.watermark && isLoggedIn && (
          <div className="bg-muted/60 border-b border-border/40 px-4 py-2">
            <div className="container mx-auto">
              <p className="text-xs text-muted-foreground text-center">
                Free plan: exported documents include a watermark.{" "}
                <button
                  type="button"
                  onClick={handleUpgradeClick}
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  Upgrade to remove
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Locked overlay if limit reached */}
        {isAtLimit ? (
          <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 border border-destructive/20">
                  <Lock className="h-7 w-7 text-destructive" />
                </div>
              </div>
              <h2 className="text-xl font-bold">Monthly Limit Reached</h2>
              <p className="text-muted-foreground text-sm">
                You've used all {monthlyLimit} generations this month on the{" "}
                <strong>{PLANS[planTier].name}</strong> plan. Upgrade to unlock
                unlimited generations.
              </p>
              <Button className="gap-2" onClick={handleUpgradeClick}>
                View Upgrade Options
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop: two-column layout */}
            <div className="hidden lg:block container mx-auto px-4 py-6">
              {outdatedWarning && (
                <OutdatedDraftWarning
                  isVisible={outdatedWarning}
                  frameworkName={frameworkLabel}
                  onRegenerate={() => setOutdatedWarning(false)}
                  onDismiss={() => setOutdatedWarning(false)}
                />
              )}
              {missing.length > 0 && (
                <ValidationAlert missingFields={missing} />
              )}
              <div className="grid grid-cols-[380px_1fr] gap-6 items-start">
                {/* Left column: inputs + checklist */}
                <div className="space-y-4 sticky top-20">
                  <SmartInputPanel inputs={inputs} onUpdate={updateInputs} />
                  <LogoUpload
                    logoDataUrl={logoDataUrl}
                    logoFileName={logoFileName}
                    error={logoError}
                    onUpload={uploadLogo}
                    onRemove={removeLogo}
                  />
                  <SaveDraftButton
                    inputs={inputs}
                    documentType={activeDocType}
                  />
                  <RiskScoreIndicator riskScore={riskScore} />
                  <ComplianceChecklist items={complianceItems} />
                </div>

                {/* Right column: live preview */}
                <div className="min-h-[calc(100vh-10rem)]">
                  <LivePreviewPanel document={document} />
                </div>
              </div>
            </div>

            {/* Mobile: tabbed layout */}
            <div className="lg:hidden container mx-auto px-4 py-4">
              {outdatedWarning && (
                <OutdatedDraftWarning
                  isVisible={outdatedWarning}
                  frameworkName={frameworkLabel}
                  onRegenerate={() => setOutdatedWarning(false)}
                  onDismiss={() => setOutdatedWarning(false)}
                />
              )}
              {missing.length > 0 && (
                <ValidationAlert missingFields={missing} />
              )}

              {/* Mobile drafts button */}
              <div className="flex justify-end mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDraftsOpen(true)}
                  className="gap-1.5"
                >
                  <FolderOpen className="h-3.5 w-3.5" />
                  Drafts
                </Button>
              </div>

              <Tabs defaultValue="inputs">
                <TabsList className="grid grid-cols-3 w-full mb-4">
                  <TabsTrigger value="inputs" className="gap-1.5 text-xs">
                    <Settings className="h-3.5 w-3.5" />
                    Inputs
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="gap-1.5 text-xs">
                    <FileText className="h-3.5 w-3.5" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="checklist" className="gap-1.5 text-xs">
                    <CheckSquare className="h-3.5 w-3.5" />
                    Checklist
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="inputs" className="mt-0 space-y-3">
                  <SmartInputPanel inputs={inputs} onUpdate={updateInputs} />
                  <LogoUpload
                    logoDataUrl={logoDataUrl}
                    logoFileName={logoFileName}
                    error={logoError}
                    onUpload={uploadLogo}
                    onRemove={removeLogo}
                  />
                  <SaveDraftButton
                    inputs={inputs}
                    documentType={activeDocType}
                  />
                </TabsContent>

                <TabsContent value="preview" className="mt-0">
                  <div className="h-[calc(100vh-16rem)]">
                    <LivePreviewPanel document={document} />
                  </div>
                </TabsContent>

                <TabsContent value="checklist" className="mt-0 space-y-4">
                  <RiskScoreIndicator riskScore={riskScore} />
                  <ComplianceChecklist items={complianceItems} />
                </TabsContent>
              </Tabs>
            </div>
          </>
        )}

        {/* Drafts panel */}
        <DraftsPanel
          open={draftsOpen}
          onOpenChange={setDraftsOpen}
          onLoadDraft={handleLoadDraft}
        />
      </div>
    </AccessGate>
  );
}
