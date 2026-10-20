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

const CodeEditor = dynamic(() => import("./CodeEditor"), { ssr: false, loading: () => <div className="h-[260px] animate-pulse bg-[#1a1b26]" /> });

export function Challenge({ challenge, lessonId }: { challenge: CodeChallenge; lessonId: string }) {
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
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-lime-400 text-slate-900">
            <FlaskConical className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold">{challenge.title}</h3>
              <span className="chip">{LANG_LABEL[challenge.lang]}</span>
              <span className="chip !text-accent">+50 XP</span>
              {passed && (
                <span className="chip !border-good/40 !bg-good/10 !text-good">
                  <Trophy className="h-3 w-3" /> Solved
                </span>
              )}
            </div>
            <Md text={challenge.prompt} className="prose-quest mt-2 space-y-3" />
          </div>
        </div>
        <div className="border-t border-line bg-surface-2/50 px-6 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">Tests to pass</div>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {challenge.tests.map((t, i) => {
              const res = r.tests?.[i];
              return (
                <li key={i} className="flex items-start gap-2 text-sm">
                  {res ? res.pass ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-good" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-bad" /> : <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-line" />}
                  <span className={clsx(res && !res.pass && "text-bad")}>
                    <MdInline text={t.label} />
                    {res?.error && <span className="block font-mono text-[11px] text-muted">{res.error}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-line bg-[#1a1b26]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#13141c] px-3 py-2">
          <span className="font-mono text-xs text-slate-400">solution.{challenge.lang === "javascript" ? "js" : challenge.lang === "python" ? "py" : challenge.lang}</span>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={() => setCode(challenge.starter)} className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-400 hover:bg-white/10 hover:text-white">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
            <button onClick={runTests} className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-lime-400 px-4 py-1.5 text-xs font-bold text-slate-900 hover:brightness-110">
              {r.running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-slate-900" />} Run tests
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
                <ConsoleView lines={r.logs} empty={r.running ? "Running tests…" : "Press “Run tests” to check your solution."} />
              </div>
            )}
          </div>
        </div>
      </div>

      {r.tests && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={clsx("flex items-center gap-3 rounded-3xl border p-4", allPass ? "border-good/40 bg-good/10" : "border-bad/30 bg-bad/5")}
        >
          <span className="text-3xl">{allPass ? "🎉" : "🧐"}</span>
          <div>
            <div className="font-semibold">{allPass ? "All tests passed — brilliant!" : `${r.tests.filter((t) => t.pass).length} / ${r.tests.length} tests passing`}</div>
            <div className="text-sm text-muted">{allPass ? "Challenge complete. Try refactoring it to be even cleaner." : "Read the failing test, tweak, and run again. Hints below if you're stuck."}</div>
          </div>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2">
        {challenge.hints?.length ? (
          <button className="btn-ghost" onClick={() => setHints((h) => Math.min(challenge.hints!.length, h + 1))} disabled={hints >= challenge.hints.length}>
            <Lightbulb className="h-4 w-4 text-amber-400" /> {hints >= challenge.hints.length ? "No more hints" : `Hint ${hints + 1} of ${challenge.hints.length}`}
          </button>
        ) : null}
        {(attempts >= 2 || passed) && (
          <button className="btn-ghost" onClick={() => setShowSolution((s) => !s)}>
            <Eye className="h-4 w-4" /> {showSolution ? "Hide solution" : "Reveal solution"}
          </button>
        )}
      </div>
      {challenge.hints?.slice(0, hints).map((h, i) => (
        <div key={i} className="flex gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm">
          <Lightbulb className="h-5 w-5 shrink-0 text-amber-400" />
          <MdInline text={h} />
        </div>
      ))}
      {showSolution && (
        <div className="overflow-hidden rounded-3xl border border-line">
          <div className="flex items-center justify-between bg-[#13141c] px-3 py-2 text-xs text-slate-400">
            Reference solution
            <button className="rounded-lg px-2 py-1 hover:bg-white/10 hover:text-white" onClick={() => setCode(challenge.solution)}>
              Load into editor
            </button>
          </div>
          <CodeEditor value={challenge.solution} lang={challenge.lang} readOnly />
        </div>
      )}
    </div>
  );
}
