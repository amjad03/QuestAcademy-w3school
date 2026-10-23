"use client";

import { Check, Compass, FlaskConical, GraduationCap, Map, Sparkles, Sprout, Target } from "lucide-react";
import clsx from "clsx";
import { MODE_LIST, type ModeId } from "@/lib/modes";

const ICON: Record<ModeId, typeof Map> = { sprout: Sprout, research: FlaskConical, explore: Sparkles, adventure: Map, focus: Target, mastery: GraduationCap, professional: Compass };
export const MODE_COLOR: Record<ModeId, string> = { sprout: "#FF8A3D", research: "#0F766E", explore: "#EC4899", adventure: "#2EBE70", focus: "#2F6BFF", mastery: "#7C4DFF", professional: "#334155" };

/** Five selectable experience-profile cards. */
export function ModePicker({ value, recommended, onChange }: { value: ModeId | null; recommended?: ModeId; onChange: (m: ModeId) => void }) {
  return (
    <div className="grid gap-3">
      {MODE_LIST.map((m) => {
        const I = ICON[m.id];
        const active = value === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            aria-pressed={active}
            className={clsx(
              "relative flex items-start gap-4 rounded-2xl border-2 border-b-4 p-4 text-left transition active:translate-y-[2px] active:border-b-2",
              active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
            )}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: MODE_COLOR[m.id] }}>
              <I className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold text-muted">{m.number}</span>
                <span className="text-lg font-extrabold">{m.name} mode</span>
                {recommended === m.id && <span className="rounded-lg bg-good-soft px-2 py-0.5 text-xs font-extrabold text-good-shade">Recommended</span>}
              </span>
              <span className="block text-sm font-bold text-muted">
                {m.audience} · {m.ages}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-6 text-ink/80">{m.summary}</span>
            </span>
            {active && (
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                <Check className="h-4 w-4" strokeWidth={3.5} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
