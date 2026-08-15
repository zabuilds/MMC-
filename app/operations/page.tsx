const queue = [
  { title: "Morning Star", detail: "Visit today · 09:00", status: "Scheduled", tone: "normal" },
  { title: "Sea Glass", detail: "Urgent finding · Awaiting vendor", status: "Urgent", tone: "urgent" },
  { title: "Blue Meridian", detail: "Report awaiting QA", status: "Report QA", tone: "normal" },
  { title: "Island Runner", detail: "Action overdue · Owner approval", status: "Attention", tone: "critical" },
];

const stats = [
  ["Today's visits", "4"],
  ["Open findings", "7"],
  ["Overdue actions", "2"],
  ["Reports pending", "3"],
];

export default function OperationsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", marginBottom: 32 }}>
          <div>
            <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
            <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 42, lineHeight: 1.05 }}>Operations</h1>
            <p style={{ margin: 0, color: "var(--muted)" }}>What needs attention right now.</p>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>Construction workspace · mock data</div>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 28 }}>
          {stats.map(([label, value]) => (
            <article key={label} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 16, padding: 20 }}>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>{label}</div>
              <div style={{ marginTop: 8, color: "var(--navy)", fontSize: 30, fontWeight: 800 }}>{value}</div>
            </article>
          ))}
        </section>

        <section style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden" }}>
          <div style={{ padding: "20px 22px", borderBottom: "1px solid var(--line)" }}>
            <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 20 }}>Priority queue</h2>
          </div>
          {queue.map((item) => (
            <div key={item.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 22px", borderBottom: "1px solid var(--line)" }}>
              <div>
                <strong style={{ color: "var(--navy)" }}>{item.title}</strong>
                <div style={{ marginTop: 4, color: "var(--muted)", fontSize: 14 }}>{item.detail}</div>
              </div>
              <span style={{ color: item.tone === "critical" ? "#9b2c2c" : item.tone === "urgent" ? "#9a6500" : "var(--navy)", fontWeight: 700, fontSize: 13 }}>{item.status}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
