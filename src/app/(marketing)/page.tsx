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
import { HeroPlayground } from "@/components/marketing/landing/HeroPlayground";
import { LiveExplainer } from "@/components/marketing/landing/LiveExplainer";
import { CountUp, Reveal } from "@/components/marketing/landing/Motion";

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
    <main className="overflow-x-clip font-landing">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute -top-48 left-[-12%] h-[620px] w-[620px] animate-aurora rounded-full bg-[#2F6BFF]/20 blur-3xl motion-reduce:animate-none" />
          <div className="absolute -top-24 right-[-10%] h-[560px] w-[560px] animate-aurora rounded-full bg-[#7C4DFF]/20 blur-3xl [animation-delay:-6s] motion-reduce:animate-none" />
          <div className="absolute bottom-[-10%] left-[30%] h-[380px] w-[380px] animate-aurora rounded-full bg-[#2EBE70]/15 blur-3xl [animation-delay:-12s] motion-reduce:animate-none" />
          <Shapes />
          <div className="absolute inset-0 [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-24 pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:pb-32 lg:pt-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-sm font-bold text-ink shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#7C4DFF]" /> Free for everyone · now in 7 Indian languages
            </span>
            <h1 className="mt-7 text-[2.9rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5.2rem]">
              Learning that <span className="relative whitespace-nowrap"><span className="bg-gradient-to-r from-[#2F6BFF] via-[#5B5BFF] to-[#9B4DFF] bg-clip-text text-transparent">grows up</span><svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 h-3 w-full text-[#FFB800]" preserveAspectRatio="none" aria-hidden><path d="M2 14 C 80 4, 200 4, 298 12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" /></svg></span> with you.
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-8 text-muted sm:text-xl sm:leading-9 lg:mx-0">
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
          <div className="relative">
            <p className="mb-3 text-center text-sm font-bold text-muted lg:text-left">
              <span className="mr-1.5 inline-block animate-bob motion-reduce:animate-none">👇</span> Try it — no sign-up
            </p>
            <HeroPlayground />
          </div>
        </div>
      </section>

      {/* ================= BOARDS STRIP ================= */}
      <section className="border-t border-line bg-surface/60">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-[15px] font-extrabold tracking-tight text-muted">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted/80">Built for</span>
          {["CBSE", "ICSE", "ISC", "Karnataka PUC", "NEET", "JEE Main", "JEE Advanced"].map((b) => (
            <span key={b} className="text-ink/70">
              {b}
            </span>
          ))}
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
              <dd className="text-3xl font-extrabold tracking-tight text-ink sm:text-[2.6rem]">
                <CountUp value={v as number} />
              </dd>
              <dt className="mt-1 text-center text-xs font-bold uppercase tracking-wider text-muted">{l}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ================= AGE PROFILES ================= */}
      <section id="profiles" className="mx-auto max-w-[1200px] px-5 py-20 lg:py-28">
        <Heading eyebrow="Seven experiences, one account" title="A different app for every age" lede="A four-year-old, a Class 12 student and a PhD scholar shouldn’t see the same screen. Pick an age to see how Quest Academy changes — navigation, lessons, practice and rewards." />
        <Reveal>
          <AgeSwitcher />
        </Reveal>
      </section>

      {/* ================= LIVE EXPLAINER ================= */}
      <section className="relative overflow-hidden bg-[#0B1433] py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#2F6BFF]/25 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#9B4DFF]/25 blur-3xl" />
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#93B4FF]">See it · play with it</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">Don’t just read about it. Play with it.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-white/75">
              Every big idea comes four ways — an animation to watch, something to try with your hands, a comic and an everyday comparison. This is the real thing; go ahead and click.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <LiveExplainer />
          </Reveal>
          <p className="mt-8 text-center">
            <Link href="/explain" className="inline-flex items-center gap-1.5 font-black text-white hover:text-[#93B4FF]">
              See all 30 explainers <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
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
      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:py-28">
        <Heading eyebrow="Why learners stay" title="Everything you need to actually understand" lede="A tutor that makes you think, practice that remembers what you’ve mastered, and exam prep that feels like the real thing." />
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-3">
            <article className="flex h-full flex-col rounded-[30px] bg-gradient-to-br from-[#14214A] to-[#1E2F6B] p-7 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93B4FF]">Ask Questy</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">A tutor that makes you think</h3>
              <p className="mt-2 max-w-md text-[15px] font-medium leading-7 text-white/70">Hints and questions, never just the answer. In tests it waits until you’ve tried. Parents can switch it off.</p>
              <div className="mt-6 flex-1 space-y-3 text-sm font-semibold">
                <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#2F6BFF] px-4 py-2.5">Just tell me the answer 😩</p>
                <div className="flex items-end gap-2">
                  <Mascot pose="think" size={36} animate={false} />
                  <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5">Let’s get there together. If a car goes 60 km in an hour, how far does it go in half an hour?</p>
                </div>
                <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#2F6BFF] px-4 py-2.5">30 km… oh! Total distance ÷ total time!</p>
                <div className="flex items-end gap-2">
                  <Mascot pose="cheer" size={36} animate={false} />
                  <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5">Exactly. Try the question again with that idea. 🎯</p>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.08}>
            <Link href="/exam" className="group flex h-full flex-col rounded-[30px] border border-line bg-surface p-7 transition hover:shadow-lift md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5484D]">Exam-ready</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">Mock tests that feel real</h3>
              <p className="mt-2 max-w-md text-[15px] font-medium leading-7 text-muted">The computer-based format with negative marking, chapter drills, a formula vault — and a report that shows exactly where the marks went.</p>
              <div className="mt-6 flex-1 rounded-2xl border border-line bg-surface-2/60 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">NEET mock · score</p>
                    <p className="text-4xl font-extrabold tracking-tight text-ink">
                      612<span className="text-lg text-muted">/720</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-good-soft px-3 py-1 text-sm font-black text-good-shade">+48 vs last</span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["Physics", 72, "#2F6BFF"],
                    ["Chemistry", 86, "#2EBE70"],
                    ["Biology", 91, "#FF8A00"],
                  ].map(([t, w, c]) => (
                    <div key={t as string}>
                      <div className="flex justify-between text-xs font-bold text-muted">
                        <span>{t}</span>
                        <span>{w}%</span>
                      </div>
                      <div className="mt-1 h-2.5 rounded-full bg-line/70">
                        <div className="h-full rounded-full" style={{ width: `${w}%`, background: c as string }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-black text-accent">
                Exam prep <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.04}>
            <Feature icon={Code2} color="#0F766E" title="Code right in the browser" body="Python, JavaScript, HTML, CSS and SQL run instantly — no installs. Challenges check your code as you go." href="/code/playground" cta="Open the code lab" />
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.08}>
            <article className="h-full rounded-[30px] border border-line bg-surface p-7">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#7C4DFF]/10 text-[#7C4DFF]">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink">Mastery you can see</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-muted">Every skill climbs from Attempted to Mastered. Spaced review brings back what’s fading.</p>
              <div className="mt-4 grid grid-cols-9 gap-1" aria-hidden>
                {[4, 4, 3, 4, 3, 2, 3, 2, 2, 1, 2, 1, 0, 1, 0, 0, 3, 4].map((l, i) => (
                  <span key={i} className="aspect-square rounded-[4px]" style={{ background: ["rgb(var(--line))", "#E9DFFF", "#C4B1FF", "#9575FF", "#5B2FD6"][l] }} />
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.12}>
            <Feature icon={CalendarDays} color="#2EBE70" title="A plan that fits your calendar" body="Tell it your exam date. It spreads chapters across the weeks you have and re-plans when life happens." href="/plan" cta="Open the planner" />
          </Reveal>
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
            <li key={s.title} className="relative rounded-[30px] border border-line bg-surface p-6">
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
            <Link key={p.slug} href={`/pathways/${p.slug}`} className="group flex flex-col rounded-[30px] border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="h-1.5 w-14 rounded-full" style={{ background: p.color }} />
              <h3 className="mt-5 text-xl font-black text-ink group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-muted">{p.goal}</p>
              <p className="mt-auto pt-5 text-sm font-bold text-muted">
                {p.weeks} weeks · {p.modules.length} modules · certificate
              </p>
            </Link>
          ))}
          <Link href="/pathways" className="flex flex-col justify-center rounded-[28px] border border-dashed border-line p-6 text-center transition hover:border-accent/50">
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
              <Link key={c.title} href={c.href} className="group flex flex-col rounded-[30px] border border-line bg-surface p-6 transition hover:shadow-lift">
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
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.4rem]">{title}</h2>
      {lede && <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-muted">{lede}</p>}
    </Reveal>
  );
}

