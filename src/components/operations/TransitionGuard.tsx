"use client";

import { useState } from "react";
import { validateOperationsVisitTransition, type OperationsVisitStatus } from "@/src/lib/domain/operations-adapter";

const statuses: OperationsVisitStatus[] = ["scheduled", "assigned", "in_progress", "completed", "cancelled"];

export function TransitionGuard() {
  const [current, setCurrent] = useState<OperationsVisitStatus>("in_progress");
  const [next, setNext] = useState<OperationsVisitStatus>("completed");

  const result = validateOperationsVisitTransition(current, next);

  return (
    <div style={{ marginTop: 18, padding: 16, border: "1px solid var(--line)", borderRadius: 14, background: "var(--soft)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <strong style={{ color: "var(--navy)" }}>Transition guard</strong>
          <p style={{ margin: "5px 0 0", color: "var(--muted)", fontSize: 12 }}>Uses the canonical lifecycle before a future persistence action is allowed.</p>
        </div>
        <span style={{ color: result.allowed ? "#2f6b4f" : "#9b2c2c", fontWeight: 800, fontSize: 12 }}>
          {result.allowed ? "ALLOWED" : "BLOCKED"}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
        <select value={current} onChange={(event) => setCurrent(event.target.value as OperationsVisitStatus)} style={{ padding: "9px 10px", border: "1px solid var(--line)", borderRadius: 9, background: "var(--white)", color: "var(--navy)" }}>
          {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
        <select value={next} onChange={(event) => setNext(event.target.value as OperationsVisitStatus)} style={{ padding: "9px 10px", border: "1px solid var(--line)", borderRadius: 9, background: "var(--white)", color: "var(--navy)" }}>
          {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
      </div>

      {!result.allowed && <p style={{ margin: "10px 0 0", color: "#9b2c2c", fontSize: 12 }}>{result.reason}</p>}
    </div>
  );
}
