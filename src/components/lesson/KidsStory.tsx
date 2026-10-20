"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import type { Block, Lesson } from "@/content/types";
import { speak, stopSpeaking, sfx } from "@/lib/sound";
import { Mascot } from "@/components/brand/Mascot";
import { BlockView } from "@/components/learn/Blocks";
import { blockSpeech } from "@/components/learn/useNarration";

/** Groups blocks into short story pages: interactive blocks get their own page. */
function paginate(blocks: Block[]): Block[][] {
  const pages: Block[][] = [];
  let cur: Block[] = [];
  for (const b of blocks) {
    if (b.type === "widget" || b.type === "checkpoint") {
      if (cur.length) pages.push(cur);
      pages.push([b]);
      cur = [];
      continue;
    }
    cur.push(b);
    if (b.type !== "heading" && cur.length >= 2) {
      pages.push(cur);
      cur = [];
    }
  }
  if (cur.length) pages.push(cur);
  return pages;
}

/** Early-learning lesson: one page at a time, read aloud by Questy, big friendly controls. */
export function KidsStory({ lesson, id, onComplete, done }: { lesson: Lesson; id: string; onComplete: () => void; done: boolean }) {
  const pages = useMemo(() => paginate(lesson.blocks), [lesson]);
  const [i, setI] = useState(0);
  const [voice, setVoice] = useState(true);
  const last = i === pages.length - 1;

  useEffect(() => {
    if (!voice) return stopSpeaking();
    const text = pages[i].map(blockSpeech).filter(Boolean).join(". ");
    if (text) speak(text, { rate: 0.92, pitch: 1.2 });
    return () => stopSpeaking();
  }, [i, voice, pages]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex flex-1 gap-1.5">
          {pages.map((_, k) => (
            <span key={k} className={clsx("h-3 flex-1 rounded-full transition", k <= i ? "bg-good" : "bg-line")} />
          ))}
        </div>
        <button onClick={() => setVoice((v) => !v)} className={clsx("grid h-11 w-11 place-items-center rounded-xl border-2 border-b-4", voice ? "border-accent-shade bg-accent text-white" : "border-line text-muted")} aria-label={voice ? "Stop reading aloud" : "Read aloud"}>
          {voice ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      </div>

      <div className="mt-6 flex items-end gap-3">
        <Mascot pose={last ? "cheer" : i % 3 === 1 ? "read" : "wave"} size={84} />
        <div className="relative mb-4 rounded-2xl border-2 border-line bg-surface px-4 py-2.5 text-lg font-extrabold">
          <span className="absolute -left-[9px] bottom-3 h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-surface" />
          {last ? "You did it! Tap “Finish” for your star." : ["Let’s find out!", "Look at this!", "You’re doing great!", "Ooh, try this!"][i % 4]}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.2 }} className="card mt-4 min-h-[280px] space-y-6 p-6 sm:p-8">
          {pages[i].map((b, k) => (
            <BlockView key={k} block={b} world="kids" id={`${id}-${i}-${k}`} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0} className="btn-ghost h-14 w-14 !p-0 disabled:opacity-40" aria-label="Previous page">
          <ArrowLeft className="h-6 w-6" />
        </button>
        {last ? (
          <button
            onClick={() => {
              if (!done) onComplete();
              sfx("fanfare");
            }}
            className="btn-good h-14 px-10 text-lg"
          >
            {done ? "Done!" : "Finish"}
          </button>
        ) : (
          <button onClick={() => { sfx("pop"); setI((x) => x + 1); }} className="btn-primary h-14 px-10 text-lg">
            Next <ArrowRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
