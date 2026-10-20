"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Check, Copy, ExternalLink, Loader2, Play, RotateCcw } from "lucide-react";
import clsx from "clsx";
import type { CodeLang } from "@/content/types";
import { useLearner } from "@/lib/store";
import { isWeb } from "@/lib/runners";
import { ConsoleView, Preview, SqlTable } from "./Output";
import { useRunner } from "./useRunner";

const CodeEditor = dynamic(() => import("./CodeEditor"), {
  ssr: false,
  loading: () => <div className="h-[160px] animate-pulse bg-[#1a1b26]" />,
});

export const LANG_LABEL: Record<CodeLang, string> = { html: "HTML", css: "CSS", javascript: "JavaScript", python: "Python", sql: "SQL" };

export function openInPlayground(router: ReturnType<typeof useRouter>, lang: CodeLang, code: string) {
  try {
    sessionStorage.setItem("qa-playground", JSON.stringify({ lang, code }));
  } catch {
    /* ignore */
  }
  router.push("/code/playground");
}

/** "Try it yourself" — an editable, runnable code block. */
export function TryIt({ lang, code: initial, caption }: { lang: CodeLang; code: string; caption?: string }) {
  const router = useRouter();
  const [code, setCode] = useState(initial);
  const [ran, setRan] = useState(false);
  const [copied, setCopied] = useState(false);
  const bump = useLearner((s) => s.bump);
  const r = useRunner(lang);

  const run = useCallback(() => {
    setRan(true);
    bump("codeRuns");
    void r.run(code);
  }, [code, r, bump]);

  const preview = lang === "html" || lang === "css";

  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-[#1a1b26] shadow-soft">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#13141c] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </span>
        <span className="ml-1 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] font-semibold text-cyan-300">{LANG_LABEL[lang]}</span>
        {caption && <span className="hidden truncate text-xs text-slate-400 sm:inline">{caption}</span>}
        <div className="ml-auto flex items-center gap-1">
          <IconBtn label="Reset" onClick={() => setCode(initial)}>
            <RotateCcw className="h-3.5 w-3.5" />
          </IconBtn>
          <IconBtn
            label="Copy"
            onClick={() => {
              void navigator.clipboard?.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          </IconBtn>
          <IconBtn label="Open in playground" onClick={() => openInPlayground(router, lang, code)}>
            <ExternalLink className="h-3.5 w-3.5" />
          </IconBtn>
          <button onClick={run} className="ml-1 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-lime-400 px-3 py-1.5 text-xs font-bold text-slate-900 transition hover:brightness-110">
            {r.running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-slate-900" />}
            Run
            <kbd className="hidden rounded bg-black/15 px-1 font-mono text-[10px] sm:inline">⌘↵</kbd>
          </button>
        </div>
      </div>
      <div className={clsx(preview && ran && "grid lg:grid-cols-2")}>
        <div className="min-w-0">
          <CodeEditor value={code} onChange={setCode} lang={lang} onRun={run} maxHeight="420px" />
        </div>
        {ran && (
          <div className={clsx("min-w-0 border-white/10", preview ? "border-t lg:border-l lg:border-t-0" : "border-t")}>
            <div className="flex items-center justify-between bg-[#13141c] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {preview ? "Result" : lang === "sql" ? "Result set" : "Output"}
              {r.status && <span className="normal-case tracking-normal text-amber-300">{r.status}</span>}
            </div>
            {isWeb(lang) && (
              <div className={clsx(lang === "javascript" ? "hidden" : "h-[260px]")}>
                <Preview ref={r.frameRef} doc={r.doc} />
              </div>
            )}
            {lang === "sql" && r.sql && <SqlTable {...r.sql} />}
            {lang === "javascript" || lang === "python" || r.logs.length || (lang === "sql" && r.running) ? (
              <div className="max-h-[240px]">
                <ConsoleView lines={r.logs} empty={r.running ? "Running…" : "No output. Use print() / console.log() to show values."} />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </figure>
  );
}

function IconBtn({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} title={label} aria-label={label} className="grid h-7 w-7 place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white">
      {children}
    </button>
  );
}
