"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Stage, WorldId } from "@/content/types";
import type { LearningStyle } from "@/content/worlds";
import {
  AVATARS,
  BADGES,
  FRAMES,
  STREAK_FREEZE_PRICE,
  type CardState,
  type Counters,
  dayKey,
  daysBetween,
  emptyCounters,
  levelInfo,
  questsForDay,
  reviewCard,
  weekKey,
} from "./gamification";
import { useUi } from "./ui";
import type { Board, ModeId } from "./modes";
import { afterAssessmentAnswer, afterPractice, type AssessmentKind, type MasteryLevel } from "./mastery";

export interface Profile {
  name: string;
  avatar: string;
  frame: string;
  stage: Stage | null;
  worlds: WorldId[];
  /** The course shown on the Learn path. */
  course: string | null;
  style: LearningStyle;
  dailyGoal: number;
  onboarded: boolean;
  createdAt: string;
  /** Experience profile. null = derive from stage. */
  mode: ModeId | null;
  /** Age given at onboarding (optional). */
  age: number | null;
  /** Syllabus board for Focus mode. */
  board: Board | null;
  /** Class / year within the board, e.g. "10", "PUC-1", "12". */
  grade: string | null;
  /** Public nickname for opt-in social features (never the real name). */
  nickname: string;
  /** Opted in to leagues / challenges (Adventure is opt-in; Explore never). */
  socialOptIn: boolean;
}

/** Study plan used by Focus (syllabus) and Professional (pathway) modes. */
export interface StudyPlan {
  scope: { type: "syllabus" | "pathway" | "course"; id: string };
  targetDate: string;
  hoursPerWeek: number;
  /** 0 = Sunday … 6 = Saturday */
  studyDays: number[];
  createdAt: string;
}

export interface AssignmentSubmission {
  submittedAt: string;
  text: string;
  link?: string;
  /** Indices of rubric criteria the learner self-checked. */
  checklist: number[];
}

export interface LessonProgress {
  completedAt: string;
  bestQuiz?: number;
}

export interface MockResult {
  id: string;
  testId: string;
  title: string;
  date: string;
  score: number;
  max: number;
  correct: number;
  wrong: number;
  skipped: number;
  seconds: number;
  bySubject: Record<string, { correct: number; wrong: number; skipped: number; score: number; max: number }>;
  /** question id → chosen answer (index / number) or null */
  answers: Record<string, number | null>;
}

export interface LearnerState {
  profile: Profile;
  xp: number;
  coins: number;
  streak: { count: number; best: number; lastDay: string | null; freezes: number };
  totals: Counters;
  daily: Record<string, { xp: number; counters: Counters }>;
  weekly: { week: string; xp: number };
  lessons: Record<string, LessonProgress>;
  lastLesson: string | null;
  subjectsStarted: string[];
  worldsVisited: WorldId[];
  badges: Record<string, string>;
  cards: Record<string, CardState>;
  questsClaimed: Record<string, string[]>;
  challengesPassed: string[];
  mockResults: MockResult[];
  owned: string[];
  settings: { theme: "system" | "light" | "dark"; sound: boolean };
  /** lessonId → mastery level (0–4). */
  mastery: Record<string, MasteryLevel>;
  /** Completed learning items (videos, articles, practice, cards…), keyed by item id. */
  items: Record<string, string>;
  /** Best score (0–1) per assessment key, e.g. "physics-school/motion:test". */
  assessments: Record<string, number>;
  plan: StudyPlan | null;
  /** Plan task id → date completed (manual ticks, e.g. revision/mock days). */
  planDone: Record<string, string>;
  /** Explore-mode sticker collection: sticker id → date earned. */
  stickers: Record<string, string>;
  /** Professional pathways. */
  pathways: {
    enrolled: string[];
    assignments: Record<string, AssignmentSubmission>;
    certificates: Record<string, { issuedAt: string; code: string }>;
  };
  updatedAt: number;
}

