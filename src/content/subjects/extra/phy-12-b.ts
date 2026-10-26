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
  /* ------------------------------------------------------------------ */
  /* Moving Charges and Magnetism (NCERT Ch 4; ISC: Magnetic Effects…)   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-moving-charges-magnetism",
    title: "Moving Charges and Magnetism",
    icon: "🧲",
    description: "Lorentz force, motion of charges in a magnetic field, Biot–Savart law, Ampère's circuital law, solenoids, forces between parallel currents, torque on a current loop and the moving coil galvanometer.",
    lessons: [
      {
        slug: "c12-mcm-lorentz-motion",
        title: "Magnetic Force and the Motion of Charges",
        summary: "The magnetic field and the Lorentz force, the force on a current-carrying conductor, and circular and helical motion of a charge in a uniform magnetic field.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🌌",
            caption: "Charged particles from the Sun, the solar wind that ISRO's Aditya-L1 studies, spiral along Earth's magnetic field lines towards the poles and light up the sky as auroras.",
          },
          {
            type: "text",
            md: t`In 1820 Oersted saw a compass needle swing when a nearby wire carried current: **moving charges produce a magnetic field**. A static charge produces only an electric field; a moving charge produces both.

The magnetic field $\vec{B}$ is a vector field. A charge $q$ moving with velocity $\vec{v}$ in fields $\vec{E}$ and $\vec{B}$ feels the **Lorentz force** below. Its magnetic part, $q(\vec{v} \times \vec{B})$, depends on $q$, $\vec{v}$ and $\vec{B}$ and reverses for a negative charge. It is zero for a charge at rest or one moving parallel or antiparallel to $\vec{B}$. It is always **perpendicular to both** $\vec{v}$ and $\vec{B}$, with size $qvB\sin\theta$.

The SI unit of $B$ is the **tesla** (T): a charge of 1 C moving at 1 m s⁻¹ perpendicular to a 1 T field feels 1 N. A smaller unit is the gauss: 1 G = $10^{-4}$ T.`,
          },
          {
            type: "formula",
            tex: t`\vec{F} = q\left[\vec{E} + \vec{v} \times \vec{B}\right], \qquad |\vec{F}_{mag}| = qvB\sin\theta`,
            caption: "The Lorentz force. θ is the angle between v and B.",
          },
          {
            type: "table",
            headers: ["Situation", "Typical magnetic field"],
            rows: [
              ["Earth's surface", t`about $10^{-5}$ T (a fraction of a gauss)`],
              ["Small bar magnet near its pole", t`about $10^{-2}$ T`],
              ["Large laboratory electromagnet", "about 1 T"],
              ["Superconducting magnet (for example in an MRI scanner or research lab)", "a few tesla to about 10 T"],
            ],
          },
          {
            type: "text",
            md: t`**Force on a current-carrying conductor.** Take a straight rod of length $l$ and area $A$ with $n$ free electrons per unit volume, each drifting with $\vec{v}_d$. The total force on them is $(nAl)(-e)(\vec{v}_d \times \vec{B})$. Since the current is $I = neAv_d$ and points opposite to $\vec{v}_d$, this becomes $\vec{F} = I\vec{l} \times \vec{B}$, where $\vec{l}$ has length $l$ and points along the current. For a curved wire, add $I\,d\vec{l} \times \vec{B}$ over its length.`,
          },
          {
            type: "formula",
            tex: t`\vec{F} = I\,\vec{l} \times \vec{B}, \qquad F = IlB\sin\theta`,
            caption: "Direction: Fleming's left-hand rule, or the cross product (fingers from l to B, thumb gives F).",
          },
          {
            type: "example",
            title: "Floating a rod with a magnetic force",
            problem: t`A horizontal rod 0.50 m long with mass 60 g lies in a uniform horizontal magnetic field of 0.30 T at right angles to it. What current must flow so that the magnetic force balances its weight? Take $g = 9.8$ m s⁻².`,
            steps: [
              t`For balance, $IlB = mg$ with the force pointing up.`,
              t`$I = \frac{mg}{lB} = \frac{0.060 \times 9.8}{0.50 \times 0.30} = \frac{0.588}{0.15}$.`,
              t`$I \approx 3.9$ A. The direction is chosen so that $\vec{l} \times \vec{B}$ points upward.`,
            ],
            answer: "About 3.9 A.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A proton and an electron move with the same velocity at right angles to the same magnetic field. The forces on them are",
                options: ["equal in size and direction", "equal in size, opposite in direction", "different in size, same direction", "zero for the electron"],
                answer: 1,
                explain: t`$F = qvB$ has the same size because $|q| = e$ for both; the sign of $q$ reverses the direction.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Motion in a uniform magnetic field.** The magnetic force is perpendicular to $\vec{v}$, so it does **no work**: speed and kinetic energy stay constant. Only the direction of motion changes.

If $\vec{v} \perp \vec{B}$, the force $qvB$ supplies the centripetal force: $qvB = mv^2/r$. The charge moves in a **circle** of radius $r = mv/(qB)$, with angular frequency $\omega = qB/m$. The period does not depend on speed: faster particles move in bigger circles and take the same time.

If $\vec{v}$ makes an angle $\theta$ with $\vec{B}$, split it into $v_\perp = v\sin\theta$ (gives circular motion) and $v_\parallel = v\cos\theta$ (unaffected). The path is a **helix**. The distance moved along $\vec{B}$ in one turn is the **pitch**.`,
          },
          {
            type: "formula",
            tex: t`r = \frac{mv_\perp}{qB}, \qquad \omega = \frac{qB}{m}, \qquad T = \frac{2\pi m}{qB}, \qquad \nu = \frac{qB}{2\pi m}, \qquad \text{pitch } p = v_\parallel T = \frac{2\pi m v\cos\theta}{qB}`,
            caption: t`$\nu$ is called the cyclotron frequency.`,
          },
          {
            type: "example",
            title: "An electron circling in a field",
            problem: t`An electron moving at $3.0 \times 10^6$ m s⁻¹ enters a uniform field of $2.0 \times 10^{-3}$ T at right angles. Find the radius of its path and its frequency of revolution. Take $m_e = 9.1 \times 10^{-31}$ kg, $e = 1.6 \times 10^{-19}$ C.`,
            steps: [
              t`$r = \frac{mv}{eB} = \frac{9.1 \times 10^{-31} \times 3.0 \times 10^6}{1.6 \times 10^{-19} \times 2.0 \times 10^{-3}} = \frac{2.73 \times 10^{-24}}{3.2 \times 10^{-22}} = 8.5 \times 10^{-3}$ m.`,
              t`$\nu = \frac{eB}{2\pi m} = \frac{3.2 \times 10^{-22}}{2\pi \times 9.1 \times 10^{-31}} = \frac{3.2 \times 10^{-22}}{5.72 \times 10^{-30}} = 5.6 \times 10^{7}$ Hz.`,
            ],
            answer: "r ≈ 8.5 mm and ν ≈ 56 MHz.",
          },
          {
            type: "mistake",
            wrong: "A magnetic field speeds up a charged particle, just as an electric field does.",
            right: t`The magnetic force $q\vec{v} \times \vec{B}$ is always perpendicular to $\vec{v}$, so it does zero work. Speed and kinetic energy stay the same; only the direction changes.`,
            why: "A force usually means acceleration, and the particle does accelerate, but only centripetally. Speeding up needs a force component along the velocity, which only an electric field can give.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A proton moves exactly along a uniform magnetic field. Its path is…",
              emoji: "➡️",
              options: ["a circle", "a straight line at constant speed", "a helix", "a parabola"],
              answer: 1,
              trap: 0,
              explain: t`With $\theta = 0$, $\sin\theta = 0$, so the magnetic force is zero and the proton carries on in a straight line.`,
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "ISC note: crossed fields and the cyclotron",
            md: t`The rationalised NCERT book (CBSE, Karnataka PUC) has dropped motion in combined fields. **ISC** and JEE still use it.

**Velocity selector**: with $\vec{E} \perp \vec{B}$ and both perpendicular to $\vec{v}$, the electric and magnetic forces cancel when $qE = qvB$, so only particles with $v = E/B$ go straight through.

**Cyclotron**: ions circle inside two hollow "dees" in a field $B$; an alternating voltage at the cyclotron frequency $\nu = qB/(2\pi m)$ accelerates them at each gap crossing. The final kinetic energy for dee radius $R$ is $K = \frac{q^2B^2R^2}{2m}$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State the direction rule you use (cross product or Fleming's left-hand rule) when asked for the direction of force. In "show that the period is independent of speed", start from $qvB = mv^2/r$, find $r$, then $T = 2\pi r/v$; the $v$ cancels. Do not forget that only the component $v_\perp$ enters the radius.`,
          },
          {
            type: "keypoints",
            items: [
              t`Lorentz force $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$; the magnetic part is $\perp$ to $\vec{v}$ and $\vec{B}$ and does no work.`,
              t`Force on a wire: $\vec{F} = I\vec{l} \times \vec{B}$.`,
              t`$\vec{v} \perp \vec{B}$: circle with $r = mv/(qB)$, $T = 2\pi m/(qB)$ independent of speed.`,
              t`General angle: helix with pitch $p = v\cos\theta \cdot 2\pi m/(qB)$.`,
              "1 T = 10⁴ G; Earth's field is about 10⁻⁵ T.",
            ],
          },
        ],
        flashcards: [
          { front: "Lorentz force", back: t`$\vec{F} = q[\vec{E} + \vec{v} \times \vec{B}]$` },
          { front: "When is the magnetic force on a moving charge zero?", back: t`When $\vec{v}$ is parallel or antiparallel to $\vec{B}$ (or the charge is at rest).` },
          { front: "Work done by a magnetic force", back: "Zero, because the force is always perpendicular to the velocity." },
          { front: "Radius of circular path", back: t`$r = \dfrac{mv}{qB}$` },
          { front: "Period of circular motion in B", back: t`$T = \dfrac{2\pi m}{qB}$, independent of speed and radius` },
          { front: "Pitch of a helix", back: t`$p = v\cos\theta \cdot \dfrac{2\pi m}{qB}$` },
          { front: "Force on a current-carrying conductor", back: t`$\vec{F} = I\vec{l} \times \vec{B}$` },
          { front: "1 tesla in gauss", back: t`1 T = $10^4$ G` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A proton moves at $2.0 \times 10^6$ m s⁻¹ at right angles to a 0.50 T field. Find the force on it in units of $10^{-13}$ N. ($e = 1.6 \times 10^{-19}$ C)`,
            answer: 1.6,
            tolerance: 0.02,
            unit: t`× $10^{-13}$ N`,
            explain: t`$F = evB = 1.6 \times 10^{-19} \times 2.0 \times 10^6 \times 0.50 = 1.6 \times 10^{-13}$ N.`,
          },
          {
            kind: "numeric",
            q: "A 0.50 m wire carrying 4.0 A lies in a 0.30 T field at 30° to the field. Find the force on it.",
            answer: 0.3,
            tolerance: 0.01,
            unit: "N",
            explain: t`$F = IlB\sin 30° = 4.0 \times 0.50 \times 0.30 \times 0.5 = 0.30$ N.`,
          },
          {
            kind: "mcq",
            q: "If the speed of a charged particle moving perpendicular to a uniform magnetic field is doubled, its period of revolution",
            options: ["doubles", "halves", "stays the same", "becomes four times"],
            answer: 2,
            explain: t`$T = 2\pi m/(qB)$ has no $v$; the radius doubles instead.`,
          },
          {
            kind: "truefalse",
            q: "The kinetic energy of a charged particle stays constant while it moves in a purely magnetic field.",
            answer: true,
            explain: "The magnetic force is perpendicular to the velocity, so it does no work.",
          },
          {
            kind: "numeric",
            q: t`A proton ($m = 1.67 \times 10^{-27}$ kg) moves at $2.0 \times 10^6$ m s⁻¹ at 60° to a 0.10 T field. Find the pitch of its helix.`,
            answer: 0.66,
            tolerance: 0.01,
            unit: "m",
            explain: t`$T = \frac{2\pi m}{eB} = \frac{2\pi \times 1.67 \times 10^{-27}}{1.6 \times 10^{-20}} = 6.56 \times 10^{-7}$ s. $v_\parallel = v\cos 60° = 1.0 \times 10^6$ m s⁻¹, so $p = 0.66$ m.`,
            difficulty: 2,
            hint: "Use only the component of velocity along B for the pitch.",
          },
          {
            kind: "mcq",
            q: "An electron moves east in a magnetic field that points vertically upward. The force on it points",
            options: ["north", "south", "up", "west"],
            answer: 0,
            explain: t`For a positive charge $\hat{v} \times \hat{B} = \text{east} \times \text{up} = \text{south}$. The electron is negative, so the force points north.`,
            difficulty: 2,
            hint: "Find the direction for a positive charge first, then reverse it.",
          },
          {
            kind: "multi",
            q: "A charged particle enters a uniform magnetic field. Which can happen?",
            options: ["It moves in a circle", "It moves in a helix", "It moves in a straight line", "Its speed increases steadily"],
            answers: [0, 1, 2],
            explain: "Circle (v ⊥ B), helix (any other angle) and straight line (v ∥ B) are all possible. The speed never changes in a purely magnetic field.",
          },
        ],
      },
      {
        slug: "c12-mcm-biot-ampere",
        title: "Biot–Savart Law and Ampère's Circuital Law",
        summary: "The field of a current element, the field on the axis of a circular loop, Ampère's circuital law, and the fields of a long straight wire and a long solenoid.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "An MRI scanner in a hospital and the electromagnet that lifts scrap iron at a steel plant both get their fields from coils of current-carrying wire. To design them we need to calculate the field a current produces.",
          },
          {
            type: "text",
            md: t`**Biot–Savart law.** A small element $d\vec{l}$ of a wire carrying current $I$ produces at a point P (position $\vec{r}$ from the element) a field $d\vec{B}$. Its size is proportional to $I$, to $dl$, and to $\sin\theta$ (θ is the angle between $d\vec{l}$ and $\vec{r}$), and inversely proportional to $r^2$. Its direction is that of $d\vec{l} \times \vec{r}$: perpendicular to the plane containing them (right-hand screw rule). The constant $\mu_0 = 4\pi \times 10^{-7}$ T m A⁻¹ is the **permeability of free space**.`,
          },
          {
            type: "formula",
            tex: t`d\vec{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec{l} \times \vec{r}}{r^3}, \qquad |d\vec{B}| = \frac{\mu_0}{4\pi}\,\frac{I\,dl\sin\theta}{r^2}`,
            caption: t`Along the line of the element itself ($\theta = 0$) the field is zero.`,
          },
          {
            type: "table",
            headers: ["", "Coulomb's law (electric)", "Biot–Savart law (magnetic)"],
            rows: [
              ["Source", "a scalar charge q", t`a vector current element $I\,d\vec{l}$`],
              ["Distance dependence", t`$1/r^2$, long range`, t`$1/r^2$, long range`],
              ["Direction of field", "along the line joining source and point", t`perpendicular to both $d\vec{l}$ and $\vec{r}$`],
              ["Angle dependence", "none", t`$\sin\theta$; zero along the element's own line`],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Field on the axis of a circular loop** (radius $R$, current $I$, point P at distance $x$ from the centre). Every element $d\vec{l}$ is perpendicular to the line to P, whose length is $r = \sqrt{x^2 + R^2}$, so $dB = \frac{\mu_0}{4\pi}\frac{I\,dl}{x^2 + R^2}$.`,
              t`Split $d\vec{B}$ into a part along the axis and a part perpendicular to it. Elements at opposite ends of a diameter cancel the perpendicular parts.`,
              t`The axial part is $dB\cos\alpha$ with $\cos\alpha = \frac{R}{\sqrt{x^2 + R^2}}$.`,
              t`Summing $dl$ round the loop gives $2\pi R$: $B = \frac{\mu_0 I}{4\pi}\frac{2\pi R}{x^2 + R^2}\cdot\frac{R}{\sqrt{x^2 + R^2}} = \frac{\mu_0 I R^2}{2(x^2 + R^2)^{3/2}}$, along the axis.`,
            ],
          },
          {
            type: "formula",
            tex: t`B_{axis} = \frac{\mu_0 N I R^2}{2(x^2 + R^2)^{3/2}}, \qquad B_{centre} = \frac{\mu_0 N I}{2R}`,
            caption: "For a coil of N turns. Direction by the right-hand thumb rule: curl the fingers along the current, the thumb points along B.",
          },
          {
            type: "example",
            title: "Field of a circular coil",
            problem: t`A coil of 100 turns and radius 10 cm carries 2.0 A. Find the field at its centre and at a point on the axis 10 cm from the centre. Take $\mu_0 = 4\pi \times 10^{-7}$ T m A⁻¹.`,
            steps: [
              t`Centre: $B = \frac{\mu_0 NI}{2R} = \frac{4\pi \times 10^{-7} \times 100 \times 2.0}{2 \times 0.10} = 4\pi \times 10^{-4} \approx 1.26 \times 10^{-3}$ T.`,
              t`On the axis at $x = R$: $(x^2 + R^2)^{3/2} = (2R^2)^{3/2} = 2\sqrt{2}R^3$, so $B = \frac{\mu_0 NI}{2R}\cdot\frac{1}{2\sqrt{2}}$.`,
              t`$B = \frac{1.26 \times 10^{-3}}{2.83} \approx 4.4 \times 10^{-4}$ T.`,
            ],
            answer: t`About $1.26 \times 10^{-3}$ T at the centre and $4.4 \times 10^{-4}$ T at 10 cm along the axis.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The radius of a circular loop is doubled while the current stays the same. The field at its centre becomes",
                options: ["double", "half", "four times", "one quarter"],
                answer: 1,
                explain: t`$B = \mu_0 I/(2R)$, so doubling $R$ halves $B$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Ampère's circuital law.** For any closed loop (an **Amperian loop**), the line integral of $\vec{B}$ round the loop equals $\mu_0$ times the net current passing through the surface it bounds: $\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$. Signs follow the right-hand rule: curl the fingers along the direction you go round; currents along the thumb count positive.

**Long straight wire.** By symmetry, $\vec{B}$ has the same size everywhere on a circle of radius $r$ centred on the wire, and is tangent to it. Then $\oint \vec{B}\cdot d\vec{l} = B(2\pi r) = \mu_0 I$, so $B = \frac{\mu_0 I}{2\pi r}$. The field lines are concentric circles.`,
          },
          {
            type: "formula",
            tex: t`\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}, \qquad B_{wire} = \frac{\mu_0 I}{2\pi r}, \qquad B_{solenoid} = \mu_0 n I`,
            caption: "n is the number of turns per unit length of a long solenoid. Inside, the field is uniform and along the axis; outside it is nearly zero.",
          },
          {
            type: "example",
            title: "A wire and a solenoid",
            problem: t`(a) Find the field 5.0 cm from a long straight wire carrying 10 A. (b) A solenoid 0.50 m long has 500 turns and carries 3.0 A. Find the field inside it.`,
            steps: [
              t`(a) $B = \frac{\mu_0 I}{2\pi r} = \frac{2 \times 10^{-7} \times 10}{0.050} = 4.0 \times 10^{-5}$ T.`,
              t`(b) $n = 500/0.50 = 1000$ turns m⁻¹.`,
              t`$B = \mu_0 nI = 4\pi \times 10^{-7} \times 1000 \times 3.0 \approx 3.8 \times 10^{-3}$ T.`,
            ],
            answer: t`(a) $4.0 \times 10^{-5}$ T; (b) about $3.8 \times 10^{-3}$ T.`,
          },
          {
            type: "mistake",
            wrong: t`Ampère's law says the field at a point on the Amperian loop is produced only by the current enclosed by the loop.`,
            right: t`All currents, inside and outside, produce $\vec{B}$ at every point. Only the **line integral** $\oint \vec{B}\cdot d\vec{l}$ depends on the enclosed current; outside currents add zero to the integral.`,
            why: t`In the symmetric examples we use, $B$ comes out of the enclosed current, so it feels as if outside currents do nothing. The law is useful only when symmetry lets us take $B$ out of the integral.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to find B inside a long solenoid.",
              items: [
                "Choose a rectangular Amperian loop with one long side inside, along the axis",
                t`Note that $\vec{B}$ is zero outside and perpendicular to the short sides`,
                t`So $\oint \vec{B}\cdot d\vec{l} = Bh$ for an inside side of length $h$`,
                t`The loop encloses $nh$ turns, so $I_{enc} = nhI$`,
                t`Equate: $Bh = \mu_0 nhI$, so $B = \mu_0 nI$`,
              ],
              explain: "Only the inside side contributes. The answer does not depend on where inside the solenoid the loop is placed, so the field inside is uniform.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: the toroid",
            md: t`The rationalised NCERT text treats only the solenoid. **ISC**, JEE and NEET also use the **toroid** (a solenoid bent into a ring of $N$ turns): by Ampère's law, the field inside its core at radius $r$ is $B = \frac{\mu_0 NI}{2\pi r}$, and the field is zero in the open space inside the ring and outside it.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The axis-of-loop derivation is a common 5-mark question: draw the loop, mark $d\vec{l}$, $\vec{r}$ and the two components of $d\vec{B}$, and say clearly why the perpendicular parts cancel. For Ampère's law questions, state the symmetry argument (B constant and tangential on the loop) before writing $B \cdot 2\pi r$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Biot–Savart: $dB = \frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^2}$, direction $d\vec{l} \times \vec{r}$; $\mu_0 = 4\pi \times 10^{-7}$ T m A⁻¹.`,
              t`Circular loop: $B_{centre} = \mu_0 NI/2R$; on the axis $B = \mu_0 NIR^2/[2(x^2 + R^2)^{3/2}]$.`,
              t`Ampère: $\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$; useful when symmetry makes B constant on the loop.`,
              t`Long wire $B = \mu_0 I/2\pi r$; long solenoid $B = \mu_0 nI$ inside, nearly zero outside.`,
            ],
          },
        ],
        flashcards: [
          { front: "Biot–Savart law", back: t`$d\vec{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec{l} \times \vec{r}}{r^3}$` },
          { front: "Value of μ₀", back: t`$4\pi \times 10^{-7}$ T m A⁻¹` },
          { front: "Field at the centre of a circular coil", back: t`$B = \dfrac{\mu_0 NI}{2R}$` },
          { front: "Field on the axis of a circular loop", back: t`$B = \dfrac{\mu_0 IR^2}{2(x^2 + R^2)^{3/2}}$` },
          { front: "Ampère's circuital law", back: t`$\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$` },
          { front: "Field of a long straight wire", back: t`$B = \dfrac{\mu_0 I}{2\pi r}$, field lines are concentric circles` },
          { front: "Field inside a long solenoid", back: t`$B = \mu_0 nI$, uniform, along the axis` },
          { front: "Field of a toroid", back: t`$\dfrac{\mu_0 NI}{2\pi r}$ inside the core; zero elsewhere` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The magnetic field due to a current element is zero at points",
            options: ["perpendicular to the element", "along the line of the element", "very close to the element", "nowhere"],
            answer: 1,
            explain: t`$dB \propto \sin\theta$, and $\theta = 0$ or $180°$ along the element's own line.`,
          },
          {
            kind: "numeric",
            q: "A long straight wire carries 5.0 A. Find the magnetic field at 2.0 cm from it, in microtesla.",
            answer: 50,
            tolerance: 0.5,
            unit: "μT",
            explain: t`$B = \frac{2 \times 10^{-7} \times 5.0}{0.020} = 5.0 \times 10^{-5}$ T $= 50$ μT.`,
          },
          {
            kind: "numeric",
            q: "A solenoid has 2000 turns per metre and carries 0.50 A. Find the field inside it in millitesla (use π = 3.14).",
            answer: 1.26,
            tolerance: 0.02,
            unit: "mT",
            explain: t`$B = \mu_0 nI = 4 \times 3.14 \times 10^{-7} \times 2000 \times 0.50 = 1.26 \times 10^{-3}$ T.`,
          },
          {
            kind: "truefalse",
            q: "The field inside a long solenoid depends on its radius.",
            answer: false,
            explain: t`$B = \mu_0 nI$ depends only on turns per unit length and current.`,
          },
          {
            kind: "mcq",
            q: "An Amperian loop encloses currents of 3 A (upward) and 1 A (downward); a 5 A current lies outside the loop. Going round so that upward counts as positive, ∮B·dl equals",
            options: [t`$9\mu_0$`, t`$4\mu_0$`, t`$2\mu_0$`, t`$7\mu_0$`],
            answer: 2,
            explain: t`Only enclosed currents count, with signs: $3 - 1 = 2$ A, so $\oint \vec{B}\cdot d\vec{l} = 2\mu_0$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`The field on the axis of a circular loop at a distance $x \gg R$ from its centre varies as`,
            options: [t`$1/x$`, t`$1/x^2$`, t`$1/x^3$`, t`$1/x^4$`],
            answer: 2,
            explain: t`For $x \gg R$, $B \approx \mu_0 IR^2/(2x^3)$: the loop behaves like a magnetic dipole.`,
            difficulty: 2,
            hint: t`Drop $R^2$ compared with $x^2$ in the denominator.`,
          },
          {
            kind: "multi",
            q: "Which statements about the field of a long straight current-carrying wire are true?",
            options: [
              "Field lines are circles centred on the wire",
              "The field doubles when the distance halves",
              "The field points along the wire",
              "Its direction is given by the right-hand thumb rule",
            ],
            answers: [0, 1, 3],
            explain: t`$B = \mu_0 I/(2\pi r)$ goes as $1/r$, round the wire in circles, never along it.`,
          },
        ],
      },
      {
        slug: "c12-mcm-torque-galvanometer",
        title: "Parallel Currents, Torque on a Loop and the Galvanometer",
        summary: "The force between parallel currents and the ampere, the torque on a current loop and its magnetic moment, the revolving electron as a dipole, and the moving coil galvanometer with its conversion to an ammeter and voltmeter.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Force between parallel currents.** Two long parallel wires a distance $d$ apart carry currents $I_a$ and $I_b$. Wire $a$ produces a field $B_a = \frac{\mu_0 I_a}{2\pi d}$ at wire $b$, perpendicular to it. A length $L$ of wire $b$ feels $F = I_b L B_a$. So the force per unit length is $f = \frac{\mu_0 I_a I_b}{2\pi d}$, and by Newton's third law wire $a$ feels an equal and opposite force.

**Currents in the same direction attract; currents in opposite directions repel.** This is the reverse of the rule for charges.`,
          },
          {
            type: "formula",
            tex: t`f = \frac{F}{L} = \frac{\mu_0 I_a I_b}{2\pi d}`,
            caption: "Force per unit length between two long parallel wires.",
          },
          {
            type: "text",
            md: t`**The ampere.** This force was used to define the ampere: 1 A is the current which, in each of two very long, thin, straight parallel wires 1 m apart in vacuum, produces a force of $2 \times 10^{-7}$ N per metre of length. Since 2019 the SI defines the ampere by fixing the elementary charge at exactly $e = 1.602176634 \times 10^{-19}$ C, but the old definition is still asked in board exams.`,
          },
          {
            type: "example",
            title: "Force between two wires",
            problem: "Two long parallel wires 10 cm apart each carry 5.0 A in the same direction. Find the force per metre between them and say whether it is attractive or repulsive.",
            steps: [
              t`$f = \frac{\mu_0 I_a I_b}{2\pi d} = \frac{2 \times 10^{-7} \times 5.0 \times 5.0}{0.10}$.`,
              t`$f = 5.0 \times 10^{-5}$ N m⁻¹.`,
              "The currents are in the same direction, so the wires attract.",
            ],
            answer: t`$5.0 \times 10^{-5}$ N per metre, attractive.`,
          },
          {
            type: "text",
            md: t`**Torque on a current loop.** A rectangular loop of area $A$ carrying current $I$ sits in a uniform field $\vec{B}$. The forces on opposite sides are equal and opposite, so the **net force is zero**. But the forces on two sides act along different lines and form a couple. If the normal to the loop makes angle $\theta$ with $\vec{B}$, the torque is $IAB\sin\theta$. The result holds for a plane loop of any shape.

Define the **magnetic moment** $\vec{m} = NI\vec{A}$, with $\vec{A}$ along the normal given by the right-hand rule (fingers along the current). The torque is $\vec{\tau} = \vec{m} \times \vec{B}$: it turns the loop until $\vec{m}$ lines up with $\vec{B}$ (stable equilibrium). With $\vec{m}$ opposite to $\vec{B}$ the torque is also zero, but the equilibrium is unstable.`,
          },
          {
            type: "formula",
            tex: t`\vec{m} = NI\vec{A}, \qquad \vec{\tau} = \vec{m} \times \vec{B}, \qquad \tau = NIAB\sin\theta, \qquad U = -\vec{m}\cdot\vec{B}`,
            caption: "Unit of m: A m². θ is the angle between the normal (m) and B, not between the plane and B.",
          },
          {
            type: "example",
            title: "Torque on a coil",
            problem: t`A coil of 50 turns, area $4.0 \times 10^{-3}$ m², carries 2.0 A in a uniform 0.20 T field. The normal to the coil makes 30° with the field. Find its magnetic moment and the torque on it.`,
            steps: [
              t`$m = NIA = 50 \times 2.0 \times 4.0 \times 10^{-3} = 0.40$ A m².`,
              t`$\tau = mB\sin\theta = 0.40 \times 0.20 \times \sin 30° = 0.40 \times 0.20 \times 0.5 = 0.040$ N m.`,
            ],
            answer: "m = 0.40 A m² and τ = 0.040 N m.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The torque on a current loop in a uniform field is greatest when",
                options: ["the plane of the loop is perpendicular to B", "the plane of the loop is parallel to B", "the magnetic moment is along B", "the loop has no current"],
                answer: 1,
                explain: t`When the plane is parallel to $\vec{B}$, the normal is perpendicular to $\vec{B}$, so $\theta = 90°$ and $\sin\theta = 1$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**A current loop is a magnetic dipole.** Far from a loop ($x \gg R$) its axial field is $B \approx \frac{\mu_0}{4\pi}\frac{2m}{x^3}$, exactly like an electric dipole's axial field with $p \to m$ and $\frac{1}{\varepsilon_0} \to \mu_0$.

**Revolving electron.** In the Bohr model an electron circling a nucleus is a tiny current loop, $I = \frac{e}{T} = \frac{ev}{2\pi r}$. Its magnetic moment is $\mu_l = I\pi r^2 = \frac{evr}{2}$. Using angular momentum $l = m_e vr$, $\mu_l = \frac{e}{2m_e}l$; it points opposite to $\vec{l}$ because the electron is negative. With $l = \frac{h}{2\pi}$, the smallest value is the **Bohr magneton**, $\frac{eh}{4\pi m_e} \approx 9.27 \times 10^{-24}$ A m².`,
          },
          {
            type: "text",
            md: t`**Moving coil galvanometer (MCG).** A coil of $N$ turns, area $A$, can turn about a fixed axis between concave pole pieces with a soft iron cylinder at the centre. These make the field **radial**, so the plane of the coil is always parallel to $\vec{B}$ and the torque is $NIAB$ at every position. A spring gives a restoring torque $k\phi$. At equilibrium $NIAB = k\phi$, so the deflection $\phi = \left(\frac{NAB}{k}\right)I$ is proportional to the current.

**Current sensitivity** $\frac{\phi}{I} = \frac{NAB}{k}$. **Voltage sensitivity** $\frac{\phi}{V} = \frac{NAB}{kR_G}$. Doubling $N$ doubles current sensitivity, but it also roughly doubles the coil resistance $R_G$, so the voltage sensitivity may not change.

To make an **ammeter**, join a small **shunt** $S$ in parallel; to make a **voltmeter**, join a large resistance $R$ in series.`,
          },
          {
            type: "formula",
            tex: t`\text{Ammeter: } S = \frac{I_g G}{I - I_g}, \qquad \text{Voltmeter: } R = \frac{V}{I_g} - G`,
            caption: t`$G$ is the galvanometer resistance and $I_g$ its full-scale current. An ideal ammeter has zero resistance; an ideal voltmeter has infinite resistance.`,
          },
          {
            type: "example",
            title: "Converting a galvanometer",
            problem: "A galvanometer of resistance 50 Ω gives full-scale deflection for 2.0 mA. How would you convert it into (a) an ammeter of range 0–2.0 A and (b) a voltmeter of range 0–10 V?",
            steps: [
              t`(a) Shunt $S = \frac{I_g G}{I - I_g} = \frac{0.0020 \times 50}{2.0 - 0.0020} = \frac{0.10}{1.998} \approx 0.050$ Ω, joined in parallel.`,
              t`(b) Series resistance $R = \frac{V}{I_g} - G = \frac{10}{0.0020} - 50 = 5000 - 50 = 4950$ Ω.`,
            ],
            answer: "(a) About 0.050 Ω in parallel; (b) 4950 Ω in series.",
          },
          {
            type: "mistake",
            wrong: "Two parallel wires carrying current in the same direction repel each other, just as like charges repel.",
            right: t`Parallel currents in the **same** direction **attract**; antiparallel currents repel. Check with $\vec{F} = I\vec{l} \times \vec{B}$ using the field of the other wire.`,
            why: "The rule for charges (like repel) is so familiar that learners carry it over. Magnetic forces between currents follow the cross product, which gives the opposite pattern.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each galvanometer feature to its purpose.",
              pairs: [
                ["Concave pole pieces with soft iron core", "Radial field, so torque is NIAB at every angle"],
                ["Phosphor-bronze spring", "Restoring torque proportional to deflection"],
                ["Low resistance in parallel", "Converts it into an ammeter"],
                ["High resistance in series", "Converts it into a voltmeter"],
              ],
              explain: "The radial field makes the scale linear (φ ∝ I); shunts and series resistors only change the range.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`For "torque on a rectangular loop", show the forces on all four sides, say that two cancel along the same line, and then find the couple from the other two. For the galvanometer, examiners look for: radial field, $NIAB = k\phi$, and the definition of current sensitivity. Always write "in parallel" or "in series" when you give a shunt or a multiplier.`,
          },
          {
            type: "keypoints",
            items: [
              t`Parallel currents: $f = \mu_0 I_aI_b/2\pi d$; like currents attract, unlike repel.`,
              t`Loop in uniform B: net force zero, torque $\vec{\tau} = \vec{m} \times \vec{B}$ with $\vec{m} = NI\vec{A}$.`,
              t`Revolving electron: $\mu_l = (e/2m_e)l$; Bohr magneton $\approx 9.27 \times 10^{-24}$ A m².`,
              t`MCG: radial field, $\phi = (NAB/k)I$.`,
              t`Ammeter: shunt $S = I_gG/(I - I_g)$ in parallel; voltmeter: $R = V/I_g - G$ in series.`,
            ],
          },
        ],
        flashcards: [
          { front: "Force per unit length between parallel wires", back: t`$f = \dfrac{\mu_0 I_a I_b}{2\pi d}$` },
          { front: "Like currents in parallel wires", back: "Attract" },
          { front: "Old definition of 1 ampere", back: t`The current in two long parallel wires 1 m apart in vacuum that gives a force of $2 \times 10^{-7}$ N per metre.` },
          { front: "Magnetic moment of a coil", back: t`$\vec{m} = NI\vec{A}$, unit A m²` },
          { front: "Torque on a current loop", back: t`$\vec{\tau} = \vec{m} \times \vec{B}$` },
          { front: "Bohr magneton", back: t`$\dfrac{eh}{4\pi m_e} \approx 9.27 \times 10^{-24}$ A m²` },
          { front: "Why a radial field in a galvanometer?", back: "The plane of the coil is always along B, so the torque is NIAB at every position and φ ∝ I." },
          { front: "Shunt for an ammeter", back: t`$S = \dfrac{I_g G}{I - I_g}$, in parallel` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Two long parallel wires 5.0 cm apart carry 10 A and 4.0 A. Find the force per metre on each, in units of 10⁻⁴ N m⁻¹.",
            answer: 1.6,
            tolerance: 0.02,
            unit: "× 10⁻⁴ N m⁻¹",
            explain: t`$f = \frac{2 \times 10^{-7} \times 10 \times 4.0}{0.050} = 1.6 \times 10^{-4}$ N m⁻¹. Both wires feel the same size of force.`,
          },
          {
            kind: "mcq",
            q: "A current loop in a uniform magnetic field experiences",
            options: ["a net force and a torque", "a net force but no torque", "a torque but no net force (in general)", "neither force nor torque"],
            answer: 2,
            explain: "The forces on opposite sides cancel in a uniform field, but they can form a couple.",
          },
          {
            kind: "numeric",
            q: "A galvanometer of resistance 20 Ω shows full-scale deflection for 5.0 mA. What series resistance makes it a 0–5.0 V voltmeter?",
            answer: 980,
            tolerance: 0.5,
            unit: "Ω",
            explain: t`$R = V/I_g - G = 5.0/0.0050 - 20 = 1000 - 20 = 980$ Ω.`,
          },
          {
            kind: "truefalse",
            q: "Doubling the number of turns of a galvanometer coil always doubles its voltage sensitivity.",
            answer: false,
            explain: t`Current sensitivity doubles, but the coil resistance also roughly doubles, so $NAB/(kR_G)$ may stay about the same.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A circular coil of radius 7.0 cm and 20 turns carries 0.50 A in a field of 0.10 T. The maximum torque on it is about (π = 22/7)",
            options: ["0.0154 N m", "0.0077 N m", "0.154 N m", "0.0031 N m"],
            answer: 0,
            explain: t`$A = \frac{22}{7} \times 0.07^2 = 0.0154$ m². $\tau_{\max} = NIAB = 20 \times 0.50 \times 0.0154 \times 0.10 = 0.0154$ N m.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The magnetic moment of an electron in a circular orbit and its orbital angular momentum are",
            options: ["parallel", "antiparallel", "perpendicular", "unrelated in direction"],
            answer: 1,
            explain: t`$\vec{\mu}_l = -\frac{e}{2m_e}\vec{l}$; the minus sign comes from the electron's negative charge.`,
          },
          {
            kind: "multi",
            q: "Which of these increase the current sensitivity of a moving coil galvanometer?",
            options: ["More turns on the coil", "A stronger magnetic field", "A stiffer spring (larger k)", "A larger coil area"],
            answers: [0, 1, 3],
            explain: t`Current sensitivity is $NAB/k$: it rises with $N$, $A$ and $B$, and falls with $k$.`,
          },
        ],
      },
      {
        slug: "c12-mcm-exam-edge",
        title: "Exam edge: Moving Charges and Magnetism",
        summary: "What JEE, NEET, KCET and COMEDK ask from this chapter: radius comparisons, fields of wire-and-arc shapes, galvanometer conversions, particles crossing a field region, and the usual traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What it asks from this chapter"],
            rows: [
              ["NEET", "radius and period of charged particles, field at the centre of loops and arcs, force between wires, galvanometer conversion; usually 2–3 questions"],
              ["JEE Main", "fields of combinations (straight segments + arcs), helix pitch, velocity selector, torque on loops, Ampère's law for thick wires and toroids"],
              ["JEE Advanced", "particles crossing a field strip, combined E and B, non-uniform current distributions, forces on curved wires, multi-correct reasoning"],
              ["KCET / COMEDK", "direct formula use: r = mv/qB, B at the centre of a coil, solenoid, shunt and multiplier values"],
            ],
          },
          {
            type: "heading",
            text: "Results worth remembering",
          },
          {
            type: "formula",
            tex: t`B_{\text{finite wire}} = \frac{\mu_0 I}{4\pi d}(\sin\alpha + \sin\beta), \qquad B_{\text{arc}} = \frac{\mu_0 I}{4\pi R}\,\theta \;\; (\theta \text{ in radians})`,
            caption: "α and β are the angles subtended at the point by the two ends, measured from the perpendicular. A semi-infinite wire, at a point opposite its end: μ₀I/(4πd). A full circle (θ = 2π) gives μ₀I/(2R).",
          },
          {
            type: "list",
            items: [
              t`**Radius in three forms**: $r = \frac{mv}{qB} = \frac{p}{qB} = \frac{\sqrt{2mK}}{qB} = \frac{1}{B}\sqrt{\frac{2mV}{q}}$ (accelerated from rest through $V$). Pick the form that matches what is equal.`,
              t`**Square loop** of side $a$: field at the centre $= \frac{2\sqrt{2}\,\mu_0 I}{\pi a}$ (four finite wires, each with $\alpha = \beta = 45°$).`,
              t`**Field strip**: a particle entering a field region of width $d$ at right angles turns through $\theta$ with $\sin\theta = d/r$ if $d < r$; if $d \ge r$ it comes back out after a semicircle.`,
              t`**Time in the field** $= \theta/\omega = \theta m/(qB)$, independent of speed for a given angle.`,
              t`**Uniform field, any closed loop**: net force zero. **Any shaped wire** from P to Q in a uniform field feels the same force as a straight wire from P to Q.`,
            ],
          },
          {
            type: "example",
            title: "KCET level: comparing radii",
            problem: "A proton and an alpha particle are accelerated from rest through the same potential difference and then enter the same uniform field at right angles. Find the ratio of their radii.",
            steps: [
              t`$r = \frac{1}{B}\sqrt{\frac{2mV}{q}}$, so $r \propto \sqrt{m/q}$.`,
              t`Proton: $m/q = m_p/e$. Alpha: $m/q = 4m_p/2e = 2m_p/e$.`,
              t`$\frac{r_\alpha}{r_p} = \sqrt{2}$.`,
            ],
            answer: t`$r_\alpha : r_p = \sqrt{2} : 1$.`,
          },
          {
            type: "example",
            title: "NEET level: one galvanometer, two meters",
            problem: "A galvanometer of resistance 100 Ω gives full-scale deflection at 1.0 mA. Find the resistance needed to make (a) a 0–5.0 V voltmeter and (b) a 0–1.0 A ammeter. What is the resistance of the ammeter?",
            steps: [
              t`(a) $R = V/I_g - G = 5.0/0.0010 - 100 = 4900$ Ω in series.`,
              t`(b) $S = \frac{I_g G}{I - I_g} = \frac{0.0010 \times 100}{0.999} \approx 0.10$ Ω in parallel.`,
              t`Ammeter resistance $= \frac{GS}{G + S} \approx S \approx 0.10$ Ω.`,
            ],
            answer: "(a) 4900 Ω in series; (b) about 0.10 Ω in parallel, giving an ammeter of about 0.10 Ω.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A proton and an alpha particle enter the same field at right angles with the same kinetic energy. The ratio r_α : r_p is",
                options: ["1 : 1", "2 : 1", "1 : 2", t`$\sqrt{2} : 1$`],
                answer: 0,
                explain: t`$r = \sqrt{2mK}/(qB) \propto \sqrt{m}/q$: alpha gives $\sqrt{4}/2 = 1$, the same as the proton.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: a hairpin wire",
            problem: t`A long wire is bent into a hairpin: two long parallel straight parts joined by a semicircle of radius 5.0 cm. It carries 10 A. Find the field at the centre of the semicircle.`,
            steps: [
              t`Semicircle ($\theta = \pi$): $B_1 = \frac{\mu_0 I}{4R} = \frac{4\pi \times 10^{-7} \times 10}{4 \times 0.050} = 6.28 \times 10^{-5}$ T.`,
              t`Each straight part is a semi-infinite wire ending opposite the centre: $B = \frac{\mu_0 I}{4\pi R} = \frac{10^{-7} \times 10}{0.050} = 2.0 \times 10^{-5}$ T. Two of them give $4.0 \times 10^{-5}$ T.`,
              t`By the right-hand rule all three contributions point the same way (out of the plane for one sense of current), so they add.`,
              t`$B = 6.28 \times 10^{-5} + 4.0 \times 10^{-5} \approx 1.03 \times 10^{-4}$ T, which is $\frac{\mu_0 I}{4R}\left(1 + \frac{2}{\pi}\right)$.`,
            ],
            answer: t`About $1.0 \times 10^{-4}$ T, perpendicular to the plane of the hairpin.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: crossing a field strip",
            problem: t`A proton moving at $1.0 \times 10^6$ m s⁻¹ enters, at right angles to its edge, a region 5.2 cm wide that has a uniform 0.10 T field perpendicular to its velocity. Find the angle through which it is deflected and the time it spends in the field. ($m_p = 1.67 \times 10^{-27}$ kg, $e = 1.6 \times 10^{-19}$ C)`,
            steps: [
              t`$r = \frac{mv}{eB} = \frac{1.67 \times 10^{-27} \times 10^6}{1.6 \times 10^{-19} \times 0.10} = 0.104$ m $= 10.4$ cm.`,
              t`$d = 5.2$ cm $< r$, so it crosses the strip. $\sin\theta = d/r = 5.2/10.4 = 0.50$, so $\theta = 30° = \pi/6$.`,
              t`$\omega = eB/m = 1.6 \times 10^{-20}/1.67 \times 10^{-27} = 9.58 \times 10^6$ rad s⁻¹.`,
              t`$t = \theta/\omega = 0.524/(9.58 \times 10^6) \approx 5.5 \times 10^{-8}$ s. It leaves at the same speed, $1.0 \times 10^6$ m s⁻¹.`,
            ],
            answer: t`Deflected by 30°, after about 55 ns in the field.`,
          },
          {
            type: "mistake",
            wrong: "An alpha particle has twice the charge of a proton, so in the same field it always moves in a smaller circle.",
            right: t`It depends on what is equal. Same speed: $r_\alpha = 2r_p$. Same momentum: $r_\alpha = r_p/2$. Same kinetic energy: $r_\alpha = r_p$. Same accelerating voltage: $r_\alpha = \sqrt{2}\,r_p$.`,
            why: "Learners look only at q and forget that the alpha particle is also four times heavier. Write r in the form that contains the quantity held equal.",
          },
          {
            type: "mistake",
            wrong: t`For $\theta$ in $\tau = NIAB\sin\theta$, I use the angle between the plane of the coil and the field.`,
            right: t`$\theta$ is the angle between the **normal** (the magnetic moment) and $\vec{B}$. If the plane makes angle $\phi$ with $\vec{B}$, then $\tau = NIAB\cos\phi$.`,
            why: "Questions often give the angle with the plane. Using it directly swaps sine and cosine and gives a wrong answer that is still a believable number.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Can a magnetic field alone do this?",
              groups: ["Yes", "No"],
              items: [
                { text: "Change the direction of an electron's velocity", group: 0, hint: "The force is perpendicular to v, so it turns the path." },
                { text: "Increase a proton's kinetic energy", group: 1, hint: "The magnetic force does no work." },
                { text: "Push on a charge at rest", group: 1, hint: "F = qvB sin θ is zero when v = 0." },
                { text: "Make an ion move in a helix", group: 0, hint: "A velocity at an angle to B gives a helix." },
                { text: "Turn a current loop", group: 0, hint: "Torque = m × B." },
                { text: "Give a net force on a closed loop in a uniform field", group: 1, hint: "The forces on a closed loop in a uniform field cancel." },
              ],
              explain: "A magnetic field can only turn moving charges and twist current loops; in a uniform field it gives no net force on a closed loop and never changes kinetic energy.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed tips",
            md: "For shapes made of straight parts and arcs, add the contributions with signs (into or out of the page) one by one. A straight part whose line passes through the point contributes nothing. In multi-correct questions, test each option against the fact that magnetic forces do no work.",
          },
          {
            type: "keypoints",
            items: [
              t`$r = mv/qB = \sqrt{2mK}/qB = \sqrt{2mV/q}/B$; choose the form by what is equal.`,
              t`Arc: $B = \mu_0 I\theta/(4\pi R)$; finite wire: $\frac{\mu_0 I}{4\pi d}(\sin\alpha + \sin\beta)$.`,
              t`Strip of width $d$: $\sin\theta = d/r$ when $d < r$.`,
              t`$\theta$ in $\tau = NIAB\sin\theta$ is measured from the normal.`,
              "Closed loop in uniform B: no net force, only torque.",
            ],
          },
        ],
        flashcards: [
          { front: "Field at the centre of an arc of angle θ", back: t`$B = \dfrac{\mu_0 I \theta}{4\pi R}$` },
          { front: "Field of a finite straight wire", back: t`$B = \dfrac{\mu_0 I}{4\pi d}(\sin\alpha + \sin\beta)$` },
          { front: "Field at the centre of a square loop of side a", back: t`$B = \dfrac{2\sqrt{2}\,\mu_0 I}{\pi a}$` },
          { front: "Radius in terms of kinetic energy", back: t`$r = \dfrac{\sqrt{2mK}}{qB}$` },
          { front: "Radius after acceleration through V", back: t`$r = \dfrac{1}{B}\sqrt{\dfrac{2mV}{q}}$` },
          { front: "Deflection in a field strip of width d < r", back: t`$\sin\theta = d/r$` },
          { front: "Force on a curved wire PQ in uniform B", back: t`Same as on a straight wire from P to Q: $I\,\vec{PQ} \times \vec{B}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A proton, a deuteron and an alpha particle are accelerated through the same potential difference and enter the same uniform field at right angles. Their radii are in the ratio",
            options: [t`$1 : \sqrt{2} : \sqrt{2}$`, "1 : 2 : 2", t`$1 : \sqrt{2} : 2$`, "1 : 1 : 1"],
            answer: 0,
            explain: t`$r \propto \sqrt{m/q}$: proton $\sqrt{1}$, deuteron $\sqrt{2/1}$, alpha $\sqrt{4/2}$.`,
            difficulty: 2,
            hint: t`Use $r = \frac{1}{B}\sqrt{2mV/q}$.`,
          },
          {
            kind: "numeric",
            q: "A square loop of side 10 cm carries 2.0 A. Find the magnetic field at its centre in microtesla.",
            answer: 22.6,
            tolerance: 0.3,
            unit: "μT",
            explain: t`$B = \frac{2\sqrt{2}\mu_0 I}{\pi a} = 2\sqrt{2} \times 4 \times 10^{-7} \times \frac{2.0}{0.10} = 2.26 \times 10^{-5}$ T.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A wire bent into a semicircle of radius 3.14 cm carries 5.0 A (the straight leads point radially, away from the centre). Find the field at the centre in microtesla.",
            answer: 50,
            tolerance: 0.5,
            unit: "μT",
            explain: t`Radial leads point at the centre and contribute nothing. $B = \frac{\mu_0 I}{4R} = \frac{4\pi \times 10^{-7} \times 5.0}{4 \times 0.0314} = \frac{\pi \times 5 \times 10^{-7}}{0.0314} = 5.0 \times 10^{-5}$ T.`,
            difficulty: 2,
            hint: "A wire whose line passes through the point gives zero field there.",
          },
          {
            kind: "multi",
            q: t`A particle of charge $q$ and mass $m$ moves in a uniform field $\vec{B}$ with velocity at angle $\theta$ (0 < θ < 90°) to $\vec{B}$. Which are correct?`,
            options: [
              "Its speed stays constant",
              t`Its period of revolution is $2\pi m/(qB)$`,
              "The pitch of its path increases with θ",
              "The radius of its path increases with θ",
            ],
            answers: [0, 1, 3],
            explain: t`Speed is constant; $T$ does not depend on angle; $r \propto v\sin\theta$ grows with $\theta$, while the pitch $\propto v\cos\theta$ shrinks.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A coil carrying current is placed with its plane at 30° to a uniform magnetic field. If the maximum possible torque on it is τ₀, the torque now is",
            options: [t`$\tau_0/2$`, t`$\frac{\sqrt{3}}{2}\tau_0$`, t`$\tau_0$`, "zero"],
            answer: 1,
            explain: t`The normal makes $60°$ with $\vec{B}$, so $\tau = \tau_0\sin 60° = \frac{\sqrt{3}}{2}\tau_0$.`,
            difficulty: 2,
            hint: "Convert the angle with the plane into the angle with the normal.",
          },
          {
            kind: "numeric",
            q: "A proton enters a 0.20 T field region of width 10 cm at right angles to its edge with speed 1.0 × 10⁶ m s⁻¹. Through what angle (in degrees) is it deflected? (m = 1.67 × 10⁻²⁷ kg, e = 1.6 × 10⁻¹⁹ C)",
            answer: 180,
            tolerance: 0.5,
            unit: "degrees",
            explain: t`$r = \frac{mv}{eB} = \frac{1.67 \times 10^{-21}}{3.2 \times 10^{-20}} = 0.052$ m. The strip is wider than $r$, so the proton turns back after a semicircle: deflection 180°.`,
            difficulty: 3,
            hint: "Compare the radius with the width before using sin θ = d/r.",
          },
          {
            kind: "mcq",
            q: "Two long parallel wires carry equal currents in opposite directions, 2d apart. The magnetic field midway between them is",
            options: ["zero", t`$\frac{\mu_0 I}{2\pi d}$`, t`$\frac{\mu_0 I}{\pi d}$`, t`$\frac{\mu_0 I}{4\pi d}$`],
            answer: 2,
            explain: t`Each gives $\frac{\mu_0 I}{2\pi d}$; for opposite currents the fields midway point the same way and add to $\frac{\mu_0 I}{\pi d}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A charged particle moves in a circle of radius 4.0 cm in a uniform field. If its kinetic energy is made four times larger, what is the new radius in cm?",
            answer: 8,
            tolerance: 0.01,
            unit: "cm",
            explain: t`$r \propto \sqrt{K}$, so $r' = 4.0 \times \sqrt{4} = 8.0$ cm.`,
            difficulty: 1,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Current Electricity": "c12-current-electricity",
  "12:Moving Charges and Magnetism": "c12-moving-charges-magnetism",
};
