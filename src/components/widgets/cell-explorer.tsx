"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bag, readOneOf, Segmented, WidgetTitle } from "./_shared";
import { useT } from "@/i18n";

type Kind = "animal" | "plant";
type OrgId = "membrane" | "wall" | "cytoplasm" | "nucleus" | "mitochondria" | "chloroplast" | "vacuole" | "er" | "golgi" | "ribosome" | "lysosome" | "centriole";

const EMOJI: Record<OrgId, string> = {
  membrane: "🛡️",
  wall: "🧱",
  cytoplasm: "💧",
  nucleus: "🧠",
  mitochondria: "⚡",
  chloroplast: "🌿",
  vacuole: "🫧",
  er: "🛤️",
  golgi: "📦",
  ribosome: "🔩",
  lysosome: "♻️",
  centriole: "🧵",
};

/** Organelle names and descriptions in the learner's language. */
function useCellInfo(): Record<OrgId, { name: string; emoji: string; fn: string; fact: string }> {
  const t = useT();
  return {
    membrane: {
      name: t("widget.cell.membrane.name", "Cell membrane"),
      emoji: EMOJI.membrane,
      fn: t("widget.cell.membrane.fn", "A thin, flexible layer that controls what enters and leaves the cell."),
      fact: t("widget.cell.membrane.fact", "It's 'selectively permeable' — like a bouncer letting only some molecules through."),
    },
    wall: {
      name: t("widget.cell.wall.name", "Cell wall"),
      emoji: EMOJI.wall,
      fn: t("widget.cell.wall.fn", "A rigid layer made of cellulose outside the membrane. It gives the plant cell shape and support."),
      fact: t("widget.cell.wall.fact", "Only plants, fungi and bacteria have cell walls — animal cells don't."),
    },
    cytoplasm: {
      name: t("widget.cell.cytoplasm.name", "Cytoplasm"),
      emoji: EMOJI.cytoplasm,
      fn: t("widget.cell.cytoplasm.fn", "The jelly-like fluid that fills the cell. Most chemical reactions happen here."),
      fact: t("widget.cell.cytoplasm.fact", "It's about 70–80% water."),
    },
    nucleus: {
      name: t("widget.cell.nucleus.name", "Nucleus"),
      emoji: EMOJI.nucleus,
      fn: t("widget.cell.nucleus.fn", "The control centre. It holds DNA — the instructions for building and running the cell."),
      fact: t("widget.cell.nucleus.fact", "The dark spot inside is the nucleolus, which makes ribosomes."),
    },
    mitochondria: {
      name: t("widget.cell.mitochondria.name", "Mitochondria"),
      emoji: EMOJI.mitochondria,
      fn: t("widget.cell.mitochondria.fn", "The powerhouse: it releases energy from glucose by aerobic respiration, making ATP."),
      fact: t("widget.cell.mitochondria.fact", "Mitochondria have their own DNA, inherited from your mother."),
    },
    chloroplast: {
      name: t("widget.cell.chloroplast.name", "Chloroplast"),
      emoji: EMOJI.chloroplast,
      fn: t("widget.cell.chloroplast.fn", "Contains green chlorophyll that traps sunlight to make food (glucose) by photosynthesis."),
      fact: t("widget.cell.chloroplast.fact", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, powered by light."),
    },
    vacuole: {
      name: t("widget.cell.vacuole.name", "Vacuole"),
      emoji: EMOJI.vacuole,
      fn: t("widget.cell.vacuole.fn", "A storage sac for water, sugars and waste. In plants one large central vacuole keeps the cell firm (turgid)."),
      fact: t("widget.cell.vacuole.fact", "A plant's central vacuole can fill up to 90% of the cell!"),
    },
    er: {
      name: t("widget.cell.er.name", "Endoplasmic reticulum"),
      emoji: EMOJI.er,
      fn: t("widget.cell.er.fn", "A network of folded membranes that transports materials. Rough ER (with ribosomes) makes proteins; smooth ER makes lipids."),
      fact: t("widget.cell.er.fact", "Rough ER is studded with ribosomes, which makes it look bumpy."),
    },
    golgi: {
      name: t("widget.cell.golgi.name", "Golgi apparatus"),
      emoji: EMOJI.golgi,
      fn: t("widget.cell.golgi.fn", "The packaging and shipping centre: it modifies proteins and packs them into vesicles to send around or out of the cell."),
      fact: t("widget.cell.golgi.fact", "It looks like a stack of flattened pancakes."),
    },
    ribosome: {
      name: t("widget.cell.ribosome.name", "Ribosomes"),
      emoji: EMOJI.ribosome,
      fn: t("widget.cell.ribosome.fn", "Tiny factories that build proteins by reading instructions copied from DNA (mRNA)."),
      fact: t("widget.cell.ribosome.fact", "A single cell can have millions of ribosomes."),
    },
    lysosome: {
      name: t("widget.cell.lysosome.name", "Lysosome"),
      emoji: EMOJI.lysosome,
      fn: t("widget.cell.lysosome.fn", "Contains digestive enzymes that break down worn-out parts, food particles and invading germs."),
      fact: t("widget.cell.lysosome.fact", "Often called the cell's recycling centre."),
    },
    centriole: {
      name: t("widget.cell.centriole.name", "Centrioles"),
      emoji: EMOJI.centriole,
      fn: t("widget.cell.centriole.fn", "Help organise the spindle fibres that pull chromosomes apart when the cell divides."),
      fact: t("widget.cell.centriole.fact", "Found in animal cells; most plant cells don't have them."),
    },
  };
}

const PARTS: Record<Kind, OrgId[]> = {
  animal: ["membrane", "cytoplasm", "nucleus", "mitochondria", "er", "golgi", "ribosome", "lysosome", "vacuole", "centriole"],
  plant: ["wall", "membrane", "cytoplasm", "nucleus", "chloroplast", "vacuole", "mitochondria", "er", "golgi", "ribosome"],
};

function Mito({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse rx="22" ry="10" fill="rgb(var(--warn) / 0.35)" stroke="rgb(var(--warn))" strokeWidth="2" />
      <path d="M -16 0 q 4 -8 8 0 t 8 0 t 8 0 t 8 0" fill="none" stroke="rgb(var(--warn))" strokeWidth="1.5" />
    </g>
  );
}

function Chloro({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse rx="20" ry="11" fill="rgb(var(--good) / 0.45)" stroke="rgb(var(--good))" strokeWidth="2" />
      {[-9, 0, 9].map((dx) => (
        <rect key={dx} x={dx - 3} y="-6" width="6" height="12" rx="2" fill="rgb(var(--good))" />
      ))}
    </g>
  );
}

const Golgi = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`} fill="none" stroke="rgb(var(--accent-2))" strokeWidth="4" strokeLinecap="round">
    {[0, 9, 18, 27].map((dy, i) => (
      <path key={dy} d={`M ${-24 + i * 2} ${dy} q ${24 - i * 2} ${-10} ${48 - i * 4} 0`} />
    ))}
    <circle cx="30" cy="2" r="4" fill="rgb(var(--accent-2) / 0.5)" stroke="none" />
    <circle cx="34" cy="16" r="3" fill="rgb(var(--accent-2) / 0.5)" stroke="none" />
  </g>
);

const ER = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`} fill="none" stroke="rgb(var(--muted))" strokeWidth="3" strokeLinecap="round">
    <path d="M 0 0 q 10 -14 20 0 t 20 0 t 20 0" />
    <path d="M 4 12 q 10 -14 20 0 t 20 0 t 20 0" />
    <path d="M 8 24 q 10 -14 20 0 t 20 0" />
    {[6, 18, 30, 42, 54].map((dx) => (
      <circle key={dx} cx={dx} cy={-3} r="1.8" fill="rgb(var(--ink))" stroke="none" />
    ))}
  </g>
);

