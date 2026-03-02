import { useMemo } from "react";
import type { ComplianceItem, DocumentInputs } from "../types/documentTypes";

export function useComplianceChecklist(
  inputs: DocumentInputs,
): ComplianceItem[] {
  return useMemo((): ComplianceItem[] => {
    const items: ComplianceItem[] = [
      {
        id: "business-name",
        label: "Business name provided",
        description: "Your business name is required for the policy header",
        status: inputs.businessName.trim() ? "pass" : "fail",
        visible: true,
      },
      {
        id: "contact-email",
        label: "Contact email provided",
        description: "A contact email is required for data subject requests",
        status: inputs.contactEmail.trim() ? "pass" : "fail",
        visible: true,
      },
      {
        id: "website-url",
        label: "Website URL provided",
        description: "Your website URL is required for the policy",
        status: inputs.websiteUrl.trim() ? "pass" : "fail",
        visible: true,
      },
      {
        id: "lawful-basis",
        label: "Lawful basis defined",
        description: "Country regulation defines lawful basis for processing",
        status: inputs.selectedCountry ? "pass" : "fail",
        visible: true,
      },
      {
        id: "retention-period",
        label: "Data retention period set",
        description: "A data retention period must be specified",
        status: inputs.dataRetention ? "pass" : "warning",
        visible: true,
      },
      {
        id: "business-type",
        label: "Business type selected",
        description: "Business type adds specific clauses to your policy",
        status: inputs.businessType ? "pass" : "warning",
        visible: true,
      },
      {
        id: "cookie-disclosure",
        label: "Cookie disclosure included",
        description: "Cookie usage requires a disclosure clause",
        status: inputs.usesCookies ? "pass" : "warning",
        visible: inputs.usesCookies,
      },
      {
        id: "analytics-disclosure",
        label: "Analytics disclosure included",
        description: "Analytics provider requires a disclosure clause",
        status:
          inputs.analyticsProvider && inputs.analyticsProvider !== "none"
            ? "pass"
            : "warning",
        visible: !!(
          inputs.analyticsProvider && inputs.analyticsProvider !== "none"
        ),
      },
      {
        id: "payment-processor",
        label: "Payment processor named",
        description: "Payment processor requires a named disclosure",
        status:
          inputs.paymentProcessor && inputs.paymentProcessor !== "none"
            ? "pass"
            : "warning",
        visible: !!(
          inputs.paymentProcessor && inputs.paymentProcessor !== "none"
        ),
      },
      {
        id: "children-clause",
        label: "Children's data clause included",
        description: "Children's data collection requires special clauses",
        status: inputs.collectsChildrenData ? "pass" : "fail",
        visible: inputs.collectsChildrenData,
      },
      {
        id: "cross-border",
        label: "Cross-border transfer clause included",
        description: "Storing data outside country requires transfer clause",
        status: inputs.transfersDataCrossBorder ? "pass" : "fail",
        visible: inputs.transfersDataCrossBorder,
      },
    ];

    return items;
  }, [inputs]);
}
