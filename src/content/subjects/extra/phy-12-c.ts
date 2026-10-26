import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Electromagnetic Induction (NCERT Ch 6; ISC: EMI and AC)             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-electromagnetic-induction",
    title: "Electromagnetic Induction",
    icon: "🧲",
    description: "Faraday's experiments, magnetic flux, Faraday's and Lenz's laws, motional emf, eddy currents, self and mutual inductance and the AC generator.",
    lessons: [
      {
        slug: "c12-emi-faraday-lenz",
        title: "Faraday's Experiments, Flux and Lenz's Law",
        summary: "How a changing magnetic flux drives a current, Faraday's law of induction, and how Lenz's law fixes the direction of the induced emf.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚲",
            caption: "A bicycle dynamo lights a lamp only while the wheel turns. A magnet spinning near a coil makes electricity: this is electromagnetic induction.",
          },
          {
            type: "text",
            md: t`Oersted showed that a current makes a magnetic field. In the 1830s **Michael Faraday** in England and **Joseph Henry** in the USA asked the reverse question: can a magnetic field make a current? Their answer was yes, but only when something is **changing**. The appearance of an emf and current in a circuit because of a changing magnetic field is called **electromagnetic induction**.

Their experiments used a coil connected to a **galvanometer** (a sensitive current meter). A steady magnet or a steady current nearby gave no deflection at all.`,
          },
          {
            type: "table",
            headers: ["Experiment", "What is seen", "What it shows"],
            rows: [
              ["Push the N-pole of a bar magnet into a coil, then pull it out", "Deflection one way, then the opposite way; none when the magnet is still", "Relative motion between magnet and coil induces a current"],
              ["Move the magnet faster", "Larger deflection", "The faster the change, the bigger the emf"],
              ["Coil C1 carrying a steady current is moved towards coil C2", "Current in C2 only while C1 moves", "The source of the field can be a current-carrying coil"],
              ["Two coils at rest; switch in C1 is pressed or released", "A brief kick in C2 at switch-on and the opposite kick at switch-off", "A changing current, with no motion at all, also induces an emf"],
              ["Soft iron rod placed along the axis of the coils", "Kick becomes much larger", "Iron increases the magnetic field linking the coils"],
            ],
          },
          {
            type: "text",
            md: t`The common factor is the **magnetic flux** through the coil. For a plane area $A$ in a uniform field $\vec{B}$,

$\Phi_B = \vec{B}\cdot\vec{A} = BA\cos\theta$

where $\theta$ is the angle between $\vec{B}$ and the **normal** to the area. Flux is a scalar. Its SI unit is the **weber** (Wb): 1 Wb = 1 T m². For a non-uniform field we add up $\vec{B}\cdot d\vec{A}$ over the surface.`,
          },
          {
            type: "formula",
            tex: t`\varepsilon = -N\,\frac{d\Phi_B}{dt}`,
            caption: "Faraday's law: the induced emf equals the rate of change of magnetic flux linkage. N is the number of turns; the minus sign is Lenz's law.",
          },
          {
            type: "list",
            items: [
              t`Flux can change in three ways, because $\Phi_B = BA\cos\theta$: change $B$ (move a magnet, change a current), change $A$ (stretch or slide part of the circuit), or change $\theta$ (rotate the coil).`,
              t`For a coil of $N$ closely wound turns the **flux linkage** is $N\Phi_B$.`,
              t`If the coil has resistance $R$, the induced current is $I = \varepsilon/R$ and the charge that flows is $Q = N\,\Delta\Phi_B/R$, which does not depend on how quickly the change happens.`,
            ],
          },
          {
            type: "example",
            title: "Emf, current and charge in a coil",
            problem: t`A coil of 50 turns and area $0.02\ \text{m}^2$ lies with its plane perpendicular to a uniform field. The field falls steadily from 0.4 T to 0.1 T in 0.05 s. The coil's resistance is 3 Ω. Find the induced emf, the current and the charge that flows.`,
            steps: [
              t`The field is along the normal, so $\theta = 0$ and $\Phi = BA$. Change in flux per turn: $\Delta\Phi = (0.4 - 0.1)\times 0.02 = 6\times10^{-3}\ \text{Wb}$.`,
              t`Emf: $|\varepsilon| = N\dfrac{\Delta\Phi}{\Delta t} = \dfrac{50 \times 6\times10^{-3}}{0.05} = 6\ \text{V}$.`,
              t`Current: $I = \varepsilon/R = 6/3 = 2\ \text{A}$.`,
              t`Charge: $Q = I\,\Delta t = 2 \times 0.05 = 0.1\ \text{C}$. Check with $Q = N\Delta\Phi/R = 50\times 6\times10^{-3}/3 = 0.1$ C.`,
            ],
            answer: "Emf 6 V, current 2 A, charge 0.1 C.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A single loop of area $0.05\ \text{m}^2$ is in a field of 0.2 T perpendicular to its plane. It is turned so its plane becomes parallel to the field in 0.1 s. What is the average emf (in V)?`,
                answer: 0.1,
                unit: "V",
                explain: t`Initial flux $= 0.2\times0.05 = 0.01$ Wb; final flux $= 0$ (normal is now perpendicular to $B$). $\varepsilon = 0.01/0.1 = 0.1$ V.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Lenz's law and conservation of energy",
          },
          {
            type: "text",
            md: t`**Lenz's law** (1834): the polarity of the induced emf is such that it tends to produce a current which **opposes the change in magnetic flux** that produced it.

When the N-pole of a magnet approaches a coil, the flux through it increases. The induced current makes the near face of the coil a **north pole**, which repels the magnet. When the magnet is pulled away, the near face becomes a **south pole** and attracts it. Either way, you must do work against a magnetic force. That work is what appears as electrical energy (and then heat) in the coil.

If the induced current helped the change instead, a tiny push would make the magnet speed up by itself and electrical energy would appear from nothing. That would break the **law of conservation of energy**. So Lenz's law is the energy law in disguise.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A magnet's N-pole is pushed towards a closed coil. What does the near face of the coil become?",
              emoji: "🧲",
              options: ["A north pole, so it pushes the magnet away", "A south pole, so it pulls the magnet in", "Neither: a coil cannot become a magnet"],
              answer: 0,
              trap: 1,
              explain: "The flux is increasing, so the induced current opposes it by making a north face that repels the incoming N-pole. If it attracted the magnet, energy would come from nowhere.",
            },
          },
          {
            type: "mistake",
            wrong: "The induced current always flows so that its field points opposite to the magnet's field.",
            right: "The induced current opposes the CHANGE in flux. If the flux is decreasing, the induced field points the SAME way as the original field, to try to keep the flux up.",
            why: "Students remember 'opposes' and attach it to the field. Lenz's law is about the change: when a magnet is pulled out, the coil attracts it, which means its field adds to the magnet's field inside the coil.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State Faraday's law in words and write $\varepsilon = -N\,d\Phi/dt$ for full marks. When asked "show that Lenz's law obeys conservation of energy", give the magnet-and-coil argument in three lines: direction of the induced pole, work done against it, energy converted. For direction questions, say which way the flux is changing first; marks are lost when the direction is given with no reason.`,
          },
          {
            type: "keypoints",
            items: [
              t`An emf is induced only when the magnetic flux linked with a circuit changes.`,
              t`$\Phi_B = BA\cos\theta$, unit weber (T m²), a scalar.`,
              t`Faraday: $\varepsilon = -N\,d\Phi_B/dt$. Charge through the circuit $Q = N\Delta\Phi/R$.`,
              "Lenz: the induced current opposes the change in flux that causes it. This follows from conservation of energy.",
            ],
          },
        ],
        flashcards: [
          { front: "Electromagnetic induction", back: "The production of an emf in a circuit when the magnetic flux linked with it changes." },
          { front: "Magnetic flux through a plane area", back: t`$\Phi_B = BA\cos\theta$, with $\theta$ between $\vec{B}$ and the normal to the area. Unit: weber, 1 Wb = 1 T m².` },
          { front: "Faraday's law", back: t`The induced emf equals the negative rate of change of flux linkage: $\varepsilon = -N\,d\Phi_B/dt$.` },
          { front: "Lenz's law", back: "The induced current flows in a direction that opposes the change in flux that produced it." },
          { front: "Why does Lenz's law agree with conservation of energy?", back: "Work must be done against the opposing magnetic force; this work becomes the electrical energy of the induced current." },
          { front: "Charge flowing due to a flux change", back: t`$Q = N\,\Delta\Phi/R$; it depends on the total flux change, not on the time taken.` },
          { front: "Three ways to change flux", back: t`Change $B$, change the area $A$, or change the angle $\theta$ between $\vec{B}$ and the normal.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In which case is NO current induced in a closed coil?",
            options: ["A magnet is held at rest inside the coil", "A magnet is pulled out of the coil", "The coil is rotated in a steady field", "The current in a nearby coil is switched off"],
            answer: 0,
            explain: "With the magnet at rest the flux is constant, so there is no induced emf. All the other cases change the flux.",
          },
          {
            kind: "mcq",
            q: "The SI unit of magnetic flux is:",
            options: ["tesla", "weber", "henry", "gauss"],
            answer: 1,
            explain: "1 weber = 1 tesla × 1 m². Tesla is the unit of B, henry of inductance, gauss a non-SI unit of B.",
          },
          {
            kind: "numeric",
            q: t`A coil of 200 turns has flux $\Phi = (4t^2 + 2t)\times10^{-3}$ Wb through each turn, with $t$ in seconds. What is the magnitude of the emf (in V) at $t = 2$ s?`,
            answer: 3.6,
            unit: "V",
            explain: t`$d\Phi/dt = (8t + 2)\times10^{-3} = 18\times10^{-3}$ Wb/s at $t = 2$ s. $|\varepsilon| = 200 \times 0.018 = 3.6$ V.`,
            difficulty: 2,
            hint: "Differentiate the flux, then multiply by N.",
          },
          {
            kind: "truefalse",
            q: "When the S-pole of a magnet is moved away from a coil, the near face of the coil behaves as a north pole.",
            answer: true,
            explain: "Moving the S-pole away reduces the flux; the coil attracts it to oppose the change, so the near face becomes a north pole (N attracts S).",
          },
          {
            kind: "mcq",
            q: "Lenz's law is a consequence of the conservation of:",
            options: ["charge", "momentum", "energy", "mass"],
            answer: 2,
            explain: "If the induced current aided the change, energy would be created from nothing. Opposition means work must be done, keeping energy conserved.",
          },
          {
            kind: "numeric",
            q: t`A 100-turn coil of resistance 5 Ω has its flux per turn changed by $2\times10^{-3}$ Wb. How much charge (in mC) flows?`,
            answer: 40,
            unit: "mC",
            explain: t`$Q = N\Delta\Phi/R = 100 \times 2\times10^{-3}/5 = 0.04$ C = 40 mC.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these change the magnetic flux through a loop in a uniform field? Choose all that apply.",
            options: ["Rotating the loop about a diameter", "Shrinking the loop's area", "Moving the loop sideways without rotating, staying inside the uniform field", "Increasing the field strength"],
            answers: [0, 1, 3],
            explain: t`$\Phi = BA\cos\theta$: rotation changes $\theta$, shrinking changes $A$, and a stronger field changes $B$. Sliding inside a uniform field changes none of them.`,
          },
        ],
      },
      {
        slug: "c12-emi-motional-eddy",
        title: "Motional EMF and Eddy Currents",
        summary: "The emf across a conductor moving through a magnetic field, its energy balance, the rotating rod, and eddy currents with their uses.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`Picture two long parallel metal rails joined at one end, lying in a uniform magnetic field $B$ that points into the page. A straight rod PQ of length $l$ rests across the rails and is pulled with speed $v$. The rod, the rails and the joining end form a closed rectangle whose length $x$ grows as the rod moves. The emf that appears because a conductor moves through a field is called **motional emf**.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Let $x$ be the distance of the rod from the closed end. The area of the loop is $lx$, so the flux is $\Phi_B = Blx$.`,
              t`As the rod moves, $x$ changes at the rate $dx/dt = -v$ (taking the rod moving towards the closed end) or $+v$ (moving away).`,
              t`Faraday's law: $\varepsilon = -\dfrac{d\Phi_B}{dt} = -Bl\dfrac{dx}{dt}$.`,
              t`So the size of the emf is $\varepsilon = Blv$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\varepsilon = Blv`,
            caption: "Valid when B, the rod and its velocity are mutually perpendicular. The moving rod acts like a cell of emf Blv.",
          },
          {
            type: "text",
            md: t`**Why it happens (Lorentz force view).** Each free charge $q$ in the rod moves with the rod at speed $v$, so it feels a magnetic force $qvB$ along the rod. Charges are pushed to one end. The work done in moving a charge along the rod is $qvB \times l$, so the work per unit charge, the emf, is $vBl$. The rod behaves like a battery whose emf is produced by motion.

Once a current $I = Blv/R$ flows, the field pushes back on the rod with force $F = BIl = \dfrac{B^2l^2v}{R}$, opposing the motion (Lenz again). To keep $v$ steady, you must supply power $P = Fv = \dfrac{B^2l^2v^2}{R}$, which is exactly the heat produced, $I^2R$. Mechanical energy becomes electrical energy and then heat.`,
          },
          {
            type: "example",
            title: "Rod on rails",
            problem: "A 0.5 m rod moves at 4 m/s on smooth rails in a 0.2 T field perpendicular to the plane. The circuit resistance is 2 Ω. Find the emf, the current, the force needed to keep the speed constant, and the power delivered.",
            steps: [
              t`$\varepsilon = Blv = 0.2 \times 0.5 \times 4 = 0.4$ V.`,
              t`$I = \varepsilon/R = 0.4/2 = 0.2$ A.`,
              t`Retarding force $F = BIl = 0.2 \times 0.2 \times 0.5 = 0.02$ N; the pull must equal this.`,
              t`Power $= Fv = 0.02 \times 4 = 0.08$ W. Check: $I^2R = 0.04 \times 2 = 0.08$ W.`,
            ],
            answer: "0.4 V, 0.2 A, 0.02 N, 0.08 W.",
          },
          {
            type: "example",
            title: "Rotating rod",
            problem: t`A metal rod of length 0.8 m rotates at $\omega = 50$ rad/s about one end, in a plane perpendicular to a uniform 0.5 T field. Find the emf between its ends.`,
            steps: [
              t`A small piece $dr$ at distance $r$ from the pivot moves with speed $\omega r$, so its emf is $B(\omega r)\,dr$.`,
              t`Add up along the rod: $\varepsilon = \int_0^l B\omega r\,dr = \tfrac{1}{2}B\omega l^2$.`,
              t`$\varepsilon = \tfrac12 \times 0.5 \times 50 \times 0.8^2 = 8$ V.`,
            ],
            answer: "8 V between the pivot and the free end.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A straight rod moves parallel to its own length through a uniform magnetic field perpendicular to the rod. The emf across it is:",
                options: [t`$Blv$`, t`$\tfrac12 Blv$`, "zero", t`$2Blv$`],
                answer: 2,
                explain: "The magnetic force qvB on each charge is now perpendicular to the rod, so no charge is pushed along it and no emf appears across the ends. The rod also sweeps out no area.",
              },
            ],
          },
          {
            type: "heading",
            text: "Eddy currents",
          },
          {
            type: "text",
            md: t`Induced currents are not limited to wires. When a bulk piece of metal moves through a field, or sits in a changing field, circulating currents swirl inside it like eddies in water. These **eddy currents** (studied by Foucault) oppose the change, so they damp motion and produce heat.

A copper plate swinging as a pendulum between magnet poles stops quickly. If slots are cut in the plate, the paths for eddy currents shrink and the plate swings much longer. In the same way, transformer and motor cores are made of thin **laminations** insulated from each other to cut eddy-current heating.

**Board note:** the rationalised CBSE NCERT book has dropped the eddy currents section, but ISC still lists it and many state and entrance syllabi expect it. Check your board's current syllabus.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does the device use eddy currents or try to reduce them?",
              groups: ["Uses eddy currents", "Reduces eddy currents"],
              items: [
                { text: "Electromagnetic brakes in some trains", group: 0, hint: "Eddy currents in the wheel or rail oppose motion and slow the train." },
                { text: "Laminated iron core of a transformer", group: 1, hint: "Thin insulated sheets break up the eddy current paths." },
                { text: "Induction furnace melting metal", group: 0, hint: "Huge eddy currents heat the metal." },
                { text: "Slots cut in a swinging copper plate", group: 1, hint: "The slots stop the currents circling inside the plate." },
                { text: "Electromagnetic damping of a galvanometer coil", group: 0, hint: "Currents in the metal former make the needle settle quickly." },
                { text: "Electric power meter with a rotating aluminium disc", group: 0, hint: "The disc turns because of eddy currents induced in it." },
              ],
              explain: "Eddy currents oppose motion and make heat. Brakes, damping, furnaces and older energy meters use them; transformer cores are laminated to keep them small.",
            },
          },
          {
            type: "mistake",
            wrong: t`A rod moving in a magnetic field always has an emf $Blv$ across it.`,
            right: t`$\varepsilon = Blv$ only when $\vec{B}$, the rod and $\vec{v}$ are mutually perpendicular. In general use the component of velocity perpendicular to both the rod and $\vec{B}$; a rod moving along its length, or along $\vec{B}$, has no emf.`,
            why: "The textbook derivation uses the perpendicular set-up, so the formula is used without checking angles. The real rule is emf = (v × B) · l, which can be zero.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The derivation of $\varepsilon = Blv$ from Faraday's law is a common 2- or 3-mark question: draw the rails and rod, write $\Phi = Blx$, differentiate, and state the direction using Lenz's law or Fleming's right-hand rule. ISC also asks for the Lorentz-force derivation and for $\tfrac12 B\omega l^2$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Motional emf: $\varepsilon = Blv$ (B, l and v mutually perpendicular).`,
              t`It comes from the magnetic force $qvB$ on charges in the moving conductor.`,
              t`Retarding force $B^2l^2v/R$; mechanical power $B^2l^2v^2/R$ becomes heat $I^2R$.`,
              t`Rod rotating about one end: $\varepsilon = \tfrac12 B\omega l^2$.`,
              "Eddy currents in bulk metal cause damping and heating; lamination reduces them.",
            ],
          },
        ],
        flashcards: [
          { front: "Motional emf", back: t`The emf across a conductor moving in a magnetic field: $\varepsilon = Blv$ for perpendicular B, l and v.` },
          { front: "Origin of motional emf", back: t`The Lorentz force $qvB$ on free charges pushes them along the conductor.` },
          { front: "Force needed to keep a rod moving at constant speed on rails", back: t`$F = B^2l^2v/R$, equal and opposite to the magnetic retarding force.` },
          { front: "Emf of a rod rotating about one end", back: t`$\varepsilon = \tfrac12 B\omega l^2$.` },
          { front: "Eddy currents", back: "Circulating induced currents in a bulk conductor in a changing flux; they cause heating and damping." },
          { front: "How are eddy currents reduced in a transformer?", back: "By using a laminated core: thin iron sheets insulated from each other." },
          { front: "Fleming's right-hand rule", back: "Thumb = motion of conductor, first finger = field, central finger = induced current." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 1.2 m long axle of a truck moves at 20 m/s where the vertical component of the Earth's field is 4 × 10⁻⁵ T. What emf (in mV) appears between its ends?",
            answer: 0.96,
            unit: "mV",
            explain: t`$\varepsilon = Blv = 4\times10^{-5}\times1.2\times20 = 9.6\times10^{-4}$ V = 0.96 mV.`,
          },
          {
            kind: "mcq",
            q: "A rod is pulled at constant speed along rails in a magnetic field. If the speed is doubled, the power needed:",
            options: ["stays the same", "doubles", "becomes four times", "halves"],
            answer: 2,
            explain: t`$P = B^2l^2v^2/R$, so doubling $v$ makes $P$ four times as large.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 0.5 m rod spins about one end at 40 rad/s in a plane perpendicular to a 0.2 T field. Emf between its ends (in V)?",
            answer: 1,
            unit: "V",
            explain: t`$\varepsilon = \tfrac12 B\omega l^2 = 0.5\times0.2\times40\times0.25 = 1$ V.`,
          },
          {
            kind: "truefalse",
            q: "Cutting slots in a metal plate swinging between magnet poles makes it stop sooner.",
            answer: false,
            explain: "Slots break the paths of eddy currents, so damping falls and the plate swings for longer.",
          },
          {
            kind: "mcq",
            q: "Transformer cores are laminated mainly to reduce:",
            options: ["copper loss", "eddy current loss", "flux leakage", "the turns ratio"],
            answer: 1,
            explain: "Thin insulated sheets give eddy currents only short, high-resistance paths, cutting heating in the core.",
          },
          {
            kind: "mcq",
            q: "In the rod-on-rails set-up, which energy change takes place while the rod is pulled at steady speed?",
            options: ["Electrical → mechanical", "Mechanical → electrical → heat", "Heat → mechanical", "No energy change"],
            answer: 1,
            explain: "Work done by the pulling force becomes electrical energy of the current, which is dissipated as heat in the resistance.",
          },
          {
            kind: "numeric",
            q: "A rod of length 0.25 m moves at 6 m/s perpendicular to a 0.8 T field and to itself. It is connected to a 0.6 Ω resistor (rod and rails have no resistance). Current (in A)?",
            answer: 2,
            unit: "A",
            explain: t`$\varepsilon = 0.8\times0.25\times6 = 1.2$ V; $I = 1.2/0.6 = 2$ A.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-emi-inductance-generator",
        title: "Inductance and the AC Generator",
        summary: "Mutual and self-inductance of solenoids, the energy stored in an inductor, and how a rotating coil generates a sinusoidal emf.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`A current in a coil sets up flux, and in the absence of magnetic materials the flux linkage is proportional to the current. The constant of proportionality is called **inductance**. It depends only on the shape and size of the coils and the material around them. Inductance is a scalar; its SI unit is the **henry** (H): 1 H = 1 Wb/A = 1 V s/A.`,
          },
          {
            type: "text",
            md: t`**Mutual inductance.** Two coils sit near each other. A current $I_2$ in coil 2 gives a flux linkage $N_1\Phi_1$ in coil 1, with $N_1\Phi_1 = M_{12}I_2$. If $I_2$ changes, coil 1 gets an emf

$\varepsilon_1 = -M_{12}\dfrac{dI_2}{dt}$

$M_{12}$ is the mutual inductance of coil 1 with respect to coil 2. It can be shown that $M_{12} = M_{21} = M$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Take two long coaxial solenoids of length $l$: inner S1 (radius $r_1$, $n_1$ turns per unit length) and outer S2 (radius $r_2$, $n_2$ turns per unit length).`,
              t`A current $I_2$ in S2 gives a uniform field inside it: $B_2 = \mu_0 n_2 I_2$.`,
              t`This field passes through the cross-section $\pi r_1^2$ of S1, which has $n_1 l$ turns. Flux linkage: $N_1\Phi_1 = (n_1 l)(\pi r_1^2)(\mu_0 n_2 I_2)$.`,
              t`So $M_{12} = \mu_0 n_1 n_2 \pi r_1^2 l$. Repeating with a current in S1 (whose field exists only inside S1) gives the same $M_{21}$.`,
              t`With a material of relative permeability $\mu_r$ filling the solenoids, $M = \mu_r\mu_0 n_1 n_2 \pi r_1^2 l$.`,
            ],
          },
          {
            type: "formula",
            tex: t`M = \mu_0 n_1 n_2 \pi r_1^2\, l \qquad\qquad L = \mu_0 n^2 A\, l`,
            caption: "Mutual inductance of two long coaxial solenoids, and self-inductance of a long solenoid of cross-section A and length l (air core).",
          },
          {
            type: "text",
            md: t`**Self-inductance.** A single coil links its own flux: $N\Phi = LI$. When its current changes, an emf is induced in the same coil, $\varepsilon = -L\,dI/dt$. By Lenz's law it opposes the change in current, so it is called the **back emf**. Inductance is the electrical version of inertia: it resists changes in current, just as mass resists changes in velocity.

For a long solenoid with $n$ turns per unit length, $B = \mu_0 nI$ and $N\Phi = (nl)(\mu_0 nI)A$, giving $L = \mu_0 n^2 A l$ (or $\mu_r\mu_0 n^2Al$ with a core).

**Energy stored.** To build up the current, the source does work against the back emf: $dW = |\varepsilon|\,I\,dt = L I\,dI$. Integrating from 0 to $I$:`,
          },
          {
            type: "formula",
            tex: t`W = \int_0^I L I\,dI = \tfrac12 L I^2`,
            caption: "Energy stored in the magnetic field of an inductor, like ½mv² for a moving mass.",
          },
          {
            type: "example",
            title: "Inductance of a solenoid",
            problem: t`A solenoid 0.5 m long has 500 turns and cross-section $4\times10^{-4}\ \text{m}^2$ (air core). Find its inductance, the average back emf when a 2 A current is switched off in 0.01 s, and the energy stored at 2 A. Use $\mu_0 = 4\pi\times10^{-7}$ T m/A.`,
            steps: [
              t`$n = 500/0.5 = 1000\ \text{m}^{-1}$.`,
              t`$L = \mu_0 n^2 A l = 4\pi\times10^{-7}\times10^6\times4\times10^{-4}\times0.5 = 8\pi\times10^{-5} \approx 2.51\times10^{-4}$ H.`,
              t`Back emf $= L\,\Delta I/\Delta t = 2.51\times10^{-4}\times 2/0.01 \approx 0.050$ V.`,
              t`Energy $= \tfrac12 LI^2 = \tfrac12\times2.51\times10^{-4}\times4 \approx 5.0\times10^{-4}$ J.`,
            ],
            answer: "L ≈ 0.25 mH, back emf ≈ 50 mV, energy ≈ 0.50 mJ.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The number of turns per unit length of a long solenoid is doubled, keeping its length and area fixed. Its self-inductance becomes:",
                options: ["2 times", "4 times", "half", "unchanged"],
                answer: 1,
                explain: t`$L = \mu_0 n^2 A l$ depends on $n^2$, so doubling $n$ makes $L$ four times larger.`,
              },
            ],
          },
          {
            type: "heading",
            text: "The AC generator",
          },
          {
            type: "text",
            md: t`An **AC generator** turns mechanical energy into electrical energy. A coil (the **armature**) of $N$ turns and area $A$ is rotated at a steady angular speed $\omega$ in a uniform field $B$. Its ends connect to **slip rings**, and carbon **brushes** pressing on the rings take the current to the outside circuit.

If the normal to the coil is along $\vec{B}$ at $t = 0$, the angle at time $t$ is $\theta = \omega t$ and $\Phi_B = BA\cos\omega t$. Then

$\varepsilon = -N\dfrac{d\Phi_B}{dt} = NBA\omega\sin\omega t$

The emf is largest ($\varepsilon_0 = NBA\omega$) when the plane of the coil is **parallel** to $\vec{B}$, where flux is zero but changing fastest. Its direction reverses every half turn. In India the mains frequency is 50 Hz; turbines in hydro and thermal power stations turn the generators.`,
          },
          {
            type: "formula",
            tex: t`\varepsilon = \varepsilon_0\sin\omega t, \qquad \varepsilon_0 = NBA\omega = NBA(2\pi\nu)`,
          },
          {
            type: "example",
            title: "Peak emf of a generator",
            problem: t`A generator coil has 100 turns, each of area $0.05\ \text{m}^2$, and spins at 50 revolutions per second in a 0.2 T field. Find the peak emf.`,
            steps: [
              t`$\omega = 2\pi\nu = 2\pi\times50 \approx 314.2$ rad/s.`,
              t`$\varepsilon_0 = NBA\omega = 100\times0.2\times0.05\times314.2 \approx 314$ V.`,
            ],
            answer: "Peak emf ≈ 314 V.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the AC generator emf derivation in order.",
              items: [
                t`Angle between normal and field: $\theta = \omega t$`,
                t`Flux per turn: $\Phi_B = BA\cos\omega t$`,
                t`Apply Faraday's law: $\varepsilon = -N\,d\Phi_B/dt$`,
                t`Result: $\varepsilon = NBA\omega\sin\omega t$`,
                t`Peak emf $NBA\omega$ when the coil's plane is parallel to the field`,
              ],
              explain: "Write the angle, then the flux, differentiate with Faraday's law, and read off the peak value.",
            },
          },
          {
            type: "mistake",
            wrong: "The emf of a rotating coil is greatest when the flux through it is greatest (plane of coil perpendicular to the field).",
            right: "The emf is greatest when the flux is ZERO (plane of coil parallel to B), because that is where the flux changes fastest. When the flux is maximum the emf is zero.",
            why: t`Emf depends on $d\Phi/dt$, not on $\Phi$. Flux $\propto \cos\omega t$ while emf $\propto \sin\omega t$, so one is largest when the other is zero.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Derivations often asked: mutual inductance of two coaxial solenoids, self-inductance of a solenoid, energy $\tfrac12LI^2$, and the generator emf with a labelled diagram (armature, field magnets, slip rings, brushes). Always state the assumption "long solenoid, field uniform inside and zero outside".`,
          },
          {
            type: "keypoints",
            items: [
              t`Mutual inductance: $N_1\Phi_1 = MI_2$, $\varepsilon_1 = -M\,dI_2/dt$; for coaxial solenoids $M = \mu_0n_1n_2\pi r_1^2 l$.`,
              t`Self-inductance: $N\Phi = LI$, back emf $-L\,dI/dt$; solenoid $L = \mu_0n^2Al$.`,
              t`Energy in an inductor: $\tfrac12 LI^2$. Unit of inductance: henry.`,
              t`AC generator: $\varepsilon = NBA\omega\sin\omega t$, peak $NBA\omega$ when the coil's plane is parallel to B.`,
            ],
          },
        ],
        flashcards: [
          { front: "Unit of inductance", back: "Henry (H): 1 H = 1 Wb/A = 1 V s/A." },
          { front: "Mutual inductance of two coaxial solenoids", back: t`$M = \mu_0 n_1 n_2 \pi r_1^2 l$, using the radius of the INNER solenoid.` },
          { front: "Self-inductance of a long solenoid", back: t`$L = \mu_0 n^2 A l = \mu_0 N^2 A/l$.` },
          { front: "Energy stored in an inductor", back: t`$U = \tfrac12 LI^2$, stored in its magnetic field.` },
          { front: "Back emf", back: "The self-induced emf in a coil that opposes the change in its own current." },
          { front: "Peak emf of an AC generator", back: t`$\varepsilon_0 = NBA\omega$.` },
          { front: "Why is inductance called electrical inertia?", back: "It opposes any change in current, just as mass opposes any change in velocity." },
          { front: "Job of slip rings and brushes", back: "They keep the rotating coil connected to the external circuit without twisting the wires." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "When a soft iron core is put inside a solenoid, its self-inductance:",
            options: ["decreases", "increases greatly", "stays the same", "becomes zero"],
            answer: 1,
            explain: t`$L = \mu_r\mu_0n^2Al$; soft iron has a very large $\mu_r$, so L rises sharply.`,
          },
          {
            kind: "numeric",
            q: "A current through a 0.3 H inductor changes from 5 A to 1 A in 0.2 s. Magnitude of the average induced emf (in V)?",
            answer: 6,
            unit: "V",
            explain: t`$\varepsilon = L\,\Delta I/\Delta t = 0.3\times4/0.2 = 6$ V.`,
          },
          {
            kind: "numeric",
            q: "How much energy (in J) is stored in a 40 mH inductor carrying 5 A?",
            answer: 0.5,
            unit: "J",
            explain: t`$U = \tfrac12 LI^2 = \tfrac12\times0.04\times25 = 0.5$ J.`,
          },
          {
            kind: "mcq",
            q: "A coil rotates in a uniform field. At the instant its plane is perpendicular to the field, the emf is:",
            options: ["maximum", "zero", "half the maximum", t`$1/\sqrt2$ of the maximum`],
            answer: 1,
            explain: "Plane perpendicular to B means flux is maximum and momentarily not changing, so emf is zero.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`An AC generator with 50 turns of area $0.1\ \text{m}^2$ turns at 60 rad/s in a 0.5 T field. Peak emf (in V)?`,
            answer: 150,
            unit: "V",
            explain: t`$\varepsilon_0 = NBA\omega = 50\times0.5\times0.1\times60 = 150$ V.`,
          },
          {
            kind: "truefalse",
            q: "For two coils, the mutual inductance of coil 1 due to coil 2 equals that of coil 2 due to coil 1.",
            answer: true,
            explain: t`$M_{12} = M_{21}$; for coaxial solenoids both equal $\mu_0n_1n_2\pi r_1^2l$.`,
          },
          {
            kind: "mcq",
            q: "If the speed of rotation of a generator coil is doubled, the peak emf and the frequency become:",
            options: ["both unchanged", "emf doubles, frequency unchanged", "both double", "emf four times, frequency doubles"],
            answer: 2,
            explain: t`$\varepsilon_0 = NBA\omega$ and $\nu = \omega/2\pi$, so both are proportional to $\omega$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-emi-exam-edge",
        title: "Exam edge: Induction for JEE, NEET and CETs",
        summary: "What entrance exams ask from electromagnetic induction, the shortcuts that save time, LR circuits, and problems from KCET level up to JEE Advanced.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Electromagnetic induction is a high-scoring chapter in every entrance exam. KCET, COMEDK and NEET mostly test the laws directly: flux calculations, Lenz's law directions, $Blv$, $\tfrac12LI^2$ and the generator formula. JEE Main adds LR circuits and combined mechanics problems. JEE Advanced builds multi-step problems: rods with mass on rails, loops entering fields, induced electric fields from changing B.`,
          },
          {
            type: "table",
            headers: ["Exam", "Typical questions"],
            rows: [
              ["KCET / COMEDK", "Flux and emf from given data, charge Q = NΔΦ/R, Lenz's direction, L of a solenoid, energy ½LI²"],
              ["NEET", "Motional emf (straight, bent and rotating rods), generator peak emf, self/mutual inductance ratios, eddy currents"],
              ["JEE Main", "LR growth and decay, emf graphs for a loop crossing a field, rods with resistance, coupling of coils"],
              ["JEE Advanced", "Rod with mass on rails (velocity vs time), induced electric field, energy methods, multiple loops"],
            ],
          },
          {
            type: "list",
            items: [
              t`**Charge, not current:** $Q = N\Delta\Phi/R$ needs only the start and end flux. Safe whenever the only emf in the loop is the induced one.`,
              t`**Bent or curved conductor:** the motional emf equals $B v\, l_{\text{eff}}$, where $l_{\text{eff}}$ is the straight-line distance between the ends, measured perpendicular to $\vec{v}$. Safe in a uniform field.`,
              t`**Rotating rod / disc:** $\tfrac12 B\omega l^2$ for a rod about one end; $\tfrac12 B\omega R^2$ between centre and rim of a disc (Faraday disc).`,
              t`**Induced electric field:** a changing B makes a non-conservative E with $\oint \vec{E}\cdot d\vec{l} = -d\Phi_B/dt$. Inside a long solenoid at distance $r$ from the axis, $E = \tfrac{r}{2}\,\tfrac{dB}{dt}$.`,
              t`**LR circuit:** time constant $\tau = L/R$; at switch-on an inductor acts like an open circuit, after a long time like a plain wire.`,
              t`**Coupling:** $M = k\sqrt{L_1L_2}$ with $0 \le k \le 1$. Inductors in series (no mutual coupling) add like resistors.`,
            ],
          },
          {
            type: "formula",
            tex: t`I(t) = \frac{E}{R}\left(1 - e^{-tR/L}\right) \qquad I(t) = I_0\, e^{-tR/L}`,
            caption: "Growth of current after switching on a battery E across an LR series circuit, and decay when the battery is removed and the circuit is closed on itself. τ = L/R.",
          },
          {
            type: "example",
            title: "KCET level: a flipped coil",
            problem: t`A 200-turn coil of area $0.01\ \text{m}^2$ and resistance 10 Ω has its normal along a 0.5 T field. It is turned through 180°. How much charge flows?`,
            steps: [
              t`Initial flux per turn $= +BA = 0.005$ Wb; after turning, $-0.005$ Wb.`,
              t`$\Delta\Phi = 2BA = 0.01$ Wb per turn.`,
              t`$Q = N\Delta\Phi/R = 200\times0.01/10 = 0.2$ C.`,
            ],
            answer: "0.2 C, whatever the speed of turning.",
          },
          {
            type: "example",
            title: "NEET level: a semicircular wire",
            problem: "A semicircular wire of radius 10 cm moves at 5 m/s, perpendicular to the line joining its ends, in a uniform 0.4 T field perpendicular to its plane. Find the emf between its ends.",
            steps: [
              t`The effective length is the straight line joining the ends, the diameter: $l_{\text{eff}} = 2r = 0.2$ m, and it is perpendicular to $\vec{v}$.`,
              t`$\varepsilon = Bvl_{\text{eff}} = 0.4\times5\times0.2 = 0.4$ V.`,
            ],
            answer: "0.4 V, the same as for a straight 0.2 m rod.",
          },
          {
            type: "example",
            title: "JEE Main level: LR growth",
            problem: "A 2 H inductor and a 4 Ω resistor are connected in series to a 12 V battery at t = 0. Find the time constant, the final current, the time for the current to reach half its final value, and the final energy stored.",
            steps: [
              t`$\tau = L/R = 2/4 = 0.5$ s; final current $I_0 = E/R = 3$ A.`,
              t`Half value: $1 - e^{-t/\tau} = \tfrac12$, so $t = \tau\ln2 = 0.5\times0.693 \approx 0.35$ s.`,
              t`Final energy $= \tfrac12 LI_0^2 = \tfrac12\times2\times9 = 9$ J.`,
            ],
            answer: "τ = 0.5 s, 3 A, about 0.35 s, 9 J.",
          },
          {
            type: "example",
            title: "JEE Advanced level: a rod coasting on rails",
            problem: t`A rod of mass 0.1 kg and length 0.4 m slides without friction on horizontal rails joined by a 0.5 Ω resistor, in a vertical 0.5 T field. It is given a speed of 2 m/s and left. Find $v(t)$, the total distance it travels, and the total heat produced.`,
            steps: [
              t`At speed $v$, the current is $Blv/R$ and the retarding force is $B^2l^2v/R$. Newton's law: $m\,\dfrac{dv}{dt} = -\dfrac{B^2l^2}{R}v$.`,
              t`So $v = v_0 e^{-t/\tau}$ with $\tau = \dfrac{mR}{B^2l^2}$. Here $B^2l^2 = 0.25\times0.16 = 0.04$, so $\tau = 0.1\times0.5/0.04 = 1.25$ s.`,
              t`Distance $= \int_0^\infty v\,dt = v_0\tau = 2\times1.25 = 2.5$ m. (Shortcut: $m\,dv = -\tfrac{B^2l^2}{R}\,dx$ gives $x = mv_0R/(B^2l^2)$ directly.)`,
              t`All kinetic energy becomes heat: $\tfrac12 mv_0^2 = \tfrac12\times0.1\times4 = 0.2$ J.`,
            ],
            answer: t`$v = 2e^{-0.8t}$ m/s; it stops after 2.5 m in total; 0.2 J of heat.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In an LR circuit with L = 0.6 H and R = 3 Ω, what is the time constant in seconds?",
                answer: 0.2,
                unit: "s",
                explain: t`$\tau = L/R = 0.6/3 = 0.2$ s.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "At the instant the switch is closed, an inductor lets the full current E/R flow straight away.",
            right: "The current through an inductor cannot jump. Just after switch-on it is zero (the inductor acts like an open circuit); after a long time it is E/R (the inductor acts like a plain wire).",
            why: t`A sudden jump would need $dI/dt$ to be infinite, which would need an infinite back emf. Exams use this to set "just after" and "long after" questions on circuits with inductors in branches.`,
          },
          {
            type: "mistake",
            wrong: "A square loop moving at constant speed has an induced current all the time it is inside a uniform field region.",
            right: "Current flows only while the loop is entering or leaving the field. Fully inside a uniform field, the flux is constant and the current is zero.",
            why: "Both sides of the loop then cut field lines and their emfs cancel around the loop. Emf–time graphs for a loop crossing a field are pulses during entry and exit, of opposite signs.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each set-up to the emf formula.",
              pairs: [
                ["Straight rod sliding on rails", t`$Blv$`],
                ["Rod spinning about one end", t`$\tfrac12 B\omega l^2$`],
                ["Coil spinning in a field", t`$NBA\omega\sin\omega t$`],
                ["Coil with changing current in itself", t`$-L\,dI/dt$`],
                ["Coil near another coil with changing current", t`$-M\,dI/dt$`],
              ],
              explain: "Every one comes from Faraday's law; the formulas are just the flux change worked out for each geometry.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "When shortcuts fail",
            md: t`$Q = N\Delta\Phi/R$ fails if the loop also has a battery. $l_{\text{eff}}$ fails in a non-uniform field (for a rod near a long wire you must integrate $B(r)\,v\,dr$). $Blv$ fails if the rod is not perpendicular to B or v; take components first.`,
          },
          {
            type: "keypoints",
            items: [
              t`Charge through a loop: $N\Delta\Phi/R$; independent of time.`,
              t`Curved conductor in uniform B: use the straight length between its ends perpendicular to v.`,
              t`LR: $\tau = L/R$; current grows as $1 - e^{-t/\tau}$; inductor current never jumps.`,
              t`Rod coasting on rails: $v = v_0e^{-t/\tau}$, $\tau = mR/B^2l^2$; stopping distance $mv_0R/B^2l^2$.`,
              t`Changing B makes an induced, non-conservative electric field.`,
            ],
          },
        ],
        flashcards: [
          { front: "Time constant of an LR circuit", back: t`$\tau = L/R$: time for the current to reach about 63% of its final value.` },
          { front: "Inductor just after switch-on / long after", back: "Just after: open circuit (zero current). Long after: short circuit (acts like a wire)." },
          { front: "Emf of a curved wire moving in uniform B", back: t`$Bvl_{\text{eff}}$, with $l_{\text{eff}}$ the straight distance between its ends, perpendicular to v.` },
          { front: "Emf of a Faraday disc of radius R", back: t`$\tfrac12 B\omega R^2$ between the centre and the rim.` },
          { front: "Coefficient of coupling", back: t`$k = M/\sqrt{L_1L_2}$, between 0 and 1.` },
          { front: "Induced electric field inside a solenoid", back: t`$E = \tfrac{r}{2}\,\tfrac{dB}{dt}$ at distance $r$ from the axis; its field lines are closed circles.` },
          { front: "Stopping distance of a rod coasting on rails", back: t`$x = mv_0R/(B^2l^2)$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A bar magnet is dropped vertically through a fixed horizontal copper ring. Compared with free fall, its acceleration while passing near the ring is:",
            options: ["greater than g", "equal to g", "less than g", "zero throughout"],
            answer: 2,
            explain: "Induced currents in the ring oppose the change in flux, giving an upward force on the magnet both while approaching and while leaving. So a < g.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 3 H inductor and a 6 Ω resistor are connected to a 24 V battery. What is the current (in A) after one time constant? Take e⁻¹ = 0.37.",
            answer: 2.52,
            tolerance: 0.03,
            unit: "A",
            explain: t`$I_0 = 24/6 = 4$ A. At $t = \tau$: $I = 4(1 - 0.37) = 2.52$ A.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A copper disc of radius 0.2 m spins at 100 rad/s about its axis, which is parallel to a uniform 0.5 T field. Emf between centre and rim (in V)?",
            answer: 1,
            unit: "V",
            explain: t`$\varepsilon = \tfrac12 B\omega R^2 = 0.5\times0.5\times100\times0.04 = 1$ V.`,
          },
          {
            kind: "multi",
            q: "A square loop moves at constant velocity from outside into, through, and out of a region of uniform field wider than the loop. Which statements are true?",
            options: ["Current flows while the loop enters the field", "Current flows while the loop is fully inside the field", "The current while leaving is opposite to that while entering", "An external force is needed to keep the velocity constant while entering"],
            answers: [0, 2, 3],
            explain: "Flux changes only during entry and exit, with opposite signs, so the currents are opposite. While current flows, a magnetic force opposes motion, so a pulling force is needed. Fully inside, flux is constant.",
            difficulty: 2,
            hint: "Ask when the flux through the loop is changing.",
          },
          {
            kind: "numeric",
            q: "Two coils have self-inductances 8 mH and 2 mH, and coupling coefficient 0.5. Their mutual inductance (in mH)?",
            answer: 2,
            unit: "mH",
            explain: t`$M = k\sqrt{L_1L_2} = 0.5\sqrt{16} = 2$ mH.`,
          },
          {
            kind: "numeric",
            q: "A rod of mass 0.2 kg and length 0.5 m slides on frictionless horizontal rails connected by a 1 Ω resistor in a vertical 1 T field. Starting at 3 m/s, how far (in m) does it go before stopping?",
            answer: 2.4,
            unit: "m",
            explain: t`$x = mv_0R/(B^2l^2) = 0.2\times3\times1/(1\times0.25) = 2.4$ m.`,
            difficulty: 3,
            hint: t`Write $m\,dv = -(B^2l^2/R)\,dx$ and integrate.`,
          },
          {
            kind: "mcq",
            q: t`The magnetic field inside a long solenoid of radius 0.1 m increases at 0.4 T/s. The induced electric field at 5 cm from the axis is:`,
            options: ["0.01 V/m", "0.02 V/m", "0.04 V/m", "zero, because there are no charges"],
            answer: 0,
            explain: t`$E\cdot 2\pi r = \pi r^2\,dB/dt$, so $E = \tfrac{r}{2}\tfrac{dB}{dt} = 0.025\times0.4 = 0.01$ V/m.`,
            difficulty: 3,
            hint: t`Apply $\oint E\cdot dl = -d\Phi/dt$ to a circle of radius 5 cm.`,
          },
          {
            kind: "mcq",
            q: "In an LR circuit, the battery is removed and the circuit is closed on itself when the current is 4 A. After two time constants the current is about (e⁻² ≈ 0.135):",
            options: ["0.54 A", "1.48 A", "2 A", "3.46 A"],
            answer: 0,
            explain: t`Decay: $I = I_0e^{-t/\tau} = 4\times0.135 \approx 0.54$ A.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Alternating Current (NCERT Ch 7; ISC: EMI and AC)                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-alternating-current",
    title: "Alternating Current",
    icon: "🔌",
    description: "AC through resistors, inductors and capacitors, phasors, the series LCR circuit and resonance, power factor, LC oscillations and transformers.",
    lessons: [
      {
        slug: "c12-ac-r-l-c",
        title: "AC Voltage, RMS Values and Phasors: R, L and C",
        summary: "Sinusoidal voltages, rms values, phasor diagrams, and how a resistor, an inductor and a capacitor each respond to AC.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "⚡",
            caption: "The wall socket in an Indian home gives 230 V at 50 Hz. The voltage swings positive and negative 50 times every second.",
          },
          {
            type: "text",
            md: t`An **alternating voltage** changes direction periodically. The simplest is sinusoidal: $v = v_m\sin\omega t$, where $v_m$ is the **peak value** and $\omega = 2\pi\nu$ is the angular frequency. Most power stations generate AC because transformers can easily raise or lower its voltage.

**AC through a resistor.** Ohm's law holds at every instant: $i = \dfrac{v_m}{R}\sin\omega t = i_m\sin\omega t$. Voltage and current reach their peaks together; they are **in phase**. The average current over a cycle is zero, but the heating is not, because the power $i^2R$ is never negative. Since the average of $\sin^2\omega t$ over a cycle is $\tfrac12$, the average power is $\tfrac12 i_m^2R$.`,
          },
          {
            type: "formula",
            tex: t`I = \frac{i_m}{\sqrt2} \approx 0.707\,i_m, \qquad V = \frac{v_m}{\sqrt2}, \qquad P = I^2R = VI`,
            caption: "The rms (root mean square) or effective current is the steady DC that gives the same heating. AC meters read rms values; 230 V mains is an rms value.",
          },
          {
            type: "example",
            title: "Mains values",
            problem: "A 100 W bulb is rated for 230 V mains. Find the peak voltage, the rms current, the bulb's resistance and the peak current.",
            steps: [
              t`Peak voltage $v_m = \sqrt2 V = 1.414\times230 \approx 325$ V.`,
              t`$I = P/V = 100/230 \approx 0.435$ A.`,
              t`$R = V^2/P = 230^2/100 = 529$ Ω.`,
              t`$i_m = \sqrt2 I \approx 0.615$ A.`,
            ],
            answer: "325 V, 0.435 A, 529 Ω, 0.615 A.",
          },
          {
            type: "text",
            md: t`**Phasors.** A **phasor** is a vector that rotates anticlockwise about the origin with angular speed $\omega$. Its length is the peak value, and its projection on the vertical axis gives the instantaneous value. Drawing the voltage and current phasors together shows at a glance which one is ahead (leads) and by how much.`,
          },
          {
            type: "text",
            md: t`**AC through an inductor** (no resistance). Kirchhoff's loop rule gives $v_m\sin\omega t = L\,\dfrac{di}{dt}$. Integrating, $i = -\dfrac{v_m}{\omega L}\cos\omega t = i_m\sin\left(\omega t - \dfrac{\pi}{2}\right)$, with $i_m = v_m/X_L$ and **inductive reactance** $X_L = \omega L$. The current **lags** the voltage by $\pi/2$.

**AC through a capacitor.** The charge is $q = Cv_m\sin\omega t$, so $i = \dfrac{dq}{dt} = \omega Cv_m\cos\omega t = i_m\sin\left(\omega t + \dfrac{\pi}{2}\right)$, with $i_m = v_m/X_C$ and **capacitive reactance** $X_C = \dfrac{1}{\omega C}$. The current **leads** the voltage by $\pi/2$.

In both cases the power alternates between positive and negative over each cycle, so the **average power is zero**. Energy is stored (in the magnetic or electric field) and handed back.`,
          },
          {
            type: "table",
            headers: ["Element", "Opposition", "Phase of current", "As frequency rises", "Average power"],
            rows: [
              ["Resistor", "R", "in phase with v", "R unchanged", t`$I^2R$`],
              ["Inductor", t`$X_L = \omega L$`, "lags v by π/2", t`$X_L$ rises, current falls`, "zero"],
              ["Capacitor", t`$X_C = 1/\omega C$`, "leads v by π/2", t`$X_C$ falls, current rises`, "zero"],
            ],
          },
          {
            type: "example",
            title: "Reactances on the mains",
            problem: "Find the rms current when (a) a 50 mH pure inductor and (b) a 50 μF capacitor are each connected to 230 V, 50 Hz mains.",
            steps: [
              t`(a) $X_L = 2\pi\nu L = 2\pi\times50\times0.05 \approx 15.7$ Ω, so $I = 230/15.7 \approx 14.6$ A.`,
              t`(b) $X_C = \dfrac{1}{2\pi\nu C} = \dfrac{1}{2\pi\times50\times50\times10^{-6}} \approx 63.7$ Ω, so $I = 230/63.7 \approx 3.6$ A.`,
              "In (a) the current lags the voltage by 90°; in (b) it leads by 90°. Neither element takes any average power.",
            ],
            answer: "(a) about 14.6 A, (b) about 3.6 A.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the peak value of a 220 V rms AC supply (in V, nearest whole number)?",
                answer: 311,
                tolerance: 1,
                unit: "V",
                explain: t`$v_m = \sqrt2\times220 \approx 311$ V.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "The supply frequency is doubled. What happens to the current through a capacitor?",
              emoji: "🔋",
              options: ["It doubles", "It halves", "It stays the same"],
              answer: 0,
              trap: 1,
              explain: t`$X_C = 1/\omega C$ halves when $\omega$ doubles, so the current doubles. A capacitor passes high frequencies easily and blocks DC (zero frequency) completely.`,
            },
          },
          {
            type: "mistake",
            wrong: "The average value of AC over a cycle is zero, so AC cannot heat a wire, and an AC ammeter should read zero.",
            right: "The average current is zero, but the average of i² is not. Heating depends on i², so AC heats a resistor, and AC meters are made to read the rms value.",
            why: "Positive and negative halves cancel in the average current, but heating is the same for either direction. That is why the rms value, not the mean, is the useful one.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Derive the phase relation for L and C step by step: write the loop equation, integrate or differentiate, rewrite cos as sin with a phase. Draw the phasor diagram and the v and i graphs on the same axes. Write units for reactance (ohm). A frequent 1-mark question: "a capacitor blocks DC but allows AC; why?" ($X_C \to \infty$ as $\nu \to 0$).`,
          },
          {
            type: "keypoints",
            items: [
              t`$v = v_m\sin\omega t$; rms values $I = i_m/\sqrt2$, $V = v_m/\sqrt2$.`,
              "Resistor: v and i in phase, average power I²R.",
              t`Inductor: $X_L = \omega L$, current lags by π/2. Capacitor: $X_C = 1/\omega C$, current leads by π/2.`,
              "Pure L or pure C takes zero average power.",
              "A phasor is a rotating vector; its vertical projection is the instantaneous value.",
            ],
          },
        ],
        flashcards: [
          { front: "rms value of a sinusoidal current", back: t`$I = i_m/\sqrt2 \approx 0.707\,i_m$; the DC current that gives the same heating.` },
          { front: "Inductive reactance", back: t`$X_L = \omega L = 2\pi\nu L$, in ohm; rises with frequency.` },
          { front: "Capacitive reactance", back: t`$X_C = 1/(\omega C)$, in ohm; falls with frequency.` },
          { front: "Phase in a pure inductor", back: "Current lags voltage by π/2 (90°)." },
          { front: "Phase in a pure capacitor", back: "Current leads voltage by π/2 (90°)." },
          { front: "Phasor", back: "A vector rotating anticlockwise at ω whose projection on the vertical axis is the instantaneous value." },
          { front: "Average power in a pure inductor or capacitor", back: "Zero: energy is stored and returned every cycle." },
          { front: "What do AC voltmeters and ammeters read?", back: "rms values." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a purely inductive AC circuit, the current:",
            options: ["is in phase with the voltage", "leads the voltage by π/2", "lags the voltage by π/2", "lags the voltage by π"],
            answer: 2,
            explain: t`From $v = L\,di/dt$, $i = i_m\sin(\omega t - \pi/2)$: the current lags.`,
          },
          {
            kind: "numeric",
            q: "Reactance (in Ω) of a 100 μF capacitor at 50 Hz?",
            answer: 31.8,
            tolerance: 0.1,
            unit: "Ω",
            explain: t`$X_C = 1/(2\pi\times50\times10^{-4}) = 1/0.0314 \approx 31.8$ Ω.`,
          },
          {
            kind: "numeric",
            q: "A 0.1 H pure inductor is connected to 220 V, 50 Hz. What is the rms current (in A)?",
            answer: 7,
            tolerance: 0.05,
            unit: "A",
            explain: t`$X_L = 2\pi\times50\times0.1 \approx 31.4$ Ω; $I = 220/31.4 \approx 7.0$ A.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The average power taken by an ideal capacitor in an AC circuit is zero.",
            answer: true,
            explain: "The current and voltage are 90° apart, so the power is positive for half the time and negative for the other half; it averages to zero.",
          },
          {
            kind: "mcq",
            q: "When the frequency of the supply is increased, the current through a pure inductor:",
            options: ["increases", "decreases", "stays the same", "becomes zero at once"],
            answer: 1,
            explain: t`$X_L = \omega L$ grows with frequency, so the current $V/X_L$ falls.`,
          },
          {
            kind: "mcq",
            q: "A heater gives the same heat on 230 V AC as on a DC supply of:",
            options: ["325 V", "230 V", "163 V", "0 V"],
            answer: 1,
            explain: "230 V is the rms value of the mains, and rms is defined as the DC value giving the same heating.",
          },
          {
            kind: "multi",
            q: "For a resistor connected to AC, which are true?",
            options: ["Voltage and current are in phase", "The average current over a cycle is zero", "The average power over a cycle is zero", t`Average power $= \tfrac12 v_mi_m$`],
            answers: [0, 1, 3],
            explain: t`v and i are in phase; the mean current is zero; the mean power is $\tfrac12 v_mi_m = VI$, not zero.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-ac-lcr-power",
        title: "Series LCR Circuit, Resonance and Power",
        summary: "Impedance and phase from a phasor diagram, series resonance and its sharpness, average power, power factor and wattless current.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Connect a resistor R, an inductor L and a capacitor C in series to $v = v_m\sin\omega t$. The **same current** $i = i_m\sin(\omega t + \phi)$ flows through all three, so we draw the current phasor first. Then $\vec{V}_R$ is along the current, $\vec{V}_L$ is $90°$ **ahead** of it and $\vec{V}_C$ is $90°$ **behind** it. $\vec{V}_L$ and $\vec{V}_C$ point in opposite directions, so they partly cancel.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Peak values: $v_{Rm} = i_mR$, $v_{Lm} = i_mX_L$, $v_{Cm} = i_mX_C$.`,
              t`$\vec{V}_L$ and $\vec{V}_C$ are along one line in opposite directions; their resultant has size $|v_{Cm} - v_{Lm}|$, at right angles to $\vec{V}_R$.`,
              t`The source phasor is the vector sum, so by Pythagoras $v_m^2 = v_{Rm}^2 + (v_{Cm} - v_{Lm})^2 = i_m^2\left[R^2 + (X_C - X_L)^2\right]$.`,
              t`Hence $i_m = v_m/Z$ with **impedance** $Z = \sqrt{R^2 + (X_C - X_L)^2}$.`,
              t`From the same triangle, $\tan\phi = \dfrac{X_C - X_L}{R}$. If $X_L > X_C$, $\phi$ is negative: the current lags (inductive circuit). If $X_C > X_L$, the current leads (capacitive circuit).`,
            ],
          },
          {
            type: "formula",
            tex: t`Z = \sqrt{R^2 + (X_C - X_L)^2}, \qquad \tan\phi = \frac{X_C - X_L}{R}`,
            caption: "The impedance triangle: R and (X_C − X_L) are the two sides, Z the hypotenuse. Peak voltages of the elements add as vectors, not as numbers.",
          },
          {
            type: "example",
            title: "A series LCR circuit",
            problem: t`R = 30 Ω, $X_L$ = 80 Ω and $X_C$ = 40 Ω are in series across a 200 V (rms) supply. Find Z, the current, the voltage across each element, the phase angle and the power used.`,
            steps: [
              t`$Z = \sqrt{30^2 + (40 - 80)^2} = \sqrt{900 + 1600} = 50$ Ω.`,
              t`$I = 200/50 = 4$ A.`,
              t`$V_R = 120$ V, $V_L = 320$ V, $V_C = 160$ V. Check: $\sqrt{120^2 + (320-160)^2} = \sqrt{14400 + 25600} = 200$ V.`,
              t`$\tan\phi = (40 - 80)/30 = -4/3$, so $\phi \approx -53°$: the current lags the voltage by 53°.`,
              t`Power factor $\cos\phi = R/Z = 0.6$; $P = VI\cos\phi = 200\times4\times0.6 = 480$ W, which equals $I^2R = 16\times30$.`,
            ],
            answer: "Z = 50 Ω, I = 4 A, 120 V / 320 V / 160 V, current lags by 53°, P = 480 W.",
          },
          {
            type: "heading",
            text: "Resonance",
          },
          {
            type: "text",
            md: t`As the frequency changes, $X_L$ rises and $X_C$ falls. At one frequency they are equal, $X_L = X_C$, so $Z = R$ (its least value) and the current is largest: this is **series resonance**. It happens at $\omega_0 L = 1/(\omega_0 C)$.

At resonance the voltages across L and C are equal and opposite, and each can be much larger than the supply voltage. Resonance needs both L and C; an RL or RC circuit cannot resonate. Radio and TV tuners use it: turning the dial changes C until the circuit's resonant frequency matches one station, whose signal then gives a large current.

**Sharpness of resonance.** A circuit is sharp if the current drops quickly on either side of $\omega_0$. The two frequencies where the current falls to $1/\sqrt2$ of its peak (half-power points) are $\omega_0 \pm \Delta\omega$, with $2\Delta\omega = R/L$ called the **bandwidth**. The **quality factor** $Q = \omega_0/(2\Delta\omega)$ measures sharpness: small R gives a high Q. (Board note: some editions of the rationalised NCERT book have trimmed this part; ISC still asks for it.)`,
          },
          {
            type: "formula",
            tex: t`\omega_0 = \frac{1}{\sqrt{LC}}, \qquad \nu_0 = \frac{1}{2\pi\sqrt{LC}}, \qquad Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}`,
          },
          {
            type: "example",
            title: "At resonance",
            problem: "L = 0.1 H, C = 10 μF and R = 20 Ω are in series with a 100 V (rms) variable-frequency source. Find the resonant angular frequency, the current at resonance, the Q factor and the voltage across the inductor.",
            steps: [
              t`$LC = 0.1\times10^{-5} = 10^{-6}$, so $\omega_0 = 1/\sqrt{10^{-6}} = 1000$ rad/s ($\nu_0 \approx 159$ Hz).`,
              t`At resonance $Z = R$: $I = 100/20 = 5$ A.`,
              t`$Q = \omega_0L/R = 1000\times0.1/20 = 5$.`,
              t`$V_L = IX_L = 5\times(1000\times0.1) = 500$ V, which is $Q$ times the supply voltage. $V_C$ is also 500 V, in the opposite phase.`,
            ],
            answer: "1000 rad/s, 5 A, Q = 5, 500 V across L.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Resonant angular frequency (in rad/s) of a series circuit with L = 0.4 H and C = 10 μF?",
                answer: 500,
                unit: "rad/s",
                explain: t`$\omega_0 = 1/\sqrt{0.4\times10^{-5}} = 1/\sqrt{4\times10^{-6}} = 1/(2\times10^{-3}) = 500$ rad/s.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Power in an AC circuit.** The instantaneous power is $p = vi = v_mi_m\sin\omega t\,\sin(\omega t + \phi) = \tfrac{v_mi_m}{2}\left[\cos\phi - \cos(2\omega t + \phi)\right]$. The second term averages to zero, so

$P = VI\cos\phi$

$\cos\phi$ is the **power factor** ($= R/Z$ for series LCR).

- Pure R: $\phi = 0$, $\cos\phi = 1$, all the power is used.
- Pure L or C: $\phi = \pm 90°$, $P = 0$. Current flows but no power is used: a **wattless current**.
- At resonance: $\cos\phi = 1$, maximum power.

A low power factor means a large current for the same useful power, and so more $I^2R$ loss in transmission lines. Industries add capacitors in parallel with motors to raise the power factor towards 1. A current can be split into a part $I\cos\phi$ in phase with V (which does the work) and a part $I\sin\phi$ at 90° to it (wattless).`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the series LCR circuit inductive, capacitive or purely resistive?",
              groups: ["Inductive", "Capacitive", "Resistive"],
              items: [
                { text: "Frequency above resonance", group: 0, hint: t`Above $\omega_0$, $X_L$ is larger than $X_C$.` },
                { text: "Frequency below resonance", group: 1, hint: t`Below $\omega_0$, $X_C$ is larger.` },
                { text: t`$X_L = X_C$`, group: 2, hint: "The reactances cancel, so Z = R." },
                { text: "Current lags the voltage", group: 0, hint: "Lagging current is the mark of an inductor." },
                { text: "Current leads the voltage", group: 1, hint: "Leading current is the mark of a capacitor." },
                { text: "Power factor equals 1", group: 2, hint: "cos φ = 1 only when φ = 0." },
              ],
              explain: "Whichever reactance is bigger decides the character of the circuit. At resonance they cancel and the circuit behaves like R alone.",
            },
          },
          {
            type: "mistake",
            wrong: "In a series LCR circuit, the supply voltage equals V_R + V_L + V_C (for example 120 + 320 + 160 = 600 V).",
            right: t`The rms voltages add as phasors: $V = \sqrt{V_R^2 + (V_L - V_C)^2}$, which is 200 V in the worked example.`,
            why: "The three voltages reach their peaks at different instants, so their peak or rms values cannot be added like numbers. Only the instantaneous values add up directly.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The phasor derivation of Z and $\tan\phi$ is a favourite 3- or 5-mark question: draw the phasor diagram neatly with labels, then the impedance triangle. For "average power in an AC circuit" show the product-to-sum step. Define power factor and wattless current in one line each, and give one example (choke coil, or pure L).`,
          },
          {
            type: "keypoints",
            items: [
              t`Series LCR: $Z = \sqrt{R^2 + (X_C - X_L)^2}$, $\tan\phi = (X_C - X_L)/R$.`,
              t`Resonance: $X_L = X_C$, $\omega_0 = 1/\sqrt{LC}$, $Z = R$, current maximum.`,
              t`Quality factor $Q = \omega_0L/R$; bandwidth $R/L$.`,
              t`Average power $P = VI\cos\phi$; power factor $\cos\phi = R/Z$.`,
              "Wattless current: current with φ = 90°, as in a pure inductor or capacitor.",
            ],
          },
        ],
        flashcards: [
          { front: "Impedance of a series LCR circuit", back: t`$Z = \sqrt{R^2 + (X_C - X_L)^2}$` },
          { front: "Condition for series resonance", back: t`$X_L = X_C$, i.e. $\omega_0 = 1/\sqrt{LC}$.` },
          { front: "Impedance and current at resonance", back: "Z = R (minimum), current maximum, power factor 1." },
          { front: "Quality factor", back: t`$Q = \omega_0L/R = \tfrac{1}{R}\sqrt{L/C}$; higher Q means sharper resonance.` },
          { front: "Average power in an AC circuit", back: t`$P = V_{rms}I_{rms}\cos\phi$` },
          { front: "Power factor", back: t`$\cos\phi$, equal to R/Z for a series circuit.` },
          { front: "Wattless current", back: "Current whose phase differs from the voltage by 90°; it uses no average power." },
          { front: "Why improve power factor?", back: "For the same useful power, a low power factor needs more current, so more I²R loss in the lines." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A coil of resistance 6 Ω and inductive reactance 8 Ω is connected to AC. Its impedance (in Ω)?",
            answer: 10,
            unit: "Ω",
            explain: t`$Z = \sqrt{6^2 + 8^2} = 10$ Ω.`,
          },
          {
            kind: "mcq",
            q: "At resonance in a series LCR circuit, the power factor is:",
            options: ["0", "0.5", t`$1/\sqrt2$`, "1"],
            answer: 3,
            explain: t`$X_L = X_C$, so $Z = R$ and $\cos\phi = R/Z = 1$.`,
          },
          {
            kind: "numeric",
            q: "A circuit draws 5 A rms from 220 V rms with power factor 0.8. Average power (in W)?",
            answer: 880,
            unit: "W",
            explain: t`$P = VI\cos\phi = 220\times5\times0.8 = 880$ W.`,
          },
          {
            kind: "truefalse",
            q: "In a series LCR circuit near resonance, the rms voltage across the inductor can be larger than the supply voltage.",
            answer: true,
            explain: "At resonance V_L = QV, and Q can be much greater than 1. V_L and V_C cancel each other, so the supply does not need to provide them.",
          },
          {
            kind: "mcq",
            q: "A series LCR circuit is driven below its resonant frequency. The circuit is:",
            options: ["inductive, current lags", "capacitive, current leads", "purely resistive", "unable to carry current"],
            answer: 1,
            explain: t`Below $\omega_0$, $X_C > X_L$, so the circuit is capacitive and the current leads.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Find the Q factor of a series circuit with L = 2 H, C = 8 μF and R = 50 Ω.",
            answer: 10,
            explain: t`$\omega_0 = 1/\sqrt{1.6\times10^{-5}} = 250$ rad/s. $Q = \omega_0L/R = 250\times2/50 = 10$. Or $\tfrac1R\sqrt{L/C} = \tfrac1{50}\times500 = 10$.`,
            difficulty: 2,
            hint: "Find ω₀ first, or use (1/R)√(L/C).",
          },
          {
            kind: "mcq",
            q: "A current is called wattless when the phase difference between voltage and current is:",
            options: ["0", "45°", "90°", "180°"],
            answer: 2,
            explain: t`$P = VI\cos 90° = 0$.`,
          },
          {
            kind: "numeric",
            q: "R = 40 Ω, X_L = 50 Ω and X_C = 20 Ω are in series on a 100 V rms supply. Current (in A)?",
            answer: 2,
            unit: "A",
            explain: t`$Z = \sqrt{40^2 + 30^2} = 50$ Ω, $I = 100/50 = 2$ A.`,
          },
        ],
      },
      {
        slug: "c12-ac-lc-transformer",
        title: "LC Oscillations and Transformers",
        summary: "How energy swings between a capacitor and an inductor, the mechanical analogy, and how transformers step voltages up and down.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`Charge a capacitor to $q_m$ and connect it across an inductor with no resistance. The capacitor starts to discharge, but the inductor's back emf builds the current up slowly. When the capacitor is empty the current is largest, and the inductor keeps it going, charging the capacitor the other way round. The charge then flows back. Energy swings between the capacitor's **electric field** and the inductor's **magnetic field**: these are **LC oscillations**.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Loop rule at any instant: $\dfrac{q}{C} + L\dfrac{di}{dt} = 0$ (no resistance, no source).`,
              t`Since $i = dq/dt$: $\dfrac{d^2q}{dt^2} + \dfrac{1}{LC}q = 0$.`,
              t`This has the form of SHM, $\ddot{x} + \omega_0^2x = 0$, with $\omega_0 = 1/\sqrt{LC}$.`,
              t`Solution: $q = q_m\cos(\omega_0t + \phi)$; with $q = q_m$ at $t = 0$, $q = q_m\cos\omega_0t$ and $i = -q_m\omega_0\sin\omega_0t$.`,
              t`Total energy $\dfrac{q^2}{2C} + \dfrac12Li^2 = \dfrac{q_m^2}{2C}$ stays constant.`,
            ],
          },
          {
            type: "formula",
            tex: t`\omega_0 = \frac{1}{\sqrt{LC}}, \qquad U = \frac{q^2}{2C} + \frac12 Li^2 = \frac{q_m^2}{2C} = \frac12 L i_m^2`,
            caption: "The natural frequency of an LC circuit equals the resonant frequency of a series LCR circuit with the same L and C.",
          },
          {
            type: "table",
            headers: ["Spring–mass", "LC circuit"],
            rows: [
              ["displacement x", "charge q"],
              ["velocity v = dx/dt", "current i = dq/dt"],
              ["mass m", "inductance L"],
              ["spring constant k", "1/C"],
              [t`kinetic energy $\tfrac12mv^2$`, t`magnetic energy $\tfrac12Li^2$`],
              [t`potential energy $\tfrac12kx^2$`, t`electric energy $q^2/2C$`],
            ],
          },
          {
            type: "example",
            title: "An LC circuit",
            problem: "A 50 μF capacitor charged to 2 mC is connected across a 20 mH inductor. Find the angular frequency, the frequency, the total energy and the peak current.",
            steps: [
              t`$LC = 0.02\times5\times10^{-5} = 10^{-6}\ \text{s}^2$, so $\omega_0 = 1000$ rad/s and $\nu = 1000/2\pi \approx 159$ Hz.`,
              t`$U = \dfrac{q_m^2}{2C} = \dfrac{(2\times10^{-3})^2}{2\times5\times10^{-5}} = \dfrac{4\times10^{-6}}{10^{-4}} = 0.04$ J.`,
              t`$i_m = q_m\omega_0 = 2\times10^{-3}\times1000 = 2$ A. Check: $\tfrac12Li_m^2 = \tfrac12\times0.02\times4 = 0.04$ J.`,
            ],
            answer: "1000 rad/s, about 159 Hz, 0.04 J, 2 A.",
          },
          {
            type: "text",
            md: "Real circuits have resistance, so some energy becomes heat each cycle and the oscillations die away (damped oscillations). Energy is also lost as electromagnetic radiation. To keep them going, energy must be fed in, as an electronic oscillator does. **Board note:** if your edition of the NCERT book has removed LC oscillations, they still appear in ISC and in the JEE and NEET syllabi.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In an ideal LC circuit, at the instant the capacitor is fully charged, the current is:",
                options: ["maximum", "zero", "half its maximum", "changing direction slowly"],
                answer: 1,
                explain: "All the energy is in the capacitor, so the magnetic energy and hence the current are zero at that instant.",
              },
            ],
          },
          {
            type: "heading",
            text: "Transformers",
          },
          {
            type: "text",
            md: t`A **transformer** changes an alternating voltage to a higher or lower value. It works on **mutual induction**. Two coils, the **primary** ($N_p$ turns) and the **secondary** ($N_s$ turns), are wound on a common laminated soft-iron core. An AC in the primary makes an alternating flux in the core, which links the secondary and induces an emf in it.

For an ideal transformer (no flux leakage, no losses, negligible primary resistance), every turn links the same changing flux $\Phi$: $\varepsilon_s = -N_s\,d\Phi/dt$ and $v_p = -N_p\,d\Phi/dt$. Dividing, and using input power = output power:`,
          },
          {
            type: "formula",
            tex: t`\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}`,
            caption: "Step-up: Ns > Np (voltage rises, current falls). Step-down: Ns < Np. The power stays the same in an ideal transformer.",
          },
          {
            type: "example",
            title: "A step-down transformer",
            problem: "A transformer changes 230 V mains to 11.5 V for a lamp that draws 2 A. The primary has 2000 turns. Find the secondary turns and the primary current (a) if ideal, (b) if 90% efficient.",
            steps: [
              t`$N_s = N_p\times V_s/V_p = 2000\times11.5/230 = 100$ turns.`,
              t`Output power $= 11.5\times2 = 23$ W. (a) Ideal: $I_p = 23/230 = 0.1$ A.`,
              t`(b) Input power $= 23/0.9 \approx 25.6$ W, so $I_p = 25.6/230 \approx 0.11$ A.`,
            ],
            answer: "100 turns; 0.1 A (ideal), about 0.11 A at 90% efficiency.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each transformer energy loss to how it is reduced.",
              pairs: [
                ["Flux leakage", "Wind the primary and secondary over each other"],
                ["Copper (I²R) loss in the windings", "Use thick copper wire"],
                ["Eddy currents in the core", "Use a laminated core"],
                ["Hysteresis loss in the core", "Use soft iron with a narrow hysteresis loop"],
              ],
              explain: "Large transformers reach efficiencies above 95% because each loss has its own fix. Some heat is always produced, so big transformers need oil cooling.",
            },
          },
          {
            type: "mistake",
            wrong: "A step-up transformer increases the power, and it can step up the voltage of a battery too.",
            right: "A transformer can never give out more power than it takes in; raising the voltage lowers the current. It works only with AC, because a steady DC gives no changing flux.",
            why: "The word 'step-up' suggests getting more. But Vs·Is ≤ Vp·Ip. On DC the core flux is constant, nothing is induced in the secondary, and the primary, having low resistance, can overheat.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`For transformer questions, draw the core with both windings, state the principle (mutual induction), derive the turns ratio, and list the losses with remedies. A favourite reasoning question: why power is transmitted at high voltage. Answer: for a given power $P = VI$, high V means low I, and the line loss $I^2R$ falls sharply.`,
          },
          {
            type: "keypoints",
            items: [
              t`LC circuit: $\ddot q + q/LC = 0$, SHM at $\omega_0 = 1/\sqrt{LC}$; energy swaps between C and L.`,
              t`Analogy: L ↔ m, 1/C ↔ k, q ↔ x, i ↔ v.`,
              t`Transformer works on mutual induction, only with AC: $V_s/V_p = N_s/N_p = I_p/I_s$ (ideal).`,
              "Losses: flux leakage, copper loss, eddy currents, hysteresis.",
              "High-voltage transmission reduces I²R loss.",
            ],
          },
        ],
        flashcards: [
          { front: "Natural angular frequency of an LC circuit", back: t`$\omega_0 = 1/\sqrt{LC}$` },
          { front: "Mechanical analogue of inductance", back: "Mass (inertia)." },
          { front: "Mechanical analogue of capacitance", back: "1/C plays the role of the spring constant k." },
          { front: "Why do real LC oscillations die out?", back: "Resistance turns energy into heat, and some energy is radiated as electromagnetic waves." },
          { front: "Principle of a transformer", back: "Mutual induction between two coils on a common core." },
          { front: "Ideal transformer relations", back: t`$V_s/V_p = N_s/N_p = I_p/I_s$` },
          { front: "Four energy losses in a transformer", back: "Flux leakage, copper (I²R) loss, eddy current loss, hysteresis loss." },
          { front: "Why transmit power at high voltage?", back: "The current is smaller for the same power, so the I²R loss in the lines is much less." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Angular frequency (in rad/s) of oscillation of an LC circuit with L = 0.5 H and C = 2 μF?",
            answer: 1000,
            unit: "rad/s",
            explain: t`$LC = 10^{-6}$, so $\omega_0 = 1/10^{-3} = 1000$ rad/s.`,
          },
          {
            kind: "mcq",
            q: "In the analogy between an LC circuit and a spring–mass system, the inductance corresponds to:",
            options: ["the spring constant", "the mass", "the displacement", "the velocity"],
            answer: 1,
            explain: "L resists changes in current as mass resists changes in velocity; ½Li² matches ½mv².",
          },
          {
            kind: "numeric",
            q: "A transformer has 500 turns in the primary and 2500 in the secondary. If the primary voltage is 220 V, what is the secondary voltage (in V)?",
            answer: 1100,
            unit: "V",
            explain: t`$V_s = V_p\times N_s/N_p = 220\times5 = 1100$ V.`,
          },
          {
            kind: "numeric",
            q: "An ideal step-down transformer has turns ratio Np : Ns = 20 : 1. If the primary current is 0.5 A, what is the secondary current (in A)?",
            answer: 10,
            unit: "A",
            explain: t`$I_s = I_p\times N_p/N_s = 0.5\times20 = 10$ A.`,
          },
          {
            kind: "truefalse",
            q: "A transformer can be used to step up the voltage of a car battery.",
            answer: false,
            explain: "A battery gives DC; the core flux would be constant and no emf would be induced in the secondary.",
          },
          {
            kind: "multi",
            q: "Which of these are energy losses in a real transformer?",
            options: ["Eddy currents in the core", "Hysteresis in the core", "Heating of the windings", "Loss of charge from the core"],
            answers: [0, 1, 2],
            explain: "Eddy current, hysteresis and copper (I²R) losses are real; together with flux leakage they make efficiency less than 100%. 'Loss of charge' is not a transformer loss.",
          },
          {
            kind: "numeric",
            q: "An LC circuit has C = 10 μF charged to 50 V. Total energy of the oscillations (in mJ)?",
            answer: 12.5,
            unit: "mJ",
            explain: t`$U = \tfrac12CV^2 = \tfrac12\times10^{-5}\times2500 = 0.0125$ J = 12.5 mJ.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Electric power is sent over long distances at very high voltage mainly to:",
            options: ["make the current larger", "reduce the I²R loss in the lines", "increase the frequency", "make the power factor zero"],
            answer: 1,
            explain: "For the same power, higher V means lower I, and the heat loss I²R in the wires falls as the square of the current.",
          },
        ],
      },
      {
        slug: "c12-ac-exam-edge",
        title: "Exam edge: AC Circuits for JEE, NEET and CETs",
        summary: "Typical entrance questions on AC, quick results for rms values, resonance and power, and problems rising to JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Alternating current gives 2–3 questions in most entrance papers. NEET, KCET and COMEDK favour direct formula work: reactance, impedance, resonance frequency, power factor, transformer ratios. JEE Main adds phasor reasoning and rms of unusual waveforms. JEE Advanced combines LCR phasors with LC energy and asks for currents and phases in parallel branches.",
          },
          {
            type: "table",
            headers: ["Exam", "Typical questions"],
            rows: [
              ["KCET / COMEDK", "rms and peak values, X_L and X_C, resonance frequency, transformer turns ratio, power factor"],
              ["NEET", "Impedance, phase, power in RL / RC / LCR, choke coil, Q factor, LC energy"],
              ["JEE Main", "Coil tested on DC and AC, half-power frequencies, rms of mixed or non-sinusoidal waves"],
              ["JEE Advanced", "Phasor problems with several elements, LC timing and energy, branch currents"],
            ],
          },
          {
            type: "list",
            items: [
              t`**Coil on DC then AC:** DC gives $R = V/I$ (inductor has no reactance at $\nu = 0$); AC gives $Z$; then $X_L = \sqrt{Z^2 - R^2}$.`,
              t`**Only R uses power:** $P = I_{rms}^2R$ for any series circuit, the quickest way to find power.`,
              t`**rms of other waveforms:** square wave $\pm I_0$: $I_0$. Triangular or sawtooth: $I_0/\sqrt3$. Half-wave rectified sine: $I_0/2$. DC plus sine, $I_1 + I_2\sin\omega t$: $\sqrt{I_1^2 + I_2^2/2}$.`,
              t`**Half-power points:** $\omega \approx \omega_0 \pm R/2L$ (good when Q is large), bandwidth $R/L$, $Q = \omega_0L/R$.`,
              t`**LC timing:** electric and magnetic energies are equal when $q = q_m/\sqrt2$, first at $t = T/8$.`,
              t`**Choke coil:** a large L, small R used instead of a resistor to cut current in AC; power factor near 0, so almost no power is wasted.`,
            ],
          },
          {
            type: "formula",
            tex: t`I_{rms} = \sqrt{\frac{1}{T}\int_0^T i^2\,dt}`,
            caption: "Use this definition directly for any waveform the shortcuts do not cover.",
          },
          {
            type: "example",
            title: "KCET level: coil on DC and AC",
            problem: "A coil takes 4 A from a 12 V DC supply and 2.4 A from a 12 V (rms), 50 Hz AC supply. Find its resistance, inductance and the power taken on AC.",
            steps: [
              t`DC: $R = 12/4 = 3$ Ω.`,
              t`AC: $Z = 12/2.4 = 5$ Ω, so $X_L = \sqrt{5^2 - 3^2} = 4$ Ω.`,
              t`$L = X_L/(2\pi\nu) = 4/314.2 \approx 12.7$ mH.`,
              t`$P = I^2R = 2.4^2\times3 \approx 17.3$ W (power factor $3/5 = 0.6$).`,
            ],
            answer: "R = 3 Ω, L ≈ 12.7 mH, P ≈ 17.3 W.",
          },
          {
            type: "example",
            title: "NEET level: choke instead of resistor",
            problem: "A lamp rated 100 V, 100 W must run from 200 V, 50 Hz mains. Find the inductance of a pure choke to put in series, and compare with using a resistor.",
            steps: [
              t`Lamp: $I = P/V = 1$ A, $R = 100$ Ω.`,
              t`With the choke, $Z = 200/1 = 200$ Ω, so $X_L = \sqrt{200^2 - 100^2} \approx 173$ Ω.`,
              t`$L = 173/(2\pi\times50) \approx 0.55$ H.`,
              t`A series resistor would need $200 - 100 = 100$ Ω and would waste $1^2\times100 = 100$ W. The ideal choke wastes nothing.`,
            ],
            answer: "About 0.55 H; the choke saves the 100 W that a resistor would waste.",
          },
          {
            type: "example",
            title: "JEE Main level: sharpness",
            problem: "A series circuit has L = 10 mH, C = 1 μF and R = 10 Ω. Find ω₀, the Q factor, the bandwidth and the half-power angular frequencies.",
            steps: [
              t`$\omega_0 = 1/\sqrt{10^{-2}\times10^{-6}} = 10^4$ rad/s.`,
              t`$Q = \omega_0L/R = 10^4\times10^{-2}/10 = 10$.`,
              t`Bandwidth $R/L = 10/0.01 = 1000$ rad/s.`,
              t`Half-power points $\approx 10^4 \pm 500$, i.e. 9500 rad/s and 10 500 rad/s.`,
            ],
            answer: "ω₀ = 10⁴ rad/s, Q = 10, bandwidth 1000 rad/s, about 9500 and 10 500 rad/s.",
          },
          {
            type: "example",
            title: "JEE Advanced level: DC plus AC",
            problem: t`A current $i = 3 + 4\sin\omega t$ (in A) flows through a 10 Ω resistor. Find the rms current and the average power.`,
            steps: [
              t`$i^2 = 9 + 24\sin\omega t + 16\sin^2\omega t$.`,
              t`Averages over a cycle: $\langle\sin\omega t\rangle = 0$, $\langle\sin^2\omega t\rangle = \tfrac12$. So $\langle i^2\rangle = 9 + 8 = 17$.`,
              t`$I_{rms} = \sqrt{17} \approx 4.12$ A (not $3 + 4/\sqrt2 \approx 5.83$ A).`,
              t`$P = \langle i^2\rangle R = 17\times10 = 170$ W.`,
            ],
            answer: "About 4.12 A and 170 W.",
          },
          {
            type: "example",
            title: "JEE Advanced level: LC timing",
            problem: "An LC circuit with ω₀ = 1000 rad/s starts with the capacitor fully charged. When are the electric and magnetic energies first equal?",
            steps: [
              t`$U_E = \tfrac{q^2}{2C}$ is half the total when $q = q_m/\sqrt2$.`,
              t`$q = q_m\cos\omega_0t$, so $\cos\omega_0t = 1/\sqrt2$, $\omega_0t = \pi/4$.`,
              t`$t = \pi/(4\times1000) \approx 7.85\times10^{-4}$ s, which is $T/8$.`,
            ],
            answer: "About 0.785 ms after the start.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A square-wave current switches between +3 A and −3 A every half cycle. Its rms value (in A)?",
                answer: 3,
                unit: "A",
                explain: "i² is 9 at every instant, so the rms value is √9 = 3 A.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`For $i = I_1 + I_2\sin\omega t$, the rms value is $I_1 + I_2/\sqrt2$.`,
            right: t`rms values do not add. Square, average, then root: $I_{rms} = \sqrt{I_1^2 + I_2^2/2}$.`,
            why: "The cross term averages to zero, so the squares add, not the values. Adding rms values directly overestimates the heating.",
          },
          {
            type: "mistake",
            wrong: "Power in an LCR circuit is V_rms × I_rms.",
            right: t`That is the **apparent power**. The real (average) power is $V_{rms}I_{rms}\cos\phi = I_{rms}^2R$.`,
            why: "Only the resistor takes energy on average. The inductor and capacitor take energy and give it back each cycle, so leaving out cos φ overcounts.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each current waveform to its rms value (peak I₀).",
              pairs: [
                ["Sinusoidal", t`$I_0/\sqrt2$`],
                ["Square wave ±I₀", t`$I_0$`],
                ["Triangular wave", t`$I_0/\sqrt3$`],
                ["Half-wave rectified sine", t`$I_0/2$`],
              ],
              explain: "Each comes from averaging i² over one period. The flatter the wave near its peak, the closer the rms is to the peak.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Coil on DC gives R; on AC gives Z; X_L = √(Z² − R²).",
              t`Real power $= I_{rms}^2R = VI\cos\phi$; apparent power $= VI$.`,
              t`rms of DC + sine: $\sqrt{I_1^2 + I_2^2/2}$.`,
              t`Bandwidth $R/L$, $Q = \omega_0L/R$, half-power at about $\omega_0 \pm R/2L$.`,
              "LC energies are equal at T/8; a choke limits current without wasting power.",
            ],
          },
        ],
        flashcards: [
          { front: "rms of a square wave of height ±I₀", back: t`$I_0$` },
          { front: "rms of a half-wave rectified sine of peak I₀", back: t`$I_0/2$` },
          { front: "rms of a triangular wave of peak I₀", back: t`$I_0/\sqrt3$` },
          { front: "rms of I₁ + I₂ sin ωt", back: t`$\sqrt{I_1^2 + I_2^2/2}$` },
          { front: "Bandwidth of a series LCR circuit", back: t`$2\Delta\omega = R/L$` },
          { front: "Apparent power vs real power", back: t`Apparent $= V_{rms}I_{rms}$ (in VA); real $= V_{rms}I_{rms}\cos\phi$ (in W).` },
          { front: "Why is a choke better than a resistor for limiting AC?", back: "Its power factor is nearly zero, so it wastes almost no energy as heat." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the rms value (in A) of $i = 4 + 3\sin\omega t$.`,
            answer: 4.53,
            tolerance: 0.02,
            unit: "A",
            explain: t`$\sqrt{16 + 9/2} = \sqrt{20.5} \approx 4.53$ A.`,
            difficulty: 2,
            hint: "Average of sin² is 1/2; the cross term averages to zero.",
          },
          {
            kind: "numeric",
            q: "R = 30 Ω and X_C = 40 Ω are in series on 100 V (rms). Average power (in W)?",
            answer: 120,
            unit: "W",
            explain: t`$Z = 50$ Ω, $I = 2$ A, $P = I^2R = 4\times30 = 120$ W.`,
          },
          {
            kind: "multi",
            q: "At resonance in a series LCR circuit, which are true?",
            options: ["Impedance is minimum", "The current is in phase with the supply voltage", "V_L = V_C", "The voltage across R is zero"],
            answers: [0, 1, 2],
            explain: "X_L = X_C so Z = R (minimum), φ = 0, and V_L = V_C cancel. The whole supply voltage appears across R, so it is not zero.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A coil takes 2 A from 20 V DC and 1 A from 20 V (rms) AC at angular frequency 100 rad/s. Its inductance is about:",
            options: ["0.10 H", "0.17 H", "0.20 H", "0.35 H"],
            answer: 1,
            explain: t`$R = 10$ Ω, $Z = 20$ Ω, $X_L = \sqrt{400 - 100} \approx 17.3$ Ω, $L = 17.3/100 \approx 0.17$ H.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "An LC circuit has L = 1 mH and C = 1 μF and starts with the capacitor fully charged. After how many microseconds are the electric and magnetic energies first equal?",
            answer: 24.8,
            tolerance: 0.2,
            unit: "μs",
            explain: t`$\omega_0 = 1/\sqrt{10^{-9}} \approx 3.16\times10^4$ rad/s; $t = \pi/(4\omega_0) \approx 2.48\times10^{-5}$ s. Equivalently $T/8$ with $T = 2\pi\sqrt{LC} \approx 198.7$ μs, so $t \approx 24.8$ μs.`,
            difficulty: 3,
            hint: t`Energies are equal when $q = q_m/\sqrt2$.`,
          },
          {
            kind: "numeric",
            q: "Bandwidth (in rad/s) of a series LCR circuit with R = 5 Ω and L = 0.05 H?",
            answer: 100,
            unit: "rad/s",
            explain: t`Bandwidth $= R/L = 5/0.05 = 100$ rad/s.`,
          },
          {
            kind: "mcq",
            q: "In a series RC circuit on AC, the current:",
            options: ["lags the voltage by an angle between 0 and 90°", "leads the voltage by an angle between 0 and 90°", "is in phase with the voltage", "leads by exactly 90°"],
            answer: 1,
            explain: t`$\tan\phi = X_C/R > 0$, so the current leads, by less than 90° because R is not zero.`,
          },
          {
            kind: "mcq",
            q: "A circuit takes 1000 VA of apparent power at power factor 0.6. Its reactive (wattless) power is:",
            options: ["600 var", "800 var", "400 var", "1000 var"],
            answer: 1,
            explain: t`Real power $= 1000\times0.6 = 600$ W; reactive power $= 1000\times\sin\phi = 1000\times0.8 = 800$ var (volt-ampere reactive).`,
            difficulty: 3,
            hint: "If cos φ = 0.6, then sin φ = 0.8.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Electromagnetic Induction": "c12-electromagnetic-induction",
  "12:Alternating Current": "c12-alternating-current",
};
