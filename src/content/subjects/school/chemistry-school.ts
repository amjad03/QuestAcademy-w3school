import type { Subject } from "@/content/types";

export const chemistrySchool: Subject = {
  slug: "chemistry-school",
  title: "Chemistry",
  world: "school",
  icon: "⚗️",
  colors: ["#7c3aed", "#06b6d4"],
  tagline: "Discover what everything is made of — and how it changes.",
  description:
    "From melting ice to fizzing antacids, chemistry explains the stuff of everyday life. Explore states of matter, peek inside atoms, navigate the periodic table, balance equations like a pro, test acids and bases, and meet the carbon compounds that build living things.",
  levels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
  stages: ["middle", "secondary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "matter-and-states",
      title: "Matter & Its States",
      icon: "🧊",
      description: "Solids, liquids, gases — how particles behave, how matter changes state, and how mixtures are separated.",
      lessons: [
        {
          slug: "states-of-matter",
          title: "Solids, Liquids & Gases",
          summary: "The particle model explains why ice holds its shape, water flows, and steam spreads everywhere.",
          minutes: 12,
          xp: 25,
          blocks: [
            { type: "illustration", emoji: "🧊💧♨️", caption: "One substance, three states: ice, water, steam." },
            {
              type: "text",
              md: "Leave an ice cube on a sunny windowsill and you will watch chemistry's oldest magic trick: a solid becomes a liquid, and eventually that liquid disappears into the air. Nothing was destroyed — the **particles** simply changed how they move.\n\n**Matter** is anything that has mass and takes up space. Your desk, the air you breathe, and the juice in your glass are all matter.",
            },
            { type: "heading", text: "The particle model" },
            {
              type: "table",
              headers: ["Property", "Solid", "Liquid", "Gas"],
              rows: [
                ["Particle arrangement", "Tightly packed, regular pattern", "Close but jumbled", "Far apart, random"],
                ["Particle movement", "Vibrate in place", "Slide past each other", "Zoom freely in all directions"],
                ["Shape", "Fixed", "Takes shape of container", "Fills whole container"],
                ["Volume", "Fixed", "Fixed", "Not fixed"],
                ["Compressible?", "Almost not", "Very slightly", "Easily"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The fourth state",
              md: "Heat a gas enough and electrons are torn off its atoms, forming **plasma**. Lightning, neon signs and the Sun are all plasma — it is actually the most common state of visible matter in the universe!",
            },
            { type: "heading", text: "Changing state" },
            {
              type: "list",
              items: [
                "**Melting** — solid → liquid (ice melts at 0 °C).",
                "**Freezing** — liquid → solid.",
                "**Evaporation / boiling** — liquid → gas (water boils at 100 °C at sea level).",
                "**Condensation** — gas → liquid (dew on grass, fog on a cold mirror).",
                "**Sublimation** — solid → gas directly (dry ice, camphor, naphthalene balls).",
                "**Deposition** — gas → solid directly (frost forming on a window).",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Why sweating cools you",
              md: "Evaporation happens at any temperature, from the surface of a liquid. The fastest particles escape first, taking energy with them — so the liquid left behind (and your skin) gets cooler.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Mothballs slowly shrink in a cupboard without leaving any liquid. Which change is this?",
                  options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                  answer: 2,
                  explain: "Naphthalene turns straight from solid to gas — that is sublimation.",
                },
              ],
            },
            {
              type: "text",
              md: "During melting or boiling, the temperature stays **constant** even though you keep heating. The energy goes into breaking the attractions between particles rather than speeding them up. This hidden energy is called **latent heat**.",
            },
            {
              type: "keypoints",
              items: [
                "Matter has mass and occupies space.",
                "Particles in solids vibrate; in liquids they slide; in gases they move freely.",
                "Heating gives particles energy to overcome attractions and change state.",
                "Temperature stays constant during a change of state (latent heat).",
              ],
            },
          ],
          flashcards: [
            { front: "What is matter?", back: "Anything that has mass and takes up space." },
            { front: "Sublimation", back: "A change directly from solid to gas, e.g. dry ice." },
            { front: "Latent heat", back: "Energy absorbed or released during a change of state without changing temperature." },
            { front: "Why are gases easy to compress?", back: "Their particles are far apart, with lots of empty space between them." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which state has a fixed volume but no fixed shape?",
              options: ["Solid", "Liquid", "Gas", "Plasma"],
              answer: 1,
              explain: "Liquid particles stay close (fixed volume) but can slide around (no fixed shape).",
            },
            {
              kind: "truefalse",
              q: "While ice is melting, its temperature keeps rising steadily.",
              answer: false,
              explain: "The temperature stays at 0 °C until all the ice has melted; the energy is used as latent heat.",
            },
            {
              kind: "fill",
              q: "Water droplets forming on the outside of a cold glass is called ___.",
              answer: ["condensation"],
              explain: "Water vapour in the air cools on the glass and turns back into a liquid.",
            },
            {
              kind: "order",
              q: "Arrange from particles closest together to farthest apart.",
              items: ["Solid", "Liquid", "Gas"],
              explain: "Solids are tightly packed, liquids are close but jumbled, gases are widely spaced.",
            },
            {
              kind: "numeric",
              q: "At sea level, at what temperature (°C) does pure water boil?",
              answer: 100,
              unit: "°C",
              explain: "Pure water boils at 100 °C at standard atmospheric pressure.",
            },
          ],
        },
        {
          slug: "pure-substances-and-mixtures",
          title: "Pure Substances & Mixtures",
          summary: "Tell elements, compounds and mixtures apart — and learn clever ways to separate mixtures.",
          minutes: 14,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Seawater looks like a single liquid, yet you can boil it dry and find salt left behind. Clearly it was hiding something! Chemists sort all matter into **pure substances** and **mixtures**.",
            },
            {
              type: "table",
              headers: ["Type", "What it is", "Examples"],
              rows: [
                ["Element", "Made of only one kind of atom", "Oxygen, iron, gold, carbon"],
                ["Compound", "Two or more elements **chemically joined** in a fixed ratio", "Water (H₂O), table salt (NaCl), carbon dioxide (CO₂)"],
                ["Mixture", "Substances physically mixed, not chemically joined, in any ratio", "Air, salad, seawater, brass"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Compound vs mixture",
              md: "Sodium is an explosive metal and chlorine is a poisonous gas — yet **chemically joined** they make harmless table salt. A compound has totally new properties. In a mixture, each part keeps its own properties (iron filings in sand are still magnetic).",
            },
            { type: "heading", text: "Homogeneous or heterogeneous?" },
            {
              type: "text",
              md: "A **homogeneous** mixture looks the same throughout — sugar dissolved in tea, or air. These are also called **solutions**. A **heterogeneous** mixture has visible separate parts — muesli, muddy water, oil floating on water.",
            },
            { type: "heading", text: "Separation toolkit" },
            {
              type: "table",
              headers: ["Method", "Separates", "Everyday example"],
              rows: [
                ["Filtration", "Insoluble solid from a liquid", "Tea leaves from tea"],
                ["Evaporation", "Dissolved solid from a solution", "Salt pans by the sea"],
                ["Distillation", "Liquid from a solution, or liquids with different boiling points", "Making drinking water from seawater"],
                ["Chromatography", "Different dyes or pigments", "Testing which pens made an ink mark"],
                ["Magnetic separation", "Magnetic from non-magnetic solids", "Scrap yards sorting iron"],
                ["Centrifugation", "Dense particles from a liquid by spinning", "Separating cream from milk"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You want pure water from salty water. Which method collects the water itself?",
                  options: ["Filtration", "Evaporation", "Distillation", "Magnetic separation"],
                  answer: 2,
                  explain: "Distillation boils off the water and condenses the vapour so you collect it. Evaporation would lose the water to the air.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Elements have one type of atom; compounds have elements chemically bonded in fixed ratios.",
                "Mixtures can be separated by physical methods because their parts are not bonded.",
                "Solutions are homogeneous mixtures.",
                "Choose the separation method based on the property that differs (size, solubility, boiling point, magnetism).",
              ],
            },
          ],
          flashcards: [
            { front: "Element", back: "A pure substance made of only one kind of atom." },
            { front: "Compound", back: "Two or more elements chemically combined in a fixed ratio." },
            { front: "Homogeneous mixture", back: "A uniform mixture, such as a solution (salt water)." },
            { front: "Chromatography separates…", back: "Different dissolved substances, such as the dyes in ink." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which of these is a compound?",
              options: ["Air", "Oxygen", "Carbon dioxide", "Brass"],
              answer: 2,
              explain: "CO₂ is carbon and oxygen chemically joined in a fixed 1:2 ratio. Air and brass are mixtures; oxygen is an element.",
            },
            {
              kind: "multi",
              q: "Select all the heterogeneous mixtures.",
              options: ["Muddy water", "Sugar solution", "Oil and water", "Granola"],
              answers: [0, 2, 3],
              explain: "Sugar solution looks uniform, so it is homogeneous. The others have visibly separate parts.",
            },
            {
              kind: "truefalse",
              q: "A compound has the same properties as the elements it is made from.",
              answer: false,
              explain: "Compounds have new properties — sodium and chlorine are dangerous, but sodium chloride is table salt.",
            },
            {
              kind: "fill",
              q: "Sand can be removed from water by ___.",
              answer: ["filtration", "filtering"],
              explain: "Sand is insoluble, so filter paper traps it while the water passes through.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "atoms-molecules-periodic-table",
      title: "Atoms, Molecules & the Periodic Table",
      icon: "⚛️",
      description: "Zoom into the atom, build molecules and formulae, and explore the map of all elements.",
      lessons: [
        {
          slug: "inside-the-atom",
          title: "Inside the Atom",
          summary: "Protons, neutrons and electrons — and how their numbers define every element.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "⚛️", caption: "A tiny nucleus surrounded by shells of electrons." },
            {
              type: "text",
              md: "If an atom were blown up to the size of a football stadium, its **nucleus** would be a marble on the centre spot — and the electrons would be specks buzzing around the stands. Atoms are mostly empty space!",
            },
            {
              type: "table",
              headers: ["Particle", "Charge", "Relative mass", "Where?"],
              rows: [
                ["Proton", "+1", "1", "Nucleus"],
                ["Neutron", "0", "1", "Nucleus"],
                ["Electron", "−1", "about 1/1836", "Shells around the nucleus"],
              ],
            },
            { type: "heading", text: "Two key numbers" },
            {
              type: "formula",
              tex: "\\text{Mass number } (A) = \\text{protons} + \\text{neutrons}",
              caption: "Atomic number (Z) = number of protons.",
            },
            {
              type: "text",
              md: "The **atomic number** is an element's ID card: every carbon atom has 6 protons, every oxygen atom has 8. In a neutral atom, electrons = protons, so the charges cancel.\n\nSodium-23 has $Z = 11$ and $A = 23$, so it has 11 protons, 11 electrons and $23 - 11 = 12$ neutrons.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Isotopes",
              md: "Atoms of the same element with different numbers of neutrons are **isotopes**. Carbon-12 and carbon-14 are both carbon; carbon-14 is radioactive and lets archaeologists date ancient bones and wood.",
            },
            { type: "heading", text: "Electron shells" },
            {
              type: "text",
              md: "Electrons fill shells from the inside out. For the first 20 elements, the shells hold **2, 8, 8** (then the next 2). Sodium (11 electrons) is written **2, 8, 1**. The outermost electrons — the **valence electrons** — decide how an atom reacts.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Magnesium has 12 electrons. Its electron arrangement is 2, 8, ___.",
                  answer: ["2"],
                  explain: "2 + 8 = 10, leaving 2 electrons for the third shell.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Protons and neutrons sit in the nucleus; electrons occupy shells.",
                "Atomic number = protons; mass number = protons + neutrons.",
                "Isotopes differ only in neutron number.",
                "Valence electrons control chemical behaviour.",
              ],
            },
          ],
          flashcards: [
            { front: "Atomic number (Z)", back: "The number of protons in an atom's nucleus." },
            { front: "Mass number (A)", back: "Protons + neutrons." },
            { front: "Isotopes", back: "Atoms of the same element with different numbers of neutrons." },
            { front: "Valence electrons", back: "Electrons in the outermost shell; they determine reactivity." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Chlorine-35 has atomic number 17. How many neutrons does it have?",
              answer: 18,
              explain: "Neutrons = A − Z = 35 − 17 = 18.",
            },
            {
              kind: "mcq",
              q: "Which particle has almost no mass?",
              options: ["Proton", "Neutron", "Electron", "Nucleus"],
              answer: 2,
              explain: "An electron is about 1/1836 the mass of a proton.",
            },
            {
              kind: "truefalse",
              q: "Carbon-12 and carbon-14 have different numbers of protons.",
              answer: false,
              explain: "Both have 6 protons (that is what makes them carbon); they differ in neutrons.",
            },
            {
              kind: "mcq",
              q: "What is the electron arrangement of oxygen (8 electrons)?",
              options: ["2, 6", "2, 8", "8", "2, 4, 2"],
              answer: 0,
              explain: "The first shell takes 2, leaving 6 for the second shell.",
            },
          ],
        },
        {
          slug: "molecules-and-formulae",
          title: "Molecules, Formulae & the Mole",
          summary: "How atoms team up, how to read chemical formulae, and how chemists count atoms by weighing.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A single drop of water contains roughly 1.7 sextillion molecules. Nobody could count them one by one — so chemists invented a clever counting unit, the **mole**. But first, what is a molecule?",
            },
            {
              type: "text",
              md: "A **molecule** is two or more atoms held together by chemical bonds. They can be the same element (O₂, N₂) or different elements (H₂O, CO₂).",
            },
            { type: "heading", text: "Reading a formula" },
            {
              type: "table",
              headers: ["Formula", "Name", "Atoms in one unit"],
              rows: [
                ["H₂O", "Water", "2 hydrogen, 1 oxygen"],
                ["CO₂", "Carbon dioxide", "1 carbon, 2 oxygen"],
                ["NH₃", "Ammonia", "1 nitrogen, 3 hydrogen"],
                ["C₆H₁₂O₆", "Glucose", "6 carbon, 12 hydrogen, 6 oxygen"],
                ["Ca(OH)₂", "Calcium hydroxide", "1 calcium, 2 oxygen, 2 hydrogen"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Brackets multiply",
              md: "In Ca(OH)₂ the little 2 applies to **everything inside the brackets** — so there are 2 O and 2 H.",
            },
            { type: "heading", text: "Two ways atoms bond" },
            {
              type: "list",
              items: [
                "**Ionic bonding** — a metal gives electrons to a non-metal, forming charged ions that attract (NaCl).",
                "**Covalent bonding** — non-metals share pairs of electrons (H₂O, CH₄).",
              ],
            },
            { type: "heading", text: "The mole" },
            {
              type: "formula",
              tex: "1 \\text{ mole} = 6.022 \\times 10^{23} \\text{ particles}",
              caption: "Avogadro's number",
            },
            {
              type: "text",
              md: "One mole of any substance has a mass in grams equal to its formula mass. Using H = 1, C = 12, O = 16:\n\n- H₂O = 2(1) + 16 = **18 g/mol**\n- CO₂ = 12 + 2(16) = **44 g/mol**\n\nSo 18 g of water contains 6.022 × 10²³ molecules — that is about one big gulp!",
            },
            {
              type: "formula",
              tex: "n = \\dfrac{m}{M}",
              caption: "moles = mass (g) ÷ molar mass (g/mol)",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many moles are in 36 g of water (M = 18 g/mol)?",
                  answer: 2,
                  unit: "mol",
                  explain: "n = 36 ÷ 18 = 2 mol.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Molecules are atoms bonded together.",
                "Subscripts in formulae show how many atoms of each element.",
                "Ionic bonds transfer electrons; covalent bonds share them.",
                "A mole is 6.022 × 10²³ particles; n = m / M.",
              ],
            },
          ],
          flashcards: [
            { front: "Molecule", back: "Two or more atoms chemically bonded together." },
            { front: "Avogadro's number", back: "6.022 × 10²³ particles per mole." },
            { front: "Ionic bond", back: "Attraction between oppositely charged ions formed by electron transfer." },
            { front: "Covalent bond", back: "A shared pair of electrons between two non-metal atoms." },
            { front: "Molar mass of CO₂", back: "44 g/mol (12 + 16 + 16)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Using C = 12, H = 1, what is the molar mass of methane, CH₄?",
              answer: 16,
              unit: "g/mol",
              explain: "12 + 4(1) = 16 g/mol.",
            },
            {
              kind: "mcq",
              q: "How many oxygen atoms are in one unit of Al₂(SO₄)₃?",
              options: ["4", "7", "12", "3"],
              answer: 2,
              explain: "Each SO₄ has 4 O, and there are 3 of them: 4 × 3 = 12.",
            },
            {
              kind: "mcq",
              q: "Which compound is held together by ionic bonds?",
              options: ["Water", "Methane", "Sodium chloride", "Carbon dioxide"],
              answer: 2,
              explain: "Sodium (a metal) transfers an electron to chlorine (a non-metal), forming Na⁺ and Cl⁻ ions.",
            },
            {
              kind: "numeric",
              q: "What mass (g) of carbon dioxide is 0.5 mol? (M = 44 g/mol)",
              answer: 22,
              unit: "g",
              explain: "m = n × M = 0.5 × 44 = 22 g.",
            },
          ],
        },
        {
          slug: "the-periodic-table",
          title: "Exploring the Periodic Table",
          summary: "How 118 elements fit into one brilliant chart — groups, periods and the trends hidden inside.",
          minutes: 18,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "In 1869 Dmitri Mendeleev arranged the known elements on cards and noticed a repeating pattern. He was so confident that he left **gaps** for elements nobody had discovered yet — and predicted their properties. When gallium and germanium were found, they fit his predictions almost perfectly.",
            },
            {
              type: "widget",
              widget: "periodic-table",
              caption: "Tap any element to see its atomic number, group and category.",
            },
            { type: "heading", text: "How it is organised" },
            {
              type: "list",
              items: [
                "The modern table is ordered by **atomic number** (proton count), not mass.",
                "**Periods** are the 7 horizontal rows — the period number equals the number of electron shells.",
                "**Groups** are the 18 vertical columns — elements in a group have the same number of valence electrons, so they behave alike.",
                "**Metals** sit on the left and centre, **non-metals** on the right, with **metalloids** (like silicon) along the staircase line between them.",
              ],
            },
            {
              type: "table",
              headers: ["Group", "Family name", "Personality"],
              rows: [
                ["1", "Alkali metals (Li, Na, K…)", "Soft, very reactive, fizz in water; reactivity increases down the group"],
                ["2", "Alkaline earth metals (Mg, Ca…)", "Reactive, but less than group 1"],
                ["3–12", "Transition metals (Fe, Cu, Au…)", "Hard, shiny, often coloured compounds, good catalysts"],
                ["17", "Halogens (F, Cl, Br, I)", "Reactive non-metals; reactivity decreases down the group"],
                ["18", "Noble gases (He, Ne, Ar…)", "Full outer shells, almost totally unreactive"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Potassium is in group 1, period 4. How many valence electrons does it have?",
                  options: ["1", "4", "8", "19"],
                  answer: 0,
                  explain: "Group 1 elements all have one valence electron. Period 4 tells us it has 4 shells.",
                },
              ],
            },
            { type: "heading", text: "Trends to remember" },
            {
              type: "table",
              headers: ["Trend", "Across a period (→)", "Down a group (↓)"],
              rows: [
                ["Atomic size", "Decreases", "Increases"],
                ["Metallic character", "Decreases", "Increases"],
                ["Tendency to gain electrons (non-metallic)", "Increases", "Decreases"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Why size shrinks across a period",
              md: "Moving right adds protons to the nucleus but electrons go into the **same** shell. The stronger positive pull drags the shell inward, so atoms get smaller.",
            },
            {
              type: "keypoints",
              items: [
                "118 elements, 7 periods, 18 groups.",
                "Same group → same valence electrons → similar reactions.",
                "Metals left, non-metals right, noble gases far right.",
                "Atoms get smaller across a period and bigger down a group.",
              ],
            },
          ],
          flashcards: [
            { front: "Period", back: "A horizontal row; its number equals the number of electron shells." },
            { front: "Group", back: "A vertical column; elements share the same number of valence electrons." },
            { front: "Noble gases", back: "Group 18 — full outer shells, very unreactive." },
            { front: "Who created the first periodic table?", back: "Dmitri Mendeleev, in 1869." },
            { front: "Trend in atomic size down a group", back: "Increases, because more shells are added." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "The modern periodic table is arranged in order of increasing…",
              options: ["Atomic mass", "Atomic number", "Number of neutrons", "Date of discovery"],
              answer: 1,
              explain: "Henry Moseley showed that atomic number (protons) gives the correct order.",
            },
            {
              kind: "truefalse",
              q: "Fluorine is more reactive than iodine.",
              answer: true,
              explain: "Halogen reactivity decreases down group 17, and fluorine is at the top.",
            },
            {
              kind: "order",
              q: "Order these group 1 metals from least to most reactive.",
              items: ["Lithium", "Sodium", "Potassium"],
              explain: "Reactivity increases down group 1 because the outer electron is farther from the nucleus and lost more easily.",
            },
            {
              kind: "numeric",
              q: "How many groups does the modern periodic table have?",
              answer: 18,
              explain: "There are 18 vertical groups.",
            },
            {
              kind: "mcq",
              q: "Which element is a metalloid?",
              options: ["Sodium", "Silicon", "Neon", "Iron"],
              answer: 1,
              explain: "Silicon has properties between metals and non-metals — that is why it is great for computer chips.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "chemical-reactions",
      title: "Chemical Reactions & Equations",
      icon: "💥",
      description: "Spot a reaction, name its type, and balance the equation so no atom goes missing.",
      lessons: [
        {
          slug: "signs-and-types-of-reactions",
          title: "Signs & Types of Reactions",
          summary: "Bubbles, colour changes, heat and light — learn to recognise reactions and sort them into families.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "🎆", caption: "Fireworks: metals reacting to release light and heat." },
            {
              type: "text",
              md: "A cut apple turning brown, a candle burning, a bicycle rusting — all are **chemical reactions**: processes where substances (reactants) turn into **new** substances (products). A physical change like melting ice makes nothing new, so it is not a reaction.",
            },
            { type: "heading", text: "Clues that a reaction happened" },
            {
              type: "list",
              items: [
                "A **gas** is given off (bubbles or fizzing).",
                "A **colour change**.",
                "A **precipitate** — an insoluble solid forming in a solution.",
                "A **temperature change** — getting hot (exothermic) or cold (endothermic).",
                "**Light** or sound is produced.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Law of conservation of mass",
              md: "Antoine Lavoisier showed that in a closed system the total mass before and after a reaction is the same. Atoms are rearranged, never created or destroyed.",
            },
            { type: "heading", text: "Families of reactions" },
            {
              type: "table",
              headers: ["Type", "Pattern", "Example"],
              rows: [
                ["Combination", "A + B → AB", "2Mg + O₂ → 2MgO"],
                ["Decomposition", "AB → A + B", "CaCO₃ → CaO + CO₂ (on heating)"],
                ["Displacement", "A + BC → AC + B", "Fe + CuSO₄ → FeSO₄ + Cu"],
                ["Double displacement", "AB + CD → AD + CB", "AgNO₃ + NaCl → AgCl↓ + NaNO₃"],
                ["Combustion", "Fuel + O₂ → CO₂ + H₂O", "CH₄ + 2O₂ → CO₂ + 2H₂O"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "An iron nail placed in blue copper sulfate solution becomes coated in brown copper. Which type of reaction is this?",
                  options: ["Combination", "Decomposition", "Displacement", "Combustion"],
                  answer: 2,
                  explain: "Iron is more reactive than copper, so it pushes copper out of its compound.",
                },
              ],
            },
            {
              type: "text",
              md: "**Oxidation and reduction** often travel together (redox). Oxidation is gaining oxygen or losing electrons; reduction is losing oxygen or gaining electrons. Rusting is iron being oxidised: 4Fe + 3O₂ → 2Fe₂O₃ (water helps it happen).",
            },
            {
              type: "keypoints",
              items: [
                "Reactions make new substances; physical changes do not.",
                "Look for gas, colour change, precipitate, temperature change or light.",
                "Mass is conserved in every reaction.",
                "Main types: combination, decomposition, displacement, double displacement, combustion, redox.",
              ],
            },
          ],
          flashcards: [
            { front: "Exothermic reaction", back: "Releases heat to the surroundings (e.g. burning)." },
            { front: "Endothermic reaction", back: "Absorbs heat from the surroundings (e.g. instant ice packs)." },
            { front: "Precipitate", back: "An insoluble solid formed when two solutions react." },
            { front: "Oxidation", back: "Gain of oxygen or loss of electrons." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which of these is a physical change, not a chemical reaction?",
              options: ["Burning paper", "Boiling water", "Rusting iron", "Baking a cake"],
              answer: 1,
              explain: "Boiling only changes the state of water; no new substance forms.",
            },
            {
              kind: "truefalse",
              q: "In a sealed flask, the mass of products equals the mass of reactants.",
              answer: true,
              explain: "This is the law of conservation of mass.",
            },
            {
              kind: "mcq",
              q: "CaCO₃ → CaO + CO₂ is an example of…",
              options: ["Combination", "Decomposition", "Displacement", "Neutralisation"],
              answer: 1,
              explain: "One compound breaks into two simpler substances.",
            },
            {
              kind: "multi",
              q: "Which observations suggest a chemical reaction? Select all that apply.",
              options: ["Fizzing", "A solid dissolving in water", "A new colour appears", "The mixture becomes hot"],
              answers: [0, 2, 3],
              explain: "Dissolving is usually a physical change; the others are classic reaction signs.",
            },
          ],
        },
        {
          slug: "balancing-equations",
          title: "Balancing Chemical Equations",
          summary: "A step-by-step method to make sure every atom on the left shows up on the right.",
          minutes: 18,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A chemical equation is a recipe. If your recipe says 2 eggs go in, but the cake contains 3 eggs, something is wrong! Because atoms cannot appear or vanish, both sides of an equation must have the **same number of each atom**.",
            },
            { type: "heading", text: "The golden rule" },
            {
              type: "callout",
              tone: "warning",
              title: "Never change subscripts",
              md: "Changing H₂O to H₂O₂ makes hydrogen peroxide — a different chemical! Only change the **coefficients** (big numbers in front).",
            },
            { type: "heading", text: "Worked example: making water" },
            {
              type: "list",
              ordered: true,
              items: [
                "Write the unbalanced equation: H₂ + O₂ → H₂O",
                "Count atoms. Left: H = 2, O = 2. Right: H = 2, O = 1.",
                "Fix oxygen: put 2 in front of H₂O → H₂ + O₂ → 2H₂O. Now right has H = 4, O = 2.",
                "Fix hydrogen: put 2 in front of H₂ → 2H₂ + O₂ → 2H₂O.",
                "Recount: H = 4 and O = 2 on both sides. Balanced!",
              ],
            },
            { type: "formula", tex: "2H_2 + O_2 \\rightarrow 2H_2O" },
            { type: "heading", text: "Tips from the pros" },
            {
              type: "list",
              items: [
                "Balance elements that appear in only one compound on each side first.",
                "Leave lone elements (like O₂ or Fe) until last — they are easiest to adjust.",
                "Treat a polyatomic ion (like SO₄) as one unit if it stays intact.",
                "Finish with the smallest whole-number coefficients.",
              ],
            },
            {
              type: "text",
              md: "Example: burning methane. CH₄ + O₂ → CO₂ + H₂O. Carbon is already 1 = 1. Hydrogen: 4 on left, so put 2H₂O. Now oxygen on the right = 2 + 2 = 4, so we need 2O₂.",
            },
            { type: "formula", tex: "CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O" },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Balance: N₂ + ?H₂ → 2NH₃. What coefficient goes in front of H₂?",
                  answer: 3,
                  explain: "2NH₃ contains 6 H atoms, so we need 3H₂.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "State symbols",
              md: "Add (s) solid, (l) liquid, (g) gas and (aq) aqueous (dissolved in water) to give more detail: 2H₂(g) + O₂(g) → 2H₂O(l).",
            },
            {
              type: "keypoints",
              items: [
                "Balanced equations obey conservation of mass.",
                "Change only coefficients, never subscripts.",
                "Count atoms on both sides after each change.",
                "Use the smallest whole numbers.",
              ],
            },
          ],
          flashcards: [
            { front: "Coefficient", back: "The number in front of a formula showing how many units react." },
            { front: "Subscript", back: "The small number in a formula; never changed when balancing." },
            { front: "(aq) means…", back: "Aqueous — dissolved in water." },
            { front: "Balanced combustion of methane", back: "CH₄ + 2O₂ → CO₂ + 2H₂O" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Balance C₃H₈ + ?O₂ → 3CO₂ + 4H₂O. What is the coefficient of O₂?",
              answer: 5,
              explain: "Right side oxygen = 3×2 + 4×1 = 10 atoms, so 5 O₂ molecules.",
            },
            {
              kind: "mcq",
              q: "Which equation is balanced?",
              options: ["Mg + O₂ → MgO", "2Mg + O₂ → 2MgO", "Mg + 2O₂ → MgO", "2Mg + 2O₂ → MgO"],
              answer: 1,
              explain: "2Mg + O₂ → 2MgO gives 2 Mg and 2 O on each side.",
            },
            {
              kind: "order",
              q: "Put the balancing steps in order.",
              items: [
                "Write the correct formulae for reactants and products",
                "Count the atoms of each element on both sides",
                "Add coefficients to balance one element at a time",
                "Recount and reduce to smallest whole numbers",
              ],
              explain: "Correct formulae first, then count, adjust, and check.",
            },
            {
              kind: "fill",
              q: "Balance: 4Fe + ___O₂ → 2Fe₂O₃",
              answer: ["3"],
              explain: "2Fe₂O₃ has 6 O atoms, so 3 O₂ molecules are needed.",
            },
            {
              kind: "truefalse",
              q: "To balance H₂O you may change it to H₂O₂.",
              answer: false,
              explain: "That makes a different substance (hydrogen peroxide). Only coefficients may change.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "acids-bases-salts",
      title: "Acids, Bases & Salts",
      icon: "🍋",
      description: "Sour lemons, slippery soap and the pH scale — plus the neutralisation reactions that make salts.",
      lessons: [
        {
          slug: "acids-bases-and-ph",
          title: "Acids, Bases & the pH Scale",
          summary: "Measure how acidic or basic a substance is and test it with indicators.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "🍋🧼", caption: "Lemon juice is acidic; soap is basic." },
            {
              type: "text",
              md: "Why does lemon taste sour while soap feels slippery? It comes down to tiny ions. **Acids** release hydrogen ions (H⁺) in water. **Bases** neutralise acids; those that dissolve in water are called **alkalis** and release hydroxide ions (OH⁻).",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Safety first",
              md: "Never taste or touch lab chemicals to identify them. Strong acids and alkalis can burn skin and eyes. Use indicators instead!",
            },
            { type: "heading", text: "The pH scale" },
            {
              type: "table",
              headers: ["pH", "Nature", "Everyday example"],
              rows: [
                ["1–2", "Strongly acidic", "Stomach acid, battery acid"],
                ["2–3", "Acidic", "Lemon juice, vinegar"],
                ["5–6", "Weakly acidic", "Black coffee, rainwater"],
                ["7", "Neutral", "Pure water"],
                ["7.4", "Very weakly basic", "Human blood"],
                ["8–9", "Weakly basic", "Baking soda solution, seawater"],
                ["10–11", "Basic", "Milk of magnesia, soap"],
                ["13–14", "Strongly basic", "Drain cleaner (sodium hydroxide)"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Each step is ×10",
              md: "pH is a logarithmic scale. A solution at pH 3 is **10 times** more acidic than one at pH 4, and 100 times more acidic than pH 5.",
            },
            { type: "heading", text: "Indicators" },
            {
              type: "table",
              headers: ["Indicator", "In acid", "In base"],
              rows: [
                ["Litmus", "Blue → red", "Red → blue"],
                ["Phenolphthalein", "Colourless", "Pink"],
                ["Methyl orange", "Red", "Yellow"],
                ["Universal indicator", "Red/orange/yellow", "Blue/purple"],
              ],
            },
            {
              type: "text",
              md: "Some natural indicators live in your kitchen: red cabbage juice turns pink in acid and green-yellow in strong base, and turmeric turns red-brown in base.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A few drops of phenolphthalein turn a solution pink. The solution is…",
                  options: ["Acidic", "Neutral", "Basic", "Impossible to tell"],
                  answer: 2,
                  explain: "Phenolphthalein is pink only in basic solutions.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Acids give H⁺ ions; alkalis give OH⁻ ions in water.",
                "pH below 7 = acidic, 7 = neutral, above 7 = basic.",
                "Each pH unit is a 10× change in acidity.",
                "Indicators change colour to reveal pH.",
              ],
            },
          ],
          flashcards: [
            { front: "Acid", back: "A substance that releases H⁺ ions in water; pH < 7." },
            { front: "Alkali", back: "A base that dissolves in water, releasing OH⁻ ions; pH > 7." },
            { front: "Litmus in acid", back: "Turns red." },
            { front: "pH of pure water", back: "7 (neutral)." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Arrange from most acidic to most basic.",
              items: ["Stomach acid", "Lemon juice", "Pure water", "Baking soda solution", "Drain cleaner"],
              explain: "Approximate pH: 1.5, 2.5, 7, 8.5, 14.",
            },
            {
              kind: "numeric",
              q: "How many times more acidic is pH 2 than pH 4?",
              answer: 100,
              explain: "Two pH steps = 10 × 10 = 100 times.",
            },
            {
              kind: "truefalse",
              q: "All bases are alkalis.",
              answer: false,
              explain: "Only bases that dissolve in water are alkalis. Copper oxide is a base but not an alkali.",
            },
            {
              kind: "mcq",
              q: "Which ion is responsible for acidic properties?",
              options: ["OH⁻", "H⁺", "Na⁺", "Cl⁻"],
              answer: 1,
              explain: "Acids release hydrogen ions, H⁺.",
            },
          ],
        },
        {
          slug: "neutralisation-and-salts",
          title: "Neutralisation & Salts",
          summary: "When acids meet bases they cancel out — and make salts we use every day.",
          minutes: 14,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Got heartburn? An antacid tablet works because a base neutralises excess stomach acid. Bee sting hurting? It is acidic, so dabbing on mild baking soda paste may soothe it. This acid-meets-base teamwork is called **neutralisation**.",
            },
            { type: "formula", tex: "\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}" },
            { type: "formula", tex: "HCl + NaOH \\rightarrow NaCl + H_2O", caption: "Hydrochloric acid + sodium hydroxide → sodium chloride + water" },
            {
              type: "text",
              md: "At the heart of it, H⁺ from the acid joins OH⁻ from the base to form water: H⁺ + OH⁻ → H₂O. The leftover ions form a **salt**.",
            },
            { type: "heading", text: "Other acid reactions" },
            {
              type: "table",
              headers: ["Reaction", "Word equation", "Test for the gas"],
              rows: [
                ["Acid + reactive metal", "salt + hydrogen", "Hydrogen gives a 'squeaky pop' with a lit splint"],
                ["Acid + carbonate", "salt + water + carbon dioxide", "CO₂ turns limewater milky"],
                ["Acid + metal oxide", "salt + water", "—"],
              ],
            },
            { type: "heading", text: "Naming salts" },
            {
              type: "text",
              md: "The first part comes from the metal (or ammonium), the second from the acid:\n\n- Hydrochloric acid → **chlorides**\n- Sulfuric acid → **sulfates**\n- Nitric acid → **nitrates**\n\nSo zinc + sulfuric acid → **zinc sulfate** + hydrogen.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Magnesium reacts with hydrochloric acid to make magnesium ___ and hydrogen.",
                  answer: ["chloride"],
                  explain: "Hydrochloric acid always gives chloride salts.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Salt", "Common name", "Use"],
              rows: [
                ["Sodium chloride", "Table salt", "Food flavouring and preservation"],
                ["Sodium hydrogen carbonate", "Baking soda", "Baking, antacids"],
                ["Calcium sulfate (hemihydrate)", "Plaster of Paris", "Plaster casts for broken bones"],
                ["Sodium carbonate", "Washing soda", "Softening hard water"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Farmers use it too",
              md: "If soil is too acidic, crops struggle. Farmers spread lime (calcium hydroxide or calcium carbonate) to neutralise it.",
            },
            {
              type: "keypoints",
              items: [
                "Acid + base → salt + water.",
                "Acid + metal → salt + hydrogen; acid + carbonate → salt + water + CO₂.",
                "Salt names come from the metal plus the acid (chloride, sulfate, nitrate).",
                "Neutralisation is used in medicine, farming and industry.",
              ],
            },
          ],
          flashcards: [
            { front: "Neutralisation", back: "Acid + base → salt + water." },
            { front: "Test for hydrogen", back: "A lit splint makes a squeaky pop." },
            { front: "Test for carbon dioxide", back: "It turns limewater milky." },
            { front: "Salts from sulfuric acid", back: "Sulfates." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What are the products of an acid reacting with a carbonate?",
              options: ["Salt + hydrogen", "Salt + water", "Salt + water + carbon dioxide", "Only water"],
              answer: 2,
              explain: "Carbonates fizz with acids, giving CO₂ along with a salt and water.",
            },
            {
              kind: "fill",
              q: "Copper oxide + sulfuric acid → copper ___ + water.",
              answer: ["sulfate", "sulphate"],
              explain: "Sulfuric acid forms sulfate salts.",
            },
            {
              kind: "truefalse",
              q: "Antacids work by adding more acid to the stomach.",
              answer: false,
              explain: "Antacids are bases that neutralise excess stomach acid.",
            },
            {
              kind: "mcq",
              q: "Which ionic equation sums up every neutralisation?",
              options: ["Na⁺ + Cl⁻ → NaCl", "H⁺ + OH⁻ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂O → H⁺ + OH⁻"],
              answer: 1,
              explain: "Hydrogen ions and hydroxide ions combine to form water.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "carbon-compounds",
      title: "Carbon Compounds",
      icon: "💎",
      description: "Why one element builds millions of compounds — from diamonds and fuels to vinegar and soap.",
      lessons: [
        {
          slug: "carbon-the-builder",
          title: "Carbon: The Ultimate Builder",
          summary: "Carbon's four bonds, chains and rings, allotropes, and the hydrocarbon families.",
          minutes: 16,
          xp: 35,
          blocks: [
            { type: "illustration", emoji: "💎✏️", caption: "Diamond and pencil 'lead' (graphite) are both pure carbon." },
            {
              type: "text",
              md: "Your DNA, the petrol in a car, the sugar in your tea and the plastic of your pen all have something in common: a backbone of **carbon atoms**. Chemists know of more than 10 million carbon compounds — more than all other elements combined. What makes carbon so special?",
            },
            {
              type: "list",
              items: [
                "**Tetravalency** — carbon has 4 valence electrons, so it forms 4 covalent bonds.",
                "**Catenation** — carbon atoms link to each other to form long chains, branches and rings.",
                "**Multiple bonds** — carbon can form single, double and triple bonds.",
              ],
            },
            { type: "heading", text: "Allotropes of carbon" },
            {
              type: "table",
              headers: ["Allotrope", "Structure", "Property"],
              rows: [
                ["Diamond", "Each C bonded to 4 others in a 3D network", "Hardest natural substance; does not conduct electricity"],
                ["Graphite", "Flat layers of hexagons that slide over each other", "Soft, slippery, conducts electricity"],
                ["Fullerene (C₆₀)", "Football-shaped cage", "Studied for medicine and nanotech"],
                ["Graphene", "A single layer of graphite", "Super strong, ultra-thin conductor"],
              ],
            },
            { type: "heading", text: "Hydrocarbons" },
            {
              type: "text",
              md: "Compounds of only carbon and hydrogen are **hydrocarbons**. Two key families:\n\n- **Alkanes** — only single bonds (saturated). General formula $C_nH_{2n+2}$.\n- **Alkenes** — at least one C=C double bond (unsaturated). General formula $C_nH_{2n}$.",
            },
            {
              type: "table",
              headers: ["Carbons", "Alkane", "Formula", "Use"],
              rows: [
                ["1", "Methane", "CH₄", "Natural gas / cooking gas"],
                ["2", "Ethane", "C₂H₆", "Making ethene for plastics"],
                ["3", "Propane", "C₃H₈", "Camping gas, LPG"],
                ["4", "Butane", "C₄H₁₀", "Lighters, LPG"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Memory trick",
              md: "**M**onkeys **E**at **P**eanut **B**utter → Meth-, Eth-, Prop-, But- = 1, 2, 3, 4 carbons.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Using $C_nH_{2n+2}$, the alkane pentane (5 carbons) has the formula C₅H___.",
                  answer: ["12"],
                  explain: "2(5) + 2 = 12, so pentane is C₅H₁₂.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Carbon forms 4 bonds and links into chains and rings (catenation).",
                "Diamond, graphite, fullerenes and graphene are allotropes of carbon.",
                "Alkanes: single bonds, $C_nH_{2n+2}$. Alkenes: a C=C double bond, $C_nH_{2n}$.",
              ],
            },
          ],
          flashcards: [
            { front: "Catenation", back: "The ability of an element's atoms to bond to each other in chains or rings." },
            { front: "Tetravalency", back: "Carbon's ability to form four covalent bonds." },
            { front: "Alkane general formula", back: "CₙH₂ₙ₊₂" },
            { front: "Why does graphite conduct electricity?", back: "Each carbon uses only 3 electrons in bonds, leaving free electrons that move between layers." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which allotrope of carbon is used in pencils?",
              options: ["Diamond", "Graphite", "Fullerene", "Charcoal"],
              answer: 1,
              explain: "Graphite's layers slide off onto paper, leaving a mark.",
            },
            {
              kind: "numeric",
              q: "How many hydrogen atoms are in one molecule of propane?",
              answer: 8,
              explain: "Propane is C₃H₈ (2×3 + 2 = 8).",
            },
            {
              kind: "truefalse",
              q: "Ethene (C₂H₄) is an alkene with a carbon–carbon double bond.",
              answer: true,
              explain: "Ethene fits CₙH₂ₙ and contains C=C.",
            },
            {
              kind: "mcq",
              q: "What allows carbon to form so many compounds?",
              options: ["It is a metal", "It forms 4 bonds and links to itself in chains", "It has no electrons", "It is a noble gas"],
              answer: 1,
              explain: "Tetravalency plus catenation give carbon its building power.",
            },
          ],
        },
        {
          slug: "everyday-carbon-compounds",
          title: "Alcohols, Acids & Soaps",
          summary: "Functional groups give carbon compounds their personality — meet ethanol, vinegar, esters and soap.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Hand sanitiser, vinegar, banana-flavoured sweets and a bar of soap — four totally different products, all built on carbon chains. The difference is a small cluster of atoms called a **functional group**, which decides how the molecule behaves.",
            },
            {
              type: "table",
              headers: ["Family", "Functional group", "Example", "Everyday role"],
              rows: [
                ["Alcohols", "–OH", "Ethanol, C₂H₅OH", "Sanitisers, solvents, fuel"],
                ["Carboxylic acids", "–COOH", "Ethanoic acid, CH₃COOH", "Vinegar (about 5–8% in water)"],
                ["Esters", "–COO–", "Ethyl ethanoate", "Fruity smells in perfumes and flavourings"],
              ],
            },
            {
              type: "formula",
              tex: "\\text{acid} + \\text{alcohol} \\rightarrow \\text{ester} + \\text{water}",
              caption: "Esterification (needs a little concentrated sulfuric acid as catalyst)",
            },
            { type: "heading", text: "How soap cleans" },
            {
              type: "text",
              md: "Soap molecules are sodium or potassium salts of long-chain fatty acids. Each molecule has two ends:\n\n- A **water-loving (hydrophilic)** ionic head.\n- An **oil-loving (hydrophobic)** carbon tail.\n\nThe tails bury themselves in grease, the heads face the water, and they form tiny balls called **micelles**. Rinse, and the trapped grease washes away.",
            },
            { type: "illustration", emoji: "🧼🫧", caption: "Micelles surround oily dirt so water can carry it off." },
            {
              type: "callout",
              tone: "note",
              title: "Hard water problem",
              md: "Calcium and magnesium ions in hard water react with soap to form a sticky scum, so soap lathers poorly. **Detergents** still work in hard water, which is why most washing powders use them.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which part of a soap molecule dissolves in grease?",
                  options: ["The ionic head", "The hydrocarbon tail", "The sodium ion", "None of it"],
                  answer: 1,
                  explain: "The long hydrocarbon tail is hydrophobic and mixes with oil.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Plastics and the planet",
              md: "Polymers like polythene are long carbon chains made by linking alkene molecules. They are useful but most do not biodegrade, so reducing, reusing and recycling matters.",
            },
            {
              type: "keypoints",
              items: [
                "Functional groups decide a compound's properties.",
                "–OH = alcohol, –COOH = carboxylic acid, –COO– = ester.",
                "Acid + alcohol → ester + water.",
                "Soap forms micelles that trap grease; detergents work even in hard water.",
              ],
            },
          ],
          flashcards: [
            { front: "Functional group", back: "An atom or group of atoms that gives a family of compounds its characteristic reactions." },
            { front: "–COOH", back: "Carboxylic acid group (e.g. ethanoic acid in vinegar)." },
            { front: "Micelle", back: "A cluster of soap molecules with tails inward trapping oil, heads outward facing water." },
            { front: "Esters smell…", back: "Sweet and fruity." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Vinegar is a dilute solution of…",
              options: ["Ethanol", "Ethanoic acid", "Methane", "Sodium hydroxide"],
              answer: 1,
              explain: "Vinegar is roughly 5–8% ethanoic (acetic) acid.",
            },
            {
              kind: "fill",
              q: "An alcohol reacts with a carboxylic acid to form an ___ and water.",
              answer: ["ester"],
              explain: "This reaction is called esterification.",
            },
            {
              kind: "truefalse",
              q: "Soap lathers easily in hard water.",
              answer: false,
              explain: "Calcium and magnesium ions form scum with soap, reducing lather.",
            },
            {
              kind: "mcq",
              q: "Which functional group is present in ethanol?",
              options: ["–COOH", "–OH", "–COO–", "C=C"],
              answer: 1,
              explain: "Ethanol, C₂H₅OH, is an alcohol with an –OH group.",
            },
          ],
        },
      ],
    },
  ],
};
