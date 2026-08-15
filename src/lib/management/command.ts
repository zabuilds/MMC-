import { constructionManagementExceptions, getOpenExceptions, type ManagementException } from "./exceptions";
import { constructionCapacity, type CapacitySnapshot } from "./capacity";
import { constructionQAReview, canApproveReport, type QAReview } from "../qa/visit-review";
import { constructionReportLifecycle, type ReportLifecycle } from "../reports/report-lifecycle";

export type ManagementCommand = {
  capacity: CapacitySnapshot;
  exceptions: ManagementException[];
  qa: QAReview;
  report: ReportLifecycle;
  reportApprovalReady: boolean;
  overallStatus: "Green" | "Yellow" | "Red";
  managementMessage: string;
};

export function buildManagementCommand(): ManagementCommand {
  const exceptions = getOpenExceptions(constructionManagementExceptions);
  const criticalException = exceptions.some((item) => item.severity === "Critical");
  const urgentException = exceptions.some((item) => item.severity === "Urgent");
  const qaFail = constructionQAReview.status === "Fail";
  const capacityRed = constructionCapacity.status === "Red";

  const overallStatus = criticalException || qaFail || capacityRed
    ? "Red"
    : urgentException || constructionCapacity.status === "Yellow" || exceptions.length > 0
      ? "Yellow"
      : "Green";

  const managementMessage = overallStatus === "Red"
    ? "Management intervention required before normal operating flow continues."
    : overallStatus === "Yellow"
      ? "Monitor and resolve open controls before adding unnecessary operational load."
      : "Core management controls are within current guardrails.";

  return {
    capacity: constructionCapacity,
    exceptions,
    qa: constructionQAReview,
    report: constructionReportLifecycle,
    reportApprovalReady: canApproveReport(constructionQAReview),
    overallStatus,
    managementMessage,
  };
}

export const constructionManagementCommand = buildManagementCommand();
