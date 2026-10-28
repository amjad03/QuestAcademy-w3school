/**
 * Smartboard operations: the small drawing language the AI tutor (and the
 * student's pen) speaks. Pure data + validation, safe on the server and client.
 *
 * The board is a virtual 1000 × 600 page (origin top-left). Elements without
 * x/y flow down the page like lines in a notebook.
 */

export const BOARD_W = 1000;
export const BOARD_H = 600;

export type BoardColor = "ink" | "blue" | "red" | "green" | "orange" | "purple";
export const BOARD_COLORS: BoardColor[] = ["ink", "blue", "red", "green", "orange", "purple"];

export type Pt = [number, number];

export type BoardOp =
  | { op: "text"; id: string; text: string; x?: number; y?: number; size?: number; color?: BoardColor }
  | { op: "math"; id: string; tex: string; x?: number; y?: number; size?: number; color?: BoardColor }
  | { op: "line" | "arrow"; id: string; from: Pt; to: Pt; color?: BoardColor; label?: string }
  | { op: "rect"; id: string; x: number; y: number; w: number; h: number; color?: BoardColor; label?: string }
  | { op: "circle"; id: string; x: number; y: number; r: number; color?: BoardColor; label?: string }
  | { op: "axes"; id: string; x: number; y: number; w: number; h: number; xmin: number; xmax: number; ymin: number; ymax: number; xlabel?: string; ylabel?: string }
  | { op: "plot"; id: string; axes: string; fn: string; color?: BoardColor; label?: string }
  | { op: "point"; id: string; axes: string; at: Pt; label?: string; color?: BoardColor }
  | { op: "highlight" | "underline"; target: string; color?: BoardColor }
  | { op: "ink"; id: string; points: Pt[]; color?: BoardColor; width?: number; by?: "student" | "tutor"; /** Translucent highlighter stroke. */ hl?: boolean }
  /** Move the tutor's laser pointer to an element (or a point) while talking about it. */
  | { op: "laser"; target?: string; at?: Pt }
  | { op: "explainer"; explainer: string }
  | { op: "page" }
  | { op: "clear" };

/** A board as replayable JSON: every op with the time (ms from start) it appeared. */
export interface BoardRecord {
  v: 1;
  startedAt: string;
  ops: { at: number; op: BoardOp }[];
}

const num = (v: unknown, lo = -1e4, hi = 1e4) => (typeof v === "number" && Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : undefined);
const s = (v: unknown, max = 400) => (typeof v === "string" ? v.slice(0, max) : undefined);
const color = (v: unknown) => (BOARD_COLORS.includes(v as BoardColor) ? (v as BoardColor) : undefined);
const pt = (v: unknown): Pt | undefined => {
  if (!Array.isArray(v) || v.length < 2) return undefined;
  const x = num(v[0]);
  const y = num(v[1]);
  return x === undefined || y === undefined ? undefined : [x, y];
};
let auto = 0;
const id = (v: unknown) => s(v, 40) || `e${++auto}`;

