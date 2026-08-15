const metrics = [
  ["Active clients", "—", "Connected data pending"],
  ["Active vessels", "—", "Connected data pending"],
  ["Visits due", "—", "Connected data pending"],
  ["Priority findings", "—", "Connected data pending"],
];

const queues = [
  ["Open actions", "Review vessel actions and ownership"],
  ["Vendor jobs", "Track approved and scheduled work"],
  ["Reports", "Complete and deliver outstanding reports"],
];

export default function OperationsDashboard() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--sand)" }}>
      <header style={{ background: "var(--navy)", color: "var(--white)", padding: "24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 24, alignItems: "center" }}>
          <div>
            <div style={{ color: "var(--gold)", fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</div>
            <h1 style={{ margin: "8px 0 0", fontSize: 30 }}>Operations</h1>
          </div>
          <div style={{ color: "#c8d4dd", fontSize: 13 }}>Construction dashboard · v1</div>
        </div>
      </header>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
          {metrics.map(([label, value, note]) => (
            <article key={label} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>{label}</div>
              <div style={{ color: "var(--navy)", fontSize: 34, fontWeight: 700, marginTop: 10 }}>{value}</div>
              <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 8 }}>{note}</div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <section style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 16, padding: 24 }}>
            <h2 style={{ color: "var(--navy)", marginTop: 0 }}>Operational queues</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {queues.map(([title, description]) => (
                <div key={title} style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 16 }}>
                  <strong style={{ color: "var(--navy)" }}>{title}</strong>
                  <p style={{ margin: "6px 0 0", color: "var(--muted)", fontSize: 13, lineHeight: 1.5 }}>{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "var(--navy-soft)", color: "var(--white)", borderRadius: 16, padding: 24 }}>
            <div style={{ color: "var(--gold)", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>Next construction step</div>
            <h2 style={{ margin: "10px 0" }}>Connect the live operational data</h2>
            <p style={{ color: "#d5e0e8", lineHeight: 1.6, fontSize: 14 }}>
              The dashboard shell is in place. Live counts and vessel records will be enabled after the MMC authentication layer is established so operational data is never exposed through an unauthenticated route.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
