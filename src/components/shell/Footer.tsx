import Link from "next/link";
import { Logo } from "./Logo";
import { worlds } from "@/content/worlds";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Learn anything, anytime, your way. From your first ABC to your final-year thesis — one academy, five worlds.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Worlds</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {worlds.map((w) => (
              <li key={w.id}>
                <Link href={w.href} className="hover:text-ink">
                  {w.emoji} {w.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Tools</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/code/playground" className="hover:text-ink">Code playground</Link></li>
            <li><Link href="/exam/mock" className="hover:text-ink">Mock tests</Link></li>
            <li><Link href="/exam/formulas" className="hover:text-ink">Formula vault</Link></li>
            <li><Link href="/review" className="hover:text-ink">Spaced review</Link></li>
            <li><Link href="/kids/play" className="hover:text-ink">Kids games</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">You</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/dashboard" className="hover:text-ink">My quest</Link></li>
            <li><Link href="/leaderboard" className="hover:text-ink">Leagues</Link></li>
            <li><Link href="/profile" className="hover:text-ink">Profile & badges</Link></li>
            <li><Link href="/auth" className="hover:text-ink">Sign in</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">© {new Date().getFullYear()} Quest Academy · Made for curious minds everywhere</div>
    </footer>
  );
}
