import { canApproveReport, type QAReview } from "../qa/visit-review";

export type ReportStatus = "DRAFT" | "REVIEW" | "APPROVED" | "DELIVERED" | "ARCHIVED";

export type ReportLifecycle = {
  reportId: string;
  visitId: string;
  status: ReportStatus;
  qaReviewId: string;
};

export const constructionReportLifecycle: ReportLifecycle = {
  reportId: "report-001",
  visitId: "visit-001",
  status: "REVIEW",
  qaReviewId: "qa-review-001",
};

const transitions: Record<ReportStatus, ReportStatus[]> = {
  DRAFT: ["REVIEW"],
  REVIEW: ["APPROVED"],
  APPROVED: ["DELIVERED"],
  DELIVERED: ["ARCHIVED"],
  ARCHIVED: [],
};

export function canTransitionReport(
  from: ReportStatus,
  to: ReportStatus,
  review?: QAReview,
): boolean {
  if (!transitions[from].includes(to)) return false;
  if (to === "APPROVED") return Boolean(review && canApproveReport(review));
  return true;
}

export function transitionReport(
  lifecycle: ReportLifecycle,
  to: ReportStatus,
  review?: QAReview,
): ReportLifecycle {
  if (!canTransitionReport(lifecycle.status, to, review)) {
    throw new Error(`Invalid report transition: ${lifecycle.status} -> ${to}`);
  }

  return { ...lifecycle, status: to };
}
