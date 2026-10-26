import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 12, Chapter 1: Electric Charges and Fields                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-electric-charges-fields",
    title: "Electric Charges and Fields",
    icon: "⚡",
    description: "Electric charge and its properties, Coulomb's law, electric field and field lines, electric dipole, electric flux and Gauss's law with its applications.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-charge-coulombs-law",
        title: "Electric Charge and Coulomb's Law",
        summary: "Two kinds of charge, conductors and insulators, charging by induction, additivity, conservation and quantisation of charge, Coulomb's law and the superposition principle.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪮",
            caption: "On a dry winter morning in Delhi, a plastic comb pulled through your hair picks up tiny bits of paper. Something has moved between your hair and the comb.",
          },
          {
            type: "text",
            md: t`Rubbing two different materials together moves **electrons** from one to the other. The body that gains electrons becomes **negatively charged**; the body that loses them becomes **positively charged**. A glass rod rubbed with silk turns positive; a plastic rod rubbed with wool turns negative. The names "positive" and "negative" are only a convention, first used by Benjamin Franklin.

Like charges repel and unlike charges attract. A charged body also attracts a neutral light body (paper bits) because it shifts the charges inside it slightly. So **repulsion** is the sure test of charge, not attraction.

**Conductors** (metals, the human body, the earth) let charges move freely through them. **Insulators** (glass, plastic, dry wood) hold charges where they are placed. Connecting a charged conductor to the earth so that its charge drains away is called **earthing** or grounding.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of charging a metal sphere by induction in order.",
              items: [
                "Bring a negatively charged rod near a neutral metal sphere on an insulating stand.",
                "Free electrons in the sphere are pushed to the far side; the near side is left positive.",
                "Touch the far side to earth with a wire; the pushed electrons flow away to earth.",
                "Remove the earth wire while the rod is still held near.",
                "Take the rod away; the positive charge spreads evenly over the sphere.",
              ],
              explain: "In induction the rod never touches the sphere, so the rod keeps its charge. The sphere ends up with charge **opposite** to the rod. The earth wire must be removed before the rod, or the electrons would flow back.",
            },
          },
          {
            type: "table",
            headers: ["Property", "What it means", "Example"],
            rows: [
              ["Additivity", "Charge is a scalar; the total charge of a body is the algebraic sum of its charges.", t`$+3\ \mu\text{C}$ and $-5\ \mu\text{C}$ together give $-2\ \mu\text{C}$.`],
              ["Conservation", "The total charge of an isolated system never changes. Charge is only moved or created in equal and opposite pairs.", "Rubbing gives the rod and the cloth equal and opposite charges."],
              ["Quantisation", t`Every free charge is a whole-number multiple of the basic charge $e$.`, t`No body can carry $2.5e$; $e = 1.6 \times 10^{-19}$ C.`],
            ],
          },
          {
            type: "formula",
            tex: t`q = \pm\, n e, \qquad n = 1, 2, 3, \ldots, \qquad e = 1.6 \times 10^{-19}\ \text{C}`,
            caption: "Quantisation of charge. At everyday scales (microcoulombs, n of order 10¹³) the steps are so tiny that charge behaves as if it were continuous.",
          },
          {
            type: "example",
            title: "Counting electrons",
            problem: t`A polythene strip rubbed with wool acquires a charge of $-3.2 \times 10^{-7}$ C. How many electrons were transferred, and what mass of electrons moved? (Take $e = 1.6 \times 10^{-19}$ C, $m_e = 9.1 \times 10^{-31}$ kg.)`,
            steps: [
              t`The strip is negative, so it **gained** electrons from the wool.`,
              t`$n = \dfrac{q}{e} = \dfrac{3.2 \times 10^{-7}}{1.6 \times 10^{-19}} = 2 \times 10^{12}$ electrons.`,
              t`Mass moved $= n\,m_e = 2 \times 10^{12} \times 9.1 \times 10^{-31} = 1.82 \times 10^{-18}$ kg.`,
            ],
            answer: t`$2 \times 10^{12}$ electrons moved from the wool to the strip, a mass of only $1.82 \times 10^{-18}$ kg.`,
          },
          {
            type: "heading",
            text: "Coulomb's law",
          },
          {
            type: "formula",
            tex: t`F = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r^2}, \qquad \frac{1}{4\pi\varepsilon_0} = k \approx 9 \times 10^{9}\ \text{N m}^2\,\text{C}^{-2}, \qquad \varepsilon_0 = 8.854 \times 10^{-12}\ \text{C}^2\,\text{N}^{-1}\,\text{m}^{-2}`,
            caption: "The force between two point charges at rest acts along the line joining them. It is repulsive for like charges and attractive for unlike charges.",
          },
          {
            type: "text",
            md: t`In vector form, the force on $q_2$ due to $q_1$ is $\vec F_{21} = k\,\dfrac{q_1 q_2}{r_{21}^2}\,\hat r_{21}$, where $\hat r_{21}$ points from $q_1$ to $q_2$. Then $\vec F_{12} = -\vec F_{21}$, so Coulomb forces obey Newton's third law.

In a medium of **dielectric constant** (relative permittivity) $K$, the force becomes $F/K$, because $\varepsilon_0$ is replaced by $\varepsilon = K\varepsilon_0$. Water has $K \approx 80$.

**Superposition principle:** when several charges act on one charge, the force from each pair is found by Coulomb's law as if the others were absent, and the net force is the **vector sum** $\vec F_1 = \vec F_{12} + \vec F_{13} + \ldots + \vec F_{1n}$.

The electric force between two protons is about $10^{36}$ times their gravitational attraction, which is why electric forces hold atoms, molecules and solids together.`,
          },
          {
            type: "example",
            title: "Net force from two charges",
            problem: t`Charges $q_A = +4\ \mu\text{C}$ and $q_B = +1\ \mu\text{C}$ sit on the x-axis at $x = 0$ and $x = 0.3$ m. A charge $q_C = -2\ \mu\text{C}$ is placed at $x = 0.1$ m. Find the net force on $q_C$. (Take $k = 9 \times 10^9$ SI units.)`,
            steps: [
              t`Force from A (distance 0.1 m, attraction, towards A, i.e. along $-x$): $F_A = \dfrac{9 \times 10^9 \times 4 \times 10^{-6} \times 2 \times 10^{-6}}{(0.1)^2} = \dfrac{0.072}{0.01} = 7.2$ N.`,
              t`Force from B (distance 0.2 m, attraction, towards B, i.e. along $+x$): $F_B = \dfrac{9 \times 10^9 \times 1 \times 10^{-6} \times 2 \times 10^{-6}}{(0.2)^2} = \dfrac{0.018}{0.04} = 0.45$ N.`,
              t`The forces are along one line in opposite directions: $F_{net} = 7.2 - 0.45 = 6.75$ N along $-x$.`,
            ],
            answer: "6.75 N on the −2 μC charge, directed towards the +4 μC charge (along −x).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Two point charges repel with force F. Each charge is doubled and the distance between them is halved. The new force is how many times F?",
                answer: 16,
                explain: t`$F \propto \dfrac{q_1 q_2}{r^2}$: the charges give $2 \times 2 = 4$, halving $r$ gives $1/(1/2)^2 = 4$, so the force becomes $16F$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If a third charge is brought near two charges, the force that one charge exerts on the other changes.",
            right: "The force between any two charges depends only on those two charges and their separation. The third charge adds its own force; the net force on each charge changes, but each pair force stays the same.",
            why: "Learners mix up 'force between two charges' with 'net force on a charge'. The superposition principle says pair forces are independent, so the total is just their vector sum.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State Coulomb's law with all three parts: proportional to the product of charges, inversely proportional to the square of the distance, along the line joining them. Write the vector form with the unit vector direction clearly. In numericals, convert μC to C and cm to m first; most lost marks come from missed powers of ten.`,
          },
          {
            type: "keypoints",
            items: [
              "Charging by rubbing transfers electrons; the body that gains electrons is negative.",
              t`Charge is additive, conserved and quantised: $q = ne$, $e = 1.6 \times 10^{-19}$ C.`,
              t`Coulomb's law: $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2}$, with $k = 9 \times 10^9$ N m² C⁻²; in a medium the force is divided by $K$.`,
              "Superposition: the net force on a charge is the vector sum of the separate pair forces.",
              "Induction gives a conductor a charge opposite to the inducing charge without contact.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is repulsion, not attraction, the sure test of charge?", back: "A charged body also attracts neutral light objects by shifting charges inside them. Only two charged bodies of the same sign repel." },
          { front: "Quantisation of charge", back: "Every charge is an integer multiple of e: q = ne, with e = 1.6 × 10⁻¹⁹ C." },
          { front: "Conservation of charge", back: "The total charge of an isolated system stays constant; charge can only be transferred or created in equal and opposite amounts." },
          { front: "Value of 1/(4πε₀)", back: "About 9 × 10⁹ N m² C⁻²; ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²." },
          { front: "Coulomb force in a medium of dielectric constant K", back: "F_medium = F_vacuum / K, because ε₀ is replaced by Kε₀." },
          { front: "Superposition principle for electric forces", back: "Net force on a charge = vector sum of the forces from each other charge, each found as if the rest were absent." },
          { front: "Charging by induction: sign of the final charge", back: "Opposite to the charge on the inducing rod; the rod keeps its own charge." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A glass rod rubbed with silk becomes positively charged because it:",
            options: ["gains protons from the silk", "loses electrons to the silk", "gains electrons from the silk", "loses protons to the silk"],
            answer: 1,
            explain: "Only electrons move in rubbing. Losing electrons leaves the glass with a net positive charge; protons stay bound in nuclei.",
          },
          {
            kind: "numeric",
            q: "A body gains 5 × 10¹³ electrons. What is the magnitude of its charge in μC? (e = 1.6 × 10⁻¹⁹ C)",
            answer: 8,
            unit: "μC",
            explain: t`$q = ne = 5 \times 10^{13} \times 1.6 \times 10^{-19} = 8 \times 10^{-6}$ C $= 8\ \mu\text{C}$ (negative).`,
          },
          {
            kind: "truefalse",
            q: "A charge of 2.4 × 10⁻¹⁹ C can exist on an isolated body.",
            answer: false,
            explain: t`$2.4 \times 10^{-19} / 1.6 \times 10^{-19} = 1.5$, not a whole number, so it breaks quantisation.`,
          },
          {
            kind: "numeric",
            q: "Find the force (in N) between charges of 1 μC and 2 μC placed 30 cm apart in air. (k = 9 × 10⁹ N m² C⁻²)",
            answer: 0.2,
            tolerance: 0.001,
            unit: "N",
            explain: t`$F = \dfrac{9 \times 10^9 \times 1 \times 10^{-6} \times 2 \times 10^{-6}}{(0.3)^2} = \dfrac{0.018}{0.09} = 0.2$ N.`,
          },
          {
            kind: "mcq",
            q: "Two charges exert a force of 8 N on each other in air. They are placed at the same distance in a liquid of dielectric constant 4. The force becomes:",
            options: ["32 N", "8 N", "2 N", "0.5 N"],
            answer: 2,
            explain: "The force in a medium is F/K = 8/4 = 2 N.",
            difficulty: 1,
          },
          {
            kind: "multi",
            q: "Which statements about electric charge are correct?",
            options: [
              "Charge is a scalar and adds algebraically",
              "The total charge of an isolated system stays constant",
              "The charge on any body is an integer multiple of e",
              "The charge on a body grows as its speed grows",
            ],
            answers: [0, 1, 2],
            explain: "Additivity, conservation and quantisation are the three basic properties. Charge does not depend on speed (it is invariant), unlike relativistic mass.",
          },
          {
            kind: "mcq",
            q: "Three charges lie on a line. The force that charge 1 exerts on charge 2 is 3 N. Charge 3 is now moved closer to charge 2. The force of charge 1 on charge 2:",
            options: ["increases", "decreases", "stays 3 N", "becomes zero"],
            answer: 2,
            explain: "By superposition, the pair force between 1 and 2 depends only on their charges and separation. The net force on 2 changes, but not this pair force.",
            difficulty: 2,
            hint: "Separate 'force by 1 on 2' from 'net force on 2'.",
          },
          {
            kind: "fill",
            q: "Quantisation of charge can be ignored for large-scale charges because the basic charge e is very ___.",
            answer: ["small", "tiny"],
            explain: "A charge of 1 μC already contains about 6 × 10¹² electrons, so the steps of e are far too small to notice.",
          },
        ],
      },
      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-electric-field-dipole",
        title: "Electric Field, Field Lines and the Dipole",
        summary: "Electric field of a point charge and of a system of charges, field lines, continuous charge distributions, the electric dipole, its field on the axis and the equatorial line, and a dipole in a uniform field.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`A charge changes the space around it. Any other charge placed there feels a force. This condition of space is the **electric field**. To measure it, place a tiny positive **test charge** $q_0$ at the point (tiny, so it does not disturb the charges that create the field) and divide the force by it:

