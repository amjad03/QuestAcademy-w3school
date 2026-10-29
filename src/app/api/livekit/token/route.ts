import { AccessToken, RoomAgentDispatch, RoomConfiguration } from "livekit-server-sdk";
import { randomUUID } from "node:crypto";
import { burstGuard, fail, takeDaily } from "@/lib/tutor/guard";
import { hasTutorAccess, paymentsEnabled } from "@/lib/tutor/pass";
import { TUTOR_PASS_HEADER } from "@/lib/tutor/live";
import { rateLimit } from "@/lib/tutor/rateLimit";
import { REALTIME_AGENT_NAME, sanitizeMeta } from "@/lib/realtime/metadata";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** One room token is a whole voice session, so mint few: per learner (or guest IP) per minute. */
const MINT_PER_MIN_USER = 6;
const MINT_PER_MIN_GUEST = 3;
const TOKEN_TTL = "30m";

const configured = () => Boolean(process.env.LIVEKIT_URL && process.env.LIVEKIT_API_KEY && process.env.LIVEKIT_API_SECRET);

/** Is the realtime path configured on the server? */
export function GET() {
  return Response.json({ available: configured() }, { headers: { "Cache-Control": "no-store" } });
}

/**
 * Mint a LiveKit room token for one realtime tutor session. The room is new and private
 * to this learner; the token dispatches the voice agent into it and carries the learner's
 * context (class, board, topic, weak chapters, language, plan) as participant metadata.
 */
export async function POST(req: Request) {
  if (!configured()) return fail(503, "tutor_unavailable");

  const caller = await burstGuard(req);
  if (caller instanceof Response) return caller;
  const { ip, user } = caller;

  const mint = user ? rateLimit(`lk:u:${user.id}`, MINT_PER_MIN_USER, 60_000) : rateLimit(`lk:ip:${ip}`, MINT_PER_MIN_GUEST, 60_000);
  if (!mint.ok) return fail(429, "rate_limited", { retryAfter: mint.retryAfter }, { "Retry-After": String(mint.retryAfter) });

  if (!(await hasTutorAccess(user, req.headers.get(TUTOR_PASS_HEADER)))) return fail(402, "premium_required", { payments: paymentsEnabled() });

  const meta = sanitizeMeta(await req.json().catch(() => null));
  if (!meta) return fail(400, "bad_request", { detail: "Send {topic, mode, tutorLanguage, student, session?}." });

  const daily = await takeDaily(req, ip, user);
  if (daily !== "ok") return fail(429, daily === "budget" ? "upstream_busy" : "daily_limit");

  const room = `tutor-${randomUUID()}`;
  const identity = user ? `u-${user.id}` : `g-${randomUUID().slice(0, 12)}`;
  const metadata = JSON.stringify(meta).slice(0, 12_000);

  const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity,
    name: meta.student.name ?? "Student",
    metadata,
    ttl: TOKEN_TTL,
  });
  at.addGrant({ roomJoin: true, room, canPublish: true, canSubscribe: true, canPublishData: true, canUpdateOwnMetadata: false });
  at.roomConfig = new RoomConfiguration({
    emptyTimeout: 60,
    departureTimeout: 20,
    maxParticipants: 3,
    agents: [new RoomAgentDispatch({ agentName: process.env.LIVEKIT_AGENT_NAME || REALTIME_AGENT_NAME, metadata: JSON.stringify({ room }) })],
  });

  return Response.json({ url: process.env.LIVEKIT_URL, token: await at.toJwt(), room, identity }, { headers: { "Cache-Control": "no-store" } });
}
