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
  { id: "bronze", name: "Bronze", emoji: "🥉", min: 0, color: "#c2773a" },
  { id: "silver", name: "Silver", emoji: "🥈", min: 150, color: "#94a3b8" },
  { id: "gold", name: "Gold", emoji: "🥇", min: 400, color: "#eab308" },
  { id: "sapphire", name: "Sapphire", emoji: "💎", min: 800, color: "#3b82f6" },
  { id: "ruby", name: "Ruby", emoji: "❤️‍🔥", min: 1400, color: "#e11d48" },
  { id: "diamond", name: "Diamond", emoji: "👑", min: 2200, color: "#a855f7" },
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
  emoji: string;
  description: string;
  test: (c: BadgeContext) => boolean;
}

export const BADGES: BadgeDef[] = [
  { id: "first-steps", name: "First Steps", emoji: "👣", description: "Complete your first lesson", test: (c) => c.totals.lessons >= 1 },
  { id: "bookworm", name: "Bookworm", emoji: "🐛", description: "Complete 10 lessons", test: (c) => c.totals.lessons >= 10 },
  { id: "scholar", name: "Scholar", emoji: "🎓", description: "Complete 50 lessons", test: (c) => c.totals.lessons >= 50 },
  { id: "on-fire", name: "On Fire", emoji: "🔥", description: "Reach a 3-day streak", test: (c) => c.streak >= 3 },
  { id: "week-warrior", name: "Week Warrior", emoji: "⚔️", description: "Reach a 7-day streak", test: (c) => c.streak >= 7 },
  { id: "unstoppable", name: "Unstoppable", emoji: "🌋", description: "Reach a 30-day streak", test: (c) => c.streak >= 30 },
  { id: "quiz-whiz", name: "Quiz Whiz", emoji: "🧠", description: "Ace a quiz with 100%", test: (c) => c.totals.perfectQuizzes >= 1 },
  { id: "sharpshooter", name: "Sharpshooter", emoji: "🎯", description: "Answer 100 questions correctly", test: (c) => c.totals.correctAnswers >= 100 },
  { id: "flipper", name: "Card Shark", emoji: "🃏", description: "Flip 50 flashcards", test: (c) => c.totals.flashcards >= 50 },
  { id: "hello-world", name: "Hello, World", emoji: "👋", description: "Run your first piece of code", test: (c) => c.totals.codeRuns >= 1 },
  { id: "code-ninja", name: "Code Ninja", emoji: "🥷", description: "Pass 5 coding challenges", test: (c) => c.totals.challenges >= 5 },
  { id: "arena-ready", name: "Arena Ready", emoji: "🛡️", description: "Finish a full mock test", test: (c) => c.totals.mockTests >= 1 },
  { id: "player-one", name: "Player One", emoji: "🎮", description: "Play 5 Wonder Woods games", test: (c) => c.totals.games >= 5 },
  { id: "memory-palace", name: "Memory Palace", emoji: "🏰", description: "Do 25 spaced-repetition reviews", test: (c) => c.totals.reviews >= 25 },
  { id: "globetrotter", name: "Globetrotter", emoji: "🌍", description: "Learn in 3 different worlds", test: (c) => c.worldsVisited >= 3 },
  { id: "polymath", name: "Polymath", emoji: "🦉", description: "Start 6 different subjects", test: (c) => c.subjectsStarted >= 6 },
  { id: "night-owl", name: "Night Owl", emoji: "🌙", description: "Learn after 10 pm", test: (c) => c.hour >= 22 || c.hour < 4 },
  { id: "early-bird", name: "Early Bird", emoji: "🐦", description: "Learn before 7 am", test: (c) => c.hour >= 4 && c.hour < 7 },
  { id: "level-10", name: "Double Digits", emoji: "🔟", description: "Reach level 10", test: (c) => c.level >= 10 },
  { id: "xp-1000", name: "Kilo-learner", emoji: "⚡", description: "Earn 1,000 XP", test: (c) => c.xp >= 1000 },
];

/* ------------------------------------------------------------------ */
/* Daily quests                                                        */
/* ------------------------------------------------------------------ */

export type QuestMetric = keyof Counters | "xp";

export interface QuestDef {
  id: string;
  title: string;
  emoji: string;
  metric: QuestMetric;
  target: number;
  coins: number;
}

const QUEST_POOL: QuestDef[] = [
  { id: "xp-30", title: "Earn 30 XP", emoji: "⚡", metric: "xp", target: 30, coins: 10 },
  { id: "xp-80", title: "Earn 80 XP", emoji: "⚡", metric: "xp", target: 80, coins: 20 },
  { id: "lessons-1", title: "Complete a lesson", emoji: "📘", metric: "lessons", target: 1, coins: 10 },
  { id: "lessons-3", title: "Complete 3 lessons", emoji: "📚", metric: "lessons", target: 3, coins: 25 },
  { id: "correct-5", title: "Get 5 answers right", emoji: "✅", metric: "correctAnswers", target: 5, coins: 10 },
  { id: "correct-15", title: "Get 15 answers right", emoji: "🎯", metric: "correctAnswers", target: 15, coins: 25 },
  { id: "cards-10", title: "Flip 10 flashcards", emoji: "🃏", metric: "flashcards", target: 10, coins: 10 },
  { id: "runs-3", title: "Run code 3 times", emoji: "▶️", metric: "codeRuns", target: 3, coins: 10 },
  { id: "quiz-2", title: "Finish 2 quizzes", emoji: "🧩", metric: "quizzes", target: 2, coins: 15 },
  { id: "review-5", title: "Review 5 cards", emoji: "🔁", metric: "reviews", target: 5, coins: 15 },
  { id: "games-2", title: "Play 2 games", emoji: "🎈", metric: "games", target: 2, coins: 10 },
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

export const AVATARS = [
  { id: "owl", emoji: "🦉", price: 0 },
  { id: "fox", emoji: "🦊", price: 0 },
  { id: "panda", emoji: "🐼", price: 0 },
  { id: "cat", emoji: "🐱", price: 0 },
  { id: "rocket", emoji: "🚀", price: 40 },
  { id: "unicorn", emoji: "🦄", price: 60 },
  { id: "dragon", emoji: "🐉", price: 80 },
  { id: "alien", emoji: "👽", price: 80 },
  { id: "robot", emoji: "🤖", price: 100 },
  { id: "wizard", emoji: "🧙", price: 120 },
  { id: "astronaut", emoji: "🧑‍🚀", price: 150 },
  { id: "crown", emoji: "👑", price: 300 },
];

export const FRAMES = [
  { id: "none", name: "Classic", price: 0, ring: "from-line to-line" },
  { id: "sunset", name: "Sunset", price: 50, ring: "from-orange-400 to-pink-500" },
  { id: "ocean", name: "Ocean", price: 50, ring: "from-sky-400 to-emerald-400" },
  { id: "aurora", name: "Aurora", price: 120, ring: "from-violet-500 via-fuchsia-500 to-cyan-400" },
  { id: "gold", name: "Gold", price: 250, ring: "from-yellow-300 via-amber-500 to-yellow-600" },
];

export const STREAK_FREEZE_PRICE = 50;
