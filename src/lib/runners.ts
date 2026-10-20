"use client";

import type { CodeLang } from "@/content/types";

/* ================================================================== */
/* Web (HTML / CSS / JS) — runs in a sandboxed iframe                  */
/* ================================================================== */

export interface TestResult {
  label: string;
  pass: boolean;
  error?: string;
}

const CONSOLE_BRIDGE = `
<script>
(function(){
  var send = function(type, args){
    try {
      var text = Array.prototype.map.call(args, function(a){
        if (typeof a === 'string') return a;
        try { return JSON.stringify(a); } catch(e) { return String(a); }
      }).join(' ');
      if (type === 'log') window.__logs.push(text);
      parent.postMessage({ __quest: true, type: type, text: text }, '*');
    } catch(e) {}
  };
  window.__logs = [];
  ['log','info','warn','error'].forEach(function(k){
    var orig = console[k];
    console[k] = function(){ send(k === 'info' ? 'log' : k, arguments); orig && orig.apply(console, arguments); };
  });
  window.addEventListener('error', function(e){ send('error', [e.message + (e.lineno ? ' (line ' + e.lineno + ')' : '')]); });
  window.addEventListener('unhandledrejection', function(e){ send('error', ['Unhandled promise rejection: ' + (e.reason && e.reason.message || e.reason)]); });
})();
<\/script>`;

function escapeScript(code: string) {
  return code.replace(/<\/script/gi, "<\\/script");
}

/** Build an iframe document for a snippet. */
export function buildWebDoc(lang: CodeLang, code: string, opts: { setup?: string; checks?: { label: string; check: string }[]; dark?: boolean } = {}) {
  const base = `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:16px;line-height:1.5}</style>`;
  let body = "";
  if (lang === "html") body = code;
  else if (lang === "css") body = `<style>${code}</style>${opts.setup ?? ""}`;
  else if (lang === "javascript") body = `${opts.setup ?? ""}<script>${escapeScript(code)}\n<\/script>`;

  let checks = "";
  if (opts.checks?.length) {
    const list = JSON.stringify(opts.checks.map((c) => c.check));
    checks = `<script>
window.addEventListener('load', function(){
  setTimeout(function(){
    var checks = ${escapeScript(list)};
    var results = checks.map(function(c){
      try { return { pass: !!(0, eval)(c) }; } catch (e) { return { pass: false, error: String(e && e.message || e) }; }
    });
    parent.postMessage({ __quest: true, type: 'tests', results: results }, '*');
  }, 60);
});
<\/script>`;
  }
  return `<!doctype html><html><head>${base}${CONSOLE_BRIDGE}</head><body>${body}${checks}</body></html>`;
}

export const isWeb = (lang: CodeLang) => lang === "html" || lang === "css" || lang === "javascript";

/* ================================================================== */
/* Python — Pyodide in a Web Worker (can be terminated on timeout)     */
/* ================================================================== */

const PYODIDE_VERSION = "0.27.2";
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

const WORKER_SRC = `
importScripts("${PYODIDE_URL}pyodide.js");
let py = null;
async function boot(){ if (!py) { py = await loadPyodide({ indexURL: "${PYODIDE_URL}" }); } return py; }
self.onmessage = async (e) => {
  const { id, code, checks } = e.data;
  try {
    const pyodide = await boot();
    let out = "";
    pyodide.setStdout({ batched: (s) => { out += s + "\\n"; } });
    pyodide.setStderr({ batched: (s) => { out += s + "\\n"; } });
    const ns = pyodide.globals.get("dict")();
    let error = null;
    try {
      await pyodide.runPythonAsync(code, { globals: ns });
    } catch (err) {
      const msg = String(err && err.message || err);
      // Keep only the useful tail of the traceback.
      const lines = msg.trim().split("\\n");
      error = lines.filter(l => !l.includes("/lib/python") && !l.includes("_pyodide")).slice(-3).join("\\n");
    }
    let results = null;
    if (checks && checks.length) {
      ns.set("__stdout", out);
      results = checks.map((c) => {
        try { return { pass: !!pyodide.runPython("bool(" + c + ")", { globals: ns }) }; }
        catch (err) { const m = String(err && err.message || err).trim().split("\\n"); return { pass: false, error: m[m.length - 1] }; }
      });
    }
    ns.destroy();
    self.postMessage({ id, ok: true, out, error, results });
  } catch (err) {
    self.postMessage({ id, ok: false, error: "Could not start Python: " + String(err && err.message || err) });
  }
};
self.postMessage({ ready: false });
`;