/** Validate one untrusted op (from the model or storage). Returns null when unusable. */
export function cleanOp(raw: unknown): BoardOp | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  switch (r.op) {
    case "text": {
      const text = s(r.text, 600);
      return text ? { op: "text", id: id(r.id), text, x: num(r.x, 0, BOARD_W), y: num(r.y, 0, BOARD_H), size: num(r.size, 14, 64), color: color(r.color) } : null;
    }
    case "math": {
      const tex = s(r.tex, 600);
      return tex ? { op: "math", id: id(r.id), tex, x: num(r.x, 0, BOARD_W), y: num(r.y, 0, BOARD_H), size: num(r.size, 14, 64), color: color(r.color) } : null;
    }
    case "line":
    case "arrow": {
      const from = pt(r.from);
      const to = pt(r.to);
      return from && to ? { op: r.op, id: id(r.id), from, to, color: color(r.color), label: s(r.label, 80) } : null;
    }
    case "rect": {
      const [x, y, w, h] = [num(r.x), num(r.y), num(r.w, 1, BOARD_W), num(r.h, 1, BOARD_H)];
      return x !== undefined && y !== undefined && w && h ? { op: "rect", id: id(r.id), x, y, w, h, color: color(r.color), label: s(r.label, 80) } : null;
    }
    case "circle": {
      const [x, y, rad] = [num(r.x), num(r.y), num(r.r, 1, 500)];
      return x !== undefined && y !== undefined && rad ? { op: "circle", id: id(r.id), x, y, r: rad, color: color(r.color), label: s(r.label, 80) } : null;
    }
    case "axes": {
      const v = [r.x, r.y, r.w, r.h, r.xmin, r.xmax, r.ymin, r.ymax].map((n) => num(n));
      if (v.some((n) => n === undefined)) return null;
      const [x, y, w, h, xmin, xmax, ymin, ymax] = v as number[];
      if (xmax <= xmin || ymax <= ymin || w < 20 || h < 20) return null;
      return { op: "axes", id: id(r.id), x, y, w, h, xmin, xmax, ymin, ymax, xlabel: s(r.xlabel, 30), ylabel: s(r.ylabel, 30) };
    }
    case "plot": {
      const fn = s(r.fn, 200);
      const axes = s(r.axes, 40);
      return fn && axes ? { op: "plot", id: id(r.id), axes, fn, color: color(r.color), label: s(r.label, 60) } : null;
    }
    case "point": {
      const at = pt(r.at);
      const axes = s(r.axes, 40);
      return at && axes ? { op: "point", id: id(r.id), axes, at, label: s(r.label, 60), color: color(r.color) } : null;
    }
    case "highlight":
    case "underline": {
      const target = s(r.target, 40);
      return target ? { op: r.op, target, color: color(r.color) } : null;
    }
    case "ink": {
      if (!Array.isArray(r.points)) return null;
      const points = r.points.slice(0, 2000).map(pt).filter((p): p is Pt => Boolean(p));
      return points.length > 1 ? { op: "ink", id: id(r.id), points, color: color(r.color), width: num(r.width, 1, 20), by: r.by === "student" ? "student" : "tutor", hl: r.hl === true || undefined } : null;
    }
    case "explainer": {
      const ex = s(r.explainer ?? r.id, 60);
      return ex ? { op: "explainer", explainer: ex } : null;
    }
    case "laser": {
      const target = s(r.target, 40);
      const at = pt(r.at);
      return target || at ? { op: "laser", target, at } : null;
    }
    case "page":
      return { op: "page" };
    case "clear":
      return { op: "clear" };
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* Safe maths for plot ops: y = f(x) without eval.                      */
/* ------------------------------------------------------------------ */

const FNS: Record<string, (v: number) => number> = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sqrt: Math.sqrt, abs: Math.abs, ln: Math.log, log: Math.log10, exp: Math.exp, floor: Math.floor, ceil: Math.ceil,
};

type Node = (x: number) => number;

/** Compile "2x^2 - 3sin(x) + 1" (or "y = …") to a function. Returns null on a syntax error. */
export function compileFn(src: string): Node | null {
  const text = src.replace(/^\s*(y|f\(x\))\s*=/i, "").replace(/\*\*/g, "^").replace(/π/g, "pi").toLowerCase();
  const found = text.match(/\d+(\.\d+)?|\.\d+|[a-z]+|[-+*/^()]/g);
  if (!found || found.join("") !== text.replace(/\s+/g, "")) return null;
  const tokens: string[] = found;
  let i = 0;
  const peek = () => tokens[i];
  const startsAtom = (t?: string) => !!t && (t === "(" || /^[\d.a-z]/.test(t));
  function expr(): Node {
    let left = term();
    while (peek() === "+" || peek() === "-") {
      const op = tokens[i++];
      const l = left;
      const r = term();
      left = op === "+" ? (x) => l(x) + r(x) : (x) => l(x) - r(x);
    }
    return left;
  }
  function term(): Node {
    let left = unary();
    for (;;) {
      const t = peek();
      if (t === "*" || t === "/") {
        i++;
        const l = left;
        const r = unary();
        left = t === "*" ? (x) => l(x) * r(x) : (x) => l(x) / r(x);
      } else if (startsAtom(t)) {
        // Implicit multiplication: 2x, 3(x+1), x sin(x)
        const l = left;
        const r = power();
        left = (x) => l(x) * r(x);
      } else return left;
    }
  }
  function unary(): Node {
    if (peek() === "-") {
      i++;
      const v = unary();
      return (x) => -v(x);
    }
    if (peek() === "+") {
      i++;
      return unary();
    }
    return power();
  }
  function power(): Node {
    const base = atom();
    if (peek() === "^") {
      i++;
      const e = unary();
      return (x) => Math.pow(base(x), e(x));
    }
    return base;
  }
  function atom(): Node {
    const t = tokens[i++];
    if (t === undefined) throw new Error("end");
    if (t === "(") {
      const v = expr();
      if (tokens[i++] !== ")") throw new Error(")");
      return v;
    }
    if (/^[\d.]/.test(t)) {
      const n = Number(t);
      return () => n;
    }
    if (t === "x") return (x) => x;
    if (t === "pi") return () => Math.PI;
    if (t === "e") return () => Math.E;
    const f = FNS[t];
    if (f) {
      const arg = power();
      return (x) => f(arg(x));
    }
    throw new Error(t);
  }
  try {
    const fn = expr();
    return i === tokens.length ? fn : null;
  } catch {
    return null;
  }
}
