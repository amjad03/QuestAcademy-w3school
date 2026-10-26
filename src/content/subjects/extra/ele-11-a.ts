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
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Introduction to Electronics": "c11-ele-introduction",
};
