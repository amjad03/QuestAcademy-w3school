"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { bag, fmt, gcd, readNum, Readout, Stepper, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const MAX_DEN = 12;

function slicePath(i: number, n: number, r: number, cx: number, cy: number) {
  if (n === 1) return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;
  const a0 = (i / n) * Math.PI * 2 - Math.PI / 2;
  const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A ${r} ${r} 0 ${large} 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`;
}

function Frac({ n, d, className = "" }: { n: number; d: number; className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center font-mono font-bold leading-none ${className}`}>
      <span>{n}</span>
      <span className="my-0.5 h-[2px] w-full min-w-[1.2em] rounded bg-current" />
      <span>{d}</span>
    </span>
  );
}

export default function Fraction(input: Record<string, unknown>) {
  const t = useT();
  const p = bag(input);
  const d0 = Math.round(readNum(p, "denominator", 4, 1, MAX_DEN));
  const n0 = Math.round(readNum(p, "numerator", 1, 0, d0));
  const [den, setDen] = useState(d0);
  const [num, setNum] = useState(n0);
  const [mult, setMult] = useState(2);

  const setDenominator = (d: number) => {
    setDen(d);
    setNum((n) => Math.min(n, d));
  };

  const g = gcd(num, den);
  const simple = num === 0 ? "0" : `${num / g}/${den / g}`;
  const toggleSlice = (i: number) => setNum(i + 1 === num ? i : i + 1);

  return (
    <div>
      <WidgetTitle title={t("widget.fraction.title", "Fraction pizza")} hint={t("widget.fraction.hint", "Change the steppers or tap slices to eat the pizza.")} />

      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <svg viewBox="0 0 200 200" className="mx-auto w-full max-w-[240px]" role="img" aria-label={t("widget.fraction.slices", "{n} out of {d} slices", { n: num, d: den })}>
          <circle cx="100" cy="100" r="92" fill="rgb(var(--warn) / 0.25)" />
          {Array.from({ length: den }, (_, i) => {
            const on = i < num;
            return (
              <motion.path
                key={`${den}-${i}`}
                d={slicePath(i, den, 84, 100, 100)}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: on ? 1 : 0.96 }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformOrigin: "100px 100px", cursor: "pointer" }}
                fill={on ? "rgb(var(--accent))" : "rgb(var(--surface-2))"}
                stroke="rgb(var(--surface))"
                strokeWidth="3"
                onClick={() => toggleSlice(i)}
              />
            );
          })}
          {num > 0 &&
            Array.from({ length: num }, (_, i) => {
              const a = ((i + 0.5) / den) * Math.PI * 2 - Math.PI / 2;
              return den > 1 ? <circle key={`pep-${i}`} cx={100 + Math.cos(a) * 52} cy={100 + Math.sin(a) * 52} r="6" fill="rgb(var(--accent-2))" pointerEvents="none" /> : null;
            })}
        </svg>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-4">
            <Frac n={num} d={den} className="text-4xl text-accent" />
            <div className="space-y-2">
              <Stepper label={t("widget.fraction.top", "Top (numerator)")} value={num} min={0} max={den} onChange={setNum} />
              <Stepper label={t("widget.fraction.bottom", "Bottom (denominator)")} value={den} min={1} max={MAX_DEN} onChange={setDenominator} />
            </div>
          </div>

          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">{t("widget.fraction.asBar", "As a bar")}</div>
            <div className="flex h-10 overflow-hidden rounded-2xl border border-line bg-surface-2">
              {Array.from({ length: den }, (_, i) => (
                <button
                  type="button"
                  key={`${den}-${i}`}
                  aria-label={t("widget.fraction.barPart", "Bar part {n}", { n: i + 1 })}
                  aria-pressed={i < num}
                  onClick={() => toggleSlice(i)}
                  className={`h-full flex-1 border-r border-surface transition-colors duration-300 last:border-r-0 ${i < num ? "bg-accent" : "bg-surface-2"}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2" aria-live="polite">
            <Readout label={t("widget.fraction.simplest", "Simplest")} value={simple} />
            <Readout label={t("widget.fraction.decimal", "Decimal")} value={fmt(num / den, 3)} />
            <Readout label={t("widget.fraction.percent", "Percent")} value={`${fmt((num / den) * 100, 1)}%`} />
          </div>

          <div className="rounded-2xl border border-line bg-surface-2 p-3">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-ink">{t("widget.fraction.equivalent", "Equivalent fraction")}</span>
              <Stepper label={t("widget.fraction.timesBy", "× by")} value={mult} min={2} max={6} onChange={setMult} />
            </div>
            <div className="flex items-center justify-center gap-3 text-2xl text-ink">
              <Frac n={num} d={den} />
              <span className="text-muted">=</span>
              <Frac n={num * mult} d={den * mult} className="text-accent" />
              <span className="ml-2 text-xs text-muted">
                {t("widget.fraction.multiply", "multiply top and bottom by {n}", { n: mult })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
