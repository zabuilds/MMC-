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

export type TransitionCoverageRow = {
  domain: string;
  current: string;
  next: string;
  accepted: boolean;
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

export function buildOperationsTransitionCoverage(): TransitionCoverageRow[] {
  return Object.entries(maps).flatMap(([domain, transitions]) =>
    Object.entries(transitions).flatMap(([current, nextStates]) =>
      nextStates.map((next) => ({
        domain,
        current,
        next,
        accepted: allowTransition(current, next, transitions).allowed,
      })),
    ),
  );
}

export function getOperationsTransitionCoverageSummary() {
  const rows = buildOperationsTransitionCoverage();
  const accepted = rows.filter((row) => row.accepted).length;

  return {
    totalCanonicalEdges: rows.length,
    acceptedEdges: accepted,
    rejectedCanonicalEdges: rows.length - accepted,
    coveragePercent: rows.length === 0 ? 100 : (accepted / rows.length) * 100,
    byDomain: Object.fromEntries(
      Object.keys(maps).map((domain) => {
        const domainRows = rows.filter((row) => row.domain === domain);
        const domainAccepted = domainRows.filter((row) => row.accepted).length;
        return [domain, { total: domainRows.length, accepted: domainAccepted }];
      }),
    ),
  };
}
