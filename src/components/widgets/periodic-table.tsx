"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WidgetTitle } from "./_shared";

type Cat = "a" | "e" | "t" | "p" | "m" | "n" | "h" | "g" | "l" | "c" | "u";

/*
 * Category swatches are data colours (they must stay distinguishable from each
 * other), so they use fixed hues at low alpha over the themed surface and keep
 * text in the theme's ink colour — readable in light and dark worlds alike.
 */
const CATS: Record<Cat, { name: string; hue: number }> = {
  a: { name: "Alkali metal", hue: 0 },
  e: { name: "Alkaline earth metal", hue: 28 },
  t: { name: "Transition metal", hue: 48 },
  p: { name: "Post-transition metal", hue: 160 },
  m: { name: "Metalloid", hue: 185 },
  n: { name: "Reactive nonmetal", hue: 110 },
  h: { name: "Halogen", hue: 205 },
  g: { name: "Noble gas", hue: 265 },
  l: { name: "Lanthanide", hue: 320 },
  c: { name: "Actinide", hue: 345 },
  u: { name: "Unknown properties", hue: 220 },
};

/** Z order: symbol|name|standard atomic weight ([n] = mass number of most stable isotope)|category */
const RAW = `H|Hydrogen|1.008|n
He|Helium|4.0026|g
Li|Lithium|6.94|a
Be|Beryllium|9.0122|e
B|Boron|10.81|m
C|Carbon|12.011|n
N|Nitrogen|14.007|n
O|Oxygen|15.999|n
F|Fluorine|18.998|h
Ne|Neon|20.180|g
Na|Sodium|22.990|a
Mg|Magnesium|24.305|e
Al|Aluminium|26.982|p
Si|Silicon|28.085|m
P|Phosphorus|30.974|n
S|Sulfur|32.06|n
Cl|Chlorine|35.45|h
Ar|Argon|39.948|g
K|Potassium|39.098|a
Ca|Calcium|40.078|e
Sc|Scandium|44.956|t
Ti|Titanium|47.867|t
V|Vanadium|50.942|t
Cr|Chromium|51.996|t
Mn|Manganese|54.938|t
Fe|Iron|55.845|t
Co|Cobalt|58.933|t
Ni|Nickel|58.693|t
Cu|Copper|63.546|t
Zn|Zinc|65.38|t
Ga|Gallium|69.723|p
Ge|Germanium|72.630|m
As|Arsenic|74.922|m
Se|Selenium|78.971|n
Br|Bromine|79.904|h
Kr|Krypton|83.798|g
Rb|Rubidium|85.468|a
Sr|Strontium|87.62|e
Y|Yttrium|88.906|t
Zr|Zirconium|91.224|t
Nb|Niobium|92.906|t
Mo|Molybdenum|95.95|t
Tc|Technetium|[98]|t
Ru|Ruthenium|101.07|t
Rh|Rhodium|102.91|t
Pd|Palladium|106.42|t
Ag|Silver|107.87|t
Cd|Cadmium|112.41|t
In|Indium|114.82|p
Sn|Tin|118.71|p
Sb|Antimony|121.76|m
Te|Tellurium|127.60|m
I|Iodine|126.90|h
Xe|Xenon|131.29|g
Cs|Caesium|132.91|a
Ba|Barium|137.33|e
La|Lanthanum|138.91|l
Ce|Cerium|140.12|l
Pr|Praseodymium|140.91|l
Nd|Neodymium|144.24|l
Pm|Promethium|[145]|l
Sm|Samarium|150.36|l
Eu|Europium|151.96|l
Gd|Gadolinium|157.25|l
Tb|Terbium|158.93|l
Dy|Dysprosium|162.50|l
Ho|Holmium|164.93|l
Er|Erbium|167.26|l
Tm|Thulium|168.93|l
Yb|Ytterbium|173.05|l
Lu|Lutetium|174.97|l
Hf|Hafnium|178.49|t
Ta|Tantalum|180.95|t
W|Tungsten|183.84|t
Re|Rhenium|186.21|t
Os|Osmium|190.23|t
Ir|Iridium|192.22|t
Pt|Platinum|195.08|t
Au|Gold|196.97|t
Hg|Mercury|200.59|t
Tl|Thallium|204.38|p
Pb|Lead|207.2|p
Bi|Bismuth|208.98|p
Po|Polonium|[209]|p
At|Astatine|[210]|h
Rn|Radon|[222]|g
Fr|Francium|[223]|a
Ra|Radium|[226]|e
Ac|Actinium|[227]|c
Th|Thorium|232.04|c
Pa|Protactinium|231.04|c
U|Uranium|238.03|c
Np|Neptunium|[237]|c
Pu|Plutonium|[244]|c
Am|Americium|[243]|c
Cm|Curium|[247]|c
Bk|Berkelium|[247]|c
Cf|Californium|[251]|c
Es|Einsteinium|[252]|c
Fm|Fermium|[257]|c
Md|Mendelevium|[258]|c
No|Nobelium|[259]|c
Lr|Lawrencium|[266]|c
Rf|Rutherfordium|[267]|t
Db|Dubnium|[268]|t
Sg|Seaborgium|[269]|t
Bh|Bohrium|[270]|t
Hs|Hassium|[269]|t
Mt|Meitnerium|[278]|u
Ds|Darmstadtium|[281]|u
Rg|Roentgenium|[282]|u
Cn|Copernicium|[285]|u
Nh|Nihonium|[286]|u
Fl|Flerovium|[289]|u
Mc|Moscovium|[290]|u
Lv|Livermorium|[293]|u
Ts|Tennessine|[294]|u
Og|Oganesson|[294]|u`;

