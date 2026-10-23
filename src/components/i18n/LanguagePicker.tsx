"use client";

import { Check, Languages } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { LOCALES, useLocale, useT, type Locale } from "@/i18n";

/** Grid of languages in their own scripts. `compact` renders a single select. */
export function LanguagePicker({ compact, onPick }: { compact?: boolean; onPick?: (l: Locale) => void }) {
  const locale = useLocale();
  const setSettings = useLearner((s) => s.setSettings);
  const t = useT();
  const pick = (l: Locale) => {
    setSettings({ locale: l });
    onPick?.(l);
  };

  if (compact)
    return (
      <label className="flex items-center gap-2 text-sm font-bold text-muted">
        <Languages className="h-4 w-4" aria-hidden />
        <span className="sr-only">{t("lang.label", "Language")}</span>
        <select value={locale} onChange={(e) => pick(e.target.value as Locale)} className="rounded-lg border border-line bg-surface px-2 py-1 text-ink">
          {LOCALES.map((l) => (
            <option key={l.id} value={l.id}>
              {l.native}
            </option>
          ))}
        </select>
      </label>
    );

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {LOCALES.map((l) => {
          const active = l.id === locale;
          return (
            <button
              key={l.id}
              onClick={() => pick(l.id)}
              aria-pressed={active}
              lang={l.bcp47}
              className={clsx("relative flex flex-col items-start rounded-xl border-2 px-3 py-2.5 text-left transition", active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2")}
            >
              <span className="text-lg font-extrabold">{l.native}</span>
              <span className="text-xs font-semibold text-muted">{l.english}</span>
              {active && <Check className="absolute right-2 top-2 h-4 w-4 text-accent" strokeWidth={3} />}
            </button>
          );
        })}
      </div>
      {locale !== "en" && <p className="mt-3 text-sm font-semibold text-muted">{t("lang.machine", "Translations are machine-made and are being reviewed by teachers. English is always available.")}</p>}
    </div>
  );
}
