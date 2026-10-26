import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Solutions (NCERT Class 12 Unit 1; same title in ISC)                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-solutions",
    title: "Solutions",
    icon: "🧪",
    description: "Types of solutions, concentration terms, Henry's and Raoult's laws, ideal and non-ideal solutions, colligative properties and the van't Hoff factor.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c12-sol-types-concentration",
        title: "Types of Solutions and Ways to Express Concentration",
        summary: "What a solution is, the nine types by physical state, and the concentration terms NCERT uses: mass %, volume %, mass by volume %, ppm, mole fraction, molarity and molality.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🧂",
            caption: t`A glass of nimbu pani, the air you breathe and an 18-carat gold ring are all solutions. Only their states differ.`,
          },
          {
            type: "text",
            md: t`A **solution** is a **homogeneous mixture** of two or more substances: its composition and properties are the same throughout. A **binary solution** has two components. The component present in the largest amount is usually the **solvent**; the others are **solutes**. The physical state of the solution is normally that of the solvent.

Every solution has its own composition, so we need numbers that say *how much* solute is present. These numbers are the **concentration terms**.`,
          },
          {
            type: "table",
            headers: ["Solvent state", "Solute state", "Example"],
            rows: [
              ["Gas", "Gas", "mixture of oxygen and nitrogen"],
              ["Gas", "Liquid", "chloroform vapour mixed with nitrogen"],
              ["Gas", "Solid", "camphor vapour in nitrogen"],
              ["Liquid", "Gas", "oxygen dissolved in water"],
              ["Liquid", "Liquid", "ethanol dissolved in water"],
              ["Liquid", "Solid", "glucose dissolved in water"],
              ["Solid", "Gas", "hydrogen dissolved in palladium"],
              ["Solid", "Liquid", "amalgam of mercury with sodium"],
              ["Solid", "Solid", "copper dissolved in gold"],
            ],
          },
          {
            type: "heading",
            text: "Concentration terms",
          },
          {
            type: "table",
            headers: ["Term", "Definition", "Changes with temperature?"],
            rows: [
              ["Mass percentage (w/w)", t`$\dfrac{\text{mass of solute}}{\text{mass of solution}} \times 100$`, "No"],
              ["Volume percentage (V/V)", t`$\dfrac{\text{volume of solute}}{\text{volume of solution}} \times 100$`, "Yes"],
              ["Mass by volume percentage (w/V)", t`$\dfrac{\text{mass of solute in g}}{\text{volume of solution in mL}} \times 100$`, "Yes"],
              ["Parts per million (ppm)", t`$\dfrac{\text{parts of solute}}{\text{parts of all components}} \times 10^6$`, "No (if by mass)"],
              ["Mole fraction", t`$x_i = \dfrac{n_i}{n_1 + n_2 + \cdots}$, and $\sum x_i = 1$`, "No"],
              ["Molarity (M)", t`$\dfrac{\text{moles of solute}}{\text{volume of solution in L}}$, unit mol L$^{-1}$`, "Yes"],
              ["Molality (m)", t`$\dfrac{\text{moles of solute}}{\text{mass of solvent in kg}}$, unit mol kg$^{-1}$`, "No"],
            ],
          },
          {
            type: "formula",
            tex: t`M = \frac{w_2 \times 1000}{M_2 \times V_{\text{soln}}(\text{mL})} \qquad m = \frac{w_2 \times 1000}{M_2 \times w_1(\text{g})}`,
            caption: t`$w_2$, $M_2$: mass and molar mass of solute; $w_1$: mass of solvent in grams. Volume changes with temperature, mass does not, so molality is temperature-independent.`,
          },
          {
            type: "example",
            title: "Molality, mass % and mole fraction from one recipe",
            problem: t`A student dissolves 4.5 g of glucose ($\text{C}_6\text{H}_{12}\text{O}_6$, $M = 180$ g mol$^{-1}$) in 250 g of water. Find (a) the molality, (b) the mass percentage of glucose and (c) the mole fraction of glucose. Take $M(\text{H}_2\text{O}) = 18$ g mol$^{-1}$.`,
            steps: [
              t`Moles of glucose $= 4.5/180 = 0.025$ mol.`,
              t`(a) Molality $= 0.025 \text{ mol} / 0.250 \text{ kg} = 0.10$ mol kg$^{-1}$.`,
              t`(b) Mass of solution $= 4.5 + 250 = 254.5$ g, so mass % $= (4.5/254.5) \times 100 = 1.77\%$.`,
              t`(c) Moles of water $= 250/18 = 13.89$ mol. $x_{\text{glucose}} = 0.025/(0.025 + 13.89) = 0.025/13.91 = 1.80 \times 10^{-3}$.`,
            ],
            answer: t`$m = 0.10$ mol kg$^{-1}$; 1.77% by mass; $x_{\text{glucose}} \approx 1.8 \times 10^{-3}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`4.0 g of NaOH ($M = 40$ g mol$^{-1}$) is dissolved to make 250 mL of solution. What is its molarity?`,
                answer: 0.4,
                tolerance: 0.005,
                unit: "M",
                explain: t`Moles $= 4.0/40 = 0.10$ mol; volume $= 0.250$ L; $M = 0.10/0.250 = 0.40$ M.`,
              },
              {
                kind: "mcq",
                q: "Which concentration term does NOT change when the solution is warmed?",
                options: ["Molarity", "Molality", "Mass by volume percentage", "Volume percentage"],
                answer: 1,
                explain: "Molality uses the mass of solvent. Mass does not change on heating; volume expands, so the other three change.",
              },
            ],
          },
          {
            type: "example",
            title: "From mass % and density to molarity and molality",
            problem: t`Concentrated hydrochloric acid in a lab bottle is 36.5% HCl by mass and has density 1.18 g mL$^{-1}$. Find its molarity and molality. $M(\text{HCl}) = 36.5$ g mol$^{-1}$.`,
            steps: [
              t`Take 1 L = 1000 mL of solution. Its mass $= 1000 \times 1.18 = 1180$ g.`,
              t`Mass of HCl $= 0.365 \times 1180 = 430.7$ g, so moles of HCl $= 430.7/36.5 = 11.8$ mol. Molarity $= 11.8$ M.`,
              t`Mass of water $= 1180 - 430.7 = 749.3$ g $= 0.7493$ kg.`,
              t`Molality $= 11.8/0.7493 = 15.7$ mol kg$^{-1}$.`,
            ],
            answer: t`About 11.8 M and 15.7 mol kg$^{-1}$. Molality is larger because 1 kg of water holds more HCl than 1 L of solution does here.`,
          },
          {
            type: "text",
            md: t`**Dilution.** Adding solvent does not change the moles of solute, so $M_1V_1 = M_2V_2$. To make 500 mL of 0.6 M HCl from 12 M stock: $V_1 = 0.6 \times 500 / 12 = 25$ mL of stock, made up to 500 mL with water. **ppm** is used for very small amounts, such as fluoride or lead in drinking water: 0.002 g of lead in 500 g of water is $(0.002/500) \times 10^6 = 4$ ppm.`,
          },
          {
            type: "mistake",
            wrong: t`Molarity is moles of solute per litre of **water** added, and molality is moles per kg of **solution**.`,
            right: t`Molarity is per litre of **solution**; molality is per kg of **solvent**.`,
            why: "Both words start with 'mol' and both have a 'per' in them, so learners swap the denominators. Check the unit: mol L⁻¹ always means litres of the final solution, mol kg⁻¹ always means kilograms of solvent only.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does this quantity change with temperature?",
              groups: ["Changes with temperature", "Does not change"],
              items: [
                { text: "Molarity", group: 0, hint: "It has volume of solution in the denominator." },
                { text: "Molality", group: 1, hint: "Moles and mass of solvent are both fixed." },
                { text: "Mole fraction", group: 1, hint: "A ratio of moles only." },
                { text: "Mass percentage", group: 1, hint: "A ratio of masses only." },
                { text: "Volume percentage", group: 0, hint: "Liquids expand on warming, and not equally." },
                { text: "Mass by volume percentage", group: 0, hint: "Volume is in the denominator." },
                { text: "ppm by mass", group: 1, hint: "Mass ÷ mass." },
              ],
              explain: "Any term with a volume in it depends on temperature, because liquids expand when heated. Terms built only from masses or moles do not.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Write the formula first, then the substituted values with units, then the answer with its unit. In "density given" questions, most marks are lost by dividing by the mass of solution instead of the mass of solvent while finding molality. Show the solvent mass as a separate line.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`CBSE and Karnataka PUC follow NCERT, which no longer uses **normality**. Some ISC papers and older reference books still do: normality $=$ molarity $\times$ n-factor (for example, 1 M $\text{H}_2\text{SO}_4$ is 2 N as an acid).`,
          },
          {
            type: "keypoints",
            items: [
              "A solution is a homogeneous mixture; there are nine types by the states of solute and solvent.",
              "Molarity is per litre of solution; molality is per kilogram of solvent.",
              "Mass %, ppm (by mass), mole fraction and molality do not depend on temperature; molarity and volume-based terms do.",
              t`Mole fractions of all components add up to 1. On dilution, $M_1V_1 = M_2V_2$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Define molality.", back: t`Moles of solute per kilogram of solvent (mol kg$^{-1}$). It does not change with temperature.` },
          { front: "Define molarity.", back: t`Moles of solute per litre of solution (mol L$^{-1}$, symbol M). It falls slightly as the solution is heated.` },
          { front: "Mole fraction of a component", back: t`$x_i = n_i / \sum n$. All mole fractions add up to 1.` },
          { front: "When is ppm used?", back: "For very dilute solutions, such as pollutants or fluoride in water: parts of solute per million parts of the whole." },
          { front: "Example of a solid-in-gas solution", back: "Camphor vapour in nitrogen gas." },
          { front: "Example of a gas-in-solid solution", back: "Hydrogen dissolved in palladium." },
          { front: "Dilution equation", back: t`$M_1V_1 = M_2V_2$, because moles of solute stay the same.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`3.0 g of urea ($M = 60$ g mol$^{-1}$) is dissolved in 200 g of water. Find the molality.`,
            answer: 0.25,
            tolerance: 0.005,
            unit: "mol/kg",
            explain: t`Moles $= 3.0/60 = 0.050$; molality $= 0.050/0.200 = 0.25$ mol kg$^{-1}$.`,
          },
          {
            kind: "numeric",
            q: t`An aqueous solution is 31% ethylene glycol ($\text{C}_2\text{H}_6\text{O}_2$, $M = 62$ g mol$^{-1}$) by mass. Find the mole fraction of ethylene glycol (to 3 decimal places).`,
            answer: 0.115,
            tolerance: 0.002,
            explain: t`In 100 g: glycol $31/62 = 0.500$ mol, water $69/18 = 3.833$ mol. $x = 0.500/4.333 = 0.115$.`,
            difficulty: 2,
            hint: "Take 100 g of solution, so the masses are 31 g and 69 g.",
          },
          {
            kind: "mcq",
            q: "Brass, an alloy of copper and zinc, is an example of which type of solution?",
            options: ["Solid in liquid", "Solid in solid", "Liquid in solid", "Gas in solid"],
            answer: 1,
            explain: "Both components are solids, so brass is a solid-in-solid solution.",
          },
          {
            kind: "numeric",
            q: "What volume (in mL) of 12 M HCl is needed to prepare 250 mL of 0.48 M HCl?",
            answer: 10,
            tolerance: 0.05,
            unit: "mL",
            explain: t`$V_1 = M_2V_2/M_1 = 0.48 \times 250/12 = 10$ mL.`,
          },
          {
            kind: "truefalse",
            q: "In a binary solution, the sum of the mole fractions of solute and solvent is always 1.",
            answer: true,
            explain: t`$x_1 + x_2 = \frac{n_1 + n_2}{n_1 + n_2} = 1$.`,
          },
          {
            kind: "numeric",
            q: "A 2.0 kg sample of well water contains 3.0 mg of fluoride. What is the fluoride level in ppm (by mass)?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "ppm",
            explain: t`$3.0 \text{ mg} = 3.0 \times 10^{-3}$ g. ppm $= (3.0 \times 10^{-3}/2000) \times 10^6 = 1.5$ ppm.`,
            difficulty: 2,
            hint: "Convert both masses to grams before dividing.",
          },
          {
            kind: "mcq",
            q: "For a very dilute aqueous solution, which statement is true?",
            options: [
              "Molarity and molality are almost equal",
              "Molality is always much larger than molarity",
              "Molarity is zero",
              "Mole fraction of the solute is close to 1",
            ],
            answer: 0,
            explain: t`For a dilute aqueous solution, 1 L of solution is close to 1 kg of water (density about 1 g mL$^{-1}$), so the two numbers nearly match.`,
            difficulty: 2,
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c12-sol-solubility-vapour-pressure",
        title: "Solubility, Henry's Law and Raoult's Law",
        summary: "How solids and gases dissolve, Henry's law and its uses, vapour pressure of liquid–liquid and solid–liquid solutions, ideal and non-ideal solutions, and azeotropes.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥤",
            caption: "Open a chilled soda bottle and bubbles rush out. The gas was held in the liquid only by the high pressure of CO₂ above it.",
          },
          {
            type: "text",
            md: t`**Solubility** is the maximum amount of a substance that dissolves in a given amount of solvent at a given temperature (and, for gases, pressure). A rule of thumb: **like dissolves like**. Polar and ionic solutes dissolve in polar solvents; non-polar solutes dissolve in non-polar solvents.

When no more solute dissolves, **dissolution** and **crystallisation** happen at the same rate: a dynamic equilibrium. The solution is then **saturated**. By Le Chatelier's principle, if dissolving is endothermic ($\Delta_{\text{sol}}H > 0$) solubility rises with temperature; if it is exothermic, solubility falls. Pressure has no significant effect on solids dissolving in liquids, because solids and liquids are nearly incompressible.`,
          },
          {
            type: "heading",
            text: "Gases in liquids: Henry's law",
          },
          {
            type: "formula",
            tex: t`p = K_H \, x`,
            caption: t`The partial pressure $p$ of a gas above the solution is proportional to its mole fraction $x$ in the solution. $K_H$ (Henry's law constant) depends on the gas and the temperature.`,
          },
          {
            type: "text",
            md: t`At the same partial pressure, a gas with a **higher** $K_H$ has a **lower** mole fraction in the liquid, so it is **less soluble**. $K_H$ rises with temperature, so gases are less soluble in warm water (dissolving a gas is exothermic). This is why fish prefer cold water.

Uses and effects: soda bottles are sealed under high CO₂ pressure. Deep-sea divers breathe air under high pressure; extra nitrogen dissolves in blood and forms bubbles if they surface fast (**the bends**), so their tanks use air diluted with helium. At high altitudes, as in Ladakh, low oxygen partial pressure lowers oxygen in the blood (**anoxia**), making climbers weak and unable to think clearly.`,
          },
          {
            type: "example",
            title: "Using Henry's law",
            problem: t`At 298 K, a gas X has $K_H = 50$ kbar in water. How many moles of X dissolve in 1.0 L of water (55.5 mol) when its partial pressure is 2.0 bar?`,
            steps: [
              t`$x = p/K_H = 2.0 \text{ bar} / (50 \times 10^3 \text{ bar}) = 4.0 \times 10^{-5}$.`,
              t`For a very dilute solution, $x \approx n_X / n_{\text{water}}$, so $n_X \approx x \times 55.5$.`,
              t`$n_X = 4.0 \times 10^{-5} \times 55.5 = 2.2 \times 10^{-3}$ mol.`,
            ],
            answer: t`About $2.2 \times 10^{-3}$ mol of X dissolves in 1 L of water.`,
          },
          {
            type: "formula",
            tex: t`p_1 = p_1^\circ x_1, \quad p_2 = p_2^\circ x_2, \quad p_{\text{total}} = p_1^\circ + (p_2^\circ - p_1^\circ)\,x_2`,
            caption: t`For a solution of two volatile liquids, each partial pressure is its pure vapour pressure times its mole fraction in the liquid. The total pressure varies linearly with $x_2$. In the vapour, $y_1 = p_1/p_{\text{total}}$.`,
          },
          {
            type: "example",
            title: "Composition of the vapour",
            problem: t`Liquids A and B form an ideal solution. At 300 K, $p_A^\circ = 450$ mm Hg and $p_B^\circ = 700$ mm Hg. Find the total vapour pressure and the vapour composition when $x_A = 0.40$.`,
            steps: [
              t`$p_A = 450 \times 0.40 = 180$ mm Hg; $p_B = 700 \times 0.60 = 420$ mm Hg.`,
              t`$p_{\text{total}} = 180 + 420 = 600$ mm Hg.`,
              t`$y_A = 180/600 = 0.30$; $y_B = 420/600 = 0.70$.`,
            ],
            answer: t`600 mm Hg. The vapour is 70% B: it is richer in the more volatile liquid than the liquid is (60% B).`,
          },
          {
            type: "text",
            md: t`**Raoult's law as a special case of Henry's law.** Both say $p \propto x$. In Raoult's law the constant is $p_1^\circ$; in Henry's law it is $K_H$. So for a volatile component, Raoult's law is Henry's law with $K_H = p_1^\circ$.

**Non-volatile solute.** If the solute (say glucose) does not evaporate, only the solvent contributes: $p = p_1^\circ x_1$. Since $x_1 < 1$, the solution has a **lower vapour pressure** than the pure solvent. Fewer solvent molecules sit at the surface to escape.`,
          },
          {
            type: "table",
            headers: ["Property", "Ideal", "Positive deviation", "Negative deviation"],
            rows: [
              ["A–B attraction compared with A–A and B–B", "about the same", "weaker", "stronger"],
              ["Vapour pressure vs Raoult's law", "obeys it at all compositions", "higher", "lower"],
              [t`$\Delta_{\text{mix}}H$`, "0", "> 0 (heat absorbed)", "< 0 (heat released)"],
              [t`$\Delta_{\text{mix}}V$`, "0", "> 0 (expands)", "< 0 (contracts)"],
              ["Azeotrope formed", "none", "minimum-boiling", "maximum-boiling"],
              ["Examples", "n-hexane + n-heptane; benzene + toluene; bromoethane + chloroethane", "ethanol + acetone; carbon disulphide + acetone; ethanol + water", "chloroform + acetone; phenol + aniline; nitric acid + water"],
            ],
          },
          {
            type: "text",
            md: t`An **azeotrope** is a mixture that boils at constant temperature with the **same composition in liquid and vapour**, so it cannot be separated by fractional distillation. Ethanol and water give a minimum-boiling azeotrope at about 95% ethanol by volume. Nitric acid and water give a maximum-boiling azeotrope at about 68% nitric acid by mass (boiling point 393.5 K). In chloroform + acetone, the H of chloroform hydrogen-bonds with the C=O oxygen of acetone, which is why the mixture shows negative deviation.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Gas P has a larger Henry's law constant than gas Q in water at 298 K. At the same partial pressure:",
                options: ["P is more soluble than Q", "P is less soluble than Q", "Both are equally soluble", "Neither dissolves"],
                answer: 1,
                explain: t`$x = p/K_H$: a larger $K_H$ gives a smaller mole fraction, so P is less soluble.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A bigger Henry's law constant means the gas dissolves better.",
            right: t`A bigger $K_H$ means a **lower** solubility, because $x = p/K_H$.`,
            why: "In most of chemistry a bigger constant means 'more' of something. Here K_H sits in the denominator of the solubility, so it measures how strongly the gas 'pushes back' out of the liquid.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each mixture by its deviation from Raoult's law.",
              groups: ["Nearly ideal", "Positive deviation", "Negative deviation"],
              items: [
                { text: "n-hexane + n-heptane", group: 0, hint: "Two very similar non-polar molecules." },
                { text: "benzene + toluene", group: 0, hint: "Similar size and similar forces." },
                { text: "ethanol + acetone", group: 1, hint: "Acetone breaks up ethanol's hydrogen bonds." },
                { text: "carbon disulphide + acetone", group: 1, hint: "Polar acetone and non-polar CS₂ attract each other weakly." },
                { text: "chloroform + acetone", group: 2, hint: "A new hydrogen bond forms between the two." },
                { text: "phenol + aniline", group: 2, hint: "The phenolic H hydrogen-bonds with the N of aniline." },
                { text: "nitric acid + water", group: 2, hint: "Gives a maximum-boiling azeotrope." },
                { text: "ethanol + water", group: 1, hint: "Gives a minimum-boiling azeotrope at about 95% ethanol." },
              ],
              explain: "New attractions stronger than the old ones pull vapour pressure down (negative deviation). Weaker A–B attractions let molecules escape more easily (positive deviation).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`For "ideal vs non-ideal" 3-mark questions, give: the interaction comparison, signs of $\Delta_{\text{mix}}H$ and $\Delta_{\text{mix}}V$, the sketch description (vapour pressure line above or below the Raoult line) and **one named example**. A missing example usually costs a mark.`,
          },
          {
            type: "keypoints",
            items: [
              t`Henry's law: $p = K_H x$. Higher $K_H$ means lower solubility; gas solubility falls as temperature rises.`,
              t`Raoult's law: $p_i = p_i^\circ x_i$. The vapour is richer in the more volatile component.`,
              "A non-volatile solute lowers the vapour pressure of the solvent.",
              t`Positive deviation: weaker A–B forces, $\Delta_{\text{mix}}H > 0$, minimum-boiling azeotrope. Negative deviation: stronger A–B forces, $\Delta_{\text{mix}}H < 0$, maximum-boiling azeotrope.`,
            ],
          },
        ],
        flashcards: [
          { front: "State Henry's law.", back: t`At constant temperature, the partial pressure of a gas over a solution is proportional to its mole fraction in the solution: $p = K_H x$.` },
          { front: "Why do scuba tanks use helium-diluted air?", back: "Helium is much less soluble in blood than nitrogen, which reduces the risk of the bends when the diver rises." },
          { front: "State Raoult's law for a volatile component.", back: t`Its partial vapour pressure equals its pure vapour pressure times its mole fraction in the solution: $p_1 = p_1^\circ x_1$.` },
          { front: "What is an ideal solution?", back: t`One that obeys Raoult's law at all compositions, with $\Delta_{\text{mix}}H = 0$ and $\Delta_{\text{mix}}V = 0$.` },
          { front: "What is an azeotrope?", back: "A liquid mixture that boils at constant temperature with the same composition in the liquid and vapour, so it cannot be separated by fractional distillation." },
          { front: "Which azeotrope does a positive-deviation mixture give?", back: "A minimum-boiling azeotrope (example: ethanol + water at about 95% ethanol by volume)." },
          { front: "Why is chloroform + acetone a negative deviation?", back: "Chloroform's H forms a hydrogen bond with acetone's carbonyl oxygen, so A–B attraction is stronger than in the pure liquids." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Dissolving a gas in water is usually exothermic. What happens to its solubility when the water is warmed?",
            options: ["It increases", "It decreases", "It stays the same", "It first increases, then decreases"],
            answer: 1,
            explain: "By Le Chatelier's principle, heating favours the endothermic direction, which is the gas escaping. K_H rises with temperature.",
          },
          {
            kind: "numeric",
            q: t`Liquids A ($p^\circ = 200$ mm Hg) and B ($p^\circ = 500$ mm Hg) form an ideal solution with $x_B = 0.30$. Find the total vapour pressure in mm Hg.`,
            answer: 290,
            tolerance: 0.5,
            unit: "mm Hg",
            explain: t`$p = 200 \times 0.70 + 500 \times 0.30 = 140 + 150 = 290$ mm Hg.`,
          },
          {
            kind: "numeric",
            q: t`For the solution in the previous question ($p_A^\circ = 200$, $p_B^\circ = 500$ mm Hg, $x_B = 0.30$), find the mole fraction of B in the vapour (2 decimal places).`,
            answer: 0.52,
            tolerance: 0.01,
            explain: t`$y_B = p_B/p_{\text{total}} = 150/290 = 0.517 \approx 0.52$.`,
            difficulty: 2,
            hint: "Divide B's partial pressure by the total pressure.",
          },
          {
            kind: "mcq",
            q: "Which mixture shows negative deviation from Raoult's law?",
            options: ["Ethanol + acetone", "Benzene + toluene", "Acetone + chloroform", "Carbon disulphide + acetone"],
            answer: 2,
            explain: "Acetone and chloroform form hydrogen bonds with each other, which lowers the vapour pressure below the Raoult value.",
          },
          {
            kind: "truefalse",
            q: "For a solution showing positive deviation, the volume of the mixture is less than the sum of the volumes of the pure liquids.",
            answer: false,
            explain: t`Positive deviation means weaker A–B attraction, so the mixture expands: $\Delta_{\text{mix}}V > 0$. Contraction goes with negative deviation.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Climbers at high altitudes feel weak and confused because:",
            options: [
              "The partial pressure of oxygen is low, so less oxygen dissolves in the blood",
              "Nitrogen bubbles form in the blood",
              "Blood boils at a lower temperature",
              "Carbon dioxide becomes more soluble",
            ],
            answer: 0,
            explain: "By Henry's law, lower partial pressure of O₂ means a lower mole fraction of O₂ in blood (anoxia). Nitrogen bubbles (bends) are a diving problem.",
          },
          {
            kind: "multi",
            q: "Which statements are true for an ideal solution?",
            options: [
              "It obeys Raoult's law at all compositions",
              t`$\Delta_{\text{mix}}H = 0$`,
              t`$\Delta_{\text{mix}}V = 0$`,
              "It forms a maximum-boiling azeotrope",
            ],
            answers: [0, 1, 2],
            explain: "An ideal solution has no heat or volume change on mixing and follows Raoult's law. Azeotropes come only from non-ideal solutions.",
          },
          {
            kind: "mcq",
            q: "Why can't ethanol be made 100% pure from a water–ethanol mixture by fractional distillation alone?",
            options: [
              "Ethanol decomposes on boiling",
              "The mixture forms a minimum-boiling azeotrope at about 95% ethanol",
              "Water and ethanol have the same boiling point",
              "Ethanol is non-volatile",
            ],
            answer: 1,
            explain: "At the azeotropic composition, liquid and vapour have the same composition, so further distillation cannot enrich the ethanol.",
            difficulty: 2,
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c12-sol-colligative-vp-bp-fp",
        title: "Colligative Properties: Vapour Pressure, Boiling and Freezing Points",
        summary: "Relative lowering of vapour pressure, elevation of boiling point and depression of freezing point, with the formulas to find molar masses.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍦",
            caption: "Street kulfi-makers pack the moulds in ice mixed with salt. The salty ice melts below 0 °C and chills the kulfi faster.",
          },
          {
            type: "text",
            md: t`A **colligative property** depends only on the **number of solute particles** in a given amount of solvent, not on what those particles are. There are four: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure. In this lesson the solute is **non-volatile** and a **non-electrolyte**, and the solution is **dilute**.`,
          },
          {
            type: "heading",
            text: "1. Relative lowering of vapour pressure",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`By Raoult's law, only the solvent evaporates: $p_1 = p_1^\circ x_1$.`,
              t`Lowering of vapour pressure: $\Delta p_1 = p_1^\circ - p_1 = p_1^\circ(1 - x_1) = p_1^\circ x_2$.`,
              t`Divide by $p_1^\circ$: $\dfrac{p_1^\circ - p_1}{p_1^\circ} = x_2 = \dfrac{n_2}{n_1 + n_2}$. This is the **relative lowering**, and it equals the mole fraction of solute.`,
              t`For a dilute solution $n_2 \ll n_1$, so $\dfrac{p_1^\circ - p_1}{p_1^\circ} \approx \dfrac{n_2}{n_1} = \dfrac{w_2 M_1}{M_2 w_1}$, which lets us find $M_2$.`,
            ],
          },
          {
            type: "example",
            title: "Vapour pressure of a glucose solution",
            problem: t`18 g of glucose ($M = 180$) is dissolved in 178.2 g of water at 298 K, where $p^\circ$ of water is 23.8 mm Hg. Find the vapour pressure of the solution.`,
            steps: [
              t`$n_2 = 18/180 = 0.10$ mol; $n_1 = 178.2/18 = 9.90$ mol.`,
              t`$x_2 = 0.10/(0.10 + 9.90) = 0.010$.`,
              t`Lowering $= p^\circ x_2 = 23.8 \times 0.010 = 0.238$ mm Hg.`,
              t`$p = 23.8 - 0.238 = 23.56$ mm Hg.`,
            ],
            answer: t`About 23.56 mm Hg.`,
          },
          {
            type: "heading",
            text: "2. Elevation of boiling point and 3. Depression of freezing point",
          },
          {
            type: "text",
            md: t`A liquid boils when its vapour pressure equals the outside pressure. The solution has a lower vapour pressure, so it must be heated to a **higher** temperature to boil: $\Delta T_b = T_b - T_b^\circ > 0$.

A liquid freezes when its vapour pressure equals that of the solid. The solution's lower vapour pressure meets the solid's curve at a **lower** temperature, so it freezes lower: $\Delta T_f = T_f^\circ - T_f > 0$. Both changes are proportional to the molality of the solution.`,
          },
          {
            type: "formula",
            tex: t`\Delta T_b = K_b\, m \qquad \Delta T_f = K_f\, m \qquad M_2 = \frac{K \times w_2 \times 1000}{\Delta T \times w_1}`,
            caption: t`$K_b$ (ebullioscopic constant) and $K_f$ (cryoscopic constant) are in K kg mol$^{-1}$. Water: $K_b = 0.52$, $K_f = 1.86$. Benzene: $K_b = 2.53$, $K_f = 5.12$. $w_1$ is the solvent mass in grams.`,
          },
          {
            type: "example",
            title: "Molar mass from freezing point depression",
            problem: t`2.0 g of a non-volatile non-electrolyte dissolved in 50 g of benzene lowers its freezing point by 0.40 K. $K_f$ (benzene) $= 5.12$ K kg mol$^{-1}$. Find the molar mass of the solute.`,
            steps: [
              t`$M_2 = \dfrac{K_f \times w_2 \times 1000}{\Delta T_f \times w_1}$.`,
              t`$M_2 = \dfrac{5.12 \times 2.0 \times 1000}{0.40 \times 50} = \dfrac{10240}{20}$.`,
              t`$M_2 = 512$ g mol$^{-1}$.`,
            ],
            answer: t`512 g mol$^{-1}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`15 g of urea ($M = 60$) is dissolved in 500 g of water. By how many kelvin is the boiling point raised? ($K_b = 0.52$ K kg mol$^{-1}$)`,
                answer: 0.26,
                tolerance: 0.005,
                unit: "K",
                explain: t`$m = (15/60)/0.500 = 0.50$ mol kg$^{-1}$. $\Delta T_b = 0.52 \times 0.50 = 0.26$ K, so it boils at about 373.41 K.`,
              },
            ],
          },
          {
            type: "text",
            md: t`$K_b$ and $K_f$ depend only on the solvent: $K_b = \dfrac{R \, M_1 \, (T_b^\circ)^2}{1000 \, \Delta_{\text{vap}}H}$ and $K_f = \dfrac{R \, M_1 \, (T_f^\circ)^2}{1000 \, \Delta_{\text{fus}}H}$, with $M_1$ in g mol$^{-1}$. **Antifreeze**: ethylene glycol added to car radiator water in cold places like Leh keeps it liquid in winter. To keep 4.0 kg of water liquid down to $-6$ °C needs $m = 6/1.86 = 3.23$ mol kg$^{-1}$, that is $3.23 \times 4.0 \times 62 \approx 800$ g of glycol.`,
          },
          {
            type: "mistake",
            wrong: t`In $\Delta T = Km$, I can put the solvent mass in grams directly, or use the mass of the whole solution.`,
            right: t`Molality needs the mass of **solvent** in **kilograms**. In the $w_2 \times 1000 / (M_2 w_1)$ form, the 1000 converts grams of solvent to kilograms.`,
            why: "The constants are in K kg mol⁻¹, so a mass in grams makes the answer 1000 times too small. Using the solution's mass is a second, smaller error that examiners also mark down.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the boiling point argument in order.",
              items: [
                "A non-volatile solute takes up part of the surface",
                "Fewer solvent molecules escape, so vapour pressure falls",
                "At the solvent's normal boiling point the solution's vapour pressure is below 1 atm",
                "The solution must be heated further to reach 1 atm",
                "So the boiling point rises in proportion to molality",
              ],
              explain: "Every colligative effect starts from the same root: fewer solvent molecules at the surface, so a lower vapour pressure.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`State all three conditions when you define colligative properties or use these formulas: **dilute** solution, **non-volatile** solute, solute **neither dissociates nor associates**. Write $\Delta T_f = T_f^\circ - T_f$, not the other way round, so that $\Delta T_f$ is positive.`,
          },
          {
            type: "keypoints",
            items: [
              "Colligative properties depend on the number of solute particles, not their identity.",
              t`Relative lowering of vapour pressure $= x_2 \approx n_2/n_1$ for dilute solutions.`,
              t`$\Delta T_b = K_b m$ and $\Delta T_f = K_f m$; for water $K_b = 0.52$ and $K_f = 1.86$ K kg mol$^{-1}$.`,
              t`Molar mass: $M_2 = K w_2 \times 1000/(\Delta T\, w_1)$, with $w_1$ the solvent mass in grams.`,
            ],
          },
        ],
        flashcards: [
          { front: "What is a colligative property?", back: "A property of a dilute solution that depends only on the number of solute particles, not on their nature." },
          { front: "Name the four colligative properties.", back: "Relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure." },
          { front: "Relative lowering of vapour pressure equals…", back: t`The mole fraction of the solute: $(p_1^\circ - p_1)/p_1^\circ = x_2$.` },
          { front: t`Unit of $K_b$ and $K_f$`, back: t`K kg mol$^{-1}$.` },
          { front: t`$K_f$ and $K_b$ of water`, back: t`$K_f = 1.86$, $K_b = 0.52$ K kg mol$^{-1}$.` },
          { front: "Why does salt melt ice on a cold road?", back: "The salt solution has a lower freezing point than pure water, so ice in contact with it melts below 0 °C." },
          { front: "Why is molality, not molarity, used for ΔTb and ΔTf?", back: "Boiling and freezing happen at different temperatures, and molality does not change with temperature." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A solution of 6.0 g of a non-volatile solute in 100 g of water freezes at $-0.93$ °C. Find the molar mass of the solute. ($K_f = 1.86$ K kg mol$^{-1}$)`,
            answer: 120,
            tolerance: 1,
            unit: "g/mol",
            explain: t`$M_2 = 1.86 \times 6.0 \times 1000/(0.93 \times 100) = 11160/93 = 120$ g mol$^{-1}$.`,
          },
          {
            kind: "mcq",
            q: "Which is NOT a colligative property?",
            options: ["Osmotic pressure", "Depression of freezing point", "Vapour pressure of the solution", "Relative lowering of vapour pressure"],
            answer: 2,
            explain: "The vapour pressure itself depends on the solvent. Its relative lowering is the colligative property.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`The vapour pressure of pure benzene at a certain temperature is 640 mm Hg. A non-volatile solute lowers it to 624 mm Hg. Find the mole fraction of the solute.`,
            answer: 0.025,
            tolerance: 0.001,
            explain: t`$x_2 = (640 - 624)/640 = 16/640 = 0.025$.`,
          },
          {
            kind: "mcq",
            q: "Equal masses of glucose (M = 180) and urea (M = 60) are dissolved separately in equal masses of water. Which has the lower freezing point?",
            options: ["Glucose solution", "Urea solution", "Both freeze at the same temperature", "It cannot be predicted"],
            answer: 1,
            explain: "Urea has the smaller molar mass, so the same mass gives three times as many moles, three times the molality and three times the depression.",
            difficulty: 2,
            hint: "Equal mass does not mean equal moles.",
          },
          {
            kind: "truefalse",
            q: t`$K_f$ for a solvent depends on the solute dissolved in it.`,
            answer: false,
            explain: t`$K_f$ is a property of the solvent only: $K_f = R M_1 (T_f^\circ)^2/(1000\,\Delta_{\text{fus}}H)$.`,
          },
          {
            kind: "numeric",
            q: t`What mass (in g) of ethylene glycol ($M = 62$) must be added to 2.0 kg of water to lower its freezing point by 3.72 K? ($K_f = 1.86$)`,
            answer: 248,
            tolerance: 1,
            unit: "g",
            explain: t`$m = 3.72/1.86 = 2.0$ mol kg$^{-1}$; moles $= 2.0 \times 2.0 = 4.0$; mass $= 4.0 \times 62 = 248$ g.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A solution of a non-volatile non-electrolyte in water boils at 100.52 °C at 1 atm. Its molality is:",
            options: ["0.52 m", "1.0 m", "0.28 m", "1.86 m"],
            answer: 1,
            explain: t`$\Delta T_b = 100.52 - 100.00 = 0.52$ K, so $m = \Delta T_b/K_b = 0.52/0.52 = 1.0$ mol kg$^{-1}$.`,
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c12-sol-osmosis-vant-hoff",
        title: "Osmotic Pressure and Abnormal Molar Masses",
        summary: "Osmosis, osmotic pressure and its use for big molecules, isotonic solutions, reverse osmosis, and the van't Hoff factor for solutes that dissociate or associate.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥒",
            caption: "Cucumber slices kept in salty water go limp; raisins left in plain water swell. Water moves through cell membranes towards the more concentrated side.",
          },
          {
            type: "text",
            md: t`A **semipermeable membrane (SPM)** lets solvent molecules through but not solute particles (for example, a parchment membrane or the membrane of a cell). If a solution and pure solvent are separated by an SPM, solvent flows **into the solution**. This net flow of solvent through an SPM from pure solvent (or a dilute solution) to a more concentrated solution is **osmosis**.

The extra pressure that must be applied on the solution side to just stop osmosis is the **osmotic pressure**, $\pi$. It is a colligative property.`,
          },
          {
            type: "formula",
            tex: t`\pi = C R T = \frac{n_2}{V} R T \quad \Rightarrow \quad M_2 = \frac{w_2 R T}{\pi V}`,
            caption: t`$C$ in mol L$^{-1}$, $R = 0.083$ L bar mol$^{-1}$ K$^{-1}$ (or 0.0821 L atm mol$^{-1}$ K$^{-1}$), $T$ in K, $V$ in L.`,
          },
          {
            type: "example",
            title: "Molar mass of a protein",
            problem: t`1.0 g of a protein dissolved to make 100 mL of solution has an osmotic pressure of $2.49 \times 10^{-3}$ bar at 300 K. Find its molar mass. ($R = 0.083$ L bar mol$^{-1}$ K$^{-1}$)`,
            steps: [
              t`$M_2 = \dfrac{w_2 R T}{\pi V}$, with $V = 0.100$ L.`,
              t`Numerator: $1.0 \times 0.083 \times 300 = 24.9$.`,
              t`Denominator: $2.49 \times 10^{-3} \times 0.100 = 2.49 \times 10^{-4}$.`,
              t`$M_2 = 24.9/(2.49 \times 10^{-4}) = 1.0 \times 10^5$ g mol$^{-1}$.`,
            ],
            answer: t`About $1.0 \times 10^5$ g mol$^{-1}$.`,
          },
          {
            type: "text",
            md: t`**Why osmotic pressure is best for polymers and proteins:** it is measured at room temperature (so biomolecules are not damaged) and, unlike $\Delta T_f$ or $\Delta T_b$, it gives a large, easily measured value even for a tiny molar concentration.

**Isotonic** solutions have the same osmotic pressure at the same temperature, so no osmosis occurs between them. Blood cells are isotonic with 0.9% (mass/volume) sodium chloride, called **normal saline**, which is why it is safe for drips. In a **hypertonic** solution (more than 0.9% NaCl) red cells lose water and shrink; in a **hypotonic** one (less than 0.9%) they swell and may burst.`,
          },
          {
            type: "text",
            md: t`**Reverse osmosis (RO).** If a pressure **greater than** the osmotic pressure is applied on the solution side, solvent is pushed out of the solution through the membrane. RO water purifiers in Indian homes and desalination plants on the coast work this way, often with a cellulose acetate membrane that lets water through but holds back dissolved salts and impurities.`,
          },
          {
            type: "heading",
            text: "Abnormal molar masses and the van't Hoff factor",
          },
          {
            type: "text",
            md: t`Electrolytes such as KCl **dissociate** in water: one formula unit gives 2 particles, so the colligative effect nearly doubles and the molar mass calculated from it comes out about half the true value. Ethanoic acid in benzene **associates** into hydrogen-bonded dimers, halving the number of particles, so its calculated molar mass comes out nearly double. Such values are **abnormal molar masses**. van't Hoff introduced a factor $i$ to correct for this.`,
          },
          {
            type: "formula",
            tex: t`i = \frac{\text{normal molar mass}}{\text{abnormal molar mass}} = \frac{\text{observed colligative property}}{\text{calculated colligative property}} = \frac{\text{total moles of particles after}}{\text{moles of particles before}}`,
            caption: t`Then $\Delta T_f = i K_f m$, $\Delta T_b = i K_b m$, $\pi = i C R T$, and relative lowering $= i\, n_2/n_1$ (dilute). For dissociation into $n$ ions, $\alpha = \dfrac{i-1}{n-1}$; for association into $n$-mers, $\alpha = \dfrac{1-i}{1 - 1/n}$.`,
          },
          {
            type: "example",
            title: "Association of benzoic acid in benzene",
            problem: t`1.22 g of benzoic acid ($\text{C}_6\text{H}_5\text{COOH}$, $M = 122$) in 20 g of benzene lowers the freezing point by 1.60 K. $K_f = 5.12$ K kg mol$^{-1}$. Find $i$ and the percentage of acid that dimerises.`,
            steps: [
              t`Without association: $m = (1.22/122)/0.020 = 0.50$ mol kg$^{-1}$, so $\Delta T_f(\text{calc}) = 5.12 \times 0.50 = 2.56$ K.`,
              t`$i = 1.60/2.56 = 0.625$.`,
              t`For $2\,\text{A} \rightleftharpoons \text{A}_2$, start with 1 mol: $(1 - \alpha)$ mol A and $\alpha/2$ mol $\text{A}_2$, so $i = 1 - \alpha/2$.`,
              t`$0.625 = 1 - \alpha/2 \Rightarrow \alpha = 0.75$.`,
            ],
            answer: t`$i = 0.625$; 75% of the benzoic acid is present as dimers.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Assuming complete dissociation, what is $i$ for $\text{K}_2\text{SO}_4$ in water?`,
                options: ["1", "2", "3", "4"],
                answer: 2,
                explain: t`$\text{K}_2\text{SO}_4 \rightarrow 2\text{K}^+ + \text{SO}_4^{2-}$: 3 ions per formula unit.`,
              },
              {
                kind: "mcq",
                q: "A red blood cell is placed in 2% NaCl solution. What happens?",
                options: ["It swells and bursts", "It shrinks", "No change", "It dissolves"],
                answer: 1,
                explain: "2% NaCl is hypertonic compared with the cell (0.9%), so water flows out and the cell shrinks.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In osmosis, the solute moves from the concentrated solution into the dilute one.",
            right: "In osmosis, only the **solvent** moves, from the dilute side (or pure solvent) to the concentrated side. The membrane stops the solute.",
            why: "Learners mix up osmosis with diffusion, in which solute particles spread out. The semipermeable membrane is the key difference.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict: what is i for ethanoic acid fully dimerised in benzene?",
              emoji: "🔗",
              options: ["2", "1", "0.5", "0"],
              answer: 2,
              trap: 0,
              explain: "Two molecules join into one dimer, so the number of particles halves: i = 0.5. Values of i above 1 mean dissociation; below 1 mean association.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Osmotic pressure $\pi = CRT$; it is the best colligative property for proteins and polymers.`,
              "Isotonic solutions have equal osmotic pressure; 0.9% NaCl is isotonic with blood cells.",
              "Reverse osmosis uses a pressure above π to push pure solvent out of a solution (desalination, RO purifiers).",
              t`van't Hoff factor $i$: above 1 for dissociation, below 1 for association; multiply every colligative formula by $i$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Define osmotic pressure.", back: "The extra pressure that must be applied on the solution side to just stop the flow of solvent into it through a semipermeable membrane." },
          { front: "Osmotic pressure formula", back: t`$\pi = CRT$ (times $i$ for electrolytes).` },
          { front: "Isotonic solutions", back: "Solutions with the same osmotic pressure at a given temperature; no osmosis occurs between them." },
          { front: "Normal saline", back: "0.9% (mass/volume) NaCl solution, isotonic with the fluid inside blood cells." },
          { front: "Reverse osmosis", back: "Flow of solvent out of a solution through an SPM when a pressure greater than its osmotic pressure is applied. Used to desalinate sea water." },
          { front: "van't Hoff factor i", back: "Normal molar mass ÷ abnormal molar mass, or observed ÷ calculated colligative property." },
          { front: t`$\alpha$ for dissociation into $n$ ions`, back: t`$\alpha = (i - 1)/(n - 1)$.` },
          { front: "Why is osmotic pressure preferred for proteins?", back: "It is measured at room temperature and gives a large value even for very dilute solutions of big molecules." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the osmotic pressure (in bar) of a 0.050 M glucose solution at 300 K. ($R = 0.083$ L bar mol$^{-1}$ K$^{-1}$)`,
            answer: 1.245,
            tolerance: 0.01,
            unit: "bar",
            explain: t`$\pi = CRT = 0.050 \times 0.083 \times 300 = 1.245$ bar.`,
          },
          {
            kind: "numeric",
            q: t`Assuming complete dissociation, find the freezing point depression (in K) of 0.050 m aqueous $\text{K}_2\text{SO}_4$. ($K_f = 1.86$)`,
            answer: 0.279,
            tolerance: 0.002,
            unit: "K",
            explain: t`$i = 3$; $\Delta T_f = 3 \times 1.86 \times 0.050 = 0.279$ K.`,
          },
          {
            kind: "numeric",
            q: t`A 0.10 m aqueous solution of a weak monobasic acid HA freezes at $-0.2046$ °C. Find the degree of dissociation (as a decimal). ($K_f = 1.86$)`,
            answer: 0.1,
            tolerance: 0.005,
            explain: t`Calculated $\Delta T_f = 1.86 \times 0.10 = 0.186$ K. $i = 0.2046/0.186 = 1.10$. For HA → H⁺ + A⁻, $n = 2$, so $\alpha = (1.10 - 1)/1 = 0.10$.`,
            difficulty: 2,
            hint: "Find i first, then use α = (i − 1)/(n − 1).",
          },
          {
            kind: "mcq",
            q: "The molar mass of NaCl found from freezing point depression in water is about:",
            options: ["117 g/mol", "58.5 g/mol", "about 29 to 30 g/mol", "zero"],
            answer: 2,
            explain: "NaCl gives nearly 2 ions, so the colligative effect nearly doubles and the calculated (abnormal) molar mass is close to 58.5/2 ≈ 29 g/mol.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In reverse osmosis, the applied pressure must be less than the osmotic pressure of the solution.",
            answer: false,
            explain: "The applied pressure must be greater than the osmotic pressure to reverse the natural flow of solvent.",
          },
          {
            kind: "mcq",
            q: "Pickles keep well in strong brine mainly because:",
            options: [
              "Bacteria lose water by osmosis and cannot grow",
              "Salt is poisonous to all cells at any level",
              "Brine raises the freezing point",
              "Salt reacts with vinegar",
            ],
            answer: 0,
            explain: "Strong brine is hypertonic to microbes, so water leaves their cells and they shrivel.",
          },
          {
            kind: "mcq",
            q: t`For a solute that trimerises completely ($3\text{A} \rightarrow \text{A}_3$), $i$ is:`,
            options: ["3", "1/3", "1", "2/3"],
            answer: 1,
            explain: "Three particles become one, so the number of particles is one-third of the original.",
          },
        ],
      },

      /* ---------------- Lesson 5: Exam edge ---------------- */
      {
        slug: "c12-sol-exam-edge",
        title: "Exam edge: Solutions for JEE, NEET, KCET and COMEDK",
        summary: "The patterns exams test most: vapour composition, comparing colligative effects with i × m, isotonic problems, partial dissociation, and linking all four colligative properties.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What gets asked.** NEET and KCET: comparing freezing or boiling points of solutions (with $i$), isotonic solutions, Henry's law ideas, examples of positive and negative deviation. JEE Main: Raoult's law with vapour composition, molar mass from colligative data, van't Hoff factor with partial dissociation. JEE Advanced: combining two colligative properties, association with equilibrium, and ideal-solution graphs. COMEDK follows the JEE Main pattern with simpler numbers.`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe to use"],
            rows: [
              [t`$\dfrac{p^\circ - p}{p} = \dfrac{n_2}{n_1}$ (exact)`, "Any concentration, non-volatile non-electrolyte. Avoids the dilute approximation."],
              [t`$\dfrac{1}{p_{\text{total}}} = \dfrac{y_A}{p_A^\circ} + \dfrac{y_B}{p_B^\circ}$`, "Ideal binary solution when the vapour composition is given."],
              [t`Compare $i \times m$`, "Ranking ΔTf, ΔTb, π or lowering of vapour pressure across solutions in the same solvent."],
              [t`$\dfrac{\Delta T_f}{K_f} = \dfrac{\Delta T_b}{K_b} = i\,m$`, "Converting one colligative property into another for the same solution."],
              [t`$\pi = i\,CRT$; isotonic means equal $iC$`, "Same temperature. Molarity ≈ molality only for dilute aqueous solutions."],
            ],
          },
          {
            type: "example",
            title: "KCET / NEET level: ranking freezing points",
            problem: t`Which has the lowest freezing point: 0.10 m glucose, 0.10 m NaCl, 0.050 m $\text{CaCl}_2$ or 0.050 m $\text{Al}_2(\text{SO}_4)_3$? Assume complete dissociation.`,
            steps: [
              t`Glucose: $i = 1$, $im = 0.10$.`,
              t`NaCl: $i = 2$, $im = 0.20$.`,
              t`$\text{CaCl}_2$: $i = 3$, $im = 0.15$.`,
              t`$\text{Al}_2(\text{SO}_4)_3 \rightarrow 2\text{Al}^{3+} + 3\text{SO}_4^{2-}$: $i = 5$, $im = 0.25$.`,
            ],
            answer: t`0.050 m $\text{Al}_2(\text{SO}_4)_3$ has the largest $im$, so the largest depression and the lowest freezing point.`,
          },
          {
            type: "example",
            title: "JEE Main level: liquid composition from vapour composition",
            problem: t`Liquids A and B form an ideal solution with $p_A^\circ = 120$ mm Hg and $p_B^\circ = 360$ mm Hg. The vapour in equilibrium contains equal moles of A and B. Find the total vapour pressure and $x_A$ in the liquid.`,
            steps: [
              t`$\dfrac{1}{p} = \dfrac{0.5}{120} + \dfrac{0.5}{360} = \dfrac{1.5 + 0.5}{360} = \dfrac{2}{360}$, so $p = 180$ mm Hg.`,
              t`$y_A = x_A p_A^\circ / p \Rightarrow x_A = y_A p / p_A^\circ = 0.5 \times 180/120 = 0.75$.`,
              t`Check: $0.75 \times 120 + 0.25 \times 360 = 90 + 90 = 180$ mm Hg. ✓`,
            ],
            answer: t`$p = 180$ mm Hg; $x_A = 0.75$, $x_B = 0.25$.`,
          },
          {
            type: "example",
            title: "NEET level: isotonic solutions",
            problem: t`A 4.5% (w/V) glucose solution is isotonic with an NaCl solution at the same temperature. Assuming complete dissociation of NaCl, find the % (w/V) of NaCl.`,
            steps: [
              t`Glucose: 45 g L$^{-1}$ $\div$ 180 g mol$^{-1}$ $= 0.25$ M, $i = 1$, so $iC = 0.25$.`,
              t`NaCl needs $iC = 0.25$ with $i = 2$, so $C = 0.125$ M.`,
              t`Mass per litre $= 0.125 \times 58.5 = 7.31$ g L$^{-1}$, which is 0.731 g per 100 mL.`,
            ],
            answer: "About 0.73% (w/V) NaCl.",
          },
          {
            type: "example",
            title: "JEE Main level: partial dissociation",
            problem: t`A salt $\text{AB}_2$ is 80% dissociated in a 0.20 m aqueous solution. Find the freezing point of the solution. ($K_f = 1.86$ K kg mol$^{-1}$)`,
            steps: [
              t`$\text{AB}_2 \rightarrow \text{A}^{2+} + 2\text{B}^-$, so $n = 3$.`,
              t`$i = 1 + (n - 1)\alpha = 1 + 2 \times 0.80 = 2.6$.`,
              t`$\Delta T_f = i K_f m = 2.6 \times 1.86 \times 0.20 = 0.967$ K.`,
            ],
            answer: t`The solution freezes at about $-0.97$ °C.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: one measurement, four properties",
            problem: t`An aqueous solution (of any solute) freezes at $-0.186$ °C. Find (a) its boiling point elevation, (b) the relative lowering of vapour pressure, and (c) its osmotic pressure at 298 K, taking molarity ≈ molality. ($K_f = 1.86$, $K_b = 0.52$ K kg mol$^{-1}$, $R = 0.083$ L bar mol$^{-1}$ K$^{-1}$)`,
            steps: [
              t`$\Delta T_f = 0.186$ K gives the effective molality $im = 0.186/1.86 = 0.10$ mol kg$^{-1}$. We never need to know $i$ separately.`,
              t`(a) $\Delta T_b = K_b (im) = 0.52 \times 0.10 = 0.052$ K.`,
              t`(b) 1 kg of water is $1000/18 = 55.5$ mol. Relative lowering $= 0.10/(0.10 + 55.5) = 1.8 \times 10^{-3}$.`,
              t`(c) $\pi = (iC)RT = 0.10 \times 0.083 \times 298 = 2.47$ bar.`,
            ],
            answer: t`$\Delta T_b = 0.052$ K; relative lowering $\approx 1.8 \times 10^{-3}$; $\pi \approx 2.47$ bar.`,
          },
          {
            type: "mistake",
            wrong: t`To rank freezing points, compare the molalities of the solutions directly.`,
            right: t`Compare $i \times m$. 0.1 m NaCl ($im = 0.2$) freezes lower than 0.15 m glucose ($im = 0.15$).`,
            why: "Molality counts formula units, but colligative properties count particles. Electrolytes give several particles per formula unit.",
          },
          {
            type: "mistake",
            wrong: t`A larger $\Delta T_f$ means a higher freezing point.`,
            right: t`A larger depression means a **lower** freezing point: $T_f = T_f^\circ - \Delta T_f$.`,
            why: "Under exam pressure, students rank by ΔTf and forget to flip the order when the question asks for the freezing point itself.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which aqueous solution has the highest boiling point? (complete dissociation)",
                options: ["0.10 m urea", "0.060 m NaCl", t`0.050 m $\text{CaCl}_2$`, t`0.030 m $\text{Na}_3\text{PO}_4$`],
                answer: 2,
                explain: t`$im$: urea 0.10; NaCl $2 \times 0.060 = 0.12$; $\text{CaCl}_2$ $3 \times 0.050 = 0.15$; $\text{Na}_3\text{PO}_4$ $4 \times 0.030 = 0.12$. The largest $im$ gives the largest elevation.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each solute with its van't Hoff factor.",
              pairs: [
                ["Urea in water", "1"],
                ["KCl in water (complete)", "2"],
                [t`$\text{Na}_3\text{PO}_4$ in water (complete)`, "4"],
                ["Ethanoic acid fully dimerised in benzene", "0.5"],
                [t`$\text{Al}_2(\text{SO}_4)_3$ in water (complete)`, "5"],
              ],
              explain: "Count the particles one formula unit becomes: ions for electrolytes, a fraction for molecules that join together.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Speed check",
            md: t`In a ranking question, first throw out any option whose $im$ is clearly smaller. For mixed-unit problems, write $R$ to match the pressure unit: 0.083 for bar, 0.0821 for atm, 8.314 for Pa with $C$ in mol m$^{-3}$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Rank colligative effects by $i \times m$ (or $i \times C$ for osmotic pressure).`,
              t`Vapour composition given? Use $1/p = y_A/p_A^\circ + y_B/p_B^\circ$.`,
              t`One colligative measurement fixes $im$, and from it all the others.`,
              t`$i = 1 + (n-1)\alpha$ for dissociation; $i = 1 - \alpha(1 - 1/n)$ for association.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Exact form of relative lowering using $p$ of solution`, back: t`$(p^\circ - p)/p = n_2/n_1$ (non-volatile non-electrolyte), valid even for concentrated solutions.` },
          { front: "Total pressure from vapour composition (ideal)", back: t`$1/p = y_A/p_A^\circ + y_B/p_B^\circ$.` },
          { front: t`$i$ for $\text{Al}_2(\text{SO}_4)_3$ (complete)`, back: "5 (2 Al³⁺ + 3 SO₄²⁻)." },
          { front: t`$i$ for $\text{K}_4[\text{Fe(CN)}_6]$ (complete)`, back: "5 (4 K⁺ + one complex ion)." },
          { front: "Condition for isotonic electrolyte solutions", back: t`Equal $i \times C$ at the same temperature.` },
          { front: t`Link between $\Delta T_f$ and $\Delta T_b$ of one solution`, back: t`$\Delta T_f/K_f = \Delta T_b/K_b$.` },
          { front: "Is the vapour above an ideal solution richer in the more or less volatile component?", back: "More volatile (higher p°)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which aqueous solution has the highest osmotic pressure at 300 K? (complete dissociation)",
            options: [t`0.10 M $\text{K}_4[\text{Fe(CN)}_6]$`, t`0.20 M NaCl`, t`0.15 M $\text{MgCl}_2$`, t`0.40 M glucose`],
            answer: 0,
            explain: t`$iC$: $5 \times 0.10 = 0.50$; $2 \times 0.20 = 0.40$; $3 \times 0.15 = 0.45$; $1 \times 0.40 = 0.40$. The hexacyanoferrate wins.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Liquids X ($p^\circ = 100$ torr) and Y ($p^\circ = 400$ torr) form an ideal solution. The vapour contains 80 mol% Y. Find the total vapour pressure in torr.`,
            answer: 250,
            tolerance: 0.5,
            unit: "torr",
            explain: t`$1/p = 0.2/100 + 0.8/400 = 0.002 + 0.002 = 0.004$, so $p = 250$ torr. (Check: $x_Y = 0.8 \times 250/400 = 0.5$; $0.5 \times 100 + 0.5 \times 400 = 250$.)`,
            difficulty: 2,
            hint: "Use 1/p = y_X/p°_X + y_Y/p°_Y.",
          },
          {
            kind: "numeric",
            q: t`0.50 g of a substance in 50 g of benzene lowers the freezing point by 0.20 K ($K_f = 5.12$). Its formula mass is 128 g/mol. What is the van't Hoff factor?`,
            answer: 0.5,
            tolerance: 0.01,
            explain: t`Apparent $M = 5.12 \times 0.50 \times 1000/(0.20 \times 50) = 256$ g/mol. $i = 128/256 = 0.5$: complete dimerisation.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which mixtures form maximum-boiling azeotropes?",
            options: ["Nitric acid + water", "Ethanol + water", "Chloroform + acetone", "n-Hexane + n-heptane"],
            answers: [0, 2],
            explain: "Maximum-boiling azeotropes come from negative deviation: HNO₃ + water and CHCl₃ + acetone. Ethanol + water is minimum-boiling; hexane + heptane is nearly ideal.",
          },
          {
            kind: "numeric",
            q: t`An aqueous solution boils at 100.104 °C at 1 atm. At what temperature (in °C) does it freeze? ($K_b = 0.52$, $K_f = 1.86$)`,
            answer: -0.372,
            tolerance: 0.003,
            unit: "°C",
            explain: t`$im = 0.104/0.52 = 0.20$; $\Delta T_f = 1.86 \times 0.20 = 0.372$ K, so it freezes at $-0.372$ °C.`,
            difficulty: 2,
            hint: "ΔTb/Kb = ΔTf/Kf.",
          },
          {
            kind: "numeric",
            q: t`A weak acid $\text{H}_2\text{A}$ ionises as $\text{H}_2\text{A} \rightarrow 2\text{H}^+ + \text{A}^{2-}$ (ignore the intermediate step). In a 0.10 m solution its van't Hoff factor is 1.30. Find the degree of ionisation.`,
            answer: 0.15,
            tolerance: 0.005,
            explain: t`$n = 3$; $\alpha = (i - 1)/(n - 1) = 0.30/2 = 0.15$.`,
            difficulty: 3,
            hint: "Count the particles from one H₂A after full ionisation.",
          },
          {
            kind: "mcq",
            q: t`For an ideal solution of A and B with $p_A^\circ > p_B^\circ$, which is true at every composition (other than pure liquids)?`,
            options: [
              t`$y_A > x_A$`,
              t`$y_A < x_A$`,
              t`$y_A = x_A$`,
              t`$p_{\text{total}} > p_A^\circ$`,
            ],
            answer: 0,
            explain: t`$y_A = x_A p_A^\circ/p_{\text{total}}$, and $p_{\text{total}} < p_A^\circ$ for any mixture, so $y_A > x_A$. The vapour is richer in the more volatile A.`,
            difficulty: 3,
            hint: "The total pressure lies between the two pure vapour pressures.",
          },
          {
            kind: "numeric",
            q: t`Find the vapour pressure (in mm Hg) of a solution of 1.0 mol of a non-volatile solute in 4.0 mol of a solvent whose pure vapour pressure is 100 mm Hg. Do not use the dilute approximation.`,
            answer: 80,
            tolerance: 0.5,
            unit: "mm Hg",
            explain: t`$x_1 = 4/5 = 0.80$, so $p = 100 \times 0.80 = 80$ mm Hg. (The dilute formula $n_2/n_1 = 0.25$ would give 75 mm Hg, which is wrong here.)`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Electrochemistry (NCERT Class 12 Unit 2; same title in ISC)         */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-electrochemistry",
    title: "Electrochemistry",
    icon: "🔋",
    description: "Galvanic cells and electrode potentials, the Nernst equation, cell EMF and Gibbs energy, conductance of electrolytes, Kohlrausch's law, electrolysis and Faraday's laws, batteries, fuel cells and corrosion.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c12-ec-galvanic-cells",
        title: "Galvanic Cells and Electrode Potentials",
        summary: "How a redox reaction makes electricity in a Daniell cell, the salt bridge, cell notation, the standard hydrogen electrode and the electrochemical series.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🔦",
            caption: "A torch cell, a phone battery and a rusting iron gate all run on the same idea: electrons moving from one substance to another.",
          },
          {
            type: "text",
            md: t`**Electrochemistry** studies how chemical energy and electrical energy turn into each other. An **electrochemical cell** that changes the energy of a spontaneous redox reaction into electrical energy is a **galvanic** (or **voltaic**) cell. A cell that uses electrical energy to drive a non-spontaneous reaction is an **electrolytic** cell.

In the **Daniell cell**, a zinc rod dips in zinc sulphate solution and a copper rod dips in copper sulphate solution. Each metal with its solution is a **half-cell** (or **electrode**). The reaction is $\text{Zn(s)} + \text{Cu}^{2+}\text{(aq)} \rightarrow \text{Zn}^{2+}\text{(aq)} + \text{Cu(s)}$, and the cell gives 1.10 V when both ion concentrations are 1 M.`,
          },
          {
            type: "table",
            headers: ["", "Anode (zinc half-cell)", "Cathode (copper half-cell)"],
            rows: [
              ["Half-reaction", t`$\text{Zn} \rightarrow \text{Zn}^{2+} + 2e^-$ (oxidation)`, t`$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$ (reduction)`],
              ["Sign in a galvanic cell", "negative", "positive"],
              ["What you see", "zinc rod slowly gets thinner", "copper is deposited; blue colour fades"],
              ["Electron flow in the wire", "electrons leave from here", "electrons arrive here"],
            ],
          },
          {
            type: "text",
            md: t`The two solutions are joined by a **salt bridge**: an inverted U-tube of KCl or $\text{KNO}_3$ set in agar–agar gel. It completes the circuit by letting ions move, and keeps each solution electrically neutral. Without it, positive charge would pile up around the zinc and the current would stop at once.

**Cell notation:** anode on the left, cathode on the right, a single line for a phase boundary and a double line for the salt bridge: $\text{Zn(s)} \,|\, \text{Zn}^{2+}\text{(aq)} \,||\, \text{Cu}^{2+}\text{(aq)} \,|\, \text{Cu(s)}$.

If an opposing external voltage is applied: below 1.10 V the cell still works (with less current); at exactly 1.10 V no current flows; above 1.10 V the reaction reverses, zinc is deposited and copper dissolves, and the cell now acts as an **electrolytic cell**.`,
          },
          {
            type: "text",
            md: t`**Electrode potential** is the potential difference between a metal and its ion solution. By IUPAC convention we always write it as a **reduction potential**. When all species are at unit concentration (1 M; gases at 1 bar) and 298 K, it is the **standard electrode potential** $E^\circ$.

One half-cell's potential cannot be measured alone, so we pair it with a reference: the **standard hydrogen electrode (SHE)**, $\text{Pt(s)} \,|\, \text{H}_2(\text{g, 1 bar}) \,|\, \text{H}^+(\text{aq, 1 M})$, a platinised platinum foil in acid with pure hydrogen bubbling over it. Its $E^\circ$ is taken as **0.00 V** at all temperatures.`,
          },
          {
            type: "formula",
            tex: t`E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = E^\circ_{\text{right}} - E^\circ_{\text{left}}`,
            caption: t`Both values are reduction potentials. A positive $E^\circ_{\text{cell}}$ means the reaction as written is spontaneous.`,
          },
          {
            type: "table",
            headers: ["Half-reaction (reduction)", t`$E^\circ$ / V`],
            rows: [
              [t`$\text{F}_2 + 2e^- \rightarrow 2\text{F}^-$`, "+2.87"],
              [t`$\text{Cl}_2 + 2e^- \rightarrow 2\text{Cl}^-$`, "+1.36"],
              [t`$\text{O}_2 + 4\text{H}^+ + 4e^- \rightarrow 2\text{H}_2\text{O}$`, "+1.23"],
              [t`$\text{Br}_2 + 2e^- \rightarrow 2\text{Br}^-$`, "+1.09"],
              [t`$\text{Ag}^+ + e^- \rightarrow \text{Ag}$`, "+0.80"],
              [t`$\text{Fe}^{3+} + e^- \rightarrow \text{Fe}^{2+}$`, "+0.77"],
              [t`$\text{I}_2 + 2e^- \rightarrow 2\text{I}^-$`, "+0.54"],
              [t`$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$`, "+0.34"],
              [t`$2\text{H}^+ + 2e^- \rightarrow \text{H}_2$`, "0.00"],
              [t`$\text{Ni}^{2+} + 2e^- \rightarrow \text{Ni}$`, "−0.25"],
              [t`$\text{Fe}^{2+} + 2e^- \rightarrow \text{Fe}$`, "−0.44"],
              [t`$\text{Zn}^{2+} + 2e^- \rightarrow \text{Zn}$`, "−0.76"],
              [t`$\text{Mg}^{2+} + 2e^- \rightarrow \text{Mg}$`, "−2.37"],
              [t`$\text{Li}^+ + e^- \rightarrow \text{Li}$`, "−3.05"],
            ],
          },
          {
            type: "text",
            md: t`Reading the **electrochemical series**: the higher (more positive) the $E^\circ$, the more easily the species on the left is reduced, so it is a stronger **oxidising agent** ($\text{F}_2$ is the strongest). The lower the $E^\circ$, the more easily the metal on the right is oxidised, so it is a stronger **reducing agent** (Li is the strongest). Metals with negative $E^\circ$ (like Zn, Fe, Mg) can displace hydrogen from dilute acids; copper and silver cannot.`,
          },
          {
            type: "example",
            title: "EMF and reaction of a cell",
            problem: t`Write the cell reaction and find $E^\circ_{\text{cell}}$ for $\text{Mg(s)} \,|\, \text{Mg}^{2+}\text{(aq)} \,||\, \text{Ag}^+\text{(aq)} \,|\, \text{Ag(s)}$.`,
            steps: [
              t`Anode (left): $\text{Mg} \rightarrow \text{Mg}^{2+} + 2e^-$. Cathode (right): $\text{Ag}^+ + e^- \rightarrow \text{Ag}$, multiplied by 2 to balance electrons.`,
              t`Cell reaction: $\text{Mg(s)} + 2\text{Ag}^+\text{(aq)} \rightarrow \text{Mg}^{2+}\text{(aq)} + 2\text{Ag(s)}$.`,
              t`$E^\circ_{\text{cell}} = E^\circ_{\text{Ag}^+/\text{Ag}} - E^\circ_{\text{Mg}^{2+}/\text{Mg}} = 0.80 - (-2.37) = 3.17$ V. The silver value is **not** doubled.`,
            ],
            answer: t`$E^\circ_{\text{cell}} = 3.17$ V; the positive sign shows the reaction is spontaneous.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Using the table, can $\text{Fe}^{3+}$ oxidise $\text{I}^-$ to $\text{I}_2$ under standard conditions?`,
                options: [
                  t`Yes: $E^\circ_{\text{cell}} = 0.77 - 0.54 = +0.23$ V`,
                  t`No: $E^\circ_{\text{cell}} = 0.54 - 0.77 = -0.23$ V`,
                  t`Yes: $E^\circ_{\text{cell}} = 0.77 + 0.54 = 1.31$ V`,
                  "It cannot be decided without concentrations",
                ],
                answer: 0,
                explain: t`$\text{Fe}^{3+}$ is reduced (cathode, 0.77 V) and $\text{I}^-$ is oxidised (anode, 0.54 V). $E^\circ_{\text{cell}} = +0.23$ V, so yes. The same check shows $\text{Fe}^{3+}$ cannot oxidise $\text{Br}^-$ ($0.77 - 1.09 < 0$).`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`For $2\text{Ag}^+ + 2e^- \rightarrow 2\text{Ag}$, I must double $E^\circ$ to $1.60$ V.`,
            right: t`$E^\circ$ stays 0.80 V whatever coefficients you use. Electrode potential is an **intensive** property.`,
            why: "Learners treat E° like ΔH, which does scale with the amount. Potential is energy per unit charge, so doubling both the energy and the charge leaves it unchanged.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each part of a galvanic cell with its job.",
              pairs: [
                ["Anode", "site of oxidation, negative terminal"],
                ["Cathode", "site of reduction, positive terminal"],
                ["Salt bridge", "lets ions move and keeps solutions neutral"],
                ["Standard hydrogen electrode", "reference electrode taken as 0.00 V"],
                ["External wire", "carries electrons from anode to cathode"],
              ],
              explain: "Electrons travel through the wire; ions travel through the solutions and the salt bridge. Both flows are needed to complete the circuit.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Questions on the Daniell cell often ask for the effect of an external voltage less than, equal to, and greater than 1.10 V: give all three cases. In $E^\circ_{\text{cell}}$ answers, write the formula with "cathode − anode" in words, then the numbers with signs in brackets, then the unit V.`,
          },
          {
            type: "keypoints",
            items: [
              "A galvanic cell turns the energy of a spontaneous redox reaction into electricity; oxidation at the anode, reduction at the cathode.",
              "The salt bridge completes the circuit and keeps both solutions neutral.",
              t`SHE is the reference ($E^\circ = 0$). $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$, using reduction potentials.`,
              t`Higher $E^\circ$: stronger oxidising agent. Lower $E^\circ$: stronger reducing agent. $E^\circ$ does not scale with coefficients.`,
            ],
          },
        ],
        flashcards: [
          { front: "Galvanic vs electrolytic cell", back: "Galvanic: spontaneous reaction makes electricity. Electrolytic: electricity drives a non-spontaneous reaction." },
          { front: "Functions of a salt bridge", back: "Completes the inner circuit by allowing ion flow, and keeps the two solutions electrically neutral." },
          { front: "Cell notation of the Daniell cell", back: t`$\text{Zn(s)} | \text{Zn}^{2+}\text{(aq)} || \text{Cu}^{2+}\text{(aq)} | \text{Cu(s)}$` },
          { front: "Standard hydrogen electrode", back: t`$\text{Pt(s)} | \text{H}_2$(g, 1 bar) $| \text{H}^+$(aq, 1 M); its $E^\circ$ is taken as 0.00 V.` },
          { front: t`$E^\circ_{\text{cell}}$ formula`, back: t`$E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ (both reduction potentials).` },
          { front: "Strongest oxidising agent in the series", back: t`Fluorine, $E^\circ = +2.87$ V.` },
          { front: "Strongest reducing agent in the series", back: t`Lithium, $E^\circ = -3.05$ V.` },
          { front: "Daniell cell with external voltage above 1.10 V", back: "Current reverses: zinc is deposited, copper dissolves; it works as an electrolytic cell." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $E^\circ_{\text{cell}}$ for $\text{Zn} | \text{Zn}^{2+} || \text{Ag}^+ | \text{Ag}$. ($E^\circ$: $\text{Zn}^{2+}/\text{Zn} = -0.76$ V, $\text{Ag}^+/\text{Ag} = +0.80$ V)`,
            answer: 1.56,
            tolerance: 0.005,
            unit: "V",
            explain: t`$E^\circ_{\text{cell}} = 0.80 - (-0.76) = 1.56$ V.`,
          },
          {
            kind: "mcq",
            q: "Which is the strongest reducing agent?",
            options: ["Cu", "Zn", "Mg", "Li"],
            answer: 3,
            explain: t`Lithium has the most negative reduction potential ($-3.05$ V), so it loses electrons most readily.`,
          },
          {
            kind: "mcq",
            q: "Can silver nitrate solution be stored in a copper vessel?",
            options: [
              "Yes, copper does not react with silver ions",
              "No, copper reduces Ag⁺ to silver and goes into solution as Cu²⁺",
              "No, silver ions oxidise water",
              "Yes, because copper is above silver in reactivity",
            ],
            answer: 1,
            explain: t`$E^\circ_{\text{cell}}$ for $\text{Cu} + 2\text{Ag}^+ \rightarrow \text{Cu}^{2+} + 2\text{Ag}$ is $0.80 - 0.34 = +0.46$ V, so the vessel would corrode.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`If the half-reaction $\text{Ag}^+ + e^- \rightarrow \text{Ag}$ is multiplied by 2, its $E^\circ$ becomes $+1.60$ V.`,
            answer: false,
            explain: "E° is intensive; it stays +0.80 V.",
          },
          {
            kind: "numeric",
            q: t`Find $E^\circ_{\text{cell}}$ for $\text{Fe} | \text{Fe}^{2+} || \text{Ni}^{2+} | \text{Ni}$. ($E^\circ$: $\text{Fe}^{2+}/\text{Fe} = -0.44$ V, $\text{Ni}^{2+}/\text{Ni} = -0.25$ V)`,
            answer: 0.19,
            tolerance: 0.005,
            unit: "V",
            explain: t`$E^\circ_{\text{cell}} = -0.25 - (-0.44) = 0.19$ V.`,
          },
          {
            kind: "mcq",
            q: "In a galvanic cell, electrons in the external wire flow:",
            options: ["from cathode to anode", "from anode to cathode", "through the salt bridge", "in both directions equally"],
            answer: 1,
            explain: "Oxidation at the anode releases electrons, which travel through the wire to the cathode. Ions, not electrons, move through the salt bridge.",
          },
          {
            kind: "multi",
            q: "Which metals can displace hydrogen from dilute hydrochloric acid?",
            options: ["Zinc", "Copper", "Magnesium", "Silver"],
            answers: [0, 2],
            explain: "Only metals with negative E° (below hydrogen in the series) are oxidised by H⁺. Cu and Ag have positive E°.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c12-ec-nernst-gibbs",
        title: "The Nernst Equation, Gibbs Energy and Equilibrium",
        summary: "How electrode and cell potentials change with concentration, the hydrogen electrode and pH, concentration cells, and the links between E°, ΔG° and K.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`A torch cell gets weaker as it is used. Its reactants are used up and its products build up, so its voltage falls. $E^\circ$ is the potential only at 1 M concentrations; the **Nernst equation** gives the potential at any concentration.`,
          },
          {
            type: "formula",
            tex: t`\text{For } \text{M}^{n+}(\text{aq}) + ne^- \rightarrow \text{M(s)}: \quad E = E^\circ - \frac{RT}{nF}\ln\frac{1}{[\text{M}^{n+}]} = E^\circ - \frac{0.059}{n}\log\frac{1}{[\text{M}^{n+}]} \text{ at 298 K}`,
            caption: t`$R = 8.314$ J K$^{-1}$ mol$^{-1}$, $F = 96500$ C mol$^{-1}$ (NCERT uses 96487), $T = 298$ K, so $2.303RT/F = 0.059$ V. The concentration of a pure solid is taken as 1.`,
          },
          {
            type: "formula",
            tex: t`a\text{A} + b\text{B} \rightarrow c\text{C} + d\text{D}: \quad E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.059}{n}\log\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}`,
            caption: t`$n$ = number of electrons transferred in the balanced cell reaction. Solids and pure liquids are left out of the quotient; gases enter as partial pressures in bar.`,
          },
          {
            type: "example",
            title: "Daniell cell away from standard conditions",
            problem: t`Find $E_{\text{cell}}$ at 298 K for $\text{Zn} | \text{Zn}^{2+}(0.10\text{ M}) || \text{Cu}^{2+}(0.0010\text{ M}) | \text{Cu}$. $E^\circ_{\text{cell}} = 1.10$ V.`,
            steps: [
              t`Reaction: $\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$, so $n = 2$ and $Q = [\text{Zn}^{2+}]/[\text{Cu}^{2+}]$.`,
              t`$Q = 0.10/0.0010 = 100$, so $\log Q = 2$.`,
              t`$E = 1.10 - \dfrac{0.059}{2} \times 2 = 1.10 - 0.059 = 1.041$ V.`,
            ],
            answer: t`$E_{\text{cell}} \approx 1.04$ V, a little less than $E^\circ$ because the product ion is more concentrated than the reactant ion.`,
          },
          {
            type: "text",
            md: t`**Hydrogen electrode and pH.** For $2\text{H}^+ + 2e^- \rightarrow \text{H}_2$ with $p_{\text{H}_2} = 1$ bar: $E = 0 - \dfrac{0.059}{2}\log\dfrac{1}{[\text{H}^+]^2} = -0.059\,\text{pH}$. At pH 3 the electrode potential is $-0.177$ V.

**Concentration cell.** Two identical electrodes in solutions of different concentration still give a voltage, because $E^\circ_{\text{cell}} = 0$ and only the log term remains: $\text{Ag} | \text{Ag}^+(0.010\text{ M}) || \text{Ag}^+(0.10\text{ M}) | \text{Ag}$ gives $E = 0.059 \log(0.10/0.010) = 0.059$ V. The more dilute side is the anode.`,
          },
          {
            type: "heading",
            text: "Cell potential, Gibbs energy and equilibrium",
          },
          {
            type: "formula",
            tex: t`\Delta_r G = -nFE_{\text{cell}}, \qquad \Delta_r G^\circ = -nFE^\circ_{\text{cell}} = -2.303\,RT\log K_c, \qquad \log K_c = \frac{nE^\circ_{\text{cell}}}{0.059} \text{ at 298 K}`,
            caption: t`The electrical work a cell can do, $nFE$, equals the decrease in Gibbs energy. A positive $E^\circ$ gives a negative $\Delta_rG^\circ$ and $K > 1$. At equilibrium $E_{\text{cell}} = 0$ and $Q = K$.`,
          },
          {
            type: "example",
            title: "Equilibrium constant and Gibbs energy",
            problem: t`For $\text{Zn(s)} + \text{Fe}^{2+}\text{(aq)} \rightarrow \text{Zn}^{2+}\text{(aq)} + \text{Fe(s)}$, find $E^\circ_{\text{cell}}$, $\Delta_rG^\circ$ and $K_c$ at 298 K. ($E^\circ$: $\text{Fe}^{2+}/\text{Fe} = -0.44$ V, $\text{Zn}^{2+}/\text{Zn} = -0.76$ V; $F = 96500$ C mol$^{-1}$)`,
            steps: [
              t`$E^\circ_{\text{cell}} = -0.44 - (-0.76) = 0.32$ V; $n = 2$.`,
              t`$\Delta_rG^\circ = -2 \times 96500 \times 0.32 = -61\,760$ J mol$^{-1} \approx -61.8$ kJ mol$^{-1}$.`,
              t`$\log K_c = (2 \times 0.32)/0.059 = 10.85$.`,
              t`$K_c = 10^{10.85} \approx 7.0 \times 10^{10}$.`,
            ],
            answer: t`$E^\circ = 0.32$ V, $\Delta_rG^\circ \approx -61.8$ kJ mol$^{-1}$, $K_c \approx 7 \times 10^{10}$: the reaction goes almost to completion.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $\Delta_rG^\circ$ (in kJ mol$^{-1}$) for the Daniell cell, $E^\circ = 1.10$ V, $n = 2$, $F = 96500$ C mol$^{-1}$.`,
                answer: -212.3,
                tolerance: 0.3,
                unit: "kJ/mol",
                explain: t`$\Delta_rG^\circ = -nFE^\circ = -2 \times 96500 \times 1.10 = -212\,300$ J mol$^{-1} = -212.3$ kJ mol$^{-1}$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`In the Nernst equation I put [reactants]/[products] in the log, and I include the solid metals too.`,
            right: t`$Q$ is [products]/[reactants], each raised to its coefficient, and solids such as Zn and Cu are left out (taken as 1).`,
            why: "The electrode form 'log 1/[Mⁿ⁺]' looks like reactants on top and products below, which confuses learners. Write the balanced cell reaction first and build Q from it every time.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In a Daniell cell, Cu²⁺ concentration is raised tenfold. What happens to E?",
              emoji: "⚡",
              options: ["E rises by about 0.03 V", "E falls by about 0.03 V", "E stays 1.10 V because E° is fixed"],
              answer: 0,
              trap: 2,
              explain: "Cu²⁺ is a reactant, so Q falls tenfold and E = E° − (0.059/2) log Q rises by 0.0295 V. E° is fixed, but E is not.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Nernst numericals carry marks for: (1) the balanced cell reaction, (2) $n$, (3) the correct quotient, (4) the final value with unit. Many students lose the mark for $n$ by using 1 for a two-electron reaction. State "at 298 K" when you use 0.059.`,
          },
          {
            type: "keypoints",
            items: [
              t`Nernst: $E = E^\circ - \dfrac{0.059}{n}\log Q$ at 298 K; solids are left out of $Q$.`,
              t`Hydrogen electrode: $E = -0.059\,\text{pH}$ (1 bar $\text{H}_2$).`,
              "A concentration cell works only because of the concentration difference; its E° is zero.",
              t`$\Delta_rG^\circ = -nFE^\circ = -2.303RT\log K$; positive $E^\circ$ means spontaneous and $K > 1$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Nernst equation for an electrode (298 K)", back: t`$E = E^\circ - \dfrac{0.059}{n}\log\dfrac{1}{[\text{M}^{n+}]}$.` },
          { front: t`Value of $2.303RT/F$ at 298 K`, back: "About 0.059 V." },
          { front: "Potential of a hydrogen electrode at pH x (1 bar H₂)", back: t`$E = -0.059x$ V.` },
          { front: "What is a concentration cell?", back: "A cell with the same electrode on both sides but different ion concentrations; E° = 0." },
          { front: "Gibbs energy and cell potential", back: t`$\Delta_rG = -nFE_{\text{cell}}$.` },
          { front: t`$\log K$ from $E^\circ$ at 298 K`, back: t`$\log K = nE^\circ/0.059$.` },
          { front: t`$E_{\text{cell}}$ at equilibrium`, back: t`Zero; then $Q = K$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the electrode potential (in V) of $\text{Cu}^{2+}(0.010\text{ M})/\text{Cu}$ at 298 K. $E^\circ = +0.34$ V.`,
            answer: 0.281,
            tolerance: 0.002,
            unit: "V",
            explain: t`$E = 0.34 - (0.059/2)\log(1/0.010) = 0.34 - 0.0295 \times 2 = 0.281$ V.`,
          },
          {
            kind: "numeric",
            q: "What is the potential (in V) of a hydrogen electrode (1 bar H₂) dipped in a solution of pH 5 at 298 K?",
            answer: -0.295,
            tolerance: 0.002,
            unit: "V",
            explain: t`$E = -0.059 \times 5 = -0.295$ V.`,
          },
          {
            kind: "numeric",
            q: t`Find $E_{\text{cell}}$ (in V) at 298 K for $\text{Ni} | \text{Ni}^{2+}(0.10\text{ M}) || \text{Ag}^+(0.010\text{ M}) | \text{Ag}$. ($E^\circ$: $\text{Ni}^{2+}/\text{Ni} = -0.25$ V, $\text{Ag}^+/\text{Ag} = 0.80$ V)`,
            answer: 0.961,
            tolerance: 0.005,
            unit: "V",
            explain: t`$\text{Ni} + 2\text{Ag}^+ \rightarrow \text{Ni}^{2+} + 2\text{Ag}$, $n = 2$, $E^\circ = 1.05$ V. $Q = 0.10/(0.010)^2 = 1000$. $E = 1.05 - 0.0295 \times 3 = 0.961$ V.`,
            difficulty: 2,
            hint: "Square [Ag⁺] in Q because its coefficient is 2.",
          },
          {
            kind: "numeric",
            q: t`Find the EMF (in V) at 298 K of $\text{Ag} | \text{Ag}^+(0.0010\text{ M}) || \text{Ag}^+(0.10\text{ M}) | \text{Ag}$.`,
            answer: 0.118,
            tolerance: 0.002,
            unit: "V",
            explain: t`$E = 0.059\log(0.10/0.0010) = 0.059 \times 2 = 0.118$ V.`,
          },
          {
            kind: "mcq",
            q: t`A cell reaction has $E^\circ_{\text{cell}} > 0$. Which is true?`,
            options: [
              t`$\Delta_rG^\circ > 0$ and $K < 1$`,
              t`$\Delta_rG^\circ < 0$ and $K > 1$`,
              t`$\Delta_rG^\circ = 0$ and $K = 1$`,
              t`$\Delta_rG^\circ < 0$ and $K < 1$`,
            ],
            answer: 1,
            explain: t`$\Delta_rG^\circ = -nFE^\circ$ is negative, and $\log K = nE^\circ/0.059$ is positive, so $K > 1$.`,
          },
          {
            kind: "truefalse",
            q: t`Writing a cell reaction with all coefficients doubled doubles $\Delta_rG^\circ$ but leaves $E^\circ_{\text{cell}}$ unchanged.`,
            answer: true,
            explain: t`$n$ doubles, so $\Delta_rG^\circ = -nFE^\circ$ doubles, while $E^\circ$ (intensive) stays the same.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A cell has run until its voltage is zero. This means:",
            options: ["The cell reaction has reached equilibrium", "E° has become zero", "All reactants are used up", "The salt bridge has dried"],
            answer: 0,
            explain: "E = 0 when Q = K. E° is a fixed constant and does not change.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c12-ec-conductance",
        title: "Conductance of Electrolytic Solutions and Kohlrausch's Law",
        summary: "Resistivity, conductivity and cell constant, measuring conductivity, molar conductivity and its change with concentration, and Kohlrausch's law with its uses.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "💡",
            caption: "Pure water barely lets a bulb glow. Add a pinch of salt and it lights up: ions carry the current.",
          },
          {
            type: "text",
            md: t`In a metal, current is carried by electrons (**electronic conductance**). In a solution, it is carried by moving ions (**electrolytic** or **ionic conductance**). Ionic conductance depends on the nature of the electrolyte, the size of the ions and how strongly they are **solvated**, the nature and viscosity of the solvent, the concentration, and the temperature (it rises as temperature rises).`,
          },
          {
            type: "table",
            headers: ["Quantity", "Meaning", "SI unit"],
            rows: [
              [t`Resistance $R$`, t`$R = \rho \, l/A$`, t`ohm ($\Omega$)`],
              [t`Resistivity $\rho$`, "resistance of a 1 m cube (1 m length, 1 m² area)", t`$\Omega$ m`],
              [t`Conductance $G$`, t`$G = 1/R$`, "siemens (S)"],
              [t`Conductivity $\kappa$`, t`$\kappa = 1/\rho$: conductance of a 1 m cube of solution`, t`S m$^{-1}$`],
              [t`Cell constant $G^*$`, t`$G^* = l/A = R\kappa$`, t`m$^{-1}$`],
              [t`Molar conductivity $\Lambda_m$`, t`$\Lambda_m = \kappa/c$: conductivity per mole of electrolyte`, t`S m$^2$ mol$^{-1}$`],
            ],
          },
          {
            type: "text",
            md: t`**Measuring conductivity.** Direct current would electrolyse the solution and change its concentration, so an **alternating current** source is used, with a **Wheatstone bridge** and a detector (headphones or an electronic detector). The solution sits in a **conductivity cell**: two platinised platinum electrodes of area $A$, a distance $l$ apart. Since $l$ and $A$ are hard to measure, the cell constant is found from a solution of known conductivity, usually KCl. At 298 K, 0.100 M KCl has $\kappa = 1.29$ S m$^{-1}$ and 0.0100 M KCl has $\kappa = 0.141$ S m$^{-1}$.`,
          },
          {
            type: "formula",
            tex: t`\kappa = \frac{G^*}{R}, \qquad \Lambda_m\,(\text{S cm}^2\text{ mol}^{-1}) = \frac{1000 \times \kappa\,(\text{S cm}^{-1})}{\text{molarity (mol L}^{-1})}`,
            caption: t`In SI: $\Lambda_m$ (S m$^2$ mol$^{-1}$) $= \kappa$ (S m$^{-1}$) $/ c$ (mol m$^{-3}$). 1 S m$^2$ mol$^{-1}$ $= 10^4$ S cm$^2$ mol$^{-1}$.`,
          },
          {
            type: "example",
            title: "Cell constant, then molar conductivity",
            problem: t`A conductivity cell filled with 0.100 M KCl ($\kappa = 0.0129$ S cm$^{-1}$) has a resistance of 200 Ω at 298 K. Filled with 0.050 M NaCl, its resistance is 465 Ω. Find the cell constant and $\Lambda_m$ of the NaCl solution.`,
            steps: [
              t`$G^* = R\kappa = 200 \times 0.0129 = 2.58$ cm$^{-1}$.`,
              t`For NaCl: $\kappa = G^*/R = 2.58/465 = 5.55 \times 10^{-3}$ S cm$^{-1}$.`,
              t`$\Lambda_m = 1000 \times 5.55 \times 10^{-3}/0.050 = 111$ S cm$^2$ mol$^{-1}$.`,
            ],
            answer: t`$G^* = 2.58$ cm$^{-1}$; $\Lambda_m \approx 111$ S cm$^2$ mol$^{-1}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is alternating current used to measure the conductivity of a solution?",
                options: [
                  "To avoid electrolysis and polarisation at the electrodes",
                  "Because DC cannot pass through solutions",
                  "To heat the solution to 298 K",
                  "Because AC gives a larger conductivity",
                ],
                answer: 0,
                explain: "DC would cause electrolysis, changing the solution and coating the electrodes. AC reverses quickly, so no net chemical change takes place.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Change with concentration.** On dilution, **conductivity falls** (fewer ions in each cm³), but **molar conductivity rises**, because each mole of electrolyte now contributes more. The limiting value as $c \rightarrow 0$ is $\Lambda_m^\circ$.

For a **strong electrolyte** (KCl), $\Lambda_m$ rises gently and fits a straight line against $\sqrt{c}$; ions are fully present but drag on each other less when far apart. Extrapolating the line to zero gives $\Lambda_m^\circ$. For a **weak electrolyte** (ethanoic acid), $\Lambda_m$ stays low and then shoots up at high dilution because the **degree of dissociation** rises sharply. The curve cannot be extrapolated, so $\Lambda_m^\circ$ comes from Kohlrausch's law instead.`,
          },
          {
            type: "formula",
            tex: t`\Lambda_m = \Lambda_m^\circ - A\sqrt{c} \;\; (\text{strong}), \qquad \Lambda_m^\circ = \nu_+\lambda_+^\circ + \nu_-\lambda_-^\circ \;\; (\text{Kohlrausch}), \qquad \alpha = \frac{\Lambda_m}{\Lambda_m^\circ}, \quad K_a = \frac{c\alpha^2}{1-\alpha}`,
            caption: t`$A$ depends on the type of electrolyte (1-1 such as NaCl, 2-1 such as $\text{CaCl}_2$, 2-2 such as $\text{MgSO}_4$), the solvent and temperature. **Kohlrausch's law of independent migration of ions:** the limiting molar conductivity is the sum of the limiting contributions of the cation and the anion.`,
          },
          {
            type: "example",
            title: "Dissociation constant of ethanoic acid",
            problem: t`At 298 K, $\lambda^\circ(\text{H}^+) = 349.6$ and $\lambda^\circ(\text{CH}_3\text{COO}^-) = 40.9$ S cm$^2$ mol$^{-1}$. A 0.010 M ethanoic acid solution has $\Lambda_m = 16.3$ S cm$^2$ mol$^{-1}$. Find $\alpha$ and $K_a$.`,
            steps: [
              t`Kohlrausch: $\Lambda_m^\circ = 349.6 + 40.9 = 390.5$ S cm$^2$ mol$^{-1}$.`,
              t`$\alpha = 16.3/390.5 = 0.0417$.`,
              t`$K_a = \dfrac{c\alpha^2}{1 - \alpha} = \dfrac{0.010 \times (0.0417)^2}{1 - 0.0417} = \dfrac{1.74 \times 10^{-5}}{0.958}$.`,
            ],
            answer: t`$\alpha \approx 0.042$ (4.2% dissociated); $K_a \approx 1.8 \times 10^{-5}$.`,
          },
          {
            type: "mistake",
            wrong: "Diluting a solution increases its conductivity, because molar conductivity goes up.",
            right: t`On dilution **conductivity** ($\kappa$) **decreases** while **molar conductivity** ($\Lambda_m$) **increases**.`,
            why: "The two names sound alike. κ counts the ions in a fixed volume, which fall on dilution; Λm is per mole, and each mole conducts better when the ions are far apart (and, for weak electrolytes, more dissociated).",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "On dilution, does it go up or down?",
              groups: ["Increases", "Decreases"],
              items: [
                { text: "Conductivity κ of KCl solution", group: 1, hint: "Fewer ions in each unit volume." },
                { text: "Molar conductivity of KCl", group: 0, hint: "Ions drag on each other less." },
                { text: "Molar conductivity of ethanoic acid", group: 0, hint: "Dissociation increases a lot." },
                { text: "Degree of dissociation of ethanoic acid", group: 0, hint: "Le Chatelier: dilution favours more ions." },
                { text: "Resistance of the solution in the same cell", group: 0, hint: "R = G*/κ and κ falls." },
                { text: "Number of ions per cm³", group: 1, hint: "The same ions spread over more volume." },
              ],
              explain: "Per-volume quantities fall on dilution; per-mole quantities and the degree of dissociation rise.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Unit errors cost the most marks here. Keep κ in S cm$^{-1}$ and use $\Lambda_m = 1000\kappa/M$, or keep everything in SI with $c$ in mol m$^{-3}$ (1 M = 1000 mol m$^{-3}$). Never mix the two. Draw (or describe) the two $\Lambda_m$ vs $\sqrt{c}$ curves: a straight line for KCl, a steep curve for ethanoic acid.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\kappa = G^*/R$ with cell constant $G^* = l/A$; $\Lambda_m = \kappa/c$.`,
              "AC and a Wheatstone bridge are used to measure conductivity; the cell is calibrated with KCl.",
              "On dilution κ falls but Λm rises; for strong electrolytes Λm = Λm° − A√c.",
              "Kohlrausch: Λm° = ν₊λ₊° + ν₋λ₋°; it gives Λm° of weak electrolytes, then α = Λm/Λm° and Ka.",
            ],
          },
        ],
        flashcards: [
          { front: "Define conductivity κ.", back: t`The conductance of a solution in a cube of 1 m edge (or 1 cm edge); the inverse of resistivity. Unit S m$^{-1}$.` },
          { front: "Cell constant", back: t`$G^* = l/A = R\kappa$; unit m$^{-1}$ or cm$^{-1}$.` },
          { front: "Molar conductivity", back: t`$\Lambda_m = \kappa/c$; unit S m$^2$ mol$^{-1}$ (or S cm$^2$ mol$^{-1}$).` },
          { front: "State Kohlrausch's law.", back: "The limiting molar conductivity of an electrolyte is the sum of the limiting molar conductivities of its cation and anion, each multiplied by its number in the formula." },
          { front: "Debye–Hückel–Onsager form for strong electrolytes", back: t`$\Lambda_m = \Lambda_m^\circ - A\sqrt{c}$.` },
          { front: "Why can't Λm° of ethanoic acid be found by extrapolation?", back: "Its Λm vs √c curve rises steeply near zero concentration and is not linear, so it cannot be extended reliably." },
          { front: "Degree of dissociation from conductance", back: t`$\alpha = \Lambda_m/\Lambda_m^\circ$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A cell filled with 0.0100 M KCl ($\kappa = 1.41 \times 10^{-3}$ S cm$^{-1}$) shows a resistance of 600 Ω. Find the cell constant in cm$^{-1}$.`,
            answer: 0.846,
            tolerance: 0.005,
            unit: "cm⁻¹",
            explain: t`$G^* = R\kappa = 600 \times 1.41 \times 10^{-3} = 0.846$ cm$^{-1}$.`,
          },
          {
            kind: "numeric",
            q: t`A 0.20 M solution has $\kappa = 0.0248$ S cm$^{-1}$. Find $\Lambda_m$ in S cm$^2$ mol$^{-1}$.`,
            answer: 124,
            tolerance: 0.5,
            unit: "S cm² mol⁻¹",
            explain: t`$\Lambda_m = 1000 \times 0.0248/0.20 = 124$ S cm$^2$ mol$^{-1}$.`,
          },
          {
            kind: "numeric",
            q: t`Using $\lambda^\circ(\text{Ca}^{2+}) = 119.0$ and $\lambda^\circ(\text{Cl}^-) = 76.3$ S cm$^2$ mol$^{-1}$, find $\Lambda_m^\circ(\text{CaCl}_2)$.`,
            answer: 271.6,
            tolerance: 0.2,
            unit: "S cm² mol⁻¹",
            explain: t`$\Lambda_m^\circ = 119.0 + 2 \times 76.3 = 271.6$ S cm$^2$ mol$^{-1}$.`,
            difficulty: 2,
            hint: "There are two chloride ions per formula unit.",
          },
          {
            kind: "numeric",
            q: t`A weak acid has $\Lambda_m = 39.05$ S cm$^2$ mol$^{-1}$ at some concentration and $\Lambda_m^\circ = 390.5$ S cm$^2$ mol$^{-1}$. Find its degree of dissociation.`,
            answer: 0.1,
            tolerance: 0.002,
            explain: t`$\alpha = 39.05/390.5 = 0.10$.`,
          },
          {
            kind: "mcq",
            q: t`In $\Lambda_m = \Lambda_m^\circ - A\sqrt{c}$, which pair of electrolytes has the same value of $A$ in water at 298 K?`,
            options: [t`NaCl and KCl`, t`NaCl and $\text{MgSO}_4$`, t`KCl and $\text{CaCl}_2$`, t`$\text{CaCl}_2$ and $\text{MgSO}_4$`],
            answer: 0,
            explain: "A depends on the charge type of the electrolyte. NaCl and KCl are both 1-1 electrolytes.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Λm° of ethanoic acid is found by extending its Λm vs √c graph to zero concentration.",
            answer: false,
            explain: "That works only for strong electrolytes. For a weak electrolyte, Λm° is found from Kohlrausch's law.",
          },
          {
            kind: "mcq",
            q: "Which change increases the conductance of an electrolyte solution?",
            options: ["Raising the temperature", "Using a more viscous solvent", "Using ions that are more strongly solvated", "Diluting it in the same cell"],
            answer: 0,
            explain: "Higher temperature lowers viscosity and helps ions move. A viscous solvent, heavy solvation and dilution (fewer ions per volume) all lower conductance.",
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c12-ec-electrolysis-batteries-corrosion",
        title: "Electrolysis, Batteries, Fuel Cells and Corrosion",
        summary: "Faraday's laws, predicting products of electrolysis, primary and secondary batteries, the hydrogen–oxygen fuel cell, and corrosion of iron as an electrochemical cell.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏭",
            caption: "Aluminium for Indian aircraft and power lines, chlorine for water treatment and caustic soda for soap are all made by electrolysis.",
          },
          {
            type: "text",
            md: t`In an **electrolytic cell**, an external source pushes a non-spontaneous reaction. The **anode** (connected to the + terminal) is still where **oxidation** happens, and the **cathode** (– terminal) is where **reduction** happens.

**Faraday's first law:** the mass of substance deposited or liberated at an electrode is proportional to the charge passed: $m = ZIt$, where $Z$ is the electrochemical equivalent. **Faraday's second law:** when the same charge passes through different electrolytes, the masses liberated are proportional to their chemical equivalent weights (atomic mass ÷ number of electrons needed per ion). One mole of electrons carries **1 F = 96 487 C ≈ 96 500 C**.`,
          },
          {
            type: "formula",
            tex: t`m = \frac{M}{nF} \times I t \qquad \frac{m_1}{m_2} = \frac{M_1/n_1}{M_2/n_2}`,
            caption: t`$M$: molar mass; $n$: electrons per ion discharged; $I$ in A; $t$ in s; $Q = It$ in C.`,
          },
          {
            type: "example",
            title: "Copper plating",
            problem: t`A current of 2.0 A passes through copper sulphate solution for 30 min. What mass of copper is deposited at the cathode? ($M(\text{Cu}) = 63.5$ g mol$^{-1}$, $F = 96500$ C mol$^{-1}$)`,
            steps: [
              t`$Q = It = 2.0 \times 30 \times 60 = 3600$ C.`,
              t`Moles of electrons $= 3600/96500 = 0.0373$ mol.`,
              t`$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$, so moles of Cu $= 0.0373/2 = 0.01865$ mol.`,
              t`Mass $= 0.01865 \times 63.5 = 1.18$ g.`,
            ],
            answer: "About 1.18 g of copper.",
          },
          {
            type: "table",
            headers: ["Electrolyte (electrodes)", "Cathode product", "Anode product"],
            rows: [
              ["Molten NaCl", "Na", t`$\text{Cl}_2$`],
              ["Aqueous NaCl (inert)", t`$\text{H}_2$ (water reduced; $\text{OH}^-$ left in solution)`, t`$\text{Cl}_2$ (because of overpotential for $\text{O}_2$)`],
              [t`Aqueous $\text{CuSO}_4$ (Pt electrodes)`, "Cu", t`$\text{O}_2$`],
              [t`Aqueous $\text{CuSO}_4$ (Cu electrodes)`, "Cu", t`Cu dissolves as $\text{Cu}^{2+}$ (used to refine copper)`],
              [t`Dilute $\text{H}_2\text{SO}_4$ (Pt)`, t`$\text{H}_2$`, t`$\text{O}_2$`],
              [t`Concentrated $\text{H}_2\text{SO}_4$ (Pt)`, t`$\text{H}_2$`, t`$\text{S}_2\text{O}_8^{2-}$ (peroxodisulphate)`],
            ],
          },
          {
            type: "text",
            md: t`**Why these products?** When more than one reaction is possible, the one with the higher reduction potential happens at the cathode and the one that is easier to oxidise happens at the anode, unless **overpotential** (an extra voltage some reactions need because they are slow) changes the order. For aqueous NaCl, water ($E^\circ = -0.83$ V for $2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-$) is reduced instead of $\text{Na}^+$ ($-2.71$ V). At the anode, $\text{O}_2$ should form on $E^\circ$ grounds (1.23 V vs 1.36 V), but its overpotential is large, so $\text{Cl}_2$ forms. Overall: $\text{NaCl(aq)} + \text{H}_2\text{O(l)} \rightarrow \text{Na}^+\text{(aq)} + \text{OH}^-\text{(aq)} + \tfrac{1}{2}\text{H}_2\text{(g)} + \tfrac{1}{2}\text{Cl}_2\text{(g)}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A current of 0.50 A is passed through silver nitrate solution for 1930 s. What mass of silver (in g) is deposited? ($M = 108$ g mol$^{-1}$, $F = 96500$ C mol$^{-1}$)`,
                answer: 1.08,
                tolerance: 0.01,
                unit: "g",
                explain: t`$Q = 0.50 \times 1930 = 965$ C $= 0.010$ mol $e^-$. $\text{Ag}^+ + e^- \rightarrow \text{Ag}$, so 0.010 mol Ag $= 1.08$ g.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Batteries and fuel cells",
          },
          {
            type: "table",
            headers: ["Cell", "Type", "Anode", "Cathode", "Electrolyte", "Notes"],
            rows: [
              ["Dry (Leclanché) cell", "primary", "zinc container", t`carbon (graphite) rod in $\text{MnO}_2$ + carbon`, t`moist paste of $\text{NH}_4\text{Cl}$ and $\text{ZnCl}_2$`, t`about 1.5 V. Cathode: $\text{MnO}_2 + \text{NH}_4^+ + e^- \rightarrow \text{MnO(OH)} + \text{NH}_3$`],
              ["Mercury cell", "primary", "zinc–mercury amalgam", t`paste of HgO and carbon`, "paste of KOH and ZnO", t`about 1.35 V, constant over life; overall $\text{Zn(Hg)} + \text{HgO(s)} \rightarrow \text{ZnO(s)} + \text{Hg(l)}$. Hearing aids, watches.`],
              ["Lead storage battery", "secondary", "lead", t`lead grid packed with $\text{PbO}_2$`, t`about 38% $\text{H}_2\text{SO}_4$`, "about 2 V per cell; vehicles and inverters"],
              ["Nickel–cadmium cell", "secondary", "cadmium", t`$\text{Ni(OH)}_3$ / nickel oxide`, "KOH", t`longer life than lead storage but costlier; discharge: $\text{Cd} + 2\text{Ni(OH)}_3 \rightarrow \text{CdO} + 2\text{Ni(OH)}_2 + \text{H}_2\text{O}$`],
            ],
          },
          {
            type: "list",
            items: [
              t`**Lead storage, discharge, anode:** $\text{Pb(s)} + \text{SO}_4^{2-}\text{(aq)} \rightarrow \text{PbSO}_4\text{(s)} + 2e^-$`,
              t`**Cathode:** $\text{PbO}_2\text{(s)} + \text{SO}_4^{2-}\text{(aq)} + 4\text{H}^+\text{(aq)} + 2e^- \rightarrow \text{PbSO}_4\text{(s)} + 2\text{H}_2\text{O(l)}$`,
              t`**Overall:** $\text{Pb} + \text{PbO}_2 + 2\text{H}_2\text{SO}_4 \rightarrow 2\text{PbSO}_4 + 2\text{H}_2\text{O}$. Acid is used up, so the density of the electrolyte falls. On **charging**, the reaction runs in reverse.`,
              t`**$\text{H}_2$–$\text{O}_2$ fuel cell:** gases bubble through porous carbon electrodes (with finely divided Pt or Pd catalyst) into concentrated aqueous NaOH or KOH. Cathode: $\text{O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^-$. Anode: $2\text{H}_2 + 4\text{OH}^- \rightarrow 4\text{H}_2\text{O} + 4e^-$. Overall: $2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}$. It runs as long as fuel is supplied, is about 70% efficient (thermal power plants manage about 40%), gives only water, and powered the Apollo space missions.`,
            ],
          },
          {
            type: "text",
            md: t`**Corrosion** is the slow eating away of a metal by its surroundings; rusting of iron is the best-known case. A drop of water on iron acts as a tiny galvanic cell. At an **anodic** spot: $2\text{Fe(s)} \rightarrow 2\text{Fe}^{2+} + 4e^-$ ($E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.44$ V). At a **cathodic** spot, with $\text{H}^+$ from carbonic acid (dissolved $\text{CO}_2$): $\text{O}_2 + 4\text{H}^+ + 4e^- \rightarrow 2\text{H}_2\text{O}$ ($E^\circ = 1.23$ V). Overall: $2\text{Fe} + \text{O}_2 + 4\text{H}^+ \rightarrow 2\text{Fe}^{2+} + 2\text{H}_2\text{O}$, $E^\circ_{\text{cell}} = 1.67$ V. $\text{Fe}^{2+}$ is then oxidised by air to rust, $\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}$. That is why iron rusts fastest in coastal Mumbai or Chennai: salty, moist air is a better electrolyte.

**Prevention:** a barrier (paint, grease, chemical coatings), coating with a more active metal such as zinc (**galvanising**), or attaching a block of Mg or Zn that corrodes first (**sacrificial protection**, used for ship hulls and buried pipelines).`,
          },
          {
            type: "mistake",
            wrong: "The anode is always the negative electrode.",
            right: "The anode is always where **oxidation** happens. It is **negative** in a galvanic cell but **positive** in an electrolytic cell.",
            why: "Learners memorise the sign from the Daniell cell. The definition is by the reaction, not the sign: in electrolysis the external source pulls electrons out of the anode, making it positive.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each device by its cell type.",
              groups: ["Primary cell", "Secondary cell", "Fuel cell"],
              items: [
                { text: "Torch dry cell", group: 0, hint: "Once used up, it is thrown away." },
                { text: "Mercury cell in a hearing aid", group: 0, hint: "Cannot be recharged." },
                { text: "Car lead storage battery", group: 1, hint: "The alternator recharges it." },
                { text: "Nickel–cadmium cell", group: 1, hint: "Rechargeable, long life." },
                { text: "Lithium-ion phone battery", group: 1, hint: "You charge it every night." },
                { text: "H₂–O₂ cell of the Apollo missions", group: 2, hint: "Reactants are fed in continuously." },
              ],
              explain: "Primary cells cannot be recharged; secondary cells can, by reversing the cell reaction. Fuel cells are never 'charged': they run as long as fuel and oxygen flow in.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`For battery questions, the scheme gives marks for the anode, cathode and overall reactions separately. Write state symbols, and for the lead storage battery say what happens to the acid density. For corrosion, write all three equations and name one prevention method with its reason.`,
          },
          {
            type: "keypoints",
            items: [
              t`Faraday: $m = \dfrac{M}{nF}It$; 1 F ≈ 96 500 C is the charge on 1 mol of electrons.`,
              t`Products depend on the electrolyte, the electrodes and overpotential: aqueous NaCl gives $\text{H}_2$ and $\text{Cl}_2$.`,
              "Primary: dry cell, mercury cell. Secondary: lead storage, Ni–Cd. The H₂–O₂ fuel cell is about 70% efficient.",
              t`Rusting is electrochemical (iron is the anode); prevent it with barriers, galvanising or sacrificial metals.`,
            ],
          },
        ],
        flashcards: [
          { front: "Faraday's first law", back: t`The mass liberated is proportional to the charge passed: $m = ZIt$.` },
          { front: "Faraday's second law", back: "For the same charge, masses liberated are proportional to equivalent weights (atomic mass ÷ electrons per ion)." },
          { front: "1 faraday", back: "The charge on 1 mole of electrons, 96 487 C ≈ 96 500 C." },
          { front: "Products of electrolysis of aqueous NaCl", back: t`$\text{H}_2$ at the cathode, $\text{Cl}_2$ at the anode, NaOH left in solution.` },
          { front: "Electrolyte in a dry cell", back: t`A moist paste of $\text{NH}_4\text{Cl}$ and $\text{ZnCl}_2$.` },
          { front: "Why does a mercury cell give a constant voltage?", back: "Its overall reaction involves no ions in solution whose concentration changes during use." },
          { front: "Overall reaction in the H₂–O₂ fuel cell", back: t`$2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}$.` },
          { front: "Sacrificial protection", back: "Attaching a more reactive metal (Mg or Zn) that corrodes instead of iron." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A silver cell and a copper cell are connected in series. 2.16 g of silver is deposited. What mass of copper (in g) is deposited? ($M$: Ag 108, Cu 63.5)`,
            answer: 0.635,
            tolerance: 0.005,
            unit: "g",
            explain: t`Moles of $e^-$ = moles of Ag $= 2.16/108 = 0.020$. Cu needs 2 $e^-$, so Cu $= 0.010$ mol $= 0.635$ g.`,
            difficulty: 2,
            hint: "The same charge passes through both cells.",
          },
          {
            kind: "mcq",
            q: "In the electrolysis of aqueous NaCl with inert electrodes, the cathode product is:",
            options: ["Sodium metal", "Hydrogen gas", "Chlorine gas", "Oxygen gas"],
            answer: 1,
            explain: t`Water ($E^\circ = -0.83$ V) is reduced far more easily than $\text{Na}^+$ ($-2.71$ V), so $\text{H}_2$ forms and $\text{OH}^-$ stays in solution.`,
          },
          {
            kind: "multi",
            q: "Which happen in a lead storage battery during discharge?",
            options: [
              t`$\text{PbSO}_4$ forms at both electrodes`,
              "The density of the acid decreases",
              t`$\text{PbO}_2$ is oxidised at the anode`,
              "The battery stores electrical energy",
            ],
            answers: [0, 1],
            explain: t`Both Pb and $\text{PbO}_2$ turn into $\text{PbSO}_4$, using up $\text{H}_2\text{SO}_4$, so the density falls. $\text{PbO}_2$ is reduced at the cathode. Energy is stored during charging, not discharge.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In a dry cell, MnO₂ at the cathode is reduced to:",
            options: ["Mn", "MnO(OH)", t`$\text{MnO}_4^-$`, t`$\text{Mn}^{2+}$ only`],
            answer: 1,
            explain: t`$\text{MnO}_2 + \text{NH}_4^+ + e^- \rightarrow \text{MnO(OH)} + \text{NH}_3$: Mn goes from +4 to +3.`,
          },
          {
            kind: "truefalse",
            q: "In rusting, the iron surface acts as the cathode where oxygen is reduced.",
            answer: false,
            explain: "Iron is oxidised, so the spot where iron dissolves is the anode. Oxygen is reduced at another spot (the cathode) on the same metal.",
          },
          {
            kind: "mcq",
            q: "Galvanised iron resists rusting even after its zinc coating is scratched, because:",
            options: [
              "Zinc is less reactive than iron",
              "Zinc is more easily oxidised than iron, so it corrodes first",
              "Zinc reacts with rust to make iron again",
              "Zinc makes the iron non-metallic",
            ],
            answer: 1,
            explain: t`$E^\circ$ of $\text{Zn}^{2+}/\text{Zn}$ ($-0.76$ V) is below that of $\text{Fe}^{2+}/\text{Fe}$ ($-0.44$ V), so zinc acts as the anode and protects the iron.`,
          },
          {
            kind: "numeric",
            q: "How many coulombs are needed to reduce 1 mol of Al³⁺ to Al? (F = 96 500 C mol⁻¹)",
            answer: 289500,
            tolerance: 100,
            unit: "C",
            explain: t`$\text{Al}^{3+} + 3e^- \rightarrow \text{Al}$: $3 \times 96500 = 289\,500$ C.`,
          },
          {
            kind: "mcq",
            q: "Which is an advantage of a fuel cell over a thermal power plant?",
            options: ["It needs no catalyst", "It converts fuel energy to electricity more efficiently and without pollution", "It can be recharged from mains", "It works without oxygen"],
            answer: 1,
            explain: "Fuel cells are about 70% efficient (thermal plants about 40%) and the hydrogen–oxygen cell gives only water.",
          },
        ],
      },

      /* ---------------- Lesson 5: Exam edge ---------------- */
      {
        slug: "c12-ec-exam-edge",
        title: "Exam edge: Electrochemistry for JEE, NEET, KCET and COMEDK",
        summary: "Faraday problems, combining electrode potentials, pH from the hydrogen electrode, Ksp and Ka from cells, and the conductance traps exams love.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What gets asked.** KCET and COMEDK: $E^\circ_{\text{cell}}$, Faraday's laws, products of electrolysis, batteries. NEET: the electrochemical series (oxidising and reducing strength), Nernst with pH, $\Delta G^\circ$ and $K$, Kohlrausch, battery reactions. JEE Main: Nernst with unequal coefficients, combining half-cell potentials, conductance units. JEE Advanced: cells used to find $K_{sp}$, $K_a$ or pH, concentration cells, and graphs of $\Lambda_m$ against $\sqrt{c}$.`,
          },
          {
            type: "table",
            headers: ["Shortcut", "Safe when"],
            rows: [
              [t`$E^\circ_3 = \dfrac{n_1E^\circ_1 + n_2E^\circ_2}{n_3}$`, "Adding two half-reactions to get a third half-reaction. Combine ΔG° (−nFE°), never E° directly."],
              [t`$E^\circ_{\text{cell}} = E^\circ_{\text{red}} + E^\circ_{\text{ox}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$`, "Only when two half-reactions are combined into a full cell reaction (electrons cancel). Here E°ox is the oxidation potential, the negative of the anode's reduction potential."],
              [t`$\log K = nE^\circ/0.059$`, "298 K only."],
              [t`$E_{\text{H}^+/\text{H}_2} = -0.059\,\text{pH}$`, t`$p_{\text{H}_2} = 1$ bar, 298 K.`],
              [t`Concentration cell: $E = \dfrac{0.059}{n}\log\dfrac{c_{\text{cathode}}}{c_{\text{anode}}}$`, "Same electrode both sides; the cathode is the more concentrated side for a cation."],
              [t`Moles of product $= \dfrac{It}{nF}$`, "n = electrons per formula unit of the product (e.g. 4 for O₂, 2 for H₂)."],
            ],
          },
          {
            type: "example",
            title: "KCET / COMEDK level: time for electrolysis",
            problem: t`How long (in minutes) must a current of 5.0 A flow to deposit 2.7 g of aluminium from molten alumina? ($M(\text{Al}) = 27$ g mol$^{-1}$, $F = 96500$ C mol$^{-1}$)`,
            steps: [
              t`Moles of Al $= 2.7/27 = 0.10$ mol.`,
              t`$\text{Al}^{3+} + 3e^- \rightarrow \text{Al}$: charge $= 0.10 \times 3 \times 96500 = 28\,950$ C.`,
              t`$t = Q/I = 28\,950/5.0 = 5790$ s $= 96.5$ min.`,
            ],
            answer: "96.5 minutes.",
          },
          {
            type: "example",
            title: "JEE Main level: combining half-cell potentials",
            problem: t`Given $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0.77$ V and $E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0.44$ V, find $E^\circ(\text{Fe}^{3+}/\text{Fe})$.`,
            steps: [
              t`$\text{Fe}^{3+} + e^- \rightarrow \text{Fe}^{2+}$: $\Delta G_1^\circ = -1 \cdot F(0.77)$.`,
              t`$\text{Fe}^{2+} + 2e^- \rightarrow \text{Fe}$: $\Delta G_2^\circ = -2 \cdot F(-0.44) = +0.88F$.`,
              t`Add: $\text{Fe}^{3+} + 3e^- \rightarrow \text{Fe}$, $\Delta G_3^\circ = -0.77F + 0.88F = +0.11F = -3FE_3^\circ$.`,
              t`$E_3^\circ = -0.11/3 = -0.037$ V.`,
            ],
            answer: t`$E^\circ(\text{Fe}^{3+}/\text{Fe}) \approx -0.037$ V (not $0.77 + (-0.44) = 0.33$ V).`,
          },
          {
            type: "example",
            title: "NEET level: pH from a hydrogen electrode",
            problem: t`A hydrogen electrode ($p_{\text{H}_2} = 1$ bar) dipped in a solution shows a reduction potential of $-0.236$ V at 298 K. Find the pH.`,
            steps: [
              t`$E = -0.059\,\text{pH}$.`,
              t`$\text{pH} = 0.236/0.059 = 4.0$.`,
            ],
            answer: "pH = 4.",
          },
          {
            type: "example",
            title: "JEE Main / Advanced level: Ksp from electrode potentials",
            problem: t`Given $E^\circ(\text{Ag}^+/\text{Ag}) = 0.80$ V and $E^\circ(\text{AgCl}/\text{Ag}, \text{Cl}^-) = 0.22$ V, find $K_{sp}$ of AgCl at 298 K.`,
            steps: [
              t`Target: $\text{AgCl(s)} \rightleftharpoons \text{Ag}^+ + \text{Cl}^-$. Write it as cathode $\text{AgCl} + e^- \rightarrow \text{Ag} + \text{Cl}^-$ (0.22 V) and anode $\text{Ag} \rightarrow \text{Ag}^+ + e^-$ (0.80 V).`,
              t`$E^\circ_{\text{cell}} = 0.22 - 0.80 = -0.58$ V, $n = 1$. Negative, as expected for a sparingly soluble salt.`,
              t`$\log K_{sp} = (1 \times -0.58)/0.059 = -9.83$.`,
              t`$K_{sp} = 10^{-9.83} \approx 1.5 \times 10^{-10}$.`,
            ],
            answer: t`$K_{sp} \approx 1.5 \times 10^{-10}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: Ka from a concentration cell",
            problem: t`For the cell $\text{Pt} | \text{H}_2(1\text{ bar}) | \text{HA}(0.10\text{ M}) || \text{H}^+(1.0\text{ M}) | \text{H}_2(1\text{ bar}) | \text{Pt}$, the EMF at 298 K is 0.177 V. Find $K_a$ of the weak acid HA.`,
            steps: [
              t`Concentration cell: $E = 0.059\log\dfrac{[\text{H}^+]_{\text{cathode}}}{[\text{H}^+]_{\text{anode}}} = 0.059\log\dfrac{1.0}{x}$.`,
              t`$0.177 = 0.059\log(1/x) \Rightarrow \log(1/x) = 3 \Rightarrow x = [\text{H}^+] = 1.0 \times 10^{-3}$ M (pH 3 on the anode side).`,
              t`$K_a = \dfrac{x^2}{0.10 - x} = \dfrac{1.0 \times 10^{-6}}{0.099} = 1.0 \times 10^{-5}$.`,
            ],
            answer: t`$K_a \approx 1.0 \times 10^{-5}$.`,
          },
          {
            type: "mistake",
            wrong: t`To get $E^\circ(\text{Fe}^{3+}/\text{Fe})$, just add $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+})$ and $E^\circ(\text{Fe}^{2+}/\text{Fe})$.`,
            right: t`When half-reactions add to give another **half**-reaction, add $\Delta G^\circ = -nFE^\circ$, then divide by the new $n$.`,
            why: "Adding E° works for a full cell because the electrons cancel. In a new half-reaction the electrons don't cancel, so the potentials must be weighted by n.",
          },
          {
            type: "mistake",
            wrong: t`$\Lambda_m = \kappa/c$, so with $\kappa$ in S cm$^{-1}$ and $c$ in mol L$^{-1}$ I divide directly.`,
            right: t`Multiply by 1000: $\Lambda_m = 1000\kappa/M$ gives S cm$^2$ mol$^{-1}$. In SI, convert $c$ to mol m$^{-3}$.`,
            why: "A litre is 1000 cm³, so mixing cm and L silently loses a factor of 1000. Exam options are built around exactly this slip.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Given $E^\circ(\text{Cu}^{2+}/\text{Cu}) = 0.34$ V and $E^\circ(\text{Cu}^{2+}/\text{Cu}^+) = 0.15$ V, find $E^\circ(\text{Cu}^+/\text{Cu})$ in V.`,
                answer: 0.53,
                tolerance: 0.005,
                unit: "V",
                explain: t`$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$ minus $\text{Cu}^{2+} + e^- \rightarrow \text{Cu}^+$ gives $\text{Cu}^+ + e^- \rightarrow \text{Cu}$. $1 \cdot E^\circ = 2(0.34) - 1(0.15) = 0.53$ V.`,
                difficulty: 3,
                hint: "Subtract the nE° values, then divide by the new n = 1.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order from weakest to strongest oxidising agent.",
              items: [t`$\text{Mg}^{2+}$ (−2.37 V)`, t`$\text{Zn}^{2+}$ (−0.76 V)`, t`$\text{Cu}^{2+}$ (+0.34 V)`, t`$\text{Ag}^+$ (+0.80 V)`, t`$\text{F}_2$ (+2.87 V)`],
              explain: "The more positive the reduction potential, the more strongly the species pulls electrons, so the stronger an oxidising agent it is.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Combine half-reactions through $\Delta G^\circ = -nFE^\circ$; add E° directly only for a full cell.`,
              t`Cells measure equilibrium: $\log K = nE^\circ/0.059$ gives $K_{sp}$, $K_a$ and pH.`,
              t`Faraday: moles of product $= It/(nF)$, with $n$ per product molecule.`,
              t`Conductance: on dilution κ falls, Λm and α rise; watch the factor of 1000.`,
            ],
          },
        ],
        flashcards: [
          { front: "Combining two half-reactions into a third", back: t`$n_3E_3^\circ = n_1E_1^\circ + n_2E_2^\circ$ (from adding ΔG°).` },
          { front: t`$E^\circ(\text{Fe}^{3+}/\text{Fe})$ from 0.77 V and −0.44 V`, back: "About −0.037 V." },
          { front: "Ksp from a cell", back: t`Write $\text{MX(s)} \rightarrow \text{M}^+ + \text{X}^-$ as a cell, find $E^\circ$ (negative), then $\log K_{sp} = nE^\circ/0.059$.` },
          { front: "Charge to liberate 1 mol of O₂ from water", back: t`4 F, since $2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$.` },
          { front: "Charge to liberate 1 mol of H₂", back: "2 F." },
          { front: "Which side is the anode in a concentration cell (cation electrodes)?", back: "The more dilute side." },
          { front: t`$\Lambda_m$ in S cm$^2$ mol$^{-1}$ from κ in S cm$^{-1}$`, back: t`$\Lambda_m = 1000\kappa/M$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many moles of $\text{O}_2$ are released at the anode when 19 300 C pass through acidified water? ($F = 96500$ C mol$^{-1}$)`,
            answer: 0.05,
            tolerance: 0.001,
            unit: "mol",
            explain: t`$19\,300/96\,500 = 0.20$ mol $e^-$. Each $\text{O}_2$ needs 4 $e^-$, so $0.20/4 = 0.050$ mol.`,
          },
          {
            kind: "numeric",
            q: t`Find $E_{\text{cell}}$ (in V) at 298 K for $\text{Zn} | \text{Zn}^{2+}(0.010\text{ M}) || \text{Ag}^+(0.10\text{ M}) | \text{Ag}$. ($E^\circ$: Zn −0.76 V, Ag +0.80 V)`,
            answer: 1.56,
            tolerance: 0.005,
            unit: "V",
            explain: t`$\text{Zn} + 2\text{Ag}^+ \rightarrow \text{Zn}^{2+} + 2\text{Ag}$; $E^\circ = 1.56$ V. $Q = 0.010/(0.10)^2 = 1$, so $\log Q = 0$ and $E = 1.56$ V. Forgetting to square $[\text{Ag}^+]$ gives a wrong 1.59 V.`,
            difficulty: 2,
            hint: "Build Q from the balanced equation, with coefficients as powers.",
          },
          {
            kind: "numeric",
            q: t`Using $\Lambda_m^\circ$ values (S cm$^2$ mol$^{-1}$) HCl 426, NaCl 126 and $\text{CH}_3\text{COONa}$ 91, find $\Lambda_m^\circ$ of $\text{CH}_3\text{COOH}$.`,
            answer: 391,
            tolerance: 0.5,
            unit: "S cm² mol⁻¹",
            explain: t`$\Lambda^\circ(\text{CH}_3\text{COOH}) = \Lambda^\circ(\text{HCl}) + \Lambda^\circ(\text{CH}_3\text{COONa}) - \Lambda^\circ(\text{NaCl}) = 426 + 91 - 126 = 391$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A cell reaction with $n = 2$ has $E^\circ_{\text{cell}} = 0.295$ V at 298 K. Find $\log K$.`,
            answer: 10,
            tolerance: 0.05,
            explain: t`$\log K = nE^\circ/0.059 = 2 \times 0.295/0.059 = 10$, so $K = 10^{10}$.`,
          },
          {
            kind: "multi",
            q: "On diluting an aqueous ethanoic acid solution at constant temperature, which quantities increase?",
            options: ["Molar conductivity", "Degree of dissociation", "Conductivity κ", t`Concentration of $\text{H}^+$`],
            answers: [0, 1],
            explain: t`Λm and α both rise. κ and $[\text{H}^+]$ fall, because the ions are spread through more volume even though a larger fraction of the acid is ionised.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Find $\Delta_rG^\circ$ (in kJ mol$^{-1}$) for $\text{Cu} + 2\text{Ag}^+ \rightarrow \text{Cu}^{2+} + 2\text{Ag}$, $E^\circ_{\text{cell}} = 0.46$ V. ($F = 96500$ C mol$^{-1}$)`,
            answer: -88.8,
            tolerance: 0.3,
            unit: "kJ/mol",
            explain: t`$\Delta_rG^\circ = -2 \times 96500 \times 0.46 = -88\,780$ J mol$^{-1} \approx -88.8$ kJ mol$^{-1}$.`,
          },
          {
            kind: "mcq",
            q: t`$E^\circ$ values: $\text{Cl}_2/\text{Cl}^- = 1.36$, $\text{Br}_2/\text{Br}^- = 1.09$, $\text{I}_2/\text{I}^- = 0.54$, $\text{Fe}^{3+}/\text{Fe}^{2+} = 0.77$ V. Which pair will NOT react under standard conditions?`,
            options: [t`$\text{Cl}_2$ + $\text{Br}^-$`, t`$\text{Br}_2$ + $\text{I}^-$`, t`$\text{Fe}^{3+}$ + $\text{I}^-$`, t`$\text{Fe}^{3+}$ + $\text{Br}^-$`],
            answer: 3,
            explain: t`$\text{Fe}^{3+}$ + $\text{Br}^-$: $E^\circ_{\text{cell}} = 0.77 - 1.09 = -0.32$ V < 0. All the others give a positive $E^\circ_{\text{cell}}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A hydrogen electrode (1 bar) dipped in 0.010 M solution of a weak acid HA shows a potential of $-0.236$ V vs SHE at 298 K. Find $\text{p}K_a$ of HA.`,
            answer: 6,
            tolerance: 0.02,
            explain: t`pH $= 0.236/0.059 = 4$, so $[\text{H}^+] = 1.0 \times 10^{-4}$ M. $K_a = (10^{-4})^2/(0.010 - 0.0001) = 1.0 \times 10^{-6}$, so $\text{p}K_a = 6.0$.`,
            difficulty: 3,
            hint: "Get pH from E = −0.059 pH first.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Solutions": "c12-solutions",
  "12:Electrochemistry": "c12-electrochemistry",
};
