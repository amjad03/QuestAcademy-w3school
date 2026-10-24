import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "math-high";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "icse10-areas-circles",
    title: "Areas Related to Circles",
    icon: "⭕",
    description: "Arc length, sector and segment areas, and areas of shapes combining circles, squares and triangles.",
    lessons: [
      {
        slug: "sectors-and-arcs",
        title: "Arcs and sectors",
        summary: "Length of an arc and area of a sector as fractions of the whole circle, with clock and wheel problems.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "Slice a round pizza into six equal pieces and each slice is a **sector**: the region between two radii and an arc. Its crust is the **arc**. Both are simply a fraction θ/360 of the whole circle.",
          },
          { type: "formula", tex: t`C = 2\pi r, \qquad A = \pi r^2` },
          { type: "formula", tex: t`\text{Arc length } l = \frac{\theta}{360^\circ}\times 2\pi r, \qquad \text{Sector area} = \frac{\theta}{360^\circ}\times \pi r^2 = \tfrac12\, l\, r`, caption: "θ is the angle at the centre in degrees." },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "What fraction of the whole circle is a sector with this angle at the centre?",
              pairs: [
                ["90°", "¼"],
                ["60°", "⅙"],
                ["120°", "⅓"],
                ["72°", "⅕"],
                ["180°", "½"],
              ],
              explain: "The fraction is always **θ/360**. Multiply it by 2πr for the **arc length** and by πr² for the **sector area**.",
            },
          },
          {
            type: "example",
            problem: "A sector of a circle of radius 21 cm has angle 60°. Find its arc length, area and perimeter (π = 22/7).",
            steps: [
              t`Fraction of the circle $= \dfrac{60}{360} = \dfrac16$.`,
              t`Arc length $= \dfrac16\times 2\times\dfrac{22}{7}\times 21 = \dfrac16\times 132 = 22$ cm.`,
              t`Area $= \dfrac16\times\dfrac{22}{7}\times 21^2 = \dfrac16\times 1386 = 231$ cm².`,
              "Perimeter of the sector = arc + 2 radii = 22 + 2 × 21 = 64 cm.",
            ],
            answer: "Arc length **22 cm**, area **231 cm²**, perimeter **64 cm**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The circumference of a circle is 44 cm. Find its area in cm² (π = 22/7).",
                answer: 154,
                unit: "cm²",
                explain: "2πr = 44 gives r = 7 cm; area = 22/7 × 49 = 154 cm².",
              },
            ],
          },
          { type: "heading", text: "Clocks and wheels" },
          {
            type: "table",
            headers: ["Situation", "Key fact"],
            rows: [
              ["Minute hand", "Turns 360° in 60 min, i.e. 6° per minute"],
              ["Hour hand", "Turns 30° per hour, i.e. 0.5° per minute"],
              ["Wheel", "Distance in one revolution = circumference"],
            ],
          },
          {
            type: "text",
            md: t`**Example:** The minute hand of a clock at Mumbai's CST station is 14 cm long. Area swept in 5 minutes: $\theta = 30^\circ$, so area $= \dfrac{30}{360}\times\dfrac{22}{7}\times196 = \dfrac{154}{3} \approx 51.33$ cm².`,
          },
          {
            type: "mistake",
            wrong: "The perimeter of a 60° sector of radius 21 cm is just its arc, 22 cm.",
            right: "**Perimeter of a sector** = arc length + 2 radii = 22 + 42 = **64 cm**.",
            why: "The boundary of a sector is the arc *and* the two radii that close it. Also use the value of π the question gives (22/7 or 3.14): answers are checked against it.",
          },
          {
            type: "keypoints",
            items: [
              "Arc length = θ/360 × 2πr; sector area = θ/360 × πr².",
              "Sector area = ½ × arc length × radius.",
              "Perimeter of sector = arc + 2r.",
              "Minute hand: 6° per minute. Wheel: distance = revolutions × circumference.",
            ],
          },
        ],
        flashcards: [
          { front: "Arc length for angle θ", back: "θ/360 × 2πr" },
          { front: "Area of a sector", back: "θ/360 × πr², or ½ l r" },
          { front: "Perimeter of a sector", back: "Arc length + 2r" },
          { front: "Angle turned by the minute hand in 1 minute", back: "6°" },
          { front: "Distance covered by a wheel in one revolution", back: "Its circumference, 2πr" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A wheel of diameter 70 cm covers 1.1 km. How many revolutions does it make? (π = 22/7)",
            answer: 500,
            explain: "Circumference = 22/7 × 70 = 220 cm. 1.1 km = 1,10,000 cm. Revolutions = 110000 ÷ 220 = 500.",
          },
          {
            kind: "numeric",
            q: "Find the length of the arc of a circle of radius 14 cm subtending 90° at the centre (cm). (π = 22/7)",
            answer: 22,
            unit: "cm",
            explain: "¼ × 2 × 22/7 × 14 = ¼ × 88 = 22 cm.",
          },
          {
            kind: "numeric",
            q: "Find the area of a sector of radius 7 cm and angle 72° (cm²). (π = 22/7)",
            answer: 30.8,
            unit: "cm²",
            explain: "72/360 = 1/5; area = 1/5 × 154 = 30.8 cm².",
          },
          {
            kind: "truefalse",
            q: "If the radius is doubled and the angle kept the same, the area of a sector doubles.",
            answer: false,
            difficulty: 2,
            explain: "Area ∝ r², so it becomes 4 times.",
          },
          {
            kind: "fill",
            q: "The hour hand of a clock turns through ___ degrees in one hour.",
            answer: ["30", "30°"],
            explain: "360° in 12 hours, so 30° per hour.",
          },
          {
            kind: "numeric",
            q: "The minute hand of a clock is 21 cm long. Find the area it sweeps in 20 minutes (cm²). (π = 22/7)",
            answer: 462,
            unit: "cm²",
            difficulty: 2,
            hint: "The minute hand turns 6° per minute.",
            explain: "θ = 20 × 6° = 120°, i.e. ⅓ of the circle. Area = ⅓ × 22/7 × 441 = ⅓ × 1386 = 462 cm².",
          },
        ],
      },
      {
        slug: "segments-and-combinations",
        title: "Segments and combined figures",
        summary: "Area of a segment as sector minus triangle, and shaded-region problems mixing circles with other shapes.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A chord cuts a circle into two **segments**: the smaller (minor) and the larger (major). Many shaded-region questions are really \"area of big shape minus area of small shapes\".",
          },
          { type: "formula", tex: t`\text{Minor segment} = \text{Sector} - \triangle OAB = \frac{\theta}{360^\circ}\pi r^2 - \tfrac12 r^2\sin\theta`, caption: "Major segment = πr² − minor segment" },
          {
            type: "table",
            headers: ["Angle θ", "Area of △OAB"],
            rows: [
              ["60°", t`$\dfrac{\sqrt3}{4}r^2$ (equilateral triangle)`],
              ["90°", t`$\tfrac12 r^2$`],
              ["120°", t`$\dfrac{\sqrt3}{4}r^2$`],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              emoji: "🍕",
              prompt: "A chord of a circle of radius 7 cm subtends 90° at the centre. What is the area of the minor segment? (π = 22/7)",
              options: ["38.5 cm²", "14 cm²", "24.5 cm²"],
              answer: 1,
              trap: 0,
              explain: "38.5 cm² is the whole **sector** (¼ × 154). The **segment** leaves out △OAB = ½ × 7 × 7 = 24.5 cm², so the segment is 38.5 − 24.5 = 14 cm².",
            },
          },
          {
            type: "example",
            title: "A 90° segment",
            problem: "In a circle of radius 21 cm, a chord subtends 90° at the centre. Find the areas of the minor and major segments (π = 22/7).",
            steps: [
              "Sector = ¼ × 22/7 × 441 = 346.5 cm².",
              "△OAB is right-angled at O: area = ½ × 21 × 21 = 220.5 cm².",
              "Minor segment = 346.5 − 220.5 = 126 cm².",
              "Circle = 22/7 × 441 = 1386 cm², so major segment = 1386 − 126 = 1260 cm².",
            ],
            answer: "Minor segment **126 cm²**; major segment **1260 cm²**.",
          },
          {
            type: "example",
            title: "A 60° segment",
            problem: "In a circle of radius 12 cm, a chord subtends 60° at the centre. Find the area of the minor segment ($\\pi = 3.14$, $\\sqrt3 = 1.73$).",
            steps: [
              t`Sector $= \tfrac16\times3.14\times144 = 75.36$ cm².`,
              t`At 60°, △OAB is equilateral: area $= \tfrac{\sqrt3}{4}\times144 = 36\sqrt3 = 62.28$ cm².`,
              t`Segment $= 75.36 - 62.28$.`,
            ],
            answer: "Minor segment = **13.08 cm²**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Radius 14 cm, chord subtends 90° at the centre. Area of the minor segment (cm²)? (π = 22/7)",
                answer: 56,
                unit: "cm²",
                explain: "Sector = 154, triangle = ½ × 14 × 14 = 98. Segment = 56 cm².",
              },
            ],
          },
          { type: "heading", text: "Combined figures" },
          {
            type: "text",
            md: "A square tile of side 14 cm has a quadrant of radius 7 cm cut at each corner. The four quadrants make one full circle of radius 7, so the remaining area = 196 − 154 = **42 cm²**.",
          },
          { type: "illustration", emoji: "🟦⭕", caption: "Shaded region = outer shape − the pieces removed." },
          {
            type: "mistake",
            wrong: "The area of the minor segment cut off by a 90° chord in a circle of radius 14 cm is the sector area, 154 cm².",
            right: "Minor segment = sector − △OAB = 154 − 98 = **56 cm²**.",
            why: "A **segment** is bounded by a chord and an arc, so the triangle must be subtracted. In the same way, for a path around a circular park subtract the inner circle from the outer one: π(R² − r²), not π(R − r)².",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A circular park of radius 21 m has a 7 m wide path all round it outside. Find the area of the path (m²). (π = 22/7)",
                answer: 1078,
                unit: "m²",
                explain: "π(28² − 21²) = 22/7 × (784 − 441) = 22/7 × 343 = 1078 m².",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Minor segment = sector − triangle; major segment = circle − minor segment.",
              "Triangle at 90°: ½r²; at 60°: (√3/4)r².",
              "Four corner quadrants of the same radius make one full circle.",
              "Ring (path) area = π(R² − r²).",
            ],
          },
        ],
        flashcards: [
          { front: "Area of a minor segment", back: "Sector area − area of △OAB" },
          { front: "Area of △OAB when θ = 90°", back: "½ r²" },
          { front: "Area of △OAB when θ = 60°", back: "(√3/4) r²" },
          { front: "Area of a circular path of outer radius R, inner r", back: "π(R² − r²)" },
          { front: "Major segment area", back: "πr² − minor segment" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Radius 14 cm, chord subtends 90°. Find the area of the major segment (cm²). (π = 22/7)",
            answer: 560,
            unit: "cm²",
            explain: "Circle = 616, minor segment = 56, so major = 560 cm².",
          },
          {
            kind: "numeric",
            q: "A circle is inscribed in a square of side 14 cm. Find the area of the square outside the circle (cm²). (π = 22/7)",
            answer: 42,
            unit: "cm²",
            explain: "Radius 7: 196 − 154 = 42 cm².",
          },
          {
            kind: "numeric",
            q: "Radius 6 cm, angle 60°. Find the area of the minor segment in cm², using π = 3.14 and √3 = 1.73 (2 decimal places).",
            answer: 3.27,
            tolerance: 0.02,
            unit: "cm²",
            difficulty: 3,
            explain: "Sector = ⅙ × 3.14 × 36 = 18.84. Triangle = 1.73/4 × 36 = 15.57. Segment = 3.27 cm².",
          },
          {
            kind: "truefalse",
            q: "The area of a sector is always greater than the area of the corresponding minor segment.",
            answer: true,
            explain: "Segment = sector − triangle, and the triangle has positive area (for θ < 180°).",
          },
          {
            kind: "order",
            q: "Order the steps to find the area of a minor segment.",
            items: [
              "Find the angle θ at the centre",
              "Compute the sector area θ/360 × πr²",
              "Compute the area of triangle OAB",
              "Subtract the triangle from the sector",
            ],
            explain: "Segment = sector − triangle.",
          },
          {
            kind: "numeric",
            q: "A chord of a circle of radius 21 cm subtends 120° at the centre. Find the area of the minor segment (cm²), using π = 22/7 and √3 = 1.73.",
            answer: 271.27,
            tolerance: 0.05,
            unit: "cm²",
            difficulty: 3,
            hint: "For 120°, area of △OAB = (√3/4) r², the same as for 60°.",
            explain: "Sector = ⅓ × 22/7 × 441 = 462 cm². △OAB = ½ r² sin 120° = (1.73/4) × 441 = 190.73 cm². Segment = 462 − 190.73 ≈ 271.27 cm².",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "icse10-similarity",
    title: "Similarity",
    icon: "🔺",
    description: "Similar triangles, the AA, SAS and SSS criteria, the basic proportionality theorem, area ratios, maps and models.",
    lessons: [
      {
        slug: "similar-triangles",
        title: "Similar triangles and BPT",
        summary: "Tests for similarity, corresponding sides, and the basic proportionality (Thales) theorem.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A 6 m pole in Delhi casts a 4 m shadow while a nearby tower casts a 28 m shadow. Without climbing, we know the tower is 42 m tall, because the sun's rays make **similar triangles**: same shape, sizes in proportion.",
          },
          {
            type: "text",
            md: "Two triangles are **similar** (△ABC ~ △PQR) when corresponding angles are equal and corresponding sides are in the same ratio:",
          },
          { type: "formula", tex: t`\triangle ABC \sim \triangle PQR \iff \angle A = \angle P,\ \angle B = \angle Q,\ \angle C = \angle R \text{ and } \frac{AB}{PQ} = \frac{BC}{QR} = \frac{CA}{RP}` },
          {
            type: "table",
            headers: ["Criterion", "What you need"],
            rows: [
              ["AA (or AAA)", "Two angles of one equal to two angles of the other"],
              ["SAS", "One angle equal and the sides including it proportional"],
              ["SSS", "All three pairs of sides proportional"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is this information enough to prove two triangles similar?",
              groups: ["Enough (a valid test)", "Not enough"],
              items: [
                { text: "Two angles of one equal two angles of the other", group: 0, hint: "AA." },
                { text: "All three pairs of sides in the same ratio", group: 0, hint: "SSS." },
                { text: "One angle equal and the sides including it proportional", group: 0, hint: "SAS." },
                { text: "Only one pair of angles equal", group: 1, hint: "One angle alone does not fix the shape." },
                { text: "Two sides proportional and a non-included angle equal", group: 1, hint: "That is SSA." },
                { text: "Two pairs of sides proportional, nothing about angles", group: 1, hint: "The angle between them can still change." },
              ],
              explain: "The valid tests are **AA**, **SAS** (the equal angle must be *between* the proportional sides) and **SSS**. One angle, SSA, or two sides alone do not fix the shape.",
            },
          },
          { type: "heading", text: "Basic Proportionality Theorem (Thales)" },
          {
            type: "text",
            md: "If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio. In △ABC with DE ∥ BC (D on AB, E on AC): $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$. The converse is also true.",
          },
          {
            type: "example",
            problem: "In △ABC, DE ∥ BC with D on AB and E on AC. AD = 3 cm, DB = 2 cm and AE = 4.5 cm. Find EC, and find DE if BC = 10 cm.",
            steps: [
              "By BPT: AD/DB = AE/EC, so 3/2 = 4.5/EC and EC = 4.5 × 2 ÷ 3 = 3 cm.",
              "In △ADE and △ABC: ∠A is common and ∠ADE = ∠ABC (corresponding angles, DE ∥ BC). So △ADE ~ △ABC (AA).",
              "Corresponding sides: DE/BC = AD/AB = 3/(3 + 2) = 3/5.",
              "DE = 3/5 × 10 = 6 cm.",
            ],
            answer: "**EC = 3 cm** and **DE = 6 cm**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 6 m pole casts a 4 m shadow. At the same time a tower casts a 28 m shadow. Height of the tower (m)?",
                answer: 42,
                unit: "m",
                explain: "6/4 = h/28, so h = 42 m.",
              },
            ],
          },
          { type: "heading", text: "The right-triangle altitude" },
          {
            type: "text",
            md: "In right △ABC with ∠B = 90° and BD ⊥ AC, the three triangles ABD, BCD and ACB are all similar. This gives $BD^2 = AD\\cdot DC$. If AD = 4 and DC = 9, then BD = 6.",
          },
          {
            type: "mistake",
            wrong: "∠A = ∠Q and ∠B = ∠P, so △ABC ~ △PQR.",
            right: "Write the vertices in **corresponding order**: △ABC ~ △QPR.",
            why: "The order tells you which sides match: AB ↔ QP, BC ↔ PR, CA ↔ RQ. A wrong order gives wrong side ratios. ICSE gives marks for the correct correspondence and the reason (e.g. \"AA postulate\").",
          },
          {
            type: "keypoints",
            items: [
              "Similar = equal angles + proportional sides.",
              "Criteria: AA, SAS, SSS.",
              "BPT: DE ∥ BC ⇒ AD/DB = AE/EC.",
              "In a right triangle, altitude to the hypotenuse: BD² = AD · DC.",
            ],
          },
        ],
        flashcards: [
          { front: "Three similarity criteria", back: "AA, SAS, SSS" },
          { front: "Basic Proportionality Theorem", back: "A line parallel to one side divides the other two sides proportionally" },
          { front: "Altitude BD to hypotenuse AC of right △ABC", back: "BD² = AD · DC" },
          { front: "Congruent vs similar", back: "Congruent: same shape and size. Similar: same shape, sides in proportion" },
          { front: "Is SSA a similarity test?", back: "No" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "△ABC ~ △PQR with AB = 6 cm, PQ = 9 cm and BC = 8 cm. Find QR (cm).",
            answer: 12,
            unit: "cm",
            explain: "Scale factor 9/6 = 1.5; QR = 8 × 1.5 = 12 cm.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT a test for similar triangles?",
            options: ["AA", "SAS", "SSS", "SSA"],
            answer: 3,
            explain: "SSA does not guarantee similarity.",
          },
          {
            kind: "numeric",
            q: "In △ABC, DE ∥ BC with AD = 2 cm, DB = 3 cm and AC = 10 cm. Find AE (cm).",
            answer: 4,
            unit: "cm",
            difficulty: 2,
            explain: "AD/AB = AE/AC: 2/5 = AE/10, so AE = 4 cm.",
          },
          {
            kind: "truefalse",
            q: "All congruent triangles are similar, but not all similar triangles are congruent.",
            answer: true,
            explain: "Congruence is similarity with scale factor 1.",
          },
          {
            kind: "fill",
            q: "The Basic Proportionality Theorem is also called ___ theorem.",
            answer: ["Thales", "Thales'", "Thales's", "Thales’"],
            explain: "It is named after the Greek mathematician Thales.",
          },
          {
            kind: "numeric",
            q: "In △ABC, DE ∥ BC with AD = x, DB = x − 2, AE = x + 2 and EC = x − 1 (in cm). Find x.",
            answer: 4,
            difficulty: 3,
            hint: "BPT gives AD/DB = AE/EC; cross-multiply and the x² terms cancel.",
            explain: "x/(x − 2) = (x + 2)/(x − 1), so x² − x = x² − 4, giving x = 4.",
          },
        ],
      },
      {
        slug: "similarity-areas-maps-models",
        title: "Areas, maps and models",
        summary: "Area ratio equals the square of the side ratio; use scale factors k, k² and k³ for maps and models.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "If you double every side of a triangle, its area does not double: it becomes **four** times. This simple fact drives the ICSE \"maps and models\" questions.",
          },
          { type: "formula", tex: t`\triangle ABC \sim \triangle DEF \;\Rightarrow\; \frac{\text{ar}(\triangle ABC)}{\text{ar}(\triangle DEF)} = \left(\frac{AB}{DE}\right)^2 = \left(\frac{BC}{EF}\right)^2 = \left(\frac{CA}{FD}\right)^2` },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              emoji: "🔺",
              prompt: "Every side of a triangle is made 3 times as long. Its area becomes how many times as large?",
              options: ["3 times", "6 times", "9 times", "27 times"],
              answer: 2,
              trap: 0,
              explain: "Area ratio = (side ratio)² = 3² = **9**. Both the base and the height are tripled, so the area grows 3 × 3 times. (27 = 3³ would be the factor for volume.)",
            },
          },
          {
            type: "text",
            md: "The same square ratio holds for corresponding altitudes, medians and angle bisectors: area ratio = (ratio of altitudes)².",
          },
          {
            type: "text",
            md: "**Example:** Two similar triangles have sides in the ratio 2 : 3. If the smaller has area 48 cm², the larger has area 48 × 9/4 = **108 cm²**.",
          },
          { type: "heading", text: "Scale factor k for maps and models" },
          {
            type: "table",
            headers: ["Quantity", "Scale factor"],
            rows: [
              ["Length", "k"],
              ["Area", "k²"],
              ["Volume", "k³"],
            ],
          },
          {
            type: "example",
            title: "A map of Shimla",
            problem: "A map of Shimla has scale 1 : 20,000. Find the actual distance for 5 cm on the map and the actual area for 3 cm² on the map.",
            steps: [
              "Length factor k = 20,000. Distance: 5 × 20,000 = 1,00,000 cm = 1 km.",
              "Area factor k² = 20,000² = 4 × 10⁸. Area: 3 × 4 × 10⁸ = 1.2 × 10⁹ cm².",
              "Convert: 1 km² = 10¹⁰ cm², so 1.2 × 10⁹ cm² = 0.12 km².",
            ],
            answer: "Actual distance **1 km**; actual area **0.12 km²**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A model ship is made to scale 1 : 200. The model's volume is 50 cm³. Find the ship's actual volume (m³).",
                answer: 400,
                unit: "m³",
                difficulty: 2,
                explain: "Volume factor 200³ = 8 × 10⁶. 50 × 8 × 10⁶ = 4 × 10⁸ cm³ = 400 m³ (1 m³ = 10⁶ cm³).",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "On a 1 : 20,000 map, 3 cm² stands for 3 × 20,000 = 60,000 cm², and since 1 km = 10⁵ cm, 1 km² = 10⁵ cm².",
            right: "Use **k²** for area: 3 × 20,000² = 1.2 × 10⁹ cm². And 1 km² = (10⁵)² = **10¹⁰ cm²**, so the area is 0.12 km².",
            why: "Area has two dimensions, so both the scale and the unit conversion are squared (cubed for volume): 1 m² = 10⁴ cm², 1 km² = 10¹⁰ cm², 1 m³ = 10⁶ cm³. Most lost marks in this chapter come from unit conversion, not from the similarity itself.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Midpoint shortcut",
            md: "If D and E are midpoints of AB and AC, then DE ∥ BC and DE = ½BC, so ar(△ADE) : ar(△ABC) = 1 : 4 and ar(△ADE) : ar(trapezium DBCE) = 1 : 3.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Areas of two similar triangles are 81 cm² and 49 cm². The ratio of their corresponding sides is:",
                options: ["81 : 49", "9 : 7", "3 : 7", "√9 : 7"],
                answer: 1,
                explain: "Side ratio = √(81/49) = 9/7.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Area ratio of similar triangles = (side ratio)².",
              "Scale k: lengths × k, areas × k², volumes × k³.",
              "Convert units only after applying the scale factor.",
              "Midpoint triangle has one quarter of the area.",
            ],
          },
        ],
        flashcards: [
          { front: "Ratio of areas of similar triangles", back: "Square of the ratio of corresponding sides" },
          { front: "Map scale 1 : k, area factor", back: "k²" },
          { front: "Model scale 1 : k, volume factor", back: "k³" },
          { front: "1 km² in cm²", back: "10¹⁰ cm²" },
          { front: "ar(△ADE) : ar(△ABC) when D, E are midpoints", back: "1 : 4" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "On a map of scale 1 : 50,000, two towns are 6 cm apart. Find the actual distance (km).",
            answer: 3,
            unit: "km",
            explain: "6 × 50,000 = 3,00,000 cm = 3 km.",
          },
          {
            kind: "numeric",
            q: "On the same 1 : 50,000 map, a lake has area 4 cm². Find its actual area (km²).",
            answer: 1,
            unit: "km²",
            difficulty: 2,
            explain: "4 × (5 × 10⁴)² = 4 × 25 × 10⁸ = 10¹⁰ cm² = 1 km².",
          },
          {
            kind: "numeric",
            q: "In △ABC, D and E are midpoints of AB and AC. If ar(△ABC) = 64 cm², find ar(trapezium DBCE) (cm²).",
            answer: 48,
            unit: "cm²",
            explain: "ar(△ADE) = 64/4 = 16; trapezium = 64 − 16 = 48 cm².",
          },
          {
            kind: "numeric",
            q: "A model of a building is 1 : 200. Its floor area in the model is 30 cm². Find the actual floor area (m²).",
            answer: 120,
            unit: "m²",
            difficulty: 2,
            explain: "30 × 200² = 12,00,000 cm² = 120 m² (1 m² = 10⁴ cm²).",
          },
          {
            kind: "truefalse",
            q: "If the volumes of two similar solids are in the ratio 27 : 8, their corresponding lengths are in the ratio 3 : 2.",
            answer: true,
            explain: "Length ratio = cube root of the volume ratio = 3 : 2.",
          },
          {
            kind: "numeric",
            q: "Two similar triangles have areas 25 cm² and 64 cm². The altitude of the smaller one is 4 cm. Find the corresponding altitude of the larger one (cm).",
            answer: 6.4,
            unit: "cm",
            difficulty: 2,
            hint: "Altitude ratio = √(area ratio).",
            explain: "Altitude ratio = √(64/25) = 8/5. Larger altitude = 4 × 8/5 = 6.4 cm.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "icse10-loci",
    title: "Loci",
    icon: "📍",
    description: "The standard loci and their theorems, and using intersecting loci to locate points in constructions.",
    lessons: [
      {
        slug: "loci-theorems",
        title: "Standard loci and theorems",
        summary: "What a locus is, the four basic loci, and the theorems on perpendicular bisectors and angle bisectors.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "A goat tied to a peg by a 5 m rope in a field in Punjab can graze up to a circle of radius 5 m. If the rope is kept tight, the goat's path is exactly that circle. A **locus** is the set of all points (and only those points) satisfying a given condition, often the path traced by a moving point.",
          },
          { type: "heading", text: "The basic loci" },
          {
            type: "table",
            headers: ["Condition", "Locus"],
            rows: [
              ["At a fixed distance r from a fixed point O", "Circle with centre O, radius r"],
              ["At a fixed distance d from a fixed line l", "Pair of lines parallel to l, one on each side, at distance d"],
              ["Equidistant from two fixed points A and B", "Perpendicular bisector of AB"],
              ["Equidistant from two intersecting lines", "Pair of lines bisecting the angles between them"],
              ["Equidistant from two parallel lines", "Line parallel to both, midway between them"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each real situation with its locus.",
              pairs: [
                ["The tip of a clock's minute hand", "A circle"],
                ["The centre of a coin rolling along a straight ruler", "A line parallel to the ruler"],
                ["Points equally far from two lamp posts A and B", "The perpendicular bisector of AB"],
                ["Points equally far from two straight roads that cross", "The pair of angle bisectors"],
                ["Points equally far from two parallel rail tracks", "A line midway between the tracks"],
              ],
              explain: "Turn each situation into a condition (fixed distance from a point, fixed distance from a line, equidistant from two points or two lines), then read off the **standard locus**.",
            },
          },
          { type: "heading", text: "The two ICSE theorems" },
          {
            type: "list",
            items: [
              "**Theorem 1:** Any point on the perpendicular bisector of AB is equidistant from A and B; conversely, any point equidistant from A and B lies on it.",
              "**Theorem 2:** Any point on the bisector of an angle is equidistant from its arms; conversely, any point equidistant from the arms lies on the bisector.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Concurrency",
            md: "The three perpendicular bisectors of a triangle meet at the **circumcentre** (equidistant from the vertices). The three angle bisectors meet at the **incentre** (equidistant from the sides).",
          },
          {
            type: "example",
            problem: "Describe the locus of the centres of all circles passing through two fixed points P and Q.",
            steps: [
              "Let O be the centre of any such circle. OP and OQ are both radii, so OP = OQ.",
              "So O is equidistant from the two fixed points P and Q.",
              "By Theorem 1, points equidistant from P and Q lie on the perpendicular bisector of PQ, and every point on it works.",
            ],
            answer: "The locus is **the perpendicular bisector of PQ**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The locus of the centre of a wheel rolling along a straight, level road is:",
                options: ["A circle", "A line parallel to the road", "A point", "The perpendicular bisector of the road"],
                answer: 1,
                explain: "The centre stays at a constant height (the radius) above the road.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The locus of points equidistant from two intersecting lines is one line: the bisector of the angle between them.",
            right: "It is a **pair of lines**: the bisectors of both pairs of angles, at right angles to each other.",
            why: "Two crossing lines make two different angles (θ and 180° − θ), and points in either angle can be equidistant. Only when the question restricts the region (e.g. inside ∠ABC) do you use just one bisector.",
          },
          {
            type: "keypoints",
            items: [
              "A locus is a set of points satisfying a condition.",
              "Equidistant from two points: perpendicular bisector.",
              "Equidistant from two intersecting lines: angle bisectors.",
              "Circumcentre = perpendicular bisectors meet; incentre = angle bisectors meet.",
            ],
          },
        ],
        flashcards: [
          { front: "Locus of points equidistant from A and B", back: "Perpendicular bisector of AB" },
          { front: "Locus of points equidistant from two intersecting lines", back: "The pair of angle bisectors" },
          { front: "Locus of points 3 cm from a fixed point", back: "Circle of radius 3 cm" },
          { front: "Point equidistant from the vertices of a triangle", back: "Circumcentre" },
          { front: "Point equidistant from the sides of a triangle", back: "Incentre" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The locus of points at 2 cm from a fixed line l is:",
            options: ["A circle of radius 2 cm", "One line parallel to l", "Two lines parallel to l, 2 cm on each side", "The perpendicular to l"],
            answer: 2,
            explain: "Points can be on either side of l.",
          },
          {
            kind: "fill",
            q: "The point inside a triangle that is equidistant from all three sides is called the ___ .",
            answer: ["incentre", "incenter"],
            explain: "It is where the angle bisectors meet.",
          },
          {
            kind: "truefalse",
            q: "The locus of the centres of circles touching a line l at a given point P is the line through P perpendicular to l.",
            answer: true,
            explain: "The radius to the point of contact is perpendicular to the tangent.",
          },
          {
            kind: "mcq",
            q: "In rhombus ABCD, the locus of points equidistant from AB and AD (inside the rhombus) is:",
            options: ["Diagonal BD", "Diagonal AC", "Side BC", "The perpendicular bisector of AB"],
            answer: 1,
            difficulty: 2,
            explain: "It is the bisector of ∠A, and in a rhombus the diagonal AC bisects ∠A.",
          },
          {
            kind: "mcq",
            q: "The circumcentre of a triangle is the point where the ___ meet.",
            options: ["Medians", "Altitudes", "Perpendicular bisectors of the sides", "Angle bisectors"],
            answer: 2,
            explain: "The circumcentre is equidistant from the vertices, so it lies on each perpendicular bisector.",
          },
          {
            kind: "numeric",
            q: "How many points are equidistant from three non-collinear points A, B and C?",
            answer: 1,
            difficulty: 2,
            hint: "Such a point lies on the perpendicular bisectors of AB and BC.",
            explain: "The perpendicular bisectors of AB and BC meet in exactly one point, the circumcentre of △ABC.",
          },
        ],
      },
      {
        slug: "intersecting-loci",
        title: "Intersecting loci in constructions",
        summary: "Find points that satisfy two conditions at once by drawing both loci and marking where they meet.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A mobile tower must be equally far from two villages A and B **and** within 3 km of a highway. Each condition is a locus; the required points are where the loci **intersect**. Board questions are built exactly this way.",
          },
          {
            type: "example",
            problem: "Construct △ABC with AB = 6 cm, BC = 5 cm and ∠ABC = 60°. Find a point P equidistant from AB and BC, and also equidistant from B and C. Measure BP.",
            steps: [
              "Draw BC = 5 cm. At B construct 60° with compasses and mark A on that ray with BA = 6 cm. Join AC.",
              "Locus 1 (equidistant from AB and BC): bisect ∠ABC.",
              "Locus 2 (equidistant from B and C): draw the perpendicular bisector of BC.",
              "The two loci meet at P. Measure BP.",
              t`Check by calculation: the bisector makes $30^\circ$ with BC, and P is above the midpoint of BC, so $BP = \dfrac{2.5}{\cos 30^\circ} \approx 2.89$ cm.`,
            ],
            answer: "P is where the bisector of ∠B meets the perpendicular bisector of BC; **BP ≈ 2.9 cm**.",
          },
          { type: "illustration", emoji: "📐✏️", caption: "Keep all construction arcs visible — they earn the method marks." },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A point equidistant from the three vertices of a triangle is found by intersecting:",
                options: ["Two angle bisectors", "Two perpendicular bisectors of sides", "Two medians", "Two altitudes"],
                answer: 1,
                explain: "Two perpendicular bisectors meet at the circumcentre; the third passes through it too.",
              },
            ],
          },
          { type: "heading", text: "How many points?" },
          {
            type: "text",
            md: "Counting intersections is a favourite short question. Points 3 cm from O and 2 cm from a line through O: the circle (radius 3) meets each of the two parallel lines (2 cm away) at two points, giving **4 points**. If the lines were 4 cm away, the circle would miss them: **no** such point.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              emoji: "📍",
              prompt: "A is a point on line l. How many points are 2 cm from A and also 2 cm from l?",
              options: ["0", "2", "4", "Infinitely many"],
              answer: 1,
              trap: 2,
              explain: "The two lines parallel to l are 2 cm away, exactly the radius of the circle round A. So the circle only **touches** each line once: 2 points, not 4. Compare the distance with the radius before counting.",
            },
          },
          {
            type: "mistake",
            wrong: "Points 3 cm from O and 2 cm from a line l through O: the circle meets the line 2 cm away in 2 points, so there are 2 such points.",
            right: "There are **4** points: the circle meets each of the **two** lines parallel to l (one on each side) in 2 points.",
            why: "The locus of points at a fixed distance from a line is a *pair* of parallel lines. Forgetting the second line halves the count.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Write a short statement of each locus on your answer sheet (\"P lies on the bisector of ∠B because it is equidistant from BA and BC\"). ICSE awards marks for the justification, not just the point.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Special triangles",
            md: "The circumcentre of a right triangle is the midpoint of the hypotenuse. In an equilateral triangle, circumcentre, incentre, centroid and orthocentre coincide.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "The circumcentre of an obtuse-angled triangle lies outside the triangle.",
                answer: true,
                explain: "For an obtuse triangle the perpendicular bisectors meet outside, beyond the longest side.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Draw each locus separately; the answer is their intersection.",
              "Equidistant from two sides: angle bisector. From two points: perpendicular bisector.",
              "Count intersections by comparing distances with radii.",
              "State the reason for each locus in your answer.",
            ],
          },
        ],
        flashcards: [
          { front: "Points satisfying two conditions", back: "Intersection of the two loci" },
          { front: "Circumcentre of a right triangle", back: "Midpoint of the hypotenuse" },
          { front: "Points 3 cm from O and 2 cm from a line through O", back: "4 points" },
          { front: "Equilateral triangle: circumcentre and incentre", back: "Coincide" },
          { front: "Circumcentre of an obtuse-angled triangle", back: "Lies outside the triangle" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many points are 1 cm from a point A lying on line l, and also 2 cm from l?",
            answer: 0,
            difficulty: 2,
            explain: "The circle of radius 1 cm around A never reaches the lines 2 cm away from l.",
          },
          {
            kind: "numeric",
            q: "How many points are equidistant from two fixed points A and B, and 5 cm from A, if AB = 6 cm?",
            answer: 2,
            difficulty: 2,
            explain: "The perpendicular bisector is 3 cm from A; the circle of radius 5 around A cuts it in 2 points.",
          },
          {
            kind: "mcq",
            q: "In the worked example, P lies on:",
            options: ["Bisector of ∠B and perpendicular bisector of BC", "Bisector of ∠A and perpendicular bisector of AB", "Median from B and altitude from A", "Bisector of ∠C only"],
            answer: 0,
            explain: "Equidistant from AB and BC → bisector of ∠B; equidistant from B and C → perpendicular bisector of BC.",
          },
          {
            kind: "truefalse",
            q: "The circumcentre of a right-angled triangle is the midpoint of its hypotenuse.",
            answer: true,
            explain: "The hypotenuse is a diameter of the circumcircle (angle in a semicircle).",
          },
          {
            kind: "order",
            q: "Order the steps to locate a point equidistant from AB and BC and from B and C in △ABC.",
            items: [
              "Construct the triangle from the given data",
              "Bisect ∠ABC",
              "Draw the perpendicular bisector of BC",
              "Mark the intersection P",
              "Measure the required length",
            ],
            explain: "Construct, draw both loci, intersect, measure.",
          },
          {
            kind: "numeric",
            q: "Two lines intersect at O. How many points are equidistant from both lines and 3 cm from O?",
            answer: 4,
            difficulty: 2,
            hint: "Equidistant from two intersecting lines gives two angle bisectors through O.",
            explain: "The two angle bisectors pass through O; a circle of radius 3 cm round O cuts each bisector in 2 points, giving 4 points.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "icse10-constructions",
    title: "Constructions",
    icon: "📐",
    description: "Tangents to a circle, circumscribed and inscribed circles of triangles, and circles of regular hexagons.",
    lessons: [
      {
        slug: "constructing-tangents",
        title: "Constructing tangents to a circle",
        summary: "Draw a tangent at a point and the pair of tangents from an external point, and check the length by Pythagoras.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "A tangent touches a circle at exactly one point and is **perpendicular to the radius** there. Every tangent construction uses this right angle.",
          },
          { type: "heading", text: "Tangent at a point P on the circle" },
          {
            type: "list",
            ordered: true,
            items: [
              "Join the centre O to P.",
              "At P, construct a line perpendicular to OP.",
              "This line is the tangent at P.",
            ],
          },
          { type: "heading", text: "Two tangents from an external point P" },
          {
            type: "list",
            ordered: true,
            items: [
              "Draw the circle with centre O and mark P outside it. Join OP.",
              "Bisect OP; let the midpoint be M.",
              "With centre M and radius MO, draw a circle cutting the given circle at T and T′.",
              "Join PT and PT′. These are the required tangents.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "How many tangents can be drawn to the circle (centre O, radius r) from the point P?",
              groups: ["None", "Exactly one", "Exactly two"],
              items: [
                { text: "OP = 2 cm, r = 3 cm", group: 0, hint: "P is inside the circle." },
                { text: "P lies on the circle", group: 1 },
                { text: "OP = 5 cm, r = 3 cm", group: 2, hint: "P is outside the circle." },
                { text: "P is the centre O", group: 0, hint: "The centre is inside." },
                { text: "OP = r", group: 1, hint: "P is on the circle." },
                { text: "OP = 2r", group: 2, hint: "P is outside." },
              ],
              explain: "Compare OP with r. **Inside** (OP < r): no tangent. **On** the circle (OP = r): exactly one, perpendicular to OP. **Outside** (OP > r): exactly two, and they are equal in length.",
            },
          },
          {
            type: "text",
            md: "**Why it works:** ∠OTP is an angle in a semicircle (on diameter OP), so ∠OTP = 90°: PT is perpendicular to the radius OT, hence a tangent.",
          },
          { type: "formula", tex: t`PT = PT' = \sqrt{OP^2 - r^2}`, caption: "Tangents from an external point are equal." },
          {
            type: "example",
            problem: "Draw a circle of radius 3 cm. Mark a point P 5 cm from the centre O. Construct the two tangents from P and measure their lengths.",
            steps: [
              "Draw the circle with centre O, radius 3 cm. Mark P with OP = 5 cm and join OP.",
              "Bisect OP at M (OM = 2.5 cm). With centre M and radius MO, draw a circle cutting the given circle at T and T′.",
              "Join PT and PT′.",
              "Check: ∠OTP = 90°, so $PT = \\sqrt{OP^2 - r^2} = \\sqrt{25 - 9} = 4$ cm. Your measured PT should read 4 cm.",
            ],
            answer: "PT = PT′ = **4 cm**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A tangent from P to a circle of radius 5 cm has length 12 cm. Find OP (cm).",
                answer: 13,
                unit: "cm",
                explain: "OP = √(5² + 12²) = √169 = 13 cm.",
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Tangents at a given angle",
            md: "If two tangents must meet at an angle θ, the radii to the points of contact meet at 180° − θ. For tangents at 60°, draw two radii at 120° and erect perpendiculars at their ends.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Do not rub out construction arcs and write the steps of construction if asked. Measuring with a protractor instead of constructing angles with compasses (60°, 90°, 120°) loses marks.",
          },
          {
            type: "mistake",
            wrong: "From a point P 5 cm from the centre of a circle of radius 3 cm, the tangent length is OP − r = 2 cm.",
            right: "The tangent length is $\\sqrt{OP^2 - r^2} = \\sqrt{25 - 9} =$ **4 cm**.",
            why: "OP − r is the distance from P to the nearest point of the circle along OP, not along the tangent. The tangent meets the radius at 90°, so △OTP is right-angled at T and Pythagoras applies.",
          },
          {
            type: "keypoints",
            items: [
              "Tangent ⟂ radius at the point of contact.",
              "From an external point: bisect OP, draw a circle on OP as diameter.",
              "Tangent length = √(OP² − r²); both tangents are equal.",
              "Tangents meeting at θ ⇔ radii at 180° − θ.",
            ],
          },
        ],
        flashcards: [
          { front: "Angle between tangent and radius at contact", back: "90°" },
          { front: "Length of tangent from P", back: "√(OP² − r²)" },
          { front: "Key step for tangents from an external point", back: "Draw a circle on OP as diameter" },
          { front: "Tangents meet at 60°: angle between radii", back: "120°" },
          { front: "Tangents from a point inside the circle", back: "None" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Circle of radius 3 cm, P is 5 cm from the centre. Length of each tangent from P (cm)?",
            answer: 4,
            unit: "cm",
            explain: "√(25 − 9) = 4 cm.",
          },
          {
            kind: "mcq",
            q: "How many tangents can be drawn to a circle from a point on the circle?",
            options: ["0", "1", "2", "Infinitely many"],
            answer: 1,
            explain: "Exactly one tangent at each point of the circle.",
          },
          {
            kind: "numeric",
            q: "Two tangents to a circle meet at an angle of 70°. Find the angle between the radii to the points of contact (degrees).",
            answer: 110,
            unit: "°",
            explain: "In quadrilateral OTPT′, two angles are 90°, so ∠TOT′ = 360 − 180 − 70 = 110°.",
          },
          {
            kind: "truefalse",
            q: "The two tangents drawn from an external point to a circle are equal in length.",
            answer: true,
            explain: "△OTP ≅ △OT′P (RHS), so PT = PT′.",
          },
          {
            kind: "order",
            q: "Order the steps for drawing tangents from an external point P.",
            items: [
              "Join OP",
              "Bisect OP at M",
              "Draw a circle with centre M and radius MO",
              "Mark where it cuts the given circle at T and T′",
              "Join PT and PT′",
            ],
            explain: "The circle on OP as diameter gives the right angles at T and T′.",
          },
          {
            kind: "numeric",
            q: "Two tangents PT and PT′ to a circle of radius 3 cm meet at 60°. Find OP (cm).",
            answer: 6,
            unit: "cm",
            difficulty: 3,
            hint: "OP bisects the 60° angle, so ∠OPT = 30° in the right triangle OTP.",
            explain: "In △OTP, ∠T = 90° and ∠OPT = 30°, so OT/OP = sin 30° = ½. OP = 2 × 3 = 6 cm.",
          },
        ],
      },
      {
        slug: "circumcircle-incircle-hexagon",
        title: "Circumcircles, incircles and regular hexagons",
        summary: "Construct the circumcircle and incircle of a triangle and the circles of a regular hexagon, and compute their radii.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "These constructions use the loci you already know: perpendicular bisectors for the **circumcircle** (through the vertices) and angle bisectors for the **incircle** (touching the sides).",
          },
          {
            type: "table",
            headers: ["Circle", "Centre found by", "Radius"],
            rows: [
              ["Circumcircle", "Perpendicular bisectors of any two sides → circumcentre O", "OA (distance to any vertex)"],
              ["Incircle", "Bisectors of any two angles → incentre I", "Perpendicular from I to any side"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which lines would you construct to find the centre?",
              groups: ["Perpendicular bisectors of sides", "Angle bisectors"],
              items: [
                { text: "The circumcircle of a triangle", group: 0 },
                { text: "The incircle of a triangle", group: 1 },
                { text: "A point equidistant from the three vertices", group: 0, hint: "Equidistant from points." },
                { text: "A point equidistant from the three sides", group: 1, hint: "Equidistant from lines." },
                { text: "A circle passing through A, B and C", group: 0 },
                { text: "A circle touching AB, BC and CA", group: 1 },
              ],
              explain: "Through the **vertices** → equidistant from points → perpendicular bisectors (**circumcentre**). Touching the **sides** → equidistant from lines → angle bisectors (**incentre**).",
            },
          },
          { type: "heading", text: "Steps for the incircle" },
          {
            type: "list",
            ordered: true,
            items: [
              "Construct the triangle from the given data.",
              "Bisect two of its angles; they meet at I.",
              "From I draw a perpendicular IM to one side.",
              "With centre I and radius IM, draw the circle. It touches all three sides.",
            ],
          },
          {
            type: "example",
            title: "Checking radii",
            problem: "Before constructing, predict the circumradius and inradius of (a) a right triangle with sides 3, 4 and 5 cm, and (b) an equilateral triangle of side 6 cm, so you can check your measured circles.",
            steps: [
              "(a) The hypotenuse is a diameter of the circumcircle, so circumradius = 5 ÷ 2 = 2.5 cm.",
              t`(a) Area = ½ × 3 × 4 = 6 cm², semi-perimeter s = (3 + 4 + 5) ÷ 2 = 6 cm, so inradius $r = \dfrac{\text{Area}}{s} = \dfrac{6}{6} = 1$ cm.`,
              t`(b) Circumradius $R = \dfrac{a}{\sqrt3} = \dfrac{6}{\sqrt3} = 2\sqrt3 \approx 3.46$ cm.`,
              t`(b) Inradius $r = \dfrac{a}{2\sqrt3} = \sqrt3 \approx 1.73$ cm, so $R = 2r$.`,
            ],
            answer: "(a) R = **2.5 cm**, r = **1 cm**. (b) R ≈ **3.46 cm**, r ≈ **1.73 cm**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the inradius (cm) of a triangle with sides 6 cm, 8 cm and 10 cm.",
                answer: 2,
                unit: "cm",
                explain: "Right triangle: area = 24, s = 12, r = 24/12 = 2 cm.",
              },
            ],
          },
          { type: "heading", text: "Regular hexagon" },
          {
            type: "text",
            md: "A regular hexagon is made of six equilateral triangles meeting at the centre. So the **circumscribing circle has radius equal to the side**. To draw a hexagon of side 4 cm inside a circle, draw a circle of radius 4 cm and step off chords of 4 cm six times. Each interior angle is 120°; each central angle is 60°.",
          },
          { type: "formula", tex: t`R_{\text{hexagon}} = a, \qquad r_{\text{hexagon}} = \frac{\sqrt3}{2}a`, caption: "For a = 4 cm: R = 4 cm, inscribed circle radius = 2√3 ≈ 3.46 cm" },
          {
            type: "mistake",
            wrong: "After finding the incentre I, set the compass to IA (the distance to a vertex) and draw the incircle.",
            right: "The inradius is the **perpendicular** distance from I to a side: draw IM ⊥ BC first and use IM.",
            why: "The incircle touches the sides, not the vertices, and I is always farther from a vertex than from a side, so a circle of radius IA would cross the sides. For an obtuse triangle the circumcentre lies outside, so extend the bisectors.",
          },
          { type: "illustration", emoji: "⬡", caption: "A regular hexagon: six equilateral triangles around the centre." },
          {
            type: "keypoints",
            items: [
              "Circumcircle: perpendicular bisectors; incircle: angle bisectors.",
              "Inradius = area ÷ semi-perimeter; right triangle circumradius = half the hypotenuse.",
              "Equilateral triangle: R = a/√3, r = a/(2√3), R = 2r.",
              "Regular hexagon: circumradius = side; inradius = (√3/2) × side.",
            ],
          },
        ],
        flashcards: [
          { front: "Centre of the circumcircle", back: "Intersection of perpendicular bisectors of the sides" },
          { front: "Centre of the incircle", back: "Intersection of the angle bisectors" },
          { front: "Inradius formula", back: "r = Area ÷ semi-perimeter" },
          { front: "Circumradius of a regular hexagon of side a", back: "a" },
          { front: "Interior angle of a regular hexagon", back: "120°" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the circumradius (cm) of a right triangle whose hypotenuse is 10 cm.",
            answer: 5,
            unit: "cm",
            explain: "Circumradius = half the hypotenuse = 5 cm.",
          },
          {
            kind: "numeric",
            q: "A regular hexagon is inscribed in a circle of radius 5 cm. Find the perimeter of the hexagon (cm).",
            answer: 30,
            unit: "cm",
            explain: "Side = radius = 5 cm; perimeter = 6 × 5 = 30 cm.",
          },
          {
            kind: "fill",
            q: "To construct the incircle of a triangle, we draw the ___ of two angles.",
            answer: ["bisectors", "bisector", "angle bisectors"],
            explain: "The incentre is the intersection of the angle bisectors.",
          },
          {
            kind: "truefalse",
            q: "For an equilateral triangle, the circumradius is twice the inradius.",
            answer: true,
            explain: "R = a/√3 and r = a/(2√3), so R = 2r.",
          },
          {
            kind: "mcq",
            q: "The radius of the circle inscribed in a regular hexagon of side 4 cm is about:",
            options: ["2 cm", "3.46 cm", "4 cm", "6.93 cm"],
            answer: 1,
            difficulty: 2,
            explain: "r = (√3/2) × 4 = 2√3 ≈ 3.46 cm.",
          },
          {
            kind: "numeric",
            q: "Find the inradius (cm) of a triangle with sides 13 cm, 14 cm and 15 cm.",
            answer: 4,
            unit: "cm",
            difficulty: 3,
            hint: "Use Heron's formula for the area, then r = area ÷ s.",
            explain: "s = 21. Area = √(21 × 8 × 7 × 6) = √7056 = 84 cm². r = 84 ÷ 21 = 4 cm.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "icse10-mensuration",
    title: "Mensuration",
    icon: "🧊",
    description: "Surface area and volume of cylinders, cones, spheres and hemispheres, combined solids and recasting.",
    lessons: [
      {
        slug: "solids-formulas",
        title: "Cylinder, cone, sphere and hemisphere",
        summary: "Curved and total surface areas and volumes of the four standard solids, with worked numericals.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A steel water tank on a Chennai rooftop is a cylinder, an ice-cream cone is a cone, a cricket ball is a sphere and a katori is a hemisphere. Paint, tin sheet and wrapping need **surface area**; water, ice-cream and metal need **volume**.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Do you need the surface area or the volume?",
              groups: ["Surface area", "Volume"],
              items: [
                { text: "Paint for a hemispherical dome", group: 0, hint: "Paint covers a surface." },
                { text: "Water a rooftop tank can hold", group: 1 },
                { text: "Tin sheet to make a closed can", group: 0 },
                { text: "Ice-cream that fills a cone", group: 1 },
                { text: "Leather to cover a cricket ball", group: 0 },
                { text: "Metal melted to cast a solid ball", group: 1, hint: "Metal fills the space inside." },
              ],
              explain: "Covering, painting, wrapping or making from sheet → **surface area** (cm²). Filling, holding, melting or casting → **volume** (cm³ or litres).",
            },
          },
          {
            type: "table",
            headers: ["Solid", "Curved surface area", "Total surface area", "Volume"],
            rows: [
              ["Cylinder (r, h)", "$2\\pi rh$", "$2\\pi r(r + h)$", "$\\pi r^2 h$"],
              ["Cone (r, h, l)", "$\\pi r l$", "$\\pi r(l + r)$", "$\\tfrac13\\pi r^2 h$"],
              ["Sphere (r)", "$4\\pi r^2$", "$4\\pi r^2$", "$\\tfrac43\\pi r^3$"],
              ["Hemisphere (r)", "$2\\pi r^2$", "$3\\pi r^2$", "$\\tfrac23\\pi r^3$"],
            ],
          },
          { type: "formula", tex: t`l = \sqrt{r^2 + h^2}`, caption: "Slant height of a cone" },
          {
            type: "example",
            title: "A cone",
            problem: "A cone has base radius 7 cm and height 24 cm. Find its slant height, CSA, TSA and volume (π = 22/7).",
            steps: [
              "Slant height l = √(r² + h²) = √(49 + 576) = √625 = 25 cm.",
              "CSA = πrl = 22/7 × 7 × 25 = 550 cm².",
              "TSA = CSA + base = 550 + 22/7 × 49 = 550 + 154 = 704 cm².",
              "Volume = ⅓πr²h = ⅓ × 22/7 × 49 × 24 = ⅓ × 154 × 24 = 1232 cm³.",
            ],
            answer: "l = **25 cm**, CSA = **550 cm²**, TSA = **704 cm²**, volume = **1232 cm³**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the volume of a sphere of radius 21 cm (cm³). (π = 22/7)",
                answer: 38808,
                unit: "cm³",
                explain: "4/3 × 22/7 × 21³ = 4/3 × 22/7 × 9261 = 38,808 cm³.",
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Units",
            md: "1 litre = 1000 cm³ and 1 m³ = 1000 litres. A cylindrical tank of radius 0.7 m and height 2 m holds 22/7 × 0.49 × 2 = 3.08 m³ = **3080 litres**.",
          },
          {
            type: "mistake",
            wrong: "The total surface area of a solid hemisphere of radius r is 2πr², half of a sphere's 4πr².",
            right: "A **solid** hemisphere has TSA = 2πr² (curved) + πr² (flat circle) = **3πr²**. Only a hollow bowl's curved surface is 2πr².",
            why: "Cutting a sphere in half creates a new flat face. In the same way an open cylinder (no lid) has 2πrh + πr². Read whether the object is open, closed, hollow or solid.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "If the radius of a sphere is tripled, its volume becomes:",
                options: ["3 times", "6 times", "9 times", "27 times"],
                answer: 3,
                explain: "V ∝ r³, so 3³ = 27 times.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Cylinder: CSA 2πrh, V πr²h. Cone: CSA πrl, V ⅓πr²h.",
              "Sphere: SA 4πr², V 4/3 πr³. Hemisphere: CSA 2πr², TSA 3πr², V 2/3 πr³.",
              "Slant height l = √(r² + h²).",
              "1 litre = 1000 cm³; 1 m³ = 1000 L.",
            ],
          },
        ],
        flashcards: [
          { front: "CSA of a cone", back: "πrl, where l = √(r² + h²)" },
          { front: "Volume of a cone", back: "⅓ πr²h" },
          { front: "TSA of a solid hemisphere", back: "3πr²" },
          { front: "Volume of a sphere", back: "4/3 πr³" },
          { front: "1 m³ in litres", back: "1000 litres" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the total surface area of a closed cylinder with radius 7 cm and height 13 cm (cm²). (π = 22/7)",
            answer: 880,
            unit: "cm²",
            explain: "2πr(r + h) = 2 × 22/7 × 7 × 20 = 880 cm².",
          },
          {
            kind: "numeric",
            q: "Find the slant height of a cone with radius 5 cm and height 12 cm (cm).",
            answer: 13,
            unit: "cm",
            explain: "√(25 + 144) = 13 cm.",
          },
          {
            kind: "numeric",
            q: "How many litres does a cylindrical vessel of radius 7 cm and height 20 cm hold? (π = 22/7)",
            answer: 3.08,
            unit: "L",
            difficulty: 2,
            explain: "V = 22/7 × 49 × 20 = 3080 cm³ = 3.08 litres.",
          },
          {
            kind: "numeric",
            q: "Find the total surface area of a solid hemisphere of radius 10.5 cm (cm²). (π = 22/7)",
            answer: 1039.5,
            unit: "cm²",
            explain: "3πr² = 3 × 22/7 × 110.25 = 1039.5 cm².",
          },
          {
            kind: "truefalse",
            q: "A cone and a cylinder with the same base and height: the cone's volume is one third of the cylinder's.",
            answer: true,
            explain: "⅓πr²h versus πr²h.",
          },
          {
            kind: "numeric",
            q: "An open cylindrical tin (no lid) has radius 7 cm and height 10 cm. Find the area of tin sheet needed to make it (cm²). (π = 22/7)",
            answer: 594,
            unit: "cm²",
            difficulty: 2,
            hint: "Curved surface plus one circular base only.",
            explain: "2πrh + πr² = 2 × 22/7 × 7 × 10 + 22/7 × 49 = 440 + 154 = 594 cm².",
          },
        ],
      },
      {
        slug: "combined-solids-recasting",
        title: "Combined solids and recasting",
        summary: "Surface area and volume of solids joined together, and melting one solid to make others.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A toy top is a cone on a hemisphere; a capsule is a cylinder with two hemispherical ends. For **volume**, just add the parts. For **surface area**, add only the surfaces you can actually touch: the joined faces disappear.",
          },
          {
            type: "example",
            title: "A toy",
            problem: "A toy is a cone of radius 3.5 cm and height 12 cm mounted on a hemisphere of the same radius. Find its total surface area and volume (π = 22/7).",
            steps: [
              "Slant height l = √(3.5² + 12²) = √(12.25 + 144) = √156.25 = 12.5 cm.",
              "Exposed surfaces: curved surface of the cone + curved surface of the hemisphere (the joined circles are hidden).",
              "TSA = πrl + 2πr² = 22/7 × 3.5 × 12.5 + 2 × 22/7 × 12.25 = 137.5 + 77 = 214.5 cm².",
              "Volume = ⅓πr²h + ⅔πr³ = ⅓πr²(h + 2r) = ⅓ × 22/7 × 12.25 × 19 = 731.5 ÷ 3 ≈ 243.83 cm³.",
            ],
            answer: "TSA = **214.5 cm²**; volume ≈ **243.83 cm³**.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "When you find the surface area of the combined solid, is this face counted or hidden?",
              groups: ["Counted (exposed)", "Hidden (joined)"],
              items: [
                { text: "Curved surface of the cone in a toy top", group: 0 },
                { text: "Circular base of the cone in a toy top", group: 1, hint: "It is glued to the hemisphere." },
                { text: "Curved surface of the hemisphere in a toy top", group: 0 },
                { text: "Flat face of the hemisphere in a toy top", group: 1, hint: "It is glued to the cone." },
                { text: "Curved surface of the cylinder in a capsule", group: 0 },
                { text: "Flat circular ends of the cylinder in a capsule", group: 1, hint: "The hemispheres cover them." },
              ],
              explain: "Only surfaces you can touch count. Every face where two parts are **joined** disappears, so a combined solid uses **curved surfaces** of its parts.",
            },
          },
          {
            type: "mistake",
            wrong: "Surface area of the toy = TSA(cone) + TSA(hemisphere) = (πrl + πr²) + 3πr².",
            right: "Use only the exposed surfaces: **πrl + 2πr²** = 214.5 cm².",
            why: "The circular faces where the cone and hemisphere join are hidden inside the toy, so they must not be added. This is the single most common error in this chapter. For **volume**, on the other hand, simply add the parts.",
          },
          { type: "heading", text: "Recasting: volume is conserved" },
          { type: "formula", tex: t`\text{Volume melted} = \text{Volume of new solid(s)}`, caption: "Surface area usually changes; volume does not." },
          {
            type: "text",
            md: t`**Worked example 2:** A metal sphere of radius 6 cm is melted and recast into a cylinder of radius 4 cm. Then $\tfrac43\pi(6)^3 = \pi(4)^2 h$, i.e. $288 = 16h$, so **h = 18 cm**.`,
          },
          {
            type: "text",
            md: t`**Worked example 3:** How many lead shots of radius 1 cm can be made from a sphere of radius 3 cm? $n = \dfrac{\tfrac43\pi(3)^3}{\tfrac43\pi(1)^3} = 27$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A cone of radius 6 cm and height 24 cm is melted into a sphere. Find the sphere's radius (cm).",
                answer: 6,
                unit: "cm",
                difficulty: 2,
                explain: "⅓πr²h = 4/3 πR³ gives r²h = 4R³: 36 × 24 = 864 = 4R³, R³ = 216, R = 6 cm.",
              },
            ],
          },
          { type: "heading", text: "Rise in water level" },
          {
            type: "text",
            md: "A sphere of radius 3 cm is dropped into a cylindrical jar of radius 6 cm containing water. Volume displaced = 4/3 π × 27 = 36π, which equals π × 36 × (rise), so the water rises by **1 cm**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "When a solid is melted and recast, its total surface area stays the same.",
                answer: false,
                explain: "Only the volume is conserved; the surface area generally changes.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Volume of a combined solid = sum of the volumes of the parts.",
              "Surface area of a combined solid = sum of the exposed surfaces only.",
              "Recasting: volume before = volume after (× number of pieces).",
              "Water level rise = volume immersed ÷ base area of the container.",
            ],
          },
        ],
        flashcards: [
          { front: "What is conserved when a solid is recast?", back: "Volume" },
          { front: "TSA of a cone on a hemisphere", back: "πrl + 2πr²" },
          { front: "Number of small spheres from a big one", back: "(R/r)³" },
          { front: "Rise in water level", back: "Volume immersed ÷ base area of vessel" },
          { front: "Capsule surface area (cylinder h, radius r)", back: "2πrh + 4πr²" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "From a solid cylinder of radius 7 cm and height 15 cm, a cone of the same base and height is removed. Find the volume left (cm³). (π = 22/7)",
            answer: 1540,
            unit: "cm³",
            explain: "Cylinder = 22/7 × 49 × 15 = 2310. Remaining = ⅔ × 2310 = 1540 cm³.",
          },
          {
            kind: "numeric",
            q: "How many spheres of radius 2 cm can be made by melting a sphere of radius 8 cm?",
            answer: 64,
            explain: "(8/2)³ = 4³ = 64.",
          },
          {
            kind: "numeric",
            q: "A capsule is a cylinder of length 10 mm and radius 3 mm with a hemisphere at each end. Find its surface area in mm², using π = 3.14.",
            answer: 301.44,
            tolerance: 0.05,
            unit: "mm²",
            difficulty: 3,
            explain: "2πrh + 4πr² = 3.14 × (60 + 36) = 3.14 × 96 = 301.44 mm².",
          },
          {
            kind: "mcq",
            q: "A sphere of radius 3 cm is dropped into a cylinder of radius 6 cm partly filled with water. The water level rises by:",
            options: ["0.5 cm", "1 cm", "2 cm", "3 cm"],
            answer: 1,
            explain: "36π = π × 36 × h, so h = 1 cm.",
          },
          {
            kind: "truefalse",
            q: "The total surface area of a cone placed on a hemisphere equals TSA(cone) + TSA(hemisphere).",
            answer: false,
            explain: "The joined circular faces are hidden; use πrl + 2πr².",
          },
          {
            kind: "numeric",
            q: "A solid is a hemisphere of radius 7 cm with a cone of the same radius and height 24 cm on top. Find its total surface area (cm²). (π = 22/7)",
            answer: 858,
            unit: "cm²",
            difficulty: 3,
            hint: "Find the slant height first; then add only the two curved surfaces.",
            explain: "l = √(49 + 576) = 25 cm. πrl = 22/7 × 7 × 25 = 550. 2πr² = 2 × 22/7 × 49 = 308. TSA = 550 + 308 = 858 cm².",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Areas Related to Circles": "icse10-areas-circles",
  Similarity: "icse10-similarity",
  Loci: "icse10-loci",
  Constructions: "icse10-constructions",
  Mensuration: "icse10-mensuration",
  "Surface Areas and Volumes": "icse10-mensuration",
};
