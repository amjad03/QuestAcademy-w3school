"use client";

import dynamic from "next/dynamic";
import type { Experience } from "../types";
import { SproutShell } from "./Shell";

// Screens load on demand, so other age groups' designs are not in every page's JavaScript.
const SproutHome = dynamic(() => import("./Home").then((m) => m.SproutHome));
const SproutLessonLayout = dynamic(() => import("./Lesson").then((m) => m.SproutLessonLayout));
const SproutSessionLayout = dynamic(() => import("./Session").then((m) => m.SproutSessionLayout));
const SproutSessionResults = dynamic(() => import("./Session").then((m) => m.SproutSessionResults));

/** Sprout (ages ~3–5): picture-only, voice-first, one giant thing at a time. */
export const experience: Experience = {
  id: "sprout",
  Shell: SproutShell,
  Home: SproutHome,
  LessonLayout: SproutLessonLayout,
  SessionLayout: SproutSessionLayout,
  SessionResults: SproutSessionResults,
};
