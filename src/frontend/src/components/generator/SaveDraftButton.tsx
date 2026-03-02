import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { useSavedDrafts } from "../../hooks/useSavedDrafts";
import type { DocumentInputs, DocumentType } from "../../types/documentTypes";

interface SaveDraftButtonProps {
  inputs: DocumentInputs;
  documentType: DocumentType;
}

export function SaveDraftButton({
  inputs,
  documentType,
}: SaveDraftButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { saveDraft } = useSavedDrafts();

  function handleSave() {
    if (!name.trim()) return;
    saveDraft(name.trim(), inputs, documentType);
    toast.success(`Draft "${name.trim()}" saved successfully`);
    setName("");
    setOpen(false);
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-1.5"
      >
        <Save className="h-3.5 w-3.5" />
        Save Draft
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save Draft</DialogTitle>
            <DialogDescription>
              Give your draft a name to save it for later.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-2">
            <Label htmlFor="draft-name">Draft Name</Label>
            <Input
              id="draft-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. My SaaS Privacy Policy v1"
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!name.trim()}>
              Save Draft
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
