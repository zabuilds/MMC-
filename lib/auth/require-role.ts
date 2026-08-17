import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Role } from "@/lib/domain-contracts";

const databaseRoleToApplicationRole: Record<string, Role> = {
  operator: "operator",
  management: "manager_qa",
  client: "client",
  vendor: "operator",
  admin: "administrator",
};

export async function requireRole(allowedRoles: Role[]) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: roleRecord } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  const role = roleRecord?.role ? databaseRoleToApplicationRole[roleRecord.role] : undefined;

  if (!role || !allowedRoles.includes(role)) redirect("/forbidden");

  return { user, role };
}