function Feature({ icon: Icon, color, title, body, href, cta, className }: { icon: typeof Target; color: string; title: string; body: string; href: string; cta: string; className?: string }) {
  return (
    <Link href={href} className={`group flex h-full flex-col rounded-[30px] border border-line bg-surface p-7 transition hover:shadow-lift ${className ?? ""}`}>
      <span className="grid h-11 w-11 place-items-center rounded-2xl" style={{ background: `color-mix(in srgb, ${color} 12%, transparent)`, color }}>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm font-medium leading-6 text-muted">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-accent">
        {cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/** Soft geometric shapes drifting behind the hero. */
function Shapes() {
  return (
    <>
      <svg className="absolute left-[6%] top-[62%] h-16 w-16 animate-float text-[#FFB800] opacity-70 motion-reduce:animate-none" viewBox="0 0 60 60">
        <polygon points="30,4 56,52 4,52" fill="currentColor" />
      </svg>
      <svg className="absolute right-[44%] top-[10%] h-10 w-10 animate-float text-[#2EBE70] opacity-60 [animation-delay:-1.5s] motion-reduce:animate-none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-[8%] right-[6%] h-14 w-14 rotate-12 animate-float text-[#7C4DFF] opacity-60 [animation-delay:-2.4s] motion-reduce:animate-none" viewBox="0 0 50 50">
        <rect x="4" y="4" width="42" height="42" rx="10" fill="currentColor" />
      </svg>
      <svg className="absolute left-[44%] top-[78%] h-12 w-12 animate-float text-[#FF6B8A] opacity-50 [animation-delay:-0.8s] motion-reduce:animate-none" viewBox="0 0 50 50">
        <path d="M25 4 L30 20 L46 25 L30 30 L25 46 L20 30 L4 25 L20 20 Z" fill="currentColor" />
      </svg>
    </>
  );
}
