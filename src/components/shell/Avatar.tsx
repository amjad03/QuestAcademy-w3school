import clsx from "clsx";
import { FRAMES } from "@/lib/gamification";

export const AVATAR_COLORS: Record<string, string> = {
  blue: "#2F6BFF",
  green: "#2EBE70",
  purple: "#7C4DFF",
  orange: "#FF8A00",
  red: "#FF4B4B",
  teal: "#14B8A6",
  pink: "#EC4899",
  navy: "#334155",
  gold: "#E0A100",
  sky: "#1CB0F6",
};

/** Initial on a solid colour, with an optional purchasable frame ring. */
export function Avatar({ name, color, frame = "none", size = 40, className }: { name?: string; color?: string; frame?: string; size?: number; className?: string }) {
  const bg = AVATAR_COLORS[color ?? ""] ?? AVATAR_COLORS.blue;
  const ring = FRAMES.find((f) => f.id === frame);
  const initial = (name?.trim()[0] ?? "Q").toUpperCase();
  return (
    <span className={clsx("inline-grid shrink-0 place-items-center rounded-full", className)} style={{ width: size, height: size, padding: ring && ring.id !== "none" ? Math.max(2, size / 18) : 0, background: ring && ring.id !== "none" ? ring.color : undefined }}>
      <span className="grid h-full w-full place-items-center rounded-full font-black text-white" style={{ background: bg, fontSize: size * 0.44, boxShadow: ring && ring.id !== "none" ? `0 0 0 ${Math.max(2, size / 22)}px rgb(var(--surface))` : undefined }}>
        {initial}
      </span>
    </span>
  );
}
