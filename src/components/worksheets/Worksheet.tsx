import { MdInline } from "@/components/Md";
import { CourseIcon } from "@/components/brand/CourseIcon";
import type { Subject, Topic } from "@/content/types";
import { LETTERS } from "./options";
import type { WorksheetItem } from "./build";

const letter = (i: number) => LETTERS[i] ?? String(i + 1);

/** Printable sheet: header, numbered questions, then the answer key on a new page. */
export function Worksheet({ subject, topic, world, items }: { subject: Subject; topic: Topic; world: string; items: WorksheetItem[] }) {
  const title = `${subject.title} · ${topic.title}`;
  return (
    <article className="worksheet mt-5 rounded-2xl border-2 border-line p-7 sm:p-10" aria-label={`${title} worksheet`}>
      <style>{CSS}</style>

      <header>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="ws-eyebrow">Quest Academy · {world}</p>
            <h1 className="ws-title">{subject.title}</h1>
            <p className="ws-sub">
              {topic.title} · {items.length} questions
            </p>
          </div>
          <CourseIcon slug={subject.slug} size={44} flat />
        </div>
        <div className="ws-meta">
          <span>
            Name <i />
          </span>
          <span>
            Date <i />
          </span>
          <span>
            Class <i />
          </span>
        </div>
        <p className="ws-instr">Answer every question. For multiple-choice questions, circle one letter unless the question says to select all that apply. Show your working where there is space.</p>
      </header>

      <ol className="ws-list">
        {items.map((it) => (
          <li key={it.n} className="ws-q">
            <div className="ws-q-head">
              <span className="ws-n">{it.n}.</span>
              <p className="ws-text">
                <MdInline text={it.q.q} />
              </p>
            </div>
            <Body item={it} />
          </li>
        ))}
      </ol>

      <footer className="ws-foot">
        <span>{title}</span>
        <span>questacademy · worksheet</span>
      </footer>

      <section className="ws-key" aria-label="Answer key">
        <p className="ws-eyebrow">Answer key</p>
        <h2 className="ws-title">{title}</h2>
        <p className="ws-sub">
          {items.length} answers · for teachers, tutors and parents
        </p>
        <ol className="ws-key-list">
          {items.map((it) => (
            <li key={it.n}>
              <span className="ws-n">{it.n}.</span>
              <div className="min-w-0">
                <strong>{it.answer}</strong>
                {it.explain && (
                  <span className="ws-explain">
                    <MdInline text={it.explain} />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
        <footer className="ws-foot">
          <span>{title} · answer key</span>
          <span>questacademy · worksheet</span>
        </footer>
      </section>
    </article>
  );
}

function Body({ item }: { item: WorksheetItem }) {
  const q = item.q;
  switch (q.kind) {
    case "mcq":
    case "multi":
      return (
        <>
          {q.kind === "multi" && <p className="ws-hint">Select all that apply.</p>}
          <ol className="ws-opts">
            {q.options.map((o, i) => (
              <li key={i}>
                <span className="ws-letter">({letter(i)})</span>
                <span>
                  <MdInline text={o} />
                </span>
              </li>
            ))}
          </ol>
        </>
      );
    case "truefalse":
      return (
        <p className="ws-tf">
          <span>
            <i className="ws-box" />
            True
          </span>
          <span>
            <i className="ws-box" />
            False
          </span>
        </p>
      );
    case "numeric":
      return (
        <p className="ws-answer">
          Answer <i className="ws-line" />
          {q.unit && <span className="ws-unit">{q.unit}</span>}
        </p>
      );
    case "fill":
      return (
        <p className="ws-answer">
          Answer <i className="ws-line" />
        </p>
      );
    case "order":
      return (
        <>
          <p className="ws-hint">Write the letters in the correct order.</p>
          <ol className="ws-opts">
            {(item.shown ?? q.items).map((o, i) => (
              <li key={i}>
                <span className="ws-letter">({letter(i)})</span>
                <span>
                  <MdInline text={o} />
                </span>
              </li>
            ))}
          </ol>
          <p className="ws-answer">
            Order <i className="ws-line" />
          </p>
        </>
      );
  }
}

const CSS = `
.worksheet { background: #fff; color: #111827; line-height: 1.45; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
.worksheet .ws-eyebrow { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; font-weight: 800; color: #6b7280; }
.worksheet .ws-title { margin: 2px 0 0; font-size: 22px; font-weight: 900; line-height: 1.2; }
.worksheet .ws-sub { margin: 2px 0 0; font-size: 13.5px; font-weight: 700; color: #4b5563; }
.worksheet .ws-meta { display: flex; flex-wrap: wrap; gap: 14px 28px; margin-top: 18px; padding-top: 14px; border-top: 2px solid #111827; font-size: 13px; font-weight: 800; }
.worksheet .ws-meta span { display: flex; flex: 1 1 160px; align-items: flex-end; gap: 8px; }
.worksheet .ws-meta i { display: block; flex: 1; height: 1.2em; border-bottom: 1.5px solid #111827; }
.worksheet .ws-instr { margin: 14px 0 0; font-size: 12.5px; font-weight: 500; color: #4b5563; }
.worksheet .ws-list { list-style: none; margin: 22px 0 0; padding: 0; display: grid; gap: 18px; }
.worksheet .ws-q { break-inside: avoid; page-break-inside: avoid; }
.worksheet .ws-q-head { display: flex; gap: 10px; font-size: 14.5px; font-weight: 600; }
.worksheet .ws-text { margin: 0; }
.worksheet .ws-n { flex: 0 0 26px; text-align: right; font-weight: 900; }
.worksheet .ws-opts { list-style: none; margin: 8px 0 0 36px; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 18px; font-size: 13.5px; }
.worksheet .ws-opts li { display: flex; gap: 8px; min-width: 0; }
.worksheet .ws-letter { flex: 0 0 auto; font-weight: 800; }
.worksheet .ws-hint { margin: 4px 0 0 36px; font-size: 12px; font-style: italic; color: #6b7280; }
.worksheet .ws-answer { margin: 10px 0 0 36px; display: flex; align-items: flex-end; gap: 10px; font-size: 13px; font-weight: 700; }
.worksheet .ws-line { display: block; flex: 0 1 260px; height: 1.3em; border-bottom: 1.5px solid #111827; }
.worksheet .ws-unit { font-weight: 600; color: #4b5563; }
.worksheet .ws-tf { margin: 8px 0 0 36px; display: flex; gap: 28px; font-size: 13.5px; font-weight: 700; }
.worksheet .ws-box { display: inline-block; width: 14px; height: 14px; margin-right: 7px; border: 1.5px solid #111827; border-radius: 3px; vertical-align: -2px; }
.worksheet .ws-foot { display: flex; justify-content: space-between; gap: 12px; margin-top: 28px; padding-top: 10px; border-top: 1px solid #d1d5db; font-size: 11px; font-weight: 600; color: #6b7280; }
.worksheet .ws-key { break-before: page; page-break-before: always; margin-top: 36px; padding-top: 28px; border-top: 2px dashed #9ca3af; }
.worksheet .ws-key-list { list-style: none; margin: 16px 0 0; padding: 0; display: grid; gap: 10px; }
.worksheet .ws-key-list li { display: flex; gap: 10px; font-size: 13.5px; break-inside: avoid; page-break-inside: avoid; }
.worksheet .ws-key-list strong { font-weight: 800; }
.worksheet .ws-explain { display: block; margin-top: 2px; font-size: 12.5px; font-weight: 500; color: #4b5563; }
.worksheet code { font-size: .92em; }
@page { size: A4; margin: 16mm 15mm; }
@media print {
  body * { visibility: hidden; }
  .worksheet, .worksheet * { visibility: visible; }
  .worksheet { position: absolute; inset: 0; width: 100%; margin: 0; padding: 0; border: 0; border-radius: 0; box-shadow: none; }
  .worksheet .ws-key { margin-top: 0; padding-top: 0; border-top: 0; }
  html, body { background: #fff !important; }
  * { overflow: visible !important; }
}
@media (max-width: 560px) { .worksheet .ws-opts { grid-template-columns: 1fr; } }
`;
