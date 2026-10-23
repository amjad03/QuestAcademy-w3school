"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fmt, Readout, Segmented, Slider, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const CURVES = [
  { id: "1", label: "O(1)", f: () => 1, color: "rgb(var(--good))" },
  { id: "log", label: "O(log n)", f: (n: number) => Math.max(1, Math.log2(n)), color: "rgb(var(--accent-2))" },
  { id: "n", label: "O(n)", f: (n: number) => n, color: "rgb(var(--accent))" },
  { id: "nlog", label: "O(n log n)", f: (n: number) => n * Math.max(1, Math.log2(n)), color: "rgb(var(--warn))" },
  { id: "n2", label: "O(n²)", f: (n: number) => n * n, color: "rgb(var(--bad))" },
  { id: "2n", label: "O(2ⁿ)", f: (n: number) => Math.pow(2, n), color: "rgb(var(--ink))" },
] as const;

const W = 420;
const H = 260;
const PAD = { l: 44, r: 12, t: 12, b: 28 };
const NMAX = 64;

function human(ops: number, years: (n: string) => string) {
  // time if one operation takes one microsecond
  const s = ops / 1e6;
  if (s < 1e-3) return `${fmt(s * 1e6, 0)} µs`;
  if (s < 1) return `${fmt(s * 1e3, 1)} ms`;
  if (s < 60) return `${fmt(s, 1)} s`;
  if (s < 3600) return `${fmt(s / 60, 1)} min`;
  if (s < 86400 * 365) return `${fmt(s / 3600, 1)} h`;
  const y = s / (86400 * 365);
  return years(y > 1e6 ? y.toExponential(1) : fmt(y, 0));
}

function opsText(v: number) {
  return v >= 1e7 ? v.toExponential(2).replace("e+", "×10^") : Math.round(v).toLocaleString();
}

export default function BigO() {
  const t = useT();
  const years = (v: string) => t("widget.bigO.years", "{n} years", { n: v });
  const [n, setN] = useState(16);
  const [scale, setScale] = useState<"linear" | "log">("linear");
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const plotN = Math.max(n, 8);
  const visible = CURVES.filter((c) => !hidden.has(c.id));
  const yMaxLinear = Math.max(10, ...visible.filter((c) => c.id !== "2n").map((c) => c.f(plotN))) * 1.1;
  const yMaxLog = Math.log10(Math.max(10, ...visible.map((c) => c.f(plotN))));

  const sx = (x: number) => PAD.l + ((x - 1) / (plotN - 1)) * (W - PAD.l - PAD.r);
  const sy = (y: number) => {
    const t = scale === "linear" ? y / yMaxLinear : Math.log10(Math.max(1, y)) / (yMaxLog || 1);
    return H - PAD.b - t * (H - PAD.t - PAD.b);
  };

  const path = (f: (n: number) => number) => {
    let d = "";
    const N = 120;
    for (let i = 0; i <= N; i++) {
      const x = 1 + (i / N) * (plotN - 1);
      d += `${i ? "L" : "M"}${sx(x).toFixed(1)},${Math.max(-5, sy(f(x))).toFixed(1)}`;
    }
    return d;
  };

  const yTicks =
    scale === "linear"
      ? [0, 0.25, 0.5, 0.75, 1].map((t) => t * yMaxLinear)
      : Array.from({ length: Math.floor(yMaxLog) + 1 }, (_, i) => Math.pow(10, i)).filter((_, i, arr) => arr.length <= 6 || i % Math.ceil(arr.length / 6) === 0);

  const toggle = (id: string) =>
    setHidden((h) => {
      const next = new Set(h);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const maxOps = Math.max(...CURVES.map((c) => c.f(n)));

  return (
    <div>
      <WidgetTitle
        title={t("widget.bigO.title", "Big-O growth rates")}
        hint={t("widget.bigO.hint", "How does the work grow as the input size n gets bigger?")}
        right={
          <Segmented
            label={t("widget.bigO.scale", "Y axis scale")}
            value={scale}
            onChange={setScale}
            options={[
              { value: "linear", label: t("widget.bigO.linear", "Linear") },
              { value: "log", label: t("widget.bigO.log", "Log") },
            ]}
          />
        }
      />

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t("widget.bigO.curves", "Growth curves")}>
              <defs>
                <clipPath id="bigo-clip">
                  <rect x={PAD.l} y={PAD.t} width={W - PAD.l - PAD.r} height={H - PAD.t - PAD.b} />
                </clipPath>
              </defs>
              {yTicks.map((v) => (
                <g key={v}>
                  <line x1={PAD.l} x2={W - PAD.r} y1={sy(v)} y2={sy(v)} stroke="rgb(var(--line))" />
                  <text x={PAD.l - 5} y={sy(v) + 3} fontSize="9" textAnchor="end" fill="rgb(var(--muted))">
                    {v >= 1e4 ? v.toExponential(0) : fmt(v, 0)}
                  </text>
                </g>
              ))}
              <line x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={H - PAD.b} stroke="rgb(var(--muted))" />
              <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} stroke="rgb(var(--muted))" />
              <text x={W - PAD.r} y={H - 6} fontSize="10" textAnchor="end" fill="rgb(var(--muted))">
                n = {plotN}
              </text>
              <text x={PAD.l} y={H - 6} fontSize="10" fill="rgb(var(--muted))">
                1
              </text>
              <g clipPath="url(#bigo-clip)">
                {visible.map((c) => (
                  <path key={c.id} d={path(c.f)} fill="none" stroke={c.color} strokeWidth="2.5" strokeLinecap="round" />
                ))}
                <line x1={sx(n)} x2={sx(n)} y1={PAD.t} y2={H - PAD.b} stroke="rgb(var(--accent) / 0.5)" strokeDasharray="4 4" />
                {visible.map((c) => (
                  <circle key={c.id} cx={sx(n)} cy={sy(c.f(n))} r="4" fill={c.color} stroke="rgb(var(--surface))" strokeWidth="1.5" />
                ))}
              </g>
            </svg>
          </div>
          <div className="mt-3">
            <Slider label={t("widget.bigO.inputSize", "Input size n")} value={n} min={1} max={NMAX} onChange={setN} />
          </div>
        </div>

        <div className="space-y-2" aria-live="polite">
          {CURVES.map((c) => {
            const v = c.f(n);
            const w = Math.log10(Math.max(1, v)) / Math.log10(Math.max(10, maxOps));
            const off = hidden.has(c.id);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggle(c.id)}
                aria-pressed={!off}
                className={`block w-full rounded-2xl border border-line bg-surface-2 p-2 text-left transition ${off ? "opacity-40" : ""}`}
              >
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="flex items-center gap-2 font-mono font-bold" style={{ color: c.color }}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                    {c.label}
                  </span>
                  <span className="font-mono text-xs text-ink">{t("widget.bigO.ops", "{n} ops", { n: opsText(v) })}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface">
                  <motion.div className="h-full rounded-full" style={{ background: c.color }} animate={{ width: `${Math.max(2, w * 100)}%` }} />
                </div>
                <div className="mt-0.5 text-right text-[10px] text-muted">{t("widget.bigO.time", "≈ {time} at 1 µs/op", { time: human(v, years) })}</div>
              </button>
            );
          })}
          <Readout label={t("widget.bigO.ratio", "2ⁿ ÷ n² at this n")} value={opsText(Math.pow(2, n) / (n * n))} unit="×" tone="bad" />
        </div>
      </div>
    </div>
  );
}
