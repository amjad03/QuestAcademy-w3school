import Link from "next/link";
import clsx from "clsx";
import { LogoMark } from "./Mascot";

export function Wordmark({ className }: { className?: string }) {
  return <span className={clsx("whitespace-nowrap text-[22px] font-black lowercase leading-none tracking-tight text-accent", className)}>quest academy</span>;
}

/** `tinyMark`: on very narrow phones show only the mark, so the header actions fit in every language. */
export function Logo({ compact, href = "/", tinyMark }: { compact?: boolean; href?: string; tinyMark?: boolean }) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-2.5" aria-label="Quest Academy home">
      <LogoMark size={36} />
      {!compact && (tinyMark ? <span className="hidden min-[400px]:contents"><Wordmark /></span> : <Wordmark />)}
    </Link>
  );
}
