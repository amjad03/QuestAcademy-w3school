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
      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-eq-le-chatelier",
        title: "Using K, Gibbs Energy and Le Chatelier's Principle",
        summary: "What the size of K tells us, the reaction quotient Q and the direction of change, calculating equilibrium concentrations, the relation between K, Q and ΔG, and how concentration, pressure, inert gas, temperature and catalysts affect an equilibrium.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏭",
            caption: "Fertiliser plants that make ammonia from nitrogen and hydrogen choose their pressure and temperature with one principle in mind: an equilibrium pushed by a change pushes back.",
          },
          {
            type: "text",
            md: t`**What K tells us.** The size of K shows how far a reaction goes before it reaches equilibrium (it says nothing about how fast).

If $K_c > 10^{3}$, products dominate and the reaction goes almost to completion. If $K_c < 10^{-3}$, reactants dominate and very little product forms. Between $10^{-3}$ and $10^{3}$, appreciable amounts of both are present.

**Which way will it go?** For a mixture that may not be at equilibrium, write the same ratio using the *current* concentrations. This is the **reaction quotient**, $Q_c$.`,
          },
          {
            type: "formula",
            tex: t`Q_c < K_c \Rightarrow \text{forward} \qquad Q_c > K_c \Rightarrow \text{backward} \qquad Q_c = K_c \Rightarrow \text{at equilibrium}`,
            caption: "If Q is too small, there is too little product, so the reaction moves forward to make more.",
          },
          {
            type: "example",
            title: "Predicting the direction",
            problem: t`For $\text{N}_2(\text{g}) + 3\text{H}_2(\text{g}) \rightleftharpoons 2\text{NH}_3(\text{g})$, $K_c = 0.50$ at a certain temperature. A vessel contains $[\text{N}_2] = 1.0$ M, $[\text{H}_2] = 1.0$ M and $[\text{NH}_3] = 0.50$ M. In which direction will the reaction proceed?`,
            steps: [
              t`$Q_c = \dfrac{[\text{NH}_3]^2}{[\text{N}_2][\text{H}_2]^3} = \dfrac{(0.50)^2}{(1.0)(1.0)^3} = 0.25$.`,
              t`Compare: $Q_c = 0.25 < K_c = 0.50$.`,
              "There is less product than at equilibrium, so more ammonia forms.",
            ],
            answer: "The reaction proceeds in the forward direction until Qc rises to 0.50.",
          },
          {
            type: "example",
            title: "Equilibrium concentrations from Kc (ICE table)",
            problem: t`1.0 mol H$_2$ and 1.0 mol I$_2$ are heated in a 1.0 L flask. For $\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}$, $K_c = 64$ at this temperature. Find the equilibrium concentrations.`,
            steps: [
              t`Initial: $[\text{H}_2] = [\text{I}_2] = 1.0$, $[\text{HI}] = 0$. Change: $-x$, $-x$, $+2x$. Equilibrium: $1.0 - x$, $1.0 - x$, $2x$.`,
              t`$K_c = \dfrac{(2x)^2}{(1.0 - x)^2} = 64$. Take the square root: $\dfrac{2x}{1.0 - x} = 8$.`,
              t`$2x = 8 - 8x \Rightarrow 10x = 8 \Rightarrow x = 0.80$.`,
              t`$[\text{H}_2] = [\text{I}_2] = 0.20$ M, $[\text{HI}] = 1.60$ M. Check: $1.6^2/0.2^2 = 2.56/0.04 = 64$.`,
            ],
            answer: "[H₂] = [I₂] = 0.20 mol L⁻¹, [HI] = 1.60 mol L⁻¹",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`A mixture has $Q_c = 2.5 \times 10^{4}$ while $K_c = 1.0 \times 10^{2}$. What happens?`,
                options: ["Net reaction goes backward", "Net reaction goes forward", "Nothing; it is at equilibrium", "K rises to match Q"],
                answer: 0,
                explain: "Q > K means too much product, so the reaction shifts backward. K is fixed at a given temperature.",
              },
            ],
          },
          {
            type: "text",
            md: t`**K, Q and Gibbs energy.** The Gibbs energy change of a reaction depends on the mixture: $\Delta G = \Delta G^\circ + RT\ln Q$. At equilibrium $\Delta G = 0$ and $Q = K$, which gives the result below. A negative $\Delta G^\circ$ means $K > 1$ (products favoured); a positive $\Delta G^\circ$ means $K < 1$. For example, $K = 10$ at 298 K gives $\Delta G^\circ = -2.303 \times 8.314 \times 298 \times \log 10 \approx -5.7$ kJ mol$^{-1}$.`,
          },
          {
            type: "formula",
            tex: t`\Delta G^\circ = -RT\ln K = -2.303\,RT\log K \qquad K = e^{-\Delta G^\circ/RT}`,
            caption: "Use R = 8.314 J mol⁻¹ K⁻¹ and keep ΔG° in joules.",
          },
          {
            type: "heading",
            text: "Le Chatelier's principle",
          },
          {
            type: "text",
            md: t`**Le Chatelier's principle:** if a system at equilibrium is disturbed by a change in concentration, pressure or temperature, the equilibrium shifts in the direction that tends to undo the change.`,
          },
          {
            type: "list",
            items: [
              t`**Concentration:** adding a reactant (or removing a product) shifts the equilibrium forward. In $\text{Fe}^{3+} + \text{SCN}^- \rightleftharpoons [\text{Fe(SCN)}]^{2+}$ (blood red), adding oxalic acid removes Fe$^{3+}$ (it forms a stable complex) and the red colour fades.`,
              t`**Pressure** (by changing volume): higher pressure favours the side with **fewer gas moles**. No effect when $\Delta n_g = 0$.`,
              t`**Inert gas:** at constant volume, no effect (partial pressures unchanged). At constant pressure the volume grows, which acts like lowering the pressure.`,
              t`**Temperature:** the only factor that changes K. For an exothermic forward reaction, K falls as T rises. In $2\text{NO}_2 \rightleftharpoons \text{N}_2\text{O}_4$ ($\Delta H = -57.2$ kJ mol$^{-1}$), the gas is darker brown when hot (more NO$_2$) and paler in ice.`,
              t`**Catalyst:** speeds up forward and backward reactions equally; equilibrium is reached sooner but its position and K do not change.`,
            ],
          },
          {
            type: "table",
            headers: ["Change", "Shift", "Does K change?"],
            rows: [
              ["Add reactant / remove product", "forward", "no"],
              ["Increase pressure (smaller volume)", "towards fewer gas moles", "no"],
              ["Add inert gas at constant volume", "none", "no"],
              ["Raise temperature", "in the endothermic direction", "yes"],
              ["Add a catalyst", "none (equilibrium reached faster)", "no"],
            ],
          },
          {
            type: "mistake",
            wrong: "Compressing a gas mixture increases K, which is why more ammonia forms at high pressure.",
            right: "Pressure changes Q, not K. Compression makes Q smaller than K for N₂ + 3H₂ ⇌ 2NH₃, so the system shifts forward until Q again equals the same K. Only temperature changes K.",
            why: "Because the yield goes up, it feels as if the 'constant' has gone up. But K is fixed by temperature; the position of equilibrium moves to restore Q = K.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "N₂ + 3H₂ ⇌ 2NH₃, ΔH < 0. Where does each change shift it?",
              groups: ["Forward", "Backward", "No shift"],
              items: [
                { text: "Add more N₂", group: 0, hint: "Adding a reactant is used up by the forward reaction." },
                { text: "Compress the mixture", group: 0, hint: "Products side has 2 gas moles, reactants 4." },
                { text: "Remove NH₃ as it forms", group: 0, hint: "Removing product pulls the reaction forward." },
                { text: "Raise the temperature", group: 1, hint: "The backward reaction is endothermic and absorbs the added heat." },
                { text: "Add argon at constant pressure", group: 1, hint: "The volume grows, so partial pressures fall: like lowering pressure." },
                { text: "Add an iron catalyst", group: 2, hint: "A catalyst speeds both directions equally." },
                { text: "Add argon at constant volume", group: 2, hint: "Partial pressures of N₂, H₂ and NH₃ do not change." },
              ],
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`For a Le Chatelier question, write three things: the change, the direction of shift, and the reason (fewer gas moles, endothermic direction, removal of a species). In ICE tables, show the 'change' row; marks go for $-x$, $+2x$ with the right coefficients. Quote $\Delta G^\circ = -RT\ln K$ with units of R.`,
          },
          {
            type: "keypoints",
            items: [
              "Large K: products favoured; small K: reactants favoured. K says nothing about rate.",
              "Q < K forward, Q > K backward, Q = K at equilibrium.",
              t`$\Delta G^\circ = -RT\ln K$: negative $\Delta G^\circ$ means K > 1.`,
              "Le Chatelier: the system opposes the change. Pressure favours fewer gas moles; heat favours the endothermic direction.",
              "Only temperature changes K; a catalyst changes neither K nor the equilibrium position.",
            ],
          },
        ],
        flashcards: [
          { front: "Reaction quotient Q", back: "The K-type ratio written with the concentrations at any moment, not necessarily at equilibrium." },
          { front: "Q < K", back: "Too little product: the reaction moves forward." },
          { front: "ΔG° and K", back: "ΔG° = −RT ln K = −2.303 RT log K." },
          { front: "Le Chatelier's principle", back: "A system at equilibrium shifts to partly undo any change in concentration, pressure or temperature." },
          { front: "Effect of pressure when Δn_g = 0", back: "None, e.g. H₂ + I₂ ⇌ 2HI." },
          { front: "Effect of a catalyst on equilibrium", back: "None on K or position; equilibrium is reached faster." },
          { front: "Exothermic reaction, temperature raised", back: "K decreases and the equilibrium shifts backward." },
          { front: "Inert gas added at constant pressure", back: "Volume increases; shifts towards more gas moles (like lowering pressure)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For an exothermic reaction, raising the temperature",
            options: ["decreases K", "increases K", "does not change K", "changes K only if a catalyst is present"],
            answer: 0,
            explain: "Heat acts like a 'product' of an exothermic reaction; raising T pushes the equilibrium back and lowers K.",
          },
          {
            kind: "mcq",
            q: t`Increasing the pressure on $\text{H}_2(\text{g}) + \text{I}_2(\text{g}) \rightleftharpoons 2\text{HI}(\text{g})$ at constant temperature`,
            options: ["has no effect on the equilibrium position", "shifts it forward", "shifts it backward", "increases K"],
            answer: 0,
            explain: "Both sides have 2 mol of gas (Δn_g = 0), so pressure does not shift this equilibrium.",
          },
          {
            kind: "numeric",
            q: t`For $\text{A} + \text{B} \rightleftharpoons \text{C} + \text{D}$, $K_c = 4.0$. Starting with 1.0 mol each of A and B in 1.0 L, find [C] at equilibrium (mol L⁻¹).`,
            answer: 0.667,
            tolerance: 0.01,
            explain: "x²/(1 − x)² = 4, so x/(1 − x) = 2, x = 2/3 ≈ 0.667 M.",
            difficulty: 2,
            hint: "The expression is a perfect square: take square roots of both sides.",
          },
          {
            kind: "truefalse",
            q: "Adding a catalyst increases the equilibrium yield of ammonia in the Haber process.",
            answer: false,
            explain: "A catalyst only helps reach equilibrium faster; the yield at equilibrium is set by K and the conditions.",
          },
          {
            kind: "numeric",
            q: "ΔG° for a reaction at 298 K is −11.4 kJ mol⁻¹. Find K (R = 8.314 J mol⁻¹ K⁻¹).",
            answer: 100,
            tolerance: 3,
            explain: "log K = 11400/(2.303 × 8.314 × 298) = 11400/5706 ≈ 2.00, so K ≈ 10² = 100.",
            difficulty: 2,
            hint: "Convert kJ to J, then log K = −ΔG°/(2.303RT).",
          },
          {
            kind: "multi",
            q: t`Which changes shift $\text{N}_2\text{O}_4(\text{g}) \rightleftharpoons 2\text{NO}_2(\text{g})$ ($\Delta H > 0$) forward?`,
            options: ["Raising the temperature", "Lowering the total pressure", "Adding NO₂", "Removing NO₂"],
            answers: [0, 1, 3],
            explain: "Forward is endothermic (favoured by heat) and makes more gas moles (favoured by low pressure). Removing product also pulls it forward; adding NO₂ pushes it back.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`A reaction has $K = 10^{12}$ at 298 K. Which is true?`,
            options: [
              "At equilibrium the mixture is almost entirely products.",
              "The reaction must be very fast.",
              "ΔG° is positive.",
              "Equal amounts of reactants and products are present.",
            ],
            answer: 0,
            explain: "A very large K means the reaction goes nearly to completion and ΔG° is negative; K gives no information about rate.",
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
