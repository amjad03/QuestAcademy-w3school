/**
 * The live tutor's wire protocol: the model streams strict JSON events, one
 * object per line. This module holds the schema, a tiny validator, a streaming
 * object extractor that survives malformed output (several objects on a line,
 * objects split over lines, code fences, prose, smart quotes, trailing commas),
 * and the converter from the older `{say, ops, check}` step format.
 *
 * Pure: safe on the server and the client.
 */

import { cleanOp, type BoardOp } from "@/components/board/ops";

export const STAGES = ["hook", "intuition", "definition", "example", "mistakes", "try", "recap"] as const;
export type Stage = (typeof STAGES)[number];
export const ASK_KINDS = ["mcq", "short", "board", "explain"] as const;
export type AskKind = (typeof ASK_KINDS)[number];
export const VERDICTS = ["correct", "partial", "misconception", "unclear"] as const;
export type Verdict = (typeof VERDICTS)[number];
export const BRANCHES = ["reexplain", "easier", "harder", "next", "resume"] as const;
export type Branch = (typeof BRANCHES)[number];

export interface PlanConcept {
  id: string;
  title: string;
}

export type LiveEvent =
  /** The lesson plan for the whole topic: concepts in teaching order (each taught hook → … → recap). */
  | { t: "plan"; title: string; concepts: PlanConcept[] }
  /** Where the lesson is now. */
  | { t: "progress"; concept: string; stage: Stage }
  /** Speak a sentence or two while drawing. */
  | { t: "say"; text: string; ops: BoardOp[] }
  /** Draw without speaking. */
  | { t: "board"; ops: BoardOp[] }
  /** Ask the student and WAIT. kind "board" hands the board over ("Your turn"). */
  | { t: "ask"; q: string; kind: AskKind; options?: string[] }
  /** A Socratic hint (never the answer), then WAIT. */
  | { t: "hint"; text: string; level: number; ops: BoardOp[] }
  /** The verdict on the student's last answer. */
  | { t: "evaluate"; verdict: Verdict; note: string; misconception?: string }
  /** What the tutor does next because of that verdict or request. */
  | { t: "branch"; to: Branch; why?: string }
  | { t: "end" };

export type EventType = LiveEvent["t"];
/** Events after which the tutor stops and waits for the student. */
export const isPause = (e: LiveEvent) => e.t === "ask" || e.t === "hint" || e.t === "end";

/* ------------------------------------------------------------------ */
/* Schema (JSON-Schema subset) + validator                             */
/* ------------------------------------------------------------------ */

type Schema =
  | { type: "string"; maxLength?: number; enum?: readonly string[] }
  | { type: "number"; minimum?: number; maximum?: number }
  | { type: "array"; items: Schema; maxItems?: number }
  | { type: "object"; required?: readonly string[]; properties: Record<string, Schema> }
  | { type: "any" };

const str = (maxLength: number): Schema => ({ type: "string", maxLength });
const ops: Schema = { type: "array", items: { type: "any" }, maxItems: 40 };

/** Per-event schema: what each `t` must carry. Ops are validated one by one by `cleanOp`. */
export const EVENT_SCHEMA: Record<EventType, Schema> = {
  plan: { type: "object", required: ["title", "concepts"], properties: { title: str(160), concepts: { type: "array", maxItems: 12, items: { type: "object", required: ["id", "title"], properties: { id: str(24), title: str(120) } } } } },
  progress: { type: "object", required: ["concept", "stage"], properties: { concept: str(24), stage: { type: "string", enum: STAGES } } },
  say: { type: "object", required: ["text"], properties: { text: str(700), ops } },
  board: { type: "object", required: ["ops"], properties: { ops } },
  ask: { type: "object", required: ["q"], properties: { q: str(500), kind: { type: "string", enum: ASK_KINDS }, options: { type: "array", maxItems: 5, items: str(160) } } },
  hint: { type: "object", required: ["text"], properties: { text: str(600), level: { type: "number", minimum: 1, maximum: 3 }, ops } },
  evaluate: { type: "object", required: ["verdict", "note"], properties: { verdict: { type: "string", enum: VERDICTS }, note: str(400), misconception: str(200) } },
  branch: { type: "object", required: ["to"], properties: { to: { type: "string", enum: BRANCHES }, why: str(200) } },
  end: { type: "object", properties: {} },
};

