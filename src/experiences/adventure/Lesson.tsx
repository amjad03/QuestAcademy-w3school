"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, ChevronLeft, Clock, Radar, Zap } from "lucide-react";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useOutline } from "@/components/learn/LearnHome";
import type { LessonLayoutProps, LessonTab } from "../types";
import { NeonBar, OBJECTIVE, pad2 } from "./hud";

/** Adventure lesson page — a "mission briefing". */
export function AdventureLessonLayout(p: LessonLayoutProps) {
  const [mapOpen, setMapOpen] = useState(false);
  const outline = useOutline(p.course.slug);
  const unit = outline?.units[p.unit.index];
  const num = unit ? unit.lessons.findIndex((l) => l.id === p.lesson.id) + 1 : 0;
  const code = `U${pad2(p.unit.index + 1)}${num > 0 ? `-M${pad2(num)}` : ""}`;
  const done = p.tabs.filter((t) => t.done).length;

  const sectorMap = (
    <div className="adv-sectormap">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="adv-sectionhead !text-sm">
          <Radar className="h-4 w-4 text-accent" aria-hidden /> Sector map
        </p>
        <span className="font-mono text-xs text-muted">
          {p.unitProgress.done}/{p.unitProgress.total} cleared
        </span>
      </div>
      <NeonBar value={p.unitProgress.done / Math.max(1, p.unitProgress.total)} color="rgb(var(--good))" height={5} className="mb-5" label="Sector progress" />
      {p.unitNav}
    </div>
  );

  return (
    <div className="mx-auto flex max-w-[1240px] gap-8 px-4 py-5 sm:px-6 lg:py-7">
      <div className="min-w-0 flex-1">
        <div className="mx-auto max-w-[820px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link href={p.course.href} className="flex min-w-0 items-center gap-2 hover:text-accent">
              <CourseIcon slug={p.course.slug} size={22} flat /> <span className="hidden truncate sm:inline">{p.course.title}</span>
            </Link>
            <span aria-hidden>/</span>
            <Link href={p.unit.href} className="min-w-0 truncate hover:text-accent">
              Sector {p.unit.index + 1}: {p.unit.title}
            </Link>
            <button type="button" onClick={() => setMapOpen((o) => !o)} aria-expanded={mapOpen} className="btn-ghost ml-auto !px-3 !py-1.5 text-xs xl:hidden">
              <Radar className="h-4 w-4" aria-hidden /> Sector map
            </button>
          </div>
          {mapOpen && <div className="card mt-3 p-4 xl:hidden">{sectorMap}</div>}

          {/* Briefing */}
          <header className="adv-console mt-4 overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="adv-missioncode">MISSION {code}</span>
                <span className="text-xs text-white/55">
                  Unit {p.unit.index + 1}
                  {num > 0 ? ` · Lesson ${num}` : ""}
                </span>
                <span className="ml-auto flex items-center gap-3 font-mono text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden /> {p.lesson.minutes} min
                  </span>
                  <span className="flex items-center gap-1 text-[#FDE68A]">
                    <Zap className="h-3.5 w-3.5 fill-current" aria-hidden /> +{p.lesson.xp} XP
                  </span>
                </span>
              </div>
              <h1 className="mt-3 text-[1.7rem] font-bold leading-tight text-white sm:text-[2.1rem]">{p.lesson.title}</h1>
              {p.lesson.summary && <p className="mt-2 text-white/75">{p.lesson.summary}</p>}
            </div>

            <div className="border-t border-white/10 bg-black/20 px-5 py-4 sm:px-6">
              <p className="adv-code !text-white/55">
                Objectives · {done}/{p.tabs.length} complete
              </p>
              <ol className="mt-2.5 grid grid-cols-1 gap-1.5 min-[420px]:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                {p.tabs.map((t, i) => (
                  <li key={t.kind}>
                    <ObjectiveButton tab={t} n={i + 1} />
                  </li>
                ))}
              </ol>
            </div>
          </header>

          {/* Notebook toolbar */}
          <div className="adv-toolbar mt-3">{p.notebook}</div>

          {/* Main panel */}
          <div className="adv-content mt-5">{p.content}</div>

          {/* Next mission */}
          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
            {p.prev ? (
              <Link href={p.prev.href} className="flex min-w-0 items-center gap-2 text-sm text-muted hover:text-accent sm:max-w-[40%]">
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                <span className="truncate">
                  <span className="sr-only">Previous: </span>
                  {p.prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            <Link href={p.upNext.href} className="adv-nextcta group sm:ml-auto">
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#2DE2E6]">Next mission · {p.upNext.label}</span>
                <span className="block truncate font-semibold text-white">{p.upNext.title}</span>
              </span>
              <span className="adv-nextarrow" aria-hidden>
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <aside className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-[300px] shrink-0 self-start overflow-y-auto xl:block" aria-label="Sector map">
        <div className="card p-4">{sectorMap}</div>
      </aside>
    </div>
  );
}

function ObjectiveButton({ tab: t, n }: { tab: LessonTab; n: number }) {
  const cls = clsx("adv-obj", t.active && "is-active", t.done && "is-done");
  const inner = (
    <>
      <span className="adv-check" aria-hidden>
        {t.done ? <Check className="h-3.5 w-3.5" strokeWidth={3.5} /> : <span className="font-mono text-[10px]">{n}</span>}
      </span>
      <t.icon className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
      <span className="min-w-0 flex-1 truncate">{OBJECTIVE[t.kind] ?? t.label}</span>
      <span className="sr-only">{t.done ? "(complete)" : ""}</span>
    </>
  );
  return t.href ? (
    <Link href={t.href} className={cls} aria-current={t.active ? "step" : undefined}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={t.onSelect} className={cls} aria-pressed={t.active}>
      {inner}
    </button>
  );
}
