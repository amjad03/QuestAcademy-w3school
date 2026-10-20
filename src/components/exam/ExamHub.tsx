"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Atom, BookMarked, Crosshair, Dna, FlaskConical, Pi, ScrollText, Stethoscope, Timer, Wrench, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ExamId, ExamSubject } from "@/content/types";
import { useLearner } from "@/lib/store";
import { MOCK_TESTS, SUBJECT_META, nextExamDate } from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { QuestsCard, RailCard } from "@/components/shell/RailCards";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";

export const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };

const MOCK_ICON: Record<string, { icon: LucideIcon; color: string }> = {
  "neet-full": { icon: Stethoscope, color: "#2EBE70" },
  "jee-main": { icon: Wrench, color: "#2F6BFF" },
  "physics-sprint": { icon: Atom, color: "#1CB0F6" },
  "chemistry-sprint": { icon: FlaskConical, color: "#14B8A6" },
  "biology-sprint": { icon: Dna, color: "#2EBE70" },
  "maths-sprint": { icon: Pi, color: "#7C4DFF" },
};

export function useExamChoice() {
  const [exam, setExam] = useState<ExamId>("NEET");
  useEffect(() => {
    try {
      const e = localStorage.getItem("qa-exam");
      if (e === "NEET" || e === "JEE") setExam(e);
    } catch {
      /* ignore */
    }
  }, []);
  const choose = (e: ExamId) => {
    setExam(e);
    try {
      localStorage.setItem("qa-exam", e);
    } catch {
      /* ignore */
    }
  };
  return [exam, choose] as const;
}

