"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { fmt, Readout, Segmented, Slider, useFrame, WidgetTitle } from "./_shared";

const PLANETS = [
  { value: "earth", label: "🌍 Earth", g: 9.81 },
  { value: "moon", label: "🌙 Moon", g: 1.62 },
  { value: "mars", label: "🔴 Mars", g: 3.71 },
  { value: "jupiter", label: "🪐 Jupiter", g: 24.79 },
] as const;
type Planet = (typeof PLANETS)[number]["value"];

const W = 320;
const H = 260;
const PIVOT = { x: W / 2, y: 20 };
const MAX_L = 3;
const PX_PER_M = (H - 50) / MAX_L;

export default function Pendulum() {
  const [L, setL] = useState(1);
  const [planet, setPlanet] = useState<Planet>("earth");
  const [amp, setAmp] = useState(15);
  const [running, setRunning] = useState(true);
  const [phase, setPhase] = useState(0); // seconds of simulated time

  const g = PLANETS.find((p) => p.value === planet)!.g;
  const T = 2 * Math.PI * Math.sqrt(L / g);

  useFrame((dt) => setPhase((p) => p + dt), running);

  const theta = ((amp * Math.PI) / 180) * Math.cos((2 * Math.PI * phase) / T);
  const swings = Math.floor(phase / T);

  const len = L * PX_PER_M;
  const bob = { x: PIVOT.x + len * Math.sin(theta), y: PIVOT.y + len * Math.cos(theta) };
  const ampRad = (amp * Math.PI) / 180;
  const arcL = { x: PIVOT.x - len * Math.sin(ampRad), y: PIVOT.y + len * Math.cos(ampRad) };
  const arcR = { x: PIVOT.x + len * Math.sin(ampRad), y: PIVOT.y + len * Math.cos(ampRad) };

  const reset = () => {
    setPhase(0);
  };

  return (
    <div>
      <WidgetTitle
        title="Pendulum lab"
        hint="Period depends only on length and gravity — not on the mass or (small) swing angle."
        right={
          <Segmented
            label="Planet gravity"
            value={planet}
            onChange={(v) => {
              setPlanet(v);
              reset();
            }}
            options={PLANETS.map((p) => ({ value: p.value, label: p.label }))}
          />
        }
      />

      <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-surface-2">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Pendulum of length ${fmt(L)} metres`}>
            <rect x={PIVOT.x - 50} y={PIVOT.y - 10} width="100" height="10" rx="3" fill="rgb(var(--muted))" />
            <path d={`M ${arcL.x} ${arcL.y} A ${len} ${len} 0 0 0 ${arcR.x} ${arcR.y}`} fill="none" stroke="rgb(var(--accent) / 0.3)" strokeWidth="2" strokeDasharray="4 5" />
            <line x1={PIVOT.x} y1={PIVOT.y} x2={PIVOT.x} y2={PIVOT.y + len + 20} stroke="rgb(var(--line))" strokeDasharray="3 4" />
            <line x1={PIVOT.x} y1={PIVOT.y} x2={bob.x} y2={bob.y} stroke="rgb(var(--ink))" strokeWidth="2" />
            <circle cx={PIVOT.x} cy={PIVOT.y} r="4" fill="rgb(var(--ink))" />
            <circle cx={bob.x} cy={bob.y} r="14" fill="rgb(var(--accent))" stroke="rgb(var(--surface))" strokeWidth="3" />
            <circle cx={bob.x - 4} cy={bob.y - 4} r="4" fill="rgb(var(--surface) / 0.5)" />
          </svg>
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="btn-ghost absolute bottom-3 right-3 !px-3 !py-1.5"
            aria-label={running ? "Pause" : "Play"}
          >
            {running ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>

        <div className="space-y-4">
          <Slider label="Length L" value={L} min={0.1} max={MAX_L} step={0.05} onChange={(v) => { setL(v); reset(); }} unit="m" />
          <Slider label="Release angle" value={amp} min={2} max={25} onChange={setAmp} unit="°" />
          <div className="grid grid-cols-2 gap-2" aria-live="polite">
            <Readout label="Period T" value={fmt(T, 3)} unit="s" />
            <Readout label="Frequency" value={fmt(1 / T, 3)} unit="Hz" />
            <Readout label="Gravity g" value={fmt(g, 2)} unit="m/s²" tone="ink" />
            <Readout label="Full swings" value={swings} tone="ink" />
          </div>
          <div className="rounded-2xl bg-accent/10 p-3 text-center font-mono text-sm text-ink">
            T = 2π √(L / g) = 2π √({fmt(L)} / {fmt(g)}) = <b className="text-accent">{fmt(T, 3)} s</b>
          </div>
        </div>
      </div>
    </div>
  );
}
