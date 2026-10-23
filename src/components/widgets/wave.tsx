"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { fmt, Readout, Slider, useFrame, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

const W = 480;
const H = 220;
const PAD = 20;
const WORLD = 6; // metres shown
const k = (W - PAD * 2) / WORLD;
const X = (x: number) => PAD + x * k;
const Y = (y: number) => H / 2 - y * 80;

export default function Wave() {
  const [A, setA] = useState(0.6);
  const [f, setF] = useState(0.5);
  const [lambda, setLambda] = useState(2);
  const t = useT();
  const [time, setT] = useState(0);
  const [running, setRunning] = useState(true);

  useFrame((dt) => setT((v) => v + dt), running);

  const v = f * lambda;
  const y = (x: number) => A * Math.sin(2 * Math.PI * (x / lambda - f * time));

  let d = "";
  for (let i = 0; i <= 240; i++) {
    const x = (i / 240) * WORLD;
    d += `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y(x)).toFixed(1)}`;
  }

  // A crest that travels: find first crest position x = λ(1/4 + f t) mod λ
  const crest0 = (((lambda * (0.25 + f * time)) % lambda) + lambda) % lambda;
  const particles = Array.from({ length: 13 }, (_, i) => (i / 12) * WORLD);
  const tracked = WORLD / 2;

  return (
    <div>
      <WidgetTitle
        title={t("widget.wave.title", "Wave machine")}
        hint={t("widget.wave.hint", "Change amplitude, frequency and wavelength. Wave speed v = f × λ.")}
        right={
          <button type="button" onClick={() => setRunning((r) => !r)} className="btn-ghost !px-3 !py-1.5" aria-label={running ? t("widget.pause", "Pause") : t("widget.play", "Play")}>
            {running ? <Pause size={16} /> : <Play size={16} />}
          </button>
        }
      />

      <div className="overflow-hidden rounded-3xl border border-line bg-surface">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={t("widget.wave.label", "Animated transverse wave")}>
          <line x1={PAD} x2={W - PAD} y1={H / 2} y2={H / 2} stroke="rgb(var(--line))" strokeWidth="1.5" strokeDasharray="4 4" />
          {Array.from({ length: WORLD + 1 }, (_, i) => (
            <text key={i} x={X(i)} y={H - 6} fontSize="10" textAnchor="middle" fill="rgb(var(--muted))">
              {i} m
            </text>
          ))}
          <path d={d} fill="none" stroke="rgb(var(--accent))" strokeWidth="3.5" strokeLinecap="round" />
          {particles.map((px, i) => (
            <circle key={i} cx={X(px)} cy={Y(y(px))} r="3" fill="rgb(var(--accent) / 0.5)" />
          ))}
          {/* tracked particle only moves up and down */}
          <line x1={X(tracked)} x2={X(tracked)} y1={Y(A)} y2={Y(-A)} stroke="rgb(var(--accent-2) / 0.4)" strokeWidth="2" />
          <circle cx={X(tracked)} cy={Y(y(tracked))} r="7" fill="rgb(var(--accent-2))" stroke="rgb(var(--surface))" strokeWidth="2" />
          {/* wavelength bracket between two crests */}
          {crest0 + lambda <= WORLD && (
            <g>
              <line x1={X(crest0)} x2={X(crest0 + lambda)} y1={Y(A) - 14} y2={Y(A) - 14} stroke="rgb(var(--good))" strokeWidth="2" />
              <line x1={X(crest0)} x2={X(crest0)} y1={Y(A) - 20} y2={Y(A) - 8} stroke="rgb(var(--good))" strokeWidth="2" />
              <line x1={X(crest0 + lambda)} x2={X(crest0 + lambda)} y1={Y(A) - 20} y2={Y(A) - 8} stroke="rgb(var(--good))" strokeWidth="2" />
              <text x={X(crest0 + lambda / 2)} y={Y(A) - 20} textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--good))">
                λ = {fmt(lambda)} m
              </text>
            </g>
          )}
          {/* amplitude marker */}
          <line x1={PAD + 6} x2={PAD + 6} y1={Y(0)} y2={Y(A)} stroke="rgb(var(--warn))" strokeWidth="2" />
          <text x={PAD + 10} y={Y(A / 2) + 4} fontSize="11" fontWeight="700" fill="rgb(var(--warn))">
            A
          </text>
        </svg>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <Slider label={t("widget.wave.amplitude", "Amplitude A")} value={A} min={0.1} max={1} step={0.05} onChange={setA} unit="m" />
          <Slider label={t("widget.wave.frequency", "Frequency f")} value={f} min={0.1} max={3} step={0.05} onChange={setF} unit="Hz" />
          <Slider label={t("widget.wave.wavelength", "Wavelength λ")} value={lambda} min={0.5} max={4} step={0.1} onChange={setLambda} unit="m" />
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2" aria-live="polite">
            <Readout label={t("widget.wave.speed", "Speed v = fλ")} value={fmt(v, 2)} unit="m/s" />
            <Readout label={t("widget.wave.period", "Period T = 1/f")} value={fmt(1 / f, 2)} unit="s" />
            <Readout label="k = 2π/λ" value={fmt((2 * Math.PI) / lambda, 2)} unit="rad/m" tone="ink" />
          </div>
          <p className="text-xs text-muted">
            {t("widget.wave.note.before", "The pink particle only bobs up and down — the")} <b className="text-ink">{t("widget.wave.note.energy", "energy")}</b>{" "}
            {t("widget.wave.note.after", "travels along the wave, not the material. Each particle completes one full bob every period T.")}
          </p>
        </div>
      </div>
    </div>
  );
}
