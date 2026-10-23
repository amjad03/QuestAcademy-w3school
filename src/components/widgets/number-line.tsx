"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { bag, readNum, Segmented, Stepper, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

export default function NumberLine(input: Record<string, unknown>) {
  const t = useT();
  const p = bag(input);
  const rawMin = Math.round(readNum(p, "min", 0, -50, 50));
  const rawMax = Math.round(readNum(p, "max", 20, -50, 100));
  const min = Math.min(rawMin, rawMax - 2);
  const max = Math.max(rawMax, min + 2);
  const span = max - min;

  const [start, setStart] = useState(() => Math.min(max, Math.max(min, min + 3)));
  const [op, setOp] = useState<"+" | "-">("+");
  const [amount, setAmount] = useState(4);
  const [pos, setPos] = useState(start);
  const [hops, setHops] = useState<number[]>([]);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxAmount = op === "+" ? max - start : start - min;
  const b = Math.min(amount, Math.max(0, maxAmount));
  const result = op === "+" ? start + b : start - b;

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setRunning(false);
  };
  useEffect(
    () => () => {
      if (timer.current) clearInterval(timer.current);
    },
    [],
  );

  const reset = (s = start) => {
    stop();
    setPos(s);
    setHops([]);
  };

  const go = () => {
    reset();
    if (b === 0) return;
    setRunning(true);
    const dir = op === "+" ? 1 : -1;
    let cur = start;
    let n = 0;
    timer.current = setInterval(() => {
      const from = cur;
      cur += dir;
      n += 1;
      setHops((h) => [...h, from]);
      setPos(cur);
      if (n >= b) stop();
    }, 420);
  };

  // SVG geometry
  const W = 640;
  const pad = 28;
  const unit = (W - pad * 2) / span;
  const X = (v: number) => pad + (v - min) * unit;
  const labelEvery = span > 30 ? 5 : span > 15 ? 2 : 1;
  const dir = op === "+" ? 1 : -1;
  const done = !running && hops.length === b && b > 0;

  return (
    <div>
      <WidgetTitle title={t("widget.numberLine.title", "Hop along the number line")} hint={t("widget.numberLine.hint", "Pick a start, choose + or −, then watch the frog hop.")} />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Stepper
          label={t("widget.numberLine.start", "Start")}
          value={start}
          min={min}
          max={max}
          onChange={(v) => {
            setStart(v);
            reset(v);
          }}
        />
        <Segmented
          label={t("widget.numberLine.operation", "Operation")}
          value={op}
          onChange={(v) => {
            setOp(v);
            reset();
          }}
          options={[
            { value: "+", label: t("widget.numberLine.add", "+ add") },
            { value: "-", label: t("widget.numberLine.takeAway", "− take away") },
          ]}
        />
        <Stepper
          label={t("widget.numberLine.hops", "Hops")}
          value={b}
          min={0}
          max={Math.max(0, maxAmount)}
          onChange={(v) => {
            setAmount(v);
            reset();
          }}
        />
      </div>

      <div className="overflow-hidden rounded-3xl bg-surface-2 p-2">
        <svg viewBox={`0 0 ${W} 150`} className="w-full" role="img" aria-label={t("widget.numberLine.label", "Number line from {min} to {max}", { min, max })}>
          {/* hop arcs */}
          {hops.map((from, i) => {
            const x1 = X(from);
            const x2 = X(from + dir);
            const h = Math.min(50, unit * 0.9 + 12);
            return (
              <motion.path
                key={i}
                d={`M ${x1} 92 Q ${(x1 + x2) / 2} ${92 - h} ${x2} 92`}
                fill="none"
                stroke={op === "+" ? "rgb(var(--good))" : "rgb(var(--bad))"}
                strokeWidth="3"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.35 }}
              />
            );
          })}

          <line x1={pad - 10} y1="100" x2={W - pad + 10} y2="100" stroke="rgb(var(--ink))" strokeWidth="3" strokeLinecap="round" />
          {Array.from({ length: span + 1 }, (_, i) => {
            const v = min + i;
            const show = v % labelEvery === 0;
            const highlight = v === start || (done && v === result);
            return (
              <g key={v}>
                <line x1={X(v)} y1={show ? 92 : 95} x2={X(v)} y2={show ? 108 : 105} stroke="rgb(var(--ink))" strokeWidth={show ? 2 : 1} />
                {show && (
                  <text x={X(v)} y="128" textAnchor="middle" fontSize="14" fontWeight={highlight ? 800 : 500} fill={highlight ? "rgb(var(--accent))" : "rgb(var(--muted))"}>
                    {v}
                  </text>
                )}
              </g>
            );
          })}

          <motion.g animate={{ x: X(pos) }} initial={false} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
            <motion.g key={pos} animate={{ y: [0, -30, 0] }} transition={{ duration: 0.38 }}>
              <text y="86" textAnchor="middle" fontSize="30">
                🐸
              </text>
            </motion.g>
          </motion.g>
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div aria-live="polite" className="font-mono text-2xl font-bold text-ink">
          {start} {op === "+" ? "+" : "−"} {b} = <span className={done ? "text-good" : "text-muted"}>{done ? result : "?"}</span>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => reset()} className="btn-ghost" aria-label={t("widget.reset", "Reset")}>
            <RotateCcw size={16} />
          </button>
          <button type="button" onClick={go} disabled={running} className="btn-pop">
            <Play size={16} /> {t("widget.numberLine.hop", "Hop!")}
          </button>
        </div>
      </div>
    </div>
  );
}
