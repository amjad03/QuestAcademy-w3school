"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { clamp, fmt, useSvgDrag, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type Pt = { x: number; y: number };
const W = 400;
const H = 280;
const COLORS = ["rgb(var(--accent))", "rgb(var(--accent-2))", "rgb(var(--good))"];
const NAMES = ["A", "B", "C"];
const START: Pt[] = [
  { x: 80, y: 230 },
  { x: 320, y: 230 },
  { x: 170, y: 60 },
];

const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

function angleAt(p: Pt, q: Pt, r: Pt) {
  const u = { x: q.x - p.x, y: q.y - p.y };
  const v = { x: r.x - p.x, y: r.y - p.y };
  const cos = (u.x * v.x + u.y * v.y) / (Math.hypot(u.x, u.y) * Math.hypot(v.x, v.y) || 1);
  return (Math.acos(clamp(cos, -1, 1)) * 180) / Math.PI;
}

function wedge(p: Pt, q: Pt, r: Pt, rad: number) {
  const a1 = Math.atan2(q.y - p.y, q.x - p.x);
  const a2 = Math.atan2(r.y - p.y, r.x - p.x);
  const u1 = { x: Math.cos(a1), y: Math.sin(a1) };
  const u2 = { x: Math.cos(a2), y: Math.sin(a2) };
  const sweep = u1.x * u2.y - u1.y * u2.x > 0 ? 1 : 0;
  return `M ${p.x} ${p.y} L ${p.x + u1.x * rad} ${p.y + u1.y * rad} A ${rad} ${rad} 0 0 ${sweep} ${p.x + u2.x * rad} ${p.y + u2.y * rad} Z`;
}

function rightMark(p: Pt, q: Pt, r: Pt, s = 14) {
  const a = { x: (q.x - p.x) / dist(p, q), y: (q.y - p.y) / dist(p, q) };
  const b = { x: (r.x - p.x) / dist(p, r), y: (r.y - p.y) / dist(p, r) };
  return `M ${p.x + a.x * s} ${p.y + a.y * s} L ${p.x + (a.x + b.x) * s} ${p.y + (a.y + b.y) * s} L ${p.x + b.x * s} ${p.y + b.y * s}`;
}

function Handle({ i, p, svg, onMove }: { i: number; p: Pt; svg: React.RefObject<SVGSVGElement | null>; onMove: (i: number, p: Pt) => void }) {
  const t = useT();
  const drag = useSvgDrag(svg, (pt) => onMove(i, { x: clamp(pt.x, 12, W - 12), y: clamp(pt.y, 12, H - 12) }));
  return (
    <g {...drag} role="slider" aria-label={t("widget.triangle.vertex", "Vertex {name}", { name: NAMES[i] })} aria-valuetext={`${Math.round(p.x)}, ${Math.round(p.y)}`}>
      <circle cx={p.x} cy={p.y} r="22" fill="transparent" />
      <motion.circle cx={p.x} cy={p.y} r="10" fill={COLORS[i]} stroke="rgb(var(--surface))" strokeWidth="3" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.4 }} style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
    </g>
  );
}

