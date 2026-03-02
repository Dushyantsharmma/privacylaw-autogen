import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Building2, Globe, Settings2, Shield } from "lucide-react";
import React from "react";
import type { SupportedLanguage } from "../../lib/translations";
import type { DocumentInputs } from "../../types/documentTypes";
import { CountryFrameworkSelector } from "./CountryFrameworkSelector";
import { LanguageSelector } from "./LanguageSelector";

interface SmartInputPanelProps {
  inputs: DocumentInputs;
  onUpdate: (updates: Partial<DocumentInputs>) => void;
}

export function SmartInputPanel({ inputs, onUpdate }: SmartInputPanelProps) {
  return (
    <Card className="border-border/60">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Settings2 className="h-4 w-4 text-primary" />
          Document Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Country & Framework */}
        <div>
          <CountryFrameworkSelector
            selectedCountry={inputs.selectedCountry}
            selectedFrameworks={inputs.selectedFrameworks}
            onChange={(country, frameworks) =>
              onUpdate({
                selectedCountry: country,
                selectedFrameworks: frameworks,
                country,
              })
            }
          />
        </div>

        <Separator />

        {/* Business Info */}
        <div className="space-y-3">
          <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5" />
            Business Information
          </Label>

          <div className="space-y-1.5">
            <Label htmlFor="businessType" className="text-sm">
              Business Type
            </Label>
            <Select
              value={inputs.businessType}
              onValueChange={(v) => onUpdate({ businessType: v })}
            >
              <SelectTrigger id="businessType">
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="saas">SaaS / Software</SelectItem>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="blog">Blog / Content</SelectItem>
                <SelectItem value="healthcare">Healthcare / Medical</SelectItem>
                <SelectItem value="fintech">Fintech / Finance</SelectItem>
                <SelectItem value="educational">Education</SelectItem>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="agency">Agency / Services</SelectItem>
                <SelectItem value="nonprofit">Non-Profit</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="businessName" className="text-sm">
              Business Name *
            </Label>
            <Input
              id="businessName"
              value={inputs.businessName}
              onChange={(e) => onUpdate({ businessName: e.target.value })}
              placeholder="Acme Corp"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="websiteUrl" className="text-sm">
              Website URL *
            </Label>
            <Input
              id="websiteUrl"
              value={inputs.websiteUrl}
              onChange={(e) => onUpdate({ websiteUrl: e.target.value })}
              placeholder="https://example.com"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contactEmail" className="text-sm">
              Contact Email *
            </Label>
            <Input
              id="contactEmail"
              type="email"
              value={inputs.contactEmail}
              onChange={(e) => onUpdate({ contactEmail: e.target.value })}
              placeholder="privacy@example.com"
            />
          </div>
        </div>

        <Separator />

        {/* Data Practices */}
        <div className="space-y-3">
          <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" />
            Data Practices
          </Label>

          <div className="space-y-1.5">
            <Label htmlFor="dataRetention" className="text-sm">
              Data Retention Period
            </Label>
            <Select
              value={inputs.dataRetention}
              onValueChange={(v) => onUpdate({ dataRetention: v })}
            >
              <SelectTrigger id="dataRetention">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6 months">6 months</SelectItem>
                <SelectItem value="1 year">1 year</SelectItem>
                <SelectItem value="2 years">2 years</SelectItem>
                <SelectItem value="3 years">3 years</SelectItem>
                <SelectItem value="5 years">5 years</SelectItem>
                <SelectItem value="7 years">
                  7 years (legal requirement)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="analyticsProvider" className="text-sm">
              Analytics Provider
            </Label>
            <Select
              value={inputs.analyticsProvider}
              onValueChange={(v) => onUpdate({ analyticsProvider: v })}
            >
              <SelectTrigger id="analyticsProvider">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="Google Analytics">
                  Google Analytics
                </SelectItem>
                <SelectItem value="Meta Pixel">Meta Pixel</SelectItem>
                <SelectItem value="Mixpanel">Mixpanel</SelectItem>
                <SelectItem value="Amplitude">Amplitude</SelectItem>
                <SelectItem value="Plausible">
                  Plausible (privacy-friendly)
                </SelectItem>
                <SelectItem value="Fathom">
                  Fathom (privacy-friendly)
                </SelectItem>
                <SelectItem value="Hotjar">Hotjar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="paymentProcessor" className="text-sm">
              Payment Processor
            </Label>
            <Select
              value={inputs.paymentProcessor}
              onValueChange={(v) => onUpdate({ paymentProcessor: v })}
            >
              <SelectTrigger id="paymentProcessor">
                <SelectValue placeholder="Select processor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None / Not applicable</SelectItem>
                <SelectItem value="Stripe">Stripe</SelectItem>
                <SelectItem value="PayPal">PayPal</SelectItem>
                <SelectItem value="Razorpay">Razorpay</SelectItem>
                <SelectItem value="Square">Square</SelectItem>
                <SelectItem value="Braintree">Braintree</SelectItem>
                <SelectItem value="Paddle">Paddle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        {/* Toggles */}
        <div className="space-y-3">
          <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" />
            Additional Options
          </Label>

          <div className="flex items-center justify-between">
            <Label htmlFor="usesCookies" className="text-sm cursor-pointer">
              Uses Cookies
            </Label>
            <Switch
              id="usesCookies"
              checked={inputs.usesCookies}
              onCheckedChange={(v) => onUpdate({ usesCookies: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label
              htmlFor="collectsChildrenData"
              className="text-sm cursor-pointer"
            >
              Collects Children's Data
            </Label>
            <Switch
              id="collectsChildrenData"
              checked={inputs.collectsChildrenData}
              onCheckedChange={(v) => onUpdate({ collectsChildrenData: v })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label
              htmlFor="transfersDataCrossBorder"
              className="text-sm cursor-pointer"
            >
              Cross-Border Data Transfers
            </Label>
            <Switch
              id="transfersDataCrossBorder"
              checked={inputs.transfersDataCrossBorder}
              onCheckedChange={(v) => onUpdate({ transfersDataCrossBorder: v })}
            />
          </div>
        </div>

        <Separator />

        {/* Language */}
        <LanguageSelector
          value={inputs.outputLanguage}
          onChange={(lang: SupportedLanguage) =>
            onUpdate({ outputLanguage: lang })
          }
        />
      </CardContent>
    </Card>
  );
}
