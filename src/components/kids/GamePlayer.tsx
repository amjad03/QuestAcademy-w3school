"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw, Volume2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { GAMES, type GameId } from "./games";
import { useLearner } from "@/lib/store";
import { sfx, speak } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { useHydrated } from "@/components/providers";

const ROUNDS = 8;

const rand = (n: number) => Math.floor(Math.random() * n);
const pick = <T,>(a: readonly T[]) => a[rand(a.length)];
function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = rand(i + 1);
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

const say = (t: string) => speak(t, { pitch: 1.3, rate: 0.95 });

/** Shell: rounds, score, celebration. Each game reports right/wrong via onAnswer. */
export function GamePlayer({ id }: { id: GameId }) {
  const meta = GAMES.find((g) => g.id === id)!;
  // Rounds are randomised, so only render them on the client.
  const hydrated = useHydrated();
  const bump = useLearner((s) => s.bump);
  const award = useLearner((s) => s.award);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [session, setSession] = useState(0);
  const [flash, setFlash] = useState<"good" | "bad" | null>(null);
  const done = round >= ROUNDS;

  const onAnswer = useCallback((ok: boolean) => {
    sfx(ok ? "correct" : "wrong");
    setFlash(ok ? "good" : "bad");
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      setFlash(null);
      setRound((r) => r + 1);
    }, ok ? 700 : 1100);
  }, []);

  useEffect(() => {
    if (!done) return;
    bump("games");
    award(10 + score * 2, `${meta.title} finished`);
    burst({ big: score >= 6 });
    say(score >= 6 ? "Amazing! You are a superstar!" : "Well played! Let's play again!");
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  const stars = score >= 7 ? 3 : score >= 5 ? 2 : 1;

  return (
    <div data-world="kids" className="min-h-screen bg-bg font-kids text-ink">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="flex items-center gap-3">
          <Link href="/kids" className="grid h-12 w-12 place-items-center rounded-2xl bg-surface shadow-pop" aria-label="Back to Wonder Woods">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">
            {meta.emoji} {meta.title}
          </h1>
          <div className="ml-auto flex gap-1">
            {Array.from({ length: ROUNDS }, (_, i) => (
              <span key={i} className={clsx("h-3 w-3 rounded-full sm:h-4 sm:w-4", i < round ? "bg-accent" : "bg-surface-2")} />
            ))}
          </div>
        </div>

        <div className={clsx("relative mt-6 min-h-[480px] rounded-[2.5rem] border-4 bg-surface p-6 shadow-soft transition", flash === "good" ? "border-good" : flash === "bad" ? "border-bad" : "border-line")}>
          <AnimatePresence>
            {flash && (
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="pointer-events-none absolute inset-0 z-10 grid place-items-center text-[8rem]">
                {flash === "good" ? "🎉" : "🙈"}
              </motion.div>
            )}
          </AnimatePresence>
          {done ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="text-7xl">{"⭐".repeat(stars)}{"☆".repeat(3 - stars)}</div>
              <h2 className="mt-4 text-4xl font-bold">{score >= 6 ? "Superstar!" : "Great playing!"}</h2>
              <p className="mt-2 text-xl text-muted">
                You got {score} out of {ROUNDS}!
              </p>
              <div className="mt-8 flex gap-3">
                <button
                  className="btn-pop h-14 px-8 text-xl"
                  onClick={() => {
                    setRound(0);
                    setScore(0);
                    setSession((s) => s + 1);
                  }}
                >
                  <RotateCcw className="h-6 w-6" /> Play again
                </button>
                <Link href="/kids/play" className="btn-ghost h-14 px-6 text-xl">
                  More games
                </Link>
              </div>
            </div>
          ) : (
            hydrated && <Game key={`${session}-${round}`} id={id} onAnswer={onAnswer} locked={flash !== null} />
          )}
        </div>
      </div>
    </div>
  );
}

function Game({ id, onAnswer, locked }: { id: GameId; onAnswer: (ok: boolean) => void; locked: boolean }) {
  switch (id) {
    case "balloon-pop":
      return <BalloonPop onAnswer={onAnswer} locked={locked} />;
    case "letter-hunt":
      return <LetterHunt onAnswer={onAnswer} locked={locked} />;
    case "memory-match":
      return <MemoryMatch onAnswer={onAnswer} />;
    case "shape-safari":
      return <ShapeSafari onAnswer={onAnswer} locked={locked} />;
    case "math-pop":
      return <MathPop onAnswer={onAnswer} locked={locked} />;
    case "odd-one-out":
      return <OddOneOut onAnswer={onAnswer} locked={locked} />;
  }
}

function Prompt({ text, speech }: { text: string; speech?: string }) {
  useEffect(() => {
    say(speech ?? text);
  }, [text, speech]);
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-5xl">🦉</span>
      <p className="rounded-3xl bg-surface-2 px-5 py-3 text-center text-2xl font-bold">{text}</p>
      <button onClick={() => say(speech ?? text)} className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-white" aria-label="Say it again">
        <Volume2 className="h-6 w-6" />
      </button>
    </div>
  );
}

