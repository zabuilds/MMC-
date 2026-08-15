import { type AuditEvent } from "./timeline";
import { constructionVendorJob, type VendorJob } from "../vendors/coordination";

export function buildVendorAuditEvents(job: VendorJob): AuditEvent[] {
  const events: AuditEvent[] = [
    {
      id: `${job.id}-created`,
      type: "action_created",
      occurredAt: "Today · 09:25",
      actor: "Operations",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: `Vendor coordination created for ${job.title}.`,
    },
  ];

  if (job.ownerAuthorizationRequired) {
    events.push({
      id: `${job.id}-decision`,
      type: "decision_requested",
      occurredAt: "Today · 09:30",
      actor: "Operations",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Owner authorization is required before vendor work can be released.",
    });
  }

  if (job.ownerAuthorized) {
    events.push({
      id: `${job.id}-authorized`,
      type: "vendor_authorized",
      occurredAt: "Recorded",
      actor: "Owner",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Owner authorization recorded and vendor work may proceed.",
    });
  }

  if (job.status === "Assigned" || job.status === "Scheduled" || job.status === "In Progress" || job.status === "Completed" || job.status === "Verified") {
    events.push({
      id: `${job.id}-assigned`,
      type: "vendor_assigned",
      occurredAt: "Recorded",
      actor: "Operations",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: `${job.vendor} assigned to the vendor job.`,
    });
  }

  if (job.status === "Scheduled" || job.status === "In Progress" || job.status === "Completed" || job.status === "Verified") {
    events.push({
      id: `${job.id}-scheduled`,
      type: "vendor_scheduled",
      occurredAt: "Recorded",
      actor: "Vendor coordinator",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Vendor work scheduled.",
    });
  }

  if (job.status === "In Progress" || job.status === "Completed" || job.status === "Verified") {
    events.push({
      id: `${job.id}-started`,
      type: "vendor_started",
      occurredAt: "Recorded",
      actor: job.vendor,
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Vendor work started.",
    });
  }

  if (job.status === "Completed" || job.status === "Verified") {
    events.push({
      id: `${job.id}-completed`,
      type: "vendor_completed",
      occurredAt: "Recorded",
      actor: job.vendor,
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Vendor work reported complete.",
    });
  }

  if (job.completionEvidenceReceived) {
    events.push({
      id: `${job.id}-evidence`,
      type: "evidence_added",
      occurredAt: "Recorded",
      actor: job.vendor,
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Vendor completion evidence received.",
    });
  }

  if (job.verified) {
    events.push({
      id: `${job.id}-verified`,
      type: "action_verified",
      occurredAt: "Recorded",
      actor: "Operations",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: "Vendor work verified against the required outcome.",
    });
  }

  if (job.escalationReason) {
    events.push({
      id: `${job.id}-escalated`,
      type: "vendor_escalated",
      occurredAt: "Recorded",
      actor: "Operations",
      vesselId: job.vesselId,
      visitId: job.visitId,
      findingId: job.findingId,
      actionId: job.id,
      description: `Vendor coordination escalated: ${job.escalationReason}`,
    });
  }

  return events;
}

export const constructionVendorAuditEvents = buildVendorAuditEvents(constructionVendorJob);
