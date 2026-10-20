"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CodeLang } from "@/content/types";
import { buildWebDoc, isWeb, runPython, runSql, pythonIsWarm, type TestResult } from "@/lib/runners";
import type { LogLine } from "./Output";

interface RunOpts {
  setup?: string;
  checks?: { label: string; check: string }[];
}

/**
 * Runs code for any supported language and exposes the output in a uniform shape.
 * Web languages render into `doc` (bind it to <Preview ref={frameRef}/>).
 */
export function useRunner(lang: CodeLang) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [doc, setDoc] = useState("");
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [sql, setSql] = useState<{ columns: string[]; rows: Record<string, unknown>[] } | null>(null);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [tests, setTests] = useState<TestResult[] | null>(null);
  const pendingChecks = useRef<{ label: string; check: string }[] | null>(null);
  const resolver = useRef<((r: TestResult[] | null) => void) | null>(null);
  const runId = useRef(0);

  useEffect(() => {
    if (!isWeb(lang)) return;
    const onMsg = (e: MessageEvent) => {
      if (!e.data?.__quest || e.source !== frameRef.current?.contentWindow) return;
      if (e.data.type === "tests") {
        const labels = pendingChecks.current ?? [];
        const res: TestResult[] = e.data.results.map((r: { pass: boolean; error?: string }, i: number) => ({ label: labels[i]?.label ?? `Test ${i + 1}`, ...r }));
        setTests(res);
        setRunning(false);
        resolver.current?.(res);
        resolver.current = null;
      } else {
        setLogs((l) => [...l.slice(-300), { type: e.data.type, text: e.data.text }]);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [lang]);

  const run = useCallback(
    async (code: string, opts: RunOpts = {}): Promise<TestResult[] | null> => {
      const id = ++runId.current;
      setLogs([]);
      setTests(null);
      setStatus(null);
      if (isWeb(lang)) {
        pendingChecks.current = opts.checks ?? null;
        setRunning(Boolean(opts.checks?.length));
        // A trailing comment with the run id forces the iframe to reload even for identical code.
        setDoc(buildWebDoc(lang, code, opts) + `<!-- run ${id} -->`);
        if (!opts.checks?.length) return null;
        return new Promise((resolve) => {
          resolver.current = resolve;
          setTimeout(() => {
            if (resolver.current === resolve) {
              resolver.current = null;
              setRunning(false);
              const res = opts.checks!.map((c) => ({ label: c.label, pass: false, error: "Timed out" }));
              setTests(res);
              resolve(res);
            }
          }, 4000);
        });
      }
      setRunning(true);
      if (lang === "python") {
        if (!pythonIsWarm()) setStatus("Waking up Python (first run downloads ~10 MB)…");
        const r = await runPython(code, opts.checks);
        if (id !== runId.current) return null;
        setStatus(null);
        const lines: LogLine[] = r.out
          .replace(/\n$/, "")
          .split("\n")
          .filter((x, i, a) => x !== "" || i < a.length - 1)
          .map((text) => ({ type: "log" as const, text }));
        if (r.error) lines.push({ type: "error", text: r.error });
        setLogs(lines);
        setTests(r.results ?? null);
        setRunning(false);
        return r.results ?? null;
      }
      // sql
      const r = await runSql(code, opts);
      if (id !== runId.current) return null;
      setSql(r.error ? null : { columns: r.columns, rows: r.rows });
      setLogs(r.error ? [{ type: "error", text: r.error }] : []);
      setTests(r.results ?? null);
      setRunning(false);
      return r.results ?? null;
    },
    [lang],
  );

  return { frameRef, doc, logs, sql, running, status, tests, run };
}
