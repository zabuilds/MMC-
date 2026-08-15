export type AuditEventType =
  | "visit_created"
  | "visit_started"
  | "finding_created"
  | "evidence_added"
  | "action_created"
  | "action_assigned"
  | "action_completed"
  | "action_verified"
  | "decision_requested"
  | "decision_recorded"
  | "communication_prepared"
  | "communication_delivered"
  | "report_reviewed"
  | "report_approved"
  | "report_delivered";

export type AuditEvent = {
  id: string;
  type: AuditEventType;
  occurredAt: string;
  actor: string;
  vesselId: string;
  visitId: string;
  findingId?: string;
  actionId?: string;
  description: string;
};

export const auditEventLabel: Record<AuditEventType, string> = {
  visit_created: "Visit created",
  visit_started: "Visit started",
  finding_created: "Finding created",
  evidence_added: "Evidence added",
  action_created: "Action created",
  action_assigned: "Action assigned",
  action_completed: "Action completed",
  action_verified: "Action verified",
  decision_requested: "Owner decision requested",
  decision_recorded: "Owner decision recorded",
  communication_prepared: "Communication prepared",
  communication_delivered: "Communication delivered",
  report_reviewed: "Report reviewed",
  report_approved: "Report approved",
  report_delivered: "Report delivered",
};

export const constructionAuditEvents: AuditEvent[] = [
  {
    id: "evt-001",
    type: "visit_started",
    occurredAt: "Today · 09:00",
    actor: "Assigned operator",
    vesselId: "morning-star",
    visitId: "visit-001",
    description: "Routine vessel visit started.",
  },
  {
    id: "evt-002",
    type: "evidence_added",
    occurredAt: "Today · 09:18",
    actor: "Assigned operator",
    vesselId: "morning-star",
    visitId: "visit-001",
    description: "Battery compartment photo evidence associated with visit.",
  },
  {
    id: "evt-003",
    type: "finding_created",
    occurredAt: "Today · 09:22",
    actor: "Assigned operator",
    vesselId: "morning-star",
    visitId: "visit-001",
    findingId: "finding-001",
    description: "Battery compartment requires follow-up.",
  },
  {
    id: "evt-004",
    type: "action_created",
    occurredAt: "Today · 09:25",
    actor: "Operations",
    vesselId: "morning-star",
    visitId: "visit-001",
    findingId: "finding-001",
    actionId: "action-001",
    description: "Owner approval requested for battery service inspection.",
  },
  {
    id: "evt-005",
    type: "decision_requested",
    occurredAt: "Today · 09:30",
    actor: "Operations",
    vesselId: "morning-star",
    visitId: "visit-001",
    findingId: "finding-001",
    actionId: "action-001",
    description: "Owner decision requested before vendor work can proceed.",
  },
];
