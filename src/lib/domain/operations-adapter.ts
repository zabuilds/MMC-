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

const visitMap: Record<Exclude<OperationsVisitStatus, "cancelled">, string> = {
  scheduled: "Scheduled",
  assigned: "Scheduled",
  in_progress: "Started",
  completed: "Completed",
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
  if (current === "cancelled" || next === "cancelled") {
    return { allowed: false, reason: "Operations cancellation has no canonical transition" };
  }
  return allowTransition(visitMap[current], visitMap[next], visitTransitions);
}

export function validateOperationsFindingTransition(current: OperationsFindingStatus, next: OperationsFindingStatus): TransitionResult {
  return allowTransition(findingMap[current], findingMap[next], findingTransitions);
}

export function validateOperationsActionTransition(current: OperationsActionStatus, next: OperationsActionStatus): TransitionResult {
  return allowTransition(actionMap[current], actionMap[next], actionTransitions);
}

/**
 * An open finding may directly initiate an action. The action itself is the
 * operational acknowledgement event, so we do not invent a database
 * acknowledgement state that the findings table cannot persist.
 */
export function canCreateActionForFinding(status: OperationsFindingStatus): boolean {
  return status === "open" || status === "acknowledged";
}

export function getFindingActionCreationReason(status: OperationsFindingStatus): string {
  if (status === "open") {
    return "Open finding may initiate an operational action; creating the action serves as the operational acknowledgement event.";
  }
  if (status === "acknowledged") {
    return "Acknowledged finding may initiate an operational action.";
  }
  if (status === "actioned") {
    return "This finding is already actioned; use the existing action workflow instead of creating another action here.";
  }
  return "Verified or closed findings cannot initiate new operational actions.";
}
