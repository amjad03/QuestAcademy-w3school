"use client";

import { useEffect, useMemo, useState } from "react";
import type { Question } from "@/content/types";
import type { ClassSubject } from "@/content/my-class";
import { useT } from "@/i18n";
import { localize, useContentDict } from "@/i18n/content";
import { sfx } from "@/lib/sound";
import { ProgressBar } from "@/components/ui/Progress";
import { QuestionInput, emptyAnswer, gradeAnswer, isAnswered, type Answer } from "@/components/learn/QuestionCard";
import { useSubjectName } from "@/components/class/data";
import { levelFromScore, type DiagnosticResult, type PersonalProfile } from "@/lib/personalise";

type Item = { lessonId: string; question: Question };

/** Lessons to draw a subject's diagnostic from: the weak chapters, else the whole subject. */
function diagnosticLessons(s: ClassSubject, p: PersonalProfile) {
  const weak = p.weakChapters?.[s.id] ?? [];
  const chapters = weak.length ? s.chapters.filter((c) => weak.includes(c.slug)) : s.chapters;
  return chapters.flatMap((c) => c.lessonIds).slice(0, 60);
}

/**
 * Short diagnostic: 5–8 questions per weak subject from the class's lesson quizzes,
 * scored to set a per-subject level. Subjects without questions are skipped.
 */
export function Diagnostic({ subjects, personal, count = 6, onDone }: { subjects: ClassSubject[]; personal: PersonalProfile; count?: number; onDone: (results: Record<string, DiagnosticResult>) => void }) {
  const t = useT();
  const subjectName = useSubjectName();
  const [si, setSi] = useState(0);
  const [items, setItems] = useState<Item[] | null>(null);
  const [qi, setQi] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const [results, setResults] = useState<Record<string, DiagnosticResult>>({});
  const subject = subjects[si];
  const dict = useContentDict(items?.[qi]?.lessonId.split("/")[0] ?? "");

  useEffect(() => {
    if (!subject) return;
    let live = true;
    setItems(null);
    const lessons = diagnosticLessons(subject, personal);
    fetch(`/api/diagnostic?n=${count}&lessons=${encodeURIComponent(lessons.join(","))}`)
      .then((r) => (r.ok ? r.json() : { questions: [] }))
      .then((d: { questions: Item[] }) => live && setItems(d.questions))
      .catch(() => live && setItems([]));
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject?.id]);

  const item = items?.[qi];
  const q = useMemo(() => (item ? (localize(item.question, dict) as Question) : null), [item, dict]);
  useEffect(() => {
    if (q) setAnswer(emptyAnswer(q));
  }, [q]);

  const finishSubject = (c: number, total: number) => {
    const next = total ? { ...results, [subject.id]: { correct: c, total, level: levelFromScore(c, total), at: new Date().toISOString() } } : results;
    setResults(next);
    setQi(0);
    setCorrect(0);
    setResult(null);
    if (si + 1 >= subjects.length) onDone(next);
    else setSi(si + 1);
  };

  useEffect(() => {
    if (items && !items.length && subject) finishSubject(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  if (!subject) return null;
  if (!items || !q || !answer)
    return <div className="card p-6 text-sm font-semibold text-muted">{t("personal.diag.loading", "Picking a few questions for {subject}…", { subject: subjectName(subject) })}</div>;

  const check = () => {
    if (result !== null) {
      if (qi + 1 >= items.length) return finishSubject(correct, items.length);
      setQi(qi + 1);
      setResult(null);
      return;
    }
    if (!isAnswered(q, answer)) return;
    const ok = gradeAnswer(q, answer);
    sfx(ok ? "correct" : "wrong");
    if (ok) setCorrect(correct + 1);
    setResult(ok);
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between gap-3 text-sm font-bold text-muted">
        <span>
          {subjectName(subject)} · {t("personal.diag.qOf", "Question {n} of {total}", { n: qi + 1, total: items.length })}
        </span>
        <button type="button" className="kh-link" onClick={() => finishSubject(correct, qi)}>
          {t("personal.diag.skip", "Skip this subject")}
        </button>
      </div>
      <ProgressBar value={qi / items.length} height={10} />
      <div className="card p-5">
        <QuestionInput key={`${si}:${qi}`} question={q} answer={answer} onChange={setAnswer} result={result} onSubmit={check} />
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={check} disabled={result === null && !isAnswered(q, answer)} className="btn-primary sm:min-w-[160px]">
          {result === null ? t("personal.diag.check", "Check") : t("onboard.continue", "Continue")}
        </button>
      </div>
    </div>
  );
}
