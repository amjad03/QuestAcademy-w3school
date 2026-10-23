"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CheckCircle2, Eye, FlaskConical, Lightbulb, Loader2, Play, RotateCcw, Trophy, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { CodeChallenge } from "@/content/types";
import { useLearner } from "@/lib/store";
import { MdInline, Md } from "@/components/Md";
import { burst } from "@/lib/confetti";
import { sfx } from "@/lib/sound";
import { ConsoleView, Preview, SqlTable } from "./Output";
import { useRunner } from "./useRunner";
import { LANG_LABEL } from "./TryIt";
import { useT } from "@/i18n";

const CodeEditor = dynamic(() => import("./CodeEditor"), { ssr: false, loading: () => <div className="h-[260px] animate-pulse bg-[#1a1b26]" /> });

export function Challenge({ challenge, lessonId }: { challenge: CodeChallenge; lessonId: string }) {
  const t = useT();
  const key = `qa-challenge:${lessonId}`;
  const [code, setCode] = useState(challenge.starter);
  const [hints, setHints] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const passed = useLearner((s) => s.challengesPassed.includes(lessonId));
  const passChallenge = useLearner((s) => s.passChallenge);
  const bump = useLearner((s) => s.bump);
  const r = useRunner(challenge.lang);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) setCode(saved);
    } catch {
      /* ignore */
    }
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, code);
    } catch {
      /* ignore */
    }
  }, [key, code]);

  const runTests = async () => {
    bump("codeRuns");
    setAttempts((a) => a + 1);
    const res = await r.run(code, { setup: challenge.setup, checks: challenge.tests });
    if (res && res.every((t) => t.pass)) {
      sfx("fanfare");
      burst();
      passChallenge(lessonId);
    } else sfx("wrong");
  };

  const allPass = r.tests?.every((t) => t.pass);
  const visual = challenge.lang === "html" || challenge.lang === "css";

  return (
    <div className="space-y-4">
      <div className="card overflow-hidden">
        <div className="flex items-start gap-4 p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#334155] text-white shadow-[inset_0_-4px_0_#1E293B]">
            <FlaskConical className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-black">{challenge.title}</h3>
              <span className="chip">{LANG_LABEL[challenge.lang]}</span>
              <span className="chip !text-warn-shade">+50 XP</span>
              {passed && (
                <span className="chip !bg-good-soft !text-good-shade">
                  <Trophy className="h-3 w-3" /> {t("code.challenge.solved", "Solved")}
                </span>
              )}
            </div>
            <Md text={challenge.prompt} className="prose-quest mt-2 space-y-3" />
          </div>
        </div>
        <div className="border-t-2 border-line bg-surface-2 px-6 py-4">
          <div className="eyebrow">{t("code.challenge.testsToPass", "Tests to pass")}</div>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {challenge.tests.map((test, i) => {
              const res = r.tests?.[i];
              return (
                <li key={i} className="flex items-start gap-2 text-sm font-semibold">
                  {res ? res.pass ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-good" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-bad" /> : <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-line" />}
                  <span className={clsx(res && !res.pass && "text-bad")}>
                    <MdInline text={test.label} />
                    {res?.error && <span className="block font-mono text-[11px] text-muted">{res.error}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border-2 border-line bg-[#1a1b26]">
        <div className="flex items-center gap-2 border-b-2 border-line bg-surface px-3 py-2">
          <span className="font-mono text-xs font-semibold text-muted">solution.{challenge.lang === "javascript" ? "js" : challenge.lang === "python" ? "py" : challenge.lang}</span>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={() => setCode(challenge.starter)} className="btn-flat !px-2.5 !py-1.5 text-xs !text-muted">
              <RotateCcw className="h-3.5 w-3.5" /> {t("code.reset", "Reset")}
            </button>
            <button onClick={runTests} className="btn-good !rounded-xl !px-4 !py-1.5 text-xs">
              {r.running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-white" />} {t("code.challenge.runTests", "Run tests")}
            </button>
          </div>
        </div>
        <div className={clsx(visual && "grid lg:grid-cols-2")}>
          <CodeEditor value={code} onChange={setCode} lang={challenge.lang} onRun={runTests} minHeight="260px" maxHeight="520px" />
          <div className={clsx("border-white/10", visual ? "border-t lg:border-l lg:border-t-0" : "border-t")}>
            {r.status && <div className="bg-[#13141c] px-3 py-1.5 text-xs text-amber-300">{r.status}</div>}
            {visual || challenge.lang === "javascript" ? (
              <div className={clsx(challenge.lang === "javascript" ? "hidden" : "h-[300px]")}>
                <Preview ref={r.frameRef} doc={r.doc} />
              </div>
            ) : null}
            {challenge.lang === "sql" && r.sql && <SqlTable {...r.sql} />}
            {(!visual || r.logs.length > 0) && (
              <div className="max-h-[220px]">
                <ConsoleView lines={r.logs} empty={r.running ? t("code.challenge.running", "Running tests…") : t("code.challenge.consoleEmpty", "Press “Run tests” to check your solution.")} />
              </div>
            )}
          </div>
        </div>
      </div>

      {r.tests && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={clsx("flex items-center gap-4 rounded-2xl p-4", allPass ? "bg-good-soft" : "bg-bad-soft")}
        >
          <span className={clsx("grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface", allPass ? "text-good" : "text-bad")}>
            {allPass ? <CheckCircle2 className="h-7 w-7" strokeWidth={2.6} /> : <XCircle className="h-7 w-7" strokeWidth={2.6} />}
          </span>
          <div>
            <div className={clsx("text-lg font-black", allPass ? "text-good-shade" : "text-bad-shade")}>{allPass ? t("code.challenge.allPassed", "All tests passed — brilliant!") : t("code.challenge.passing", "{n} / {total} tests passing", { n: r.tests.filter((x) => x.pass).length, total: r.tests.length })}</div>
            <div className="text-sm font-semibold text-muted">{allPass ? t("code.challenge.completeBody", "Challenge complete. Try refactoring it to be even cleaner.") : t("code.challenge.failBody", "Read the failing test, tweak, and run again. Hints below if you're stuck.")}</div>
          </div>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2">
        {challenge.hints?.length ? (
          <button className="btn-ghost" onClick={() => setHints((h) => Math.min(challenge.hints!.length, h + 1))} disabled={hints >= challenge.hints.length}>
            <Lightbulb className="h-4 w-4 text-warn-shade" /> {hints >= challenge.hints.length ? t("code.challenge.noMoreHints", "No more hints") : t("code.challenge.hintOf", "Hint {n} of {total}", { n: hints + 1, total: challenge.hints.length })}
          </button>
        ) : null}
        {(attempts >= 2 || passed) && (
          <button className="btn-ghost" onClick={() => setShowSolution((s) => !s)}>
            <Eye className="h-4 w-4" /> {showSolution ? t("code.challenge.hideSolution", "Hide solution") : t("code.challenge.revealSolution", "Reveal solution")}
          </button>
        )}
      </div>
      {challenge.hints?.slice(0, hints).map((h, i) => (
        <div key={i} className="flex gap-3 rounded-2xl border-2 border-warn/50 bg-warn/10 p-4 text-sm font-semibold">
          <Lightbulb className="h-5 w-5 shrink-0 text-warn-shade" />
          <MdInline text={h} />
        </div>
      ))}
      {showSolution && (
        <div className="overflow-hidden rounded-2xl border-2 border-line">
          <div className="flex items-center justify-between bg-surface px-3 py-2">
            <span className="eyebrow">{t("code.challenge.referenceSolution", "Reference solution")}</span>
            <button className="btn-flat !px-2.5 !py-1.5 text-xs" onClick={() => setCode(challenge.solution)}>
              {t("code.challenge.loadIntoEditor", "Load into editor")}
            </button>
          </div>
          <CodeEditor value={challenge.solution} lang={challenge.lang} readOnly />
        </div>
      )}
    </div>
  );
}
