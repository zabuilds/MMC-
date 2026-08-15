export type VendorJobStatus = "Pending Authorization" | "Authorized" | "Assigned" | "Scheduled" | "In Progress" | "Completed" | "Verified" | "Escalated" | "Cancelled";

export type VendorJob = {
  id: string;
  vesselId: string;
  visitId: string;
  findingId: string;
  title: string;
  vendor: string;
  status: VendorJobStatus;
  ownerAuthorizationRequired: boolean;
  ownerAuthorized: boolean;
  completionEvidenceRequired: boolean;
  completionEvidenceReceived: boolean;
  verificationRequired: boolean;
  verified: boolean;
  escalationReason?: string;
};

export const constructionVendorJob: VendorJob = {
  id: "vendor-job-001",
  vesselId: "morning-star",
  visitId: "visit-001",
  findingId: "finding-001",
  title: "Battery inspection",
  vendor: "Approved marine vendor",
  status: "Pending Authorization",
  ownerAuthorizationRequired: true,
  ownerAuthorized: false,
  completionEvidenceRequired: true,
  completionEvidenceReceived: false,
  verificationRequired: true,
  verified: false,
};

export function canReleaseVendorJob(job: VendorJob): boolean {
  if (job.ownerAuthorizationRequired && !job.ownerAuthorized) return false;
  return job.status === "Pending Authorization" || job.status === "Authorized";
}

export function canMarkVendorJobComplete(job: VendorJob): boolean {
  return job.status === "In Progress" && (!job.completionEvidenceRequired || job.completionEvidenceReceived);
}

export function canVerifyVendorJob(job: VendorJob): boolean {
  return job.status === "Completed" && (!job.verificationRequired || job.verified);
}

export function needsVendorEscalation(job: VendorJob): boolean {
  return job.status === "Escalated" || Boolean(job.escalationReason);
}
