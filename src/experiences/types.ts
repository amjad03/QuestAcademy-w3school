import type { ComponentType, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { ItemKind } from "@/content/course";
import type { WorldId } from "@/content/types";
import type { MasteryLevel } from "@/lib/mastery";
import type { ModeId } from "@/lib/modes";

/**
 * An experience is everything that makes one age group's product feel like its
 * own: the app frame (navigation), the home screen, the lesson page, the
 * practice screen and the results screen. Logic (progress, grading, mastery)
 * lives in shared code; experiences only decide how it looks and reads.
 */

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface ShellProps {
  children: ReactNode;
  pathname: string;
  /** Primary destinations for this mode, in order (home first). */
  nav: NavItem[];
  /** Everything else, for a "More" menu. */
  more: NavItem[];
  isActive: (href: string) => boolean;
  /** Open the command palette / search. */
  openSearch: () => void;
}

export interface LessonTab {
  kind: ItemKind;
  label: string;
  icon: LucideIcon;
  active: boolean;
  done: boolean;
  /** Practice opens a session page; the rest switch in place. */
  href?: string;
  onSelect?: () => void;
}

export interface LessonLayoutProps {
  world: WorldId;
  course: { slug: string; title: string; href: string };
  /** `label` replaces the default "Unit n: title" (lessons opened from a class chapter say "Chapter n: title"). */
  unit: { title: string; href: string; index: number; label?: string };
  lesson: { id: string; title: string; summary: string; minutes: number; xp: number };
  tabs: LessonTab[];
  /** The current item's body (video, article/story with explainers, cards, challenge). */
  content: ReactNode;
  /** Lessons in this unit with their items, quiz and unit test links. */
  unitNav: ReactNode;
  /** Bookmark / notes / doubt controls. */
  notebook: ReactNode;
  prev: { href: string; title: string } | null;
  upNext: { href: string; label: string; title: string };
  /** Lessons completed in this unit. */
  unitProgress: { done: number; total: number };
  /** Marks the reading done (same as the article's own "Mark complete"). */
  onComplete: () => void;
  /** Whether the lesson's reading is already complete. */
  completed: boolean;
}

export interface SessionLayoutProps {
  kind: "practice" | "quiz" | "test" | "challenge";
  title: string;
  course: { slug: string; title: string };
  /** 0–1 */
  progress: number;
  /** 0-based question number and total in this run. */
  index: number;
  total: number;
  /** Consecutive correct answers. */
  combo: number;
  /** This item is a re-ask of an earlier mistake. */
  retry: boolean;
  /** The question with its answer input (already wired). */
  question: ReactNode;
  /** null while answering; filled once checked. */
  feedback: null | { correct: boolean; praise: string; answer: ReactNode; explain: ReactNode | null };
  canCheck: boolean;
  onCheck: () => void;
  onSkip: () => void;
  onContinue: () => void;
  onQuit: () => void;
  /** Confirm-quit dialog (render it somewhere; it shows itself when needed). */
  quitDialog: ReactNode;
}

export interface SessionResultsProps {
  kind: SessionLayoutProps["kind"];
  title: string;
  course: { slug: string; title: string };
  /** 0–1 first-try accuracy. */
  accuracy: number;
  correct: number;
  total: number;
  xp: number;
  seconds: number;
  changes: { id: string; title: string; from: MasteryLevel; to: MasteryLevel }[];
  missed: { uid: string; question: ReactNode; answer: ReactNode; explain: ReactNode | null }[];
  exitHref: string;
  onRetry: () => void;
}

export interface Experience {
  id: ModeId;
  Shell: ComponentType<ShellProps>;
  Home: ComponentType;
  LessonLayout: ComponentType<LessonLayoutProps>;
  SessionLayout: ComponentType<SessionLayoutProps>;
  SessionResults: ComponentType<SessionResultsProps>;
  /** The lesson layout renders its own "Mark complete" control, so the article skips its end card. */
  ownsComplete?: boolean;
}
