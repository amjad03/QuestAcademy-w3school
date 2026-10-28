import { supabaseAdmin, userFromRequest } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Permanently delete the signed-in learner's account and the data stored for it (DPDP Act right to erasure). */
export async function POST(req: Request) {
  const sb = supabaseAdmin();
  if (!sb) return Response.json({ error: "accounts_unavailable" }, { status: 503 });
  const user = await userFromRequest(req);
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });
  // Rows keyed by text rather than a foreign key go first; everything else cascades
  // (payments and AI usage logs keep the amounts but lose the link to the person).
  await sb.from("tutor_usage").delete().eq("key", `u:${user.id}`);
  const { error } = await sb.auth.admin.deleteUser(user.id);
  if (error) {
    console.error("[account] delete failed", error.message);
    return Response.json({ error: "delete_failed" }, { status: 500 });
  }
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
