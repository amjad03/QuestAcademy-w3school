"use client";

import type { Experience } from "../types";
import { MasteryShell } from "./Shell";
import { MasteryHome } from "./Home";
import { MasteryLessonLayout } from "./LessonLayout";
import { MasterySessionLayout, MasterySessionResults } from "./Session";

/** Mastery (undergraduate): an academic workspace that feels like an IDE. */
export const experience: Experience = {
  id: "mastery",
  Shell: MasteryShell,
  Home: MasteryHome,
  LessonLayout: MasteryLessonLayout,
  SessionLayout: MasterySessionLayout,
  SessionResults: MasterySessionResults,
};
