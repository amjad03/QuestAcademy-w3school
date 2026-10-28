import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { hashIp, supabaseAdmin, userFromRequest } from "@/lib/supabase-server";
import type { User } from "@supabase/supabase-js";
import { rateLimit } from "./rateLimit";
import { TUTOR_LIMITS, type TutorErrorCode } from "./types";

/** Shared guards for the tutor routes (Ask Questy and the live tutor): errors, IP, daily allowance. */

/** The model both tutor routes use. */
export const TUTOR_MODEL = "claude-haiku-5-5";

export function fail(status: number, error: TutorErrorCode | "premium_required", extra?: Record<string, unknown>, headers?: Record<string, string>) {
  return Response.json({ error, ...extra }, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

export const hasCredential = () => Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

/**
 * The caller's IP as seen by the platform. Vercel sets x-vercel-forwarded-for and
 * x-real-ip itself; the first X-Forwarded-For entry is client-controlled, so only
 * the last hop (added by our own proxy) is trusted as a fallback.
 */
export function clientIp(req: Request) {
  const platform = req.headers.get("x-vercel-forwarded-for") || req.headers.get("x-real-ip");
  if (platform) return platform.split(",")[0].trim();
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",").at(-1) || "unknown").trim();
}

const envInt = (name: string, fallback: number) => {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : fallback;
};

/**
 * Daily allowance shared by every server instance, kept in Supabase. Signed-in
 * learners get a larger allowance than guests; TUTOR_DAILY_BUDGET caps the
 * whole site (0 = no cap). Without Supabase only the per-instance limiter applies.
 */
/**
 * Verified token -> user, cached briefly per instance so a chatty learner doesn't cost
 * an Auth API round trip on every message (500 learners at once would otherwise
 * hammer Supabase Auth). Tokens expire within the hour, so 5 minutes is safe.
 */
const userCache = new Map<string, { user: User | null; at: number }>();
const USER_TTL = 5 * 60 * 1000;

export async function cachedUser(req: Request): Promise<User | null> {
  const token = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) return null;
  const now = Date.now();
  const hit = userCache.get(token);
  if (hit && now - hit.at < USER_TTL) return hit.user;
  const user = await userFromRequest(req).catch(() => null);
  userCache.set(token, { user, at: now });
  if (userCache.size > 2000) for (const [k, v] of userCache) if (now - v.at >= USER_TTL) userCache.delete(k);
  return user;
}

/**
 * Burst limit for a tutor request: per signed-in learner, else per guest IP.
 * Returns the caller, or a 429 response.
 */
export async function burstGuard(req: Request): Promise<{ ip: string; user: User | null } | Response> {
  const ip = clientIp(req);
  const user = await cachedUser(req);
  const limited = user ? rateLimit(`u:${user.id}`) : rateLimit(`ip:${ip}`, TUTOR_LIMITS.rateLimitGuestIp);
  if (!limited.ok) return fail(429, "rate_limited", { retryAfter: limited.retryAfter }, { "Retry-After": String(limited.retryAfter) });
  return { ip, user };
}

export async function takeDaily(req: Request, ip: string, known?: User | null): Promise<"ok" | "limited" | "budget"> {
  const sb = supabaseAdmin();
  if (!sb) return "ok";
  const user = known !== undefined ? known : await cachedUser(req);
  const key = user ? `u:${user.id}` : `ip:${hashIp(ip)}`;
  const limit = user ? envInt("TUTOR_DAILY_LIMIT_USER", 60) : envInt("TUTOR_DAILY_LIMIT_GUEST", 15);
  const budget = envInt("TUTOR_DAILY_BUDGET", 3000);
  const { data, error } = await sb.rpc("tutor_take", { p_key: key, p_limit: limit, p_global_limit: budget });
  if (error) {
    // Fail open on a database hiccup; the per-instance limiter still applies.
    console.error("[tutor] usage check failed", error.message);
    return "ok";
  }
  if (data === true) return "ok";
  // Tell the two cases apart for the message: is the whole site over budget?
  const { data: all } = await sb.from("tutor_usage").select("count").eq("key", "__all__").eq("day", new Date().toISOString().slice(0, 10)).maybeSingle();
  return budget > 0 && (all?.count ?? 0) > budget ? "budget" : "limited";
}

export function mapError(err: unknown) {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error("[tutor] authentication failed — check ANTHROPIC_API_KEY");
    return fail(503, "auth_failed");
  }
  if (err instanceof Anthropic.RateLimitError) {
    const ra = err.headers?.get?.("retry-after");
    return fail(429, "upstream_busy", ra ? { retryAfter: Number(ra) || undefined } : undefined, ra ? { "Retry-After": ra } : undefined);
  }
  if (err instanceof Anthropic.APIError) {
    console.error("[tutor] API error", err.status, err.message);
    return fail(err.status === 529 || err.status === 503 ? 503 : 502, "upstream_error", { status: err.status ?? null });
  }
  console.error("[tutor] unexpected error", err);
  return fail(500, "upstream_error");
}
