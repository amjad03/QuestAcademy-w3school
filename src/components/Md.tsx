import katex from "katex";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders the tiny markdown subset used by content: **bold**, *italic*, `code`,
 * $tex$, [link](url), line breaks and blank-line paragraphs.
 */

const TOKEN = /(`[^`]+`|\$[^$\n]+\$|\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)]+\))/g;

export function tex(src: string, display = false) {
  try {
    return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: "ignore" });
  } catch {
    return src;
  }
}

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const t = m[0];
    const key = `${keyBase}-${i++}`;
    if (t.startsWith("`")) out.push(<code key={key} className="[overflow-wrap:anywhere]">{t.slice(1, -1)}</code>);
    else if (t.startsWith("$")) out.push(<span key={key} dangerouslySetInnerHTML={{ __html: tex(t.slice(1, -1)) }} />);
    else if (t.startsWith("**")) out.push(<strong key={key}>{inline(t.slice(2, -2), key)}</strong>);
    else if (t.startsWith("*")) out.push(<em key={key}>{inline(t.slice(1, -1), key)}</em>);
    else {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(t);
      if (lm) {
        const [, label, href] = lm;
        out.push(
          href.startsWith("/") ? (
            <Link key={key} href={href}>
              {label}
            </Link>
          ) : (
            <a key={key} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          ),
        );
      }
    }
    last = idx + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function lines(text: string, keyBase: string) {
  const parts = text.split("\n");
  return parts.map((p, i) => (
    <Fragment key={`${keyBase}-l${i}`}>
      {inline(p, `${keyBase}-l${i}`)}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

/** Inline-only rendering (no paragraphs). */
export function MdInline({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{lines(text ?? "", "i")}</span>;
}

/** Block rendering with paragraphs. */
export function Md({ text, className }: { text: string; className?: string }) {
  const paras = (text ?? "").split(/\n\s*\n/);
  return (
    <div className={className ?? "prose-quest space-y-4"}>
      {paras.map((p, i) => (
        <p key={i}>{lines(p, `p${i}`)}</p>
      ))}
    </div>
  );
}

/** Strip markup for text-to-speech and search. */
export function plain(text: string) {
  return (text ?? "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

/** Shorten markdown without leaving an unclosed `$tex$`, `**bold**` or `code` span. */
export function truncateMd(text: string, max: number) {
  if (text.length <= max) return text;
  let cut = text.slice(0, max).replace(/\s+\S*$/, "");
  for (const mark of ["$", "`", "**"]) {
    if (cut.split(mark).length % 2 === 0) cut = cut.slice(0, cut.lastIndexOf(mark));
  }
  return cut.trimEnd() + "…";
}
