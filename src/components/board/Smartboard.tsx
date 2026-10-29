"use client";

/**
 * Smartboard: a two-way board. The tutor writes on it step by step (strokes
 * animate like handwriting, a laser pointer follows the narration); the student
 * draws, highlights, circles, types, erases, undoes, pans/zooms and asks about
 * anything on it. Strokes go on one <canvas>; text and KaTeX sit in a scaled
 * HTML layer above it so they stay sharp and tappable. `snapshot()` flattens
 * the page to a PNG (plus a text description) for the tutor to look at.
 *
 * Phones: pointer events with coalesced points, canvas backing sized to
 * devicePixelRatio × zoom (capped), and redraws only while something moves.
 */

import { useCallback, useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import dynamic from "next/dynamic";
import katex from "katex";
import clsx from "clsx";
import {
  ArrowUpRight, BookmarkPlus, CheckCheck, ChevronLeft, ChevronRight, Circle, Download, Eraser, FileDown, Hand, Highlighter, Maximize2, Minimize2, Minus, MousePointer2, PenLine, Plus, Redo2, Square, Trash2, Type, Undo2, X, ZoomIn, ZoomOut,
} from "lucide-react";
import { useT } from "@/i18n";
import { BOARD_H, BOARD_W, compileFn, type BoardColor, type BoardOp, type BoardRecord, type Pt } from "./ops";
import { EXTRA_OPS, HAND, INK, TABLE_ROW_H, extraBox, label, paintExtra } from "./draw-extra";
import { download, fileSafe, jpegPdf } from "./export";

const BoardExplainer = dynamic(() => import("./BoardExplainer"), { ssr: false, loading: () => <div className="h-40 animate-pulse rounded-2xl bg-surface-2" /> });

const HL = "#facc15";
const MARGIN = 40;
const GAP = 14;
const MAX_Z = 4;

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
  /** Made by the student (erasable, undoable). */
  mine?: boolean;
}
interface Action {
  add: El[];
  del: El[];
}
interface Page {
  els: El[];
  cursor: number;
  undo: Action[];
  redo: Action[];
}

type Tool = "ask" | "pen" | "hl" | "eraser" | "line" | "arrow" | "rect" | "circle" | "text" | "hand";
const SHAPES: Tool[] = ["line", "arrow", "rect", "circle"];

export interface TappedElement {
  id: string;
  kind: Kind;
  /** Short human description sent to the tutor ("math: F = ma"). */
  label: string;
}

export interface BoardSnapshot {
  mediaType: "image/png";
  /** Base64 PNG, no data: prefix. */
  data: string;
  /** What is on the page, in words (helps the model read handwriting-free content exactly). */
  desc: string;
  /** What the student added since the last snapshot, in words ("" when nothing). */
  marks: string;
}

export interface SmartboardHandle {
  apply: (op: BoardOp, opts?: { animate?: boolean }) => Promise<void>;
  reset: () => void;
  record: () => BoardRecord;
  replay: (rec: BoardRecord, speed?: number) => Promise<void>;
  stop: () => void;
  /** Student marks added since the last snapshot. */
  newMarks: () => number;
  snapshot: () => BoardSnapshot | null;
  /** Hand the board to the student ("Your turn: …"), or take it back (null). */
  setTurn: (prompt: string | null) => void;
  /** Every page as an image (JPEG base64, no prefix), for export and notebooks. */
  pageImages: (type?: "image/jpeg" | "image/png") => string[];
  /** The board's written content (text, formulas, tables) as plain lines per page. */
  outline: () => string[][];
}

const newPage = (): Page => ({ els: [], cursor: MARGIN - 10, undo: [], redo: [] });
const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
let sid = 0;
const studentId = () => `s-${Date.now().toString(36)}${++sid}`;

function describe(el: El): string {
  const o = el.op;
  switch (o.op) {
    case "text":
      return `${el.mine ? "student's text" : "text"}: ${o.text}`;
    case "math":
      return `formula: ${o.tex}`;
    case "plot":
      return `graph of y = ${o.fn}${o.label ? ` (${o.label})` : ""}`;
    case "axes":
      return `axes${o.xlabel ? ` (${o.xlabel} vs ${o.ylabel ?? "y"})` : ""}`;
    case "point":
      return `point (${o.at.join(", ")})${o.label ? ` ${o.label}` : ""}`;
    case "table":
      return `table: ${o.rows.map((r) => r.join(" | ")).slice(0, 4).join(" / ")}`;
    case "numberline":
      return `number line ${o.min} to ${o.max}${o.marks?.length ? ` marking ${o.marks.map((m) => m.label ?? m.at).join(", ")}` : ""}`;
    case "component":
      return `${o.kind}${o.label ? ` ${o.label}` : ""}`;
    case "tick":
      return "tutor's tick (correct)";
    case "cross":
      return "tutor's cross (mistake)";
    case "ring":
      return `tutor's ring${o.label ? `: ${o.label}` : ""}`;
    case "polygon":
      return `shape${o.labels?.length ? ` ${o.labels.join("")}` : ""}`;
    case "ink":
      return el.mine || o.by === "student" ? (o.hl ? "the student's highlight" : "the student's own drawing") : "a sketch";
    default:
      return `${el.mine ? "student's " : ""}${o.op}${"label" in o && o.label ? `: ${o.label}` : ""}`;
  }
}

const VERB: Partial<Record<Kind, string>> = { circle: "circled", rect: "boxed", arrow: "drew an arrow at", line: "drew a line near", text: "wrote" };

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

/** Smooth a polyline through midpoints (looks like real handwriting, not polygons). */
function smooth(ctx: CanvasRenderingContext2D, pts: Pt[], n = pts.length) {
  if (n < 2) return;
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < n - 1; i++) ctx.quadraticCurveTo(pts[i][0], pts[i][1], (pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2);
  ctx.lineTo(pts[n - 1][0], pts[n - 1][1]);
  ctx.stroke();
}

