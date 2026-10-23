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
  /** Hands-on activity component, rendered inside the explainer frame. */
  try?: ComponentType;
  story?: ComicPanel[];
  like?: Analogy;
}
