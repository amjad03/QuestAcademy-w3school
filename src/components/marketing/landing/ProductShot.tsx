import Image from "next/image";
import clsx from "clsx";

/** Screenshots of the real app live in /public/landing, captured at 2× from a 1440×900 window. */
export const SHOT = { width: 2880, height: 1800 } as const;

/** A screenshot of the app in a plain browser frame. */
export function ProductShot({ src, alt, url, priority, className, sizes = "(min-width: 1200px) 1100px, 100vw" }: { src: string; alt: string; url?: string; priority?: boolean; className?: string; sizes?: string }) {
  return (
    <figure className={clsx("overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(16,24,40,0.06),0_24px_48px_-24px_rgba(16,24,40,0.22)]", className)}>
      <div className="flex h-8 items-center gap-3 border-b border-line bg-surface-2/70 px-3" aria-hidden>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        {url && <span className="mx-auto max-w-[60%] truncate rounded-md bg-surface px-3 py-0.5 text-[11px] text-muted">{url}</span>}
        {url && <span className="w-[42px]" />}
      </div>
      <Image src={src} alt={alt} width={SHOT.width} height={SHOT.height} priority={priority} sizes={sizes} className="block h-auto w-full" />
    </figure>
  );
}
