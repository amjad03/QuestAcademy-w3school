import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Mechanical Properties of Solids (NCERT)                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-solids",
    title: "Mechanical Properties of Solids",
    icon: "🏗️",
    description: "Elasticity and plasticity, stress and strain, Hooke's law, the stress–strain curve, Young's, shear and bulk moduli, Poisson's ratio and elastic energy.",
    lessons: [
      {
        slug: "c11-phy-stress-strain",
        title: "Stress, Strain and Hooke's Law",
        summary: "Elastic and plastic behaviour, the three kinds of stress and strain, Hooke's law and how to read a stress–strain curve.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🌉",
            caption: "The steel cables of the Bandra–Worli Sea Link stretch a little every time a bus crosses, then return to their length. Engineers design them so they never stretch beyond that point.",
          },
          {
            type: "text",
            md: t`Every real solid changes shape or size a little when a force acts on it. A force that does this is a **deforming force**. Inside the solid, neighbouring atoms are pulled apart or pushed together, and the interatomic forces try to undo the change. This internal force is the **restoring force**.

**Elasticity** is the property of a body by which it regains its original size and shape when the deforming force is removed. A steel spring is close to elastic. **Plasticity** is the property of not regaining the original shape: putty and wet clay are close to plastic. A **perfectly rigid body**, which never deforms, is only an idealisation.`,
          },
          {
            type: "text",
            md: t`**Stress** is the restoring force per unit area. In equilibrium the restoring force equals the applied force in size, so we calculate stress as $F/A$. Its SI unit is $\text{N m}^{-2}$, called the **pascal (Pa)**, and its dimensions are $[\text{ML}^{-1}\text{T}^{-2}]$, the same as pressure.

**Strain** is the fractional change in a dimension: change ÷ original value. It is a ratio of like quantities, so it has **no unit and no dimensions**.`,
          },
          {
            type: "table",
            headers: ["Kind of stress", "How the force acts", "Matching strain"],
            rows: [
              ["Tensile or compressive (longitudinal) stress", "normal to the cross-section, along the length", t`Longitudinal strain $= \Delta L/L$`],
              ["Shearing (tangential) stress", "parallel to a face; the faces slide relative to each other", t`Shearing strain $= \Delta x/L = \tan\theta \approx \theta$`],
              ["Hydraulic (volume) stress", "a uniform pressure on all faces, e.g. a body deep in water", t`Volume strain $= \Delta V/V$`],
            ],
          },
          {
            type: "formula",
            tex: t`\text{stress} = \frac{F}{A}, \qquad \text{longitudinal strain} = \frac{\Delta L}{L}, \qquad \text{shear strain} = \theta, \qquad \text{volume strain} = \frac{\Delta V}{V}`,
            caption: "Stress has the unit of pressure (Pa). Every strain is a pure number.",
          },
          {
            type: "heading",
            text: "Hooke's law",
          },
          {
            type: "text",
            md: t`Robert Hooke found that for small deformations **stress is proportional to strain**. Writing $\text{stress} = k \times \text{strain}$, the constant $k$ is called the **modulus of elasticity**. It depends only on the material and the kind of deformation, and has the unit of stress (Pa).

Hooke's law is an *empirical* law. It holds for most metals up to a limit, but not for every material.`,
          },
          {
            type: "text",
            md: t`**The stress–strain curve** of a metal wire under increasing tension tells the full story:

- **O to A (straight line):** Hooke's law holds. A is the **proportional limit**.
- **A to B:** stress and strain are no longer proportional, but the wire still returns to its length if unloaded. B is the **yield point** or **elastic limit**; the stress there is the **yield strength** $\sigma_y$.
- **B to D:** strain grows quickly for small increases in stress. Unloaded at C, the wire does not return to O but keeps a **permanent set**. This is **plastic deformation**. D marks the **ultimate tensile strength** $\sigma_u$.
- **D to E:** the wire thins (necks) and breaks at E, the **fracture point**.

If D and E are far apart the material is **ductile** (copper, mild steel). If they are close it is **brittle** (cast iron, glass). Rubber and the aorta are **elastomers**: they stretch hugely, return to shape, and their curve has no straight Hooke's-law part.`,
          },
          {
            type: "example",
            title: "Stress and strain in a stretched wire",
            problem: t`A wire 2.0 m long with a diameter of 1.0 mm hangs from a hook. A 10 kg mass is attached and the wire stretches by 1.2 mm. Find the stress, the strain and the ratio stress/strain. Take $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`Force $F = mg = 10 \times 9.8 = 98\ \text{N}$.`,
              t`Area $A = \pi r^2 = \pi (0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}\ \text{m}^2$.`,
              t`Stress $= F/A = 98 / 7.85 \times 10^{-7} = 1.25 \times 10^{8}\ \text{Pa}$.`,
              t`Strain $= \Delta L / L = 1.2 \times 10^{-3} / 2.0 = 6.0 \times 10^{-4}$ (no unit).`,
              t`Stress/strain $= 1.25 \times 10^{8} / 6.0 \times 10^{-4} \approx 2.1 \times 10^{11}\ \text{Pa}$, close to the value for steel.`,
            ],
            answer: t`Stress $\approx 1.25 \times 10^{8}$ Pa, strain $= 6.0 \times 10^{-4}$, ratio $\approx 2.1 \times 10^{11}$ Pa.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 4.0 m long rod is stretched by 2.0 mm. Its strain is n × 10⁻⁴. Find n.",
                answer: 5,
                explain: t`Strain $= 2.0 \times 10^{-3} / 4.0 = 5 \times 10^{-4}$, so $n = 5$. Convert mm to m before dividing.`,
              },
              {
                kind: "mcq",
                q: "Which pair has the same dimensions?",
                options: ["Stress and strain", "Stress and pressure", "Strain and force", "Stress and force"],
                answer: 1,
                explain: t`Stress and pressure are both force per area, $[\text{ML}^{-1}\text{T}^{-2}]$. Strain has no dimensions.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Rubber is more elastic than steel, because it stretches so much more.",
            right: "Steel is more elastic than rubber: it needs a much larger stress to produce the same strain, so its modulus of elasticity is far greater.",
            why: "In everyday speech 'elastic' means 'stretchy'. In physics, elasticity is measured by the modulus: the stress needed per unit strain. A bigger modulus means a stiffer, more elastic material.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the points on a metal's stress–strain curve.",
              items: ["Proportional limit", "Yield point (elastic limit)", "Ultimate tensile strength", "Fracture point"],
              explain: "Hooke's law holds only up to the proportional limit. After the yield point the deformation becomes permanent; the highest stress is the ultimate tensile strength, and the wire breaks at the fracture point.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A 2–3 mark question often asks you to draw the stress–strain curve. Put strain on the x-axis and stress on the y-axis, label the proportional limit, yield point, ultimate strength and fracture point, and shade or mark the elastic and plastic regions. Unlabelled curves lose marks. Always write the unit Pa with stress and 'no unit' with strain.",
          },
          {
            type: "keypoints",
            items: [
              "Stress = restoring force per unit area (Pa); strain = fractional change (no unit).",
              "Three pairs: longitudinal, shearing and volume stress and strain.",
              "Hooke's law: stress ∝ strain for small deformations; the constant is the modulus of elasticity.",
              "Curve: proportional limit → yield point → ultimate tensile strength → fracture.",
              "Ductile: wide plastic region; brittle: breaks soon after the elastic limit; elastomers: no straight part.",
            ],
          },
        ],
        flashcards: [
          { front: "Elasticity", back: "The property of a body by which it regains its original size and shape when the deforming force is removed." },
          { front: "Stress", back: "Restoring force per unit area. SI unit Pa (N m⁻²), dimensions [ML⁻¹T⁻²]." },
          { front: "Unit of strain", back: "None. Strain is a ratio of two like quantities." },
          { front: "Hooke's law", back: "For small deformations, stress is proportional to strain. Stress/strain = modulus of elasticity." },
          { front: "Yield strength", back: "The stress at the elastic limit (yield point); beyond it the deformation becomes permanent." },
          { front: "Ductile vs brittle", back: "Ductile: large plastic region before fracture (copper). Brittle: fractures soon after the elastic limit (glass, cast iron)." },
          { front: "Elastomer", back: "A material like rubber or the aorta that stretches greatly, recovers, and has no linear Hooke's-law region." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A cube of jelly has its top face pushed sideways while the base is held. The stress produced is:",
            options: ["Tensile stress", "Compressive stress", "Shearing stress", "Hydraulic stress"],
            answer: 2,
            explain: "The force is parallel to the face, so it is a tangential (shearing) stress.",
          },
          {
            kind: "mcq",
            q: "A submarine hull deep in the sea is under:",
            options: ["Shearing stress", "Hydraulic (volume) stress", "Only tensile stress", "No stress, since water pushes equally everywhere"],
            answer: 1,
            explain: "Water presses normally on every face with the same pressure, which is hydraulic stress. It produces a volume strain.",
          },
          {
            kind: "truefalse",
            q: "Hooke's law holds right up to the fracture point of a metal wire.",
            answer: false,
            explain: "It holds only up to the proportional limit. Beyond it the curve bends and, past the yield point, the deformation is plastic.",
          },
          {
            kind: "numeric",
            q: "A 50 kg load hangs from a rod of cross-section 2.0 cm². Find the stress in units of 10⁶ Pa. (g = 9.8 m s⁻²)",
            answer: 2.45,
            tolerance: 0.02,
            unit: "× 10⁶ Pa",
            explain: t`$F = 50 \times 9.8 = 490$ N, $A = 2.0 \times 10^{-4}$ m², stress $= 490 / 2.0 \times 10^{-4} = 2.45 \times 10^{6}$ Pa.`,
          },
          {
            kind: "mcq",
            q: "On a stress–strain curve, a material whose fracture point lies very close to its elastic limit is:",
            options: ["Ductile", "Brittle", "An elastomer", "Perfectly plastic"],
            answer: 1,
            explain: "Little plastic region means the material snaps without drawing out, which is brittle behaviour (glass, cast iron).",
          },
          {
            kind: "multi",
            q: "Which statements are correct?",
            options: [
              "Strain is dimensionless",
              "The modulus of elasticity has the same unit as stress",
              "A wire unloaded after the yield point returns exactly to its original length",
              "Rubber shows a straight Hooke's-law region up to large strains",
            ],
            answers: [0, 1],
            explain: "Strain is a ratio, so modulus = stress/strain has the unit of stress. After the yield point there is a permanent set, and rubber's curve has no straight part.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The deformation that remains after the load is removed from a wire stretched beyond its yield point is called a permanent ___.",
            answer: ["set"],
            explain: "The leftover strain is called the permanent set; it shows plastic deformation.",
          },
        ],
      },
      {
        slug: "c11-phy-elastic-moduli",
        title: "Elastic Moduli, Poisson's Ratio and Elastic Energy",
        summary: "Young's modulus and its measurement, shear and bulk moduli, Poisson's ratio, energy stored in a stretched wire and how engineers use these numbers.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Young's modulus** $Y$ is the ratio of tensile (or compressive) stress to longitudinal strain, within the elastic limit. For a wire of length $L$ and area $A$ stretched by $\Delta L$ by a force $F$, $Y = FL/(A\,\Delta L)$.

In the lab it is found with **Searle's apparatus**: two long wires of the same material hang from one support. The reference wire carries a fixed load and a spirit level; the experimental wire carries a pan. As loads are added, the tilt of the spirit level is removed with a micrometer screw, which reads the extension. A graph of extension against load is a straight line, and its slope gives $Y$.`,
          },
          {
            type: "formula",
            tex: t`Y = \frac{F/A}{\Delta L / L} = \frac{F L}{A\,\Delta L} \qquad\Rightarrow\qquad \Delta L = \frac{F L}{A Y}`,
            caption: "Y is a property of the material. A longer or thinner wire stretches more, but its Y is the same.",
          },
          {
            type: "table",
            headers: ["Material", t`Young's modulus $Y$ (approx.)`],
            rows: [
              ["Steel", t`$2.0 \times 10^{11}$ Pa`],
              ["Iron", t`$1.9 \times 10^{11}$ Pa`],
              ["Copper", t`$1.2 \times 10^{11}$ Pa`],
              ["Brass", t`$0.91 \times 10^{11}$ Pa`],
              ["Aluminium", t`$0.70 \times 10^{11}$ Pa`],
            ],
          },
          {
            type: "example",
            title: "Searle's experiment",
            problem: t`In a Searle's experiment the wire is 3.0 m long with a diameter of 0.60 mm. Adding 4.0 kg to the pan increases the micrometer reading by 2.08 mm. Find Y. ($g = 9.8\ \text{m s}^{-2}$)`,
            steps: [
              t`$F = 4.0 \times 9.8 = 39.2$ N; $A = \pi (0.30 \times 10^{-3})^2 = 2.83 \times 10^{-7}$ m².`,
              t`$Y = \dfrac{FL}{A\,\Delta L} = \dfrac{39.2 \times 3.0}{2.83 \times 10^{-7} \times 2.08 \times 10^{-3}}$.`,
              t`Numerator $= 117.6$; denominator $= 5.88 \times 10^{-10}$.`,
              t`$Y = 117.6 / 5.88 \times 10^{-10} = 2.0 \times 10^{11}$ Pa.`,
            ],
            answer: t`$Y \approx 2.0 \times 10^{11}$ Pa, so the wire is probably steel.`,
          },
          {
            type: "text",
            md: t`**Shear modulus** (modulus of rigidity) $G$ is shearing stress ÷ shearing strain. For most solids $G$ is roughly $Y/3$, so solids resist shearing less than stretching.

**Bulk modulus** $B$ is hydraulic stress (the pressure change $p$) ÷ volume strain. A rise in pressure *decreases* the volume, so a minus sign keeps $B$ positive. Its reciprocal is the **compressibility** $k = 1/B$. Solids have the largest $B$ (steel about $1.6 \times 10^{11}$ Pa), liquids less (water about $2.2 \times 10^{9}$ Pa) and gases the least (air about $10^{5}$ Pa), which is why gases are easiest to compress. Only $B$ is defined for liquids and gases; they have no fixed shape, so no $Y$ or $G$.`,
          },
          {
            type: "formula",
            tex: t`G = \frac{F/A}{\theta}, \qquad B = -\frac{p}{\Delta V / V}, \qquad k = \frac{1}{B}`,
            caption: "The minus sign in B only cancels the negative ΔV; B itself is positive.",
          },
          {
            type: "example",
            title: "Water under a deep reservoir",
            problem: t`By what percentage is water compressed at the bottom of a lake 1000 m deep, compared with water at the surface? Take $B_{water} = 2.2 \times 10^{9}$ Pa, $\rho = 1000\ \text{kg m}^{-3}$, $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`Extra pressure $p = \rho g h = 1000 \times 9.8 \times 1000 = 9.8 \times 10^{6}$ Pa.`,
              t`$\left|\Delta V / V\right| = p / B = 9.8 \times 10^{6} / 2.2 \times 10^{9} = 4.45 \times 10^{-3}$.`,
              t`As a percentage: $4.45 \times 10^{-3} \times 100 \approx 0.45\%$.`,
            ],
            answer: "The water is compressed by only about 0.45%, which is why liquids are treated as incompressible in most problems.",
          },
          {
            type: "text",
            md: t`**Poisson's ratio.** When a wire is stretched it also becomes thinner. The ratio of lateral strain $(\Delta d/d)$ to longitudinal strain $(\Delta L/L)$, taken as a positive number, is **Poisson's ratio** $\sigma$. It has no unit. For steel $\sigma \approx 0.28$–$0.30$; for most materials it lies between 0 and 0.5.

*Board note:* some recent printings of the rationalised NCERT book shorten this subsection, but ISC, Karnataka PUC question papers and JEE still use Poisson's ratio.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Wires P and Q are of the same material. P is twice as long as Q and has half the diameter. Under the same load, how many times Q's extension is P's extension?",
                answer: 8,
                explain: t`$\Delta L = FL/(AY)$ with $A \propto d^2$. $\Delta L_P/\Delta L_Q = (L_P/L_Q)(d_Q/d_P)^2 = 2 \times 4 = 8$.`,
                hint: "Area goes as the square of the diameter.",
              },
            ],
          },
          {
            type: "heading",
            text: "Elastic potential energy in a stretched wire",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the energy derivation in order.",
              items: [
                "At extension l, the force in the wire is F = YAl/L",
                "Work to stretch a further dl is dW = F dl = (YA/L) l dl",
                "Integrate from l = 0 to l = ΔL: W = YA(ΔL)²/(2L)",
                "Rewrite as W = ½ × F × ΔL, with F the final load",
                "Divide by volume AL: u = ½ × stress × strain",
              ],
              explain: "The force grows from zero to F as the wire stretches, so the average force is F/2. That is why the stored energy is ½ F ΔL, not F ΔL.",
            },
          },
          {
            type: "formula",
            tex: t`U = \tfrac{1}{2} F\,\Delta L, \qquad u = \frac{U}{\text{volume}} = \tfrac{1}{2}\,\text{stress}\times\text{strain} = \tfrac{1}{2} Y (\text{strain})^2 = \frac{(\text{stress})^2}{2Y}`,
            caption: "u is the elastic energy density, in J m⁻³.",
          },
          {
            type: "example",
            title: "Energy in the wire",
            problem: "For the steel wire of Lesson 1 (98 N load, extension 1.2 mm), how much elastic energy is stored?",
            steps: [
              t`$U = \tfrac{1}{2} F \Delta L = \tfrac{1}{2} \times 98 \times 1.2 \times 10^{-3}$.`,
              t`$U = 5.88 \times 10^{-2}$ J.`,
            ],
            answer: "About 0.059 J (59 mJ).",
          },
          {
            type: "mistake",
            wrong: "A thicker or longer steel wire has a different Young's modulus from a thin, short one.",
            right: "Young's modulus depends only on the material (and slightly on temperature). Changing L or A changes the extension, not Y.",
            why: t`$\Delta L = FL/(AY)$ contains $L$ and $A$, so learners think Y must change with them. But Y is the stress/strain ratio, and both stress and strain already divide out the size.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Applications the board asks about",
            md: t`**Crane ropes:** the rope must carry the load with stress below the yield strength, so the minimum area is $A = mg/\sigma_y$. A safety factor (often about 10) is applied, and the rope is made of many thin wires twisted together for flexibility. **Beams:** a beam of length $l$, breadth $b$ and depth $d$ loaded at the centre sags by $\delta = Wl^3/(4bd^3Y)$. Since $\delta \propto 1/d^3$, beams are made deep, and the **I-section** saves material while keeping the depth. **Mountains:** the rock at the base must stay below its elastic limit, which limits mountain height on Earth to about 10 km.`,
          },
          {
            type: "keypoints",
            items: [
              "Y = FL/(AΔL); G = shear stress/shear strain; B = −p/(ΔV/V); compressibility = 1/B.",
              "For most solids G ≈ Y/3; liquids and gases have only a bulk modulus.",
              "Poisson's ratio = lateral strain ÷ longitudinal strain, between 0 and 0.5 in practice.",
              "Stored energy U = ½ FΔL; energy density = ½ stress × strain.",
              "Deep beams and I-sections resist bending because sag ∝ 1/d³.",
            ],
          },
        ],
        flashcards: [
          { front: "Young's modulus", back: "Longitudinal stress ÷ longitudinal strain: Y = FL/(AΔL). Steel ≈ 2 × 10¹¹ Pa." },
          { front: "Shear modulus (rigidity)", back: "Shearing stress ÷ shearing strain, G = (F/A)/θ. Usually about Y/3." },
          { front: "Bulk modulus", back: "B = −p/(ΔV/V). Positive; largest for solids, smallest for gases." },
          { front: "Compressibility", back: "The reciprocal of bulk modulus, k = 1/B." },
          { front: "Poisson's ratio", back: "Lateral strain ÷ longitudinal strain (no unit); about 0.3 for steel." },
          { front: "Energy stored in a stretched wire", back: "U = ½ F ΔL = ½ × stress × strain × volume." },
          { front: "Elastic energy density", back: "u = ½ stress × strain = ½ Y strain² = stress²/(2Y), in J m⁻³." },
          { front: "Why I-section beams?", back: "Sag δ ∝ 1/(bd³). Depth matters most, so an I-shape keeps the depth while saving material and weight." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The SI unit of bulk modulus is:",
            options: ["N m", "N m⁻²", "m² N⁻¹", "It has no unit"],
            answer: 1,
            explain: "Bulk modulus = pressure ÷ volume strain, and strain has no unit, so B is in N m⁻² (Pa). m² N⁻¹ is the unit of compressibility.",
          },
          {
            kind: "numeric",
            q: "A 2.0 m copper wire of cross-section 1.0 mm² carries a load of 60 N. Y(copper) = 1.2 × 10¹¹ Pa. Find its extension in mm.",
            answer: 1,
            tolerance: 0.01,
            unit: "mm",
            explain: t`$\Delta L = FL/(AY) = 60 \times 2.0 / (1.0 \times 10^{-6} \times 1.2 \times 10^{11}) = 120 / 1.2 \times 10^{5} = 1.0 \times 10^{-3}$ m $= 1.0$ mm.`,
          },
          {
            kind: "mcq",
            q: "Which of these has a bulk modulus but no Young's modulus or shear modulus?",
            options: ["Steel", "Glass", "Water", "Copper"],
            answer: 2,
            explain: "A liquid has no fixed shape, so it cannot have a tensile or shear modulus. It resists only changes of volume.",
          },
          {
            kind: "numeric",
            q: "A wire stretched by a 200 N load extends by 2.0 mm. How much elastic energy (in joule) is stored?",
            answer: 0.2,
            tolerance: 0.005,
            unit: "J",
            explain: t`$U = \tfrac{1}{2} F \Delta L = \tfrac{1}{2} \times 200 \times 2.0 \times 10^{-3} = 0.20$ J. Using $F \Delta L = 0.4$ J forgets the factor ½.`,
          },
          {
            kind: "mcq",
            q: "The elastic energy density in a wire with stress S and Young's modulus Y is:",
            options: ["S/Y", "S²/Y", "S²/(2Y)", "2S²/Y"],
            answer: 2,
            explain: t`$u = \tfrac{1}{2}\,\text{stress} \times \text{strain} = \tfrac{1}{2} S (S/Y) = S^2/(2Y)$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Poisson's ratio has the unit N m⁻².",
            answer: false,
            explain: "It is a ratio of two strains, so it has no unit at all.",
          },
          {
            kind: "mcq",
            q: "To make a horizontal beam sag least under a central load, a builder should mainly increase its:",
            options: ["Length", "Breadth", "Depth", "Density"],
            answer: 2,
            explain: t`$\delta = Wl^3/(4bd^3Y)$. Doubling the depth cuts the sag to 1/8, while doubling the breadth only halves it. Increasing the length makes sag much worse.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Select the correct statements.",
            options: [
              "Gases are more compressible than solids",
              "Compressibility is the reciprocal of bulk modulus",
              "Bulk modulus is negative because volume decreases",
              "Young's modulus of a wire depends on its length",
            ],
            answers: [0, 1],
            explain: "Gases have the smallest B and so the largest compressibility k = 1/B. The minus sign makes B positive, and Y is a material property.",
          },
        ],
      },
      {
        slug: "c11-phy-solids-exam",
        title: "Exam edge: Elasticity for JEE, NEET and CETs",
        summary: "Wire-extension ratios, thermal stress, sag under own weight, wires as springs and the rotating-rod problem, with the traps examiners set.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** NEET, KCET and COMEDK usually set one direct question from this chapter: an extension or ratio using $\Delta L = FL/(AY)$, the stress–strain curve, units of the moduli, or energy stored. JEE Main adds thermal stress, a wire treated as a spring, and the elongation of a hanging rod under its own weight. JEE Advanced combines elasticity with rotation, SHM or heat: a rotating rod, a block oscillating on a wire, or a rod clamped between walls and heated.

This chapter is short, so the marks are cheap: learn the five results below and when each is safe.`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe"],
            rows: [
              [t`Wire as a spring: $k = YA/L$`, "Within the elastic limit; wires in series or parallel then combine like springs."],
              [t`Same material, same **volume**: $\Delta L \propto L^2$, or $\Delta L \propto 1/d^4$`, t`Only when both wires have equal volume (equal mass), because then $A \propto 1/L$.`],
              [t`Thermal stress $= Y\alpha\,\Delta T$, force $= YA\alpha\,\Delta T$`, "Rod held between rigid supports that do not move; independent of the rod's length."],
              [t`Own weight: $\Delta L = \dfrac{MgL}{2AY} = \dfrac{\rho g L^2}{2Y}$`, "Uniform rod hanging from one end; it equals the extension from half the weight hung at the end."],
              [t`Volume change: $\Delta V/V = \varepsilon(1 - 2\sigma)$`, t`Small strain $\varepsilon$; with $\sigma = 0.5$ the volume does not change.`],
            ],
          },
          {
            type: "example",
            title: "KCET / NEET level: equal masses",
            problem: "Two copper wires have the same mass. Wire A is 1 m long and wire B is 2 m long. The same load hangs on each. Find the ratio of their extensions.",
            steps: [
              t`Same mass and material means the same volume: $A_A L_A = A_B L_B$, so $A_B = A_A/2$.`,
              t`$\Delta L = FL/(AY)$, so $\dfrac{\Delta L_A}{\Delta L_B} = \dfrac{L_A}{L_B}\cdot\dfrac{A_B}{A_A} = \dfrac{1}{2}\cdot\dfrac{1}{2}$.`,
              t`This matches the shortcut $\Delta L \propto L^2$: $(1/2)^2 = 1/4$.`,
            ],
            answer: "ΔL_A : ΔL_B = 1 : 4.",
          },
          {
            type: "example",
            title: "JEE Main level: thermal stress",
            problem: t`A steel rod of cross-section 2.0 cm² is fixed between two rigid walls at 20 °C. It is heated to 70 °C. Find the stress and the force on each wall. $Y = 2.0 \times 10^{11}$ Pa, $\alpha = 1.2 \times 10^{-5}\ \text{K}^{-1}$.`,
            steps: [
              t`If free, the rod would expand by $\Delta L = L\alpha\Delta T$. The walls push it back by the same amount, so the strain is $\alpha\Delta T$.`,
              t`Strain $= 1.2 \times 10^{-5} \times 50 = 6.0 \times 10^{-4}$.`,
              t`Stress $= Y \times \text{strain} = 2.0 \times 10^{11} \times 6.0 \times 10^{-4} = 1.2 \times 10^{8}$ Pa (compressive).`,
              t`Force $= \text{stress} \times A = 1.2 \times 10^{8} \times 2.0 \times 10^{-4} = 2.4 \times 10^{4}$ N.`,
            ],
            answer: t`Stress $1.2 \times 10^{8}$ Pa; force $2.4 \times 10^{4}$ N on each wall, whatever the rod's length.`,
          },
          {
            type: "example",
            title: "JEE Main level: hanging under its own weight",
            problem: t`A uniform steel rod 10 m long hangs vertically from its top end. Find its elongation due to its own weight. $\rho = 8000\ \text{kg m}^{-3}$, $Y = 2.0 \times 10^{11}$ Pa, $g = 10\ \text{m s}^{-2}$.`,
            steps: [
              t`At distance $x$ from the bottom, the tension supports the rod below: $T(x) = \rho A g x$.`,
              t`A slice $dx$ stretches by $T\,dx/(AY) = \rho g x\,dx / Y$.`,
              t`Integrate from 0 to $L$: $\Delta L = \rho g L^2/(2Y)$.`,
              t`$\Delta L = 8000 \times 10 \times 100 / (2 \times 2.0 \times 10^{11}) = 8.0 \times 10^{6} / 4.0 \times 10^{11} = 2.0 \times 10^{-5}$ m.`,
            ],
            answer: "About 0.02 mm, half of what the full weight would give if hung at the end.",
          },
          {
            type: "example",
            title: "JEE Advanced level: a rotating rod",
            problem: t`A uniform rod of length $L$, density $\rho$ and Young's modulus $Y$ rotates in a horizontal plane about a vertical axis through one end with angular speed $\omega$. Find its total elongation. Evaluate for steel ($\rho = 8000\ \text{kg m}^{-3}$, $Y = 2.0 \times 10^{11}$ Pa), $L = 1.0$ m, $\omega = 100\ \text{rad s}^{-1}$.`,
            steps: [
              t`The tension at distance $x$ from the axis supplies the centripetal force for all the rod beyond $x$: $T(x) = \int_x^L \rho A \omega^2 r\,dr = \tfrac{1}{2}\rho A\omega^2 (L^2 - x^2)$.`,
              t`The element $dx$ stretches by $T\,dx/(AY) = \dfrac{\rho\omega^2}{2Y}(L^2 - x^2)\,dx$.`,
              t`Integrate from 0 to $L$: $\Delta L = \dfrac{\rho\omega^2}{2Y}\cdot\dfrac{2L^3}{3} = \dfrac{\rho\omega^2 L^3}{3Y}$.`,
              t`Numbers: $\Delta L = 8000 \times 10^{4} \times 1 / (3 \times 2.0 \times 10^{11}) = 8.0 \times 10^{7}/6.0 \times 10^{11} = 1.33 \times 10^{-4}$ m.`,
            ],
            answer: t`$\Delta L = \rho\omega^2L^3/(3Y) \approx 0.13$ mm. The tension is greatest at the axis, $\tfrac{1}{2}\rho A\omega^2L^2$, so a rod breaks there first.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A wire of length 1.0 m and cross-section 1.0 mm² has Y = 2.0 × 10¹¹ Pa. Treated as a spring, its force constant is n × 10⁵ N m⁻¹. Find n.",
                answer: 2,
                explain: t`$k = YA/L = 2.0 \times 10^{11} \times 1.0 \times 10^{-6} / 1.0 = 2.0 \times 10^{5}$ N m⁻¹.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A longer rod clamped between walls and heated pushes harder on the walls.",
            right: t`Thermal stress is $Y\alpha\Delta T$ and the force is $YA\alpha\Delta T$; the length cancels.`,
            why: "A longer rod tries to expand more, but it also needs a larger compression to produce the same strain. Strain = αΔT is the same for any length.",
          },
          {
            type: "mistake",
            wrong: "For a rod hanging under its own weight, use the full weight Mg in ΔL = FL/(AY).",
            right: t`Use $\Delta L = MgL/(2AY)$: the tension falls from $Mg$ at the top to zero at the bottom, so on average it is $Mg/2$.`,
            why: "Only the top slice carries the whole weight. Lower slices carry less, so they stretch less.",
          },
          {
            type: "mistake",
            wrong: "When a rod is compressed by a load, the stored energy is negative.",
            right: "Elastic energy ½ × stress × strain × volume is positive for both stretching and compression.",
            why: "Both stress and strain change sign together in compression, so their product, and the work done on the rod, stays positive.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each situation to the result you should use.",
              pairs: [
                ["Rod clamped between walls and heated", "Stress = YαΔT"],
                ["Uniform rod hanging under its own weight", "ΔL = ρgL²/(2Y)"],
                ["Block hanging on a wire, small vertical oscillations", "k = YA/L"],
                ["Two wires, same material and same mass", "ΔL ∝ L²"],
                ["Rod rotating about one end", "ΔL = ρω²L³/(3Y)"],
              ],
              explain: "Spot the setup first: fixed ends mean thermal stress, a distributed load means integrate the tension, and a mass on a wire is a spring with k = YA/L.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Speed check",
            md: t`For ratio questions, write $\Delta L \propto \dfrac{FL}{d^2Y}$ and plug in only the ratios. Never compute each extension separately. A block of mass $m$ on a wire oscillates with period $2\pi\sqrt{mL/(YA)}$, which is JEE Main's favourite link to SHM.`,
          },
          {
            type: "keypoints",
            items: [
              "Wire = spring with k = YA/L; series and parallel combine like springs.",
              "Same volume: ΔL ∝ L² ∝ 1/d⁴.",
              "Thermal stress YαΔT does not depend on length.",
              "Own weight: half the weight at the end; rotating rod: ρω²L³/(3Y).",
              "Energy density ½ stress × strain is always positive.",
            ],
          },
        ],
        flashcards: [
          { front: "Force constant of a wire", back: "k = YA/L. A mass m on it oscillates with T = 2π√(mL/YA)." },
          { front: "Thermal stress in a clamped rod", back: "Y α ΔT; force = Y A α ΔT. Length does not matter." },
          { front: "Elongation of a hanging rod under its own weight", back: "ΔL = MgL/(2AY) = ρgL²/(2Y)." },
          { front: "Extension ratio, same material and same mass", back: "ΔL ∝ L² (equivalently ∝ 1/d⁴)." },
          { front: "Elongation of a rod rotating about one end", back: "ΔL = ρω²L³/(3Y); tension is maximum at the axis." },
          { front: "Volume strain from Poisson's ratio", back: "ΔV/V = ε(1 − 2σ). For σ = 0.5 the volume is unchanged." },
          { front: "Pressure needed to stop a liquid expanding on heating", back: "p = B × γΔT, where γ is the volume expansion coefficient." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Two wires of the same material have lengths in the ratio 1 : 2 and diameters in the ratio 2 : 1. Under equal loads, the ratio of their extensions is:",
            options: ["1 : 2", "1 : 4", "1 : 8", "8 : 1"],
            answer: 2,
            explain: t`$\Delta L \propto L/d^2$: $(1/2) \times (1/2)^2 = 1/8$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "An aluminium rod (Y = 7.0 × 10¹⁰ Pa, α = 2.5 × 10⁻⁵ K⁻¹) is fixed between rigid walls and heated by 40 K. Find the thermal stress in units of 10⁷ Pa.",
            answer: 7,
            tolerance: 0.05,
            unit: "× 10⁷ Pa",
            explain: t`Stress $= Y\alpha\Delta T = 7.0 \times 10^{10} \times 2.5 \times 10^{-5} \times 40 = 7.0 \times 10^{7}$ Pa.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A block hangs from a steel wire of length L and area A. If the wire is replaced by one of the same material with length 2L and area 2A, the period of small vertical oscillations:",
            options: ["Doubles", "Halves", "Stays the same", "Increases by √2"],
            answer: 2,
            explain: t`$k = YA/L$ is unchanged when both L and A double, so $T = 2\pi\sqrt{m/k}$ is unchanged.`,
            difficulty: 2,
            hint: "Find the new k = YA/L first.",
          },
          {
            kind: "numeric",
            q: "A uniform rubber cord 2.0 m long hangs vertically. Density 1500 kg m⁻³, Y = 5.0 × 10⁶ Pa, g = 10 m s⁻². Find its extension under its own weight, in mm.",
            answer: 6,
            tolerance: 0.05,
            unit: "mm",
            explain: t`$\Delta L = \rho g L^2/(2Y) = 1500 \times 10 \times 4 / (2 \times 5.0 \times 10^{6}) = 6.0 \times 10^{4}/1.0 \times 10^{7} = 6.0 \times 10^{-3}$ m $= 6.0$ mm.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A wire is stretched within its elastic limit. Which statements are correct?",
            options: [
              "Energy stored per unit volume is ½ × stress × strain",
              "Doubling the load doubles the stored energy",
              "Doubling the load doubles the extension",
              "Energy stored = ½ × load × extension",
            ],
            answers: [0, 2, 3],
            explain: t`Extension ∝ load, so $U = \tfrac{1}{2}F\Delta L \propto F^2$: doubling the load makes U four times, not twice.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Steel rod (ρ = 8000 kg m⁻³, Y = 2.0 × 10¹¹ Pa), length 1.0 m, rotates about one end at ω = 50 rad s⁻¹ in a horizontal plane. Find its elongation in units of 10⁻⁵ m.",
            answer: 3.33,
            tolerance: 0.05,
            unit: "× 10⁻⁵ m",
            explain: t`$\Delta L = \rho\omega^2L^3/(3Y) = 8000 \times 2500 \times 1 / (6.0 \times 10^{11}) = 2.0 \times 10^{7} / 6.0 \times 10^{11} = 3.33 \times 10^{-5}$ m.`,
            difficulty: 3,
            hint: "Tension at x is ½ρAω²(L² − x²); integrate T dx/(AY).",
          },
          {
            kind: "mcq",
            q: "A material has Poisson's ratio 0.5. When a rod of it is stretched slightly, its volume:",
            options: ["Increases", "Decreases", "Stays the same", "Depends on the load"],
            answer: 2,
            explain: t`$\Delta V/V = \varepsilon(1 - 2\sigma) = 0$ for $\sigma = 0.5$. Rubber is close to this.`,
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "To stop water (B = 2.2 × 10⁹ Pa, γ = 2.1 × 10⁻⁴ K⁻¹) expanding when heated by 10 K, the pressure needed is about:",
            options: ["4.6 × 10⁵ Pa", "4.6 × 10⁶ Pa", "4.6 × 10⁷ Pa", "2.1 × 10⁵ Pa"],
            answer: 1,
            explain: t`$p = B\gamma\Delta T = 2.2 \times 10^{9} \times 2.1 \times 10^{-4} \times 10 = 4.62 \times 10^{6}$ Pa, about 46 atm.`,
            difficulty: 3,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Mechanical Properties of Fluids (NCERT)                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-fluids",
    title: "Mechanical Properties of Fluids",
    icon: "💧",
    description: "Pressure and Pascal's law, hydraulic machines, buoyancy, streamline flow, Bernoulli's principle, viscosity and Stokes' law, terminal velocity, surface tension and capillarity.",
    lessons: [
      {
        slug: "c11-phy-pressure-pascal",
        title: "Pressure, Pascal's Law and Buoyancy",
        summary: "Pressure in a fluid, how it changes with depth, atmospheric and gauge pressure, Pascal's law and hydraulic machines, and Archimedes' principle.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚗",
            caption: "At a roadside garage, a mechanic lifts a whole car with one hand on a lever. The trick is a liquid that passes pressure on without loss.",
          },
          {
            type: "text",
            md: t`A **fluid** is anything that can flow: liquids and gases. A fluid at rest cannot resist a shearing force, so the force it exerts on any surface in contact with it is always **normal** to that surface.

**Pressure** is the normal force per unit area, $P = F/A$. It is a **scalar**: at a point in a fluid at rest it has the same value in every direction. Its SI unit is the pascal ($1\ \text{Pa} = 1\ \text{N m}^{-2}$). Other units: $1\ \text{atm} = 1.013 \times 10^{5}$ Pa, $1\ \text{bar} = 10^{5}$ Pa, $1\ \text{torr} = 1$ mm of Hg. **Density** $\rho = m/V$; **relative density** is density ÷ density of water at 4 °C and has no unit.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Take a vertical cylinder of liquid, cross-section $A$, top at depth 0 with pressure $P_a$, bottom at depth $h$ with pressure $P$.`,
              t`Horizontal forces on the sides cancel. Vertically, the forces are $PA$ upward, $P_aA$ downward and the weight $mg = \rho A h g$ downward.`,
              t`In equilibrium: $PA = P_aA + \rho Ahg$.`,
              t`Divide by $A$: $P = P_a + \rho g h$.`,
            ],
          },
          {
            type: "formula",
            tex: t`P = P_a + \rho g h, \qquad P_{gauge} = P - P_a = \rho g h`,
            caption: "Pressure depends only on depth (and the fluid's density), not on the shape of the vessel or the area of its base.",
          },
          {
            type: "text",
            md: t`Because pressure depends only on depth, the pressure is the **same at all points at the same depth** in a connected liquid at rest. Three jars of different shapes filled to the same height have the same pressure at the bottom. This surprising result is the **hydrostatic paradox**.

**Atmospheric pressure** at sea level is the weight of the air column above each square metre. A **mercury barometer** balances it with about 76 cm of mercury: $\rho g h = 13.6 \times 10^{3} \times 9.8 \times 0.76 \approx 1.013 \times 10^{5}$ Pa. Tyre gauges and **open-tube manometers** read **gauge pressure**, the excess over atmospheric pressure.`,
          },
          {
            type: "example",
            title: "Diving off Lakshadweep",
            problem: t`A diver is 10 m below the surface of the sea. Find the absolute and gauge pressure on her. Sea water density $= 1030\ \text{kg m}^{-3}$, $P_a = 1.013 \times 10^{5}$ Pa, $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`Gauge pressure $= \rho g h = 1030 \times 9.8 \times 10 = 1.01 \times 10^{5}$ Pa.`,
              t`Absolute pressure $= P_a + \rho g h = 1.013 \times 10^{5} + 1.009 \times 10^{5} = 2.02 \times 10^{5}$ Pa.`,
            ],
            answer: "Gauge pressure ≈ 1.01 × 10⁵ Pa; absolute pressure ≈ 2.02 × 10⁵ Pa, about 2 atm. Every 10 m of sea water adds roughly one atmosphere.",
          },
          {
            type: "text",
            md: t`**Pascal's law:** a change in pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the walls of the container. (Pascal's law in its first form says the pressure at a point in a fluid at rest is the same in all directions.)

In a **hydraulic lift**, a small force $F_1$ on a small piston of area $A_1$ creates a pressure $F_1/A_1$. The same pressure acts on the large piston, so $F_2 = F_1 \times A_2/A_1$. Energy is not created: the small piston moves through a larger distance, $A_1 d_1 = A_2 d_2$. Hydraulic brakes in cars and buses work the same way.`,
          },
          {
            type: "example",
            title: "Hydraulic lift",
            problem: "A hydraulic lift has a large piston of radius 15 cm and a small piston of radius 1.5 cm. What force on the small piston lifts a 1500 kg car? (g = 9.8 m s⁻²)",
            steps: [
              t`Weight $F_2 = 1500 \times 9.8 = 14\,700$ N.`,
              t`Area ratio $A_1/A_2 = (r_1/r_2)^2 = (1.5/15)^2 = 1/100$.`,
              t`$F_1 = F_2 \times A_1/A_2 = 14\,700/100 = 147$ N.`,
            ],
            answer: "About 147 N, roughly the weight of a 15 kg mass.",
          },
          {
            type: "text",
            md: t`**Buoyancy.** The pressure on the lower face of a submerged body is greater than on the upper face, so the fluid pushes it up with a net **buoyant force** (upthrust). **Archimedes' principle:** the buoyant force equals the weight of the fluid displaced, $F_B = \rho_{fluid} V_{sub}\, g$.

A body **floats** when the buoyant force on its submerged part equals its weight. Then $\rho_{body} V = \rho_{fluid} V_{sub}$, so the fraction submerged is $V_{sub}/V = \rho_{body}/\rho_{fluid}$. Apparent weight in a liquid = true weight − buoyant force.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Ice (density 917 kg m⁻³) floats in fresh water (1000 kg m⁻³). What percentage of its volume is under water?",
                answer: 91.7,
                tolerance: 0.3,
                unit: "%",
                explain: t`Fraction submerged $= \rho_{ice}/\rho_{water} = 917/1000 = 0.917$, i.e. 91.7%. Only about 8% shows above the surface.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A wide tank holds more water, so the pressure at its bottom is greater than in a narrow tube filled to the same height.",
            right: t`Pressure at the bottom is $P_a + \rho g h$ in both. The wide tank has a larger **force** on its base (more area), not a larger pressure.`,
            why: "Learners mix up total weight with pressure. The sloping or extra walls carry part of the weight, and only the depth sets the pressure.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Three jars, same water height: where is bottom pressure greatest?",
              emoji: "🫙",
              options: ["The widest jar", "The narrow jar", "All three are equal"],
              answer: 2,
              trap: 0,
              explain: t`Pressure at depth $h$ is $P_a + \rho g h$. The shape of the jar and the amount of water do not appear in it, so all three bottoms feel the same pressure.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Derivations of P = Pₐ + ρgh and of the hydraulic lift (with Pascal's law stated first) are common 3-mark questions. Draw the cylinder or the two pistons and show the forces. In numericals, say clearly whether you report absolute or gauge pressure.",
          },
          {
            type: "keypoints",
            items: [
              "Pressure = normal force per area; scalar; unit Pa; 1 atm = 1.013 × 10⁵ Pa.",
              "P = Pₐ + ρgh; same depth → same pressure, whatever the vessel's shape.",
              "Gauge pressure = absolute − atmospheric.",
              "Pascal's law: pressure on an enclosed fluid is transmitted undiminished; F₂ = F₁A₂/A₁.",
              "Buoyant force = weight of fluid displaced; fraction submerged = ρ_body/ρ_fluid.",
            ],
          },
        ],
        flashcards: [
          { front: "Pressure at depth h", back: "P = Pₐ + ρgh. Gauge pressure is ρgh." },
          { front: "Hydrostatic paradox", back: "Vessels of different shapes filled to the same height have equal pressure at the bottom." },
          { front: "Pascal's law", back: "A change in pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and the walls." },
          { front: "Hydraulic lift", back: "F₂/F₁ = A₂/A₁; the small piston moves farther, so work in = work out (ideally)." },
          { front: "1 atmosphere", back: "1.013 × 10⁵ Pa = 76 cm of mercury = 760 torr." },
          { front: "Archimedes' principle", back: "A body in a fluid feels an upthrust equal to the weight of the fluid it displaces." },
          { front: "Fraction of a floating body under the surface", back: "ρ_body / ρ_fluid." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the gauge pressure 5.0 m below the surface of a water tank, in kPa. (ρ = 1000 kg m⁻³, g = 9.8 m s⁻²)",
            answer: 49,
            tolerance: 0.2,
            unit: "kPa",
            explain: t`$\rho g h = 1000 \times 9.8 \times 5.0 = 49\,000$ Pa $= 49$ kPa.`,
          },
          {
            kind: "mcq",
            q: "A hydraulic press has pistons of area 10 cm² and 500 cm². A 200 N force on the small piston can support a load of:",
            options: ["4 N", "200 N", "2500 N", "10 000 N"],
            answer: 3,
            explain: t`$F_2 = F_1 A_2/A_1 = 200 \times 500/10 = 10\,000$ N.`,
          },
          {
            kind: "truefalse",
            q: "Pressure is a vector, because it always acts normal to a surface.",
            answer: false,
            explain: "The force due to pressure is a vector normal to the surface, but pressure itself has no direction: at a point it is the same in all directions. It is a scalar.",
          },
          {
            kind: "numeric",
            q: "A wooden block of density 600 kg m⁻³ floats in water. What percentage of its volume is submerged?",
            answer: 60,
            tolerance: 0.5,
            unit: "%",
            explain: t`Fraction $= 600/1000 = 0.60$, i.e. 60%.`,
          },
          {
            kind: "mcq",
            q: "A stone weighs 10 N in air and 6 N when fully immersed in water. Its relative density is:",
            options: ["0.6", "1.67", "2.5", "4"],
            answer: 2,
            explain: "Loss of weight = 4 N = weight of equal volume of water. Relative density = 10/4 = 2.5.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which devices work on Pascal's law?",
            options: ["Hydraulic lift", "Hydraulic brakes", "Mercury thermometer", "Hydraulic press"],
            answers: [0, 1, 3],
            explain: "Lifts, brakes and presses transmit pressure through an enclosed liquid. A thermometer works by thermal expansion.",
          },
          {
            kind: "fill",
            q: "Standard atmospheric pressure supports a mercury column about ___ mm high.",
            answer: ["760"],
            explain: "76 cm = 760 mm of mercury, which is 1.013 × 10⁵ Pa.",
          },
        ],
      },
      {
        slug: "c11-phy-flow-bernoulli-viscosity",
        title: "Fluid Flow: Bernoulli's Principle and Viscosity",
        summary: "Streamline and turbulent flow, the equation of continuity, Bernoulli's equation and its uses, viscosity, Stokes' law, terminal velocity and Reynolds number.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`In **steady (streamline) flow**, the velocity of the fluid at each point does not change with time. The path a fluid particle follows is a **streamline**; two streamlines never cross, because a particle at a point cannot have two velocities. Above a certain **critical speed** the flow becomes irregular and swirling: **turbulent flow**, as in the white water of a fast river.

For an incompressible fluid in steady flow, the mass entering a tube of flow each second equals the mass leaving it. This gives the **equation of continuity**: where the tube narrows, the fluid speeds up.`,
          },
          {
            type: "formula",
            tex: t`A_1 v_1 = A_2 v_2 = \text{constant (volume flow rate)}`,
            caption: "Squeeze the end of a garden hose and the water comes out faster.",
          },
          {
            type: "text",
            md: t`**Bernoulli's principle:** along a streamline in steady flow of an incompressible, non-viscous fluid, the sum of pressure, kinetic energy per unit volume and potential energy per unit volume stays constant.

**Derivation outline (work–energy theorem):** in time $\Delta t$ the same volume $\Delta V$ enters section 1 (pressure $P_1$, speed $v_1$, height $h_1$) and leaves section 2. The net work done by the pressure forces is $(P_1 - P_2)\Delta V$. This equals the gain in kinetic energy $\tfrac{1}{2}\rho\Delta V(v_2^2 - v_1^2)$ plus the gain in potential energy $\rho g\Delta V(h_2 - h_1)$. Dividing by $\Delta V$ and collecting terms for each section gives the equation below.`,
          },
          {
            type: "formula",
            tex: t`P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}`,
            caption: "Valid for steady, incompressible, non-viscous (and irrotational) flow, along one streamline.",
          },
          {
            type: "example",
            title: "Pressure drop in a narrowing pipe",
            problem: t`Water flows through a horizontal pipe of cross-section 20 cm² at 2.0 m s⁻¹. The pipe narrows to 5.0 cm². Find the speed in the narrow part and the pressure difference. ($\rho = 1000\ \text{kg m}^{-3}$)`,
            steps: [
              t`Continuity: $v_2 = v_1 A_1/A_2 = 2.0 \times 20/5.0 = 8.0\ \text{m s}^{-1}$.`,
              t`Horizontal pipe, so the $\rho g h$ terms cancel: $P_1 - P_2 = \tfrac{1}{2}\rho(v_2^2 - v_1^2)$.`,
              t`$P_1 - P_2 = \tfrac{1}{2} \times 1000 \times (64 - 4) = 3.0 \times 10^{4}$ Pa.`,
            ],
            answer: "8.0 m s⁻¹ in the narrow part; the pressure there is 3.0 × 10⁴ Pa lower. This is how a Venturi meter measures flow.",
          },
          {
            type: "text",
            md: t`**Uses of Bernoulli's principle**

