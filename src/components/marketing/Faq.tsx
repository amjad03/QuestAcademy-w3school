import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

/** Accessible FAQ built on native <details>, so it needs no client JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {items.map((item) => (
        <details key={item.q} className="card group p-0 open:border-accent">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-extrabold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" strokeWidth={2.5} />
          </summary>
          <p className="px-5 pb-5 font-semibold leading-7 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
