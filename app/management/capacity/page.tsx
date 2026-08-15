import { constructionCapacity } from "../../../src/lib/management/capacity";

export default function CapacityPage() {
  const metrics = [
    ["Active clients", constructionCapacity.activeClients],
    ["Active vessels", constructionCapacity.activeVessels],
    ["Visits this week", constructionCapacity.visitsDueThisWeek],
    ["Open actions", constructionCapacity.openActions],
  ];

  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Management command</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40 }}>Capacity</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>Protect service quality before workload becomes the problem.</p>
        </header>

        <section style={{ background: "var(--navy)", color: "white", borderRadius: 20, padding: 26, marginBottom: 18 }}>
          <div style={{ color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Current capacity</div>
          <div style={{ marginTop: 8, fontSize: 34, fontWeight: 800 }}>{constructionCapacity.status}</div>
          <p style={{ margin: "10px 0 0", opacity: 0.82, lineHeight: 1.6 }}>{constructionCapacity.managementAction}</p>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          {metrics.map(([label, value]) => (
            <article key={label} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 20 }}>
              <div style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>{label}</div>
              <div style={{ marginTop: 8, color: "var(--navy)", fontSize: 30, fontWeight: 800 }}>{value}</div>
            </article>
          ))}
        </section>

        <aside style={{ marginTop: 18, padding: 18, borderRadius: 16, background: "var(--cream)", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
          <strong style={{ color: "var(--navy)" }}>Guardrail:</strong> capacity status is a management control, not a sales target. When service quality is threatened, MMC should protect existing commitments before accepting additional workload.
        </aside>
      </div>
    </main>
  );
}
