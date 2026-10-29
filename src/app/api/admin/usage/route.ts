import { supabaseAdmin, userFromRequest } from "@/lib/supabase-server";
import { isAdmin } from "@/lib/admin";
import { costInr, usdToInr } from "@/lib/ai-usage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Row {
  model: string;
  requests: number;
  input_tokens: number;
  output_tokens: number;
  cache_read_tokens: number;
  cache_write_tokens: number;
}

const cost = (r: Row) => costInr(r.model, { input: Number(r.input_tokens), output: Number(r.output_tokens), cacheRead: Number(r.cache_read_tokens), cacheWrite: Number(r.cache_write_tokens) });

/** Sum rows that share a key (the RPCs group by model too, so each model is priced on its own). */
function rollup<T extends Row>(rows: T[], key: (r: T) => string, extra: (r: T) => Record<string, unknown> = () => ({})) {
  const out = new Map<string, { key: string; requests: number; inputTokens: number; outputTokens: number; costInr: number } & Record<string, unknown>>();
  for (const r of rows) {
    const k = key(r);
    const cur = out.get(k) ?? { key: k, requests: 0, inputTokens: 0, outputTokens: 0, costInr: 0, ...extra(r) };
    cur.requests += Number(r.requests);
    cur.costInr += cost(r);
    out.set(k, cur);
    // Voice rows (sarvam-tts/stt) carry characters/seconds, not tokens: priced, but not counted as tokens.
    if (r.model.startsWith("sarvam-")) continue;
    cur.inputTokens += Number(r.input_tokens) + Number(r.cache_read_tokens) + Number(r.cache_write_tokens);
    cur.outputTokens += Number(r.output_tokens);
  }
  return [...out.values()];
}

/** AI usage and estimated cost for /admin/usage. Only for ADMIN_EMAILS. */
export async function GET(req: Request) {
  const sb = supabaseAdmin();
  if (!sb) return Response.json({ error: "unavailable" }, { status: 503 });
  const user = await userFromRequest(req);
  if (!isAdmin(user)) return Response.json({ error: "forbidden" }, { status: 403 });
  const days = Math.min(90, Math.max(1, Number(new URL(req.url).searchParams.get("days")) || 30));
  const since = new Date(Date.now() - days * 86_400_000).toISOString();
  const [byDay, byUser, bySchool] = await Promise.all([
    sb.rpc("ai_usage_by_day", { p_since: since }),
    sb.rpc("ai_usage_by_user", { p_since: since, p_limit: 200 }),
    sb.rpc("ai_usage_by_school", { p_since: since }),
  ]);
  const err = byDay.error ?? byUser.error ?? bySchool.error;
  if (err) {
    console.error("[admin/usage]", err.message);
    return Response.json({ error: "query_failed", detail: err.message }, { status: 500 });
  }
  const dayRows = rollup((byDay.data ?? []) as (Row & { day: string })[], (r) => r.day).sort((a, b) => b.key.localeCompare(a.key));
  const userRows = rollup((byUser.data ?? []) as (Row & { user_id: string | null; guest_key: string | null })[], (r) => r.user_id ?? `guest:${r.guest_key ?? "?"}`, (r) => ({ guest: !r.user_id }))
    .sort((a, b) => b.costInr - a.costInr)
    .slice(0, 25);
  // Operators see who the top users are; nothing here is sent to analytics.
  const emails = await Promise.all(userRows.map((u) => (u.guest ? null : sb.auth.admin.getUserById(u.key).then((r) => r.data.user?.email ?? null, () => null))));
  const schoolRows = rollup((bySchool.data ?? []) as (Row & { school_id: string | null; school_name: string | null; users: number })[], (r) => r.school_id ?? "none", (r) => ({ name: r.school_id ? (r.school_name ?? "Unknown school") : "No school / guests", users: Number(r.users) })).sort((a, b) => b.costInr - a.costInr);
  const totals = dayRows.reduce((t, d) => ({ requests: t.requests + d.requests, inputTokens: t.inputTokens + d.inputTokens, outputTokens: t.outputTokens + d.outputTokens, costInr: t.costInr + d.costInr }), { requests: 0, inputTokens: 0, outputTokens: 0, costInr: 0 });
  const raw = (byDay.data ?? []) as Row[];
  const voice = {
    ttsChars: raw.filter((r) => r.model === "sarvam-tts").reduce((a, r) => a + Number(r.input_tokens), 0),
    sttSeconds: raw.filter((r) => r.model === "sarvam-stt").reduce((a, r) => a + Number(r.input_tokens), 0),
    costInr: raw.filter((r) => r.model.startsWith("sarvam-")).reduce((a, r) => a + cost(r), 0),
  };
  return Response.json(
    { days, usdToInr: usdToInr(), totals, voice, byDay: dayRows, topUsers: userRows.map((u, i) => ({ ...u, email: emails[i] })), bySchool: schoolRows },
    { headers: { "Cache-Control": "no-store" } },
  );
}
