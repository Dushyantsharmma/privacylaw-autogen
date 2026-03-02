import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useActor } from "@/hooks/useActor";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  type CategoryScore,
  type InspectionIssue,
  JURISDICTION_INFO,
  type Jurisdiction,
  analyzeByDomain,
  analyzeHtml,
  computeCategoryScores,
  computeScore,
  detectJurisdictionsFromUrl,
  generateReportText,
  scoreToGrade,
} from "@/lib/inspectionEngine";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Flag,
  Globe,
  Info,
  Loader2,
  LogIn,
  RefreshCw,
  Scale,
  ScanLine,
  Shield,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

type Page = "landing" | "generator" | "dashboard" | "inspector" | "blog";

interface InspectorPageProps {
  onNavigate: (page: Page) => void;
}

// All selectable jurisdictions for the manual override
const ALL_JURISDICTIONS: {
  value: Jurisdiction;
  label: string;
  flag: string;
}[] = [
  { value: "EU_GDPR", label: "European Union (GDPR)", flag: "🇪🇺" },
  { value: "UK", label: "United Kingdom (UK GDPR + DPA 2018)", flag: "🇬🇧" },
  { value: "India", label: "India (DPDP Act 2023)", flag: "🇮🇳" },
  { value: "USA_CCPA", label: "USA / California (CCPA/CPRA)", flag: "🇺🇸" },
  { value: "Canada", label: "Canada (PIPEDA)", flag: "🇨🇦" },
  { value: "Australia", label: "Australia (Privacy Act 1988)", flag: "🇦🇺" },
  { value: "Brazil", label: "Brazil (LGPD)", flag: "🇧🇷" },
  { value: "Singapore", label: "Singapore (PDPA 2012)", flag: "🇸🇬" },
  { value: "Japan", label: "Japan (APPI 2022)", flag: "🇯🇵" },
  { value: "USA_HIPAA", label: "USA Healthcare (HIPAA)", flag: "🏥" },
  { value: "China", label: "China (PIPL/CSL/DSL)", flag: "🇨🇳" },
  { value: "SouthAfrica", label: "South Africa (POPIA)", flag: "🇿🇦" },
  { value: "Korea", label: "South Korea (PIPA)", flag: "🇰🇷" },
  { value: "UAE", label: "UAE (PDPL Decree-Law 45/2021)", flag: "🇦🇪" },
  { value: "SaudiArabia", label: "Saudi Arabia (PDPL)", flag: "🇸🇦" },
  { value: "Nigeria", label: "Nigeria (NDPA 2023)", flag: "🇳🇬" },
  { value: "Kenya", label: "Kenya (Data Protection Act 2019)", flag: "🇰🇪" },
  { value: "Mexico", label: "Mexico (LFPDPPP)", flag: "🇲🇽" },
  { value: "Argentina", label: "Argentina (PDPL 25.326)", flag: "🇦🇷" },
  { value: "Thailand", label: "Thailand (PDPA 2019)", flag: "🇹🇭" },
  { value: "Indonesia", label: "Indonesia (UU PDP 2022)", flag: "🇮🇩" },
  { value: "NewZealand", label: "New Zealand (Privacy Act 2020)", flag: "🇳🇿" },
  { value: "Israel", label: "Israel (PPL)", flag: "🇮🇱" },
  { value: "Philippines", label: "Philippines (DPA 2012)", flag: "🇵🇭" },
  { value: "Switzerland", label: "Switzerland (nFADP 2023)", flag: "🇨🇭" },
  { value: "Turkey", label: "Turkey (KVKK)", flag: "🇹🇷" },
  { value: "Global", label: "Global (All major laws)", flag: "🌐" },
];

const LOADING_STEPS = [
  "Connecting to website...",
  "Fetching live page content...",
  "Parsing HTML & metadata...",
  "Detecting jurisdiction from domain...",
  "Scanning privacy policy links...",
  "Checking tracking & consent mechanisms...",
  "Evaluating GDPR / UK GDPR compliance...",
  "Assessing India DPDP 2023 requirements...",
  "Checking CCPA / CPRA obligations...",
  "Scanning regional framework requirements...",
  "Calculating compliance risk scores...",
  "Generating actionable report...",
];