/** Returns a list of problems ("" path = root). Empty = valid. Unknown keys are ignored. */
export function validate(schema: Schema, v: unknown, path = ""): string[] {
  switch (schema.type) {
    case "any":
      return [];
    case "string":
      if (typeof v !== "string") return [`${path}: expected string`];
      if (schema.enum && !schema.enum.includes(v)) return [`${path}: not one of ${schema.enum.join("|")}`];
      return [];
    case "number":
      if (typeof v !== "number" || !Number.isFinite(v)) return [`${path}: expected number`];
      return [];
    case "array":
      if (!Array.isArray(v)) return [`${path}: expected array`];
      return v.flatMap((x, i) => validate(schema.items, x, `${path}[${i}]`));
    case "object": {
      if (!v || typeof v !== "object" || Array.isArray(v)) return [`${path}: expected object`];
      const o = v as Record<string, unknown>;
      const missing = (schema.required ?? []).filter((k) => o[k] === undefined).map((k) => `${path}.${k}: required`);
      const bad = Object.entries(schema.properties).flatMap(([k, s]) => (o[k] === undefined ? [] : validate(s, o[k], `${path}.${k}`)));
      return [...missing, ...bad];
    }
  }
}

const cut = (v: unknown, n: number) => (typeof v === "string" ? v.slice(0, n).trim() : "");
const cleanOps = (v: unknown): BoardOp[] => (Array.isArray(v) ? v.slice(0, 40).map(cleanOp).filter((o): o is BoardOp => Boolean(o)) : []);

/** Validate + normalise one parsed object into events (lenient: fixes what it safely can, drops the rest). */
export function toEvents(raw: unknown): LiveEvent[] {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return [];
  const r = raw as Record<string, unknown>;
  const t = (typeof r.t === "string" ? r.t : typeof r.type === "string" ? r.type : "") as EventType;
  if (!t) return legacy(r);
  if (!(t in EVENT_SCHEMA)) return [];
  // Common slips: "say" with "say" instead of "text", ask with "question".
  if (t === "say" && r.text === undefined && typeof r.say === "string") r.text = r.say;
  if (t === "ask" && r.q === undefined && typeof r.question === "string") r.q = r.question;
  if (t === "ask" && r.kind !== undefined && !ASK_KINDS.includes(r.kind as AskKind)) delete r.kind;
  if (t === "progress" && !STAGES.includes(r.stage as Stage)) r.stage = "intuition";
  const errs = validate(EVENT_SCHEMA[t], r);
  // Ops are checked individually below; only structural problems drop the event.
  if (errs.length) return [];
  switch (t) {
    case "plan":
      return [{ t, title: cut(r.title, 160), concepts: (r.concepts as Record<string, unknown>[]).slice(0, 12).map((c, i) => ({ id: cut(c.id, 24) || `c${i + 1}`, title: cut(c.title, 120) })).filter((c) => c.title) }];
    case "progress":
      return [{ t, concept: cut(r.concept, 24), stage: r.stage as Stage }];
    case "say": {
      const text = cut(r.text, 700);
      const o = cleanOps(r.ops);
      return text || o.length ? [{ t, text, ops: o }] : [];
    }
    case "board": {
      const o = cleanOps(r.ops);
      return o.length ? [{ t, ops: o }] : [];
    }
    case "ask": {
      const options = Array.isArray(r.options) ? (r.options as string[]).map((o) => cut(o, 160)).filter(Boolean).slice(0, 5) : undefined;
      const kind = (r.kind as AskKind | undefined) ?? (options?.length ? "mcq" : "short");
      return [{ t, q: cut(r.q, 500), kind, options: options?.length ? options : undefined }];
    }
    case "hint":
      return [{ t, text: cut(r.text, 600), level: Math.min(3, Math.max(1, Math.round(Number(r.level) || 1))), ops: cleanOps(r.ops) }];
    case "evaluate":
      return [{ t, verdict: r.verdict as Verdict, note: cut(r.note, 400), misconception: cut(r.misconception, 200) || undefined }];
    case "branch":
      return [{ t, to: r.to as Branch, why: cut(r.why, 200) || undefined }];
    case "end":
      return [{ t: "end" }];
  }
}

/** The older one-line step format: {say, ops, check?, misconception?, hint?, end?}. */
function legacy(r: Record<string, unknown>): LiveEvent[] {
  if (typeof r.say !== "string" && !Array.isArray(r.ops)) return [];
  const out: LiveEvent[] = [];
  if (typeof r.misconception === "string" && r.misconception.trim()) out.push({ t: "evaluate", verdict: "misconception", note: "", misconception: cut(r.misconception, 200) });
  const text = cut(r.say, 700);
  const o = cleanOps(r.ops);
  if (r.hint === true && text) out.push({ t: "hint", text, level: 1, ops: o });
  else if (text || o.length) out.push({ t: "say", text, ops: o });
  const c = r.check as Record<string, unknown> | undefined;
  if (c && typeof c.q === "string") {
    const options = Array.isArray(c.options) ? c.options.filter((x): x is string => typeof x === "string").slice(0, 5) : undefined;
    out.push({ t: "ask", q: cut(c.q, 500), kind: c.board === true ? "board" : options?.length ? "mcq" : "short", options: options?.length ? options : undefined });
  }
  if (r.end === true) out.push({ t: "end" });
  return out;
}

