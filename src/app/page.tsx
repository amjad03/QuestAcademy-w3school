import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Code2, Flame, Headphones, Layers, MousePointerClick, Sparkles, Swords, Target, Trophy } from "lucide-react";
import { Orbit } from "@/components/landing/Orbit";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/shell/Footer";
import { platformStats, subjects } from "@/content";
import { examQuestions } from "@/content/exam/questions";
import { stages, worlds } from "@/content/worlds";
import { HeroCta } from "@/components/landing/HeroCta";

export default function Home() {
  const stats = platformStats();
  return (
    <div className="overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
          <div>
            <Reveal>
              <span className="chip !border-accent/30 !bg-accent/10 !text-accent">
                <Sparkles className="h-3.5 w-3.5" /> One academy · Ages 3 to 99
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Learn <span className="text-gradient">anything.</span>
                <br />
                Any age. <span className="relative whitespace-nowrap">Your way.<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden><path d="M2 9C60 3 140 1 298 7" stroke="rgb(var(--accent-2))" strokeWidth="4" strokeLinecap="round" /></svg></span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Quest Academy turns studying into an adventure. Kids sing their ABCs with Questy the owl, students drag simulations,
                aspirants battle real CBT mock tests, coders run code on every page, and university students take courses that feel
                like a great professor.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <HeroCta />
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="mt-10 grid max-w-lg grid-cols-4 gap-4">
                {[
                  [stats.subjects, "subjects"],
                  [stats.lessons, "lessons"],
                  [stats.questions + examQuestions.length, "questions"],
                  [stats.challenges, "code labs"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl font-bold">{n}</dt>
                    <dd className="text-xs text-muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Orbit />
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHO ARE YOU ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Who’s learning today?</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted">Pick your stage — the whole academy reshapes itself around you.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stages.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.03}>
              <Link
                href={`/onboarding?stage=${s.id}`}
                className="card group flex h-full flex-col items-start gap-3 p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
              >
                <span className="text-4xl transition group-hover:scale-110 group-hover:animate-wiggle">{s.emoji}</span>
                <span>
                  <span className="block font-semibold">{s.label}</span>
                  <span className="text-sm text-muted">{s.hint}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- WORLDS ---------------- */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Five worlds. <span className="text-gradient">Five completely different experiences.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A 4-year-old and a JEE aspirant shouldn’t get the same screen. Every world has its own look, pace, mascot and tools.
          </p>
        </Reveal>

        {worlds.map((w, i) => (
          <Reveal key={w.id}>
            <div data-world={w.id} className="overflow-hidden rounded-4xl border border-line bg-surface">
              <div className={`grid items-stretch gap-0 lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <div className="flex flex-col justify-center p-8 [direction:ltr] sm:p-12">
                  <div className="flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl text-3xl" style={{ background: `linear-gradient(135deg, ${w.colors[0]}, ${w.colors[1]})` }}>
                      {w.emoji}
                    </span>
                    <span className="chip">{w.short}</span>
                  </div>
                  <h3 className={`mt-5 text-3xl font-bold sm:text-4xl ${w.id === "kids" ? "font-kids" : w.id === "campus" ? "font-serif" : w.id === "code" ? "font-mono" : "font-display"}`}>{w.name}</h3>
                  <p className="mt-2 text-lg font-medium text-accent">{w.tagline}</p>
                  <p className="mt-4 leading-7 text-muted">{w.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {subjects
                      .filter((s) => s.world === w.id)
                      .map((s) => (
                        <Link key={s.slug} href={`/learn/${s.slug}`} className="chip hover:!text-ink">
                          {s.icon} {s.title}
                        </Link>
                      ))}
                  </div>
                  <Link href={w.href} className="btn-primary mt-8 self-start">
                    Enter {w.name} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[320px] bg-bg/60 p-6 [direction:ltr] sm:p-10">
                  <WorldPreview id={w.id} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ---------------- LEARN YOUR WAY ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold sm:text-5xl">Every lesson, six ways to learn it.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">Switch modes anytime. Your brain, your rules.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BookOpen, t: "Read", d: "Crisp notes with key points, worked examples and callouts that flag exam traps." },
            { icon: MousePointerClick, t: "Play with it", d: "Drag a projectile, mix colours, flip bits, train a neural net — 20 live simulations." },
            { icon: Layers, t: "Flashcards", d: "Flip-cards for every lesson that feed a spaced-repetition deck so nothing fades." },
            { icon: Target, t: "Quiz", d: "Six question types with instant feedback, explanations and XP for every right answer." },
            { icon: Headphones, t: "Listen", d: "Any lesson read aloud — perfect for little ones, commutes and auditory learners." },
            { icon: Code2, t: "Build", d: "Live editors for HTML, CSS, JS, Python and SQL with auto-graded challenges." },
          ].map((m, i) => (
            <Reveal key={m.t} delay={i * 0.05}>
              <div className="card h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{m.t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- GAMIFICATION ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#831843] p-8 text-white sm:p-14">
          <div className="dot-bg absolute inset-0 opacity-20" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">Addictive — in the best way.</h2>
              <p className="mt-4 max-w-lg text-lg text-white/75">
                XP, levels, streaks, daily quests, weekly leagues, 20 badges, coins and a shop. Learning finally feels like levelling up a character — because it is.
              </p>
              <Link href="/onboarding" className="btn mt-8 bg-white text-[#3b0764] hover:bg-white/90">
                Claim your first 50 coins <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Flame, t: "Streaks", d: "Show up daily. Freezes save bad days." },
                { icon: Trophy, t: "Leagues", d: "Bronze → Diamond, reset every Monday." },
                { icon: Swords, t: "Daily quests", d: "Three fresh missions every day." },
                { icon: Brain, t: "Spaced review", d: "Science-backed memory scheduling." },
              ].map((g) => (
                <div key={g.t} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <g.icon className="h-7 w-7 text-amber-300" />
                  <h3 className="mt-3 font-semibold">{g.t}</h3>
                  <p className="mt-1 text-sm text-white/70">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <div className="text-6xl">🦉🐢🐉🤖🦊</div>
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">Your quest starts with one lesson.</h2>
          <p className="mt-4 text-lg text-muted">Free. No ads. Takes 30 seconds to set up.</p>
          <div className="mt-8 flex justify-center">
            <HeroCta center />
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}

function WorldPreview({ id }: { id: string }) {
  switch (id) {
    case "kids":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-5 font-kids">
          <div className="flex items-end gap-3">
            <span className="animate-float text-7xl">🦉</span>
            <div className="mb-8 rounded-3xl rounded-bl-none bg-surface px-5 py-3 text-xl font-semibold shadow-soft">How many apples? 🍎</div>
          </div>
          <div className="flex gap-2 text-5xl">🍎🍎🍎🍎</div>
          <div className="flex gap-3">
            {[3, 4, 5].map((n) => (
              <span key={n} className={`grid h-16 w-16 place-items-center rounded-3xl text-3xl font-bold shadow-pop ${n === 4 ? "bg-good text-white" : "bg-surface"}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
      );
    case "school":
      return (
        <div className="card flex h-full flex-col p-5">
          <div className="flex items-center justify-between text-sm">
            <b>Projectile motion</b>
            <span className="chip">θ = 45° · v = 20 m/s</span>
          </div>
          <svg viewBox="0 0 300 150" className="mt-3 w-full flex-1">
            <line x1="10" y1="140" x2="290" y2="140" stroke="rgb(var(--line))" strokeWidth="2" />
            <path d="M10 140 Q150 -40 290 140" fill="none" stroke="rgb(var(--accent))" strokeWidth="3" strokeDasharray="6 6" />
            <circle cx="150" cy="50" r="8" fill="rgb(var(--accent-2))" />
          </svg>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            {[["Range", "40.8 m"], ["Max height", "10.2 m"], ["Flight", "2.89 s"]].map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-surface-2 p-2">
                <div className="text-muted">{a}</div>
                <div className="font-mono font-bold">{b}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "exam":
      return (
        <div className="card flex h-full flex-col gap-4 p-5 font-sans text-ink">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">NEET Full Mock · Physics</span>
            <span className="rounded-xl bg-accent/15 px-3 py-1 font-mono text-sm font-bold text-accent">02:47:13</span>
          </div>
          <p className="text-sm leading-6">Q 14. A body is projected at 30° with 20 m/s. Time of flight is (g = 10 m/s²):</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {["1 s", "2 s", "3 s", "4 s"].map((o, i) => (
              <span key={o} className={`rounded-xl border px-3 py-2 ${i === 1 ? "border-good bg-good/15" : "border-line"}`}>({String.fromCharCode(65 + i)}) {o}</span>
            ))}
          </div>
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className={`h-5 rounded ${i < 13 ? "bg-good/70" : i === 13 ? "bg-accent" : i % 7 === 0 ? "bg-violet-500/70" : "bg-surface-2"}`} />
            ))}
          </div>
        </div>
      );
    case "code":
      return (
        <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-3xl border border-line bg-surface font-mono text-sm">
          <div className="p-5 leading-7">
            <div className="mb-3 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div><span className="text-fuchsia-400">def</span> <span className="text-accent">greet</span>(name):</div>
            <div className="pl-6"><span className="text-fuchsia-400">return</span> <span className="text-accent-2">f&quot;Hello, {"{name}"}!&quot;</span></div>
            <div className="mt-2"><span className="text-sky-400">print</span>(greet(<span className="text-accent-2">&quot;Quest&quot;</span>))</div>
          </div>
          <div className="border-t border-line bg-bg px-5 py-3">
            <span className="text-muted">▶ output</span> <span className="text-good">Hello, Quest!</span> <span className="ml-2 rounded bg-good/15 px-2 text-xs text-good">✓ 3/3 tests</span>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex h-full flex-col gap-3">
          {subjects
            .filter((s) => s.world === "campus")
            .slice(0, 4)
            .map((s) => (
              <div key={s.slug} className="card flex items-center gap-4 p-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-2xl" style={{ background: `linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})` }}>
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-serif text-lg font-semibold">{s.title}</div>
                  <div className="truncate text-xs text-muted">{s.domain} · {s.levels.join(" · ")}</div>
                </div>
              </div>
            ))}
        </div>
      );
  }
}