// ─── Score ring ───────────────────────────────────────────────────────────────

function ScoreRing({ score }: { score: number }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const grade = scoreToGrade(score);
  const strokeColor =
    score >= 90
      ? "#10b981"
      : score >= 75
        ? "#22c55e"
        : score >= 60
          ? "#eab308"
          : score >= 45
            ? "#f97316"
            : "#ef4444";

  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      <svg
        className="w-28 h-28 -rotate-90"
        viewBox="0 0 100 100"
        aria-label={`Compliance score: ${score} out of 100`}
        role="img"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted/30"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.2s ease-in-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-2xl font-bold ${grade.color}`}>{score}</span>
        <span className={`text-sm font-bold ${grade.color}`}>
          {grade.grade}
        </span>
        <span className="text-[10px] text-muted-foreground">{grade.label}</span>
      </div>
    </div>
  );
}

// ─── Issue card ───────────────────────────────────────────────────────────────

function IssueCard({
  issue,
  onFix,
}: {
  issue: InspectionIssue;
  onFix: (action: NonNullable<InspectionIssue["fixAction"]>) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const severityConfig = {
    critical: {
      icon: XCircle,
      badgeClass:
        "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
      borderClass: "border-red-500/30 bg-red-500/5",
      iconClass: "text-red-500",
      label: "Critical",
    },
    warning: {
      icon: AlertTriangle,
      badgeClass:
        "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
      borderClass: "border-amber-500/30 bg-amber-500/5",
      iconClass: "text-amber-500",
      label: "Warning",
    },
    info: {
      icon: Info,
      badgeClass:
        "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
      borderClass: "border-blue-500/30 bg-blue-500/5",
      iconClass: "text-blue-500",
      label: "Info",
    },
  };

  const fixLabels: Record<NonNullable<InspectionIssue["fixAction"]>, string> = {
    generate_privacy_policy: "Generate Privacy Policy",
    generate_cookie_policy: "Generate Cookie Policy",
    generate_tos: "Generate Terms of Service",
    generate_dpia: "Generate DPIA",
  };

  const cfg = severityConfig[issue.severity];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg border p-4 ${cfg.borderClass}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${cfg.iconClass}`} />
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-sm font-semibold">{issue.title}</span>
            <Badge className={`text-[10px] px-1.5 py-0 h-4 ${cfg.badgeClass}`}>
              {cfg.label}
            </Badge>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
              {issue.category}
            </Badge>
          </div>

          {/* Description (collapsed by default on info) */}
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            {issue.description}
          </p>

          {/* Expandable recommendation */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 mb-2 transition-colors"
          >
            <ChevronDown
              className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
            {expanded ? "Hide" : "Show"} Recommendation
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="rounded-md bg-background/60 border border-border/50 px-3 py-2 mb-2">
                  <p className="text-xs font-medium mb-0.5">How to Fix This</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {issue.recommendation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Law + fine row */}
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <div className="flex items-center gap-1.5">
              <Scale className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground font-mono">
                {issue.law}
              </span>
            </div>
            {issue.fineRange && (
              <div className="flex items-center gap-1 rounded-full bg-red-500/10 border border-red-500/20 px-2 py-0.5">
                <AlertTriangle className="h-2.5 w-2.5 text-red-500" />
                <span className="text-[10px] text-red-600 dark:text-red-400 font-medium">
                  {issue.fineRange}
                </span>
              </div>
            )}
          </div>

          {/* Fix action button */}
          {issue.fixAction && (
            <div className="mt-2.5">
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs gap-1.5 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => onFix(issue.fixAction!)}
              >
                <Sparkles className="h-3 w-3" />
                {fixLabels[issue.fixAction]}
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Applicable Frameworks Panel ──────────────────────────────────────────────

function ApplicableFrameworks({
  jurisdictions,
}: { jurisdictions: Jurisdiction[] }) {
  return (
    <Card className="border-border/60">
      <CardHeader className="pb-2 pt-3 px-4">
        <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
          <Flag className="h-3.5 w-3.5 text-primary" />
          Applicable Frameworks
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-3">
        <div className="space-y-2">
          {jurisdictions.map((j) => {
            const info = JURISDICTION_INFO[j];
            if (!info) return null;
            return (
              <div key={j} className="flex items-start gap-2">
                <span className="text-base leading-none mt-0.5">
                  {info.flag}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">
                    {info.framework}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {info.regulator} · Fine: {info.maxFine}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function InspectorPage({ onNavigate }: InspectorPageProps) {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const { actor } = useActor();
  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  const [url, setUrl] = useState("");
  const [manualJurisdiction, setManualJurisdiction] = useState<
    Jurisdiction | "auto"
  >("auto");
  const [isInspecting, setIsInspecting] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [issues, setIssues] = useState<InspectionIssue[] | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [inspectedUrl, setInspectedUrl] = useState("");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [detectedJurisdictions, setDetectedJurisdictions] = useState<
    Jurisdiction[]
  >([]);
  const [isFallbackMode, setIsFallbackMode] = useState(false);
  const [categoryScores, setCategoryScores] = useState<CategoryScore[]>([]);
  const [showManualChecklist, setShowManualChecklist] = useState(false);

  const handleInspect = useCallback(async () => {
    if (!url.trim()) {
      toast.error("Please enter a website URL");
      return;
    }
    let normalizedUrl = url.trim();
    if (
      !normalizedUrl.startsWith("http://") &&
      !normalizedUrl.startsWith("https://")
    ) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    // Determine jurisdictions
    const autoJurisdictions = detectJurisdictionsFromUrl(normalizedUrl);
    const jurisdictions: Jurisdiction[] =
      manualJurisdiction === "auto"
        ? autoJurisdictions
        : manualJurisdiction === "Global"
          ? (Object.keys(JURISDICTION_INFO) as Jurisdiction[])
          : [...new Set([...autoJurisdictions, manualJurisdiction])];

    setIsInspecting(true);
    setIssues(null);
    setScore(null);
    setFetchError(null);
    setInspectedUrl(normalizedUrl);
    setDetectedJurisdictions(jurisdictions);
    setIsFallbackMode(false);
    setCategoryScores([]);
    setShowManualChecklist(false);

    let step = 0;
    const stepInterval = setInterval(() => {
      step = Math.min(step + 1, LOADING_STEPS.length - 1);
      setLoadingStep(step);
    }, 1200);

    try {
      if (!actor) {
        throw new Error("Actor not ready. Please wait a moment and try again.");
      }
      const html = await actor.inspectWebsite(normalizedUrl);

      clearInterval(stepInterval);
      setLoadingStep(LOADING_STEPS.length - 1);

      if (html.startsWith("ERROR:")) {
        // Fall back to domain-based analysis instead of showing an error
        const fallbackIssues = analyzeByDomain(normalizedUrl, jurisdictions);
        const fallbackScore = computeScore(fallbackIssues);
        const fallbackCatScores = computeCategoryScores(fallbackIssues);
        setIssues(fallbackIssues);
        setScore(fallbackScore);
        setCategoryScores(fallbackCatScores);
        setIsFallbackMode(true);
        toast.info(
          "Live fetch was blocked — showing domain-based compliance analysis.",
        );
        setIsInspecting(false);
        return;
      }

      const foundIssues = analyzeHtml(html, normalizedUrl, jurisdictions);
      const complianceScore = computeScore(foundIssues);
      const catScores = computeCategoryScores(foundIssues);
      setCategoryScores(catScores);
      setIsFallbackMode(false);
      setIssues(foundIssues);
      setScore(complianceScore);

      const critCount = foundIssues.filter(
        (i) => i.severity === "critical",
      ).length;
      const grade = scoreToGrade(complianceScore);
      if (critCount > 0) {
        toast.error(
          `Grade ${grade.grade}: ${critCount} critical issue${critCount !== 1 ? "s" : ""} found`,
        );
      } else if (foundIssues.length > 0) {
        toast.warning(
          `Grade ${grade.grade}: ${foundIssues.length} issue${foundIssues.length !== 1 ? "s" : ""} to review`,
        );
      } else {
        toast.success("Grade A — No compliance issues detected!");
      }
    } catch (err) {
      clearInterval(stepInterval);
      const msg = err instanceof Error ? err.message : "Inspection failed";
      // Instead of failing, fall back to domain-based analysis
      try {
        const fallbackIssues = analyzeByDomain(normalizedUrl, jurisdictions);
        const fallbackScore = computeScore(fallbackIssues);
        const fallbackCatScores = computeCategoryScores(fallbackIssues);
        setIssues(fallbackIssues);
        setScore(fallbackScore);
        setCategoryScores(fallbackCatScores);
        setIsFallbackMode(true);
        toast.info(
          "Live fetch was blocked — showing domain-based compliance analysis.",
        );
      } catch {
        setFetchError(msg);
        toast.error(`Inspection failed: ${msg}`);
      }
    } finally {
      setIsInspecting(false);
    }
  }, [url, actor, manualJurisdiction]);

  const handleFix = useCallback(
    (action: NonNullable<InspectionIssue["fixAction"]>) => {
      const tabMap: Record<typeof action, string> = {
        generate_privacy_policy: "privacy",
        generate_cookie_policy: "cookie",
        generate_tos: "tos",
        generate_dpia: "privacy",
      };
      void tabMap[action]; // acknowledge
      onNavigate("generator");
      toast.info(
        "Generator opened — select your country and generate your document.",
      );
    },
    [onNavigate],
  );

  const handleDownloadReport = useCallback(() => {
    if (!issues || score === null) return;
    const text = generateReportText(
      inspectedUrl,
      issues,
      score,
      detectedJurisdictions,
    );
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `privacy-inspection-${new URL(inspectedUrl).hostname}-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
    toast.success("Report downloaded");
  }, [issues, score, inspectedUrl, detectedJurisdictions]);

  const handleReinspect = useCallback(() => {
    if (inspectedUrl) {
      setUrl(inspectedUrl);
      void handleInspect();
    }
  }, [inspectedUrl, handleInspect]);

  // ── Not logged in ───────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <ScanLine className="h-9 w-9 text-emerald-500" />
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">AI</span>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">
            AI Website Privacy Inspector
          </h1>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Sign in to inspect any website from any country — .in, .uk, .eu,
            .de, .br, .au, .sg and more — against their country's specific
            privacy laws.
          </p>
          <Card className="border-border/60 mb-6">
            <CardContent className="p-4">
              <ul className="text-left space-y-2.5 text-sm text-muted-foreground">
                {[
                  "60+ checks across 13 jurisdiction frameworks",
                  "Auto-detects country from domain (.in, .uk, .eu, .br, .cn, .za etc.)",
                  "GDPR, UK DPA, India DPDP, CCPA, LGPD, PDPA, APPI, PIPL, POPIA",
                  "Fine exposure estimates per issue",
                  "One-click 'Generate Fix' to create compliant documents",
                  "Downloadable compliance report with letter grade (A–F)",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Button
            onClick={login}
            disabled={isLoggingIn}
            className="w-full gap-2"
          >
            {isLoggingIn ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="h-4 w-4" />
            )}
            {isLoggingIn ? "Signing in..." : "Sign In — It's Free"}
          </Button>
        </motion.div>
      </main>
    );
  }

  const criticalCount =
    issues?.filter((i) => i.severity === "critical").length ?? 0;
  const warningCount =
    issues?.filter((i) => i.severity === "warning").length ?? 0;
  const infoCount = issues?.filter((i) => i.severity === "info").length ?? 0;
  const grade = score !== null ? scoreToGrade(score) : null;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60 bg-muted/20 px-4 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <ScanLine className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-base font-bold flex items-center gap-2">
                AI Website Privacy Inspector
                <Badge className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                  60+ Checks
                </Badge>
              </h1>
              <p className="text-xs text-muted-foreground">
                Inspect any website against GDPR · UK DPA · India DPDP · CCPA ·
                LGPD · PDPA · APPI · PIPL · POPIA · HIPAA + global rules
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal disclaimer banner */}
      <DisclaimerBanner />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[460px_1fr] gap-8 items-start">
          {/* ── Left column ──────────────────────────────────────────────── */}
          <div className="space-y-5">
            {/* URL input + jurisdiction */}
            <Card className="border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-500" />
                  Website to Inspect
                </CardTitle>
                <CardDescription className="text-xs">
                  Enter any public URL. Jurisdiction is auto-detected from the
                  domain (.in → India DPDP, .uk → UK GDPR, .de → GDPR, etc.) or
                  override below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.co.in"
                    className="font-mono text-sm"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !isInspecting)
                        void handleInspect();
                    }}
                    disabled={isInspecting}
                  />
                  <Button
                    onClick={() => void handleInspect()}
                    disabled={isInspecting || !url.trim()}
                    className="shrink-0 gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white"
                  >
                    {isInspecting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ScanLine className="h-4 w-4" />
                    )}
                    {isInspecting ? "Scanning..." : "Inspect"}
                  </Button>
                </div>

                {/* Jurisdiction override */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="jurisdiction-select"
                    className="text-xs text-muted-foreground font-medium"
                  >
                    Jurisdiction Override
                  </label>
                  <Select
                    value={manualJurisdiction}
                    onValueChange={(v) =>
                      setManualJurisdiction(v as Jurisdiction | "auto")
                    }
                    disabled={isInspecting}
                  >
                    <SelectTrigger className="h-8 text-xs">
                      <SelectValue placeholder="Auto-detect from URL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto" className="text-xs">
                        🔍 Auto-detect from URL domain
                      </SelectItem>
                      {ALL_JURISDICTIONS.map((j) => (
                        <SelectItem
                          key={j.value}
                          value={j.value}
                          className="text-xs"
                        >
                          {j.flag} {j.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-[10px] text-muted-foreground">
                    Use "Auto-detect" for country-code domains. Override for
                    .com/.net sites where jurisdiction is ambiguous.
                  </p>
                </div>

                {/* Loading progress */}
                <AnimatePresence>
                  {isInspecting && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-3.5 w-3.5 text-emerald-500 animate-spin" />
                          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            {LOADING_STEPS[loadingStep]}
                          </span>
                        </div>
                        <Progress
                          value={
                            ((loadingStep + 1) / LOADING_STEPS.length) * 100
                          }
                          className="h-1.5"
                        />
                        <p className="text-[10px] text-muted-foreground">
                          Running {LOADING_STEPS.length} analysis steps across
                          13 legal frameworks...
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Score card */}
            <AnimatePresence>
              {score !== null && issues !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="space-y-3"
                >
                  <Card className="border-border/60">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-semibold flex items-center justify-between">
                        <span>Compliance Score</span>
                        {grade && (
                          <Badge
                            className={`text-xs px-2 ${
                              score >= 90
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                : score >= 75
                                  ? "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30"
                                  : score >= 60
                                    ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
                                    : score >= 45
                                      ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30"
                                      : "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30"
                            }`}
                          >
                            Grade {grade.grade} — {grade.label}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-xs truncate">
                        {inspectedUrl}
                      </CardDescription>
                      {isFallbackMode && (
                        <div className="flex items-center gap-1.5 mt-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 px-2.5 py-1.5">
                          <Info className="h-3 w-3 text-blue-500 shrink-0" />
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 leading-tight">
                            Domain-based analysis (live fetch blocked by site
                            security). Results reflect jurisdiction requirements
                            for this domain.
                          </span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-5 mb-4">
                        <ScoreRing score={score} />
                        <div className="space-y-2 text-sm flex-1">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500" />
                            <span className="text-muted-foreground text-xs">
                              Critical
                            </span>
                            <span className="font-bold ml-auto">
                              {criticalCount}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500" />
                            <span className="text-muted-foreground text-xs">
                              Warnings
                            </span>
                            <span className="font-bold ml-auto">
                              {warningCount}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-muted-foreground text-xs">
                              Info
                            </span>
                            <span className="font-bold ml-auto">
                              {infoCount}
                            </span>
                          </div>
                          <Separator />
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-3 w-3 text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">
                              Total
                            </span>
                            <span className="font-bold ml-auto">
                              {issues.length}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Category scores breakdown */}
                      {categoryScores.length > 0 && (
                        <div className="mb-3">
                          <p className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Score Breakdown (Weighted)
                          </p>
                          <div className="space-y-1.5">
                            {categoryScores.map((cs) => (
                              <div
                                key={cs.category}
                                className="flex items-center gap-2"
                              >
                                <span className="text-[10px] text-muted-foreground w-24 shrink-0">
                                  {cs.category}
                                </span>
                                <div className="flex-1 bg-muted/40 rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full transition-all ${cs.score >= 90 ? "bg-emerald-500" : cs.score >= 70 ? "bg-green-500" : cs.score >= 50 ? "bg-yellow-500" : cs.score >= 30 ? "bg-orange-500" : "bg-red-500"}`}
                                    style={{ width: `${cs.score}%` }}
                                  />
                                </div>
                                <span
                                  className={`text-[10px] font-bold w-8 text-right ${cs.score >= 90 ? "text-emerald-500" : cs.score >= 70 ? "text-green-500" : cs.score >= 50 ? "text-yellow-500" : cs.score >= 30 ? "text-orange-500" : "text-red-500"}`}
                                >
                                  {cs.score}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Separator className="my-3" />

                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-1.5"
                          onClick={handleDownloadReport}
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download Report (.txt)
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full gap-1.5 text-muted-foreground"
                          onClick={handleReinspect}
                          disabled={isInspecting}
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                          Re-inspect
                        </Button>
                        {criticalCount > 0 && (
                          <Button
                            size="sm"
                            className="w-full gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white"
                            onClick={() => onNavigate("generator")}
                          >
                            <Zap className="h-3.5 w-3.5" />
                            Fix All — Generate Compliant Documents
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full gap-1.5 text-muted-foreground"
                          onClick={() =>
                            setShowManualChecklist(!showManualChecklist)
                          }
                        >
                          <FileText className="h-3.5 w-3.5" />
                          {showManualChecklist ? "Hide" : "Show"} Manual
                          Checklist
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Applicable frameworks */}
                  <ApplicableFrameworks jurisdictions={detectedJurisdictions} />

                  {/* Manual checklist (always accessible when results shown) */}
                  <AnimatePresence>
                    {showManualChecklist && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Card className="border-border/60">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">
                              Manual Self-Assessment Checklist
                            </CardTitle>
                            <CardDescription className="text-xs">
                              Check off items to verify compliance across 8
                              categories
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {[
                                {
                                  cat: "Privacy",
                                  items: [
                                    "Privacy policy linked from footer",
                                    "Data collection disclosed in privacy policy",
                                    "Third-party processors listed",
                                    "Data retention periods specified",
                                  ],
                                },
                                {
                                  cat: "Security",
                                  items: [
                                    "HTTPS enforced site-wide",
                                    "Security measures described in policy",
                                    "Breach response plan exists",
                                    "Access controls implemented",
                                  ],
                                },
                                {
                                  cat: "Consent",
                                  items: [
                                    "Cookie consent banner before tracking loads",
                                    "Opt-out mechanism available",
                                    "Consent withdrawal is easy",
                                    "Separate consent for marketing",
                                  ],
                                },
                                {
                                  cat: "Legal Docs",
                                  items: [
                                    "Privacy policy published",
                                    "Terms of Service published",
                                    "Cookie policy published",
                                    "Refund/cancellation policy (if e-commerce)",
                                  ],
                                },
                                {
                                  cat: "Data Rights",
                                  items: [
                                    "Access request mechanism",
                                    "Erasure request mechanism",
                                    "Data portability option",
                                    "Complaint route disclosed",
                                  ],
                                },
                                {
                                  cat: "Cookies",
                                  items: [
                                    "Cookie inventory completed",
                                    "Cookies categorised (essential/analytics/marketing)",
                                    "Cookie consent expires appropriately",
                                    "Third-party cookies disclosed",
                                  ],
                                },
                                {
                                  cat: "Accessibility",
                                  items: [
                                    "WCAG 2.1 AA audit completed",
                                    "Accessibility statement published",
                                    "Screen reader tested",
                                    "Keyboard navigation works",
                                  ],
                                },
                              ].map(({ cat, items }) => (
                                <div key={cat}>
                                  <p className="text-[10px] font-semibold text-primary uppercase tracking-wide mb-1.5">
                                    {cat}
                                  </p>
                                  <ul className="space-y-1">
                                    {items.map((item) => (
                                      <li
                                        key={item}
                                        className="flex items-center gap-2 text-xs text-muted-foreground"
                                      >
                                        <CheckCircle2 className="h-3 w-3 text-muted-foreground/50 shrink-0" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error state (only show if fetch truly failed with no fallback) */}
            <AnimatePresence>
              {fetchError && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Alert
                    variant="destructive"
                    className="border-destructive/40 bg-destructive/5"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <p className="font-medium mb-1">
                        Inspection could not complete
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {fetchError}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Please check the URL and try again.
                      </p>
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Idle intro card */}
            {!isInspecting && !issues && !fetchError && (
              <Card className="border-border/60 bg-muted/10">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    What gets checked (60+ rules)
                  </h3>
                  <div className="space-y-2">
                    {[
                      [
                        "🌐 Global",
                        "Privacy policy, forms notice, contact info, HTTPS, ToS, cookies",
                      ],
                      [
                        "🇪🇺 GDPR (EU)",
                        "Lawful basis, DSR, consent withdrawal, DPO, SCCs, retention",
                      ],
                      [
                        "🇬🇧 UK GDPR",
                        "ICO reference, PECR email marketing, UK adequacy",
                      ],
                      [
                        "🇮🇳 India DPDP",
                        "Data fiduciary, grievance officer, consent manager, Board",
                      ],
                      [
                        "🇺🇸 CCPA/CPRA",
                        "Do Not Sell link, California rights, sensitive PI",
                      ],
                      [
                        "🇨🇦 PIPEDA",
                        "Privacy Commissioner, accountability, purpose limitation",
                      ],
                      [
                        "🇦🇺 Australia",
                        "APPs, OAIC, overseas disclosure (APP 8)",
                      ],
                      [
                        "🇧🇷 LGPD",
                        "ANPD, DPO (Encarregado), legal basis, 9 rights",
                      ],
                      [
                        "🇸🇬 PDPA",
                        "PDPC, DPO mandatory, 3-day breach notification",
                      ],
                      [
                        "🇯🇵 APPI",
                        "PPC, purpose of use, third-party provision, Art. 28",
                      ],
                      [
                        "🇨🇳 China PIPL",
                        "CAC, MLPS, CSL + DSL, data localisation, PIP Officer",
                      ],
                      [
                        "🇿🇦 South Africa POPIA",
                        "Information Regulator, 8 conditions, breach 72h",
                      ],
                      ["🏥 HIPAA", "Notice of Privacy Practices, PHI, BAA"],
                      [
                        "🍪 Trackers",
                        "25+ tracking networks, consent management",
                      ],
                    ].map(([label, items]) => (
                      <div key={label} className="flex items-start gap-2">
                        <span className="text-xs font-medium w-32 shrink-0 text-primary/80">
                          {label}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {items}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* ── Right column: results ─────────────────────────────────────── */}
          <div>
            <AnimatePresence mode="wait">
              {isInspecting ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center min-h-[400px] rounded-xl border border-dashed border-border/60 text-center p-8"
                >
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <ScanLine className="h-9 w-9 text-emerald-500" />
                    </div>
                    <div className="absolute -inset-2 rounded-3xl border border-emerald-500/20 animate-ping opacity-30" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Running full compliance scan...
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mb-1">
                    {LOADING_STEPS[loadingStep]}
                  </p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Checking 60+ rules across {detectedJurisdictions.length}{" "}
                    jurisdiction framework
                    {detectedJurisdictions.length !== 1 ? "s" : ""}
                  </p>
                </motion.div>
              ) : issues !== null ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {/* URL + grade header */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span className="font-mono text-xs truncate">
                      {inspectedUrl}
                    </span>
                    {grade && (
                      <Badge
                        className={`shrink-0 text-[10px] px-1.5 py-0 h-4 ${
                          score! >= 90
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                            : score! >= 75
                              ? "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30"
                              : score! >= 60
                                ? "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
                                : score! >= 45
                                  ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30"
                                  : "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30"
                        }`}
                      >
                        Grade {grade.grade} · {score}/100
                      </Badge>
                    )}
                  </div>

                  {issues.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center min-h-[300px] rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center"
                    >
                      <CheckCircle2 className="h-14 w-14 text-emerald-500 mb-4" />
                      <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                        Grade A — Excellent!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        No compliance issues were detected on this page across
                        all checked frameworks. Continue monitoring as laws
                        evolve.
                      </p>
                    </motion.div>
                  ) : (
                    <ScrollArea className="max-h-[calc(100vh-16rem)]">
                      <div className="space-y-3 pr-2">
                        {criticalCount > 0 && (
                          <>
                            <div className="flex items-center gap-2 pt-1">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <h3 className="text-sm font-semibold text-red-600 dark:text-red-400">
                                Critical Issues ({criticalCount}) — Regulatory
                                Fine Risk
                              </h3>
                            </div>
                            {issues
                              .filter((i) => i.severity === "critical")
                              .map((issue) => (
                                <IssueCard
                                  key={issue.id}
                                  issue={issue}
                                  onFix={handleFix}
                                />
                              ))}
                          </>
                        )}

                        {warningCount > 0 && (
                          <>
                            <div className="flex items-center gap-2 pt-2">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                                Warnings ({warningCount}) — Should Address
                              </h3>
                            </div>
                            {issues
                              .filter((i) => i.severity === "warning")
                              .map((issue) => (
                                <IssueCard
                                  key={issue.id}
                                  issue={issue}
                                  onFix={handleFix}
                                />
                              ))}
                          </>
                        )}

                        {infoCount > 0 && (
                          <>
                            <div className="flex items-center gap-2 pt-2">
                              <Info className="h-4 w-4 text-blue-500" />
                              <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                Informational ({infoCount}) — Best Practice
                              </h3>
                            </div>
                            {issues
                              .filter((i) => i.severity === "info")
                              .map((issue) => (
                                <IssueCard
                                  key={issue.id}
                                  issue={issue}
                                  onFix={handleFix}
                                />
                              ))}
                          </>
                        )}

                        {/* Generate all fixes CTA */}
                        <div className="pt-4 border-t border-border/60">
                          <Card className="border-emerald-500/20 bg-emerald-500/5">
                            <CardContent className="p-4">
                              <h4 className="text-sm font-semibold mb-1 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-emerald-500" />
                                Fix Everything at Once
                              </h4>
                              <p className="text-xs text-muted-foreground mb-3">
                                Open the generator pre-loaded with your detected
                                jurisdiction and business type. Generate a
                                complete, compliant Privacy Policy, Cookie
                                Policy, and Terms of Service in minutes.
                              </p>
                              <Button
                                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-500 text-white"
                                onClick={() => onNavigate("generator")}
                              >
                                <FileText className="h-4 w-4" />
                                Open Generator — Create Compliant Documents
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </ScrollArea>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center min-h-[400px] rounded-xl border border-dashed border-border/60 text-center p-8"
                >
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <ScanLine className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">
                    Ready to inspect
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Enter any website URL — from any country. We auto-detect the
                    applicable laws and run 60+ checks instantly.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {[
                      "example.co.in",
                      "example.co.uk",
                      "example.de",
                      "example.com.br",
                      "example.com.au",
                    ].map((ex) => (
                      <button
                        type="button"
                        key={ex}
                        className="text-xs bg-muted hover:bg-muted/80 rounded-full px-2.5 py-1 text-muted-foreground transition-colors"
                        onClick={() => setUrl(`https://${ex}`)}
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