$\vec E = \lim_{q_0 \to 0} \dfrac{\vec F}{q_0}$. The SI unit is N C⁻¹ (equal to V m⁻¹). The field is a vector: a positive charge is pushed along $\vec E$, a negative charge against it.`,
          },
          {
            type: "formula",
            tex: t`\vec E = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,\hat r, \qquad \vec E_{net} = \vec E_1 + \vec E_2 + \cdots + \vec E_n`,
            caption: "Field of a point charge (radially outward for q > 0, inward for q < 0) and the superposition of fields from many charges.",
          },
          {
            type: "example",
            title: "Field midway between two charges",
            problem: t`Charges $+5\ \mu\text{C}$ and $-5\ \mu\text{C}$ are 20 cm apart in air. Find the electric field at the midpoint. ($k = 9 \times 10^9$ SI units)`,
            steps: [
              t`Distance of the midpoint from each charge $= 0.1$ m.`,
              t`Field of each charge: $E = \dfrac{9 \times 10^9 \times 5 \times 10^{-6}}{(0.1)^2} = \dfrac{4.5 \times 10^4}{0.01} = 4.5 \times 10^6$ N C⁻¹.`,
              t`The field of $+5\ \mu\text{C}$ points away from it (towards $-5\ \mu\text{C}$). The field of $-5\ \mu\text{C}$ points towards it, the same way. So the two add.`,
              t`$E_{net} = 2 \times 4.5 \times 10^6 = 9 \times 10^6$ N C⁻¹.`,
            ],
            answer: t`$9 \times 10^6$ N C⁻¹, pointing from the positive towards the negative charge.`,
          },
          {
            type: "heading",
            text: "Electric field lines",
          },
          {
            type: "list",
            items: [
              "A field line is a curve whose **tangent** at any point gives the direction of the field there.",
              "Lines start on positive charges and end on negative charges (or go to or come from infinity for a single charge).",
              "Two field lines never cross; if they did, the field would have two directions at one point.",
              "Lines are crowded where the field is strong and spread out where it is weak.",
              "In an electrostatic field, lines are continuous outside charges and never form closed loops (the field is conservative).",
            ],
          },
          {
            type: "text",
            md: t`**Continuous charge distributions.** When charge is spread out, we use densities: linear charge density $\lambda = \dfrac{\Delta q}{\Delta l}$ (C m⁻¹) for a wire, surface density $\sigma = \dfrac{\Delta q}{\Delta S}$ (C m⁻²) for a sheet, and volume density $\rho = \dfrac{\Delta q}{\Delta V}$ (C m⁻³) for a solid. Each small piece is treated as a point charge and the fields are added (integrated): $\vec E = k\displaystyle\int \dfrac{dq}{r^2}\,\hat r$.`,
          },
          {
            type: "heading",
            text: "The electric dipole",
          },
          {
            type: "text",
            md: t`An **electric dipole** is a pair of equal and opposite charges $+q$ and $-q$ separated by a small distance $2a$. Its **dipole moment** is $\vec p = q \times 2a$, pointing from $-q$ to $+q$ along the axis. Unit: C m. A water molecule has a permanent dipole moment.

**Field on the axis** at distance $r$ from the centre (on the $+q$ side):
1. Field of $+q$: $\dfrac{kq}{(r-a)^2}$ along $\vec p$; field of $-q$: $\dfrac{kq}{(r+a)^2}$ against $\vec p$.
2. Net: $E = kq\left[\dfrac{1}{(r-a)^2} - \dfrac{1}{(r+a)^2}\right] = \dfrac{kq \cdot 4ar}{(r^2-a^2)^2}$.
3. With $p = 2aq$: $E = \dfrac{2kpr}{(r^2-a^2)^2}$, and for $r \gg a$, $E = \dfrac{2kp}{r^3}$ along $\vec p$.

