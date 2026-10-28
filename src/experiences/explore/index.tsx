"use client";

import dynamic from "next/dynamic";
import type { Experience } from "../types";
import { ExploreShell } from "./Shell";

// Screens load on demand, so other age groups' designs are not in every page's JavaScript.
const ExploreHomeV2 = dynamic(() => import("./Home").then((m) => m.ExploreHomeV2));
const ExploreLessonLayout = dynamic(() => import("./Lesson").then((m) => m.ExploreLessonLayout));
const ExploreSessionLayout = dynamic(() => import("./Session").then((m) => m.ExploreSessionLayout));
const ExploreSessionResults = dynamic(() => import("./Session").then((m) => m.ExploreSessionResults));

/** Explore (ages 6–10, Classes 1–5): bright, bouncy, read-aloud everywhere, stars and stickers. */
export const experience: Experience = {
  id: "explore",
  Shell: ExploreShell,
  Home: ExploreHomeV2,
  LessonLayout: ExploreLessonLayout,
  SessionLayout: ExploreSessionLayout,
  SessionResults: ExploreSessionResults,
  ownsComplete: true,
};
