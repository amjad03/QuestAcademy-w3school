/**
 * Personalisation engine: pure functions that turn the onboarding answers
 * (Profile.personal) and the learner's class into today's plan, a week-by-week
 * study plan to the exam (or a term plan) and the order of subjects and chapters.
 *
 * Nothing here touches the store or React, so every function can be unit-tested
 * with plain objects.
 */

export type GoalId = "pass" | "80" | "95" | "top";
export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";
export type StudyStyle = "video" | "reading" | "practice";

export interface DiagnosticResult {
  correct: number;
  total: number;
  /** 1 (needs a lot of help) … 5 (strong). */
  level: number;
  at: string;
}

/** Everything the onboarding asks beyond the basic profile. Every field is optional for older saves. */
export interface PersonalProfile {
  school?: string;
  city?: string;
  /** Target entrance / board exam: "BOARD", "JEE", "JEE_ADV", "NEET", "KCET", "COMEDK" or null. */
  targetExam?: string | null;
  /** ISO date (yyyy-mm-dd) of the exam. */
  examDate?: string | null;
  goal?: GoalId;
  /** Subject id → self-rating 1–5. */
  selfLevel?: Record<string, number>;
  /** Subject id → recent marks in percent. */
  marks?: Record<string, number>;
  dailyMinutes?: number;
  timeOfDay?: TimeOfDay;
  studyStyle?: StudyStyle;
  weakSubjects?: string[];
  /** Subject id → chapter slugs the learner finds hard. */
  weakChapters?: Record<string, string[]>;
  diagnostic?: Record<string, DiagnosticResult>;
  parentEmail?: string;
  parentPhone?: string;
  /** "HH:MM" local time for the daily nudge; empty = no reminder. */
  reminderTime?: string;
  /** Set when the learner has gone through the full flow once. */
  completedAt?: string | null;
}

/** The slice of a class subject the engine needs (ClassSubject fits). */
export interface PlanSubject {
  id: string;
  name: string;
  chapters: { slug: string; title: string; lessonIds: string[] }[];
}

/* ------------------------------------------------------------------ */
/* Levels and weights                                                  */
/* ------------------------------------------------------------------ */

/** Diagnostic score → level 1–5. */
export function levelFromScore(correct: number, total: number): number {
  if (!total) return 3;
  const r = correct / total;
  return r >= 0.9 ? 5 : r >= 0.7 ? 4 : r >= 0.5 ? 3 : r >= 0.3 ? 2 : 1;
}

/** Marks percent → level 1–5. */
export const levelFromMarks = (pct: number) => (pct >= 90 ? 5 : pct >= 75 ? 4 : pct >= 60 ? 3 : pct >= 40 ? 2 : 1);

/** Best estimate of a subject level: diagnostic beats marks beats self-rating; 3 when unknown. */
export function subjectLevel(p: PersonalProfile | null | undefined, subjectId: string): number {
  const d = p?.diagnostic?.[subjectId];
  if (d) return d.level;
  const m = p?.marks?.[subjectId];
  if (typeof m === "number") return levelFromMarks(m);
  return p?.selfLevel?.[subjectId] ?? 3;
}

/** The level a goal needs every subject to reach. */
const GOAL_TARGET: Record<GoalId, number> = { pass: 2.5, "80": 4, "95": 4.6, top: 5 };

/** How much attention a subject needs (higher = more). Always > 0. */
export function subjectWeight(p: PersonalProfile | null | undefined, subjectId: string): number {
  const level = subjectLevel(p, subjectId);
  const target = GOAL_TARGET[p?.goal ?? "80"];
  const gap = Math.max(0, target - level);
  const weak = p?.weakSubjects?.includes(subjectId) ? 1.5 : 0;
  return 1 + gap * 0.8 + weak;
}

/* ------------------------------------------------------------------ */
/* Home ordering                                                       */
/* ------------------------------------------------------------------ */

