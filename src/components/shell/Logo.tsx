import Link from "next/link";
import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={clsx("shrink-0", className)} aria-hidden>
      <defs>
        <linearGradient id="qa-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--accent-2))" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#qa-logo)" />
      <path d="M32 11 L39 30 L32 53 L25 30 Z" fill="#fff" />
      <path d="M32 11 L39 30 L32 30 Z" fill="#fde68a" />
      <circle cx="32" cy="30" r="3.5" fill="rgb(var(--accent))" />
    </svg>
  );
}

export function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Quest Academy home">
      <LogoMark className="h-9 w-9 transition group-hover:rotate-12" />
      {!compact && (
        <span className="font-display text-lg font-bold leading-none tracking-tight">
          Quest<span className="text-gradient">Academy</span>
        </span>
      )}
    </Link>
  );
}
