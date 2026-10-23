"use client";

import type { CompetitionKind, Stage } from "@/content/competitions";
import { useT } from "@/i18n";

/** Translated stage labels, keyed by stage id. */
export function useStageLabels(): Record<Stage, string> {
  const t = useT();
  return {
    "6-8": t("comp.stage.6-8", "Classes 6–8"),
    "9-10": t("comp.stage.9-10", "Classes 9–10"),
    "11-12": t("comp.stage.11-12", "Classes 11–12"),
    ug: t("comp.stage.ug", "Undergraduate"),
    grad: t("comp.stage.grad", "Graduate"),
  };
}

/** Translated competition kind labels. */
export function useKindLabels(): Record<CompetitionKind, string> {
  const t = useT();
  return {
    olympiad: t("comp.kind.olympiad", "Olympiad"),
    entrance: t("comp.kind.entrance", "Entrance exam"),
    scholarship: t("comp.kind.scholarship", "Scholarship"),
    service: t("comp.kind.service", "Service exam"),
  };
}
