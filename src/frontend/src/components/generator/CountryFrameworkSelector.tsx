import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, Search } from "lucide-react";
import React, { useState, useMemo } from "react";
import {
  COUNTRIES,
  FRAMEWORK_LABELS,
  getFrameworksForCountry,
} from "../../lib/countryFrameworkMapping";

interface CountryFrameworkSelectorProps {
  selectedCountry: string;
  selectedFrameworks: string[];
  onChange: (country: string, frameworks: string[]) => void;
}

export function CountryFrameworkSelector({
  selectedCountry,
  selectedFrameworks,
  onChange,
}: CountryFrameworkSelectorProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = useMemo(() => {
    if (!search) return COUNTRIES;
    const q = search.toLowerCase();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q),
    );
  }, [search]);

  const selectedCountryObj = COUNTRIES.find((c) => c.code === selectedCountry);
  const availableFrameworks = selectedCountryObj
    ? selectedCountryObj.frameworks
    : ["gdpr"];

  function handleCountrySelect(code: string) {
    const frameworks = getFrameworksForCountry(code);
    const country = COUNTRIES.find((c) => c.code === code);
    const primary = country?.primaryFramework || frameworks[0];
    onChange(code, [primary]);
    setIsOpen(false);
    setSearch("");
  }

  function handleFrameworkToggle(frameworkId: string, checked: boolean) {
    if (checked) {
      onChange(selectedCountry, [...selectedFrameworks, frameworkId]);
    } else {
      if (selectedFrameworks.length <= 1) return; // Keep at least one
      onChange(
        selectedCountry,
        selectedFrameworks.filter((f) => f !== frameworkId),
      );
    }
  }

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-foreground flex items-center gap-2">
        <Globe className="h-4 w-4 text-primary" />
        Country / Region
      </Label>

      {/* Country Selector */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2 border border-border rounded-lg bg-background text-sm hover:border-primary transition-colors"
        >
          <span className="flex items-center gap-2">
            {selectedCountryObj ? (
              <>
                <span className="text-lg">{selectedCountryObj.flag}</span>
                <span>{selectedCountryObj.name}</span>
              </>
            ) : (
              <span className="text-muted-foreground">Select country...</span>
            )}
          </span>
          <svg
            className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-lg shadow-lg">
            <div className="p-2 border-b border-border">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search countries..."
                  className="pl-7 h-8 text-sm"
                  autoFocus
                />
              </div>
            </div>
            <ScrollArea className="h-48">
              <div className="p-1">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country.code)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors text-left ${
                      selectedCountry === country.code
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }`}
                  >
                    <span className="text-base">{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {country.code}
                    </span>
                  </button>
                ))}
                {filteredCountries.length === 0 && (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    No countries found
                  </p>
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>

      {/* Framework Selection */}
      {selectedCountryObj && (
        <div className="space-y-2">
          <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Applicable Frameworks
          </Label>
          <div className="space-y-2">
            {availableFrameworks.map((frameworkId) => {
              const isPrimary =
                selectedCountryObj.primaryFramework === frameworkId;
              const isOptional =
                selectedCountryObj.optionalFrameworks?.includes(frameworkId);
              const isChecked = selectedFrameworks.includes(frameworkId);

              return (
                <div
                  key={frameworkId}
                  className="flex items-start gap-2 p-2 rounded-lg border border-border bg-muted/30"
                >
                  <Checkbox
                    id={`framework-${frameworkId}`}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleFrameworkToggle(frameworkId, !!checked)
                    }
                    disabled={
                      isPrimary && selectedFrameworks.length === 1 && isChecked
                    }
                  />
                  <div className="flex-1 min-w-0">
                    <label
                      htmlFor={`framework-${frameworkId}`}
                      className="text-sm font-medium cursor-pointer"
                    >
                      {FRAMEWORK_LABELS[frameworkId] || frameworkId}
                    </label>
                    {isOptional && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {frameworkId === "hipaa"
                          ? "Optional — for healthcare providers, clinics, and health-tech businesses"
                          : frameworkId === "gdpr"
                            ? "Optional — for businesses serving EU/EEA users"
                            : "Optional — enable if applicable to your business"}
                      </p>
                    )}
                  </div>
                  {isPrimary && (
                    <Badge variant="secondary" className="text-xs shrink-0">
                      Primary
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
