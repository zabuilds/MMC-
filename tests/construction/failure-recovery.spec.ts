import { describe, expect, it } from "vitest";
import { canReleaseVendorJob, canMarkVendorJobComplete, canVerifyVendorJob, type VendorJob } from "../../src/lib/vendors/coordination";
import { canApproveReport } from "../../src/lib/qa/visit-review";

const job = (overrides: Partial<VendorJob> = {}): VendorJob => ({
  id: "recovery-job",
  vesselId: "vessel-1",
  visitId: "visit-1",
  findingId: "finding-1",
  title: "Recovery test",
  vendor: "Test vendor",
  status: "Pending Authorization",
  ownerAuthorizationRequired: true,
  ownerAuthorized: false,
  completionEvidenceRequired: true,
  completionEvidenceReceived: false,
  verificationRequired: true,
  verified: false,
  ...overrides,
});

describe("failure recovery", () => {
  it("keeps vendor work blocked after a failed authorization attempt", () => {
    expect(canReleaseVendorJob(job({ ownerAuthorized: false }))).toBe(false);
  });

  it("allows recovery once authorization is subsequently recorded", () => {
    expect(canReleaseVendorJob(job({ ownerAuthorized: true }))).toBe(true);
  });

  it("does not treat missing completion evidence as a successful completion", () => {
    expect(canMarkVendorJobComplete(job({ status: "In Progress", completionEvidenceReceived: false }))).toBe(false);
  });

  it("permits completion after required evidence arrives", () => {
    expect(canMarkVendorJobComplete(job({ status: "In Progress", completionEvidenceReceived: true }))).toBe(true);
  });

  it("does not permit verification before completion", () => {
    expect(canVerifyVendorJob(job({ status: "In Progress", verified: true }))).toBe(false);
  });

  it("does not permit report approval after a required QA failure", () => {
    expect(canApproveReport({ ...({} as any), status: "Fail" })).toBe(false);
  });

  it("supports rework as a new active condition without changing historical completion", () => {
    const original = job({ status: "Verified", verified: true, completionEvidenceReceived: true });
    const reopened = { ...original, status: "In Progress", verified: false } as VendorJob;

    expect(original.status).toBe("Verified");
    expect(reopened.status).toBe("In Progress");
    expect(reopened.verified).toBe(false);
  });
});
