"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, RotateCcw, Star, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { GAMES, type GameId } from "./games";
import { useLearner } from "@/lib/store";
import { sfx, speak } from "@/lib/sound";
import { GAME_LINES, LETTER_WORDS, SHAPE_NAMES } from "@/content/voice-lines";
import { currentMode } from "@/lib/useMode";
import { dayKey } from "@/lib/gamification";
import { useUi } from "@/lib/ui";
import { awardExploreSticker } from "@/components/modes/explore/stickers";
import { burst } from "@/lib/confetti";
import { useHydrated } from "@/components/providers";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";

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

/** Full-screen game session: rounds, progress, feedback footer and a results screen. */
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
  const [xp, setXp] = useState(0);
  const done = round >= ROUNDS;

  const onAnswer = useCallback((ok: boolean) => {
    sfx(ok ? "correct" : "wrong");
    setFlash(ok ? "good" : "bad");
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      setFlash(null);
      setRound((r) => r + 1);
    }, ok ? 900 : 1400);
  }, []);

  useEffect(() => {
    if (!done) return;
    const earned = 10 + score * 2;
    setXp(earned);
    bump("games");
    award(earned, `${meta.title} finished`);
    if (currentMode().young) {
      // Previous best is remembered as `game-best:<id>:<score>` items.
      const items = useLearner.getState().items;
      const prefix = `game-best:${id}:`;
      const best = Math.max(-1, ...Object.keys(items).filter((k) => k.startsWith(prefix)).map((k) => Number(k.slice(prefix.length))));
      useLearner.getState().markItem(`${prefix}${score}`);
      const sticker = (best >= 0 && score > best && awardExploreSticker("improved", `${id}:${score}`, { silent: true })) || awardExploreSticker("game-finish", `${id}:${dayKey()}`, { silent: true });
      if (sticker) useUi.getState().toast({ text: `New sticker: ${sticker.name}!` });
    }
    burst({ big: score >= 6 });
    say(score >= 6 ? GAME_LINES.great : GAME_LINES.again);
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  const stars = score >= 7 ? 3 : score >= 5 ? 2 : 1;
  const restart = () => {
    setRound(0);
    setScore(0);
    setSession((s) => s + 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      {/* top bar */}
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-4 px-5 pt-6">
        <Link href="/kids/play" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label="Close game">
          <X className="h-7 w-7" strokeWidth={2.6} />
        </Link>
        <ProgressBar value={round / ROUNDS} height={16} color="rgb(var(--good))" label="Game progress" />
        <span className="flex shrink-0 items-center gap-1 text-lg font-black text-warn-shade" aria-label={`${score} correct`}>
          <Star className="h-6 w-6 fill-warn text-warn" /> {score}
        </span>
      </div>

      <div className="mx-auto w-full max-w-[640px] flex-1 px-5 pb-10 pt-8">
        {done ? (
          <div className="flex flex-col items-center py-6 text-center">
            <Mascot pose={score >= 5 ? "cheer" : "think"} size={150} />
            <div className="mt-4 flex gap-2">
              {[0, 1, 2].map((i) => (
                <Star key={i} className={clsx("h-12 w-12", i < stars ? "fill-warn text-warn" : "fill-line text-line")} strokeWidth={1.5} />
              ))}
            </div>
            <h1 className="mt-4 text-3xl font-black text-warn-shade">{score >= 6 ? "Superstar!" : "Great playing!"}</h1>
            <p className="mt-1 font-semibold text-muted">{meta.title}</p>
            <div className="mt-8 grid w-full grid-cols-3 gap-3">
              <GameStat label="Correct" value={`${score}/${ROUNDS}`} color="#2EBE70" />
              <GameStat label="Stars" value={String(stars)} color="#FFB800" />
              <GameStat label="XP" value={`+${xp}`} color="#2F6BFF" />
            </div>
          </div>
        ) : (
          hydrated && <Game key={`${session}-${round}`} id={id} onAnswer={onAnswer} locked={flash !== null} />
        )}
      </div>

      {/* footer */}
      <div className={clsx("border-t-2 transition-colors", flash === "good" ? "border-transparent bg-good-soft" : flash === "bad" ? "border-transparent bg-bad-soft" : "border-line")}>
        <div className="mx-auto flex min-h-[96px] w-full max-w-[1000px] items-center justify-between gap-4 px-5 py-5">
          {done ? (
            <>
              <Link href="/kids/play" className="btn-ghost">
                More games
              </Link>
              <button className="btn-primary sm:min-w-[160px]" onClick={restart} autoFocus>
                <RotateCcw className="h-5 w-5" /> Play again
              </button>
            </>
          ) : flash ? (
            <div className="flex items-center gap-4">
              <span className={clsx("grid h-14 w-14 place-items-center rounded-full bg-surface", flash === "good" ? "text-good" : "text-bad")}>
                {flash === "good" ? <Check className="h-8 w-8" strokeWidth={4} /> : <X className="h-8 w-8" strokeWidth={4} />}
              </span>
              <span className={clsx("text-2xl font-black", flash === "good" ? "text-good-shade" : "text-bad-shade")}>{flash === "good" ? "Great job!" : "Not quite — next one!"}</span>
            </div>
          ) : (
            <span className="font-bold text-muted">
              Round {round + 1} of {ROUNDS}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function GameStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2" style={{ borderColor: color, background: color }}>
      <div className="py-1.5 text-xs font-black uppercase tracking-wide text-white">{label}</div>
      <div className="rounded-xl bg-surface py-4 text-2xl font-black" style={{ color }}>
        {value}
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
    <div className="flex items-end gap-3">
      <Mascot pose="wave" size={80} />
      <div className="relative mb-4 flex-1 rounded-2xl border-2 border-line bg-surface px-5 py-3 text-2xl font-black">
        <span className="absolute -left-[9px] bottom-4 h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-surface" />
        {text}
      </div>
      <button onClick={() => say(speech ?? text)} className="btn-primary mb-4 h-12 w-12 shrink-0 !p-0" aria-label="Say it again">
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
      <Prompt text={GAME_LINES.balloons(target)} />
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
              className="relative mx-auto h-20 w-16 rounded-[50%]"
              style={{ background: b.color }}
              aria-label="Balloon"
            >
              <span className="absolute left-3 top-3 h-5 w-3 -rotate-12 rounded-full bg-white/45" />
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45" style={{ background: b.color }} />
            </motion.button>
          ),
        )}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="text-2xl font-black">Popped: {popped.length}</span>
        <button className="btn-good h-14 px-8 text-lg" disabled={locked || popped.length === 0} onClick={() => onAnswer(popped.length === target)}>
          Check
        </button>
      </div>
    </div>
  );
}


function LetterHunt({ onAnswer, locked }: { onAnswer: (ok: boolean) => void; locked: boolean }) {
  const { target, options } = useMemo(() => {
    const letters = Object.keys(LETTER_WORDS);
    const target = pick(letters);
    const others = shuffle(letters.filter((l) => l !== target)).slice(0, 5);
    return { target, options: shuffle([target, ...others]) };
  }, []);
  return (
    <div>
      <Prompt text="Which letter is this?" speech={GAME_LINES.letter(target, LETTER_WORDS[target])} />
      <p className="mt-3 text-center font-semibold text-muted">Listen carefully, then tap it! (Hint: {LETTER_WORDS[target]})</p>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
        {options.map((l) => (
          <motion.button whileTap={{ scale: 0.9 }} key={l} disabled={locked} onClick={() => onAnswer(l === target)} className="aspect-square rounded-2xl border-2 border-b-4 border-line bg-surface transition hover:bg-surface-2 active:translate-y-[2px] active:border-b-2 text-6xl font-black">
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
      <Prompt text={GAME_LINES.pairs} />
      <p className="mt-2 text-center font-semibold text-muted">Moves: {moves} · match all in 8 moves for a star</p>
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
              className={clsx("grid aspect-square place-items-center rounded-2xl border-2 border-b-4 text-4xl", shown ? "border-line bg-surface" : "border-accent-shade bg-accent text-white")}
              aria-label={shown ? c : "Hidden card"}
            >
              {shown ? c : <span className="text-3xl font-black [transform:scaleX(-1)]">?</span>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

const SHAPES: { name: (typeof SHAPE_NAMES)[number]; svg: React.ReactNode }[] = [
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
      <Prompt text={GAME_LINES.shape(target.name)} />
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-5">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o.name} disabled={locked} onClick={() => onAnswer(o.name === target.name)} className="grid aspect-square place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface transition hover:bg-surface-2 active:translate-y-[2px] active:border-b-2 p-6" aria-label={o.name}>
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
      <Prompt text={`${a} ${op} ${b} = ?`} speech={GAME_LINES.sum(a, op as "+" | "−", b)} />
      <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-surface-2">
        <motion.div className="h-full rounded-full bg-good" animate={{ width: `${time * 10}%` }} transition={{ ease: "linear", duration: 1 }} />
      </div>
      <div className="mt-6 text-center text-5xl">
        {Array.from({ length: a }, () => "🍎").join("")}
        <span className="mx-2 font-bold">{op}</span>
        {Array.from({ length: b }, () => (op === "+" ? "🍏" : "❌")).join("")}
      </div>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o} disabled={locked} onClick={() => onAnswer(o === ans)} className="h-24 rounded-2xl border-2 border-b-4 border-line bg-surface transition hover:bg-surface-2 active:translate-y-[2px] active:border-b-2 text-5xl font-black">
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
      <Prompt text={GAME_LINES.odd} />
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-5">
        {options.map((o) => (
          <motion.button whileTap={{ scale: 0.9 }} key={o} disabled={locked} onClick={() => onAnswer(o === odd)} className="grid aspect-square place-items-center rounded-2xl border-2 border-b-4 border-line bg-surface transition hover:bg-surface-2 active:translate-y-[2px] active:border-b-2 text-7xl">
            {o}
          </motion.button>
        ))}
      </div>
      {locked && <p className="mt-4 text-center text-xl font-bold text-muted">The others are all {group}!</p>}
    </div>
  );
}
