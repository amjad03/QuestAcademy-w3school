"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Shuffle, StepForward } from "lucide-react";
import { bag, readOneOf, Readout, Segmented, Slider, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type TFn = ReturnType<typeof useT>;

type Algo = "bubble" | "selection" | "insertion";
const ALGOS = ["bubble", "selection", "insertion"] as const;

interface Item {
  id: number;
  v: number;
}
interface Frame {
  arr: Item[];
  /** indices being compared */
  cmp: number[];
  /** indices just swapped / moved */
  moved: number[];
  /** indices known to be in final position */
  sorted: number[];
  comparisons: number;
  swaps: number;
  note: string;
}

function frames(start: Item[], algo: Algo, t: TFn): Frame[] {
  const a = start.slice();
  const out: Frame[] = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = new Set<number>();
  const push = (cmp: number[], moved: number[], note: string) =>
    out.push({ arr: a.slice(), cmp, moved, sorted: [...sorted], comparisons, swaps, note });
  const swap = (i: number, j: number) => {
    [a[i], a[j]] = [a[j], a[i]];
    swaps++;
  };
  const n = a.length;
  push([], [], t("widget.sorting.ready", "Ready! Press play or step."));

  if (algo === "bubble") {
    for (let end = n - 1; end > 0; end--) {
      let any = false;
      for (let i = 0; i < end; i++) {
        comparisons++;
        push([i, i + 1], [], t("widget.sorting.compare", "Compare {a} and {b}", { a: a[i].v, b: a[i + 1].v }));
        if (a[i].v > a[i + 1].v) {
          swap(i, i + 1);
          any = true;
          push([], [i, i + 1], t("widget.sorting.swap", "{a} > {b}, so swap", { a: a[i + 1].v, b: a[i].v }));
        }
      }
      sorted.add(end);
      if (!any) {
        for (let k = 0; k < end; k++) sorted.add(k);
        push([], [], t("widget.sorting.noSwaps", "No swaps this pass — the list is sorted!"));
        break;
      }
    }
  } else if (algo === "selection") {
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        comparisons++;
        push([min, j], [], t("widget.sorting.isSmaller", "Is {a} smaller than current min {min}?", { a: a[j].v, min: a[min].v }));
        if (a[j].v < a[min].v) min = j;
      }
      if (min !== i) {
        swap(i, min);
        push([], [i, min], t("widget.sorting.moveSmallest", "Move smallest ({v}) to position {pos}", { v: a[i].v, pos: i + 1 }));
      }
      sorted.add(i);
    }
  } else {
    sorted.add(0);
    for (let i = 1; i < n; i++) {
      let j = i;
      while (j > 0) {
        comparisons++;
        push([j - 1, j], [], t("widget.sorting.compare", "Compare {a} and {b}", { a: a[j - 1].v, b: a[j].v }));
        if (a[j - 1].v <= a[j].v) break;
        swap(j - 1, j);
        push([], [j - 1, j], t("widget.sorting.shift", "Shift {v} left", { v: a[j - 1].v }));
        j--;
      }
      // in insertion sort, the prefix is sorted relative to itself
      sorted.add(i);
    }
  }
  for (let k = 0; k < n; k++) sorted.add(k);
  push([], [], t("widget.sorting.done", "Done! {comparisons} comparisons, {swaps} swaps.", { comparisons, swaps }));
  return out;
}

function randomItems(n: number): Item[] {
  return Array.from({ length: n }, (_, i) => ({ id: i, v: 5 + Math.floor(Math.random() * 95) }));
}

