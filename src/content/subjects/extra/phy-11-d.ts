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
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Mechanical Properties of Solids": "c11-phy-solids",
};
