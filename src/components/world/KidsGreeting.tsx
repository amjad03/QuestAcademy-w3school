"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { speak } from "@/lib/sound";

export function KidsGreeting() {
  const hydrated = useHydrated();
  const name = useLearner((s) => s.profile.name);
  const badges = useLearner((s) => Object.keys(s.badges).length);
  const lessons = useLearner((s) => s.totals.lessons);
  const first = hydrated && name ? name.split(" ")[0] : "friend";
  const line = `Hoot hoot! Hello ${first}! I'm Questy. What shall we learn today?`;
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
      <motion.button
        onClick={() => speak(line, { pitch: 1.3, rate: 0.95 })}
        className="relative text-[8rem] leading-none"
        animate={{ y: [0, -14, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        aria-label="Hear Questy say hello"
      >
        🦉
        <span className="absolute -right-2 top-2 grid h-10 w-10 place-items-center rounded-full bg-accent text-white shadow-pop">
          <Volume2 className="h-5 w-5" />
        </span>
      </motion.button>
      <div>
        <div className="relative inline-block rounded-[2rem] bg-surface px-6 py-4 shadow-soft">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Hello, <span className="text-accent">{first}</span>! 👋
          </h1>
          <p className="mt-1 text-xl text-muted">Welcome to Wonder Woods. Tap me to hear me talk!</p>
        </div>
        {hydrated && (
          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            <span className="rounded-full bg-surface px-4 py-2 text-lg font-bold shadow-soft">⭐ {lessons} adventures</span>
            <span className="rounded-full bg-surface px-4 py-2 text-lg font-bold shadow-soft">🏅 {badges} stickers</span>
          </div>
        )}
      </div>
    </div>
  );
}
