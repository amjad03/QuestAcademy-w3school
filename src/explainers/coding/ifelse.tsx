"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CloudRain, CloudSnow, RotateCcw, Sun as SunIcon } from "lucide-react";
import clsx from "clsx";
import type { Explainer } from "../types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { Art, Cloud, INK, Kid, Rain, Robot, Stage, STAGE_INK, STAGE_MUTED, Sun } from "./_art";

const COLOR = "#7C3AED";

/* ------------------------------------------------------------------ */
/* Little props                                                        */
/* ------------------------------------------------------------------ */

function Umbrella({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-22 0 a22 18 0 0 1 44 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 q-5.5 -5 -11 0 z" fill="#EF4444" stroke={INK} strokeWidth={2} />
      <path d="M0 -18 v-4 M0 0 v20 q0 5 -5 5 q-4 0 -4 -4" fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

function Shades({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-20 -3 h40" stroke={INK} strokeWidth={2.5} />
      <rect x={-20} y={-5} width={16} height={12} rx={5} fill="#111827" stroke={INK} strokeWidth={2} />
      <rect x={4} y={-5} width={16} height={12} rx={5} fill="#111827" stroke={INK} strokeWidth={2} />
      <path d="M-16 -2 l5 0" stroke="#9CA3AF" strokeWidth={1.5} />
      <path d="M8 -2 l5 0" stroke="#9CA3AF" strokeWidth={1.5} />
    </g>
  );
}

function Scarf({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      <path d="M-18 -6 q18 10 36 0 v8 q-18 10 -36 0 z" fill="#2563EB" stroke={INK} strokeWidth={2} />
      <path d="M6 2 v20 h9 v-21" fill="#2563EB" stroke={INK} strokeWidth={2} />
      <path d="M6 10 h9 M6 16 h9" stroke="#FDE68A" strokeWidth={2} />
      <path d="M-10 -2 v8 M0 0 v8" stroke="#FDE68A" strokeWidth={2} />
    </g>
  );
}

function Snow({ x, y, w, h, n = 10 }: { x: number; y: number; w: number; h: number; n?: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, k) => (
        <motion.circle key={k} cx={x + ((k * 41) % w)} cy={y} r={3} fill="#fff" stroke="#93C5FD" strokeWidth={1} animate={{ y: [0, h], x: [0, 6, -4, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: (k * 0.23) % 2.4, ease: "linear" }} />
      ))}
    </g>
  );
}

