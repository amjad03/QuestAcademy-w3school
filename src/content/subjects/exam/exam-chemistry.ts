import type { Subject } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

export const examChemistry: Subject = {
  slug: "exam-chemistry",
  title: "Chemistry for NEET & JEE",
  world: "exam",
  icon: "⚗️",
  colors: ["#059669", "#a3e635"],
  tagline: "Physical numericals, bonding logic and organic reasoning — fast and exam-ready.",
  description:
    "High-yield chemistry for NEET, JEE Main and JEE Advanced. Physical chemistry numericals with shortcuts, bonding rules you can apply in seconds, and the organic reasoning that unlocks mechanism questions.",
  levels: ["NEET", "JEE Main", "JEE Adv"],
  stages: ["aspirant"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "mole-concept",
      title: "Mole Concept",
      icon: "🧮",
      description: "Moles, concentration terms, limiting reagent and n-factor — the language of all physical chemistry.",
      lessons: [
        {
          slug: "mole-concept-concept-crash",
          title: "Concept crash: Mole Concept",
          summary: "Every way to count particles: mass, volume, number and concentration.",
          minutes: 13,
          xp: 30,
          blocks: [
            { type: "text", md: "A mole is just a chemist's dozen — a very big one. Every stoichiometry, electrochemistry and solution numerical starts by converting to moles." },
            { type: "formula", tex: t`n = \frac{m}{M} = \frac{N}{N_A} = \frac{V_{STP}}{22.4\ \text{L}}, \qquad N_A = 6.022\times10^{23}` },
            {
              type: "table",
              headers: ["Term", "Definition", "Temperature dependent?"],
              rows: [
                ["Molarity (M)", "mol solute / L solution", "Yes (volume changes)"],
                ["Molality (m)", "mol solute / kg solvent", "No"],
                ["Mole fraction (χ)", "mol of component / total mol", "No"],
                ["Normality (N)", "M × n-factor", "Yes"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "22.4 L is molar volume at **STP (273 K, 1 atm)**. With the newer IUPAC standard (1 bar) it is 22.7 L — read the question.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Moles of water in 36 g?", answer: 2, unit: "mol", explain: "$36/18 = 2$." }],
            },
            {
              type: "keypoints",
              items: ["Convert everything to moles first.", "Molality and mole fraction don't change with temperature.", "Normality = Molarity × n-factor."],
            },
          ],
          flashcards: [
            { front: "Avogadro number", back: t`$6.022\times10^{23}$ mol⁻¹` },
            { front: "Molarity vs molality", back: "Per litre of solution vs per kg of solvent" },
            { front: "Molar volume at STP", back: "22.4 L (273 K, 1 atm)" },
          ],
          quiz: [
            { kind: "numeric", q: "4 g of NaOH dissolved to make 250 mL solution. Molarity?", answer: 0.4, unit: "M", explain: "$n = 0.1$ mol; $0.1/0.25 = 0.4$ M." },
            {
              kind: "mcq",
              q: "Number of molecules in 4.4 g of CO₂:",
              options: [t`$6.022\times10^{23}$`, t`$6.022\times10^{22}$`, t`$3.011\times10^{23}$`, t`$1.2\times10^{23}$`],
              answer: 1,
              explain: t`$4.4/44 = 0.1$ mol → $6.022\times10^{22}$.`,
            },
            { kind: "truefalse", q: "Molality is independent of temperature.", answer: true, explain: "It uses mass of solvent, not volume." },
            { kind: "numeric", q: "Volume at STP occupied by 2 g of H₂ (L)?", answer: 22.4, tolerance: 0.1, unit: "L", explain: "2 g = 1 mol = 22.4 L." },
          ],
        },
        {
          slug: "mole-concept-problem-patterns",
          title: "Problem-solving patterns: Mole Concept",
          summary: "Limiting reagent, dilution and n-factor in under a minute.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "Three templates — limiting reagent, dilution/mixing, and equivalents — cover most mole-concept MCQs." },
            { type: "heading", text: "Limiting reagent in 3 steps" },
            {
              type: "list",
              ordered: true,
              items: ["Convert each reactant to moles.", "Divide by its stoichiometric coefficient.", "Smallest value = limiting reagent; use it for product."],
            },
            { type: "text", md: "**Worked:** 2H₂ + O₂ → 2H₂O with 4 g H₂ (2 mol) and 16 g O₂ (0.5 mol). Ratios: 2/2 = 1, 0.5/1 = 0.5 → O₂ limits. Water = 1 mol = 18 g." },
            { type: "heading", text: "Dilution and mixing" },
            { type: "formula", tex: t`M_1V_1 = M_2V_2, \qquad M_{mix} = \frac{M_1V_1 + M_2V_2}{V_1 + V_2}` },
            { type: "heading", text: "n-factor cheat table" },
            {
              type: "table",
              headers: ["Species", "n-factor"],
              rows: [
                ["KMnO₄ (acidic → Mn²⁺)", "5"],
                ["KMnO₄ (neutral → MnO₂)", "3"],
                ["K₂Cr₂O₇ (acidic → Cr³⁺)", "6"],
                ["H₂SO₄ (acid)", "2"],
                ["Oxalate C₂O₄²⁻ → CO₂", "2"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Titration questions: equivalents of oxidant = equivalents of reductant, i.e. $N_1V_1 = N_2V_2$.",
            },
          ],
          flashcards: [
            { front: "Limiting reagent test", back: "Smallest (moles ÷ coefficient)" },
            { front: "n-factor of KMnO₄ in acid", back: "5" },
            { front: "Law of equivalence", back: "Equivalents of A = equivalents of B" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "10 g H₂ reacts with 64 g O₂ to form water. Mass of water formed (g)?",
              answer: 72,
              unit: "g",
              explain: "H₂ = 5 mol needs 2.5 mol O₂, only 2 mol present → O₂ limits → 4 mol H₂O = 72 g.",
            },
            { kind: "mcq", q: "n-factor of KMnO₄ in acidic medium:", options: ["1", "3", "5", "7"], answer: 2, explain: "Mn goes from +7 to +2." },
            { kind: "numeric", q: "100 mL of 2 M HCl is diluted to 0.5 M. Final volume (mL)?", answer: 400, unit: "mL", explain: "$2\\times100 = 0.5\\times V$ → 400 mL." },
            {
              kind: "mcq",
              q: "A compound has C 40%, H 6.67%, O 53.3% by mass. Empirical formula:",
              options: ["CHO", "CH₂O", "C₂H₄O", "CH₃O"],
              answer: 1,
              explain: "Mole ratio 3.33 : 6.67 : 3.33 = 1 : 2 : 1.",
            },
            { kind: "truefalse", q: "Normality = Molarity × n-factor.", answer: true, explain: "By definition." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "chemical-bonding",
      title: "Chemical Bonding",
      icon: "🔗",
      description: "VSEPR shapes, hybridisation, MOT bond order and polarity.",
      lessons: [
        {
          slug: "chemical-bonding-concept-crash",
          title: "Concept crash: Chemical Bonding",
          summary: "Shapes, hybridisation, magnetism and dipole moment in one table-heavy sprint.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "Why is water bent but CO₂ straight? Count electron pairs, push them apart, done. Bonding feeds into almost every other chapter, from coordination to organic." },
            { type: "formula", tex: t`H = \tfrac12\,(V + M - C + A)`, caption: "V = valence e⁻ of central atom, M = monovalent atoms, C = cation charge, A = anion charge" },
            {
              type: "table",
              headers: ["H", "Hybridisation", "Example → shape"],
              rows: [
                ["2", "sp", "CO₂, BeCl₂ → linear"],
                ["3", "sp²", "BF₃ → trigonal planar"],
                ["4", "sp³", "CH₄ tetrahedral; NH₃ pyramidal (107°); H₂O bent (104.5°)"],
                ["5", "sp³d", "PCl₅ TBP; SF₄ see-saw; ClF₃ T-shape; XeF₂ linear"],
                ["6", "sp³d²", "SF₆ octahedral; BrF₅ square pyramidal; XeF₄ square planar"],
              ],
            },
            { type: "formula", tex: t`\text{Bond order} = \frac{N_b - N_a}{2}` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "O₂ is **paramagnetic** (2 unpaired e⁻ in π*) even though its Lewis structure shows all pairs. Only MOT explains it.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "mcq", q: "Hybridisation of Xe in XeF₄:", options: ["sp³", "sp³d", "sp³d²", "dsp²"], answer: 2, explain: t`$H = \tfrac12(8+4) = 6$.` }],
            },
            {
              type: "keypoints",
              items: ["Lone pairs compress bond angles: lp–lp > lp–bp > bp–bp repulsion.", "Symmetrical molecules (CO₂, BF₃, CCl₄) have zero dipole moment.", "Higher bond order → shorter, stronger bond."],
            },
          ],
          flashcards: [
            { front: "Hybridisation formula", back: t`$\tfrac12(V + M - C + A)$` },
            { front: "Shape of SF₄", back: "See-saw (sp³d, 1 lone pair)" },
            { front: "Bond order of O₂", back: "2, paramagnetic" },
            { front: "Bond angle of H₂O", back: "≈104.5°" },
          ],
          quiz: [
            { kind: "mcq", q: "Shape of SF₄:", options: ["Tetrahedral", "Square planar", "See-saw", "Trigonal pyramidal"], answer: 2, explain: "4 bond pairs + 1 lone pair, sp³d." },
            { kind: "numeric", q: "Bond order of O₂?", answer: 2, explain: "(10 − 6)/2 = 2, counting all 16 electrons (10 bonding, 6 antibonding)." },
            {
              kind: "multi",
              q: "Which species are paramagnetic?",
              options: ["O₂", "N₂", "B₂", "NO"],
              answers: [0, 2, 3],
              explain: "O₂ (2 unpaired), B₂ (2 unpaired), NO (1 unpaired); N₂ is diamagnetic.",
            },
            { kind: "truefalse", q: "BF₃ has zero dipole moment.", answer: true, explain: "Trigonal planar symmetry cancels bond dipoles." },
          ],
        },
        {
          slug: "chemical-bonding-problem-patterns",
          title: "Problem-solving patterns: Chemical Bonding",
          summary: "Electron-count shortcut for bond order and comparison questions.",
          minutes: 14,
          xp: 40,
          blocks: [
            { type: "text", md: "For diatomics you don't need to draw MO diagrams in the exam. Count total electrons and read off the bond order." },
            {
              type: "table",
              headers: ["Total e⁻", "Bond order", "Examples"],
              rows: [
                ["14", "3", "N₂, CO, CN⁻, NO⁺"],
                ["15", "2.5", "N₂⁻, NO, O₂⁺"],
                ["16", "2", "O₂"],
                ["17", "1.5", "O₂⁻"],
                ["18", "1", "O₂²⁻, F₂"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Shortcut",
              md: "Bond length order: O₂²⁻ > O₂⁻ > O₂ > O₂⁺ (lower bond order → longer bond).",
            },
            { type: "heading", text: "Hybridisation of ions — worked" },
            {
              type: "list",
              items: [
                t`NH₄⁺: $\tfrac12(5 + 4 - 1) = 4$ → sp³, tetrahedral.`,
                t`I₃⁻: $\tfrac12(7 + 2 + 1) = 5$ → sp³d, linear (3 lone pairs).`,
                t`ClO₃⁻: oxygen counts as 0 → $\tfrac12(7 + 0 + 1) = 4$ → sp³, pyramidal.`,
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "\"Which pair is isostructural?\" — compare H and lone pairs. e.g. XeF₂ and I₃⁻ are both linear sp³d.",
            },
          ],
          flashcards: [
            { front: "14-electron diatomics", back: "Bond order 3 (N₂, CO, CN⁻, NO⁺)" },
            { front: "Bond order of O₂⁻", back: "1.5" },
            { front: "Shape of I₃⁻", back: "Linear (sp³d)" },
          ],
          quiz: [
            { kind: "numeric", q: "Bond order of O₂⁻ (superoxide)?", answer: 1.5, explain: "17 electrons → 1.5." },
            { kind: "mcq", q: "Longest O–O bond among:", options: ["O₂⁺", "O₂", "O₂⁻", "O₂²⁻"], answer: 3, explain: "Lowest bond order (1) → longest bond." },
            { kind: "mcq", q: "Hybridisation of the central I in I₃⁻:", options: ["sp³", "sp³d", "sp³d²", "sp²"], answer: 1, explain: t`$\tfrac12(7+2+1) = 5$.` },
            {
              kind: "fill",
              q: "H₂O's bond angle is smaller than NH₃'s because oxygen carries two ___ pairs.",
              answer: ["lone"],
              explain: "Two lone pairs repel bond pairs more strongly.",
            },
            { kind: "truefalse", q: "CO has a bond order of 3.", answer: true, explain: "14 electrons, isoelectronic with N₂." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "equilibrium",
      title: "Equilibrium",
      icon: "🔄",
      description: "Kc, Kp, Le Chatelier, pH, buffers and solubility product.",
      lessons: [
        {
          slug: "equilibrium-concept-crash",
          title: "Concept crash: Equilibrium",
          summary: "Chemical and ionic equilibrium essentials.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "Equilibrium is a tug-of-war that ended in a tie — both reactions still run, at equal rates. It carries 2+ questions in every major exam." },
            { type: "formula", tex: t`K_p = K_c(RT)^{\Delta n_g}, \qquad \Delta n_g = n_{products(g)} - n_{reactants(g)}` },
            {
              type: "table",
              headers: ["Compare Q with K", "Reaction goes"],
              rows: [
                ["Q < K", "Forward"],
                ["Q = K", "At equilibrium"],
                ["Q > K", "Backward"],
              ],
            },
            { type: "formula", tex: t`K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}\ (298\text{ K}), \qquad \text{pH} + \text{pOH} = 14` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "A catalyst speeds up both directions equally — it **never** changes K or the equilibrium position, only the time to reach it.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "pH of 0.001 M HCl?", answer: 3, explain: t`$[\text{H}^+] = 10^{-3}$.` }],
            },
            {
              type: "keypoints",
              items: ["Le Chatelier: system opposes the change.", "Only temperature changes K.", "Increasing pressure favours the side with fewer gas moles."],
            },
          ],
          flashcards: [
            { front: "Kp–Kc relation", back: t`$K_p = K_c(RT)^{\Delta n_g}$` },
            { front: "Effect of catalyst on K", back: "None" },
            { front: "Kw at 25 °C", back: t`$10^{-14}$` },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g):",
              options: [t`$K_p = K_c(RT)^2$`, t`$K_p = K_c(RT)^{-2}$`, t`$K_p = K_c$`, t`$K_p = K_c(RT)^{-4}$`],
              answer: 1,
              explain: t`$\Delta n_g = 2 - 4 = -2$.`,
            },
            { kind: "numeric", q: "pH of 0.01 M NaOH at 25 °C?", answer: 12, explain: "pOH = 2, so pH = 12." },
            { kind: "truefalse", q: "Adding a catalyst changes the equilibrium constant.", answer: false, explain: "Only temperature changes K." },
            { kind: "mcq", q: "If Q < K, the reaction will:", options: ["Proceed backward", "Proceed forward", "Stop", "Be at equilibrium"], answer: 1, explain: "More products must form to raise Q up to K." },
          ],
        },
        {
          slug: "equilibrium-problem-patterns",
          title: "Problem-solving patterns: Equilibrium",
          summary: "Weak acid pH, buffers and Ksp solubility in seconds.",
          minutes: 16,
          xp: 40,
          blocks: [
            { type: "text", md: "Ionic equilibrium numericals boil down to four formulas. Memorise them as a set." },
            { type: "formula", tex: t`[\text{H}^+] = \sqrt{K_aC}, \qquad \text{pH} = \tfrac12(\text{p}K_a - \log C)`, caption: "Weak acid (α ≪ 1)" },
            { type: "formula", tex: t`\text{pH} = \text{p}K_a + \log\frac{[\text{salt}]}{[\text{acid}]}`, caption: "Henderson–Hasselbalch (acidic buffer)" },
            {
              type: "table",
              headers: ["Salt type", "Ksp in terms of s"],
              rows: [
                ["AB (AgCl)", "$s^2$"],
                ["AB₂ / A₂B (CaF₂, Ag₂CrO₄)", "$4s^3$"],
                ["AB₃ (Fe(OH)₃)", "$27s^4$"],
                ["A₂B₃", "$108s^5$"],
              ],
            },
            { type: "text", md: t`**Worked:** 0.1 M acetic acid, $K_a = 1.8\times10^{-5}$: $[\text{H}^+] = \sqrt{1.8\times10^{-6}} \approx 1.34\times10^{-3}$ → pH ≈ 2.87.` },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Common-ion effect: solubility of AgCl in 0.1 M NaCl is $K_{sp}/0.1$ — far lower than in pure water.",
            },
          ],
          flashcards: [
            { front: "Weak acid [H⁺]", back: t`$\sqrt{K_aC}$` },
            { front: "Buffer pH when salt = acid", back: t`$\text{pH} = \text{p}K_a$` },
            { front: "Ksp of AB₂", back: "$4s^3$" },
          ],
          quiz: [
            { kind: "mcq", q: "Ksp of CaF₂ in terms of molar solubility s:", options: ["$s^2$", "$2s^2$", "$4s^3$", "$27s^4$"], answer: 2, explain: "[Ca²⁺] = s, [F⁻] = 2s → $s(2s)^2$." },
            { kind: "numeric", q: "An acetic acid buffer has [salt] = [acid]; pKa = 4.74. pH?", answer: 4.74, tolerance: 0.01, explain: "log 1 = 0." },
            { kind: "numeric", q: "pH of a 0.01 M weak acid with Ka = 10⁻⁶?", answer: 4, explain: t`$[\text{H}^+] = \sqrt{10^{-8}} = 10^{-4}$.` },
            { kind: "truefalse", q: "Adding NaCl to a saturated AgCl solution decreases the solubility of AgCl.", answer: true, explain: "Common-ion effect (Cl⁻)." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "electrochemistry",
      title: "Electrochemistry",
      icon: "🔋",
      description: "Cell EMF, Nernst equation, Faraday's laws and conductance.",
      lessons: [
        {
          slug: "electrochemistry-concept-crash",
          title: "Concept crash: Electrochemistry",
          summary: "Galvanic cells, Nernst, ΔG–E link and Faraday's laws.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "Every battery in your bag is a galvanic cell. Electrochemistry links thermodynamics (ΔG) with something you can measure on a voltmeter." },
            { type: "formula", tex: t`E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode}` },
            { type: "formula", tex: t`E = E^\circ - \frac{0.0591}{n}\log Q \quad (298\text{ K})`, caption: "Nernst equation" },
            { type: "formula", tex: t`\Delta G = -nFE, \qquad \log K = \frac{nE^\circ}{0.0591}` },
            { type: "formula", tex: t`m = \frac{M}{nF}\,It, \qquad F = 96500\ \text{C mol}^{-1}`, caption: "Faraday's first law" },
            {
              type: "callout",
              tone: "tip",
              title: "Memory hook",
              md: "**AN OX, RED CAT** — oxidation at anode, reduction at cathode (true for galvanic *and* electrolytic cells).",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V. E°cell of the Daniell cell (V)?",
                  answer: 1.1,
                  tolerance: 0.005,
                  unit: "V",
                  explain: "0.34 − (−0.76) = 1.10 V.",
                },
              ],
            },
            {
              type: "keypoints",
              items: ["Spontaneous cell: E > 0, ΔG < 0.", "Molar conductivity increases on dilution.", t`$\Lambda_m = \kappa\times1000/M$ (S cm² mol⁻¹).`],
            },
          ],
          flashcards: [
            { front: "Nernst equation at 298 K", back: t`$E = E^\circ - \frac{0.0591}{n}\log Q$` },
            { front: "ΔG and EMF", back: "ΔG = −nFE" },
            { front: "1 Faraday", back: "96500 C = charge of 1 mol electrons" },
            { front: "Where does oxidation occur?", back: "Anode" },
          ],
          quiz: [
            { kind: "numeric", q: "How many faradays are needed to deposit 1 mol of Al from Al³⁺?", answer: 3, unit: "F", explain: "Al³⁺ + 3e⁻ → Al." },
            { kind: "mcq", q: "In a galvanic cell, oxidation occurs at the:", options: ["Cathode", "Anode", "Salt bridge", "Both electrodes"], answer: 1, explain: "AN OX." },
            { kind: "truefalse", q: "Molar conductivity of a strong electrolyte decreases on dilution.", answer: false, explain: "It increases (ions move more freely)." },
            {
              kind: "mcq",
              q: "For a spontaneous cell reaction:",
              options: ["E > 0, ΔG > 0", "E < 0, ΔG < 0", "E > 0, ΔG < 0", "E = 0, ΔG = 0"],
              answer: 2,
              explain: "ΔG = −nFE.",
            },
          ],
        },
        {
          slug: "electrochemistry-problem-patterns",
          title: "Problem-solving patterns: Electrochemistry",
          summary: "Electrolysis mass, Nernst numericals and Kohlrausch.",
          minutes: 16,
          xp: 40,
          blocks: [
            { type: "text", md: "Four templates: mass deposited, Nernst EMF, electrolysis products, and degree of dissociation from conductance." },
            { type: "heading", text: "Template 1 — Mass deposited" },
            { type: "text", md: "**Worked:** 2 A for 965 s → Q = 1930 C = 0.02 F. Cu²⁺ needs 2 F/mol → 0.01 mol × 63.5 = **0.635 g Cu**." },
            { type: "heading", text: "Template 2 — Nernst with concentrations" },
            { type: "formula", tex: t`E = E^\circ - \frac{0.0591}{n}\log\frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}` },
            { type: "heading", text: "Template 3 — Electrolysis products (aqueous)" },
            {
              type: "table",
              headers: ["Electrolyte", "Cathode", "Anode"],
              rows: [
                ["NaCl (aq, conc.)", "H₂", "Cl₂"],
                ["CuSO₄ (aq, Pt electrodes)", "Cu", "O₂"],
                ["Dilute H₂SO₄", "H₂", "O₂"],
              ],
            },
            { type: "heading", text: "Template 4 — Kohlrausch & α" },
            { type: "formula", tex: t`\Lambda^\circ_{CH_3COOH} = \Lambda^\circ_{CH_3COONa} + \Lambda^\circ_{HCl} - \Lambda^\circ_{NaCl}, \qquad \alpha = \frac{\Lambda_m}{\Lambda^\circ_m}` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "In Nernst, Q uses **anode-side ion over cathode-side ion** for Zn|Zn²⁺||Cu²⁺|Cu. Flipping it flips the sign of the correction.",
            },
          ],
          flashcards: [
            { front: "Charge in faradays", back: "Q(C)/96500" },
            { front: "Cathode product, aq NaCl", back: "H₂ gas" },
            { front: "Degree of dissociation", back: t`$\alpha = \Lambda_m/\Lambda^\circ_m$` },
          ],
          quiz: [
            { kind: "numeric", q: "Mass of silver deposited by 9650 C (Ag = 108)? (g)", answer: 10.8, tolerance: 0.05, unit: "g", explain: "0.1 F → 0.1 mol Ag → 10.8 g." },
            {
              kind: "numeric",
              q: "Zn|Zn²⁺(0.01 M)||Cu²⁺(1 M)|Cu with E° = 1.10 V. EMF at 298 K (V)?",
              answer: 1.159,
              tolerance: 0.005,
              unit: "V",
              explain: t`$1.10 - \frac{0.0591}{2}\log(0.01) = 1.10 + 0.0591 = 1.159$ V.`,
            },
            { kind: "mcq", q: "Gas evolved at the cathode during electrolysis of concentrated aqueous NaCl:", options: ["Cl₂", "O₂", "H₂", "Na vapour"], answer: 2, explain: "Water is reduced in preference to Na⁺." },
            { kind: "numeric", q: "A weak acid has Λm = 39 and Λ°m = 390 S cm² mol⁻¹. Degree of dissociation?", answer: 0.1, tolerance: 0.001, explain: "39/390 = 0.1." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "chemical-kinetics",
      title: "Chemical Kinetics",
      icon: "⏱️",
      description: "Rate laws, integrated equations, half-life and Arrhenius.",
      lessons: [
        {
          slug: "chemical-kinetics-concept-crash",
          title: "Concept crash: Chemical Kinetics",
          summary: "Order, molecularity, half-life and activation energy.",
          minutes: 14,
          xp: 30,
          blocks: [
            { type: "text", md: "Why does milk spoil faster in summer? Higher T, more molecules over the activation barrier. Kinetics turns that intuition into numbers." },
            {
              type: "table",
              headers: ["", "Zero order", "First order"],
              rows: [
                ["Integrated", t`$[A] = [A]_0 - kt$`, t`$k = \dfrac{2.303}{t}\log\dfrac{[A]_0}{[A]}$`],
                ["Half-life", t`$t_{1/2} = \dfrac{[A]_0}{2k}$`, t`$t_{1/2} = \dfrac{0.693}{k}$`],
                ["Units of k", "mol L⁻¹ s⁻¹", "s⁻¹"],
              ],
            },
            { type: "formula", tex: t`k = Ae^{-E_a/RT}, \qquad \log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)`, caption: "Arrhenius" },
            { type: "formula", tex: t`\text{units of } k = (\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Order is experimental and can be zero or fractional. Molecularity is theoretical and is always a whole number (1, 2 or 3).",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "First-order reaction with t½ = 10 min. Time for 75% completion (min)?", answer: 20, unit: "min", explain: "75% = two half-lives." }],
            },
          ],
          flashcards: [
            { front: "First-order half-life", back: t`$0.693/k$, independent of $[A]_0$` },
            { front: "Units of k, second order", back: "L mol⁻¹ s⁻¹" },
            { front: "Arrhenius equation", back: t`$k = Ae^{-E_a/RT}$` },
          ],
          quiz: [
            { kind: "mcq", q: "Unit of rate constant for a second-order reaction:", options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"], answer: 2, explain: t`$(\text{mol L}^{-1})^{1-2}\text{s}^{-1}$.` },
            { kind: "numeric", q: "First-order k = 0.0693 min⁻¹. Half-life (min)?", answer: 10, unit: "min", explain: "0.693/0.0693 = 10." },
            { kind: "truefalse", q: "Molecularity of a reaction can be fractional.", answer: false, explain: "Only order can be fractional." },
            { kind: "mcq", q: "Half-life is independent of initial concentration for:", options: ["Zero order", "First order", "Second order", "Third order"], answer: 1, explain: "t½ = 0.693/k." },
          ],
        },
        {
          slug: "chemical-kinetics-problem-patterns",
          title: "Problem-solving patterns: Chemical Kinetics",
          summary: "Half-life multiples, temperature coefficient and initial-rate tables.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "Learn these multiples and most first-order numericals need zero logs." },
            {
              type: "table",
              headers: ["Completion (1st order)", "Time"],
              rows: [
                ["50%", "1 × t½"],
                ["75%", "2 × t½"],
                ["87.5%", "3 × t½"],
                ["99%", "≈ 6.64 × t½"],
                ["99.9%", "≈ 10 × t½"],
              ],
            },
            { type: "heading", text: "Temperature coefficient" },
            { type: "formula", tex: t`\frac{k_{T+\Delta T}}{k_T} = \mu^{\Delta T/10}, \quad \mu \approx 2\text{–}3` },
            { type: "heading", text: "Order from initial-rate data" },
            {
              type: "list",
              items: ["Pick two runs where only [A] changes.", "If [A] ×2 gives rate ×2 → order 1; ×4 → order 2; unchanged → order 0.", "In general: rate ratio = (conc ratio)ⁿ."],
            },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "\"t₉₉.₉ is how many times t½?\" → 10. One of the most repeated one-liners in NEET.",
            },
          ],
          flashcards: [
            { front: "t₉₉.₉% / t½ (first order)", back: "≈ 10" },
            { front: "Temperature coefficient", back: "Rate ratio for a 10 K rise, usually 2–3" },
            { front: "[A] doubled, rate ×4", back: "Second order in A" },
          ],
          quiz: [
            { kind: "numeric", q: "Temperature coefficient = 2. Temperature rises by 30 °C. Rate increases by how many times?", answer: 8, explain: "$2^{3} = 8$." },
            { kind: "mcq", q: "Doubling [A] quadruples the rate. Order with respect to A:", options: ["0", "1", "2", "4"], answer: 2, explain: "$2^n = 4$ → n = 2." },
            { kind: "numeric", q: "First-order reaction, t½ = 5 min. Time for 99.9% completion (min)?", answer: 50, unit: "min", explain: "≈ 10 × t½." },
            { kind: "fill", q: "For a zero-order reaction, t½ is ___ proportional to initial concentration.", answer: ["directly"], explain: t`$t_{1/2} = [A]_0/2k$.` },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "organic-basics",
      title: "Organic Basics",
      icon: "🧪",
      description: "Electronic effects, reactive intermediates, isomerism and reaction types (GOC).",
      lessons: [
        {
          slug: "organic-basics-concept-crash",
          title: "Concept crash: Organic Basics",
          summary: "Inductive, resonance and hyperconjugation — the three tools that decide stability and acidity.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "text", md: "General Organic Chemistry (GOC) is the grammar of organic. Get it right and named reactions start to make sense instead of needing rote memory." },
            {
              type: "table",
              headers: ["Effect", "What moves", "Distance"],
              rows: [
                ["Inductive (±I)", "σ electrons, permanent", "Dies after ~3 bonds"],
                ["Resonance (±R / ±M)", "π / lone-pair electrons", "Through conjugation"],
                ["Hyperconjugation", "C–H σ into empty p / π", "Adjacent only (α-H)"],
              ],
            },
            {
              type: "list",
              items: [
                "**Carbocation stability:** benzylic ≈ allylic > 3° > 2° > 1° > CH₃⁺",
                "**Carbanion stability:** reverse order (CH₃⁻ > 1° > 2° > 3°)",
                "**Free radical:** benzylic ≈ allylic > 3° > 2° > 1°",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Halogens are −I but +R. On benzene, they deactivate the ring (−I wins) yet direct *ortho/para* (+R decides position).",
            },
            {
              type: "checkpoint",
              questions: [
                { kind: "mcq", q: "Most stable carbocation:", options: ["CH₃⁺", "CH₃CH₂⁺", "(CH₃)₂CH⁺", "(CH₃)₃C⁺"], answer: 3, explain: "Tertiary: 9 α-H hyperconjugation + +I of three methyls." },
              ],
            },
            {
              type: "keypoints",
              items: ["Electron-withdrawing groups raise acidity.", "Number of α-H = number of hyperconjugative structures.", "Electrophiles are electron-poor; nucleophiles are electron-rich."],
            },
          ],
          flashcards: [
            { front: "Carbocation order", back: "3° > 2° > 1° > methyl" },
            { front: "Halogen effect on benzene", back: "Deactivating but o/p directing" },
            { front: "α-H in tert-butyl cation", back: "9" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Strongest acid among:",
              options: ["CH₃COOH", "ClCH₂COOH", "Cl₂CHCOOH", "Cl₃CCOOH"],
              answer: 3,
              explain: "Three −I chlorines stabilise the carboxylate most.",
            },
            { kind: "truefalse", q: "p-Nitrophenol is more acidic than phenol.", answer: true, explain: "−NO₂ (−I, −R) stabilises the phenoxide ion." },
            { kind: "mcq", q: "Number of hyperconjugative α-H in the tert-butyl cation:", options: ["3", "6", "9", "12"], answer: 2, explain: "Three CH₃ groups × 3 H." },
            {
              kind: "multi",
              q: "Select the electrophiles:",
              options: ["NO₂⁺", "NH₃", "BF₃", "AlCl₃"],
              answers: [0, 2, 3],
              explain: "NH₃ has a lone pair — it is a nucleophile.",
            },
          ],
        },
        {
          slug: "organic-basics-problem-patterns",
          title: "Problem-solving patterns: Organic Basics",
          summary: "DBE, isomer counts, SN1 vs SN2 and Markovnikov in seconds.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "These quick tools crack a lot of organic MCQs before you even draw a mechanism." },
            { type: "formula", tex: t`\text{DBE} = C - \frac{H}{2} - \frac{X}{2} + \frac{N}{2} + 1`, caption: "Degree of unsaturation (rings + π bonds)" },
            {
              type: "table",
              headers: ["", "SN1", "SN2"],
              rows: [
                ["Rate law", "k[RX]", "k[RX][Nu⁻]"],
                ["Substrate", "3° fastest", "CH₃ > 1° > 2°"],
                ["Stereo", "Racemisation", "Walden inversion"],
                ["Solvent", "Polar protic", "Polar aprotic"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Isomer count",
              md: "Structural isomers of alkanes: C₄H₁₀ = 2, C₅H₁₂ = 3, C₆H₁₄ = 5, C₇H₁₆ = 9.",
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Peroxide (Kharasch) effect gives anti-Markovnikov addition **only with HBr** — not HCl or HI.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "DBE of benzene, C₆H₆?", answer: 4, explain: "6 − 3 + 1 = 4 (one ring + three π bonds)." }],
            },
          ],
          flashcards: [
            { front: "DBE formula", back: t`$C - H/2 - X/2 + N/2 + 1$` },
            { front: "SN2 stereochemistry", back: "Inversion of configuration" },
            { front: "Peroxide effect works with", back: "HBr only" },
          ],
          quiz: [
            { kind: "mcq", q: "Anti-Markovnikov addition in the presence of peroxide occurs with:", options: ["HCl", "HBr", "HI", "All halogen acids"], answer: 1, explain: "Only the HBr radical chain steps are both exothermic." },
            { kind: "mcq", q: "Fastest SN2 reaction with OH⁻:", options: ["(CH₃)₃CBr", "(CH₃)₂CHBr", "CH₃CH₂Br", "CH₃Br"], answer: 3, explain: "Least steric hindrance." },
            { kind: "numeric", q: "Number of structural isomers of C₅H₁₂?", answer: 3, explain: "n-pentane, isopentane, neopentane." },
            { kind: "truefalse", q: "SN1 reactions at a chiral centre mostly lead to racemisation.", answer: true, explain: "Planar carbocation is attacked from both faces." },
          ],
        },
      ],
    },
  ],
};
