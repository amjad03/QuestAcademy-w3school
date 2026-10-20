import clsx from "clsx";

/** Rounded progress bar with the subtle top highlight Duolingo-style bars have. */
export function ProgressBar({ value, className, color = "rgb(var(--accent))", height = 16, label }: { value: number; className?: string; color?: string; height?: number; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div className={clsx("relative w-full overflow-hidden rounded-full bg-line", className)} style={{ height }} role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="relative h-full rounded-full transition-[width] duration-500 ease-out" style={{ width: `${pct}%`, background: color, minWidth: pct > 0 ? height : 0 }}>
        <span className="absolute left-2 right-2 top-[22%] h-[22%] rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export function ProgressRing({ value, size = 64, stroke = 7, color = "rgb(var(--accent))", children, className }: { value: number; size?: number; stroke?: number; color?: string; children?: React.ReactNode; className?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span className={clsx("relative inline-grid shrink-0 place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgb(var(--line))" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.max(0, Math.min(1, value)))}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}
