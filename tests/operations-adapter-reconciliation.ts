import {
  canCreateActionForFinding,
  validateOperationsActionTransition,
  validateOperationsFindingTransition,
  validateOperationsVisitTransition,
} from "../src/lib/domain/operations-adapter";

export type ReconciliationIssue = {
  domain: "visit" | "finding" | "action";
  issue: string;
};

export function runOperationsAdapterReconciliation(): ReconciliationIssue[] {
  const issues: ReconciliationIssue[] = [];

  if (validateOperationsVisitTransition("assigned", "in_progress").allowed !== true) {
    issues.push({ domain: "visit", issue: "assigned alias should behave like scheduled -> started" });
  }

  if (validateOperationsVisitTransition("cancelled", "scheduled").allowed !== false) {
    issues.push({ domain: "visit", issue: "cancelled must remain terminal/unsupported" });
  }

  if (validateOperationsFindingTransition("open", "acknowledged").allowed !== true) {
    issues.push({ domain: "finding", issue: "open -> acknowledged application transition must map to Open -> Triaged" });
  }

  if (validateOperationsFindingTransition("verified", "closed").allowed !== false) {
    issues.push({ domain: "finding", issue: "verified -> closed remains blocked pending canonical decision" });
  }

  if (validateOperationsActionTransition("verified", "closed").allowed !== true) {
    issues.push({ domain: "action", issue: "verified -> closed action transition must remain allowed" });
  }

  if (canCreateActionForFinding("open") !== true || canCreateActionForFinding("verified") !== false) {
    issues.push({ domain: "finding", issue: "finding action-creation eligibility drifted" });
  }

  return issues;
}
