import Link from "next/link";
import type { Metadata } from "next";
import { Award, BookOpen, CalendarDays, Check, ClipboardList, FileText, ListChecks, PlayCircle, School, Users, Volume2 } from "lucide-react";
import { platformStats, subjects } from "@/content";
import { syllabusStats } from "@/content/syllabus";
import { pathways } from "@/content/pathways";
import { BOARDS, MODE_LIST } from "@/lib/modes";
import { Mascot } from "@/components/brand/Mascot";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { HomeCta } from "@/components/marketing/HomeCta";
import { Section } from "@/components/marketing/Section";
import { Faq, type FaqItem } from "@/components/marketing/Faq";

export const metadata: Metadata = {
  title: "Quest Academy — One place to learn, from first letters to first job",
  description: "Video lessons, clear notes and practice that tracks mastery. Primary school to university, board syllabi, NEET/JEE and career pathways, in one place.",
};

const faq: FaqItem[] = [
  {
    q: "Is Quest Academy free?",
    a: "Yes. Every course, lesson, practice set and worksheet on the site is free to use. You can start as a guest without creating an account.",
  },
  {
    q: "Which ages is it for?",
    a: "Everyone from about six upwards. The site adapts to five experience profiles, from Explore for primary school (bigger buttons, voice prompts) to Professional for adults following a career pathway. The profile is chosen at onboarding and can be changed in Settings.",
  },
  {
    q: "Do I need an account?",
    a: "No. In guest mode your progress is saved on your device. If you want to keep it across devices, you can sign in and sync it. Nothing is uploaded until you choose to do that.",
  },
  {
    q: "Which syllabi are covered?",
    a: "CBSE Class 9–12 (NCERT), Karnataka I and II PUC, ICSE (9–10) and ISC (11–12), plus the NTA NEET-UG and JEE Main syllabus. Each chapter is mapped to lessons and practice; a few are practice-only while lessons are being added.",
  },
  {
    q: "Are the certificates accredited?",
    a: "No. Pathway certificates are Quest Academy certificates of completion. They show which modules and assignments you finished and are not recognised by any university or examination board.",
  },
  {
    q: "How does a lesson work?",
    a: "Each lesson pairs a short video with a written explanation and a practice set. As you answer, the skill moves from Attempted to Familiar, Proficient and Mastered, so you can see what still needs work.",
  },
];

