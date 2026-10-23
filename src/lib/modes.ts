/**
 * Experience profiles. Seven ways to use Quest Academy, one per stage of life.
 * The mode is picked from the learner's stage at onboarding and can be
 * switched in Settings (Explore is guarded by a grown-up check).
 */
import type { Stage } from "@/content/types";

export type ModeId = "sprout" | "explore" | "adventure" | "focus" | "mastery" | "research" | "professional";

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
  /** Young-learner behaviour: voice-first, stickers, grown-up gates, no social. */
  young: boolean;
}

export const MODES: Record<ModeId, ModeConfig> = {
  sprout: {
    id: "sprout",
    name: "Sprout",
    number: "01",
    audience: "Pre-primary",
    ages: "about 3–5",
    summary: "Picture-only navigation, one giant button at a time, everything read aloud and lots of gentle praise. No reading needed.",
    scale: "xl",
    rewards: "celebrate",
    dialogs: true,
    confetti: true,
    autoVoice: true,
    social: "off",
    sound: true,
    nav: ["/learn", "/kids/play", "/stickers", "/parent"],
    homeLabel: "Play",
    young: true,
  },
  explore: {
    id: "explore",
    name: "Explore",
    number: "02",
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
    nav: ["/learn", "/kids/play", "/stickers", "/parent", "/profile"],
    homeLabel: "Home",
    young: true,
  },
  adventure: {
    id: "adventure",
    name: "Adventure",
    number: "03",
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
    nav: ["/learn", "/courses", "/library", "/practice", "/leaderboard", "/notebook", "/insights", "/quests", "/shop", "/parent", "/profile"],
    homeLabel: "Missions",
    young: false,
  },
  focus: {
    id: "focus",
    name: "Focus",
    number: "04",
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
    nav: ["/learn", "/plan", "/library", "/practice", "/exam", "/courses", "/exam/formulas", "/worksheets", "/notebook", "/insights", "/competitions", "/profile"],
    homeLabel: "Syllabus",
    young: false,
  },
  mastery: {
    id: "mastery",
    name: "Mastery",
    number: "05",
    audience: "Undergraduate",
    ages: "about 18–22",
    summary: "Semester dashboard, coding workspaces, advanced simulations, case studies and competency tracking. Rewards become subtle.",
    scale: "sm",
    rewards: "subtle",
    dialogs: false,
    confetti: false,
    autoVoice: false,
    social: "on",
    sound: false,
    nav: ["/learn", "/courses", "/library", "/practice", "/code/playground", "/notebook", "/insights", "/plan", "/competitions", "/worksheets", "/profile"],
    homeLabel: "Dashboard",
    young: false,
  },
  research: {
    id: "research",
    name: "Research",
    number: "06",
    audience: "Postgraduate & research",
    ages: "about 21+",
    summary: "A quiet reading-first workspace: deep readings, case studies, competency maps, a research notebook and a study plan. No game elements.",
    scale: "sm",
    rewards: "minimal",
    dialogs: false,
    confetti: false,
    autoVoice: false,
    social: "off",
    sound: false,
    nav: ["/learn", "/library", "/notebook", "/courses", "/code/playground", "/plan", "/insights", "/competitions", "/profile"],
    homeLabel: "Workspace",
    young: false,
  },
  professional: {
    id: "professional",
    name: "Professional",
    number: "07",
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
    nav: ["/learn", "/pathways", "/plan", "/library", "/courses", "/code/playground", "/notebook", "/insights", "/worksheets", "/profile"],
    homeLabel: "My goals",
    young: false,
  },
};

export const MODE_LIST = Object.values(MODES);

export function modeForStage(stage: Stage | null | undefined): ModeId {
  switch (stage) {
    case "preprimary":
      return "sprout";
    case "primary":
      return "explore";
    case "middle":
      return "adventure";
    case "secondary":
    case "aspirant":
      return "focus";
    case "ug":
      return "mastery";
    case "pg":
      return "research";
    case "lifelong":
      return "professional";
    default:
      return "adventure";
  }
}

/** Age (years) → mode, for onboarding. */
export function modeForAge(age: number): ModeId {
  if (age <= 5) return "sprout";
  if (age <= 10) return "explore";
  if (age <= 14) return "adventure";
  if (age <= 18) return "focus";
  if (age <= 22) return "mastery";
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