/** Subjects ordered by need (weak and low-level first); ties keep the class order. */
export function orderSubjects<S extends { id: string }>(subjects: S[], p: PersonalProfile | null | undefined): S[] {
  if (!p) return subjects;
  return subjects.map((s, i) => ({ s, i, w: subjectWeight(p, s.id) })).sort((a, b) => b.w - a.w || a.i - b.i).map((x) => x.s);
}

/** Chapters with the learner's weak ones first; the rest keep the board order. */
export function orderChapters<C extends { slug: string }>(subjectId: string, chapters: C[], p: PersonalProfile | null | undefined): C[] {
  const weak = p?.weakChapters?.[subjectId] ?? [];
  if (!weak.length) return chapters;
  return [...chapters.filter((c) => weak.includes(c.slug)), ...chapters.filter((c) => !weak.includes(c.slug))];
}

/* ------------------------------------------------------------------ */
/* Today's plan                                                        */
/* ------------------------------------------------------------------ */

export interface TodayItem {
  /** Stable for the day: `${date}:${kind}:${subject}:${chapter}[:lesson]`. */
  id: string;
  kind: "lesson" | "practice";
  subjectId: string;
  chapterSlug: string;
  chapterTitle: string;
  lessonId: string | null;
  minutes: number;
}

/** Minutes a lesson / practice block takes for each style (videos run longer, practice-first learners read less). */
const MINUTES: Record<StudyStyle, { lesson: number; practice: number }> = {
  video: { lesson: 12, practice: 8 },
  reading: { lesson: 10, practice: 8 },
  practice: { lesson: 8, practice: 10 },
};

export interface TodayInput {
  subjects: PlanSubject[];
  personal: PersonalProfile | null | undefined;
  /** Lessons finished before today (finished-today lessons stay in the plan, ticked). */
  completedBefore: Set<string>;
  date: string;
}

/** Next unfinished lessons of a subject, weak chapters first. */
function nextLessons(s: PlanSubject, p: PersonalProfile | null | undefined, done: Set<string>) {
  const out: { chapter: PlanSubject["chapters"][number]; lessonId: string }[] = [];
  for (const ch of orderChapters(s.id, s.chapters, p)) for (const id of ch.lessonIds) if (!done.has(id)) out.push({ chapter: ch, lessonId: id });
  return out;
}

/**
 * Today's plan: lessons and practice that fit the daily minutes, with more slots for
 * weak / low-level subjects. Practice-first learners get a practice block per lesson;
 * others get one practice block for every two lessons.
 */
