"use client";

import { useId, useRef, useState } from "react";
import { fmt, Readout, Slider, svgPoint, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const FREQS = [
  { value: "1", label: "Yearly", n: 1 },
  { value: "2", label: "Half-yearly", n: 2 },
  { value: "4", label: "Quarterly", n: 4 },
  { value: "12", label: "Monthly", n: 12 },
  { value: "365", label: "Daily", n: 365 },
  { value: "inf", label: "Continuous", n: Infinity },
] as const;

const W = 440;
const H = 250;
const PAD = { l: 56, r: 14, t: 14, b: 28 };

const money = (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: v >= 1e5 ? 0 : 2, minimumFractionDigits: v >= 1e5 ? 0 : 2 });
const compact = (v: number) => (v >= 1e6 ? `${fmt(v / 1e6, 1)}M` : v >= 1e3 ? `${fmt(v / 1e3, 1)}k` : fmt(v, 0));

export default function CompoundInterest() {
  const t = useT();
  const freqLabel: Record<(typeof FREQS)[number]["value"], string> = {
    "1": t("widget.compound.yearly", "Yearly"),
    "2": t("widget.compound.halfYearly", "Half-yearly"),
    "4": t("widget.compound.quarterly", "Quarterly"),
    "12": t("widget.compound.monthly", "Monthly"),
    "365": t("widget.compound.daily", "Daily"),
    inf: t("widget.compound.continuous", "Continuous"),
  };
  const [P, setP] = useState(1000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [freq, setFreq] = useState<(typeof FREQS)[number]["value"]>("12");
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const freqId = useId();

  const r = rate / 100;
  const n = FREQS.find((f) => f.value === freq)!.n;
  const compound = (yr: number) => (n === Infinity ? P * Math.exp(r * yr) : P * Math.pow(1 + r / n, n * yr));
  const simple = (yr: number) => P * (1 + r * yr);

  const A = compound(years);
  const S = simple(years);
  const yMax = A * 1.08;
  const sx = (yr: number) => PAD.l + (yr / years) * (W - PAD.l - PAD.r);
  const sy = (v: number) => H - PAD.b - (v / yMax) * (H - PAD.t - PAD.b);

  const line = (f: (yr: number) => number) => {
    let d = "";
    const N = 100;
    for (let i = 0; i <= N; i++) {
      const yr = (i / N) * years;
      d += `${i ? "L" : "M"}${sx(yr).toFixed(1)},${sy(f(yr)).toFixed(1)}`;
    }
    return d;
  };
  const area = `${line(compound)} L${sx(years)},${sy(0)} L${sx(0)},${sy(0)} Z`;

  const barW = Math.max(2, ((W - PAD.l - PAD.r) / (years + 1)) * 0.55);
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((k) => k * yMax);

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const { x } = svgPoint(svgRef.current, e.clientX, e.clientY);
    const yr = Math.round(((x - PAD.l) / (W - PAD.l - PAD.r)) * years);
    setHover(Math.max(0, Math.min(years, yr)));
  };

  const ht = hover ?? years;
  const doubling = n === Infinity ? Math.log(2) / r : Math.log(2) / (n * Math.log(1 + r / n));

  return (
    <div>
      <WidgetTitle title={t("widget.compound.title", "Compound interest")} hint={t("widget.compound.hint", "Interest that earns interest! Compare it with simple interest.")} />

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="w-full"
              onPointerMove={onMove}
              onPointerDown={onMove}
              onPointerLeave={() => setHover(null)}
              style={{ touchAction: "none" }}
              role="img"
              aria-label={t("widget.compound.chart", "Growth chart of compound versus simple interest")}
            >
              <defs>
                <linearGradient id="ci-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgb(var(--accent))" stopOpacity="0.3" />
                  <stop offset="1" stopColor="rgb(var(--accent))" stopOpacity="0" />
                </linearGradient>
              </defs>
              {yTicks.map((v) => (
                <g key={v}>
                  <line x1={PAD.l} x2={W - PAD.r} y1={sy(v)} y2={sy(v)} stroke="rgb(var(--line))" strokeWidth="0.75" />
                  <text x={PAD.l - 6} y={sy(v) + 3} textAnchor="end" fontSize="9" fill="rgb(var(--muted))">
                    {compact(v)}
                  </text>
                </g>
              ))}
              {/* yearly bars */}
              {Array.from({ length: years + 1 }, (_, yr) => (
                <rect
                  key={yr}
                  x={sx(yr) - barW / 2}
                  y={sy(compound(yr))}
                  width={barW}
                  height={Math.max(0, sy(0) - sy(compound(yr)))}
                  rx="2"
                  fill={yr === hover ? "rgb(var(--accent) / 0.5)" : "rgb(var(--accent) / 0.14)"}
                />
              ))}
              <path d={area} fill="url(#ci-fill)" />
              <path d={line(simple)} fill="none" stroke="rgb(var(--muted))" strokeWidth="2.5" strokeDasharray="6 5" />
              <path d={line(compound)} fill="none" stroke="rgb(var(--accent))" strokeWidth="3" />
              <line x1={PAD.l} x2={W - PAD.r} y1={sy(P)} y2={sy(P)} stroke="rgb(var(--warn) / 0.6)" strokeDasharray="2 3" />
              {[0, Math.round(years / 2), years].map((yr) => (
                <text key={yr} x={sx(yr)} y={H - 10} textAnchor="middle" fontSize="10" fill="rgb(var(--muted))">
                  {t("widget.compound.yr", "{n} yr", { n: yr })}
                </text>
              ))}
              {hover !== null && (
                <g pointerEvents="none">
                  <line x1={sx(hover)} x2={sx(hover)} y1={PAD.t} y2={sy(0)} stroke="rgb(var(--ink) / 0.3)" />
                  <circle cx={sx(hover)} cy={sy(compound(hover))} r="5" fill="rgb(var(--accent))" />
                  <circle cx={sx(hover)} cy={sy(simple(hover))} r="4" fill="rgb(var(--muted))" />
                </g>
              )}
            </svg>
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-5 rounded bg-accent" /> {t("widget.compound.compound", "Compound")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0 w-5 border-t-2 border-dashed border-muted" /> {t("widget.compound.simple", "Simple")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0 w-5 border-t-2 border-dotted border-warn" /> {t("widget.compound.principal", "Principal")}
            </span>
          </div>
          <div className="mt-3 rounded-2xl bg-surface-2 p-3 text-sm" aria-live="polite">
            <span className="font-semibold text-ink">{t("widget.compound.year", "Year {n}:", { n: ht })}</span>{" "}
            <span className="font-mono text-accent">{money(compound(ht))}</span> {t("widget.compound.compoundVs", "compound vs")}{" "}
            <span className="font-mono text-muted">{money(simple(ht))}</span> {t("widget.compound.simpleLower", "simple")}
          </div>
        </div>

        <div className="space-y-4">
          <Slider label={t("widget.compound.principalP", "Principal P")} value={P} min={100} max={100000} step={100} onChange={setP} format={(v) => money(v).replace(/\.00$/, "")} />
          <Slider label={t("widget.compound.rate", "Annual rate r")} value={rate} min={0.5} max={20} step={0.5} onChange={setRate} unit="%" />
          <Slider label={t("widget.compound.time", "Time t")} value={years} min={1} max={50} onChange={setYears} unit={t("widget.compound.years", "years")} />
          <div>
            <label htmlFor={freqId} className="mb-1 block text-sm font-medium text-ink">
              {t("widget.compound.compounded", "Compounded")}
            </label>
            <select id={freqId} value={freq} onChange={(e) => setFreq(e.target.value as typeof freq)} className="input !py-2">
              {FREQS.map((f) => (
                <option key={f.value} value={f.value}>
                  {freqLabel[f.value]}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2" aria-live="polite">
            <Readout label={t("widget.compound.final", "Final amount A")} value={money(A)} />
            <Readout label={t("widget.compound.earned", "Interest earned")} value={money(A - P)} tone="good" />
            <Readout label={t("widget.compound.simpleTotal", "Simple interest total")} value={money(S)} tone="ink" />
            <Readout label={t("widget.compound.extra", "Extra from compounding")} value={money(A - S)} tone="warn" />
          </div>
          <div className="rounded-2xl bg-accent/10 p-3 font-mono text-xs leading-6 text-ink">
            {n === Infinity ? "A = P·e^(rt)" : `A = P(1 + r/n)^(nt), n = ${n}`}
            <div className="font-sans text-muted">
              {t("widget.compound.doubles", "Money doubles in about {years} years (rule of 72 says ≈ {rule}).", { years: fmt(doubling, 1), rule: fmt(72 / rate, 1) })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
