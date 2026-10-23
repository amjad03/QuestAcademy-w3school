"use client";

import { useState } from "react";
import { fmt, Readout, Segmented, Slider, useFrame, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type Solve = "V" | "I" | "R";

// Circuit loop geometry (clockwise from top-left).
const L = 40;
const T = 30;
const Rt = 320;
const B = 170;
const SEGS = [Rt - L, B - T, Rt - L, B - T];
const PERIM = SEGS.reduce((a, b) => a + b, 0);
const N_ELECTRONS = 22;

function along(s: number) {
  let d = ((s % PERIM) + PERIM) % PERIM;
  if (d < SEGS[0]) return { x: L + d, y: T };
  d -= SEGS[0];
  if (d < SEGS[1]) return { x: Rt, y: T + d };
  d -= SEGS[1];
  if (d < SEGS[2]) return { x: Rt - d, y: B };
  d -= SEGS[2];
  return { x: L, y: B - d };
}

export default function OhmsLaw() {
  const t = useT();
  const [solve, setSolve] = useState<Solve>("I");
  const [V, setV] = useState(9);
  const [I, setI] = useState(0.5);
  const [R, setR] = useState(18);
  const [offset, setOffset] = useState(0);

  const volts = solve === "V" ? I * R : V;
  const amps = solve === "I" ? V / R : I;
  const ohms = solve === "R" ? V / Math.max(I, 0.01) : R;
  const power = volts * amps;

  // Electrons drift opposite to conventional current: anticlockwise here.
  const speed = Math.min(320, amps * 60);
  useFrame((dt) => setOffset((o) => (o - dt * speed + PERIM) % PERIM), speed > 0);

  const glow = Math.min(1, power / 30);
  const zig = Array.from({ length: 7 }, (_, i) => `${150 + i * 10},${T + (i % 2 ? -10 : 10)}`).join(" ");

  return (
    <div>
      <WidgetTitle
        title={t("widget.ohms.title", "Ohm's law circuit")}
        hint={t("widget.ohms.hint", "V = I × R. Pick what to calculate, then move the other two sliders.")}
        right={
          <Segmented
            label={t("widget.ohms.solveFor", "Solve for")}
            value={solve}
            onChange={setSolve}
            options={[
              { value: "V", label: t("widget.ohms.voltageV", "Voltage V") },
              { value: "I", label: t("widget.ohms.currentI", "Current I") },
              { value: "R", label: t("widget.ohms.resistanceR", "Resistance R") },
            ]}
          />
        }
      />

      <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-3xl bg-surface-2 p-2">
          <svg viewBox="0 0 360 200" className="w-full" role="img" aria-label={t("widget.ohms.circuit", "Simple circuit with battery, resistor and bulb")}>
            {/* wires */}
            <rect x={L} y={T} width={Rt - L} height={B - T} fill="none" stroke="rgb(var(--muted))" strokeWidth="4" rx="6" />
            {/* resistor */}
            <rect x="140" y={T - 14} width="80" height="28" fill="rgb(var(--surface-2))" />
            <polyline points={`140,${T} ${zig} 220,${T}`} fill="none" stroke="rgb(var(--warn))" strokeWidth="4" strokeLinejoin="round" />
            <text x="180" y={T + 30} textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--ink))">
              R = {fmt(ohms, 1)} Ω
            </text>
            {/* battery on left side */}
            <rect x={L - 16} y="78" width="32" height="44" fill="rgb(var(--surface-2))" />
            <line x1={L - 16} y1="88" x2={L + 16} y2="88" stroke="rgb(var(--ink))" strokeWidth="4" />
            <line x1={L - 8} y1="100" x2={L + 8} y2="100" stroke="rgb(var(--ink))" strokeWidth="6" />
            <line x1={L - 16} y1="112" x2={L + 16} y2="112" stroke="rgb(var(--ink))" strokeWidth="4" />
            <text x={L + 22} y="90" fontSize="14" fontWeight="800" fill="rgb(var(--bad))">+</text>
            <text x={L + 22} y="118" fontSize="16" fontWeight="800" fill="rgb(var(--accent))">−</text>
            <text x={L + 30} y="104" fontSize="12" fontWeight="700" fill="rgb(var(--ink))">
              {fmt(volts, 1)} V
            </text>
            {/* bulb on right side */}
            <circle cx={Rt} cy="100" r={22 + glow * 16} fill="rgb(var(--warn))" opacity={glow * 0.35} />
            <circle cx={Rt} cy="100" r="16" fill="rgb(var(--surface))" stroke="rgb(var(--ink))" strokeWidth="2.5" />
            <circle cx={Rt} cy="100" r="13" fill="rgb(var(--warn))" opacity={0.15 + glow * 0.85} />
            <path d={`M ${Rt - 6} 106 l 3 -10 l 3 6 l 3 -6 l 3 10`} fill="none" stroke="rgb(var(--ink))" strokeWidth="1.5" />
            {/* electrons */}
            {Array.from({ length: N_ELECTRONS }, (_, i) => {
              const p = along(offset + (i * PERIM) / N_ELECTRONS);
              return <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="rgb(var(--accent))" />;
            })}
            <text x="180" y={B + 22} textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--ink))">
              I = {fmt(amps, 3)} A
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          {solve !== "V" && <Slider label={t("widget.ohms.voltageV", "Voltage V")} value={V} min={0} max={24} step={0.5} onChange={setV} unit="V" />}
          {solve !== "I" && <Slider label={t("widget.ohms.currentI", "Current I")} value={I} min={0.01} max={5} step={0.01} onChange={setI} unit="A" />}
          {solve !== "R" && <Slider label={t("widget.ohms.resistanceR", "Resistance R")} value={R} min={1} max={100} step={1} onChange={setR} unit="Ω" />}
          <div className="grid grid-cols-2 gap-2" aria-live="polite">
            <Readout label={t("widget.ohms.voltage", "Voltage")} value={fmt(volts, 2)} unit="V" tone={solve === "V" ? "accent" : "ink"} />
            <Readout label={t("widget.ohms.current", "Current")} value={fmt(amps, 3)} unit="A" tone={solve === "I" ? "accent" : "ink"} />
            <Readout label={t("widget.ohms.resistance", "Resistance")} value={fmt(ohms, 2)} unit="Ω" tone={solve === "R" ? "accent" : "ink"} />
            <Readout label={t("widget.ohms.power", "Power P = VI")} value={fmt(power, 2)} unit="W" tone="warn" />
          </div>
          <p className="text-xs text-muted">
            {t("widget.ohms.note", "Blue dots are electrons: they flow from − to + (opposite to conventional current), and move faster when the current is bigger.")}
          </p>
        </div>
      </div>
    </div>
  );
}