export default function Home() {
  const stats = platformStats();
  const syllabus = syllabusStats();
  const chaptersByBoard = Object.fromEntries(syllabus.map((s) => [s.board, s]));
  const totalChapters = syllabus.reduce((a, s) => a + s.chapters, 0);

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-2 lg:pt-20">
        <HeroArt />
        <div className="text-center lg:order-first lg:text-left">
          <p className="eyebrow">Free to learn, for every age</p>
          <h1 className="mt-3 text-[2.6rem] font-black leading-[1.12] tracking-tight text-ink sm:text-5xl">
            One place to learn, from <span className="text-accent">first letters</span> to <span className="text-accent">first job</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg font-semibold leading-8 text-muted lg:mx-0">
            Short video lessons, clear notes and practice that tracks what you have mastered. Primary school, board exams, NEET and JEE, university and career skills, all on one site.
          </p>
          <HomeCta />
          <p className="mt-4 text-sm font-semibold text-muted">No account needed to start. Progress stays on your device until you choose to sync.</p>
        </div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section className="border-y-2 border-line bg-surface">
        <dl className="mx-auto grid max-w-[1120px] grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-3 lg:grid-cols-6">
          <Stat value={stats.subjects} label="courses" />
          <Stat value={stats.lessons} label="lessons" />
          <Stat value={stats.questions} label="practice questions" />
          <Stat value={stats.flashcards} label="flashcards" />
          <Stat value={totalChapters} label="syllabus chapters" />
          <Stat value={pathways.length} label="career pathways" />
        </dl>
      </section>

      {/* ---------- EXPERIENCE PROFILES ---------- */}
      <Section
        id="profiles"
        eyebrow="Five experience profiles"
        title="The same site, shaped for the learner in front of it"
        lede="A six-year-old and a final-year student should not see the same screen. Quest Academy picks a profile at onboarding and adjusts type size, rewards, navigation and voice support to match."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {MODE_LIST.map((m) => (
            <article key={m.id} className="card flex flex-col p-5">
              <span className="font-mono text-sm font-bold text-accent">{m.number}</span>
              <h3 className="mt-2 text-xl font-black text-ink">{m.name}</h3>
              <p className="mt-1 text-sm font-bold text-ink">{m.audience}</p>
              <p className="text-sm font-semibold text-muted">Ages {m.ages}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-muted">{m.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="border-y-2 border-line bg-surface">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">Watch. Read. Practise. Master.</h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-muted">Every lesson follows the same four steps, so learners always know what comes next.</p>
            <ol className="mt-8 space-y-5">
              {[
                { icon: PlayCircle, title: "Watch", body: "A short video from the Quest Academy channel introduces the idea." },
                { icon: FileText, title: "Read", body: "A written explanation with worked examples, for revision and for learners who prefer text." },
                { icon: ListChecks, title: "Practise", body: "Questions with instant feedback and step-by-step solutions. Code and simulations run in the browser." },
                { icon: Award, title: "Master", body: "Each skill moves from Attempted to Familiar, Proficient and Mastered. Spaced review brings back what is fading." },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <s.icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-black text-ink">
                      <span className="mr-2 font-mono text-sm text-muted">{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <LessonMock />
            <MasteryMock />
          </div>
        </div>
      </section>

      {/* ---------- SYLLABUS COVERAGE ---------- */}
      <Section
        id="syllabus"
        eyebrow="Syllabus coverage"
        title="Mapped to the syllabus you are actually studying"
        lede="Focus mode turns each board syllabus into a chapter-by-chapter dashboard with lessons, drills, formula sheets and an exam countdown."
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOARDS.map((b) => {
            const s = chaptersByBoard[b.id];
            return (
              <article key={b.id} className="card p-5">
                <h3 className="text-xl font-black text-ink">{b.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted">{b.full}</p>
                <p className="mt-5 text-3xl font-black text-accent">{s?.chapters ?? 0}</p>
                <p className="text-sm font-bold text-muted">chapters mapped</p>
                {s && (
                  <p className="mt-3 text-xs font-semibold leading-5 text-muted">
                    {s.withLessons} with lessons{s.practiceOnly > 0 ? `, ${s.practiceOnly} practice-only` : ""}
                  </p>
                )}
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-semibold text-muted">
          Chapter mapping follows the known syllabi and is checked against the current official editions. Exam preparation includes chapter drills, a formula vault and full mock tests in the computer-based format.
        </p>
      </Section>

      {/* ---------- PATHWAYS ---------- */}
      <section className="border-y-2 border-line bg-surface">
        <Section
          id="pathways"
          eyebrow="Career pathways"
          title="Goal-first learning for adults"
          lede="Each pathway sequences existing lessons with workplace-style assignments and ends in a Quest Academy certificate of completion. The certificates are not accredited; they record what you built."
          className="!py-16 lg:!py-20"
        >
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((p) => (
              <Link key={p.slug} href={`/pathways/${p.slug}`} className="tile flex flex-col p-5">
                <span className="h-1.5 w-12 rounded-full" style={{ background: p.color }} />
                <h3 className="mt-4 text-lg font-black text-ink">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-muted">{p.goal}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">{p.weeks} weeks at 4 h/week</span>
                  <span className="chip">{p.modules.length} modules</span>
                  <span className="chip">{p.modules.length} assignments</span>
                </div>
              </Link>
            ))}
            <Link href="/pathways" className="tile flex flex-col items-start justify-center p-5">
              <Award className="h-8 w-8 text-accent" strokeWidth={2.2} />
              <h3 className="mt-3 text-lg font-black text-ink">Certificate of completion</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-muted">Finish every module and self-check the assignment rubrics to download your certificate. See all pathways.</p>
            </Link>
          </div>
        </Section>
      </section>

      {/* ---------- QUESTY + PLANNER ---------- */}
      <section className="mx-auto grid max-w-[1120px] gap-6 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <article className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <Mascot pose="wave" size={140} className="shrink-0 self-center" />
          <div>
            <p className="eyebrow">For young learners</p>
            <h2 className="mt-2 text-2xl font-black text-ink">Questy reads along</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-muted">
              In the Explore profile, Questy reads instructions and questions aloud, so children who are still learning to read can work on their own. Buttons are bigger, puzzles are visual, and rewards celebrate trying and improving rather than speed.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-bold text-ink">
              <Volume2 className="h-4 w-4 text-accent" strokeWidth={2.5} /> Voice prompts, no reading required
            </p>
          </div>
        </article>
        <article className="card p-6 sm:p-8">
          <p className="eyebrow">Study planner</p>
          <h2 className="mt-2 text-2xl font-black text-ink">A revision plan that fits the calendar</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-muted">
            Tell the planner your board, class and exam date. It spreads the remaining chapters over the weeks you have, keeps weak chapters near the top and adjusts as you complete practice.
          </p>
          <ul className="mt-5 space-y-2 text-sm font-bold text-ink">
            {["Exam countdown for boards, NEET and JEE", "Weekly targets by chapter weightage", "Spaced review slots built in"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-good" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
          <Link href="/plan" className="btn-ghost mt-6">
            <CalendarDays className="h-4 w-4" strokeWidth={2.5} /> Open the planner
          </Link>
        </article>
      </section>

      {/* ---------- COURSE GRID ---------- */}
      <section className="border-y-2 border-line bg-surface">
        <Section
          eyebrow="Course catalogue"
          title={`${stats.subjects} courses, ${stats.lessons} lessons`}
          lede="Start anywhere. Every course has videos, notes, practice sets and a mastery map."
          className="!py-16 lg:!py-20"
        >
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.slice(0, 12).map((s) => (
              <Link key={s.slug} href={`/course/${s.slug}`} className="tile flex items-center gap-3 p-3.5">
                <CourseIcon slug={s.slug} size={40} />
                <span className="truncate font-extrabold">{s.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/courses" className="btn-ghost">
              See all {stats.subjects} courses
            </Link>
          </div>
        </Section>
      </section>

      {/* ---------- PARENTS / TEACHERS / SCHOOLS ---------- */}
      <Section
        id="for-everyone"
        eyebrow="Around the learner"
        title="For parents, teachers and schools"
        lede="Learning happens at the kitchen table and in the classroom as much as on the screen."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "For parents",
              body: "The parent dashboard shows time spent, chapters completed and where your child is getting stuck, without scores being turned into pressure.",
              href: "/parent",
              cta: "Parent dashboard",
            },
            {
              icon: ClipboardList,
              title: "For teachers",
              body: "Printable worksheets by chapter, with answer keys, for homework and quick classroom checks. A library of notes and formula sheets to point students to.",
              href: "/worksheets",
              cta: "Browse worksheets",
            },
            {
              icon: School,
              title: "For schools",
              body: "Use Quest Academy as a free companion to the syllabus: lessons for flipped classrooms, drills for revision weeks and parent reports at term end.",
              href: "/for-schools",
              cta: "Classroom guide",
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
        <p className="mt-6 text-center text-sm font-semibold text-muted">
          Looking for reading material? The <Link href="/library" className="font-bold text-accent">library</Link> collects notes, formula sheets and reference articles by subject.
        </p>
      </Section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t-2 border-line bg-surface">
        <Section id="faq" eyebrow="Questions" title="Frequently asked" className="!py-16 lg:!py-20">
          <Faq items={faq} />
        </Section>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t-2 border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center px-5 py-20 text-center">
          <Mascot pose="cheer" size={140} />
          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">Start with one lesson today</h2>
          <p className="mt-3 max-w-md text-lg font-semibold text-muted">Pick an age profile, choose a course and see how the practice works. It takes about two minutes.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/onboarding" className="btn-primary px-10 py-4 text-base">
              Get started
            </Link>
            <Link href="/courses" className="btn-ghost px-10 py-4 text-base">
              <BookOpen className="h-4 w-4" strokeWidth={2.5} /> Browse courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <dt className="order-last text-xs font-bold uppercase tracking-wide text-muted">{label}</dt>
      <dd className="text-3xl font-black text-ink">{value.toLocaleString("en-IN")}</dd>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Illustrations built from real UI pieces (no stock art)               */
/* ------------------------------------------------------------------ */

function HeroArt() {
  const ring = ["python", "exam-physics", "abc-adventures", "machine-learning", "biology-school", "math-high", "javascript", "finance"];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-[6%] rounded-full bg-accent-soft" />
      <div className="absolute inset-0 grid place-items-center">
        <Mascot pose="cheer" size={210} />
      </div>
      {ring.map((slug, i) => {
        const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
        const r = 44;
        return (
          <div key={slug} className="absolute -translate-x-1/2 -translate-y-1/2 animate-float motion-reduce:animate-none" style={{ left: `${50 + r * Math.cos(a)}%`, top: `${50 + r * Math.sin(a)}%`, animationDelay: `${i * 0.35}s` }}>
            <CourseIcon slug={slug} size={i % 2 ? 52 : 62} />
          </div>
        );
      })}
    </div>
  );
}

function LessonMock() {
  return (
    <div className="card mx-auto max-w-[480px] overflow-hidden" aria-label="Example lesson">
      <div className="relative grid aspect-video place-items-center bg-[#1C2333]">
        <div className="absolute left-4 top-4 flex items-center gap-2 text-sm font-bold text-white/80">
          <CourseIcon slug="physics-school" size={28} /> Projectile motion
        </div>
        <PlayCircle className="h-16 w-16 text-white" strokeWidth={1.6} />
        <div className="absolute inset-x-4 bottom-4 h-1.5 rounded-full bg-white/20">
          <div className="h-full w-2/5 rounded-full bg-accent" />
        </div>
      </div>
      <div className="space-y-3 p-5">
        {[
          ["Watch the video", true],
          ["Read the lesson", true],
          ["Practice · 5 questions", false],
        ].map(([t, done]) => (
          <div key={t as string} className="flex items-center gap-3">
            <span className={`grid h-7 w-7 place-items-center rounded-full ${done ? "bg-good text-white" : "border-2 border-line"}`}>{done && <Check className="h-4 w-4" strokeWidth={3.5} />}</span>
            <span className="font-bold">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MasteryMock() {
  const levels = [4, 4, 3, 4, 3, 2, 3, 2, 2, 1, 2, 1, 0, 1, 0, 0, 0, 0];
  const color = ["rgb(var(--line))", "#FFB800", "#FF8A00", "#2F6BFF", "#7C4DFF"];
  return (
    <div className="card mx-auto max-w-[480px] p-6" aria-label="Example mastery map">
      <div className="flex items-center justify-between">
        <span className="font-black">Mastery map</span>
        <span className="chip">example</span>
      </div>
      <div className="mt-4 grid grid-cols-9 gap-1.5">
        {levels.map((l, i) => (
          <span key={i} className="aspect-square rounded-md" style={{ background: color[l] }} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-muted">
        {["Mastered", "Proficient", "Familiar", "Attempted"].map((n, i) => (
          <span key={n} className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded" style={{ background: color[4 - i] }} /> {n}
          </span>
        ))}
      </div>
    </div>
  );
}
