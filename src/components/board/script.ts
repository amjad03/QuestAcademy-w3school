/**
 * Board lesson scripts: a narrated "video" made of smartboard ops.
 *
 * A script is a list of steps. Each step is one spoken paragraph (`say`) and the board ops drawn while it
 * is spoken (`ops`, the same language the live tutor uses, see ./ops.ts). `mark` starts a new chapter in
 * the player's chapter list; `cap` overrides the caption (defaults to `say`).
 *
 * Scripts are static JSON in /public/board-lessons/<id>.json, fetched only when a student opens the
 * player. Pure data + validation: safe on the server, in scripts and in the browser.
 */

import { cleanOp, type BoardOp } from "./ops";

export interface BoardStep {
  say: string;
  ops: BoardOp[];
  mark?: string;
  cap?: string;
}

export interface BoardScript {
  v: 1;
  id: string;
  title: string;
  subject: string;
  grade: string;
  chapter: string;
  lang: string;
  steps: BoardStep[];
}

/** Narration pace used for timing estimates (Kokoro and device voices speak ~150 words a minute). */
export const WPM = 150;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

/** Rough time a step takes at 1×: speech, or the drawing if that is longer, plus a short breath. */
export function stepMs(step: BoardStep): number {
  const speech = (words(step.say) / WPM) * 60_000;
  const draw = step.ops.reduce((n, o) => n + (o.op === "text" ? Math.min(2600, Math.max(450, o.text.length * 38)) : o.op === "plot" ? 1300 : o.op === "page" || o.op === "clear" ? 0 : 700), 0);
  return Math.max(speech, draw) + 500;
}

export const scriptMs = (s: BoardScript) => s.steps.reduce((n, st) => n + stepMs(st), 0);

export interface ScriptCheck {
  script: BoardScript | null;
  errors: string[];
  /** Total narrated words. */
  words: number;
}

/**
 * Validate an untrusted script (from the model or a file). Ops that fail the board schema are reported
 * and dropped; highlight/underline/laser targets must name an element drawn earlier on the same page.
 */
export function checkScript(raw: unknown): ScriptCheck {
  const errors: string[] = [];
  const r = (raw ?? {}) as Record<string, unknown>;
  const str = (k: string) => (typeof r[k] === "string" ? (r[k] as string).trim() : "");
  for (const k of ["id", "title", "subject", "grade", "chapter"]) if (!str(k)) errors.push(`missing "${k}"`);
  if (!Array.isArray(r.steps) || r.steps.length === 0) {
    errors.push("no steps");
    return { script: null, errors, words: 0 };
  }
  const steps: BoardStep[] = [];
  let onPage = new Set<string>();
  let total = 0;
  r.steps.forEach((rawStep, i) => {
    const s = (rawStep ?? {}) as Record<string, unknown>;
    const say = typeof s.say === "string" ? s.say.trim() : "";
    if (!say) errors.push(`step ${i + 1}: empty "say"`);
    total += words(say);
    const ops: BoardOp[] = [];
    (Array.isArray(s.ops) ? s.ops : []).forEach((rawOp, j) => {
      const op = cleanOp(rawOp);
      if (!op) return errors.push(`step ${i + 1} op ${j + 1}: invalid ${JSON.stringify(rawOp).slice(0, 80)}`);
      if (op.op === "page" || op.op === "clear") onPage = new Set();
      if ((op.op === "highlight" || op.op === "underline") && !onPage.has(op.target)) return errors.push(`step ${i + 1} op ${j + 1}: ${op.op} target "${op.target}" is not on this page`);
      if (op.op === "laser" && op.target && !onPage.has(op.target)) return errors.push(`step ${i + 1} op ${j + 1}: laser target "${op.target}" is not on this page`);
      if ((op.op === "plot" || op.op === "point") && !onPage.has(op.axes)) return errors.push(`step ${i + 1} op ${j + 1}: axes "${op.axes}" are not on this page`);
      if ("id" in op && typeof op.id === "string") onPage.add(op.id);
      ops.push(op);
    });
    if (say) steps.push({ say, ops, ...(typeof s.mark === "string" && s.mark.trim() ? { mark: s.mark.trim().slice(0, 60) } : {}), ...(typeof s.cap === "string" && s.cap.trim() ? { cap: s.cap.trim() } : {}) });
  });
  const script: BoardScript = { v: 1, id: str("id"), title: str("title"), subject: str("subject"), grade: str("grade"), chapter: str("chapter"), lang: str("lang") || "en", steps };
  return { script: steps.length ? script : null, errors, words: total };
}

/** Chapters for the player: each `mark` and the step it starts at (a script without marks is one chapter). */
export function scriptChapters(s: BoardScript): { title: string; from: number }[] {
  const out = s.steps.flatMap((st, i) => (st.mark ? [{ title: st.mark, from: i }] : []));
  return out.length && out[0].from === 0 ? out : [{ title: s.title, from: 0 }, ...out];
}

/** Turn `$…$` maths inside narration into words the voice can say ("$F = ma$" → "F = ma"). */
export const plainSay = (s: string) => s.replace(/\$([^$]+)\$/g, "$1").replace(/\\[a-z]+/gi, "").replace(/[{}]/g, "");
