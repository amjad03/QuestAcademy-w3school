import Link from "next/link";
import { GAMES } from "@/components/kids/games";
import { Mascot } from "@/components/brand/Mascot";

export const metadata = { title: "Learning games" };

export default function Page() {
  return (
    <div className="mx-auto max-w-[1060px] px-4 py-8 sm:px-6">
      <div className="card flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
        <Mascot pose="cheer" size={110} />
        <div className="text-center sm:text-left">
          <p className="eyebrow">Early learning</p>
          <h1 className="mt-1 text-3xl font-black">Learning games</h1>
          <p className="mt-2 max-w-xl font-semibold text-muted">Short, playful rounds that practise counting, letters, shapes, memory and logic. Every game is read aloud and earns XP.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g) => (
          <Link key={g.id} href={`/kids/play/${g.id}`} className="tile group flex flex-col p-5">
            <span className="grid h-16 w-16 place-items-center rounded-2xl text-white transition group-hover:scale-105" style={{ background: g.color, boxShadow: `inset 0 -5px 0 ${g.shade}` }}>
              <g.icon className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <h2 className="mt-4 text-xl font-black">{g.title}</h2>
            <p className="mt-1 flex-1 font-semibold text-muted">{g.blurb}</p>
            <div className="mt-4 flex gap-2">
              <span className="chip">{g.skill}</span>
              <span className="chip">{g.age}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
