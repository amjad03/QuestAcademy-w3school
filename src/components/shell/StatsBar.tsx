"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Coins, Flame, Plus, Zap } from "lucide-react";
import clsx from "clsx";
import { liveStreak, useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useCatalog } from "./CatalogContext";
import { useMode } from "@/lib/useMode";

/** Course switcher + streak + coins + XP, like the top of Duolingo's right column. */
export function StatsBar({ compact }: { compact?: boolean }) {
  const hydrated = useHydrated();
  const catalog = useCatalog();
  const course = useLearner((s) => s.profile.course);
  const started = useLearner((s) => s.subjectsStarted);
  const setProfile = useLearner((s) => s.setProfile);
  const streak = useLearner((s) => liveStreak(s));
  const coins = useLearner((s) => s.coins);
  const xp = useLearner((s) => s.xp);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Postgraduate and professional profiles have no game layer: just the course switcher.
  const gameless = useMode().rewards === "minimal";

  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, []);

  if (!hydrated) return <div className={clsx(compact ? "h-10" : "h-12")} />;

  const mine = catalog.filter((c) => c.slug === course || started.includes(c.slug));
  const current = catalog.find((c) => c.slug === course);

  return (
    <div className={clsx("flex items-center", compact ? "justify-between" : "justify-between gap-2")}>
      <div className="relative" ref={ref}>
        <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-surface-2" aria-label="Switch course" aria-expanded={open}>
          {current ? <CourseIcon slug={current.slug} size={compact ? 30 : 34} /> : <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-dashed border-line text-muted"><Plus className="h-4 w-4" /></span>}
        </button>
        {open && (
          <div className="card absolute left-0 top-12 z-50 w-72 overflow-hidden p-2 shadow-lift">
            <p className="eyebrow px-3 pb-1 pt-2">My courses</p>
            {mine.map((c) => (
              <button
                key={c.slug}
                onClick={() => {
                  setProfile({ course: c.slug });
                  setOpen(false);
                }}
                className={clsx("flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left hover:bg-surface-2", c.slug === course && "bg-accent-soft")}
              >
                <CourseIcon slug={c.slug} size={32} />
                <span className="truncate text-sm font-bold">{c.title}</span>
              </button>
            ))}
            <Link href="/courses" onClick={() => setOpen(false)} className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold text-muted hover:bg-surface-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-dashed border-line">
                <Plus className="h-4 w-4" />
              </span>
              Add a new course
            </Link>
          </div>
        )}
      </div>
      {!gameless && (
        <>
          <Stat href="/quests" title="Day streak" icon={<Flame className={clsx("h-6 w-6", streak ? "fill-streak text-streak" : "text-line")} />} value={streak} color={streak ? "rgb(var(--streak))" : "rgb(var(--muted))"} />
          <Stat href="/shop" title="Coins" icon={<Coins className="h-6 w-6 text-warn-shade" strokeWidth={2.5} />} value={coins} color="rgb(var(--warn-shade))" />
          <Stat href="/profile" title="Total XP" icon={<Zap className="h-6 w-6 fill-accent text-accent" />} value={xp} color="rgb(var(--accent))" />
        </>
      )}
    </div>
  );
}

function Stat({ href, icon, value, color, title }: { href: string; icon: React.ReactNode; value: number; color: string; title: string }) {
  return (
    <Link href={href} title={title} className="flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[17px] font-black hover:bg-surface-2" style={{ color }}>
      {icon}
      {value >= 10000 ? `${Math.floor(value / 1000)}k` : value}
    </Link>
  );
}
