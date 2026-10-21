"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ClassGroupId } from "./classes";

interface LibraryState {
  /** Most recently opened class groups, newest first. */
  recent: ClassGroupId[];
  visit: (id: ClassGroupId) => void;
}

/** Small persisted store for Library-only conveniences. */
export const useLibrary = create<LibraryState>()(
  persist(
    (set) => ({
      recent: [],
      visit: (id) => set((s) => ({ recent: [id, ...s.recent.filter((x) => x !== id)].slice(0, 4) })),
    }),
    { name: "qa-library", storage: createJSONStorage(() => localStorage) },
  ),
);
