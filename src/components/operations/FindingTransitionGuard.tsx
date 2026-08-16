"use client";

import { useMemo, useState } from "react";
import { validateOperationsFindingTransition, type OperationsFindingStatus } from "@/lib/domain/operations-adapter";

const statuses: OperationsFindingStatus[] = ["open", "acknowledged", "actioned", "verified", "closed"];

const labels: Record<OperationsFindingStatus, string> = {
  open: "Open",
  acknowledged: "Acknowledged",
  actioned: "Actioned",
  verified: "Verified",
  closed: "Closed",
};

export function FindingTransitionGuard({ initialStatus = "acknowledged" }: { initialStatus?: OperationsFindingStatus }) {
  const [current, setCurrent] = useState<OperationsFindingStatus>(initialStatus);
  const [message, setMessage] = useState<string | null>(null);

  const nextStates = useMemo(
    () => statuses.filter((status) => validateOperationsFindingTransition(current, status).allowed),
    [current],
  );

  function transition(next: OperationsFindingStatus) {
    const result = validateOperationsFindingTransition(current, next);
    if (!result.allowed) {
      setMessage(result.reason);
      return;
    }

    setCurrent(next);
    setMessage(`${labels[current]} → ${labels[next]} validated. Persistence remains intentionally deferred.`);
  }

  return (
    <div style={{ marginTop: 16, padding: 16, border: "1px solid var(--line)", borderRadius: 14, background: "var(--soft)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <strong style={{ color: "var(--navy)" }}>Finding transition guard</strong>
          <p style={{ margin: "5px 0 0", color: "var(--muted)", fontSize: 12 }}>Canonical finding lifecycle validation before future persistence.</p>
        </div>
        <span style={{ color: "var(--navy)", fontWeight: 800, fontSize: 12 }}>{labels[current]}</span>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
        {nextStates.map((next) => (
          <button
            key={next}
            type="button"
            onClick={() => transition(next)}
            style={{ border: "1px solid var(--line)", background: "var(--white)", color: "var(--navy)", borderRadius: 999, padding: "8px 12px", fontWeight: 700, cursor: "pointer" }}
          >
            Move to {labels[next]}
          </button>
        ))}
      </div>

      {message && (
        <p role="status" style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: 12, lineHeight: 1.5 }}>{message}</p>
      )}
    </div>
  );
}
