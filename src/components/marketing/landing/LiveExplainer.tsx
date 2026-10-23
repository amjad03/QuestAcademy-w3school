"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Explainer } from "@/explainers/types";
import { ExplainerView } from "@/explainers/ExplainerView";

/** The real, interactive explainers from the app, loaded only when this section renders. */
const PICKS: { id: string; label: string; emoji: string; load: () => Promise<Explainer> }[] = [
  { id: "fractions", label: "Fractions", emoji: "🍕", load: () => import("@/explainers/early/fractions").then((m) => m.fractions) },
  { id: "balance", label: "Equations", emoji: "⚖️", load: () => import("@/explainers/stem/balance-equations").then((m) => m.balanceEquations) },
  { id: "circuits", label: "Circuits", emoji: "💡", load: () => import("@/explainers/stem/electric-circuits").then((m) => m.electricCircuits) },
  { id: "plants", label: "Photosynthesis", emoji: "🌱", load: () => import("@/explainers/science/plants").then((m) => m.plants) },
  { id: "loops", label: "Loops", emoji: "🔁", load: () => import("@/explainers/coding/loops").then((m) => m.loopsExplainer) },
];

export function LiveExplainer() {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, Explainer>>({});
  const pick = PICKS[i];
  useEffect(() => {
    if (loaded[pick.id]) return;
    let live = true;
    pick.load().then((e) => {
      if (live) setLoaded((m) => ({ ...m, [pick.id]: e }));
    });
    return () => {
      live = false;
    };
  }, [pick, loaded]);
  const e = loaded[pick.id];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Explainers">
        {PICKS.map((p, k) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={clsx("flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition", k === i ? "bg-white text-[#0F1A3D] shadow-lift" : "bg-white/10 text-white/80 hover:bg-white/20")}
          >
            <span aria-hidden>{p.emoji}</span> {p.label}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-[860px] rounded-[30px] bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur">
        <div className="min-h-[520px] overflow-hidden rounded-[24px] bg-surface text-ink">
          {e ? <ExplainerView key={e.id} explainer={e} /> : <div className="h-[520px] animate-pulse bg-surface-2" aria-busy aria-label="Loading explainer" />}
        </div>
      </div>
    </div>
  );
}
