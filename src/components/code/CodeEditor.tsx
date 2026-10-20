"use client";

import CodeMirror from "@uiw/react-codemirror";
import { keymap } from "@codemirror/view";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { useMemo } from "react";
import type { CodeLang } from "@/content/types";

const LANGS = { html, css, javascript, python, sql } as const;

export default function CodeEditor({
  value,
  onChange,
  lang,
  onRun,
  minHeight = "160px",
  maxHeight,
  readOnly,
}: {
  value: string;
  onChange?: (v: string) => void;
  lang: CodeLang;
  onRun?: () => void;
  minHeight?: string;
  maxHeight?: string;
  readOnly?: boolean;
}) {
  const extensions = useMemo(
    () => [
      LANGS[lang](),
      keymap.of([
        {
          key: "Mod-Enter",
          run: () => {
            onRun?.();
            return true;
          },
        },
      ]),
    ],
    [lang, onRun],
  );
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      theme={tokyoNight}
      extensions={extensions}
      readOnly={readOnly}
      minHeight={minHeight}
      maxHeight={maxHeight}
      basicSetup={{ foldGutter: false, highlightActiveLine: !readOnly, autocompletion: true, tabSize: lang === "python" ? 4 : 2 }}
      className="h-full overflow-hidden text-[13.5px]"
    />
  );
}
