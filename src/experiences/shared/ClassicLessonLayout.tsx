"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, ChevronDown, ChevronLeft } from "lucide-react";
import { CourseIcon } from "@/components/brand/CourseIcon";
import type { LessonLayoutProps, LessonTab } from "../types";

/** The original lesson page: unit sidebar, title, item tabs, content, up next. */
export function ClassicLessonLayout(p: LessonLayoutProps) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="mx-auto flex max-w-[1240px]">
      <aside className="sticky top-0 hidden h-screen w-[300px] shrink-0 overflow-y-auto border-r-2 border-line px-4 py-6 xl:block">{p.unitNav}</aside>

      <div className="min-w-0 flex-1 px-4 py-6 sm:px-8 lg:py-8">
        <div className="mx-auto max-w-[760px]">
          <div className="flex items-center gap-2 text-sm font-extrabold text-muted">
            <Link href={p.course.href} className="flex items-center gap-2 hover:text-accent">
              <CourseIcon slug={p.course.slug} size={24} /> <span className="hidden sm:inline">{p.course.title}</span>
            </Link>
            <span>/</span>
            <Link href={p.unit.href} className="truncate hover:text-accent">
              Unit {p.unit.index + 1}: {p.unit.title}
            </Link>
            <button onClick={() => setNavOpen((o) => !o)} className="ml-auto flex items-center gap-1 rounded-xl border-2 border-line px-3 py-1.5 text-xs uppercase tracking-wide xl:hidden">
              Lessons <ChevronDown className={clsx("h-4 w-4 transition", navOpen && "rotate-180")} />
            </button>
          </div>
          {navOpen && <div className="card mt-3 p-4 xl:hidden">{p.unitNav}</div>}

          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-[2.4rem]">{p.lesson.title}</h1>
          <p className="mt-2 text-lg font-semibold text-muted">{p.lesson.summary}</p>
          {p.notebook}

          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {p.tabs.map((t) => (
              <TabButton key={t.kind} tab={t} />
            ))}
          </div>

          <div className="mt-8">{p.content}</div>

          <div className="mt-12 flex flex-col gap-3 border-t-2 border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            {p.prev ? (
              <Link href={p.prev.href} className="flex items-center gap-2 text-sm font-extrabold text-muted hover:text-accent">
                <ChevronLeft className="h-4 w-4" /> {p.prev.title}
              </Link>
            ) : (
              <span />
            )}
            <Link href={p.upNext.href} className="btn-primary">
              Up next: {p.upNext.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tab chip used by the classic layout (exported for experiences that want it). */
export function TabButton({ tab: t, className }: { tab: LessonTab; className?: string }) {
  const cls = clsx(
    "flex shrink-0 items-center gap-2 rounded-xl border-2 border-b-4 px-3.5 py-2 text-sm font-extrabold transition active:translate-y-[2px] active:border-b-2",
    t.active ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2",
    className,
  );
  const inner = (
    <>
      <t.icon className="h-[18px] w-[18px]" strokeWidth={2.6} />
      {t.label}
      {t.done && <Check className="h-4 w-4 text-good" strokeWidth={3.5} />}
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
