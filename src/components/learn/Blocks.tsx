"use client";

import { AlertTriangle, Info, Lightbulb, Sparkles, Swords, Target } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import type { Block, WorldId } from "@/content/types";
import { Md, MdInline, tex } from "@/components/Md";
import { TryIt, LANG_LABEL } from "@/components/code/TryIt";
import { WidgetRenderer } from "@/components/widgets";
import { useLearner } from "@/lib/store";
import { QuestionCard } from "./QuestionCard";

const CALLOUT = {
  tip: { icon: Lightbulb, label: "Pro tip", cls: "border-emerald-500/30 bg-emerald-500/[0.07]", ic: "text-emerald-500" },
  note: { icon: Info, label: "Note", cls: "border-sky-500/30 bg-sky-500/[0.07]", ic: "text-sky-500" },
  warning: { icon: AlertTriangle, label: "Watch out", cls: "border-amber-500/40 bg-amber-500/[0.08]", ic: "text-amber-500" },
  fact: { icon: Sparkles, label: "Did you know?", cls: "border-fuchsia-500/30 bg-fuchsia-500/[0.07]", ic: "text-fuchsia-500" },
  exam: { icon: Swords, label: "Exam insight", cls: "border-orange-500/40 bg-orange-500/[0.08]", ic: "text-orange-500" },
} as const;

export function BlockView({ block, world, id }: { block: Block; world: WorldId; id: string }) {
  const kids = world === "kids";
  switch (block.type) {
    case "heading":
      return <h2 className={clsx("scroll-mt-24 pt-4 font-bold", kids ? "font-kids text-3xl" : world === "campus" ? "font-serif text-[1.7rem]" : "font-display text-2xl")}>{block.text}</h2>;
    case "text":
      return <Md text={block.md} className={clsx("prose-quest space-y-4", kids && "font-kids !text-2xl !leading-relaxed")} />;
    case "callout": {
      const c = CALLOUT[block.tone] ?? CALLOUT.note;
      return (
        <aside className={clsx("rounded-3xl border p-5", c.cls)}>
          <div className={clsx("mb-1.5 flex items-center gap-2 text-sm font-bold", c.ic)}>
            <c.icon className="h-4 w-4" /> {block.title ?? c.label}
          </div>
          <Md text={block.md} className={clsx("prose-quest space-y-2 !text-[0.97rem] !leading-7", kids && "font-kids !text-xl")} />
        </aside>
      );
    }
    case "formula":
      return (
        <figure className="rounded-3xl border border-line bg-surface-2/60 px-5 py-6 text-center">
          <div className="overflow-x-auto text-lg" dangerouslySetInnerHTML={{ __html: tex(block.tex, true) }} />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-muted">
              <MdInline text={block.caption} />
            </figcaption>
          )}
        </figure>
      );
    case "code":
      if (block.runnable) return <TryIt lang={block.lang} code={block.code} caption={block.caption} />;
      return (
        <figure className="overflow-hidden rounded-3xl border border-line bg-[#1a1b26]">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#13141c] px-4 py-2 font-mono text-[11px] text-slate-400">
            <span className="font-semibold text-cyan-300">{LANG_LABEL[block.lang]}</span>
            {block.caption && <span className="truncate pl-4">{block.caption}</span>}
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[13.5px] leading-6 text-slate-200">
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case "illustration":
      return (
        <figure className={clsx("flex flex-col items-center gap-3 rounded-4xl bg-gradient-to-br from-accent/10 to-accent-2/10 py-8", kids && "py-10")}>
          <span className={clsx("leading-none", kids ? "animate-float text-[7rem]" : "text-7xl")}>{block.emoji}</span>
          <figcaption className={clsx("max-w-md px-6 text-center text-muted", kids && "font-kids text-xl text-ink")}>
            <MdInline text={block.caption} />
          </figcaption>
        </figure>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={clsx("prose-quest space-y-2", kids && "font-kids !text-xl")}>
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className={clsx("mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold", block.ordered ? "bg-accent text-white" : "bg-accent/15 text-accent")}>
                {block.ordered ? i + 1 : "•"}
              </span>
              <span className="min-w-0 flex-1">
                <MdInline text={it} />
              </span>
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-3xl border border-line">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-surface-2">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    <MdInline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-t border-line odd:bg-surface even:bg-surface-2/30">
                  {r.map((c, j) => (
                    <td key={j} className="px-4 py-2.5 align-top leading-6">
                      <MdInline text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "widget":
      return (
        <figure className="overflow-hidden rounded-4xl border border-accent/25 bg-surface shadow-soft">
          <div className="flex items-center gap-2 border-b border-line bg-gradient-to-r from-accent/10 to-accent-2/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Target className="h-4 w-4" /> Interactive · play with it
          </div>
          <div className="p-4 sm:p-6">
            <WidgetRenderer widget={block.widget} props={block.props} />
          </div>
          {block.caption && (
            <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
              <MdInline text={block.caption} />
            </figcaption>
          )}
        </figure>
      );
    case "checkpoint":
      return <Checkpoint questions={block.questions} kids={kids} id={id} />;
    case "keypoints":
      return (
        <aside className="rounded-3xl border border-accent/30 bg-accent/[0.06] p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-accent">
            <Sparkles className="h-4 w-4" /> Key points
          </div>
          <ul className={clsx("space-y-2", kids && "font-kids text-xl")}>
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 leading-7">
                <span className="mt-1 text-accent">✦</span>
                <span className="min-w-0 flex-1">
                  <MdInline text={it} />
                </span>
              </li>
            ))}
          </ul>
        </aside>
      );
  }
}

function Checkpoint({ questions, kids, id }: { questions: import("@/content/types").Question[]; kids: boolean; id: string }) {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const award = useLearner((s) => s.award);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  return (
    <section className="rounded-4xl border-2 border-dashed border-accent/40 bg-surface p-5 sm:p-6" aria-label="Checkpoint">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
        <Target className="h-4 w-4" /> {kids ? "Your turn!" : "Checkpoint"} {questions.length > 1 && `· ${Math.min(i + 1, questions.length)}/${questions.length}`}
      </div>
      {done ? (
        <div className={clsx("text-center font-semibold text-good", kids && "font-kids text-2xl")}>✓ Checkpoint cleared — keep going!</div>
      ) : (
        <QuestionCard
          key={`${id}-${i}`}
          question={questions[i]}
          variant={kids ? "kids" : "default"}
          continueLabel={i + 1 < questions.length ? "Next" : "Continue reading"}
          onDone={(ok) => {
            recordAnswer(ok);
            if (ok) award(2, "Checkpoint");
            if (i + 1 < questions.length) setI(i + 1);
            else setDone(true);
          }}
        />
      )}
    </section>
  );
}
