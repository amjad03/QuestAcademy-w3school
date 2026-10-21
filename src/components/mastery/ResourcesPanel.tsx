import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, FileText, GraduationCap, Library, PlayCircle, ScrollText } from "lucide-react";
import type { CaseStudy, Reading, ResourceType } from "@/content/resources";
import { caseStudiesForUnit, caseStudyHref, readingsForUnit, resourcesFor } from "@/content/resources";

export const READING_ICON: Record<ResourceType, typeof BookOpen> = {
  course: GraduationCap,
  docs: FileText,
  article: ScrollText,
  paper: Library,
  book: BookOpen,
  video: PlayCircle,
};

const LEVEL_LABEL: Record<Reading["level"], string> = { intro: "Intro", intermediate: "Intermediate", advanced: "Advanced" };

/** One external reading, clearly marked as leaving Quest Academy. */
export function ReadingRow({ r }: { r: Reading }) {
  const I = READING_ICON[r.type];
  return (
    <li>
      <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 px-5 py-3.5 transition hover:bg-surface-2">
        <I className="mt-0.5 h-5 w-5 shrink-0 text-muted" strokeWidth={2.2} />
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1 font-bold group-hover:text-accent">
            <span className="truncate">{r.title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
            <span className="sr-only">(opens an external site)</span>
          </span>
          <span className="mt-0.5 block text-sm font-semibold text-muted">{r.note}</span>
          <span className="mt-1 block text-xs font-semibold text-muted">
            {r.source} · <span className="capitalize">{r.type}</span> · {LEVEL_LABEL[r.level]}
          </span>
        </span>
      </a>
    </li>
  );
}

export function CaseStudyCard({ course, study }: { course: string; study: CaseStudy }) {
  return (
    <Link href={caseStudyHref(course, study.slug)} className="tile block p-5 transition hover:border-accent">
      <p className="eyebrow">Case study</p>
      <h3 className="mt-1 font-black leading-snug">{study.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm font-semibold text-muted">{study.summary}</p>
      <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-muted">
        <Clock className="h-3.5 w-3.5" /> {study.minutes} min · {study.questions.length} analysis questions
      </p>
    </Link>
  );
}

/**
 * Case studies and curated further reading for a course or a single unit.
 * Renders nothing when the course has no Mastery resources.
 */
export function ResourcesPanel({ course, unit, unitTitles }: { course: string; unit?: string; unitTitles?: Record<string, string> }) {
  const res = resourcesFor(course);
  if (!res) return null;
  const studies = unit ? caseStudiesForUnit(course, unit) : res.caseStudies;
  const readingGroups: [string, Reading[]][] = unit ? [[unit, readingsForUnit(course, unit)]] : Object.entries(res.readings);
  const hasReadings = readingGroups.some(([, list]) => list.length > 0);
  if (!studies.length && !hasReadings) return null;

  return (
    <section className="mt-10" aria-labelledby={`resources-${unit ?? course}`}>
      <h2 id={`resources-${unit ?? course}`} className="text-xl font-black">
        Case studies & further reading
      </h2>
      <p className="mt-1 text-sm font-semibold text-muted">Apply the ideas to realistic problems, then go deeper with open resources from outside Quest Academy.</p>

      {studies.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} course={course} study={s} />
          ))}
        </div>
      )}

      {hasReadings && (
        <div className="mt-5 space-y-4">
          {readingGroups
            .filter(([, list]) => list.length > 0)
            .map(([u, list]) => (
              <div key={u} className="card overflow-hidden">
                <div className="flex items-center justify-between gap-3 border-b-2 border-line px-5 py-3">
                  <h3 className="font-black">{unit ? "Reading list" : (unitTitles?.[u] ?? u)}</h3>
                  <span className="chip">External</span>
                </div>
                <ul className="divide-y-2 divide-line">
                  {list.map((r) => (
                    <ReadingRow key={r.url + r.title} r={r} />
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
