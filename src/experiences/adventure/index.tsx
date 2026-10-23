"use client";

import type { Experience } from "../types";
import { AdventureShell } from "./Shell";
import { AdventureHome } from "./Home";
import { AdventureLessonLayout } from "./Lesson";
import { AdventureSessionLayout, AdventureSessionResults } from "./Session";

/** Adventure (ages 11–14): "mission control" — game-HUD frame, missions, challenge runs and debriefs. */
export const experience: Experience = {
  id: "adventure",
  Shell: AdventureShell,
  Home: AdventureHome,
  LessonLayout: AdventureLessonLayout,
  SessionLayout: AdventureSessionLayout,
  SessionResults: AdventureSessionResults,
};
