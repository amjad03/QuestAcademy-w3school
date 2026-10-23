"use client";

import type { Experience } from "../types";
import { ExploreShell } from "./Shell";
import { ExploreHomeV2 } from "./Home";
import { ExploreLessonLayout } from "./Lesson";
import { ExploreSessionLayout, ExploreSessionResults } from "./Session";

/** Explore (ages 6–10, Classes 1–5): bright, bouncy, read-aloud everywhere, stars and stickers. */
export const experience: Experience = {
  id: "explore",
  Shell: ExploreShell,
  Home: ExploreHomeV2,
  LessonLayout: ExploreLessonLayout,
  SessionLayout: ExploreSessionLayout,
  SessionResults: ExploreSessionResults,
};
