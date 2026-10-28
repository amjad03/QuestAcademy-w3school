"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Mascot } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";
import { useAsk, type AskContext } from "@/lib/tutor/ask-store";

export type AskQuestyProps = AskContext;

const SLOT_ID = { lesson: "tutor-slot-lesson", session: "tutor-slot" } as const;

/**
 * Tells the floating tutor (TutorFab, mounted once in the app shell) what is on
 * this page — lesson, practice question, whether it was answered. If the layout
 * has a launcher slot, a small "Ask Questy" button is portalled into it.
 */
export function AskQuesty({ placement = "lesson", ...ctx }: AskQuestyProps) {
  const hydrated = useHydrated();
  const t = useT();
  const setCtx = useAsk((s) => s.setCtx);
  const setOpen = useAsk((s) => s.setOpen);
  const setSlotted = useAsk((s) => s.setSlotted);
  const open = useAsk((s) => s.open);
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  const key = JSON.stringify([placement, ctx.courseTitle, ctx.lessonTitle, ctx.lessonSummary, ctx.questionText, ctx.answered, ctx.correct, ctx.answerText]);
  useEffect(() => {
    const c: AskContext = { ...ctx, placement };
    setCtx(c);
    return () => {
      if (useAsk.getState().ctx === c) setCtx(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setCtx]);

  useEffect(() => {
    if (!hydrated) return;
    const find = () => setSlot(document.getElementById(SLOT_ID[placement]));
    find();
    // Layouts may render the slot a frame later.
    const id = requestAnimationFrame(find);
    return () => cancelAnimationFrame(id);
  }, [hydrated, placement, ctx.lessonTitle]);

  useEffect(() => {
    setSlotted(Boolean(slot));
    return () => setSlotted(false);
  }, [slot, setSlotted]);

  if (!hydrated || !slot) return null;
  return createPortal(
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={open}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[13px] font-bold text-accent transition hover:border-accent hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Mascot pose="wave" size={20} animate={false} />
      {t("tutor.ask", "Ask Questy")}
    </button>,
    slot,
  );
}
