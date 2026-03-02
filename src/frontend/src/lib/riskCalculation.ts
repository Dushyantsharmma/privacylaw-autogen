import type {
  ComplianceItem,
  DocumentInputs,
  RiskLevel,
  RiskScore,
} from "../types/documentTypes";

export function calculateRiskScore(
  inputs: DocumentInputs,
  complianceItems: ComplianceItem[],
): RiskScore {
  let score = 0;
  const factors: string[] = [];

  // Missing required fields (20 points each)
  if (!inputs.businessName.trim()) {
    score += 20;
    factors.push("Business name is missing");
  }
  if (!inputs.contactEmail.trim()) {
    score += 20;
    factors.push("Contact email is missing");
  }
  if (!inputs.websiteUrl.trim()) {
    score += 20;
    factors.push("Website URL is missing");
  }

  // High-risk configurations without clauses (15 points each)
  if (inputs.collectsChildrenData && !inputs.businessType) {
    score += 15;
    factors.push("Children's data collected without business type specified");
  }
  if (
    inputs.transfersDataCrossBorder &&
    inputs.selectedFrameworks?.includes("india-dpdp-2023")
  ) {
    score += 10;
    factors.push(
      "Cross-border data storage under DPDP requires additional compliance",
    );
  }

  // Failed compliance checklist items (5 points each)
  const failedItems = complianceItems.filter(
    (item) => item.visible && item.status === "fail",
  );
  const warningItems = complianceItems.filter(
    (item) => item.visible && item.status === "warning",
  );

  score += failedItems.length * 8;
  score += warningItems.length * 4;

  if (failedItems.length > 0) {
    factors.push(`${failedItems.length} compliance check(s) failed`);
  }
  if (warningItems.length > 0) {
    factors.push(`${warningItems.length} compliance warning(s)`);
  }

  // Cap at 100
  score = Math.min(100, score);

  let level: RiskLevel;
  if (score <= 33) level = "Low";
  else if (score <= 66) level = "Medium";
  else level = "High";

  return { score, level, factors };
}