export default function Sorting(input: Record<string, unknown>) {
  const t = useT();
  const p = bag(input);
  const [algo, setAlgo] = useState<Algo>(readOneOf(p, "algorithm", ALGOS, "bubble"));
  const [size, setSize] = useState(10);
  const [items, setItems] = useState<Item[]>(() => Array.from({ length: 10 }, (_, i) => ({ id: i, v: 10 + ((i * 37) % 90) })));
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(4);

  useEffect(() => {
    setItems(randomItems(10));
  }, []);

  const all = useMemo(() => frames(items, algo, t), [items, algo, t]);
  const frame = all[Math.min(step, all.length - 1)];
  const done = step >= all.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (done) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => s + 1), 1000 / speed);
    return () => clearTimeout(id);
  }, [playing, step, done, speed]);

  const reshuffle = (n = size) => {
    setItems(randomItems(n));
    setStep(0);
    setPlaying(false);
  };

  const maxV = 100;

  return (
    <div>
      <WidgetTitle
        title={t("widget.sorting.title", "Sorting visualiser")}
        hint={t("widget.sorting.hint", "Watch how each algorithm compares and swaps bars.")}
        right={
          <Segmented
            label={t("widget.sorting.algorithm", "Algorithm")}
            value={algo}
            onChange={(a) => {
              setAlgo(a);
              setStep(0);
              setPlaying(false);
            }}
            options={[
              { value: "bubble", label: t("widget.sorting.bubble", "Bubble") },
              { value: "selection", label: t("widget.sorting.selection", "Selection") },
              { value: "insertion", label: t("widget.sorting.insertion", "Insertion") },
            ]}
          />
        }
      />

      <div className="flex h-56 items-end gap-1 rounded-3xl bg-surface-2 p-3 sm:gap-1.5">
        {frame.arr.map((it, i) => {
          const isCmp = frame.cmp.includes(i);
          const isMoved = frame.moved.includes(i);
          const isSorted = frame.sorted.includes(i);
          const bg = isMoved ? "rgb(var(--accent-2))" : isCmp ? "rgb(var(--warn))" : isSorted ? "rgb(var(--good))" : "rgb(var(--accent))";
          return (
            <motion.div
              key={it.id}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className="relative flex flex-1 flex-col items-center justify-end"
              style={{ height: "100%" }}
            >
              <span className="mb-1 font-mono text-[10px] font-bold text-muted">{it.v}</span>
              <motion.div
                className="w-full rounded-t-lg transition-colors duration-200"
                style={{ background: bg }}
                animate={{ height: `${(it.v / maxV) * 82}%`, y: isCmp ? -4 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3 min-h-[1.5rem] text-center text-sm font-medium text-ink" aria-live="polite">
        {frame.note}
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <button type="button" className="btn-primary" onClick={() => (done ? (setStep(0), setPlaying(true)) : setPlaying((x) => !x))}>
          {playing ? <Pause size={16} /> : <Play size={16} />} {playing ? t("widget.pause", "Pause") : done ? t("widget.replay", "Replay") : t("widget.play", "Play")}
        </button>
        <button type="button" className="btn-ghost" onClick={() => setStep((s) => Math.min(all.length - 1, s + 1))} disabled={done || playing}>
          <StepForward size={16} /> {t("widget.sorting.step", "Step")}
        </button>
        <button type="button" className="btn-ghost" onClick={() => reshuffle()}>
          <Shuffle size={16} /> {t("widget.sorting.shuffle", "Shuffle")}
        </button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
        <Slider label={t("widget.sorting.speed", "Speed")} value={speed} min={1} max={20} onChange={setSpeed} unit={t("widget.sorting.stepsPerSec", "steps/s")} />
        <Slider
          label={t("widget.sorting.bars", "Bars")}
          value={size}
          min={5}
          max={20}
          onChange={(n) => {
            setSize(n);
            reshuffle(n);
          }}
        />
        <div className="grid grid-cols-2 gap-2" aria-live="polite">
          <Readout label={t("widget.sorting.comparisons", "Comparisons")} value={frame.comparisons} />
          <Readout label={t("widget.sorting.swaps", "Swaps")} value={frame.swaps} tone="ink" />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs text-muted">
        {[
          ["--warn", t("widget.sorting.comparing", "comparing")],
          ["--accent-2", t("widget.sorting.swapped", "swapped")],
          ["--good", t("widget.sorting.sorted", "sorted")],
        ].map(([c, l]) => (
          <span key={l} className="flex items-center gap-1">
            <span className="h-3 w-3 rounded" style={{ background: `rgb(var(${c}))` }} /> {l}
          </span>
        ))}
      </div>
    </div>
  );
}
