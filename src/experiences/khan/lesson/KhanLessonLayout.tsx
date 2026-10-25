"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, BookOpenCheck, Check, ChevronLeft, ChevronRight, CircleCheck, Clock, Dumbbell, FileText, FlaskConical, Layers, ListTree, PlayCircle, Trophy, X, Zap } from "lucide-react";
import type { ItemKind } from "@/content/course";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useT, useBcp47 } from "@/i18n";
import type { LessonLayoutProps, LessonTab } from "../../types";

const FONT = "[font-family:var(--font-pro),var(--font-indic),system-ui,sans-serif]";

/** Up-next labels coming from the lesson viewer → icon + translation key. */
const NEXT_KIND: Record<string, { icon: typeof PlayCircle; key: string; en: string }> = {
  Video: { icon: PlayCircle, key: "khan.kind.video", en: "Video" },
  Lesson: { icon: FileText, key: "khan.kind.article", en: "Article" },
  Article: { icon: FileText, key: "khan.kind.article", en: "Article" },
  Flashcards: { icon: Layers, key: "khan.kind.cards", en: "Flashcards" },
  Practice: { icon: Dumbbell, key: "khan.kind.practice", en: "Practice" },
  Challenge: { icon: FlaskConical, key: "khan.kind.challenge", en: "Challenge" },
  "Next lesson": { icon: ChevronRight, key: "khan.kind.nextLesson", en: "Next lesson" },
  "Unit test": { icon: Trophy, key: "khan.kind.unitTest", en: "Unit test" },
  Quiz: { icon: BookOpenCheck, key: "khan.kind.quiz", en: "Quiz" },
};

function useTabLabel() {
  const t = useT();
  return (kind: ItemKind) =>
    ({
      video: t("khan.tab.video", "Video"),
      article: t("khan.tab.article", "Article"),
      cards: t("khan.tab.cards", "Flashcards"),
      practice: t("khan.tab.practice", "Practice"),
      challenge: t("khan.tab.challenge", "Challenge"),
    })[kind];
}

/** Unit progress word, from the share of lessons completed in this unit. */
function unitStage(done: number, total: number, t: ReturnType<typeof useT>) {
  const f = total ? done / total : 0;
  if (f === 0) return t("khan.unit.notStarted", "Not started");
  if (f < 0.4) return t("khan.unit.started", "Getting started");
  if (f < 0.8) return t("khan.unit.familiar", "Familiar");
  if (f < 1) return t("khan.unit.proficient", "Proficient");
  return t("khan.unit.complete", "Complete");
}

/**
 * Khan Academy-style lesson page: course navigation column, breadcrumb,
 * content-type tabs, the lesson body, and an "Up next" bar.
 */
