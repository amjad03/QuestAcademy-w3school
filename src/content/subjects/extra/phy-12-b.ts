import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Current Electricity (NCERT Ch 3; ISC Unit: Current Electricity)     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-current-electricity",
    title: "Current Electricity",
    icon: "🔋",
    description: "Electric current, drift velocity, Ohm's law and resistivity, power, emf and internal resistance, combinations of cells, Kirchhoff's rules and the Wheatstone bridge.",
    lessons: [
      {
        slug: "c12-ce-drift-ohm",
        title: "Current, Drift Velocity and Resistivity",
        summary: "What current is inside a metal, how drift velocity leads to Ohm's law, resistivity and mobility, the limits of Ohm's law and how resistivity changes with temperature.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "💡",
            caption: "You press the switch and the tube light in your room comes on at once. Yet the electrons in the copper wire crawl along at less than a millimetre per second. Both facts are true.",
          },
          {
            type: "text",
            md: t`**Electric current** through a surface is the rate at which net charge flows across it. If a net charge $\Delta Q$ crosses a section in time $\Delta t$, the average current is $\Delta Q / \Delta t$; the instantaneous current is the limit $I = \frac{dQ}{dt}$. The SI unit is the **ampere** (A): 1 A = 1 C s⁻¹.

By convention the direction of current is the direction in which **positive** charge would move. In a metal the carriers are electrons, so they move opposite to the conventional current. Current is a **scalar**: it has a sense along the wire, but currents do not add like vectors at a junction.

**Current density** $\vec{j}$ is current per unit area normal to the flow, $j = I/A$ (unit A m⁻²). It is a vector, pointing along the local direction of flow.`,
          },
          {
            type: "text",
            md: t`A metal has a large number of **free electrons** (about $10^{29}$ per m³ in copper). Even with no field they rush about randomly at high thermal speeds and keep colliding with the vibrating ions. Their velocities point every way, so the **average velocity is zero** and no current flows.

Apply a field $\vec{E}$ and each electron gets an acceleration $\vec{a} = -e\vec{E}/m$ between collisions. Each collision randomises the velocity again. The average time between collisions is the **relaxation time** $\tau$ (about $10^{-14}$ s). The result is a small average velocity opposite to $\vec{E}$, called the **drift velocity** $\vec{v}_d$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Drift velocity.** Just after its last collision an electron has a random velocity $\vec{v}_0$. After time $t$, $\vec{v} = \vec{v}_0 - \frac{e\vec{E}}{m}t$. Averaging over all electrons, $\langle \vec{v}_0 \rangle = 0$ and $\langle t \rangle = \tau$, so $\vec{v}_d = -\frac{e\vec{E}}{m}\tau$.`,
              t`**Current.** In time $\Delta t$ all electrons within a length $|v_d|\Delta t$ of a section cross it. Their number is $n A |v_d| \Delta t$, so the charge is $neA|v_d|\Delta t$ and $I = neA|v_d|$.`,
              t`**Ohm's law.** Put in $|v_d| = eE\tau/m$: $I = \frac{ne^2\tau}{m} A E$, so $j = \frac{ne^2\tau}{m}E = \sigma E$.`,
              t`**Resistance.** For a wire of length $l$, $E = V/l$ and $j = I/A$. Then $\frac{I}{A} = \sigma\frac{V}{l}$, so $V = \frac{\rho l}{A} I = RI$ with $\rho = \frac{1}{\sigma} = \frac{m}{ne^2\tau}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`v_d = \frac{eE\tau}{m}, \qquad I = neAv_d, \qquad \sigma = \frac{1}{\rho} = \frac{ne^2\tau}{m}, \qquad \mu = \frac{v_d}{E} = \frac{e\tau}{m}`,
            caption: t`Drift speed, current, conductivity and mobility. Mobility $\mu$ (unit m² V⁻¹ s⁻¹) is the drift speed per unit field.`,
          },
          {
            type: "example",
            title: "How slow is the drift?",
            problem: t`A copper wire of cross-section 2.0 mm² carries a current of 3.0 A. Copper has $n = 8.5 \times 10^{28}$ free electrons per m³. Find the drift speed. Take $e = 1.6 \times 10^{-19}$ C.`,
            steps: [
              t`$A = 2.0 \text{ mm}^2 = 2.0 \times 10^{-6}$ m².`,
              t`$v_d = \frac{I}{neA} = \frac{3.0}{(8.5 \times 10^{28})(1.6 \times 10^{-19})(2.0 \times 10^{-6})}$.`,
              t`Denominator $= 8.5 \times 10^{28} \times 3.2 \times 10^{-25} = 2.72 \times 10^{4}$.`,
              t`$v_d = 3.0 / (2.72 \times 10^4) = 1.1 \times 10^{-4}$ m s⁻¹, about 0.11 mm per second.`,
            ],
            answer: t`$v_d \approx 1.1 \times 10^{-4}$ m s⁻¹. The light comes on at once because the **electric field** sets up along the whole wire almost at the speed of light, so electrons everywhere start drifting together.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The relaxation time of electrons in a metal is",
                options: [
                  "the time an electron takes to cross the wire",
                  "the average time between successive collisions",
                  "the time for the field to set up in the wire",
                  "the time for the current to reach its steady value",
                ],
                answer: 1,
                explain: t`$\tau$ is the average time between collisions with ions; it is about $10^{-14}$ s in metals.`,
              },
              {
                kind: "truefalse",
                q: "With no electric field, free electrons in a metal are at rest.",
                answer: false,
                explain: "They move fast and randomly; only their average velocity is zero, so there is no net flow of charge.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Ohm's law**: for many conductors at constant temperature, $V \propto I$, so $V = IR$. The **resistance** $R = \rho l / A$ depends on the size of the conductor; the **resistivity** $\rho$ (unit Ω m) depends only on the material and its temperature.

**Limits of Ohm's law.** Some devices are **non-ohmic**: (a) $V$ stops being proportional to $I$ (a filament lamp heats up); (b) the relation depends on the sign of $V$ (a p-n junction diode conducts one way); (c) the relation is not unique, one $I$ can have more than one $V$ (gallium arsenide shows such a region). Ohm's law is a property of particular materials, not a law of nature.`,
          },
          {
            type: "table",
            headers: ["Class", "Resistivity at room temperature (Ω m)", "Examples and uses"],
            rows: [
              ["Conductors (metals)", t`about $10^{-8}$ to $10^{-6}$`, "silver, copper, aluminium: connecting wires"],
              ["Alloys", t`about $10^{-6}$`, "nichrome (heater elements), manganin and constantan (standard resistors: ρ hardly changes with temperature)"],
              ["Semiconductors", "in between metals and insulators", "silicon, germanium: ρ falls as temperature rises or with doping"],
              ["Insulators", t`about $10^{14}$ or more`, "glass, rubber, mica: ρ is $10^{18}$ times or more that of metals"],
            ],
          },
          {
            type: "formula",
            tex: t`\rho_T = \rho_0\,[\,1 + \alpha\,(T - T_0)\,]`,
            caption: t`For metals over a moderate range. $\alpha$ is the temperature coefficient of resistivity (unit °C⁻¹ or K⁻¹). In metals $\tau$ falls as ions vibrate more, so $\rho$ rises. In semiconductors $n$ rises sharply with $T$, so $\rho$ falls (negative $\alpha$).`,
          },
          {
            type: "example",
            title: "A platinum resistance thermometer",
            problem: t`A platinum wire has resistance 10.0 Ω at 20 °C. Placed in a hot oil bath its resistance becomes 12.0 Ω. Take $\alpha = 3.9 \times 10^{-3}$ °C⁻¹ for platinum. Find the bath temperature.`,
            steps: [
              t`The size of the wire hardly changes, so $R$ follows the same law as $\rho$: $R_T = R_0[1 + \alpha(T - T_0)]$.`,
              t`$\frac{12.0}{10.0} = 1 + 3.9 \times 10^{-3}(T - 20)$, so $T - 20 = \frac{0.20}{3.9 \times 10^{-3}} = 51.3$ °C.`,
              t`$T = 20 + 51.3 = 71.3$ °C.`,
            ],
            answer: "The oil is at about 71 °C.",
          },
          {
            type: "mistake",
            wrong: "Stretching a wire to twice its length raises its resistivity, which is why its resistance goes up.",
            right: t`Stretching changes only the **shape**, so $\rho$ stays the same. The volume is fixed, so doubling $l$ halves $A$, and $R = \rho l/A$ becomes **4 times** the original.`,
            why: "Resistance and resistivity sound alike and both rise with temperature, so learners mix them up. Resistivity belongs to the material; resistance belongs to that particular piece of it.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does the change alter the resistivity ρ of a copper wire?",
              groups: ["Changes ρ (and R)", "Changes only R, not ρ"],
              items: [
                { text: "Heating the wire from 20 °C to 80 °C", group: 0, hint: "Faster ion vibrations shorten τ, so ρ rises." },
                { text: "Using a longer piece of the same wire", group: 1, hint: "R = ρl/A; ρ belongs to copper." },
                { text: "Stretching the wire to make it thinner", group: 1, hint: "Same material, new shape." },
                { text: "Replacing copper with nichrome of the same size", group: 0, hint: "A new material has its own ρ." },
                { text: "Using a thicker wire of the same length", group: 1, hint: "A larger A lowers R only." },
                { text: "Cooling the wire in liquid nitrogen", group: 0, hint: "τ becomes longer at low temperature, so ρ falls." },
              ],
              explain: "Resistivity depends only on the material and its temperature. Length, thickness and shape change resistance through R = ρl/A.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The derivation of $\rho = \frac{m}{ne^2\tau}$ (or of $j = \sigma E$) is a regular 3-mark question. Marks go to: acceleration $-eE/m$, averaging to get $v_d = -eE\tau/m$, the step $I = neAv_d$, and the final expression. Always say *why* $\langle \vec{v}_0 \rangle = 0$.

When asked how $\rho$ of a metal changes with temperature, answer in terms of $\tau$ ($n$ hardly changes in a metal). For a semiconductor, answer in terms of $n$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$I = dQ/dt$; current density $j = I/A$; conventional current is the direction of positive charge flow.`,
              t`$v_d = eE\tau/m$ (opposite to $\vec{E}$ for electrons); $I = neAv_d$; mobility $\mu = e\tau/m$.`,
              t`$\rho = m/(ne^2\tau)$ depends on material and temperature; $R = \rho l/A$ also depends on size.`,
              t`Metals: $\rho_T = \rho_0[1 + \alpha(T - T_0)]$, $\rho$ rises with $T$. Semiconductors: $\rho$ falls with $T$.`,
              "Ohm's law fails for diodes, filament lamps and materials such as GaAs.",
            ],
          },
        ],
        flashcards: [
          { front: "Drift velocity", back: t`The average velocity of free electrons in a conductor under a field: $v_d = eE\tau/m$, opposite to $\vec{E}$.` },
          { front: "Relaxation time τ", back: t`Average time between successive collisions of a free electron, about $10^{-14}$ s in metals.` },
          { front: "Relation between I and v_d", back: t`$I = neAv_d$` },
          { front: "Resistivity in terms of τ", back: t`$\rho = \dfrac{m}{ne^2\tau}$` },
          { front: "Mobility", back: t`Drift speed per unit field: $\mu = v_d/E = e\tau/m$, unit m² V⁻¹ s⁻¹.` },
          { front: "Why manganin is used for standard resistors", back: "Its resistivity changes very little with temperature (very small α)." },
          { front: "Effect of temperature on ρ of a semiconductor", back: "ρ decreases: more charge carriers are freed as temperature rises." },
          { front: "Vector form of Ohm's law", back: t`$\vec{j} = \sigma \vec{E}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "When the temperature of a metal wire rises, its resistivity increases mainly because",
            options: [
              "the number of free electrons per m³ decreases",
              "the relaxation time decreases",
              "the wire becomes longer",
              "the charge of each electron decreases",
            ],
            answer: 1,
            explain: t`Ions vibrate more, so collisions are more frequent and $\tau$ falls; $\rho = m/(ne^2\tau)$ rises. $n$ is nearly constant in a metal.`,
          },
          {
            kind: "numeric",
            q: t`A wire 2.0 m long with cross-section 1.0 mm² has resistance 0.034 Ω. Find its resistivity in units of $10^{-8}$ Ω m.`,
            answer: 1.7,
            tolerance: 0.05,
            unit: t`× $10^{-8}$ Ω m`,
            explain: t`$\rho = RA/l = 0.034 \times 1.0 \times 10^{-6} / 2.0 = 1.7 \times 10^{-8}$ Ω m (copper).`,
          },
          {
            kind: "mcq",
            q: "A wire is stretched uniformly until its length is doubled. Its new resistance is",
            options: ["the same", "2 times", "4 times", "half"],
            answer: 2,
            explain: t`Volume is constant, so $A$ halves. $R = \rho l/A$ gets $2 \times 2 = 4$ times bigger.`,
          },
          {
            kind: "truefalse",
            q: "Current is a vector because it has a direction.",
            answer: false,
            explain: "Currents meeting at a junction add as numbers, not by the vector law, so current is a scalar. Current density is a vector.",
          },
          {
            kind: "multi",
            q: "Select all the non-ohmic devices or materials.",
            options: ["A p-n junction diode", "A manganin resistor at constant temperature", "A filament lamp heating up", "Gallium arsenide", "A copper wire at constant temperature"],
            answers: [0, 2, 3],
            explain: "The diode depends on polarity, the lamp's resistance rises as it heats, and GaAs has a region where V is not single-valued. Manganin and copper at fixed temperature obey Ohm's law.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`For copper, $n = 8.5 \times 10^{28}$ m⁻³ and $\rho = 1.7 \times 10^{-8}$ Ω m. Find the relaxation time in units of $10^{-14}$ s. Use $m = 9.1 \times 10^{-31}$ kg, $e = 1.6 \times 10^{-19}$ C.`,
            answer: 2.5,
            tolerance: 0.1,
            unit: t`× $10^{-14}$ s`,
            explain: t`$\tau = \frac{m}{ne^2\rho} = \frac{9.1 \times 10^{-31}}{8.5 \times 10^{28} \times 2.56 \times 10^{-38} \times 1.7 \times 10^{-8}} = \frac{9.1 \times 10^{-31}}{3.70 \times 10^{-17}} \approx 2.5 \times 10^{-14}$ s.`,
            difficulty: 2,
            hint: t`Rearrange $\rho = m/(ne^2\tau)$ for $\tau$.`,
          },
          {
            kind: "mcq",
            q: "The same current flows through two copper wires in series, one of radius r and one of radius 2r. The ratio of drift speeds (thin : thick) is",
            options: ["1 : 1", "2 : 1", "4 : 1", "1 : 4"],
            answer: 2,
            explain: t`$v_d = I/(neA)$ with the same $I$ and $n$, so $v_d \propto 1/r^2$: the thin wire has 4 times the drift speed.`,
          },
          {
            kind: "mcq",
            q: "Which quantity does NOT change when a conductor is cut into two equal halves?",
            options: ["Resistance", "Resistivity", "Length", "Number of free electrons"],
            answer: 1,
            explain: "Resistivity is a property of the material at a given temperature; the others depend on the size of the piece.",
          },
        ],
      },
      {
        slug: "c12-ce-power-emf-cells",
        title: "Electrical Power, EMF and Combinations of Cells",
        summary: "Joule heating and electric power, why power is transmitted at high voltage, emf and internal resistance of a cell, terminal voltage, and cells in series and parallel.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`During a power cut, an inverter battery at home runs the fans for hours. A brand-new 12 V battery shows slightly less than 12 V across its terminals once the fans are on. This lesson explains both the energy it delivers and the "missing" volts.`,
          },
          {
            type: "text",
            md: t`**Electrical energy and power.** When a charge $\Delta Q$ moves from a point at higher potential to one at lower potential, through a potential difference $V$, it loses potential energy $V\Delta Q$. In a resistor this energy is passed to the ions in collisions and appears as **heat** (Joule heating). The rate of energy loss is $P = V\frac{\Delta Q}{\Delta t} = VI$. With $V = IR$ it can also be written $I^2R$ or $V^2/R$. The unit is the watt; the commercial unit of energy is the kilowatt hour, 1 kWh = $3.6 \times 10^6$ J.`,
          },
          {
            type: "formula",
            tex: t`P = VI = I^2 R = \frac{V^2}{R}, \qquad P_{\text{loss in line}} = I^2 R_c = \frac{P^2 R_c}{V^2}`,
            caption: t`A power station sending power $P$ at voltage $V$ through lines of resistance $R_c$ loses $P^2R_c/V^2$ as heat. Raising $V$ cuts the loss sharply, so transmission uses high voltage and step-down transformers near homes.`,
          },
          {
            type: "example",
            title: "Why the grid uses high voltage",
            problem: t`A substation sends 1.0 MW to a town through lines of total resistance 10 Ω. Compare the power lost in the lines if it is sent at 11 kV and at 220 kV.`,
            steps: [
              t`At 11 kV: $I = P/V = 10^6 / (1.1 \times 10^4) = 90.9$ A. Loss $= I^2R_c = (90.9)^2 \times 10 \approx 8.3 \times 10^4$ W, about 83 kW (8.3% of the power).`,
              t`At 220 kV: $I = 10^6 / (2.2 \times 10^5) = 4.55$ A. Loss $= (4.55)^2 \times 10 \approx 207$ W.`,
              t`The voltage is 20 times larger, so the loss is $20^2 = 400$ times smaller.`,
            ],
            answer: "About 83 kW is lost at 11 kV but only about 0.2 kW at 220 kV.",
          },
          {
            type: "text",
            md: t`**EMF and internal resistance.** Inside a cell, chemical reactions keep the positive terminal at a higher potential than the negative one. The **emf** $\varepsilon$ is the potential difference between the terminals when **no current** flows (the work done by the cell per unit charge in taking it round). It is not a force, despite the name "electromotive force".

The electrolyte inside the cell has an **internal resistance** $r$. With an external resistor $R$, the current is $I = \frac{\varepsilon}{R + r}$, and the **terminal voltage** is $V = IR = \varepsilon - Ir$. The part $Ir$ is the "lost volts" used inside the cell.`,
          },
          {
            type: "formula",
            tex: t`I = \frac{\varepsilon}{R + r}, \qquad V = \varepsilon - Ir \;\; (\text{discharging}), \qquad V = \varepsilon + Ir \;\; (\text{being charged})`,
            caption: t`Open circuit: $I = 0$, $V = \varepsilon$. Short circuit ($R = 0$): $I_{\max} = \varepsilon / r$, $V = 0$.`,
          },
          {
            type: "example",
            title: "Terminal voltage of a battery",
            problem: t`A battery of emf 12 V and internal resistance 0.4 Ω is connected to a 5.6 Ω resistor. Find the current, the terminal voltage, and the power delivered to the resistor and wasted inside the battery.`,
            steps: [
              t`$I = \frac{\varepsilon}{R + r} = \frac{12}{5.6 + 0.4} = 2.0$ A.`,
              t`$V = \varepsilon - Ir = 12 - 2.0 \times 0.4 = 11.2$ V (check: $IR = 2.0 \times 5.6 = 11.2$ V).`,
              t`Power in $R$: $I^2R = 4 \times 5.6 = 22.4$ W. Power in $r$: $I^2 r = 4 \times 0.4 = 1.6$ W.`,
              t`Total $= 24$ W $= \varepsilon I$, as energy conservation demands.`,
            ],
            answer: "I = 2.0 A, V = 11.2 V; 22.4 W in the resistor and 1.6 W lost inside the battery.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 9.0 V battery with internal resistance 1.0 Ω drives current through an 8.0 Ω resistor. What is its terminal voltage?",
                answer: 8,
                tolerance: 0.01,
                unit: "V",
                explain: t`$I = 9/(8 + 1) = 1.0$ A, so $V = 9 - 1.0 \times 1.0 = 8.0$ V.`,
              },
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Series.** Cells 1 and 2 are joined, + of one to − of the next. Going from the free − terminal to the free + terminal, the potential rises by $\varepsilon_1 - Ir_1$ and then by $\varepsilon_2 - Ir_2$. So $V = (\varepsilon_1 + \varepsilon_2) - I(r_1 + r_2)$: the pair acts as one cell with $\varepsilon_{eq} = \varepsilon_1 + \varepsilon_2$ and $r_{eq} = r_1 + r_2$.`,
              t`If one cell is reversed in the series, its emf is subtracted: $\varepsilon_{eq} = \varepsilon_1 - \varepsilon_2$; the internal resistances still add.`,
              t`**Parallel.** Both + terminals meet at one point and both − terminals at another, so both cells have the same terminal voltage $V$. Then $I_1 = (\varepsilon_1 - V)/r_1$ and $I_2 = (\varepsilon_2 - V)/r_2$.`,
              t`Adding, $I = I_1 + I_2 = \frac{\varepsilon_1}{r_1} + \frac{\varepsilon_2}{r_2} - V\left(\frac{1}{r_1} + \frac{1}{r_2}\right)$. Rearranging into the form $V = \varepsilon_{eq} - I r_{eq}$ gives the results below.`,
            ],
          },
          {
            type: "formula",
            tex: t`\text{Parallel: } \frac{1}{r_{eq}} = \frac{1}{r_1} + \frac{1}{r_2}, \qquad \frac{\varepsilon_{eq}}{r_{eq}} = \frac{\varepsilon_1}{r_1} + \frac{\varepsilon_2}{r_2} \;\Rightarrow\; \varepsilon_{eq} = \frac{\varepsilon_1 r_2 + \varepsilon_2 r_1}{r_1 + r_2}`,
            caption: "For n cells in parallel, add ε/r terms and 1/r terms in the same way.",
          },
          {
            type: "example",
            title: "Two unequal cells in parallel",
            problem: t`A cell of emf 2.0 V and internal resistance 1.0 Ω is connected in parallel (like terminals together) with a cell of emf 1.5 V and internal resistance 0.50 Ω. Find the equivalent emf and internal resistance.`,
            steps: [
              t`$r_{eq} = \frac{r_1 r_2}{r_1 + r_2} = \frac{1.0 \times 0.50}{1.5} = 0.33$ Ω.`,
              t`$\varepsilon_{eq} = \frac{\varepsilon_1 r_2 + \varepsilon_2 r_1}{r_1 + r_2} = \frac{2.0 \times 0.50 + 1.5 \times 1.0}{1.5} = \frac{2.5}{1.5} = 1.67$ V.`,
              t`The result lies between 1.5 V and 2.0 V, as it must. With no external load, a current circulates and the 2.0 V cell charges the 1.5 V cell.`,
            ],
            answer: t`$\varepsilon_{eq} \approx 1.67$ V and $r_{eq} \approx 0.33$ Ω.`,
          },
          {
            type: "mistake",
            wrong: "The voltage across a battery's terminals is always equal to its emf.",
            right: t`$V = \varepsilon$ only when no current flows. A discharging cell gives $V = \varepsilon - Ir < \varepsilon$; a cell being charged has $V = \varepsilon + Ir > \varepsilon$.`,
            why: "The label on the battery shows the emf, and a good voltmeter draws almost no current, so the reading looks like the label. Once current flows, part of the emf is used up across the internal resistance.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each situation to the terminal voltage V.",
              pairs: [
                ["Cell on open circuit", t`$V = \varepsilon$`],
                ["Cell supplying current to a lamp", t`$V = \varepsilon - Ir$`],
                ["Cell being recharged by a charger", t`$V = \varepsilon + Ir$`],
                ["Cell terminals joined by a thick wire", t`$V = 0$, $I = \varepsilon/r$`],
              ],
              explain: "The sign of Ir depends on which way current passes through the cell: out of the + terminal (discharging) or into it (charging).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The derivations for cells in series and in parallel are asked for 3 marks; show the terminal-voltage equation for each cell before combining. A favourite graph question: plot $V$ against $I$ for a cell. It is a straight line $V = \varepsilon - Ir$ with intercept $\varepsilon$ on the V-axis and slope $-r$; the I-axis intercept is $\varepsilon/r$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$P = VI = I^2R = V^2/R$; 1 kWh $= 3.6 \times 10^6$ J.`,
              t`Line loss $= P^2R_c/V^2$, so power is transmitted at high voltage.`,
              t`emf is the terminal p.d. on open circuit; $I = \varepsilon/(R + r)$ and $V = \varepsilon - Ir$.`,
              t`Series: emfs and internal resistances add. Parallel: $1/r_{eq} = \sum 1/r_i$, $\varepsilon_{eq}/r_{eq} = \sum \varepsilon_i/r_i$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Joule heating power", back: t`$P = I^2R$; energy $H = I^2Rt$` },
          { front: "1 kWh in joules", back: t`$3.6 \times 10^6$ J` },
          { front: "emf of a cell", back: "The potential difference between its terminals when it supplies no current." },
          { front: "Terminal voltage while discharging", back: t`$V = \varepsilon - Ir$` },
          { front: "Short-circuit current of a cell", back: t`$I = \varepsilon / r$` },
          { front: "Two cells in series", back: t`$\varepsilon_{eq} = \varepsilon_1 + \varepsilon_2$, $r_{eq} = r_1 + r_2$ (subtract the emf of a reversed cell).` },
          { front: "Two cells in parallel: equivalent emf", back: t`$\varepsilon_{eq} = \dfrac{\varepsilon_1 r_2 + \varepsilon_2 r_1}{r_1 + r_2}$` },
          { front: "Why high-voltage transmission?", back: t`For the same power, current is smaller, so the $I^2R$ loss in the lines is much smaller.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`A graph of terminal voltage $V$ (y-axis) against current $I$ (x-axis) for a cell is a straight line. Its slope and y-intercept give`,
            options: [t`slope $= r$, intercept $= \varepsilon$`, t`slope $= -r$, intercept $= \varepsilon$`, t`slope $= -\varepsilon$, intercept $= r$`, t`slope $= 1/r$, intercept $= \varepsilon/r$`],
            answer: 1,
            explain: t`$V = \varepsilon - Ir$ is a straight line of slope $-r$ and V-intercept $\varepsilon$.`,
          },
          {
            kind: "numeric",
            q: "A car battery of emf 12 V and internal resistance 0.50 Ω is being charged with a current of 2.0 A. What is the p.d. across its terminals?",
            answer: 13,
            tolerance: 0.01,
            unit: "V",
            explain: t`Charging: $V = \varepsilon + Ir = 12 + 2.0 \times 0.50 = 13$ V.`,
          },
          {
            kind: "mcq",
            q: "An electric heater rated 1000 W, 220 V is run on 110 V. Assuming its resistance does not change, its power is",
            options: ["1000 W", "500 W", "250 W", "2000 W"],
            answer: 2,
            explain: t`$P = V^2/R$; halving $V$ makes $P$ one quarter: 250 W.`,
          },
          {
            kind: "numeric",
            q: "A 2.0 kW geyser runs for 30 minutes each day. How many kWh does it use in 30 days?",
            answer: 30,
            tolerance: 0.01,
            unit: "kWh",
            explain: t`Daily energy $= 2.0 \text{ kW} \times 0.5 \text{ h} = 1.0$ kWh, so 30 kWh in 30 days.`,
          },
          {
            kind: "truefalse",
            q: "Three identical cells joined in parallel give three times the emf of one cell.",
            answer: false,
            explain: t`In parallel the emf stays $\varepsilon$; only the internal resistance drops to $r/3$, so the combination can give more current.`,
          },
          {
            kind: "mcq",
            q: "Two cells of emf 1.5 V and 1.2 V, each of internal resistance 0.5 Ω, are joined in series with the 1.2 V cell reversed. The combination acts as a single cell of",
            options: ["2.7 V, 1.0 Ω", "0.3 V, 1.0 Ω", "0.3 V, 0.25 Ω", "2.7 V, 0.25 Ω"],
            answer: 1,
            explain: "A reversed cell subtracts its emf (1.5 − 1.2 = 0.3 V), but current still passes through both internal resistances, which add to 1.0 Ω.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A cell (emf ε, internal resistance r) drives a current through an external resistance R. Which statements are correct?",
            options: [
              "The terminal voltage rises as R increases",
              "The current is largest when R = 0",
              "The power in R is largest when R = r",
              "The terminal voltage equals ε when R = r",
            ],
            answers: [0, 1, 2],
            explain: t`$V = \varepsilon R/(R + r)$ rises with $R$; $I = \varepsilon/(R + r)$ is largest at $R = 0$; power in $R$ peaks at $R = r$, where $V = \varepsilon/2$, not $\varepsilon$.`,
            difficulty: 2,
            hint: t`Write $V = IR = \varepsilon R/(R + r)$ and test each statement.`,
          },
        ],
      },
      {
        slug: "c12-ce-kirchhoff-bridge",
        title: "Kirchhoff's Rules and the Wheatstone Bridge",
        summary: "The junction and loop rules with their sign conventions, solving a two-loop network, the balanced Wheatstone bridge, and (for ISC and Karnataka PUC) the metre bridge and potentiometer.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "A circuit with two batteries in different branches, like a solar panel and a battery both feeding a lamp, cannot be reduced to series and parallel resistors. Kirchhoff's two rules solve any such network.",
          },
          {
            type: "text",
            md: t`**Junction rule** (charge conservation): at any junction, the sum of currents entering equals the sum of currents leaving, $\sum I = 0$. Charge does not pile up at a junction in steady state.

**Loop rule** (energy conservation): around any closed loop, the algebraic sum of changes in potential is zero, $\sum \Delta V = 0$. A charge that goes round and returns to its start has the same potential energy as before.`,
          },
          {
            type: "table",
            headers: ["Going round the loop you cross…", "Change in potential"],
            rows: [
              ["a resistor R in the same direction as its assumed current I", t`$-IR$ (drop)`],
              ["a resistor R against its assumed current I", t`$+IR$`],
              ["a cell from − terminal to + terminal", t`$+\varepsilon$`],
              ["a cell from + terminal to − terminal", t`$-\varepsilon$`],
            ],
          },
          {
            type: "example",
            title: "A two-loop network",
            problem: t`Two cells, $\varepsilon_1 = 6$ V and $\varepsilon_2 = 2$ V, sit in the left and right branches of a circuit with resistors $R_1 = 2$ Ω and $R_2 = 2$ Ω in series with them. A middle branch with $R_3 = 4$ Ω joins the top junction A to the bottom junction B. Both cells have their + terminals towards A. Neglect internal resistance. Find the current in each branch.`,
            steps: [
              t`Assume $I_1$ up through the left branch, $I_2$ up through the right branch, and $I_3$ down through $R_3$. Junction A: $I_3 = I_1 + I_2$.`,
              t`Left loop (up through $\varepsilon_1$, down through $R_3$): $6 - 2I_1 - 4I_3 = 0$, so $6I_1 + 4I_2 = 6$.`,
              t`Right loop (up through $\varepsilon_2$, down through $R_3$): $2 - 2I_2 - 4I_3 = 0$, so $4I_1 + 6I_2 = 2$.`,
              t`Multiply the first by 3 and the second by 2 and subtract: $18I_1 - 8I_1 = 18 - 4$, so $I_1 = 1.4$ A. Then $4I_2 = 6 - 8.4$, $I_2 = -0.6$ A, and $I_3 = 0.8$ A.`,
              t`Check with potentials: $V_A - V_B = I_3R_3 = 3.2$ V, and also $= 6 - 2(1.4) = 3.2$ V. ✓`,
            ],
            answer: t`$I_1 = 1.4$ A (up), $I_3 = 0.8$ A (down through $R_3$), and 0.6 A flows **down** through the 2 V cell: the 6 V cell is charging it.`,
          },
          {
            type: "mistake",
            wrong: "My answer for a current came out negative, so I must have made an error.",
            right: "A negative value simply means the current flows opposite to the direction you assumed. Keep the sign in all later equations; only reverse the arrow at the end.",
            why: "In simple circuits currents are always positive, so a minus sign feels wrong. Kirchhoff's rules work with any assumed directions, and the algebra corrects them for you.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Kirchhoff's loop rule is a statement of",
                options: ["conservation of charge", "conservation of energy", "conservation of momentum", "Ohm's law"],
                answer: 1,
                explain: "The net change of potential (energy per unit charge) round a closed loop is zero: energy conservation. The junction rule is charge conservation.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Wheatstone bridge.** Four resistors $P$, $Q$, $R$, $S$ form a diamond ABCD: $P$ from A to B, $Q$ from B to C, $R$ from A to D and $S$ from D to C. A cell is joined across A and C, and a galvanometer G across B and D. If the resistances are chosen so that no current flows through G, the bridge is **balanced**.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`At balance $I_g = 0$, so by the junction rule the same current $I_1$ flows through $P$ and $Q$, and the same current $I_2$ flows through $R$ and $S$.`,
              t`Loop ABDA (through $P$, G and $R$): $-I_1P + 0 + I_2R = 0$, so $I_1P = I_2R$.`,
              t`Loop BCDB (through $Q$, $S$ and G): $-I_1Q + I_2S + 0 = 0$, so $I_1Q = I_2S$.`,
              t`Divide the two equations: $\frac{P}{Q} = \frac{R}{S}$. The cell's emf and internal resistance drop out.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{P}{Q} = \frac{R}{S} \qquad (\text{balanced bridge, } I_g = 0)`,
            caption: "Knowing three resistances gives the fourth. At balance, B and D are at the same potential, so the galvanometer (or any resistor) between them can be removed.",
          },
          {
            type: "example",
            title: "Finding an unknown resistance",
            problem: t`In a Wheatstone bridge, $P = 10$ Ω, $Q = 20$ Ω and $R = 15$ Ω. What value of $S$ balances the bridge?`,
            steps: [
              t`At balance $P/Q = R/S$, so $S = \frac{QR}{P}$.`,
              t`$S = \frac{20 \times 15}{10} = 30$ Ω.`,
            ],
            answer: "S = 30 Ω.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for solving a network in order.",
              items: [
                "Mark a current with an assumed direction in every branch",
                "Apply the junction rule to cut down the unknowns",
                "Choose independent loops and write a loop equation for each",
                "Solve the simultaneous equations",
                "Reverse the arrow for any current that came out negative",
              ],
              explain: "Use as many independent loops as there are unknown currents left after the junction rule. Signs sort themselves out at the end.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "ISC and Karnataka PUC note: metre bridge and potentiometer",
            md: t`The rationalised NCERT book (CBSE) dropped the metre bridge, potentiometer, carbon-resistor colour code and series–parallel resistor combinations. **ISC** still teaches all of these; check the current **Karnataka PUC** syllabus, which has kept some of them in recent years.

**Metre bridge**: a 1 m uniform wire forms $R$ and $S$ of the bridge. With a known $R$ in the left gap and the null point at length $l$ cm from the left end, $\frac{R}{S} = \frac{l}{100 - l}$.

**Potentiometer**: a steady current through a long uniform wire gives a constant potential gradient $k = V/L$. A cell balanced at length $l$ has emf $\varepsilon = kl$, so two cells compare as $\frac{\varepsilon_1}{\varepsilon_2} = \frac{l_1}{l_2}$. Internal resistance: $r = R\left(\frac{l_1}{l_2} - 1\right)$, where $l_1$ is the balance length with the cell on open circuit and $l_2$ with a resistor $R$ across it.`,
          },
          {
            type: "example",
            title: "Metre bridge and potentiometer (ISC)",
            problem: t`(a) In a metre bridge with a 6.0 Ω resistor in the left gap, the null point is 40.0 cm from the left end. Find the resistance in the right gap. (b) On a potentiometer, a cell balances at 350 cm on open circuit and at 300 cm when a 10 Ω resistor is joined across it. Find its internal resistance.`,
            steps: [
              t`(a) $\frac{R}{S} = \frac{l}{100 - l} = \frac{40}{60}$, so $S = 6.0 \times \frac{60}{40} = 9.0$ Ω.`,
              t`(b) $r = R\left(\frac{l_1}{l_2} - 1\right) = 10\left(\frac{350}{300} - 1\right) = 10 \times \frac{1}{6} = 1.67$ Ω.`,
            ],
            answer: "(a) 9.0 Ω; (b) about 1.7 Ω.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Draw the circuit, mark every assumed current with an arrow and name each loop. Examiners give marks for the junction equation, each loop equation and the final values, so even if the arithmetic slips you keep most marks. For the bridge derivation, the line \"at balance, no current through G\" earns a mark by itself.",
          },
          {
            type: "keypoints",
            items: [
              t`Junction rule $\sum I = 0$ (charge conservation); loop rule $\sum \Delta V = 0$ (energy conservation).`,
              t`Crossing a resistor along the current: $-IR$; crossing a cell from − to +: $+\varepsilon$.`,
              "A negative answer means the current is opposite to the assumed direction.",
              t`Balanced Wheatstone bridge: $P/Q = R/S$, no current in the galvanometer arm.`,
              t`ISC: metre bridge $R/S = l/(100 - l)$; potentiometer $\varepsilon_1/\varepsilon_2 = l_1/l_2$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Kirchhoff's junction rule", back: "Total current into a junction = total current out (conservation of charge)." },
          { front: "Kirchhoff's loop rule", back: "The algebraic sum of potential changes round any closed loop is zero (conservation of energy)." },
          { front: "Sign when crossing a resistor along the current", back: t`$-IR$ (potential drops)` },
          { front: "Balance condition of a Wheatstone bridge", back: t`$\dfrac{P}{Q} = \dfrac{R}{S}$, galvanometer current zero` },
          { front: "Metre bridge formula", back: t`$\dfrac{R}{S} = \dfrac{l}{100 - l}$` },
          { front: "Potentiometer: internal resistance", back: t`$r = R\left(\dfrac{l_1}{l_2} - 1\right)$` },
          { front: "Does a balanced bridge depend on the cell's emf?", back: "No. The emf and internal resistance cancel in the balance condition." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Kirchhoff's junction rule follows from conservation of",
            options: ["energy", "charge", "momentum", "mass"],
            answer: 1,
            explain: "Charge cannot pile up at a junction in steady state, so what flows in must flow out.",
          },
          {
            kind: "numeric",
            q: "In a Wheatstone bridge P = 4 Ω, Q = 6 Ω and S = 9 Ω. What value of R balances it?",
            answer: 6,
            tolerance: 0.01,
            unit: "Ω",
            explain: t`$R = \frac{PS}{Q} = \frac{4 \times 9}{6} = 6$ Ω.`,
          },
          {
            kind: "mcq",
            q: "In a balanced Wheatstone bridge, the cell and the galvanometer are interchanged. Then",
            options: ["the bridge stays balanced", "the galvanometer current doubles", "the bridge goes off balance", "no current flows anywhere"],
            answer: 0,
            explain: t`$P/Q = R/S$ can be rewritten $P/R = Q/S$, which is the balance condition for the swapped arrangement.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Moving round a loop from the + terminal to the − terminal of a cell, the potential change is +ε.",
            answer: false,
            explain: t`Going from + to − the potential falls, so the change is $-\varepsilon$.`,
          },
          {
            kind: "numeric",
            q: "In a metre bridge the null point is at 60.0 cm from the left end when an unknown resistor X is in the left gap and 10 Ω is in the right gap. Find X.",
            answer: 15,
            tolerance: 0.01,
            unit: "Ω",
            explain: t`$X/10 = 60/40$, so $X = 15$ Ω. (ISC / PUC content.)`,
          },
          {
            kind: "numeric",
            q: "Two cells balance at 240 cm and 300 cm on a potentiometer wire. If the first has emf 1.2 V, what is the emf of the second?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "V",
            explain: t`$\varepsilon_2 = \varepsilon_1 \frac{l_2}{l_1} = 1.2 \times \frac{300}{240} = 1.5$ V. (ISC / PUC content.)`,
          },
          {
            kind: "mcq",
            q: "Using Kirchhoff's rules you take a current as 0.5 A clockwise, but the answer comes out −0.5 A. The actual current is",
            options: ["0.5 A clockwise", "0.5 A anticlockwise", "zero", "impossible to tell without redoing the work"],
            answer: 1,
            explain: "The minus sign only reverses the assumed direction; the size is 0.5 A.",
          },
        ],
      },
      {
        slug: "c12-ce-exam-edge",
        title: "Exam edge: Current Electricity",
        summary: "What JEE, NEET, KCET and COMEDK ask from current electricity, safe shortcuts (stretched wires, symmetry, best grouping of cells, infinite ladders) and the classic traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What it asks from this chapter"],
            rows: [
              ["NEET", "drift velocity and mobility, stretched-wire resistance, power ratings of bulbs, cells in series/parallel, Wheatstone and metre bridge; usually 1–2 questions"],
              ["JEE Main", "network reduction by symmetry, Kirchhoff with two or three loops, maximum power transfer, temperature coefficient, ammeter/voltmeter readings in a circuit"],
              ["JEE Advanced", "infinite networks, unbalanced bridges, current through a cell that is being charged, variable resistance and power optimisation, often in multi-correct form"],
              ["KCET / COMEDK", "direct formula use: resistivity, colour code (where in syllabus), combinations, drift speed, kWh and bill calculations"],
            ],
          },
          {
            type: "heading",
            text: "Results worth remembering",
          },
          {
            type: "formula",
            tex: t`\text{Stretched wire (same volume): } R \propto l^2 \propto \frac{1}{A^2} \propto \frac{1}{r^4}, \qquad \text{small stretch: } \frac{\Delta R}{R} \approx 2\frac{\Delta l}{l}`,
            caption: "Safe only when the volume and resistivity stay the same (no heating, uniform stretch). Use the exact (1 + x)² when the stretch is not small.",
          },
          {
            type: "list",
            items: [
              t`**n equal resistors**: series $nR$, parallel $R/n$, ratio $n^2$.`,
              t`**Maximum power transfer**: power in $R$ is largest when $R = r$; then $P_{\max} = \varepsilon^2/(4r)$ and efficiency is only 50%.`,
              t`**Best grouping** of $N = mn$ identical cells ($n$ in series per row, $m$ rows in parallel) in an external $R$: current is largest when $nr/m = R$. Works only for identical cells.`,
              t`**Bulbs** with the same rated voltage: $R = V^2/P$, so the lower-wattage bulb has the larger resistance. In series it glows brighter; in parallel it glows dimmer.`,
              t`**Drift speed at fixed V**: $v_d = \frac{eV\tau}{ml}$, which does not depend on the area of the wire. At fixed $I$, $v_d = I/(neA)$ does depend on area.`,
              t`**Symmetry**: points at the same potential can be joined or separated freely; a resistor between two equal-potential points carries no current.`,
            ],
          },
          {
            type: "example",
            title: "KCET level: a stretched wire",
            problem: "A wire of resistance 20 Ω is stretched uniformly so that its length increases by 10%. Find its new resistance.",
            steps: [
              t`Volume is constant, so $R \propto l^2$.`,
              t`$R' = 20 \times (1.1)^2 = 20 \times 1.21 = 24.2$ Ω.`,
              t`The quick estimate $\Delta R/R \approx 2 \times 10\% = 20\%$ gives 24 Ω; the exact answer is 21% more.`,
            ],
            answer: "R' = 24.2 Ω.",
          },
          {
            type: "example",
            title: "NEET level: best grouping of cells",
            problem: t`Twelve identical cells, each of emf 1.5 V and internal resistance 0.5 Ω, are to be arranged in $m$ parallel rows of $n$ cells in series to send the largest current through a 1.5 Ω resistor. Find $m$, $n$ and the current.`,
            steps: [
              t`Each row has emf $n\varepsilon$ and resistance $nr$; $m$ equal rows in parallel give emf $n\varepsilon$ and resistance $nr/m$.`,
              t`$I = \frac{n\varepsilon}{R + nr/m}$ is largest when $nr/m = R$: $0.5n/m = 1.5$, so $n = 3m$.`,
              t`With $mn = 12$: $3m^2 = 12$, $m = 2$, $n = 6$.`,
              t`$I = \frac{6 \times 1.5}{1.5 + 6 \times 0.5/2} = \frac{9}{1.5 + 1.5} = 3$ A.`,
            ],
            answer: "Two rows of 6 cells each; the current is 3 A.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A 60 W, 220 V bulb and a 100 W, 220 V bulb are joined in series across 220 V. Which glows brighter?",
                options: ["The 100 W bulb", "The 60 W bulb", "Both equally", "Neither lights"],
                answer: 1,
                explain: t`Same current in series, so brightness $\propto I^2R$. The 60 W bulb has the larger $R = V^2/P$, so it glows brighter.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: a cube of resistors",
            problem: t`Twelve equal resistors $R$ form the edges of a cube. Find the equivalent resistance between two opposite corners A and G (ends of a body diagonal).`,
            steps: [
              t`By symmetry, current $I$ entering at A splits equally into the 3 edges from A: $I/3$ each.`,
              t`Each of those 3 corners sends its current into 2 edges, so the 6 middle edges carry $I/6$ each.`,
              t`The 3 edges into G again carry $I/3$ each.`,
              t`Along any path A → G: $V = \frac{I}{3}R + \frac{I}{6}R + \frac{I}{3}R = \frac{5}{6}IR$.`,
            ],
            answer: t`$R_{AG} = \frac{5}{6}R$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: an infinite ladder",
            problem: t`An infinite ladder has a resistor $R$ in each rung of the top rail and a resistor $R$ in each vertical rung (the bottom rail has no resistance). Find the resistance between the two input terminals.`,
            steps: [
              t`Call the answer $x$. Removing the first section leaves an identical infinite ladder, which also has resistance $x$.`,
              t`The first section is $R$ in series with ($R$ parallel with $x$): $x = R + \frac{Rx}{R + x}$.`,
              t`Multiply out: $x(R + x) = R(R + x) + Rx$, so $x^2 - Rx - R^2 = 0$.`,
              t`Take the positive root: $x = \frac{R + \sqrt{R^2 + 4R^2}}{2} = \frac{1 + \sqrt{5}}{2}R \approx 1.62R$.`,
            ],
            answer: t`$x = \frac{1 + \sqrt{5}}{2}R \approx 1.62R$.`,
          },
          {
            type: "mistake",
            wrong: "In series, the 100 W bulb glows brighter because it is the more powerful bulb.",
            right: t`The rating is for 220 V across each bulb alone. In series both carry the same current, so the bulb with larger $R$ (the 60 W one, $R = V^2/P$) dissipates more power and glows brighter.`,
            why: "The wattage on the box feels like a fixed property of the bulb. It is only the power at the rated voltage; the resistance is the fixed property.",
          },
          {
            type: "mistake",
            wrong: "A thinner wire always has a larger drift velocity.",
            right: t`Only at the same **current**: $v_d = I/(neA)$. For the same **p.d.** across the same length, $v_d = eV\tau/(ml)$, which is independent of area.`,
            why: "Formulas that look different give opposite-looking answers because a different quantity is held constant. Always ask what is fixed: I or V.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "R is increased. What happens to the two meter readings?",
              emoji: "🔋",
              options: [
                "The ammeter in series with R falls; the voltmeter across the cell rises",
                "Both meters fall",
                "The voltmeter across the cell stays exactly at ε",
              ],
              answer: 0,
              trap: 2,
              explain: t`$I = \varepsilon/(R + r)$ falls as $R$ rises, so the lost volts $Ir$ fall and $V = \varepsilon - Ir$ rises towards $\varepsilon$. It equals $\varepsilon$ only when $I = 0$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed tips",
            md: "Before writing Kirchhoff equations, look for a balanced bridge or a line of symmetry; it often removes a branch. Check answers by limits: if R → ∞ the current should go to 0; if a resistor is shorted the answer should reduce to a simpler circuit.",
          },
          {
            type: "keypoints",
            items: [
              t`Stretched wire: $R \propto l^2$; small stretch $\Delta R/R \approx 2\Delta l/l$.`,
              t`Maximum power in the load when $R = r$; $P_{\max} = \varepsilon^2/4r$.`,
              t`Best grouping of identical cells: $nr/m = R$.`,
              t`Cube between body-diagonal corners: $5R/6$; infinite ladder of equal $R$: $\frac{1 + \sqrt{5}}{2}R$.`,
              "In series, the lower-wattage bulb (higher R) glows brighter.",
            ],
          },
        ],
        flashcards: [
          { front: "Stretched wire: R vs l", back: t`$R \propto l^2$ (volume constant)` },
          { front: "Maximum power transfer", back: t`$R = r$; $P_{\max} = \varepsilon^2/4r$; efficiency 50%` },
          { front: "Best grouping of N identical cells", back: t`$n$ in series, $m$ rows: maximum current when $nr/m = R$` },
          { front: "Cube of 12 resistors, body diagonal", back: t`$\frac{5}{6}R$` },
          { front: "Cube of 12 resistors, along one edge", back: t`$\frac{7}{12}R$` },
          { front: "Infinite ladder (R series, R shunt)", back: t`$\frac{1 + \sqrt{5}}{2}R$` },
          { front: "Resistance of a bulb from its rating", back: t`$R = V^2/P$` },
          { front: "Drift speed at fixed V across length l", back: t`$v_d = \dfrac{eV\tau}{ml}$, independent of area` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A wire's length is increased by 2% by stretching. The approximate percentage increase in its resistance is",
            options: ["1%", "2%", "4%", "8%"],
            answer: 2,
            explain: t`$R \propto l^2$, so $\Delta R/R \approx 2 \times 2\% = 4\%$.`,
            difficulty: 1,
          },
          {
            kind: "numeric",
            q: "A cell of emf 6 V and internal resistance 2 Ω is connected to a variable resistor. What is the maximum power that can be delivered to the resistor?",
            answer: 4.5,
            tolerance: 0.01,
            unit: "W",
            explain: t`$P_{\max} = \varepsilon^2/(4r) = 36/8 = 4.5$ W, at $R = 2$ Ω.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Twelve equal resistors R form a cube. The equivalent resistance between the two ends of one edge is",
            options: [t`$\frac{5}{6}R$`, t`$\frac{7}{12}R$`, t`$\frac{3}{4}R$`, t`$\frac{1}{2}R$`],
            answer: 1,
            explain: t`The standard results are $\frac{7}{12}R$ (edge), $\frac{3}{4}R$ (face diagonal) and $\frac{5}{6}R$ (body diagonal).`,
            difficulty: 2,
            hint: "The edge result is the smallest of the three cube results, because the two corners are closest.",
          },
          {
            kind: "numeric",
            q: "A copper wire has resistance 10 Ω at 0 °C. Its temperature coefficient is 4.0 × 10⁻³ °C⁻¹. At what temperature is its resistance 12 Ω?",
            answer: 50,
            tolerance: 0.5,
            unit: "°C",
            explain: t`$12 = 10(1 + 4.0 \times 10^{-3}\,T)$, so $T = 0.2/(4.0 \times 10^{-3}) = 50$ °C.`,
            difficulty: 1,
          },
          {
            kind: "multi",
            q: "A potential difference V is kept across a metal wire. Which changes would double the drift speed of its electrons?",
            options: ["Doubling V", "Halving the length (same V)", "Halving the area (same V and length)", "Doubling the relaxation time"],
            answers: [0, 1, 3],
            explain: t`$v_d = eV\tau/(ml)$: proportional to $V$ and $\tau$, inversely to $l$, and independent of area at fixed V.`,
            difficulty: 2,
            hint: t`Use $E = V/l$ in $v_d = eE\tau/m$.`,
          },
          {
            kind: "numeric",
            q: t`Eight identical cells of emf 2 V and internal resistance 1 Ω each are arranged to give the largest current through a 2 Ω resistor. Find that current.`,
            answer: 2,
            tolerance: 0.01,
            unit: "A",
            explain: t`Need $n \cdot 1/m = 2$ with $mn = 8$: $n = 4$, $m = 2$. $I = \frac{4 \times 2}{2 + 4/2} = \frac{8}{4} = 2$ A.`,
            difficulty: 3,
            hint: t`Set $nr/m = R$ and $mn = 8$.`,
          },
          {
            kind: "mcq",
            q: t`In a Wheatstone bridge, $P = 2$ Ω, $Q = 4$ Ω, $R = 3$ Ω, $S = 6$ Ω, a 5 Ω resistor is in the galvanometer arm and a 6 V cell of negligible resistance drives it. The current through the 5 Ω resistor is`,
            options: ["0 A", "0.4 A", "0.6 A", "1.0 A"],
            answer: 0,
            explain: t`$P/Q = 2/4 = R/S = 3/6$, so the bridge is balanced and no current flows in the middle arm, whatever resistor is there.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "An infinite ladder has 2 Ω in each series link and 2 Ω in each shunt rung. Find the input resistance (two decimal places).",
            answer: 3.24,
            tolerance: 0.02,
            unit: "Ω",
            explain: t`$x = \frac{1 + \sqrt{5}}{2} \times 2 = 1 + \sqrt{5} \approx 3.24$ Ω.`,
            difficulty: 3,
            hint: t`Removing one section leaves the same ladder: $x = R + Rx/(R + x)$.`,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Current Electricity": "c12-current-electricity",
};
