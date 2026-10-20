"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, Repeat, Trophy, User } from "lucide-react";
import clsx from "clsx";

const items = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/review", label: "Review", icon: Repeat },
  { href: "/leaderboard", label: "Leagues", icon: Trophy },
  { href: "/profile", label: "Me", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/exam/mock/") || pathname.startsWith("/onboarding") || pathname.startsWith("/learn/")) return null;
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 flex justify-around rounded-3xl border border-line bg-surface/90 p-1.5 shadow-soft backdrop-blur-xl md:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={clsx("flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-medium transition", active ? "bg-accent/10 text-accent" : "text-muted")}
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
