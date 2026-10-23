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
  updatedAt?: string;
  resolved: boolean;
}

export interface NotebookState {
  /** Keyed by lesson id ("<subject>/<topic>/<lesson>"). */
  notes: Record<string, Note>;
  bookmarks: Record<string, Bookmark>;
  doubts: Doubt[];
  /**
   * When something was deleted, keyed "note:<lesson>", "bm:<lesson>" or
   * "doubt:<id>". Sync uses it so another device can't bring the item back.
   */
  removed: Record<string, string>;

  setNote: (lessonId: string, text: string) => void;
  removeNote: (lessonId: string) => void;
  toggleBookmark: (lessonId: string, meta: { title: string; href: string }) => boolean;
  addDoubt: (input: { lessonId: string; title: string; text: string }) => Doubt;
  updateDoubt: (id: string, patch: { title?: string; text?: string }) => void;
  setDoubtResolved: (id: string, resolved: boolean) => void;
  removeDoubt: (id: string) => void;
  replaceNotebook: (data: NotebookData) => void;
  resetNotebook: () => void;
}

export type NotebookData = Pick<NotebookState, "notes" | "bookmarks" | "doubts" | "removed">;

const now = () => new Date().toISOString();
const newId = () => `d_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;

export const useNotebook = create<NotebookState>()(
  persist(
    (set, get) => ({
      notes: {},
      bookmarks: {},
      doubts: [],
      removed: {},

      setNote: (lessonId, text) =>
        set((s) => {
          if (!text.trim()) {
            const rest = { ...s.notes };
            delete rest[lessonId];
            return { notes: rest, removed: { ...s.removed, [`note:${lessonId}`]: now() } };
          }
          return { notes: { ...s.notes, [lessonId]: { text, updatedAt: now() } } };
        }),

      removeNote: (lessonId) =>
        set((s) => {
          const rest = { ...s.notes };
          delete rest[lessonId];
          return { notes: rest, removed: { ...s.removed, [`note:${lessonId}`]: now() } };
        }),

      toggleBookmark: (lessonId, meta) => {
        const has = Boolean(get().bookmarks[lessonId]);
        set((s) => {
          const next = { ...s.bookmarks };
          if (has) delete next[lessonId];
          else next[lessonId] = { title: meta.title, href: meta.href, addedAt: now() };
          return has ? { bookmarks: next, removed: { ...s.removed, [`bm:${lessonId}`]: now() } } : { bookmarks: next };
        });
        return !has;
      },

      addDoubt: ({ lessonId, title, text }) => {
        const doubt: Doubt = { id: newId(), lessonId, title: title.trim(), text: text.trim(), createdAt: now(), resolved: false };
        set((s) => ({ doubts: [doubt, ...s.doubts] }));
        return doubt;
      },

      updateDoubt: (id, patch) =>
        set((s) => ({
          doubts: s.doubts.map((d) =>
            d.id === id ? { ...d, ...(patch.title !== undefined && patch.title.trim() ? { title: patch.title.trim() } : {}), ...(patch.text !== undefined ? { text: patch.text.trim() } : {}), updatedAt: now() } : d,
          ),
        })),

      setDoubtResolved: (id, resolved) => set((s) => ({ doubts: s.doubts.map((d) => (d.id === id ? { ...d, resolved, updatedAt: now() } : d)) })),

      removeDoubt: (id) => set((s) => ({ doubts: s.doubts.filter((d) => d.id !== id), removed: { ...s.removed, [`doubt:${id}`]: now() } })),

      replaceNotebook: (data) => set({ notes: data.notes, bookmarks: data.bookmarks, doubts: data.doubts, removed: data.removed }),

      resetNotebook: () => set({ notes: {}, bookmarks: {}, doubts: [], removed: {} }),
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

export const notebookSnapshot = (): NotebookData => {
  const { notes, bookmarks, doubts, removed } = useNotebook.getState();
  return { notes, bookmarks, doubts, removed: removed ?? {} };
};

const later = (a?: string, b?: string) => ((a ?? "") >= (b ?? "") ? a : b);

/** Combine two copies of the notebook: newest edit wins, deletions stick. */
export function mergeNotebooks(a: Partial<NotebookData>, b: Partial<NotebookData>): NotebookData {
  const cutoff = new Date(Date.now() - 180 * 864e5).toISOString();
  const removed: Record<string, string> = {};
  for (const src of [a.removed ?? {}, b.removed ?? {}]) for (const [k, v] of Object.entries(src)) if (v >= cutoff) removed[k] = later(removed[k], v)!;
  const alive = (key: string, at: string) => !removed[key] || removed[key] < at;

  const notes: Record<string, Note> = {};
  for (const src of [a.notes ?? {}, b.notes ?? {}]) for (const [k, n] of Object.entries(src)) if (!notes[k] || n.updatedAt > notes[k].updatedAt) notes[k] = n;
  for (const k of Object.keys(notes)) if (!alive(`note:${k}`, notes[k].updatedAt)) delete notes[k];

  const bookmarks: Record<string, Bookmark> = {};
  for (const src of [a.bookmarks ?? {}, b.bookmarks ?? {}]) for (const [k, m] of Object.entries(src)) if (!bookmarks[k] || m.addedAt > bookmarks[k].addedAt) bookmarks[k] = m;
  for (const k of Object.keys(bookmarks)) if (!alive(`bm:${k}`, bookmarks[k].addedAt)) delete bookmarks[k];

  const stamp = (d: Doubt) => d.updatedAt ?? d.createdAt;
  const byId = new Map<string, Doubt>();
  for (const d of [...(a.doubts ?? []), ...(b.doubts ?? [])]) {
    const cur = byId.get(d.id);
    if (!cur || stamp(d) > stamp(cur)) byId.set(d.id, d);
  }
  const doubts = Array.from(byId.values())
    .filter((d) => alive(`doubt:${d.id}`, stamp(d)))
    .sort((x, y) => y.createdAt.localeCompare(x.createdAt));

  return { notes, bookmarks, doubts, removed };
}

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
