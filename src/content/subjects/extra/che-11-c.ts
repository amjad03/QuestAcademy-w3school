import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Equilibrium (NCERT Class 11 Unit 6; same title in ISC and I PUC)     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-equilibrium",
    title: "Equilibrium",
    icon: "⚖️",
    description: "Dynamic equilibrium in physical and chemical processes, the law of mass action, Kc and Kp, heterogeneous equilibria, Q versus K, the link with Gibbs energy, Le Chatelier's principle, acids and bases, pH, ionisation constants, common-ion effect, hydrolysis of salts, buffers and solubility product.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-eq-dynamic",
        title: "Equilibrium in Physical and Chemical Processes",
        summary: "What dynamic equilibrium means, equilibria in phase changes and dissolution, the law of chemical equilibrium, Kc, Kp and their relation, heterogeneous equilibria and the rules for combining equilibrium constants.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥤",
            caption: "In a sealed bottle of soda, CO₂ keeps leaving the liquid and keeps dissolving back at the same rate. Open the cap and that balance is lost: the gas escapes and the drink goes flat.",
          },
          {
            type: "text",
            md: t`A system is at **equilibrium** when its measurable properties (pressure, colour, concentration) stop changing with time, even though the particles are still moving. Two opposite processes go on at the **same rate**, so there is no net change. This is why chemists call it **dynamic equilibrium**: it is a balance of motion, not a state of rest.

Equilibrium is reached only in a **closed system** at a **constant temperature**. It can be approached from either side: start with reactants or with products and you reach the same equilibrium state (for the same overall composition and temperature).`,
          },
          {
            type: "table",
            headers: ["Physical process", "Equilibrium", "What stays constant"],
            rows: [
              ["Solid ⇌ liquid", "ice ⇌ water at 273 K and 1 atm", "the melting point at a given pressure; the amounts of ice and water"],
              ["Liquid ⇌ vapour", "water ⇌ water vapour in a closed vessel", "the vapour pressure at a given temperature"],
              ["Solid ⇌ vapour", "iodine or camphor sublimation in a closed jar", "the vapour pressure of the solid"],
              ["Solid in solution", "sugar(s) ⇌ sugar(aq) in a saturated solution", "the solubility at a given temperature"],
              ["Gas in liquid", "CO₂(g) ⇌ CO₂(aq) in a sealed bottle", "concentration of dissolved gas, set by its pressure above the liquid (Henry's law)"],
            ],
          },
          {
            type: "text",
            md: t`In a reversible **chemical** reaction such as $\text{H}_2(\text{g}) + \text{I}_2(\text{g}) \rightleftharpoons 2\text{HI}(\text{g})$, the forward rate falls as reactants are used up and the backward rate rises as product builds up. When the two rates become equal, the concentrations stop changing. Experiments with isotopes (for example using D$_2$ in place of H$_2$ in ammonia synthesis) show that both reactions really do continue at equilibrium.

The **law of chemical equilibrium** (Guldberg and Waage, from the law of mass action) says: at a fixed temperature, the product of the equilibrium concentrations of the products, each raised to its stoichiometric coefficient, divided by the same product for the reactants, is a constant.`,
          },
          {
            type: "formula",
            tex: t`a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D} \qquad K_c = \frac{[\text{C}]^c\,[\text{D}]^d}{[\text{A}]^a\,[\text{B}]^b}`,
            caption: "Square brackets mean equilibrium molar concentration (mol L⁻¹). Kc depends only on temperature for a given balanced equation.",
          },
          {
            type: "text",
            md: t`For gases we can write the constant with **partial pressures** instead: $K_p = \dfrac{p_\text{C}^{\,c}\,p_\text{D}^{\,d}}{p_\text{A}^{\,a}\,p_\text{B}^{\,b}}$. Because $p = \frac{n}{V}RT = c\,RT$ (c in mol L$^{-1}$) for an ideal gas, the two constants are linked by the change in the number of moles of **gas**, $\Delta n_g$ = (moles of gaseous products) − (moles of gaseous reactants).`,
          },
          {
            type: "formula",
            tex: t`K_p = K_c\,(RT)^{\Delta n_g}`,
            caption: "With pressures in bar, use R = 0.0831 bar L mol⁻¹ K⁻¹; with atm, R = 0.0821 L atm mol⁻¹ K⁻¹. If Δn_g = 0, Kp = Kc.",
          },
          {
            type: "example",
            title: "Converting Kc to Kp",
            problem: t`For $\text{PCl}_5(\text{g}) \rightleftharpoons \text{PCl}_3(\text{g}) + \text{Cl}_2(\text{g})$, $K_c = 2.0 \times 10^{-2}$ at 500 K. Find $K_p$ (pressures in bar).`,
            steps: [
              t`Count gaseous moles: products 1 + 1 = 2, reactants 1, so $\Delta n_g = 2 - 1 = +1$.`,
              t`$RT = 0.0831 \times 500 = 41.55$ bar L mol$^{-1}$.`,
              t`$K_p = K_c (RT)^{1} = 2.0 \times 10^{-2} \times 41.55 = 0.831$.`,
            ],
            answer: t`$K_p \approx 0.83$ (bar). Kp is larger than Kc here because $\Delta n_g$ is positive and RT > 1.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`What is $\Delta n_g$ for $\text{N}_2(\text{g}) + 3\text{H}_2(\text{g}) \rightleftharpoons 2\text{NH}_3(\text{g})$?`,
                answer: -2,
                explain: "Gaseous products 2 mol, gaseous reactants 1 + 3 = 4 mol, so Δn_g = 2 − 4 = −2. Hence Kp = Kc(RT)⁻².",
              },
            ],
          },
          {
            type: "text",
            md: t`**Heterogeneous equilibria** involve more than one phase. The concentration (more exactly, the activity) of a **pure solid** or **pure liquid** is constant, so it is left out of the expression. For $\text{CaCO}_3(\text{s}) \rightleftharpoons \text{CaO}(\text{s}) + \text{CO}_2(\text{g})$, $K_p = p_{\text{CO}_2}$: at a given temperature the pressure of CO$_2$ over the solids is fixed, however much solid is present (as long as both solids are there). Similarly, for $\text{Ni}(\text{s}) + 4\text{CO}(\text{g}) \rightleftharpoons \text{Ni(CO)}_4(\text{g})$, $K_c = \dfrac{[\text{Ni(CO)}_4]}{[\text{CO}]^4}$.

**Units:** K written in concentrations has units of (mol L$^{-1}$)$^{\Delta n}$, but when each concentration or pressure is divided by its standard value (1 mol L$^{-1}$ or 1 bar), K becomes a pure number. NCERT treats thermodynamic K as dimensionless.`,
          },
          {
            type: "table",
            headers: ["Change to the equation", "New constant"],
            rows: [
              ["Reverse the reaction", t`$K' = 1/K$`],
              ["Multiply all coefficients by n", t`$K' = K^{n}$`],
              ["Divide all coefficients by 2", t`$K' = \sqrt{K}$`],
              ["Add two reactions (1) + (2)", t`$K' = K_1 \times K_2$`],
            ],
          },
          {
            type: "mistake",
            wrong: "At equilibrium the concentrations of reactants and products become equal, and the reaction stops.",
            right: "At equilibrium the forward and backward **rates** are equal. The concentrations become constant, but they are usually not equal to each other, and both reactions keep going.",
            why: "The word 'equilibrium' sounds like 'equal amounts'. But Kc can be 10⁻³⁰ or 10³⁰; equal concentrations would need Kc to have one special value. Constancy, not equality, is the sign of equilibrium.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each change to the new equilibrium constant.",
              pairs: [
                ["Reaction written in reverse", "1/K"],
                ["All coefficients doubled", "K²"],
                ["All coefficients halved", "√K"],
                ["Two reactions added", "K₁ × K₂"],
              ],
              explain: "K follows the powers in the expression: doubling coefficients squares every term, and reversing swaps numerator and denominator.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`Write K expressions with the **balanced equation** beside them; examiners mark the powers. Never put pure solids, pure liquids or solvent water (in dilute solution) in the expression. In Kp-Kc questions, show $\Delta n_g$ and the value of R you used: one mark is often for the unit choice.`,
          },
          {
            type: "keypoints",
            items: [
              "Equilibrium is dynamic: equal forward and backward rates, constant properties, closed system, fixed temperature.",
              t`$K_c$ = products over reactants, each raised to its coefficient; it depends only on temperature.`,
              t`$K_p = K_c(RT)^{\Delta n_g}$, counting only gaseous species.`,
              "Pure solids and liquids are left out of K expressions.",
              "Reversing gives 1/K, multiplying by n gives Kⁿ, adding reactions multiplies their K values.",
            ],
          },
        ],
        flashcards: [
          { front: "Dynamic equilibrium", back: "A state where forward and backward processes go on at equal rates, so measurable properties stay constant." },
          { front: "Law of chemical equilibrium", back: "At fixed temperature, [products]^coefficients ÷ [reactants]^coefficients at equilibrium is a constant, Kc." },
          { front: "Kp and Kc relation", back: "Kp = Kc(RT)^Δn_g, where Δn_g = gaseous product moles − gaseous reactant moles." },
          { front: "When is Kp = Kc?", back: "When Δn_g = 0, e.g. H₂ + I₂ ⇌ 2HI." },
          { front: "Kp for CaCO₃(s) ⇌ CaO(s) + CO₂(g)", back: "Kp = p(CO₂); the solids are left out." },
          { front: "K of the reverse reaction", back: "1/K of the forward reaction." },
          { front: "Henry's law (gas–liquid equilibrium)", back: "The mass of gas dissolved in a given mass of solvent is proportional to the pressure of the gas above it, at constant temperature." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which statement about a system at chemical equilibrium is correct?",
            options: [
              "The rates of the forward and backward reactions are equal.",
              "The concentrations of reactants and products are equal.",
              "Both reactions have stopped.",
              "It can be reached only by starting from reactants.",
            ],
            answer: 0,
            explain: "Equal rates give constant (not equal) concentrations; both reactions continue, and equilibrium can be approached from either side.",
          },
          {
            kind: "mcq",
            q: t`For $2\text{SO}_2(\text{g}) + \text{O}_2(\text{g}) \rightleftharpoons 2\text{SO}_3(\text{g})$, which expression is correct?`,
            options: [
              t`$K_p = K_c(RT)^{-1}$`,
              t`$K_p = K_c(RT)$`,
              t`$K_p = K_c$`,
              t`$K_p = K_c(RT)^{-3}$`,
            ],
            answer: 0,
            explain: "Δn_g = 2 − (2 + 1) = −1, so Kp = Kc(RT)⁻¹.",
          },
          {
            kind: "mcq",
            q: t`For $\text{C}(\text{s}) + \text{CO}_2(\text{g}) \rightleftharpoons 2\text{CO}(\text{g})$, $K_p$ equals`,
            options: [
              t`$p_{\text{CO}}^2 / p_{\text{CO}_2}$`,
              t`$p_{\text{CO}}^2 / (p_{\text{C}}\, p_{\text{CO}_2})$`,
              t`$2p_{\text{CO}} / p_{\text{CO}_2}$`,
              t`$p_{\text{CO}_2} / p_{\text{CO}}^2$`,
            ],
            answer: 0,
            explain: "Carbon is a pure solid and is omitted; CO carries the power 2.",
          },
          {
            kind: "numeric",
            q: t`For $\text{A} \rightleftharpoons 2\text{B}$, $K = 16$. What is K for $\text{B} \rightleftharpoons \tfrac{1}{2}\text{A}$?`,
            answer: 0.25,
            tolerance: 0.001,
            explain: "Reverse: 1/16. Then halve the coefficients: √(1/16) = 1/4 = 0.25.",
            difficulty: 2,
            hint: "Reverse first, then take the square root.",
          },
          {
            kind: "truefalse",
            q: "The vapour pressure of water in a closed flask at 300 K depends on how much liquid water is in the flask.",
            answer: false,
            explain: "Vapour pressure at equilibrium depends only on temperature (and the nature of the liquid), not on the amount of liquid present.",
          },
          {
            kind: "numeric",
            q: t`For $\text{N}_2\text{O}_4(\text{g}) \rightleftharpoons 2\text{NO}_2(\text{g})$, $K_c = 4.0 \times 10^{-3}$ at 300 K. Find $K_p$ in bar. Take R = 0.0831 bar L mol⁻¹ K⁻¹.`,
            answer: 0.0997,
            tolerance: 0.002,
            explain: "Δn_g = 2 − 1 = 1. Kp = 4.0 × 10⁻³ × 0.0831 × 300 = 4.0 × 10⁻³ × 24.93 ≈ 0.0997.",
            difficulty: 2,
            hint: "Find Δn_g first, then multiply by RT.",
          },
          {
            kind: "multi",
            q: "Which of these are left out of an equilibrium constant expression?",
            options: ["CaCO₃(s)", "H₂O(l) as solvent in a dilute solution", "CO₂(g)", "Br₂(l) as a pure liquid"],
            answers: [0, 1, 3],
            explain: "Pure solids, pure liquids and the solvent have constant activity. Gases always appear.",
          },
        ],
      },
      /* END-EQ */
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Equilibrium": "c11-che-equilibrium",
};
