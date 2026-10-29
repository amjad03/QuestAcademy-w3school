"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, CircleHelp, CircleSlash, FastForward, GraduationCap, Hand, Lightbulb, Repeat2, Rewind, Sparkles, TriangleAlert } from "lucide-react";
import { useT } from "@/i18n";
import type { TutorSession } from "@/lib/tutor/useTutorSession";
import type { TutorLanguage } from "@/lib/tutor/live";

/** The tutor's verdict on the last answer, and what it's doing about it. */
export function VerdictBadge({ s }: { s: TutorSession }) {
  const t = useT();
  const e = s.evaluation;
  if (!e) return null;
  const look = {
    correct: { cls: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200", icon: CheckCircle2, label: t("tutor.verdict.correct", "Correct") },
    partial: { cls: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200", icon: TriangleAlert, label: t("tutor.verdict.partial", "Partly right") },
    misconception: { cls: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-200", icon: CircleSlash, label: t("tutor.verdict.misconception", "Let's fix an idea") },
    unclear: { cls: "bg-surface-2 text-muted", icon: CircleHelp, label: t("tutor.verdict.unclear", "Couldn't tell") },
  }[e.verdict];
  const BR: Record<string, string> = {
    reexplain: t("tutor.branch.reexplain", "Explaining it a different way"),
    easier: t("tutor.branch.easier", "Trying an easier step"),
    harder: t("tutor.branch.harder", "Level up: a harder one"),
    next: t("tutor.branch.next", "Moving on"),
    resume: t("tutor.branch.resume", "Back to the lesson"),
  };
  return (
    <div className={clsx("rounded-xl px-3 py-2 text-sm", look.cls)} data-testid="verdict" data-verdict={e.verdict}>
      <p className="flex items-center gap-1.5 font-extrabold">
        <look.icon className="h-4 w-4 shrink-0" /> {look.label}
        {s.branch && <span className="ml-auto text-xs font-bold opacity-80">→ {BR[s.branch]}</span>}
      </p>
      {e.note && <p className="mt-0.5 font-semibold">{e.note}</p>}
    </div>
  );
}

/** One-tap student intents: the things a child says to a real teacher. */
export function IntentBar({ s, language, doubt }: { s: TutorSession; language: TutorLanguage; doubt?: boolean }) {
  const t = useT();
  const [, tick] = useState(0);
  useEffect(() => {
    if (!s.waitingSince) return;
    const id = setTimeout(() => tick((n) => n + 1), 46000);
    return () => clearTimeout(id);
  }, [s.waitingSince]);
  const stuck = Boolean(s.waitingSince && s.check?.q && Date.now() - s.waitingSince > 45000 && !s.busy);
  const chip = "btn-ghost inline-flex shrink-0 items-center gap-1 rounded-xl border-2 border-line px-2.5 py-1 text-sm font-bold";
  const other: TutorLanguage = language === "Hindi" ? "English" : "Hindi";
  return (
    <div className="space-y-2">
      {stuck && (
        <button type="button" onClick={() => s.intent("hint")} className="w-full rounded-xl border-2 border-dashed border-accent px-3 py-2 text-left text-sm font-bold text-accent">
          <Lightbulb className="mr-1 inline h-4 w-4" /> {t("tutor.intent.stuck", "Take your time. Stuck? Tap for a small hint (not the answer).")}
        </button>
      )}
      <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible" role="group" aria-label={t("tutor.intent.aria", "Tell the tutor")} data-testid="intent-bar">
        {s.busy && (
          <button type="button" onClick={() => s.intent("wait")} className={chip}>
            <Hand className="h-4 w-4" /> {t("tutor.intent.wait", "Wait")}
          </button>
        )}
        <button type="button" onClick={() => s.intent("confused")} className={chip}>
          <CircleHelp className="h-4 w-4" /> {t("tutor.intent.confused", "I didn't get this")}
        </button>
        <button type="button" onClick={() => s.intent("repeat")} className={chip}>
          <Repeat2 className="h-4 w-4" /> {t("tutor.intent.repeat", "Explain again")}
        </button>
        <button type="button" onClick={() => s.intent("example")} className={chip}>
          <Sparkles className="h-4 w-4" /> {t("tutor.intent.example", "Give an example")}
        </button>
        {(doubt || s.check?.kind === "board" || s.check?.q) && (
          <button type="button" onClick={() => s.intent("hint")} className={chip}>
            <Lightbulb className="h-4 w-4" /> {t("tutor.intent.hint", "Hint")}
          </button>
        )}
        <button type="button" onClick={() => s.intent("slower")} className={clsx(chip, s.pace === "slower" && "border-accent text-accent")} aria-pressed={s.pace === "slower"}>
          <Rewind className="h-4 w-4" /> {t("tutor.intent.slower", "Slower")}
        </button>
        <button type="button" onClick={() => s.intent("faster")} className={clsx(chip, s.pace === "faster" && "border-accent text-accent")} aria-pressed={s.pace === "faster"}>
          <FastForward className="h-4 w-4" /> {t("tutor.intent.faster", "Faster")}
        </button>
        <button type="button" onClick={() => s.intent(s.tutorLevel === "exam" ? "simpler" : "exam")} className={clsx(chip, s.tutorLevel === "exam" && "border-accent text-accent")} aria-pressed={s.tutorLevel === "exam"}>
          <GraduationCap className="h-4 w-4" /> {s.tutorLevel === "exam" ? t("tutor.intent.simpler", "Simpler") : t("tutor.intent.exam", "Exam level")}
        </button>
        <button type="button" onClick={() => s.intent("language", other)} className={chip}>
          {other === "Hindi" ? "हिन्दी में" : "In English"}
        </button>
      </div>
    </div>
  );
}
