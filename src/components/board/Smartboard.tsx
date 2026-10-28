"use client";

/**
 * Smartboard: a canvas page the tutor writes on step by step, plus the
 * student's pen. Strokes (lines, shapes, axes, plots, ink, highlights) go on
 * one <canvas>; text and KaTeX sit in a scaled HTML layer above it so they stay
 * sharp and tappable. Everything applied is recorded as timed ops (BoardRecord)
 * so a session can be replayed.
 *
 * Phones: the canvas is capped at 2× device pixels and only redraws while
 * something is animating.
 */

import { useCallback, useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import dynamic from "next/dynamic";
import katex from "katex";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Eraser, MousePointer2, PenLine, X } from "lucide-react";
import { useT } from "@/i18n";
import { BOARD_H, BOARD_W, compileFn, type BoardColor, type BoardOp, type BoardRecord, type Pt } from "./ops";

const BoardExplainer = dynamic(() => import("./BoardExplainer"), { ssr: false, loading: () => <div className="h-40 animate-pulse rounded-2xl bg-surface-2" /> });

const INK: Record<BoardColor, string> = { ink: "#1f2937", blue: "#2563eb", red: "#dc2626", green: "#16a34a", orange: "#ea580c", purple: "#7c3aed" };
const HAND = '"Segoe Print","Bradley Hand","Comic Sans MS","Comic Neue","Chalkboard SE",cursive';
const MARGIN = 40;
const GAP = 14;

type Kind = BoardOp["op"];
interface El {
  id: string;
  op: BoardOp;
  x: number;
  y: number;
  w: number;
  h: number;
  born: number;
  dur: number;
  html?: string;
  fn?: ((x: number) => number) | null;
}
interface Page {
  els: El[];
  cursor: number;
}

export interface TappedElement {
  id: string;
  kind: Kind;
  /** Short human description sent to the tutor ("math: F = ma"). */
  label: string;
}

export interface SmartboardHandle {
  apply: (op: BoardOp, opts?: { animate?: boolean }) => Promise<void>;
  reset: () => void;
  record: () => BoardRecord;
  replay: (rec: BoardRecord, speed?: number) => Promise<void>;
  stop: () => void;
}

const newPage = (): Page => ({ els: [], cursor: MARGIN - 10 });

function describe(el: El): string {
  const o = el.op;
  switch (o.op) {
    case "text":
      return `text: ${o.text}`;
    case "math":
      return `formula: ${o.tex}`;
    case "plot":
      return `graph of y = ${o.fn}${o.label ? ` (${o.label})` : ""}`;
    case "axes":
      return `axes${o.xlabel ? ` (${o.xlabel} vs ${o.ylabel ?? "y"})` : ""}`;
    case "point":
      return `point (${o.at.join(", ")})${o.label ? ` ${o.label}` : ""}`;
    case "ink":
      return o.by === "student" ? "the student's own drawing" : "a sketch";
    default:
      return `${o.op}${"label" in o && o.label ? `: ${o.label}` : ""}`;
  }
}

function niceStep(range: number) {
  const raw = range / 8;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}

