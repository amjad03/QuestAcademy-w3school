import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";

export const topics: Topic[] = [
  /* ================================================================== */
  /* Electromagnetic Waves                                               */
  /* ================================================================== */
  {
    slug: "electromagnetic-waves",
    title: "Electromagnetic Waves",
    icon: "📡",
    description: "Displacement current, Maxwell's equations, properties of EM waves and the electromagnetic spectrum.",
    lessons: [
      {
        slug: "displacement-current-maxwell",
        title: "Displacement Current & Maxwell's Equations",
        summary: "Why Ampère's law needed a correction, what displacement current is, and the four equations of electromagnetism.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Charge a capacitor and a current flows in the wires — but no charge crosses the gap between the plates. Apply Ampère's law to a surface that passes **through the gap** and you get zero current, yet the magnetic field around the wire is clearly not zero. Maxwell fixed this contradiction in the 1860s, and the fix predicted light itself.",
          },
          { type: "heading", text: "Displacement current" },
          {
            type: "formula",
            tex: t`I_d = \varepsilon_0\frac{d\Phi_E}{dt} \qquad \oint\vec B\cdot d\vec l = \mu_0\left(I_c + \varepsilon_0\frac{d\Phi_E}{dt}\right)`,
            caption: "Ampère–Maxwell law: a changing electric flux is a source of magnetic field, just like a conduction current",
          },
          {
            type: "list",
            items: [
              t`Between capacitor plates, $\Phi_E = q/\varepsilon_0$, so $I_d = dq/dt$: the displacement current in the gap **equals** the conduction current in the wires.`,
              "Total current (conduction + displacement) is continuous around the circuit.",
              t`For a capacitor, $I_d = C\,\dfrac{dV}{dt}$.`,
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** A 1 μF capacitor is being charged so that its voltage rises at $10^{6}$ V/s. $I_d = C\,dV/dt = 10^{-6}\times10^{6} = 1$ A between the plates — and 1 A also flows in the connecting wires.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 2 μF capacitor's voltage changes at 5 × 10⁵ V/s. Displacement current in amperes?",
                answer: 1,
                unit: "A",
                explain: t`$I_d = 2\times10^{-6}\times5\times10^{5} = 1$ A.`,
              },
            ],
          },
          { type: "heading", text: "Maxwell's four equations" },
          {
            type: "table",
            headers: ["Law", "Equation", "Meaning"],
            rows: [
              ["Gauss (electric)", t`$\oint\vec E\cdot d\vec A = q/\varepsilon_0$`, "Charges are sources of E"],
              ["Gauss (magnetic)", t`$\oint\vec B\cdot d\vec A = 0$`, "No magnetic monopoles"],
              ["Faraday", t`$\oint\vec E\cdot d\vec l = -\dfrac{d\Phi_B}{dt}$`, "Changing B makes E"],
              ["Ampère–Maxwell", t`$\oint\vec B\cdot d\vec l = \mu_0 I_c + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}$`, "Currents and changing E make B"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "From equations to waves",
            md: "A changing E creates B; a changing B creates E. Together they can sustain each other and travel through empty space. Hertz produced such waves in 1887, and in 1895 Jagadish Chandra Bose in Kolkata generated and detected microwaves of wavelength 5–25 mm.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Displacement current is **not** a flow of charge; it exists only while the electric field is changing. With a steady (fully charged) capacitor, both the conduction current and the displacement current are zero. Its unit is still the ampere.",
          },
          {
            type: "keypoints",
            items: [
              t`$I_d = \varepsilon_0\,d\Phi_E/dt$; between capacitor plates it equals the conduction current.`,
              "Ampère–Maxwell law makes the total current continuous.",
              "Maxwell's four equations summarise all of electromagnetism and predict EM waves.",
            ],
          },
        ],
        flashcards: [
          { front: "Displacement current", back: t`$I_d = \varepsilon_0\,d\Phi_E/dt$` },
          { front: "Ampère–Maxwell law", back: t`$\oint\vec B\cdot d\vec l = \mu_0(I_c + I_d)$` },
          { front: "Displacement current for a capacitor", back: t`$C\,dV/dt$ — equal to the conduction current` },
          { front: "Who demonstrated millimetre waves in Kolkata (1895)?", back: "Jagadish Chandra Bose" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The SI unit of $\varepsilon_0\,d\Phi_E/dt$ is:`,
            options: ["Volt", "Ampere", "Tesla", "Weber"],
            answer: 1,
            explain: "It is a current — the displacement current.",
          },
          {
            kind: "truefalse",
            q: "Displacement current exists only when the electric field is changing with time.",
            answer: true,
            explain: t`$I_d \propto d\Phi_E/dt$; a steady field gives zero.`,
          },
          {
            kind: "fill",
            q: "In the Ampère–Maxwell law, the term Maxwell added to the conduction current is called the ___ current.",
            answer: ["displacement"],
            explain: "The displacement current term was Maxwell's addition.",
          },
          {
            kind: "numeric",
            q: "A capacitor is charged by a steady current of 0.15 A. Displacement current (in A) between its plates?",
            answer: 0.15,
            unit: "A",
            explain: "Displacement current between the plates equals the conduction current in the wires.",
          },
          {
            kind: "mcq",
            q: t`Which Maxwell equation tells us that isolated magnetic poles do not exist?`,
            options: ["Gauss's law for electricity", "Gauss's law for magnetism", "Faraday's law", "Ampère–Maxwell law"],
            answer: 1,
            explain: t`$\oint\vec B\cdot d\vec A = 0$.`,
          },
          {
            kind: "order",
            q: "Arrange these milestones in chronological order.",
            items: ["Ampère's circuital law", "Faraday's law of induction", "Maxwell's displacement current", "Hertz produces EM waves"],
            explain: "1820s, 1831, 1860s, 1887.",
          },
        ],
      },
      {
        slug: "em-wave-properties",
        title: "Properties of Electromagnetic Waves",
        summary: "Speed, the E–B relation, energy density, intensity, momentum and radiation pressure.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "An EM wave is a pair of oscillating fields, E and B, perpendicular to each other and to the direction of travel. It needs no medium: sunlight crosses 150 million km of near-vacuum to reach Aditya-L1, ISRO's solar observatory, before it reaches us.",
          },
          {
            type: "formula",
            tex: t`E_x = E_0\sin(kz - \omega t), \quad B_y = B_0\sin(kz - \omega t), \quad c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 3\times10^{8}\ \text{m/s}`,
            caption: "E and B are in phase; the wave travels along E × B",
          },
          {
            type: "list",
            items: [
              t`Transverse: $\vec E \perp \vec B \perp \vec k$.`,
              t`Amplitudes: $E_0 = cB_0$; in a medium the speed is $v = 1/\sqrt{\mu\varepsilon} = c/n$.`,
              t`$c = f\lambda$, $\omega = ck$.`,
            ],
          },
          { type: "widget", widget: "wave", caption: "Change frequency and watch the wavelength shrink: for EM waves fλ always equals c in vacuum." },
          {
            type: "text",
            md: t`**Worked example.** A 25 MHz wave in vacuum has $E = 6.3$ V/m at some point. $\lambda = c/f = 3\times10^{8}/2.5\times10^{7} = 12$ m, and $B = E/c = 6.3/3\times10^{8} = 2.1\times10^{-8}$ T.`,
          },
          { type: "heading", text: "Energy, intensity and momentum" },
          {
            type: "formula",
            tex: t`u = \tfrac12\varepsilon_0E^2 + \frac{B^2}{2\mu_0}, \quad \langle u\rangle = \tfrac12\varepsilon_0E_0^2, \quad I = \langle u\rangle c = \tfrac12 c\,\varepsilon_0E_0^2`,
            caption: "Electric and magnetic energy densities are equal",
          },
          {
            type: "table",
            headers: ["Surface", "Momentum delivered (energy U)", "Radiation pressure"],
            rows: [
              ["Perfect absorber", t`$U/c$`, t`$I/c$`],
              ["Perfect reflector", t`$2U/c$`, t`$2I/c$`],
            ],
          },
          {
            type: "text",
            md: t`**Sunlight:** near Earth, $I \approx 1.36\times10^{3}$ W/m². Pressure on a black surface $= I/c \approx 4.5\times10^{-6}$ Pa — tiny, but enough to push solar sails. Peak field $E_0 = \sqrt{2I/c\varepsilon_0} \approx 1.0\times10^{3}$ V/m.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An EM wave has E₀ = 30 V/m in vacuum. B₀ in nanotesla?",
                answer: 100,
                unit: "nT",
                explain: t`$B_0 = E_0/c = 30/3\times10^{8} = 10^{-7}$ T $= 100$ nT.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "\"Which field carries more energy, E or B?\" Neither: $\\tfrac12\\varepsilon_0E^2 = B^2/2\\mu_0$. B looks tiny numerically only because $B = E/c$. Also, E and B oscillate **in phase**, not 90° apart.",
          },
          {
            type: "keypoints",
            items: [
              t`$c = 1/\sqrt{\mu_0\varepsilon_0}$; $E_0 = cB_0$; E and B in phase.`,
              "EM waves are transverse and need no medium.",
              t`Intensity $\tfrac12c\varepsilon_0E_0^2$; energy shared equally by E and B.`,
              "Radiation pressure I/c (absorbed), 2I/c (reflected).",
            ],
          },
        ],
        flashcards: [
          { front: "Speed of EM waves in vacuum", back: t`$c = 1/\sqrt{\mu_0\varepsilon_0} = 3\times10^{8}$ m/s` },
          { front: "Relation between E₀ and B₀", back: t`$E_0 = cB_0$` },
          { front: "Average energy density", back: t`$\tfrac12\varepsilon_0E_0^2$` },
          { front: "Radiation pressure on a perfect reflector", back: t`$2I/c$` },
          { front: "Phase difference between E and B", back: "Zero — in phase" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a plane EM wave in vacuum, the phase difference between E and B is:",
            options: ["0", "π/4", "π/2", "π"],
            answer: 0,
            explain: "They reach their maxima together.",
          },
          {
            kind: "truefalse",
            q: "Electromagnetic waves need a material medium to travel.",
            answer: false,
            explain: "They travel through vacuum — that is how sunlight reaches Earth.",
          },
          {
            kind: "fill",
            q: "The speed of light in vacuum is fixed by μ₀ and the permittivity of free space, whose symbol is ___.",
            answer: ["ε0", "ε₀", "epsilon0", "epsilon_0", "epsilon naught", "e0"],
            explain: t`$c = 1/\sqrt{\mu_0\varepsilon_0}$.`,
          },
          {
            kind: "numeric",
            q: "Wavelength (in m) of a 100 MHz FM radio wave?",
            answer: 3,
            unit: "m",
            explain: t`$\lambda = 3\times10^{8}/10^{8} = 3$ m.`,
          },
          {
            kind: "numeric",
            q: "Light of intensity 900 W/m² falls normally on a perfectly reflecting mirror. Radiation pressure in units of 10⁻⁶ Pa?",
            answer: 6,
            unit: "× 10⁻⁶ Pa",
            difficulty: 2,
            explain: t`$P = 2I/c = 1800/3\times10^{8} = 6\times10^{-6}$ Pa.`,
          },
          {
            kind: "mcq",
            q: "Light enters glass of refractive index 1.5. Its speed in the glass is:",
            options: [t`$4.5\times10^{8}$ m/s`, t`$3\times10^{8}$ m/s`, t`$2\times10^{8}$ m/s`, t`$1.5\times10^{8}$ m/s`],
            answer: 2,
            explain: t`$v = c/n = 3\times10^{8}/1.5$.`,
          },
        ],
      },
      {
        slug: "em-spectrum",
        title: "The Electromagnetic Spectrum",
        summary: "Radio to gamma rays: wavelength ranges, how each is produced and detected, and where we use them.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "Your FM station, the microwave oven, the TV remote, the colours of a rainbow, a sunburn on a Chennai beach, a hospital X-ray and the radiotherapy at Tata Memorial are all the **same kind of wave** — only the wavelength differs.",
          },
          { type: "heading", text: "The spectrum at a glance" },
          {
            type: "table",
            headers: ["Region", "Wavelength", "Produced by", "Uses"],
            rows: [
              ["Radio", "> 0.1 m", "Oscillating charges in antennas", "AM/FM radio, Doordarshan TV, mobile phones"],
              ["Microwave", "0.1 m – 1 mm", "Klystron, magnetron, Gunn diode", "Radar, ovens (2.45 GHz), satellite links, ISRO's RISAT imaging"],
              ["Infrared", "1 mm – 700 nm", "Hot bodies, molecular vibrations", "Remote controls, night vision, physiotherapy, greenhouse effect"],
              ["Visible", "700 – 400 nm", "Electron transitions in atoms", "Vision, photography"],
              ["Ultraviolet", "400 nm – 1 nm", "Very hot bodies (Sun), arc lamps", "Sterilising water, LASIK eye surgery; absorbed by ozone"],
              ["X-rays", "1 nm – 10⁻³ nm", "Fast electrons hitting a metal target", "Medical imaging, crystal structure"],
              ["Gamma rays", "< 10⁻³ nm", "Nuclear transitions", "Cancer radiotherapy, sterilising food"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Order mnemonic (increasing frequency)",
            md: "**R**aja **M**ahendra **I**n **V**ery **U**nusual **X**-ray **G**oggles: Radio, Microwave, IR, Visible, UV, X-ray, Gamma. Wavelength runs the opposite way.",
          },
          {
            type: "text",
            md: t`**Worked example.** A microwave oven runs at 2.45 GHz. $\lambda = c/f = 3\times10^{8}/2.45\times10^{9} \approx 0.122$ m $= 12.2$ cm. Water molecules absorb this frequency strongly, which is why food with moisture heats up.`,
          },
          {
            type: "illustration",
            emoji: "🛰️",
            caption: "AstroSat, India's first multi-wavelength space observatory, watches the sky in UV, visible and X-rays — regions the atmosphere blocks from the ground.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which radiation is used in RADAR systems for aircraft navigation?",
                options: ["Infrared", "Microwaves", "Ultraviolet", "Gamma rays"],
                answer: 1,
                explain: "Short-wavelength microwaves can be beamed and reflected from aircraft.",
              },
            ],
          },
          {
            type: "list",
            items: [
              "**Infrared** is often called heat waves: it sets molecules vibrating. Greenhouse gases trap the IR re-radiated by Earth.",
              "The **ozone layer** absorbs most solar UV; its depletion raises skin-cancer risk.",
              "X-rays and gamma rays overlap in wavelength; they are named by their **source** (electrons vs nuclei).",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "Questions ask for the radiation \"produced by bombarding a metal with fast electrons\" (X-rays) or \"emitted by radioactive nuclei\" (gamma). Another favourite: arrange in order of wavelength — remember that **gamma has the shortest wavelength and highest frequency**.",
          },
          {
            type: "keypoints",
            items: [
              "Spectrum order (increasing f): radio, microwave, IR, visible, UV, X-ray, gamma.",
              "All travel at c in vacuum; they differ in f and λ.",
              "IR: heat; UV: absorbed by ozone; X-rays: imaging; gamma: radiotherapy.",
              "X-ray and gamma ranges overlap; the source decides the name.",
            ],
          },
        ],
        flashcards: [
          { front: "Visible range", back: "About 400 nm (violet) to 700 nm (red)" },
          { front: "Waves used in RADAR", back: "Microwaves" },
          { front: "Also called heat waves", back: "Infrared" },
          { front: "Absorbed by the ozone layer", back: "Ultraviolet" },
          { front: "Produced by nuclear transitions", back: "Gamma rays" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The radiation mainly responsible for the greenhouse effect is:",
            options: ["Ultraviolet", "Infrared", "X-rays", "Radio waves"],
            answer: 1,
            explain: "Greenhouse gases absorb and re-emit infrared radiated by Earth's surface.",
          },
          {
            kind: "truefalse",
            q: "X-rays and gamma rays can have overlapping wavelengths; they are distinguished by their source.",
            answer: true,
            explain: "X-rays come from electrons; gamma rays from nuclei.",
          },
          {
            kind: "fill",
            q: "The ozone layer protects us by absorbing ___ radiation.",
            answer: ["ultraviolet", "UV", "ultra-violet"],
            explain: "Most solar UV is absorbed in the stratosphere.",
          },
          {
            kind: "numeric",
            q: "Wavelength (in cm, 1 decimal) of 2.45 GHz microwaves?",
            answer: 12.2,
            tolerance: 0.2,
            unit: "cm",
            explain: t`$\lambda = 3\times10^{8}/2.45\times10^{9} \approx 0.122$ m.`,
          },
          {
            kind: "order",
            q: "Arrange in increasing order of wavelength.",
            items: ["Gamma rays", "X-rays", "Ultraviolet", "Visible", "Infrared", "Microwaves", "Radio waves"],
            difficulty: 2,
            explain: "Wavelength increases as frequency decreases from gamma to radio.",
          },
          {
            kind: "mcq",
            q: "Water purifiers that 'sterilise' using a lamp rely on:",
            options: ["Infrared", "Ultraviolet", "Microwaves", "Radio waves"],
            answer: 1,
            explain: "UV damages the DNA of microbes.",
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  /* Wave Optics                                                         */
  /* ================================================================== */
  {
    slug: "wave-optics",
    title: "Wave Optics",
    icon: "🌈",
    description: "Huygens' principle, interference and Young's double slit, diffraction, resolving power and polarisation.",
    lessons: [
      {
        slug: "huygens-principle",
        title: "Wavefronts & Huygens' Principle",
        summary: "Wavefronts, Huygens' construction, reflection and refraction from the wave picture, and the Doppler effect for light.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Ray optics explains mirrors and lenses but not the colours of a soap bubble or the rainbow sheen of oil on a wet road during the monsoon. For those we treat light as a wave — starting with Huygens' idea of wavefronts.",
          },
          { type: "heading", text: "Wavefronts" },
          {
            type: "list",
            items: [
              "A **wavefront** is the locus of points oscillating in the same phase. Rays are perpendicular to wavefronts.",
              "Point source → spherical wavefront; line source → cylindrical; a very distant source (a star, the Sun) → plane wavefront.",
              "A convex lens turns a plane wavefront into a converging spherical one; a prism tilts it.",
            ],
          },
          { type: "heading", text: "Huygens' principle" },
          {
            type: "text",
            md: "Every point on a wavefront acts as a source of secondary **wavelets** that spread out at the wave speed. The new wavefront is the forward envelope (common tangent) of these wavelets after time t.",
          },
          {
            type: "formula",
            tex: t`\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1} \qquad \lambda_2 = \frac{\lambda_1}{n}\ (\text{from air}), \quad f\ \text{unchanged}`,
            caption: "Snell's law from Huygens' construction: light slows down in a denser medium",
          },
          {
            type: "text",
            md: t`**Worked example.** Light of wavelength 600 nm in air enters glass ($n = 1.5$). Speed in glass $= 2\times10^{8}$ m/s; wavelength $= 600/1.5 = 400$ nm; frequency $= c/\lambda = 3\times10^{8}/6\times10^{-7} = 5\times10^{14}$ Hz in both media.`,
          },
          {
            type: "callout",
            tone: "fact",
            title: "Newton vs Huygens",
            md: "Newton's corpuscular theory predicted that light travels **faster** in water; Huygens' wave theory predicted **slower**. Foucault's 1850 measurement showed it is slower, a major win for the wave theory.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Yellow light of wavelength 589 nm enters water (n = 4/3). Its wavelength in water, in nm?",
                answer: 441.75,
                tolerance: 1,
                unit: "nm",
                explain: t`$589\times3/4 = 441.75$ nm. Frequency (and colour) is unchanged.`,
              },
            ],
          },
          { type: "heading", text: "Doppler effect for light" },
          {
            type: "formula",
            tex: t`\frac{\Delta\lambda}{\lambda} = \frac{v_r}{c} \quad (v_r \ll c)`,
            caption: "Receding source → longer λ (red shift); approaching → blue shift",
          },
          {
            type: "text",
            md: t`A hydrogen line of 656.3 nm from a galaxy is observed at 662.9 nm: $v_r = c\,\Delta\lambda/\lambda = 3\times10^{8}\times6.6/656.3 \approx 3\times10^{6}$ m/s, moving away.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "On refraction, **frequency never changes** — it is set by the source. Wavelength and speed change together. Questions that say \"the colour changes in water\" are false: colour is tied to frequency.",
          },
          {
            type: "keypoints",
            items: [
              "Wavefront: surface of constant phase; rays ⊥ wavefronts.",
              "Huygens: every point is a source of secondary wavelets; the envelope is the new wavefront.",
              t`In a medium, $v = c/n$, $\lambda = \lambda_0/n$, $f$ unchanged.`,
              t`Doppler: $\Delta\lambda/\lambda = v_r/c$; red shift means receding.`,
            ],
          },
        ],
        flashcards: [
          { front: "Wavefront", back: "Locus of points vibrating in the same phase" },
          { front: "Wavefront from a distant star", back: "Plane" },
          { front: "What stays the same on refraction?", back: "Frequency" },
          { front: "Red shift", back: "Increase in observed λ; source receding" },
          { front: "Huygens' principle", back: "Each point on a wavefront emits secondary wavelets; their envelope is the new wavefront" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The wavefront of light reaching Earth from a distant star is:",
            options: ["Spherical", "Cylindrical", "Plane", "Elliptical"],
            answer: 2,
            explain: "A small part of a huge sphere is effectively flat.",
          },
          {
            kind: "truefalse",
            q: "The frequency of light changes when it passes from air into glass.",
            answer: false,
            explain: "Only speed and wavelength change.",
          },
          {
            kind: "fill",
            q: "The locus of all points vibrating in the same phase is called a ___.",
            answer: ["wavefront", "wave front", "wave-front"],
            explain: "Definition of a wavefront.",
          },
          {
            kind: "mcq",
            q: "According to the wave theory, compared with air, light in water travels:",
            options: ["Faster", "Slower", "At the same speed", "Faster for red, slower for violet only"],
            answer: 1,
            explain: t`$v = c/n$ with $n > 1$; confirmed by Foucault.`,
          },
          {
            kind: "numeric",
            q: "A star emits a 500 nm line and recedes at 3 × 10⁶ m/s. Observed wavelength in nm?",
            answer: 505,
            unit: "nm",
            difficulty: 2,
            explain: t`$\Delta\lambda = \lambda v/c = 500\times0.01 = 5$ nm, so 505 nm.`,
          },
        ],
      },
      {
        slug: "interference-ydse",
        title: "Interference & Young's Double-Slit Experiment",
        summary: "Coherent sources, constructive and destructive interference, fringe width and intensity in YDSE.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "When two coherent waves overlap, they add up — crest on crest gives brightness, crest on trough gives darkness. Thomas Young's 1801 double-slit experiment turned this idea into measurable bright and dark bands, and it remains one of the most-asked topics in boards and JEE.",
          },
          { type: "heading", text: "Superposition and coherence" },
          {
            type: "formula",
            tex: t`I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\phi \qquad \phi = \frac{2\pi}{\lambda}\,\Delta x`,
            caption: "Coherent sources keep a constant phase difference φ; Δx is the path difference",
          },
          {
            type: "table",
            headers: ["Condition", "Path difference", "Phase difference", "Intensity (I₁ = I₂ = I₀)"],
            rows: [
              ["Constructive (bright)", t`$n\lambda$`, t`$2n\pi$`, t`$4I_0$`],
              ["Destructive (dark)", t`$(n+\tfrac12)\lambda$`, t`$(2n+1)\pi$`, "0"],
              ["General", t`$\Delta x$`, t`$\phi$`, t`$4I_0\cos^2(\phi/2)$`],
            ],
          },
          {
            type: "formula",
            tex: t`\frac{I_{max}}{I_{min}} = \left(\frac{\sqrt{I_1}+\sqrt{I_2}}{\sqrt{I_1}-\sqrt{I_2}}\right)^2`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Why not two bulbs?",
            md: "Two independent sources (two bulbs, two torches) change phase randomly about 10⁸ times a second, so the pattern washes out. YDSE gets coherence by splitting one wavefront with two slits.",
          },
          { type: "heading", text: "Young's double slit" },
          {
            type: "formula",
            tex: t`\Delta x = \frac{yd}{D}, \qquad y_n^{bright} = \frac{n\lambda D}{d}, \qquad \beta = \frac{\lambda D}{d}`,
            caption: "d = slit separation, D = slit-to-screen distance, β = fringe width",
          },
          {
            type: "text",
            md: t`**Worked example.** $\lambda = 600$ nm, $D = 1.5$ m, $d = 0.3$ mm. $\beta = \dfrac{6\times10^{-7}\times1.5}{3\times10^{-4}} = 3\times10^{-3}$ m $= 3$ mm. The 3rd bright fringe is at $3\beta = 9$ mm from the centre. Immersed in water ($n = 4/3$): $\beta' = \beta/n = 2.25$ mm.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In YDSE, λ = 500 nm, d = 0.5 mm and D = 1 m. Fringe width in mm?",
                answer: 1,
                unit: "mm",
                explain: t`$\beta = 5\times10^{-7}\times1/5\times10^{-4} = 10^{-3}$ m.`,
              },
            ],
          },
          {
            type: "list",
            items: [
              t`A thin sheet (thickness $t$, index $\mu$) over one slit shifts the whole pattern by $\dfrac{(\mu-1)tD}{d}$ towards that slit; fringe width is unchanged.`,
              "With white light, the central fringe is white and the others are coloured (violet nearest the centre).",
              "Thin films — soap bubbles, oil on water — show colours by interference between light reflected from the top and bottom surfaces.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: t`For intensity ratio $I_1 : I_2 = 9 : 1$, amplitudes are $3 : 1$, so $I_{max}/I_{min} = (3+1)^2/(3-1)^2 = 4$ — not 9 or 10. Always take square roots of intensities first.`,
          },
          {
            type: "keypoints",
            items: [
              "Interference needs coherent sources.",
              t`Bright: $\Delta x = n\lambda$; dark: $(n+\tfrac12)\lambda$.`,
              t`$\beta = \lambda D/d$; in a medium $\beta/n$.`,
              t`$I = 4I_0\cos^2(\phi/2)$ for equal sources.`,
              "Energy is redistributed, not created or destroyed.",
            ],
          },
        ],
        flashcards: [
          { front: "Fringe width in YDSE", back: t`$\beta = \lambda D/d$` },
          { front: "Condition for a bright fringe", back: t`Path difference $= n\lambda$` },
          { front: "Resultant intensity, equal sources", back: t`$4I_0\cos^2(\phi/2)$` },
          { front: "Phase from path difference", back: t`$\phi = 2\pi\Delta x/\lambda$` },
          { front: "Shift due to a thin sheet", back: t`$(\mu-1)tD/d$ towards the covered slit` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Two coherent sources have intensities in the ratio 9 : 1. The ratio Imax : Imin is:",
            options: ["9 : 1", "3 : 1", "4 : 1", "10 : 8"],
            answer: 2,
            difficulty: 2,
            explain: "Amplitudes 3 : 1 → (3+1)² : (3−1)² = 16 : 4 = 4 : 1.",
          },
          {
            kind: "truefalse",
            q: "Two independent sodium lamps produce a sustained interference pattern.",
            answer: false,
            explain: "They are not coherent; their phase difference changes randomly.",
          },
          {
            kind: "fill",
            q: "A path difference of λ/2 corresponds to a phase difference of ___ radians.",
            answer: ["π", "pi", "3.14"],
            explain: t`$\phi = (2\pi/\lambda)(\lambda/2) = \pi$.`,
          },
          {
            kind: "numeric",
            q: "The fringe width in air is 4 mm. The apparatus is immersed in water (n = 4/3). New fringe width in mm?",
            answer: 3,
            unit: "mm",
            explain: t`$\beta' = \beta/n = 4\times3/4 = 3$ mm.`,
          },
          {
            kind: "mcq",
            q: "If the slit separation d in YDSE is doubled (everything else unchanged), the fringe width:",
            options: ["Doubles", "Halves", "Stays the same", "Becomes four times"],
            answer: 1,
            explain: t`$\beta \propto 1/d$.`,
          },
          {
            kind: "mcq",
            q: "Two equal coherent waves (each intensity I₀) meet with phase difference 2π/3. Resultant intensity:",
            options: ["0", "I₀", "2I₀", "3I₀"],
            answer: 1,
            difficulty: 3,
            explain: t`$4I_0\cos^2(60^\circ) = 4I_0\times\tfrac14 = I_0$.`,
          },
        ],
      },
      {
        slug: "diffraction-polarisation",
        title: "Diffraction, Resolving Power & Polarisation",
        summary: "Single-slit diffraction, the limit of resolution of telescopes, Malus' law and Brewster's law.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Light bends slightly around edges and through narrow openings — **diffraction**. It blurs the sharpest telescope image and sets a limit on what we can see. And because light is a transverse wave, it can be **polarised**, which is how polarising sunglasses kill road glare.",
          },
          { type: "heading", text: "Single-slit diffraction" },
          {
            type: "formula",
            tex: t`a\sin\theta = n\lambda\ (\text{minima}) \qquad \text{central max angular width} = \frac{2\lambda}{a} \qquad \text{linear width} = \frac{2\lambda D}{a}`,
            caption: "Secondary maxima lie roughly at a sinθ = (n + ½)λ and get much fainter",
          },
          {
            type: "text",
            md: t`**Worked example.** $a = 0.1$ mm, $\lambda = 500$ nm, screen at $D = 1$ m. Width of central maximum $= \dfrac{2\times5\times10^{-7}\times1}{10^{-4}} = 10^{-2}$ m $= 10$ mm.`,
          },
          {
            type: "table",
            headers: ["Interference (YDSE)", "Single-slit diffraction"],
            rows: [
              ["Superposition of two wavefronts", "Superposition of wavelets from one wavefront"],
              ["Fringes equally wide", "Central maximum twice as wide as others"],
              ["Bright fringes equally intense", "Intensity falls rapidly away from centre"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Fresnel distance",
            md: t`Ray optics is valid up to about $z_F = a^2/\lambda$. Beyond it, diffraction spreading exceeds the aperture size.`,
          },
          { type: "heading", text: "Resolving power" },
          {
            type: "formula",
            tex: t`\Delta\theta = \frac{1.22\,\lambda}{D} \qquad \text{resolving power} = \frac{1}{\Delta\theta}`,
            caption: "Telescope with objective (aperture) diameter D: a bigger mirror resolves finer detail",
          },
          {
            type: "text",
            md: t`India's 3.6 m Devasthal Optical Telescope near Nainital, at $\lambda = 600$ nm: $\Delta\theta = 1.22\times6\times10^{-7}/3.6 \approx 2\times10^{-7}$ rad. The Giant Metrewave Radio Telescope near Pune uses many dishes spread over 25 km because radio wavelengths are huge.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "If the slit width in single-slit diffraction is increased, the central maximum:",
                options: ["Becomes wider", "Becomes narrower", "Stays the same", "Disappears completely"],
                answer: 1,
                explain: t`Width $= 2\lambda D/a \propto 1/a$.`,
              },
            ],
          },
          { type: "heading", text: "Polarisation" },
          {
            type: "list",
            items: [
              t`Unpolarised light through a polaroid → intensity $I_0/2$, plane-polarised.`,
              t`**Malus' law:** through a second polaroid at angle θ, $I = I_1\cos^2\theta$.`,
              t`**Brewster's law:** reflected light is completely polarised when $\tan\theta_B = n$; then reflected and refracted rays are perpendicular. For glass ($n = 1.5$), $\theta_B \approx 56.3^\circ$.`,
              "Only transverse waves can be polarised — sound in air cannot.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** Unpolarised light $I_0$ passes two polaroids with axes at $60^\circ$. After the first: $I_0/2$. After the second: $\tfrac{I_0}{2}\cos^2 60^\circ = I_0/8$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Students apply Malus' law to the first polaroid and get $I_0\\cos^2\\theta$. The first polaroid always halves unpolarised light, whatever its orientation. Also, for a single slit, $a\\sin\\theta = n\\lambda$ gives **minima** — the opposite of YDSE, where $n\\lambda$ gives maxima.",
          },
          {
            type: "keypoints",
            items: [
              t`Single slit minima: $a\sin\theta = n\lambda$; central width $2\lambda D/a$.`,
              t`Telescope limit $1.22\lambda/D$; bigger aperture, better resolution.`,
              t`Malus $I = I_0\cos^2\theta$; unpolarised → $I_0/2$.`,
              t`Brewster $\tan\theta_B = n$; reflected ⊥ refracted.`,
            ],
          },
        ],
        flashcards: [
          { front: "Single-slit minima", back: t`$a\sin\theta = n\lambda$` },
          { front: "Width of central maximum", back: t`$2\lambda D/a$` },
          { front: "Limit of resolution of a telescope", back: t`$1.22\lambda/D$` },
          { front: "Malus' law", back: t`$I = I_0\cos^2\theta$` },
          { front: "Brewster's law", back: t`$\tan\theta_B = n$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Single slit of width 0.2 mm, λ = 600 nm, screen 2 m away. Width of the central maximum in mm?",
            answer: 12,
            unit: "mm",
            explain: t`$2\lambda D/a = 2\times6\times10^{-7}\times2/2\times10^{-4} = 1.2\times10^{-2}$ m.`,
          },
          {
            kind: "mcq",
            q: "Unpolarised light of intensity I₀ passes through two polaroids whose axes are at 60°. Final intensity:",
            options: ["I₀/2", "I₀/4", "I₀/8", "3I₀/8"],
            answer: 2,
            difficulty: 2,
            explain: t`$\tfrac{I_0}{2}\cos^2 60^\circ = \tfrac{I_0}{8}$.`,
          },
          {
            kind: "numeric",
            q: "Brewster angle (in degrees) for a medium of refractive index √3?",
            answer: 60,
            unit: "°",
            explain: t`$\tan\theta_B = \sqrt3 \Rightarrow \theta_B = 60^\circ$.`,
          },
          {
            kind: "truefalse",
            q: "Sound waves in air can be polarised.",
            answer: false,
            explain: "Sound in air is longitudinal; only transverse waves can be polarised.",
          },
          {
            kind: "fill",
            q: "The angle of incidence at which reflected light is completely plane-polarised is called the ___ angle.",
            answer: ["Brewster", "Brewster's", "polarising", "polarizing"],
            explain: t`Brewster's angle, $\tan\theta_B = n$.`,
          },
          {
            kind: "mcq",
            q: "To improve the resolving power of a telescope you should:",
            options: ["Use a smaller objective", "Use a larger objective", "Use longer wavelength light", "Use a shorter tube"],
            answer: 1,
            explain: t`$\Delta\theta = 1.22\lambda/D$ decreases as D increases.`,
          },
        ],
      },
    ],
  },

  /* ================================================================== */
  /* Semiconductor Electronics                                           */
  /* ================================================================== */
  {
    slug: "semiconductor-electronics",
    title: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    icon: "💡",
    description: "Energy bands, intrinsic and extrinsic semiconductors, the p–n junction diode, rectifiers, special diodes and logic gates.",
    lessons: [
      {
        slug: "energy-bands-doping",
        title: "Energy Bands, Intrinsic & Extrinsic Semiconductors",
        summary: "Why silicon is a semiconductor, electrons and holes, n-type and p-type doping and the mass-action law.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Every phone, ATM and Aadhaar card reader runs on silicon chips. India is now building its own chip fabs — the first major one at Dholera in Gujarat. The starting point of all that technology is one idea: the **energy band gap**.",
          },
          { type: "heading", text: "Energy bands" },
          {
            type: "table",
            headers: ["Type", "Band gap Eg", "At room temperature"],
            rows: [
              ["Conductor (Cu, Al)", "Bands overlap (Eg = 0)", "Plenty of free electrons"],
              ["Semiconductor (Ge, Si)", "Small: Ge ≈ 0.7 eV, Si ≈ 1.1 eV", "A few electrons jump to the conduction band"],
              ["Insulator (diamond)", "Large: ≈ 5.4 eV", "Practically no conduction"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Semiconductors behave oddly with heat",
            md: "Heating a metal increases its resistance. Heating a semiconductor **decreases** it, because more electrons cross the gap. At 0 K a pure semiconductor is an insulator.",
          },
          { type: "heading", text: "Intrinsic semiconductors" },
          {
            type: "text",
            md: t`In pure Si, thermal energy breaks some covalent bonds. Each freed electron leaves a vacancy — a **hole** — that behaves like a positive charge. So $n_e = n_h = n_i$. Current is carried by both: $I = I_e + I_h$.`,
          },
          { type: "heading", text: "Extrinsic (doped) semiconductors" },
          {
            type: "table",
            headers: ["Type", "Dopant", "Majority carriers", "Energy level"],
            rows: [
              ["n-type", "Pentavalent donor: P, As, Sb", "Electrons", "Donor level just below conduction band"],
              ["p-type", "Trivalent acceptor: B, Al, Ga, In", "Holes", "Acceptor level just above valence band"],
            ],
          },
          {
            type: "formula",
            tex: t`n_e\,n_h = n_i^2 \qquad \sigma = e\,(n_e\mu_e + n_h\mu_h)`,
            caption: "Mass-action law (thermal equilibrium) and conductivity",
          },
          {
            type: "text",
            md: t`**Worked example.** Pure Si has $n_i = 1.5\times10^{16}$ m⁻³. It is doped with arsenic at $5\times10^{22}$ atoms/m³. Then $n_e \approx 5\times10^{22}$ m⁻³ and $n_h = \dfrac{n_i^2}{n_e} = \dfrac{2.25\times10^{32}}{5\times10^{22}} = 4.5\times10^{9}$ m⁻³. Doping has made electrons outnumber holes by more than $10^{13}$ times.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "In a p-type semiconductor, the majority charge carriers are ___.",
                answer: ["holes", "hole"],
                explain: "Trivalent acceptors create holes.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "An n-type semiconductor is **electrically neutral**, not negatively charged. The extra electrons are balanced by the positive donor ions. Similarly p-type is neutral too.",
          },
          {
            type: "keypoints",
            items: [
              "Band gap decides conductor / semiconductor / insulator.",
              "Intrinsic: n_e = n_h; resistance falls with temperature.",
              "n-type: pentavalent donors, electrons majority. p-type: trivalent acceptors, holes majority.",
              t`$n_en_h = n_i^2$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Band gap of silicon", back: "≈ 1.1 eV" },
          { front: "Dopant for n-type Si", back: "Pentavalent: P, As, Sb" },
          { front: "Dopant for p-type Si", back: "Trivalent: B, Al, Ga, In" },
          { front: "Mass-action law", back: t`$n_en_h = n_i^2$` },
          { front: "Charge on an n-type crystal", back: "Neutral overall" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "To make n-type silicon, it should be doped with:",
            options: ["Boron", "Aluminium", "Arsenic", "Indium"],
            answer: 2,
            explain: "Arsenic is pentavalent and donates an electron.",
          },
          {
            kind: "mcq",
            q: t`A semiconductor has $n_i = 10^{16}$ m⁻³ and, after doping, $n_e = 10^{22}$ m⁻³. Hole concentration:`,
            options: [t`$10^{6}$ m⁻³`, t`$10^{10}$ m⁻³`, t`$10^{16}$ m⁻³`, t`$10^{38}$ m⁻³`],
            answer: 1,
            difficulty: 2,
            explain: t`$n_h = n_i^2/n_e = 10^{32}/10^{22} = 10^{10}$ m⁻³.`,
          },
          {
            kind: "truefalse",
            q: "An n-type semiconductor carries a net negative charge.",
            answer: false,
            explain: "Donor ions balance the extra electrons, so the crystal is neutral.",
          },
          {
            kind: "mcq",
            q: "When the temperature of a pure semiconductor rises, its resistance:",
            options: ["Increases", "Decreases", "Stays the same", "Becomes infinite"],
            answer: 1,
            explain: "More electron–hole pairs are produced.",
          },
          {
            kind: "order",
            q: "Arrange in increasing order of band gap.",
            items: ["Copper", "Germanium", "Silicon", "Diamond"],
            explain: "0 (overlap), ≈ 0.7 eV, ≈ 1.1 eV, ≈ 5.4 eV.",
          },
        ],
      },
      {
        slug: "pn-junction-rectifier",
        title: "The p–n Junction Diode & Rectifiers",
        summary: "Depletion layer and barrier potential, forward and reverse bias, I–V characteristics and half- and full-wave rectifiers.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Join p-type and n-type silicon and you get a one-way valve for current — the diode. The phone charger in your bag uses diodes to turn 230 V AC into the DC the battery needs.",
          },
          { type: "heading", text: "Forming the junction" },
          {
            type: "list",
            ordered: true,
            items: [
              "Electrons diffuse from n to p and holes from p to n (diffusion current).",
              "They leave behind fixed ions: + on the n side, − on the p side. This ion-filled zone is the **depletion region**.",
              "The ions set up an electric field (n → p) that drives a drift current opposing diffusion.",
              "Equilibrium: diffusion = drift. The potential across the junction is the **barrier potential** (≈ 0.7 V for Si, ≈ 0.3 V for Ge).",
            ],
          },
          { type: "heading", text: "Biasing" },
          {
            type: "table",
            headers: ["", "Forward bias", "Reverse bias"],
            rows: [
              ["Connection", "p to +, n to −", "p to −, n to +"],
              ["Barrier", "Lowered", "Raised"],
              ["Depletion width", "Decreases", "Increases"],
              ["Current", "Large (mA), rises sharply after knee voltage", "Tiny (μA) saturation current, until breakdown"],
            ],
          },
          {
            type: "formula",
            tex: t`r_d = \frac{\Delta V}{\Delta I}`,
            caption: "Dynamic (ac) resistance from the slope of the I–V curve",
          },
          {
            type: "text",
            md: t`**Worked example 1.** In forward bias, V rises from 0.7 V to 0.8 V and I from 10 mA to 30 mA: $r_d = 0.1/0.02 = 5\ \Omega$. **Worked example 2.** A 5 V battery drives a Si diode (0.7 V drop) and 100 Ω resistor in series: $I = (5-0.7)/100 = 43$ mA.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 9 V battery, a silicon diode (forward drop 0.7 V) and an 830 Ω resistor are in series, diode forward-biased. Current in mA?",
                answer: 10,
                unit: "mA",
                explain: t`$I = (9 - 0.7)/830 = 0.01$ A.`,
              },
            ],
          },
          { type: "heading", text: "Rectifiers" },
          {
            type: "table",
            headers: ["Rectifier", "Diodes", "Conducts during", "Output ripple frequency (50 Hz input)"],
            rows: [
              ["Half-wave", "1", "Half of each cycle", "50 Hz"],
              ["Full-wave (centre-tap)", "2", "Both halves, alternately", "100 Hz"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Smoothing",
            md: "A capacitor across the load charges at each peak and discharges slowly between them, filling the gaps. A larger capacitor or larger load resistance gives smoother DC.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Full-wave output frequency is **twice** the input (100 Hz from Indian 50 Hz mains), half-wave output is the same as input. Also, an ideal diode is a closed switch in forward bias and an open switch in reverse bias — read the polarity carefully in circuit diagrams.",
          },
          {
            type: "keypoints",
            items: [
              "Depletion region contains immobile ions; barrier ≈ 0.7 V (Si).",
              "Forward bias narrows the depletion region; reverse bias widens it.",
              t`Dynamic resistance $r_d = \Delta V/\Delta I$.`,
              "Half-wave: f_out = f_in; full-wave: f_out = 2f_in.",
            ],
          },
        ],
        flashcards: [
          { front: "Barrier potential of a Si junction", back: "≈ 0.7 V" },
          { front: "Effect of reverse bias on depletion width", back: "Increases" },
          { front: "Dynamic resistance", back: t`$r_d = \Delta V/\Delta I$` },
          { front: "Ripple frequency of a full-wave rectifier on 50 Hz", back: "100 Hz" },
          { front: "Ideal diode in reverse bias", back: "Open switch" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The output frequency of a full-wave rectifier fed from 50 Hz mains is:",
            options: ["25 Hz", "50 Hz", "100 Hz", "200 Hz"],
            answer: 2,
            explain: "Both halves are used, so there are two output pulses per input cycle.",
          },
          {
            kind: "truefalse",
            q: "In reverse bias, the width of the depletion region increases.",
            answer: true,
            explain: "The applied field adds to the barrier field, pulling carriers away from the junction.",
          },
          {
            kind: "fill",
            q: "In forward bias, the p-side of the diode is connected to the ___ terminal of the battery.",
            answer: ["positive", "+", "positive (+)"],
            explain: "p to positive, n to negative.",
          },
          {
            kind: "numeric",
            q: "A diode's voltage rises from 0.6 V to 0.7 V while its current rises from 10 mA to 20 mA. Dynamic resistance in Ω?",
            answer: 10,
            unit: "Ω",
            explain: t`$r_d = 0.1/0.01 = 10\ \Omega$.`,
          },
          {
            kind: "mcq",
            q: "The depletion region of a p–n junction contains:",
            options: ["Free electrons only", "Free holes only", "Immobile ions", "Both free electrons and holes in equal numbers"],
            answer: 2,
            explain: "It is depleted of mobile carriers; only fixed donor and acceptor ions remain.",
          },
          {
            kind: "numeric",
            q: "A 12 V supply, a Si diode (0.7 V drop, forward-biased) and a resistor carry 50 mA. Resistance in Ω?",
            answer: 226,
            tolerance: 1,
            unit: "Ω",
            difficulty: 2,
            explain: t`$R = (12 - 0.7)/0.05 = 226\ \Omega$.`,
          },
        ],
      },
      {
        slug: "special-diodes-logic-gates",
        title: "Special-Purpose Diodes & Logic Gates",
        summary: "Zener diode as a voltage regulator, photodiode, LED, solar cell, and the basic and universal logic gates.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Syllabus note",
            md: "The rationalised NCERT book has trimmed special-purpose diodes and logic gates, but ISC, Karnataka PUC and several state boards still examine them, and they remain useful background for JEE and NEET. Check your board's latest syllabus.",
          },
          { type: "heading", text: "Zener diode" },
          {
            type: "text",
            md: "A heavily doped junction designed to operate in **reverse breakdown**. Once the reverse voltage reaches $V_Z$, the voltage across it stays almost constant over a wide range of current — perfect for a voltage regulator.",
          },
          {
            type: "text",
            md: t`**Worked example.** Input 15 V, $V_Z = 9$ V, series resistor 300 Ω, load 1.5 kΩ. Current in series resistor $= (15-9)/300 = 20$ mA. Load current $= 9/1500 = 6$ mA. Zener current $= 20 - 6 = 14$ mA. If the input rises, only the Zener current changes; the load stays at 9 V.`,
          },
          { type: "heading", text: "Optoelectronic junctions" },
          {
            type: "table",
            headers: ["Device", "Bias", "Working", "Use"],
            rows: [
              ["Photodiode", "Reverse", "Light creates electron–hole pairs; reverse current rises with intensity", "Light sensors, smoke detectors"],
              ["LED", "Forward", "Recombination emits photons of energy ≈ Eg", "Indicator lamps, LED bulbs (UJALA scheme)"],
              ["Solar cell", "None", "Light generates an emf across the junction", "Rooftop panels, Bhadla Solar Park, ISRO satellites"],
            ],
          },
          {
            type: "formula",
            tex: t`\lambda\,(\text{nm}) \approx \frac{1240}{E_g\,(\text{eV})}`,
            caption: "Colour of an LED from its band gap; from E = hc/λ",
          },
          {
            type: "text",
            md: "An LED with $E_g = 1.9$ eV emits $\\lambda \\approx 1240/1.9 \\approx 653$ nm — red. Blue LEDs need about 2.7 eV, which is why they came much later.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Wavelength (in nm) emitted by an LED of band gap 2.48 eV?",
                answer: 500,
                tolerance: 2,
                unit: "nm",
                explain: t`$\lambda = 1240/2.48 = 500$ nm (green).`,
              },
            ],
          },
          { type: "heading", text: "Logic gates" },
          {
            type: "table",
            headers: ["A", "B", "OR (A+B)", "AND (A·B)", "NAND", "NOR"],
            rows: [
              ["0", "0", "0", "0", "1", "1"],
              ["0", "1", "1", "0", "1", "0"],
              ["1", "0", "1", "0", "1", "0"],
              ["1", "1", "1", "1", "0", "0"],
            ],
          },
          {
            type: "list",
            items: [
              t`**NOT**: $Y = \bar A$ — output is the opposite of the input.`,
              "**NAND** and **NOR** are **universal gates**: any other gate can be built from them alone.",
              t`Joining both inputs of a NAND (or NOR) gives a NOT gate: $\overline{A\cdot A} = \bar A$.`,
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "A photodiode is used in **reverse** bias (the relative change of reverse current with light is large), while an LED is **forward** biased. Swapping them is a favourite wrong option. In gate circuits, work one stage at a time with a truth table instead of guessing.",
          },
          {
            type: "keypoints",
            items: [
              "Zener in reverse breakdown regulates voltage.",
              "Photodiode: reverse bias; LED: forward bias; solar cell: no bias.",
              t`LED colour: $\lambda \approx 1240/E_g$ nm.`,
              "NAND and NOR are universal gates.",
            ],
          },
        ],
        flashcards: [
          { front: "Zener diode is used as", back: "A voltage regulator (in reverse breakdown)" },
          { front: "Bias for a photodiode", back: "Reverse" },
          { front: "LED wavelength from band gap", back: t`$\lambda(\text{nm}) \approx 1240/E_g(\text{eV})$` },
          { front: "Universal gates", back: "NAND and NOR" },
          { front: "NAND output for A = B = 1", back: "0" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A Zener diode is mainly used as a:",
            options: ["Rectifier", "Voltage regulator", "Amplifier", "Light source"],
            answer: 1,
            explain: "Its reverse breakdown voltage stays nearly constant.",
          },
          {
            kind: "mcq",
            q: t`For a NOR gate, $Y = \overline{A+B}$. If A = 0 and B = 0, Y =`,
            options: ["0", "1", "Undefined", "Equal to A"],
            answer: 1,
            explain: "A + B = 0, and its complement is 1.",
          },
          {
            kind: "truefalse",
            q: "A photodiode is operated in reverse bias.",
            answer: true,
            explain: "The fractional change in the small reverse current due to light is large and easy to detect.",
          },
          {
            kind: "fill",
            q: "NAND and NOR gates are called ___ gates because any logic gate can be built from them.",
            answer: ["universal"],
            explain: "Each alone can realise NOT, AND and OR.",
          },
          {
            kind: "numeric",
            q: "Zener regulator: input 12 V, V_Z = 6 V, series resistor 200 Ω, load 1 kΩ. Current through the Zener in mA?",
            answer: 24,
            unit: "mA",
            difficulty: 3,
            explain: t`Series current $= 6/200 = 30$ mA; load current $= 6/1000 = 6$ mA; Zener current $= 24$ mA.`,
          },
          {
            kind: "numeric",
            q: "Wavelength (in nm, nearest integer) emitted by a GaAsP LED with band gap 1.9 eV?",
            answer: 653,
            tolerance: 2,
            unit: "nm",
            explain: t`$1240/1.9 \approx 652.6$ nm.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Electromagnetic Waves": "electromagnetic-waves",
  "Wave Optics": "wave-optics",
  "Semiconductor Electronics: Materials, Devices and Simple Circuits": "semiconductor-electronics",
  "Electronic Devices": "semiconductor-electronics",
};
