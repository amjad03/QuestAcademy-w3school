"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock, ListChecks, NotebookPen, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useLearner } from "@/lib/store";
import type { LessonLayoutProps, LessonTab } from "../types";

/** Course-player names for each lesson item. */
const PRO_LABEL: Record<ItemKind, string> = {
  video: "Video",
  article: "Reading",
  cards: "Flashcards",
  practice: "Knowledge check",
  challenge: "Exercise",
};
/** Items the learner can tick off from the footer (same XP as finishing them in place). */
const SELF_MARK: Partial<Record<ItemKind, number>> = { video: 10, cards: 5 };

/** Course player: curriculum panel, lesson header with segmented tabs, content, sticky continue bar. */
export function ProfessionalLessonLayout(p: LessonLayoutProps) {
  const router = useRouter();
  const markItem = useLearner((s) => s.markItem);
  const [panel, setPanel] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [notes, setNotes] = useState(false);

  useEffect(() => {
    setDrawer(false);
    setNotes(false);
  }, [p.lesson.id]);

  const active = p.tabs.find((t) => t.active);
  const selfMark = active && !active.done ? SELF_MARK[active.kind] : undefined;
  const readingPending = active?.kind === "article" && !active.done;
  const pct = p.unitProgress.total ? p.unitProgress.done / p.unitProgress.total : 0;
  const moduleName = `Module ${p.unit.index + 1}`;

  const continueNext = () => {
    if (readingPending) p.onComplete();
    else if (active && selfMark !== undefined) markItem(`${p.lesson.id}:${active.kind}`, selfMark);
    router.push(p.upNext.href);
  };

  const curriculum = (
    <div className="pro-curriculum">
      <Link href={p.course.href} className="flex items-center gap-3 rounded-lg">
        <CourseIcon slug={p.course.slug} size={32} />
        <span className="min-w-0">
          <span className="block text-xs font-medium text-muted">Course</span>
          <span className="block truncate text-sm font-semibold text-ink hover:text-accent">{p.course.title}</span>
        </span>
      </Link>
      <div className="mt-5 rounded-xl bg-surface-2 p-3.5">
        <div className="flex items-baseline justify-between text-xs">
          <span className="font-semibold text-ink">{moduleName} progress</span>
          <span className="tabular-nums text-muted">
            {p.unitProgress.done}/{p.unitProgress.total} lessons
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={Math.round(pct * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={`${moduleName} progress`}>
          <div className="h-full rounded-full bg-accent transition-[width] duration-500" style={{ width: `${pct * 100}%` }} />
        </div>
      </div>
      <div className="mt-5">{p.unitNav}</div>
    </div>
  );

  return (
    <div className="pro-lesson mx-auto flex max-w-[1440px]">
      {/* Curriculum panel (desktop) */}
      {panel && (
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[300px] shrink-0 overflow-y-auto border-r border-line bg-surface px-5 py-6 lg:block" aria-label="Curriculum">
          {curriculum}
        </aside>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mx-auto w-full max-w-[980px] flex-1 px-4 pb-10 pt-5 sm:px-6 lg:px-10 lg:pt-7">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPanel((v) => !v)}
              className="hidden h-8 w-8 shrink-0 place-items-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-ink lg:grid"
              aria-label={panel ? "Hide curriculum" : "Show curriculum"}
              aria-pressed={panel}
            >
              {panel ? <PanelLeftClose className="h-[18px] w-[18px]" /> : <PanelLeftOpen className="h-[18px] w-[18px]" />}
            </button>
            <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
              <ol className="flex min-w-0 items-center gap-1.5 text-sm text-muted">
                <li className="min-w-0 shrink truncate">
                  <Link href={p.course.href} className="hover:text-ink">
                    {p.course.title}
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="min-w-0 shrink-[2] truncate">
                  <Link href={p.unit.href} className="hover:text-ink">
                    {moduleName}: {p.unit.title}
                  </Link>
                </li>
              </ol>
            </nav>
            <button onClick={() => setDrawer(true)} className="flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink transition hover:bg-surface-2 lg:hidden" aria-haspopup="dialog" aria-expanded={drawer}>
              <ListChecks className="h-4 w-4" /> Curriculum
            </button>
          </div>

          {/* Title row */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[1.75rem]">{p.lesson.title}</h1>
              <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span className="flex items-center gap-1.5 tabular-nums">
                  <Clock className="h-3.5 w-3.5" /> {p.lesson.minutes} min
                </span>
                <span aria-hidden>·</span>
                <span>{moduleName}</span>
                {p.unitProgress.total > 0 && (
                  <>
                    <span aria-hidden>·</span>
                    <span className="tabular-nums">{Math.round(pct * 100)}% of module complete</span>
                  </>
                )}
              </p>
            </div>
            <button
              onClick={() => setNotes((v) => !v)}
              aria-expanded={notes}
              aria-controls="pro-notes"
              className={clsx("btn-ghost shrink-0 self-start", notes && "pro-btn-on")}
            >
              <NotebookPen className="h-4 w-4" /> Notes
            </button>
          </div>
          {p.lesson.summary && <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted">{p.lesson.summary}</p>}

          {notes && (
            <div id="pro-notes" className="card mt-4 px-4 pb-4 pt-1">
              {p.notebook}
            </div>
          )}

          {/* Segmented control */}
          {p.tabs.length > 1 && (
            <div className="mt-6 overflow-x-auto pb-1">
              <div className="inline-flex min-w-max gap-1 rounded-xl bg-surface-2 p-1" role="group" aria-label="Lesson sections">
                {p.tabs.map((t) => (
                  <Segment key={t.kind} tab={t} />
                ))}
              </div>
            </div>
          )}

          <div className="pro-content mt-6">{p.content}</div>
        </div>

        {/* Sticky continue bar */}
        <div className="sticky bottom-[calc(3.65rem+env(safe-area-inset-bottom))] z-20 border-t border-line bg-surface/95 backdrop-blur md:bottom-0">
          <div className="mx-auto flex w-full max-w-[980px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">
            {p.prev && (
              <Link href={p.prev.href} className="hidden shrink-0 items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-ink sm:flex" title={p.prev.title}>
                <ChevronLeft className="h-4 w-4" /> Previous
              </Link>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted">{readingPending ? "Mark the reading complete at the end to record it" : `Next · ${p.upNext.label}`}</p>
              <p className="truncate text-sm font-semibold text-ink">{p.upNext.title}</p>
            </div>
            <button onClick={continueNext} className="btn-primary shrink-0">
              <span className="hidden sm:inline">{selfMark !== undefined || readingPending ? "Mark complete & continue" : "Continue"}</span>
              <span className="sm:hidden">{selfMark !== undefined ? "Complete" : "Next"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Curriculum drawer (phones and tablets) */}
      {drawer && <Drawer onClose={() => setDrawer(false)}>{curriculum}</Drawer>}
    </div>
  );
}

function Segment({ tab: t }: { tab: LessonTab }) {
  const cls = clsx(
    "flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-semibold transition",
    t.active ? "bg-surface text-ink shadow-[0_1px_3px_rgb(0_0_0/0.08)]" : "text-muted hover:text-ink",
  );
  const inner = (
    <>
      {PRO_LABEL[t.kind]}
      {t.done && (
        <span className="grid h-4 w-4 place-items-center rounded-full bg-good text-white" aria-label="Completed">
          <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
        </span>
      )}
    </>
  );
  return t.href ? (
    <Link href={t.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button onClick={t.onSelect} className={cls} aria-pressed={t.active}>
      {inner}
    </button>
  );
}

function Drawer({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Curriculum">
      <button className="absolute inset-0 bg-black/40" aria-label="Close curriculum" onClick={onClose} />
      <div className="pro-menu absolute inset-y-0 left-0 w-[min(340px,88vw)] overflow-y-auto bg-surface px-5 py-5" onClick={(e) => (e.target as HTMLElement).closest("a") && onClose()}>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-bold text-ink">Curriculum</p>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-surface-2" aria-label="Close" autoFocus>
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
