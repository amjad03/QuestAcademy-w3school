import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "electronics";
/** Syllabus family: chapter titles below are matched against `ele` rows in src/content/syllabus/. */
export const family = "ele";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Introduction to Electronics                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-ele-introduction",
    title: "Introduction to Electronics",
    icon: "📡",
    description: "What electronics is, its milestones, active and passive components, analog and digital signals, and the basic electrical quantities and sources.",
    lessons: [
      {
        slug: "c11-ele-what-is-electronics",
        title: "What Electronics Is and How It Grew",
        summary: "Electronics versus electrical engineering, the milestones from the vacuum diode to the microprocessor, active and passive components, and analog and digital signals.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "📱",
            caption: "A phone in your pocket holds billions of transistors on chips smaller than a fingernail. A hundred years ago the same job would have needed a building full of glass valves.",
          },
          {
            type: "text",
            md: "**Electronics** is the branch of science and engineering that deals with the **controlled flow of charge carriers** (electrons and holes) through vacuum, gases and, today mostly, **semiconductors**. The devices that do the controlling are called **electronic devices**: diodes, transistors and integrated circuits.",
          },
          {
            type: "text",
            md: "**Electrical** engineering is mainly about *generating, transmitting and using* electric power: generators, transmission lines, motors, heaters. The currents are large and the aim is to deliver energy. **Electronics** is mainly about *processing information*: amplifying a weak signal, switching, counting, storing and communicating. The currents are usually small (milliamperes or microamperes) and the aim is to control a signal.\n\nThe two overlap. A ceiling fan is electrical, but its electronic regulator uses a semiconductor switch to control its speed.",
          },
          {
            type: "heading",
            text: "Milestones in electronics",
          },
          {
            type: "table",
            headers: ["Year", "Milestone", "Who / where"],
            rows: [
              ["1883", "Edison effect: current flows from a hot filament to a nearby plate in vacuum (thermionic emission)", "Thomas Edison"],
              ["1904", "Vacuum diode (Fleming valve), used to detect radio signals", "J. A. Fleming"],
              ["1906", "Vacuum triode (Audion): a grid controls the current, so it can amplify", "Lee de Forest"],
              ["1947", "Point-contact transistor", "Bardeen, Brattain and Shockley, Bell Laboratories"],
              ["1958–59", "Integrated circuit (IC): many components on one chip", "Jack Kilby (Texas Instruments), Robert Noyce (Fairchild)"],
              ["1971", "First commercial microprocessor, the Intel 4004", "Intel"],
            ],
          },
          {
            type: "text",
            md: "Each step made devices **smaller, cheaper, more reliable and less power-hungry**. A vacuum tube needs a heated filament, warms up slowly and burns out. A transistor needs no heater, works instantly and lasts for decades. ICs then packed thousands, and now billions, of transistors onto one chip.",
          },
          {
            type: "text",
            md: "Components are sorted into two kinds.\n\n**Passive components** cannot amplify a signal or control current with another signal. They only resist, store or transfer energy: **resistors, capacitors, inductors and transformers**.\n\n**Active components** can control the flow of current and give **power gain** (amplification) or switching, drawing the extra energy from a DC supply: **transistors, vacuum tubes and ICs**. Board textbooks also list **diodes** with the active devices, because they are semiconductor devices that control the direction of current.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each component as active or passive.",
              groups: ["Active", "Passive"],
              items: [
                { text: "Bipolar junction transistor", group: 0, hint: "A small base current controls a large collector current, so it can amplify." },
                { text: "Carbon resistor", group: 1, hint: "It only opposes current and turns energy into heat." },
                { text: "Electrolytic capacitor", group: 1, hint: "It stores energy in an electric field; it cannot amplify." },
                { text: "Op-amp IC", group: 0, hint: "An IC full of transistors with a very large gain." },
                { text: "Step-down transformer", group: 1, hint: "It raises current but lowers voltage; output power is never more than input power." },
                { text: "Vacuum triode", group: 0, hint: "The grid voltage controls the plate current, so it amplifies." },
                { text: "Inductor coil", group: 1, hint: "It stores energy in a magnetic field." },
              ],
              explain: "Ask one question: **can it give power gain or control current with a signal?** If yes, it is active. A transformer can step *voltage* up, but never *power*, so it is passive.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which device first made amplification possible?",
                options: ["Vacuum diode", "Vacuum triode", "Carbon resistor", "Transformer"],
                answer: 1,
                explain: "The triode added a control **grid** between the cathode and the plate. A small grid voltage controls a large plate current, which is amplification. The diode only lets current flow one way.",
              },
            ],
          },
          {
            type: "heading",
            text: "Analog and digital signals",
          },
          {
            type: "text",
            md: "A **signal** is a voltage or current that carries information. An **analog signal** varies **continuously** and can take any value in a range, such as the voltage from a microphone or a thermocouple. A **digital signal** has only a few **discrete levels**, usually two: LOW (0) and HIGH (1), as inside a computer or on a USB cable.\n\nDigital signals are less affected by noise, because a circuit only has to tell HIGH from LOW. That is why music, photos and phone calls are now converted to digital form for storage and transmission.",
          },
          {
            type: "example",
            title: "Reading a system",
            problem: "A digital thermometer has a temperature sensor, an amplifier IC, an analog-to-digital converter (ADC), a microcontroller and an LCD display. Say which parts handle analog signals and which handle digital signals.",
            steps: [
              "The sensor gives a small voltage that rises smoothly with temperature, so its output is **analog**.",
              "The amplifier makes that small voltage bigger without changing its shape, so it is still **analog**.",
              "The ADC takes the analog voltage in and gives out a binary number, so it is the boundary: analog in, **digital** out.",
              "The microcontroller and the LCD work on binary numbers, so they handle **digital** signals.",
            ],
            answer: "Sensor and amplifier: analog. ADC: analog in, digital out. Microcontroller and display: digital.",
          },
          {
            type: "mistake",
            wrong: "An active device like a transistor creates energy, so its output power comes from nowhere.",
            right: "An active device only **controls** energy taken from a DC power supply. The extra output power comes from the supply, not from the device.",
            why: "Because the output signal is bigger than the input, it looks as if the transistor makes power. Energy is still conserved: remove the battery and the transistor gives no gain at all.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Short answers on this chapter are common: define electronics, name two active and two passive components, state one advantage of a transistor over a vacuum tube (no heater, small size, low power, long life, works instantly), and give the difference between analog and digital signals with one example each.",
          },
          {
            type: "keypoints",
            items: [
              "Electronics controls the flow of charge carriers in vacuum, gas or semiconductors, mainly to process information.",
              "Milestones: Edison effect (1883), vacuum diode (1904), triode (1906), transistor (1947), IC (1958–59), microprocessor (1971).",
              "Passive: R, L, C, transformer. Active: transistors, tubes, ICs (and diodes in board books).",
              "Analog signals vary continuously; digital signals have discrete levels (0 and 1) and resist noise better.",
            ],
          },
        ],
        flashcards: [
          { front: "Electronics", back: "The study and use of devices that control the flow of charge carriers (electrons, holes) in vacuum, gases or semiconductors." },
          { front: "Who invented the transistor, and when?", back: "Bardeen, Brattain and Shockley at Bell Laboratories, in 1947." },
          { front: "Who made the first integrated circuits?", back: "Jack Kilby (Texas Instruments, 1958) and Robert Noyce (Fairchild, 1959)." },
          { front: "Active component", back: "One that can control current and give power gain or switching, using energy from a DC supply. Examples: transistor, IC, vacuum tube." },
          { front: "Passive component", back: "One that cannot amplify; it only resists, stores or transfers energy. Examples: resistor, capacitor, inductor, transformer." },
          { front: "Analog signal", back: "A signal that varies continuously and can take any value in a range, e.g. microphone output." },
          { front: "Digital signal", back: "A signal with discrete levels, usually LOW (0) and HIGH (1)." },
          { front: "Two advantages of transistors over vacuum tubes", back: "No heater needed (works instantly, low power) and much smaller, cheaper and longer-lasting." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Thermionic emission from a heated filament in vacuum was first noticed as the:",
            options: ["Hall effect", "Edison effect", "Photoelectric effect", "Zener effect"],
            answer: 1,
            explain: "Edison saw current flow from a hot filament to a separate plate in 1883. Fleming used it to build the vacuum diode in 1904.",
          },
          {
            kind: "multi",
            q: "Select all the passive components.",
            options: ["Inductor", "Transistor", "Capacitor", "Transformer", "Integrated circuit"],
            answers: [0, 2, 3],
            explain: "Inductors, capacitors and transformers only store or transfer energy. Transistors and ICs can amplify, so they are active.",
          },
          {
            kind: "truefalse",
            q: "A step-up transformer is an active component because its output voltage is larger than its input voltage.",
            answer: false,
            explain: "It raises voltage but lowers current. Output power is never more than input power, so there is no power gain. It is passive.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The vacuum triode could amplify because of its third electrode, the control ___.",
            answer: ["grid"],
            explain: "The grid sits between cathode and plate; a small change in grid voltage gives a large change in plate current.",
          },
          {
            kind: "mcq",
            q: "Why are digital signals preferred for storing and sending information?",
            options: [
              "They can take every value in a range",
              "They are less affected by noise, since only HIGH and LOW must be told apart",
              "They need no power supply",
              "They travel faster than light",
            ],
            answer: 1,
            explain: "Small noise added to a digital signal does not change whether it is read as 0 or 1, so the information survives.",
          },
          {
            kind: "order",
            q: "Put these devices in the order they were invented, earliest first.",
            items: ["Vacuum diode", "Vacuum triode", "Transistor", "Integrated circuit", "Microprocessor"],
            explain: "1904, 1906, 1947, 1958–59, 1971.",
          },
          {
            kind: "mcq",
            q: "The output of a microphone is best described as:",
            options: ["A digital signal", "An analog signal", "A DC supply", "A binary code"],
            answer: 1,
            explain: "The microphone voltage follows the sound wave smoothly, so it is analog. It becomes digital only after an ADC.",
          },
        ],
      },
      {
        slug: "c11-ele-quantities-sources",
        title: "Charge, Current, Voltage, Power and Sources",
        summary: "The basic electrical quantities and their units, ideal and practical voltage and current sources, internal resistance and source conversion.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Before we analyse circuits, we need the quantities every circuit is built from. A torch cell, a phone charger and a solar panel all do one job: they push charge around a circuit and deliver energy to it.",
          },
          {
            type: "text",
            md: "**Charge** ($Q$) is measured in coulombs (C). One electron carries $e = 1.6 \\times 10^{-19}$ C, so 1 C is the charge of $6.25 \\times 10^{18}$ electrons.\n\n**Current** ($I$) is the rate of flow of charge, in amperes (A). By convention, current flows from + to − in the external circuit; electrons actually move the other way.\n\n**Voltage** or potential difference ($V$) is the work done per unit charge in moving it between two points, in volts (V). **Power** ($P$) is the rate of doing work, in watts (W).",
          },
          {
            type: "formula",
            tex: t`I = \frac{Q}{t} = \frac{ne}{t} \qquad V = \frac{W}{Q} \qquad P = VI = I^2R = \frac{V^2}{R} \qquad W = Pt`,
            caption: "Electrical energy is often billed in kilowatt-hours: 1 kWh = 1 unit = 3.6 × 10⁶ J.",
          },
          {
            type: "example",
            title: "Electrons to current",
            problem: t`$3 \times 10^{19}$ electrons pass through a wire in 2 s. Find the current. (Take $e = 1.6 \times 10^{-19}$ C.)`,
            steps: [
              t`Charge: $Q = ne = 3 \times 10^{19} \times 1.6 \times 10^{-19} = 4.8$ C.`,
              t`Current: $I = Q/t = 4.8/2 = 2.4$ A.`,
            ],
            answer: "I = 2.4 A.",
          },
          {
            type: "table",
            headers: ["Prefix", "Symbol", "Factor", "Typical use"],
            rows: [
              ["mega", "M", t`$10^{6}$`, "1 MΩ resistor"],
              ["kilo", "k", t`$10^{3}$`, "4.7 kΩ resistor"],
              ["milli", "m", t`$10^{-3}$`, "20 mA LED current"],
              ["micro", "µ", t`$10^{-6}$`, "100 µF capacitor"],
              ["nano", "n", t`$10^{-9}$`, "10 nF capacitor"],
              ["pico", "p", t`$10^{-12}$`, "22 pF capacitor"],
            ],
          },
          {
            type: "heading",
            text: "Voltage sources",
          },
          {
            type: "text",
            md: "An **ideal voltage source** keeps the same terminal voltage whatever current is drawn; its internal resistance is **zero**. A **practical voltage source** (a cell, a battery) has a small **internal resistance** $r$ in series with its EMF $E$. When it supplies current $I$, a voltage $Ir$ is lost inside, so the terminal voltage falls as the load current rises.",
          },
          {
            type: "formula",
            tex: t`I = \frac{E}{R + r} \qquad V_{\text{terminal}} = E - Ir = IR`,
            caption: "A good voltage source has r much smaller than the load resistance R.",
          },
          {
            type: "example",
            title: "Terminal voltage of a battery",
            problem: "A 12 V battery has internal resistance 0.5 Ω. It is connected to a 5.5 Ω load. Find the current and the terminal voltage.",
            steps: [
              t`Total resistance $= R + r = 5.5 + 0.5 = 6\ \Omega$.`,
              t`Current $I = E/(R + r) = 12/6 = 2$ A.`,
              t`Lost volts $= Ir = 2 \times 0.5 = 1$ V.`,
              t`Terminal voltage $= E - Ir = 12 - 1 = 11$ V. Check: $IR = 2 \times 5.5 = 11$ V.`,
            ],
            answer: "I = 2 A and the terminal voltage is 11 V.",
          },
          {
            type: "text",
            md: t`An **ideal current source** delivers the same current whatever the load; its internal resistance is **infinite**. A **practical current source** is an ideal current source $I_s$ with a large resistance $r$ in **parallel**.

The two practical sources are interchangeable for the load (**source transformation**): a voltage source $E$ with series $r$ equals a current source $I_s = E/r$ with the same $r$ in parallel, and back again with $E = I_s r$.`,
          },
          {
            type: "example",
            title: "Source conversion",
            problem: "Convert a 12 V source with 0.5 Ω internal resistance into an equivalent current source. Check that both give the same current in a 5.5 Ω load.",
            steps: [
              t`$I_s = E/r = 12/0.5 = 24$ A, with $r = 0.5\ \Omega$ in parallel.`,
              t`With the load connected, the 24 A divides between $0.5\ \Omega$ and $5.5\ \Omega$. Load current $= 24 \times \frac{0.5}{0.5 + 5.5} = 24 \times \frac{1}{12} = 2$ A.`,
              "This matches the 2 A found with the voltage source, so the conversion is correct.",
            ],
            answer: "A 24 A current source in parallel with 0.5 Ω; the load current is 2 A either way.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A cell of EMF 1.5 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. What is the terminal voltage (in V)?",
                answer: 1.25,
                tolerance: 0.01,
                unit: "V",
                explain: t`$I = 1.5/(2.5 + 0.5) = 0.5$ A, so $V = IR = 0.5 \times 2.5 = 1.25$ V.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "An ideal current source has zero internal resistance, just like an ideal voltage source.",
            right: "An ideal voltage source has **zero** internal resistance; an ideal current source has **infinite** internal resistance.",
            why: "Zero sounds like the 'perfect' value for any source. But a resistance in parallel with a current source steals current from the load, so it must be infinite for no current to be lost. A series resistance with a voltage source drops voltage, so that one must be zero.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each quantity to its SI unit.",
              pairs: [
                ["Charge", "coulomb"],
                ["Current", "ampere"],
                ["Potential difference", "volt"],
                ["Power", "watt"],
                ["Resistance", "ohm"],
              ],
              explain: "1 A = 1 C/s, 1 V = 1 J/C, 1 W = 1 J/s, and 1 Ω = 1 V/A.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'distinguish between an ideal voltage source and an ideal current source', give three points: internal resistance (zero / infinite), what stays constant (voltage / current), and how the practical one is drawn (r in series / r in parallel). A neat symbol for each earns the diagram mark.",
          },
          {
            type: "keypoints",
            items: [
              "I = Q/t, V = W/Q, P = VI = I²R = V²/R; 1 kWh = 3.6 × 10⁶ J.",
              "Practical voltage source: E with r in series; V = E − Ir.",
              "Ideal voltage source r = 0; ideal current source r = ∞.",
              "Source transformation: I_s = E/r with the same r moved from series to parallel.",
            ],
          },
        ],
        flashcards: [
          { front: "Charge on one electron", back: "1.6 × 10⁻¹⁹ C. One coulomb is 6.25 × 10¹⁸ electrons." },
          { front: "1 kWh in joules", back: "3.6 × 10⁶ J (1000 W × 3600 s)." },
          { front: "Ideal voltage source", back: "Keeps constant terminal voltage at any load current; internal resistance zero." },
          { front: "Ideal current source", back: "Keeps constant current at any load; internal resistance infinite." },
          { front: "Terminal voltage of a practical cell", back: "V = E − Ir; it falls as the current rises." },
          { front: "Voltage source to current source", back: "I_s = E/r, with the same r placed in parallel." },
          { front: "Current source to voltage source", back: "E = I_s r, with the same r placed in series." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A charge of 90 C flows through a lamp in 1 minute. What is the current (in A)?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "A",
            explain: t`$I = Q/t = 90/60 = 1.5$ A. Convert the minute to seconds first.`,
          },
          {
            kind: "numeric",
            q: "A 60 W lamp runs 5 hours a day for 30 days. Energy costs ₹7 per unit. What is the cost (in ₹)?",
            answer: 63,
            unit: "₹",
            explain: t`Energy $= 60 \times 5 \times 30 = 9000$ Wh $= 9$ kWh. Cost $= 9 \times 7 = ₹63$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The internal resistance of an ideal current source is:",
            options: ["Zero", "Infinite", "Equal to the load resistance", "1 Ω"],
            answer: 1,
            explain: "With infinite parallel resistance, none of the source current is diverted away from the load.",
          },
          {
            kind: "truefalse",
            q: "The terminal voltage of a practical battery rises when it supplies more current.",
            answer: false,
            explain: "V = E − Ir, so a larger I means more lost volts and a smaller terminal voltage.",
          },
          {
            kind: "numeric",
            q: "A current source of 2 A has a 10 Ω parallel resistance. What is the EMF of the equivalent voltage source (in V)?",
            answer: 20,
            unit: "V",
            explain: t`$E = I_s r = 2 \times 10 = 20$ V, with the 10 Ω in series.`,
          },
          {
            kind: "fill",
            q: "A practical voltage source is drawn as an ideal source with its internal resistance in ___.",
            answer: ["series"],
            explain: "The internal resistance carries the full load current and drops Ir volts.",
          },
          {
            kind: "numeric",
            q: "A 9 V battery delivers 0.3 A to a load and its terminal voltage is 8.4 V. What is its internal resistance (in Ω)?",
            answer: 2,
            tolerance: 0.01,
            unit: "Ω",
            explain: t`Lost volts $= 9 - 8.4 = 0.6$ V, so $r = 0.6/0.3 = 2\ \Omega$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "How many electrons make up a charge of 1 C?",
            options: [t`$1.6 \times 10^{-19}$`, t`$6.25 \times 10^{18}$`, t`$6.02 \times 10^{23}$`, t`$1.6 \times 10^{19}$`],
            answer: 1,
            explain: t`$n = 1/(1.6 \times 10^{-19}) = 6.25 \times 10^{18}$.`,
          },
        ],
      },
      {
        slug: "c11-ele-introduction-practice",
        title: "Board Practice: Introduction to Electronics",
        summary: "Mixed board-style questions on milestones, active and passive components, signals, electrical quantities and sources.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "This lesson mixes the question types you meet in the board paper for this chapter: one-mark definitions, two-mark differences, and short numericals on current, energy and sources. Try each one before reading the steps.",
          },
          {
            type: "example",
            title: "Two-mark difference",
            problem: "Write two differences between electrical and electronic systems.",
            steps: [
              "Purpose: electrical systems mainly generate, transmit and use **power**; electronic systems mainly process **information** (signals).",
              "Size of current: electrical systems usually carry large currents (amperes or more); electronic circuits usually carry small currents (mA or µA).",
              "Devices: electrical systems use generators, motors and transmission lines; electronic systems use diodes, transistors and ICs.",
            ],
            answer: "Any two of: purpose (power versus information), size of current, kind of devices used.",
          },
          {
            type: "example",
            title: "Energy bill",
            problem: "A household in Mysuru runs a 1.5 kW geyser for 40 minutes a day and four 10 W LED bulbs for 6 hours a day. Find the energy used in 30 days and the cost at ₹6.50 per unit.",
            steps: [
              t`Geyser per day: $1.5 \times \frac{40}{60} = 1$ kWh.`,
              t`Bulbs per day: $4 \times 10 \times 6 = 240$ Wh $= 0.24$ kWh.`,
              t`Per day: $1 + 0.24 = 1.24$ kWh. In 30 days: $1.24 \times 30 = 37.2$ kWh.`,
              t`Cost $= 37.2 \times 6.50 = ₹241.80$.`,
            ],
            answer: "37.2 units, costing ₹241.80.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A current of 0.8 A flows for 10 s. How many electrons pass a point? Give the answer as a multiple of $10^{19}$.`,
                answer: 5,
                tolerance: 0.01,
                explain: t`$Q = It = 8$ C; $n = Q/e = 8/(1.6 \times 10^{-19}) = 5 \times 10^{19}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Finding E and r from two readings",
            problem: "A battery gives a terminal voltage of 5.6 V when it supplies 0.2 A, and 5.2 V when it supplies 0.6 A. Find its EMF and internal resistance.",
            steps: [
              t`Write $V = E - Ir$ for both readings: $5.6 = E - 0.2r$ and $5.2 = E - 0.6r$.`,
              t`Subtract: $0.4 = 0.4r$, so $r = 1\ \Omega$.`,
              t`Then $E = 5.6 + 0.2 \times 1 = 5.8$ V.`,
            ],
            answer: "E = 5.8 V and r = 1 Ω.",
          },
          {
            type: "mistake",
            wrong: "Electric current is the flow of electrons from the positive terminal to the negative terminal.",
            right: "**Conventional current** is taken from + to − in the external circuit. **Electrons** actually drift from − to +.",
            why: "The convention was fixed before the electron was discovered. Both describe the same circuit, so in circuit work we always use conventional current, but we must not say electrons move from + to −.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order these from the smallest value to the largest.",
              items: ["22 pF", "10 nF", "100 µF", "4.7 mF"],
              explain: t`Write each in farads: $22 \times 10^{-12}$, $10 \times 10^{-9}$, $100 \times 10^{-6}$, $4.7 \times 10^{-3}$. Each prefix step from p to n to µ to m is a factor of 1000.`,
            },
          },
          {
            type: "table",
            headers: ["Question type", "What earns the marks"],
            rows: [
              ["Define (1 mark)", "One exact sentence with the key word: 'controlled flow of charge carriers', 'rate of flow of charge'"],
              ["Distinguish (2–3 marks)", "Points in pairs, ideally as a two-column table"],
              ["Numerical (2–3 marks)", "Formula, substitution with units, answer with unit"],
              ["Diagram", "Correct symbol, labelled terminals, polarity marked"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In numericals, convert units first: minutes to seconds, mA to A, kΩ to Ω, W to kW for energy bills. Most lost marks in this chapter come from a missed prefix, not from a wrong formula.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which component is NOT passive?",
                options: ["Resistor", "Capacitor", "Transistor", "Inductor"],
                answer: 2,
                explain: "A transistor can amplify, using energy from its DC supply. The others cannot.",
              },
            ],
          },
          {
            type: "text",
            md: "For a 'state advantages' question on ICs, aim for four short points: very small size and weight, low cost in mass production, high reliability (fewer soldered joints), and low power use. Mention one limitation too if the question asks: high-value inductors and large capacitors cannot be made on the chip.",
          },
          {
            type: "keypoints",
            items: [
              "Know the milestones with names and years, and the advantages of transistors and ICs over tubes.",
              "Active means power gain using a DC supply; passive means no gain.",
              "For sources: V = E − Ir, two readings give E and r, and I_s = E/r converts a source.",
              "Always convert prefixes and time units before substituting.",
            ],
          },
        ],
        flashcards: [
          { front: "Edison effect", back: "Emission of electrons from a heated filament in vacuum (thermionic emission), seen by Edison in 1883." },
          { front: "Fleming valve", back: "The vacuum diode (1904), used as a detector of radio signals." },
          { front: "Conventional current direction", back: "From + to − in the external circuit, opposite to electron drift." },
          { front: "Advantages of ICs", back: "Small size, low cost, high reliability, low power use." },
          { front: "A limitation of ICs", back: "Large inductors, transformers and high-value capacitors cannot be built on the chip." },
          { front: "How to find E and r of a battery", back: "Take two (V, I) readings and solve V = E − Ir for both." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The first commercial microprocessor was:",
            options: ["Intel 8085", "Intel 4004", "Intel 8086", "Zilog Z80"],
            answer: 1,
            explain: "The 4-bit Intel 4004 came out in 1971. The 8085 and 8086 came later in the 1970s.",
          },
          {
            kind: "numeric",
            q: "A 2 kW heater runs for 90 minutes. How many units (kWh) does it use?",
            answer: 3,
            unit: "kWh",
            explain: t`$W = Pt = 2 \times 1.5 = 3$ kWh.`,
          },
          {
            kind: "numeric",
            q: "A cell has EMF 2 V. When it supplies 0.4 A, its terminal voltage is 1.8 V. Find its internal resistance (in Ω).",
            answer: 0.5,
            tolerance: 0.01,
            unit: "Ω",
            explain: t`$r = (E - V)/I = 0.2/0.4 = 0.5\ \Omega$.`,
          },
          {
            kind: "truefalse",
            q: "A diode is listed among active devices in board textbooks.",
            answer: true,
            explain: "Diodes are semiconductor devices that control the direction of current, so board books group them with active devices.",
          },
          {
            kind: "multi",
            q: "Which of these are advantages of a transistor over a vacuum triode?",
            options: ["No heater filament is needed", "Smaller size", "Can handle unlimited voltage", "Longer life"],
            answers: [0, 1, 3],
            explain: "Transistors have limited voltage ratings and can be damaged by overvoltage; the other three are real advantages.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A practical current source of 5 A with 4 Ω in parallel drives a 16 Ω load. What is the load current (in A)?",
            answer: 1,
            tolerance: 0.01,
            unit: "A",
            explain: t`Current divider: $I_L = 5 \times \frac{4}{4 + 16} = 1$ A. Or convert: $E = 20$ V, $I = 20/(16 + 4) = 1$ A.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Electrons drift from the ___ terminal to the positive terminal in the external circuit.",
            answer: ["negative", "-", "−"],
            explain: "Electron flow is opposite to conventional current.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Passive Components                                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-ele-passive-components",
    title: "Passive Components",
    icon: "🧩",
    description: "Resistors and the colour code, capacitors and their codes, inductors, mutual inductance and transformers, with series and parallel combinations.",
    lessons: [
      {
        slug: "c11-ele-resistors-colour-code",
        title: "Resistors and the Colour Code",
        summary: "Resistance and resistivity, fixed, variable and special resistors, ratings, and reading 4-band and 5-band colour codes.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Open any circuit board and the most common part you see is a small cylinder with coloured stripes: a **resistor**. It sets currents, divides voltages and limits the current through LEDs and transistors.",
          },
          {
            type: "text",
            md: t`**Resistance** is the opposition a material offers to the flow of current. Its unit is the **ohm** (Ω). For a uniform wire of length $l$ and cross-section area $A$, resistance depends on the material through its **resistivity** $\rho$ (unit Ω m). The reciprocal of resistance is **conductance** $G = 1/R$, in siemens (S).`,
          },
          {
            type: "formula",
            tex: t`R = \frac{\rho\, l}{A} \qquad G = \frac{1}{R}`,
            caption: "Doubling the length doubles R; doubling the area halves R.",
          },
          {
            type: "example",
            title: "Resistance of a heating wire",
            problem: t`A nichrome wire is 2 m long with cross-section 0.5 mm². Take $\rho = 1.1 \times 10^{-6}\ \Omega\,\text{m}$. Find its resistance.`,
            steps: [
              t`Convert the area: $0.5\ \text{mm}^2 = 0.5 \times 10^{-6}\ \text{m}^2$.`,
              t`$R = \rho l / A = (1.1 \times 10^{-6} \times 2)/(0.5 \times 10^{-6})$.`,
              t`$R = 2.2/0.5 = 4.4\ \Omega$.`,
            ],
            answer: "R = 4.4 Ω.",
          },
          {
            type: "table",
            headers: ["Kind", "Examples", "Where used"],
            rows: [
              ["Fixed", "carbon composition, carbon film, metal film, wire-wound", "general circuits; wire-wound for high power, metal film for precision and low noise"],
              ["Variable", "potentiometer (3 terminals), rheostat (2 terminals), preset or trimmer", "volume controls, setting a bias once, lab current control"],
              ["Special (sensor)", "LDR, thermistor (NTC, PTC), varistor (VDR)", "light sensing, temperature sensing, surge protection"],
            ],
          },
          {
            type: "text",
            md: "A resistor is specified by three ratings. **Resistance value** in ohms. **Tolerance**: how far the real value may differ from the marked value, such as ±5%. **Power rating**: the largest power it can dissipate safely, such as 1/4 W; above this it overheats. An **NTC thermistor's** resistance falls as temperature rises; an **LDR's** resistance falls as light increases.",
          },
          {
            type: "heading",
            text: "The colour code",
          },
          {
            type: "table",
            headers: ["Colour", "Digit", "Multiplier", "Tolerance"],
            rows: [
              ["Black", "0", "×1", "—"],
              ["Brown", "1", "×10", "±1%"],
              ["Red", "2", "×100", "±2%"],
              ["Orange", "3", "×1 k", "—"],
              ["Yellow", "4", "×10 k", "—"],
              ["Green", "5", "×100 k", "±0.5%"],
              ["Blue", "6", "×1 M", "±0.25%"],
              ["Violet", "7", "×10 M", "±0.1%"],
              ["Grey", "8", "—", "—"],
              ["White", "9", "—", "—"],
              ["Gold", "—", "×0.1", "±5%"],
              ["Silver", "—", "×0.01", "±10%"],
              ["No band", "—", "—", "±20%"],
            ],
          },
          {
            type: "example",
            title: "Reading a 4-band resistor",
            problem: "A resistor has bands yellow, violet, red, gold. Find its value and the range in which its real value lies.",
            steps: [
              "Start from the end away from the gold band. First two bands are digits: yellow = 4, violet = 7, giving 47.",
              t`Third band is the multiplier: red = $\times 100$. So $R = 47 \times 100 = 4700\ \Omega = 4.7$ kΩ.`,
              t`Fourth band gold = ±5%. 5% of 4700 is 235 Ω.`,
              "Range: 4700 − 235 = 4465 Ω to 4700 + 235 = 4935 Ω.",
            ],
            answer: "4.7 kΩ ±5%, so between 4465 Ω and 4935 Ω.",
          },
          {
            type: "example",
            title: "Reading a 5-band resistor",
            problem: "A precision resistor has bands brown, black, black, red, brown. Find its value.",
            steps: [
              "In a 5-band code the first **three** bands are digits: brown 1, black 0, black 0, giving 100.",
              t`Fourth band is the multiplier: red $\times 100$, so $R = 100 \times 100 = 10\,000\ \Omega = 10$ kΩ.`,
              "Fifth band brown = ±1%.",
            ],
            answer: "10 kΩ ±1%.",
          },
          {
            type: "mistake",
            wrong: "In a 4-band resistor the third band is just the third digit, so red-red-red-gold is 222 Ω.",
            right: "In a 4-band code only the first **two** bands are digits; the third is the **multiplier**. Red-red-red-gold is 22 × 100 = 2.2 kΩ ±5%.",
            why: "The bands look alike, so learners read them all as digits. Only 5-band (precision) resistors have three digit bands, and you can tell them apart by counting the bands.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each band pattern to its value.",
              pairs: [
                ["Red, red, brown, gold", "220 Ω ±5%"],
                ["Brown, black, orange, silver", "10 kΩ ±10%"],
                ["Orange, white, yellow, gold", "390 kΩ ±5%"],
                ["Brown, black, gold, gold", "1 Ω ±5%"],
                ["Green, blue, red, gold", "5.6 kΩ ±5%"],
              ],
              explain: t`Digits first, then the multiplier: $22 \times 10$, $10 \times 1000$, $39 \times 10^4$, $10 \times 0.1$, $56 \times 100$. A gold third band means $\times 0.1$, used for resistors below 10 Ω.`,
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which colour bands mark a 4.7 kΩ ±10% resistor?",
                options: ["Yellow, violet, orange, silver", "Yellow, violet, red, silver", "Yellow, violet, red, gold", "Violet, yellow, red, silver"],
                answer: 1,
                explain: t`$4.7\ \text{k}\Omega = 47 \times 100$: yellow (4), violet (7), red ($\times 100$), silver (±10%). Orange would give 47 kΩ.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Practical exam tip",
            md: "When you read a resistor in the lab, hold it so the gold or silver tolerance band is on your right, read the colours, then check with a multimeter on the ohms range. If the meter value is outside the tolerance range, the resistor is faulty. Never measure resistance in a powered circuit.",
          },
          {
            type: "keypoints",
            items: [
              "R = ρl/A; conductance G = 1/R in siemens.",
              "Specify a resistor by value, tolerance and power rating.",
              "4-band: digit, digit, multiplier, tolerance. 5-band: three digits, multiplier, tolerance.",
              "Gold = ±5% (or ×0.1 as a multiplier), silver = ±10% (or ×0.01).",
              "NTC thermistor and LDR resistance fall as temperature and light rise.",
            ],
          },
        ],
        flashcards: [
          { front: "Colour digits 0–9", back: "Black, brown, red, orange, yellow, green, blue, violet, grey, white." },
          { front: "Tolerance of gold and silver bands", back: "Gold ±5%, silver ±10%; no band ±20%." },
          { front: "Gold or silver as the multiplier band", back: "Gold ×0.1, silver ×0.01 (used for values below 10 Ω)." },
          { front: "Power rating of a resistor", back: "The largest power it can dissipate without overheating, e.g. 1/4 W, 1/2 W." },
          { front: "Potentiometer versus rheostat", back: "A potentiometer uses all three terminals as a voltage divider; a rheostat uses two terminals to vary current." },
          { front: "NTC thermistor", back: "Resistance decreases as temperature increases; used in temperature sensing." },
          { front: "LDR", back: "Light dependent resistor: resistance falls as the light falling on it increases." },
          { front: "Which resistor type is used for high power?", back: "Wire-wound." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Bands: orange, orange, red, gold. What is the resistance in ohms?",
            answer: 3300,
            unit: "Ω",
            explain: t`$33 \times 100 = 3300\ \Omega = 3.3$ kΩ, ±5%.`,
          },
          {
            kind: "mcq",
            q: "Bands: brown, green, black, red, brown. The value is:",
            options: ["15 kΩ ±1%", "1.5 kΩ ±1%", "150 kΩ ±1%", "15 Ω ±1%"],
            answer: 0,
            explain: t`Five bands: digits 1, 5, 0 give 150; red multiplier $\times 100$ gives 15 000 Ω = 15 kΩ; brown ±1%.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 1 kΩ ±10% resistor is tested. What is the highest value (in Ω) it can have and still be within tolerance?",
            answer: 1100,
            unit: "Ω",
            explain: "10% of 1000 Ω is 100 Ω, so the range is 900 Ω to 1100 Ω.",
          },
          {
            kind: "truefalse",
            q: "If the length of a wire is doubled and its area is also doubled, its resistance stays the same.",
            answer: true,
            explain: t`$R = \rho l/A$; doubling both $l$ and $A$ leaves the ratio unchanged.`,
          },
          {
            kind: "fill",
            q: "A resistor whose resistance falls as temperature rises is called an ___ thermistor.",
            answer: ["NTC", "negative temperature coefficient"],
            explain: "NTC = negative temperature coefficient.",
          },
          {
            kind: "numeric",
            q: "A wire of resistance 8 Ω is stretched to twice its length (its volume stays the same). What is its new resistance (in Ω)?",
            answer: 32,
            unit: "Ω",
            explain: t`Length doubles and area halves, so $R$ becomes $2 \times 2 = 4$ times: $4 \times 8 = 32\ \Omega$.`,
            difficulty: 3,
            hint: "Volume = lA stays fixed.",
          },
          {
            kind: "mcq",
            q: "Which colour code marks a 47 Ω ±5% resistor?",
            options: ["Yellow, violet, brown, gold", "Yellow, violet, black, gold", "Violet, yellow, black, gold", "Yellow, violet, gold, gold"],
            answer: 1,
            explain: t`$47 \times 1$: yellow, violet, black ($\times 1$), gold. Brown would make 470 Ω.`,
          },
          {
            kind: "multi",
            q: "Which of these are variable or adjustable resistors?",
            options: ["Potentiometer", "Rheostat", "Preset (trimmer)", "Carbon film resistor"],
            answers: [0, 1, 2],
            explain: "A carbon film resistor has a fixed value.",
          },
        ],
      },
      {
        slug: "c11-ele-capacitors",
        title: "Capacitors",
        summary: "Capacitance and the parallel-plate formula, types and ratings, number codes, energy stored, series and parallel combinations, and the RC time constant.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A camera flash charges up with a whine and then fires in a blink. The energy for that flash was stored in a **capacitor**, which can release it far faster than a battery can.",
          },
          {
            type: "text",
            md: t`A **capacitor** is two conductors (plates) separated by an insulator called the **dielectric**. When a voltage $V$ is applied, charges $+Q$ and $-Q$ collect on the plates. **Capacitance** is the charge stored per volt, $C = Q/V$. Its unit is the **farad** (F); practical values are in µF, nF and pF.`,
          },
          {
            type: "formula",
            tex: t`C = \frac{Q}{V} \qquad C = \frac{\varepsilon_0 \varepsilon_r A}{d} \qquad E = \tfrac{1}{2}CV^2`,
            caption: t`$\varepsilon_0 = 8.854 \times 10^{-12}$ F/m; $\varepsilon_r$ is the relative permittivity (dielectric constant). Larger plates, a thinner gap and a better dielectric give more capacitance.`,
          },
          {
            type: "example",
            title: "Parallel-plate capacitor",
            problem: t`Two plates of area 0.02 m² are 0.1 mm apart with a dielectric of $\varepsilon_r = 5$ between them. Find the capacitance. ($\varepsilon_0 = 8.854 \times 10^{-12}$ F/m)`,
            steps: [
              t`$d = 0.1\ \text{mm} = 1 \times 10^{-4}$ m.`,
              t`$C = \varepsilon_0 \varepsilon_r A/d = (8.854 \times 10^{-12} \times 5 \times 0.02)/(1 \times 10^{-4})$.`,
              t`$C = 8.854 \times 10^{-9}$ F $\approx 8.85$ nF.`,
            ],
            answer: "C ≈ 8.85 nF.",
          },
          {
            type: "table",
            headers: ["Type", "Typical range", "Notes"],
            rows: [
              ["Ceramic", "1 pF – 1 µF", "small, cheap, non-polarised; used for bypass and high frequency"],
              ["Mica", "pF – nF", "very stable, precise; used in RF circuits"],
              ["Paper / plastic film (polyester)", "nF – few µF", "non-polarised, general purpose"],
              ["Electrolytic (aluminium, tantalum)", "1 µF – thousands of µF", "**polarised**: + lead must go to the higher voltage; used for filtering in power supplies"],
              ["Variable (air gang, trimmer)", "pF range", "tuning circuits in radios"],
            ],
          },
          {
            type: "text",
            md: "Ratings: **capacitance**, **tolerance** and **working voltage** (WV), the highest DC voltage the dielectric can stand without breaking down. Small ceramic capacitors carry a **three-digit code** in picofarads: two digits, then the number of zeros. So **104** means 10 followed by four zeros = 100 000 pF = 100 nF = 0.1 µF.",
          },
          {
            type: "heading",
            text: "Series and parallel",
          },
          {
            type: "formula",
            tex: t`\text{Parallel: } C = C_1 + C_2 + \cdots \qquad \text{Series: } \frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots`,
            caption: "In parallel all have the same voltage; in series all carry the same charge. This is the reverse of resistors.",
          },
          {
            type: "example",
            title: "Capacitors in series",
            problem: "A 4 µF and a 12 µF capacitor are joined in series across 12 V. Find the total capacitance, the charge on each and the voltage across each. What is the total if they are in parallel instead?",
            steps: [
              t`Series: $C = \frac{C_1 C_2}{C_1 + C_2} = \frac{4 \times 12}{16} = 3$ µF.`,
              t`Same charge on each: $Q = CV = 3\ \mu\text{F} \times 12 = 36$ µC.`,
              t`$V_1 = Q/C_1 = 36/4 = 9$ V; $V_2 = 36/12 = 3$ V. Check: $9 + 3 = 12$ V.`,
              t`Parallel: $C = 4 + 12 = 16$ µF.`,
            ],
            answer: "Series 3 µF, 36 µC on each, 9 V across the 4 µF and 3 V across the 12 µF. Parallel 16 µF.",
          },
          {
            type: "mistake",
            wrong: "Capacitors in series add up, like resistors in series: 4 µF + 12 µF = 16 µF.",
            right: "Capacitors in **parallel** add up. In **series** the total is smaller than the smallest one: 4 µF and 12 µF in series give 3 µF.",
            why: "Putting capacitors in series is like making the gap between plates thicker, which lowers C. Putting them in parallel is like making the plates bigger, which raises C.",
          },
          {
            type: "text",
            md: t`When a capacitor charges through a resistor $R$ from a DC supply, the voltage does not jump; it rises along a curve. The **time constant** $\tau = RC$ is the time to reach about **63%** of the supply voltage. After about $5RC$ it is practically fully charged, and then no more current flows. So a capacitor **blocks steady DC but passes AC**.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What energy (in J) is stored in a 100 µF capacitor charged to 20 V?",
                answer: 0.02,
                tolerance: 0.0001,
                unit: "J",
                explain: t`$E = \tfrac{1}{2}CV^2 = 0.5 \times 100 \times 10^{-6} \times 400 = 0.02$ J.`,
              },
              {
                kind: "numeric",
                q: "A 10 kΩ resistor charges a 100 µF capacitor. What is the time constant (in s)?",
                answer: 1,
                tolerance: 0.001,
                unit: "s",
                explain: t`$\tau = RC = 10^4 \times 10^{-4} = 1$ s.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A ceramic capacitor is marked 473. What is its value?",
              emoji: "🔍",
              options: ["473 pF", "47 nF", "4.7 µF", "473 µF"],
              answer: 1,
              trap: 0,
              explain: t`Two digits then the number of zeros: 47 followed by 3 zeros = 47 000 pF = 47 nF. The code is in picofarads, and the last digit is a multiplier, not a digit.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Practical exam tip",
            md: "Connect an electrolytic capacitor with its **negative** lead (marked by a stripe, and usually the shorter lead) to the lower voltage. Reversed, or run above its working voltage, it can leak, heat up and burst. Discharge a large capacitor through a resistor before handling it.",
          },
          {
            type: "keypoints",
            items: [
              t`$C = Q/V$; parallel plate $C = \varepsilon_0 \varepsilon_r A/d$; energy $\tfrac{1}{2}CV^2$.`,
              "Parallel capacitors add; series capacitors combine like resistors in parallel.",
              "Number code in pF: two digits then the number of zeros (104 = 0.1 µF).",
              "Electrolytic capacitors are polarised; respect polarity and working voltage.",
              "Time constant τ = RC: 63% charged after one τ; a charged capacitor blocks DC.",
            ],
          },
        ],
        flashcards: [
          { front: "Capacitance", back: "Charge stored per unit voltage, C = Q/V, in farads." },
          { front: "Parallel-plate capacitance", back: "C = ε₀ε_r A/d." },
          { front: "Energy stored in a capacitor", back: "E = ½CV² = Q²/2C = ½QV." },
          { front: "Capacitors in series", back: "1/C = 1/C₁ + 1/C₂ + …; same charge on each." },
          { front: "Capacitors in parallel", back: "C = C₁ + C₂ + …; same voltage on each." },
          { front: "Code 104", back: "10 × 10⁴ pF = 100 nF = 0.1 µF." },
          { front: "Working voltage", back: "The highest DC voltage a capacitor can stand without dielectric breakdown." },
          { front: "Time constant of an RC circuit", back: "τ = RC; the capacitor reaches about 63% of the supply voltage in one τ." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Three 6 µF capacitors are joined in series. What is the total capacitance (in µF)?",
            answer: 2,
            unit: "µF",
            explain: t`For $n$ equal capacitors in series, $C = C_1/n = 6/3 = 2$ µF.`,
          },
          {
            kind: "mcq",
            q: "Which change increases the capacitance of a parallel-plate capacitor?",
            options: ["Increasing the plate separation", "Replacing the dielectric with air", "Increasing the plate area", "Lowering the applied voltage"],
            answer: 2,
            explain: t`$C = \varepsilon_0 \varepsilon_r A/d$ rises with $A$. Voltage does not change $C$; it only changes $Q$.`,
          },
          {
            kind: "truefalse",
            q: "Doubling the voltage on a capacitor doubles the energy it stores.",
            answer: false,
            explain: t`$E = \tfrac{1}{2}CV^2$, so doubling $V$ makes the energy four times.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A capacitor whose leads must be connected the right way round is called ___.",
            answer: ["polarised", "polarized", "electrolytic"],
            explain: "Electrolytic capacitors are polarised.",
          },
          {
            kind: "numeric",
            q: "A capacitor stores 60 µC when 12 V is applied. What is its capacitance (in µF)?",
            answer: 5,
            unit: "µF",
            explain: t`$C = Q/V = 60/12 = 5$ µF.`,
          },
          {
            kind: "numeric",
            q: "A 2 µF and a 3 µF capacitor in series are connected across 10 V. What is the voltage (in V) across the 2 µF capacitor?",
            answer: 6,
            unit: "V",
            explain: t`$C = 6/5 = 1.2$ µF, $Q = 12$ µC, $V_1 = 12/2 = 6$ V. The smaller capacitor takes the larger share of voltage.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A capacitor marked 223 has a value of:",
            options: ["223 pF", "22 nF", "2.2 µF", "22 µF"],
            answer: 1,
            explain: "22 followed by 3 zeros = 22 000 pF = 22 nF.",
          },
          {
            kind: "mcq",
            q: "Once fully charged in a DC circuit, a capacitor:",
            options: ["Conducts like a wire", "Draws no further current", "Keeps charging forever", "Turns into a resistor"],
            answer: 1,
            explain: "When its voltage equals the supply voltage, no more charge flows. This is why a capacitor blocks steady DC.",
          },
        ],
      },
      {
        slug: "c11-ele-inductors-transformers",
        title: "Inductors and Transformers",
        summary: "Self-inductance and the inductance of a coil, energy stored, types of inductor, mutual inductance and coupling, and the transformer with turns ratio, losses and efficiency.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "The grey box on a phone charger cable, the coils inside an old radio, and the heavy block in a mains adapter all use the same idea: a changing current in a coil produces a changing magnetic field, and that field induces a voltage.",
          },
          {
            type: "text",
            md: t`An **inductor** is a coil of wire, often wound on a core. When the current through it changes, the coil's own changing magnetic flux induces an EMF that **opposes the change** (Lenz's law). This is **self-induction**. The **self-inductance** $L$ is the EMF induced per unit rate of change of current; its unit is the **henry** (H).`,
          },
          {
            type: "formula",
            tex: t`e = -L\frac{dI}{dt} \qquad L = \frac{\mu_0 \mu_r N^2 A}{l} \qquad E = \tfrac{1}{2}LI^2`,
            caption: t`$\mu_0 = 4\pi \times 10^{-7}$ H/m. More turns, a larger area, a shorter coil and an iron or ferrite core (large $\mu_r$) give more inductance.`,
          },
          {
            type: "example",
            title: "Inductance of a coil",
            problem: "An air-core coil has 500 turns, cross-section area 4 cm² and length 20 cm. Find its inductance.",
            steps: [
              t`$A = 4 \times 10^{-4}$ m², $l = 0.2$ m, $N^2 = 2.5 \times 10^5$, $\mu_r = 1$.`,
              t`$L = \mu_0 N^2 A/l = (4\pi \times 10^{-7} \times 2.5 \times 10^5 \times 4 \times 10^{-4})/0.2$.`,
              t`$L = 6.28 \times 10^{-4}$ H $\approx 0.63$ mH.`,
            ],
            answer: "L ≈ 0.63 mH.",
          },
          {
            type: "example",
            title: "Induced EMF",
            problem: "The current in a 0.5 H inductor falls steadily from 2 A to zero in 10 ms. Find the size of the induced EMF.",
            steps: [
              t`Rate of change: $dI/dt = (0 - 2)/0.01 = -200$ A/s.`,
              t`$e = -L\,dI/dt = -0.5 \times (-200) = 100$ V.`,
            ],
            answer: "100 V, in the direction that tries to keep the current flowing.",
          },
          {
            type: "table",
            headers: ["Type", "Core", "Use"],
            rows: [
              ["Air-core", "none (μ_r = 1)", "small L, high frequencies (radio)"],
              ["Iron-core (laminated)", "silicon steel", "large L at low frequency: smoothing chokes, mains transformers"],
              ["Ferrite-core", "ferrite (ceramic magnetic material)", "medium to high frequency, low eddy loss: SMPS, RF chokes, EMI beads"],
              ["Variable", "movable ferrite slug", "tuning coils"],
            ],
          },
          {
            type: "text",
            md: t`**Mutual induction**: a changing current in one coil induces an EMF in a nearby coil. The **mutual inductance** is $M = k\sqrt{L_1 L_2}$, where the **coefficient of coupling** $k$ is between 0 and 1 ($k = 1$ means all the flux of one coil links the other).

