import { BADGES } from "@/lib/gamification";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { getLessonById, getSubject } from "@/content/index";
import type { LearnerState } from "@/lib/store";

export type InsightState = Pick<LearnerState, "items" | "lessons" | "assessments" | "mastery" | "badges" | "streak" | "totals" | "xp" | "pathways" | "profile">;

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

const pad = (n: number) => String(n).padStart(2, "0");
export const localKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Every dated learning event (items + lesson completions), newest last. */
export function events(s: InsightState): Date[] {
  const out: Date[] = [];
  for (const iso of Object.values(s.items)) {
    const d = new Date(iso);
    if (!Number.isNaN(d.getTime())) out.push(d);
  }
  for (const p of Object.values(s.lessons)) {
    const d = new Date(p.completedAt);
    if (!Number.isNaN(d.getTime())) out.push(d);
  }
  return out.sort((a, b) => a.getTime() - b.getTime());
}

/* ------------------------------------------------------------------ */
/* Heatmap                                                             */
/* ------------------------------------------------------------------ */

export interface HeatCell {
  key: string;
  date: Date;
  count: number;
  /** 0 = none … 4 = most. */
  level: 0 | 1 | 2 | 3 | 4;
  future: boolean;
}

export interface Heatmap {
  weeks: HeatCell[][];
  /** Column index → short month label (only where a month begins). */
  months: { col: number; label: string }[];
  activeDays: number;
  total: number;
  max: number;
}

export function heatmap(s: InsightState, weeks = 12, today = new Date()): Heatmap {
  const counts = new Map<string, number>();
  for (const d of events(s)) {
    const k = localKey(d);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  // Start on the Sunday that begins the window so every column is a full week.
  const start = new Date(end);
  start.setDate(end.getDate() - ((weeks - 1) * 7 + end.getDay()));
  const max = Math.max(0, ...counts.values());
  const grid: HeatCell[][] = [];
  const months: Heatmap["months"] = [];
  let activeDays = 0;
  let total = 0;
  let lastMonth = -1;
  for (let w = 0; w < weeks; w++) {
    const col: HeatCell[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);
      const key = localKey(date);
      const count = counts.get(key) ?? 0;
      const future = date > end;
      if (count > 0 && !future) {
        activeDays++;
        total += count;
      }
      const level = (count === 0 ? 0 : Math.min(4, Math.max(1, Math.ceil((count / max) * 4)))) as HeatCell["level"];
      col.push({ key, date, count, level, future });
      if (d === 0 && date.getMonth() !== lastMonth) {
        lastMonth = date.getMonth();
        months.push({ col: w, label: date.toLocaleDateString(undefined, { month: "short" }) });
      }
    }
    grid.push(col);
  }
  // Drop a month label that would collide with the one right after it.
  const spaced = months.filter((m, i) => i === 0 || m.col - months[i - 1].col >= 2);
  return { weeks: grid, months: spaced, activeDays, total, max };
}

/* ------------------------------------------------------------------ */
/* Per-subject accuracy + mastery                                      */
/* ------------------------------------------------------------------ */

export interface SubjectInsight {
  slug: string;
  title: string;
  color: string;
  /** Mean assessment score (0–1) or null when none. */
  accuracy: number | null;
  assessments: number;
  /** Mean mastery points (0–1) across lessons touched, or null. */
  mastery: number | null;
  lessonsTouched: number;
}

const titleCase = (slug: string) => slug.replace(/-/g, " ").replace(/^\w/, (m) => m.toUpperCase());

