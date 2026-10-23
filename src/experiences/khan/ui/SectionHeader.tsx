import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

/** Section title with an optional "See all"-style link or extra controls. */
export function SectionHeader({ id, title, sub, action, children, className }: { id?: string; title: ReactNode; sub?: ReactNode; action?: { href: string; label: string }; children?: ReactNode; className?: string }) {
  return (
    <div className={clsx("mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-2", className)}>
      <div className="min-w-0">
        <h2 id={id} className="kh-h2">
          {title}
        </h2>
        {sub && <p className="mt-0.5 text-sm text-muted">{sub}</p>}
      </div>
      {children}
      {action && (
        <Link href={action.href} className="kh-link shrink-0 text-sm">
          {action.label}
        </Link>
      )}
    </div>
  );
}

/** Small labelled stat used in the stage summaries. */
export function Stat({ label, value, hint, className }: { label: ReactNode; value: ReactNode; hint?: ReactNode; className?: string }) {
  return (
    <div className={clsx("min-w-0", className)}>
      <dt className="text-[0.8125rem] text-muted">{label}</dt>
      <dd className="mt-0.5 text-xl font-bold tabular-nums leading-tight">{value}</dd>
      {hint && <dd className="mt-0.5 text-xs text-muted">{hint}</dd>}
    </div>
  );
}