function distToSeg(p: Pt, a: Pt, b: Pt) {
  const [dx, dy] = [b[0] - a[0], b[1] - a[1]];
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

export function Smartboard({ ref, onTap, onInk, readOnly }: { ref?: Ref<SmartboardHandle>; onTap?: (el: TappedElement) => void; onInk?: (op: BoardOp) => void; readOnly?: boolean }) {
  const t = useT();
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const pages = useRef<Page[]>([newPage()]);
  const [pageIdx, setPageIdx] = useState(0);
  const pageRef = useRef(0);
  const [, setVersion] = useState(0);
  const [scale, setScale] = useState(1);
  const [tool, setTool] = useState<"point" | "pen">("point");
  const [pen, setPen] = useState<BoardColor>("blue");
  const [explainer, setExplainer] = useState<string | null>(null);
  const rec = useRef<BoardRecord>({ v: 1, startedAt: new Date().toISOString(), ops: [] });
  const t0 = useRef(typeof performance !== "undefined" ? performance.now() : 0);
  const raf = useRef(0);
  const drawing = useRef<Pt[] | null>(null);
  const replayToken = useRef(0);

  const bump = () => setVersion((v) => v + 1);
  const cur = () => pages.current[pageRef.current];
  const goPage = (i: number) => {
    pageRef.current = i;
    setPageIdx(i);
    schedule();
  };

  /* ---------------- drawing ---------------- */

  const draw = useCallback(() => {
    const c = canvas.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return false;
    const k = c.width / BOARD_W;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(k, 0, 0, k, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const now = performance.now();
    let busy = false;
    const page = pages.current[pageRef.current];
    const byId = new Map(page.els.map((e) => [e.id, e]));
    for (const el of page.els) {
      const p = el.dur ? Math.min(1, (now - el.born) / el.dur) : 1;
      if (p < 1) busy = true;
      const o = el.op;
      const col = INK[("color" in o && o.color) || "ink"];
      ctx.strokeStyle = col;
      ctx.fillStyle = col;
      ctx.lineWidth = 3;
      ctx.globalAlpha = 1;
      switch (o.op) {
        case "line":
        case "arrow": {
          const [a, b] = [o.from, o.to];
          const e: Pt = [a[0] + (b[0] - a[0]) * p, a[1] + (b[1] - a[1]) * p];
          ctx.beginPath();
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(e[0], e[1]);
          ctx.stroke();
          if (o.op === "arrow" && p > 0.95) {
            const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
            ctx.beginPath();
            ctx.moveTo(b[0], b[1]);
            ctx.lineTo(b[0] - 16 * Math.cos(ang - 0.45), b[1] - 16 * Math.sin(ang - 0.45));
            ctx.lineTo(b[0] - 16 * Math.cos(ang + 0.45), b[1] - 16 * Math.sin(ang + 0.45));
            ctx.closePath();
            ctx.fill();
          }
          if (o.label && p === 1) label(ctx, o.label, (a[0] + b[0]) / 2 + 6, (a[1] + b[1]) / 2 - 8, col);
          break;
        }
        case "rect": {
          const per = 2 * (o.w + o.h);
          ctx.setLineDash([per * p, per]);
          ctx.strokeRect(o.x, o.y, o.w, o.h);
          ctx.setLineDash([]);
          if (o.label && p === 1) label(ctx, o.label, o.x + 6, o.y - 8, col);
          break;
        }
        case "circle":
          ctx.beginPath();
          ctx.arc(o.x, o.y, o.r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
          ctx.stroke();
          if (o.label && p === 1) label(ctx, o.label, o.x + o.r + 6, o.y - o.r, col);
          break;
        case "axes":
          drawAxes(ctx, o, p);
          break;
        case "plot":
        case "point": {
          const ax = byId.get(o.axes)?.op;
          if (!ax || ax.op !== "axes") break;
          const X = (v: number) => ax.x + ((v - ax.xmin) / (ax.xmax - ax.xmin)) * ax.w;
          const Y = (v: number) => ax.y + ax.h - ((v - ax.ymin) / (ax.ymax - ax.ymin)) * ax.h;
          ctx.save();
          ctx.beginPath();
          ctx.rect(ax.x, ax.y, ax.w, ax.h);
          ctx.clip();
          if (o.op === "plot" && el.fn) {
            const n = 180;
            const upto = Math.floor(n * p);
            ctx.beginPath();
            let pen = false;
            for (let i = 0; i <= upto; i++) {
              const xv = ax.xmin + ((ax.xmax - ax.xmin) * i) / n;
              const yv = el.fn(xv);
              if (!Number.isFinite(yv) || Math.abs(yv - ax.ymin) > 50 * (ax.ymax - ax.ymin)) {
                pen = false;
                continue;
              }
              if (pen) ctx.lineTo(X(xv), Y(yv));
              else ctx.moveTo(X(xv), Y(yv));
              pen = true;
            }
            ctx.stroke();
          } else if (o.op === "point") {
            ctx.beginPath();
            ctx.arc(X(o.at[0]), Y(o.at[1]), 6 * p, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
          if (o.label && p === 1) {
            if (o.op === "point") label(ctx, o.label, X(o.at[0]) + 10, Y(o.at[1]) - 10, col);
            else label(ctx, o.label, ax.x + ax.w - 8 - o.label.length * 10, ax.y + 18, col);
          }
          break;
        }
        case "ink": {
          const n = Math.max(2, Math.floor(o.points.length * p));
          ctx.lineWidth = o.width ?? 3;
          ctx.beginPath();
          o.points.slice(0, n).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
          ctx.stroke();
          break;
        }
        case "highlight":
        case "underline": {
          const tg = byId.get(o.target);
          if (!tg) break;
          if (o.op === "highlight") {
            ctx.globalAlpha = 0.35;
            ctx.fillStyle = o.color ? INK[o.color] : "#facc15";
            ctx.fillRect(tg.x - 6, tg.y - 4, (tg.w + 12) * p, tg.h + 8);
          } else {
            ctx.strokeStyle = o.color ? INK[o.color] : INK.red;
            ctx.beginPath();
            ctx.moveTo(tg.x, tg.y + tg.h + 4);
            ctx.lineTo(tg.x + tg.w * p, tg.y + tg.h + 4);
            ctx.stroke();
          }
          break;
        }
      }
    }
    // The stroke being drawn right now.
    const live = drawing.current;
    if (live && live.length > 1) {
      ctx.globalAlpha = 1;
      ctx.strokeStyle = INK[pen];
      ctx.lineWidth = 3;
      ctx.beginPath();
      live.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
    }
    return busy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pen]);

  const schedule = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const loop = () => {
      if (draw()) raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
  }, [draw]);

  // Size the canvas to its box (device pixels capped at 2× for phones).
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      if (canvas.current) {
        canvas.current.width = Math.round(w * dpr);
        canvas.current.height = Math.round(w * (BOARD_H / BOARD_W) * dpr);
      }
      setScale(w / BOARD_W);
      schedule();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [schedule]);

  /* ---------------- applying ops ---------------- */

  const apply = useCallback(
    (op: BoardOp, opts: { animate?: boolean } = {}): Promise<void> => {
      const animate = opts.animate !== false;
      rec.current.ops.push({ at: Math.round(performance.now() - t0.current), op });
      if (rec.current.ops.length > 3000) rec.current.ops.splice(0, rec.current.ops.length - 3000);
      const born = performance.now();
      let dur = 0;
      if (op.op === "page") {
        pages.current.push(newPage());
        goPage(pages.current.length - 1);
        bump();
        return Promise.resolve();
      }
      if (op.op === "clear") {
        pages.current[pageRef.current] = newPage();
        setExplainer(null);
        bump();
        schedule();
        return Promise.resolve();
      }
      if (op.op === "explainer") {
        setExplainer(op.explainer);
        return Promise.resolve();
      }
      let page = cur();
      let el: El;
      if (op.op === "text" || op.op === "math") {
        const size = op.size ?? (op.op === "math" ? 30 : 26);
        const x = op.x ?? MARGIN;
        const maxW = BOARD_W - x - MARGIN;
        const chars = op.op === "text" ? op.text.length : op.tex.replace(/\\[a-z]+|[{}^_]/gi, "").length;
        const estW = Math.min(maxW, chars * size * (op.op === "text" ? 0.52 : 0.6));
        const lines = op.op === "text" ? Math.max(1, Math.ceil((op.text.length * size * 0.52) / maxW)) : 1;
        const h = op.op === "math" ? size * (/\\(d?frac|sum|int|sqrt)/.test(op.tex) ? 2.3 : 1.5) : lines * size * 1.35;
        if (op.y === undefined && page.cursor + h > BOARD_H - 10 && page.els.length) {
          pages.current.push(newPage());
          goPage(pages.current.length - 1);
          page = cur();
        }
        const y = op.y ?? page.cursor;
        if (op.y === undefined) page.cursor = y + h + GAP;
        dur = animate ? (op.op === "text" ? Math.min(2500, Math.max(400, op.text.length * 35)) : 800) : 0;
        el = { id: op.id, op: { ...op, x, y, size }, x, y, w: estW, h, born, dur };
        if (op.op === "math") el.html = katex.renderToString(op.tex, { throwOnError: false, strict: "ignore", output: "html" });
      } else if (op.op === "highlight" || op.op === "underline") {
        const tg = page.els.find((e) => e.id === op.target);
        if (!tg) return Promise.resolve();
        dur = animate ? 500 : 0;
        el = { id: `${op.op}-${op.target}-${page.els.length}`, op, x: tg.x, y: tg.y, w: tg.w, h: tg.h, born, dur };
      } else {
        const b = bbox(op, page);
        dur = animate ? (op.op === "plot" ? 1200 : op.op === "ink" ? (op.by === "student" ? 0 : 700) : 500) : 0;
        el = { id: (op as { id: string }).id, op, ...b, born, dur };
        if (op.op === "plot") el.fn = compileFn(op.fn);
        if (op.op !== "ink" && op.op !== "point" && op.op !== "plot") page.cursor = Math.max(page.cursor, b.y + b.h + GAP + (op.op === "axes" ? 10 : 0));
      }
      // Replace an element with the same id (the tutor redrawing it).
      page.els = page.els.filter((e) => e.id !== el.id);
      page.els.push(el);
      bump();
      schedule();
      return new Promise((r) => setTimeout(r, dur));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedule],
  );

  const reset = useCallback(() => {
    replayToken.current++;
    pages.current = [newPage()];
    rec.current = { v: 1, startedAt: new Date().toISOString(), ops: [] };
    t0.current = performance.now();
    setExplainer(null);
    goPage(0);
    bump();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      apply,
      reset,
      record: () => ({ ...rec.current, ops: rec.current.ops.slice() }),
      stop: () => {
        replayToken.current++;
      },
      replay: async (r, speed = 2) => {
        reset();
        const my = replayToken.current;
        let last = 0;
        for (const { at, op } of r.ops) {
          const wait = Math.min(2500, Math.max(0, (at - last) / speed));
          last = at;
          if (wait) await new Promise((res) => setTimeout(res, wait));
          if (my !== replayToken.current) return;
          void apply(op);
        }
      },
    }),
    [apply, reset],
  );

  /* ---------------- input: tap and pen ---------------- */

  const toBoard = (e: React.PointerEvent): Pt => {
    const r = canvas.current!.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * BOARD_W, ((e.clientY - r.top) / r.height) * BOARD_H];
  };
  const tapAt = (p: Pt) => {
    const els = cur().els.slice().reverse();
    const hit = els.find((el) => {
      const o = el.op;
      if (o.op === "highlight" || o.op === "underline") return false;
      if (o.op === "line" || o.op === "arrow") return distToSeg(p, o.from, o.to) < 16;
      return p[0] >= el.x - 12 && p[0] <= el.x + el.w + 12 && p[1] >= el.y - 12 && p[1] <= el.y + el.h + 12;
    });
    if (hit && onTap) onTap({ id: hit.id, kind: hit.op.op, label: describe(hit) });
  };
  const down = (e: React.PointerEvent) => {
    if (readOnly) return;
    if (tool === "pen") {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      drawing.current = [toBoard(e)];
    }
  };
  const move = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const p = toBoard(e);
    const prev = drawing.current[drawing.current.length - 1];
    if (Math.hypot(p[0] - prev[0], p[1] - prev[1]) < 2) return;
    drawing.current.push([Math.round(p[0]), Math.round(p[1])]);
    schedule();
  };
  const up = (e: React.PointerEvent) => {
    if (tool === "point") return tapAt(toBoard(e));
    const pts = drawing.current;
    drawing.current = null;
    if (!pts || pts.length < 2) return;
    const op: BoardOp = { op: "ink", id: `ink${Date.now().toString(36)}`, points: pts, color: pen, width: 3, by: "student" };
    void apply(op, { animate: false });
    onInk?.(op);
  };

  const page = pages.current[pageIdx] ?? cur();
  const textEls = page.els.filter((e) => e.op.op === "text" || e.op.op === "math");
  const total = pages.current.length;

  return (
    <div className="space-y-2">
      <style>{`@keyframes qa-write{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}.qa-board-el{animation:qa-write var(--d) steps(24,end) both}.qa-board-el .katex{font-size:1em}`}</style>
      <div ref={wrap} className="relative w-full overflow-hidden rounded-2xl border-2 border-line shadow-sm" style={{ aspectRatio: `${BOARD_W} / ${BOARD_H}`, background: "#fdfcf7", touchAction: tool === "pen" ? "none" : "manipulation" }}>
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" onPointerDown={down} onPointerMove={move} onPointerUp={up} aria-label={t("board.aria", "Smartboard")} role="img" />
        <div className="pointer-events-none absolute left-0 top-0 origin-top-left" style={{ width: BOARD_W, height: BOARD_H, transform: `scale(${scale})` }}>
          {textEls.map((el) => {
            const o = el.op as Extract<BoardOp, { op: "text" | "math" }>;
            return (
              <button
                key={`${pageIdx}-${el.id}-${el.born}`}
                type="button"
                ref={(node) => {
                  if (node && (node.offsetWidth !== Math.round(el.w) || node.offsetHeight !== Math.round(el.h))) {
                    el.w = node.offsetWidth;
                    if (node.offsetHeight > el.h && o.y === undefined) page.cursor = Math.max(page.cursor, el.y + node.offsetHeight + GAP);
                    el.h = node.offsetHeight;
                  }
                }}
                onClick={() => onTap?.({ id: el.id, kind: o.op, label: describe(el) })}
                className={clsx("qa-board-el absolute max-w-[920px] text-left leading-snug", tool === "point" && !readOnly ? "pointer-events-auto cursor-help" : "pointer-events-none")}
                style={{ left: el.x, top: el.y, fontSize: o.size, color: INK[o.color ?? "ink"], fontFamily: o.op === "text" ? HAND : undefined, ["--d" as string]: `${el.dur}ms`, maxWidth: BOARD_W - el.x - MARGIN / 2 }}
                {...(el.html ? { dangerouslySetInnerHTML: { __html: el.html } } : { children: (o as { text: string }).text })}
              />
            );
          })}
        </div>
      </div>
      {!readOnly && (
        <div className="flex flex-wrap items-center gap-1.5 text-sm">
          <button type="button" onClick={() => setTool("point")} className={clsx("btn-ghost inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5", tool === "point" && "bg-accent-soft text-accent")} aria-pressed={tool === "point"}>
            <MousePointer2 className="h-4 w-4" /> {t("board.tap", "Tap to ask")}
          </button>
          <button type="button" onClick={() => setTool("pen")} className={clsx("btn-ghost inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5", tool === "pen" && "bg-accent-soft text-accent")} aria-pressed={tool === "pen"}>
            <PenLine className="h-4 w-4" /> {t("board.pen", "Pen")}
          </button>
          {tool === "pen" &&
            (["blue", "red", "green", "ink"] as BoardColor[]).map((c) => (
              <button key={c} type="button" onClick={() => setPen(c)} className={clsx("h-6 w-6 rounded-full border-2", pen === c ? "border-accent" : "border-line")} style={{ background: INK[c] }} aria-label={c} />
            ))}
          <button
            type="button"
            onClick={() => {
              cur().els = cur().els.filter((e) => !(e.op.op === "ink" && e.op.by === "student"));
              bump();
              schedule();
            }}
            className="btn-ghost inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5"
          >
            <Eraser className="h-4 w-4" /> {t("board.clearInk", "Clear my ink")}
          </button>
          <span className="ml-auto inline-flex items-center gap-1">
            <button type="button" disabled={pageIdx === 0} onClick={() => goPage(pageIdx - 1)} className="btn-ghost rounded-lg p-1.5 disabled:opacity-40" aria-label={t("board.prev", "Previous page")}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="tabular-nums text-muted">{t("board.page", "Page {n} of {m}", { n: pageIdx + 1, m: total })}</span>
            <button type="button" disabled={pageIdx >= total - 1} onClick={() => goPage(pageIdx + 1)} className="btn-ghost rounded-lg p-1.5 disabled:opacity-40" aria-label={t("board.next", "Next page")}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </span>
        </div>
      )}
      {explainer && (
        <div className="relative rounded-2xl border-2 border-line p-2">
          <button type="button" onClick={() => setExplainer(null)} className="btn-ghost absolute right-2 top-2 z-10 rounded-lg p-1" aria-label={t("board.closeExplainer", "Close explainer")}>
            <X className="h-4 w-4" />
          </button>
          <BoardExplainer id={explainer} />
        </div>
      )}
    </div>
  );
}

