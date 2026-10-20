import clsx from "clsx";
import { FRAMES } from "@/lib/gamification";

export function Avatar({ emoji, frame = "none", size = 40, className }: { emoji: string; frame?: string; size?: number; className?: string }) {
  const ring = FRAMES.find((f) => f.id === frame)?.ring ?? FRAMES[0].ring;
  return (
    <span
      className={clsx("inline-grid shrink-0 place-items-center rounded-full bg-gradient-to-br p-[2.5px]", ring, className)}
      style={{ width: size, height: size }}
    >
      <span className="grid h-full w-full place-items-center rounded-full bg-surface-2" style={{ fontSize: size * 0.52 }}>
        {emoji}
      </span>
    </span>
  );
}