export function buildTodayPlan({ subjects, personal: p, completedBefore, date }: TodayInput): TodayItem[] {
  const budget = Math.max(5, p?.dailyMinutes ?? 20);
  const style = p?.studyStyle ?? "video";
  const m = MINUTES[style];
  const queues = new Map(subjects.map((s) => [s.id, nextLessons(s, p, completedBefore)]));
  const ordered = orderSubjects(subjects.filter((s) => queues.get(s.id)!.length), p);
  if (!ordered.length) return [];
  // Weighted round-robin: each pass a subject earns credit equal to its weight and spends 1 per slot.
  const credit = new Map(ordered.map((s) => [s.id, 0]));
  const items: TodayItem[] = [];
  let used = 0;
  let lessons = 0;
  for (let guard = 0; guard < 50 && used + Math.min(m.lesson, m.practice) <= budget; guard++) {
    for (const s of ordered) credit.set(s.id, credit.get(s.id)! + subjectWeight(p, s.id));
    const pick = [...ordered].filter((s) => queues.get(s.id)!.length).sort((a, b) => credit.get(b.id)! - credit.get(a.id)!)[0];
    if (!pick) break;
    const q = queues.get(pick.id)!;
    const next = q[0];
    const practiceFirst = style === "practice" || subjectLevel(p, pick.id) <= 2;
    const wantPractice = practiceFirst ? lessons > 0 && items[items.length - 1]?.kind === "lesson" : lessons > 0 && lessons % 2 === 0 && items[items.length - 1]?.kind === "lesson";
    if (wantPractice && used + m.practice <= budget) {
      const last = items[items.length - 1];
      items.push({ id: `${date}:practice:${last.subjectId}:${last.chapterSlug}`, kind: "practice", subjectId: last.subjectId, chapterSlug: last.chapterSlug, chapterTitle: last.chapterTitle, lessonId: null, minutes: m.practice });
      used += m.practice;
      continue;
    }
    if (used + m.lesson > budget) break;
    credit.set(pick.id, credit.get(pick.id)! - ordered.reduce((n, s) => n + subjectWeight(p, s.id), 0));
    q.shift();
    items.push({ id: `${date}:lesson:${pick.id}:${next.chapter.slug}:${next.lessonId}`, kind: "lesson", subjectId: pick.id, chapterSlug: next.chapter.slug, chapterTitle: next.chapter.title, lessonId: next.lessonId, minutes: m.lesson });
    used += m.lesson;
    lessons++;
  }
  // Short budgets: at least one thing to do.
  if (!items.length) {
    const s = ordered[0];
    const n = queues.get(s.id)![0];
    items.push({ id: `${date}:lesson:${s.id}:${n.chapter.slug}:${n.lessonId}`, kind: "lesson", subjectId: s.id, chapterSlug: n.chapter.slug, chapterTitle: n.chapter.title, lessonId: n.lessonId, minutes: Math.min(budget, m.lesson) });
  }
  return items;
}

/** Whether a plan item is done: its lesson finished, or ticked by hand. */
export function itemDone(item: TodayItem, lessonsDone: Record<string, unknown>, ticked: Record<string, string>) {
  return Boolean(ticked[item.id] || (item.lessonId && lessonsDone[item.lessonId]));
}

/* ------------------------------------------------------------------ */
/* Study plan                                                          */
/* ------------------------------------------------------------------ */

export interface PlanWeek {
  index: number;
  /** yyyy-mm-dd of the week's first day. */
  start: string;
  kind: "learn" | "revise" | "mock";
  chapters: { subjectId: string; slug: string; title: string }[];
}

export interface StudyPlanResult {
  weeks: PlanWeek[];
  /** "exam" when built to an exam date, "term" otherwise. */
  basis: "exam" | "term";
  /** Chapters that did not fit before the exam (ask for more minutes). */
  overflow: number;
}

const DAY = 86400000;
const iso = (d: Date) => d.toISOString().slice(0, 10);
const TERM_WEEKS = 16;

/** Chapters a learner can cover in a week at their daily minutes (a chapter ≈ 90 minutes of study). */
export function chaptersPerWeek(dailyMinutes: number) {
  return Math.max(1, Math.round((dailyMinutes * 6) / 90));
}

/**
 * Week-by-week plan: unfinished chapters spread over learn weeks, weak subjects interleaved
 * more often, then revision weeks and mock-test weeks just before the exam. Without an exam
 * date it plans one term (16 weeks) with a revision week and a mock week at the end.
 */
