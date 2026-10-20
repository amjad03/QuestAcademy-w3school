import type { LearnerState } from "@/lib/store";
import { levelInfo } from "@/lib/gamification";

/** Measurable progress toward each badge (value / target). Time-of-day badges return null. */
export function badgeProgress(id: string, s: LearnerState): { value: number; target: number } | null {
  const t = s.totals;
  const map: Record<string, [number, number]> = {
    "first-steps": [t.lessons, 1],
    bookworm: [t.lessons, 10],
    scholar: [t.lessons, 50],
    "on-fire": [s.streak.best, 3],
    "week-warrior": [s.streak.best, 7],
    unstoppable: [s.streak.best, 30],
    "quiz-whiz": [t.perfectQuizzes, 1],
    sharpshooter: [t.correctAnswers, 100],
    flipper: [t.flashcards, 50],
    "hello-world": [t.codeRuns, 1],
    "code-ninja": [t.challenges, 5],
    "arena-ready": [t.mockTests, 1],
    "player-one": [t.games, 5],
    "memory-palace": [t.reviews, 25],
    globetrotter: [s.worldsVisited.length, 3],
    polymath: [s.subjectsStarted.length, 6],
    "level-10": [levelInfo(s.xp).level, 10],
    "xp-1000": [s.xp, 1000],
  };
  const m = map[id];
  return m ? { value: Math.min(m[0], m[1]), target: m[1] } : null;
}
