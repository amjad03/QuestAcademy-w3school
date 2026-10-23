"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, BookmarkCheck, CircleHelp, NotebookPen, X } from "lucide-react";
import clsx from "clsx";
import { useNotebook } from "@/lib/notebook-store";
import { useMode } from "@/lib/useMode";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";

interface Props {
  lessonId: string;
  title: string;
  href: string;
}

/** Compact per-lesson control row: bookmark, notes panel and a quick "add a doubt" form. */
export function NotebookDock({ lessonId, title, href }: Props) {
  const t = useT();
  const hydrated = useHydrated();
  const mode = useMode();
  const bookmarked = useNotebook((s) => Boolean(s.bookmarks[lessonId]));
  const hasNote = useNotebook((s) => Boolean(s.notes[lessonId]?.text));
  const openDoubts = useNotebook((s) => s.doubts.filter((d) => d.lessonId === lessonId && !d.resolved).length);
  const toggleBookmark = useNotebook((s) => s.toggleBookmark);
  const [panel, setPanel] = useState<"notes" | "doubt" | null>(null);

  const explore = mode.young;
  const isMarked = hydrated && bookmarked;

  useEffect(() => {
    setPanel(null);
  }, [lessonId]);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => toggleBookmark(lessonId, { title, href })}
        aria-pressed={isMarked}
        className={clsx("chip flex items-center gap-1.5 transition", isMarked ? "!border-accent !text-accent" : "hover:text-accent")}
      >
        {isMarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {explore ? (isMarked ? t("notebook.dock.savedForLater", "Saved for later") : t("notebook.dock.saveForLater", "Save for later")) : isMarked ? t("notebook.dock.bookmarked", "Bookmarked") : t("notebook.dock.bookmark", "Bookmark")}
      </button>

      {!explore && (
        <>
          <button type="button" onClick={() => setPanel((p) => (p === "notes" ? null : "notes"))} aria-expanded={panel === "notes"} className={clsx("chip flex items-center gap-1.5 transition", panel === "notes" ? "!border-accent !text-accent" : "hover:text-accent")}>
            <NotebookPen className="h-4 w-4" />
            {t("notebook.dock.notes", "Notes")}
            {hydrated && hasNote && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-label={t("notebook.dock.hasNote", "Has a note")} />}
          </button>
          <button type="button" onClick={() => setPanel((p) => (p === "doubt" ? null : "doubt"))} aria-expanded={panel === "doubt"} className={clsx("chip flex items-center gap-1.5 transition", panel === "doubt" ? "!border-accent !text-accent" : "hover:text-accent")}>
            <CircleHelp className="h-4 w-4" />
            {t("notebook.dock.addDoubt", "Add a doubt")}
            {hydrated && openDoubts > 0 && <span className="rounded-full bg-accent-soft px-1.5 text-[11px] font-bold text-accent tabular-nums">{openDoubts}</span>}
          </button>
          <Link href="/notebook" className="ml-auto text-xs font-bold text-muted hover:text-accent">
            {t("notebook.dock.openNotebook", "Open notebook")}
          </Link>
        </>
      )}

      {!explore && (
        <AnimatePresence>
          {panel === "notes" && <NotesPanel key="notes" lessonId={lessonId} title={title} onClose={() => setPanel(null)} />}
          {panel === "doubt" && <DoubtForm key="doubt" lessonId={lessonId} onClose={() => setPanel(null)} />}
        </AnimatePresence>
      )}
    </div>
  );
}

function NotesPanel({ lessonId, title, onClose }: { lessonId: string; title: string; onClose: () => void }) {
  const t = useT();
  const saved = useNotebook((s) => s.notes[lessonId]?.text ?? "");
  const updatedAt = useNotebook((s) => s.notes[lessonId]?.updatedAt);
  const setNote = useNotebook((s) => s.setNote);
  const [text, setText] = useState(saved);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    return () => clearTimeout(timer.current);
  }, []);

  const onChange = (v: string) => {
    setText(v);
    setStatus("saving");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setNote(lessonId, v);
      setStatus("saved");
    }, 500);
  };

  return (
    <motion.aside
      role="dialog"
      aria-label={t("notebook.notes.dialogLabel", "Notes for {title}", { title })}
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 40, opacity: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 36 }}
      className="card fixed bottom-4 right-4 top-4 z-40 flex w-[min(420px,calc(100vw-2rem))] flex-col p-5 shadow-xl"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="eyebrow">{t("notebook.dock.notes", "Notes")}</p>
          <h2 className="truncate font-black">{title}</h2>
        </div>
        <button type="button" onClick={onClose} className="btn-flat !p-1.5" aria-label={t("notebook.notes.close", "Close notes")}>
          <X className="h-4 w-4" />
        </button>
      </div>
      <textarea
        ref={ref}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("notebook.notes.placeholder", "Write what you want to remember from this lesson. Notes save automatically.")}
        className="input mt-4 min-h-0 flex-1 resize-none text-sm leading-relaxed"
      />
      <div className="mt-3 flex items-center justify-between text-xs font-semibold text-muted">
        <span aria-live="polite">{status === "saving" ? t("notebook.notes.saving", "Saving…") : status === "saved" ? t("notebook.notes.saved", "Saved") : updatedAt ? t("notebook.notes.lastSaved", "Last saved {date}", { date: new Date(updatedAt).toLocaleString() }) : t("notebook.notes.nothingSaved", "Nothing saved yet")}</span>
        <Link href="/notebook" className="font-bold hover:text-accent">
          {t("notebook.notes.allNotes", "All notes")}
        </Link>
      </div>
    </motion.aside>
  );
}

function DoubtForm({ lessonId, onClose }: { lessonId: string; onClose: () => void }) {
  const t = useT();
  const addDoubt = useNotebook((s) => s.addDoubt);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addDoubt({ lessonId, title, text });
    setTitle("");
    setText("");
    setDone(true);
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="basis-full overflow-hidden"
    >
      <div className="card mt-1 p-4">
        {done ? (
          <div className="flex flex-wrap items-center gap-3">
            <p className="min-w-0 flex-1 text-sm font-semibold text-muted">{t("notebook.doubt.added", "Added to your doubts. Come back to it once the idea clicks.")}</p>
            <button type="button" onClick={() => setDone(false)} className="btn-ghost !px-3 !py-1.5 text-xs">
              {t("notebook.doubt.addAnother", "Add another")}
            </button>
            <button type="button" onClick={onClose} className="btn-flat !px-3 !py-1.5 text-xs">
              {t("notebook.doubt.close", "Close")}
            </button>
          </div>
        ) : (
          <>
            <label className="block text-sm font-bold" htmlFor="doubt-title">
              {t("notebook.doubt.titleLabel", "What is unclear?")}
            </label>
            <input id="doubt-title" ref={ref} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t("notebook.doubt.titlePlaceholder", "One line, e.g. Why does the loop stop at n-1?")} className="input mt-1.5 w-full text-sm" maxLength={120} required />
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={t("notebook.doubt.textPlaceholder", "Optional: add what you tried or where you got stuck.")} className="input mt-2 w-full resize-none text-sm" rows={2} />
            <div className="mt-3 flex items-center gap-2">
              <button type="submit" className="btn-primary !py-2 text-sm" disabled={!title.trim()}>
                {t("notebook.doubt.save", "Save doubt")}
              </button>
              <button type="button" onClick={onClose} className="btn-flat !py-2 text-sm">
                {t("notebook.doubt.cancel", "Cancel")}
              </button>
            </div>
          </>
        )}
      </div>
    </motion.form>
  );
}
