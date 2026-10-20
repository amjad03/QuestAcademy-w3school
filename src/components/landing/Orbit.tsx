"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { worlds } from "@/content/worlds";
import { LogoMark } from "@/components/shell/Logo";

/** Hero visual: five worlds orbiting the Quest compass. */
export function Orbit() {
  const R = 42; // % radius
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* rings */}
      <div className="absolute inset-[8%] rounded-full border border-dashed border-line" />
      <div className="absolute inset-[24%] rounded-full border border-line/70" />
      <div className="absolute inset-[38%] rounded-full bg-accent/10 blur-2xl" />

      {/* core */}
      <div className="absolute left-[37%] top-[37%] h-[26%] w-[26%]">
        <motion.div className="h-full w-full" animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
          <LogoMark className="h-full w-full drop-shadow-[0_20px_40px_rgb(124_58_237/0.45)]" />
        </motion.div>
      </div>

      {/* orbiting planets */}
      <div className="absolute inset-0 animate-spin-slow">
        {worlds.map((w, i) => {
          const a = (i / worlds.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + R * Math.cos(a);
          const y = 50 + R * Math.sin(a);
          return (
            <div key={w.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              {/* counter-rotate so labels stay upright */}
              <div className="animate-spin-slow [animation-direction:reverse]">
                <Link href={w.href} className="group flex flex-col items-center gap-1.5">
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className="grid h-16 w-16 place-items-center rounded-full text-3xl shadow-soft ring-4 ring-bg sm:h-20 sm:w-20 sm:text-4xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${w.colors[0]}, ${w.colors[1]})` }}
                  >
                    {w.emoji}
                  </motion.span>
                  <span className="whitespace-nowrap rounded-full border border-line bg-surface/90 px-2.5 py-0.5 text-[11px] font-semibold shadow-soft backdrop-blur">
                    {w.name}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* floating chips */}
      <motion.div
        className="absolute -left-2 top-[16%] hidden rounded-2xl border border-line bg-surface px-3 py-2 text-sm shadow-soft sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🔥 <b>12</b> day streak
      </motion.div>
      <motion.div
        className="absolute -right-2 bottom-[18%] hidden rounded-2xl border border-line bg-surface px-3 py-2 text-sm shadow-soft sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⚡ <b className="text-accent">+40 XP</b> lesson done
      </motion.div>
      <motion.div
        className="absolute bottom-[2%] left-[12%] hidden rounded-2xl border border-line bg-surface px-3 py-2 text-sm shadow-soft sm:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
      >
        🏅 Badge: <b>Quiz Whiz</b>
      </motion.div>
    </div>
  );
}
