import { describe, expect, it } from "vitest";
import { canReleaseVendorJob, canMarkVendorJobComplete, canVerifyVendorJob, type VendorJob } from "../../src/lib/vendors/coordination";
import { canApproveReport } from "../../src/lib/qa/visit-review";
import { calculateCapacityStatus } from "../../src/lib/management/capacity";

const baseJob: VendorJob = {
  id: "test-job",
  vesselId: "vessel-1",
  visitId: "visit-1",
  findingId: "finding-1",
  title: "Test work",
  vendor: "Test vendor",
  status: "Pending Authorization",
  ownerAuthorizationRequired: true,
  ownerAuthorized: false,
  completionEvidenceRequired: true,
  completionEvidenceReceived: false,
  verificationRequired: true,
  verified: false,
};

describe("vendor authorization", () => {
  it("blocks release without required owner authorization", () => {
    expect(canReleaseVendorJob(baseJob)).toBe(false);
  });

  it("allows release after authorization", () => {
    expect(canReleaseVendorJob({ ...baseJob, ownerAuthorized: true })).toBe(true);
  });
});

describe("vendor completion and verification", () => {
  it("requires completion evidence", () => {
    expect(canMarkVendorJobComplete({ ...baseJob, status: "In Progress" })).toBe(false);
  });

  it("allows completion when required evidence exists", () => {
    expect(canMarkVendorJobComplete({ ...baseJob, status: "In Progress", completionEvidenceReceived: true })).toBe(true);
  });

  it("does not verify incomplete work", () => {
    expect(canVerifyVendorJob({ ...baseJob, status: "In Progress", verified: true })).toBe(false);
  });

  it("allows the Completed -> Verified transition when verification is still pending", () => {
    expect(canVerifyVendorJob({ ...baseJob, status: "Completed", verified: false })).toBe(true);
  });

  it("does not repeat verification after it has already been recorded", () => {
    expect(canVerifyVendorJob({ ...baseJob, status: "Completed", verified: true })).toBe(false);
  });
});

describe("report approval", () => {
  it("blocks approval when required QA has failed", () => {
    expect(canApproveReport({ ...({} as any), status: "Fail" })).toBe(false);
  });
});

describe("capacity guardrails", () => {
  it("returns red for critical open items", () => {
    expect(calculateCapacityStatus({ activeClients: 1, activeVessels: 1, visitsDueThisWeek: 1, openActions: 0, criticalOpenItems: 1, availableOperatorCapacity: 10 }).status).toBe("Red");
  });

  it("returns yellow as workload approaches capacity", () => {
    expect(calculateCapacityStatus({ activeClients: 1, activeVessels: 9, visitsDueThisWeek: 4, openActions: 0, criticalOpenItems: 0, availableOperatorCapacity: 10 }).status).toBe("Yellow");
  });

  it("returns green within guardrails", () => {
    expect(calculateCapacityStatus({ activeClients: 1, activeVessels: 3, visitsDueThisWeek: 2, openActions: 1, criticalOpenItems: 0, availableOperatorCapacity: 10 }).status).toBe("Green");
  });
});
