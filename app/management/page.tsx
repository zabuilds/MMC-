import { constructionManagementExceptions, getOpenExceptions } from "../../src/lib/management/exceptions";

const openExceptions = getOpenExceptions(constructionManagementExceptions);

export default function ManagementPage() {
  const critical = openExceptions.filter((item) => item.severity === "Critical").length;
  const urgent = openExceptions.filter((item) => item.severity === "Urgent").length;
  const attention = openExceptions.filter((item) => item.severity === "Attention").length;

  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Management command</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40, lineHeight: 1.05 }}>Exceptions</h1>
          <p style={{ margin: 0, color: "var(--muted)" }}>The items requiring management attention across the operating system.</p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 18 }}>
          {[['Critical', critical], ['Urgent', urgent], ['Attention', attention], ['Open', openExceptions.length]].map(([label, value]) => (
            <article key={label} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 20 }}>
              <div style={{ color: "var(--muted)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>{label}</div>
              <div style={{ marginTop: 8, color: "var(--navy)", fontSize: 32, fontWeight: 800 }}>{value}</div>
            </article>
          ))}
        </section>

        <section style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
          <h2 style={{ margin: "0 0 16px", color: "var(--navy)", fontSize: 20 }}>Open exceptions</h2>
          {openExceptions.length === 0 ? (
            <p style={{ margin: 0, color: "var(--muted)" }}>No open management exceptions.</p>
          ) : (
            openExceptions.map((item) => (
              <article key={item.id} style={{ padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start" }}>
                  <div>
                    <div style={{ color: "var(--navy)", fontWeight: 800 }}>{item.title}</div>
                    <div style={{ marginTop: 6, color: "var(--muted)", fontSize: 13 }}>{item.type} · Owner: {item.owner} · Status: {item.status}</div>
                  </div>
                  <span style={{ color: item.severity === "Critical" ? "#9b2c2c" : item.severity === "Urgent" ? "#9a4f00" : "#9a6500", fontWeight: 800, fontSize: 13 }}>{item.severity}</span>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
