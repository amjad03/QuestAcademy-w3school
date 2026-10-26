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
                "At the normal boiling point the solution's vapour pressure is below 1 atm",
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
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Solutions": "c12-solutions",
};
