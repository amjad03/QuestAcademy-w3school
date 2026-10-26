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
              explain: "Each shift partly undoes the change. Only the temperature change also alters K; the others change Q and the system moves until Q = K again.",
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
      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-eq-acids-ph",
        title: "Ionic Equilibrium: Acids, Bases and pH",
        summary: "Strong and weak electrolytes, the Arrhenius, Brønsted–Lowry and Lewis ideas of acids and bases, the ionic product of water, the pH scale, ionisation constants Ka and Kb, polybasic acids, factors that decide acid strength and the common-ion effect.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🍋",
            caption: "Lemon juice tastes sour, an antacid tablet settles a burning stomach, and soil testing kits in Punjab farms report a number between 0 and 14. All three are stories about H⁺ ions in equilibrium.",
          },
          {
            type: "text",
            md: t`Substances whose aqueous solutions conduct electricity are **electrolytes**. **Strong electrolytes** (NaCl, HCl, NaOH) are almost completely ionised in water. **Weak electrolytes** (acetic acid, ammonia) ionise only partly, so an equilibrium exists between the un-ionised molecules and their ions. This is **ionic equilibrium**, for example $\text{CH}_3\text{COOH} + \text{H}_2\text{O} \rightleftharpoons \text{CH}_3\text{COO}^- + \text{H}_3\text{O}^+$.

A free proton does not exist in water; it attaches to a water molecule as the **hydronium ion**, H$_3$O$^+$. We often write H$^+$(aq) for short.`,
          },
          {
            type: "table",
            headers: ["Concept", "Acid", "Base", "Example"],
            rows: [
              ["Arrhenius", "gives H⁺ (H₃O⁺) in water", "gives OH⁻ in water", "HCl; NaOH"],
              ["Brønsted–Lowry", "proton donor", "proton acceptor", "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (water is the acid)"],
              ["Lewis", "electron-pair acceptor", "electron-pair donor", "BF₃ + :NH₃ → F₃B←NH₃"],
            ],
          },
          {
            type: "text",
            md: t`In the Brønsted–Lowry picture, an acid and the species it becomes after losing a proton form a **conjugate acid–base pair** (HCl/Cl$^-$, NH$_4^+$/NH$_3$, H$_2$O/OH$^-$). A **strong acid has a very weak conjugate base**, and a weak acid has a fairly strong conjugate base. Water is **amphoteric**: it acts as an acid towards NH$_3$ and as a base towards HCl. Lewis acids include electron-deficient molecules (BF$_3$, AlCl$_3$) and metal ions (Co$^{3+}$, Mg$^{2+}$); Lewis bases include H$_2$O, NH$_3$ and OH$^-$.

**Ionisation of water.** Pure water ionises slightly: $2\text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$. The **ionic product of water** is $K_w$. At 298 K both ions are $1.0 \times 10^{-7}$ M, so $K_w = 1.0 \times 10^{-14}$. Ionisation is endothermic, so $K_w$ increases with temperature.`,
          },
          {
            type: "formula",
            tex: t`K_w = [\text{H}_3\text{O}^+][\text{OH}^-] = 1.0\times10^{-14}\ (298\ \text{K}) \qquad \text{pH} = -\log[\text{H}_3\text{O}^+] \qquad \text{pH} + \text{pOH} = 14`,
            caption: "Acidic: pH < 7, neutral: pH = 7, basic: pH > 7 (all at 298 K). A change of one pH unit is a tenfold change in [H₃O⁺].",
          },
          {
            type: "example",
            title: "pH of strong acids and bases",
            problem: t`Find the pH of (a) $1.0 \times 10^{-3}$ M NaOH, (b) $5.0 \times 10^{-3}$ M H$_2$SO$_4$ (treat both protons as fully ionised).`,
            steps: [
              t`(a) NaOH is fully ionised: $[\text{OH}^-] = 1.0 \times 10^{-3}$ M, so pOH = 3.00.`,
              t`pH = 14 − 3.00 = **11.00**.`,
              t`(b) Each H$_2$SO$_4$ gives 2 H$^+$: $[\text{H}^+] = 2 \times 5.0 \times 10^{-3} = 1.0 \times 10^{-2}$ M.`,
              t`pH = $-\log(1.0 \times 10^{-2})$ = **2.00**.`,
            ],
            answer: "(a) pH 11.00, (b) pH 2.00",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`What is $[\text{OH}^-]$ (in units of $10^{-11}$ M) in a solution of pH 3.0 at 298 K?`,
                answer: 1,
                tolerance: 0.01,
                explain: "pOH = 14 − 3 = 11, so [OH⁻] = 1 × 10⁻¹¹ M.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Weak acids.** For $\text{HA} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{A}^-$, the **ionisation constant** is $K_a = \dfrac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]}$ and $\text{p}K_a = -\log K_a$. A smaller $K_a$ (larger p$K_a$) means a weaker acid. If the initial concentration is $c$ and the **degree of ionisation** is $\alpha$, then $[\text{H}^+] = c\alpha$ and $K_a = \dfrac{c\alpha^2}{1 - \alpha}$. When $\alpha$ is small, $1 - \alpha \approx 1$. **Weak bases** are handled the same way with $K_b$.

For a conjugate pair, $K_a \times K_b = K_w$, so $\text{p}K_a + \text{p}K_b = 14$ at 298 K. **Polybasic acids** such as H$_2$CO$_3$, H$_2$S or H$_3$PO$_4$ ionise in steps, and $K_{a1} > K_{a2} > K_{a3}$: removing H$^+$ from an anion is harder than from a neutral molecule.`,
          },
          {
            type: "formula",
            tex: t`K_a \approx c\alpha^2 \;\Rightarrow\; \alpha \approx \sqrt{\frac{K_a}{c}}, \quad [\text{H}^+] \approx \sqrt{K_a\,c} \qquad K_a K_b = K_w`,
            caption: "The approximation is good when α is below about 5%. Dilution increases α (Ostwald's dilution law) but lowers [H⁺].",
          },
          {
            type: "example",
            title: "Ka from a measured pH",
            problem: "A 0.10 M solution of a weak monobasic acid HA has pH 3.00 at 298 K. Find the degree of ionisation and Ka.",
            steps: [
              t`$[\text{H}^+] = 10^{-3.00} = 1.0 \times 10^{-3}$ M $= [\text{A}^-]$.`,
              t`$\alpha = \dfrac{1.0 \times 10^{-3}}{0.10} = 0.010$ (1.0%).`,
              t`$[\text{HA}] = 0.10 - 0.001 = 0.099$ M.`,
              t`$K_a = \dfrac{(1.0 \times 10^{-3})^2}{0.099} = 1.0 \times 10^{-5}$ (using $c\alpha^2$ gives the same to 2 significant figures).`,
            ],
            answer: t`$\alpha = 0.010$, $K_a \approx 1.0 \times 10^{-5}$ (p$K_a$ = 5.0)`,
          },
          {
            type: "text",
            md: t`**What makes an acid strong?** Down a group, bond strength matters most: H–A bonds get longer and weaker, so acid strength rises: HF < HCl < HBr < HI. Across a period, electronegativity of A matters most: the more electronegative A, the more easily H$^+$ leaves, so CH$_4$ < NH$_3$ < H$_2$O < HF in acid strength.

**Common-ion effect.** Adding a strong electrolyte that shares an ion with a weak electrolyte pushes the weak electrolyte's equilibrium back and lowers its ionisation. For example, adding sodium acetate to acetic acid adds CH$_3$COO$^-$; the equilibrium shifts left, $\alpha$ falls and the pH rises. In 0.10 M acetic acid with 0.10 M sodium acetate, $[\text{H}^+] \approx K_a \times \frac{0.10}{0.10} = 1.8 \times 10^{-5}$ M (pH 4.74), far less than about $1.3 \times 10^{-3}$ M in the acid alone.`,
          },
          {
            type: "mistake",
            wrong: "A strong acid is the same as a concentrated acid, so dilute HCl is a weak acid.",
            right: "Strong or weak describes how completely the acid ionises; concentrated or dilute describes how much is dissolved. Dilute HCl is still a strong acid (fully ionised), and concentrated acetic acid is still a weak acid.",
            why: "In daily speech 'strong' means 'concentrated' (strong tea). In chemistry strength is about Ka, which does not depend on concentration.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each acid to its conjugate base.",
              pairs: [
                ["H₃O⁺", "H₂O"],
                ["H₂O", "OH⁻"],
                ["NH₄⁺", "NH₃"],
                ["HCO₃⁻", "CO₃²⁻"],
                ["HSO₄⁻", "SO₄²⁻"],
              ],
              explain: "A conjugate base is the acid minus one H⁺: the formula loses one H and the charge drops by one. Water and HCO₃⁻ can act as acids or bases.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`Always write the ionisation equation before writing $K_a$ or $K_b$. State the approximation ($1 - \alpha \approx 1$) when you use it. Report pH to two decimal places. Common slip: forgetting that Ba(OH)$_2$ and H$_2$SO$_4$ give two ions of OH$^-$ or H$^+$ per formula unit.`,
          },
          {
            type: "keypoints",
            items: [
              "Strong electrolytes ionise fully; weak electrolytes set up an ionic equilibrium.",
              "Arrhenius (H⁺/OH⁻ in water), Brønsted–Lowry (proton donor/acceptor), Lewis (electron-pair acceptor/donor).",
              t`$K_w = 1.0 \times 10^{-14}$ at 298 K; pH = −log[H₃O⁺]; pH + pOH = 14.`,
              t`Weak acid: $\alpha \approx \sqrt{K_a/c}$, $[\text{H}^+] \approx \sqrt{K_a c}$; $K_aK_b = K_w$.`,
              "Common-ion effect: a shared ion suppresses ionisation of a weak electrolyte.",
            ],
          },
        ],
        flashcards: [
          { front: "Brønsted–Lowry acid", back: "A proton (H⁺) donor." },
          { front: "Lewis base", back: "An electron-pair donor, e.g. NH₃, H₂O, OH⁻." },
          { front: "Kw at 298 K", back: "1.0 × 10⁻¹⁴ = [H₃O⁺][OH⁻]." },
          { front: "pH definition", back: "pH = −log[H₃O⁺] (Sørensen)." },
          { front: "Relation between Ka and Kb of a conjugate pair", back: "Ka × Kb = Kw; pKa + pKb = 14 at 298 K." },
          { front: "Ostwald's dilution law (weak acid)", back: "Ka = cα²/(1 − α) ≈ cα², so α ≈ √(Ka/c): α rises on dilution." },
          { front: "Acid strength of hydrogen halides", back: "HF < HCl < HBr < HI (weaker H–X bond down the group)." },
          { front: "Common-ion effect", back: "Suppression of ionisation of a weak electrolyte by adding a strong electrolyte with a common ion." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The conjugate base of HPO₄²⁻ is",
            options: ["PO₄³⁻", "H₂PO₄⁻", "H₃PO₄", "HPO₄³⁻"],
            answer: 0,
            explain: "Remove one H⁺: HPO₄²⁻ → PO₄³⁻. H₂PO₄⁻ is its conjugate acid.",
          },
          {
            kind: "mcq",
            q: "Which species is a Lewis acid but not a Brønsted–Lowry acid?",
            options: ["BF₃", "HCl", "NH₄⁺", "H₂O"],
            answer: 0,
            explain: "BF₃ has no proton to donate but accepts an electron pair (boron has an incomplete octet).",
          },
          {
            kind: "numeric",
            q: t`Find the pH of 0.10 M NH$_3$ at 298 K ($K_b = 1.8 \times 10^{-5}$).`,
            answer: 11.13,
            tolerance: 0.03,
            explain: "[OH⁻] = √(1.8 × 10⁻⁵ × 0.10) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M; pOH = 2.87; pH = 14 − 2.87 = 11.13.",
            difficulty: 2,
            hint: "Find [OH⁻] = √(Kb c) first, then pOH.",
          },
          {
            kind: "numeric",
            q: t`Find the pH of $1.0 \times 10^{-3}$ M Ba(OH)$_2$ at 298 K (fully ionised).`,
            answer: 11.3,
            tolerance: 0.02,
            explain: "[OH⁻] = 2 × 10⁻³ M; pOH = 3 − log 2 = 2.70; pH = 11.30.",
            difficulty: 2,
            hint: "Each Ba(OH)₂ gives two OH⁻.",
          },
          {
            kind: "mcq",
            q: "Which order of acid strength is correct?",
            options: ["CH₄ < NH₃ < H₂O < HF", "HF < H₂O < NH₃ < CH₄", "HI < HBr < HCl < HF", "H₂O < HF < NH₃ < CH₄"],
            answer: 0,
            explain: "Across period 2, the electronegativity of the atom bonded to H rises from C to F, so acid strength rises.",
          },
          {
            kind: "truefalse",
            q: "At 323 K the pH of pure water is less than 7, yet the water is still neutral.",
            answer: true,
            explain: "Kw is larger at higher temperature, so [H₃O⁺] is above 10⁻⁷ M and pH < 7. But [H₃O⁺] still equals [OH⁻], so the water is neutral.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A weak acid has $K_a = 1.0 \times 10^{-5}$. What is p$K_b$ of its conjugate base at 298 K?`,
            answer: 9,
            tolerance: 0.01,
            explain: "pKa = 5, so pKb = 14 − 5 = 9 (Kb = 1.0 × 10⁻⁹).",
          },
          {
            kind: "multi",
            q: "Solid sodium acetate is dissolved in 0.1 M acetic acid. Which statements are true?",
            options: ["The degree of ionisation of acetic acid falls.", "The pH rises.", "Ka of acetic acid stays the same.", "[H⁺] increases."],
            answers: [0, 1, 2],
            explain: "The common ion CH₃COO⁻ shifts the equilibrium left, lowering α and [H⁺] (so pH rises). Ka depends only on temperature.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-che-eq-buffers-ksp",
        title: "Hydrolysis of Salts, Buffers and Solubility Product",
        summary: "Why some salt solutions are acidic or basic, the pH of salt solutions, how buffer solutions resist pH change and the Henderson–Hasselbalch equation, solubility product Ksp, its link with solubility, precipitation and the common-ion effect on solubility.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "illustration",
            emoji: "🩸",
            caption: "Your blood stays close to pH 7.4 whether you eat curd rice or a plate of pickles. Buffers inside the body soak up the extra acid or base before the pH can swing.",
          },
          {
            type: "text",
            md: t`**Hydrolysis of salts.** When a salt dissolves, its ions may react with water. The cation of a **weak base** (NH$_4^+$) gives H$_3$O$^+$: $\text{NH}_4^+ + \text{H}_2\text{O} \rightleftharpoons \text{NH}_3 + \text{H}_3\text{O}^+$. The anion of a **weak acid** (CH$_3$COO$^-$) gives OH$^-$: $\text{CH}_3\text{COO}^- + \text{H}_2\text{O} \rightleftharpoons \text{CH}_3\text{COOH} + \text{OH}^-$. Ions from strong acids and strong bases (Na$^+$, K$^+$, Cl$^-$, NO$_3^-$) do not hydrolyse.`,
          },
          {
            type: "table",
            headers: ["Salt from", "Example", "Solution", "pH at 298 K (c = salt concentration)"],
            rows: [
              ["Strong acid + strong base", "NaCl, KNO₃", "neutral", "7"],
              ["Weak acid + strong base", "CH₃COONa, Na₂CO₃", "basic", t`$7 + \tfrac{1}{2}(\text{p}K_a + \log c)$`],
              ["Strong acid + weak base", "NH₄Cl", "acidic", t`$7 - \tfrac{1}{2}(\text{p}K_b + \log c)$`],
              ["Weak acid + weak base", "CH₃COONH₄", "depends on pKa and pKb", t`$7 + \tfrac{1}{2}(\text{p}K_a - \text{p}K_b)$`],
            ],
          },
          {
            type: "example",
            title: "pH of an ammonium chloride solution",
            problem: t`Find the pH of 0.10 M NH$_4$Cl at 298 K. For NH$_3$, take p$K_b$ = 4.74.`,
            steps: [
              "NH₄Cl is a salt of a strong acid (HCl) and a weak base (NH₃), so the solution is acidic.",
              t`pH $= 7 - \tfrac{1}{2}(\text{p}K_b + \log c) = 7 - \tfrac{1}{2}(4.74 + \log 0.10)$.`,
              t`$\log 0.10 = -1$, so pH $= 7 - \tfrac{1}{2}(3.74) = 7 - 1.87$.`,
            ],
            answer: "pH ≈ 5.13",
          },
          {
            type: "text",
            md: t`**Buffer solutions** resist a change in pH when a small amount of acid or base is added or when they are diluted. An **acidic buffer** is a weak acid with its salt of a strong base (CH$_3$COOH + CH$_3$COONa). A **basic buffer** is a weak base with its salt of a strong acid (NH$_3$ + NH$_4$Cl).

How it works: in the acetate buffer, added H$^+$ is taken up by the large supply of CH$_3$COO$^-$ (forming CH$_3$COOH), and added OH$^-$ is neutralised by CH$_3$COOH (forming CH$_3$COO$^-$ and water). The ratio [salt]/[acid] changes only a little, so the pH changes only a little. A buffer works best when [salt] ≈ [acid], i.e. pH ≈ p$K_a$.`,
          },
          {
            type: "formula",
            tex: t`\text{pH} = \text{p}K_a + \log\frac{[\text{salt}]}{[\text{acid}]} \qquad \text{pOH} = \text{p}K_b + \log\frac{[\text{salt}]}{[\text{base}]}`,
            caption: "Henderson–Hasselbalch equations. Diluting a buffer leaves the ratio, and so the pH, nearly unchanged.",
          },
          {
            type: "example",
            title: "pH of a basic buffer",
            problem: t`A buffer contains 0.20 M NH$_3$ and 0.10 M NH$_4$Cl. Find its pH at 298 K (p$K_b$ = 4.74, $\log 2 = 0.30$).`,
            steps: [
              t`pOH $= \text{p}K_b + \log\dfrac{[\text{NH}_4^+]}{[\text{NH}_3]} = 4.74 + \log\dfrac{0.10}{0.20}$.`,
              t`$\log 0.5 = -0.30$, so pOH $= 4.44$.`,
              "pH = 14 − 4.44 = 9.56.",
            ],
            answer: "pH ≈ 9.56",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pair makes a buffer solution?",
                options: ["NH₄OH and NH₄Cl", "HCl and NaCl", "NaOH and NaCl", "HNO₃ and NH₄NO₃"],
                answer: 0,
                explain: "A buffer needs a weak acid or weak base together with its salt. HCl, HNO₃ and NaOH are strong.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Solubility product.** For a sparingly soluble salt in a saturated solution, the undissolved solid is in equilibrium with its ions, e.g. $\text{BaSO}_4(\text{s}) \rightleftharpoons \text{Ba}^{2+}(\text{aq}) + \text{SO}_4^{2-}(\text{aq})$. Leaving out the solid gives the **solubility product constant**, $K_{sp} = [\text{Ba}^{2+}][\text{SO}_4^{2-}]$ (about $1.1 \times 10^{-10}$ at 298 K). If the molar solubility is $s$, each ion's concentration follows from the formula of the salt.

The **ionic product** $Q_{sp}$ uses the actual ion concentrations. If $Q_{sp} > K_{sp}$, the solution is supersaturated and a **precipitate forms**; if $Q_{sp} < K_{sp}$, more solid can dissolve. **Common-ion effect on solubility:** adding Cl$^-$ (as NaCl) to a saturated AgCl solution makes $Q_{sp} > K_{sp}$, so AgCl precipitates and its solubility falls. This idea is used in qualitative analysis, e.g. passing H$_2$S in the presence of HCl keeps [S$^{2-}$] low so that only the least soluble sulphides (group II) precipitate.`,
          },
          {
            type: "formula",
            tex: t`\text{A}_x\text{B}_y(\text{s}) \rightleftharpoons x\text{A}^{y+} + y\text{B}^{x-} \qquad K_{sp} = (xs)^x (ys)^y = x^x y^y s^{x+y}`,
            caption: "AB type: Ksp = s². AB₂ or A₂B type: Ksp = 4s³. AB₃ or A₃B type: Ksp = 27s⁴.",
          },
          {
            type: "example",
            title: "From solubility to Ksp, and the common-ion effect",
            problem: t`(a) The molar solubility of CaF$_2$ is $2.0 \times 10^{-4}$ mol L$^{-1}$. Find $K_{sp}$. (b) $K_{sp}$(AgCl) $= 1.8 \times 10^{-10}$. Find the solubility of AgCl in pure water and in 0.010 M NaCl.`,
            steps: [
              t`(a) $\text{CaF}_2 \rightleftharpoons \text{Ca}^{2+} + 2\text{F}^-$: $[\text{Ca}^{2+}] = s$, $[\text{F}^-] = 2s$.`,
              t`$K_{sp} = s(2s)^2 = 4s^3 = 4 \times (2.0 \times 10^{-4})^3 = 4 \times 8.0 \times 10^{-12} = 3.2 \times 10^{-11}$.`,
              t`(b) In water: $s^2 = 1.8 \times 10^{-10}$, so $s = 1.34 \times 10^{-5}$ M.`,
              t`In 0.010 M NaCl: $s(s + 0.010) = 1.8 \times 10^{-10}$. Since $s \ll 0.010$, $s = \dfrac{1.8 \times 10^{-10}}{0.010} = 1.8 \times 10^{-8}$ M.`,
            ],
            answer: t`(a) $K_{sp} = 3.2 \times 10^{-11}$; (b) $1.3 \times 10^{-5}$ M in water but only $1.8 \times 10^{-8}$ M in 0.010 M NaCl (about 750 times less).`,
          },
          {
            type: "mistake",
            wrong: "The salt with the smaller Ksp is always the less soluble one, so Ag₂CrO₄ (Ksp ≈ 1.1 × 10⁻¹²) is less soluble than AgCl (Ksp ≈ 1.8 × 10⁻¹⁰).",
            right: "Compare Ksp directly only for salts of the same formula type. For Ag₂CrO₄, s = (Ksp/4)^(1/3) ≈ 6.5 × 10⁻⁵ M, which is larger than s(AgCl) = √Ksp ≈ 1.3 × 10⁻⁵ M.",
            why: "Ksp = s² for AgCl but 4s³ for Ag₂CrO₄. Different powers of s mean the Ksp numbers are not on the same scale; convert each to s first.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the aqueous solution of each salt acidic, basic or neutral?",
              groups: ["Acidic", "Basic", "Neutral"],
              items: [
                { text: "NH₄Cl", group: 0, hint: "NH₄⁺ comes from the weak base NH₃ and releases H₃O⁺." },
                { text: "(NH₄)₂SO₄", group: 0, hint: "Strong acid H₂SO₄ + weak base NH₃." },
                { text: "Na₂CO₃", group: 1, hint: "CO₃²⁻ comes from a weak acid and takes H⁺ from water." },
                { text: "CH₃COONa", group: 1, hint: "Acetate is the conjugate base of a weak acid." },
                { text: "KCN", group: 1, hint: "HCN is a very weak acid, so CN⁻ hydrolyses." },
                { text: "NaCl", group: 2, hint: "Both ions come from a strong acid and a strong base." },
                { text: "KNO₃", group: 2, hint: "K⁺ and NO₃⁻ do not hydrolyse." },
              ],
              explain: "Ask which parent acid and base the salt came from: the stronger parent wins. Ions from strong acids and strong bases do not hydrolyse.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`Write the hydrolysis equation for the ion that reacts; one mark is often for it. In Ksp problems, write the dissociation with coefficients, then $[\text{ion}]$ in terms of $s$ before substituting. Do not forget the coefficient inside the bracket: for CaF$_2$ it is $(2s)^2$, not $2s^2$. For the practical exam (all boards), the common-ion effect explains why NH$_4$Cl is added with NH$_4$OH in group III analysis.`,
          },
          {
            type: "keypoints",
            items: [
              "Salts of a weak acid + strong base are basic; of a strong acid + weak base are acidic; of strong + strong are neutral.",
              t`Buffers: pH = p$K_a$ + log([salt]/[acid]); best near pH = p$K_a$; pH barely changes on dilution.`,
              t`$K_{sp} = x^x y^y s^{x+y}$; compare solubilities through $s$, not raw Ksp, unless the salts have the same formula type.`,
              t`Precipitation occurs when $Q_{sp} > K_{sp}$.`,
              "A common ion lowers the solubility of a sparingly soluble salt.",
            ],
          },
        ],
        flashcards: [
          { front: "Salt hydrolysis", back: "Reaction of a salt's cation or anion with water, changing the pH." },
          { front: "pH of a salt of a weak acid and strong base", back: "pH = 7 + ½(pKa + log c)." },
          { front: "Buffer solution", back: "A solution that resists change in pH on adding a little acid or base, or on dilution." },
          { front: "Henderson–Hasselbalch (acidic buffer)", back: "pH = pKa + log([salt]/[acid])." },
          { front: "Ksp of an AB₂ salt in terms of solubility s", back: "Ksp = 4s³." },
          { front: "Condition for precipitation", back: "Ionic product Qsp > Ksp." },
          { front: "Effect of a common ion on solubility", back: "It lowers the solubility of the sparingly soluble salt." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The aqueous solution of which salt is basic?",
            options: ["Na₂CO₃", "NH₄NO₃", "NaCl", "K₂SO₄"],
            answer: 0,
            explain: "CO₃²⁻ (from weak H₂CO₃) hydrolyses to give OH⁻. NH₄NO₃ is acidic; NaCl and K₂SO₄ are neutral.",
          },
          {
            kind: "numeric",
            q: "Find the pH of 0.10 M CH₃COONa at 298 K (pKa of acetic acid = 4.74).",
            answer: 8.87,
            tolerance: 0.02,
            explain: "pH = 7 + ½(pKa + log c) = 7 + ½(4.74 − 1) = 7 + 1.87 = 8.87.",
            difficulty: 2,
            hint: "Salt of a weak acid and strong base: the solution is basic.",
          },
          {
            kind: "numeric",
            q: "A buffer is 0.10 M in CH₃COOH and 0.20 M in CH₃COONa. Find its pH (pKa = 4.74, log 2 = 0.30).",
            answer: 5.04,
            tolerance: 0.02,
            explain: "pH = 4.74 + log(0.20/0.10) = 4.74 + 0.30 = 5.04.",
          },
          {
            kind: "numeric",
            q: t`The molar solubility of Ag$_2$CrO$_4$ is $1.0 \times 10^{-4}$ mol L$^{-1}$. Find $K_{sp}$ in units of $10^{-12}$.`,
            answer: 4,
            tolerance: 0.01,
            explain: "[Ag⁺] = 2s, [CrO₄²⁻] = s, so Ksp = (2s)²s = 4s³ = 4 × 10⁻¹² .",
            difficulty: 2,
            hint: "Ag₂CrO₄ gives two Ag⁺ per formula unit.",
          },
          {
            kind: "mcq",
            q: t`$K_{sp}$(AgCl) $= 1.8 \times 10^{-10}$. Its molar solubility in 0.10 M NaCl is`,
            options: [t`$1.8 \times 10^{-9}$ M`, t`$1.3 \times 10^{-5}$ M`, t`$1.8 \times 10^{-11}$ M`, t`$1.8 \times 10^{-10}$ M`],
            answer: 0,
            explain: "s = Ksp/[Cl⁻] = 1.8 × 10⁻¹⁰/0.10 = 1.8 × 10⁻⁹ M. 1.3 × 10⁻⁵ M is the value in pure water.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Diluting an acetate buffer with an equal volume of water changes its pH only very slightly.",
            answer: true,
            explain: "Both [salt] and [acid] halve, so their ratio, and therefore the pH, stays nearly the same.",
          },
          {
            kind: "mcq",
            q: t`Equal volumes of $2.0 \times 10^{-4}$ M AgNO$_3$ and $2.0 \times 10^{-4}$ M NaCl are mixed. $K_{sp}$(AgCl) $= 1.8 \times 10^{-10}$. What happens?`,
            options: [
              "AgCl precipitates, because Qsp = 1.0 × 10⁻⁸ > Ksp",
              "No precipitate, because Qsp = 1.0 × 10⁻⁸ < Ksp",
              "AgCl precipitates, because Qsp = 4.0 × 10⁻⁸ > Ksp",
              "No precipitate, because the solutions are too dilute",
            ],
            answer: 0,
            explain: "Mixing halves each concentration to 1.0 × 10⁻⁴ M, so Qsp = 1.0 × 10⁻⁸, which exceeds 1.8 × 10⁻¹⁰. Forgetting the dilution gives 4.0 × 10⁻⁸ (same conclusion, wrong number).",
            difficulty: 2,
            hint: "Mixing equal volumes halves each concentration.",
          },
          {
            kind: "multi",
            q: "Which mixtures act as buffers?",
            options: ["CH₃COOH + CH₃COONa", "NH₄OH + NH₄Cl", "HCl + NaCl", "NaH₂PO₄ + Na₂HPO₄"],
            answers: [0, 1, 3],
            explain: "Each buffer is a weak acid/base with its conjugate. H₂PO₄⁻ (weak acid) and HPO₄²⁻ (its conjugate base) also form a buffer. HCl is a strong acid.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c11-che-eq-exam-chemical",
        title: "Exam edge: Chemical Equilibrium Problems",
        summary: "What JEE Main, JEE Advanced, NEET, KCET and COMEDK ask from chemical equilibrium: combining K values, degree of dissociation and Kp, vapour-density method, ΔG°–K–temperature links, van 't Hoff equation and the inert-gas traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Equilibrium (chemical plus ionic) is one of the highest-weight Class 11 physical chemistry chapters for JEE Main, NEET, KCET and COMEDK, usually giving 1–3 questions per paper. Chemical equilibrium questions are mostly: manipulating K for combined or reversed equations; $K_p$–$K_c$ conversions; degree of dissociation ($\alpha$) from $K_p$ and total pressure; Le Chatelier with inert gases and solids; and $\Delta G^\circ = -RT\ln K$. JEE Advanced adds multi-step numericals with vapour density, changing pressure, and the temperature dependence of K (van 't Hoff).`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe to use"],
            rows: [
              [t`$\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2$: $K_p = \dfrac{\alpha^2 P}{1 - \alpha^2}$`, "Start from pure PCl₅ (or any A ⇌ B + C with no initial products); P = total equilibrium pressure."],
              [t`$\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2$: $K_p = \dfrac{4\alpha^2 P}{1 - \alpha^2}$`, "Start from pure N₂O₄ (any A ⇌ 2B)."],
              [t`If $\Delta n_g = 0$, $\alpha$ does not depend on P or V`, "e.g. 2HI ⇌ H₂ + I₂; pressure terms cancel."],
              [t`$K_{\text{overall}} = K_1 K_2$; reverse $\to 1/K$; $\times n \to K^n$`, "Always, for the same temperature."],
              [t`$\alpha \approx \sqrt{K_p/P}$ for PCl₅ type`, "Only when α is small (below about 0.1)."],
            ],
          },
          {
            type: "formula",
            tex: t`\alpha = \frac{D - d}{(n - 1)\,d}`,
            caption: "Vapour-density method: D = vapour density of the undissociated gas (M/2), d = observed vapour density of the equilibrium mixture, n = moles of gas formed from 1 mol of reactant.",
          },
          {
            type: "formula",
            tex: t`\log\frac{K_2}{K_1} = \frac{\Delta H^\circ}{2.303\,R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) \qquad \Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -RT\ln K`,
            caption: "van 't Hoff equation: K rises with T for endothermic reactions (ΔH° > 0) and falls for exothermic ones.",
          },
          {
            type: "example",
            title: "KCET / COMEDK level: combining equations",
            problem: t`At a given temperature, $\text{N}_2 + \text{O}_2 \rightleftharpoons 2\text{NO}$ has constant $K_1$, and $2\text{NO} + \text{O}_2 \rightleftharpoons 2\text{NO}_2$ has $K_2$. Find K for (a) $\text{N}_2 + 2\text{O}_2 \rightleftharpoons 2\text{NO}_2$ and (b) $\text{NO}_2 \rightleftharpoons \tfrac{1}{2}\text{N}_2 + \text{O}_2$.`,
            steps: [
              "(a) Adding the two equations cancels 2NO and gives N₂ + 2O₂ ⇌ 2NO₂, so K = K₁K₂.",
              "(b) This is (a) reversed (K → 1/(K₁K₂)) and then halved (take the square root).",
            ],
            answer: t`(a) $K_1K_2$; (b) $\dfrac{1}{\sqrt{K_1K_2}}$`,
          },
          {
            type: "example",
            title: "JEE Main level: degree of dissociation from Kp",
            problem: t`For $\text{PCl}_5(\text{g}) \rightleftharpoons \text{PCl}_3(\text{g}) + \text{Cl}_2(\text{g})$, $K_p = 0.50$ bar at a certain temperature. Pure PCl$_5$ is heated and the total pressure at equilibrium is 1.5 bar. Find $\alpha$.`,
            steps: [
              t`Moles: PCl$_5$ $1 - \alpha$, PCl$_3$ $\alpha$, Cl$_2$ $\alpha$; total $1 + \alpha$.`,
              t`Partial pressures: $p = x P$, so $K_p = \dfrac{\left(\frac{\alpha}{1+\alpha}P\right)^2}{\frac{1-\alpha}{1+\alpha}P} = \dfrac{\alpha^2 P}{1 - \alpha^2}$.`,
              t`$0.50 = \dfrac{1.5\,\alpha^2}{1 - \alpha^2} \Rightarrow 0.50 - 0.50\alpha^2 = 1.5\alpha^2 \Rightarrow \alpha^2 = 0.25$.`,
            ],
            answer: t`$\alpha = 0.50$ (50% dissociated)`,
          },
          {
            type: "example",
            title: "NEET level: the temperature at which K = 1",
            problem: t`A reaction has $\Delta H^\circ = +40$ kJ mol$^{-1}$ and $\Delta S^\circ = +100$ J K$^{-1}$ mol$^{-1}$ (both taken as independent of temperature). Above what temperature is $K > 1$?`,
            steps: [
              t`$K = 1$ when $\Delta G^\circ = 0$, because $\Delta G^\circ = -RT\ln K$ and $\ln 1 = 0$.`,
              t`$0 = \Delta H^\circ - T\Delta S^\circ \Rightarrow T = \dfrac{40\,000}{100} = 400$ K.`,
              t`Above 400 K, $T\Delta S^\circ > \Delta H^\circ$, so $\Delta G^\circ < 0$ and $K > 1$.`,
            ],
            answer: "K > 1 above 400 K",
          },
          {
            type: "example",
            title: "JEE Advanced level: vapour density, then a pressure change",
            problem: t`N$_2$O$_4$ (M = 92) partly dissociates into NO$_2$. At 1.0 bar and a fixed temperature, the equilibrium mixture has vapour density 38.33. Find (a) $\alpha$, (b) $K_p$, (c) the total pressure at which $\alpha$ would become 0.50 at the same temperature.`,
            steps: [
              t`(a) $D = 92/2 = 46$, $n = 2$: $\alpha = \dfrac{46 - 38.33}{(2-1)\times 38.33} = \dfrac{7.67}{38.33} = 0.20$.`,
              t`(b) $K_p = \dfrac{4\alpha^2 P}{1 - \alpha^2} = \dfrac{4(0.04)(1.0)}{0.96} = 0.167$ bar.`,
              t`(c) Same T, so same $K_p$: $0.167 = \dfrac{4(0.25)P}{0.75} = 1.333P$.`,
              t`$P = 0.167/1.333 = 0.125$ bar. Lower pressure favours the side with more gas moles, so $\alpha$ rises, as Le Chatelier predicts.`,
            ],
            answer: "(a) α = 0.20, (b) Kp ≈ 0.167 bar, (c) P = 0.125 bar",
          },
          {
            type: "example",
            title: "JEE Advanced level: ΔH° from two K values",
            problem: t`The equilibrium constant of a reaction doubles when the temperature rises from 300 K to 310 K. Estimate $\Delta H^\circ$. Take R = 8.314 J mol$^{-1}$ K$^{-1}$ and $\log 2 = 0.301$.`,
            steps: [
              t`$\dfrac{1}{T_1} - \dfrac{1}{T_2} = \dfrac{1}{300} - \dfrac{1}{310} = \dfrac{10}{93\,000} = 1.075 \times 10^{-4}$ K$^{-1}$.`,
              t`$\log 2 = \dfrac{\Delta H^\circ}{2.303 \times 8.314} \times 1.075 \times 10^{-4}$.`,
              t`$\Delta H^\circ = \dfrac{0.301 \times 19.15}{1.075 \times 10^{-4}} \approx 5.36 \times 10^{4}$ J mol$^{-1}$.`,
            ],
            answer: t`$\Delta H^\circ \approx +53.6$ kJ mol$^{-1}$ (endothermic, since K rises with T)`,
          },
          {
            type: "mistake",
            wrong: "Adding an inert gas never affects an equilibrium, so helium added to N₂O₄ ⇌ 2NO₂ changes nothing.",
            right: "At constant volume, an inert gas has no effect. At constant total pressure, the volume increases, partial pressures drop, and the equilibrium shifts towards more gas moles (here, more NO₂).",
            why: "Only partial pressures of the reacting gases appear in Kp. Whether they change depends on whether V or P is held fixed. Exams almost always state which one.",
          },
          {
            type: "mistake",
            wrong: "Adding more CaCO₃(s) to the CaCO₃ ⇌ CaO + CO₂ equilibrium pushes it forward and raises the CO₂ pressure.",
            right: "Kp = p(CO₂) only. Adding or removing some solid (while some of each solid remains) changes nothing; p(CO₂) stays at its equilibrium value for that temperature.",
            why: "Le Chatelier is about quantities that appear in Q. A pure solid has constant activity, so its amount does not enter Q.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps for finding α from Kp and total P.",
              items: [
                "Write moles at start: 1 mol reactant, no products",
                "Write moles at equilibrium in terms of α",
                "Add them to get total moles",
                "Partial pressure of each gas = mole fraction × P",
                "Substitute into Kp and solve for α",
              ],
              explain: "The total moles change as the gas dissociates, so mole fractions, not simple moles, must go into Kp.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For $2\text{HI}(\text{g}) \rightleftharpoons \text{H}_2(\text{g}) + \text{I}_2(\text{g})$, doubling the total pressure at constant temperature makes $\alpha$`,
                options: ["unchanged", "double", "half", "fall by a factor of √2"],
                answer: 0,
                explain: "Δn_g = 0, so P cancels in the Kp expression and α is independent of pressure.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Equilibrium is high-weight for JEE, NEET, KCET and COMEDK; most questions are K manipulation, α–Kp and Le Chatelier traps.",
              t`PCl$_5$ type: $K_p = \alpha^2P/(1-\alpha^2)$; N$_2$O$_4$ type: $K_p = 4\alpha^2P/(1-\alpha^2)$.`,
              t`Vapour density: $\alpha = (D - d)/[(n-1)d]$.`,
              t`$K = 1$ when $\Delta G^\circ = 0$, i.e. $T = \Delta H^\circ/\Delta S^\circ$; van 't Hoff links K at two temperatures.`,
              "Inert gas: no effect at constant V; shift to more gas moles at constant P. Solids never shift the equilibrium.",
            ],
          },
        ],
        flashcards: [
          { front: "Kp for PCl₅ ⇌ PCl₃ + Cl₂ in terms of α and P", back: "Kp = α²P/(1 − α²)" },
          { front: "Kp for N₂O₄ ⇌ 2NO₂ in terms of α and P", back: "Kp = 4α²P/(1 − α²)" },
          { front: "Vapour density method for α", back: "α = (D − d)/[(n − 1)d]" },
          { front: "van 't Hoff equation", back: "log(K₂/K₁) = [ΔH°/(2.303R)](1/T₁ − 1/T₂)" },
          { front: "Temperature at which K = 1", back: "T = ΔH°/ΔS° (where ΔG° = 0)" },
          { front: "Inert gas at constant pressure", back: "Shifts equilibrium towards the side with more gas moles." },
          { front: "Effect of pressure on α when Δn_g = 0", back: "None." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`For $2\text{NOCl}(\text{g}) \rightleftharpoons 2\text{NO}(\text{g}) + \text{Cl}_2(\text{g})$,`,
            options: [t`$K_p = K_c\,RT$`, t`$K_p = K_c/RT$`, t`$K_p = K_c(RT)^2$`, t`$K_p = K_c$`],
            answer: 0,
            explain: "Δn_g = (2 + 1) − 2 = +1.",
          },
          {
            kind: "numeric",
            q: "For PCl₅ ⇌ PCl₃ + Cl₂, Kp = 1.0 bar. Starting from pure PCl₅, the total equilibrium pressure is 8.0 bar. Find α (to 3 decimal places).",
            answer: 0.333,
            tolerance: 0.005,
            explain: "α²(8.0)/(1 − α²) = 1.0 → 8α² = 1 − α² → α² = 1/9 → α = 0.333.",
            difficulty: 2,
            hint: "Kp = α²P/(1 − α²).",
          },
          {
            kind: "numeric",
            q: "PCl₅ (M = 208.5) is heated in a closed vessel. The equilibrium mixture has vapour density 69.5. Find the degree of dissociation.",
            answer: 0.5,
            tolerance: 0.01,
            explain: "D = 208.5/2 = 104.25, n = 2. α = (104.25 − 69.5)/(1 × 69.5) = 34.75/69.5 = 0.50.",
            difficulty: 2,
            hint: "D is half the molar mass of undissociated PCl₅.",
          },
          {
            kind: "mcq",
            q: "Helium is added to an equilibrium mixture of N₂O₄ and NO₂ at constant total pressure and temperature. The equilibrium",
            options: ["shifts towards NO₂", "shifts towards N₂O₄", "does not shift", "shifts, and Kp increases"],
            answer: 0,
            explain: "At constant P, the volume increases; partial pressures fall, so the system shifts to the side with more gas moles (2NO₂). Kp is unchanged.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A reaction has ΔH° = +100 kJ mol⁻¹ and ΔS° = +200 J K⁻¹ mol⁻¹. At what temperature (K) is K = 1?",
            answer: 500,
            tolerance: 1,
            explain: "T = ΔH°/ΔS° = 100 000/200 = 500 K.",
          },
          {
            kind: "multi",
            q: "For CaCO₃(s) ⇌ CaO(s) + CO₂(g) at a fixed temperature, which statements are correct?",
            options: [
              "Kp = p(CO₂)",
              "Adding more CaCO₃(s) does not change p(CO₂)",
              "Removing some CO₂ makes more CaCO₃ decompose",
              "Enlarging the vessel lowers p(CO₂) permanently, as long as both solids remain",
            ],
            answers: [0, 1, 2],
            explain: "p(CO₂) is fixed by Kp at that temperature. If the vessel is enlarged, more CaCO₃ decomposes until p(CO₂) returns to the same value.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "For A(g) ⇌ 2B(g), Kp = 1.0 bar. Pure A is allowed to reach equilibrium at a constant total pressure of 1.0 bar. Find α (to 3 decimal places).",
            answer: 0.447,
            tolerance: 0.005,
            explain: "Kp = 4α²P/(1 − α²) → 4α² = 1 − α² → α² = 0.2 → α = 0.447.",
            difficulty: 3,
            hint: "Same form as N₂O₄ ⇌ 2NO₂.",
          },
          {
            kind: "mcq",
            q: t`$K_c$ for $\text{A} \rightleftharpoons \text{B}$ is $K$ and for $\text{B} \rightleftharpoons 2\text{C}$ is $K'$. K for $\tfrac{1}{2}\text{A} \rightleftharpoons \text{C}$ is`,
            options: [t`$\sqrt{KK'}$`, t`$KK'/2$`, t`$\sqrt{K/K'}$`, t`$(KK')^2$`],
            answer: 0,
            explain: "Adding gives A ⇌ 2C with constant KK'. Halving all coefficients gives √(KK').",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c11-che-eq-exam-ionic",
        title: "Exam edge: pH, Buffers and Ksp Problems",
        summary: "The ionic-equilibrium questions that JEE Main, JEE Advanced, NEET, KCET and COMEDK set most often: weak acid pH, acid–base mixtures, very dilute acids, buffers after neutralisation, salt hydrolysis, amphiprotic ions and precipitation from Ksp.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Ionic equilibrium is a favourite of every entrance exam because one question can test logs, stoichiometry and equilibrium together. Expect: pH of weak acids and bases; pH after mixing acid and base; buffer pH (often after a partial neutralisation); hydrolysis of salts; solubility from $K_{sp}$, the common-ion effect and the pH at which a hydroxide starts to precipitate. NEET and KCET keep to one-step calculations and statements; JEE Main mixes two steps; JEE Advanced adds very dilute solutions, amphiprotic ions and simultaneous equilibria.

**Golden rule for mixtures:** first let the strong acid or base react completely (stoichiometry in millimoles), *then* decide what is left: excess strong acid/base, a buffer, or a pure salt.`,
          },
          {
            type: "table",
            headers: ["Situation", "Shortcut", "Safe when"],
            rows: [
              ["Weak acid, concentration c", t`$[\text{H}^+] = \sqrt{K_a c}$`, "α below about 5% (c/Ka > ~400)"],
              ["Weak acid half-neutralised by strong base", "pH = pKa", "Strong base exactly half the acid (in moles)"],
              ["Salt of weak acid + strong base", t`$\text{pH} = 7 + \tfrac{1}{2}(\text{p}K_a + \log c)$`, "c is the salt concentration after mixing"],
              ["Salt of weak acid + weak base", t`$\text{pH} = 7 + \tfrac{1}{2}(\text{p}K_a - \text{p}K_b)$`, "independent of c (approximately)"],
              ["Amphiprotic ion (HCO₃⁻, HS⁻, H₂PO₄⁻)", t`$\text{pH} = \tfrac{1}{2}(\text{p}K_{a1} + \text{p}K_{a2})$`, "c not too small; use the two Ka values that bracket the ion"],
              ["Strong acid below 10⁻⁶ M", "include water's H⁺ (formula below)", "always for c ≤ 10⁻⁶ M"],
            ],
          },
          {
            type: "formula",
            tex: t`[\text{H}^+] = \frac{c}{2} + \sqrt{\frac{c^2}{4} + K_w}`,
            caption: "Exact [H⁺] for a very dilute strong monoprotic acid of concentration c (from charge balance [H⁺] = c + [OH⁻] and Kw).",
          },
          {
            type: "example",
            title: "KCET / NEET level: weak acid",
            problem: t`Find the pH and percentage ionisation of 0.10 M CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$).`,
            steps: [
              t`$[\text{H}^+] = \sqrt{1.8 \times 10^{-5} \times 0.10} = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3}$ M.`,
              t`pH $= 3 - \log 1.34 = 3 - 0.13 = 2.87$.`,
              t`$\alpha = 1.34 \times 10^{-3}/0.10 = 0.0134$, i.e. 1.34% (small, so the approximation is fine).`,
            ],
            answer: "pH ≈ 2.87; about 1.3% ionised",
          },
          {
            type: "example",
            title: "JEE Main level: strong acid + strong base",
            problem: "50 mL of 0.20 M HCl is mixed with 50 mL of 0.10 M NaOH. Find the pH.",
            steps: [
              "HCl: 50 × 0.20 = 10 mmol H⁺. NaOH: 50 × 0.10 = 5 mmol OH⁻.",
              "They neutralise 5 mmol each; 5 mmol H⁺ is left over in 100 mL.",
              t`$[\text{H}^+] = 5/100 = 0.050$ M; pH $= -\log 0.050 = 2 - \log 5 = 1.30$.`,
            ],
            answer: "pH ≈ 1.30",
          },
          {
            type: "example",
            title: "NEET / JEE Main level: very dilute acid",
            problem: t`Find the pH of $1.0 \times 10^{-8}$ M HCl at 298 K.`,
            steps: [
              t`Water's own H$^+$ ($\sim 10^{-7}$ M) is ten times the acid's, so it cannot be ignored.`,
              t`$[\text{H}^+] = 0.5 \times 10^{-8} + \sqrt{0.25 \times 10^{-16} + 1.0 \times 10^{-14}} = 0.05 \times 10^{-7} + 1.00 \times 10^{-7} = 1.05 \times 10^{-7}$ M.`,
              t`pH $= 7 - \log 1.05 = 7 - 0.02 = 6.98$.`,
            ],
            answer: "pH ≈ 6.98 (slightly acidic, as an acid solution must be)",
          },
          {
            type: "example",
            title: "JEE Main level: a buffer meets an acid",
            problem: t`1.0 L of buffer contains 0.10 mol CH$_3$COOH and 0.10 mol CH$_3$COONa (p$K_a$ = 4.74). 0.010 mol HCl is added (ignore the volume change). Find the new pH and compare with adding the same HCl to 1.0 L of pure water.`,
            steps: [
              t`H$^+$ reacts with acetate: CH$_3$COO$^-$ $0.10 \to 0.09$ mol; CH$_3$COOH $0.10 \to 0.11$ mol.`,
              t`pH $= 4.74 + \log\dfrac{0.09}{0.11} = 4.74 + \log 0.818 = 4.74 - 0.087 = 4.65$.`,
              "In pure water, [H⁺] = 0.010 M, so the pH would drop from 7 to 2.",
            ],
            answer: "Buffer: 4.74 → 4.65 (change of 0.09); pure water: 7 → 2.",
          },
          {
            type: "example",
            title: "JEE Advanced level: when does a hydroxide start to precipitate?",
            problem: t`A solution is 0.010 M in Mg$^{2+}$. $K_{sp}$[Mg(OH)$_2$] $= 1.0 \times 10^{-11}$. Above what pH does Mg(OH)$_2$ begin to precipitate at 298 K? What would the answer be if [Mg$^{2+}$] were 0.10 M?`,
            steps: [
              t`Precipitation starts when $[\text{Mg}^{2+}][\text{OH}^-]^2 = K_{sp}$.`,
              t`$[\text{OH}^-] = \sqrt{\dfrac{1.0 \times 10^{-11}}{0.010}} = \sqrt{1.0 \times 10^{-9}} = 3.16 \times 10^{-5}$ M, so pOH = 4.50.`,
              "pH = 14 − 4.50 = 9.50.",
              t`For 0.10 M: $[\text{OH}^-] = \sqrt{10^{-10}} = 10^{-5}$ M, pOH 5.0, pH 9.0. Higher metal-ion concentration means precipitation at a lower pH.`,
            ],
            answer: "Above pH 9.5 (for 0.010 M Mg²⁺); above pH 9.0 for 0.10 M.",
          },
          {
            type: "mistake",
            wrong: t`The pH of $10^{-8}$ M HCl is 8.`,
            right: "An acid solution can never be basic. Water supplies about 10⁻⁷ M H⁺, which dominates here; the true pH is about 6.98.",
            why: "pH = −log c works only when the acid's H⁺ is much larger than water's 10⁻⁷ M. Below about 10⁻⁶ M, the water equilibrium must be included.",
          },
          {
            type: "mistake",
            wrong: "For 0.20 mol CH₃COOH mixed with 0.10 mol NaOH, use [acid] = 0.20 and [salt] = 0.10 in the Henderson equation.",
            right: "First neutralise: NaOH converts 0.10 mol acid into 0.10 mol acetate, leaving 0.10 mol acid. The ratio is 0.10/0.10, so pH = pKa.",
            why: "Henderson's equation needs the amounts present after reaction. The strong base does not sit beside the weak acid; it reacts with it completely.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A weak acid is exactly half-neutralised by NaOH. The pH is…",
              emoji: "🧪",
              options: ["7, because it is a neutralisation", "equal to pKa of the acid", "pKa/2", "14 − pKa"],
              answer: 1,
              trap: 0,
              explain: "Half the acid has become its salt, so [salt] = [acid] and log 1 = 0: pH = pKa. pH 7 would need complete neutralisation of a strong acid by a strong base.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the pH of a 0.10 M ammonium acetate solution (pKa of CH₃COOH = 4.76, pKb of NH₃ = 4.75).",
                answer: 7.005,
                tolerance: 0.01,
                explain: "pH = 7 + ½(pKa − pKb) = 7 + ½(0.01) = 7.005 ≈ 7.0. The concentration does not enter.",
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcuts fail",
            md: t`If $c/K_a$ is below about 400, solve the quadratic $x^2 + K_a x - K_a c = 0$ instead of using $\sqrt{K_a c}$. If two weak acids are present, the one with the much larger $K_a$ usually sets the pH. In $K_{sp}$ work, check that $s$ really is negligible compared with the common-ion concentration before dropping it.`,
          },
          {
            type: "keypoints",
            items: [
              "Mixtures: react the strong species first, then classify what remains (excess strong, buffer, or salt).",
              t`Weak acid: $[\text{H}^+] = \sqrt{K_a c}$; half-neutralised: pH = p$K_a$.`,
              t`Very dilute strong acid: include water; pH stays just below 7.`,
              t`Amphiprotic ion: pH = ½(p$K_{a1}$ + p$K_{a2}$); salt of weak acid + weak base: pH = 7 + ½(p$K_a$ − p$K_b$).`,
              t`Precipitation starts when $Q_{sp}$ reaches $K_{sp}$; use it to find the pH or ion concentration needed.`,
            ],
          },
        ],
        flashcards: [
          { front: "pH of a half-neutralised weak acid", back: "pH = pKa." },
          { front: "pH of 10⁻⁸ M HCl", back: "About 6.98 (water's H⁺ must be included)." },
          { front: "pH of an amphiprotic ion such as HCO₃⁻", back: "pH ≈ ½(pKa1 + pKa2)." },
          { front: "pH of a salt of weak acid and weak base", back: "pH = 7 + ½(pKa − pKb), nearly independent of concentration." },
          { front: "Validity of [H⁺] = √(Ka c)", back: "When α < ~5%, i.e. c/Ka greater than about 400." },
          { front: "First step for any acid–base mixture", back: "Do the neutralisation stoichiometry in millimoles." },
          { front: "Solubility of AgCl in aqueous NH₃", back: "Increases, because Ag⁺ forms the complex [Ag(NH₃)₂]⁺." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the pH of 0.010 M of a weak acid with $K_a = 1.0 \times 10^{-6}$.`,
            answer: 4,
            tolerance: 0.02,
            explain: "[H⁺] = √(10⁻⁶ × 10⁻²) = 10⁻⁴ M, so pH = 4.0. (α = 1%, so the shortcut is valid.)",
          },
          {
            kind: "numeric",
            q: "60 mL of 0.10 M HCl is mixed with 40 mL of 0.10 M NaOH. Find the pH.",
            answer: 1.7,
            tolerance: 0.02,
            explain: "6 mmol H⁺ − 4 mmol OH⁻ = 2 mmol H⁺ in 100 mL: [H⁺] = 0.020 M, pH = 2 − log 2 = 1.70.",
            difficulty: 2,
            hint: "Work in millimoles and use the total volume.",
          },
          {
            kind: "mcq",
            q: t`The pH of $1.0 \times 10^{-7}$ M HCl at 298 K is closest to`,
            options: ["6.79", "7.00", "6.70", "7.30"],
            answer: 0,
            explain: "[H⁺] = 0.5 × 10⁻⁷ + √(0.25 × 10⁻¹⁴ + 10⁻¹⁴) = 1.62 × 10⁻⁷ M, pH ≈ 6.79. Simply adding 10⁻⁷ + 10⁻⁷ gives 6.70, which ignores the suppression of water's ionisation.",
            difficulty: 3,
            hint: "Use the exact formula for very dilute strong acids.",
          },
          {
            kind: "numeric",
            q: "25 mL of 0.20 M CH₃COOH is mixed with 25 mL of 0.10 M NaOH. Find the pH (pKa = 4.74).",
            answer: 4.74,
            tolerance: 0.02,
            explain: "5 mmol acid + 2.5 mmol OH⁻ → 2.5 mmol acid and 2.5 mmol acetate: a half-neutralised acid, so pH = pKa = 4.74.",
            difficulty: 2,
            hint: "Neutralise first; then look at the ratio.",
          },
          {
            kind: "numeric",
            q: t`A metal hydroxide M(OH)$_2$ has $K_{sp} = 4.0 \times 10^{-12}$. Find the pH of its saturated solution at 298 K (log 2 = 0.30).`,
            answer: 10.3,
            tolerance: 0.03,
            explain: "4s³ = 4.0 × 10⁻¹², so s = 1.0 × 10⁻⁴ M. [OH⁻] = 2s = 2.0 × 10⁻⁴ M, pOH = 3.70, pH = 10.30.",
            difficulty: 2,
            hint: "[OH⁻] is twice the molar solubility.",
          },
          {
            kind: "multi",
            q: t`$K_{sp}$(AgCl) $= 1.8 \times 10^{-10}$. Which statements are correct at 298 K?`,
            options: [
              "Its solubility is lower in 0.1 M NaCl than in water.",
              "Its solubility is higher in aqueous ammonia than in water.",
              "Adding NaCl lowers the value of Ksp.",
              "Its solubility in 0.1 M AgNO₃ equals that in 0.1 M NaCl.",
            ],
            answers: [0, 1, 3],
            explain: "A common ion (Cl⁻ or Ag⁺ at 0.1 M) gives s = Ksp/0.1 in both cases. NH₃ removes Ag⁺ as [Ag(NH₃)₂]⁺ and raises solubility. Ksp changes only with temperature.",
            difficulty: 3,
          },
          {
            kind: "numeric",
            q: "Estimate the pH of 0.10 M NaHCO₃ (pKa1 = 6.37, pKa2 = 10.32 for H₂CO₃).",
            answer: 8.35,
            tolerance: 0.02,
            explain: "HCO₃⁻ is amphiprotic: pH ≈ ½(6.37 + 10.32) = 8.35 (mildly basic, which is why baking soda is used as an antacid).",
            difficulty: 3,
            hint: "HCO₃⁻ can both gain and lose a proton.",
          },
          {
            kind: "mcq",
            q: "Which mixture has the greatest buffer capacity against both added acid and added base?",
            options: [
              "0.10 M CH₃COOH + 0.10 M CH₃COONa",
              "0.10 M CH₃COOH + 0.01 M CH₃COONa",
              "0.01 M CH₃COOH + 0.01 M CH₃COONa",
              "0.10 M HCl + 0.10 M NaCl",
            ],
            answer: 0,
            explain: "Capacity is largest when the acid and salt are equal (pH = pKa) and both are concentrated. HCl + NaCl is not a buffer.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Redox Reactions (NCERT Class 11 Unit 7; same title in ISC and I PUC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-redox",
    title: "Redox Reactions",
    icon: "🔋",
    description: "Oxidation and reduction as oxygen/hydrogen transfer, electron transfer and change in oxidation number; rules for oxidation numbers; combination, decomposition, displacement and disproportionation reactions; balancing by the oxidation-number and ion-electron methods; redox titrations; electrode processes; and n-factor and equivalents for entrance exams.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-redox-oxidation-number",
        title: "Oxidation, Reduction and Oxidation Number",
        summary: "The classical and electron-transfer views of oxidation and reduction, oxidising and reducing agents, competitive electron-transfer reactions, the rules for assigning oxidation numbers, Stock notation and oxidation as an increase in oxidation number.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍎",
            caption: "A cut apple turns brown, an iron gate in Mumbai's sea air rusts, and a phone battery runs down. Each is a reaction in which one substance gives up electrons and another takes them.",
          },
          {
            type: "text",
            md: t`**The classical view.** Originally **oxidation** meant addition of oxygen, or more generally of an electronegative element, to a substance, or removal of hydrogen (or an electropositive element) from it: $2\text{Mg} + \text{O}_2 \rightarrow 2\text{MgO}$, $\text{Mg} + \text{Cl}_2 \rightarrow \text{MgCl}_2$, $2\text{H}_2\text{S} + \text{O}_2 \rightarrow 2\text{S} + 2\text{H}_2\text{O}$. **Reduction** was the reverse: removal of oxygen or an electronegative element, or addition of hydrogen, e.g. $2\text{HgO} \rightarrow 2\text{Hg} + \text{O}_2$.

Oxidation and reduction always happen together, so we speak of **redox** reactions. The substance that brings about oxidation is the **oxidising agent (oxidant)**, and it is itself reduced; the substance that brings about reduction is the **reducing agent (reductant)**, and it is itself oxidised.`,
          },
          {
            type: "text",
            md: t`**The electron-transfer view.** In $2\text{Na} + \text{Cl}_2 \rightarrow 2\text{NaCl}$, each sodium atom loses an electron and each chlorine atom gains one. We can split the reaction into two **half reactions**: $2\text{Na} \rightarrow 2\text{Na}^+ + 2e^-$ (oxidation) and $\text{Cl}_2 + 2e^- \rightarrow 2\text{Cl}^-$ (reduction).

So **oxidation is loss of electrons** and **reduction is gain of electrons**. An oxidant is an electron acceptor; a reductant is an electron donor.`,
          },
          {
            type: "example",
            title: "Competitive electron-transfer reactions",
            problem: "A zinc rod is dipped in blue copper sulphate solution, and separately a copper rod is dipped in zinc sulphate solution and another copper rod in silver nitrate solution. What happens in each case, and what does it tell us?",
            steps: [
              t`Zn in CuSO$_4$: the blue colour fades and reddish copper coats the zinc. $\text{Zn}(\text{s}) + \text{Cu}^{2+}(\text{aq}) \rightarrow \text{Zn}^{2+}(\text{aq}) + \text{Cu}(\text{s})$. Zinc is oxidised; Cu$^{2+}$ is reduced.`,
              "Cu in ZnSO₄: no change. Copper cannot give electrons to Zn²⁺.",
              t`Cu in AgNO$_3$: the solution turns blue and silver deposits. $\text{Cu}(\text{s}) + 2\text{Ag}^+(\text{aq}) \rightarrow \text{Cu}^{2+}(\text{aq}) + 2\text{Ag}(\text{s})$.`,
              "Tendency to release electrons: Zn > Cu > Ag. Each metal can reduce the ions of metals below it.",
            ],
            answer: "Zn reduces Cu²⁺; Cu reduces Ag⁺; Cu cannot reduce Zn²⁺. Order of reducing power: Zn > Cu > Ag.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`In $\text{Fe} + \text{Cu}^{2+} \rightarrow \text{Fe}^{2+} + \text{Cu}$, the reducing agent is`,
                options: ["Fe", "Cu²⁺", "Fe²⁺", "Cu"],
                answer: 0,
                explain: "Fe loses electrons (it is oxidised), so it reduces Cu²⁺: Fe is the reducing agent.",
              },
            ],
          },
          {
            type: "heading",
            text: "Oxidation number",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Oxidation number (oxidation state)** is the charge an atom would carry if all its bonds were fully ionic, with shared electrons given to the more electronegative atom.`,
              "An element in the free state has oxidation number 0 (H₂, O₂, Cl₂, P₄, S₈, Na, Fe).",
              "For a monatomic ion it equals the charge (Na⁺ +1, Mg²⁺ +2, Cl⁻ −1, O²⁻ −2). Group 1 metals are +1 and group 2 metals +2 in their compounds; Al is +3.",
              "Oxygen is usually −2, but −1 in peroxides (H₂O₂, Na₂O₂), −½ in superoxides (KO₂), +2 in OF₂ and +1 in O₂F₂.",
              "Hydrogen is +1 with non-metals, but −1 in metal hydrides (NaH, CaH₂). Fluorine is always −1 in compounds; other halogens are −1 except when bonded to oxygen or a more electronegative halogen.",
              "The oxidation numbers of all atoms add up to 0 in a neutral compound and to the charge in an ion.",
            ],
          },
          {
            type: "formula",
            tex: t`\sum (\text{oxidation numbers}) = \text{charge on the species}`,
            caption: "Use this to find one unknown oxidation number when all the others are known.",
          },
          {
            type: "example",
            title: "Finding oxidation numbers",
            problem: t`Find the oxidation number of (a) Cr in K$_2$Cr$_2$O$_7$, (b) Mn in KMnO$_4$, (c) N in NH$_4^+$, (d) Fe in Fe$_3$O$_4$.`,
            steps: [
              t`(a) $2(+1) + 2x + 7(-2) = 0 \Rightarrow 2x = 12 \Rightarrow x = +6$.`,
              t`(b) $+1 + x + 4(-2) = 0 \Rightarrow x = +7$.`,
              t`(c) $x + 4(+1) = +1 \Rightarrow x = -3$.`,
              t`(d) $3x + 4(-2) = 0 \Rightarrow x = +\tfrac{8}{3}$. This is an **average**: Fe$_3$O$_4$ is FeO·Fe$_2$O$_3$, with one Fe at +2 and two at +3.`,
            ],
            answer: "(a) +6, (b) +7, (c) −3, (d) +8/3 (average of +2, +3, +3)",
          },
          {
            type: "text",
            md: t`**Stock notation** shows the oxidation number of a metal in Roman numerals: FeO is iron(II) oxide, Fe$_2$O$_3$ iron(III) oxide, Cu$_2$O copper(I) oxide, SnCl$_4$ tin(IV) chloride.

**Redox in terms of oxidation number:** oxidation is an **increase** in oxidation number; reduction is a **decrease**. The oxidant is the species containing the atom whose oxidation number decreases; the reductant contains the atom whose oxidation number increases. This definition works even for covalent reactions where no full electron transfer occurs, such as $\text{H}_2 + \text{Cl}_2 \rightarrow 2\text{HCl}$ (H: 0 → +1; Cl: 0 → −1).`,
          },
          {
            type: "mistake",
            wrong: "Oxygen always has an oxidation number of −2, so O in H₂O₂ is −2 and H must be +2.",
            right: "Oxygen is −1 in peroxides (H₂O₂, BaO₂), −½ in superoxides (KO₂) and positive (+2) in OF₂. Hydrogen is +1 in H₂O₂.",
            why: "−2 is the commonest value, so it feels like a law. But there is an O–O bond in peroxides, and fluorine is more electronegative than oxygen, so the rules have exceptions that exams love.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the element to its oxidation number.",
              pairs: [
                ["Mn in KMnO₄", "+7"],
                ["S in H₂SO₄", "+6"],
                ["N in HNO₃", "+5"],
                ["O in H₂O₂", "−1"],
                ["N in NH₃", "−3"],
                ["Fe in Fe₃O₄", "+8/3"],
              ],
              explain: "In each case, the known oxidation numbers (H +1, O −2 except in peroxides, K +1) add up to the charge, which fixes the unknown one.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "When asked to 'identify the species oxidised and reduced', write the oxidation number above each atom that changes; that is where the marks go. Name both the oxidising agent and the reducing agent as whole species (KMnO₄, not just Mn). Define oxidation in all three ways if a question says 'explain with examples'.",
          },
          {
            type: "keypoints",
            items: [
              "Classical: oxidation = add O/electronegative element or remove H; reduction is the reverse.",
              "Electronic: oxidation = loss of electrons; reduction = gain of electrons.",
              "Oxidation number: increase = oxidation, decrease = reduction; the sum equals the charge on the species.",
              "Oxidants are reduced; reductants are oxidised. Zn > Cu > Ag in releasing electrons.",
              "Fractional oxidation numbers (Fe₃O₄) are averages over atoms in different states.",
            ],
          },
        ],
        flashcards: [
          { front: "Oxidation (electronic definition)", back: "Loss of electrons." },
          { front: "Reduction (oxidation-number definition)", back: "Decrease in oxidation number." },
          { front: "Oxidising agent", back: "An electron acceptor; it is reduced in the reaction." },
          { front: "Oxidation number of O in OF₂", back: "+2" },
          { front: "Oxidation number of H in NaH", back: "−1" },
          { front: "Stock name of Cu₂O", back: "Copper(I) oxide" },
          { front: "Average oxidation number of Fe in Fe₃O₄", back: "+8/3 (one Fe²⁺ and two Fe³⁺)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The oxidation number of Cr in K₂Cr₂O₇ is",
            options: ["+6", "+7", "+3", "+12"],
            answer: 0,
            explain: "2(+1) + 2x + 7(−2) = 0 gives x = +6. +12 is the total for two Cr atoms.",
          },
          {
            kind: "mcq",
            q: "In 2Na + Cl₂ → 2NaCl, the oxidising agent is",
            options: ["Cl₂", "Na", "NaCl", "Na⁺"],
            answer: 0,
            explain: "Cl₂ accepts electrons (0 → −1), so it is reduced and acts as the oxidising agent.",
          },
          {
            kind: "numeric",
            q: "Find the average oxidation number of carbon in carbon suboxide, C₃O₂ (to 2 decimal places).",
            answer: 1.33,
            tolerance: 0.01,
            explain: "3x + 2(−2) = 0, so x = 4/3 ≈ +1.33.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A copper rod placed in zinc sulphate solution gets coated with zinc.",
            answer: false,
            explain: "Copper releases electrons less readily than zinc, so it cannot reduce Zn²⁺. No reaction occurs.",
          },
          {
            kind: "mcq",
            q: "The oxidation number of oxygen in KO₂ is",
            options: ["−½", "−2", "−1", "+½"],
            answer: 0,
            explain: "KO₂ is a superoxide (O₂⁻): 1 + 2x = 0, so x = −½.",
          },
          {
            kind: "multi",
            q: "Which of these are redox reactions?",
            options: ["Zn + 2HCl → ZnCl₂ + H₂", "NaCl + AgNO₃ → AgCl + NaNO₃", "2Mg + O₂ → 2MgO", "CaCO₃ → CaO + CO₂"],
            answers: [0, 2],
            explain: "Zn (0 → +2) and Mg (0 → +2) are oxidised in the first and third. In the precipitation and the CaCO₃ decomposition, no oxidation number changes.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "In the electronic concept, reduction is the ___ of electrons.",
            answer: ["gain"],
            explain: "Reduction = gain of electrons; oxidation = loss.",
          },
          {
            kind: "mcq",
            q: "The Stock name of Fe₂O₃ is",
            options: ["iron(III) oxide", "iron(II) oxide", "iron(VI) oxide", "di-iron trioxide(II)"],
            answer: 0,
            explain: "2x + 3(−2) = 0 gives x = +3, written iron(III).",
          },
        ],
      },
      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-redox-types-balancing",
        title: "Types of Redox Reactions and Balancing Equations",
        summary: "Combination, decomposition, displacement (metal, hydrogen, oxygen and halogen) and disproportionation reactions, and balancing redox equations in acidic and basic media by the oxidation-number method and the half-reaction (ion-electron) method.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧴",
            caption: "Household bleach is made by passing chlorine into cold sodium hydroxide. In that one reaction, chlorine is both oxidised and reduced.",
          },
          {
            type: "text",
            md: t`**Combination reactions** join two substances into one; they are redox when an element takes part: $\text{C} + \text{O}_2 \rightarrow \text{CO}_2$, $3\text{Mg} + \text{N}_2 \rightarrow \text{Mg}_3\text{N}_2$.

**Decomposition reactions** break a compound into two or more parts; they are redox when an element is formed: $2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$, $2\text{NaH} \rightarrow 2\text{Na} + \text{H}_2$, $2\text{KClO}_3 \rightarrow 2\text{KCl} + 3\text{O}_2$. Not every decomposition is redox: in $\text{CaCO}_3 \rightarrow \text{CaO} + \text{CO}_2$ no oxidation number changes.`,
          },
          {
            type: "text",
            md: t`**Displacement reactions** replace an atom or ion in a compound by another element: $\text{X} + \text{YZ} \rightarrow \text{XZ} + \text{Y}$.

**Metal displacement:** $\text{Zn} + \text{CuSO}_4 \rightarrow \text{ZnSO}_4 + \text{Cu}$; $\text{Cr}_2\text{O}_3 + 2\text{Al} \rightarrow \text{Al}_2\text{O}_3 + 2\text{Cr}$ (aluminothermy). **Non-metal displacement:** very reactive metals displace hydrogen from cold water ($2\text{Na} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{H}_2$), magnesium does so from hot water ($\text{Mg} + 2\text{H}_2\text{O} \rightarrow \text{Mg(OH)}_2 + \text{H}_2$), and many metals from acids ($\text{Fe} + 2\text{HCl} \rightarrow \text{FeCl}_2 + \text{H}_2$). Fluorine displaces oxygen from water: $2\text{F}_2 + 2\text{H}_2\text{O} \rightarrow 4\text{HF} + \text{O}_2$. A halogen displaces a less reactive halogen from its salt: $\text{Cl}_2 + 2\text{KI} \rightarrow 2\text{KCl} + \text{I}_2$. Oxidising power: F$_2$ > Cl$_2$ > Br$_2$ > I$_2$.`,
          },
          {
            type: "text",
            md: t`**Disproportionation:** one element in one oxidation state is simultaneously oxidised and reduced. The element must be able to exist in at least three oxidation states, and the reactant must be in an intermediate one.

$2\text{H}_2\text{O}_2 \rightarrow 2\text{H}_2\text{O} + \text{O}_2$ (O: −1 → −2 and 0); $\text{P}_4 + 3\text{OH}^- + 3\text{H}_2\text{O} \rightarrow \text{PH}_3 + 3\text{H}_2\text{PO}_2^-$ (P: 0 → −3 and +1); $\text{S}_8 + 12\text{OH}^- \rightarrow 4\text{S}^{2-} + 2\text{S}_2\text{O}_3^{2-} + 6\text{H}_2\text{O}$; $\text{Cl}_2 + 2\text{OH}^- \rightarrow \text{ClO}^- + \text{Cl}^- + \text{H}_2\text{O}$ (Cl: 0 → +1 and −1).

Fluorine cannot disproportionate: it is the most electronegative element and has no positive oxidation state, so with alkali it gives $2\text{F}_2 + 2\text{OH}^- \rightarrow 2\text{F}^- + \text{OF}_2 + \text{H}_2\text{O}$ (O is oxidised, not F). Among the chlorine oxoanions, ClO$^-$, ClO$_2^-$ and ClO$_3^-$ can disproportionate, but ClO$_4^-$ (Cl at its highest state, +7) cannot.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each redox reaction by its type.",
              groups: ["Combination", "Displacement", "Disproportionation"],
              items: [
                { text: "C + O₂ → CO₂", group: 0, hint: "Two substances join into one." },
                { text: "3Mg + N₂ → Mg₃N₂", group: 0, hint: "Two elements combine." },
                { text: "Cl₂ + 2KBr → 2KCl + Br₂", group: 1, hint: "Chlorine pushes bromine out of its salt." },
                { text: "2Na + 2H₂O → 2NaOH + H₂", group: 1, hint: "Sodium displaces hydrogen from water." },
                { text: "P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻", group: 2, hint: "P goes from 0 to both −3 and +1." },
                { text: "Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O", group: 2, hint: "Cl goes from 0 to both −1 and +1." },
              ],
              explain: "In disproportionation the same element in the same reactant is both oxidised and reduced; in displacement one element takes the place of another.",
            },
          },
          {
            type: "heading",
            text: "Balancing redox equations",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Oxidation-number method.** Write the skeleton equation and the oxidation numbers of the atoms that change.",
              "Find the increase and the decrease in oxidation number (per formula unit) and multiply so that total increase = total decrease.",
              t`Balance the **charge**: add H$^+$ in acidic solution or OH$^-$ in basic solution to the side that needs it.`,
              "Balance hydrogen (and so oxygen) by adding H₂O. Check atoms and charges.",
            ],
          },
          {
            type: "example",
            title: "Oxidation-number method in basic medium",
            problem: t`Balance: $\text{MnO}_4^-(\text{aq}) + \text{I}^-(\text{aq}) \rightarrow \text{MnO}_2(\text{s}) + \text{IO}_3^-(\text{aq})$ in basic solution.`,
            steps: [
              "Mn: +7 → +4 (decrease 3). I: −1 → +5 (increase 6).",
              t`Equalise: 2 Mn × 3 = 6 = 1 I × 6, so $2\text{MnO}_4^- + \text{I}^- \rightarrow 2\text{MnO}_2 + \text{IO}_3^-$.`,
              t`Charge: left $-2 - 1 = -3$, right $-1$. Basic medium: add 2OH$^-$ on the right.`,
              t`Hydrogen: add one H$_2$O on the left: $2\text{MnO}_4^- + \text{I}^- + \text{H}_2\text{O} \rightarrow 2\text{MnO}_2 + \text{IO}_3^- + 2\text{OH}^-$.`,
              "Check O: 8 + 1 = 9 on the left; 4 + 3 + 2 = 9 on the right. Charge −3 = −3.",
            ],
            answer: "2MnO₄⁻ + I⁻ + H₂O → 2MnO₂ + IO₃⁻ + 2OH⁻",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Half-reaction (ion-electron) method.** Split the reaction into an oxidation half and a reduction half.",
              "In each half, balance atoms other than O and H; then O with H₂O and H with H⁺ (in acid).",
              "Add electrons to balance the charge in each half.",
              "Multiply the halves so that electrons lost = electrons gained, add them and cancel common species. In basic solution, add as many OH⁻ to both sides as there are H⁺, then combine H⁺ + OH⁻ to H₂O.",
            ],
          },
          {
            type: "example",
            title: "Half-reaction method in acidic medium",
            problem: t`Balance: $\text{Fe}^{2+} + \text{Cr}_2\text{O}_7^{2-} \rightarrow \text{Fe}^{3+} + \text{Cr}^{3+}$ in acidic solution.`,
            steps: [
              t`Oxidation half: $\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^-$.`,
              t`Reduction half: $\text{Cr}_2\text{O}_7^{2-} \rightarrow 2\text{Cr}^{3+}$; add 7H$_2$O on the right and 14H$^+$ on the left.`,
              t`Charge: left $-2 + 14 = +12$, right $+6$: add 6e$^-$ on the left. $\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O}$.`,
              "Multiply the Fe half by 6 and add; the 6e⁻ cancel.",
            ],
            answer: "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O (charge +24 on both sides)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`In the balanced equation $\text{MnO}_4^- + 5\text{Fe}^{2+} + x\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + y\text{H}_2\text{O}$, what is x?`,
                answer: 8,
                explain: "MnO₄⁻ has 4 O, so y = 4 H₂O, needing 8 H⁺. Charge check: −1 + 10 + 8 = +17 = +2 + 15.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In basic solution, balance with H⁺ and H₂O exactly as in acid and leave the H⁺ in the final equation.",
            right: "H⁺ cannot be a reactant or product in a basic solution. Either balance charge with OH⁻ from the start, or add equal OH⁻ to both sides to turn every H⁺ into H₂O, then cancel extra water.",
            why: "The acidic recipe is learned first and is easy to reuse. But a final answer with H⁺ in alkaline solution describes a reaction that cannot happen in that medium, and examiners deduct for it.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Show every step of the method the question names; balancing by inspection earns little if the question says 'by ion-electron method'. Always finish with a check line: atoms on both sides and total charge on both sides. Write states (aq), (s), (l), (g) if the question gives them.",
          },
          {
            type: "keypoints",
            items: [
              "Redox types: combination, decomposition, displacement (metal, H₂, O₂, halogen) and disproportionation.",
              "Disproportionation needs an element in an intermediate oxidation state; F₂ and ClO₄⁻ cannot disproportionate.",
              "Halogen oxidising power: F₂ > Cl₂ > Br₂ > I₂.",
              "Oxidation-number method: equalise increase and decrease, then balance charge (H⁺ or OH⁻) and H with H₂O.",
              "Ion-electron method: balance each half for atoms and charge, equalise electrons, add.",
            ],
          },
        ],
        flashcards: [
          { front: "Disproportionation", back: "A redox reaction in which the same element in one oxidation state is both oxidised and reduced." },
          { front: "Why can't F₂ disproportionate?", back: "Fluorine has no positive oxidation state; it can only be reduced (to −1)." },
          { front: "Why can't ClO₄⁻ disproportionate?", back: "Cl is already at its highest state (+7) and cannot be oxidised further." },
          { front: "Order of oxidising power of halogens", back: "F₂ > Cl₂ > Br₂ > I₂" },
          { front: "Balanced dichromate–Fe²⁺ equation", back: "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O" },
          { front: "Balanced permanganate–Fe²⁺ equation", back: "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O" },
          { front: "Aluminothermy example", back: "Cr₂O₃ + 2Al → Al₂O₃ + 2Cr (a metal displacement reaction)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which species cannot undergo disproportionation?",
            options: ["ClO₄⁻", "ClO⁻", "ClO₃⁻", "Cl₂"],
            answer: 0,
            explain: "In ClO₄⁻, Cl is +7, its highest state, so it can only be reduced.",
          },
          {
            kind: "mcq",
            q: "In P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻, phosphorus is",
            options: ["both oxidised and reduced", "only oxidised", "only reduced", "neither oxidised nor reduced"],
            answer: 0,
            explain: "P goes from 0 to −3 (in PH₃, reduced) and to +1 (in H₂PO₂⁻, oxidised): a disproportionation.",
          },
          {
            kind: "numeric",
            q: t`Balance $\text{Cr}_2\text{O}_7^{2-} + \text{I}^- + \text{H}^+ \rightarrow \text{Cr}^{3+} + \text{I}_2 + \text{H}_2\text{O}$ with smallest whole numbers. What is the coefficient of I⁻?`,
            answer: 6,
            explain: "Cr₂O₇²⁻ gains 6e⁻; each I⁻ loses 1e⁻, so 6I⁻ → 3I₂. Cr₂O₇²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I₂ + 7H₂O.",
            difficulty: 2,
            hint: "How many electrons does one Cr₂O₇²⁻ accept?",
          },
          {
            kind: "truefalse",
            q: "Bromine water can oxidise chloride ions to chlorine.",
            answer: false,
            explain: "Cl₂ is a stronger oxidant than Br₂, so Br₂ cannot take electrons from Cl⁻. The reverse, Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂, does occur.",
          },
          {
            kind: "mcq",
            q: "Which decomposition is NOT a redox reaction?",
            options: ["CaCO₃ → CaO + CO₂", "2KClO₃ → 2KCl + 3O₂", "2H₂O → 2H₂ + O₂", "2NaH → 2Na + H₂"],
            answer: 0,
            explain: "In CaCO₃ → CaO + CO₂, Ca stays +2, C stays +4 and O stays −2.",
          },
          {
            kind: "order",
            q: "Order the steps of the ion-electron method in acidic solution.",
            items: [
              "Split into oxidation and reduction halves",
              "Balance atoms other than O and H",
              "Balance O with H₂O and H with H⁺",
              "Add electrons to balance charge",
              "Equalise electrons and add the halves",
            ],
            explain: "Atoms first, then O and H, then charge with electrons, and only then combine.",
          },
          {
            kind: "multi",
            q: "Which halogen displacement reactions take place in aqueous solution?",
            options: ["Cl₂ + 2KI → 2KCl + I₂", "Br₂ + 2KI → 2KBr + I₂", "I₂ + 2KCl → 2KI + Cl₂", "Br₂ + 2KCl → 2KBr + Cl₂"],
            answers: [0, 1],
            explain: "A halogen displaces only those below it (weaker oxidants): Cl₂ and Br₂ both displace I₂. I₂ and Br₂ cannot displace Cl₂.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`In $\text{S}_8 + 12\text{OH}^- \rightarrow 4\text{S}^{2-} + 2\text{S}_2\text{O}_3^{2-} + 6\text{H}_2\text{O}$, how many S atoms are oxidised?`,
            options: ["4", "8", "2", "6"],
            answer: 0,
            explain: "4 S atoms go to S²⁻ (0 → −2, reduced) and 4 S atoms go into 2S₂O₃²⁻ (average 0 → +2, oxidised).",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-redox-titration-electrode",
        title: "Redox Titrations and Electrode Processes",
        summary: "How permanganate, dichromate and iodine titrations work and how their end points are seen, titration calculations from balanced equations, the limits of the oxidation-number idea, and redox reactions at electrodes: the Daniell cell, electrode potentials, the standard hydrogen electrode and the electrochemical series.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧫",
            caption: "In a school lab, a purple drop from the burette loses its colour in the flask, again and again, until one drop stays faint pink. That pink is the end point, and no indicator was added.",
          },
          {
            type: "text",
            md: t`In a **redox titration** a solution of an oxidant is added from a burette to a reductant (or the reverse) until the reaction is just complete. The end point must be made visible:

**Self-indicator:** MnO$_4^-$ is deep purple but Mn$^{2+}$ is almost colourless, so in acid the first excess drop of KMnO$_4$ (about $10^{-6}$ M) gives a lasting pink colour. **Redox indicator:** Cr$_2$O$_7^{2-}$ (orange) to Cr$^{3+}$ (green) is not sharp enough, so an indicator such as diphenylamine is added; it is oxidised by the first excess dichromate to an intense blue. **Iodine–starch:** iodine gives a deep blue colour with starch. In **iodometry**, an oxidant such as Cu$^{2+}$ first liberates iodine from iodide, and that iodine is titrated with sodium thiosulphate until the blue colour vanishes.`,
          },
          {
            type: "table",
            headers: ["Titrant", "Medium", "Key half-reaction", "End point"],
            rows: [
              ["KMnO₄", "dilute H₂SO₄", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "first permanent pink (self-indicator)"],
              ["K₂Cr₂O₇", "dilute H₂SO₄", "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O", "diphenylamine turns blue"],
              ["Na₂S₂O₃ (for I₂)", "near neutral", "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻", "blue starch–iodine colour disappears"],
              ["(Cu²⁺ + excess I⁻)", "—", "2Cu²⁺ + 4I⁻ → Cu₂I₂(s) + I₂", "iodine set free, then titrated"],
            ],
          },
          {
            type: "formula",
            tex: t`a\,\text{Ox} + b\,\text{Red} \rightarrow \text{products} \qquad \frac{M_{\text{ox}}V_{\text{ox}}}{a} = \frac{M_{\text{red}}V_{\text{red}}}{b}`,
            caption: "Molarity × volume gives moles (or millimoles if V is in mL); divide each by its coefficient in the balanced equation.",
          },
          {
            type: "example",
            title: "Permanganate titration of iron(II)",
            problem: "25.0 mL of an acidified Fe²⁺ solution needs 20.0 mL of 0.020 M KMnO₄ to reach a permanent pink colour. Find the molarity of Fe²⁺.",
            steps: [
              t`Balanced equation: $\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$, so a = 1, b = 5.`,
              "Millimoles of MnO₄⁻ = 20.0 × 0.020 = 0.40 mmol.",
              "Millimoles of Fe²⁺ = 5 × 0.40 = 2.0 mmol.",
              "Molarity of Fe²⁺ = 2.0/25.0 = 0.080 M.",
            ],
            answer: "[Fe²⁺] = 0.080 mol L⁻¹",
          },
          {
            type: "example",
            title: "Iodometric estimation of copper(II)",
            problem: "Excess KI is added to 25.0 mL of a CuSO₄ solution. The iodine set free needs 20.0 mL of 0.050 M Na₂S₂O₃ (starch indicator). Find the molarity of Cu²⁺.",
            steps: [
              "Millimoles of S₂O₃²⁻ = 20.0 × 0.050 = 1.0 mmol.",
              "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻, so I₂ = 1.0/2 = 0.50 mmol.",
              "2Cu²⁺ + 4I⁻ → Cu₂I₂ + I₂, so Cu²⁺ = 2 × 0.50 = 1.0 mmol.",
              "Molarity of Cu²⁺ = 1.0/25.0 = 0.040 M.",
            ],
            answer: "[Cu²⁺] = 0.040 mol L⁻¹ (overall, 1 Cu²⁺ ≡ 1 S₂O₃²⁻)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is no separate indicator needed in KMnO₄ titrations?",
                options: [
                  "MnO₄⁻ is intensely coloured while Mn²⁺ is nearly colourless",
                  "Mn²⁺ is deep pink",
                  "KMnO₄ reacts with the acid to give a colour",
                  "The solution boils at the end point",
                ],
                answer: 0,
                explain: "Until the end point the purple MnO₄⁻ is reduced to colourless Mn²⁺; the first excess drop gives a permanent pink.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Limits of the oxidation-number idea.** Oxidation numbers are a book-keeping device. In covalent molecules electrons are only shifted, not fully transferred, and an average oxidation number can be a fraction (Fe$_3$O$_4$, S$_4$O$_6^{2-}$). To know the oxidation state of each individual atom, we need the structure of the molecule.`,
          },
          {
            type: "heading",
            text: "Redox reactions at electrodes",
          },
          {
            type: "text",
            md: t`When a zinc rod sits in CuSO$_4$ solution, electrons pass directly from Zn to Cu$^{2+}$ and the energy appears as heat. If instead a Zn rod in ZnSO$_4$ and a Cu rod in CuSO$_4$ are kept in separate beakers, joined by a wire and a **salt bridge** (KCl or KNO$_3$ in agar or gelatin), electrons flow through the wire from Zn to Cu. This is the **Daniell cell**. The salt bridge completes the circuit and keeps both solutions electrically neutral.

Each metal in contact with its ions is a **redox couple** (Zn$^{2+}$/Zn, Cu$^{2+}$/Cu) and develops an **electrode potential**. Potentials are measured against the **standard hydrogen electrode** (SHE), given 0.00 V by convention. Standard potentials (1 M ions, 1 bar gas, 298 K) arranged in order form the **electrochemical series**: the more positive the standard reduction potential, the stronger the oxidant; the more negative, the stronger the reductant.`,
          },
          {
            type: "table",
            headers: ["Couple", "E° (V, reduction)", "Meaning"],
            rows: [
              ["F₂/F⁻", "+2.87", "F₂ is the strongest common oxidant"],
              ["Ag⁺/Ag", "+0.80", "Ag⁺ is easily reduced"],
              ["Cu²⁺/Cu", "+0.34", "Cu cannot displace H₂ from dilute acids"],
              ["2H⁺/H₂ (SHE)", "0.00", "reference electrode"],
              ["Zn²⁺/Zn", "−0.76", "Zn displaces H₂ from dilute acids"],
              ["Li⁺/Li", "−3.05", "Li is the strongest reductant in water"],
            ],
          },
          {
            type: "formula",
            tex: t`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.34 - (-0.76) = 1.10\ \text{V (Daniell cell)}`,
            caption: "Oxidation happens at the anode (Zn, negative terminal); reduction at the cathode (Cu, positive terminal). Electrons flow from anode to cathode in the outer circuit.",
          },
          {
            type: "mistake",
            wrong: "In a cell, the electrode with the more positive standard potential is the anode, because it is 'more powerful'.",
            right: "The electrode with the more positive reduction potential is the cathode, where reduction takes place. The more negative one (Zn in the Daniell cell) is the anode, where oxidation happens.",
            why: "A high E° means a strong tendency to be reduced, i.e. to take electrons. That happens at the cathode. Anode and cathode are defined by oxidation and reduction, not by 'strength'.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Will a copper wire react with silver nitrate solution?",
              emoji: "🥄",
              options: [
                "Yes: Cu is oxidised to Cu²⁺ and silver deposits",
                "No: copper is a noble metal and never reacts",
                "Yes: silver is oxidised and copper deposits",
              ],
              answer: 0,
              trap: 1,
              explain: "E°(Ag⁺/Ag) = +0.80 V is above E°(Cu²⁺/Cu) = +0.34 V, so Ag⁺ can take electrons from Cu. Copper is unreactive towards dilute acids, not towards Ag⁺.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "In titration answers, write the balanced ionic equation first and use its coefficients; most errors come from a wrong mole ratio. For the Daniell cell, label anode (−) and cathode (+), the direction of electron flow and the role of the salt bridge. Electrode potentials are developed fully in Class 12 Electrochemistry; in Class 11 the board expects the qualitative idea and the series.",
          },
          {
            type: "keypoints",
            items: [
              "KMnO₄ is a self-indicator; K₂Cr₂O₇ needs diphenylamine; iodine titrations use starch.",
              "Iodometry: an oxidant frees I₂ from I⁻, then I₂ is titrated with thiosulphate.",
              "Use the balanced equation: M_ox V_ox / a = M_red V_red / b.",
              "Daniell cell: Zn anode (oxidation), Cu cathode (reduction), E° = 1.10 V; salt bridge keeps neutrality.",
              "More positive E°: stronger oxidant; more negative E°: stronger reductant. SHE = 0.00 V.",
            ],
          },
        ],
        flashcards: [
          { front: "Indicator in KMnO₄ titrations", back: "None needed: KMnO₄ is a self-indicator (first permanent pink)." },
          { front: "Indicator for K₂Cr₂O₇ titrations", back: "Diphenylamine (turns intense blue at the end point)." },
          { front: "Iodine–thiosulphate equation", back: "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻" },
          { front: "Role of a salt bridge", back: "Completes the circuit and keeps both half-cell solutions electrically neutral." },
          { front: "Standard hydrogen electrode potential", back: "0.00 V by convention." },
          { front: "E° of the Daniell cell", back: "1.10 V (0.34 − (−0.76))." },
          { front: "Anode in a galvanic cell", back: "The electrode where oxidation occurs (negative terminal)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In the titration of oxalic acid with KMnO₄ in acid, the indicator used is",
            options: ["none; KMnO₄ acts as its own indicator", "phenolphthalein", "starch", "diphenylamine"],
            answer: 0,
            explain: "The purple-to-colourless change of MnO₄⁻ → Mn²⁺ makes KMnO₄ a self-indicator.",
          },
          {
            kind: "numeric",
            q: "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O. What volume (mL) of 0.10 M oxalate is oxidised by 20.0 mL of 0.020 M KMnO₄?",
            answer: 10,
            tolerance: 0.1,
            explain: "MnO₄⁻ = 0.40 mmol, so oxalate = 0.40 × 5/2 = 1.0 mmol. Volume = 1.0/0.10 = 10.0 mL.",
            difficulty: 2,
            hint: "Use the 2 : 5 mole ratio from the equation.",
          },
          {
            kind: "mcq",
            q: "Using E°(Ag⁺/Ag) = +0.80 V and E°(Zn²⁺/Zn) = −0.76 V, E° of the cell Zn | Zn²⁺ || Ag⁺ | Ag is",
            options: ["1.56 V", "0.04 V", "−1.56 V", "0.84 V"],
            answer: 0,
            explain: "E°cell = E°cathode − E°anode = 0.80 − (−0.76) = 1.56 V. 0.04 V comes from wrongly adding the two values.",
          },
          {
            kind: "mcq",
            q: "Which is the strongest reducing agent in aqueous solution?",
            options: ["Li", "Zn", "Cu", "Ag"],
            answer: 0,
            explain: "Li has the most negative standard reduction potential (−3.05 V), so it gives up electrons most readily.",
          },
          {
            kind: "truefalse",
            q: "The potential of the standard hydrogen electrode is taken as zero by convention.",
            answer: true,
            explain: "Single electrode potentials cannot be measured alone, so the SHE is assigned 0.00 V at all temperatures as the reference.",
          },
          {
            kind: "mcq",
            q: "In the iodometric estimation of Cu²⁺, the solution in the burette is",
            options: ["sodium thiosulphate", "potassium iodide", "copper sulphate", "starch solution"],
            answer: 0,
            explain: "KI is added in excess to the Cu²⁺ in the flask; the liberated I₂ is titrated with Na₂S₂O₃ from the burette, with starch near the end.",
          },
          {
            kind: "multi",
            q: "Which statements about the salt bridge in a Daniell cell are correct?",
            options: [
              "It completes the electrical circuit.",
              "It keeps the two solutions electrically neutral.",
              "Electrons flow through it from Zn to Cu.",
              "It usually contains KCl or KNO₃ set in agar or gelatin.",
            ],
            answers: [0, 1, 3],
            explain: "Ions, not electrons, move through the salt bridge. Electrons travel only through the external wire.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "In an iodometric titration, 10.0 mL of 0.10 M Na₂S₂O₃ is used. How many millimoles of Cu²⁺ were present?",
            answer: 1,
            tolerance: 0.01,
            explain: "S₂O₃²⁻ = 1.0 mmol; I₂ = 0.50 mmol; Cu²⁺ = 2 × 0.50 = 1.0 mmol (1 Cu²⁺ ≡ 1 S₂O₃²⁻).",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-che-redox-exam-nfactor",
        title: "Exam edge: n-Factor, Equivalents and Redox Titrations",
        summary: "What JEE Main, JEE Advanced, NEET, KCET and COMEDK ask from redox: oxidation states from structure, n-factor and equivalent mass, the law of equivalence, medium-dependent permanganate, mixture and double titrations, disproportionation n-factors and volume strength of H₂O₂.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Redox is short but feeds every other chapter (electrochemistry, p-block, titrations in practicals). NEET and KCET ask oxidation numbers, identifying oxidant/reductant, disproportionation and equivalent mass of KMnO$_4$ or K$_2$Cr$_2$O$_7$. JEE Main adds balancing coefficients, oxidation states that need the structure (CrO$_5$, H$_2$SO$_5$, S$_4$O$_6^{2-}$) and one-step titrations using n-factor. JEE Advanced sets multi-step titrations of mixtures, back titrations and disproportionation.

The quickest tool is the **n-factor** (valence factor): the number of electrons lost or gained **per formula unit** of a reactant in that reaction. It is not fixed for a substance; it depends on the product formed.`,
          },
          {
            type: "table",
            headers: ["Species → product", "n-factor", "Equivalent mass"],
            rows: [
              ["KMnO₄ → Mn²⁺ (acidic)", "5", "158/5 = 31.6"],
              ["KMnO₄ → MnO₂ (neutral or weakly alkaline)", "3", "158/3 ≈ 52.7"],
              ["KMnO₄ → MnO₄²⁻ (strongly alkaline)", "1", "158"],
              ["K₂Cr₂O₇ → 2Cr³⁺ (acidic)", "6", "294/6 = 49"],
              ["FeSO₄: Fe²⁺ → Fe³⁺", "1", "M/1"],
              ["H₂C₂O₄ (or C₂O₄²⁻) → 2CO₂", "2", "M/2"],
              ["FeC₂O₄ → Fe³⁺ + 2CO₂", "1 + 2 = 3", "M/3"],
              ["Na₂S₂O₃ → ½Na₂S₄O₆", "1", "M/1"],
            ],
          },
          {
            type: "formula",
            tex: t`E = \frac{M}{n} \qquad N = n \times \text{Molarity} \qquad \text{meq} = N \times V(\text{mL}) \qquad \text{meq(oxidant)} = \text{meq(reductant)}`,
            caption: "Law of equivalence: in any reaction, the milliequivalents of every reactant that reacts are equal. No balanced equation is needed once the n-factors are known.",
          },
          {
            type: "formula",
            tex: t`n_{\text{disproportionation}} = \frac{n_1 n_2}{n_1 + n_2}`,
            caption: "For an element that disproportionates, n₁ and n₂ are the electron changes per formula unit on the reduction and oxidation sides. Use it only for pure disproportionation.",
          },
          {
            type: "text",
            md: t`**Oxidation states from structure.** Average values can hide the real states. In CrO$_5$ (one oxide O and two peroxide O$_2^{2-}$ groups), Cr is **+6**, not +10. In H$_2$SO$_5$ (peroxomonosulphuric acid, one O–O bond), S is **+6**, not +8. In S$_4$O$_6^{2-}$ the average is +2.5, but the two central S atoms are **0** and the two end S atoms are **+5**. In NH$_4$NO$_3$ the two N atoms are −3 and +5. A real oxidation state above the group number (like +8 for S) is a signal that a peroxide link is present.`,
          },
          {
            type: "example",
            title: "KCET / NEET level: the medium changes the equivalent mass",
            problem: "Find the equivalent mass of KMnO₄ (M = 158) in acidic, neutral and strongly alkaline media.",
            steps: [
              "Acidic: Mn +7 → +2 (Mn²⁺), n = 5, E = 158/5 = 31.6.",
              "Neutral/weakly alkaline: Mn +7 → +4 (MnO₂), n = 3, E = 158/3 ≈ 52.7.",
              "Strongly alkaline: Mn +7 → +6 (MnO₄²⁻), n = 1, E = 158.",
            ],
            answer: "31.6 (acid), 52.7 (neutral), 158 (strongly alkaline)",
          },
          {
            type: "example",
            title: "JEE Main level: one reductant, two oxidisable parts",
            problem: "What volume of 0.10 M KMnO₄ (acidic) oxidises 1.0 mmol of iron(II) oxalate, FeC₂O₄, completely?",
            steps: [
              "Both parts are oxidised: Fe²⁺ → Fe³⁺ (1 e⁻) and C₂O₄²⁻ → 2CO₂ (2 e⁻), so n(FeC₂O₄) = 3.",
              "meq of FeC₂O₄ = 1.0 × 3 = 3.0.",
              "Normality of KMnO₄ = 5 × 0.10 = 0.50 N.",
              "V = meq/N = 3.0/0.50 = 6.0 mL.",
            ],
            answer: "6.0 mL",
          },
          {
            type: "example",
            title: "JEE Main level: oxidation number from structure",
            problem: t`Find (a) the oxidation state of Cr in CrO$_5$ and (b) of each S in the tetrathionate ion, S$_4$O$_6^{2-}$.`,
            steps: [
              t`(a) CrO$_5$ has one Cr=O oxygen (−2) and two peroxide groups (four O at −1). $x - 2 - 4 = 0$, so $x = +6$.`,
              t`(b) Average: $4x + 6(-2) = -2 \Rightarrow x = +2.5$.`,
              t`Structure: $^-\text{O}_3\text{S–S–S–SO}_3^-$. Each end S is bonded to three O and is +5; the two middle S atoms are bonded only to S and are 0. Check: $2(+5) + 2(0) = +10 = 4 \times 2.5$.`,
            ],
            answer: "(a) +6; (b) two S at +5 and two S at 0 (average +2.5)",
          },
          {
            type: "example",
            title: "JEE Advanced level: double titration of a mixture",
            problem: "25 mL of a solution containing oxalic acid (H₂C₂O₄) and sodium oxalate (Na₂C₂O₄) needs 20 mL of 0.10 M NaOH for neutralisation. Another 25 mL portion needs 40 mL of 0.020 M KMnO₄ in acid. Find the millimoles of each in 25 mL.",
            steps: [
              "Let a = mmol H₂C₂O₄, b = mmol Na₂C₂O₄. Only oxalic acid reacts with NaOH (n = 2 as a diprotic acid).",
              "meq NaOH = 20 × 0.10 = 2.0 = 2a, so a = 1.0 mmol.",
              "Both contain C₂O₄²⁻ that KMnO₄ oxidises (n = 2 each). meq KMnO₄ = 40 × 0.020 × 5 = 4.0 = 2(a + b).",
              "a + b = 2.0, so b = 1.0 mmol.",
            ],
            answer: "1.0 mmol oxalic acid and 1.0 mmol sodium oxalate in 25 mL",
          },
          {
            type: "example",
            title: "JEE Advanced level: n-factor in disproportionation",
            problem: "In hot alkali, 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O. Find the equivalent mass of Cl₂ (M = 71).",
            steps: [
              "Of 6 Cl atoms, 5 go 0 → −1 (5 e⁻ gained) and 1 goes 0 → +5 (5 e⁻ lost): 5 electrons transferred per 3 Cl₂.",
              "n-factor per Cl₂ = 5/3.",
              t`Check with the formula: per Cl$_2$, the reduction change is $n_1 = 2$ (if all went to Cl$^-$) and the oxidation change is $n_2 = 10$ (if all went to ClO$_3^-$): $n = \dfrac{2 \times 10}{2 + 10} = \dfrac{5}{3}$.`,
              "E = 71 ÷ (5/3) = 42.6.",
            ],
            answer: "Equivalent mass of Cl₂ = 42.6",
          },
          {
            type: "mistake",
            wrong: "The n-factor of KMnO₄ is always 5, so its equivalent mass is always 31.6.",
            right: "n = 5 only in acidic medium (→ Mn²⁺). It is 3 in neutral or weakly alkaline medium (→ MnO₂) and 1 in strongly alkaline medium (→ MnO₄²⁻).",
            why: "Most titrations students see are in dilute H₂SO₄, so 5 gets memorised as a property of KMnO₄. The n-factor belongs to the reaction, not to the compound.",
          },
          {
            type: "mistake",
            wrong: "S₄O₆²⁻ contains sulphur in the +2.5 oxidation state.",
            right: "+2.5 is only an average. The actual states are +5 (two end S) and 0 (two middle S).",
            why: "The sum rule gives an average over all atoms of an element. When the atoms are in different bonding environments, only the structure gives each one's state.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each change to its n-factor.",
              pairs: [
                ["KMnO₄ → Mn²⁺ (acid)", "5"],
                ["K₂Cr₂O₇ → Cr³⁺ (acid)", "6"],
                ["FeC₂O₄ → Fe³⁺ + CO₂", "3"],
                ["H₂C₂O₄ → CO₂", "2"],
                ["Na₂S₂O₃ → Na₂S₄O₆", "1"],
              ],
              explain: "Count electrons per formula unit: two Cr each gain 3; Fe²⁺ loses 1 and oxalate loses 2; two thiosulphate ions together lose 2 electrons, so 1 each.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What volume (mL) of 0.020 M K₂Cr₂O₇ is needed to oxidise 30 mL of 0.10 M FeSO₄ in acid?",
                answer: 25,
                tolerance: 0.1,
                explain: "meq Fe²⁺ = 30 × 0.10 × 1 = 3.0. N(K₂Cr₂O₇) = 6 × 0.020 = 0.12. V = 3.0/0.12 = 25 mL.",
                difficulty: 2,
                hint: "n = 6 for dichromate, 1 for Fe²⁺.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "n-factor = electrons gained or lost per formula unit in that reaction; E = M/n; N = n × M.",
              "Law of equivalence: meq oxidant = meq reductant; no balanced equation needed.",
              "KMnO₄: n = 5 (acid), 3 (neutral), 1 (strongly alkaline); K₂Cr₂O₇: 6; FeC₂O₄: 3.",
              "Use structure for real oxidation states: Cr +6 in CrO₅, S +6 in H₂SO₅, S 0 and +5 in S₄O₆²⁻.",
              "Disproportionation: n = n₁n₂/(n₁ + n₂); for Cl₂ → Cl⁻ + ClO₃⁻, n = 5/3.",
            ],
          },
        ],
        flashcards: [
          { front: "n-factor (redox)", back: "Electrons lost or gained per formula unit of a reactant in a given reaction." },
          { front: "Law of equivalence", back: "Milliequivalents of oxidant = milliequivalents of reductant." },
          { front: "Equivalent mass of K₂Cr₂O₇ (acidic)", back: "294/6 = 49" },
          { front: "n-factor of KMnO₄ in neutral medium", back: "3 (MnO₄⁻ → MnO₂)" },
          { front: "Oxidation state of Cr in CrO₅", back: "+6 (two peroxide groups)" },
          { front: "Oxidation states of S in S₄O₆²⁻", back: "+5, 0, 0, +5 (average +2.5)" },
          { front: "Volume strength of H₂O₂", back: "Volume strength = 11.2 × molarity (litres of O₂ at STP per litre of solution)." },
          { front: "Normality from molarity", back: "N = n-factor × M" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the equivalent mass of K₂Cr₂O₇ (M = 294) when it is reduced to Cr³⁺ in acid.",
            answer: 49,
            tolerance: 0.1,
            explain: "Two Cr atoms each go +6 → +3: n = 6. E = 294/6 = 49.",
          },
          {
            kind: "mcq",
            q: "The oxidation state of S in H₂SO₅ (peroxomonosulphuric acid) is",
            options: ["+6", "+8", "+4", "+7"],
            answer: 0,
            explain: "H₂SO₅ has one O–O (peroxide) link: 2(+1) + x + 3(−2) + 2(−1) = 0 gives x = +6. +8 comes from wrongly taking all five O as −2.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The n-factor of KMnO₄ in strongly alkaline medium is",
            options: ["1", "3", "5", "7"],
            answer: 0,
            explain: "MnO₄⁻ → MnO₄²⁻ (manganate): Mn +7 → +6, one electron.",
          },
          {
            kind: "numeric",
            q: "What is the molarity of '11.2 volume' H₂O₂?",
            answer: 1,
            tolerance: 0.01,
            explain: "2H₂O₂ → 2H₂O + O₂: 1 mol H₂O₂ gives 11.2 L O₂ at STP. So 11.2 volume means 1 mol per litre: 1.0 M (2 N).",
            difficulty: 2,
            hint: "Volume strength = 11.2 × molarity.",
          },
          {
            kind: "multi",
            q: "Which species can act both as an oxidising agent and as a reducing agent?",
            options: ["H₂O₂", "SO₂", "HNO₂", "KMnO₄", "H₂S"],
            answers: [0, 1, 2],
            explain: "O (−1), S (+4) and N (+3) are in intermediate states. Mn in KMnO₄ (+7) can only be reduced; S in H₂S (−2) can only be oxidised.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A solution contains 1.0 mmol FeSO₄ and 1.0 mmol FeC₂O₄. What volume (mL) of 0.10 M KMnO₄ (acidic) oxidises it completely?",
            answer: 8,
            tolerance: 0.1,
            explain: "meq = 1.0 × 1 + 1.0 × 3 = 4.0. N(KMnO₄) = 0.50. V = 4.0/0.50 = 8.0 mL.",
            difficulty: 3,
            hint: "Oxalate in FeC₂O₄ is oxidised too.",
          },
          {
            kind: "mcq",
            q: "In 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O, the equivalent mass of Cl₂ (M = 71) is",
            options: ["42.6", "35.5", "71", "14.2"],
            answer: 0,
            explain: "5 electrons transfer per 3 Cl₂, so n = 5/3 and E = 71 × 3/5 = 42.6.",
            difficulty: 3,
            hint: "Count electrons per Cl₂, not per Cl atom that is reduced.",
          },
          {
            kind: "numeric",
            q: "How many mL of 0.050 M KMnO₄ (acidic) are needed to oxidise 0.63 g of oxalic acid dihydrate, H₂C₂O₄·2H₂O (M = 126)?",
            answer: 40,
            tolerance: 0.2,
            explain: "Moles = 0.63/126 = 5.0 × 10⁻³ = 5.0 mmol; meq = 5.0 × 2 = 10. N(KMnO₄) = 0.25. V = 10/0.25 = 40 mL.",
            difficulty: 2,
            hint: "Find mmol of oxalic acid first.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Equilibrium": "c11-che-equilibrium",
  "11:Redox Reactions": "c11-che-redox",
};
