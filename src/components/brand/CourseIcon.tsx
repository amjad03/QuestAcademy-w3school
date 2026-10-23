import {
  ALargeSmall,
  Atom,
  BookOpenText,
  Braces,
  Brain,
  BrainCircuit,
  Calculator,
  ChartLine,
  CodeXml,
  Database,
  Dna,
  Earth,
  FlaskConical,
  GraduationCap,
  Hash,
  HeartPulse,
  Landmark,
  Microscope,
  Network,
  Orbit,
  Palette,
  PenTool,
  Pi,
  Scale,
  Shapes,
  Sigma,
  SquareTerminal,
  TestTubes,
  WandSparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import clsx from "clsx";

/**
 * Every course gets a solid colour + icon from one curated palette so the
 * catalogue reads as a single system (instead of arbitrary per-subject gradients).
 */
const PALETTE = {
  blue: ["#2F6BFF", "#1E50D6"],
  green: ["#2EBE70", "#1F9B58"],
  purple: ["#7C4DFF", "#5E35D9"],
  orange: ["#FF8A00", "#D97000"],
  red: ["#FF4B4B", "#D93636"],
  teal: ["#14B8A6", "#0E8F81"],
  pink: ["#EC4899", "#C02677"],
  gold: ["#FFB800", "#D99A00"],
  navy: ["#334155", "#1E293B"],
  sky: ["#1CB0F6", "#1290CC"],
} as const;

type Hue = keyof typeof PALETTE;

const COURSES: Record<string, { icon: LucideIcon; hue: Hue }> = {
  "abc-adventures": { icon: ALargeSmall, hue: "pink" },
  "number-land": { icon: Hash, hue: "orange" },
  "shapes-colors": { icon: Shapes, hue: "purple" },
  "my-world": { icon: Earth, hue: "green" },
  "math-magic": { icon: WandSparkles, hue: "gold" },
  "math-middle": { icon: Calculator, hue: "blue" },
  "math-high": { icon: Sigma, hue: "purple" },
  "physics-school": { icon: Atom, hue: "sky" },
  "physics-senior": { icon: Orbit, hue: "sky" },
  "chemistry-senior": { icon: TestTubes, hue: "green" },
  "biology-senior": { icon: Dna, hue: "pink" },
  "maths-senior": { icon: Sigma, hue: "purple" },
  "chemistry-school": { icon: FlaskConical, hue: "teal" },
  "biology-school": { icon: Dna, hue: "green" },
  english: { icon: BookOpenText, hue: "red" },
  "social-studies": { icon: Landmark, hue: "orange" },
  "exam-physics": { icon: Orbit, hue: "blue" },
  "exam-chemistry": { icon: TestTubes, hue: "teal" },
  "exam-biology": { icon: Microscope, hue: "green" },
  "exam-maths": { icon: Pi, hue: "purple" },
  html: { icon: CodeXml, hue: "orange" },
  css: { icon: Palette, hue: "blue" },
  javascript: { icon: Braces, hue: "gold" },
  python: { icon: SquareTerminal, hue: "teal" },
  sql: { icon: Database, hue: "navy" },
  dsa: { icon: Network, hue: "blue" },
  "machine-learning": { icon: BrainCircuit, hue: "purple" },
  "electrical-engineering": { icon: Zap, hue: "gold" },
  "human-anatomy": { icon: HeartPulse, hue: "red" },
  finance: { icon: ChartLine, hue: "green" },
  economics: { icon: Scale, hue: "orange" },
  psychology: { icon: Brain, hue: "pink" },
  "ux-design": { icon: PenTool, hue: "sky" },
};

export function courseStyle(slug: string) {
  const c = COURSES[slug] ?? { icon: GraduationCap, hue: "blue" as Hue };
  const [color, shade] = PALETTE[c.hue];
  return { Icon: c.icon, color, shade };
}

/** Solid rounded tile with a white icon and a darker bottom edge. */
export function CourseIcon({ slug, size = 48, className, flat }: { slug: string; size?: number; className?: string; flat?: boolean }) {
  const { Icon, color, shade } = courseStyle(slug);
  return (
    <span
      className={clsx("inline-grid shrink-0 place-items-center rounded-[28%] text-white", className)}
      style={{ width: size, height: size, background: color, boxShadow: flat ? undefined : `inset 0 -${Math.max(2, Math.round(size / 14))}px 0 ${shade}` }}
      aria-hidden
    >
      <Icon style={{ width: size * 0.52, height: size * 0.52 }} strokeWidth={2.4} />
    </span>
  );
}
