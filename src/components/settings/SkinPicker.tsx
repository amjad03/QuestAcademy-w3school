"use client";

import { Check } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { useT } from "@/i18n";

type Skin = "modes" | "classic" | "studio";

const SKINS: { id: Skin; name: string; blurb: string; swatch: string[] }[] = [
  { id: "modes", name: "Age designs", blurb: "Each age group gets its own app: navigation, lesson pages, practice and rewards made for that stage, from pre-primary to professional.", swatch: ["#FF6B9A", "#2EBE70", "#2F6BFF", "#0F172A"] },
  { id: "classic", name: "Classic", blurb: "The original Quest look for everyone: rounded, chunky buttons, Quest Blue and Nunito.", swatch: ["#2F6BFF", "#2EBE70", "#FFB800", "#FF4B4B"] },
  { id: "studio", name: "Studio", blurb: "An editorial system: hairline borders, indigo and teal, Inter typography and calmer surfaces. Built for long study sessions.", swatch: ["#4F46E5", "#0D9488", "#D97706", "#DC2626"] },
];

/** Switch between age designs and the two shared design systems. Classic is always one tap away. */
export function SkinPicker() {
  const skin = useLearner((s) => s.settings.skin ?? "modes");
  const setSettings = useLearner((s) => s.setSettings);
  const t = useT();
  const skinText: Record<Skin, { name: string; blurb: string }> = {
    modes: { name: t("settings.skin.modes.name", "Age designs"), blurb: t("settings.skin.modes.blurb", "Each age group gets its own app: navigation, lesson pages, practice and rewards made for that stage, from pre-primary to professional.") },
    classic: { name: t("settings.skin.classic.name", "Classic"), blurb: t("settings.skin.classic.blurb", "The original Quest look for everyone: rounded, chunky buttons, Quest Blue and Nunito.") },
    studio: { name: t("settings.skin.studio.name", "Studio"), blurb: t("settings.skin.studio.blurb", "An editorial system: hairline borders, indigo and teal, Inter typography and calmer surfaces. Built for long study sessions.") },
  };
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        {SKINS.map((k) => {
          const active = skin === k.id;
          return (
            <button
              key={k.id}
              onClick={() => setSettings({ skin: k.id })}
              aria-pressed={active}
              className={clsx("relative flex flex-col gap-3 rounded-2xl border-2 border-b-4 p-4 text-left transition active:translate-y-[2px] active:border-b-2", active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2")}
            >
              <span className="flex gap-1.5" aria-hidden>
                {k.swatch.map((c) => (
                  <span key={c} className="h-6 w-6 rounded-md" style={{ background: c }} />
                ))}
              </span>
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-extrabold leading-tight">
                <span className="whitespace-nowrap">{skinText[k.id].name}</span>
                {k.id === "modes" && <span className="chip">{t("settings.skin.default", "Default")}</span>}
              </span>
              <span className="text-sm font-semibold leading-6 text-muted">{skinText[k.id].blurb}</span>
              {active && (
                <span className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
                  <Check className="h-4 w-4" strokeWidth={3.5} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm font-semibold text-muted">{t("settings.skin.note", "All three share the same courses and progress; switching is instant, and Classic restores the original look any time.")}</p>
    </div>
  );
}
