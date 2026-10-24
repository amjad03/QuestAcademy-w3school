import type { ComponentType, ReactNode } from "react";

/**
 * Visual explainers: one concept, told four ways so any learner — including
 * a small child — can get it. Every format is optional, but most topics ship
 * at least "watch" and one other.
 *
 * - watch:   animated scenes that build up step by step, narrated by Questy
 * - try:     a hands-on manipulative (drag, slide, tap) to discover the idea
 * - story:   a short comic strip
 * - like:    a real-life analogy, mapping everyday things onto the idea
 */

export interface Step {
  /** Short heading shown above the stage. */
  title: string;
  /** One or two plain sentences, read aloud. Keep it simple enough for a 7-year-old. */
  say: string;
  /** The picture for this step. Draw with inline SVG / divs; use framer-motion for movement. */
  scene: ReactNode;
}

export interface ComicPanel {
  /** Panel artwork (inline SVG or emoji composition). */
  art: ReactNode;
  /** Caption under the panel. */
  caption: string;
  /** Optional speech bubble text. */
  speech?: string;
}

export interface Analogy {
  /** "Electric current is like water flowing in a pipe." */
  headline: string;
  /** The everyday picture. */
  everyday: { label: string; art: ReactNode };
  /** The concept picture. */
  concept: { label: string; art: ReactNode };
  /** Pairs: everyday thing → concept thing. */
  pairs: [string, string][];
  /** Where the analogy stops working (honest note for older learners). */
  limits?: string;
}

/** Tools a mission step's scene gets from the player. */
export interface MissionApi {
  /** Call when the learner has done the step's task. */
  done: () => void;
  /** True once the task is done (keep the result on screen; stop accepting input if you like). */
  complete: boolean;
  /** Which of the prediction options the learner chose, if the step asked for one. */
  guess: number | null;
}

/**
 * One small, guided task. The learner sees exactly one instruction and only the
 * controls that task needs (one or two), predicts first when it helps, does it,
 * then reads why it happened.
 */
export interface MissionStep {
  /** The single instruction, as an action: "Close the switch." Under ~10 words. */
  task: string;
  /**
   * Ask before acting. Put the common wrong idea among the options so the
   * result breaks it. `answer` is the index of the right option.
   */
  predict?: {
    question: string;
    options: string[];
    answer: number;
    /** Index of the option that is the common wrong idea, if one is. Picking it gets "Many people think that!". */
    trap?: number;
  };
  /** The interactive scene for this step: big touch targets, at most two controls. Call api.done() when the task is achieved. */
  scene: (api: MissionApi) => ReactNode;
  /** Shown if the learner asks for help or seems stuck. */
  hint?: string;
  /** After the task: what just happened and why, in one or two plain sentences. */
  explain: string;
  /** Milliseconds to let the scene's result play before the explanation appears (default 700). */
  settle?: number;
}

/** A guided "Try it": a few steps that build to one takeaway. */
export interface Mission {
  /** One-line goal shown at the start: "Make the bulb light up, then make it brighter." */
  goal: string;
  steps: MissionStep[];
  /** The one sentence to remember. */
  takeaway: string;
}

export interface Explainer {
  /** Unique id, kebab-case. */
  id: string;
  title: string;
  /** One-line promise: "See why 3 × 4 is three groups of four." */
  tagline: string;
  /** Subject area label for the gallery: "Maths", "Science", "Coding", … */
  area: string;
  /** Ages it is pitched at, e.g. "5–8". */
  ages: string;
  /** Lesson ids ("<subject>/<topic>/<lesson>") where the explainer is shown. */
  lessons: string[];
  /** Accent colour for the card / stage. */
  color: string;
  /** Big emoji or small SVG for the gallery card. */
  icon: ReactNode;
  watch?: Step[];
  /** Hands-on activity component, rendered inside the explainer frame (older format; prefer `mission`). */
  try?: ComponentType;
  /** Guided hands-on activity: one task at a time with predict → try → why. Shown in the Try tab. */
  mission?: Mission;
  /** The usual wrong idea this explainer breaks, shown up front. */
  misconception?: { myth: string; truth: string };
  story?: ComicPanel[];
  like?: Analogy;
}
