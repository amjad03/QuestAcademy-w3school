"use client";

import Link from "next/link";
import clsx from "clsx";
import type { CatalogSubject } from "@/content";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";

export function useSubjectProgress(s: CatalogSubject) {
  const hydrated = useHydrated();
  const lessons = useLearner((st) => st.lessons);
  const done = hydrated ? s.lessons.filter((l) => lessons[l.id]).length : 0;
  return { done, total: s.lessons.length, pct: s.lessons.length ? done / s.lessons.length : 0 };
}

export function SubjectCard({ s, variant = "default" }: { s: CatalogSubject; variant?: "default" | "kids" | "code" | "campus" | "exam" }) {
  const p = useSubjectProgress(s);
  const minutes = s.lessons.reduce((a, l) => a + l.minutes, 0);
  const topics = Array.from(new Set(s.lessons.map((l) => l.topicIcon + " " + l.topicTitle)));

  if (variant === "kids") {
    return (
      <Link
        href={`/learn/${s.slug}`}
        className="group relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border-b-8 border-black/15 p-6 text-center font-kids text-white shadow-soft transition hover:-translate-y-2 hover:rotate-1 active:translate-y-0"
        style={{ background: `linear-gradient(160deg, ${s.colors[0]}, ${s.colors[1]})` }}
      >
        <span className="text-[5.5rem] leading-none transition group-hover:scale-110 group-hover:animate-wiggle">{s.icon}</span>
        <span className="mt-3 text-2xl font-bold">{s.title}</span>
        <span className="mt-1 text-sm opacity-90">{s.tagline}</span>
        <span className="mt-4 flex gap-1 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < Math.round(p.pct * 5) ? "" : "opacity-40 grayscale"}>
              ⭐
            </span>
          ))}
        </span>
      </Link>
    );
  }

  return (
    <Link href={`/learn/${s.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
      <div className="relative h-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})` }}>
        <div className={clsx("absolute inset-0", variant === "code" ? "grid-bg opacity-20" : "dot-bg opacity-25")} />
        <span className="absolute -bottom-3 right-4 text-7xl drop-shadow-lg transition group-hover:-translate-y-2 group-hover:rotate-6">{s.icon}</span>
        <div className="absolute left-4 top-4 flex flex-wrap gap-1">
          {s.levels.slice(0, 3).map((l) => (
            <span key={l} className="rounded-full bg-black/25 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {s.domain && <span className="text-[11px] font-bold uppercase tracking-wider text-accent">{s.domain}</span>}
        <h3 className={clsx("text-xl font-bold", variant === "campus" ? "font-serif" : variant === "code" ? "font-mono" : "font-display")}>{s.title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted">{s.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {topics.slice(0, 4).map((t) => (
            <span key={t} className="chip !text-[11px]">
              {t}
            </span>
          ))}
          {topics.length > 4 && <span className="chip !text-[11px]">+{topics.length - 4}</span>}
        </div>
        <div className="mt-auto pt-5">
          <div className="flex justify-between text-xs text-muted">
            <span>
              {p.total} lessons · {Math.round(minutes / 6) / 10}h
            </span>
            <span>{p.done ? `${Math.round(p.pct * 100)}%` : "Not started"}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${p.pct * 100}%` }} />
          </div>
        </div>
      </div>
    </Link>
  );
}
