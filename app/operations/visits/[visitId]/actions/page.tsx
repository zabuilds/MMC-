type Action = {
  title: string;
  owner: string;
  due: string;
  status: "Open" | "Assigned" | "In Progress" | "Blocked" | "Completed" | "Verified" | "Closed";
  verification: string;
};

const finding = {
  vessel: "Morning Star",
  title: "Battery compartment requires follow-up",
  priority: "Attention",
  source: "Visit · Today 09:00",
};

const actions: Action[] = [
  {
    title: "Obtain owner approval for battery service",
    owner: "Operations",
    due: "Today",
    status: "Assigned",
    verification: "Owner decision recorded",
  },
  {
    title: "Coordinate approved battery inspection",
    owner: "Vendor coordinator",
    due: "After approval",
    status: "Open",
    verification: "Vendor completion evidence + visible outcome check",
  },
];

const stateOrder = ["Open", "Assigned", "In Progress", "Blocked", "Completed", "Verified", "Closed"];

export default function FindingActionsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Finding → Action</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40, lineHeight: 1.05 }}>{finding.vessel}</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>{finding.title} · {finding.priority} · {finding.source}</p>
        </header>

        <section style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22, marginBottom: 18 }}>
          <h2 style={{ margin: "0 0 18px", color: "var(--navy)", fontSize: 20 }}>Controlled action lifecycle</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {stateOrder.map((state, index) => (
              <div key={state} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ padding: "7px 10px", borderRadius: 999, background: index <= 1 ? "var(--navy)" : "var(--cream)", color: index <= 1 ? "white" : "var(--navy)", fontSize: 12, fontWeight: 800 }}>{state}</span>
                {index < stateOrder.length - 1 && <span style={{ color: "var(--muted)" }}>→</span>}
              </div>
            ))}
          </div>
          <p style={{ margin: "18px 0 0", color: "var(--muted)", lineHeight: 1.6 }}>Completed means the work is reported as done. Verified requires sufficient evidence that the required outcome occurred. Closed means no further operational attention is required.</p>
        </section>

        <section style={{ display: "grid", gap: 14 }}>
          {actions.map((action) => (
            <article key={action.title} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start" }}>
                <div>
                  <h2 style={{ margin: 0, color: "var(--navy)", fontSize: 18 }}>{action.title}</h2>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)", fontSize: 14 }}>Owner: {action.owner} · Due: {action.due}</p>
                </div>
                <span style={{ color: "var(--navy)", fontWeight: 800, fontSize: 13 }}>{action.status}</span>
              </div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                <div style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>Verification requirement</div>
                <div style={{ marginTop: 5, color: "var(--navy)", fontSize: 14 }}>{action.verification}</div>
              </div>
            </article>
          ))}
        </section>

        <aside style={{ marginTop: 22, padding: 18, borderRadius: 16, background: "var(--cream)", color: "var(--muted)", lineHeight: 1.6, fontSize: 14 }}>
          Actions remain linked to their originating finding. An action cannot be treated as closed merely because someone marked the work complete; verification remains a separate control.
        </aside>
      </div>
    </main>
  );
}
