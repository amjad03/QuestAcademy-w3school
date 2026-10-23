"use client";

import { FocusHome } from "@/components/modes/focus/Home";
import type { Experience } from "../types";
import { FocusShell } from "./Shell";
import { FocusLessonLayout } from "./LessonLayout";
import { FocusSessionLayout, FocusSessionResults } from "./Session";

/** Focus (15–18, Classes 9–12, PUC, board exams, NEET/JEE): an exam command centre. */
export const experience: Experience = {
  id: "focus",
  Shell: FocusShell,
  Home: FocusHome,
  LessonLayout: FocusLessonLayout,
  SessionLayout: FocusSessionLayout,
  SessionResults: FocusSessionResults,
};
