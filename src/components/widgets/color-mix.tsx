"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type TFn = ReturnType<typeof useT>;

type Paint = "red" | "yellow" | "blue" | "white";

/* Paint swatches are subject matter (real pigments), not theme colours. */
const PAINTS: { id: Paint; label: string; css: string }[] = [
  { id: "red", label: "Red", css: "#e53935" },
  { id: "yellow", label: "Yellow", css: "#fdd835" },
  { id: "blue", label: "Blue", css: "#1e63d6" },
  { id: "white", label: "White", css: "#ffffff" },
];

type RGB = [number, number, number];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mix3 = (a: RGB, b: RGB, t: number): RGB => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/** RYB → RGB by trilinear interpolation of the RYB colour cube (Gossett & Chen). */
function rybToRgb(r: number, y: number, b: number): RGB {
  const c000: RGB = [1, 1, 1];
  const c100: RGB = [0.9, 0.13, 0.13];
  const c010: RGB = [1, 0.9, 0.2];
  const c001: RGB = [0.12, 0.39, 0.84];
  const c110: RGB = [1, 0.5, 0];
  const c101: RGB = [0.5, 0.12, 0.6];
  const c011: RGB = [0.1, 0.62, 0.25];
  const c111: RGB = [0.33, 0.2, 0.12];
  const x00 = mix3(c000, c100, r);
  const x10 = mix3(c010, c110, r);
  const x01 = mix3(c001, c101, r);
  const x11 = mix3(c011, c111, r);
  const y0 = mix3(x00, x10, y);
  const y1 = mix3(x01, x11, y);
  return mix3(y0, y1, b);
}

function colourName(d: Record<Paint, number>, t: TFn): string {
  const { red: r, yellow: y, blue: b, white: w } = d;
  const total = r + y + b;
  if (total === 0) return w > 0 ? t("widget.colorMix.white", "White") : t("widget.colorMix.empty", "Empty — add some paint!");
  const used = [r, y, b].filter((x) => x > 0).length;
  const names = {
    brown: t("widget.colorMix.brown", "Brown"),
    redOrange: t("widget.colorMix.redOrange", "Red-orange"),
    yellowOrange: t("widget.colorMix.yellowOrange", "Yellow-orange"),
    orange: t("widget.colorMix.orange", "Orange"),
    yellowGreen: t("widget.colorMix.yellowGreen", "Yellow-green"),
    blueGreen: t("widget.colorMix.blueGreen", "Blue-green"),
    green: t("widget.colorMix.green", "Green"),
    redViolet: t("widget.colorMix.redViolet", "Red-violet"),
    blueViolet: t("widget.colorMix.blueViolet", "Blue-violet"),
    purple: t("widget.colorMix.purple", "Purple"),
    red: t("widget.colorMix.red", "Red"),
    yellow: t("widget.colorMix.yellow", "Yellow"),
    blue: t("widget.colorMix.blue", "Blue"),
  };
  let base: keyof typeof names;
  if (used === 3) base = "brown";
  else if (r && y) base = r > y * 1.8 ? "redOrange" : y > r * 1.8 ? "yellowOrange" : "orange";
  else if (y && b) base = y > b * 1.8 ? "yellowGreen" : b > y * 1.8 ? "blueGreen" : "green";
  else if (r && b) base = r > b * 1.8 ? "redViolet" : b > r * 1.8 ? "blueViolet" : "purple";
  else base = r ? "red" : y ? "yellow" : "blue";
  if (w > 0) {
    if (base === "red" && w >= r) return t("widget.colorMix.pink", "Pink");
    return t("widget.colorMix.light", "Light {colour}", { colour: names[base].toLowerCase() });
  }
  return names[base];
}

export default function ColorMix() {
  const t = useT();
  const paintLabel: Record<Paint, string> = {
    red: t("widget.colorMix.red", "Red"),
    yellow: t("widget.colorMix.yellow", "Yellow"),
    blue: t("widget.colorMix.blue", "Blue"),
    white: t("widget.colorMix.white", "White"),
  };
  const [drops, setDrops] = useState<Record<Paint, number>>({ red: 0, yellow: 0, blue: 0, white: 0 });
  const [splash, setSplash] = useState(0);

  const add = (p: Paint) => {
    setDrops((d) => ({ ...d, [p]: Math.min(9, d[p] + 1) }));
    setSplash((s) => s + 1);
  };
  const reset = () => setDrops({ red: 0, yellow: 0, blue: 0, white: 0 });

  const m = Math.max(drops.red, drops.yellow, drops.blue);
  const [R, G, B] = m === 0 ? ([1, 1, 1] as RGB) : rybToRgb(drops.red / m, drops.yellow / m, drops.blue / m);
  const all = drops.red + drops.yellow + drops.blue + drops.white;
  const tint = all ? drops.white / all : 0;
  const rgb = mix3([R, G, B], [1, 1, 1], tint * 0.85).map((v) => Math.round(v * 255));
  const isEmpty = all === 0;
  const css = isEmpty ? "transparent" : `rgb(${rgb.join(",")})`;
  const name = colourName(drops, t);

  return (
    <div className="font-bold">
      <WidgetTitle title={t("widget.colorMix.title", "Mix the colours")} hint={t("widget.colorMix.hint", "Tap a paint pot to drop paint into the bowl.")} right={<button type="button" onClick={reset} className="btn-ghost !px-3 !py-1.5"><RotateCcw size={14} /> {t("widget.colorMix.clean", "Clean bowl")}</button>} />

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
          {PAINTS.map((p) => (
            <motion.button
              key={p.id}
              type="button"
              whileTap={{ scale: 0.85, rotate: 12 }}
              whileHover={{ y: -4 }}
              onClick={() => add(p.id)}
              aria-label={t("widget.colorMix.addDrop", "Add a drop of {colour}", { colour: paintLabel[p.id] })}
              className="flex flex-col items-center gap-1"
            >
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl border-2 border-line" style={{ background: p.css }}>
                <span className="absolute -bottom-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-surface font-mono text-xs font-bold text-ink">{drops[p.id]}</span>
              </span>
              <span className="text-xs font-bold text-muted">{paintLabel[p.id]}</span>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 rounded-full border-4 border-line bg-surface-2" />
            <motion.div
              className="absolute inset-3 rounded-full"
              animate={{ backgroundColor: css, scale: isEmpty ? 0.2 : 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            />
            <AnimatePresence>
              {splash > 0 && (
                <motion.div
                  key={splash}
                  initial={{ scale: 0.4, opacity: 0.7 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute inset-3 rounded-full border-4"
                  style={{ borderColor: isEmpty ? "transparent" : css }}
                />
              )}
            </AnimatePresence>
          </div>
          <div aria-live="polite" className="text-center">
            <div className="text-2xl font-black text-ink">{name}</div>
            {!isEmpty && <div className="font-mono text-xs text-muted">rgb({rgb.join(", ")})</div>}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
        <span className="chip">🔴 + 🟡 = 🟠</span>
        <span className="chip">🟡 + 🔵 = 🟢</span>
        <span className="chip">🔴 + 🔵 = 🟣</span>
        <span className="chip">{t("widget.colorMix.allThree", "all three = 🟤")}</span>
      </div>
    </div>
  );
}