interface El {
  z: number;
  sym: string;
  name: string;
  mass: string;
  cat: Cat;
  period: number;
  /** null for the f-block (lanthanides / actinides). */
  group: number | null;
  row: number;
  col: number;
}

const PERIOD_END = [2, 10, 18, 36, 54, 86, 118];

function position(z: number): Pick<El, "period" | "group" | "row" | "col"> {
  const period = PERIOD_END.findIndex((end) => z <= end) + 1;
  const start = period === 1 ? 1 : PERIOD_END[period - 2] + 1;
  const i = z - start;
  let group: number | null;
  if (period === 1) group = z === 1 ? 1 : 18;
  else if (period <= 3) group = i < 2 ? i + 1 : i + 10;
  else if (period <= 5) group = i + 1;
  else group = i < 2 ? i + 1 : i <= 16 ? null : i - 13;
  if (group === null) {
    // f-block rows sit below the main table (rows 9 & 10), columns 3..17
    return { period, group, row: period + 3, col: i + 1 };
  }
  return { period, group, row: period, col: group };
}

const ELEMENTS: El[] = RAW.split("\n").map((line, idx) => {
  const [sym, name, mass, cat] = line.split("|");
  const z = idx + 1;
  return { z, sym, name, mass, cat: cat as Cat, ...position(z) };
});

const swatch = (c: Cat, a = 0.22) => `hsl(${CATS[c].hue} 75% 55% / ${a})`;

export default function PeriodicTable() {
  const [sel, setSel] = useState<El>(ELEMENTS[0]);
  const [focus, setFocus] = useState<Cat | null>(null);

  const legend = useMemo(() => Object.entries(CATS) as [Cat, (typeof CATS)[Cat]][], []);

  return (
    <div>
      <WidgetTitle title="Periodic table" hint="Tap an element for details. Tap a category to highlight it." />

      <AnimatePresence mode="wait">
        <motion.div
          key={sel.z}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-4 flex flex-wrap items-center gap-4 rounded-3xl border border-line p-4"
          style={{ background: swatch(sel.cat, 0.12) }}
          aria-live="polite"
        >
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border-2 bg-surface text-center" style={{ borderColor: swatch(sel.cat, 0.9) }}>
            <div>
              <div className="font-mono text-xs text-muted">{sel.z}</div>
              <div className="text-4xl font-black leading-none text-ink">{sel.sym}</div>
              <div className="font-mono text-[11px] text-muted">{sel.mass}</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-2xl font-bold text-ink">{sel.name}</div>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              <span className="chip !text-ink" style={{ background: swatch(sel.cat, 0.3) }}>
                {CATS[sel.cat].name}
              </span>
              <span className="chip">Atomic number {sel.z}</span>
              <span className="chip">Atomic mass {sel.mass} u</span>
              <span className="chip">Period {sel.period}</span>
              <span className="chip">{sel.group === null ? "f-block (no group number)" : `Group ${sel.group}`}</span>
            </div>
            {sel.mass.startsWith("[") && <p className="mt-2 text-xs text-muted">[ ] = mass number of the most stable isotope (radioactive element).</p>}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="-mx-1 overflow-x-auto px-1 pb-2">
        <div className="grid min-w-[720px] gap-[3px]" style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))" }}>
          {ELEMENTS.map((el) => {
            const dim = focus !== null && focus !== el.cat;
            const active = el.z === sel.z;
            return (
              <button
                key={el.z}
                type="button"
                onClick={() => setSel(el)}
                aria-label={`${el.name}, atomic number ${el.z}`}
                aria-pressed={active}
                className={`relative aspect-square rounded-md border text-center transition hover:z-10 hover:scale-125 focus-visible:z-10 focus-visible:scale-125 focus-visible:outline-none ${
                  active ? "z-10 scale-110 border-ink" : "border-transparent"
                }`}
                style={{
                  gridRow: el.row,
                  gridColumn: el.col,
                  background: swatch(el.cat, dim ? 0.06 : 0.28),
                  opacity: dim ? 0.35 : 1,
                }}
              >
                <span className="absolute left-0.5 top-0 font-mono text-[8px] text-muted">{el.z}</span>
                <span className="flex h-full items-center justify-center pt-1 text-[13px] font-bold text-ink">{el.sym}</span>
              </button>
            );
          })}
          {/* f-block placeholders in group 3 */}
          {[
            { row: 6, label: "57–71", cat: "l" as Cat },
            { row: 7, label: "89–103", cat: "c" as Cat },
          ].map((ph) => (
            <div
              key={ph.row}
              className="grid aspect-square place-items-center rounded-md border border-dashed border-line font-mono text-[8px] text-muted"
              style={{ gridRow: ph.row, gridColumn: 3, background: swatch(ph.cat, 0.1) }}
            >
              {ph.label}
            </div>
          ))}
          {/* spacer row between main table and f-block */}
          <div style={{ gridRow: 8, gridColumn: "1 / -1" }} className="h-2" />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {legend.map(([k, c]) => (
          <button
            key={k}
            type="button"
            onClick={() => setFocus((f) => (f === k ? null : k))}
            aria-pressed={focus === k}
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${focus === k ? "border-ink text-ink" : "border-line text-muted hover:text-ink"}`}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: swatch(k, 0.8) }} />
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
