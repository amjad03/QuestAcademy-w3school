"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleAlert, ListOrdered, Puzzle, RotateCcw, X } from "lucide-react";
import clsx from "clsx";
import type { Activity, Md as MdText } from "@/content/types";
import { Md, MdInline } from "@/components/Md";
import { useLearner } from "@/lib/store";
import { useT } from "@/i18n";

/* ---------------------------------------------------------------- */
/* Worked example                                                     */
/* ---------------------------------------------------------------- */

export function WorkedExample({ title, problem, steps, answer, kids }: { title?: string; problem: MdText; steps: MdText[]; answer: MdText; kids: boolean }) {
  const t = useT();
  const [shown, setShown] = useState(1);
  const all = shown >= steps.length;
  return (
    <section data-kit="example" className="rounded-2xl border-2 border-line bg-surface p-5">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
        <ListOrdered className="h-4 w-4" /> {title || t("learn.example.title", "Worked example")}
      </p>
      <Md text={problem} className={clsx("mt-2 font-semibold", kids && "text-xl")} />
      <ol className="mt-4 space-y-2.5">
        {steps.slice(0, shown).map((s, i) => (
          <motion.li key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-black text-accent">{i + 1}</span>
            <Md text={s} className="min-w-0 flex-1 leading-7" />
          </motion.li>
        ))}
      </ol>
      {all ? (
        <div className="mt-4 rounded-xl bg-good-soft px-4 py-3">
          <span className="font-black text-good-shade">{t("learn.example.answer", "Answer:")}</span> <MdInline text={answer} />
        </div>
      ) : (
        <button type="button" onClick={() => setShown((n) => n + 1)} className="btn-ghost mt-4 !py-2 text-sm">
          {t("learn.example.nextStep", "Show the next step")} ({shown}/{steps.length})
        </button>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Common mistake                                                     */
/* ---------------------------------------------------------------- */

export function CommonMistake({ wrong, right, why, kids }: { wrong: MdText; right: MdText; why: MdText; kids: boolean }) {
  const t = useT();
  return (
    <section data-kit="mistake" className="overflow-hidden rounded-2xl border-2 border-warn/50">
      <p className="flex items-center gap-2 bg-warn/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-warn-shade">
        <CircleAlert className="h-4 w-4" /> {t("learn.mistake.title", "Common mistake")}
      </p>
      <div className={clsx("space-y-3 p-5", kids && "text-lg")}>
        <div className="flex gap-2.5 rounded-xl bg-bad-soft/60 px-3 py-2.5">
          <X className="mt-1 h-5 w-5 shrink-0 text-bad" strokeWidth={3} aria-hidden />
          <p className="min-w-0 flex-1">
            <span className="mr-1 font-black text-bad-shade">{t("learn.mistake.wrong", "Wrong")}:</span>
            <MdInline text={wrong} />
          </p>
        </div>
        <div className="flex gap-2.5 rounded-xl bg-good-soft/60 px-3 py-2.5">
          <Check className="mt-1 h-5 w-5 shrink-0 text-good" strokeWidth={3} aria-hidden />
          <p className="min-w-0 flex-1 font-semibold">
            <span className="mr-1 font-black text-good-shade">{t("learn.mistake.right", "Right")}:</span>
            <MdInline text={right} />
          </p>
        </div>
        <Md text={why} className="text-[15px] leading-7 text-muted" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Guided activities                                                  */
/* ---------------------------------------------------------------- */

/** Deterministic shuffle (same order on server and client, different from the answer order). */
function stableShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  const out = items.map((x, i) => ({ x, k: Math.imul(h ^ (i + 1) * 2654435761, 2246822519) >>> 0 }));
  out.sort((a, b) => a.k - b.k);
  const shuffled = out.map((o) => o.x);
  // Never start in the correct order.
  return shuffled.every((x, i) => x === items[i]) && items.length > 1 ? [...shuffled.slice(1), shuffled[0]] : shuffled;
}

export function ActivityView({ activity, kids }: { activity: Activity; kids: boolean }) {
  const t = useT();
  const [run, setRun] = useState(0);
  const [finished, setFinished] = useState(false);
  const award = useLearner((s) => s.award);
  const finish = () => {
    setFinished(true);
    award(3, "Activity");
  };
  const again = () => {
    setFinished(false);
    setRun((r) => r + 1);
  };
  return (
    <section data-kit="activity" className="rounded-3xl border-2 border-b-4 border-line bg-surface p-5 sm:p-6" aria-label={t("learn.activity.title", "Try it")}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
        <Puzzle className="h-4 w-4" /> {t("learn.activity.title", "Try it")}
      </p>
      <p className={clsx("mt-2 font-black leading-snug", kids ? "text-xl" : "text-lg")}><MdInline text={activity.prompt} /></p>
      <div className="mt-4" key={run}>
        {activity.kind === "sort" && <SortActivity a={activity} kids={kids} onFinish={finish} />}
        {activity.kind === "order" && <OrderActivity a={activity} kids={kids} onFinish={finish} />}
        {activity.kind === "match" && <MatchActivity a={activity} kids={kids} onFinish={finish} />}
        {activity.kind === "reveal" && <RevealActivity a={activity} kids={kids} onFinish={finish} />}
      </div>
      <AnimatePresence>
        {finished && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border-2 border-good/50 bg-good-soft/60 p-4" aria-live="polite">
            <Md text={activity.explain} className={clsx("leading-7", kids && "text-lg")} />
            <button type="button" onClick={again} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-ink">
              <RotateCcw className="h-4 w-4" /> {t("learn.activity.again", "Do it again")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const choiceCls = (kids: boolean) => clsx("min-h-[52px] rounded-2xl border-2 border-line bg-surface px-4 py-3 text-left font-bold transition hover:border-accent active:scale-[0.99]", kids ? "text-lg" : "text-base");

function Feedback({ ok, text }: { ok: boolean; text: string }) {
  return (
    <p className={clsx("mt-3 flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-semibold", ok ? "bg-good-soft text-good-shade" : "bg-bad-soft text-bad-shade")} aria-live="polite">
      {ok ? <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} /> : <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={3} />}
      <span>
        <MdInline text={text} />
      </span>
    </p>
  );
}

/** One card at a time: tap the group it belongs to. */
function SortActivity({ a, kids, onFinish }: { a: Extract<Activity, { kind: "sort" }>; kids: boolean; onFinish: () => void }) {
  const t = useT();
  const items = useMemo(() => stableShuffle(a.items, a.prompt), [a]);
  const [i, setI] = useState(0);
  const [placed, setPlaced] = useState<number[][]>(() => a.groups.map(() => []));
  const [fb, setFb] = useState<{ ok: boolean; text: string } | null>(null);
  const item = items[i];
  const pick = (g: number) => {
    if (!item) return;
    if (g !== item.group) return setFb({ ok: false, text: item.hint ?? t("learn.activity.notThatOne", "Not that one — look again and try another group.") });
    setPlaced((p) => p.map((list, k) => (k === g ? [...list, a.items.indexOf(item)] : list)));
    setFb({ ok: true, text: t("learn.activity.right", "Right!") });
    if (i + 1 >= items.length) onFinish();
    setI(i + 1);
  };
  return (
    <div>
      {item ? (
        <>
          <p className="text-xs font-bold text-muted">
            {i + 1} / {items.length}
          </p>
          <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className={clsx("mt-1 rounded-2xl bg-accent-soft px-5 py-4 text-center font-black", kids ? "text-2xl" : "text-xl")}>
            <MdInline text={item.text} />
          </motion.div>
          <div className={clsx("mt-3 grid gap-2", a.groups.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3")}>
            {a.groups.map((g, k) => (
              <button key={k} type="button" onClick={() => pick(k)} className={clsx(choiceCls(kids), "text-center")}>
                <MdInline text={g} />
              </button>
            ))}
          </div>
          {fb && <Feedback {...fb} />}
        </>
      ) : null}
      {/* What has been sorted so far */}
      <div className={clsx("mt-4 grid gap-3", a.groups.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3")}>
        {a.groups.map((g, k) => (
          <div key={k} className="rounded-xl border border-line bg-surface-2/50 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-muted">
              <MdInline text={g} />
            </p>
            <ul className="mt-1.5 space-y-1 text-sm font-semibold">
              {placed[k].map((idx) => (
                <li key={idx}>
                  <MdInline text={a.items[idx].text} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Tap the items in the right order. */
function OrderActivity({ a, kids, onFinish }: { a: Extract<Activity, { kind: "order" }>; kids: boolean; onFinish: () => void }) {
  const t = useT();
  const shuffled = useMemo(() => stableShuffle(a.items, a.prompt), [a]);
  const [done, setDone] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const tap = (x: string) => {
    if (x === a.items[done.length]) {
      const next = [...done, x];
      setDone(next);
      setWrong(null);
      if (next.length === a.items.length) onFinish();
    } else setWrong(x);
  };
  return (
    <div>
      <ol className="space-y-1.5">
        {a.items.map((_, k) => (
          <li key={k} className={clsx("flex min-h-[44px] items-center gap-3 rounded-xl border px-3 py-2", done[k] ? "border-good/50 bg-good-soft/50" : "border-dashed border-line")}>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-2 text-xs font-black">{k + 1}</span>
            <span className="font-semibold">{done[k] ? <MdInline text={done[k]} /> : null}</span>
          </li>
        ))}
      </ol>
      {done.length < a.items.length && (
        <>
          <p className="mt-4 text-sm font-semibold text-muted">{t("learn.activity.tapNext", "Tap what comes next:")}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {shuffled
              .filter((x) => !done.includes(x))
              .map((x) => (
                <motion.button key={x} type="button" onClick={() => tap(x)} animate={wrong === x ? { x: [0, -6, 6, -4, 0] } : { x: 0 }} className={choiceCls(kids)}>
                  <MdInline text={x} />
                </motion.button>
              ))}
          </div>
          {wrong && <Feedback ok={false} text={t("learn.activity.notNext", "That comes later. Which one happens first?")} />}
        </>
      )}
    </div>
  );
}

/** One item at a time: pick its partner. */
function MatchActivity({ a, kids, onFinish }: { a: Extract<Activity, { kind: "match" }>; kids: boolean; onFinish: () => void }) {
  const t = useT();
  const order = useMemo(() => stableShuffle(a.pairs, a.prompt), [a]);
  const rights = useMemo(() => stableShuffle(a.pairs.map((p) => p[1]), a.prompt + "r"), [a]);
  const [i, setI] = useState(0);
  const [matched, setMatched] = useState<[string, string][]>([]);
  const [fb, setFb] = useState<{ ok: boolean; text: string } | null>(null);
  const cur = order[i];
  const pick = (r: string) => {
    if (!cur) return;
    if (r !== cur[1]) return setFb({ ok: false, text: t("learn.activity.notAPair", "Those don't go together. Try another.") });
    const next = [...matched, cur];
    setMatched(next);
    setFb({ ok: true, text: t("learn.activity.right", "Right!") });
    if (next.length === order.length) onFinish();
    setI(i + 1);
  };
  return (
    <div>
      {cur && (
        <>
          <p className="text-xs font-bold text-muted">
            {i + 1} / {order.length}
          </p>
          <div className={clsx("mt-1 rounded-2xl bg-accent-soft px-5 py-4 text-center font-black", kids ? "text-2xl" : "text-xl")}>
            <MdInline text={cur[0]} />
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {rights
              .filter((r) => !matched.some((m) => m[1] === r))
              .map((r) => (
                <button key={r} type="button" onClick={() => pick(r)} className={choiceCls(kids)}>
                  <MdInline text={r} />
                </button>
              ))}
          </div>
          {fb && <Feedback {...fb} />}
        </>
      )}
      {matched.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm">
          {matched.map(([l, r]) => (
            <li key={l} className="flex flex-wrap items-center gap-2 rounded-xl bg-surface-2/60 px-3 py-2 font-semibold">
              <MdInline text={l} /> <span className="text-muted">→</span> <MdInline text={r} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Predict first, then see why. */
function RevealActivity({ a, kids, onFinish }: { a: Extract<Activity, { kind: "reveal" }>; kids: boolean; onFinish: () => void }) {
  const t = useT();
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div>
      {a.emoji && (
        <p className="mb-3 text-center text-5xl leading-none" aria-hidden>
          {a.emoji}
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {a.options.map((o, k) => (
          <button
            key={k}
            type="button"
            disabled={pick !== null}
            onClick={() => {
              setPick(k);
              onFinish();
            }}
            className={clsx(choiceCls(kids), pick !== null && k === a.answer && "!border-good bg-good-soft", pick === k && k !== a.answer && "!border-bad bg-bad-soft")}
          >
            <MdInline text={o} />
          </button>
        ))}
      </div>
      {pick !== null && <Feedback ok={pick === a.answer} text={pick === a.answer ? t("mission.guessRight", "You guessed right!") : pick === a.trap ? t("mission.guessTrap", "Many people think that too! Here’s what really happens.") : t("mission.guessWrong", "Not quite — here’s what really happens.")} />}
    </div>
  );
}
