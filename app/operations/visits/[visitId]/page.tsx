import { TransitionGuard } from "@/components/operations/TransitionGuard";

type Finding = {
  title: string;
  priority: "Routine" | "Attention" | "Urgent" | "Critical";
  status: "Open" | "Acknowledged" | "Actioned" | "Verified" | "Closed";
  action?: string;
};

const visit = {
  vessel: "Morning Star",
  date: "Today · 09:00",
  operator: "Assigned operator",
  status: "In Progress",
};

const findings: Finding[] = [
  {
    title: "Exterior condition check",
    priority: "Routine",
    status: "Verified",
  },
  {
    title: "Battery compartment requires follow-up",
    priority: "Attention",
    status: "Acknowledged",
    action: "Owner decision required",
  },
];

const evidence = [
  { label: "Engine compartment", type: "Photo" },
  { label: "Battery compartment", type: "Photo" },
  { label: "General vessel condition", type: "Photo" },
];

const tone: Record<Finding["priority"], string> = {
  Routine: "var(--navy)",
  Attention: "#9a6500",
  Urgent: "#9a4f00",
  Critical: "#9b2c2c",
};

export default function VisitDetailPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", marginBottom: 28 }}>
          <div>
            <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Visit workflow</p>
            <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 40, lineHeight: 1.05 }}>{visit.vessel}</h1>
            <p style={{ margin: 0, color: "var(--muted)" }}>{visit.date} · {visit.operator}</p>
          </div>
          <span style={{ color: "var(--navy)", fontWeight: 800, fontSize: 13 }}>{visit.status}</span>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 18px", color: "var(--navy)", fontSize: 20 }}>Visit sequence</h2>
            <ol style={{ margin: 0, paddingLeft: 22, color: "var(--muted)", lineHeight: 2 }}>
              <li style={{ color: "var(--navy)", fontWeight: 700 }}>Visit in progress</li>
              <li>Record observations</li>
              <li>Associate evidence</li>
              <li>Record findings</li>
              <li>Create actions where required</li>
              <li>Complete visit</li>
              <li>Prepare report</li>
            </ol>
            <TransitionGuard />
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 18px", color: "var(--navy)", fontSize: 20 }}>Findings</h2>
            {findings.map((finding) => (
              <div key={finding.title} style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
                <strong style={{ color: "var(--navy)" }}>{finding.title}</strong>
                <div style={{ marginTop: 7, display: "flex", gap: 14, flexWrap: "wrap", fontSize: 13 }}>
                  <span style={{ color: tone[finding.priority], fontWeight: 800 }}>{finding.priority}</span>
                  <span style={{ color: "var(--muted)" }}>{finding.status}</span>
                </div>
                {finding.action && <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 13 }}>{finding.action}</div>}
              </div>
            ))}
          </article>

          <article style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
            <h2 style={{ margin: "0 0 18px", color: "var(--navy)", fontSize: 20 }}>Evidence</h2>
            {evidence.map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ color: "var(--navy)", fontWeight: 700 }}>{item.label}</span>
                <span style={{ color: "var(--muted)", fontSize: 13 }}>{item.type} · Associated</span>
              </div>
            ))}
          </article>
        </section>
      </div>
    </main>
  );
}
