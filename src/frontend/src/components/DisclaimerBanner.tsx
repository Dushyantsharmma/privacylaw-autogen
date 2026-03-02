import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

const STORAGE_KEY = "privacylaw_disclaimer_dismissed";

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      data-ocid="disclaimer.panel"
      className="relative bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800/50 px-4 py-2.5"
    >
      <div className="container mx-auto flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 min-w-0">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
            <span className="font-semibold">Legal Disclaimer:</span> This tool
            generates template legal documents for informational purposes only.
            It is <strong>NOT legal advice</strong>. Always consult a qualified
            lawyer for your specific situation.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss disclaimer"
          data-ocid="disclaimer.close_button"
          className="shrink-0 rounded-md p-0.5 text-amber-700 dark:text-amber-300 hover:bg-amber-200/60 dark:hover:bg-amber-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
