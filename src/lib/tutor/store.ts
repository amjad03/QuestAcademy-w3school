"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/** Grown-up controls for Ask Questy. Lives on this device (guest mode friendly). */
export interface TutorPrefs {
  /** Parent/learner switch. When false the launcher is hidden everywhere. */
  tutorAllowed: boolean;
  setTutorAllowed: (v: boolean) => void;
}

export const useTutorPrefs = create<TutorPrefs>()(
  persist(
    (set) => ({
      tutorAllowed: true,
      setTutorAllowed: (tutorAllowed) => set({ tutorAllowed }),
    }),
    { name: "qa-tutor", storage: createJSONStorage(() => localStorage), version: 1 },
  ),
);
