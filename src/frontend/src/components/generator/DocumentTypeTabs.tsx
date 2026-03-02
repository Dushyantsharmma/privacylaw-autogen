import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Cookie, FileText, Scale } from "lucide-react";
import React from "react";
import type { DocumentType } from "../../types/documentTypes";

interface DocumentTypeTabsProps {
  activeTab: DocumentType;
  onTabChange: (tab: DocumentType) => void;
}

export function DocumentTypeTabs({
  activeTab,
  onTabChange,
}: DocumentTypeTabsProps) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={(v) => onTabChange(v as DocumentType)}
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger
          value="privacy-policy"
          className="gap-1.5 text-xs sm:text-sm"
        >
          <FileText className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Privacy Policy</span>
          <span className="sm:hidden">Privacy</span>
        </TabsTrigger>
        <TabsTrigger
          value="terms-of-service"
          className="gap-1.5 text-xs sm:text-sm"
        >
          <Scale className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Terms of Service</span>
          <span className="sm:hidden">Terms</span>
        </TabsTrigger>
        <TabsTrigger
          value="cookie-policy"
          className="gap-1.5 text-xs sm:text-sm"
        >
          <Cookie className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Cookie Policy</span>
          <span className="sm:hidden">Cookies</span>
        </TabsTrigger>
        <TabsTrigger value="data-breach" className="gap-1.5 text-xs sm:text-sm">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Data Breach</span>
          <span className="sm:hidden">Breach</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
