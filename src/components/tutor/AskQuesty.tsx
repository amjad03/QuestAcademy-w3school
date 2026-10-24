"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Mascot } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { useParent } from "@/components/parent/store";
import { useMode } from "@/lib/useMode";
import { useT } from "@/i18n";
import { useTutorPrefs } from "@/lib/tutor/store";
import { TutorPanel } from "./TutorPanel";

export interface AskQuestyProps {
  courseTitle: string;
  lessonTitle: string;
  lessonSummary?: string;
  /** Practice question on screen (Md text incl. options). */
  questionText?: string;
  /** Learner has checked an answer and feedback is shown. */
  answered?: boolean;
  /** Whether that answer was correct. */
  correct?: boolean;
  /** Correct answer; only pass it once the learner has answered. */
  answerText?: string;
  /**
   * Where the launcher lives: "lesson" floats above the mobile tab bar,
   * "session" floats above the check/continue bar. If an element with the
   * matching slot id exists, the launcher is portalled into it instead.
   */
  placement?: "lesson" | "session";
}

const SLOT_ID = { lesson: "tutor-slot-lesson", session: "tutor-slot" } as const;

/** Parent store may later add `tutorAllowed`; read it if present (read-only). */
function useParentAllows() {
  return useParent((s) => (s as unknown as { tutorAllowed?: boolean }).tutorAllowed !== false);
}

export function AskQuesty({ placement = "lesson", ...ctx }: AskQuestyProps) {
  const hydrated = useHydrated();
  const mode = useMode();
  const t = useT();
  const allowed = useTutorPrefs((s) => s.tutorAllowed);
  const parentAllows = useParentAllows();
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    const find = () => setSlot(document.getElementById(SLOT_ID[placement]));
    find();
    // Layouts may render the slot a frame later.
    const id = requestAnimationFrame(find);
    return () => cancelAnimationFrame(id);
  }, [hydrated, placement, ctx.lessonTitle]);

  if (!hydrated || mode.id === "sprout" || !allowed || !parentAllows) return null;

  const young = mode.id === "explore";
  const label = t("tutor.ask", "Ask Questy");

  const launcher = slot ? (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={open}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[13px] font-bold text-accent transition hover:border-accent hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Mascot pose="wave" size={20} animate={false} />
      {label}
    </button>
  ) : (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={label}
      className={clsx(
        "fixed right-4 z-40 flex items-center gap-2 rounded-full border-2 border-accent-shade bg-accent py-1.5 pl-1.5 pr-4 font-black text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 md:right-6",
        // Session pages and young learners' lessons have a fixed action bar at the bottom: sit above it.
        // After answering, the feedback sheet is taller on phones: clear it too.
        placement === "session" && ctx.answered ? "bottom-[calc(12.5rem+env(safe-area-inset-bottom))] sm:bottom-32" : placement === "session" || young ? "bottom-[calc(8.5rem+env(safe-area-inset-bottom))] sm:bottom-32" : "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-6",
        open && "pointer-events-none opacity-0",
        young ? "text-base" : "text-sm",
      )}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/95">
        <Mascot pose="wave" size={28} animate={false} />
      </span>
      <span className={clsx(placement === "session" && "hidden sm:inline")}>{label}</span>
    </button>
  );

  return (
    <>
      {slot ? createPortal(launcher, slot) : launcher}
      {createPortal(<AnimatePresence>{open && <TutorPanel key="tutor" {...ctx} stage={mode.id} onClose={() => setOpen(false)} />}</AnimatePresence>, document.body)}
    </>
  );
}
