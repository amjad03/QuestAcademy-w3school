import Link from "next/link";
import { BookOpen, FileText, KeyRound, Printer, Shuffle } from "lucide-react";
import { PageColumns } from "@/components/shell/AppShell";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { printableByWorld, printableTopics } from "@/components/worksheets/build";

export const metadata = { title: "Worksheets" };

export default function Page() {
  const groups = printableByWorld();
  const courses = groups.reduce((n, g) => n + g.courses.length, 0);
  const questions = printableTopics.reduce((n, t) => n + t.count, 0);

  return (
    <PageColumns rail={<Rail courses={courses} units={printableTopics.length} questions={questions} />}>
      <p className="eyebrow">Printables</p>
      <h1 className="mt-1 text-2xl font-black">Worksheets and answer keys</h1>
      <p className="mt-1 max-w-[60ch] text-sm font-semibold text-muted">
        Print a unit’s questions for class, homework or revision. Every worksheet comes with an answer key that starts on its own page, so you can hand out the questions and keep the key.
      </p>

      <nav className="mt-5 flex flex-wrap gap-2" aria-label="Jump to world">
        {groups.map((g) => (
          <a key={g.world.id} href={`#world-${g.world.id}`} className="chip hover:bg-surface-2">
            {g.world.name} · {g.units}
          </a>
        ))}
      </nav>

      {groups.map((g) => (
        <section key={g.world.id} id={`world-${g.world.id}`} className="mt-8 scroll-mt-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-black">{g.world.name}</h2>
            <span className="text-xs font-bold text-muted">
              {g.world.short} · {g.units} units · {g.questions} questions
            </span>
          </div>
          <div className="mt-3 grid gap-3">
            {g.courses.map((c) => (
              <article key={c.subject.slug} className="card min-w-0 p-4">
                <div className="flex items-center gap-3">
                  <CourseIcon slug={c.subject.slug} size={40} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-extrabold">{c.subject.title}</p>
                    <p className="text-xs font-bold text-muted">
                      {c.units.length} {c.units.length === 1 ? "unit" : "units"} · {c.questions} questions · {c.subject.levels.join(", ")}
                    </p>
                  </div>
                  <Link href={`/course/${c.subject.slug}`} className="hidden text-xs font-extrabold uppercase tracking-wide text-accent sm:block">
                    Course
                  </Link>
                </div>
                <ul className="mt-3 divide-y-2 divide-line border-t-2 border-line">
                  {c.units.map((u) => (
                    <li key={u.topic.slug} className="flex items-center justify-between gap-3 py-2.5">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{u.topic.title}</p>
                        <p className="text-xs font-semibold text-muted">
                          {u.topic.lessons.length} {u.topic.lessons.length === 1 ? "lesson" : "lessons"} · {u.count} questions
                        </p>
                      </div>
                      <Link href={u.href} className="btn-ghost shrink-0 !px-3 !py-1.5 text-sm">
                        <Printer className="h-4 w-4" strokeWidth={2.5} /> Worksheet
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
    </PageColumns>
  );
}

function Rail({ courses, units, questions }: { courses: number; units: number; questions: number }) {
  const steps = [
    { icon: BookOpen, text: "Pick a unit. Questions come from its lesson quizzes and checkpoints." },
    { icon: Shuffle, text: "Choose 10, 15 or 20 questions and shuffle for a second version." },
    { icon: Printer, text: "Print, or save as PDF from the print dialog to share." },
    { icon: KeyRound, text: "The answer key is always the last page, with short explanations." },
  ];
  return (
    <>
      <section className="card p-5">
        <div className="mb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" strokeWidth={2.5} />
          <h2 className="text-lg font-black">How it works</h2>
        </div>
        <ol className="space-y-3">
          {steps.map(({ icon: I, text }, i) => (
            <li key={i} className="flex gap-3 text-sm font-semibold text-muted">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <I className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="pt-0.5">{text}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="card p-5">
        <p className="eyebrow">Coverage</p>
        <dl className="mt-2 grid grid-cols-3 gap-2 text-center">
          {[
            [courses, "courses"],
            [units, "units"],
            [questions, "questions"],
          ].map(([n, label]) => (
            <div key={label} className="rounded-xl bg-surface-2 py-2">
              <dt className="text-xl font-black">{n}</dt>
              <dd className="text-xs font-bold text-muted">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs font-semibold text-muted">Units with fewer than four questions are left out.</p>
      </section>
    </>
  );
}
