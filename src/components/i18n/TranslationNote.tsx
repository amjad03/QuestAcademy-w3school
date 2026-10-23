"use client";

import { Languages } from "lucide-react";
import { useLearner } from "@/lib/store";
import { useT } from "@/i18n";
import { useHasContentTranslation } from "@/i18n/content";

/** "Machine-translated · Show original" line above translated lessons. */
export function TranslationNote({ course }: { course: string }) {
  const t = useT();
  const has = useHasContentTranslation(course);
  const original = useLearner((s) => s.settings.contentOriginal ?? false);
  const setSettings = useLearner((s) => s.setSettings);
  if (!has) return null;
  return (
    <p className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl bg-surface-2 px-3 py-2 text-sm font-semibold text-muted">
      <Languages className="h-4 w-4 shrink-0" aria-hidden />
      <span>{original ? t("content.showingOriginal", "Showing the original English.") : t("content.machine", "Translated by AI · being reviewed by teachers.")}</span>
      <button onClick={() => setSettings({ contentOriginal: !original })} className="font-extrabold text-accent hover:underline">
        {original ? t("content.showTranslation", "Show translation") : t("content.showOriginal", "Show original")}
      </button>
    </p>
  );
}
