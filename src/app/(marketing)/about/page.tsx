import Link from "next/link";
import type { Metadata } from "next";
import { platformStats } from "@/content";
import { syllabusStats } from "@/content/syllabus";
import { pathways } from "@/content/pathways";
import { MODE_LIST } from "@/lib/modes";
import { Mascot } from "@/components/brand/Mascot";
import { PageIntro, Section } from "@/components/marketing/Section";

export const metadata: Metadata = {
  title: "About — Quest Academy",
  description: "What Quest Academy is, who it is for and how the lessons are built.",
};

export default function AboutPage() {
  const stats = platformStats();
  const chapters = syllabusStats().reduce((a, s) => a + s.chapters, 0);
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="A free learning site that grows with the learner"
        lede="Quest Academy started as a video channel. The site adds what a video cannot: notes to revise from, practice with feedback, and a record of what has been mastered."
      />

      <Section align="left" eyebrow="What we make" title="Lessons that follow one simple pattern">
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Video", "A short, focused explanation from the Quest Academy channel. Lessons are kept to one idea each."],
            ["Notes", "A written version with worked examples, so learners can revise without replaying the video."],
            ["Practice", "Questions with instant feedback, step-by-step solutions, and spaced review for things that are fading."],
          ].map(([t, b]) => (
            <article key={t} className="card p-5">
              <h3 className="font-black text-ink">{t}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-muted">{b}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-6 text-muted">
          Today the site has {stats.subjects} courses, {stats.lessons} lessons, {stats.questions.toLocaleString("en-IN")} practice questions, {chapters} mapped syllabus chapters and {pathways.length} career pathways. These numbers come from the content itself and update as lessons are added.
        </p>
      </Section>

      <section className="border-y-2 border-line bg-surface">
        <Section align="left" eyebrow="Who it is for" title="Five profiles, one site" className="!py-16">
          <ul className="mt-8 divide-y-2 divide-line">
            {MODE_LIST.map((m) => (
              <li key={m.id} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="font-mono text-sm font-bold text-accent">
                  {m.number} <span className="text-ink">{m.name}</span>
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">
                    {m.audience} <span className="font-semibold text-muted">· ages {m.ages}</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-muted">{m.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      <Section align="left" eyebrow="What we are not" title="A few honest limits">
        <ul className="mt-6 max-w-2xl space-y-3 text-sm font-semibold leading-6 text-muted">
          <li>We are not a school or a coaching institute. Quest Academy is a companion to classroom teaching, not a replacement for it.</li>
          <li>Pathway certificates are certificates of completion. They are not accredited and are not recognised by universities or examination boards.</li>
          <li>Syllabus mapping follows the published syllabi, which change. We check against the current official editions, but the board&apos;s own documents are the final word.</li>
          <li>There is no advertising. Progress stays on the device unless a learner chooses to sign in and sync.</li>
        </ul>
      </Section>

      <section className="border-t-2 border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 px-5 py-16 text-center sm:flex-row sm:text-left">
          <Mascot pose="read" size={120} />
          <div className="flex-1">
            <h2 className="text-2xl font-black text-ink">Questions, corrections, ideas?</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted">
              If a lesson has a mistake or a chapter is missing from a syllabus, we want to know. See the <Link href="/for-schools" className="font-bold text-accent">schools page</Link> for how to get in touch, or read our <Link href="/privacy" className="font-bold text-accent">privacy</Link> and <Link href="/terms" className="font-bold text-accent">terms</Link> pages.
            </p>
          </div>
          <Link href="/onboarding" className="btn-primary">
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}
