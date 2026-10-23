"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw, Shuffle, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Flashcard } from "@/content/types";
import { Md, plain } from "@/components/Md";
import { useLearner } from "@/lib/store";
import { sfx, speak } from "@/lib/sound";
import { ProgressBar } from "@/components/ui/Progress";
import { useT } from "@/i18n";

export function FlipCard({ card, flipped, onFlip, kids, footer }: { card: Flashcard; flipped: boolean; onFlip: () => void; kids?: boolean; footer?: string }) {
  const t = useT();
  return (
    <button onClick={onFlip} className="group relative block h-72 w-full [perspective:1400px] sm:h-80" aria-label={flipped ? t("learn.flashcard.showFront", "Show front") : t("learn.flashcard.reveal", "Reveal answer")}>
      <motion.div className="relative h-full w-full [transform-style:preserve-3d]" animate={{ rotateY: flipped ? 180 : 0 }} transition={{ type: "spring", stiffness: 240, damping: 24 }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-b-[6px] border-line bg-surface p-8 text-center [backface-visibility:hidden]">
          <span className="eyebrow absolute left-6 top-5">{t("learn.flashcard.question", "Question")}</span>
          <div className={clsx("font-extrabold", kids ? "text-5xl" : "text-2xl leading-snug")}>
            <Md text={card.front} className="space-y-2" />
          </div>
          <span className="absolute bottom-5 text-sm font-bold text-muted">{footer ?? t("learn.flashcard.tapToFlip", "Tap to flip")}</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-b-[6px] border-accent-shade bg-accent p-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="absolute left-6 top-5 text-xs font-extrabold uppercase tracking-[0.12em] text-white/70">{t("learn.flashcard.answer", "Answer")}</span>
          <div className={clsx("font-bold [&_code]:bg-white/20 [&_code]:text-white", kids ? "text-3xl" : "text-xl leading-8")}>
            <Md text={card.back} className="space-y-2" />
          </div>
        </div>
      </motion.div>
    </button>
  );
}

export function Flashcards({ cards, kids, onAllSeen }: { cards: Flashcard[]; kids?: boolean; onAllSeen?: () => void }) {
  const t = useT();
  const [order, setOrder] = useState(cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const bump = useLearner((s) => s.bump);
  const card = cards[order[pos]];

  useEffect(() => {
    if (seen.size === cards.length && cards.length) onAllSeen?.();
  }, [seen.size, cards.length]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={seen.size / cards.length} height={12} color="rgb(var(--good))" />
        <span className="shrink-0 text-sm font-bold text-muted">
          {seen.size}/{cards.length}
        </span>
        <button className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label={t("learn.flashcard.readAloud", "Read aloud")} onClick={() => speak(plain(flipped ? card.back : card.front))}>
          <Volume2 className="h-5 w-5" />
        </button>
        <button
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-muted hover:bg-surface-2"
          aria-label={t("learn.flashcard.shuffle", "Shuffle")}
          onClick={() => {
            setOrder((o) => [...o].sort(() => Math.random() - 0.5));
            setPos(0);
            setFlipped(false);
          }}
        >
          <Shuffle className="h-5 w-5" />
        </button>
      </div>
      <FlipCard card={card} flipped={flipped} onFlip={flip} kids={kids} footer={t("learn.flashcard.footer", "Card {n} of {total} · tap to flip", { n: pos + 1, total: cards.length })} />
      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="btn-ghost h-12 w-12 !p-0" onClick={() => go(-1)} aria-label={t("learn.flashcard.previous", "Previous card")}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="btn-primary h-12 px-8" onClick={flip}>
          <RotateCw className="h-4 w-4" /> {t("learn.flashcard.flip", "Flip")}
        </button>
        <button className="btn-ghost h-12 w-12 !p-0" onClick={() => go(1)} aria-label={t("learn.flashcard.next", "Next card")}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-5 text-center text-sm font-semibold text-muted">{t("learn.flashcard.deckNote", "Completed lessons add their cards to your Practice review deck.")}</p>
    </div>
  );
}
