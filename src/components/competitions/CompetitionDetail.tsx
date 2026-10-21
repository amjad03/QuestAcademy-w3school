import Link from "next/link";
import { ArrowLeft, BookOpen, CalendarDays, ClipboardList, ExternalLink, ListChecks, Users } from "lucide-react";
import { KINDS, MONTHS, STAGES, type Competition } from "@/content/competitions";
import { getSubject } from "@/content";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard } from "@/components/shell/RailCards";
import { CompetitionBadge } from "./CompetitionBadge";

function Section({ icon: Icon, eyebrow, title, children }: { icon: typeof Users; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="card mt-5 p-5">
      <div className="flex items-center gap-2 text-muted">
        <Icon className="h-4 w-4" strokeWidth={2.5} />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-1 text-lg font-black">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function CompetitionDetail({ c }: { c: Competition }) {
  const stages = STAGES.filter((s) => c.stages.includes(s.id));
  const courses = c.courses.map((slug) => getSubject(slug)).filter((s) => s !== undefined);
  return (
    <PageColumns rail={<DetailRail c={c} courses={courses.map((s) => ({ slug: s.slug, title: s.title }))} />}>
      <Link href="/competitions" className="inline-flex items-center gap-2 text-sm font-extrabold text-muted hover:text-accent">
        <ArrowLeft className="h-4 w-4" /> All competitions
      </Link>

      <div className="mt-4 flex items-start gap-4">
        <CompetitionBadge kind={c.kind} size={64} />
        <div className="min-w-0">
          <p className="eyebrow">{KINDS[c.kind]} · {c.conductedBy}</p>
          <h1 className="mt-1 text-2xl font-black leading-tight">{c.name}</h1>
          <p className="mt-2 text-[15px] font-semibold leading-6 text-muted">{c.short}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stages.map((s) => (
              <span key={s.id} className="chip">
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section icon={Users} eyebrow="Who it is for" title="Eligibility">
        <p className="text-[15px] font-semibold leading-7">{c.audience}</p>
      </Section>

      <Section icon={BookOpen} eyebrow="What it tests" title="Syllabus in one line">
        <p className="text-[15px] font-semibold leading-7">{c.tests}</p>
      </Section>

      <Section icon={CalendarDays} eyebrow="Typical timeline" title="When things happen">
        <ol className="divide-y-2 divide-line">
          {c.timeline.map((t, i) => (
            <li key={i} className="flex gap-4 py-2.5">
              <span className="w-24 shrink-0 text-sm font-black">{MONTHS[t.month - 1]}</span>
              <span className="text-sm font-semibold leading-6">{t.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs font-bold text-muted">Typical months only. Confirm the current year's dates on the official site.</p>
      </Section>

      <Section icon={ClipboardList} eyebrow="Pattern" title="How the exam is structured">
        <ul className="space-y-2">
          {c.pattern.map((p, i) => (
            <li key={i} className="flex gap-3 text-[15px] font-semibold leading-6">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={ListChecks} eyebrow="Preparation" title="A three-step plan">
        <ol className="space-y-4">
          {c.plan.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent-soft text-sm font-black text-accent">{i + 1}</span>
              <div>
                <p className="font-extrabold">{step.title}</p>
                <p className="mt-0.5 text-sm font-semibold leading-6 text-muted">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {courses.length > 0 && (
        <section className="mt-8">
          <p className="eyebrow">Prepare on Quest Academy</p>
          <h2 className="mt-1 text-xl font-black">Related courses</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {courses.map((s) => (
              <Link key={s.slug} href={`/course/${s.slug}`} className="tile flex items-center gap-3 p-4">
                <CourseIcon slug={s.slug} size={44} />
                <div className="min-w-0">
                  <p className="truncate font-extrabold">{s.title}</p>
                  <p className="text-xs font-bold text-muted">Open course</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageColumns>
  );
}

function DetailRail({ c, courses }: { c: Competition; courses: { slug: string; title: string }[] }) {
  return (
    <>
      <RailCard title="At a glance">
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="eyebrow">Conducted by</dt>
            <dd className="mt-0.5 font-bold">{c.conductedBy}</dd>
          </div>
          <div>
            <dt className="eyebrow">Typical months</dt>
            <dd className="mt-0.5 font-bold">{[...new Set(c.timeline.map((t) => t.month))].sort((a, b) => a - b).map((m) => MONTHS[m - 1]).join(", ")}</dd>
          </div>
          <div>
            <dt className="eyebrow">Official site</dt>
            <dd className="mt-0.5 font-bold">
              {c.official ? (
                <a href={`https://${c.official}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                  {c.official} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-muted">Search for the organising institute's page for the current year.</span>
              )}
            </dd>
          </div>
        </dl>
        <p className="mt-4 border-t-2 border-line pt-3 text-xs font-bold leading-5 text-muted">Eligibility, pattern and dates change. Always confirm on the official site before you plan or pay a fee.</p>
      </RailCard>
      {courses.length > 0 && (
        <RailCard title="Start here" action={{ href: "/courses", label: "All courses" }}>
          <ul className="space-y-2">
            {courses.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link href={`/course/${s.slug}`} className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-surface-2">
                  <CourseIcon slug={s.slug} size={36} flat />
                  <span className="truncate text-sm font-extrabold">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </RailCard>
      )}
    </>
  );
}