export function subjectInsights(s: InsightState): SubjectInsight[] {
  const bySubject = new Map<string, { scores: number[]; levels: MasteryLevel[] }>();
  const bucket = (slug: string) => {
    let b = bySubject.get(slug);
    if (!b) {
      b = { scores: [], levels: [] };
      bySubject.set(slug, b);
    }
    return b;
  };
  for (const [key, score] of Object.entries(s.assessments)) {
    const slug = key.split("/")[0];
    if (slug) bucket(slug).scores.push(score);
  }
  const touched = new Set([...Object.keys(s.mastery), ...Object.keys(s.lessons)]);
  for (const id of touched) {
    const slug = id.split("/")[0];
    if (!slug || id.split("/").length < 3) continue;
    const level = (s.mastery[id] ?? (s.lessons[id] ? 1 : 0)) as MasteryLevel;
    bucket(slug).levels.push(level);
  }
  const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
  return [...bySubject.entries()]
    .map(([slug, b]) => {
      const subject = getSubject(slug);
      return {
        slug,
        title: subject?.title ?? titleCase(slug),
        color: subject?.colors[0] ?? "rgb(var(--accent))",
        accuracy: mean(b.scores),
        assessments: b.scores.length,
        mastery: mean(b.levels.map((l) => MASTERY[l].points / 100)),
        lessonsTouched: b.levels.length,
      };
    })
    .sort((a, b) => (b.assessments - a.assessments) || (b.lessonsTouched - a.lessonsTouched));
}

/* ------------------------------------------------------------------ */
/* When do you learn?                                                  */
/* ------------------------------------------------------------------ */

export interface Pattern {
  /** null when there is not enough data. */
  sentence: string | null;
  slot: "mornings" | "afternoons" | "evenings" | "late nights" | null;
  days: "weekday" | "weekend" | null;
  sample: number;
}

export function pattern(s: InsightState, friendly = false): Pattern {
  const ev = events(s);
  if (ev.length < 3) return { sentence: null, slot: null, days: null, sample: ev.length };
  const slots = { mornings: 0, afternoons: 0, evenings: 0, "late nights": 0 };
  let weekday = 0;
  let weekend = 0;
  for (const d of ev) {
    const h = d.getHours();
    if (h >= 5 && h < 12) slots.mornings++;
    else if (h < 17) slots.afternoons++;
    else if (h < 22) slots.evenings++;
    else slots["late nights"]++;
    const day = d.getDay();
    if (day === 0 || day === 6) weekend++;
    else weekday++;
  }
  const slot = (Object.entries(slots) as [Pattern["slot"] & string, number][]).sort((a, b) => b[1] - a[1])[0][0];
  // Weekend share above its 2/7 base rate counts as a weekend learner.
  const days: Pattern["days"] = weekend / ev.length > 2 / 7 + 0.1 ? "weekend" : "weekday";
  const sentence = friendly ? `You do most of your learning on ${days} ${slot}.` : `You learn most on ${days} ${slot}.`;
  return { sentence, slot, days, sample: ev.length };
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export interface SkillRow {
  id: string;
  title: string;
  subject: string;
  href: string;
  level: MasteryLevel;
  levelName: string;
  color: string;
  /** Practice score (0–1) if any. */
  practice: number | null;
}

export function skills(s: InsightState): { strongest: SkillRow[]; weakest: SkillRow[] } {
  const ids = new Set([...Object.keys(s.mastery), ...Object.keys(s.lessons)]);
  const rows: SkillRow[] = [];
  for (const id of ids) {
    const ref = getLessonById(id);
    if (!ref) continue;
    const level = (s.mastery[id] ?? (s.lessons[id] ? 1 : 0)) as MasteryLevel;
    if (level === 0) continue;
    const practice = s.assessments[`${id}:practice`];
    rows.push({
      id,
      title: ref.lesson.title,
      subject: ref.subject.title,
      href: ref.href,
      level,
      levelName: MASTERY[level].name,
      color: MASTERY[level].color,
      practice: practice === undefined ? null : practice,
    });
  }
  const score = (r: SkillRow) => r.level + (r.practice ?? 0);
  const sorted = [...rows].sort((a, b) => score(b) - score(a));
  const strongest = sorted.filter((r) => r.level >= 3).slice(0, 4);
  const weakest = [...sorted].reverse().filter((r) => r.level <= 2 && !strongest.includes(r)).slice(0, 4);
  return { strongest, weakest };
}

/* ------------------------------------------------------------------ */
/* Milestones                                                          */
/* ------------------------------------------------------------------ */

export interface Milestone {
  id: string;
  title: string;
  detail: string;
  date: Date | null;
  kind: "lesson" | "test" | "badge" | "certificate" | "streak";
}

export function milestones(s: InsightState): Milestone[] {
  const out: Milestone[] = [];
  const lessons = Object.entries(s.lessons).sort((a, b) => a[1].completedAt.localeCompare(b[1].completedAt));
  if (lessons[0]) {
    const ref = getLessonById(lessons[0][0]);
    out.push({ id: "first-lesson", kind: "lesson", title: "First lesson completed", detail: ref ? `${ref.lesson.title} · ${ref.subject.title}` : lessons[0][0], date: new Date(lessons[0][1].completedAt) });
  }
  // Unit tests are keyed "<subject>/<unit>:test"; the dated item (if any) shares the key.
  const tests = Object.keys(s.assessments).filter((k) => k.endsWith(":test"));
  if (tests[0]) {
    const dated = tests.map((k) => s.items[k]).filter(Boolean).sort();
    const [subject, unit] = tests[0].replace(/:test$/, "").split("/");
    out.push({ id: "first-test", kind: "test", title: "First unit test", detail: `${getSubject(subject)?.title ?? titleCase(subject)} · ${titleCase(unit ?? "")} · ${Math.round(s.assessments[tests[0]] * 100)}%`, date: dated[0] ? new Date(dated[0]) : null });
  }
  for (const [id, iso] of Object.entries(s.badges)) {
    const def = BADGES.find((b) => b.id === id);
    out.push({ id: `badge-${id}`, kind: "badge", title: def?.name ?? titleCase(id), detail: def?.description ?? "Badge earned", date: new Date(iso) });
  }
  for (const [pathway, c] of Object.entries(s.pathways.certificates)) {
    out.push({ id: `cert-${pathway}`, kind: "certificate", title: "Certificate issued", detail: `${titleCase(pathway)} · ${c.code}`, date: new Date(c.issuedAt) });
  }
  if (s.streak.best >= 2) {
    out.push({ id: "streak-best", kind: "streak", title: `Best streak: ${s.streak.best} days`, detail: s.streak.count >= s.streak.best ? "Still going" : `Current streak ${s.streak.count}`, date: null });
  }
  return out.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.getTime() - a.date.getTime();
  });
}

