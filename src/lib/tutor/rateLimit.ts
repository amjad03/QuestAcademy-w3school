import { TUTOR_LIMITS } from "./types";

/**
 * Very small sliding-window limiter kept in memory. It is PER SERVER INSTANCE:
 * serverless platforms run many instances, so treat it as abuse damping, not a
 * hard quota. Use a shared store (e.g. Upstash/Redis) for a real global limit.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, now = Date.now()): { ok: true } | { ok: false; retryAfter: number } {
  const { rateLimit: max, rateWindowMs: win } = TUTOR_LIMITS;
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
