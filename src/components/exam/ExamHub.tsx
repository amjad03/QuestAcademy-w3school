"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BookMarked, Crosshair, ScrollText, Timer } from "lucide-react";
import clsx from "clsx";
import type { ExamId, ExamSubject } from "@/content/types";
import { useLearner } from "@/lib/store";
import { EXAM_IDS, EXAM_META, MOCK_TESTS, SUBJECT_META, getMock, mockMaxMarks, mockQuestionCount, nextExamDate } from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { QuestsCard, RailCard } from "@/components/shell/RailCards";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { useT } from "@/i18n";
import { useExamNames, useSubjectNames, useTxt } from "./labels";
import { SUBJECT_ICON, mockVisual } from "./icons";

export { SUBJECT_ICON };

const isExamId = (e: unknown): e is ExamId => typeof e === "string" && (EXAM_IDS as string[]).includes(e);

/** The exam the hub shows: last picked, else the learner's exam class, else NEET. */
export function useExamChoice() {
  const [exam, setExam] = useState<ExamId>("NEET");
  const profile = useLearner((s) => s.profile);
  useEffect(() => {
    try {
      const e = localStorage.getItem("qa-exam");
      if (isExamId(e)) return setExam(e);
    } catch {
      /* ignore */
    }
    if (profile.board === "exam" && isExamId(profile.grade)) setExam(profile.grade);
  }, [profile.board, profile.grade]);
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

/** One chapter of the question bank, for the hub's drill links. */
export interface HubChapter {
  subject: ExamSubject;
  chapter: string;
  grade: string | null;
  exams: ExamId[];
  n: number;
}

export function ExamHub({ questionCount, formulaCount, chapters }: { questionCount: number; formulaCount: number; chapters: HubChapter[] }) {
  const t = useT();
  const subjectName = useSubjectNames();
  const examName = useExamNames();
  const [exam, choose] = useExamChoice();
  const catalog = useCatalog();
  const courses = catalog.filter((c) => c.world === "exam" && c.levels.some((l) => (exam === "NEET" ? l === "NEET" : exam === "KCET" ? l === "NEET" || l.startsWith("JEE") : l.startsWith("JEE"))));
  const mocks = MOCK_TESTS.filter((m) => (m.exam === exam && m.kind !== "half") || (m.kind === "sprint" && (m.exam === "Mixed" || EXAM_META[exam].subjects.includes(m.sections[0].subject))));
  const subjects = EXAM_META[exam].subjects;

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
          <p className="eyebrow">{t("exam.hub.eyebrow", "Exam prep")}</p>
          <h1 className="mt-1 text-3xl font-black">{t("exam.hub.title", "Get exam-ready for {exam}", { exam: examName[exam] })}</h1>
          <p className="mt-1 font-semibold text-muted">
            {t("exam.hub.subtitle", "{questions} exam-style questions, {formulas} formulas and full mock tests in the real computer-based format.", { questions: questionCount, formulas: formulaCount })}
          </p>
        </div>
      </div>
      <div className="-mx-1 mt-5 flex gap-1 overflow-x-auto rounded-2xl border-2 border-line p-1" role="tablist" aria-label={t("exam.hub.examTabs", "Exam")}>
        {EXAM_IDS.map((e) => (
          <button
            key={e}
            role="tab"
            aria-selected={exam === e}
            onClick={() => choose(e)}
            className={clsx("shrink-0 flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-extrabold tracking-wide transition", exam === e ? "bg-accent text-white" : "text-muted hover:bg-surface-2")}
            data-exam={e}
          >
            {examName[e]}
          </button>
        ))}
      </div>

      {/* actions */}
      <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          { href: `/exam/mock/${EXAM_META[exam].fullMock}`, icon: Timer, color: "#FF4B4B", t: t("exam.hub.action.mock.title", "Full mock test"), d: t("exam.hub.action.mock.desc", "Exam-day simulation with timer and palette") },
          { href: `/exam/practice?exam=${exam}`, icon: Crosshair, color: "#2F6BFF", t: t("exam.hub.action.drill.title", "Chapter drill"), d: t("exam.hub.action.drill.desc", "Adaptive questions, one chapter at a time") },
          { href: "/exam/formulas", icon: ScrollText, color: "#7C4DFF", t: t("exam.hub.action.formulas.title", "Formula vault"), d: t("exam.hub.action.formulas.desc", "Revise and self-test every formula") },
          { href: "/exam/mock", icon: BookMarked, color: "#FF8A00", t: t("exam.hub.action.all.title", "All tests"), d: t("exam.hub.action.all.desc", "Subject sprints and full mocks") },
        ].map((a) => (
          <Link key={a.href} href={a.href} className="tile group flex items-center gap-4 p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: a.color }}>
              <a.icon className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-black">{a.t}</span>
              <span className="line-clamp-2 block text-sm font-semibold text-muted">{a.d}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </section>

      {/* chapter drills */}
      <section className="mt-10">
        <h2 className="text-xl font-black">{t("exam.hub.drills", "Chapter-wise drills")}</h2>
        <div className="mt-4 space-y-3">
          {subjects.map((sub) => {
            const I = SUBJECT_ICON[sub];
            return (
              <div key={sub} className="card p-5">
                <div className="mb-3 flex items-center gap-2 font-black">
                  <I className="h-5 w-5" style={{ color: SUBJECT_META[sub].color }} strokeWidth={2.5} /> {subjectName[sub]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {chapters
                    .filter((c) => c.subject === sub)
                    .sort((a, b) => (b.exams.includes(exam) ? 1 : 0) - (a.exams.includes(exam) ? 1 : 0) || (a.grade ?? "z").localeCompare(b.grade ?? "z"))
                    .map((c) => {
                      const p = new URLSearchParams({ exam, subject: sub, chapter: c.chapter });
                      if (c.grade) p.set("grade", c.grade);
                      return (
                        <Link key={c.chapter} href={`/exam/practice?${p}`} className="rounded-xl border-2 border-b-4 border-line bg-surface px-3 py-1.5 text-sm font-bold transition hover:bg-surface-2 hover:text-accent active:translate-y-[2px] active:border-b-2">
                          {c.chapter}
                          {c.grade && <span className="ml-1.5 text-xs font-bold text-muted">{c.grade === "11" ? t("exam.hub.class11", "Cl. 11") : t("exam.hub.class12", "Cl. 12")}</span>}
                        </Link>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* mocks */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-black">{t("exam.hub.mocksFor", "Mock tests for {exam}", { exam: examName[exam] })}</h2>
          <Link href="/exam/mock" className="text-sm font-extrabold uppercase tracking-wide text-accent">
            {t("exam.hub.viewAll", "View all")}
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
        <h2 className="text-xl font-black">{t("exam.hub.courses", "Concept courses")}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {courses.map((c) => (
            <Link key={c.slug} href={c.href} className="tile flex items-center gap-4 p-4">
              <CourseIcon slug={c.slug} size={48} />
              <span className="min-w-0">
                <span className="block truncate font-black">{c.title}</span>
                <span className="block truncate text-sm font-semibold text-muted">
                  {t("exam.hub.courseMeta", "{units} units · {lessons} lessons", { units: c.units, lessons: c.lessons })}
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
  const t = useT();
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const target = now ? nextExamDate(exam, now) : null;
  const diff = target && now ? target.getTime() - now.getTime() : 0;
  const parts: [number, string][] = [
    [Math.floor(diff / 86_400_000), t("exam.countdown.days", "days")],
    [Math.floor((diff % 86_400_000) / 3_600_000), t("exam.countdown.hrs", "hrs")],
    [Math.floor((diff % 3_600_000) / 60_000), t("exam.countdown.min", "min")],
    [Math.floor((diff % 60_000) / 1000), t("exam.countdown.sec", "sec")],
  ];
  return (
    <RailCard
      title={
        {
          NEET: t("exam.countdown.neet", "NEET UG countdown"),
          JEE: t("exam.countdown.jee", "JEE Main countdown"),
          JEE_ADV: t("exam.countdown.jeeAdv", "JEE Advanced countdown"),
          KCET: t("exam.countdown.kcet", "KCET countdown"),
          COMEDK: t("exam.countdown.comedk", "COMEDK countdown"),
        }[exam]
      }
    >
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
          {exam === "JEE"
            ? t("exam.countdown.approxJee", "Approx. {date} (next session; JEE Main has a January and an April session) — check the official schedule.", { date: target.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }) })
            : t("exam.countdown.approx", "Approx. {date} — check the official schedule.", { date: target.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }) })}
        </p>
      )}
    </RailCard>
  );
}

function RecentResultsCard() {
  const t = useT();
  const hydrated = useHydrated();
  const results = useLearner((s) => s.mockResults);
  if (!hydrated) return null;
  const recent = results.slice(0, 6).reverse();
  return (
    <RailCard title={t("exam.recent.title", "Recent results")} action={results.length ? { href: "/exam/mock", label: t("exam.recent.tests", "Tests") } : undefined}>
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
        <p className="text-sm font-semibold leading-6 text-muted">{t("exam.recent.empty", "Take your first mock test to unlock score trends, accuracy and chapter analysis.")}</p>
      )}
    </RailCard>
  );
}

export function MockCard({ id }: { id: string }) {
  const t = useT();
  const tx = useTxt();
  const examName = useExamNames();
  const m = getMock(id)!;
  const hydrated = useHydrated();
  const best = useLearner((s) => s.mockResults.filter((r) => r.testId === m.id).reduce<{ score: number; max: number } | null>((a, r) => (a === null || r.score / r.max > a.score / a.max ? { score: r.score, max: r.max } : a), null));
  const total = mockQuestionCount(m);
  const max = mockMaxMarks(m);
  const { icon: I, color } = mockVisual(m);
  return (
    <Link href={`/exam/mock/${m.id}`} className="tile group flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: color }}>
          <I className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <span className="flex flex-wrap justify-end gap-1">
          {m.kind === "full" && <span className="chip !bg-accent-soft !text-accent">{t("exam.mockCard.full", "Full length")}</span>}
          {m.kind === "half" && <span className="chip">{t("exam.mockCard.half", "Half length")}</span>}
          <span className="chip">{m.exam === "Mixed" ? "NEET · JEE" : examName[m.exam]}</span>
        </span>
      </div>
      <h3 className="mt-4 text-lg font-black group-hover:text-accent">{tx(m.title)}</h3>
      <p className="mt-1 flex-1 text-sm font-semibold leading-6 text-muted">{tx(m.blurb)}</p>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted">
        <span>{t("exam.mockCard.questions", "{n} questions", { n: total })}</span>·<span>{t("exam.mockCard.minutes", "{n} min", { n: m.minutes })}</span>·<span>{t("exam.mockCard.marks", "{n} marks", { n: max })}</span>
      </div>
      {hydrated && best !== null && (
        <div className="mt-3 flex items-center gap-2">
          <ProgressBar value={Math.max(0, best.score) / Math.max(1, best.max)} height={10} color={color} label={t("exam.mockCard.bestScore", "Best score")} />
          <span className="shrink-0 text-xs font-black" style={{ color }}>
            {t("exam.mockCard.bestOf", "Best {n}/{max}", { n: best.score, max: best.max })}
          </span>
        </div>
      )}
    </Link>
  );
}
