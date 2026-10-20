import type { Stage, WorldId, WorldMeta } from "./types";

export const worlds: WorldMeta[] = [
  {
    id: "kids",
    name: "Wonder Woods",
    short: "Kids",
    tagline: "Play. Sing. Discover.",
    description:
      "A magical forest where little learners meet letters, numbers, shapes and the world around them through games, sounds and stories.",
    emoji: "🌳",
    mascot: { name: "Questy", emoji: "🦉" },
    colors: ["#fb923c", "#ec4899"],
    href: "/kids",
    stages: ["preprimary", "primary"],
  },
  {
    id: "school",
    name: "Explorer's Atlas",
    short: "School",
    tagline: "Grades 6–12, made visual.",
    description:
      "Maths, science, English and social studies with live simulations you can poke, drag and break — then quiz yourself until it sticks.",
    emoji: "🧭",
    mascot: { name: "Atlas", emoji: "🐢" },
    colors: ["#0ea5e9", "#10b981"],
    href: "/school",
    stages: ["middle", "secondary"],
  },
  {
    id: "exam",
    name: "The Arena",
    short: "NEET · JEE",
    tagline: "Train like a topper.",
    description:
      "A focused, exam-grade arena: real CBT mock tests, chapter drills, formula vault, accuracy & speed analytics and rank prediction.",
    emoji: "⚔️",
    mascot: { name: "Blaze", emoji: "🐉" },
    colors: ["#f59e0b", "#ef4444"],
    href: "/exam",
    stages: ["secondary", "aspirant"],
  },
  {
    id: "code",
    name: "Code Lab",
    short: "Coding",
    tagline: "Read less. Run more.",
    description:
      "HTML, CSS, JavaScript, Python and SQL with live editors on every page, auto-graded challenges and a full playground.",
    emoji: "⌨️",
    mascot: { name: "Byte", emoji: "🤖" },
    colors: ["#22d3ee", "#a3e635"],
    href: "/code",
    stages: ["middle", "secondary", "ug", "pg", "lifelong"],
  },
  {
    id: "campus",
    name: "The Campus",
    short: "UG · PG",
    tagline: "University-grade, every domain.",
    description:
      "Computer science, AI, engineering, medicine, finance, economics, psychology and design — rigorous courses that feel like a great professor.",
    emoji: "🏛️",
    mascot: { name: "Sage", emoji: "🦊" },
    colors: ["#6366f1", "#c026d3"],
    href: "/campus",
    stages: ["ug", "pg", "lifelong"],
  },
];

export const worldById = Object.fromEntries(worlds.map((w) => [w.id, w])) as Record<WorldId, WorldMeta>;

export const stages: { id: Stage; label: string; hint: string; emoji: string; world: WorldId }[] = [
  { id: "preprimary", label: "Pre-primary", hint: "Ages 3–5", emoji: "🧸", world: "kids" },
  { id: "primary", label: "Primary", hint: "Grades 1–5", emoji: "🎒", world: "kids" },
  { id: "middle", label: "Middle school", hint: "Grades 6–8", emoji: "📐", world: "school" },
  { id: "secondary", label: "High school", hint: "Grades 9–12", emoji: "🔬", world: "school" },
  { id: "aspirant", label: "NEET / JEE aspirant", hint: "Competitive exams", emoji: "🎯", world: "exam" },
  { id: "ug", label: "Undergraduate", hint: "College / university", emoji: "🎓", world: "campus" },
  { id: "pg", label: "Postgraduate", hint: "Masters / PhD", emoji: "📚", world: "campus" },
  { id: "lifelong", label: "Lifelong learner", hint: "Professionals & the curious", emoji: "🚀", world: "code" },
];

export const stageById = Object.fromEntries(stages.map((s) => [s.id, s])) as Record<Stage, (typeof stages)[number]>;

export const learningStyles = [
  { id: "visual", label: "Show me", emoji: "👀", hint: "Diagrams, simulations, colour" },
  { id: "reading", label: "Let me read", emoji: "📖", hint: "Clear notes & key points" },
  { id: "doing", label: "Let me try", emoji: "🛠️", hint: "Hands-on, quizzes, code" },
  { id: "listening", label: "Talk to me", emoji: "🎧", hint: "Lessons read aloud" },
] as const;

export type LearningStyle = (typeof learningStyles)[number]["id"];

export const dailyGoals = [
  { xp: 20, label: "Casual", hint: "5 min / day", emoji: "🌱" },
  { xp: 50, label: "Regular", hint: "10 min / day", emoji: "🌿" },
  { xp: 100, label: "Serious", hint: "20 min / day", emoji: "🌳" },
  { xp: 200, label: "Beast mode", hint: "40+ min / day", emoji: "🔥" },
];
