import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS, type PlanTier } from "@/lib/planConfig";
import { Copy, Download, FileText, Loader2, Lock, Printer } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import {
  copyToClipboard,
  downloadDoc,
  downloadPDF,
  downloadTxt,
} from "../../lib/exportHandlers";
import type { MergedDocument } from "../../types/documentTypes";
import { SendEmailButton } from "./SendEmailButton";

interface ExportButtonsProps {
  document: MergedDocument;
  logoDataUrl?: string | null;
  planTier?: PlanTier;
}

interface ExportAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  requiredFormat: string;
  requiredPlan: string;
  action: () => void | Promise<void>;
}

export function ExportButtons({
  document,
  logoDataUrl,
  planTier = "basic",
}: ExportButtonsProps) {
  const [copying, setCopying] = useState(false);
  const allowedFormats = PLANS[planTier].exportFormats as string[];

  async function handleCopy() {
    setCopying(true);
    try {
      await copyToClipboard(document);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy to clipboard");
    } finally {
      setCopying(false);
    }
  }

  const exportActions: ExportAction[] = [
    {
      id: "copy",
      label: "Copy",
      icon: copying ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      ),
      requiredFormat: "copy",
      requiredPlan: "Free",
      action: handleCopy,
    },
    {
      id: "txt",
      label: ".txt",
      icon: <FileText className="h-3.5 w-3.5" />,
      requiredFormat: "txt",
      requiredPlan: "Starter",
      action: () => {
        downloadTxt(document);
        toast.success("Downloaded .txt");
      },
    },
    {
      id: "doc",
      label: ".doc",
      icon: <Download className="h-3.5 w-3.5" />,
      requiredFormat: "doc",
      requiredPlan: "Professional",
      action: () => {
        downloadDoc(document);
        toast.success("Downloaded .doc");
      },
    },
    {
      id: "pdf",
      label: "PDF",
      icon: <Printer className="h-3.5 w-3.5" />,
      requiredFormat: "pdf",
      requiredPlan: "Professional",
      action: () => {
        downloadPDF(document, logoDataUrl || undefined);
        toast.success("Opening print dialog...");
      },
    },
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex flex-wrap gap-2 no-print">
        {exportActions.map((action) => {
          const isAllowed = allowedFormats.includes(action.requiredFormat);

          if (isAllowed) {
            return (
              <Button
                key={action.id}
                variant="outline"
                size="sm"
                onClick={action.action}
                disabled={action.id === "copy" && copying}
                className="gap-1.5"
              >
                {action.icon}
                {action.label}
              </Button>
            );
          }

          return (
            <Tooltip key={action.id}>
              <TooltipTrigger asChild>
                <span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="gap-1.5 opacity-50 cursor-not-allowed"
                  >
                    <Lock className="h-3 w-3" />
                    {action.label}
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Upgrade to {action.requiredPlan} to unlock {action.label} export
              </TooltipContent>
            </Tooltip>
          );
        })}
        <SendEmailButton document={document} />
      </div>
    </TooltipProvider>
  );
}
