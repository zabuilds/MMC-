import {
  actionTransitions,
  exceptionTransitions,
  findingTransitions,
  ownerDecisionTransitions,
  qaTransitions,
  reportTransitions,
  vendorTransitions,
  visitTransitions,
} from "../src/lib/domain/transitions";

export type TransitionGraphIssue = {
  domain: string;
  state: string;
  issue: string;
};

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

/**
 * Static graph checks for the canonical lifecycle maps.
 * This intentionally does not mutate data or require a test runner.
 */
export function checkTransitionGraphIntegrity(): TransitionGraphIssue[] {
  const issues: TransitionGraphIssue[] = [];

  for (const [domain, transitions] of Object.entries(maps)) {
    for (const [state, nextStates] of Object.entries(transitions)) {
      const duplicates = nextStates.filter((next, index) => nextStates.indexOf(next) !== index);
      if (duplicates.length > 0) {
        issues.push({ domain, state, issue: `Duplicate transition target: ${duplicates[0]}` });
      }

      if (nextStates.includes(state)) {
        issues.push({ domain, state, issue: "Self-transition exists in canonical map" });
      }
    }
  }

  return issues;
}
