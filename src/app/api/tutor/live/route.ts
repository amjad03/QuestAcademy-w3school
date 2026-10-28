import Anthropic from "@anthropic-ai/sdk";
import { TUTOR_MODEL, burstGuard, fail, hasCredential, mapError, takeDaily } from "@/lib/tutor/guard";
import { hasTutorAccess, paymentsEnabled, tutorOpen } from "@/lib/tutor/pass";
import { LIVE_SYSTEM_PROMPT, RECAP_SCHEMA, RECAP_SYSTEM_PROMPT, liveContext } from "@/lib/tutor/live-prompt";
import { LIVE_LIMITS, LIVE_MODES, TUTOR_LANGUAGES, TUTOR_PASS_HEADER, type LiveRequest, type PageContext, type Recap, type StudentInfo } from "@/lib/tutor/live";
import { logAiUsage } from "@/lib/ai-usage";
import { STREAM_MARK } from "@/lib/tutor/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max).trim() : "");

/** Health/status for the tutor page: is the model configured, and is access open. */
export function GET() {
  return Response.json({ available: hasCredential(), open: tutorOpen(), payments: paymentsEnabled() }, { headers: { "Cache-Control": "no-store" } });
}

function parse(raw: unknown): LiveRequest | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const kind = r.kind === "recap" ? "recap" : r.kind === "turn" ? "turn" : null;
  const mode = LIVE_MODES.find((m) => m === r.mode);
  const language = TUTOR_LANGUAGES.find((l) => l === r.language) ?? "English";
  const topic = str(r.topic, 300);
  if (!kind || !mode || !topic) return null;
  const s = (r.student ?? {}) as Record<string, unknown>;
  const student: StudentInfo = {
    name: str(s.name, 60) || undefined,
    grade: str(s.grade, 20) || undefined,
    board: str(s.board, 40) || undefined,
    goal: str(s.goal, 80) || undefined,
    targetExam: str(s.targetExam, 40) || undefined,
    weakChapters: str(s.weakChapters, 800) || undefined,
    levels: str(s.levels, 300) || undefined,
    memory: Array.isArray(s.memory) ? s.memory.slice(0, 6).map((m) => str(m, 300)).filter(Boolean) : undefined,
  };
  const explainers = Array.isArray(r.explainers)
    ? r.explainers.slice(0, 12).flatMap((e) => {
        const o = (e ?? {}) as Record<string, unknown>;
        const id = str(o.id, 60);
        return /^[a-z0-9-]+$/.test(id) ? [{ id, title: str(o.title, 80) }] : [];
      })
    : [];
  if (!Array.isArray(r.messages) || !r.messages.length || r.messages.length > LIVE_LIMITS.maxMessages) return null;
  const messages: LiveRequest["messages"] = [];
  for (let i = 0; i < r.messages.length; i++) {
    const m = r.messages[i] as Record<string, unknown> | null;
    const role = i % 2 === 0 ? "user" : "assistant";
    if (m?.role !== role || typeof m.content !== "string" || !m.content.trim() || m.content.length > LIVE_LIMITS.maxChars) return null;
    messages.push({ role, content: m.content });
  }
  if (messages[messages.length - 1].role !== "user") return null;
  let image: LiveRequest["image"];
  if (r.image && typeof r.image === "object") {
    const im = r.image as Record<string, unknown>;
    const mediaType = (["image/jpeg", "image/png", "image/webp"] as const).find((t) => t === im.mediaType);
    const data = typeof im.data === "string" ? im.data : "";
    if (!mediaType || !data || data.length > LIVE_LIMITS.maxImageBytes || !/^[A-Za-z0-9+/=]+$/.test(data)) return null;
    image = { mediaType, data };
  }
  let boardImage: LiveRequest["boardImage"];
  if (r.boardImage && typeof r.boardImage === "object") {
    const im = r.boardImage as Record<string, unknown>;
    const mediaType = (["image/png", "image/jpeg"] as const).find((t) => t === im.mediaType);
    const data = typeof im.data === "string" ? im.data : "";
    if (!mediaType || !data || data.length > LIVE_LIMITS.maxImageBytes || !/^[A-Za-z0-9+/=]+$/.test(data)) return null;
    boardImage = { mediaType, data };
  }
  let page: PageContext | undefined;
  if (r.page && typeof r.page === "object") {
    const pg = r.page as Record<string, unknown>;
    page = {
      path: str(pg.path, 200) || undefined,
      course: str(pg.course, 120) || undefined,
      lesson: str(pg.lesson, 160) || undefined,
      summary: str(pg.summary, 1500) || undefined,
      question: str(pg.question, 2500) || undefined,
      answered: pg.answered === true || undefined,
      correct: typeof pg.correct === "boolean" ? pg.correct : undefined,
      answer: pg.answered === true ? str(pg.answer, 600) || undefined : undefined,
      stage: str(pg.stage, 20) || undefined,
    };
  }
  return { kind, mode, language, topic, student, explainers, messages, image, boardImage, page };
}

