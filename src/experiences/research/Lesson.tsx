"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { ItemKind } from "@/content/course";
import { copyText } from "@/lib/clipboard";
import type { LessonLayoutProps, LessonTab } from "../types";

/** Reading-room names for the lesson parts. */
const PART: Record<ItemKind, string> = { video: "Video", article: "Text", cards: "Cards", practice: "Self-check", challenge: "Exercise" };

function citation(p: LessonLayoutProps) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const retrieved = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return `Quest Academy. (n.d.). ${p.lesson.title} [Online lesson]. In ${p.course.title}, Unit ${p.unit.index + 1}: ${p.unit.title}. Retrieved ${retrieved}, from ${origin}/course/${p.lesson.id}`;
}

/** Research lesson: a long-form article with contents and notebook in the margins. */
export function ResearchLessonLayout(p: LessonLayoutProps) {
  const [contentsOpen, setContentsOpen] = useState(false);
  const [cite, setCite] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => setContentsOpen(false), [p.lesson.id]);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onCite = async () => {
    const ok = await copyText(citation(p));
    setCite(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCite("idle"), 2600);
  };

  const pct = p.unitProgress.total ? Math.round((p.unitProgress.done / p.unitProgress.total) * 100) : 0;

  return (
    <div className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:pt-12 xl:grid xl:grid-cols-[210px_minmax(0,1fr)_230px] xl:gap-x-12">
      {/* Header: centred serif title and an author-style metadata line. */}
      <header className="mx-auto max-w-[68ch] text-center xl:col-start-2 xl:row-start-1 xl:w-full">
        <p className="rs-sc text-[0.85rem] text-muted">
          <Link href={p.course.href}>{p.course.title}</Link>
          <span aria-hidden> · </span>
          <Link href={p.unit.href}>
            Unit {p.unit.index + 1}, {p.unit.title}
          </Link>
          <span aria-hidden> · </span>
          <span>{p.lesson.minutes} min read</span>
        </p>
        <h1 className="mt-3 text-[2rem] leading-[1.15] sm:text-[2.6rem]">{p.lesson.title}</h1>
        {p.lesson.summary && <p className="rs-serif mx-auto mt-4 max-w-[58ch] text-[1.12rem] italic leading-relaxed text-muted">{p.lesson.summary}</p>}

        <nav aria-label="Lesson parts" className="mt-6 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[0.88rem]">
          {p.tabs.map((t, i) => (
            <span key={t.kind} className="flex items-center">
              {i > 0 && (
                <span className="px-1.5 text-line" aria-hidden>
                  ·
                </span>
              )}
              <PartLink tab={t} />
            </span>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-4 border-y border-line py-2 text-[0.82rem] xl:hidden">
          <button type="button" onClick={() => setContentsOpen((o) => !o)} aria-expanded={contentsOpen} aria-controls="rs-contents-mobile" className="rs-textbtn rs-textbtn-muted">
            {contentsOpen ? "Hide contents" : "Contents"}
          </button>
          <span className="text-muted">
            {p.unitProgress.done} of {p.unitProgress.total} lessons read
          </span>
        </div>
        {contentsOpen && (
          <div id="rs-contents-mobile" className="rs-margin mt-4 border-b border-line pb-4 text-left xl:hidden">
            {p.unitNav}
          </div>
        )}
      </header>

      {/* Left margin: unit contents. */}
      <aside aria-label="Contents" className="rs-margin hidden xl:sticky xl:top-20 xl:col-start-1 xl:row-span-3 xl:row-start-1 xl:block xl:max-h-[calc(100vh-6rem)] xl:self-start xl:overflow-y-auto xl:pb-6">
        <p className="eyebrow mb-3">Contents</p>
        {p.unitNav}
      </aside>

      {/* Right margin: notebook tools, unit progress, citation. */}
      <aside aria-label="Notebook and progress" className="rs-margin mx-auto mt-6 max-w-[68ch] xl:sticky xl:top-20 xl:col-start-3 xl:row-span-3 xl:row-start-1 xl:mt-0 xl:max-w-none xl:self-start">
        <p className="eyebrow hidden xl:block">Notebook</p>
        <div className="[&>div]:!mt-0 xl:mt-2">{p.notebook}</div>

        <div className="mt-8 hidden xl:block">
          <p className="eyebrow">This unit</p>
          <p className="mt-1 text-[0.85rem]">
            {p.unitProgress.done} of {p.unitProgress.total} lessons read
          </p>
          <div className="mt-2 h-px bg-line" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Unit progress">
            <div className="h-px bg-accent" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="mt-8 hidden xl:block">
          <p className="eyebrow">Citation</p>
          <CiteButton state={cite} onCite={onCite} />
        </div>
      </aside>

      {/* Main column. */}
      <article className="rs-article mx-auto mt-10 min-w-0 max-w-[68ch] xl:col-start-2 xl:row-start-2 xl:w-full">{p.content}</article>

      <footer className="mx-auto mt-14 max-w-[68ch] border-t border-line pt-5 text-[0.92rem] xl:col-start-2 xl:row-start-3 xl:w-full">
        <div className="xl:hidden">
          <CiteButton state={cite} onCite={onCite} />
        </div>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between xl:mt-0">
          {p.prev ? (
            <Link href={p.prev.href} className="min-w-0 text-muted hover:text-ink">
              <span className="rs-sc">Previous:</span> <span className="rs-serif">{p.prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link href={p.upNext.href} className="min-w-0 text-ink sm:text-right">
            <span className="rs-sc text-muted">Next:</span> <span className="rs-serif text-accent">{p.upNext.label === "Next lesson" ? p.upNext.title : `${partName(p.upNext.label)} — ${p.upNext.title}`}</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

/** Map the shared "up next" labels onto this profile's part names. */
function partName(l: string) {
  const map: Record<string, string> = { Lesson: "Text", Practice: "Self-check", Flashcards: "Cards", Challenge: "Exercise" };
  return map[l] ?? l;
}

function CiteButton({ state, onCite }: { state: "idle" | "copied" | "failed"; onCite: () => void }) {
  return (
    <div>
      <button type="button" onClick={onCite} className="rs-textbtn text-[0.85rem]">
        Cite this lesson
      </button>
      <span className="ml-2 text-[0.78rem] text-muted" role="status" aria-live="polite">
        {state === "copied" ? "APA citation copied." : state === "failed" ? "Could not copy." : ""}
      </span>
    </div>
  );
}

function PartLink({ tab: t }: { tab: LessonTab }) {
  const cls = clsx(
    "rounded px-1.5 py-0.5 underline-offset-4 transition-colors",
    t.active ? "text-ink underline decoration-accent decoration-1" : "text-muted hover:text-ink hover:underline",
  );
  const inner = (
    <>
      {PART[t.kind] ?? t.label}
      {t.done && (
        <span className="ml-1 text-[0.72rem] text-good">
          <span aria-hidden>✓</span>
          <span className="sr-only"> (done)</span>
        </span>
      )}
    </>
  );
  return t.href ? (
    <Link href={t.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={t.onSelect} className={cls} aria-pressed={t.active}>
      {inner}
    </button>
  );
}
