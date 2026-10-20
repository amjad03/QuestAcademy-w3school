/**
 * XP, levels, leagues, badges and daily quests. Pure functions only — the store
 * (src/lib/store.ts) owns state and calls into these.
 */

export const LEVEL_TITLES = [
  "Seedling",
  "Sprout",
  "Explorer",
  "Pathfinder",
  "Adventurer",
  "Scholar",
  "Sage",
  "Mastermind",
  "Luminary",
  "Legend",
];

/** XP needed to *reach* a level (level 1 = 0 XP). Gentle quadratic curve. */
export function xpForLevel(level: number) {
  const n = level - 1;
  return 40 * n * n + 60 * n;
}

export function levelInfo(xp: number) {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  const floor = xpForLevel(level);
  const ceil = xpForLevel(level + 1);
  return {
    level,
    title: LEVEL_TITLES[Math.min(LEVEL_TITLES.length - 1, Math.floor((level - 1) / 3))],
    into: xp - floor,
    needed: ceil - floor,
    progress: (xp - floor) / (ceil - floor),
  };
}

export const LEAGUES = [
  { id: "bronze", name: "Bronze", min: 0, color: "#C2773A" },
  { id: "silver", name: "Silver", min: 150, color: "#94A3B8" },
  { id: "gold", name: "Gold", min: 400, color: "#FFB800" },
  { id: "sapphire", name: "Sapphire", min: 800, color: "#2F6BFF" },
  { id: "ruby", name: "Ruby", min: 1400, color: "#E11D48" },
  { id: "amethyst", name: "Amethyst", min: 2200, color: "#7C4DFF" },
] as const;

export function leagueFor(weeklyXp: number) {
  let l: (typeof LEAGUES)[number] = LEAGUES[0];
  for (const x of LEAGUES) if (weeklyXp >= x.min) l = x;
  return l;
}

/* ------------------------------------------------------------------ */
/* Dates                                                               */
/* ------------------------------------------------------------------ */

