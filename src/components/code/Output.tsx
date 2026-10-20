"use client";

import { forwardRef } from "react";
import clsx from "clsx";

export interface LogLine {
  type: "log" | "warn" | "error" | "info";
  text: string;
}

export function ConsoleView({ lines, empty = "Run the code to see output here." }: { lines: LogLine[]; empty?: string }) {
  return (
    <div className="h-full min-h-[120px] overflow-auto bg-[#0b0d14] p-3 font-mono text-[13px] leading-6" aria-live="polite">
      {lines.length === 0 && <div className="text-slate-500">{empty}</div>}
      {lines.map((l, i) => (
        <div
          key={i}
          className={clsx(
            "whitespace-pre-wrap break-words border-b border-white/5 py-0.5",
            l.type === "error" ? "text-red-400" : l.type === "warn" ? "text-amber-300" : l.type === "info" ? "text-sky-300" : "text-slate-200",
          )}
        >
          {l.type === "error" ? "✖ " : l.type === "warn" ? "⚠ " : "› "}
          {l.text}
        </div>
      ))}
    </div>
  );
}

export const Preview = forwardRef<HTMLIFrameElement, { doc: string; title?: string; className?: string }>(function Preview({ doc, title = "Preview", className }, ref) {
  return <iframe ref={ref} title={title} srcDoc={doc} sandbox="allow-scripts allow-modals" className={clsx("h-full min-h-[180px] w-full bg-white", className)} />;
});

export function SqlTable({ columns, rows }: { columns: string[]; rows: Record<string, unknown>[] }) {
  if (!columns.length) return <div className="p-3 font-mono text-[13px] text-slate-400">Statement ran — no rows returned.</div>;
  return (
    <div className="overflow-auto bg-[#0b0d14]">
      <table className="w-full border-collapse font-mono text-[13px] text-slate-200">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} className="sticky top-0 border-b border-white/10 bg-[#141826] px-3 py-2 text-left font-semibold text-cyan-300">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white/[0.02]">
              {columns.map((c) => (
                <td key={c} className="border-b border-white/5 px-3 py-1.5">
                  {r[c] === null ? <span className="text-slate-500">NULL</span> : String(r[c])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3 py-1.5 text-[11px] text-slate-500">{rows.length} row{rows.length === 1 ? "" : "s"}</div>
    </div>
  );
}
