"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, RotateCcw, Zap } from "lucide-react";
import { fmt, Readout, Segmented, Slider, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type Gate = "AND" | "OR" | "XOR";
type Pt = { x: number; y: number; t: 0 | 1 };
type Status = { ok: boolean; text: string };

const TRUTH: Record<Gate, (a: number, b: number) => 0 | 1> = {
  AND: (a, b) => (a && b ? 1 : 0),
  OR: (a, b) => (a || b ? 1 : 0),
  XOR: (a, b) => (a !== b ? 1 : 0),
};

/** Small deterministic clusters around each corner of the unit square. */
const JITTER = [
  [0, 0],
  [0.08, 0.05],
  [-0.06, 0.07],
  [0.05, -0.08],
  [-0.07, -0.04],
];
function dataset(g: Gate): Pt[] {
  const pts: Pt[] = [];
  for (const a of [0, 1]) for (const b of [0, 1]) for (const [dx, dy] of JITTER) pts.push({ x: a + dx, y: b + dy, t: TRUTH[g](a, b) });
  return pts;
}

const D0 = -0.4;
const D1 = 1.4;
const S = 300;
const sx = (x: number) => ((x - D0) / (D1 - D0)) * S;
const sy = (y: number) => S - ((y - D0) / (D1 - D0)) * S;

const predict = (w1: number, w2: number, b: number, x: number, y: number): 0 | 1 => (w1 * x + w2 * y + b >= 0 ? 1 : 0);

export default function Perceptron() {
  const t = useT();
  const [gate, setGate] = useState<Gate>("AND");
  const [w1, setW1] = useState(0.5);
  const [w2, setW2] = useState(-0.5);
  const [b, setB] = useState(0.2);
  const [lr, setLr] = useState(0.2);
  const [training, setTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [cursor, setCursor] = useState(-1);
  const [status, setStatus] = useState<Status | null>(null);
  const state = useRef({ w1, w2, b, i: 0, errors: 0, epoch: 0 });

  const pts = useMemo(() => dataset(gate), [gate]);
  const correct = pts.filter((p) => predict(w1, w2, b, p.x, p.y) === p.t).length;
  const accuracy = correct / pts.length;

  useEffect(() => {
    if (!training) return;
    const id = setInterval(() => {
      const s = state.current;
      const p = pts[s.i];
      const yhat = predict(s.w1, s.w2, s.b, p.x, p.y);
      const err = p.t - yhat;
      if (err !== 0) {
        s.w1 += lr * err * p.x;
        s.w2 += lr * err * p.y;
        s.b += lr * err;
        s.errors++;
      }
      setW1(s.w1);
      setW2(s.w2);
      setB(s.b);
      setCursor(s.i);
      s.i++;
      if (s.i >= pts.length) {
        s.epoch++;
        setEpoch(s.epoch);
        const converged = s.errors === 0;
        s.i = 0;
        s.errors = 0;
        if (converged) {
          setTraining(false);
          setCursor(-1);
          setStatus({
            ok: true,
            text:
              s.epoch === 1
                ? t("widget.perceptron.converged.one", "Converged after {n} epoch! Every point is classified correctly.", { n: s.epoch })
                : t("widget.perceptron.converged.other", "Converged after {n} epochs! Every point is classified correctly.", { n: s.epoch }),
          });
        } else if (s.epoch >= 30) {
          setTraining(false);
          setCursor(-1);
          setStatus({
            ok: false,
            text:
              gate === "XOR"
                ? t("widget.perceptron.xorStuck", "Stuck! XOR is not linearly separable — no single straight line can split it. You need a hidden layer (a multi-layer network).")
                : t("widget.perceptron.stopped", "Stopped after {n} epochs. Try a different learning rate.", { n: 30 }),
          });
        }
      }
    }, 70);
    return () => clearInterval(id);
  }, [training, pts, lr, gate, t]);

  const startTraining = () => {
    state.current = { w1, w2, b, i: 0, errors: 0, epoch: 0 };
    setEpoch(0);
    setStatus(null);
    setTraining(true);
  };

  const reset = () => {
    setTraining(false);
    setW1(0.5);
    setW2(-0.5);
    setB(0.2);
    setEpoch(0);
    setCursor(-1);
    setStatus(null);
  };

  // Decision regions as a coarse grid
  const G = 24;
  const cells = [];
  for (let i = 0; i < G; i++)
    for (let j = 0; j < G; j++) {
      const x = D0 + ((i + 0.5) / G) * (D1 - D0);
      const y = D0 + ((j + 0.5) / G) * (D1 - D0);
      cells.push(
        <rect
          key={`${i}-${j}`}
          x={(i / G) * S}
          y={S - ((j + 1) / G) * S}
          width={S / G + 0.5}
          height={S / G + 0.5}
          fill={predict(w1, w2, b, x, y) ? "rgb(var(--good) / 0.16)" : "rgb(var(--bad) / 0.1)"}
        />,
      );
    }

  // Decision boundary w1 x + w2 y + b = 0, clipped to the view
  let line: [number, number, number, number] | null = null;
  if (Math.abs(w2) > 1e-6) {
    const yAt = (x: number) => -(w1 * x + b) / w2;
    line = [sx(D0), sy(yAt(D0)), sx(D1), sy(yAt(D1))];
  } else if (Math.abs(w1) > 1e-6) {
    const x = -b / w1;
    line = [sx(x), sy(D0), sx(x), sy(D1)];
  }

  const manual = (fn: (v: number) => void) => (v: number) => {
    setTraining(false);
    setStatus(null);
    fn(v);
  };

  return (
    <div>
      <WidgetTitle
        title={t("widget.perceptron.title", "Perceptron playground")}
        hint={t("widget.perceptron.hint", "A single neuron draws one straight line. Can it separate the green (1) and red (0) points?")}
        right={
          <Segmented
            label={t("widget.perceptron.dataset", "Dataset")}
            value={gate}
            onChange={(g) => {
              setGate(g);
              setTraining(false);
              setStatus(null);
              setEpoch(0);
            }}
            options={[
              { value: "AND", label: "AND" },
              { value: "OR", label: "OR" },
              { value: "XOR", label: "XOR" },
            ]}
          />
        }
      />

      <div className="grid gap-5 md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-line bg-surface">
          <svg viewBox={`0 0 ${S} ${S}`} className="w-full" role="img" aria-label={t("widget.perceptron.boundary", "Decision boundary for {gate}", { gate })}>
            <defs>
              <clipPath id="perc-clip">
                <rect width={S} height={S} />
              </clipPath>
            </defs>
            {cells}
            <line x1={sx(0)} x2={sx(0)} y1="0" y2={S} stroke="rgb(var(--line))" />
            <line x1="0" x2={S} y1={sy(0)} y2={sy(0)} stroke="rgb(var(--line))" />
            <text x={sx(1)} y={sy(0) + 14} fontSize="10" textAnchor="middle" fill="rgb(var(--muted))">
              x₁ = 1
            </text>
            <text x={sx(0) - 4} y={sy(1) + 3} fontSize="10" textAnchor="end" fill="rgb(var(--muted))">
              x₂ = 1
            </text>
            {line && <line x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke="rgb(var(--accent))" strokeWidth="3" clipPath="url(#perc-clip)" />}
            {pts.map((p, i) => {
              const ok = predict(w1, w2, b, p.x, p.y) === p.t;
              return (
                <g key={i}>
                  {cursor === i && <circle cx={sx(p.x)} cy={sy(p.y)} r="11" fill="none" stroke="rgb(var(--accent))" strokeWidth="2.5" />}
                  <circle cx={sx(p.x)} cy={sy(p.y)} r="6" fill={p.t ? "rgb(var(--good))" : "rgb(var(--bad))"} stroke={ok ? "rgb(var(--surface))" : "rgb(var(--ink))"} strokeWidth={ok ? 1.5 : 2.5} />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-accent/10 px-3 py-2 text-center font-mono text-sm text-ink">
            output = step({fmt(w1)}·x₁ + {fmt(w2)}·x₂ + {fmt(b)})
          </div>
          <Slider label={t("widget.perceptron.w1", "Weight w₁")} value={w1} min={-3} max={3} step={0.05} onChange={manual(setW1)} format={(v) => fmt(v)} />
          <Slider label={t("widget.perceptron.w2", "Weight w₂")} value={w2} min={-3} max={3} step={0.05} onChange={manual(setW2)} format={(v) => fmt(v)} />
          <Slider label={t("widget.perceptron.bias", "Bias b")} value={b} min={-3} max={3} step={0.05} onChange={manual(setB)} format={(v) => fmt(v)} />
          <Slider label={t("widget.perceptron.lr", "Learning rate η")} value={lr} min={0.05} max={1} step={0.05} onChange={setLr} />
          <div className="flex gap-2">
            <button type="button" className="btn-pop flex-1" onClick={training ? () => setTraining(false) : startTraining}>
              {training ? <Pause size={16} /> : <Zap size={16} />} {training ? t("widget.pause", "Pause") : t("widget.perceptron.train", "Train")}
            </button>
            <button type="button" className="btn-ghost" onClick={reset} aria-label={t("widget.perceptron.resetWeights", "Reset weights")}>
              <RotateCcw size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2" aria-live="polite">
            <Readout label={t("widget.perceptron.accuracy", "Accuracy")} value={`${Math.round(accuracy * 100)}%`} tone={accuracy === 1 ? "good" : "accent"} />
            <Readout label={t("widget.perceptron.epoch", "Epoch")} value={epoch} tone="ink" />
          </div>
          <AnimatePresence>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-2xl p-3 text-sm ${status.ok ? "bg-good/10 text-good" : "bg-warn/10 text-warn"}`}
                aria-live="polite"
              >
                {status.text}
              </motion.p>
            )}
          </AnimatePresence>
          <p className="text-xs text-muted">
            {t("widget.perceptron.rule", "Learning rule: if a point is wrong, nudge w ← w + η (target − output) · x. Points with a dark outline are misclassified.")}
          </p>
        </div>
      </div>
    </div>
  );
}
