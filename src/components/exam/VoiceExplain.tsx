"use client";

/**
 * "Explain by voice" for an exam question: the tutor voice talks through the solution step by step in the
 * student's language while the board writes the working.
 *
 * The narrated steps are written on demand by the tutor API from the question's stored `explain`, then
 * cached in localStorage (per question and language). Offline, or when the tutor is unavailable, the
 * stored explanation itself is read aloud sentence by sentence, with its formulas on the board.
 */

import { useState } from "react";
import dynamic from "next/dynamic";
import { AudioLines, Loader2, WifiOff } from "lucide-react";
import type { ExamQuestion } from "@/content/types";
import { useLocale, useT } from "@/i18n";
import { askTutor } from "@/lib/tutor/client";
import { correctAnswerText } from "@/components/learn/QuestionCard";
import { cleanOp, type BoardOp } from "@/components/board/ops";
import type { BoardScript, BoardStep } from "@/components/board/script";

const BoardLessonPlayer = dynamic(() => import("@/components/board/BoardLessonPlayer").then((m) => m.BoardLessonPlayer), {
  ssr: false,
  loading: () => <div className="aspect-[5/3] w-full animate-pulse rounded-2xl bg-surface-2" />,
});

export type ExplainLang = "en" | "hi" | "kn" | "hinglish";
const LANGS: { id: ExplainLang; label: string; name: string; speech: string }[] = [
  { id: "en", label: "English", name: "English", speech: "en-IN" },
  { id: "hi", label: "हिन्दी", name: "Hindi (Devanagari script)", speech: "hi-IN" },
  { id: "kn", label: "ಕನ್ನಡ", name: "Kannada (Kannada script)", speech: "kn-IN" },
  { id: "hinglish", label: "Hinglish", name: "Hinglish (conversational Hindi written in Latin script, mixed with English terms)", speech: "en-IN" },
];
const LANG_KEY = "qa-explain-lang";
const cacheKey = (id: string, lang: ExplainLang) => `qa-voice-explain:v1:${id}:${lang}`;

const store = {
  get(k: string) {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set(k: string, v: string) {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* full or blocked: just don't cache */
    }
  },
};

/** One board op for a line of working: maths when it looks like LaTeX or an equation, else handwriting. */
function boardOp(line: string, i: number): BoardOp | null {
  const s = line.trim().replace(/^\$+|\$+$/g, "");
  if (!s) return null;
  const mathy = /\\[a-z]+|[=^_]|\d\s*[+\-×*/]\s*\d/i.test(s) && !/[ऀ-෿]/.test(s);
  return cleanOp(mathy ? { op: "math", id: `w${i}`, tex: s, size: 28 } : { op: "text", id: `w${i}`, text: s.slice(0, 120), size: 24 });
}

