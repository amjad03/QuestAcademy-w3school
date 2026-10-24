"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bookmark, CheckCircle2, CircleHelp, Download, NotebookPen, RotateCcw, Search, Trash2 } from "lucide-react";
import clsx from "clsx";
import { getLessonById, getSubject } from "@/content";
import { courseOf, notebookToMarkdown, titleCase, useNotebook, type Doubt } from "@/lib/notebook-store";
import { useHydrated } from "@/components/providers";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useT } from "@/i18n";
import { DoubtItem } from "./DoubtItem";

type Tab = "notes" | "bookmarks" | "doubts";
const TABS: { id: Tab; label: string; icon: typeof NotebookPen }[] = [
  { id: "notes", label: "Notes", icon: NotebookPen },
  { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
  { id: "doubts", label: "Doubts", icon: CircleHelp },
];

const lessonTitle = (id: string) => getLessonById(id)?.lesson.title ?? titleCase(id.split("/").pop() ?? id);
const lessonHref = (id: string) => getLessonById(id)?.href ?? `/course/${id}`;
const courseTitle = (slug: string) => getSubject(slug)?.title ?? titleCase(slug);
const when = (iso: string) => new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });

export function NotebookView() {
  const t = useT();
  const tabLabel: Record<Tab, string> = {
    notes: t("notebook.tab.notes", "Notes"),
    bookmarks: t("notebook.tab.bookmarks", "Bookmarks"),
    doubts: t("notebook.tab.doubts", "Doubts"),
  };
  const hydrated = useHydrated();
  const s = useNotebook();
  const [tab, setTab] = useState<Tab>("notes");
  const [query, setQuery] = useState("");

  // Honour ?tab= on first load without needing a Suspense boundary.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("tab");
    if (param === "notes" || param === "bookmarks" || param === "doubts") setTab(param);
  }, []);

  const counts = { notes: Object.keys(s.notes).length, bookmarks: Object.keys(s.bookmarks).length, doubts: s.doubts.filter((d) => !d.resolved).length };
  const empty = !counts.notes && !counts.bookmarks && !s.doubts.length;

  const exportMarkdown = () => {
    const md = notebookToMarkdown(s, lessonTitle, lessonHref);
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quest-academy-notebook-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header className="flex flex-wrap items-end gap-3">
        <div className="min-w-[16rem] flex-1">
          <h1 className="text-2xl font-black">{t("notebook.title", "Notebook")}</h1>
          <p className="mt-1 font-semibold text-muted">{t("notebook.subtitle", "Your notes, saved lessons and open questions, all in one place.")}</p>
        </div>
        <button type="button" onClick={exportMarkdown} disabled={!hydrated || empty} className="btn-ghost !py-2 text-sm disabled:opacity-50">
          <Download className="h-4 w-4" /> {t("notebook.export", "Export as Markdown")}
        </button>
      </header>

      <div className="mt-5 flex flex-wrap items-center gap-2" role="tablist" aria-label={t("notebook.sections", "Notebook sections")}>
        {TABS.map((tb) => (
          <button key={tb.id} role="tab" aria-selected={tab === tb.id} onClick={() => setTab(tb.id)} className={clsx("chip flex items-center gap-1.5 transition", tab === tb.id ? "!border-accent !text-accent" : "hover:text-accent")}>
            <tb.icon className="h-4 w-4" />
            {tabLabel[tb.id]}
            {hydrated && counts[tb.id] > 0 && <span className="text-xs font-bold tabular-nums text-muted">{counts[tb.id]}</span>}
          </button>
        ))}
        {tab === "notes" && (
          <label className="relative ml-auto w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("notebook.search", "Search notes")} className="input w-full !pl-9 text-sm" aria-label={t("notebook.search", "Search notes")} />
          </label>
        )}
      </div>

      <div className="mt-5">
        {!hydrated ? (
          <section className="card h-40 animate-pulse p-5" aria-busy />
        ) : tab === "notes" ? (
          <NotesTab query={query} />
        ) : tab === "bookmarks" ? (
          <BookmarksTab />
        ) : (
          <DoubtsTab />
        )}
      </div>
    </>
  );
}

