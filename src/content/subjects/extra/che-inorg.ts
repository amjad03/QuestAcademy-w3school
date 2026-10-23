import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* s-Block Elements                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "s-block-elements",
    title: "s-Block Elements",
    icon: "🧂",
    description: "Alkali and alkaline earth metals: trends, anomalies, diagonal relationships and the industrial compounds of sodium and calcium.",
    lessons: [
      {
        slug: "alkali-metals",
        title: "Group 1: The Alkali Metals",
        summary: "ns¹ configuration, periodic trends, flame colours, reactions with water, oxygen and liquid ammonia, and the anomalous behaviour of lithium.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Lithium, sodium, potassium, rubidium, caesium and francium each have one electron beyond a noble-gas core (**ns¹**). That single loosely held electron makes them the most electropositive metals known. The common salt in every Indian kitchen and the Li-ion cell in your phone both come from this group.",
          },
          { type: "heading", text: "Trends down the group" },
          {
            type: "table",
            headers: ["Property", "Trend Li → Cs", "Reason"],
            rows: [
              ["Atomic / ionic radius", "Increases", "A new shell is added each period"],
              ["Ionisation enthalpy", "Decreases", "Outer electron is farther from the nucleus and better shielded"],
              ["Melting point", "Decreases", "Weaker metallic bonding (one electron, larger atoms)"],
              ["Density", "Generally increases (K is lighter than Na)", "Mass rises faster than volume, except K"],
              ["Hydration enthalpy of M⁺", "Decreases (Li⁺ highest)", "Smaller ions attract water more strongly"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Flame colours",
            md: "Heat excites the outer electron; it emits visible light as it falls back. Li **crimson red**, Na **golden yellow**, K **lilac**, Rb **red-violet**, Cs **blue**. Sodium vapour street lamps owe their yellow glow to the same 589 nm line.",
          },
          { type: "heading", text: "Key reactions" },
          {
            type: "list",
            items: [
              "**Water:** $2\\text{M} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{MOH} + \\text{H}_2$. Vigour increases from Li to Cs.",
              "**Oxygen (excess air):** Li gives the oxide Li₂O, Na gives the peroxide Na₂O₂, K, Rb and Cs give superoxides MO₂.",
              "**Hydrogen:** ionic hydrides M⁺H⁻ (e.g. NaH), which release H₂ at the anode on electrolysis.",
              "**Halogens:** ionic halides MX; LiX is the most covalent because the tiny Li⁺ polarises the anion.",
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{M + (x+y)NH_3 \rightarrow [M(NH_3)_x]^+ + [e(NH_3)_y]^-}`,
            caption: "Dilute solutions are blue and paramagnetic (ammoniated electrons); concentrated ones are bronze and diamagnetic.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board and NEET trap",
            md: "Lithium has the **highest** ionisation enthalpy in the group, yet it is the **strongest reducing agent in aqueous solution** ($E^\\circ = -3.04$ V). The very large hydration enthalpy of Li⁺ more than pays for the ionisation step. Do not confuse this with reactivity towards water, where Li reacts the least vigorously.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "2.3 g of sodium is dropped into excess water. Find the volume of H₂ at STP.",
              "Moles of Na $= 2.3 / 23 = 0.1$ mol.",
              "From $2\\text{Na} \\rightarrow \\text{H}_2$: moles of H₂ $= 0.1/2 = 0.05$ mol.",
              "Volume $= 0.05 \\times 22.4 = 1.12$ L at STP.",
            ],
          },
          {
            type: "text",
            md: "**Anomalous lithium and its diagonal relationship with magnesium.** Because Li⁺ is very small and highly polarising, lithium behaves like magnesium: both form nitrides directly (Li₃N, Mg₃N₂), both carbonates decompose on heating to the oxide and CO₂, both nitrates give NO₂ on heating, and LiCl, like MgCl₂, is deliquescent and crystallises as a hydrate. Sodium nitrate, by contrast, gives NaNO₂ and O₂.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which metal mainly forms a **superoxide** when burnt in excess air?",
                options: ["Lithium", "Sodium", "Potassium", "Magnesium"],
                answer: 2,
                explain: "K, Rb and Cs form MO₂. Li forms the oxide and Na the peroxide.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Alkali metals: ns¹, +1 oxidation state only, strong reducing agents.",
              "Burning in air: Li₂O (oxide), Na₂O₂ (peroxide), KO₂ (superoxide).",
              "Li is the strongest aqueous reducing agent because of the hydration enthalpy of Li⁺.",
              "Blue dilute solutions in liquid NH₃ contain ammoniated electrons.",
              "Li shows a diagonal relationship with Mg.",
            ],
          },
        ],
        flashcards: [
          { front: "General electronic configuration of Group 1", back: "[noble gas] ns¹" },
          { front: "Product of burning sodium in excess air", back: "Sodium peroxide, Na₂O₂" },
          { front: "Flame colour of potassium", back: "Lilac (violet)" },
          { front: "Why is Li the strongest reducing agent in water?", back: "Li⁺ has the largest hydration enthalpy, which outweighs its high ionisation enthalpy." },
          { front: "Colour of dilute Na in liquid NH₃", back: "Blue (ammoniated electrons), paramagnetic" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The golden-yellow flame seen when salt spills on a gas stove is due to:",
            options: ["Lithium", "Sodium", "Potassium", "Calcium"],
            answer: 1,
            explain: "Sodium's 589 nm emission is golden yellow.",
          },
          {
            kind: "numeric",
            q: "4.6 g of sodium reacts completely with water. Volume of H₂ produced at STP (in L)?",
            answer: 2.24,
            tolerance: 0.02,
            unit: "L",
            explain: "4.6/23 = 0.2 mol Na → 0.1 mol H₂ → 0.1 × 22.4 = 2.24 L.",
          },
          {
            kind: "truefalse",
            q: "A dilute solution of sodium in liquid ammonia is diamagnetic.",
            answer: false,
            explain: "Dilute solutions are paramagnetic because of unpaired ammoniated electrons; concentrated (bronze) solutions are diamagnetic.",
          },
          {
            kind: "fill",
            q: "Lithium shows a diagonal relationship with ___.",
            answer: ["magnesium", "Mg"],
            explain: "Similar charge/size ratio (polarising power) of Li⁺ and Mg²⁺.",
          },
          {
            kind: "order",
            q: "Arrange in order of increasing atomic radius.",
            items: ["Li", "Na", "K", "Rb", "Cs"],
            explain: "Radius increases down the group as shells are added.",
          },
          {
            kind: "mcq",
            q: "Which is the strongest reducing agent in aqueous solution?",
            options: ["Cs", "K", "Na", "Li"],
            answer: 3,
            difficulty: 3,
            explain: "Li has the most negative E° (−3.04 V) owing to the very high hydration enthalpy of Li⁺.",
          },
        ],
      },
      {
        slug: "alkaline-earth-metals",
        title: "Group 2: The Alkaline Earth Metals",
        summary: "ns² metals, ionisation trends, solubility and thermal stability of their compounds, and the anomalous behaviour of beryllium.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Beryllium, magnesium, calcium, strontium, barium and radium have two valence electrons (**ns²**) and show the +2 oxidation state. They are harder, denser and higher-melting than their Group 1 neighbours because two electrons take part in metallic bonding.",
          },
          {
            type: "table",
            headers: ["Property", "Comparison with Group 1", "Trend Be → Ba"],
            rows: [
              ["Atomic radius", "Smaller (higher nuclear charge)", "Increases"],
              ["First ionisation enthalpy", "Higher", "Decreases"],
              ["Second ionisation enthalpy", "Lower than Group 1's second IE", "Decreases"],
              ["Hydration enthalpy of M²⁺", "Larger", "Decreases"],
              ["Reducing power", "Less than Group 1", "Increases"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Flame colours",
            md: "Ca **brick red**, Sr **crimson**, Ba **apple green**. Be and Mg give **no** flame colour: their electrons are held too tightly for a Bunsen flame to excite them. Diwali fireworks use strontium salts for red and barium salts for green.",
          },
          { type: "heading", text: "Two opposite solubility trends" },
          {
            type: "table",
            headers: ["Compound class", "Trend down the group", "Why"],
            rows: [
              ["Hydroxides M(OH)₂", "Solubility and basic strength **increase**", "Lattice enthalpy falls faster than hydration enthalpy"],
              ["Sulphates MSO₄", "Solubility **decreases** (BaSO₄ is insoluble)", "Large SO₄²⁻ keeps lattice enthalpy nearly constant, while hydration enthalpy falls"],
              ["Carbonates MCO₃", "Thermal stability **increases**", "Larger M²⁺ polarises CO₃²⁻ less"],
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{BeCO_3 < MgCO_3 < CaCO_3 < SrCO_3 < BaCO_3}`,
            caption: "Order of thermal stability (decomposition temperature)",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Limestone is heated in a lime kiln: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. Find the CaO and CO₂ from 10 g CaCO₃.",
              "Molar mass of CaCO₃ $= 40 + 12 + 48 = 100$ g/mol, so 10 g = 0.1 mol.",
              "CaO formed $= 0.1 \\times 56 = 5.6$ g.",
              "CO₂ formed $= 0.1$ mol $= 2.24$ L at STP (4.4 g). Mass is conserved: 5.6 + 4.4 = 10 g.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Students apply one rule to everything. Remember: hydroxide solubility goes **up** the table from Be(OH)₂ to Ba(OH)₂, but sulphate solubility goes **down** from BeSO₄ to BaSO₄. That is why insoluble BaSO₄ can be swallowed safely as a 'barium meal' for X-rays.",
          },
          {
            type: "text",
            md: "**Anomalous beryllium.** Be²⁺ is tiny and highly polarising, so beryllium compounds are largely covalent. BeO and Be(OH)₂ are **amphoteric**, BeCl₂ is polymeric in the solid and a dimer in the vapour, and Be has a maximum covalency of 4 (no d orbitals). These features match **aluminium**, the diagonal partner of beryllium.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Arrange the sulphates in order of decreasing solubility in water.",
                items: ["BeSO₄", "MgSO₄", "CaSO₄", "SrSO₄", "BaSO₄"],
                explain: "Hydration enthalpy of M²⁺ falls down the group while lattice enthalpy stays nearly constant.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Group 2: ns², +2 state, smaller and harder than Group 1 metals.",
              "Be and Mg do not colour a flame; Ca brick red, Sr crimson, Ba apple green.",
              "Hydroxide solubility increases, sulphate solubility decreases down the group.",
              "Carbonate thermal stability increases from BeCO₃ to BaCO₃.",
              "Be resembles Al: amphoteric oxide, covalent chloride.",
            ],
          },
        ],
        flashcards: [
          { front: "Flame colour of barium", back: "Apple green" },
          { front: "Most soluble Group 2 sulphate", back: "BeSO₄ (solubility decreases down the group)" },
          { front: "Least thermally stable Group 2 carbonate", back: "BeCO₃" },
          { front: "Diagonal partner of beryllium", back: "Aluminium" },
          { front: "Why don't Be and Mg colour a flame?", back: "Their electrons are too strongly bound to be excited by flame energy." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Mass of quicklime (CaO) obtained by completely heating 25 g of CaCO₃ (in g)?",
            answer: 14,
            tolerance: 0.05,
            unit: "g",
            explain: "25/100 = 0.25 mol CaCO₃ → 0.25 mol CaO × 56 = 14 g.",
          },
          {
            kind: "mcq",
            q: "Which carbonate decomposes at the lowest temperature?",
            options: ["BaCO₃", "CaCO₃", "MgCO₃", "BeCO₃"],
            answer: 3,
            explain: "Small Be²⁺ strongly polarises CO₃²⁻, so BeCO₃ is least stable.",
          },
          {
            kind: "truefalse",
            q: "BeO is amphoteric.",
            answer: true,
            explain: "It dissolves in both acids and alkalis, like Al₂O₃.",
          },
          {
            kind: "fill",
            q: "Insoluble ___ sulphate is swallowed before X-ray imaging of the gut.",
            answer: ["barium", "Ba"],
            explain: "BaSO₄ is insoluble and opaque to X-rays, so it is not absorbed.",
          },
          {
            kind: "order",
            q: "Arrange the hydroxides in order of increasing solubility in water.",
            items: ["Be(OH)₂", "Mg(OH)₂", "Ca(OH)₂", "Sr(OH)₂", "Ba(OH)₂"],
            explain: "Hydroxide solubility (and basicity) increases down the group.",
          },
          {
            kind: "mcq",
            q: "Which metal does **not** impart a colour to a Bunsen flame?",
            options: ["Calcium", "Strontium", "Magnesium", "Barium"],
            answer: 2,
            explain: "Mg (and Be) hold their electrons too tightly.",
          },
        ],
      },
      {
        slug: "s-block-compounds",
        title: "Important Compounds of Sodium and Calcium",
        summary: "Solvay process, washing and baking soda, NaOH by the Castner–Kellner cell, plaster of Paris, cement, lime, and the biological role of s-block ions.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Glass factories in Firozabad, soap makers, the construction boom in every Indian city and the doctor setting a fractured wrist all depend on a handful of s-block compounds. Boards ask for their manufacture, formulae and uses almost every year.",
          },
          { type: "heading", text: "Sodium carbonate by the Solvay (ammonia–soda) process" },
          {
            type: "formula",
            tex: t`\mathrm{NH_3 + H_2O + CO_2 \rightarrow NH_4HCO_3} \qquad \mathrm{NH_4HCO_3 + NaCl \rightarrow NaHCO_3\downarrow + NH_4Cl}`,
            caption: "Sparingly soluble NaHCO₃ crystallises out of brine",
          },
          {
            type: "formula",
            tex: t`\mathrm{2NaHCO_3 \xrightarrow{\Delta} Na_2CO_3 + CO_2 + H_2O} \qquad \mathrm{2NH_4Cl + Ca(OH)_2 \rightarrow 2NH_3 + CaCl_2 + 2H_2O}`,
            caption: "Heating gives soda ash; ammonia is recovered and recycled",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic trap",
            md: "**K₂CO₃ cannot be made by the Solvay process.** KHCO₃ is too soluble to precipitate when NH₄HCO₃ is added to KCl. Also learn the hydrates: washing soda is Na₂CO₃·10H₂O, which loses water in air (efflorescence) to the monohydrate and becomes anhydrous soda ash above 373 K.",
          },
          {
            type: "table",
            headers: ["Compound", "Formula", "How it is made", "Use"],
            rows: [
              ["Caustic soda", "NaOH", "Electrolysis of brine in the Castner–Kellner cell (mercury cathode, carbon anode)", "Soap, paper, petroleum refining"],
              ["Baking soda", "NaHCO₃", "Passing CO₂ into Na₂CO₃ solution", "Antacid, fire extinguishers, baking"],
              ["Quicklime / slaked lime", "CaO / Ca(OH)₂", "Heating limestone; adding water to CaO", "Whitewash, mortar, bleaching powder"],
              ["Plaster of Paris", "CaSO₄·½H₂O", "Heating gypsum at 393 K", "Casts for fractures, statues, false ceilings"],
            ],
          },
          {
            type: "formula",
            tex: t`\mathrm{2(CaSO_4\cdot 2H_2O) \xrightarrow{393\ K} 2(CaSO_4\cdot \tfrac12 H_2O) + 3H_2O}`,
            caption: "Above 393 K anhydrous 'dead burnt plaster' forms, which no longer sets with water",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "What mass of gypsum gives 290 g of plaster of Paris?",
              "Molar masses: CaSO₄·2H₂O $= 136 + 36 = 172$ g/mol; CaSO₄·½H₂O $= 136 + 9 = 145$ g/mol.",
              "290 g PoP $= 290/145 = 2$ mol; 1 mol gypsum gives 1 mol PoP.",
              "Gypsum needed $= 2 \\times 172 = 344$ g; water lost $= 344 - 290 = 54$ g (3 mol).",
            ],
          },
          {
            type: "text",
            md: "**Portland cement** is roughly CaO 50–60%, SiO₂ 20–25%, Al₂O₃ 5–10%, MgO 2–3%, Fe₂O₃ 1–2% and SO₃ 1–2%. For good quality the ratio SiO₂ : Al₂O₃ should lie between 2.5 and 4. About 2–3% gypsum is ground into the clinker to **slow down setting**.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Biological importance",
            md: "Na⁺ and K⁺ carry nerve signals; the sodium–potassium pump in cell membranes keeps K⁺ high inside and Na⁺ high outside. Mg²⁺ sits at the centre of chlorophyll and activates ATP-using enzymes. About 99% of the body's calcium is in bones and teeth.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Lime water turns milky with CO₂ but clears again with excess CO₂ because:",
                options: [
                  "CaCO₃ decomposes",
                  "Soluble Ca(HCO₃)₂ forms",
                  "CaO is regenerated",
                  "CO₂ dissolves CaSO₄",
                ],
                answer: 1,
                explain: "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂, which is soluble.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Solvay process: NaHCO₃ precipitates, heating gives Na₂CO₃, NH₃ is recycled.",
              "K₂CO₃ cannot be made by the Solvay process (KHCO₃ too soluble).",
              "NaOH: Castner–Kellner cell with a mercury cathode.",
              "Plaster of Paris is CaSO₄·½H₂O; dead burnt plaster is anhydrous CaSO₄.",
              "Gypsum is added to cement to slow its setting.",
            ],
          },
        ],
        flashcards: [
          { front: "Formula of washing soda", back: "Na₂CO₃·10H₂O" },
          { front: "Formula of plaster of Paris", back: "CaSO₄·½H₂O (2CaSO₄·H₂O)" },
          { front: "Cathode in the Castner–Kellner cell", back: "Mercury (forms sodium amalgam)" },
          { front: "Why is gypsum added to cement?", back: "To slow down (retard) setting." },
          { front: "Metal ion in chlorophyll", back: "Mg²⁺" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "When 172 g of gypsum is converted completely to plaster of Paris, what mass of water is lost (in g)?",
            answer: 27,
            tolerance: 0.1,
            unit: "g",
            difficulty: 2,
            explain: "1 mol gypsum (172 g) → 1 mol PoP (145 g); water lost = 1.5 mol = 27 g.",
          },
          {
            kind: "mcq",
            q: "In the Castner–Kellner cell, the cathode is made of:",
            options: ["Graphite", "Iron", "Mercury", "Platinum"],
            answer: 2,
            explain: "Sodium dissolves in the mercury cathode as amalgam, which is then treated with water.",
          },
          {
            kind: "truefalse",
            q: "Potassium carbonate can be manufactured by the Solvay process.",
            answer: false,
            explain: "KHCO₃ is too soluble to be precipitated.",
          },
          {
            kind: "fill",
            q: "The metal ion at the centre of the chlorophyll molecule is ___.",
            answer: ["magnesium", "Mg", "Mg2+", "Mg²⁺"],
            explain: "Chlorophyll is a magnesium porphyrin complex.",
          },
          {
            kind: "order",
            q: "Put the steps of the Solvay process in order.",
            items: [
              "Brine is saturated with NH₃",
              "CO₂ is passed to form NH₄HCO₃",
              "NaHCO₃ precipitates and is filtered",
              "NaHCO₃ is heated to give Na₂CO₃",
              "NH₃ is recovered from NH₄Cl with Ca(OH)₂",
            ],
            explain: "Ammoniated brine is carbonated, NaHCO₃ separates and is calcined, then ammonia is regenerated.",
          },
          {
            kind: "mcq",
            q: "Dead burnt plaster is:",
            options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "Anhydrous CaSO₄", "CaO"],
            answer: 2,
            explain: "Heating gypsum above 393 K removes all water, giving anhydrous CaSO₄.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* p-Block Elements (Groups 13 and 14)                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "p-block-13-14",
    title: "p-Block Elements (Groups 13 and 14)",
    icon: "🔷",
    description: "The boron and carbon families: inert pair effect, electron-deficient boron compounds, allotropes of carbon, silicones and silicates.",
    lessons: [
      {
        slug: "boron-family",
        title: "Group 13: The Boron Family",
        summary: "ns²np¹ elements, the anomaly of gallium's radius, the inert pair effect, Lewis acidity of boron halides and the chemistry of aluminium.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Group 13 runs from boron, a hard non-metal, through aluminium, the most abundant metal in the Earth's crust, to thallium. All have the configuration **ns²np¹** and a group oxidation state of +3, but the heavier members increasingly prefer +1.",
          },
          {
            type: "table",
            headers: ["Element", "Atomic radius (pm)", "Stable states"],
            rows: [
              ["B", "85", "+3 (covalent)"],
              ["Al", "143", "+3"],
              ["Ga", "135", "+3 (+1)"],
              ["In", "167", "+3, +1"],
              ["Tl", "170", "+1 more stable than +3"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Why is Ga smaller than Al?",
            md: "Gallium comes after the ten 3d elements. The 3d electrons shield the nuclear charge poorly, so the outer electrons of Ga feel a larger effective nuclear charge. Result: $r(\\text{Ga}) < r(\\text{Al})$. Expect it as an assertion–reason question.",
          },
          { type: "heading", text: "Inert pair effect" },
          {
            type: "text",
            md: "Down the group, the ns² pair becomes reluctant to take part in bonding (poor shielding by d and f electrons and weaker bonds formed by large atoms). So the +1 state becomes steadily more stable: Tl⁺ is stable, while Tl³⁺ is a good oxidising agent.",
          },
          { type: "heading", text: "Electron-deficient boron halides" },
          {
            type: "formula",
            tex: t`\mathrm{BF_3 < BCl_3 < BBr_3 < BI_3}`,
            caption: "Increasing Lewis acid strength",
          },
          {
            type: "text",
            md: "BX₃ has only six electrons around boron, so it accepts a lone pair (e.g. from NH₃). Fluorine's filled 2p orbital donates back into boron's empty 2p orbital (**pπ–pπ back bonding**). The overlap is best for the similar-sized F, which most reduces boron's electron deficiency. Hence BF₃ is the weakest Lewis acid of the four. Aluminium chloride completes its octet by dimerising to Al₂Cl₆ through chlorine bridges.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Aluminium reacts with both acid and alkali: $2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$ and $2\\text{Al} + 2\\text{NaOH} + 6\\text{H}_2\\text{O} \\rightarrow 2\\text{Na[Al(OH)}_4] + 3\\text{H}_2$.",
              "Take 5.4 g Al: moles $= 5.4/27 = 0.2$ mol.",
              "H₂ formed $= 0.2 \\times \\tfrac32 = 0.3$ mol in either reaction.",
              "Volume $= 0.3 \\times 22.4 = 6.72$ L at STP.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which hydroxide is amphoteric?",
                options: ["B(OH)₃", "Al(OH)₃", "TlOH", "In(OH)₃ only"],
                answer: 1,
                explain: "B(OH)₃ is acidic, Al(OH)₃ and Ga(OH)₃ are amphoteric, In and Tl hydroxides are basic.",
              },
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Passive aluminium",
            md: "Concentrated nitric acid makes aluminium **passive** by forming a thin protective oxide layer. That is why it can be transported in aluminium tankers.",
          },
          {
            type: "keypoints",
            items: [
              "Group 13: ns²np¹, +3 state; +1 grows more stable down the group (inert pair effect).",
              "Ga is smaller than Al because of poor 3d shielding.",
              "Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ (back bonding is strongest in BF₃).",
              "Al dissolves in both HCl and NaOH, releasing 3 mol H₂ per 2 mol Al.",
            ],
          },
        ],
        flashcards: [
          { front: "General configuration of Group 13", back: "ns² np¹" },
          { front: "Weakest Lewis acid among BX₃", back: "BF₃ (strong pπ–pπ back bonding)" },
          { front: "More stable oxidation state of thallium", back: "+1 (inert pair effect)" },
          { front: "Structure of aluminium chloride vapour", back: "Al₂Cl₆ dimer with two chlorine bridges" },
          { front: "Nature of B(OH)₃", back: "Weak acid" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The correct order of Lewis acid strength is:",
            options: ["BF₃ > BCl₃ > BBr₃", "BBr₃ > BCl₃ > BF₃", "BCl₃ > BF₃ > BBr₃", "All are equal"],
            answer: 1,
            difficulty: 2,
            explain: "Back bonding decreases from F to Br, so electron deficiency and Lewis acidity increase.",
          },
          {
            kind: "numeric",
            q: "2.7 g of Al dissolves in excess NaOH solution. Volume of H₂ at STP (in L)?",
            answer: 3.36,
            tolerance: 0.02,
            unit: "L",
            explain: "0.1 mol Al × 3/2 = 0.15 mol H₂ × 22.4 = 3.36 L.",
          },
          {
            kind: "truefalse",
            q: "In thallium, the +1 oxidation state is more stable than +3.",
            answer: true,
            explain: "The inert pair effect is strongest for the heaviest member.",
          },
          {
            kind: "fill",
            q: "The reluctance of the ns² electrons of heavy p-block elements to take part in bonding is called the ___ effect.",
            answer: ["inert pair", "inert-pair"],
            explain: "It explains the stability of Tl⁺, Pb²⁺ and Bi³⁺.",
          },
          {
            kind: "order",
            q: "Arrange in order of increasing atomic radius.",
            items: ["B", "Ga", "Al", "In", "Tl"],
            difficulty: 3,
            explain: "B 85 < Ga 135 < Al 143 < In 167 < Tl 170 pm.",
          },
        ],
      },
      {
        slug: "boron-compounds",
        title: "Borax, Boric Acid and Diborane",
        summary: "Structure and reactions of borax, the bead test, boric acid as a Lewis acid, three-centre bonds in diborane and borazine.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Boron's electron deficiency produces some of the strangest structures in the syllabus. Three compounds dominate board and NEET questions: **borax**, **boric acid** and **diborane**.",
          },
          { type: "heading", text: "Borax, Na₂B₄O₇·10H₂O" },
          {
            type: "text",
            md: "Its true structure is Na₂[B₄O₅(OH)₄]·8H₂O. In water it hydrolyses to an alkaline solution: $\\text{Na}_2\\text{B}_4\\text{O}_7 + 7\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + 4\\text{H}_3\\text{BO}_3$. On heating it swells and then fuses to a clear glass.",
          },
          {
            type: "formula",
            tex: t`\mathrm{Na_2B_4O_7 \xrightarrow{\Delta} 2NaBO_2 + \underbrace{B_2O_3}_{glassy\ bead}} \qquad \mathrm{B_2O_3 + CoO \rightarrow \underbrace{Co(BO_2)_2}_{blue}}`,
            caption: "Borax bead test: transition-metal oxides give coloured metaborates",
          },
          { type: "heading", text: "Boric acid, H₃BO₃" },
          {
            type: "formula",
            tex: t`\mathrm{B(OH)_3 + 2H_2O \rightleftharpoons [B(OH)_4]^- + H_3O^+}`,
            caption: "A weak monobasic Lewis acid: it accepts OH⁻ rather than donating its own H⁺",
          },
          {
            type: "text",
            md: "Solid boric acid has a layered structure of planar BO₃ units held by hydrogen bonds, which is why it feels soapy. On heating above 370 K it gives metaboric acid HBO₂, and on stronger heating, B₂O₃.",
          },
          { type: "heading", text: "Diborane, B₂H₆" },
          {
            type: "illustration",
            emoji: "🍌",
            caption: "Four terminal B–H bonds are ordinary 2-centre–2-electron bonds. The two bridging B–H–B bonds are 3-centre–2-electron 'banana' bonds.",
          },
          {
            type: "list",
            items: [
              "**Preparation:** $4\\text{BF}_3 + 3\\text{LiAlH}_4 \\rightarrow 2\\text{B}_2\\text{H}_6 + 3\\text{LiF} + 3\\text{AlF}_3$; in the lab, $2\\text{NaBH}_4 + \\text{I}_2 \\rightarrow \\text{B}_2\\text{H}_6 + 2\\text{NaI} + \\text{H}_2$.",
              "**Burns** with a large release of energy: $\\text{B}_2\\text{H}_6 + 3\\text{O}_2 \\rightarrow \\text{B}_2\\text{O}_3 + 3\\text{H}_2\\text{O}$.",
              "**Hydrolysis:** $\\text{B}_2\\text{H}_6 + 6\\text{H}_2\\text{O} \\rightarrow 2\\text{B(OH)}_3 + 6\\text{H}_2$.",
              "**With NH₃:** forms B₂H₆·2NH₃, which on heating gives borazine B₃N₃H₆, 'inorganic benzene'.",
            ],
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Find the volume of H₂ at STP when 13.8 g of diborane is completely hydrolysed.",
              "Molar mass of B₂H₆ $= 2(10.8) + 6(1) = 27.6$ g/mol, so moles $= 13.8/27.6 = 0.5$ mol.",
              "1 mol B₂H₆ gives 6 mol H₂, so H₂ $= 3$ mol.",
              "Volume $= 3 \\times 22.4 = 67.2$ L.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET favourite",
            md: "Boric acid is **not** a protonic acid. It is monobasic because each B(OH)₃ accepts **one** OH⁻. Also remember B₂H₆ has **two** 3c–2e bonds and **four** 2c–2e bonds, and all its B atoms are sp³ hybridised.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many 3-centre–2-electron bonds are present in one molecule of diborane?",
                answer: 2,
                explain: "The two B–H–B bridges.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Borax solution is alkaline; the borax bead test identifies Co (blue), Cu, Ni and others.",
              "H₃BO₃ is a weak monobasic Lewis acid with a hydrogen-bonded layer structure.",
              "B₂H₆: 4 terminal 2c–2e and 2 bridging 3c–2e bonds.",
              "B₂H₆ + 6H₂O → 2B(OH)₃ + 6H₂; borazine is inorganic benzene.",
            ],
          },
        ],
        flashcards: [
          { front: "Colour of the cobalt borax bead", back: "Blue, Co(BO₂)₂" },
          { front: "Why is boric acid monobasic?", back: "Each B(OH)₃ accepts one OH⁻ from water, releasing one H₃O⁺." },
          { front: "Bridging bonds in B₂H₆", back: "Two 3-centre–2-electron (banana) bonds" },
          { front: "Borazine formula", back: "B₃N₃H₆ (inorganic benzene)" },
          { front: "Hydrolysis product of diborane", back: "Boric acid and hydrogen" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Boric acid behaves as:",
            options: ["A strong tribasic protonic acid", "A weak monobasic Lewis acid", "A strong base", "An amphoteric hydroxide"],
            answer: 1,
            explain: "It accepts OH⁻ to form [B(OH)₄]⁻.",
          },
          {
            kind: "numeric",
            q: "How many terminal hydrogen atoms are present in B₂H₆?",
            answer: 4,
            explain: "Six H in total, two of them bridging.",
          },
          {
            kind: "truefalse",
            q: "In the borax bead test, cobalt oxide gives a blue bead.",
            answer: true,
            explain: "Cobalt metaborate Co(BO₂)₂ is blue.",
          },
          {
            kind: "fill",
            q: "Borazine, B₃N₃H₆, is called inorganic ___.",
            answer: ["benzene"],
            explain: "It is isoelectronic and isostructural with benzene.",
          },
          {
            kind: "order",
            q: "Order the products formed as boric acid is heated more and more strongly.",
            items: ["H₃BO₃", "HBO₂", "B₂O₃"],
            explain: "Boric acid → metaboric acid (about 370 K) → boric oxide (red heat).",
          },
          {
            kind: "numeric",
            q: "Moles of H₂ formed by complete hydrolysis of 0.25 mol of B₂H₆?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "mol",
            explain: "1 mol B₂H₆ → 6 mol H₂, so 0.25 × 6 = 1.5 mol.",
          },
        ],
      },
      {
        slug: "carbon-family",
        title: "Group 14: The Carbon Family",
        summary: "Oxidation states and inert pair effect, catenation, allotropes of carbon, CO and CO₂, silicon dioxide, silicones, silicates and zeolites.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Carbon, silicon, germanium, tin and lead share the configuration **ns²np²**. Carbon builds all of life, silicon builds rocks and computer chips, and lead was once in every Indian petrol tank before unleaded fuel arrived in 2000.",
          },
          {
            type: "table",
            headers: ["Feature", "Trend / fact"],
            rows: [
              ["Oxidation states", "+4 and +2; +2 more stable down the group (Pb²⁺ ≫ Pb⁴⁺)"],
              ["Catenation", "C ≫ Si > Ge ≈ Sn; Pb shows almost none"],
              ["Bond enthalpy (kJ/mol)", "C–C 348, Si–Si 297, Ge–Ge 260, Sn–Sn 240"],
              ["Redox", "Sn²⁺ is a reducing agent; PbO₂ is a strong oxidising agent"],
              ["Hydrolysis of MCl₄", "SiCl₄ hydrolyses readily; CCl₄ does not (no d orbitals on C)"],
            ],
          },
          { type: "heading", text: "Allotropes of carbon" },
          {
            type: "table",
            headers: ["Allotrope", "Hybridisation", "Key property"],
            rows: [
              ["Diamond", "sp³, 3-D network", "Hardest natural substance, insulator"],
              ["Graphite", "sp², layers 340 pm apart", "Conducts electricity, soft lubricant"],
              ["Fullerene C₆₀", "sp²", "Soccer-ball cage of 20 hexagons and 12 pentagons"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Carbon monoxide",
            md: "CO binds haemoglobin to form carboxyhaemoglobin, about **300 times more stable** than oxyhaemoglobin, so blood stops carrying oxygen. Never run a charcoal angithi or a generator in a closed room.",
          },
          { type: "heading", text: "Silicones and silicates" },
          {
            type: "text",
            md: "Hydrolysis of dimethyldichlorosilane, (CH₃)₂SiCl₂, followed by condensation gives long chains –[Si(CH₃)₂–O]– called **silicones**: water-repellent, heat-stable polymers used in sealants and greases. Trimethylchlorosilane (CH₃)₃SiCl caps the chain ends, and CH₃SiCl₃ gives cross-linked networks. **Silicates** are built from SiO₄⁴⁻ tetrahedra; **zeolites** are aluminosilicates, and ZSM-5 converts alcohols directly into petrol.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "What mass of CO₂ forms when 6 g of charcoal burns completely? $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$",
              "Moles of C $= 6/12 = 0.5$ mol, so 0.5 mol CO₂ forms.",
              "Mass $= 0.5 \\times 44 = 22$ g, volume $= 0.5 \\times 22.4 = 11.2$ L at STP.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Why PbI₄ does not exist",
            md: "Pb⁴⁺ is strongly oxidising (inert pair effect) while I⁻ is a good reducing agent, so Pb⁴⁺ would oxidise iodide to iodine and itself become Pb²⁺. PbCl₄ exists but decomposes easily.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which reagent stops a growing silicone chain?",
                options: ["(CH₃)₂SiCl₂", "(CH₃)₃SiCl", "CH₃SiCl₃", "SiCl₄"],
                answer: 1,
                explain: "With only one Si–Cl, (CH₃)₃SiCl can bond at one end only, so it caps the chain.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Group 14: ns²np²; Pb²⁺ and Sn⁴⁺ are the stable states of lead and tin.",
              "Catenation is greatest for carbon because of the strong C–C bond.",
              "Diamond (sp³) insulates; graphite (sp²) conducts; C₆₀ has 12 pentagons and 20 hexagons.",
              "SiCl₄ hydrolyses, CCl₄ does not.",
              "Silicones come from hydrolysis of alkylchlorosilanes.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is graphite a conductor?", back: "Each sp² carbon has one delocalised electron free to move within the layers." },
          { front: "Number of pentagons in C₆₀", back: "12 (with 20 hexagons)" },
          { front: "Monomer for linear silicones", back: "(CH₃)₂SiCl₂ (dimethyldichlorosilane)" },
          { front: "More stable oxidation state of lead", back: "+2" },
          { front: "Zeolite that converts alcohols to petrol", back: "ZSM-5" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these compounds does not exist?",
            options: ["PbCl₂", "SnCl₄", "PbI₄", "SiCl₄"],
            answer: 2,
            explain: "Pb⁴⁺ would oxidise I⁻.",
          },
          {
            kind: "numeric",
            q: "How many pentagonal faces does a C₆₀ molecule have?",
            answer: 12,
            explain: "A fullerene cage always needs exactly 12 pentagons; C₆₀ also has 20 hexagons.",
          },
          {
            kind: "truefalse",
            q: "CCl₄ is readily hydrolysed by water.",
            answer: false,
            explain: "Carbon has no vacant d orbitals to accept water's lone pair, so CCl₄ is not hydrolysed; SiCl₄ is.",
          },
          {
            kind: "fill",
            q: "In silicone manufacture, (CH₃)₃SiCl acts as a chain ___.",
            answer: ["terminator", "stopper", "capper", "end-capper"],
            explain: "It has only one hydrolysable Cl.",
          },
          {
            kind: "order",
            q: "Arrange in order of decreasing tendency to catenate.",
            items: ["C", "Si", "Ge", "Pb"],
            explain: "Catenation follows E–E bond strength, which falls down the group.",
          },
          {
            kind: "numeric",
            q: "Mass of CO₂ formed when 3 g of carbon burns completely (in g)?",
            answer: 11,
            tolerance: 0.05,
            unit: "g",
            explain: "3/12 = 0.25 mol × 44 = 11 g.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* The d- and f-Block Elements                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "d-and-f-block",
    title: "The d- and f-Block Elements",
    icon: "⚙️",
    description: "Transition metal trends, magnetic moments and colour, K₂Cr₂O₇ and KMnO₄, and the lanthanoids and actinoids.",
    lessons: [
      {
        slug: "transition-properties",
        title: "Transition Elements: Properties and Trends",
        summary: "Electronic configurations and exceptions, variable oxidation states, colour, spin-only magnetic moment, catalysis, alloys and interstitial compounds.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Transition elements have an incompletely filled d subshell in the atom or in a common ion. The 3d series (Sc to Zn) gives us the iron of the Bhilai steel plant, the copper of electric wiring and the titanium of ISRO rocket parts.",
          },
          {
            type: "formula",
            tex: t`(n-1)d^{1-10}\,ns^{1-2} \qquad \mathrm{Cr}: 3d^5 4s^1 \qquad \mathrm{Cu}: 3d^{10} 4s^1`,
            caption: "Half-filled and fully filled d subshells are extra stable",
          },
          {
            type: "callout",
            tone: "note",
            title: "Zn, Cd and Hg",
            md: "These have a full d¹⁰ subshell in the atom and in their common M²⁺ ions, so by definition they are **not** transition elements, although they sit in the d-block.",
          },
          {
            type: "list",
            items: [
              "**Variable oxidation states:** ns and (n−1)d electrons are close in energy. Mn shows every state from +2 to +7.",
              "**High enthalpy of atomisation:** many unpaired d electrons give strong metallic bonding; it peaks near the middle of the series.",
              "**Colour:** d–d transitions absorb visible light; d⁰ and d¹⁰ ions (Sc³⁺, Ti⁴⁺, Zn²⁺, Cu⁺) are colourless.",
              "**Catalysis:** variable oxidation states and surface adsorption (Fe in the Haber process, V₂O₅ in the contact process, Ni in hydrogenation).",
              "**Interstitial compounds and alloys:** small atoms like H, C, N fit into the metal lattice (e.g. steel); similar atomic radii allow alloys like brass.",
            ],
          },
          {
            type: "formula",
            tex: t`\mu_{\text{spin-only}} = \sqrt{n(n+2)}\ \text{BM}`,
            caption: "n = number of unpaired electrons",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Find the spin-only magnetic moment of Fe³⁺ (Z = 26).",
              "Fe: [Ar] 3d⁶ 4s². Remove the two 4s electrons and one 3d electron: Fe³⁺ = [Ar] 3d⁵.",
              "Five d electrons in five orbitals: n = 5 unpaired.",
              "$\\mu = \\sqrt{5 \\times 7} = \\sqrt{35} \\approx 5.92$ BM. Mn²⁺ (also 3d⁵) has the same value.",
            ],
          },
          {
            type: "table",
            headers: ["Ion", "Configuration", "Unpaired e⁻", "Colour in water"],
            rows: [
              ["Sc³⁺", "3d⁰", "0", "Colourless"],
              ["Ti³⁺", "3d¹", "1", "Purple"],
              ["Cr³⁺", "3d³", "3", "Violet"],
              ["Mn²⁺", "3d⁵", "5", "Pale pink"],
              ["Fe³⁺", "3d⁵", "5", "Yellow"],
              ["Cu²⁺", "3d⁹", "1", "Blue"],
              ["Zn²⁺", "3d¹⁰", "0", "Colourless"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Always remove **4s electrons first** when forming ions. Also: Cu⁺ (3d¹⁰) disproportionates in water ($2\\text{Cu}^+ \\rightarrow \\text{Cu}^{2+} + \\text{Cu}$) because the hydration enthalpy of Cu²⁺ is much larger. Copper is the only 3d metal with a positive $E^\\circ(\\text{M}^{2+}/\\text{M})$ (+0.34 V), so it does not liberate H₂ from dilute acids.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Spin-only magnetic moment of Cr³⁺ (in BM, two decimals)?",
                answer: 3.87,
                tolerance: 0.02,
                unit: "BM",
                explain: "Cr³⁺ is 3d³, n = 3, $\\mu = \\sqrt{15} = 3.87$ BM.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Configuration (n−1)d¹⁻¹⁰ ns¹⁻²; Cr and Cu are exceptions.",
              "Zn, Cd and Hg are not transition elements.",
              "μ = √(n(n+2)) BM; d⁵ ions have the maximum 5.92 BM.",
              "Colour arises from d–d transitions; d⁰ and d¹⁰ ions are colourless.",
              "Cu⁺ disproportionates in water.",
            ],
          },
        ],
        flashcards: [
          { front: "Electronic configuration of Cr", back: "[Ar] 3d⁵ 4s¹" },
          { front: "Spin-only formula", back: "μ = √(n(n+2)) BM" },
          { front: "μ of Mn²⁺", back: "5.92 BM (5 unpaired electrons)" },
          { front: "Highest oxidation state of Mn", back: "+7 (as in MnO₄⁻)" },
          { front: "Why is Zn²⁺ colourless?", back: "3d¹⁰: no vacancy for d–d transitions" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Spin-only magnetic moment of Ni²⁺ (Z = 28), in BM?",
            answer: 2.83,
            tolerance: 0.02,
            unit: "BM",
            explain: "Ni²⁺ is 3d⁸ with 2 unpaired electrons: √8 = 2.83 BM.",
          },
          {
            kind: "mcq",
            q: "Which ion is colourless in aqueous solution?",
            options: ["Ti³⁺", "Cu²⁺", "Sc³⁺", "Fe³⁺"],
            answer: 2,
            explain: "Sc³⁺ is d⁰, so no d–d transition is possible.",
          },
          {
            kind: "truefalse",
            q: "Zinc is a transition element according to the IUPAC definition.",
            answer: false,
            explain: "Zn and Zn²⁺ both have a completely filled 3d¹⁰ subshell.",
          },
          {
            kind: "fill",
            q: "The spin-only magnetic moment is μ = √(n(n + ___)) BM, where n is the number of unpaired electrons.",
            answer: ["2"],
            explain: "μ = √(n(n+2)).",
          },
          {
            kind: "order",
            q: "Arrange in order of increasing number of unpaired electrons.",
            items: ["Cu²⁺", "Ni²⁺", "Cr³⁺", "Fe²⁺", "Mn²⁺"],
            difficulty: 2,
            explain: "Cu²⁺ d⁹ (1), Ni²⁺ d⁸ (2), Cr³⁺ d³ (3), Fe²⁺ d⁶ (4), Mn²⁺ d⁵ (5).",
          },
          {
            kind: "mcq",
            q: "Which 3d metal has a positive standard reduction potential E°(M²⁺/M)?",
            options: ["Zn", "Fe", "Ni", "Cu"],
            answer: 3,
            explain: "E°(Cu²⁺/Cu) = +0.34 V.",
          },
        ],
      },
      {
        slug: "dichromate-permanganate",
        title: "Potassium Dichromate and Potassium Permanganate",
        summary: "Preparation from chromite and pyrolusite, the chromate–dichromate equilibrium, oxidising reactions in different media and titration stoichiometry.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "K₂Cr₂O₇ and KMnO₄ are the two oxidising agents you will meet in every redox titration of your practical exam. Their preparations and half-equations are asked in boards; their stoichiometry is a favourite NEET numerical.",
          },
          { type: "heading", text: "Potassium dichromate from chromite ore" },
          {
            type: "formula",
            tex: t`\mathrm{4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \rightarrow 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2}`,
            caption: "Step 1: fuse chromite with soda in air",
          },
          {
            type: "formula",
            tex: t`\mathrm{2Na_2CrO_4 + 2H^+ \rightarrow Na_2Cr_2O_7 + 2Na^+ + H_2O} \qquad \mathrm{Na_2Cr_2O_7 + 2KCl \rightarrow K_2Cr_2O_7 + 2NaCl}`,
            caption: "Step 2: acidify; Step 3: convert to the less soluble potassium salt",
          },
          {
            type: "text",
            md: "Chromate (yellow) and dichromate (orange) interconvert with pH: $2\\text{CrO}_4^{2-} + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O}$. Both contain Cr in the +6 state. Dichromate is two CrO₄ tetrahedra sharing one oxygen (Cr–O–Cr).",
          },
          {
            type: "formula",
            tex: t`\mathrm{Cr_2O_7^{2-} + 14H^+ + 6e^- \rightarrow 2Cr^{3+} + 7H_2O}\qquad E^\circ = 1.33\ \text{V}`,
            caption: "Orange → green; 1 mol dichromate accepts 6 mol electrons",
          },
          { type: "heading", text: "Potassium permanganate from pyrolusite" },
          {
            type: "formula",
            tex: t`\mathrm{2MnO_2 + 4KOH + O_2 \rightarrow 2K_2MnO_4 + 2H_2O} \qquad \mathrm{3MnO_4^{2-} + 4H^+ \rightarrow 2MnO_4^- + MnO_2 + 2H_2O}`,
            caption: "Green manganate disproportionates in acid (industrially it is oxidised electrolytically)",
          },
          {
            type: "table",
            headers: ["Medium", "Half-reaction", "Electrons per MnO₄⁻"],
            rows: [
              ["Acidic", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "5"],
              ["Neutral / faintly alkaline", "MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻", "3"],
              ["Strongly alkaline", "MnO₄⁻ + e⁻ → MnO₄²⁻", "1"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Why not HCl?",
            md: "KMnO₄ titrations are acidified with **dilute H₂SO₄**, never HCl: permanganate would oxidise Cl⁻ to Cl₂ and use up extra titrant. Nitric acid is avoided because it is itself an oxidising agent. KMnO₄ is its own indicator: the first permanent pink marks the end point.",
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "What volume of 0.02 M KMnO₄ oxidises 20 mL of 0.1 M FeSO₄ in acid?",
              "Equation: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$.",
              "Fe²⁺ $= 20 \\times 0.1 = 2$ mmol, so MnO₄⁻ needed $= 2/5 = 0.4$ mmol.",
              "Volume $= 0.4 / 0.02 = 20$ mL.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "How many moles of Fe²⁺ are oxidised by 1 mol of Cr₂O₇²⁻ in acid?",
                options: ["1", "3", "5", "6"],
                answer: 3,
                explain: "Each Cr goes from +6 to +3: 2 × 3 = 6 electrons, and each Fe²⁺ gives one.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "K₂Cr₂O₇: chromite → Na₂CrO₄ → Na₂Cr₂O₇ → K₂Cr₂O₇.",
              "Yellow CrO₄²⁻ ⇌ orange Cr₂O₇²⁻ depending on pH; Cr is +6 in both.",
              "Acidic dichromate takes 6 e⁻; acidic permanganate takes 5 e⁻; neutral permanganate takes 3 e⁻.",
              "Acidify KMnO₄ with H₂SO₄, not HCl.",
              "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O (oxalate titration).",
            ],
          },
        ],
        flashcards: [
          { front: "Ore of chromium used for K₂Cr₂O₇", back: "Chromite, FeCr₂O₄" },
          { front: "Ore of manganese used for KMnO₄", back: "Pyrolusite, MnO₂" },
          { front: "Electrons gained by MnO₄⁻ in acid", back: "5 (Mn +7 → +2)" },
          { front: "Colour change when chromate is acidified", back: "Yellow → orange" },
          { front: "Colour of K₂MnO₄", back: "Green" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Volume (mL) of 0.1 M K₂Cr₂O₇ needed to oxidise 30 mL of 0.2 M Fe²⁺ in acid?",
            answer: 10,
            tolerance: 0.05,
            unit: "mL",
            difficulty: 2,
            explain: "Fe²⁺ = 6 mmol; dichromate = 6/6 = 1 mmol; volume = 1/0.1 = 10 mL.",
          },
          {
            kind: "mcq",
            q: "The oxidation state of Cr in K₂Cr₂O₇ is:",
            options: ["+3", "+4", "+6", "+7"],
            answer: 2,
            explain: "2(+1) + 2x + 7(−2) = 0 → x = +6.",
          },
          {
            kind: "truefalse",
            q: "HCl is the preferred acid for KMnO₄ titrations.",
            answer: false,
            explain: "KMnO₄ oxidises Cl⁻ to Cl₂; dilute H₂SO₄ is used.",
          },
          {
            kind: "fill",
            q: "On adding acid, a yellow chromate solution turns ___.",
            answer: ["orange"],
            explain: "Chromate is converted to orange dichromate.",
          },
          {
            kind: "order",
            q: "Put the steps of KMnO₄ manufacture in order.",
            items: [
              "MnO₂ is fused with KOH in air",
              "Green K₂MnO₄ is formed",
              "Manganate is oxidised (electrolytically or by disproportionation)",
              "Purple KMnO₄ is obtained",
            ],
            explain: "Pyrolusite → manganate (+6) → permanganate (+7).",
          },
          {
            kind: "numeric",
            q: "How many moles of electrons does 1 mol of MnO₄⁻ accept in a neutral medium?",
            answer: 3,
            explain: "MnO₄⁻ → MnO₂: Mn goes from +7 to +4.",
          },
        ],
      },
      {
        slug: "lanthanoids-actinoids",
        title: "Lanthanoids and Actinoids",
        summary: "4f and 5f configurations, oxidation states, the lanthanoid contraction and its consequences, comparison with actinoids and uses.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "The f-block elements fill the inner 4f (lanthanoids, Ce to Lu) and 5f (actinoids, Th to Lr) subshells. India has a special stake here: the monazite sands of the Kerala and Odisha coasts are rich in cerium and thorium, and thorium is the fuel at the heart of India's three-stage nuclear programme.",
          },
          {
            type: "formula",
            tex: t`\text{Lanthanoids: } [\mathrm{Xe}]\,4f^{1-14}\,5d^{0-1}\,6s^2 \qquad \text{Actinoids: } [\mathrm{Rn}]\,5f^{1-14}\,6d^{0-1}\,7s^2`,
          },
          { type: "heading", text: "Oxidation states" },
          {
            type: "text",
            md: "The common state of lanthanoids is **+3**. Others appear when they give an empty, half-filled or full f subshell: Ce⁴⁺ (4f⁰) is a good **oxidising** agent, while Eu²⁺ (4f⁷) and Yb²⁺ (4f¹⁴) are **reducing** agents. Actinoids show a much wider range (U up to +6, Np and Pu up to +7) because 5f, 6d and 7s energies are close.",
          },
          { type: "heading", text: "Lanthanoid contraction" },
          {
            type: "text",
            md: "From La³⁺ (about 103 pm) to Lu³⁺ (about 86 pm) the ionic radius falls steadily. Each added 4f electron shields the extra nuclear charge imperfectly, so the outer electrons are pulled in a little more each time.",
          },
          {
            type: "list",
            items: [
              "**Zr and Hf** have almost identical radii (160 and 159 pm), so they occur together and are very hard to separate.",
              "The second and third transition series resemble each other more closely than the first and second.",
              "**Basicity of Ln(OH)₃ decreases** from La(OH)₃ to Lu(OH)₃ as the cation becomes smaller and more covalent.",
            ],
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Write the configuration of Gd³⁺ (Z = 64) and find its spin-only moment.",
              "Gd: [Xe] 4f⁷ 5d¹ 6s². Removing 6s² and 5d¹ gives Gd³⁺ = [Xe] 4f⁷.",
              "Seven f electrons in seven orbitals: n = 7 unpaired.",
              "$\\mu = \\sqrt{7 \\times 9} = \\sqrt{63} \\approx 7.94$ BM.",
            ],
          },
          {
            type: "table",
            headers: ["Feature", "Lanthanoids", "Actinoids"],
            rows: [
              ["Orbital filled", "4f", "5f"],
              ["Oxidation states", "Mostly +3", "+3 to +7"],
              ["Radioactivity", "Only Pm", "All radioactive"],
              ["Contraction", "Lanthanoid contraction", "Larger (5f shields even more poorly)"],
              ["Complex formation", "Less", "Greater"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Many students write that basic character **increases** across the lanthanoids. It **decreases**: smaller Ln³⁺ ions hold OH⁻ more covalently. Also, the Zr–Hf similarity is a consequence of lanthanoid contraction, not of their being in the same group alone.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Uses",
            md: "**Mischmetall** (about 95% lanthanoid metals, 5% iron, with traces of S, C, Ca and Al) is used in lighter flints and in magnesium alloys for bullets and shells. Lanthanoid oxides polish glass and colour television screens; uranium and plutonium fuel nuclear reactors.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which lanthanoid ion is a good oxidising agent?",
                options: ["Eu²⁺", "Yb²⁺", "Ce⁴⁺", "La³⁺"],
                answer: 2,
                explain: "Ce⁴⁺ (4f⁰) readily gains an electron to reach the common +3 state.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Lanthanoids: mainly +3; Ce⁴⁺ oxidises, Eu²⁺ and Yb²⁺ reduce.",
              "Lanthanoid contraction: steady fall in size from La³⁺ to Lu³⁺ due to poor 4f shielding.",
              "Consequences: Zr ≈ Hf in size, falling basicity of Ln(OH)₃.",
              "Actinoids are all radioactive and show more oxidation states.",
              "Mischmetall is used in lighter flints.",
            ],
          },
        ],
        flashcards: [
          { front: "Cause of lanthanoid contraction", back: "Imperfect shielding of nuclear charge by 4f electrons" },
          { front: "Pair of elements with nearly equal radii due to lanthanoid contraction", back: "Zr and Hf" },
          { front: "Configuration of Gd³⁺", back: "[Xe] 4f⁷" },
          { front: "Common oxidation state of lanthanoids", back: "+3" },
          { front: "Composition of mischmetall", back: "≈95% lanthanoid metals, ≈5% Fe, traces of S, C, Ca, Al" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which pair has almost the same atomic radius?",
            options: ["Ti and Zr", "Zr and Hf", "Sc and Y", "Cu and Ag"],
            answer: 1,
            explain: "Lanthanoid contraction cancels the expected increase from Zr to Hf.",
          },
          {
            kind: "numeric",
            q: "Number of unpaired electrons in Gd³⁺?",
            answer: 7,
            explain: "Gd³⁺ is 4f⁷.",
          },
          {
            kind: "truefalse",
            q: "The basic strength of the hydroxides increases from La(OH)₃ to Lu(OH)₃.",
            answer: false,
            explain: "It decreases as the ions become smaller.",
          },
          {
            kind: "fill",
            q: "The alloy used in cigarette-lighter flints is called ___.",
            answer: ["mischmetall", "mischmetal", "misch metal", "misch metall"],
            explain: "Mischmetall is mostly lanthanoid metals with about 5% iron.",
          },
          {
            kind: "order",
            q: "Arrange in order of decreasing ionic radius.",
            items: ["La³⁺", "Ce³⁺", "Nd³⁺", "Gd³⁺", "Lu³⁺"],
            explain: "Ionic radius falls steadily across the series (lanthanoid contraction).",
          },
          {
            kind: "mcq",
            q: "Actinoids show a wider range of oxidation states than lanthanoids mainly because:",
            options: [
              "5f, 6d and 7s orbitals are close in energy",
              "They are radioactive",
              "They have smaller atoms",
              "Their 4f orbitals are buried",
            ],
            answer: 0,
            difficulty: 2,
            explain: "Small energy gaps let more electrons take part in bonding.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Coordination Compounds                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "coordination-compounds",
    title: "Coordination Compounds",
    icon: "💠",
    description: "Werner's theory, ligands and IUPAC names, isomerism, valence bond and crystal field theories, metal carbonyls and applications.",
    lessons: [
      {
        slug: "werner-nomenclature",
        title: "Werner's Theory, Ligands and Nomenclature",
        summary: "Primary and secondary valence, types of ligands, coordination number, oxidation state of the central atom and IUPAC naming rules.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Haemoglobin in your blood, chlorophyll in a neem leaf and the EDTA used to test the hardness of Bengaluru's borewell water are all **coordination compounds**: a central metal atom or ion bonded to a set of surrounding molecules or ions called ligands.",
          },
          { type: "heading", text: "Werner's theory (1898)" },
          {
            type: "list",
            items: [
              "**Primary valence** = oxidation state; ionisable, satisfied by negative ions.",
              "**Secondary valence** = coordination number; non-ionisable, directed in space and so fixes the shape.",
              "Evidence: adding AgNO₃ precipitates only the chloride outside the coordination sphere.",
            ],
          },
          {
            type: "table",
            headers: ["Formula", "Complex", "Moles AgCl per mole"],
            rows: [
              ["CoCl₃·6NH₃ (yellow)", "[Co(NH₃)₆]Cl₃", "3"],
              ["CoCl₃·5NH₃ (purple)", "[Co(NH₃)₅Cl]Cl₂", "2"],
              ["CoCl₃·4NH₃ (green / violet)", "[Co(NH₃)₄Cl₂]Cl", "1"],
            ],
          },
          { type: "heading", text: "Ligands" },
          {
            type: "table",
            headers: ["Type", "Examples"],
            rows: [
              ["Monodentate", "Cl⁻, H₂O, NH₃, CN⁻, CO"],
              ["Didentate", "Ethane-1,2-diamine (en), oxalate C₂O₄²⁻"],
              ["Hexadentate", "EDTA⁴⁻ (2 N + 4 O donors)"],
              ["Ambidentate", "NO₂⁻ (N) / ONO⁻ (O); SCN⁻ (S) / NCS⁻ (N)"],
            ],
          },
          { type: "heading", text: "IUPAC naming rules" },
          {
            type: "list",
            ordered: true,
            items: [
              "Name the cation first, then the anion.",
              "Inside the sphere, list ligands **alphabetically**, ignoring multiplying prefixes (di-, tri-, bis-, tris-).",
              "Anionic ligands end in -o (chlorido, cyanido, oxalato, hydroxido); neutral ones keep special names: aqua, ammine, carbonyl, nitrosyl.",
              "Give the metal's oxidation state in Roman numerals. In an anionic complex the metal ends in -ate: ferrate, cuprate, argentate, aurate, plumbate, stannate.",
            ],
          },
          { type: "heading", text: "Worked examples" },
          {
            type: "list",
            items: [
              "[Co(NH₃)₄Cl₂]Cl: $x + 4(0) + 2(-1) = +1 \\Rightarrow x = +3$. Name: **tetraamminedichloridocobalt(III) chloride**.",
              "K₃[Fe(CN)₆]: $x + 6(-1) = -3 \\Rightarrow x = +3$. Name: **potassium hexacyanidoferrate(III)**.",
              "[Pt(NH₃)₂Cl(NO₂)]: Pt is +2. Name: **diamminechloridonitrito-N-platinum(II)**.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Naming traps",
            md: "NH₃ as a ligand is **ammine** (double m); **amine** is an organic group. Alphabetical order ignores 'di' and 'tetra', so tetraammine (a) comes before dichlorido (c). And the anion is named with -ate: K₄[Fe(CN)₆] is hexacyanido**ferrate**(II), not hexacyanidoiron(II).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many moles of AgCl are precipitated when 1 mol of [Co(NH₃)₅Cl]Cl₂ is treated with excess AgNO₃?",
                answer: 2,
                unit: "mol",
                explain: "Only the two chloride ions outside the coordination sphere are ionisable.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Primary valence = oxidation state (ionisable); secondary = coordination number (non-ionisable).",
              "Ligands: mono-, di-, polydentate (EDTA is hexadentate) and ambidentate.",
              "Name ligands alphabetically, then the metal with its oxidation state; anionic complexes end in -ate.",
              "Only counter ions outside [ ] precipitate with AgNO₃.",
            ],
          },
        ],
        flashcards: [
          { front: "Denticity of EDTA⁴⁻", back: "6 (hexadentate)" },
          { front: "Ambidentate ligand example", back: "SCN⁻ (via S) / NCS⁻ (via N); NO₂⁻ / ONO⁻" },
          { front: "IUPAC name of K₄[Fe(CN)₆]", back: "Potassium hexacyanidoferrate(II)" },
          { front: "Ligand name for H₂O", back: "Aqua" },
          { front: "Werner's secondary valence", back: "Coordination number" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the oxidation state of Co in [Co(en)₂Cl₂]⁺?",
            answer: 3,
            explain: "en is neutral: x + 0 + 2(−1) = +1 → x = +3.",
          },
          {
            kind: "mcq",
            q: "Which ligand is ambidentate?",
            options: ["NH₃", "SCN⁻", "en", "H₂O"],
            answer: 1,
            explain: "SCN⁻ can bind through S (thiocyanato-S) or N (thiocyanato-N).",
          },
          {
            kind: "fill",
            q: "In the IUPAC name of an anionic complex of iron, the metal is called ___.",
            answer: ["ferrate"],
            explain: "Latin root + -ate, e.g. hexacyanidoferrate(III).",
          },
          {
            kind: "truefalse",
            q: "Prefixes such as 'di' and 'tetra' are considered when arranging ligand names alphabetically.",
            answer: false,
            explain: "Multiplying prefixes are ignored for alphabetical order.",
          },
          {
            kind: "order",
            q: "Arrange the cobalt ammines in decreasing number of ionisable chloride ions.",
            items: ["[Co(NH₃)₆]Cl₃", "[Co(NH₃)₅Cl]Cl₂", "[Co(NH₃)₄Cl₂]Cl"],
            explain: "3, 2 and 1 chlorides lie outside the coordination sphere.",
          },
          {
            kind: "numeric",
            q: "Coordination number of Fe in [Fe(C₂O₄)₃]³⁻?",
            answer: 6,
            difficulty: 2,
            explain: "Three didentate oxalate ligands give 3 × 2 = 6 donor atoms.",
          },
        ],
      },
      {
        slug: "isomerism-vbt",
        title: "Isomerism and Valence Bond Theory",
        summary: "Structural and stereoisomerism in complexes, and how hybridisation explains shape and magnetism of inner- and outer-orbital complexes.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Two complexes with the same formula can differ in colour, conductivity or even in how they rotate polarised light. Counting isomers and predicting magnetic behaviour are JEE and NEET staples.",
          },
          { type: "heading", text: "Structural isomerism" },
          {
            type: "table",
            headers: ["Type", "What changes", "Example pair"],
            rows: [
              ["Linkage", "Donor atom of an ambidentate ligand", "[Co(NH₃)₅(NO₂)]Cl₂ (yellow) / [Co(NH₃)₅(ONO)]Cl₂ (red)"],
              ["Ionisation", "Ion inside vs outside the sphere", "[Co(NH₃)₅SO₄]Br / [Co(NH₃)₅Br]SO₄"],
              ["Hydrate (solvate)", "Water inside vs outside", "[Cr(H₂O)₆]Cl₃ (violet) / [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green)"],
              ["Coordination", "Ligands swap between cation and anion", "[Co(NH₃)₆][Cr(CN)₆] / [Cr(NH₃)₆][Co(CN)₆]"],
            ],
          },
          { type: "heading", text: "Stereoisomerism" },
          {
            type: "list",
            items: [
              "**Geometrical:** square planar [MA₂B₂] (e.g. [Pt(NH₃)₂Cl₂]) has cis and trans forms; octahedral [MA₄B₂] has cis and trans; [MA₃B₃] has **fac** and **mer**.",
              "Tetrahedral complexes show **no** geometrical isomerism: all positions are adjacent.",
              "**Optical:** non-superimposable mirror images. [Co(en)₃]³⁺ exists as d and l forms; **cis**-[Co(en)₂Cl₂]⁺ is optically active, trans is not (it has a mirror plane).",
            ],
          },
          { type: "heading", text: "Valence bond theory" },
          {
            type: "table",
            headers: ["Complex", "Hybridisation", "Shape", "Unpaired e⁻"],
            rows: [
              ["[Co(NH₃)₆]³⁺", "d²sp³ (inner orbital)", "Octahedral", "0 (diamagnetic)"],
              ["[CoF₆]³⁻", "sp³d² (outer orbital)", "Octahedral", "4 (paramagnetic)"],
              ["[Ni(CN)₄]²⁻", "dsp²", "Square planar", "0"],
              ["[NiCl₄]²⁻", "sp³", "Tetrahedral", "2"],
              ["[Ni(CO)₄]", "sp³", "Tetrahedral", "0"],
            ],
          },
          { type: "heading", text: "Worked example" },
          {
            type: "list",
            ordered: true,
            items: [
              "Predict the hybridisation and magnetic moment of [Fe(CN)₆]³⁻.",
              "Fe³⁺ is 3d⁵. CN⁻ is a strong-field ligand, so the five electrons pair up in three 3d orbitals: one unpaired electron remains.",
              "Two empty 3d, one 4s and three 4p orbitals mix: **d²sp³**, octahedral, inner-orbital complex.",
              "$\\mu = \\sqrt{1 \\times 3} = 1.73$ BM.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Nickel trap",
            md: "Both [NiCl₄]²⁻ and [Ni(CN)₄]²⁻ contain Ni²⁺ (3d⁸). Weak-field Cl⁻ leaves 2 unpaired electrons (sp³, tetrahedral, paramagnetic); strong-field CN⁻ forces pairing (dsp², square planar, diamagnetic). In [Ni(CO)₄], Ni is in the 0 state.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many geometrical isomers does [Co(NH₃)₃Cl₃] have?",
                answer: 2,
                explain: "fac and mer.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Limits of VBT",
            md: "VBT does not explain colour, cannot reliably predict whether a 4-coordinate complex is tetrahedral or square planar, and does not distinguish weak and strong ligands quantitatively. Crystal field theory fills these gaps.",
          },
          {
            type: "keypoints",
            items: [
              "Structural isomers: linkage, ionisation, hydrate, coordination.",
              "MA₂B₂ square planar and MA₄B₂ octahedral show cis/trans; MA₃B₃ shows fac/mer.",
              "cis-[Co(en)₂Cl₂]⁺ and [Co(en)₃]³⁺ are optically active.",
              "Strong-field ligands give inner-orbital (d²sp³, low-spin) complexes; weak-field give outer-orbital (sp³d²).",
            ],
          },
        ],
        flashcards: [
          { front: "Hybridisation of [Ni(CN)₄]²⁻", back: "dsp², square planar, diamagnetic" },
          { front: "Hybridisation of [CoF₆]³⁻", back: "sp³d², outer orbital, 4 unpaired e⁻" },
          { front: "Isomers of [MA₃B₃]", back: "fac and mer" },
          { front: "Which form of [Co(en)₂Cl₂]⁺ is optically active?", back: "The cis form" },
          { front: "Linkage isomerism needs…", back: "An ambidentate ligand (NO₂⁻, SCN⁻)" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Number of unpaired electrons in [CoF₆]³⁻?",
            answer: 4,
            explain: "Co³⁺ 3d⁶ with weak-field F⁻: high-spin t₂g⁴ eg² with 4 unpaired.",
          },
          {
            kind: "mcq",
            q: "Which complex is optically active?",
            options: ["trans-[Co(en)₂Cl₂]⁺", "cis-[Co(en)₂Cl₂]⁺", "[Pt(NH₃)₂Cl₂]", "[Co(NH₃)₆]³⁺"],
            answer: 1,
            difficulty: 2,
            explain: "The cis isomer has no mirror plane; the trans isomer does.",
          },
          {
            kind: "truefalse",
            q: "A tetrahedral complex [MA₂B₂] shows cis–trans isomerism.",
            answer: false,
            explain: "All four positions of a tetrahedron are mutually adjacent.",
          },
          {
            kind: "fill",
            q: "[Co(NH₃)₅SO₄]Br and [Co(NH₃)₅Br]SO₄ are ___ isomers.",
            answer: ["ionisation", "ionization"],
            explain: "They give different ions in solution (Br⁻ vs SO₄²⁻).",
          },
          {
            kind: "mcq",
            q: "The hybridisation of Ni in [Ni(CN)₄]²⁻ is:",
            options: ["sp³", "dsp²", "sp³d²", "d²sp³"],
            answer: 1,
            explain: "CN⁻ pairs the 3d⁸ electrons, freeing one 3d orbital for dsp².",
          },
          {
            kind: "numeric",
            q: "Spin-only magnetic moment of [Fe(CN)₆]³⁻, in BM?",
            answer: 1.73,
            tolerance: 0.02,
            unit: "BM",
            explain: "One unpaired electron: √3 = 1.73 BM.",
          },
        ],
      },
      {
        slug: "crystal-field-theory",
        title: "Crystal Field Theory, Colour and Applications",
        summary: "d-orbital splitting in octahedral and tetrahedral fields, the spectrochemical series, high- and low-spin complexes, CFSE, colour, metal carbonyls and uses.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Crystal field theory treats ligands as point charges. As they approach, the five d orbitals, equal in energy in a free ion, split into groups. That splitting explains colour and magnetism in one stroke.",
          },
          {
            type: "formula",
            tex: t`\text{Octahedral: } t_{2g}\,(d_{xy}, d_{yz}, d_{xz})\ \text{at } -0.4\Delta_o \qquad e_g\,(d_{x^2-y^2}, d_{z^2})\ \text{at } +0.6\Delta_o`,
            caption: "eg orbitals point at the ligands and are raised; t₂g lie between them and are lowered",
          },
          {
            type: "formula",
            tex: t`\mathrm{I^- < Br^- < SCN^- < Cl^- < S^{2-} < F^- < OH^- < C_2O_4^{2-} < H_2O < NCS^- < edta^{4-} < NH_3 < en < CN^- < CO}`,
            caption: "Spectrochemical series: increasing field strength (Δo)",
          },
          { type: "heading", text: "High spin or low spin?" },
          {
            type: "table",
            headers: ["Condition", "Result for d⁴", "Ligand type"],
            rows: [
              ["Δo < P (pairing energy)", "t₂g³ eg¹, high spin, 4 unpaired", "Weak field (F⁻, H₂O)"],
              ["Δo > P", "t₂g⁴ eg⁰, low spin, 2 unpaired", "Strong field (CN⁻, CO)"],
            ],
          },
          {
            type: "text",
            md: "In a **tetrahedral** field the splitting is inverted (e below t₂) and smaller: $\\Delta_t = \\tfrac49\\Delta_o$. It is almost never larger than P, so tetrahedral complexes are **high spin**.",
          },
          {
            type: "formula",
            tex: t`\text{CFSE (octahedral)} = (-0.4\,x + 0.6\,y)\,\Delta_o`,
            caption: "x = electrons in t₂g, y = electrons in eg (pairing energy terms added separately)",
          },
          { type: "heading", text: "Worked example: colour and Δo" },
          {
            type: "list",
            ordered: true,
            items: [
              "[Ti(H₂O)₆]³⁺ (d¹) absorbs at 498 nm (blue-green) and so appears violet. Find Δo in kJ/mol.",
              "$E = hc/\\lambda = (6.626\\times10^{-34})(3.0\\times10^{8}) / (498\\times10^{-9}) = 3.99\\times10^{-19}$ J per ion.",
              "Per mole: $3.99\\times10^{-19} \\times 6.022\\times10^{23} = 2.40\\times10^{5}$ J/mol.",
              "Δo ≈ **240 kJ/mol**. The electron jumps t₂g¹ → eg¹; we see the complementary colour.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Colour traps",
            md: "Anhydrous CuSO₄ is **white** (no ligand field from water); CuSO₄·5H₂O is blue. A complex shows the colour **complementary** to the one it absorbs. Replacing H₂O by stronger NH₃ or en increases Δo and shifts the absorption to shorter wavelength: green [Ni(H₂O)₆]²⁺ turns blue-violet with en.",
          },
          { type: "heading", text: "Metal carbonyls" },
          {
            type: "text",
            md: "In Ni(CO)₄ (tetrahedral), Fe(CO)₅ (trigonal bipyramidal) and Cr(CO)₆ (octahedral), CO donates a lone pair to the metal (σ bond) and the metal donates d electrons back into empty π* orbitals of CO (π back bond). This **synergic bonding** strengthens M–C and weakens C≡O.",
          },
          {
            type: "list",
            items: [
              "**Analysis:** EDTA titration estimates Ca²⁺ and Mg²⁺ (water hardness); dimethylglyoxime detects Ni²⁺.",
              "**Metallurgy:** Mond process purifies Ni via Ni(CO)₄; gold and silver are leached as [Au(CN)₂]⁻ and [Ag(CN)₂]⁻.",
              "**Biology:** chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (Co).",
              "**Medicine and catalysis:** cisplatin cis-[Pt(NH₃)₂Cl₂] treats cancer; Wilkinson's catalyst [(Ph₃P)₃RhCl] hydrogenates alkenes.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "CFSE of an octahedral d³ ion, in units of Δo?",
                answer: -1.2,
                tolerance: 0.01,
                unit: "Δo",
                explain: "t₂g³: 3 × (−0.4) = −1.2 Δo.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Octahedral: t₂g lowered by 0.4Δo, eg raised by 0.6Δo; tetrahedral Δt = 4/9 Δo.",
              "Strong-field ligands (CN⁻, CO) give low-spin complexes when Δo > P.",
              "Colour = complementary to light absorbed in a d–d transition.",
              "Synergic σ donation and π back donation bond CO to metals.",
              "Uses: EDTA titration, Mond process, cisplatin, Wilkinson's catalyst.",
            ],
          },
        ],
        flashcards: [
          { front: "Strongest field ligand in the spectrochemical series", back: "CO" },
          { front: "Relation between Δt and Δo", back: "Δt = (4/9) Δo" },
          { front: "Why is anhydrous CuSO₄ white?", back: "Without water ligands there is no d-orbital splitting in the visible range." },
          { front: "Synergic bonding", back: "σ donation from CO to M plus π back donation from M d orbitals to CO π*" },
          { front: "Anticancer coordination compound", back: "Cisplatin, cis-[Pt(NH₃)₂Cl₂]" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which ligand produces the largest crystal field splitting?",
            options: ["Cl⁻", "H₂O", "NH₃", "CO"],
            answer: 3,
            explain: "CO is at the strong-field end of the spectrochemical series.",
          },
          {
            kind: "truefalse",
            q: "Tetrahedral complexes are usually low spin.",
            answer: false,
            explain: "Δt is small (4/9 Δo), so pairing is rarely favourable.",
          },
          {
            kind: "fill",
            q: "For the same metal and ligands, Δt = ___ Δo.",
            answer: ["4/9", "0.44", "0.444"],
            explain: "Fewer ligands, not pointing directly at the orbitals.",
          },
          {
            kind: "order",
            q: "Arrange these ligands in increasing field strength.",
            items: ["I⁻", "Cl⁻", "F⁻", "H₂O", "NH₃", "en", "CN⁻"],
            explain: "Part of the spectrochemical series.",
          },
          {
            kind: "numeric",
            q: "A complex absorbs light of energy 3.99 × 10⁻¹⁹ J per ion. What is Δo in kJ/mol (nearest whole number)?",
            answer: 240,
            tolerance: 2,
            unit: "kJ/mol",
            difficulty: 3,
            explain: "3.99 × 10⁻¹⁹ × 6.022 × 10²³ = 2.40 × 10⁵ J/mol = 240 kJ/mol.",
          },
          {
            kind: "mcq",
            q: "Nickel is purified by the Mond process through:",
            options: ["[Ni(CN)₄]²⁻", "[Ni(NH₃)₆]²⁺", "Ni(CO)₄", "Nickel dimethylglyoxime"],
            answer: 2,
            explain: "Impure Ni forms volatile Ni(CO)₄, which decomposes on stronger heating to pure Ni.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "s-Block Elements": "s-block-elements",
  "p-Block Elements (Groups 13 and 14)": "p-block-13-14",
  "p-Block Elements": "p-block-13-14",
  "The d- and f-Block Elements": "d-and-f-block",
  "Coordination Compounds": "coordination-compounds",
  "Co-ordination Compounds": "coordination-compounds",
};
