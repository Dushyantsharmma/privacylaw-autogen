import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import { generateMailtoLink } from "../../lib/exportHandlers";
import type { MergedDocument } from "../../types/documentTypes";

interface SendEmailButtonProps {
  document: MergedDocument;
}

export function SendEmailButton({ document }: SendEmailButtonProps) {
  function handleClick() {
    const link = generateMailtoLink(document);
    window.location.href = link;
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      className="gap-1.5 no-print"
    >
      <Mail className="h-3.5 w-3.5" />
      Email
    </Button>
  );
}
