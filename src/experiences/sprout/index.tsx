"use client";

import type { Experience } from "../types";
import { SproutShell } from "./Shell";
import { SproutHome } from "./Home";
import { SproutLessonLayout } from "./Lesson";
import { SproutSessionLayout, SproutSessionResults } from "./Session";

/** Sprout (ages ~3–5): picture-only, voice-first, one giant thing at a time. */
export const experience: Experience = {
  id: "sprout",
  Shell: SproutShell,
  Home: SproutHome,
  LessonLayout: SproutLessonLayout,
  SessionLayout: SproutSessionLayout,
  SessionResults: SproutSessionResults,
};
