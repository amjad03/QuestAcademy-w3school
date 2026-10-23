import { supabaseAdmin, userFromRequest } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Permanently delete the signed-in learner's account. Their rows go with it (on delete cascade). */
export async function POST(req: Request) {
  const sb = supabaseAdmin();
  if (!sb) return Response.json({ error: "accounts_unavailable" }, { status: 503 });
  const user = await userFromRequest(req);
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });
  const { error } = await sb.auth.admin.deleteUser(user.id);
  if (error) {
    console.error("[account] delete failed", error.message);
    return Response.json({ error: "delete_failed" }, { status: 500 });
  }
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
