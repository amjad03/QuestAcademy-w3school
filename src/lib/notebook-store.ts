"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Note {
  text: string;
  updatedAt: string;
}

export interface Bookmark {
  title: string;
  href: string;
  addedAt: string;
}

export interface Doubt {
  id: string;
  lessonId: string;
  title: string;
  text: string;
  createdAt: string;
  resolved: boolean;
}

export interface NotebookState {
  /** Keyed by lesson id ("<subject>/<topic>/<lesson>"). */
  notes: Record<string, Note>;
  bookmarks: Record<string, Bookmark>;
  doubts: Doubt[];

  setNote: (lessonId: string, text: string) => void;
  removeNote: (lessonId: string) => void;
  toggleBookmark: (lessonId: string, meta: { title: string; href: string }) => boolean;
  addDoubt: (input: { lessonId: string; title: string; text: string }) => Doubt;
  setDoubtResolved: (id: string, resolved: boolean) => void;
  removeDoubt: (id: string) => void;
}

const now = () => new Date().toISOString();
const newId = () => `d_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;

export const useNotebook = create<NotebookState>()(
  persist(
    (set, get) => ({
      notes: {},
      bookmarks: {},
      doubts: [],

      setNote: (lessonId, text) =>
        set((s) => {
          if (!text.trim()) {
            const rest = { ...s.notes };
            delete rest[lessonId];
            return { notes: rest };
          }
          return { notes: { ...s.notes, [lessonId]: { text, updatedAt: now() } } };
        }),

      removeNote: (lessonId) =>
        set((s) => {
          const rest = { ...s.notes };
          delete rest[lessonId];
          return { notes: rest };
        }),

      toggleBookmark: (lessonId, meta) => {
        const has = Boolean(get().bookmarks[lessonId]);
        set((s) => {
          const next = { ...s.bookmarks };
          if (has) delete next[lessonId];
          else next[lessonId] = { title: meta.title, href: meta.href, addedAt: now() };
          return { bookmarks: next };
        });
        return !has;
      },

      addDoubt: ({ lessonId, title, text }) => {
        const doubt: Doubt = { id: newId(), lessonId, title: title.trim(), text: text.trim(), createdAt: now(), resolved: false };
        set((s) => ({ doubts: [doubt, ...s.doubts] }));
        return doubt;
      },

      setDoubtResolved: (id, resolved) => set((s) => ({ doubts: s.doubts.map((d) => (d.id === id ? { ...d, resolved } : d)) })),

      removeDoubt: (id) => set((s) => ({ doubts: s.doubts.filter((d) => d.id !== id) })),
    }),
    {
      name: "qa-notebook",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      // Persist data only; actions are recreated on load.
      partialize: (s) => Object.fromEntries(Object.entries(s).filter(([, v]) => typeof v !== "function")) as unknown as NotebookState,
    },
  ),
);

/** Course slug from a lesson id. */
export const courseOf = (lessonId: string) => lessonId.split("/")[0] ?? lessonId;

export const titleCase = (slug: string) => slug.replace(/-/g, " ").replace(/^\w/, (m) => m.toUpperCase());

/** Build a Markdown document of everything in the notebook. */
export function notebookToMarkdown(s: Pick<NotebookState, "notes" | "bookmarks" | "doubts">, lessonTitle: (id: string) => string, lessonHref: (id: string) => string) {
  const lines: string[] = ["# Quest Academy notebook", "", `_Exported ${new Date().toLocaleDateString()}_`, ""];
  const notes = Object.entries(s.notes).sort((a, b) => a[0].localeCompare(b[0]));
  lines.push("## Notes", "");
  if (!notes.length) lines.push("_No notes yet._", "");
  let course = "";
  for (const [id, n] of notes) {
    const c = courseOf(id);
    if (c !== course) {
      course = c;
      lines.push(`### ${titleCase(c)}`, "");
    }
    lines.push(`#### ${lessonTitle(id)}`, "", n.text.trim(), "", `[Open lesson](${lessonHref(id)}) · updated ${new Date(n.updatedAt).toLocaleDateString()}`, "");
  }
  lines.push("## Bookmarks", "");
  const marks = Object.entries(s.bookmarks);
  if (!marks.length) lines.push("_No bookmarks yet._", "");
  for (const [id, b] of marks) lines.push(`- [${b.title}](${b.href}) — ${titleCase(courseOf(id))}`);
  if (marks.length) lines.push("");
  lines.push("## Doubts", "");
  if (!s.doubts.length) lines.push("_No doubts recorded._", "");
  for (const d of s.doubts) {
    lines.push(`- [${d.resolved ? "x" : " "}] **${d.title}** — ${lessonTitle(d.lessonId)}`);
    if (d.text) lines.push(`  ${d.text.replace(/\n+/g, " ")}`);
  }
  lines.push("");
  return lines.join("\n");
}
