export type ExceptionSeverity = "Attention" | "Urgent" | "Critical";
export type ExceptionType = "Overdue Action" | "Critical Finding" | "QA Failure" | "Blocked Vendor" | "Capacity" | "Owner Decision";

export type ManagementException = {
  id: string;
  type: ExceptionType;
  severity: ExceptionSeverity;
  title: string;
  vesselId?: string;
  visitId?: string;
  actionId?: string;
  status: "Open" | "Acknowledged" | "Resolved";
  owner: string;
  escalationRequired: boolean;
};

export const constructionManagementExceptions: ManagementException[] = [
  {
    id: "exception-001",
    type: "Owner Decision",
    severity: "Attention",
    title: "Battery-service authorization is still outstanding",
    vesselId: "morning-star",
    visitId: "visit-001",
    actionId: "action-001",
    status: "Open",
    owner: "Operations",
    escalationRequired: false,
  },
];

export function requiresManagementAttention(exception: ManagementException): boolean {
  return exception.escalationRequired || exception.severity === "Critical" || exception.status === "Open";
}

export function getOpenExceptions(exceptions: ManagementException[]): ManagementException[] {
  return exceptions.filter((exception) => exception.status !== "Resolved");
}
