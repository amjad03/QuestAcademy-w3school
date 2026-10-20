"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CourseOutline } from "@/content/course";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, QuestsCard, RailFooter, SaveProgressCard } from "@/components/shell/RailCards";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { LearnPath } from "./LearnPath";

const outlines = new Map<string, CourseOutline>();

export function useOutline(slug: string | null | undefined) {
  const [outline, setOutline] = useState<CourseOutline | null>(slug ? (outlines.get(slug) ?? null) : null);
  useEffect(() => {
    if (!slug) return setOutline(null);
    if (outlines.has(slug)) return setOutline(outlines.get(slug)!);
    let live = true;
    fetch(`/course-data/${slug}`)
      .then((r) => r.json())
      .then((o: CourseOutline) => {
        outlines.set(slug, o);
        if (live) setOutline(o);
      })
      .catch(() => live && setOutline(null));
    return () => {
      live = false;
    };
  }, [slug]);
  return outline;
}

export function LearnHome() {
  const hydrated = useHydrated();
  const course = useLearner((s) => s.profile.course);
  const outline = useOutline(hydrated ? course : null);

  const rail = (
    <>
      <SaveProgressCard />
      <LeagueCard />
      <QuestsCard />
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}>{null}</PageColumns>;
  if (!course) return <PageColumns rail={rail}><PickCourse /></PageColumns>;

  return (
    <PageColumns rail={rail}>
      <div className="mx-auto max-w-[600px]">{outline ? <LearnPath outline={outline} /> : <PathSkeleton />}</div>
    </PageColumns>
  );
}

function PathSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-14 rounded-2xl bg-surface-2" />
      <div className="h-20 rounded-2xl bg-surface-2" />
      {[0, -48, -76, -48, 0].map((x, i) => (
        <div key={i} className="mx-auto h-[66px] w-[72px] rounded-full bg-surface-2" style={{ transform: `translateX(${x}px)` }} />
      ))}
    </div>
  );
}

function PickCourse() {
  const catalog = useCatalog();
  const setProfile = useLearner((s) => s.setProfile);
  const popular = ["math-middle", "python", "exam-physics", "abc-adventures", "machine-learning", "biology-school"]
    .map((s) => catalog.find((c) => c.slug === s))
    .filter(Boolean) as typeof catalog;
  return (
    <div className="mx-auto max-w-xl py-6 text-center">
      <div className="flex justify-center">
        <Mascot pose="wave" size={140} />
      </div>
      <h1 className="mt-6 text-3xl font-black">What do you want to learn first?</h1>
      <p className="mt-2 font-semibold text-muted">Pick a course to start your path. You can add more any time.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {popular.map((c) => (
          <button key={c.slug} onClick={() => setProfile({ course: c.slug })} className="tile flex items-center gap-3 p-4 text-left">
            <CourseIcon slug={c.slug} size={44} />
            <span className="min-w-0">
              <span className="block truncate font-extrabold">{c.title}</span>
              <span className="block truncate text-sm font-semibold text-muted">{c.lessons} lessons</span>
            </span>
          </button>
        ))}
      </div>
      <Link href="/courses" className="btn-ghost mt-6">
        Browse all courses
      </Link>
    </div>
  );
}
