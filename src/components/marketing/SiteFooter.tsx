import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Learn",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Library", href: "/library" },
      { label: "Pathways", href: "/pathways" },
      { label: "Worksheets", href: "/worksheets" },
      { label: "Competitions", href: "/competitions" },
    ],
  },
  {
    heading: "Quest Academy",
    links: [
      { label: "About", href: "/about" },
      { label: "For schools", href: "/for-schools" },
      { label: "For parents", href: "/parent" },
      { label: "Get started", href: "/onboarding" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-line bg-surface">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-muted">
            One place to learn, from first letters to first job. Video lessons, clear notes and practice that tracks mastery, for every age.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.heading}>
            <h3 className="eyebrow">{c.heading}</h3>
            <ul className="mt-3 space-y-2 text-sm font-bold text-ink">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-line">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-5 text-xs font-bold text-muted">
          <span>&copy; {new Date().getFullYear()} Quest Academy</span>
          <span className="flex gap-5">
            <Link href="/auth" className="hover:text-accent">Log in</Link>
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
