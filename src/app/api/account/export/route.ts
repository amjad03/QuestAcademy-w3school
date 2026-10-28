import { supabaseAdmin, userFromRequest } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Tables holding personal data, and the column that names the learner. Missing tables are skipped. */
const TABLES: [table: string, column: string][] = [
  ["profiles", "id"],
  ["learner_state", "user_id"],
  ["memberships", "user_id"],
  ["student_summaries", "user_id"],
  ["consent_records", "user_id"],
  ["payments", "user_id"],
  ["tutor_passes", "user_id"],
  ["ai_usage", "user_id"],
];

/** Everything stored for the signed-in learner, as one JSON file (DPDP Act right to access). */
export async function GET(req: Request) {
  const sb = supabaseAdmin();
  if (!sb) return Response.json({ error: "accounts_unavailable" }, { status: 503 });
  const user = await userFromRequest(req);
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });
  const data: Record<string, unknown> = {};
  for (const [table, column] of TABLES) {
    const { data: rows, error } = await sb.from(table).select("*").eq(column, user.id).limit(5000);
    if (!error) data[table] = rows;
  }
  const { data: usage } = await sb.from("tutor_usage").select("day, count").eq("key", `u:${user.id}`);
  // Never export the consent verification secret.
  if (Array.isArray(data.consent_records)) data.consent_records = (data.consent_records as Record<string, unknown>[]).map(({ verify_token_hash: _t, ...r }) => r);
  const out = {
    exportedAt: new Date().toISOString(),
    account: { id: user.id, email: user.email, phone: user.phone || null, createdAt: user.created_at, lastSignInAt: user.last_sign_in_at ?? null },
    ...data,
    tutor_daily_usage: usage ?? [],
  };
  return new Response(JSON.stringify(out, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8", "Content-Disposition": 'attachment; filename="quest-academy-account.json"', "Cache-Control": "no-store" },
  });
}
