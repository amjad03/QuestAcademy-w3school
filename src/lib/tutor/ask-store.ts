"use client";

import { create } from "zustand";

/** What the current page tells the floating "Ask Questy" tutor (lesson, question on screen…). */
export interface AskContext {
  courseTitle: string;
  lessonTitle: string;
  lessonSummary?: string;
  questionText?: string;
  answered?: boolean;
  correct?: boolean;
  answerText?: string;
  placement?: "lesson" | "session";
}

interface AskStore {
  ctx: AskContext | null;
  /** A page-provided slot shows its own launcher, so the floating button hides. */
  slotted: boolean;
  open: boolean;
  setCtx: (c: AskContext | null) => void;
  setSlotted: (v: boolean) => void;
  setOpen: (v: boolean) => void;
}

export const useAsk = create<AskStore>()((set) => ({
  ctx: null,
  slotted: false,
  open: false,
  setCtx: (ctx) => set({ ctx }),
  setSlotted: (slotted) => set({ slotted }),
  setOpen: (open) => set({ open }),
}));
