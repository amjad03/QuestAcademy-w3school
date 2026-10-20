"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { Download, Loader2, Play, RotateCcw, Share2, SquareTerminal } from "lucide-react";
import clsx from "clsx";
import type { CodeLang } from "@/content/types";
import { useLearner } from "@/lib/store";
import { isWeb } from "@/lib/runners";
import { ConsoleView, Preview, SqlTable } from "./Output";
import { useRunner } from "./useRunner";
import { LANG_LABEL } from "./TryIt";

const CodeEditor = dynamic(() => import("./CodeEditor"), { ssr: false, loading: () => <div className="h-full animate-pulse bg-[#1a1b26]" /> });

const STARTERS: Record<CodeLang, string> = {
  html: `<!doctype html>
<html>
<head>
  <style>
    body { font-family: system-ui; display: grid; place-items: center; min-height: 90vh;
           background: #2F6BFF; margin: 0; }
    .card { background: white; padding: 2rem 3rem; border-radius: 24px; text-align: center;
            box-shadow: 0 20px 50px rgb(0 0 0 / .2); }
    button { font-size: 1.1rem; padding: .6rem 1.4rem; border-radius: 12px; border: 0;
             background: #0f172a; color: white; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, Quest! 🚀</h1>
    <p>Clicks: <b id="n">0</b></p>
    <button onclick="document.getElementById('n').textContent++">Click me</button>
  </div>
</body>
</html>`,
  css: `/* CSS-only mode: styles apply to the demo markup */
.box {
  width: 120px; height: 120px; border-radius: 24px;
  background: #7C4DFF;
  animation: spin 3s ease-in-out infinite;
}
@keyframes spin { 50% { transform: rotate(180deg) scale(.7); border-radius: 50%; } }`,
  javascript: `// Press Run (or ⌘/Ctrl + Enter)
const learners = [
  { name: "Asha", xp: 420 },
  { name: "Leo", xp: 980 },
  { name: "Mei", xp: 655 },
];

const ranked = [...learners].sort((a, b) => b.xp - a.xp);
ranked.forEach((l, i) => console.log(\`#\${i + 1} \${l.name} — \${l.xp} XP\`));

const total = learners.reduce((sum, l) => sum + l.xp, 0);
console.log("Average XP:", Math.round(total / learners.length));`,
  python: `# Python runs right in your browser (Pyodide)
import math

def is_prime(n):
    if n < 2:
        return False
    return all(n % d for d in range(2, int(math.sqrt(n)) + 1))

primes = [n for n in range(1, 60) if is_prime(n)]
print("Primes under 60:", primes)
print("Count:", len(primes))`,
  sql: `-- SQLite in your browser. Create, insert, query!
CREATE TABLE learners (id INTEGER PRIMARY KEY, name TEXT, world TEXT, xp INTEGER);
INSERT INTO learners (name, world, xp) VALUES
  ('Asha', 'code', 420), ('Leo', 'exam', 980), ('Mei', 'code', 655),
  ('Ravi', 'campus', 310), ('Zoe', 'exam', 720);

SELECT world, COUNT(*) AS learners, SUM(xp) AS total_xp
FROM learners
GROUP BY world
ORDER BY total_xp DESC;`,
};

const CSS_DEMO = `<div style="display:grid;place-items:center;min-height:85vh"><div class="box"></div></div>`;

