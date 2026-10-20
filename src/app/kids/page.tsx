import Link from "next/link";
import { catalog } from "@/content";
import { SubjectCard } from "@/components/world/SubjectCard";
import { KidsGreeting } from "@/components/world/KidsGreeting";
import { GAMES } from "@/components/kids/games";

export const metadata = { title: "Wonder Woods — for kids" };

export default function Page() {
  const subjects = catalog("kids");
  return (
    <div data-world="kids" className="relative min-h-screen overflow-hidden bg-bg font-kids text-ink">
      <div className="pointer-events-none absolute inset-0">
        {["☁️", "🌈", "🦋", "🌻", "🍄", "⭐", "🐝", "🌸"].map((e, i) => (
          <span key={i} className="absolute animate-float text-4xl opacity-60" style={{ left: `${(i * 13 + 5) % 95}%`, top: `${(i * 23 + 8) % 85}%`, animationDelay: `${i * 0.5}s` }}>
            {e}
          </span>
        ))}
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <KidsGreeting />

        <h2 className="mt-14 text-center text-4xl font-bold">🗺️ Pick an adventure!</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <SubjectCard key={s.slug} s={s} variant="kids" />
          ))}
        </div>

        <h2 className="mt-16 text-center text-4xl font-bold">🎮 Play &amp; learn games</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {GAMES.map((g) => (
            <Link key={g.id} href={`/kids/play/${g.id}`} className="flex flex-col items-center gap-2 rounded-[2rem] border-b-8 border-black/10 bg-surface p-5 text-center shadow-soft transition hover:-translate-y-1 hover:rotate-[-2deg]">
              <span className="text-6xl">{g.emoji}</span>
              <span className="text-lg font-bold">{g.title}</span>
              <span className="text-xs text-muted">{g.age}</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-[2.5rem] border-4 border-dashed border-line bg-surface p-8 text-center">
          <div className="text-5xl">👨‍👩‍👧</div>
          <h3 className="mt-3 text-2xl font-bold">Grown-ups corner</h3>
          <p className="mx-auto mt-2 max-w-xl font-sans text-muted">
            Lessons are short (3–6 minutes), read aloud by Questy, ad-free and designed for little hands. Track progress, streaks and stickers on the{" "}
            <Link href="/dashboard" className="font-semibold text-accent underline">
              dashboard
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
