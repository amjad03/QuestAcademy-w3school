import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* System of Particles and Rotational Motion (NCERT / Karnataka PUC)    */
  /* = Motion of System of Particles and Rigid Body (ISC)                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-rotational-motion",
    title: "System of Particles and Rotational Motion",
    icon: "🎡",
    description:
      "Centre of mass, vector product, torque and angular momentum, equilibrium of rigid bodies, moment of inertia, rotation about a fixed axis, theorems of axes and rolling motion.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-centre-of-mass",
        title: "Rigid Bodies and the Centre of Mass",
        summary:
          "Kinds of motion of a rigid body, the centre of mass of particles and of a uniform rod, motion of the centre of mass and conservation of linear momentum of a system.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🤸",
            caption:
              "A diver's arms and legs swing in a complicated way, yet one special point of her body follows a smooth parabola, exactly like a thrown stone.",
          },
          {
            type: "text",
            md: t`A **rigid body** is a body whose shape and size do not change: the distance between any two of its particles stays fixed. Real bodies deform a little, but a wheel, a door or a metre rule is close enough to rigid.

A rigid body can move in two basic ways. In **pure translation** every particle has the same velocity at every instant, like a book sliding across a table. In **rotation about a fixed axis** every particle moves in a circle in a plane perpendicular to the axis, with its centre on the axis, like the blades of a ceiling fan. **Rolling** (a bicycle wheel on a road) is a combination of the two.`,
          },
          {
            type: "heading",
            text: "Centre of mass",
          },
          {
            type: "text",
            md: t`For two particles of masses $m_1$ and $m_2$ on the x-axis at $x_1$ and $x_2$, the **centre of mass** (CM) is at

$X = \dfrac{m_1x_1 + m_2x_2}{m_1 + m_2}$

It is a mass-weighted average position. For equal masses it is the midpoint; it always lies closer to the heavier mass. For many particles, or a continuous body, we add (or integrate) in the same way along each axis.`,
          },
          {
            type: "formula",
            tex: t`\vec R = \frac{\sum m_i \vec r_i}{M} \qquad X = \frac{\sum m_i x_i}{M},\; Y = \frac{\sum m_i y_i}{M} \qquad \vec R = \frac{1}{M}\int \vec r\, dm`,
            caption: "M is the total mass. For a continuous body the sum becomes an integral over the mass elements dm.",
          },
          {
            type: "example",
            title: "Three particles in a plane",
            problem: t`Masses of 1 kg, 2 kg and 3 kg are placed at the points (0, 0), (4 m, 0) and (0, 3 m). Find the centre of mass.`,
            steps: [
              t`Total mass $M = 1 + 2 + 3 = 6$ kg.`,
              t`$X = \dfrac{1(0) + 2(4) + 3(0)}{6} = \dfrac{8}{6} = \dfrac{4}{3}$ m.`,
              t`$Y = \dfrac{1(0) + 2(0) + 3(3)}{6} = \dfrac{9}{6} = 1.5$ m.`,
            ],
            answer: t`The centre of mass is at $(\tfrac{4}{3}\text{ m},\ 1.5\text{ m})$, pulled towards the 3 kg mass.`,
          },
          {
            type: "example",
            title: "Derivation: centre of mass of a uniform rod",
            problem: t`Show that the centre of mass of a thin uniform rod of mass M and length L lies at its midpoint.`,
            steps: [
              t`Place the rod along the x-axis from $x = 0$ to $x = L$. Its mass per unit length is $\lambda = M/L$.`,
              t`A small element of length $dx$ at position $x$ has mass $dm = \lambda\, dx$.`,
              t`$X = \dfrac{1}{M}\displaystyle\int_0^L x\,\lambda\,dx = \dfrac{\lambda}{M}\cdot\dfrac{L^2}{2}$.`,
              t`Put $\lambda = M/L$: $X = \dfrac{M}{L}\cdot\dfrac{L^2}{2M} = \dfrac{L}{2}$.`,
            ],
            answer: t`$X = L/2$: the CM of a uniform rod is at its geometric centre. By symmetry the same holds for a uniform ring, disc, sphere or cylinder (its centre), and a uniform triangular lamina has its CM at the centroid.`,
          },
          {
            type: "heading",
            text: "Motion of the centre of mass",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Start from $M\vec R = \sum m_i \vec r_i$ and differentiate with time: $M\vec V = \sum m_i \vec v_i = \vec P$, the total linear momentum.`,
              t`Differentiate again: $M\vec A = \sum m_i \vec a_i = \sum \vec F_i$, the sum of all forces on all particles.`,
              t`Each force is either external or internal. Internal forces come in action–reaction pairs (Newton's third law), so they cancel in the sum.`,
              t`Hence $M\vec A = \vec F_{ext}$: the CM moves as if all the mass were at that point and all external forces acted there.`,
            ],
          },
          {
            type: "formula",
            tex: t`M\vec A_{cm} = \vec F_{ext} \qquad \vec P = M\vec V_{cm} \qquad \vec F_{ext} = 0 \;\Rightarrow\; \vec P = \text{constant},\; \vec V_{cm} = \text{constant}`,
            caption: "Conservation of linear momentum of a system: with no net external force, the CM keeps moving with constant velocity (or stays at rest).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 2 kg mass sits at x = 0 and a 3 kg mass at x = 5 m. Where is the centre of mass?",
                answer: 3,
                unit: "m",
                explain: t`$X = \dfrac{2(0) + 3(5)}{5} = 3$ m, nearer the heavier mass.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A shell explodes in mid-air into two pieces. Where does the CM go?",
              emoji: "🎆",
              options: [
                "It keeps following the original parabola",
                "It falls straight down from the point of explosion",
                "It stops at the point of explosion",
              ],
              answer: 0,
              trap: 1,
              explain:
                "The explosion forces are internal and cancel. Only gravity acts from outside, so the CM carries on along the same parabola until a fragment hits the ground (then the ground's force is a new external force).",
            },
          },
          {
            type: "mistake",
            wrong: "The centre of mass is always a point inside the material of the body.",
            right: "The centre of mass can lie where there is no mass at all, such as the centre of a ring, a bangle or an L-shaped plate.",
            why: "We picture the CM as the 'middle of the stuff', which is true for solid symmetric bodies. But it is only a mass-weighted average position, and for hollow or bent shapes that average can fall in empty space.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In the derivation of $M\\vec A = \\vec F_{ext}$, examiners look for the sentence that internal forces cancel in pairs by Newton's third law. Write it explicitly. In numericals, always write the coordinates of each mass in a table before substituting.",
          },
          {
            type: "keypoints",
            items: [
              "A rigid body can translate, rotate about a fixed axis, or do both (rolling).",
              t`CM: $\vec R = \sum m_i\vec r_i / M$; a uniform rod has its CM at the midpoint.`,
              t`$M\vec A_{cm} = \vec F_{ext}$: internal forces cannot change the motion of the CM.`,
              t`With no external force, total momentum $\vec P = M\vec V_{cm}$ is conserved.`,
            ],
          },
        ],
        flashcards: [
          { front: "Rigid body", back: "A body in which the distance between every pair of particles stays fixed." },
          { front: "Pure translation", back: "Every particle of the body has the same velocity at every instant." },
          { front: "Rotation about a fixed axis", back: "Every particle moves in a circle in a plane perpendicular to the axis, centred on the axis." },
          { front: "CM of two particles", back: t`$X = (m_1x_1 + m_2x_2)/(m_1 + m_2)$, closer to the heavier mass.` },
          { front: "Equation of motion of the CM", back: t`$M\vec A_{cm} = \vec F_{ext}$; internal forces cancel in pairs.` },
          { front: "Total momentum of a system", back: t`$\vec P = M\vec V_{cm}$. It is conserved when the net external force is zero.` },
          { front: "CM of a uniform ring", back: "At its geometric centre, where there is no mass." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Where is the centre of mass of a uniform circular ring?",
            options: ["At its centre", "On the rim, at the top", "Anywhere on the rim", "It has no centre of mass"],
            answer: 0,
            explain: "By symmetry the CM is at the geometric centre, even though no mass sits there.",
          },
          {
            kind: "numeric",
            q: "Masses of 1 kg at (0, 0), 1 kg at (2 m, 0) and 2 kg at (1 m, 2 m). Find the y-coordinate of the centre of mass.",
            answer: 1,
            unit: "m",
            explain: t`$Y = \dfrac{1(0) + 1(0) + 2(2)}{4} = 1$ m.`,
          },
          {
            kind: "truefalse",
            q: "Internal forces between the particles of a system can change the velocity of its centre of mass.",
            answer: false,
            explain: "Internal forces cancel in action–reaction pairs, so only external forces change the CM velocity.",
          },
          {
            kind: "numeric",
            q: "A 60 kg fisherman walks 4 m from one end of a 140 kg boat towards the other, on still water with no drag. How far does the boat move relative to the water?",
            answer: 1.2,
            unit: "m",
            difficulty: 2,
            hint: "No external horizontal force, so the CM of man + boat stays fixed.",
            explain: t`If the boat moves $x$ backwards, the man moves $4 - x$ forwards relative to the water. CM fixed: $60(4 - x) = 140x \Rightarrow 240 = 200x \Rightarrow x = 1.2$ m.`,
          },
          {
            kind: "numeric",
            q: "A 3 kg ball moves at 2 m/s along +x and a 1 kg ball moves at 6 m/s along −x. What is the speed of their centre of mass?",
            answer: 0,
            unit: "m/s",
            explain: t`$V = \dfrac{3(2) + 1(-6)}{4} = 0$. The total momentum is zero, so the CM is at rest.`,
          },
          {
            kind: "multi",
            q: "Which of these are examples of pure translation?",
            options: [
              "A box sliding down a ramp without tipping",
              "The blades of a running ceiling fan",
              "A piston moving in an engine cylinder",
              "A wheel rolling along a road",
            ],
            answers: [0, 2],
            explain: "In the box and the piston every point has the same velocity. The fan rotates; the rolling wheel translates and rotates together.",
          },
          {
            kind: "fill",
            q: "The total linear momentum of a system equals its total mass times the velocity of its ___.",
            answer: ["centre of mass", "center of mass", "cm"],
            explain: t`$\vec P = M\vec V_{cm}$.`,
          },
          {
            kind: "mcq",
            q: "A firework rocket bursts at the top of its path. Ignoring air drag, the centre of mass of the fragments (before any lands):",
            options: [
              "continues along the original parabolic path",
              "drops vertically",
              "stays fixed in the air",
              "moves along a straight line upwards",
            ],
            answer: 0,
            explain: "The burst forces are internal; gravity is the only external force, so the CM path is unchanged.",
          },
        ],
      },
      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-torque-angular-momentum",
        title: "Vector Product, Torque, Angular Momentum and Equilibrium",
        summary:
          "Vector product, angular velocity, torque and angular momentum of a particle, the relation τ = dL/dt and its conservation, equilibrium of a rigid body, couples, moments and centre of gravity.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🔧",
            caption:
              "A mechanic loosening a tight nut holds the far end of the spanner. The same push, applied further from the nut, turns it more easily.",
          },
          {
            type: "text",
            md: t`Rotation needs a new kind of product. The **vector product** (cross product) of $\vec a$ and $\vec b$ is a vector $\vec c = \vec a \times \vec b$ of size $ab\sin\theta$, perpendicular to the plane of $\vec a$ and $\vec b$. Its direction is given by the **right-hand rule**: curl the fingers from $\vec a$ to $\vec b$; the thumb points along $\vec c$.

Properties: $\vec a \times \vec b = -\vec b \times \vec a$ (not commutative); it is distributive over addition; $\vec a \times \vec a = 0$; and $\hat i \times \hat j = \hat k$, $\hat j \times \hat k = \hat i$, $\hat k \times \hat i = \hat j$.`,
          },
          {
            type: "formula",
            tex: t`\vec a \times \vec b = \begin{vmatrix} \hat i & \hat j & \hat k \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} \qquad |\vec a \times \vec b| = ab\sin\theta`,
          },
          {
            type: "text",
            md: t`**Angular velocity** $\vec\omega$ points along the axis of rotation (right-hand rule). A particle at position $\vec r$ from a point on the axis moves with $\vec v = \vec\omega \times \vec r$; its speed is $v = \omega r_\perp$, where $r_\perp$ is its distance from the axis. **Angular acceleration** is $\vec\alpha = d\vec\omega/dt$. For a fixed axis, $\vec\omega$ and $\vec\alpha$ stay along that axis.`,
          },
          {
            type: "formula",
            tex: t`\vec\tau = \vec r \times \vec F,\;\; \tau = rF\sin\theta = r_\perp F \qquad \vec L = \vec r \times \vec p,\;\; L = rp\sin\theta = r_\perp p`,
            caption: t`Torque (moment of force) in N m; angular momentum in kg m² s⁻¹. $r_\perp$ is the perpendicular distance of the line of action from the point.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Differentiate $\vec L = \vec r \times \vec p$: $\dfrac{d\vec L}{dt} = \dfrac{d\vec r}{dt}\times\vec p + \vec r \times \dfrac{d\vec p}{dt}$.`,
              t`The first term is $\vec v \times m\vec v = 0$, since a vector crossed with a parallel vector is zero.`,
              t`The second term is $\vec r \times \vec F = \vec\tau$. So $d\vec L/dt = \vec\tau$ for a particle.`,
              t`For a system, internal torques cancel (internal forces are equal, opposite and along the same line), so $d\vec L/dt = \vec\tau_{ext}$.`,
              t`If $\vec\tau_{ext} = 0$, then $\vec L$ is constant: the **conservation of angular momentum**.`,
            ],
          },
          {
            type: "example",
            title: "Torque from components",
            problem: t`A force $\vec F = (\hat i + 2\hat j - \hat k)$ N acts at the point $\vec r = (2\hat i - \hat j + 3\hat k)$ m. Find the torque about the origin.`,
            steps: [
              t`$\vec\tau = \vec r \times \vec F = \begin{vmatrix} \hat i & \hat j & \hat k \\ 2 & -1 & 3 \\ 1 & 2 & -1 \end{vmatrix}$.`,
              t`$\hat i$ part: $(-1)(-1) - (3)(2) = 1 - 6 = -5$.`,
              t`$\hat j$ part: $-[(2)(-1) - (3)(1)] = -[-5] = 5$.`,
              t`$\hat k$ part: $(2)(2) - (-1)(1) = 5$.`,
            ],
            answer: t`$\vec\tau = (-5\hat i + 5\hat j + 5\hat k)$ N m, of magnitude $5\sqrt3 \approx 8.66$ N m.`,
          },
          {
            type: "heading",
            text: "Equilibrium of a rigid body",
          },
          {
            type: "text",
            md: t`A rigid body is in **mechanical equilibrium** when (1) the net external force is zero (**translational equilibrium**) and (2) the net external torque is zero (**rotational equilibrium**). When the net force is zero, the net torque is the same about every point, so you may take moments about any convenient point.

A **couple** is a pair of equal and opposite forces with different lines of action. Its net force is zero, but it has a torque $Fd$ ($d$ = distance between the lines), the same about every point. You apply a couple when you turn a steering wheel or open a bottle cap. For a lever, rotational equilibrium gives the **principle of moments**: load × load arm = effort × effort arm.

The **centre of gravity** is the point about which the total gravitational torque on the body is zero. It coincides with the CM when $g$ is the same over the whole body, which is true for everyday objects but not for a body as tall as a mountain.`,
          },
          {
            type: "example",
            title: "Reactions on a loaded plank",
            problem: "A uniform plank 4 m long and weighing 200 N rests on supports at its ends A and B. A painter weighing 600 N stands 1 m from A. Find the force each support exerts.",
            steps: [
              t`Forces: $R_A$ and $R_B$ up; 600 N at 1 m from A and 200 N at the midpoint (2 m from A) down.`,
              t`Torques about A (anticlockwise positive): $R_B(4) - 600(1) - 200(2) = 0 \Rightarrow R_B = 1000/4 = 250$ N.`,
              t`Translational equilibrium: $R_A + R_B = 800$ N $\Rightarrow R_A = 550$ N.`,
              t`Check about B: $R_A(4) = 600(3) + 200(2) = 2200 \Rightarrow R_A = 550$ N. ✓`,
            ],
            answer: t`$R_A = 550$ N and $R_B = 250$ N. The support nearer the painter carries more.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A force of 20 N is applied at right angles to a spanner, 0.25 m from the nut. What torque does it produce?",
                answer: 5,
                unit: "N m",
                explain: t`$\tau = r_\perp F = 0.25 \times 20 = 5$ N m.`,
              },
              {
                kind: "mcq",
                q: "A particle moves anticlockwise in a circle in the xy-plane (seen from +z). Its angular momentum about the centre points along:",
                options: ["+z", "−z", "+x", "the velocity"],
                answer: 0,
                explain: t`$\vec L = \vec r \times \vec p$; by the right-hand rule, anticlockwise motion seen from +z gives $\vec L$ along +z.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If the net force on a body is zero, the body must be in equilibrium.",
            right: "Equilibrium needs both zero net force and zero net torque.",
            why: "A couple has zero net force, yet it sets a steering wheel spinning. Zero force only stops the CM from accelerating; the body can still gain angular acceleration about the CM.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each quantity to its expression.",
              pairs: [
                ["Torque", t`$\vec r \times \vec F$`],
                ["Angular momentum of a particle", t`$\vec r \times \vec p$`],
                ["Moment of a couple", t`$F \times d$`],
                ["Rate of change of angular momentum", "Net external torque"],
                ["Velocity of a point on a rotating body", t`$\vec\omega \times \vec r$`],
              ],
              explain: "Each rotational quantity is a cross product with the position vector. Torque changes angular momentum just as force changes linear momentum.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "State your sign convention (anticlockwise positive) and the point you take moments about before writing the torque equation. Take moments about the point where an unknown force acts, so that force drops out.",
          },
          {
            type: "keypoints",
            items: [
              t`$|\vec a \times \vec b| = ab\sin\theta$, direction by the right-hand rule; $\vec a \times \vec b = -\vec b \times \vec a$.`,
              t`$\vec\tau = \vec r \times \vec F$, $\vec L = \vec r \times \vec p$ and $d\vec L/dt = \vec\tau_{ext}$.`,
              t`No external torque ⇒ angular momentum is conserved.`,
              "Equilibrium: net force = 0 and net torque = 0. A couple gives torque with zero net force.",
              "Centre of gravity = centre of mass when g is uniform over the body.",
            ],
          },
        ],
        flashcards: [
          { front: "Magnitude of a cross product", back: t`$|\vec a \times \vec b| = ab\sin\theta$; zero when the vectors are parallel.` },
          { front: t`$\hat k \times \hat i$`, back: t`$\hat j$ (cyclic order i → j → k → i gives +).` },
          { front: "Torque", back: t`$\vec\tau = \vec r \times \vec F$, magnitude $r_\perp F$, unit N m.` },
          { front: "Angular momentum of a particle", back: t`$\vec L = \vec r \times \vec p$, unit kg m² s⁻¹ (= J s).` },
          { front: "Torque–angular momentum relation", back: t`$d\vec L/dt = \vec\tau_{ext}$.` },
          { front: "Couple", back: "Two equal, opposite, non-collinear forces: net force zero, torque Fd about every point." },
          { front: "Conditions for equilibrium of a rigid body", back: "Net external force = 0 and net external torque = 0." },
          { front: "Centre of gravity", back: "Point about which the total gravitational torque is zero; equals the CM in uniform g." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $\vec a$ and $\vec b$ are parallel, $\vec a \times \vec b$ is:`,
            options: [t`zero`, t`$ab$`, t`$-ab$`, t`a unit vector`],
            answer: 0,
            explain: t`$\sin 0° = 0$, so the cross product of parallel vectors is the zero vector.`,
          },
          {
            kind: "numeric",
            q: "A 10 N force acts at a point 0.5 m from a pivot. The angle between the position vector and the force is 30°. Find the torque.",
            answer: 2.5,
            unit: "N m",
            explain: t`$\tau = rF\sin\theta = 0.5 \times 10 \times 0.5 = 2.5$ N m.`,
          },
          {
            kind: "truefalse",
            q: "The torque of a couple has the same value about every point.",
            answer: true,
            explain: t`About any point the moments add to $F \times d$, where $d$ is the gap between the lines of action.`,
          },
          {
            kind: "numeric",
            q: "A uniform 6 m beam weighing 300 N rests on supports at its two ends. A 400 N load hangs 1.5 m from the left end. Find the reaction at the left support.",
            answer: 450,
            unit: "N",
            difficulty: 2,
            hint: "Take moments about the right support so its reaction drops out.",
            explain: t`About the right end: $R_L(6) = 400(4.5) + 300(3) = 1800 + 900 = 2700 \Rightarrow R_L = 450$ N. (Then $R_R = 700 - 450 = 250$ N.)`,
          },
          {
            kind: "mcq",
            q: "A particle moves with constant velocity along a straight line that does not pass through the origin. Its angular momentum about the origin is:",
            options: ["constant and non-zero", "zero", "increasing", "decreasing"],
            answer: 0,
            difficulty: 2,
            explain: t`$L = m v r_\perp$, and the perpendicular distance $r_\perp$ of the line from the origin is fixed. No force means no torque, so $L$ is constant.`,
          },
          {
            kind: "mcq",
            q: t`$\hat i \times \hat k$ equals:`,
            options: [t`$-\hat j$`, t`$\hat j$`, t`$\hat k$`, t`$0$`],
            answer: 0,
            explain: t`$\hat k \times \hat i = \hat j$, so reversing the order gives $\hat i \times \hat k = -\hat j$.`,
          },
          {
            kind: "numeric",
            q: "The angular momentum of a flywheel rises steadily from 2 kg m²/s to 8 kg m²/s in 3 s. What torque acts on it?",
            answer: 2,
            unit: "N m",
            explain: t`$\tau = \Delta L/\Delta t = (8 - 2)/3 = 2$ N m.`,
          },
          {
            kind: "fill",
            q: "The centre of gravity of a body coincides with its centre of mass when ___ is the same at every point of the body.",
            answer: ["g", "gravity", "acceleration due to gravity", "gravitational field"],
            explain: "With uniform g, the gravitational torque about the CM is zero, so the two points coincide.",
          },
        ],
      },
      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-moment-of-inertia-fixed-axis",
        title: "Moment of Inertia and Rotation About a Fixed Axis",
        summary:
          "Moment of inertia and radius of gyration, standard values, kinematics and dynamics of rotation about a fixed axis, work and power, and angular momentum L = Iω with its conservation.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🌀",
            caption:
              "Switch off a ceiling fan and it keeps turning for a while. A heavy flywheel in a flour mill keeps the stones turning smoothly between pushes.",
          },
          {
            type: "text",
            md: t`When a rigid body rotates with angular speed $\omega$ about a fixed axis, a particle at distance $r_i$ from the axis has speed $v_i = r_i\omega$. The total kinetic energy is

$K = \sum \tfrac12 m_i r_i^2\omega^2 = \tfrac12\left(\sum m_i r_i^2\right)\omega^2 = \tfrac12 I\omega^2$

The quantity $I = \sum m_i r_i^2$ is the **moment of inertia** about that axis. It plays the role of mass in rotation: the larger $I$, the harder it is to change the rotation. It depends on the mass, on how the mass is spread out, and on the axis chosen, but not on $\omega$. The **radius of gyration** $k$ is defined by $I = Mk^2$: the distance from the axis at which the whole mass could sit and give the same $I$.`,
          },
          {
            type: "formula",
            tex: t`I = \sum m_i r_i^2 \qquad K_{rot} = \tfrac12 I\omega^2 \qquad I = Mk^2`,
            caption: "SI unit of I: kg m². Radius of gyration k is a length.",
          },
          {
            type: "table",
            headers: ["Body", "Axis", "Moment of inertia"],
            rows: [
              ["Thin ring, radius R", "through centre, perpendicular to its plane", t`$MR^2$`],
              ["Thin ring, radius R", "a diameter", t`$MR^2/2$`],
              ["Thin rod, length L", "through the midpoint, perpendicular to the rod", t`$ML^2/12$`],
              ["Circular disc, radius R", "through centre, perpendicular to its plane", t`$MR^2/2$`],
              ["Circular disc, radius R", "a diameter", t`$MR^2/4$`],
              ["Hollow (thin-walled) cylinder", "its own axis", t`$MR^2$`],
              ["Solid cylinder", "its own axis", t`$MR^2/2$`],
              ["Solid sphere", "a diameter", t`$2MR^2/5$`],
              ["Thin hollow sphere", "a diameter", t`$2MR^2/3$`],
            ],
          },
          {
            type: "heading",
            text: "Kinematics of rotation about a fixed axis",
          },
          {
            type: "formula",
            tex: t`\omega = \omega_0 + \alpha t \qquad \theta = \omega_0 t + \tfrac12\alpha t^2 \qquad \omega^2 = \omega_0^2 + 2\alpha\theta`,
            caption: "Valid only for constant angular acceleration α. They mirror the equations of uniformly accelerated linear motion.",
          },
          {
            type: "example",
            title: "A grinding wheel speeds up",
            problem: "A grinding wheel in a Peenya workshop speeds up uniformly from 600 rpm to 1800 rpm in 10 s. Find its angular acceleration and the number of revolutions it makes in this time.",
            steps: [
              t`Convert: $\omega_0 = 600 \times \dfrac{2\pi}{60} = 20\pi$ rad/s and $\omega = 1800 \times \dfrac{2\pi}{60} = 60\pi$ rad/s.`,
              t`$\alpha = \dfrac{\omega - \omega_0}{t} = \dfrac{40\pi}{10} = 4\pi \approx 12.6$ rad/s².`,
              t`$\theta = \dfrac{\omega_0 + \omega}{2}\,t = 40\pi \times 10 = 400\pi$ rad.`,
              t`Revolutions $= \dfrac{400\pi}{2\pi} = 200$.`,
            ],
            answer: t`$\alpha = 4\pi$ rad/s² (about 12.6 rad/s²); the wheel turns 200 times.`,
          },
          {
            type: "text",
            md: t`**Dynamics.** A force $F$ at distance $r$ (perpendicular) does work $dW = F\,r\,d\theta = \tau\,d\theta$ as the body turns through $d\theta$, so the power is $P = \tau\omega$. With no losses this power raises the kinetic energy: $\tau\omega = \dfrac{d}{dt}\left(\tfrac12 I\omega^2\right) = I\omega\alpha$, which gives $\tau = I\alpha$, the rotational form of Newton's second law.

For rotation about a fixed axis the angular momentum along the axis is $L = I\omega$, and $\tau = dL/dt$. If the external torque is zero, $I\omega$ stays constant. A dancer pulling her arms in, a diver curling into a tuck and a student on a rotating stool pulling in two dumbbells all reduce $I$ and so spin faster.`,
          },
          {
            type: "table",
            headers: ["Linear motion", "Rotation about a fixed axis"],
            rows: [
              [t`displacement $x$`, t`angular displacement $\theta$`],
              [t`velocity $v = dx/dt$`, t`angular velocity $\omega = d\theta/dt$`],
              [t`acceleration $a$`, t`angular acceleration $\alpha$`],
              [t`mass $m$`, t`moment of inertia $I$`],
              [t`force $F = ma$`, t`torque $\tau = I\alpha$`],
              [t`momentum $p = mv$`, t`angular momentum $L = I\omega$`],
              [t`kinetic energy $\tfrac12 mv^2$`, t`kinetic energy $\tfrac12 I\omega^2$`],
              [t`work $F\,dx$, power $Fv$`, t`work $\tau\,d\theta$, power $\tau\omega$`],
            ],
          },
          {
            type: "example",
            title: "String pulled off a pulley",
            problem: "A string is wound on a uniform disc-shaped pulley of mass 4 kg and radius 0.25 m, free to turn about a fixed horizontal axle. The string is pulled with a steady 10 N force. Find the angular acceleration, and show that the work done in the first 2 s equals the kinetic energy gained.",
            steps: [
              t`$I = \tfrac12 MR^2 = \tfrac12(4)(0.25)^2 = 0.125$ kg m².`,
              t`$\tau = FR = 10 \times 0.25 = 2.5$ N m, so $\alpha = \tau/I = 2.5/0.125 = 20$ rad/s².`,
              t`After 2 s: $\omega = \alpha t = 40$ rad/s and $\theta = \tfrac12\alpha t^2 = 40$ rad.`,
              t`Work $= \tau\theta = 2.5 \times 40 = 100$ J. Kinetic energy $= \tfrac12(0.125)(40)^2 = 100$ J. ✓`,
            ],
            answer: t`$\alpha = 20$ rad/s²; both the work done and the rotational KE are 100 J.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the moment of inertia of a uniform disc of mass 2 kg and radius 0.5 m about its central axis perpendicular to its plane.",
                answer: 0.25,
                unit: "kg m²",
                explain: t`$I = \tfrac12 MR^2 = \tfrac12(2)(0.25) = 0.25$ kg m².`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The moment of inertia of a body is a fixed number for that body, just like its mass.",
            right: "The moment of inertia depends on the axis. The same rod has ML²/12 about its middle but ML²/3 about one end.",
            why: "Mass counts every particle equally, so it is fixed. I weights each particle by the square of its distance from the axis, so moving the axis changes every distance and so changes I.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A spinning skater halves her moment of inertia. What happens?",
              emoji: "⛸️",
              options: [
                "ω doubles and her kinetic energy stays the same",
                "ω doubles and her kinetic energy doubles",
                "ω stays the same and her kinetic energy halves",
              ],
              answer: 1,
              trap: 0,
              explain: t`$L = I\omega$ is conserved, so $\omega$ doubles. But $K = L^2/2I$, so halving $I$ doubles $K$. The extra energy comes from the work her muscles do pulling her arms in.`,
            },
          },
          {
            type: "keypoints",
            items: [
              t`$I = \sum m r^2$ depends on mass distribution and the axis; $K = \tfrac12 I\omega^2$; $I = Mk^2$.`,
              t`Constant α: $\omega = \omega_0 + \alpha t$, $\theta = \omega_0 t + \tfrac12\alpha t^2$, $\omega^2 = \omega_0^2 + 2\alpha\theta$.`,
              t`$\tau = I\alpha$, $W = \tau\theta$, $P = \tau\omega$, $L = I\omega$.`,
              t`Zero external torque ⇒ $I\omega$ = constant (skater, diver, rotating stool).`,
            ],
          },
        ],
        flashcards: [
          { front: "Moment of inertia", back: t`$I = \sum m_i r_i^2$ about a given axis; unit kg m².` },
          { front: "Radius of gyration", back: t`$k$ with $I = Mk^2$; for a disc about its axis $k = R/\sqrt2$.` },
          { front: "Rotational kinetic energy", back: t`$K = \tfrac12 I\omega^2 = L^2/2I$.` },
          { front: "Newton's second law for rotation", back: t`$\tau = I\alpha$ (about a fixed axis).` },
          { front: "Power delivered by a torque", back: t`$P = \tau\omega$.` },
          { front: "I of a solid sphere about a diameter", back: t`$\tfrac25 MR^2$.` },
          { front: "I of a thin rod about its midpoint", back: t`$\tfrac{1}{12}ML^2$ (axis perpendicular to the rod).` },
          { front: "Why does a diver tuck?", back: "Tucking reduces I; with L = Iω conserved, ω increases so she completes more somersaults." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Four bodies have the same mass and radius. Which has the largest moment of inertia about its central symmetry axis?",
            options: ["Thin ring", "Uniform disc", "Solid sphere", "Thin hollow sphere"],
            answer: 0,
            explain: t`Ring: $MR^2$; hollow sphere: $\tfrac23 MR^2$; disc: $\tfrac12 MR^2$; solid sphere: $\tfrac25 MR^2$. All of the ring's mass is at distance R.`,
          },
          {
            kind: "numeric",
            q: "Find the radius of gyration of a uniform disc of radius 0.2 m about its central perpendicular axis.",
            answer: 0.141,
            tolerance: 0.002,
            unit: "m",
            explain: t`$Mk^2 = \tfrac12 MR^2 \Rightarrow k = R/\sqrt2 = 0.2/1.414 \approx 0.141$ m.`,
          },
          {
            kind: "numeric",
            q: "A torque of 10 N m acts on a wheel of moment of inertia 2 kg m². What is its angular acceleration?",
            answer: 5,
            unit: "rad/s²",
            explain: t`$\alpha = \tau/I = 10/2 = 5$ rad/s².`,
          },
          {
            kind: "numeric",
            q: "A flywheel with I = 0.5 kg m² spins at 20 rad/s. What is its kinetic energy?",
            answer: 100,
            unit: "J",
            explain: t`$K = \tfrac12(0.5)(20)^2 = 100$ J.`,
          },
          {
            kind: "numeric",
            q: "A student on a frictionless rotating stool has I = 6 kg m² and spins at 2 rad/s with arms out. She pulls the dumbbells in so that I becomes 2 kg m². Find her new angular speed.",
            answer: 6,
            unit: "rad/s",
            difficulty: 2,
            explain: t`$I_1\omega_1 = I_2\omega_2 \Rightarrow 6 \times 2 = 2\omega_2 \Rightarrow \omega_2 = 6$ rad/s.`,
          },
          {
            kind: "truefalse",
            q: "In τ = Iα, the torque and the moment of inertia must be taken about the same axis.",
            answer: true,
            explain: "Both depend on the axis; mixing axes gives wrong answers.",
          },
          {
            kind: "multi",
            q: "The moment of inertia of a rigid body depends on:",
            options: ["its mass", "how the mass is distributed", "the position and direction of the axis", "its angular velocity"],
            answers: [0, 1, 2],
            explain: t`$I = \sum m r^2$ involves only masses and their distances from the axis. It does not depend on how fast the body turns.`,
          },
          {
            kind: "numeric",
            q: "A wheel starts from rest with a constant angular acceleration of 3 rad/s². Through what angle does it turn in 4 s?",
            answer: 24,
            unit: "rad",
            explain: t`$\theta = \tfrac12\alpha t^2 = \tfrac12(3)(16) = 24$ rad.`,
          },
        ],
      },
      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-axes-theorems-rolling",
        title: "Theorems of Axes and Rolling Motion",
        summary:
          "The perpendicular and parallel axis theorems, rolling without slipping, kinetic energy of a rolling body and rolling down an inclined plane.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note: who needs this lesson",
            md: "The rationalised NCERT book (used by CBSE and Karnataka PUC) no longer has the sections on the theorems of perpendicular and parallel axes and on rolling motion. **ISC** Class 11 still teaches them, and **JEE Main, JEE Advanced, KCET and COMEDK** questions use them often. CBSE and Karnataka students should study this lesson for entrance exams; check your current board syllabus list for the board exam.",
          },
          {
            type: "text",
            md: t`**Perpendicular axis theorem.** For a **plane lamina** (a flat body), the moment of inertia about an axis perpendicular to its plane equals the sum of the moments of inertia about two perpendicular axes in its plane that meet at the same point: $I_z = I_x + I_y$. It works only for flat bodies, because it uses $r^2 = x^2 + y^2$ for points with $z = 0$.

**Parallel axis theorem.** For **any** body, the moment of inertia about an axis equals the moment of inertia about a parallel axis through the centre of mass plus $Md^2$, where $d$ is the distance between the axes. So among all parallel axes, the one through the CM gives the smallest $I$.`,
          },
          {
            type: "formula",
            tex: t`I_z = I_x + I_y \;\;(\text{plane lamina}) \qquad\qquad I = I_{cm} + Md^2 \;\;(\text{any body})`,
          },
          {
            type: "example",
            title: "Disc and ring about a diameter",
            problem: t`Use the perpendicular axis theorem to find the moment of inertia of a uniform disc about a diameter, given $I = \tfrac12 MR^2$ about its central perpendicular axis.`,
            steps: [
              t`Take two perpendicular diameters as the x- and y-axes in the plane of the disc; the z-axis is the central perpendicular axis.`,
              t`By symmetry $I_x = I_y = I_d$.`,
              t`$I_z = I_x + I_y \Rightarrow \tfrac12 MR^2 = 2I_d$.`,
            ],
            answer: t`$I_d = \tfrac14 MR^2$. The same steps for a ring ($I_z = MR^2$) give $\tfrac12 MR^2$ about a diameter.`,
          },
          {
            type: "example",
            title: "A rod about one end",
            problem: "A uniform rod of mass 0.5 kg and length 1.2 m is pivoted at one end. Find its moment of inertia about a perpendicular axis through that end.",
            steps: [
              t`About the midpoint: $I_{cm} = \dfrac{ML^2}{12}$. The end is $d = L/2$ from the CM.`,
              t`$I = \dfrac{ML^2}{12} + M\left(\dfrac{L}{2}\right)^2 = \dfrac{ML^2}{12} + \dfrac{ML^2}{4} = \dfrac{ML^2}{3}$.`,
              t`$I = \dfrac{0.5 \times (1.2)^2}{3} = \dfrac{0.72}{3} = 0.24$ kg m².`,
            ],
            answer: t`$I = ML^2/3 = 0.24$ kg m².`,
          },
          {
            type: "heading",
            text: "Rolling without slipping",
          },
          {
            type: "text",
            md: t`A wheel rolling on a road does two things at once: its centre moves forward with $v_{cm}$, and the wheel spins about the centre with $\omega$. In **rolling without slipping**, the point touching the ground is momentarily at rest, so the forward speed $v_{cm}$ and the backward speed $R\omega$ of that point cancel: $v_{cm} = R\omega$.

Then the top point moves at $v_{cm} + R\omega = 2v_{cm}$, and the contact point at zero. Static friction may act at the contact point, but since that point does not slide, the friction does **no work**, and mechanical energy is conserved.`,
          },
          {
            type: "formula",
            tex: t`v_{cm} = R\omega \qquad K = \tfrac12 Mv_{cm}^2 + \tfrac12 I_{cm}\omega^2 = \tfrac12 Mv_{cm}^2\left(1 + \frac{k^2}{R^2}\right)`,
            caption: "Kinetic energy of rolling = translational KE of the CM + rotational KE about the CM.",
          },
          {
            type: "example",
            title: "Rolling down an incline",
            problem: "A solid cylinder starts from rest and rolls without slipping down an incline, dropping through a height of 1.2 m. Find its speed at the bottom (g = 9.8 m/s²), and its acceleration on a slope of angle θ.",
            steps: [
              t`Energy: $Mgh = \tfrac12 Mv^2\left(1 + \dfrac{k^2}{R^2}\right) \Rightarrow v = \sqrt{\dfrac{2gh}{1 + k^2/R^2}}$.`,
              t`Solid cylinder: $k^2/R^2 = \tfrac12$, so $v = \sqrt{\dfrac{4gh}{3}} = \sqrt{\dfrac{4 \times 9.8 \times 1.2}{3}} = \sqrt{15.68} \approx 3.96$ m/s.`,
              t`Distance along the slope $s = h/\sin\theta$ and $v^2 = 2as$, so $a = \dfrac{g\sin\theta}{1 + k^2/R^2} = \tfrac23 g\sin\theta$ for the cylinder.`,
            ],
            answer: t`$v \approx 3.96$ m/s at the bottom; $a = \tfrac23 g\sin\theta$, less than the $g\sin\theta$ of a frictionless sliding block.`,
          },
          {
            type: "table",
            headers: ["Rolling body", t`$k^2/R^2$`, "Share of KE that is rotational", t`Acceleration on incline`],
            rows: [
              ["Solid sphere", t`$2/5$`, t`$2/7$`, t`$\tfrac57 g\sin\theta$`],
              ["Disc or solid cylinder", t`$1/2$`, t`$1/3$`, t`$\tfrac23 g\sin\theta$`],
              ["Thin hollow sphere", t`$2/3$`, t`$2/5$`, t`$\tfrac35 g\sin\theta$`],
              ["Ring or thin hollow cylinder", t`$1$`, t`$1/2$`, t`$\tfrac12 g\sin\theta$`],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A disc of mass 2 kg rolls without slipping at 3 m/s. Find its total kinetic energy.",
                answer: 13.5,
                unit: "J",
                explain: t`$K = \tfrac12 Mv^2(1 + \tfrac12) = \tfrac12(2)(9)(1.5) = 13.5$ J (9 J translational + 4.5 J rotational).`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Friction always wastes energy, so a ball rolling down a rough slope loses mechanical energy to friction.",
            right: "In rolling without slipping, the contact point does not slide, so static friction does no work and mechanical energy is conserved.",
            why: "We usually meet sliding (kinetic) friction, which does turn energy into heat. In pure rolling, friction only shares the energy between translation and rotation; that is why a rolling body is slower than a frictionless sliding block.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Released together on one slope, which reaches the bottom first? First to last.",
              items: ["Solid sphere", "Solid cylinder", "Thin hollow sphere", "Ring"],
              explain: t`$a = g\sin\theta/(1 + k^2/R^2)$. The smaller $k^2/R^2$ (mass closer to the axis), the less energy goes into spin and the faster the body. Mass and radius do not matter.`,
            },
          },
          {
            type: "keypoints",
            items: [
              t`Perpendicular axes (plane lamina only): $I_z = I_x + I_y$. Parallel axes (any body): $I = I_{cm} + Md^2$.`,
              t`Rod about an end: $ML^2/3$; disc about a diameter: $MR^2/4$; ring about a diameter: $MR^2/2$.`,
              t`Pure rolling: $v_{cm} = R\omega$; top point moves at $2v_{cm}$, contact point is at rest.`,
              t`$K = \tfrac12 Mv^2(1 + k^2/R^2)$; on an incline $a = g\sin\theta/(1 + k^2/R^2)$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Perpendicular axis theorem", back: t`$I_z = I_x + I_y$, for a plane lamina, all three axes through one point.` },
          { front: "Parallel axis theorem", back: t`$I = I_{cm} + Md^2$, for any body; axes parallel, $d$ apart.` },
          { front: "I of a rod about one end", back: t`$\tfrac13 ML^2$.` },
          { front: "I of a disc about a tangent in its plane", back: t`$\tfrac14 MR^2 + MR^2 = \tfrac54 MR^2$.` },
          { front: "Condition for rolling without slipping", back: t`$v_{cm} = R\omega$; the contact point is momentarily at rest.` },
          { front: "Kinetic energy of a rolling body", back: t`$\tfrac12 Mv^2(1 + k^2/R^2)$.` },
          { front: "Acceleration of a body rolling down an incline", back: t`$g\sin\theta/(1 + k^2/R^2)$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The moment of inertia of a thin ring about a tangent lying in its plane is:",
            options: [t`$\tfrac32 MR^2$`, t`$2MR^2$`, t`$\tfrac12 MR^2$`, t`$MR^2$`],
            answer: 0,
            difficulty: 2,
            explain: t`About a diameter: $\tfrac12 MR^2$. The tangent is parallel to it at distance R: $\tfrac12 MR^2 + MR^2 = \tfrac32 MR^2$. ($2MR^2$ is for a tangent perpendicular to the plane.)`,
          },
          {
            kind: "numeric",
            q: "Find the moment of inertia of a uniform rod of mass 3 kg and length 2 m about a perpendicular axis through one end.",
            answer: 4,
            unit: "kg m²",
            explain: t`$I = ML^2/3 = 3 \times 4/3 = 4$ kg m².`,
          },
          {
            kind: "mcq",
            q: "The perpendicular axis theorem can be applied to:",
            options: ["a plane lamina only", "any rigid body", "a solid sphere", "a solid cylinder about its axis"],
            answer: 0,
            explain: t`It relies on every particle having $z = 0$, which is true only for a flat body.`,
          },
          {
            kind: "numeric",
            q: "A bicycle moves at 5 m/s and its wheels roll without slipping. How fast is the topmost point of a wheel moving relative to the road?",
            answer: 10,
            unit: "m/s",
            explain: t`Top point: $v_{cm} + R\omega = 2v_{cm} = 10$ m/s.`,
          },
          {
            kind: "numeric",
            q: "What fraction of the total kinetic energy of a rolling solid sphere is rotational? Give a decimal.",
            answer: 0.286,
            tolerance: 0.01,
            explain: t`Rotational/total $= \dfrac{k^2/R^2}{1 + k^2/R^2} = \dfrac{2/5}{7/5} = \dfrac27 \approx 0.286$.`,
          },
          {
            kind: "multi",
            q: "A ring is released on a slope together with each of these. Which reach the bottom before the ring? (All rolling bodies roll without slipping.)",
            options: ["A solid sphere", "A disc", "A thin hollow sphere", "A block sliding without friction", "A ring of twice the mass"],
            answers: [0, 1, 2, 3],
            difficulty: 2,
            explain: t`All have larger acceleration than $\tfrac12 g\sin\theta$; the frictionless block has $g\sin\theta$. A heavier ring has the same $k^2/R^2 = 1$, so it arrives at the same time.`,
          },
          {
            kind: "truefalse",
            q: "In rolling without slipping, the point of the body in contact with the ground is momentarily at rest.",
            answer: true,
            explain: t`Its velocity is $v_{cm} - R\omega = 0$.`,
          },
          {
            kind: "numeric",
            q: "A solid cylinder rolls without slipping down a 30° incline. Find its acceleration (g = 9.8 m/s²).",
            answer: 3.27,
            tolerance: 0.02,
            unit: "m/s²",
            explain: t`$a = \tfrac23 g\sin30° = \tfrac23 \times 4.9 \approx 3.27$ m/s².`,
          },
        ],
      },
      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c11-rotation-exam-edge-dynamics",
        title: "Exam edge: Rotational Dynamics and Rolling",
        summary:
          "What JEE, NEET, KCET and COMEDK ask from rotation, standard CM and MI results, massive pulleys, rods released from rest, minimum friction for rolling and the yo-yo, with the classic traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "What the exams ask",
            md: "Rotation is one of the heaviest Class 11 chapters for engineering entrances. **JEE Main** usually has 1–2 questions (MI with theorems of axes, rolling, conservation of angular momentum). **JEE Advanced** almost always has a multi-concept problem: rolling with friction, collisions with rotation, angular impulse. **NEET** asks 1–2 direct questions (MI values, L = Iω conservation, rolling KE). **KCET and COMEDK** favour quick formula checks: radius of gyration, ratios of KE, which body reaches first.",
          },
          {
            type: "table",
            headers: ["Result worth remembering", "Value", "Use it when"],
            rows: [
              ["CM of a semicircular ring", t`$2R/\pi$ from the centre`, "thin wire bent into a half circle"],
              ["CM of a semicircular disc", t`$4R/3\pi$ from the centre`, "flat half disc"],
              ["CM of a solid hemisphere", t`$3R/8$ from the flat face`, "solid; hollow hemisphere is $R/2$"],
              ["CM of a solid cone", t`$h/4$ from the base`, "measured along the axis"],
              ["Massive pulley (disc) in an Atwood machine", t`$a = \dfrac{(m_2 - m_1)g}{m_1 + m_2 + I/R^2}$`, "string does not slip on the pulley"],
              ["Rolling on an incline", t`$a = \dfrac{g\sin\theta}{1 + k^2/R^2}$`, "pure rolling only"],
              ["Minimum friction for pure rolling", t`$\mu \ge \dfrac{\tan\theta}{1 + R^2/k^2}$`, "body rolling down a fixed incline"],
            ],
          },
          {
            type: "text",
            md: t`**Choosing the point for torques.** $\tau = I\alpha$ is safe about (1) a fixed axis, or (2) the centre of mass, even if the CM accelerates. For a rolling body you may also use the contact point when the body rolls without slipping on a fixed surface and the CM stays at constant height from it. When in doubt, use the CM and add the force equation $F_{net} = Ma_{cm}$ together with the rolling condition $a = R\alpha$.`,
          },
          {
            type: "example",
            title: "Atwood machine with a heavy pulley (KCET / NEET level)",
            problem: "Blocks of 2 kg and 3 kg hang from a light string over a uniform disc pulley of mass 2 kg and radius 0.1 m. The string does not slip. Find the acceleration and the two tensions (g = 9.8 m/s²).",
            steps: [
              t`Pulley: $I = \tfrac12 MR^2$, so $I/R^2 = M/2 = 1$ kg.`,
              t`$a = \dfrac{(3 - 2)(9.8)}{2 + 3 + 1} = \dfrac{9.8}{6} \approx 1.63$ m/s².`,
              t`2 kg block (going up): $T_1 = 2(g + a) = 2(11.43) \approx 22.9$ N.`,
              t`3 kg block (going down): $T_2 = 3(g - a) = 3(8.17) = 24.5$ N.`,
              t`Check on the pulley: $(T_2 - T_1)R = I\alpha \Rightarrow T_2 - T_1 = (I/R^2)a = 1.63$ N. ✓`,
            ],
            answer: t`$a \approx 1.63$ m/s², $T_1 \approx 22.9$ N, $T_2 = 24.5$ N. The tensions differ because the pulley needs a net torque.`,
          },
          {
            type: "example",
            title: "Minimum friction for rolling (JEE Main level)",
            problem: "A solid sphere is placed on a fixed incline of 37° (tan 37° = 0.75). What is the least coefficient of static friction for it to roll without slipping?",
            steps: [
              t`Along the slope: $Mg\sin\theta - f = Ma$. About the CM: $fR = I\alpha = \tfrac25 MR^2 \cdot \dfrac{a}{R} \Rightarrow f = \tfrac25 Ma$.`,
              t`Add: $Mg\sin\theta = \tfrac75 Ma \Rightarrow a = \tfrac57 g\sin\theta$, so $f = \tfrac27 Mg\sin\theta$.`,
              t`Need $f \le \mu Mg\cos\theta \Rightarrow \mu \ge \tfrac27\tan\theta$.`,
              t`$\mu_{min} = \tfrac27 \times 0.75 = \tfrac{3}{14} \approx 0.21$.`,
            ],
            answer: t`$\mu_{min} = 3/14 \approx 0.21$. With less friction the sphere slips while rolling.`,
          },
          {
            type: "example",
            title: "A rod falls about a hinge (JEE Main level)",
            problem: "A uniform rod of length 1.5 m is hinged at one end and released from rest in a horizontal position. Find (a) its initial angular acceleration and the initial acceleration of the free end, and (b) its angular speed when it is vertical (g = 9.8 m/s²).",
            steps: [
              t`About the hinge: $I = ML^2/3$, torque of weight $= Mg(L/2)$. So $\alpha = \dfrac{MgL/2}{ML^2/3} = \dfrac{3g}{2L} = 9.8$ rad/s².`,
              t`Free end: $a = \alpha L = \tfrac32 g = 14.7$ m/s², which is **more than g**.`,
              t`Energy: CM falls $L/2$: $Mg\dfrac{L}{2} = \tfrac12\cdot\dfrac{ML^2}{3}\omega^2 \Rightarrow \omega = \sqrt{3g/L}$.`,
              t`$\omega = \sqrt{3 \times 9.8/1.5} = \sqrt{19.6} \approx 4.43$ rad/s; the tip then moves at $\omega L \approx 6.64$ m/s.`,
            ],
            answer: t`(a) $\alpha = 9.8$ rad/s², tip acceleration $1.5g = 14.7$ m/s². (b) $\omega \approx 4.43$ rad/s.`,
          },
          {
            type: "example",
            title: "The yo-yo (JEE Advanced level)",
            problem: "A string is wound on a solid cylinder of mass M and radius R. The free end is held fixed and the cylinder falls, unwinding the vertical string. Find its acceleration and the string tension.",
            steps: [
              t`CM: $Mg - T = Ma$.`,
              t`About the CM: $TR = I\alpha = \tfrac12 MR^2\alpha$; the string does not slip, so $a = R\alpha$. Hence $T = \tfrac12 Ma$.`,
              t`Add: $Mg = \tfrac32 Ma \Rightarrow a = \tfrac23 g$.`,
              t`$T = \tfrac12 M\cdot\tfrac23 g = \tfrac13 Mg$. In general $a = g/(1 + k^2/R^2)$, exactly like rolling down a vertical "incline".`,
            ],
            answer: t`$a = \tfrac23 g$ and $T = \tfrac13 Mg$.`,
          },
          {
            type: "mistake",
            wrong: "For anything moving down an incline, a = g sin θ.",
            right: t`For pure rolling $a = g\sin\theta/(1 + k^2/R^2)$; only a frictionless sliding block has $g\sin\theta$.`,
            why: "Learners carry over the block result. Friction at the contact point slows the CM while spinning the body, so part of the energy goes into rotation.",
          },
          {
            type: "mistake",
            wrong: "Over a massive pulley the tension is the same on both sides of the string.",
            right: "With a massive pulley the two tensions differ; their difference times R gives the torque Iα.",
            why: "Equal tensions hold only for a light (massless) or frictionless pulley. A pulley with mass needs a net torque to gain angular acceleration.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A rod hinged at one end is released horizontal. Initial acceleration of the free end?",
              emoji: "📏",
              options: ["Exactly g, like a free fall", "1.5 g", "0.5 g"],
              answer: 1,
              trap: 0,
              explain: t`$\alpha = 3g/2L$, so the tip has $a = \alpha L = 1.5g$. A coin placed on the free end is left behind. Every point beyond $2L/3$ from the hinge falls faster than g.`,
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A ring rolls down an incline without slipping. What fraction of g sin θ is its acceleration?",
                answer: 0.5,
                explain: t`$k^2/R^2 = 1$, so $a = g\sin\theta/2$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Take torques about a fixed axis or the CM; add the force equation and the no-slip condition a = Rα.",
              t`Rolling: $a = g\sin\theta/(1 + k^2/R^2)$; $\mu_{min} = \tan\theta/(1 + R^2/k^2)$.`,
              t`Massive pulley: add $I/R^2$ to the masses in the denominator; the tensions differ.`,
              t`Rod hinged at an end: $\alpha_0 = 3g/2L$, $\omega_{vertical} = \sqrt{3g/L}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "CM of a semicircular ring / disc", back: t`Ring: $2R/\pi$; disc: $4R/3\pi$ from the centre.` },
          { front: "CM of a solid / hollow hemisphere", back: t`Solid: $3R/8$; hollow: $R/2$ from the flat face (centre).` },
          { front: "Atwood machine with a disc pulley", back: t`$a = (m_2 - m_1)g/(m_1 + m_2 + M/2)$.` },
          { front: "Minimum μ for a solid sphere to roll on incline θ", back: t`$\tfrac27\tan\theta$.` },
          { front: "Yo-yo (solid cylinder) acceleration and tension", back: t`$a = \tfrac23 g$, $T = \tfrac13 Mg$.` },
          { front: "Rod hinged at one end, released horizontal", back: t`$\alpha_0 = 3g/2L$; $\omega$ at the vertical $= \sqrt{3g/L}$.` },
          { front: "Safe points for τ = Iα", back: "A fixed axis, or the centre of mass (even if it accelerates)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A thin uniform wire is bent into a semicircle of radius R. How far is its centre of mass from the centre of the circle?",
            options: [t`$2R/\pi$`, t`$4R/3\pi$`, t`$R/2$`, t`$3R/8$`],
            answer: 0,
            explain: t`For a semicircular ring, $y_{cm} = 2R/\pi$. $4R/3\pi$ is for a semicircular disc.`,
          },
          {
            kind: "numeric",
            q: "Blocks of 1 kg and 4 kg hang over a uniform disc pulley of mass 2 kg (no slipping). Find the acceleration (g = 10 m/s²).",
            answer: 5,
            unit: "m/s²",
            difficulty: 2,
            hint: t`Add $I/R^2 = M/2$ to the total mass.`,
            explain: t`$a = \dfrac{(4 - 1)(10)}{1 + 4 + 1} = 5$ m/s².`,
          },
          {
            kind: "numeric",
            q: "A hollow sphere rolls without slipping down a 30° incline. Find its acceleration (g = 10 m/s²).",
            answer: 3,
            unit: "m/s²",
            explain: t`$a = \dfrac{g\sin\theta}{1 + 2/3} = \dfrac{5}{5/3} = 3$ m/s².`,
          },
          {
            kind: "numeric",
            q: "A uniform rod 0.6 m long, hinged at one end, is released from the horizontal. Find its angular speed as it passes the vertical (g = 10 m/s²).",
            answer: 7.07,
            tolerance: 0.05,
            unit: "rad/s",
            difficulty: 2,
            explain: t`$\omega = \sqrt{3g/L} = \sqrt{30/0.6} = \sqrt{50} \approx 7.07$ rad/s.`,
          },
          {
            kind: "multi",
            q: "A disc rolls without slipping down a rough fixed incline. Which statements are correct?",
            options: [
              "Static friction acts up the slope",
              "Friction does no work on the disc",
              "Mechanical energy of the disc is conserved",
              "Its acceleration is g sin θ",
            ],
            answers: [0, 1, 2],
            difficulty: 2,
            explain: t`Friction acts up the slope to provide the torque that spins the disc up; the contact point does not slide, so no work is done and energy is conserved. $a = \tfrac23 g\sin\theta$, not $g\sin\theta$.`,
          },
          {
            kind: "numeric",
            q: "A string wound on a ring of mass 0.4 kg is held fixed and the ring falls, unwinding it (yo-yo style). Find the tension in the string (g = 10 m/s²).",
            answer: 2,
            unit: "N",
            difficulty: 3,
            hint: t`For a ring $k^2/R^2 = 1$, so $a = g/2$.`,
            explain: t`$a = g/(1 + 1) = 5$ m/s². $T = Mg - Ma = 0.4(10 - 5) = 2$ N (half the weight).`,
          },
          {
            kind: "mcq",
            q: "A solid cylinder is placed on an incline of angle θ with coefficient of static friction μ. It rolls without slipping only if:",
            options: [t`$\mu \ge \tfrac13\tan\theta$`, t`$\mu \ge \tan\theta$`, t`$\mu \ge \tfrac27\tan\theta$`, t`$\mu \ge \tfrac12\tan\theta$`],
            answer: 0,
            difficulty: 3,
            explain: t`$\mu \ge \tan\theta/(1 + R^2/k^2) = \tan\theta/(1 + 2) = \tfrac13\tan\theta$. $\tfrac27$ is for a solid sphere; $\tan\theta$ is the condition for a block not to slide.`,
          },
          {
            kind: "numeric",
            q: "A uniform rod of mass 2 kg and length 3 m rotates about a perpendicular axis 0.5 m from its centre. Find its moment of inertia.",
            answer: 2,
            unit: "kg m²",
            explain: t`$I = \dfrac{ML^2}{12} + Md^2 = \dfrac{2 \times 9}{12} + 2(0.25) = 1.5 + 0.5 = 2$ kg m².`,
          },
        ],
      },
      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c11-rotation-exam-edge-impulse-collisions",
        title: "Exam edge: Rolling with Slipping, Angular Impulse and Collisions",
        summary:
          "JEE Advanced favourites: a ball that skids before it rolls, angular impulse and the cue-strike height, a free rod struck on ice, and collisions with hinged bodies.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "Why this lesson",
            md: "JEE Advanced builds its toughest rotation questions from three ideas: **rolling with slipping** (kinetic friction acts until v = Rω), **angular impulse** (an impulse changes both linear and angular momentum), and **collisions with rotation** (conserve angular momentum about the right point). JEE Main and COMEDK ask the simpler forms, such as a bullet hitting a hinged rod. NEET and KCET rarely go this far.",
          },
          {
            type: "text",
            md: t`**Angular impulse.** Just as $\int \vec F\,dt = \Delta\vec p$, we have $\int \vec\tau\,dt = \Delta\vec L$. A sharp blow of impulse $J$ along a line at perpendicular distance $h$ from the CM gives $\Delta p = J$ and $\Delta L_{cm} = Jh$ at the same time.

**Which angular momentum is conserved?** Pick the point about which every external force (or impulsive force) has zero torque:
- a ball skidding on a floor: the **contact point on the floor** (friction and normal force pass through it, gravity and normal cancel);
- a body hinged at a pivot: the **pivot** (the hinge impulse has no torque about it, but it does spoil linear momentum);
- a free body on smooth ice: **any point**, and linear momentum is conserved too.`,
          },
          {
            type: "formula",
            tex: t`\int\vec\tau\,dt = \Delta\vec L \qquad \vec L_O = \vec L_{cm} + M\,\vec r_{cm}\times\vec v_{cm}`,
            caption: "Angular momentum about any point O = spin about the CM + angular momentum of the CM moving as a particle.",
          },
          {
            type: "example",
            title: "From skidding to rolling (JEE Main level)",
            problem: "A solid sphere is set sliding on a horizontal floor with speed 7 m/s and no spin. The coefficient of kinetic friction is 0.2. Find the speed at which it starts pure rolling and the time taken (g = 9.8 m/s²).",
            steps: [
              t`About the contact line on the floor, friction and normal force have zero torque and gravity is balanced by the normal force, so $L$ about that line is conserved.`,
              t`Initially $L = Mv_0R$. Finally $L = Mv R + \tfrac25 MR^2\cdot\dfrac{v}{R} = \tfrac75 MvR$.`,
              t`$Mv_0R = \tfrac75 MvR \Rightarrow v = \tfrac57 v_0 = 5$ m/s.`,
              t`Friction decelerates the CM at $\mu g = 1.96$ m/s²: $t = \dfrac{7 - 5}{1.96} \approx 1.02$ s.`,
              t`Check: $\alpha = \dfrac{\mu MgR}{\tfrac25 MR^2} = \dfrac{5\mu g}{2R}$, so $R\omega = \tfrac52\mu g t = 2.5 \times 1.96 \times 1.02 \approx 5$ m/s. ✓`,
            ],
            answer: t`It rolls purely at 5 m/s after about 1.02 s. In general $v = v_0/(1 + k^2/R^2)$; a ring ends at $v_0/2$.`,
          },
          {
            type: "example",
            title: "Bullet into a hinged rod (JEE Main level)",
            problem: "A uniform rod of mass 2 kg and length 1 m hangs from a hinge at its top end. A 20 g bullet moving horizontally at 300 m/s hits the bottom end and sticks. Find the angular speed just after impact.",
            steps: [
              t`The hinge exerts an impulse, so linear momentum is **not** conserved. Its torque about the hinge is zero, so take $L$ about the hinge.`,
              t`Before: $L = mvL = 0.02 \times 300 \times 1 = 6$ kg m²/s.`,
              t`After: $I = \dfrac{ML^2}{3} + mL^2 = \dfrac{2}{3} + 0.02 \approx 0.687$ kg m².`,
              t`$\omega = \dfrac{6}{0.687} \approx 8.74$ rad/s.`,
            ],
            answer: t`$\omega \approx 8.74$ rad/s.`,
          },
          {
            type: "example",
            title: "A free rod struck on ice (JEE Advanced level)",
            problem: "A uniform rod of mass 1.2 kg and length 0.6 m lies on smooth ice. It receives a horizontal impulse of 1.8 N s at one end, perpendicular to the rod. Find the CM velocity, the angular velocity, the point of the rod that is momentarily at rest, and the kinetic energy given.",
            steps: [
              t`Linear: $v_{cm} = J/M = 1.8/1.2 = 1.5$ m/s.`,
              t`Angular, about the CM: $J\cdot\dfrac{L}{2} = \dfrac{ML^2}{12}\omega \Rightarrow \omega = \dfrac{6J}{ML} = \dfrac{10.8}{0.72} = 15$ rad/s.`,
              t`A point at distance $x$ from the CM on the far side has velocity $v_{cm} - \omega x = 0 \Rightarrow x = 1.5/15 = 0.1$ m $= L/6$, i.e. $2L/3$ from the struck end.`,
              t`$K = \tfrac12(1.2)(1.5)^2 + \tfrac12\cdot\dfrac{1.2(0.36)}{12}(15)^2 = 1.35 + 4.05 = 5.4$ J.`,
            ],
            answer: t`$v_{cm} = 1.5$ m/s, $\omega = 15$ rad/s, the rod turns momentarily about the point $2L/3$ from the struck end, and $K = 5.4$ J (equal to $2J^2/M$).`,
          },
          {
            type: "example",
            title: "Cue strike for instant rolling (JEE Advanced level)",
            problem: "A billiard ball of radius R is struck by a horizontal cue at height h above its centre. For what h does it roll without slipping from the very start? Give the height above the table for R = 3 cm.",
            steps: [
              t`Impulse $J$: $Mv = J$ and $\tfrac25 MR^2\omega = Jh$.`,
              t`Pure rolling needs $v = R\omega$: $\dfrac{J}{M} = R\cdot\dfrac{Jh}{\tfrac25 MR^2} \Rightarrow h = \tfrac25 R$.`,
              t`Height above the table $= R + \tfrac25 R = \tfrac75 R = 4.2$ cm.`,
            ],
            answer: t`$h = 2R/5$ above the centre, i.e. 4.2 cm above the table. Strike higher and the ball gets topspin; strike lower and it skids with backspin.`,
          },
          {
            type: "mistake",
            wrong: "When a bullet hits a hinged rod, I can conserve linear momentum of bullet + rod.",
            right: "Conserve angular momentum about the hinge. The hinge gives a large impulse during the impact, so linear momentum changes.",
            why: "Linear momentum conservation is drilled in the collisions chapter, so it feels automatic. The hinge is an external body; its impulsive force spoils linear momentum, but its torque about the hinge itself is zero.",
          },
          {
            type: "mistake",
            wrong: "For a ball skidding on a rough floor, energy is conserved, so ½mv₀² = ½mv²(1 + k²/R²).",
            right: "While it skids, kinetic friction does negative work and energy is lost. Use angular momentum about the contact point instead.",
            why: "Energy conservation works for pure rolling, so learners use it too early. Here the contact point slides, so friction does work until v = Rω.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A ring slides at v₀ with backspin ω₀ = v₀/R. What happens finally?",
              emoji: "💍",
              options: ["It ends rolling forward at v₀/2", "It comes to rest", "It ends rolling backward at v₀/2"],
              answer: 1,
              trap: 0,
              explain: t`About the contact point: $L = Mv_0R - MR^2\omega_0 = Mv_0R - Mv_0R = 0$. Final $L = 2MvR = 0$, so $v = 0$. The forward ring with no spin ends at $v_0/2$; the backspin cancels exactly here.`,
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A disc is set sliding at 6 m/s with no spin on a rough floor. Find its speed once it rolls purely.",
                answer: 4,
                unit: "m/s",
                explain: t`$v = v_0/(1 + k^2/R^2) = 6/(1.5) = 4$ m/s.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$\int\tau\,dt = \Delta L$; an impulse at distance h from the CM gives $\Delta p = J$ and $\Delta L_{cm} = Jh$.`,
              t`Skid → roll: conserve L about the contact point; $v = v_0/(1 + k^2/R^2)$; energy is lost.`,
              "Hinged body: conserve L about the hinge, not linear momentum.",
              t`Instant rolling for a solid sphere: strike $2R/5$ above the centre.`,
              t`Free rod struck at an end: $v = J/M$, $\omega = 6J/ML$, turns about the point $2L/3$ from the struck end.`,
            ],
          },
        ],
        flashcards: [
          { front: "Angular impulse", back: t`$\int\tau\,dt = \Delta L$.` },
          { front: "Skidding solid sphere, no initial spin: final speed", back: t`$\tfrac57 v_0$.` },
          { front: "Skidding ring, no initial spin: final speed", back: t`$\tfrac12 v_0$.` },
          { front: "Point about which L is conserved for a skidding ball", back: "The contact point (line) on the floor." },
          { front: "Cue height for instant rolling of a solid sphere", back: t`$2R/5$ above the centre ($7R/5$ above the table).` },
          { front: "Free rod (on ice) struck at one end", back: t`$v_{cm} = J/M$, $\omega = 6J/ML$, KE $= 2J^2/M$.` },
          { front: "Collision with a hinged body", back: "Conserve angular momentum about the hinge; linear momentum is not conserved." },
          { front: "Angular momentum about any point O", back: t`$\vec L_O = \vec L_{cm} + M\vec r_{cm}\times\vec v_{cm}$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A ring is set sliding at 8 m/s with no spin on a rough floor. Find its speed once it rolls without slipping.",
            answer: 4,
            unit: "m/s",
            explain: t`$v = v_0/(1 + 1) = 4$ m/s.`,
          },
          {
            kind: "numeric",
            q: "A solid sphere skids at 3.5 m/s with no spin on a floor with μ = 0.1. How long before pure rolling begins? (g = 10 m/s²)",
            answer: 1,
            unit: "s",
            difficulty: 2,
            hint: t`First find the final speed $\tfrac57 v_0$, then use the CM deceleration $\mu g$.`,
            explain: t`$v = \tfrac57(3.5) = 2.5$ m/s. $t = (3.5 - 2.5)/(0.1 \times 10) = 1$ s.`,
          },
          {
            kind: "mcq",
            q: "For a sphere skidding into pure rolling on a rough floor, which quantity is conserved?",
            options: [
              "Angular momentum about the contact point on the floor",
              "Angular momentum about the centre of the sphere",
              "Linear momentum",
              "Kinetic energy",
            ],
            answer: 0,
            difficulty: 2,
            explain: "Friction has torque about the centre and changes linear momentum, and it dissipates energy. About the contact point its torque is zero, and gravity and the normal force cancel.",
          },
          {
            kind: "numeric",
            q: "A uniform rod of mass 3 kg and length 1 m hangs from a hinge at its top. A 0.1 kg lump of clay moving horizontally at 20 m/s strikes and sticks to the bottom end. Find the angular speed just after (in rad/s).",
            answer: 1.82,
            tolerance: 0.02,
            unit: "rad/s",
            difficulty: 2,
            explain: t`$L = 0.1 \times 20 \times 1 = 2$. $I = 3/3 + 0.1(1)^2 = 1.1$ kg m². $\omega = 2/1.1 \approx 1.82$ rad/s.`,
          },
          {
            kind: "numeric",
            q: "A free uniform rod of mass 0.5 kg and length 0.4 m on smooth ice gets an impulse of 0.2 N s at one end, perpendicular to it. Find its angular velocity.",
            answer: 6,
            unit: "rad/s",
            difficulty: 3,
            explain: t`$\omega = 6J/(ML) = 1.2/0.2 = 6$ rad/s.`,
          },
          {
            kind: "multi",
            q: "A cue strikes a billiard ball horizontally at a height h above its centre (R = radius). Which are correct?",
            options: [
              "h = 2R/5 gives rolling without slipping at once",
              "h > 2R/5 makes friction act forward at first",
              "h = 0 gives pure sliding with no initial spin",
              "The final rolling speed is the same for every h",
            ],
            answers: [0, 1, 2],
            difficulty: 3,
            hint: "Compare Rω with v just after the strike.",
            explain: t`Just after the blow $v = J/M$ and $R\omega = \tfrac52 Jh/(MR)$. For $h > 2R/5$, $R\omega > v$: the bottom point slips backward, so friction acts forward. For $h = 0$ there is no spin. The final speed depends on h (from $L$ about the contact point), so the last option is wrong.`,
          },
          {
            kind: "mcq",
            q: "A free rod lying on smooth ice is struck at one end perpendicular to its length. Just after the blow, which point of the rod is momentarily at rest?",
            options: ["The point 2L/3 from the struck end", "The centre of the rod", "The far end", "The struck end"],
            answer: 0,
            difficulty: 3,
            explain: t`$v_{cm} = J/M$ and $\omega = 6J/ML$, so the zero-velocity point is $v_{cm}/\omega = L/6$ beyond the centre, i.e. $2L/3$ from the struck end.`,
          },
          {
            kind: "numeric",
            q: "A solid sphere of radius 5 cm is struck by a horizontal cue so that it rolls without slipping at once. At what height above the table is it struck (in cm)?",
            answer: 7,
            unit: "cm",
            explain: t`$h = R + \tfrac25 R = \tfrac75 \times 5 = 7$ cm.`,
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:System of Particles and Rotational Motion": "c11-rotational-motion",
  "11:Motion of System of Particles and Rigid Body": ["c11-rotational-motion"],
  "11:Gravitation": "c11-gravitation",
};