interface Actions {
  setProfile: (p: Partial<Profile>) => void;
  award: (xp: number, reason?: string) => void;
  bump: (counter: keyof Counters, n?: number) => void;
  completeLesson: (input: { id: string; subject: string; world: WorldId; xp: number; flashcards: number; quizScore?: number }) => boolean;
  visitLesson: (input: { id: string; subject: string; world: WorldId }) => void;
  recordQuiz: (correct: number, total: number) => void;
  recordAnswer: (correct: boolean) => void;
  passChallenge: (lessonId: string) => void;
  recordMock: (r: MockResult) => void;
  gradeCard: (cardId: string, grade: 0 | 1 | 2 | 3) => void;
  claimQuest: (questId: string) => void;
  buy: (itemId: string, price: number) => boolean;
  buyFreeze: () => boolean;
  setSettings: (s: Partial<LearnerState["settings"]>) => void;
  markItem: (itemId: string, xp?: number) => void;
  claimCoins: (coins: number, text?: string) => void;
  applyPractice: (lessonId: string, correct: number, total: number) => void;
  applyAssessment: (key: string, kind: Exclude<AssessmentKind, "practice">, answers: { lessonId: string; ok: boolean }[]) => void;
  setPlan: (plan: StudyPlan | null) => void;
  togglePlanTask: (taskId: string) => void;
  awardSticker: (id: string) => boolean;
  enrollPathway: (id: string) => void;
  submitAssignment: (id: string, sub: Omit<AssignmentSubmission, "submittedAt">) => void;
  issueCertificate: (pathwayId: string) => { issuedAt: string; code: string };
  replaceState: (s: LearnerState) => void;
  reset: () => void;
}

export const initialState = (): LearnerState => ({
  profile: {
    name: "",
    avatar: "blue",
    frame: "none",
    stage: null,
    worlds: [],
    style: "visual",
    dailyGoal: 50,
    onboarded: false,
    course: null,
    mode: null,
    age: null,
    board: null,
    grade: null,
    nickname: "",
    socialOptIn: false,
    createdAt: new Date().toISOString(),
  },
  xp: 0,
  coins: 50,
  streak: { count: 0, best: 0, lastDay: null, freezes: 1 },
  totals: emptyCounters(),
  daily: {},
  weekly: { week: weekKey(), xp: 0 },
  lessons: {},
  lastLesson: null,
  subjectsStarted: [],
  worldsVisited: [],
  badges: {},
  cards: {},
  questsClaimed: {},
  challengesPassed: [],
  mockResults: [],
  owned: [...AVATARS.filter((a) => a.price === 0).map((a) => a.id), "none"],
  settings: { theme: "light", sound: true },
  mastery: {},
  items: {},
  assessments: {},
  plan: null,
  planDone: {},
  stickers: {},
  pathways: { enrolled: [], assignments: {}, certificates: {} },
  updatedAt: Date.now(),
});

type Store = LearnerState & Actions;

function today(s: LearnerState) {
  const d = dayKey();
  return s.daily[d] ?? { xp: 0, counters: emptyCounters() };
}

/** Apply streak bookkeeping for activity happening today. */
function touchStreak(s: LearnerState): LearnerState["streak"] {
  const t = dayKey();
  const st = { ...s.streak };
  if (st.lastDay === t) return st;
  if (!st.lastDay) st.count = 1;
  else {
    const gap = daysBetween(st.lastDay, t);
    if (gap === 1) st.count += 1;
    else if (gap === 2 && st.freezes > 0) {
      st.freezes -= 1;
      st.count += 1;
    } else st.count = 1;
  }
  st.lastDay = t;
  st.best = Math.max(st.best, st.count);
  return st;
}

/** Visible streak: 0 if the chain has been broken. */
export function liveStreak(s: Pick<LearnerState, "streak">) {
  if (!s.streak.lastDay) return 0;
  const gap = daysBetween(s.streak.lastDay, dayKey());
  if (gap <= 1) return s.streak.count;
  if (gap === 2 && s.streak.freezes > 0) return s.streak.count;
  return 0;
}

