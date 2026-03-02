import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  Car,
  Cloud,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Plane,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
} from "lucide-react";
import { useState } from "react";

export const ONBOARDING_STORAGE_KEY = "privacylaw_onboarded";
const PREFILL_KEY = "privacylaw_onboarding_prefill";

export interface OnboardingData {
  country: string;
  businessType: string;
  businessName: string;
  websiteUrl: string;
  email: string;
}

interface OnboardingWizardProps {
  isOpen: boolean;
  onComplete: (data: OnboardingData) => void;
  onSkip: () => void;
}

const COUNTRIES = [
  "European Union",
  "United Kingdom",
  "India",
  "United States",
  "Canada",
  "Australia",
  "Brazil",
  "Singapore",
  "Japan",
  "China",
  "South Africa",
  "South Korea",
  "UAE",
  "Saudi Arabia",
  "Nigeria",
  "Kenya",
  "Mexico",
  "Argentina",
  "Thailand",
  "Indonesia",
  "New Zealand",
  "Israel",
  "Philippines",
  "Switzerland",
  "Turkey",
];

const BUSINESS_TYPES = [
  { id: "E-commerce", label: "E-Commerce", Icon: ShoppingCart },
  { id: "Healthcare Clinic", label: "Healthcare / Clinic", Icon: Heart },
  { id: "School / EdTech", label: "School / EdTech", Icon: GraduationCap },
  { id: "SaaS Product", label: "SaaS Product", Icon: Cloud },
  { id: "Blog / Content", label: "Blog / Content", Icon: FileText },
  { id: "Digital Agency", label: "Digital Agency", Icon: Briefcase },
  { id: "Mobile App", label: "Mobile App", Icon: Smartphone },
  { id: "Marketplace", label: "Marketplace", Icon: Store },
  { id: "Driving School", label: "Driving School", Icon: Car },
  { id: "Travel & Tourism", label: "Travel & Tourism", Icon: Plane },
  { id: "Consulting", label: "Consulting", Icon: Users },
];

export function OnboardingWizard({
  isOpen,
  onComplete,
  onSkip,
}: OnboardingWizardProps) {
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");

  const totalSteps = 3;
  const progressValue = (step / totalSteps) * 100;

  const handleSkip = () => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    onSkip();
  };

  const handleComplete = () => {
    const data: OnboardingData = {
      country,
      businessType,
      businessName,
      websiteUrl,
      email,
    };
    localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    // Store prefill data for GeneratorPage to pick up on mount
    try {
      localStorage.setItem(PREFILL_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
    onComplete(data);
  };

  const canAdvanceStep1 = country.trim().length > 0;
  const canAdvanceStep2 = businessType.trim().length > 0;
  const canComplete = businessName.trim().length > 0;

  const handleNext = () => {
    if (step < totalSteps) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        data-ocid="onboarding.modal"
        className="sm:max-w-lg gap-0 p-0"
        // Prevent closing on outside click during onboarding
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {/* Progress bar + header */}
        <div className="px-6 pt-6 pb-4 border-b border-border/60">
          <DialogHeader className="space-y-1 mb-4">
            <DialogTitle className="text-base font-semibold">
              Welcome to PrivacyLaw AutoGen
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Step {step} of {totalSteps} — Let's personalise your experience
            </p>
          </DialogHeader>
          {/* Segment progress */}
          <div className="flex gap-1.5">
            {[1, 2, 3].map((segIdx) => (
              <div
                key={segIdx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  segIdx <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          {/* Hidden but accessible progress for screen readers */}
          <Progress
            value={progressValue}
            className="sr-only"
            aria-label={`Step ${step} of ${totalSteps}`}
          />
        </div>

        {/* Step content */}
        <div className="px-6 py-6 min-h-[280px]">
          {step === 1 && (
            <div data-ocid="onboarding.step.1">
              <div className="flex items-center gap-2 mb-5">
                <Globe className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-sm">
                  Where is your business located?
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                We'll automatically load the applicable data protection laws for
                your country.
              </p>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger
                  data-ocid="onboarding.country.select"
                  className="w-full"
                  aria-label="Select your country"
                >
                  <SelectValue placeholder="🌍  Select your country..." />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {country && (
                <p className="mt-3 text-xs text-primary flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  Great! We'll apply the correct compliance frameworks for{" "}
                  <strong>{country}</strong>.
                </p>
              )}
            </div>
          )}

          {step === 2 && (
            <div data-ocid="onboarding.step.2">
              <div className="flex items-center gap-2 mb-5">
                <Store className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-sm">
                  What type of business are you?
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                This determines which specific clauses are included in your
                documents.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BUSINESS_TYPES.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setBusinessType(id)}
                    data-ocid="onboarding.business_type.button"
                    aria-pressed={businessType === id}
                    className={`flex flex-col items-center gap-2 rounded-lg border p-3 text-center transition-all ${
                      businessType === id
                        ? "border-primary bg-primary/8 ring-2 ring-primary/30 shadow-sm"
                        : "border-border/60 hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${businessType === id ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`text-xs font-medium leading-tight ${businessType === id ? "text-primary" : "text-foreground"}`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div data-ocid="onboarding.step.3">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-sm">
                  Tell us about your business
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mb-5">
                We'll use this to pre-fill your first policy — you can change it
                anytime.
              </p>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="onboarding-biz-name"
                    className="text-xs font-medium"
                  >
                    Business Name{" "}
                    <span className="text-destructive" aria-hidden>
                      *
                    </span>
                  </Label>
                  <Input
                    id="onboarding-biz-name"
                    data-ocid="onboarding.business_name.input"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Acme Innovations Ltd"
                    autoFocus
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="onboarding-url"
                    className="text-xs font-medium"
                  >
                    Website URL
                  </Label>
                  <Input
                    id="onboarding-url"
                    data-ocid="onboarding.website_url.input"
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="onboarding-email"
                    className="text-xs font-medium"
                  >
                    Contact Email
                  </Label>
                  <Input
                    id="onboarding-email"
                    data-ocid="onboarding.email.input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="privacy@yourwebsite.com"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-border/60 flex items-center justify-between gap-3 bg-muted/20">
          <button
            type="button"
            onClick={handleSkip}
            data-ocid="onboarding.skip_button"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Skip for now
          </button>

          <div className="flex items-center gap-2">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleBack}
                data-ocid="onboarding.back_button"
              >
                Back
              </Button>
            )}
            {step < totalSteps ? (
              <Button
                type="button"
                size="sm"
                onClick={handleNext}
                data-ocid="onboarding.next_button"
                disabled={
                  (step === 1 && !canAdvanceStep1) ||
                  (step === 2 && !canAdvanceStep2)
                }
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                size="sm"
                onClick={handleComplete}
                data-ocid="onboarding.submit_button"
                disabled={!canComplete}
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
