"use client";

import { useRef, useState } from "react";
import { Rocket, RotateCcw } from "lucide-react";
import { fmt, Readout, Segmented, Slider, useFrame, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const PLANETS = [
  { value: "earth", label: "🌍 Earth", g: 9.81 },
  { value: "moon", label: "🌙 Moon", g: 1.62 },
  { value: "mars", label: "🔴 Mars", g: 3.71 },
  { value: "jupiter", label: "🪐 Jupiter", g: 24.79 },
] as const;

type Shot = { angle: number; speed: number; g: number };

const W = 480;
const H = 240;
const PAD = 28;

function stats({ angle, speed, g }: Shot) {
  const th = (angle * Math.PI) / 180;
  const vx = speed * Math.cos(th);
  const vy = speed * Math.sin(th);
  const T = (2 * vy) / g;
  return { vx, vy, T, R: vx * T, Hmax: (vy * vy) / (2 * g) };
}

function niceCeil(x: number) {
  const p = Math.pow(10, Math.floor(Math.log10(x)));
  for (const m of [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (m * p >= x) return m * p;
  return 10 * p;
}

export default function Projectile() {
  const t = useT();
  const planetLabel: Record<(typeof PLANETS)[number]["value"], string> = {
    earth: "🌍 " + t("widget.pendulum.earth", "Earth"),
    moon: "🌙 " + t("widget.pendulum.moon", "Moon"),
    mars: "🔴 " + t("widget.pendulum.mars", "Mars"),
    jupiter: "🪐 " + t("widget.pendulum.jupiter", "Jupiter"),
  };
  const [angle, setAngle] = useState(45);
  const [speed, setSpeed] = useState(20);
  const [g, setG] = useState(9.81);
  const [trails, setTrails] = useState<Shot[]>([]);
  const [time, setTState] = useState<number | null>(null);
  const tRef = useRef<number | null>(null);
  const setT = (v: number | null) => {
    tRef.current = v;
    setTState(v);
  };

  const cur: Shot = { angle, speed, g };
  const s = stats(cur);
  const flying = time !== null && time < s.T;

  // Playback lasts between ~1.2 s and 4 s of real time.
  const playRate = s.T / Math.min(4, Math.max(1.2, s.T));
  useFrame((dt) => {
    const prev = tRef.current;
    if (prev === null) return;
    const next = Math.min(s.T, prev + dt * playRate);
    setT(next);
    if (next >= s.T) setTrails((tr) => [...tr.slice(-3), cur]);
  }, flying);

  // World → screen scale: fit every visible trajectory, keeping aspect ratio.
  const all = [...trails, cur].map(stats);
  const aspect = (W - PAD * 2) / (H - PAD * 2);
  const worldW = niceCeil(Math.max(10, ...all.map((a) => Math.max(a.R, a.Hmax * 1.15 * aspect))));
  const k = (W - PAD * 2) / worldW;
  const X = (x: number) => PAD + x * k;
  const Y = (y: number) => H - PAD - y * k;

  const pathFor = (shot: Shot) => {
    const st = stats(shot);
    let d = "";
    for (let i = 0; i <= 60; i++) {
      const tt = (i / 60) * st.T;
      d += `${i ? "L" : "M"}${X(st.vx * tt).toFixed(1)},${Y(st.vy * tt - 0.5 * shot.g * tt * tt).toFixed(1)}`;
    }
    return d;
  };

  const tt = time ?? 0;
  const bx = s.vx * tt;
  const by = Math.max(0, s.vy * tt - 0.5 * g * tt * tt);
  const vyNow = s.vy - g * tt;
  const planet = PLANETS.find((p) => Math.abs(p.g - g) < 0.005)?.value ?? "earth";

  const ticks = Array.from({ length: 5 }, (_, i) => (worldW / 4) * i);

  const launch = () => setT(0);
  const change = (fn: (v: number) => void) => (v: number) => {
    fn(v);
    setT(null);
  };

  return (
    <div>
      <WidgetTitle
        title={t("widget.projectile.title", "Projectile launcher")}
        hint={t("widget.projectile.hint", "Set the angle, speed and gravity, then launch! Faded paths show your last shots.")}
        right={
          <Segmented
            label={t("widget.projectile.planet", "Planet")}
            value={planet}
            onChange={(v) => {
              setG(PLANETS.find((p) => p.value === v)!.g);
              setT(null);
            }}
            options={PLANETS.map((p) => ({ value: p.value, label: planetLabel[p.value] }))}
          />
        }
      />

      <div className="overflow-hidden rounded-3xl border border-line bg-surface">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t("widget.projectile.trajectory", "Projectile trajectory")}>
          <rect x="0" y={H - PAD} width={W} height={PAD} fill="rgb(var(--good) / 0.15)" />
          <line x1="0" x2={W} y1={H - PAD} y2={H - PAD} stroke="rgb(var(--good))" strokeWidth="2" />
          {ticks.map((v) => (
            <g key={v}>
              <line x1={X(v)} x2={X(v)} y1={H - PAD} y2={H - PAD + 5} stroke="rgb(var(--muted))" />
              <text x={X(v)} y={H - 8} fontSize="10" textAnchor="middle" fill="rgb(var(--muted))">
                {fmt(v, 1)} m
              </text>
            </g>
          ))}
          {trails.map((tr, i) => (
            <path key={i} d={pathFor(tr)} fill="none" stroke="rgb(var(--muted))" strokeOpacity={0.25 + i * 0.12} strokeWidth="2" strokeDasharray="3 5" />
          ))}
          {/* predicted path */}
          <path d={pathFor(cur)} fill="none" stroke="rgb(var(--accent) / 0.35)" strokeWidth="2" strokeDasharray="6 6" />
          {/* max height marker */}
          <line x1={X(s.R / 2)} x2={X(s.R / 2)} y1={Y(0)} y2={Y(s.Hmax)} stroke="rgb(var(--accent-2) / 0.5)" strokeDasharray="2 3" />
          <text x={X(s.R / 2) + 4} y={Y(s.Hmax) - 6} fontSize="10" fill="rgb(var(--accent-2))">
            H = {fmt(s.Hmax, 1)} m
          </text>
          {/* cannon */}
          <g transform={`translate(${X(0)} ${Y(0)}) rotate(${-angle})`}>
            <rect x="-4" y="-6" width="30" height="12" rx="5" fill="rgb(var(--ink))" />
          </g>
          <circle cx={X(0)} cy={Y(0)} r="9" fill="rgb(var(--accent))" />
          {/* ball */}
          {time !== null && <circle cx={X(bx)} cy={Y(by)} r="7" fill="rgb(var(--accent-2))" stroke="rgb(var(--surface))" strokeWidth="2" />}
          {time !== null && !flying && (
            <text x={X(s.R)} y={Y(0) - 12} textAnchor="middle" fontSize="16">
              💥
            </text>
          )}
        </svg>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <Slider label={t("widget.projectile.angle", "Launch angle θ")} value={angle} min={5} max={85} onChange={change(setAngle)} unit="°" />
          <Slider label={t("widget.projectile.speed", "Launch speed v₀")} value={speed} min={5} max={40} step={0.5} onChange={change(setSpeed)} unit="m/s" />
          <Slider label={t("widget.pendulum.gravityG", "Gravity g")} value={g} min={1} max={25} step={0.01} onChange={change(setG)} unit="m/s²" />
          <div className="flex gap-2">
            <button type="button" className="btn-pop flex-1" onClick={launch} disabled={flying}>
              <Rocket size={16} /> {t("widget.projectile.launch", "Launch")}
            </button>
            <button type="button" className="btn-ghost" onClick={() => { setTrails([]); setT(null); }} aria-label={t("widget.projectile.clear", "Clear trails")}>
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2" aria-live="polite">
            <Readout label={t("widget.projectile.range", "Range R")} value={fmt(s.R, 1)} unit="m" />
            <Readout label={t("widget.projectile.maxHeight", "Max height")} value={fmt(s.Hmax, 1)} unit="m" />
            <Readout label={t("widget.projectile.flightTime", "Flight time")} value={fmt(s.T, 2)} unit="s" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <Readout label="t" value={fmt(tt, 2)} unit="s" tone="ink" />
            <Readout label="vₓ" value={fmt(s.vx, 1)} unit="m/s" tone="ink" />
            <Readout label="v_y" value={fmt(flying ? vyNow : time === null ? s.vy : -s.vy, 1)} unit="m/s" tone="ink" />
          </div>
          <div className="rounded-2xl bg-surface-2 p-3 font-mono text-xs leading-6 text-muted">
            R = v₀² sin 2θ / g · H = v₀² sin²θ / 2g · T = 2v₀ sin θ / g
            <div className="font-sans text-[11px]">{t("widget.projectile.note", "No air resistance. 45° gives the longest range on flat ground.")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
