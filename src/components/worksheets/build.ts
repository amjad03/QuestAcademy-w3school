import { subjects } from "@/content";
import { worlds } from "@/content/worlds";
import type { Question, Subject, Topic, WorldMeta } from "@/content/types";
import { plain, truncateMd } from "@/components/Md";
import { LETTERS, MIN_QUESTIONS, worksheetHref } from "./options";

export interface PoolItem {
  q: Question;
  lesson: string;
}

/** Every quiz and checkpoint question in a unit, in lesson order. */
export function topicPool(topic: Topic): PoolItem[] {
  const out: PoolItem[] = [];
  for (const lesson of topic.lessons) {
    for (const b of lesson.blocks) {
      if (b.type === "checkpoint") for (const q of b.questions) out.push({ q, lesson: lesson.title });
    }
    for (const q of lesson.quiz ?? []) out.push({ q, lesson: lesson.title });
  }
  return out;
}

/* ---------------- deterministic shuffle (mulberry32) ---------------- */

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Seed 0 keeps the original order; any positive seed gives the same order on every render. */
export function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = items.slice();
  if (seed <= 0) return out;
  const rand = mulberry32(seed * 7919 + 17);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ---------------- catalogue ---------------- */

export interface PrintableTopic {
  subject: Subject;
  topic: Topic;
  count: number;
  href: string;
}

export const printableTopics: PrintableTopic[] = subjects.flatMap((subject) =>
  subject.topics
    .map((topic) => ({ subject, topic, count: topicPool(topic).length, href: worksheetHref(subject.slug, topic.slug) }))
    .filter((t) => t.count >= MIN_QUESTIONS),
);

export interface PrintableCourse {
  subject: Subject;
  units: PrintableTopic[];
  questions: number;
}

export interface PrintableWorld {
  world: WorldMeta;
  courses: PrintableCourse[];
  units: number;
  questions: number;
}

export function printableByWorld(): PrintableWorld[] {
  return worlds
    .map((world) => {
      const courses = subjects
        .filter((s) => s.world === world.id)
        .map((subject) => {
          const units = printableTopics.filter((t) => t.subject.slug === subject.slug);
          return { subject, units, questions: units.reduce((n, u) => n + u.count, 0) };
        })
        .filter((c) => c.units.length > 0);
      return {
        world,
        courses,
        units: courses.reduce((n, c) => n + c.units.length, 0),
        questions: courses.reduce((n, c) => n + c.questions, 0),
      };
    })
    .filter((w) => w.courses.length > 0);
}

export function findPrintable(subject: string, topic: string) {
  return printableTopics.find((t) => t.subject.slug === subject && t.topic.slug === topic);
}

/* ---------------- a single worksheet ---------------- */

export interface WorksheetItem {
  n: number;
  q: Question;
  lesson: string;
  /** For "order" questions: the items in the (shuffled) order printed on the sheet. */
  shown?: string[];
  /** Plain-text answer for the key. */
  answer: string;
  /** One-line explanation, when the question has one. */
  explain?: string;
}

const letter = (i: number) => LETTERS[i] ?? String(i + 1);

function answerFor(q: Question, shown?: string[]): string {
  switch (q.kind) {
    case "mcq":
      return `(${letter(q.answer)}) ${plain(q.options[q.answer] ?? "")}`;
    case "multi":
      return q.answers.map((i) => `(${letter(i)}) ${plain(q.options[i] ?? "")}`).join("; ");
    case "truefalse":
      return q.answer ? "True" : "False";
    case "numeric":
      return `${q.answer}${q.unit ? ` ${q.unit}` : ""}${q.tolerance ? ` (accept ±${q.tolerance})` : ""}`;
    case "fill": {
      const [first, ...rest] = q.answer;
      return rest.length ? `${first} (also accepted: ${rest.join(", ")})` : first ?? "";
    }
    case "order": {
      const order = shown ?? q.items;
      return q.items.map((it) => `(${letter(order.indexOf(it))})`).join(" → ") + `  —  ${q.items.map(plain).join(" → ")}`;
    }
  }
}

function oneLine(md: string | undefined) {
  if (!md) return undefined;
  const first = md.split(/\n\s*\n/)[0].replace(/\s*\n\s*/g, " ").trim();
  return first ? truncateMd(first, 180) : undefined;
}

export function buildWorksheet(topic: Topic, count: number, seed: number) {
  const pool = topicPool(topic);
  const picked = seededShuffle(pool, seed).slice(0, Math.min(count, pool.length));
  const items: WorksheetItem[] = picked.map((p, i) => {
    const shown = p.q.kind === "order" ? seededShuffle(p.q.items, seed * 31 + i + 1) : undefined;
    return { n: i + 1, q: p.q, lesson: p.lesson, shown, answer: answerFor(p.q, shown), explain: oneLine(p.q.explain) };
  });
  const kinds = new Map<Question["kind"], number>();
  for (const p of pool) kinds.set(p.q.kind, (kinds.get(p.q.kind) ?? 0) + 1);
  return { items, pool: pool.length, kinds };
}

export const KIND_LABEL: Record<Question["kind"], string> = {
  mcq: "Multiple choice",
  multi: "Select all",
  truefalse: "True or false",
  numeric: "Numeric",
  fill: "Fill in the blank",
  order: "Put in order",
};