const COLORS = ["#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#14b8a6", "#f97316"];

function BalloonPop({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const target = useMemo(() => 1 + rand(6), []);
  const balloons = useMemo(() => Array.from({ length: 9 }, (_, i) => ({ i, color: pick(COLORS), x: (i % 3) * 33 + 6 + rand(10), delay: Math.random() })), []);
  const [popped, setPopped] = useState<number[]>([]);
  return (
    <div>
      <Prompt text={`Pop ${target} balloon${target > 1 ? "s" : ""}!`} />
      <div className="relative mx-auto mt-6 grid h-72 max-w-md grid-cols-3 gap-4">
        {balloons.map((b) =>
          popped.includes(b.i) ? (
            <motion.span key={b.i} initial={{ scale: 1 }} animate={{ scale: 2, opacity: 0 }} className="grid place-items-center text-5xl">
              💥
            </motion.span>
          ) : (
            <motion.button
              key={b.i}
              disabled={locked}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2 + b.delay, repeat: Infinity }}
              onClick={() => {
                sfx("pop");
                setPopped((p) => [...p, b.i]);
              }}
              className="mx-auto h-20 w-16 rounded-[50%] shadow-lg"
              style={{ background: `radial-gradient(circle at 30% 30%, #fff8, ${b.color} 45%)` }}
              aria-label="Balloon"
            />
          ),
        )}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="text-3xl font-bold">Popped: {popped.length}</span>
        <button className="btn-pop h-14 px-8 text-xl" disabled={locked || popped.length === 0} onClick={() => onAnswer(popped.length === target)}>
          Done ✓
        </button>
      </div>
    </div>
  );
}

