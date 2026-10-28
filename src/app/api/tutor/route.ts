import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT, contextTurn } from "@/lib/tutor/prompt";
import { rateLimit } from "@/lib/tutor/rateLimit";
import { TUTOR_MODEL, clientIp, fail, hasCredential, mapError, takeDaily } from "@/lib/tutor/guard";
import { STREAM_MARK, TUTOR_LIMITS, TUTOR_STAGES, type TutorContext, type TutorMessage } from "@/lib/tutor/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = TUTOR_MODEL;

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
