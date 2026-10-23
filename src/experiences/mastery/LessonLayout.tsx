"use client";

import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Check, ChevronDown, ListTree } from "lucide-react";
import type { ItemKind } from "@/content/course";
import type { LessonLayoutProps, LessonTab } from "../types";
import { Section } from "./Shell";
import { pad2, useMedia, useWorkspace } from "./workspace";

/** Academic names for the lesson items. */
const TAB_NAME: Record<ItemKind, string> = { video: "Lecture", article: "Notes", cards: "Flashcards", practice: "Problem set", challenge: "Lab" };

/**
 * Mastery lesson page, laid out like lecture notes: a course-code header,
 * an underline tab strip, the content at a generous reading width and a
 * right-hand "On this lesson" panel. The unit outline docks into the shell's
 * explorer when it is open, otherwise it is a collapsible drawer.
 */
export function MasteryLessonLayout(p: LessonLayoutProps) {
  const ws = useWorkspace();
  const wideRail = useMedia("(min-width: 1280px)");
  const [outlineOpen, setOutlineOpen] = useState(false);
  const docked = Boolean(ws.outletEl && ws.explorerDocked);
  const code = `${p.course.slug.toUpperCase()} · U${pad2(p.unit.index + 1)}`;
  const pct = p.unitProgress.total ? p.unitProgress.done / p.unitProgress.total : 0;

  return (
    <div className="mx-auto flex max-w-[1280px] gap-10 px-4 py-6 sm:px-8 lg:py-8">
      {docked &&
        createPortal(
          <Section title={`Outline · U${pad2(p.unit.index + 1)}`} defaultOpen>
            <div className="mx-outline px-2">{p.unitNav}</div>
          </Section>,
          ws.outletEl!,
        )}

      <article className="min-w-0 flex-1">
        <div className="mx-auto max-w-[820px]">
          {/* header */}
          <div className="flex items-center gap-2">
            <Link href={p.course.href} className="mx-code" title={p.course.title}>
              {code}
            </Link>
            <Link href={p.unit.href} className="min-w-0 truncate text-[13px] text-muted hover:text-ink">
              {p.unit.title}
            </Link>
            {!docked && (
              <button onClick={() => setOutlineOpen((o) => !o)} aria-expanded={outlineOpen} aria-controls="mx-lesson-outline" className="btn-ghost ml-auto !px-2.5 !py-1 text-[13px]">
                <ListTree className="h-3.5 w-3.5" /> Outline <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform", outlineOpen && "rotate-180")} />
              </button>
            )}
          </div>
          {!docked && outlineOpen && (
            <div id="mx-lesson-outline" className="mx-outline card mt-3 p-4">
              {p.unitNav}
            </div>
          )}

          <h1 className="mt-4 text-[1.85rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.1rem]">{p.lesson.title}</h1>
          {p.lesson.summary && <p className="mt-2 max-w-[68ch] text-[1.02rem] leading-relaxed text-muted">{p.lesson.summary}</p>}

          <dl className="mx-mono mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12px] text-muted">
            <Meta label="duration" value={`${p.lesson.minutes} min`} />
            <Meta label="credits" value={String(p.lesson.xp)} />
            <Meta label="unit" value={`${p.unitProgress.done}/${p.unitProgress.total} complete`} />
          </dl>
          {!wideRail && <div className="mx-notebook mt-3">{p.notebook}</div>}

          {/* tab strip */}
          <div className="mx-tabs mt-6" role="tablist" aria-label="Lesson materials">
            {p.tabs.map((t) => (
              <LessonTabLink key={t.kind} tab={t} />
            ))}
          </div>

          <div className="mx-lesson-body mt-8">{p.content}</div>

          {/* footer */}
          <div className="mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
            {p.prev ? (
              <Link href={p.prev.href} className="mx-pager">
                <span className="mx-label flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </span>
                <span className="mt-1 block truncate font-medium">{p.prev.title}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            <Link href={p.upNext.href} className="mx-pager sm:text-right">
              <span className="mx-label flex items-center gap-1 sm:justify-end">
                Up next · {p.upNext.label} <ArrowRight className="h-3 w-3" />
              </span>
              <span className="mt-1 block truncate font-medium">{p.upNext.title}</span>
            </Link>
          </div>
        </div>
      </article>

      {/* right panel */}
      <aside className="sticky top-[60px] hidden h-fit w-[264px] shrink-0 space-y-6 xl:block" aria-label="On this lesson">
        <div>
          <p className="mx-label">On this lesson</p>
          <ul className="mt-2 border-l border-line">
            {p.tabs.map((t) => (
              <li key={t.kind}>
                <OutlineItem tab={t} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <p className="mx-label">Unit progress</p>
            <span className="mx-mono text-[12px] text-muted">
              {p.unitProgress.done}/{p.unitProgress.total}
            </span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-line" role="progressbar" aria-label="Lessons completed in this unit" aria-valuemin={0} aria-valuemax={p.unitProgress.total} aria-valuenow={p.unitProgress.done}>
            <div className="h-full rounded-full bg-good" style={{ width: `${pct * 100}%` }} />
          </div>
          <Link href={p.unit.href} className="mt-2 block truncate text-[13px] text-muted hover:text-ink">
            {p.unit.title}
          </Link>
        </div>

        {wideRail && (
          <div>
            <p className="mx-label">Notebook</p>
            <div className="mx-notebook mt-2">{p.notebook}</div>
          </div>
        )}

        <Link href={p.upNext.href} className="card block p-4 transition hover:border-accent">
          <span className="mx-label">Up next · {p.upNext.label}</span>
          <span className="mt-1.5 block font-medium leading-snug">{p.upNext.title}</span>
          <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
            Continue <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </aside>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <dt className="opacity-70">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function LessonTabLink({ tab: t }: { tab: LessonTab }) {
  const label = TAB_NAME[t.kind] ?? t.label;
  const inner = (
    <>
      <t.icon className="h-4 w-4" strokeWidth={1.8} />
      {label}
      {t.done && <Check className="h-3.5 w-3.5 text-good" strokeWidth={2.6} aria-label="done" />}
    </>
  );
  const cls = clsx("mx-tab-link", t.active && "is-active");
  return t.href ? (
    <Link href={t.href} className={cls} role="tab" aria-selected={false}>
      {inner}
    </Link>
  ) : (
    <button onClick={t.onSelect} className={cls} role="tab" aria-selected={t.active}>
      {inner}
    </button>
  );
}

function OutlineItem({ tab: t }: { tab: LessonTab }) {
  const label = TAB_NAME[t.kind] ?? t.label;
  const cls = clsx("-ml-px flex w-full items-center gap-2 border-l py-1.5 pl-3 text-left text-[13.5px] transition", t.active ? "border-accent font-medium text-ink" : "border-transparent text-muted hover:border-line hover:text-ink");
  const inner = (
    <>
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {t.done ? <span className="mx-mono text-[11px] text-good">done</span> : t.href ? <ArrowRight className="h-3 w-3 opacity-60" /> : null}
    </>
  );
  return t.href ? (
    <Link href={t.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button onClick={t.onSelect} className={cls} aria-current={t.active ? "true" : undefined}>
      {inner}
    </button>
  );
}
