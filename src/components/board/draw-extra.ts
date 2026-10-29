/**
 * Canvas painters for the richer board ops: marking (tick, cross, ring),
 * geometry (polygon, angle, ellipse, dot), free curves, tables, number lines
 * and circuit symbols. Every painter takes a progress `p` (0 → 1) so the
 * element is revealed stroke by stroke, like a teacher drawing it.
 */

import type { BoardColor, BoardOp, Pt } from "./ops";

export const INK: Record<BoardColor, string> = { ink: "#1f2937", blue: "#2563eb", red: "#dc2626", green: "#16a34a", orange: "#ea580c", purple: "#7c3aed" };
export const HAND = '"Segoe Print","Bradley Hand","Comic Sans MS","Comic Neue","Chalkboard SE",cursive';

export type Box = { x: number; y: number; w: number; h: number };
export const EXTRA_OPS = new Set(["tick", "cross", "ring", "ellipse", "polygon", "curve", "angle", "dot", "table", "numberline", "component"]);
export const TABLE_ROW_H = 40;

export function label(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, col: string, size = 22) {
  ctx.save();
  ctx.font = `${size}px ${HAND}`;
  ctx.fillStyle = col;
  ctx.globalAlpha = 1;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x, y);
  ctx.restore();
}

/** Draw the first `p` fraction of a polyline (by length). */
function partial(ctx: CanvasRenderingContext2D, pts: Pt[], p: number, closed = false) {
  const all = closed ? [...pts, pts[0]] : pts;
  const seg = all.slice(1).map((q, i) => Math.hypot(q[0] - all[i][0], q[1] - all[i][1]));
  let left = seg.reduce((a, b) => a + b, 0) * p;
  ctx.beginPath();
  ctx.moveTo(all[0][0], all[0][1]);
  for (let i = 1; i < all.length && left > 0; i++) {
    const d = seg[i - 1];
    const k = Math.min(1, left / (d || 1));
    ctx.lineTo(all[i - 1][0] + (all[i][0] - all[i - 1][0]) * k, all[i - 1][1] + (all[i][1] - all[i - 1][1]) * k);
    left -= d;
  }
  ctx.stroke();
}

