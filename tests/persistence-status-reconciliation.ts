import {
  mapActionStatusToDatabase,
  mapFindingStatusToDatabase,
  mapVisitStatusToDatabase,
} from "../src/lib/domain/persistence-status-map";

export type PersistenceStatusAudit = {
  domain: "finding" | "action" | "visit";
  status: string;
  supported: boolean;
  reason?: string;
};

export function runPersistenceStatusReconciliation(): PersistenceStatusAudit[] {
  return [
    ...(["open", "acknowledged", "actioned", "verified", "closed"] as const).map((status) => {
      const result = mapFindingStatusToDatabase(status);
      return { domain: "finding" as const, status, ...result };
    }),
    ...(["open", "assigned", "in_progress", "blocked", "completed", "verified", "closed"] as const).map((status) => {
      const result = mapActionStatusToDatabase(status);
      return { domain: "action" as const, status, ...result };
    }),
    ...(["scheduled", "assigned", "in_progress", "completed", "cancelled"] as const).map((status) => {
      const result = mapVisitStatusToDatabase(status);
      return { domain: "visit" as const, status, ...result };
    }),
  ];
}

export const persistenceLosslessnessDecisions = {
  findingAcknowledged: "Rejected: no lossless database representation.",
  findingActioned: "Rejected: no lossless database representation.",
  findingVerified: "Rejected: no lossless database representation.",
  actionAssigned: "Rejected: no lossless database representation.",
  actionCompleted: "Rejected: no lossless database representation.",
  actionBlocked: "Rejected: no lossless database representation.",
  visitAssigned: "Allowed as an alias of scheduled.",
  visitCancelled: "Currently persisted as cancelled; transition support remains separately controlled by the canonical lifecycle.",
} as const;
