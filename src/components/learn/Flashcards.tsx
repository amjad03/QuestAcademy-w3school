"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw, Shuffle, Volume2 } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import type { Flashcard } from "@/content/types";
import { Md, plain } from "@/components/Md";
import { useLearner } from "@/lib/store";
import { sfx, speak } from "@/lib/sound";

export function FlipCard({ card, flipped, onFlip, kids, footer }: { card: Flashcard; flipped: boolean; onFlip: () => void; kids?: boolean; footer?: string }) {
  return (
    <button onClick={onFlip} className="group relative block h-72 w-full [perspective:1400px] sm:h-80" aria-label={flipped ? "Show front" : "Reveal answer"}>
      <motion.div className="relative h-full w-full [transform-style:preserve-3d]" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
        <div className="card absolute inset-0 flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden]">
          <span className="absolute left-5 top-4 text-[11px] font-semibold uppercase tracking-widest text-muted">Front</span>
          <div className={clsx("font-semibold", kids ? "font-kids text-5xl" : "font-display text-2xl leading-snug")}>
            <Md text={card.front} className="space-y-2" />
          </div>
          <span className="absolute bottom-4 text-xs text-muted">{footer ?? "Tap to flip"}</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 to-accent-2/15 p-8 text-center shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="absolute left-5 top-4 text-[11px] font-semibold uppercase tracking-widest text-accent">Back</span>
          <div className={clsx(kids ? "font-kids text-3xl font-semibold" : "text-lg leading-8")}>
            <Md text={card.back} className="space-y-2" />
          </div>
        </div>
      </motion.div>
    </button>
  );
}

export function Flashcards({ cards, kids }: { cards: Flashcard[]; kids?: boolean }) {
  const [order, setOrder] = useState(cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const bump = useLearner((s) => s.bump);
  const card = cards[order[pos]];

  const flip = () => {
    sfx("flip");
    if (!flipped && !seen.has(order[pos])) {
      setSeen((s) => new Set(s).add(order[pos]));
      bump("flashcards");
    }
    setFlipped((f) => !f);
  };
  const go = (d: number) => {
    setFlipped(false);
    setTimeout(() => setPos((p) => (p + d + cards.length) % cards.length), 120);
  };

  if (!cards.length) return null;

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center justify-between text-sm text-muted">
        <span>
          Card {pos + 1} / {cards.length} · {seen.size} flipped
        </span>
        <span className="flex gap-1">
          <button className="grid h-9 w-9 place-items-center rounded-xl hover:bg-surface-2" aria-label="Read aloud" onClick={() => speak(plain(flipped ? card.back : card.front))}>
            <Volume2 className="h-4 w-4" />
          </button>
          <button
            className="grid h-9 w-9 place-items-center rounded-xl hover:bg-surface-2"
            aria-label="Shuffle"
            onClick={() => {
              setOrder((o) => [...o].sort(() => Math.random() - 0.5));
              setPos(0);
              setFlipped(false);
            }}
          >
            <Shuffle className="h-4 w-4" />
          </button>
        </span>
      </div>
      <FlipCard card={card} flipped={flipped} onFlip={flip} kids={kids} />
      <div className="mt-5 flex items-center justify-center gap-3">
        <button className="btn-ghost h-12 w-12 !p-0" onClick={() => go(-1)} aria-label="Previous card">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="btn-primary h-12 px-6" onClick={flip}>
          <RotateCw className="h-4 w-4" /> Flip
        </button>
        <button className="btn-ghost h-12 w-12 !p-0" onClick={() => go(1)} aria-label="Next card">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-muted">Finish the lesson to add these cards to your spaced-repetition review deck.</p>
    </div>
  );
}