/** The decision diamond, centred on (x, y). */
function Diamond({ x, y, text, w = 128, h = 52 }: { x: number; y: number; text: string; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 ${-h / 2} L${w / 2} 0 L0 ${h / 2} L${-w / 2} 0 Z`} fill="#FDE68A" stroke={INK} strokeWidth={2.5} />
      <text y={5} textAnchor="middle" fontSize={13} fontWeight={900} fill={INK}>
        {text}
      </text>
    </g>
  );
}

function Road() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M200 236 V150 L80 70 M200 150 L320 70" stroke="#A8A29E" strokeWidth={30} />
      <path d="M200 236 V150 L80 70 M200 150 L320 70" stroke="#FEF3C7" strokeWidth={2.5} strokeDasharray="8 8" />
    </g>
  );
}

function Signs() {
  return (
    <>
      <g transform="translate(62 46)">
        <Umbrella s={0.9} />
      </g>
      <g transform="translate(338 48)">
        <Shades s={1.1} />
      </g>
    </>
  );
}

const LEFT_KF = { x: [200, 200, 105], y: [215, 160, 98] };
const RIGHT_KF = { x: [200, 200, 295], y: [215, 160, 98] };

const watch: Explainer["watch"] = [
  {
    title: "Bolt reaches a fork in the road",
    say: "Bolt is going out. One road leads to an umbrella, the other to sunglasses. Which way should he go?",
    scene: (
      <Stage label="Bolt at the bottom of a forked road, umbrella at the end of the left road, sunglasses at the right">
        <Road />
        <Signs />
        <motion.g initial={{ x: 200, y: 250 }} animate={{ x: 200, y: 215 }} transition={{ duration: 0.8 }}>
          <Robot s={0.8} />
        </motion.g>
        <motion.text x={250} y={196} fontSize={26} fontWeight={900} fill={STAGE_INK} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
          ?
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "Ask a yes-or-no question",
    say: "At the fork, Bolt asks one question: is it raining? The answer can only be yes or no.",
    scene: (
      <Stage label="A yellow decision diamond at the fork asks: raining? Yes goes left, no goes right">
        <Road />
        <Signs />
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} style={{ originX: "200px", originY: "140px" }}>
          <Diamond x={200} y={140} text="raining?" />
        </motion.g>
        <text x={118} y={130} textAnchor="middle" fontSize={15} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={284} y={130} textAnchor="middle" fontSize={15} fontWeight={900} fill="#DC2626">
          no
        </text>
        <g transform="translate(200 215)">
          <Robot s={0.7} />
        </g>
      </Stage>
    ),
  },
  {
    title: "If yes, take the umbrella",
    say: "It is raining, so the answer is yes. Bolt takes the left road and grabs the umbrella.",
    scene: (
      <Stage label="Rain falls. Bolt drives up the left road and holds the umbrella">
        <Road />
        <Cloud x={130} y={30} s={1.1} grey />
        <Cloud x={280} y={24} s={0.9} grey />
        <Rain x={80} y={40} w={260} h={190} n={16} />
        <g transform="translate(338 48)">
          <Shades s={1.1} />
        </g>
        <motion.g initial={{ x: 200, y: 215 }} animate={LEFT_KF} transition={{ duration: 1.6, times: [0, 0.4, 1] }}>
          <Robot s={0.7} />
          <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: -46 }} transition={{ delay: 1.7 }}>
            <Umbrella s={1.3} />
          </motion.g>
        </motion.g>
        <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.6 }}>
          <g transform="translate(62 46)">
            <Umbrella s={0.9} />
          </g>
        </motion.g>
      </Stage>
    ),
  },
  {
    title: "Else, wear sunglasses",
    say: "On a sunny day the answer is no. Else means: if the answer was no, do this instead. Bolt takes the right road.",
    scene: (
      <Stage label="The sun shines. Bolt drives up the right road and puts on sunglasses">
        <Road />
        <Sun x={70} y={40} r={18} />
        <g transform="translate(62 96)">
          <Umbrella s={0.9} />
        </g>
        <motion.g initial={{ x: 200, y: 215 }} animate={RIGHT_KF} transition={{ duration: 1.6, times: [0, 0.4, 1] }}>
          <Robot s={0.7} />
          <motion.g initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: -19 }} transition={{ delay: 1.7 }}>
            <Shades s={0.62} />
          </motion.g>
        </motion.g>
        <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.6 }}>
          <g transform="translate(338 48)">
            <Shades s={1.1} />
          </g>
        </motion.g>
      </Stage>
    ),
  },
  {
    title: "Write it as code",
    say: "In code we write if, the question, then what to do. Only one of the two paths ever runs. The other is skipped.",
    scene: (
      <Stage label="Code: if raining, take umbrella, else wear sunglasses. With rain, the first branch is lit and the else branch is skipped">
        <Cloud x={340} y={44} s={0.8} grey />
        <Rain x={312} y={58} w={60} h={50} n={6} />
        <g transform="translate(30 40)">
          <rect width={270} height={150} rx={12} fill="#111827" stroke={INK} strokeWidth={2} />
          {[
            ["if raining:", "#F472B6", true],
            ["    take(umbrella)", "#F9FAFB", true],
            ["else:", "#F472B6", false],
            ["    wear(sunglasses)", "#F9FAFB", false],
          ].map(([t, c, on], i) => (
            <motion.g key={i} initial={{ opacity: 0.3 }} animate={{ opacity: on ? 1 : 0.35 }} transition={{ delay: 0.4 + i * 0.4 }}>
              {on && <motion.rect x={8} y={14 + i * 32} height={26} rx={6} fill="#166534" initial={{ width: 0 }} animate={{ width: 254 }} transition={{ delay: 0.4 + i * 0.4, duration: 0.3 }} />}
              <text x={18} y={33 + i * 32} fontFamily="ui-monospace, Menlo, monospace" fontSize={16} fontWeight={700} fill={c as string} xmlSpace="preserve">
                {t as string}
              </text>
            </motion.g>
          ))}
        </g>
        <motion.text x={350} y={150} textAnchor="middle" fontSize={13} fontWeight={800} fill="#16A34A" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          ✓ runs
        </motion.text>
        <motion.text x={350} y={190} textAnchor="middle" fontSize={13} fontWeight={800} fill={STAGE_MUTED} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          skipped
        </motion.text>
      </Stage>
    ),
  },
  {
    title: "More choices with elif",
    say: "Need more than two choices? Elif means else if: ask another question. Bolt checks each question in order and stops at the first yes.",
    scene: (
      <Stage label="Flowchart: raining? yes gives umbrella. No leads to snowing? yes gives scarf, no gives sunglasses">
        <Diamond x={90} y={60} text="raining?" w={120} h={48} />
        <Diamond x={210} y={140} text="snowing?" w={124} h={48} />
        <g stroke={STAGE_INK} strokeWidth={2.5} fill="none">
          <path d="M150 60 H300" />
          <path d="M90 84 V140 H148" />
          <path d="M272 140 H300" />
          <path d="M210 164 V205 H300" />
        </g>
        <text x={225} y={52} fontSize={12} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={98} y={118} fontSize={12} fontWeight={900} fill="#DC2626">
          no
        </text>
        <text x={278} y={132} fontSize={12} fontWeight={900} fill="#16A34A">
          yes
        </text>
        <text x={218} y={190} fontSize={12} fontWeight={900} fill="#DC2626">
          no (else)
        </text>
        {[
          { y: 60, el: <Umbrella s={0.8} />, t: "if" },
          { y: 140, el: <Scarf s={0.8} />, t: "elif" },
          { y: 205, el: <Shades s={0.9} />, t: "else" },
        ].map((r, k) => (
          <motion.g key={k} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + k * 0.4 }}>
            <rect x={302} y={r.y - 22} width={84} height={44} rx={10} fill="#EDE9FE" stroke={INK} strokeWidth={2} />
            <g transform={`translate(330 ${r.y})`}>{r.el}</g>
            <text x={372} y={r.y + 5} textAnchor="middle" fontSize={11} fontWeight={900} fill={INK} fontFamily="ui-monospace, Menlo, monospace">
              {r.t}
            </text>
          </motion.g>
        ))}
      </Stage>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Try: fix Bolt's weather rules                                       */
/* ------------------------------------------------------------------ */

type Weather = "rainy" | "snowy" | "sunny";
type Item = "umbrella" | "scarf" | "sunglasses";
const ITEMS: Item[] = ["umbrella", "scarf", "sunglasses"];
const NEEDS: Record<Weather, Item> = { rainy: "umbrella", snowy: "scarf", sunny: "sunglasses" };
const ITEM_ART: Record<Item, (s: number) => React.ReactNode> = {
  umbrella: (s) => <Umbrella s={s} />,
  scarf: (s) => <Scarf s={s} />,
  sunglasses: (s) => <Shades s={s} />,
};

/** Which code lines run, in order, for each weather (0 if, 1 body, 2 elif, 3 body, 4 else, 5 body). */
const TRACE: Record<Weather, number[]> = { rainy: [0, 1], snowy: [0, 2, 3], sunny: [0, 2, 4, 5] };

const OUCH: Record<Weather, Record<Item, string>> = {
  rainy: { umbrella: "", scarf: "A scarf in the rain? Bolt is soggy!", sunglasses: "Sunglasses in the rain? Bolt is soaked and can't see!" },
  snowy: { umbrella: "An umbrella doesn't keep Bolt's neck warm. Brrr!", scarf: "", sunglasses: "Sunglasses in the snow? Bolt's metal is freezing!" },
  sunny: { umbrella: "An umbrella on a sunny day? Bolt squints in the glare.", scarf: "A woolly scarf in the sunshine? Bolt is far too hot!", sunglasses: "" },
};

function ItemButton({ item, onClick, lit }: { item: Item; onClick: () => void; lit?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={clsx("inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border-2 border-dashed px-2.5 font-mono text-sm font-black text-violet-200 transition hover:bg-white/10", lit ? "border-amber-300" : "border-violet-400/60")} aria-label={`Change item, now ${item}`}>
      <svg viewBox="-24 -24 48 48" className="h-7 w-7" aria-hidden>
        {ITEM_ART[item](0.9)}
      </svg>
      {item}
    </button>
  );
}

function IfElseTry() {
  const [rules, setRules] = useState<[Item, Item, Item]>(["sunglasses", "umbrella", "scarf"]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [tick, setTick] = useState(0);
  const [results, setResults] = useState<Partial<Record<Weather, boolean>>>({});

  const trace = weather ? TRACE[weather] : [];
  const done = weather !== null && tick >= trace.length;
  const ran = trace.slice(0, tick);
  const chosen: Item | null = done && weather ? rules[weather === "rainy" ? 0 : weather === "snowy" ? 1 : 2] : null;
  const ok = chosen !== null && weather !== null && chosen === NEEDS[weather];
  const allOk = (["rainy", "snowy", "sunny"] as Weather[]).every((w) => results[w]);

  useEffect(() => {
    if (!weather || tick >= trace.length) return;
    const id = setTimeout(() => setTick((t) => t + 1), 550);
    return () => clearTimeout(id);
  }, [weather, tick, trace.length]);

  useEffect(() => {
    if (!done || !weather || chosen === null) return;
    sfx(ok ? "correct" : "wrong");
    const next = { ...results, [weather]: ok };
    if (ok && (["rainy", "snowy", "sunny"] as Weather[]).every((w) => next[w])) burst();
    setResults(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const go = (w: Weather) => {
    setWeather(w);
    setTick(0);
  };
  const cycle = (k: 0 | 1 | 2) => {
    setRules((r) => {
      const n = [...r] as [Item, Item, Item];
      n[k] = ITEMS[(ITEMS.indexOf(r[k]) + 1) % ITEMS.length];
      return n;
    });
    setResults({});
    setWeather(null);
    sfx("tap");
  };
  const reset = () => {
    setRules(["sunglasses", "umbrella", "scarf"]);
    setResults({});
    setWeather(null);
  };

  const lineCls = (i: number) => clsx("rounded-lg px-2 py-1 transition-colors", ran.includes(i) ? (i % 2 === 0 ? "bg-violet-700" : "bg-green-800") : weather && done && !ran.includes(i) ? "opacity-40" : "");
  const verdict = (i: number) => {
    if (!weather || !ran.includes(i) || i % 2 === 1 || i === 4) return null;
    const yes = (i === 0 && weather === "rainy") || (i === 2 && weather === "snowy");
    return <span className={clsx("ml-2 text-xs", yes ? "text-green-300" : "text-red-300")}>{yes ? "← yes!" : "← no"}</span>;
  };

  return (
    <div className="select-none">
      <p className="mb-3 font-extrabold">
        Bolt&apos;s rules are muddled! Tap the items to fix them, then test every kind of weather.
      </p>
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl bg-[#111827] p-3 font-mono text-[15px] font-bold text-gray-100" aria-live="polite">
          <div className={lineCls(0)}>
            <span className="text-pink-400">if</span> weather == <span className="text-sky-300">&quot;rainy&quot;</span>:{verdict(0)}
          </div>
          <div className={clsx(lineCls(1), "pl-8")}>
            take( <ItemButton item={rules[0]} onClick={() => cycle(0)} lit={ran.includes(1)} /> )
          </div>
          <div className={lineCls(2)}>
            <span className="text-pink-400">elif</span> weather == <span className="text-sky-300">&quot;snowy&quot;</span>:{verdict(2)}
          </div>
          <div className={clsx(lineCls(3), "pl-8")}>
            take( <ItemButton item={rules[1]} onClick={() => cycle(1)} lit={ran.includes(3)} /> )
          </div>
          <div className={lineCls(4)}>
            <span className="text-pink-400">else</span>:
          </div>
          <div className={clsx(lineCls(5), "pl-8")}>
            take( <ItemButton item={rules[2]} onClick={() => cycle(2)} lit={ran.includes(5)} /> )
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border-2 border-line" style={{ background: weather === "sunny" ? "#E0F2FE" : weather === "snowy" ? "#EFF6FF" : weather === "rainy" ? "#CBD5E1" : "#F1F5F9" }}>
          <svg viewBox="0 0 240 170" role="img" aria-label={weather ? `It is ${weather}. ${chosen ? `Bolt took the ${chosen}. ${ok ? "He is comfy." : "He is not comfy."}` : "Bolt is checking his rules."}` : "Bolt is waiting for the weather."} className="h-auto w-full" style={{ maxHeight: 240 }}>
            <rect y={140} width={240} height={30} fill={weather === "snowy" ? "#F8FAFC" : "#86EFAC"} />
            {weather === "sunny" && <Sun x={200} y={34} r={16} />}
            {weather === "rainy" && (
              <>
                <Cloud x={70} y={30} grey />
                <Cloud x={170} y={26} s={0.9} grey />
                <Rain x={20} y={40} w={200} h={110} n={14} />
              </>
            )}
            {weather === "snowy" && (
              <>
                <Cloud x={110} y={28} />
                <Snow x={20} y={40} w={200} h={110} n={14} />
              </>
            )}
            <g transform="translate(120 120)">
              <Robot s={1.2} mood={done ? (ok ? "happy" : "sad") : "wow"} />
              {chosen && (
                <g transform={chosen === "umbrella" ? "translate(26 -64)" : chosen === "scarf" ? "translate(0 -14)" : "translate(0 -33)"}>
                  <motion.g key={`${weather}-${chosen}`} initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }}>
                    {ITEM_ART[chosen](chosen === "umbrella" ? 1.5 : chosen === "scarf" ? 0.9 : 0.78)}
                  </motion.g>
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-muted">Test the weather:</span>
        {(
          [
            ["rainy", "Rain", CloudRain],
            ["snowy", "Snow", CloudSnow],
            ["sunny", "Sun", SunIcon],
          ] as const
        ).map(([w, label, Icon]) => (
          <button key={w} type="button" onClick={() => go(w)} className={clsx("flex min-h-[48px] items-center gap-2 rounded-2xl border-2 px-4 font-extrabold", weather === w ? "border-transparent text-white" : "border-line bg-surface")} style={weather === w ? { background: COLOR } : undefined}>
            <Icon className="h-5 w-5" /> {label}
            {results[w] !== undefined && <span aria-label={results[w] ? "passed" : "failed"}>{results[w] ? "✅" : "❌"}</span>}
          </button>
        ))}
        <button type="button" className="btn-ghost min-h-[48px]" onClick={reset} aria-label="Reset rules">
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <p className={clsx("mt-3 min-h-[3rem] rounded-2xl px-4 py-3 font-bold", allOk ? "bg-good/10 text-good" : done ? (ok ? "bg-good/10 text-good" : "bg-bad/10 text-bad") : "bg-surface-2 text-muted")} aria-live="polite">
        {allOk
          ? "Bolt is comfy in every weather! You tested all three branches — that's exactly how real programmers check their if/else code."
          : !weather
            ? "Pick a weather to run the code."
            : !done
              ? "Checking the questions from the top, one at a time…"
              : ok
                ? `Yes! ${weather === "sunny" ? "No question was true, so the else branch ran." : "The first true question wins, and the rest are skipped."} Now test the other weathers.`
                : OUCH[weather][chosen!]}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Story + analogy                                                     */
/* ------------------------------------------------------------------ */

function Window({ x, y, rain }: { x: number; y: number; rain?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={70} height={60} rx={4} fill={rain ? "#94A3B8" : "#BAE6FD"} stroke={INK} strokeWidth={3} />
      <path d="M35 0 V60 M0 30 H70" stroke={INK} strokeWidth={2} />
      {rain ? (
        <g stroke="#E0F2FE" strokeWidth={2} strokeLinecap="round">
          {[8, 22, 44, 58, 15, 50].map((dx, k) => (
            <line key={k} x1={dx} y1={6 + (k % 3) * 16} x2={dx - 3} y2={14 + (k % 3) * 16} />
          ))}
        </g>
      ) : (
        <circle cx={52} cy={16} r={9} fill="#FACC15" stroke={INK} strokeWidth={1.5} />
      )}
    </g>
  );
}

const story: Explainer["story"] = [
  {
    art: (
      <Art label="Mia by the door with her school bag, Bolt beside her">
        <g transform="translate(60 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(140 108)">
          <Robot mood="wow" />
        </g>
      </Art>
    ),
    speech: "Should I take my umbrella?",
    caption: "Mia is off to school but can't decide what to take.",
  },
  {
    art: (
      <Art label="Bolt looks out of the window to check the weather">
        <Window x={110} y={30} rain />
        <g transform="translate(60 108)">
          <Robot />
        </g>
      </Art>
    ),
    speech: "IF it's raining…",
    caption: "Bolt asks one yes-or-no question by looking outside.",
  },
  {
    art: (
      <Art label="It is raining and Mia holds a red umbrella">
        <Cloud x={130} y={26} grey />
        <Rain x={90} y={40} w={100} h={90} n={9} />
        <g transform="translate(70 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(88 50)">
          <Umbrella s={1.6} />
        </g>
      </Art>
    ),
    speech: "…THEN take the umbrella!",
    caption: "The answer is yes, so Mia takes the umbrella.",
  },
  {
    art: (
      <Art label="The next day is sunny and Mia wears sunglasses">
        <Sun x={160} y={36} r={18} />
        <g transform="translate(70 132)">
          <Kid h={88} bow />
        </g>
        <g transform="translate(70 61)">
          <Shades s={0.55} />
        </g>
      </Art>
    ),
    speech: "ELSE — sunglasses!",
    caption: "Next day the answer is no, so the else plan happens instead.",
  },
];

function TrafficLight({ green }: { green?: boolean }) {
  return (
    <g>
      <rect x={-18} y={-50} width={36} height={92} rx={9} fill="#1F2937" stroke={INK} strokeWidth={2} />
      <circle cy={-32} r={10} fill={green ? "#7F1D1D" : "#EF4444"} />
      <circle cy={-4} r={10} fill="#78350F" />
      <circle cy={24} r={10} fill={green ? "#22C55E" : "#14532D"} />
      <rect x={-4} y={42} width={8} height={30} fill="#374151" />
    </g>
  );
}

const like: Explainer["like"] = {
  headline: "If/else is like a driver at a traffic light.",
  everyday: {
    label: "If the light is green, go — else, stop",
    art: (
      <Art label="A traffic light showing green with a car ready to go" vb="0 0 200 130">
        <g transform="translate(60 56)">
          <TrafficLight green />
        </g>
        <g transform="translate(130 100)">
          <rect x={-28} y={-18} width={56} height={18} rx={6} fill="#3B82F6" stroke={INK} strokeWidth={2} />
          <path d="M-18 -18 l6 -12 h24 l6 12" fill="#BFDBFE" stroke={INK} strokeWidth={2} />
          <circle cx={-15} cy={2} r={6} fill="#111827" />
          <circle cx={15} cy={2} r={6} fill="#111827" />
        </g>
      </Art>
    ),
  },
  concept: {
    label: "An if/else in code",
    art: (
      <Art label="Code: if light is green, go, else stop" vb="0 0 200 130">
        <rect x={15} y={20} width={170} height={90} rx={10} fill="#111827" />
        {['if light == "green":', "    go()", "else:", "    stop()"].map((t, i) => (
          <text key={i} x={26} y={44 + i * 19} fontFamily="ui-monospace, Menlo, monospace" fontSize={12} fontWeight={700} fill={i % 2 ? "#86EFAC" : "#F472B6"} xmlSpace="preserve">
            {t}
          </text>
        ))}
      </Art>
    ),
  },
  pairs: [
    ["The driver looks at the light", "The condition is checked"],
    ["Green: drive on", "The if branch runs"],
    ["Any other colour: wait", "The else branch runs"],
    ["You never go AND stop", "Exactly one branch runs"],
  ],
  limits:
    "A real driver also watches for people, other cars and sirens. A program only checks the exact condition you wrote, at the moment that line runs — if you forget a case, the computer won't think of it for you.",
};

export const ifElseExplainer: Explainer = {
  id: "coding-if-else",
  title: "If / else: making decisions",
  tagline: "Ask a yes-or-no question, then pick a path — just like Bolt at the fork.",
  area: "Coding",
  ages: "7–16",
  lessons: ["python/control-flow/conditionals", "javascript/basics/operators-conditionals"],
  color: COLOR,
  icon: "🔀",
  watch,
  try: IfElseTry,
  story,
  like,
};
