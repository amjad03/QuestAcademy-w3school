"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, CalendarClock, Sparkles } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { dayKey, reviewCard } from "@/lib/gamification";
import { useHydrated } from "@/components/providers";
import { FlipCard } from "@/components/learn/Flashcards";
import { MdInline } from "@/components/Md";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";

type CardData = { front: string; back: string; lesson: string; href: string; subject: string; icon: string; world: string };

const GRADES = [
  { g: 0 as const, label: "Again", cls: "bg-bad/15 text-bad hover:bg-bad/25", key: "1" },
  { g: 1 as const, label: "Hard", cls: "bg-warn/15 text-warn hover:bg-warn/25", key: "2" },
  { g: 2 as const, label: "Good", cls: "bg-good/15 text-good hover:bg-good/25", key: "3" },
  { g: 3 as const, label: "Easy", cls: "bg-accent/15 text-accent hover:bg-accent/25", key: "4" },
];

export function Review() {
  const hydrated = useHydrated();
  const cards = useLearner((s) => s.cards);
  const gradeCard = useLearner((s) => s.gradeCard);
  const [data, setData] = useState<Record<string, CardData> | null>(null);
  const [queue, setQueue] = useState<string[] | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  useEffect(() => {
    fetch("/flashcards.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({}));
  }, []);

  const today = dayKey();
  const ids = useMemo(() => Object.keys(cards).filter((id) => data?.[id]), [cards, data]);
  const due = ids.filter((id) => cards[id].due <= today);
  const mastered = ids.filter((id) => cards[id].interval >= 21).length;
  const forecast = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const k = dayKey(d);
      return { k, label: i === 0 ? "Today" : d.toLocaleDateString(undefined, { weekday: "short" }), n: ids.filter((id) => (i === 0 ? cards[id].due <= k : cards[id].due === k)).length };
    });
  }, [ids, cards]);

  const start = (list: string[]) => {
    setQueue([...list].sort(() => Math.random() - 0.5));
    setReviewed(0);
    setFlipped(false);
  };

  const current = queue?.[0];
  const grade = (g: 0 | 1 | 2 | 3) => {
    if (!current) return;
    sfx(g === 0 ? "wrong" : "correct");
    gradeCard(current, g);
    setReviewed((r) => r + 1);
    setFlipped(false);
    setQueue((q) => {
      if (!q) return q;
      const rest = q.slice(1);
      // forgotten cards come back at the end of this session
      const next = g === 0 ? [...rest, current] : rest;
      if (!next.length) burst();
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!current) return;
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      const g = GRADES.find((x) => x.key === e.key);
      if (g && flipped) grade(g.g);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!hydrated || !data) return <div className="mx-auto max-w-3xl px-4 py-12"><div className="h-80 animate-pulse rounded-4xl bg-surface-2" /></div>;

  if (queue && current) {
    const c = data[current];
    return (
      <div data-world={c.world} className="min-h-[calc(100vh-4rem)] bg-bg text-ink">
        <div className="mx-auto max-w-2xl px-4 py-10">
          <div className="flex items-center justify-between text-sm text-muted">
            <button onClick={() => setQueue(null)} className="hover:text-ink">
              ← End session
            </button>
            <span>
              {reviewed} reviewed · {queue.length} left
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full bg-gradient-to-r from-accent to-accent-2 transition-all" style={{ width: `${(reviewed / (reviewed + queue.length)) * 100}%` }} />
          </div>
          <Link href={c.href} className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
            {c.icon} {c.subject} · <MdInline text={c.lesson} />
          </Link>
          <div className="mt-3">
            <FlipCard card={c} flipped={flipped} onFlip={() => { sfx("flip"); setFlipped((f) => !f); }} kids={c.world === "kids"} footer="Tap or press space to flip" />
          </div>
          <AnimatePresence mode="wait">
            {flipped ? (
              <motion.div key="grades" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <p className="mb-3 text-center text-sm text-muted">How well did you remember it?</p>
                <div className="grid grid-cols-4 gap-2">
                  {GRADES.map(({ g, label, cls, key }) => {
                    const next = reviewCard(cards[current], g);
                    return (
                      <button key={g} onClick={() => grade(g)} className={clsx("rounded-2xl px-2 py-3 text-sm font-bold transition", cls)}>
                        {label}
                        <span className="block text-[11px] font-medium opacity-80">
                          {next.interval}d · <kbd>{key}</kbd>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div key="flip" className="mt-6 flex justify-center">
                <button className="btn-pop px-10" onClick={() => setFlipped(true)}>
                  Show answer
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/15 text-violet-500">
          <Brain className="h-7 w-7" />
        </span>
        <div>
          <h1 className="font-display text-4xl font-bold">Spaced review</h1>
          <p className="text-muted">Science-backed memory: review cards right before you’d forget them.</p>
        </div>
      </div>

      {queue && !current && (
        <div className="card mt-8 p-8 text-center">
          <div className="text-6xl">🧠✨</div>
          <h2 className="mt-3 font-display text-2xl font-bold">Session complete — {reviewed} cards strengthened!</h2>
          <p className="mt-1 text-muted">Your brain just did push-ups. See you at the next review.</p>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Due now", due.length, "text-accent"],
          ["In your deck", ids.length, ""],
          ["Mastered (21d+)", mastered, "text-good"],
        ].map(([l, n, c]) => (
          <div key={l as string} className="card p-5">
            <div className={clsx("font-display text-4xl font-bold", c as string)}>{n as number}</div>
            <div className="text-sm text-muted">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="btn-pop px-8 py-3 text-base" disabled={!due.length} onClick={() => start(due)}>
          <Sparkles className="h-5 w-5" /> {due.length ? `Review ${due.length} due card${due.length === 1 ? "" : "s"}` : "Nothing due right now"}
        </button>
        {ids.length > 0 && (
          <button className="btn-ghost" onClick={() => start(ids.slice().sort(() => Math.random() - 0.5).slice(0, 15))}>
            Cram 15 random cards
          </button>
        )}
      </div>

      <div className="card mt-8 p-6">
        <div className="flex items-center gap-2 font-semibold">
          <CalendarClock className="h-5 w-5 text-muted" /> 7-day forecast
        </div>
        <div className="mt-5 flex h-32 items-end gap-3">
          {forecast.map((f) => {
            const max = Math.max(1, ...forecast.map((x) => x.n));
            return (
              <div key={f.k} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-xs font-bold">{f.n}</span>
                <div className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-violet-500 to-fuchsia-400" style={{ height: `${Math.max(4, (f.n / max) * 100)}%` }} />
                <span className="text-[11px] text-muted">{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {ids.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-line p-8 text-center text-muted">
          Your deck is empty. Every lesson you complete adds its flashcards here automatically.{" "}
          <Link href="/dashboard" className="font-semibold text-accent">
            Go learn something →
          </Link>
        </div>
      )}
    </div>
  );
}
