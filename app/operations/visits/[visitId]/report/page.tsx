const evidence = [
  { label: "Engine compartment", type: "Photo", context: "Routine condition evidence" },
  { label: "Battery compartment", type: "Photo", context: "Supports attention finding" },
  { label: "General vessel condition", type: "Photo", context: "Visit overview" },
];

const findings = [
  { title: "Exterior condition check", priority: "Routine", status: "Verified" },
  { title: "Battery compartment requires follow-up", priority: "Attention", status: "Action in progress" },
];

const actions = [
  { title: "Obtain owner approval for battery service", status: "Assigned" },
  { title: "Coordinate approved battery inspection", status: "Open" },
];

export default function VisitReportPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Evidence → Report</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40, lineHeight: 1.05 }}>Morning Star</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>Visit report · Today · 09:00 · Construction preview</p>
        </header>

        <section style={{ background: "var(--navy)", color: "white", borderRadius: 20, padding: 26, marginBottom: 18 }}>
          <div style={{ color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Executive status</div>
          <h2 style={{ margin: "8px 0 10px", fontSize: 25 }}>Generally monitored · One attention item remains open</h2>
          <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.65 }}>The visit has been documented. One battery-related matter requires owner decision and follow-through before the related action can be closed.</p>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 20 }}>Findings</h2>
            {findings.map((item) => (
              <div key={item.title} style={{ padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                <strong style={{ color: "var(--navy)" }}>{item.title}</strong>
                <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>{item.priority} · {item.status}</div>
              </div>
            ))}
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 20 }}>Actions</h2>
            {actions.map((item) => (
              <div key={item.title} style={{ padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                <strong style={{ color: "var(--navy)" }}>{item.title}</strong>
                <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>{item.status}</div>
              </div>
            ))}
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 20 }}>Evidence</h2>
            {evidence.map((item) => (
              <div key={item.label} style={{ padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                <strong style={{ color: "var(--navy)" }}>{item.label}</strong>
                <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>{item.type} · {item.context}</div>
              </div>
            ))}
          </article>
        </section>

        <section style={{ marginTop: 18, background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
          <h2 style={{ margin: "0 0 8px", color: "var(--navy)", fontSize: 20 }}>Report control</h2>
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>Construction flow: DRAFT → REVIEW → APPROVED → DELIVERED → ARCHIVED. Delivery must preserve the report version and its supporting evidence references.</p>
        </section>
      </div>
    </main>
  );
}
