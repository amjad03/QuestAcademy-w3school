import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Semiconductor Electronics (NCERT: CBSE + Karnataka II PUC) = Electronic Devices (ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-semiconductor-electronics",
    title: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    icon: "💡",
    description:
      "Energy bands, intrinsic and extrinsic semiconductors, the p-n junction diode and its V-I characteristics, rectifiers, special-purpose diodes, and (for ISC and some entrance exams) transistors and logic gates.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-energy-bands-semiconductors",
        title: "Energy Bands, Intrinsic and Extrinsic Semiconductors",
        summary:
          "Why some solids conduct and others do not: energy bands and the band gap, electrons and holes in pure silicon, and n-type and p-type doping with the relation n_e n_h = n_i².",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "📱",
            caption:
              "Every phone, solar panel on an Indian rooftop and LED street light runs on silicon chips. Silicon is neither a good conductor nor a good insulator, and that is exactly why it is useful.",
          },
          {
            type: "text",
            md: t`In an isolated atom an electron can only have certain sharp energies. When about $10^{28}$ atoms per cubic metre pack together in a crystal, the outer electrons of neighbouring atoms interact, and each sharp level spreads into a huge number of very closely spaced levels. Such a nearly continuous set of allowed energies is an **energy band**.

The band holding the valence electrons is the **valence band** (VB). The next allowed band above it is the **conduction band** (CB). The gap of forbidden energies between the top of the VB and the bottom of the CB is the **energy band gap** $E_g$. An electron can carry current only if it has empty levels just above it to move into, which is why electrons in the conduction band (and empty places in the valence band) matter.`,
          },
          {
            type: "table",
            headers: ["Solid", "Band picture", "Band gap", "Resistivity (Ω m)", "Example"],
            rows: [
              ["Metal (conductor)", "CB partly filled, or VB and CB overlap", t`$E_g \approx 0$`, t`$10^{-2}$ to $10^{-8}$`, "copper, aluminium"],
              ["Semiconductor", "VB full and CB empty at 0 K; small gap", t`$E_g < 3$ eV`, t`$10^{-5}$ to $10^{6}$`, "Si (1.1 eV), Ge (0.71 eV)"],
              ["Insulator", "VB full, CB empty; large gap", t`$E_g > 3$ eV`, t`$10^{11}$ to $10^{19}$`, "diamond (5.4 eV)"],
            ],
          },
          {
            type: "text",
            md: t`Semiconductors may be **elemental** (Si, Ge) or **compound**: inorganic (CdS, GaAs, CdSe, InP), organic (anthracene, doped phthalocyanines) or organic polymers (polypyrrole, polyaniline, polythiophene).

**Intrinsic semiconductor.** In pure Si or Ge each atom shares its four valence electrons with four neighbours through covalent bonds. At 0 K every bond is complete, so the crystal behaves as an insulator. At room temperature thermal energy breaks a few bonds. Each broken bond frees one electron and leaves a vacancy called a **hole**, which behaves like a positive charge $+e$. A neighbouring bonded electron can jump into the hole, so the hole moves the other way. In a pure crystal electrons and holes are created in pairs, and some pairs also **recombine**; at equilibrium the rate of generation equals the rate of recombination.`,
          },
          {
            type: "formula",
            tex: t`n_e = n_h = n_i \qquad I = I_e + I_h`,
            caption:
              "Intrinsic semiconductor: free-electron and hole concentrations are equal (n_i is the intrinsic carrier concentration). Under an applied field both electrons and holes contribute to the total current.",
          },
          {
            type: "heading",
            text: "Extrinsic semiconductors: doping",
          },
          {
            type: "text",
            md: t`Pure silicon at room temperature has very few carriers ($n_i \approx 1.5 \times 10^{16}\ \text{m}^{-3}$ against about $5 \times 10^{28}$ atoms per m³). Adding a tiny, controlled amount of a suitable impurity (a few parts per million) is called **doping**. The dopant atom must be of nearly the same size as the host atom so that it sits in the lattice without distorting it. A doped semiconductor is **extrinsic**.`,
          },
          {
            type: "table",
            headers: ["", "n-type", "p-type"],
            rows: [
              ["Dopant", "pentavalent (valency 5): As, Sb, P", "trivalent (valency 3): B, Al, Ga, In"],
              ["Name of dopant", "donor (gives an extra electron)", "acceptor (accepts an electron, creating a hole)"],
              ["Majority carriers", "electrons", "holes"],
              ["Minority carriers", "holes", "electrons"],
              ["Concentrations", t`$n_e \gg n_h$`, t`$n_h \gg n_e$`],
              ["Extra energy level", "donor level just below the CB", "acceptor level just above the VB"],
              ["Ionised dopant left behind", "fixed positive donor ion", "fixed negative acceptor ion"],
            ],
          },
          {
            type: "formula",
            tex: t`n_e\, n_h = n_i^{2}`,
            caption:
              "Holds for intrinsic and extrinsic semiconductors in thermal equilibrium. Adding donors raises n_e and, because of extra recombination, lowers n_h below n_i.",
          },
          {
            type: "example",
            title: "Carrier concentrations in doped silicon",
            problem: t`A silicon crystal has $5 \times 10^{28}$ atoms m$^{-3}$ and $n_i = 1.5 \times 10^{16}\ \text{m}^{-3}$ at 300 K. It is doped with phosphorus at one atom per $10^{7}$ silicon atoms. Find $n_e$ and $n_h$ and name the type of semiconductor.`,
            steps: [
              t`Number of phosphorus atoms per m³: $N_D = \dfrac{5 \times 10^{28}}{10^{7}} = 5 \times 10^{21}\ \text{m}^{-3}$.`,
              t`Each P atom donates one electron, and $N_D \gg n_i$, so $n_e \approx N_D = 5 \times 10^{21}\ \text{m}^{-3}$.`,
              t`From $n_e n_h = n_i^2$: $n_h = \dfrac{(1.5 \times 10^{16})^2}{5 \times 10^{21}} = \dfrac{2.25 \times 10^{32}}{5 \times 10^{21}} = 4.5 \times 10^{10}\ \text{m}^{-3}$.`,
              "Phosphorus is pentavalent, so the crystal is n-type.",
            ],
            answer: t`$n_e \approx 5 \times 10^{21}\ \text{m}^{-3}$, $n_h \approx 4.5 \times 10^{10}\ \text{m}^{-3}$; n-type semiconductor.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A silicon sample with $n_i = 1.5 \times 10^{16}\ \text{m}^{-3}$ is doped so that $n_h = 4.5 \times 10^{22}\ \text{m}^{-3}$. Find $n_e$ in units of $10^{9}\ \text{m}^{-3}$.`,
                answer: 5,
                tolerance: 0.05,
                explain: t`$n_e = n_i^2 / n_h = 2.25 \times 10^{32} / 4.5 \times 10^{22} = 5 \times 10^{9}\ \text{m}^{-3}$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A p-type semiconductor is positively charged because it has extra holes.",
            right: "Every extrinsic semiconductor, n-type or p-type, is electrically neutral as a whole.",
            why: "The dopant atoms are neutral when added. In p-type material each hole is balanced by a fixed negative acceptor ion; in n-type material each extra free electron is balanced by a fixed positive donor ion. 'p' and 'n' name the majority carrier, not the net charge.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Doping silicon: which type does each impurity give?",
              groups: ["n-type", "p-type"],
              items: [
                { text: "Arsenic (As)", group: 0, hint: "Group 15, five valence electrons." },
                { text: "Boron (B)", group: 1, hint: "Group 13, three valence electrons." },
                { text: "Antimony (Sb)", group: 0, hint: "Group 15, it donates an electron." },
                { text: "Indium (In)", group: 1, hint: "Group 13, it leaves a hole." },
                { text: "Phosphorus (P)", group: 0, hint: "Pentavalent donor." },
                { text: "Aluminium (Al)", group: 1, hint: "Trivalent acceptor." },
              ],
              explain: "Pentavalent atoms (As, Sb, P) are **donors** and give n-type material. Trivalent atoms (B, Al, Ga, In) are **acceptors** and give p-type material.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A 3-mark question often asks you to draw the energy band diagrams of a conductor, a semiconductor and an insulator. Label VB, CB and the gap with typical values, and for n-type and p-type show the donor level just below the CB and the acceptor level just above the VB. Missing labels cost marks.",
          },
          {
            type: "keypoints",
            items: [
              "Energy bands form because atomic levels split when atoms come close; the forbidden gap between VB and CB is the band gap E_g.",
              "Conductor: E_g ≈ 0; semiconductor: E_g < 3 eV (Si 1.1 eV, Ge 0.71 eV); insulator: E_g > 3 eV.",
              "Intrinsic: n_e = n_h = n_i; a hole acts as a +e charge carrier.",
              "Pentavalent donors give n-type (electrons majority); trivalent acceptors give p-type (holes majority).",
              "n_e n_h = n_i² in thermal equilibrium; doped crystals stay electrically neutral.",
            ],
          },
        ],
        flashcards: [
          { front: "Energy band gap", back: "The range of forbidden energies between the top of the valence band and the bottom of the conduction band." },
          { front: "Band gaps of Si, Ge and diamond", back: "About 1.1 eV, 0.71 eV and 5.4 eV." },
          { front: "Hole", back: "A vacancy left by an electron in a covalent bond; it behaves as a carrier of charge +e and moves opposite to the electrons that fill it." },
          { front: "Intrinsic semiconductor", back: "A pure semiconductor in which n_e = n_h = n_i." },
          { front: "Donor impurity", back: "A pentavalent atom (As, Sb, P) that gives an extra free electron; it produces n-type material." },
          { front: "Acceptor impurity", back: "A trivalent atom (B, Al, Ga, In) that creates a hole; it produces p-type material." },
          { front: "Mass-action relation", back: "n_e n_h = n_i² in thermal equilibrium." },
          { front: "Why does pure Si behave as an insulator at 0 K?", back: "All covalent bonds are intact, the valence band is full and the conduction band is empty, so there are no free carriers." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In an insulator the energy band gap is typically:",
            options: ["zero", "less than 3 eV", "greater than 3 eV", "negative, because the bands overlap"],
            answer: 2,
            explain: "Insulators have E_g > 3 eV (diamond about 5.4 eV). Zero or overlapping bands describe metals; E_g < 3 eV is a semiconductor.",
          },
          {
            kind: "mcq",
            q: "Germanium doped with indium is:",
            options: ["n-type, with electrons as majority carriers", "p-type, with holes as majority carriers", "intrinsic", "positively charged"],
            answer: 1,
            explain: "Indium is trivalent, an acceptor, so it produces p-type material with holes as majority carriers. The crystal stays neutral.",
          },
          {
            kind: "numeric",
            q: t`An intrinsic semiconductor has $n_i = 2 \times 10^{16}\ \text{m}^{-3}$. After doping, $n_e = 8 \times 10^{20}\ \text{m}^{-3}$. Find $n_h$ in units of $10^{11}\ \text{m}^{-3}$.`,
            answer: 5,
            tolerance: 0.05,
            difficulty: 2,
            hint: t`Use $n_h = n_i^2 / n_e$.`,
            explain: t`$n_h = (2 \times 10^{16})^2 / (8 \times 10^{20}) = 4 \times 10^{32} / 8 \times 10^{20} = 5 \times 10^{11}\ \text{m}^{-3}$.`,
          },
          {
            kind: "truefalse",
            q: "In n-type silicon the donor energy level lies just below the bottom of the conduction band.",
            answer: true,
            explain: "The fifth electron of the donor is loosely bound, so very little energy lifts it into the conduction band.",
          },
          {
            kind: "multi",
            q: "Which of these statements about an intrinsic semiconductor are correct?",
            options: [
              "The number of free electrons equals the number of holes.",
              "It behaves like an insulator at 0 K.",
              "Holes carry no current because they are only vacancies.",
              "Its conductivity rises as temperature rises.",
            ],
            answers: [0, 1, 3],
            explain: "Electrons and holes are made in pairs, so n_e = n_h. At 0 K no bonds are broken. Holes do carry current (the total is I_e + I_h). Higher temperature breaks more bonds, so conductivity increases.",
          },
          {
            kind: "fill",
            q: "The dopant atom should have nearly the same ___ as the host atom so that it does not distort the crystal lattice.",
            answer: ["size", "atomic size"],
            explain: "A dopant of similar size can take the place of a host atom without disturbing the lattice.",
          },
          {
            kind: "mcq",
            q: "Which of the following is an organic polymer semiconductor?",
            options: ["GaAs", "CdS", "Polyaniline", "Germanium"],
            answer: 2,
            explain: "Polyaniline (like polypyrrole and polythiophene) is an organic polymer semiconductor. GaAs and CdS are inorganic compounds; Ge is elemental.",
          },
          {
            kind: "mcq",
            q: "When pure silicon is doped with arsenic, the hole concentration:",
            options: ["increases above n_i", "stays equal to n_i", "falls below n_i", "becomes exactly zero"],
            answer: 2,
            difficulty: 2,
            explain: "The extra electrons recombine with holes; since n_e n_h = n_i² and n_e has risen, n_h must fall below n_i. It never becomes exactly zero.",
          },
        ],
      },

      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-pn-junction-diode",
        title: "The p-n Junction and the Semiconductor Diode",
        summary:
          "How diffusion and drift build a depletion region and barrier potential, what forward and reverse bias do, and how to read the V-I characteristic and dynamic resistance of a diode.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🔌",
            caption: "Inside every phone charger, diodes let current through in one direction and block it in the other. That one-way behaviour comes from a p-n junction.",
          },
          {
            type: "text",
            md: t`A **p-n junction** is made when one part of a single crystal is p-type and the next part is n-type (for example by diffusing acceptor atoms into one side of an n-type wafer). It is not made by pressing two separate pieces together.

**Diffusion.** The p side has many holes and the n side has many electrons. Carriers move from high to low concentration: holes diffuse p → n and electrons diffuse n → p. This flow is the **diffusion current**.`,
          },
          {
            type: "text",
            md: t`When an electron leaves the n side it leaves behind a fixed positive donor ion; when a hole leaves the p side it leaves a fixed negative acceptor ion. So a thin layer appears near the junction with **positive space charge on the n side** and **negative space charge on the p side**, but no free carriers. This is the **depletion region**, of the order of a tenth of a micrometre thick.

The space charge sets up an electric field from n to p. This field pushes minority carriers across the junction (electrons p → n, holes n → p), giving a **drift current** opposite to the diffusion current. Diffusion falls and drift grows until they are equal; then the **net current is zero**. The potential difference across the depletion region at equilibrium is the **barrier potential** $V_0$, with the n side positive relative to the p side.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of junction formation in order.",
              items: [
                "Holes diffuse from p to n and electrons diffuse from n to p",
                "Fixed donor and acceptor ions are left uncovered near the junction",
                "A depletion region with an electric field from n to p forms",
                "The field drives a drift current opposite to the diffusion current",
                "Drift equals diffusion, net current is zero and a barrier potential remains",
              ],
              explain: "Diffusion comes first, it uncovers fixed ions, those ions make the field, and the field's drift current grows until it cancels diffusion. The barrier potential is what is left at equilibrium.",
            },
          },
          {
            type: "heading",
            text: "Forward and reverse bias",
          },
          {
            type: "table",
            headers: ["", "Forward bias", "Reverse bias"],
            rows: [
              ["Connection", "p side to +, n side to − of the cell", "p side to −, n side to + of the cell"],
              ["Effective barrier", t`$V_0 - V$ (lowered)`, t`$V_0 + V$ (raised)`],
              ["Depletion width", "decreases", "increases"],
              ["Main current", "diffusion of majority carriers (minority carrier injection)", "drift of minority carriers"],
              ["Size of current", "milliamperes, rises sharply after the threshold", "microamperes, nearly constant until breakdown"],
              ["Diode behaves like", "a low resistance", "a very high resistance"],
            ],
          },
          {
            type: "text",
            md: t`**V-I characteristic (described in words).** In forward bias the current stays almost zero until the applied voltage nears the **threshold (cut-in or knee) voltage**, about 0.7 V for silicon and about 0.2 V for germanium. Beyond it the current rises very steeply (roughly exponentially) for a small rise in voltage. In reverse bias a tiny current of a few microamperes flows and hardly changes with voltage, because it is limited by how many minority carriers reach the junction, not by the field. At the **breakdown voltage** $V_{br}$ the reverse current suddenly becomes large. An ordinary diode is not operated beyond the reverse saturation region.

The symbol of a diode is an arrowhead with a bar; the arrow points from p to n, the direction of conventional current in forward bias.`,
          },
          {
            type: "formula",
            tex: t`r_d = \frac{\Delta V}{\Delta I}`,
            caption:
              "Dynamic (a.c.) resistance of a diode: the ratio of a small change in voltage to the small change in current it causes, read from the V-I graph. It is not constant because the graph is not a straight line.",
          },
          {
            type: "example",
            title: "Forward and reverse resistance from a V-I graph",
            problem: "A silicon diode carries 5 mA at a forward voltage of 0.70 V and 15 mA at 0.75 V. In reverse bias the current is 1.0 μA at 5 V and 1.5 μA at 15 V. Find the dynamic resistance in each region.",
            steps: [
              t`Forward: $\Delta V = 0.75 - 0.70 = 0.05$ V and $\Delta I = 15 - 5 = 10$ mA $= 0.010$ A.`,
              t`$r_{fb} = \dfrac{0.05}{0.010} = 5\ \Omega$.`,
              t`Reverse: $\Delta V = 15 - 5 = 10$ V and $\Delta I = 1.5 - 1.0 = 0.5\ \mu$A $= 5 \times 10^{-7}$ A.`,
              t`$r_{rb} = \dfrac{10}{5 \times 10^{-7}} = 2 \times 10^{7}\ \Omega$.`,
            ],
            answer: t`Forward dynamic resistance 5 Ω; reverse resistance $2 \times 10^{7}$ Ω. The ratio of about four million to one is why a diode acts as a one-way valve.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "When a p-n junction is forward biased, the width of the depletion region:",
                options: ["increases", "decreases", "stays the same", "becomes equal to the whole crystal"],
                answer: 1,
                explain: "The applied voltage opposes the barrier potential, so the barrier height falls to V₀ − V and the depletion region narrows.",
              },
              {
                kind: "numeric",
                q: "A diode's forward current rises from 10 mA to 30 mA when the voltage rises from 0.72 V to 0.80 V. Find its dynamic resistance in ohms.",
                answer: 4,
                unit: "Ω",
                explain: "r_d = ΔV/ΔI = 0.08 V / 0.020 A = 4 Ω.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In reverse bias, a bigger reverse voltage makes the field stronger, so the reverse current keeps growing in proportion to the voltage.",
            right: "Below breakdown, the reverse current is almost independent of the reverse voltage.",
            why: "The reverse current is a drift of minority carriers. Even a small field sweeps every minority carrier that reaches the junction across it, so the current is limited by the supply of minority carriers (set by temperature), not by the voltage. That is why it is called the reverse saturation current.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For the V-I characteristic question, draw the circuit for both biases (forward with a milliammeter, reverse with a microammeter), then one graph with different scales on the two halves: mA on the forward side, μA on the reverse side. Mark the threshold voltage and the breakdown voltage.",
          },
          {
            type: "keypoints",
            items: [
              "Diffusion of majority carriers uncovers fixed ions, which form the depletion region and an n → p field.",
              "At equilibrium drift current equals diffusion current and a barrier potential V₀ remains.",
              "Forward bias lowers the barrier (V₀ − V) and narrows the depletion region; reverse bias raises it (V₀ + V) and widens it.",
              "Threshold voltage ≈ 0.7 V (Si) and ≈ 0.2 V (Ge); the reverse current is μA and nearly constant until breakdown.",
              "Dynamic resistance r_d = ΔV/ΔI from the V-I graph.",
            ],
          },
        ],
        flashcards: [
          { front: "Depletion region", back: "A thin layer at the junction with fixed donor and acceptor ions but almost no free carriers." },
          { front: "Direction of the field in the depletion region", back: "From the n side (positive ions) to the p side (negative ions)." },
          { front: "Diffusion current vs drift current", back: "Diffusion: majority carriers move down the concentration gradient. Drift: minority carriers pushed by the junction field. At equilibrium they are equal and opposite." },
          { front: "Barrier potential", back: "The potential difference across the depletion region at equilibrium; it opposes further diffusion of majority carriers." },
          { front: "Forward bias", back: "p side to the positive terminal. Barrier falls to V₀ − V; depletion region narrows; large current (mA)." },
          { front: "Reverse bias", back: "p side to the negative terminal. Barrier rises to V₀ + V; depletion region widens; tiny drift current (μA)." },
          { front: "Threshold (knee) voltage", back: "About 0.7 V for Si and about 0.2 V for Ge; above it forward current rises steeply." },
          { front: "Dynamic resistance", back: "r_d = ΔV/ΔI, the slope reciprocal of the V-I graph at the working point." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In an unbiased p-n junction at equilibrium:",
            options: [
              "the diffusion current is zero",
              "the drift current is zero",
              "the diffusion and drift currents are equal and opposite",
              "a steady current flows from p to n",
            ],
            answer: 2,
            explain: "Both currents still flow, but they cancel, so the net current is zero.",
          },
          {
            kind: "mcq",
            q: "The p side of the depletion region contains:",
            options: ["fixed positive donor ions", "fixed negative acceptor ions", "a large number of free holes", "a large number of free electrons"],
            answer: 1,
            explain: "Holes have diffused away from the p side, leaving negatively charged acceptor ions fixed in the lattice.",
          },
          {
            kind: "truefalse",
            q: "In forward bias, the effective barrier height becomes V₀ + V.",
            answer: false,
            explain: "Forward bias opposes the barrier, so it falls to V₀ − V. V₀ + V is reverse bias.",
          },
          {
            kind: "numeric",
            q: "A diode's reverse current changes from 2.0 μA to 2.4 μA as the reverse voltage changes from 10 V to 30 V. Find the reverse resistance in megaohms.",
            answer: 50,
            unit: "MΩ",
            difficulty: 2,
            hint: "ΔV = 20 V and ΔI = 0.4 μA.",
            explain: "r = 20 / (0.4 × 10⁻⁶) = 5 × 10⁷ Ω = 50 MΩ.",
          },
          {
            kind: "mcq",
            q: "The reverse saturation current of a diode depends mainly on:",
            options: ["the reverse voltage applied", "the temperature of the diode", "the resistance in series", "the forward threshold voltage"],
            answer: 1,
            difficulty: 2,
            explain: "It is set by the number of thermally generated minority carriers, which depends on temperature, not on the reverse voltage (below breakdown).",
          },
          {
            kind: "multi",
            q: "Which happen when a p-n junction is reverse biased?",
            options: [
              "The depletion region widens.",
              "Majority-carrier diffusion is suppressed.",
              "A small current due to minority carriers flows.",
              "The barrier potential falls.",
            ],
            answers: [0, 1, 2],
            explain: "Reverse bias raises the barrier to V₀ + V, widening the depletion region and stopping diffusion; only a small minority-carrier drift current flows.",
          },
          {
            kind: "fill",
            q: "The forward voltage beyond which the current rises sharply is called the threshold, cut-in or ___ voltage.",
            answer: ["knee"],
            explain: "The graph bends sharply upward at the knee, about 0.7 V for silicon.",
          },
        ],
      },

      /* ---------------- Board lesson 3 ---------------- */
      {
        slug: "c12-diode-rectifier",
        title: "Diode as a Rectifier",
        summary:
          "Using the one-way property of a diode to turn AC into pulsating DC: half-wave and full-wave (centre-tap) rectifiers, their waveforms and output frequency, and smoothing with a capacitor filter.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "⚡",
            caption: "The mains supply in India is 230 V AC at 50 Hz, but a laptop or phone battery needs steady DC. A rectifier is the first step of that conversion.",
          },
          {
            type: "text",
            md: "A diode conducts only when forward biased. So if an alternating voltage is applied to a diode in series with a load, current flows through the load only during the half-cycles that forward bias the diode. Converting AC into one-directional (DC) current this way is called **rectification**, and the circuit is a **rectifier**. A transformer usually comes first, to step the mains voltage down to the value needed.",
          },
          {
            type: "heading",
            text: "Half-wave rectifier",
          },
          {
            type: "text",
            md: "The transformer secondary, one diode and the load resistor R_L are in series. During the half-cycle in which the diode's p end is positive, the diode conducts and the output follows the input. During the other half-cycle the diode is reverse biased, almost no current flows and the output is zero. The output is a series of positive humps with gaps between them: pulsating DC, with one hump per input cycle. If the reverse voltage across the diode reaches its breakdown value, the diode is damaged, so its breakdown voltage must exceed the peak of the secondary voltage.",
          },
          {
            type: "heading",
            text: "Full-wave rectifier (centre-tap)",
          },
          {
            type: "text",
            md: "The secondary winding has a **centre tap**, and two diodes D₁ and D₂ connect its two ends to the load, whose other end returns to the centre tap. In one half-cycle end A is positive with respect to the centre tap: D₁ conducts and D₂ is reverse biased. In the next half-cycle end B is positive: D₂ conducts and D₁ is off. In both halves the current through R_L is in the **same direction**, so the output has a hump in every half-cycle. In each half-cycle the load is driven by only one half of the secondary (from one end to the centre tap).",
          },
          {
            type: "table",
            headers: ["", "Half-wave", "Full-wave (centre-tap)"],
            rows: [
              ["Diodes", "1", "2"],
              ["Diode conducting", "in one half-cycle only", "D₁ and D₂ in alternate half-cycles"],
              ["Output humps per input cycle", "1", "2"],
              ["Output (ripple) frequency for 50 Hz input", "50 Hz", "100 Hz"],
              ["Transformer", "ordinary", "centre-tapped secondary"],
              ["Use of input power", "only half the cycle is used", "both halves are used"],
            ],
          },
          {
            type: "formula",
            tex: t`f_{\text{out}} = f \ (\text{half-wave}) \qquad f_{\text{out}} = 2f \ (\text{full-wave})`,
            caption: "The output repeats once per input cycle for half-wave rectification and twice per cycle for full-wave rectification.",
          },
          {
            type: "text",
            md: "**Filter.** Pulsating DC still contains AC components (ripple). A capacitor connected in parallel with R_L charges to nearly the peak voltage while the diode conducts, and then discharges slowly through R_L while the input falls. The output becomes a nearly steady voltage close to the peak with a small ripple. The larger the time constant C R_L, the smoother the output. Such a circuit is a **capacitor-input filter**.",
          },
          {
            type: "example",
            title: "Peak output and frequency of rectifiers",
            problem: "A transformer steps 220 V, 50 Hz mains down to 11 V (rms) across each half of a centre-tapped secondary. Find (a) the peak voltage across the load and the output frequency if only one half and one ideal diode are used as a half-wave rectifier, and (b) the output frequency of the full-wave connection. (c) Repeat the peak value for silicon diodes with a 0.7 V drop.",
            steps: [
              t`Peak of 11 V rms: $V_m = 11\sqrt{2} \approx 15.6$ V.`,
              "(a) Half-wave with an ideal diode: the output peak is 15.6 V and humps repeat once per cycle, so f_out = 50 Hz.",
              "(b) Full-wave: each half of the secondary drives the load in turn, so there are two humps per cycle, f_out = 2 × 50 = 100 Hz. The peak across the load is still 15.6 V, since each conducting path uses only one half of the winding.",
              t`(c) With a silicon diode in the conducting path the peak falls by about 0.7 V: $15.6 - 0.7 \approx 14.9$ V.`,
            ],
            answer: "(a) 15.6 V peak, 50 Hz; (b) 100 Hz with the same 15.6 V peak; (c) about 14.9 V peak with real silicon diodes.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The input to a full-wave rectifier comes from 60 Hz mains (as in the USA). What is the ripple frequency of the output, in Hz?",
                answer: 120,
                unit: "Hz",
                explain: "Full-wave output has two humps per input cycle: 2 × 60 = 120 Hz.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A full-wave rectifier works at 50 Hz mains, so its output also has a frequency of 50 Hz.",
            right: "The output of a full-wave rectifier repeats every half-cycle, so its frequency is 100 Hz for a 50 Hz input.",
            why: "The input repeats every 20 ms, but the rectified output has a hump every 10 ms because the negative half is flipped up. Only the half-wave output keeps the input frequency, because every second hump is missing.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In a centre-tap rectifier, D₁ is open-circuited. What is the output?",
              emoji: "🔍",
              options: [
                "Full-wave output at 100 Hz, unchanged",
                "Half-wave output at 50 Hz",
                "No output at all",
                "Steady DC with no ripple",
              ],
              answer: 1,
              trap: 2,
              explain: "D₂ still conducts during its own half-cycle, so the circuit becomes a half-wave rectifier with one hump per cycle (50 Hz). The output does not vanish, because the two diodes work independently.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 5-mark rectifier question, examiners look for: a neat labelled circuit (transformer, centre tap, D₁, D₂, R_L), the input and output waveforms drawn one below the other on the same time axis, and a short statement of which diode conducts in each half-cycle. State that the output current through R_L is in the same direction in both halves.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: bridge rectifier",
            md: "NCERT teaches the centre-tap circuit. Some ISC and PUC books and many entrance questions also use the **bridge rectifier**: four diodes in a diamond, an ordinary transformer, two diodes conducting in each half-cycle. It also gives full-wave output at 2f.",
          },
          {
            type: "keypoints",
            items: [
              "A rectifier uses the one-way conduction of a diode to change AC into pulsating DC.",
              "Half-wave: one diode, output only in alternate half-cycles, output frequency = input frequency.",
              "Full-wave centre-tap: two diodes conduct alternately, current through the load is always in the same direction, output frequency = 2 × input frequency.",
              "A capacitor in parallel with the load smooths the output; larger C R_L gives less ripple.",
            ],
          },
        ],
        flashcards: [
          { front: "Rectification", back: "Converting alternating current into unidirectional (direct) current." },
          { front: "Half-wave rectifier output frequency for 50 Hz mains", back: "50 Hz (one hump per cycle)." },
          { front: "Full-wave rectifier output frequency for 50 Hz mains", back: "100 Hz (two humps per cycle)." },
          { front: "Why is a centre-tapped transformer needed in the two-diode full-wave rectifier?", back: "So that each diode is driven by one half of the secondary in turn and the load current returns through the centre tap in the same direction each half-cycle." },
          { front: "Role of the capacitor filter", back: "It charges to nearly the peak voltage and discharges slowly through the load, reducing the ripple." },
          { front: "Effect of a larger C R_L on the output", back: "Slower discharge between peaks, so smaller ripple and a steadier DC." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a half-wave rectifier, during the half-cycle when the diode is reverse biased, the output across the load is:",
            options: ["equal to the input", "nearly zero", "twice the input", "equal to the peak voltage"],
            answer: 1,
            explain: "A reverse-biased diode passes only a tiny current, so almost no voltage appears across the load.",
          },
          {
            kind: "numeric",
            q: "A half-wave rectifier is fed from 50 Hz mains. How many output pulses appear in one second?",
            answer: 50,
            explain: "One pulse per input cycle: 50 pulses each second.",
          },
          {
            kind: "mcq",
            q: "In a centre-tap full-wave rectifier, the current through the load resistor:",
            options: [
              "reverses every half-cycle",
              "flows in the same direction in both half-cycles",
              "flows only in alternate cycles",
              "is zero when D₂ conducts",
            ],
            answer: 1,
            explain: "D₁ and D₂ take turns, but both send current through R_L in the same direction.",
          },
          {
            kind: "truefalse",
            q: "Using a larger capacitor in the filter of a rectifier makes the ripple larger.",
            answer: false,
            explain: "A larger C gives a larger time constant C R_L, so the capacitor discharges less between peaks and the ripple is smaller.",
          },
          {
            kind: "numeric",
            q: "The secondary voltage of a transformer used in a half-wave rectifier is 9 V rms. Using an ideal diode, what is the peak output voltage? (Give to one decimal place.)",
            answer: 12.7,
            tolerance: 0.1,
            unit: "V",
            difficulty: 2,
            hint: "Peak = rms × √2.",
            explain: "V_m = 9 × 1.414 ≈ 12.7 V. An ideal diode drops nothing, so the output peak is 12.7 V.",
          },
          {
            kind: "order",
            q: "Arrange the stages of a simple DC power supply in the order the current passes through them.",
            items: ["Step-down transformer", "Rectifier diodes", "Capacitor filter", "Load"],
            explain: "The transformer sets the voltage, the diodes rectify, the capacitor smooths, and the load receives the DC.",
          },
          {
            kind: "mcq",
            q: "Compared with a half-wave rectifier, the main advantage of a full-wave rectifier is that it:",
            options: [
              "needs no transformer",
              "uses both halves of the AC cycle, giving a larger average output and easier filtering",
              "produces perfectly steady DC without a filter",
              "uses only one diode",
            ],
            answer: 1,
            explain: "Both half-cycles are used, so the average output is doubled and the higher ripple frequency is easier to filter. It still needs a filter for steady DC.",
          },
        ],
      },

      /* ---------------- Board lesson 4 ---------------- */
      {
        slug: "c12-special-purpose-diodes",
        title: "Zener Diode and Optoelectronic Junction Devices",
        summary:
          "The Zener diode as a voltage regulator, and the photodiode, LED and solar cell: how each is biased, how it works and the band-gap condition it must satisfy.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT book (2023 onwards) used by CBSE has dropped special-purpose diodes from this chapter. They are part of the **ISC** Electronic Devices unit and of the **JEE Main** and **NEET** syllabi. Karnataka PUC students should check their current board syllabus; KCET follows the PUC syllabus. Study this lesson if your board or exam lists Zener diodes, LEDs, photodiodes or solar cells.",
          },
          {
            type: "text",
            md: t`A **Zener diode** is a p-n junction diode with both sides **heavily doped**. Heavy doping makes the depletion region very thin (less than $10^{-6}$ m), so even a reverse voltage of about 5 V produces a very large field (around $5 \times 10^{6}$ V/m). This field pulls electrons straight out of covalent bonds (internal field emission), and the reverse current rises sharply at a definite voltage $V_Z$, the **Zener voltage**. It is designed to work **in reverse breakdown**: over a wide range of current, the voltage across it stays almost equal to $V_Z$.`,
          },
          {
            type: "text",
            md: t`**Zener as a voltage regulator.** An unregulated DC supply is connected through a series resistor $R_S$ to the Zener diode, which is **reverse biased**, and the load $R_L$ is connected in parallel with the Zener. If the input rises, the current through $R_S$ and the Zener rises, the extra voltage drops across $R_S$, and the voltage across the Zener (and so across the load) stays at $V_Z$. If the input falls, the Zener current falls and again $V_Z$ is kept. The Zener only regulates while it remains in breakdown.`,
          },
          {
            type: "formula",
            tex: t`I_S = \frac{V_{in} - V_Z}{R_S} \qquad I_L = \frac{V_Z}{R_L} \qquad I_Z = I_S - I_L`,
            caption: "Currents in a Zener regulator working in breakdown.",
          },
          {
            type: "example",
            title: "Zener regulator currents",
            problem: "A 6.0 V Zener diode is used with a 300 Ω series resistor and a 1.0 kΩ load. The unregulated input is 15 V. Find the current through the series resistor, the load and the Zener.",
            steps: [
              "First check that the Zener is in breakdown: without it, the load would get 15 × 1000/1300 ≈ 11.5 V, which is more than 6 V, so the Zener does break down and holds 6 V.",
              t`$I_S = \dfrac{15 - 6}{300} = \dfrac{9}{300} = 0.030$ A $= 30$ mA.`,
              t`$I_L = \dfrac{6}{1000} = 0.006$ A $= 6$ mA.`,
              t`$I_Z = I_S - I_L = 30 - 6 = 24$ mA.`,
            ],
            answer: "Series resistor 30 mA, load 6 mA, Zener 24 mA; the load voltage stays at 6 V.",
          },
          {
            type: "heading",
            text: "Optoelectronic junction devices",
          },
          {
            type: "table",
            headers: ["Device", "Bias", "What happens", "Use"],
            rows: [
              ["Photodiode", "reverse", t`light with $h\nu > E_g$ makes electron-hole pairs near the junction; the field separates them, so the reverse current rises with light intensity`, "light detectors, optical communication receivers"],
              ["LED", "forward (heavily doped junction)", "injected electrons and holes recombine near the junction and give out photons", "indicator lamps, displays, lighting"],
              ["Solar cell", "no external bias", "light makes electron-hole pairs; the junction field separates them and an emf appears across the cell", "power for satellites, rooftops, calculators"],
            ],
          },
          {
            type: "formula",
            tex: t`\lambda = \frac{hc}{E_g} \qquad \lambda(\text{nm}) \approx \frac{1240}{E_g(\text{eV})}`,
            caption: "Photon wavelength linked to the band gap (hc ≈ 1240 eV nm). For an LED this gives the emitted colour; for a photodiode or solar cell it gives the longest wavelength that can be detected or absorbed.",
          },
          {
            type: "text",
            md: t`**Why a photodiode is reverse biased.** In reverse bias the current is due to minority carriers and is tiny. Light creates extra carriers, so the *fractional* change in current is large and easy to measure. In forward bias the same light would make a negligible fractional change in a large current.

**LED.** The colour depends on the band gap. For visible light the gap must be at least about 1.8 eV (GaAs, with 1.4 eV, gives infrared). Red LEDs use GaAsP; blue ones use materials such as GaN. LEDs need low voltage, use little power, switch quickly, last long and give nearly single-colour light. Their reverse breakdown voltage is low (about 5 V).

**Solar cell.** It works in three steps: generation of electron-hole pairs by light, separation by the junction field, and collection at the front and back contacts. Its I-V graph is drawn in the fourth quadrant, showing the open-circuit voltage $V_{oc}$ and short-circuit current $I_{sc}$. Materials with $E_g$ close to 1.5 eV suit sunlight best; common solar-cell materials are Si (1.1 eV), GaAs (1.43 eV), CdTe (1.45 eV) and CuInSe₂ (1.04 eV).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An LED is made from a material with a band gap of 1.9 eV. Taking hc = 1240 eV nm, find the wavelength of light it emits, to the nearest nm.",
                answer: 653,
                tolerance: 2,
                unit: "nm",
                explain: "λ = 1240/1.9 ≈ 653 nm, which is red light.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A photodiode is forward biased like an LED, because both are optical diodes.",
            right: "A photodiode is operated in reverse bias; an LED is operated in forward bias; a solar cell needs no bias.",
            why: "The LED needs forward bias to inject carriers that recombine and emit light. A photodiode measures light, and only in reverse bias is the light-produced change in current a large fraction of the total.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each device to how it is operated.",
              pairs: [
                ["Zener diode as a regulator", "Reverse biased, in breakdown"],
                ["Photodiode", "Reverse biased, below breakdown"],
                ["Light-emitting diode", "Forward biased"],
                ["Solar cell", "No external bias at all"],
              ],
              explain: "Only the LED is forward biased. The Zener and the photodiode are both reverse biased, but the Zener works in breakdown while the photodiode works in the small reverse-current region. A solar cell is itself the source of emf.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "In the Zener regulator circuit, always draw the Zener reverse biased: its n side (the bar end of the symbol) goes towards the positive terminal of the supply. Many students draw it forward biased and lose the diagram mark. Always check that the Zener is actually in breakdown before using I_Z = I_S − I_L.",
          },
          {
            type: "keypoints",
            items: [
              "A Zener diode is heavily doped, works in reverse breakdown and keeps an almost constant voltage V_Z.",
              "Regulator: series resistor R_S, Zener reverse biased, load in parallel; I_Z = I_S − I_L.",
              "Photodiode: reverse biased; LED: forward biased; solar cell: unbiased, gives an emf.",
              "λ(nm) ≈ 1240 / E_g(eV); visible LEDs need E_g ≥ about 1.8 eV; solar cells work best near E_g ≈ 1.5 eV.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is a Zener diode heavily doped?", back: "To make the depletion region very thin, so a small reverse voltage gives a field strong enough for sharp breakdown at a fixed V_Z." },
          { front: "Zener regulator connection", back: "Zener reverse biased in parallel with the load, with a series resistor R_S between the supply and the Zener." },
          { front: "Zener current", back: "I_Z = I_S − I_L, where I_S = (V_in − V_Z)/R_S and I_L = V_Z/R_L." },
          { front: "Why is a photodiode reverse biased?", back: "The fractional change in the small reverse current caused by light is much larger than it would be in forward current." },
          { front: "LED colour and band gap", back: "λ = hc/E_g; a larger band gap gives a shorter wavelength (red ≈ 1.8–1.9 eV, blue ≈ 2.7–3 eV)." },
          { front: "Three steps in a solar cell", back: "Generation of e-h pairs by light, separation by the junction field, collection at the contacts." },
          { front: "Quadrant of a solar cell's I-V graph", back: "The fourth quadrant, marking open-circuit voltage V_oc and short-circuit current I_sc." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A Zener diode used as a voltage regulator is connected:",
            options: [
              "forward biased, in series with the load",
              "reverse biased, in parallel with the load",
              "forward biased, in parallel with the load",
              "reverse biased, in series with the load",
            ],
            answer: 1,
            explain: "It must be reverse biased (to be in breakdown) and in parallel with the load so the load voltage equals V_Z.",
          },
          {
            kind: "numeric",
            q: "A 9 V Zener regulator has R_S = 200 Ω, input 21 V and load 1.5 kΩ. Find the Zener current in mA.",
            answer: 54,
            unit: "mA",
            difficulty: 2,
            hint: "I_S = (21 − 9)/200 and I_L = 9/1500.",
            explain: "I_S = 12/200 = 60 mA, I_L = 9/1500 = 6 mA, so I_Z = 54 mA. (Without the Zener the load would get 21 × 1500/1700 ≈ 18.5 V > 9 V, so it is in breakdown.)",
          },
          {
            kind: "mcq",
            q: "A photodiode is made of a semiconductor with E_g = 2.0 eV. The longest wavelength it can detect is about:",
            options: ["400 nm", "520 nm", "620 nm", "2480 nm"],
            answer: 2,
            explain: "λ_max = 1240/2.0 = 620 nm. Longer wavelengths have photons with energy less than E_g.",
          },
          {
            kind: "truefalse",
            q: "A solar cell needs an external battery to make it work.",
            answer: false,
            explain: "A solar cell has no external bias; light creates the carriers and the junction field separates them, so the cell itself produces an emf.",
          },
          {
            kind: "multi",
            q: "Which statements about LEDs are correct?",
            options: [
              "They are forward biased.",
              "Light comes from the recombination of electrons and holes.",
              "GaAs (E_g ≈ 1.4 eV) gives visible green light.",
              "They have a low reverse breakdown voltage.",
            ],
            answers: [0, 1, 3],
            explain: "LEDs are forward biased and emit light by recombination; their reverse breakdown is low (about 5 V). GaAs gives infrared (1240/1.4 ≈ 886 nm), not green.",
          },
          {
            kind: "mcq",
            q: "The breakdown in a Zener diode is mainly due to:",
            options: [
              "a very strong field pulling electrons out of bonds in a thin depletion region",
              "the forward current heating the junction",
              "light falling on the junction",
              "the depletion region becoming very wide",
            ],
            answer: 0,
            explain: "Heavy doping gives a very thin depletion region, so a few volts produce a field of about 5 × 10⁶ V/m that tears electrons out of bonds (internal field emission).",
          },
          {
            kind: "fill",
            q: "Semiconductors with band gap close to ___ eV are best for solar cells.",
            answer: ["1.5"],
            explain: "The solar spectrum is strongest near photon energies of about 1.5 eV, so gaps near this value absorb most of the useful sunlight.",
          },
          {
            kind: "numeric",
            q: "In a Zener regulator, the input rises from 15 V to 18 V while R_S = 300 Ω and the load stays the same. By how many mA does the Zener current increase?",
            answer: 10,
            unit: "mA",
            difficulty: 3,
            hint: "The load current does not change because the load voltage stays at V_Z.",
            explain: "I_S rises by 3 V / 300 Ω = 10 mA. I_L stays V_Z/R_L, so the whole 10 mA extra goes through the Zener.",
          },
        ],
      },
      /* ---------------- Board lesson 5 (ISC extra) ---------------- */
      {
        slug: "c12-transistor-ce-amplifier",
        title: "Junction Transistor and the CE Amplifier",
        summary:
          "For ISC and older-pattern papers: the structure of npn and pnp transistors, transistor action, the currents α and β, common-emitter characteristics, and the CE amplifier's voltage and power gain.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The junction transistor was removed from the rationalised NCERT chapter (CBSE and Karnataka PUC from 2023) and from the recent JEE Main and NEET syllabi. It is taught here because **ISC** Electronic Devices includes transistor action and the CE amplifier (check your current ISC syllabus), and questions on it still appear in some state and private entrance tests.",
          },
          {
            type: "text",
            md: "A **bipolar junction transistor** has three doped regions in one crystal and two junctions. In an **npn** transistor a thin p region is sandwiched between two n regions; in a **pnp** transistor a thin n region lies between two p regions. The three regions are the **emitter**, the **base** and the **collector**. In the symbol, the arrow is on the emitter and points in the direction of conventional current: out of the emitter for npn, into the emitter for pnp.",
          },
          {
            type: "table",
            headers: ["Region", "Doping", "Size", "Job"],
            rows: [
              ["Emitter", "heavily doped", "moderate", "supplies a large number of majority carriers"],
              ["Base", "lightly doped", "very thin", "lets almost all carriers pass through to the collector"],
              ["Collector", "moderately doped", "largest", "collects the carriers and gets rid of the heat"],
            ],
          },
          {
            type: "text",
            md: "**Transistor action (active region).** The emitter-base junction is **forward biased** and the collector-base junction is **reverse biased**. In an npn transistor, electrons are pushed from the emitter into the base. Because the base is thin and lightly doped, only a few (about 1 to 5 %) recombine with holes there to form the small base current. The rest diffuse across the base, reach the collector-base junction, and are swept into the collector by its field. So a small base current controls a much larger collector current.",
          },
          {
            type: "formula",
            tex: t`I_E = I_B + I_C \qquad \alpha = \frac{I_C}{I_E} \qquad \beta = \frac{I_C}{I_B} \qquad \beta = \frac{\alpha}{1 - \alpha}`,
            caption: "α (common-base current gain) is a little less than 1, typically 0.95 to 0.99; β (common-emitter current gain) is typically 20 to 200.",
          },
          {
            type: "example",
            title: "Transistor currents",
            problem: "In a transistor in the active region the base current is 20 μA and β = 150. Find I_C, I_E and α.",
            steps: [
              t`$I_C = \beta I_B = 150 \times 20\ \mu\text{A} = 3000\ \mu\text{A} = 3.0$ mA.`,
              t`$I_E = I_B + I_C = 0.02 + 3.0 = 3.02$ mA.`,
              t`$\alpha = \dfrac{I_C}{I_E} = \dfrac{3.0}{3.02} \approx 0.993$. Check: $\alpha = \dfrac{\beta}{1 + \beta} = \dfrac{150}{151} \approx 0.993$.`,
            ],
            answer: "I_C = 3.0 mA, I_E = 3.02 mA, α ≈ 0.993.",
          },
          {
            type: "text",
            md: t`**CE characteristics.** In the common-emitter (CE) connection the emitter is common to input and output. The **input characteristic** is a graph of $I_B$ against $V_{BE}$ at constant $V_{CE}$; it looks like a forward-biased diode curve. The **output characteristics** are graphs of $I_C$ against $V_{CE}$ for several fixed values of $I_B$; beyond a small $V_{CE}$, $I_C$ is nearly flat and set by $I_B$. From them:

input resistance $r_i = \left(\dfrac{\Delta V_{BE}}{\Delta I_B}\right)_{V_{CE}}$, output resistance $r_o = \left(\dfrac{\Delta V_{CE}}{\Delta I_C}\right)_{I_B}$, a.c. current gain $\beta_{ac} = \left(\dfrac{\Delta I_C}{\Delta I_B}\right)_{V_{CE}}$.`,
          },
          {
            type: "text",
            md: t`**CE amplifier.** The base-emitter junction is forward biased by a fixed bias, and a small signal $v_i$ is added in series with it. The collector is joined to $V_{CC}$ through a load resistor $R_C$, and the output is taken between collector and emitter. A small change $\Delta I_B = v_i / r_i$ in the base current causes $\Delta I_C = \beta_{ac}\,\Delta I_B$, which makes a large change $R_C\,\Delta I_C$ in the voltage across $R_C$. Since $V_{CE} = V_{CC} - I_C R_C$, when $I_C$ rises $V_{CE}$ falls: the output is **180° out of phase** with the input.`,
          },
          {
            type: "formula",
            tex: t`A_v = \frac{v_o}{v_i} = -\beta_{ac}\,\frac{R_C}{r_i} \qquad A_p = \beta_{ac} \times |A_v|`,
            caption: "Voltage gain of a CE amplifier (the minus sign shows phase reversal) and power gain.",
          },
          {
            type: "example",
            title: "Gain of a CE amplifier",
            problem: "A CE amplifier uses a transistor with β_ac = 100, input resistance 1.0 kΩ and load resistance R_C = 4.0 kΩ. An input signal of 5 mV (peak) is applied. Find the voltage gain, the output voltage and the power gain.",
            steps: [
              t`$|A_v| = \beta_{ac}\dfrac{R_C}{r_i} = 100 \times \dfrac{4.0}{1.0} = 400$.`,
              t`$v_o = 400 \times 5\ \text{mV} = 2000\ \text{mV} = 2.0$ V (peak), inverted with respect to the input.`,
              t`$A_p = \beta_{ac} \times |A_v| = 100 \times 400 = 4 \times 10^{4}$.`,
            ],
            answer: t`Voltage gain 400 (with a 180° phase shift), output 2.0 V peak, power gain $4 \times 10^{4}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "For a transistor α = 0.98. Find β.",
                answer: 49,
                explain: "β = α/(1 − α) = 0.98/0.02 = 49.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The base is made thick and heavily doped so that it can handle the large current.",
            right: "The base is very thin and lightly doped.",
            why: "If the base were thick or heavily doped, most carriers from the emitter would recombine in it, the base current would be large and the collector current small, and there would be no current gain. A thin, lightly doped base lets about 95 to 99 % of the carriers reach the collector.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each transistor state to its junction biasing.",
              pairs: [
                ["Active region (amplifier)", "E-B forward, C-B reverse"],
                ["Cut-off (switch OFF)", "Both junctions reverse"],
                ["Saturation (switch ON)", "Both junctions forward"],
              ],
              explain: "An amplifier works in the active region. A transistor used as a switch jumps between cut-off (almost no I_C, output high) and saturation (large I_C, output low), skipping the active region.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For the CE amplifier, draw the circuit with the biasing battery V_BB, the signal source in the base circuit, V_CC and R_C in the collector circuit, and mark the output across collector and emitter. Show input and output waveforms with the 180° phase difference. Write I_E = I_B + I_C clearly; it carries a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Emitter heavily doped, base thin and lightly doped, collector moderately doped and largest.",
              "Active region: E-B junction forward biased, C-B junction reverse biased.",
              "I_E = I_B + I_C, α = I_C/I_E, β = I_C/I_B, β = α/(1 − α).",
              "CE amplifier: A_v = −β_ac R_C/r_i, power gain = β_ac × |A_v|, output 180° out of phase with input.",
              "As a switch, a transistor works between cut-off and saturation.",
            ],
          },
        ],
        flashcards: [
          { front: "Three regions of a transistor", back: "Emitter (heavily doped), base (thin, lightly doped), collector (moderately doped, largest)." },
          { front: "Biasing for transistor action", back: "Emitter-base junction forward biased, collector-base junction reverse biased." },
          { front: "Relation between currents", back: "I_E = I_B + I_C." },
          { front: "Relation between α and β", back: "β = α/(1 − α) and α = β/(1 + β)." },
          { front: "Voltage gain of a CE amplifier", back: "A_v = −β_ac R_C / r_i; the minus sign means the output is 180° out of phase." },
          { front: "Power gain of a CE amplifier", back: "A_p = β_ac × |A_v|." },
          { front: "Direction of the emitter arrow in npn", back: "Pointing outward, from base to emitter, the direction of conventional current." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a transistor, which region is the most heavily doped?",
            options: ["Base", "Collector", "Emitter", "All are equally doped"],
            answer: 2,
            explain: "The emitter is heavily doped so that it can inject a large number of majority carriers into the base.",
          },
          {
            kind: "numeric",
            q: "In a transistor, I_E = 10 mA and I_C = 9.8 mA. Find β.",
            answer: 49,
            difficulty: 2,
            hint: "I_B = I_E − I_C.",
            explain: "I_B = 0.2 mA, so β = 9.8/0.2 = 49.",
          },
          {
            kind: "mcq",
            q: "The output of a CE amplifier is:",
            options: ["in phase with the input", "90° ahead of the input", "180° out of phase with the input", "always a square wave"],
            answer: 2,
            explain: "V_CE = V_CC − I_C R_C, so a rise in input (and I_C) gives a fall in output: a 180° phase shift.",
          },
          {
            kind: "truefalse",
            q: "For a transistor working as an amplifier, both junctions are forward biased.",
            answer: false,
            explain: "Both junctions forward biased is saturation. An amplifier needs E-B forward and C-B reverse (active region).",
          },
          {
            kind: "numeric",
            q: "A CE amplifier has β_ac = 50, r_i = 500 Ω and R_C = 2 kΩ. Find the magnitude of its voltage gain.",
            answer: 200,
            explain: "|A_v| = 50 × 2000/500 = 200.",
          },
          {
            kind: "numeric",
            q: "In the amplifier of the previous question, find the power gain.",
            answer: 10000,
            difficulty: 2,
            explain: "A_p = β_ac × |A_v| = 50 × 200 = 10 000.",
          },
          {
            kind: "mcq",
            q: "Why is the base of a transistor made thin and lightly doped?",
            options: [
              "To make the transistor smaller and cheaper",
              "So that very few carriers recombine in the base and most reach the collector",
              "So that the base can carry the largest current",
              "To increase the base current",
            ],
            answer: 1,
            explain: "Few recombinations in the base keep I_B small and I_C nearly equal to I_E, which is what gives current gain.",
          },
        ],
      },

      /* ---------------- Board lesson 6 (ISC extra; JEE Main / NEET / KCET) ---------------- */
      {
        slug: "c12-logic-gates",
        title: "Digital Electronics and Logic Gates",
        summary:
          "Analog and digital signals, the basic gates NOT, OR and AND, the universal gates NAND and NOR, their truth tables and Boolean expressions, and how to analyse a combination of gates.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "Logic gates were removed from the rationalised NCERT chapter (CBSE and Karnataka PUC from 2023), but they are in the **ISC** syllabus (check your current one) and in the current **JEE Main** and **NEET** syllabi. KCET and COMEDK follow the PUC/NCERT syllabus, so check whether your exam still lists them. They are quick, high-scoring questions.",
          },
          {
            type: "text",
            md: "An **analog** signal can take any value in a range, like the voltage from a microphone. A **digital** signal has only two levels: high (logic **1**) and low (logic **0**). A **logic gate** is a digital circuit with one or more inputs and one output that follows a fixed logical rule. The rule is written as a **truth table** listing the output for every input combination, or as a **Boolean expression**: A + B means OR, A · B means AND, and a bar over a quantity means NOT.",
          },
          {
            type: "table",
            headers: ["Gate", "Expression", "Output is 1 when", "Rule to remember"],
            rows: [
              ["NOT", t`$Y = \overline{A}$`, "A = 0", "inverts the input"],
              ["OR", t`$Y = A + B$`, "at least one input is 1", "any 1 gives 1"],
              ["AND", t`$Y = A \cdot B$`, "both inputs are 1", "any 0 gives 0"],
              ["NAND", t`$Y = \overline{A \cdot B}$`, "at least one input is 0", "AND followed by NOT"],
              ["NOR", t`$Y = \overline{A + B}$`, "both inputs are 0", "OR followed by NOT"],
            ],
          },
          {
            type: "table",
            headers: ["A", "B", "OR", "AND", "NAND", "NOR"],
            rows: [
              ["0", "0", "0", "0", "1", "1"],
              ["0", "1", "1", "0", "1", "0"],
              ["1", "0", "1", "0", "1", "0"],
              ["1", "1", "1", "1", "0", "0"],
            ],
          },
          {
            type: "text",
            md: t`**Universal gates.** NAND and NOR are called universal gates because any other gate can be built from copies of either one. Joining both inputs of a NAND gives NOT: $\overline{A \cdot A} = \overline{A}$. A NAND followed by a NAND-as-NOT gives AND. Putting NAND-as-NOT gates on both inputs of a NAND gives OR, because of De Morgan's theorems below.`,
          },
          {
            type: "formula",
            tex: t`\overline{A + B} = \overline{A}\cdot\overline{B} \qquad \overline{A \cdot B} = \overline{A} + \overline{B}`,
            caption: "De Morgan's theorems: 'break the bar and change the sign'.",
          },
          {
            type: "example",
            title: "Building OR from NAND gates",
            problem: t`The inputs A and B each pass through a NOT gate, and the outputs $\overline{A}$ and $\overline{B}$ go into a NAND gate. Find the output Y and name the equivalent gate.`,
            steps: [
              t`The NAND gives $Y = \overline{\overline{A} \cdot \overline{B}}$.`,
              t`By De Morgan, $\overline{\overline{A}\cdot\overline{B}} = \overline{\overline{A}} + \overline{\overline{B}} = A + B$.`,
              "Check one row: A = 0, B = 0 gives NOT outputs 1 and 1, and NAND(1, 1) = 0, matching OR(0, 0) = 0.",
            ],
            answer: "Y = A + B, so the combination acts as an OR gate. With NAND gates used as the NOT gates, this is OR built from three NAND gates.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The output of a NOR gate is 1 when:",
                options: ["both inputs are 1", "both inputs are 0", "exactly one input is 1", "at least one input is 1"],
                answer: 1,
                explain: "NOR = NOT(OR). OR is 0 only when both inputs are 0, so NOR is 1 only then.",
              },
            ],
          },
          {
            type: "example",
            title: "Analysing a two-gate circuit",
            problem: "A and B are fed to an AND gate. Its output and the input A are then fed to a NOR gate to give Y. Write the truth table.",
            steps: [
              t`Let $P = A \cdot B$, then $Y = \overline{P + A}$.`,
              "A = 0, B = 0: P = 0, P + A = 0, Y = 1.",
              "A = 0, B = 1: P = 0, P + A = 0, Y = 1.",
              "A = 1, B = 0: P = 0, P + A = 1, Y = 0.  A = 1, B = 1: P = 1, P + A = 1, Y = 0.",
              t`So Y = 1 exactly when A = 0: $Y = \overline{A}$ (because $A \cdot B + A = A$).`,
            ],
            answer: "Y = 1, 1, 0, 0 for AB = 00, 01, 10, 11. The circuit behaves as a NOT gate on A; B has no effect.",
          },
          {
            type: "mistake",
            wrong: "A NAND gate gives 1 only when both inputs are 1.",
            right: "A NAND gate gives 0 only when both inputs are 1; for every other input it gives 1.",
            why: "Students remember the AND rule and forget the NOT that follows it. Write the AND column first, then invert it to get NAND.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the output column (for AB = 00, 01, 10, 11) to the gate.",
              pairs: [
                ["0, 1, 1, 1", "OR"],
                ["0, 0, 0, 1", "AND"],
                ["1, 1, 1, 0", "NAND"],
                ["1, 0, 0, 0", "NOR"],
              ],
              explain: "OR and NAND both have three 1s, but OR fails only at 00 while NAND fails only at 11. AND and NOR have a single 1: at 11 for AND, at 00 for NOR.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "Waveform questions give the inputs A and B as square pulses over time. Split the time axis wherever either input changes, find the output for each interval from the truth table, and then draw the output. Do not try to guess the shape at once.",
          },
          {
            type: "keypoints",
            items: [
              "Digital signals have two levels, 0 and 1; a truth table lists the output for every input combination.",
              "OR: any 1 gives 1. AND: any 0 gives 0. NOT inverts.",
              "NAND = NOT(AND), 0 only for 11. NOR = NOT(OR), 1 only for 00.",
              "NAND and NOR are universal gates; De Morgan: bar of a sum = product of bars, and bar of a product = sum of bars.",
            ],
          },
        ],
        flashcards: [
          { front: "Digital signal", back: "A signal with only two levels, logic 0 (low) and logic 1 (high)." },
          { front: "OR gate rule", back: "Y = A + B; output 1 if at least one input is 1." },
          { front: "AND gate rule", back: "Y = A · B; output 1 only if both inputs are 1." },
          { front: "NAND truth table output (AB = 00, 01, 10, 11)", back: "1, 1, 1, 0." },
          { front: "NOR truth table output (AB = 00, 01, 10, 11)", back: "1, 0, 0, 0." },
          { front: "Universal gates", back: "NAND and NOR: any logic gate can be made from either one alone." },
          { front: "NOT gate from a NAND gate", back: "Join both inputs of the NAND together: output is the complement of A." },
          { front: "De Morgan's theorems", back: "NOT(A + B) = NOT A · NOT B, and NOT(A · B) = NOT A + NOT B." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which gate gives output 1 only when both inputs are 1?",
            options: ["OR", "AND", "NAND", "NOR"],
            answer: 1,
            explain: "That is the AND rule. NAND is the opposite: 0 only when both inputs are 1.",
          },
          {
            kind: "mcq",
            q: "The two inputs of a NOR gate are joined together and fed with A. The gate behaves as:",
            options: ["an OR gate", "an AND gate", "a NOT gate", "a buffer that copies A"],
            answer: 2,
            explain: "With both inputs equal to A, the output is NOT(A + A) = NOT A.",
          },
          {
            kind: "truefalse",
            q: "NAND and NOR gates are called universal gates.",
            answer: true,
            explain: "Any other gate can be built using only NAND gates, or only NOR gates.",
          },
          {
            kind: "mcq",
            q: "The outputs of two NOT gates (inputs A and B) are fed to a NOR gate. The circuit is equivalent to:",
            options: ["OR", "AND", "NAND", "NOR"],
            answer: 1,
            difficulty: 2,
            hint: "Use De Morgan: NOT(NOT A + NOT B).",
            explain: "Y = NOT(NOT A + NOT B) = A · B by De Morgan, so it is an AND gate.",
          },
          {
            kind: "fill",
            q: "In Boolean algebra, A + A·B simplifies to ___.",
            answer: ["A"],
            explain: "A + A·B = A(1 + B) = A, because 1 + B = 1.",
          },
          {
            kind: "multi",
            q: "For which input combinations (A, B) is the output of a NAND gate equal to 1?",
            options: ["(0, 0)", "(0, 1)", "(1, 0)", "(1, 1)"],
            answers: [0, 1, 2],
            explain: "NAND is 0 only for (1, 1), so it is 1 for the other three combinations.",
          },
          {
            kind: "mcq",
            q: "An OR gate's output is fed into a NOT gate. The combination is a:",
            options: ["NAND gate", "NOR gate", "AND gate", "XOR gate"],
            answer: 1,
            explain: "NOT after OR is NOR by definition.",
          },
        ],
      },

      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c12-exam-edge-diodes-carriers",
        title: "Exam edge: Carriers, Diode Circuits, Rectifiers and Zener",
        summary:
          "What JEE Main, JEE Advanced, NEET, KCET and COMEDK ask from semiconductors: carrier concentrations and conductivity, solving diode circuits by the assume-and-check method, rectifier averages and PIV, Zener load ranges and LED wavelengths.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What it usually asks from this chapter"],
            rows: [
              ["KCET / COMEDK", "band gaps, n-type vs p-type, n_e n_h = n_i², biasing, rectifier output frequency (logic gates only if your year's syllabus lists them)"],
              ["NEET", "V-I characteristics, depletion region, Zener regulator currents, LED / photodiode statements, logic gate truth tables"],
              ["JEE Main", "diode circuits with ideal or 0.7 V diodes, Zener circuits, rectifier average and rms values, photodiode cut-off wavelength, logic gate combinations"],
              ["JEE Advanced", "rarely a full question; when it appears, a multi-diode or Zener circuit with a range of loads, or carrier conductivity with mobilities"],
            ],
          },
          {
            type: "text",
            md: "**Assume and check: the method for any diode circuit.** (1) Guess the state of each diode (ON or OFF). (2) Replace an ON ideal diode by a wire (or by a 0.7 V drop for silicon if stated) and an OFF diode by a break. (3) Solve the circuit. (4) Check: an ON diode must carry current in the forward direction (p to n); an OFF diode must have its p side at a lower or equal potential to its n side. If a check fails, change that guess and solve again.",
          },
          {
            type: "formula",
            tex: t`\sigma = e\,(n_e\mu_e + n_h\mu_h) \qquad V_{dc} = \frac{V_m}{\pi}\ (\text{half}) \qquad V_{dc} = \frac{2V_m}{\pi}\ (\text{full}) \qquad V_{rms} = \frac{V_m}{2}\ (\text{half}),\ \frac{V_m}{\sqrt{2}}\ (\text{full})`,
            caption: "Conductivity of a semiconductor (μ = mobility) and the average and rms output of ideal rectifiers (V_m = peak voltage across the load).",
          },
          {
            type: "table",
            headers: ["Result worth remembering", "Value", "Safe when"],
            rows: [
              ["Peak inverse voltage (PIV) per diode", "half-wave: V_m; centre-tap: 2V_m; bridge: V_m", "ideal diodes, no filter (with a capacitor filter, half-wave PIV also becomes 2V_m)"],
              ["Ripple frequency", "half-wave f, full-wave 2f", "always"],
              ["Max rectifier efficiency", "half-wave 40.6 %, full-wave 81.2 %", "ideal diodes, resistive load"],
              ["Photon wavelength", "λ(nm) ≈ 1240/E(eV)", "E in eV; use 1240 unless the paper gives h and c"],
              ["Majority carrier from doping", t`$n \approx N_D$ or $p \approx N_A$`, t`only if the doping is much larger than $n_i$`],
              ["Temperature effect", "semiconductor resistance falls as T rises", "intrinsic or lightly doped material at ordinary temperatures"],
            ],
          },
          {
            type: "example",
            title: "KCET level: minority carriers",
            problem: t`Silicon ($5 \times 10^{28}$ atoms m$^{-3}$, $n_i = 1.5 \times 10^{16}$ m$^{-3}$) is doped with boron at 1 atom per $5 \times 10^{7}$ Si atoms. Find the majority and minority carrier concentrations.`,
            steps: [
              t`$N_A = \dfrac{5 \times 10^{28}}{5 \times 10^{7}} = 10^{21}$ m$^{-3}$; boron is an acceptor, so $n_h \approx 10^{21}$ m$^{-3}$ (p-type).`,
              t`$n_e = \dfrac{n_i^2}{n_h} = \dfrac{2.25 \times 10^{32}}{10^{21}} = 2.25 \times 10^{11}$ m$^{-3}$.`,
            ],
            answer: t`Holes (majority) $\approx 10^{21}$ m$^{-3}$; electrons (minority) $\approx 2.25 \times 10^{11}$ m$^{-3}$.`,
          },
          {
            type: "example",
            title: "JEE Main level: diodes in series",
            problem: "A 6.0 V battery, a 230 Ω resistor and two silicon diodes (0.7 V drop each when ON) are in series, both diodes pointing in the direction of conventional current from the battery. Find the current. What happens if one diode is reversed?",
            steps: [
              "Both diodes are forward biased, so assume both ON.",
              t`KVL: $6.0 - 0.7 - 0.7 = I \times 230$, so $I = \dfrac{4.6}{230} = 0.020$ A $= 20$ mA. Current is positive in the forward direction, so the guess is correct.`,
              "If one diode is reversed, it is OFF and blocks the loop (only the tiny reverse saturation current flows). The current is practically zero, and almost the whole 6 V appears across the reversed diode.",
            ],
            answer: "20 mA; with one diode reversed, the current is essentially zero.",
          },
          {
            type: "example",
            title: "NEET level: Zener current and power",
            problem: "A 10 V Zener diode is connected with a series resistor of 500 Ω across a 25 V supply, and a 2.0 kΩ load is connected across the Zener. Find the Zener current and the power dissipated in the Zener.",
            steps: [
              "Check breakdown: without the Zener, the load would get 25 × 2000/2500 = 20 V > 10 V, so the Zener is in breakdown.",
              t`$I_S = \dfrac{25 - 10}{500} = 30$ mA; $I_L = \dfrac{10}{2000} = 5$ mA.`,
              t`$I_Z = 30 - 5 = 25$ mA; $P_Z = V_Z I_Z = 10 \times 0.025 = 0.25$ W.`,
            ],
            answer: "I_Z = 25 mA and P_Z = 0.25 W.",
          },
          {
            type: "example",
            title: "JEE Main level: rectifier average output and PIV",
            problem: "The peak voltage across the load of an ideal full-wave rectifier is 20 V. Find the DC (average) output, the rms output and the PIV of each diode for (a) the centre-tap circuit and (b) the bridge circuit.",
            steps: [
              t`$V_{dc} = \dfrac{2V_m}{\pi} = \dfrac{40}{3.1416} \approx 12.7$ V (same for both circuits).`,
              t`$V_{rms} = \dfrac{V_m}{\sqrt{2}} = \dfrac{20}{1.414} \approx 14.1$ V.`,
              "(a) Centre-tap: when D₁ conducts, the reversed D₂ faces the whole secondary, so PIV = 2V_m = 40 V.",
              "(b) Bridge: each off diode faces only the secondary peak, so PIV = V_m = 20 V.",
            ],
            answer: "V_dc ≈ 12.7 V, V_rms ≈ 14.1 V; PIV = 40 V (centre-tap) and 20 V (bridge).",
          },
          {
            type: "example",
            title: "JEE Advanced level: range of load for a Zener regulator",
            problem: "An 8.0 V Zener diode is fed from a 20 V supply through R_S = 240 Ω. It regulates only if its current stays between 5 mA and 60 mA. Find the smallest load resistance that can be used, and check whether the circuit is safe when the load is removed.",
            steps: [
              t`$I_S = \dfrac{20 - 8}{240} = 0.050$ A $= 50$ mA, fixed as long as the Zener regulates.`,
              t`Smallest $R_L$ means largest $I_L$; need $I_Z = 50 - I_L \geq 5$ mA, so $I_L \leq 45$ mA.`,
              t`$R_{L,\min} = \dfrac{8.0}{0.045} \approx 178\ \Omega$.`,
              "Load removed: I_L = 0, so I_Z = 50 mA, which is below the 60 mA limit. Safe, with Zener power 8 × 0.050 = 0.40 W.",
            ],
            answer: "R_L must be at least about 178 Ω; with no load the Zener carries 50 mA (0.40 W), within its limit.",
          },
          {
            type: "mistake",
            wrong: "In a Zener circuit, always take I_Z = I_S − I_L straight away.",
            right: "First check that the Zener is in breakdown: find the voltage the load would get without the Zener. Only if it exceeds V_Z is the load voltage V_Z.",
            why: "If R_L is small, the open-circuit load voltage may be below V_Z. Then the Zener is OFF, I_Z = 0, and the load voltage is just V_in R_L/(R_S + R_L). Using the formula blindly gives a negative Zener current, a sure sign of a wrong assumption.",
          },
          {
            type: "mistake",
            wrong: "The PIV of each diode in a centre-tap rectifier is V_m, like a bridge rectifier.",
            right: "In a centre-tap rectifier PIV = 2V_m, where V_m is the peak across one half of the secondary.",
            why: "When one diode conducts, the load voltage V_m and the other half-winding's V_m add across the non-conducting diode. In a bridge, the off diodes sit directly across the secondary, so they see only V_m.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Heating a piece of pure silicon: what happens to its resistance?",
              emoji: "🌡️",
              options: ["It increases, like a metal", "It decreases", "It stays the same"],
              answer: 1,
              trap: 0,
              explain: "In a metal, more vibration of ions lowers the mobility, so resistance rises. In a semiconductor, heating breaks more bonds and the number of carriers grows rapidly, far outweighing the fall in mobility, so resistance falls (negative temperature coefficient).",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An ideal half-wave rectifier gives a peak output of 31.4 V. Find its DC (average) output in volts.",
                answer: 10,
                tolerance: 0.05,
                unit: "V",
                explain: "V_dc = V_m/π = 31.4/3.14 = 10 V.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Solve diode circuits by assume-and-check: ON = wire (or 0.7 V), OFF = break; then verify directions.",
              "σ = e(n_e μ_e + n_h μ_h); majority ≈ doping concentration, minority from n_e n_h = n_i².",
              "Rectifiers: V_dc = V_m/π (half), 2V_m/π (full); PIV = V_m (half-wave, bridge) and 2V_m (centre-tap).",
              "Zener: check breakdown first, then I_Z = I_S − I_L; stay within the I_Z limits.",
              "λ(nm) ≈ 1240/E_g(eV) for LEDs, photodiodes and solar cells.",
            ],
          },
        ],
        flashcards: [
          { front: "Assume-and-check method", back: "Guess ON/OFF for each diode, replace by wire (or 0.7 V) or break, solve, then check current and voltage directions." },
          { front: "Conductivity of a semiconductor", back: "σ = e(n_e μ_e + n_h μ_h)." },
          { front: "Average output of ideal rectifiers", back: "Half-wave: V_m/π. Full-wave: 2V_m/π." },
          { front: "PIV of diodes", back: "Half-wave V_m, centre-tap 2V_m, bridge V_m." },
          { front: "Maximum rectification efficiency", back: "Half-wave 40.6 %, full-wave 81.2 %." },
          { front: "Zener check before using I_Z = I_S − I_L", back: "Open-circuit load voltage V_in R_L/(R_S + R_L) must be greater than V_Z." },
          { front: "Temperature coefficient of resistance of a semiconductor", back: "Negative: resistance falls as temperature rises." },
          { front: "Photon energy–wavelength shortcut", back: "λ(nm) ≈ 1240 / E(eV)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 5 V battery drives current through a silicon diode (0.7 V drop) and a 430 Ω resistor in series, the diode forward biased. Find the current in mA.",
            answer: 10,
            unit: "mA",
            explain: "I = (5 − 0.7)/430 = 4.3/430 = 0.010 A = 10 mA.",
          },
          {
            kind: "numeric",
            q: "A 12 V Zener regulator has R_S = 400 Ω, supply 32 V and load 3 kΩ. Find the Zener current in mA.",
            answer: 46,
            unit: "mA",
            difficulty: 2,
            hint: "Check breakdown, then I_S = 20/400 and I_L = 12/3000.",
            explain: "Open-circuit load voltage = 32 × 3000/3400 ≈ 28 V > 12 V, so breakdown. I_S = 50 mA, I_L = 4 mA, I_Z = 46 mA.",
          },
          {
            kind: "numeric",
            q: "An ideal full-wave rectifier gives a peak output of 31.4 V. Find its DC output in volts.",
            answer: 20,
            tolerance: 0.1,
            unit: "V",
            explain: "V_dc = 2V_m/π = 62.8/3.14 = 20 V.",
          },
          {
            kind: "mcq",
            q: "Each half of a centre-tapped secondary has a peak voltage of 15 V. The PIV rating needed for each diode is at least:",
            options: ["7.5 V", "15 V", "21.2 V", "30 V"],
            answer: 3,
            difficulty: 2,
            explain: "In a centre-tap circuit the non-conducting diode faces both halves of the secondary: PIV = 2V_m = 30 V.",
          },
          {
            kind: "numeric",
            q: "The band gap of a photodiode material is 2.48 eV. Find the longest wavelength it can detect, in nm (hc = 1240 eV nm).",
            answer: 500,
            tolerance: 1,
            unit: "nm",
            explain: "λ_max = 1240/2.48 = 500 nm.",
          },
          {
            kind: "numeric",
            q: "n-type silicon has n_e = 1.0 × 10²² m⁻³ and electron mobility 0.135 m²/(V s). Neglecting holes, find its conductivity in S/m (e = 1.6 × 10⁻¹⁹ C).",
            answer: 216,
            tolerance: 1,
            unit: "S/m",
            difficulty: 3,
            hint: "σ = e n_e μ_e.",
            explain: "σ = 1.6 × 10⁻¹⁹ × 1.0 × 10²² × 0.135 = 216 S/m (resistivity ≈ 4.6 × 10⁻³ Ω m).",
          },
          {
            kind: "multi",
            q: "Which statements are correct?",
            options: [
              "The output ripple frequency of a bridge rectifier on 50 Hz mains is 100 Hz.",
              "In reverse bias, below breakdown, the current is almost independent of the voltage.",
              "Adding donor impurity increases the hole concentration.",
              "A Zener diode in a regulator works in reverse breakdown.",
            ],
            answers: [0, 1, 3],
            explain: "Donors raise n_e and, by n_e n_h = n_i², lower n_h. The other three statements are correct.",
          },
          {
            kind: "mcq",
            q: "A Zener regulator has V_in = 15 V, R_S = 1 kΩ, V_Z = 10 V and R_L = 1 kΩ. The voltage across the load is:",
            options: ["10 V", "7.5 V", "5 V", "15 V"],
            answer: 1,
            difficulty: 3,
            hint: "Find the load voltage without the Zener first.",
            explain: "Without the Zener the load gets 15 × 1/(1 + 1) = 7.5 V, which is below V_Z = 10 V. So the Zener does not break down, carries no current, and the load voltage is 7.5 V.",
          },
        ],
      },

      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c12-exam-edge-logic-transistors",
        title: "Exam edge: Logic Gate Circuits and Transistor Numericals",
        summary:
          "Fast ways to solve gate combinations and waveform questions for JEE Main and NEET, building gates from NAND, and the transistor current and gain numericals still met in ISC and older-pattern papers.",
        minutes: 22,
        xp: 55,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Logic gate questions are among the quickest marks in JEE Main and NEET (and in KCET or COMEDK if their current syllabus lists them): a circuit of two to four gates, a truth table to complete, or input waveforms to turn into an output waveform. JEE Advanced seldom asks them. Transistor questions (α, β, gain) have left the JEE Main and NEET syllabi but remain in ISC and in some state tests, so a short revision follows.",
          },
          {
            type: "table",
            headers: ["Shortcut", "What it says", "Use it when"],
            rows: [
              ["Dominant input", "AND/NAND: any 0 decides the output (0 / 1). OR/NOR: any 1 decides it (1 / 0).", "reading a gate quickly or doing waveforms"],
              ["Bubble pushing", "a NOT on every input of an AND = NOR of the plain inputs; on every input of an OR = NAND", "a circuit with NOT gates before a gate"],
              ["Absorption", "A + A·B = A and A·(A + B) = A", "a variable appears in two branches"],
              ["Complement pair", t`$A \cdot \overline{A} = 0$, $A + \overline{A} = 1$`, "the same input reaches a gate both directly and through NOT"],
            ],
          },
          {
            type: "formula",
            tex: t`Y_{XOR} = A\overline{B} + \overline{A}B \qquad \beta = \frac{\alpha}{1-\alpha} \qquad |A_v| = \beta_{ac}\frac{R_C}{r_i} \qquad A_p = \beta_{ac}|A_v|`,
            caption: "XOR (output 1 when the inputs differ) and the transistor results most often used in numericals.",
          },
          {
            type: "example",
            title: "KCET level: identify the gate",
            problem: "A two-input gate gives outputs 1, 1, 1, 0 for AB = 00, 01, 10, 11. Name it and give its Boolean expression.",
            steps: [
              "The output is 0 only when both inputs are 1: that is the AND output (0, 0, 0, 1) inverted.",
              t`So it is NAND: $Y = \overline{A \cdot B}$.`,
            ],
            answer: t`NAND gate, $Y = \overline{A \cdot B}$.`,
          },
          {
            type: "example",
            title: "JEE Main level: a circuit that ignores its inputs",
            problem: "A and B go into a NOR gate giving P. Then P and A go into a NAND gate giving Y. Find Y for all inputs.",
            steps: [
              t`$P = \overline{A + B} = \overline{A}\cdot\overline{B}$.`,
              t`$P \cdot A = \overline{A}\,\overline{B}\,A = 0$ because $A\cdot\overline{A} = 0$.`,
              t`$Y = \overline{P \cdot A} = \overline{0} = 1$.`,
              "Row check: A = 1 makes P = 0, so NAND(0, 1) = 1; A = 0 makes NAND(P, 0) = 1. Both cases give 1.",
            ],
            answer: "Y = 1 for every input combination.",
          },
          {
            type: "example",
            title: "NEET level: waveforms",
            problem: "Over five equal time intervals, input A is 0, 1, 1, 0, 1 and input B is 0, 0, 1, 1, 1. Find the outputs of an AND gate and a NOR gate in each interval.",
            steps: [
              "Pair the inputs: (0,0), (1,0), (1,1), (0,1), (1,1).",
              "AND is 1 only for (1,1): 0, 0, 1, 0, 1.",
              "NOR is 1 only for (0,0): 1, 0, 0, 0, 0.",
            ],
            answer: "AND: 0, 0, 1, 0, 1. NOR: 1, 0, 0, 0, 0.",
          },
          {
            type: "example",
            title: "ISC / older JEE level: CE amplifier",
            problem: "In a CE amplifier, a change of 25 μA in base current produces a change of 2.0 mA in collector current. The input resistance is 1.0 kΩ and R_C = 5.0 kΩ. Find β_ac, the voltage gain and the power gain.",
            steps: [
              t`$\beta_{ac} = \dfrac{\Delta I_C}{\Delta I_B} = \dfrac{2.0 \times 10^{-3}}{25 \times 10^{-6}} = 80$.`,
              t`$|A_v| = \beta_{ac}\dfrac{R_C}{r_i} = 80 \times 5 = 400$.`,
              t`$A_p = \beta_{ac}|A_v| = 80 \times 400 = 3.2 \times 10^{4}$.`,
            ],
            answer: t`$\beta_{ac} = 80$, voltage gain 400 (phase reversed), power gain $3.2 \times 10^{4}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: XOR from four NAND gates",
            problem: t`Gate 1 is NAND(A, B) = P. Gate 2 is NAND(A, P) = Q. Gate 3 is NAND(B, P) = R. Gate 4 is NAND(Q, R) = Y. Show that Y is the XOR of A and B.`,
            steps: [
              t`$Y = \overline{Q \cdot R} = \overline{Q} + \overline{R}$ (De Morgan) $= A\cdot P + B\cdot P$.`,
              t`$= P\,(A + B) = \overline{A\cdot B}\,(A + B) = (\overline{A} + \overline{B})(A + B)$.`,
              t`Expand: $\overline{A}A + \overline{A}B + \overline{B}A + \overline{B}B = \overline{A}B + A\overline{B}$, since $A\overline{A} = 0$.`,
              "Row check: A = 1, B = 0 gives P = 1, Q = 0, R = 1, Y = NAND(0, 1) = 1. A = 1, B = 1 gives P = 0, Q = 1, R = 1, Y = 0.",
            ],
            answer: t`$Y = A\overline{B} + \overline{A}B$, the XOR function: 0, 1, 1, 0 for AB = 00, 01, 10, 11.`,
          },
          {
            type: "mistake",
            wrong: "A NOT on each input of an AND gate gives a NAND gate.",
            right: t`A NOT on each input of an AND gate gives a NOR gate: $\overline{A}\cdot\overline{B} = \overline{A + B}$.`,
            why: "It feels as if the NOTs can simply be 'moved' to the output. De Morgan says that moving the bars also swaps AND with OR, so the result is NOR. Inverting the output of an AND (one NOT after the gate) is what gives NAND.",
          },
          {
            type: "mistake",
            wrong: "β = α/(1 + α).",
            right: "β = α/(1 − α), and α = β/(1 + β).",
            why: "Both forms look alike. Check with numbers: α = 0.99 must give a large β (99). 0.99/1.99 ≈ 0.5 is clearly wrong, while 0.99/0.01 = 99 is right.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which gate is each combination equivalent to?",
              groups: ["AND", "OR", "NOT"],
              items: [
                { text: "NOT on both inputs of a NOR gate", group: 0, hint: "NOT(NOT A + NOT B) = A·B." },
                { text: "NOT on both inputs of a NAND gate", group: 1, hint: "NOT(NOT A · NOT B) = A + B." },
                { text: "NAND gate with both inputs joined", group: 2, hint: "NOT(A·A) = NOT A." },
                { text: "NAND gate followed by a NOT gate", group: 0, hint: "Two inversions cancel." },
                { text: "NOR gate followed by a NOT gate", group: 1, hint: "Two inversions cancel." },
                { text: "NOR gate with both inputs joined", group: 2, hint: "NOT(A + A) = NOT A." },
              ],
              explain: "These six building blocks are what 'universal gate' questions test. Inputs inverted: NOR becomes AND, NAND becomes OR. Output inverted: NAND becomes AND, NOR becomes OR. Inputs joined: either gives NOT.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the minimum number of NAND gates needed to make an AND gate?",
                answer: 2,
                explain: "One NAND gives NOT(A·B); a second NAND with its inputs joined inverts it back to A·B.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tip",
            md: "In a combination question, label every intermediate output (P, Q, R) and write a 4-row table with one column per label. It takes thirty seconds and prevents almost all errors. If the options are gate names, check the 00 and 11 rows first: they separate most gates at once.",
          },
          {
            type: "keypoints",
            items: [
              "AND/NAND are decided by any 0; OR/NOR are decided by any 1.",
              "NOTs on all inputs swap AND ↔ NOR and OR ↔ NAND (De Morgan).",
              "XOR = A·NOT B + NOT A·B; it needs four NAND gates.",
              "β = α/(1 − α); CE amplifier |A_v| = β_ac R_C / r_i and A_p = β_ac |A_v|.",
            ],
          },
        ],
        flashcards: [
          { front: "XOR gate", back: "Y = A·NOT B + NOT A·B; output 1 when the inputs are different (0, 1, 1, 0)." },
          { front: "NOT on both inputs of an AND gate", back: "Equivalent to NOR." },
          { front: "NOT on both inputs of an OR gate", back: "Equivalent to NAND." },
          { front: "Minimum NAND gates for NOT, AND, OR, XOR", back: "1, 2, 3, 4." },
          { front: "Fastest rows to test in a gate question", back: "AB = 00 and 11." },
          { front: "Absorption law", back: "A + A·B = A, and A·(A + B) = A." },
          { front: "β from α = 0.95", back: "β = 0.95/0.05 = 19." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A gate gives outputs 0, 1, 1, 0 for AB = 00, 01, 10, 11. It is:",
            options: ["OR", "NAND", "XOR", "NOR"],
            answer: 2,
            explain: "Output 1 only when the inputs differ is XOR. OR would also give 1 for 11; NAND would give 1 for 00.",
          },
          {
            kind: "mcq",
            q: "A and B are fed to a NAND gate, and its output is fed to both inputs of another NAND gate. The final output is:",
            options: ["A + B", "A · B", "NOT(A · B)", "NOT(A + B)"],
            answer: 1,
            explain: "The second NAND with joined inputs is a NOT, so it inverts NOT(A·B) back to A·B.",
          },
          {
            kind: "mcq",
            q: "The output of an OR gate with inputs A and NOT A is:",
            options: ["always 0", "always 1", "equal to A", "equal to NOT A"],
            answer: 1,
            explain: "A + NOT A = 1, because one of the two inputs is always 1.",
          },
          {
            kind: "multi",
            q: "In five intervals, A = 1, 0, 1, 0, 1 and B = 1, 1, 0, 0, 1. In which intervals (numbered 1–5) is the NAND output 0?",
            options: ["Interval 1", "Interval 2", "Interval 3", "Interval 4", "Interval 5"],
            answers: [0, 4],
            difficulty: 2,
            hint: "NAND is 0 only when both inputs are 1.",
            explain: "Both inputs are 1 only in intervals 1 and 5, so NAND = 0 there and 1 elsewhere.",
          },
          {
            kind: "numeric",
            q: "How many NAND gates are needed (at minimum) to make an OR gate?",
            answer: 3,
            explain: "Two NANDs used as NOT gates invert A and B, and a third NAND gives NOT(NOT A · NOT B) = A + B.",
          },
          {
            kind: "numeric",
            q: "For a transistor, β = 99. Find α.",
            answer: 0.99,
            tolerance: 0.001,
            explain: "α = β/(1 + β) = 99/100 = 0.99.",
          },
          {
            kind: "numeric",
            q: "In a CE amplifier, a 10 mV input signal produces a base current change of 10 μA, and β_ac = 60, R_C = 3 kΩ. Find the output voltage change in volts.",
            answer: 1.8,
            tolerance: 0.01,
            unit: "V",
            difficulty: 3,
            hint: "ΔI_C = β ΔI_B, then Δv_o = R_C ΔI_C.",
            explain: "ΔI_C = 60 × 10 μA = 0.6 mA; Δv_o = 3000 × 0.6 × 10⁻³ = 1.8 V. (Check: r_i = 10 mV/10 μA = 1 kΩ, so |A_v| = 60 × 3 = 180 and 180 × 10 mV = 1.8 V.)",
          },
          {
            kind: "mcq",
            q: t`Simplify $Y = \overline{\overline{A + B} + \overline{A}}$.`,
            options: ["A", "B", "A · B", "A + B"],
            answer: 0,
            difficulty: 3,
            hint: "Use De Morgan on the outer bar first.",
            explain: t`$Y = \overline{\overline{A+B}}\cdot\overline{\overline{A}} = (A + B)\cdot A = A$ by absorption.`,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Semiconductor Electronics: Materials, Devices and Simple Circuits": "c12-semiconductor-electronics",
  "12:Electronic Devices": ["c12-semiconductor-electronics"],
};
