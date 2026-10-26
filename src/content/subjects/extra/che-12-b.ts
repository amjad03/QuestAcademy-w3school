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
            md: t`**Collision theory** (Max Trautz and William Lewis, 1916–18) treats molecules as hard spheres. A reaction happens when molecules **collide** with (i) energy at least equal to the **threshold energy** and (ii) the **proper orientation**. The number of collisions per second per unit volume is the **collision frequency** $Z$. For $\text{CH}_3\text{Br} + \text{OH}^- \rightarrow \text{CH}_3\text{OH} + \text{Br}^-$, only a collision of $\text{OH}^-$ with the carbon atom, on the side away from Br, gives product. The **probability (steric) factor** $P$ accounts for orientation. Collision theory works well for simple molecules but less well for complex ones.`,
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
            md: "Where CBSE includes collision theory, it is only an elementary idea, without calculation; this part has been trimmed in recent syllabi, so check the current year's list. ISC and Karnataka PUC papers often ask the two conditions for effective collisions and the meaning of the steric factor.",
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
  /* ------------------------------------------------------------------ */
  /* The d- and f-Block Elements (NCERT Unit 4) = d- and f-Block Elements (ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-d-and-f-block",
    title: "The d- and f-Block Elements",
    icon: "⚙️",
    description: "Transition elements: configuration, trends, oxidation states, magnetism, colour and catalysis; potassium dichromate and permanganate; lanthanoids and actinoids.",
    lessons: [
      {
        slug: "c12-transition-trends",
        title: "Transition Elements: Configuration and Trends",
        summary: "Position of the d-block, what makes an element a transition element, electronic configurations, atomic size, atomisation and ionisation enthalpies, oxidation states and electrode potentials.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏗️",
            caption: "The steel of the Chenab rail bridge, copper wiring at home, the titanium in an aircraft engine and the chromium on a bicycle handle are all d-block metals.",
          },
          {
            type: "text",
            md: t`The **d-block** is groups 3–12 of the periodic table, where electrons enter the $(n-1)d$ orbitals. It has four rows: **3d** (Sc–Zn), **4d** (Y–Cd), **5d** (La, Hf–Hg) and **6d** (Ac, Rf–Cn).

A **transition element** is one that has an **incompletely filled d subshell in its atom or in any of its common ions**. By this rule Zn, Cd and Hg ($d^{10}$ in the atom and in $M^{2+}$) are **not** transition elements, though they are studied with them. Copper is one: its common ion $\text{Cu}^{2+}$ is $3d^9$. The general configuration is $(n-1)d^{1-10}\,ns^{1-2}$; Pd ($4d^{10}5s^0$) is an exception.`,
          },
          {
            type: "table",
            headers: ["Element", "Z", "Configuration", "Common oxidation states"],
            rows: [
              ["Sc", "21", t`$[\text{Ar}]3d^14s^2$`, "+3"],
              ["Ti", "22", t`$[\text{Ar}]3d^24s^2$`, "+4 (+2, +3)"],
              ["V", "23", t`$[\text{Ar}]3d^34s^2$`, "+2 to +5"],
              ["Cr", "24", t`$[\text{Ar}]3d^54s^1$`, "+3, +6 (+2)"],
              ["Mn", "25", t`$[\text{Ar}]3d^54s^2$`, "+2 to +7 (+2, +4, +7 common)"],
              ["Fe", "26", t`$[\text{Ar}]3d^64s^2$`, "+2, +3"],
              ["Co", "27", t`$[\text{Ar}]3d^74s^2$`, "+2, +3"],
              ["Ni", "28", t`$[\text{Ar}]3d^84s^2$`, "+2"],
              ["Cu", "29", t`$[\text{Ar}]3d^{10}4s^1$`, "+2, +1"],
              ["Zn", "30", t`$[\text{Ar}]3d^{10}4s^2$`, "+2"],
            ],
          },
          {
            type: "text",
            md: t`**Physical properties.** Transition elements are hard, lustrous metals with high melting and boiling points and high **enthalpies of atomisation**, because many unpaired $(n-1)d$ and $ns$ electrons take part in metallic bonding. The values peak near the middle of each series (about $d^5$) and are lowest for Zn. 4d and 5d metals have higher enthalpies of atomisation than 3d metals, so heavy transition metals more often form metal–metal bonds.

**Atomic and ionic size** decreases slowly across a series, because each new electron goes into an inner d orbital that shields the outer electrons poorly. The 4d and 5d rows have almost the same radii (Zr 160 pm, Hf 159 pm) because of the **lanthanoid contraction**: the 4f electrons filled before Hf shield poorly. Density rises across the 3d series from Ti to Cu.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is NOT a transition element by the IUPAC definition?",
                options: ["Scandium", "Copper", "Zinc", "Silver"],
                answer: 2,
                explain: t`Zn is $3d^{10}$ in the atom and in $\text{Zn}^{2+}$, so it never has a partly filled d subshell. Sc ($3d^1$), Cu ($\text{Cu}^{2+}$, $3d^9$) and Ag ($\text{Ag}^{2+}$, $4d^9$) do.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Ionisation enthalpies** rise across a series, but irregularly, because the $4s$ and $3d$ energies are close and the stability of $d^5$ and $d^{10}$ affects the values. Cr and Cu have high second ionisation enthalpies (the electron comes from $d^5$ or $d^{10}$); the very high third ionisation enthalpies of Ni, Cu and Zn explain why they rarely go above +2.

**Oxidation states.** Because both $ns$ and $(n-1)d$ electrons can be lost, transition elements show **variable oxidation states**, differing by one unit (Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺). The most states appear in the middle: Mn shows every state from +2 to +7. Sc (+3) and Zn (+2) show few. The highest states appear in oxides and fluorides. **Oxygen** stabilises higher states better than fluorine because it forms multiple bonds: Mn's highest fluoride is $\text{MnF}_4$ but its highest oxide is $\text{Mn}_2\text{O}_7$ (+7). Osmium reaches +8 in $\text{OsO}_4$. In water, $\text{Cu}^+$ disproportionates, $2\text{Cu}^+ \rightarrow \text{Cu}^{2+} + \text{Cu}$, because the very negative hydration enthalpy of $\text{Cu}^{2+}$ more than pays for the second ionisation enthalpy.`,
          },
          {
            type: "table",
            headers: ["Metal", "E° (M²⁺/M) / V", "E° (M³⁺/M²⁺) / V"],
            rows: [
              ["Ti", "−1.63", "−0.37"],
              ["V", "−1.18", "−0.26"],
              ["Cr", "−0.90", "−0.41"],
              ["Mn", "−1.18", "+1.57"],
              ["Fe", "−0.44", "+0.77"],
              ["Co", "−0.28", "+1.97"],
              ["Ni", "−0.25", "—"],
              ["Cu", "+0.34", "—"],
              ["Zn", "−0.76", "—"],
            ],
          },
          {
            type: "text",
            md: t`**Reading the table.** Cu is the only 3d metal with a positive $E^\circ(\text{M}^{2+}/\text{M})$: its high enthalpy of atomisation plus ionisation enthalpies are not balanced by the hydration enthalpy of $\text{Cu}^{2+}$, so Cu does not liberate $\text{H}_2$ from dilute acids. Mn, Ni and Zn are more negative than the trend predicts: $\text{Mn}^{2+}$ is $d^5$ and $\text{Zn}^{2+}$ is $d^{10}$ (stable), and $\text{Ni}^{2+}$ has a very negative hydration enthalpy.

The large positive $E^\circ(\text{Mn}^{3+}/\text{Mn}^{2+})$ shows how stable $\text{Mn}^{2+}$ ($d^5$) is. The small $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+})$ reflects the extra stability of $\text{Fe}^{3+}$ ($d^5$). The negative $E^\circ(\text{Cr}^{3+}/\text{Cr}^{2+})$ means $\text{Cr}^{2+}$ is easily oxidised to $\text{Cr}^{3+}$, which is stable ($t_{2g}^3$).`,
          },
          {
            type: "example",
            title: "Reasoning with configurations",
            problem: t`$\text{Cr}^{2+}$ and $\text{Mn}^{3+}$ are both $d^4$. Why is $\text{Cr}^{2+}$ a reducing agent while $\text{Mn}^{3+}$ is an oxidising agent?`,
            steps: [
              t`$\text{Cr}^{2+}$ ($d^4$) → $\text{Cr}^{3+}$ ($d^3$) by losing one electron. $d^3$ fills the $t_{2g}$ set exactly half, which is very stable in water. So $\text{Cr}^{2+}$ gives away electrons: it is a **reducing agent** ($E^\circ = -0.41$ V).`,
              t`$\text{Mn}^{3+}$ ($d^4$) → $\text{Mn}^{2+}$ ($d^5$) by gaining one electron. $d^5$ is half-filled and extra stable. So $\text{Mn}^{3+}$ takes electrons: it is an **oxidising agent** ($E^\circ = +1.57$ V).`,
              "Both changes move towards a more stable configuration; one by losing, the other by gaining an electron.",
            ],
            answer: t`$\text{Cr}^{2+}$ reaches stable $d^3$ by oxidation; $\text{Mn}^{3+}$ reaches stable $d^5$ by reduction.`,
          },
          {
            type: "mistake",
            wrong: t`The 4s orbital filled first, so it is emptied last: $\text{Fe}^{2+}$ is $[\text{Ar}]3d^44s^2$.`,
            right: t`On ionisation the 4s electrons go first: $\text{Fe}^{2+}$ is $[\text{Ar}]3d^6$ and $\text{Fe}^{3+}$ is $[\text{Ar}]3d^5$.`,
            why: "The aufbau order describes filling in neutral atoms. Once the 3d orbitals hold electrons, they lie below 4s in energy, so the outer 4s electrons are lost first.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Transition element or not (IUPAC definition)?",
              groups: ["Transition element", "Not a transition element"],
              items: [
                { text: "Sc", group: 0, hint: "Its atom is 3d¹, partly filled." },
                { text: "Zn", group: 1, hint: "3d¹⁰ in the atom and in Zn²⁺." },
                { text: "Cu", group: 0, hint: "Cu²⁺ is 3d⁹." },
                { text: "Cd", group: 1, hint: "4d¹⁰ in the atom and in Cd²⁺." },
                { text: "Hg", group: 1, hint: "5d¹⁰ in its atom and common ions." },
                { text: "Ag", group: 0, hint: "Ag²⁺ (4d⁹) is known, though Ag⁺ is common." },
              ],
              explain: "The test is a partly filled d subshell in the atom or a common ion. Zn, Cd and Hg fail it; Cu, Ag and Au pass through their +2 or +3 ions.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "'Give reasons' questions (1 mark each) come almost every year: Zn is not a transition element; Cu has positive E°; Mn shows the most oxidation states; Zr and Hf have similar radii; Cr²⁺ is reducing but Mn³⁺ is oxidising. Write the configuration in your answer; it is usually the scoring point.",
          },
          {
            type: "keypoints",
            items: [
              "Transition element: partly filled d subshell in the atom or a common ion; Zn, Cd, Hg are not.",
              t`Configuration $(n-1)d^{1-10}ns^{1-2}$; Cr $3d^54s^1$ and Cu $3d^{10}4s^1$ are exceptions.`,
              "Enthalpy of atomisation peaks mid-series; Zn lowest. Zr ≈ Hf in size (lanthanoid contraction).",
              "Mn shows +2 to +7; oxygen stabilises higher states better than fluorine (Mn₂O₇ vs MnF₄).",
              "Cu: only 3d metal with positive E°(M²⁺/M); Cu⁺ disproportionates in water.",
            ],
          },
        ],
        flashcards: [
          { front: "Transition element (definition)", back: "An element with an incompletely filled d subshell in its atom or in any of its common ions." },
          { front: "Why Zn, Cd, Hg are not transition elements", back: "They have full d¹⁰ configurations in the atom and in their common M²⁺ ions." },
          { front: "Configurations of Cr and Cu", back: "Cr [Ar]3d⁵4s¹; Cu [Ar]3d¹⁰4s¹ (extra stability of half-filled and full d)." },
          { front: "Element of the 3d series with the most oxidation states", back: "Manganese: +2 to +7." },
          { front: "Highest oxide and fluoride of Mn", back: "Mn₂O₇ (+7) and MnF₄ (+4); oxygen forms multiple bonds and stabilises higher states." },
          { front: "Why Cu does not liberate H₂ from dilute acids", back: "E°(Cu²⁺/Cu) = +0.34 V is positive." },
          { front: "Why Zr and Hf have nearly equal radii", back: "Lanthanoid contraction: poor shielding by 4f electrons cancels the expected increase in size." },
          { front: "Disproportionation of Cu⁺", back: "2Cu⁺(aq) → Cu²⁺(aq) + Cu(s); Cu²⁺ has a much more negative hydration enthalpy." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The electronic configuration of $\text{Mn}^{2+}$ is:`,
            options: [t`$[\text{Ar}]3d^34s^2$`, t`$[\text{Ar}]3d^5$`, t`$[\text{Ar}]3d^44s^1$`, t`$[\text{Ar}]3d^54s^2$`],
            answer: 1,
            explain: t`Mn is $3d^54s^2$; remove the two 4s electrons first to get $3d^5$.`,
          },
          {
            kind: "mcq",
            q: "Which 3d metal has the lowest enthalpy of atomisation?",
            options: ["Cr", "Fe", "Zn", "V"],
            answer: 2,
            explain: "Zn has no unpaired d electrons for metallic bonding, so its metallic bonds are weakest.",
          },
          {
            kind: "truefalse",
            q: "Oxygen can stabilise higher oxidation states of transition metals better than fluorine because it can form multiple bonds with the metal.",
            answer: true,
            explain: "That is why Mn reaches +7 in Mn₂O₇ but only +4 in MnF₄.",
          },
          {
            kind: "mcq",
            q: t`Which ion is most stable to oxidation in aqueous solution?`,
            options: [t`$\text{Cr}^{2+}$`, t`$\text{Fe}^{2+}$`, t`$\text{Mn}^{2+}$`, t`$\text{Ti}^{2+}$`],
            answer: 2,
            explain: t`$E^\circ(\text{Mn}^{3+}/\text{Mn}^{2+}) = +1.57$ V is the most positive, so $\text{Mn}^{2+}$ ($d^5$) is hardest to oxidise.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which statements about 3d metals are correct?",
            options: [
              "Cu is the only one with a positive E°(M²⁺/M)",
              "Sc shows oxidation states +2 to +7",
              "Ionisation enthalpies rise across the series, but irregularly",
              "Cu⁺ is stable in water",
            ],
            answers: [0, 2],
            explain: "Sc shows essentially only +3 (Mn shows +2 to +7). Cu⁺ disproportionates into Cu²⁺ and Cu in water.",
          },
          {
            kind: "fill",
            q: "The highest oxidation state shown by any transition element is +8, for example by ___ in its tetroxide.",
            answer: ["osmium", "Os", "ruthenium", "Ru"],
            explain: "OsO₄ (and RuO₄) contain the metal in the +8 state.",
          },
          {
            kind: "mcq",
            q: t`Why is $\text{Cr}^{2+}$ a stronger reducing agent than $\text{Fe}^{2+}$?`,
            options: [
              t`$\text{Cr}^{2+} \rightarrow \text{Cr}^{3+}$ gives stable $d^3$ ($t_{2g}^3$); $\text{Fe}^{2+} \rightarrow \text{Fe}^{3+}$ needs $E^\circ$ of +0.77 V to be overcome`,
              t`Cr is heavier than Fe`,
              t`$\text{Cr}^{2+}$ has more unpaired electrons than $\text{Fe}^{2+}$`,
              t`$\text{Fe}^{2+}$ is $d^5$`,
            ],
            answer: 0,
            explain: t`$E^\circ(\text{Cr}^{3+}/\text{Cr}^{2+}) = -0.41$ V versus $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0.77$ V. Both have 4 unpaired electrons; $\text{Fe}^{2+}$ is $d^6$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-transition-properties",
        title: "Magnetism, Colour, Catalysis and Other Properties",
        summary: "Spin-only magnetic moment, why transition metal ions are coloured, complex formation, catalytic behaviour, interstitial compounds, alloys and the nature of oxides.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`**Magnetic properties.** A substance with **unpaired electrons** is **paramagnetic** (drawn into a magnetic field); one with all electrons paired is **diamagnetic** (weakly repelled). Most transition metal ions are paramagnetic. For the first row, the magnetic moment comes mainly from electron spin, so the **spin-only formula** works well. Its unit is the **Bohr magneton** (BM).`,
          },
          {
            type: "formula",
            tex: t`\mu = \sqrt{n(n+2)}\ \text{BM} \qquad (n = \text{number of unpaired electrons})`,
          },
          {
            type: "table",
            headers: ["Unpaired electrons n", "μ (BM)", "Examples"],
            rows: [
              ["0", "0", "Sc³⁺, Ti⁴⁺, Zn²⁺, Cu⁺"],
              ["1", "1.73", "Ti³⁺, Cu²⁺"],
              ["2", "2.83", "V³⁺, Ni²⁺"],
              ["3", "3.87", "Cr³⁺, V²⁺"],
              ["4", "4.90", "Fe²⁺, Cr²⁺, Mn³⁺"],
              ["5", "5.92", "Mn²⁺, Fe³⁺"],
            ],
          },
          {
            type: "example",
            title: "From magnetic moment to ion",
            problem: "A divalent ion of a 3d metal has a magnetic moment of 4.90 BM in water. Identify the possible metal ions, and calculate μ for Co²⁺ (high spin).",
            steps: [
              t`$\sqrt{n(n+2)} = 4.90 \Rightarrow n(n+2) = 24 \Rightarrow n = 4$.`,
              t`Four unpaired electrons in an $\text{M}^{2+}$ ion: $d^4$ ($\text{Cr}^{2+}$) or high-spin $d^6$ ($\text{Fe}^{2+}$).`,
              t`$\text{Co}^{2+}$ is $3d^7$: five d orbitals with 7 electrons leaves 3 unpaired.`,
              t`$\mu = \sqrt{3 \times 5} = \sqrt{15} = 3.87$ BM.`,
            ],
            answer: t`$\text{Cr}^{2+}$ or $\text{Fe}^{2+}$; $\mu(\text{Co}^{2+}) = 3.87$ BM.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Calculate the spin-only magnetic moment (BM) of $\text{Fe}^{3+}$.`,
                answer: 5.92,
                tolerance: 0.02,
                unit: "BM",
                explain: t`$\text{Fe}^{3+}$ is $3d^5$, n = 5: $\mu = \sqrt{35} = 5.92$ BM.`,
              },
            ],
          },
          {
            type: "text",
            md: "**Colour.** In a compound, the five d orbitals of the metal ion no longer have the same energy. When white light falls on the ion, an electron jumps from a lower to a higher d orbital (a **d–d transition**) by absorbing light of one colour. We see the **complementary colour** of the light absorbed. The colour depends on the ligands: anhydrous CuSO₄ is white, the hydrated salt blue. Ions with **d⁰ or d¹⁰** configurations have no d–d transition and are colourless.",
          },
          {
            type: "table",
            headers: ["Aquated ion", "Configuration", "Colour"],
            rows: [
              ["Sc³⁺, Ti⁴⁺", "3d⁰", "colourless"],
              ["Ti³⁺", "3d¹", "purple"],
              ["V³⁺", "3d²", "green"],
              ["Cr³⁺", "3d³", "violet"],
              ["Mn²⁺", "3d⁵", "pink"],
              ["Fe²⁺ / Fe³⁺", "3d⁶ / 3d⁵", "green / yellow"],
              ["Co²⁺ / Ni²⁺", "3d⁷ / 3d⁸", "pink / green"],
              ["Cu²⁺ / Zn²⁺", "3d⁹ / 3d¹⁰", "blue / colourless"],
            ],
          },
          {
            type: "mistake",
            wrong: t`Scandium is a transition element, so $\text{Sc}^{3+}$ salts must be coloured.`,
            right: t`$\text{Sc}^{3+}$ is $3d^0$: no d electron can jump, so its salts are colourless. Colour from d–d transitions needs a partly filled d subshell ($d^1$ to $d^9$).`,
            why: "Being in the d-block is not enough; the ion in the compound must have d electrons and empty d orbitals. Deep colours of d⁰ species such as MnO₄⁻ come from a different process (charge transfer), not d–d transitions.",
          },
          {
            type: "text",
            md: t`**Complex formation.** Small, highly charged ions with vacant d orbitals form many complexes: $[\text{Fe}(\text{CN})_6]^{3-}$, $[\text{Cu}(\text{NH}_3)_4]^{2+}$, $[\text{PtCl}_4]^{2-}$.

**Catalytic properties.** Transition metals and their compounds are good catalysts because they show **variable oxidation states** and can form **complexes**, and their surfaces can adsorb reactants and weaken their bonds. Examples: $\text{V}_2\text{O}_5$ (contact process), finely divided Fe (Haber process), Ni (hydrogenation of oils). Fe³⁺ catalyses $2\text{I}^- + \text{S}_2\text{O}_8^{2-} \rightarrow \text{I}_2 + 2\text{SO}_4^{2-}$ in two steps: $2\text{Fe}^{3+} + 2\text{I}^- \rightarrow 2\text{Fe}^{2+} + \text{I}_2$, then $2\text{Fe}^{2+} + \text{S}_2\text{O}_8^{2-} \rightarrow 2\text{Fe}^{3+} + 2\text{SO}_4^{2-}$.`,
          },
          {
            type: "text",
            md: t`**Interstitial compounds** form when small atoms (H, C, N) are trapped in the gaps of the metal lattice: TiC, $\text{Mn}_4\text{N}$, $\text{Fe}_3\text{H}$, $\text{TiH}_{1.7}$. They are usually non-stoichiometric, have higher melting points than the pure metals, are very hard, keep metallic conductivity and are chemically inert.

**Alloys** form readily because transition metals have similar atomic radii (within about 15%): steel, brass (Cu + Zn), bronze (Cu + Sn).

**Oxides.** As oxidation state rises, oxides become more covalent and more **acidic**. $\text{Mn}_2\text{O}_7$ is a covalent green oil that gives $\text{HMnO}_4$; $\text{CrO}_3$ gives $\text{H}_2\text{CrO}_4$ and $\text{H}_2\text{Cr}_2\text{O}_7$; $\text{V}_2\text{O}_5$ is amphoteric; CrO is basic and $\text{Cr}_2\text{O}_3$ amphoteric.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each property with its main reason.",
              pairs: [
                ["Paramagnetism", "Unpaired d electrons"],
                ["Coloured ions", "d–d transitions in a partly filled d subshell"],
                ["Catalytic activity", "Variable oxidation states and surface adsorption"],
                ["Easy alloy formation", "Similar atomic radii"],
                ["Interstitial compounds", "Small atoms trapped in lattice gaps"],
              ],
              explain: "Almost every special property of transition metals traces back to the partly filled (n−1)d subshell, plus their similar sizes.",
            },
          },
          {
            type: "example",
            title: "Predicting colour",
            problem: t`Which of these are coloured in aqueous solution: $\text{Ti}^{4+}$, $\text{V}^{3+}$, $\text{Cu}^+$, $\text{Mn}^{2+}$, $\text{Zn}^{2+}$?`,
            steps: [
              t`Write d counts: $\text{Ti}^{4+}$ $3d^0$; $\text{V}^{3+}$ $3d^2$; $\text{Cu}^+$ $3d^{10}$; $\text{Mn}^{2+}$ $3d^5$; $\text{Zn}^{2+}$ $3d^{10}$.`,
              t`$d^0$ and $d^{10}$ cannot have d–d transitions: $\text{Ti}^{4+}$, $\text{Cu}^+$, $\text{Zn}^{2+}$ are colourless.`,
              t`$\text{V}^{3+}$ (green) and $\text{Mn}^{2+}$ (pale pink) have partly filled d subshells and are coloured.`,
            ],
            answer: t`$\text{V}^{3+}$ and $\text{Mn}^{2+}$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For magnetic moment questions, show three lines: configuration of the ion, number of unpaired electrons, μ = √(n(n+2)) with the value. For 'why coloured', mention partly filled d orbitals, d–d transition and complementary colour; all three earn marks.",
          },
          {
            type: "keypoints",
            items: [
              "μ = √(n(n+2)) BM: 1.73, 2.83, 3.87, 4.90, 5.92 for n = 1 to 5.",
              "Colour comes from d–d transitions; d⁰ and d¹⁰ ions are colourless.",
              "Catalysis: variable oxidation states, complex formation and surface adsorption (V₂O₅, Fe, Ni).",
              "Interstitial compounds are hard, high-melting, conducting and inert; alloys form because radii are similar.",
              "Higher oxidation state → more acidic, more covalent oxide (Mn₂O₇ acidic, CrO basic).",
            ],
          },
        ],
        flashcards: [
          { front: "Spin-only formula", back: "μ = √(n(n+2)) BM, n = number of unpaired electrons." },
          { front: "μ for 3 unpaired electrons", back: "3.87 BM (e.g. Cr³⁺)." },
          { front: "Why transition metal ions are coloured", back: "d–d transitions: light of one colour is absorbed and the complementary colour is seen." },
          { front: "Colourless 3d ions", back: "Sc³⁺, Ti⁴⁺ (d⁰), Cu⁺, Zn²⁺ (d¹⁰)." },
          { front: "Catalyst in the contact process", back: "V₂O₅." },
          { front: "Interstitial compounds", back: "Compounds such as TiC, Mn₄N, Fe₃H with small atoms in lattice gaps; hard, high melting, conducting, inert." },
          { front: "Nature of Mn₂O₇", back: "Covalent green oil; an acidic oxide that gives HMnO₄." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`The spin-only magnetic moment of $\text{Ni}^{2+}$ (in BM) is:`,
            answer: 2.83,
            tolerance: 0.02,
            unit: "BM",
            explain: t`$\text{Ni}^{2+}$ is $3d^8$: 2 unpaired electrons, $\mu = \sqrt{8} = 2.83$ BM.`,
          },
          {
            kind: "mcq",
            q: "Which aquated ion is colourless?",
            options: ["Ti³⁺", "Cr³⁺", "Zn²⁺", "Co²⁺"],
            answer: 2,
            explain: "Zn²⁺ is 3d¹⁰; no d–d transition is possible.",
          },
          {
            kind: "mcq",
            q: "Transition metals are good catalysts mainly because they:",
            options: [
              "have high densities",
              "can change oxidation state and form complexes",
              "are always paramagnetic",
              "have low ionisation enthalpies",
            ],
            answer: 1,
            explain: "Variable oxidation states let them form and break intermediates; surfaces adsorb reactants.",
          },
          {
            kind: "truefalse",
            q: "Interstitial compounds of transition metals are generally softer and lower-melting than the pure metals.",
            answer: false,
            explain: "They are harder and have higher melting points than the pure metals.",
          },
          {
            kind: "mcq",
            q: "An ion has μ = 1.73 BM. How many unpaired electrons does it have?",
            options: ["0", "1", "2", "3"],
            answer: 1,
            explain: "√(1 × 3) = 1.73.",
          },
          {
            kind: "multi",
            q: "Which of these oxides are acidic?",
            options: ["Mn₂O₇", "CrO₃", "CrO", "MnO"],
            answers: [0, 1],
            explain: "High oxidation state oxides (Mn +7, Cr +6) are acidic. CrO and MnO (+2) are basic.",
          },
          {
            kind: "mcq",
            q: "In the Fe³⁺-catalysed reaction of I⁻ with S₂O₈²⁻, Fe³⁺ first:",
            options: [
              "oxidises I⁻ to I₂ and becomes Fe²⁺",
              "reduces S₂O₈²⁻ to SO₄²⁻",
              "forms an interstitial compound",
              "precipitates as Fe(OH)₃",
            ],
            answer: 0,
            explain: "2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂; then Fe²⁺ is oxidised back by S₂O₈²⁻, regenerating Fe³⁺.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`How many unpaired electrons are in a $\text{V}^{2+}$ ion?`,
            answer: 3,
            explain: t`V is $3d^34s^2$; $\text{V}^{2+}$ is $3d^3$ with 3 unpaired electrons ($\mu$ = 3.87 BM).`,
          },
        ],
      },
      {
        slug: "c12-dichromate-permanganate",
        title: "Potassium Dichromate and Potassium Permanganate",
        summary: "Preparation, structure and oxidising reactions of K₂Cr₂O₇ and KMnO₄, the chromate–dichromate equilibrium, and how the medium decides the product of permanganate.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧪",
            caption: "In the school lab, a pale pink colour that stays for 30 seconds tells you a KMnO₄ titration has reached its end point. Permanganate is its own indicator.",
          },
          {
            type: "text",
            md: t`**Potassium dichromate**, $\text{K}_2\text{Cr}_2\text{O}_7$, is made from **chromite ore** $\text{FeCr}_2\text{O}_4$ in three steps. It is preferred to the sodium salt as a **primary standard** in volumetric analysis because it is less soluble and not hygroscopic. It is also used in the leather industry.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Fuse chromite with sodium carbonate in free air: $4\text{FeCr}_2\text{O}_4 + 8\text{Na}_2\text{CO}_3 + 7\text{O}_2 \rightarrow 8\text{Na}_2\text{CrO}_4 + 2\text{Fe}_2\text{O}_3 + 8\text{CO}_2$.`,
              t`Filter the yellow chromate solution and acidify with sulphuric acid: $2\text{Na}_2\text{CrO}_4 + 2\text{H}^+ \rightarrow \text{Na}_2\text{Cr}_2\text{O}_7 + 2\text{Na}^+ + \text{H}_2\text{O}$ (orange dichromate).`,
              t`Add KCl: $\text{Na}_2\text{Cr}_2\text{O}_7 + 2\text{KCl} \rightarrow \text{K}_2\text{Cr}_2\text{O}_7 + 2\text{NaCl}$. The less soluble potassium salt crystallises out.`,
            ],
          },
          {
            type: "text",
            md: t`Chromate and dichromate turn into each other with pH: $2\text{CrO}_4^{2-} + 2\text{H}^+ \rightleftharpoons \text{Cr}_2\text{O}_7^{2-} + \text{H}_2\text{O}$ and $\text{Cr}_2\text{O}_7^{2-} + 2\text{OH}^- \rightleftharpoons 2\text{CrO}_4^{2-} + \text{H}_2\text{O}$. Acid gives orange dichromate; alkali gives yellow chromate. Chromium stays +6 in both. The **chromate** ion is tetrahedral; **dichromate** is two tetrahedra sharing one corner, with a Cr–O–Cr angle of 126°.`,
          },
          {
            type: "formula",
            tex: t`\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O} \qquad E^\circ = 1.33\ \text{V}`,
            caption: "In acid, dichromate is a strong oxidising agent; orange changes to green Cr³⁺.",
          },
          {
            type: "table",
            headers: ["Acidified dichromate oxidises", "Balanced ionic equation"],
            rows: [
              ["iodide → iodine", t`$\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6\text{I}^- \rightarrow 2\text{Cr}^{3+} + 3\text{I}_2 + 7\text{H}_2\text{O}$`],
              ["iron(II) → iron(III)", t`$\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6\text{Fe}^{2+} \rightarrow 2\text{Cr}^{3+} + 6\text{Fe}^{3+} + 7\text{H}_2\text{O}$`],
              ["tin(II) → tin(IV)", t`$\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 3\text{Sn}^{2+} \rightarrow 2\text{Cr}^{3+} + 3\text{Sn}^{4+} + 7\text{H}_2\text{O}$`],
              ["H₂S → sulphur", t`$\text{Cr}_2\text{O}_7^{2-} + 8\text{H}^+ + 3\text{H}_2\text{S} \rightarrow 2\text{Cr}^{3+} + 3\text{S} + 7\text{H}_2\text{O}$`],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "When a yellow solution of sodium chromate is acidified, it turns orange. The oxidation state of chromium:",
                options: ["changes from +6 to +3", "changes from +3 to +6", "stays +6", "changes from +6 to +7"],
                answer: 2,
                explain: "Chromate ⇌ dichromate is an acid–base equilibrium, not a redox change. Cr is +6 in both.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Potassium permanganate**, $\text{KMnO}_4$, is made from **pyrolusite** ($\text{MnO}_2$). Fusing it with KOH and an oxidising agent (air or $\text{KNO}_3$) gives dark green **potassium manganate**, $\text{K}_2\text{MnO}_4$, which **disproportionates** in neutral or acidic solution to permanganate. Commercially, manganate is oxidised **electrolytically** in alkaline solution. In the lab, $\text{Mn}^{2+}$ salts are oxidised by peroxodisulphate.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`$2\text{MnO}_2 + 4\text{KOH} + \text{O}_2 \rightarrow 2\text{K}_2\text{MnO}_4 + 2\text{H}_2\text{O}$`,
              t`$3\text{MnO}_4^{2-} + 4\text{H}^+ \rightarrow 2\text{MnO}_4^- + \text{MnO}_2 + 2\text{H}_2\text{O}$ (Mn: +6 → +7 and +4)`,
              t`Commercial: $\text{MnO}_4^{2-} \xrightarrow{\text{electrolytic oxidation}} \text{MnO}_4^- + e^-$`,
              t`Lab: $2\text{Mn}^{2+} + 5\text{S}_2\text{O}_8^{2-} + 8\text{H}_2\text{O} \rightarrow 2\text{MnO}_4^- + 10\text{SO}_4^{2-} + 16\text{H}^+$`,
            ],
          },
          {
            type: "table",
            headers: ["Medium", "Half-reaction", "Example"],
            rows: [
              ["Acidic", t`$\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$ ($E^\circ$ = 1.52 V)`, t`$2\text{MnO}_4^- + 5\text{C}_2\text{O}_4^{2-} + 16\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 10\text{CO}_2 + 8\text{H}_2\text{O}$`],
              ["Acidic", "same", t`$\text{MnO}_4^- + 8\text{H}^+ + 5\text{Fe}^{2+} \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$`],
              ["Neutral or faintly alkaline", t`$\text{MnO}_4^- + 2\text{H}_2\text{O} + 3e^- \rightarrow \text{MnO}_2 + 4\text{OH}^-$ ($E^\circ$ = 0.59 V)`, t`$2\text{MnO}_4^- + \text{H}_2\text{O} + \text{I}^- \rightarrow 2\text{MnO}_2 + 2\text{OH}^- + \text{IO}_3^-$`],
              ["Neutral or faintly alkaline", "same", t`$8\text{MnO}_4^- + 3\text{S}_2\text{O}_3^{2-} + \text{H}_2\text{O} \rightarrow 8\text{MnO}_2 + 6\text{SO}_4^{2-} + 2\text{OH}^-$`],
              ["Neutral", "same", t`$2\text{MnO}_4^- + 3\text{Mn}^{2+} + 2\text{H}_2\text{O} \rightarrow 5\text{MnO}_2 + 4\text{H}^+$ (needs $\text{ZnSO}_4$ or ZnO as catalyst)`],
            ],
          },
          {
            type: "example",
            title: "A permanganate titration",
            problem: "What volume of 0.020 M KMnO₄ is needed to oxidise 20.0 mL of 0.10 M FeSO₄ in acid solution?",
            steps: [
              t`Equation: $\text{MnO}_4^- + 8\text{H}^+ + 5\text{Fe}^{2+} \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$, so 1 mol $\text{MnO}_4^-$ reacts with 5 mol $\text{Fe}^{2+}$.`,
              t`Moles of $\text{Fe}^{2+} = 0.10 \times 0.0200 = 2.0 \times 10^{-3}$ mol.`,
              t`Moles of $\text{MnO}_4^- = 2.0 \times 10^{-3}/5 = 4.0 \times 10^{-4}$ mol.`,
              t`Volume $= 4.0 \times 10^{-4}/0.020 = 0.020$ L $= 20.0$ mL.`,
            ],
            answer: "20.0 mL of 0.020 M KMnO₄.",
          },
          {
            type: "mistake",
            wrong: "KMnO₄ titrations can be acidified with any strong acid, such as hydrochloric acid.",
            right: "Use dilute sulphuric acid. HCl is oxidised by permanganate to Cl₂, so extra KMnO₄ is used up and the titre is wrong. Nitric acid is avoided because it is itself an oxidising agent.",
            why: "We think of the acid only as a source of H⁺. But Cl⁻ is a reducing agent that KMnO₄ (E° = 1.52 V) can oxidise, and HNO₃ adds a second oxidant.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each oxidising agent and medium to its product.",
              pairs: [
                ["MnO₄⁻ in acid", "Mn²⁺ (gains 5 e⁻)"],
                ["MnO₄⁻ in neutral or faintly alkaline", "MnO₂ (gains 3 e⁻)"],
                ["MnO₄⁻ in strongly alkaline", "MnO₄²⁻ (gains 1 e⁻)"],
                ["Cr₂O₇²⁻ in acid", "Cr³⁺ (6 e⁻ per Cr₂O₇²⁻)"],
              ],
              explain: "The product, and so the number of electrons gained per ion, depends on the medium. This sets the n-factor in titration problems.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Preparation of K₂Cr₂O₇ or KMnO₄ (with balanced equations) and the structures of chromate, dichromate, manganate and permanganate are standard 3-mark questions. Manganate (green) is paramagnetic with one unpaired electron; permanganate (purple) is diamagnetic. Both are tetrahedral. The purple colour of MnO₄⁻ is due to charge transfer, since Mn(VII) is d⁰.",
          },
          {
            type: "keypoints",
            items: [
              "K₂Cr₂O₇: chromite → Na₂CrO₄ (fusion with Na₂CO₃ in air) → Na₂Cr₂O₇ (acid) → K₂Cr₂O₇ (KCl).",
              "Chromate (yellow) ⇌ dichromate (orange) with pH; Cr stays +6.",
              "Acid dichromate: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.",
              "KMnO₄: MnO₂ + KOH + O₂ → K₂MnO₄ (green) → MnO₄⁻ by disproportionation or electrolysis.",
              "MnO₄⁻ gives Mn²⁺ in acid (5 e⁻) and MnO₂ in neutral/faintly alkaline medium (3 e⁻); acidify with H₂SO₄, not HCl.",
            ],
          },
        ],
        flashcards: [
          { front: "Ore of chromium used to make K₂Cr₂O₇", back: "Chromite, FeCr₂O₄." },
          { front: "Effect of pH on chromate/dichromate", back: "Acid: yellow CrO₄²⁻ → orange Cr₂O₇²⁻. Alkali: the reverse. Cr is +6 in both." },
          { front: "Structure of dichromate ion", back: "Two CrO₄ tetrahedra sharing one oxygen; Cr–O–Cr angle 126°." },
          { front: "Ore used to make KMnO₄", back: "Pyrolusite, MnO₂." },
          { front: "Colour and magnetism of MnO₄²⁻ and MnO₄⁻", back: "Manganate: green, paramagnetic (one unpaired e⁻). Permanganate: purple, diamagnetic." },
          { front: "Product of MnO₄⁻ in neutral medium", back: "MnO₂ (3 electrons gained)." },
          { front: "Why KMnO₄ titrations are not done in HCl", back: "KMnO₄ oxidises HCl to Cl₂, so more KMnO₄ is used." },
          { front: "Why K₂Cr₂O₇ is a primary standard", back: "It can be obtained pure, is not hygroscopic and is stable." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The green compound formed when MnO₂ is fused with KOH in air is:",
            options: ["KMnO₄", "K₂MnO₄", "Mn₂O₇", "MnO"],
            answer: 1,
            explain: "2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O; potassium manganate is green.",
          },
          {
            kind: "numeric",
            q: "How many moles of Fe²⁺ are oxidised by 1 mol of Cr₂O₇²⁻ in acid?",
            answer: 6,
            explain: "Cr₂O₇²⁻ gains 6 electrons (2Cr: +6 → +3); each Fe²⁺ gives one.",
          },
          {
            kind: "mcq",
            q: "In neutral or faintly alkaline solution, KMnO₄ oxidises iodide to:",
            options: ["I₂", "IO₃⁻", "IO₄⁻", "I⁻ is not oxidised"],
            answer: 1,
            explain: "2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻. In acid it gives I₂.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The deep purple colour of KMnO₄ is due to d–d transitions.",
            answer: false,
            explain: "Mn(VII) is d⁰. The colour comes from charge transfer from oxygen to manganese.",
          },
          {
            kind: "numeric",
            q: "What volume (mL) of 0.020 M KMnO₄ oxidises 25.0 mL of 0.050 M oxalic acid in acid solution?",
            answer: 25,
            tolerance: 0.1,
            unit: "mL",
            explain: "2MnO₄⁻ : 5C₂O₄²⁻. Oxalate = 1.25 × 10⁻³ mol, so MnO₄⁻ = 5.0 × 10⁻⁴ mol; V = 5.0 × 10⁻⁴/0.020 = 0.025 L = 25 mL.",
            difficulty: 2,
            hint: "Use the mole ratio 2 : 5.",
          },
          {
            kind: "mcq",
            q: "In the disproportionation 3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O, manganese goes from +6 to:",
            options: ["+7 only", "+4 only", "+7 and +4", "+2 and +7"],
            answer: 2,
            explain: "Two Mn atoms are oxidised to +7 (MnO₄⁻) and one is reduced to +4 (MnO₂).",
          },
          {
            kind: "order",
            q: "Arrange the steps in the preparation of K₂Cr₂O₇ from chromite.",
            items: [
              "Fuse chromite with Na₂CO₃ in free air",
              "Filter off Fe₂O₃, keep the yellow Na₂CrO₄ solution",
              "Acidify with H₂SO₄ to get Na₂Cr₂O₇",
              "Add KCl and crystallise K₂Cr₂O₇",
            ],
            explain: "Oxidative fusion, filtration, acidification, then double decomposition with KCl.",
          },
          {
            kind: "mcq",
            q: "Which acid is used to acidify KMnO₄ in titrations?",
            options: ["Dilute HCl", "Dilute H₂SO₄", "Concentrated HNO₃", "Acetic acid"],
            answer: 1,
            explain: "H₂SO₄ is neither oxidised by KMnO₄ nor an oxidant itself.",
          },
        ],
      },
      {
        slug: "c12-lanthanoids-actinoids",
        title: "The f-Block: Lanthanoids and Actinoids",
        summary: "Configurations, oxidation states and properties of lanthanoids, the lanthanoid contraction and its results, actinoids compared with lanthanoids, and uses of d- and f-block elements.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`The **f-block** (inner transition elements) has two rows. The **lanthanoids** are the 14 elements after lanthanum, Ce (58) to Lu (71), in which electrons enter the **4f** orbitals. The **actinoids** are the 14 elements after actinium, Th (90) to Lr (103), filling **5f**. La and Ac are studied with them because they are so alike.

Lanthanoid atoms are $[\text{Xe}]4f^{n}5d^{0\text{ or }1}6s^2$. All form $\text{Ln}^{3+}$ ions with configuration $[\text{Xe}]4f^n$: from $4f^1$ ($\text{Ce}^{3+}$) to $4f^{14}$ ($\text{Lu}^{3+}$).`,
          },
          {
            type: "text",
            md: t`**Lanthanoid contraction.** From La to Lu the atomic and $\text{Ln}^{3+}$ radii decrease steadily. Each added electron enters a 4f orbital, and 4f electrons shield each other from the nucleus poorly (because of the shape of f orbitals), so the effective nuclear charge felt by the outer electrons rises.

**Results:** (i) the second (4d) and third (5d) transition series have almost the same radii, e.g. Zr 160 pm and Hf 159 pm, so they have very similar properties and occur together in nature; (ii) lanthanoids are hard to separate from each other; (iii) the basic character of the hydroxides falls from $\text{La(OH)}_3$ to $\text{Lu(OH)}_3$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Zirconium and hafnium are difficult to separate. The reason is:",
                options: [
                  "Both are radioactive",
                  "Lanthanoid contraction makes their radii almost equal",
                  "Both have 4f electrons",
                  "They have the same atomic number",
                ],
                answer: 1,
                explain: "The expected size increase from Zr (4d) to Hf (5d) is cancelled by the lanthanoid contraction, so their radii and chemistry are nearly identical.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Oxidation states.** The common state is **+3**. Some show +2 or +4 when this gives an empty, half-filled or full f subshell: $\text{Ce}^{4+}$ ($4f^0$) is a strong oxidant ($E^\circ(\text{Ce}^{4+}/\text{Ce}^{3+}) = +1.74$ V); $\text{Tb}^{4+}$ ($4f^7$) is also an oxidant; $\text{Eu}^{2+}$ ($4f^7$) and $\text{Yb}^{2+}$ ($4f^{14}$) are reducing agents that change to the common +3 state. Sm also shows +2.

**General properties.** Lanthanoids are silvery-white, soft metals that tarnish in air; hardness rises with atomic number (Sm is steel-hard). Early members are about as reactive as calcium; later ones behave more like aluminium. Many $\text{Ln}^{3+}$ ions are coloured (f–f transitions), except $\text{La}^{3+}$ and $\text{Lu}^{3+}$; all except $4f^0$ and $4f^{14}$ ions are paramagnetic.`,
          },
          {
            type: "table",
            headers: ["Lanthanoid reacts with", "Product"],
            rows: [
              ["O₂ (burns)", "Ln₂O₃"],
              ["H₂O", "Ln(OH)₃ + H₂"],
              ["dilute acids", "H₂ is liberated"],
              ["halogens (heat)", "LnX₃"],
              ["N₂ (heat)", "LnN"],
              ["carbon at 2773 K", "carbides Ln₃C, Ln₂C₃, LnC₂"],
              ["sulphur (heat)", "Ln₂S₃"],
            ],
          },
          {
            type: "example",
            title: "Predicting oxidising and reducing ions",
            problem: t`Use f-subshell configurations to say whether each ion is likely to act as an oxidising or a reducing agent in water: $\text{Ce}^{4+}$, $\text{Eu}^{2+}$, $\text{Yb}^{2+}$.`,
            steps: [
              t`Ce is $[\text{Xe}]4f^15d^16s^2$. $\text{Ce}^{4+}$ is $4f^0$ (stable, noble-gas core), but the +3 state is the most stable state in water, so $\text{Ce}^{4+}$ tends to gain an electron: **oxidising** ($E^\circ = +1.74$ V).`,
              t`Eu is $[\text{Xe}]4f^76s^2$. $\text{Eu}^{2+}$ is $4f^7$; it loses one electron easily to reach the common +3 state: **reducing**.`,
              t`Yb is $[\text{Xe}]4f^{14}6s^2$. $\text{Yb}^{2+}$ is $4f^{14}$; it is also oxidised to the common +3 state: **reducing**.`,
            ],
            answer: t`$\text{Ce}^{4+}$ is oxidising; $\text{Eu}^{2+}$ and $\text{Yb}^{2+}$ are reducing.`,
          },
          {
            type: "text",
            md: t`**Actinoids** fill the 5f orbitals ($[\text{Rn}]5f^{1-14}6d^{0-1}7s^2$). They are all **radioactive**; the elements after uranium are made artificially, and the later ones have very short half-lives. Compared with lanthanoids, they show a **wider range of oxidation states** (+3 to +7; Np and Pu reach +7) because the 5f, 6d and 7s levels have comparable energies. +3 is common, but U is most stable as +6.

The **actinoid contraction** is greater from element to element, because 5f electrons shield even more poorly than 4f. Actinoids are highly reactive metals, especially when finely divided; HCl attacks all of them, but nitric acid has little effect because a protective oxide layer forms. Their magnetic properties are more complex than those of lanthanoids.`,
          },
          {
            type: "mistake",
            wrong: "Hafnium is one full row below zirconium, so it must be clearly larger, just as K is larger than Na.",
            right: "Zr (160 pm) and Hf (159 pm) are almost the same size. The 14 poorly shielding 4f electrons added between them pull Hf's outer electrons in.",
            why: "The 'size grows down a group' rule ignores what lies between the two rows. The lanthanoid contraction exactly cancels the expected increase.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is this feature typical of lanthanoids or actinoids?",
              groups: ["Lanthanoids", "Actinoids"],
              items: [
                { text: "Fill the 4f orbitals", group: 0, hint: "Ce to Lu." },
                { text: "All members are radioactive", group: 1, hint: "Th to Lr." },
                { text: "Oxidation states up to +7", group: 1, hint: "Np and Pu reach +7." },
                { text: "Mostly only +3, with a few +2/+4", group: 0, hint: "Ce⁴⁺, Eu²⁺, Yb²⁺ are the main exceptions." },
                { text: "Larger contraction from one element to the next", group: 1, hint: "5f shields more poorly than 4f." },
                { text: "Used in mischmetall for lighter flints", group: 0, hint: "About 95% of one of these metals plus iron." },
              ],
              explain: "Actinoids differ from lanthanoids because 5f, 6d and 7s orbitals are close in energy: more oxidation states and a stronger contraction. All actinoids are radioactive.",
            },
          },
          {
            type: "text",
            md: "**Uses of d- and f-block elements.** Iron and steels are the most important construction materials. TiO₂ is a white pigment; MnO₂ is used in dry cells; Zn and Ni/Cd are used in batteries. V₂O₅ catalyses the oxidation of SO₂ in making H₂SO₄; TiCl₄ with Al(CH₃)₃ (Ziegler catalyst) is used to make polythene; Fe catalyses the Haber process; Ni catalyses hydrogenation of oils. **Mischmetall** (about 95% lanthanoid metal, 5% iron, traces of S, C, Ca and Al) is used in Mg-based alloys for bullets, shells and lighter flints.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "CBSE and Karnataka PUC follow the rationalised NCERT chapter; ISC covers the same lanthanoid and actinoid ideas and often asks the 'comparison of lanthanoids and actinoids' as a 3-mark question. All three boards ask causes and consequences of the lanthanoid contraction.",
          },
          {
            type: "keypoints",
            items: [
              "Lanthanoids: Ce–Lu (4f); actinoids: Th–Lr (5f). Common state +3.",
              "Lanthanoid contraction: poor shielding by 4f → Zr ≈ Hf, hard separation, falling basicity of Ln(OH)₃.",
              "Ce⁴⁺ (4f⁰) oxidising; Eu²⁺ (4f⁷) and Yb²⁺ (4f¹⁴) reducing.",
              "Actinoids: all radioactive, +3 to +7, larger contraction, 5f/6d/7s close in energy.",
              "Mischmetall ≈ 95% lanthanoid + 5% Fe: lighter flints, shells.",
            ],
          },
        ],
        flashcards: [
          { front: "Lanthanoid contraction", back: "Steady decrease in atomic and Ln³⁺ radius from La to Lu, due to poor shielding by 4f electrons." },
          { front: "Two consequences of lanthanoid contraction", back: "Zr and Hf have nearly the same radius; lanthanoids are hard to separate (also basicity of Ln(OH)₃ falls)." },
          { front: "Most common oxidation state of lanthanoids", back: "+3" },
          { front: "Why Ce⁴⁺ is an oxidising agent", back: "It readily gains an electron to form the more stable Ce³⁺ (E° = +1.74 V)." },
          { front: "Why actinoids show more oxidation states than lanthanoids", back: "5f, 6d and 7s levels have comparable energies, so more electrons can take part in bonding." },
          { front: "Mischmetall", back: "About 95% lanthanoid metal, 5% iron and traces of S, C, Ca, Al; used in lighter flints and Mg alloys for bullets and shells." },
          { front: "Colourless Ln³⁺ ions", back: "La³⁺ (4f⁰) and Lu³⁺ (4f¹⁴)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The general configuration of Ln³⁺ ions is:",
            options: [t`$[\text{Xe}]4f^n$`, t`$[\text{Xe}]4f^n6s^2$`, t`$[\text{Xe}]4f^{n}5d^1$`, t`$[\text{Rn}]5f^n$`],
            answer: 0,
            explain: "Removing the 6s and 5d electrons (and one 4f where needed) leaves only 4f electrons.",
          },
          {
            kind: "mcq",
            q: "Which lanthanoid ion is a good reducing agent?",
            options: ["Ce⁴⁺", "Tb⁴⁺", "Eu²⁺", "Lu³⁺"],
            answer: 2,
            explain: "Eu²⁺ (4f⁷) is easily oxidised to Eu³⁺. Ce⁴⁺ and Tb⁴⁺ are oxidising; Lu³⁺ is stable.",
          },
          {
            kind: "truefalse",
            q: "The basic strength of lanthanoid hydroxides increases from La(OH)₃ to Lu(OH)₃.",
            answer: false,
            explain: "Ln³⁺ size falls, so covalent character rises and basic strength decreases from La(OH)₃ to Lu(OH)₃.",
          },
          {
            kind: "mcq",
            q: "Which actinoid shows the highest oxidation state, +7?",
            options: ["Th", "U", "Np", "Lr"],
            answer: 2,
            explain: "Np (and Pu) reach +7. U is most stable as +6; Th as +4; Lr as +3.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are consequences of the lanthanoid contraction?",
            options: [
              "Similar radii of Zr and Hf",
              "Difficulty in separating lanthanoids",
              "Radioactivity of actinoids",
              "Decrease in basicity from La(OH)₃ to Lu(OH)₃",
            ],
            answers: [0, 1, 3],
            explain: "Radioactivity comes from unstable nuclei, not from the contraction.",
          },
          {
            kind: "fill",
            q: "Lanthanoids heated with carbon at 2773 K form ___, such as LnC₂.",
            answer: ["carbides", "carbide"],
            explain: "They form carbides Ln₃C, Ln₂C₃ and LnC₂.",
          },
          {
            kind: "mcq",
            q: "Actinoid contraction is greater than lanthanoid contraction because:",
            options: [
              "5f electrons shield more poorly than 4f electrons",
              "actinoids are radioactive",
              "actinoids have fewer electrons",
              "6d orbitals are empty",
            ],
            answer: 0,
            explain: "5f orbitals are more diffuse and shield the outer electrons even less well.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-d-f-block-exam-edge",
        title: "Exam edge: d- and f-Block Elements",
        summary: "The facts and calculations NEET, JEE, KCET and COMEDK test: magnetic moments, n-factors of KMnO₄ and K₂Cr₂O₇, E° trends, colour and the lanthanoid contraction.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "This chapter gives 1–2 direct questions in NEET and KCET and 1 in JEE Main, mostly from **NCERT lines**: configurations, magnetic moments, colours, E° trends, KMnO₄/K₂Cr₂O₇ reactions and the lanthanoid contraction. JEE adds **redox stoichiometry** with permanganate and dichromate, where the n-factor depends on the medium.",
          },
          {
            type: "table",
            headers: ["Fact exams love", "Value / answer"],
            rows: [
              ["3d metal with most oxidation states", "Mn (+2 to +7)"],
              ["Only 3d metal with positive E°(M²⁺/M)", "Cu (+0.34 V)"],
              ["Strongest oxidant among M³⁺ (3d)", "Co³⁺ (E° M³⁺/M²⁺ = +1.97 V), then Mn³⁺ (+1.57 V)"],
              ["Highest fluoride vs oxide of Mn", "MnF₄ vs Mn₂O₇"],
              ["Lowest enthalpy of atomisation in 3d", "Zn"],
              ["Colourless 3d ions", "Sc³⁺, Ti⁴⁺, Cu⁺, Zn²⁺"],
              ["n-factor of KMnO₄", "5 (acid), 3 (neutral/weakly alkaline), 1 (strongly alkaline)"],
              ["n-factor of K₂Cr₂O₇ (acid)", "6"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{moles}_{\text{oxidant}} \times n_{\text{oxidant}} = \text{moles}_{\text{reductant}} \times n_{\text{reductant}} \qquad \mu = \sqrt{n(n+2)}\ \text{BM}`,
            caption: "n-factor = electrons gained or lost per formula unit. Use it to solve titrations without writing the full equation.",
          },
          {
            type: "example",
            title: "KCET / NEET level",
            problem: "Which ion has a spin-only magnetic moment of 3.87 BM: Cr³⁺, Fe³⁺, Ni²⁺ or Cu²⁺?",
            steps: [
              "3.87 = √15 = √(3 × 5), so n = 3.",
              "Unpaired electrons: Cr³⁺ (3d³) 3; Fe³⁺ (3d⁵) 5; Ni²⁺ (3d⁸) 2; Cu²⁺ (3d⁹) 1.",
            ],
            answer: "Cr³⁺.",
          },
          {
            type: "example",
            title: "JEE Main level: a tricky n-factor",
            problem: "How many moles of KMnO₄ are needed to oxidise 1 mol of iron(II) oxalate, FeC₂O₄, completely in acid solution?",
            steps: [
              "FeC₂O₄ has two reducing parts: Fe²⁺ → Fe³⁺ (1 e⁻) and C₂O₄²⁻ → 2CO₂ (2 e⁻). n-factor = 3.",
              "In acid, MnO₄⁻ → Mn²⁺: n-factor = 5.",
              "moles(KMnO₄) × 5 = 1 × 3, so moles(KMnO₄) = 3/5 = 0.6.",
            ],
            answer: "0.6 mol KMnO₄.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What volume (mL) of 0.10 M K₂Cr₂O₇ oxidises 30 mL of 0.20 M Fe²⁺ solution in acid?",
                answer: 10,
                tolerance: 0.1,
                unit: "mL",
                explain: "Fe²⁺ = 6.0 × 10⁻³ mol (n = 1). Dichromate n = 6: moles = 1.0 × 10⁻³; V = 1.0 × 10⁻³/0.10 L = 10 mL.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: the medium changes the answer",
            problem: "The same KMnO₄ solution is used to titrate a reductant first in acid and then in neutral solution. In acid, 20.0 mL is needed. What volume is needed in neutral solution for the same amount of reductant?",
            steps: [
              "Electrons the reductant gives are fixed. In acid, each MnO₄⁻ takes 5 e⁻; in neutral, only 3 e⁻.",
              "moles(MnO₄⁻) needed ∝ 1/n-factor, so V(neutral)/V(acid) = 5/3.",
              "V(neutral) = 20.0 × 5/3 = 33.3 mL.",
            ],
            answer: "33.3 mL (assuming the reductant gives the same product in both media).",
          },
          {
            type: "example",
            title: "JEE Advanced level: E° reasoning",
            problem: "Given E°(M³⁺/M²⁺): Cr −0.41 V, Mn +1.57 V, Fe +0.77 V, Co +1.97 V, and E°(O₂, H⁺/H₂O) = +1.23 V. (a) Arrange M³⁺ as oxidising agents. (b) Which M³⁺ ions can, in principle, oxidise water to O₂? (c) Which M²⁺ is the strongest reducing agent?",
            steps: [
              "(a) More positive E° → stronger oxidant: Co³⁺ > Mn³⁺ > Fe³⁺ > Cr³⁺.",
              "(b) An oxidant can oxidise water if its E° exceeds +1.23 V: Co³⁺ (1.97) and Mn³⁺ (1.57). So Co³⁺ salts are unstable in water.",
              "(c) Most negative E° (M³⁺/M²⁺) → M²⁺ most easily oxidised: Cr²⁺ (−0.41 V).",
              "Configuration check: Mn²⁺ d⁵ and Fe³⁺ d⁵ are stable; Cr³⁺ t₂g³ is stable, so Cr²⁺ is eager to lose an electron.",
            ],
            answer: "(a) Co³⁺ > Mn³⁺ > Fe³⁺ > Cr³⁺; (b) Co³⁺ and Mn³⁺; (c) Cr²⁺.",
          },
          {
            type: "mistake",
            wrong: "The n-factor of KMnO₄ is always 5.",
            right: "It is 5 in acid (→ Mn²⁺), 3 in neutral or weakly alkaline (→ MnO₂) and 1 in strongly alkaline solution (→ MnO₄²⁻).",
            why: "Board titrations always use acid medium, so 5 is memorised. JEE problems change the medium to test this.",
          },
          {
            type: "mistake",
            wrong: "Smaller Ln³⁺ ions hold OH⁻ more tightly, so Lu(OH)₃ is the strongest base.",
            right: "Smaller, more polarising Ln³⁺ makes the M–OH bond more covalent, so basicity decreases: La(OH)₃ is the most basic, Lu(OH)₃ the least.",
            why: "Holding OH⁻ more tightly means releasing it less readily into solution, which is exactly what a weaker base does.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In water, which copper ion is more stable?",
              emoji: "🔵",
              options: ["Cu⁺, because 3d¹⁰ is a full subshell", "Cu²⁺, despite being 3d⁹"],
              answer: 1,
              trap: 0,
              explain: "Cu⁺(aq) disproportionates to Cu²⁺ and Cu. The far more negative hydration enthalpy of the small, doubly charged Cu²⁺ outweighs the second ionisation enthalpy. Configuration alone does not decide stability in water.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "NCERT lines that become MCQs",
            md: "Mn₂O₇ is a green oil; Cr–O–Cr angle in dichromate is 126°; manganate is green and paramagnetic, permanganate purple and diamagnetic; Ce⁴⁺/Ce³⁺ E° = +1.74 V; mischmetall ≈ 95% lanthanoid + 5% Fe; Zr 160 pm vs Hf 159 pm; Sm is steel-hard.",
          },
          {
            type: "keypoints",
            items: [
              "Find n from μ: 1.73, 2.83, 3.87, 4.90, 5.92 BM → n = 1 to 5.",
              "Titrations: moles × n-factor equal on both sides; KMnO₄ 5/3/1 by medium, K₂Cr₂O₇ 6.",
              "FeC₂O₄ has n-factor 3 (Fe²⁺ and C₂O₄²⁻ both oxidised).",
              "Use E°(M³⁺/M²⁺) to rank oxidants; compare with 1.23 V to see if water is oxidised.",
              "Basicity of Ln(OH)₃ falls from La to Lu.",
            ],
          },
        ],
        flashcards: [
          { front: "n-factor of KMnO₄ in acid / neutral / strongly alkaline", back: "5 / 3 / 1" },
          { front: "n-factor of FeC₂O₄ with acidified KMnO₄", back: "3 (1 from Fe²⁺ → Fe³⁺, 2 from C₂O₄²⁻ → 2CO₂)." },
          { front: "Strongest oxidant among Mn³⁺, Fe³⁺, Co³⁺, Cr³⁺", back: "Co³⁺ (E° = +1.97 V)." },
          { front: "Cr–O–Cr bond angle in Cr₂O₇²⁻", back: "126°" },
          { front: "Ion with μ = 5.92 BM", back: "Any d⁵ high-spin ion: Mn²⁺, Fe³⁺." },
          { front: "Most basic lanthanoid hydroxide", back: "La(OH)₃." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which ion has a spin-only magnetic moment of 2.83 BM?",
            options: ["Ni²⁺", "Cu²⁺", "Mn²⁺", "Zn²⁺"],
            answer: 0,
            explain: "2.83 BM = √8 → n = 2. Ni²⁺ (3d⁸) has 2 unpaired electrons.",
          },
          {
            kind: "numeric",
            q: "How many moles of KMnO₄ oxidise 1 mol of FeC₂O₄ in acidic medium?",
            answer: 0.6,
            tolerance: 0.01,
            unit: "mol",
            explain: "n(FeC₂O₄) = 3, n(KMnO₄) = 5: moles = 3/5 = 0.6.",
            difficulty: 2,
            hint: "Both iron and oxalate are oxidised.",
          },
          {
            kind: "multi",
            q: "Which ions are colourless in aqueous solution?",
            options: ["Sc³⁺", "Ti⁴⁺", "Zn²⁺", "V³⁺", "Cu⁺"],
            answers: [0, 1, 2, 4],
            explain: "d⁰ (Sc³⁺, Ti⁴⁺) and d¹⁰ (Zn²⁺, Cu⁺) ions are colourless; V³⁺ (d²) is green.",
          },
          {
            kind: "mcq",
            q: "The highest oxidation state of manganese in its fluoride is:",
            options: ["+7", "+4", "+6", "+3"],
            answer: 1,
            explain: "MnF₄. Fluorine cannot form multiple bonds, so it cannot stabilise Mn(VII) the way oxygen does in Mn₂O₇.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Spin-only magnetic moment (BM) of Cr³⁺:",
            answer: 3.87,
            tolerance: 0.02,
            unit: "BM",
            explain: "3d³, n = 3: √15 = 3.87 BM.",
          },
          {
            kind: "mcq",
            q: "Acidified K₂MnO₄ solution turns purple and a brown precipitate forms. The products are:",
            options: ["MnO₄⁻ and MnO₂", "Mn²⁺ and MnO₂", "MnO₄⁻ and Mn²⁺", "Mn₂O₇ and Mn²⁺"],
            answer: 0,
            explain: "3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ (purple) + MnO₂ (brown) + 2H₂O.",
          },
          {
            kind: "numeric",
            q: "A reductant needs 15.0 mL of a KMnO₄ solution in acid medium. What volume (mL) of the same KMnO₄ is needed in neutral medium for the same amount of reductant (same product)?",
            answer: 25,
            tolerance: 0.1,
            unit: "mL",
            explain: "V ∝ 1/n-factor: 15.0 × 5/3 = 25.0 mL.",
            difficulty: 3,
            hint: "Each MnO₄⁻ takes 5 e⁻ in acid but only 3 e⁻ in neutral medium.",
          },
          {
            kind: "mcq",
            q: "Actinoids show a larger number of oxidation states than lanthanoids because:",
            options: [
              "5f, 6d and 7s orbitals have comparable energies",
              "actinoids are larger atoms",
              "actinoids are radioactive",
              "4f orbitals are more diffuse than 5f",
            ],
            answer: 0,
            explain: "With small energy gaps between 5f, 6d and 7s, many electrons can be used in bonding.",
          },
          {
            kind: "mcq",
            q: t`Which M³⁺ ion is unstable in water because it can oxidise water to O₂? (E° O₂/H₂O = 1.23 V)`,
            options: ["Cr³⁺ (−0.41 V)", "Fe³⁺ (+0.77 V)", "Co³⁺ (+1.97 V)", "Ti³⁺ (−0.37 V)"],
            answer: 2,
            explain: "Only Co³⁺ has E°(M³⁺/M²⁺) greater than 1.23 V among these.",
            difficulty: 3,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Coordination Compounds (NCERT Unit 5; ISC same title)               */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-coordination-compounds",
    title: "Coordination Compounds",
    icon: "💎",
    description: "Werner's theory, ligands and IUPAC names, structural and stereoisomerism, valence bond and crystal field theories, metal carbonyls, stability and uses of complexes.",
    lessons: [
      {
        slug: "c12-werner-ligands-nomenclature",
        title: "Werner's Theory, Ligands and Nomenclature",
        summary: "Double salts and complexes, Werner's experiments and postulates, key terms (ligand, denticity, coordination number, coordination sphere), and IUPAC rules for formulas and names.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🩸",
            caption: "Haemoglobin (iron), chlorophyll (magnesium) and vitamin B₁₂ (cobalt) are all coordination compounds: a metal ion held by groups that donate electron pairs to it.",
          },
          {
            type: "text",
            md: t`A **double salt** such as Mohr's salt, $\text{FeSO}_4\cdot(\text{NH}_4)_2\text{SO}_4\cdot6\text{H}_2\text{O}$, or carnallite, $\text{KCl}\cdot\text{MgCl}_2\cdot6\text{H}_2\text{O}$, breaks up **completely** into simple ions in water. A **complex** keeps its identity: $\text{K}_4[\text{Fe}(\text{CN})_6]$ gives $\text{K}^+$ and $[\text{Fe}(\text{CN})_6]^{4-}$, but no free $\text{Fe}^{2+}$ or $\text{CN}^-$.

Alfred Werner added excess $\text{AgNO}_3$ to cobalt(III) chloride–ammonia compounds. Only the chloride ions **outside** the complex precipitated as AgCl.`,
          },
          {
            type: "table",
            headers: ["Compound", "Colour", "mol AgCl per mol", "Werner formula"],
            rows: [
              [t`$\text{CoCl}_3\cdot6\text{NH}_3$`, "yellow", "3", t`$[\text{Co}(\text{NH}_3)_6]^{3+}\ 3\text{Cl}^-$`],
              [t`$\text{CoCl}_3\cdot5\text{NH}_3$`, "purple", "2", t`$[\text{CoCl}(\text{NH}_3)_5]^{2+}\ 2\text{Cl}^-$`],
              [t`$\text{CoCl}_3\cdot4\text{NH}_3$`, "green", "1", t`trans-$[\text{CoCl}_2(\text{NH}_3)_4]^{+}\ \text{Cl}^-$`],
              [t`$\text{CoCl}_3\cdot4\text{NH}_3$`, "violet", "1", t`cis-$[\text{CoCl}_2(\text{NH}_3)_4]^{+}\ \text{Cl}^-$`],
            ],
          },
          {
            type: "text",
            md: "**Werner's postulates.** (1) Metals in complexes show two kinds of valence: **primary** (ionisable, satisfied by negative ions, today's **oxidation state**) and **secondary** (non-ionisable, satisfied by neutral molecules or negative ions, today's **coordination number**). (2) The secondary valence of a metal is fixed. (3) The groups bound by secondary valence point in fixed directions in space, giving a definite geometry: octahedral, tetrahedral or square planar. Werner's theory could not explain why only some elements form complexes, the directional nature of the bonds, or the colour and magnetism of complexes.",
          },
          {
            type: "example",
            title: "Formulating a complex from a precipitation test",
            problem: t`A cobalt(III) compound $\text{CoCl}_3\cdot5\text{NH}_3$ gives 2 mol of AgCl per mole with excess $\text{AgNO}_3$. Write its formula, its secondary valence, and the number of ions it gives in water.`,
            steps: [
              "Two Cl⁻ are free (precipitated), so they are outside the coordination sphere.",
              t`The third Cl and the five $\text{NH}_3$ are bound: $[\text{CoCl}(\text{NH}_3)_5]\text{Cl}_2$.`,
              "Six groups are bound to Co, so the secondary valence (coordination number) is 6; the primary valence (oxidation state) is 3.",
              t`In water: $[\text{CoCl}(\text{NH}_3)_5]^{2+} + 2\text{Cl}^-$, i.e. 3 ions (a 1:2 electrolyte).`,
            ],
            answer: t`$[\text{CoCl}(\text{NH}_3)_5]\text{Cl}_2$, coordination number 6, 3 ions.`,
          },
          {
            type: "text",
            md: t`**Key terms.** A **coordination entity** is a central metal atom or ion bonded to a fixed number of ions or molecules, e.g. $[\text{CoCl}_3(\text{NH}_3)_3]$. The **central atom/ion** is a Lewis acid. **Ligands** are the ions or molecules bound to it; each donates at least one electron pair (Lewis bases). A ligand that binds through one donor atom is **unidentate**, through two **didentate**, through several **polydentate**. A di- or polydentate ligand that forms a ring with the metal is a **chelating** ligand; chelates are extra stable. An **ambidentate** ligand can bind through either of two different atoms.

The **coordination number** (CN) is the number of donor atoms bonded to the metal. The central atom and its ligands, written in square brackets, form the **coordination sphere**; ions outside are **counter ions**. The spatial arrangement of donor atoms is the **coordination polyhedron**. A complex with only one kind of ligand is **homoleptic** ($[\text{Co}(\text{NH}_3)_6]^{3+}$); one with more kinds is **heteroleptic** ($[\text{Co}(\text{NH}_3)_4\text{Cl}_2]^+$).`,
          },
          {
            type: "table",
            headers: ["Ligand", "Name in complex", "Donor atoms"],
            rows: [
              [t`$\text{H}_2\text{O}$, $\text{NH}_3$, CO`, "aqua, ammine, carbonyl", "1 (unidentate)"],
              [t`$\text{Cl}^-$, $\text{CN}^-$, $\text{OH}^-$`, "chlorido, cyanido, hydroxido", "1 (unidentate)"],
              [t`$\text{H}_2\text{NCH}_2\text{CH}_2\text{NH}_2$ (en)`, "ethane-1,2-diamine", "2 (didentate, N, N)"],
              [t`$\text{C}_2\text{O}_4^{2-}$ (ox)`, "oxalato", "2 (didentate, O, O)"],
              [t`$\text{EDTA}^{4-}$`, "ethylenediaminetetraacetato", "6 (hexadentate: 2 N, 4 O)"],
              [t`$\text{NO}_2^-$`, "nitrito-N (via N) / nitrito-O (via O)", "1 (ambidentate)"],
              [t`$\text{SCN}^-$`, "thiocyanato-S (via S) / thiocyanato-N (via N)", "1 (ambidentate)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`What are the oxidation number and coordination number of iron in $\text{K}_3[\text{Fe}(\text{C}_2\text{O}_4)_3]$?`,
                options: ["+3 and 3", "+3 and 6", "+6 and 6", "+2 and 6"],
                answer: 1,
                explain: t`$x + 3(-2) = -3$ gives $x = +3$. Each oxalate is didentate, so 3 × 2 = 6 donor atoms.`,
              },
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Formula:** write the central atom first, then ligands in alphabetical order; put the whole entity in square brackets, polyatomic ligands in parentheses, and the charge outside the brackets.",
              "**Name:** the cation is named first, then the anion (whether the complex is the cation or the anion).",
              "Inside the entity, name ligands in **alphabetical order** before the metal; prefixes (di, tri) do not count in alphabetising.",
              "Anionic ligands end in **-o** (chlorido, cyanido, oxalato); neutral ligands keep their names except **aqua, ammine, carbonyl, nitrosyl**.",
              "Use **di-, tri-, tetra-** for simple ligands; use **bis-, tris-, tetrakis-** (with parentheses) when the ligand name already contains a number, e.g. bis(ethane-1,2-diamine).",
              "Give the metal's oxidation state in Roman numerals. In an **anionic** complex the metal ends in **-ate**: cobaltate, nickelate, zincate, and Latin roots ferrate, cuprate, argentate, aurate, plumbate, stannate. Neutral complexes are named like cations.",
            ],
          },
          {
            type: "table",
            headers: ["Formula", "IUPAC name"],
            rows: [
              [t`$[\text{Cr}(\text{NH}_3)_3(\text{H}_2\text{O})_3]\text{Cl}_3$`, "triamminetriaquachromium(III) chloride"],
              [t`$\text{K}_4[\text{Fe}(\text{CN})_6]$`, "potassium hexacyanidoferrate(II)"],
              [t`$[\text{CoCl}_2(\text{en})_2]\text{Cl}$`, "dichloridobis(ethane-1,2-diamine)cobalt(III) chloride"],
              [t`$[\text{Ag}(\text{NH}_3)_2][\text{Ag}(\text{CN})_2]$`, "diamminesilver(I) dicyanidoargentate(I)"],
              [t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}(\text{NO}_2)]$`, "diamminechloridonitrito-N-platinum(II)"],
              [t`$\text{K}_3[\text{Fe}(\text{C}_2\text{O}_4)_3]$`, "potassium trioxalatoferrate(III)"],
            ],
          },
          {
            type: "example",
            title: "Name to formula",
            problem: "Write formulas for (a) potassium tetrahydroxidozincate(II) and (b) tris(ethane-1,2-diamine)cobalt(III) sulphate.",
            steps: [
              t`(a) Zn(II) with four $\text{OH}^-$: charge $= +2 - 4 = -2$, so $[\text{Zn}(\text{OH})_4]^{2-}$. Two $\text{K}^+$ balance it: $\text{K}_2[\text{Zn}(\text{OH})_4]$.`,
              t`(b) Co(III) with three neutral en: $[\text{Co}(\text{en})_3]^{3+}$. Sulphate is $\text{SO}_4^{2-}$.`,
              t`Balance charges: $2 \times (+3) = 3 \times (-2)$, so $[\text{Co}(\text{en})_3]_2(\text{SO}_4)_3$.`,
            ],
            answer: t`(a) $\text{K}_2[\text{Zn}(\text{OH})_4]$; (b) $[\text{Co}(\text{en})_3]_2(\text{SO}_4)_3$.`,
          },
          {
            type: "mistake",
            wrong: t`Coordination number = number of ligands, so in $[\text{Co}(\text{en})_3]^{3+}$ the coordination number is 3.`,
            right: t`Coordination number counts **donor atoms** bonded to the metal. Each en binds through 2 N atoms, so CN = 3 × 2 = 6.`,
            why: "With unidentate ligands the two numbers are equal, which hides the difference. Chelating ligands such as en, oxalate and EDTA expose it.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each complex with its IUPAC name.",
              pairs: [
                ["[Ni(CO)₄]", "tetracarbonylnickel(0)"],
                ["[Co(NH₃)₆]Cl₃", "hexaamminecobalt(III) chloride"],
                ["K₂[PtCl₄]", "potassium tetrachloridoplatinate(II)"],
                ["[Cu(NH₃)₄]SO₄", "tetraamminecopper(II) sulphate"],
                ["Na₃[Co(NO₂)₆]", "sodium hexanitrito-N-cobaltate(III)"],
              ],
              explain: "Anionic complexes take -ate on the metal (platinate, cobaltate); cationic and neutral ones keep the element name. Ammine has two m's; CO is carbonyl.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "IUPAC names and formulas are 1-mark items in every board. Common slips that cost the mark: 'amine' instead of 'ammine', missing Roman numeral, missing '-ate' for an anionic complex, and wrong alphabetical order (ammine before aqua before chlorido).",
          },
          {
            type: "keypoints",
            items: [
              "Double salts ionise fully in water; complexes keep the coordination entity intact.",
              "Primary valence = oxidation state (ionisable); secondary valence = coordination number (fixed, directional).",
              "CN counts donor atoms: en and oxalate are didentate, EDTA⁴⁻ hexadentate; NO₂⁻ and SCN⁻ are ambidentate.",
              "Names: cation first; ligands alphabetical; -o for anionic ligands; aqua, ammine, carbonyl, nitrosyl; -ate for anionic complexes.",
            ],
          },
        ],
        flashcards: [
          { front: "Primary valence (Werner)", back: "Ionisable valence satisfied by anions; corresponds to oxidation state." },
          { front: "Secondary valence (Werner)", back: "Non-ionisable, fixed valence; corresponds to coordination number and gives a definite geometry." },
          { front: "Ambidentate ligand", back: "A ligand that can bind through two different donor atoms, e.g. NO₂⁻ (N or O), SCN⁻ (S or N)." },
          { front: "Denticity of EDTA⁴⁻", back: "6 (two N and four O donor atoms)." },
          { front: "Homoleptic complex", back: "Only one kind of ligand, e.g. [Co(NH₃)₆]³⁺." },
          { front: "Name of NH₃ as a ligand", back: "ammine (two m's)." },
          { front: "Name of K₄[Fe(CN)₆]", back: "potassium hexacyanidoferrate(II)." },
          { front: "When to use bis-, tris-", back: "When the ligand name already contains a number or is complex, e.g. bis(ethane-1,2-diamine)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`How many moles of AgCl precipitate when 1 mol of $[\text{Co}(\text{NH}_3)_6]\text{Cl}_3$ reacts with excess $\text{AgNO}_3$?`,
            options: ["0", "1", "2", "3"],
            answer: 3,
            explain: "All three Cl⁻ are counter ions outside the coordination sphere.",
          },
          {
            kind: "mcq",
            q: "The IUPAC name of [Pt(NH₃)₂Cl₂] is:",
            options: [
              "diamminedichloridoplatinum(II)",
              "dichloridodiammineplatinum(II)",
              "diamminedichloridoplatinate(II)",
              "diaminedichloridoplatinum(IV)",
            ],
            answer: 0,
            explain: "Neutral complex: element name, ligands alphabetical (ammine before chlorido), oxidation state +2.",
          },
          {
            kind: "numeric",
            q: t`What is the coordination number of the metal in $[\text{Fe}(\text{EDTA})]^-$?`,
            answer: 6,
            explain: "EDTA⁴⁻ is hexadentate: one ligand provides six donor atoms.",
          },
          {
            kind: "truefalse",
            q: "Mohr's salt gives the tests of Fe²⁺, NH₄⁺ and SO₄²⁻ ions in water.",
            answer: true,
            explain: "It is a double salt and breaks up completely into simple ions.",
          },
          {
            kind: "mcq",
            q: t`The oxidation state of Ni in $[\text{Ni}(\text{CO})_4]$ is:`,
            options: ["0", "+2", "+4", "−4"],
            answer: 0,
            explain: "CO is neutral and the complex is neutral, so Ni is 0.",
          },
          {
            kind: "fill",
            q: t`$\text{Na}_2[\text{CuCl}_4]$ is named sodium tetrachlorido___(II).`,
            answer: ["cuprate"],
            explain: "Anionic complex of copper takes the Latin root: cuprate.",
          },
          {
            kind: "multi",
            q: "Which of these are didentate ligands?",
            options: ["ethane-1,2-diamine", "oxalate", "ammonia", "nitrite"],
            answers: [0, 1],
            explain: "en (N, N) and oxalate (O, O) are didentate. NH₃ is unidentate; NO₂⁻ is ambidentate but binds through only one atom at a time.",
          },
          {
            kind: "mcq",
            q: t`A complex of formula $\text{PtCl}_4\cdot2\text{NH}_3$ gives no precipitate with $\text{AgNO}_3$. Its formula is:`,
            options: [
              t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}_4]$`,
              t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}_2]\text{Cl}_2$`,
              t`$[\text{PtCl}_4]^{2-}$ with $2\text{NH}_4^+$`,
              t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}_3]\text{Cl}$`,
            ],
            answer: 0,
            explain: "No free Cl⁻ means all four Cl are inside the sphere: [Pt(NH₃)₂Cl₄], a neutral Pt(IV) complex with CN 6.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-isomerism-coordination",
        title: "Isomerism in Coordination Compounds",
        summary: "Structural isomerism (linkage, coordination, ionisation, solvate) and stereoisomerism (geometrical and optical), with rules for counting isomers.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "**Isomers** have the same formula but a different arrangement of atoms. In complexes there are two main kinds. **Structural isomers** have different bonds (different ligands bound, or bound through different atoms). **Stereoisomers** have the same bonds but a different arrangement in space; they are **geometrical** or **optical**.",
          },
          {
            type: "table",
            headers: ["Structural isomerism", "What differs", "Example pair"],
            rows: [
              ["Linkage", "donor atom of an ambidentate ligand", t`$[\text{Co}(\text{NH}_3)_5(\text{NO}_2)]\text{Cl}_2$ (yellow, via N) and $[\text{Co}(\text{NH}_3)_5(\text{ONO})]\text{Cl}_2$ (red, via O)`],
              ["Coordination", "ligands swapped between cationic and anionic complexes", t`$[\text{Co}(\text{NH}_3)_6][\text{Cr}(\text{CN})_6]$ and $[\text{Cr}(\text{NH}_3)_6][\text{Co}(\text{CN})_6]$`],
              ["Ionisation", "an ion inside vs outside the sphere", t`$[\text{Co}(\text{NH}_3)_5(\text{SO}_4)]\text{Br}$ and $[\text{Co}(\text{NH}_3)_5\text{Br}]\text{SO}_4$`],
              ["Solvate (hydrate)", "water as ligand vs water of crystallisation", t`$[\text{Cr}(\text{H}_2\text{O})_6]\text{Cl}_3$ (violet) and $[\text{Cr}(\text{H}_2\text{O})_5\text{Cl}]\text{Cl}_2\cdot\text{H}_2\text{O}$ (grey-green)`],
            ],
          },
          {
            type: "text",
            md: t`**Geometrical isomerism** occurs in **square planar** and **octahedral** complexes. In square planar $[\text{MX}_2\text{L}_2]$, the two X groups can be next to each other (**cis**) or opposite (**trans**): cis- and trans-$[\text{Pt}(\text{NH}_3)_2\text{Cl}_2]$. Square planar $[\text{MABCD}]$ has three geometrical isomers. **Tetrahedral** complexes do not show geometrical isomerism, because every position is next to every other.

In octahedral $[\text{MX}_2\text{L}_4]$ (e.g. $[\text{Co}(\text{NH}_3)_4\text{Cl}_2]^+$) and $[\text{MX}_2(\text{L–L})_2]$ (e.g. $[\text{CoCl}_2(\text{en})_2]^+$), the two X groups can be cis or trans. In $[\text{MA}_3\text{B}_3]$, e.g. $[\text{Co}(\text{NH}_3)_3(\text{NO}_2)_3]$, the three identical groups can sit on one triangular face (**facial, fac**) or around a meridian, with two of them trans (**meridional, mer**).`,
          },
          {
            type: "table",
            headers: ["Type", "Geometry", "Geometrical isomers"],
            rows: [
              [t`$\text{MA}_2\text{B}_2$`, "square planar", "2 (cis, trans)"],
              [t`$\text{MABCD}$`, "square planar", "3"],
              [t`$\text{MA}_4\text{B}_2$`, "octahedral", "2 (cis, trans)"],
              [t`$\text{MA}_3\text{B}_3$`, "octahedral", "2 (fac, mer)"],
              [t`$\text{M(AA)}_2\text{B}_2$`, "octahedral", "2 (cis, trans); cis is optically active"],
              ["any", "tetrahedral", "none"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Which complex can show geometrical isomerism?`,
                options: [t`$[\text{NiCl}_4]^{2-}$ (tetrahedral)`, t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}_2]$ (square planar)`, t`$[\text{Co}(\text{NH}_3)_6]^{3+}$`, t`$[\text{Zn}(\text{NH}_3)_4]^{2+}$ (tetrahedral)`],
                answer: 1,
                explain: "Square planar MA₂B₂ has cis and trans forms. Tetrahedral complexes and homoleptic complexes have none.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Optical isomers** are mirror images that **cannot be superimposed**, like your left and right hands. Such molecules are **chiral**. The two forms, **dextro (d)** and **laevo (l)**, rotate plane-polarised light in opposite directions. Optical isomerism is common in octahedral complexes with **didentate** ligands: $[\text{Co}(\text{en})_3]^{3+}$ exists as d and l forms. In $[\text{PtCl}_2(\text{en})_2]^{2+}$ only the **cis** isomer is optically active; the trans isomer has a plane of symmetry and is its own mirror image.`,
          },
          {
            type: "example",
            title: "Counting stereoisomers",
            problem: t`How many stereoisomers does $[\text{CoCl}_2(\text{en})_2]^+$ have? Which are optically active?`,
            steps: [
              "Type M(AA)₂B₂: the two Cl can be trans (opposite) or cis (adjacent).",
              "Trans: the plane containing Co and the two en ligands is a mirror plane, so trans is optically inactive (1 isomer).",
              "Cis: no plane of symmetry; its mirror image cannot be superimposed, so it exists as d and l forms (2 isomers).",
              "Total = 1 + 2 = 3.",
            ],
            answer: "3 stereoisomers: trans (inactive) and a d/l pair of the cis form.",
          },
          {
            type: "example",
            title: "Telling ionisation isomers apart",
            problem: t`How would you distinguish $[\text{Co}(\text{NH}_3)_5(\text{SO}_4)]\text{Br}$ from $[\text{Co}(\text{NH}_3)_5\text{Br}]\text{SO}_4$ in the lab?`,
            steps: [
              t`In the first, $\text{Br}^-$ is the counter ion: with $\text{AgNO}_3$ it gives a pale yellow precipitate of AgBr; with $\text{BaCl}_2$, no precipitate.`,
              t`In the second, $\text{SO}_4^{2-}$ is the counter ion: with $\text{BaCl}_2$ it gives a white precipitate of $\text{BaSO}_4$; with $\text{AgNO}_3$, no AgBr.`,
            ],
            answer: t`$\text{AgNO}_3$ precipitates only the first; $\text{BaCl}_2$ precipitates only the second.`,
          },
          {
            type: "mistake",
            wrong: t`trans-$[\text{CoCl}_2(\text{en})_2]^+$ is optically active because en is a chelating ligand.`,
            right: "Only the cis isomer is chiral. The trans isomer has a mirror plane (through the metal and both en rings) and is optically inactive.",
            why: "Chelating ligands often create chirality, so it is tempting to call every en complex chiral. Always look for a plane of symmetry first.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which kind of isomerism does each pair show?",
              groups: ["Structural", "Stereo"],
              items: [
                { text: "[Co(NH₃)₅(NO₂)]²⁺ and [Co(NH₃)₅(ONO)]²⁺", group: 0, hint: "Different donor atom: linkage." },
                { text: "cis- and trans-[Pt(NH₃)₂Cl₂]", group: 1, hint: "Same bonds, different arrangement: geometrical." },
                { text: "d- and l-[Co(en)₃]³⁺", group: 1, hint: "Non-superimposable mirror images: optical." },
                { text: "[Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O", group: 0, hint: "Water inside vs outside: solvate." },
                { text: "fac- and mer-[Co(NH₃)₃(NO₂)₃]", group: 1, hint: "Arrangement on faces vs meridian: geometrical." },
                { text: "[Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]", group: 0, hint: "Ligands swapped between metals: coordination." },
              ],
              explain: "If the bonds themselves change, it is structural isomerism. If only the spatial arrangement changes, it is stereoisomerism.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'draw the isomers', sketch an octahedron or square with clear labels and write cis/trans or d/l under each. One mark often goes for saying which isomer is optically active and why (no plane of symmetry).",
          },
          {
            type: "keypoints",
            items: [
              "Structural: linkage, coordination, ionisation, solvate.",
              "Geometrical: square planar MA₂B₂ (2), MABCD (3); octahedral MA₄B₂ (2), MA₃B₃ fac/mer (2); none for tetrahedral.",
              "Optical: non-superimposable mirror images; common with didentate ligands, e.g. [Co(en)₃]³⁺.",
              "cis-[MCl₂(en)₂]ⁿ⁺ is chiral; trans has a mirror plane and is not.",
            ],
          },
        ],
        flashcards: [
          { front: "Linkage isomerism", back: "Same complex, ambidentate ligand bound through different atoms, e.g. –NO₂ vs –ONO." },
          { front: "Ionisation isomerism", back: "An ion swaps between the coordination sphere and the counter ion position, e.g. [Co(NH₃)₅SO₄]Br / [Co(NH₃)₅Br]SO₄." },
          { front: "Solvate (hydrate) isomerism", back: "Water as a ligand vs as water of crystallisation, e.g. violet [Cr(H₂O)₆]Cl₃ / grey-green [Cr(H₂O)₅Cl]Cl₂·H₂O." },
          { front: "fac and mer", back: "Isomers of octahedral MA₃B₃: three A on one face (fac) or along a meridian (mer)." },
          { front: "Why tetrahedral complexes show no geometrical isomerism", back: "All four positions are adjacent to each other, so cis/trans is impossible." },
          { front: "Chiral", back: "Not superimposable on its mirror image; shows optical isomerism." },
          { front: "Stereoisomers of [CoCl₂(en)₂]⁺", back: "3: trans plus d and l forms of cis." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$[\text{Co}(\text{NH}_3)_5(\text{NO}_2)]\text{Cl}_2$ and $[\text{Co}(\text{NH}_3)_5(\text{ONO})]\text{Cl}_2$ are:`,
            options: ["ionisation isomers", "linkage isomers", "coordination isomers", "optical isomers"],
            answer: 1,
            explain: "Nitrite binds through N in one and through O in the other.",
          },
          {
            kind: "numeric",
            q: t`How many geometrical isomers does square planar $[\text{Pt}(\text{NH}_3)(\text{Br})(\text{Cl})(\text{py})]$ have?`,
            answer: 3,
            explain: "MABCD square planar: fix A, then any of the other three can be trans to it: 3 isomers.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`$[\text{Co}(\text{en})_3]^{3+}$ shows optical isomerism.`,
            answer: true,
            explain: "Three chelate rings make a propeller shape that is not superimposable on its mirror image.",
          },
          {
            kind: "mcq",
            q: "Which complex shows fac–mer isomerism?",
            options: [t`$[\text{Co}(\text{NH}_3)_3(\text{NO}_2)_3]$`, t`$[\text{Co}(\text{NH}_3)_4\text{Cl}_2]^+$`, t`$[\text{Pt}(\text{NH}_3)_2\text{Cl}_2]$`, t`$[\text{Co}(\text{en})_3]^{3+}$`],
            answer: 0,
            explain: "fac/mer needs octahedral MA₃B₃.",
          },
          {
            kind: "mcq",
            q: "Which pair are coordination isomers?",
            options: [
              t`$[\text{Cu}(\text{NH}_3)_4][\text{PtCl}_4]$ and $[\text{Pt}(\text{NH}_3)_4][\text{CuCl}_4]$`,
              t`$[\text{Co}(\text{NH}_3)_5\text{Br}]\text{SO}_4$ and $[\text{Co}(\text{NH}_3)_5\text{SO}_4]\text{Br}$`,
              t`cis- and trans-$[\text{Pt}(\text{NH}_3)_2\text{Cl}_2]$`,
              t`$[\text{Cr}(\text{H}_2\text{O})_6]\text{Cl}_3$ and $[\text{Cr}(\text{H}_2\text{O})_5\text{Cl}]\text{Cl}_2\cdot\text{H}_2\text{O}$`,
            ],
            answer: 0,
            explain: "Ligands are exchanged between the cationic and anionic complexes. The second pair are ionisation isomers, the third geometrical, the fourth solvate.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are optically active?",
            options: [
              t`cis-$[\text{PtCl}_2(\text{en})_2]^{2+}$`,
              t`trans-$[\text{PtCl}_2(\text{en})_2]^{2+}$`,
              t`$[\text{Co}(\text{en})_3]^{3+}$`,
              t`trans-$[\text{Co}(\text{NH}_3)_4\text{Cl}_2]^+$`,
            ],
            answers: [0, 2],
            explain: "cis-[PtCl₂(en)₂]²⁺ and [Co(en)₃]³⁺ lack a plane of symmetry. The trans forms have one.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`Adding $\text{BaCl}_2$ to a solution of a complex gives a white precipitate, while $\text{AgNO}_3$ gives none. The complex is:`,
            options: [t`$[\text{Co}(\text{NH}_3)_5\text{Br}]\text{SO}_4$`, t`$[\text{Co}(\text{NH}_3)_5(\text{SO}_4)]\text{Br}$`, t`$[\text{Co}(\text{NH}_3)_6]\text{Br}_3$`, t`$[\text{Co}(\text{NH}_3)_4\text{Br}_2]\text{Br}$`],
            answer: 0,
            explain: "Free SO₄²⁻ gives white BaSO₄; Br is bound inside the sphere, so no AgBr forms.",
          },
        ],
      },
      {
        slug: "c12-vbt-cft",
        title: "Bonding in Complexes: VBT and Crystal Field Theory",
        summary: "Hybridisation and geometry from valence bond theory, inner and outer orbital complexes, crystal field splitting, high and low spin, the spectrochemical series, and the colour of complexes.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "**Valence bond theory (VBT).** The metal ion uses hybridised (n−1)d, ns, np or nd orbitals to accept electron pairs from the ligands. The hybridisation decides the shape. Strong ligands such as CN⁻, CO and (for Co³⁺) NH₃ can force the metal's d electrons to pair up, freeing inner d orbitals.",
          },
          {
            type: "table",
            headers: ["CN", "Hybridisation", "Shape", "Example"],
            rows: [
              ["4", t`$sp^3$`, "tetrahedral", t`$[\text{NiCl}_4]^{2-}$, $[\text{Ni}(\text{CO})_4]$`],
              ["4", t`$dsp^2$`, "square planar", t`$[\text{Ni}(\text{CN})_4]^{2-}$`],
              ["5", t`$sp^3d$`, "trigonal bipyramidal", t`$[\text{Fe}(\text{CO})_5]$`],
              ["6", t`$d^2sp^3$ (inner orbital)`, "octahedral", t`$[\text{Co}(\text{NH}_3)_6]^{3+}$, $[\text{Fe}(\text{CN})_6]^{3-}$`],
              ["6", t`$sp^3d^2$ (outer orbital)`, "octahedral", t`$[\text{CoF}_6]^{3-}$`],
            ],
          },
          {
            type: "example",
            title: "Inner vs outer orbital complex of Co(III)",
            problem: t`Using VBT, explain why $[\text{Co}(\text{NH}_3)_6]^{3+}$ is diamagnetic but $[\text{CoF}_6]^{3-}$ is paramagnetic.`,
            steps: [
              t`$\text{Co}^{3+}$ is $[\text{Ar}]3d^6$. As a free ion, Hund's rule gives 4 unpaired electrons.`,
              t`With $\text{NH}_3$, the six 3d electrons pair up in three 3d orbitals. Two empty 3d, one 4s and three 4p orbitals form $d^2sp^3$ hybrids: an **inner orbital** (low spin) octahedral complex with 0 unpaired electrons, so diamagnetic.`,
              t`With $\text{F}^-$, no pairing occurs. The 4s, three 4p and two 4d orbitals form $sp^3d^2$ hybrids: an **outer orbital** (high spin) complex with 4 unpaired electrons.`,
              t`$\mu = \sqrt{4 \times 6} = 4.90$ BM for $[\text{CoF}_6]^{3-}$.`,
            ],
            answer: t`$[\text{Co}(\text{NH}_3)_6]^{3+}$: $d^2sp^3$, diamagnetic. $[\text{CoF}_6]^{3-}$: $sp^3d^2$, 4 unpaired electrons, 4.90 BM.`,
          },
          {
            type: "text",
            md: t`Similarly, $\text{Ni}^{2+}$ ($3d^8$) with $\text{CN}^-$ pairs its electrons and uses $dsp^2$: square planar, diamagnetic $[\text{Ni}(\text{CN})_4]^{2-}$. With $\text{Cl}^-$ it uses $sp^3$: tetrahedral, paramagnetic $[\text{NiCl}_4]^{2-}$ (2 unpaired).

**Limitations of VBT:** it does not explain colour; it gives no quantitative account of magnetic data or of stability; it cannot reliably predict whether a 4-coordinate complex is tetrahedral or square planar; and it does not distinguish between weak and strong ligands.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The hybridisation and magnetic behaviour of $[\text{Ni}(\text{CN})_4]^{2-}$ are:`,
                options: [t`$sp^3$, paramagnetic`, t`$dsp^2$, diamagnetic`, t`$sp^3d^2$, paramagnetic`, t`$dsp^2$, paramagnetic`],
                answer: 1,
                explain: t`CN⁻ pairs the eight 3d electrons into four orbitals, leaving one 3d free for $dsp^2$: square planar and diamagnetic.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Crystal field theory (CFT)** treats ligands as point charges (or dipoles) and the metal–ligand bond as purely ionic. In an isolated ion the five d orbitals have equal energy (**degenerate**). In an **octahedral** field, ligands approach along the axes, so the $d_{x^2-y^2}$ and $d_{z^2}$ orbitals (the $e_g$ set) are repelled more and rise, while $d_{xy}, d_{yz}, d_{xz}$ (the $t_{2g}$ set) fall. The gap is the **crystal field splitting** $\Delta_o$.

The size of $\Delta_o$ depends on the ligand. Arranged by increasing field strength, the **spectrochemical series** is:
$\text{I}^- < \text{Br}^- < \text{SCN}^- < \text{Cl}^- < \text{S}^{2-} < \text{F}^- < \text{OH}^- < \text{C}_2\text{O}_4^{2-} < \text{H}_2\text{O} < \text{NCS}^- < \text{edta}^{4-} < \text{NH}_3 < \text{en} < \text{CN}^- < \text{CO}$.`,
          },
          {
            type: "formula",
            tex: t`E(t_{2g}) = -0.4\,\Delta_o,\qquad E(e_g) = +0.6\,\Delta_o,\qquad \Delta_t = \tfrac{4}{9}\,\Delta_o`,
            caption: "Energies relative to the average (barycentre). In a tetrahedral field the order is reversed: e (lower) and t₂ (higher), and Δt is so small that tetrahedral complexes are high spin.",
          },
          {
            type: "text",
            md: t`For $d^1$–$d^3$ ions, electrons simply fill $t_{2g}$. The fourth electron has a choice. If $\Delta_o < P$ (the **pairing energy**), it enters $e_g$: **high spin**, $t_{2g}^3e_g^1$ (weak-field ligands). If $\Delta_o > P$, it pairs in $t_{2g}$: **low spin**, $t_{2g}^4e_g^0$ (strong-field ligands). The same choice arises for $d^5$, $d^6$ and $d^7$.`,
          },
          {
            type: "table",
            headers: ["Ion", "High spin (weak field)", "Low spin (strong field)"],
            rows: [
              [t`$d^4$`, t`$t_{2g}^3e_g^1$, 4 unpaired`, t`$t_{2g}^4$, 2 unpaired`],
              [t`$d^5$`, t`$t_{2g}^3e_g^2$, 5 unpaired`, t`$t_{2g}^5$, 1 unpaired`],
              [t`$d^6$`, t`$t_{2g}^4e_g^2$, 4 unpaired`, t`$t_{2g}^6$, 0 unpaired`],
              [t`$d^7$`, t`$t_{2g}^5e_g^2$, 3 unpaired`, t`$t_{2g}^6e_g^1$, 1 unpaired`],
            ],
          },
          {
            type: "text",
            md: t`**Colour.** A complex absorbs the light whose energy matches $\Delta_o$, promoting an electron from $t_{2g}$ to $e_g$ (a d–d transition), and we see the complementary colour. $[\text{Ti}(\text{H}_2\text{O})_6]^{3+}$ ($d^1$) absorbs blue-green light near 498 nm and looks violet. Without ligands there is no splitting and no colour: anhydrous $\text{CuSO}_4$ is white, but $\text{CuSO}_4\cdot5\text{H}_2\text{O}$ is blue. Changing ligands changes $\Delta_o$ and the colour: green $[\text{Ni}(\text{H}_2\text{O})_6]^{2+}$ turns blue, then violet, as en replaces water.

**Limitations of CFT:** treating ligands as point charges suggests anionic ligands should split most strongly, but they lie at the weak end of the series; and CFT ignores the covalent character of metal–ligand bonds.`,
          },
          {
            type: "example",
            title: "Splitting energy from colour",
            problem: t`$[\text{Ti}(\text{H}_2\text{O})_6]^{3+}$ absorbs most strongly at 498 nm. Calculate $\Delta_o$ in kJ mol⁻¹. ($h = 6.626 \times 10^{-34}$ J s, $c = 3.0 \times 10^8$ m s⁻¹, $N_A = 6.022 \times 10^{23}$ mol⁻¹)`,
            steps: [
              t`Energy per ion: $E = \dfrac{hc}{\lambda} = \dfrac{6.626 \times 10^{-34} \times 3.0 \times 10^8}{498 \times 10^{-9}} = 3.99 \times 10^{-19}$ J.`,
              t`Per mole: $3.99 \times 10^{-19} \times 6.022 \times 10^{23} = 2.40 \times 10^5$ J mol⁻¹.`,
            ],
            answer: t`$\Delta_o \approx 240$ kJ mol⁻¹.`,
          },
          {
            type: "mistake",
            wrong: t`Negatively charged ligands repel d electrons most, so $\text{F}^-$ and $\text{Cl}^-$ are strong-field ligands and $\text{CO}$ is weak.`,
            right: t`The spectrochemical series is experimental: halides are weak-field ligands, while neutral CO and $\text{CN}^-$ are the strongest.`,
            why: "The point-charge picture of CFT suggests charge should matter most, but real bonding has covalent and π-bonding parts (back bonding to CO and CN⁻) that CFT ignores.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order these ligands from weakest to strongest field.",
              items: ["I⁻", "Cl⁻", "F⁻", "H₂O", "NH₃", "CN⁻"],
              explain: t`Part of the spectrochemical series: $\text{I}^- < \text{Cl}^- < \text{F}^- < \text{H}_2\text{O} < \text{NH}_3 < \text{CN}^-$. Halides are weak field, CN⁻ and CO strongest.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a VBT question, draw the box diagram of the free ion, then of the complex with the hybrid orbitals marked, and state geometry and magnetism. For CFT, draw the t₂g/e_g splitting with the electrons filled in and say 'high spin' or 'low spin' with the reason (Δo vs P).",
          },
          {
            type: "keypoints",
            items: [
              "VBT: sp³ tetrahedral, dsp² square planar, d²sp³ inner orbital and sp³d² outer orbital octahedral.",
              "CFT octahedral: t₂g at −0.4Δo, e_g at +0.6Δo; Δt = (4/9)Δo; tetrahedral is always high spin.",
              "Δo < P → high spin; Δo > P → low spin. Spectrochemical series: I⁻ weakest … CN⁻ < CO strongest.",
              "Colour: absorption of light of energy Δo (d–d); seen colour is complementary.",
            ],
          },
        ],
        flashcards: [
          { front: "Inner orbital complex", back: "Uses (n−1)d orbitals: d²sp³; usually low spin, e.g. [Co(NH₃)₆]³⁺." },
          { front: "Outer orbital complex", back: "Uses nd orbitals: sp³d²; high spin, e.g. [CoF₆]³⁻." },
          { front: "Shape and magnetism of [NiCl₄]²⁻", back: "sp³, tetrahedral, paramagnetic (2 unpaired)." },
          { front: "Crystal field splitting Δo", back: "Energy gap between e_g and t₂g sets in an octahedral field." },
          { front: "Δt in terms of Δo", back: "Δt = (4/9)Δo." },
          { front: "When is an octahedral d⁴ complex low spin?", back: "When Δo > P: configuration t₂g⁴e_g⁰." },
          { front: "Why anhydrous CuSO₄ is white", back: "No water ligands, so no crystal field splitting and no d–d absorption in the visible region." },
          { front: "Strongest and weakest ligands in the spectrochemical series", back: "CO (strongest), I⁻ (weakest)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$[\text{CoF}_6]^{3-}$ is:`,
            options: [t`$d^2sp^3$, diamagnetic`, t`$sp^3d^2$, paramagnetic`, t`$dsp^2$, diamagnetic`, t`$sp^3$, paramagnetic`],
            answer: 1,
            explain: "F⁻ is weak field; no pairing, so outer orbital sp³d² with 4 unpaired electrons.",
          },
          {
            kind: "numeric",
            q: t`How many unpaired electrons are in low-spin octahedral $[\text{Fe}(\text{CN})_6]^{3-}$?`,
            answer: 1,
            explain: t`$\text{Fe}^{3+}$ is $d^5$; strong-field CN⁻ gives $t_{2g}^5$: 1 unpaired electron.`,
          },
          {
            kind: "mcq",
            q: "In an octahedral field, which orbitals form the e_g set?",
            options: [t`$d_{xy}, d_{yz}$`, t`$d_{x^2-y^2}, d_{z^2}$`, t`$d_{xz}, d_{z^2}$`, t`$d_{xy}, d_{x^2-y^2}$`],
            answer: 1,
            explain: "These point straight at the ligands on the axes, so they are repelled most.",
          },
          {
            kind: "truefalse",
            q: "Tetrahedral complexes are rarely low spin because Δt is much smaller than Δo.",
            answer: true,
            explain: "Δt = (4/9)Δo is usually smaller than the pairing energy, so electrons stay unpaired.",
          },
          {
            kind: "mcq",
            q: t`Which configuration describes high-spin octahedral $\text{Fe}^{2+}$?`,
            options: [t`$t_{2g}^6e_g^0$`, t`$t_{2g}^4e_g^2$`, t`$t_{2g}^3e_g^3$`, t`$t_{2g}^5e_g^1$`],
            answer: 1,
            explain: "d⁶ with Δo < P: three electrons in t₂g, two in e_g, then the sixth pairs in t₂g.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A complex absorbs light of wavelength 600 nm. What is $\Delta_o$ in kJ mol⁻¹? (h = 6.626 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m s⁻¹, N_A = 6.022 × 10²³ mol⁻¹)`,
            answer: 199.5,
            tolerance: 1,
            unit: "kJ mol⁻¹",
            explain: t`$E = hcN_A/\lambda = (1.9878 \times 10^{-25} \times 6.022 \times 10^{23})/(6.00 \times 10^{-7}) = 1.995 \times 10^5$ J mol⁻¹ ≈ 199.5 kJ mol⁻¹.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which is a limitation of crystal field theory?",
            options: [
              "It cannot explain colour",
              "It treats ligands as point charges and ignores covalent bonding",
              "It cannot explain magnetic properties",
              "It applies only to tetrahedral complexes",
            ],
            answer: 1,
            explain: "CFT does explain colour and magnetism; its weakness is the purely ionic, point-charge model.",
          },
          {
            kind: "multi",
            q: "Which are strong-field ligands (above H₂O in the spectrochemical series)?",
            options: ["CN⁻", "en", "Cl⁻", "CO", "F⁻"],
            answers: [0, 1, 3],
            explain: "en, CN⁻ and CO lie above H₂O; Cl⁻ and F⁻ are weak field.",
          },
        ],
      },
      {
        slug: "c12-carbonyls-stability-uses",
        title: "Metal Carbonyls, Stability and Uses of Complexes",
        summary: "Structures and synergic bonding of metal carbonyls, the EAN rule, stability constants and the chelate effect, and the importance of complexes in analysis, metallurgy, biology and medicine.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "💊",
            caption: "Cisplatin, cis-[Pt(NH₃)₂Cl₂], a simple square planar complex, is used to treat several cancers. Its trans isomer is not active.",
          },
          {
            type: "text",
            md: "**Metal carbonyls** are complexes in which CO is the ligand. Most are **homoleptic**, with the metal in the zero oxidation state. Their structures are well defined.",
          },
          {
            type: "table",
            headers: ["Carbonyl", "Structure"],
            rows: [
              [t`$[\text{Ni}(\text{CO})_4]$`, "tetrahedral"],
              [t`$[\text{Fe}(\text{CO})_5]$`, "trigonal bipyramidal"],
              [t`$[\text{Cr}(\text{CO})_6]$`, "octahedral"],
              [t`$[\text{Mn}_2(\text{CO})_{10}]$`, "two square pyramidal Mn(CO)₅ units joined by a Mn–Mn bond"],
              [t`$[\text{Co}_2(\text{CO})_8]$`, "Co–Co bond bridged by two CO groups"],
            ],
          },
          {
            type: "text",
            md: "**Synergic bonding.** The metal–carbon bond has both σ and π character. (1) CO donates its carbon lone pair into a vacant metal orbital: a **σ bond**. (2) The metal donates electrons from a filled d orbital back into the vacant antibonding π* orbital of CO: a **π back bond**. Each part strengthens the other, so the M–C bond is strong. Because electrons enter π* of CO, the C–O bond becomes slightly weaker (lower bond order) than in free CO.",
          },
          {
            type: "text",
            md: t`**Effective atomic number (EAN) rule** (asked in ISC and JEE). Sidgwick suggested that a metal in a complex tends to collect enough electrons to reach the next noble gas configuration. Many carbonyls obey it.`,
          },
          {
            type: "formula",
            tex: t`\text{EAN} = Z - (\text{oxidation state}) + 2 \times (\text{number of donor electron pairs})`,
            caption: "EAN = 36 (Kr), 54 (Xe) or 86 (Rn) means the rule is obeyed.",
          },
          {
            type: "example",
            title: "Using the EAN rule",
            problem: t`Find the EAN of iron in $[\text{Fe}(\text{CN})_6]^{4-}$, and predict $x$ in $\text{Fe}(\text{CO})_x$ if it obeys the rule.`,
            steps: [
              t`$[\text{Fe}(\text{CN})_6]^{4-}$: Fe is +2, Z = 26, six donor pairs: EAN $= 26 - 2 + 12 = 36$ (krypton).`,
              t`$\text{Fe}(\text{CO})_x$: Fe is 0, so $26 + 2x = 36$.`,
              t`$x = 5$: $\text{Fe}(\text{CO})_5$, which is the real, stable carbonyl.`,
            ],
            answer: t`EAN = 36; $x = 5$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In a metal carbonyl, π back bonding:",
                options: [
                  "strengthens the C–O bond",
                  "weakens the C–O bond and strengthens the M–C bond",
                  "has no effect on bond strengths",
                  "occurs from CO π* to empty metal d orbitals",
                ],
                answer: 1,
                explain: "Metal d electrons enter the antibonding π* of CO, lowering the C–O bond order while adding π character to M–C.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Stability of complexes** (ISC and JEE). For $\text{M} + 4\text{L} \rightleftharpoons \text{ML}_4$, the overall **stability (formation) constant** is $\beta_4 = \dfrac{[\text{ML}_4]}{[\text{M}][\text{L}]^4}$; a larger $\beta$ means a more stable complex. Its reciprocal is the instability constant. Chelating ligands give much more stable complexes than similar unidentate ligands (the **chelate effect**): $[\text{Ni}(\text{en})_3]^{2+}$ is more stable than $[\text{Ni}(\text{NH}_3)_6]^{2+}$. Stability is higher for a smaller, more highly charged metal ion.`,
          },
          {
            type: "table",
            headers: ["Area", "Use of a complex"],
            rows: [
              ["Analysis", t`Ni²⁺ gives a red precipitate with dimethylglyoxime; hardness of water is found by titration with $\text{Na}_2\text{EDTA}$ (Ca²⁺, Mg²⁺ form stable complexes)`],
              ["Metallurgy", t`Ag and Au are leached as $[\text{Ag}(\text{CN})_2]^-$ and $[\text{Au}(\text{CN})_2]^-$, then displaced by Zn; Ni is purified via $[\text{Ni}(\text{CO})_4]$ (Mond process)`],
              ["Biology", "chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ cyanocobalamin (Co)"],
              ["Catalysis", t`Wilkinson's catalyst $[(\text{Ph}_3\text{P})_3\text{RhCl}]$ for hydrogenation of alkenes`],
              ["Medicine", "cisplatin for cancer; EDTA to remove lead (lead poisoning); D-penicillamine and desferrioxamine B to remove excess Cu and Fe"],
              ["Electroplating and photography", t`$[\text{Ag}(\text{CN})_2]^-$ and $[\text{Au}(\text{CN})_2]^-$ give smoother plating; hypo dissolves unexposed AgBr as $[\text{Ag}(\text{S}_2\text{O}_3)_2]^{3-}$`],
            ],
          },
          {
            type: "mistake",
            wrong: "CO bonds to the metal through its oxygen atom, because oxygen is more electronegative and has more lone pairs.",
            right: "CO bonds through carbon. The carbon lone pair is higher in energy and more available, and carbon's side of the π* orbital overlaps better with metal d orbitals for back bonding.",
            why: "Electronegativity suggests oxygen is the 'electron-rich' end, but that makes its lone pair less willing to be donated. The donor end of CO is carbon.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each complex to its use.",
              pairs: [
                ["[Ni(CO)₄]", "Purification of nickel"],
                ["[Au(CN)₂]⁻", "Extraction of gold"],
                ["Na₂EDTA", "Estimating hardness of water"],
                ["cis-[Pt(NH₃)₂Cl₂]", "Treating cancer"],
                ["[(Ph₃P)₃RhCl]", "Hydrogenation of alkenes"],
              ],
              explain: "Complexes are used wherever a metal must be dissolved, carried, measured or held in a precise geometry.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The importance of coordination compounds (analysis, metallurgy, biology, medicine) is in the CBSE, Karnataka PUC and ISC syllabi. Metal carbonyl bonding is in the NCERT chapter and can appear in JEE and NEET; stability constants and the EAN rule are asked mainly by ISC and in JEE; check your current board syllabus for whether they appear in your theory paper.",
          },
          {
            type: "keypoints",
            items: [
              "Ni(CO)₄ tetrahedral, Fe(CO)₅ trigonal bipyramidal, Cr(CO)₆ octahedral; Mn₂(CO)₁₀ has a Mn–Mn bond.",
              "Synergic bonding: σ donation from C of CO plus π back donation from metal d to CO π*.",
              "EAN = Z − oxidation state + 2 × donor pairs; 36 for Fe(CO)₅, Ni(CO)₄, [Fe(CN)₆]⁴⁻.",
              "Larger β = more stable; chelates are extra stable.",
              "Uses: EDTA titration, cyanide extraction of Ag/Au, Mond process, cisplatin, Wilkinson's catalyst.",
            ],
          },
        ],
        flashcards: [
          { front: "Shape of Fe(CO)₅", back: "Trigonal bipyramidal." },
          { front: "Synergic bonding in carbonyls", back: "σ donation from CO's carbon lone pair to the metal plus π back donation from filled metal d orbitals into CO's π*." },
          { front: "EAN rule", back: "EAN = Z − oxidation state + 2 × number of donor pairs; stable complexes often reach a noble gas count (36, 54, 86)." },
          { front: "Chelate effect", back: "Complexes with chelating ligands are more stable than those with comparable unidentate ligands." },
          { front: "Complex used to estimate hardness of water", back: "Na₂EDTA; it forms stable complexes with Ca²⁺ and Mg²⁺." },
          { front: "Metal in vitamin B₁₂", back: "Cobalt (cyanocobalamin)." },
          { front: "Wilkinson's catalyst", back: "[(Ph₃P)₃RhCl], used for hydrogenation of alkenes." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The shape of $[\text{Ni}(\text{CO})_4]$ is:`,
            options: ["square planar", "tetrahedral", "octahedral", "trigonal bipyramidal"],
            answer: 1,
            explain: "Ni(0) uses sp³ hybrids; Ni(CO)₄ is tetrahedral and diamagnetic.",
          },
          {
            kind: "numeric",
            q: t`What is the EAN of cobalt in $[\text{Co}(\text{NH}_3)_6]^{3+}$? (Z of Co = 27)`,
            answer: 36,
            explain: "27 − 3 + 2 × 6 = 36.",
          },
          {
            kind: "numeric",
            q: "If chromium (Z = 24) forms a stable neutral carbonyl Cr(CO)ₓ obeying the EAN rule, what is x?",
            answer: 6,
            explain: "24 + 2x = 36 gives x = 6: Cr(CO)₆.",
          },
          {
            kind: "truefalse",
            q: "Haemoglobin is a coordination compound of magnesium.",
            answer: false,
            explain: "Haemoglobin contains iron; chlorophyll contains magnesium.",
          },
          {
            kind: "mcq",
            q: "Which complex is more stable?",
            options: [t`$[\text{Ni}(\text{en})_3]^{2+}$`, t`$[\text{Ni}(\text{NH}_3)_6]^{2+}$`, "Both equally stable", "Cannot be compared"],
            answer: 0,
            explain: "Chelate effect: three en rings make the complex more stable than six separate NH₃.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Silver is extracted from its ore by leaching with dilute NaCN in air, forming:",
            options: [t`$[\text{Ag}(\text{CN})_2]^-$`, t`$[\text{Ag}(\text{NH}_3)_2]^+$`, t`$[\text{Ag}(\text{S}_2\text{O}_3)_2]^{3-}$`, "AgCN precipitate"],
            answer: 0,
            explain: "Ag dissolves as the dicyanidoargentate(I) ion and is then displaced by zinc.",
          },
          {
            kind: "multi",
            q: "Which statements about metal carbonyls are correct?",
            options: [
              "The metal–carbon bond has both σ and π character",
              "Back bonding lowers the C–O bond order",
              "CO binds through oxygen",
              "Mn₂(CO)₁₀ contains a Mn–Mn bond",
            ],
            answers: [0, 1, 3],
            explain: "CO binds through carbon. The other three are correct.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-coordination-exam-edge",
        title: "Exam edge: Coordination Compounds",
        summary: "Counting isomers, magnetic moments and hybridisation, CFSE, colour and spectrochemical series, EAN and naming traps, at NEET, KCET, JEE Main and JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Coordination compounds give 1–2 questions in NEET and KCET and 1–2 in JEE Main every year; JEE Advanced uses it in multi-correct and matching questions. The favourites are: **number of isomers**, **hybridisation and magnetic moment**, **high vs low spin and CFSE**, **colour/wavelength order from the spectrochemical series**, **IUPAC names** and **Werner-type precipitation counts**.",
          },
          {
            type: "table",
            headers: ["Formula type", "Geometrical isomers", "Total stereoisomers"],
            rows: [
              ["MA₄B₂ (oct.)", "2", "2"],
              ["MA₃B₃ (oct.)", "2 (fac, mer)", "2"],
              ["MA₂B₂C₂ (oct.)", "5", "6 (the all-cis form is chiral)"],
              ["M(AA)₂B₂ (oct.)", "2", "3 (cis is a d/l pair)"],
              ["M(AA)₃ (oct.)", "none", "2 (d/l)"],
              ["MA₂B₂ (sq. planar)", "2", "2"],
              ["MABCD (sq. planar)", "3", "3"],
              ["any tetrahedral MA₂B₂, MABCD…", "0", "only MABCD is chiral (2)"],
            ],
          },
          {
            type: "formula",
            tex: t`\text{CFSE (octahedral)} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o \qquad \mu = \sqrt{n(n+2)}\ \text{BM}`,
            caption: "Pairing energy terms are added separately when a question asks for them.",
          },
          {
            type: "example",
            title: "NEET / KCET level: magnetism and hybridisation",
            problem: t`Find the hybridisation and spin-only magnetic moment of $[\text{Fe}(\text{CN})_6]^{3-}$ and $[\text{Fe}(\text{H}_2\text{O})_6]^{3+}$.`,
            steps: [
              t`Both contain $\text{Fe}^{3+}$, $3d^5$.`,
              t`$\text{CN}^-$ is strong field: low spin $t_{2g}^5$, 1 unpaired; VBT $d^2sp^3$. $\mu = \sqrt{3} = 1.73$ BM.`,
              t`$\text{H}_2\text{O}$ is weak for $\text{Fe}^{3+}$: high spin $t_{2g}^3e_g^2$, 5 unpaired; VBT $sp^3d^2$. $\mu = \sqrt{35} = 5.92$ BM.`,
            ],
            answer: t`$[\text{Fe}(\text{CN})_6]^{3-}$: $d^2sp^3$, 1.73 BM. $[\text{Fe}(\text{H}_2\text{O})_6]^{3+}$: $sp^3d^2$, 5.92 BM.`,
          },
          {
            type: "example",
            title: "JEE Main level: CFSE",
            problem: t`Calculate the CFSE (in units of $\Delta_o$, ignoring pairing energy) for $[\text{Cr}(\text{H}_2\text{O})_6]^{3+}$, high-spin $[\text{Fe}(\text{H}_2\text{O})_6]^{2+}$ and $[\text{Co}(\text{NH}_3)_6]^{3+}$.`,
            steps: [
              t`$\text{Cr}^{3+}$, $d^3$: $t_{2g}^3$. CFSE $= 3(-0.4) = -1.2\Delta_o$.`,
              t`$\text{Fe}^{2+}$, $d^6$ high spin: $t_{2g}^4e_g^2$. CFSE $= 4(-0.4) + 2(0.6) = -0.4\Delta_o$.`,
              t`$\text{Co}^{3+}$, $d^6$ low spin with $\text{NH}_3$: $t_{2g}^6$. CFSE $= 6(-0.4) = -2.4\Delta_o$.`,
            ],
            answer: t`$-1.2\Delta_o$, $-0.4\Delta_o$, $-2.4\Delta_o$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many geometrical isomers does octahedral [MA₂B₂C₂] have?",
                answer: 5,
                explain: "All trans (1), one pair trans with the other two pairs cis (3), all cis (1): 5. The all-cis form is chiral, giving 6 stereoisomers.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: wavelength order",
            problem: t`Arrange $[\text{Co}(\text{H}_2\text{O})_6]^{3+}$, $[\text{Co}(\text{NH}_3)_6]^{3+}$ and $[\text{Co}(\text{CN})_6]^{3-}$ in increasing order of the wavelength of light absorbed.`,
            steps: [
              t`Field strength: $\text{H}_2\text{O} < \text{NH}_3 < \text{CN}^-$, so $\Delta_o$ increases in that order.`,
              t`$\lambda = hc/\Delta_o$: larger $\Delta_o$ means shorter wavelength absorbed.`,
              t`Increasing λ: $[\text{Co}(\text{CN})_6]^{3-} < [\text{Co}(\text{NH}_3)_6]^{3+} < [\text{Co}(\text{H}_2\text{O})_6]^{3+}$.`,
            ],
            answer: t`$[\text{Co}(\text{CN})_6]^{3-} < [\text{Co}(\text{NH}_3)_6]^{3+} < [\text{Co}(\text{H}_2\text{O})_6]^{3+}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: putting it all together",
            problem: t`A violet Co(III) complex of formula $\text{CoCl}_3\cdot4\text{NH}_3$ gives 1 mol AgCl per mol with excess $\text{AgNO}_3$, and a green isomer behaves the same way. Identify both, say whether either is optically active, and give hybridisation, magnetic moment and CFSE (ignore pairing).`,
            steps: [
              t`One free Cl⁻, so the formula is $[\text{CoCl}_2(\text{NH}_3)_4]\text{Cl}$ (CN 6).`,
              t`Type $\text{MA}_4\text{B}_2$: two geometrical isomers. Violet = cis, green = trans.`,
              "Both have mirror planes (MA₄B₂ with unidentate ligands), so neither is optically active.",
              t`$\text{Co}^{3+}$ $d^6$ with $\text{NH}_3$ (strong for Co³⁺): low spin $t_{2g}^6$, $d^2sp^3$, μ = 0 (diamagnetic). CFSE $= -2.4\Delta_o$.`,
            ],
            answer: t`cis (violet) and trans (green) $[\text{CoCl}_2(\text{NH}_3)_4]\text{Cl}$; both optically inactive; $d^2sp^3$, diamagnetic, CFSE $-2.4\Delta_o$.`,
          },
          {
            type: "mistake",
            wrong: t`Four-coordinate Ni(II) complexes are always square planar, so $[\text{NiCl}_4]^{2-}$ is square planar and diamagnetic.`,
            right: t`It depends on the ligand: strong-field $\text{CN}^-$ gives square planar, diamagnetic $[\text{Ni}(\text{CN})_4]^{2-}$ ($dsp^2$); weak-field $\text{Cl}^-$ gives tetrahedral, paramagnetic $[\text{NiCl}_4]^{2-}$ ($sp^3$, 2.83 BM).`,
            why: "Textbooks show [Ni(CN)₄]²⁻ first, so 'Ni(II) = square planar' sticks. Exams pair the two ions to test this.",
          },
          {
            type: "mistake",
            wrong: t`To count unpaired electrons in a complex, use the free ion: $\text{Co}^{3+}$ ($d^6$) always has 4 unpaired electrons.`,
            right: t`Decide the field first. With strong-field ligands $d^6$ becomes $t_{2g}^6$ with 0 unpaired electrons ($[\text{Co}(\text{NH}_3)_6]^{3+}$); with $\text{F}^-$ it keeps 4 ($[\text{CoF}_6]^{3-}$).`,
            why: "The spin-only formula is learnt with free ions in the d-block chapter. In complexes, Δo vs P decides the pairing.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Is [Fe(CN)₆]⁴⁻ paramagnetic or diamagnetic?",
              emoji: "🧲",
              options: ["Paramagnetic: Fe²⁺ is d⁶ with 4 unpaired electrons", "Diamagnetic: CN⁻ pairs all six electrons"],
              answer: 1,
              trap: 0,
              explain: "CN⁻ is a strong-field ligand, so Fe²⁺ (d⁶) is low spin t₂g⁶: no unpaired electrons, d²sp³, diamagnetic. Its EAN is 36.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Fast checks",
            md: "Coordination number = donor atoms, not ligands. Charge on the complex = metal oxidation state + sum of ligand charges. The more strongly a ligand splits, the shorter the wavelength absorbed. In AgNO₃ tests, only Cl⁻ outside the brackets precipitates.",
          },
          {
            type: "keypoints",
            items: [
              "Isomer counts: MA₄B₂ 2, MA₃B₃ 2, MA₂B₂C₂ 5 (6 stereo), M(AA)₂B₂ 3 stereo, M(AA)₃ 2, MABCD sq. planar 3.",
              "Decide strong or weak field before counting unpaired electrons.",
              "CFSE = (−0.4 n_t₂g + 0.6 n_e_g)Δo; d³ −1.2Δo, d⁶ low spin −2.4Δo.",
              "Stronger ligand → larger Δo → shorter wavelength absorbed.",
              "[NiCl₄]²⁻ tetrahedral paramagnetic; [Ni(CN)₄]²⁻ square planar diamagnetic.",
            ],
          },
        ],
        flashcards: [
          { front: "Geometrical isomers of [MA₂B₂C₂]", back: "5 (6 stereoisomers in all, since the all-cis isomer is chiral)." },
          { front: "Stereoisomers of [M(AA)₂B₂]", back: "3: trans and a d/l pair of cis." },
          { front: "CFSE of d³ octahedral", back: "−1.2Δo." },
          { front: "CFSE of d⁶ low-spin octahedral (no pairing term)", back: "−2.4Δo." },
          { front: "μ of [Fe(CN)₆]³⁻ and [Fe(H₂O)₆]³⁺", back: "1.73 BM (low spin d⁵) and 5.92 BM (high spin d⁵)." },
          { front: "Relation of Δo to wavelength absorbed", back: "λ = hc/Δo: larger Δo, shorter λ." },
          { front: "Magnetism of [Fe(CN)₆]⁴⁻", back: "Diamagnetic (t₂g⁶, d²sp³)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The total number of stereoisomers of $[\text{CoCl}_2(\text{en})_2]^+$ is:`,
            options: ["2", "3", "4", "6"],
            answer: 1,
            explain: "trans (1) + cis d and l (2) = 3.",
          },
          {
            kind: "numeric",
            q: t`Spin-only magnetic moment (BM) of tetrahedral $[\text{MnCl}_4]^{2-}$:`,
            answer: 5.92,
            tolerance: 0.02,
            unit: "BM",
            explain: "Mn²⁺ d⁵; tetrahedral complexes are high spin: 5 unpaired, √35 = 5.92 BM.",
          },
          {
            kind: "mcq",
            q: t`The hybridisation of Ni in $[\text{Ni}(\text{CO})_4]$ is:`,
            options: [t`$dsp^2$`, t`$sp^3$`, t`$d^2sp^3$`, t`$sp^3d$`],
            answer: 1,
            explain: "Ni(0) 3d⁸4s²: CO pairs the 4s electrons into 3d (3d¹⁰), leaving 4s and 4p for sp³: tetrahedral, diamagnetic.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which complexes are diamagnetic?",
            options: [t`$[\text{Ni}(\text{CN})_4]^{2-}$`, t`$[\text{Co}(\text{NH}_3)_6]^{3+}$`, t`$[\text{Fe}(\text{CN})_6]^{4-}$`, t`$[\text{CoF}_6]^{3-}$`, t`$[\text{NiCl}_4]^{2-}$`],
            answers: [0, 1, 2],
            explain: "Low-spin d⁸ square planar, low-spin d⁶ and low-spin d⁶ have no unpaired electrons. [CoF₆]³⁻ has 4 and [NiCl₄]²⁻ has 2.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "CFSE, in units of Δo, of a d⁶ low-spin octahedral complex, ignoring pairing energy:",
            answer: -2.4,
            tolerance: 0.01,
            unit: "Δo",
            explain: "t₂g⁶: 6 × (−0.4) = −2.4Δo.",
          },
          {
            kind: "numeric",
            q: t`How many geometrical isomers does $[\text{Co}(\text{NH}_3)_3(\text{NO}_2)_3]$ have?`,
            answer: 2,
            explain: "MA₃B₃: fac and mer.",
          },
          {
            kind: "mcq",
            q: t`The EAN of iron in $[\text{Fe}(\text{CN})_6]^{3-}$ is:`,
            options: ["34", "35", "36", "37"],
            answer: 1,
            explain: "26 − 3 + 12 = 35; this complex does not obey the EAN rule (contrast [Fe(CN)₆]⁴⁻ = 36).",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`Which complex absorbs light of the longest wavelength?`,
            options: [t`$[\text{Co}(\text{CN})_6]^{3-}$`, t`$[\text{Co}(\text{NH}_3)_6]^{3+}$`, t`$[\text{Co}(\text{en})_3]^{3+}$`, t`$[\text{Co}(\text{H}_2\text{O})_6]^{3+}$`],
            answer: 3,
            explain: "H₂O is the weakest ligand here, so Δo is smallest and the absorbed wavelength longest.",
            difficulty: 2,
            hint: "λ = hc/Δo.",
          },
          {
            kind: "numeric",
            q: t`How many geometrical isomers does square planar $[\text{Pt}(\text{NH}_3)(\text{py})(\text{Cl})(\text{Br})]$ have?`,
            answer: 3,
            explain: "MABCD square planar: 3 geometrical isomers (each of B, C, D trans to A in turn).",
          },
          {
            kind: "multi",
            q: t`For octahedral $[\text{M}(\text{AA})_3]$ and $[\text{MA}_2\text{B}_2\text{C}_2]$, which statements are true?`,
            options: [
              "[M(AA)₃] has 2 stereoisomers, both optically active",
              "[MA₂B₂C₂] has 5 geometrical isomers",
              "[MA₂B₂C₂] has no optically active isomer",
              "[M(AA)₃] shows geometrical isomerism",
            ],
            answers: [0, 1],
            explain: "[M(AA)₃] exists only as a d/l pair (no geometrical isomers). [MA₂B₂C₂] has 5 geometrical isomers, and its all-cis form is chiral.",
            difficulty: 3,
            hint: "Look for a plane of symmetry in the all-cis isomer.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Chemical Kinetics": "c12-chemical-kinetics",
  "12:The d- and f-Block Elements": "c12-d-and-f-block",
  "12:d- and f-Block Elements": "c12-d-and-f-block",
  "12:Coordination Compounds": "c12-coordination-compounds",
};
