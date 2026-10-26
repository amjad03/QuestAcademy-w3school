import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Thermodynamics (NCERT / Karnataka PUC)                               */
  /* = thermodynamics part of "Heat and Thermodynamics" (ISC)             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-thermodynamics",
    title: "Thermodynamics",
    icon: "🔥",
    description:
      "Thermal equilibrium and the zeroth law, heat, work and internal energy, the first law, specific heats, thermodynamic processes, heat engines, refrigerators, the second law and the Carnot engine.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-phy-first-law",
        title: "Zeroth Law, Heat, Work and the First Law",
        summary:
          "Thermal equilibrium, the zeroth law and temperature, internal energy as a state variable, heat and work as modes of energy transfer, the first law of thermodynamics and specific heat capacities with Cp − Cv = R.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🫖",
            caption:
              "A steel tumbler of hot chai left on a table cools until it is at room temperature. After that, nothing about it changes any more: it has reached thermal equilibrium with the room.",
          },
          {
            type: "text",
            md: t`**Thermodynamics** studies heat, work and temperature using **macroscopic** quantities such as pressure, volume and temperature. It does not need a picture of molecules (that is the job of kinetic theory, the next chapter).

The part of the universe we study is the **system** (for example, a gas in a cylinder); everything else is the **surroundings**. A wall that stops heat flow is an **adiabatic wall**; a wall that lets heat flow is a **diathermic wall**.

A system is in **thermal equilibrium** when its macroscopic variables (P, V, T, mass, composition) no longer change with time. Two systems joined by a diathermic wall settle into thermal equilibrium with each other.`,
          },
          {
            type: "text",
            md: t`**Zeroth law of thermodynamics:** if two systems A and B are each in thermal equilibrium with a third system C, then A and B are in thermal equilibrium with each other.

The quantity that is the same for all bodies in thermal equilibrium is called **temperature**. This is exactly how a thermometer works: the thermometer is the system C. The law was named "zeroth" by R. H. Fowler in 1931 because it was stated after the first and second laws, yet logically comes before them.`,
          },
          {
            type: "heading",
            text: "Heat, work and internal energy",
          },
          {
            type: "text",
            md: t`The **internal energy U** of a system is the sum of the kinetic and potential energies of its molecules, measured in the frame in which the centre of mass of the system is at rest. So the bulk motion of a moving container is **not** part of U. U depends only on the state of the system, so it is a **state variable**. For an ideal gas, U depends only on temperature.

There are two ways to change U. **Heat** is energy that flows because of a temperature difference (a flame under a cylinder). **Work** is energy transferred by other means, such as pushing a piston. Heat and work are *modes of energy transfer*, not things a body contains, and the amount of each depends on the path taken between two states.`,
          },
          {
            type: "formula",
            tex: t`\Delta Q = \Delta U + \Delta W \qquad \text{with } \Delta W = P\,\Delta V \text{ (small quasi-static change)}`,
            caption:
              "First law of thermodynamics (energy conservation). NCERT convention: ΔQ is heat supplied TO the system, ΔW is work done BY the system. (Chemistry books write ΔU = q + w with w = work done ON the system; it is the same law.)",
          },
          {
            type: "table",
            headers: ["Quantity", "Positive when", "Negative when"],
            rows: [
              ["$\\Delta Q$", "heat is supplied to the system", "heat is given out by the system"],
              ["$\\Delta W$", "the system does work (gas expands)", "work is done on the system (gas is compressed)"],
              ["$\\Delta U$", "internal energy rises (ideal gas: T rises)", "internal energy falls (ideal gas: T falls)"],
            ],
          },
          {
            type: "example",
            title: "Using the sign convention",
            problem: t`(a) A gas absorbs 800 J of heat and does 500 J of work on its surroundings. Find $\Delta U$. (b) In another process, 200 J of work is done on a gas while it gives out 150 J of heat. Find $\Delta U$.`,
            steps: [
              t`(a) $\Delta Q = +800$ J, $\Delta W = +500$ J (work by the gas).`,
              t`$\Delta U = \Delta Q - \Delta W = 800 - 500 = +300$ J.`,
              t`(b) Heat given out: $\Delta Q = -150$ J. Work done ON the gas: $\Delta W = -200$ J.`,
              t`$\Delta U = (-150) - (-200) = +50$ J.`,
            ],
            answer: t`(a) U rises by 300 J. (b) U rises by 50 J: the work put in is more than the heat that leaks out.`,
          },
          {
            type: "example",
            title: "Boiling water at 1 atm",
            problem: t`10 g of water at 100 °C is turned into steam at 100 °C and 1 atm ($1.013\times10^5$ Pa). The volume changes from 10 cm³ to 16 700 cm³. Latent heat of vaporisation = 2256 J/g. Find the work done by the water and the change in its internal energy.`,
            steps: [
              t`Heat supplied: $\Delta Q = mL = 10 \times 2256 = 22\,560$ J.`,
              t`$\Delta V = 16\,700 - 10 = 16\,690$ cm³ $= 1.669\times10^{-2}$ m³.`,
              t`Work at constant pressure: $\Delta W = P\Delta V = 1.013\times10^5 \times 1.669\times10^{-2} \approx 1691$ J.`,
              t`$\Delta U = \Delta Q - \Delta W = 22\,560 - 1691 \approx 20\,870$ J.`,
            ],
            answer: t`Work done ≈ 1.69 kJ; internal energy rises by ≈ 20.9 kJ. Most of the latent heat goes into pulling the molecules apart, not into pushing back the atmosphere.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A gas absorbs 400 J of heat and its internal energy rises by 150 J. How much work (in J) does the gas do?",
                answer: 250,
                unit: "J",
                explain: t`$\Delta W = \Delta Q - \Delta U = 400 - 150 = 250$ J, done by the gas (it expands).`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A hot body contains a lot of heat, and heat and work are properties of a state, like temperature.",
            right: "A body contains internal energy. Heat and work are energy in transit, and their values depend on the path between two states.",
            why: "Everyday language says a stove 'holds heat', so heat feels like a stored quantity. But the same change of state (same ΔU) can be reached with different amounts of heat and work, so neither can be a property of the state.",
          },
          {
            type: "text",
            md: t`**Specific heat capacity** is the heat needed per unit mass per unit rise in temperature: $s = \dfrac{\Delta Q}{m\,\Delta T}$ (J kg⁻¹ K⁻¹). **Molar specific heat capacity** is per mole: $C = \dfrac{\Delta Q}{\mu\,\Delta T}$ (J mol⁻¹ K⁻¹). Water has a very large value, about 4186 J kg⁻¹ K⁻¹, which is why coastal cities like Mumbai and Chennai have mild temperature swings.

For a gas, the heat needed depends on what else happens during heating. Heating at constant volume gives $C_v$; heating at constant pressure gives $C_p$. Since at constant pressure the gas also does work in expanding, $C_p > C_v$.`,
          },
          {
            type: "example",
            title: "Derivation: Mayer's relation Cp − Cv = R",
            problem: t`Show that for one mole of an ideal gas, $C_p - C_v = R$.`,
            steps: [
              t`At constant volume no work is done, so $\Delta Q = \Delta U = \mu C_v\,\Delta T$. For an ideal gas U depends only on T, so $\Delta U = \mu C_v\,\Delta T$ for **any** process.`,
              t`At constant pressure, the first law gives $\mu C_p\,\Delta T = \Delta U + P\,\Delta V = \mu C_v\,\Delta T + P\,\Delta V$.`,
              t`From $PV = \mu RT$ at constant P: $P\,\Delta V = \mu R\,\Delta T$.`,
              t`So $\mu C_p\,\Delta T = \mu C_v\,\Delta T + \mu R\,\Delta T$, which gives $C_p - C_v = R$.`,
            ],
            answer: t`$C_p - C_v = R \approx 8.314$ J mol⁻¹ K⁻¹. Per unit mass, $c_p - c_v = R/M$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it fixed by the state, or does it depend on the path?",
              groups: ["State variable", "Depends on the path"],
              items: [
                { text: "Internal energy", group: 0, hint: "It returns to its old value whenever the system returns to its old state." },
                { text: "Pressure", group: 0, hint: "You can read it off a gauge in any equilibrium state." },
                { text: "Temperature", group: 0, hint: "The zeroth law defines it for every equilibrium state." },
                { text: "Volume", group: 0, hint: "It is one of the coordinates of a point on a P–V diagram." },
                { text: "Heat supplied", group: 1, hint: "The same change of state can be made with different amounts of heat." },
                { text: "Work done by the gas", group: 1, hint: "It is the area under the P–V curve, which changes with the path." },
              ],
              explain: "U, P, V and T are **state variables**. Heat and work are **path dependent**; only their difference ΔQ − ΔW = ΔU is fixed by the end states.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State the sign convention in one line before using the first law; examiners give a mark for it. The derivation of $C_p - C_v = R$ is a frequent 2–3 mark question: write the first law at constant V, then at constant P, and use $P\Delta V = \mu R\Delta T$. Always convert to SI (cm³ to m³, kJ to J).`,
          },
          {
            type: "keypoints",
            items: [
              "Zeroth law: two systems each in equilibrium with a third are in equilibrium with each other; this defines temperature.",
              "Internal energy U is a state variable; heat and work are path-dependent modes of energy transfer.",
              t`First law: $\Delta Q = \Delta U + \Delta W$ (ΔQ to the system, ΔW by the system).`,
              t`For an ideal gas $\Delta U = \mu C_v \Delta T$ in every process, and $C_p - C_v = R$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Zeroth law of thermodynamics", back: "If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. It defines temperature." },
          { front: "Adiabatic wall vs diathermic wall", back: "An adiabatic wall allows no heat flow; a diathermic wall allows heat flow." },
          { front: "Internal energy U", back: "Sum of molecular kinetic and potential energies in the centre-of-mass frame. A state variable; for an ideal gas it depends on T only." },
          { front: "First law (NCERT form)", back: "ΔQ = ΔU + ΔW, with ΔQ supplied to the system and ΔW done by the system." },
          { front: "Why is Cp greater than Cv?", back: "At constant pressure part of the heat is used for the work of expansion, so more heat is needed for the same rise in temperature." },
          { front: "Mayer's relation", back: "Cp − Cv = R for one mole of an ideal gas (per kg: cp − cv = R/M)." },
          { front: "Specific heat of water", back: "About 4186 J kg⁻¹ K⁻¹ (≈ 4.2 kJ kg⁻¹ K⁻¹), very high compared with most substances." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a state variable?",
            options: ["Heat absorbed", "Work done by the gas", "Internal energy", "Heat given out"],
            answer: 2,
            explain: "Internal energy depends only on the state. Heat and work depend on the path between two states.",
          },
          {
            kind: "numeric",
            q: "2 kJ of heat is supplied to a gas, which does 500 J of work on its surroundings. Find ΔU in joules.",
            answer: 1500,
            unit: "J",
            explain: t`$\Delta U = \Delta Q - \Delta W = 2000 - 500 = 1500$ J.`,
          },
          {
            kind: "numeric",
            q: "300 J of work is done ON a gas and its internal energy rises by 100 J. Find the heat supplied to the gas in joules (negative if heat is given out).",
            answer: -200,
            unit: "J",
            difficulty: 2,
            hint: "Work done on the gas means ΔW is negative in the NCERT convention.",
            explain: t`$\Delta Q = \Delta U + \Delta W = 100 + (-300) = -200$ J. The gas gives out 200 J of heat.`,
          },
          {
            kind: "truefalse",
            q: "The zeroth law of thermodynamics is what allows us to define temperature and use thermometers.",
            answer: true,
            explain: "Bodies in thermal equilibrium share one property, temperature; a thermometer is the third body C of the zeroth law.",
          },
          {
            kind: "numeric",
            q: "For nitrogen (M = 0.028 kg/mol), find cp − cv per kilogram in J kg⁻¹ K⁻¹. Take R = 8.314 J mol⁻¹ K⁻¹.",
            answer: 297,
            tolerance: 1,
            unit: "J/(kg K)",
            difficulty: 2,
            hint: "Divide the molar relation by the molar mass.",
            explain: t`$c_p - c_v = R/M = 8.314/0.028 \approx 297$ J kg⁻¹ K⁻¹.`,
          },
          {
            kind: "multi",
            q: "Select all the correct statements.",
            options: [
              "The internal energy of an ideal gas depends only on its temperature.",
              "Heat and work both depend on the path between two states.",
              "An adiabatic wall lets heat flow through it.",
              "The kinetic energy of a moving container of gas is part of the gas's internal energy.",
            ],
            answers: [0, 1],
            explain: "An adiabatic wall blocks heat flow. Internal energy is measured in the centre-of-mass frame, so bulk motion of the container is not included.",
          },
          {
            kind: "fill",
            q: "A wall that does not allow any heat to pass through it is called an ___ wall.",
            answer: ["adiabatic"],
            explain: "Adiabatic walls are perfect insulators; diathermic walls conduct heat.",
          },
          {
            kind: "mcq",
            q: "Why is Cp greater than Cv for a gas?",
            options: [
              "At constant pressure the gas also does work while expanding",
              "Molecules move faster at constant pressure",
              "Internal energy depends on pressure",
              "Heat is lost through the walls at constant pressure",
            ],
            answer: 0,
            explain: "At constant pressure the gas expands, so extra heat is needed for the work PΔV. For an ideal gas U depends on T only, not on pressure.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-phy-processes",
        title: "State Variables and Thermodynamic Processes",
        summary:
          "State variables and the equation of state, quasi-static processes, and the isothermal, adiabatic, isochoric, isobaric and cyclic processes with the work done in each.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`The equilibrium state of a gas is fully described by a few **state variables**: pressure P, volume V, temperature T, mass and composition. The relation between them is the **equation of state**. For μ moles of an ideal gas it is $PV = \mu RT$.

State variables are of two kinds. **Extensive** variables scale with the size of the system: U, V and mass. **Intensive** variables do not: P, T and density. If you split a gas in equilibrium into two equal halves, each half has half the volume and half the internal energy, but the same pressure and temperature.`,
          },
          {
            type: "text",
            md: t`A **quasi-static process** is an idealised process that happens so slowly that the system passes through a continuous chain of equilibrium states. At every stage P, V and T have definite values, so the process can be drawn as a curve on a P–V diagram, and the work done equals the **area under that curve**. A piston moved very slowly, or a gas warmed by a reservoir only slightly hotter than itself, is close to quasi-static.`,
          },
          {
            type: "table",
            headers: ["Process", "What is fixed", "ΔU", "Work by gas", "First law gives"],
            rows: [
              ["Isothermal", "T constant", "0 (ideal gas)", t`$\mu RT\ln\dfrac{V_2}{V_1}$`, "ΔQ = ΔW"],
              ["Adiabatic", "no heat exchange", t`$\mu C_v\Delta T$`, t`$\dfrac{\mu R(T_1-T_2)}{\gamma-1}$`, "ΔU = −ΔW"],
              ["Isochoric", "V constant", t`$\mu C_v\Delta T$`, "0", "ΔQ = ΔU"],
              ["Isobaric", "P constant", t`$\mu C_v\Delta T$`, t`$P\Delta V = \mu R\Delta T$`, t`$\Delta Q = \mu C_p\Delta T$`],
              ["Cyclic", "returns to start", "0", "area enclosed by the loop", "ΔQ = ΔW"],
            ],
          },
          {
            type: "example",
            title: "Derivation: work in an isothermal process",
            problem: t`Find the work done by μ moles of an ideal gas that expands quasi-statically at constant temperature T from $V_1$ to $V_2$.`,
            steps: [
              t`At every stage $P = \dfrac{\mu RT}{V}$.`,
              t`$W = \displaystyle\int_{V_1}^{V_2} P\,dV = \mu RT\int_{V_1}^{V_2}\dfrac{dV}{V} = \mu RT\ln\dfrac{V_2}{V_1}$.`,
              t`T is constant, so $\Delta U = 0$ and the first law gives $\Delta Q = W$.`,
              t`For expansion ($V_2 > V_1$) W is positive and the gas absorbs heat; for compression W is negative and the gas gives out heat.`,
            ],
            answer: t`$W = \mu RT\ln(V_2/V_1) = 2.303\,\mu RT\log_{10}(V_2/V_1)$, and in an isothermal process all the heat absorbed becomes work.`,
          },
          {
            type: "example",
            title: "Derivation: PV^γ = constant for an adiabatic process",
            problem: t`Show that in a quasi-static adiabatic process of an ideal gas, $PV^{\gamma}$ stays constant, where $\gamma = C_p/C_v$.`,
            steps: [
              t`No heat flows: $0 = dU + dW$, so $\mu C_v\,dT + P\,dV = 0$.`,
              t`Differentiate $PV = \mu RT$: $P\,dV + V\,dP = \mu R\,dT$, so $\mu\,dT = (P\,dV + V\,dP)/R$.`,
              t`Substitute and use $R = C_p - C_v$: $C_v(P\,dV + V\,dP) + (C_p - C_v)P\,dV = 0$, which simplifies to $C_p P\,dV + C_v V\,dP = 0$.`,
              t`Divide by $C_v PV$: $\gamma\dfrac{dV}{V} + \dfrac{dP}{P} = 0$. Integrate: $\ln P + \gamma\ln V = $ constant.`,
            ],
            answer: t`$PV^{\gamma} = $ constant. Using $PV = \mu RT$ this also gives $TV^{\gamma-1} = $ constant and $P^{1-\gamma}T^{\gamma} = $ constant.`,
          },
          {
            type: "formula",
            tex: t`W_{\text{adiabatic}} = \int_{V_1}^{V_2} \frac{K}{V^{\gamma}}\,dV = \frac{P_1V_1 - P_2V_2}{\gamma - 1} = \frac{\mu R\,(T_1 - T_2)}{\gamma - 1}`,
            caption: "K = PV^γ is the constant of the process. In adiabatic expansion W > 0, so T falls (the gas cools); in adiabatic compression the gas heats up.",
          },
          {
            type: "example",
            title: "Isothermal expansion",
            problem: t`2 mol of an ideal gas at 300 K expands isothermally and slowly from 10 L to 20 L. Find the work done, the heat absorbed and ΔU. ($R = 8.314$ J mol⁻¹ K⁻¹, $\ln 2 = 0.693$.)`,
            steps: [
              t`$W = \mu RT\ln\dfrac{V_2}{V_1} = 2 \times 8.314 \times 300 \times \ln 2$.`,
              t`$= 4988.4 \times 0.693 \approx 3457$ J.`,
              t`T is constant, so $\Delta U = 0$ and $\Delta Q = W$.`,
            ],
            answer: t`W ≈ 3.46 kJ, heat absorbed ≈ 3.46 kJ, ΔU = 0.`,
          },
          {
            type: "example",
            title: "Adiabatic compression (the idea of a diesel engine)",
            problem: t`Air ($\gamma = 1.4$) at 300 K is compressed quickly (adiabatically) to $\tfrac{1}{32}$ of its volume. Find the final temperature and the factor by which the pressure rises.`,
            steps: [
              t`$TV^{\gamma-1} = $ constant, so $T_2 = T_1\left(\dfrac{V_1}{V_2}\right)^{\gamma-1} = 300 \times 32^{0.4}$.`,
              t`$32^{0.4} = (2^5)^{0.4} = 2^2 = 4$, so $T_2 = 1200$ K.`,
              t`$PV^{\gamma} = $ constant, so $\dfrac{P_2}{P_1} = 32^{1.4} = 32 \times 32^{0.4} = 32 \times 4 = 128$.`,
            ],
            answer: t`The air reaches about 1200 K (hot enough to ignite diesel fuel) and its pressure rises 128 times. An isothermal compression would raise the pressure only 32 times.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Adiabatic curves are steeper",
            md: t`At the same point on a P–V diagram, the isothermal slope is $\dfrac{dP}{dV} = -\dfrac{P}{V}$ while the adiabatic slope is $-\gamma\dfrac{P}{V}$. Since $\gamma > 1$, the adiabatic curve is **γ times steeper**. In compression the pressure rises faster because the gas also heats up.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In an isochoric process, 500 J of heat is supplied to a gas. What is ΔU?",
                options: ["0", "500 J", "−500 J", "It depends on γ"],
                answer: 1,
                explain: "Volume is constant, so ΔW = 0 and ΔU = ΔQ = 500 J.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In an adiabatic process the temperature stays constant, and in an isothermal process no heat is exchanged.",
            right: "Adiabatic means no heat exchange (Q = 0), so T changes. Isothermal means T is constant, so heat must flow in or out (Q = W).",
            why: "The two words are easy to swap because both describe 'something constant'. Remember: iso-THERMAL = same temperature; a-DIABATIC = heat cannot pass through.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each process with what the first law reduces to.",
              pairs: [
                ["Isothermal (ideal gas)", "ΔQ = ΔW"],
                ["Adiabatic", "ΔU = −ΔW"],
                ["Isochoric", "ΔQ = ΔU"],
                ["Isobaric", "ΔQ = μCpΔT"],
              ],
              explain: "Put the fixed quantity into ΔQ = ΔU + ΔW: T fixed makes ΔU = 0, no heat makes ΔQ = 0, fixed V makes ΔW = 0. A cyclic process also gives ΔQ = ΔW, because ΔU = 0 over a full cycle.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Derivations of isothermal work and adiabatic work are favourite long-answer questions. Show the integral, state the limits and say why ΔU = 0 (isothermal) or Q = 0 (adiabatic). Sketch an isotherm and an adiabat through the same point and label the steeper one.`,
          },
          {
            type: "keypoints",
            items: [
              "A quasi-static process passes through equilibrium states; work = area under its P–V curve.",
              t`Isothermal: $W = Q = \mu RT\ln(V_2/V_1)$, ΔU = 0.`,
              t`Adiabatic: $PV^{\gamma}$, $TV^{\gamma-1}$ constant; $W = \mu R(T_1-T_2)/(\gamma-1)$; the gas cools on expansion.`,
              "Isochoric: W = 0, Q = ΔU. Isobaric: W = PΔV, Q = μCpΔT. Cyclic: ΔU = 0.",
            ],
          },
        ],
        flashcards: [
          { front: "Quasi-static process", back: "An infinitely slow process in which the system passes through a series of equilibrium states, so it can be drawn on a P–V diagram." },
          { front: "Extensive vs intensive variables", back: "Extensive (U, V, mass) scale with system size; intensive (P, T, density) do not." },
          { front: "Work in isothermal expansion", back: "W = μRT ln(V₂/V₁); ΔU = 0, so Q = W." },
          { front: "Adiabatic relations", back: "PV^γ = constant, TV^(γ−1) = constant, P^(1−γ)T^γ = constant." },
          { front: "Work in adiabatic process", back: "W = (P₁V₁ − P₂V₂)/(γ − 1) = μR(T₁ − T₂)/(γ − 1)." },
          { front: "Slope of adiabat vs isotherm", back: "Adiabatic slope = γ × isothermal slope at the same point, so the adiabat is steeper." },
          { front: "Cyclic process", back: "The system returns to its initial state: ΔU = 0, and net heat absorbed = net work done = area enclosed on the P–V diagram." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For the isothermal expansion of an ideal gas:",
            options: ["ΔU = 0 and Q = W", "Q = 0 and ΔU = −W", "W = 0 and Q = ΔU", "ΔU = Q and W = Q"],
            answer: 0,
            explain: "Temperature is constant, so the internal energy of an ideal gas does not change; all heat absorbed becomes work.",
          },
          {
            kind: "numeric",
            q: "3 mol of an ideal gas at 350 K doubles its volume isothermally. Find the work done by the gas in joules. (R = 8.314 J mol⁻¹ K⁻¹, ln 2 = 0.693)",
            answer: 6051,
            tolerance: 15,
            unit: "J",
            difficulty: 2,
            explain: t`$W = 3 \times 8.314 \times 350 \times 0.693 \approx 6051$ J.`,
          },
          {
            kind: "numeric",
            q: "A monatomic ideal gas (γ = 5/3) at 250 K is compressed adiabatically to 1/8 of its volume. Find the final temperature in kelvin.",
            answer: 1000,
            unit: "K",
            difficulty: 2,
            hint: "Use TV^(γ−1) = constant with γ − 1 = 2/3.",
            explain: t`$T_2 = 250 \times 8^{2/3} = 250 \times 4 = 1000$ K.`,
          },
          {
            kind: "truefalse",
            q: "When an ideal gas expands adiabatically, its temperature falls.",
            answer: true,
            explain: "Q = 0 and W > 0, so ΔU = −W is negative, and T falls.",
          },
          {
            kind: "mcq",
            q: "2 mol of a diatomic ideal gas (Cp = 7R/2) is heated at constant pressure through 10 K. About how much heat is needed? (R = 8.314 J mol⁻¹ K⁻¹)",
            options: ["582 J", "416 J", "166 J", "291 J"],
            answer: 0,
            explain: t`$Q = \mu C_p\Delta T = 2 \times 3.5 \times 8.314 \times 10 \approx 582$ J. 416 J is $\mu C_v\Delta T$ (ΔU) and 166 J is the work $\mu R\Delta T$.`,
          },
          {
            kind: "multi",
            q: "Which statements about a quasi-static process are correct?",
            options: [
              "The system is in equilibrium at every stage.",
              "It can be drawn as a continuous curve on a P–V diagram.",
              "The sudden bursting of a balloon is a good example.",
              "It is an idealisation approached by very slow changes.",
            ],
            answers: [0, 1, 3],
            explain: "A bursting balloon is fast and far from equilibrium, so it is not quasi-static.",
          },
          {
            kind: "mcq",
            q: "At a given point on a P–V diagram, the ratio (slope of adiabat) / (slope of isotherm) for an ideal gas is:",
            options: ["γ", "1/γ", "γ − 1", "1"],
            answer: 0,
            explain: t`Adiabatic slope $= -\gamma P/V$, isothermal slope $= -P/V$; the ratio is γ.`,
          },
          {
            kind: "fill",
            q: "In an isochoric process, the work done by the gas is ___.",
            answer: ["zero", "0"],
            explain: "The volume does not change, so PΔV = 0.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-phy-second-law-carnot",
        title: "Heat Engines, Refrigerators, Second Law and Carnot Engine",
        summary:
          "Heat engines and their efficiency, refrigerators and heat pumps, the Kelvin–Planck and Clausius statements of the second law, reversible and irreversible processes, and the Carnot cycle and Carnot's theorem.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`A **heat engine** turns heat into work again and again by taking a **working substance** (steam, air–fuel mixture) through a cycle. In each cycle it absorbs heat $Q_1$ from a hot reservoir (the **source**) at temperature $T_1$, does net work W on the surroundings, and rejects heat $Q_2$ to a cold reservoir (the **sink**) at $T_2$.

Over a full cycle ΔU = 0, so $W = Q_1 - Q_2$. A steam engine and a car's petrol engine are heat engines; in the first, heat is supplied from outside (external combustion), in the second inside the cylinder (internal combustion).`,
          },
          {
            type: "formula",
            tex: t`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}`,
            caption: "Efficiency of a heat engine. η = 1 would need Q₂ = 0, which the second law forbids.",
          },
          {
            type: "text",
            md: t`A **refrigerator** runs the cycle backwards: work W is done on the working substance so that it takes heat $Q_2$ from the cold inside and gives $Q_1 = Q_2 + W$ to the warmer room. Its **coefficient of performance** is $\alpha = \dfrac{Q_2}{W}$, which can be larger than 1. A **heat pump** is the same machine used to warm a room; its useful output is $Q_1$.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "Some recent CBSE editions of the NCERT book trim the separate sections on heat engines and refrigerators, but the ideas are needed to state the second law and to study the Carnot engine. ISC, KCET, JEE and NEET all ask questions on efficiency and coefficient of performance, so learn them.",
          },
          {
            type: "text",
            md: t`The first law allows any process that conserves energy, but nature does not. The **second law** sets the limit.

**Kelvin–Planck statement:** no process is possible whose *sole* result is the absorption of heat from a reservoir and its complete conversion into work. (No engine can have η = 1.)

**Clausius statement:** no process is possible whose *sole* result is the transfer of heat from a colder object to a hotter object. (A refrigerator needs work.) The two statements are equivalent: breaking one would let you break the other.`,
          },
          {
            type: "text",
            md: t`A process is **reversible** if it can be run backwards so that both the system and the surroundings return exactly to their original states. Real processes are **irreversible** for two reasons: they pass through non-equilibrium states (free expansion, a quick explosion, heat flowing across a finite temperature difference), and they have **dissipative effects** such as friction and viscosity. A quasi-static process with no dissipation is reversible, an ideal that real engines approach but never reach.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Isothermal expansion** at $T_1$ from $V_1$ to $V_2$: the gas absorbs $Q_1$ from the source.`,
              t`**Adiabatic expansion** from $V_2$ to $V_3$: the gas cools from $T_1$ to $T_2$.`,
              t`**Isothermal compression** at $T_2$ from $V_3$ to $V_4$: the gas rejects $Q_2$ to the sink.`,
              t`**Adiabatic compression** from $V_4$ back to $V_1$: the gas warms from $T_2$ to $T_1$.`,
            ],
          },
          {
            type: "example",
            title: "Derivation: efficiency of a Carnot engine",
            problem: t`Using an ideal gas as the working substance in the four steps above, show that $\eta = 1 - T_2/T_1$.`,
            steps: [
              t`Step 1 (isothermal at $T_1$): $Q_1 = \mu RT_1\ln\dfrac{V_2}{V_1}$. Step 3 (isothermal at $T_2$): heat rejected $Q_2 = \mu RT_2\ln\dfrac{V_3}{V_4}$.`,
              t`Step 2 (adiabatic): $T_1V_2^{\gamma-1} = T_2V_3^{\gamma-1}$. Step 4 (adiabatic): $T_1V_1^{\gamma-1} = T_2V_4^{\gamma-1}$.`,
              t`Divide the two adiabatic relations: $\left(\dfrac{V_2}{V_1}\right)^{\gamma-1} = \left(\dfrac{V_3}{V_4}\right)^{\gamma-1}$, so $\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$.`,
              t`Hence $\dfrac{Q_2}{Q_1} = \dfrac{T_2}{T_1}$ and $\eta = 1 - \dfrac{Q_2}{Q_1} = 1 - \dfrac{T_2}{T_1}$.`,
            ],
            answer: t`$\eta_{\text{Carnot}} = 1 - \dfrac{T_2}{T_1}$ with T in kelvin. It depends only on the two reservoir temperatures.`,
          },
          {
            type: "formula",
            tex: t`\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} \qquad \alpha_{\text{Carnot}} = \frac{T_2}{T_1 - T_2}`,
            caption: "Carnot's theorem: no engine working between T₁ and T₂ can be more efficient than a Carnot engine, and the efficiency of a reversible (Carnot) engine does not depend on the working substance.",
          },
          {
            type: "example",
            title: "Checking an inventor's claim",
            problem: t`An engine works between a boiler at 227 °C and a river at 27 °C. Its inventor claims that it does 2200 J of work for every 5000 J of heat taken from the boiler. Is this possible?`,
            steps: [
              t`Convert to kelvin: $T_1 = 500$ K, $T_2 = 300$ K.`,
              t`Maximum (Carnot) efficiency $= 1 - \dfrac{300}{500} = 0.4$.`,
              t`Maximum work from 5000 J $= 0.4 \times 5000 = 2000$ J.`,
              t`The claim of 2200 J (η = 44%) is more than the Carnot limit.`,
            ],
            answer: "Impossible: it would violate the second law. At most 2000 J of work can be obtained, with at least 3000 J rejected to the river.",
          },
          {
            type: "example",
            title: "An ideal freezer",
            problem: t`A freezer keeps its inside at −13 °C in a room at 27 °C. If it works as an ideal (Carnot) refrigerator, how much work is needed to remove 1300 J of heat from the inside, and how much heat goes into the room?`,
            steps: [
              t`$T_2 = 260$ K, $T_1 = 300$ K.`,
              t`$\alpha = \dfrac{T_2}{T_1 - T_2} = \dfrac{260}{40} = 6.5$.`,
              t`$W = \dfrac{Q_2}{\alpha} = \dfrac{1300}{6.5} = 200$ J.`,
              t`Heat to the room: $Q_1 = Q_2 + W = 1300 + 200 = 1500$ J.`,
            ],
            answer: "At least 200 J of work; 1500 J of heat is given to the room. (That is why the coils at the back of a fridge feel warm.)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A Carnot engine works between 600 K and 300 K and absorbs 1000 J from the source per cycle. How much work (in J) does it do per cycle?",
                answer: 500,
                unit: "J",
                explain: t`$\eta = 1 - 300/600 = 0.5$, so $W = 0.5 \times 1000 = 500$ J.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "For a Carnot engine between 100 °C and 0 °C, η = 1 − 0/100 = 100%.",
            right: "Temperatures must be in kelvin: η = 1 − 273/373 ≈ 0.27, or 27%.",
            why: "The Carnot formula comes from ratios of absolute temperatures in PV = μRT. Celsius has an arbitrary zero, so putting Celsius values in gives nonsense, here even the 'perfect engine' the second law forbids.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of a Carnot cycle in order, starting at the source.",
              items: [
                "Isothermal expansion at T₁, absorbing Q₁",
                "Adiabatic expansion, cooling from T₁ to T₂",
                "Isothermal compression at T₂, rejecting Q₂",
                "Adiabatic compression, warming from T₂ to T₁",
              ],
              explain: "Isothermal and adiabatic steps alternate: expand-expand, then compress-compress. Heat is exchanged only in the two isothermal steps.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Write both statements of the second law in full: the words *sole result* carry the mark. In the Carnot derivation, show clearly why $V_2/V_1 = V_3/V_4$. In numericals, convert °C to K first and state whether you are finding efficiency (W/Q₁) or coefficient of performance (Q₂/W).`,
          },
          {
            type: "keypoints",
            items: [
              t`Heat engine: $\eta = W/Q_1 = 1 - Q_2/Q_1$. Refrigerator: $\alpha = Q_2/W$.`,
              "Kelvin–Planck: no engine with η = 1. Clausius: no heat flow from cold to hot without work. They are equivalent.",
              "Friction and non-equilibrium steps make real processes irreversible.",
              t`Carnot cycle: two isotherms and two adiabats; $\eta = 1 - T_2/T_1$ (kelvin), the maximum possible between $T_1$ and $T_2$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Efficiency of a heat engine", back: "η = W/Q₁ = 1 − Q₂/Q₁, where Q₁ is heat absorbed from the source and Q₂ heat rejected to the sink." },
          { front: "Coefficient of performance of a refrigerator", back: "α = Q₂/W, the heat removed from the cold body per unit work. It can exceed 1." },
          { front: "Kelvin–Planck statement", back: "No process is possible whose sole result is absorbing heat from a reservoir and converting it completely into work." },
          { front: "Clausius statement", back: "No process is possible whose sole result is transferring heat from a colder object to a hotter one." },
          { front: "Two causes of irreversibility", back: "Non-equilibrium (quick) changes such as free expansion or heat flow across a finite ΔT, and dissipative effects such as friction and viscosity." },
          { front: "Carnot efficiency", back: "η = 1 − T₂/T₁ (kelvin). Independent of the working substance." },
          { front: "Carnot's theorem", back: "No engine between two given temperatures is more efficient than a reversible (Carnot) engine; all reversible engines between them have the same efficiency." },
          { front: "COP of a Carnot refrigerator", back: "α = T₂/(T₁ − T₂)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which statement is the Kelvin–Planck form of the second law?",
            options: [
              "No engine can convert all the heat it absorbs from a reservoir into work, with no other effect",
              "Energy can neither be created nor destroyed",
              "Two bodies in equilibrium with a third are in equilibrium with each other",
              "Heat flows on its own from a cold body to a hot body",
            ],
            answer: 0,
            explain: "The second option is the first law, the third is the zeroth law, and the fourth is the opposite of the Clausius statement.",
          },
          {
            kind: "numeric",
            q: "Find the efficiency (in %) of a Carnot engine working between 127 °C and 27 °C.",
            answer: 25,
            unit: "%",
            explain: t`$\eta = 1 - 300/400 = 0.25 = 25\%$.`,
          },
          {
            kind: "mcq",
            q: "A Carnot engine works between T₁ and T₂. Which change increases its efficiency more?",
            options: [
              "Lowering T₂ by 10 K",
              "Raising T₁ by 10 K",
              "Both have exactly the same effect",
              "Neither changes the efficiency",
            ],
            answer: 0,
            difficulty: 2,
            hint: "Compare how η = 1 − T₂/T₁ changes with each temperature; T₂ is smaller than T₁.",
            explain: t`$d\eta/dT_2 = -1/T_1$ while $d\eta/dT_1 = T_2/T_1^2$. Since $T_2 < T_1$, the effect of lowering $T_2$ is larger. Example: 500 K/300 K gives 40%; lowering the sink to 290 K gives 42%, raising the source to 510 K gives about 41.2%.`,
          },
          {
            kind: "truefalse",
            q: "The efficiency of a Carnot engine depends on the working substance used.",
            answer: false,
            explain: "Carnot's theorem: the efficiency of a reversible engine depends only on the temperatures of the source and sink.",
          },
          {
            kind: "numeric",
            q: "A refrigerator with coefficient of performance 5 removes 600 J of heat from its inside per cycle. How much heat (in J) does it give to the room per cycle?",
            answer: 720,
            unit: "J",
            difficulty: 2,
            explain: t`$W = Q_2/\alpha = 600/5 = 120$ J; $Q_1 = Q_2 + W = 720$ J.`,
          },
          {
            kind: "multi",
            q: "Which of these make a process irreversible?",
            options: [
              "Friction between piston and cylinder",
              "Free expansion of a gas into vacuum",
              "Heat flowing from a body at 400 K to one at 300 K",
              "A frictionless, quasi-static isothermal expansion",
            ],
            answers: [0, 1, 2],
            explain: "The last one is the ideal reversible process. Friction is dissipative, and free expansion and heat flow across a finite temperature difference pass through non-equilibrium states.",
          },
          {
            kind: "fill",
            q: "An engine that turns all the heat it absorbs into work, with no other effect, would break the ___ law of thermodynamics.",
            answer: ["second", "2nd"],
            explain: "Energy would still be conserved (first law), but the Kelvin–Planck statement of the second law forbids it.",
          },
          {
            kind: "mcq",
            q: "In which steps of a Carnot cycle does the working substance exchange heat?",
            options: ["Only in the two isothermal steps", "Only in the two adiabatic steps", "In all four steps", "Only in the adiabatic compression"],
            answer: 0,
            explain: "Adiabatic steps have Q = 0 by definition. Heat Q₁ is absorbed at T₁ and Q₂ rejected at T₂.",
          },
        ],
      },
      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c11-phy-exam-pv-cycles",
        title: "Exam edge: PV Diagrams, Cycles and Efficiency",
        summary:
          "What JEE, NEET, KCET and COMEDK ask from thermodynamics: reading P–V, P–T and V–T graphs, net work and heat in cycles, efficiency of non-Carnot cycles, and maximum temperature on a straight-line process.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Thermodynamics is one of the highest-scoring Class 11 chapters for JEE Main, NEET, KCET and COMEDK, and it links directly to kinetic theory. NEET and KCET mostly test the Carnot formula, process identification and the signs of W, Q and ΔU. JEE Main and COMEDK add graph reading and cycle efficiency; JEE Advanced adds calculus on non-standard paths. The question types to expect:`,
          },
          {
            type: "list",
            items: [
              "**Graphs:** identifying processes on P–V, P–T and V–T diagrams; net work as the area of a loop.",
              t`**First-law bookkeeping:** Q, W and ΔU for each step of a cycle, using $\Delta U = \mu C_v\Delta T$.`,
              "**Efficiency** of a given cycle (rectangle, triangle, isobar + isotherm) and comparison with the Carnot limit.",
              "**JEE Advanced:** straight-line processes where heat is absorbed in one part and rejected in another, and pistons held by springs.",
            ],
          },
          {
            type: "table",
            headers: ["Result", "Safe to use when", "Watch out"],
            rows: [
              [t`$\Delta U = \mu C_v\Delta T$`, "any process of an ideal gas, not only isochoric", "real gases and phase changes (boiling) need the first law instead"],
              ["Net work of a cycle = area enclosed", "loop drawn on P–V axes (P up, V across)", "clockwise loop = positive work by the gas; anticlockwise = negative"],
              ["Line through origin on a P–T graph", "ideal gas, fixed amount", "means V constant (isochoric), not isothermal"],
              ["Line through origin on a V–T graph", "ideal gas, fixed amount", "means P constant (isobaric)"],
              [t`$\eta = W_{\text{net}}/Q_{\text{in}}$`, "any cycle", "Q_in = sum of only the positive heats, not the net heat"],
              [t`$\eta \le 1 - T_{\min}/T_{\max}$`, "checking whether an answer or claim is possible", "it is a ceiling, not the efficiency of a non-Carnot cycle"],
            ],
          },
          {
            type: "formula",
            tex: t`\oint dU = 0 \quad\Rightarrow\quad Q_{\text{net}} = W_{\text{net}} = \pm\,(\text{area of loop}) \qquad \eta = \frac{W_{\text{net}}}{Q_{\text{in}}}`,
            caption: "Over a complete cycle the internal energy returns to its starting value. The efficiency divides by the heat absorbed only.",
          },
          {
            type: "example",
            title: "KCET level: work in a rectangular cycle",
            problem: t`A gas is taken clockwise round a rectangle on a P–V diagram with pressures $1\times10^5$ Pa and $3\times10^5$ Pa and volumes 1 L and 4 L. Find the net work done by the gas and the net heat absorbed per cycle.`,
            steps: [
              t`Area of the loop $= \Delta P \times \Delta V = (3-1)\times10^5 \times (4-1)\times10^{-3}$.`,
              t`$= 2\times10^5 \times 3\times10^{-3} = 600$ J.`,
              t`Clockwise on P–V axes, so the work is positive (done by the gas). Over a cycle ΔU = 0, so $Q_{\text{net}} = W_{\text{net}}$.`,
            ],
            answer: "Net work by the gas = 600 J; net heat absorbed = 600 J per cycle.",
          },
          {
            type: "example",
            title: "JEE Main level: efficiency of a rectangular cycle",
            problem: t`A monatomic ideal gas goes round the cycle A($P_0$, $V_0$) → B($2P_0$, $V_0$) → C($2P_0$, $2V_0$) → D($P_0$, $2V_0$) → A. Find its efficiency and compare it with a Carnot engine working between the highest and lowest temperatures of the cycle.`,
            steps: [
              t`Use $\mu C_v\Delta T = \tfrac{3}{2}\Delta(PV)$ and $\mu C_p\Delta T = \tfrac{5}{2}\Delta(PV)$ (since $\mu R\Delta T = \Delta(PV)$). Net work = loop area $= P_0V_0$.`,
              t`A→B (isochoric, P rises): $Q = \tfrac{3}{2}(2P_0V_0 - P_0V_0) = 1.5P_0V_0$, absorbed.`,
              t`B→C (isobaric expansion): $Q = \tfrac{5}{2}(4P_0V_0 - 2P_0V_0) = 5P_0V_0$, absorbed. C→D and D→A both cool the gas, so heat is rejected there.`,
              t`$Q_{\text{in}} = 6.5P_0V_0$, so $\eta = \dfrac{P_0V_0}{6.5P_0V_0} = \dfrac{2}{13} \approx 15.4\%$.`,
              t`$T \propto PV$: $T_{\max}$ at C ($4P_0V_0$), $T_{\min}$ at A ($P_0V_0$). Carnot: $1 - \tfrac{1}{4} = 75\%$.`,
            ],
            answer: t`$\eta = 2/13 \approx 15.4\%$, far below the Carnot limit of 75% for the same extreme temperatures.`,
          },
          {
            type: "example",
            title: "JEE Main level: a cycle drawn on a V–T graph",
            problem: t`One mole of an ideal gas goes round a cycle on a V–T graph: A($T_0$, $V_0$) → B($2T_0$, $2V_0$) along a straight line through the origin, then B → C($T_0$, $2V_0$) at constant volume, then C → A at constant temperature. Find the net work done by the gas for $T_0 = 300$ K. ($R = 8.314$ J mol⁻¹ K⁻¹, $\ln 2 = 0.693$)`,
            steps: [
              t`A→B: V ∝ T, so P is constant (isobaric). $W_{AB} = P\Delta V = R\Delta T = RT_0$.`,
              t`B→C: constant volume, so $W_{BC} = 0$.`,
              t`C→A: isothermal compression at $T_0$ from $2V_0$ to $V_0$: $W_{CA} = RT_0\ln\tfrac{1}{2} = -RT_0\ln 2$.`,
              t`$W_{\text{net}} = RT_0(1 - \ln 2) = 8.314 \times 300 \times 0.307 \approx 765$ J.`,
            ],
            answer: t`Net work by the gas ≈ 765 J per cycle (positive: on P–V axes this cycle runs clockwise).`,
          },
          {
            type: "example",
            title: "JEE Advanced level: straight-line process",
            problem: t`μ moles of a monatomic ideal gas go along a straight line on the P–V diagram from A($3P_0$, $V_0$) to B($P_0$, $3V_0$). (a) Find the maximum temperature reached. (b) Over which part of the path does the gas absorb heat, and how much does it absorb?`,
            steps: [
              t`Line: $P = 4P_0 - \dfrac{P_0}{V_0}V$, so $\mu RT = PV = 4P_0V - \dfrac{P_0}{V_0}V^2$.`,
              t`(a) $\dfrac{d(PV)}{dV} = 4P_0 - \dfrac{2P_0V}{V_0} = 0$ at $V = 2V_0$, where $P = 2P_0$. So $T_{\max} = \dfrac{4P_0V_0}{\mu R}$ (at A and B, $T = \dfrac{3P_0V_0}{\mu R}$).`,
              t`(b) $dQ = \mu C_v\,dT + P\,dV = \tfrac{3}{2}\,d(PV) + P\,dV = \left[\tfrac{3}{2}\left(4P_0 - \tfrac{2P_0V}{V_0}\right) + 4P_0 - \tfrac{P_0V}{V_0}\right]dV = \left(10P_0 - \dfrac{4P_0V}{V_0}\right)dV$.`,
              t`$dQ > 0$ while $V < 2.5V_0$. Heat absorbed $= \displaystyle\int_{V_0}^{2.5V_0}\left(10P_0 - \tfrac{4P_0V}{V_0}\right)dV = 15P_0V_0 - 2P_0V_0(6.25 - 1) = 4.5P_0V_0$.`,
              t`Check: from $2.5V_0$ to $3V_0$ the heat is $5P_0V_0 - 5.5P_0V_0 = -0.5P_0V_0$. Net $= 4P_0V_0 =$ area under AB, and ΔU = 0 because $T_A = T_B$. ✔`,
            ],
            answer: t`(a) $T_{\max} = 4P_0V_0/(\mu R)$ at $V = 2V_0$. (b) The gas absorbs $4.5P_0V_0$ between $V_0$ and $2.5V_0$, and rejects $0.5P_0V_0$ after that. Heat flow reverses at $2.5V_0$, not at the temperature maximum.`,
          },
          {
            type: "mistake",
            wrong: "The gas comes back to its starting state, so the net work done in a cycle is zero.",
            right: "Only state variables (U, P, V, T) return to their values. Net work equals the area enclosed by the loop and is usually not zero.",
            why: "Work is path dependent. The outward path and the return path have different areas under them; their difference is the loop area, which is exactly what an engine delivers.",
          },
          {
            type: "mistake",
            wrong: "Efficiency of a cycle = net work ÷ net heat, or just 1 − T_min/T_max.",
            right: "η = W_net ÷ (heat absorbed only). 1 − T_min/T_max is the Carnot ceiling and applies only to a Carnot cycle.",
            why: "Net heat equals net work over a cycle, so dividing by it always gives 100%. And most exam cycles have isochoric or isobaric steps that exchange heat across finite temperature differences, so they fall below the Carnot value.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A cycle is drawn clockwise on axes with V up and P across. Net work by the gas?",
              emoji: "🔄",
              options: ["Positive", "Negative", "Zero"],
              answer: 1,
              trap: 0,
              explain: "'Clockwise means positive' holds only with P on the vertical axis and V on the horizontal. Swapping the axes reflects the loop, so a clockwise loop on V–P axes is anticlockwise on P–V axes: net work by the gas is negative (it is a refrigerator cycle).",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In some process, the temperature of 2 mol of a monatomic ideal gas rises by 50 K while the gas does 1500 J of work. How much heat (in J) is absorbed? (R = 8.314 J mol⁻¹ K⁻¹)",
                answer: 2747,
                tolerance: 3,
                unit: "J",
                explain: t`$\Delta U = \mu C_v\Delta T = 2 \times 1.5 \times 8.314 \times 50 = 1247$ J for any process. $Q = \Delta U + W = 1247 + 1500 = 2747$ J.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Speed tricks",
            md: t`For an ideal gas write every heat in terms of $\Delta(PV)$: $\mu C_v\Delta T = \dfrac{\Delta(PV)}{\gamma - 1}$, so a monatomic gas gives $\tfrac{3}{2}\Delta(PV)$ at constant V and $\tfrac{5}{2}P\Delta V$ at constant P. This avoids finding each temperature. For any closed loop, find the area first: it is both the net work and the net heat.`,
          },
          {
            type: "keypoints",
            items: [
              "ΔU = μCvΔT for every ideal-gas process; over a full cycle ΔU = 0.",
              "Net work = area of the P–V loop: clockwise positive (engine), anticlockwise negative (refrigerator).",
              "η = W_net / Q_absorbed; the Carnot value 1 − T_min/T_max is only an upper limit.",
              "On a straight-line process, maximise PV for T_max; heat flow reverses where dQ/dV = 0, which is a different point.",
            ],
          },
        ],
        flashcards: [
          { front: "Sign of net work for a loop on a P–V diagram", back: "Clockwise (P up, V across): positive work by the gas, a heat engine. Anticlockwise: negative, a refrigerator." },
          { front: "Line through the origin on a P–T graph", back: "Isochoric process (P ∝ T at constant V)." },
          { front: "Line through the origin on a V–T graph", back: "Isobaric process (V ∝ T at constant P)." },
          { front: "μCvΔT in terms of P and V", back: "μCvΔT = Δ(PV)/(γ − 1); for monatomic gas 1.5 Δ(PV)." },
          { front: "Efficiency of a general cycle", back: "η = W_net / Q_in, where Q_in is the sum of the positive heats only." },
          { front: "Rectangle cycle P₀→2P₀, V₀→2V₀ (monatomic)", back: "W = P₀V₀, Q_in = 6.5P₀V₀, η = 2/13 ≈ 15.4%." },
          { front: "T_max on a straight-line process", back: "Write PV as a function of V and set d(PV)/dV = 0." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A gas is taken clockwise round a closed loop of area 200 J on a P–V diagram. The net heat absorbed by the gas per cycle is:",
            options: ["200 J", "0", "−200 J", "It cannot be found without temperatures"],
            answer: 0,
            explain: "ΔU = 0 over a cycle, so Q_net = W_net = +200 J (clockwise).",
          },
          {
            kind: "numeric",
            q: "A monatomic ideal gas goes round the cycle (P₀, V₀) → (2P₀, V₀) → (2P₀, 3V₀) → (P₀, 3V₀) → (P₀, V₀). Find the efficiency in %.",
            answer: 17.4,
            tolerance: 0.2,
            unit: "%",
            difficulty: 3,
            hint: "Heat is absorbed in the isochoric rise and the isobaric expansion. Use 1.5Δ(PV) and 2.5PΔV.",
            explain: t`W = loop area $= P_0 \times 2V_0 = 2P_0V_0$. Q_in $= 1.5(P_0V_0) + 2.5(2P_0)(2V_0) = 1.5P_0V_0 + 10P_0V_0 = 11.5P_0V_0$. $\eta = 2/11.5 \approx 17.4\%$.`,
          },
          {
            kind: "mcq",
            q: "For a fixed amount of ideal gas, a straight line through the origin on a P–T diagram represents:",
            options: ["an isochoric process", "an isothermal process", "an isobaric process", "an adiabatic process"],
            answer: 0,
            explain: "P = (μR/V)T is a line through the origin only if V is constant.",
          },
          {
            kind: "multi",
            q: "An ideal gas goes from state A to state B with T_A = T_B. Which must be true?",
            options: [
              "ΔU = 0",
              "Heat absorbed equals work done by the gas",
              "The process must be isothermal",
              "The work done may be non-zero",
            ],
            answers: [0, 1, 3],
            difficulty: 2,
            explain: "U depends only on T, so ΔU = 0 and Q = W. The path between A and B can be anything (for example a straight line on which T first rises then falls), so it need not be isothermal.",
          },
          {
            kind: "mcq",
            q: "An inventor claims an engine working between 600 K and 300 K with an efficiency of 55%. The claim is:",
            options: [
              "impossible, since the maximum is 50%",
              "possible, since 55% is less than 100%",
              "possible only with a monatomic working gas",
              "impossible, since no engine can exceed 25%",
            ],
            answer: 0,
            explain: "Carnot limit = 1 − 300/600 = 50%. No engine can beat a Carnot engine between the same temperatures.",
          },
          {
            kind: "numeric",
            q: "One mole of an ideal gas goes along a straight line on a P–V diagram from (2P₀, V₀) to (P₀, 2V₀). Find the maximum temperature in units of P₀V₀/R.",
            answer: 2.25,
            tolerance: 0.01,
            difficulty: 3,
            hint: "Write P as a function of V, then maximise PV.",
            explain: t`$P = 3P_0 - \dfrac{P_0}{V_0}V$, so $PV = 3P_0V - \dfrac{P_0V^2}{V_0}$, maximum at $V = 1.5V_0$, giving $PV = 2.25P_0V_0$. $T_{\max} = 2.25P_0V_0/R$.`,
          },
          {
            kind: "mcq",
            q: "An ideal gas expands from the same initial state to the same final volume, once isothermally and once adiabatically. Which is true?",
            options: [
              "More work is done in the isothermal expansion",
              "More work is done in the adiabatic expansion",
              "Equal work is done in both",
              "It depends on whether the gas is monatomic",
            ],
            answer: 0,
            difficulty: 2,
            explain: "The adiabat falls more steeply, so its pressure is lower at every volume beyond the start and the area under it is smaller.",
          },
          {
            kind: "numeric",
            q: "In a cycle, a gas absorbs 900 J in one step and 600 J in another, and rejects 1200 J in a third step. Find the efficiency in %.",
            answer: 20,
            unit: "%",
            difficulty: 2,
            explain: t`$Q_{\text{in}} = 900 + 600 = 1500$ J, $W = 1500 - 1200 = 300$ J, $\eta = 300/1500 = 20\%$.`,
          },
        ],
      },

      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c11-phy-exam-polytropic",
        title: "Exam edge: Polytropic Processes and Adiabatic Tricks",
        summary:
          "The polytropic process PV^n = constant as one formula for all processes: work, molar heat capacity, negative heat capacity, P ∝ V processes, free expansion and adiabatic bulk modulus.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`JEE Main and JEE Advanced often describe a process by an equation such as $PV^2 = $ constant, $P \propto V$ or $PT = $ constant, then ask for the work, heat or molar heat capacity. All of these are **polytropic processes**, $PV^n = $ constant, and two formulas handle every one of them. KCET and COMEDK use the special cases (isothermal, adiabatic) and the adiabatic bulk modulus.`,
          },
          {
            type: "table",
            headers: ["Value of n", "Process", "Molar heat capacity C"],
            rows: [
              ["0", "isobaric (P constant)", t`$C_p$`],
              ["1", "isothermal (T constant)", "infinite (heat flows with ΔT = 0)"],
              [t`$\gamma$`, "adiabatic (Q = 0)", "0"],
              [t`$\to \infty$`, "isochoric (V constant)", t`$C_v$`],
              ["−1", t`$P \propto V$`, t`$C_v + R/2$`],
              [t`$1 < n < \gamma$`, "gas expands and cools while absorbing heat", "negative"],
            ],
          },
          {
            type: "formula",
            tex: t`W = \frac{P_1V_1 - P_2V_2}{n-1} = \frac{\mu R\,(T_1 - T_2)}{n-1} \qquad C = C_v + \frac{R}{1-n} = \frac{R}{\gamma - 1} - \frac{R}{n - 1}`,
            caption: "Valid for n ≠ 1 (for n = 1 use W = μRT ln(V₂/V₁)). Rewrite PT = constant or similar in the form PV^n = constant first, using PV = μRT.",
          },
          {
            type: "example",
            title: "Derivation: molar heat capacity of a polytropic process",
            problem: t`Show that for $PV^n = $ constant, the molar heat capacity of an ideal gas is $C = C_v + \dfrac{R}{1-n}$.`,
            steps: [
              t`First law for a small step: $dQ = \mu C_v\,dT + P\,dV$, so $C = \dfrac{dQ}{\mu\,dT} = C_v + \dfrac{P\,dV}{\mu\,dT}$.`,
              t`With $P = \mu RT/V$, $PV^n = $ constant becomes $TV^{n-1} = $ constant. Differentiate: $(n-1)\dfrac{dV}{V} + \dfrac{dT}{T} = 0$, so $\dfrac{dV}{dT} = -\dfrac{V}{(n-1)T}$.`,
              t`$\dfrac{P\,dV}{\mu\,dT} = -\dfrac{PV}{\mu(n-1)T} = -\dfrac{R}{n-1} = \dfrac{R}{1-n}$.`,
            ],
            answer: t`$C = C_v + \dfrac{R}{1-n}$. Check: n = 0 gives $C_p$, n = γ gives 0, n → ∞ gives $C_v$.`,
          },
          {
            type: "example",
            title: "JEE Main level: PV² = constant",
            problem: t`One mole of a monatomic ideal gas at 400 K expands from V to 2V along $PV^2 = $ constant. Find the final temperature, the work done by the gas, ΔU and the heat exchanged. ($R = 8.314$ J mol⁻¹ K⁻¹)`,
            steps: [
              t`n = 2, so $TV = $ constant: $T_2 = 400/2 = 200$ K.`,
              t`$W = \dfrac{R(T_1 - T_2)}{n-1} = 8.314 \times 200 = 1662.8$ J.`,
              t`$\Delta U = \tfrac{3}{2}R(T_2 - T_1) = 1.5 \times 8.314 \times (-200) = -2494.2$ J.`,
              t`$Q = \Delta U + W = -831.4$ J. Check: $C = \tfrac{3}{2}R + \dfrac{R}{1-2} = \dfrac{R}{2}$, and $Q = C\Delta T = 4.157 \times (-200) = -831.4$ J. ✔`,
            ],
            answer: "T falls to 200 K; W ≈ 1663 J; ΔU ≈ −2494 J; the gas gives out about 831 J of heat even though it expands.",
          },
          {
            type: "example",
            title: "JEE Main level: P ∝ V",
            problem: t`A diatomic ideal gas (rigid molecules) is heated so that its pressure rises in proportion to its volume. What fraction of the heat supplied is used to do work?`,
            steps: [
              t`$P \propto V$ means $PV^{-1} = $ constant, so n = −1.`,
              t`$C = C_v + \dfrac{R}{1-(-1)} = \dfrac{5R}{2} + \dfrac{R}{2} = 3R$.`,
              t`$W = \dfrac{\mu R(T_1 - T_2)}{n - 1} = \dfrac{\mu R\,\Delta T}{2}$, and $Q = 3\mu R\,\Delta T$.`,
              t`$\dfrac{W}{Q} = \dfrac{1/2}{3} = \dfrac{1}{6}$.`,
            ],
            answer: t`One-sixth of the heat becomes work; the other five-sixths raise the internal energy.`,
          },
          {
            type: "text",
            md: t`**Free expansion.** A gas in one half of an insulated, rigid box rushes into the vacuum in the other half when the partition breaks. No heat enters (insulated) and no work is done (nothing is pushed back), so ΔU = 0, and for an ideal gas T is unchanged. It is adiabatic in the sense that Q = 0, but it is **not quasi-static**, so $PV^{\gamma} = $ constant does **not** apply. Only the start and end states are equilibrium states.

**Bulk modulus.** For slow (isothermal) compression $B = P$; for fast (adiabatic) compression $B = \gamma P$. Sound waves are adiabatic, which is why Laplace's speed of sound uses $\sqrt{\gamma P/\rho}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: free expansion, then adiabatic compression",
            problem: t`A monatomic ideal gas at $T_0 = 300$ K fills one half of an insulated box of total volume 2V. The partition is removed and the gas fills the box. A tight, insulated piston then pushes the gas slowly back to volume V. Find the final temperature.`,
            steps: [
              t`Free expansion: Q = 0, W = 0, so ΔU = 0 and the temperature stays $T_0$; volume becomes 2V.`,
              t`Slow compression with no heat flow is a quasi-static adiabatic process: $TV^{\gamma - 1} = $ constant with $\gamma - 1 = 2/3$.`,
              t`$T_f = T_0\left(\dfrac{2V}{V}\right)^{2/3} = 300 \times 2^{2/3} = 300 \times 1.587 \approx 476$ K.`,
            ],
            answer: t`About 476 K. The gas is back at volume V but hotter than at the start: the free expansion was irreversible, and the work done on the gas in compression stays as extra internal energy.`,
          },
          {
            type: "mistake",
            wrong: "If heat is given to a gas, its temperature must rise.",
            right: "For a polytropic process with 1 < n < γ, the molar heat capacity is negative: the gas absorbs heat and still cools, because it does more work than the heat it takes in.",
            why: "From everyday heating at constant volume or pressure, 'heat in means hotter' feels like a rule. But ΔU = Q − W, and if W > Q the internal energy falls.",
          },
          {
            type: "mistake",
            wrong: "Free expansion is adiabatic, so apply PV^γ = constant to find the final temperature.",
            right: "PV^γ = constant holds only for quasi-static adiabatic processes. In free expansion of an ideal gas, T stays the same, so P₁V₁ = P₂V₂.",
            why: "The word 'adiabatic' only says Q = 0. The PV^γ law was derived assuming W = ∫P dV through equilibrium states, which is false when the gas pushes into vacuum (W = 0).",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the process equation with its polytropic index n.",
              pairs: [
                ["P = constant", "n = 0"],
                ["PV = constant", "n = 1"],
                ["P ∝ V", "n = −1"],
                ["T ∝ 1/V (ideal gas)", "n = 2"],
                ["PT = constant (ideal gas)", "n = 1/2"],
              ],
              explain: "Use PV = μRT to turn the given rule into PV^n = constant. For example PT = constant gives P·PV = constant, so P²V = constant, that is PV^(1/2) = constant.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the molar heat capacity, in units of R, of a monatomic ideal gas taken through PV³ = constant.",
                answer: 1,
                tolerance: 0.01,
                explain: t`$C = \tfrac{3}{2}R + \dfrac{R}{1-3} = 1.5R - 0.5R = R$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcut is safe",
            md: t`Use the polytropic formulas only for a quasi-static process of an ideal gas with a **single** n throughout. If the path changes shape (a cycle, a broken line), split it and apply them piece by piece. For n = 1 the formula for W divides by zero: use $\mu RT\ln(V_2/V_1)$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Polytropic: $PV^n = $ const, $W = \mu R(T_1-T_2)/(n-1)$, $C = C_v + R/(1-n)$.`,
              "n = 0, 1, γ, ∞ give isobaric, isothermal, adiabatic, isochoric; P ∝ V is n = −1.",
              "For 1 < n < γ the heat capacity is negative: heat in, temperature down.",
              "Free expansion: Q = 0, W = 0, ΔU = 0, T unchanged for an ideal gas; not quasi-static, so no PV^γ.",
              "Isothermal bulk modulus = P; adiabatic bulk modulus = γP.",
            ],
          },
        ],
        flashcards: [
          { front: "Polytropic process", back: "PV^n = constant; n = 0 isobaric, 1 isothermal, γ adiabatic, ∞ isochoric." },
          { front: "Work in a polytropic process (n ≠ 1)", back: "W = (P₁V₁ − P₂V₂)/(n − 1) = μR(T₁ − T₂)/(n − 1)." },
          { front: "Molar heat capacity in PV^n = constant", back: "C = Cv + R/(1 − n)." },
          { front: "Molar heat capacity when P ∝ V", back: "C = Cv + R/2 (n = −1); for a rigid diatomic gas, 3R." },
          { front: "When is the molar heat capacity negative?", back: "For 1 < n < γ: the gas absorbs heat but cools on expansion." },
          { front: "Free expansion of an ideal gas", back: "Q = 0, W = 0, ΔU = 0, T unchanged. Irreversible, not quasi-static." },
          { front: "Adiabatic vs isothermal bulk modulus", back: "B_adiabatic = γP, B_isothermal = P." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For an ideal gas with γ = 5/3, the molar heat capacity of the process PV^n = constant is negative when:",
            options: ["1 < n < 5/3", "n < 1", "n > 5/3", "n = 0"],
            answer: 0,
            difficulty: 2,
            explain: t`$C = \tfrac{3}{2}R + \dfrac{R}{1-n}$ is negative when $\dfrac{1}{n-1} > \tfrac{3}{2}$, that is $1 < n < \tfrac{5}{3}$.`,
          },
          {
            kind: "numeric",
            q: "2 mol of an ideal gas is heated from 300 K to 400 K in a process with P ∝ V. Find the work done by the gas in joules. (R = 8.314 J mol⁻¹ K⁻¹)",
            answer: 831.4,
            tolerance: 2,
            unit: "J",
            difficulty: 2,
            hint: "P ∝ V means n = −1.",
            explain: t`$W = \dfrac{\mu R(T_1 - T_2)}{n-1} = \dfrac{2 \times 8.314 \times (300 - 400)}{-2} = 831.4$ J.`,
          },
          {
            kind: "truefalse",
            q: "In the free expansion of an ideal gas into vacuum inside an insulated container, the temperature of the gas does not change.",
            answer: true,
            explain: "Q = 0 and W = 0, so ΔU = 0; for an ideal gas U depends only on T.",
          },
          {
            kind: "multi",
            q: "A rigid diatomic ideal gas (γ = 1.4) expands along PV^1.2 = constant. Which statements are true?",
            options: [
              "The gas absorbs heat",
              "The temperature of the gas falls",
              "The work done by the gas is less than the heat absorbed",
              "The internal energy of the gas decreases",
            ],
            answers: [0, 1, 3],
            difficulty: 3,
            hint: "Find C from Cv + R/(1 − n), and the sign of ΔT from TV^(n−1) = constant.",
            explain: t`$TV^{0.2} = $ const, so T falls on expansion. $C = 2.5R + R/(-0.2) = -2.5R$, so $Q = \mu C\Delta T > 0$ (heat absorbed). $W = \mu R|\Delta T|/0.2 = 5\mu R|\Delta T|$, which is more than $Q = 2.5\mu R|\Delta T|$, so ΔU < 0.`,
          },
          {
            kind: "mcq",
            q: "The ratio of the adiabatic bulk modulus to the isothermal bulk modulus of an ideal gas at the same state is:",
            options: ["γ", "1/γ", "1", "γ − 1"],
            answer: 0,
            explain: "B_adiabatic = γP and B_isothermal = P.",
          },
          {
            kind: "numeric",
            q: "A rigid diatomic ideal gas (γ = 1.4) is compressed adiabatically to 1/32 of its volume. By what factor does its pressure increase?",
            answer: 128,
            unit: "times",
            difficulty: 2,
            explain: t`$P_2/P_1 = 32^{1.4} = 32 \times 32^{0.4} = 32 \times 4 = 128$.`,
          },
          {
            kind: "mcq",
            q: "An ideal gas expands from the same initial state to the same final volume by three paths: isobaric, isothermal, adiabatic. The work done is in the order:",
            options: [
              "isobaric > isothermal > adiabatic",
              "adiabatic > isothermal > isobaric",
              "isothermal > isobaric > adiabatic",
              "all equal",
            ],
            answer: 0,
            difficulty: 2,
            explain: "On expansion the isobar stays highest, the isotherm falls, and the adiabat falls fastest, so the areas under them are in that order.",
          },
          {
            kind: "numeric",
            q: "A monatomic ideal gas follows PT = constant. Find its molar heat capacity in units of R.",
            answer: 3.5,
            tolerance: 0.01,
            difficulty: 3,
            hint: "PT = constant with T ∝ PV gives P²V = constant. Find n.",
            explain: t`$P^2V = $ const means $PV^{1/2} = $ const, n = 1/2. $C = 1.5R + \dfrac{R}{1 - 0.5} = 1.5R + 2R = 3.5R$.`,
          },
        ],
      },
    ],
  },
  /* @@KINETIC@@ */
];

export const links: Record<string, string | string[]> = {
  "11:Thermodynamics": "c11-phy-thermodynamics",
  "11:Heat and Thermodynamics": ["c11-phy-thermodynamics"],
};
