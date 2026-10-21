"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, GraduationCap, Laptop, Sparkles, Target, Baby } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import type { Stage, WorldId } from "@/content/types";
import { dailyGoals, stageById, worlds } from "@/content/worlds";
import { useLearner } from "@/lib/store";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { sfx } from "@/lib/sound";
import { MODES, modeForAge, modeForStage, type ModeId } from "@/lib/modes";
import { ModePicker } from "@/components/modes/ModePicker";

const STEPS = ["age", "mode", "category", "course", "goal", "name", "done"] as const;

const AGES = [
  { label: "5 or under", age: 5 },
  { label: "6–8", age: 7 },
  { label: "9–10", age: 10 },
  { label: "11–12", age: 12 },
  { label: "13–14", age: 14 },
  { label: "15–16", age: 16 },
  { label: "17–18", age: 18 },
  { label: "19–24", age: 21 },
  { label: "25 or over", age: 30 },
];

function stageFromAge(age: number, category: WorldId | null): Stage {
  if (age <= 5) return "preprimary";
  if (age <= 10) return "primary";
  if (age <= 14) return "middle";
  if (age <= 18) return category === "exam" ? "aspirant" : "secondary";
  if (age <= 24) return "ug";
  return "lifelong";
}

const MODE_CATEGORY: Record<ModeId, WorldId> = { explore: "kids", adventure: "school", focus: "school", mastery: "campus", professional: "code" };

const CATEGORY_ICON: Record<WorldId, typeof Baby> = { kids: Baby, school: GraduationCap, exam: Target, code: Laptop, campus: Sparkles };
const CATEGORY_COLOR: Record<WorldId, string> = { kids: "#EC4899", school: "#2F6BFF", exam: "#FF4B4B", code: "#334155", campus: "#7C4DFF" };

const PROMPT: Record<(typeof STEPS)[number], string> = {
  age: "Hi there! I’m Questy. How old are you?",
  mode: "Here’s the experience I picked for you. You can choose another any time.",
  category: "Hi there! I’m Questy. What would you like to learn?",
  course: "Great choice! Which course should we start with?",
  goal: "What’s your daily learning goal?",
  name: "Last thing — what should I call you?",
  done: "You’re all set! Let’s start your first lesson.",
};

