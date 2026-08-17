import {
  actionTransitions,
  exceptionTransitions,
  findingTransitions,
  qaTransitions,
  reportTransitions,
  vendorTransitions,
  visitTransitions,
  ownerDecisionTransitions,
  allowTransition,
} from "../src/lib/domain/transitions";

export type TransitionCase = {
  domain: string;
  current: string;
  next: string;
  expected: boolean;
};

export const operationsTransitionCases: TransitionCase[] = [
  { domain: "visit", current: "Planned", next: "Scheduled", expected: true },
  { domain: "visit", current: "Scheduled", next: "Started", expected: true },
  { domain: "visit", current: "Started", next: "Completed", expected: true },
  { domain: "visit", current: "Completed", next: "Reviewed", expected: true },
  { domain: "visit", current: "Reviewed", next: "Closed", expected: true },
  { domain: "visit", current: "Planned", next: "Started", expected: false },
  { domain: "visit", current: "Completed", next: "Closed", expected: false },
  { domain: "visit", current: "Planned", next: "Planned", expected: false },
  { domain: "finding", current: "Open", next: "Triaged", expected: true },
  { domain: "finding", current: "Triaged", next: "Actioned", expected: true },
  { domain: "finding", current: "Actioned", next: "Monitored", expected: true },
  { domain: "finding", current: "Actioned", next: "Resolved", expected: true },
  { domain: "finding", current: "Monitored", next: "Resolved", expected: true },
  { domain: "finding", current: "Resolved", next: "Verified", expected: true },
  { domain: "finding", current: "Open", next: "Actioned", expected: false },
  { domain: "finding", current: "Verified", next: "Closed", expected: false },
  { domain: "finding", current: "Closed", next: "Open", expected: false },
  { domain: "action", current: "Open", next: "Assigned", expected: true },
  { domain: "action", current: "Assigned", next: "Blocked", expected: true },
  { domain: "action", current: "Assigned", next: "In Progress", expected: true },
  { domain: "action", current: "Blocked", next: "Assigned", expected: true },
  { domain: "action", current: "Blocked", next: "In Progress", expected: true },
  { domain: "action", current: "In Progress", next: "Completed", expected: true },
  { domain: "action", current: "Completed", next: "Verified", expected: true },
  { domain: "action", current: "Verified", next: "Closed", expected: true },
  { domain: "action", current: "Open", next: "Completed", expected: false },
  { domain: "action", current: "Closed", next: "Open", expected: false },
  { domain: "ownerDecision", current: "Requested", next: "Pending", expected: true },
  { domain: "ownerDecision", current: "Pending", next: "Approved", expected: true },
  { domain: "ownerDecision", current: "Pending", next: "Declined", expected: true },
  { domain: "ownerDecision", current: "Pending", next: "Expired", expected: true },
  { domain: "ownerDecision", current: "Approved", next: "Pending", expected: false },
  { domain: "vendor", current: "Pending Authorization", next: "Authorized", expected: true },
  { domain: "vendor", current: "Authorized", next: "Assigned", expected: true },
  { domain: "vendor", current: "Assigned", next: "Scheduled", expected: true },
  { domain: "vendor", current: "Scheduled", next: "In Progress", expected: true },
  { domain: "vendor", current: "In Progress", next: "Completed", expected: true },
  { domain: "vendor", current: "Completed", next: "Verified", expected: true },
  { domain: "vendor", current: "Verified", next: "In Progress", expected: true },
  { domain: "vendor", current: "Escalated", next: "Cancelled", expected: true },
  { domain: "vendor", current: "Cancelled", next: "Assigned", expected: false },
  { domain: "report", current: "Draft", next: "Review", expected: true },
  { domain: "report", current: "Review", next: "Approved", expected: true },
  { domain: "report", current: "Approved", next: "Delivered", expected: true },
  { domain: "report", current: "Delivered", next: "Archived", expected: true },
  { domain: "report", current: "Archived", next: "Draft", expected: false },
  { domain: "qa", current: "Pending", next: "Pass", expected: true },
  { domain: "qa", current: "Pending", next: "Pass With Notes", expected: true },
  { domain: "qa", current: "Pending", next: "Fail", expected: true },
  { domain: "qa", current: "Fail", next: "Pending", expected: true },
  { domain: "qa", current: "Pass", next: "Pending", expected: false },
  { domain: "exception", current: "Open", next: "Resolved", expected: true },
  { domain: "exception", current: "Resolved", next: "Open", expected: false },
  { domain: "exception", current: "Open", next: "Open", expected: false },
];

const maps = {
  visit: visitTransitions,
  finding: findingTransitions,
  action: actionTransitions,
  ownerDecision: ownerDecisionTransitions,
  vendor: vendorTransitions,
  report: reportTransitions,
  qa: qaTransitions,
  exception: exceptionTransitions,
} as const;

export function runOperationsTransitionCases(): { passed: number; failed: TransitionCase[] } {
  const failed: TransitionCase[] = [];

  for (const testCase of operationsTransitionCases) {
    const result = allowTransition(testCase.current, testCase.next, maps[testCase.domain as keyof typeof maps]);
    if (result.allowed !== testCase.expected) failed.push(testCase);
  }

  return { passed: operationsTransitionCases.length - failed.length, failed };
}
