import { describe, expect, it } from "vitest";
import {
  validateOperationsActionTransition,
  validateOperationsFindingTransition,
  validateOperationsVisitTransition,
} from "../../src/lib/domain/operations-adapter";

describe("Operations transition adapter", () => {
  it("maps scheduled visits into the canonical visit lifecycle", () => {
    expect(validateOperationsVisitTransition("scheduled", "in_progress").allowed).toBe(true);
  });

  it("rejects unsupported Operations cancellation", () => {
    const result = validateOperationsVisitTransition("completed", "cancelled");
    expect(result.allowed).toBe(false);
    if (!result.allowed) expect(result.reason).toContain("no canonical transition");
  });

  it("maps acknowledged findings to triage", () => {
    expect(validateOperationsFindingTransition("open", "acknowledged").allowed).toBe(true);
  });

  it("maps closed findings to the canonical resolved state", () => {
    expect(validateOperationsFindingTransition("actioned", "closed").allowed).toBe(true);
    expect(validateOperationsFindingTransition("verified", "closed").allowed).toBe(false);
  });

  it("preserves action lifecycle validation", () => {
    expect(validateOperationsActionTransition("assigned", "in_progress").allowed).toBe(true);
    expect(validateOperationsActionTransition("open", "completed").allowed).toBe(false);
    expect(validateOperationsActionTransition("verified", "closed").allowed).toBe(true);
  });

  it("rejects invalid Operations transitions", () => {
    expect(validateOperationsVisitTransition("completed", "in_progress").allowed).toBe(false);
    expect(validateOperationsFindingTransition("verified", "open").allowed).toBe(false);
  });
});
