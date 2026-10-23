"use client";

import { AlertTriangle, Info, Lightbulb, Sparkles, Swords, Target } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import type { Block, WorldId } from "@/content/types";
import { Md, MdInline, tex } from "@/components/Md";
import { TryIt, LANG_LABEL } from "@/components/code/TryIt";
import { WidgetRenderer } from "@/components/widgets";
import { useLearner } from "@/lib/store";
import { useT } from "@/i18n";
import { QuestionCard } from "./QuestionCard";

const CALLOUT = {
  tip: { icon: Lightbulb, label: "Pro tip", cls: "border-good/40 bg-good-soft", ic: "text-good-shade" },
  note: { icon: Info, label: "Note", cls: "border-accent/30 bg-accent-soft", ic: "text-accent" },
  warning: { icon: AlertTriangle, label: "Watch out", cls: "border-warn/50 bg-warn/10", ic: "text-warn-shade" },
  fact: { icon: Sparkles, label: "Did you know?", cls: "border-accent-2/30 bg-accent-2/10", ic: "text-accent-2" },
  exam: { icon: Swords, label: "Exam insight", cls: "border-bad/30 bg-bad-soft", ic: "text-bad-shade" },
} as const;

export function BlockView({ block, world, id }: { block: Block; world: WorldId; id: string }) {
  const t = useT();
  const calloutLabel = {
    tip: t("learn.callout.tip", "Pro tip"),
    note: t("learn.callout.note", "Note"),
    warning: t("learn.callout.warning", "Watch out"),
    fact: t("learn.callout.fact", "Did you know?"),
    exam: t("learn.callout.exam", "Exam insight"),
  };
  const kids = world === "kids";
  switch (block.type) {
    case "heading":
      return <h2 className={clsx("scroll-mt-24 pt-4 font-black", kids ? "text-3xl" : "text-2xl")}>{block.text}</h2>;
    case "text":
      return <Md text={block.md} className={clsx("prose-quest space-y-4", kids && "!text-2xl !font-bold !leading-relaxed")} />;
    case "callout": {
      const tone = block.tone in CALLOUT ? block.tone : "note";
      const c = CALLOUT[tone];
      return (
        <aside className={clsx("rounded-2xl border-2 p-5", c.cls)}>
          <div className={clsx("mb-1.5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide", c.ic)}>
            <c.icon className="h-4 w-4" /> {block.title ?? calloutLabel[tone]}
          </div>
          <Md text={block.md} className={clsx("prose-quest space-y-2 !text-[0.97rem] !leading-7", kids && "!text-xl")} />
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
        <figure className={clsx("flex flex-col items-center gap-3 rounded-3xl bg-surface-2 py-8", kids && "py-10")}>
          <span className={clsx("leading-none", kids ? "animate-float text-[7rem]" : "text-7xl")}>{block.emoji}</span>
          <figcaption className={clsx("max-w-md px-6 text-center font-bold text-muted", kids && "text-xl text-ink")}>
            <MdInline text={block.caption} />
          </figcaption>
        </figure>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={clsx("prose-quest space-y-2", kids && "!text-xl")}>
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
        <figure className="overflow-hidden rounded-3xl border-2 border-line bg-surface">
          <div className="flex items-center gap-2 border-b-2 border-line bg-surface-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-accent">
            <Target className="h-4 w-4" /> {t("learn.block.interactive", "Interactive · play with it")}
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
        <aside className="rounded-2xl border-2 border-line bg-surface-2 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-accent">
            <Sparkles className="h-4 w-4" /> {t("learn.block.keyPoints", "Key points")}
          </div>
          <ul className={clsx("space-y-2 font-semibold", kids && "text-xl")}>
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 leading-7">
                <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-accent" />
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
  const t = useT();
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const award = useLearner((s) => s.award);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  return (
    <section className="rounded-3xl border-2 border-b-4 border-line bg-surface p-5 sm:p-6" aria-label={t("learn.checkpoint.title", "Checkpoint")}>
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
        <Target className="h-4 w-4" /> {kids ? t("learn.checkpoint.kidsTitle", "Your turn!") : t("learn.checkpoint.title", "Checkpoint")} {questions.length > 1 && `· ${Math.min(i + 1, questions.length)}/${questions.length}`}
      </div>
      {done ? (
        <div className={clsx("text-center font-extrabold text-good", kids && "text-2xl")}>{t("learn.checkpoint.cleared", "Checkpoint cleared — keep going!")}</div>
      ) : (
        <QuestionCard
          key={`${id}-${i}`}
          question={questions[i]}
          variant={kids ? "kids" : "default"}
          continueLabel={i + 1 < questions.length ? t("learn.checkpoint.next", "Next") : t("learn.checkpoint.continueReading", "Continue reading")}
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
