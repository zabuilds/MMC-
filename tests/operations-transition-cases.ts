import {
  actionTransitions,
  exceptionTransitions,
  findingTransitions,
  qaTransitions,
  reportTransitions,
  vendorTransitions,
  visitTransitions,
  allowTransition,
} from "../src/lib/domain/transitions";

export type TransitionCase = {
  domain: string;
  current: string;
  next: string;
  allowed: boolean;
};

export const operationsTransitionCases: TransitionCase[] = [
  ["visit", "Planned", "Scheduled", true],
  ["visit", "Scheduled", "Started", true],
  ["visit", "Started", "Completed", true],
  ["visit", "Completed", "Reviewed", true],
  ["visit", "Reviewed", "Closed", true],
  ["visit", "Planned", "Started", false],
  ["visit", "Completed", "Closed", false],
  ["finding", "Open", "Triaged", true],
  ["finding", "Triaged", "Actioned", true],
  ["finding", "Actioned", "Monitored", true],
  ["finding", "Actioned", "Resolved", true],
  ["finding", "Monitored", "Resolved", true],
  ["finding", "Resolved", "Verified", true],
  ["finding", "Open", "Actioned", false],
  ["finding", "Verified", "Closed", false],
  ["action", "Open", "Assigned", true],
  ["action", "Assigned", "Blocked", true],
  ["action", "Assigned", "In Progress", true],
  ["action", "Blocked", "Assigned", true],
  ["action", "Blocked", "In Progress", true],
  ["action", "In Progress", "Completed", true],
  ["action", "Completed", "Verified", true],
  ["action", "Verified", "Closed", true],
  ["action", "Open", "Completed", false],
  ["ownerDecision", "Requested", "Pending", true],
  ["ownerDecision", "Pending", "Approved", true],
  ["ownerDecision", "Pending", "Declined", true],
  ["ownerDecision", "Pending", "Expired", true],
  ["vendor", "Pending Authorization", "Authorized", true],
  ["vendor", "Authorized", "Assigned", true],
  ["vendor", "Assigned", "Scheduled", true],
  ["vendor", "Scheduled", "In Progress", true],
  ["vendor", "In Progress", "Completed", true],
  ["vendor", "Completed", "Verified", true],
  ["vendor", "Verified", "In Progress", true],
  ["vendor", "Escalated", "Cancelled", true],
  ["report", "Draft", "Review", true],
  ["report", "Review", "Approved", true],
  ["report", "Approved", "Delivered", true],
  ["report", "Delivered", "Archived", true],
  ["qa", "Pending", "Pass", true],
  ["qa", "Pending", "Pass With Notes", true],
  ["qa", "Pending", "Fail", true],
  ["qa", "Fail", "Pending", true],
  ["exception", "Open", "Resolved", true],
  ["exception", "Resolved", "Open", false],
];

const maps: Record<string, Record<string, readonly string[]>> = {
  visit: visitTransitions,
  finding: findingTransitions,
  action: actionTransitions,
  ownerDecision: { Requested: ["Pending"], Pending: ["Approved", "Declined", "Expired"] },
  vendor: vendorTransitions,
  report: reportTransitions,
  qa: qaTransitions,
  exception: exceptionTransitions,
};

export function runOperationsTransitionCases(): { passed: number; failed: TransitionCase[] } {
  const failed: TransitionCase[] = [];

  for (const [domain, current, next, expected] of operationsTransitionCases) {
    const result = allowTransition(current, next, maps[domain]);
    if (result.allowed !== expected) {
      failed.push({ domain, current, next, allowed: expected });
    }
  }

  return { passed: operationsTransitionCases.length - failed.length, failed };
}
