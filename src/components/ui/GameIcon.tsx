import {
  BookOpen,
  Brain,
  CalendarCheck,
  CircleCheck,
  Code,
  Crown,
  Flame,
  Footprints,
  Gamepad2,
  Globe,
  GraduationCap,
  Layers,
  Library,
  Moon,
  Play,
  Puzzle,
  Repeat,
  Rocket,
  Shield,
  Sparkles,
  Sunrise,
  Target,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  brain: Brain,
  "calendar-check": CalendarCheck,
  "circle-check": CircleCheck,
  code: Code,
  crown: Crown,
  flame: Flame,
  footprints: Footprints,
  gamepad: Gamepad2,
  globe: Globe,
  "graduation-cap": GraduationCap,
  layers: Layers,
  library: Library,
  moon: Moon,
  play: Play,
  puzzle: Puzzle,
  repeat: Repeat,
  rocket: Rocket,
  shield: Shield,
  sparkles: Sparkles,
  sunrise: Sunrise,
  target: Target,
  terminal: Terminal,
  zap: Zap,
};

export function GameIcon({ name, className, style, strokeWidth = 2.5 }: { name: string; className?: string; style?: React.CSSProperties; strokeWidth?: number }) {
  const I = ICONS[name] ?? Sparkles;
  return <I className={className} style={style} strokeWidth={strokeWidth} />;
}

/** Hexagon-ish badge medallion: solid colour, white icon, darker rim. Locked = grey. */
export function BadgeMedal({ icon, color, size = 64, locked }: { icon: string; color: string; size?: number; locked?: boolean }) {
  const c = locked ? "rgb(var(--line))" : color;
  return (
    <span className="relative inline-grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width={size} height={size} className="absolute inset-0">
        <path d="M32 3 L57 17 V47 L32 61 L7 47 V17 Z" fill={c} />
        <path d="M32 3 L57 17 V47 L32 61 L7 47 V17 Z" fill="none" stroke="#000" strokeOpacity="0.14" strokeWidth="4" strokeLinejoin="round" transform="translate(0 2)" />
        <path d="M32 9 L52 20.5 V43.5 L32 55 L12 43.5 V20.5 Z" fill="#fff" opacity="0.16" />
      </svg>
      <GameIcon name={icon} className="relative text-white" style={{ width: size * 0.42, height: size * 0.42, opacity: locked ? 0.7 : 1 }} />
    </span>
  );
}
