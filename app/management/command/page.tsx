import { constructionManagementCommand as command } from "../../../src/lib/management/command";

export default function ManagementCommandPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Management command</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40 }}>Control Center</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>{command.managementMessage}</p>
        </header>

        <section style={{ background: "var(--navy)", color: "white", borderRadius: 20, padding: 26, marginBottom: 18 }}>
          <div style={{ color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Overall control status</div>
          <div style={{ marginTop: 8, fontSize: 36, fontWeight: 800 }}>{command.overallStatus}</div>
          <div style={{ marginTop: 14, opacity: 0.82 }}>Capacity: {command.capacity.status} · QA: {command.qa.status} · Report: {command.report.status} · Open exceptions: {command.exceptions.length} · Audit events: {command.auditEvents.length}</div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: 20 }}>Capacity</h2>
            <strong style={{ color: "var(--navy)", fontSize: 24 }}>{command.capacity.status}</strong>
            <p style={{ color: "var(--muted)", lineHeight: 1.55 }}>{command.capacity.managementAction}</p>
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: 20 }}>Exceptions</h2>
            <strong style={{ color: "var(--navy)", fontSize: 24 }}>{command.exceptions.length} open</strong>
            {command.exceptions.map((item) => <p key={item.id} style={{ color: "var(--muted)", marginBottom: 0 }}>{item.severity} · {item.title}</p>)}
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: 20 }}>QA / Report</h2>
            <p style={{ margin: 0, color: "var(--muted)" }}>QA: <strong style={{ color: "var(--navy)" }}>{command.qa.status}</strong></p>
            <p style={{ color: "var(--muted)" }}>Report: <strong style={{ color: "var(--navy)" }}>{command.report.status}</strong></p>
            <p style={{ color: "var(--muted)" }}>Approval ready: <strong style={{ color: "var(--navy)" }}>{command.reportApprovalReady ? "Yes" : "No"}</strong></p>
          </article>
        </section>

        <section style={{ marginTop: 18, background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
          <h2 style={{ margin: "0 0 12px", color: "var(--navy)", fontSize: 20 }}>Audit trace</h2>
          {command.auditEvents.slice(-6).map((event) => (
            <div key={event.id} style={{ padding: "12px 0", borderTop: "1px solid var(--line)" }}>
              <strong style={{ color: "var(--navy)" }}>{event.type}</strong>
              <div style={{ marginTop: 4, color: "var(--muted)", fontSize: 13 }}>{event.occurredAt} · {event.actor} · {event.description}</div>
            </div>
          ))}
        </section>

        <aside style={{ marginTop: 18, padding: 18, borderRadius: 16, background: "var(--cream)", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
          This is a construction control view. It consolidates current operational signals without introducing live persistence or changing production systems.
        </aside>
      </div>
    </main>
  );
}
