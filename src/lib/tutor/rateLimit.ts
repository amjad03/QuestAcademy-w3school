import { TUTOR_LIMITS } from "./types";

/**
 * Very small sliding-window limiter kept in memory. It is PER SERVER INSTANCE:
 * serverless platforms run many instances (and recycle them), so treat it as burst
 * damping, not a quota. The shared, durable limits are the daily allowance in
 * Supabase (see guard.ts `takeDaily`).
 *
 * Keys are per signed-in user ("u:<id>") or, for guests, per IP ("ip:<ip>"). Signed-in
 * learners are never counted against their IP, so a whole school behind one
 * network address doesn't lock itself out.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max: number = TUTOR_LIMITS.rateLimit, win: number = TUTOR_LIMITS.rateWindowMs, now = Date.now()): { ok: true } | { ok: false; retryAfter: number } {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < win);
  if (recent.length >= max) {
    hits.set(key, recent);
    return { ok: false, retryAfter: Math.max(1, Math.ceil((win - (now - recent[0])) / 1000)) };
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep the map from growing forever.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < win)) hits.delete(k);
  }
  return { ok: true };
}
