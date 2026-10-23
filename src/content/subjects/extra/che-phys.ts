import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "chemistry-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "thermodynamics",
    title: "Thermodynamics",
    icon: "🔥",
    description: "Energy changes in chemical systems: the first law, enthalpy, Hess's law, entropy and Gibbs energy.",
    lessons: [
      {
        slug: "first-law",
        title: "Systems, Work, Heat and the First Law",
        summary: "System and surroundings, state functions, the IUPAC sign convention, pressure–volume work and ΔU = q + w.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Thermodynamics tracks energy as it moves between a **system** (the part we study, such as the reaction mixture in a beaker) and its **surroundings** (everything else). It tells us how much energy a reaction releases or absorbs and, later, whether it can happen on its own. It says nothing about how fast.",
          },
          {
            type: "table",
            headers: ["System", "Exchanges energy?", "Exchanges matter?", "Example"],
            rows: [
              ["Open", "yes", "yes", "tea in an open cup"],
              ["Closed", "yes", "no", "tea in a sealed steel tumbler"],
              ["Isolated", "no", "no", "tea in an ideal sealed thermos flask"],
            ],
          },
          {
            type: "list",
            items: [
              "**State functions** depend only on the current state: $U$, $H$, $S$, $G$, $p$, $V$, $T$. **Path functions** depend on how the change happened: $q$ and $w$.",
              "**Extensive** properties depend on amount (mass, $V$, $U$, $H$); **intensive** do not ($T$, $p$, density, molar heat capacity).",
              "Processes: **isothermal** ($\\Delta T = 0$), **adiabatic** ($q = 0$), **isobaric** ($\\Delta p = 0$), **isochoric** ($\\Delta V = 0$).",
            ],
          },
          {
            type: "formula",
            tex: "\\Delta U = q + w \\qquad w = -p_{\\text{ext}}\\,\\Delta V",
            caption: "IUPAC convention: q > 0 when heat is absorbed by the system; w > 0 when work is done ON the system.",
          },
          {
            type: "formula",
            tex: "w_{\\text{rev, isothermal}} = -2.303\\, nRT \\log \\frac{V_2}{V_1}",
            caption: "For a reversible isothermal expansion of an ideal gas. Since T is constant, ΔU = 0 and q = −w.",
          },
          {
            type: "heading",
            text: "Worked example",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A gas expands from 5 L to 10 L against a constant external pressure of 2 atm and absorbs 1500 J of heat.",
              "$w = -p_{\\text{ext}}\\Delta V = -2 \\times 5 = -10$ L atm $= -10 \\times 101.3 = -1013$ J.",
              "$\\Delta U = q + w = 1500 - 1013 = +487$ J. The internal energy rises by 487 J.",
              "If the same gas (1 mol, 300 K) expanded *reversibly* from 10 L to 100 L: $w = -2.303 \\times 1 \\times 8.314 \\times 300 \\times \\log 10 \\approx -5744$ J.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A system absorbs 500 J of heat and does 200 J of work on the surroundings. What is ΔU (in J)?",
                answer: 300,
                unit: "J",
                explain: "$q = +500$, $w = -200$, so $\\Delta U = 300$ J.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "In **free expansion** (into vacuum), $p_{\\text{ext}} = 0$, so $w = 0$ however large the volume change. For an ideal gas expanding isothermally, $\\Delta U = 0$ whatever the path. Also, older textbooks used $\\Delta U = q - w$ with the opposite sign of w; NCERT uses $\\Delta U = q + w$.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Units",
            md: "$1$ L atm $= 101.3$ J and $R = 8.314$ J K⁻¹ mol⁻¹ $= 0.0821$ L atm K⁻¹ mol⁻¹. Mixing these up is the single most common arithmetic slip.",
          },
          {
            type: "keypoints",
            items: [
              "Open, closed and isolated systems differ in what they exchange.",
              "U, H, S, G are state functions; q and w are path functions.",
              "First law: ΔU = q + w (IUPAC signs).",
              "Irreversible work: w = −p_ext ΔV; reversible isothermal: w = −2.303 nRT log(V₂/V₁).",
            ],
          },
        ],
        flashcards: [
          { front: "First law of thermodynamics", back: "ΔU = q + w: energy is conserved." },
          { front: "Isolated system", back: "Exchanges neither energy nor matter with surroundings." },
          { front: "Sign of w when a gas expands", back: "Negative (work done by the system)." },
          { front: "ΔU for isothermal change of an ideal gas", back: "Zero, because U of an ideal gas depends only on T." },
          { front: "1 L atm in joules", back: "101.3 J" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a path function?",
            options: ["Internal energy", "Enthalpy", "Work", "Entropy"],
            answer: 2,
            explain: "Work depends on the path taken; the others are state functions.",
          },
          {
            kind: "numeric",
            q: "1 mol of an ideal gas expands against a constant pressure of 1 atm from 10 L to 20 L. Find w in joules (use 1 L atm = 101.3 J; enter the signed value).",
            answer: -1013,
            unit: "J",
            explain: "$w = -1 \\times 10 = -10$ L atm $= -1013$ J.",
          },
          {
            kind: "truefalse",
            q: "In an adiabatic process, q = 0, so ΔU = w.",
            answer: true,
            explain: "No heat is exchanged, so all of ΔU comes from work.",
          },
          {
            kind: "numeric",
            q: "2 mol of an ideal gas expand reversibly and isothermally at 300 K from 1 L to 10 L. Find |w| in kJ (R = 8.314 J K⁻¹ mol⁻¹).",
            answer: 11.49,
            tolerance: 0.05,
            unit: "kJ",
            explain: "$|w| = 2.303 \\times 2 \\times 8.314 \\times 300 \\times 1 = 11\\,488$ J $\\approx 11.49$ kJ.",
            difficulty: 3,
          },
          {
            kind: "fill",
            q: "Temperature, pressure and density are ___ properties because they do not depend on the amount of matter.",
            answer: ["intensive"],
            explain: "Extensive properties scale with amount.",
          },
        ],
      },
      {
        slug: "enthalpy-and-hess-law",
        title: "Enthalpy, Hess's Law and Bond Enthalpy",
        summary: "ΔH vs ΔU, standard enthalpies of formation and combustion, Hess's law and bond enthalpy calculations.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Most reactions happen in open vessels at constant pressure. The heat exchanged at constant pressure is the change in **enthalpy**, $H = U + pV$. At constant volume (a bomb calorimeter) the heat measured is $\\Delta U$. The two differ only when the number of moles of gas changes.",
          },
          {
            type: "formula",
            tex: "q_p = \\Delta H, \\quad q_V = \\Delta U, \\qquad \\Delta H = \\Delta U + \\Delta n_g RT, \\qquad C_p - C_V = R",
            caption: "Δn_g = moles of gaseous products − moles of gaseous reactants.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Worked example 1:** $\\mathrm{N_2(g) + 3H_2(g) \\to 2NH_3(g)}$, $\\Delta H = -92.4$ kJ at 298 K.",
              "$\\Delta n_g = 2 - 4 = -2$; $RT = 8.314 \\times 298 = 2478$ J $= 2.478$ kJ.",
              "$\\Delta U = \\Delta H - \\Delta n_g RT = -92.4 + 4.96 = -87.4$ kJ.",
            ],
          },
          {
            type: "heading",
            text: "Standard enthalpies",
          },
          {
            type: "table",
            headers: ["Enthalpy", "Definition"],
            rows: [
              ["Formation, ΔfH°", "1 mol of compound formed from elements in their standard states; zero for elements (e.g. C(graphite), O₂(g))"],
              ["Combustion, ΔcH°", "1 mol of substance burnt completely in oxygen; always negative"],
              ["Neutralisation", "1 mol of water formed from acid + base; −57.1 kJ mol⁻¹ for strong acid + strong base"],
              ["Atomisation / bond dissociation", "breaking bonds to give gaseous atoms; always positive"],
            ],
          },
          {
            type: "formula",
            tex: "\\Delta_r H^\\circ = \\sum \\Delta_f H^\\circ(\\text{products}) - \\sum \\Delta_f H^\\circ(\\text{reactants})",
          },
          {
            type: "text",
            md: "**Hess's law:** the total enthalpy change is the same whether a reaction happens in one step or many, because $H$ is a state function. So thermochemical equations can be added and subtracted like algebra.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Worked example 2 (Hess):** C(graphite) + O₂ → CO₂, ΔH = −393.5 kJ; CO + ½O₂ → CO₂, ΔH = −283.0 kJ.",
              "Subtract the second from the first: C + ½O₂ → CO, ΔH = −393.5 − (−283.0) = **−110.5 kJ**.",
              "This is useful because carbon can't be burnt to *pure* CO in the lab, so the value can't be measured directly.",
              "**Worked example 3 (bonds):** H₂ + Cl₂ → 2HCl with B.E. (H–H) 436, (Cl–Cl) 242, (H–Cl) 431 kJ mol⁻¹.",
              "$\\Delta H = \\sum$ B.E.(broken) $- \\sum$ B.E.(formed) $= (436 + 242) - 2(431) = -184$ kJ.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Using ΔfH°: CH₄ = −74.8, CO₂ = −393.5, H₂O(l) = −285.8 kJ mol⁻¹, find ΔcH° of methane (kJ mol⁻¹).",
                answer: -890.3,
                tolerance: 0.2,
                unit: "kJ/mol",
                explain: "$[-393.5 + 2(-285.8)] - [-74.8 + 0] = -965.1 + 74.8 = -890.3$ kJ mol⁻¹.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "With **bond enthalpies** it is *reactants minus products*; with **enthalpies of formation** it is *products minus reactants*. Swapping them flips the sign. Also, count only **gaseous** species in $\\Delta n_g$: for $\\mathrm{C(s) + O_2(g) \\to CO_2(g)}$, $\\Delta n_g = 0$ and $\\Delta H = \\Delta U$.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Kitchen chemistry",
            md: "The LPG in Indian kitchens is mostly butane and propane. Butane's enthalpy of combustion is about −2880 kJ mol⁻¹, which is why a single 14.2 kg cylinder lasts a family weeks.",
          },
          {
            type: "keypoints",
            items: [
              "ΔH = heat at constant p; ΔU = heat at constant V.",
              "ΔH = ΔU + Δn_g RT (gases only).",
              "ΔfH° of an element in its standard state is zero.",
              "Hess's law: add equations, add ΔH values.",
              "Bond enthalpy: ΔH = Σ(broken) − Σ(formed).",
            ],
          },
        ],
        flashcards: [
          { front: "Relation between ΔH and ΔU", back: "ΔH = ΔU + Δn_g RT" },
          { front: "Hess's law", back: "The enthalpy change of a reaction is the same however many steps it takes." },
          { front: "ΔfH° of O₂(g)", back: "Zero (element in its standard state)." },
          { front: "Enthalpy of neutralisation, strong acid + strong base", back: "About −57.1 kJ per mole of water formed." },
          { front: "ΔrH from bond enthalpies", back: "Σ B.E. of bonds broken − Σ B.E. of bonds formed." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For which reaction is ΔH = ΔU?",
            options: ["N₂ + 3H₂ → 2NH₃", "H₂ + Cl₂ → 2HCl", "PCl₅ → PCl₃ + Cl₂", "2SO₂ + O₂ → 2SO₃"],
            answer: 1,
            explain: "All species are gases and Δn_g = 2 − 2 = 0.",
          },
          {
            kind: "numeric",
            q: "For CaCO₃(s) → CaO(s) + CO₂(g), ΔU = +175.5 kJ at 1000 K. Find ΔH in kJ (R = 8.314 J K⁻¹ mol⁻¹).",
            answer: 183.8,
            tolerance: 0.2,
            unit: "kJ",
            explain: "$\\Delta n_g = 1$; $RT = 8.314$ kJ; $\\Delta H = 175.5 + 8.3 = 183.8$ kJ.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The enthalpy of combustion of a substance is always negative.",
            answer: true,
            explain: "Combustion always releases heat.",
          },
          {
            kind: "numeric",
            q: "Given B.E. (C–H) = 414 kJ mol⁻¹, find the enthalpy of atomisation of CH₄ in kJ mol⁻¹.",
            answer: 1656,
            unit: "kJ/mol",
            explain: "Four C–H bonds: $4 \\times 414 = 1656$ kJ mol⁻¹.",
          },
          {
            kind: "fill",
            q: "The law stating that enthalpy change is independent of the path is ___ law.",
            answer: ["Hess's", "Hess", "Hess’s"],
            explain: "Hess's law of constant heat summation.",
          },
        ],
      },
      {
        slug: "entropy-and-gibbs-energy",
        title: "Entropy, Gibbs Energy and Spontaneity",
        summary: "Entropy and the second law, ΔG = ΔH − TΔS, the four sign cases, and the link between ΔG° and K.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Ice melts on a summer day in Delhi even though melting absorbs heat. So \"exothermic\" can't be the whole test for whether a process happens by itself. The missing piece is **entropy**, $S$: a measure of how many ways the energy and particles of a system can be arranged. Spreading out increases entropy.",
          },
          {
            type: "list",
            items: [
              "Entropy increases: solid → liquid → gas; dissolving a solid; reactions that make more gas molecules; heating.",
              "**Second law:** for a spontaneous process, $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$.",
              "**Third law:** the entropy of a perfect crystal at 0 K is zero.",
            ],
          },
          {
            type: "formula",
            tex: "\\Delta S = \\frac{q_{\\text{rev}}}{T} \\qquad \\Delta S_{\\text{vap}} = \\frac{\\Delta H_{\\text{vap}}}{T_b}",
          },
          {
            type: "formula",
            tex: "\\Delta G = \\Delta H - T\\Delta S \\qquad \\Delta G^\\circ = -RT\\ln K = -2.303\\,RT\\log K",
            caption: "At constant T and p: ΔG < 0 spontaneous, ΔG = 0 equilibrium, ΔG > 0 non-spontaneous.",
          },
          {
            type: "table",
            headers: ["ΔH", "ΔS", "ΔG = ΔH − TΔS", "Spontaneous?"],
            rows: [
              ["−", "+", "always −", "at all T"],
              ["+", "−", "always +", "never"],
              ["−", "−", "− at low T", "only below T = ΔH/ΔS"],
              ["+", "+", "− at high T", "only above T = ΔH/ΔS"],
            ],
          },
          {
            type: "heading",
            text: "Worked example: lime kilns",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "CaCO₃(s) → CaO(s) + CO₂(g): ΔH° ≈ +178 kJ mol⁻¹, ΔS° ≈ +160 J K⁻¹ mol⁻¹.",
              "At 298 K: ΔG° = 178 − 298 × 0.160 = 178 − 47.7 = **+130.3 kJ** → not spontaneous.",
              "It becomes spontaneous above T = ΔH/ΔS = 178 000 / 160 ≈ **1113 K** (about 840 °C), which is why lime kilns (in Katni, Madhya Pradesh, for example) run at around 900 °C.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "For a reaction at 298 K, ΔG° = −11.4 kJ mol⁻¹. What is log K? (R = 8.314 J K⁻¹ mol⁻¹)",
                answer: 2,
                tolerance: 0.02,
                explain: "$\\log K = \\dfrac{11\\,400}{2.303 \\times 8.314 \\times 298} = \\dfrac{11\\,400}{5706} \\approx 2.0$, so $K \\approx 100$.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "Convert ΔS from **J** to **kJ** (or ΔH to J) before putting both into $\\Delta H - T\\Delta S$. And $\\Delta G^\\circ > 0$ does not mean *no* product forms. It means $K < 1$: the equilibrium simply lies towards reactants. Spontaneity also says nothing about speed: diamond → graphite is spontaneous but immeasurably slow.",
          },
          {
            type: "keypoints",
            items: [
              "Entropy measures dispersal; gas formation and melting raise it.",
              "Second law: ΔS_total > 0 for spontaneous change.",
              "ΔG = ΔH − TΔS; ΔG < 0 → spontaneous at constant T, p.",
              "Crossover temperature T = ΔH/ΔS.",
              "ΔG° = −2.303 RT log K.",
            ],
          },
        ],
        flashcards: [
          { front: "Gibbs energy equation", back: "ΔG = ΔH − TΔS" },
          { front: "ΔG° and K", back: "ΔG° = −2.303 RT log K" },
          { front: "Condition for equilibrium", back: "ΔG = 0" },
          { front: "Third law", back: "Entropy of a perfectly crystalline substance at 0 K is zero." },
          { front: "ΔH > 0, ΔS > 0: when spontaneous?", back: "At high temperature, above T = ΔH/ΔS." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "ΔH_vap of water is 40.79 kJ mol⁻¹ at 373 K. Find ΔS_vap in J K⁻¹ mol⁻¹.",
            answer: 109.4,
            tolerance: 0.3,
            unit: "J/(K·mol)",
            explain: "$40\\,790 / 373 \\approx 109.4$ J K⁻¹ mol⁻¹.",
          },
          {
            kind: "mcq",
            q: "A reaction has ΔH < 0 and ΔS < 0. It is spontaneous:",
            options: ["at all temperatures", "at no temperature", "only at low temperatures", "only at high temperatures"],
            answer: 2,
            explain: "TΔS is positive in ΔG; at low T the negative ΔH wins.",
          },
          {
            kind: "truefalse",
            q: "A reaction with ΔG° > 0 produces no products at all.",
            answer: false,
            explain: "It means K < 1; some product still forms at equilibrium.",
          },
          {
            kind: "numeric",
            q: "For a reaction, ΔH = +30 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. Above what temperature (K) is it spontaneous?",
            answer: 300,
            unit: "K",
            explain: "$T = \\Delta H/\\Delta S = 30\\,000/100 = 300$ K.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange in order of increasing molar entropy at the same temperature (near 0 °C).",
            items: ["H₂O(s)", "H₂O(l)", "H₂O(g)"],
            explain: "Gas particles are the most dispersed; solids the least.",
          },
          {
            kind: "fill",
            q: "For a spontaneous process at constant temperature and pressure, ΔG is ___ than zero.",
            answer: ["less", "smaller", "lower"],
            explain: "ΔG < 0 is the criterion.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "redox-reactions",
    title: "Redox Reactions",
    icon: "⚖️",
    description: "Oxidation and reduction as electron transfer, oxidation numbers, types of redox reactions and balancing equations.",
    lessons: [
      {
        slug: "oxidation-and-reduction",
        title: "Oxidation, Reduction and Electron Transfer",
        summary: "Classical and electronic definitions, oxidising and reducing agents, and competitive electron transfer.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Rusting of iron bridges, burning of LPG, extraction of iron in the blast furnaces of Jamshedpur and the working of your phone battery are all **redox** reactions: one species is oxidised while another is reduced, simultaneously.",
          },
          {
            type: "table",
            headers: ["Idea", "Oxidation", "Reduction"],
            rows: [
              ["Classical", "addition of oxygen / electronegative element, or removal of hydrogen / electropositive element", "removal of oxygen / electronegative element, or addition of hydrogen / electropositive element"],
              ["Electronic", "loss of electrons", "gain of electrons"],
              ["Oxidation number", "increases", "decreases"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Memory aid",
            md: "**OIL RIG:** Oxidation Is Loss, Reduction Is Gain (of electrons). The **oxidising agent** gets reduced; the **reducing agent** gets oxidised.",
          },
          {
            type: "heading",
            text: "Worked example: who is oxidised?",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Dip a zinc rod in blue CuSO₄ solution. The blue fades and reddish copper coats the zinc.",
              "Half-reactions: Zn → Zn²⁺ + 2e⁻ (oxidation); Cu²⁺ + 2e⁻ → Cu (reduction).",
              "Zinc is the **reducing agent**; Cu²⁺ is the **oxidising agent**.",
              "In the blast furnace, Fe₂O₃ + 3CO → 2Fe + 3CO₂: Fe₂O₃ loses oxygen (reduced), CO gains oxygen (oxidised), so CO is the reducing agent.",
            ],
          },
          {
            type: "heading",
            text: "Competitive electron transfer",
          },
          {
            type: "text",
            md: "Copper placed in ZnSO₄ solution does nothing, but copper in AgNO₃ solution turns the solution blue and deposits silver. Metals higher in the **activity (electrochemical) series** give electrons to ions of metals below them:\n\nK > Na > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In 2Na + Cl₂ → 2NaCl, the oxidising agent is:",
                options: ["Na", "Cl₂", "NaCl", "none, it is not redox"],
                answer: 1,
                explain: "Cl₂ gains electrons (is reduced), so it oxidises sodium.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "The oxidising agent is the species that is **reduced**, not the one that is oxidised. Also, a reaction like AgNO₃ + NaCl → AgCl + NaNO₃ is **not** redox: no oxidation number changes; it is just ion exchange (precipitation).",
          },
          {
            type: "illustration",
            emoji: "🔋",
            caption: "A Daniell cell separates the Zn and Cu²⁺ half-reactions so the transferred electrons flow through a wire as current.",
          },
          {
            type: "keypoints",
            items: [
              "Oxidation = loss of electrons; reduction = gain.",
              "Oxidising agent is reduced; reducing agent is oxidised.",
              "Oxidation and reduction always occur together.",
              "A more reactive metal displaces a less reactive one from its salt solution.",
            ],
          },
        ],
        flashcards: [
          { front: "OIL RIG", back: "Oxidation Is Loss, Reduction Is Gain (of electrons)." },
          { front: "Oxidising agent", back: "A species that accepts electrons and is itself reduced." },
          { front: "Why does Zn displace Cu from CuSO₄?", back: "Zn is higher in the activity series and loses electrons more readily." },
          { front: "Is AgNO₃ + NaCl → AgCl + NaNO₃ redox?", back: "No. Oxidation numbers don't change." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In CuO + H₂ → Cu + H₂O, the substance oxidised is:",
            options: ["CuO", "H₂", "Cu", "H₂O"],
            answer: 1,
            explain: "H₂ gains oxygen (0 → +1).",
          },
          {
            kind: "truefalse",
            q: "Copper metal can reduce Ag⁺ ions in solution.",
            answer: true,
            explain: "Cu is above Ag in the activity series: Cu + 2Ag⁺ → Cu²⁺ + 2Ag.",
          },
          {
            kind: "fill",
            q: "A reducing agent ___ electrons during a redox reaction.",
            answer: ["loses", "donates", "gives", "gives up"],
            explain: "It is oxidised by losing electrons.",
          },
          {
            kind: "mcq",
            q: "Which metal will NOT displace hydrogen from dilute HCl?",
            options: ["Zn", "Mg", "Fe", "Cu"],
            answer: 3,
            explain: "Copper lies below hydrogen in the activity series.",
          },
          {
            kind: "numeric",
            q: "How many electrons are transferred in Zn + Cu²⁺ → Zn²⁺ + Cu, per zinc atom?",
            answer: 2,
            explain: "Zn goes from 0 to +2.",
          },
        ],
      },
      {
        slug: "oxidation-number",
        title: "Oxidation Number and Types of Redox Reactions",
        summary: "Rules for assigning oxidation numbers, tricky cases, and combination, decomposition, displacement and disproportionation reactions.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "For covalent molecules, electrons aren't fully transferred, so we use bookkeeping: the **oxidation number** (O.N.) is the charge an atom would carry if all its bonds were ionic, with shared electrons given to the more electronegative atom.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Free element: O.N. = 0 (Na, O₂, P₄, S₈).",
              "Monatomic ion: O.N. = its charge.",
              "Fluorine is always −1. Oxygen is usually −2, but −1 in peroxides (H₂O₂), −½ in superoxides (KO₂), +2 in OF₂.",
              "Hydrogen is +1 with non-metals, but −1 in metal hydrides (NaH, CaH₂).",
              "Group 1 metals +1, group 2 metals +2 in compounds.",
              "Sum of O.N. = 0 for a neutral molecule, = charge for an ion.",
            ],
          },
          {
            type: "heading",
            text: "Worked examples",
          },
          {
            type: "table",
            headers: ["Species", "Working", "O.N."],
            rows: [
              ["Cr in K₂Cr₂O₇", "2(+1) + 2x + 7(−2) = 0", "+6"],
              ["Mn in KMnO₄", "+1 + x − 8 = 0", "+7"],
              ["S in Na₂S₂O₃", "2 + 2x − 6 = 0", "+2 (average)"],
              ["S in S₄O₆²⁻", "4x − 12 = −2", "+2.5 (average)"],
              ["Fe in Fe₃O₄", "3x − 8 = 0", "+8/3 (average)"],
              ["Cr in CrO₅", "has two peroxide (O–O) groups: x + 4(−1) + (−2) = 0", "+6"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Fractional O.N. = average",
            md: "A fractional O.N. means the atoms are in different environments. In S₄O₆²⁻ the two end sulphurs are +5 and the two bridging ones are 0, averaging +2.5. In CrO₅, the formula method gives +10, which is impossible for Cr; the peroxide structure gives the true value +6.",
          },
          {
            type: "heading",
            text: "Types of redox reaction",
          },
          {
            type: "table",
            headers: ["Type", "Example"],
            rows: [
              ["Combination", "C + O₂ → CO₂"],
              ["Decomposition", "2KClO₃ → 2KCl + 3O₂"],
              ["Metal displacement", "Zn + CuSO₄ → ZnSO₄ + Cu"],
              ["Non-metal displacement", "Cl₂ + 2KBr → 2KCl + Br₂"],
              ["Disproportionation (same element oxidised and reduced)", "2H₂O₂ → 2H₂O + O₂ (O: −1 → −2 and 0)"],
              ["Comproportionation", "2H₂S + SO₂ → 3S + 2H₂O (S: −2 and +4 → 0)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the oxidation number of P in H₃PO₄?",
                answer: 5,
                explain: "$3(+1) + x + 4(-2) = 0 \\Rightarrow x = +5$.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "Fluorine can't disproportionate: it is the most electronegative element, so it can't take a positive O.N. Chlorine can: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O. Also, ClO₄⁻ (Cl at +7) **cannot** disproportionate because +7 is its maximum.",
          },
          {
            type: "keypoints",
            items: [
              "O.N. sum = 0 for molecules, = charge for ions.",
              "F is always −1; O is −2 except in peroxides, superoxides and OF₂.",
              "Fractional O.N. is an average over different atoms.",
              "Disproportionation: one element is both oxidised and reduced.",
            ],
          },
        ],
        flashcards: [
          { front: "O.N. of O in H₂O₂", back: "−1" },
          { front: "O.N. of H in NaH", back: "−1" },
          { front: "O.N. of Mn in KMnO₄", back: "+7" },
          { front: "Disproportionation", back: "A redox reaction in which the same element is simultaneously oxidised and reduced." },
          { front: "O.N. of O in OF₂", back: "+2" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the oxidation number of Cr in K₂Cr₂O₇.",
            answer: 6,
            explain: "$2 + 2x - 14 = 0 \\Rightarrow x = 6$.",
          },
          {
            kind: "mcq",
            q: "Which of these is a disproportionation reaction?",
            options: ["2Mg + O₂ → 2MgO", "Cl₂ + 2NaOH → NaCl + NaClO + H₂O", "Zn + 2HCl → ZnCl₂ + H₂", "CaCO₃ → CaO + CO₂"],
            answer: 1,
            explain: "Cl goes from 0 to −1 (in NaCl) and +1 (in NaClO).",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "What is the average oxidation number of Fe in Fe₃O₄? Give a decimal to 2 places.",
            answer: 2.67,
            tolerance: 0.01,
            explain: "$3x = 8$, $x = 8/3 \\approx 2.67$ (one Fe²⁺ and two Fe³⁺).",
          },
          {
            kind: "truefalse",
            q: "Perchlorate ion (ClO₄⁻) can act as a reducing agent through its chlorine atom.",
            answer: false,
            explain: "Cl is already at its highest O.N. (+7), so it can only be reduced, not oxidised.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The oxidation number of oxygen in KO₂ (a superoxide) is ___.",
            answer: ["-1/2", "−1/2", "-0.5", "−0.5", "-½", "−½"],
            explain: "K is +1, so 2x = −1 and x = −½.",
          },
        ],
      },
      {
        slug: "balancing-redox-equations",
        title: "Balancing Redox Equations and Titrations",
        summary: "The oxidation-number method, the ion-electron (half-reaction) method in acid and base, and n-factors in redox titrations.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "In a balanced redox equation, atoms **and** charge balance, and the electrons lost equal the electrons gained. There are two standard methods; both give the same answer.",
          },
          {
            type: "heading",
            text: "Ion-electron method (acidic medium)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Skeleton: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺.",
              "Oxidation half: Fe²⁺ → Fe³⁺ + e⁻.",
              "Reduction half: balance O with H₂O, then H with H⁺, then charge with e⁻: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.",
              "Multiply the oxidation half by 5 and add: **MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O**.",
              "Check charge: left $-1 + 10 + 8 = +17$; right $+2 + 15 = +17$. ✓",
            ],
          },
          {
            type: "heading",
            text: "In basic medium",
          },
          {
            type: "text",
            md: "Balance as if acidic, then add as many OH⁻ to both sides as there are H⁺, turning H⁺ + OH⁻ into H₂O. Example result:\n\n**2MnO₄⁻ + I⁻ + H₂O → 2MnO₂ + IO₃⁻ + 2OH⁻**\n\nMn: +7 → +4 (gains 3 × 2 = 6 e⁻); I: −1 → +5 (loses 6 e⁻). Charge: −3 on both sides.",
          },
          {
            type: "heading",
            text: "Oxidation-number method",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Cr₂O₇²⁻ + Fe²⁺ → Cr³⁺ + Fe³⁺ (acidic).",
              "Each Cr: +6 → +3, gain 3; two Cr gain 6. Each Fe: +2 → +3, lose 1. So 6 Fe²⁺ per Cr₂O₇²⁻.",
              "Balance O with H₂O and H with H⁺: **Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O**.",
            ],
          },
          {
            type: "table",
            headers: ["Oxidant", "Medium", "Product", "n-factor (e⁻ per formula unit)"],
            rows: [
              ["KMnO₄", "acidic", "Mn²⁺", "5"],
              ["KMnO₄", "neutral / weakly basic", "MnO₂", "3"],
              ["KMnO₄", "strongly basic", "MnO₄²⁻", "1"],
              ["K₂Cr₂O₇", "acidic", "2Cr³⁺", "6"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many moles of Fe²⁺ are oxidised by 1 mol of MnO₄⁻ in acidic solution?",
                answer: 5,
                explain: "MnO₄⁻ accepts 5 e⁻; each Fe²⁺ gives 1.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "In a titration, equate **equivalents**, not moles: $n_1 M_1 V_1 = n_2 M_2 V_2$ (n = n-factor). For oxalate, C₂O₄²⁻ → 2CO₂, the n-factor is **2**, not 1. Also, KMnO₄ titrations use dilute H₂SO₄, never HCl, because KMnO₄ would oxidise Cl⁻ to Cl₂.",
          },
          {
            type: "keypoints",
            items: [
              "Electrons lost = electrons gained; atoms and charge balance.",
              "Acidic: balance O with H₂O, H with H⁺. Basic: then neutralise H⁺ with OH⁻.",
              "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.",
              "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O.",
              "n-factor of KMnO₄: 5 (acid), 3 (neutral), 1 (strong base).",
            ],
          },
        ],
        flashcards: [
          { front: "Balanced MnO₄⁻ / Fe²⁺ equation (acid)", back: "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O" },
          { front: "n-factor of K₂Cr₂O₇ in acid", back: "6" },
          { front: "Why not use HCl in KMnO₄ titrations?", back: "KMnO₄ oxidises Cl⁻ to Cl₂, giving wrong titre values." },
          { front: "Balancing in basic medium", back: "Balance as in acid, then add OH⁻ to both sides to cancel H⁺ as water." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "In the balanced equation Cr₂O₇²⁻ + aFe²⁺ + bH⁺ → 2Cr³⁺ + aFe³⁺ + cH₂O, what is b?",
            answer: 14,
            explain: "7 O need 7 H₂O, which need 14 H⁺.",
          },
          {
            kind: "numeric",
            q: "What volume (mL) of 0.02 M KMnO₄ is needed to oxidise 50 mL of 0.1 M FeSO₄ in acid?",
            answer: 50,
            unit: "mL",
            explain: "Equivalents: $5 \\times 0.02 \\times V = 1 \\times 0.1 \\times 50$, so $V = 5/0.1 = 50$ mL.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In neutral medium, MnO₄⁻ is reduced to:",
            options: ["Mn²⁺", "MnO₂", "MnO₄²⁻", "Mn"],
            answer: 1,
            explain: "+7 → +4, gaining 3 electrons.",
          },
          {
            kind: "truefalse",
            q: "In a balanced redox equation the total charge on both sides must be equal.",
            answer: true,
            explain: "Charge, like atoms, is conserved.",
          },
          {
            kind: "order",
            q: "Order the steps of the ion-electron method in acidic medium.",
            items: [
              "Split into oxidation and reduction half-reactions",
              "Balance atoms other than O and H",
              "Balance O with H₂O and H with H⁺",
              "Balance charge with electrons",
              "Multiply halves to equalise electrons and add",
            ],
            explain: "This is the standard NCERT sequence.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "solutions",
    title: "Solutions",
    icon: "🧪",
    description: "Concentration terms, solubility and Henry's law, Raoult's law, non-ideal solutions and colligative properties.",
    lessons: [
      {
        slug: "concentration-terms",
        title: "Expressing Concentration",
        summary: "Mass percentage, ppm, mole fraction, molarity and molality, with conversions and temperature dependence.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A **solution** is a homogeneous mixture of two or more components. The component present in the larger amount is usually the **solvent**; the rest are **solutes**. Saline drips, soda, brass and humid air are all solutions. To do any calculation we need a number for *how much* solute there is.",
          },
          {
            type: "table",
            headers: ["Term", "Definition", "Depends on T?"],
            rows: [
              ["Mass % (w/w)", "mass of solute / mass of solution × 100", "no"],
              ["ppm", "parts of solute per 10⁶ parts of solution (by mass)", "no"],
              ["Mole fraction, x", "moles of component / total moles", "no"],
              ["Molarity, M", "moles of solute per litre of **solution**", "yes (volume changes)"],
              ["Molality, m", "moles of solute per kg of **solvent**", "no"],
            ],
          },
          {
            type: "illustration",
            emoji: "💧",
            caption: "An IV drip of 0.9% saline: 0.9 g of NaCl in every 100 mL of solution, a concentration chosen to match blood.",
          },
          {
            type: "formula",
            tex: "M = \\frac{n_{\\text{solute}}}{V_{\\text{solution}}(\\text{L})} \\qquad m = \\frac{n_{\\text{solute}}}{W_{\\text{solvent}}(\\text{kg})} \\qquad x_A = \\frac{n_A}{n_A + n_B}",
          },
          {
            type: "heading",
            text: "Worked examples",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "4 g NaOH (M = 40) in 250 mL of solution: $n = 0.1$ mol, $M = 0.1/0.25 = 0.4$ M.",
              "4 g NaOH dissolved in 250 g of water: $m = 0.1/0.25 = 0.4$ mol kg⁻¹.",
              "18 g glucose (0.1 mol) in 180 g water (10 mol): $x_{\\text{glucose}} = 0.1/10.1 \\approx 0.0099$.",
              "**Molarity → molality:** 2 M NaCl with density 1.08 g mL⁻¹. 1 L of solution weighs 1080 g and contains $2 \\times 58.5 = 117$ g NaCl, so solvent = 963 g. $m = 2/0.963 \\approx 2.08$ mol kg⁻¹.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the molarity of a solution containing 5.85 g of NaCl in 500 mL of solution? (NaCl = 58.5 g mol⁻¹)",
                answer: 0.2,
                unit: "M",
                explain: "$n = 0.1$ mol; $M = 0.1/0.5 = 0.2$ M.",
              },
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "ppm in your tap water",
            md: "The Bureau of Indian Standards (IS 10500) sets the acceptable limit for fluoride in drinking water at 1.0 mg L⁻¹, about 1 ppm. Groundwater in parts of Rajasthan and Telangana exceeds this, causing dental and skeletal fluorosis.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "Molarity divides by volume of **solution**; molality divides by mass of **solvent**. Using the solution's mass for molality is the classic error. And since volume expands on heating, **molarity decreases with temperature** while molality and mole fraction do not change.",
          },
          {
            type: "keypoints",
            items: [
              "Mass %, ppm, x and m are temperature-independent; M is not.",
              "M = mol per L of solution; m = mol per kg of solvent.",
              "Mole fractions of all components add to 1.",
              "Use density to convert between M and m.",
            ],
          },
        ],
        flashcards: [
          { front: "Molality", back: "Moles of solute per kilogram of solvent." },
          { front: "Which concentration terms are temperature-independent?", back: "Mass %, ppm, mole fraction, molality." },
          { front: "Sum of mole fractions", back: "Always 1." },
          { front: "1 ppm", back: "1 part solute per million parts solution; ≈ 1 mg per litre for dilute aqueous solutions." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the molality of a solution made by dissolving 9 g glucose (180 g mol⁻¹) in 250 g of water.",
            answer: 0.2,
            unit: "mol/kg",
            explain: "$n = 0.05$; $m = 0.05/0.25 = 0.2$ mol kg⁻¹.",
          },
          {
            kind: "mcq",
            q: "Which concentration unit changes when a solution is heated?",
            options: ["Molality", "Mole fraction", "Molarity", "Mass percentage"],
            answer: 2,
            explain: "Volume changes with temperature, so molarity changes.",
          },
          {
            kind: "numeric",
            q: "A solution has 46 g of ethanol (46 g mol⁻¹) and 36 g of water. What is the mole fraction of ethanol? (Give 2 decimals.)",
            answer: 0.33,
            tolerance: 0.01,
            explain: "Ethanol 1 mol, water 2 mol; $x = 1/3 \\approx 0.33$.",
          },
          {
            kind: "truefalse",
            q: "For a very dilute aqueous solution, molarity and molality are nearly equal.",
            answer: true,
            explain: "1 L of very dilute solution contains almost exactly 1 kg of water.",
          },
          {
            kind: "numeric",
            q: "A sample of 10⁶ g of water contains 2 g of a pollutant. Express its concentration in ppm.",
            answer: 2,
            unit: "ppm",
            explain: "2 parts per 10⁶ parts = 2 ppm.",
          },
        ],
      },
      {
        slug: "henry-and-raoult",
        title: "Henry's Law, Raoult's Law and Non-ideal Solutions",
        summary: "Solubility of gases, vapour pressure of liquid mixtures, ideal solutions, positive and negative deviations, and azeotropes.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Open a cold bottle of soda and it fizzes: the CO₂ was dissolved under pressure, and as the pressure drops the gas escapes. That is **Henry's law** at work.",
          },
          {
            type: "formula",
            tex: "p_{\\text{gas}} = K_H \\, x_{\\text{gas}}",
            caption: "At a given temperature, the mole fraction of gas dissolved is proportional to its partial pressure. Larger K_H means LOWER solubility.",
          },
          {
            type: "list",
            items: [
              "Gas solubility **decreases** as temperature rises (K_H increases), which is why fish struggle in warm, polluted lakes.",
              "**Scuba divers** breathe air diluted with helium to avoid nitrogen dissolving in blood under high pressure (the bends).",
              "**At high altitude** (Leh, ~3500 m) low O₂ partial pressure means less O₂ in blood: anoxia, weakness and headaches.",
            ],
          },
          {
            type: "heading",
            text: "Raoult's law for volatile liquids",
          },
          {
            type: "formula",
            tex: "p_A = p_A^\\circ x_A, \\quad p_B = p_B^\\circ x_B, \\quad p_{\\text{total}} = p_A^\\circ x_A + p_B^\\circ x_B, \\quad y_A = \\frac{p_A}{p_{\\text{total}}}",
            caption: "y = mole fraction in the vapour. The vapour is richer in the more volatile component.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Worked example:** liquids A ($p^\\circ = 450$ mm Hg) and B ($p^\\circ = 700$ mm Hg) form an ideal solution with $x_A = 0.4$.",
              "$p_A = 450 \\times 0.4 = 180$ mm; $p_B = 700 \\times 0.6 = 420$ mm.",
              "$p_{\\text{total}} = 600$ mm Hg.",
              "Vapour: $y_A = 180/600 = 0.3$, $y_B = 0.7$: richer in the more volatile B.",
            ],
          },
          {
            type: "table",
            headers: ["", "Ideal", "Positive deviation", "Negative deviation"],
            rows: [
              ["A–B attraction vs A–A, B–B", "equal", "weaker", "stronger"],
              ["Vapour pressure", "obeys Raoult", "higher than predicted", "lower than predicted"],
              ["ΔmixH, ΔmixV", "0, 0", "> 0, > 0", "< 0, < 0"],
              ["Examples", "benzene + toluene, n-hexane + n-heptane", "ethanol + water, ethanol + acetone, CS₂ + acetone", "chloroform + acetone, HNO₃ + water, HCl + water"],
              ["Azeotrope", "none", "minimum-boiling (≈95% ethanol)", "maximum-boiling (≈68% HNO₃)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Chloroform and acetone form hydrogen bonds with each other. Their solution shows:",
                options: ["ideal behaviour", "positive deviation", "negative deviation", "no vapour pressure"],
                answer: 2,
                explain: "Stronger A–B attraction lowers the vapour pressure: negative deviation and a maximum-boiling azeotrope.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "Higher $K_H$ means **less** soluble, not more. And an azeotrope boils at constant composition, so ethanol cannot be purified beyond about 95% by fractional distillation alone; absolute alcohol needs other methods.",
          },
          {
            type: "keypoints",
            items: [
              "Henry: p = K_H x; gas solubility falls as T rises.",
              "Raoult: p_A = p°_A x_A; total p is the sum.",
              "Ideal: ΔmixH = 0, ΔmixV = 0.",
              "Positive deviation → minimum-boiling azeotrope; negative → maximum-boiling.",
            ],
          },
        ],
        flashcards: [
          { front: "Henry's law", back: "p = K_H x: dissolved gas mole fraction is proportional to its partial pressure." },
          { front: "Raoult's law (volatile liquids)", back: "Partial vapour pressure of each component = its pure vapour pressure × its mole fraction in the liquid." },
          { front: "Example of positive deviation", back: "Ethanol + water (or ethanol + acetone)." },
          { front: "Example of negative deviation", back: "Chloroform + acetone (H-bonding between them)." },
          { front: "Azeotrope", back: "A mixture that boils at constant temperature with the same composition in liquid and vapour." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Two liquids with p° = 200 and 600 mm Hg form an ideal solution with equal mole fractions. What is the total vapour pressure (mm Hg)?",
            answer: 400,
            unit: "mm Hg",
            explain: "$0.5 \\times 200 + 0.5 \\times 600 = 400$ mm Hg.",
          },
          {
            kind: "numeric",
            q: "In the solution above, what is the mole fraction of the more volatile liquid in the vapour?",
            answer: 0.75,
            explain: "$y = 300/400 = 0.75$.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A gas with a higher Henry's law constant is more soluble in water at the same pressure.",
            answer: false,
            explain: "$x = p/K_H$: higher K_H gives lower solubility.",
          },
          {
            kind: "mcq",
            q: "For a solution showing positive deviation from Raoult's law:",
            options: ["ΔmixH < 0", "ΔmixV < 0", "ΔmixH > 0", "it forms a maximum-boiling azeotrope"],
            answer: 2,
            explain: "Weaker A–B interactions absorb heat on mixing; the azeotrope is minimum-boiling.",
          },
          {
            kind: "fill",
            q: "Mixtures that boil at constant temperature without change in composition are called ___.",
            answer: ["azeotropes", "azeotropic mixtures", "azeotrope"],
            explain: "E.g. 95% ethanol–water.",
          },
        ],
      },
      {
        slug: "colligative-properties",
        title: "Colligative Properties and van't Hoff Factor",
        summary: "Relative lowering of vapour pressure, boiling point elevation, freezing point depression, osmotic pressure and abnormal molar masses.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Some properties of dilute solutions depend only on the **number** of solute particles, not on what they are. These are **colligative properties**. Because they count particles, they let us measure molar masses, even of proteins and polymers.",
          },
          {
            type: "formula",
            tex: "\\frac{p^\\circ - p}{p^\\circ} = x_{\\text{solute}} \\qquad \\Delta T_b = i\\,K_b\\,m \\qquad \\Delta T_f = i\\,K_f\\,m \\qquad \\pi = i\\,CRT",
            caption: "For water, K_b = 0.52 K kg mol⁻¹ and K_f = 1.86 K kg mol⁻¹. i = van't Hoff factor (1 for non-electrolytes).",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Worked example 1 (molar mass from ΔT_b):** 1.8 g of a non-volatile solute in 100 g of water raises the boiling point by 0.052 K.",
              "$M = \\dfrac{K_b \\times w \\times 1000}{\\Delta T_b \\times W} = \\dfrac{0.52 \\times 1.8 \\times 1000}{0.052 \\times 100} = 180$ g mol⁻¹ (glucose).",
              "**Worked example 2 (osmotic pressure):** 0.1 M glucose at 300 K: $\\pi = 0.1 \\times 0.0821 \\times 300 = 2.46$ atm.",
              "**Worked example 3 (electrolyte):** 5.85 g NaCl in 1 kg water: $m = 0.1$, $i = 2$; $\\Delta T_f = 2 \\times 1.86 \\times 0.1 = 0.372$ K, so water freezes at −0.372 °C.",
            ],
          },
          {
            type: "heading",
            text: "Osmosis in daily life",
          },
          {
            type: "list",
            items: [
              "**Isotonic** solutions have equal π: 0.9% (w/v) NaCl is isotonic with blood, so it is used in IV drips.",
              "In a **hypertonic** solution cells shrink (plasmolysis); in a **hypotonic** one they swell and may burst.",
              "**Reverse osmosis:** applying pressure greater than π pushes water out of seawater through a membrane. Chennai's Minjur and Nemmeli plants desalinate seawater this way.",
              "Street vendors make kulfi by packing moulds in ice mixed with salt: the salt depresses the freezing point, making the mixture colder than 0 °C.",
            ],
          },
          {
            type: "heading",
            text: "Abnormal molar mass and i",
          },
          {
            type: "table",
            headers: ["Solute", "Behaviour", "i", "Observed molar mass"],
            rows: [
              ["Glucose, urea", "no change", "1", "normal"],
              ["NaCl, KCl", "dissociates into 2 ions", "≈ 2", "lower than true"],
              ["K₂SO₄, CaCl₂", "3 ions", "≈ 3", "lower than true"],
              ["Ethanoic acid in benzene", "dimerises (H-bonding)", "≈ 0.5", "higher than true"],
            ],
          },
          {
            type: "formula",
            tex: "i = \\frac{\\text{observed colligative property}}{\\text{calculated colligative property}} \\qquad \\alpha_{\\text{diss}} = \\frac{i - 1}{n - 1}",
            caption: "n = number of ions from one formula unit.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 0.1 m aqueous solution of a weak electrolyte AB has i = 1.2. What is its degree of dissociation (as a decimal)?",
                answer: 0.2,
                explain: "$\\alpha = (1.2 - 1)/(2 - 1) = 0.2$.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "Compare solutions by **i × m**, not m alone. 0.1 m NaCl ($im = 0.2$) has a lower freezing point than 0.15 m glucose ($im = 0.15$). Also, $\\Delta T_b$ and $\\Delta T_f$ use **molality**, while $\\pi$ uses **molarity**. Osmotic pressure is preferred for proteins because it is large and measured at room temperature.",
          },
          {
            type: "keypoints",
            items: [
              "Colligative properties depend on the number of solute particles.",
              "RLVP = x_solute; ΔT_b = iK_b m; ΔT_f = iK_f m; π = iCRT.",
              "Water: K_b = 0.52, K_f = 1.86 K kg mol⁻¹.",
              "Dissociation → i > 1, lower apparent molar mass; association → i < 1.",
              "Reverse osmosis desalinates seawater.",
            ],
          },
        ],
        flashcards: [
          { front: "Colligative property", back: "A property depending only on the number of solute particles, not their identity." },
          { front: "Osmotic pressure formula", back: "π = iCRT" },
          { front: "K_f of water", back: "1.86 K kg mol⁻¹" },
          { front: "van't Hoff factor of ethanoic acid in benzene", back: "About 0.5 (it dimerises)." },
          { front: "Isotonic saline", back: "0.9% w/v NaCl, same osmotic pressure as blood." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the freezing point depression (in K) of a solution of 6 g urea (60 g mol⁻¹) in 500 g of water. (K_f = 1.86 K kg mol⁻¹)",
            answer: 0.372,
            tolerance: 0.002,
            unit: "K",
            explain: "$m = 0.1/0.5 = 0.2$; $\\Delta T_f = 1.86 \\times 0.2 = 0.372$ K.",
          },
          {
            kind: "mcq",
            q: "Which 0.1 m aqueous solution has the highest boiling point?",
            options: ["Glucose", "NaCl", "K₂SO₄", "Urea"],
            answer: 2,
            explain: "K₂SO₄ gives 3 ions (i ≈ 3), the largest number of particles.",
          },
          {
            kind: "numeric",
            q: "The vapour pressure of pure water is 23.8 mm Hg. What is the vapour pressure (mm Hg) of a solution where the mole fraction of a non-volatile solute is 0.05?",
            answer: 22.61,
            tolerance: 0.02,
            unit: "mm Hg",
            explain: "$p = p^\\circ(1 - x_{\\text{solute}}) = 23.8 \\times 0.95 = 22.61$ mm Hg.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Red blood cells placed in pure water swell and may burst.",
            answer: true,
            explain: "Water is hypotonic; it enters the cells by osmosis.",
          },
          {
            kind: "numeric",
            q: "What is the osmotic pressure (atm) of 0.2 M glucose at 300 K? (R = 0.0821 L atm K⁻¹ mol⁻¹)",
            answer: 4.93,
            tolerance: 0.02,
            unit: "atm",
            explain: "$\\pi = 0.2 \\times 0.0821 \\times 300 = 4.926 \\approx 4.93$ atm.",
          },
          {
            kind: "fill",
            q: "Applying pressure greater than the osmotic pressure to force solvent out of a solution is called ___ osmosis.",
            answer: ["reverse"],
            explain: "Used in RO water purifiers and desalination.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "principles-related-to-practical-chemistry",
    title: "Principles Related to Practical Chemistry",
    icon: "🔬",
    description: "The chemistry behind JEE lab experiments: detecting elements and functional groups, titrations, preparations, salt analysis and physical experiments.",
    lessons: [
      {
        slug: "detecting-elements-and-functional-groups",
        title: "Detecting Elements and Functional Groups",
        summary: "Lassaigne's test for N, S and halogens, and simple tests for unsaturation, alcohols, phenols, aldehydes, ketones, acids and amines.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Carbon compounds are covalent, so their nitrogen, sulphur and halogens don't give ionic tests directly. In **Lassaigne's test** the compound is fused with sodium metal. This converts the elements into ionic sodium salts, which are extracted with water as **sodium fusion extract** (SFE).",
          },
          {
            type: "formula",
            tex: "\\mathrm{Na + C + N \\to NaCN} \\qquad \\mathrm{2Na + S \\to Na_2S} \\qquad \\mathrm{Na + X \\to NaX} \\qquad \\mathrm{Na + C + N + S \\to NaSCN}",
          },
          {
            type: "table",
            headers: ["Element", "Test on SFE", "Positive result"],
            rows: [
              ["Nitrogen", "boil with FeSO₄, acidify with conc. H₂SO₄", "Prussian blue, Fe₄[Fe(CN)₆]₃"],
              ["Sulphur", "sodium nitroprusside", "violet colour"],
              ["Sulphur", "acetic acid + lead acetate", "black ppt of PbS"],
              ["N and S together", "FeCl₃", "blood-red Fe(SCN)²⁺"],
              ["Halogens", "boil with HNO₃, then AgNO₃", "AgCl white (soluble in NH₃); AgBr pale yellow (sparingly soluble); AgI yellow (insoluble)"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Why boil with HNO₃ first?",
            md: "If N or S is present, NaCN and Na₂S would also react with AgNO₃ (giving AgCN or black Ag₂S) and mask the halide test. Boiling with nitric acid decomposes them first.",
          },
          {
            type: "heading",
            text: "Functional group tests",
          },
          {
            type: "table",
            headers: ["Group", "Test", "Positive result"],
            rows: [
              ["C=C / C≡C (unsaturation)", "bromine water; Baeyer's reagent (cold dilute alkaline KMnO₄)", "red-brown colour / pink colour disappears"],
              ["Alcohol (–OH)", "ceric ammonium nitrate", "red colour"],
              ["Phenol", "neutral FeCl₃", "violet colour"],
              ["Aldehyde and ketone (C=O)", "2,4-DNP", "yellow-orange ppt"],
              ["Aldehyde only", "Tollens' reagent; Fehling's solution (aliphatic)", "silver mirror; red-brown Cu₂O ppt"],
              ["Carboxylic acid", "NaHCO₃ solution", "brisk effervescence of CO₂"],
              ["Primary amine", "CHCl₃ + alcoholic KOH, warm (carbylamine)", "foul-smelling isocyanide"],
            ],
          },
          {
            type: "heading",
            text: "Worked identification",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "An unknown liquid gives an orange ppt with 2,4-DNP → it has a C=O group.",
              "It gives **no** silver mirror with Tollens' reagent → it is not an aldehyde, so it is a ketone.",
              "It gives a yellow ppt of iodoform with I₂/NaOH → it is a methyl ketone. Acetone (CH₃COCH₃) fits.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A sodium fusion extract gives a blood-red colour with FeCl₃. The compound contains:",
                options: ["nitrogen only", "sulphur only", "both nitrogen and sulphur", "chlorine"],
                answer: 2,
                explain: "NaSCN forms only when both N and S are present; with Fe³⁺ it gives blood-red Fe(SCN)²⁺.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Hydrazine (NH₂NH₂) gives **no** Lassaigne nitrogen test: it has no carbon, so NaCN can't form. Diazonium salts also lose N₂ on heating and often fail the test. Benzaldehyde gives Tollens' test but **not** Fehling's test.",
          },
          {
            type: "keypoints",
            items: [
              "Lassaigne: fuse with Na to make NaCN, Na₂S, NaX, NaSCN.",
              "N → Prussian blue; S → violet with nitroprusside; N + S → blood red.",
              "Boil SFE with HNO₃ before testing halogens with AgNO₃.",
              "Phenol: violet with FeCl₃; acid: CO₂ with NaHCO₃; aldehyde: Tollens' mirror; 1° amine: carbylamine.",
            ],
          },
        ],
        flashcards: [
          { front: "Prussian blue", back: "Fe₄[Fe(CN)₆]₃, the positive test for nitrogen in Lassaigne's test." },
          { front: "Sodium nitroprusside test", back: "Violet colour indicates sulphur (as Na₂S)." },
          { front: "Test distinguishing phenol from alcohol", back: "Neutral FeCl₃ gives violet with phenol." },
          { front: "Carbylamine test", back: "Primary amine + CHCl₃ + alc. KOH gives foul-smelling isocyanide." },
          { front: "Colour of AgBr", back: "Pale yellow, sparingly soluble in NH₃." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which compound will NOT give a positive Lassaigne test for nitrogen?",
            options: ["Aniline", "Urea", "Hydrazine", "Acetamide"],
            answer: 2,
            explain: "Hydrazine has no carbon, so NaCN cannot form during fusion.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A carboxylic acid liberates CO₂ from sodium bicarbonate solution, but most phenols do not.",
            answer: true,
            explain: "Carboxylic acids are stronger than carbonic acid; most phenols are weaker.",
          },
          {
            kind: "fill",
            q: "The silver mirror test for aldehydes uses ___ reagent.",
            answer: ["Tollens'", "Tollens", "Tollen's", "Tollen"],
            explain: "Ammoniacal silver nitrate.",
          },
          {
            kind: "mcq",
            q: "A halide precipitate with AgNO₃ is yellow and does not dissolve in ammonia. The halogen is:",
            options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
            answer: 3,
            explain: "AgI is yellow and insoluble in NH₃.",
          },
          {
            kind: "mcq",
            q: "Baeyer's reagent is used to detect:",
            options: ["–OH group", "unsaturation", "–NH₂ group", "–COOH group"],
            answer: 1,
            explain: "Cold dilute alkaline KMnO₄ is decolourised by C=C and C≡C bonds.",
          },
        ],
      },
      {
        slug: "titrations-and-preparations",
        title: "Titrimetric Analysis and Lab Preparations",
        summary: "Making standard solutions, acid–base and KMnO₄ titrations, and the chemistry of preparing Mohr's salt, potash alum, acetanilide and more.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "In a **titration** we find the concentration of one solution by reacting it with a **standard solution** of known concentration until the reaction is just complete (the **end point**). A **primary standard** like oxalic acid or Mohr's salt is pure, stable and non-hygroscopic, so it can be weighed directly.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Preparing 250 mL of M/20 oxalic acid** (H₂C₂O₄·2H₂O, M = 126): mass $= 0.05 \\times 0.25 \\times 126 = 1.575$ g.",
              "**Preparing 250 mL of M/20 Mohr's salt** (FeSO₄·(NH₄)₂SO₄·6H₂O, M = 392): mass $= 0.05 \\times 0.25 \\times 392 = 4.9$ g, dissolved with a little dilute H₂SO₄ to stop hydrolysis of Fe²⁺.",
            ],
          },
          {
            type: "table",
            headers: ["Titration", "Indicator", "End point"],
            rows: [
              ["Strong acid vs strong base", "phenolphthalein or methyl orange", "colourless → pink / yellow → orange-red"],
              ["Weak acid (oxalic) vs NaOH", "phenolphthalein", "colourless → pink"],
              ["KMnO₄ vs oxalic acid or Mohr's salt", "none (KMnO₄ is a self-indicator)", "colourless → permanent light pink"],
            ],
          },
          {
            type: "formula",
            tex: "\\mathrm{2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\to 2Mn^{2+} + 10CO_2 + 8H_2O}",
            caption: "Oxalic acid is warmed to 60–70 °C because the reaction is slow at room temperature; Mn²⁺ formed then catalyses it (autocatalysis).",
          },
          {
            type: "heading",
            text: "Worked example",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "10 mL of 0.05 M oxalic acid needs 20 mL of KMnO₄ in acid. Find the molarity of KMnO₄.",
              "From the equation, mol KMnO₄ : mol oxalic acid = 2 : 5.",
              "Mol oxalic acid $= 0.05 \\times 10 = 0.5$ mmol, so mol KMnO₄ $= \\tfrac{2}{5} \\times 0.5 = 0.2$ mmol.",
              "Molarity $= 0.2 / 20 = 0.01$ M; strength $= 0.01 \\times 158 = 1.58$ g L⁻¹.",
            ],
          },
          {
            type: "heading",
            text: "Chemistry of lab preparations",
          },
          {
            type: "table",
            headers: ["Compound", "Key reaction / condition"],
            rows: [
              ["Mohr's salt", "equimolar FeSO₄ + (NH₄)₂SO₄ crystallised from water with dilute H₂SO₄ (prevents hydrolysis)"],
              ["Potash alum", "K₂SO₄ + Al₂(SO₄)₃ + 24H₂O crystallise as a double salt"],
              ["Acetanilide", "aniline + acetic anhydride (acetylation)"],
              ["p-Nitroacetanilide", "nitration of acetanilide with conc. HNO₃ + H₂SO₄, kept cold"],
              ["Aniline yellow (p-aminoazobenzene)", "diazotise aniline at 0–5 °C, couple with aniline"],
              ["Iodoform", "ethanol or acetone + I₂ + NaOH (or Na₂CO₃): yellow crystals"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What mass (g) of Mohr's salt (392 g mol⁻¹) is needed for 100 mL of 0.1 M solution?",
                answer: 3.92,
                tolerance: 0.01,
                unit: "g",
                explain: "$0.1 \\times 0.1 \\times 392 = 3.92$ g.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Warm **oxalic acid**, but never warm **Mohr's salt** in a KMnO₄ titration: Fe²⁺ is oxidised by air on heating. Use dilute H₂SO₄ only (HCl is oxidised to Cl₂; HNO₃ is itself an oxidant). And the burette reading is taken from the **upper** meniscus for coloured KMnO₄.",
          },
          {
            type: "keypoints",
            items: [
              "Mass of solute = M × V(L) × molar mass.",
              "KMnO₄ is a self-indicator; end point is a permanent pale pink.",
              "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O; warm to 60–70 °C.",
              "Add dilute H₂SO₄ when preparing Fe²⁺ solutions to prevent hydrolysis.",
              "Diazotisation needs 0–5 °C.",
            ],
          },
        ],
        flashcards: [
          { front: "Formula of Mohr's salt", back: "FeSO₄·(NH₄)₂SO₄·6H₂O, M = 392 g mol⁻¹" },
          { front: "Why is oxalic acid warmed before KMnO₄ titration?", back: "The reaction is slow at room temperature; warming to 60–70 °C speeds it up." },
          { front: "Self-indicator", back: "KMnO₄: its purple colour disappears until excess gives a permanent pink." },
          { front: "Reagent for acetanilide", back: "Aniline + acetic anhydride." },
          { front: "Formula of potash alum", back: "K₂SO₄·Al₂(SO₄)₃·24H₂O" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What mass (g) of oxalic acid dihydrate (126 g mol⁻¹) is required to make 500 mL of 0.1 M solution?",
            answer: 6.3,
            tolerance: 0.01,
            unit: "g",
            explain: "$0.1 \\times 0.5 \\times 126 = 6.3$ g.",
          },
          {
            kind: "mcq",
            q: "Why is dilute H₂SO₄ added while preparing Mohr's salt solution?",
            options: ["to act as indicator", "to prevent hydrolysis of Fe²⁺", "to oxidise Fe²⁺", "to increase solubility of ammonium sulphate"],
            answer: 1,
            explain: "Fe²⁺ hydrolyses in water to give a basic salt; acid suppresses this.",
          },
          {
            kind: "numeric",
            q: "20 mL of 0.02 M KMnO₄ exactly oxidises 25 mL of Mohr's salt solution in acid. Find the molarity of the Mohr's salt.",
            answer: 0.08,
            tolerance: 0.001,
            unit: "M",
            explain: "MnO₄⁻ : Fe²⁺ = 1 : 5. mmol KMnO₄ = 0.4, so Fe²⁺ = 2 mmol; $2/25 = 0.08$ M.",
            difficulty: 3,
          },
          {
            kind: "truefalse",
            q: "Phenolphthalein is needed as indicator in KMnO₄ titrations.",
            answer: false,
            explain: "KMnO₄ acts as its own indicator.",
          },
          {
            kind: "fill",
            q: "Diazotisation of aniline is carried out at ___ °C to keep the diazonium salt stable.",
            answer: ["0-5", "0–5", "0 to 5", "0 - 5"],
            explain: "Diazonium salts decompose at higher temperatures.",
          },
        ],
      },
      {
        slug: "salt-analysis-and-physical-experiments",
        title: "Salt Analysis and Physical Chemistry Experiments",
        summary: "Group separation of cations, tests for anions, and the principles of enthalpy, colloid and kinetics experiments.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "In **qualitative salt analysis** we identify the cation and anion of an unknown salt. Cations are separated into groups by adding reagents in a fixed order. Each group reagent precipitates only ions whose compounds have very low solubility under the chosen conditions. The trick is controlling ion concentration with the **common ion effect**.",
          },
          {
            type: "table",
            headers: ["Group", "Reagent", "Precipitated as", "JEE cations"],
            rows: [
              ["0", "NaOH, heat (no ppt)", "NH₃ gas", "NH₄⁺"],
              ["I", "dilute HCl", "chlorides", "Pb²⁺"],
              ["II", "H₂S in dilute HCl", "sulphides (very low Ksp)", "Cu²⁺ (Pb²⁺ also)"],
              ["III", "NH₄Cl + NH₄OH", "hydroxides", "Fe³⁺, Al³⁺"],
              ["IV", "H₂S in ammoniacal solution", "sulphides (higher Ksp)", "Zn²⁺, Ni²⁺ (also Mn²⁺, Co²⁺)"],
              ["V", "(NH₄)₂CO₃ + NH₄Cl + NH₄OH", "carbonates", "Ba²⁺, Ca²⁺ (also Sr²⁺)"],
              ["VI", "Na₂HPO₄ (confirmatory)", "Mg(NH₄)PO₄ white ppt", "Mg²⁺"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Common ion effect in action",
            md: "In group II, H⁺ from HCl suppresses ionisation of H₂S, so [S²⁻] is low and only the least soluble sulphides (CuS, PbS) precipitate. In group IV, ammonia removes H⁺, [S²⁻] rises and ZnS, NiS precipitate. In group III, NH₄⁺ suppresses NH₄OH ionisation so [OH⁻] is just enough for Fe(OH)₃ and Al(OH)₃ but not Zn(OH)₂ or Mg(OH)₂.",
          },
          {
            type: "table",
            headers: ["Anion", "Key test", "Observation"],
            rows: [
              ["CO₃²⁻", "dilute H₂SO₄", "effervescence; gas turns lime water milky"],
              ["S²⁻", "dilute H₂SO₄; lead acetate paper", "rotten-egg smell; paper turns black"],
              ["Cl⁻", "conc. H₂SO₄; then AgNO₃ on solution", "HCl fumes (white fumes with NH₃); white ppt soluble in NH₄OH"],
              ["Br⁻ / I⁻", "conc. H₂SO₄ (+ MnO₂)", "reddish-brown Br₂ vapour / violet I₂ vapour"],
              ["NO₃⁻", "brown ring test: FeSO₄ + conc. H₂SO₄ along the side", "brown ring of [Fe(H₂O)₅(NO)]²⁺"],
              ["SO₄²⁻", "BaCl₂ solution", "white ppt insoluble in conc. HCl"],
            ],
          },
          {
            type: "heading",
            text: "Worked analysis",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A white salt gives no gas with dilute H₂SO₄ (no CO₃²⁻ or S²⁻).",
              "Warmed with conc. H₂SO₄ it gives a colourless pungent gas that forms dense white fumes with a rod dipped in ammonia → **Cl⁻**.",
              "Its solution gives a white ppt with AgNO₃ that dissolves in NH₄OH → Cl⁻ confirmed.",
              "Heated with NaOH, it gives a gas that turns moist red litmus blue and gives brown ppt with Nessler's reagent → **NH₄⁺**. The salt is NH₄Cl.",
            ],
          },
          {
            type: "heading",
            text: "Physical chemistry experiments",
          },
          {
            type: "list",
            items: [
              "**Enthalpy of neutralisation:** mixing 100 mL 1 M HCl with 100 mL 1 M NaOH raises the temperature by about 6.8 °C. $q = 200 \\times 4.18 \\times 6.8 \\approx 5.7$ kJ for 0.1 mol water, i.e. about **−57 kJ mol⁻¹**.",
              "**Enthalpy of solution of CuSO₄:** anhydrous CuSO₄ dissolves exothermically (about −66 kJ mol⁻¹) while CuSO₄·5H₂O dissolves endothermically (about +12 kJ mol⁻¹). By Hess's law the difference, about −78 kJ mol⁻¹, is the enthalpy of hydration.",
              "**Sols:** a lyophilic sol (starch, gum) forms simply by warming with water. A lyophobic Fe(OH)₃ sol is made by adding FeCl₃ to **boiling** water (hydrolysis); As₂S₃ sol by passing H₂S through As₂O₃ solution.",
              "**Kinetics of I⁻ + H₂O₂:** H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O. A fixed small amount of thiosulphate and starch is added; the time t for the blue colour to appear gives rate ∝ 1/t. Doubling [I⁻] halves t, showing first order in I⁻.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is NH₄Cl added before NH₄OH in group III?",
                options: ["to increase [OH⁻]", "to suppress ionisation of NH₄OH so only group III hydroxides precipitate", "to oxidise Fe²⁺ to Fe³⁺", "to dissolve group II sulphides"],
                answer: 1,
                explain: "The common ion NH₄⁺ lowers [OH⁻] so that hydroxides with higher Ksp (Zn, Mg) stay in solution.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Before group III, the filtrate is boiled to remove H₂S and then boiled with a few drops of **conc. HNO₃** to oxidise Fe²⁺ to Fe³⁺; Fe(OH)₂ is too soluble to precipitate completely in group III. In the brown ring test, the FeSO₄ must be **freshly prepared**.",
          },
          {
            type: "keypoints",
            items: [
              "Group reagents in order: dil HCl → H₂S/HCl → NH₄Cl/NH₄OH → H₂S/NH₃ → (NH₄)₂CO₃ → Na₂HPO₄.",
              "Common ion effect controls [S²⁻] and [OH⁻].",
              "Brown ring = NO₃⁻; white fumes with NH₃ = Cl⁻; BaSO₄ insoluble in HCl = SO₄²⁻.",
              "Strong acid–strong base neutralisation ≈ −57 kJ mol⁻¹.",
              "Iodide clock: rate ∝ 1/t.",
            ],
          },
        ],
        flashcards: [
          { front: "Group II reagent", back: "H₂S gas in the presence of dilute HCl." },
          { front: "Brown ring complex", back: "[Fe(H₂O)₅(NO)]²⁺ (nitrate test)." },
          { front: "Why boil filtrate with conc. HNO₃ before group III?", back: "To oxidise Fe²⁺ to Fe³⁺, whose hydroxide precipitates completely." },
          { front: "Preparing Fe(OH)₃ sol", back: "Add FeCl₃ solution drop by drop to boiling water (hydrolysis)." },
          { front: "Confirmatory test for Mg²⁺", back: "White ppt of Mg(NH₄)PO₄ with Na₂HPO₄ in ammoniacal solution." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the group reagents in the order they are added in cation analysis.",
            items: ["Dilute HCl", "H₂S in dilute HCl", "NH₄Cl + NH₄OH", "H₂S in ammoniacal medium", "(NH₄)₂CO₃"],
            explain: "Groups I → V in sequence.",
          },
          {
            kind: "mcq",
            q: "A salt solution gives a white precipitate with BaCl₂ that does not dissolve in dilute HCl. The anion is:",
            options: ["CO₃²⁻", "SO₄²⁻", "NO₃⁻", "Cl⁻"],
            answer: 1,
            explain: "BaSO₄ is insoluble in acids; BaCO₃ would dissolve with effervescence.",
          },
          {
            kind: "numeric",
            q: "50 mL of 1 M HCl is mixed with 50 mL of 1 M NaOH. Taking ΔH_neut = −57.1 kJ mol⁻¹, how much heat (kJ) is released?",
            answer: 2.855,
            tolerance: 0.01,
            unit: "kJ",
            explain: "0.05 mol water forms: $0.05 \\times 57.1 = 2.855$ kJ.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Zn²⁺ is precipitated in group II as ZnS.",
            answer: false,
            explain: "ZnS has a relatively high Ksp, so it precipitates only in group IV where [S²⁻] is higher.",
          },
          {
            kind: "fill",
            q: "Starch forms a ___ sol with water, because it has a strong affinity for the dispersion medium.",
            answer: ["lyophilic", "hydrophilic"],
            explain: "Lyophilic = solvent-loving.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  Thermodynamics: "thermodynamics",
  "Chemical Thermodynamics": "thermodynamics",
  "Redox Reactions": "redox-reactions",
  Solutions: "solutions",
  "Principles Related to Practical Chemistry": "principles-related-to-practical-chemistry",
};
