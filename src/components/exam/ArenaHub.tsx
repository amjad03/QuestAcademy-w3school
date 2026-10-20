"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookMarked, Crosshair, ScrollText, Timer } from "lucide-react";
import clsx from "clsx";
import type { CatalogSubject } from "@/content";
import type { ExamId } from "@/content/types";
import { useLearner } from "@/lib/store";
import { MOCK_TESTS, SUBJECT_META, nextExamDate } from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { SubjectCard } from "@/components/world/SubjectCard";

export function ArenaHub({ courses, questionCount, formulaCount, chapters }: { courses: CatalogSubject[]; questionCount: number; formulaCount: number; chapters: Record<string, string[]> }) {
  const hydrated = useHydrated();
  const results = useLearner((s) => s.mockResults);
  const [exam, setExam] = useState<ExamId>("NEET");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    try {
      const e = localStorage.getItem("qa-exam");
      if (e === "NEET" || e === "JEE") setExam(e);
    } catch {
      /* ignore */
    }
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const choose = (e: ExamId) => {
    setExam(e);
    try {
      localStorage.setItem("qa-exam", e);
    } catch {
      /* ignore */
    }
  };

  const target = now ? nextExamDate(exam, now) : null;
  const diff = target && now ? target.getTime() - now.getTime() : 0;
  const days = Math.floor(diff / 86_400_000);
  const hrs = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  const relevantCourses = courses.filter((c) => c.levels.some((l) => (exam === "NEET" ? l === "NEET" : l.startsWith("JEE"))));
  const mocks = MOCK_TESTS.filter((m) => m.exam === exam || m.exam === "Mixed");
  const subjects = exam === "NEET" ? (["physics", "chemistry", "biology"] as const) : (["physics", "chemistry", "maths"] as const);
  const recent = hydrated ? results.slice(0, 8).reverse() : [];

  return (
    <div data-world="exam" className="min-h-screen bg-bg text-ink">
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(245_158_11/0.18),transparent_60%)]" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="chip">⚔️ The Arena · 🐉 with Blaze</span>
            <div className="flex rounded-2xl border border-line bg-surface p-1">
              {(["NEET", "JEE"] as const).map((e) => (
                <button key={e} onClick={() => choose(e)} className={clsx("rounded-xl px-5 py-2 text-sm font-bold transition", exam === e ? "bg-accent text-black" : "text-muted hover:text-ink")}>
                  {e}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
                Train like
                <br />
                <span className="text-gradient">a topper.</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg text-muted">
                {questionCount} exam-style questions, real CBT simulator, {formulaCount} formulas and analytics that tell you exactly what to fix next.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-muted">
                {exam === "NEET" ? "NEET UG" : "JEE Main · Session 1"} countdown <span className="normal-case tracking-normal">(approx.)</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                {[
                  [days, "days"],
                  [hrs, "hrs"],
                  [mins, "min"],
                  [secs, "sec"],
                ].map(([n, l]) => (
                  <div key={l as string} className="rounded-2xl bg-surface-2 py-3">
                    <div className="font-mono text-3xl font-bold text-accent">{now ? String(n).padStart(2, "0") : "--"}</div>
                    <div className="text-[11px] uppercase text-muted">{l}</div>
                  </div>
                ))}
              </div>
              {target && <div className="mt-3 text-center text-xs text-muted">Target: {target.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })} — check the official schedule.</div>}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
        {/* actions */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: `/exam/mock/${exam === "NEET" ? "neet-full" : "jee-main"}`, icon: Timer, t: "Full mock", d: "Exam-day CBT simulation" },
            { href: "/exam/practice", icon: Crosshair, t: "Chapter drill", d: "Adaptive, one chapter at a time" },
            { href: "/exam/formulas", icon: ScrollText, t: "Formula vault", d: "Revise & self-test formulas" },
            { href: "/exam/mock", icon: BookMarked, t: "All tests", d: "Sprints & subject mocks" },
          ].map((a, i) => (
            <motion.div key={a.t} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link href={a.href} className="card group flex h-full flex-col p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
                <a.icon className="h-8 w-8 text-accent" />
                <span className="mt-4 text-lg font-bold">{a.t}</span>
                <span className="text-sm text-muted">{a.d}</span>
                <ArrowRight className="mt-4 h-5 w-5 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            </motion.div>
          ))}
        </section>

        {/* performance */}
        <section className="card p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">Performance trend</h2>
            <span className="text-xs text-muted">last {recent.length} tests</span>
          </div>
          {recent.length ? (
            <div className="mt-6 flex h-40 items-end gap-3">
              {recent.map((r) => {
                const f = Math.max(0, r.score / r.max);
                return (
                  <div key={r.id} className="flex flex-1 flex-col items-center gap-2" title={`${r.title}: ${r.score}/${r.max}`}>
                    <span className="font-mono text-xs font-bold">{Math.round(f * 100)}%</span>
                    <motion.div className="w-full max-w-[48px] rounded-t-xl bg-gradient-to-t from-accent-2 to-accent" initial={{ height: 0 }} animate={{ height: `${Math.max(6, f * 100)}%` }} />
                    <span className="w-full truncate text-center text-[10px] text-muted">{new Date(r.date).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-4 text-muted">No tests yet. Your first mock unlocks score trends, accuracy and chapter heat-maps.</p>
          )}
        </section>

        {/* chapter grid */}
        <section>
          <h2 className="mb-5 font-display text-2xl font-bold">Chapter-wise drills</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {subjects.map((sub) => (
              <div key={sub} className="card p-5">
                <div className="mb-3 flex items-center gap-2 font-semibold">
                  <span className="text-2xl">{SUBJECT_META[sub].emoji}</span> {SUBJECT_META[sub].name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(chapters[sub] ?? []).map((c) => (
                    <Link key={c} href={`/exam/practice?subject=${sub}&chapter=${encodeURIComponent(c)}`} className="rounded-xl border border-line bg-surface-2 px-3 py-1.5 text-xs font-medium transition hover:border-accent hover:text-accent">
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* mocks */}
        <section>
          <h2 className="mb-5 font-display text-2xl font-bold">Mock tests for {exam}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mocks.map((m) => (
              <MockCard key={m.id} id={m.id} />
            ))}
          </div>
        </section>

        {/* courses */}
        <section>
          <h2 className="mb-5 font-display text-2xl font-bold">Concept crash courses</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relevantCourses.map((c) => (
              <SubjectCard key={c.slug} s={c} variant="exam" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function MockCard({ id }: { id: string }) {
  const m = MOCK_TESTS.find((x) => x.id === id)!;
  const hydrated = useHydrated();
  const best = useLearner((s) => s.mockResults.filter((r) => r.testId === id).reduce<number | null>((a, r) => (a === null || r.score > a ? r.score : a), null));
  const total = m.sections.reduce((a, s) => a + s.count, 0);
  return (
    <Link href={`/exam/mock/${m.id}`} className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:border-accent/50">
      <div className="flex items-start justify-between">
        <span className="text-4xl">{m.emoji}</span>
        <span className="chip">{m.exam === "Mixed" ? "NEET · JEE" : m.exam}</span>
      </div>
      <h3 className="mt-3 text-lg font-bold">{m.title}</h3>
      <p className="mt-1 flex-1 text-sm text-muted">{m.blurb}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
        <span>{total} Q</span>·<span>{m.minutes} min</span>·<span>{total * m.marking.correct} marks</span>
        {hydrated && best !== null && <span className="ml-auto font-bold text-accent">Best {best}</span>}
      </div>
    </Link>
  );
}
