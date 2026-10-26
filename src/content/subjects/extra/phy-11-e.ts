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
  /* ------------------------------------------------------------------ */
  /* Kinetic Theory (NCERT / Karnataka PUC)                               */
  /* = Behaviour of Perfect Gases and Kinetic Theory of Gases (ISC)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-kinetic-theory",
    title: "Kinetic Theory",
    icon: "🎈",
    description:
      "Molecular nature of matter, the ideal gas equation, the kinetic theory derivation of gas pressure, kinetic interpretation of temperature, rms speed, equipartition of energy, specific heats of gases and solids, and mean free path.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-phy-ideal-gas-pressure",
        title: "Molecular Nature of Matter, Ideal Gas and Pressure of a Gas",
        summary:
          "Atoms and Avogadro's law, the ideal gas equation PV = μRT = Nk_BT, Dalton's law of partial pressures, the assumptions of kinetic theory and the derivation of P = ⅓nm⟨v²⟩.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎈",
            caption:
              "A balloon stays inflated because about 10²³ air molecules inside strike every square centimetre of its skin every second, each one bouncing back and giving the rubber a tiny push.",
          },
          {
            type: "text",
            md: t`**Kinetic theory** explains the behaviour of gases from the motion of their molecules. It rests on the atomic picture of matter: Dalton's atomic theory, Gay-Lussac's law of combining volumes, and **Avogadro's law**: equal volumes of all gases at the same temperature and pressure contain the same number of molecules. One mole contains $N_A = 6.02\times10^{23}$ molecules, and at STP (273 K, 1 atm) one mole of any gas occupies about 22.4 L.

In a gas, molecules are far apart compared with their size (in air at room conditions the spacing is roughly ten molecular diameters), and they interact only during brief collisions. This is why gases are easy to compress and why kinetic theory works best for them.`,
          },
          {
            type: "text",
            md: t`At low pressure and high temperature, all gases obey the same laws. **Boyle's law**: at constant T, $PV$ is constant. **Charles' law**: at constant P, $V \propto T$. Combined with Avogadro's law, these give the **ideal gas equation**. A gas that obeys it exactly at all P and T is an **ideal gas**. Real gases come close to ideal behaviour at low pressure and high temperature, when the molecules are far apart and their attractions matter little.`,
          },
          {
            type: "formula",
            tex: t`PV = \mu RT = N k_B T \qquad \mu = \frac{N}{N_A} = \frac{M_{\text{sample}}}{M_0} \qquad k_B = \frac{R}{N_A}`,
            caption: "R = 8.314 J mol⁻¹ K⁻¹, N_A = 6.02 × 10²³ mol⁻¹, Boltzmann constant k_B = 1.38 × 10⁻²³ J K⁻¹. M₀ is the molar mass. In terms of number density n = N/V: P = n k_B T.",
          },
          {
            type: "text",
            md: t`**Dalton's law of partial pressures.** In a mixture of ideal gases that do not react, each gas behaves as if it were alone in the container. The total pressure is the sum of the partial pressures: $P = P_1 + P_2 + \dots = (\mu_1 + \mu_2 + \dots)\dfrac{RT}{V}$. So the partial pressure of each gas is proportional to its number of moles.`,
          },
          {
            type: "example",
            title: "How many molecules in a cubic centimetre?",
            problem: t`Find the number of molecules in 1 cm³ of an ideal gas at STP ($P = 1.013\times10^5$ Pa, $T = 273$ K, $k_B = 1.38\times10^{-23}$ J K⁻¹).`,
            steps: [
              t`$n = \dfrac{P}{k_BT} = \dfrac{1.013\times10^5}{1.38\times10^{-23}\times273}$.`,
              t`Denominator $= 3.767\times10^{-21}$, so $n \approx 2.69\times10^{25}$ m⁻³.`,
              t`1 cm³ $= 10^{-6}$ m³, so the number is $2.69\times10^{25}\times10^{-6} = 2.69\times10^{19}$.`,
            ],
            answer: t`About $2.7\times10^{19}$ molecules per cm³, the same for every gas at STP (this is called Loschmidt's number).`,
          },
          {
            type: "list",
            items: [
              "A gas is made of a very large number of identical molecules in constant random motion.",
              "The size of a molecule is negligible compared with the space between molecules.",
              "Molecules exert no forces on each other or on the walls except during collisions.",
              "All collisions (between molecules and with the walls) are elastic, and a collision lasts a negligibly short time.",
              "Between collisions a molecule moves in a straight line with constant velocity; gravity is neglected.",
              "In equilibrium the molecules are spread uniformly and no direction of motion is preferred.",
            ],
          },
          {
            type: "example",
            title: "Derivation: pressure of an ideal gas",
            problem: t`Using the assumptions above, show that the pressure of a gas with n molecules per unit volume, each of mass m, is $P = \tfrac{1}{3}nm\langle v^2\rangle$.`,
            steps: [
              t`Take a wall of area A perpendicular to the x-axis. A molecule with velocity $(v_x, v_y, v_z)$ hits it elastically and rebounds with $(-v_x, v_y, v_z)$. Its momentum changes by $-2mv_x$, so it gives the wall momentum $2mv_x$.`,
              t`In time Δt, molecules within a distance $v_x\Delta t$ of the wall can reach it, that is those in a volume $Av_x\Delta t$. Only half of them move towards the wall, so the number of hits is $\tfrac{1}{2}nAv_x\Delta t$.`,
              t`Momentum given to the wall: $Q = (2mv_x)(\tfrac{1}{2}nAv_x\Delta t) = nmv_x^2A\Delta t$. Pressure = force per area $= \dfrac{Q}{A\Delta t} = nmv_x^2$.`,
              t`Molecules have different speeds, so use the average: $P = nm\langle v_x^2\rangle$.`,
              t`No direction is special, so $\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \tfrac{1}{3}\langle v^2\rangle$, giving $P = \tfrac{1}{3}nm\langle v^2\rangle$.`,
            ],
            answer: t`$P = \tfrac{1}{3}nm\langle v^2\rangle = \tfrac{1}{3}\rho\langle v^2\rangle$, where $\rho = nm$ is the density. Collisions between molecules do not change this result, because in equilibrium they do not change the overall distribution of velocities.`,
          },
          {
            type: "formula",
            tex: t`P = \frac{1}{3}\,n m \langle v^2\rangle = \frac{1}{3}\rho \langle v^2\rangle \qquad PV = \frac{2}{3}\,E_{\text{tr}}`,
            caption: "E_tr = N × ½m⟨v²⟩ is the total translational kinetic energy of the gas: pressure is two-thirds of the translational kinetic energy per unit volume.",
          },
          {
            type: "example",
            title: "Pressure from density and speed",
            problem: t`A gas has density 1.2 kg/m³ and the mean of the squares of its molecular speeds is $\langle v^2\rangle = (500\text{ m/s})^2$. Find its pressure.`,
            steps: [
              t`$P = \tfrac{1}{3}\rho\langle v^2\rangle = \tfrac{1}{3}\times1.2\times500^2$.`,
              t`$= 0.4\times2.5\times10^5 = 1.0\times10^5$ Pa.`,
            ],
            answer: "P = 1.0 × 10⁵ Pa, close to atmospheric pressure, as for air at room temperature.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "At a fixed temperature, the number of molecules per unit volume of a gas is doubled. The pressure:",
                options: ["doubles", "stays the same", "halves", "becomes four times"],
                answer: 0,
                explain: t`$P = \tfrac{1}{3}nm\langle v^2\rangle$; at fixed T, $\langle v^2\rangle$ is fixed, so P ∝ n.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Gas pressure is caused by molecules colliding with one another.",
            right: "Pressure comes from molecules hitting the walls and transferring momentum to them. Collisions between molecules only share out momentum inside the gas.",
            why: "We picture molecules crowding and jostling, so the 'pushing against each other' idea feels natural. But the derivation counts only the momentum given to the wall; intermolecular collisions conserve momentum and leave the velocity distribution unchanged in equilibrium.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps of the pressure derivation.",
              items: [
                "One molecule rebounds from the wall, giving it momentum 2mvₓ",
                "Count hits in time Δt: ½ n A vₓ Δt molecules",
                "Momentum per unit time per unit area gives P = n m vₓ²",
                "Average over all molecules: P = n m ⟨vₓ²⟩",
                "Isotropy, ⟨vₓ²⟩ = ⟨v²⟩/3, gives P = ⅓ n m ⟨v²⟩",
              ],
              explain: "Think one molecule, then how many hit, then the force per area, then the average, then the 3-D symmetry. The factor ⅓ comes only from the last step.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips and ISC note",
            md: t`The pressure derivation is a standard 5-mark board question: draw the cube, say why the momentum change is $2mv_x$, explain the factor ½ and the factor ⅓. **ISC** (and some PUC papers) also ask you to *deduce gas laws* from $PV = \tfrac{1}{3}Nm\langle v^2\rangle$ with $\tfrac{1}{2}m\langle v^2\rangle \propto T$: at constant T, PV is constant (Boyle); at constant P, V ∝ T (Charles); equal volumes at the same P and T have equal N (Avogadro); and at the same pressure the rms speed varies as $1/\sqrt{\rho}$ (Graham's law of diffusion).`,
          },
          {
            type: "keypoints",
            items: [
              t`Ideal gas: $PV = \mu RT = Nk_BT$, or $P = nk_BT$; real gases approach it at low P and high T.`,
              "Dalton's law: total pressure = sum of partial pressures of non-reacting gases.",
              t`Kinetic theory gives $P = \tfrac{1}{3}nm\langle v^2\rangle = \tfrac{1}{3}\rho\langle v^2\rangle$.`,
              t`$PV = \tfrac{2}{3}E_{\text{tr}}$: pressure is ⅔ of the translational kinetic energy per unit volume.`,
            ],
          },
        ],
        flashcards: [
          { front: "Avogadro's law", back: "Equal volumes of all gases at the same temperature and pressure contain the same number of molecules." },
          { front: "Ideal gas equation in two forms", back: "PV = μRT = Nk_BT (or P = nk_BT with n = N/V)." },
          { front: "Boltzmann constant", back: "k_B = R/N_A = 1.38 × 10⁻²³ J K⁻¹." },
          { front: "Dalton's law of partial pressures", back: "Total pressure of a mixture of non-reacting ideal gases = sum of the partial pressures, P = (μ₁ + μ₂ + …)RT/V." },
          { front: "Pressure from kinetic theory", back: "P = ⅓ n m ⟨v²⟩ = ⅓ ρ ⟨v²⟩." },
          { front: "Why the factor ⅓?", back: "Random motion has no preferred direction, so ⟨vₓ²⟩ = ⟨v²⟩/3." },
          { front: "When do real gases behave ideally?", back: "At low pressure and high temperature." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many moles of an ideal gas occupy 24.9 L at 1.0 × 10⁵ Pa and 300 K? (R = 8.314 J mol⁻¹ K⁻¹)",
            answer: 1,
            tolerance: 0.01,
            unit: "mol",
            explain: t`$\mu = \dfrac{PV}{RT} = \dfrac{10^5\times24.9\times10^{-3}}{8.314\times300} = \dfrac{2490}{2494} \approx 1.0$ mol.`,
          },
          {
            kind: "truefalse",
            q: "The pressure of a gas is caused mainly by molecules colliding with one another.",
            answer: false,
            explain: "Pressure is the momentum delivered per unit time per unit area to the walls.",
          },
          {
            kind: "numeric",
            q: "A gas at 1.0 × 10⁵ Pa has density 0.09 kg/m³. Find the rms speed of its molecules in m/s.",
            answer: 1826,
            tolerance: 5,
            unit: "m/s",
            difficulty: 2,
            hint: "Rearrange P = ⅓ρ⟨v²⟩.",
            explain: t`$v_{\text{rms}} = \sqrt{3P/\rho} = \sqrt{3\times10^5/0.09} = \sqrt{3.33\times10^6} \approx 1826$ m/s.`,
          },
          {
            kind: "mcq",
            q: "A container holds 2 mol of N₂ and 3 mol of O₂ at a total pressure of 5 atm. The partial pressure of O₂ is:",
            options: ["3 atm", "2 atm", "5 atm", "2.5 atm"],
            answer: 0,
            explain: "Partial pressure ∝ moles: (3/5) × 5 atm = 3 atm.",
          },
          {
            kind: "multi",
            q: "Which are assumptions of the kinetic theory of an ideal gas?",
            options: [
              "Collisions are elastic",
              "Molecules attract each other strongly between collisions",
              "The size of molecules is negligible compared with their separation",
              "Molecules move randomly with no preferred direction",
            ],
            answers: [0, 2, 3],
            explain: "Kinetic theory assumes no forces between molecules except during collisions.",
          },
          {
            kind: "fill",
            q: "In the equation PV = Nk_BT, k_B is called the ___ constant.",
            answer: ["Boltzmann", "Boltzmann's"],
            explain: "k_B = R/N_A = 1.38 × 10⁻²³ J K⁻¹ is the Boltzmann constant.",
          },
          {
            kind: "mcq",
            q: "A real gas behaves most like an ideal gas at:",
            options: ["low pressure and high temperature", "high pressure and low temperature", "high pressure and high temperature", "low pressure and low temperature"],
            answer: 0,
            explain: "Then the molecules are far apart (small size effect) and move fast (attractions matter little).",
          },
          {
            kind: "numeric",
            q: "For an ideal gas, PV = (2/3)E_tr. If a gas in a 2 m³ container is at 1.5 × 10⁵ Pa, find its total translational kinetic energy in kJ.",
            answer: 450,
            unit: "kJ",
            difficulty: 2,
            explain: t`$E_{\text{tr}} = \tfrac{3}{2}PV = 1.5\times1.5\times10^5\times2 = 4.5\times10^5$ J = 450 kJ.`,
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-phy-temperature-equipartition",
        title: "Kinetic Temperature, Equipartition, Specific Heats and Mean Free Path",
        summary:
          "Average kinetic energy and temperature, rms speed, degrees of freedom and the law of equipartition, molar specific heats of gases, solids and water, and the mean free path of gas molecules.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Compare $PV = \tfrac{2}{3}E_{\text{tr}}$ from kinetic theory with $PV = Nk_BT$. They agree only if $E_{\text{tr}} = \tfrac{3}{2}Nk_BT$, so the average translational kinetic energy of one molecule is $\tfrac{3}{2}k_BT$.

This is the **kinetic interpretation of temperature**: the absolute temperature of a gas is a measure of the average kinetic energy of its molecules. It does not depend on pressure, volume or the kind of gas. At the same temperature, a heavy argon atom and a light helium atom have the same average translational kinetic energy, so the lighter atom must move faster.`,
          },
          {
            type: "formula",
            tex: t`\left\langle \tfrac{1}{2}mv^2 \right\rangle = \frac{3}{2}k_BT \qquad v_{\text{rms}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M_0}} = \sqrt{\frac{3P}{\rho}}`,
            caption: "m = mass of one molecule, M₀ = molar mass in kg/mol. v_rms ∝ √T and ∝ 1/√M₀.",
          },
          {
            type: "example",
            title: "Speed of oxygen molecules in a room",
            problem: t`Find the average translational kinetic energy of a molecule and the rms speed of oxygen molecules ($M_0 = 0.032$ kg/mol) at 27 °C. ($k_B = 1.38\times10^{-23}$ J K⁻¹, $R = 8.314$ J mol⁻¹ K⁻¹)`,
            steps: [
              t`$T = 300$ K. $\langle KE\rangle = \tfrac{3}{2}k_BT = 1.5\times1.38\times10^{-23}\times300 = 6.21\times10^{-21}$ J.`,
              t`$v_{\text{rms}} = \sqrt{\dfrac{3RT}{M_0}} = \sqrt{\dfrac{3\times8.314\times300}{0.032}} = \sqrt{2.34\times10^5}$.`,
              t`$v_{\text{rms}} \approx 484$ m/s.`,
            ],
            answer: t`$6.21\times10^{-21}$ J per molecule (the same for every gas at 300 K) and $v_{\text{rms}} \approx 484$ m/s for O₂, faster than sound in air.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "At the same temperature, how many times the rms speed of oxygen (M = 32 g/mol) is the rms speed of hydrogen (M = 2 g/mol)?",
                answer: 4,
                explain: t`$v_{\text{rms}} \propto 1/\sqrt{M}$: $\sqrt{32/2} = \sqrt{16} = 4$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`The **degrees of freedom** of a molecule are the independent ways in which it can move (and store energy). A monatomic molecule (He, Ne, Ar) has only **3 translational** degrees of freedom. A rigid diatomic molecule (O₂, N₂ at room temperature) has 3 translational and **2 rotational** degrees of freedom; rotation about the line joining the atoms does not count, because the moment of inertia about it is negligible. At high temperatures a diatomic molecule also **vibrates** along its axis, and this mode stores energy in two forms, kinetic and potential.

**Law of equipartition of energy:** in thermal equilibrium at temperature T, each quadratic term in the energy of a molecule (each translational or rotational degree of freedom) has an average energy of $\tfrac{1}{2}k_BT$. Each vibrational mode contributes $2\times\tfrac{1}{2}k_BT = k_BT$, because it has both kinetic and potential energy.`,
          },
          {
            type: "example",
            title: "Derivation: specific heats of a rigid diatomic gas",
            problem: t`Use the law of equipartition to find $C_v$, $C_p$ and γ for a diatomic ideal gas whose molecules do not vibrate.`,
            steps: [
              t`Energy per molecule: 3 translational + 2 rotational terms, each $\tfrac{1}{2}k_BT$: total $\tfrac{5}{2}k_BT$.`,
              t`Per mole: $U = \tfrac{5}{2}k_BTN_A = \tfrac{5}{2}RT$.`,
              t`$C_v = \dfrac{dU}{dT} = \tfrac{5}{2}R$; $C_p = C_v + R = \tfrac{7}{2}R$.`,
              t`$\gamma = \dfrac{C_p}{C_v} = \dfrac{7}{5} = 1.4$.`,
            ],
            answer: t`$C_v = \tfrac{5}{2}R \approx 20.8$ J mol⁻¹ K⁻¹, $C_p = \tfrac{7}{2}R$, $\gamma = 1.4$, which matches measured values for air, N₂ and O₂ at room temperature.`,
          },
          {
            type: "table",
            headers: ["Gas", "Energy terms per molecule", "Cv", "Cp", "γ = Cp/Cv"],
            rows: [
              ["Monatomic (He, Ar)", "3 translational", t`$\tfrac{3}{2}R$`, t`$\tfrac{5}{2}R$`, t`$\tfrac{5}{3} \approx 1.67$`],
              ["Rigid diatomic (O₂, N₂)", "3 tr + 2 rot", t`$\tfrac{5}{2}R$`, t`$\tfrac{7}{2}R$`, t`$\tfrac{7}{5} = 1.40$`],
              ["Diatomic with vibration", "3 tr + 2 rot + 1 vib (counts twice)", t`$\tfrac{7}{2}R$`, t`$\tfrac{9}{2}R$`, t`$\tfrac{9}{7} \approx 1.29$`],
              ["Polyatomic, f vibrational modes", "3 tr + 3 rot + f vib", t`$(3 + f)R$`, t`$(4 + f)R$`, t`$\dfrac{4+f}{3+f}$`],
            ],
          },
          {
            type: "text",
            md: t`**Solids.** Each atom of a solid vibrates about a fixed point in 3 directions, and each vibration has kinetic and potential energy, so the average energy per atom is $3k_BT$. Per mole $U = 3RT$ and $C = 3R$ (about 25 J mol⁻¹ K⁻¹); this is the **Dulong and Petit law**. For a solid, $C_p \approx C_v$ since its expansion is tiny.

**Water.** Treating each of the three atoms of a water molecule like an atom in a solid gives $C \approx 9R \approx 75$ J mol⁻¹ K⁻¹, close to the measured value.

**Limits.** At low temperatures measured specific heats fall below these values, and the vibrational modes "switch off". Classical equipartition cannot explain this; quantum theory does.`,
          },
          {
            type: "text",
            md: t`Molecules in air move at hundreds of metres per second, yet a smell takes a while to cross a room, because each molecule keeps colliding and changing direction. The average distance a molecule travels between two collisions is its **mean free path** l.

A molecule of diameter d collides with every molecule whose centre lies within a distance d of its path. In time Δt it sweeps out a cylinder of volume $\pi d^2\langle v\rangle\Delta t$ and makes $n\pi d^2\langle v\rangle\Delta t$ collisions, so $l = \dfrac{1}{n\pi d^2}$. Taking into account that the other molecules also move adds a factor $\sqrt2$.`,
          },
          {
            type: "formula",
            tex: t`l = \frac{1}{\sqrt{2}\,n\pi d^2} = \frac{k_BT}{\sqrt{2}\,\pi d^2 P}`,
            caption: "n = number of molecules per unit volume, d = molecular diameter. l depends only on n and d; at fixed pressure it grows with T, at fixed n it does not depend on T.",
          },
          {
            type: "example",
            title: "Mean free path of nitrogen at STP",
            problem: t`Estimate the mean free path of N₂ molecules at STP, where $n = 2.69\times10^{25}$ m⁻³. Take the molecular diameter $d = 3.0\times10^{-10}$ m. Compare it with the average spacing between molecules.`,
            steps: [
              t`$\pi d^2 = 3.1416\times9.0\times10^{-20} = 2.83\times10^{-19}$ m².`,
              t`$\sqrt2\,n\pi d^2 = 1.414\times2.69\times10^{25}\times2.83\times10^{-19} \approx 1.08\times10^{7}$ m⁻¹.`,
              t`$l \approx \dfrac{1}{1.08\times10^7} \approx 9.3\times10^{-8}$ m (about 93 nm).`,
              t`Average spacing $\approx n^{-1/3} = (2.69\times10^{25})^{-1/3} \approx 3.3\times10^{-9}$ m.`,
            ],
            answer: t`$l \approx 9\times10^{-8}$ m: about 300 molecular diameters and nearly 30 times the average spacing between molecules.`,
          },
          {
            type: "mistake",
            wrong: "At the same temperature, all gases have the same rms speed.",
            right: "At the same temperature, all gases have the same average translational kinetic energy per molecule, (3/2)k_BT. The rms speed is √(3RT/M₀), so lighter molecules move faster.",
            why: "'Temperature measures molecular motion' is easily heard as 'temperature fixes the speed'. It fixes the energy ½mv², so a smaller m needs a larger v.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each gas model with its value of γ.",
              pairs: [
                ["Monatomic (He)", "5/3"],
                ["Rigid diatomic (N₂)", "7/5"],
                ["Diatomic with vibration", "9/7"],
                ["Rigid non-linear polyatomic (NH₃)", "4/3"],
              ],
              explain: "For a gas with f energy terms per molecule, Cv = fR/2 and γ = 1 + 2/f: f = 3, 5, 7 and 6 give 5/3, 7/5, 9/7 and 4/3.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Average translational KE per molecule $= \tfrac{3}{2}k_BT$: temperature measures molecular kinetic energy.`,
              t`$v_{\text{rms}} = \sqrt{3RT/M_0}$; at the same T lighter gases move faster.`,
              "Equipartition: ½k_BT per translational or rotational term; k_BT per vibrational mode.",
              "Cv: monatomic 3R/2, rigid diatomic 5R/2, solids 3R (Dulong–Petit), water ≈ 9R.",
              t`Mean free path $l = 1/(\sqrt2\,n\pi d^2)$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Average translational KE of a gas molecule", back: "(3/2)k_BT, independent of the kind of gas, its pressure or volume." },
          { front: "rms speed formula", back: "v_rms = √(3k_BT/m) = √(3RT/M₀) = √(3P/ρ)." },
          { front: "Law of equipartition of energy", back: "In equilibrium, each quadratic energy term (translational or rotational) has average energy ½k_BT; a vibrational mode gets k_BT." },
          { front: "Degrees of freedom of a rigid diatomic molecule", back: "5: three translational and two rotational." },
          { front: "γ from energy terms f", back: "Cv = fR/2, Cp = (f/2 + 1)R, γ = 1 + 2/f." },
          { front: "Dulong and Petit law", back: "Molar specific heat of a solid ≈ 3R ≈ 25 J mol⁻¹ K⁻¹." },
          { front: "Mean free path", back: "l = 1/(√2 n π d²) = k_BT/(√2 π d² P)." },
          { front: "Why do measured specific heats fall at low T?", back: "Vibrational (and some rotational) modes stop taking energy; this is a quantum effect that classical equipartition cannot explain." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the average translational kinetic energy of a gas molecule at 27 °C, in units of 10⁻²¹ J. (k_B = 1.38 × 10⁻²³ J K⁻¹)",
            answer: 6.21,
            tolerance: 0.02,
            explain: t`$\tfrac{3}{2}k_BT = 1.5\times1.38\times10^{-23}\times300 = 6.21\times10^{-21}$ J.`,
          },
          {
            kind: "mcq",
            q: "A gas is at 300 K. At what temperature will the rms speed of its molecules be doubled?",
            options: ["1200 K", "600 K", "424 K", "900 K"],
            answer: 0,
            explain: "v_rms ∝ √T, so doubling v_rms needs 4 × 300 = 1200 K. 600 K would raise it only √2 times.",
          },
          {
            kind: "numeric",
            q: "Using equipartition, find γ for a diatomic gas whose molecules do not vibrate.",
            answer: 1.4,
            tolerance: 0.01,
            explain: "Cv = 5R/2, Cp = 7R/2, γ = 7/5 = 1.4.",
          },
          {
            kind: "mcq",
            q: "For a rigid non-linear polyatomic gas such as NH₃ (vibrations ignored), the molar specific heat at constant volume is:",
            options: ["3R", "5R/2", "3R/2", "7R/2"],
            answer: 0,
            difficulty: 2,
            explain: "3 translational + 3 rotational terms: U = 3RT per mole, so Cv = 3R (and γ = 4/3).",
          },
          {
            kind: "truefalse",
            q: "In a sealed rigid container, the mean free path of the gas molecules does not change when the gas is heated.",
            answer: true,
            difficulty: 2,
            explain: "l = 1/(√2 n π d²) depends on n and d. In a sealed rigid container n is fixed, so l is unchanged (the molecules just collide more often).",
          },
          {
            kind: "multi",
            q: "Select all correct statements.",
            options: [
              "Each rotational degree of freedom has average energy ½k_BT.",
              "A vibrational mode of a diatomic molecule contributes k_BT on average.",
              "The molar specific heat of most solids at room temperature is about 3R.",
              "A monatomic gas has 5 degrees of freedom.",
            ],
            answers: [0, 1, 2],
            explain: "A monatomic gas has only 3 (translational) degrees of freedom.",
          },
          {
            kind: "numeric",
            q: "At constant temperature, the pressure of a gas is doubled. By what factor does the mean free path change?",
            answer: 0.5,
            tolerance: 0.01,
            explain: "At constant T, n ∝ P, so l = 1/(√2 n π d²) halves.",
          },
          {
            kind: "numeric",
            q: "Find the internal energy, in joules, of 2 mol of a rigid diatomic ideal gas at 300 K. (R = 8.314 J mol⁻¹ K⁻¹)",
            answer: 12471,
            tolerance: 10,
            unit: "J",
            difficulty: 2,
            explain: t`$U = \mu\cdot\tfrac{5}{2}RT = 2\times2.5\times8.314\times300 \approx 12\,471$ J.`,
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-phy-exam-kinetic",
        title: "Exam edge: Gas Speeds, Mixtures and Mean Free Path",
        summary:
          "What JEE, NEET, KCET and COMEDK ask from kinetic theory: rms, average and most probable speeds, energy and γ of gas mixtures, mixing of gases at different temperatures, and how mean free path and collision frequency change.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Kinetic theory is a short chapter but a reliable scorer. **NEET** and **KCET** ask direct questions on $v_{\text{rms}}$, average kinetic energy, degrees of freedom and γ. **JEE Main** and **COMEDK** add the three molecular speeds, internal energy and γ of mixtures, and mixing of gases. **JEE Advanced** combines it with thermodynamics, for example how collision frequency changes in an adiabatic process. Almost every question reduces to three ideas: KE ∝ T, $C_v = \tfrac{f}{2}R$, and $l \propto 1/n$.`,
          },
          {
            type: "table",
            headers: ["Speed", "Formula", "Ratio (×√(RT/M₀))", "Use it for"],
            rows: [
              ["Most probable", t`$v_{mp} = \sqrt{2RT/M_0}$`, t`$\sqrt2 \approx 1.41$`, "peak of the Maxwell speed curve"],
              ["Average (mean)", t`$\langle v\rangle = \sqrt{8RT/(\pi M_0)}$`, t`$\sqrt{8/\pi} \approx 1.60$`, "collision rate, mean free path arguments"],
              ["Root mean square", t`$v_{\text{rms}} = \sqrt{3RT/M_0}$`, t`$\sqrt3 \approx 1.73$`, "pressure and kinetic energy"],
            ],
          },
          {
            type: "formula",
            tex: t`C_{v,\text{mix}} = \frac{\mu_1C_{v1} + \mu_2C_{v2}}{\mu_1 + \mu_2} \qquad \frac{\mu_1 + \mu_2}{\gamma_{\text{mix}} - 1} = \frac{\mu_1}{\gamma_1 - 1} + \frac{\mu_2}{\gamma_2 - 1} \qquad M_{\text{mix}} = \frac{\mu_1M_1 + \mu_2M_2}{\mu_1 + \mu_2}`,
            caption: "For non-reacting ideal gases. The internal energies add; Cp,mix = Cv,mix + R. Always v_mp < ⟨v⟩ < v_rms.",
          },
          {
            type: "example",
            title: "KCET level: doubling the rms speed",
            problem: t`At what temperature (in °C) will the rms speed of the molecules of a gas be twice its value at 27 °C?`,
            steps: [
              t`$v_{\text{rms}} \propto \sqrt{T}$, so doubling the speed needs $T_2 = 4T_1$.`,
              t`$T_1 = 300$ K, so $T_2 = 1200$ K.`,
              t`In Celsius: $1200 - 273 = 927$ °C.`,
            ],
            answer: "927 °C (not 54 °C: the relation is with kelvin temperature, and it is a square-root one).",
          },
          {
            type: "example",
            title: "NEET / JEE Main level: γ of a mixture",
            problem: t`A container holds 2 mol of helium and 3 mol of oxygen (rigid molecules). Find γ of the mixture.`,
            steps: [
              t`$C_{v,\text{mix}} = \dfrac{2\times\tfrac{3}{2}R + 3\times\tfrac{5}{2}R}{5} = \dfrac{3R + 7.5R}{5} = 2.1R$.`,
              t`$C_{p,\text{mix}} = 2.1R + R = 3.1R$.`,
              t`$\gamma_{\text{mix}} = \dfrac{3.1}{2.1} = \dfrac{31}{21} \approx 1.48$.`,
              t`Check with the second formula: $\dfrac{5}{\gamma - 1} = \dfrac{2}{2/3} + \dfrac{3}{0.4} = 3 + 7.5 = 10.5$, so $\gamma - 1 = 0.476$. ✔`,
            ],
            answer: t`$\gamma_{\text{mix}} = 31/21 \approx 1.48$. (A mole-weighted average of the two γ values would give about 1.51, which is wrong.)`,
          },
          {
            type: "example",
            title: "JEE Main level: mixing gases at different temperatures",
            problem: t`2 mol of helium at 300 K and 1 mol of oxygen at 400 K are mixed in a rigid, insulated container. Find the final temperature.`,
            steps: [
              t`Rigid and insulated: W = 0 and Q = 0, so the total internal energy is conserved.`,
              t`Initial U $= 2\times\tfrac{3}{2}R\times300 + 1\times\tfrac{5}{2}R\times400 = 900R + 1000R = 1900R$.`,
              t`Final U $= \left(2\times\tfrac{3}{2}R + 1\times\tfrac{5}{2}R\right)T = 5.5RT$.`,
              t`$T = \dfrac{1900}{5.5} \approx 345.5$ K.`,
            ],
            answer: "About 345 K. It is not the mole-weighted average (≈ 333 K) because each mole of O₂ stores more energy per kelvin than a mole of He.",
          },
          {
            type: "example",
            title: "JEE Advanced level: collision frequency in an adiabatic expansion",
            problem: t`A monatomic ideal gas expands adiabatically and reversibly to twice its volume. By what factor does the number of collisions per second made by one molecule change?`,
            steps: [
              t`Collision frequency $\nu = \dfrac{\langle v\rangle}{l}$, with $\langle v\rangle \propto \sqrt{T}$ and $l = \dfrac{1}{\sqrt2\,n\pi d^2} \propto \dfrac{1}{n} \propto V$.`,
              t`So $\nu \propto \dfrac{\sqrt T}{V}$.`,
              t`Adiabatic, monatomic: $TV^{2/3} = $ constant, so $T \propto V^{-2/3}$ and $\sqrt T \propto V^{-1/3}$.`,
              t`$\nu \propto V^{-1/3}/V = V^{-4/3}$. Doubling V: $\nu_2/\nu_1 = 2^{-4/3} \approx 0.397$.`,
            ],
            answer: t`The collision frequency falls to $2^{-4/3} \approx 0.40$ of its value: fewer molecules per volume and slower ones.`,
          },
          {
            type: "mistake",
            wrong: "γ of a mixture is the average of the γ values of the gases.",
            right: "Average the heat capacities, not γ: find Cv,mix (mole-weighted), then Cp,mix = Cv,mix + R, then γ = Cp/Cv.",
            why: "γ is a ratio, and ratios do not average linearly. The internal energies of the gases add, so Cv values add with mole weights, but γ does not.",
          },
          {
            type: "mistake",
            wrong: "Heating a gas always increases its mean free path, because the molecules move faster.",
            right: "l = 1/(√2 n π d²) does not contain speed. At fixed n (rigid container), heating does not change l. At fixed pressure, heating lowers n, so l ∝ T increases.",
            why: "Faster molecules do travel farther per second, but they also meet other molecules sooner; distance between collisions depends only on how crowded the gas is.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "H₂ and O₂ at the same temperature: which has more average KE per molecule?",
              emoji: "⚖️",
              options: ["H₂, because its molecules are faster", "O₂, because its molecules are heavier", "Both are equal"],
              answer: 2,
              trap: 0,
              explain: "Average translational KE per molecule is (3/2)k_BT for every gas. Both are diatomic, so their total (translational + rotational) KE per molecule, (5/2)k_BT, is also equal. H₂ is faster only because it is lighter.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Five molecules have speeds 1, 2, 3, 4 and 5 km/s. Find their rms speed in km/s.",
                answer: 3.32,
                tolerance: 0.01,
                unit: "km/s",
                explain: t`$v_{\text{rms}} = \sqrt{(1 + 4 + 9 + 16 + 25)/5} = \sqrt{11} \approx 3.32$ km/s, larger than the average speed of 3 km/s.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Which degrees of freedom to use",
            md: t`Unless the question says vibrations are active or the temperature is very high, take diatomic gases as **rigid** (f = 5, γ = 1.4). For a mixture, add up U: $U = \sum \mu_i\tfrac{f_i}{2}RT$. In ratio questions write every quantity as a power of T, V or n first: $v \propto \sqrt{T/M}$, $l \propto 1/n$, $P \propto nT$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$v_{mp} : \langle v\rangle : v_{\text{rms}} = \sqrt2 : \sqrt{8/\pi} : \sqrt3$; always $v_{mp} < \langle v\rangle < v_{\text{rms}}$.`,
              "For mixtures, add internal energies and mole-weighted Cv; never average γ directly.",
              "Mixing in a rigid insulated vessel conserves total U.",
              t`$l \propto 1/n$ and collision frequency $\nu = \langle v\rangle/l \propto n\sqrt{T}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Three molecular speeds", back: "v_mp = √(2RT/M), ⟨v⟩ = √(8RT/πM), v_rms = √(3RT/M); ratio about 1 : 1.13 : 1.22." },
          { front: "Cv of a mixture", back: "Mole-weighted average: (μ₁Cv₁ + μ₂Cv₂)/(μ₁ + μ₂)." },
          { front: "γ of a mixture", back: "(μ₁ + μ₂)/(γ − 1) = μ₁/(γ₁ − 1) + μ₂/(γ₂ − 1)." },
          { front: "Mixing gases in a rigid insulated vessel", back: "Total internal energy is conserved: T = Σμᵢ Cvᵢ Tᵢ / Σμᵢ Cvᵢ." },
          { front: "Collision frequency", back: "ν = ⟨v⟩/l = √2 n π d² ⟨v⟩, so ν ∝ n√T." },
          { front: "Mean free path at constant pressure", back: "l = k_BT/(√2 π d² P), so l ∝ T." },
          { front: "Internal energy of 1 mol He + 1 mol N₂ at T", back: "(3/2)RT + (5/2)RT = 4RT." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For a gas at temperature T, the ratio v_mp : ⟨v⟩ : v_rms is:",
            options: ["√2 : √(8/π) : √3", "√3 : √(8/π) : √2", "1 : 1 : 1", "√2 : √3 : √(8/π)"],
            answer: 0,
            explain: "v_mp = √(2RT/M), ⟨v⟩ = √(8RT/πM), v_rms = √(3RT/M), and √2 < √(8/π) < √3.",
          },
          {
            kind: "numeric",
            q: "Find γ for a mixture of 1 mol of a monatomic gas and 1 mol of a rigid diatomic gas.",
            answer: 1.5,
            tolerance: 0.01,
            difficulty: 2,
            explain: t`$C_{v,\text{mix}} = (1.5R + 2.5R)/2 = 2R$, $C_{p,\text{mix}} = 3R$, $\gamma = 1.5$.`,
          },
          {
            kind: "numeric",
            q: "Find the rms speed of nitrogen molecules (M = 0.028 kg/mol) at 27 °C, in m/s. (R = 8.314 J mol⁻¹ K⁻¹)",
            answer: 517,
            tolerance: 3,
            unit: "m/s",
            explain: t`$v_{\text{rms}} = \sqrt{3\times8.314\times300/0.028} = \sqrt{2.67\times10^5} \approx 517$ m/s.`,
          },
          {
            kind: "mcq",
            q: "A gas is heated at constant pressure so that its kelvin temperature doubles. Its mean free path:",
            options: ["doubles", "stays the same", "halves", "increases √2 times"],
            answer: 0,
            difficulty: 2,
            explain: "At constant P, n ∝ 1/T, and l ∝ 1/n ∝ T.",
          },
          {
            kind: "multi",
            q: "Equal masses of H₂ and O₂ are at the same temperature. Which statements are true?",
            options: [
              "The average translational KE per molecule is the same for both",
              "There are 16 times as many H₂ molecules as O₂ molecules",
              "The total translational KE of the H₂ sample is 16 times that of the O₂ sample",
              "The rms speed of H₂ is 16 times that of O₂",
            ],
            answers: [0, 1, 2],
            difficulty: 2,
            hint: "Equal masses: number of molecules ∝ 1/M.",
            explain: "Same T gives the same KE per molecule; N ∝ 1/M gives 32/2 = 16 times as many H₂ molecules, so 16 times the total KE. v_rms ∝ 1/√M is only 4 times larger.",
          },
          {
            kind: "numeric",
            q: "1 mol of helium at 250 K and 2 mol of nitrogen (rigid) at 400 K are mixed in a rigid insulated vessel. Find the final temperature in kelvin.",
            answer: 365.4,
            tolerance: 0.5,
            unit: "K",
            difficulty: 3,
            hint: "Conserve total internal energy.",
            explain: t`$U = 1.5R(250) + 2(2.5R)(400) = 375R + 2000R = 2375R$. $\sum\mu C_v = 1.5R + 5R = 6.5R$. $T = 2375/6.5 \approx 365.4$ K.`,
          },
          {
            kind: "mcq",
            q: "At very high temperature, when the vibration of a diatomic molecule is fully active, the molar Cv is:",
            options: ["7R/2", "5R/2", "3R/2", "9R/2"],
            answer: 0,
            explain: "3 translational + 2 rotational terms give 5/2 R, and one vibrational mode adds R: total 7R/2. (9R/2 is Cp.)",
          },
          {
            kind: "numeric",
            q: "The kelvin temperature of a gas in a sealed rigid container is made four times larger. By what factor does the collision frequency of a molecule change?",
            answer: 2,
            difficulty: 3,
            hint: "Collision frequency ∝ n√T, and n is fixed.",
            explain: "n is fixed, so l is unchanged, and ν = ⟨v⟩/l ∝ √T = √4 = 2.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Thermodynamics": "c11-phy-thermodynamics",
  "11:Heat and Thermodynamics": ["c11-phy-thermodynamics"],
};