/** Catmull-Rom → sampled smooth points. */
function spline(pts: Pt[], closed: boolean): Pt[] {
  if (pts.length < 3) return pts;
  const n = pts.length;
  const get = (i: number) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  const out: Pt[] = [];
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const [p0, p1, p2, p3] = [get(i - 1), get(i), get(i + 1), get(i + 2)];
    for (let k = 0; k < 12; k++) {
      const t = k / 12;
      const t2 = t * t;
      const t3 = t2 * t;
      const f = (a: number, b: number, c: number, d: number) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(closed ? pts[0] : pts[n - 1]);
  return out;
}

function niceStep(range: number) {
  const raw = range / 10;
  const pw = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / pw;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * pw;
}

/** Circuit symbol between two terminals: leads + the symbol in the middle. */
function component(ctx: CanvasRenderingContext2D, o: Extract<BoardOp, { op: "component" }>, p: number, col: string) {
  const [a, b] = [o.from, o.to];
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  ctx.save();
  ctx.translate(a[0], a[1]);
  ctx.rotate(ang);
  const body = o.kind === "wire" ? 0 : Math.min(60, len * 0.5);
  const s0 = (len - body) / 2;
  // Leads
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(s0 * Math.min(1, p * 2), 0);
  if (o.kind === "wire") ctx.lineTo(len * p, 0);
  ctx.moveTo(len - s0, 0);
  if (p > 0.5) ctx.lineTo(len - s0 + s0 * Math.min(1, (p - 0.5) * 2), 0);
  ctx.stroke();
  if (p > 0.3 && o.kind !== "wire") {
    ctx.translate(s0, 0);
    ctx.beginPath();
    switch (o.kind) {
      case "resistor": {
        const z = 6;
        ctx.moveTo(0, 0);
        for (let i = 1; i <= z; i++) ctx.lineTo((body / z) * (i - 0.5), i % 2 ? -10 : 10);
        ctx.lineTo(body, 0);
        break;
      }
      case "battery":
      case "cell": {
        const cells = o.kind === "battery" ? 2 : 1;
        const gap = body / (cells * 2 + 1);
        ctx.moveTo(0, 0);
        ctx.lineTo(gap, 0);
        for (let i = 0; i < cells; i++) {
          const x = gap * (1 + i * 2);
          ctx.moveTo(x, -18);
          ctx.lineTo(x, 18);
          ctx.moveTo(x + gap * 0.7, -9);
          ctx.lineTo(x + gap * 0.7, 9);
          if (i < cells - 1) {
            ctx.moveTo(x + gap * 0.7, 0);
            ctx.lineTo(x + gap * 2, 0);
          }
        }
        ctx.moveTo(gap * (cells * 2 - 1) + gap * 0.7, 0);
        ctx.lineTo(body, 0);
        ctx.stroke();
        ctx.beginPath();
        label(ctx, "+", gap - 14, -20, col, 18);
        break;
      }
      case "bulb":
        ctx.arc(body / 2, 0, body / 2, 0, Math.PI * 2);
        ctx.moveTo(body / 2 - body / 3.2, -body / 3.2);
        ctx.lineTo(body / 2 + body / 3.2, body / 3.2);
        ctx.moveTo(body / 2 + body / 3.2, -body / 3.2);
        ctx.lineTo(body / 2 - body / 3.2, body / 3.2);
        break;
      case "switch":
        ctx.arc(4, 0, 4, 0, Math.PI * 2);
        ctx.moveTo(6, -2);
        ctx.lineTo(body - 4, -20);
        ctx.moveTo(body, 0);
        ctx.arc(body - 4, 0, 4, 0, Math.PI * 2);
        break;
      case "ammeter":
      case "voltmeter":
        ctx.arc(body / 2, 0, body / 2, 0, Math.PI * 2);
        ctx.moveTo(0, 0);
        break;
      case "capacitor":
        ctx.moveTo(0, 0);
        ctx.lineTo(body / 2 - 6, 0);
        ctx.moveTo(body / 2 - 6, -18);
        ctx.lineTo(body / 2 - 6, 18);
        ctx.moveTo(body / 2 + 6, -18);
        ctx.lineTo(body / 2 + 6, 18);
        ctx.moveTo(body / 2 + 6, 0);
        ctx.lineTo(body, 0);
        break;
      case "ground":
        ctx.moveTo(0, 0);
        ctx.lineTo(body / 2, 0);
        for (let i = 0; i < 3; i++) {
          ctx.moveTo(body / 2 + i * 7, -16 + i * 5);
          ctx.lineTo(body / 2 + i * 7, 16 - i * 5);
        }
        break;
    }
    ctx.stroke();
    if (o.kind === "ammeter" || o.kind === "voltmeter") {
      ctx.save();
      ctx.translate(body / 2, 0);
      ctx.rotate(-ang);
      ctx.font = `bold 22px system-ui, sans-serif`;
      ctx.fillStyle = col;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(o.kind === "ammeter" ? "A" : "V", 0, 1);
      ctx.restore();
    }
  }
  ctx.restore();
  if (o.label && p >= 1) {
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    const nx = -Math.sin(ang);
    const ny = Math.cos(ang);
    label(ctx, o.label, mx + nx * 34 - o.label.length * 5, my + ny * 34 + 6, col, 20);
  }
}

/** Paint one of the richer ops. `box` is the element's resolved bounding box. */
export function paintExtra(ctx: CanvasRenderingContext2D, o: BoardOp, box: Box, p: number) {
  const col = INK[("color" in o && o.color) || (o.op === "tick" ? "green" : o.op === "cross" || o.op === "ring" ? "red" : "ink")];
  ctx.strokeStyle = col;
  ctx.fillStyle = col;
  switch (o.op) {
    case "tick": {
      const k = (o.size ?? 30) / 30;
      const [x, y] = o.at;
      ctx.lineWidth = 5;
      partial(ctx, [[x - 14 * k, y], [x - 4 * k, y + 12 * k], [x + 18 * k, y - 16 * k]], p);
      break;
    }
    case "cross": {
      const k = (o.size ?? 26) / 26;
      const [x, y] = o.at;
      ctx.lineWidth = 5;
      partial(ctx, [[x - 12 * k, y - 12 * k], [x + 12 * k, y + 12 * k]], Math.min(1, p * 2));
      if (p > 0.5) partial(ctx, [[x + 12 * k, y - 12 * k], [x - 12 * k, y + 12 * k]], (p - 0.5) * 2);
      break;
    }
    case "ring": {
      // A slightly wobbly hand-drawn loop that overshoots its start, like a teacher circling a mistake.
      const cx = box.x + box.w / 2;
      const cy = box.y + box.h / 2;
      const rx = box.w / 2 + 14;
      const ry = box.h / 2 + 12;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      const end = Math.PI * 2.15 * p;
      for (let a = 0; a <= end; a += 0.08) {
        const wob = 1 + 0.04 * Math.sin(a * 3);
        const x = cx + rx * wob * Math.cos(a - 2.4);
        const y = cy + ry * wob * Math.sin(a - 2.4);
        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      if (o.label && p >= 1) label(ctx, o.label, Math.min(box.x + box.w + 20, 820), box.y + 4, col, 22);
      break;
    }
    case "ellipse": {
      ctx.beginPath();
      ctx.ellipse(o.x, o.y, o.rx, o.ry, 0, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
      if (o.fill && p >= 1) {
        ctx.globalAlpha = 0.15;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.stroke();
      if (o.label && p >= 1) label(ctx, o.label, o.x + o.rx + 6, o.y - o.ry + 10, col);
      break;
    }
    case "polygon": {
      const closed = o.closed !== false;
      partial(ctx, o.points, p, closed);
      if (o.fill && p >= 1) {
        ctx.beginPath();
        o.points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.closePath();
        ctx.globalAlpha = 0.12;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      if (o.labels && p >= 1) {
        const cx = o.points.reduce((a, q) => a + q[0], 0) / o.points.length;
        const cy = o.points.reduce((a, q) => a + q[1], 0) / o.points.length;
        o.points.forEach(([x, y], i) => {
          const l = o.labels?.[i];
          if (!l) return;
          const d = Math.hypot(x - cx, y - cy) || 1;
          label(ctx, l, x + ((x - cx) / d) * 20 - 6, y + ((y - cy) / d) * 20 + 8, col, 22);
        });
      }
      break;
    }
    case "curve": {
      if (o.dashed) ctx.setLineDash([10, 8]);
      partial(ctx, spline(o.points, Boolean(o.closed)), p);
      ctx.setLineDash([]);
      if (o.label && p >= 1) {
        const top = o.points.reduce((a, q) => (q[1] < a[1] ? q : a), o.points[0]);
        label(ctx, o.label, top[0] + 8, top[1] - 10, col);
      }
      break;
    }
    case "angle": {
      const a1 = Math.atan2(o.from[1] - o.at[1], o.from[0] - o.at[0]);
      let a2 = Math.atan2(o.to[1] - o.at[1], o.to[0] - o.at[0]);
      let d = a2 - a1;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      a2 = a1 + d;
      const r = 32;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      if (o.right) {
        const u = [Math.cos(a1) * 18, Math.sin(a1) * 18];
        const v = [Math.cos(a2) * 18, Math.sin(a2) * 18];
        ctx.moveTo(o.at[0] + u[0], o.at[1] + u[1]);
        ctx.lineTo(o.at[0] + u[0] + v[0], o.at[1] + u[1] + v[1]);
        ctx.lineTo(o.at[0] + v[0], o.at[1] + v[1]);
      } else ctx.arc(o.at[0], o.at[1], r, a1, a1 + d * p, d < 0);
      ctx.stroke();
      if (o.label && p >= 1) {
        const mid = a1 + d / 2;
        label(ctx, o.label, o.at[0] + Math.cos(mid) * (r + 16) - 8, o.at[1] + Math.sin(mid) * (r + 16) + 8, col, 20);
      }
      break;
    }
    case "dot": {
      ctx.beginPath();
      ctx.arc(o.at[0], o.at[1], (o.r ?? 7) * p, 0, Math.PI * 2);
      ctx.fill();
      if (o.label && p >= 1) {
        if ((o.r ?? 7) >= 16) {
          ctx.save();
          ctx.fillStyle = "#fff";
          ctx.font = `bold ${Math.round((o.r ?? 7) * 0.9)}px system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(o.label, o.at[0], o.at[1] + 1);
          ctx.restore();
        } else label(ctx, o.label, o.at[0] + (o.r ?? 7) + 6, o.at[1] - 8, col, 20);
      }
      break;
    }
    case "table": {
      const cols = Math.max(...o.rows.map((r) => r.length));
      const cw = box.w / cols;
      ctx.lineWidth = 2;
      const shown = Math.ceil(o.rows.length * p);
      ctx.strokeRect(box.x, box.y, box.w, TABLE_ROW_H * shown);
      for (let c = 1; c < cols; c++) {
        ctx.beginPath();
        ctx.moveTo(box.x + c * cw, box.y);
        ctx.lineTo(box.x + c * cw, box.y + TABLE_ROW_H * shown);
        ctx.stroke();
      }
      for (let r = 0; r < shown; r++) {
        if (r) {
          ctx.beginPath();
          ctx.moveTo(box.x, box.y + r * TABLE_ROW_H);
          ctx.lineTo(box.x + box.w, box.y + r * TABLE_ROW_H);
          ctx.stroke();
        }
        if (r === 0 && o.header !== false) {
          ctx.save();
          ctx.globalAlpha = 0.1;
          ctx.fillRect(box.x, box.y, box.w, TABLE_ROW_H);
          ctx.restore();
        }
        o.rows[r].forEach((cell, c) => {
          ctx.save();
          ctx.font = `${r === 0 && o.header !== false ? "bold " : ""}20px ${HAND}`;
          ctx.fillStyle = col;
          ctx.textBaseline = "middle";
          let text = cell;
          while (text.length > 1 && ctx.measureText(text).width > cw - 12) text = text.slice(0, -2) + "…";
          ctx.fillText(text, box.x + c * cw + 8, box.y + r * TABLE_ROW_H + TABLE_ROW_H / 2 + 1);
          ctx.restore();
        });
      }
      break;
    }
    case "numberline": {
      const X = (v: number) => o.x + ((v - o.min) / (o.max - o.min)) * o.w;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(o.x - 10, o.y);
      ctx.lineTo(o.x - 10 + (o.w + 20) * p, o.y);
      ctx.stroke();
      if (p >= 1) {
        for (const dir of [-1, 1]) {
          const ex = dir < 0 ? o.x - 14 : o.x + o.w + 14;
          ctx.beginPath();
          ctx.moveTo(ex, o.y);
          ctx.lineTo(ex - dir * 12, o.y - 7);
          ctx.lineTo(ex - dir * 12, o.y + 7);
          ctx.closePath();
          ctx.fill();
        }
        const step = o.step ?? niceStep(o.max - o.min);
        ctx.font = "15px system-ui, sans-serif";
        ctx.textAlign = "center";
        for (let v = Math.ceil(o.min / step) * step, i = 0; v <= o.max + 1e-9 && i < 60; v += step, i++) {
          ctx.beginPath();
          ctx.moveTo(X(v), o.y - 8);
          ctx.lineTo(X(v), o.y + 8);
          ctx.stroke();
          ctx.fillText(String(+v.toFixed(3)), X(v), o.y + 26);
        }
        ctx.textAlign = "start";
        for (const m of o.marks ?? []) {
          const mc = INK[m.color ?? "red"];
          ctx.fillStyle = mc;
          ctx.beginPath();
          ctx.arc(X(m.at), o.y, 7, 0, Math.PI * 2);
          ctx.fill();
          if (m.label) label(ctx, m.label, X(m.at) - m.label.length * 5, o.y - 16, mc, 20);
          ctx.fillStyle = col;
        }
      }
      break;
    }
    case "component":
      component(ctx, o, p, col);
      break;
  }
}

/** Bounding box for the richer ops that don't need page context. */
export function extraBox(o: BoardOp): Box | null {
  const fromPts = (pts: Pt[], pad = 0): Box => {
    const xs = pts.map((q) => q[0]);
    const ys = pts.map((q) => q[1]);
    return { x: Math.min(...xs) - pad, y: Math.min(...ys) - pad, w: Math.max(...xs) - Math.min(...xs) + pad * 2, h: Math.max(...ys) - Math.min(...ys) + pad * 2 };
  };
  switch (o.op) {
    case "tick":
    case "cross": {
      const k = (o.size ?? 28) / 2 + 4;
      return { x: o.at[0] - k, y: o.at[1] - k, w: k * 2, h: k * 2 };
    }
    case "ellipse":
      return { x: o.x - o.rx, y: o.y - o.ry, w: o.rx * 2, h: o.ry * 2 };
    case "polygon":
    case "curve":
      return fromPts(o.points);
    case "angle":
      return { x: o.at[0] - 34, y: o.at[1] - 34, w: 68, h: 68 };
    case "dot": {
      const r = (o.r ?? 7) + 4;
      return { x: o.at[0] - r, y: o.at[1] - r, w: r * 2, h: r * 2 };
    }
    case "numberline":
      return { x: o.x - 14, y: o.y - 22, w: o.w + 28, h: 54 };
    case "component":
      return fromPts([o.from, o.to], 20);
    default:
      return null;
  }
}