/** Paint one page's strokes at board scale. Returns true while something is still animating. */
function paint(ctx: CanvasRenderingContext2D, page: Page, now: number): boolean {
  let busy = false;
  const byId = new Map(page.els.map((e) => [e.id, e]));
  for (const el of page.els) {
    const raw = el.dur ? Math.min(1, (now - el.born) / el.dur) : 1;
    if (raw < 1) busy = true;
    const p = ease(raw);
    const o = el.op;
    const col = INK[("color" in o && o.color) || "ink"];
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.lineWidth = 3.2;
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
        if (o.label && raw === 1) label(ctx, o.label, (a[0] + b[0]) / 2 + 6, (a[1] + b[1]) / 2 - 8, col);
        break;
      }
      case "rect": {
        const per = 2 * (o.w + o.h);
        ctx.setLineDash([per * p, per]);
        ctx.strokeRect(o.x, o.y, o.w, o.h);
        ctx.setLineDash([]);
        if (o.label && raw === 1) label(ctx, o.label, o.x + 6, o.y - 8, col);
        break;
      }
      case "circle":
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
        ctx.stroke();
        if (o.label && raw === 1) label(ctx, o.label, o.x + o.r + 6, o.y - o.r, col);
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
          let down = false;
          for (let i = 0; i <= upto; i++) {
            const xv = ax.xmin + ((ax.xmax - ax.xmin) * i) / n;
            const yv = el.fn(xv);
            if (!Number.isFinite(yv) || Math.abs(yv - ax.ymin) > 50 * (ax.ymax - ax.ymin)) {
              down = false;
              continue;
            }
            if (down) ctx.lineTo(X(xv), Y(yv));
            else ctx.moveTo(X(xv), Y(yv));
            down = true;
          }
          ctx.stroke();
        } else if (o.op === "point") {
          ctx.beginPath();
          ctx.arc(X(o.at[0]), Y(o.at[1]), 6 * p, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        if (o.label && raw === 1) {
          if (o.op === "point") label(ctx, o.label, X(o.at[0]) + 10, Y(o.at[1]) - 10, col);
          else label(ctx, o.label, ax.x + ax.w - 8 - o.label.length * 10, ax.y + 18, col);
        }
        break;
      }
      case "ink": {
        const n = Math.max(2, Math.ceil(o.points.length * p));
        ctx.lineWidth = o.width ?? 3;
        if (o.hl) {
          ctx.globalAlpha = 0.38;
          ctx.strokeStyle = o.color ? INK[o.color] : HL;
          ctx.lineCap = "butt";
        }
        smooth(ctx, o.points, n);
        ctx.lineCap = "round";
        break;
      }
      case "highlight":
      case "underline": {
        const tg = byId.get(o.target);
        if (!tg) break;
        if (o.op === "highlight") {
          ctx.globalAlpha = 0.35;
          ctx.fillStyle = o.color ? INK[o.color] : HL;
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
      default:
        if (EXTRA_OPS.has(o.op)) paintExtra(ctx, o, el, p);
    }
  }
  ctx.globalAlpha = 1;
  return busy;
}

