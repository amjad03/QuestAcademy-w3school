"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { EXAM_IDS, MOCK_TESTS } from "@/lib/exam";
import { useT } from "@/i18n";
import { MockCard } from "./ExamHub";
import { EXAM_VISUAL } from "./icons";
import { useExamNames } from "./labels";

/** Every mock test, grouped by exam: full and half-length papers, then quick mocks and sprints. */
export function MockList() {
  const t = useT();
  const examName = useExamNames();
  const quick = MOCK_TESTS.filter((m) => m.kind === "mini" || m.kind === "sprint");
  return (
    <div className="mx-auto max-w-[1060px] px-4 py-8 sm:px-6">
      <Link href="/exam" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
        <ChevronLeft className="h-4 w-4" /> {t("exam.mocks.back", "Exam prep")}
      </Link>
      <h1 className="mt-4 text-3xl font-black">{t("exam.mocks.title", "Mock tests")}</h1>
      <p className="mt-2 max-w-2xl font-semibold text-muted">
        {t("exam.mocks.subtitle", "The real computer-based-test experience: section tabs, question palette, mark for review, auto-submit and a detailed scorecard. Every attempt draws a fresh mix of questions; patterns follow recent papers.")}
      </p>
      <nav className="mt-6 flex flex-wrap gap-2" aria-label={t("exam.mocks.jump", "Jump to an exam")}>
        {EXAM_IDS.map((e) => (
          <a key={e} href={`#mocks-${e}`} className="rounded-xl border-2 border-b-4 border-line bg-surface px-3 py-1.5 text-sm font-extrabold transition hover:bg-surface-2">
            {examName[e]}
          </a>
        ))}
        <a href="#mocks-quick" className="rounded-xl border-2 border-b-4 border-line bg-surface px-3 py-1.5 text-sm font-extrabold transition hover:bg-surface-2">
          {t("exam.mocks.quick", "Quick mocks & sprints")}
        </a>
      </nav>
      {EXAM_IDS.map((e) => {
        const list = MOCK_TESTS.filter((m) => m.exam === e && (m.kind === "full" || m.kind === "half"));
        const I = EXAM_VISUAL[e].icon;
        return (
          <section key={e} id={`mocks-${e}`} className="mt-10 scroll-mt-20" aria-labelledby={`mh-${e}`}>
            <h2 id={`mh-${e}`} className="flex items-center gap-2 text-xl font-black">
              <I className="h-5 w-5" style={{ color: EXAM_VISUAL[e].color }} aria-hidden /> {examName[e]}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((m) => (
                <MockCard key={m.id} id={m.id} />
              ))}
            </div>
          </section>
        );
      })}
      <section id="mocks-quick" className="mt-10 scroll-mt-20" aria-labelledby="mh-quick">
        <h2 id="mh-quick" className="text-xl font-black">
          {t("exam.mocks.quick", "Quick mocks & sprints")}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quick.map((m) => (
            <MockCard key={m.id} id={m.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
