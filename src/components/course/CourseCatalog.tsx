"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import type { CourseCard } from "@/content/course";
import type { WorldId } from "@/content/types";
import { worlds } from "@/content/worlds";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { masteryPoints } from "@/lib/mastery";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";

type Card = CourseCard & { description: string };

export function CourseCatalog({ courses }: { courses: Card[] }) {
  const t = useT();
  const params = useSearchParams();
  const router = useRouter();
  const cat = (params.get("c") as WorldId | null) ?? null;
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return courses.filter((c) => (!cat || c.world === cat) && (!needle || [c.title, c.tagline, c.description, c.domain ?? "", ...c.levels].join(" ").toLowerCase().includes(needle)));
  }, [courses, cat, q]);

  const groups = worlds.filter((w) => !cat || w.id === cat).map((w) => ({ w, list: shown.filter((c) => c.world === w.id) })).filter((g) => g.list.length);

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-black">{t("course.catalog.title", "Courses")}</h1>
      <p className="mt-1 font-semibold text-muted">{t("course.catalog.subtitle", "Every course has videos, lessons, practice, unit tests and a course challenge.")}</p>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {[{ id: null, name: t("course.catalog.all", "All") }, ...worlds.map((w) => ({ id: w.id, name: w.name }))].map((f) => (
            <button
              key={f.id ?? "all"}
              onClick={() => router.replace(f.id ? `/courses?c=${f.id}` : "/courses", { scroll: false })}
              className={clsx("rounded-xl border-2 border-b-4 px-4 py-2 text-sm font-extrabold transition", cat === f.id ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2")}
            >
              {f.name}
            </button>
          ))}
        </div>
        <label className="relative lg:ml-auto lg:w-72">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("course.catalog.search", "Search courses")} className="input pl-12" />
        </label>
      </div>

      <div className="mt-10 space-y-12">
        {groups.map(({ w, list }) => (
          <section key={w.id}>
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-xl font-black">{w.name}</h2>
              <span className="text-sm font-bold text-muted">{w.short}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {list.map((c) => (
                <CourseTile key={c.slug} c={c} />
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && <p className="py-20 text-center font-bold text-muted">{t("course.catalog.noMatch", "No courses match “{query}”.", { query: q })}</p>}
      </div>
    </div>
  );
}

function CourseTile({ c }: { c: Card }) {
  const t = useT();
  const hydrated = useHydrated();
  const mastery = useLearner((s) => s.mastery);
  const setProfile = useLearner((s) => s.setProfile);
  const current = useLearner((s) => s.profile.course);
  const mp = hydrated ? masteryPoints(c.lessonIds.map((id) => mastery[id])) : { pct: 0 };
  const { color } = courseStyle(c.slug);
  const tx = useSharedText();
  return (
    <div className="tile group flex flex-col p-5">
      <Link href={c.href} className="flex items-start gap-4">
        <CourseIcon slug={c.slug} size={56} />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black group-hover:text-accent">{tx(c.title)}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm font-semibold leading-6 text-muted">{tx(c.tagline)}</p>
        </div>
      </Link>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {c.levels.slice(0, 3).map((l) => (
          <span key={l} className="chip">
            {tx(l)}
          </span>
        ))}
        <span className="chip">{t("course.stats.units", "{n} units", { n: c.units })}</span>
        <span className="chip">{t("course.stats.lessons", "{n} lessons", { n: c.lessons })}</span>
      </div>
      <div className="mt-auto flex items-center gap-3 pt-5">
        {mp.pct > 0 ? (
          <>
            <ProgressBar value={mp.pct} height={10} color={color} />
            <span className="w-10 shrink-0 text-right text-sm font-black" style={{ color }}>
              {Math.round(mp.pct * 100)}%
            </span>
          </>
        ) : (
          <span className="flex-1 text-sm font-bold text-muted">{t("course.catalog.notStarted", "Not started")}</span>
        )}
        <Link href="/learn" onClick={() => setProfile({ course: c.slug })} className={clsx("btn !px-4 !py-2 text-xs", hydrated && current === c.slug ? "btn-ghost" : "btn-primary")}>
          {hydrated && current === c.slug ? t("course.continue", "Continue") : t("course.start", "Start")}
        </Link>
      </div>
    </div>
  );
}