export function ExamHub({ questionCount, formulaCount, chapters }: { questionCount: number; formulaCount: number; chapters: Record<string, string[]> }) {
  const [exam, choose] = useExamChoice();
  const catalog = useCatalog();
  const courses = catalog.filter((c) => c.world === "exam" && c.levels.some((l) => (exam === "NEET" ? l === "NEET" : l.startsWith("JEE"))));
  const mocks = MOCK_TESTS.filter((m) => m.exam === exam || m.exam === "Mixed");
  const subjects: ExamSubject[] = exam === "NEET" ? ["physics", "chemistry", "biology"] : ["physics", "chemistry", "maths"];

  const rail = (
    <>
      <CountdownCard exam={exam} />
      <RecentResultsCard />
      <QuestsCard limit={2} />
    </>
  );

  return (
    <PageColumns rail={rail}>
      {/* header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Mascot pose="think" size={96} />
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Exam prep</p>
          <h1 className="mt-1 text-3xl font-black">Get exam-ready for {exam}</h1>
          <p className="mt-1 font-semibold text-muted">
            {questionCount} exam-style questions, {formulaCount} formulas and full mock tests in the real computer-based format.
          </p>
        </div>
        <div className="flex shrink-0 rounded-2xl border-2 border-line p-1" role="tablist" aria-label="Exam">
          {(["NEET", "JEE"] as const).map((e) => (
            <button
              key={e}
              role="tab"
              aria-selected={exam === e}
              onClick={() => choose(e)}
              className={clsx("rounded-xl px-5 py-2 text-sm font-extrabold uppercase tracking-wide transition", exam === e ? "bg-accent text-white" : "text-muted hover:bg-surface-2")}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* actions */}
      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        {[
          { href: `/exam/mock/${exam === "NEET" ? "neet-full" : "jee-main"}`, icon: Timer, color: "#FF4B4B", t: "Full mock test", d: "Exam-day simulation with timer and palette" },
          { href: "/exam/practice", icon: Crosshair, color: "#2F6BFF", t: "Chapter drill", d: "Adaptive questions, one chapter at a time" },
          { href: "/exam/formulas", icon: ScrollText, color: "#7C4DFF", t: "Formula vault", d: "Revise and self-test every formula" },
          { href: "/exam/mock", icon: BookMarked, color: "#FF8A00", t: "All tests", d: "Subject sprints and full mocks" },
        ].map((a) => (
          <Link key={a.t} href={a.href} className="tile group flex items-center gap-4 p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: a.color }}>
              <a.icon className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-black">{a.t}</span>
              <span className="block truncate text-sm font-semibold text-muted">{a.d}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </section>

      {/* chapter drills */}
      <section className="mt-10">
        <h2 className="text-xl font-black">Chapter-wise drills</h2>
        <div className="mt-4 space-y-3">
          {subjects.map((sub) => {
            const I = SUBJECT_ICON[sub];
            return (
              <div key={sub} className="card p-5">
                <div className="mb-3 flex items-center gap-2 font-black">
                  <I className="h-5 w-5" style={{ color: SUBJECT_META[sub].color }} strokeWidth={2.5} /> {SUBJECT_META[sub].name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(chapters[sub] ?? []).map((c) => (
                    <Link key={c} href={`/exam/practice?subject=${sub}&chapter=${encodeURIComponent(c)}`} className="rounded-xl border-2 border-b-4 border-line bg-surface px-3 py-1.5 text-sm font-bold transition hover:bg-surface-2 hover:text-accent active:translate-y-[2px] active:border-b-2">
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* mocks */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-black">Mock tests for {exam}</h2>
          <Link href="/exam/mock" className="text-sm font-extrabold uppercase tracking-wide text-accent">
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {mocks.map((m) => (
            <MockCard key={m.id} id={m.id} />
          ))}
        </div>
      </section>

      {/* courses */}
      <section className="mt-10">
        <h2 className="text-xl font-black">Concept courses</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {courses.map((c) => (
            <Link key={c.slug} href={c.href} className="tile flex items-center gap-4 p-4">
              <CourseIcon slug={c.slug} size={48} />
              <span className="min-w-0">
                <span className="block truncate font-black">{c.title}</span>
                <span className="block truncate text-sm font-semibold text-muted">
                  {c.units} units · {c.lessons} lessons
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageColumns>
  );
}

function CountdownCard({ exam }: { exam: ExamId }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = now ? nextExamDate(exam, now) : null;
  const diff = target && now ? target.getTime() - now.getTime() : 0;
  const parts: [number, string][] = [
    [Math.floor(diff / 86_400_000), "days"],
    [Math.floor((diff % 86_400_000) / 3_600_000), "hrs"],
    [Math.floor((diff % 3_600_000) / 60_000), "min"],
    [Math.floor((diff % 60_000) / 1000), "sec"],
  ];
  return (
    <RailCard title={exam === "NEET" ? "NEET UG countdown" : "JEE Main countdown"}>
      <div className="grid grid-cols-4 gap-2 text-center">
        {parts.map(([n, l]) => (
          <div key={l} className="rounded-xl bg-surface-2 py-2.5">
            <div className="font-mono text-2xl font-black text-bad">{now ? String(n).padStart(2, "0") : "--"}</div>
            <div className="text-[11px] font-extrabold uppercase text-muted">{l}</div>
          </div>
        ))}
      </div>
      {target && (
        <p className="mt-3 text-center text-xs font-semibold text-muted">
          Approx. {target.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })} — check the official schedule.
        </p>
      )}
    </RailCard>
  );
}

function RecentResultsCard() {
  const hydrated = useHydrated();
  const results = useLearner((s) => s.mockResults);
  if (!hydrated) return null;
  const recent = results.slice(0, 6).reverse();
  return (
    <RailCard title="Recent results" action={results.length ? { href: "/exam/mock", label: "Tests" } : undefined}>
      {recent.length ? (
        <div className="flex h-32 items-end gap-2">
          {recent.map((r) => {
            const f = Math.max(0, r.score / r.max);
            return (
              <div key={r.id} className="flex flex-1 flex-col items-center gap-1.5" title={`${r.title}: ${r.score}/${r.max}`}>
                <span className="text-xs font-black">{Math.round(f * 100)}%</span>
                <div className="w-full max-w-[36px] rounded-t-lg bg-accent" style={{ height: `${Math.max(6, f * 100)}%` }} />
                <span className="text-[10px] font-bold text-muted">{new Date(r.date).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm font-semibold leading-6 text-muted">Take your first mock test to unlock score trends, accuracy and chapter analysis.</p>
      )}
    </RailCard>
  );
}

export function MockCard({ id }: { id: string }) {
  const m = MOCK_TESTS.find((x) => x.id === id)!;
  const hydrated = useHydrated();
  const best = useLearner((s) => s.mockResults.filter((r) => r.testId === id).reduce<number | null>((a, r) => (a === null || r.score > a ? r.score : a), null));
  const total = m.sections.reduce((a, s) => a + s.count, 0);
  const max = total * m.marking.correct;
  const { icon: I, color } = MOCK_ICON[m.id] ?? { icon: Timer, color: "#2F6BFF" };
  return (
    <Link href={`/exam/mock/${m.id}`} className="tile group flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: color }}>
          <I className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <span className="chip">{m.exam === "Mixed" ? "NEET · JEE" : m.exam}</span>
      </div>
      <h3 className="mt-4 text-lg font-black group-hover:text-accent">{m.title}</h3>
      <p className="mt-1 flex-1 text-sm font-semibold leading-6 text-muted">{m.blurb}</p>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted">
        <span>{total} questions</span>·<span>{m.minutes} min</span>·<span>{max} marks</span>
      </div>
      {hydrated && best !== null && (
        <div className="mt-3 flex items-center gap-2">
          <ProgressBar value={Math.max(0, best) / max} height={10} color={color} label="Best score" />
          <span className="shrink-0 text-xs font-black" style={{ color }}>
            Best {best}
          </span>
        </div>
      )}
    </Link>
  );
}
