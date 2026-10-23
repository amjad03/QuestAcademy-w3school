import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BarChart3, BookOpen, CalendarDays, ClipboardList, Code2, MessageCircleQuestion, School, Target, Users } from "lucide-react";
import { platformStats, subjects } from "@/content";
import { syllabusStats } from "@/content/syllabus";
import { pathways } from "@/content/pathways";
import { BOARDS } from "@/lib/modes";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Faq, type FaqItem } from "@/components/marketing/Faq";
import { AgeSwitcher } from "@/components/marketing/landing/AgeSwitcher";
import { LanguageShowcase } from "@/components/marketing/landing/LanguageShowcase";
import { HeroPlayground } from "@/components/marketing/landing/HeroPlayground";
import { LiveExplainer } from "@/components/marketing/landing/LiveExplainer";

export const metadata: Metadata = {
  title: "Quest Academy: free lessons and practice from pre-school to college",
  description: "Lessons, practice and mock tests mapped to CBSE, ICSE, Karnataka PUC, NEET and JEE, plus college subjects and career skills. In English and six Indian languages. Free.",
};

const faq: FaqItem[] = [
  { q: "Is Quest Academy free?", a: "Yes. All courses, lessons, practice sets and worksheets are free. You can start without creating an account." },
  {
    q: "Which ages is it for?",
    a: "From about age three to adult learners. There are seven profiles, each with its own interface: Sprout (pre-primary), Explore (primary), Adventure (middle school), Focus (high school, PUC and entrance exams), Mastery (undergraduate), Research (postgraduate) and Professional (working adults). You choose one when you start and can change it in Settings.",
  },
  {
    q: "Which languages are supported?",
    a: "The interface, course names and syllabus chapters are available in English, Hindi, Kannada, Tamil, Telugu, Marathi and Bengali. Lessons from pre-school to Class 10 are available in Hindi and Kannada, with other languages in progress. Translations are machine-generated and are being reviewed by teachers. Every translated lesson has a Show original option.",
  },
  { q: "Which syllabi are covered?", a: "CBSE Class 9 to 12 (NCERT), Karnataka I and II PUC, ICSE (Class 9 and 10), ISC (Class 11 and 12), and the NTA syllabus for NEET-UG and JEE Main. Each chapter links to lessons and practice." },
  { q: "Do I need an account?", a: "No. As a guest, your progress is saved on your device. Sign in if you want to use the same progress on several devices." },
  { q: "What is Ask Questy?", a: "A tutor inside lessons and practice. It responds with hints and questions rather than giving the answer. During tests it is available only after you have answered. Parents can turn it off." },
  { q: "Are the certificates accredited?", a: "No. Pathway certificates are certificates of completion from Quest Academy. They are not recognised by any university or examination board." },
];

const CATEGORIES: { label: string; slugs: string[] }[] = [
  { label: "Early learning", slugs: ["abc-adventures", "number-land", "shapes-colors", "my-world", "math-magic"] },
  { label: "School", slugs: ["math-middle", "math-high", "physics-school", "chemistry-school", "biology-school", "social-studies"] },
  { label: "Class 11 and 12", slugs: ["physics-senior", "chemistry-senior", "biology-senior", "maths-senior"] },
  { label: "NEET and JEE", slugs: ["exam-physics", "exam-chemistry", "exam-biology", "exam-maths"] },
  { label: "Coding", slugs: ["html", "css", "javascript", "python", "sql"] },
  { label: "College", slugs: ["dsa", "machine-learning", "electrical-engineering", "finance", "economics", "psychology"] },
];

