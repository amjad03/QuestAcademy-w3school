"use client";

import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";
import { useTutorPrefs } from "@/lib/tutor/store";

/** Grown-up switch for Ask Questy (for the parent dashboard or settings page). */
export function TutorToggle({ className }: { className?: string }) {
  const t = useT();
  const hydrated = useHydrated();
  const allowed = useTutorPrefs((s) => s.tutorAllowed);
  const set = useTutorPrefs((s) => s.setTutorAllowed);
  const on = hydrated ? allowed : true;
  return (
    <label className={className ?? "flex cursor-pointer items-start justify-between gap-4"}>
      <span className="min-w-0">
        <span className="block font-black">{t("tutor.toggle.title", "Ask Questy (AI tutor)")}</span>
        <span className="block text-sm font-semibold text-muted">{t("tutor.toggle.body", "Lets the learner ask an AI tutor for hints in lessons and practice. It guides with questions and won’t give answers to open questions.")}</span>
      </span>
      <input type="checkbox" role="switch" className="mt-1 h-5 w-5 shrink-0 accent-[rgb(var(--accent))]" checked={on} onChange={(e) => set(e.target.checked)} aria-checked={on} />
    </label>
  );
}
