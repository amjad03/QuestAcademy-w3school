"use client";

import { ProfessionalHome } from "@/components/modes/professional/Home";
import type { Experience } from "../types";
import { ProfessionalShell } from "./Shell";
import { ProfessionalLessonLayout } from "./Lesson";
import { ProfessionalSessionLayout, ProfessionalSessionResults } from "./Session";

/** Home: the goal dashboard (pathways, schedule, certificates) inside the professional frame. */
function Home() {
  return (
    <div className="pro-home">
      <ProfessionalHome />
    </div>
  );
}

/** Professional: a modern career-learning product for working adults. */
export const experience: Experience = {
  id: "professional",
  Shell: ProfessionalShell,
  Home,
  LessonLayout: ProfessionalLessonLayout,
  SessionLayout: ProfessionalSessionLayout,
  SessionResults: ProfessionalSessionResults,
};
