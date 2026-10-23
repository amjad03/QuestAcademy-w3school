"use client";

import clsx from "clsx";
import { Check, ChevronDown, Clock, Lightbulb, Link2, Play } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CERTIFICATE_RUBRIC_THRESHOLD, type Assignment, type Pathway } from "@/content/pathways";
import type { CodeLang } from "@/content/types";
import { assignmentHref, lessonDone, pathwayProgress, rubricScore, type LessonMetaMap } from "@/lib/plan-sources/pathway";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { ConsoleView, Preview, SqlTable } from "@/components/code/Output";
import { useRunner } from "@/components/code/useRunner";
import { useT } from "@/i18n";
import { formatDate, usePathwayState } from "./hooks";

const CodeEditor = dynamic(() => import("@/components/code/CodeEditor"), { ssr: false, loading: () => <div className="h-[320px] animate-pulse bg-[#1a1b26]" /> });

const STARTERS: Record<CodeLang, string> = {
  html: "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>My page</title>\n</head>\n<body>\n\n</body>\n</html>\n",
  css: "/* Your styles */\n",
  javascript: "// Your solution. Use console.log to check your output.\n",
  python: "# Your solution. Use print() to check your output.\n",
  sql: "-- Your queries\n",
};

const draftKey = (id: string) => `qa-assignment-draft:${id}`;

interface Draft {
  text: string;
  link: string;
  checklist: number[];
}

