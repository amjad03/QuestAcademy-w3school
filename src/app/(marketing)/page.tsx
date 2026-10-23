import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, BookOpen, CalendarDays, Check, ClipboardList, Code2, Languages, ListChecks, PlayCircle, School, Sparkles, Target, Users } from "lucide-react";
import { platformStats, subjects } from "@/content";
import { syllabusStats } from "@/content/syllabus";
import { pathways } from "@/content/pathways";
import { BOARDS } from "@/lib/modes";
import { Mascot } from "@/components/brand/Mascot";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { HomeCta } from "@/components/marketing/HomeCta";
import { Faq, type FaqItem } from "@/components/marketing/Faq";
import { AgeSwitcher } from "@/components/marketing/landing/AgeSwitcher";
import { LanguageShowcase } from "@/components/marketing/landing/LanguageShowcase";

export const metadata: Metadata = {
  title: "Quest Academy — One place to learn, from first letters to first job",
  description: "Game-like lessons for young children, a focused classroom for teens and adults, your exact board syllabus, NEET/JEE prep and career skills. In English and six Indian languages. Free.",
};

const faq: FaqItem[] = [
  { q: "Is Quest Academy free?", a: "Yes. Every course, lesson, practice set and worksheet is free. You can start as a guest without creating an account." },
  {
    q: "Which ages is it for?",
    a: "Everyone from about three upwards. There are seven experience profiles, each with its own design: Sprout (pre-primary, everything spoken), Explore (primary school), Adventure (middle school), Focus (high school, PUC and entrance exams), Mastery (undergraduates), Research (postgraduates) and Professional (working adults). The profile is picked at onboarding and can be changed in Settings.",
  },
  { q: "Which languages are supported?", a: "English, Hindi, Kannada, Tamil, Telugu, Marathi and Bengali for the whole interface, course names and syllabus chapters. School lessons from the kids’ courses up to Class 10 are available in Hindi and Kannada, with more on the way. Translations are AI-made and being reviewed by teachers; you can always tap “Show original”." },
  { q: "Which syllabi are covered?", a: "CBSE Class 9–12 (NCERT), Karnataka I and II PUC, ICSE (9–10) and ISC (11–12), plus the NTA NEET-UG and JEE Main syllabus. Every chapter opens real lessons and practice." },
  { q: "Do I need an account?", a: "No. In guest mode your progress is saved on your device. If you want it on several devices, sign in and sync. Nothing is uploaded until you choose to." },
  { q: "What is Ask Questy?", a: "A tutor built into lessons and practice. It answers with hints and questions that help you work it out, instead of handing over the answer. In tests it opens only after you’ve answered, and parents can switch it off." },
  { q: "Are the certificates accredited?", a: "No. Pathway certificates are Quest Academy certificates of completion. They record the modules and assignments you finished and are not recognised by any university or examination board." },
];

