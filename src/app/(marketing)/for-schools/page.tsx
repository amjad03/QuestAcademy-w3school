import Link from "next/link";
import type { Metadata } from "next";
import { ClipboardList, FileBarChart, Presentation, Mail } from "lucide-react";
import { BOARDS } from "@/lib/modes";
import { syllabusStats } from "@/content/syllabus";
import { PageIntro, Section } from "@/components/marketing/Section";

export const metadata: Metadata = {
  title: "For schools",
  description: "How teachers and schools use Quest Academy for classroom lessons, worksheets and parent reports.",
};

export default function ForSchoolsPage() {
  const chapters = Object.fromEntries(syllabusStats().map((s) => [s.board, s.chapters]));
  return (
    <main>
      <PageIntro
        eyebrow="For schools"
        title="A free companion to the syllabus"
        lede="Quest Academy is built around the same chapters you teach. Use the lessons in class or as homework, print worksheets for revision, and share progress with parents at term end. There is nothing to install and no cost."
      />

      <Section align="left" eyebrow="Three ways schools use it" title="In the classroom, at home and at term end">
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Presentation,
              title: "Classroom use",
              body: "Play a lesson video on the projector, then run the practice set together or set it as homework. Code and science simulations run in the browser on any device.",
              href: "/courses",
              cta: "Browse courses",
            },
            {
              icon: ClipboardList,
              title: "Worksheets",
              body: "Printable worksheets by chapter with answer keys. Pick a board and class, choose chapters, print or share a link.",
              href: "/worksheets",
              cta: "Open worksheets",
            },
            {
              icon: FileBarChart,
              title: "Parent reports",
              body: "The parent dashboard summarises time spent, chapters completed and weak areas in plain language, so parent-teacher meetings start from the same picture.",
              href: "/parent",
              cta: "See the parent view",
            },
          ].map((c) => (
            <article key={c.title} className="card flex flex-col p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                <c.icon className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 text-xl font-black text-ink">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm font-semibold leading-6 text-muted">{c.body}</p>
              <Link href={c.href} className="btn-flat mt-4 self-start !px-0">
                {c.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y-2 border-line bg-surface">
        <Section align="left" eyebrow="Syllabus coverage" title="Boards we map today" className="!py-16">
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BOARDS.map((b) => (
              <div key={b.id} className="card p-5">
                <h3 className="font-black text-ink">{b.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted">{b.full}</p>
                <p className="mt-4 text-2xl font-black text-accent">{chapters[b.id] ?? 0}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-muted">chapters</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section align="left" eyebrow="Good to know" title="Accounts, data and devices">
        <ul className="mt-6 max-w-2xl space-y-3 text-sm font-semibold leading-6 text-muted">
          <li>Students can use the site as guests. Progress is stored on the device; no account or email is required.</li>
          <li>If a school wants progress to follow a student across devices, the student (or a parent, for younger children) can sign in and sync. See the <Link href="/privacy" className="font-bold text-accent">privacy page</Link> for what is stored.</li>
          <li>The site works in a modern browser on laptops, tablets and phones. Videos need an internet connection; notes and practice are light on data.</li>
          <li>Quest Academy is free for schools. There is no institutional licence to buy and no advertising.</li>
        </ul>
      </Section>

      <section className="border-t-2 border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-5 py-16">
          <div className="card mx-auto max-w-2xl p-6 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
              <Mail className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <h2 className="mt-4 text-2xl font-black text-ink">Get in touch</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted">
              We are setting up a schools desk for pilot requests, bulk worksheet needs and syllabus corrections. Contact details will appear here once it is ready. In the meantime, everything on the site is open to use without asking.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/worksheets" className="btn-primary">
                Start with worksheets
              </Link>
              <Link href="/about" className="btn-ghost">
                About Quest Academy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
