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
import { useT } from "@/i18n";
import { SYLLABI } from "@/content/syllabus";
import type { LearningStyle } from "@/content/worlds";
import { classForProfile } from "@/lib/useMyClass";
import { goalXpForMinutes, hasExamStep, isYoungLevel, type PersonalProfile, type StudyStyle } from "@/lib/personalise";
import { AboutFields, ExamFields, GoalFields, HabitsFields, LevelsFields, ParentFields, WeakFields } from "@/components/personal/PersonalFields";
import { Diagnostic } from "@/components/personal/Diagnostic";
import { ClassPicker, boardsFor, choiceFromProfile, choiceForLevel, levelForAge, stageForLevel, type ClassChoice } from "@/components/class/ClassPicker";

const STEPS = ["age", "mode", "category", "course", "goal", "name", "done"] as const;
/** School-age learners pick their class (board and subjects) instead of a category and a course. */
const SCHOOL_STEPS = ["age", "mode", "class", "about", "exam", "target", "levels", "habits", "weak", "diagnostic", "parent", "done"] as const;
type StepId = (typeof STEPS)[number] | (typeof SCHOOL_STEPS)[number];

/** The school flow adapts: LKG–5 is short and parent-facing; the exam step is for Classes 9–12; the diagnostic follows weak subjects. */
function schoolSteps(level: string | null, weak: number, completing: boolean): StepId[] {
  const young = isYoungLevel(level);
  return SCHOOL_STEPS.filter((s) => {
    if (completing && (s === "age" || s === "mode")) return false;
    if (young) return !["exam", "target", "levels", "weak", "diagnostic"].includes(s);
    if (s === "exam") return hasExamStep(level);
    if (s === "diagnostic") return weak > 0;
    return true;
  });
}

const STYLE_FROM: Record<string, StudyStyle> = { visual: "video", listening: "video", reading: "reading", doing: "practice" };
const STYLE_TO: Record<StudyStyle, LearningStyle> = { video: "visual", reading: "reading", practice: "doing" };

/** Ages for children; stages for adults (age alone can't tell college from postgraduate). */
const AGES: { label: string; age: number; mode?: ModeId; stage?: Stage }[] = [
  { label: "3–5", age: 4 },
  { label: "6–8", age: 7 },
  { label: "9–10", age: 10 },
  { label: "11–12", age: 12 },
  { label: "13–14", age: 14 },
  { label: "15–16", age: 16 },
  { label: "17–18", age: 18 },
  { label: "In college", age: 20, mode: "mastery", stage: "ug" },
  { label: "Postgraduate or research", age: 24, mode: "research", stage: "pg" },
  { label: "Working or lifelong learner", age: 30, mode: "professional", stage: "lifelong" },
];

function stageFromAge(age: number, category: WorldId | null): Stage {
  if (age <= 5) return "preprimary";
  if (age <= 10) return "primary";
  if (age <= 14) return "middle";
  if (age <= 18) return category === "exam" ? "aspirant" : "secondary";
  if (age <= 22) return "ug";
  return "lifelong";
}

const MODE_CATEGORY: Record<ModeId, WorldId> = { sprout: "kids", research: "campus", explore: "kids", adventure: "school", focus: "school", mastery: "campus", professional: "code" };

