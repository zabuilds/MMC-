export const roles = [
  "client",
  "operator",
  "operations",
  "manager_qa",
  "administrator",
  "founder_executive",
] as const;

export type Role = (typeof roles)[number];

export const visitStates = [
  "scheduled",
  "assigned",
  "in_progress",
  "completed",
  "cancelled",
] as const;

export type VisitState = (typeof visitStates)[number];

export const findingStates = [
  "open",
  "acknowledged",
  "actioned",
  "verified",
  "closed",
] as const;

export type FindingState = (typeof findingStates)[number];

export const actionStates = [
  "open",
  "assigned",
  "in_progress",
  "blocked",
  "completed",
  "verified",
  "closed",
] as const;

export type ActionState = (typeof actionStates)[number];

export const incidentStates = [
  "detected",
  "assessed",
  "escalated",
  "contained",
  "recovering",
  "resolved",
  "closed",
] as const;

export type IncidentState = (typeof incidentStates)[number];

export const reportStates = [
  "draft",
  "review",
  "approved",
  "delivered",
  "archived",
] as const;

export type ReportState = (typeof reportStates)[number];

export const communicationStates = [
  "draft",
  "ready",
  "sent",
  "acknowledged",
] as const;

export type CommunicationState = (typeof communicationStates)[number];

export const evidenceStates = [
  "captured",
  "associated",
  "verified",
  "retained",
] as const;

export type EvidenceState = (typeof evidenceStates)[number];

export const priorities = ["routine", "attention", "urgent", "critical"] as const;
export type Priority = (typeof priorities)[number];

export const capacityStates = ["green", "yellow", "red"] as const;
export type CapacityState = (typeof capacityStates)[number];

export interface ClientRef {
  id: string;
  displayName: string;
}

export interface VesselRef {
  id: string;
  clientId: string;
  name: string;
}

export interface VisitRef {
  id: string;
  vesselId: string;
  state: VisitState;
  scheduledAt?: string;
  assignedOperatorId?: string;
}

export interface FindingRef {
  id: string;
  vesselId: string;
  visitId: string;
  state: FindingState;
  priority: Priority;
  title: string;
}

export interface ActionRef {
  id: string;
  findingId?: string;
  vesselId: string;
  state: ActionState;
  priority: Priority;
  ownerId?: string;
  dueAt?: string;
}

export interface EvidenceRef {
  id: string;
  vesselId: string;
  sourceId: string;
  state: EvidenceState;
  capturedAt: string;
}

export interface ReportRef {
  id: string;
  vesselId: string;
  visitId: string;
  state: ReportState;
}

export interface IncidentRef {
  id: string;
  vesselId: string;
  state: IncidentState;
  priority: Priority;
}

export interface CommunicationRef {
  id: string;
  vesselId?: string;
  state: CommunicationState;
  priority: Priority;
}

export interface VendorRef {
  id: string;
  name: string;
  category: string;
  approved: boolean;
}

export interface AuditEvent {
  id: string;
  actorId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  occurredAt: string;
  reason?: string;
}