export function Onboarding() {
  const params = useSearchParams();
  const router = useRouter();
  const catalog = useCatalog();
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);

  const stageParam = params.get("stage") as Stage | null;
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<WorldId | null>(stageParam && stageById[stageParam] ? stageById[stageParam].world : null);
  const [course, setCourse] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(profile.age ?? null);
  const [mode, setMode] = useState<ModeId | null>(stageParam && stageById[stageParam] ? modeForStage(stageParam) : null);
  const [goal, setGoal] = useState(profile.dailyGoal || 50);
  const [name, setName] = useState(profile.name);

  const id = STEPS[step];
  const recommended = age !== null ? modeForAge(age) : undefined;
  const canNext = id === "age" ? age !== null : id === "mode" ? Boolean(mode) : id === "category" ? Boolean(category) : id === "course" ? Boolean(course) : true;
  const courses = catalog.filter((c) => c.world === category);

  const next = () => {
    if (!canNext) return;
    sfx("tap");
    if (id === "age" && age !== null && !mode) setMode(modeForAge(age));
    if (id === "mode" && mode && !category) setCategory(MODE_CATEGORY[mode]);
    if (id === "name") {
      const m = mode ?? modeForAge(age ?? 12);
      const stage = stageParam && stageById[stageParam] ? stageParam : stageFromAge(age ?? 12, category);
      setProfile({ name: name.trim() || "Learner", age, stage, mode: m, worlds: category ? [category] : [], course, dailyGoal: goal, onboarded: true, style: profile.style });
      useLearner.getState().setSettings({ sound: MODES[m].sound });
      sfx("fanfare");
    }
    if (id === "done") return router.push("/learn");
    setStep((s) => s + 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      {/* top bar */}
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-4 px-5 pt-6">
        <button onClick={() => (step ? setStep(step - 1) : router.push("/"))} className="grid h-10 w-10 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label="Back">
          <ArrowLeft className="h-6 w-6" strokeWidth={2.6} />
        </button>
        <ProgressBar value={step / (STEPS.length - 1)} height={16} />
      </div>

      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-5 py-10">
        {/* mascot prompt */}
        <div className="flex items-end gap-4">
          <Mascot pose={id === "done" ? "cheer" : id === "goal" ? "think" : "wave"} size={id === "done" ? 120 : 96} />
          <motion.div key={id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="relative mb-6 rounded-2xl border-2 border-line bg-surface px-5 py-3.5 text-lg font-bold">
            <span className="absolute -left-[9px] bottom-4 h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-surface" />
            {PROMPT[id]}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }} className="mt-8">
            {id === "age" && (
              <div className="grid grid-cols-3 gap-3">
                {AGES.map((a) => (
                  <Option key={a.label} active={age === a.age} onClick={() => { setAge(a.age); setMode(null); }}>
                    <span className="w-full text-center text-lg font-extrabold">{a.label}</span>
                  </Option>
                ))}
              </div>
            )}

            {id === "mode" && <ModePicker value={mode} recommended={recommended} onChange={(m) => { setMode(m); setCategory(MODE_CATEGORY[m]); sfx("tap"); }} />}

            {id === "category" && (
              <div className="grid gap-3">
                {worlds.map((w) => {
                  const I = CATEGORY_ICON[w.id];
                  return (
                    <Option key={w.id} active={category === w.id} onClick={() => { setCategory(w.id); setCourse(null); }}>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: CATEGORY_COLOR[w.id] }}>
                        <I className="h-6 w-6" strokeWidth={2.5} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-lg font-extrabold">{w.name}</span>
                        <span className="block text-sm font-semibold text-muted">{w.tagline}</span>
                      </span>
                    </Option>
                  );
                })}
              </div>
            )}

            {id === "course" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {courses.map((c) => (
                  <Option key={c.slug} active={course === c.slug} onClick={() => setCourse(c.slug)}>
                    <CourseIcon slug={c.slug} size={44} />
                    <span className="min-w-0">
                      <span className="block truncate font-extrabold">{c.title}</span>
                      <span className="block truncate text-sm font-semibold text-muted">{c.levels.slice(0, 2).join(" · ")}</span>
                    </span>
                  </Option>
                ))}
              </div>
            )}

            {id === "goal" && (
              <div className="card divide-y-2 divide-line overflow-hidden">
                {dailyGoals.map((g) => (
                  <button key={g.xp} onClick={() => { setGoal(g.xp); sfx("tap"); }} className={clsx("flex w-full items-center justify-between px-5 py-4 text-left transition", goal === g.xp ? "bg-accent-soft" : "hover:bg-surface-2")}>
                    <span className={clsx("text-lg font-extrabold", goal === g.xp && "text-accent")}>{g.label}</span>
                    <span className={clsx("font-bold", goal === g.xp ? "text-accent" : "text-muted")}>{g.hint}</span>
                  </button>
                ))}
              </div>
            )}

            {id === "name" && (
              <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && next()} placeholder="Your name" maxLength={30} className="input py-4 text-xl" />
            )}

            {id === "done" && (
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Your course", catalog.find((c) => c.slug === course)?.title ?? "—"],
                  ["Experience", mode ? `${MODES[mode].name} mode` : "—"],
                  ["Daily goal", `${goal} XP`],
                ].map(([a, b]) => (
                  <div key={a} className="card p-4">
                    <div className="eyebrow">{a}</div>
                    <div className="mt-1 truncate text-lg font-black">{b}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* bottom bar */}
      <div className="border-t-2 border-line">
        <div className="mx-auto flex w-full max-w-[1000px] justify-end px-5 py-5">
          <button onClick={next} disabled={!canNext} className="btn-primary w-full sm:w-auto sm:min-w-[160px]">
            {id === "done" ? "Start learning" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Option({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={() => {
        onClick();
        sfx("tap");
      }}
      className={clsx(
        "relative flex items-center gap-4 rounded-2xl border-2 border-b-4 p-4 text-left transition active:translate-y-[2px] active:border-b-2",
        active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
      )}
    >
      {children}
      {active && (
        <span className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
          <Check className="h-4 w-4" strokeWidth={3.5} />
        </span>
      )}
    </button>
  );
}