/* ------------------------------------------------------------------ */
/* Plain-text summary                                                  */
/* ------------------------------------------------------------------ */

export function summaryText(s: InsightState, friendly = false): string {
  const h = heatmap(s);
  const subs = subjectInsights(s).filter((x) => x.accuracy !== null);
  const pat = pattern(s, friendly);
  const sk = skills(s);
  const name = s.profile.name?.trim() || "Learner";
  const lines = [
    `${name} — Quest Academy progress (${new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })})`,
    `Lessons completed: ${Object.keys(s.lessons).length} · XP: ${s.xp} · Streak: ${s.streak.count} days (best ${s.streak.best})`,
    `Active days in the last 12 weeks: ${h.activeDays} (${h.total} learning items)`,
  ];
  if (subs.length) lines.push(`Accuracy: ${subs.map((x) => `${x.title} ${Math.round((x.accuracy ?? 0) * 100)}%`).join(", ")}`);
  if (pat.sentence) lines.push(pat.sentence);
  if (sk.strongest.length) lines.push(`Strongest: ${sk.strongest.map((r) => r.title).join(", ")}`);
  if (sk.weakest.length) lines.push(`To practise: ${sk.weakest.map((r) => r.title).join(", ")}`);
  const badges = Object.keys(s.badges).length;
  const certs = Object.keys(s.pathways.certificates).length;
  if (badges || certs) lines.push(`Badges: ${badges}${certs ? ` · Certificates: ${certs}` : ""}`);
  return lines.join("\n");
}
