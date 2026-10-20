"use client";

import { useEffect, useState } from "react";

const SCRIPT = [
  { t: "def ", c: "text-fuchsia-400" },
  { t: "level_up", c: "text-cyan-300" },
  { t: "(xp):\n", c: "text-slate-200" },
  { t: "    return ", c: "text-fuchsia-400" },
  { t: "int", c: "text-sky-300" },
  { t: "((xp / 50) ** 0.5) + 1\n\n", c: "text-slate-200" },
  { t: "for ", c: "text-fuchsia-400" },
  { t: "xp ", c: "text-slate-200" },
  { t: "in ", c: "text-fuchsia-400" },
  { t: "[0, 120, 480, 1200]:\n", c: "text-amber-300" },
  { t: "    print", c: "text-sky-300" },
  { t: "(f\"", c: "text-slate-200" },
  { t: "{xp} XP → level {level_up(xp)}", c: "text-lime-300" },
  { t: "\")\n", c: "text-slate-200" },
];
const OUTPUT = ["0 XP → level 1", "120 XP → level 2", "480 XP → level 4", "1200 XP → level 5"];
const TOTAL = SCRIPT.reduce((a, s) => a + s.t.length, 0);

export function Typewriter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n > TOTAL + 40) {
      const t = setTimeout(() => setN(0), 3000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((x) => x + 1), n > TOTAL ? 60 : 28);
    return () => clearTimeout(t);
  }, [n]);

  let left = n;
  return (
    <div className="font-mono text-[13px] leading-6">
      <pre className="min-h-[200px] whitespace-pre-wrap p-5">
        {SCRIPT.map((s, i) => {
          const take = Math.max(0, Math.min(s.t.length, left));
          left -= take;
          return (
            <span key={i} className={s.c}>
              {s.t.slice(0, take)}
            </span>
          );
        })}
        {n <= TOTAL && <span className="animate-blink text-cyan-300">▋</span>}
      </pre>
      <div className="min-h-[124px] border-t border-line bg-bg px-5 py-3">
        <div className="text-muted">$ python hello.py</div>
        {n > TOTAL &&
          OUTPUT.slice(0, Math.min(OUTPUT.length, Math.floor((n - TOTAL) / 8) + 1)).map((o) => (
            <div key={o} className="text-lime-300">
              {o}
            </div>
          ))}
      </div>
    </div>
  );
}
