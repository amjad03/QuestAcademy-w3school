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
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Some Basic Concepts of Chemistry": "c11-basic-concepts",
};
