import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import React from "react";
import {
  LANGUAGE_OPTIONS,
  type SupportedLanguage,
} from "../../lib/translations";

interface LanguageSelectorProps {
  value: SupportedLanguage;
  onChange: (lang: SupportedLanguage) => void;
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground flex items-center gap-2">
        <Languages className="h-4 w-4 text-primary" />
        Document Language
      </Label>
      <Select
        value={value}
        onValueChange={(v) => onChange(v as SupportedLanguage)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGE_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              <span className="flex items-center gap-2">
                <span>{opt.label}</span>
                {opt.value !== "en" && (
                  <span className="text-muted-foreground text-xs">
                    ({opt.nativeLabel})
                  </span>
                )}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
