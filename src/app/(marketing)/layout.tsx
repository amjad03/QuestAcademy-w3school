import Link from "next/link";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { Wordmark } from "@/components/brand/Logo";
import { subjects } from "@/content";
import { worlds } from "@/content/worlds";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <MarketingHeader />
      {children}
      <footer className="bg-accent text-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Wordmark className="!text-white" />
            <p className="mt-4 text-sm font-semibold leading-6 text-white/80">Free, fun and effective learning for every age — from first letters to final-year exams.</p>
          </div>
          {worlds.map((w) => (
            <div key={w.id}>
              <h3 className="text-sm font-extrabold uppercase tracking-wide">{w.name}</h3>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-white/80">
                {subjects
                  .filter((s) => s.world === w.id)
                  .slice(0, 6)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/course/${s.slug}`} className="hover:text-white">
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/20">
          <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm font-bold text-white/80">
            <span>© {new Date().getFullYear()} Quest Academy</span>
            <span className="flex gap-6">
              <Link href="/courses" className="hover:text-white">All courses</Link>
              <Link href="/auth" className="hover:text-white">Log in</Link>
              <Link href="/onboarding" className="hover:text-white">Get started</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
