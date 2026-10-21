import type { ReactNode } from "react";

/** Shared section shell for marketing pages: optional eyebrow, heading and lede, centred by default. */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  align = "center",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centred = align === "center";
  return (
    <section id={id} className={`mx-auto max-w-[1120px] px-5 py-16 lg:py-20 ${className}`}>
      <div className={centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
        {lede && <p className="mt-4 text-lg font-semibold leading-8 text-muted">{lede}</p>}
      </div>
      {children}
    </section>
  );
}

/** Simple page header for the secondary public pages. */
export function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section className="border-b-2 border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-5 pb-12 pt-14 lg:pt-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-muted">{lede}</p>
      </div>
    </section>
  );
}

/** Prose block for the legal pages. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-8 text-[15px] font-semibold leading-7 text-ink [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_p]:mt-2 [&_p]:text-muted [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_li]:text-muted">{children}</div>;
}
