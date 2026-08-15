export type QAReviewStatus = "Pending" | "Pass" | "Pass With Notes" | "Fail";

export type QAReviewItem = {
  id: string;
  label: string;
  required: boolean;
  passed: boolean;
  note?: string;
};

export type QAReview = {
  visitId: string;
  reportId: string;
  reviewer: string;
  status: QAReviewStatus;
  reviewedAt?: string;
  items: QAReviewItem[];
};

export const constructionQAReview: QAReview = {
  visitId: "visit-001",
  reportId: "report-001",
  reviewer: "QA reviewer",
  status: "Pass With Notes",
  reviewedAt: "Today · 10:05",
  items: [
    { id: "qa-001", label: "Visit is associated with the correct vessel", required: true, passed: true },
    { id: "qa-002", label: "Required evidence is associated with findings", required: true, passed: true },
    { id: "qa-003", label: "Finding priorities are appropriate", required: true, passed: true },
    { id: "qa-004", label: "Actions have accountable owners", required: true, passed: true },
    { id: "qa-005", label: "Owner decisions are clearly identified", required: true, passed: true },
    { id: "qa-006", label: "Report accurately reflects open actions", required: true, passed: true },
    { id: "qa-007", label: "Client-facing wording is clear and within MMC scope", required: true, passed: true },
    { id: "qa-008", label: "Outstanding attention item is correctly surfaced", required: false, passed: true, note: "Battery-service decision remains open and must not be represented as authorized." },
  ],
};

export function canApproveReport(review: QAReview): boolean {
  return review.items.filter((item) => item.required).every((item) => item.passed) && review.status !== "Fail";
}
