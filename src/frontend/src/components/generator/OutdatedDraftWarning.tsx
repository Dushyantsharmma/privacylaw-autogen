import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, X } from "lucide-react";
import React from "react";

interface OutdatedDraftWarningProps {
  isVisible: boolean;
  frameworkName: string;
  onRegenerate: () => void;
  onDismiss: () => void;
}

export function OutdatedDraftWarning({
  isVisible,
  frameworkName,
  onRegenerate,
  onDismiss,
}: OutdatedDraftWarningProps) {
  if (!isVisible) return null;

  return (
    <Alert className="border-warning/50 bg-warning/10 mb-4">
      <AlertTriangle className="h-4 w-4 text-warning" />
      <AlertTitle className="text-warning-foreground flex items-center justify-between">
        <span>Framework Updated</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 -mt-1"
          onClick={onDismiss}
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      </AlertTitle>
      <AlertDescription className="text-warning-foreground/80">
        <p className="text-sm mb-2">
          The <strong>{frameworkName}</strong> has been updated since this draft
          was generated. Regenerate to apply the latest clauses.
        </p>
        <Button
          size="sm"
          variant="outline"
          onClick={onRegenerate}
          className="gap-1.5 h-7 text-xs border-warning/50 hover:bg-warning/20"
        >
          <RefreshCw className="h-3 w-3" />
          Regenerate Document
        </Button>
      </AlertDescription>
    </Alert>
  );
}