export default function Triangle() {
  const t = useT();
  const [pts, setPts] = useState<Pt[]>(START);
  const svgRef = useRef<SVGSVGElement>(null);
  const move = (i: number, p: Pt) => setPts((prev) => prev.map((q, j) => (j === i ? p : q)));

  const [A, B, C] = pts;
  const angles = [angleAt(A, B, C), angleAt(B, C, A), angleAt(C, A, B)];
  const sides = [dist(B, C), dist(C, A), dist(A, B)]; // a, b, c opposite A, B, C
  const area = Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y)) / 2;
  const degenerate = area < 200;

  const near = (x: number, y: number, tol: number) => Math.abs(x - y) <= tol * Math.max(x, y);
  const eqCount = [near(sides[0], sides[1], 0.03), near(sides[1], sides[2], 0.03), near(sides[0], sides[2], 0.03)].filter(Boolean).length;
  const bySides = eqCount >= 2 ? t("widget.triangle.equilateral", "Equilateral") : eqCount === 1 ? t("widget.triangle.isosceles", "Isosceles") : t("widget.triangle.scalene", "Scalene");
  const maxAngle = Math.max(...angles);
  const byAngles = Math.abs(maxAngle - 90) < 1.5 ? t("widget.triangle.right", "Right-angled") : maxAngle > 90 ? t("widget.triangle.obtuse", "Obtuse-angled") : t("widget.triangle.acute", "Acute-angled");

  // Rounded display that still adds to exactly 180.
  const shown = angles.map((a) => Math.round(a));
  shown[shown.indexOf(Math.max(...shown))] += 180 - shown.reduce((s, a) => s + a, 0);

  // semicircle "torn corners" visual
  let acc = 0;
  const semi = angles.map((a, i) => {
    const s = acc;
    acc += a;
    const a0 = Math.PI - (s * Math.PI) / 180;
    const a1 = Math.PI - (acc * Math.PI) / 180;
    const R = 60;
    const cx = 70;
    const cy = 68;
    return (
      <path
        key={i}
        d={`M ${cx} ${cy} L ${cx + R * Math.cos(a0)} ${cy - R * Math.sin(a0)} A ${R} ${R} 0 0 1 ${cx + R * Math.cos(a1)} ${cy - R * Math.sin(a1)} Z`}
        fill={COLORS[i]}
        fillOpacity="0.8"
        stroke="rgb(var(--surface))"
        strokeWidth="2"
      />
    );
  });

  return (
    <div>
      <WidgetTitle
        title={t("widget.triangle.title", "Triangle explorer")}
        hint={t("widget.triangle.hint", "Drag the coloured corners. The angles always add up to 180°.")}
        right={
          <button type="button" className="btn-ghost !px-3 !py-1.5" onClick={() => setPts(START)}>
            <RotateCcw size={14} /> {t("widget.reset", "Reset")}
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-[1.5fr_1fr]">
        <div className="overflow-hidden rounded-3xl bg-surface-2">
          <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full select-none" style={{ touchAction: "none" }}>
            {pts.map((p, i) => {
              const q = pts[(i + 1) % 3];
              const r = pts[(i + 2) % 3];
              const isRight = Math.abs(angles[i] - 90) < 1.5;
              return isRight ? (
                <path key={`w${i}`} d={rightMark(p, q, r)} fill="none" stroke={COLORS[i]} strokeWidth="2.5" />
              ) : (
                <path key={`w${i}`} d={wedge(p, q, r, 28)} fill={COLORS[i]} fillOpacity="0.3" stroke={COLORS[i]} strokeWidth="1.5" />
              );
            })}
            <polygon points={pts.map((p) => `${p.x},${p.y}`).join(" ")} fill="rgb(var(--accent) / 0.06)" stroke="rgb(var(--ink))" strokeWidth="2.5" strokeLinejoin="round" />
            {pts.map((p, i) => {
              const cx = (A.x + B.x + C.x) / 3;
              const cy = (A.y + B.y + C.y) / 3;
              const dx = p.x - cx;
              const dy = p.y - cy;
              const len = Math.hypot(dx, dy) || 1;
              return (
                <text key={`l${i}`} x={p.x + (dx / len) * 24} y={p.y + (dy / len) * 24 + 4} textAnchor="middle" fontSize="13" fontWeight="800" fill={COLORS[i]}>
                  {NAMES[i]} {shown[i]}°
                </text>
              );
            })}
            {pts.map((p, i) => (
              <Handle key={`h${i}`} i={i} p={p} svg={svgRef} onMove={move} />
            ))}
          </svg>
        </div>

        <div className="space-y-4" aria-live="polite">
          <div className="rounded-2xl border border-line bg-surface-2 p-3">
            <div className="flex items-center justify-center gap-1 font-mono text-lg font-bold">
              {shown.map((a, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span style={{ color: COLORS[i] }}>{a}°</span>
                  {i < 2 && <span className="text-muted">+</span>}
                </span>
              ))}
              <span className="text-muted">=</span>
              <span className="text-ink">180°</span>
            </div>
            <svg viewBox="0 0 140 76" className="mx-auto mt-2 w-40" aria-hidden>
              {semi}
              <line x1="4" y1="68" x2="136" y2="68" stroke="rgb(var(--ink))" strokeWidth="2" />
            </svg>
            <p className="text-center text-xs text-muted">{t("widget.triangle.tear", "Tear off the corners and they make a straight line!")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {degenerate ? (
              <span className="chip !text-warn">{t("widget.triangle.flat", "Too flat to be a triangle!")}</span>
            ) : (
              <>
                <motion.span key={bySides} initial={{ scale: 0.7 }} animate={{ scale: 1 }} className="chip !bg-accent/10 !text-accent text-sm">
                  {bySides}
                </motion.span>
                <motion.span key={byAngles} initial={{ scale: 0.7 }} animate={{ scale: 1 }} className="chip !bg-accent/10 !text-accent text-sm">
                  {byAngles}
                </motion.span>
              </>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-xs text-muted">
            {["a", "b", "c"].map((s, i) => (
              <div key={s} className="rounded-xl bg-surface-2 px-2 py-1.5 text-center">
                {s} = <span className="text-ink">{fmt(sides[i] / 20, 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
