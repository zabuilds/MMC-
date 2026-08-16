import type {
  OperationsActionStatus,
  OperationsFindingStatus,
  OperationsVisitStatus,
} from "./operations-adapter";

export type DatabaseFindingStatus = "open" | "deferred" | "closed";
export type DatabaseActionStatus =
  | "new"
  | "awaiting_owner"
  | "approved"
  | "scheduled"
  | "in_progress"
  | "verification"
  | "closed"
  | "on_hold";
export type DatabaseVisitStatus = "scheduled" | "in_progress" | "completed" | "rescheduled" | "cancelled";

type MappingResult<T> =
  | { supported: true; value: T }
  | { supported: false; reason: string };

/**
 * Persistence must never silently collapse a richer canonical state into an
 * unrelated database state. Only mappings with an explicit semantic match
 * are supported here; everything else is rejected until the database model
 * is extended or a business-approved mapping is defined.
 */
export function mapFindingStatusToDatabase(status: OperationsFindingStatus): MappingResult<DatabaseFindingStatus> {
  switch (status) {
    case "open":
      return { supported: true, value: "open" };
    case "closed":
      return { supported: true, value: "closed" };
    case "acknowledged":
    case "actioned":
    case "verified":
      return {
        supported: false,
        reason: `Finding status '${status}' has no lossless database representation`,
      };
  }
}

export function mapActionStatusToDatabase(status: OperationsActionStatus): MappingResult<DatabaseActionStatus> {
  switch (status) {
    case "open":
      return { supported: true, value: "new" };
    case "in_progress":
      return { supported: true, value: "in_progress" };
    case "verified":
      return { supported: true, value: "verification" };
    case "closed":
      return { supported: true, value: "closed" };
    case "assigned":
    case "completed":
    case "blocked":
      return {
        supported: false,
        reason: `Action status '${status}' has no lossless database representation`,
      };
  }
}

export function mapVisitStatusToDatabase(status: OperationsVisitStatus): MappingResult<DatabaseVisitStatus> {
  switch (status) {
    case "scheduled":
    case "assigned":
      return { supported: true, value: "scheduled" };
    case "in_progress":
      return { supported: true, value: "in_progress" };
    case "completed":
      return { supported: true, value: "completed" };
    case "cancelled":
      return { supported: true, value: "cancelled" };
  }
}