- **Speed of efflux (Torricelli's law):** liquid leaves a small hole a depth $h$ below the open surface at $v = \sqrt{2gh}$, the speed of a body falling freely through $h$.
- **Venturi meter and atomiser:** a constriction speeds the fluid and lowers its pressure; the pressure difference measures the flow, or sucks up liquid in a sprayer or a carburettor.
- **Blood flow:** where an artery narrows, blood speeds up and its pressure drops; the artery may collapse briefly, a factor in heart attacks.
- **Dynamic lift:** an aeroplane wing is shaped so air flows faster over the top, giving lower pressure above and a net upward force. A spinning ball drags air faster on one side, so it swerves: the **Magnus effect**.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Water leaks from a small hole 5.0 m below the surface of a large open tank. Find the speed of efflux in m s⁻¹. (g = 9.8 m s⁻²)",
                answer: 9.9,
                tolerance: 0.05,
                unit: "m s⁻¹",
                explain: t`$v = \sqrt{2gh} = \sqrt{2 \times 9.8 \times 5.0} = \sqrt{98} \approx 9.9\ \text{m s}^{-1}$.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Viscosity",
          },
          {
            type: "text",
            md: t`Honey poured from a spoon flows slowly because its layers drag on one another. This internal friction between layers in relative motion is **viscosity**. In a pipe, the layer touching the wall is at rest and the speed grows towards the centre.

The **coefficient of viscosity** $\eta$ is the shearing stress divided by the rate of shear strain (the velocity gradient). Its SI unit is the **pascal second** (N s m⁻², also called the poiseuille); the CGS unit is the poise, and 1 Pa s = 10 poise. Water at 20 °C has $\eta \approx 1.0 \times 10^{-3}$ Pa s; air about $1.8 \times 10^{-5}$ Pa s. The viscosity of a **liquid decreases** as it gets hotter, but that of a **gas increases**.`,
          },
          {
            type: "formula",
            tex: t`F = \eta A \frac{dv}{dx}, \qquad F_{Stokes} = 6\pi\eta r v, \qquad v_t = \frac{2 r^2 (\rho - \sigma) g}{9\eta}`,
            caption: "ρ = density of the sphere, σ = density of the fluid. Stokes' law holds for a small sphere moving slowly (streamline flow).",
          },
          {
            type: "example",
            title: "Terminal velocity of a raindrop",
            problem: t`A raindrop of radius 0.10 mm falls through air. Find its terminal velocity. $\eta_{air} = 1.8 \times 10^{-5}$ Pa s, water density 1000 kg m⁻³; neglect the density of air; $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`At terminal velocity, weight = upthrust + viscous drag; with air's density neglected, $\tfrac{4}{3}\pi r^3\rho g = 6\pi\eta r v_t$.`,
              t`So $v_t = \dfrac{2r^2\rho g}{9\eta} = \dfrac{2 \times (1.0 \times 10^{-4})^2 \times 1000 \times 9.8}{9 \times 1.8 \times 10^{-5}}$.`,
              t`Numerator $= 1.96 \times 10^{-4}$; denominator $= 1.62 \times 10^{-4}$.`,
              t`$v_t \approx 1.2\ \text{m s}^{-1}$.`,
            ],
            answer: "About 1.2 m s⁻¹. Without air drag, the drop would hit the ground at enormous speed.",
          },
          {
            type: "text",
            md: t`**Reynolds number** $R_e = \rho v d/\eta$ (d = diameter of the pipe) tells whether flow is streamline or turbulent. It is a pure number: roughly, flow is streamline for $R_e$ below about 1000, turbulent above about 2000, and unsteady in between.

*Board note:* Reynolds number is in the ISC syllabus and is used in JEE. Some recent rationalised NCERT printings leave it out; check your edition.`,
          },
          {
            type: "mistake",
            wrong: "Where a pipe narrows, the water is squeezed, so its pressure goes up.",
            right: "Where the pipe narrows, the water speeds up and its pressure goes down.",
            why: "Squeezing a closed bag raises pressure, so it feels natural. But flowing water must gain kinetic energy to speed up, and that energy comes from the pressure term in Bernoulli's equation.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Blow hard between two hanging paper sheets. What happens?",
              emoji: "📄",
              options: ["They fly apart", "They move towards each other", "They do not move"],
              answer: 1,
              trap: 0,
              explain: "The fast-moving air between the sheets has lower pressure than the still air outside, so the outside air pushes the sheets together.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Continuity: Av = constant; narrower tube → faster flow.",
              "Bernoulli: P + ½ρv² + ρgh = constant along a streamline; faster flow → lower pressure.",
              "Torricelli: efflux speed √(2gh); Venturi meter, atomiser, lift and Magnus effect use Bernoulli.",
              "Viscosity η in Pa s; liquids get less viscous when hot, gases more.",
              "Stokes' drag 6πηrv; terminal velocity 2r²(ρ − σ)g/(9η) ∝ r².",
            ],
          },
        ],
        flashcards: [
          { front: "Equation of continuity", back: "A₁v₁ = A₂v₂ for an incompressible fluid in steady flow." },
          { front: "Bernoulli's equation", back: "P + ½ρv² + ρgh = constant along a streamline (steady, incompressible, non-viscous flow)." },
          { front: "Torricelli's law", back: "Speed of efflux from a hole at depth h below the open surface: v = √(2gh)." },
          { front: "Dynamic lift", back: "Faster flow over one side of a wing or spinning ball lowers the pressure there, giving a sideways or upward force." },
          { front: "SI unit of viscosity", back: "Pa s (N s m⁻²). 1 Pa s = 10 poise." },
          { front: "Stokes' law", back: "Viscous drag on a small sphere: F = 6πηrv." },
          { front: "Terminal velocity", back: "v_t = 2r²(ρ − σ)g/(9η); it grows as r²." },
          { front: "Effect of temperature on viscosity", back: "Liquids: viscosity falls on heating. Gases: viscosity rises on heating." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Water flows through a pipe whose radius halves at a narrow section. The speed there becomes:",
            options: ["Half", "Double", "Four times", "Unchanged"],
            answer: 2,
            explain: t`$A \propto r^2$, so the area becomes 1/4 and by continuity the speed becomes 4 times.`,
          },
          {
            kind: "numeric",
            q: "Water speeds up from 1.0 m s⁻¹ to 3.0 m s⁻¹ along a horizontal pipe. Find the pressure drop in Pa. (ρ = 1000 kg m⁻³)",
            answer: 4000,
            tolerance: 10,
            unit: "Pa",
            explain: t`$\Delta P = \tfrac{1}{2}\rho(v_2^2 - v_1^2) = 500 \times (9 - 1) = 4000$ Pa.`,
          },
          {
            kind: "mcq",
            q: "The SI unit of the coefficient of viscosity is:",
            options: ["N m⁻²", "N s m⁻²", "N m s⁻¹", "kg m s⁻¹"],
            answer: 1,
            explain: "η = (F/A)/(dv/dx), giving N m⁻² × s = N s m⁻² (Pa s).",
          },
          {
            kind: "truefalse",
            q: "The viscosity of engine oil decreases as the engine warms up.",
            answer: true,
            explain: "For liquids, viscosity falls with rising temperature, which is why oil is thickest on a cold start.",
          },
          {
            kind: "mcq",
            q: "The terminal velocity of a small sphere falling through a viscous liquid is proportional to:",
            options: ["r", "r²", "1/r", "r³"],
            answer: 1,
            explain: t`$v_t = 2r^2(\rho - \sigma)g/(9\eta)$, so $v_t \propto r^2$.`,
          },
          {
            kind: "numeric",
            q: "A ball bearing of radius 1.0 mm moves at 0.10 m s⁻¹ through glycerine (η = 0.80 Pa s). Find the viscous drag in mN.",
            answer: 1.51,
            tolerance: 0.02,
            unit: "mN",
            explain: t`$F = 6\pi\eta rv = 6\pi \times 0.80 \times 1.0 \times 10^{-3} \times 0.10 = 1.51 \times 10^{-3}$ N.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which assumptions are needed for Bernoulli's equation?",
            options: ["Steady flow", "Incompressible fluid", "Non-viscous fluid", "Turbulent flow"],
            answers: [0, 1, 2],
            explain: "Bernoulli's equation needs steady, incompressible, non-viscous (and irrotational) flow. Turbulent flow breaks it.",
          },
          {
            kind: "mcq",
            q: "The lift on an aeroplane wing comes mainly from:",
            options: [
              "Air moving faster over the top, so pressure there is lower",
              "Air moving faster under the wing, so pressure there is lower",
              "The buoyancy of the air the wing displaces",
              "Viscous drag pulling the wing upward",
            ],
            answer: 0,
            explain: "The wing's shape and tilt make air flow faster above it. By Bernoulli the pressure above is lower, so the net force is upward.",
          },
        ],
      },
      {
        slug: "c11-phy-surface-tension",
        title: "Surface Tension and Capillarity",
        summary: "Surface energy and surface tension, excess pressure in drops and bubbles, angle of contact, capillary rise and how detergents work.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🦟",
            caption: "A pond skater walks on a village pond without sinking, and a dewdrop on a lotus leaf stays a round bead. Both show that a liquid surface behaves like a stretched skin.",
          },
          {
            type: "text",
            md: t`A molecule deep inside a liquid is pulled equally on all sides by its neighbours. A molecule at the surface has neighbours only on one side, so it has extra energy compared with one inside. To create more surface we must bring molecules up from the inside, which takes work. This extra energy per unit area is the **surface energy**.

**Surface tension** $S$ is the force per unit length acting in the plane of the surface, perpendicular to any line drawn on it. Its SI unit is N m⁻¹, which is the same as J m⁻², and surface tension **equals surface energy per unit area**. It falls as temperature rises. Typical values near 20 °C: water about 0.073 N m⁻¹, mercury about 0.47 N m⁻¹, soap solution about 0.03 N m⁻¹.`,
          },
          {
            type: "formula",
            tex: t`S = \frac{F}{l} = \frac{W}{\Delta A}`,
            caption: "A soap film has two surfaces, so a slider of length l on a film frame feels a force 2Sl.",
          },
          {
            type: "example",
            title: "Blowing a soap bubble",
            problem: "How much work is needed to blow a soap bubble of radius 5.0 cm? Surface tension of the soap solution = 0.030 N m⁻¹.",
            steps: [
              t`A bubble has two surfaces (inside and outside), so the new area is $\Delta A = 2 \times 4\pi r^2 = 8\pi r^2$.`,
              t`$\Delta A = 8\pi \times (0.050)^2 = 6.28 \times 10^{-2}$ m².`,
              t`$W = S\Delta A = 0.030 \times 6.28 \times 10^{-2} = 1.88 \times 10^{-3}$ J.`,
            ],
            answer: "About 1.9 × 10⁻³ J. Forgetting the second surface gives half this.",
          },
          {
            type: "text",
            md: t`**Excess pressure.** A curved liquid surface pushes towards its centre of curvature, so the pressure on the concave side is higher.

For a drop of radius $r$, imagine it grows by $dr$. The surface energy rises by $S \times 8\pi r\,dr$, and this equals the work done by the excess pressure, $(P_i - P_o)4\pi r^2\,dr$. So $P_i - P_o = 2S/r$. The same holds for an air bubble inside a liquid (one surface). A **soap bubble** in air has two surfaces, so its excess pressure is doubled.`,
          },
          {
            type: "formula",
            tex: t`\text{drop or air bubble in liquid: } \Delta P = \frac{2S}{r}, \qquad \text{soap bubble in air: } \Delta P = \frac{4S}{r}`,
            caption: "A smaller drop or bubble has a larger excess pressure.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the excess pressure inside a water drop of radius 1.0 mm, in Pa. (S = 0.073 N m⁻¹)",
                answer: 146,
                tolerance: 1,
                unit: "Pa",
                explain: t`$\Delta P = 2S/r = 2 \times 0.073 / 1.0 \times 10^{-3} = 146$ Pa.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Angle of contact.** Where a liquid surface meets a solid, the angle $\theta$ between the solid surface and the tangent to the liquid surface, measured inside the liquid, is the **angle of contact**. It is set by a balance of the three surface tensions: $S_{la}\cos\theta + S_{sl} = S_{sa}$.

If $\theta < 90°$ the liquid **wets** the solid and spreads (water on clean glass, $\theta \approx 0°$). If $\theta > 90°$ it forms drops (water on wax or a lotus leaf, mercury on glass with $\theta \approx 140°$). **Soaps and detergents** lower the surface tension and the angle of contact so water wets greasy cloth, and their molecules surround oil droplets so they wash away. **Waterproofing** agents do the opposite: they raise the angle of contact.`,
          },
          {
            type: "text",
            md: t`**Capillarity.** In a narrow tube dipped in a liquid that wets it, the surface becomes concave. The pressure just under the concave meniscus is lower than atmospheric by $2S/R$, where the meniscus radius $R = r/\cos\theta$ for a tube of radius $r$. Liquid rises until the column's pressure $\rho g h$ makes up this difference, giving **Jurin's law** below. For $\theta > 90°$ ($\cos\theta < 0$) the meniscus is convex and the liquid is **depressed**, as mercury is in glass. Capillary action draws water up the fibres of a towel, an oil-lamp wick and the soil.`,
          },
          {
            type: "formula",
            tex: t`h = \frac{2 S \cos\theta}{r \rho g}`,
            caption: "Jurin's law: narrower tube → higher rise (h ∝ 1/r).",
          },
          {
            type: "example",
            title: "Capillary rise of water",
            problem: t`A clean glass capillary of radius 0.50 mm stands in water. How high does the water rise? $S = 0.073$ N m⁻¹, $\theta = 0°$, $\rho = 1000\ \text{kg m}^{-3}$, $g = 9.8\ \text{m s}^{-2}$.`,
            steps: [
              t`$h = \dfrac{2S\cos\theta}{r\rho g} = \dfrac{2 \times 0.073 \times 1}{0.50 \times 10^{-3} \times 1000 \times 9.8}$.`,
              t`Numerator $= 0.146$; denominator $= 4.9$.`,
              t`$h = 0.146/4.9 = 2.98 \times 10^{-2}$ m.`,
            ],
            answer: "About 3.0 cm.",
          },
          {
            type: "mistake",
            wrong: "Any liquid rises in a narrow glass tube.",
            right: "A liquid rises only if its angle of contact with the tube is less than 90°. Mercury (θ ≈ 140°) is pushed down in glass.",
            why: "Water is the usual demonstration, so the rise seems universal. In Jurin's law, cos θ is negative when θ > 90°, which makes h negative: a depression.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does the liquid rise or fall in the tube?",
              groups: ["Rises", "Is depressed"],
              items: [
                { text: "Water in clean glass", group: 0, hint: "θ is nearly 0°: water wets glass." },
                { text: "Mercury in glass", group: 1, hint: "θ is about 140°: mercury does not wet glass." },
                { text: "Water in a wax-coated tube", group: 1, hint: "Wax repels water, so θ > 90°." },
                { text: "Kerosene in glass", group: 0, hint: "Kerosene wets glass and creeps up a wick." },
                { text: "Alcohol in glass", group: 0, hint: "Alcohol wets glass, so θ < 90°." },
              ],
              explain: "Check the angle of contact: below 90° the meniscus is concave and the liquid rises; above 90° it is convex and the liquid falls below the outside level.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Expect a derivation of excess pressure in a drop or bubble, or of capillary rise, for 3 marks. State clearly how many surfaces there are. In theory answers, explain why small drops are spherical (a sphere has the least surface area for a given volume) and how detergents work.",
          },
          {
            type: "keypoints",
            items: [
              "Surface tension S = force per unit length = surface energy per unit area (N m⁻¹ = J m⁻²).",
              "Excess pressure: drop 2S/r, air bubble in liquid 2S/r, soap bubble 4S/r.",
              "θ < 90°: liquid wets and rises; θ > 90°: liquid forms drops and is depressed.",
              "Capillary rise h = 2S cos θ/(rρg).",
              "Detergents lower S and θ; S falls as temperature rises.",
            ],
          },
        ],
        flashcards: [
          { front: "Surface tension", back: "Force per unit length in the surface (N m⁻¹); equal to surface energy per unit area." },
          { front: "Excess pressure in a liquid drop", back: "2S/r." },
          { front: "Excess pressure in a soap bubble", back: "4S/r, because the film has two surfaces." },
          { front: "Angle of contact for water on clean glass", back: "About 0°, so water wets glass and rises in a capillary." },
          { front: "Angle of contact for mercury on glass", back: "About 140°, so mercury is depressed in a capillary and has a convex meniscus." },
          { front: "Jurin's law", back: "h = 2S cos θ/(rρg); rise ∝ 1/r." },
          { front: "How detergents clean", back: "They lower the surface tension and angle of contact so water wets the cloth, and they hold oil droplets in the water." },
          { front: "Why are small drops spherical?", back: "Surface tension minimises surface energy, and a sphere has the least area for a given volume." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The SI unit of surface tension is the same as that of:",
            options: ["Pressure", "Energy per unit area", "Force per unit area", "Energy per unit volume"],
            answer: 1,
            explain: "N m⁻¹ = (N m) m⁻² = J m⁻². Surface tension equals surface energy per unit area.",
          },
          {
            kind: "numeric",
            q: "Find the excess pressure inside a soap bubble of radius 2.0 cm, in Pa. (S = 0.025 N m⁻¹)",
            answer: 5,
            tolerance: 0.05,
            unit: "Pa",
            explain: t`Soap bubble: $\Delta P = 4S/r = 4 \times 0.025/0.020 = 5.0$ Pa.`,
          },
          {
            kind: "truefalse",
            q: "Surface tension of water increases when it is heated.",
            answer: false,
            explain: "Surface tension decreases with rising temperature; hot water wets and cleans better partly for this reason.",
          },
          {
            kind: "numeric",
            q: "Water (S = 0.070 N m⁻¹, θ = 0°) rises in a glass capillary of radius 0.25 mm. Find the rise in cm. (ρ = 1000 kg m⁻³, g = 10 m s⁻²)",
            answer: 5.6,
            tolerance: 0.05,
            unit: "cm",
            explain: t`$h = 2S/(r\rho g) = 0.14/(2.5 \times 10^{-4} \times 1000 \times 10) = 0.14/2.5 = 0.056$ m $= 5.6$ cm.`,
          },
          {
            kind: "mcq",
            q: "Mercury in a glass capillary:",
            options: [
              "Rises, with a concave meniscus",
              "Rises, with a convex meniscus",
              "Is depressed, with a convex meniscus",
              "Is depressed, with a concave meniscus",
            ],
            answer: 2,
            explain: "θ ≈ 140° > 90°, so cos θ < 0: mercury is depressed and its meniscus is convex (curved upward in the middle).",
          },
          {
            kind: "mcq",
            q: "Detergents help wash greasy clothes mainly because they:",
            options: [
              "Raise the surface tension of water",
              "Lower the surface tension of water and the angle of contact",
              "Raise the viscosity of water",
              "Make water denser",
            ],
            answer: 1,
            explain: "Lower surface tension and smaller θ let water spread into the fabric; detergent molecules also hold the oil in tiny droplets.",
          },
          {
            kind: "multi",
            q: "Select all correct statements.",
            options: [
              "Excess pressure in a drop of radius r is 2S/r",
              "Excess pressure in a soap bubble of radius r is 4S/r",
              "A bigger soap bubble has a bigger excess pressure",
              "Water on clean glass has an angle of contact close to 0°",
            ],
            answers: [0, 1, 3],
            explain: "Excess pressure varies as 1/r, so a bigger bubble has a smaller excess pressure.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The law h = 2S cos θ/(rρg) for capillary rise is called ___'s law.",
            answer: ["Jurin", "Jurin's"],
            explain: "It is Jurin's law: the rise is inversely proportional to the radius of the tube.",
          },
        ],
      },
      {
        slug: "c11-phy-fluids-exam",
        title: "Exam edge: Fluids for JEE, NEET and CETs",
        summary: "Manometers, merging drops, Torricelli's range and draining time, accelerated liquids, capillaries in lifts and the bubble traps, at entrance-exam level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** NEET and KCET favour direct results: terminal velocity scaling, excess pressure in drops and bubbles, capillary rise, Pascal's law and floating fractions. JEE Main adds Bernoulli with Torricelli's law, energy released when drops merge, and U-tube manometers. JEE Advanced loves liquids in accelerated frames (tilted surface, rotating U-tubes), draining time of a tank, capillaries of insufficient length, and buoyancy combined with springs or SHM.

Fluids is one of the most regular Class 11 chapters in JEE Main and NEET papers, so it repays careful practice.`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe"],
            rows: [
              [t`Same level in one connected liquid → same pressure`, "Only in the same liquid at rest. Across an oil–water boundary, compare at the interface level."],
              [t`$n$ equal drops merge: $R = n^{1/3}r$, so $v_t \to n^{2/3}v_t$`, "Stokes regime (small drops, slow); fluid density unchanged."],
              [t`Range of jet from hole at depth $h$ in tank of height $H$: $R = 2\sqrt{h(H - h)}$`, t`Large tank, small hole, tank on the ground. Maximum $R = H$ at $h = H/2$.`],
              [t`Draining time $t = \dfrac{A}{a}\sqrt{\dfrac{2H}{g}}$`, t`Hole area $a \ll$ tank area $A$, hole at the bottom.`],
              [t`Liquid in a vessel with horizontal acceleration $a$: $\tan\theta = a/g$`, "Liquid at rest relative to the vessel."],
              [t`Capillary: $h \propto 1/g_{eff}$; in free fall the liquid fills the tube`, "Lift accelerating up: g_eff = g + a; down: g − a."],
            ],
          },
          {
            type: "example",
            title: "KCET / NEET level: U-tube manometer",
            problem: "Water is poured into a U-tube, then oil is poured into one arm. When the liquids settle, the oil column stands 15 cm above the oil–water boundary, while the water in the other arm stands 12 cm above the same level. Find the density of the oil.",
            steps: [
              "Choose the level of the oil–water boundary. Below it, both arms hold water, so the pressures at that level are equal.",
              t`Oil arm: $P_a + \rho_{oil} g (0.15)$. Water arm: $P_a + \rho_w g (0.12)$.`,
              t`Equate: $\rho_{oil} = 1000 \times 12/15 = 800\ \text{kg m}^{-3}$.`,
            ],
            answer: "800 kg m⁻³ (relative density 0.8).",
          },
          {
            type: "example",
            title: "JEE Main level: merging drops",
            problem: "Eight identical raindrops, each falling at a terminal speed of 5.0 cm s⁻¹, merge into one drop. Find its terminal speed.",
            steps: [
              t`Volume is conserved: $\tfrac{4}{3}\pi R^3 = 8 \times \tfrac{4}{3}\pi r^3$, so $R = 2r$.`,
              t`$v_t \propto r^2$, so the new speed is $(R/r)^2 = 4$ times the old.`,
              t`$v = 4 \times 5.0 = 20$ cm s⁻¹.`,
            ],
            answer: "20 cm s⁻¹.",
          },
          {
            type: "example",
            title: "JEE Main level: range of a jet",
            problem: t`A tank stands on the ground with water 2.0 m deep. A small hole is made 0.50 m above the ground. How far from the tank does the jet hit the ground? Where should the hole be for maximum range?`,
            steps: [
              t`Depth of hole below surface $h = 2.0 - 0.50 = 1.5$ m, so $v = \sqrt{2gh}$.`,
              t`Fall height $0.50$ m, so time $t = \sqrt{2 \times 0.50/g}$.`,
              t`Range $R = vt = \sqrt{2g \times 1.5}\sqrt{2 \times 0.50/g} = 2\sqrt{1.5 \times 0.50} = 2\sqrt{0.75} \approx 1.73$ m.`,
              t`$R = 2\sqrt{h(H - h)}$ is greatest when $h = H/2 = 1.0$ m, giving $R_{max} = H = 2.0$ m.`,
            ],
            answer: "About 1.73 m; for maximum range (2.0 m) the hole should be halfway up, 1.0 m above the ground. Note that g cancels.",
          },
          {
            type: "example",
            title: "JEE Advanced level: accelerating tanker",
            problem: t`A tanker lorry carries water in a rectangular tank 4.0 m long. It accelerates uniformly at $2.45\ \text{m s}^{-2}$ on a level road. Find the tilt of the water surface and the difference in water height between the front and back. ($g = 9.8\ \text{m s}^{-2}$)`,
            steps: [
              t`In the lorry's frame, each bit of water feels $g$ downward and a pseudo-force $a$ backward. The free surface is perpendicular to the effective gravity.`,
              t`$\tan\theta = a/g = 2.45/9.8 = 0.25$, so $\theta \approx 14°$.`,
              t`Height difference $= L\tan\theta = 4.0 \times 0.25 = 1.0$ m, higher at the back.`,
            ],
            answer: "The surface tilts at about 14° with the water 1.0 m higher at the back than the front (if the tank is deep enough).",
          },
          {
            type: "example",
            title: "JEE Advanced level: time to drain a tank",
            problem: t`An open tank of cross-section 1.0 m² holds water 5.0 m deep. A hole of area 10 cm² is opened at the bottom. How long does the tank take to empty? ($g = 10\ \text{m s}^{-2}$)`,
            steps: [
              t`When the depth is $y$, the efflux speed is $\sqrt{2gy}$. Continuity: $-A\,\dfrac{dy}{dt} = a\sqrt{2gy}$.`,
              t`Separate: $dt = -\dfrac{A}{a\sqrt{2g}}\,\dfrac{dy}{\sqrt{y}}$; integrate $y$ from $H$ to 0: $t = \dfrac{A}{a}\cdot\dfrac{2\sqrt{H}}{\sqrt{2g}} = \dfrac{A}{a}\sqrt{\dfrac{2H}{g}}$.`,
              t`$A/a = 1.0/1.0 \times 10^{-3} = 1000$; $\sqrt{2 \times 5.0/10} = 1.0$ s.`,
              t`$t = 1000 \times 1.0 = 1000$ s.`,
            ],
            answer: "1000 s, about 17 minutes. Half the water leaves in only about 29% of this time, because flow is fastest when the tank is full.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A capillary tube is shorter than the height water would normally rise in it. The water:",
                options: [
                  "Overflows from the top like a fountain",
                  "Rises to the top and the meniscus becomes flatter (larger radius)",
                  "Does not rise at all",
                  "Rises to the top and the meniscus becomes more curved",
                ],
                answer: 1,
                explain: t`Water cannot overflow: that would be a perpetual-motion machine. It reaches the top and the meniscus radius $R$ grows so that $hR$ stays constant ($h = 2S/(R\rho g)$).`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Excess pressure inside a soap bubble is 2S/r, the same as in a drop.",
            right: "A soap bubble in air has two surfaces, so its excess pressure is 4S/r. An air bubble inside water has one surface: 2S/r.",
            why: "The formulas look alike, and examiners deliberately mix 'soap bubble' with 'air bubble in water'. Count the liquid–air surfaces every time.",
          },
          {
            type: "mistake",
            wrong: "A block floating in water in a lift that accelerates upward sinks deeper, because it feels heavier.",
            right: "The fraction submerged stays the same, ρ_body/ρ_fluid.",
            why: "Both the weight and the buoyant force scale with g_eff = g + a, so the balance condition does not change. What does change is the pressure at a given depth.",
          },
          {
            type: "mistake",
            wrong: "An air bubble rising through water has a negative terminal velocity in the formula, so it cannot reach terminal velocity.",
            right: t`For a bubble $\sigma > \rho$, so $(\rho - \sigma)$ is negative: the terminal velocity points **upward**, with size $2r^2(\sigma - \rho)g/(9\eta)$.`,
            why: "The sign only tells the direction. Viscous drag always opposes motion, so the rising bubble also reaches a steady speed.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each set-up to the key result.",
              pairs: [
                ["Liquid surface in an accelerating lorry", "tan θ = a/g"],
                ["Jet from a hole in a tank on the ground", "R = 2√(h(H − h))"],
                ["Eight drops merge into one", "Terminal speed × 4"],
                ["Capillary in a lift accelerating upward", "Rise decreases"],
                ["Tank emptying through a small bottom hole", "t = (A/a)√(2H/g)"],
              ],
              explain: "Each classic setup has a one-line result. Recognise the setup first, then check the conditions for the result to be safe.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Manometers: equate pressures at a level inside one continuous liquid.",
              "Merging n drops: radius × n^(1/3), terminal speed × n^(2/3); surface energy is released.",
              "Jet range 2√(h(H − h)), max H at mid-height; draining time (A/a)√(2H/g).",
              "Accelerated liquid: surface ⟂ effective gravity; tan θ = a/g.",
              "Count surfaces: soap bubble 4S/r; drop or air bubble in liquid 2S/r.",
            ],
          },
        ],
        flashcards: [
          { front: "Terminal speed after n identical drops merge", back: "n^(2/3) times the speed of one drop (radius grows by n^(1/3))." },
          { front: "Range of a jet from a tank on the ground", back: "R = 2√(h(H − h)); maximum R = H when the hole is at H/2." },
          { front: "Time to empty a tank through a small hole", back: "t = (A/a)√(2H/g)." },
          { front: "Free surface of liquid in a vessel accelerating horizontally", back: "Tilts with tan θ = a/g, higher at the back." },
          { front: "Capillary in a lift moving up with acceleration a", back: "h' = hg/(g + a). In free fall the liquid rises to fill the whole tube." },
          { front: "Capillary shorter than the natural rise", back: "No overflow; the meniscus radius grows so that hR = constant." },
          { front: "Energy released when n drops of radius r merge", back: "S × 4π(nr² − R²), with R = n^(1/3) r." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "27 identical mercury drops, each with terminal speed v in a viscous oil, merge into one drop. Its terminal speed is:",
            options: ["3v", "9v", "27v", "v/9"],
            answer: 1,
            explain: t`$R = 27^{1/3}r = 3r$; $v_t \propto r^2$, so $9v$.`,
          },
          {
            kind: "numeric",
            q: "1000 tiny water drops, each of radius 0.10 mm, merge into one drop. Find the surface energy released, in μJ. (S = 0.072 N m⁻¹)",
            answer: 8.14,
            tolerance: 0.05,
            unit: "μJ",
            explain: t`$R = 10r = 1.0$ mm. $\Delta A = 4\pi(1000 r^2 - R^2) = 4\pi(1.0 \times 10^{-5} - 1.0 \times 10^{-6}) = 4\pi \times 9.0 \times 10^{-6} = 1.13 \times 10^{-4}$ m². $E = S\Delta A = 0.072 \times 1.13 \times 10^{-4} = 8.14 \times 10^{-6}$ J.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Two soap bubbles of radii 2 cm and 4 cm are joined by a narrow tube. Air flows:",
            options: [
              "From the 4 cm bubble to the 2 cm bubble",
              "From the 2 cm bubble to the 4 cm bubble",
              "In neither direction",
              "Back and forth in oscillation",
            ],
            answer: 1,
            explain: "Excess pressure 4S/r is larger in the smaller bubble, so air flows from small to large; the small bubble shrinks further.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Water stands 3.2 m above a hole of area 2.0 cm² in the side of a large tank. Find the rate of outflow in litres per second. (g = 10 m s⁻²)",
            answer: 1.6,
            tolerance: 0.02,
            unit: "L s⁻¹",
            explain: t`$v = \sqrt{2gh} = \sqrt{64} = 8.0\ \text{m s}^{-1}$; $Q = av = 2.0 \times 10^{-4} \times 8.0 = 1.6 \times 10^{-3}\ \text{m}^3\text{s}^{-1} = 1.6$ L s⁻¹.`,
          },
          {
            kind: "mcq",
            q: "Water rises 6 cm in a capillary on the ground. In a lift accelerating upward at g/2, it rises:",
            options: ["3 cm", "4 cm", "9 cm", "12 cm"],
            answer: 1,
            explain: t`$h \propto 1/g_{eff}$, with $g_{eff} = 1.5g$: $h' = 6/1.5 = 4$ cm.`,
            difficulty: 2,
            hint: "Replace g by g + a in Jurin's law.",
          },
          {
            kind: "mcq",
            q: "A cube of ice floats in a glass of water filled to the brim. When the ice melts, the water:",
            options: ["Overflows", "Level falls", "Level stays the same", "First rises, then falls"],
            answer: 2,
            explain: "The floating ice displaces its own weight of water. When it melts it becomes exactly that weight of water, which fills the space it displaced.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A closed box of water accelerates horizontally at 5.0 m s⁻². Find the angle (in degrees) the free surface makes with the horizontal. (g = 10 m s⁻²)",
            answer: 26.6,
            tolerance: 0.2,
            unit: "°",
            explain: t`$\tan\theta = a/g = 0.50$, so $\theta = \tan^{-1}0.50 \approx 26.6°$.`,
            difficulty: 3,
          },
          {
            kind: "multi",
            q: "A small hole is opened in the base of a large open tank of depth H. Which statements are correct?",
            options: [
              "The initial efflux speed is √(2gH)",
              "The water level falls at a constant rate",
              "The draining time is proportional to √H",
              "The draining time is inversely proportional to the hole's area",
            ],
            answers: [0, 2, 3],
            explain: t`The efflux speed falls as the level drops, so the level does not fall at a constant rate. $t = (A/a)\sqrt{2H/g}$ is $\propto \sqrt{H}$ and $\propto 1/a$.`,
            difficulty: 3,
            hint: "Write the draining-time result and read off its dependences.",
          },
        ],
      },
    ],
  },
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Mechanical Properties of Solids": "c11-phy-solids",
};
