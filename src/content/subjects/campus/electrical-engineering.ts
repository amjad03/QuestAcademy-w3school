import type { Subject } from "@/content/types";

export const electricalEngineering: Subject = {
  slug: "electrical-engineering",
  title: "Electrical Engineering",
  world: "campus",
  icon: "⚡",
  colors: ["#f59e0b", "#2563eb"],
  tagline: "From Ohm's law to logic gates — the physics inside every device you own.",
  description:
    "A first-year electrical engineering core: charge, current, voltage and power, Kirchhoff's laws, series and parallel networks, capacitors and inductors, AC circuits and impedance, and the binary logic that powers digital electronics. Each lesson links the maths to real hardware and industry practice.",
  levels: ["UG Year 1", "UG Year 2"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Engineering",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "circuit-fundamentals",
      title: "Circuit Fundamentals",
      icon: "🔋",
      description: "Charge, current, voltage, resistance and power.",
      lessons: [
        {
          slug: "charge-current-voltage",
          title: "Charge, Current & Voltage",
          summary: "The three quantities every circuit is built from, with the water-pipe analogy and its limits.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Your phone charger is labelled *5 V, 2 A*. What does that actually promise? By the end of this lesson you'll be able to read any rating plate — and know why it matters.",
            },
            {
              type: "table",
              headers: ["Quantity", "Symbol", "SI unit", "Meaning"],
              rows: [
                ["Charge", "$Q$", "coulomb (C)", "Amount of electricity; one electron carries $1.602 \\times 10^{-19}$ C"],
                ["Current", "$I$", "ampere (A) = C/s", "Rate of charge flow"],
                ["Voltage", "$V$", "volt (V) = J/C", "Energy per unit charge — the \"push\""],
                ["Resistance", "$R$", "ohm (Ω) = V/A", "Opposition to current"],
              ],
            },
            {
              type: "formula",
              tex: "I = \\frac{dQ}{dt} \\qquad V = \\frac{dW}{dQ}",
              caption: "Current is the rate of charge flow; voltage is energy per charge.",
            },
            {
              type: "illustration",
              emoji: "🚰",
              caption: "Analogy: voltage ≈ water pressure, current ≈ flow rate, resistance ≈ a narrow pipe.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A charger delivers 2 A for 60 seconds. How much charge flows?",
                  answer: 120,
                  unit: "C",
                  explain: "$Q = It = 2 \\times 60 = 120$ C.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Electrons race through the wire at near light speed.\" The *signal* (the electromagnetic field) travels close to light speed, but electrons themselves drift slowly — typically fractions of a millimetre per second in household copper wire.",
            },
            {
              type: "callout",
              tone: "fact",
              md: "**Conventional current** flows from + to −, a convention set before the electron was discovered. Electrons actually move the other way. Circuit analysis uses conventional current throughout.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Battery capacity is quoted in **milliamp-hours** (mAh): a 5,000 mAh phone battery could, in principle, supply 5 A for 1 hour or 0.5 A for 10 hours. Multiply by the nominal voltage (≈3.7 V for Li-ion) to get energy: about 18.5 Wh.",
            },
            {
              type: "keypoints",
              items: [
                "Current = charge per second; voltage = energy per charge.",
                "Voltage is always measured *between* two points.",
                "Conventional current flows + → −, opposite to electron flow.",
              ],
            },
          ],
          flashcards: [
            { front: "1 ampere", back: "1 coulomb per second." },
            { front: "1 volt", back: "1 joule per coulomb." },
            { front: "Charge of one electron", back: "$1.602 \\times 10^{-19}$ C (negative)." },
            { front: "Conventional current direction", back: "From the positive terminal to the negative terminal." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which instrument connection measures voltage across a component?",
              options: ["Voltmeter in series", "Voltmeter in parallel", "Ammeter in parallel", "Ohmmeter while powered"],
              answer: 1,
              explain: "Voltage is a difference between two points, so the voltmeter goes across (in parallel with) the component.",
            },
            {
              kind: "numeric",
              q: "A 3.7 V battery is rated 4,000 mAh. What is its energy in watt-hours?",
              answer: 14.8,
              tolerance: 0.1,
              unit: "Wh",
              explain: "$4\\text{ Ah} \\times 3.7\\text{ V} = 14.8$ Wh.",
            },
            {
              kind: "truefalse",
              q: "Electrons flow in the same direction as conventional current.",
              answer: false,
              explain: "Electrons are negative, so they move from − to +, opposite to conventional current.",
            },
            {
              kind: "fill",
              q: "The SI unit of electric charge is the ___.",
              answer: ["coulomb", "C"],
              explain: "Named after Charles-Augustin de Coulomb.",
            },
          ],
        },
        {
          slug: "ohms-law-power",
          title: "Ohm's Law & Electrical Power",
          summary: "V = IR, P = VI, and sizing a resistor for an LED.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Connect an LED straight to a 5 V USB supply and it flashes once — then dies. A ₹1 resistor would have saved it. Ohm's law tells you exactly which one.",
            },
            {
              type: "formula",
              tex: "V = I R",
              caption: "Ohm's law: for an ohmic conductor, voltage is proportional to current.",
            },
            {
              type: "widget",
              widget: "ohms-law",
              caption: "Raise the voltage, then the resistance. Watch how current responds — and how power changes.",
            },
            {
              type: "formula",
              tex: "P = VI = I^2 R = \\frac{V^2}{R}",
              caption: "Three equivalent forms of electrical power.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A 9 V battery drives current through a 450 Ω resistor. What is the current in milliamps?",
                  answer: 20,
                  unit: "mA",
                  explain: "$I = V/R = 9/450 = 0.02$ A = 20 mA.",
                },
              ],
            },
            { type: "heading", text: "Worked example: LED current-limiting resistor" },
            {
              type: "text",
              md: "A red LED drops about 2 V and wants 20 mA. From a 5 V supply the resistor must drop the remaining 3 V:\n\n$R = \\dfrac{5 - 2}{0.020} = 150\\ \\Omega$\n\nPower in the resistor: $P = I^2R = (0.02)^2 \\times 150 = 0.06$ W — a standard ¼ W resistor is plenty.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def led_resistor(v_supply, v_led, i_led_ma):
    i = i_led_ma / 1000
    r = (v_supply - v_led) / i
    p = i * i * r
    return r, p

for supply in [3.3, 5, 9, 12]:
    r, p = led_resistor(supply, 2.0, 20)
    print(f"{supply:>4} V supply -> R = {r:6.1f} ohm, P = {p:.3f} W")`,
              caption: "Notice how a 12 V supply needs a resistor dissipating 0.2 W.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Ohm's law applies to everything.\" It holds for *ohmic* materials at constant temperature. LEDs, diodes and filament bulbs are non-ohmic — their V–I curve isn't a straight line.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Power-line losses scale with $I^2R$. That's why grids step voltage up to hundreds of kilovolts for transmission: for the same power, higher voltage means lower current and far smaller losses.",
            },
            {
              type: "keypoints",
              items: [
                "$V = IR$ links voltage, current and resistance.",
                "Power: $P = VI = I^2R = V^2/R$, measured in watts.",
                "Always check the resistor's power rating, not just its value.",
              ],
            },
          ],
          flashcards: [
            { front: "Ohm's law", back: "$V = IR$" },
            { front: "Power formulas", back: "$P = VI = I^2R = V^2/R$" },
            { front: "Why transmit power at high voltage?", back: "Lower current for the same power, so $I^2R$ losses drop dramatically." },
            { front: "Non-ohmic example", back: "Diode, LED, filament lamp." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What resistor is needed for a 2 V, 10 mA LED on a 12 V supply?",
              answer: 1000,
              unit: "Ω",
              explain: "$R = (12 - 2)/0.010 = 1000$ Ω.",
            },
            {
              kind: "numeric",
              q: "A 230 V kettle draws 8 A. What is its power in watts?",
              answer: 1840,
              unit: "W",
              explain: "$P = VI = 230 \\times 8 = 1840$ W.",
            },
            {
              kind: "mcq",
              q: "If the current through a resistor doubles, its power dissipation…",
              options: ["Halves", "Stays the same", "Doubles", "Quadruples"],
              answer: 3,
              explain: "$P = I^2R$: doubling $I$ multiplies power by 4.",
            },
            {
              kind: "truefalse",
              q: "An LED obeys Ohm's law with a constant resistance.",
              answer: false,
              explain: "LEDs are non-linear: current rises steeply once the forward voltage is reached.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "circuit-analysis",
      title: "Circuit Analysis",
      icon: "🔌",
      description: "Kirchhoff's laws and how to simplify resistor networks.",
      lessons: [
        {
          slug: "kcl-kvl",
          title: "Kirchhoff's Current & Voltage Laws",
          summary: "Conservation of charge at nodes and energy around loops.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A circuit board can contain thousands of components. Engineers analyse every one of them with two laws written down by Gustav Kirchhoff in 1845 — both just conservation principles in disguise.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "KCL — Kirchhoff's Current Law",
              md: "The sum of currents entering a node equals the sum leaving it: $\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$. Charge can't pile up at a junction.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "KVL — Kirchhoff's Voltage Law",
              md: "Around any closed loop, the voltages sum to zero: $\\sum V = 0$. Like walking round a hill and returning to your starting height — net climb is zero.",
            },
            {
              type: "formula",
              tex: "\\text{KCL: } \\sum_k I_k = 0 \\qquad \\text{KVL: } \\sum_{\\text{loop}} V_k = 0",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "5 A enters a node. One branch carries 2 A out. How much current leaves through the only other branch?",
                  answer: 3,
                  unit: "A",
                  explain: "KCL: $5 = 2 + I \\Rightarrow I = 3$ A.",
                },
              ],
            },
            { type: "heading", text: "Nodal analysis in practice" },
            {
              type: "list",
              ordered: true,
              items: [
                "Pick a reference node (ground, 0 V).",
                "Label unknown node voltages $V_1, V_2, \\dots$",
                "Write KCL at each unknown node using $I = (V_a - V_b)/R$.",
                "Solve the simultaneous equations.",
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `# 12 V source -> R1 = 2 ohm -> node A -> R2 = 3 ohm to ground,
# and R3 = 6 ohm from node A to ground.
# KCL at A: (12 - Va)/2 = Va/3 + Va/6
# => 6 - Va/2 = Va/2  => Va = 6 V
Vs, R1, R2, R3 = 12, 2, 3, 6
Va = (Vs / R1) / (1 / R1 + 1 / R2 + 1 / R3)
I1 = (Vs - Va) / R1
I2, I3 = Va / R2, Va / R3
print(f"Va = {Va:.2f} V")
print(f"I1 = {I1:.2f} A  equals  I2 + I3 = {I2 + I3:.2f} A")`,
              caption: "Nodal analysis: one unknown node, one KCL equation.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Circuit simulators such as SPICE (developed at UC Berkeley in the 1970s) apply *modified nodal analysis* — KCL at every node turned into a big matrix equation — to simulate chips with millions of transistors.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"I must guess current directions correctly.\" Not at all. Assume any direction; if the answer comes out negative, the current simply flows the other way.",
            },
            {
              type: "keypoints",
              items: [
                "KCL = conservation of charge at a node.",
                "KVL = conservation of energy around a loop.",
                "Nodal analysis writes KCL at each unknown node and solves.",
              ],
            },
          ],
          flashcards: [
            { front: "KCL", back: "Sum of currents into a node = sum of currents out." },
            { front: "KVL", back: "Sum of voltage rises and drops around a closed loop = 0." },
            { front: "Node", back: "A point where two or more components connect." },
            { front: "SPICE", back: "Circuit simulator that uses (modified) nodal analysis." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A 12 V source drives a loop with three resistors. Two of them drop 5 V and 4 V. What does the third drop?",
              answer: 3,
              unit: "V",
              explain: "KVL: $12 - 5 - 4 - V_3 = 0 \\Rightarrow V_3 = 3$ V.",
            },
            {
              kind: "mcq",
              q: "KCL is a consequence of the conservation of…",
              options: ["Energy", "Charge", "Momentum", "Mass"],
              answer: 1,
              explain: "Charge cannot accumulate at an ideal node.",
            },
            {
              kind: "truefalse",
              q: "If nodal analysis gives a branch current of −0.5 A, the analysis has failed.",
              answer: false,
              explain: "It just means the actual current flows opposite to the assumed direction.",
            },
            {
              kind: "order",
              q: "Order the steps of nodal analysis.",
              items: ["Choose a reference (ground) node", "Label unknown node voltages", "Write KCL at each unknown node", "Solve the equations"],
              explain: "Reference first, then unknowns, equations, and solution.",
            },
          ],
        },
        {
          slug: "series-parallel",
          title: "Series & Parallel Networks",
          summary: "Equivalent resistance, voltage dividers and current dividers.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Old festival lights: one bulb blows and the whole string goes dark. Your home wiring: switch off the fan and the lights stay on. The difference is **series** versus **parallel**.",
            },
            {
              type: "table",
              headers: ["", "Series", "Parallel"],
              rows: [
                ["Same for every element", "Current", "Voltage"],
                ["Equivalent resistance", "$R_{eq} = R_1 + R_2 + \\dots$", "$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$"],
                ["$R_{eq}$ compared to parts", "Larger than any", "Smaller than the smallest"],
                ["One element fails open", "Everything stops", "Others keep working"],
              ],
            },
            {
              type: "formula",
              tex: "R_1 \\parallel R_2 = \\frac{R_1 R_2}{R_1 + R_2}",
              caption: "Product over sum — the shortcut for two parallel resistors.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is the equivalent resistance of 6 Ω in parallel with 3 Ω?",
                  answer: 2,
                  unit: "Ω",
                  explain: "$6 \\times 3 / (6 + 3) = 18/9 = 2$ Ω.",
                },
              ],
            },
            { type: "heading", text: "Voltage divider" },
            {
              type: "formula",
              tex: "V_{\\text{out}} = V_{\\text{in}} \\cdot \\frac{R_2}{R_1 + R_2}",
              caption: "Two series resistors share the input voltage in proportion to their values.",
            },
            {
              type: "text",
              md: "**Example:** a 9 V battery with $R_1 = 10$ kΩ and $R_2 = 20$ kΩ gives $V_{out} = 9 \\times 20/30 = 6$ V across $R_2$. Sensors such as thermistors and light-dependent resistors are read this way: their resistance changes, so the divider voltage changes.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def series(*rs):
    return sum(rs)

def parallel(*rs):
    return 1 / sum(1 / r for r in rs)

# 100 ohm in series with (220 || 330)
r_eq = series(100, parallel(220, 330))
print(f"R_eq = {r_eq:.1f} ohm")
print(f"Current from 5 V: {5 / r_eq * 1000:.2f} mA")`,
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Electric-vehicle battery packs combine cells in both ways: cells in **series** raise the pack voltage (often 400 V or 800 V), while groups in **parallel** raise capacity and current capability.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Adding more resistors always increases resistance.\" Adding a resistor in *parallel* opens a new path, so total resistance goes **down** — that's why plugging in more appliances draws more current from the mains.",
            },
            {
              type: "keypoints",
              items: [
                "Series: same current, resistances add.",
                "Parallel: same voltage, conductances ($1/R$) add.",
                "Voltage divider: $V_{out} = V_{in} R_2/(R_1 + R_2)$.",
              ],
            },
          ],
          flashcards: [
            { front: "Series equivalent resistance", back: "$R_1 + R_2 + \\dots$" },
            { front: "Two resistors in parallel", back: "$R_1R_2/(R_1 + R_2)$" },
            { front: "n equal resistors R in parallel", back: "$R/n$" },
            { front: "Voltage divider", back: "$V_{out} = V_{in}\\, R_2/(R_1 + R_2)$" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Four 100 Ω resistors are connected in parallel. What is $R_{eq}$?",
              answer: 25,
              unit: "Ω",
              explain: "Equal resistors in parallel: $100/4 = 25$ Ω.",
            },
            {
              kind: "numeric",
              q: "A 12 V supply feeds $R_1 = 3$ kΩ and $R_2 = 1$ kΩ in series. What is the voltage across $R_2$?",
              answer: 3,
              unit: "V",
              explain: "$12 \\times 1/(3 + 1) = 3$ V.",
            },
            {
              kind: "mcq",
              q: "Household appliances are wired in parallel mainly because…",
              options: ["It uses less copper", "Each gets the full mains voltage and works independently", "It increases total resistance", "It halves the current"],
              answer: 1,
              explain: "Every parallel branch sees the same voltage, and one switching off doesn't affect others.",
            },
            {
              kind: "truefalse",
              q: "The equivalent resistance of a parallel combination is always smaller than the smallest branch resistance.",
              answer: true,
              explain: "Each extra path only adds conductance.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "energy-storage",
      title: "Capacitors & Inductors",
      icon: "🧲",
      description: "Components that store energy in electric and magnetic fields.",
      lessons: [
        {
          slug: "capacitors-rc",
          title: "Capacitors & RC Circuits",
          summary: "Storing charge, the RC time constant, and exponential charging.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A camera flash charges for a few seconds, then dumps its energy in about a millisecond — a burst of light far brighter than the battery alone could manage. The hero is a **capacitor**.",
            },
            {
              type: "formula",
              tex: "Q = CV, \\qquad I = C\\frac{dV}{dt}, \\qquad E = \\tfrac{1}{2}CV^2",
              caption: "Capacitance $C$ in farads (F). Real parts range from picofarads to farads.",
            },
            {
              type: "text",
              md: "Two conducting plates separated by an insulator: push charge onto one plate and an equal, opposite charge appears on the other. Because $I = C\\,dV/dt$, a capacitor's voltage **cannot jump instantly** — it must ramp.",
            },
            { type: "heading", text: "Charging through a resistor" },
            {
              type: "formula",
              tex: "V_C(t) = V_s\\left(1 - e^{-t/\\tau}\\right), \\qquad \\tau = RC",
            },
            {
              type: "table",
              headers: ["Time", "Charge reached"],
              rows: [
                ["$1\\tau$", "63.2%"],
                ["$2\\tau$", "86.5%"],
                ["$3\\tau$", "95.0%"],
                ["$5\\tau$", "99.3% (\"fully charged\" in practice)"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `import math

R = 10_000      # ohms
C = 100e-6      # farads
Vs = 5.0
tau = R * C
print(f"tau = {tau:.2f} s")
for k in range(6):
    t = k * tau
    v = Vs * (1 - math.exp(-t / tau))
    print(f"t = {t:.1f} s  Vc = {v:.2f} V  ({v / Vs:.1%})")`,
              caption: "A 10 kΩ, 100 µF RC circuit has a time constant of 1 second.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is the time constant of a 2 kΩ resistor with a 470 µF capacitor (in seconds)?",
                  answer: 0.94,
                  tolerance: 0.01,
                  unit: "s",
                  explain: "$\\tau = RC = 2000 \\times 470 \\times 10^{-6} = 0.94$ s.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Every digital chip sits on a bed of small **decoupling capacitors** (often 100 nF) placed right beside its power pins. When billions of transistors switch at once, these tiny reservoirs supply the burst of current before the voltage can sag.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A switched-off device is safe because it's unplugged.\" Large capacitors in power supplies, microwaves and TVs can hold a dangerous charge long after disconnection. Professionals discharge them deliberately before working.",
            },
            {
              type: "keypoints",
              items: [
                "$Q = CV$; energy stored is $\\tfrac{1}{2}CV^2$.",
                "Capacitor voltage changes gradually; $\\tau = RC$ sets the pace.",
                "After about $5\\tau$ an RC circuit is effectively settled.",
              ],
            },
          ],
          flashcards: [
            { front: "Capacitor charge equation", back: "$Q = CV$" },
            { front: "Energy in a capacitor", back: "$\\tfrac{1}{2}CV^2$" },
            { front: "RC time constant", back: "$\\tau = RC$; reach 63.2% of final voltage after $1\\tau$." },
            { front: "Decoupling capacitor", back: "Small capacitor next to a chip's supply pins that smooths sudden current demands." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A 1,000 µF capacitor is charged to 10 V. How much energy does it store (in joules)?",
              answer: 0.05,
              tolerance: 0.001,
              unit: "J",
              explain: "$E = \\tfrac{1}{2}CV^2 = 0.5 \\times 10^{-3} \\times 100 = 0.05$ J.",
            },
            {
              kind: "mcq",
              q: "After one time constant, a charging capacitor reaches what fraction of the supply voltage?",
              options: ["37%", "50%", "63%", "100%"],
              answer: 2,
              explain: "$1 - e^{-1} \\approx 0.632$.",
            },
            {
              kind: "truefalse",
              q: "The voltage across an ideal capacitor can change instantaneously.",
              answer: false,
              explain: "That would need infinite current, since $I = C\\,dV/dt$.",
            },
            {
              kind: "fill",
              q: "In steady-state DC, a fully charged capacitor behaves like an ___ circuit.",
              answer: ["open"],
              explain: "Once $dV/dt = 0$, no current flows.",
            },
          ],
        },
        {
          slug: "inductors-rl",
          title: "Inductors & RL Circuits",
          summary: "Magnetic energy storage, back-EMF and why relays need flyback diodes.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Unplug a vacuum cleaner while it's running and you might see a tiny spark at the socket. The motor's coils *resisted* the sudden stop of current, briefly producing a high voltage. That stubbornness is **inductance**.",
            },
            {
              type: "formula",
              tex: "V = L\\frac{dI}{dt}, \\qquad E = \\tfrac{1}{2}LI^2, \\qquad \\tau = \\frac{L}{R}",
              caption: "Inductance $L$ in henries (H).",
            },
            {
              type: "table",
              headers: ["", "Capacitor", "Inductor"],
              rows: [
                ["Stores energy in", "Electric field", "Magnetic field"],
                ["Resists sudden change in", "Voltage", "Current"],
                ["DC steady state", "Open circuit", "Short circuit (wire)"],
                ["Time constant with R", "$RC$", "$L/R$"],
                ["Energy", "$\\tfrac{1}{2}CV^2$", "$\\tfrac{1}{2}LI^2$"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Current in a 0.2 H inductor changes by 4 A in 0.01 s. What voltage is induced?",
                  answer: 80,
                  unit: "V",
                  explain: "$V = L\\,\\Delta I/\\Delta t = 0.2 \\times 4 / 0.01 = 80$ V.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "The flyback diode",
              md: "When a transistor switches off a relay coil, $dI/dt$ is huge, so $V = L\\,dI/dt$ spikes — enough to destroy the transistor. A diode across the coil gives the current a safe path to decay. You'll see one beside nearly every relay on a microcontroller board.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Switch-mode power supplies — in your laptop charger and phone adapter — use inductors as energy buckets, switching them on and off tens of thousands of times per second (often far more) to convert voltages efficiently. Wireless chargers transfer energy between two coupled coils.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"An inductor blocks DC.\" It's the opposite: in DC steady state an ideal inductor is just a wire. It opposes *changes* in current, so it impedes AC more as frequency rises.",
            },
            {
              type: "keypoints",
              items: [
                "$V = L\\,dI/dt$: inductors oppose changes in current.",
                "Energy stored: $\\tfrac{1}{2}LI^2$; RL time constant $L/R$.",
                "Protect switches from inductive kickback with a flyback diode.",
              ],
            },
          ],
          flashcards: [
            { front: "Inductor voltage law", back: "$V = L\\,dI/dt$" },
            { front: "Energy in an inductor", back: "$\\tfrac{1}{2}LI^2$" },
            { front: "RL time constant", back: "$\\tau = L/R$" },
            { front: "Flyback diode", back: "Diode across an inductive load that safely absorbs the switch-off voltage spike." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the time constant of a 50 mH inductor in series with 10 Ω (in milliseconds)?",
              answer: 5,
              unit: "ms",
              explain: "$\\tau = L/R = 0.05/10 = 0.005$ s = 5 ms.",
            },
            {
              kind: "mcq",
              q: "In DC steady state, an ideal inductor behaves like…",
              options: ["An open circuit", "A short circuit", "A capacitor", "A battery"],
              answer: 1,
              explain: "With constant current, $dI/dt = 0$ so $V = 0$ — just a wire.",
            },
            {
              kind: "truefalse",
              q: "Doubling the current through an inductor quadruples its stored energy.",
              answer: true,
              explain: "$E = \\tfrac{1}{2}LI^2$ scales with $I^2$.",
            },
            {
              kind: "multi",
              q: "Which devices rely on inductors or coils? (Select all.)",
              options: ["Transformers", "Wireless phone chargers", "Switch-mode power supplies", "A plain carbon resistor"],
              answers: [0, 1, 2],
              explain: "Resistors dissipate energy; they don't store it magnetically.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "ac-circuits",
      title: "AC Circuits",
      icon: "〰️",
      description: "Sinusoids, RMS values, reactance, impedance and resonance.",
      lessons: [
        {
          slug: "sinusoids-rms",
          title: "Sinusoids & RMS",
          summary: "Amplitude, frequency, phase — and why 230 V mains peaks at 325 V.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "The socket in your wall doesn't supply a steady voltage. In India it swings from +325 V to −325 V and back **50 times every second**. So why is it called \"230 V\"?",
            },
            {
              type: "formula",
              tex: "v(t) = V_p \\sin(2\\pi f t + \\phi)",
              caption: "Peak amplitude $V_p$, frequency $f$ (Hz), phase $\\phi$.",
            },
            {
              type: "widget",
              widget: "wave",
              caption: "Change amplitude and frequency. Period $T = 1/f$: at 50 Hz, one cycle lasts 20 ms.",
            },
            { type: "heading", text: "Root-mean-square (RMS)" },
            {
              type: "text",
              md: "RMS is the DC voltage that would deliver the **same average power** to a resistor. For a pure sine wave:",
            },
            {
              type: "formula",
              tex: "V_{\\text{rms}} = \\frac{V_p}{\\sqrt{2}} \\approx 0.707\\,V_p",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Mains is 230 V RMS. What is the peak voltage, to the nearest volt?",
                  answer: 325,
                  tolerance: 1,
                  unit: "V",
                  explain: "$V_p = 230 \\times \\sqrt{2} \\approx 325$ V.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Region", "Nominal voltage (RMS)", "Frequency"],
              rows: [
                ["India, UK, most of Europe", "230 V", "50 Hz"],
                ["USA, Canada", "120 V", "60 Hz"],
                ["Japan", "100 V", "50 Hz (east) / 60 Hz (west)"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Grid operators hold frequency within a tight band around 50 Hz. If demand exceeds supply, generators slow down and frequency falls; automatic controls then add generation or shed load. Frequency is a real-time health signal for the whole grid.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"RMS is just the average voltage.\" The plain average of a sine wave over a full cycle is **zero**. RMS squares first (making everything positive), averages, then takes the square root.",
            },
            {
              type: "keypoints",
              items: [
                "A sinusoid is defined by amplitude, frequency and phase.",
                "$T = 1/f$; at 50 Hz, $T = 20$ ms.",
                "$V_{rms} = V_p/\\sqrt{2}$ for sine waves; rated mains values are RMS.",
              ],
            },
          ],
          flashcards: [
            { front: "Period and frequency", back: "$T = 1/f$" },
            { front: "RMS of a sine wave", back: "$V_p/\\sqrt{2} \\approx 0.707\\,V_p$" },
            { front: "Indian mains supply", back: "230 V RMS, 50 Hz." },
            { front: "Meaning of RMS", back: "The equivalent DC value that delivers the same power to a resistor." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the period of a 60 Hz supply, in milliseconds? (1 decimal place)",
              answer: 16.7,
              tolerance: 0.1,
              unit: "ms",
              explain: "$T = 1/60 \\approx 0.0167$ s = 16.7 ms.",
            },
            {
              kind: "numeric",
              q: "A sine wave peaks at 10 V. What is its RMS value? (2 decimal places)",
              answer: 7.07,
              tolerance: 0.01,
              unit: "V",
              explain: "$10/\\sqrt{2} \\approx 7.07$ V.",
            },
            {
              kind: "truefalse",
              q: "The arithmetic mean of a pure sine wave over a whole cycle is zero.",
              answer: true,
              explain: "Positive and negative halves cancel exactly.",
            },
            {
              kind: "mcq",
              q: "In $v(t) = 5\\sin(100\\pi t)$, what is the frequency?",
              options: ["5 Hz", "50 Hz", "100 Hz", "314 Hz"],
              answer: 1,
              explain: "$2\\pi f = 100\\pi \\Rightarrow f = 50$ Hz.",
            },
          ],
        },
        {
          slug: "impedance-resonance",
          title: "Reactance, Impedance & Resonance",
          summary: "How capacitors and inductors behave at different frequencies, and how radios tune.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Turn the dial on an old FM radio and you're adjusting a capacitor until one station's frequency rings through while all the others fade. That's **resonance**, and it's built on frequency-dependent opposition called **reactance**.",
            },
            {
              type: "formula",
              tex: "X_L = 2\\pi f L \\qquad X_C = \\frac{1}{2\\pi f C}",
              caption: "Inductive reactance rises with frequency; capacitive reactance falls.",
            },
            {
              type: "text",
              md: "Impedance combines resistance and reactance as a complex number: $Z = R + jX$, where engineers write $j = \\sqrt{-1}$ (since $i$ is taken by current). For a series RLC circuit:",
            },
            {
              type: "formula",
              tex: "Z = R + j\\left(X_L - X_C\\right), \\qquad |Z| = \\sqrt{R^2 + (X_L - X_C)^2}",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is the reactance of a 10 µF capacitor at 50 Hz, to the nearest ohm?",
                  answer: 318,
                  tolerance: 1,
                  unit: "Ω",
                  explain: "$X_C = 1/(2\\pi \\times 50 \\times 10^{-5}) \\approx 318$ Ω.",
                },
              ],
            },
            { type: "heading", text: "Resonance" },
            {
              type: "formula",
              tex: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}",
              caption: "At $f_0$, $X_L = X_C$: the reactances cancel and a series RLC circuit's impedance is just $R$.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `import math

L = 10e-3     # 10 mH
C = 100e-9    # 100 nF
R = 50
f0 = 1 / (2 * math.pi * math.sqrt(L * C))
print(f"resonant frequency = {f0:.0f} Hz")

for f in [1000, 3000, f0, 8000, 20000]:
    XL = 2 * math.pi * f * L
    XC = 1 / (2 * math.pi * f * C)
    Z = math.sqrt(R**2 + (XL - XC) ** 2)
    print(f"f={f:8.0f} Hz  XL={XL:8.1f}  XC={XC:8.1f}  |Z|={Z:8.1f} ohm")`,
              caption: "Impedance dips to R at resonance.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Utilities penalise large factories for poor **power factor** — when inductive loads like motors make current lag voltage, wasting capacity in the grid. Banks of capacitors are installed to cancel the inductive reactance and bring the power factor close to 1.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Impedance magnitudes add like resistances.\" A 3 Ω resistor in series with a 4 Ω inductive reactance gives $|Z| = \\sqrt{3^2 + 4^2} = 5$ Ω, not 7 Ω. Resistance and reactance are 90° apart.",
            },
            {
              type: "keypoints",
              items: [
                "$X_L = 2\\pi fL$ (grows with $f$); $X_C = 1/(2\\pi fC)$ (shrinks with $f$).",
                "Impedance $Z = R + jX$ combines them as a complex number.",
                "Resonance at $f_0 = 1/(2\\pi\\sqrt{LC})$ — the basis of tuning and filters.",
              ],
            },
          ],
          flashcards: [
            { front: "Inductive reactance", back: "$X_L = 2\\pi f L$" },
            { front: "Capacitive reactance", back: "$X_C = 1/(2\\pi f C)$" },
            { front: "Resonant frequency (LC)", back: "$f_0 = 1/(2\\pi\\sqrt{LC})$" },
            { front: "Why engineers use $j$", back: "$i$ already denotes current, so $j = \\sqrt{-1}$." },
            { front: "Power factor correction", back: "Adding capacitors to cancel inductive reactance from motors." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A series circuit has $R = 6$ Ω and net reactance $X = 8$ Ω. What is $|Z|$?",
              answer: 10,
              unit: "Ω",
              explain: "$\\sqrt{36 + 64} = 10$ Ω.",
            },
            {
              kind: "mcq",
              q: "As frequency increases, a capacitor's reactance…",
              options: ["Increases", "Decreases", "Stays constant", "Becomes negative resistance"],
              answer: 1,
              explain: "$X_C = 1/(2\\pi fC)$ falls as $f$ rises — capacitors pass high frequencies.",
            },
            {
              kind: "truefalse",
              q: "At resonance in a series RLC circuit, the impedance equals R.",
              answer: true,
              explain: "$X_L = X_C$, so the reactive parts cancel.",
            },
            {
              kind: "mcq",
              q: "If you quadruple C in an LC circuit, the resonant frequency…",
              options: ["Quadruples", "Doubles", "Halves", "Quarters"],
              answer: 2,
              explain: "$f_0 \\propto 1/\\sqrt{C}$, and $1/\\sqrt{4} = 1/2$.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "digital-logic",
      title: "Digital Logic & Binary",
      icon: "💡",
      description: "Bits, number systems and the gates that compute with them.",
      lessons: [
        {
          slug: "binary-number-systems",
          title: "Binary, Hex & Two's Complement",
          summary: "Represent numbers with bits, convert between bases and store negatives.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Every photo, song and message on your phone is ultimately a long string of 0s and 1s — voltages that are either *low* or *high*. Two states are easy to build reliably and hard to confuse in the presence of noise.",
            },
            {
              type: "widget",
              widget: "binary",
              caption: "Flip bits and watch the decimal value. Each position is worth double the one to its right.",
            },
            {
              type: "formula",
              tex: "1011_2 = 1\\cdot 2^3 + 0\\cdot 2^2 + 1\\cdot 2^1 + 1\\cdot 2^0 = 11_{10}",
            },
            {
              type: "table",
              headers: ["Decimal", "Binary", "Hex"],
              rows: [
                ["9", "1001", "9"],
                ["10", "1010", "A"],
                ["15", "1111", "F"],
                ["16", "1 0000", "10"],
                ["255", "1111 1111", "FF"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Convert $110101_2$ to decimal.",
                  answer: 53,
                  explain: "$32 + 16 + 4 + 1 = 53$.",
                },
              ],
            },
            { type: "heading", text: "Negative numbers: two's complement" },
            {
              type: "text",
              md: "To negate an $n$-bit number: **invert all bits, then add 1**. In 8 bits, $5 = 00000101$, so $-5 = 11111010 + 1 = 11111011$. The beauty: ordinary binary addition then works for negatives too, so CPUs need only one adder.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def to_bits(n, width=8):
    return format(n & (2**width - 1), f"0{width}b")

for n in [5, -5, 127, -128, -1]:
    print(f"{n:>5} -> {to_bits(n)}")

print(int("11111011", 2) - 256)   # back to -5
print(hex(255), bin(255), int("FF", 16))`,
              caption: "An n-bit two's complement range is −2^(n−1) to 2^(n−1) − 1.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Colours on the web are hex triples: `#FF8800` means red 255, green 136, blue 0. IPv4 addresses are 32-bit numbers, and the 2038 problem looms because many systems store Unix time as a signed 32-bit integer, which overflows on 19 January 2038.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A kilobyte is exactly 1,000 bytes — or exactly 1,024.\" Both are in use! SI defines kB = 1,000 B; the binary unit KiB = 1,024 B. That's why a \"1 TB\" drive shows about 931 GiB in your operating system.",
            },
            {
              type: "keypoints",
              items: [
                "Binary place values are powers of 2; hex groups 4 bits per digit.",
                "$n$ bits encode $2^n$ distinct values.",
                "Two's complement: invert and add 1; range $-2^{n-1}$ to $2^{n-1} - 1$.",
              ],
            },
          ],
          flashcards: [
            { front: "Values representable with n bits", back: "$2^n$" },
            { front: "Two's complement negation", back: "Invert every bit, then add 1." },
            { front: "8-bit signed range", back: "−128 to 127." },
            { front: "Hex digit F", back: "15 in decimal, 1111 in binary." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many distinct values can 10 bits represent?",
              answer: 1024,
              explain: "$2^{10} = 1024$.",
            },
            {
              kind: "mcq",
              q: "What is $-1$ in 8-bit two's complement?",
              options: ["10000001", "11111110", "11111111", "00000001"],
              answer: 2,
              explain: "Invert 00000001 → 11111110, add 1 → 11111111.",
            },
            {
              kind: "fill",
              q: "The hexadecimal number 2A equals ___ in decimal.",
              answer: ["42"],
              explain: "$2 \\times 16 + 10 = 42$.",
            },
            {
              kind: "truefalse",
              q: "The largest 8-bit unsigned number is 256.",
              answer: false,
              explain: "Values run 0 to 255; 256 values in total.",
            },
          ],
        },
        {
          slug: "logic-gates",
          title: "Logic Gates & Boolean Algebra",
          summary: "AND, OR, NOT, XOR, NAND — and building a half adder.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A modern processor contains billions of transistors, yet they're organised into a handful of simple building blocks called **logic gates**. Combine enough of them and you can add numbers, store data and run this very web page.",
            },
            {
              type: "table",
              headers: ["A", "B", "AND", "OR", "XOR", "NAND", "NOR"],
              rows: [
                ["0", "0", "0", "0", "0", "1", "1"],
                ["0", "1", "0", "1", "1", "1", "0"],
                ["1", "0", "0", "1", "1", "1", "0"],
                ["1", "1", "1", "1", "0", "0", "0"],
              ],
            },
            {
              type: "text",
              md: "**NOT** simply inverts: $\\overline{0} = 1$, $\\overline{1} = 0$. In Boolean notation, AND is $A \\cdot B$, OR is $A + B$ and XOR is $A \\oplus B$.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "De Morgan's laws",
              md: "$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$ and $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$. Break the bar, change the sign.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which gate outputs 1 only when its inputs differ?",
                  options: ["AND", "OR", "XOR", "NAND"],
                  answer: 2,
                  explain: "XOR = exclusive OR: true when exactly one input is 1.",
                },
              ],
            },
            { type: "heading", text: "Building a half adder" },
            {
              type: "text",
              md: "Adding two bits gives a **sum** bit and a **carry** bit: $1 + 1 = 10_2$. Look at the truth table: sum is XOR, carry is AND.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def half_adder(a, b):
    return a ^ b, a & b          # (sum, carry)

def full_adder(a, b, cin):
    s1, c1 = half_adder(a, b)
    s, c2 = half_adder(s1, cin)
    return s, c1 | c2

def add_bits(x, y, width=4):
    carry, out = 0, 0
    for i in range(width):
        s, carry = full_adder((x >> i) & 1, (y >> i) & 1, carry)
        out |= s << i
    return out, carry

print("A B | sum carry")
for a in (0, 1):
    for b in (0, 1):
        print(a, b, "|", *half_adder(a, b))
print("6 + 7 with a 4-bit ripple adder:", add_bits(6, 7))`,
              caption: "Chain full adders and you get a ripple-carry adder — the heart of an ALU.",
            },
            {
              type: "callout",
              tone: "fact",
              md: "**NAND is universal**: any Boolean function can be built from NAND gates alone (NOR too). NOT A is simply A NAND A.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Chip designers rarely draw gates by hand. They write hardware description languages (Verilog, VHDL), and synthesis tools turn that code into millions of standard gates. FPGAs let engineers reprogram that logic after manufacture — popular in telecoms, prototyping and high-frequency trading.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"OR in logic means one or the other, but not both.\" That's XOR. Logical OR is *inclusive*: $1 + 1 = 1$.",
            },
            {
              type: "keypoints",
              items: [
                "Basic gates: AND, OR, NOT; derived: XOR, NAND, NOR.",
                "Half adder: sum = A XOR B, carry = A AND B.",
                "NAND (or NOR) alone can build any digital circuit.",
              ],
            },
          ],
          flashcards: [
            { front: "XOR truth rule", back: "Output 1 when inputs differ." },
            { front: "Half adder outputs", back: "Sum = A ⊕ B, Carry = A · B." },
            { front: "De Morgan's laws", back: "$\\overline{AB} = \\overline{A} + \\overline{B}$; $\\overline{A+B} = \\overline{A}\\,\\overline{B}$" },
            { front: "Universal gates", back: "NAND and NOR — each can build any Boolean function." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A NAND gate with inputs A = 1, B = 1 outputs…",
              options: ["0", "1", "Undefined", "Depends on clock"],
              answer: 0,
              explain: "AND gives 1; NAND inverts it to 0.",
            },
            {
              kind: "truefalse",
              q: "By De Morgan's law, NOT(A OR B) equals (NOT A) AND (NOT B).",
              answer: true,
              explain: "Break the bar and change OR to AND.",
            },
            {
              kind: "multi",
              q: "For a half adder with A = 1 and B = 1, which statements are true? (Select all.)",
              options: ["Sum = 0", "Sum = 1", "Carry = 1", "Carry = 0"],
              answers: [0, 2],
              explain: "$1 + 1 = 10_2$: sum 0, carry 1.",
            },
            {
              kind: "numeric",
              q: "How many rows does the truth table of a 3-input gate have?",
              answer: 8,
              explain: "$2^3 = 8$ input combinations.",
            },
          ],
        },
      ],
    },
  ],
};
