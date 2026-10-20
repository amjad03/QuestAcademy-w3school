import Link from "next/link";
import { Check, Flame, PlayCircle, ShieldHalf, Trophy, Zap } from "lucide-react";
import { platformStats, subjects } from "@/content";
import { examQuestions } from "@/content/exam/questions";
import { worlds } from "@/content/worlds";
import { Mascot } from "@/components/brand/Mascot";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { HomeCta } from "@/components/marketing/HomeCta";

export default function Home() {
  const stats = platformStats();
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-2 lg:pt-20">
        <HeroArt />
        <div className="text-center lg:text-left">
          <h1 className="text-[2.6rem] font-black leading-[1.12] tracking-tight text-ink sm:text-5xl">
            The free, fun and effective way to learn <span className="text-accent">anything.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg font-semibold leading-8 text-muted lg:mx-0">
            Watch the lesson, read the notes, practise until it clicks. From first letters to NEET, JEE, coding and university — all in one place.
          </p>
          <HomeCta />
        </div>
      </section>

      {/* ---------- CATEGORY STRIP ---------- */}
      <section className="border-y-2 border-line">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6">
          {worlds.map((w) => (
            <Link key={w.id} href={w.href} className="text-[15px] font-extrabold uppercase tracking-wide text-muted transition hover:text-accent">
              {w.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <Feature
        title="Watch. Read. Practise. Master."
        body="Every lesson pairs a short video from the Quest Academy channel with clear notes and an interactive practice set. Skills move from Familiar to Proficient to Mastered as you go — so you always know exactly where you stand."
        art={<LessonMock />}
      />
      <Feature
        reverse
        title="Learning that sticks"
        body="Bite-sized lessons, instant feedback and spaced review bring back what you’re about to forget. Hands-on simulations, live code editors and step-by-step solutions turn reading into understanding."
        art={<MasteryMock />}
      />
      <Feature
        title="Stay motivated"
        body="Earn XP, keep your streak alive, complete daily quests and climb the weekly leagues. Small wins every day add up to big results."
        art={<MotivationMock />}
      />
      <Feature
        reverse
        title="Exam-ready when it matters"
        body={`Prepare for NEET and JEE with ${examQuestions.length} exam-style questions, chapter drills that adapt to you, a formula vault and full mock tests in the real computer-based test format.`}
        art={<ExamMock />}
      />

      {/* ---------- COURSE GRID ---------- */}
      <section className="mx-auto max-w-[1120px] px-5 py-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">{stats.subjects} courses. {stats.lessons} lessons. One place.</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg font-semibold text-muted">Start anywhere — every course has videos, notes, practice and tests.</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.slice(0, 16).map((s) => (
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
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t-2 border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center px-5 py-24 text-center">
          <Mascot pose="cheer" size={150} />
          <h2 className="mt-6 text-4xl font-black sm:text-5xl">learn anything with quest academy</h2>
          <Link href="/onboarding" className="btn-primary mt-8 px-12 py-4 text-base">
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, body, art, reverse }: { title: string; body: string; art: React.ReactNode; reverse?: boolean }) {
  return (
    <section className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
      <div className={reverse ? "lg:order-2" : ""}>
        <h2 className="text-3xl font-black text-accent sm:text-[2.6rem] sm:leading-[1.15]">{title}</h2>
        <p className="mt-5 text-lg font-semibold leading-8 text-muted">{body}</p>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{art}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Illustrations built from real UI pieces (no stock art, no gradients) */
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
          <div key={slug} className="absolute -translate-x-1/2 -translate-y-1/2 animate-float" style={{ left: `${50 + r * Math.cos(a)}%`, top: `${50 + r * Math.sin(a)}%`, animationDelay: `${i * 0.35}s` }}>
            <CourseIcon slug={slug} size={i % 2 ? 52 : 62} />
          </div>
        );
      })}
    </div>
  );
}

function LessonMock() {
  return (
    <div className="card mx-auto max-w-[480px] overflow-hidden">
      <div className="relative grid aspect-video place-items-center bg-[#1C2333]">
        <div className="absolute left-4 top-4 flex items-center gap-2 text-sm font-bold text-white/80">
          <CourseIcon slug="physics-school" size={28} /> Projectile motion
        </div>
        <PlayCircle className="h-16 w-16 text-white" strokeWidth={1.6} />
        <div className="absolute inset-x-4 bottom-4 h-1.5 rounded-full bg-white/20">
          <div className="h-full w-2/5 rounded-full bg-bad" />
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
        <div className="btn-primary pointer-events-none mt-2 w-full">Continue</div>
      </div>
    </div>
  );
}

function MasteryMock() {
  const levels = [4, 4, 3, 4, 3, 2, 3, 2, 2, 1, 2, 1, 0, 1, 0, 0, 0, 0];
  const color = ["rgb(var(--line))", "#FFB800", "#FF8A00", "#2F6BFF", "#7C4DFF"];
  return (
    <div className="card mx-auto max-w-[480px] p-6">
      <div className="flex items-center justify-between">
        <span className="font-black">Course mastery</span>
        <span className="font-black text-accent-2">58%</span>
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
      <div className="mt-6 rounded-2xl bg-good-soft p-4">
        <div className="flex items-center gap-2 font-black text-good-shade">
          <Check className="h-5 w-5" strokeWidth={3.5} /> Nice! Skill levelled up to Proficient
        </div>
      </div>
    </div>
  );
}

function MotivationMock() {
  return (
    <div className="mx-auto grid max-w-[480px] grid-cols-2 gap-4">
      <div className="card col-span-2 flex items-center gap-4 p-5">
        <Flame className="h-14 w-14 fill-streak text-streak" />
        <div>
          <div className="text-3xl font-black text-streak">21 day streak</div>
          <div className="font-bold text-muted">Keep it going tomorrow!</div>
        </div>
      </div>
      <div className="card p-5">
        <Zap className="h-8 w-8 fill-warn text-warn" />
        <div className="mt-2 text-2xl font-black">1,240 XP</div>
        <div className="text-sm font-bold text-muted">this week</div>
      </div>
      <div className="card p-5">
        <ShieldHalf className="h-8 w-8 fill-[#FFB800] text-[#FFB800]" strokeWidth={1.5} />
        <div className="mt-2 text-2xl font-black">Gold</div>
        <div className="text-sm font-bold text-muted">league · #3</div>
      </div>
    </div>
  );
}

function ExamMock() {
  return (
    <div className="card mx-auto max-w-[480px] p-5">
      <div className="flex items-center justify-between">
        <span className="font-black">NEET mock test</span>
        <span className="rounded-lg bg-surface-2 px-2.5 py-1 font-mono text-sm font-bold">02:47:13</span>
      </div>
      <div className="mt-4 grid grid-cols-8 gap-1.5">
        {Array.from({ length: 32 }).map((_, i) => (
          <span key={i} className={`grid aspect-square place-items-center rounded-md text-[10px] font-black text-white ${i < 13 ? "bg-good" : i === 13 ? "bg-accent" : i % 9 === 0 ? "bg-accent-2" : "bg-line"}`}>
            {i + 1}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-surface-2 p-4">
        <Trophy className="h-8 w-8 text-warn" />
        <div>
          <div className="font-black">Predicted percentile 96.4</div>
          <div className="text-sm font-bold text-muted">Weakest chapter: Electrostatics</div>
        </div>
      </div>
    </div>
  );
}