export function buildStudyPlan(input: { subjects: PlanSubject[]; personal: PersonalProfile | null | undefined; lessonsDone: Record<string, unknown>; today: string }): StudyPlanResult {
  const { subjects, personal: p, lessonsDone, today } = input;
  const start = new Date(`${today}T00:00:00Z`);
  const exam = p?.examDate ? new Date(`${p.examDate}T00:00:00Z`) : null;
  const basis: StudyPlanResult["basis"] = exam && exam.getTime() > start.getTime() + 7 * DAY ? "exam" : "term";
  const total = basis === "exam" ? Math.max(2, Math.ceil((exam!.getTime() - start.getTime()) / (7 * DAY))) : TERM_WEEKS;
  const mocks = total >= 8 ? 2 : 1;
  const revise = total >= 12 ? Math.max(1, Math.round(total * 0.15)) : total >= 4 ? 1 : 0;
  const learn = Math.max(1, total - mocks - revise);

  // Per-subject queue of unfinished chapters, weak chapters first.
  const queues = orderSubjects(subjects, p).map((s) => ({
    id: s.id,
    w: subjectWeight(p, s.id),
    credit: 0,
    q: orderChapters(s.id, s.chapters, p).filter((c) => c.lessonIds.length && !c.lessonIds.every((id) => lessonsDone[id])),
  }));
  // Spread evenly when there is spare time; never more than the learner's weekly capacity.
  const remaining = queues.reduce((n, x) => n + x.q.length, 0);
  const perWeek = Math.max(1, Math.min(chaptersPerWeek(p?.dailyMinutes ?? 20), Math.ceil(remaining / learn)));
  const weeks: PlanWeek[] = [];
  const at = (i: number) => iso(new Date(start.getTime() + i * 7 * DAY));
  for (let i = 0; i < learn; i++) {
    const chapters: PlanWeek["chapters"] = [];
    while (chapters.length < perWeek && queues.some((x) => x.q.length)) {
      for (const x of queues) if (x.q.length) x.credit += x.w;
      const pick = queues.filter((x) => x.q.length).sort((a, b) => b.credit - a.credit)[0];
      pick.credit -= queues.filter((x) => x.q.length).reduce((n, x) => n + x.w, 0);
      const c = pick.q.shift()!;
      chapters.push({ subjectId: pick.id, slug: c.slug, title: c.title });
    }
    weeks.push({ index: i, start: at(i), kind: "learn", chapters });
  }
  const overflow = queues.reduce((n, x) => n + x.q.length, 0);
  // Revision weeks revisit the weakest subjects' planned chapters first.
  const planned = weeks.flatMap((w) => w.chapters);
  const reviseOrder = [...planned].sort((a, b) => subjectWeight(p, b.subjectId) - subjectWeight(p, a.subjectId));
  const per = Math.ceil(reviseOrder.length / Math.max(1, revise));
  for (let r = 0; r < revise; r++) weeks.push({ index: weeks.length, start: at(weeks.length), kind: "revise", chapters: reviseOrder.slice(r * per, (r + 1) * per) });
  for (let k = 0; k < mocks; k++) weeks.push({ index: weeks.length, start: at(weeks.length), kind: "mock", chapters: [] });
  return { weeks, basis, overflow };
}

/** The week of the plan that contains `today`. */
export function currentWeek(plan: StudyPlanResult, today: string): PlanWeek | null {
  let hit: PlanWeek | null = null;
  for (const w of plan.weeks) if (w.start <= today) hit = w;
  return hit;
}

/* ------------------------------------------------------------------ */
/* Reminders                                                           */
/* ------------------------------------------------------------------ */

/** Whether the in-app nudge should show: a reminder time is set, it has passed, and today's plan is not done. */
export function reminderDue(reminderTime: string | undefined, now: Date, planDone: boolean): boolean {
  if (!reminderTime || planDone) return false;
  const m = /^(\d{1,2}):(\d{2})$/.exec(reminderTime);
  if (!m) return false;
  return now.getHours() * 60 + now.getMinutes() >= Number(m[1]) * 60 + Number(m[2]);
}

/** Daily-goal XP that matches a number of daily minutes (keeps the existing goal ring meaningful). */
export function goalXpForMinutes(minutes: number) {
  return minutes <= 5 ? 20 : minutes <= 15 ? 50 : minutes <= 30 ? 100 : 200;
}

/** Classes LKG–5: the short, parent-facing flow. */
export const isYoungLevel = (level: string | null | undefined) => level === "pre" || (!!level && /^[1-5]$/.test(level));

/** Classes 9–12 and entrance-exam aspirants get the exam questions. */
export const hasExamStep = (level: string | null | undefined) => level === "exam" || (!!level && /^(9|10|11|12)$/.test(level));