export function dayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function daysBetween(a: string, b: string) {
  const da = new Date(a + "T00:00:00");
  const db = new Date(b + "T00:00:00");
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/** Monday-based week key, e.g. "2026-10-19". */
export function weekKey(d = new Date()) {
  const x = new Date(d);
  const dow = (x.getDay() + 6) % 7;
  x.setDate(x.getDate() - dow);
  return dayKey(x);
}

/* ------------------------------------------------------------------ */
/* Stats tracked for badges & quests                                   */
/* ------------------------------------------------------------------ */

export interface Counters {
  lessons: number;
  quizzes: number;
  perfectQuizzes: number;
  correctAnswers: number;
  flashcards: number;
  codeRuns: number;
  challenges: number;
  mockTests: number;
  games: number;
  reviews: number;
}

export const emptyCounters = (): Counters => ({
  lessons: 0,
  quizzes: 0,
  perfectQuizzes: 0,
  correctAnswers: 0,
  flashcards: 0,
  codeRuns: 0,
  challenges: 0,
  mockTests: 0,
  games: 0,
  reviews: 0,
});

export interface BadgeContext {
  totals: Counters;
  streak: number;
  xp: number;
  level: number;
  worldsVisited: number;
  subjectsStarted: number;
  hour: number;
}

export interface BadgeDef {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  test: (c: BadgeContext) => boolean;
}

export const BADGES: BadgeDef[] = [
  { id: "first-steps", name: "First Steps", icon: "footprints", color: "#2EBE70", description: "Complete your first lesson", test: (c) => c.totals.lessons >= 1 },
  { id: "bookworm", name: "Bookworm", icon: "book-open", color: "#2F6BFF", description: "Complete 10 lessons", test: (c) => c.totals.lessons >= 10 },
  { id: "scholar", name: "Scholar", icon: "graduation-cap", color: "#7C4DFF", description: "Complete 50 lessons", test: (c) => c.totals.lessons >= 50 },
  { id: "on-fire", name: "On Fire", icon: "flame", color: "#FF8A00", description: "Reach a 3-day streak", test: (c) => c.streak >= 3 },
  { id: "week-warrior", name: "Week Warrior", icon: "calendar-check", color: "#FF4B4B", description: "Reach a 7-day streak", test: (c) => c.streak >= 7 },
  { id: "unstoppable", name: "Unstoppable", icon: "rocket", color: "#E11D48", description: "Reach a 30-day streak", test: (c) => c.streak >= 30 },
  { id: "quiz-whiz", name: "Quiz Whiz", icon: "brain", color: "#EC4899", description: "Ace a quiz with 100%", test: (c) => c.totals.perfectQuizzes >= 1 },
  { id: "sharpshooter", name: "Sharpshooter", icon: "target", color: "#FF4B4B", description: "Answer 100 questions correctly", test: (c) => c.totals.correctAnswers >= 100 },
  { id: "flipper", name: "Card Shark", icon: "layers", color: "#14B8A6", description: "Flip 50 flashcards", test: (c) => c.totals.flashcards >= 50 },
  { id: "hello-world", name: "Hello, World", icon: "terminal", color: "#334155", description: "Run your first piece of code", test: (c) => c.totals.codeRuns >= 1 },
  { id: "code-ninja", name: "Code Ninja", icon: "code", color: "#1CB0F6", description: "Pass 5 coding challenges", test: (c) => c.totals.challenges >= 5 },
  { id: "arena-ready", name: "Arena Ready", icon: "shield", color: "#FFB800", description: "Finish a mock test", test: (c) => c.totals.mockTests >= 1 },
  { id: "player-one", name: "Player One", icon: "gamepad", color: "#7C4DFF", description: "Play 5 learning games", test: (c) => c.totals.games >= 5 },
  { id: "memory-palace", name: "Memory Palace", icon: "repeat", color: "#14B8A6", description: "Do 25 spaced reviews", test: (c) => c.totals.reviews >= 25 },
  { id: "globetrotter", name: "Globetrotter", icon: "globe", color: "#2EBE70", description: "Learn in 3 different categories", test: (c) => c.worldsVisited >= 3 },
  { id: "polymath", name: "Polymath", icon: "sparkles", color: "#7C4DFF", description: "Start 6 different courses", test: (c) => c.subjectsStarted >= 6 },
  { id: "night-owl", name: "Night Owl", icon: "moon", color: "#334155", description: "Learn after 10 pm", test: (c) => c.hour >= 22 || c.hour < 4 },
  { id: "early-bird", name: "Early Bird", icon: "sunrise", color: "#FFB800", description: "Learn before 7 am", test: (c) => c.hour >= 4 && c.hour < 7 },
  { id: "level-10", name: "Double Digits", icon: "crown", color: "#FFB800", description: "Reach level 10", test: (c) => c.level >= 10 },
  { id: "xp-1000", name: "Kilo-learner", icon: "zap", color: "#2F6BFF", description: "Earn 1,000 XP", test: (c) => c.xp >= 1000 },
];

/* ------------------------------------------------------------------ */
/* Daily quests                                                        */
/* ------------------------------------------------------------------ */

export type QuestMetric = keyof Counters | "xp";

export interface QuestDef {
  id: string;
  title: string;
  icon: string;
  metric: QuestMetric;
  target: number;
  coins: number;
}

const QUEST_POOL: QuestDef[] = [
  { id: "xp-30", title: "Earn 30 XP", icon: "zap", metric: "xp", target: 30, coins: 10 },
  { id: "xp-80", title: "Earn 80 XP", icon: "zap", metric: "xp", target: 80, coins: 20 },
  { id: "lessons-1", title: "Complete a lesson", icon: "book-open", metric: "lessons", target: 1, coins: 10 },
  { id: "lessons-3", title: "Complete 3 lessons", icon: "library", metric: "lessons", target: 3, coins: 25 },
  { id: "correct-5", title: "Get 5 answers right", icon: "circle-check", metric: "correctAnswers", target: 5, coins: 10 },
  { id: "correct-15", title: "Get 15 answers right", icon: "target", metric: "correctAnswers", target: 15, coins: 25 },
  { id: "cards-10", title: "Flip 10 flashcards", icon: "layers", metric: "flashcards", target: 10, coins: 10 },
  { id: "runs-3", title: "Run code 3 times", icon: "play", metric: "codeRuns", target: 3, coins: 10 },
  { id: "quiz-2", title: "Finish 2 quizzes", icon: "puzzle", metric: "quizzes", target: 2, coins: 15 },
  { id: "review-5", title: "Review 5 cards", icon: "repeat", metric: "reviews", target: 5, coins: 15 },
  { id: "games-2", title: "Play 2 games", icon: "gamepad", metric: "games", target: 2, coins: 10 },
];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Three deterministic quests per day, tuned to the learner's main world. */
export function questsForDay(day: string, primaryWorld?: string): QuestDef[] {
  const pool = QUEST_POOL.filter((q) => {
    if (q.metric === "games") return primaryWorld === "kids";
    if (q.metric === "codeRuns") return primaryWorld === "code" || primaryWorld === "campus";
    return true;
  });
  const picked: QuestDef[] = [];
  const used = new Set<string>();
  let seed = hash(day + (primaryWorld ?? ""));
  // Always include one XP quest so the daily goal and quests reinforce each other.
  const xpQuests = pool.filter((q) => q.metric === "xp");
  const first = xpQuests[seed % xpQuests.length];
  picked.push(first);
  used.add(first.metric);
  while (picked.length < 3) {
    seed = hash(String(seed));
    const q = pool[seed % pool.length];
    if (used.has(q.metric)) continue;
    used.add(q.metric);
    picked.push(q);
  }
  return picked;
}

/* ------------------------------------------------------------------ */
/* Spaced repetition (SM-2 lite)                                       */
/* ------------------------------------------------------------------ */

export interface CardState {
  /** Ease factor. */
  ef: number;
  /** Interval in days. */
  interval: number;
  reps: number;
  due: string;
}

/** grade: 0 = forgot, 1 = hard, 2 = good, 3 = easy */
export function reviewCard(prev: CardState | undefined, grade: 0 | 1 | 2 | 3, today = dayKey()): CardState {
  const s = prev ?? { ef: 2.5, interval: 0, reps: 0, due: today };
  let { ef, interval, reps } = s;
  if (grade === 0) {
    reps = 0;
    interval = 1;
  } else {
    reps += 1;
    if (reps === 1) interval = grade === 3 ? 3 : 1;
    else if (reps === 2) interval = grade === 1 ? 3 : 6;
    else interval = Math.round(interval * (grade === 1 ? 1.2 : ef) * (grade === 3 ? 1.3 : 1));
  }
  const q = [1, 3, 4, 5][grade];
  ef = Math.max(1.3, ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  const d = new Date(today + "T00:00:00");
  d.setDate(d.getDate() + interval);
  return { ef, interval, reps, due: dayKey(d) };
}

/* ------------------------------------------------------------------ */
/* Shop                                                                */
/* ------------------------------------------------------------------ */

/** Profile colours. The first five are free; the rest are unlocked in the shop. */
export const AVATARS = [
  { id: "blue", price: 0 },
  { id: "green", price: 0 },
  { id: "purple", price: 0 },
  { id: "orange", price: 0 },
  { id: "red", price: 0 },
  { id: "teal", price: 40 },
  { id: "pink", price: 40 },
  { id: "sky", price: 60 },
  { id: "navy", price: 80 },
  { id: "gold", price: 150 },
];

export const FRAMES = [
  { id: "none", name: "None", price: 0, color: "transparent" },
  { id: "leaf", name: "Leaf", price: 50, color: "#2EBE70" },
  { id: "flame", name: "Flame", price: 80, color: "#FF8A00" },
  { id: "royal", name: "Royal", price: 120, color: "#7C4DFF" },
  { id: "gold", name: "Gold", price: 250, color: "#FFB800" },
];

export const STREAK_FREEZE_PRICE = 50;