export function Playground() {
  const [lang, setLang] = useState<CodeLang>("html");
  const [codes, setCodes] = useState<Record<CodeLang, string>>(STARTERS);
  const [live, setLive] = useState(true);
  const [copied, setCopied] = useState(false);
  const bump = useLearner((s) => s.bump);
  const runner = useRunner(lang);
  const code = codes[lang];

  // Accept code handed over from a lesson ("Open in playground") or a shared link.
  useEffect(() => {
    try {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const { lang: l, code: c } = JSON.parse(decodeURIComponent(escape(atob(hash))));
        if (l in STARTERS) {
          setLang(l);
          setCodes((x) => ({ ...x, [l]: c }));
          return;
        }
      }
      const raw = sessionStorage.getItem("qa-playground");
      if (raw) {
        const { lang: l, code: c } = JSON.parse(raw) as { lang: CodeLang; code: string };
        sessionStorage.removeItem("qa-playground");
        setLang(l);
        setCodes((x) => ({ ...x, [l]: c }));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const run = useCallback(() => {
    bump("codeRuns");
    void runner.run(code, lang === "css" ? { setup: CSS_DEMO } : {});
  }, [bump, runner, code, lang]);

  // Live preview for web languages (debounced).
  useEffect(() => {
    if (!live || !isWeb(lang) || lang === "javascript") return;
    const t = setTimeout(() => void runner.run(code, lang === "css" ? { setup: CSS_DEMO } : {}), 450);
    return () => clearTimeout(t);
  }, [code, lang, live]); // eslint-disable-line react-hooks/exhaustive-deps

  const share = () => {
    const hash = btoa(unescape(encodeURIComponent(JSON.stringify({ lang, code }))));
    const url = `${window.location.origin}/code/playground#${hash}`;
    void navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const ext = { html: "html", css: "css", javascript: "js", python: "py", sql: "sql" }[lang];
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([code], { type: "text/plain" }));
    a.download = `quest-playground.${ext}`;
    a.click();
  };

  const visual = lang === "html" || lang === "css";

  return (
    <div className="flex h-[calc(100dvh-58px-66px)] flex-col bg-bg text-ink md:h-screen">
      <div className="flex flex-wrap items-center gap-3 border-b-2 border-line bg-surface px-4 py-3">
        <div className="mr-1 hidden items-center gap-2 lg:flex">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#334155] text-white shadow-[inset_0_-3px_0_#1E293B]">
            <SquareTerminal className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <h1 className="text-lg font-black">Code lab</h1>
        </div>
        <div className="flex overflow-x-auto rounded-xl border-2 border-line bg-surface-2 p-1" role="tablist" aria-label="Language">
          {(Object.keys(STARTERS) as CodeLang[]).map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={lang === l}
              onClick={() => setLang(l)}
              className={clsx("shrink-0 rounded-lg px-3 py-1.5 text-sm font-extrabold transition", lang === l ? "bg-surface text-accent shadow-[0_2px_0_rgb(var(--line))]" : "text-muted hover:text-ink")}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
        {isWeb(lang) && lang !== "javascript" && (
          <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-muted">
            <input type="checkbox" checked={live} onChange={(e) => setLive(e.target.checked)} className="h-4 w-4 accent-[rgb(var(--accent))]" /> Live preview
          </label>
        )}
        <div className="ml-auto flex items-center gap-1.5">
          <button onClick={() => setCodes((x) => ({ ...x, [lang]: STARTERS[lang] }))} className="btn-flat !text-muted" title="Reset to starter code">
            <RotateCcw className="h-4 w-4" /> <span className="hidden xl:inline">Reset</span>
          </button>
          <button onClick={download} className="btn-flat !text-muted" title="Download file">
            <Download className="h-4 w-4" /> <span className="hidden xl:inline">Download</span>
          </button>
          <button onClick={share} className="btn-flat !text-muted" title="Copy share link">
            <Share2 className="h-4 w-4" /> <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
          </button>
          <button onClick={run} className="btn-good !py-2 text-sm" title="Run (⌘/Ctrl + Enter)">
            {runner.running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4 fill-white" />} Run
          </button>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="min-h-0 overflow-auto border-b-2 border-line bg-[#1a1b26] lg:border-b-0 lg:border-r-2">
          <CodeEditor key={lang} value={code} onChange={(v) => setCodes((x) => ({ ...x, [lang]: v }))} lang={lang} onRun={run} minHeight="100%" />
        </div>
        <div className="flex min-h-0 flex-col">
          {runner.status && <div className="border-b-2 border-line bg-warn/10 px-4 py-2 text-sm font-bold text-warn-shade">{runner.status}</div>}
          {isWeb(lang) && (
            <div className={clsx(visual ? "min-h-0 flex-1" : "hidden")}>
              <Preview ref={runner.frameRef} doc={runner.doc} className="h-full" />
            </div>
          )}
          {lang === "sql" && runner.sql && (
            <div className="min-h-0 flex-1 overflow-auto">
              <SqlTable {...runner.sql} />
            </div>
          )}
          {(!visual || runner.logs.length > 0) && (
            <div className={clsx("min-h-0 overflow-auto border-t-2 border-line", visual ? "max-h-40" : lang === "sql" && runner.sql ? "max-h-32" : "flex-1")}>
              <ConsoleView lines={runner.logs} empty={lang === "sql" ? "Run a query to see results." : "Press Run to see output."} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
