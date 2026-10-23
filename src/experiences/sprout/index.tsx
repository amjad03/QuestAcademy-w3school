"use client";

import type { Experience } from "../types";
import { ClassicShell } from "../shared/ClassicShell";
import { ClassicHome } from "../shared/ClassicHome";
import { ClassicLessonLayout } from "../shared/ClassicLessonLayout";
import { ClassicSessionLayout, ClassicSessionResults } from "../shared/ClassicSession";

/** sprout: placeholder — replace each piece with this profile's own design. */
export const experience: Experience = {
  id: "sprout",
  Shell: ClassicShell,
  Home: ClassicHome,
  LessonLayout: ClassicLessonLayout,
  SessionLayout: ClassicSessionLayout,
  SessionResults: ClassicSessionResults,
};
