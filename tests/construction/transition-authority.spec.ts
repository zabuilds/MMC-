import { describe, expect, it } from "vitest";
import {
  actionTransitions,
  allowTransition,
  exceptionTransitions,
  findingTransitions,
  ownerDecisionTransitions,
  qaTransitions,
  reportTransitions,
  vendorTransitions,
  visitTransitions,
} from "../../src/lib/domain/transitions";

describe("canonical transition authority", () => {
  const valid = [
    ["visit", "Planned", "Scheduled", visitTransitions],
    ["finding", "Open", "Triaged", findingTransitions],
    ["action", "Assigned", "In Progress", actionTransitions],
    ["decision", "Pending", "Approved", ownerDecisionTransitions],
    ["vendor", "Completed", "Verified", vendorTransitions],
    ["qa", "Pending", "Pass With Notes", qaTransitions],
    ["report", "Approved", "Delivered", reportTransitions],
    ["exception", "Open", "Resolved", exceptionTransitions],
  ] as const;

  it.each(valid)("allows the canonical %s transition", (_name, current, next, rules) => {
    expect(allowTransition(current, next, rules).allowed).toBe(true);
  });

  it("rejects an unknown transition", () => {
    expect(allowTransition("Completed", "Approved", reportTransitions).allowed).toBe(false);
  });

  it("rejects a no-op transition", () => {
    expect(allowTransition("Pending", "Pending", qaTransitions).allowed).toBe(false);
  });
});
