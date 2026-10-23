"use client";

import type { ModeId } from "@/lib/modes";
import type { Experience } from "../types";
import { ClassicShell } from "../shared/ClassicShell";
import { ClassicHome } from "../shared/ClassicHome";
import { KhanLessonLayout } from "./lesson/KhanLessonLayout";
import { KhanSessionLayout } from "./session/KhanSessionLayout";
import { KhanSessionResults } from "./session/KhanSessionResults";

/**
 * The Khan Academy-style experience shared by every learner from Class 6 up
 * (adventure, focus, mastery, research, professional). One structure, tuned
 * per stage through the home screen and stage-specific tools.
 * Placeholder: pieces are replaced by the Khan build.
 */
export function khanExperience(id: ModeId): Experience {
  return {
    id,
    Shell: ClassicShell,
    Home: ClassicHome,
    LessonLayout: KhanLessonLayout,
    SessionLayout: KhanSessionLayout,
    SessionResults: KhanSessionResults,
  };
}
