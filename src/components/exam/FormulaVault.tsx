"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Atom, ChevronLeft, Dna, Eye, EyeOff, FlaskConical, Pi, ScrollText, Search, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ExamSubject, FormulaSheet } from "@/content/types";
import { SUBJECT_META } from "@/lib/exam";
import { MdInline } from "@/components/Md";
import { useT } from "@/i18n";
import { useSubjectNames } from "./labels";

const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };

type Sheet = Omit<FormulaSheet, "items"> & { items: (FormulaSheet["items"][number] & { html: string })[] };

export function FormulaVault({ sheets }: { sheets: Sheet[] }) {
  const t = useT();
  const subjectName = useSubjectNames();
  const [subject, setSubject] = useState<ExamSubject | "all">("all");
  const [q, setQ] = useState("");
  const [quiz, setQuiz] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const subjects = Array.from(new Set(sheets.map((s) => s.subject)));
  const shown = useMemo(() => {
    const term = q.toLowerCase();
    return sheets
      .filter((s) => subject === "all" || s.subject === subject)
      .map((s) => ({ ...s, items: s.items.filter((i) => !term || [i.name, i.note ?? "", s.chapter].join(" ").toLowerCase().includes(term)) }))
      .filter((s) => s.items.length);
  }, [sheets, subject, q]);

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
      <Link href="/exam" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
        <ChevronLeft className="h-4 w-4" /> {t("exam.formulas.back", "Exam prep")}
      </Link>
      <div className="mt-4 flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent-2 text-white">
          <ScrollText className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <div>
          <h1 className="text-3xl font-black">{t("exam.formulas.title", "Formula vault")}</h1>
          <p className="mt-1 font-semibold text-muted">{t("exam.formulas.subtitle", "Every must-know formula, chapter by chapter. Turn on self-test to hide them and recall from memory.")}</p>
        </div>
      </div>

      <div className="sticky top-[58px] z-10 -mx-4 mt-6 flex flex-col gap-3 border-b-2 border-line bg-bg px-4 py-3 sm:flex-row sm:items-center md:top-0">
        <div className="flex flex-wrap gap-2">
          {(["all", ...subjects] as const).map((sub) => {
            const I = sub === "all" ? null : SUBJECT_ICON[sub];
            return (
              <button
                key={sub}
                onClick={() => setSubject(sub)}
                aria-pressed={subject === sub}
                className={clsx("flex items-center gap-1.5 rounded-xl border-2 border-b-4 px-3.5 py-1.5 text-sm font-extrabold transition", subject === sub ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2")}
              >
                {I && <I className="h-4 w-4" />}
                {sub === "all" ? t("exam.formulas.all", "All") : subjectName[sub]}
              </button>
            );
          })}
        </div>
        <label className="relative sm:ml-auto sm:w-64">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("exam.formulas.search", "Search formulas")} className="input !py-2 pl-10" aria-label={t("exam.formulas.search", "Search formulas")} />
        </label>
        <button
          onClick={() => {
            setQuiz((x) => !x);
            setRevealed(new Set());
          }}
          aria-pressed={quiz}
          className={clsx(quiz ? "btn-purple" : "btn-ghost", "!py-2")}
        >
          {quiz ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} {quiz ? t("exam.formulas.selfTestOn", "Self-test on") : t("exam.formulas.selfTestOff", "Self-test off")}
        </button>
      </div>

      <div className="mt-8 space-y-10">
        {shown.map((sh) => {
          const I = SUBJECT_ICON[sh.subject];
          return (
            <section key={sh.subject + sh.chapter}>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
                <I className="h-5 w-5" style={{ color: SUBJECT_META[sh.subject].color }} strokeWidth={2.5} /> {sh.chapter}
                <span className="chip ml-1">{sh.items.length}</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sh.items.map((i) => {
                  const key = sh.chapter + i.name;
                  const hidden = quiz && !revealed.has(key);
                  return (
                    <button
                      key={key}
                      onClick={() => quiz && setRevealed((r) => new Set(r).add(key))}
                      className={clsx("flex flex-col rounded-2xl border-2 border-b-4 border-line bg-surface p-4 text-left transition", quiz && "cursor-pointer hover:bg-surface-2")}
                      aria-label={hidden ? t("exam.formulas.revealAria", "Reveal {name}", { name: i.name }) : i.name}
                    >
                      <span className="text-sm font-extrabold">{i.name}</span>
                      <span className="relative my-3 block">
                        <span className={clsx("block overflow-x-auto rounded-xl bg-surface-2 px-3 py-4 text-center transition", hidden && "select-none blur-md")} dangerouslySetInnerHTML={{ __html: i.html }} />
                        {hidden && <span className="absolute inset-0 grid place-items-center text-xs font-extrabold uppercase tracking-wide text-accent-2">{t("exam.formulas.tapReveal", "Tap to reveal")}</span>}
                      </span>
                      {i.note && (
                        <span className="text-xs font-semibold leading-5 text-muted">
                          <MdInline text={i.note} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
        {shown.length === 0 && <p className="py-16 text-center font-bold text-muted">{t("exam.formulas.noMatch", "No formulas match “{q}”.", { q })}</p>}
      </div>
    </div>
  );
}
