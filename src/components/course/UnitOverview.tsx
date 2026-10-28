"use client";

import Link from "next/link";
import { useMemo } from "react";
import { BookOpenCheck, Check, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import clsx from "clsx";
import type { CourseOutline } from "@/content/course";
import { ITEM_LABEL } from "@/content/item-label";
import { useLearner } from "@/lib/store";
import { EMPTY_PROGRESS, itemDone, lessonProgress, unitProgress } from "@/lib/progress";
import { MASTERY } from "@/lib/mastery";
import { useHydrated } from "@/components/providers";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { ITEM_ICON } from "@/components/learn/LearnPath";
import { MasteryGrid } from "./MasteryGrid";
import { ResourcesPanel } from "@/components/mastery/ResourcesPanel";
import { localize, useContentDict, useSharedText } from "@/i18n/content";

export function UnitOverview({ outline: raw, unitSlug }: { outline: CourseOutline; unitSlug: string }) {
  const tx = useSharedText();
  const dict = useContentDict(raw.slug);
  const outline = useMemo(() => {
    const o = localize(raw, dict);
    return { ...o, title: tx(o.title) };
  }, [raw, dict, tx]);
  const hydrated = useHydrated();
  const s = useLearner();
  const st = hydrated ? s : EMPTY_PROGRESS;
  const ui = outline.units.findIndex((u) => u.slug === unitSlug);
  const u = outline.units[ui];
  const up = unitProgress(st, u);
  const { color, shade } = courseStyle(outline.slug);
  const prev = outline.units[ui - 1];
  const next = outline.units[ui + 1];

  return (
    <div className="mx-auto max-w-[900px] px-4 py-8 sm:px-6">
      <Link href={outline.href} className="flex items-center gap-2 text-sm font-extrabold text-muted hover:text-accent">
        <CourseIcon slug={outline.slug} size={24} /> {outline.title}
      </Link>

      <header className="mt-5 rounded-3xl p-6 text-white sm:p-8" style={{ background: color, boxShadow: `inset 0 -6px 0 ${shade}` }}>
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-white/75">Unit {ui + 1} of {outline.units.length}</p>
        <h1 className="mt-1 text-3xl font-black">{u.title}</h1>
        <p className="mt-2 max-w-xl font-semibold text-white/85">{u.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <ProgressBar value={up.pct} height={14} color="#fff" className="!bg-white/25" />
          <span className="shrink-0 font-black">{Math.round(up.pct * 100)}%</span>
        </div>
        <div className="mt-4">
          <MasteryGrid size={18} skills={u.lessons.map((l) => ({ id: l.id, title: l.title, href: l.href, level: lessonProgress(st, l).level }))} />
        </div>
      </header>

      <div className="mt-8 space-y-4">
        {u.lessons.map((l, li) => {
          const lp = lessonProgress(st, l);
          return (
            <section key={l.id} className="card overflow-hidden">
              <div className="flex items-center gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: lp.complete ? "rgb(var(--good))" : color }}>
                  {lp.complete ? <Check className="h-5 w-5" strokeWidth={3.5} /> : li + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <Link href={l.href} className="text-lg font-black hover:text-accent">
                    {l.title}
                  </Link>
                  <p className="text-sm font-semibold text-muted">{MASTERY[lp.level].name} · {lp.itemsDone}/{lp.itemsTotal} done</p>
                </div>
                <Link href={lp.nextItem.href} className="btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex">
                  {lp.complete ? "Review" : lp.itemsDone ? "Continue" : "Start"}
                </Link>
              </div>
              <ul className="grid gap-px border-t-2 border-line bg-line sm:grid-cols-2">
                {l.items.map((it, ii) => {
                  const I = ITEM_ICON[it.kind];
                  const done = itemDone(st, l.id, it);
                  return (
                    <li key={it.id} className={clsx("bg-surface", ii === l.items.length - 1 && l.items.length % 2 === 1 && "sm:col-span-2")}>
                      <Link href={it.href} className="flex items-center gap-3 px-5 py-3 transition hover:bg-surface-2">
                        <I className={clsx("h-5 w-5 shrink-0", done ? "text-good" : "text-muted")} strokeWidth={2.4} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold">{it.kind === "practice" ? "Practice" : it.title}</span>
                          <span className="text-xs font-semibold text-muted">
                            {ITEM_LABEL[it.kind]} · {it.minutes} min
                          </span>
                        </span>
                        {done && <Check className="h-4 w-4 text-good" strokeWidth={3.5} />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {[u.quiz, u.test].filter(Boolean).map((a) => {
          const best = hydrated ? s.assessments[a!.key] : undefined;
          return (
            <section key={a!.key} className="card flex items-center gap-4 p-5">
              <span className={clsx("grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white", a!.kind === "test" ? "bg-warn" : "bg-accent-2")}>
                {a!.kind === "test" ? <Trophy className="h-6 w-6" /> : <BookOpenCheck className="h-6 w-6" />}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-black">{a!.kind === "test" ? "Unit test" : "Quiz 1"}</h3>
                <p className="text-sm font-semibold text-muted">
                  {a!.questions} questions · level up to {a!.kind === "test" ? "Mastered" : "Proficient"}
                  {best !== undefined && ` · best ${Math.round(best * 100)}%`}
                </p>
              </div>
              <Link href={a!.href} className={a!.kind === "test" ? "btn-gold" : "btn-purple"}>
                {best !== undefined ? "Retake" : "Start"}
              </Link>
            </section>
          );
        })}
      </div>

      <ResourcesPanel course={outline.slug} unit={u.slug} />

      <nav className="mt-10 flex justify-between gap-3">
        {prev ? (
          <Link href={prev.href} className="btn-ghost">
            <ChevronLeft className="h-4 w-4" /> Unit {ui}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={next.href} className="btn-ghost">
            Unit {ui + 2} <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
