"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Stage, WorldId } from "@/content/types";
import { dailyGoals, learningStyles, stageById, stages, worlds, type LearningStyle } from "@/content/worlds";
import { AVATARS } from "@/lib/gamification";
import { useLearner } from "@/lib/store";
import { Logo } from "@/components/shell/Logo";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";

const STEPS = ["you", "stage", "worlds", "style", "goal", "launch"] as const;

export function Onboarding() {
  const params = useSearchParams();
  const router = useRouter();
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);

  const initialStage = (params.get("stage") as Stage | null) ?? profile.stage;
  const [step, setStep] = useState(0);
  const [name, setName] = useState(profile.name);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [stage, setStage] = useState<Stage | null>(initialStage && stageById[initialStage] ? initialStage : null);
  const [picked, setPicked] = useState<WorldId[]>(profile.worlds.length ? profile.worlds : initialStage && stageById[initialStage] ? [stageById[initialStage].world] : []);
  const [style, setStyle] = useState<LearningStyle>(profile.style);
  const [goal, setGoal] = useState(profile.dailyGoal);

  const id = STEPS[step];
  const canNext = id === "you" ? name.trim().length > 0 : id === "stage" ? Boolean(stage) : id === "worlds" ? picked.length > 0 : true;

  const next = () => {
    sfx("tap");
    if (id === "stage" && stage && !picked.length) setPicked([stageById[stage].world]);
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  useEffect(() => {
    if (id !== "launch") return;
    setProfile({ name: name.trim(), avatar, stage, worlds: picked, style, dailyGoal: goal, onboarded: true });
    burst({ big: true });
    sfx("fanfare");
    const t = setTimeout(() => router.push(picked[0] === "kids" ? "/kids" : "/dashboard"), 2600);
    return () => clearTimeout(t);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const kid = stage === "preprimary" || stage === "primary";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="dot-bg absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Link href="/" className="text-sm text-muted hover:text-ink">
            Skip for now
          </Link>
        </div>

        {id !== "launch" && (
          <div className="mt-8 flex gap-1.5" aria-label={`Step ${step + 1} of ${STEPS.length - 1}`}>
            {STEPS.slice(0, -1).map((s, i) => (
              <div key={s} className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                <motion.div className="h-full bg-gradient-to-r from-accent to-accent-2" animate={{ width: i <= step ? "100%" : "0%" }} />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center py-10">
          <AnimatePresence mode="wait">
            <motion.div key={id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.25 }}>
              {id === "you" && (
                <div>
                  <Title emoji="👋" title="Hey there! What should we call you?" sub="Pick a buddy too — you can unlock more in the shop." />
                  <input
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && canNext && next()}
                    placeholder="Your name"
                    className="input mt-8 h-16 text-center text-2xl font-semibold"
                    maxLength={30}
                  />
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {AVATARS.filter((a) => a.price === 0).map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          setAvatar(a.emoji);
                          sfx("pop");
                        }}
                        className={clsx("grid h-16 w-16 place-items-center rounded-full border-2 text-3xl transition hover:scale-110", avatar === a.emoji ? "border-accent bg-accent/10" : "border-line bg-surface")}
                        aria-label={`Avatar ${a.id}`}
                      >
                        {a.emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {id === "stage" && (
                <div>
                  <Title emoji="🎒" title={`Nice to meet you, ${name.split(" ")[0]}! Where are you in your journey?`} sub="This tunes the whole academy to your level." />
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {stages.map((s) => (
                      <Choice key={s.id} active={stage === s.id} onClick={() => setStage(s.id)}>
                        <span className="text-4xl">{s.emoji}</span>
                        <span className="font-semibold">{s.label}</span>
                        <span className="text-xs text-muted">{s.hint}</span>
                      </Choice>
                    ))}
                  </div>
                </div>
              )}

              {id === "worlds" && (
                <div>
                  <Title emoji="🗺️" title="Which worlds do you want to explore?" sub="Pick as many as you like. The first one becomes home." />
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {worlds.map((w) => {
                      const on = picked.includes(w.id);
                      return (
                        <button
                          key={w.id}
                          onClick={() => {
                            sfx("tap");
                            setPicked((p) => (on ? p.filter((x) => x !== w.id) : [...p, w.id]));
                          }}
                          className={clsx("card relative flex items-center gap-4 p-4 text-left transition hover:-translate-y-0.5", on && "!border-accent ring-4 ring-accent/15")}
                        >
                          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl" style={{ background: `linear-gradient(135deg, ${w.colors[0]}, ${w.colors[1]})` }}>
                            {w.emoji}
                          </span>
                          <span>
                            <span className="block font-semibold">{w.name}</span>
                            <span className="text-sm text-muted">{w.tagline}</span>
                          </span>
                          {on && (
                            <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
                              {picked.indexOf(w.id) === 0 ? <span className="text-[10px] font-bold">1</span> : <Check className="h-4 w-4" />}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {id === "style" && (
                <div>
                  <Title emoji="🧠" title="How do you like to learn?" sub="We’ll open every lesson in your favourite mode. Switch anytime." />
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {learningStyles.map((s) => (
                      <Choice key={s.id} active={style === s.id} onClick={() => setStyle(s.id)}>
                        <span className="text-4xl">{s.emoji}</span>
                        <span className="font-semibold">{s.label}</span>
                        <span className="text-xs text-muted">{s.hint}</span>
                      </Choice>
                    ))}
                  </div>
                </div>
              )}

              {id === "goal" && (
                <div>
                  <Title emoji="🎯" title="Pick a daily goal" sub={kid ? "Little and often is the magic recipe!" : "Consistency beats intensity. You can change this later."} />
                  <div className="mt-8 space-y-3">
                    {dailyGoals.map((g) => (
                      <button
                        key={g.xp}
                        onClick={() => {
                          setGoal(g.xp);
                          sfx("tap");
                        }}
                        className={clsx("card flex w-full items-center gap-4 p-4 text-left transition", goal === g.xp && "!border-accent ring-4 ring-accent/15")}
                      >
                        <span className="text-3xl">{g.emoji}</span>
                        <span className="flex-1">
                          <span className="block font-semibold">{g.label}</span>
                          <span className="text-sm text-muted">{g.hint}</span>
                        </span>
                        <span className="font-mono text-sm font-bold text-accent">{g.xp} XP/day</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {id === "launch" && (
                <div className="text-center">
                  <motion.div className="text-8xl" animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                    {avatar}
                  </motion.div>
                  <h1 className="mt-6 font-display text-4xl font-bold">Your quest map is ready, {name.split(" ")[0]}!</h1>
                  <p className="mt-3 text-muted">+50 welcome coins · 1 streak freeze · {worlds.find((w) => w.id === picked[0])?.name} unlocked</p>
                  <div className="mx-auto mt-8 h-2 w-64 overflow-hidden rounded-full bg-surface-2">
                    <motion.div className="h-full bg-gradient-to-r from-accent to-accent-2" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.4 }} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {id !== "launch" && (
          <div className="flex items-center justify-between pb-4">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} className={clsx("btn-ghost", step === 0 && "invisible")}>
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button onClick={next} disabled={!canNext} className="btn-pop px-8 py-3 text-base">
              {id === "goal" ? "Launch my quest" : "Continue"} <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Title({ emoji, title, sub }: { emoji: string; title: string; sub: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl">{emoji}</div>
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-2 text-muted">{sub}</p>
    </div>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={() => {
        onClick();
        sfx("tap");
      }}
      className={clsx("card flex flex-col items-center gap-1.5 p-5 text-center transition hover:-translate-y-0.5", active && "!border-accent ring-4 ring-accent/15")}
    >
      {children}
    </button>
  );
}
