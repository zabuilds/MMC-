import {
  canCreateActionForFinding,
  validateOperationsActionTransition,
  validateOperationsFindingTransition,
  validateOperationsVisitTransition,
  type OperationsActionStatus,
  type OperationsFindingStatus,
  type OperationsVisitStatus,
} from "../src/lib/domain/operations-adapter";

export type AdapterCoverageCase = {
  domain: "visit" | "finding" | "action";
  current: string;
  next: string;
  expected: boolean;
};

export const operationsAdapterCoverageCases: AdapterCoverageCase[] = [
  { domain: "visit", current: "scheduled", next: "in_progress", expected: true },
  { domain: "visit", current: "in_progress", next: "completed", expected: true },
  { domain: "visit", current: "completed", next: "scheduled", expected: false },
  { domain: "visit", current: "scheduled", next: "cancelled", expected: false },
  { domain: "visit", current: "cancelled", next: "scheduled", expected: false },
  { domain: "finding", current: "open", next: "acknowledged", expected: true },
  { domain: "finding", current: "acknowledged", next: "actioned", expected: true },
  { domain: "finding", current: "actioned", next: "verified", expected: true },
  { domain: "finding", current: "open", next: "verified", expected: false },
  { domain: "finding", current: "verified", next: "closed", expected: false },
  { domain: "action", current: "open", next: "assigned", expected: true },
  { domain: "action", current: "assigned", next: "in_progress", expected: true },
  { domain: "action", current: "in_progress", next: "completed", expected: true },
  { domain: "action", current: "completed", next: "verified", expected: true },
  { domain: "action", current: "verified", next: "closed", expected: true },
  { domain: "action", current: "open", next: "completed", expected: false },
];

export function runOperationsAdapterCoverage() {
  const failed = operationsAdapterCoverageCases.filter((testCase) => {
    const result =
      testCase.domain === "visit"
        ? validateOperationsVisitTransition(testCase.current as OperationsVisitStatus, testCase.next as OperationsVisitStatus)
        : testCase.domain === "finding"
          ? validateOperationsFindingTransition(testCase.current as OperationsFindingStatus, testCase.next as OperationsFindingStatus)
          : validateOperationsActionTransition(testCase.current as OperationsActionStatus, testCase.next as OperationsActionStatus);

    return result.allowed !== testCase.expected;
  });

  const findingActionCreation = {
    open: canCreateActionForFinding("open"),
    acknowledged: canCreateActionForFinding("acknowledged"),
    actioned: canCreateActionForFinding("actioned"),
    verified: canCreateActionForFinding("verified"),
    closed: canCreateActionForFinding("closed"),
  };

  return {
    passed: operationsAdapterCoverageCases.length - failed.length,
    failed,
    findingActionCreation,
  };
}
