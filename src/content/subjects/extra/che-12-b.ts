import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Chemical Kinetics (NCERT Class 12, Unit 3; ISC same title)          */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-chemical-kinetics",
    title: "Chemical Kinetics",
    icon: "⏱️",
    description: "Rate of reaction, rate law, order and molecularity, integrated rate equations, half-life, the Arrhenius equation, catalysts and collision theory.",
    lessons: [
      {
        slug: "c12-rate-and-rate-law",
        title: "Rate of Reaction, Rate Law and Order",
        summary: "Average and instantaneous rate, how rate is written for any balanced equation, the rate law, rate constant, order, molecularity and the rate-determining step.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥛",
            caption: "Milk left on a kitchen shelf in Chennai turns sour in a day, but in the fridge it lasts a week. Same reaction, very different speed. Chemical kinetics studies how fast reactions go and why.",
          },
          {
            type: "text",
            md: t`Thermodynamics tells us **whether** a reaction can happen; **chemical kinetics** tells us **how fast** it happens and by which path (the **mechanism**).

The **rate of a reaction** is the change in concentration of a reactant or product per unit time. For $R \rightarrow P$, the **average rate** over an interval $\Delta t$ is $-\dfrac{\Delta[R]}{\Delta t} = +\dfrac{\Delta[P]}{\Delta t}$. The minus sign makes the rate positive, because $[R]$ falls.

The average rate changes as the reaction slows down, so we also use the **instantaneous rate**: the rate at one moment, $-\dfrac{d[R]}{dt}$. On a concentration–time graph it is the **slope of the tangent** at that time. Units: $\text{mol L}^{-1}\,\text{s}^{-1}$ (for gases, $\text{atm s}^{-1}$ is also used).`,
          },
          {
            type: "formula",
            tex: t`aA + bB \rightarrow cC + dD:\qquad \text{rate} = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = \frac{1}{c}\frac{d[C]}{dt} = \frac{1}{d}\frac{d[D]}{dt}`,
            caption: "Dividing by the stoichiometric coefficient gives one value of rate for the whole reaction, whichever species you measure.",
          },
          {
            type: "example",
            title: "Average rate from concentration data",
            problem: t`For $2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2$, the concentration of $\text{N}_2\text{O}_5$ falls from 0.80 to 0.60 mol L⁻¹ in 20 min. Find the average rate of reaction and the rates of formation of $\text{NO}_2$ and $\text{O}_2$.`,
            steps: [
              t`Rate of disappearance of $\text{N}_2\text{O}_5 = -\dfrac{\Delta[\text{N}_2\text{O}_5]}{\Delta t} = \dfrac{0.20}{20} = 0.010$ mol L⁻¹ min⁻¹.`,
              t`Rate of reaction $= \dfrac{1}{2} \times 0.010 = 5.0 \times 10^{-3}$ mol L⁻¹ min⁻¹.`,
              t`Rate of formation of $\text{NO}_2 = 4 \times 5.0 \times 10^{-3} = 2.0 \times 10^{-2}$ mol L⁻¹ min⁻¹.`,
              t`Rate of formation of $\text{O}_2 = 1 \times 5.0 \times 10^{-3} = 5.0 \times 10^{-3}$ mol L⁻¹ min⁻¹.`,
            ],
            answer: t`Rate of reaction $= 5.0 \times 10^{-3}$; $\text{NO}_2$ forms at $2.0 \times 10^{-2}$ and $\text{O}_2$ at $5.0 \times 10^{-3}$ mol L⁻¹ min⁻¹.`,
          },
          {
            type: "text",
            md: t`Rate depends on **concentration** (or pressure for gases), **temperature** and a **catalyst**. The dependence on concentration is written as a **rate law** (rate equation), which is found **by experiment**, not from the balanced equation:

$\text{rate} = k[A]^x[B]^y$

Here $k$ is the **rate constant** (specific reaction rate): the rate when every concentration is 1 mol L⁻¹. It depends on temperature but not on concentration. The sum $x + y$ is the **order of the reaction**; $x$ is the order with respect to A. Order can be 0, a whole number or a fraction.`,
          },
          {
            type: "table",
            headers: ["Reaction", "Experimental rate law", "Order"],
            rows: [
              [t`$2\text{NO}(g) + \text{O}_2(g) \rightarrow 2\text{NO}_2(g)$`, t`$k[\text{NO}]^2[\text{O}_2]$`, "3"],
              [t`$\text{CHCl}_3 + \text{Cl}_2 \rightarrow \text{CCl}_4 + \text{HCl}$`, t`$k[\text{CHCl}_3][\text{Cl}_2]^{1/2}$`, "1.5"],
              [t`$\text{CH}_3\text{CHO}(g) \rightarrow \text{CH}_4(g) + \text{CO}(g)$`, t`$k[\text{CH}_3\text{CHO}]^{3/2}$`, "1.5"],
              [t`$\text{C}_2\text{H}_4 + \text{H}_2 \rightarrow \text{C}_2\text{H}_6$`, t`$k[\text{C}_2\text{H}_4]$`, "1"],
              [t`$2\text{NH}_3 \rightarrow \text{N}_2 + 3\text{H}_2$ (on hot Pt, high pressure)`, t`$k$`, "0"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{units of } k = (\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}:\quad n=0:\ \text{mol L}^{-1}\text{s}^{-1};\quad n=1:\ \text{s}^{-1};\quad n=2:\ \text{L mol}^{-1}\text{s}^{-1}`,
            caption: "Reading the units of k is the quickest way to find the order of a reaction.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The rate constant of a reaction has units $\text{L mol}^{-1}\,\text{s}^{-1}$. The order of the reaction is:`,
                options: ["0", "1", "2", "3"],
                answer: 2,
                explain: t`$(\text{mol L}^{-1})^{1-n} = \text{L mol}^{-1}$ means $1 - n = -1$, so $n = 2$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`An **elementary reaction** happens in a single step. Most reactions are **complex**: a sequence of elementary steps. The **molecularity** of an elementary step is the number of reacting species that must collide at once: unimolecular ($\text{NH}_4\text{NO}_2 \rightarrow \text{N}_2 + 2\text{H}_2\text{O}$), bimolecular ($2\text{HI} \rightarrow \text{H}_2 + \text{I}_2$) or termolecular ($2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2$). Molecularity above 3 is very rare, because three-body collisions are already unlikely.

In a complex reaction the **slowest step** controls the overall rate: it is the **rate-determining step**. For example, $2\text{H}_2\text{O}_2 \rightarrow 2\text{H}_2\text{O} + \text{O}_2$ in alkaline medium with iodide has rate $= k[\text{H}_2\text{O}_2][\text{I}^-]$ because it goes by
(1) $\text{H}_2\text{O}_2 + \text{I}^- \rightarrow \text{H}_2\text{O} + \text{IO}^-$ (slow)
(2) $\text{H}_2\text{O}_2 + \text{IO}^- \rightarrow \text{H}_2\text{O} + \text{I}^- + \text{O}_2$ (fast).
$\text{IO}^-$ is an **intermediate**: formed in one step and used up in the next.`,
          },
          {
            type: "table",
            headers: ["Order", "Molecularity"],
            rows: [
              ["Found by experiment", "Found from the mechanism (theoretical)"],
              ["Applies to elementary and complex reactions", "Applies only to elementary steps"],
              ["Can be 0 or a fraction", "Always a whole number: 1, 2 or 3; never 0"],
              ["For a complex reaction, set by the slowest step", "Has no meaning for an overall complex reaction"],
            ],
          },
          {
            type: "example",
            title: "Order from initial rates",
            problem: "For A + B → products, initial rates were measured at 298 K: (i) [A] = 0.10, [B] = 0.10 mol L⁻¹, rate = 2.0 × 10⁻³ mol L⁻¹ s⁻¹; (ii) [A] = 0.20, [B] = 0.10, rate = 8.0 × 10⁻³; (iii) [A] = 0.10, [B] = 0.20, rate = 4.0 × 10⁻³. Find the rate law and k.",
            steps: [
              t`(ii) ÷ (i): $[A]$ doubles with $[B]$ fixed and rate goes up 4 times: $2^x = 4$, so $x = 2$.`,
              t`(iii) ÷ (i): $[B]$ doubles with $[A]$ fixed and rate doubles: $2^y = 2$, so $y = 1$.`,
              t`Rate law: rate $= k[A]^2[B]$, overall order 3.`,
              t`From (i): $k = \dfrac{2.0 \times 10^{-3}}{(0.10)^2(0.10)} = \dfrac{2.0 \times 10^{-3}}{1.0 \times 10^{-3}} = 2.0$ L² mol⁻² s⁻¹.`,
            ],
            answer: t`rate $= k[A]^2[B]$, $k = 2.0$ L² mol⁻² s⁻¹.`,
          },
          {
            type: "mistake",
            wrong: t`For $2\text{N}_2\text{O}_5 \rightarrow 4\text{NO}_2 + \text{O}_2$ the rate law must be $k[\text{N}_2\text{O}_5]^2$, so the reaction is second order.`,
            right: t`Experiment gives rate $= k[\text{N}_2\text{O}_5]$: the reaction is first order. Exponents in a rate law come only from experiment.`,
            why: "Coefficients in a balanced equation equal the exponents only for an elementary step. Most reactions are complex, and the rate law follows the slowest step, which the overall equation does not show.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each statement true of order or of molecularity?",
              groups: ["Order", "Molecularity"],
              items: [
                { text: "Can be zero", group: 0, hint: "Zero-order reactions exist, e.g. NH₃ on hot platinum." },
                { text: "Can be 1.5", group: 0, hint: "Fractional values come from experiment, e.g. CH₃CHO decomposition." },
                { text: "Defined only for an elementary step", group: 1, hint: "It counts species colliding in one step." },
                { text: "Always 1, 2 or 3", group: 1, hint: "You cannot have half a molecule colliding." },
                { text: "Found from rate measurements", group: 0, hint: "It is the sum of exponents in the experimental rate law." },
                { text: "Counts species colliding at once", group: 1, hint: "This is its definition." },
              ],
              explain: "Order is an experimental quantity and can be zero or fractional. Molecularity is a theoretical count for one elementary step and is always a small whole number.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In 2- and 3-mark questions, write the general rate law first, then show the ratio of two experiments to find each order. Always state the **units of k**; examiners often give one mark for units. When a question says 'distinguish order and molecularity', two points from the table are enough for 2 marks.",
          },
          {
            type: "keypoints",
            items: [
              t`Rate $= -\frac{1}{a}\frac{d[A]}{dt} = \frac{1}{c}\frac{d[C]}{dt}$; instantaneous rate is the slope of the tangent.`,
              t`Rate law $= k[A]^x[B]^y$ is found by experiment; order $= x + y$ can be 0 or fractional.`,
              t`Units of $k$: $(\text{mol L}^{-1})^{1-n}\text{s}^{-1}$.`,
              "Molecularity applies to elementary steps only and is 1, 2 or 3.",
              "The slowest step of a mechanism is the rate-determining step.",
            ],
          },
        ],
        flashcards: [
          { front: "Instantaneous rate", back: "The rate at one moment, −d[R]/dt; the slope of the tangent to the concentration–time curve at that time." },
          { front: "Rate constant k", back: "The rate when all reactant concentrations are 1 mol L⁻¹. It changes with temperature, not with concentration." },
          { front: "Order of reaction", back: "The sum of the powers of concentration terms in the experimental rate law. It may be 0, whole or fractional." },
          { front: "Molecularity", back: "Number of reacting species colliding at once in an elementary step: 1, 2 or 3." },
          { front: "Units of k for a zero-order reaction", back: "mol L⁻¹ s⁻¹ (same as the units of rate)." },
          { front: "Rate-determining step", back: "The slowest elementary step in a mechanism; it decides the overall rate." },
          { front: "Rate law for decomposition of H₂O₂ with I⁻ in alkaline medium", back: "rate = k[H₂O₂][I⁻]; first order in each, second order overall." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`For $\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3$, which relation is correct?`,
            options: [
              t`$-\frac{d[\text{N}_2]}{dt} = \frac{1}{2}\frac{d[\text{NH}_3]}{dt}$`,
              t`$-\frac{d[\text{N}_2]}{dt} = 2\frac{d[\text{NH}_3]}{dt}$`,
              t`$-\frac{d[\text{H}_2]}{dt} = \frac{d[\text{NH}_3]}{dt}$`,
              t`$-3\frac{d[\text{H}_2]}{dt} = \frac{d[\text{NH}_3]}{dt}$`,
            ],
            answer: 0,
            explain: t`Rate $= -\frac{d[\text{N}_2]}{dt} = -\frac{1}{3}\frac{d[\text{H}_2]}{dt} = \frac{1}{2}\frac{d[\text{NH}_3]}{dt}$.`,
          },
          {
            kind: "numeric",
            q: t`For $2A \rightarrow 3B$, $[A]$ falls at 0.06 mol L⁻¹ min⁻¹. At what rate (mol L⁻¹ min⁻¹) does B form?`,
            answer: 0.09,
            tolerance: 0.001,
            unit: "mol L⁻¹ min⁻¹",
            explain: t`$-\frac{1}{2}\frac{d[A]}{dt} = \frac{1}{3}\frac{d[B]}{dt}$, so $\frac{d[B]}{dt} = \frac{3}{2} \times 0.06 = 0.09$.`,
          },
          {
            kind: "mcq",
            q: t`Rate $= k[A]^{1/2}[B]^{2}$. The overall order is:`,
            options: ["2", "2.5", "1.5", "1"],
            answer: 1,
            explain: "Add the exponents: 1/2 + 2 = 2.5.",
          },
          {
            kind: "truefalse",
            q: "Molecularity of a reaction can be zero.",
            answer: false,
            explain: "At least one species must take part in an elementary step, so molecularity is at least 1. Order, not molecularity, can be zero.",
          },
          {
            kind: "mcq",
            q: "For rate = k[A]², if the concentration of A is tripled the rate becomes:",
            options: ["3 times", "6 times", "9 times", "27 times"],
            answer: 2,
            explain: "Rate ∝ [A]², so 3² = 9 times.",
          },
          {
            kind: "multi",
            q: "Which statements about the rate constant k are correct?",
            options: [
              "Its value changes with temperature",
              "Its value changes as reactant is used up",
              "Its units depend on the order of reaction",
              "It equals the rate when all concentrations are 1 mol L⁻¹",
            ],
            answers: [0, 2, 3],
            explain: "k is constant at a fixed temperature even as concentrations fall; it is the rate that falls. Its units are (mol L⁻¹)^(1−n) s⁻¹.",
          },
          {
            kind: "numeric",
            q: "For A + B → P, doubling [A] alone doubles the rate, and doubling both [A] and [B] makes the rate 8 times. What is the order with respect to B?",
            answer: 2,
            explain: "Order in A is 1 (2¹ = 2). Doubling both: 2¹ × 2^y = 8, so 2^y = 4 and y = 2.",
            difficulty: 2,
            hint: "Find the order in A first, then divide it out.",
          },
          {
            kind: "mcq",
            q: "A reaction proceeds by: A + B → X (slow); X + B → P (fast). The rate law is:",
            options: ["rate = k[A][B]²", "rate = k[A][B]", "rate = k[X][B]", "rate = k[A]"],
            answer: 1,
            explain: "The slow first step decides the rate, and its molecularity gives the rate law: k[A][B]. X is an intermediate and does not appear.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-integrated-rate-equations",
        title: "Integrated Rate Equations and Half-life",
        summary: "Deriving the integrated equations for zero- and first-order reactions, their half-lives and graphs, first-order gas-phase reactions and pseudo first-order reactions.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Instantaneous rates are hard to measure. It is easier to measure **concentration at different times**. Integrating the rate law gives an **integrated rate equation** that links concentration and time directly. NCERT asks you to derive these for **zero-order** and **first-order** reactions.

The **half-life** $t_{1/2}$ is the time in which the concentration of a reactant falls to half its initial value.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Zero order**, $R \rightarrow P$: rate $= -\dfrac{d[R]}{dt} = k[R]^0 = k$.`,
              t`Rearrange: $d[R] = -k\,dt$. Integrate: $[R] = -kt + I$.`,
              t`At $t = 0$, $[R] = [R]_0$, so $I = [R]_0$. Hence $[R] = [R]_0 - kt$ and $k = \dfrac{[R]_0 - [R]}{t}$.`,
              t`Put $[R] = [R]_0/2$ at $t = t_{1/2}$: $t_{1/2} = \dfrac{[R]_0}{2k}$. Half-life is **proportional** to the initial concentration.`,
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**First order**: rate $= -\dfrac{d[R]}{dt} = k[R]$, so $\dfrac{d[R]}{[R]} = -k\,dt$.`,
              t`Integrate: $\ln[R] = -kt + I$. At $t = 0$, $I = \ln[R]_0$.`,
              t`So $\ln[R] = \ln[R]_0 - kt$, i.e. $k = \dfrac{1}{t}\ln\dfrac{[R]_0}{[R]} = \dfrac{2.303}{t}\log\dfrac{[R]_0}{[R]}$. Also $[R] = [R]_0 e^{-kt}$.`,
              t`At $t_{1/2}$, $[R]_0/[R] = 2$: $t_{1/2} = \dfrac{2.303 \log 2}{k} = \dfrac{0.693}{k}$. Half-life does **not** depend on initial concentration.`,
            ],
          },
          {
            type: "formula",
            tex: t`\text{Zero order: } [R] = [R]_0 - kt,\ \ t_{1/2} = \frac{[R]_0}{2k} \qquad \text{First order: } k = \frac{2.303}{t}\log\frac{[R]_0}{[R]},\ \ t_{1/2} = \frac{0.693}{k}`,
          },
          {
            type: "table",
            headers: ["Order", "Straight-line plot", "Slope", "Examples"],
            rows: [
              ["0", "[R] against t", "−k", "NH₃ on hot Pt (high pressure); HI on gold surface"],
              ["1", "ln[R] against t", "−k", "2N₂O₅ → 4NO₂ + O₂; hydrogenation of ethene; radioactive decay"],
              ["1", "log([R]₀/[R]) against t", "k/2.303 (passes through origin)", "same"],
            ],
          },
          {
            type: "example",
            title: "First-order reaction: from one point to another",
            problem: "A first-order reaction is 20% complete in 10 min. How long will it take to be 75% complete? (log 1.25 = 0.0969, log 2 = 0.3010)",
            steps: [
              t`After 10 min, 80% remains: $k = \dfrac{2.303}{10}\log\dfrac{100}{80} = 0.2303 \times 0.0969 = 2.232 \times 10^{-2}$ min⁻¹.`,
              t`75% complete means $[R] = [R]_0/4$, i.e. two half-lives.`,
              t`$t_{1/2} = \dfrac{0.693}{2.232 \times 10^{-2}} = 31.05$ min.`,
              t`$t_{75\%} = 2 \times 31.05 \approx 62.1$ min. (Check: $\frac{2.303}{k}\log 4 = \frac{2.303 \times 0.602}{0.02232} = 62.1$ min.)`,
            ],
            answer: "About 62 min.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A first-order reaction has k = 0.0231 min⁻¹. What is its half-life in minutes?",
                answer: 30,
                tolerance: 0.1,
                unit: "min",
                explain: t`$t_{1/2} = 0.693/0.0231 = 30$ min.`,
              },
              {
                kind: "numeric",
                q: "A zero-order reaction has [R]₀ = 0.40 mol L⁻¹ and k = 0.020 mol L⁻¹ min⁻¹. What is its half-life in minutes?",
                answer: 10,
                tolerance: 0.01,
                unit: "min",
                explain: t`$t_{1/2} = [R]_0/2k = 0.40/0.040 = 10$ min. (It is fully over at $[R]_0/k = 20$ min.)`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Gas-phase first-order reactions.** For $A(g) \rightarrow B(g) + C(g)$ at constant volume, let the initial pressure of A be $p_i$ and the total pressure at time $t$ be $p_t$. If A loses pressure $x$, then $p_t = (p_i - x) + x + x = p_i + x$, so $p_A = p_i - x = 2p_i - p_t$. Pressure is proportional to concentration, so

$k = \dfrac{2.303}{t}\log\dfrac{p_i}{2p_i - p_t}$`,
          },
          {
            type: "example",
            title: "Using total pressure",
            problem: "A(g) → B(g) + C(g) is first order. Starting with A at 0.50 atm, the total pressure after 100 s is 0.60 atm. Find k.",
            steps: [
              t`$p_A = 2p_i - p_t = 2(0.50) - 0.60 = 0.40$ atm.`,
              t`$k = \dfrac{2.303}{100}\log\dfrac{0.50}{0.40} = 0.02303 \times 0.0969$.`,
              t`$k = 2.23 \times 10^{-3}$ s⁻¹.`,
            ],
            answer: t`$k \approx 2.23 \times 10^{-3}$ s⁻¹.`,
          },
          {
            type: "text",
            md: t`**Pseudo first-order reactions** (in ISC; part of older NCERT and asked in JEE and NEET). If one reactant is in large excess, its concentration hardly changes, and the reaction behaves as first order. Acid hydrolysis of ethyl acetate, $\text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH}$, has rate $= k'[\text{ester}]$ because water is the solvent. Inversion of cane sugar, $\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{C}_6\text{H}_{12}\text{O}_6\ (\text{glucose}) + \text{C}_6\text{H}_{12}\text{O}_6\ (\text{fructose})$, is another example.`,
          },
          {
            type: "mistake",
            wrong: "Every reaction takes the same time to go from 100% to 50% as from 50% to 25%.",
            right: t`That is true only for **first-order** reactions. For zero order, $t_{1/2} = [R]_0/2k$, so each half-life is half the one before.`,
            why: "Radioactive decay makes the 'constant half-life' idea feel universal. But t½ is independent of concentration only when the order is 1; in general t½ ∝ [R]₀^(1−n).",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the first-order derivation steps in order.",
              items: [
                "Write −d[R]/dt = k[R]",
                "Separate variables: d[R]/[R] = −k dt",
                "Integrate: ln[R] = −kt + I",
                "Use t = 0, [R] = [R]₀ to get I = ln[R]₀",
                "Rearrange: k = (2.303/t) log([R]₀/[R])",
              ],
              explain: "Write the rate law, separate variables, integrate, fix the constant from the starting condition, then convert ln to log (ln x = 2.303 log x).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The derivation of the first-order equation and t½ = 0.693/k is a frequent 3-mark question. Show the integration constant step. In numericals, write the formula, substitute with units, and give the answer with units; a missing log value or unit costs marks.",
          },
          {
            type: "keypoints",
            items: [
              t`Zero order: $[R] = [R]_0 - kt$; $t_{1/2} = [R]_0/2k$ (∝ $[R]_0$).`,
              t`First order: $k = \frac{2.303}{t}\log\frac{[R]_0}{[R]}$; $t_{1/2} = 0.693/k$ (independent of $[R]_0$).`,
              t`Gas phase first order: $k = \frac{2.303}{t}\log\frac{p_i}{2p_i - p_t}$.`,
              "Straight lines: [R] vs t for zero order; ln[R] vs t for first order.",
              "Pseudo first order: one reactant in large excess, e.g. acid hydrolysis of ester, inversion of cane sugar.",
            ],
          },
        ],
        flashcards: [
          { front: "Integrated rate equation, zero order", back: "[R] = [R]₀ − kt" },
          { front: "Half-life of a zero-order reaction", back: "t½ = [R]₀/2k, directly proportional to initial concentration." },
          { front: "Integrated rate equation, first order", back: "k = (2.303/t) log([R]₀/[R]), or [R] = [R]₀e^(−kt)." },
          { front: "Half-life of a first-order reaction", back: "t½ = 0.693/k, independent of initial concentration." },
          { front: "Gas-phase first order A → B + C", back: "k = (2.303/t) log[pᵢ/(2pᵢ − pₜ)]." },
          { front: "Pseudo first-order reaction", back: "A higher-order reaction that behaves as first order because one reactant (often water) is in large excess." },
          { front: "Example of a zero-order reaction", back: "Decomposition of NH₃ on a hot platinum surface at high pressure." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For a first-order reaction, a plot of log[R] against t gives a straight line with slope:",
            options: ["−k", "−k/2.303", "k/2.303", "2.303/k"],
            answer: 1,
            explain: t`$\log[R] = \log[R]_0 - \dfrac{kt}{2.303}$, so the slope is $-k/2.303$.`,
          },
          {
            kind: "numeric",
            q: "The half-life of a first-order reaction is 693 s. What is k in units of 10⁻³ s⁻¹?",
            answer: 1,
            tolerance: 0.01,
            unit: "× 10⁻³ s⁻¹",
            explain: "k = 0.693/693 = 1.0 × 10⁻³ s⁻¹.",
          },
          {
            kind: "mcq",
            q: "The half-life of a reaction doubles when the initial concentration is doubled. The order is:",
            options: ["0", "1", "2", "3"],
            answer: 0,
            explain: "t½ = [R]₀/2k for zero order, so t½ is directly proportional to [R]₀.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A first-order reaction has t½ = 20 min. What percentage of reactant remains after 60 min?",
            answer: 12.5,
            tolerance: 0.1,
            unit: "%",
            explain: "60 min = 3 half-lives, so (1/2)³ = 1/8 = 12.5% remains.",
          },
          {
            kind: "truefalse",
            q: "Inversion of cane sugar in acid is a pseudo first-order reaction.",
            answer: true,
            explain: "Water is in large excess, so rate = k′[sucrose].",
          },
          {
            kind: "numeric",
            q: "A(g) → B(g) + C(g) is first order. Initial pressure of A is 0.40 atm; after some time the total pressure is 0.70 atm. What is the partial pressure of A (atm) now?",
            answer: 0.1,
            tolerance: 0.001,
            unit: "atm",
            explain: "p_A = 2pᵢ − pₜ = 0.80 − 0.70 = 0.10 atm.",
            difficulty: 2,
            hint: "Each unit of A lost adds one extra unit of gas.",
          },
          {
            kind: "mcq",
            q: "A zero-order reaction starts with 0.60 mol L⁻¹ of reactant and k = 0.030 mol L⁻¹ s⁻¹. After how many seconds is the reactant used up?",
            options: ["10 s", "20 s", "23.1 s", "40 s"],
            answer: 1,
            explain: "[R] = 0 when t = [R]₀/k = 0.60/0.030 = 20 s. (10 s is the half-life.)",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "For a first-order reaction, the time for 75% completion is ___ times the half-life.",
            answer: ["2", "two"],
            explain: "75% complete means 1/4 left = two halvings.",
          },
        ],
      },
      {
        slug: "c12-temperature-catalyst-collision",
        title: "Temperature, Activation Energy, Catalysts and Collision Theory",
        summary: "Why rate rises with temperature, the Arrhenius equation and its two-temperature form, how a catalyst works, and the collision theory of reaction rates.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🔥",
            caption: "A pressure cooker cooks dal faster because water boils at a higher temperature inside it. For many reactions, a 10 K rise roughly doubles the rate.",
          },
          {
            type: "text",
            md: t`For most reactions the **temperature coefficient** ($k_{T+10}/k_T$) is about 2 to 3. Arrhenius explained this. Reactants must first form an unstable **activated complex** of high energy, which then breaks into products. The extra energy needed to reach it is the **activation energy** $E_a$.

At a given temperature, molecules have a spread of kinetic energies (the **Maxwell–Boltzmann distribution**). Only the fraction with energy at least $E_a$ can react, and this fraction is $e^{-E_a/RT}$. Raising the temperature flattens and widens the curve and shifts its peak to higher energy, so the fraction with energy $\geq E_a$ grows sharply (roughly doubling for 10 K).`,
          },
          {
            type: "formula",
            tex: t`k = A\,e^{-E_a/RT} \qquad \ln k = \ln A - \frac{E_a}{RT} \qquad \log k = \log A - \frac{E_a}{2.303\,RT}`,
            caption: "A is the Arrhenius (frequency) factor. A plot of ln k against 1/T is a straight line of slope −Ea/R and intercept ln A.",
          },
          {
            type: "formula",
            tex: t`\log\frac{k_2}{k_1} = \frac{E_a}{2.303\,R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)`,
            caption: "Use R = 8.314 J K⁻¹ mol⁻¹; Ea then comes out in J mol⁻¹.",
          },
          {
            type: "example",
            title: "Activation energy from the 'doubling rule'",
            problem: "The rate constant of a reaction doubles when the temperature rises from 300 K to 310 K. Calculate Ea. (R = 8.314 J K⁻¹ mol⁻¹, log 2 = 0.3010)",
            steps: [
              t`$\log 2 = \dfrac{E_a}{2.303 \times 8.314}\left(\dfrac{310 - 300}{300 \times 310}\right)$.`,
              t`$E_a = \dfrac{2.303 \times 8.314 \times 0.3010 \times 93000}{10}$.`,
              t`$2.303 \times 8.314 = 19.147$; $19.147 \times 0.3010 = 5.763$; $5.763 \times 9300 = 53\,600$ J mol⁻¹.`,
            ],
            answer: t`$E_a \approx 53.6$ kJ mol⁻¹.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A graph of ln k against 1/T for a reaction has slope −5000 K. Ea is (R = 8.314 J K⁻¹ mol⁻¹):",
                options: ["5.0 kJ mol⁻¹", "41.6 kJ mol⁻¹", "95.7 kJ mol⁻¹", "601 kJ mol⁻¹"],
                answer: 1,
                explain: "Slope = −Ea/R, so Ea = 5000 × 8.314 = 41 570 J mol⁻¹ ≈ 41.6 kJ mol⁻¹. (95.7 kJ is what you get by wrongly multiplying by 2.303, as for a log plot.)",
              },
            ],
          },
          {
            type: "example",
            title: "Reading an Arrhenius equation",
            problem: "For a gas-phase reaction, log k = 12.0 − (6000 K)/T, with k in s⁻¹. Find A, Ea and k at 400 K.",
            steps: [
              t`Compare with $\log k = \log A - \dfrac{E_a}{2.303RT}$: $\log A = 12.0$, so $A = 1.0 \times 10^{12}$ s⁻¹.`,
              t`$\dfrac{E_a}{2.303R} = 6000$ K, so $E_a = 6000 \times 2.303 \times 8.314 = 114\,900$ J mol⁻¹ $\approx 114.9$ kJ mol⁻¹.`,
              t`At 400 K: $\log k = 12.0 - 15.0 = -3.0$, so $k = 1.0 \times 10^{-3}$ s⁻¹.`,
            ],
            answer: t`$A = 10^{12}$ s⁻¹, $E_a \approx 115$ kJ mol⁻¹, $k(400\text{ K}) = 1.0 \times 10^{-3}$ s⁻¹.`,
          },
          {
            type: "text",
            md: t`**Effect of a catalyst.** A **catalyst** increases the rate without being used up. It provides an **alternative path with lower activation energy**, often by forming an unstable intermediate with a reactant. It does **not** change $\Delta H$ or $\Delta G$ of the reaction, it does **not** make a non-spontaneous reaction go, and it speeds up the forward and backward reactions **equally**, so the equilibrium constant is unchanged; equilibrium is only reached sooner. A small amount of catalyst can convert a large amount of reactant.`,
          },
          {
            type: "mistake",
            wrong: "A catalyst pushes an equilibrium towards the products, so more ammonia forms in the Haber process.",
            right: "A catalyst lowers Ea for both directions by the same amount. The position of equilibrium and K stay the same; equilibrium is just reached faster.",
            why: "Because the catalyst makes product appear faster, it looks as if it makes more product. But it cannot change ΔG°, and K depends only on ΔG° and T.",
          },
          {
            type: "text",
            md: t`**Collision theory** (Arrhenius and Max Trautz) treats molecules as hard spheres. A reaction happens when molecules **collide** with (i) energy at least equal to the **threshold energy** and (ii) the **proper orientation**. The number of collisions per second per unit volume is the **collision frequency** $Z$. For $\text{CH}_3\text{Br} + \text{OH}^- \rightarrow \text{CH}_3\text{OH} + \text{Br}^-$, only a collision of $\text{OH}^-$ with the carbon atom, on the side away from Br, gives product. The **probability (steric) factor** $P$ accounts for orientation. Collision theory works well for simple molecules but less well for complex ones.`,
          },
          {
            type: "formula",
            tex: t`\text{rate} = P\,Z_{AB}\,e^{-E_a/RT}`,
            caption: "Z_AB = collision frequency of A and B; e^(−Ea/RT) = fraction of collisions with enough energy; P = fraction with proper orientation.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does a catalyst change this quantity?",
              groups: ["Changes", "Does not change"],
              items: [
                { text: "Activation energy", group: 0, hint: "It offers a lower-energy path." },
                { text: "Rate constant", group: 0, hint: "Lower Ea means larger k." },
                { text: "Enthalpy of reaction ΔH", group: 1, hint: "Reactants and products are the same, so ΔH is the same." },
                { text: "Equilibrium constant K", group: 1, hint: "Forward and backward rates rise equally." },
                { text: "Time to reach equilibrium", group: 0, hint: "Both directions are faster." },
                { text: "Gibbs energy change ΔG", group: 1, hint: "A state function; the path does not matter." },
              ],
              explain: "A catalyst changes only the path (Ea, k and time to equilibrium). State functions like ΔH and ΔG, and K, stay the same.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "CBSE asks collision theory only as an elementary idea, without calculation. ISC and Karnataka PUC papers often ask the two conditions for effective collisions and the meaning of the steric factor.",
          },
          {
            type: "keypoints",
            items: [
              t`Arrhenius: $k = Ae^{-E_a/RT}$; slope of $\ln k$ vs $1/T$ is $-E_a/R$.`,
              t`$\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\cdot\frac{T_2 - T_1}{T_1T_2}$.`,
              t`Fraction of molecules with energy $\geq E_a$ is $e^{-E_a/RT}$; it rises steeply with $T$.`,
              "A catalyst lowers Ea; it does not change ΔH, ΔG or K.",
              "Effective collisions need enough energy and proper orientation: rate = P Z e^(−Ea/RT).",
            ],
          },
        ],
        flashcards: [
          { front: "Arrhenius equation", back: "k = A e^(−Ea/RT)" },
          { front: "Activation energy", back: "The extra energy reactants need, above their average energy, to form the activated complex." },
          { front: "Slope of ln k vs 1/T", back: "−Ea/R (for log k vs 1/T it is −Ea/2.303R)." },
          { front: "Temperature coefficient", back: "Ratio of rate constants at temperatures 10 K apart, usually about 2 to 3." },
          { front: "What a catalyst does", back: "Provides a path of lower Ea; speeds up forward and backward reactions equally; K, ΔH, ΔG unchanged." },
          { front: "Two conditions for an effective collision", back: "Energy at least equal to the threshold energy, and proper orientation." },
          { front: "Probability (steric) factor P", back: "The fraction of energetic collisions that have the proper orientation." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In the Arrhenius equation, which quantity increases when temperature rises?",
            options: ["Ea", t`$e^{-E_a/RT}$`, "A, sharply", "The order"],
            answer: 1,
            explain: "Ea is (nearly) constant. The fraction of molecules with energy ≥ Ea, e^(−Ea/RT), grows as T rises.",
          },
          {
            kind: "numeric",
            q: "Ea = 0 for a hypothetical reaction with A = 4.0 × 10⁹ s⁻¹. What is k in units of 10⁹ s⁻¹?",
            answer: 4,
            tolerance: 0.01,
            unit: "× 10⁹ s⁻¹",
            explain: "With Ea = 0, e⁰ = 1, so k = A = 4.0 × 10⁹ s⁻¹.",
          },
          {
            kind: "truefalse",
            q: "A catalyst changes the equilibrium constant of a reaction.",
            answer: false,
            explain: "It lowers Ea of the forward and backward reactions equally, so K is unchanged.",
          },
          {
            kind: "mcq",
            q: "The rate of a reaction at 300 K becomes 4 times at 320 K. If the 'doubling per 10 K' rule holds, the temperature coefficient is about:",
            options: ["1", "2", "4", "8"],
            answer: 1,
            explain: "20 K = two 10 K steps: 2 × 2 = 4, so the temperature coefficient is 2.",
          },
          {
            kind: "multi",
            q: "Which factors appear in the collision theory expression for rate?",
            options: ["Collision frequency Z", "Probability factor P", "Equilibrium constant K", t`$e^{-E_a/RT}$`],
            answers: [0, 1, 3],
            explain: "Rate = P Z e^(−Ea/RT). K belongs to equilibrium, not to rate.",
          },
          {
            kind: "numeric",
            q: "log(k₂/k₁) = 1 between 300 K and 400 K. What is Ea in kJ mol⁻¹? (R = 8.314 J K⁻¹ mol⁻¹)",
            answer: 22.97,
            tolerance: 0.2,
            unit: "kJ mol⁻¹",
            explain: t`$E_a = \dfrac{2.303 \times 8.314 \times 1 \times 300 \times 400}{100} = 19.147 \times 1200 = 22\,976$ J mol⁻¹ ≈ 23.0 kJ mol⁻¹.`,
            difficulty: 2,
            hint: t`$T_1T_2/(T_2 - T_1) = 120000/100$.`,
          },
          {
            kind: "mcq",
            q: "Why do not all collisions with enough energy lead to reaction?",
            options: [
              "The molecules may not be properly oriented",
              "The catalyst is absent",
              "The order is fractional",
              "The temperature is too high",
            ],
            answer: 0,
            explain: "Orientation matters too; the probability factor P accounts for it.",
          },
        ],
      },
      {
        slug: "c12-kinetics-exam-edge",
        title: "Exam edge: Chemical Kinetics",
        summary: "What JEE, NEET, KCET and COMEDK ask from kinetics, half-life shortcuts, order from data, catalyst and Arrhenius ratios, parallel reactions and mechanisms.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Kinetics gives 1–2 questions in almost every NEET, KCET and JEE Main paper, and a numerical or multi-correct question in JEE Advanced. The favourites are: **half-life and percentage completed** (first order), **order from initial-rate or half-life data**, **units of k**, **Arrhenius two-temperature and catalyst problems**, and, in JEE Advanced, **parallel reactions and mechanisms with a fast pre-equilibrium**.",
          },
          {
            type: "table",
            headers: ["Shortcut (first order unless stated)", "Result", "Safe when"],
            rows: [
              ["Fraction left after n half-lives", "(1/2)ⁿ", "first order only"],
              ["t₇₅% and t₈₇.₅%", "2 t½ and 3 t½", "first order only"],
              ["t₉₉.₉% / t½", "≈ 10 (exactly 3/log 2 = 9.97)", "first order only"],
              ["t₉₉% / t₉₀%", "2", "first order only"],
              ["Mean life τ", "1/k = 1.44 t½", "first order"],
              ["Half-life and order", "t½ ∝ [R]₀^(1−n)", "any order n (simple rate law)"],
              ["Ea(forward) − Ea(backward)", "ΔH of the reaction", "always"],
            ],
          },
          {
            type: "formula",
            tex: t`\frac{(t_{1/2})_1}{(t_{1/2})_2} = \left(\frac{[R]_{0,2}}{[R]_{0,1}}\right)^{n-1} \qquad \frac{k_{\text{cat}}}{k} = e^{(E_a - E_a')/RT}`,
            caption: "Left: order from two half-lives. Right: rate enhancement by a catalyst that lowers Ea to Ea′ at the same T (and same A).",
          },
          {
            type: "example",
            title: "KCET / NEET level",
            problem: "A first-order reaction has t½ = 30 min. How long does it take for 87.5% of the reactant to react?",
            steps: [
              "87.5% reacted means 12.5% = 1/8 left.",
              "1/8 = (1/2)³, so 3 half-lives are needed.",
              "t = 3 × 30 = 90 min.",
            ],
            answer: "90 min.",
          },
          {
            type: "example",
            title: "JEE Main level: order from half-lives",
            problem: "For a reaction A → products, t½ = 100 s when [A]₀ = 0.10 mol L⁻¹ and t½ = 50 s when [A]₀ = 0.20 mol L⁻¹. Find the order and k.",
            steps: [
              t`$\dfrac{100}{50} = \left(\dfrac{0.20}{0.10}\right)^{n-1}$, so $2 = 2^{n-1}$ and $n = 2$.`,
              t`For second order, $t_{1/2} = \dfrac{1}{k[A]_0}$.`,
              t`$k = \dfrac{1}{100 \times 0.10} = 0.10$ L mol⁻¹ s⁻¹.`,
            ],
            answer: "Second order; k = 0.10 L mol⁻¹ s⁻¹.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "For a first-order reaction, the ratio t₉₉% : t₉₀% is:",
                options: ["1.1 : 1", "2 : 1", "10 : 1", "9 : 1"],
                answer: 1,
                explain: "t ∝ log([R]₀/[R]): log 100 / log 10 = 2/1.",
              },
            ],
          },
          {
            type: "example",
            title: "NEET level: catalyst and Arrhenius",
            problem: "A catalyst lowers Ea of a reaction by 20 kJ mol⁻¹ at 300 K, with A unchanged. By what factor does the rate increase? (R = 8.314 J K⁻¹ mol⁻¹)",
            steps: [
              t`$\dfrac{k_{\text{cat}}}{k} = e^{\Delta E_a/RT} = e^{20000/(8.314 \times 300)}$.`,
              t`$\dfrac{20000}{2494.2} = 8.02$.`,
              t`$e^{8.02} = e^{8} \times e^{0.02} \approx 2981 \times 1.02 \approx 3.0 \times 10^{3}$.`,
            ],
            answer: "About 3 × 10³ times faster.",
          },
          {
            type: "example",
            title: "JEE Advanced level: parallel first-order reactions",
            problem: "A decomposes by two first-order paths at the same time: A → B (k₁ = 3.0 × 10⁻³ s⁻¹, Ea₁ = 60 kJ mol⁻¹) and A → C (k₂ = 1.0 × 10⁻³ s⁻¹, Ea₂ = 80 kJ mol⁻¹). Find (a) the percentage of B in the product, (b) t½ of A, (c) the overall activation energy.",
            steps: [
              t`Both paths remove A: $-\dfrac{d[A]}{dt} = (k_1 + k_2)[A]$, so $k = 4.0 \times 10^{-3}$ s⁻¹.`,
              t`(a) B and C form in the ratio $k_1 : k_2 = 3 : 1$, so B = 75% of the product at all times.`,
              t`(b) $t_{1/2} = 0.693/(4.0 \times 10^{-3}) = 173$ s.`,
              t`(c) Differentiating $\ln(k_1 + k_2)$ with respect to $1/T$ gives $E_a = \dfrac{k_1E_{a1} + k_2E_{a2}}{k_1 + k_2} = \dfrac{3(60) + 1(80)}{4} = 65$ kJ mol⁻¹.`,
            ],
            answer: "75% B; t½ ≈ 173 s; overall Ea = 65 kJ mol⁻¹.",
          },
          {
            type: "mistake",
            wrong: "Half-life is a constant for every reaction, so if t½ = 10 min at 0.1 M, it is also 10 min at 0.2 M.",
            right: "Only first-order half-life is independent of [R]₀. Use t½ ∝ [R]₀^(1−n): zero order doubles, second order halves when [R]₀ doubles.",
            why: "Most solved examples use first-order reactions, so the constant half-life is remembered as a general rule. Exams set half-life data precisely to test the order.",
          },
          {
            type: "mistake",
            wrong: "In the two-temperature Arrhenius equation I can put Ea in kJ and R = 8.314, and use ln with the 2.303 factor too.",
            right: "Keep units matching: Ea in J mol⁻¹ with R = 8.314 J K⁻¹ mol⁻¹. Use 2.303 only with log (base 10), never with ln.",
            why: "Mixing kJ with J gives an answer 1000 times off, and using 2.303 with ln gives an answer 2.303 times off; both appear as wrong options.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each observation with the order it shows.",
              pairs: [
                ["t½ doubles when [R]₀ doubles", "Zero order"],
                ["t½ unchanged when [R]₀ doubles", "First order"],
                ["t½ halves when [R]₀ doubles", "Second order"],
                ["[R] vs t is a straight line", "Zero order (linear fall)"],
                ["ln[R] vs t is a straight line", "First order (exponential fall)"],
              ],
              explain: "t½ ∝ [R]₀^(1−n) links half-life data to order; the straight-line plot does the same for concentration–time data.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Mechanism with a fast pre-equilibrium",
            md: t`If a fast reversible step comes before the slow step, write the slow step's rate, then replace the intermediate using the equilibrium constant of the fast step. Example: $\text{NO} + \text{Br}_2 \rightleftharpoons \text{NOBr}_2$ (fast, $K$), $\text{NOBr}_2 + \text{NO} \rightarrow 2\text{NOBr}$ (slow). Rate $= k[\text{NOBr}_2][\text{NO}] = kK[\text{NO}]^2[\text{Br}_2]$: third order.`,
          },
          {
            type: "keypoints",
            items: [
              "First order: n half-lives leave (1/2)ⁿ; t₉₉.₉% ≈ 10 t½; t₉₉% = 2 t₉₀%.",
              "t½ ∝ [R]₀^(1−n) gives the order from half-life data.",
              "Catalyst: k_cat/k = e^(ΔEa/RT); ΔH = Ea(f) − Ea(b).",
              "Parallel paths: k = k₁ + k₂; product ratio = k₁ : k₂; Ea = (k₁Ea₁ + k₂Ea₂)/(k₁ + k₂).",
              "Replace intermediates using a fast pre-equilibrium; never leave them in the final rate law.",
            ],
          },
        ],
        flashcards: [
          { front: "t₉₉.₉% for a first-order reaction", back: "About 10 half-lives (3/log 2 = 9.97)." },
          { front: "t½ and order (general)", back: "t½ ∝ [R]₀^(1−n)." },
          { front: "Half-life of a second-order reaction (A → P)", back: "t½ = 1/(k[A]₀)." },
          { front: "Mean life of a first-order reaction", back: "τ = 1/k = 1.44 t½." },
          { front: "Ea(forward) − Ea(backward)", back: "Equals ΔH of the reaction. Endothermic reactions have Ea(f) > Ea(b)." },
          { front: "Parallel reactions A → B (k₁), A → C (k₂)", back: "Overall k = k₁ + k₂; [B]/[C] = k₁/k₂ at all times." },
          { front: "Rate gain from a catalyst lowering Ea by ΔEa", back: "k_cat/k = e^(ΔEa/RT), if A is unchanged." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A first-order reaction has t½ = 20 min. The fraction of reactant left after 1 hour is:",
            options: ["1/3", "1/6", "1/8", "1/9"],
            answer: 2,
            explain: "1 hour = 3 half-lives: (1/2)³ = 1/8.",
          },
          {
            kind: "numeric",
            q: "k = 0.0693 min⁻¹ for a first-order reaction. Roughly how many minutes does 99.9% completion take?",
            answer: 100,
            tolerance: 1,
            unit: "min",
            explain: "t½ = 10 min and t₉₉.₉% ≈ 10 t½ = 100 min (exactly 2.303 × 3/0.0693 = 99.7 min).",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The slope of a plot of log k against 1/T is −2.0 × 10⁴ K. Ea is about:",
            options: ["166 kJ mol⁻¹", "383 kJ mol⁻¹", "20 kJ mol⁻¹", "46 kJ mol⁻¹"],
            answer: 1,
            explain: "Slope = −Ea/2.303R, so Ea = 2.0 × 10⁴ × 2.303 × 8.314 = 3.83 × 10⁵ J mol⁻¹. (166 kJ omits 2.303.)",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which statements are correct for a catalysed reaction?",
            options: [
              "Ea of both forward and backward reactions is lowered by the same amount",
              "ΔH becomes less negative",
              "Equilibrium is attained faster",
              "K increases",
            ],
            answers: [0, 2],
            explain: "A catalyst lowers both barriers equally and so gets to the same equilibrium faster. ΔH and K are unchanged.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A → B (k₁) and A → C (k₂) are parallel first-order paths with k₁ = 2k₂. What percentage of the product is B?",
            answer: 66.7,
            tolerance: 0.5,
            unit: "%",
            explain: "B fraction = k₁/(k₁ + k₂) = 2/3 = 66.7%.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Mechanism: NO + Br₂ ⇌ NOBr₂ (fast); NOBr₂ + NO → 2NOBr (slow). The order with respect to NO is:",
            options: ["1", "2", "3", "0"],
            answer: 1,
            explain: "Rate = k[NOBr₂][NO] = kK[NO]²[Br₂]: second order in NO, third order overall.",
            difficulty: 3,
            hint: "Replace [NOBr₂] using K of the fast step.",
          },
          {
            kind: "numeric",
            q: "For an endothermic reaction ΔH = +40 kJ mol⁻¹ and Ea(forward) = 90 kJ mol⁻¹. What is Ea(backward) in kJ mol⁻¹?",
            answer: 50,
            explain: "Ea(f) − Ea(b) = ΔH, so Ea(b) = 90 − 40 = 50 kJ mol⁻¹.",
          },
          {
            kind: "numeric",
            q: "Two first-order reactions have equal A. Reaction 1 has Ea = 50 kJ mol⁻¹, reaction 2 has Ea = 55 kJ mol⁻¹. At 300 K, find k₁/k₂ (R = 8.314 J K⁻¹ mol⁻¹), to one decimal place.",
            answer: 7.4,
            tolerance: 0.15,
            explain: "k₁/k₂ = e^(5000/2494.2) = e^2.005 ≈ 7.4.",
            difficulty: 3,
            hint: "Use k₁/k₂ = e^((Ea₂ − Ea₁)/RT).",
          },
          {
            kind: "mcq",
            q: "The rate constant of a reaction is 2.5 × 10⁻⁴ mol L⁻¹ s⁻¹. If [R]₀ is doubled, the half-life:",
            options: ["is halved", "stays the same", "doubles", "becomes four times"],
            answer: 2,
            explain: "The units of k show zero order, for which t½ = [R]₀/2k doubles with [R]₀.",
            difficulty: 2,
            hint: "Read the order from the units of k first.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Chemical Kinetics": "c12-chemical-kinetics",
};
