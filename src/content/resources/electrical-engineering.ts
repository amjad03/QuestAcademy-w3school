import type { CourseResources } from "./types";

export const electricalEngineeringResources: CourseResources = {
  course: "electrical-engineering",
  caseStudies: [
    {
      slug: "hostel-wiring-overload",
      title: "Why the hostel circuit breaker kept tripping",
      summary: "Applying Ohm's law and power calculations to a real overloaded branch circuit.",
      units: ["circuit-fundamentals", "circuit-analysis"],
      minutes: 14,
      scenario: `Every evening at about 9 pm, the breaker for the third floor of a college hostel tripped. The floor shares one 230 V branch circuit protected by a **16 A** miniature circuit breaker (MCB). Maintenance staff replaced the MCB twice, assuming it was faulty.

An electrical-engineering student offered to investigate. She listed the typical loads switched on in the evening on that floor (all connected in **parallel** across the 230 V supply) and noted that two students had started using kettles for instant noodles.`,
      data: {
        caption: "Evening loads on the third-floor circuit",
        headers: ["Appliance", "Quantity", "Power each (W)"],
        rows: [
          ["LED tube light", "12", "20"],
          ["Ceiling fan", "10", "75"],
          ["Laptop charger", "14", "65"],
          ["Electric kettle", "2", "1,500"],
          ["Iron (occasional)", "1", "1,000"],
        ],
      },
      questions: [
        "Compute the total power drawn when everything is on, and the resulting current at 230 V.",
        "Why does connecting appliances in parallel increase the current through the breaker?",
        "Which single appliance contributes the most, and how much current does one kettle draw?",
        "Suggest two engineering fixes, and explain why simply fitting a 32 A breaker on the same wiring is dangerous.",
      ],
      outcome: `Total power = 240 + 750 + 910 + 3,000 + 1,000 = 5,900 W, so $I = P/V = 5900/230 \\approx 25.7$ A — far above the 16 A rating. Parallel branches each draw their own current and the currents add (KCL) at the supply. One kettle alone draws $1500/230 \\approx 6.5$ A.

The fix was a dedicated 16 A circuit for a pantry with the kettles and iron, and a notice limiting high-power appliances in rooms. Upsizing only the breaker would let the existing 1.5 mm² wiring carry more current than it is rated for, risking overheating and fire — the breaker protects the *wire*, not the appliances.`,
      takeaways: [
        "In parallel circuits, branch currents add up at the source.",
        "$P = VI$ quickly turns appliance ratings into current demand.",
        "Breakers are sized to protect cables; never upsize one without upsizing the wiring.",
        "Heating appliances dominate household loads.",
      ],
    },
    {
      slug: "solar-inverter-power-factor",
      title: "A rooftop solar inverter and the mystery of power factor",
      summary: "Why a workshop's meter showed more 'apparent' power than its machines seemed to use.",
      units: ["ac-circuits", "energy-storage"],
      minutes: 17,
      scenario: `A small furniture workshop installed a 5 kW rooftop solar system and expected its electricity bill to fall by about 70%. It fell by only 40%, and the utility began charging a penalty for **low power factor**.

The workshop runs induction motors (saws, planers and a compressor). An energy auditor measured one large motor: supply 230 V RMS, current 18 A RMS, real power 2.9 kW.`,
      data: {
        caption: "Measurements on the main planer motor",
        headers: ["Quantity", "Value"],
        rows: [
          ["Voltage (RMS)", "230 V"],
          ["Current (RMS)", "18 A"],
          ["Real power P", "2.9 kW"],
          ["Frequency", "50 Hz"],
        ],
      },
      questions: [
        "Compute the apparent power $S$ and the power factor $\\cos\\phi$ for the motor.",
        "What is the reactive power $Q$? Is the motor's load inductive or capacitive?",
        "Explain why a low power factor makes the utility charge a penalty even though $P$ is unchanged.",
        "The auditor proposed a capacitor bank. Why does a capacitor help here?",
      ],
      outcome: `$S = V_{rms} I_{rms} = 230 \\times 18 = 4.14$ kVA, so $\\cos\\phi = 2.9/4.14 \\approx 0.70$. Then $Q = \\sqrt{S^2 - P^2} \\approx 2.96$ kvar, lagging — induction motors are inductive.

The utility must supply the full current (18 A), heating its cables and transformers, even though only 2.9 kW does useful work, hence the penalty. Capacitors draw *leading* reactive current that cancels part of the motor's lagging current. A correctly sized capacitor bank raised the power factor to 0.95, cut current to about 13 A and removed the penalty.`,
      takeaways: [
        "In AC circuits, $S = VI$ (VA) is not the same as real power $P$ (W).",
        "Power factor $= P/S = \\cos\\phi$; inductive loads lag.",
        "Capacitors supply leading reactive power and correct lagging power factor.",
        "Energy projects need load analysis, not just generation numbers.",
      ],
    },
  ],
  readings: {
    "circuit-fundamentals": [
      { title: "Circuits and Electronics (6.002)", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", source: "MIT OpenCourseWare", type: "course", level: "intermediate", note: "Classic MIT circuits course with lectures and problem sets." },
      { title: "Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law", source: "Wikipedia", type: "article", level: "intro", note: "History, forms and limits of Ohm's law." },
      { title: "Electrical engineering (circuits)", url: "https://www.khanacademy.org/science/electrical-engineering", source: "Khan Academy", type: "course", level: "intro", note: "Video lessons on resistors, sources and analysis." },
      { title: "University Physics Volume 2 (OpenStax)", url: "https://openstax.org/details/books/university-physics-volume-2", source: "OpenStax", type: "book", level: "intro", note: "Free textbook; chapters 9–10 cover current and circuits." },
    ],
    "circuit-analysis": [
      { title: "Kirchhoff's circuit laws", url: "https://en.wikipedia.org/wiki/Kirchhoff%27s_circuit_laws", source: "Wikipedia", type: "article", level: "intro", note: "KCL and KVL with worked examples." },
      { title: "Nodal analysis", url: "https://en.wikipedia.org/wiki/Nodal_analysis", source: "Wikipedia", type: "article", level: "intermediate", note: "A systematic method built on KCL." },
      { title: "Circuit analysis (Khan Academy EE)", url: "https://www.khanacademy.org/science/electrical-engineering", source: "Khan Academy", type: "course", level: "intro", note: "Node voltage and mesh current methods." },
    ],
    "energy-storage": [
      { title: "RC circuit", url: "https://en.wikipedia.org/wiki/RC_circuit", source: "Wikipedia", type: "article", level: "intermediate", note: "Charging, discharging and the time constant τ = RC." },
      { title: "Inductor", url: "https://en.wikipedia.org/wiki/Inductor", source: "Wikipedia", type: "article", level: "intro", note: "How inductors store energy in magnetic fields." },
      { title: "University Physics Volume 2 — capacitance & inductance", url: "https://openstax.org/details/books/university-physics-volume-2", source: "OpenStax", type: "book", level: "intermediate", note: "Chapters 8 and 14." },
    ],
    "ac-circuits": [
      { title: "Power factor", url: "https://en.wikipedia.org/wiki/Power_factor", source: "Wikipedia", type: "article", level: "intermediate", note: "Real, reactive and apparent power with phasor diagrams." },
      { title: "Electrical impedance", url: "https://en.wikipedia.org/wiki/Electrical_impedance", source: "Wikipedia", type: "article", level: "intermediate", note: "Complex impedance and phasors." },
      { title: "Root mean square", url: "https://en.wikipedia.org/wiki/Root_mean_square", source: "Wikipedia", type: "article", level: "intro", note: "Why RMS values describe AC power." },
      { title: "6.002 lectures on sinusoidal steady state", url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/", source: "MIT OpenCourseWare", type: "course", level: "advanced", note: "Impedance methods and resonance." },
    ],
    "digital-logic": [
      { title: "Logic gate", url: "https://en.wikipedia.org/wiki/Logic_gate", source: "Wikipedia", type: "article", level: "intro", note: "Symbols, truth tables and CMOS implementation." },
      { title: "Two's complement", url: "https://en.wikipedia.org/wiki/Two%27s_complement", source: "Wikipedia", type: "article", level: "intro", note: "How computers store negative numbers." },
      { title: "Computation Structures (6.004)", url: "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/", source: "MIT OpenCourseWare", type: "course", level: "advanced", note: "From gates to processors." },
    ],
  },
  competencies: [
    { id: "fundamentals", name: "Circuit fundamentals", description: "Relate charge, current, voltage, resistance and power.", lessons: ["electrical-engineering/circuit-fundamentals/charge-current-voltage", "electrical-engineering/circuit-fundamentals/ohms-law-power"] },
    { id: "analysis", name: "Circuit analysis", description: "Apply KCL/KVL to series and parallel networks.", lessons: ["electrical-engineering/circuit-analysis/kcl-kvl", "electrical-engineering/circuit-analysis/series-parallel"] },
    { id: "transients", name: "Energy storage & transients", description: "Analyse RC and RL behaviour.", lessons: ["electrical-engineering/energy-storage/capacitors-rc", "electrical-engineering/energy-storage/inductors-rl"] },
    { id: "ac", name: "AC circuits & power", description: "Use RMS, phasors, impedance and resonance.", lessons: ["electrical-engineering/ac-circuits/sinusoids-rms", "electrical-engineering/ac-circuits/impedance-resonance"] },
    { id: "digital", name: "Digital logic", description: "Work with binary numbers and logic gates.", lessons: ["electrical-engineering/digital-logic/binary-number-systems", "electrical-engineering/digital-logic/logic-gates"] },
  ],
};
