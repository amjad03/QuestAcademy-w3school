"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";

export function MarketingHeader() {
  const hydrated = useHydrated();
  const onboarded = useLearner((s) => s.profile.onboarded);
  const t = useT();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  const links: [string, string][] = [
    ["/courses", t("site.nav.courses", "Courses")],
    ["/exam", t("site.nav.exam", "Exam prep")],
    ["/pathways", t("site.nav.pathways", "Pathways")],
    ["/for-schools", t("site.nav.forSchools", "For schools")],
    ["/about", t("site.nav.about", "About")],
  ];
  return (
    <header className="sticky top-0 z-40 border-b-2 border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center gap-3 px-4 sm:gap-6 sm:px-5">
        <Logo tinyMark />
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <Link href="/courses" className="btn-flat !text-muted hover:!text-accent">
            {t("site.nav.courses", "Courses")}
          </Link>
          <Link href="/exam" className="btn-flat !text-muted hover:!text-accent">
            {t("site.nav.exam", "Exam prep")}
          </Link>
          <Link href="/pathways" className="btn-flat !text-muted hover:!text-accent">
            {t("site.nav.pathways", "Pathways")}
          </Link>
          <Link href="/for-schools" className="btn-flat !text-muted hover:!text-accent">
            {t("site.nav.forSchools", "For schools")}
          </Link>
          <Link href="/about" className="btn-flat !text-muted hover:!text-accent">
            {t("site.nav.about", "About")}
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {hydrated && onboarded ? (
            <Link href="/learn" className="btn-primary whitespace-nowrap !px-3.5 text-sm sm:!px-5 sm:text-[15px]">
              <span className="sm:hidden">{t("site.cta.continueShort", "Continue")}</span>
              <span className="hidden sm:inline">{t("site.cta.continue", "Continue learning")}</span>
            </Link>
          ) : (
            <>
              <Link href="/auth" className="btn-ghost hidden sm:inline-flex">
                {t("site.nav.logIn", "Log in")}
              </Link>
              <Link href="/onboarding" className="btn-primary whitespace-nowrap !px-3.5 text-sm sm:!px-5 sm:text-[15px]">
                {t("site.cta.getStarted", "Get started")}
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? t("site.nav.closeMenu", "Close menu") : t("site.nav.openMenu", "Open menu")}
            className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-surface-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="site-menu" className="border-t border-line bg-surface px-5 pb-5 pt-2 md:hidden">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="block border-b border-line py-3.5 text-[16px] font-semibold text-ink">
                  {label}
                </Link>
              </li>
            ))}
            {!(hydrated && onboarded) && (
              <li>
                <Link href="/auth" className="block py-3.5 text-[16px] font-semibold text-accent">
                  {t("site.nav.logIn", "Log in")}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
