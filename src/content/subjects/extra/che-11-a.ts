import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Some Basic Concepts of Chemistry (NCERT Class 11 Unit 1; same in ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-basic-concepts",
    title: "Some Basic Concepts of Chemistry",
    icon: "⚖️",
    description: "Matter and its classification, SI units, significant figures, laws of chemical combination, Dalton's theory, atomic and molecular mass, the mole, empirical formulae, stoichiometry, limiting reagent and concentration terms.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-bc-matter-measurement",
        title: "Matter, SI Units and Significant Figures",
        summary: "How chemists classify matter, the seven SI base units, temperature scales, scientific notation, significant figures, precision versus accuracy and dimensional analysis.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🧪",
            caption: "A pharmacist weighing 0.250 g of a medicine and a jeweller weighing 10.0 g of gold both need the same skill: measuring well and reporting the number honestly.",
          },
          {
            type: "text",
            md: t`**Chemistry** is the study of the composition, structure and properties of matter and the changes it undergoes. **Matter** is anything that has mass and occupies space. It exists as **solid** (definite shape and volume), **liquid** (definite volume, takes the shape of its container) or **gas** (neither definite shape nor definite volume). Heating or cooling can change one state into another.

By composition, matter is either a **pure substance** (fixed composition) or a **mixture** (variable composition). A pure substance is an **element** (one kind of atom, e.g. Cu, O$_2$) or a **compound** (two or more elements combined in a fixed ratio by mass, e.g. H$_2$O, CO$_2$). A compound's properties differ from those of its elements, and only chemical methods can break it down.`,
          },
          {
            type: "table",
            headers: ["Type", "Composition", "Can it be separated by physical methods?", "Example"],
            rows: [
              ["Element", "one kind of atom", "no", "copper, oxygen gas"],
              ["Compound", "elements in a fixed mass ratio", "no (only chemically)", "water, sugar, carbon dioxide"],
              ["Homogeneous mixture", "uniform throughout", "yes", "air, sugar solution, brass"],
              ["Heterogeneous mixture", "not uniform", "yes", "sand in water, salt and iron filings"],
            ],
          },
          {
            type: "heading",
            text: "SI units",
          },
          {
            type: "table",
            headers: ["Base quantity", "SI unit", "Symbol"],
            rows: [
              ["Length", "metre", "m"],
              ["Mass", "kilogram", "kg"],
              ["Time", "second", "s"],
              ["Electric current", "ampere", "A"],
              ["Thermodynamic temperature", "kelvin", "K"],
              ["Amount of substance", "mole", "mol"],
              ["Luminous intensity", "candela", "cd"],
            ],
          },
          {
            type: "text",
            md: t`Every other unit is **derived** from these seven, e.g. volume in m$^3$ and density in kg m$^{-3}$. In the lab we use $1\ \text{L} = 1\ \text{dm}^3 = 1000\ \text{cm}^3 = 1000\ \text{mL}$, so $1\ \text{mL} = 1\ \text{cm}^3$. **Mass** is the amount of matter in a body and does not change from place to place; **weight** is the force of gravity on it and does change. A balance compares masses.

Common prefixes: milli (m) $= 10^{-3}$, micro ($\mu$) $= 10^{-6}$, nano (n) $= 10^{-9}$, pico (p) $= 10^{-12}$, kilo (k) $= 10^{3}$, mega (M) $= 10^{6}$.`,
          },
          {
            type: "formula",
            tex: t`T\,(\text{K}) = t\,(^\circ\text{C}) + 273.15 \qquad\qquad ^\circ\text{F} = \tfrac{9}{5}\,(^\circ\text{C}) + 32`,
            caption: "The kelvin scale has no negative values: 0 K (−273.15 °C) is the lowest possible temperature.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Scientific notation** writes a number as $N \times 10^{n}$ with $1 \le N < 10$, e.g. $0.000\,045 = 4.5 \times 10^{-5}$.`,
              "**Significant figures** are the meaningful digits: all certain digits plus one uncertain digit.",
              "All non-zero digits count. Zeros between non-zero digits count (2.05 has 3).",
              "Leading zeros never count (0.0045 has 2). Trailing zeros count when there is a decimal point (2.500 has 4; 0.200 has 3).",
              "Exact numbers (counted objects, defined ratios like 1 m = 100 cm) have infinitely many significant figures.",
              t`In **× and ÷**, keep as many significant figures as the least precise factor. In **+ and −**, keep as many decimal places as the term with the fewest decimal places.`,
            ],
          },
          {
            type: "example",
            title: "Reporting calculated results",
            problem: t`Report with the right number of significant figures: (a) $2.5 \times 1.25$; (b) $12.11 + 18.0 + 1.012$; (c) round 4.3475 to 3 significant figures.`,
            steps: [
              t`(a) $2.5 \times 1.25 = 3.125$. The factor 2.5 has only 2 significant figures, so report **3.1**.`,
              t`(b) The sum is 31.122. The term 18.0 has only one decimal place, so report **31.1**.`,
              t`(c) Keep 4.34|75. The first dropped digit is 7 (more than 5), so the last kept digit rises: **4.35**.`,
              t`Rounding rule: if the dropped digit is exactly 5 followed by nothing, round the kept digit to the nearest even number (6.35 → 6.4, 6.25 → 6.2).`,
            ],
            answer: "(a) 3.1, (b) 31.1, (c) 4.35",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many significant figures are in 0.004020?",
                answer: 4,
                explain: "Leading zeros (0.00) do not count. The digits 4, 0, 2 and the trailing 0 after the decimal point all count: 4 significant figures.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Precision** means how close repeated measurements are to *each other*. **Accuracy** means how close a measurement (or the average) is to the *true value*. If the true mass is 5.00 g, readings 4.95 g and 4.94 g are precise but not accurate; 5.01 g and 4.99 g are both precise and accurate; 4.80 g and 5.20 g average to 5.00 g but are not precise.

**Dimensional analysis** (the factor-label method) converts units by multiplying by **unit factors** equal to 1, such as $\frac{1000\ \text{mL}}{1\ \text{L}}$. Units cancel like numbers, which checks the working.`,
          },
          {
            type: "example",
            title: "Dimensional analysis",
            problem: "A water purifier in Pune holds 2.5 L. Express this volume in mL and in m³.",
            steps: [
              t`$2.5\ \text{L} \times \dfrac{1000\ \text{mL}}{1\ \text{L}} = 2500\ \text{mL}$ (better written $2.5 \times 10^{3}$ mL to keep 2 significant figures).`,
              t`$1\ \text{L} = 1\ \text{dm}^3 = (10^{-1}\ \text{m})^3 = 10^{-3}\ \text{m}^3$.`,
              t`$2.5\ \text{L} \times \dfrac{10^{-3}\ \text{m}^3}{1\ \text{L}} = 2.5 \times 10^{-3}\ \text{m}^3$.`,
            ],
            answer: t`$2.5 \times 10^{3}$ mL $= 2.5 \times 10^{-3}$ m³`,
          },
          {
            type: "mistake",
            wrong: "Zeros never count as significant figures, so 2.500 g and 2.5 g are the same measurement.",
            right: "Trailing zeros after a decimal point are significant: 2.500 g (4 s.f.) was measured to the nearest milligram, 2.5 g (2 s.f.) only to the nearest tenth of a gram.",
            why: "Leading zeros only locate the decimal point, so they do not count. Trailing zeros after a decimal point were actually read off the instrument, so dropping them throws away information.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "How many significant figures does each number have?",
              groups: ["2", "3", "4"],
              items: [
                { text: "0.0025", group: 0, hint: "Leading zeros do not count; only 2 and 5 do." },
                { text: "2.50", group: 1, hint: "The trailing zero after the decimal point counts." },
                { text: "100.0", group: 2, hint: "With a decimal point, every zero here counts." },
                { text: "0.0200", group: 1, hint: "Leading zeros drop out; 2, 0, 0 remain." },
                { text: "6.022 × 10²³", group: 2, hint: "Count only the digits of 6.022." },
                { text: "4.0 × 10⁻³", group: 0, hint: "The digits are 4 and 0." },
                { text: "1.20 × 10³", group: 1, hint: "1, 2 and the trailing 0." },
                { text: "4.010", group: 2, hint: "The zero in the middle and the trailing zero both count." },
              ],
              explain: "Count from the first non-zero digit. Zeros between digits always count; trailing zeros count when a decimal point is shown; in scientific notation count only the digits of N.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "One-mark questions often ask the number of significant figures or the result of a calculation \"to the correct number of significant figures\". Write the unrounded answer first, then the rounded one with the rule you used. In numericals, carry units through every step: a missing unit can cost half a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Matter: pure substances (elements, compounds) and mixtures (homogeneous, heterogeneous).",
              "Seven SI base units: m, kg, s, A, K, mol, cd. T(K) = t(°C) + 273.15.",
              "Significant figures: leading zeros never count; trailing zeros count after a decimal point; exact numbers have infinitely many.",
              "× and ÷: fewest significant figures; + and −: fewest decimal places.",
              "Precision = agreement among readings; accuracy = agreement with the true value.",
            ],
          },
        ],
        flashcards: [
          { front: "SI unit of amount of substance", back: "The mole (mol)." },
          { front: "Mass vs weight", back: "Mass is the amount of matter (constant everywhere); weight is the gravitational force on it (varies with place)." },
          { front: "Convert 27 °C to kelvin", back: "27 + 273.15 = 300.15 K (≈ 300 K)." },
          { front: "Significant figures in 0.0500", back: "Three (5, 0, 0). Leading zeros do not count." },
          { front: "Rule for adding measured values", back: "Round the answer to the fewest decimal places among the terms." },
          { front: "Precision vs accuracy", back: "Precision: readings agree with each other. Accuracy: readings agree with the true value." },
          { front: "1 mL equals", back: t`1 cm³ = $10^{-3}$ L = $10^{-6}$ m³.` },
          { front: "Homogeneous mixture examples", back: "Air, sugar solution, brass. Composition is uniform throughout." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a compound?",
            options: ["Brass", "Air", "Carbon dioxide", "Ozone"],
            answer: 2,
            explain: "CO₂ contains two elements in a fixed ratio. Brass and air are homogeneous mixtures; ozone (O₃) is an element made of one kind of atom.",
          },
          {
            kind: "numeric",
            q: "How many significant figures are there in 3.0800?",
            answer: 5,
            explain: "3, 0 (between digits), 8 and the two trailing zeros after the decimal point: 5 significant figures.",
          },
          {
            kind: "mcq",
            q: "The result of 5.346 × 2.1, reported correctly, is:",
            options: ["11.2266", "11.23", "11", "11.2"],
            answer: 2,
            explain: "5.346 × 2.1 = 11.2266. The factor 2.1 has 2 significant figures, so the answer is reported as 11.",
            difficulty: 2,
            hint: "Find the factor with the fewest significant figures.",
          },
          {
            kind: "numeric",
            q: "Convert −40 °C to the Fahrenheit scale.",
            answer: -40,
            unit: "°F",
            explain: "°F = (9/5)(−40) + 32 = −72 + 32 = −40. This is the one temperature where the two scales agree.",
          },
          {
            kind: "truefalse",
            q: "A set of readings can be precise without being accurate.",
            answer: true,
            explain: "Readings can agree closely with each other (precise) and still all be far from the true value, for example because of a badly calibrated balance.",
          },
          {
            kind: "mcq",
            q: "Which is NOT an SI base unit?",
            options: ["kelvin", "mole", "litre", "candela"],
            answer: 2,
            explain: "The litre is not an SI unit; it is accepted for use with SI and equals 1 dm³. Kelvin, mole and candela are base units.",
          },
          {
            kind: "numeric",
            q: "Report 15.62 + 3.1 − 0.015 to the correct number of decimal places.",
            answer: 18.7,
            explain: "The exact result is 18.705. The term 3.1 has one decimal place, so report 18.7.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A homogeneous mixture of two or more components is called a ___.",
            answer: ["solution"],
            explain: "A solution has the same composition throughout, for example sugar dissolved in water.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-bc-laws-mole",
        title: "Laws of Chemical Combination, Atomic Mass and the Mole",
        summary: "The five laws of chemical combination, Dalton's atomic theory, atomic, average atomic, molecular and formula mass, the mole and Avogadro constant, percentage composition and empirical and molecular formulae.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`Before anyone could see atoms, careful weighing showed that elements combine in fixed patterns. These patterns are the **laws of chemical combination**, and Dalton's atomic theory explained all of them.`,
          },
          {
            type: "table",
            headers: ["Law", "Given by", "What it says", "Example"],
            rows: [
              ["Conservation of mass", "Antoine Lavoisier", "matter is neither created nor destroyed in a chemical reaction; total mass stays the same", "4 g H₂ + 32 g O₂ give 36 g H₂O"],
              ["Definite proportions", "Joseph Proust", "a given compound always contains the same elements in the same proportion by mass, whatever its source", "pure water from a river or a lab is always 1 : 8 H : O by mass"],
              ["Multiple proportions", "John Dalton", "when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a simple whole-number ratio", "12 g C combines with 16 g O (CO) or 32 g O (CO₂): ratio 1 : 2"],
              ["Gaseous volumes", "Joseph Gay-Lussac", "gases react and form gaseous products in simple whole-number ratios by volume, at the same temperature and pressure", "1 vol H₂ + 1 vol Cl₂ → 2 vol HCl"],
              ["Avogadro's law", "Amedeo Avogadro", "equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules", "explains why 2 vol H₂ + 1 vol O₂ → 2 vol H₂O(g)"],
            ],
          },
          {
            type: "text",
            md: t`**Dalton's atomic theory (1808)** said: matter is made of tiny indivisible **atoms**; atoms of one element are identical in mass and properties, and differ from atoms of other elements; compounds form when atoms of different elements combine in a fixed ratio; in a chemical reaction atoms are only rearranged, never created or destroyed. It explained the first three laws but **not** Gay-Lussac's law. Avogadro's idea that gases such as hydrogen and oxygen exist as **molecules** (H$_2$, O$_2$) removed the difficulty.`,
          },
          {
            type: "heading",
            text: "Atomic, molecular and formula mass",
          },
          {
            type: "text",
            md: t`Atomic masses are measured against the **carbon-12** atom, given a mass of exactly 12 **atomic mass units**. One atomic mass unit is now written **u** (unified mass): $1\ \text{u} = \frac{1}{12}$ of the mass of one $^{12}$C atom $= 1.66056 \times 10^{-24}$ g.

Most elements are mixtures of **isotopes**, so the value in tables is the **average atomic mass**, weighted by natural abundance. **Molecular mass** is the sum of the atomic masses in a molecule (CH$_4$: $12.011 + 4 \times 1.008 = 16.043$ u). Ionic solids such as NaCl have no discrete molecules, so we use **formula mass** (NaCl: $23.0 + 35.5 = 58.5$ u).`,
          },
          {
            type: "example",
            title: "Average atomic mass of chlorine",
            problem: "Natural chlorine is 75.77% ³⁵Cl (34.9689 u) and 24.23% ³⁷Cl (36.9659 u). Find its average atomic mass.",
            steps: [
              t`Average mass $= \sum (\text{fractional abundance} \times \text{isotopic mass})$.`,
              t`$0.7577 \times 34.9689 = 26.496$ u.`,
              t`$0.2423 \times 36.9659 = 8.957$ u.`,
              t`Sum $= 35.453$ u.`,
            ],
            answer: "35.45 u. No single chlorine atom has this mass; it is an average.",
          },
          {
            type: "formula",
            tex: t`n = \frac{m}{M} = \frac{N}{N_A}, \qquad N_A = 6.022\,140\,76 \times 10^{23}\ \text{mol}^{-1}`,
            caption: "One mole contains exactly N_A elementary entities (atoms, molecules, ions or electrons). Molar mass M in g mol⁻¹ has the same number as the atomic or molecular mass in u.",
          },
          {
            type: "example",
            title: "Moles, molecules and atoms",
            problem: t`How many moles, molecules and atoms are present in 9.0 g of water? (H = 1, O = 16, $N_A = 6.022 \times 10^{23}$ mol$^{-1}$)`,
            steps: [
              t`$M(\text{H}_2\text{O}) = 2(1) + 16 = 18$ g mol$^{-1}$, so $n = 9.0/18 = 0.50$ mol.`,
              t`Molecules $= 0.50 \times 6.022 \times 10^{23} = 3.011 \times 10^{23}$.`,
              t`Each molecule has 3 atoms, so atoms $= 3 \times 3.011 \times 10^{23} = 9.033 \times 10^{23}$.`,
            ],
            answer: t`0.50 mol; $3.0 \times 10^{23}$ molecules; $9.0 \times 10^{23}$ atoms`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the mass (in g) of 0.25 mol of calcium carbonate, CaCO₃? (Ca = 40, C = 12, O = 16)",
                answer: 25,
                unit: "g",
                explain: "M(CaCO₃) = 40 + 12 + 48 = 100 g mol⁻¹. Mass = 0.25 × 100 = 25 g.",
              },
            ],
          },
          {
            type: "heading",
            text: "Percentage composition, empirical and molecular formula",
          },
          {
            type: "text",
            md: t`**Mass percent of an element** $= \dfrac{\text{mass of that element in 1 mol}}{\text{molar mass}} \times 100$. For ethanol C$_2$H$_5$OH ($M = 46$ g mol$^{-1}$ with C = 12, H = 1, O = 16): C $= 24/46 = 52.17\%$, H $= 6/46 = 13.04\%$, O $= 16/46 = 34.78\%$.

The **empirical formula** gives the simplest whole-number ratio of atoms; the **molecular formula** gives the actual number. Molecular formula $= n \times$ empirical formula, where $n = \dfrac{\text{molar mass}}{\text{empirical formula mass}}$.`,
          },
          {
            type: "example",
            title: "From percentages to a molecular formula",
            problem: "A sugar contains 40.0% C, 6.7% H and 53.3% O by mass. Its molar mass is 180 g mol⁻¹. Find its empirical and molecular formulae. (C = 12, H = 1.008, O = 16)",
            steps: [
              "Take 100 g: 40.0 g C, 6.7 g H, 53.3 g O.",
              t`Moles: C $= 40.0/12 = 3.33$; H $= 6.7/1.008 = 6.65$; O $= 53.3/16 = 3.33$.`,
              t`Divide by the smallest (3.33): C : H : O $= 1 : 2.0 : 1$. Empirical formula CH$_2$O.`,
              t`Empirical formula mass $= 12 + 2 + 16 = 30$; $n = 180/30 = 6$.`,
            ],
            answer: t`Empirical formula CH$_2$O; molecular formula C$_6$H$_{12}$O$_6$ (glucose).`,
          },
          {
            type: "mistake",
            wrong: "One mole of oxygen gas contains 6.022 × 10²³ oxygen atoms.",
            right: "One mole of O₂ contains 6.022 × 10²³ molecules, which is 2 × 6.022 × 10²³ = 1.204 × 10²⁴ oxygen atoms.",
            why: "\"A mole of oxygen\" is ambiguous, so always name the entity. A mole counts whatever particle you name, and each O₂ molecule carries two atoms.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each law with the scientist who gave it.",
              pairs: [
                ["Law of conservation of mass", "Lavoisier"],
                ["Law of definite proportions", "Proust"],
                ["Law of multiple proportions", "Dalton"],
                ["Law of gaseous volumes", "Gay-Lussac"],
                ["Equal volumes contain equal numbers of molecules", "Avogadro"],
              ],
              explain: "Dalton's atomic theory explains the first three laws by weighing atoms; Avogadro's distinction between atoms and molecules was needed to explain Gay-Lussac's volume ratios.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "ISC note",
            md: t`ISC papers also use **vapour density** (VD), the density of a gas compared with hydrogen at the same temperature and pressure. Since one H$_2$ molecule has mass 2 u, **molar mass = 2 × vapour density**. For CO$_2$, VD $= 44/2 = 22$.`,
          },
          {
            type: "keypoints",
            items: [
              "Five laws: conservation of mass, definite proportions, multiple proportions, gaseous volumes, Avogadro's law.",
              "1 u = 1/12 of the mass of a ¹²C atom. Tabulated atomic masses are abundance-weighted averages.",
              "n = m/M = N/N_A, with N_A = 6.022 × 10²³ mol⁻¹. Always name the entity counted.",
              "Molecular formula = n × empirical formula, n = molar mass ÷ empirical formula mass.",
            ],
          },
        ],
        flashcards: [
          { front: "Law of multiple proportions", back: "Masses of one element combining with a fixed mass of another (in different compounds) are in a simple whole-number ratio. Given by Dalton." },
          { front: "Which law did Dalton's theory fail to explain?", back: "Gay-Lussac's law of gaseous volumes. Avogadro's molecules (H₂, O₂) resolved it." },
          { front: "Definition of 1 u", back: "1/12 of the mass of one carbon-12 atom = 1.66056 × 10⁻²⁴ g." },
          { front: "Avogadro constant", back: "6.022 × 10²³ mol⁻¹: the number of entities in one mole." },
          { front: "Formula mass", back: "Sum of atomic masses in the formula unit of an ionic compound such as NaCl, which has no discrete molecules." },
          { front: "Empirical vs molecular formula", back: "Empirical: simplest whole-number ratio of atoms. Molecular: the actual number. Benzene: CH vs C₆H₆." },
          { front: "Molar mass and vapour density (ISC)", back: "M = 2 × VD." },
          { front: "Mass percent of oxygen in water", back: "16/18 × 100 = 88.9% (H = 1, O = 16)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Nitrogen forms N₂O, NO, N₂O₃, NO₂ and N₂O₅. The masses of oxygen combining with 28 g of nitrogen in these compounds are in the ratio 1 : 2 : 3 : 4 : 5. This illustrates the law of:",
            options: ["Definite proportions", "Multiple proportions", "Conservation of mass", "Gaseous volumes"],
            answer: 1,
            explain: "A fixed mass of N (28 g) combines with 16, 32, 48, 64 and 80 g of O: a simple whole-number ratio. That is the law of multiple proportions.",
          },
          {
            kind: "numeric",
            q: "How many moles of atoms are present in 4.4 g of CO₂? (C = 12, O = 16)",
            answer: 0.3,
            unit: "mol",
            explain: "4.4/44 = 0.10 mol CO₂; each molecule has 3 atoms, so 0.30 mol atoms.",
          },
          {
            kind: "mcq",
            q: "Boron has two isotopes, ¹⁰B (19.9%) and ¹¹B (80.1%). Taking their masses as 10.0 u and 11.0 u, the average atomic mass of boron is about:",
            options: ["10.5 u", "10.8 u", "10.2 u", "11.0 u"],
            answer: 1,
            explain: "0.199 × 10.0 + 0.801 × 11.0 = 1.99 + 8.81 = 10.80 u. It sits nearer 11 because ¹¹B is more abundant.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A hydrocarbon has empirical formula CH₂ and molar mass 56 g mol⁻¹. How many carbon atoms are in one molecule?",
            answer: 4,
            explain: "Empirical formula mass = 14; n = 56/14 = 4, so the molecular formula is C₄H₈.",
          },
          {
            kind: "truefalse",
            q: "Equal masses of H₂ and O₂ contain equal numbers of molecules.",
            answer: false,
            explain: "Equal volumes (same T and P) contain equal numbers of molecules. Equal masses do not: 1 g H₂ is 0.5 mol but 1 g O₂ is only 1/32 mol.",
          },
          {
            kind: "numeric",
            q: "What is the mass percent of nitrogen in urea, CO(NH₂)₂? (C = 12, N = 14, O = 16, H = 1) Give the answer to one decimal place.",
            answer: 46.7,
            tolerance: 0.1,
            unit: "%",
            explain: "M = 12 + 16 + 2(14 + 2) = 60 g mol⁻¹; N = 28 g. 28/60 × 100 = 46.7%.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A compound has C : H : O mole ratio 1 : 1.5 : 1 after dividing by the smallest value. Its empirical formula is:",
            options: ["CH₁.₅O", "CHO", "C₂H₃O₂", "CH₂O"],
            answer: 2,
            explain: "Ratios must be whole numbers. Multiply 1 : 1.5 : 1 by 2 to get 2 : 3 : 2, so C₂H₃O₂. Rounding 1.5 to 1 or 2 is wrong.",
            difficulty: 2,
            hint: "What do you multiply by to clear a .5?",
          },
          {
            kind: "numeric",
            q: "The vapour density of a gas is 32. What is its molar mass in g mol⁻¹?",
            answer: 64,
            unit: "g/mol",
            explain: "M = 2 × VD = 64 g mol⁻¹ (for example SO₂).",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-bc-stoichiometry-solutions",
        title: "Stoichiometry, Limiting Reagent and Concentration",
        summary: "Reading a balanced equation in moles, masses and volumes, finding the limiting reagent, and expressing concentration as mass percent, mole fraction, molarity and molality.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍳",
            caption: "A recipe for dosa batter fixes the ratio of rice to urad dal. A balanced equation fixes the ratio of reactants in moles.",
          },
          {
            type: "text",
            md: t`**Stoichiometry** is the calculation of the masses (and sometimes volumes) of reactants and products from a balanced equation. The coefficients give the ratio of **moles** (and of molecules, and of volumes for gases at the same T and P), never directly the ratio of masses.

For $\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(g)$: 1 mol (16 g) of methane reacts with 2 mol (64 g) of oxygen to give 1 mol (44 g) CO$_2$ and 2 mol (36 g) water. Mass is conserved: $16 + 64 = 44 + 36 = 80$ g.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Write and balance the equation (same number of each atom on both sides).",
              "Convert the given quantity to moles (n = m/M).",
              "Use the mole ratio from the coefficients.",
              "Convert the answer back to mass, volume or number of particles.",
            ],
          },
          {
            type: "heading",
            text: "Limiting reagent",
          },
          {
            type: "text",
            md: t`Reactants are often not mixed in the exact ratio of the equation. The reactant that is **used up first** is the **limiting reagent**: it decides how much product forms. The other reactant is left over **in excess**. To find it, divide the moles of each reactant by its coefficient; the smallest value marks the limiting reagent.`,
          },
          {
            type: "example",
            title: "Ammonia from nitrogen and hydrogen",
            problem: t`56.0 kg of N$_2$ and 9.0 kg of H$_2$ react: $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$. Find the limiting reagent and the mass of NH$_3$ formed. (N = 14, H = 1)`,
            steps: [
              t`Moles: N$_2 = 56\,000/28 = 2000$ mol; H$_2 = 9000/2 = 4500$ mol.`,
              t`Divide by coefficients: N$_2$: $2000/1 = 2000$; H$_2$: $4500/3 = 1500$. H$_2$ gives the smaller value, so **H$_2$ is limiting**.`,
              t`NH$_3$ formed $= \tfrac{2}{3} \times 4500 = 3000$ mol.`,
              t`Mass $= 3000 \times 17 = 51\,000$ g $= 51.0$ kg. N$_2$ used $= 1500$ mol, so 500 mol (14.0 kg) N$_2$ is left over.`,
            ],
            answer: "H₂ is the limiting reagent; 51.0 kg of NH₃ forms and 14.0 kg of N₂ remains.",
          },
          {
            type: "mistake",
            wrong: "The reactant with the smaller mass is always the limiting reagent.",
            right: "Compare moles divided by stoichiometric coefficients. In the example above H₂ (9 kg) is limiting, but so would N₂ be if only a little were present: mass alone does not decide.",
            why: "Equations count particles, not grams. Light molecules like H₂ give many moles from a small mass, and a large coefficient means a reactant is used up faster.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "2 mol H₂ and 2 mol O₂ react to form water. Which is limiting?",
              emoji: "💧",
              options: ["O₂, because it is heavier", "H₂, because 2 mol H₂ needs only 1 mol O₂ but uses itself up", "Neither; they are equal in moles", "O₂, because it has the smaller coefficient"],
              answer: 1,
              trap: 2,
              explain: "For 2H₂ + O₂ → 2H₂O, divide by coefficients: H₂ 2/2 = 1, O₂ 2/1 = 2. H₂ runs out first; 2 mol water forms and 1 mol O₂ is left. Equal moles do not mean equal use.",
            },
          },
          {
            type: "heading",
            text: "Reactions in solution: concentration terms",
          },
          {
            type: "table",
            headers: ["Term", "Definition", "Unit", "Depends on temperature?"],
            rows: [
              ["Mass percent (w/w)", t`$\dfrac{\text{mass of solute}}{\text{mass of solution}} \times 100$`, "%", "no"],
              ["Mole fraction", t`$x_A = \dfrac{n_A}{n_A + n_B}$; all mole fractions add to 1`, "none", "no"],
              ["Molarity (M)", t`$\dfrac{\text{moles of solute}}{\text{volume of solution in L}}$`, t`mol L$^{-1}$`, "yes (volume changes)"],
              ["Molality (m)", t`$\dfrac{\text{moles of solute}}{\text{mass of solvent in kg}}$`, t`mol kg$^{-1}$`, "no"],
            ],
          },
          {
            type: "example",
            title: "Molarity, molality and mole fraction",
            problem: "(a) 4.0 g NaOH is dissolved to make 250 mL of solution. Find its molarity. (b) 3.0 g urea (M = 60) is dissolved in 200 g water. Find the molality. (c) Find the mole fraction of ethanol in a mixture of 46 g ethanol and 9.0 g water. (Na = 23, O = 16, H = 1, C = 12)",
            steps: [
              t`(a) $n = 4.0/40 = 0.10$ mol; $M = 0.10/0.250 = 0.40$ mol L$^{-1}$.`,
              t`(b) $n = 3.0/60 = 0.050$ mol; $m = 0.050/0.200 = 0.25$ mol kg$^{-1}$.`,
              t`(c) Ethanol: $46/46 = 1.0$ mol; water: $9.0/18 = 0.50$ mol. $x_{\text{ethanol}} = 1.0/1.5 = 0.67$.`,
            ],
            answer: "(a) 0.40 M, (b) 0.25 m, (c) 0.67",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What volume (in mL) of 2.0 M HCl is needed to make 500 mL of 0.40 M HCl?",
                answer: 100,
                unit: "mL",
                explain: "Moles of solute stay the same on dilution: M₁V₁ = M₂V₂, so V₁ = 0.40 × 500/2.0 = 100 mL.",
              },
              {
                kind: "mcq",
                q: "Which concentration term changes when a solution is warmed?",
                options: ["Molality", "Mole fraction", "Molarity", "Mass percent"],
                answer: 2,
                explain: "Molarity uses the volume of solution, which expands on warming. The others are built only from masses or moles.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "In limiting-reagent questions, examiners give marks for (1) the balanced equation, (2) moles of each reactant, (3) naming the limiting reagent with a reason, (4) the product amount. Write each step on its own line. In concentration problems, write the definition first: molarity per litre of solution, molality per kilogram of solvent.",
          },
          {
            type: "keypoints",
            items: [
              "Coefficients give mole ratios (and gas volume ratios at the same T, P), not mass ratios.",
              "Limiting reagent: smallest value of moles ÷ coefficient. It fixes the amount of product.",
              "Molarity = mol per L of solution (depends on T); molality = mol per kg of solvent (does not).",
              "Dilution: M₁V₁ = M₂V₂. Mole fractions of all components add to 1.",
            ],
          },
        ],
        flashcards: [
          { front: "Stoichiometry", back: "Calculating amounts of reactants and products from the balanced equation." },
          { front: "How to find the limiting reagent", back: "Divide the moles of each reactant by its coefficient; the smallest result is the limiting reagent." },
          { front: "Molarity", back: "Moles of solute per litre of solution (mol L⁻¹)." },
          { front: "Molality", back: "Moles of solute per kilogram of solvent (mol kg⁻¹). Independent of temperature." },
          { front: "Mole fraction", back: "Moles of a component ÷ total moles. No unit; all mole fractions add to 1." },
          { front: "Dilution formula", back: "M₁V₁ = M₂V₂ (moles of solute unchanged)." },
          { front: "Mass of CO₂ from 16 g CH₄ (complete combustion)", back: "1 mol CH₄ → 1 mol CO₂ = 44 g." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What mass (in g) of CO₂ forms when 6.0 g of carbon burns completely in excess oxygen? (C = 12, O = 16)",
            answer: 22,
            unit: "g",
            explain: "C + O₂ → CO₂. 6.0/12 = 0.50 mol C gives 0.50 mol CO₂ = 0.50 × 44 = 22 g.",
          },
          {
            kind: "mcq",
            q: "For 4Fe + 3O₂ → 2Fe₂O₃, 4 mol Fe and 4 mol O₂ are mixed. The limiting reagent is:",
            options: ["O₂", "Fe", "Both are used up exactly", "Fe₂O₃"],
            answer: 1,
            explain: "Fe: 4/4 = 1; O₂: 4/3 = 1.33. Fe gives the smaller value, so Fe is limiting and 1 mol O₂ is left over.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many grams of water form when 4 g of H₂ reacts with 64 g of O₂? (H = 1, O = 16)",
            answer: 36,
            unit: "g",
            explain: "2H₂ + O₂ → 2H₂O. H₂: 2 mol (2/2 = 1); O₂: 2 mol (2/1 = 2). H₂ is limiting; 2 mol H₂O = 36 g form, and 1 mol (32 g) O₂ is left.",
            difficulty: 2,
            hint: "Check which reactant runs out first.",
          },
          {
            kind: "numeric",
            q: "Find the molarity of a solution containing 5.85 g of NaCl in 500 mL of solution. (Na = 23, Cl = 35.5)",
            answer: 0.2,
            unit: "M",
            explain: "n = 5.85/58.5 = 0.100 mol; M = 0.100/0.500 = 0.200 mol L⁻¹.",
          },
          {
            kind: "truefalse",
            q: "Molality of a solution remains unchanged when its temperature is raised.",
            answer: true,
            explain: "Molality uses moles of solute and mass of solvent, and neither changes with temperature.",
          },
          {
            kind: "numeric",
            q: "10 g of glucose is dissolved in 90 g of water. What is the mass percent of glucose?",
            answer: 10,
            unit: "%",
            explain: "Mass of solution = 100 g, so mass percent = 10/100 × 100 = 10%.",
          },
          {
            kind: "mcq",
            q: "The mole fraction of a solute in an aqueous solution is 0.10. The mole fraction of water is:",
            options: ["0.10", "0.90", "9.0", "1.10"],
            answer: 1,
            explain: "Mole fractions add to 1, so x(water) = 1 − 0.10 = 0.90.",
          },
          {
            kind: "order",
            q: "Put the steps of a stoichiometry calculation in order.",
            items: ["Balance the equation", "Convert the given mass to moles", "Apply the mole ratio from coefficients", "Convert moles of the required substance to mass"],
            explain: "Balance first; then grams → moles → mole ratio → grams.",
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-bc-exam-edge",
        title: "Exam edge: Mole Concept for JEE, NEET, KCET and COMEDK",
        summary: "How the mole concept is tested, the shortcuts worth knowing, gas-volume and mixture problems from CET to JEE Advanced level, and the classic unit traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`The mole concept is the language of every numerical in physical chemistry: equilibrium, thermodynamics, electrochemistry, solutions and redox titrations all start with "convert to moles". **JEE Main** usually has one direct question (often a numerical-value type), **NEET** one or two (molarity, number of atoms, limiting reagent), and **KCET / COMEDK** two or three quick ones. **JEE Advanced** hides it inside mixture, gas-volume and multi-step problems. Class 11 is where this speed is built.`,
          },
          {
            type: "table",
            headers: ["What exams ask", "Typical form"],
            rows: [
              ["Counting particles", "atoms, ions, electrons or protons in a given mass"],
              ["Limiting reagent and % yield", "mass of product, mass left over"],
              ["Concentration conversions", "molarity ↔ molality ↔ mole fraction using density"],
              ["Gas volumes", "volume ratios from equations; combustion / eudiometry of hydrocarbons"],
              ["Mixtures", "composition from mass loss or gas evolved (POAC: conservation of atoms)"],
            ],
          },
          {
            type: "formula",
            tex: t`m = \frac{1000\,M}{1000\,d - M\,M_B} \qquad\qquad x_B = \frac{m}{m + 1000/M_A}`,
            caption: "M = molarity, d = density of solution in g mL⁻¹, M_B = molar mass of solute, M_A = molar mass of solvent. For water 1000/18 = 55.6.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: t`**POAC** (conservation of atoms): moles of an atom are the same before and after, even across several steps. Safe whenever an element ends up in one known product. For gases at the **same T and P**, work with volumes directly as if they were moles. Molar volume: **22.7 L mol$^{-1}$ at 273.15 K and 1 bar** (current IUPAC STP, used by NCERT) but **22.4 L mol$^{-1}$ at 273 K and 1 atm**: read which the question uses. Percent yield $= \frac{\text{actual}}{\text{theoretical}} \times 100$.`,
          },
          {
            type: "example",
            title: "KCET / NEET level: counting electrons",
            problem: t`How many electrons are present in 1.8 g of H$_2$O? ($N_A = 6.022 \times 10^{23}$)`,
            steps: [
              t`$n = 1.8/18 = 0.10$ mol of molecules.`,
              t`Each H$_2$O has $2(1) + 8 = 10$ electrons, so 1.0 mol of electrons.`,
              t`Number $= 1.0 \times 6.022 \times 10^{23}$.`,
            ],
            answer: t`$6.022 \times 10^{23}$ electrons`,
          },
          {
            type: "example",
            title: "JEE Main level: molarity to molality",
            problem: "A 2.0 M aqueous NaCl solution has density 1.08 g mL⁻¹. Find its molality and the mole fraction of NaCl. (NaCl = 58.5 g mol⁻¹)",
            steps: [
              "Take 1 L of solution: mass = 1080 g; NaCl = 2.0 mol = 117 g.",
              "Mass of water = 1080 − 117 = 963 g = 0.963 kg.",
              t`$m = 2.0/0.963 = 2.08$ mol kg$^{-1}$ (same as the formula: $2000/(1080 - 117)$).`,
              t`Water $= 963/18 = 53.5$ mol; $x_{\text{NaCl}} = 2.0/(2.0 + 53.5) = 0.036$.`,
            ],
            answer: "Molality ≈ 2.08 m; mole fraction of NaCl ≈ 0.036",
          },
          {
            type: "example",
            title: "JEE Main level: mixture by mass loss",
            problem: t`10.0 g of a mixture of Na$_2$CO$_3$ and NaHCO$_3$ is heated strongly until the mass is constant. The loss in mass is 1.24 g. Find the percentage of NaHCO$_3$. (Na = 23, H = 1, C = 12, O = 16)`,
            steps: [
              t`Only the bicarbonate decomposes: $2\text{NaHCO}_3 \rightarrow \text{Na}_2\text{CO}_3 + \text{H}_2\text{O} + \text{CO}_2$. Na$_2$CO$_3$ is stable to heat.`,
              t`168 g (2 mol) NaHCO$_3$ loses $18 + 44 = 62$ g.`,
              t`Mass of NaHCO$_3$ $= 1.24 \times 168/62 = 3.36$ g.`,
            ],
            answer: "33.6% NaHCO₃",
          },
          {
            type: "example",
            title: "JEE Advanced level: eudiometry",
            problem: t`10 mL of a gaseous hydrocarbon C$_x$H$_y$ is exploded with 80 mL of O$_2$ (excess). After cooling to room temperature the volume is 65 mL; after passing through KOH solution it falls to 45 mL. Find the formula. (All volumes at the same T and P; water condenses.)`,
            steps: [
              t`$\text{C}_x\text{H}_y + (x + \tfrac{y}{4})\text{O}_2 \rightarrow x\,\text{CO}_2 + \tfrac{y}{2}\,\text{H}_2\text{O}(l)$.`,
              t`KOH absorbs CO$_2$: CO$_2 = 65 - 45 = 20$ mL $= 10x$, so $x = 2$.`,
              t`The 45 mL left is unused O$_2$, so O$_2$ used $= 80 - 45 = 35$ mL $= 10(x + y/4)$, giving $x + y/4 = 3.5$ and $y = 6$.`,
              t`Check the contraction on cooling: $90 - 65 = 25$ mL should equal $10(1 + y/4) = 25$ mL. ✔`,
            ],
            answer: t`C$_2$H$_6$ (ethane)`,
          },
          {
            type: "mistake",
            wrong: "Molarity and molality are almost the same, so I can use 2.0 M as 2.0 m in any problem.",
            right: "They are close only for dilute aqueous solutions. For 2.0 M NaCl (d = 1.08 g mL⁻¹) the molality is 2.08 m; for concentrated or non-aqueous solutions the gap is much larger.",
            why: "Molarity divides by litres of solution, molality by kilograms of solvent. Only when the solution is dilute and has density close to 1 g mL⁻¹ do these two denominators match.",
          },
          {
            type: "mistake",
            wrong: "In eudiometry, water formed counts as a gas in the final volume.",
            right: "Read the conditions. At room temperature water is a liquid and its volume is ignored; only above 100 °C (or if the question says steam) does it count.",
            why: "The liquid volume of the water is negligible compared with gas volumes, so after cooling all the water vapour simply disappears from the gas volume.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the quantity to its correct denominator.",
              pairs: [
                ["Molarity", "litres of solution"],
                ["Molality", "kilograms of solvent"],
                ["Mole fraction", "total moles of all components"],
                ["Mass percent", "mass of solution"],
              ],
              explain: "Most exam errors in concentration problems come from dividing by the wrong denominator. Molality is the only one that uses solvent rather than solution.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In a reaction expected to give 51 g of NH₃, only 34 g is obtained. What is the percent yield (to the nearest whole number)?",
                answer: 67,
                tolerance: 0.5,
                unit: "%",
                explain: "Percent yield = 34/51 × 100 = 66.7% ≈ 67%.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Convert everything to moles first; for gases at the same T and P, volumes behave like moles.",
              "m = 1000M/(1000d − M·M_B). Molality is temperature-independent; molarity is not.",
              "POAC: count atoms of one element before and after; it skips intermediate equations.",
              "Eudiometry: KOH absorbs CO₂, alkaline pyrogallol absorbs O₂; water is liquid at room temperature.",
              "Check STP: 22.7 L mol⁻¹ (1 bar) or 22.4 L mol⁻¹ (1 atm).",
            ],
          },
        ],
        flashcards: [
          { front: "Molality from molarity and density", back: "m = 1000M / (1000d − M·M_B), d in g mL⁻¹." },
          { front: "Molar volume at 273.15 K, 1 bar", back: "22.7 L mol⁻¹ (22.4 L mol⁻¹ at 1 atm)." },
          { front: "POAC", back: "Principle of atom conservation: moles of each element are conserved through every step of a reaction." },
          { front: "Electrons in one H₂O molecule", back: "10 (1 + 1 + 8)." },
          { front: "Combustion of CₓHᵧ: O₂ needed per mole", back: "x + y/4 mol O₂; gives x CO₂ and y/2 H₂O." },
          { front: "What absorbs CO₂ in eudiometry?", back: "KOH (or NaOH) solution. Alkaline pyrogallol absorbs O₂." },
          { front: "Percent yield", back: "(actual yield ÷ theoretical yield) × 100." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many moles of protons are present in 0.46 g of Na⁺ ions? (Na = 23, Z = 11)",
            answer: 0.22,
            tolerance: 0.001,
            unit: "mol",
            explain: "0.46/23 = 0.020 mol Na⁺. Losing an electron does not change the number of protons: 11 per ion, so 0.22 mol protons.",
            difficulty: 2,
            hint: "Ionisation removes electrons, not protons.",
          },
          {
            kind: "mcq",
            q: "Which has the largest number of atoms? (H = 1, C = 12, O = 16, Na = 23)",
            options: ["2 g H₂", "16 g O₂", "23 g Na", "11 g CO₂"],
            answer: 0,
            explain: "2 g H₂ = 1 mol molecules = 2 mol atoms; 16 g O₂ = 0.5 mol × 2 = 1 mol atoms; 23 g Na = 1 mol atoms; 11 g CO₂ = 0.25 mol × 3 = 0.75 mol atoms. Count atoms, not molecules.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Calculate the molality of a 10% (w/w) aqueous solution of NaOH. (NaOH = 40 g mol⁻¹) Give two decimal places.",
            answer: 2.78,
            tolerance: 0.01,
            unit: "mol/kg",
            explain: "100 g solution: 10 g NaOH = 0.25 mol, water = 90 g = 0.090 kg. m = 0.25/0.090 = 2.78 mol kg⁻¹.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "20 mL of a mixture of CH₄ and C₂H₆ gives 30 mL of CO₂ on complete combustion (same T, P). What volume (in mL) of CH₄ was in the mixture?",
            answer: 10,
            unit: "mL",
            explain: "Let CH₄ = a mL; C₂H₆ = 20 − a. CO₂: a + 2(20 − a) = 30 → a = 10 mL.",
            difficulty: 2,
            hint: "Each C₂H₆ gives 2 CO₂; each CH₄ gives 1.",
          },
          {
            kind: "numeric",
            q: "In the previous mixture (10 mL CH₄ + 10 mL C₂H₆), what volume of O₂ in mL is needed for complete combustion?",
            answer: 55,
            unit: "mL",
            explain: "CH₄ needs 2 vol O₂: 20 mL. C₂H₆ needs 3.5 vol (2C₂H₆ + 7O₂): 35 mL. Total 55 mL.",
            difficulty: 3,
          },
          {
            kind: "multi",
            q: "Which concentration terms are independent of temperature?",
            options: ["Molarity", "Molality", "Mole fraction", "Mass percent (w/w)"],
            answers: [1, 2, 3],
            explain: "Molality, mole fraction and w/w percent use only masses or moles. Molarity uses volume of solution, which changes with temperature.",
          },
          {
            kind: "numeric",
            q: "A 5.0 g sample of impure CaCO₃ gives 1.76 g of CO₂ on strong heating (impurities give no gas). What is the percent purity? (Ca = 40, C = 12, O = 16)",
            answer: 80,
            unit: "%",
            explain: "1.76/44 = 0.040 mol CO₂ = 0.040 mol CaCO₃ = 4.0 g. Purity = 4.0/5.0 × 100 = 80%.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A gaseous hydrocarbon (10 mL) needs exactly 45 mL of O₂ for complete combustion and gives 30 mL of CO₂ (same T, P). How many hydrogen atoms are in one molecule?",
            answer: 6,
            explain: "x = 30/10 = 3. O₂: x + y/4 = 45/10 = 4.5, so y/4 = 1.5, y = 6. The gas is C₃H₆.",
            difficulty: 3,
            hint: "Use CO₂ for x, then O₂ for y.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Structure of Atom (NCERT Class 11 Unit 2; same title in ISC)        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-structure-of-atom",
    title: "Structure of Atom",
    icon: "⚛️",
    description: "Subatomic particles, the Thomson and Rutherford models, electromagnetic radiation, Planck's quantum theory, the photoelectric effect, the Bohr model and hydrogen spectrum, de Broglie and Heisenberg, quantum numbers, orbitals and electronic configuration.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-atom-particles-models",
        title: "Subatomic Particles and Early Atomic Models",
        summary: "Cathode rays and the electron, e/m and Millikan's charge, protons and neutrons, Thomson's and Rutherford's models, atomic number, mass number, isotopes and isobars, and why Rutherford's model failed.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "📺",
            caption: "Old television sets and neon signs both work with discharge tubes: the same kind of tube that revealed the electron.",
          },
          {
            type: "text",
            md: t`Dalton thought atoms could not be divided. Experiments with **discharge tubes** (gas at very low pressure, a high voltage between two electrodes) showed otherwise. A stream of particles called **cathode rays** flows from the cathode (−) to the anode (+). They travel in straight lines, are invisible but make a fluorescent coating glow, are deflected towards the **positive** plate in an electric field, and their behaviour does **not depend** on the gas or the metal of the electrode. So these negative particles, the **electrons**, are part of every atom.`,
          },
          {
            type: "table",
            headers: ["Particle", "Found by", "Charge (C)", "Mass (kg)"],
            rows: [
              ["Electron", "J. J. Thomson (e/m, 1897); charge by R. A. Millikan (oil-drop)", t`$-1.602 \times 10^{-19}$`, t`$9.109 \times 10^{-31}$`],
              ["Proton", "positive canal rays (E. Goldstein); characterised from hydrogen gas", t`$+1.602 \times 10^{-19}$`, t`$1.673 \times 10^{-27}$`],
              ["Neutron", "James Chadwick (1932), by bombarding beryllium with α-particles", "0", t`$1.675 \times 10^{-27}$`],
            ],
          },
          {
            type: "text",
            md: t`Thomson measured the **charge-to-mass ratio** of the electron by balancing electric and magnetic deflections: $e/m_e = 1.758820 \times 10^{11}$ C kg$^{-1}$. Millikan's oil-drop experiment found the charge $e = 1.6 \times 10^{-19}$ C, which gives $m_e = e \div (e/m_e) = 9.1 \times 10^{-31}$ kg. Unlike cathode rays, **canal rays** (positive rays) depend on the gas in the tube; the lightest, from hydrogen, is the **proton**.`,
          },
          {
            type: "heading",
            text: "Thomson's and Rutherford's models",
          },
          {
            type: "text",
            md: t`**Thomson's model** (plum pudding or watermelon model): positive charge spread uniformly through a sphere of radius about $10^{-10}$ m, with electrons embedded in it so that the atom is neutral. It explained neutrality but not Rutherford's results.

**Rutherford's α-particle scattering**: a beam of α-particles (He$^{2+}$) struck a very thin gold foil, with a zinc sulphide screen around it.`,
          },
          {
            type: "table",
            headers: ["Observation", "Conclusion"],
            rows: [
              ["Most α-particles passed straight through", "most of the atom is empty space"],
              ["A small fraction was deflected by small angles", "the positive charge is concentrated in a tiny region"],
              ["Very few (about 1 in 20 000) bounced back almost 180°", t`a tiny, dense, positive **nucleus** holds nearly all the mass; nuclear radius $\sim 10^{-15}$ m versus atomic radius $\sim 10^{-10}$ m`],
            ],
          },
          {
            type: "text",
            md: t`In Rutherford's **nuclear model**, electrons move round the nucleus in circular paths (like planets round the Sun), held by electrostatic attraction.

**Atomic number** $Z$ = number of protons (= number of electrons in a neutral atom). **Mass number** $A$ = protons + neutrons (the **nucleons**). A nucleus is written $^{A}_{Z}\text{X}$; neutrons $= A - Z$. **Isotopes** have the same $Z$ but different $A$ (protium $^1_1$H, deuterium $^2_1$H, tritium $^3_1$H); they have almost the same chemistry because chemistry depends on electrons. **Isobars** have the same $A$ but different $Z$ ($^{14}_{6}$C and $^{14}_{7}$N).`,
          },
          {
            type: "example",
            title: "Counting particles",
            problem: t`Find the numbers of protons, neutrons and electrons in (a) $^{80}_{35}$Br and (b) $^{56}_{26}$Fe$^{3+}$.`,
            steps: [
              t`(a) Protons $= Z = 35$; neutrons $= 80 - 35 = 45$; neutral atom, so electrons $= 35$.`,
              t`(b) Protons $= 26$; neutrons $= 56 - 26 = 30$.`,
              t`A charge of 3+ means 3 electrons lost: electrons $= 26 - 3 = 23$.`,
            ],
            answer: "(a) 35 p, 45 n, 35 e; (b) 26 p, 30 n, 23 e",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pair are isobars?",
                options: ["¹²C and ¹⁴C", "⁴⁰Ar and ⁴⁰Ca", "¹H and ²H", "¹⁶O and ¹⁸O"],
                answer: 1,
                explain: "⁴⁰Ar (Z = 18) and ⁴⁰Ca (Z = 20) share mass number 40 but differ in atomic number. The others are isotope pairs.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Rutherford's model is complete: electrons simply orbit the nucleus like planets, so the atom is stable.",
            right: "By classical electromagnetic theory, an electron moving in a circle is accelerating and must radiate energy, so it would spiral into the nucleus. Rutherford's model cannot explain the stability of atoms, nor the energies and arrangement of electrons.",
            why: "Planets are neutral and do not radiate, so the analogy feels safe. Charged particles do radiate when accelerated, and that is the weakness that led to Bohr's model.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each discovery with the scientist.",
              pairs: [
                ["Charge-to-mass ratio of the electron", "J. J. Thomson"],
                ["Charge on the electron (oil drops)", "R. A. Millikan"],
                ["Atomic nucleus (gold foil)", "Ernest Rutherford"],
                ["Neutron", "James Chadwick"],
                ["Canal (anode) rays", "Eugen Goldstein"],
              ],
              explain: "Each experiment added one piece: Thomson's e/m and Millikan's e together gave the electron's mass; Rutherford found the nucleus; Chadwick explained the extra mass of nuclei with the neutron.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "For Rutherford's experiment, examiners expect three observations each paired with its conclusion, and then the two drawbacks of the model (stability, electron arrangement and energies). A neat table answer scores full marks.",
          },
          {
            type: "keypoints",
            items: [
              "Cathode rays are electrons: negative, travel straight, independent of gas and electrode material.",
              "e/m = 1.758820 × 10¹¹ C kg⁻¹ (Thomson); e = 1.602 × 10⁻¹⁹ C (Millikan); mₑ = 9.109 × 10⁻³¹ kg.",
              "Rutherford: atom mostly empty, tiny dense positive nucleus (~10⁻¹⁵ m).",
              "Z = protons; A = protons + neutrons. Isotopes: same Z; isobars: same A.",
              "Rutherford's model fails to explain atomic stability and electron energies.",
            ],
          },
        ],
        flashcards: [
          { front: "Cathode rays are deflected towards which plate?", back: "The positive plate: they are negatively charged electrons." },
          { front: "e/m of the electron", back: "1.758820 × 10¹¹ C kg⁻¹ (J. J. Thomson)." },
          { front: "Who discovered the neutron and how?", back: "James Chadwick, 1932: bombarding beryllium with α-particles." },
          { front: "Most α-particles passed undeflected through gold foil. Conclusion?", back: "Most of the atom is empty space." },
          { front: "Isotopes", back: "Atoms of the same element (same Z) with different mass numbers, e.g. ¹H, ²H, ³H." },
          { front: "Isobars", back: "Atoms of different elements with the same mass number, e.g. ¹⁴C and ¹⁴N." },
          { front: "Main drawback of Rutherford's model", back: "An orbiting (accelerating) electron should radiate energy and fall into the nucleus, so the model cannot explain stability." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The e/m value of canal rays depends on the gas in the tube, but that of cathode rays does not. This shows that:",
            options: ["Electrons are heavier than protons", "Electrons are the same in all atoms", "Canal rays are electromagnetic waves", "Cathode rays are made of protons"],
            answer: 1,
            explain: "Cathode rays (electrons) behave identically whatever the gas or electrode, so electrons are a universal constituent. Canal rays are positive ions of the gas, so they change.",
          },
          {
            kind: "numeric",
            q: "How many neutrons are present in ²³⁵₉₂U?",
            answer: 143,
            explain: "Neutrons = A − Z = 235 − 92 = 143.",
          },
          {
            kind: "numeric",
            q: "How many electrons are in the sulphide ion ³²₁₆S²⁻?",
            answer: 18,
            explain: "Z = 16; a 2− charge means 2 extra electrons: 16 + 2 = 18.",
          },
          {
            kind: "truefalse",
            q: "Isotopes of an element have nearly identical chemical properties.",
            answer: true,
            explain: "Chemical properties depend on the number of electrons, which is the same for isotopes. Only properties that depend on mass (like rate of diffusion) differ.",
          },
          {
            kind: "mcq",
            q: "In Rutherford's experiment, the very few α-particles that bounced back showed that:",
            options: ["Electrons are spread through the atom", "The positive charge and mass are concentrated in a tiny nucleus", "The atom is mostly solid", "α-particles are negatively charged"],
            answer: 1,
            explain: "Only a very small, dense, positively charged centre can repel a fast, heavy α-particle straight back.",
          },
          {
            kind: "mcq",
            q: "Which species has the same number of electrons as Ne?",
            options: ["Na", "Mg²⁺", "Cl⁻", "K⁺"],
            answer: 1,
            explain: "Ne has 10 electrons. Mg²⁺ has 12 − 2 = 10. Na has 11, Cl⁻ 18, K⁺ 18.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The total number of protons and neutrons in a nucleus is called the ___ number.",
            answer: ["mass"],
            explain: "Mass number A = protons + neutrons (nucleons).",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-atom-radiation-quantum",
        title: "Electromagnetic Radiation, Planck's Quanta and the Photoelectric Effect",
        summary: "Wave description of light, the electromagnetic spectrum, Planck's quantum theory, the photoelectric effect and dual behaviour of radiation, and emission and absorption line spectra.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎆",
            caption: "Diwali fireworks glow red with strontium salts, green with barium and yellow with sodium. Each element gives out only certain colours.",
          },
          {
            type: "text",
            md: t`James Maxwell described light as **electromagnetic radiation**: oscillating electric and magnetic fields, perpendicular to each other and to the direction of travel, needing no medium. All such radiation moves through vacuum at $c = 3.0 \times 10^{8}$ m s$^{-1}$. It is described by **frequency** $\nu$ (Hz $=$ s$^{-1}$), **wavelength** $\lambda$ (m) and **wavenumber** $\bar{\nu} = 1/\lambda$ (m$^{-1}$, often cm$^{-1}$).`,
          },
          {
            type: "formula",
            tex: t`c = \nu\lambda \qquad\qquad \bar{\nu} = \frac{1}{\lambda} \qquad\qquad E = h\nu = \frac{hc}{\lambda}`,
            caption: "h = 6.626 × 10⁻³⁴ J s (Planck's constant). Energy rises with frequency and falls with wavelength.",
          },
          {
            type: "text",
            md: t`In order of **increasing wavelength** the electromagnetic spectrum runs: cosmic and γ-rays, X-rays, ultraviolet, **visible** (about 400 nm violet to 750 nm red), infrared, microwaves, radio waves.

The wave picture could not explain three things: **black-body radiation** (how the colour of a hot body changes with temperature), the **photoelectric effect**, and the **line spectra** of atoms. In 1900 Max **Planck** proposed that atoms emit or absorb energy only in small packets called **quanta**; a quantum of light is a **photon**, with energy $E = h\nu$.`,
          },
          {
            type: "example",
            title: "Energy of a photon",
            problem: t`Find the frequency and energy of a photon of wavelength 500 nm, and the energy of one mole of such photons. ($h = 6.626 \times 10^{-34}$ J s, $c = 3.0 \times 10^{8}$ m s$^{-1}$, $N_A = 6.022 \times 10^{23}$ mol$^{-1}$)`,
            steps: [
              t`$\nu = c/\lambda = (3.0 \times 10^{8})/(500 \times 10^{-9}) = 6.0 \times 10^{14}$ Hz.`,
              t`$E = h\nu = 6.626 \times 10^{-34} \times 6.0 \times 10^{14} = 3.98 \times 10^{-19}$ J.`,
              t`Per mole: $3.98 \times 10^{-19} \times 6.022 \times 10^{23} = 2.39 \times 10^{5}$ J $= 239$ kJ mol$^{-1}$.`,
            ],
            answer: t`$\nu = 6.0 \times 10^{14}$ Hz; $E = 3.98 \times 10^{-19}$ J; 239 kJ mol$^{-1}$`,
          },
          {
            type: "heading",
            text: "The photoelectric effect",
          },
          {
            type: "list",
            items: [
              "When light of suitable frequency falls on a clean metal surface (e.g. K, Rb, Cs), electrons are ejected at once: there is no time lag.",
              t`Below a **threshold frequency** $\nu_0$ no electron is ejected, however bright the light.`,
              "Above ν₀, the number of electrons ejected is proportional to the **intensity** (brightness) of the light.",
              "The kinetic energy of the ejected electrons increases with the **frequency** of the light, not with its intensity.",
            ],
          },
          {
            type: "formula",
            tex: t`h\nu = h\nu_0 + \tfrac{1}{2}m_e v^2 \qquad (W_0 = h\nu_0 \text{ is the work function})`,
            caption: "Einstein (1905): one photon gives all its energy to one electron. Part pulls the electron free (W₀); the rest becomes kinetic energy.",
          },
          {
            type: "example",
            title: "Kinetic energy of a photoelectron",
            problem: t`Light of wavelength 400 nm falls on a metal with work function 2.25 eV. Find the kinetic energy and speed of the ejected electrons. ($1\ \text{eV} = 1.602 \times 10^{-19}$ J, $m_e = 9.109 \times 10^{-31}$ kg)`,
            steps: [
              t`$E = hc/\lambda = (6.626 \times 10^{-34} \times 3.0 \times 10^{8})/(4.00 \times 10^{-7}) = 4.97 \times 10^{-19}$ J (3.10 eV).`,
              t`$W_0 = 2.25 \times 1.602 \times 10^{-19} = 3.60 \times 10^{-19}$ J.`,
              t`KE $= 4.97 \times 10^{-19} - 3.60 \times 10^{-19} = 1.37 \times 10^{-19}$ J (0.85 eV).`,
              t`$v = \sqrt{2\,\text{KE}/m_e} = \sqrt{2 \times 1.37 \times 10^{-19}/9.109 \times 10^{-31}} = 5.5 \times 10^{5}$ m s$^{-1}$.`,
            ],
            answer: t`KE $\approx 1.37 \times 10^{-19}$ J; $v \approx 5.5 \times 10^{5}$ m s$^{-1}$`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Red light ejects no electrons from a metal. What if we make it twice as bright?",
              emoji: "💡",
              options: ["Electrons are ejected, but slowly", "Still no electrons are ejected", "Electrons are ejected after a delay", "Twice as many electrons are ejected"],
              answer: 1,
              trap: 3,
              explain: "Each photon of red light has too little energy (ν < ν₀). Brighter light means more such photons, but no single photon can free an electron, so nothing happens.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In the photoelectric effect, the kinetic energy of ejected electrons depends on:",
                options: ["Intensity of light", "Frequency of light", "Duration of exposure", "Area of the metal"],
                answer: 1,
                explain: "KE = hν − hν₀ depends only on frequency (and the metal). Intensity changes the number of electrons, not their energy.",
              },
            ],
          },
          {
            type: "text",
            md: t`So light behaves as a **wave** (interference, diffraction) and as a stream of **particles** (photoelectric effect, black-body radiation): this is the **dual behaviour** of electromagnetic radiation.

When an element's vapour or its salt in a flame is excited, it emits light of only certain wavelengths: an **emission spectrum** of bright lines on a dark background. When white light passes through the cool vapour, the same wavelengths are absorbed: an **absorption spectrum** of dark lines. These **line (atomic) spectra** are fingerprints of elements; rubidium, caesium, thallium, indium, gallium and scandium were discovered this way, and helium was found in the Sun's spectrum.`,
          },
          {
            type: "mistake",
            wrong: "A continuous spectrum and a line spectrum are the same thing, just seen with different prisms.",
            right: "White light from a hot solid gives a continuous spectrum (all colours merge). Excited gaseous atoms give a line spectrum: only certain sharp wavelengths, different for each element.",
            why: "Both are spread out by a prism, so they look similar at first. But the lines appear only because an atom's electrons can have only certain energies, which is the clue Bohr used.",
          },
          {
            type: "keypoints",
            items: [
              "c = νλ; ν̄ = 1/λ; E = hν = hc/λ, h = 6.626 × 10⁻³⁴ J s.",
              "Planck: energy is emitted or absorbed in quanta; a light quantum is a photon.",
              "Photoelectric effect: threshold frequency, no time lag, number ∝ intensity, KE ∝ (ν − ν₀).",
              "hν = W₀ + ½mv². Radiation has dual (wave and particle) nature.",
              "Atoms give line spectra (emission or absorption), unique to each element.",
            ],
          },
        ],
        flashcards: [
          { front: "Planck's quantum theory", back: "Energy is emitted or absorbed only in discrete packets (quanta), each of energy E = hν." },
          { front: "Value of Planck's constant", back: "6.626 × 10⁻³⁴ J s." },
          { front: "Threshold frequency", back: "The minimum frequency of light that can eject an electron from a given metal (ν₀ = W₀/h)." },
          { front: "Effect of intensity in the photoelectric effect", back: "More intense light (above ν₀) ejects more electrons, but each has the same maximum KE." },
          { front: "Wavenumber", back: "ν̄ = 1/λ, the number of wavelengths per unit length (m⁻¹ or cm⁻¹)." },
          { front: "Emission vs absorption spectrum", back: "Emission: bright lines on a dark background from excited atoms. Absorption: dark lines in a continuous spectrum at the same wavelengths." },
          { front: "Visible range", back: "About 400 nm (violet) to 750 nm (red)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A radio station broadcasts at 100 MHz. What is the wavelength in metres? ($c = 3.0 \times 10^{8}$ m s$^{-1}$)`,
            answer: 3,
            unit: "m",
            explain: "λ = c/ν = 3.0 × 10⁸ / 1.0 × 10⁸ = 3.0 m.",
          },
          {
            kind: "mcq",
            q: "Arrange in increasing energy of photons: X-rays, visible, microwave, ultraviolet.",
            options: ["microwave < visible < ultraviolet < X-rays", "X-rays < ultraviolet < visible < microwave", "visible < microwave < ultraviolet < X-rays", "microwave < ultraviolet < visible < X-rays"],
            answer: 0,
            explain: "Energy rises with frequency, i.e. falls with wavelength. Microwaves have the longest wavelength, X-rays the shortest.",
          },
          {
            kind: "numeric",
            q: "What is the energy (in kJ mol⁻¹, to the nearest whole number) of one mole of photons of wavelength 600 nm? (h = 6.626 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m s⁻¹, N_A = 6.022 × 10²³)",
            answer: 200,
            tolerance: 1,
            unit: "kJ/mol",
            explain: "E per photon = hc/λ = 3.313 × 10⁻¹⁹ J. Per mole × 6.022 × 10²³ = 1.995 × 10⁵ J ≈ 200 kJ mol⁻¹.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "If the frequency of incident light is doubled, the kinetic energy of photoelectrons is exactly doubled.",
            answer: false,
            explain: "KE = hν − W₀. Doubling ν gives 2hν − W₀, which is more than double the old KE (hν − W₀) whenever W₀ > 0.",
            difficulty: 2,
            hint: "Write KE before and after using hν − W₀.",
          },
          {
            kind: "mcq",
            q: "Which observation can the wave theory of light explain?",
            options: ["Photoelectric effect", "Black-body radiation", "Interference and diffraction", "Line spectra of atoms"],
            answer: 2,
            explain: "Interference and diffraction are wave effects. The other three needed the idea of quanta.",
          },
          {
            kind: "numeric",
            q: "The threshold frequency of a metal is 5.0 × 10¹⁴ Hz. What is its work function in units of 10⁻¹⁹ J? (h = 6.626 × 10⁻³⁴ J s) Give two decimal places.",
            answer: 3.31,
            tolerance: 0.01,
            explain: "W₀ = hν₀ = 6.626 × 10⁻³⁴ × 5.0 × 10¹⁴ = 3.313 × 10⁻¹⁹ J.",
          },
          {
            kind: "fill",
            q: "A quantum of light energy is called a ___.",
            answer: ["photon"],
            explain: "Each photon carries energy E = hν.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-atom-bohr-dual",
        title: "Bohr's Model, Hydrogen Spectrum, de Broglie and Heisenberg",
        summary: "Bohr's postulates, radii and energies of hydrogen-like orbits, the spectral series of hydrogen and the Rydberg equation, limitations of Bohr's model, the de Broglie wavelength and Heisenberg's uncertainty principle.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`In 1913 Niels **Bohr** combined Planck's quanta with Rutherford's nucleus to explain the hydrogen spectrum. His postulates:

1. The electron moves round the nucleus in circular paths of fixed radius and energy, called **orbits** or **stationary states** (energy levels). While in one, it does not radiate.
2. Energy is absorbed or emitted only when the electron jumps between orbits: $\Delta E = E_2 - E_1 = h\nu$ (the **Bohr frequency rule**).
3. The **angular momentum** of the electron is quantised: $m_e v r = n\dfrac{h}{2\pi}$, $n = 1, 2, 3, \ldots$`,
          },
          {
            type: "formula",
            tex: t`r_n = 52.9\,\frac{n^2}{Z}\ \text{pm} \qquad E_n = -2.18 \times 10^{-18}\,\frac{Z^2}{n^2}\ \text{J} = -13.6\,\frac{Z^2}{n^2}\ \text{eV} \qquad v_n = 2.18 \times 10^{6}\,\frac{Z}{n}\ \text{m s}^{-1}`,
            caption: "For hydrogen (Z = 1) and hydrogen-like ions such as He⁺ (Z = 2) and Li²⁺ (Z = 3). r₁ = 52.9 pm is the Bohr radius.",
          },
          {
            type: "text",
            md: t`The energy is **negative** because the zero of energy is chosen as the electron completely free from the nucleus ($n = \infty$). A bound electron is more stable than a free one, so its energy is below zero. As $n$ increases the orbits get larger, the energy gets less negative and the levels crowd together. The energy needed to remove the electron from $n = 1$ of a hydrogen atom, $2.18 \times 10^{-18}$ J (13.6 eV), is its **ionisation energy**.`,
          },
          {
            type: "example",
            title: "The red line of hydrogen",
            problem: t`Calculate the wavelength of light emitted when the electron of a hydrogen atom falls from $n = 3$ to $n = 2$. ($h = 6.626 \times 10^{-34}$ J s, $c = 3.0 \times 10^{8}$ m s$^{-1}$)`,
            steps: [
              t`$\Delta E = 2.18 \times 10^{-18}\left(\dfrac{1}{2^2} - \dfrac{1}{3^2}\right) = 2.18 \times 10^{-18} \times \dfrac{5}{36} = 3.03 \times 10^{-19}$ J.`,
              t`$\lambda = \dfrac{hc}{\Delta E} = \dfrac{6.626 \times 10^{-34} \times 3.0 \times 10^{8}}{3.03 \times 10^{-19}} = 6.56 \times 10^{-7}$ m.`,
            ],
            answer: "About 656 nm: the red line of the Balmer series.",
          },
          {
            type: "heading",
            text: "Spectral series of hydrogen",
          },
          {
            type: "formula",
            tex: t`\bar{\nu} = 109\,677\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)\ \text{cm}^{-1}, \qquad n_2 > n_1`,
            caption: "109 677 cm⁻¹ is the Rydberg constant for hydrogen. For hydrogen-like ions multiply by Z².",
          },
          {
            type: "table",
            headers: ["Series", "n₁ (lower level)", "n₂", "Region"],
            rows: [
              ["Lyman", "1", "2, 3, 4, …", "ultraviolet"],
              ["Balmer", "2", "3, 4, 5, …", "visible"],
              ["Paschen", "3", "4, 5, 6, …", "infrared"],
              ["Brackett", "4", "5, 6, 7, …", "infrared"],
              ["Pfund", "5", "6, 7, 8, …", "infrared"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "In which region does each hydrogen transition appear?",
              groups: ["Ultraviolet", "Visible", "Infrared"],
              items: [
                { text: "n = 2 → n = 1", group: 0, hint: "Ending at n = 1 is the Lyman series." },
                { text: "n = 3 → n = 2", group: 1, hint: "Ending at n = 2 is the Balmer series." },
                { text: "n = 4 → n = 3", group: 2, hint: "Ending at n = 3 is the Paschen series." },
                { text: "n = 5 → n = 1", group: 0, hint: "Any jump down to n = 1 is Lyman." },
                { text: "n = 4 → n = 2", group: 1, hint: "Balmer: the blue-green line near 486 nm." },
                { text: "n = 6 → n = 5", group: 2, hint: "Ending at n = 5 is the Pfund series." },
              ],
              explain: "The lower level decides the series. Jumps to n = 1 are the largest, so they give UV; jumps to n = 2 give visible light; jumps to n ≥ 3 give infrared.",
            },
          },
          {
            type: "text",
            md: t`**Limitations of Bohr's model**: it fails for atoms with more than one electron; it cannot explain the fine structure (doublets) of lines seen in better spectroscopes, nor the splitting of lines in a magnetic field (**Zeeman effect**) or an electric field (**Stark effect**); it cannot explain the shapes of molecules; and it treats the electron as a particle with an exact orbit, which the next two ideas forbid.`,
          },
          {
            type: "heading",
            text: "Towards the quantum mechanical model",
          },
          {
            type: "formula",
            tex: t`\lambda = \frac{h}{mv} = \frac{h}{p} \qquad\qquad \Delta x \cdot \Delta p_x \ge \frac{h}{4\pi}`,
            caption: "De Broglie (1924): matter has wave character too. Heisenberg (1927): position and momentum cannot both be known exactly at the same time.",
          },
          {
            type: "example",
            title: "Why only tiny particles show wave and uncertainty effects",
            problem: t`(a) Find the de Broglie wavelength of an electron moving at $2.19 \times 10^{6}$ m s$^{-1}$ and of a 0.10 kg ball at 10 m s$^{-1}$. (b) An electron's position is known to within $1.0 \times 10^{-10}$ m. Find the least uncertainty in its velocity. ($h = 6.626 \times 10^{-34}$ J s, $m_e = 9.109 \times 10^{-31}$ kg)`,
            steps: [
              t`(a) Electron: $\lambda = \dfrac{6.626 \times 10^{-34}}{9.109 \times 10^{-31} \times 2.19 \times 10^{6}} = 3.32 \times 10^{-10}$ m, comparable to the size of an atom.`,
              t`Ball: $\lambda = \dfrac{6.626 \times 10^{-34}}{0.10 \times 10} = 6.6 \times 10^{-34}$ m, far too small to detect.`,
              t`(b) $\Delta v \ge \dfrac{h}{4\pi m_e \Delta x} = \dfrac{6.626 \times 10^{-34}}{4\pi \times 9.109 \times 10^{-31} \times 1.0 \times 10^{-10}} = 5.8 \times 10^{5}$ m s$^{-1}$.`,
            ],
            answer: t`(a) 332 pm for the electron, $6.6 \times 10^{-34}$ m for the ball; (b) $\Delta v \ge 5.8 \times 10^{5}$ m s$^{-1}$, so the idea of an exact orbit is meaningless for an electron.`,
          },
          {
            type: "mistake",
            wrong: "Heisenberg's principle means our instruments are not good enough yet; better instruments will fix the electron's exact orbit.",
            right: "The uncertainty is built into nature. Any measurement of an electron's position (using light) disturbs its momentum, so Δx·Δp ≥ h/4π for every possible experiment.",
            why: "For everyday objects the limit is far below what we can measure, so it never shows. For an electron the uncertainty in velocity is as large as the velocity itself, so definite Bohr orbits cannot exist.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the radius (in pm) of the second Bohr orbit of He⁺?",
                answer: 105.8,
                tolerance: 0.2,
                unit: "pm",
                explain: "r = 52.9 n²/Z = 52.9 × 2²/2 = 52.9 × 2 = 105.8 pm.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Bohr: stationary orbits, ΔE = hν, mvr = nh/2π.",
              "rₙ = 52.9 n²/Z pm; Eₙ = −2.18 × 10⁻¹⁸ Z²/n² J; vₙ = 2.18 × 10⁶ Z/n m s⁻¹.",
              "Lyman (UV, n₁ = 1), Balmer (visible, n₁ = 2), Paschen, Brackett, Pfund (IR).",
              "Bohr fails for many-electron atoms, fine structure, Zeeman and Stark effects.",
              "λ = h/mv; Δx·Δp ≥ h/4π: exact orbits are impossible for electrons.",
            ],
          },
        ],
        flashcards: [
          { front: "Bohr's quantisation condition", back: "mₑvr = nh/2π (angular momentum is a whole-number multiple of h/2π)." },
          { front: "Energy of the nth orbit (hydrogen-like)", back: "Eₙ = −2.18 × 10⁻¹⁸ Z²/n² J = −13.6 Z²/n² eV." },
          { front: "Radius of the first Bohr orbit of H", back: "52.9 pm (0.529 Å)." },
          { front: "Why is Eₙ negative?", back: "Zero energy is set for the free electron (n = ∞); a bound electron is more stable, so lower than zero." },
          { front: "Balmer series", back: "Transitions ending at n = 2; lines in the visible region." },
          { front: "De Broglie relation", back: "λ = h/mv = h/p." },
          { front: "Heisenberg's uncertainty principle", back: "Δx · Δp ≥ h/4π: exact position and momentum cannot be known together." },
          { front: "Zeeman and Stark effects", back: "Splitting of spectral lines in magnetic and electric fields respectively; Bohr's model cannot explain them." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the energy (in eV) of the electron in the n = 2 orbit of a hydrogen atom?",
            answer: -3.4,
            tolerance: 0.01,
            unit: "eV",
            explain: "Eₙ = −13.6/n² = −13.6/4 = −3.4 eV.",
          },
          {
            kind: "mcq",
            q: "The ratio of the radius of the third Bohr orbit to that of the first in a hydrogen atom is:",
            options: ["3 : 1", "9 : 1", "1 : 9", "1 : 3"],
            answer: 1,
            explain: "r ∝ n², so r₃ : r₁ = 9 : 1.",
          },
          {
            kind: "numeric",
            q: "What is the ionisation energy of He⁺ in eV?",
            answer: 54.4,
            tolerance: 0.1,
            unit: "eV",
            explain: "IE = 13.6 Z²/1² = 13.6 × 4 = 54.4 eV.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which series of the hydrogen spectrum lies in the visible region?",
            options: ["Lyman", "Balmer", "Paschen", "Pfund"],
            answer: 1,
            explain: "The Balmer series (ending at n = 2) lies in the visible region; Lyman is UV, Paschen and Pfund are IR.",
          },
          {
            kind: "truefalse",
            q: "Bohr's model can explain the spectrum of the helium atom.",
            answer: false,
            explain: "Bohr's model works only for one-electron species (H, He⁺, Li²⁺). Neutral He has two electrons.",
          },
          {
            kind: "numeric",
            q: "Wavenumber (in cm⁻¹, nearest whole number) of the line for n = 4 → n = 2 in hydrogen? (R = 109 677 cm⁻¹)",
            answer: 20564,
            tolerance: 2,
            unit: "cm⁻¹",
            explain: "ν̄ = 109 677 (1/4 − 1/16) = 109 677 × 3/16 = 20 564 cm⁻¹ (λ ≈ 486 nm).",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "If the velocity of a particle is halved, its de Broglie wavelength:",
            options: ["Halves", "Doubles", "Stays the same", "Becomes four times"],
            answer: 1,
            explain: "λ = h/mv, so λ ∝ 1/v. Halving v doubles λ.",
          },
          {
            kind: "multi",
            q: "Which of these are limitations of Bohr's model?",
            options: ["It cannot explain the Zeeman effect", "It cannot explain spectra of multi-electron atoms", "It cannot explain the hydrogen line spectrum", "It ignores the dual nature of the electron"],
            answers: [0, 1, 3],
            explain: "Bohr's model does explain the hydrogen line spectrum (its great success). It fails for multi-electron atoms, the Zeeman and Stark effects, and treats the electron purely as a particle on a fixed path.",
            difficulty: 2,
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-atom-quantum-model",
        title: "Quantum Numbers, Orbitals and Electronic Configuration",
        summary: "The quantum mechanical model, the four quantum numbers, shapes and nodes of s, p and d orbitals, orbital energies, the Aufbau principle, Pauli exclusion principle and Hund's rule, and the extra stability of half-filled and filled subshells.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Quantum mechanics** (Erwin Schrödinger and Werner Heisenberg, 1926) treats the electron as a wave. The **Schrödinger equation** $\hat{H}\psi = E\psi$ gives allowed energies and **wave functions** $\psi$. $\psi$ itself has no physical meaning, but $|\psi|^2$ gives the **probability density** of finding the electron at a point. An **atomic orbital** is a one-electron wave function; it describes the region where the electron is most likely to be found. It is not a fixed path like Bohr's orbit.`,
          },
          {
            type: "table",
            headers: ["Quantum number", "Symbol and values", "What it tells us"],
            rows: [
              ["Principal", t`$n = 1, 2, 3, \ldots$`, t`shell (K, L, M, N…), size and main energy; $n^2$ orbitals and at most $2n^2$ electrons in a shell`],
              ["Azimuthal (subsidiary)", t`$l = 0, 1, \ldots, (n - 1)$`, t`subshell and **shape**: $l = 0$ s, 1 p, 2 d, 3 f; $2l + 1$ orbitals per subshell`],
              ["Magnetic", t`$m_l = -l, \ldots, 0, \ldots, +l$`, "orientation of the orbital in space"],
              ["Spin", t`$m_s = +\tfrac{1}{2}$ or $-\tfrac{1}{2}$`, "spin of the electron on its own axis (clockwise or anticlockwise)"],
            ],
          },
          {
            type: "example",
            title: "Allowed sets of quantum numbers",
            problem: t`(a) Which subshell has $n = 4$, $l = 2$, and how many orbitals does it have? (b) Is $n = 2$, $l = 2$, $m_l = 0$ allowed? (c) How many electrons in an atom can have $n = 3$?`,
            steps: [
              t`(a) $l = 2$ is a d subshell: **4d**. $m_l = -2, -1, 0, +1, +2$: 5 orbitals.`,
              t`(b) For $n = 2$, $l$ can only be 0 or 1. $l = 2$ is **not allowed**.`,
              t`(c) $2n^2 = 2 \times 9 = 18$ electrons (3s: 2, 3p: 6, 3d: 10).`,
            ],
            answer: "(a) 4d, 5 orbitals; (b) not allowed; (c) 18",
          },
          {
            type: "heading",
            text: "Shapes and nodes",
          },
          {
            type: "text",
            md: t`**s orbitals** are spherical; there is one in every shell. **p orbitals** ($n \ge 2$) are dumb-bell shaped, three per shell, along the x, y and z axes ($p_x, p_y, p_z$), equal in energy (**degenerate**). **d orbitals** ($n \ge 3$) come five per shell: $d_{xy}, d_{yz}, d_{xz}$ (lobes between axes), $d_{x^2-y^2}$ (lobes on the x and y axes) and $d_{z^2}$ (two lobes on z with a ring round the middle). All five are equal in energy in a free atom.

A **node** is a region where the probability density is zero. **Radial (spherical) nodes** $= n - l - 1$; **angular (planar) nodes** $= l$; **total nodes** $= n - 1$. A 3p orbital has 1 radial and 1 angular node. Size and energy of an orbital of a given type grow with $n$ (1s < 2s < 3s).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many radial nodes does a 4s orbital have?",
                answer: 3,
                explain: "Radial nodes = n − l − 1 = 4 − 0 − 1 = 3. An s orbital has no angular node.",
              },
            ],
          },
          {
            type: "heading",
            text: "Energies and filling order",
          },
          {
            type: "text",
            md: t`In **hydrogen**, orbital energy depends only on $n$: 2s and 2p are equal. In **multi-electron atoms** electrons repel each other and inner electrons **shield** outer ones from the nucleus, so the **effective nuclear charge** felt differs. An s electron penetrates closer to the nucleus than a p electron of the same shell, so energy depends on both $n$ and $l$: $\text{s} < \text{p} < \text{d} < \text{f}$ within a shell. The **(n + l) rule**: lower $n + l$ means lower energy; for equal $n + l$, lower $n$ is lower in energy. So 4s ($4 + 0 = 4$) fills before 3d ($3 + 2 = 5$).`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Aufbau principle**: orbitals are filled in order of increasing energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, …",
              t`**Pauli exclusion principle**: no two electrons in an atom can have all four quantum numbers the same, so an orbital holds at most two electrons, with opposite spins.`,
              "**Hund's rule of maximum multiplicity**: in orbitals of equal energy (p, d, f), electrons occupy separate orbitals with parallel spins before any pairing begins.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Tap these subshells in the order they are filled.",
              items: ["3p", "4s", "3d", "4p", "5s", "4d"],
              explain: "Use n + l: 3p (4), 4s (4, but n = 4 > 3, so after 3p), 3d (5), 4p (5), 5s (5, highest n of the three), 4d (6).",
            },
          },
          {
            type: "example",
            title: "Writing configurations",
            problem: "Write the electronic configurations of N (Z = 7), Fe (Z = 26), Cr (Z = 24) and Cu (Z = 29), and state the unpaired electrons in N.",
            steps: [
              t`N: 1s$^2$ 2s$^2$ 2p$^3$. By Hund's rule the three 2p electrons occupy $2p_x$, $2p_y$, $2p_z$ singly with parallel spins: **3 unpaired**.`,
              t`Fe: 1s$^2$ 2s$^2$ 2p$^6$ 3s$^2$ 3p$^6$ 3d$^6$ 4s$^2$, or [Ar] 3d$^6$ 4s$^2$.`,
              t`Cr: expected [Ar] 3d$^4$ 4s$^2$, actual **[Ar] 3d$^5$ 4s$^1$** (half-filled d).`,
              t`Cu: expected [Ar] 3d$^9$ 4s$^2$, actual **[Ar] 3d$^{10}$ 4s$^1$** (completely filled d).`,
            ],
            answer: "Half-filled (d⁵) and completely filled (d¹⁰) subshells are extra stable, which explains Cr and Cu.",
          },
          {
            type: "text",
            md: t`**Why half-filled and filled subshells are extra stable**: (1) their electron distribution is **symmetrical**, and (2) they have the largest **exchange energy**: electrons with parallel spin in degenerate orbitals can exchange positions, and each exchange releases energy. In 3d$^5$ there are 10 possible exchanges; in 3d$^4$ only 6. The electrons that decide chemistry are the **valence electrons** in the outermost shell; the filled inner shells are the **core**.`,
          },
          {
            type: "mistake",
            wrong: "4s fills before 3d, so 3d electrons are removed first when Fe forms Fe²⁺: Fe²⁺ is [Ar] 3d⁴ 4s².",
            right: "Electrons leave from the outermost shell (highest n) first. Fe²⁺ is [Ar] 3d⁶ and Fe³⁺ is [Ar] 3d⁵.",
            why: "The filling order describes how a neutral atom is built up. Once 3d is occupied, 4s lies higher in energy and is farther out, so it loses its electrons first on ionisation.",
          },
          {
            type: "keypoints",
            items: [
              "Orbital = region of high probability (|ψ|²), not a fixed path.",
              "n, l (0 to n − 1), mₗ (−l to +l), mₛ (±½). A shell has n² orbitals and 2n² electrons.",
              "Radial nodes n − l − 1, angular nodes l, total n − 1.",
              "Fill by Aufbau (n + l rule), Pauli (2 per orbital, opposite spins), Hund (singly first, parallel).",
              "Cr [Ar]3d⁵4s¹ and Cu [Ar]3d¹⁰4s¹: symmetry and exchange energy stabilise d⁵ and d¹⁰.",
            ],
          },
        ],
        flashcards: [
          { front: "Physical meaning of |ψ|²", back: "Probability density of finding the electron at a point." },
          { front: "Values of l for n = 3", back: "0, 1, 2 (3s, 3p, 3d)." },
          { front: "Number of orbitals in a subshell", back: "2l + 1 (s 1, p 3, d 5, f 7)." },
          { front: "Radial and angular nodes", back: "Radial = n − l − 1; angular = l; total = n − 1." },
          { front: "Pauli exclusion principle", back: "No two electrons in an atom have all four quantum numbers identical; at most 2 electrons per orbital." },
          { front: "Hund's rule", back: "Degenerate orbitals are singly occupied with parallel spins before pairing." },
          { front: "Configuration of Cu", back: "[Ar] 3d¹⁰ 4s¹." },
          { front: "Which is lower in energy in a multi-electron atom: 4s or 3d?", back: "4s (n + l = 4 vs 5) while filling; but 4s electrons are removed first on ionisation." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which set of quantum numbers is NOT allowed?",
            options: ["n = 3, l = 2, mₗ = −2", "n = 2, l = 1, mₗ = 0", "n = 3, l = 3, mₗ = +1", "n = 1, l = 0, mₗ = 0"],
            answer: 2,
            explain: "l can be at most n − 1. For n = 3, l = 3 is impossible.",
          },
          {
            kind: "numeric",
            q: "How many orbitals are there in the shell with n = 4?",
            answer: 16,
            explain: "n² = 16 (4s 1 + 4p 3 + 4d 5 + 4f 7).",
          },
          {
            kind: "numeric",
            q: "How many unpaired electrons are there in an Fe³⁺ ion (Z of Fe = 26)?",
            answer: 5,
            explain: "Fe³⁺ = [Ar] 3d⁵. Five d orbitals each with one electron: 5 unpaired.",
            difficulty: 2,
            hint: "Remove the 4s electrons first.",
          },
          {
            kind: "mcq",
            q: "Which orbital has the highest energy in a multi-electron atom?",
            options: ["4s", "3d", "4p", "5s"],
            answer: 3,
            explain: "n + l: 4s = 4, 3d = 5, 4p = 5, 5s = 5. Among the three with 5, the one with highest n (5s) is highest.",
            difficulty: 2,
            hint: "Tie in n + l? The larger n wins.",
          },
          {
            kind: "truefalse",
            q: "In a hydrogen atom, the 2s and 2p orbitals have the same energy.",
            answer: true,
            explain: "With only one electron there is no shielding, so energy depends only on n.",
          },
          {
            kind: "numeric",
            q: "How many angular nodes does a 3d orbital have?",
            answer: 2,
            explain: "Angular nodes = l = 2 for any d orbital. Radial nodes = 3 − 2 − 1 = 0.",
          },
          {
            kind: "mcq",
            q: "The electronic configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ belongs to:",
            options: ["Mn", "Cr", "Fe", "V"],
            answer: 1,
            explain: "Total electrons = 24, so Cr. Its half-filled 3d⁵ 4s¹ is more stable than 3d⁴ 4s².",
          },
          {
            kind: "fill",
            q: "The rule that degenerate orbitals are first filled singly with parallel spins is called ___ rule.",
            answer: ["Hund's", "Hund", "Hunds"],
            explain: "Hund's rule of maximum multiplicity.",
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-atom-exam-edge",
        title: "Exam edge: Structure of Atom for JEE, NEET, KCET and COMEDK",
        summary: "Bohr-model ratios, spectral-line counting, photoelectric and de Broglie shortcuts, matching lines of H and He⁺, nodes and quantum-number counting, with the traps examiners set.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Structure of Atom is a scoring chapter. **NEET** usually has one or two questions (quantum numbers, Bohr ratios, de Broglie, configurations). **JEE Main** has one or two, often numerical: photoelectric effect, hydrogen spectrum, nodes. **KCET / COMEDK** ask direct formula questions. **JEE Advanced** links ideas: He$^+$ lines that match H lines, radial-node positions from a given $\psi$, and multi-step photon problems. The quantum-number and configuration ideas also run through the whole of inorganic chemistry.`,
          },
          {
            type: "table",
            headers: ["Quantity (hydrogen-like)", "Depends on", "Use"],
            rows: [
              ["radius r", t`$n^2/Z$`, "ratio problems"],
              ["velocity v", t`$Z/n$`, "ratio problems"],
              ["energy E, KE, PE", t`$Z^2/n^2$; KE $= -E$, PE $= 2E$`, "energy bookkeeping"],
              ["number of lines from level n to ground (many atoms)", t`$\dfrac{n(n-1)}{2}$`, "counting lines"],
              ["de Broglie λ of electron accelerated through V volts", t`$\lambda = \dfrac{1.227}{\sqrt{V}}$ nm`, "fast λ"],
              ["photon energy", t`$E\,(\text{eV}) = \dfrac{1240}{\lambda\,(\text{nm})}$`, "photoelectric problems"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: t`Use $1240/\lambda$ only with λ in nm and energy in eV. The line-count formula $n(n-1)/2$ assumes many atoms; a **single** atom falling from level $n$ can emit at most $n - 1$ photons. Between levels $n_2 \to n_1$ (many atoms) the count is $\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}$. The $Z^2$ factor works only for **one-electron** species. Orbital angular momentum $= \sqrt{l(l+1)}\,\frac{h}{2\pi}$ is the quantum-mechanical value, not Bohr's $n\frac{h}{2\pi}$.`,
          },
          {
            type: "example",
            title: "KCET / NEET level: counting lines",
            problem: "Electrons in a sample of hydrogen atoms are excited to n = 5. How many different spectral lines can appear when they return to the ground state? How many of these are in the Balmer series?",
            steps: [
              t`Total lines $= n(n-1)/2 = 5 \times 4/2 = 10$.`,
              "Balmer lines end at n = 2 and start from n = 3, 4 or 5: 3 lines.",
            ],
            answer: "10 lines in all; 3 in the Balmer series",
          },
          {
            type: "example",
            title: "JEE Main level: stopping potential",
            problem: "Ultraviolet light of wavelength 248 nm falls on a metal with work function 3.0 eV. Find the maximum kinetic energy of the photoelectrons and the stopping potential.",
            steps: [
              t`$E = 1240/248 = 5.0$ eV.`,
              t`KE$_{\max} = 5.0 - 3.0 = 2.0$ eV.`,
              t`The stopping potential $V_0$ satisfies $eV_0 = \text{KE}_{\max}$, so $V_0 = 2.0$ V.`,
            ],
            answer: "KE_max = 2.0 eV (3.2 × 10⁻¹⁹ J); stopping potential 2.0 V",
          },
          {
            type: "example",
            title: "JEE Main level: de Broglie wavelength from accelerating voltage",
            problem: "An electron starting from rest is accelerated through 150 V. Find its de Broglie wavelength.",
            steps: [
              t`KE $= eV$, and $p = \sqrt{2m_e eV}$, so $\lambda = h/\sqrt{2m_e eV}$.`,
              t`Putting in the constants gives $\lambda = 1.227/\sqrt{V}$ nm.`,
              t`$\lambda = 1.227/\sqrt{150} = 1.227/12.25 = 0.100$ nm.`,
            ],
            answer: "λ ≈ 0.100 nm = 100 pm (about the size of an atom)",
          },
          {
            type: "example",
            title: "JEE Advanced level: matching He⁺ and H lines",
            problem: t`Which transition in He$^+$ gives a line of the same wavelength as the first line of the Balmer series of hydrogen ($n = 3 \to 2$)?`,
            steps: [
              t`Same wavelength means same $\bar{\nu}$: $Z^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$ must be equal.`,
              t`Hydrogen: $1 \times \left(\frac{1}{4} - \frac{1}{9}\right) = \frac{5}{36}$.`,
              t`He$^+$ ($Z = 2$): $4\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right) = \frac{5}{36}$, so $\frac{1}{n_1^2} - \frac{1}{n_2^2} = \frac{5}{144}$.`,
              t`Shortcut: doubling both $n$ values divides the bracket by 4, which cancels $Z^2 = 4$. Try $n_1 = 4$, $n_2 = 6$: $\frac{1}{16} - \frac{1}{36} = \frac{9 - 4}{144} = \frac{5}{144}$. ✔`,
            ],
            answer: "n = 6 → n = 4 in He⁺",
          },
          {
            type: "mistake",
            wrong: "A single hydrogen atom excited to n = 4 can emit 6 different lines.",
            right: "One atom follows one path down and can emit at most 3 photons (4 → 3 → 2 → 1). The 6 lines from n(n − 1)/2 appear only from a large sample of atoms taking different paths.",
            why: "The formula counts all possible pairs of levels, which is right for a gas of many atoms. The question's wording (\"an atom\" or \"a sample\") decides which count is asked.",
          },
          {
            type: "mistake",
            wrong: "Spin multiplicity and number of unpaired electrons are the same thing.",
            right: "Spin multiplicity = 2S + 1, where S = (number of unpaired electrons) × ½. For N (3 unpaired), S = 3/2 and multiplicity = 4.",
            why: "Both grow with unpaired electrons, so students merge them. Hund's rule of maximum multiplicity is really about maximising S.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which is removed first when Mn (3d⁵ 4s²) forms Mn²⁺?",
              emoji: "🧲",
              options: ["Two 3d electrons", "Two 4s electrons", "One 3d and one 4s electron", "Electrons from 3p"],
              answer: 1,
              trap: 0,
              explain: "Electrons leave the highest-n shell first: Mn²⁺ is [Ar] 3d⁵ with 5 unpaired electrons, spin-only magnetic moment √(5 × 7) = 5.92 BM.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the ratio of the velocity of an electron in the first orbit of He⁺ to that in the first orbit of H?",
                answer: 2,
                explain: "v ∝ Z/n. He⁺ (Z = 2, n = 1) : H (Z = 1, n = 1) = 2 : 1.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "r ∝ n²/Z, v ∝ Z/n, E ∝ Z²/n²; KE = −E, PE = 2E.",
              "Lines from n to ground: n(n − 1)/2 for many atoms, at most n − 1 for one atom.",
              "E(eV) = 1240/λ(nm); λ(electron) = 1.227/√V nm.",
              "Matching lines: equal Z²(1/n₁² − 1/n₂²); for He⁺ double the H levels.",
              "Ionise from the highest n first; magnetic moment √(n(n + 2)) BM for n unpaired electrons.",
            ],
          },
        ],
        flashcards: [
          { front: "Ratio KE : PE : total E in a Bohr orbit", back: "KE = −E, PE = 2E, so KE : PE : E = 1 : −2 : −1." },
          { front: "Number of spectral lines from level n (many atoms)", back: "n(n − 1)/2." },
          { front: "Photon energy shortcut", back: "E (eV) = 1240 / λ (nm)." },
          { front: "Electron de Broglie wavelength after V volts", back: "λ = 1.227/√V nm." },
          { front: "Spin-only magnetic moment", back: "μ = √(n(n + 2)) BM, n = number of unpaired electrons." },
          { front: "Orbital angular momentum (quantum mechanics)", back: "√(l(l + 1)) · h/2π. Zero for s orbitals." },
          { front: "Shortest wavelength of Lyman series of H", back: "n = ∞ → 1: λ = 1/R ≈ 91.2 nm." },
          { front: "Spin multiplicity", back: "2S + 1, with S = ½ × (number of unpaired electrons)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the ratio of the radius of the 2nd orbit of Li²⁺ to the radius of the 1st orbit of H? Give two decimal places.",
            answer: 1.33,
            tolerance: 0.01,
            explain: "r ∝ n²/Z. Li²⁺, n = 2: 4/3. H, n = 1: 1. Ratio = 4/3 = 1.33.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Light of 310 nm ejects electrons with maximum KE 1.5 eV from a metal. What is the work function in eV?",
            answer: 2.5,
            tolerance: 0.05,
            unit: "eV",
            explain: "E = 1240/310 = 4.0 eV. W₀ = 4.0 − 1.5 = 2.5 eV.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The orbital angular momentum of an electron in a 2s orbital is:",
            options: ["h/2π", "zero", "√2 · h/2π", "h/π"],
            answer: 1,
            explain: "For s orbitals l = 0, so √(l(l + 1)) · h/2π = 0. Bohr's value (nh/2π) is a trap here.",
            difficulty: 2,
            hint: "Use l, not n.",
          },
          {
            kind: "numeric",
            q: "How many electrons in a Fe atom (Z = 26) have l = 2?",
            answer: 6,
            explain: "l = 2 means d electrons. Fe = [Ar] 3d⁶ 4s²: 6 d electrons.",
          },
          {
            kind: "numeric",
            q: "How many electrons in an atom can have n = 3 and mₛ = −½?",
            answer: 9,
            explain: "The n = 3 shell has 9 orbitals; each can hold one electron with mₛ = −½. So 9.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which has the largest number of unpaired electrons?",
            options: ["Fe²⁺", "Mn²⁺", "Cr³⁺", "Cu²⁺"],
            answer: 1,
            explain: "Fe²⁺ 3d⁶ (4), Mn²⁺ 3d⁵ (5), Cr³⁺ 3d³ (3), Cu²⁺ 3d⁹ (1). Mn²⁺ has the most.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "For a 3p orbital, which statements are correct?",
            options: ["It has 1 radial node", "It has 1 angular node", "It has 2 nodes in total", "Its l value is 2"],
            answers: [0, 1, 2],
            explain: "n = 3, l = 1: radial = 3 − 1 − 1 = 1, angular = l = 1, total = n − 1 = 2. l = 2 would be a d orbital.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Electrons of He⁺ ions fall from n = 4 to the ground state in a large sample. How many distinct lines can appear in the spectrum?",
            answer: 6,
            explain: "n(n − 1)/2 = 4 × 3/2 = 6. Z does not change the count, only the wavelengths.",
          },
          {
            kind: "numeric",
            q: "Which level n₂ in Li²⁺ (Z = 3) gives, on falling to n₁ = 3, a line of the same wavelength as the hydrogen transition 2 → 1?",
            answer: 6,
            explain: "H: 1 × (1 − 1/4) = 3/4. Li²⁺: 9(1/9 − 1/n₂²) = 1 − 9/n₂² = 3/4, so 9/n₂² = 1/4 and n₂ = 6. (Multiplying both H levels by Z = 3: 1 → 3 and 2 → 6.)",
            difficulty: 3,
            hint: "Multiply both hydrogen levels by Z.",
          },
        ],
      },
    ],
  },
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Some Basic Concepts of Chemistry": "c11-basic-concepts",
  "11:Structure of Atom": "c11-structure-of-atom",
};
