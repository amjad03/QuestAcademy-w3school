"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { bag, readStrArray, WidgetTitle } from "./_shared";

const WORDS: Record<string, [word: string, emoji: string]> = {
  A: ["Apple", "🍎"],
  B: ["Ball", "⚽"],
  C: ["Cat", "🐱"],
  D: ["Dog", "🐶"],
  E: ["Elephant", "🐘"],
  F: ["Fish", "🐟"],
  G: ["Grapes", "🍇"],
  H: ["Hat", "🎩"],
  I: ["Ice cream", "🍦"],
  J: ["Jellyfish", "🪼"],
  K: ["Kite", "🪁"],
  L: ["Lion", "🦁"],
  M: ["Moon", "🌙"],
  N: ["Nest", "🪺"],
  O: ["Octopus", "🐙"],
  P: ["Penguin", "🐧"],
  Q: ["Queen", "👑"],
  R: ["Rainbow", "🌈"],
  S: ["Sun", "☀️"],
  T: ["Tiger", "🐯"],
  U: ["Umbrella", "☂️"],
  V: ["Violin", "🎻"],
  W: ["Whale", "🐳"],
  X: ["Xylophone", "🎼"],
  Y: ["Yo-yo", "🪀"],
  Z: ["Zebra", "🦓"],
};

const ALL = Object.keys(WORDS);

export default function Phonics(input: Record<string, unknown>) {
  const p = bag(input);
  const letters = (readStrArray(p, "letters") ?? ALL).map((l) => l.trim().charAt(0).toUpperCase()).filter((l) => l in WORDS);
  const list = letters.length ? letters : ALL;

  const [active, setActive] = useState<string>(list[0]);
  const [canSpeak, setCanSpeak] = useState(false);

  useEffect(() => {
    setCanSpeak(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  const speak = (letter: string) => {
    setActive(letter);
    if (!canSpeak) return;
    const [word] = WORDS[letter];
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(`${letter}. ${letter} is for ${word}.`);
      u.rate = 0.85;
      u.pitch = 1.15;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  const [word, emoji] = WORDS[active] ?? WORDS.A;

  return (
    <div className="font-kids">
      <WidgetTitle
        title="Letter sounds"
        hint={canSpeak ? "Tap a letter to hear it!" : "Tap a letter to see its word (sound isn't available on this device)."}
      />

      <div className="mb-5 flex flex-col items-center gap-2 rounded-3xl bg-surface-2 p-5 sm:flex-row sm:justify-center sm:gap-6" aria-live="polite">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ scale: 0.3, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            className="flex items-center gap-4"
          >
            <span className="text-gradient text-7xl font-black sm:text-8xl">
              {active}
              <span className="text-5xl sm:text-6xl">{active.toLowerCase()}</span>
            </span>
            <motion.span className="text-7xl sm:text-8xl" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
              {emoji}
            </motion.span>
          </motion.div>
        </AnimatePresence>
        <div className="text-center text-xl font-bold text-ink sm:text-left">
          <span className="text-accent">{active}</span> is for <span className="text-accent">{word}</span>
          {canSpeak && (
            <button type="button" onClick={() => speak(active)} className="btn-ghost ml-3 !px-3 !py-1.5" aria-label="Say it again">
              <Volume2 size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(3.25rem,1fr))] gap-2">
        {list.map((l) => (
          <motion.button
            key={l}
            type="button"
            whileTap={{ scale: 0.85, rotate: -6 }}
            whileHover={{ y: -3 }}
            onClick={() => speak(l)}
            aria-label={`${l} is for ${WORDS[l][0]}`}
            className={`h-14 rounded-2xl text-2xl font-black transition ${
              l === active ? "bg-accent text-white shadow-[0_4px_0_0_rgb(0_0_0/0.2)]" : "bg-surface text-ink shadow-soft hover:bg-accent/10"
            }`}
          >
            {l}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
