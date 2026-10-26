import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Oscillations (NCERT) — part of "Oscillations and Waves" (ISC)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-oscillations",
    title: "Oscillations",
    icon: "🎐",
    description: "Periodic and oscillatory motion, simple harmonic motion and its link with circular motion, energy in SHM, the spring–mass system and the simple pendulum, with damped and forced oscillations for ISC and JEE.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-phy-periodic-shm",
        title: "Periodic Motion and Simple Harmonic Motion",
        summary: "Period and frequency, displacement as a function of time, the equation of SHM, phase, the link with uniform circular motion, and velocity and acceleration in SHM.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎠",
            caption: "A swing at a village fair, a pendulum clock in a school office, the beat of your heart: each repeats itself again and again at regular intervals.",
          },
          {
            type: "text",
            md: t`A motion that repeats itself at regular intervals of time is called **periodic motion**. The smallest interval after which it repeats is the **period** $T$ (unit: second). The number of repetitions per second is the **frequency**, $\nu = \dfrac{1}{T}$. Its SI unit is the **hertz** (Hz): $1\ \text{Hz} = 1\ \text{s}^{-1}$.

When a body moves **to and fro about a mean (equilibrium) position**, the periodic motion is called **oscillatory** (or vibratory). At the mean position the net force on the body is zero. When the body is pushed away, a force acts that tries to bring it back: a **restoring force**.

Every oscillatory motion is periodic, but not every periodic motion is oscillatory. The Earth going round the Sun is periodic, yet it has no to-and-fro motion about a mean position.`,
          },
          {
            type: "text",
            md: t`The quantity that changes during an oscillation is called the **displacement** variable. For a pendulum it is the angle from the vertical; for a block on a spring it is the distance from the equilibrium position; for an AC voltage it is the voltage itself. Displacement can be positive or negative.

The simplest periodic functions are $\sin \omega t$ and $\cos \omega t$; they repeat when $\omega t$ grows by $2\pi$, so their period is $T = 2\pi/\omega$. A useful result (from the French mathematician Fourier) is that **any** periodic function can be built by adding sine and cosine functions of different periods with suitable coefficients.`,
          },
          {
            type: "formula",
            tex: t`x(t) = A\cos(\omega t + \phi), \qquad \omega = 2\pi\nu = \frac{2\pi}{T}`,
            caption: "Simple harmonic motion: displacement is a sinusoidal function of time. A = amplitude, (ωt + φ) = phase, φ = phase constant (phase angle), ω = angular frequency (rad/s).",
          },
          {
            type: "text",
            md: t`A body is in **simple harmonic motion (SHM)** when its displacement from the mean position varies with time as $x = A\cos(\omega t + \phi)$.

- **Amplitude** $A$ is the largest displacement on either side. It is always positive. The body moves between $x = +A$ and $x = -A$.
- **Phase** $(\omega t + \phi)$ tells you the state of motion (position and direction) at time $t$.
- **Phase constant** $\phi$ is the phase at $t = 0$. It is fixed by where the body is, and which way it moves, when you start the clock.

The period of SHM does **not** depend on the amplitude. A swing pushed gently and one pushed hard (both small oscillations) take the same time per cycle.`,
          },
          {
            type: "text",
            md: t`**SHM and uniform circular motion.** Imagine a particle P (the **reference particle**) moving on a circle of radius $A$ with constant angular speed $\omega$. Let the radius OP make angle $\omega t + \phi$ with the x-axis at time $t$. Drop a perpendicular from P onto the x-axis; its foot P′ is at $x = A\cos(\omega t + \phi)$.

So **the projection of uniform circular motion on any diameter is SHM**. The circle's radius is the amplitude, and its angular speed is the angular frequency of the SHM. This picture gives the velocity and acceleration of SHM directly: the speed of P is $\omega A$ along the tangent, and its acceleration is $\omega^2 A$ towards the centre. Their x-components are the velocity and acceleration of P′.`,
          },
          {
            type: "formula",
            tex: t`v(t) = \frac{dx}{dt} = -\omega A\sin(\omega t + \phi), \qquad a(t) = \frac{dv}{dt} = -\omega^2 A\cos(\omega t + \phi) = -\omega^2 x`,
            caption: "Velocity leads displacement by π/2; acceleration is opposite to displacement (phase difference π) and proportional to it.",
          },
          {
            type: "table",
            headers: ["Quantity", "At mean position (x = 0)", "At an extreme (x = ±A)"],
            rows: [
              ["Speed", t`maximum, $\omega A$`, "zero"],
              ["Acceleration", "zero", t`maximum, $\omega^2 A$ (towards mean)`],
              ["Restoring force", "zero", "maximum"],
            ],
          },
          {
            type: "example",
            title: "Reading an SHM equation",
            problem: t`A point on a vibrating tuning-fork model moves as $x = 0.05\cos\left(4\pi t + \dfrac{\pi}{4}\right)$, with $x$ in metres and $t$ in seconds. Find the amplitude, angular frequency, period, frequency, initial phase, maximum speed, maximum acceleration and the displacement at $t = 0$.`,
            steps: [
              t`Compare with $x = A\cos(\omega t + \phi)$: $A = 0.05$ m, $\omega = 4\pi\ \text{rad s}^{-1}$, $\phi = \pi/4$.`,
              t`$T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{4\pi} = 0.5$ s, so $\nu = \dfrac{1}{T} = 2$ Hz.`,
              t`$v_{max} = \omega A = 4\pi \times 0.05 = 0.2\pi \approx 0.628\ \text{m s}^{-1}$.`,
              t`$a_{max} = \omega^2 A = 16\pi^2 \times 0.05 = 0.8\pi^2 \approx 7.90\ \text{m s}^{-2}$.`,
              t`At $t = 0$: $x = 0.05\cos(\pi/4) = 0.05 \times 0.707 \approx 0.035$ m.`,
            ],
            answer: t`$A = 5$ cm, $\omega = 4\pi$ rad/s, $T = 0.5$ s, $\nu = 2$ Hz, $\phi = \pi/4$, $v_{max} \approx 0.63$ m/s, $a_{max} \approx 7.9\ \text{m s}^{-2}$, $x(0) \approx 3.5$ cm.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A ball bounces up and down on a hard floor with no loss of energy. Its motion is:",
                options: ["simple harmonic", "periodic but not simple harmonic", "not periodic", "uniform circular"],
                answer: 1,
                explain: t`It repeats, so it is periodic. But in the air the only force is the constant weight $mg$; it is not proportional to displacement from a mean position, so the motion is not SHM.`,
              },
              {
                kind: "numeric",
                q: "A body vibrates in SHM at 50 Hz. What is its angular frequency in rad/s?",
                answer: 314.16,
                tolerance: 0.5,
                unit: "rad/s",
                explain: t`$\omega = 2\pi\nu = 2\pi \times 50 = 100\pi \approx 314$ rad/s.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "At the extreme position the body stops, so its acceleration is zero there too.",
            right: t`At an extreme the velocity is zero but the acceleration is the **largest**: $|a| = \omega^2 A$, pointing towards the mean position. At the mean position it is the other way round: speed is largest and acceleration is zero.`,
            why: t`"Stopped" feels like "nothing is happening". But acceleration depends on the force, not on the speed. At the extreme the restoring force is greatest, so the body is turned back at once; it is at rest only for an instant.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each displacement x(t) by its motion.",
              groups: ["SHM", "Periodic, not SHM", "Not periodic"],
              items: [
                { text: "x = sin ωt − cos ωt", group: 0, hint: "It equals √2 sin(ωt − π/4): one sinusoid." },
                { text: "x = 2 cos(π/3 − 3ωt)", group: 0, hint: "cos(−θ) = cos θ, so this is 2 cos(3ωt − π/3)." },
                { text: "x = cos ωt + sin 3ωt", group: 1, hint: "Two sinusoids of different periods: it repeats, but is not one sinusoid." },
                { text: "x = sin ωt + sin 2ωt", group: 1, hint: "Repeats every 2π/ω, but has two frequencies." },
                { text: "x = e^(−ωt)", group: 2, hint: "It only decreases; it never repeats." },
                { text: "x = ωt", group: 2, hint: "It grows without limit." },
              ],
              explain: "SHM needs a single sinusoid of one angular frequency. Adding sinusoids of different frequencies still repeats (periodic) but is not simple harmonic.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: t`Short answers often ask you to "show that the projection of uniform circular motion on a diameter is SHM" (2–3 marks). Draw the reference circle, mark the angle $\omega t + \phi$, write $x = A\cos(\omega t + \phi)$, and name the amplitude and angular frequency. Marks are lost for forgetting that $\omega$ must be in **rad/s**, and for writing $a = \omega^2 x$ without the minus sign.`,
          },
          {
            type: "keypoints",
            items: [
              t`Periodic motion repeats after a fixed time $T$; $\nu = 1/T$ (Hz), $\omega = 2\pi\nu$.`,
              t`SHM: $x = A\cos(\omega t + \phi)$; the period does not depend on the amplitude.`,
              t`The projection of uniform circular motion on a diameter is SHM.`,
              t`$v = -\omega A\sin(\omega t + \phi)$, $a = -\omega^2 x$: speed is greatest at the mean, acceleration greatest at the extremes.`,
            ],
          },
        ],
        flashcards: [
          { front: "Periodic motion", back: "Motion that repeats itself after a fixed interval of time, the period T." },
          { front: "Oscillatory motion", back: "Periodic to-and-fro motion about a mean position where the net force is zero." },
          { front: "Displacement equation of SHM", back: t`$x = A\cos(\omega t + \phi)$` },
          { front: "Phase and phase constant", back: t`Phase: $(\omega t + \phi)$, the state of motion at time t. Phase constant: $\phi$, the phase at t = 0.` },
          { front: "Relation between ω, ν and T", back: t`$\omega = 2\pi\nu = 2\pi/T$` },
          { front: "Acceleration in SHM", back: t`$a = -\omega^2 x$: proportional to displacement and directed towards the mean position.` },
          { front: "Maximum speed and acceleration", back: t`$v_{max} = \omega A$ at the mean position; $a_{max} = \omega^2 A$ at the extremes.` },
          { front: "SHM and circular motion", back: "The foot of the perpendicular from a particle in uniform circular motion onto a diameter moves in SHM." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The period of $x = 5\cos(3\pi t + \pi/3)$ (t in s) is:`,
            options: ["2/3 s", "3/2 s", "1/3 s", "6 s"],
            answer: 0,
            explain: t`$\omega = 3\pi$, so $T = 2\pi/3\pi = 2/3$ s. The phase constant does not affect the period.`,
          },
          {
            kind: "truefalse",
            q: "Every periodic motion is oscillatory.",
            answer: false,
            explain: "Oscillatory motion is a special periodic motion about a mean position. Uniform circular motion and planetary orbits are periodic but not oscillatory.",
          },
          {
            kind: "numeric",
            q: "A particle moves in SHM with amplitude 0.1 m and period 2 s. Find its maximum speed.",
            answer: 0.314,
            tolerance: 0.005,
            unit: "m/s",
            explain: t`$\omega = 2\pi/T = \pi$ rad/s; $v_{max} = \omega A = 0.1\pi \approx 0.314$ m/s.`,
          },
          {
            kind: "mcq",
            q: "In SHM the acceleration of the particle is:",
            options: [
              "constant in size and direction",
              "proportional to displacement and directed towards the mean position",
              "proportional to velocity",
              "largest at the mean position",
            ],
            answer: 1,
            explain: t`$a = -\omega^2 x$. It is zero at the mean and largest at the extremes, always pointing towards the mean.`,
          },
          {
            kind: "multi",
            q: "At an extreme position of SHM, which are true?",
            options: ["Velocity is zero", "Magnitude of acceleration is maximum", "Displacement has magnitude A", "Kinetic energy is maximum"],
            answers: [0, 1, 2],
            explain: "At an extreme the body is momentarily at rest (zero KE), at maximum distance A, where the restoring force and acceleration are greatest.",
          },
          {
            kind: "fill",
            q: "The ___ of a particle in uniform circular motion on a diameter of the circle executes SHM.",
            answer: ["projection", "shadow", "foot of the perpendicular"],
            explain: "Drop a perpendicular from the moving particle on a diameter; its foot moves as x = A cos(ωt + φ).",
          },
          {
            kind: "numeric",
            q: t`For $x = 0.2\cos(\pi t)$ (SI units), find the acceleration at $t = 1/3$ s.`,
            answer: -0.987,
            tolerance: 0.01,
            unit: "m/s²",
            difficulty: 2,
            hint: t`Use $a = -\omega^2 x$ with $\omega = \pi$.`,
            explain: t`$x = 0.2\cos(\pi/3) = 0.1$ m; $a = -\pi^2 \times 0.1 \approx -0.987\ \text{m s}^{-2}$.`,
          },
          {
            kind: "mcq",
            q: "The phase difference between displacement and acceleration in SHM is:",
            options: ["0", "π/2", "π", "2π"],
            answer: 2,
            difficulty: 2,
            hint: t`Compare $x = A\cos\theta$ with $a = -\omega^2 A\cos\theta$.`,
            explain: t`$a = -\omega^2 x$, and $-\cos\theta = \cos(\theta + \pi)$, so the acceleration is π out of phase with displacement. Velocity leads displacement by π/2.`,
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-phy-shm-energy-pendulum",
        title: "Force Law, Energy in SHM, Spring and Pendulum",
        summary: "The force law F = −kx, kinetic and potential energy in SHM, the spring–mass system, and the derivation of the period of a simple pendulum.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🚗",
            caption: "Press down on the bonnet of a car and let go: it bobs up and down on its springs. A spring pushes back harder the more you squash it.",
          },
          {
            type: "text",
            md: t`Newton's second law gives the force on a particle in SHM: $F = ma = -m\omega^2 x$. Writing $k = m\omega^2$,

the force is $F = -kx$. So SHM is produced by a **restoring force proportional to displacement and opposite to it**. This is often taken as the definition of SHM. The constant $k$ is the **force constant**; for a spring it is the **spring constant** (unit $\text{N m}^{-1}$). A force like this is called **linear**, and SHM is also called **linear harmonic oscillation**.`,
          },
          {
            type: "formula",
            tex: t`F = -kx, \qquad \omega = \sqrt{\frac{k}{m}}, \qquad T = 2\pi\sqrt{\frac{m}{k}}`,
            caption: "A block of mass m on a light spring of constant k (smooth horizontal floor) oscillates with this period. A stiffer spring gives a shorter period; a heavier block a longer one.",
          },
          {
            type: "text",
            md: t`**Energy in SHM.** Using $x = A\cos(\omega t + \phi)$ and $v = -\omega A\sin(\omega t + \phi)$, with $k = m\omega^2$:

- **Kinetic energy** $K = \tfrac{1}{2}mv^2 = \tfrac{1}{2}kA^2\sin^2(\omega t + \phi)$.
- **Potential energy** (stored in the spring) $U = \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2\cos^2(\omega t + \phi)$.
- **Total energy** $E = K + U = \tfrac{1}{2}kA^2$, constant in time (no friction).

Both $K$ and $U$ are always positive and each repeats with period $T/2$, twice per oscillation. Energy keeps passing from kinetic to potential and back.`,
          },
          {
            type: "formula",
            tex: t`E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}m\omega^2A^2, \qquad K(x) = \tfrac{1}{2}k\left(A^2 - x^2\right), \qquad v = \pm\,\omega\sqrt{A^2 - x^2}`,
            caption: "Kinetic energy and speed at a displacement x. At x = ±A/√2 the energy is shared equally.",
          },
          {
            type: "example",
            title: "A block on a spring",
            problem: t`A 2 kg block on a smooth table is attached to a spring of constant $200\ \text{N m}^{-1}$. It is pulled 5 cm from equilibrium and released. Find (a) the period, (b) the maximum speed and acceleration, (c) the total energy, (d) the speed, kinetic and potential energy when it is 3 cm from equilibrium.`,
            steps: [
              t`(a) $\omega = \sqrt{k/m} = \sqrt{200/2} = 10$ rad/s, so $T = 2\pi/10 \approx 0.628$ s.`,
              t`(b) $A = 0.05$ m (released from rest, so the release point is an extreme). $v_{max} = \omega A = 0.5$ m/s; $a_{max} = \omega^2 A = 100 \times 0.05 = 5\ \text{m s}^{-2}$.`,
              t`(c) $E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}(200)(0.05)^2 = 0.25$ J.`,
              t`(d) $v = \omega\sqrt{A^2 - x^2} = 10\sqrt{0.0025 - 0.0009} = 10(0.04) = 0.4$ m/s. $K = \tfrac{1}{2}(2)(0.4)^2 = 0.16$ J; $U = \tfrac{1}{2}(200)(0.03)^2 = 0.09$ J.`,
              t`Check: $K + U = 0.16 + 0.09 = 0.25$ J $= E$.`,
            ],
            answer: t`(a) 0.628 s; (b) 0.5 m/s, $5\ \text{m s}^{-2}$; (c) 0.25 J; (d) 0.4 m/s, K = 0.16 J, U = 0.09 J.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A spring of constant 50 N/m oscillates with a mass at amplitude 0.2 m. Find the total energy.",
                answer: 1,
                tolerance: 0.01,
                unit: "J",
                explain: t`$E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}(50)(0.04) = 1$ J.`,
              },
              {
                kind: "mcq",
                q: "At what displacement are the kinetic and potential energies equal?",
                options: ["x = A/2", "x = A/√2", "x = A", "x = 0"],
                answer: 1,
                explain: t`$\tfrac{1}{2}kx^2 = \tfrac{1}{2}k(A^2 - x^2)$ gives $x^2 = A^2/2$, so $x = \pm A/\sqrt{2}$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**The simple pendulum.** A small heavy bob of mass $m$ hangs from a light, inextensible string of length $L$ fixed at a rigid support. Pull it aside by a small angle and release. Two forces act on the bob: its weight $mg$ and the tension along the string. Resolve the weight into $mg\cos\theta$ along the string and $mg\sin\theta$ along the arc, towards the mean position. Take torques about the support.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`The tension passes through the support, so it gives no torque. The torque of the weight is $\tau = -mgL\sin\theta$ (minus: it acts to reduce $\theta$).`,
              t`Newton's law for rotation: $\tau = I\alpha$, where the moment of inertia of a point bob about the support is $I = mL^2$.`,
              t`So $mL^2\alpha = -mgL\sin\theta$, which gives $\alpha = -\dfrac{g}{L}\sin\theta$.`,
              t`For small angles, $\sin\theta \approx \theta$ (θ in radians; the error is under 1% up to about 14°). Then $\alpha = -\dfrac{g}{L}\theta$.`,
              t`This has the form $\alpha = -\omega^2\theta$ of angular SHM, with $\omega = \sqrt{g/L}$, so $T = 2\pi/\omega = 2\pi\sqrt{L/g}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`T = 2\pi\sqrt{\frac{L}{g}}`,
            caption: "Period of a simple pendulum for small oscillations. It does not depend on the mass of the bob or (for small angles) on the amplitude.",
          },
          {
            type: "example",
            title: "The seconds pendulum",
            problem: t`A **seconds pendulum** takes 1 s for each swing from one side to the other, so its period is 2 s. Find its length where $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`From $T = 2\pi\sqrt{L/g}$: $L = \dfrac{gT^2}{4\pi^2}$.`,
              t`$L = \dfrac{9.8 \times 2^2}{4 \times 9.87} = \dfrac{39.2}{39.48}$.`,
              t`$L \approx 0.993$ m.`,
            ],
            answer: "About 0.99 m, very nearly one metre.",
          },
          {
            type: "mistake",
            wrong: "A heavier bob swings more slowly, so a pendulum with a heavier bob has a longer period.",
            right: t`For a simple pendulum $T = 2\pi\sqrt{L/g}$: the mass cancels. Only the length (to the centre of the bob) and $g$ matter.`,
            why: t`A heavier bob does need more force to accelerate, but gravity pulls it harder in exactly the same ratio: $m$ appears on both sides of $mL^2\alpha = -mgL\sin\theta$. A spring is different: there $T = 2\pi\sqrt{m/k}$ does depend on mass, because the spring force does not grow with $m$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the pendulum derivation steps in order.",
              items: [
                "Draw the forces: weight mg and tension along the string",
                "Torque about the support: τ = −mgL sin θ (tension gives none)",
                "Use τ = Iα with I = mL² for a point bob",
                "For small angles, replace sin θ by θ in radians",
                "Compare α = −(g/L)θ with α = −ω²θ to get ω = √(g/L)",
                "Write T = 2π/ω = 2π√(L/g)",
              ],
              explain: "The small-angle step is what turns the motion into SHM. Without it, α is proportional to sin θ, not θ, and the period grows slightly with amplitude.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: t`The pendulum derivation is a frequent 3-mark question. Marks go for: a labelled diagram (string, angle θ, $mg$ and its components), the torque with its sign, $I = mL^2$, the stated small-angle approximation, and the final result. The energy question usually asks you to show that total energy is constant and to sketch $K$, $U$ and $E$ against $x$: two parabolas (one opening up, one down) and a horizontal line.`,
          },
          {
            type: "keypoints",
            items: [
              t`SHM is caused by a linear restoring force $F = -kx$; $\omega = \sqrt{k/m}$.`,
              t`$E = \tfrac{1}{2}kA^2$ is constant; $K = \tfrac{1}{2}k(A^2 - x^2)$ and $U = \tfrac{1}{2}kx^2$ each repeat with period $T/2$.`,
              t`Spring–mass: $T = 2\pi\sqrt{m/k}$; simple pendulum (small angles): $T = 2\pi\sqrt{L/g}$, independent of the bob's mass.`,
              "A seconds pendulum has period 2 s and length about 1 m on Earth.",
            ],
          },
        ],
        flashcards: [
          { front: "Force law for SHM", back: t`$F = -kx$: restoring force proportional to displacement, opposite in direction.` },
          { front: "Period of a spring–mass system", back: t`$T = 2\pi\sqrt{m/k}$` },
          { front: "Total energy in SHM", back: t`$E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}m\omega^2A^2$, constant if there is no friction.` },
          { front: "Speed at displacement x", back: t`$v = \omega\sqrt{A^2 - x^2}$` },
          { front: "Period of K or U in SHM", back: "T/2 — energy oscillates at twice the frequency of the motion." },
          { front: "Period of a simple pendulum", back: t`$T = 2\pi\sqrt{L/g}$ for small angles.` },
          { front: "Seconds pendulum", back: "A pendulum of period 2 s; length about 0.99 m where g = 9.8 m/s²." },
          { front: "Small-angle approximation", back: "sin θ ≈ θ (in radians), good to about 1% up to roughly 14°." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The mass on a spring is made four times larger. The period becomes:",
            options: ["four times", "twice", "half", "unchanged"],
            answer: 1,
            explain: t`$T \propto \sqrt{m}$, so $T$ becomes $\sqrt{4} = 2$ times.`,
          },
          {
            kind: "numeric",
            q: "A 1 kg mass oscillates on a spring of constant 400 N/m. Find the period.",
            answer: 0.314,
            tolerance: 0.005,
            unit: "s",
            explain: t`$\omega = \sqrt{400/1} = 20$ rad/s; $T = 2\pi/20 = \pi/10 \approx 0.314$ s.`,
          },
          {
            kind: "mcq",
            q: "At x = A/2 in SHM, what fraction of the total energy is kinetic?",
            options: ["1/4", "1/2", "3/4", "1"],
            answer: 2,
            explain: t`$U/E = x^2/A^2 = 1/4$, so $K/E = 1 - 1/4 = 3/4$.`,
          },
          {
            kind: "truefalse",
            q: "The period of a simple pendulum depends on the mass of its bob.",
            answer: false,
            explain: t`$T = 2\pi\sqrt{L/g}$; mass cancels because both the restoring torque and the moment of inertia are proportional to m.`,
          },
          {
            kind: "numeric",
            q: "Find the period of a simple pendulum of length 2.45 m (g = 9.8 m/s²).",
            answer: 3.14,
            tolerance: 0.02,
            unit: "s",
            explain: t`$T = 2\pi\sqrt{2.45/9.8} = 2\pi\sqrt{0.25} = 2\pi(0.5) = \pi \approx 3.14$ s.`,
          },
          {
            kind: "mcq",
            q: "A particle oscillates in SHM with frequency ν. Its kinetic energy oscillates with frequency:",
            options: ["ν/2", "ν", "2ν", "4ν"],
            answer: 2,
            explain: t`$K \propto \sin^2(\omega t) = \tfrac{1}{2}(1 - \cos 2\omega t)$, so it repeats at $2\nu$ (period $T/2$).`,
          },
          {
            kind: "multi",
            q: "Which assumptions are used in deriving T = 2π√(L/g)?",
            options: [
              "The string is light and inextensible",
              "The bob is treated as a point mass",
              "The angle is small, so sin θ ≈ θ",
              "The amplitude is larger than the length",
            ],
            answers: [0, 1, 2],
            explain: "A light inextensible string and a point bob give I = mL²; the small-angle approximation makes the torque proportional to θ. Large amplitudes make the formula inaccurate.",
          },
          {
            kind: "numeric",
            q: "A pendulum has period 2 s on Earth. What would its period be on the Moon, where g is one-sixth of Earth's?",
            answer: 4.9,
            tolerance: 0.03,
            unit: "s",
            difficulty: 2,
            hint: t`$T \propto 1/\sqrt{g}$.`,
            explain: t`$T_{moon} = T\sqrt{g/g_{moon}} = 2\sqrt{6} \approx 4.90$ s.`,
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-phy-damped-forced-springs",
        title: "Combinations of Springs, Damped and Forced Oscillations",
        summary: "Springs in series and parallel, damped oscillations with decaying amplitude, forced oscillations and resonance. Needed for ISC and JEE; not in the rationalised NCERT.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Who needs this lesson",
            md: "Damped and forced oscillations and resonance were removed from the rationalised NCERT book, so CBSE and Karnataka I PUC board papers do not ask them. ISC Class 11 still teaches them, and JEE Main lists damped and forced oscillations and resonance (qualitative ideas). Combinations of springs are standard in JEE, NEET and KCET problems even though the book does not treat them separately.",
          },
          {
            type: "text",
            md: t`**Springs in parallel.** Two springs fixed side by side to the same block both stretch by the same $x$. Their forces add: $F = -(k_1 + k_2)x$.

**Springs in series.** Two springs joined end to end carry the same tension, and their stretches add: $x = x_1 + x_2 = F/k_1 + F/k_2$.

**Cutting a spring.** For a uniform spring, $k$ is inversely proportional to its length: cut a spring of constant $k$ into $n$ equal pieces and each piece has constant $nk$.`,
          },
          {
            type: "formula",
            tex: t`\text{Parallel: } k = k_1 + k_2 \qquad\qquad \text{Series: } \frac{1}{k} = \frac{1}{k_1} + \frac{1}{k_2}`,
            caption: "Springs behave opposite to resistors: parallel springs add directly.",
          },
          {
            type: "example",
            title: "One block, two arrangements",
            problem: t`A 1 kg block is attached to springs of constants $100\ \text{N m}^{-1}$ and $300\ \text{N m}^{-1}$, (a) in series, (b) in parallel. Find the period in each case.`,
            steps: [
              t`(a) Series: $k = \dfrac{k_1k_2}{k_1 + k_2} = \dfrac{100 \times 300}{400} = 75\ \text{N m}^{-1}$.`,
              t`$T = 2\pi\sqrt{m/k} = 2\pi\sqrt{1/75} = 2\pi(0.1155) \approx 0.726$ s.`,
              t`(b) Parallel: $k = 400\ \text{N m}^{-1}$; $T = 2\pi\sqrt{1/400} = 2\pi/20 \approx 0.314$ s.`,
            ],
            answer: "Series: about 0.73 s; parallel: about 0.31 s. The series arrangement is softer, so it oscillates more slowly.",
          },
          {
            type: "text",
            md: t`**Damped oscillations.** A real pendulum or spring slowly stops because of air resistance and friction. For slow motion this **damping force** is roughly proportional to velocity and opposite to it: $F_d = -bv$, where $b$ is the **damping constant** (unit kg/s). The equation of motion becomes $m\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + kx = 0$.

For small damping the solution is an oscillation whose **amplitude decays exponentially**. The angular frequency is slightly smaller than the natural value. The mechanical energy is lost as heat in the medium.`,
          },
          {
            type: "formula",
            tex: t`x(t) = A\,e^{-bt/2m}\cos(\omega' t + \phi), \qquad \omega' = \sqrt{\frac{k}{m} - \frac{b^2}{4m^2}}, \qquad E(t) = \tfrac{1}{2}kA^2\,e^{-bt/m}`,
            caption: "Amplitude falls as e^(−bt/2m); energy (∝ amplitude²) falls twice as fast, as e^(−bt/m).",
          },
          {
            type: "example",
            title: "How long until the swing dies down?",
            problem: t`A 0.2 kg mass on a spring has damping constant $b = 0.04$ kg/s. How long does it take for (a) the amplitude, (b) the energy, to fall to half its initial value? ($\ln 2 = 0.693$)`,
            steps: [
              t`(a) $e^{-bt/2m} = \tfrac{1}{2}$ gives $t = \dfrac{2m}{b}\ln 2 = \dfrac{0.4}{0.04}(0.693) = 6.93$ s.`,
              t`(b) $e^{-bt/m} = \tfrac{1}{2}$ gives $t = \dfrac{m}{b}\ln 2 = 5(0.693) \approx 3.47$ s.`,
            ],
            answer: "Amplitude halves in about 6.9 s; energy halves in about 3.5 s (half the time).",
          },
          {
            type: "text",
            md: t`**Forced oscillations and resonance.** A system left alone oscillates at its **natural frequency** $\omega = \sqrt{k/m}$. If a periodic force $F_0\cos\omega_d t$ keeps acting, then after the start-up motion dies out, the system oscillates at the **driving frequency** $\omega_d$, not its own. The steady amplitude is

$A = \dfrac{F_0}{\sqrt{m^2(\omega^2 - \omega_d^2)^2 + \omega_d^2 b^2}}$.

When $\omega_d$ is close to $\omega$, the amplitude becomes very large: this is **resonance**. The smaller the damping, the taller and sharper the resonance peak. Damping, not the driving force, sets how large the amplitude can get.`,
          },
          {
            type: "list",
            items: [
              "Pushing a child on a swing in step with its natural swing makes it go higher and higher.",
              "Soldiers break step while crossing a bridge so their marching rhythm cannot drive the bridge at its natural frequency.",
              "Tuning a radio adjusts the circuit's natural frequency to match one station's frequency (electrical resonance).",
              "Buildings in earthquake zones are designed so their natural frequencies differ from typical ground-shaking frequencies.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Two identical springs of constant k are joined end to end. The combined constant is:",
                options: ["2k", "k", "k/2", "k/4"],
                answer: 2,
                explain: t`Series: $1/k_{eff} = 1/k + 1/k = 2/k$, so $k_{eff} = k/2$.`,
              },
              {
                kind: "mcq",
                q: "In the steady state of a forced oscillation, the body oscillates at:",
                options: ["its natural frequency", "the driving frequency", "the beat frequency", "zero frequency"],
                answer: 1,
                explain: "After the transient dies out, the body follows the driver: it oscillates at ω_d. Only the amplitude depends on how close ω_d is to the natural ω.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "At resonance the amplitude always becomes infinite, whatever the damping.",
            right: t`At resonance the amplitude becomes **large**, about $F_0/(\omega b)$, and it is limited by damping. Only with zero damping would it grow without limit.`,
            why: t`Putting $\omega_d = \omega$ makes the first term under the root zero, which looks like division by zero. But the second term, $\omega_d^2 b^2$, is still there. Real systems always have some damping.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each situation by the kind of oscillation.",
              groups: ["Free (undamped, ideal)", "Damped", "Forced"],
              items: [
                { text: "An ideal pendulum in a vacuum with no friction", group: 0, hint: "No energy loss: constant amplitude at the natural frequency." },
                { text: "A car's shock absorber stopping bounces quickly", group: 1, hint: "Oil inside absorbs energy, killing the motion." },
                { text: "A pendulum swinging in thick oil", group: 1, hint: "Large damping: the amplitude dies fast." },
                { text: "A loudspeaker cone driven by an audio signal", group: 2, hint: "It moves at the signal's frequency." },
                { text: "A sitar's sympathetic strings set vibrating by played notes", group: 2, hint: "They are driven by vibrations from the main strings." },
                { text: "A tuning fork slowly fading after being struck", group: 1, hint: "Its sound gets softer as energy is lost." },
              ],
              explain: "Free oscillations keep their natural frequency and amplitude; damped ones lose amplitude; forced ones follow an outside periodic push.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Parallel springs: $k = k_1 + k_2$; series: $1/k = 1/k_1 + 1/k_2$; cutting a spring into n pieces gives $nk$ each.`,
              t`Damping $-bv$ makes amplitude decay as $e^{-bt/2m}$ and energy as $e^{-bt/m}$; $\omega'$ is slightly less than $\omega$.`,
              "In forced oscillations the steady motion is at the driving frequency; resonance (large amplitude) occurs when it matches the natural frequency.",
              "Damping limits the resonance amplitude and makes the peak broader.",
            ],
          },
        ],
        flashcards: [
          { front: "Springs in parallel", back: t`$k = k_1 + k_2$ (same extension, forces add)` },
          { front: "Springs in series", back: t`$1/k = 1/k_1 + 1/k_2$ (same force, extensions add)` },
          { front: "Cutting a spring into n equal pieces", back: "Each piece has spring constant nk." },
          { front: "Damping force (small speeds)", back: t`$F_d = -bv$, b = damping constant (kg/s)` },
          { front: "Amplitude of damped SHM", back: t`$A e^{-bt/2m}$; energy falls as $e^{-bt/m}$.` },
          { front: "Forced oscillation (steady state)", back: "The body oscillates at the driving frequency, with amplitude depending on how close it is to the natural frequency." },
          { front: "Resonance", back: "Large amplitude when the driving frequency is close to the natural frequency; limited by damping." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Springs of constants 200 N/m and 300 N/m are joined in series. Find the effective spring constant.",
            answer: 120,
            tolerance: 0.5,
            unit: "N/m",
            explain: t`$k = \dfrac{200 \times 300}{500} = 120\ \text{N m}^{-1}$.`,
          },
          {
            kind: "mcq",
            q: "A spring of constant k is cut into two equal halves. The constant of each half is:",
            options: ["k/2", "k", "2k", "4k"],
            answer: 2,
            explain: "k is inversely proportional to length. Half the length means each half stretches half as much for the same force, so k doubles.",
          },
          {
            kind: "truefalse",
            q: "In the steady state of a forced oscillation, the body oscillates at its natural frequency.",
            answer: false,
            explain: "It oscillates at the driving frequency. The natural frequency only decides how large the amplitude is.",
          },
          {
            kind: "mcq",
            q: "At resonance, the amplitude of a forced oscillator is mainly limited by:",
            options: ["the mass", "the damping", "the spring constant alone", "gravity"],
            answer: 1,
            explain: t`At $\omega_d = \omega$ the amplitude is about $F_0/(\omega b)$: smaller damping b gives a larger amplitude.`,
          },
          {
            kind: "numeric",
            q: "A damped oscillator has m = 0.5 kg and b = 0.1 kg/s. Find the time for its amplitude to become half (ln 2 = 0.693).",
            answer: 6.93,
            tolerance: 0.05,
            unit: "s",
            difficulty: 2,
            hint: t`Solve $e^{-bt/2m} = 1/2$.`,
            explain: t`$t = \dfrac{2m}{b}\ln 2 = \dfrac{1}{0.1}(0.693) = 6.93$ s.`,
          },
          {
            kind: "multi",
            q: "Which are examples of resonance?",
            options: [
              "Tuning a radio to a station",
              "A bridge set swaying by marching in step",
              "Pushing a swing in time with its motion",
              "A shock absorber stopping a car's bounce",
            ],
            answers: [0, 1, 2],
            explain: "The first three match a driving frequency to a natural frequency. A shock absorber is an example of heavy damping, which works against resonance.",
          },
          {
            kind: "mcq",
            q: "Compared with the undamped value, the angular frequency of a lightly damped oscillator is:",
            options: ["slightly smaller", "slightly larger", "exactly equal", "zero"],
            answer: 0,
            explain: t`$\omega' = \sqrt{k/m - b^2/4m^2} < \sqrt{k/m}$. For light damping the difference is tiny.`,
          },
          {
            kind: "numeric",
            q: "A 1 kg block is held between two springs, each of constant 50 N/m, attached to walls on either side. Find its period.",
            answer: 0.628,
            tolerance: 0.01,
            unit: "s",
            difficulty: 2,
            hint: "When the block moves right, one spring pulls and the other pushes it back: both oppose the motion.",
            explain: t`Both forces act together, so it is effectively parallel: $k = 100\ \text{N m}^{-1}$. $T = 2\pi\sqrt{1/100} = 0.2\pi \approx 0.628$ s.`,
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-phy-oscillations-exam-edge",
        title: "Exam edge: Oscillations",
        summary: "What JEE, NEET, KCET and COMEDK ask from oscillations: phase and timing shortcuts, effective g, reduced mass, U-tube and floating bodies, the physical pendulum and collisions in SHM.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Oscillations is a short chapter with a steady return: usually one or two questions in JEE Main and NEET, and a couple in KCET and COMEDK. JEE Advanced uses SHM inside mixed problems with rotation, fluids, collisions and electrostatics. The questions test a few ideas again and again:

- identifying SHM and its $\omega$ from a force or energy expression;
- timing and phase (how long from one position to another);
- energy and speed at a given displacement;
- the period of "new" systems: spring combinations, two blocks, liquid columns, floating bodies, a pendulum in an accelerating frame, a rod pivoted at one end.`,
          },
          {
            type: "list",
            items: [
              t`**Universal recipe:** write the restoring force (or torque) for a small displacement as $F = -k_{eff}x$ (or $\tau = -C\theta$). Then $T = 2\pi\sqrt{m/k_{eff}}$ (or $2\pi\sqrt{I/C}$).`,
              t`**Timing from the reference circle:** mean → $A/2$ takes $T/12$; $A/2$ → $A$ takes $T/6$; mean → $A/\sqrt{2}$ takes $T/8$.`,
              t`**Effective g:** in a lift with acceleration $a$ upward, $g_{eff} = g + a$; downward, $g - a$; in free fall the pendulum does not oscillate. In a car accelerating horizontally, $g_{eff} = \sqrt{g^2 + a^2}$.`,
              t`**Two blocks joined by a spring** on a smooth floor: use the reduced mass $\mu = \dfrac{m_1m_2}{m_1 + m_2}$, so $T = 2\pi\sqrt{\mu/k}$.`,
              t`**Liquid in a U-tube** (total column length $L$): $T = 2\pi\sqrt{L/2g}$. **Floating body** of uniform cross-section with submerged depth $h$: $T = 2\pi\sqrt{h/g}$ (liquid's own motion neglected).`,
              t`**Physical (compound) pendulum:** $T = 2\pi\sqrt{\dfrac{I}{mgd}}$, with $d$ the distance from pivot to centre of mass. Uniform rod about one end: $T = 2\pi\sqrt{2L/3g}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\omega^2 = \frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}, \qquad A^2 = x_1^2 + \frac{v_1^2}{\omega^2}`,
            caption: "Two (position, speed) readings fix both ω and A, from v² = ω²(A² − x²).",
          },
          {
            type: "example",
            title: "KCET level: timing and energy",
            problem: t`A particle in SHM has period 1.2 s and amplitude 4 cm. (a) How long does it take to go from the mean position to $x = 2$ cm? (b) What is the ratio of kinetic to potential energy there?`,
            steps: [
              t`(a) $x = A\sin\omega t$ from the mean: $2 = 4\sin\omega t$ gives $\omega t = \pi/6$.`,
              t`$t = \dfrac{\pi/6}{2\pi/T} = \dfrac{T}{12} = \dfrac{1.2}{12} = 0.1$ s.`,
              t`(b) $\dfrac{K}{U} = \dfrac{A^2 - x^2}{x^2} = \dfrac{16 - 4}{4} = 3$.`,
            ],
            answer: "(a) 0.1 s; (b) K : U = 3 : 1.",
          },
          {
            type: "example",
            title: "NEET level: pendulum in a lift",
            problem: t`A pendulum has period 2 s in a stationary lift. Find its period when the lift accelerates upward at $g/4$. What if the lift moves up at constant speed?`,
            steps: [
              t`In the lift's frame the bob feels $g_{eff} = g + g/4 = 5g/4$.`,
              t`$T' = T\sqrt{\dfrac{g}{g_{eff}}} = 2\sqrt{\dfrac{4}{5}} = 2(0.894) \approx 1.79$ s.`,
              "At constant velocity there is no acceleration, so g_eff = g and the period stays 2 s.",
            ],
            answer: "About 1.79 s while accelerating up; 2 s at constant speed.",
          },
          {
            type: "example",
            title: "JEE Main level: two blocks and a spring",
            problem: t`Blocks of 1 kg and 3 kg on a smooth floor are joined by a spring of constant $300\ \text{N m}^{-1}$. They are pulled apart and released. Find the period.`,
            steps: [
              "The centre of mass stays at rest; each block oscillates about it with the same period.",
              t`Reduced mass $\mu = \dfrac{1 \times 3}{1 + 3} = 0.75$ kg.`,
              t`$\omega = \sqrt{k/\mu} = \sqrt{300/0.75} = \sqrt{400} = 20$ rad/s.`,
              t`$T = 2\pi/20 = \pi/10 \approx 0.314$ s.`,
            ],
            answer: "About 0.314 s.",
          },
          {
            type: "example",
            title: "JEE Main / Advanced level: rod as a pendulum",
            problem: t`A uniform rod of length 1.2 m swings about a horizontal axis through one end. Find its period for small oscillations and the length of the equivalent simple pendulum ($g = 9.8\ \text{m s}^{-2}$).`,
            steps: [
              t`Restoring torque: $\tau = -mg\dfrac{L}{2}\sin\theta \approx -\dfrac{mgL}{2}\theta$. Moment of inertia about the end: $I = \dfrac{mL^2}{3}$.`,
              t`$\omega^2 = \dfrac{mgL/2}{mL^2/3} = \dfrac{3g}{2L}$, so $T = 2\pi\sqrt{\dfrac{2L}{3g}}$.`,
              t`$T = 2\pi\sqrt{\dfrac{2(1.2)}{3(9.8)}} = 2\pi\sqrt{0.0816} = 2\pi(0.2857) \approx 1.80$ s.`,
              t`Equivalent simple pendulum: $L_{eq} = \dfrac{2L}{3} = 0.8$ m.`,
            ],
            answer: "About 1.8 s; it swings like a simple pendulum of length 0.8 m, not 0.6 m.",
          },
          {
            type: "example",
            title: "JEE Advanced level: clay lands on an oscillating block",
            problem: t`A 1 kg block on a smooth floor oscillates on a spring ($k = 100\ \text{N m}^{-1}$) with amplitude 10 cm. As it passes the mean position, a 3 kg lump of clay falls vertically onto it and sticks. Find the new amplitude and period, and the energy lost.`,
            steps: [
              t`Before: $\omega = \sqrt{100/1} = 10$ rad/s, $v_{max} = \omega A = 1$ m/s, $E = \tfrac{1}{2}(100)(0.1)^2 = 0.5$ J.`,
              t`Horizontal momentum is conserved in the sticking (the clay has no horizontal velocity): $1 \times 1 = 4v'$, so $v' = 0.25$ m/s.`,
              t`New $\omega' = \sqrt{100/4} = 5$ rad/s; this is still the mean position, so $A' = v'/\omega' = 0.05$ m. New $T' = 2\pi/5 \approx 1.26$ s.`,
              t`New energy $\tfrac{1}{2}(4)(0.25)^2 = 0.125$ J, so $0.375$ J is lost in the inelastic collision.`,
              t`Shortcut: at the mean, $A' = A\sqrt{\dfrac{M}{M + m}} = 10\sqrt{1/4} = 5$ cm. Had the clay landed at an extreme (block at rest), the amplitude would stay 10 cm and only the period would change.`,
            ],
            answer: "Amplitude 5 cm, period about 1.26 s, energy lost 0.375 J.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A particle in SHM has speed 0.3 m/s at x = 4 cm and 0.4 m/s at x = 3 cm. Find its amplitude in cm.",
                answer: 5,
                tolerance: 0.05,
                unit: "cm",
                explain: t`$\omega^2 = \dfrac{0.16 - 0.09}{0.0016 - 0.0009} = 100$, so $\omega = 10$ rad/s. $A^2 = 0.0016 + 0.09/100 = 0.0025$, $A = 0.05$ m = 5 cm.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Springs in series add like resistors in series: k = k₁ + k₂.",
            right: "Springs in parallel add directly (k₁ + k₂); springs in series combine as reciprocals (1/k = 1/k₁ + 1/k₂).",
            why: "The resistor picture is the opposite. A spring's stretch, not its force, adds in series. Two springs in series stretch more for the same pull, so they are softer, not stiffer.",
          },
          {
            type: "mistake",
            wrong: "Going from the mean position to x = A/2 is half the distance to the extreme, so it takes half of T/4, that is T/8.",
            right: "Mean → A/2 takes T/12 and A/2 → A takes T/6. Mean → A/√2 takes T/8.",
            why: "The particle is fastest near the mean, so it covers the first half of the distance in much less than half the time. Use the reference circle: sin(ωt) = 1/2 gives ωt = π/6, which is one-twelfth of 2π.",
          },
          {
            type: "mistake",
            wrong: "A pendulum in a lift moving upward has a shorter period.",
            right: "Only acceleration changes the period. Moving up or down at constant speed leaves g_eff = g and the period unchanged.",
            why: "Exam statements mix 'moving up' with 'accelerating up'. A lift moving up while slowing down actually has downward acceleration, which makes the period longer.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each system to its period.",
              pairs: [
                ["Block on a spring", "2π√(m/k)"],
                ["Simple pendulum", "2π√(L/g)"],
                ["Liquid column of total length L in a U-tube", "2π√(L/2g)"],
                ["Floating cylinder, submerged depth h", "2π√(h/g)"],
                ["Uniform rod pivoted at one end", "2π√(2L/3g)"],
              ],
              explain: "All follow T = 2π√(inertia ÷ restoring factor). Find the restoring force for a small displacement and the result drops out.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When the shortcuts are safe",
            md: t`The timing results ($T/12$, $T/6$, $T/8$) assume pure SHM starting from the mean or an extreme. The U-tube and floating-body results ignore viscosity and the liquid's own motion. The pendulum results need small angles. If a problem gives a large angle or a non-uniform tube, go back to the force method.`,
          },
          {
            type: "keypoints",
            items: [
              t`Find $k_{eff}$ (or the torque constant) for a small displacement; then $T = 2\pi\sqrt{m/k_{eff}}$ or $2\pi\sqrt{I/C}$.`,
              t`Effective g: $g \pm a$ in a lift, $\sqrt{g^2 + a^2}$ in a horizontally accelerating car; constant velocity changes nothing.`,
              t`Two bodies on a spring: use reduced mass $\mu = m_1m_2/(m_1 + m_2)$.`,
              t`A mass added at the mean position changes the amplitude ($A\sqrt{M/(M+m)}$); added at an extreme, the amplitude stays.`,
            ],
          },
        ],
        flashcards: [
          { front: "Time from mean to A/2", back: "T/12 (and A/2 to A takes T/6)." },
          { front: "Pendulum in a lift accelerating up at a", back: t`$T = 2\pi\sqrt{L/(g + a)}$` },
          { front: "Pendulum in a car accelerating horizontally at a", back: t`$T = 2\pi\sqrt{L/\sqrt{g^2 + a^2}}$` },
          { front: "Two blocks joined by a spring", back: t`$T = 2\pi\sqrt{\mu/k}$, $\mu = m_1m_2/(m_1 + m_2)$` },
          { front: "Liquid in a U-tube", back: t`$T = 2\pi\sqrt{L/2g}$, L = total length of the liquid column.` },
          { front: "Physical pendulum", back: t`$T = 2\pi\sqrt{I/(mgd)}$, d = pivot to centre of mass.` },
          { front: "Rod pivoted at one end", back: t`$T = 2\pi\sqrt{2L/3g}$; equivalent length 2L/3.` },
          { front: "Mass dropped on a block at the mean position", back: t`Momentum conserved; new amplitude $A\sqrt{M/(M+m)}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A particle in SHM goes from x = A/2 to x = A. The time taken is:",
            options: ["T/12", "T/6", "T/8", "T/4"],
            answer: 1,
            difficulty: 2,
            explain: "Mean → A takes T/4 and mean → A/2 takes T/12, so A/2 → A takes T/4 − T/12 = T/6.",
          },
          {
            kind: "numeric",
            q: "A liquid column of total length 40 cm oscillates in a uniform U-tube. Find the period (g = 10 m/s²).",
            answer: 0.889,
            tolerance: 0.01,
            unit: "s",
            difficulty: 2,
            hint: "Lowering one side by y raises the other by y: the unbalanced column is 2y.",
            explain: t`$T = 2\pi\sqrt{L/2g} = 2\pi\sqrt{0.4/20} = 2\pi(0.1414) \approx 0.889$ s.`,
          },
          {
            kind: "mcq",
            q: "A pendulum of period T hangs in a car accelerating horizontally at a = g. Its new period is:",
            options: ["T", "T/√2", t`$T/2^{1/4}$`, "√2 T"],
            answer: 2,
            difficulty: 2,
            hint: t`$g_{eff} = \sqrt{g^2 + a^2}$.`,
            explain: t`$g_{eff} = g\sqrt{2}$, so $T' = T\sqrt{g/g_{eff}} = T/2^{1/4} \approx 0.84T$.`,
          },
          {
            kind: "multi",
            q: "Which of these represent SHM?",
            options: ["x = 3 sin ωt + 4 cos ωt", "x = sin ωt cos ωt", "x = sin ωt + sin 2ωt", "x = e^(−ωt)"],
            answers: [0, 1],
            difficulty: 2,
            explain: t`$3\sin\omega t + 4\cos\omega t = 5\sin(\omega t + \alpha)$ (SHM, amplitude 5). $\sin\omega t\cos\omega t = \tfrac{1}{2}\sin 2\omega t$ (SHM at $2\omega$). Two different frequencies give periodic but not simple harmonic motion; the exponential is not periodic.`,
          },
          {
            kind: "numeric",
            q: "A 2 kg block oscillates on a smooth floor with amplitude 6 cm. At the mean position a 6 kg mass is placed gently on it and moves with it. Find the new amplitude in cm.",
            answer: 3,
            tolerance: 0.05,
            unit: "cm",
            difficulty: 3,
            hint: "Momentum is conserved at the mean position; then A = v/ω.",
            explain: t`$v' = v\dfrac{M}{M + m}$ and $\omega' = \omega\sqrt{\dfrac{M}{M + m}}$, so $A' = A\sqrt{\dfrac{M}{M + m}} = 6\sqrt{2/8} = 3$ cm.`,
          },
          {
            kind: "numeric",
            q: "A uniform rod of length 0.6 m oscillates about a horizontal axis through one end. Find the period (g = 9.8 m/s²).",
            answer: 1.27,
            tolerance: 0.02,
            unit: "s",
            difficulty: 3,
            hint: "Use T = 2π√(I/mgd) with I = mL²/3 and d = L/2.",
            explain: t`$T = 2\pi\sqrt{2L/3g} = 2\pi\sqrt{1.2/29.4} = 2\pi(0.2020) \approx 1.27$ s.`,
          },
          {
            kind: "mcq",
            q: "A pendulum clock is in a lift whose cable snaps, so the lift falls freely. The pendulum:",
            options: ["keeps its period", "oscillates twice as fast", "stops oscillating", "oscillates with period √2 T"],
            answer: 2,
            difficulty: 2,
            explain: t`In free fall $g_{eff} = 0$: there is no restoring force, so $T = 2\pi\sqrt{L/0}$ is infinite. The bob stays where it is relative to the lift.`,
          },
          {
            kind: "multi",
            q: "For a particle in SHM, which statements are correct?",
            options: [
              "The graph of KE against x is a downward-opening parabola",
              "The potential energy repeats with period T/2",
              "The total energy is proportional to A²",
              "The total energy is proportional to A",
            ],
            answers: [0, 1, 2],
            difficulty: 2,
            explain: t`$K = \tfrac{1}{2}k(A^2 - x^2)$ is a downward parabola in x; U contains $\cos^2$, so it repeats every T/2; $E = \tfrac{1}{2}kA^2$.`,
          },
        ],
      },
    ],
  },
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Oscillations": "c11-phy-oscillations",
};
