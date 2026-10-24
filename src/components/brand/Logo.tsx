import Link from "next/link";
import clsx from "clsx";
import { LogoMark } from "./Mascot";

export function Wordmark({ className }: { className?: string }) {
  return <span className={clsx("whitespace-nowrap text-[22px] font-black lowercase leading-none tracking-tight text-accent", className)}>quest academy</span>;
}

export function Logo({ compact, href = "/" }: { compact?: boolean; href?: string }) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-2.5" aria-label="Quest Academy home">
      <LogoMark size={36} />
      {!compact && <Wordmark />}
    </Link>
  );
}
