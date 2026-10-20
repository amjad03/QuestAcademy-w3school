import Link from "next/link";
import { GAMES } from "@/components/kids/games";

export const metadata = { title: "Games — Wonder Woods" };

export default function Page() {
  return (
    <div data-world="kids" className="min-h-screen bg-bg font-kids text-ink">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <Link href="/kids" className="text-lg text-muted hover:text-ink">
          ← Wonder Woods
        </Link>
        <h1 className="mt-4 text-center text-5xl font-bold">🎮 Game Garden</h1>
        <p className="mt-2 text-center text-xl text-muted">Every game teaches something. Every game earns stars!</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g) => (
            <Link key={g.id} href={`/kids/play/${g.id}`} className="flex flex-col items-center gap-3 rounded-[2.5rem] border-b-8 border-black/10 bg-surface p-8 text-center shadow-soft transition hover:-translate-y-2 hover:rotate-1">
              <span className="text-8xl">{g.emoji}</span>
              <span className="text-2xl font-bold">{g.title}</span>
              <span className="text-muted">{g.blurb}</span>
              <span className="chip">{g.age}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
