import {
  actionTransitions,
  exceptionTransitions,
  findingTransitions,
  ownerDecisionTransitions,
  qaTransitions,
  reportTransitions,
  vendorTransitions,
  visitTransitions,
  allowTransition,
} from "../src/lib/domain/transitions";

export type TransitionInvariantFailure = {
  domain: string;
  current: string;
  next: string;
  reason: string;
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

export function checkOperationsTransitionInvariants(): TransitionInvariantFailure[] {
  const failures: TransitionInvariantFailure[] = [];

  for (const [domain, transitions] of Object.entries(maps)) {
    for (const [current, nextStates] of Object.entries(transitions)) {
      const sameState = allowTransition(current, current, transitions);
      if (sameState.allowed) {
        failures.push({
          domain,
          current,
          next: current,
          reason: "Same-state transition was allowed",
        });
      }

      for (const next of nextStates) {
        const result = allowTransition(current, next, transitions);
        if (!result.allowed) {
          failures.push({
            domain,
            current,
            next,
            reason: result.reason,
          });
        }
      }
    }
  }

  return failures;
}
