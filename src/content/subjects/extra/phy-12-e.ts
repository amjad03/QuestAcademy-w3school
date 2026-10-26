import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Dual Nature of Radiation and Matter (NCERT, Karnataka PUC, ISC)     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-dual-nature",
    title: "Dual Nature of Radiation and Matter",
    icon: "💡",
    description: "Electron emission, the photoelectric effect and its laws, Einstein's photoelectric equation, photons, and de Broglie's matter waves.",
    lessons: [
      {
        slug: "c12-photoelectric-effect",
        title: "Electron Emission and the Photoelectric Effect",
        summary: "Work function, the three ways to free electrons from a metal, and what the photoelectric experiment shows about intensity, frequency and stopping potential.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚪",
            caption: "Automatic doors and light meters in cameras work because light can knock electrons out of a metal surface.",
          },
          {
            type: "text",
            md: t`A metal has many **free electrons** that move inside it, but they cannot leave the surface on their own. Positive ions near the surface pull them back. An electron needs a minimum amount of energy to escape. This minimum energy is the **work function**, written $\phi_0$. It depends on the metal and on the condition of its surface.

Work function is usually given in **electron volt** (eV). One electron volt is the energy an electron gains when it is accelerated through a potential difference of 1 V: $1\ \text{eV} = 1.6 \times 10^{-19}$ J.`,
          },
          {
            type: "table",
            headers: ["Type of emission", "How the electron gets the energy", "Example"],
            rows: [
              ["Thermionic emission", "heating the metal gives electrons thermal energy", "filament of an old vacuum tube or CRT"],
              ["Field emission", "a very strong electric field (about $10^8$ V/m) pulls electrons out", "spark plug, field-emission microscope"],
              ["Photoelectric emission", "light of high enough frequency falls on the metal", "photocell, light sensor"],
            ],
          },
          {
            type: "text",
            md: t`**Discovery.** Heinrich Hertz (1887) noticed that sparks across a gap jumped more easily when ultraviolet light fell on the negative electrode. Wilhelm Hallwachs and Philipp Lenard (1886–1902) studied it carefully: zinc lost negative charge under UV light, and the emitted particles were electrons. Electrons emitted this way are called **photoelectrons** and the current they make is the **photoelectric current**.`,
          },
          {
            type: "heading",
            text: "The experiment and its three results",
          },
          {
            type: "text",
            md: t`An evacuated glass tube has a photosensitive plate C (emitter) and a collector plate A. Monochromatic light enters through a quartz window and falls on C. A battery keeps A at a potential that can be made positive or negative with respect to C, and a microammeter reads the current.

1. **Effect of intensity.** At fixed frequency and fixed accelerating potential, the photocurrent is directly proportional to the intensity of light.
2. **Effect of potential.** As the collector potential is made more positive, the current rises and then stays at a **saturation current** (all emitted electrons reach A). If A is made negative, the current falls and becomes zero at the **stopping potential** $V_0$. Then $K_{max} = eV_0$. For a given frequency, $V_0$ is the same for every intensity; only the saturation current changes.
3. **Effect of frequency.** For a given metal there is a **threshold frequency** $\nu_0$ below which no electrons come out, however bright the light. Above $\nu_0$, $V_0$ (and so $K_{max}$) increases linearly with frequency.`,
          },
          {
            type: "formula",
            tex: t`K_{max} = \tfrac{1}{2} m v_{max}^2 = e V_0`,
            caption: "The stopping potential measures the kinetic energy of the fastest photoelectrons.",
          },
          {
            type: "example",
            title: "From stopping potential to speed",
            problem: t`In a photocell the current becomes zero when the collector is at $-1.8$ V with respect to the emitter. Find the maximum kinetic energy and the maximum speed of the photoelectrons. ($e = 1.6 \times 10^{-19}$ C, $m_e = 9.1 \times 10^{-31}$ kg)`,
            steps: [
              t`Stopping potential $V_0 = 1.8$ V, so $K_{max} = eV_0 = 1.8$ eV.`,
              t`In joules: $K_{max} = 1.8 \times 1.6 \times 10^{-19} = 2.88 \times 10^{-19}$ J.`,
              t`$v_{max} = \sqrt{\dfrac{2K_{max}}{m_e}} = \sqrt{\dfrac{2 \times 2.88 \times 10^{-19}}{9.1 \times 10^{-31}}} = \sqrt{6.33 \times 10^{11}}$ m/s.`,
              t`$v_{max} \approx 7.96 \times 10^{5}$ m/s.`,
            ],
            answer: t`$K_{max} = 1.8$ eV $= 2.88 \times 10^{-19}$ J; $v_{max} \approx 8.0 \times 10^5$ m/s.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What does each quantity depend on?",
              groups: ["Intensity of light", "Frequency of light"],
              items: [
                { text: "Saturation current", group: 0, hint: "More photons per second free more electrons per second." },
                { text: "Stopping potential", group: 1, hint: "It measures the energy of one electron, which comes from one photon." },
                { text: "Maximum kinetic energy of photoelectrons", group: 1, hint: "Kmax = hν − φ0 has no intensity in it." },
                { text: "Number of photoelectrons emitted per second", group: 0, hint: "Each absorbed photon frees at most one electron." },
                { text: "Whether emission happens at all", group: 1, hint: "Below the threshold frequency nothing comes out, even in bright light." },
              ],
              explain: "Intensity controls **how many** electrons come out per second. Frequency controls **whether** they come out and **how fast** the fastest ones move.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The intensity of light on a photocell is doubled, keeping the frequency fixed. What happens to the stopping potential?",
                options: ["It doubles", "It halves", "It stays the same", "It becomes four times"],
                answer: 2,
                explain: "Stopping potential depends only on frequency and the metal. Doubling intensity doubles the saturation current, not $V_0$.",
              },
            ],
          },
          {
            type: "heading",
            text: "Why the wave theory fails",
          },
          {
            type: "list",
            items: [
              "Wave theory says a brighter wave carries more energy, so the electrons should come out faster. Experiment: $K_{max}$ does not depend on intensity.",
              "Wave theory says any frequency should work if the light is bright enough or shines long enough. Experiment: below $\\nu_0$ there is no emission at all.",
              "Wave theory says a faint wave needs time (hours, by estimate) to pour enough energy into one electron. Experiment: emission starts almost instantly, within about $10^{-9}$ s.",
            ],
          },
          {
            type: "mistake",
            wrong: "If I use brighter light, the photoelectrons come out with more kinetic energy.",
            right: "Brighter light of the same frequency gives more photoelectrons per second, but the same maximum kinetic energy.",
            why: "In everyday life a stronger push means a faster object, so this feels natural. But each electron absorbs one photon, and a photon's energy is fixed by frequency. More intensity only means more photons.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Graph questions are common: photocurrent vs collector potential (same $V_0$ for different intensities; different $V_0$ for different frequencies) and $V_0$ vs frequency (straight line cutting the frequency axis at $\\nu_0$). Label axes and mark saturation current and stopping potential to get full marks.",
          },
          {
            type: "keypoints",
            items: [
              t`Work function $\phi_0$ is the minimum energy needed to free an electron from a metal surface; $1\ \text{eV} = 1.6 \times 10^{-19}$ J.`,
              "Photocurrent ∝ intensity; saturation current rises with intensity.",
              t`$K_{max} = eV_0$; $V_0$ depends on frequency, not on intensity.`,
              t`No emission below the threshold frequency $\nu_0$; emission is instantaneous above it.`,
              "These facts cannot be explained by the wave picture of light.",
            ],
          },
        ],
        flashcards: [
          { front: "Work function", back: "The minimum energy an electron needs to escape from the surface of a metal. Symbol φ₀, usually in eV." },
          { front: "1 electron volt", back: "Energy gained by an electron accelerated through 1 V: 1.6 × 10⁻¹⁹ J." },
          { front: "Stopping potential", back: "The minimum negative potential of the collector (relative to the emitter) that makes the photocurrent zero. eV₀ = Kmax." },
          { front: "Threshold frequency", back: "The minimum frequency of light that can cause photoelectric emission from a given metal." },
          { front: "Saturation current", back: "The maximum photocurrent, reached when every emitted electron is collected. It is proportional to intensity." },
          { front: "Three kinds of electron emission", back: "Thermionic (heat), field (strong electric field), photoelectric (light)." },
          { front: "Time lag in photoelectric emission", back: "Practically none: about 10⁻⁹ s or less." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which observation of the photoelectric effect is explained by the wave theory of light?",
            options: [
              "Existence of a threshold frequency",
              "Kinetic energy independent of intensity",
              "No time lag in emission",
              "None of these",
            ],
            answer: 3,
            explain: "All three are failures of the wave theory. Only the photon picture explains them.",
          },
          {
            kind: "numeric",
            q: "The stopping potential for a metal is 2.5 V. What is the maximum kinetic energy of the photoelectrons in eV?",
            answer: 2.5,
            unit: "eV",
            explain: "$K_{max} = eV_0 = 2.5$ eV.",
          },
          {
            kind: "truefalse",
            q: "For light of a fixed frequency, curves of photocurrent against collector potential for different intensities all meet the voltage axis at the same point.",
            answer: true,
            explain: "That common point is the stopping potential, which depends only on frequency.",
          },
          {
            kind: "mcq",
            q: "In a photocell, the collector potential is increased from zero to a large positive value. The current:",
            options: [
              "rises without limit",
              "rises and then becomes constant",
              "falls to zero",
              "stays constant all the way",
            ],
            answer: 1,
            explain: "Once all emitted electrons are collected, the current saturates.",
          },
          {
            kind: "fill",
            q: "Emission of electrons from a metal when it is heated is called ___ emission.",
            answer: ["thermionic"],
            explain: "Heat supplies the energy in thermionic emission.",
          },
          {
            kind: "numeric",
            q: "Photoelectrons have a maximum kinetic energy of 3.2 × 10⁻¹⁹ J. What is the stopping potential in volts? (e = 1.6 × 10⁻¹⁹ C)",
            answer: 2,
            unit: "V",
            explain: "$V_0 = K_{max}/e = 3.2 \\times 10^{-19} / 1.6 \\times 10^{-19} = 2$ V.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Light of frequency below the threshold frequency falls on a metal. Which statements are true?",
            options: [
              "No photoelectrons are emitted",
              "Electrons come out if the light is made bright enough",
              "Electrons come out if we wait long enough",
              "Using a higher frequency above threshold would cause emission",
            ],
            answers: [0, 3],
            explain: "Below $\\nu_0$ there is no emission at any intensity or after any wait. Raising the frequency above $\\nu_0$ starts emission.",
            difficulty: 2,
            hint: "Think of one photon giving its energy to one electron.",
          },
        ],
      },
      {
        slug: "c12-einstein-equation-photons",
        title: "Einstein's Photoelectric Equation and the Photon",
        summary: "Light as packets of energy hν, Einstein's equation, how it explains every law of photoelectric emission, Millikan's test, and the properties of photons.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`In 1905 Albert Einstein proposed that light energy is not spread smoothly over a wave. It travels in packets called **quanta** (later named **photons**). A photon of light of frequency $\nu$ carries energy $E = h\nu$, where $h = 6.63 \times 10^{-34}$ J s is **Planck's constant**.

In photoelectric emission, **one photon is absorbed by one electron** and gives up all its energy at once. Part of this energy ($\phi_0$) is used to free the electron. The rest becomes its kinetic energy. Electrons from deeper inside lose some energy on the way out, so the electrons that leave straight from the surface have the **maximum** kinetic energy.`,
          },
          {
            type: "formula",
            tex: t`K_{max} = h\nu - \phi_0 \qquad\text{and}\qquad eV_0 = h\nu - \phi_0`,
            caption: "Einstein's photoelectric equation. It earned him the Nobel Prize in Physics for 1921.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the argument in order.",
              items: [
                "One photon of energy hν is absorbed by one electron",
                "Energy φ₀ is used to pull the electron out of the surface",
                "The rest, hν − φ₀, is the largest kinetic energy an electron can have",
                "The collector is made negative until even these electrons stop: eV₀ = Kmax",
                "So V₀ = (h/e)ν − φ₀/e, a straight line against ν",
              ],
              explain: "Energy conservation for a single photon–electron event gives the whole equation. Writing $K_{max} = eV_0$ turns it into a straight-line law you can test with a graph.",
            },
          },
          {
            type: "formula",
            tex: t`V_0 = \frac{h}{e}\,\nu - \frac{\phi_0}{e}, \qquad \phi_0 = h\nu_0 = \frac{hc}{\lambda_0}`,
            caption: "Slope of the V₀–ν line is h/e for every metal; the line meets the ν-axis at the threshold frequency ν₀.",
          },
          {
            type: "heading",
            text: "How the equation explains each law",
          },
          {
            type: "list",
            items: [
              t`**Threshold.** $K_{max}$ cannot be negative, so we need $h\nu \ge \phi_0$, that is $\nu \ge \nu_0 = \phi_0 / h$. Equivalently, the wavelength must be at most $\lambda_0 = hc/\phi_0$.`,
              t`**Kinetic energy vs frequency.** $K_{max}$ rises linearly with $\nu$ and does not contain intensity at all.`,
              t`**Current vs intensity.** Greater intensity means more photons per second, so more electrons per second and a larger current.`,
              t`**No time lag.** The photon's energy is handed over in a single event, so there is no waiting.`,
            ],
          },
          {
            type: "text",
            md: t`**Millikan's test (1906–1916).** R. A. Millikan measured $V_0$ for sodium at many frequencies. He found a straight line whose slope gave a value of $h$ that agreed with Planck's value. This confirmed Einstein's equation, even though Millikan had set out expecting to disprove it.`,
          },
          {
            type: "example",
            title: "Caesium in violet light",
            problem: t`Violet light of wavelength 400 nm falls on caesium ($\phi_0 = 2.14$ eV). Find the energy of a photon, the maximum kinetic energy of the photoelectrons, the stopping potential and the threshold wavelength. (Use $hc = 1240$ eV nm.)`,
            steps: [
              t`Photon energy: $E = \dfrac{hc}{\lambda} = \dfrac{1240}{400} = 3.10$ eV.`,
              t`$K_{max} = E - \phi_0 = 3.10 - 2.14 = 0.96$ eV.`,
              t`$V_0 = K_{max}/e = 0.96$ V.`,
              t`$\lambda_0 = \dfrac{hc}{\phi_0} = \dfrac{1240}{2.14} \approx 579$ nm. Any light with $\lambda > 579$ nm (yellow, red) cannot free electrons from caesium.`,
            ],
            answer: t`$E = 3.10$ eV, $K_{max} = 0.96$ eV, $V_0 = 0.96$ V, $\lambda_0 \approx 579$ nm.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A metal has work function 2.48 eV. What is its threshold wavelength in nm? (hc = 1240 eV nm)",
                answer: 500,
                tolerance: 2,
                unit: "nm",
                explain: "$\\lambda_0 = 1240/2.48 = 500$ nm.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The threshold wavelength is the smallest wavelength that can cause photoelectric emission.",
            right: "The threshold wavelength is the **largest** wavelength that can cause emission. Shorter wavelengths carry more energy per photon.",
            why: "Threshold frequency is a minimum, so students assume threshold wavelength is also a minimum. Since $E = hc/\\lambda$, a minimum in frequency becomes a maximum in wavelength.",
          },
          {
            type: "heading",
            text: "The photon",
          },
          {
            type: "table",
            headers: ["Property", "Value or statement"],
            rows: [
              ["Energy", t`$E = h\nu = hc/\lambda$`],
              ["Momentum", t`$p = h\nu/c = h/\lambda$`],
              ["Speed in vacuum", t`$c = 3 \times 10^8$ m/s`],
              ["Rest mass and charge", "zero rest mass; no charge, so not deflected by electric or magnetic fields"],
              ["Intensity", "a more intense beam has more photons crossing unit area per second, each with the same energy"],
              ["In collisions", "total energy and total momentum are conserved; the number of photons need not be (photons can be absorbed or created)"],
            ],
          },
          {
            type: "example",
            title: "Photons from a laser pointer",
            problem: t`A green laser pointer emits 5.0 mW at 532 nm. How many photons does it emit each second? ($h = 6.63 \times 10^{-34}$ J s, $c = 3 \times 10^8$ m/s)`,
            steps: [
              t`Energy of one photon: $E = \dfrac{hc}{\lambda} = \dfrac{6.63 \times 10^{-34} \times 3 \times 10^8}{532 \times 10^{-9}} = 3.74 \times 10^{-19}$ J.`,
              t`Number per second $N = \dfrac{P}{E} = \dfrac{5.0 \times 10^{-3}}{3.74 \times 10^{-19}}$.`,
              t`$N \approx 1.34 \times 10^{16}$ photons per second.`,
            ],
            answer: t`About $1.3 \times 10^{16}$ photons every second.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Use $hc = 1240$ eV nm when energies are in eV and wavelengths in nm; it saves a page of arithmetic. In derivation questions, state clearly that one photon is absorbed by one electron. In the $V_0$–$\\nu$ graph, write slope $= h/e$ and $\\nu$-intercept $= \\nu_0$.",
          },
          {
            type: "keypoints",
            items: [
              t`Photon energy $E = h\nu$, momentum $p = h/\lambda$, zero rest mass, no charge.`,
              t`Einstein's equation: $K_{max} = eV_0 = h\nu - \phi_0$.`,
              t`Threshold: $\nu_0 = \phi_0/h$, $\lambda_0 = hc/\phi_0$ (a maximum wavelength).`,
              t`$V_0$ vs $\nu$ is a straight line of slope $h/e$, the same for every metal.`,
              "Intensity changes the number of photons, not the energy of each one.",
            ],
          },
        ],
        flashcards: [
          { front: "Einstein's photoelectric equation", back: "Kmax = hν − φ₀, or eV₀ = hν − φ₀." },
          { front: "Slope of the stopping potential vs frequency graph", back: "h/e, the same for all metals." },
          { front: "Intercept of the V₀–ν graph on the frequency axis", back: "The threshold frequency ν₀ of the metal." },
          { front: "Momentum of a photon", back: "p = h/λ = E/c." },
          { front: "hc in handy units", back: "About 1240 eV nm, so E (eV) ≈ 1240 / λ (nm)." },
          { front: "Who verified Einstein's equation experimentally?", back: "R. A. Millikan (1906–1916), who also obtained Planck's constant from the slope." },
          { front: "Is photon number conserved in collisions?", back: "No. Energy and momentum are conserved, but photons can be absorbed or created." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Light of wavelength 310 nm falls on a metal of work function 2.0 eV. What is the stopping potential in volts? (hc = 1240 eV nm)",
            answer: 2,
            tolerance: 0.02,
            unit: "V",
            explain: "$E = 1240/310 = 4.0$ eV; $K_{max} = 4.0 - 2.0 = 2.0$ eV; $V_0 = 2.0$ V.",
          },
          {
            kind: "mcq",
            q: "Graphs of stopping potential against frequency are drawn for two different metals. The two lines:",
            options: [
              "have different slopes and the same intercept",
              "are parallel with different intercepts on the frequency axis",
              "coincide",
              "meet at the origin",
            ],
            answer: 1,
            explain: "Slope $h/e$ is universal; the intercept $\\nu_0 = \\phi_0/h$ depends on the metal.",
          },
          {
            kind: "mcq",
            q: "A graph of maximum kinetic energy (in joules) against frequency of light has slope equal to:",
            options: ["h/e", "h", "e/h", "φ₀"],
            answer: 1,
            explain: "$K_{max} = h\\nu - \\phi_0$, so the slope is $h$. The $V_0$–$\\nu$ graph has slope $h/e$.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A source emits 1.0 W of light of wavelength 663 nm. Find the number of photons emitted per second, in units of 10¹⁸. (h = 6.63 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s)",
            answer: 3.33,
            tolerance: 0.05,
            unit: "× 10¹⁸ per s",
            explain: "$E = hc/\\lambda = 6.63 \\times 10^{-34} \\times 3 \\times 10^8 / 663 \\times 10^{-9} = 3.0 \\times 10^{-19}$ J. $N = 1.0 / 3.0 \\times 10^{-19} = 3.33 \\times 10^{18}$ per second.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A photon of red light and a photon of violet light travel at the same speed in vacuum but carry different energies.",
            answer: true,
            explain: "All photons travel at $c$ in vacuum; energy $h\\nu$ is larger for violet (higher frequency).",
          },
          {
            kind: "mcq",
            q: "Photons of energy 6 eV eject electrons with maximum kinetic energy 2 eV from a metal. What is the work function?",
            options: ["2 eV", "3 eV", "4 eV", "8 eV"],
            answer: 2,
            explain: "$\\phi_0 = h\\nu - K_{max} = 6 - 2 = 4$ eV.",
          },
          {
            kind: "multi",
            q: "Which of these are properties of photons?",
            options: [
              "Zero rest mass",
              "Deflected by a magnetic field",
              "Momentum h/λ",
              "Energy depends on the intensity of the beam",
            ],
            answers: [0, 2],
            explain: "Photons are uncharged, so fields do not deflect them. Energy depends on frequency; intensity sets the number of photons.",
            difficulty: 2,
            hint: "Photons carry no charge.",
          },
        ],
      },
      {
        slug: "c12-matter-waves",
        title: "Wave Nature of Matter: de Broglie Waves",
        summary: "De Broglie's hypothesis, the wavelength of a moving particle, the electron accelerated through a potential difference, and why we never see a cricket ball diffract.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🔬",
            caption: "An electron microscope can show viruses because fast electrons have wavelengths far shorter than visible light.",
          },
          {
            type: "text",
            md: t`Light behaves as a wave in interference and diffraction, and as a stream of particles (photons) in the photoelectric effect. In 1924 Louis de Broglie asked: if nature is symmetric, should moving **particles** of matter not also behave like **waves**?

He proposed that every moving particle of momentum $p$ has a wave associated with it, called a **matter wave** or **de Broglie wave**.`,
          },
          {
            type: "formula",
            tex: t`\lambda = \frac{h}{p} = \frac{h}{mv}`,
            caption: "de Broglie wavelength. The same relation holds for a photon, since p = h/λ.",
          },
          {
            type: "heading",
            text: "Wavelength in terms of kinetic energy and accelerating voltage",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`For a non-relativistic particle, $K = \tfrac{1}{2}mv^2 = \dfrac{p^2}{2m}$, so $p = \sqrt{2mK}$.`,
              t`Hence $\lambda = \dfrac{h}{\sqrt{2mK}}$.`,
              t`A charge $q$ accelerated from rest through a potential difference $V$ gains $K = qV$, so $\lambda = \dfrac{h}{\sqrt{2mqV}}$.`,
              t`For an electron put $h = 6.63 \times 10^{-34}$ J s, $m = 9.11 \times 10^{-31}$ kg, $q = 1.6 \times 10^{-19}$ C: $\lambda = \dfrac{1.227}{\sqrt{V}}$ nm, with $V$ in volts.`,
            ],
          },
          {
            type: "formula",
            tex: t`\lambda_{electron} = \frac{1.227}{\sqrt{V}}\ \text{nm}`,
          },
          {
            type: "example",
            title: "Electron versus cricket ball",
            problem: t`(a) Find the de Broglie wavelength of an electron accelerated from rest through 54 V. (b) Find that of a 0.16 kg cricket ball bowled at 40 m/s. ($h = 6.63 \times 10^{-34}$ J s)`,
            steps: [
              t`(a) $\lambda = \dfrac{1.227}{\sqrt{54}}$ nm $= \dfrac{1.227}{7.35}$ nm $\approx 0.167$ nm. This is comparable to the spacing of atoms in a crystal, so a crystal can diffract these electrons.`,
              t`(b) $p = mv = 0.16 \times 40 = 6.4$ kg m/s.`,
              t`$\lambda = \dfrac{h}{p} = \dfrac{6.63 \times 10^{-34}}{6.4} \approx 1.0 \times 10^{-34}$ m.`,
              "This is far smaller than any slit or obstacle, so the ball shows no wave behaviour we could ever measure.",
            ],
            answer: t`Electron: about 0.167 nm. Ball: about $1.0 \times 10^{-34}$ m, far too small to detect.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "An electron and a proton have the same kinetic energy. Which has the longer de Broglie wavelength?",
              emoji: "🌊",
              options: ["The proton, because it is heavier", "The electron", "Both have the same wavelength"],
              answer: 1,
              trap: 0,
              explain: t`$\lambda = h/\sqrt{2mK}$. For the same $K$, $\lambda \propto 1/\sqrt{m}$, so the lighter electron has the longer wavelength, about $\sqrt{1836} \approx 43$ times the proton's.`,
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An electron is accelerated from rest through 100 V. What is its de Broglie wavelength in nm? (Use λ = 1.227/√V nm.)",
                answer: 0.1227,
                tolerance: 0.002,
                unit: "nm",
                explain: "$\\lambda = 1.227/\\sqrt{100} = 1.227/10 = 0.1227$ nm.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Experimental proof.** In 1927 C. J. Davisson and L. H. Germer in the USA, and G. P. Thomson in Scotland independently, observed **diffraction of electrons** by crystals. A beam of 54 eV electrons scattered from a nickel crystal gave a strong peak at a definite angle, and the wavelength worked out from it (about 0.165 nm) matched de Broglie's value of 0.167 nm.

*Board note:* the rationalised NCERT book gives the matter-wave idea and formula but drops the detailed description of the Davisson–Germer apparatus. ISC asks about electron diffraction qualitatively. Read your board's latest syllabus to see how much detail is examined.`,
          },
          {
            type: "text",
            md: t`**Uncertainty principle.** A matter wave spread over a region means the particle's position is not sharp. Heisenberg's principle says the uncertainties in position and momentum satisfy roughly $\Delta x\,\Delta p \approx \hbar$, where $\hbar = h/2\pi$. A wave of one exact wavelength (exact momentum) would be spread over all space; a localised particle is described by a **wave packet** that mixes many wavelengths.`,
          },
          {
            type: "mistake",
            wrong: "A de Broglie wave is a kind of electromagnetic wave given off by a moving electron.",
            right: "A matter wave is not electromagnetic. It is associated with any moving particle, charged or neutral (neutrons and whole atoms diffract too).",
            why: "Electrons are charged, so students link their waves to light. But a neutron has no charge and still shows a de Broglie wavelength; matter waves describe where a particle is likely to be found.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The derivation of $\\lambda = h/\\sqrt{2meV}$ is a standard 2–3 mark question. Show $K = eV$, then $p = \\sqrt{2mK}$, then substitute. When comparing particles, write the proportionality first ($\\lambda \\propto 1/\\sqrt{mqV}$) and then take ratios.",
          },
          {
            type: "keypoints",
            items: [
              t`Every moving particle has a de Broglie wavelength $\lambda = h/p$.`,
              t`$\lambda = h/\sqrt{2mK} = h/\sqrt{2mqV}$; for electrons $\lambda = 1.227/\sqrt{V}$ nm.`,
              "Matter waves matter only when λ is comparable to the size of slits or atomic spacings, so they show up for electrons, not cricket balls.",
              "Electron diffraction by crystals (1927) confirmed matter waves.",
            ],
          },
        ],
        flashcards: [
          { front: "de Broglie relation", back: "λ = h/p = h/(mv)." },
          { front: "de Broglie wavelength from kinetic energy", back: "λ = h/√(2mK)." },
          { front: "Wavelength of an electron accelerated through V volts", back: "λ = 1.227/√V nm." },
          { front: "Same kinetic energy: electron or proton has longer λ?", back: "The electron, since λ ∝ 1/√m." },
          { front: "Who first showed electron diffraction?", back: "Davisson and Germer (USA) and G. P. Thomson (UK), 1927." },
          { front: "Why can't we see a cricket ball diffract?", back: "Its de Broglie wavelength (about 10⁻³⁴ m) is far smaller than anything it could pass through." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "If the momentum of a particle is doubled, its de Broglie wavelength becomes:",
            options: ["double", "half", "four times", "one-fourth"],
            answer: 1,
            explain: "$\\lambda = h/p$, so doubling $p$ halves $\\lambda$.",
          },
          {
            kind: "mcq",
            q: "If the kinetic energy of an electron is made four times, its de Broglie wavelength becomes:",
            options: ["one-fourth", "one-half", "double", "unchanged"],
            answer: 1,
            explain: "$\\lambda \\propto 1/\\sqrt{K}$, so $\\lambda$ becomes $1/\\sqrt{4} = 1/2$ of its value.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Through what potential difference must an electron be accelerated from rest to have a de Broglie wavelength of 0.1 nm? Give the nearest whole volt.",
            answer: 150,
            tolerance: 2,
            unit: "V",
            explain: "$\\sqrt{V} = 1.227/0.1 = 12.27$, so $V = 150.6 \\approx 150$ V.",
            difficulty: 2,
            hint: "Rearrange λ = 1.227/√V.",
          },
          {
            kind: "truefalse",
            q: "A neutron, which has no charge, has no de Broglie wavelength.",
            answer: false,
            explain: "Every moving particle has $\\lambda = h/p$, charged or not. Neutron diffraction is used to study crystals.",
          },
          {
            kind: "fill",
            q: "Electron diffraction by a nickel crystal was first observed by Davisson and ___.",
            answer: ["Germer"],
            explain: "Davisson and Germer, 1927.",
          },
          {
            kind: "mcq",
            q: "A proton and an electron move with the same speed. Which has the larger de Broglie wavelength?",
            options: ["Proton", "Electron", "Equal", "Depends on direction of motion"],
            answer: 1,
            explain: "$\\lambda = h/(mv)$. Same $v$, smaller $m$ means larger $\\lambda$: the electron.",
          },
          {
            kind: "numeric",
            q: "A particle has momentum 6.63 × 10⁻²⁴ kg m/s. Find its de Broglie wavelength in nm. (h = 6.63 × 10⁻³⁴ J s)",
            answer: 0.1,
            tolerance: 0.001,
            unit: "nm",
            explain: "$\\lambda = h/p = 6.63 \\times 10^{-34} / 6.63 \\times 10^{-24} = 10^{-10}$ m $= 0.1$ nm.",
          },
        ],
      },
      {
        slug: "c12-dual-nature-exam-edge",
        title: "Exam edge: Dual Nature of Radiation and Matter",
        summary: "What JEE, NEET, KCET and COMEDK ask from photons and matter waves, the shortcuts worth knowing, worked problems up to JEE Advanced level, and the classic traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What usually appears"],
            rows: [
              ["KCET / COMEDK", "direct use of Einstein's equation, threshold wavelength, de Broglie wavelength of an electron through V volts, graph reading"],
              ["NEET", "1–2 questions: stopping potential, comparison of λ for particles, photon momentum and number of photons, V₀–ν graphs"],
              ["JEE Main", "two-wavelength problems for φ, ratios of λ for p, α, e through the same V, radiation force, combined photon–electron problems"],
              ["JEE Advanced", "multi-step problems: photoelectrons then entering fields or de Broglie analysis, radiation pressure with partial reflection, graph interpretation (multi-correct)"],
            ],
          },
          {
            type: "heading",
            text: "Results worth remembering",
          },
          {
            type: "formula",
            tex: t`E\,(\text{eV}) = \frac{1240}{\lambda\,(\text{nm})}, \qquad \lambda_e = \frac{1.227}{\sqrt{V}}\ \text{nm}, \qquad \lambda_p = \frac{0.0286}{\sqrt{V}}\ \text{nm}`,
            caption: "Electron and proton accelerated from rest through V volts (non-relativistic).",
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcuts are safe",
            md: t`- $1240/\lambda$ needs $\lambda$ in nm and gives eV; for Å use 12400.
- $1.227/\sqrt{V}$ is only for **electrons** and only when the speed is well below $c$ (up to a few tens of kV).
- For particles of different mass and charge through the same $V$: $\lambda \propto 1/\sqrt{mq}$.
- Radiation force at normal incidence: $F = P/c$ if fully absorbed, $2P/c$ if fully reflected, $(1 + r)P/c$ if a fraction $r$ is reflected and the rest absorbed.`,
          },
          {
            type: "example",
            title: "KCET level: threshold and stopping potential",
            problem: t`The threshold wavelength of a metal is 300 nm. Find the stopping potential when light of 200 nm falls on it.`,
            steps: [
              t`$\phi_0 = 1240/300 = 4.13$ eV.`,
              t`Photon energy $= 1240/200 = 6.20$ eV.`,
              t`$K_{max} = 6.20 - 4.13 = 2.07$ eV, so $V_0 = 2.07$ V.`,
            ],
            answer: t`$V_0 \approx 2.07$ V.`,
          },
          {
            type: "example",
            title: "JEE Main level: two wavelengths",
            problem: t`Light of wavelength $\lambda$ gives a stopping potential of 3.0 V on a metal. Light of wavelength $2\lambda$ gives 1.0 V. Find the work function, $\lambda$, and the threshold wavelength.`,
            steps: [
              t`Let $E = hc/\lambda$ in eV. Then $E - \phi_0 = 3.0$ and $\dfrac{E}{2} - \phi_0 = 1.0$.`,
              t`Subtract: $\dfrac{E}{2} = 2.0$, so $E = 4.0$ eV and $\phi_0 = 1.0$ eV.`,
              t`$\lambda = 1240/4.0 = 310$ nm.`,
              t`$\lambda_0 = 1240/1.0 = 1240$ nm $= 4\lambda$.`,
            ],
            answer: t`$\phi_0 = 1.0$ eV, $\lambda = 310$ nm, $\lambda_0 = 1240$ nm.`,
          },
          {
            type: "example",
            title: "NEET level: photon and electron with the same wavelength",
            problem: t`A photon and an electron each have a wavelength of 1.0 nm. Compare their energies. ($h = 6.63 \times 10^{-34}$ J s, $m_e = 9.1 \times 10^{-31}$ kg)`,
            steps: [
              t`Photon: $E = 1240/1.0 = 1240$ eV.`,
              t`Electron: $p = h/\lambda = 6.63 \times 10^{-25}$ kg m/s, so $K = \dfrac{p^2}{2m} = \dfrac{(6.63 \times 10^{-25})^2}{2 \times 9.1 \times 10^{-31}} = 2.42 \times 10^{-19}$ J $\approx 1.5$ eV.`,
              t`Ratio $E_{photon}/K_e \approx 1240/1.5 \approx 8 \times 10^2$.`,
            ],
            answer: "The photon carries about 800 times more energy than the electron of the same wavelength.",
          },
          {
            type: "example",
            title: "JEE Advanced level: force from a partly reflecting mirror",
            problem: t`A 3.0 W beam of light of wavelength 600 nm falls normally on a surface that reflects 60% of the light and absorbs the rest. Find the force on the surface and the number of photons striking it per second. ($h = 6.63 \times 10^{-34}$ J s, $c = 3 \times 10^8$ m/s)`,
            steps: [
              t`Momentum delivered per second by the incident beam $= P/c$. Absorbed part gives $0.4\,P/c$; reflected part gives $2 \times 0.6\,P/c = 1.2\,P/c$.`,
              t`$F = 1.6\,P/c = 1.6 \times 3.0 / (3 \times 10^8) = 1.6 \times 10^{-8}$ N.`,
              t`Photon energy $= hc/\lambda = 6.63 \times 10^{-34} \times 3 \times 10^8 / 600 \times 10^{-9} = 3.32 \times 10^{-19}$ J.`,
              t`Photons per second $= 3.0 / 3.32 \times 10^{-19} \approx 9.0 \times 10^{18}$.`,
            ],
            answer: t`$F = 1.6 \times 10^{-8}$ N; about $9.0 \times 10^{18}$ photons per second.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: from photon to matter wave",
            problem: t`Light of wavelength 200 nm falls on a metal of work function 4.2 eV. Find the smallest de Broglie wavelength of the emitted electrons.`,
            steps: [
              t`Photon energy $= 1240/200 = 6.2$ eV, so $K_{max} = 6.2 - 4.2 = 2.0$ eV.`,
              t`The fastest electron has the largest momentum, hence the smallest $\lambda$.`,
              t`An electron with $K = 2.0$ eV has the same $\lambda$ as one accelerated through 2.0 V: $\lambda = 1.227/\sqrt{2.0} \approx 0.868$ nm.`,
            ],
            answer: t`$\lambda_{min} \approx 0.87$ nm.`,
          },
          {
            type: "mistake",
            wrong: "For a photon of energy E, the wavelength is λ = h/√(2mE), just like an electron.",
            right: "For a photon, λ = hc/E (since p = E/c). The formula h/√(2mK) is only for a massive, slow particle.",
            why: "Both are written as λ = h/p, so students reuse the electron formula. A photon has no rest mass and its momentum is E/c, not √(2mE).",
          },
          {
            type: "mistake",
            wrong: "If the frequency of light is doubled, the maximum kinetic energy of the photoelectrons doubles.",
            right: "Kmax = hν − φ₀, so doubling ν gives 2hν − φ₀, which is **more** than double the old Kmax.",
            why: "Kmax is linear in ν but not proportional to it, because of the −φ₀ term. For example, 6 eV photons on a 4 eV metal give 2 eV; 12 eV photons give 8 eV, four times as much.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each graph feature to what it gives.",
              pairs: [
                ["Slope of V₀ against ν", "h/e"],
                ["Intercept of V₀–ν line on the ν-axis", "Threshold frequency ν₀"],
                ["Intercept of Kmax–ν line on the energy axis (extended)", "−φ₀"],
                ["Slope of λ against 1/√V for electrons", "h/√(2me)"],
              ],
              explain: "Write the equation in the form y = mx + c for the quantities on the axes; the slope and intercepts can then be read off directly.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A proton and an α-particle are accelerated from rest through the same potential difference. Find λ(proton)/λ(α). (Take mα = 4mp, qα = 2qp.)",
                answer: 2.83,
                tolerance: 0.03,
                explain: "$\\lambda \\propto 1/\\sqrt{mq}$, so $\\lambda_p/\\lambda_\\alpha = \\sqrt{(4m)(2q)/(mq)} = \\sqrt{8} \\approx 2.83$.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`Use $E = 1240/\lambda$ (eV, nm) and $\lambda_e = 1.227/\sqrt{V}$ nm to save time.`,
              t`$K_{max}$ is linear in $\nu$ but not proportional to it.`,
              t`Same $K$: $\lambda \propto 1/\sqrt{m}$. Same $V$: $\lambda \propto 1/\sqrt{mq}$.`,
              t`Radiation force: $P/c$ absorbed, $2P/c$ reflected, $(1+r)P/c$ in between.`,
              t`Photon: $\lambda = hc/E$; massive particle: $\lambda = h/\sqrt{2mK}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Radiation force on a perfect absorber (normal incidence)", back: "F = P/c." },
          { front: "Radiation force on a perfect reflector (normal incidence)", back: "F = 2P/c." },
          { front: "λ of a proton accelerated through V volts", back: "About 0.0286/√V nm." },
          { front: "Ratio λp/λα through the same V", back: "√8 ≈ 2.83." },
          { front: "Wavelength of a photon of energy E", back: "λ = hc/E; in nm, 1240/E(eV)." },
          { front: "Doubling ν: does Kmax double?", back: "No. It becomes 2hν − φ₀, more than double." },
          { front: "Smallest de Broglie λ among photoelectrons", back: "Belongs to the fastest electron: λ = h/√(2m·Kmax)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Photons of 6 eV eject electrons with maximum kinetic energy 2 eV from a metal. If photons of 12 eV are used instead, the maximum kinetic energy becomes:",
            options: ["4 eV", "6 eV", "8 eV", "12 eV"],
            answer: 2,
            explain: "$\\phi_0 = 6 - 2 = 4$ eV; new $K_{max} = 12 - 4 = 8$ eV.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 10 W beam falls normally on a perfectly reflecting mirror. Find the force on the mirror in units of 10⁻⁸ N. (c = 3 × 10⁸ m/s)",
            answer: 6.67,
            tolerance: 0.05,
            unit: "× 10⁻⁸ N",
            explain: "$F = 2P/c = 20/(3 \\times 10^8) = 6.67 \\times 10^{-8}$ N.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "An electron, a proton and an α-particle have the same kinetic energy. Arrange their de Broglie wavelengths.",
            options: ["λe > λp > λα", "λα > λp > λe", "λp > λe > λα", "all equal"],
            answer: 0,
            explain: "Same $K$: $\\lambda \\propto 1/\\sqrt{m}$. Masses increase e < p < α, so wavelengths decrease in that order.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Light of wavelength λ gives a stopping potential of 4.0 V from a metal, and light of wavelength 2λ gives 1.5 V. Find the work function in eV.",
            answer: 1,
            tolerance: 0.02,
            unit: "eV",
            explain: "$E - \\phi = 4.0$, $E/2 - \\phi = 1.5$. Subtracting, $E/2 = 2.5$, $E = 5.0$ eV, so $\\phi = 1.0$ eV.",
            difficulty: 2,
            hint: "Write two Einstein equations with E and E/2.",
          },
          {
            kind: "multi",
            q: "In a photoelectric experiment the frequency of light is kept fixed and the intensity is doubled. Which statements are correct?",
            options: [
              "Saturation current doubles",
              "Stopping potential doubles",
              "Maximum kinetic energy is unchanged",
              "Threshold frequency is halved",
            ],
            answers: [0, 2],
            explain: "Intensity doubles the photon flux, so the saturation current doubles. $V_0$, $K_{max}$ and $\\nu_0$ do not depend on intensity.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Light of wavelength 248 nm falls on a metal of work function 3.0 eV. The fastest photoelectrons then move into a region against a retarding field. What retarding potential in volts just stops them? (hc = 1240 eV nm)",
            answer: 2,
            tolerance: 0.02,
            unit: "V",
            explain: "$E = 1240/248 = 5.0$ eV; $K_{max} = 2.0$ eV, so a retarding potential of 2.0 V stops them.",
          },
          {
            kind: "numeric",
            q: "Photoelectrons are emitted with maximum kinetic energy 1.5 eV. What is the smallest de Broglie wavelength among them, in nm? (λ = 1.227/√V nm)",
            answer: 1.0,
            tolerance: 0.01,
            unit: "nm",
            explain: "$K = 1.5$ eV is equivalent to $V = 1.5$ V; $\\lambda = 1.227/\\sqrt{1.5} = 1.227/1.2247 \\approx 1.00$ nm.",
            difficulty: 3,
            hint: "An electron with K electron volts behaves like one accelerated through K volts.",
          },
          {
            kind: "multi",
            q: "A metal surface is lit with light of a single wavelength and gives photoelectrons. Which changes would increase the stopping potential?",
            options: [
              "Using light of shorter wavelength",
              "Using a metal of smaller work function",
              "Increasing the intensity",
              "Moving the light source closer",
            ],
            answers: [0, 1],
            explain: "$eV_0 = hc/\\lambda - \\phi_0$. A shorter $\\lambda$ or smaller $\\phi_0$ raises $V_0$. Intensity and distance change only the number of photons.",
            difficulty: 3,
            hint: "Look at the two terms in Einstein's equation.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Atoms (NCERT, Karnataka PUC); first half of ISC "Atoms and Nuclei"  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-atoms",
    title: "Atoms",
    icon: "⚛️",
    description: "Alpha-particle scattering and Rutherford's nuclear model, atomic spectra, the Bohr model of hydrogen and the spectral series.",
    lessons: [
      {
        slug: "c12-rutherford-model",
        title: "Alpha Scattering and Rutherford's Nuclear Model",
        summary: "Thomson's model, the Geiger–Marsden experiment, what it revealed about the nucleus, impact parameter, distance of closest approach, and why Rutherford's atom should not be stable.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎯",
            caption: "Fire bullets at a cloud of cotton and they pass straight through. If one bounces straight back, there must be something small and very hard hidden inside.",
          },
          {
            type: "text",
            md: t`Atoms are electrically neutral but contain negatively charged electrons, so they must also contain positive charge. In 1898 J. J. Thomson suggested the **plum pudding model**: positive charge spread evenly through a sphere, with electrons embedded in it like seeds in a watermelon. This model predicts that fast α-particles passing through a thin metal foil should be deflected only very slightly.`,
          },
          {
            type: "text",
            md: t`**The Geiger–Marsden experiment (1911).** Working under Ernest Rutherford, H. Geiger and E. Marsden directed a narrow beam of 5.5 MeV α-particles (from a radioactive source, $^{214}_{83}$Bi) at a gold foil about $2.1 \times 10^{-7}$ m thick. A rotatable detector with a zinc sulphide screen and microscope counted the flashes made by scattered α-particles at different angles $\theta$.`,
          },
          {
            type: "list",
            items: [
              "Most α-particles went straight through or were deflected by very small angles.",
              "Only about 0.14% were scattered by more than 1°.",
              "About 1 in 8000 was deflected by more than 90°; a few bounced almost straight back.",
            ],
          },
          {
            type: "text",
            md: t`**Rutherford's conclusions.** To turn back a heavy, fast α-particle the positive charge must be packed into a tiny region, the **nucleus**. The nucleus holds almost all the mass of the atom and all its positive charge $Ze$. Its size is about $10^{-15}$ to $10^{-14}$ m, while the atom is about $10^{-10}$ m across, so the atom is mostly empty space. The electrons move around the nucleus in orbits; the Coulomb attraction provides the centripetal force.`,
          },
          {
            type: "heading",
            text: "Impact parameter and distance of closest approach",
          },
          {
            type: "text",
            md: t`The **impact parameter** $b$ is the perpendicular distance of the initial velocity of the α-particle from the centre of the nucleus. A small $b$ means the particle passes close to the nucleus and is scattered through a large angle; $b = 0$ is a head-on approach and the particle rebounds ($\theta = 180°$). Because most particles have a large $b$, most are hardly deflected.

In a head-on approach the α-particle slows down, stops for an instant at the **distance of closest approach** $d$, and turns back. All its kinetic energy has then become electric potential energy.`,
          },
          {
            type: "formula",
            tex: t`K = \frac{1}{4\pi\varepsilon_0}\,\frac{(2e)(Ze)}{d} \quad\Rightarrow\quad d = \frac{1}{4\pi\varepsilon_0}\,\frac{2Ze^2}{K}`,
            caption: "The nuclear radius must be smaller than d, so d gives an upper limit on the size of the nucleus.",
          },
          {
            type: "example",
            title: "How close does the α-particle get?",
            problem: t`A 5.5 MeV α-particle moves head-on towards a gold nucleus ($Z = 79$). Find the distance of closest approach. (Use $\dfrac{e^2}{4\pi\varepsilon_0} = 1.44$ MeV fm, where 1 fm $= 10^{-15}$ m.)`,
            steps: [
              t`$d = \dfrac{2Z}{K} \times \dfrac{e^2}{4\pi\varepsilon_0} = \dfrac{2 \times 79 \times 1.44\ \text{MeV fm}}{5.5\ \text{MeV}}$.`,
              t`Numerator: $2 \times 79 \times 1.44 = 227.5$ MeV fm.`,
              t`$d = 227.5 / 5.5 \approx 41$ fm $= 4.1 \times 10^{-14}$ m.`,
            ],
            answer: t`About $4.1 \times 10^{-14}$ m, so the gold nucleus is smaller than this.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "The impact parameter of an α-particle is made smaller. Its scattering angle will…",
              emoji: "↩️",
              options: ["decrease", "increase", "stay the same"],
              answer: 1,
              trap: 0,
              explain: "Smaller $b$ means the particle passes closer to the nucleus, feels a much stronger repulsion, and is turned through a larger angle. At $b = 0$ it comes straight back.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The kinetic energy of the α-particles is doubled. The distance of closest approach to a given nucleus becomes:",
                options: ["double", "half", "four times", "one-fourth"],
                answer: 1,
                explain: "$d \\propto 1/K$, so doubling $K$ halves $d$.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Electron orbits in Rutherford's model (hydrogen).** For an electron in a circular orbit of radius $r$, $\dfrac{mv^2}{r} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2}$. So the kinetic energy is $K = \dfrac{e^2}{8\pi\varepsilon_0 r}$, the potential energy is $U = -\dfrac{e^2}{4\pi\varepsilon_0 r}$, and the total energy is negative: the electron is bound.`,
          },
          {
            type: "formula",
            tex: t`E = K + U = -\frac{e^2}{8\pi\varepsilon_0 r}`,
            caption: "For r = 0.53 × 10⁻¹⁰ m this gives E ≈ −13.6 eV, the measured energy needed to ionise hydrogen.",
          },
          {
            type: "mistake",
            wrong: "The large deflections happened because α-particles hit the electrons in the gold atoms.",
            right: "Electrons are about 7300 times lighter than an α-particle, so they cannot turn it back. Large deflections need a heavy, concentrated positive charge: the nucleus.",
            why: "Electrons are the parts of the atom students hear about most. But a light object cannot reverse a heavy one, just as a table-tennis ball cannot stop a cricket ball.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Two drawbacks of Rutherford's model are often asked. (1) **Stability:** an orbiting electron accelerates, so by classical electromagnetism it should radiate energy and spiral into the nucleus. (2) **Spectra:** the spiralling electron would emit a continuous range of frequencies, but atoms emit sharp lines. Write both for full marks.",
          },
          {
            type: "keypoints",
            items: [
              "Most α-particles pass through the foil; about 1 in 8000 is deflected beyond 90°.",
              t`The nucleus is tiny ($10^{-15}$–$10^{-14}$ m), carries all the positive charge and nearly all the mass.`,
              t`Smaller impact parameter → larger scattering angle; $b = 0$ gives rebound.`,
              t`Distance of closest approach $d = \dfrac{1}{4\pi\varepsilon_0}\dfrac{2Ze^2}{K}$.`,
              "Rutherford's model cannot explain atomic stability or line spectra.",
            ],
          },
        ],
        flashcards: [
          { front: "Thomson's model of the atom", back: "Positive charge spread uniformly in a sphere with electrons embedded in it (plum pudding / watermelon model)." },
          { front: "Source and target in the Geiger–Marsden experiment", back: "5.5 MeV α-particles from bismuth-214, fired at a gold foil about 2.1 × 10⁻⁷ m thick." },
          { front: "Fraction of α-particles deflected by more than 90°", back: "About 1 in 8000." },
          { front: "Impact parameter", back: "Perpendicular distance of the initial velocity of the α-particle from the centre of the nucleus." },
          { front: "Distance of closest approach", back: "d = (1/4πε₀)(2Ze²/K), the point where a head-on α-particle momentarily stops." },
          { front: "Size of a nucleus vs size of an atom", back: "Nucleus about 10⁻¹⁵–10⁻¹⁴ m; atom about 10⁻¹⁰ m." },
          { front: "Total energy of an electron in a circular orbit of radius r (hydrogen)", back: "E = −e²/(8πε₀r): negative, meaning the electron is bound." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Most α-particles passed straight through the gold foil. This showed that:",
            options: [
              "the atom is mostly empty space",
              "the nucleus is negatively charged",
              "electrons are heavy",
              "gold has no nucleus",
            ],
            answer: 0,
            explain: "If most particles meet nothing that deflects them, most of the atom's volume is empty.",
          },
          {
            kind: "mcq",
            q: "An α-particle approaches a nucleus with impact parameter zero. Its scattering angle is:",
            options: ["0°", "45°", "90°", "180°"],
            answer: 3,
            explain: "A head-on approach brings the particle to rest and sends it straight back.",
          },
          {
            kind: "numeric",
            q: "A 7.9 MeV α-particle approaches a nucleus of Z = 79 head-on. Find the distance of closest approach in fm. (e²/4πε₀ = 1.44 MeV fm)",
            answer: 28.8,
            tolerance: 0.3,
            unit: "fm",
            explain: "$d = 2 \\times 79 \\times 1.44 / 7.9 = 227.52 / 7.9 \\approx 28.8$ fm.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "According to classical electromagnetism, an electron revolving round a nucleus should radiate energy and spiral inwards.",
            answer: true,
            explain: "An accelerating charge radiates. This is the stability problem of Rutherford's model.",
          },
          {
            kind: "fill",
            q: "The perpendicular distance of the initial velocity of an α-particle from the centre of the nucleus is called the ___ parameter.",
            answer: ["impact"],
            explain: "This is the impact parameter $b$.",
          },
          {
            kind: "mcq",
            q: "For an electron in a hydrogen orbit, the ratio of kinetic energy to potential energy is:",
            options: ["1 : 1", "1 : −1", "1 : −2", "2 : −1"],
            answer: 2,
            explain: "$K = e^2/8\\pi\\varepsilon_0 r$ and $U = -e^2/4\\pi\\varepsilon_0 r$, so $K : U = 1 : -2$.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which conclusions follow from the α-scattering experiment?",
            options: [
              "Positive charge is concentrated in a small nucleus",
              "Nearly all the mass is in the nucleus",
              "Electrons move in fixed orbits with quantised energy",
              "The nucleus is much smaller than the atom",
            ],
            answers: [0, 1, 3],
            explain: "Quantised orbits came later from Bohr; the scattering experiment says nothing about electron energy levels.",
            difficulty: 2,
            hint: "Which statement belongs to Bohr, not Rutherford?",
          },
        ],
      },
      {
        slug: "c12-bohr-model-spectra",
        title: "Bohr Model and the Hydrogen Spectrum",
        summary: "Line spectra and the Rydberg formula, Bohr's three postulates, radius, speed and energy of the nth orbit, energy-level diagrams, spectral series, and de Broglie's explanation of quantisation.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: t`Heat a gas such as hydrogen in a discharge tube and look at its light through a prism: you see a few bright, sharp lines instead of a rainbow. This is an **emission line spectrum**. Pass white light through cool hydrogen and dark lines appear at the same wavelengths: an **absorption spectrum**. Every element has its own set of lines, so spectra work like fingerprints of atoms. In 1885 J. J. Balmer found a simple formula for the visible hydrogen lines; it was later extended to all the hydrogen series.`,
          },
          {
            type: "formula",
            tex: t`\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right), \qquad n_2 = n_1 + 1,\ n_1 + 2, \ldots, \qquad R = 1.097 \times 10^{7}\ \text{m}^{-1}`,
            caption: "Rydberg formula for hydrogen; R is the Rydberg constant.",
          },
          {
            type: "table",
            headers: ["Series", "Lower level n₁", "Region", "Wavelength range"],
            rows: [
              ["Lyman", "1", "ultraviolet", "91.2 nm to 121.6 nm"],
              ["Balmer", "2", "visible (limit in near UV)", "364.6 nm to 656.3 nm"],
              ["Paschen", "3", "infrared", "820.4 nm to 1875 nm"],
              ["Brackett", "4", "infrared", "from 1458 nm"],
              ["Pfund", "5", "infrared", "from 2279 nm"],
            ],
          },
          {
            type: "heading",
            text: "Bohr's postulates (1913)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "An electron revolves round the nucleus in certain **stationary orbits** without radiating energy.",
              t`Only those orbits are allowed in which the angular momentum is a whole-number multiple of $h/2\pi$: $mvr = \dfrac{nh}{2\pi}$, $n = 1, 2, 3, \ldots$ ($n$ is the **principal quantum number**).`,
              t`An electron can jump from an orbit of energy $E_i$ to one of lower energy $E_f$ by emitting a photon of frequency $\nu$ given by $h\nu = E_i - E_f$. Absorbing a photon of the right energy moves it up.`,
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Centripetal force from Coulomb attraction: $\dfrac{mv_n^2}{r_n} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r_n^2}$, so $mv_n^2 r_n = \dfrac{e^2}{4\pi\varepsilon_0}$.`,
              t`Quantisation: $mv_n r_n = \dfrac{nh}{2\pi}$. Dividing the first result by this gives $v_n = \dfrac{e^2}{2\varepsilon_0 n h}$.`,
              t`Substituting back: $r_n = \dfrac{n h}{2\pi m v_n} = \dfrac{\varepsilon_0 n^2 h^2}{\pi m e^2}$.`,
              t`Energy: $E_n = -\dfrac{e^2}{8\pi\varepsilon_0 r_n} = -\dfrac{m e^4}{8\varepsilon_0^2 h^2 n^2}$.`,
              t`Photon emitted from $n_2 \to n_1$: $\dfrac{1}{\lambda} = \dfrac{E_{n_2} - E_{n_1}}{hc} = \dfrac{me^4}{8\varepsilon_0^2 h^3 c}\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$, which is Rydberg's formula with $R = \dfrac{me^4}{8\varepsilon_0^2 h^3 c}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`r_n = 0.53\,n^2\ \text{Å}, \qquad v_n = \frac{2.18 \times 10^6}{n}\ \text{m/s}, \qquad E_n = -\frac{13.6}{n^2}\ \text{eV}`,
            caption: "Hydrogen. r₁ = 0.53 Å is the Bohr radius a₀.",
          },
          {
            type: "text",
            md: t`**Energy levels.** The lowest level $n = 1$ ($-13.6$ eV) is the **ground state**; higher levels are **excited states**: $-3.40$ eV ($n=2$), $-1.51$ eV ($n=3$), $-0.85$ eV ($n=4$), approaching 0 as $n \to \infty$. The energy needed to remove the electron from the ground state, 13.6 eV, is the **ionisation energy** of hydrogen. The energy to lift it from $n = 1$ to $n = 2$, 10.2 eV, is the first **excitation energy**.`,
          },
          {
            type: "example",
            title: "The red line of hydrogen",
            problem: t`Find the energy and wavelength of the photon emitted when the electron in a hydrogen atom drops from $n = 3$ to $n = 2$. Which series does the line belong to? ($hc = 1240$ eV nm)`,
            steps: [
              t`$E_3 = -13.6/9 = -1.51$ eV and $E_2 = -13.6/4 = -3.40$ eV.`,
              t`Photon energy $= E_3 - E_2 = 13.6\left(\tfrac{1}{4} - \tfrac{1}{9}\right) = 13.6 \times \tfrac{5}{36} \approx 1.89$ eV.`,
              t`$\lambda = 1240 / 1.89 \approx 656$ nm.`,
              "The lower level is n = 2, so this is the first (longest-wavelength) line of the Balmer series, called Hα, which is red.",
            ],
            answer: "About 1.89 eV and 656 nm: the Hα line of the Balmer series.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each transition to its series.",
              pairs: [
                ["n = 2 → n = 1", "Lyman (ultraviolet)"],
                ["n = 4 → n = 2", "Balmer (visible)"],
                ["n = 5 → n = 3", "Paschen (infrared)"],
                ["n = 6 → n = 4", "Brackett (infrared)"],
              ],
              explain: "The series is named by the **lower** level the electron lands on: 1 Lyman, 2 Balmer, 3 Paschen, 4 Brackett, 5 Pfund.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the radius of the n = 3 orbit of hydrogen in Å? (r₁ = 0.53 Å)",
                answer: 4.77,
                tolerance: 0.03,
                unit: "Å",
                explain: "$r_n = 0.53\\,n^2 = 0.53 \\times 9 = 4.77$ Å.",
              },
              {
                kind: "mcq",
                q: "The ionisation energy of a hydrogen atom in its ground state is:",
                options: ["10.2 eV", "13.6 eV", "3.4 eV", "27.2 eV"],
                answer: 1,
                explain: "The electron must go from $-13.6$ eV to 0, so 13.6 eV is needed. 10.2 eV only excites it to $n = 2$.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "An electron in a higher orbit has more energy, so it also moves faster.",
            right: "In a higher orbit the total energy is higher (less negative), but the speed and kinetic energy are **lower**: $v_n \\propto 1/n$ and $K = -E$.",
            why: "\"More energy\" sounds like \"more motion\". But the potential energy rises by twice as much as the kinetic energy falls, so the total goes up while the electron slows down.",
          },
          {
            type: "text",
            md: t`**De Broglie's explanation of the second postulate.** If the electron is a wave, a stable orbit must hold a whole number of wavelengths, forming a standing wave around the circumference: $2\pi r_n = n\lambda$. With $\lambda = h/mv_n$ this gives $mv_n r_n = nh/2\pi$, which is exactly Bohr's quantisation rule.

**Limits of the Bohr model.** It works for hydrogen and hydrogen-like ions (He⁺, Li²⁺) with one electron. It cannot explain spectra of atoms with many electrons, the relative intensities of spectral lines, or the fine splitting of lines.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The derivation of $r_n$ and $E_n$ is a favourite 5-mark question. Start from the two equations (force balance and $mvr = nh/2\\pi$), derive $v_n$ and $r_n$, then $E_n$, and finish with numerical values. Draw a labelled energy-level diagram with arrows for the Lyman, Balmer and Paschen series. *ISC/Karnataka note:* both boards also ask for the Rydberg constant expression and the series names with regions.",
          },
          {
            type: "keypoints",
            items: [
              t`Bohr: stationary orbits, $mvr = nh/2\pi$, and $h\nu = E_i - E_f$.`,
              t`Hydrogen: $r_n = 0.53n^2$ Å, $v_n = 2.18 \times 10^6/n$ m/s, $E_n = -13.6/n^2$ eV.`,
              t`Rydberg formula $1/\lambda = R(1/n_1^2 - 1/n_2^2)$ with $R = 1.097 \times 10^7$ m⁻¹.`,
              "Series by lower level: Lyman (1, UV), Balmer (2, visible), Paschen (3), Brackett (4), Pfund (5) (IR).",
              t`Standing waves on the orbit ($2\pi r = n\lambda$) explain Bohr's quantisation.`,
            ],
          },
        ],
        flashcards: [
          { front: "Bohr's quantisation condition", back: "mvr = nh/2π, with n = 1, 2, 3, …" },
          { front: "Radius of the nth Bohr orbit (hydrogen)", back: "rₙ = ε₀n²h²/(πme²) = 0.53 n² Å." },
          { front: "Energy of the nth level of hydrogen", back: "Eₙ = −13.6/n² eV." },
          { front: "Ionisation energy of hydrogen", back: "13.6 eV." },
          { front: "Series in the visible region", back: "Balmer series (transitions ending on n = 2)." },
          { front: "Rydberg constant from Bohr's theory", back: "R = me⁴/(8ε₀²h³c) ≈ 1.097 × 10⁷ m⁻¹." },
          { front: "de Broglie's explanation of stationary orbits", back: "The orbit holds a whole number of wavelengths: 2πr = nλ." },
          { front: "Wavelength of the Hα line", back: "About 656 nm (n = 3 → 2), red." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which series of hydrogen lies in the ultraviolet region?",
            options: ["Balmer", "Lyman", "Paschen", "Pfund"],
            answer: 1,
            explain: "Lyman lines end on $n = 1$ and have the largest energy gaps, so they are in the UV.",
          },
          {
            kind: "numeric",
            q: "What is the energy of the electron in the n = 4 level of hydrogen, in eV?",
            answer: -0.85,
            tolerance: 0.01,
            unit: "eV",
            explain: "$E_4 = -13.6/16 = -0.85$ eV.",
          },
          {
            kind: "mcq",
            q: "The speed of the electron in the first Bohr orbit of hydrogen is v. In the third orbit it is:",
            options: ["3v", "v/3", "9v", "v/9"],
            answer: 1,
            explain: "$v_n \\propto 1/n$, so $v_3 = v/3$.",
          },
          {
            kind: "numeric",
            q: "Use the Rydberg formula to find the shortest wavelength of the Balmer series, in nm. (R = 1.097 × 10⁷ m⁻¹)",
            answer: 364.6,
            tolerance: 1,
            unit: "nm",
            explain: "Shortest wavelength: $n_2 \\to \\infty$, so $1/\\lambda = R/4$ and $\\lambda = 4/R = 4/1.097 \\times 10^7 = 3.646 \\times 10^{-7}$ m $= 364.6$ nm.",
            difficulty: 2,
            hint: "The series limit has n₂ = ∞.",
          },
          {
            kind: "truefalse",
            q: "The Bohr model correctly explains the spectrum of the helium atom with two electrons.",
            answer: false,
            explain: "It works only for one-electron systems such as H, He⁺ and Li²⁺.",
          },
          {
            kind: "mcq",
            q: "When an electron in hydrogen moves from n = 1 to n = 2, its kinetic energy:",
            options: ["increases", "decreases", "stays the same", "becomes zero"],
            answer: 1,
            explain: "$K = -E_n = 13.6/n^2$ eV falls from 13.6 eV to 3.4 eV.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "What is the wavelength (in nm) of the photon emitted when the electron in hydrogen falls from n = 4 to n = 2? (hc = 1240 eV nm)",
            answer: 486,
            tolerance: 2,
            unit: "nm",
            explain: "$\\Delta E = 13.6(1/4 - 1/16) = 13.6 \\times 3/16 = 2.55$ eV; $\\lambda = 1240/2.55 \\approx 486$ nm (Hβ, blue-green).",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The energy needed to remove the electron completely from an atom in its ground state is called the ___ energy.",
            answer: ["ionisation", "ionization"],
            explain: "For hydrogen it is 13.6 eV.",
          },
        ],
      },
      {
        slug: "c12-atoms-exam-edge",
        title: "Exam edge: Atoms",
        summary: "Hydrogen-like ions, scaling rules with n and Z, counting spectral lines, wavelength ratios, photon recoil and Bohr-plus-photoelectric problems at JEE and NEET level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What usually appears"],
            rows: [
              ["KCET / COMEDK", "energy of a level, ionisation and excitation energy, series identification, closest approach"],
              ["NEET", "ratios of r, v, E for different n and Z; wavelength ratios of series lines; number of spectral lines"],
              ["JEE Main", "hydrogen-like ions (He⁺, Li²⁺), series limits, angular momentum, frequency of revolution, Bohr combined with the photoelectric effect"],
              ["JEE Advanced", "multi-correct scaling questions, photon recoil, transitions in ions feeding other processes, closest approach with Coulomb energy"],
            ],
          },
          {
            type: "formula",
            tex: t`r_n = 0.53\,\frac{n^2}{Z}\ \text{Å}, \quad v_n = 2.18 \times 10^6\,\frac{Z}{n}\ \text{m/s}, \quad E_n = -13.6\,\frac{Z^2}{n^2}\ \text{eV}, \quad \frac{1}{\lambda} = RZ^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)`,
            caption: "Hydrogen-like ion of atomic number Z (one electron only).",
          },
          {
            type: "table",
            headers: ["Quantity", "Depends on n and Z as"],
            rows: [
              ["Radius rₙ", "n²/Z"],
              ["Speed vₙ", "Z/n"],
              ["Energy Eₙ, kinetic energy, potential energy", "Z²/n² (with K = −E, U = 2E)"],
              ["Angular momentum", "n (equal to nh/2π, independent of Z)"],
              ["Time period of revolution", "n³/Z²"],
              ["Frequency of revolution", "Z²/n³"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: t`**Lines from level n:** a *sample* of many atoms excited to level $n$ can give $\dfrac{n(n-1)}{2}$ different lines. A *single* atom can give at most $n - 1$ lines on its way down.

**Wavelength ratios:** cancel $R$ and $Z$; just compare $\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$.

These Z-scalings hold only for **one-electron** systems. Do not use them for neutral He or Li.`,
          },
          {
            type: "example",
            title: "KCET level: exciting hydrogen",
            problem: "Hydrogen atoms in the ground state are excited to n = 3. How much energy does each atom absorb, and how many different lines can the sample then emit?",
            steps: [
              t`Energy absorbed $= E_3 - E_1 = -1.51 - (-13.6) = 12.09$ eV.`,
              t`Number of lines $= \dfrac{3 \times 2}{2} = 3$: $3 \to 2$ (Balmer), $3 \to 1$ and $2 \to 1$ (Lyman).`,
            ],
            answer: "12.09 eV per atom; 3 different lines.",
          },
          {
            type: "example",
            title: "NEET level: the He⁺ ion",
            problem: t`For He⁺ ($Z = 2$), find (a) the ionisation energy from the ground state, (b) the energy of the $n = 2$ level, (c) the wavelength emitted in the $2 \to 1$ transition. ($hc = 1240$ eV nm)`,
            steps: [
              t`(a) $E_1 = -13.6 \times 4 = -54.4$ eV, so ionisation energy $= 54.4$ eV.`,
              t`(b) $E_2 = -13.6 \times 4/4 = -13.6$ eV, the same as the ground state of hydrogen.`,
              t`(c) Photon energy $= -13.6 - (-54.4) = 40.8$ eV; $\lambda = 1240/40.8 \approx 30.4$ nm (far ultraviolet).`,
            ],
            answer: "54.4 eV; −13.6 eV; about 30.4 nm.",
          },
          {
            type: "example",
            title: "JEE Main level: a wavelength ratio",
            problem: "Find the ratio of the longest wavelength of the Lyman series to the shortest wavelength of the Balmer series of hydrogen.",
            steps: [
              t`Longest Lyman ($2 \to 1$): $\dfrac{1}{\lambda_L} = R\left(1 - \dfrac{1}{4}\right) = \dfrac{3R}{4}$, so $\lambda_L = \dfrac{4}{3R}$.`,
              t`Shortest Balmer ($\infty \to 2$): $\dfrac{1}{\lambda_B} = \dfrac{R}{4}$, so $\lambda_B = \dfrac{4}{R}$.`,
              t`Ratio $\dfrac{\lambda_L}{\lambda_B} = \dfrac{4/3R}{4/R} = \dfrac{1}{3}$.`,
            ],
            answer: "1 : 3.",
          },
          {
            type: "example",
            title: "JEE Advanced level: ion photons on a metal",
            problem: t`Photons emitted in the $2 \to 1$ transition of He⁺ fall on a metal of work function 4.8 eV. Find the stopping potential and the shortest de Broglie wavelength of the photoelectrons. ($\lambda_e = 1.227/\sqrt{V}$ nm)`,
            steps: [
              t`Photon energy (from the previous example) $= 40.8$ eV.`,
              t`$K_{max} = 40.8 - 4.8 = 36.0$ eV, so $V_0 = 36.0$ V.`,
              t`$\lambda_{min} = 1.227/\sqrt{36} = 1.227/6 \approx 0.205$ nm.`,
            ],
            answer: "Stopping potential 36 V; shortest wavelength about 0.205 nm.",
          },
          {
            type: "example",
            title: "JEE Advanced level: recoil of the atom",
            problem: t`A hydrogen atom at rest emits a Lyman-α photon (10.2 eV). Find the recoil speed of the atom. (Mass of H atom $= 1.67 \times 10^{-27}$ kg, $c = 3 \times 10^8$ m/s, $1$ eV $= 1.6 \times 10^{-19}$ J)`,
            steps: [
              t`Photon momentum $p = E/c = \dfrac{10.2 \times 1.6 \times 10^{-19}}{3 \times 10^8} = 5.44 \times 10^{-27}$ kg m/s.`,
              "By momentum conservation, the atom gets an equal and opposite momentum.",
              t`$v = p/M = 5.44 \times 10^{-27} / 1.67 \times 10^{-27} \approx 3.3$ m/s.`,
              t`Recoil kinetic energy $= p^2/2M \approx 5.5 \times 10^{-8}$ eV, so ignoring recoil in the photon energy is completely safe.`,
            ],
            answer: "About 3.3 m/s.",
          },
          {
            type: "mistake",
            wrong: "A hydrogen atom excited to n = 4 emits 6 lines.",
            right: "A sample of many atoms excited to n = 4 can emit 6 different lines. One atom can emit at most 3 photons (4 → 3 → 2 → 1).",
            why: "The formula n(n−1)/2 counts all possible pairs of levels. A single atom follows only one path down, so it cannot produce every pair.",
          },
          {
            type: "mistake",
            wrong: "The ionisation energy of He⁺ is 2 × 13.6 = 27.2 eV, because Z = 2.",
            right: "Energy scales as Z², so the ionisation energy of He⁺ is 4 × 13.6 = 54.4 eV.",
            why: "Radius goes as 1/Z and speed as Z, so students multiply energy by Z too. Energy is the product of charge and potential, both of which bring a factor of Z.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "As n increases in a hydrogen atom, does each quantity increase or decrease?",
              groups: ["Increases", "Decreases"],
              items: [
                { text: "Orbit radius", group: 0, hint: "r ∝ n²." },
                { text: "Total energy", group: 0, hint: "−13.6/n² gets closer to zero, which is higher." },
                { text: "Potential energy", group: 0, hint: "U = 2E, also less negative." },
                { text: "Kinetic energy", group: 1, hint: "K = −E = 13.6/n²." },
                { text: "Orbital speed", group: 1, hint: "v ∝ 1/n." },
                { text: "Frequency of revolution", group: 1, hint: "f ∝ 1/n³." },
                { text: "Angular momentum", group: 0, hint: "L = nh/2π grows with n." },
              ],
              explain: "Moving outward, the electron slows down and its kinetic energy falls, but its potential energy rises twice as fast, so the total energy rises towards zero.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many different spectral lines can a sample of hydrogen atoms excited to n = 5 emit?",
                answer: 10,
                explain: "$n(n-1)/2 = 5 \\times 4/2 = 10$.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`Hydrogen-like ions: $r \propto n^2/Z$, $v \propto Z/n$, $E \propto Z^2/n^2$; $K = -E$, $U = 2E$.`,
              t`A sample excited to level $n$ can give $n(n-1)/2$ lines; a single atom at most $n - 1$.`,
              "For wavelength ratios, cancel R and Z and compare the bracket terms.",
              "Photon recoil is real but tiny; momentum p = E/c gives the recoil speed.",
            ],
          },
        ],
        flashcards: [
          { front: "Energy of level n in a hydrogen-like ion", back: "Eₙ = −13.6 Z²/n² eV." },
          { front: "Ionisation energy of Li²⁺", back: "13.6 × 9 = 122.4 eV." },
          { front: "Number of lines from a sample excited to level n", back: "n(n − 1)/2." },
          { front: "Relation between K, U and E for a Bohr orbit", back: "K = −E, U = 2E = −2K." },
          { front: "Frequency of revolution in Bohr orbit", back: "Proportional to Z²/n³." },
          { front: "Ratio of longest Lyman to shortest Balmer wavelength", back: "1 : 3." },
          { front: "Which level of He⁺ has the same energy as the ground state of H?", back: "n = 2 (−13.6 eV)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the ionisation energy of Li²⁺ (Z = 3) in its ground state, in eV?",
            answer: 122.4,
            tolerance: 0.2,
            unit: "eV",
            explain: "$13.6 \\times Z^2 = 13.6 \\times 9 = 122.4$ eV.",
          },
          {
            kind: "mcq",
            q: "The radius of the n = 2 orbit of He⁺ is (Bohr radius a₀ = 0.53 Å):",
            options: ["0.53 Å", "1.06 Å", "2.12 Å", "0.265 Å"],
            answer: 1,
            explain: "$r = 0.53 \\times n^2/Z = 0.53 \\times 4/2 = 1.06$ Å.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The total energy of an electron in a Bohr orbit is −3.4 eV. Its kinetic and potential energies are:",
            options: ["3.4 eV and −6.8 eV", "−3.4 eV and 0", "6.8 eV and −10.2 eV", "1.7 eV and −5.1 eV"],
            answer: 0,
            explain: "$K = -E = 3.4$ eV and $U = 2E = -6.8$ eV; check: $3.4 - 6.8 = -3.4$ eV.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Ratio of the longest wavelength of the Lyman series to the longest wavelength of the Balmer series of hydrogen:",
            options: ["5 : 27", "27 : 5", "1 : 4", "4 : 9"],
            answer: 0,
            explain: "$\\lambda_L = 4/3R$, $\\lambda_B = 36/5R$. Ratio $= (4/3)/(36/5) = 20/108 = 5/27$.",
            difficulty: 2,
            hint: "Longest Balmer line is 3 → 2.",
          },
          {
            kind: "multi",
            q: "For one-electron ions in the same orbit n, which quantities are proportional to Z²?",
            options: ["Ionisation energy", "Orbit radius", "Orbital speed", "Frequency of revolution"],
            answers: [0, 3],
            explain: "$E \\propto Z^2$ and $f = v/2\\pi r \\propto Z/(1/Z) = Z^2$. Radius goes as $1/Z$ and speed as $Z$.",
            difficulty: 3,
            hint: "f = v / (2πr).",
          },
          {
            kind: "numeric",
            q: "What is the minimum energy (in eV) that must be given to a hydrogen atom in its ground state so that it can emit a Balmer line?",
            answer: 12.09,
            tolerance: 0.05,
            unit: "eV",
            explain: "A Balmer line needs the electron to fall to $n = 2$ from at least $n = 3$. Excitation $1 \\to 3$ needs $13.6(1 - 1/9) = 12.09$ eV.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "An electron in the n = 2 level of hydrogen absorbs a photon of 5.0 eV. With what kinetic energy (eV) does it leave the atom?",
            answer: 1.6,
            tolerance: 0.02,
            unit: "eV",
            explain: "Energy needed to ionise from $n = 2$ is 3.4 eV; the rest, $5.0 - 3.4 = 1.6$ eV, is kinetic energy.",
            difficulty: 3,
            hint: "First find how much energy is needed to remove the electron from n = 2.",
          },
          {
            kind: "numeric",
            q: "In hydrogen, find the ratio of the frequency of revolution of the electron in n = 1 to that in n = 2.",
            answer: 8,
            explain: "$f \\propto 1/n^3$, so $f_1/f_2 = 2^3 = 8$.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {};
