import Link from "next/link";
import { Info, Trophy } from "lucide-react";
import { competitions, DISCONTINUED } from "@/content/competitions";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard } from "@/components/shell/RailCards";
import { CompetitionFilter } from "@/components/competitions/CompetitionFilter";
import { ExamCalendar } from "@/components/competitions/ExamCalendar";

export const metadata = { title: "Competitions & scholarships" };

export default function Page() {
  return (
    <PageColumns rail={<Rail />}>
      <div className="flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-warn text-[#4a3500]">
          <Trophy className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <div>
          <p className="eyebrow">What comes next</p>
          <h1 className="mt-1 text-2xl font-black">Competitive exams and scholarships</h1>
          <p className="mt-1 max-w-2xl text-[15px] font-semibold leading-6 text-muted">
            A map of the olympiads, entrance exams, service exams and scholarships that Indian students meet from middle school to graduation. Filter by your stage, open an entry for eligibility, pattern and a three-step plan.
          </p>
        </div>
      </div>

      <CompetitionFilter items={competitions} />

      <ExamCalendar />

      <section className="card mt-8 p-5">
        <div className="flex items-center gap-2 text-muted">
          <Info className="h-4 w-4" strokeWidth={2.5} />
          <span className="eyebrow">No longer held</span>
        </div>
        <ul className="mt-3 space-y-2">
          {DISCONTINUED.map((d) => (
            <li key={d.name} className="text-sm font-semibold leading-6">
              <span className="font-extrabold">{d.name}.</span> <span className="text-muted">{d.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageColumns>
  );
}

function Rail() {
  return (
    <>
      <RailCard title="How to use this map">
        <ol className="space-y-2 text-sm font-semibold leading-6 text-muted">
          <li>
            <b className="text-ink">1.</b> Pick your stage to see what is open to you now and what to plan for next.
          </li>
          <li>
            <b className="text-ink">2.</b> Open an entry and read the pattern before the plan.
          </li>
          <li>
            <b className="text-ink">3.</b> Confirm dates and eligibility on the official site; they change every year.
          </li>
        </ol>
      </RailCard>
      <RailCard title="Prepare here" action={{ href: "/exam", label: "Exam mode" }}>
        <p className="text-sm font-semibold leading-6 text-muted">
          Quest Academy's exam courses cover NEET and JEE physics, chemistry, biology and maths. Each entry links the courses that matter for it.
        </p>
        <Link href="/courses" className="btn-ghost mt-4 w-full !py-2 text-sm">
          Browse courses
        </Link>
      </RailCard>
    </>
  );
}
