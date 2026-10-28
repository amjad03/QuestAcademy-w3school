"use client";

import dynamic from "next/dynamic";
import type { ModeId } from "@/lib/modes";
import { useLearner } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import { useHydrated } from "@/components/providers";
import type { Experience } from "./types";
import { ClassicShell } from "./shared/ClassicShell";
import { experience as sprout } from "./sprout";
import { experience as explore } from "./explore";
import { khanExperience } from "./khan";

// The Classic/Studio screens load only for learners who pick that skin.
const ClassicHome = dynamic(() => import("./shared/ClassicHome").then((m) => m.ClassicHome));
const ClassicLessonLayout = dynamic(() => import("./shared/ClassicLessonLayout").then((m) => m.ClassicLessonLayout));
const ClassicSessionLayout = dynamic(() => import("./shared/ClassicSession").then((m) => m.ClassicSessionLayout));
const ClassicSessionResults = dynamic(() => import("./shared/ClassicSession").then((m) => m.ClassicSessionResults));

export type * from "./types";

/** Duolingo-style for young children; one Khan Academy-style base for everyone from Class 6 up. */
export const EXPERIENCES: Record<ModeId, Experience> = {
  sprout,
  explore,
  adventure: khanExperience("adventure"),
  focus: khanExperience("focus"),
  mastery: khanExperience("mastery"),
  research: khanExperience("research"),
  professional: khanExperience("professional"),
};

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