Inductors in series with no coupling add: $L = L_1 + L_2$. With coupling, **series aiding** gives $L_1 + L_2 + 2M$ and **series opposing** gives $L_1 + L_2 - 2M$. In parallel with no coupling, $1/L = 1/L_1 + 1/L_2$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Two coils of 4 mH and 9 mH have k = 0.5. What is the total inductance (in mH) when they are joined series aiding?",
                answer: 19,
                unit: "mH",
                explain: t`$M = 0.5\sqrt{4 \times 9} = 3$ mH, so $L = 4 + 9 + 2 \times 3 = 19$ mH. Series opposing would give 7 mH.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "heading",
            text: "The transformer",
          },
          {
            type: "text",
            md: t`A **transformer** has two coils, the **primary** and the **secondary**, on a common laminated iron core. It works on **mutual induction**, so it works only with **AC** (a steady DC gives no changing flux). For an ideal transformer, the voltage ratio equals the **turns ratio**, and the current ratio is its inverse:`,
          },
          {
            type: "formula",
            tex: t`\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s} \qquad \eta = \frac{\text{output power}}{\text{input power}} \times 100\%`,
            caption: "Step-up: Ns > Np. Step-down: Ns < Np. Losses: copper (I²R) loss in the windings, and iron loss (hysteresis and eddy currents) in the core; laminating the core reduces eddy currents.",
          },
          {
            type: "example",
            title: "Mains adapter transformer",
            problem: "A transformer steps 230 V down to 12 V. Its primary has 1150 turns. Find the number of secondary turns, and the primary current when the secondary supplies 2 A (assume it is ideal).",
            steps: [
              t`$N_s = N_p \times V_s/V_p = 1150 \times 12/230 = 60$ turns.`,
              t`Ideal: input power = output power, so $V_p I_p = V_s I_s$.`,
              t`$I_p = 12 \times 2/230 = 0.104$ A (about 104 mA).`,
            ],
            answer: "60 secondary turns; primary current ≈ 0.104 A.",
          },
          {
            type: "mistake",
            wrong: "A step-up transformer increases power, and it can also step up a DC battery voltage.",
            right: "A transformer can step up **voltage** only by stepping down **current**; output power is at most equal to input power. It does **not** work on steady DC.",
            why: "The bigger output voltage makes it look like a gain. But energy is conserved, so η ≤ 100%. With DC the core flux is steady, so no EMF is induced in the secondary, and the primary, with only its small resistance, may draw a damaging current.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does each change increase or decrease a coil's inductance?",
              groups: ["Increases L", "Decreases L"],
              items: [
                { text: "Doubling the number of turns", group: 0, hint: "L grows as N squared." },
                { text: "Inserting an iron core", group: 0, hint: "Iron has a large relative permeability." },
                { text: "Stretching the same coil to a longer length", group: 1, hint: "L is inversely proportional to the length l." },
                { text: "Winding on a wider former", group: 0, hint: "A larger cross-section A gives more flux." },
                { text: "Pulling out the ferrite slug", group: 1, hint: "Without the core, μ_r drops to 1." },
                { text: "Joining a second coil in series opposing", group: 1, hint: "L₁ + L₂ − 2M is less than the aiding value L₁ + L₂ + 2M." },
              ],
              explain: t`Use $L = \mu_0 \mu_r N^2 A/l$: anything that raises $N$, $A$ or $\mu_r$ or shortens $l$ increases $L$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'why is a transformer core laminated?' write: the core is made of thin insulated sheets so that the eddy current paths are broken, which reduces eddy current loss and heating. Silicon steel is chosen because it has low hysteresis loss.",
          },
          {
            type: "keypoints",
            items: [
              t`$e = -L\,dI/dt$; $L = \mu_0\mu_r N^2 A/l$; energy $\tfrac{1}{2}LI^2$.`,
              t`$M = k\sqrt{L_1L_2}$; series aiding $L_1 + L_2 + 2M$, opposing $L_1 + L_2 - 2M$.`,
              "Transformer: Vs/Vp = Ns/Np = Ip/Is (ideal); works only on AC.",
              "Losses: copper loss and iron loss (hysteresis and eddy current); laminations cut eddy currents.",
            ],
          },
        ],
        flashcards: [
          { front: "Self-induction", back: "An EMF induced in a coil by a change of current in the same coil; it opposes the change." },
          { front: "Unit of inductance", back: "The henry (H): 1 V induced when current changes at 1 A/s." },
          { front: "Inductance of a solenoid", back: "L = μ₀μ_r N²A/l." },
          { front: "Energy stored in an inductor", back: "E = ½LI², stored in the magnetic field." },
          { front: "Coefficient of coupling", back: "k = M/√(L₁L₂), between 0 and 1." },
          { front: "Transformer turns ratio", back: "Vs/Vp = Ns/Np; for an ideal transformer Ip/Is is the same ratio." },
          { front: "Two transformer core losses", back: "Hysteresis loss and eddy current loss (together, iron loss)." },
          { front: "Why does a transformer not work on DC?", back: "Steady DC gives constant flux, so no EMF is induced in the secondary." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What energy (in J) is stored in a 0.2 H inductor carrying 3 A?",
            answer: 0.9,
            tolerance: 0.001,
            unit: "J",
            explain: t`$E = \tfrac{1}{2}LI^2 = 0.5 \times 0.2 \times 9 = 0.9$ J.`,
          },
          {
            kind: "mcq",
            q: "If the number of turns of a coil is doubled (all else the same), its inductance becomes:",
            options: ["Half", "Double", "Four times", "Unchanged"],
            answer: 2,
            explain: t`$L \propto N^2$, so $2^2 = 4$ times.`,
          },
          {
            kind: "numeric",
            q: "A transformer has 200 primary turns and 1000 secondary turns. The primary is fed with 46 V AC. What is the secondary voltage (in V)?",
            answer: 230,
            unit: "V",
            explain: t`$V_s = 46 \times 1000/200 = 230$ V. It is a step-up transformer.`,
          },
          {
            kind: "numeric",
            q: "A transformer takes 500 W from the mains and delivers 470 W. What is its efficiency (in %)?",
            answer: 94,
            unit: "%",
            explain: t`$\eta = 470/500 \times 100 = 94\%$. The other 30 W is lost as copper and iron losses.`,
          },
          {
            kind: "truefalse",
            q: "The core of a transformer is laminated to reduce eddy current loss.",
            answer: true,
            explain: "Thin insulated sheets break the paths of eddy currents.",
          },
          {
            kind: "fill",
            q: "A transformer works on the principle of ___ induction.",
            answer: ["mutual"],
            explain: "A changing current in the primary induces an EMF in the secondary.",
          },
          {
            kind: "numeric",
            q: "Two coils, L₁ = 8 mH and L₂ = 2 mH, are perfectly coupled (k = 1). What is M (in mH)?",
            answer: 4,
            unit: "mH",
            explain: t`$M = 1 \times \sqrt{8 \times 2} = 4$ mH.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A ferrite core is preferred over a laminated iron core at high frequencies because:",
            options: ["Ferrite is a good conductor", "Ferrite has very high resistivity, so eddy current loss is low", "Ferrite is not magnetic", "Ferrite makes L zero"],
            answer: 1,
            explain: "Ferrite is magnetic but has high resistivity, so eddy currents, which rise with frequency, stay small.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-ele-passive-practice",
        title: "Board Practice: Passive Components",
        summary: "Mixed board-style questions on colour codes, capacitor and inductor combinations, energy stored, and transformers.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Questions on passive components are mostly short numericals and 'read the code' items. Work each one on paper first, then compare with the steps.",
          },
          {
            type: "example",
            title: "Writing a colour code",
            problem: "Write the colour bands of (a) a 68 kΩ ±5% resistor and (b) a 3.3 kΩ ±1% precision (5-band) resistor.",
            steps: [
              t`(a) $68\ \text{k}\Omega = 68 \times 1000$: blue (6), grey (8), orange ($\times 10^3$), gold (±5%).`,
              t`(b) $3.3\ \text{k}\Omega = 330 \times 10$: orange (3), orange (3), black (0), brown ($\times 10$), brown (±1%).`,
            ],
            answer: "(a) Blue, grey, orange, gold. (b) Orange, orange, black, brown, brown.",
          },
          {
            type: "example",
            title: "Capacitor network",
            problem: "Two 6 µF capacitors are in series, and this pair is in parallel with a third 6 µF capacitor. The network is charged to 10 V. Find the total capacitance and the total energy stored.",
            steps: [
              t`Series pair: $6/2 = 3$ µF.`,
              t`In parallel with 6 µF: $C = 3 + 6 = 9$ µF.`,
              t`Energy $= \tfrac{1}{2}CV^2 = 0.5 \times 9 \times 10^{-6} \times 100 = 4.5 \times 10^{-4}$ J.`,
            ],
            answer: "9 µF and 0.45 mJ.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A transformer steps 230 V down to 23 V. What is its turns ratio Np : Ns? Enter Np/Ns.",
                answer: 10,
                unit: "",
                explain: t`$N_p/N_s = V_p/V_s = 230/23 = 10$, so the ratio is 10 : 1.`,
              },
            ],
          },
          {
            type: "example",
            title: "Real transformer",
            problem: "A step-down transformer with efficiency 90% gives 24 V at 3 A from a 230 V supply. Find the primary current.",
            steps: [
              t`Output power $= 24 \times 3 = 72$ W.`,
              t`Input power $= 72/0.9 = 80$ W.`,
              t`$I_p = 80/230 = 0.348$ A.`,
            ],
            answer: "About 0.35 A.",
          },
          {
            type: "mistake",
            wrong: "Inductors combine like capacitors: in series, 1/L = 1/L₁ + 1/L₂.",
            right: "Inductors combine like **resistors**: uncoupled inductors in series add, L = L₁ + L₂; in parallel 1/L = 1/L₁ + 1/L₂.",
            why: "Capacitors are the odd ones out, because C = Q/V puts the voltage in the denominator. For resistors and inductors the voltage is proportional to R or L, so series values add.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each combination to its result.",
              pairs: [
                ["10 Ω and 10 Ω in series", "20 Ω"],
                ["10 µF and 10 µF in series", "5 µF"],
                ["10 mH and 10 mH in series, no coupling", "20 mH, as for resistors"],
                ["10 µF and 10 µF in parallel", "20 µF, as for series resistors"],
                ["10 mH and 10 mH in parallel, no coupling", "5 mH"],
              ],
              explain: "Resistors and inductors add in series. Capacitors add in parallel. Two equal parts combined the 'other' way give half of one.",
            },
          },
          {
            type: "table",
            headers: ["Component", "Stores energy in", "Formula", "Unit"],
            rows: [
              ["Resistor", "does not store; dissipates as heat", t`$P = I^2R$`, "ohm"],
              ["Capacitor", "electric field", t`$\tfrac{1}{2}CV^2$`, "farad"],
              ["Inductor", "magnetic field", t`$\tfrac{1}{2}LI^2$`, "henry"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A common 3-mark question: 'Mention three factors on which the capacitance of a parallel-plate capacitor (or the inductance of a coil) depends.' Write the formula first, then list the factors with the direction of each effect. The formula alone earns at least one mark.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A resistor has bands brown, black, gold, silver. Its value is:",
                options: ["10 Ω ±10%", "1 Ω ±10%", "0.1 Ω ±10%", "100 Ω ±5%"],
                answer: 1,
                explain: t`Digits 1, 0 give 10; gold multiplier $\times 0.1$ gives 1 Ω; silver ±10%.`,
              },
            ],
          },
          {
            type: "text",
            md: "In the practical exam you may be asked to identify components on a board. Resistors have colour bands; ceramic capacitors are small discs with a number code; electrolytic capacitors are cans with a stripe marking the negative lead and a printed µF value and voltage; inductors are coils or look like fat resistors, often green, with colour bands giving µH.",
          },
          {
            type: "keypoints",
            items: [
              "Write colour codes by splitting the value into digits × multiplier.",
              "Resistors and inductors add in series; capacitors add in parallel.",
              "Real transformer: input power = output power ÷ η.",
              "Capacitors store energy in electric fields, inductors in magnetic fields; resistors store none.",
            ],
          },
        ],
        flashcards: [
          { front: "Colour code of 68 kΩ ±5%", back: "Blue, grey, orange, gold." },
          { front: "Colour code of 1 kΩ ±5%", back: "Brown, black, red, gold." },
          { front: "Two equal capacitors C in series", back: "C/2." },
          { front: "Two equal uncoupled inductors L in parallel", back: "L/2." },
          { front: "Input power of a real transformer", back: "Output power ÷ efficiency." },
          { front: "How to spot an electrolytic capacitor's negative lead", back: "A stripe with minus signs on the body, and usually the shorter lead." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Bands green, blue, yellow, gold give:",
            options: ["56 kΩ ±5%", "560 kΩ ±5%", "5.6 MΩ ±5%", "5.6 kΩ ±5%"],
            answer: 1,
            explain: t`$56 \times 10^4 = 560\,000\ \Omega = 560$ kΩ.`,
          },
          {
            kind: "numeric",
            q: "Capacitors of 2 µF, 3 µF and 5 µF are in parallel across 20 V. What is the total charge stored (in µC)?",
            answer: 200,
            unit: "µC",
            explain: t`$C = 10$ µF, $Q = CV = 10 \times 20 = 200$ µC.`,
          },
          {
            kind: "numeric",
            q: "A 5 H inductor stores 10 J. What current (in A) flows through it?",
            answer: 2,
            tolerance: 0.01,
            unit: "A",
            explain: t`$10 = \tfrac{1}{2} \times 5 \times I^2$, so $I^2 = 4$ and $I = 2$ A.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In a capacitor, the larger the capacitance in a series string, the larger its share of the voltage.",
            answer: false,
            explain: "All carry the same Q, so V = Q/C: the smallest capacitor gets the largest voltage.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A step-up transformer has turns ratio 1 : 20 and the primary gets 12 V AC. What is the secondary voltage (in V)?",
            answer: 240,
            unit: "V",
            explain: t`$V_s = 12 \times 20 = 240$ V.`,
          },
          {
            kind: "order",
            q: "Order these capacitor values from smallest to largest.",
            items: ["Code 101", "Code 102", "Code 103", "Code 104"],
            explain: "101 = 100 pF, 102 = 1 nF, 103 = 10 nF, 104 = 100 nF. Each step of the last digit is ×10.",
          },
          {
            kind: "multi",
            q: "Which factors increase the capacitance of a parallel-plate capacitor?",
            options: ["Larger plate area", "Smaller plate separation", "Dielectric with higher εr", "Higher applied voltage"],
            answers: [0, 1, 2],
            explain: t`$C = \varepsilon_0\varepsilon_r A/d$ does not depend on the applied voltage.`,
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Introduction to Electronics": "c11-ele-introduction",
  "11:Passive Components": "c11-ele-passive-components",
};
