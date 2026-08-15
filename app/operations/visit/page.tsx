"use client";

import { useState } from "react";

const vessel = {
  name: "Sea Glass",
  client: "Private Owner",
  location: "George Town Harbour",
};

export default function VisitPage() {
  const [stage, setStage] = useState("in_progress");
  const [severity, setSeverity] = useState("action_required");
  const [finding, setFinding] = useState("");
  const [saved, setSaved] = useState(false);

  function saveFinding() {
    if (!finding.trim()) return;
    setSaved(true);
    setStage("finding_recorded");
  }

  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 38 }}>Visit workspace</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>{vessel.name} · {vessel.location} · {vessel.client}</p>
        </header>

        <section style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {["Prepare", "Arrive", "Inspect", "Document", "Assess", "Escalate", "Complete"].map((item) => (
            <span key={item} style={{ padding: "8px 12px", borderRadius: 999, background: "var(--white)", border: "1px solid var(--line)", color: "var(--navy)", fontSize: 13, fontWeight: 700 }}>
              {item}
            </span>
          ))}
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(240px, .8fr)", gap: 18 }}>
          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 24 }}>
            <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 22 }}>Record finding</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Capture what was observed without implying a specialist diagnosis.</p>
            <label style={{ display: "block", color: "var(--navy)", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Observation</label>
            <textarea value={finding} onChange={(e) => { setFinding(e.target.value); setSaved(false); }} rows={7} placeholder="Describe the condition, location, and relevant context…" style={{ width: "100%", resize: "vertical", border: "1px solid var(--line)", borderRadius: 12, padding: 14, color: "var(--ink)", background: "var(--sand)" }} />

            <label style={{ display: "block", color: "var(--navy)", fontWeight: 700, fontSize: 14, margin: "18px 0 8px" }}>Severity</label>
            <select value={severity} onChange={(e) => setSeverity(e.target.value)} style={{ width: "100%", border: "1px solid var(--line)", borderRadius: 12, padding: 13, background: "var(--white)", color: "var(--ink)" }}>
              <option value="critical">Critical</option>
              <option value="urgent">Urgent</option>
              <option value="action_required">Action Required</option>
              <option value="monitor">Monitor</option>
              <option value="informational">Informational</option>
            </select>

            <button onClick={saveFinding} style={{ marginTop: 18, border: 0, borderRadius: 12, padding: "13px 18px", background: "var(--navy)", color: "var(--white)", fontWeight: 800, cursor: "pointer" }}>
              Save finding
            </button>
            {saved && <p style={{ color: "#23643a", fontWeight: 700, marginBottom: 0 }}>Finding saved to this construction workspace.</p>}
          </article>

          <aside style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 24 }}>
            <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 18 }}>Visit status</h2>
            <p style={{ color: "var(--muted)" }}>Current state</p>
            <strong style={{ color: "var(--navy)", fontSize: 20 }}>{stage === "finding_recorded" ? "Finding recorded" : "In progress"}</strong>
            <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "22px 0" }} />
            <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 0 }}>Next: assess the finding, escalate when required, create an action, then complete the visit and generate the report.</p>
          </aside>
        </section>
      </div>
    </main>
  );
}