function pruneDaily(daily: LearnerState["daily"]) {
  const keys = Object.keys(daily).sort();
  if (keys.length <= 120) return daily;
  const keep = keys.slice(-120);
  return Object.fromEntries(keep.map((k) => [k, daily[k]]));
}

/** After any change: detect new badges + level-ups, fire UI celebrations. */
function finalize(prev: LearnerState, next: LearnerState): LearnerState {
  const ui = useUi.getState();
  const prevLevel = levelInfo(prev.xp).level;
  const lvl = levelInfo(next.xp);
  if (lvl.level > prevLevel) {
    ui.celebrate({ kind: "level", title: `Level ${lvl.level}!`, subtitle: `You are now a ${lvl.title}` });
    next = { ...next, coins: next.coins + 20 };
  }
  const ctx = {
    totals: next.totals,
    streak: next.streak.count,
    xp: next.xp,
    level: lvl.level,
    worldsVisited: next.worldsVisited.length,
    subjectsStarted: next.subjectsStarted.length,
    hour: new Date().getHours(),
  };
  const earned = BADGES.filter((b) => !next.badges[b.id] && b.test(ctx));
  if (earned.length) {
    const badges = { ...next.badges };
    for (const b of earned) {
      badges[b.id] = new Date().toISOString();
      ui.celebrate({ kind: "badge", title: b.name, subtitle: b.description, badge: { icon: b.icon, color: b.color } });
    }
    next = { ...next, badges, coins: next.coins + 15 * earned.length };
  }
  // Daily goal reached?
  const d = dayKey();
  const before = prev.daily[d]?.xp ?? 0;
  const after = next.daily[d]?.xp ?? 0;
  if (before < next.profile.dailyGoal && after >= next.profile.dailyGoal) {
    ui.celebrate({ kind: "goal", title: "Daily goal smashed!", subtitle: `${liveStreak(next)}-day streak — keep it going` });
  }
  return { ...next, updatedAt: Date.now() };
}