let worker: Worker | null = null;
let seq = 0;
let warm = false;

function getWorker() {
  if (!worker) {
    const blob = new Blob([WORKER_SRC], { type: "text/javascript" });
    worker = new Worker(URL.createObjectURL(blob));
  }
  return worker;
}

export interface PyResult {
  out: string;
  error: string | null;
  results?: TestResult[];
  bootMs?: number;
}

export function pythonIsWarm() {
  return warm;
}

export function runPython(code: string, checks?: { label: string; check: string }[], timeoutMs = 12000): Promise<PyResult> {
  const w = getWorker();
  const id = ++seq;
  const started = performance.now();
  return new Promise((resolve) => {
    const timer = setTimeout(
      () => {
        w.removeEventListener("message", onMsg);
        w.terminate();
        worker = null;
        resolve({ out: "", error: `⏱️ Stopped after ${Math.round((warm ? timeoutMs : timeoutMs * 4) / 1000)}s — is there an infinite loop?` });
      },
      warm ? timeoutMs : timeoutMs * 4, // first run downloads Python (~10 MB)
    );
    function onMsg(e: MessageEvent) {
      if (e.data?.id !== id) return;
      clearTimeout(timer);
      w.removeEventListener("message", onMsg);
      if (!e.data.ok) return resolve({ out: "", error: e.data.error });
      warm = true;
      resolve({
        out: e.data.out,
        error: e.data.error,
        bootMs: performance.now() - started,
        results: e.data.results?.map((r: { pass: boolean; error?: string }, i: number) => ({ label: checks![i].label, ...r })),
      });
    }
    w.addEventListener("message", onMsg);
    w.postMessage({ id, code, checks: checks?.map((c) => c.check) });
  });
}

/* ================================================================== */
/* SQL — sql.js (SQLite compiled to WebAssembly), served from /vendor  */
/* ================================================================== */

interface SqlJs {
  Database: new () => {
    exec: (sql: string) => { columns: string[]; values: unknown[][] }[];
    close: () => void;
  };
}

let sqlPromise: Promise<SqlJs> | null = null;

function loadSql(): Promise<SqlJs> {
  sqlPromise ??= new Promise((resolve, reject) => {
    const w = window as unknown as { initSqlJs?: (o: { locateFile: (f: string) => string }) => Promise<SqlJs> };
    const init = () => w.initSqlJs!({ locateFile: (f) => `/vendor/${f}` }).then(resolve, reject);
    if (w.initSqlJs) return init();
    const s = document.createElement("script");
    s.src = "/vendor/sql-wasm.js";
    s.onload = init;
    s.onerror = () => reject(new Error("Could not load the SQL engine"));
    document.head.appendChild(s);
  });
  return sqlPromise;
}

export interface SqlResult {
  columns: string[];
  rows: Record<string, unknown>[];
  error: string | null;
  results?: TestResult[];
  statements: number;
}

export async function runSql(code: string, opts: { setup?: string; checks?: { label: string; check: string }[] } = {}): Promise<SqlResult> {
  const SQL = await loadSql();
  const db = new SQL.Database();
  let columns: string[] = [];
  let rows: Record<string, unknown>[] = [];
  let error: string | null = null;
  let statements = 0;
  try {
    if (opts.setup) db.exec(opts.setup);
    const res = db.exec(code);
    statements = res.length;
    const last = res[res.length - 1];
    if (last) {
      columns = last.columns;
      rows = last.values.map((v) => Object.fromEntries(last.columns.map((c, i) => [c, v[i]])));
    }
  } catch (e) {
    error = String((e as Error).message ?? e);
  } finally {
    db.close();
  }
  let results: TestResult[] | undefined;
  if (opts.checks) {
    results = opts.checks.map((c) => {
      try {
        // eslint-disable-next-line no-new-func
        const fn = new Function("rows", "columns", `return (${c.check});`);
        return { label: c.label, pass: !error && Boolean(fn(rows, columns)) };
      } catch (e) {
        return { label: c.label, pass: false, error: String((e as Error).message ?? e) };
      }
    });
  }
  return { columns, rows, error, results, statements };
}
