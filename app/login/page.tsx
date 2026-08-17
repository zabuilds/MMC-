import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "var(--cream)" }}>
      <section style={{ width: "100%", maxWidth: 420, background: "var(--white)", border: "1px solid var(--line)", borderRadius: 20, padding: 28 }}>
        <p style={{ margin: 0, color: "var(--gold)", fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Meridian Marine Co.</p>
        <h1 style={{ margin: "8px 0 8px", color: "var(--navy)", fontSize: 32 }}>Sign in</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Authentication is required to access the MMC operating system.</p>
        <form action={async (formData) => {
          "use server";
          const { createSupabaseServerClient } = await import("../../lib/supabase/server");
          const supabase = await createSupabaseServerClient();
          const email = String(formData.get("email") ?? "");
          const password = String(formData.get("password") ?? "");
          const { error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) return;
          redirect("/operations");
        }} style={{ display: "grid", gap: 14, marginTop: 20 }}>
          <label style={{ display: "grid", gap: 6, color: "var(--navy)", fontWeight: 700, fontSize: 14 }}>Email<input name="email" type="email" required style={{ padding: 12, border: "1px solid var(--line)", borderRadius: 10 }} /></label>
          <label style={{ display: "grid", gap: 6, color: "var(--navy)", fontWeight: 700, fontSize: 14 }}>Password<input name="password" type="password" required style={{ padding: 12, border: "1px solid var(--line)", borderRadius: 10 }} /></label>
          <button type="submit" style={{ marginTop: 6, padding: 13, border: 0, borderRadius: 10, background: "var(--navy)", color: "white", fontWeight: 800 }}>Sign in</button>
        </form>
      </section>
    </main>
  );
}