export const useLearner = create<Store>()(
  persist(
    (set, get) => {
      const update = (fn: (s: LearnerState) => LearnerState) => {
        const prev = get();
        set(finalize(prev, fn(prev)));
      };

      const addXp = (s: LearnerState, xp: number): LearnerState => {
        if (xp <= 0) return s;
        const d = dayKey();
        const td = today(s);
        const wk = weekKey();
        return {
          ...s,
          xp: s.xp + xp,
          streak: touchStreak(s),
          daily: pruneDaily({ ...s.daily, [d]: { ...td, xp: td.xp + xp } }),
          weekly: s.weekly.week === wk ? { week: wk, xp: s.weekly.xp + xp } : { week: wk, xp },
        };
      };

      const addCounter = (s: LearnerState, c: keyof Counters, n = 1): LearnerState => {
        const d = dayKey();
        const td = today(s);
        return {
          ...s,
          totals: { ...s.totals, [c]: s.totals[c] + n },
          daily: { ...s.daily, [d]: { ...td, counters: { ...td.counters, [c]: td.counters[c] + n } } },
        };
      };

      return {
        ...initialState(),

        setProfile: (p) => set((s) => ({ profile: { ...s.profile, ...p }, updatedAt: Date.now() })),

        award: (xp, reason) => {
          update((s) => addXp(s, xp));
          if (xp > 0) useUi.getState().toast({ xp, text: reason });
        },

        bump: (counter, n = 1) => update((s) => addCounter(s, counter, n)),

        visitLesson: ({ id, subject, world }) =>
          set((s) => ({
            lastLesson: id,
            subjectsStarted: s.subjectsStarted.includes(subject) ? s.subjectsStarted : [...s.subjectsStarted, subject],
            worldsVisited: s.worldsVisited.includes(world) ? s.worldsVisited : [...s.worldsVisited, world],
          })),

        completeLesson: ({ id, subject, world, xp, flashcards, quizScore }) => {
          const s = get();
          const existing = s.lessons[id];
          if (existing) {
            if (quizScore !== undefined && quizScore > (existing.bestQuiz ?? -1)) {
              set({ lessons: { ...s.lessons, [id]: { ...existing, bestQuiz: quizScore } } });
            }
            return false;
          }
          update((st) => {
            let n = addXp(st, xp);
            n = addCounter(n, "lessons");
            const cards = { ...n.cards };
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            for (let i = 0; i < flashcards; i++) {
              const cid = `${id}#${i}`;
              if (!cards[cid]) cards[cid] = { ef: 2.5, interval: 0, reps: 0, due: dayKey(tomorrow) };
            }
            return {
              ...n,
              cards,
              lessons: { ...n.lessons, [id]: { completedAt: new Date().toISOString(), bestQuiz: quizScore } },
              subjectsStarted: n.subjectsStarted.includes(subject) ? n.subjectsStarted : [...n.subjectsStarted, subject],
              worldsVisited: n.worldsVisited.includes(world) ? n.worldsVisited : [...n.worldsVisited, world],
              coins: n.coins + 5,
            };
          });
          useUi.getState().toast({ xp, text: "Lesson complete" });
          return true;
        },

        recordQuiz: (correct, total) => {
          const perfect = total > 0 && correct === total;
          const xp = correct * 5 + (perfect ? 10 : 0);
          update((s) => {
            let n = addCounter(s, "quizzes");
            if (perfect) n = addCounter(n, "perfectQuizzes");
            return addXp(n, xp);
          });
          if (xp) useUi.getState().toast({ xp, text: perfect ? "Perfect quiz! +10 bonus" : "Quiz finished" });
        },

        recordAnswer: (correct) => {
          if (correct) update((s) => addCounter(s, "correctAnswers"));
        },

        passChallenge: (lessonId) => {
          const s = get();
          if (s.challengesPassed.includes(lessonId)) return;
          update((st) => {
            const n = addXp(addCounter(st, "challenges"), 50);
            return { ...n, challengesPassed: [...n.challengesPassed, lessonId], coins: n.coins + 15 };
          });
          useUi.getState().toast({ xp: 50, text: "Challenge passed" });
        },

        recordMock: (r) => {
          const xp = Math.max(20, Math.round((Math.max(0, r.score) / Math.max(1, r.max)) * 150));
          update((s) => {
            const n = addXp(addCounter(s, "mockTests"), xp);
            return { ...n, mockResults: [r, ...n.mockResults].slice(0, 30), coins: n.coins + 20 };
          });
          useUi.getState().toast({ xp, text: "Mock test submitted" });
        },

        gradeCard: (cardId, grade) => {
          update((s) => {
            const n = addXp(addCounter(s, "reviews"), grade === 0 ? 1 : 3);
            return { ...n, cards: { ...n.cards, [cardId]: reviewCard(n.cards[cardId], grade) } };
          });
        },

        claimQuest: (questId) => {
          const s = get();
          const d = dayKey();
          const quest = questsForDay(d, s.profile.worlds[0]).find((q) => q.id === questId);
          if (!quest || (s.questsClaimed[d] ?? []).includes(questId)) return;
          set({
            coins: s.coins + quest.coins,
            questsClaimed: { [d]: [...(s.questsClaimed[d] ?? []), questId] },
            updatedAt: Date.now(),
          });
          useUi.getState().toast({ coins: quest.coins, text: `Quest complete: ${quest.title}` });
        },

        buy: (itemId, price) => {
          const s = get();
          if (s.owned.includes(itemId)) return true;
          if (s.coins < price) return false;
          set({ coins: s.coins - price, owned: [...s.owned, itemId], updatedAt: Date.now() });
          return true;
        },

        buyFreeze: () => {
          const s = get();
          if (s.coins < STREAK_FREEZE_PRICE || s.streak.freezes >= 3) return false;
          set({ coins: s.coins - STREAK_FREEZE_PRICE, streak: { ...s.streak, freezes: s.streak.freezes + 1 }, updatedAt: Date.now() });
          return true;
        },

        setSettings: (st) => set((s) => ({ settings: { ...s.settings, ...st } })),

        markItem: (itemId, xp = 0) => {
          if (get().items[itemId]) return;
          update((st) => ({ ...addXp(st, xp), items: { ...st.items, [itemId]: new Date().toISOString() } }));
          if (xp) useUi.getState().toast({ xp });
        },

        claimCoins: (coins, text) => {
          set((st) => ({ coins: st.coins + coins, updatedAt: Date.now() }));
          useUi.getState().toast({ coins, text });
        },

        applyPractice: (lessonId, correct, total) =>
          update((st) => ({ ...st, mastery: { ...st.mastery, [lessonId]: afterPractice(st.mastery[lessonId] ?? 0, correct, total) } })),

        applyAssessment: (key, kind, answers) =>
          update((st) => {
            const mastery = { ...st.mastery };
            for (const a of answers) mastery[a.lessonId] = afterAssessmentAnswer(mastery[a.lessonId] ?? 0, a.ok, kind);
            const score = answers.length ? answers.filter((a) => a.ok).length / answers.length : 0;
            return { ...st, mastery, assessments: { ...st.assessments, [key]: Math.max(st.assessments[key] ?? 0, score) } };
          }),

        setPlan: (plan) => set({ plan, updatedAt: Date.now() }),

        togglePlanTask: (taskId) =>
          set((st) => {
            const planDone = { ...st.planDone };
            if (planDone[taskId]) delete planDone[taskId];
            else planDone[taskId] = new Date().toISOString();
            return { planDone, updatedAt: Date.now() };
          }),

        awardSticker: (id) => {
          if (get().stickers[id]) return false;
          set((st) => ({ stickers: { ...st.stickers, [id]: new Date().toISOString() }, updatedAt: Date.now() }));
          return true;
        },

        enrollPathway: (id) =>
          set((st) => (st.pathways.enrolled.includes(id) ? st : { pathways: { ...st.pathways, enrolled: [...st.pathways.enrolled, id] }, updatedAt: Date.now() })),

        submitAssignment: (id, sub) => {
          const first = !get().pathways.assignments[id];
          update((st) => {
            const n = first ? addXp(st, 60) : st;
            return { ...n, pathways: { ...n.pathways, assignments: { ...n.pathways.assignments, [id]: { ...sub, submittedAt: new Date().toISOString() } } } };
          });
          if (first) useUi.getState().toast({ xp: 60, text: "Assignment submitted" });
        },

        issueCertificate: (pathwayId) => {
          const existing = get().pathways.certificates[pathwayId];
          if (existing) return existing;
          const issuedAt = new Date().toISOString();
          // Short verification code derived from learner + pathway + date.
          let h = 2166136261;
          for (const ch of `${get().profile.name}|${pathwayId}|${issuedAt}`) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
          const code = `QA-${(h >>> 0).toString(36).toUpperCase().padStart(7, "0")}`;
          const cert = { issuedAt, code };
          set((st) => ({ pathways: { ...st.pathways, certificates: { ...st.pathways.certificates, [pathwayId]: cert } }, updatedAt: Date.now() }));
          return cert;
        },

        replaceState: (st) => set({ ...initialState(), ...st }),

        reset: () => set({ ...initialState() }),
      };
    },
    {
      name: "quest-academy",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      // Older saves lack newer profile fields: merge the profile one level deep.
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<LearnerState>;
        return { ...current, ...p, profile: { ...current.profile, ...(p.profile ?? {}) }, pathways: { ...current.pathways, ...(p.pathways ?? {}) } };
      },
      // Persist data only; actions are recreated on load.
      partialize: (s) => Object.fromEntries(Object.entries(s).filter(([, v]) => typeof v !== "function")) as unknown as Store,
    },
  ),
);

