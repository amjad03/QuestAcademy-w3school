"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { CheckCircle2, Pencil, RotateCcw, Trash2 } from "lucide-react";
import clsx from "clsx";
import { useNotebook, type Doubt } from "@/lib/notebook-store";
import { useT } from "@/i18n";

/** Title + details fields shared by the add and edit forms. */
export function DoubtFields({ title, text, onTitle, onText, autoFocus }: { title: string; text: string; onTitle: (v: string) => void; onText: (v: string) => void; autoFocus?: boolean }) {
  const t = useT();
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);
  return (
    <>
      <label className="block text-sm font-bold">
        {t("notebook.doubt.titleLabel", "What is unclear?")}
        <input ref={ref} value={title} onChange={(e) => onTitle(e.target.value)} placeholder={t("notebook.doubt.titlePlaceholder", "One line, e.g. Why does the loop stop at n-1?")} className="input mt-1.5 w-full text-sm font-normal" maxLength={120} required />
      </label>
      <label className="mt-2 block">
        <span className="sr-only">{t("notebook.doubt.details", "Details")}</span>
        <textarea value={text} onChange={(e) => onText(e.target.value)} placeholder={t("notebook.doubt.textPlaceholder", "Optional: add what you tried or where you got stuck.")} className="input w-full resize-y text-sm" rows={3} maxLength={2000} />
      </label>
    </>
  );
}

/** One saved doubt: read it, edit it, add to it, mark it resolved or delete it. */
export function DoubtItem({ d, meta, actions, compact }: { d: Doubt; meta?: ReactNode; actions?: ReactNode; compact?: boolean }) {
  const t = useT();
  const update = useNotebook((s) => s.updateDoubt);
  const setResolved = useNotebook((s) => s.setDoubtResolved);
  const remove = useNotebook((s) => s.removeDoubt);
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [title, setTitle] = useState(d.title);
  const [text, setText] = useState(d.text);

  const startEdit = () => {
    setTitle(d.title);
    setText(d.text);
    setEditing(true);
  };

  const btn = compact ? "!px-2.5 !py-1 text-xs" : "!px-3 !py-1.5 text-xs";

  return (
    <li className={clsx("rounded-2xl border border-line bg-surface", compact ? "p-3.5" : "p-5", d.resolved && !editing && "opacity-80")}>
      {editing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim()) return;
            update(d.id, { title, text });
            setEditing(false);
          }}
        >
          <DoubtFields title={title} text={text} onTitle={setTitle} onText={setText} autoFocus />
          <div className="mt-3 flex gap-2">
            <button type="submit" className={clsx("btn-primary", btn)} disabled={!title.trim()}>
              {t("notebook.doubt.saveChanges", "Save changes")}
            </button>
            <button type="button" onClick={() => setEditing(false)} className={clsx("btn-flat", btn)}>
              {t("notebook.doubt.cancel", "Cancel")}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <h3 className={clsx("font-bold leading-snug text-ink", d.resolved && "line-through decoration-line")}>{d.title}</h3>
              {meta && <p className="mt-0.5 text-xs font-semibold text-muted">{meta}</p>}
              {d.text ? (
                <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed text-ink">{d.text}</p>
              ) : (
                <button type="button" onClick={startEdit} className="mt-1.5 text-xs font-semibold text-accent hover:underline">
                  {t("notebook.doubt.addDetails", "Add details")}
                </button>
              )}
            </div>
            {d.resolved && <span className="shrink-0 rounded-full bg-good-soft px-2 py-0.5 text-[11px] font-bold text-good-shade">{t("notebook.doubt.resolved", "Resolved")}</span>}
          </div>

          {confirming ? (
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl bg-bad-soft px-3 py-2" role="alertdialog" aria-label={t("notebook.doubt.confirmDelete", "Delete this doubt?")}>
              <span className="flex-1 text-sm font-semibold text-bad-shade">{t("notebook.doubt.confirmDelete", "Delete this doubt?")}</span>
              <button type="button" onClick={() => remove(d.id)} className={clsx("btn-bad", btn)} autoFocus>
                {t("notebook.doubt.delete", "Delete")}
              </button>
              <button type="button" onClick={() => setConfirming(false)} className={clsx("btn-flat", btn)}>
                {t("notebook.doubt.cancel", "Cancel")}
              </button>
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {d.resolved ? (
                <button type="button" onClick={() => setResolved(d.id, false)} className={clsx("btn-ghost", btn)}>
                  <RotateCcw className="h-3.5 w-3.5" /> {t("notebook.doubts.reopen", "Reopen")}
                </button>
              ) : (
                <button type="button" onClick={() => setResolved(d.id, true)} className={clsx("btn-good", btn)}>
                  <CheckCircle2 className="h-3.5 w-3.5" /> {t("notebook.doubts.markResolved", "Mark resolved")}
                </button>
              )}
              <button type="button" onClick={startEdit} className={clsx("btn-ghost", btn)}>
                <Pencil className="h-3.5 w-3.5" /> {t("notebook.doubt.edit", "Edit")}
              </button>
              {actions}
              <button type="button" onClick={() => setConfirming(true)} className="btn-flat ml-auto !p-1.5 text-muted hover:text-bad" aria-label={t("notebook.doubts.delete", "Delete doubt {title}", { title: d.title })}>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </>
      )}
    </li>
  );
}
