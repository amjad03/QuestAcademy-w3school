"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, Clock, Eye, EyeOff, Lock } from "lucide-react";
import type { CaseStudy } from "@/content/resources";
import { Md, MdInline } from "@/components/Md";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useT } from "@/i18n";

type UnitRef = { slug: string; title: string; href: string };

const notesKey = (course: string, slug: string) => `quest-case-notes:${course}/${slug}`;

/** Private notes for a case study, kept only in this browser. */
function NotesBox({ course, slug }: { course: string; slug: string }) {
  const t = useT();
  const [text, setText] = useState("");
  const [saved, setSaved] = useState<"idle" | "saved" | "unavailable">("idle");

  useEffect(() => {
    try {
      setText(localStorage.getItem(notesKey(course, slug)) ?? "");
    } catch {
      setSaved("unavailable");
    }
  }, [course, slug]);

  useEffect(() => {
    if (saved === "unavailable") return;
    const timer = setTimeout(() => {
      try {
        if (text) localStorage.setItem(notesKey(course, slug), text);
        else localStorage.removeItem(notesKey(course, slug));
        setSaved("saved");
      } catch {
        setSaved("unavailable");
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [text, course, slug, saved]);

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-black">{t("cases.notes.title", "Your analysis")}</h2>
        <span className="flex items-center gap-1 text-xs font-semibold text-muted">
          <Lock className="h-3.5 w-3.5" /> {saved === "unavailable" ? t("cases.notes.unavailable", "Can't save in this browser") : t("cases.notes.private", "Private · saved on this device")}
        </span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        placeholder={t("cases.notes.placeholder", "Work through the questions here before revealing what happened…")}
        className="input mt-3 min-h-[200px] resize-y font-normal leading-6"
        aria-label={t("cases.notes.aria", "Private notes for this case study")}
      />
    </section>
  );
}

export function CaseStudyView({ course, courseTitle, study, units }: { course: string; courseTitle: string; study: CaseStudy; units: UnitRef[] }) {
  const t = useT();
  const [reveal, setReveal] = useState(false);

  return (
    <div className="mx-auto max-w-[860px] px-4 py-8 sm:px-6">
      <Link href={`/course/${course}`} className="flex items-center gap-2 text-sm font-extrabold text-muted hover:text-accent">
        <ChevronLeft className="h-4 w-4" />
        <CourseIcon slug={course} size={22} /> {courseTitle}
      </Link>

      <header className="mt-5">
        <p className="eyebrow">{t("cases.eyebrow", "Case study")}</p>
        <h1 className="mt-1 text-3xl font-black leading-tight">{study.title}</h1>
        <p className="mt-2 font-semibold leading-7 text-muted">{study.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="chip">
            <Clock className="h-3 w-3" /> {t("cases.minutes", "{n} min", { n: study.minutes })}
          </span>
          {units.map((u) => (
            <Link key={u.slug} href={u.href} className="chip hover:text-accent">
              {u.title}
            </Link>
          ))}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-black">{t("cases.situation", "The situation")}</h2>
        <Md text={study.scenario} className="prose-quest mt-3 space-y-4" />
      </section>

      {study.data && (
        <figure className="card mt-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-surface-2">
                <tr>
                  {study.data.headers.map((h, i) => (
                    <th key={i} scope="col" className="px-4 py-2.5 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-line">
                {study.data.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row" className="px-4 py-2.5 font-semibold">
                          <MdInline text={cell} />
                        </th>
                      ) : (
                        <td key={ci} className="px-4 py-2.5 tabular-nums">
                          <MdInline text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="border-t-2 border-line px-4 py-2.5 text-xs font-semibold text-muted">{study.data.caption}</figcaption>
        </figure>
      )}

      <section className="mt-8">
        <h2 className="text-lg font-black">{t("cases.questions", "Analysis questions")}</h2>
        <ol className="mt-3 list-decimal space-y-2.5 pl-6 leading-7">
          {study.questions.map((q, i) => (
            <li key={i}>
              <MdInline text={q} />
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-6">
        <NotesBox course={course} slug={study.slug} />
      </div>

      <section className="mt-8">
        <button onClick={() => setReveal((r) => !r)} className="btn-ghost" aria-expanded={reveal} aria-controls="case-outcome">
          {reveal ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {reveal ? t("cases.hideOutcome", "Hide what happened") : t("cases.revealOutcome", "Reveal what happened")}
        </button>
        {reveal && (
          <div id="case-outcome" className="mt-5 space-y-6">
            <div className="card p-6">
              <h2 className="text-lg font-black">{t("cases.outcome", "What happened")}</h2>
              <Md text={study.outcome} className="prose-quest mt-3 space-y-4" />
            </div>
            <div className="card p-6">
              <h2 className="text-lg font-black">{t("cases.takeaways", "Takeaways")}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
                {study.takeaways.map((item, i) => (
                  <li key={i}>
                    <MdInline text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