export function Smartboard({
  ref,
  onTap,
  onInk,
  readOnly,
  compact,
  onTurnDone,
  onSave,
  name = "board",
}: {
  ref?: Ref<SmartboardHandle>;
  onTap?: (el: TappedElement) => void;
  onInk?: (op: BoardOp) => void;
  readOnly?: boolean;
  /** The student finished their turn on the board ("check my work"). */
  onTurnDone?: () => void;
  /** Save the board to the notebook (shows the button when given). */
  onSave?: () => void;
  /** File name stem for exports. */
  name?: string;
  /** Fewer tools (the quick doubt panel's mini board). */
  compact?: boolean;
}) {
  const t = useT();
  const outer = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const pages = useRef<Page[]>([newPage()]);
  const [pageIdx, setPageIdx] = useState(0);
  const pageRef = useRef(0);
  const [, setVersion] = useState(0);
  const [boxW, setBoxW] = useState(0);
  const [view, setView] = useState({ z: 1, x: 0, y: 0 });
  const viewRef = useRef(view);
  viewRef.current = view;
  const [tool, setTool] = useState<Tool>("ask");
  const toolRef = useRef(tool);
  toolRef.current = tool;
  const [color, setColor] = useState<BoardColor>("blue");
  const colorRef = useRef(color);
  colorRef.current = color;
  const [full, setFull] = useState(false);
  const [explainer, setExplainer] = useState<string | null>(null);
  const [turn, setTurnState] = useState<string | null>(null);
  const [laser, setLaser] = useState<{ x: number; y: number; ms: number; on: boolean }>({ x: 500, y: 300, ms: 0, on: false });
  const laserTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [typing, setTyping] = useState<{ at: Pt; text: string } | null>(null);
  const rec = useRef<BoardRecord>({ v: 1, startedAt: new Date().toISOString(), ops: [] });
  const t0 = useRef(typeof performance !== "undefined" ? performance.now() : 0);
  const raf = useRef(0);
  const drawing = useRef<Pt[] | null>(null);
  const shape = useRef<{ from: Pt; to: Pt } | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ d: number; mx: number; my: number; view: typeof view } | null>(null);
  const pan = useRef<{ x: number; y: number; view: typeof view } | null>(null);
  const tapStart = useRef<{ x: number; y: number } | null>(null);
  const erased = useRef<El[]>([]);
  const marks = useRef(0);
  const replayToken = useRef(0);

  const bump = () => setVersion((v) => v + 1);
  const cur = () => pages.current[pageRef.current];

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
    const busy = paint(ctx, pages.current[pageRef.current], performance.now());
    // The stroke or shape being drawn right now.
    const live = drawing.current;
    const hl = toolRef.current === "hl";
    if (live && live.length > 1) {
      ctx.globalAlpha = hl ? 0.38 : 1;
      ctx.strokeStyle = hl ? (colorRef.current === "blue" ? HL : INK[colorRef.current]) : INK[colorRef.current];
      ctx.lineWidth = hl ? 18 : 3;
      ctx.lineCap = hl ? "butt" : "round";
      smooth(ctx, live);
      ctx.globalAlpha = 1;
      ctx.lineCap = "round";
    }
    const sh = shape.current;
    if (sh) {
      const op = shapeOp(toolRef.current, sh.from, sh.to, colorRef.current, "preview");
      if (op) paint(ctx, { ...newPage(), els: [{ id: "preview", op, x: 0, y: 0, w: 0, h: 0, born: 0, dur: 0 }] }, performance.now());
    }
    return busy;
  }, []);

  const schedule = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const loop = () => {
      if (draw()) raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
  }, [draw]);

  const goPage = useCallback(
    (i: number) => {
      pageRef.current = i;
      setPageIdx(i);
      schedule();
    },
    [schedule],
  );

  // Size the canvas backing store to its box × devicePixelRatio × zoom (capped for phones).
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      setBoxW(w);
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const k = Math.min(dpr * viewRef.current.z, 4096 / Math.max(1, w));
      if (canvas.current) {
        canvas.current.width = Math.round(w * k);
        canvas.current.height = Math.round(w * (BOARD_H / BOARD_W) * k);
      }
      schedule();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [schedule, view.z, full]);

  const clampView = useCallback((v: { z: number; x: number; y: number }) => {
    const w = wrap.current?.clientWidth ?? 0;
    const h = wrap.current?.clientHeight ?? 0;
    const z = Math.min(MAX_Z, Math.max(1, v.z));
    return { z, x: Math.min(0, Math.max(w - w * z, v.x)), y: Math.min(0, Math.max(h - h * z, v.y)) };
  }, []);

  /** Zoom around a point given in wrapper pixels. */
  const zoomAt = useCallback(
    (z: number, cx: number, cy: number, base = viewRef.current) => {
      const nz = Math.min(MAX_Z, Math.max(1, z));
      const k = nz / base.z;
      setView(clampView({ z: nz, x: cx - (cx - base.x) * k, y: cy - (cy - base.y) * k }));
    },
    [clampView],
  );

  // Ctrl/⌘ + wheel (and trackpad pinch) zooms; a plain wheel pans once zoomed in.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const v = viewRef.current;
      const r = el.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        zoomAt(v.z * Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
      } else if (v.z > 1) {
        e.preventDefault();
        setView(clampView({ ...v, x: v.x - e.deltaX, y: v.y - e.deltaY }));
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt, clampView]);

  /* ---------------- laser pointer ---------------- */

  const pointAt = useCallback((x: number, y: number, ms = 450, hold = 1800) => {
    setLaser({ x, y, ms, on: true });
    clearTimeout(laserTimer.current);
    laserTimer.current = setTimeout(() => setLaser((l) => ({ ...l, on: false })), ms + hold);
  }, []);

  useEffect(() => () => clearTimeout(laserTimer.current), []);

  /* ---------------- applying ops ---------------- */

  const apply = useCallback(
    (op: BoardOp, opts: { animate?: boolean; mine?: boolean } = {}): Promise<void> => {
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
      if (op.op === "laser") {
        const tg = op.target ? cur().els.find((e) => e.id === op.target) : null;
        if (tg) pointAt(tg.x + Math.min(tg.w, 60) / 2, tg.y + tg.h / 2);
        else if (op.at) pointAt(op.at[0], op.at[1]);
        return new Promise((r) => setTimeout(r, animate ? 450 : 0));
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
        dur = animate ? (op.op === "text" ? Math.min(2600, Math.max(450, op.text.length * 38)) : 900) : 0;
        el = { id: op.id, op: { ...op, x, y, size }, x, y, w: estW, h, born, dur };
        if (op.op === "math") el.html = katex.renderToString(op.tex, { throwOnError: false, strict: "ignore", output: "html" });
        // The pen tip travels along the line as it is written.
        if (dur && !opts.mine) {
          pointAt(x, y + h / 2, 0, 0);
          requestAnimationFrame(() => pointAt(x + estW, y + h / 2, dur, 900));
        }
      } else if (op.op === "table") {
        const cols = Math.max(...op.rows.map((r) => r.length));
        const w = Math.min(BOARD_W - 2 * MARGIN, cols * (op.colW ?? 150));
        const h = op.rows.length * TABLE_ROW_H;
        if (op.y === undefined && page.cursor + h > BOARD_H - 10 && page.els.length) {
          pages.current.push(newPage());
          goPage(pages.current.length - 1);
          page = cur();
        }
        const x = Math.min(op.x ?? MARGIN, BOARD_W - w - 10);
        const y = op.y ?? page.cursor;
        page.cursor = Math.max(page.cursor, y + h + GAP);
        dur = animate ? Math.min(2400, 260 * op.rows.length) : 0;
        el = { id: op.id, op, x, y, w, h, born, dur };
        if (animate) {
          pointAt(x + 20, y + 20, 0, 0);
          requestAnimationFrame(() => pointAt(x + 20, y + h - 20, dur, 700));
        }
      } else if (op.op === "ring") {
        const tg = op.target ? page.els.find((e) => e.id === op.target) : null;
        const b = tg ? { x: tg.x, y: tg.y, w: tg.w, h: tg.h } : op.x !== undefined && op.y !== undefined && op.w && op.h ? { x: op.x, y: op.y, w: op.w, h: op.h } : null;
        if (!b) return Promise.resolve();
        dur = animate ? 700 : 0;
        el = { id: op.id, op, ...b, born, dur };
        if (animate) pointAt(b.x + b.w / 2, b.y - 10, 400, dur + 900);
      } else if (op.op === "highlight" || op.op === "underline") {
        const tg = page.els.find((e) => e.id === op.target);
        if (!tg) return Promise.resolve();
        dur = animate ? 550 : 0;
        el = { id: `${op.op}-${op.target}-${page.els.length}`, op, x: tg.x, y: tg.y, w: tg.w, h: tg.h, born, dur };
        if (animate) pointAt(tg.x + tg.w / 2, tg.y + tg.h / 2);
      } else {
        const b = bbox(op, page);
        dur = animate ? (op.op === "tick" || op.op === "cross" || op.op === "dot" ? 380 : op.op === "polygon" || op.op === "curve" || op.op === "component" || op.op === "numberline" ? 900 : op.op === "plot" ? 1300 : op.op === "ink" ? (op.by === "student" ? 0 : 800) : op.op === "axes" ? 700 : 600) : 0;
        el = { id: (op as { id: string }).id, op, ...b, born, dur };
        if (op.op === "plot") el.fn = compileFn(op.fn);
        if (!opts.mine && !EXTRA_OPS.has(op.op) && op.op !== "ink" && op.op !== "point" && op.op !== "plot") page.cursor = Math.max(page.cursor, b.y + b.h + GAP + (op.op === "axes" ? 10 : 0));
        if (animate && !opts.mine && b.w + b.h > 0) pointAt(b.x + b.w / 2, b.y + b.h / 2, 400, dur + 600);
      }
      el.mine = opts.mine;
      // Replace an element with the same id (the tutor redrawing it).
      page.els = page.els.filter((e) => e.id !== el.id);
      page.els.push(el);
      if (opts.mine) {
        page.undo.push({ add: [el], del: [] });
        page.redo = [];
        marks.current++;
      }
      bump();
      schedule();
      return new Promise((r) => setTimeout(r, dur));
    },
    [schedule, goPage, pointAt],
  );

  const reset = useCallback(() => {
    replayToken.current++;
    pages.current = [newPage()];
    rec.current = { v: 1, startedAt: new Date().toISOString(), ops: [] };
    t0.current = performance.now();
    marks.current = 0;
    setExplainer(null);
    setTurnState(null);
    setView({ z: 1, x: 0, y: 0 });
    goPage(0);
    bump();
  }, [goPage]);

  const snapshot = useCallback((): BoardSnapshot | null => {
    try {
      const page = cur();
      const c = rasterize(page);
      if (!c) return null;
      const tutorEls = page.els.filter((e) => !e.mine && e.op.op !== "highlight" && e.op.op !== "underline");
      const desc = tutorEls.slice(-30).map((e) => `- [${e.id}] ${describe(e)} at (${Math.round(e.x)}, ${Math.round(e.y)})`).join("\n");
      const recent = page.els.filter((e) => e.mine).slice(-Math.min(25, Math.max(1, marks.current)));
      const markLines = marks.current
        ? recent.map((m) => {
            const near = tutorEls.filter((e) => e.x < m.x + m.w + 10 && e.x + e.w > m.x - 10 && e.y < m.y + m.h + 10 && e.y + e.h > m.y - 10).map(describe);
            const what = m.op.op === "ink" ? (m.op.hl ? "highlighted" : "drew/wrote by hand") : m.op.op === "text" ? `wrote "${m.op.text}"` : VERB[m.op.op] ?? "marked";
            return `- the student ${what} at (${Math.round(m.x)}, ${Math.round(m.y)})–(${Math.round(m.x + m.w)}, ${Math.round(m.y + m.h)})${near.length ? `, over/near: ${near.slice(0, 3).join("; ")}` : ""}`;
          })
        : [];
      marks.current = 0;
      return { mediaType: "image/png", data: c.toDataURL("image/png").split(",")[1] ?? "", desc, marks: markLines.join("\n") };
    } catch {
      return null;
    }
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      apply: (op, o) => apply(op, o),
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
      newMarks: () => marks.current,
      snapshot,
      setTurn: (prompt) => {
        setTurnState(prompt);
        if (prompt) {
          setTool((tl) => (tl === "ask" || tl === "hand" ? "pen" : tl));
          setColor("blue");
        }
      },
      pageImages: (type = "image/jpeg") => pages.current.flatMap((pg) => {
        const c = pg.els.length ? rasterize(pg) : null;
        return c ? [c.toDataURL(type, 0.85).split(",")[1] ?? ""] : [];
      }),
      outline: () => pages.current.map((pg) => pg.els.flatMap((e) => (e.op.op === "text" ? [e.op.text] : e.op.op === "math" ? [`$${e.op.tex}$`] : e.op.op === "table" ? e.op.rows.map((r) => `| ${r.join(" | ")} |`) : []))),
    }),
    [apply, reset, snapshot],
  );

  /* ---------------- student actions ---------------- */

  const act = (a: Action) => {
    const page = cur();
    const gone = new Set(a.del);
    page.els = page.els.filter((e) => !gone.has(e)).concat(a.add);
    bump();
    schedule();
  };
  const undo = () => {
    const page = cur();
    const a = page.undo.pop();
    if (!a) return;
    act({ add: a.del, del: a.add });
    page.redo.push(a);
  };
  const redo = () => {
    const page = cur();
    const a = page.redo.pop();
    if (!a) return;
    act(a);
    page.undo.push(a);
  };
  const clearMine = () => {
    const page = cur();
    const mine = page.els.filter((e) => e.mine);
    if (!mine.length) return;
    act({ add: [], del: mine });
    page.undo.push({ add: [], del: mine });
    page.redo = [];
  };

  /* ---------------- input ---------------- */

  const toBoard = (x: number, y: number): Pt => {
    const r = canvas.current!.getBoundingClientRect();
    return [Math.round(((x - r.left) / r.width) * BOARD_W), Math.round(((y - r.top) / r.height) * BOARD_H)];
  };
  const hitTest = (p: Pt, els: El[]) =>
    els
      .slice()
      .reverse()
      .find((el) => {
        const o = el.op;
        if (o.op === "highlight" || o.op === "underline") return false;
        if (o.op === "line" || o.op === "arrow") return distToSeg(p, o.from, o.to) < 16;
        if (o.op === "ink") return o.points.some((q, i) => i > 0 && distToSeg(p, o.points[i - 1], q) < (o.hl ? 14 : 10));
        return p[0] >= el.x - 12 && p[0] <= el.x + el.w + 12 && p[1] >= el.y - 12 && p[1] <= el.y + el.h + 12;
      });
  const eraseAt = (p: Pt) => {
    const page = cur();
    const hit = hitTest(p, page.els.filter((e) => e.mine));
    if (!hit) return;
    page.els = page.els.filter((e) => e !== hit);
    erased.current.push(hit);
    bump();
    schedule();
  };

  const wrapXY = (e: React.PointerEvent) => {
    const r = wrap.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const down = (e: React.PointerEvent) => {
    if (readOnly || typing) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const tl = toolRef.current;
    if (pointers.current.size === 2 && tl !== "ask") {
      // Second finger: pinch-zoom / pan; drop the stroke the first finger started.
      drawing.current = null;
      shape.current = null;
      const [a, b] = [...pointers.current.values()];
      const r = wrap.current!.getBoundingClientRect();
      pinch.current = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2 - r.left, my: (a.y + b.y) / 2 - r.top, view: viewRef.current };
      schedule();
      return;
    }
    if (pointers.current.size > 1) return;
    tapStart.current = { x: e.clientX, y: e.clientY };
    if (tl === "ask") return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    const p = toBoard(e.clientX, e.clientY);
    if (tl === "hand" || e.button === 1) pan.current = { ...wrapXY(e), view: viewRef.current };
    else if (tl === "pen" || tl === "hl") drawing.current = [p];
    else if (tl === "eraser") {
      erased.current = [];
      eraseAt(p);
    } else if (SHAPES.includes(tl)) shape.current = { from: p, to: p };
    else if (tl === "text") {
      // Keep the browser from moving focus on mousedown, which would blur (and drop) the new text box at once.
      e.preventDefault();
      setTyping({ at: p, text: "" });
    }
  };

  const move = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch.current && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const r = wrap.current!.getBoundingClientRect();
      const pc = pinch.current;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2 - r.left;
      const my = (a.y + b.y) / 2 - r.top;
      const z = Math.min(MAX_Z, Math.max(1, pc.view.z * (d / (pc.d || 1))));
      const k = z / pc.view.z;
      setView(clampView({ z, x: mx - (pc.mx - pc.view.x) * k, y: my - (pc.my - pc.view.y) * k }));
      return;
    }
    if (pan.current) {
      const { x, y } = wrapXY(e);
      const pv = pan.current;
      setView(clampView({ z: pv.view.z, x: pv.view.x + x - pv.x, y: pv.view.y + y - pv.y }));
      return;
    }
    const tl = toolRef.current;
    if (drawing.current) {
      const evs = (e.nativeEvent as PointerEvent).getCoalescedEvents?.() ?? [];
      for (const ev of evs.length ? evs : [e.nativeEvent]) {
        const p = toBoard(ev.clientX, ev.clientY);
        const prev = drawing.current[drawing.current.length - 1];
        if (Math.hypot(p[0] - prev[0], p[1] - prev[1]) >= 1.5) drawing.current.push(p);
      }
      schedule();
    } else if (shape.current) {
      shape.current.to = toBoard(e.clientX, e.clientY);
      schedule();
    } else if (tl === "eraser" && e.buttons) eraseAt(toBoard(e.clientX, e.clientY));
  };

  const up = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.delete(e.pointerId);
    if (pinch.current) {
      if (pointers.current.size === 0) pinch.current = null;
      return;
    }
    if (pan.current) {
      pan.current = null;
      return;
    }
    const tl = toolRef.current;
    const ts = tapStart.current;
    tapStart.current = null;
    if (tl === "ask") {
      if ((e.target as Element).closest?.("button")) return; // text/math buttons report their own taps
      if (ts && Math.hypot(e.clientX - ts.x, e.clientY - ts.y) < 10) {
        const hit = hitTest(toBoard(e.clientX, e.clientY), cur().els);
        if (hit && onTap) onTap({ id: hit.id, kind: hit.op.op, label: describe(hit) });
      }
      return;
    }
    if (tl === "eraser") {
      if (erased.current.length) {
        cur().undo.push({ add: [], del: erased.current });
        cur().redo = [];
        marks.current++;
      }
      erased.current = [];
      return;
    }
    const pts = drawing.current;
    drawing.current = null;
    if (pts) {
      if (pts.length === 1) pts.push([pts[0][0] + 1, pts[0][1] + 1]);
      const hl = tl === "hl";
      const op: BoardOp = { op: "ink", id: studentId(), points: pts, color: hl && color === "blue" ? undefined : color, width: hl ? 18 : 3, by: "student", hl: hl || undefined };
      void apply(op, { animate: false, mine: true });
      onInk?.(op);
      return;
    }
    const sh = shape.current;
    shape.current = null;
    if (sh) {
      const op = shapeOp(tl, sh.from, sh.to, color, studentId());
      if (op) {
        void apply(op, { animate: false, mine: true });
        onInk?.(op);
      } else schedule();
    }
  };

  const commitText = () => {
    const tx = typing;
    setTyping(null);
    if (!tx?.text.trim()) return;
    const op: BoardOp = { op: "text", id: studentId(), text: tx.text.trim().slice(0, 200), x: Math.min(tx.at[0], BOARD_W - 120), y: Math.min(tx.at[1], BOARD_H - 40), size: 24, color };
    void apply(op, { animate: false, mine: true });
    onInk?.(op);
  };

  /* ---------------- export ---------------- */

  const exportPng = () => {
    const c = rasterize(cur());
    if (c) download(c.toDataURL("image/png"), `${fileSafe(name)}-p${pageRef.current + 1}.png`);
  };
  const exportPdf = () => {
    const imgs = pages.current.flatMap((pg) => {
      const c = pg.els.length ? rasterize(pg, 2) : null;
      return c ? [{ jpegB64: c.toDataURL("image/jpeg", 0.88).split(",")[1] ?? "", w: c.width, h: c.height }] : [];
    });
    if (imgs.length) download(jpegPdf(imgs), `${fileSafe(name)}.pdf`);
  };

  /* ---------------- fullscreen ---------------- */

  const toggleFull = () => {
    const next = !full;
    setFull(next);
    setView({ z: 1, x: 0, y: 0 });
    try {
      if (next && outer.current?.requestFullscreen && !document.fullscreenElement) void outer.current.requestFullscreen().catch(() => {});
      else if (!next && document.fullscreenElement) void document.exitFullscreen().catch(() => {});
    } catch {
      /* CSS full-window mode still works (iPhone has no element fullscreen) */
    }
  };
  useEffect(() => {
    const onFs = () => !document.fullscreenElement && setFull(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFull(false);
    document.addEventListener("fullscreenchange", onFs);
    if (full) document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("keydown", onKey);
    };
  }, [full]);

  const page = pages.current[pageIdx] ?? cur();
  const textEls = page.els.filter((e) => e.op.op === "text" || e.op.op === "math");
  const total = pages.current.length;
  const scale = boxW / BOARD_W;
  const inkTool = tool === "pen" || tool === "hl" || tool === "text" || SHAPES.includes(tool);

  const TOOLS: { id: Tool; icon: typeof PenLine; label: string; full?: boolean }[] = [
    { id: "ask", icon: MousePointer2, label: t("board.tap", "Tap to ask") },
    { id: "pen", icon: PenLine, label: t("board.pen", "Pen") },
    { id: "hl", icon: Highlighter, label: t("board.hl", "Highlighter") },
    { id: "eraser", icon: Eraser, label: t("board.eraser", "Eraser") },
    { id: "circle", icon: Circle, label: t("board.circle", "Circle") },
    { id: "rect", icon: Square, label: t("board.rect", "Box"), full: true },
    { id: "arrow", icon: ArrowUpRight, label: t("board.arrow", "Arrow"), full: true },
    { id: "line", icon: Minus, label: t("board.line", "Line"), full: true },
    { id: "text", icon: Type, label: t("board.text", "Text"), full: true },
    { id: "hand", icon: Hand, label: t("board.hand", "Move / zoom"), full: true },
  ];
  const iconBtn = "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition hover:bg-surface-2 disabled:opacity-35";

  return (
    <div ref={outer} className={clsx("space-y-2", full && "fixed inset-0 z-[80] flex flex-col justify-center gap-2 space-y-0 overflow-hidden bg-bg p-2 sm:p-4")}>
      <style>{`@keyframes qa-write{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}.qa-board-el{animation:qa-write var(--d) cubic-bezier(.45,.05,.55,.95) both}.qa-board-el .katex{font-size:1em}@keyframes qa-laser{0%,100%{box-shadow:0 0 0 4px rgba(239,68,68,.35),0 0 18px 6px rgba(239,68,68,.45)}50%{box-shadow:0 0 0 8px rgba(239,68,68,.15),0 0 26px 10px rgba(239,68,68,.35)}}`}</style>
      <div
        ref={wrap}
        className={clsx("relative w-full overflow-hidden rounded-2xl border-2 border-line shadow-sm", full && "mx-auto")}
        style={{
          aspectRatio: `${BOARD_W} / ${BOARD_H}`,
          background: "#fdfcf7",
          touchAction: tool === "ask" && view.z === 1 ? "manipulation" : "none",
          cursor: tool === "hand" ? "grab" : tool === "ask" ? "default" : tool === "text" ? "text" : "crosshair",
          ...(full ? { width: `min(100%, calc((100dvh - ${readOnly ? 40 : 120}px) * ${BOARD_W / BOARD_H}))` } : null),
        }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onPointerLeave={(e) => e.pointerType === "mouse" && !e.buttons && pointers.current.delete(e.pointerId)}
      >
        <div className="absolute inset-0 origin-top-left" style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.z})` }}>
          <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-label={t("board.aria", "Smartboard")} role="img" />
          <div className="pointer-events-none absolute left-0 top-0 origin-top-left" style={{ width: BOARD_W, height: BOARD_H, transform: `scale(${scale})` }}>
            {textEls.map((el) => {
              const o = el.op as Extract<BoardOp, { op: "text" | "math" }>;
              return (
                <button
                  key={`${pageIdx}-${el.id}-${el.born}`}
                  type="button"
                  tabIndex={tool === "ask" && !readOnly ? 0 : -1}
                  ref={(node) => {
                    if (node && (node.offsetWidth !== Math.round(el.w) || node.offsetHeight !== Math.round(el.h))) {
                      el.w = node.offsetWidth;
                      if (node.offsetHeight > el.h && o.y === undefined) page.cursor = Math.max(page.cursor, el.y + node.offsetHeight + GAP);
                      el.h = node.offsetHeight;
                    }
                  }}
                  onClick={() => onTap?.({ id: el.id, kind: o.op, label: describe(el) })}
                  className={clsx("qa-board-el absolute max-w-[920px] whitespace-pre-wrap text-left leading-snug", tool === "ask" && !readOnly ? "pointer-events-auto cursor-help rounded-md hover:bg-yellow-200/40" : "pointer-events-none")}
                  style={{ left: el.x, top: el.y, fontSize: o.size, color: INK[o.color ?? "ink"], fontFamily: o.op === "text" ? HAND : undefined, ["--d" as string]: `${el.dur}ms`, maxWidth: BOARD_W - el.x - MARGIN / 2 }}
                  {...(el.html ? { dangerouslySetInnerHTML: { __html: el.html } } : { children: (o as { text: string }).text })}
                />
              );
            })}
            <span
              aria-hidden
              className="absolute -ml-[7px] -mt-[7px] h-[14px] w-[14px] rounded-full bg-red-500"
              style={{ transform: `translate(${laser.x}px, ${laser.y}px)`, transition: `transform ${laser.ms}ms cubic-bezier(.4,0,.2,1), opacity 300ms`, opacity: laser.on ? 1 : 0, animation: "qa-laser 1.1s ease-in-out infinite" }}
            />
            {typing && (
              <input
                autoFocus
                value={typing.text}
                onChange={(e) => setTyping({ ...typing, text: e.target.value })}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  if (e.key === "Enter") commitText();
                  if (e.key === "Escape") setTyping(null);
                }}
                onBlur={commitText}
                onPointerDown={(e) => e.stopPropagation()}
                maxLength={200}
                placeholder={t("board.typeHere", "Type…")}
                className="pointer-events-auto absolute rounded-md border-2 border-accent bg-white/90 px-1 outline-none"
                style={{ left: Math.min(typing.at[0], BOARD_W - 320), top: Math.min(typing.at[1], BOARD_H - 44), width: 300, fontSize: 24, fontFamily: HAND, color: INK[color] }}
              />
            )}
          </div>
        </div>
        {turn && !readOnly && (
          <div className="pointer-events-none absolute inset-x-2 bottom-2 flex justify-center" data-testid="board-turn">
            <div className="pointer-events-auto flex max-w-full items-center gap-2 rounded-2xl border-2 border-emerald-500 bg-white/95 px-3 py-1.5 shadow-md dark:bg-zinc-900/95" onPointerDown={(e) => e.stopPropagation()}>
              <PenLine className="h-4 w-4 shrink-0 text-emerald-600" />
              <span className="min-w-0 truncate text-sm font-extrabold text-emerald-800 dark:text-emerald-200">
                {t("board.yourTurn", "Your turn")}: {turn.replace(/^your turn[:,!.\s-]*/i, "")}
              </span>
              {onTurnDone && (
                <button type="button" onClick={onTurnDone} className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-emerald-600 px-2.5 py-1 text-xs font-extrabold text-white">
                  <CheckCheck className="h-3.5 w-3.5" /> {t("board.checkMine", "Check my work")}
                </button>
              )}
            </div>
          </div>
        )}
        {view.z > 1 && (
          <button type="button" onClick={() => setView({ z: 1, x: 0, y: 0 })} onPointerDown={(e) => e.stopPropagation()} className="absolute bottom-2 right-2 rounded-full bg-ink/75 px-2.5 py-1 text-xs font-bold text-white">
            {Math.round(view.z * 100)}% · {t("board.fit", "Fit")}
          </button>
        )}
      </div>
      {!readOnly && (
        <div className={clsx("rounded-2xl border border-line bg-surface", full && "mx-auto w-full max-w-[1400px]")}>
          <div className="flex items-center gap-0.5 overflow-x-auto overscroll-x-contain px-1 py-1 [scrollbar-width:none]" role="toolbar" aria-label={t("board.tools", "Board tools")}>
            {TOOLS.filter((x) => !compact || !x.full).map((x) => (
              <button key={x.id} type="button" onClick={() => setTool(x.id)} className={clsx(iconBtn, tool === x.id && "bg-accent-soft text-accent")} aria-pressed={tool === x.id} aria-label={x.label} title={x.label}>
                <x.icon className="h-[18px] w-[18px]" />
              </button>
            ))}
            <span className="mx-1 h-6 w-px shrink-0 bg-line" />
            <button type="button" onClick={undo} disabled={!page.undo.length} className={iconBtn} aria-label={t("board.undo", "Undo")} title={t("board.undo", "Undo")}>
              <Undo2 className="h-[18px] w-[18px]" />
            </button>
            <button type="button" onClick={redo} disabled={!page.redo.length} className={iconBtn} aria-label={t("board.redo", "Redo")} title={t("board.redo", "Redo")}>
              <Redo2 className="h-[18px] w-[18px]" />
            </button>
            <button type="button" onClick={clearMine} disabled={!page.els.some((e) => e.mine)} className={iconBtn} aria-label={t("board.clearInk", "Clear my marks")} title={t("board.clearInk", "Clear my marks")}>
              <Trash2 className="h-[18px] w-[18px]" />
            </button>
            {!compact && (
              <>
                <button type="button" onClick={() => zoomAt(viewRef.current.z * 1.4, boxW / 2, (boxW * BOARD_H) / BOARD_W / 2)} disabled={view.z >= MAX_Z} className={iconBtn} aria-label={t("board.zoomIn", "Zoom in")} title={t("board.zoomIn", "Zoom in")}>
                  <ZoomIn className="h-[18px] w-[18px]" />
                </button>
                <button type="button" onClick={() => zoomAt(viewRef.current.z / 1.4, boxW / 2, (boxW * BOARD_H) / BOARD_W / 2)} disabled={view.z <= 1} className={iconBtn} aria-label={t("board.zoomOut", "Zoom out")} title={t("board.zoomOut", "Zoom out")}>
                  <ZoomOut className="h-[18px] w-[18px]" />
                </button>
              </>
            )}
            {!compact && (
              <>
                <button type="button" onClick={exportPng} className={iconBtn} aria-label={t("board.png", "Download this page (PNG)")} title={t("board.png", "Download this page (PNG)")}>
                  <Download className="h-[18px] w-[18px]" />
                </button>
                <button type="button" onClick={exportPdf} className={iconBtn} aria-label={t("board.pdf", "Download all pages (PDF)")} title={t("board.pdf", "Download all pages (PDF)")}>
                  <FileDown className="h-[18px] w-[18px]" />
                </button>
                {onSave && (
                  <button type="button" onClick={onSave} className={iconBtn} aria-label={t("board.save", "Save board to notebook")} title={t("board.save", "Save board to notebook")}>
                    <BookmarkPlus className="h-[18px] w-[18px]" />
                  </button>
                )}
              </>
            )}
            <button type="button" onClick={toggleFull} className={iconBtn} aria-label={full ? t("board.exitFull", "Exit full screen") : t("board.full", "Full screen")} title={full ? t("board.exitFull", "Exit full screen") : t("board.full", "Full screen")}>
              {full ? <Minimize2 className="h-[18px] w-[18px]" /> : <Maximize2 className="h-[18px] w-[18px]" />}
            </button>
            <span className="ml-auto inline-flex shrink-0 items-center pl-1">
              <button type="button" disabled={pageIdx === 0} onClick={() => goPage(pageIdx - 1)} className={iconBtn} aria-label={t("board.prev", "Previous page")}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="whitespace-nowrap text-xs font-bold tabular-nums text-muted">
                {pageIdx + 1}/{total}
              </span>
              <button type="button" disabled={pageIdx >= total - 1} onClick={() => goPage(pageIdx + 1)} className={iconBtn} aria-label={t("board.next", "Next page")}>
                <ChevronRight className="h-4 w-4" />
              </button>
              {!compact && (
                <button
                  type="button"
                  onClick={() => {
                    pages.current.push(newPage());
                    goPage(pages.current.length - 1);
                    bump();
                  }}
                  className={iconBtn}
                  aria-label={t("board.newPage", "New page")}
                  title={t("board.newPage", "New page")}
                >
                  <Plus className="h-4 w-4" />
                </button>
              )}
            </span>
          </div>
          {inkTool && (
            <div className="flex items-center gap-2 border-t border-line px-2 py-1.5">
              {(["blue", "red", "green", "orange", "purple", "ink"] as BoardColor[]).map((c) => (
                <button key={c} type="button" onClick={() => setColor(c)} className={clsx("h-6 w-6 shrink-0 rounded-full border-2 transition", color === c ? "scale-110 border-accent ring-2 ring-accent/30" : "border-white")} style={{ background: tool === "hl" && c === "blue" ? HL : INK[c] }} aria-label={c} aria-pressed={color === c} />
              ))}
              <span className="truncate text-xs font-semibold text-muted">{tool === "text" ? t("board.textTip", "Tap the board to type") : t("board.inkTip", "Mark it, then ask “what is this?”")}</span>
            </div>
          )}
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

function shapeOp(tool: Tool, a: Pt, b: Pt, color: BoardColor, id: string): BoardOp | null {
  if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 6) return null;
  switch (tool) {
    case "line":
    case "arrow":
      return { op: tool, id, from: a, to: b, color };
    case "rect":
      return { op: "rect", id, x: Math.min(a[0], b[0]), y: Math.min(a[1], b[1]), w: Math.max(1, Math.abs(b[0] - a[0])), h: Math.max(1, Math.abs(b[1] - a[1])), color };
    case "circle":
      return { op: "circle", id, x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2, r: Math.max(4, Math.hypot(b[0] - a[0], b[1] - a[1]) / 2), color };
    default:
      return null;
  }
}

function texToPlain(tex: string) {
  return tex
    .replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)")
    .replace(/\\sqrt\{([^{}]*)\}/g, "√($1)")
    .replace(/\\(times|cdot)/g, "×")
    .replace(/\\(left|right)/g, "")
    .replace(/\\([a-zA-Z]+)/g, "$1")
    .replace(/[{}]/g, "");
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lh: number) {
  let line = "";
  for (const word of text.split(/\s+/)) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, y);
      y += lh;
      line = word;
    } else line = test;
  }
  if (line) ctx.fillText(line, x, y);
}

/** Flatten one page (strokes + text + formulas) to a canvas at `k` × board size. */
function rasterize(page: Page, k = 1): HTMLCanvasElement | null {
  const c = document.createElement("canvas");
  c.width = BOARD_W * k;
  c.height = BOARD_H * k;
  const ctx = c.getContext("2d");
  if (!ctx) return null;
  ctx.scale(k, k);
  ctx.fillStyle = "#fdfcf7";
  ctx.fillRect(0, 0, BOARD_W, BOARD_H);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  paint(ctx, page, Infinity);
  ctx.textBaseline = "top";
  for (const el of page.els) {
    const o = el.op;
    if (o.op !== "text" && o.op !== "math") continue;
    ctx.fillStyle = INK[o.color ?? "ink"];
    const size = o.size ?? 26;
    ctx.font = o.op === "text" ? `${size}px ${HAND}` : `italic ${size}px "Times New Roman", serif`;
    const text = o.op === "text" ? o.text : texToPlain(o.tex);
    wrapText(ctx, text, el.x, el.y, BOARD_W - el.x - MARGIN / 2, size * 1.3);
  }
  return c;
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
  ctx.textBaseline = "alphabetic";
  ctx.beginPath();
  ctx.moveTo(o.x, y0);
  ctx.lineTo(o.x + o.w * p, y0);
  ctx.moveTo(x0, o.y + o.h);
  ctx.lineTo(x0, o.y + o.h - o.h * p);
  ctx.stroke();
  if (p >= 0.999) {
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
      return extraBox(op) ?? { x: 0, y: 0, w: 0, h: 0 };
  }
}
