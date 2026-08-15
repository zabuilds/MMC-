export type TransitionResult =
  | { allowed: true }
  | { allowed: false; reason: string };

export function allowTransition(current: string, next: string, allowed: Record<string, readonly string[]>): TransitionResult {
  if (current === next) return { allowed: false, reason: "Transition is not a state change" };
  if (!allowed[current]?.includes(next)) {
    return { allowed: false, reason: `Invalid transition: ${current} -> ${next}` };
  }
  return { allowed: true };
}

export const visitTransitions = {
  Planned: ["Scheduled"],
  Scheduled: ["Started"],
  Started: ["Completed"],
  Completed: ["Reviewed"],
  Reviewed: ["Closed"],
} as const;

export const findingTransitions = {
  Open: ["Triaged"],
  Triaged: ["Actioned"],
  Actioned: ["Monitored", "Resolved"],
  Monitored: ["Resolved"],
  Resolved: ["Verified"],
} as const;

export const actionTransitions = {
  Open: ["Assigned"],
  Assigned: ["Blocked", "In Progress"],
  Blocked: ["Assigned", "In Progress"],
  "In Progress": ["Completed"],
  Completed: ["Verified"],
  Verified: ["Closed"],
} as const;

export const ownerDecisionTransitions = {
  Requested: ["Pending"],
  Pending: ["Approved", "Declined", "Expired"],
} as const;

export const vendorTransitions = {
  "Pending Authorization": ["Authorized", "Escalated", "Cancelled"],
  Authorized: ["Assigned", "Escalated", "Cancelled"],
  Assigned: ["Scheduled", "Escalated", "Cancelled"],
  Scheduled: ["In Progress", "Escalated", "Cancelled"],
  "In Progress": ["Completed", "Escalated", "Cancelled"],
  Completed: ["Verified", "Escalated"],
  Verified: ["In Progress", "Escalated"],
  Escalated: ["Authorized", "Assigned", "Cancelled"],
  Cancelled: [],
} as const;

export const reportTransitions = {
  Draft: ["Review"],
  Review: ["Approved"],
  Approved: ["Delivered"],
  Delivered: ["Archived"],
  Archived: [],
} as const;

export const qaTransitions = {
  Pending: ["Pass", "Pass With Notes", "Fail"],
  Fail: ["Pending"],
  Pass: [],
  "Pass With Notes": [],
} as const;

export const exceptionTransitions = {
  Open: ["Resolved"],
  Resolved: [],
} as const;
