import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { calendarByMonth } from "@/content/competitions";

/** Typical months for every entry, grouped January to December. */
export function ExamCalendar() {
  const months = calendarByMonth();
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2 text-muted">
        <CalendarDays className="h-4 w-4" strokeWidth={2.5} />
        <span className="eyebrow">Exam calendar</span>
      </div>
      <h2 className="mt-1 text-xl font-black">A typical year</h2>
      <p className="mt-1 text-sm font-semibold text-muted">Months are typical, not fixed. Dates move every year, so confirm each one on the official site before planning.</p>
      <ol className="card mt-4 divide-y-2 divide-line overflow-hidden">
        {months.map((m) => (
          <li key={m.month} className="flex flex-col gap-2 p-4 sm:flex-row sm:gap-6">
            <span className="w-28 shrink-0 text-sm font-black">{m.name}</span>
            <ul className="min-w-0 flex-1 space-y-1.5">
              {m.items.map((it, i) => (
                <li key={i} className="text-sm font-semibold leading-6">
                  <Link href={`/competitions/${it.slug}`} className="font-extrabold text-accent hover:underline">
                    {it.name}
                  </Link>
                  <span className="text-muted"> · {it.label}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
