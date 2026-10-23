"use client";

import type { Experience } from "../types";
import { ResearchShell } from "./Shell";
import { ResearchHome } from "./Home";
import { ResearchLessonLayout } from "./Lesson";
import { ResearchSessionLayout, ResearchSessionResults } from "./Session";

/** Research (postgraduate & research): a quiet reading room — journal typography, no game layer. */
export const experience: Experience = {
  id: "research",
  Shell: ResearchShell,
  Home: ResearchHome,
  LessonLayout: ResearchLessonLayout,
  SessionLayout: ResearchSessionLayout,
  SessionResults: ResearchSessionResults,
};
