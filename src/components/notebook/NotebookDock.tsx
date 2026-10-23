"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, BookmarkCheck, CircleHelp, NotebookPen, Plus, X } from "lucide-react";
import clsx from "clsx";
import { useNotebook } from "@/lib/notebook-store";
import { DoubtFields, DoubtItem } from "./DoubtItem";
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
  const anyDoubts = useNotebook((s) => s.doubts.some((d) => d.lessonId === lessonId));
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
            {hydrated && anyDoubts ? t("notebook.dock.doubts", "Doubts") : t("notebook.dock.addDoubt", "Add a doubt")}
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
          {panel === "doubt" && <DoubtsPanel key="doubt" lessonId={lessonId} onClose={() => setPanel(null)} />}
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
  const latest = useRef(saved);
  const pending = useRef(false);

  useEffect(() => {
    ref.current?.focus();
    // Closing the panel (or leaving the page) mid-typing must still save the note.
    return () => {
      clearTimeout(timer.current);
      if (pending.current) setNote(lessonId, latest.current);
    };
  }, [lessonId, setNote]);

  const onChange = (v: string) => {
    latest.current = v;
    pending.current = true;
    setText(v);
    setStatus("saving");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setNote(lessonId, v);
      pending.current = false;
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

function DoubtsPanel({ lessonId, onClose }: { lessonId: string; onClose: () => void }) {
  const t = useT();
  const all = useNotebook((s) => s.doubts);
  const addDoubt = useNotebook((s) => s.addDoubt);
  const doubts = all.filter((d) => d.lessonId === lessonId);
  const [adding, setAdding] = useState(doubts.length === 0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addDoubt({ lessonId, title, text });
    setTitle("");
    setText("");
    setAdding(false);
  };

  return (
    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="basis-full overflow-hidden">
      <section className="card mt-1 p-4" aria-label={t("notebook.doubt.panelLabel", "Doubts for this lesson")}>
        <div className="mb-3 flex items-center gap-2">
          <h3 className="flex-1 text-sm font-bold">
            {doubts.length ? t("notebook.doubt.listTitle", "Your doubts on this lesson ({n})", { n: doubts.length }) : t("notebook.doubt.firstTitle", "Add a doubt")}
          </h3>
          <button type="button" onClick={onClose} className="btn-flat !p-1.5" aria-label={t("notebook.doubt.close", "Close")}>
            <X className="h-4 w-4" />
          </button>
        </div>

        {doubts.length > 0 && (
          <ul className="space-y-2">
            {doubts.map((d) => (
              <DoubtItem key={d.id} d={d} compact meta={new Date(d.updatedAt ?? d.createdAt).toLocaleDateString()} />
            ))}
          </ul>
        )}

        {adding ? (
          <form onSubmit={submit} className={clsx(doubts.length > 0 && "mt-3 border-t border-line pt-3")}>
            <DoubtFields title={title} text={text} onTitle={setTitle} onText={setText} autoFocus />
            <div className="mt-3 flex items-center gap-2">
              <button type="submit" className="btn-primary !py-2 text-sm" disabled={!title.trim()}>
                {t("notebook.doubt.save", "Save doubt")}
              </button>
              <button type="button" onClick={() => (doubts.length ? setAdding(false) : onClose())} className="btn-flat !py-2 text-sm">
                {t("notebook.doubt.cancel", "Cancel")}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => setAdding(true)} className="btn-ghost !px-3 !py-1.5 text-xs">
              <Plus className="h-3.5 w-3.5" /> {t("notebook.doubt.addAnother", "Add another")}
            </button>
            <Link href="/notebook?tab=doubts" className="ml-auto text-xs font-bold text-muted hover:text-accent">
              {t("notebook.doubt.allDoubts", "All doubts")}
            </Link>
          </div>
        )}
      </section>
    </motion.div>
  );
}
