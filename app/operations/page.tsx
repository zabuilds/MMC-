import { createSupabaseServerClient } from "../../lib/supabase/server";

export default async function OperationsPage() {
  const supabase = await createSupabaseServerClient();

  const [visitsResult, findingsResult, actionsResult, reportsResult] = await Promise.all([
    supabase.from("visits").select("id, vessel_id, scheduled_at, status, summary, vessels(name)").order("scheduled_at", { ascending: true }).limit(20),
    supabase.from("findings").select("id, vessel_id, title, priority, status, vessels(name)").order("created_at", { ascending: false }).limit(20),
    supabase.from("actions").select("id, vessel_id, title, status, due_at, vessels(name)").order("due_at", { ascending: true }).limit(20),
    supabase.from("reports").select("id, status").limit(50),
  ]);

  const error = visitsResult.error ?? findingsResult.error ?? actionsResult.error ?? reportsResult.error;

  if (error) {
    return (
      <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
          <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 42, lineHeight: 1.05 }}>Operations</h1>
          <p style={{ color: "var(--muted)" }}>The live operations data path is unavailable.</p>
          <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: 16, padding: 20, color: "var(--muted)" }}>{error.message}</div>
        </div>
      </main>
    );
  }

  const visits = visitsResult.data ?? [];
  const findings = findingsResult.data ?? [];
  const actions = actionsResult.data ?? [];
  const reports = reportsResult.data ?? [];

  const openFindings = findings.filter((finding) => !["resolved", "closed"].includes(finding.status)).length;
  const overdueActions = actions.filter((action) => action.due_at && new Date(action.due_at).getTime() < Date.now() && !["completed", "verified", "closed"].includes(action.status)).length;
  const pendingReports = reports.filter((report) => !["sent", "approved", "closed"].includes(report.status)).length;
  const today = new Date().toDateString();
  const todayVisits = visits.filter((visit) => visit.scheduled_at && new Date(visit.scheduled_at).toDateString() === today).length;

  const queue = [
    ...visits.slice(0, 4).map((visit) => ({
      title: (visit.vessels as { name?: string } | null)?.name ?? "Unnamed vessel",
      detail: visit.scheduled_at ? `Visit · ${new Date(visit.scheduled_at).toLocaleString()}` : "Visit scheduled",
      status: visit.status,
      tone: "normal",
    })),
    ...findings.filter((finding) => !["resolved", "closed"].includes(finding.status)).slice(0, 2).map((finding) => ({
      title: (finding.vessels as { name?: string } | null)?.name ?? "Unnamed vessel",
      detail: `Finding · ${finding.title}`,
      status: finding.priority,
      tone: finding.priority === "critical" ? "critical" : "urgent",
    })),
    ...actions.filter((action) => action.due_at && new Date(action.due_at).getTime() < Date.now() && !["completed", "verified", "closed"].includes(action.status)).slice(0, 2).map((action) => ({
      title: (action.vessels as { name?: string } | null)?.name ?? "Unnamed vessel",
      detail: `Action overdue · ${action.title}`,
      status: action.status,
      tone: "critical",
    })),
  ].slice(0, 6);

  const stats = [
    ["Today's visits", String(todayVisits)],
    ["Open findings", String(openFindings)],
    ["Overdue actions", String(overdueActions)],
    ["Reports pending", String(pendingReports)],
  ];

  return (
    <main style={{ minHeight: "100vh", padding: "32px 24px 64px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", marginBottom: 32 }}>
          <div>
            <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
            <h1 style={{ margin: "8px 0 6px", color: "var(--navy)", fontSize: 42, lineHeight: 1.05 }}>Operations</h1>
            <p style={{ margin: 0, color: "var(--muted)" }}>What needs attention right now.</p>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>Live operational data</div>
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
          {queue.length === 0 ? (
            <div style={{ padding: 22, color: "var(--muted)" }}>No operational items require attention.</div>
          ) : queue.map((item) => (
            <div key={`${item.title}-${item.detail}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 22px", borderBottom: "1px solid var(--line)" }}>
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
