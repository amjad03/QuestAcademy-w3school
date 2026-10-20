/**
 * Khan-style mastery. Each lesson is a "skill" with a level:
 *   0 Not started · 1 Attempted · 2 Familiar · 3 Proficient · 4 Mastered
 *
 * - Practice can lift a skill to Proficient (100%) or Familiar (≥70%).
 * - Unit quizzes lift up to Proficient; unit tests and the course challenge
 *   can lift to Mastered. A wrong answer there drops a level (never below Attempted).
 */

export type MasteryLevel = 0 | 1 | 2 | 3 | 4;

export const MASTERY = [
  { level: 0, name: "Not started", points: 0, color: "rgb(var(--line))" },
  { level: 1, name: "Attempted", points: 0, color: "#FFB800" },
  { level: 2, name: "Familiar", points: 50, color: "#FF8A00" },
  { level: 3, name: "Proficient", points: 80, color: "#2F6BFF" },
  { level: 4, name: "Mastered", points: 100, color: "#7C4DFF" },
] as const;

export type AssessmentKind = "practice" | "quiz" | "test" | "challenge";

export function afterPractice(level: MasteryLevel, correct: number, total: number): MasteryLevel {
  const pct = total ? correct / total : 0;
  const target: MasteryLevel = pct === 1 ? 3 : pct >= 0.7 ? 2 : 1;
  return Math.max(level, target) as MasteryLevel;
}

export function afterAssessmentAnswer(level: MasteryLevel, ok: boolean, kind: Exclude<AssessmentKind, "practice">): MasteryLevel {
  const cap: MasteryLevel = kind === "quiz" ? 3 : 4;
  if (ok) {
    if (level < 2) return 2;
    return Math.min(cap, Math.max(level, level + 1)) as MasteryLevel;
  }
  return Math.max(1, level - 1) as MasteryLevel;
}

export function masteryPoints(levels: (MasteryLevel | undefined)[]) {
  const earned = levels.reduce<number>((a, l) => a + MASTERY[l ?? 0].points, 0);
  const possible = levels.length * 100;
  return { earned, possible, pct: possible ? earned / possible : 0 };
}
