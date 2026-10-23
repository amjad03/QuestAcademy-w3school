"use client";

import { useId, useMemo, useRef, useState } from "react";
import { bag, fmt, readOneOf, Readout, Segmented, Slider, svgPoint, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type Kind = "linear" | "quadratic" | "sine" | "exponential";
const KINDS = ["linear", "quadratic", "sine", "exponential"] as const;

const W = 400;
const H = 300;
const XMIN = -10;
const XMAX = 10;
const YMIN = -7.5;
const YMAX = 7.5;
const sx = (x: number) => ((x - XMIN) / (XMAX - XMIN)) * W;
const sy = (y: number) => H - ((y - YMIN) / (YMAX - YMIN)) * H;
const ix = (px: number) => XMIN + (px / W) * (XMAX - XMIN);

const signed = (n: number, digits = 2) => (n < 0 ? `− ${fmt(-n, digits)}` : `+ ${fmt(n, digits)}`);

export default function FunctionPlot(input: Record<string, unknown>) {
  const t = useT();
  const p = bag(input);
  const [kind, setKind] = useState<Kind>(readOneOf(p, "kind", KINDS, "linear"));
  const [m, setM] = useState(1);
  const [c, setC] = useState(1);
  const [qa, setQa] = useState(1);
  const [qb, setQb] = useState(0);
  const [qc, setQc] = useState(-4);
  const [A, setA] = useState(3);
  const [B, setB] = useState(1);
  const [C, setC2] = useState(0);
  const [ea, setEa] = useState(1);
  const [eb, setEb] = useState(1.5);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const clip = `fp-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const f = useMemo<(x: number) => number>(() => {
    switch (kind) {
      case "linear":
        return (x) => m * x + c;
      case "quadratic":
        return (x) => qa * x * x + qb * x + qc;
      case "sine":
        return (x) => A * Math.sin(B * x + C);
      case "exponential":
        return (x) => ea * Math.pow(eb, x);
    }
  }, [kind, m, c, qa, qb, qc, A, B, C, ea, eb]);

  const path = useMemo(() => {
    const N = 400;
    let d = "";
    let pen = false;
    for (let i = 0; i <= N; i++) {
      const x = XMIN + (i / N) * (XMAX - XMIN);
      const y = f(x);
      if (!Number.isFinite(y) || Math.abs(y) > 1e4) {
        pen = false;
        continue;
      }
      d += `${pen ? "L" : "M"}${sx(x).toFixed(2)},${sy(y).toFixed(2)}`;
      pen = true;
    }
    return d;
  }, [f]);

  // Features & equation text per kind
  let equation = "";
  const points: { x: number; y: number; label: string }[] = [];
  const facts: { label: string; value: string }[] = [];

  const yInt = t("widget.plot.yInt", "y-int");
  const rootLabel = t("widget.plot.root", "root");
  const vertexLabel = t("widget.plot.vertex", "vertex");

  if (kind === "linear") {
    equation = `y = ${fmt(m)}x ${signed(c)}`;
    points.push({ x: 0, y: c, label: yInt });
    if (m !== 0) points.push({ x: -c / m, y: 0, label: rootLabel });
    facts.push(
      { label: t("widget.plot.slope", "Slope m"), value: fmt(m) },
      { label: t("widget.plot.yIntercept", "y-intercept"), value: fmt(c) },
      { label: t("widget.plot.xIntercept", "x-intercept"), value: m === 0 ? (c === 0 ? t("widget.plot.allX", "all x") : t("widget.plot.none", "none")) : fmt(-c / m) },
    );
  } else if (kind === "quadratic") {
    equation = `y = ${fmt(qa)}x² ${signed(qb)}x ${signed(qc)}`;
    if (qa !== 0) {
      const vx = -qb / (2 * qa);
      const vy = f(vx);
      const disc = qb * qb - 4 * qa * qc;
      points.push({ x: vx, y: vy, label: vertexLabel });
      let roots = t("widget.plot.noRoots", "none (Δ < 0)");
      if (disc > 1e-9) {
        const r1 = (-qb - Math.sqrt(disc)) / (2 * qa);
        const r2 = (-qb + Math.sqrt(disc)) / (2 * qa);
        points.push({ x: r1, y: 0, label: rootLabel }, { x: r2, y: 0, label: rootLabel });
        roots = `${fmt(Math.min(r1, r2))}, ${fmt(Math.max(r1, r2))}`;
      } else if (Math.abs(disc) <= 1e-9) {
        roots = t("widget.plot.doubleRoot", "{x} (double)", { x: fmt(vx) });
      }
      facts.push({ label: t("widget.plot.vertexTitle", "Vertex"), value: `(${fmt(vx)}, ${fmt(vy)})` }, { label: "Δ = b² − 4ac", value: fmt(disc) }, { label: t("widget.plot.roots", "Roots"), value: roots });
    } else {
      facts.push({ label: t("widget.plot.note", "Note"), value: t("widget.plot.isLine", "a = 0 → it's a line!") });
    }
  } else if (kind === "sine") {
    equation = `y = ${fmt(A)}·sin(${fmt(B)}x ${signed(C)})`;
    facts.push(
      { label: t("widget.plot.amplitude", "Amplitude |A|"), value: fmt(Math.abs(A)) },
      { label: t("widget.plot.period", "Period 2π/B"), value: B === 0 ? "∞" : fmt((2 * Math.PI) / Math.abs(B)) },
      { label: t("widget.plot.phase", "Phase shift −C/B"), value: B === 0 ? "—" : fmt(-C / B) },
    );
  } else {
    equation = `y = ${fmt(ea)}·${fmt(eb)}ˣ`;
    points.push({ x: 0, y: ea, label: yInt });
    facts.push(
      { label: t("widget.plot.yIntercept", "y-intercept"), value: fmt(ea) },
      { label: t("widget.plot.behaviour", "Behaviour"), value: eb > 1 ? t("widget.plot.growth", "growth") : eb < 1 ? t("widget.plot.decay", "decay") : t("widget.plot.constant", "constant") },
      { label: t("widget.plot.asymptote", "Asymptote"), value: "y = 0" },
    );
  }

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const { x } = svgPoint(svgRef.current, e.clientX, e.clientY);
    setHoverX(Math.max(XMIN, Math.min(XMAX, ix(x))));
  };
  const hy = hoverX === null ? null : f(hoverX);

  return (
    <div>
      <WidgetTitle
        title={t("widget.plot.title", "Function plotter")}
        hint={t("widget.plot.hint", "Move the sliders and watch the graph change. Hover or drag on the graph to trace it.")}
        right={
          <Segmented
            label={t("widget.plot.type", "Function type")}
            value={kind}
            onChange={setKind}
            options={[
              { value: "linear", label: t("widget.plot.linear", "Linear") },
              { value: "quadratic", label: t("widget.plot.quadratic", "Quadratic") },
              { value: "sine", label: t("widget.plot.sine", "Sine") },
              { value: "exponential", label: t("widget.plot.exp", "Exp") },
            ]}
          />
        }
      />

      <div className="mb-3 rounded-2xl bg-accent/10 px-4 py-2 text-center font-mono text-lg font-bold text-accent" aria-live="polite">
        {equation}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full"
            onPointerMove={onMove}
            onPointerDown={onMove}
            onPointerLeave={() => setHoverX(null)}
            style={{ touchAction: "none" }}
            role="img"
            aria-label={t("widget.plot.graphOf", "Graph of {equation}", { equation })}
          >
            <defs>
              <clipPath id={clip}>
                <rect width={W} height={H} />
              </clipPath>
            </defs>
            {Array.from({ length: XMAX - XMIN + 1 }, (_, i) => (
              <line key={`gx${i}`} x1={sx(XMIN + i)} x2={sx(XMIN + i)} y1="0" y2={H} stroke="rgb(var(--line))" strokeWidth={(XMIN + i) % 5 === 0 ? 1 : 0.5} />
            ))}
            {Array.from({ length: Math.floor(YMAX - YMIN) + 1 }, (_, i) => {
              const y = Math.ceil(YMIN) + i;
              return <line key={`gy${i}`} y1={sy(y)} y2={sy(y)} x1="0" x2={W} stroke="rgb(var(--line))" strokeWidth={y % 5 === 0 ? 1 : 0.5} />;
            })}
            <line x1="0" x2={W} y1={sy(0)} y2={sy(0)} stroke="rgb(var(--muted))" strokeWidth="1.5" />
            <line y1="0" y2={H} x1={sx(0)} x2={sx(0)} stroke="rgb(var(--muted))" strokeWidth="1.5" />
            {[-10, -5, 5, 10].map((v) => (
              <text key={`lx${v}`} x={sx(v)} y={sy(0) + 13} fontSize="10" textAnchor="middle" fill="rgb(var(--muted))">
                {v}
              </text>
            ))}
            {[-5, 5].map((v) => (
              <text key={`ly${v}`} x={sx(0) - 5} y={sy(v) + 3} fontSize="10" textAnchor="end" fill="rgb(var(--muted))">
                {v}
              </text>
            ))}

            <g clipPath={`url(#${clip})`}>
              <path d={path} fill="none" stroke="rgb(var(--accent))" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
              {points.map((pt, i) =>
                Number.isFinite(pt.y) && Math.abs(pt.x) <= XMAX && pt.y >= YMIN && pt.y <= YMAX ? (
                  <g key={i}>
                    <circle cx={sx(pt.x)} cy={sy(pt.y)} r="5" fill={pt.label === vertexLabel ? "rgb(var(--accent-2))" : "rgb(var(--good))"} stroke="rgb(var(--surface))" strokeWidth="2" />
                    <text x={sx(pt.x) + 7} y={sy(pt.y) - 7} fontSize="10" fontWeight="700" fill="rgb(var(--ink))">
                      {pt.label}
                    </text>
                  </g>
                ) : null,
              )}
              {hoverX !== null && hy !== null && Number.isFinite(hy) && (
                <g pointerEvents="none">
                  <line x1={sx(hoverX)} x2={sx(hoverX)} y1="0" y2={H} stroke="rgb(var(--accent) / 0.4)" strokeDasharray="4 4" />
                  <circle cx={sx(hoverX)} cy={sy(hy)} r="5" fill="rgb(var(--accent))" />
                  <rect x={Math.min(W - 112, sx(hoverX) + 8)} y="8" width="104" height="22" rx="8" fill="rgb(var(--ink))" />
                  <text x={Math.min(W - 112, sx(hoverX) + 8) + 52} y="23" fontSize="11" textAnchor="middle" fill="rgb(var(--bg))" fontFamily="monospace">
                    ({fmt(hoverX, 1)}, {fmt(hy, 2)})
                  </text>
                </g>
              )}
            </g>
          </svg>
        </div>

        <div className="space-y-4">
          {kind === "linear" && (
            <>
              <Slider label={t("widget.plot.mSlope", "m (slope)")} value={m} min={-5} max={5} step={0.1} onChange={setM} />
              <Slider label={t("widget.plot.cIntercept", "c (intercept)")} value={c} min={-7} max={7} step={0.5} onChange={setC} />
            </>
          )}
          {kind === "quadratic" && (
            <>
              <Slider label="a" value={qa} min={-3} max={3} step={0.1} onChange={setQa} />
              <Slider label="b" value={qb} min={-6} max={6} step={0.5} onChange={setQb} />
              <Slider label="c" value={qc} min={-7} max={7} step={0.5} onChange={setQc} />
            </>
          )}
          {kind === "sine" && (
            <>
              <Slider label={t("widget.plot.aAmplitude", "A (amplitude)")} value={A} min={-6} max={6} step={0.5} onChange={setA} />
              <Slider label={t("widget.plot.bFrequency", "B (frequency)")} value={B} min={0.1} max={4} step={0.1} onChange={setB} />
              <Slider label={t("widget.plot.cPhase", "C (phase)")} value={C} min={-Math.PI} max={Math.PI} step={0.05} onChange={setC2} />
            </>
          )}
          {kind === "exponential" && (
            <>
              <Slider label={t("widget.plot.aStart", "a (start value)")} value={ea} min={-3} max={3} step={0.1} onChange={setEa} />
              <Slider label={t("widget.plot.bBase", "b (base)")} value={eb} min={0.1} max={3} step={0.05} onChange={setEb} />
            </>
          )}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1" aria-live="polite">
            {facts.map((fct) => (
              <Readout key={fct.label} label={fct.label} value={fct.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
