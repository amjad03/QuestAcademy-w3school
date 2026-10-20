"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Search } from "lucide-react";
import clsx from "clsx";
import { useUi } from "@/lib/ui";
import type { SearchItem } from "@/content";
import { worldById } from "@/content/worlds";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { LogoMark } from "@/components/brand/Mascot";

const QUICK: SearchItem[] = [
  { kind: "subject", title: "Learn", subtitle: "Your path", href: "/learn", icon: "", world: "school", course: "", keywords: "" },
  { kind: "subject", title: "All courses", subtitle: "Browse every course", href: "/courses", icon: "", world: "school", course: "", keywords: "" },
  { kind: "subject", title: "Practice", subtitle: "Spaced review & weak skills", href: "/practice", icon: "", world: "school", course: "", keywords: "" },
  { kind: "subject", title: "Exam prep", subtitle: "NEET & JEE mock tests and drills", href: "/exam", icon: "", world: "exam", course: "", keywords: "" },
  { kind: "subject", title: "Code lab", subtitle: "HTML · CSS · JS · Python · SQL playground", href: "/code/playground", icon: "", world: "code", course: "", keywords: "" },
];

function score(item: SearchItem, terms: string[]) {
  let s = 0;
  const title = item.title.toLowerCase();
  for (const t of terms) {
    if (title.startsWith(t)) s += 6;
    else if (title.includes(t)) s += 4;
    else if (item.keywords.includes(t)) s += 1;
    else return 0;
  }
  return s + (item.kind === "subject" ? 2 : item.kind === "topic" ? 1 : 0);
}

export function CommandPalette() {
  const open = useUi((s) => s.paletteOpen);
  const setOpen = useUi((s) => s.setPalette);
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState<SearchItem[] | null>(null);

  // The full index is fetched lazily so content never bloats the page bundle.
  useEffect(() => {
    if (!open || index) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setIndex([]));
  }, [open, index]);

  const results = useMemo(() => {
    const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return QUICK;
    return (index ?? [])
      .map((i) => ({ i, s: score(i, terms) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((x) => x.i);
  }, [q, index]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);
  useEffect(() => setActive(0), [q]);

  const go = (item?: SearchItem) => {
    if (!item) return;
    setOpen(false);
    router.push(item.href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-ink/40 p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -12, scale: 0.98 }}
            className="card w-full max-w-xl overflow-hidden shadow-lift"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Search"
          >
            <div className="flex items-center gap-3 border-b-2 border-line px-4">
              <Search className="h-5 w-5 text-muted" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(results.length - 1, a + 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(0, a - 1));
                  }
                  if (e.key === "Enter") go(results[active]);
                }}
                placeholder="Search courses and lessons — try “flexbox” or “photosynthesis”"
                className="h-14 w-full bg-transparent text-base font-bold outline-none placeholder:font-semibold placeholder:text-muted"
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {!q && <li className="eyebrow px-3 pb-1 pt-2">Jump to</li>}
              {results.map((r, i) => (
                <li key={r.href + i}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r)}
                    className={clsx("flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition", i === active ? "bg-accent-soft" : "hover:bg-surface-2")}
                  >
                    {r.course ? <CourseIcon slug={r.course} size={36} /> : <LogoMark size={36} />}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-extrabold">{r.title}</span>
                      <span className="block truncate text-xs font-semibold text-muted">{r.subtitle}</span>
                    </span>
                    <span className="chip hidden capitalize sm:inline-flex">{r.kind === "subject" ? (r.course ? worldById[r.world].name : "Go to") : r.kind === "topic" ? "Unit" : "Lesson"}</span>
                    {i === active && <CornerDownLeft className="h-4 w-4 text-muted" />}
                  </button>
                </li>
              ))}
              {results.length === 0 && q && !index && <li className="p-8 text-center text-sm text-muted">Loading the library…</li>}
              {results.length === 0 && (index || !q) && <li className="p-8 text-center text-sm text-muted">No matches. Try a broader word.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