function Part({ id, sel, onSelect, children }: { id: OrgId; sel: OrgId; onSelect: (id: OrgId) => void; children: ReactNode }) {
  const INFO = useCellInfo();
  const active = sel === id;
  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-label={INFO[id].name}
      aria-pressed={active}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
      style={{ cursor: "pointer", outline: "none" }}
      animate={{ opacity: active ? 1 : 0.88 }}
      whileHover={{ opacity: 1 }}
      filter={active ? "url(#cellGlow)" : undefined}
    >
      {children}
    </motion.g>
  );
}

export default function CellExplorer(input: Record<string, unknown>) {
  const t = useT();
  const INFO = useCellInfo();
  const p = bag(input);
  const [kind, setKind] = useState<Kind>(readOneOf(p, "kind", ["animal", "plant"] as const, "animal"));
  const [sel, setSel] = useState<OrgId>("nucleus");

  const plant = kind === "plant";
  const info = INFO[sel];
  const ribos = plant
    ? [
        [110, 80], [300, 220], [140, 210], [290, 70], [200, 60], [120, 150], [320, 150], [230, 235],
      ]
    : [
        [130, 90], [280, 80], [300, 200], [150, 210], [200, 245], [100, 150], [320, 140], [250, 60], [180, 70],
      ];

  return (
    <div>
      <WidgetTitle
        title={plant ? t("widget.cell.titlePlant", "Plant cell explorer") : t("widget.cell.titleAnimal", "Animal cell explorer")}
        hint={t("widget.cell.hint", "Tap a part of the cell to learn what it does.")}
        right={
          <Segmented
            label={t("widget.cell.type", "Cell type")}
            value={kind}
            onChange={(k) => {
              setKind(k);
              if (!PARTS[k].includes(sel)) setSel("nucleus");
            }}
            options={[
              { value: "animal", label: "🐾 " + t("widget.cell.animal", "Animal") },
              { value: "plant", label: "🌱 " + t("widget.cell.plant", "Plant") },
            ]}
          />
        }
      />

      <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl bg-surface-2 p-2">
          <svg viewBox="0 0 400 300" className="w-full" role="group" aria-label={plant ? t("widget.cell.diagramPlant", "plant cell diagram") : t("widget.cell.diagramAnimal", "animal cell diagram")}>
            <defs>
              <filter id="cellGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="rgb(var(--accent))" floodOpacity="0.9" />
              </filter>
            </defs>

            {plant ? (
              <>
                <Part id="wall" sel={sel} onSelect={setSel}>
                  <rect x="40" y="20" width="320" height="260" rx="18" fill="rgb(var(--good) / 0.12)" stroke="rgb(var(--good))" strokeWidth="10" />
                </Part>
                <Part id="membrane" sel={sel} onSelect={setSel}>
                  <rect x="52" y="32" width="296" height="236" rx="12" fill="none" stroke="rgb(var(--accent))" strokeWidth="3" />
                </Part>
                <Part id="cytoplasm" sel={sel} onSelect={setSel}>
                  <rect x="55" y="35" width="290" height="230" rx="10" fill="rgb(var(--accent) / 0.07)" />
                </Part>
                <Part id="vacuole" sel={sel} onSelect={setSel}>
                  <path d="M 150 95 C 150 70, 290 65, 300 100 C 315 140, 310 190, 270 205 C 230 220, 160 215, 150 180 C 140 150, 150 120, 150 95 Z" fill="rgb(var(--accent) / 0.18)" stroke="rgb(var(--accent) / 0.6)" strokeWidth="2" />
                  <text x="228" y="148" textAnchor="middle" fontSize="11" fill="rgb(var(--accent))" fontWeight="700">
                    {t("widget.cell.vacuoleLabel", "vacuole")}
                  </text>
                </Part>
                <Part id="nucleus" sel={sel} onSelect={setSel}>
                  <circle cx="95" cy="95" r="30" fill="rgb(var(--accent-2) / 0.3)" stroke="rgb(var(--accent-2))" strokeWidth="3" />
                  <circle cx="100" cy="92" r="9" fill="rgb(var(--accent-2))" />
                </Part>
                <Part id="chloroplast" sel={sel} onSelect={setSel}>
                  <Chloro x={95} y={235} r={10} />
                  <Chloro x={320} y={60} r={-20} />
                  <Chloro x={325} y={245} r={30} />
                  <Chloro x={180} y={245} r={-5} />
                  <Chloro x={85} y={170} r={80} />
                  <Chloro x={230} y={55} r={5} />
                </Part>
                <Part id="mitochondria" sel={sel} onSelect={setSel}>
                  <Mito x={130} y={240} r={-15} />
                  <Mito x={330} y={160} r={80} />
                </Part>
                <Part id="er" sel={sel} onSelect={setSel}>
                  <ER x={70} y={135} />
                </Part>
                <Part id="golgi" sel={sel} onSelect={setSel}>
                  <Golgi x={260} y={225} />
                </Part>
              </>
            ) : (
              <>
                <Part id="membrane" sel={sel} onSelect={setSel}>
                  <path d="M 70 150 C 60 70, 150 25, 220 30 C 300 35, 355 90, 345 160 C 338 225, 280 280, 200 275 C 120 270, 78 220, 70 150 Z" fill="rgb(var(--accent) / 0.12)" stroke="rgb(var(--accent))" strokeWidth="5" />
                </Part>
                <Part id="cytoplasm" sel={sel} onSelect={setSel}>
                  <path d="M 85 150 C 80 85, 155 45, 220 48 C 290 52, 330 100, 325 160 C 320 215, 270 258, 200 255 C 130 252, 90 210, 85 150 Z" fill="rgb(var(--accent) / 0.06)" />
                </Part>
                <Part id="nucleus" sel={sel} onSelect={setSel}>
                  <circle cx="205" cy="150" r="42" fill="rgb(var(--accent-2) / 0.28)" stroke="rgb(var(--accent-2))" strokeWidth="3" />
                  <circle cx="212" cy="144" r="13" fill="rgb(var(--accent-2))" />
                </Part>
                <Part id="er" sel={sel} onSelect={setSel}>
                  <ER x={130} y={95} />
                </Part>
                <Part id="golgi" sel={sel} onSelect={setSel}>
                  <Golgi x={265} y={200} />
                </Part>
                <Part id="mitochondria" sel={sel} onSelect={setSel}>
                  <Mito x={120} y={190} r={30} />
                  <Mito x={290} y={110} r={-40} />
                  <Mito x={210} y={235} r={5} />
                </Part>
                <Part id="lysosome" sel={sel} onSelect={setSel}>
                  <circle cx="150" cy="235" r="11" fill="rgb(var(--bad) / 0.3)" stroke="rgb(var(--bad))" strokeWidth="2" />
                  <circle cx="300" cy="160" r="9" fill="rgb(var(--bad) / 0.3)" stroke="rgb(var(--bad))" strokeWidth="2" />
                </Part>
                <Part id="vacuole" sel={sel} onSelect={setSel}>
                  <circle cx="250" cy="70" r="12" fill="rgb(var(--accent) / 0.2)" stroke="rgb(var(--accent) / 0.6)" strokeWidth="2" />
                </Part>
                <Part id="centriole" sel={sel} onSelect={setSel}>
                  <g transform="translate(150 150)">
                    <rect x="-14" y="-5" width="22" height="10" rx="3" fill="rgb(var(--ink) / 0.6)" />
                    <rect x="-2" y="-16" width="10" height="22" rx="3" fill="rgb(var(--ink) / 0.45)" />
                  </g>
                </Part>
              </>
            )}

            <Part id="ribosome" sel={sel} onSelect={setSel}>
              {ribos.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3.5" fill="rgb(var(--ink))" />
              ))}
            </Part>
          </svg>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={sel}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              className="rounded-3xl border border-line bg-surface-2 p-4"
              aria-live="polite"
            >
              <div className="flex items-center gap-2 text-lg font-bold text-ink">
                <span className="text-2xl">{info.emoji}</span> {info.name}
              </div>
              <p className="mt-2 text-sm leading-6 text-ink/90">{info.fn}</p>
              <p className="mt-2 rounded-xl bg-accent/10 px-3 py-2 text-xs text-accent">💡 {info.fact}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap gap-1.5">
            {PARTS[kind].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setSel(id)}
                aria-pressed={sel === id}
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition ${sel === id ? "border-accent bg-accent text-white" : "border-line bg-surface text-muted hover:text-ink"}`}
              >
                {INFO[id].name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
