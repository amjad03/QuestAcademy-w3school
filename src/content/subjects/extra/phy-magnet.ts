import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";

export const topics: Topic[] = [
  /* ================================================================== */
  /* Moving Charges and Magnetism                                        */
  /* ================================================================== */
  {
    slug: "moving-charges-magnetism",
    title: "Moving Charges and Magnetism",
    icon: "🧲",
    description: "Lorentz force, Biot–Savart and Ampère's laws, torque on current loops and the moving-coil galvanometer.",
    lessons: [
      {
        slug: "lorentz-force-and-motion",
        title: "Lorentz Force & Charges in a Magnetic Field",
        summary: "The force on a moving charge, circular and helical paths, the cyclotron and the velocity selector.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "In 1820 Oersted saw a compass needle twitch next to a current-carrying wire: **moving charges create magnetic fields, and magnetic fields push on moving charges**. This chapter is about that second half — and about how the push is used in particle accelerators, mass spectrometers and the galvanometers in your school lab.",
          },
          { type: "heading", text: "The Lorentz force" },
          {
            type: "formula",
            tex: t`\vec F = q\left(\vec E + \vec v \times \vec B\right) \qquad F_{mag} = qvB\sin\theta`,
            caption: "θ is the angle between velocity and magnetic field. SI unit of B: tesla (T) = N A⁻¹ m⁻¹",
          },
          {
            type: "list",
            items: [
              t`The magnetic force is **perpendicular to both** $\vec v$ and $\vec B$ (right-hand rule; reverse it for a negative charge).`,
              t`It is zero for a charge at rest or moving parallel/antiparallel to $\vec B$.`,
              t`Because $\vec F \perp \vec v$, the magnetic force does **no work**: speed and kinetic energy stay constant; only direction changes.`,
            ],
          },
          { type: "heading", text: "Motion in a uniform magnetic field" },
          {
            type: "table",
            headers: ["Case", "Path", "Key result"],
            rows: [
              [t`$\vec v \perp \vec B$`, "Circle", t`$r = \dfrac{mv}{qB}$, $T = \dfrac{2\pi m}{qB}$`],
              [t`$\vec v \parallel \vec B$`, "Straight line", "No force"],
              [t`$\vec v$ at angle θ`, "Helix", t`Pitch $p = \dfrac{2\pi m\, v\cos\theta}{qB}$, radius uses $v\sin\theta$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** A proton ($m = 1.67\times10^{-27}$ kg) enters a 0.5 T field at $2\times10^{6}$ m/s perpendicular to it. Radius $r = \dfrac{mv}{qB} = \dfrac{1.67\times10^{-27}\times 2\times10^{6}}{1.6\times10^{-19}\times0.5} \approx 0.042$ m $= 4.2$ cm. Cyclotron frequency $f = \dfrac{qB}{2\pi m} \approx 7.6$ MHz — independent of speed, which is exactly why a cyclotron works.`,
          },
          {
            type: "callout",
            tone: "fact",
            title: "Cyclotron and velocity selector",
            md: t`A **cyclotron** accelerates ions with an AC voltage across two "dees" at the frequency $qB/2\pi m$; the VECC cyclotron at Kolkata is an Indian example. A **velocity selector** uses crossed $\vec E$ and $\vec B$: only ions with $v = E/B$ pass undeflected, because $qE = qvB$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`In a velocity selector, $E = 3\times10^{4}$ V/m and $B = 0.02$ T. Speed of the undeflected ions in units of $10^{6}$ m/s?`,
                answer: 1.5,
                unit: "× 10⁶ m/s",
                explain: t`$v = E/B = 3\times10^{4}/0.02 = 1.5\times10^{6}$ m/s.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET / JEE trap",
            md: t`"A charged particle moves in a magnetic field — find the change in kinetic energy": the answer is **zero**, every time. Also remember $T$ and $f$ do not depend on $v$ or $r$; doubling the speed doubles the radius but leaves the period unchanged.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Radius in terms of energy",
            md: t`Since $mv = \sqrt{2mK} = \sqrt{2mqV}$ for a charge accelerated through $V$: $r = \dfrac{\sqrt{2mK}}{qB}$. Handy when the question gives kinetic energy or accelerating voltage.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\vec F = q\vec v\times\vec B$; magnitude $qvB\sin\theta$.`,
              "Magnetic force never changes speed or kinetic energy.",
              t`Perpendicular entry → circle, $r = mv/qB$, $T = 2\pi m/qB$.`,
              "Oblique entry → helix; pitch uses the parallel velocity component.",
              t`Crossed fields select $v = E/B$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Lorentz force", back: t`$\vec F = q(\vec E + \vec v\times\vec B)$` },
          { front: "Radius of circular path in B", back: t`$r = mv/qB = \sqrt{2mK}/qB$` },
          { front: "Cyclotron frequency", back: t`$f = qB/2\pi m$ — independent of speed` },
          { front: "Work done by magnetic force", back: "Zero, since F ⊥ v" },
          { front: "Velocity selector condition", back: t`$v = E/B$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A charged particle moves in a uniform magnetic field. The work done by the magnetic force over one revolution is:",
            options: ["Positive", "Negative", "Zero", "Depends on the charge"],
            answer: 2,
            explain: "The force is always perpendicular to the velocity, so no work is done at any instant.",
          },
          {
            kind: "mcq",
            q: "If the speed of a charge moving perpendicular to a uniform B is doubled, the radius of its circular path:",
            options: ["Halves", "Stays the same", "Doubles", "Becomes four times"],
            answer: 2,
            explain: t`$r = mv/qB \propto v$.`,
          },
          {
            kind: "truefalse",
            q: "The time period of a charge revolving in a uniform magnetic field increases with its speed.",
            answer: false,
            explain: t`$T = 2\pi m/qB$ has no $v$ in it.`,
          },
          {
            kind: "fill",
            q: "The radius of the circular path is $r = mv/$___.",
            answer: ["qB", "Bq"],
            explain: t`Equate $qvB = mv^2/r$.`,
          },
          {
            kind: "numeric",
            q: t`An $\alpha$-particle ($q = 3.2\times10^{-19}$ C, $m = 6.4\times10^{-27}$ kg) moves at $10^{6}$ m/s perpendicular to a 0.5 T field. Radius of its path in cm?`,
            answer: 4,
            unit: "cm",
            difficulty: 2,
            explain: t`$r = \dfrac{6.4\times10^{-27}\times10^{6}}{3.2\times10^{-19}\times0.5} = 0.04$ m $= 4$ cm.`,
          },
          {
            kind: "order",
            q: "Electron, proton and α-particle enter the same field with the same speed. Arrange them in increasing order of radius.",
            items: ["Electron", "Proton", "α-particle"],
            difficulty: 2,
            explain: t`$r \propto m/q$: electron $m_e/e$ (tiny), proton $m_p/e$, alpha $4m_p/2e = 2m_p/e$.`,
          },
        ],
      },
      {
        slug: "biot-savart-and-ampere",
        title: "Biot–Savart Law & Ampère's Circuital Law",
        summary: "Calculating magnetic fields of wires, loops, solenoids and toroids.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Every current element produces a tiny magnetic field. Add up all the tiny contributions (Biot–Savart) or, when symmetry allows, use a clever loop (Ampère) — and you can find the field of any wire shape the examiner draws.",
          },
          { type: "heading", text: "Biot–Savart law" },
          {
            type: "formula",
            tex: t`d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\, d\vec l \times \hat r}{r^2} \qquad dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl\,\sin\theta}{r^2}`,
            caption: t`μ₀ = 4π × 10⁻⁷ T m A⁻¹, so μ₀/4π = 10⁻⁷`,
          },
          { type: "heading", text: "Standard results" },
          {
            type: "table",
            headers: ["Source", "Field", "Note"],
            rows: [
              ["Infinite straight wire", t`$\dfrac{\mu_0 I}{2\pi r}$`, "Circular field lines, right-hand thumb rule"],
              ["Finite wire", t`$\dfrac{\mu_0 I}{4\pi d}(\sin\phi_1 + \sin\phi_2)$`, "Angles measured from the perpendicular"],
              ["Centre of circular loop (N turns)", t`$\dfrac{\mu_0 N I}{2R}$`, t`Semicircle: $\mu_0 I/4R$`],
              ["Axis of loop at distance x", t`$\dfrac{\mu_0 N I R^2}{2(R^2+x^2)^{3/2}}$`, t`Far away: $\propto 1/x^3$ (dipole)`],
              ["Long solenoid (inside)", t`$\mu_0 n I$`, "n = turns per metre; uniform inside"],
              ["Toroid (inside core)", t`$\dfrac{\mu_0 N I}{2\pi r}$`, "Zero outside and in the hole"],
            ],
          },
          { type: "heading", text: "Ampère's circuital law" },
          {
            type: "formula",
            tex: t`\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enclosed}}`,
            caption: "Choose an Amperian loop on which B is constant and parallel (or perpendicular) to dl",
          },
          {
            type: "text",
            md: t`For a long wire, take a circle of radius $r$: $B(2\pi r) = \mu_0 I$ → $B = \mu_0 I/2\pi r$. For a solenoid, a rectangle with one side inside: $BL = \mu_0 (nL) I$ → $B = \mu_0 n I$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Wire:** 10 A at 5 cm → $B = \dfrac{2\times10^{-7}\times10}{0.05} = 4\times10^{-5}$ T (comparable to Earth's field).`,
              t`**Coil:** 100 turns, $R = 10$ cm, 1 A → $B = \dfrac{4\pi\times10^{-7}\times100\times1}{2\times0.1} \approx 6.28\times10^{-4}$ T.`,
              t`**Solenoid:** 1000 turns/m, 2 A → $B = 4\pi\times10^{-7}\times2000 \approx 2.51\times10^{-3}$ T.`,
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A long straight wire carries 5 A. Magnetic field at 2 cm from it, in μT?",
                answer: 50,
                unit: "μT",
                explain: t`$B = 2\times10^{-7}\times5/0.02 = 5\times10^{-5}$ T $= 50$ μT.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: t`For a wire bent into shapes, the straight parts **through** the centre (pointing at it) contribute zero, because $d\vec l \parallel \hat r$. Students also forget that a semicircle gives half of $\mu_0 I/2R$. And $n$ in $\mu_0 nI$ is turns **per metre**, not total turns.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Field inside a thick wire",
            md: t`For a wire of radius $a$ with uniform current, inside ($r<a$): $B = \dfrac{\mu_0 I r}{2\pi a^2}$ (grows linearly); outside: $\mu_0 I/2\pi r$. Maximum at the surface.`,
          },
          {
            type: "keypoints",
            items: [
              t`Biot–Savart: $dB \propto I\,dl\sin\theta/r^2$.`,
              t`Wire $\mu_0 I/2\pi r$; loop centre $\mu_0 NI/2R$; solenoid $\mu_0 nI$; toroid $\mu_0 NI/2\pi r$.`,
              t`Ampère's law $\oint\vec B\cdot d\vec l = \mu_0 I_{enc}$ is useful only with high symmetry.`,
              "On the axis far from a loop, B falls as 1/x³ — the loop is a magnetic dipole.",
            ],
          },
        ],
        flashcards: [
          { front: "Field of an infinite straight wire", back: t`$B = \mu_0 I/2\pi r$` },
          { front: "Field at the centre of a circular coil", back: t`$B = \mu_0 NI/2R$` },
          { front: "Field inside a long solenoid", back: t`$B = \mu_0 nI$ (n = turns per metre)` },
          { front: "Ampère's circuital law", back: t`$\oint \vec B\cdot d\vec l = \mu_0 I_{enc}$` },
          { front: "Field outside an ideal toroid", back: "Zero" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A solenoid 0.5 m long has 500 turns and carries 3 A. Field inside it in mT?",
            answer: 3.77,
            tolerance: 0.05,
            unit: "mT",
            explain: t`$n = 1000$ /m, $B = 4\pi\times10^{-7}\times1000\times3 = 3.77\times10^{-3}$ T.`,
          },
          {
            kind: "mcq",
            q: "A wire bent into a semicircle of radius R carries current I. Field at the centre:",
            options: [t`$\mu_0 I/2R$`, t`$\mu_0 I/4R$`, t`$\mu_0 I/2\pi R$`, t`$\mu_0 I/4\pi R$`],
            answer: 1,
            explain: t`Half a full loop: $\tfrac12\cdot\mu_0 I/2R = \mu_0 I/4R$.`,
          },
          {
            kind: "truefalse",
            q: "The magnetic field inside a long, tightly wound solenoid is nearly uniform.",
            answer: true,
            explain: t`It is $\mu_0 nI$ everywhere well inside, independent of position.`,
          },
          {
            kind: "fill",
            q: "The magnetic field outside an ideal toroid is ___.",
            answer: ["zero", "0"],
            explain: "An Amperian loop outside encloses equal currents going in and out, so net enclosed current is zero.",
          },
          {
            kind: "mcq",
            q: "Far from a current loop along its axis (x ≫ R), the field varies as:",
            options: ["1/x", "1/x²", "1/x³", "Independent of x"],
            answer: 2,
            difficulty: 2,
            explain: t`$B \to \mu_0 I R^2/2x^3$, the dipole field.`,
          },
          {
            kind: "numeric",
            q: "A circular coil of 50 turns and radius 5 cm carries 2 A. Field at its centre, in mT? (Take π = 3.14.)",
            answer: 1.256,
            tolerance: 0.02,
            unit: "mT",
            difficulty: 2,
            explain: t`$B = \dfrac{4\pi\times10^{-7}\times50\times2}{2\times0.05} = 4\pi\times10^{-4} \approx 1.256\times10^{-3}$ T.`,
          },
        ],
      },
      {
        slug: "torque-and-galvanometer",
        title: "Force Between Currents, Torque & the Galvanometer",
        summary: "Parallel wires, the current loop as a magnetic dipole, the moving-coil galvanometer and converting it to ammeters and voltmeters.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A current-carrying wire in a field feels a force; two current-carrying wires feel each other; and a coil in a field feels a torque. That torque is what turns the needle of every analogue meter and every electric motor — from a ceiling fan to the traction motors of Vande Bharat trains.",
          },
          { type: "heading", text: "Force on a conductor and between parallel wires" },
          {
            type: "formula",
            tex: t`\vec F = I\,\vec L \times \vec B \qquad \frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}`,
            caption: "Parallel currents attract; antiparallel currents repel",
          },
          {
            type: "text",
            md: t`Two wires 10 cm apart, each carrying 10 A: $F/L = \dfrac{2\times10^{-7}\times10\times10}{0.1} = 2\times10^{-4}$ N/m. This formula was the basis of the old definition of the ampere (2 × 10⁻⁷ N/m for 1 A at 1 m); since 2019 the ampere is defined by fixing the electron charge.`,
          },
          { type: "heading", text: "Torque on a current loop" },
          {
            type: "formula",
            tex: t`\vec\tau = \vec m \times \vec B, \qquad \tau = NIAB\sin\theta, \qquad \vec m = NI\vec A`,
            caption: "θ = angle between the coil's normal (magnetic moment) and B",
          },
          {
            type: "text",
            md: t`**Worked example.** A 50-turn coil of area $4\times10^{-4}$ m² carries 0.5 A in a 0.2 T field, with its **plane parallel** to the field (so $\theta = 90^\circ$). $\tau = 50\times0.5\times4\times10^{-4}\times0.2 = 2\times10^{-3}$ N m — the maximum possible torque.`,
          },
          { type: "heading", text: "Moving-coil galvanometer" },
          {
            type: "list",
            items: [
              t`A radial field (concave poles + soft-iron core) keeps $\theta = 90^\circ$, so $\tau = NIAB$.`,
              t`Restoring torque of the spring $k\phi$ balances it: $I = \dfrac{k}{NAB}\phi$ — a linear scale.`,
              t`Current sensitivity $\dfrac{\phi}{I} = \dfrac{NAB}{k}$; voltage sensitivity $\dfrac{\phi}{V} = \dfrac{NAB}{kG}$.`,
            ],
          },
          {
            type: "table",
            headers: ["Convert to", "Connect", "Formula", "Ideal resistance"],
            rows: [
              ["Ammeter (0–I)", "Small shunt S in parallel", t`$S = \dfrac{I_g G}{I - I_g}$`, "Zero"],
              ["Voltmeter (0–V)", "Large R in series", t`$R = \dfrac{V}{I_g} - G$`, "Infinite"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** $G = 50\ \Omega$, full-scale $I_g = 2$ mA. For a 0–2 A ammeter: $S = \dfrac{0.002\times50}{2 - 0.002} \approx 0.05\ \Omega$. For a 0–10 V voltmeter: $R = \dfrac{10}{0.002} - 50 = 4950\ \Omega$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A galvanometer of resistance 100 Ω gives full deflection at 1 mA. Series resistance (in Ω) needed to make a 0–5 V voltmeter?",
                answer: 4900,
                unit: "Ω",
                explain: t`$R = 5/0.001 - 100 = 4900\ \Omega$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: t`In $\tau = NIAB\sin\theta$, θ is measured from the **normal** to the coil. "Plane of the coil parallel to B" means $\theta = 90^\circ$ (maximum torque), not zero. Also: doubling N doubles current sensitivity but **not** voltage sensitivity, because the coil resistance G doubles too.`,
          },
          {
            type: "keypoints",
            items: [
              t`$F/L = \mu_0 I_1 I_2/2\pi d$; like currents attract.`,
              t`Current loop = magnetic dipole, $m = NIA$; $\tau = mB\sin\theta$.`,
              "Radial field makes the galvanometer scale linear.",
              "Ammeter: low shunt in parallel. Voltmeter: high resistance in series.",
            ],
          },
        ],
        flashcards: [
          { front: "Force per length between parallel wires", back: t`$\mu_0 I_1 I_2/2\pi d$` },
          { front: "Torque on a coil", back: t`$\tau = NIAB\sin\theta$, θ from the normal` },
          { front: "Shunt for ammeter", back: t`$S = I_g G/(I - I_g)$` },
          { front: "Series resistance for voltmeter", back: t`$R = V/I_g - G$` },
          { front: "Current sensitivity of galvanometer", back: t`$NAB/k$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Two long parallel wires carry currents in opposite directions. They:",
            options: ["Attract", "Repel", "Exert no force", "Exert a torque only"],
            answer: 1,
            explain: "Antiparallel currents repel; parallel currents attract.",
          },
          {
            kind: "numeric",
            q: "A galvanometer (G = 20 Ω, I_g = 5 mA) is converted to a 0–1 A ammeter. Shunt resistance in Ω? (2 decimal places)",
            answer: 0.1,
            tolerance: 0.005,
            unit: "Ω",
            difficulty: 2,
            explain: t`$S = \dfrac{0.005\times20}{1-0.005} = \dfrac{0.1}{0.995} \approx 0.10\ \Omega$.`,
          },
          {
            kind: "truefalse",
            q: "An ideal ammeter has zero resistance.",
            answer: true,
            explain: "It is connected in series and should not change the current it measures.",
          },
          {
            kind: "fill",
            q: "The magnetic moment of a coil is $m = NI$___, where the blank is the area of the coil.",
            answer: ["A"],
            explain: t`$m = NIA$, directed along the normal by the right-hand rule.`,
          },
          {
            kind: "mcq",
            q: "The torque on a current loop in a uniform field is maximum when the plane of the loop is:",
            options: ["Perpendicular to B", "Parallel to B", "At 45° to B", "Torque is always the same"],
            answer: 1,
            explain: t`Plane parallel → normal perpendicular → $\sin 90^\circ = 1$.`,
          },
          {
            kind: "numeric",
            q: "Two parallel wires 5 cm apart carry 5 A and 10 A. Force per metre on each, in units of 10⁻⁴ N/m?",
            answer: 2,
            unit: "× 10⁻⁴ N/m",
            explain: t`$F/L = 2\times10^{-7}\times5\times10/0.05 = 2\times10^{-4}$ N/m (equal on both by Newton's third law).`,
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  /* Magnetism and Matter                                                */
  /* ================================================================== */
  {
    slug: "magnetism-and-matter",
    title: "Magnetism and Matter",
    icon: "🧭",
    description: "Bar magnets as dipoles, Earth's magnetism, and dia-, para- and ferromagnetic materials.",
    lessons: [
      {
        slug: "bar-magnet-dipole",
        title: "The Bar Magnet as a Magnetic Dipole",
        summary: "Field on the axis and equator, torque and energy in a uniform field, oscillations and Gauss's law for magnetism.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Sprinkle iron filings around a bar magnet and you see the same pattern as around a current-carrying solenoid. That is no coincidence: a bar magnet behaves exactly like a **magnetic dipole** with moment $\\vec m$ pointing from its S pole to its N pole.",
          },
          { type: "illustration", emoji: "🧲", caption: "Field lines leave N, enter S outside, and continue S → N inside: they form closed loops." },
          { type: "heading", text: "Field of a dipole (far away, r ≫ length)" },
          {
            type: "formula",
            tex: t`B_{axial} = \frac{\mu_0}{4\pi}\frac{2m}{r^3} \qquad B_{equatorial} = \frac{\mu_0}{4\pi}\frac{m}{r^3}`,
            caption: "Same form as an electric dipole; the equatorial field points opposite to m",
          },
          {
            type: "text",
            md: t`**Worked example.** $m = 2$ A m², $r = 10$ cm. Axial: $B = 10^{-7}\times\dfrac{2\times2}{(0.1)^3} = 4\times10^{-4}$ T. Equatorial at the same distance: $2\times10^{-4}$ T — exactly half.`,
          },
          { type: "heading", text: "Dipole in a uniform field" },
          {
            type: "table",
            headers: ["Quantity", "Expression", "Remark"],
            rows: [
              ["Torque", t`$\vec\tau = \vec m\times\vec B$, $\tau = mB\sin\theta$`, "No net force in a uniform field"],
              ["Potential energy", t`$U = -\vec m\cdot\vec B = -mB\cos\theta$`, t`Stable at $\theta = 0$, unstable at $180^\circ$`],
              ["Work to rotate θ₁ → θ₂", t`$W = mB(\cos\theta_1 - \cos\theta_2)$`, t`0° → 180°: $W = 2mB$`],
              ["Small oscillations", t`$T = 2\pi\sqrt{\dfrac{I}{mB}}$`, "Used to compare fields or moments"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A magnet of moment 0.5 A m² is aligned with a 0.4 T field. Work (in J) needed to turn it through 90°?",
                answer: 0.2,
                unit: "J",
                explain: t`$W = mB(\cos0^\circ - \cos90^\circ) = 0.5\times0.4\times1 = 0.2$ J.`,
              },
            ],
          },
          { type: "heading", text: "Gauss's law for magnetism" },
          {
            type: "formula",
            tex: t`\oint \vec B\cdot d\vec A = 0`,
            caption: "Net magnetic flux through any closed surface is zero: there are no isolated magnetic poles (monopoles)",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap: cutting a magnet",
            md: "Cut a bar magnet **perpendicular** to its length into two halves: each half is a complete magnet with the same pole strength but half the length, so $m \\to m/2$. Cut it **along** its length: pole strength halves, length same, so again $m \\to m/2$. You never get an isolated N pole.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Electric vs magnetic dipole",
            md: "Replace $p \\to m$, $E \\to B$ and $\\tfrac{1}{4\\pi\\varepsilon_0} \\to \\tfrac{\\mu_0}{4\\pi}$ and every electric-dipole formula you learnt in electrostatics carries over.",
          },
          {
            type: "keypoints",
            items: [
              t`Axial field $= 2\times$ equatorial field at the same distance.`,
              t`$\tau = mB\sin\theta$; $U = -mB\cos\theta$; flipping costs $2mB$.`,
              t`$T = 2\pi\sqrt{I/mB}$ for small oscillations.`,
              "Magnetic field lines are closed loops; no monopoles.",
            ],
          },
        ],
        flashcards: [
          { front: "Axial field of a short magnet", back: t`$\dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}$` },
          { front: "Equatorial field of a short magnet", back: t`$\dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}$, opposite to m` },
          { front: "Potential energy of a dipole in B", back: t`$U = -mB\cos\theta$` },
          { front: "Gauss's law for magnetism", back: t`$\oint\vec B\cdot d\vec A = 0$ — no monopoles` },
          { front: "Period of a magnet oscillating in B", back: t`$T = 2\pi\sqrt{I/mB}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Work done (in J) to rotate a magnet of moment 1.5 A m² from the stable position to the unstable position in a 0.2 T field?",
            answer: 0.6,
            unit: "J",
            explain: t`$W = 2mB = 2\times1.5\times0.2 = 0.6$ J.`,
          },
          {
            kind: "mcq",
            q: "At equal distance from a short bar magnet, the ratio of axial to equatorial field is:",
            options: ["1 : 1", "1 : 2", "2 : 1", "4 : 1"],
            answer: 2,
            explain: t`$2m/r^3$ vs $m/r^3$.`,
          },
          {
            kind: "truefalse",
            q: "Isolated magnetic monopoles have been observed in the laboratory.",
            answer: false,
            explain: t`None has been found; Gauss's law $\oint\vec B\cdot d\vec A = 0$ expresses this.`,
          },
          {
            kind: "fill",
            q: "The net magnetic flux through any closed surface is ___.",
            answer: ["zero", "0"],
            explain: "Every field line that enters a closed surface also leaves it.",
          },
          {
            kind: "numeric",
            q: "A compass needle oscillates with period 2 s in a field B. Its period (in s) in a field 4B?",
            answer: 1,
            unit: "s",
            difficulty: 2,
            explain: t`$T \propto 1/\sqrt{B}$; quadrupling B halves T.`,
          },
          {
            kind: "mcq",
            q: "A bar magnet of moment m is cut into two equal halves perpendicular to its length. Moment of each half:",
            options: ["m", "m/2", "2m", "m/4"],
            answer: 1,
            explain: "Pole strength unchanged, length halved, so m/2.",
          },
        ],
      },
      {
        slug: "earths-magnetism",
        title: "Earth's Magnetism",
        summary: "Declination, dip and the horizontal component; apparent dip and the magnetic map of India.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "Earth behaves roughly like a giant bar magnet tilted about 11° from its rotation axis, with the magnet's S pole near geographic north. The field (about 0.3–0.6 G, i.e. 3–6 × 10⁻⁵ T at the surface) is thought to come from currents in the molten iron outer core — the **dynamo effect**.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Syllabus note",
            md: "The rationalised NCERT book trims Earth's magnetism, but ISC, Karnataka PUC and many state boards still examine it, and the vector resolution appears in NEET-style questions. Check your board's latest syllabus.",
          },
          { type: "heading", text: "The three magnetic elements" },
          {
            type: "table",
            headers: ["Element", "Meaning", "Example value"],
            rows: [
              ["Declination D", "Angle between geographic and magnetic meridians", "Small in India: about 0°41′ E at Delhi, 0°58′ W at Mumbai"],
              ["Dip (inclination) I", "Angle of the total field below the horizontal", "About 42° at Delhi; 0° on the magnetic equator, 90° at the poles"],
              [t`Horizontal component $B_H$`, "Component along the magnetic meridian", "Sets the direction of a compass"],
            ],
          },
          {
            type: "formula",
            tex: t`B_H = B\cos I \qquad B_V = B\sin I \qquad \tan I = \frac{B_V}{B_H} \qquad B = \sqrt{B_H^2 + B_V^2}`,
          },
          {
            type: "text",
            md: t`**Worked example.** At a place $B_H = 0.3$ G and dip $= 60^\circ$. Total field $B = B_H/\cos60^\circ = 0.6$ G; vertical component $B_V = B_H\tan60^\circ \approx 0.52$ G.`,
          },
          {
            type: "illustration",
            emoji: "🌏",
            caption: "The magnetic (dip) equator passes close to the southern tip of India — the observatory at Thiruvananthapuram studies the equatorial electrojet.",
          },
          { type: "heading", text: "Apparent dip" },
          {
            type: "formula",
            tex: t`\tan I' = \frac{\tan I}{\cos\beta} \qquad \cot^2 I = \cot^2 I_1 + \cot^2 I_2`,
            caption: "β: angle of the dip circle's plane from the magnetic meridian. Right: two mutually perpendicular planes give true dip",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A dip needle placed in a vertical plane perpendicular to the magnetic meridian rests:",
                options: ["Horizontal", "Vertical", "At the true dip", "At 45°"],
                answer: 1,
                explain: t`$\beta = 90^\circ$, so $\cos\beta = 0$ and $\tan I' \to \infty$: only $B_V$ acts in that plane.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "A compass needle in a horizontal plane responds only to $B_H$. At the magnetic poles $B_H = 0$, so an ordinary compass is useless there — while a dip needle stands vertical. Don't confuse declination (horizontal angle) with dip (vertical angle).",
          },
          {
            type: "keypoints",
            items: [
              "Declination, dip and B_H fully specify Earth's field at a place.",
              t`$\tan I = B_V/B_H$.`,
              "Dip is 0° at the magnetic equator, 90° at the magnetic poles.",
              t`Apparent dip in a plane at β: $\tan I' = \tan I/\cos\beta$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Declination", back: "Angle between the geographic and magnetic meridians" },
          { front: "Angle of dip", back: "Angle between Earth's total field and the horizontal" },
          { front: "Relation between components", back: t`$\tan I = B_V/B_H$` },
          { front: "Dip at the magnetic equator", back: "0°" },
          { front: "Apparent dip", back: t`$\tan I' = \tan I/\cos\beta$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The angle of dip at the magnetic equator is:",
            options: ["0°", "45°", "90°", "Equal to the latitude"],
            answer: 0,
            explain: "The total field is horizontal at the magnetic equator.",
          },
          {
            kind: "numeric",
            q: "At a place the dip is 45° and B_H = 0.35 G. Total field in gauss (2 decimals)?",
            answer: 0.49,
            tolerance: 0.01,
            unit: "G",
            explain: t`$B = B_H/\cos45^\circ = 0.35\sqrt2 \approx 0.495$ G.`,
          },
          {
            kind: "truefalse",
            q: "Earth's geographic and magnetic poles coincide.",
            answer: false,
            explain: "The magnetic axis is tilted about 11° from the rotation axis; this is why declination exists.",
          },
          {
            kind: "fill",
            q: "The angle between the geographic meridian and the magnetic meridian is called ___.",
            answer: ["declination", "magnetic declination", "variation"],
            explain: "Declination; dip is the vertical angle.",
          },
          {
            kind: "numeric",
            q: "True dip is 45°. The dip circle is turned so its plane makes 60° with the magnetic meridian. Apparent dip in degrees (nearest 0.1)?",
            answer: 63.4,
            tolerance: 0.3,
            unit: "°",
            difficulty: 3,
            explain: t`$\tan I' = \tan45^\circ/\cos60^\circ = 2$, so $I' = \tan^{-1}2 \approx 63.4^\circ$.`,
          },
          {
            kind: "mcq",
            q: "At the magnetic north pole, a freely suspended magnetic needle:",
            options: ["Points north–south horizontally", "Stands vertical", "Points east–west", "Spins continuously"],
            answer: 1,
            explain: "Dip is 90°: the field is purely vertical.",
          },
        ],
      },
      {
        slug: "magnetic-materials",
        title: "Magnetic Properties of Materials",
        summary: "Magnetisation, H, susceptibility and permeability; dia-, para- and ferromagnetism, Curie law and hysteresis.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Put a material inside a solenoid and the field changes: iron multiplies it a thousand-fold, aluminium nudges it up, copper nudges it down. Classifying materials by this response is the heart of the chapter — and of choosing cores for transformers or magnets for MRI scanners.",
          },
          { type: "heading", text: "Defining the quantities" },
          {
            type: "list",
            items: [
              t`**Magnetisation** $M$ = net magnetic moment per unit volume (A/m).`,
              t`**Magnetic intensity** $H = \dfrac{B}{\mu_0} - M$ (A/m); in a solenoid $H = nI$.`,
              t`**Susceptibility** $\chi = M/H$ (dimensionless).`,
              t`**Permeability** $\mu = \mu_0\mu_r$, with $\mu_r = 1 + \chi$.`,
            ],
          },
          {
            type: "formula",
            tex: t`B = \mu_0(H + M) = \mu_0(1+\chi)H = \mu_0\mu_r H`,
          },
          {
            type: "text",
            md: t`**Worked example.** A solenoid with $n = 1000$ turns/m carries 2 A and has a core of $\mu_r = 400$. $H = nI = 2000$ A/m; $B = \mu_0\mu_r H = 4\pi\times10^{-7}\times400\times2000 \approx 1.0$ T; $M = (\mu_r - 1)H = 399\times2000 \approx 8.0\times10^{5}$ A/m.`,
          },
          { type: "heading", text: "Three classes of materials" },
          {
            type: "table",
            headers: ["Property", "Diamagnetic", "Paramagnetic", "Ferromagnetic"],
            rows: [
              ["χ", t`Small, negative ($\sim -10^{-5}$)`, t`Small, positive ($\sim 10^{-5}$–$10^{-3}$)`, "Large, positive (10²–10⁵)"],
              [t`$\mu_r$`, "Slightly < 1", "Slightly > 1", "≫ 1"],
              ["In non-uniform field", "Moves to weaker region", "Moves to stronger region", "Strongly attracted"],
              ["Temperature effect", "Almost none", t`$\chi = C/T$ (Curie law)`, "Paramagnetic above Curie temperature"],
              ["Examples", "Bi, Cu, Ag, water, N₂, superconductors", "Al, Na, Ca, O₂, CuCl₂", "Fe, Co, Ni, Gd, alnico"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Perfect diamagnets",
            md: "A superconductor expels magnetic field completely ($\\chi = -1$, $B = 0$ inside) — the **Meissner effect**. It is how maglev demonstrations float a magnet above a cooled disc.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A paramagnetic salt has $\chi = 2.4\times10^{-5}$ at 300 K. Its susceptibility at 150 K, in units of $10^{-5}$?`,
                answer: 4.8,
                unit: "× 10⁻⁵",
                explain: t`$\chi \propto 1/T$: halving T doubles χ.`,
              },
            ],
          },
          { type: "heading", text: "Hysteresis and choosing materials" },
          {
            type: "text",
            md: "Taking a ferromagnet round a cycle of H gives a B–H loop. **Retentivity** is the B left when H = 0; **coercivity** is the reverse H needed to bring B to zero. The area of the loop is energy lost as heat per cycle per unit volume.",
          },
          {
            type: "table",
            headers: ["Use", "Need", "Material"],
            rows: [
              ["Permanent magnets", "High retentivity and high coercivity", "Steel, alnico, NdFeB"],
              ["Electromagnets, transformer cores", "High permeability, low coercivity, thin loop", "Soft iron, silicon steel"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "Soft iron has **higher** retentivity than steel but very low coercivity — so it loses magnetism easily. Examiners love asking why soft iron is still unsuitable for permanent magnets. The deciding property is coercivity.",
          },
          {
            type: "keypoints",
            items: [
              t`$B = \mu_0\mu_r H$, $\mu_r = 1+\chi$, $H = nI$ in a solenoid.`,
              "Diamagnetic: χ < 0; paramagnetic: small χ > 0; ferromagnetic: huge χ.",
              t`Curie law $\chi = C/T$ for paramagnets.`,
              "Above the Curie temperature (≈ 1043 K for iron) a ferromagnet becomes paramagnetic.",
              "Permanent magnets need high coercivity; cores need thin hysteresis loops.",
            ],
          },
        ],
        flashcards: [
          { front: "Relation between μr and χ", back: t`$\mu_r = 1 + \chi$` },
          { front: "Curie law", back: t`$\chi = C/T$ for paramagnetic materials` },
          { front: "Meissner effect", back: "Superconductors expel B: perfect diamagnet, χ = −1" },
          { front: "Coercivity", back: "Reverse H needed to reduce B to zero" },
          { front: "Curie temperature", back: "Above it a ferromagnet becomes paramagnetic" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is diamagnetic?",
            options: ["Aluminium", "Bismuth", "Nickel", "Oxygen"],
            answer: 1,
            explain: "Bismuth is the classic diamagnet; Al and O₂ are paramagnetic, Ni is ferromagnetic.",
          },
          {
            kind: "truefalse",
            q: "A superconductor behaves as a perfect diamagnet with χ = −1.",
            answer: true,
            explain: "Meissner effect: B = 0 inside, so M = −H.",
          },
          {
            kind: "fill",
            q: "The temperature above which a ferromagnet becomes paramagnetic is called the ___ temperature.",
            answer: ["Curie", "curie"],
            explain: "Curie temperature; about 770 °C for iron.",
          },
          {
            kind: "mcq",
            q: "The ideal material for a permanent magnet has:",
            options: [
              "Low retentivity, low coercivity",
              "High retentivity, low coercivity",
              "High retentivity, high coercivity",
              "Low retentivity, high coercivity",
            ],
            answer: 2,
            explain: "It must keep its magnetism (retentivity) and resist demagnetisation (coercivity).",
          },
          {
            kind: "numeric",
            q: "A toroid core has H = 1500 A/m and μr = 1000. Magnetisation M in units of 10⁶ A/m (2 decimals)?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "× 10⁶ A/m",
            difficulty: 2,
            explain: t`$M = \chi H = (\mu_r - 1)H = 999\times1500 \approx 1.50\times10^{6}$ A/m.`,
          },
          {
            kind: "order",
            q: "Arrange in increasing order of magnetic susceptibility.",
            items: ["Diamagnetic", "Paramagnetic", "Ferromagnetic"],
            explain: "Negative, then small positive, then very large positive.",
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  /* Electromagnetic Induction                                           */
  /* ================================================================== */
  {
    slug: "electromagnetic-induction",
    title: "Electromagnetic Induction",
    icon: "⚡",
    description: "Faraday's and Lenz's laws, motional emf, eddy currents, inductance and the AC generator.",
    lessons: [
      {
        slug: "faraday-and-lenz",
        title: "Faraday's Laws & Lenz's Law",
        summary: "Magnetic flux, the induced emf and its direction, and the charge that flows through a coil.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Oersted showed that currents make magnetic fields. In 1831 Faraday (and independently Henry) found the reverse: a **changing** magnetic field makes a current. Nearly every power station in India — coal at Vindhyachal, hydro at Bhakra, nuclear at Tarapur — relies on this discovery.",
          },
          { type: "heading", text: "Magnetic flux" },
          {
            type: "formula",
            tex: t`\Phi_B = \vec B\cdot\vec A = BA\cos\theta`,
            caption: "θ between B and the area vector (normal). SI unit: weber (Wb) = T m²",
          },
          { type: "heading", text: "Faraday's law and Lenz's law" },
          {
            type: "formula",
            tex: t`\varepsilon = -N\frac{d\Phi_B}{dt}`,
            caption: "The minus sign is Lenz's law: the induced current opposes the change that produces it",
          },
          {
            type: "list",
            items: [
              "Flux can change through B, through the area A, or through the angle θ — any of the three induces an emf.",
              "N pole of a magnet approaching a coil → the near face of the coil becomes N (repels). Receding → it becomes S (attracts).",
              "Lenz's law is the law of conservation of energy: you must do work against the opposing force, and that work appears as electrical energy.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** A 200-turn coil of area 0.01 m² sits perpendicular to a 0.5 T field, which falls to zero in 0.1 s. $\varepsilon = N\dfrac{\Delta\Phi}{\Delta t} = \dfrac{200\times0.01\times0.5}{0.1} = 10$ V. If the coil resistance is 20 Ω, the charge that flows is $q = \dfrac{N\Delta\Phi}{R} = \dfrac{200\times0.005}{20} = 0.05$ C.`,
          },
          {
            type: "formula",
            tex: t`q = \frac{N\,\Delta\Phi}{R}`,
            caption: "The charge depends only on the change of flux, not on how fast it happens",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`The flux through a loop is $\Phi = 4t^2 + 2t$ Wb. Magnitude of the induced emf at $t = 2$ s, in volts?`,
                answer: 18,
                unit: "V",
                explain: t`$|\varepsilon| = d\Phi/dt = 8t + 2 = 18$ V.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET / JEE trap",
            md: "Questions often give a fast and a slow removal of a magnet and ask which drives more **charge**. Same flux change → same charge; the fast pull only gives a bigger emf and current for a shorter time. Also: a large but constant flux induces nothing.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Lenz in one line",
            md: "Ask: \"Is the flux through the loop increasing or decreasing?\" The induced field points to fight that trend — opposite to B if flux grows, along B if it falls. Then curl your right hand to get the current.",
          },
          {
            type: "keypoints",
            items: [
              t`$\Phi = BA\cos\theta$; unit weber.`,
              t`$\varepsilon = -N\,d\Phi/dt$; the minus sign is Lenz's law.`,
              "Lenz's law follows from conservation of energy.",
              t`Charge through the circuit $q = N\Delta\Phi/R$, independent of time taken.`,
            ],
          },
        ],
        flashcards: [
          { front: "Magnetic flux", back: t`$\Phi = BA\cos\theta$, unit Wb` },
          { front: "Faraday's law", back: t`$\varepsilon = -N\,d\Phi/dt$` },
          { front: "Lenz's law", back: "Induced current opposes the change in flux causing it" },
          { front: "Charge induced", back: t`$q = N\Delta\Phi/R$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 100-turn coil of area 0.02 m² is perpendicular to a field that rises from 0 to 0.4 T in 0.2 s. Induced emf in volts?",
            answer: 4,
            unit: "V",
            explain: t`$\varepsilon = 100\times0.02\times0.4/0.2 = 4$ V.`,
          },
          {
            kind: "mcq",
            q: "The N pole of a magnet is moved towards a coil. The face of the coil nearer the magnet becomes:",
            options: ["N pole", "S pole", "No pole", "Alternately N and S"],
            answer: 0,
            explain: "By Lenz's law the coil repels the approaching N pole.",
          },
          {
            kind: "truefalse",
            q: "Lenz's law is a consequence of the law of conservation of energy.",
            answer: true,
            explain: "If the induced current aided the change, energy would be created from nothing.",
          },
          {
            kind: "fill",
            q: "The SI unit of magnetic flux is the ___.",
            answer: ["weber", "Wb"],
            explain: "1 Wb = 1 T m².",
          },
          {
            kind: "numeric",
            q: "A 100-turn coil of resistance 10 Ω has its flux per turn changed by 0.02 Wb. Charge (in C) that flows?",
            answer: 0.2,
            unit: "C",
            difficulty: 2,
            explain: t`$q = N\Delta\Phi/R = 100\times0.02/10 = 0.2$ C.`,
          },
          {
            kind: "mcq",
            q: "A loop lies in a very strong but constant magnetic field and does not move. The induced emf is:",
            options: ["Very large", "Zero", "Equal to BA", "Oscillating"],
            answer: 1,
            explain: "Induction needs a change in flux, not a large flux.",
          },
        ],
      },
      {
        slug: "motional-emf-eddy",
        title: "Motional EMF & Eddy Currents",
        summary: "Rods on rails, rotating rods and discs, energy considerations, and eddy currents with their uses.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Move a conductor through a magnetic field and the free electrons inside feel $q\\vec v\\times\\vec B$. They pile up at one end, and the conductor becomes a battery. That is **motional emf**.",
          },
          {
            type: "formula",
            tex: t`\varepsilon = Blv`,
            caption: "Rod of length l moving with velocity v, with l, v and B mutually perpendicular",
          },
          { type: "heading", text: "Rod sliding on rails" },
          {
            type: "list",
            items: [
              t`Current $I = \dfrac{Blv}{R}$.`,
              t`Retarding force on the rod $F = BIl = \dfrac{B^2l^2v}{R}$ (Lenz again).`,
              t`Power you must supply $P = Fv = \dfrac{B^2l^2v^2}{R} = I^2R$ — mechanical work becomes heat.`,
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** $l = 0.5$ m, $v = 4$ m/s, $B = 0.3$ T, $R = 2\ \Omega$. $\varepsilon = 0.3\times0.5\times4 = 0.6$ V; $I = 0.3$ A; $F = BIl = 0.045$ N; $P = Fv = 0.18$ W, and indeed $I^2R = 0.09\times2 = 0.18$ W.`,
          },
          { type: "heading", text: "Rotating rod or disc" },
          {
            type: "formula",
            tex: t`\varepsilon = \tfrac12 B\omega L^2`,
            caption: "Rod of length L rotating about one end in a perpendicular field; same for a disc of radius L (centre to rim)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 1 m metal rod rotates about one end at 20 rad/s in a perpendicular field of 0.5 T. EMF between its ends in volts?",
                answer: 5,
                unit: "V",
                explain: t`$\varepsilon = \tfrac12\times0.5\times20\times1^2 = 5$ V.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Indian skies",
            md: t`An aircraft with a 50 m wingspan flying from Delhi to Mumbai at 900 km/h (250 m/s), where the vertical component of Earth's field is about $4\times10^{-5}$ T, develops $\varepsilon = B_V l v = 4\times10^{-5}\times50\times250 = 0.5$ V across its wingtips. No current flows because there is no closed circuit.`,
          },
          { type: "heading", text: "Eddy currents" },
          {
            type: "text",
            md: "Changing flux through a bulk conductor induces swirling currents inside it. They heat the metal and oppose motion. Laminating cores or cutting slots breaks their paths.",
          },
          {
            type: "table",
            headers: ["Useful", "Unwanted"],
            rows: [
              ["Electromagnetic braking in trains", "Heating of transformer cores"],
              ["Induction cooktops and furnaces", "Energy loss in motors"],
              ["Damping in galvanometers", "Remedy: laminated, insulated sheets"],
              ["Analogue speedometers, energy meters", ""],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: t`In $\varepsilon = Blv$, use only the components that are mutually perpendicular. For a rod moving horizontally use $B_V$; for an aircraft it is the vertical component that matters, not the total field. And a magnet dropped through a copper pipe falls with $a < g$ because of eddy currents.`,
          },
          {
            type: "keypoints",
            items: [
              t`Motional emf $Blv$; rotating rod $\tfrac12 B\omega L^2$.`,
              t`Retarding force $B^2l^2v/R$; power $B^2l^2v^2/R$.`,
              "Eddy currents oppose motion and heat the conductor; lamination reduces them.",
            ],
          },
        ],
        flashcards: [
          { front: "Motional emf", back: t`$\varepsilon = Blv$` },
          { front: "EMF of a rod rotating about one end", back: t`$\tfrac12 B\omega L^2$` },
          { front: "Force to keep a rod moving on rails", back: t`$F = B^2l^2v/R$` },
          { front: "How to reduce eddy currents", back: "Laminated, insulated cores" },
          { front: "Magnet dropped through a copper pipe", back: "Falls slower than g due to eddy currents" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 0.2 m rod moves at 5 m/s perpendicular to a 0.8 T field. Motional emf in volts?",
            answer: 0.8,
            unit: "V",
            explain: t`$\varepsilon = 0.8\times0.2\times5 = 0.8$ V.`,
          },
          {
            kind: "numeric",
            q: "A 0.4 m rod rotates about one end at 50 rad/s in a 0.2 T field perpendicular to its plane of rotation. EMF in volts?",
            answer: 0.8,
            unit: "V",
            difficulty: 2,
            explain: t`$\tfrac12\times0.2\times50\times0.16 = 0.8$ V.`,
          },
          {
            kind: "mcq",
            q: "Transformer cores are laminated mainly to:",
            options: ["Reduce hysteresis loss", "Reduce eddy current loss", "Increase flux leakage", "Reduce copper loss"],
            answer: 1,
            explain: "Insulated laminations break up the eddy current paths.",
          },
          {
            kind: "truefalse",
            q: "A strong magnet dropped through a vertical copper tube falls with acceleration less than g.",
            answer: true,
            explain: "Eddy currents in the tube oppose the magnet's motion (Lenz's law).",
          },
          {
            kind: "mcq",
            q: "For a rod pulled at constant speed v on frictionless rails in a field, the external force required is proportional to:",
            options: [t`$v^0$`, t`$v$`, t`$v^2$`, t`$1/v$`],
            answer: 1,
            explain: t`$F = B^2l^2v/R \propto v$.`,
          },
          {
            kind: "fill",
            q: t`The emf of a rod of length $L$ rotating about one end is $\tfrac12 B\omega$___.`,
            answer: ["L^2", "L²", "l^2", "l²", "L2"],
            explain: t`Integrate $dε = B(\omega r)\,dr$ from 0 to L.`,
          },
        ],
      },
      {
        slug: "inductance-and-generator",
        title: "Self & Mutual Inductance, AC Generator",
        summary: "Inductance of a solenoid, mutual inductance, magnetic energy in an inductor and how a generator makes alternating emf.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A coil does not like its own current to change. Switch off a large inductor and it can throw a spark across the switch. This electrical inertia is **self-inductance**; the influence of one coil on a neighbour is **mutual inductance** — the principle of every transformer and wireless phone charger.",
          },
          { type: "heading", text: "Self-inductance" },
          {
            type: "formula",
            tex: t`N\Phi = LI \qquad \varepsilon = -L\frac{dI}{dt} \qquad L_{solenoid} = \mu_0 n^2 A l = \frac{\mu_0 N^2 A}{l}`,
            caption: "SI unit: henry (H). With a core of relative permeability μr, multiply by μr",
          },
          {
            type: "text",
            md: t`**Worked example.** A solenoid has 500 turns, length 0.5 m and area $10^{-3}$ m². $L = \dfrac{4\pi\times10^{-7}\times500^2\times10^{-3}}{0.5} \approx 6.28\times10^{-4}$ H. With 2 A flowing, stored energy $U = \tfrac12 LI^2 = \tfrac12\times6.28\times10^{-4}\times4 \approx 1.26\times10^{-3}$ J.`,
          },
          {
            type: "formula",
            tex: t`U = \tfrac12 LI^2 \qquad u_B = \frac{B^2}{2\mu_0}`,
            caption: "Energy stored in an inductor and magnetic energy density",
          },
          { type: "heading", text: "Mutual inductance" },
          {
            type: "list",
            items: [
              t`$N_2\Phi_2 = M I_1$ and $\varepsilon_2 = -M\,dI_1/dt$; $M_{12} = M_{21}$.`,
              t`Two coaxial solenoids (inner radius $r_1$): $M = \mu_0 n_1 n_2 \pi r_1^2 l$.`,
              t`$M = k\sqrt{L_1L_2}$ with coupling coefficient $0 \le k \le 1$.`,
              "M depends only on geometry, separation, orientation and the medium — not on the currents.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Current in a 0.2 H inductor falls from 5 A to 1 A in 0.1 s. Magnitude of the self-induced emf in volts?",
                answer: 8,
                unit: "V",
                explain: t`$|\varepsilon| = L\,\Delta I/\Delta t = 0.2\times4/0.1 = 8$ V.`,
              },
            ],
          },
          { type: "heading", text: "AC generator" },
          {
            type: "formula",
            tex: t`\Phi = NBA\cos\omega t \;\Rightarrow\; \varepsilon = NBA\omega\sin\omega t, \qquad \varepsilon_0 = NBA\omega`,
            caption: "A coil rotating at angular speed ω in a uniform field",
          },
          {
            type: "text",
            md: t`**Worked example.** 100 turns, $A = 0.1$ m², $B = 0.1$ T, rotating at 50 Hz ($\omega = 314$ rad/s): $\varepsilon_0 = 100\times0.1\times0.1\times314 = 314$ V. Indian grid generators run at 50 Hz, just like this coil.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: "The emf is **maximum** when the plane of the coil is **parallel** to B (flux zero but changing fastest), and zero when the plane is perpendicular (flux maximum). Also, inductances add like resistors in series ($L_1 + L_2$) only when there is no mutual coupling.",
          },
          {
            type: "keypoints",
            items: [
              t`$\varepsilon = -L\,dI/dt$; solenoid $L = \mu_0N^2A/l \propto N^2$.`,
              t`Energy in an inductor $\tfrac12 LI^2$; energy density $B^2/2\mu_0$.`,
              t`$M = k\sqrt{L_1L_2}$, depends on geometry only.`,
              t`Generator: $\varepsilon_0 = NBA\omega$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Self-inductance of a solenoid", back: t`$L = \mu_0N^2A/l$` },
          { front: "Energy stored in an inductor", back: t`$U = \tfrac12 LI^2$` },
          { front: "Coupling coefficient", back: t`$M = k\sqrt{L_1L_2}$, $0\le k\le1$` },
          { front: "Peak emf of an AC generator", back: t`$\varepsilon_0 = NBA\omega$` },
          { front: "SI unit of inductance", back: "Henry (H) = Wb/A" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Energy stored (in J) in a 4 H inductor carrying 3 A?",
            answer: 18,
            unit: "J",
            explain: t`$\tfrac12\times4\times9 = 18$ J.`,
          },
          {
            kind: "mcq",
            q: "If the number of turns of a solenoid is doubled, keeping length and area the same, its self-inductance becomes:",
            options: ["Half", "Same", "Double", "Four times"],
            answer: 3,
            explain: t`$L \propto N^2$.`,
          },
          {
            kind: "truefalse",
            q: "The mutual inductance of two coils depends on the currents flowing in them.",
            answer: false,
            explain: "M depends on geometry, relative position and the medium only.",
          },
          {
            kind: "fill",
            q: "The SI unit of inductance is the ___.",
            answer: ["henry", "H"],
            explain: "1 H = 1 V s/A = 1 Wb/A.",
          },
          {
            kind: "numeric",
            q: "A 50-turn coil of area 0.02 m² rotates at 100 rad/s in a 0.5 T field. Peak emf in volts?",
            answer: 50,
            unit: "V",
            explain: t`$\varepsilon_0 = 50\times0.5\times0.02\times100 = 50$ V.`,
          },
          {
            kind: "mcq",
            q: "Two coils have L₁ = 4 mH, L₂ = 9 mH and coupling coefficient 0.5. Their mutual inductance is:",
            options: ["3 mH", "6 mH", "1.5 mH", "13 mH"],
            answer: 0,
            difficulty: 2,
            explain: t`$M = 0.5\sqrt{4\times9} = 0.5\times6 = 3$ mH.`,
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  /* Alternating Current                                                 */
  /* ================================================================== */
  {
    slug: "alternating-current",
    title: "Alternating Current",
    icon: "🔌",
    description: "RMS values, reactance, series LCR circuits, resonance, power factor, LC oscillations and transformers.",
    lessons: [
      {
        slug: "ac-basics-reactance",
        title: "AC Basics: RMS Values & Reactance",
        summary: "Peak and rms values, phasors, and how resistors, inductors and capacitors behave in AC circuits.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "The socket in an Indian home supplies **230 V, 50 Hz** AC. The voltage swings from +325 V to −325 V fifty times a second, so what does \"230 V\" actually mean? It is the **root-mean-square** value — the DC voltage that would heat a resistor equally.",
          },
          {
            type: "formula",
            tex: t`v = v_0\sin\omega t \qquad V_{rms} = \frac{v_0}{\sqrt2} \approx 0.707\,v_0 \qquad I_{avg,\,half\ cycle} = \frac{2I_0}{\pi}`,
            caption: "Average over a full cycle is zero; AC meters read rms values",
          },
          {
            type: "text",
            md: t`**Worked example.** Peak of Indian mains: $v_0 = \sqrt2\times230 \approx 325$ V. That is why the insulation on house wiring must withstand well over 230 V.`,
          },
          { type: "widget", widget: "function-plot", props: { kind: "sine" }, caption: "A sinusoidal voltage: change amplitude and frequency to see v₀ and ω." },
          { type: "heading", text: "R, L and C on their own" },
          {
            type: "table",
            headers: ["Element", "Opposition", "Phase of current", "Average power"],
            rows: [
              ["Resistor", t`$R$`, "In phase with voltage", t`$V_{rms}I_{rms}$`],
              ["Inductor", t`$X_L = \omega L$`, t`Lags voltage by $\pi/2$`, "Zero"],
              ["Capacitor", t`$X_C = \dfrac{1}{\omega C}$`, t`Leads voltage by $\pi/2$`, "Zero"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Memory hook: ELI the ICE man",
            md: "In an inductor (L), E (voltage) comes before I. In a capacitor (C), I comes before E.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Inductor** 0.1 H on 230 V, 50 Hz: $X_L = 2\pi\times50\times0.1 \approx 31.4\ \Omega$, $I_{rms} = 230/31.4 \approx 7.3$ A.`,
              t`**Capacitor** 100 μF on the same supply: $X_C = \dfrac{1}{2\pi\times50\times10^{-4}} \approx 31.8\ \Omega$, $I_{rms} \approx 7.2$ A.`,
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "As frequency increases, the reactance of a capacitor:",
                options: ["Increases", "Decreases", "Stays constant", "First increases then decreases"],
                answer: 1,
                explain: t`$X_C = 1/\omega C$ falls with ω. A capacitor blocks DC (ω = 0) but passes high frequencies.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Peak, rms and average are different numbers. \"An AC ammeter reads 5 A\" means $I_{rms} = 5$ A, so $I_0 \\approx 7.07$ A. And the average of a full sine cycle is zero; the 2I₀/π result is only over half a cycle.",
          },
          {
            type: "keypoints",
            items: [
              t`$V_{rms} = v_0/\sqrt2$; Indian mains 230 V rms, 325 V peak, 50 Hz.`,
              t`$X_L = \omega L$ grows with frequency; $X_C = 1/\omega C$ falls.`,
              "Pure L or C: 90° phase difference and zero average power.",
            ],
          },
        ],
        flashcards: [
          { front: "RMS value of sinusoidal voltage", back: t`$v_0/\sqrt2$` },
          { front: "Inductive reactance", back: t`$X_L = \omega L = 2\pi fL$` },
          { front: "Capacitive reactance", back: t`$X_C = 1/\omega C$` },
          { front: "Phase in a pure inductor", back: "Current lags voltage by 90°" },
          { front: "Average power in pure L or C", back: "Zero" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Peak value (in V, nearest integer) of a 220 V rms supply?",
            answer: 311,
            tolerance: 1,
            unit: "V",
            explain: t`$220\sqrt2 \approx 311$ V.`,
          },
          {
            kind: "mcq",
            q: "In a purely capacitive AC circuit, the current:",
            options: ["Lags voltage by 90°", "Leads voltage by 90°", "Is in phase", "Leads by 180°"],
            answer: 1,
            explain: "ICE: current leads the voltage across a capacitor.",
          },
          {
            kind: "truefalse",
            q: "A capacitor blocks steady DC.",
            answer: true,
            explain: t`At ω = 0, $X_C \to \infty$.`,
          },
          {
            kind: "fill",
            q: "Inductive reactance $X_L = \\omega$___.",
            answer: ["L"],
            explain: "X_L = ωL.",
          },
          {
            kind: "numeric",
            q: "Reactance (in Ω, nearest integer) of a 10 μF capacitor at 50 Hz?",
            answer: 318,
            tolerance: 2,
            unit: "Ω",
            difficulty: 2,
            explain: t`$X_C = \dfrac{1}{2\pi\times50\times10^{-5}} \approx 318\ \Omega$.`,
          },
          {
            kind: "mcq",
            q: "If the frequency is doubled, the reactance of an inductor:",
            options: ["Halves", "Doubles", "Is unchanged", "Becomes four times"],
            answer: 1,
            explain: t`$X_L \propto \omega$.`,
          },
        ],
      },
      {
        slug: "lcr-resonance-power",
        title: "Series LCR Circuit, Resonance & Power",
        summary: "Impedance and phase angle, resonance and sharpness, power factor and wattless current.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Turning the tuning knob of an old radio to catch All India Radio changes a capacitor in an LCR circuit until its **resonant frequency** matches the station's. The physics behind it is a phasor diagram.",
          },
          { type: "heading", text: "Impedance and phase" },
          {
            type: "formula",
            tex: t`Z = \sqrt{R^2 + (X_L - X_C)^2} \qquad \tan\phi = \frac{X_L - X_C}{R} \qquad I_{rms} = \frac{V_{rms}}{Z}`,
            caption: "φ > 0: inductive (current lags); φ < 0: capacitive (current leads)",
          },
          {
            type: "text",
            md: t`**Worked example.** $R = 30\ \Omega$, $X_L = 80\ \Omega$, $X_C = 40\ \Omega$, $V_{rms} = 200$ V. $Z = \sqrt{30^2 + 40^2} = 50\ \Omega$, $I = 4$ A, $\cos\phi = 30/50 = 0.6$. Voltages: $V_R = 120$ V, $V_L = 320$ V, $V_C = 160$ V — and $\sqrt{120^2 + (320-160)^2} = 200$ V. ✔`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Classic trap",
            md: "Voltages in an LCR circuit add as **phasors**, not as numbers. Here $V_L = 320$ V exceeds the 200 V supply — perfectly legal. Adding 120 + 320 + 160 = 600 V is the wrong option examiners always include.",
          },
          { type: "heading", text: "Resonance" },
          {
            type: "formula",
            tex: t`\omega_0 = \frac{1}{\sqrt{LC}} \qquad Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}} \qquad \Delta\omega = \frac{R}{L}`,
            caption: "At resonance X_L = X_C, Z = R (minimum), current is maximum and in phase with voltage",
          },
          {
            type: "text",
            md: t`With $L = 0.1$ mH and $C = 253$ pF: $f_0 = \dfrac{1}{2\pi\sqrt{LC}} \approx 1.0$ MHz — right in the medium-wave band used by AIR stations. A smaller R gives a higher Q: a sharper tuning that rejects neighbouring stations.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A series LCR circuit has L = 1 H and C = 100 μF. Resonant angular frequency in rad/s?",
                answer: 100,
                unit: "rad/s",
                explain: t`$\omega_0 = 1/\sqrt{1\times10^{-4}} = 100$ rad/s.`,
              },
            ],
          },
          { type: "heading", text: "Power in AC circuits" },
          {
            type: "formula",
            tex: t`P = V_{rms}I_{rms}\cos\phi = I_{rms}^2R \qquad \cos\phi = \frac{R}{Z}`,
            caption: "cos φ is the power factor",
          },
          {
            type: "list",
            items: [
              "Pure R: cos φ = 1. Pure L or C: cos φ = 0 — the current is **wattless**.",
              t`The component $I_{rms}\sin\phi$ does no work on average and is called the wattless current.`,
              "Industries are charged extra by electricity boards for low power factor, so they add capacitor banks to push cos φ towards 1.",
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$Z = \sqrt{R^2 + (X_L - X_C)^2}$; voltages add as phasors.`,
              t`Resonance $\omega_0 = 1/\sqrt{LC}$: Z = R, current maximum, cos φ = 1.`,
              t`Quality factor $Q = \omega_0L/R$; small R → sharp resonance.`,
              t`$P = V_{rms}I_{rms}\cos\phi$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Impedance of series LCR", back: t`$Z = \sqrt{R^2 + (X_L - X_C)^2}$` },
          { front: "Resonant frequency", back: t`$\omega_0 = 1/\sqrt{LC}$` },
          { front: "Quality factor", back: t`$Q = \omega_0L/R = \tfrac1R\sqrt{L/C}$` },
          { front: "Power factor", back: t`$\cos\phi = R/Z$` },
          { front: "Wattless current", back: t`$I_{rms}\sin\phi$; arises when φ = 90°` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "R = 6 Ω, X_L = 12 Ω, X_C = 4 Ω in series. Impedance in Ω?",
            answer: 10,
            unit: "Ω",
            explain: t`$Z = \sqrt{36 + 64} = 10\ \Omega$.`,
          },
          {
            kind: "numeric",
            q: "The same circuit (R = 6 Ω, Z = 10 Ω) is connected to 100 V rms. Average power in watts?",
            answer: 600,
            unit: "W",
            difficulty: 2,
            explain: t`$I = 10$ A, $\cos\phi = 0.6$, $P = 100\times10\times0.6 = 600$ W $= I^2R$.`,
          },
          {
            kind: "mcq",
            q: "At resonance in a series LCR circuit, the power factor is:",
            options: ["0", "0.5", "0.707", "1"],
            answer: 3,
            explain: "Z = R, so cos φ = 1.",
          },
          {
            kind: "truefalse",
            q: "In a series LCR circuit, the rms voltage across the inductor can exceed the supply voltage.",
            answer: true,
            explain: "V_L and V_C partly cancel, so each can individually exceed the source voltage, especially near resonance.",
          },
          {
            kind: "fill",
            q: "Power factor $\\cos\\phi = R/$___.",
            answer: ["Z"],
            explain: "Ratio of resistance to impedance.",
          },
          {
            kind: "mcq",
            q: "To make the resonance of a series LCR circuit sharper, you should:",
            options: ["Increase R", "Decrease R", "Increase C only", "Increase the supply voltage"],
            answer: 1,
            difficulty: 2,
            explain: t`$Q = \omega_0L/R$: a smaller R raises Q.`,
          },
        ],
      },
      {
        slug: "lc-oscillations-transformers",
        title: "LC Oscillations & Transformers",
        summary: "Energy sloshing between a capacitor and an inductor, and how transformers make long-distance power transmission possible.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Charge a capacitor and connect it across an inductor. The capacitor discharges, current builds up in the inductor, the inductor recharges the capacitor the other way, and the cycle repeats — an electrical pendulum.",
          },
          { type: "heading", text: "LC oscillations" },
          {
            type: "formula",
            tex: t`q = q_0\cos\omega_0 t, \quad \omega_0 = \frac{1}{\sqrt{LC}}, \quad \frac{q_0^2}{2C} = \frac{q^2}{2C} + \frac12 LI^2 = \frac12 LI_0^2`,
            caption: "Total energy is constant (ideal, R = 0); I₀ = ω₀q₀",
          },
          {
            type: "table",
            headers: ["Mechanical (spring–mass)", "Electrical (LC)"],
            rows: [
              ["Displacement x", "Charge q"],
              ["Mass m", "Inductance L"],
              ["Spring constant k", "1/C"],
              ["Kinetic energy ½mv²", "Magnetic energy ½LI²"],
              ["Potential energy ½kx²", "Electric energy q²/2C"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** $L = 10$ mH, $C = 1$ μF, $q_0 = 20$ μC. $\omega_0 = 1/\sqrt{10^{-8}} = 10^4$ rad/s. Energy $= q_0^2/2C = (2\times10^{-5})^2/(2\times10^{-6}) = 2\times10^{-4}$ J. Peak current $I_0 = \omega_0q_0 = 0.2$ A, and check: $\tfrac12\times0.01\times0.04 = 2\times10^{-4}$ J. ✔`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "In an LC circuit, when the capacitor is fully discharged, all the energy is stored as ___ energy in the inductor.",
                answer: ["magnetic"],
                explain: t`$q = 0$, so energy $= \tfrac12 LI_0^2$.`,
              },
            ],
          },
          { type: "heading", text: "Transformers" },
          {
            type: "formula",
            tex: t`\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s} \quad(\text{ideal}) \qquad \eta = \frac{P_{out}}{P_{in}}`,
            caption: "Works on mutual induction; needs AC (changing flux)",
          },
          {
            type: "list",
            items: [
              "**Step-up** ($N_s > N_p$): raises voltage, lowers current. **Step-down**: the reverse.",
              "Losses: copper (I²R in windings), eddy currents (fix: laminations), hysteresis (fix: soft iron), flux leakage.",
              "A transformer cannot increase power — at best $P_{out} = P_{in}$.",
            ],
          },
          {
            type: "text",
            md: t`**Why high-voltage transmission?** Send 1 MW through lines of total resistance 10 Ω. At 10 kV, $I = 100$ A and loss $= I^2R = 10^5$ W (10%). At 100 kV, $I = 10$ A and loss $= 1000$ W (0.1%). That is why POWERGRID runs 400 kV and 765 kV lines across India and steps down to 230 V near your home.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "\"A step-up transformer increases the power\" — false. It trades current for voltage. Also, connecting a transformer to a DC battery gives no output (no changing flux) and can burn out the primary, whose only opposition is then its small resistance.",
          },
          {
            type: "keypoints",
            items: [
              t`LC: $\omega_0 = 1/\sqrt{LC}$, energy oscillates between C and L.`,
              t`Ideal transformer: $V_s/V_p = N_s/N_p = I_p/I_s$.`,
              "Transmission at high voltage cuts I²R loss.",
              "Losses: copper, eddy, hysteresis, flux leakage.",
            ],
          },
        ],
        flashcards: [
          { front: "Frequency of LC oscillations", back: t`$\omega_0 = 1/\sqrt{LC}$` },
          { front: "Mechanical analogue of inductance", back: "Mass" },
          { front: "Transformer ratio", back: t`$V_s/V_p = N_s/N_p = I_p/I_s$` },
          { front: "Why transmit at high voltage?", back: "Lower current → much lower I²R loss" },
          { front: "Remedy for eddy current loss", back: "Laminated core" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A transformer steps 230 V down to 11.5 V. If the primary has 2000 turns, how many turns does the secondary have?",
            answer: 100,
            unit: "turns",
            explain: t`$N_s = 2000\times11.5/230 = 100$.`,
          },
          {
            kind: "mcq",
            q: "A transformer works on the principle of:",
            options: ["Self-induction only", "Mutual induction", "Electrostatic induction", "Thermionic emission"],
            answer: 1,
            explain: "The changing flux of the primary links the secondary.",
          },
          {
            kind: "truefalse",
            q: "A step-up transformer increases electrical power.",
            answer: false,
            explain: "Power out ≤ power in; voltage rises only as current falls.",
          },
          {
            kind: "numeric",
            q: "An LC circuit has L = 0.5 H, C = 2 μF and maximum charge 10 μC. Peak current in mA?",
            answer: 10,
            unit: "mA",
            difficulty: 2,
            explain: t`$\omega_0 = 1/\sqrt{10^{-6}} = 1000$ rad/s; $I_0 = \omega_0q_0 = 1000\times10^{-5} = 0.01$ A $= 10$ mA.`,
          },
          {
            kind: "order",
            q: "Arrange the stages of power supply from a power station to your home.",
            items: ["Generator", "Step-up transformer", "High-voltage transmission line", "Step-down transformer", "Household socket"],
            explain: "Voltage is raised for transmission and lowered before distribution.",
          },
          {
            kind: "numeric",
            q: "A transformer draws 0.5 A from a 230 V supply and delivers 100 W. Efficiency in percent (nearest integer)?",
            answer: 87,
            tolerance: 1,
            unit: "%",
            explain: t`$P_{in} = 115$ W, $\eta = 100/115 \approx 87\%$.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Moving Charges and Magnetism": "moving-charges-magnetism",
  "Magnetic Effects of Current and Magnetism": "moving-charges-magnetism",
  "Magnetism and Matter": "magnetism-and-matter",
  "Electromagnetic Induction": "electromagnetic-induction",
  "Electromagnetic Induction and Alternating Currents": "electromagnetic-induction",
  "Alternating Current": "alternating-current",
};
