import { canApproveReport, type QAReview } from "../src/lib/qa/visit-review";

const baseReview: QAReview = {
  visitId: "visit-test",
  reportId: "report-test",
  reviewer: "QA reviewer",
  status: "Pass",
  items: [
    { id: "required-1", label: "Required check", required: true, passed: true },
    { id: "optional-1", label: "Optional check", required: false, passed: false },
  ],
};

export const qaReportApprovalCases = [
  { name: "pass with required checks", review: baseReview, expected: true },
  { name: "pass with notes", review: { ...baseReview, status: "Pass With Notes" }, expected: true },
  { name: "pending cannot approve", review: { ...baseReview, status: "Pending" }, expected: false },
  { name: "fail cannot approve", review: { ...baseReview, status: "Fail" }, expected: false },
  {
    name: "missing required check cannot approve",
    review: {
      ...baseReview,
      items: [{ id: "required-1", label: "Required check", required: true, passed: false }],
    },
    expected: false,
  },
] satisfies Array<{ name: string; review: QAReview; expected: boolean }>;

export function runQAReportApprovalCases() {
  return qaReportApprovalCases.map((testCase) => ({
    ...testCase,
    actual: canApproveReport(testCase.review),
    passed: canApproveReport(testCase.review) === testCase.expected,
  }));
}