/** Spoken text from Md: drop LaTeX commands, markdown and $ signs. */
const spoken = (s: string) =>
  s
    .replace(/\$([^$]+)\$/g, (_, m: string) => m.replace(/\\(frac|dfrac)\{([^}]*)\}\{([^}]*)\}/g, "$2 over $3").replace(/\\times/g, " times ").replace(/\\[a-z]+/gi, " ").replace(/[{}^_]/g, " "))
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Offline fallback: the stored explanation, one sentence per step, its formulas on the board. */
export function stepsFromExplain(q: ExamQuestion, answer: string): BoardStep[] {
  const text = q.explain?.trim() || "";
  const parts = text ? text.split(/(?<=[.?!])\s+(?=[A-Z$(])/).filter((p) => p.trim()) : [];
  const ansOp = boardOp(answer.replace(/\$/g, ""), 99);
  const steps: BoardStep[] = [{ say: `The answer is ${spoken(answer)}.`, ops: [cleanOp({ op: "text", id: "ans", text: "Answer:", color: "green", size: 28 })!, ...(ansOp ? [{ ...ansOp, color: "green" as const }] : [])] }];
  parts.forEach((p, i) => {
    const maths = [...p.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);
    const ops = (maths.length ? maths.slice(0, 2) : [p.replace(/\$/g, "")]).map((m, j) => boardOp(m, i * 3 + j)).filter((o): o is BoardOp => Boolean(o));
    steps.push({ say: spoken(p), ops });
  });
  return steps;
}

/** Parse the tutor's "SAY: … || BOARD: …" lines. */
export function parseSteps(text: string): BoardStep[] {
  const steps: BoardStep[] = [];
  for (const line of text.split(/\n+/)) {
    const m = line.match(/SAY:\s*(.+?)\s*(?:\|\|\s*BOARD:\s*(.*))?$/i);
    if (!m) continue;
    const op = m[2] ? boardOp(m[2], steps.length) : null;
    steps.push({ say: m[1].trim(), ops: op ? [op] : [] });
  }
  return steps;
}

function prompt(lang: (typeof LANGS)[number]) {
  return `Explain the solution of this exam question to me step by step, out loud, like a teacher at a whiteboard. Speak in ${lang.name}.
Reply ONLY with 3 to 7 lines, each exactly in this form:
SAY: <one or two short spoken sentences, no symbols or LaTeX — say "x squared", "divided by"> || BOARD: <the working for this step as one short LaTeX expression or a few English words, or leave empty>
Follow the stored solution; do not add facts it does not support; end with the final answer.`;
}

export function VoiceExplain({ question, examName }: { question: ExamQuestion; examName?: string }) {
  const t = useT();
  const locale = useLocale();
  const [lang, setLang] = useState<ExplainLang>(() => {
    const saved = store.get(LANG_KEY) as ExplainLang | null;
    return saved && LANGS.some((l) => l.id === saved) ? saved : locale === "hi" ? "hi" : locale === "kn" ? "kn" : "en";
  });
  const [state, setState] = useState<"idle" | "loading" | "ready">("idle");
  const [offline, setOffline] = useState(false);
  const [script, setScript] = useState<BoardScript | null>(null);
  const L = LANGS.find((l) => l.id === lang)!;

  const build = (steps: BoardStep[], id: string): BoardScript => ({ v: 1, id, title: question.chapter, subject: question.subject, grade: question.grade ?? "", chapter: question.chapter, lang, steps });

  const explain = async () => {
    setState("loading");
    setOffline(false);
    const answer = correctAnswerText(question);
    const key = cacheKey(question.id, lang);
    const cached = store.get(key);
    if (cached) {
      try {
        const steps = JSON.parse(cached) as BoardStep[];
        if (steps.length) return (setScript(build(steps, key)), setState("ready"));
      } catch {
        /* regenerate */
      }
    }
    let steps: BoardStep[] = [];
    if (typeof navigator === "undefined" || navigator.onLine !== false) {
      const options = "options" in question ? `\n${question.options.map((o, i) => `(${String.fromCharCode(65 + i)}) ${o}`).join("\n")}` : "";
      let text = "";
      const res = await askTutor(
        {
          context: { stage: "mastery", language: L.name, courseTitle: examName ? `${examName} practice` : "Exam practice", lessonTitle: question.chapter, questionText: `${question.q}${options}`.slice(0, 3000), answered: true, correct: true, answerText: `${answer}\nStored solution: ${question.explain ?? ""}`.slice(0, 1000) },
          messages: [{ role: "user", content: prompt(L) }],
        },
        (s) => (text = s),
      ).catch(() => ({ ok: false as const, code: "network" as const }));
      if (res.ok && !res.refused && !res.broken) steps = parseSteps(text);
      if (steps.length >= 2) store.set(key, JSON.stringify(steps));
      else steps = [];
    }
    if (!steps.length) {
      setOffline(true);
      steps = stepsFromExplain(question, answer);
    }
    setScript(build(steps, `${key}:${steps.length}`));
    setState("ready");
  };

  return (
    <div className="mt-4" data-testid="voice-explain">
      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-ghost inline-flex items-center gap-1.5 rounded-xl border-2 border-line px-3 py-1.5 text-sm font-extrabold hover:border-accent" onClick={explain} disabled={state === "loading"} data-testid="voice-explain-btn">
          {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <AudioLines className="h-4 w-4 text-accent" />} {t("exam.voice.explain", "Explain by voice")}
        </button>
        <select
          value={lang}
          aria-label={t("exam.voice.language", "Explanation language")}
          className="h-9 rounded-xl border-2 border-line bg-surface px-2 text-sm font-bold"
          onChange={(e) => {
            const v = e.target.value as ExplainLang;
            setLang(v);
            store.set(LANG_KEY, v);
            setScript(null);
            setState("idle");
          }}
        >
          {LANGS.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      {offline && state === "ready" && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-muted" data-testid="voice-explain-offline">
          <WifiOff className="h-3.5 w-3.5" /> {t("exam.voice.offline", "The tutor is not reachable, so the stored solution is read aloud instead.")}
        </p>
      )}
      {script && state === "ready" && (
        <div className="mt-3">
          <BoardLessonPlayer key={script.id} script={script} speechLang={offline ? "en-IN" : L.speech} autoPlay showChapters={false} askTopic={`${question.chapter} — exam question`} />
        </div>
      )}
    </div>
  );
}
