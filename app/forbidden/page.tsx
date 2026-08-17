export default function ForbiddenPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "var(--cream)" }}>
      <section style={{ width: "100%", maxWidth: 520, background: "var(--white)", border: "1px solid var(--line)", borderRadius: 20, padding: 28, textAlign: "center" }}>
        <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
        <h1 style={{ margin: "8px 0 8px", color: "var(--navy)", fontSize: 32 }}>Access restricted</h1>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>Your authenticated role does not have permission to access this area.</p>
      </section>
    </main>
  );
}
