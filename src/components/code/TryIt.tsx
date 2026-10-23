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
import { copyText } from "@/lib/clipboard";
import { useT } from "@/i18n";

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
  const t = useT();
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
    <figure className="overflow-hidden rounded-2xl border-2 border-line bg-[#1a1b26]">
      <div className="flex items-center gap-2 border-b-2 border-line bg-surface px-3 py-2">
        <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">{t("code.tryIt.title", "Try it")}</span>
        <span className="chip">{LANG_LABEL[lang]}</span>
        {caption && <span className="hidden truncate text-xs font-semibold text-muted sm:inline">{caption}</span>}
        <div className="ml-auto flex items-center gap-1">
          <IconBtn label={t("code.reset", "Reset")} onClick={() => setCode(initial)}>
            <RotateCcw className="h-3.5 w-3.5" />
          </IconBtn>
          <IconBtn
            label={t("code.copy", "Copy")}
            onClick={() => {
              void copyText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          </IconBtn>
          <IconBtn label={t("code.tryIt.openPlayground", "Open in playground")} onClick={() => openInPlayground(router, lang, code)}>
            <ExternalLink className="h-3.5 w-3.5" />
          </IconBtn>
          <button onClick={run} className="btn-good ml-1 !rounded-xl !px-3 !py-1.5 text-xs" title={t("code.runShortcut", "Run (⌘/Ctrl + Enter)")}>
            {r.running ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-white" />}
            {t("code.run", "Run")}
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
              {preview ? t("code.output.result", "Result") : lang === "sql" ? t("code.output.resultSet", "Result set") : t("code.output.output", "Output")}
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
                <ConsoleView lines={r.logs} empty={r.running ? t("code.output.running", "Running…") : t("code.output.empty", "No output. Use print() / console.log() to show values.")} />
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
    <button onClick={onClick} title={label} aria-label={label} className="grid h-8 w-8 place-items-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-ink">
      {children}
    </button>
  );
}