**Field on the equatorial line** at distance $r$: the two fields have equal size $\dfrac{kq}{r^2+a^2}$; their components along the line cancel and those parallel to the axis add to $E = \dfrac{kp}{(r^2+a^2)^{3/2}}$, which for $r \gg a$ is $\dfrac{kp}{r^3}$, directed **opposite** to $\vec p$.`,
          },
          {
            type: "formula",
            tex: t`E_{axial} = \frac{1}{4\pi\varepsilon_0}\,\frac{2p}{r^3}, \qquad E_{equatorial} = \frac{1}{4\pi\varepsilon_0}\,\frac{p}{r^3}, \qquad \vec\tau = \vec p \times \vec E,\ \ \tau = pE\sin\theta`,
            caption: "Far from a dipole the field falls as 1/r³, faster than the 1/r² of a single charge. In a uniform field the net force on a dipole is zero, but a torque turns it to line up with E.",
          },
          {
            type: "example",
            title: "Torque on a dipole",
            problem: t`Charges $\pm 4\ \mu\text{C}$ are 2 mm apart. The dipole is placed in a uniform field of $5 \times 10^4$ N C⁻¹ with its axis at 30° to the field. Find the dipole moment, the torque and the net force.`,
            steps: [
              t`$p = q \times 2a = 4 \times 10^{-6} \times 2 \times 10^{-3} = 8 \times 10^{-9}$ C m.`,
              t`$\tau = pE\sin\theta = 8 \times 10^{-9} \times 5 \times 10^4 \times \sin 30^\circ = 4 \times 10^{-4} \times 0.5 = 2 \times 10^{-4}$ N m.`,
              t`The forces $q\vec E$ and $-q\vec E$ are equal and opposite, so the net force is zero.`,
            ],
            answer: t`$p = 8 \times 10^{-9}$ C m, $\tau = 2 \times 10^{-4}$ N m (turning the dipole towards the field), net force zero.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "At a point on the equatorial line of a short dipole, the electric field is:",
                options: ["along the dipole moment", "opposite to the dipole moment", "perpendicular to the axis", "zero"],
                answer: 1,
                explain: "The components along the equatorial line cancel; what remains is parallel to the axis and points from +q towards −q, i.e. opposite to p.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A field line is the path along which a free positive charge will move.",
            right: "The tangent to a field line gives the direction of the force (and so of the acceleration), not of the velocity. A charge follows a field line only if the line is straight and the charge starts from rest.",
            why: "In a curved field a moving charge has inertia, so its path bends less sharply than the field line, just as a stone swung on a string flies off along a tangent.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each quantity with its SI unit.",
              pairs: [
                ["Electric field", "N C⁻¹ (or V m⁻¹)"],
                ["Dipole moment", "C m"],
                ["Linear charge density", "C m⁻¹"],
                ["Surface charge density", "C m⁻²"],
                ["Torque on a dipole", "N m"],
              ],
              explain: "Each unit follows from its definition: E = F/q, p = q × 2a, λ = q/l, σ = q/S and τ = pE sin θ.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`$\vec E = \vec F / q_0$; for a point charge $E = kq/r^2$, radial.`,
              "Field lines start on + and end on − charges, never cross and never form closed loops in electrostatics.",
              t`Dipole moment $\vec p = q(2a)$ from $-q$ to $+q$; far field: $2kp/r^3$ on the axis (along p), $kp/r^3$ on the equator (against p).`,
              t`In a uniform field: net force zero, torque $\vec\tau = \vec p \times \vec E$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Definition of electric field", back: "Force per unit positive test charge, E = F/q₀ with q₀ → 0. Unit N C⁻¹ = V m⁻¹." },
          { front: "Direction of dipole moment", back: "From −q to +q along the axis; magnitude p = q × 2a." },
          { front: "Axial field of a short dipole", back: "E = (1/4πε₀)(2p/r³), along p." },
          { front: "Equatorial field of a short dipole", back: "E = (1/4πε₀)(p/r³), opposite to p." },
          { front: "Dipole in a uniform field", back: "Net force zero; torque τ = pE sin θ tends to align p with E." },
          { front: "Why can field lines not cross?", back: "At the crossing the field would have two directions at one point, which is impossible." },
          { front: "λ, σ and ρ", back: "Charge per unit length, per unit area and per unit volume." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the electric field at 30 cm from a point charge of 3 μC in air, in units of 10⁵ N C⁻¹. (k = 9 × 10⁹ SI)",
            answer: 3,
            unit: "× 10⁵ N C⁻¹",
            explain: t`$E = \dfrac{9 \times 10^9 \times 3 \times 10^{-6}}{(0.3)^2} = \dfrac{2.7 \times 10^4}{0.09} = 3 \times 10^5$ N C⁻¹.`,
          },
          {
            kind: "mcq",
            q: "A dipole is placed in a uniform electric field, not along it. It experiences:",
            options: ["a net force and a torque", "a net force only", "a torque only", "neither force nor torque"],
            answer: 2,
            explain: "The forces +qE and −qE cancel, but they act at different points and form a couple, giving torque pE sin θ.",
          },
          {
            kind: "mcq",
            q: "At the same large distance r from a short dipole, the ratio of the axial field to the equatorial field is:",
            options: ["1 : 1", "2 : 1", "1 : 2", "4 : 1"],
            answer: 1,
            explain: t`$E_{ax} = 2kp/r^3$, $E_{eq} = kp/r^3$, so the ratio is 2 : 1.`,
          },
          {
            kind: "numeric",
            q: "A dipole of moment 3 × 10⁻⁹ C m is in a uniform field of 2 × 10⁵ N C⁻¹. What is the maximum torque on it, in units of 10⁻⁴ N m?",
            answer: 6,
            unit: "× 10⁻⁴ N m",
            explain: t`Maximum torque at $\theta = 90^\circ$: $\tau = pE = 3 \times 10^{-9} \times 2 \times 10^5 = 6 \times 10^{-4}$ N m.`,
          },
          {
            kind: "mcq",
            q: "Far from a dipole, the electric field varies with distance as:",
            options: [t`$1/r$`, t`$1/r^2$`, t`$1/r^3$`, t`$1/r^4$`],
            answer: 2,
            explain: "The fields of +q and −q almost cancel; what is left falls as 1/r³.",
          },
          {
            kind: "multi",
            q: "Which statements about electrostatic field lines are true?",
            options: [
              "They never cross each other",
              "They form closed loops",
              "They start on positive and end on negative charges",
              "They are closer together where the field is stronger",
            ],
            answers: [0, 2, 3],
            explain: "Electrostatic field lines are never closed loops, because the field is conservative (no work in a closed path).",
          },
          {
            kind: "mcq",
            q: "An electron and a proton are released from rest in the same uniform electric field. Then:",
            options: [
              "both have equal accelerations in the same direction",
              "they feel equal forces in opposite directions; the electron's acceleration is much larger",
              "the proton has the larger acceleration",
              "both feel equal forces in the same direction",
            ],
            answer: 1,
            explain: "Both charges have magnitude e, so F = eE is the same size, but opposite in direction. a = F/m, and the electron is about 1836 times lighter.",
            difficulty: 2,
            hint: "Same |q|, different m.",
          },
          {
            kind: "truefalse",
            q: "The electric field on the equatorial line of a dipole is zero because the two charges are equally far away.",
            answer: false,
            explain: "The equal fields have opposite components along the equatorial line, which cancel, but their components parallel to the axis add. The field is kp/r³, not zero. (The potential there is zero.)",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 3 ---------------- */
      {
        slug: "c12-flux-gauss-law",
        title: "Electric Flux and Gauss's Law",
        summary: "Area vector and electric flux, Gauss's law, and its use to find the field of an infinite line charge, an infinite plane sheet and a thin spherical shell.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Hold a ring in a stream of water: the amount of water through it depends on the speed, the ring's area and how the ring is tilted. **Electric flux** measures the same idea for field lines.

A small area is a vector $\Delta\vec S$: its size is the area and its direction is along the **normal** (for a closed surface, the outward normal). The flux through it is $\Delta\phi = \vec E \cdot \Delta\vec S = E\,\Delta S\cos\theta$. Flux is a scalar; its unit is N m² C⁻¹ (or V m). Lines leaving a closed surface give positive flux; lines entering give negative flux.`,
          },
          {
            type: "formula",
            tex: t`\phi = \oint \vec E \cdot d\vec S = \frac{q_{enclosed}}{\varepsilon_0}`,
            caption: "Gauss's law: the total flux through any closed surface equals 1/ε₀ times the net charge enclosed by it.",
          },
          {
            type: "text",
            md: t`Points to remember about Gauss's law:

1. It holds for **any** closed surface (the "Gaussian surface"), of any shape or size.
2. Charges outside the surface give **zero net flux** (every line that enters also leaves), but they still affect the field $\vec E$ at points on the surface.
3. The $\vec E$ in the law is the total field due to all charges, inside and outside.
4. It is most useful when symmetry makes $E$ constant over parts of the surface.`,
          },
          {
            type: "example",
            title: "Flux through a cube",
            problem: t`A point charge of $8.85\ \mu\text{C}$ sits at the centre of a cube. Find the flux through the whole cube and through one face. ($\varepsilon_0 = 8.85 \times 10^{-12}$ C² N⁻¹ m⁻²)`,
            steps: [
              t`Total flux $\phi = \dfrac{q}{\varepsilon_0} = \dfrac{8.85 \times 10^{-6}}{8.85 \times 10^{-12}} = 1.0 \times 10^6$ N m² C⁻¹.`,
              t`By symmetry the six faces share it equally: $\dfrac{10^6}{6} \approx 1.67 \times 10^5$ N m² C⁻¹ per face.`,
            ],
            answer: t`$1.0 \times 10^6$ N m² C⁻¹ through the cube; about $1.67 \times 10^5$ N m² C⁻¹ through each face. The size of the cube does not matter.`,
          },
          {
            type: "heading",
            text: "Applications of Gauss's law",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Infinite straight line charge** (density $\lambda$): by symmetry $\vec E$ is radial and has the same size at the same distance $r$. Take a cylinder of radius $r$ and length $l$ around the wire.`,
              t`The flat ends give no flux ($\vec E$ lies along them). The curved surface gives $E \times 2\pi r l$.`,
              t`Charge enclosed $= \lambda l$. Gauss: $E \cdot 2\pi r l = \dfrac{\lambda l}{\varepsilon_0}$, so $E = \dfrac{\lambda}{2\pi\varepsilon_0 r}$, radially outward for $\lambda > 0$.`,
            ],
          },
          {
            type: "text",
            md: t`**Infinite plane sheet** (density $\sigma$): $\vec E$ is normal to the sheet on both sides. Take a cylinder (pillbox) of end area $A$ piercing the sheet. Only the two ends give flux: $2EA = \dfrac{\sigma A}{\varepsilon_0}$, so $E = \dfrac{\sigma}{2\varepsilon_0}$, the **same at every distance**. For two large parallel sheets with $+\sigma$ and $-\sigma$, the fields add between them to $\sigma/\varepsilon_0$ and cancel outside.

**Thin spherical shell** (radius $R$, charge $q$): take a concentric sphere of radius $r$. Outside ($r > R$): $E \cdot 4\pi r^2 = q/\varepsilon_0$, so $E = \dfrac{q}{4\pi\varepsilon_0 r^2}$, as if all the charge were at the centre. Inside ($r < R$): no charge is enclosed, so $E = 0$.`,
          },
          {
            type: "table",
            headers: ["Charge distribution", "Gaussian surface", "Field", "Varies as"],
            rows: [
              [t`Infinite line, $\lambda$`, "coaxial cylinder", t`$\dfrac{\lambda}{2\pi\varepsilon_0 r}$`, t`$1/r$`],
              [t`Infinite sheet, $\sigma$`, "pillbox through the sheet", t`$\dfrac{\sigma}{2\varepsilon_0}$`, "constant"],
              [t`Thin shell, $q$, outside`, "concentric sphere", t`$\dfrac{q}{4\pi\varepsilon_0 r^2}$`, t`$1/r^2$`],
              ["Thin shell, inside", "concentric sphere", "0", "—"],
            ],
          },
          {
            type: "example",
            title: "Field of a long charged wire",
            problem: t`A long straight wire carries a uniform charge of $2 \times 10^{-7}$ C m⁻¹. Find the field 10 cm from it. ($\frac{1}{4\pi\varepsilon_0} = 9 \times 10^9$ SI)`,
            steps: [
              t`$E = \dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{2k\lambda}{r}$, since $\dfrac{1}{2\pi\varepsilon_0} = 2k$.`,
              t`$E = \dfrac{2 \times 9 \times 10^9 \times 2 \times 10^{-7}}{0.1} = \dfrac{3600}{0.1} = 3.6 \times 10^4$ N C⁻¹.`,
            ],
            answer: t`$3.6 \times 10^4$ N C⁻¹, directed radially away from the wire.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A uniform field of 200 N C⁻¹ points along x. A flat square of area 0.1 m² has its normal at 60° to the x-axis. What is the flux through it (in N m² C⁻¹)?",
                answer: 10,
                explain: t`$\phi = EA\cos\theta = 200 \times 0.1 \times \cos 60^\circ = 10$ N m² C⁻¹.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The net flux through a closed surface is zero, so the electric field must be zero everywhere on that surface.",
            right: "Zero net flux only means zero net charge inside. The field on the surface can be large, due to charges outside; the inward and outward flux simply cancel.",
            why: "Gauss's law links flux to enclosed charge, not field to enclosed charge. Field and flux are different things; only with symmetry can one be turned into the other.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A charge +q sits just outside a closed balloon. Net flux through it?",
              emoji: "🎈",
              options: [t`$q/\varepsilon_0$`, "zero", t`$q/2\varepsilon_0$`, "depends on the balloon's shape"],
              answer: 1,
              trap: 2,
              explain: "Every field line from the outside charge that enters the balloon also leaves it, so the net flux is zero, whatever the shape. Only enclosed charge counts.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "For the Gauss's law derivations (line, sheet, shell), marks go for: a labelled sketch of the Gaussian surface, stating why some parts give zero flux, the charge enclosed, and the final result with its direction. Say clearly that the field is constant over the chosen surface because of symmetry.",
          },
          {
            type: "keypoints",
            items: [
              t`Flux $\phi = \vec E \cdot \vec S = ES\cos\theta$; unit N m² C⁻¹.`,
              t`Gauss's law: $\oint \vec E \cdot d\vec S = q_{enc}/\varepsilon_0$ for any closed surface.`,
              t`Line charge: $E = \lambda/2\pi\varepsilon_0 r$. Plane sheet: $E = \sigma/2\varepsilon_0$, independent of distance.`,
              t`Thin shell: $E = kq/r^2$ outside, zero inside.`,
              "Charges outside a closed surface give zero net flux but still contribute to the field.",
            ],
          },
        ],
        flashcards: [
          { front: "Electric flux through a flat area", back: "φ = E·S = ES cos θ, where θ is the angle between E and the normal. Unit N m² C⁻¹." },
          { front: "Gauss's law", back: "Total flux through any closed surface = q_enclosed / ε₀." },
          { front: "Field of an infinite line charge", back: "E = λ/(2πε₀r), radial; varies as 1/r." },
          { front: "Field of an infinite plane sheet", back: "E = σ/(2ε₀), normal to the sheet, the same at every distance." },
          { front: "Field inside a uniformly charged thin spherical shell", back: "Zero (no charge enclosed by a sphere inside it)." },
          { front: "Field between two oppositely charged parallel sheets", back: "σ/ε₀ between them, zero outside." },
          { front: "Flux through one face of a cube with q at its centre", back: "q/(6ε₀)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "The net flux out of a closed surface is 2 × 10⁵ N m² C⁻¹. What charge (in μC) does it enclose? (ε₀ = 8.85 × 10⁻¹² SI)",
            answer: 1.77,
            tolerance: 0.01,
            unit: "μC",
            explain: t`$q = \varepsilon_0 \phi = 8.85 \times 10^{-12} \times 2 \times 10^5 = 1.77 \times 10^{-6}$ C $= 1.77\ \mu\text{C}$.`,
          },
          {
            kind: "mcq",
            q: "The electric field at a point inside a uniformly charged thin spherical shell is:",
            options: ["the same as at the surface", "zero", "inversely proportional to r²", "directly proportional to r"],
            answer: 1,
            explain: "A Gaussian sphere inside the shell encloses no charge, and symmetry makes E the same everywhere on it, so E = 0.",
          },
          {
            kind: "mcq",
            q: "How does the field of a very large uniformly charged plane sheet depend on the distance r from it?",
            options: [t`$E \propto 1/r^2$`, t`$E \propto 1/r$`, "E does not depend on r", t`$E \propto r$`],
            answer: 2,
            explain: t`$E = \sigma/2\varepsilon_0$ has no $r$ in it.`,
          },
          {
            kind: "truefalse",
            q: "The total flux through a closed surface changes if a charge is placed outside it.",
            answer: false,
            explain: "Outside charges give zero net flux; only the enclosed charge decides the total flux.",
          },
          {
            kind: "numeric",
            q: "A large sheet has σ = 8.85 × 10⁻⁷ C m⁻². What is the field near it, in N C⁻¹? (ε₀ = 8.85 × 10⁻¹² SI)",
            answer: 50000,
            tolerance: 1,
            unit: "N C⁻¹",
            explain: t`$E = \dfrac{\sigma}{2\varepsilon_0} = \dfrac{8.85 \times 10^{-7}}{2 \times 8.85 \times 10^{-12}} = 5 \times 10^4$ N C⁻¹.`,
          },
          {
            kind: "mcq",
            q: "The distance from a long charged wire is doubled. The electric field becomes:",
            options: ["twice as large", "half as large", "one-quarter as large", "unchanged"],
            answer: 1,
            explain: t`$E = \lambda/(2\pi\varepsilon_0 r) \propto 1/r$, so doubling $r$ halves $E$.`,
          },
          {
            kind: "multi",
            q: "For which of these can Gauss's law alone give the field easily?",
            options: ["an infinite uniformly charged wire", "a large uniformly charged plane sheet", "a uniformly charged thin spherical shell", "a short charged rod of finite length"],
            answers: [0, 1, 2],
            explain: "Gauss's law always holds, but it gives E directly only when symmetry makes E constant on a chosen surface. A finite rod lacks that symmetry.",
            difficulty: 2,
            hint: "Gauss's law is always true; ask when it is useful.",
          },
          {
            kind: "mcq",
            q: "A closed surface encloses charges +3 μC, −5 μC and +2 μC. A charge of +7 μC lies outside. The net flux through the surface is:",
            options: [t`$7\ \mu\text{C}/\varepsilon_0$`, t`$10\ \mu\text{C}/\varepsilon_0$`, "zero", t`$17\ \mu\text{C}/\varepsilon_0$`],
            answer: 2,
            explain: "Enclosed charge = 3 − 5 + 2 = 0, so the net flux is zero. The outside charge does not count.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-charges-fields-exam-edge",
        title: "Exam edge: Charges and Fields",
        summary: "What JEE, NEET, KCET and COMEDK ask from electric charges and fields, the results worth remembering, and graded problems up to JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What it asks most from this chapter"],
            rows: [
              ["KCET / COMEDK", "Direct Coulomb's law and field numericals, force in a medium, quantisation, dipole torque, flux through a cube face, Gauss's law results."],
              ["NEET", "Ratio and proportion questions on Coulomb's law, field lines, dipole fields, Gauss's law for shells and sheets, charged balls hanging from threads."],
              ["JEE Main", "Equilibrium of three charges, superposition in 2-D, field of a ring or arc, flux through parts of a cube, dipole in a field, graphs of E against r."],
              ["JEE Advanced", "Non-uniform charge densities with Gauss's law, oscillation of charges, cavities in charged spheres, multi-concept problems mixing mechanics and electrostatics."],
            ],
          },
          {
            type: "list",
            items: [
              t`**Neutral point** of two like charges $q_1, q_2$ a distance $d$ apart: between them, at $x = \dfrac{d}{1 + \sqrt{q_2/q_1}}$ from $q_1$. For unlike charges it lies **outside**, beyond the smaller charge.`,
              t`**Ring** of charge $Q$, radius $R$, on its axis at distance $x$: $E = \dfrac{kQx}{(R^2 + x^2)^{3/2}}$; zero at the centre, maximum at $x = R/\sqrt{2}$.`,
              t`**Arc / semicircle**: a uniformly charged semicircular ring of charge $Q$ gives $E = \dfrac{2kQ}{\pi R^2}$ at its centre.`,
              t`**Charge at a cube corner**: imagine 8 cubes around that corner; together they enclose $q$, so one cube gets $\dfrac{q}{8\varepsilon_0}$. The 3 faces touching the charge carry no flux, so each of the 3 far faces carries $\dfrac{q}{24\varepsilon_0}$.`,
              t`**Solid sphere of uniform charge**: $E = \dfrac{kQr}{R^3}$ inside (grows linearly), $\dfrac{kQ}{r^2}$ outside; maximum at the surface.`,
            ],
          },
          {
            type: "formula",
            tex: t`E_{ring}(x) = \frac{1}{4\pi\varepsilon_0}\,\frac{Qx}{(R^2 + x^2)^{3/2}} \quad\Rightarrow\quad E \approx \frac{1}{4\pi\varepsilon_0}\,\frac{Qx}{R^3}\ \ (x \ll R)`,
            caption: "Near the centre the ring's field grows in proportion to x. A charge of opposite sign then feels a restoring force, giving simple harmonic motion.",
          },
          {
            type: "example",
            title: "KCET level: where is the net force zero?",
            problem: t`Charges $+q$ and $+4q$ are fixed 30 cm apart. Where must a third charge be placed so that it feels no net force? What charge, placed there, would make all three charges be in equilibrium?`,
            steps: [
              t`For like charges, the point lies between them. Let it be $x$ from $+q$: $\dfrac{kq}{x^2} = \dfrac{k(4q)}{(0.3 - x)^2}$.`,
              t`Taking square roots: $0.3 - x = 2x$, so $x = 0.1$ m (10 cm from $+q$, 20 cm from $+4q$).`,
              t`For $+q$ to also be in equilibrium, the third charge $Q$ must pull it with the same force that $+4q$ pushes it: $\dfrac{k|Q|q}{(0.1)^2} = \dfrac{k(4q)q}{(0.3)^2}$, giving $|Q| = \dfrac{4q}{9}$, and $Q$ must be negative.`,
            ],
            answer: t`10 cm from $+q$ on the line between them; a charge $-\dfrac{4q}{9}$ there puts the whole system in equilibrium (an unstable one).`,
          },
          {
            type: "example",
            title: "NEET / JEE Main level: hanging charged balls",
            problem: t`Two identical small balls, each of mass 0.9 g and charge $q$, hang from one point on silk threads 50 cm long. In equilibrium each thread makes 37° with the vertical. Find $q$. (Take $g = 10$ m s⁻², $k = 9 \times 10^9$ SI, $\sin 37^\circ = 0.6$, $\tan 37^\circ = 0.75$.)`,
            steps: [
              t`Separation: $r = 2l\sin 37^\circ = 2 \times 0.5 \times 0.6 = 0.6$ m.`,
              t`Each ball is in equilibrium under $T$, $mg$ and $F_e$: $\tan\theta = \dfrac{F_e}{mg}$, so $F_e = 0.9 \times 10^{-3} \times 10 \times 0.75 = 6.75 \times 10^{-3}$ N.`,
              t`$F_e = \dfrac{kq^2}{r^2}$ gives $q^2 = \dfrac{6.75 \times 10^{-3} \times 0.36}{9 \times 10^9} = 2.7 \times 10^{-13}$.`,
              t`$q = \sqrt{2.7 \times 10^{-13}} = \sqrt{27 \times 10^{-14}} \approx 5.2 \times 10^{-7}$ C.`,
            ],
            answer: t`$q \approx 5.2 \times 10^{-7}$ C $\approx 0.52\ \mu\text{C}$ on each ball.`,
          },
          {
            type: "example",
            title: "JEE Main level: flux through a cube face",
            problem: t`A point charge $q$ is placed exactly at one corner of a cube. Find the flux through (a) the whole cube, (b) a face not touching the corner, (c) a face touching the corner.`,
            steps: [
              t`Eight identical cubes fit around that corner and together enclose $q$ completely, so each cube gets $\dfrac{q}{8\varepsilon_0}$.`,
              t`The field from $q$ runs along the three faces that meet at the corner, so their flux is zero.`,
              t`The remaining three far faces share $\dfrac{q}{8\varepsilon_0}$ equally: $\dfrac{q}{24\varepsilon_0}$ each.`,
            ],
            answer: t`(a) $\dfrac{q}{8\varepsilon_0}$, (b) $\dfrac{q}{24\varepsilon_0}$, (c) zero.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: oscillation through a ring",
            problem: t`A ring of radius $R$ carries charge $+Q$ spread uniformly. A particle of mass $m$ and charge $-q$ is released from rest on the axis at a small distance $x_0 \ll R$ from the centre. Show that it performs SHM and find the period.`,
            steps: [
              t`On the axis the field at distance $x$ is $E = \dfrac{kQx}{(R^2 + x^2)^{3/2}}$, pointing away from the centre.`,
              t`For $x \ll R$: $E \approx \dfrac{kQx}{R^3}$. Force on $-q$: $F = -\dfrac{kQq}{R^3}\,x$, always towards the centre.`,
              t`This is $F = -m\omega^2 x$ with $\omega^2 = \dfrac{kQq}{mR^3} = \dfrac{Qq}{4\pi\varepsilon_0 m R^3}$.`,
              t`Period $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{4\pi\varepsilon_0\, m R^3}{Qq}}$.`,
            ],
            answer: t`SHM about the centre with $T = 2\pi\sqrt{\dfrac{4\pi\varepsilon_0 m R^3}{Qq}}$. (For large $x_0$ the motion is still periodic but not simple harmonic.)`,
          },
          {
            type: "mistake",
            wrong: "For two unlike charges, the point of zero field lies between them, nearer the smaller charge.",
            right: "Between unlike charges both fields point the same way (towards the negative charge), so they add. The zero-field point lies outside, on the side of the smaller charge.",
            why: "Learners carry over the result for like charges. Always check field directions before equating magnitudes.",
          },
          {
            type: "mistake",
            wrong: "Gauss's law gives E = q/(4πε₀r²) for any closed surface, so it works for a cube or a finite rod too.",
            right: "Gauss's law is always true, but turning flux into E needs E to be constant (or zero) over the Gaussian surface, which happens only with spherical, cylindrical or planar symmetry.",
            why: "The law fixes the total flux, not how it is spread over the surface. Without symmetry, E varies from point to point and cannot be taken out of the integral.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Where on the axis of a uniformly charged ring of radius R is the electric field greatest?",
                options: ["at the centre", t`at $x = R/\sqrt{2}$`, t`at $x = R$`, t`at $x = \sqrt{2}R$`],
                answer: 1,
                explain: t`Setting $\dfrac{d}{dx}\left[\dfrac{x}{(R^2+x^2)^{3/2}}\right] = 0$ gives $R^2 + x^2 = 3x^2$, so $x = R/\sqrt{2}$. At the centre E = 0.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Charge q at a cube's corner. Flux through a face touching it?",
              emoji: "🧊",
              options: [t`$q/24\varepsilon_0$`, "zero", t`$q/6\varepsilon_0$`, t`$q/8\varepsilon_0$`],
              answer: 1,
              trap: 0,
              explain: t`The field from the corner charge runs along (in the plane of) the three faces that meet at that corner, so no lines cross them. Each of the other three faces carries $q/24\varepsilon_0$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Shortcuts: when they are safe",
            md: t`The ring result $E \propto x$ near the centre holds only for $x \ll R$; for larger $x$ use the full formula. The "all charge at the centre" result is safe outside **any** spherically symmetric charge, but not outside a cube or disc. The cube-corner trick needs the charge **exactly** at the corner. In NEET ratio questions, write $F \propto q_1q_2/Kr^2$ and change one thing at a time.`,
          },
          {
            type: "keypoints",
            items: [
              "Neutral point: between like charges, outside (beyond the smaller one) for unlike charges.",
              t`Ring on axis: $E = kQx/(R^2+x^2)^{3/2}$, maximum at $x = R/\sqrt{2}$, zero at the centre.`,
              t`Charge at cube corner: $q/8\varepsilon_0$ through the cube, $q/24\varepsilon_0$ per far face, zero through near faces.`,
              t`Hanging charged balls: $\tan\theta = F_e/mg$.`,
              t`Uniform solid sphere: $E = kQr/R^3$ inside, $kQ/r^2$ outside.`,
            ],
          },
        ],
        flashcards: [
          { front: "Neutral point of +q and +4q, distance d apart", back: "d/3 from +q (between them)." },
          { front: "Charge needed at that point for the whole system to balance", back: "−4q/9." },
          { front: "Field on the axis of a charged ring", back: "E = kQx/(R² + x²)^{3/2}; maximum at x = R/√2." },
          { front: "Flux through a cube with q at one corner", back: "q/8ε₀ in total; q/24ε₀ through each of the three far faces; zero through the three faces at the corner." },
          { front: "Field inside a uniformly charged solid sphere", back: "E = kQr/R³, growing linearly from zero at the centre." },
          { front: "Field at the centre of a uniformly charged semicircular ring", back: "E = 2kQ/(πR²), along the symmetry axis." },
          { front: "Small oscillations of −q through a ring of +Q", back: "SHM with ω² = kQq/(mR³)." },
          { front: "Charged balls on threads in equilibrium", back: "tan θ = F_e/(mg); separation r = 2l sin θ." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Charges +9 μC and +1 μC are 40 cm apart. How far (in cm) from the +9 μC charge is the electric field zero?",
            answer: 30,
            unit: "cm",
            explain: t`$\dfrac{9}{x^2} = \dfrac{1}{(40 - x)^2} \Rightarrow 3(40 - x) = x \Rightarrow x = 30$ cm.`,
            difficulty: 1,
          },
          {
            kind: "mcq",
            q: "Charges +4q and −q are fixed a distance d apart. The point of zero electric field on the line joining them lies:",
            options: ["between them, d/3 from −q", "outside, at distance d beyond −q", "outside, at distance d beyond +4q", "between them, at the midpoint"],
            answer: 1,
            explain: t`It lies beyond the smaller charge: at distance $y$ from $-q$, $\dfrac{4q}{(d+y)^2} = \dfrac{q}{y^2} \Rightarrow d + y = 2y \Rightarrow y = d$.`,
            difficulty: 2,
            hint: "Between unlike charges the fields add.",
          },
          {
            kind: "mcq",
            q: "A charge Q is placed at the centre of one face of a cube (on the face). The flux through the cube is:",
            options: [t`$Q/\varepsilon_0$`, t`$Q/2\varepsilon_0$`, t`$Q/6\varepsilon_0$`, t`$Q/8\varepsilon_0$`],
            answer: 1,
            explain: "Put an identical cube on the other side of that face: the two cubes enclose Q, so each gets half, Q/2ε₀.",
            difficulty: 2,
            hint: "Imagine a mirror cube on the other side of the face.",
          },
          {
            kind: "numeric",
            q: "Two identical balls of mass 1.8 g and equal charge hang from one point on threads. In equilibrium each thread makes 45° with the vertical and the balls are 30 cm apart. Find the charge on each ball, in μC. (g = 10 m s⁻², k = 9 × 10⁹ SI)",
            answer: 0.424,
            tolerance: 0.005,
            unit: "μC",
            explain: t`$F_e = mg\tan 45^\circ = 1.8 \times 10^{-2}$ N. $q^2 = \dfrac{F_e r^2}{k} = \dfrac{1.8 \times 10^{-2} \times 0.09}{9 \times 10^9} = 1.8 \times 10^{-13}$, and $q = \sqrt{18 \times 10^{-14}} \approx 4.24 \times 10^{-7}$ C $\approx 0.424\ \mu\text{C}$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A uniformly charged solid sphere (charge Q, radius R) is considered. Which statements are correct?",
            options: [
              "The field at the centre is zero",
              "Inside, the field grows in proportion to the distance from the centre",
              "The field is greatest at the surface",
              "Outside, the field falls as 1/r",
            ],
            answers: [0, 1, 2],
            explain: t`Inside $E = kQr/R^3$ (zero at the centre, growing linearly), outside $E = kQ/r^2$. The two meet at the surface, where E is greatest. Outside it falls as $1/r^2$, not $1/r$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A particle of charge −q and mass m oscillates along the axis of a fixed ring (charge +Q, radius R) with small amplitude. If R is doubled (Q unchanged), the period:",
            options: ["doubles", "becomes 2√2 times", "halves", "stays the same"],
            answer: 1,
            explain: t`$T = 2\pi\sqrt{\dfrac{4\pi\varepsilon_0 m R^3}{Qq}} \propto R^{3/2}$; doubling R multiplies T by $2^{3/2} = 2\sqrt{2}$.`,
            difficulty: 3,
            hint: "Find how T depends on R first.",
          },
          {
            kind: "numeric",
            q: t`A cylinder of radius R carries a charge density inside it that rises with distance r from the axis as $\rho = \rho_0 r/R$. Using Gauss's law, the field at the surface is $E = \rho_0 R/(n\varepsilon_0)$. Find n.`,
            answer: 3,
            explain: t`Charge in length $l$ up to $R$: $\int_0^R \rho_0 \dfrac{r}{R} 2\pi r l\,dr = \dfrac{2\pi \rho_0 l R^2}{3}$. Gauss: $E \cdot 2\pi R l = \dfrac{2\pi\rho_0 l R^2}{3\varepsilon_0}$, so $E = \dfrac{\rho_0 R}{3\varepsilon_0}$; $n = 3$.`,
            difficulty: 3,
            hint: "Integrate ρ over thin cylindrical shells of area 2πrl and thickness dr.",
          },
          {
            kind: "mcq",
            q: "Two large parallel plates carry surface charge densities +σ and +σ (same sign). The field in the region between them is:",
            options: [t`$\sigma/\varepsilon_0$`, t`$\sigma/2\varepsilon_0$`, "zero", t`$2\sigma/\varepsilon_0$`],
            answer: 2,
            explain: t`Each sheet gives $\sigma/2\varepsilon_0$ pointing away from it. Between the plates these point in opposite directions and cancel. Outside they add to $\sigma/\varepsilon_0$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12, Chapter 2: Electrostatic Potential and Capacitance       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-potential-capacitance",
    title: "Electrostatic Potential and Capacitance",
    icon: "🔋",
    description: "Electrostatic potential and potential energy, equipotential surfaces, conductors and dielectrics, capacitors, their combinations and the energy they store.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-potential-equipotentials",
        title: "Electrostatic Potential and Potential Energy",
        summary: "Potential and potential difference, potential of a point charge, a dipole and a system of charges, equipotential surfaces, the link between E and V, and potential energy of charges and dipoles.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`The electrostatic force is **conservative**: the work it does on a charge depends only on the start and end points, not on the path. So we can define an electrostatic **potential energy**.

The **electrostatic potential** $V$ at a point is the work done by an external force in bringing a unit positive charge from infinity to that point, slowly (without acceleration): $V = W/q$. Its unit is the volt, 1 V = 1 J C⁻¹. The **potential difference** between two points is $V_B - V_A = W_{AB}/q$, the work per unit charge in moving from A to B. Only differences have physical meaning; we choose $V = 0$ at infinity.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Bring a test charge $q_0$ from infinity towards a point charge $q$ ($q > 0$) along a radial line. At distance $r'$ the Coulomb force on it is $\dfrac{kqq_0}{r'^2}$, outward.`,
              t`The external force must be equal and opposite (inward) so that there is no acceleration. Its work for a small step is $dW = -\dfrac{kqq_0}{r'^2}\,dr'$.`,
              t`Total work: $W = -\displaystyle\int_\infty^r \dfrac{kqq_0}{r'^2}\,dr' = \dfrac{kqq_0}{r}$.`,
              t`Dividing by $q_0$: $V(r) = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r}$. The result also holds for $q < 0$ (then $V$ is negative).`,
            ],
          },
          {
            type: "formula",
            tex: t`V = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r}, \qquad V_{dipole} = \frac{1}{4\pi\varepsilon_0}\,\frac{p\cos\theta}{r^2}\ (r \gg a), \qquad V_{system} = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i}{r_i}`,
            caption: "Potential is a scalar, so the potentials of many charges simply add with their signs. For a dipole, θ is measured from the direction of p.",
          },
          {
            type: "text",
            md: t`For a dipole, $V$ falls as $1/r^2$ (not $1/r$) and depends on direction. On the axis ($\theta = 0^\circ$) $V = kp/r^2$; on the equatorial plane ($\theta = 90^\circ$) $V = 0$, although the field there is not zero.

