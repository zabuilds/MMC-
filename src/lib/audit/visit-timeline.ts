import { constructionAuditEvents, type AuditEvent } from "./timeline";

export type VisitTimelineStep = {
  label: string;
  eventType: AuditEvent["type"];
  completed: boolean;
};

export function buildVisitTimeline(visitId: string): AuditEvent[] {
  return constructionAuditEvents
    .filter((event) => event.visitId === visitId)
    .sort((a, b) => a.occurredAt.localeCompare(b.occurredAt));
}

export function buildVisitTimelineSteps(visitId: string): VisitTimelineStep[] {
  const events = buildVisitTimeline(visitId);
  const completed = new Set(events.map((event) => event.type));

  return [
    { label: "Visit started", eventType: "visit_started", completed: completed.has("visit_started") },
    { label: "Evidence captured", eventType: "evidence_added", completed: completed.has("evidence_added") },
    { label: "Finding recorded", eventType: "finding_created", completed: completed.has("finding_created") },
    { label: "Action created", eventType: "action_created", completed: completed.has("action_created") },
    { label: "Owner decision requested", eventType: "decision_requested", completed: completed.has("decision_requested") },
    { label: "Action verified", eventType: "action_verified", completed: completed.has("action_verified") },
    { label: "Report delivered", eventType: "report_delivered", completed: completed.has("report_delivered") },
  ];
}
