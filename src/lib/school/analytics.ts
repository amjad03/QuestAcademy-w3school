/** Class and school analytics over student summaries. Pure functions. */
import { classFromSyllabus } from "@/content/my-class";
import type { Board } from "@/lib/modes";
import { weekKey } from "@/lib/gamification";
import { chapterId } from "./summary";
import type { Assignment, ClassRow, Submission, SummaryRow } from "./types";

export interface ChapterColumn {
  id: string;
  title: string;
  n: number;
}

export interface SubjectColumns {
  id: string;
  name: string;
  chapters: ChapterColumn[];
}

/** Heatmap columns: the class's syllabus chapters, else every chapter seen in the students' summaries. */
export function chapterColumns(cls: Pick<ClassRow, "board" | "grade">, summaries: Pick<SummaryRow, "summary">[]): SubjectColumns[] {
  const mc = cls.board && cls.grade ? classFromSyllabus(cls.board as Board, cls.grade) : null;
  if (mc) {
    return mc.subjects
      .map((s) => ({ id: s.id, name: s.name, chapters: s.chapters.filter((c) => c.lessonIds.length).map((c, i) => ({ id: chapterId(c, s.id), title: c.title, n: i + 1 })) }))
      .filter((s) => s.chapters.length);
  }
  const bySubject = new Map<string, Map<string, ChapterColumn>>();
  for (const row of summaries)
    for (const [id, c] of Object.entries(row.summary?.chapters ?? {})) {
      const m = bySubject.get(c.s) ?? new Map();
      if (!m.has(id)) m.set(id, { id, title: c.t, n: m.size + 1 });
      bySubject.set(c.s, m);
    }
  return [...bySubject].map(([name, m]) => ({ id: name, name, chapters: [...m.values()] }));
}

/** 0–1 level for a chapter cell, or null when untouched. */
export function cellLevel(c: { d: number; n: number; m: number; x?: number } | undefined): number | null {
  if (!c || (!c.d && c.x === undefined && !c.m)) return null;
  const mastery = c.m / 4;
  return c.x !== undefined ? (mastery + c.x) / 2 : Math.max(mastery, (c.d / Math.max(1, c.n)) * 0.5);
}

export interface RiskFlag {
  userId: string;
  name: string;
  reasons: string[];
  score: number;
}

/** Students who need attention, most urgent first. Reasons are short English phrases (UI translates keys). */
export function atRisk(summaries: SummaryRow[], assignments: Assignment[], submissions: Submission[], now = Date.now()): RiskFlag[] {
  const done = new Set(submissions.filter((s) => s.status === "done").map((s) => `${s.assignment_id}|${s.user_id}`));
  const overdue = assignments.filter((a) => a.due_at && new Date(a.due_at).getTime() < now);
  const week = weekKey();
  const out: RiskFlag[] = [];
  for (const s of summaries) {
    const reasons: string[] = [];
    let score = 0;
    const idle = s.last_active ? Math.floor((now - new Date(s.last_active).getTime()) / 86_400_000) : 99;
    if (idle >= 5) (reasons.push(`inactive:${idle >= 99 ? "never" : idle}`), (score += Math.min(4, idle / 3)));
    const minutes = s.week === week ? s.minutes_week : 0;
    if (idle < 5 && minutes < 30) (reasons.push("low-time"), (score += 1));
    if (s.accuracy !== null && s.accuracy < 0.5) (reasons.push(`accuracy:${Math.round(s.accuracy * 100)}`), (score += 2));
    if (s.mock_avg !== null && s.mock_avg < 0.35) (reasons.push(`mock:${Math.round(s.mock_avg * 100)}`), (score += 1.5));
    const missed = overdue.filter((a) => !done.has(`${a.id}|${s.user_id}`)).length;
    if (missed) (reasons.push(`overdue:${missed}`), (score += missed * 1.2));
    if (reasons.length) out.push({ userId: s.user_id, name: s.display_name, reasons, score });
  }
  return out.sort((a, b) => b.score - a.score);
}

export interface WeakArea {
  id: string;
  title: string;
  subject: string;
  students: number;
  avgLevel: number;
}

/** Topics most often weak across a group of students. */
export function weakAreas(summaries: Pick<SummaryRow, "summary">[], limit = 10): WeakArea[] {
  const m = new Map<string, WeakArea & { sum: number }>();
  for (const s of summaries)
    for (const w of s.summary?.weak ?? []) {
      const cur = m.get(w.id) ?? { id: w.id, title: w.title, subject: w.subject, students: 0, avgLevel: 0, sum: 0 };
      cur.students += 1;
      cur.sum += w.level;
      m.set(w.id, cur);
    }
  return [...m.values()]
    .map(({ sum, ...w }) => ({ ...w, avgLevel: sum / w.students }))
    .sort((a, b) => b.students - a.students || a.avgLevel - b.avgLevel)
    .slice(0, limit);
}

export const avg = (xs: (number | null | undefined)[]) => {
  const v = xs.filter((x): x is number => typeof x === "number" && !Number.isNaN(x));
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
};
