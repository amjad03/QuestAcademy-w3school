/**
 * Experience profiles. One design system, five ways to use it.
 * The mode is picked from the learner's stage at onboarding and can be
 * switched in Settings (Explore is guarded by a grown-up check).
 */
import type { Stage } from "@/content/types";

export type ModeId = "explore" | "adventure" | "focus" | "mastery" | "professional";

export interface ModeConfig {
  id: ModeId;
  name: string;
  number: string;
  audience: string;
  ages: string;
  summary: string;
  /** Root font scale applied via CSS (see globals.css [data-mode]). */
  scale: "xl" | "lg" | "md" | "sm";
  /** How loud rewards are. */
  rewards: "celebrate" | "playful" | "quiet" | "subtle" | "minimal";
  /** Celebration dialogs (badges, level-ups) — otherwise shown as a small toast. */
  dialogs: boolean;
  confetti: boolean;
  /** Questy reads prompts aloud automatically. */
  autoVoice: boolean;
  /** Leagues / leaderboards: never, opt-in, or on. */
  social: "off" | "opt-in" | "on";
  /** Default sound effects. */
  sound: boolean;
  /** Primary nav items shown in the sidebar / tab bar (hrefs). */
  nav: string[];
  /** Label for the home destination. */
  homeLabel: string;
}

export const MODES: Record<ModeId, ModeConfig> = {
  explore: {
    id: "explore",
    name: "Explore",
    number: "01",
    audience: "Primary school",
    ages: "about 6–10",
    summary: "Big buttons, friendly characters, voice instructions and visual puzzles. Rewards celebrate trying and improving.",
    scale: "xl",
    rewards: "celebrate",
    dialogs: true,
    confetti: true,
    autoVoice: true,
    social: "off",
    sound: true,
    nav: ["/learn", "/kids/play", "/stickers", "/profile"],
    homeLabel: "Home",
  },
  adventure: {
    id: "adventure",
    name: "Adventure",
    number: "02",
    audience: "Middle school",
    ages: "about 11–14",
    summary: "Missions, topic maps, experiments and unlockable challenges, with optional social competition.",
    scale: "lg",
    rewards: "playful",
    dialogs: true,
    confetti: true,
    autoVoice: false,
    social: "opt-in",
    sound: true,
    nav: ["/learn", "/courses", "/practice", "/leaderboard", "/quests", "/shop", "/profile"],
    homeLabel: "Missions",
  },
  focus: {
    id: "focus",
    name: "Focus",
    number: "03",
    audience: "High school & PUC",
    ages: "about 15–18",
    summary: "Syllabus dashboard, chapter progress, formula sheets, revision plans and exam practice. Gamification stays out of the way.",
    scale: "md",
    rewards: "quiet",
    dialogs: false,
    confetti: false,
    autoVoice: false,
    social: "on",
    sound: false,
    nav: ["/learn", "/plan", "/courses", "/practice", "/exam", "/exam/formulas", "/profile"],
    homeLabel: "Syllabus",
  },
  mastery: {
    id: "mastery",
    name: "Mastery",
    number: "04",
    audience: "College & university",
    ages: "about 18–24+",
    summary: "Professional typography, advanced simulations, coding workspaces, case studies, research resources and competency tracking.",
    scale: "sm",
    rewards: "subtle",
    dialogs: false,
    confetti: false,
    autoVoice: false,
    social: "on",
    sound: false,
    nav: ["/learn", "/courses", "/practice", "/code/playground", "/plan", "/profile"],
    homeLabel: "Dashboard",
  },
  professional: {
    id: "professional",
    name: "Professional",
    number: "05",
    audience: "Adults & lifelong learners",
    ages: "any age",
    summary: "Goal-oriented pathways, practical assignments, certificates, career skills and a flexible study schedule.",
    scale: "sm",
    rewards: "minimal",
    dialogs: false,
    confetti: false,
    autoVoice: false,
    social: "off",
    sound: false,
    nav: ["/learn", "/pathways", "/plan", "/courses", "/code/playground", "/profile"],
    homeLabel: "My goals",
  },
};

export const MODE_LIST = Object.values(MODES);

export function modeForStage(stage: Stage | null | undefined): ModeId {
  switch (stage) {
    case "preprimary":
    case "primary":
      return "explore";
    case "middle":
      return "adventure";
    case "secondary":
    case "aspirant":
      return "focus";
    case "ug":
    case "pg":
      return "mastery";
    case "lifelong":
      return "professional";
    default:
      return "adventure";
  }
}

/** Age (years) → mode, for onboarding. */
export function modeForAge(age: number): ModeId {
  if (age <= 10) return "explore";
  if (age <= 14) return "adventure";
  if (age <= 18) return "focus";
  if (age <= 24) return "mastery";
  return "professional";
}

export type Board = "cbse" | "pue" | "icse" | "exam";

export const BOARDS: { id: Board; name: string; full: string }[] = [
  { id: "cbse", name: "CBSE", full: "CBSE · Class 9–12 (NCERT)" },
  { id: "pue", name: "Karnataka PUC", full: "Karnataka I & II PUC" },
  { id: "icse", name: "ICSE / ISC", full: "ICSE (9–10) · ISC (11–12)" },
  { id: "exam", name: "NEET / JEE", full: "NTA NEET-UG / JEE Main syllabus" },
];

/** Resolve the learner's mode id from profile (explicit choice, else stage). */
export function resolveMode(profile: { mode?: ModeId | null; stage?: Stage | null }): ModeId {
  return profile.mode ?? modeForStage(profile.stage);
}
