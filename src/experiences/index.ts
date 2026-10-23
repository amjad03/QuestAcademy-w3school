"use client";

import type { ModeId } from "@/lib/modes";
import { useLearner } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import { useHydrated } from "@/components/providers";
import type { Experience } from "./types";
import { ClassicShell } from "./shared/ClassicShell";
import { ClassicHome } from "./shared/ClassicHome";
import { ClassicLessonLayout } from "./shared/ClassicLessonLayout";
import { ClassicSessionLayout, ClassicSessionResults } from "./shared/ClassicSession";
import { experience as sprout } from "./sprout";
import { experience as explore } from "./explore";
import { experience as adventure } from "./adventure";
import { experience as focus } from "./focus";
import { experience as mastery } from "./mastery";
import { experience as research } from "./research";
import { experience as professional } from "./professional";

export type * from "./types";

export const EXPERIENCES: Record<ModeId, Experience> = { sprout, explore, adventure, focus, mastery, research, professional };

/** The original design, used when the learner picks the Classic or Studio skin. */
export const CLASSIC: Omit<Experience, "id"> = {
  Shell: ClassicShell,
  Home: ClassicHome,
  LessonLayout: ClassicLessonLayout,
  SessionLayout: ClassicSessionLayout,
  SessionResults: ClassicSessionResults,
};

/**
 * The experience to render. "Age designs" (the default) gives each profile
 * its own; Classic and Studio roll everyone back to the shared original.
 */
export function useExperience(): Omit<Experience, "id"> & { id: ModeId } {
  const mode = useMode();
  const hydrated = useHydrated();
  const stored = useLearner((s) => s.settings.skin ?? "modes");
  const skin = hydrated ? stored : "modes";
  return skin === "modes" ? EXPERIENCES[mode.id] : { id: mode.id, ...CLASSIC };
}