export function AssignmentWorkspace({ pathway: p, assignment: a, moduleIndex, meta }: { pathway: Pathway; assignment: Assignment; moduleIndex: number; meta: LessonMetaMap }) {
  const t = useT();
  const hydrated = useHydrated();
  const s = usePathwayState();
  const submitAssignment = useLearner((st) => st.submitAssignment);
  const enroll = useLearner((st) => st.enrollPathway);
  const existing = s.pathways.assignments[a.id];
  const lang: CodeLang = a.codeLang ?? "javascript";
  const initial = (): Draft => ({ text: a.submission === "code" ? (a.starter ?? STARTERS[lang]) : "", link: "", checklist: [] });
  const [draft, setDraft] = useState<Draft>(initial);
  const [loaded, setLoaded] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const mod = p.modules[moduleIndex];
  const nextModule = p.modules[moduleIndex + 1];

  // Load the saved submission, or an unsent draft, once the store has hydrated.
  useEffect(() => {
    if (!hydrated || loaded) return;
    let d: Draft | null = null;
    try {
      const raw = localStorage.getItem(draftKey(a.id));
      if (raw) d = JSON.parse(raw) as Draft;
    } catch {
      // storage unavailable (private mode)
    }
    if (!d && existing) d = { text: existing.text, link: existing.link ?? "", checklist: existing.checklist };
    if (d) setDraft(d);
    setLoaded(true);
  }, [hydrated, loaded, a.id, existing]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(draftKey(a.id), JSON.stringify(draft));
    } catch {
      // storage unavailable (private mode)
    }
  }, [draft, loaded, a.id]);

  const total = a.rubric.reduce((sum, r) => sum + r.points, 0);
  const selfScore = draft.checklist.reduce((sum, i) => sum + (a.rubric[i]?.points ?? 0), 0) / total;
  const linkOk = a.submission !== "link" || /^https?:\/\/\S+\.\S+/.test(draft.link.trim());
  const textOk = a.submission === "link" ? true : draft.text.trim().length >= (a.submission === "code" ? 20 : 80);
  const canSubmit = linkOk && textOk;

  const submit = () => {
    if (!canSubmit) return;
    if (!s.pathways.enrolled.includes(p.slug)) enroll(p.slug);
    submitAssignment(a.id, { text: draft.text, link: a.submission === "link" ? draft.link.trim() : undefined, checklist: [...draft.checklist].sort((x, y) => x - y) });
    try {
      localStorage.removeItem(draftKey(a.id));
    } catch {
      // storage unavailable (private mode)
    }
    setJustSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progress = useMemo(() => pathwayProgress(p, s), [p, s]);
  const score = rubricScore(a, existing);

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-6 sm:px-6 lg:py-8">
      <Link href={`/pathways/${p.slug}`} className="text-sm font-semibold text-muted hover:text-ink">
        ← {p.title}
      </Link>
      <div className="mt-4">
        <span className="eyebrow">{t("path.assignment.eyebrow", "Module {n} · Practical assignment", { n: moduleIndex + 1 })}</span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{a.title}</h1>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {t("path.assignment.hours", "About {n} hours", { n: a.estimatedHours })}</span>
          <span>
            {t("path.assignment.submissionType", "Submission: {type}", {
              type:
                a.submission === "code"
                  ? t("path.assignment.type.code", "{lang} code", { lang: lang.toUpperCase() })
                  : a.submission === "link"
                    ? t("path.assignment.type.link", "link + notes")
                    : t("path.assignment.type.text", "written response"),
            })}
          </span>
          {hydrated && existing && <span className="font-semibold text-ink">{t("path.assignment.submittedOn", "Submitted {date}", { date: formatDate(existing.submittedAt) })}</span>}
        </div>
      </div>

      {hydrated && existing && (
        <div className={clsx("mt-6 rounded-xl border-2 p-5", score >= CERTIFICATE_RUBRIC_THRESHOLD ? "border-good/40 bg-good-soft" : "border-warn/40 bg-warn/10")}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-bold">
                {justSubmitted ? t("path.assignment.saved", "Submission saved.") : t("path.assignment.alreadySubmitted", "You’ve submitted this assignment.")}{" "}
                {t("path.assignment.selfAssessment", "Self-assessment: {pct}%", { pct: Math.round(score * 100) })}
              </p>
              <p className="mt-1 text-sm text-muted">
                {score >= CERTIFICATE_RUBRIC_THRESHOLD
                  ? t("path.assignment.meetsBar", "This meets the 70% bar for your certificate. You can keep improving it and resubmit at any time.")
                  : t("path.assignment.belowBar", "Reach at least 70% of the rubric to count towards your certificate. Revise your work and resubmit.")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {progress.eligible ? (
                <Link href={`/certificate/${p.slug}`} className="btn-primary">{t("path.assignment.claim", "Claim certificate")}</Link>
              ) : nextModule ? (
                <Link href={nextModule.lessonIds[0] ? (meta[nextModule.lessonIds[0]]?.href ?? `/course/${nextModule.lessonIds[0]}`) : assignmentHref(p.slug, nextModule.assignment.id)} className="btn-primary">{t("path.assignment.nextModule", "Next module: {title}", { title: nextModule.title })}</Link>
              ) : (
                <Link href={`/pathways/${p.slug}`} className="btn-primary">{t("path.assignment.backToPathway", "Back to pathway")}</Link>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{t("path.assignment.brief", "The brief")}</h2>
          <p className="mt-2 text-[17px] leading-relaxed">{renderInline(a.scenario)}</p>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted">{t("path.assignment.deliverables", "Deliverables")}</h3>
          <ul className="mt-2 space-y-2">
            {a.deliverables.map((d) => (
              <li key={d} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          {a.hints.length > 0 && (
            <details className="group mt-6 rounded-xl border-2 border-line p-4">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold">
                <Lightbulb className="h-4 w-4 text-warn" /> {t("path.assignment.hints", "Hints ({n})", { n: a.hints.length })}
                <ChevronDown className="ml-auto h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {a.hints.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </details>
          )}
        </section>
        <aside>
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">{t("path.assignment.lessons", "Lessons for this module")}</h2>
          <ul className="mt-2 space-y-1">
            {mod.lessonIds.map((id) => (
              <li key={id}>
                <Link href={meta[id]?.href ?? `/course/${id}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                  <span className={clsx("h-2 w-2 shrink-0 rounded-full", hydrated && lessonDone(s, id) ? "bg-good" : "bg-line")} />
                  <span className="truncate">{meta[id]?.title ?? id}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Workspace */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">{t("path.assignment.yourWork", "Your work")}</h2>
        <p className="mt-1 text-sm text-muted">{t("path.assignment.draftsSave", "Drafts save on this device automatically.")}</p>
        <div className="mt-4">
          {a.submission === "code" ? (
            <CodeWorkspace lang={lang} setup={a.setup} value={draft.text} onChange={(text) => setDraft((d) => ({ ...d, text }))} />
          ) : (
            <div className="space-y-3">
              {a.submission === "link" && (
                <label className="block">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-muted"><Link2 className="h-4 w-4" /> {t("path.assignment.linkLabel", "Link to your work (Figma, Google Doc, Notion, GitHub…)")}</span>
                  <input type="url" inputMode="url" placeholder="https://" value={draft.link} onChange={(e) => setDraft((d) => ({ ...d, link: e.target.value }))} className="input mt-1" />
                  {draft.link && !linkOk && <span className="mt-1 block text-xs text-bad">{t("path.assignment.linkInvalid", "Enter a full link starting with https://")}</span>}
                </label>
              )}
              <label className="block">
                <span className="text-sm font-semibold text-muted">{a.submission === "link" ? t("path.assignment.notesLabel", "Notes for a reviewer (optional)") : t("path.assignment.responseLabel", "Your response")}</span>
                <textarea
                  value={draft.text}
                  onChange={(e) => setDraft((d) => ({ ...d, text: e.target.value }))}
                  rows={a.submission === "link" ? 5 : 14}
                  placeholder={
                    a.submission === "link"
                      ? t("path.assignment.notesPlaceholder", "What should someone look at first? What would you do next?")
                      : t("path.assignment.responsePlaceholder", "Write your response here. Use headings for each deliverable.")
                  }
                  className="input mt-1 font-normal leading-relaxed"
                />
                {a.submission === "text" && <span className="mt-1 block text-xs text-muted">{t("path.assignment.words", "{n} words", { n: wordCount(draft.text) })}</span>}
              </label>
            </div>
          )}
        </div>
      </section>

      {/* Self-assessment */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">{t("path.assignment.rubricTitle", "Check your work against the rubric")}</h2>
        <p className="mt-1 text-sm text-muted">{t("path.assignment.rubricHint", "Tick each criterion your work fully meets. Be honest — this is how you, and anyone you share it with, know it’s ready.")}</p>
        <div className="card mt-4 divide-y-2 divide-line overflow-hidden">
          {a.rubric.map((r, i) => {
            const on = draft.checklist.includes(i);
            return (
              <label key={r.criterion} className={clsx("flex cursor-pointer items-start gap-4 p-4 transition", on ? "bg-accent-soft/50" : "hover:bg-surface-2")}>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => setDraft((d) => ({ ...d, checklist: on ? d.checklist.filter((x) => x !== i) : [...d.checklist, i] }))}
                  className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--accent))]"
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{r.criterion}</span>
                  <span className="block text-sm text-muted">{r.description}</span>
                </span>
                <span className="shrink-0 text-sm font-semibold text-muted">{t("path.assignment.points", "{n} pts", { n: r.points })}</span>
              </label>
            );
          })}
          <div className="flex items-center justify-between bg-surface-2/60 p-4 text-sm">
            <span className="font-semibold">{t("path.assignment.selfScore", "Self-assessed score")}</span>
            <span className={clsx("font-bold", selfScore >= CERTIFICATE_RUBRIC_THRESHOLD ? "text-good" : "text-muted")}>
              {Math.round(selfScore * 100)}% <span className="font-normal text-muted">{t("path.assignment.needed", "(70% needed for the certificate)")}</span>
            </span>
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center gap-4 border-t-2 border-line pt-6">
        <button onClick={submit} disabled={!canSubmit || !hydrated} className="btn-primary">
          {existing ? t("path.assignment.resubmit", "Resubmit") : t("path.assignment.submit", "Submit assignment")}
        </button>
        {!canSubmit && (
          <span className="text-sm text-muted">{!linkOk
              ? t("path.assignment.needLink", "Add a link to your work to submit.")
              : a.submission === "code"
                ? t("path.assignment.needCode", "Write your solution to submit.")
                : t("path.assignment.needText", "Write at least a few sentences to submit.")}</span>
        )}
      </div>
    </div>
  );
}

function CodeWorkspace({ lang, setup, value, onChange }: { lang: CodeLang; setup?: string; value: string; onChange: (v: string) => void }) {
  const t = useT();
  const r = useRunner(lang);
  const web = lang === "html" || lang === "css" || lang === "javascript";
  const run = () => r.run(value, { setup });
  return (
    <div className="overflow-hidden rounded-xl border-2 border-line">
      <div className="flex items-center justify-between border-b-2 border-line bg-surface px-3 py-2">
        <span className="font-mono text-xs font-semibold uppercase text-muted">{lang}</span>
        <button onClick={run} className="btn-good px-3 py-1.5 text-sm">
          <Play className="h-4 w-4" /> {r.running ? t("path.code.running", "Running…") : t("path.code.run", "Run")}
        </button>
      </div>
      <div className={clsx("grid", lang === "html" ? "lg:grid-cols-2" : "")}>
        <CodeEditor value={value} onChange={onChange} lang={lang} onRun={run} minHeight="320px" maxHeight="560px" />
        <div className={clsx("border-line", lang === "html" ? "border-t-2 lg:border-l-2 lg:border-t-0" : "border-t-2")}>
          {r.status && <div className="bg-[#0b0d14] px-3 pt-2 font-mono text-xs text-sky-300">{r.status}</div>}
          {lang === "html" ? (
            <Preview ref={r.frameRef} doc={r.doc} className="min-h-[320px]" />
          ) : (
            <>
              {web && <Preview ref={r.frameRef} doc={r.doc} className="hidden" />}
              {lang === "sql" && r.sql && <SqlTable columns={r.sql.columns} rows={r.sql.rows} />}
              <ConsoleView lines={r.logs} empty={lang === "sql" ? t("path.code.emptySql", "Run your query to see results (sample tables are loaded for you).") : t("path.code.empty", "Run the code to see output here.")} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function wordCount(s: string) {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

/** Renders `code` spans in briefs. */
function renderInline(s: string) {
  return s.split(/(`[^`]+`)/).map((part, i) =>
    part.startsWith("`") ? (
      <code key={i} className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em]">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}