export default function Home() {
  const stats = platformStats();
  const syllabus = syllabusStats();
  const byBoard = Object.fromEntries(syllabus.map((s) => [s.board, s]));
  const totalChapters = syllabus.reduce((a, s) => a + s.chapters, 0);
  const bySlug = new Map(subjects.map((s) => [s.slug, s]));
  const n = (x: number) => x.toLocaleString("en-IN");

  return (
    <main className="font-landing">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
          <div>
            <h1 className="text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[3.25rem]">Learn anything from pre-school to college, in your language.</h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-8 text-muted">
              Lessons, practice and mock tests mapped to CBSE, ICSE, Karnataka PUC, NEET and JEE, plus college subjects and career skills. Available in English and six Indian languages. Free, and no account is needed.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/onboarding" className="btn-primary px-7 py-3.5 text-base">
                Start learning
              </Link>
              <Link href="/courses" className="btn-ghost px-7 py-3.5 text-base">
                Browse courses
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-muted">Try a question from one of the courses:</p>
            <HeroPlayground />
          </div>
        </div>
      </section>

      {/* Figures */}
      <section className="border-b border-line bg-surface">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-8 px-5 py-10 lg:grid-cols-4">
          {[
            [n(stats.subjects), "courses"],
            [n(stats.lessons), "lessons"],
            [n(stats.questions), "practice questions"],
            [n(totalChapters), "syllabus chapters mapped"],
          ].map(([v, l]) => (
            <div key={l} className="flex flex-col-reverse px-2 lg:border-l lg:border-line lg:px-8 lg:first:border-l-0 lg:first:pl-0">
              <dt className="mt-1 text-sm text-muted">{l}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Profiles */}
      <section id="profiles" className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHead title="Designed for each stage of learning" body="Each age group gets its own interface: navigation, lesson pages, practice and rewards. Select a profile to see it." />
        <AgeSwitcher />
      </section>

      {/* Explainers */}
      <section className="border-y border-line bg-surface-2/50">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <SectionHead title="Interactive explainers" body="Key concepts are explained in four ways: a step-by-step animation, a hands-on activity, a short comic and an everyday comparison. The example below is the same component used in the lessons." />
          <div className="mt-10">
            <LiveExplainer />
          </div>
          <p className="mt-6">
            <Link href="/explain" className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
              View all explainers <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Languages */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-[2.25rem]">Seven languages</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            English, Hindi, Kannada, Tamil, Telugu, Marathi and Bengali. The interface, course names and syllabus chapters are translated in all seven. Lessons up to Class 10 are available in Hindi and Kannada, with more in progress.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink marker:text-muted">
            <li>Mathematical notation, formulas and code are never altered.</li>
            <li>Fill-in answers are accepted in English or the selected language.</li>
            <li>Every translated lesson can be switched back to the original English.</li>
            <li>Translations are machine-generated and are being reviewed by teachers.</li>
          </ul>
        </div>
        <LanguageShowcase />
      </section>

      {/* Features */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <SectionHead title="What is included" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageCircleQuestion, title: "Ask Questy", body: "A tutor inside every lesson and practice set. It gives hints and asks guiding questions instead of giving the answer. In tests it is available only after you answer.", href: "/learn" },
              { icon: Target, title: "Exam preparation", body: "Chapter drills, a formula reference and full-length mock tests in the computer-based format, with negative marking and a performance report.", href: "/exam" },
              { icon: BarChart3, title: "Mastery tracking", body: "Each skill moves through Attempted, Familiar, Proficient and Mastered as you practise. Spaced review brings back topics before they are forgotten.", href: "/insights" },
              { icon: CalendarDays, title: "Study planner", body: "Enter your exam date and available hours. The planner schedules the remaining chapters and adjusts when you fall behind.", href: "/plan" },
              { icon: Code2, title: "Code lab", body: "Python, JavaScript, HTML, CSS and SQL run in the browser with no installation. Coding challenges are checked automatically.", href: "/code/playground" },
              { icon: Users, title: "Parent dashboard", body: "Time spent, chapters completed and topics that need attention, with a setting to turn the tutor off.", href: "/parent" },
            ].map((f) => (
              <Link key={f.title} href={f.href} className="group block">
                <f.icon className="h-6 w-6 text-accent" strokeWidth={2} />
                <h3 className="mt-4 text-lg font-bold text-ink group-hover:text-accent">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{f.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHead title="Mapped to your syllabus" body="Choose your board and class to see every chapter with its weightage, linked lessons, practice drills and formula sheets." />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-surface-2/70 text-sm text-muted">
              <tr>
                <th className="px-5 py-3 font-semibold">Board</th>
                <th className="hidden px-5 py-3 font-semibold sm:table-cell">Coverage</th>
                <th className="px-5 py-3 text-right font-semibold">Chapters</th>
                <th className="px-5 py-3 text-right font-semibold">With lessons</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-surface">
              {BOARDS.map((b) => {
                const s = byBoard[b.id];
                return (
                  <tr key={b.id}>
                    <td className="px-5 py-4 font-bold text-ink">{b.name}</td>
                    <td className="hidden px-5 py-4 text-muted sm:table-cell">{b.full}</td>
                    <td className="px-5 py-4 text-right tabular-nums text-ink">{s?.chapters ?? 0}</td>
                    <td className="px-5 py-4 text-right tabular-nums text-ink">{s?.withLessons ?? 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          <Link href="/library" className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
            Browse by class <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </section>

      {/* Courses */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title={`${stats.subjects} courses`} />
            <Link href="/courses" className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
              All courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.label}>
                <h3 className="text-sm font-semibold text-muted">{c.label}</h3>
                <ul className="mt-3 space-y-1">
                  {c.slugs.map((slug) => {
                    const s = bySlug.get(slug);
                    if (!s) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/course/${slug}`} className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-1.5 text-[15px] font-semibold text-ink hover:bg-surface-2">
                          <CourseIcon slug={slug} size={28} />
                          {s.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section id="pathways" className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead title="Career pathways" body="Structured programmes that combine lessons with practical assignments and end in a certificate of completion." />
          <Link href="/pathways" className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
            All pathways <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pathways.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/pathways/${p.slug}`} className="group rounded-2xl border border-line bg-surface p-6 transition hover:border-ink/20">
              <h3 className="text-lg font-bold text-ink group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-muted">{p.goal}</p>
              <p className="mt-4 text-sm text-muted">
                {p.weeks} weeks · {p.modules.length} modules
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Parents, teachers, schools */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 md:grid-cols-3">
          {[
            { icon: Users, title: "For parents", body: "See time spent, chapters completed and where your child needs help.", href: "/parent", cta: "Parent dashboard" },
            { icon: ClipboardList, title: "For teachers", body: "Printable worksheets for each chapter with answer keys, plus notes and formula sheets.", href: "/worksheets", cta: "Worksheets" },
            { icon: School, title: "For schools", body: "Use lessons for flipped classrooms, drills during revision and progress reports at the end of term.", href: "/for-schools", cta: "Guide for schools" },
          ].map((c) => (
            <div key={c.title}>
              <c.icon className="h-6 w-6 text-accent" strokeWidth={2} />
              <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-muted">{c.body}</p>
              <Link href={c.href} className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-accent hover:underline">
                {c.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[860px] px-5 py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-[2.25rem]">Frequently asked questions</h2>
        <Faq items={faq} />
      </section>

      {/* Closing */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">Start with any lesson.</h2>
            <p className="mt-2 text-lg text-muted">No account or payment required.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/onboarding" className="btn-primary px-7 py-3.5 text-base">
              Start learning
            </Link>
            <Link href="/courses" className="btn-ghost px-7 py-3.5 text-base">
              <BookOpen className="h-4 w-4" /> Browse courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHead({ title, body }: { title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-[2.25rem]">{title}</h2>
      {body && <p className="mt-4 text-lg leading-8 text-muted">{body}</p>}
    </div>
  );
}
