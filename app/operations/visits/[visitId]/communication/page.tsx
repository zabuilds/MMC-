const decisions = [
  { title: "Approve battery service inspection", status: "Awaiting owner", priority: "Attention" },
  { title: "Confirm preferred vendor", status: "Not required yet", priority: "Routine" },
];

const communication = {
  channel: "Client report",
  status: "Ready for review",
  subject: "Morning Star — Visit Update",
};

export default function VisitCommunicationPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Client communication</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40, lineHeight: 1.05 }}>Morning Star</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>Report → decision → authorization → action</p>
        </header>

        <section style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22, marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start" }}>
            <div>
              <div style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>{communication.channel}</div>
              <h2 style={{ margin: "7px 0 6px", color: "var(--navy)", fontSize: 22 }}>{communication.subject}</h2>
              <p style={{ margin: 0, color: "var(--muted)" }}>The client-facing communication is assembled from the approved visit report, supporting evidence, open findings, and required owner decisions.</p>
            </div>
            <span style={{ color: "var(--navy)", fontWeight: 800, fontSize: 13 }}>{communication.status}</span>
          </div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <article style={{ background: "var(--navy)", color: "white", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 16px", fontSize: 20 }}>Decision flow</h2>
            <div style={{ lineHeight: 2, opacity: 0.9 }}>
              <div>1. Finding identified</div>
              <div>2. Meaning explained</div>
              <div>3. Recommendation/options presented</div>
              <div>4. Owner decision requested</div>
              <div>5. Authorization recorded</div>
              <div>6. Action released</div>
              <div>7. Completion verified</div>
              <div>8. Client updated</div>
            </div>
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 20 }}>Owner decisions</h2>
            {decisions.map((decision) => (
              <div key={decision.title} style={{ padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                <strong style={{ color: "var(--navy)" }}>{decision.title}</strong>
                <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>{decision.priority} · {decision.status}</div>
              </div>
            ))}
          </article>
        </section>

        <section style={{ marginTop: 18, padding: 18, borderRadius: 16, background: "var(--cream)", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
          <strong style={{ color: "var(--navy)" }}>Control boundary:</strong> MMC may recommend, coordinate, communicate, and verify within scope. It must not represent an owner decision or authorization as having occurred until that decision is explicitly recorded.
        </section>
      </div>
    </main>
  );
}
