import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Clock, FileText, FolderOpen, Trash2 } from "lucide-react";
import React from "react";
import { useSavedDrafts } from "../../hooks/useSavedDrafts";
import type { SavedDraft } from "../../types/documentTypes";

interface DraftsPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoadDraft: (draft: SavedDraft) => void;
}

export function DraftsPanel({
  open,
  onOpenChange,
  onLoadDraft,
}: DraftsPanelProps) {
  const { drafts, deleteDraft } = useSavedDrafts();

  function formatDate(ts: number): string {
    return new Date(ts).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const docTypeLabel: Record<string, string> = {
    "privacy-policy": "Privacy Policy",
    "terms-of-service": "Terms of Service",
    "cookie-policy": "Cookie Policy",
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            Saved Drafts
          </SheetTitle>
          <SheetDescription>
            {drafts.length} draft{drafts.length !== 1 ? "s" : ""} saved
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-120px)] mt-4">
          {drafts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FileText className="h-12 w-12 text-muted-foreground/40 mb-3" />
              <p className="text-sm font-medium text-muted-foreground">
                No saved drafts yet
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Save your current work using the "Save Draft" button
              </p>
            </div>
          ) : (
            <div className="space-y-3 pr-2">
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  className="p-3 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {draft.name}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {formatDate(draft.timestamp)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Badge variant="outline" className="text-xs py-0">
                          {docTypeLabel[draft.documentType] ||
                            draft.documentType}
                        </Badge>
                        {draft.inputs.selectedCountry && (
                          <Badge variant="secondary" className="text-xs py-0">
                            {draft.inputs.selectedCountry}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0"
                      onClick={() => deleteDraft(draft.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 h-7 text-xs"
                    onClick={() => {
                      onLoadDraft(draft);
                      onOpenChange(false);
                    }}
                  >
                    Load Draft
                  </Button>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
