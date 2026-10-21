"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { Printer, RotateCcw, Shuffle } from "lucide-react";
import { COUNTS } from "./options";

/** Print, question count and shuffle controls. State lives in the URL so the server renders the sheet. */
export function WorksheetToolbar({ count, seed, pool }: { count: number; seed: number; pool: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const go = (n: number, s: number) => {
    const q = new URLSearchParams(params.toString());
    q.set("n", String(n));
    if (s > 0) q.set("seed", String(s));
    else q.delete("seed");
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const showing = Math.min(count, pool);

  return (
    <div className="card flex flex-wrap items-center gap-3 p-3">
      <button type="button" className="btn-primary !py-2 text-sm" onClick={() => window.print()}>
        <Printer className="h-4 w-4" strokeWidth={2.5} /> Print / Save as PDF
      </button>

      <div className="flex items-center gap-1 rounded-xl bg-surface-2 p-1" role="group" aria-label="Question count">
        {COUNTS.map((n, i) => {
          const tooMany = n > pool && i > 0;
          return (
            <button
              key={n}
              type="button"
              disabled={tooMany}
              aria-pressed={n === count}
              title={tooMany ? `This unit has ${pool} questions` : `${n} questions`}
              onClick={() => go(n, seed)}
              className={clsx(
                "rounded-lg px-3 py-1.5 text-sm font-extrabold transition",
                n === count ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink",
                tooMany && "cursor-not-allowed opacity-40 hover:text-muted",
              )}
            >
              {n}
            </button>
          );
        })}
      </div>

      <button type="button" className="btn-ghost !py-2 text-sm" onClick={() => go(count, seed + 1)}>
        <Shuffle className="h-4 w-4" strokeWidth={2.5} /> Shuffle
      </button>
      {seed > 0 && (
        <button type="button" className="btn-flat !py-2 text-sm" onClick={() => go(count, 0)}>
          <RotateCcw className="h-4 w-4" strokeWidth={2.5} /> Lesson order
        </button>
      )}

      <span className="ml-auto text-xs font-bold text-muted">
        {seed > 0 ? `Version ${seed}` : "Lesson order"} · {showing} of {pool} questions
      </span>
    </div>
  );
}
