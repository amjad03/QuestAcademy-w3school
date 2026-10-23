"use client";

import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { clamp, fmt, Readout, Slider, svgPoint, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const W = 400;
const H = 300;
const PAD = { l: 40, r: 16, t: 16, b: 34 };
const QMAX = 100;
const PMAX = 100;
const X = (q: number) => PAD.l + (q / QMAX) * (W - PAD.l - PAD.r);
const Y = (p: number) => H - PAD.b - (p / PMAX) * (H - PAD.t - PAD.b);
const toQ = (px: number) => ((px - PAD.l) / (W - PAD.l - PAD.r)) * QMAX;

// Base curves: demand P = 90 − 0.8 Q,  supply P = 10 + 0.8 Q
const AD = 90;
const BD = 0.8;
const AS = 10;
const BS = 0.8;

const qd = (p: number, shift: number) => (AD - p) / BD + shift;
const qs = (p: number, shift: number) => (p - AS) / BS + shift;

export default function SupplyDemand() {
  const t = useT();
  const [dShift, setDShift] = useState(0);
  const [sShift, setSShift] = useState(0);
  const [priceOn, setPriceOn] = useState(false);
  const [price, setPrice] = useState(65);
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ which: "d" | "s"; startQ: number; startShift: number } | null>(null);

  // Equilibrium: (AD − P)/BD + d = (P − AS)/BS + s
  const pStar = (AD / BD + dShift + AS / BS - sShift) / (1 / BD + 1 / BS);
  const qStar = qd(pStar, dShift);

  const curve = (f: (p: number) => number) => {
    const pts: string[] = [];
    for (let p = 0; p <= PMAX; p += 2) {
      const q = f(p);
      if (q >= -5 && q <= QMAX + 5) pts.push(`${X(q).toFixed(1)},${Y(p).toFixed(1)}`);
    }
    return pts.length ? `M${pts.join("L")}` : "";
  };

  const onDown = (which: "d" | "s") => (e: React.PointerEvent<SVGPathElement>) => {
    e.preventDefault();
    svgRef.current?.setPointerCapture(e.pointerId);
    const { x } = svgPoint(svgRef.current, e.clientX, e.clientY);
    drag.current = { which, startQ: toQ(x), startShift: which === "d" ? dShift : sShift };
  };
  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const d = drag.current;
    if (!d) return;
    const { x } = svgPoint(svgRef.current, e.clientX, e.clientY);
    const next = clamp(Math.round(d.startShift + toQ(x) - d.startQ), -40, 40);
    if (d.which === "d") setDShift(next);
    else setSShift(next);
  };
  const onUp = () => {
    drag.current = null;
  };

  const QdP = Math.max(0, qd(price, dShift));
  const QsP = Math.max(0, qs(price, sShift));
  const gap = QdP - QsP;
  const market = !priceOn ? null : Math.abs(gap) < 0.5 ? "equilibrium" : gap > 0 ? "shortage" : "surplus";

  return (
    <div>
      <WidgetTitle
        title={t("widget.supply.title", "Supply & demand")}
        hint={t("widget.supply.hint", "Drag the curves left or right to shift them. Turn on a fixed price to see shortages and surpluses.")}
        right={
          <button
            type="button"
            className="btn-ghost !px-3 !py-1.5"
            onClick={() => {
              setDShift(0);
              setSShift(0);
            }}
          >
            <RotateCcw size={14} /> {t("widget.reset", "Reset")}
          </button>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full select-none" onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} style={{ touchAction: "none" }} role="img" aria-label={t("widget.supply.diagram", "Supply and demand diagram")}>
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={X(0)} x2={X(QMAX)} y1={Y(v)} y2={Y(v)} stroke="rgb(var(--line))" strokeWidth="0.75" />
                <text x={PAD.l - 6} y={Y(v) + 3} textAnchor="end" fontSize="9" fill="rgb(var(--muted))">
                  {v}
                </text>
                <text x={X(v)} y={H - PAD.b + 13} textAnchor="middle" fontSize="9" fill="rgb(var(--muted))">
                  {v}
                </text>
              </g>
            ))}
            <line x1={X(0)} x2={X(0)} y1={Y(0)} y2={Y(PMAX)} stroke="rgb(var(--ink))" strokeWidth="1.5" />
            <line x1={X(0)} x2={X(QMAX)} y1={Y(0)} y2={Y(0)} stroke="rgb(var(--ink))" strokeWidth="1.5" />
            <text x={X(QMAX)} y={H - 4} textAnchor="end" fontSize="10" fontWeight="700" fill="rgb(var(--muted))">
              {t("widget.supply.quantity", "Quantity")}
            </text>
            <text x={10} y={PAD.t + 4} fontSize="10" fontWeight="700" fill="rgb(var(--muted))" transform={`rotate(-90 10 ${PAD.t + 4})`} textAnchor="end">
              {t("widget.supply.price", "Price")}
            </text>

            {/* base curves (ghosts) */}
            {(dShift !== 0 || sShift !== 0) && (
              <>
                <path d={curve((p) => qd(p, 0))} fill="none" stroke="rgb(var(--accent) / 0.2)" strokeWidth="2" strokeDasharray="5 5" />
                <path d={curve((p) => qs(p, 0))} fill="none" stroke="rgb(var(--accent-2) / 0.2)" strokeWidth="2" strokeDasharray="5 5" />
              </>
            )}

            {/* shortage / surplus band */}
            {priceOn && (
              <g>
                <line x1={X(0)} x2={X(QMAX)} y1={Y(price)} y2={Y(price)} stroke="rgb(var(--warn))" strokeWidth="2" strokeDasharray="6 4" />
                <rect
                  x={X(Math.min(QdP, QsP))}
                  y={Y(price) - 6}
                  width={Math.abs(X(QdP) - X(QsP))}
                  height="12"
                  rx="4"
                  fill={gap > 0 ? "rgb(var(--bad) / 0.35)" : "rgb(var(--warn) / 0.35)"}
                />
              </g>
            )}

            {/* equilibrium guides */}
            {qStar >= 0 && qStar <= QMAX && pStar >= 0 && pStar <= PMAX && (
              <g>
                <line x1={X(0)} x2={X(qStar)} y1={Y(pStar)} y2={Y(pStar)} stroke="rgb(var(--good) / 0.6)" strokeDasharray="3 3" />
                <line x1={X(qStar)} x2={X(qStar)} y1={Y(0)} y2={Y(pStar)} stroke="rgb(var(--good) / 0.6)" strokeDasharray="3 3" />
              </g>
            )}

            {/* demand */}
            <path d={curve((p) => qd(p, dShift))} fill="none" stroke="rgb(var(--accent))" strokeWidth="3.5" strokeLinecap="round" />
            <path d={curve((p) => qd(p, dShift))} fill="none" stroke="transparent" strokeWidth="24" style={{ cursor: "ew-resize" }} onPointerDown={onDown("d")} />
            <text x={X(clamp(qd(8, dShift), 4, QMAX - 4))} y={Y(8) - 6} fontSize="13" fontWeight="800" fill="rgb(var(--accent))" textAnchor="middle" pointerEvents="none">
              D
            </text>
            {/* supply */}
            <path d={curve((p) => qs(p, sShift))} fill="none" stroke="rgb(var(--accent-2))" strokeWidth="3.5" strokeLinecap="round" />
            <path d={curve((p) => qs(p, sShift))} fill="none" stroke="transparent" strokeWidth="24" style={{ cursor: "ew-resize" }} onPointerDown={onDown("s")} />
            <text x={X(clamp(qs(92, sShift), 4, QMAX - 4))} y={Y(92) - 6} fontSize="13" fontWeight="800" fill="rgb(var(--accent-2))" textAnchor="middle" pointerEvents="none">
              S
            </text>

            {qStar >= 0 && qStar <= QMAX && pStar >= 0 && pStar <= PMAX && (
              <circle cx={X(qStar)} cy={Y(pStar)} r="6" fill="rgb(var(--good))" stroke="rgb(var(--surface))" strokeWidth="2" pointerEvents="none" />
            )}
          </svg>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2" aria-live="polite">
            <Readout label={t("widget.supply.eqPrice", "Equilibrium price P*")} value={fmt(pStar, 1)} tone="good" />
            <Readout label={t("widget.supply.eqQty", "Equilibrium qty Q*")} value={fmt(Math.max(0, qStar), 1)} tone="good" />
          </div>
          <Slider label={t("widget.supply.shiftDemand", "Shift demand")} value={dShift} min={-40} max={40} onChange={setDShift} format={(v) => (v > 0 ? `+${v}` : `${v}`)} />
          <Slider label={t("widget.supply.shiftSupply", "Shift supply")} value={sShift} min={-40} max={40} onChange={setSShift} format={(v) => (v > 0 ? `+${v}` : `${v}`)} />

          <div className="rounded-2xl border border-line bg-surface-2 p-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
              <input type="checkbox" checked={priceOn} onChange={(e) => setPriceOn(e.target.checked)} className="h-4 w-4 accent-[rgb(var(--accent))]" />
              {t("widget.supply.fixPrice", "Fix the price (price control)")}
            </label>
            {priceOn && (
              <div className="mt-3 space-y-3">
                <Slider label={t("widget.supply.price", "Price")} value={price} min={0} max={100} onChange={setPrice} />
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Readout label={t("widget.supply.qDemanded", "Quantity demanded")} value={fmt(QdP, 1)} tone="accent" />
                  <Readout label={t("widget.supply.qSupplied", "Quantity supplied")} value={fmt(QsP, 1)} tone="ink" />
                </div>
                <p
                  aria-live="polite"
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ${market === "shortage" ? "bg-bad/10 text-bad" : market === "surplus" ? "bg-warn/10 text-warn" : "bg-good/10 text-good"}`}
                >
                  {market === "shortage" && t("widget.supply.shortage", "Shortage of {n} units — price is below equilibrium, buyers want more than sellers offer.", { n: fmt(gap, 1) })}
                  {market === "surplus" && t("widget.supply.surplus", "Surplus of {n} units — price is above equilibrium, unsold goods pile up.", { n: fmt(-gap, 1) })}
                  {market === "equilibrium" && t("widget.supply.equilibrium", "At equilibrium: the market clears!")}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button type="button" className="chip hover:text-ink" onClick={() => setDShift(20)}>
              💰 {t("widget.supply.incomes", "Incomes rise (D →)")}
            </button>
            <button type="button" className="chip hover:text-ink" onClick={() => setSShift(-20)}>
              🌧️ {t("widget.supply.harvest", "Bad harvest (S ←)")}
            </button>
            <button type="button" className="chip hover:text-ink" onClick={() => setSShift(20)}>
              🤖 {t("widget.supply.tech", "New technology (S →)")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
