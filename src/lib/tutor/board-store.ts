"use client";

import { create } from "zustand";
import { persist, createJSONStorage, type StateStorage } from "zustand/middleware";
import type { BoardRecord } from "@/components/board/ops";

/** Recent tutor boards on this device, for replay (newest first, max 6). */
export interface SavedBoard {
  id: string;
  topic: string;
  at: string;
  record: BoardRecord;
  says: { at: number; text: string }[];
}

interface BoardStore {
  boards: SavedBoard[];
  save: (b: SavedBoard) => void;
  remove: (id: string) => void;
}

// Storage can be missing or full (private windows, quotas): never let that break the tutor.
const safe: StateStorage = {
  getItem: (k) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  setItem: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* ignore */
    }
  },
  removeItem: (k) => {
    try {
      localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  },
};

export const useBoards = create<BoardStore>()(
  persist(
    (set) => ({
      boards: [],
      save: (b) => set((s) => ({ boards: [b, ...s.boards.filter((x) => x.id !== b.id)].slice(0, 6) })),
      remove: (id) => set((s) => ({ boards: s.boards.filter((x) => x.id !== id) })),
    }),
    { name: "qa-tutor-boards", storage: createJSONStorage(() => safe) },
  ),
);
