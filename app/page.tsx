import { packages } from "@/lib/packages";

export default function HomePage() {
  return (
    <main>
      <section style={{ background: "var(--navy)", color: "var(--white)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontSize: 12, fontWeight: 700 }}>
            Meridian Marine Co.
          </p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.02, maxWidth: 760, margin: "20px 0" }}>
            Your vessel, watched. Your time, protected.
          </h1>
          <p style={{ maxWidth: 620, color: "#d6e0e7", fontSize: 19, lineHeight: 1.7 }}>
            Independent vessel oversight and marine concierge for owners who want confidence while they are away.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {packages.map((pkg) => (
            <article key={pkg.key} style={{ background: "var(--white)", border: `1px solid var(--line)`, borderRadius: 18, padding: 24 }}>
              {pkg.featured && <div style={{ color: "var(--gold)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Recommended</div>}
              <h2 style={{ margin: "8px 0", color: "var(--navy)" }}>{pkg.name}</h2>
              <p style={{ color: "var(--muted)", minHeight: 72, lineHeight: 1.6 }}>{pkg.description}</p>
              <strong style={{ color: "var(--navy)", fontSize: 22 }}>
                {pkg.priceCents === null ? "Custom" : `CI$${pkg.priceCents / 100}/month`}
              </strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
