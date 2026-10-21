"use client";

import { Check } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";

type Skin = "classic" | "studio";

const SKINS: { id: Skin; name: string; blurb: string; swatch: string[] }[] = [
  { id: "classic", name: "Classic", blurb: "The original Quest look: rounded, chunky buttons, Quest Blue and Nunito. Best for younger learners.", swatch: ["#2F6BFF", "#2EBE70", "#FFB800", "#FF4B4B"] },
  { id: "studio", name: "Studio", blurb: "An editorial system: hairline borders, indigo and teal, Inter typography and calmer surfaces. Built for long study sessions.", swatch: ["#4F46E5", "#0D9488", "#D97706", "#DC2626"] },
];

/** Switch between the two design systems. Classic is always one tap away. */
export function SkinPicker() {
  const skin = useLearner((s) => s.settings.skin ?? "classic");
  const setSettings = useLearner((s) => s.setSettings);
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
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
              <span className="flex items-center gap-2 text-lg font-extrabold">
                {k.name}
                {k.id === "classic" && <span className="chip">Default</span>}
              </span>
              <span className="text-sm font-semibold leading-6 text-muted">{k.blurb}</span>
              {active && (
                <span className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
                  <Check className="h-4 w-4" strokeWidth={3.5} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm font-semibold text-muted">Both skins share the same components and content; switching is instant and you can roll back to Classic any time.</p>
    </div>
  );
}