const CATEGORY_ICON: Record<WorldId, typeof Baby> = { kids: Baby, school: GraduationCap, exam: Target, code: Laptop, campus: Sparkles };
const CATEGORY_COLOR: Record<WorldId, string> = { kids: "#EC4899", school: "#2F6BFF", exam: "#FF4B4B", code: "#334155", campus: "#7C4DFF" };

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
  // "Complete your profile" for learners who onboarded before these questions existed.
  const completing = params.get("complete") === "1" && profile.onboarded;
  const [classChoice, setClassChoice] = useState<ClassChoice>(() => (completing ? choiceFromProfile(profile) : choiceForLevel(levelForAge(profile.age ?? null))));
  const [personal, setPersonal] = useState<PersonalProfile>(() => ({ goal: "80", dailyMinutes: 20, timeOfDay: "evening", studyStyle: STYLE_FROM[profile.style] ?? "video", ...(profile.personal ?? {}) }));
  const patch = (p: Partial<PersonalProfile>) => setPersonal((x) => ({ ...x, ...p }));
  const t = useT();
  const young = isYoungLevel(classChoice.level);

  const PROMPT: Record<StepId, string> = {
    about: young ? t("onboard.prompt.aboutParent", "Hello! Tell me a little about your child.") : t("onboard.prompt.about", "Nice to meet you! Tell me a little about yourself."),
    exam: t("onboard.prompt.exam", "Are you preparing for a big exam? I’ll plan the weeks up to it."),
    target: t("onboard.prompt.target", "What are you aiming for this year?"),
    levels: t("onboard.prompt.levels", "How are you doing in each subject right now? Recent marks help too."),
    habits: young ? t("onboard.prompt.habitsParent", "When does your child usually study, and for how long?") : t("onboard.prompt.habits", "How do you like to study?"),
    weak: t("onboard.prompt.weak", "Which subjects or chapters feel hard? I’ll give them extra time."),
    diagnostic: t("onboard.prompt.diagnostic", "A few quick questions so I know where to start. No pressure!"),
    parent: young ? t("onboard.prompt.parentParent", "Want progress updates? Add your contact (optional).") : t("onboard.prompt.parent", "Add a parent’s contact for progress updates (optional)."),
    class: t("onboard.prompt.class", "Which class are you in? I’ll show you only what you need."),
    age: t("onboard.prompt.age", "Hi there! I’m Questy. How old are you — or where are you in your studies?"),
    mode: t("onboard.prompt.mode", "Here’s the experience I picked for you. You can choose another any time."),
    category: t("onboard.prompt.category", "Hi there! I’m Questy. What would you like to learn?"),
    course: t("onboard.prompt.course", "Great choice! Which course should we start with?"),
    goal: t("onboard.prompt.goal", "What’s your daily learning goal?"),
    name: t("onboard.prompt.name", "Last thing — what should I call you?"),
    done: t("onboard.prompt.done", "You’re all set! Let’s start your first lesson."),
  };
  const ageLabel: Record<number, string> = {
    20: t("onboard.age.college", "In college"),
    24: t("onboard.age.postgrad", "Postgraduate or research"),
    30: t("onboard.age.working", "Working or lifelong learner"),
  };
  const worldText: Record<string, { name: string; tagline: string }> = {
    kids: { name: t("shell.world.kids", "Early learning"), tagline: t("onboard.world.kidsTagline", "Letters, numbers and the world — read aloud and full of play.") },
    school: { name: t("shell.world.school", "School"), tagline: t("onboard.world.schoolTagline", "Maths, science, English and social studies with interactive labs.") },
    exam: { name: t("shell.world.exam", "Exam prep"), tagline: t("onboard.world.examTagline", "Concepts, chapter drills and full mock tests in the real exam format.") },
    code: { name: t("shell.world.code", "Coding"), tagline: t("onboard.world.codeTagline", "HTML, CSS, JavaScript, Python and SQL with live code on every page.") },
    campus: { name: t("shell.world.campus", "College"), tagline: t("onboard.world.campusTagline", "University courses in CS, AI, engineering, medicine, finance and more.") },
  };
  const goalText: Record<number, { label: string; hint: string }> = {
    20: { label: t("onboard.goal.casual", "Casual"), hint: t("onboard.goal.casualHint", "5 min / day") },
    50: { label: t("onboard.goal.regular", "Regular"), hint: t("onboard.goal.regularHint", "10 min / day") },
    100: { label: t("onboard.goal.serious", "Serious"), hint: t("onboard.goal.seriousHint", "20 min / day") },
    200: { label: t("onboard.goal.beast", "Beast mode"), hint: t("onboard.goal.beastHint", "40+ min / day") },
  };
  const modeName: Record<ModeId, string> = {
    sprout: t("shell.mode.sprout", "Sprout"),
    explore: t("shell.mode.explore", "Explore"),
    adventure: t("shell.mode.adventure", "Adventure"),
    focus: t("shell.mode.focus", "Focus"),
    mastery: t("shell.mode.mastery", "Mastery"),
    research: t("shell.mode.research", "Research"),
    professional: t("shell.mode.professional", "Professional"),
  };

  const choice = AGES.find((a) => a.age === age);
  const school = age !== null && age <= 18 && !choice?.stage;
  const school2 = school || completing;
  const steps: readonly StepId[] = school2 ? schoolSteps(classChoice.level, (personal.weakSubjects ?? []).length, completing) : STEPS;
  const classSubjects = classChoice.level ? (classForProfile({ stage: stageForLevel(classChoice.level), board: classChoice.board, grade: classChoice.grade, age, subjects: classChoice.subjects }, catalog)?.subjects ?? []) : [];
  const id = steps[step];
  const recommended = age !== null ? (choice?.mode ?? modeForAge(age)) : undefined;
  const canNext = id === "about" ? name.trim().length > 0 : id === "age" ? age !== null : id === "mode" ? Boolean(mode) : id === "category" ? Boolean(category) : id === "course" ? Boolean(course) : id === "class" ? Boolean(classChoice.level && classChoice.grade && (!boardsFor(classChoice.level).length || classChoice.board)) : true;
  const courses = catalog.filter((c) => c.world === category);

  const next = () => {
    if (!canNext) return;
    sfx("tap");
    if (id === "age" && age !== null && !mode) setMode(recommended ?? modeForAge(age));
    if (id === "mode" && mode && !category) setCategory(MODE_CATEGORY[mode]);
    if (id === "parent" && classChoice.level) {
      // Save everything collected in the school flow.
      const m = completing ? (profile.mode ?? recommended ?? modeForAge(age ?? 12)) : (mode ?? recommended ?? modeForAge(age ?? 12));
      const stage = stageForLevel(classChoice.level);
      const world: WorldId = stage === "preprimary" || stage === "primary" ? "kids" : stage === "aspirant" ? "exam" : "school";
      const minutes = personal.dailyMinutes ?? 20;
      setProfile({
        name: name.trim() || t("settings.name.default", "Learner"),
        age,
        stage,
        mode: m,
        worlds: completing ? profile.worlds : [world],
        course: completing ? profile.course : null,
        board: classChoice.board,
        grade: classChoice.grade,
        subjects: classChoice.subjects,
        dailyGoal: goalXpForMinutes(minutes),
        onboarded: true,
        style: young ? profile.style : STYLE_TO[personal.studyStyle ?? "video"],
        personal: { ...personal, targetExam: personal.targetExam ?? (classChoice.level === "exam" ? classChoice.grade : null), completedAt: new Date().toISOString() },
      });
      if (!completing) useLearner.getState().setSettings({ sound: MODES[m].sound });
      sfx("fanfare");
    }
    if (id === "name") {
      const m = mode ?? recommended ?? modeForAge(age ?? 12);
      if (school && classChoice.level) {
        const stage = stageForLevel(classChoice.level);
        const world: WorldId = stage === "preprimary" || stage === "primary" ? "kids" : stage === "aspirant" ? "exam" : "school";
        setProfile({ name: name.trim() || t("settings.name.default", "Learner"), age, stage, mode: m, worlds: [world], course: null, board: classChoice.board, grade: classChoice.grade, subjects: classChoice.subjects, dailyGoal: goal, onboarded: true, style: profile.style });
      } else {
      const stage = stageParam && stageById[stageParam] ? stageParam : (choice?.stage ?? stageFromAge(age ?? 12, category));
      setProfile({ name: name.trim() || t("settings.name.default", "Learner"), age, stage, mode: m, worlds: category ? [category] : [], course, dailyGoal: goal, onboarded: true, style: profile.style });
      }
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
        <button onClick={() => (step ? setStep(step - 1) : router.push(completing ? "/learn" : "/"))} className="grid h-10 w-10 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label={t("onboard.back", "Back")}>
          <ArrowLeft className="h-6 w-6" strokeWidth={2.6} />
        </button>
        <ProgressBar value={step / (steps.length - 1)} height={16} />
      </div>

      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col px-5 py-10">
        {/* mascot prompt */}
        <div className="flex items-end gap-4">
          <Mascot pose={id === "done" ? "cheer" : id === "goal" ? "think" : "wave"} size={id === "done" ? 120 : 96} />
          <motion.div key={id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="relative mb-6 rounded-2xl border-2 border-line bg-surface px-5 py-3.5 text-lg font-bold">
            <span className="absolute -left-[9px] bottom-4 h-4 w-4 rotate-45 border-b-2 border-l-2 border-line bg-surface" />
            <h1 className="text-lg font-bold">{PROMPT[id]}</h1>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }} className="mt-8">
            {id === "age" && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {AGES.map((a) => (
                  <Option key={a.label} active={age === a.age} onClick={() => {
                    // A different age means a different profile: drop choices made for the old one.
                    if (a.age !== age) { setMode(null); setCategory(null); setCourse(null); setClassChoice(choiceForLevel(levelForAge(a.age))); }
                    setAge(a.age);
                  }}>
                    <span className="w-full text-center text-lg font-extrabold">{ageLabel[a.age] ?? a.label}</span>
                  </Option>
                ))}
              </div>
            )}

            {id === "mode" && <ModePicker value={mode} recommended={recommended} onChange={(m) => { setMode(m); if (MODE_CATEGORY[m] !== category) { setCategory(MODE_CATEGORY[m]); setCourse(null); } sfx("tap"); }} />}

            {id === "class" && <ClassPicker value={classChoice} onChange={setClassChoice} />}
            {id === "about" && <AboutFields value={personal} onChange={patch} young={young} name={name} onName={setName} />}
            {id === "exam" && <ExamFields value={personal} onChange={patch} level={classChoice.level} />}
            {id === "target" && <GoalFields value={personal} onChange={patch} young={young} />}
            {id === "levels" && <LevelsFields value={personal} onChange={patch} subjects={classSubjects} />}
            {id === "habits" && <HabitsFields value={personal} onChange={patch} young={young} />}
            {id === "weak" && <WeakFields value={personal} onChange={patch} subjects={classSubjects} />}
            {id === "diagnostic" && (
              <Diagnostic
                subjects={classSubjects.filter((x) => personal.weakSubjects?.includes(x.id))}
                personal={personal}
                onDone={(r) => {
                  patch({ diagnostic: { ...(personal.diagnostic ?? {}), ...r } });
                  setStep((x) => x + 1);
                }}
              />
            )}
            {id === "parent" && <ParentFields value={personal} onChange={patch} young={young} />}

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
                        <span className="block text-lg font-extrabold">{worldText[w.id]?.name ?? w.name}</span>
                        <span className="block text-sm font-semibold text-muted">{worldText[w.id]?.tagline ?? w.tagline}</span>
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
                    <span className={clsx("text-lg font-extrabold", goal === g.xp && "text-accent")}>{goalText[g.xp]?.label ?? g.label}</span>
                    <span className={clsx("font-bold", goal === g.xp ? "text-accent" : "text-muted")}>{goalText[g.xp]?.hint ?? g.hint}</span>
                  </button>
                ))}
              </div>
            )}

            {id === "name" && (
              <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && next()} placeholder={t("onboard.namePlaceholder", "Your name")} maxLength={30} className="input py-4 text-xl" />
            )}

            {id === "done" && (
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  school2
                    ? [t("onboard.summary.class", "Your class"), classChoice.level === "pre" ? t("class.pre", "Pre-primary") : classChoice.level === "exam" ? (SYLLABI.exam.grades.find((g) => g.id === classChoice.grade)?.name ?? "—") : t("class.gradeN", "Class {n}", { n: classChoice.level ?? "—" })]
                    : [t("onboard.summary.course", "Your course"), catalog.find((c) => c.slug === course)?.title ?? "—"],
                  [t("onboard.summary.experience", "Experience"), mode ? t("onboard.summary.modeName", "{name} mode", { name: modeName[mode] ?? MODES[mode].name }) : "—"],
                  school2
                    ? [t("onboard.summary.daily", "Daily study"), t("personal.habits.min", "{n} min", { n: personal.dailyMinutes ?? 20 })]
                    : [t("onboard.summary.goal", "Daily goal"), goalText[goal] ? `${goalText[goal].label} · ${goalText[goal].hint}` : t("onboard.summary.goalXp", "{n} XP", { n: goal })],
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
          <button onClick={next} disabled={!canNext} className={clsx(id === "diagnostic" || id === "parent" ? "btn-ghost" : "btn-primary", "w-full sm:w-auto sm:min-w-[160px]")}>
            {id === "done" ? t("onboard.start", "Start learning") : id === "diagnostic" ? t("onboard.skipDiagnostic", "Skip the quiz") : id === "parent" ? (personal.parentEmail || personal.parentPhone ? t("onboard.continue", "Continue") : t("onboard.skip", "Skip")) : t("onboard.continue", "Continue")}
          </button>
        </div>
      </div>
    </div>
  );
}

function Option({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
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