function Empty({ icon: I, title, body }: { icon: typeof NotebookPen; title: string; body: string }) {
  const t = useT();
  return (
    <section className="card flex flex-col items-center gap-3 p-8 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft">
        <I className="h-6 w-6 text-accent" />
      </span>
      <h2 className="font-black">{title}</h2>
      <p className="max-w-md text-sm font-semibold text-muted">{body}</p>
      <Link href="/learn" className="btn-primary mt-1">
        {t("notebook.empty.goToLesson", "Go to a lesson")} <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function NotesTab({ query }: { query: string }) {
  const t = useT();
  const notes = useNotebook((s) => s.notes);
  const removeNote = useNotebook((s) => s.removeNote);
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = Object.entries(notes)
      .filter(([id, n]) => !q || n.text.toLowerCase().includes(q) || lessonTitle(id).toLowerCase().includes(q))
      .sort((a, b) => b[1].updatedAt.localeCompare(a[1].updatedAt));
    const byCourse = new Map<string, typeof rows>();
    for (const r of rows) {
      const c = courseOf(r[0]);
      byCourse.set(c, [...(byCourse.get(c) ?? []), r]);
    }
    return [...byCourse.entries()];
  }, [notes, query]);

  if (!Object.keys(notes).length) return <Empty icon={NotebookPen} title={t("notebook.empty.notes.title", "No notes yet")} body={t("notebook.empty.notes.body", "Open any lesson and use Notes in the toolbar under the title. Whatever you write is saved as you type.")} />;
  if (!groups.length) return <p className="card p-6 text-center text-sm font-semibold text-muted">{t("notebook.notes.noMatch", "No notes match “{query}”.", { query })}</p>;

  return (
    <div className="space-y-6">
      {groups.map(([course, rows]) => (
        <section key={course}>
          <div className="mb-3 flex items-center gap-2">
            <CourseIcon slug={course} size={22} />
            <h2 className="font-black">{courseTitle(course)}</h2>
            <span className="text-xs font-semibold text-muted">
              {rows.length === 1 ? t("notebook.notes.count.one", "{n} note", { n: rows.length }) : t("notebook.notes.count.other", "{n} notes", { n: rows.length })}
            </span>
          </div>
          <ul className="space-y-3">
            {rows.map(([id, n]) => (
              <li key={id} className="card p-5">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <Link href={lessonHref(id)} className="font-black hover:text-accent">
                      {lessonTitle(id)}
                    </Link>
                    <p className="text-xs font-semibold text-muted">{t("notebook.notes.updated", "Updated {date}", { date: when(n.updatedAt) })}</p>
                  </div>
                  <Link href={lessonHref(id)} className="btn-ghost !px-3 !py-1.5 text-xs">
                    {t("notebook.notes.openLesson", "Open lesson")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button type="button" onClick={() => removeNote(id)} className="btn-flat !p-1.5 text-muted hover:text-ink" aria-label={t("notebook.notes.delete", "Delete note for {title}", { title: lessonTitle(id) })}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">{n.text}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function BookmarksTab() {
  const t = useT();
  const bookmarks = useNotebook((s) => s.bookmarks);
  const toggle = useNotebook((s) => s.toggleBookmark);
  const rows = Object.entries(bookmarks).sort((a, b) => b[1].addedAt.localeCompare(a[1].addedAt));
  if (!rows.length) return <Empty icon={Bookmark} title={t("notebook.empty.bookmarks.title", "Nothing bookmarked")} body={t("notebook.empty.bookmarks.body", "Use Bookmark on any lesson to keep it here for quick access.")} />;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {rows.map(([id, b]) => (
        <li key={id} className="tile flex items-center gap-3 p-4">
          <CourseIcon slug={courseOf(id)} size={36} />
          <Link href={b.href} className="min-w-0 flex-1">
            <span className="block truncate font-black hover:text-accent">{b.title}</span>
            <span className="block truncate text-xs font-semibold text-muted">
              {courseTitle(courseOf(id))} · {t("notebook.bookmarks.saved", "saved {date}", { date: when(b.addedAt) })}
            </span>
          </Link>
          <button type="button" onClick={() => toggle(id, b)} className="btn-flat !p-1.5 text-muted hover:text-ink" aria-label={t("notebook.bookmarks.remove", "Remove bookmark for {title}", { title: b.title })}>
            <Trash2 className="h-4 w-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}

function DoubtsTab() {
  const t = useT();
  const doubts = useNotebook((s) => s.doubts);
  const [view, setView] = useState<"open" | "resolved">("open");
  const open = doubts.filter((d) => !d.resolved);
  const resolved = doubts.filter((d) => d.resolved);
  if (!doubts.length) return <Empty icon={CircleHelp} title={t("notebook.empty.doubts.title", "No doubts recorded")} body={t("notebook.empty.doubts.body", "When something in a lesson is unclear, use “Add a doubt”. It stays here until you mark it resolved.")} />;
  const list = view === "open" ? open : resolved;
  return (
    <div>
      <div className="mb-4 flex gap-2" role="tablist" aria-label={t("notebook.doubts.status", "Doubt status")}>
        {(["open", "resolved"] as const).map((v) => (
          <button key={v} role="tab" aria-selected={view === v} onClick={() => setView(v)} className={clsx("chip transition", view === v ? "!border-accent !text-accent" : "hover:text-accent")}>
            {v === "open" ? t("notebook.doubts.openCount", "Open ({n})", { n: open.length }) : t("notebook.doubts.resolvedCount", "Resolved ({n})", { n: resolved.length })}
          </button>
        ))}
      </div>
      {list.length ? (
        <ul className="space-y-3">
          {list.map((d) => (
            <DoubtRow key={d.id} d={d} />
          ))}
        </ul>
      ) : (
        <p className="card p-6 text-center text-sm font-semibold text-muted">{view === "open" ? t("notebook.doubts.allResolved", "Every doubt is resolved. Nice work.") : t("notebook.doubts.noneResolved", "Nothing resolved yet.")}</p>
      )}
    </div>
  );
}

function DoubtRow({ d }: { d: Doubt }) {
  const t = useT();
  return (
    <DoubtItem
      d={d}
      meta={
        <>
          <Link href={lessonHref(d.lessonId)} className="hover:text-accent">
            {lessonTitle(d.lessonId)}
          </Link>
          {" · "}
          {courseTitle(courseOf(d.lessonId))} · {when(d.updatedAt ?? d.createdAt)}
        </>
      }
      actions={
        <Link href={lessonHref(d.lessonId)} className="btn-ghost !px-3 !py-1.5 text-xs">
          {t("notebook.doubts.revisit", "Revisit lesson")} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      }
    />
  );
}
