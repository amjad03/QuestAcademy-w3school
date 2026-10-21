import clsx from "clsx";
import { setById, type Sticker } from "./stickers";

/** Round sticker badge. Locked stickers show as a soft silhouette. */
export function StickerTile({ sticker, owned, size = 88, label, className }: { sticker: Sticker; owned: boolean; size?: number; label?: boolean; className?: string }) {
  const set = setById[sticker.set];
  return (
    <div className={clsx("flex flex-col items-center gap-1.5", className)}>
      <span
        className={clsx("relative grid place-items-center rounded-full transition", owned ? "" : "bg-surface-2")}
        style={{
          width: size,
          height: size,
          background: owned ? set.color : undefined,
          boxShadow: owned ? `inset 0 -${Math.round(size / 14)}px 0 ${set.shade}, 0 0 0 ${Math.max(3, size / 22)}px rgb(var(--surface)), 0 0 0 ${Math.max(5, size / 14)}px ${set.color}33` : "inset 0 0 0 3px rgb(var(--line))",
        }}
        aria-label={owned ? sticker.name : "Locked sticker"}
      >
        <span className="leading-none" style={{ fontSize: size * 0.5, filter: owned ? undefined : "brightness(0) opacity(0.14)" }}>
          {sticker.art}
        </span>
      </span>
      {label && <span className={clsx("text-center text-sm font-extrabold leading-tight", owned ? "text-ink" : "text-muted")}>{owned ? sticker.name : "???"}</span>}
    </div>
  );
}