/** Last-chance repairs for almost-JSON. */
export function repairJson(s: string): unknown {
  const attempts = [
    s,
    s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'"),
    s.replace(/[“”]/g, '"').replace(/,\s*([}\]])/g, "$1"),
    // Unescaped newlines inside strings.
    s.replace(/[“”]/g, '"').replace(/,\s*([}\]])/g, "$1").replace(/\n/g, " "),
  ];
  for (const a of attempts) {
    try {
      return JSON.parse(a);
    } catch {
      /* next */
    }
  }
  return undefined;
}

/**
 * Incremental extractor: feed it stream chunks, it emits every complete
 * top-level JSON object (balanced braces, strings respected) as soon as it
 * closes. Text outside objects is kept as `stray` (used for recovery).
 */
export class EventStream {
  private buf = "";
  private depth = 0;
  private inStr = false;
  private esc = false;
  private start = -1;
  private scanned = 0;
  stray = "";
  bad = 0;
  /** `onPartial` sees the spoken text of a say/hint/ask object while it is still streaming in (so speech can start early). */
  constructor(
    private onEvent: (e: LiveEvent) => void,
    private onPartial?: (p: { t: "say" | "hint" | "ask"; text: string }) => void,
  ) {}

  push(chunk: string) {
    this.buf += chunk;
    for (let i = this.scanned; i < this.buf.length; i++) {
      const ch = this.buf[i];
      if (this.inStr) {
        if (this.esc) this.esc = false;
        else if (ch === "\\") this.esc = true;
        else if (ch === '"') this.inStr = false;
        continue;
      }
      if (ch === '"' && this.depth > 0) this.inStr = true;
      else if (ch === "{") {
        if (this.depth === 0) this.start = i;
        this.depth++;
      } else if (ch === "}" && this.depth > 0) {
        this.depth--;
        if (this.depth === 0 && this.start >= 0) {
          this.emit(this.buf.slice(this.start, i + 1));
          this.start = -1;
        }
      } else if (this.depth === 0) this.stray += ch;
    }
    this.scanned = this.buf.length;
    if (this.onPartial && this.depth > 0 && this.start >= 0) this.partial(this.buf.slice(this.start));
    if (this.depth === 0) {
      this.buf = "";
      this.scanned = 0;
    } else if (this.start > 0) {
      this.buf = this.buf.slice(this.start);
      this.scanned -= this.start;
      this.start = 0;
    }
  }

  private partial(obj: string) {
    const t = /"t"\s*:\s*"(say|hint|ask)"/.exec(obj)?.[1] as "say" | "hint" | "ask" | undefined;
    if (!t) return;
    const m = /"(?:text|q)"\s*:\s*"((?:[^"\\]|\\.)*)/.exec(obj);
    if (!m) return;
    // Only the event's own text (it comes before "ops"), never a board op's "text".
    const ops = obj.indexOf('"ops"');
    if (ops >= 0 && ops < m.index) return;
    const raw = m[1].replace(/\\u[0-9a-fA-F]{0,3}$/, "").replace(/\\$/, "");
    try {
      this.onPartial!({ t, text: JSON.parse(`"${raw}"`) as string });
    } catch {
      /* odd escape: wait for more */
    }
  }

  private emit(text: string) {
    const parsed = repairJson(text);
    const evs = toEvents(parsed);
    if (!evs.length) this.bad++;
    evs.forEach(this.onEvent);
  }

  /** End of stream: an unfinished object is closed if possible; stray prose becomes speech when nothing else came. */
  end(gotAny: boolean) {
    if (this.depth > 0 && this.start >= 0) {
      const tail = this.buf.slice(this.start).replace(/,\s*$/, "") + "}".repeat(this.depth);
      this.depth = 0;
      this.emit(tail);
    }
    const prose = this.stray.replace(/```(json)?/g, "").replace(/\s+/g, " ").trim();
    if (!gotAny && prose.length > 3) this.onEvent({ t: "say", text: prose.slice(0, 700), ops: [] });
  }
}

/** Parse a whole stored reply (history) into events. */
export function parseEvents(text: string): LiveEvent[] {
  const out: LiveEvent[] = [];
  const s = new EventStream((e) => out.push(e));
  s.push(text);
  s.end(out.length > 0);
  return out;
}