/** Snapshot of just the data (no actions). */
export function learnerSnapshot(): LearnerState {
  const s = useLearner.getState();
  const out = {} as Record<string, unknown>;
  for (const k of Object.keys(initialState())) out[k] = (s as unknown as Record<string, unknown>)[k];
  return out as unknown as LearnerState;
}

/** Merge two learner states (local guest progress + cloud) without losing anything. */
export function mergeStates(a: LearnerState, b: LearnerState): LearnerState {
  const newer = a.updatedAt >= b.updatedAt ? a : b;
  const older = newer === a ? b : a;
  const maxCounters = (x: Counters, y: Counters) =>
    Object.fromEntries(Object.keys(x).map((k) => [k, Math.max(x[k as keyof Counters], y[k as keyof Counters] ?? 0)])) as unknown as Counters;
  const daily = { ...older.daily };
  for (const [k, v] of Object.entries(newer.daily)) {
    const o = daily[k];
    daily[k] = o ? { xp: Math.max(o.xp, v.xp), counters: maxCounters(v.counters, o.counters) } : v;
  }
  const streakNewer = (a.streak.lastDay ?? "") >= (b.streak.lastDay ?? "") ? a.streak : b.streak;
  return {
    ...newer,
    profile: newer.profile.onboarded ? newer.profile : older.profile.onboarded ? older.profile : newer.profile,
    xp: Math.max(a.xp, b.xp),
    coins: Math.max(a.coins, b.coins),
    streak: { ...streakNewer, best: Math.max(a.streak.best, b.streak.best) },
    totals: maxCounters(a.totals, b.totals),
    daily: pruneDaily(daily),
    weekly: a.weekly.week === b.weekly.week ? { week: a.weekly.week, xp: Math.max(a.weekly.xp, b.weekly.xp) } : a.weekly.week > b.weekly.week ? a.weekly : b.weekly,
    lessons: { ...older.lessons, ...newer.lessons },
    subjectsStarted: Array.from(new Set([...a.subjectsStarted, ...b.subjectsStarted])),
    worldsVisited: Array.from(new Set([...a.worldsVisited, ...b.worldsVisited])),
    badges: { ...older.badges, ...newer.badges },
    cards: { ...older.cards, ...newer.cards },
    questsClaimed: { ...older.questsClaimed, ...newer.questsClaimed },
    challengesPassed: Array.from(new Set([...a.challengesPassed, ...b.challengesPassed])),
    mockResults: Array.from(new Map([...older.mockResults, ...newer.mockResults].map((m) => [m.id, m])).values())
      .sort((x, y) => y.date.localeCompare(x.date))
      .slice(0, 30),
    owned: Array.from(new Set([...a.owned, ...b.owned])),
    mastery: Object.fromEntries(
      Array.from(new Set([...Object.keys(a.mastery ?? {}), ...Object.keys(b.mastery ?? {})])).map((k) => [k, Math.max(a.mastery?.[k] ?? 0, b.mastery?.[k] ?? 0) as MasteryLevel]),
    ),
    items: { ...(older.items ?? {}), ...(newer.items ?? {}) },
    plan: newer.plan ?? older.plan ?? null,
    planDone: { ...(older.planDone ?? {}), ...(newer.planDone ?? {}) },
    stickers: { ...(older.stickers ?? {}), ...(newer.stickers ?? {}) },
    pathways: {
      enrolled: Array.from(new Set([...(a.pathways?.enrolled ?? []), ...(b.pathways?.enrolled ?? [])])),
      assignments: { ...(older.pathways?.assignments ?? {}), ...(newer.pathways?.assignments ?? {}) },
      certificates: { ...(older.pathways?.certificates ?? {}), ...(newer.pathways?.certificates ?? {}) },
    },
    assessments: Object.fromEntries(
      Array.from(new Set([...Object.keys(a.assessments ?? {}), ...Object.keys(b.assessments ?? {})])).map((k) => [k, Math.max(a.assessments?.[k] ?? 0, b.assessments?.[k] ?? 0)]),
    ),
    updatedAt: Date.now(),
  };
}

export const FRAME_IDS = FRAMES.map((f) => f.id);