export default function Home() {
  const stats = platformStats();
  const syllabus = syllabusStats();
  const byBoard = Object.fromEntries(syllabus.map((s) => [s.board, s]));
  const totalChapters = syllabus.reduce((a, s) => a + s.chapters, 0);
  const n = (x: number) => x.toLocaleString("en-IN");

  return (
    <main className="overflow-x-clip">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#2F6BFF]/15 blur-3xl" />
          <div className="absolute -top-20 right-[-8%] h-[460px] w-[460px] rounded-full bg-[#7C4DFF]/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#2EBE70]/10 blur-3xl" />
          <div className="absolute inset-0 [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:pb-28 lg:pt-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface px-3 py-1 text-sm font-bold text-ink shadow-soft">
              <Sparkles className="h-4 w-4 text-[#7C4DFF]" /> Free for everyone · now in 7 Indian languages
            </span>
            <h1 className="mt-6 text-[2.75rem] font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
              The learning app that <span className="bg-gradient-to-r from-[#2F6BFF] to-[#7C4DFF] bg-clip-text text-transparent">grows up with you</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-8 text-muted lg:mx-0">
              Playful, spoken lessons for little ones. A calm, focused classroom for teens and adults. Your exact board syllabus, NEET and JEE prep, college subjects and career skills — from first letters to first job.
            </p>
            <div className="lg:max-w-sm">
              <HomeCta />
            </div>
            <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-muted lg:mx-0 lg:justify-start">
              {["No sign-up needed", "CBSE · ICSE · PUC · NEET · JEE", "Works on any phone"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-good" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroComposite />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y-2 border-line bg-surface">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 divide-line px-5 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x-2">
          {[
            [stats.subjects, "courses"],
            [stats.lessons, "lessons"],
            [stats.questions, "practice questions"],
            [totalChapters, "syllabus chapters"],
            [7, "languages"],
            [30, "visual explainers"],
          ].map(([v, l]) => (
            <div key={l as string} className="flex flex-col items-center px-3 py-7">
              <dd className="text-3xl font-black tracking-tight text-ink sm:text-4xl">{n(v as number)}</dd>
              <dt className="mt-1 text-center text-xs font-bold uppercase tracking-wider text-muted">{l}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ================= AGE PROFILES ================= */}
      <section id="profiles" className="mx-auto max-w-[1200px] px-5 py-20 lg:py-28">
        <Heading eyebrow="Seven experiences, one account" title="A different app for every age" lede="A four-year-old, a Class 12 student and a PhD scholar shouldn’t see the same screen. Pick an age to see how Quest Academy changes — navigation, lessons, practice and rewards." />
        <AgeSwitcher />
      </section>

      {/* ================= LANGUAGES ================= */}
      <section className="border-y-2 border-line bg-surface-2/60">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Learn in your language</p>
            <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
              Think in the language <br className="hidden sm:block" />
              you dream in.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-muted">
              Switch between English, हिन्दी, ಕನ್ನಡ, தமிழ், తెలుగు, मराठी and বাংলা at any time — menus, courses, syllabus chapters and lessons follow. Maths, formulas and code stay exactly as your textbook writes them, and one tap shows the original English.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["Textbook terms", "NCERT and state-board vocabulary"],
                ["Read aloud", "Lessons spoken in your language"],
                ["Answer either way", "Type in English or your language"],
                ["Show original", "Compare with English in one tap"],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl border-2 border-line bg-surface p-4">
                  <p className="flex items-center gap-2 font-black text-ink">
                    <Languages className="h-4 w-4 text-accent" /> {t}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <LanguageShowcase />
        </div>
      </section>

      {/* ================= BENTO ================= */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 lg:py-28">
        <Heading eyebrow="Why learners stay" title="Everything you need to actually understand" lede="Not just videos. Pictures that explain, a tutor that makes you think, and practice that remembers what you’ve mastered." />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <article className="relative overflow-hidden rounded-[28px] border-2 border-line bg-surface p-6 md:col-span-4 md:p-8">
            <p className="eyebrow">See it</p>
            <h3 className="mt-2 text-2xl font-black text-ink">Every big idea, explained four ways</h3>
            <p className="mt-2 max-w-lg font-semibold leading-7 text-muted">An animation to watch, something to try with your hands, a short comic and an everyday comparison — simple enough for a seven-year-old, useful at seventeen.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["🌱", "How plants make food", "how-plants-make-food", "#2EBE70"],
                ["⚖️", "Equations are a balance", "balance-equations", "#2F6BFF"],
                ["💡", "Current is like water", "electric-circuits", "#FFB800"],
                ["🔁", "Loops repeat steps", "coding-loops", "#7C4DFF"],
              ].map(([e, t, id, c]) => (
                <Link key={id} href={`/explain/${id}`} className="group rounded-2xl border-2 border-line p-3 transition hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl text-2xl" style={{ background: `color-mix(in srgb, ${c} 16%, white)` }}>
                    {e}
                  </span>
                  <p className="mt-3 text-sm font-black leading-snug text-ink group-hover:text-accent">{t}</p>
                </Link>
              ))}
            </div>
            <Link href="/explain" className="mt-6 inline-flex items-center gap-1.5 font-black text-accent">
              See all 30 explainers <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="flex flex-col rounded-[28px] border-2 border-line bg-[#14214A] p-6 text-white md:col-span-2 md:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60">Ask Questy</p>
            <h3 className="mt-2 text-2xl font-black">A tutor that makes you think</h3>
            <div className="mt-5 flex-1 space-y-3 text-sm font-semibold">
              <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2F6BFF] px-3.5 py-2.5">Just tell me the answer 😩</p>
              <div className="flex items-end gap-2">
                <Mascot pose="think" size={34} animate={false} />
                <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-3.5 py-2.5">Let’s get there together. If a car goes 60 km in one hour, how far does it go in half an hour?</p>
              </div>
              <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2F6BFF] px-3.5 py-2.5">30 km… oh! So average speed is total distance ÷ total time?</p>
              <div className="flex items-end gap-2">
                <Mascot pose="cheer" size={34} animate={false} />
                <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-3.5 py-2.5">Exactly. Try the question again with that idea. 🎯</p>
              </div>
            </div>
          </article>

          <Feature className="md:col-span-2" icon={Target} color="#FF4B4B" title="Exam-ready" body="Chapter drills, a formula vault and full mock tests in the real computer-based format, with a report on where you lost marks." href="/exam" cta="Exam prep" />
          <Feature className="md:col-span-2" icon={Code2} color="#334155" title="Code right in the browser" body="Python, JavaScript, HTML, CSS and SQL run instantly — no installs. Challenges check your code as you go." href="/code/playground" cta="Open the code lab" />
          <article className="rounded-[28px] border-2 border-line bg-surface p-6 md:col-span-2">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7C4DFF]/10 text-[#7C4DFF]">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-xl font-black text-ink">Mastery you can see</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted">Every skill climbs from Attempted to Familiar, Proficient and Mastered. Spaced review brings back what’s fading.</p>
            <div className="mt-4 grid grid-cols-9 gap-1" aria-hidden>
              {[4, 4, 3, 4, 3, 2, 3, 2, 2, 1, 2, 1, 0, 1, 0, 0, 3, 4].map((l, i) => (
                <span key={i} className="aspect-square rounded-[4px]" style={{ background: ["rgb(var(--line))", "#E9DFFF", "#C4B1FF", "#9575FF", "#5B2FD6"][l] }} />
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ================= SYLLABUS ================= */}
      <section id="syllabus" className="relative overflow-hidden bg-[#0F1A3D] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#2F6BFF]/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white/60">Your syllabus, exactly</p>
            <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Every chapter of your board, already mapped.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">
              Pick your board and class. The Focus dashboard lists every chapter with its weightage, opens the matching lessons, drills and formula sheets, and counts down to your exam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/onboarding" className="btn bg-white text-[#0F1A3D]">
                Open my syllabus <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/library" className="btn bg-transparent text-white shadow-none ring-2 ring-inset ring-white/40 hover:bg-white/10">
                Browse by class
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BOARDS.map((b) => {
              const s = byBoard[b.id];
              return (
                <article key={b.id} className="rounded-3xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur">
                  <p className="text-lg font-black">{b.name}</p>
                  <p className="text-sm font-semibold text-white/60">{b.full}</p>
                  <p className="mt-5 text-5xl font-black tracking-tight">{s?.chapters ?? 0}</p>
                  <p className="text-sm font-bold text-white/70">chapters · {s?.withLessons ?? 0} with full lessons</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-[#4ADE80]" style={{ width: `${s && s.chapters ? Math.round((s.withLessons / s.chapters) * 100) : 0}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW A LESSON WORKS ================= */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 lg:py-28">
        <Heading eyebrow="How it works" title="Watch. Read. Practise. Master." lede="Every lesson follows the same four steps, so you always know what comes next." />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: PlayCircle, color: "#2F6BFF", title: "Watch", body: "A short video or a picture explainer introduces the idea." },
            { icon: BookOpen, color: "#2EBE70", title: "Read", body: "Clear notes with worked examples, read aloud if you like." },
            { icon: ListChecks, color: "#FF8A00", title: "Practise", body: "Instant feedback, step-by-step solutions and a tutor for hints." },
            { icon: Award, color: "#7C4DFF", title: "Master", body: "Your skill levels up, and review brings it back before you forget." },
          ].map((s, i) => (
            <li key={s.title} className="relative rounded-[28px] border-2 border-line bg-surface p-6">
              <span className="absolute right-5 top-5 font-mono text-sm font-bold text-muted">0{i + 1}</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: s.color }}>
                <s.icon className="h-6 w-6" strokeWidth={2.4} />
              </span>
              <h3 className="mt-5 text-xl font-black text-ink">{s.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ================= COURSES MARQUEE ================= */}
      <section className="border-y-2 border-line bg-surface py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Course catalogue</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                {stats.subjects} courses, {n(stats.lessons)} lessons
              </h2>
            </div>
            <Link href="/courses" className="btn-ghost">
              See every course <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-10 space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {[subjects.slice(0, Math.ceil(subjects.length / 2)), subjects.slice(Math.ceil(subjects.length / 2))].map((row, r) => (
            <div key={r} className="flex w-max animate-marquee gap-3 motion-reduce:animate-none" style={r ? { animationDirection: "reverse" } : undefined}>
              {[...row, ...row].map((s, i) => (
                <Link key={`${s.slug}-${i}`} href={`/course/${s.slug}`} tabIndex={i >= row.length ? -1 : undefined} aria-hidden={i >= row.length || undefined} className="flex w-[260px] shrink-0 items-center gap-3 rounded-2xl border-2 border-line bg-bg p-3 transition hover:border-accent/40">
                  <CourseIcon slug={s.slug} size={40} />
                  <span className="min-w-0">
                    <span className="block truncate font-extrabold text-ink">{s.title}</span>
                    <span className="block truncate text-xs font-semibold text-muted">{s.levels.slice(0, 2).join(" · ")}</span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAREERS ================= */}
      <section id="pathways" className="mx-auto max-w-[1200px] px-5 py-20 lg:py-28">
        <Heading eyebrow="For college and careers" title="Learn for the job you want" lede="Goal-first pathways sequence lessons with workplace-style assignments and end in a certificate of completion." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pathways.slice(0, 5).map((p) => (
            <Link key={p.slug} href={`/pathways/${p.slug}`} className="group flex flex-col rounded-[28px] border-2 border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="h-1.5 w-14 rounded-full" style={{ background: p.color }} />
              <h3 className="mt-5 text-xl font-black text-ink group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-muted">{p.goal}</p>
              <p className="mt-auto pt-5 text-sm font-bold text-muted">
                {p.weeks} weeks · {p.modules.length} modules · certificate
              </p>
            </Link>
          ))}
          <Link href="/pathways" className="flex flex-col justify-center rounded-[28px] border-2 border-dashed border-line p-6 text-center transition hover:border-accent/50">
            <Award className="mx-auto h-9 w-9 text-accent" />
            <p className="mt-3 text-lg font-black text-ink">All career pathways</p>
            <p className="mt-1 text-sm font-semibold text-muted">Certificates are not accredited — they record what you built.</p>
          </Link>
        </div>
      </section>

      {/* ================= AROUND THE LEARNER ================= */}
      <section className="border-y-2 border-line bg-surface-2/60">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <Heading eyebrow="Around the learner" title="Made for parents, teachers and schools too" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: Users, title: "Parents", body: "See time spent, chapters done and where your child is stuck — without turning scores into pressure. Turn the tutor off with one switch.", href: "/parent", cta: "Parent dashboard" },
              { icon: ClipboardList, title: "Teachers", body: "Printable chapter worksheets with answer keys, notes and formula sheets to point students to.", href: "/worksheets", cta: "Worksheets" },
              { icon: School, title: "Schools", body: "A free companion to the syllabus: lessons for flipped classrooms, drills for revision weeks, reports at term end.", href: "/for-schools", cta: "Classroom guide" },
            ].map((c) => (
              <Link key={c.title} href={c.href} className="group flex flex-col rounded-[28px] border-2 border-line bg-surface p-6 transition hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <c.icon className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 text-xl font-black text-ink">For {c.title.toLowerCase()}</h3>
                <p className="mt-2 flex-1 text-sm font-semibold leading-6 text-muted">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-black text-accent">
                  {c.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="mx-auto max-w-[860px] px-5 py-20 lg:py-24">
        <Heading eyebrow="Questions" title="Frequently asked" />
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#2F6BFF] via-[#4F5BFF] to-[#7C4DFF] px-6 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden />
          <div className="relative">
            <Mascot pose="cheer" size={120} className="mx-auto" />
            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Your first lesson takes two minutes.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-white/85">Pick your age and language, choose a course and see how practice feels. No account, no payment, no ads.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/onboarding" className="btn bg-white px-10 py-4 text-base text-[#2F3BD9]">
                Start learning free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/courses" className="btn bg-transparent px-10 py-4 text-base text-white shadow-none ring-2 ring-inset ring-white/50 hover:bg-white/10">
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Heading({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">{title}</h2>
      {lede && <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-muted">{lede}</p>}
    </div>
  );
}

function Feature({ icon: Icon, color, title, body, href, cta, className }: { icon: typeof Target; color: string; title: string; body: string; href: string; cta: string; className?: string }) {
  return (
    <Link href={href} className={`group flex flex-col rounded-[28px] border-2 border-line bg-surface p-6 transition hover:shadow-lift ${className ?? ""}`}>
      <span className="grid h-11 w-11 place-items-center rounded-2xl" style={{ background: `color-mix(in srgb, ${color} 12%, transparent)`, color }}>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-xl font-black text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm font-semibold leading-6 text-muted">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-accent">
        {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Hero: a lesson on a laptop and the kids' path on a phone, drawn     */
/* from the real UI rather than stock art.                              */
/* ------------------------------------------------------------------ */

function HeroComposite() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] pb-16 pt-4" aria-hidden>
      {/* Laptop: Class 10 lesson in Hindi */}
      <div className="ml-auto w-[76%] rounded-[22px] border-2 border-line bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(20,33,74,0.45)]">
        <div className="overflow-hidden rounded-[16px] border border-line">
          <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 truncate rounded-md bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted">questacademy.in/course/physics-school</span>
          </div>
          <div className="bg-surface p-4 sm:p-5">
            <div className="rounded-xl bg-[#14214A] p-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">आपके सिलेबस में अगला</p>
              <p className="mt-1 text-lg font-bold sm:text-xl">दूरी, चाल और वेग</p>
              <p className="mt-1 text-xs text-white/70">अदिश बनाम सदिश, दूरी बनाम विस्थापन, औसत चाल और वेग</p>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                <span className="rounded-full border border-white/30 px-2 py-0.5">लेख · 15 मिनट</span>
                <span className="rounded-full border border-white/30 px-2 py-0.5">प्रैक्टिस</span>
                <span className="rounded-full border border-white/30 px-2 py-0.5">फ़्लैशकार्ड</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                ["115", "दिन", "#2F6BFF"],
                ["27", "अध्याय", "#2EBE70"],
                ["4", "दिन की स्ट्रीक", "#FF8A00"],
              ].map(([v, l, c]) => (
                <div key={l} className="rounded-xl border border-line p-2">
                  <p className="text-xl font-black" style={{ color: c }}>
                    {v}
                  </p>
                  <p className="text-[11px] font-semibold text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone: the kids' path */}
      <div className="absolute bottom-0 left-0 w-[29%] min-w-[118px] max-w-[180px] rotate-[-4deg] rounded-[30px] border-[6px] border-[#1C2333] bg-[#EAF4FF] p-3 shadow-[0_24px_60px_-20px_rgba(20,33,74,0.5)]">
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-[#1C2333]/20" />
        <div className="rounded-xl bg-[#2EBE70] px-2.5 py-2 text-[11px] font-black text-white shadow-[0_3px_0_#1F9B58]">Unit 1 · Let’s Count!</div>
        <div className="mt-3 flex flex-col items-center gap-2.5 pb-2">
          <div className="flex items-center gap-1">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FFB800] text-white shadow-[0_4px_0_#E09600]">
              <Check className="h-5 w-5" strokeWidth={4} />
            </span>
          </div>
          <div className="ml-8 flex items-center gap-1">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#2EBE70] text-lg text-white shadow-[0_4px_0_#1F9B58]">★</span>
            <Mascot pose="wave" size={34} animate={false} />
          </div>
          <span className="text-2xl">🧰</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#D7DEEA] shadow-[0_4px_0_#B8C2D3]">🏆</span>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-2 top-0 flex animate-float items-center gap-2 rounded-2xl border-2 border-line bg-surface px-3 py-2 text-sm font-black text-good-shade shadow-lift motion-reduce:animate-none sm:-right-6">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-good text-white">
          <Check className="h-3.5 w-3.5" strokeWidth={4} />
        </span>
        Correct! +10 XP
      </div>
      <div className="absolute bottom-0 right-4 hidden max-w-[250px] animate-float items-start gap-2 rounded-2xl border-2 border-line bg-surface p-3 text-xs font-bold text-ink shadow-lift [animation-delay:2s] motion-reduce:animate-none sm:flex">
        <Mascot pose="think" size={28} animate={false} />
        <span>
          <span className="block text-[11px] font-black uppercase tracking-wide text-accent">Ask Questy</span>
          What happens to the time if the speed doubles?
        </span>
      </div>
      <span className="absolute left-[30%] top-[-12px] hidden items-center gap-1.5 rounded-full bg-[#7C4DFF] px-3 py-1 text-xs font-black text-white shadow-lift sm:inline-flex">
        <CalendarDays className="h-3.5 w-3.5" /> CBSE Class 10
      </span>
    </div>
  );
}