const LETTER_WORDS: Record<string, string> = { A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Egg", F: "Fish", G: "Goat", H: "Hat", I: "Igloo", J: "Jam", K: "Kite", L: "Lion", M: "Moon", N: "Nest", O: "Owl", P: "Pig", Q: "Queen", R: "Rain", S: "Sun", T: "Tree", U: "Umbrella", V: "Van", W: "Whale", X: "Xylophone", Y: "Yak", Z: "Zebra" };

function LetterHunt({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const { target, options } = useMemo(() => {
    const letters = Object.keys(LETTER_WORDS);
    const target = pick(letters);
    const others = shuffle(letters.filter((l) => l !== target)).slice(0, 5);
    return { target, options: shuffle([target, ...others]) };
  }, []);
  return (
    <div>
      <Prompt text="Which letter is this?" speech={`Find the letter ${target}. ${target} is for ${LETTER_WORDS[target]}.`} />
      <p className="mt-3 text-center text-muted">Listen carefully, then tap it! (Hint: {LETTER_WORDS[target]})</p>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
        {options.map((l) => (
          <motion.button whileTap={{ scale: 0.9 }} key={l} disabled={locked} onClick={() => onAnswer(l === target)} className="aspect-square rounded-3xl bg-surface-2 text-6xl font-bold shadow-pop transition hover:bg-accent/15">
            {l}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const PAIRS = ["🐶", "🐱", "🦁", "🐸", "🐵", "🐧", "🦄", "🐙", "🐢", "🦋", "🍓", "🍌"];

function MemoryMatch({ onAnswer }: { onAnswer: (ok: boolean) => void }) {
  const cards = useMemo(() => shuffle([...shuffle(PAIRS).slice(0, 4)].flatMap((e) => [e, e])), []);
  const [open, setOpen] = useState<number[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  useEffect(() => {
    if (open.length !== 2) return;
    const [a, b] = open;
    setMoves((m) => m + 1);
    const t = setTimeout(() => {
      if (cards[a] === cards[b]) {
        sfx("correct");
        setFound((f) => [...f, cards[a]]);
      }
      setOpen([]);
    }, 650);
    return () => clearTimeout(t);
  }, [open, cards]);
  useEffect(() => {
    if (found.length === 4) setTimeout(() => onAnswer(moves <= 8), 400);
  }, [found.length]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Prompt text="Find the matching pairs!" />
      <p className="mt-2 text-center text-muted">Moves: {moves} · match all in 8 moves for a star</p>
      <div className="mx-auto mt-6 grid max-w-sm grid-cols-4 gap-3">
        {cards.map((c, i) => {
          const shown = open.includes(i) || found.includes(c);
          return (
            <motion.button
              key={i}
              onClick={() => {
                if (shown || open.length === 2) return;
                sfx("flip");
                setOpen((o) => [...o, i]);
              }}
              animate={{ rotateY: shown ? 0 : 180 }}
              className={clsx("grid aspect-square place-items-center rounded-2xl text-4xl shadow-pop", shown ? "bg-surface-2" : "bg-gradient-to-br from-accent to-accent-2")}
              aria-label={shown ? c : "Hidden card"}
            >
              {shown ? c : "❔"}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

const SHAPES = [
  { name: "circle", svg: <circle cx="50" cy="50" r="40" /> },
  { name: "square", svg: <rect x="12" y="12" width="76" height="76" rx="4" /> },
  { name: "triangle", svg: <polygon points="50,8 92,88 8,88" /> },
  { name: "star", svg: <polygon points="50,6 61,38 95,38 67,58 78,92 50,71 22,92 33,58 5,38 39,38" /> },
  { name: "heart", svg: <path d="M50 88 C10 60 5 35 25 22 C38 14 48 22 50 30 C52 22 62 14 75 22 C95 35 90 60 50 88Z" /> },
  { name: "rectangle", svg: <rect x="6" y="28" width="88" height="44" rx="4" /> },
  { name: "diamond", svg: <polygon points="50,6 92,50 50,94 8,50" /> },
  { name: "oval", svg: <ellipse cx="50" cy="50" rx="44" ry="28" /> },
];

function ShapeSafari({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const { target, options } = useMemo(() => {
    const opts = shuffle(SHAPES).slice(0, 4);
    return { target: pick(opts), options: opts.map((o) => ({ ...o, color: pick(COLORS) })) };
  }, []);
  return (
    <div>
      <Prompt text={`Tap the ${target.name}!`} />
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-5">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o.name} disabled={locked} onClick={() => onAnswer(o.name === target.name)} className="grid aspect-square place-items-center rounded-3xl bg-surface-2 p-6 shadow-pop hover:bg-accent/10" aria-label={o.name}>
            <svg viewBox="0 0 100 100" className="h-full w-full" fill={o.color}>
              {o.svg}
            </svg>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function MathPop({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const { a, b, op, ans, options } = useMemo(() => {
    const op = Math.random() < 0.6 ? "+" : "−";
    let a = 1 + rand(9);
    let b = 1 + rand(9);
    if (op === "−" && b > a) [a, b] = [b, a];
    const ans = op === "+" ? a + b : a - b;
    const set = new Set([ans]);
    while (set.size < 4) set.add(Math.max(0, ans + rand(7) - 3));
    return { a, b, op, ans, options: shuffle([...set]) };
  }, []);
  const [time, setTime] = useState(10);
  useEffect(() => {
    if (locked) return;
    if (time === 0) return onAnswer(false);
    const t = setTimeout(() => setTime((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [time, locked]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Prompt text={`${a} ${op} ${b} = ?`} speech={`What is ${a} ${op === "+" ? "plus" : "minus"} ${b}?`} />
      <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-surface-2">
        <motion.div className="h-full bg-gradient-to-r from-good to-warn" animate={{ width: `${time * 10}%` }} transition={{ ease: "linear", duration: 1 }} />
      </div>
      <div className="mt-6 text-center text-5xl">
        {Array.from({ length: a }, () => "🍎").join("")}
        <span className="mx-2 font-bold">{op}</span>
        {Array.from({ length: b }, () => (op === "+" ? "🍏" : "❌")).join("")}
      </div>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o} disabled={locked} onClick={() => onAnswer(o === ans)} className="h-24 rounded-3xl bg-surface-2 text-5xl font-bold shadow-pop hover:bg-accent/15">
            {o}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const GROUPS = [
  { name: "fruits", items: ["🍎", "🍌", "🍇", "🍓", "🍊", "🍉", "🍍"] },
  { name: "animals", items: ["🐶", "🐱", "🐮", "🐷", "🐴", "🐑", "🐰"] },
  { name: "vehicles", items: ["🚗", "🚌", "🚲", "✈️", "🚂", "🚀", "🚁"] },
  { name: "sea creatures", items: ["🐟", "🐙", "🦀", "🐬", "🐳", "🦈", "🐠"] },
  { name: "weather", items: ["☀️", "🌧️", "❄️", "🌈", "⛈️", "🌪️", "☁️"] },
  { name: "clothes", items: ["👕", "👖", "🧦", "🧢", "👗", "🧥", "👟"] },
];

function OddOneOut({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const { options, odd, group } = useMemo(() => {
    const [g, h] = shuffle(GROUPS);
    const odd = pick(h.items);
    return { group: g.name, odd, options: shuffle([...shuffle(g.items).slice(0, 3), odd]) };
  }, []);
  return (
    <div>
      <Prompt text="Which one doesn’t belong?" />
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-5">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o} disabled={locked} onClick={() => onAnswer(o === odd)} className="grid aspect-square place-items-center rounded-3xl bg-surface-2 text-7xl shadow-pop hover:bg-accent/10">
            {o}
          </motion.button>
        ))}
      </div>
      {locked && <p className="mt-4 text-center text-xl text-muted">The others are all {group}!</p>}
    </div>
  );
}
