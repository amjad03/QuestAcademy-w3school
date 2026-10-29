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

export type CircuitKind = "wire" | "resistor" | "battery" | "cell" | "bulb" | "switch" | "ammeter" | "voltmeter" | "capacitor" | "ground";
export const CIRCUIT_KINDS: CircuitKind[] = ["wire", "resistor", "battery", "cell", "bulb", "switch", "ammeter", "voltmeter", "capacitor", "ground"];

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
  /** Marking: a tick / cross at a point, or a hand-drawn ring around an element or a region (circle the mistake). */
  | { op: "tick" | "cross"; id: string; at: Pt; size?: number; color?: BoardColor }
  | { op: "ring"; id: string; target?: string; x?: number; y?: number; w?: number; h?: number; color?: BoardColor; label?: string }
  | { op: "ellipse"; id: string; x: number; y: number; rx: number; ry: number; color?: BoardColor; label?: string; fill?: boolean }
  /** Geometry: a polygon (triangle, quadrilateral…) with optional vertex labels. */
  | { op: "polygon"; id: string; points: Pt[]; labels?: string[]; color?: BoardColor; fill?: boolean; closed?: boolean }
  /** A smooth free curve through points (cell outlines, waves, organs, molecule shapes). */
  | { op: "curve"; id: string; points: Pt[]; color?: BoardColor; closed?: boolean; dashed?: boolean; label?: string }
  /** Angle arc at a vertex between rays to `from` and `to`. */
  | { op: "angle"; id: string; at: Pt; from: Pt; to: Pt; label?: string; color?: BoardColor; right?: boolean }
  /** A filled dot (atom, charge, point mass, vertex). */
  | { op: "dot"; id: string; at: Pt; r?: number; color?: BoardColor; label?: string }
  | { op: "table"; id: string; rows: string[][]; x?: number; y?: number; colW?: number; header?: boolean; color?: BoardColor }
  | { op: "numberline"; id: string; x: number; y: number; w: number; min: number; max: number; step?: number; marks?: { at: number; label?: string; color?: BoardColor }[]; color?: BoardColor }
  /** Circuit symbol drawn between two terminals. */
  | { op: "component"; id: string; kind: CircuitKind; from: Pt; to: Pt; label?: string; color?: BoardColor }
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
    case "tick":
    case "cross": {
      const at = pt(r.at);
      return at ? { op: r.op, id: id(r.id), at, size: num(r.size, 10, 80), color: color(r.color) } : null;
    }
    case "ring": {
      const target = s(r.target, 40);
      const [x, y, w, h] = [num(r.x), num(r.y), num(r.w, 4, BOARD_W), num(r.h, 4, BOARD_H)];
      return target || (x !== undefined && y !== undefined && w && h) ? { op: "ring", id: id(r.id), target, x, y, w, h, color: color(r.color), label: s(r.label, 80) } : null;
    }
    case "ellipse": {
      const [x, y, rx, ry] = [num(r.x), num(r.y), num(r.rx, 2, 500), num(r.ry, 2, 400)];
      return x !== undefined && y !== undefined && rx && ry ? { op: "ellipse", id: id(r.id), x, y, rx, ry, color: color(r.color), label: s(r.label, 80), fill: r.fill === true || undefined } : null;
    }
    case "polygon":
    case "curve": {
      if (!Array.isArray(r.points)) return null;
      const points = r.points.slice(0, 400).map(pt).filter((p): p is Pt => Boolean(p));
      if (points.length < 2) return null;
      if (r.op === "curve") return { op: "curve", id: id(r.id), points, color: color(r.color), closed: r.closed === true || undefined, dashed: r.dashed === true || undefined, label: s(r.label, 80) };
      const labels = Array.isArray(r.labels) ? r.labels.slice(0, points.length).map((l) => s(l, 12) ?? "") : undefined;
      return { op: "polygon", id: id(r.id), points, labels, color: color(r.color), fill: r.fill === true || undefined, closed: r.closed === false ? false : undefined };
    }
    case "angle": {
      const [at, from, to] = [pt(r.at), pt(r.from), pt(r.to)];
      return at && from && to ? { op: "angle", id: id(r.id), at, from, to, label: s(r.label, 20), color: color(r.color), right: r.right === true || undefined } : null;
    }
    case "dot": {
      const at = pt(r.at);
      return at ? { op: "dot", id: id(r.id), at, r: num(r.r, 2, 60), color: color(r.color), label: s(r.label, 40) } : null;
    }
    case "table": {
      if (!Array.isArray(r.rows)) return null;
      const rows = r.rows.slice(0, 12).map((row) => (Array.isArray(row) ? row.slice(0, 6).map((c) => (typeof c === "number" ? String(c) : s(c, 60) ?? "")) : [])).filter((row) => row.length);
      return rows.length ? { op: "table", id: id(r.id), rows, x: num(r.x, 0, BOARD_W), y: num(r.y, 0, BOARD_H), colW: num(r.colW, 40, 400), header: r.header === false ? false : true, color: color(r.color) } : null;
    }
    case "numberline": {
      const [x, y, w, min, max] = [num(r.x, 0, BOARD_W), num(r.y, 0, BOARD_H), num(r.w, 60, BOARD_W), num(r.min), num(r.max)];
      if (x === undefined || y === undefined || !w || min === undefined || max === undefined || max <= min) return null;
      const marks = Array.isArray(r.marks)
        ? r.marks.slice(0, 20).flatMap((m) => {
            const o = (m ?? {}) as Record<string, unknown>;
            const at = num(o.at);
            return at === undefined ? [] : [{ at, label: s(o.label, 20), color: color(o.color) }];
          })
        : undefined;
      return { op: "numberline", id: id(r.id), x, y, w, min, max, step: num(r.step, 1e-6, 1e4), marks, color: color(r.color) };
    }
    case "component": {
      const kind = CIRCUIT_KINDS.find((k) => k === r.kind);
      const [from, to] = [pt(r.from), pt(r.to)];
      return kind && from && to ? { op: "component", id: id(r.id), kind, from, to, label: s(r.label, 40), color: color(r.color) } : null;
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
