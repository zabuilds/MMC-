import {
  actionTransitions,
  findingTransitions,
  visitTransitions,
  allowTransition,
  type TransitionResult,
} from "./transitions";

export type OperationsVisitStatus = "scheduled" | "assigned" | "in_progress" | "completed" | "cancelled";
export type OperationsFindingStatus = "open" | "acknowledged" | "actioned" | "verified" | "closed";
export type OperationsActionStatus = "open" | "assigned" | "in_progress" | "blocked" | "completed" | "verified" | "closed";

const visitMap: Record<OperationsVisitStatus, string> = {
  scheduled: "Scheduled",
  assigned: "Scheduled",
  in_progress: "Started",
  completed: "Completed",
  cancelled: "Closed",
};

const findingMap: Record<OperationsFindingStatus, string> = {
  open: "Open",
  acknowledged: "Triaged",
  actioned: "Actioned",
  verified: "Verified",
  closed: "Resolved",
};

const actionMap: Record<OperationsActionStatus, string> = {
  open: "Open",
  assigned: "Assigned",
  in_progress: "In Progress",
  blocked: "Blocked",
  completed: "Completed",
  verified: "Verified",
  closed: "Closed",
};

export function validateOperationsVisitTransition(current: OperationsVisitStatus, next: OperationsVisitStatus): TransitionResult {
  return allowTransition(visitMap[current], visitMap[next], visitTransitions);
}

export function validateOperationsFindingTransition(current: OperationsFindingStatus, next: OperationsFindingStatus): TransitionResult {
  return allowTransition(findingMap[current], findingMap[next], findingTransitions);
}

export function validateOperationsActionTransition(current: OperationsActionStatus, next: OperationsActionStatus): TransitionResult {
  return allowTransition(actionMap[current], actionMap[next], actionTransitions);
}