For a uniformly charged thin shell of radius $R$: outside, $V = kq/r$, as if all charge were at the centre; inside, $E = 0$, so $V$ stays **constant** at the surface value $kq/R$.`,
          },
          {
            type: "example",
            title: "Potential at the centre of a square",
            problem: t`Charges $+2$, $+2$, $-1$ and $+3\ \mu\text{C}$ sit at the corners of a square. Each corner is 20 cm from the centre. Find the potential at the centre. ($k = 9 \times 10^9$ SI)`,
            steps: [
              t`All charges are at the same distance $r = 0.2$ m, so $V = \dfrac{k}{r}\sum q_i$.`,
              t`$\sum q_i = 2 + 2 - 1 + 3 = 6\ \mu\text{C} = 6 \times 10^{-6}$ C.`,
              t`$V = \dfrac{9 \times 10^9 \times 6 \times 10^{-6}}{0.2} = \dfrac{5.4 \times 10^4}{0.2} = 2.7 \times 10^5$ V.`,
            ],
            answer: t`$2.7 \times 10^5$ V. No directions are needed because potential is a scalar.`,
          },
          {
            type: "heading",
            text: "Equipotential surfaces",
          },
          {
            type: "text",
            md: t`An **equipotential surface** has the same potential at every point. No work is done in moving a charge along it, so the field is always **perpendicular** to it. For a point charge the equipotentials are concentric spheres; for a uniform field they are planes at right angles to the field. Two equipotential surfaces never meet.

