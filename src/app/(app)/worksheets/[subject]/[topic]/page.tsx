import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Topic } from "@/content/types";
import { ArrowLeft, BookOpen, Lightbulb } from "lucide-react";
import { PageColumns } from "@/components/shell/AppShell";
import { worldById } from "@/content/worlds";
import { buildWorksheet, findPrintable, KIND_LABEL, printableTopics, topicPool } from "@/components/worksheets/build";
import { parseCount, parseSeed } from "@/components/worksheets/options";
import { Worksheet } from "@/components/worksheets/Worksheet";
import { WorksheetToolbar } from "@/components/worksheets/WorksheetToolbar";

type Params = { subject: string; topic: string };
type Search = Record<string, string | string[] | undefined>;

// Rendered on first visit and then cached: prebuilding every page made the build exceed the host time limit.
export function generateStaticParams(): Params[] {
  return [];
}

function allParams(): Params[] {
  return printableTopics.map((t) => ({ subject: t.subject.slug, topic: t.topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { subject, topic } = await params;
  const p = findPrintable(subject, topic);
  return p ? { title: `${p.topic.title} worksheet`, description: `Printable ${p.subject.title} worksheet with answer key: ${p.topic.description}` } : {};
}

export default async function Page({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<Search> }) {
  const [{ subject, topic }, search] = await Promise.all([params, searchParams]);
  const p = findPrintable(subject, topic);
  if (!p) notFound();

  const count = parseCount(search.n);
  const seed = parseSeed(search.seed);
  const { items, pool, kinds } = buildWorksheet(p.topic, count, seed);
  const world = worldById[p.subject.world];

  return (
    <PageColumns rail={<Rail subject={p.subject.slug} topic={p.topic} kinds={kinds} pool={pool} />}>
      <Link href="/worksheets" className="inline-flex items-center gap-1.5 text-sm font-extrabold text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} /> All worksheets
      </Link>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">
            {world.name} · {p.subject.title}
          </p>
          <h1 className="mt-1 text-2xl font-black">{p.topic.title}</h1>
          <p className="mt-1 text-sm font-semibold text-muted">{p.topic.description}</p>
        </div>
      </div>

      <div className="mt-5">
        <Suspense fallback={<div className="card h-14 animate-pulse" />}>
          <WorksheetToolbar count={count} seed={seed} pool={pool} />
        </Suspense>
      </div>

      <Worksheet subject={p.subject} topic={p.topic} world={world.name} items={items} />
    </PageColumns>
  );
}

function Rail({ subject, topic, kinds, pool }: { subject: string; topic: Topic; kinds: Map<string, number>; pool: number }) {
  const { lessons, title } = topic;
  const perLesson = topicPool(topic).reduce((m, p) => m.set(p.lesson, (m.get(p.lesson) ?? 0) + 1), new Map<string, number>());
  return (
    <>
      <section className="card p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-black">This unit</h2>
          <Link href={`/course/${subject}/${topic.slug}`} className="text-sm font-extrabold uppercase tracking-wide text-accent hover:brightness-110">
            Open
          </Link>
        </div>
        <p className="text-sm font-bold">
          {pool} questions across {lessons.length} {lessons.length === 1 ? "lesson" : "lessons"}
        </p>
        <ul className="mt-3 space-y-1.5">
          {lessons.map((l) => (
            <li key={l.slug} className="flex items-center justify-between gap-3 text-sm">
              <Link href={`/course/${subject}/${topic.slug}/${l.slug}`} className="flex min-w-0 items-center gap-2 font-semibold text-muted hover:text-ink">
                <BookOpen className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                <span className="truncate">{l.title}</span>
              </Link>
              <span className="shrink-0 text-xs font-bold text-muted">{perLesson.get(l.title) ?? 0}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5 border-t-2 border-line pt-3">
          {[...kinds.entries()].map(([k, n]) => (
            <span key={k} className="chip !py-0.5 text-xs">
              {KIND_LABEL[k as keyof typeof KIND_LABEL] ?? k} · {n}
            </span>
          ))}
        </div>
      </section>
      <section className="card p-5">
        <div className="mb-3 flex items-center gap-2">
          <Lightbulb className="h-4 w-4 text-accent" strokeWidth={2.5} />
          <h2 className="text-lg font-black">Printing tips</h2>
        </div>
        <ul className="space-y-2 text-sm font-semibold text-muted">
          <li>Only the sheet prints; the app around it is hidden.</li>
          <li>The answer key starts on a new page. Print all pages but the last to hand out questions only.</li>
          <li>Shuffle to make a second version of “{title}” for another group, then print again.</li>
          <li>Choose “Save as PDF” in the print dialog to share by email or a class portal.</li>
        </ul>
      </section>
    </>
  );
}
