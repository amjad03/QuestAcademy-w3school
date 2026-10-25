"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock, ListTree } from "lucide-react";
import type { LessonLayoutProps, LessonTab } from "../types";

/** Focus lesson page: "study notes" — contents tree, readable centre column, chapter rail. */
export function FocusLessonLayout(p: LessonLayoutProps) {
  const [contentsOpen, setContentsOpen] = useState(false);
  const pct = p.unitProgress.total ? p.unitProgress.done / p.unitProgress.total : 0;

  return (
    <div className="fx-lesson mx-auto flex max-w-[1440px]">
      {/* left: chapter contents */}
      <aside className="fx-tree sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[248px] shrink-0 overflow-y-auto border-r border-line px-4 py-6 2xl:block" aria-label="Chapter contents">
        <p className="fx-group mb-3">Contents</p>
        {p.unitNav}
      </aside>

      {/* centre: notes */}
      <article className="min-w-0 flex-1 px-4 py-6 sm:px-8 lg:py-8">
        <div className="mx-auto max-w-[70ch]">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 text-[13px] text-muted">
            <Link href={p.course.href} className="shrink-0 hover:text-accent">
              {p.course.title}
            </Link>
            <span aria-hidden>/</span>
            <Link href={p.unit.href} className="min-w-0 truncate hover:text-accent">
              {p.unit.label ?? `Chapter ${p.unit.index + 1} · ${p.unit.title}`}
            </Link>
          </nav>

          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-[2rem]">{p.lesson.title}</h1>
          {p.lesson.summary && <p className="mt-2 text-[1.05rem] leading-relaxed text-muted">{p.lesson.summary}</p>}
          <p className="mt-3 flex items-center gap-1.5 text-[13px] text-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden /> <span className="tabular-nums">{p.lesson.minutes}</span> min read
          </p>

          {/* below xl: contents disclosure, progress, tabs, tools inline */}
          <div className="xl:hidden">
            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setContentsOpen((o) => !o)}
                aria-expanded={contentsOpen}
                aria-controls="fx-contents-inline"
                className="btn-ghost !px-3 !py-1.5 text-[13px]"
              >
                <ListTree className="h-4 w-4" aria-hidden /> Contents <ChevronDown className={clsx("h-3.5 w-3.5 transition", contentsOpen && "rotate-180")} aria-hidden />
              </button>
              <ChapterProgress done={p.unitProgress.done} total={p.unitProgress.total} pct={pct} inline />
            </div>
            {contentsOpen && (
              <div id="fx-contents-inline" className="fx-tree card mt-3 p-4">
                {p.unitNav}
              </div>
            )}
            <Segmented tabs={p.tabs} className="mt-5" />
            <div className="fx-tools">{p.notebook}</div>
          </div>
          {/* the tree lives in the left column only at 2xl; give xl a disclosure too */}
          <div className="hidden xl:block 2xl:hidden">
            <button type="button" onClick={() => setContentsOpen((o) => !o)} aria-expanded={contentsOpen} aria-controls="fx-contents-xl" className="btn-ghost mt-5 !px-3 !py-1.5 text-[13px]">
              <ListTree className="h-4 w-4" aria-hidden /> Chapter contents <ChevronDown className={clsx("h-3.5 w-3.5 transition", contentsOpen && "rotate-180")} aria-hidden />
            </button>
            {contentsOpen && (
              <div id="fx-contents-xl" className="fx-tree card mt-3 p-4">
                {p.unitNav}
              </div>
            )}
          </div>

          <div className="fx-notes mt-8 border-t border-line pt-8">{p.content}</div>

          {/* prev / next as text links */}
          <nav aria-label="Lesson navigation" className="mt-14 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            {p.prev ? (
              <Link href={p.prev.href} className="fx-pager group">
                <span className="fx-group flex items-center gap-1">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Previous
                </span>
                <span className="mt-1 block font-medium text-ink group-hover:text-accent">{p.prev.title}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            <Link href={p.upNext.href} className="fx-pager group sm:text-right">
              <span className="fx-group flex items-center gap-1 sm:justify-end">
                Next · {p.upNext.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="mt-1 block font-medium text-accent group-hover:underline">{p.upNext.title}</span>
            </Link>
          </nav>
        </div>
      </article>

      {/* right rail */}
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[288px] shrink-0 space-y-6 overflow-y-auto border-l border-line px-5 py-8 xl:block" aria-label="This chapter">
        <section>
          <p className="fx-group">This chapter</p>
          <p className="mt-2 truncate text-sm font-medium" title={p.unit.title}>
            {p.unit.title}
          </p>
          <ChapterProgress done={p.unitProgress.done} total={p.unitProgress.total} pct={pct} />
        </section>

        <section>
          <p className="fx-group mb-2">Study mode</p>
          <Segmented tabs={p.tabs} vertical />
        </section>

        <section className="fx-tools fx-tools-rail">
          <p className="fx-group">Notebook</p>
          {p.notebook}
        </section>

        <section>
          <p className="fx-group">Up next</p>
          <Link href={p.upNext.href} className="card mt-2 block p-3.5 transition hover:border-accent">
            <span className="text-xs text-muted">{p.upNext.label}</span>
            <span className="mt-0.5 flex items-start gap-2 text-sm font-medium text-ink">
              <span className="min-w-0 flex-1">{p.upNext.title}</span>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            </span>
          </Link>
        </section>
      </aside>
    </div>
  );
}

function ChapterProgress({ done, total, pct, inline }: { done: number; total: number; pct: number; inline?: boolean }) {
  return (
    <div className={clsx(inline ? "flex min-w-0 flex-1 items-center gap-3" : "mt-3")}>
      <div className={clsx("flex items-baseline justify-between text-xs text-muted", inline && "order-2 shrink-0")}>
        <span>
          <span className="font-semibold tabular-nums text-ink">{done}</span>/<span className="tabular-nums">{total}</span> lessons
        </span>
        {!inline && <span className="tabular-nums">{Math.round(pct * 100)}%</span>}
      </div>
      <div
        className={clsx("h-1.5 overflow-hidden rounded-full bg-surface-2", inline ? "min-w-[60px] flex-1" : "mt-1.5")}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
        aria-label="Lessons completed in this chapter"
      >
        <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${pct * 100}%` }} />
      </div>
    </div>
  );
}

const LABEL: Partial<Record<LessonTab["kind"], string>> = { article: "Notes" };

function Segmented({ tabs, vertical, className }: { tabs: LessonTab[]; vertical?: boolean; className?: string }) {
  return (
    <div className={clsx("fx-seg", vertical ? "fx-seg-col" : "overflow-x-auto", className)} role="group" aria-label="Study mode">
      {tabs.map((t) => {
        const inner = (
          <>
            <t.icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            <span className="truncate">{LABEL[t.kind] ?? t.label}</span>
            {t.done && <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-good" strokeWidth={3} aria-label="done" />}
          </>
        );
        return t.href ? (
          <Link key={t.kind} href={t.href} className={clsx(t.active && "is-on")} aria-current={t.active ? "page" : undefined}>
            {inner}
          </Link>
        ) : (
          <button key={t.kind} type="button" onClick={t.onSelect} className={clsx(t.active && "is-on")} aria-pressed={t.active}>
            {inner}
          </button>
        );
      })}
    </div>
  );
}
