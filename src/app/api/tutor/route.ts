import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT, contextTurn } from "@/lib/tutor/prompt";
import { rateLimit } from "@/lib/tutor/rateLimit";
import { hashIp, supabaseAdmin, userFromRequest } from "@/lib/supabase-server";
import { STREAM_MARK, TUTOR_LIMITS, TUTOR_STAGES, type TutorContext, type TutorErrorCode, type TutorMessage } from "@/lib/tutor/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-5-5";

function fail(status: number, error: TutorErrorCode, extra?: Record<string, unknown>, headers?: Record<string, string>) {
  return Response.json({ error, ...extra }, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

const hasCredential = () => Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
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
async function takeDaily(req: Request, ip: string): Promise<"ok" | "limited" | "budget"> {
  const sb = supabaseAdmin();
  if (!sb) return "ok";
  const user = await userFromRequest(req);
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

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max).trim() : "");

function parseContext(raw: unknown): TutorContext | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const stage = TUTOR_STAGES.find((s) => s === r.stage);
  const lessonTitle = str(r.lessonTitle, 300);
  if (!stage || !lessonTitle) return null;
  const max = TUTOR_LIMITS.maxContextChars;
  return {
    stage,
    language: str(r.language, 40) || "English",
    courseTitle: str(r.courseTitle, 300) || "Quest Academy",
    lessonTitle,
    lessonSummary: str(r.lessonSummary, max) || undefined,
    questionText: str(r.questionText, max) || undefined,
    answered: r.answered === true,
    correct: typeof r.correct === "boolean" ? r.correct : undefined,
    answerText: r.answered === true ? str(r.answerText, 1000) || undefined : undefined,
  };
}

function parseMessages(raw: unknown): TutorMessage[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > TUTOR_LIMITS.maxMessages) return null;
  const out: TutorMessage[] = [];
  for (let i = 0; i < raw.length; i++) {
    const m = raw[i] as Record<string, unknown> | null;
    const role = m?.role;
    const content = m?.content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    if (!content.trim() || content.length > TUTOR_LIMITS.maxChars) return null;
    // Must alternate, starting and ending with the learner.
    if (role !== (i % 2 === 0 ? "user" : "assistant")) return null;
    out.push({ role, content });
  }
  return out[out.length - 1].role === "user" ? out : null;
}

export async function POST(req: Request) {
  if (!hasCredential()) return fail(503, "tutor_unavailable");

  const ip = clientIp(req);
  const limited = rateLimit(ip);
  if (!limited.ok) return fail(429, "rate_limited", { retryAfter: limited.retryAfter }, { "Retry-After": String(limited.retryAfter) });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return fail(400, "bad_request", { detail: "Body must be JSON." });
  }
  const b = (body ?? {}) as Record<string, unknown>;
  const context = parseContext(b.context);
  const messages = parseMessages(b.messages);
  if (!context || !messages) return fail(400, "bad_request", { detail: `Send context {stage, lessonTitle…} and 1–${TUTOR_LIMITS.maxMessages} alternating messages of at most ${TUTOR_LIMITS.maxChars} characters, ending with the learner.` });

  // Count only well-formed requests against the daily allowance.
  const daily = await takeDaily(req, ip);
  if (daily !== "ok") return fail(429, daily === "budget" ? "upstream_busy" : "daily_limit");

  // Per-request context rides in the first user turn so the system prompt stays cacheable.
  const apiMessages: Anthropic.MessageParam[] = messages.map((m, i) =>
    i === 0
      ? { role: "user", content: [{ type: "text", text: contextTurn(context) }, { type: "text", text: m.content }] }
      : { role: m.role, content: m.content },
  );

  const client = new Anthropic();
  let stream: ReturnType<typeof client.messages.stream>;
  let iterator: AsyncIterator<Anthropic.MessageStreamEvent>;
  let first: IteratorResult<Anthropic.MessageStreamEvent>;
  try {
    stream = client.messages.stream({
      model: MODEL,
      max_tokens: 2048,
      output_config: { effort: "low" },
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: apiMessages,
    });
    iterator = stream[Symbol.asyncIterator]();
    // Wait for the first event so connection/auth/rate errors become proper HTTP errors.
    first = await iterator.next();
  } catch (err) {
    return mapError(err);
  }

  const enc = new TextEncoder();
  const body$ = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (e: Anthropic.MessageStreamEvent) => {
        if (e.type === "content_block_delta" && e.delta.type === "text_delta") controller.enqueue(enc.encode(e.delta.text));
      };
      try {
        let r = first;
        while (!r.done) {
          emit(r.value);
          r = await iterator.next();
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") controller.enqueue(enc.encode(STREAM_MARK.refusal));
      } catch (err) {
        console.error("[tutor] stream error", err instanceof Error ? err.message : err);
        controller.enqueue(enc.encode(STREAM_MARK.error));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body$, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store, no-transform", "X-Accel-Buffering": "no" },
  });
}

function mapError(err: unknown) {
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