function label(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, col: string) {
  ctx.save();
  ctx.font = `22px ${HAND}`;
  ctx.fillStyle = col;
  ctx.globalAlpha = 1;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawAxes(ctx: CanvasRenderingContext2D, o: Extract<BoardOp, { op: "axes" }>, p: number) {
  const X = (v: number) => o.x + ((v - o.xmin) / (o.xmax - o.xmin)) * o.w;
  const Y = (v: number) => o.y + o.h - ((v - o.ymin) / (o.ymax - o.ymin)) * o.h;
  const y0 = Y(Math.min(o.ymax, Math.max(o.ymin, 0)));
  const x0 = X(Math.min(o.xmax, Math.max(o.xmin, 0)));
  ctx.save();
  ctx.strokeStyle = "#475569";
  ctx.fillStyle = "#475569";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(o.x, y0);
  ctx.lineTo(o.x + o.w * p, y0);
  ctx.moveTo(x0, o.y + o.h);
  ctx.lineTo(x0, o.y + o.h - o.h * p);
  ctx.stroke();
  if (p === 1) {
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 1;
    const sx = niceStep(o.xmax - o.xmin);
    const sy = niceStep(o.ymax - o.ymin);
    ctx.beginPath();
    for (let v = Math.ceil(o.xmin / sx) * sx; v <= o.xmax; v += sx) {
      ctx.moveTo(X(v), o.y);
      ctx.lineTo(X(v), o.y + o.h);
    }
    for (let v = Math.ceil(o.ymin / sy) * sy; v <= o.ymax; v += sy) {
      ctx.moveTo(o.x, Y(v));
      ctx.lineTo(o.x + o.w, Y(v));
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.font = "13px system-ui, sans-serif";
    for (let v = Math.ceil(o.xmin / sx) * sx; v <= o.xmax; v += sx) if (Math.abs(v) > 1e-9) ctx.fillText(String(+v.toFixed(3)), X(v) - 6, y0 + 16);
    for (let v = Math.ceil(o.ymin / sy) * sy; v <= o.ymax; v += sy) if (Math.abs(v) > 1e-9) ctx.fillText(String(+v.toFixed(3)), x0 + 5, Y(v) + 4);
    ctx.font = `18px ${HAND}`;
    if (o.xlabel) ctx.fillText(o.xlabel, o.x + o.w - o.xlabel.length * 9, y0 - 8);
    if (o.ylabel) ctx.fillText(o.ylabel, x0 + 8, o.y + 16);
  }
  ctx.restore();
}

function bbox(op: BoardOp, page: Page): { x: number; y: number; w: number; h: number } {
  switch (op.op) {
    case "line":
    case "arrow":
      return { x: Math.min(op.from[0], op.to[0]), y: Math.min(op.from[1], op.to[1]), w: Math.abs(op.to[0] - op.from[0]), h: Math.abs(op.to[1] - op.from[1]) };
    case "rect":
    case "axes":
      return { x: op.x, y: op.y, w: op.w, h: op.h };
    case "circle":
      return { x: op.x - op.r, y: op.y - op.r, w: op.r * 2, h: op.r * 2 };
    case "ink": {
      const xs = op.points.map((p) => p[0]);
      const ys = op.points.map((p) => p[1]);
      return { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
    }
    case "plot":
    case "point": {
      const ax = page.els.find((e) => e.id === op.axes);
      if (!ax || ax.op.op !== "axes") return { x: 0, y: 0, w: 0, h: 0 };
      if (op.op === "plot") return { x: ax.x, y: ax.y, w: ax.w, h: ax.h };
      const a = ax.op;
      const px = a.x + ((op.at[0] - a.xmin) / (a.xmax - a.xmin)) * a.w;
      const py = a.y + a.h - ((op.at[1] - a.ymin) / (a.ymax - a.ymin)) * a.h;
      return { x: px - 8, y: py - 8, w: 16, h: 16 };
    }
    default:
      return { x: 0, y: 0, w: 0, h: 0 };
  }
}
