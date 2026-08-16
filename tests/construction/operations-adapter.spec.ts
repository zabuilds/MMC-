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

  it("keeps completed visits completed until canonical review occurs", () => {
    expect(validateOperationsVisitTransition("completed", "cancelled").allowed).toBe(false);
  });

  it("maps acknowledged findings to triage", () => {
    expect(validateOperationsFindingTransition("open", "acknowledged").allowed).toBe(true);
  });

  it("maps closed findings to the canonical resolved state", () => {
    expect(validateOperationsFindingTransition("actioned", "closed").allowed).toBe(false);
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
