import type {
  OperationsActionStatus,
  OperationsFindingStatus,
  OperationsVisitStatus,
} from "../src/lib/domain/operations-adapter";

/**
 * Application-to-canonical vocabulary contract.
 *
 * This is intentionally separate from persistence mappings: UI vocabulary
 * must not silently become a new database state.
 */
export const operationsAdapterStatusContract = {
  visit: {
    scheduled: "Scheduled",
    assigned: "Scheduled",
    in_progress: "Started",
    completed: "Completed",
    cancelled: null,
  } satisfies Record<OperationsVisitStatus, string | null>,
  finding: {
    open: "Open",
    acknowledged: "Triaged",
    actioned: "Actioned",
    verified: "Verified",
    closed: "Resolved",
  } satisfies Record<OperationsFindingStatus, string>,
  action: {
    open: "Open",
    assigned: "Assigned",
    in_progress: "In Progress",
    blocked: "Blocked",
    completed: "Completed",
    verified: "Verified",
    closed: "Closed",
  } satisfies Record<OperationsActionStatus, string>,
} as const;

export const adapterVocabularyDecisions = {
  visitAssigned: "Application alias for Scheduled; not a distinct canonical transition.",
  visitCancelled: "Explicitly unsupported until canonical cancellation exists.",
  findingAcknowledged: "Application vocabulary maps to Triaged; creating an action from Open is the acknowledgement event.",
  findingClosed: "Application vocabulary maps to Resolved; Verified -> Closed remains blocked pending business decision.",
  actionStates: "Application action states map directly to canonical action states.",
} as const;
