"use client";

import { useHydrated } from "@/components/providers";
import { useLearner } from "./store";
import { MODES, resolveMode, type ModeConfig } from "./modes";

export { resolveMode };

/** Current experience profile. Before hydration returns Adventure (the neutral default). */
export function useMode(): ModeConfig {
  const hydrated = useHydrated();
  const mode = useLearner((s) => resolveMode(s.profile));
  return MODES[hydrated ? mode : "adventure"];
}

/** Non-hook access for stores and callbacks. */
export function currentMode(): ModeConfig {
  return MODES[resolveMode(useLearner.getState().profile)];
}
