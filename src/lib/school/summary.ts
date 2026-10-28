/**
 * Per-student summary for teachers, principals and the weekly parent report.
 * Built on the device from the learner's progress (the same state that syncs
 * to `learner_state`) and saved to `student_summaries` on each cloud sync.
 * Pure: no Supabase, no React.
 */
import type { LearnerState } from "@/lib/store";
import type { Doubt } from "@/lib/notebook-store";
import type { ClassSubject } from "@/content/my-class";
import { dayKey, weekKey, type Counters } from "@/lib/gamification";
import type { ChapterStat, SummaryDoc, SummaryRow, TopicFlag } from "./types";

/** Estimated minutes for a day's activity (the app does not time every screen). */
export function minutesFor(c: Partial<Counters> | undefined): number {
  if (!c) return 0;
  const m = (c.lessons ?? 0) * 12 + (c.quizzes ?? 0) * 6 + (c.mockTests ?? 0) * 30 + (c.reviews ?? 0) * 2 + (c.flashcards ?? 0) * 0.3 + (c.games ?? 0) * 4 + (c.challenges ?? 0) * 8 + (c.codeRuns ?? 0) * 0.5;
  return Math.min(300, Math.round(m));
}

/** Chapter id used across the school layer: the syllabus id, or "u.<course>.<topic>" for course-based classes. */
export function chapterId(ch: { syllabus: { id: string } | null; unit: { course: string; topic: string } | null; slug: string }, subjectId: string) {
  return ch.syllabus ? ch.syllabus.id : ch.unit ? `u.${ch.unit.course}.${ch.unit.topic}` : `${subjectId}.${ch.slug}`;
}

/** Session URLs for a chapter id (see src/app/(focus)/session/chapter). */
export function chapterSessionHref(id: string, kind: "practice" | "test") {
  return `/session/chapter/${id.startsWith("u.") ? id : id.replace(/:/g, "_")}/${kind}`;
}

/** The assessment key the session player records for a chapter set. */
export function chapterCompletionKey(id: string, kind: "practice" | "test") {
  return `chapter:${id.startsWith("u.") ? id : id.replace(/:/g, "_")}:${kind}`;
}

const WEAK = 0.45;
const STRONG = 0.8;

export interface SummaryInput {
  state: LearnerState;
  subjects: ClassSubject[] | null;
  doubts: Doubt[];
  className?: string;
  now?: Date;
}

export function buildSummary({ state, subjects, doubts, className, now = new Date() }: SummaryInput): Omit<SummaryRow, "user_id" | "school_id" | "class_id"> {
  const chapters: Record<string, ChapterStat> = {};
  const subj: SummaryDoc["subjects"] = {};
  const flags: TopicFlag[] = [];
  let chaptersDone = 0;
  let chaptersTotal = 0;

  for (const s of subjects ?? []) {
    let mSum = 0;
    let mCount = 0;
    let done = 0;
    for (const ch of s.chapters) {
      if (!ch.lessonIds.length) continue;
      const id = chapterId(ch, s.id);
      const d = ch.lessonIds.filter((l) => state.lessons[l]).length;
      const levels = ch.lessonIds.map((l) => state.mastery[l] ?? 0);
      const m = levels.reduce<number>((a, b) => a + b, 0) / levels.length;
      const test = Math.max(state.assessments[chapterCompletionKey(id, "test")] ?? -1, state.assessments[chapterCompletionKey(id, "practice")] ?? -1);
      chapters[id] = { t: ch.title, s: s.name, d, n: ch.lessonIds.length, m: Math.round(m * 10) / 10, ...(test >= 0 ? { x: Math.round(test * 100) / 100 } : {}) };
      chaptersTotal += 1;
      if (d === ch.lessonIds.length) (chaptersDone += 1, (done += 1));
      mSum += m;
      mCount += 1;
      const touched = d > 0 || test >= 0 || levels.some((l) => l > 0);
      if (touched) {
        const level = test >= 0 ? (m / 4 + test) / 2 : m / 4;
        flags.push({ id, title: ch.title, subject: s.name, level: Math.round(level * 100) / 100 });
      }
    }
    if (mCount) subj[s.id] = { name: s.name, mastery: Math.round((mSum / mCount / 4) * 100) / 100, done, total: mCount };
  }

  const weak = flags.filter((f) => f.level < WEAK).sort((a, b) => a.level - b.level).slice(0, 8);
  const strong = flags.filter((f) => f.level >= STRONG).sort((a, b) => b.level - a.level).slice(0, 8);

  const mocks = [...state.mockResults]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 8)
    .map((r) => ({ title: r.title, date: r.date, pct: r.max ? Math.round((Math.max(0, r.score) / r.max) * 1000) / 1000 : 0, testId: r.testId }));
  const mockAvg = mocks.length ? mocks.reduce((a, b) => a + b.pct, 0) / mocks.length : null;

  const tutor = (state.profile.tutor?.sessions ?? []).map((x) => ({ at: x.at, text: x.topic ? `${x.topic}: ${x.summary}` : x.summary, source: "tutor" as const }));
  const notes = doubts.map((d) => ({ at: d.createdAt, text: [d.title, d.text].filter(Boolean).join(" — "), source: "notebook" as const }));
  const allDoubts = [...tutor, ...notes]
    .filter((d) => d.text)
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 12)
    .map((d) => ({ ...d, text: d.text.slice(0, 240) }));

  const recent = Object.entries(state.items)
    .filter(([k]) => !k.startsWith("sticker:") && !k.startsWith("game-best:") && !k.startsWith("streak-reward:"))
    .sort((a, b) => b[1].localeCompare(a[1]))
    .slice(0, 12)
    .map(([id, at]) => ({ id, at }));

  const days: Record<string, number> = {};
  const week = weekKey(now);
  let minutesWeek = 0;
  let minutesTotal = 0;
  for (const [day, v] of Object.entries(state.daily)) {
    const m = minutesFor(v.counters);
    minutesTotal += m;
    if (day >= week) minutesWeek += m;
  }
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const k = dayKey(d);
    days[k] = minutesFor(state.daily[k]?.counters);
  }

  const scores = Object.values(state.assessments).filter((n) => typeof n === "number");
  const accuracy = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null;
  const lastActive = [state.streak.lastDay, ...recent.map((r) => r.at.slice(0, 10))].filter(Boolean).sort().pop();

  return {
    display_name: state.profile.name || "Learner",
    week,
    weekly_xp: state.weekly.week === week ? state.weekly.xp : 0,
    xp: state.xp,
    streak: liveStreakOf(state, now),
    best_streak: state.streak.best,
    minutes_week: minutesWeek,
    minutes_total: minutesTotal,
    chapters_done: chaptersDone,
    chapters_total: chaptersTotal,
    mock_avg: mockAvg === null ? null : Math.round(mockAvg * 1000) / 1000,
    accuracy: accuracy === null ? null : Math.round(accuracy * 1000) / 1000,
    last_active: recent[0]?.at ?? (lastActive ? `${lastActive}T12:00:00.000Z` : null),
    summary: { chapters, subjects: subj, weak, strong, mocks, doubts: allDoubts, recent, days, className },
  };
}

function liveStreakOf(s: Pick<LearnerState, "streak">, now: Date) {
  if (!s.streak.lastDay) return 0;
  const gap = Math.round((new Date(dayKey(now)).getTime() - new Date(s.streak.lastDay).getTime()) / 86_400_000);
  if (gap <= 1) return s.streak.count;
  if (gap === 2 && s.streak.freezes > 0) return s.streak.count;
  return 0;
}
