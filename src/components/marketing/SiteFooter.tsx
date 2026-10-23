"use client";

import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { useT } from "@/i18n";

export function SiteFooter() {
  const t = useT();
  const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: t("site.footer.learn", "Learn"),
    links: [
      { label: t("site.nav.courses", "Courses"), href: "/courses" },
      { label: t("site.footer.library", "Library"), href: "/library" },
      { label: t("site.nav.pathways", "Pathways"), href: "/pathways" },
      { label: t("site.footer.worksheets", "Worksheets"), href: "/worksheets" },
      { label: t("site.footer.competitions", "Competitions"), href: "/competitions" },
    ],
  },
  {
    heading: "Quest Academy",
    links: [
      { label: t("site.nav.about", "About"), href: "/about" },
      { label: t("site.nav.forSchools", "For schools"), href: "/for-schools" },
      { label: t("site.footer.forParents", "For parents"), href: "/parent" },
      { label: t("site.cta.getStarted", "Get started"), href: "/onboarding" },
    ],
  },
  {
    heading: t("site.footer.legal", "Legal"),
    links: [
      { label: t("site.footer.privacy", "Privacy"), href: "/privacy" },
      { label: t("site.footer.terms", "Terms"), href: "/terms" },
    ],
  },
  ];

  return (
    <footer className="border-t-2 border-line bg-surface">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-muted">
            {t("site.footer.tagline", "One place to learn, from first letters to first job. Video lessons, clear notes and practice that tracks mastery, for every age.")}
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.links[0].href}>
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
            <Link href="/auth" className="hover:text-accent">{t("site.nav.logIn", "Log in")}</Link>
            <Link href="/privacy" className="hover:text-accent">{t("site.footer.privacy", "Privacy")}</Link>
            <Link href="/terms" className="hover:text-accent">{t("site.footer.terms", "Terms")}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