export async function POST(req: Request) {
  if (!hasCredential()) return fail(503, "tutor_unavailable");

  const caller = await burstGuard(req);
  if (caller instanceof Response) return caller;
  const { ip, user } = caller;

  // Premium gate: open for testing, else a pass checked on the server.
  if (!(await hasTutorAccess(user, req.headers.get(TUTOR_PASS_HEADER)))) return fail(402, "premium_required", { payments: paymentsEnabled() });

  const lr = parse(await req.json().catch(() => null));
  if (!lr) return fail(400, "bad_request", { detail: "Send {kind, mode, language, topic, student, messages} with alternating messages ending with the student." });

  const daily = await takeDaily(req, ip, user);
  if (daily !== "ok") return fail(429, daily === "budget" ? "upstream_busy" : "daily_limit");

  const ctx = liveContext(lr);
  const last = lr.messages.length - 1;
  const apiMessages: Anthropic.MessageParam[] = lr.messages.map((m, i) => {
    const board = i === last && lr.boardImage;
    if (i !== 0 && !board) return { role: m.role, content: m.content };
    const parts: Anthropic.ContentBlockParam[] = i === 0 ? [{ type: "text", text: ctx }] : [];
    if (i === 0 && lr.image) parts.push({ type: "image", source: { type: "base64", media_type: lr.image.mediaType, data: lr.image.data } });
    if (board) parts.push({ type: "text", text: "Snapshot of the smartboard right now (the student's own marks are on it):" }, { type: "image", source: { type: "base64", media_type: board.mediaType, data: board.data } });
    parts.push({ type: "text", text: m.content });
    return { role: "user", content: parts };
  });

  const client = new Anthropic();

  if (lr.kind === "recap") {
    // The transcript so far, then a request for the recap as strict JSON.
    const transcript = lr.messages.map((m) => `${m.role === "user" ? "STUDENT" : "TUTOR"}: ${m.content}`).join("\n").slice(-30000);
    try {
      const msg = await client.messages.create({
        model: TUTOR_MODEL,
        max_tokens: 2000,
        output_config: { effort: "low", format: { type: "json_schema", schema: RECAP_SCHEMA as unknown as Record<string, unknown> } },
        system: RECAP_SYSTEM_PROMPT,
        messages: [{ role: "user", content: `${ctx}\n\n<transcript>\n${transcript}\n</transcript>\n\nWrite the recap.` }],
      });
      await logAiUsage({ route: "tutor/recap", model: TUTOR_MODEL, user, ip, usage: msg.usage });
      const text = msg.content.map((b) => (b.type === "text" ? b.text : "")).join("");
      const recap = JSON.parse(text) as Recap;
      recap.practice = recap.practice.slice(0, 3);
      return Response.json({ recap }, { headers: { "Cache-Control": "no-store" } });
    } catch (err) {
      if (err instanceof SyntaxError) return fail(502, "upstream_error");
      return mapError(err);
    }
  }

  let stream: ReturnType<typeof client.messages.stream>;
  let iterator: AsyncIterator<Anthropic.MessageStreamEvent>;
  let first: IteratorResult<Anthropic.MessageStreamEvent>;
  try {
    stream = client.messages.stream({
      model: TUTOR_MODEL,
      max_tokens: 4000,
      output_config: { effort: "low" },
      system: [{ type: "text", text: LIVE_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: apiMessages,
    });
    iterator = stream[Symbol.asyncIterator]();
    first = await iterator.next();
  } catch (err) {
    return mapError(err);
  }

  const enc = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        let r = first;
        while (!r.done) {
          const e = r.value;
          if (e.type === "content_block_delta" && e.delta.type === "text_delta") controller.enqueue(enc.encode(e.delta.text));
          r = await iterator.next();
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") controller.enqueue(enc.encode(STREAM_MARK.refusal));
        await logAiUsage({ route: "tutor/live", model: TUTOR_MODEL, user, ip, usage: final.usage });
      } catch (err) {
        console.error("[tutor/live] stream error", err instanceof Error ? err.message : err);
        controller.enqueue(enc.encode(STREAM_MARK.error));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });
  return new Response(body, { headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store, no-transform", "X-Accel-Buffering": "no" } });
}