The field points in the direction in which the potential **falls** fastest, and its size is the rate of that fall. Where equipotentials (drawn at equal steps of $V$) crowd together, the field is strong.`,
          },
          {
            type: "formula",
            tex: t`E = -\frac{dV}{dr}, \qquad \text{for a uniform field: } E = \frac{V}{d}`,
            caption: "The minus sign: E points towards decreasing potential. dr is measured along the normal to the equipotential surface.",
          },
          {
            type: "text",
            md: t`**Potential energy of a system of charges** is the work done in assembling it from infinity. For two charges, $U = \dfrac{kq_1q_2}{r_{12}}$; for three, add one term for each pair: $U = k\left(\dfrac{q_1q_2}{r_{12}} + \dfrac{q_2q_3}{r_{23}} + \dfrac{q_3q_1}{r_{31}}\right)$.

**In an external field** $V(\vec r)$: a single charge has $U = qV(\vec r)$; two charges have $U = q_1V(\vec r_1) + q_2V(\vec r_2) + \dfrac{kq_1q_2}{r_{12}}$. A dipole in a uniform field has $U(\theta) = -pE\cos\theta$. The work needed to turn it from $\theta_1$ to $\theta_2$ is $pE(\cos\theta_1 - \cos\theta_2)$. It is in stable equilibrium at $\theta = 0^\circ$ and unstable at $180^\circ$.`,
          },
          {
            type: "formula",
            tex: t`U = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r_{12}}, \qquad U_{dipole} = -\vec p \cdot \vec E = -pE\cos\theta`,
          },
          {
            type: "example",
            title: "Energy of three charges",
            problem: t`Charges $q_1 = +1\ \mu\text{C}$, $q_2 = -2\ \mu\text{C}$ and $q_3 = +3\ \mu\text{C}$ are at the corners of an equilateral triangle of side 10 cm. Find the potential energy of the system.`,
            steps: [
              t`Sum of pair products: $q_1q_2 + q_2q_3 + q_3q_1 = (1)(-2) + (-2)(3) + (3)(1) = -5$ (in units of $10^{-12}$ C²).`,
              t`All separations are $r = 0.1$ m, so $U = \dfrac{k}{r}(-5 \times 10^{-12}) = \dfrac{9 \times 10^9}{0.1} \times (-5 \times 10^{-12})$.`,
              t`$U = 9 \times 10^{10} \times (-5 \times 10^{-12}) = -0.45$ J.`,
            ],
            answer: "U = −0.45 J. The negative sign means 0.45 J of external work is needed to pull the charges apart to infinity.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the potential (in V) at 9 cm from a point charge of 4 nC in air. (k = 9 × 10⁹ SI)",
                answer: 400,
                unit: "V",
                explain: t`$V = \dfrac{9 \times 10^9 \times 4 \times 10^{-9}}{0.09} = \dfrac{36}{0.09} = 400$ V.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Where the potential is zero, the electric field must also be zero.",
            right: "V and E are independent at a point: E depends on how fast V changes, not on V itself. On a dipole's equatorial plane V = 0 but E ≠ 0; inside a charged shell E = 0 but V ≠ 0.",
            why: "Learners treat potential like a 'strength' of the field. E = −dV/dr is a slope, and a function can be zero where its slope is not, and the other way round.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each quantity: scalar or vector?",
              groups: ["Scalar", "Vector"],
              items: [
                { text: "Electrostatic potential", group: 0, hint: "Potentials of charges add with signs only." },
                { text: "Electric field", group: 1, hint: "It has a direction: the way a + charge is pushed." },
                { text: "Potential energy of a system", group: 0, hint: "It is energy, a number in joules." },
                { text: "Dipole moment", group: 1, hint: "It points from −q to +q." },
                { text: "Electric flux", group: 0, hint: "It is a dot product of two vectors." },
                { text: "Torque on a dipole", group: 1, hint: "It is a cross product, p × E." },
              ],
              explain: "This is why potential problems are easier than field problems: scalars add with signs, while fields need vector addition.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The derivation of $V = kq/r$ and of the potential of a dipole are common 3-mark questions; show the work done against the field and the limits of the integral. Draw equipotentials of a point charge, a dipole and a uniform field with field lines crossing them at right angles. Keep the signs of charges in potential and energy sums.`,
          },
          {
            type: "keypoints",
            items: [
              t`$V = W/q$; for a point charge $V = kq/r$; potentials add as scalars.`,
              t`Dipole: $V = kp\cos\theta/r^2$; zero on the equatorial plane.`,
              t`Equipotentials are perpendicular to field lines; $E = -dV/dr$, pointing towards lower V.`,
              t`Two charges: $U = kq_1q_2/r$; a dipole in a uniform field: $U = -pE\cos\theta$.`,
              "No work is done moving a charge along an equipotential surface.",
            ],
          },
        ],
        flashcards: [
          { front: "Electrostatic potential at a point", back: "Work done by an external agent to bring a unit positive charge from infinity to that point without acceleration. Unit volt (J C⁻¹)." },
          { front: "Potential of a point charge", back: "V = q/(4πε₀r)." },
          { front: "Potential of a short dipole", back: "V = p cos θ/(4πε₀r²); zero on the equatorial plane." },
          { front: "Relation between E and V", back: "E = −dV/dr: E points towards decreasing potential." },
          { front: "Equipotentials of a uniform field", back: "Planes perpendicular to the field lines." },
          { front: "Potential energy of a dipole in a uniform field", back: "U = −pE cos θ; minimum (stable) at θ = 0°." },
          { front: "Work to turn a dipole from θ₁ to θ₂", back: "W = pE(cos θ₁ − cos θ₂)." },
          { front: "Potential inside a charged thin shell", back: "Constant, equal to kq/R (the surface value)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The work done in moving a charge of 3 μC between two points on the same equipotential surface at 50 V is:",
            options: ["150 μJ", "zero", "50 μJ", "depends on the path"],
            answer: 1,
            explain: "W = qΔV and ΔV = 0 on an equipotential, so W = 0.",
          },
          {
            kind: "numeric",
            q: "Find the potential (in V) at 6 cm from a 2 nC point charge. (k = 9 × 10⁹ SI)",
            answer: 300,
            unit: "V",
            explain: t`$V = \dfrac{9 \times 10^9 \times 2 \times 10^{-9}}{0.06} = \dfrac{18}{0.06} = 300$ V.`,
          },
          {
            kind: "mcq",
            q: "The potential at a point on the equatorial line of a dipole is:",
            options: [t`$kp/r^2$`, t`$2kp/r^3$`, "zero", t`$kp/r^3$`],
            answer: 2,
            explain: "The point is equally far from +q and −q, so kq/r − kq/r = 0.",
          },
          {
            kind: "numeric",
            q: "How much work (in units of 10⁻⁴ J) is needed to move a 2 μC charge from a point at 10 V to a point at 60 V?",
            answer: 1,
            unit: "× 10⁻⁴ J",
            explain: t`$W = q(V_B - V_A) = 2 \times 10^{-6} \times 50 = 1 \times 10^{-4}$ J.`,
          },
          {
            kind: "mcq",
            q: "The electric field at a point is directed:",
            options: ["along the equipotential surface", "towards increasing potential", "towards decreasing potential", "at 45° to the equipotential surface"],
            answer: 2,
            explain: "E = −dV/dr: the field points along the normal to the equipotential, towards lower potential.",
          },
          {
            kind: "numeric",
            q: "A dipole of moment 2 × 10⁻⁸ C m lies along a uniform field of 10⁴ N C⁻¹. How much work (in units of 10⁻⁴ J) turns it through 180°?",
            answer: 4,
            unit: "× 10⁻⁴ J",
            explain: t`$W = pE(\cos 0^\circ - \cos 180^\circ) = 2pE = 2 \times 2 \times 10^{-8} \times 10^4 = 4 \times 10^{-4}$ J.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which statements about equipotential surfaces are true?",
            options: [
              "For a point charge they are concentric spheres",
              "For a uniform field they are planes perpendicular to the field",
              "Two different equipotential surfaces never intersect",
              "The electric field is tangent to them",
            ],
            answers: [0, 1, 2],
            explain: "The field is always perpendicular (normal) to an equipotential surface, never along it; otherwise work would be done moving along it.",
          },
          {
            kind: "mcq",
            q: "Two electrons are pushed closer together. The electrostatic potential energy of the pair:",
            options: ["increases", "decreases", "stays the same", "becomes negative"],
            answer: 0,
            explain: t`$U = ke^2/r$ is positive for like charges and grows as $r$ falls; work must be done against the repulsion.`,
            difficulty: 2,
            hint: "Look at the sign of q₁q₂.",
          },
        ],
      },
      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-conductors-dielectrics-capacitors",
        title: "Conductors, Dielectrics and Capacitors",
        summary: "Electrostatics of conductors and electrostatic shielding, polar and non-polar dielectrics and polarisation, capacitance, the parallel-plate capacitor and the effect of a dielectric.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "A metal has free electrons. Put it in an electric field and the electrons drift until their own field exactly cancels the applied field inside the metal. This takes a tiny fraction of a second. After that the charges are at rest and the conductor is in **electrostatic equilibrium**, with some important properties.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "The electric field inside a conductor is zero.",
              "Just outside a charged conductor, the field is normal to the surface at every point.",
              "The interior of a conductor has no net charge; any excess charge sits on its surface.",
              "The potential is the same everywhere in the conductor and on its surface.",
              t`Just outside the surface, $E = \sigma/\varepsilon_0$, where $\sigma$ is the local surface charge density.`,
              "Inside a cavity in a conductor (with no charge in the cavity) the field is zero, whatever charges or fields are outside. This is **electrostatic shielding**: sitting inside a car is safer than standing outside during a thunderstorm.",
            ],
          },
          {
            type: "formula",
            tex: t`\vec E_{surface} = \frac{\sigma}{\varepsilon_0}\,\hat n`,
            caption: "Field just outside a charged conductor; n̂ is the outward normal. Compare σ/2ε₀ for an isolated sheet: here all the flux goes out on one side.",
          },
          {
            type: "text",
            md: t`**Dielectrics** are insulators. In a **non-polar** molecule (O₂, N₂, CH₄, CO₂) the centres of positive and negative charge coincide; an applied field pulls them apart and **induces** a dipole moment. A **polar** molecule (H₂O, HCl, NH₃) has a permanent dipole moment; normally these point at random, but a field lines them up partly.

Either way the dielectric gets a net dipole moment per unit volume, its **polarisation** $\vec P$. For most materials $\vec P = \chi_e \vec E$, where $\chi_e$ is the electric susceptibility. A polarised slab behaves as if it had charge $+\sigma_p$ on one face and $-\sigma_p$ on the other; their field opposes the applied field, so the field inside the dielectric is **reduced**. The factor of reduction is the dielectric constant $K$.`,
          },
          {
            type: "text",
            md: t`A **capacitor** is a pair of conductors separated by an insulator, carrying charges $+Q$ and $-Q$. The potential difference $V$ between them is proportional to $Q$; the ratio is the **capacitance** $C = Q/V$. Its unit is the farad (1 F = 1 C V⁻¹); practical values are in μF (10⁻⁶ F), nF and pF (10⁻¹² F). Capacitance depends only on the shape, size and separation of the conductors and the medium between them, not on Q or V.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Take two parallel plates of area $A$, separation $d$, with charges $+Q$ and $-Q$. Surface density $\sigma = Q/A$.`,
              t`If $d$ is small compared with the plate size, each plate acts like an infinite sheet. Between the plates their fields add: $E = \dfrac{\sigma}{\varepsilon_0}$; outside they cancel.`,
              t`The field is uniform, so $V = Ed = \dfrac{\sigma d}{\varepsilon_0} = \dfrac{Qd}{\varepsilon_0 A}$.`,
              t`$C = \dfrac{Q}{V} = \dfrac{\varepsilon_0 A}{d}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`C_0 = \frac{\varepsilon_0 A}{d}, \qquad C = \frac{K\varepsilon_0 A}{d} = K C_0, \qquad C_{slab} = \frac{\varepsilon_0 A}{d - t + t/K}`,
            caption: "Parallel-plate capacitor: in vacuum, completely filled with a dielectric, and with a dielectric slab of thickness t (< d).",
          },
          {
            type: "text",
            md: t`**Why a dielectric raises C.** With a dielectric filling the gap, the polarisation charges cut the field to $E_0/K$. For the same charge $Q$ the voltage falls to $V_0/K$, so $C = Q/V$ rises to $KC_0$. This also defines $K$: $K = C/C_0$.

**Partial slab.** With a slab of thickness $t$ the field is $E_0$ in the air gap $(d - t)$ and $E_0/K$ in the slab, so $V = E_0\left(d - t + \dfrac{t}{K}\right)$, which gives $C_{slab}$ above. A **metal** slab ($K \to \infty$) gives $C = \dfrac{\varepsilon_0 A}{d - t}$.`,
          },
          {
            type: "example",
            title: "A parallel-plate capacitor",
            problem: t`A parallel-plate capacitor has plates of area 0.02 m² separated by 1.77 mm of air. Find its capacitance. A dielectric of $K = 5$ then fills the gap, and the capacitor is connected to a 100 V supply. Find the new capacitance and the charge. ($\varepsilon_0 = 8.85 \times 10^{-12}$ F m⁻¹)`,
            steps: [
              t`$C_0 = \dfrac{\varepsilon_0 A}{d} = \dfrac{8.85 \times 10^{-12} \times 0.02}{1.77 \times 10^{-3}} = \dfrac{1.77 \times 10^{-13}}{1.77 \times 10^{-3}} = 1 \times 10^{-10}$ F = 100 pF.`,
              t`With the dielectric: $C = KC_0 = 5 \times 100 = 500$ pF.`,
              t`$Q = CV = 500 \times 10^{-12} \times 100 = 5 \times 10^{-8}$ C.`,
            ],
            answer: t`100 pF in air; 500 pF with the dielectric, holding $5 \times 10^{-8}$ C at 100 V.`,
          },
          {
            type: "example",
            title: "How big is one farad?",
            problem: "What plate area would a 1 F parallel-plate capacitor need if the plates were 1 mm apart in air?",
            steps: [
              t`$A = \dfrac{Cd}{\varepsilon_0} = \dfrac{1 \times 10^{-3}}{8.85 \times 10^{-12}} \approx 1.13 \times 10^8$ m².`,
              t`That is a square about $\sqrt{1.13 \times 10^8} \approx 1.06 \times 10^4$ m, roughly 10.6 km on each side.`,
            ],
            answer: "About 1.1 × 10⁸ m², a square more than 10 km on a side. The farad is a very large unit.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A dielectric slab with K = 2 and thickness d/2 is placed between the plates of a capacitor whose plates are d apart. By what factor does the capacitance increase? (Give C/C₀.)",
                answer: 1.33,
                tolerance: 0.01,
                explain: t`$C = \dfrac{\varepsilon_0 A}{d - d/2 + d/4} = \dfrac{\varepsilon_0 A}{3d/4} = \dfrac{4}{3}C_0 \approx 1.33\,C_0$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Doubling the charge on a capacitor doubles its capacitance, since C = Q/V.",
            right: "Doubling Q doubles V, so C = Q/V stays the same. Capacitance is fixed by A, d and K only.",
            why: "C = Q/V looks like it depends on Q, the same way R = V/I seems to depend on current. Both are ratios that stay constant because the numerator and denominator change together.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Polar or non-polar molecule?",
              groups: ["Polar (permanent dipole)", "Non-polar (no permanent dipole)"],
              items: [
                { text: "H₂O", group: 0, hint: "Bent shape; the O–H dipoles do not cancel." },
                { text: "HCl", group: 0, hint: "Chlorine pulls the shared electrons towards itself." },
                { text: "NH₃", group: 0, hint: "Pyramid shape; the dipoles do not cancel." },
                { text: "O₂", group: 1, hint: "Two identical atoms share electrons equally." },
                { text: "CO₂", group: 1, hint: "Linear; the two C=O dipoles cancel." },
                { text: "CH₄", group: 1, hint: "Symmetric tetrahedron; the bond dipoles cancel." },
              ],
              explain: "Non-polar molecules get only an induced dipole in a field. Polar molecules already have one and are partly aligned by the field. Both reduce the field inside the dielectric.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: Van de Graaff generator",
            md: t`The rationalised NCERT book (CBSE, Karnataka II PUC) has dropped the Van de Graaff generator. If your ISC or state syllabus still lists it, learn the principle: a small sphere of radius $r$ with charge $q$ inside a large shell of radius $R$ is always at a higher potential than the shell by $kq\left(\dfrac{1}{r} - \dfrac{1}{R}\right)$, whatever charge the shell holds. So charge carried inside by a belt always flows to the outer shell, building up potentials of millions of volts.`,
          },
          {
            type: "keypoints",
            items: [
              t`In a conductor in electrostatics: $E = 0$ inside, excess charge on the surface, $V$ constant, $E = \sigma/\varepsilon_0$ just outside and normal to it.`,
              "A charge-free cavity in a conductor is shielded from outside fields.",
              "Dielectrics are polarised by a field (induced or aligned dipoles) and reduce the field inside them by the factor K.",
              t`$C = Q/V$; parallel plates: $C = \varepsilon_0 A/d$, rising to $K\varepsilon_0 A/d$ with a dielectric.`,
              t`Slab of thickness $t$: $C = \varepsilon_0 A/(d - t + t/K)$; metal slab: $\varepsilon_0 A/(d - t)$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Field inside a conductor in electrostatic equilibrium", back: "Zero." },
          { front: "Where does excess charge reside on a conductor?", back: "On its outer surface; the interior has no net charge." },
          { front: "Field just outside a charged conductor", back: "E = σ/ε₀, normal to the surface." },
          { front: "Electrostatic shielding", back: "The field in a charge-free cavity inside a conductor is zero, whatever the outside fields." },
          { front: "Polar vs non-polar dielectric", back: "Polar molecules have a permanent dipole moment (H₂O, HCl); non-polar ones get only induced dipoles (O₂, CO₂)." },
          { front: "Capacitance of a parallel-plate capacitor", back: "C = ε₀A/d in air; Kε₀A/d with a dielectric filling the gap." },
          { front: "Capacitance with a dielectric slab of thickness t", back: "C = ε₀A/(d − t + t/K)." },
          { front: "1 pF in farads", back: "10⁻¹² F." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In electrostatic equilibrium, the electric field inside the material of a charged conductor is:",
            options: ["σ/ε₀", "σ/2ε₀", "zero", "the same as just outside"],
            answer: 2,
            explain: "Free electrons move until their field cancels any field inside. Then E = 0 everywhere in the metal.",
          },
          {
            kind: "mcq",
            q: "A hollow metal sphere is given a charge. The charge resides:",
            options: ["uniformly through the volume", "only on the outer surface", "only on the inner surface", "at the centre"],
            answer: 1,
            explain: "Gauss's law on a surface inside the metal (where E = 0) shows no net charge lies inside it, so all excess charge is on the outer surface.",
          },
          {
            kind: "numeric",
            q: "A parallel-plate capacitor has plates of area 0.05 m², 0.885 mm apart in air. Find its capacitance in pF. (ε₀ = 8.85 × 10⁻¹² F m⁻¹)",
            answer: 500,
            tolerance: 1,
            unit: "pF",
            explain: t`$C = \dfrac{8.85 \times 10^{-12} \times 0.05}{8.85 \times 10^{-4}} = 5 \times 10^{-10}$ F = 500 pF.`,
          },
          {
            kind: "truefalse",
            q: "If the charge on a capacitor is doubled, its capacitance doubles.",
            answer: false,
            explain: "V doubles too, so C = Q/V is unchanged. C depends only on geometry and the medium.",
          },
          {
            kind: "mcq",
            q: "A dielectric of constant K completely fills the space between the plates of a capacitor C₀. The capacitance becomes:",
            options: ["C₀/K", "C₀", "KC₀", "K²C₀"],
            answer: 2,
            explain: "The field and so the voltage for a given charge fall by K, so C = Q/V rises by K.",
          },
          {
            kind: "multi",
            q: "Which of these molecules are polar?",
            options: ["H₂O", "CO₂", "HCl", "CH₄", "NH₃"],
            answers: [0, 2, 4],
            explain: "H₂O and NH₃ have shapes in which bond dipoles do not cancel; HCl has unequal sharing. CO₂ (linear) and CH₄ (tetrahedral) are symmetric, so their bond dipoles cancel.",
          },
          {
            kind: "numeric",
            q: "The surface charge density on a conductor is 2.655 × 10⁻⁶ C m⁻². What is the field just outside it, in units of 10⁵ N C⁻¹? (ε₀ = 8.85 × 10⁻¹² SI)",
            answer: 3,
            tolerance: 0.01,
            unit: "× 10⁵ N C⁻¹",
            explain: t`$E = \sigma/\varepsilon_0 = 2.655 \times 10^{-6} / 8.85 \times 10^{-12} = 3 \times 10^5$ N C⁻¹.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A metal slab of thickness d/2 is placed between the plates (separation d) of a capacitor C₀, without touching them. The capacitance becomes:",
            options: ["C₀/2", "C₀", "2C₀", "4C₀"],
            answer: 2,
            explain: t`For a metal slab, $C = \dfrac{\varepsilon_0 A}{d - t} = \dfrac{\varepsilon_0 A}{d/2} = 2C_0$.`,
            difficulty: 2,
            hint: "Inside metal E = 0, so only the air gap d − t counts.",
          },
        ],
      },
      /* ---------------- Board lesson 3 ---------------- */
      {
        slug: "c12-capacitor-combinations-energy",
        title: "Combining Capacitors and Stored Energy",
        summary: "Capacitors in series and in parallel, energy stored in a capacitor, energy density of an electric field, sharing of charge, and the effect of a dielectric with and without the battery.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Series:** capacitors joined end to end, so there is only one path. The battery moves charge $Q$ onto the first plate; by induction every capacitor gets the **same charge** $Q$. The voltages add: $V = V_1 + V_2 + \ldots = Q\left(\dfrac{1}{C_1} + \dfrac{1}{C_2} + \ldots\right)$. Dividing by $Q$ gives the rule below. The combined capacitance is **smaller** than the smallest one.`,
          },
          {
            type: "formula",
            tex: t`\frac{1}{C_s} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots + \frac{1}{C_n}, \qquad \text{two in series: } C_s = \frac{C_1C_2}{C_1 + C_2}`,
          },
          {
            type: "text",
            md: t`**Parallel:** each capacitor is connected directly across the same two points, so all have the **same potential difference** $V$. Their charges add: $Q = Q_1 + Q_2 + \ldots = (C_1 + C_2 + \ldots)V$. The combined capacitance is larger than the largest one.`,
          },
          {
            type: "formula",
            tex: t`C_p = C_1 + C_2 + \cdots + C_n`,
          },
          {
            type: "example",
            title: "A small network",
            problem: t`A 3 μF and a 6 μF capacitor are in series. This pair is connected in parallel with a 4 μF capacitor, and the whole network is put across a 12 V battery. Find the equivalent capacitance and the charge and voltage on each capacitor.`,
            steps: [
              t`Series pair: $C_s = \dfrac{3 \times 6}{3 + 6} = 2\ \mu\text{F}$.`,
              t`With the 4 μF in parallel: $C_{eq} = 2 + 4 = 6\ \mu\text{F}$, and total charge $Q = 6 \times 12 = 72\ \mu\text{C}$.`,
              t`4 μF branch: 12 V across it, so $Q_4 = 4 \times 12 = 48\ \mu\text{C}$.`,
              t`Series branch: $Q = 2 \times 12 = 24\ \mu\text{C}$ on both the 3 μF and the 6 μF. $V_3 = 24/3 = 8$ V, $V_6 = 24/6 = 4$ V (total 12 V).`,
            ],
            answer: "C_eq = 6 μF. 4 μF: 48 μC at 12 V. 3 μF: 24 μC at 8 V. 6 μF: 24 μC at 4 V. Check: 48 + 24 = 72 μC.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`While charging, suppose the capacitor holds charge $q$; its voltage is then $q/C$.`,
              t`Moving a further small charge $dq$ from the negative plate to the positive plate needs work $dW = \dfrac{q}{C}\,dq$.`,
              t`Total work from $0$ to $Q$: $W = \displaystyle\int_0^Q \dfrac{q}{C}\,dq = \dfrac{Q^2}{2C}$.`,
              t`This work is stored as electrostatic energy: $U = \dfrac{Q^2}{2C} = \dfrac{1}{2}CV^2 = \dfrac{1}{2}QV$.`,
            ],
          },
          {
            type: "formula",
            tex: t`U = \frac{Q^2}{2C} = \frac{1}{2}CV^2 = \frac{1}{2}QV, \qquad u = \frac{1}{2}\varepsilon_0 E^2`,
            caption: "Energy stored in a capacitor, and the energy per unit volume (energy density) of any electric field in vacuum.",
          },
          {
            type: "text",
            md: t`**Energy density.** For a parallel-plate capacitor, $U = \dfrac{1}{2}CV^2 = \dfrac{1}{2}\dfrac{\varepsilon_0 A}{d}(Ed)^2 = \dfrac{1}{2}\varepsilon_0 E^2 \times (Ad)$. Since $Ad$ is the volume between the plates, the energy per unit volume is $u = \dfrac{1}{2}\varepsilon_0 E^2$. The energy is stored in the **field**, and the result holds for any electric field.`,
          },
          {
            type: "example",
            title: "Sharing charge between two capacitors",
            problem: t`A 4 μF capacitor is charged to 50 V and disconnected from the battery. It is then connected across an uncharged 6 μF capacitor. Find the common potential and the energy lost.`,
            steps: [
              t`Charge is conserved: $Q = 4 \times 50 = 200\ \mu\text{C}$, now shared by $4 + 6 = 10\ \mu\text{F}$ in parallel.`,
              t`Common potential $V = \dfrac{200}{10} = 20$ V.`,
              t`Energy before: $\dfrac{1}{2} \times 4 \times 10^{-6} \times 50^2 = 5 \times 10^{-3}$ J. After: $\dfrac{1}{2} \times 10 \times 10^{-6} \times 20^2 = 2 \times 10^{-3}$ J.`,
              t`Loss $= 3 \times 10^{-3}$ J. Check with $\Delta U = \dfrac{C_1C_2(V_1 - V_2)^2}{2(C_1 + C_2)} = \dfrac{24 \times 10^{-12} \times 2500}{2 \times 10 \times 10^{-6}} = 3 \times 10^{-3}$ J.`,
            ],
            answer: "Common potential 20 V; 3 mJ is lost as heat in the connecting wires (and as radiation).",
          },
          {
            type: "table",
            headers: ["Quantity", "Battery stays connected (V fixed)", "Battery removed first (Q fixed)"],
            rows: [
              ["Capacitance", t`$KC_0$`, t`$KC_0$`],
              ["Potential difference", t`$V_0$`, t`$V_0/K$`],
              ["Charge", t`$KQ_0$`, t`$Q_0$`],
              ["Field between plates", t`$E_0$`, t`$E_0/K$`],
              ["Stored energy", t`$KU_0$`, t`$U_0/K$`],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Three 6 μF capacitors are connected in series. What is the equivalent capacitance in μF?",
                answer: 2,
                unit: "μF",
                explain: t`$\dfrac{1}{C_s} = \dfrac{3}{6}$, so $C_s = 2\ \mu\text{F}$. (In parallel they would give 18 μF.)`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In a series combination, the battery's charge divides between the capacitors.",
            right: "In series every capacitor carries the same charge Q, equal to the charge drawn from the battery. It is the voltage that divides, in inverse ratio of the capacitances.",
            why: "Learners carry over the idea of current dividing in parallel resistors. In series there is no branch for charge to split into; each inner pair of plates is an isolated conductor with charges +Q and −Q induced on it.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each case with the right result.",
              pairs: [
                ["Capacitors in series", "same charge on each"],
                ["Capacitors in parallel", "same potential difference across each"],
                ["Energy stored in a capacitor", "½CV²"],
                ["Energy per unit volume of a field", "½ε₀E²"],
                ["Dielectric inserted after removing the battery", "stored energy falls to U₀/K"],
              ],
              explain: "Series fixes Q, parallel fixes V. With the battery removed Q is fixed, so U = Q²/2C falls as C rises by K.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Derivations for series and parallel combinations and for energy stored are frequent. In network numericals, first reduce the series and parallel groups step by step and redraw the circuit. For dielectric questions, first decide whether Q or V stays fixed, then use the table.",
          },
          {
            type: "keypoints",
            items: [
              t`Series: same $Q$, $1/C_s = \sum 1/C_i$. Parallel: same $V$, $C_p = \sum C_i$.`,
              t`Energy stored: $U = Q^2/2C = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV$.`,
              t`Energy density: $u = \tfrac{1}{2}\varepsilon_0E^2$; the energy lives in the field.`,
              "When charged capacitors share charge, charge is conserved but energy is lost as heat.",
              "Dielectric with battery connected: Q and U rise K times. Battery removed: V, E and U fall K times.",
            ],
          },
        ],
        flashcards: [
          { front: "Rule for capacitors in series", back: "1/C = 1/C₁ + 1/C₂ + …; each carries the same charge." },
          { front: "Rule for capacitors in parallel", back: "C = C₁ + C₂ + …; each has the same potential difference." },
          { front: "Energy stored in a capacitor", back: "U = Q²/2C = ½CV² = ½QV." },
          { front: "Energy density of an electric field", back: "u = ½ε₀E² (J m⁻³)." },
          { front: "Common potential when two capacitors share charge", back: "V = (C₁V₁ + C₂V₂)/(C₁ + C₂)." },
          { front: "Energy lost when two capacitors share charge", back: "ΔU = C₁C₂(V₁ − V₂)²/[2(C₁ + C₂)]." },
          { front: "Dielectric inserted with battery connected", back: "C, Q and U all become K times; V and E unchanged." },
          { front: "Dielectric inserted with battery removed", back: "C becomes K times; Q unchanged; V, E and U fall to 1/K." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the equivalent capacitance (in μF) of a 2 μF and a 3 μF capacitor in series.",
            answer: 1.2,
            tolerance: 0.01,
            unit: "μF",
            explain: t`$C_s = \dfrac{2 \times 3}{2 + 3} = 1.2\ \mu\text{F}$.`,
          },
          {
            kind: "numeric",
            q: "How much energy (in J) is stored in a 10 μF capacitor charged to 200 V?",
            answer: 0.2,
            tolerance: 0.001,
            unit: "J",
            explain: t`$U = \tfrac{1}{2}CV^2 = \tfrac{1}{2} \times 10^{-5} \times (200)^2 = 0.2$ J.`,
          },
          {
            kind: "mcq",
            q: "A charged capacitor is disconnected from its battery, and a dielectric slab of constant K then fills the gap. The potential difference:",
            options: ["becomes KV", "stays V", "becomes V/K", "becomes zero"],
            answer: 2,
            explain: "Q is fixed and C rises to KC, so V = Q/C falls to V/K.",
          },
          {
            kind: "mcq",
            q: "With the battery still connected, a dielectric slab of constant K fills the gap of a capacitor. The charge on the plates:",
            options: ["becomes K times", "stays the same", "becomes 1/K times", "becomes K² times"],
            answer: 0,
            explain: "V is fixed by the battery and C becomes KC, so Q = CV becomes K times.",
          },
          {
            kind: "numeric",
            q: "What is the energy density (in J m⁻³) of an electric field of 10⁶ V m⁻¹ in air? (ε₀ = 8.85 × 10⁻¹² SI)",
            answer: 4.425,
            tolerance: 0.01,
            unit: "J m⁻³",
            explain: t`$u = \tfrac{1}{2}\varepsilon_0E^2 = 0.5 \times 8.85 \times 10^{-12} \times 10^{12} = 4.425$ J m⁻³.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Four identical capacitors are first joined in series and then in parallel. The ratio C_parallel : C_series is:",
            options: ["4 : 1", "16 : 1", "1 : 16", "1 : 4"],
            answer: 1,
            explain: "Series: C/4. Parallel: 4C. Ratio 4C ÷ (C/4) = 16.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In a parallel combination of capacitors, the capacitor with the largest capacitance stores the most charge.",
            answer: true,
            explain: "All share the same V, so Q = CV is largest for the largest C.",
          },
          {
            kind: "numeric",
            q: "A 2 μF capacitor charged to 100 V is connected across an identical uncharged capacitor. How much energy (in mJ) is lost?",
            answer: 5,
            unit: "mJ",
            explain: t`Common potential 50 V. Before: $\tfrac{1}{2} \times 2 \times 10^{-6} \times 100^2 = 10$ mJ. After: $\tfrac{1}{2} \times 4 \times 10^{-6} \times 50^2 = 5$ mJ. Lost: 5 mJ (half the original energy).`,
            difficulty: 2,
            hint: "Charge is conserved; energy is not.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-potential-capacitance-exam-edge",
        title: "Exam edge: Potential and Capacitance",
        summary: "What JEE, NEET, KCET and COMEDK ask on potential and capacitors, results worth remembering, and graded problems up to JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What it asks most from this chapter"],
            rows: [
              ["KCET / COMEDK", "Potential of point charges and dipoles, work on equipotentials, capacitor combinations, energy stored, dielectric effects, merging drops."],
              ["NEET", "Ratios with merged drops, capacitors in series/parallel, energy loss on sharing charge, dielectric with and without battery, E from V."],
              ["JEE Main", "E = −∇V from a given V(x, y, z), networks needing symmetry, dielectrics side by side or stacked, conducting spheres joined by a wire, force between plates."],
              ["JEE Advanced", "Concentric shells with earthing, spherical and cylindrical capacitors, varying dielectrics, energy and work done by batteries, charging in steps."],
            ],
          },
          {
            type: "list",
            items: [
              t`**Isolated sphere**: $C = 4\pi\varepsilon_0 R$. The Earth ($R = 6.4 \times 10^6$ m) has only about 711 μF.`,
              t`**n identical drops merge into one**: charge $nq$, radius $n^{1/3}r$, capacitance $n^{1/3}C$, potential $n^{2/3}V$, energy $n^{5/3}U$.`,
              t`**Two spheres joined by a wire** share the same potential, so $q \propto R$ and $\sigma \propto 1/R$: sharp points carry the densest charge (the reason for lightning conductors and corona discharge).`,
              t`**Charging from a battery**: the battery does work $QV$; the capacitor stores $\tfrac{1}{2}QV$; the other half is lost as heat, whatever the resistance.`,
              t`**Two dielectrics**: side by side (each filling half the area) act as capacitors in **parallel**; stacked (each filling half the gap) act in **series**.`,
            ],
          },
          {
            type: "formula",
            tex: t`C_{spherical} = 4\pi\varepsilon_0\,\frac{ab}{b - a}, \qquad F_{plates} = \frac{Q^2}{2\varepsilon_0 A}, \qquad \vec E = -\left(\frac{\partial V}{\partial x}\hat i + \frac{\partial V}{\partial y}\hat j + \frac{\partial V}{\partial z}\hat k\right)`,
            caption: "Spherical capacitor (inner radius a, outer radius b), attraction between the plates of a parallel-plate capacitor, and the field from a potential function.",
          },
          {
            type: "example",
            title: "KCET / NEET level: merging drops",
            problem: "Twenty-seven identical charged mercury drops, each at a potential of 10 V, combine into one big drop. Find its potential, and how many times the total energy changes.",
            steps: [
              t`Volume is conserved: $R^3 = 27r^3$, so $R = 3r$. Charge is conserved: $Q = 27q$.`,
              t`$V_{big} = \dfrac{kQ}{R} = \dfrac{k(27q)}{3r} = 9 \times \dfrac{kq}{r} = 9 \times 10 = 90$ V. (In general $n^{2/3}V$; $27^{2/3} = 9$.)`,
              t`Energy of one drop $\propto q^2/r$; of the big drop $\propto (27q)^2/(3r) = 243\,q^2/r$. Total energy of the 27 small drops $\propto 27q^2/r$.`,
              t`Ratio $= 243/27 = 9 = n^{2/3}$. (Each drop's energy times $n^{5/3} = 243$; the total of all drops times $n^{2/3}$.)`,
            ],
            answer: "90 V; the total energy becomes 9 times the combined energy of the 27 drops (work is done against repulsion in merging).",
          },
          {
            type: "example",
            title: "JEE Main level: field from a potential",
            problem: t`In a region the potential is $V = 4x^2 + 3y$ volts ($x, y$ in metres). Find the electric field at the point $(1\ \text{m}, 2\ \text{m})$.`,
            steps: [
              t`$E_x = -\dfrac{\partial V}{\partial x} = -8x = -8$ V m⁻¹ at $x = 1$.`,
              t`$E_y = -\dfrac{\partial V}{\partial y} = -3$ V m⁻¹.`,
              t`$\vec E = (-8\hat i - 3\hat j)$ V m⁻¹, $|\vec E| = \sqrt{64 + 9} = \sqrt{73} \approx 8.54$ V m⁻¹.`,
            ],
            answer: t`$\vec E = -8\hat i - 3\hat j$ V m⁻¹, of magnitude about 8.54 V m⁻¹.`,
          },
          {
            type: "example",
            title: "JEE Main level: two dielectrics",
            problem: t`An air-filled parallel-plate capacitor has $C_0 = 10\ \mu\text{F}$. Find its capacitance when (a) the left half of the area is filled with $K_1 = 2$ and the right half with $K_2 = 4$, both through the full gap; (b) instead, the lower half of the gap is filled with $K_1 = 2$ and the upper half with $K_2 = 4$, each across the full area.`,
            steps: [
              t`(a) Two capacitors side by side, each of area $A/2$ and gap $d$: $C = \dfrac{K_1\varepsilon_0 A}{2d} + \dfrac{K_2\varepsilon_0 A}{2d} = \dfrac{K_1 + K_2}{2}C_0 = 3 \times 10 = 30\ \mu\text{F}$.`,
              t`(b) Two layers in series, each of area $A$ and gap $d/2$: $C_1 = 2K_1C_0 = 40\ \mu\text{F}$, $C_2 = 2K_2C_0 = 80\ \mu\text{F}$.`,
              t`$C = \dfrac{40 \times 80}{40 + 80} = \dfrac{3200}{120} \approx 26.7\ \mu\text{F}$. (General result: $\dfrac{2K_1K_2}{K_1 + K_2}C_0$.)`,
            ],
            answer: "(a) 30 μF; (b) about 26.7 μF.",
          },
          {
            type: "example",
            title: "JEE Advanced level: earthing the inner shell",
            problem: t`Two thin concentric metal shells have radii $a = 10$ cm and $b = 20$ cm. The outer shell carries $+6\ \mu\text{C}$. The inner shell is then connected to earth through a small hole in the outer shell. Find the charge on the inner shell and the potential of the outer shell. ($k = 9 \times 10^9$ SI)`,
            steps: [
              t`Let the inner shell get charge $q'$. Earthing makes its potential zero: $V_a = k\left(\dfrac{q'}{a} + \dfrac{Q}{b}\right) = 0$.`,
              t`So $q' = -Q\dfrac{a}{b} = -6 \times \dfrac{10}{20} = -3\ \mu\text{C}$. (Some charge flows up from earth; the outer shell keeps its $+6\ \mu\text{C}$.)`,
              t`At the outer shell, both shells act as point charges at the centre: $V_b = \dfrac{k(q' + Q)}{b} = \dfrac{9 \times 10^9 \times 3 \times 10^{-6}}{0.2} = 1.35 \times 10^5$ V.`,
            ],
            answer: t`Inner shell: $-3\ \mu\text{C}$. Outer shell potential: $1.35 \times 10^5$ V (before earthing it was $2.7 \times 10^5$ V).`,
          },
          {
            type: "mistake",
            wrong: "When a battery charges a capacitor, all the energy it supplies is stored in the capacitor.",
            right: t`The battery supplies $QV$ but the capacitor stores only $\tfrac{1}{2}QV$. The other half is always lost as heat (and radiation) in the circuit, however small the resistance.`,
            why: "The battery pushes every bit of charge through the full voltage V, but early charge was stored at a lower voltage. The average voltage during charging is V/2.",
          },
          {
            type: "mistake",
            wrong: "Inside a hollow charged sphere the field is zero, so the potential is zero there too.",
            right: "Inside, the potential is constant and equal to its surface value kQ/R. E = 0 only tells you V does not change from point to point.",
            why: "Zero slope means constant, not zero. A charge can move around inside the sphere freely, but it still has potential energy qkQ/R.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Eight identical charged drops, each at potential V, merge into one drop. Its potential is:",
                options: ["2V", "4V", "8V", "16V"],
                answer: 1,
                explain: t`$V_{big} = n^{2/3}V = 8^{2/3}V = 4V$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Battery removed, dielectric slab pushed in. Stored energy?",
              emoji: "🔋",
              options: ["Rises to KU₀", "Stays U₀", "Falls to U₀/K"],
              answer: 2,
              trap: 0,
              explain: "With Q fixed, U = Q²/2C and C becomes KC₀, so U falls to U₀/K. The field does work pulling the slab in. The 'rises' answer is true only when the battery stays connected.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Shortcuts: when they are safe",
            md: "The drop results need identical drops at the same potential. The 'half the energy is lost' result needs a capacitor charged from zero by a constant-voltage battery; if it starts with some charge, work it out from the energy balance. The parallel/series dielectric trick needs each layer to fill the whole area (series) or the whole gap (parallel). For earthing problems, always set the potential of the earthed body to zero, never its charge.",
          },
          {
            type: "keypoints",
            items: [
              t`Merging n drops: $V \to n^{2/3}V$, $C \to n^{1/3}C$, energy of one drop $\to n^{5/3}U$.`,
              t`$\vec E = -\nabla V$: take the negative partial derivative in each direction.`,
              "Dielectrics side by side → parallel; stacked → series.",
              "Battery charging: work QV, stored ½QV, heat ½QV.",
              "Earthed conductor: potential zero, charge whatever is needed.",
            ],
          },
        ],
        flashcards: [
          { front: "Capacitance of an isolated sphere", back: "C = 4πε₀R; about 711 μF for the Earth." },
          { front: "n drops merge: potential", back: "V_big = n^{2/3} × V of one drop." },
          { front: "n drops merge: energy", back: "U_big = n^{5/3} × energy of one drop (= n^{2/3} × total of all drops)." },
          { front: "Two spheres joined by a wire", back: "Same potential; charge ∝ radius; surface density ∝ 1/radius." },
          { front: "Heat lost when a battery charges a capacitor from zero", back: "½CV², equal to the energy stored." },
          { front: "Spherical capacitor", back: "C = 4πε₀ab/(b − a)." },
          { front: "Force between the plates of a capacitor", back: "F = Q²/(2ε₀A), attractive." },
          { front: "Two dielectrics stacked in the gap, each d/2 thick", back: "Series: C = 2K₁K₂C₀/(K₁ + K₂)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Sixty-four identical drops, each at 2 V, merge into one drop. Find its potential in volts.",
            answer: 32,
            unit: "V",
            explain: t`$V = n^{2/3} \times 2 = 64^{2/3} \times 2 = 16 \times 2 = 32$ V.`,
            difficulty: 1,
          },
          {
            kind: "mcq",
            q: "Two metal spheres of radii 1 cm and 3 cm are joined by a thin wire and charged. The ratio of their surface charge densities σ₁ : σ₂ is:",
            options: ["1 : 3", "3 : 1", "1 : 9", "9 : 1"],
            answer: 1,
            explain: t`Equal potentials give $q \propto R$, so $\sigma = q/4\pi R^2 \propto 1/R$. $\sigma_1 : \sigma_2 = 3 : 1$.`,
            difficulty: 2,
            hint: "Same potential: kq₁/R₁ = kq₂/R₂.",
          },
          {
            kind: "numeric",
            q: "An uncharged 5 μF capacitor is charged by a 20 V battery through a resistor. How much heat (in mJ) is produced in the resistor?",
            answer: 1,
            unit: "mJ",
            explain: t`Battery work $= QV = CV^2 = 2$ mJ; stored $= \tfrac{1}{2}CV^2 = \tfrac{1}{2} \times 5 \times 10^{-6} \times 400 = 1$ mJ; heat $= 1$ mJ.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The potential in a region is V = 2x²y volts (x, y in metres). Find the magnitude of the electric field at (1 m, 1 m), in V m⁻¹.",
            answer: 4.47,
            tolerance: 0.02,
            unit: "V m⁻¹",
            explain: t`$E_x = -4xy = -4$, $E_y = -2x^2 = -2$; $|E| = \sqrt{16 + 4} = \sqrt{20} \approx 4.47$ V m⁻¹.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The plates of a parallel-plate capacitor (area A) carry charges +Q and −Q. The force between the plates is:",
            options: [t`$\dfrac{Q^2}{\varepsilon_0 A}$`, t`$\dfrac{Q^2}{2\varepsilon_0 A}$`, t`$\dfrac{Q^2}{4\pi\varepsilon_0 A}$`, "zero, since the net charge is zero"],
            answer: 1,
            explain: t`Each plate sits in the field of the other only, which is $\sigma/2\varepsilon_0$ (not $\sigma/\varepsilon_0$). $F = Q \cdot \dfrac{Q}{2\varepsilon_0 A}$.`,
            difficulty: 2,
            hint: "A plate does not push on itself.",
          },
          {
            kind: "multi",
            q: "A parallel-plate capacitor stays connected to a battery while its plates are slowly pulled further apart. Which statements are true?",
            options: ["Its capacitance decreases", "The charge on the plates decreases", "The field between the plates stays the same", "The stored energy decreases"],
            answers: [0, 1, 3],
            explain: t`$C = \varepsilon_0A/d$ falls; $V$ is fixed, so $Q = CV$ falls, $E = V/d$ falls, and $U = \tfrac{1}{2}CV^2$ falls.`,
            difficulty: 3,
            hint: "With the battery connected, V is fixed.",
          },
          {
            kind: "numeric",
            q: "An isolated charged capacitor (plates d apart) has a dielectric slab of K = 3 and thickness d/2 slid in. What is the new stored energy as a fraction of the old one?",
            answer: 0.667,
            tolerance: 0.005,
            explain: t`$C = \dfrac{\varepsilon_0 A}{d - d/2 + d/6} = \dfrac{\varepsilon_0 A}{2d/3} = 1.5\,C_0$. Q is fixed, so $U = Q^2/2C$ becomes $U_0/1.5 = 0.667\,U_0$.`,
            difficulty: 3,
            hint: "Find C with the slab formula, then use U = Q²/2C.",
          },
          {
            kind: "numeric",
            q: "A spherical capacitor has an inner sphere of radius 9 cm and an outer shell of radius 10 cm, with air between. Find its capacitance in pF. (1/4πε₀ = 9 × 10⁹ SI)",
            answer: 100,
            tolerance: 0.5,
            unit: "pF",
            explain: t`$C = \dfrac{ab}{k(b - a)} = \dfrac{0.09 \times 0.10}{9 \times 10^9 \times 0.01} = \dfrac{9 \times 10^{-3}}{9 \times 10^7} = 10^{-10}$ F = 100 pF.`,
            difficulty: 3,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Electric Charges and Fields": "c12-electric-charges-fields",
  "12:Electrostatic Potential and Capacitance": "c12-potential-capacitance",
  "12:Electrostatics": ["c12-electric-charges-fields", "c12-potential-capacitance"],
};