export function KhanLessonLayout(p: LessonLayoutProps) {
  const t = useT();
  const bcp47 = useBcp47();
  const tabLabel = useTabLabel();
  const [drawer, setDrawer] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const active = p.tabs.find((x) => x.active);
  const onArticle = active?.kind === "article";
  const pct = p.unitProgress.total ? p.unitProgress.done / p.unitProgress.total : 0;
  const stage = unitStage(p.unitProgress.done, p.unitProgress.total, t);
  const nf = new Intl.NumberFormat(bcp47);

  useEffect(() => {
    if (!drawer) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawer]);

  // Close the drawer when a link inside the unit nav is followed.
  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) setDrawer(false);
  };

  const nextKind = NEXT_KIND[p.upNext.label] ?? { icon: ArrowRight, key: "", en: "" };
  const NextIcon = nextKind.icon;
  const nextLabel = nextKind.key ? t(nextKind.key, p.upNext.label) : p.upNext.label;

  const progressBlock = (
    <div className="rounded-md border border-line bg-surface p-3.5">
      <div className="flex items-baseline justify-between gap-2 text-[13px]">
        <span className="font-semibold text-ink">{p.unit.label ? t("class.chapterProgress", "Chapter progress") : t("khan.unit.progress", "Unit progress")}</span>
        <span className="font-medium text-muted">{stage}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-label={p.unit.label ? t("class.chapterProgress", "Chapter progress") : t("khan.unit.progress", "Unit progress")} aria-valuemin={0} aria-valuemax={p.unitProgress.total} aria-valuenow={p.unitProgress.done}>
        <div className="h-full rounded-full bg-[#7854F7] transition-[width] duration-500" style={{ width: `${pct * 100}%` }} />
      </div>
      <p className="mt-1.5 text-[12.5px] text-muted">
        {t("khan.unit.lessonsDone", "{done} of {total} lessons", { done: nf.format(p.unitProgress.done), total: nf.format(p.unitProgress.total) })}
      </p>
    </div>
  );

  const navColumn = (
    <div className="space-y-4">
      {progressBlock}
      <div className="khan-unitnav text-[15px] [&_.eyebrow]:text-[11px] [&_a]:rounded-md [&_li>a]:font-medium" onClick={closeOnLink}>
        {p.unitNav}
      </div>
    </div>
  );

  return (
    <div className={clsx("mx-auto flex w-full max-w-[1280px] text-ink", FONT)}>
      {/* Course navigation (desktop) */}
      <aside className="sticky top-[var(--kh-sticky-top,64px)] hidden h-[calc(100vh-var(--kh-sticky-top,64px))] w-[296px] shrink-0 overflow-y-auto border-r border-line bg-surface px-4 py-6 lg:block" aria-label={t("khan.lesson.unitNav", "Unit navigation")}>
        {navColumn}
      </aside>

      {/* Course navigation (mobile drawer) */}
      <AnimatePresence>
        {drawer && (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 h-full w-full cursor-default bg-[rgb(11_17_33/0.5)]" aria-label={t("khan.lesson.closeNav", "Close lesson list")} onClick={() => setDrawer(false)} tabIndex={-1} />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={t("khan.lesson.unitNav", "Unit navigation")}
              className="absolute inset-y-0 left-0 flex w-[min(340px,88vw)] flex-col border-r border-line bg-surface shadow-lift"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="text-sm font-semibold">{t("khan.lesson.inThisUnit", "In this unit")}</span>
                <button ref={closeRef} onClick={() => setDrawer(false)} className="grid h-9 w-9 place-items-center rounded-md text-muted hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label={t("khan.lesson.closeNav", "Close lesson list")}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4">{navColumn}</div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-w-0 flex-1">
        <div className="mx-auto max-w-[820px] px-4 pb-10 pt-5 sm:px-8 lg:pt-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <nav aria-label={t("khan.lesson.breadcrumb", "Breadcrumb")} className="min-w-0 flex-1">
              <ol className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-[13.5px] text-muted">
                <li className="flex min-w-0 items-center">
                  <Link href={p.course.href} className="flex min-w-0 items-center gap-1.5 rounded font-medium text-accent hover:underline">
                    <CourseIcon slug={p.course.slug} size={20} />
                    <span className="truncate">{p.course.title}</span>
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="min-w-0">
                  <Link href={p.unit.href} className="block truncate rounded font-medium text-accent hover:underline">
                    {p.unit.label ?? t("khan.lesson.unitN", "Unit {n}: {title}", { n: nf.format(p.unit.index + 1), title: p.unit.title })}
                  </Link>
                </li>
              </ol>
            </nav>
            <button onClick={() => setDrawer(true)} className="flex shrink-0 items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-[13px] font-semibold text-ink hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent lg:hidden" aria-haspopup="dialog" aria-expanded={drawer}>
              <ListTree className="h-4 w-4" /> {t("khan.lesson.lessons", "Lessons")}
            </button>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-[1.75rem] font-bold leading-tight tracking-[-0.01em] sm:text-[2.15rem]">{p.lesson.title}</h1>
          {p.lesson.summary && <p className="mt-2 max-w-[68ch] text-[1.05rem] leading-relaxed text-muted">{p.lesson.summary}</p>}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {t("khan.lesson.minutes", "{n} min", { n: nf.format(p.lesson.minutes) })}
            </span>
            {p.completed ? (
              <span className="flex items-center gap-1.5 font-semibold text-good-shade">
                <CircleCheck className="h-4 w-4" /> {t("khan.lesson.completed", "Completed")}
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4" /> {t("khan.lesson.points", "{n} energy points", { n: nf.format(p.lesson.xp) })}
              </span>
            )}
            {/* The tutor ("Ask Questy") may mount a button here. */}
            <div id="tutor-slot-lesson" className="empty:hidden" />
          </div>

          {/* Content-type tabs */}
          <div className="mt-6 border-b border-line">
            <nav className="-mb-px flex gap-1 overflow-x-auto [scrollbar-width:none]" aria-label={t("khan.lesson.items", "Lesson items")}>
              {p.tabs.map((tab) => (
                <KhanTab key={tab.kind} tab={tab} label={tabLabel(tab.kind)} />
              ))}
            </nav>
          </div>

          {/* Notebook tools */}
          <div className="mt-3">{p.notebook}</div>

          {/* Content (the "See it" explainer leads article content) */}
          <div className="mt-6 [&>*+*]:mt-8">{p.content}</div>

        </div>

        {/* Up next */}
        <div className="z-20 border-t border-line bg-surface/95 backdrop-blur lg:sticky lg:bottom-0">
          <div className="mx-auto flex max-w-[820px] flex-col-reverse gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-8">
            {p.prev ? (
              <Link href={p.prev.href} className="flex min-w-0 items-center gap-1.5 rounded text-[14px] font-medium text-muted hover:text-accent">
                <ChevronLeft className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  <span className="sr-only">{t("khan.lesson.previous", "Previous")}: </span>
                  {p.prev.title}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {onArticle && !p.completed && (
              <button onClick={p.onComplete} className="inline-flex items-center justify-center gap-2 rounded-md border border-accent px-4 py-2.5 text-[14.5px] font-semibold text-accent transition hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:ml-auto">
                <Check className="h-4 w-4" strokeWidth={3} /> {t("khan.lesson.markComplete", "Mark complete")}
              </button>
            )}
            <Link href={p.upNext.href} className={clsx("group flex min-w-0 items-center gap-3 rounded-md border border-line bg-surface p-2.5 pr-3 transition hover:border-accent hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:max-w-[420px]", !(onArticle && !p.completed) && "sm:ml-auto")}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
                <NextIcon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11.5px] font-semibold uppercase tracking-[0.06em] text-muted">
                  {t("khan.lesson.upNext", "Up next: {kind}", { kind: nextLabel })}
                </span>
                <span className="block truncate text-[14.5px] font-semibold text-ink group-hover:text-accent">{p.upNext.title}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-accent transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Khan's content-type tab: icon + label with an underline when active, tick when done. */
function KhanTab({ tab, label }: { tab: LessonTab; label: string }) {
  const t = useT();
  const cls = clsx(
    "relative flex shrink-0 items-center gap-2 border-b-[3px] px-3 py-2.5 text-[14.5px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
    tab.active ? "border-accent text-accent" : "border-transparent text-muted hover:border-line hover:text-ink",
  );
  const inner = (
    <>
      <tab.icon className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
      {label}
      {tab.done && (
        <span className="grid h-4 w-4 place-items-center rounded-full bg-good text-white" aria-label={t("khan.lesson.done", "Done")}>
          <Check className="h-2.5 w-2.5" strokeWidth={4} />
        </span>
      )}
    </>
  );
  return tab.href ? (
    <Link href={tab.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button onClick={tab.onSelect} className={cls}  aria-current={tab.active ? "page" : undefined}>
      {inner}
    </button>
  );
}
