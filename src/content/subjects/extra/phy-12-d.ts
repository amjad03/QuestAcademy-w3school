import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Ray Optics and Optical Instruments (NCERT Class 12, Chapter 9)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-ray-optics",
    title: "Ray Optics and Optical Instruments",
    icon: "🔍",
    description: "Spherical mirrors, refraction and total internal reflection, lenses and the lens maker's formula, prisms, microscopes and telescopes, all in the NCERT Cartesian sign convention.",
    lessons: [
      /* ---------------- Lesson 1: Reflection and spherical mirrors ---------------- */
      {
        slug: "c12-ro-mirrors",
        title: "Reflection and Spherical Mirrors",
        summary: "Laws of reflection, the Cartesian sign convention, f = R/2, the mirror equation and magnification, and image formation by concave and convex mirrors.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚗",
            caption: "The side mirror of a car says 'objects in mirror are closer than they appear'. A convex mirror always gives a small, upright image, and this lesson shows why.",
          },
          {
            type: "text",
            md: t`In ray optics we treat light as travelling in straight lines called **rays**. This works when the objects and openings are much larger than the wavelength of light (about 400–750 nm).

**Laws of reflection:** (1) the angle of incidence equals the angle of reflection, both measured from the **normal** at the point of incidence; (2) the incident ray, the reflected ray and the normal lie in the same plane. These laws hold for any surface, plane or curved. For a spherical mirror the normal at any point is along the radius through that point.

Key terms: the **pole** P is the centre of the mirror surface; the **centre of curvature** C is the centre of the sphere the mirror is part of; the line through P and C is the **principal axis**. Rays close to the axis and making small angles with it are **paraxial rays**. Paraxial rays parallel to the axis meet (concave) or seem to diverge from (convex) one point, the **principal focus** F. The distance PF is the **focal length** $f$.`,
          },
          {
            type: "table",
            headers: ["NCERT Cartesian sign convention", "Rule"],
            rows: [
              ["Origin", "All distances are measured from the pole of the mirror (or the optical centre of a lens)."],
              ["Along the axis", "Distances in the direction of the incident light are **positive**; against it, **negative**. With light going left to right, a real object always has $u < 0$."],
              ["Heights", "Heights above the principal axis are **positive**, below it **negative**."],
              ["Result for mirrors", t`Concave mirror: $f < 0$, $R < 0$. Convex mirror: $f > 0$, $R > 0$.`],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Derivation of** $f = R/2$. A paraxial ray parallel to the axis hits a concave mirror at M. CM is the normal, so the angle of incidence is $\theta = \angle MCP$.`,
              t`The reflected ray passes through F. By the law of reflection, $\angle CMF = \theta$, so the exterior angle $\angle MFP = 2\theta$.`,
              t`Drop a perpendicular MD on the axis. Then $\tan\theta = \dfrac{MD}{CD}$ and $\tan 2\theta = \dfrac{MD}{FD}$.`,
              t`For small $\theta$, $\tan\theta \approx \theta$, $\tan 2\theta \approx 2\theta$ and D is almost at P. So $\dfrac{MD}{FP} = 2\,\dfrac{MD}{CP}$, giving $FP = \dfrac{CP}{2}$, that is $f = \dfrac{R}{2}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{1}{v} + \frac{1}{u} = \frac{1}{f}, \qquad f = \frac{R}{2}, \qquad m = \frac{h'}{h} = -\frac{v}{u}`,
            caption: "Mirror equation and linear magnification. u = object distance, v = image distance, both measured from the pole with sign. m < 0: real, inverted image; m > 0: virtual, erect image.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Derivation of the mirror equation.** Object AB stands on the axis in front of a concave mirror; its real image is A'B'. Take a ray from A parallel to the axis (reflects through F, meeting the mirror at M) and a ray from A to the pole P.`,
              t`Triangles A'B'F and MPF are similar (paraxial, M taken on the vertical through P): $\dfrac{B'A'}{PM} = \dfrac{B'F}{FP}$, and $PM = BA$, so $\dfrac{B'A'}{BA} = \dfrac{B'F}{FP}$.`,
              t`Triangles A'B'P and ABP are similar (equal angles of incidence and reflection at P): $\dfrac{B'A'}{BA} = \dfrac{B'P}{BP}$.`,
              t`So $\dfrac{B'P - FP}{FP} = \dfrac{B'P}{BP}$. Put in the signed values $B'P = -v$, $FP = -f$, $BP = -u$: $\dfrac{-v + f}{-f} = \dfrac{v}{u}$.`,
              t`This gives $\dfrac{v}{f} - 1 = \dfrac{v}{u}$. Divide by $v$: $\dfrac{1}{v} + \dfrac{1}{u} = \dfrac{1}{f}$. Also $m = \dfrac{h'}{h} = \dfrac{-B'A'}{BA} = -\dfrac{v}{u}$ with signs.`,
            ],
          },
          {
            type: "example",
            title: "Concave mirror: real image",
            problem: "A 2.0 cm tall candle stands 25 cm in front of a concave mirror of focal length 15 cm. Find the position, nature and size of the image.",
            steps: [
              t`Signs: light goes towards the mirror, so $u = -25$ cm; concave mirror, so $f = -15$ cm.`,
              t`$\dfrac{1}{v} = \dfrac{1}{f} - \dfrac{1}{u} = -\dfrac{1}{15} + \dfrac{1}{25} = \dfrac{-5 + 3}{75} = -\dfrac{2}{75}$, so $v = -37.5$ cm.`,
              t`$m = -\dfrac{v}{u} = -\dfrac{-37.5}{-25} = -1.5$.`,
              t`$h' = m h = -1.5 \times 2.0 = -3.0$ cm.`,
            ],
            answer: "The image is 37.5 cm in front of the mirror (v = −37.5 cm), real, inverted and 3.0 cm tall (magnified 1.5 times).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A concave shaving mirror has a radius of curvature of magnitude 40 cm. What is its focal length in cm, with the NCERT sign?",
                answer: -20,
                unit: "cm",
                explain: t`$f = R/2$ and for a concave mirror $R = -40$ cm, so $f = -20$ cm. The focus lies in front of the mirror, against the direction of incident light.`,
              },
            ],
          },
          {
            type: "table",
            headers: ["Object position (concave mirror)", "Image position", "Nature and size"],
            rows: [
              ["At infinity", "At F", "Real, inverted, point-sized"],
              ["Beyond C", "Between F and C", "Real, inverted, diminished"],
              ["At C", "At C", "Real, inverted, same size"],
              ["Between C and F", "Beyond C", "Real, inverted, magnified"],
              ["At F", "At infinity", "Real, inverted, highly magnified"],
              ["Between F and P", "Behind the mirror", "Virtual, erect, magnified"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the image real and inverted, or virtual and erect?",
              groups: ["Real and inverted", "Virtual and erect"],
              items: [
                { text: "Concave mirror, object beyond C", group: 0, hint: "Beyond C the image forms between F and C in front of the mirror." },
                { text: "Concave mirror, object between F and P", group: 1, hint: "Inside F the reflected rays diverge; they only seem to meet behind the mirror." },
                { text: "Convex mirror, object anywhere in front", group: 1, hint: "A convex mirror always diverges the rays from a real object." },
                { text: "Concave mirror, object at C", group: 0, hint: "At C the image is at C, same size, upside down." },
                { text: "Plane mirror", group: 1, hint: "A plane mirror image is behind the mirror and upright." },
                { text: "Concave mirror, object between C and F", group: 0, hint: "The image forms beyond C, magnified and inverted." },
              ],
              explain: "For a real object, a concave mirror gives a real, inverted image unless the object is inside the focus. A convex mirror and a plane mirror always give virtual, erect images. Real images have m < 0, virtual images m > 0.",
            },
          },
          {
            type: "example",
            title: "Convex rear-view mirror",
            problem: "The convex rear-view mirror of an auto-rickshaw has a radius of curvature of 3.0 m. A bus is 6.0 m behind it. Where is the image and what is the magnification?",
            steps: [
              t`Convex mirror: $R = +3.0$ m, so $f = +1.5$ m. The bus is in front: $u = -6.0$ m.`,
              t`$\dfrac{1}{v} = \dfrac{1}{f} - \dfrac{1}{u} = \dfrac{1}{1.5} + \dfrac{1}{6.0} = \dfrac{4 + 1}{6} = \dfrac{5}{6}$, so $v = +1.2$ m.`,
              t`$m = -\dfrac{v}{u} = -\dfrac{1.2}{-6.0} = +0.2$.`,
            ],
            answer: "The image is 1.2 m behind the mirror, virtual, erect and one-fifth the size of the bus. Because it is small, the driver sees a wide field of view.",
          },
          {
            type: "mistake",
            wrong: "A concave mirror converges light, so its focal length is positive.",
            right: "In the NCERT Cartesian convention a concave mirror has a negative focal length and a convex mirror a positive one.",
            why: "The sign depends on where F lies, not on whether the mirror converges. Light falls on the mirror from the left, so the focus of a concave mirror lies against the incident direction and is negative. Students who mix this up get a positive v and call a real image virtual.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Derivations of f = R/2 and the mirror equation each carry 2–3 marks: draw the ray diagram, name the similar triangles and write the sign substitution (B'P = −v, FP = −f, BP = −u) as a separate step. In numericals, write the sign of every known quantity before you substitute; the examiner gives a mark for it. Always end with the nature of the image (real or virtual, erect or inverted, size).",
          },
          {
            type: "keypoints",
            items: [
              "The laws of reflection hold at every point of a curved mirror; the normal is the radius.",
              t`For paraxial rays $f = R/2$. Concave: $f < 0$; convex: $f > 0$ (NCERT convention).`,
              t`Mirror equation $\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$; magnification $m = -\frac{v}{u}$.`,
              "m negative → real and inverted; m positive → virtual and erect.",
              "Convex mirrors give diminished erect images and a wide field of view, so they are used as rear-view mirrors.",
            ],
          },
        ],
        flashcards: [
          { front: "Paraxial rays", back: "Rays close to the principal axis making small angles with it. The mirror and lens formulas hold for them." },
          { front: "Relation between f and R for a spherical mirror", back: "f = R/2 (for paraxial rays)." },
          { front: "Mirror equation", back: "1/v + 1/u = 1/f, with all distances measured from the pole using signs." },
          { front: "Magnification of a mirror", back: "m = h'/h = −v/u. Negative m: real, inverted. Positive m: virtual, erect." },
          { front: "Sign of f for a concave mirror (NCERT)", back: "Negative, because the focus lies in front of the mirror, against the incident light." },
          { front: "Where does a concave mirror form a virtual image?", back: "Only when the object is between the focus and the pole. The image is behind the mirror, erect and magnified." },
          { front: "Why is a convex mirror used as a rear-view mirror?", back: "It always gives an erect, diminished image, so it shows a much wider field of view." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "An object is placed between the centre of curvature and the focus of a concave mirror. The image is:",
            options: ["Real, inverted and diminished, between F and C", "Real, inverted and magnified, beyond C", "Virtual, erect and magnified, behind the mirror", "Real, inverted, same size, at C"],
            answer: 1,
            explain: "Between C and F the image forms beyond C. It is real, inverted and larger than the object.",
          },
          {
            kind: "numeric",
            q: "An object is 30 cm in front of a concave mirror of focal length 20 cm. What is the image distance v in cm, with sign?",
            answer: -60,
            unit: "cm",
            explain: t`$u = -30$, $f = -20$. $\frac{1}{v} = -\frac{1}{20} + \frac{1}{30} = -\frac{1}{60}$, so $v = -60$ cm (real image in front of the mirror).`,
            difficulty: 2,
            hint: "Write u and f with negative signs before substituting.",
          },
          {
            kind: "numeric",
            q: "In the previous situation (u = −30 cm, v = −60 cm), what is the magnification m?",
            answer: -2,
            explain: t`$m = -\frac{v}{u} = -\frac{-60}{-30} = -2$. The image is inverted and twice as tall.`,
          },
          {
            kind: "truefalse",
            q: "A convex mirror can form a real image of a real object.",
            answer: false,
            explain: "For a real object, a convex mirror always makes the reflected rays diverge, so the image is always virtual, erect and diminished.",
          },
          {
            kind: "mcq",
            q: "A dentist wants an erect, magnified image of a tooth. She should use:",
            options: ["A convex mirror with the tooth anywhere", "A concave mirror with the tooth between F and P", "A concave mirror with the tooth beyond C", "A plane mirror held close"],
            answer: 1,
            explain: "Only a concave mirror with the object inside its focus gives a virtual, erect, magnified image. A convex mirror always diminishes.",
          },
          {
            kind: "numeric",
            q: "A convex mirror of focal length 20 cm forms an image of an object placed 20 cm in front of it. What is the magnification?",
            answer: 0.5,
            explain: t`$f = +20$, $u = -20$: $\frac{1}{v} = \frac{1}{20} + \frac{1}{20} = \frac{1}{10}$, so $v = +10$ cm. $m = -\frac{10}{-20} = +0.5$.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "For paraxial rays, the focal length of a spherical mirror is ___ of its radius of curvature.",
            answer: ["half", "one half", "1/2"],
            explain: "f = R/2.",
          },
        ],
      },

      /* ---------------- Lesson 2: Refraction and total internal reflection ---------------- */
      {
        slug: "c12-ro-refraction-tir",
        title: "Refraction and Total Internal Reflection",
        summary: "Snell's law, refractive index, apparent depth, the critical angle, total internal reflection and its uses: mirages, diamonds, prisms and optical fibres.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🥤",
            caption: "A straw in a glass of nimbu pani looks bent at the surface. Light changes direction as it passes from water into air.",
          },
          {
            type: "text",
            md: t`When light crosses the boundary between two media, part of it goes into the second medium and changes direction. This is **refraction**. Its laws: (1) the incident ray, the refracted ray and the normal lie in one plane; (2) **Snell's law**: $\dfrac{\sin i}{\sin r} = n_{21}$, a constant for the pair of media and the colour of light.

$n_{21}$ is the **refractive index of medium 2 with respect to medium 1**. If $n_{21} > 1$, medium 2 is **optically denser** and the ray bends **towards** the normal ($r < i$). The **absolute refractive index** of a medium is $n = c/v$, where $v$ is the speed of light in it. Then $n_{21} = \dfrac{n_2}{n_1} = \dfrac{v_1}{v_2}$ and $n_{12} = \dfrac{1}{n_{21}}$.`,
          },
          {
            type: "formula",
            tex: t`n_1 \sin i = n_2 \sin r, \qquad n_{21} = \frac{n_2}{n_1} = \frac{v_1}{v_2}`,
            caption: "Snell's law in symmetric form. The frequency of light does not change on refraction; its speed and wavelength do (λ in medium = λ in vacuum ÷ n).",
          },
          {
            type: "text",
            md: "A ray passing through a parallel-sided glass slab bends towards the normal on entering and away from it on leaving. The emergent ray is **parallel** to the incident ray but **shifted sideways** (lateral shift). The shift grows with the slab thickness and the angle of incidence.\n\nThe atmosphere also refracts sunlight: the air gets denser lower down, so rays from the Sun bend towards the Earth. We see the Sun about 2 minutes before it actually rises and about 2 minutes after it sets.",
          },
          {
            type: "example",
            title: "Snell's law",
            problem: t`A ray in air strikes a glass block of refractive index $\sqrt{3}$ at an angle of incidence of 60°. Find the angle of refraction and the speed of light in the glass. Take $c = 3.0 \times 10^8$ m/s.`,
            steps: [
              t`$\sin r = \dfrac{\sin 60^\circ}{\sqrt{3}} = \dfrac{\sqrt{3}/2}{\sqrt{3}} = \dfrac{1}{2}$, so $r = 30^\circ$.`,
              t`$v = \dfrac{c}{n} = \dfrac{3.0 \times 10^8}{1.732} \approx 1.73 \times 10^8$ m/s.`,
            ],
            answer: t`$r = 30^\circ$; speed in glass $\approx 1.73 \times 10^8$ m/s.`,
          },
          {
            type: "formula",
            tex: t`\text{apparent depth} = \frac{\text{real depth}}{n}, \qquad \text{rise} = h\left(1 - \frac{1}{n}\right)`,
            caption: "For viewing nearly along the normal from air, n is the refractive index of the liquid (or glass) with respect to air.",
          },
          {
            type: "example",
            title: "Apparent depth",
            problem: "A one-rupee coin lies at the bottom of a bucket filled with water to a depth of 20 cm. Seen from directly above, how deep does it appear? (Refractive index of water = 4/3.)",
            steps: [
              t`Apparent depth $= \dfrac{20}{4/3} = 20 \times \dfrac{3}{4} = 15$ cm.`,
              t`Rise $= 20 - 15 = 5$ cm, or $20\left(1 - \tfrac{3}{4}\right) = 5$ cm.`,
            ],
            answer: "The coin appears 15 cm deep, that is, raised by 5 cm.",
          },
          {
            type: "text",
            md: t`Now send light from a **denser** medium into a **rarer** one, for example from glass into air. The ray bends away from the normal, so $r > i$. As $i$ increases, $r$ reaches 90° first. The angle of incidence in the denser medium for which the angle of refraction is 90° is the **critical angle** $i_c$.

For $i > i_c$ no refraction is possible: all the light is reflected back into the denser medium. This is **total internal reflection (TIR)**. Two conditions are needed: (1) light travels from the denser to the rarer medium; (2) the angle of incidence exceeds the critical angle. TIR reflects 100% of the light, better than any mirror.`,
          },
          {
            type: "formula",
            tex: t`\sin i_c = \frac{1}{n_{21}} = \frac{n_{\text{rarer}}}{n_{\text{denser}}}`,
            caption: "Here n21 is the refractive index of the denser medium with respect to the rarer one. For a medium in air, sin ic = 1/n.",
          },
          {
            type: "table",
            headers: ["Medium (in air)", "Refractive index", "Critical angle"],
            rows: [
              ["Water", "1.33", "≈ 48.8°"],
              ["Crown glass", "1.52", "≈ 41.1°"],
              ["Glass (typical)", "1.50", "≈ 41.8°"],
              ["Diamond", "2.42", "≈ 24.4°"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Light inside glass (n = 1.5) meets a boundary with water (n = 4/3). What is sin ic for this boundary, to two decimal places?",
                answer: 0.89,
                tolerance: 0.01,
                explain: t`$\sin i_c = \frac{n_{\text{water}}}{n_{\text{glass}}} = \frac{4/3}{1.5} = \frac{8}{9} \approx 0.89$, so $i_c \approx 62.7^\circ$. It is larger than the glass–air value (41.8°) because the two indices are closer.`,
              },
            ],
          },
          {
            type: "text",
            md: "**TIR around us.** A **mirage** forms on hot roads in Rajasthan: air near the ground is hotter and rarer, so light from the sky bends more and more until it is totally reflected upwards; we see an inverted image like a pool of water. A **diamond** sparkles because its critical angle is only about 24.4°, so light entering it is totally reflected many times before it leaves. **Totally reflecting prisms** (right-angled, 45° prisms of glass with ic ≈ 42°) turn rays through 90° or 180° in binoculars and periscopes. **Optical fibres** have a glass core of higher refractive index inside a cladding of lower refractive index; light entering suitably is totally reflected again and again and travels along even a bent fibre with little loss. They carry phone and internet signals and are used in endoscopes.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A ray inside glass (n = 1.5) meets the glass–air surface at 45°. What happens?",
              emoji: "💎",
              options: ["It refracts into the air, bending away from the normal", "It is totally reflected back into the glass", "It passes straight through without bending"],
              answer: 1,
              trap: 0,
              explain: "The critical angle for glass is about 41.8°. Since 45° is greater, no refracted ray exists and all the light is reflected. This is why 45° prisms work as perfect reflectors.",
            },
          },
          {
            type: "mistake",
            wrong: "Total internal reflection can happen whenever the angle of incidence is large, even when light goes from air into glass.",
            right: "TIR needs light to travel from a denser to a rarer medium AND the angle of incidence to exceed the critical angle.",
            why: "Going from air into glass the ray bends towards the normal, so r is always less than i and there is always a refracted ray. A critical angle exists only when r can reach 90°, which happens only from denser to rarer.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Questions on TIR usually ask for the two conditions, the definition of critical angle, the relation sin ic = 1/n, and one application with a labelled diagram (optical fibre: core, cladding, repeated TIR). Write 'from optically denser to rarer'; just 'from glass to air' may lose the mark if the question is general.",
          },
          {
            type: "keypoints",
            items: [
              t`Snell's law: $n_1 \sin i = n_2 \sin r$; $n = c/v$; frequency stays the same on refraction.`,
              t`Apparent depth $= h/n$ when viewed along the normal.`,
              t`Critical angle: $\sin i_c = n_{\text{rarer}}/n_{\text{denser}}$.`,
              "TIR needs denser → rarer and i > ic. It explains mirages, the sparkle of diamonds, reflecting prisms and optical fibres.",
            ],
          },
        ],
        flashcards: [
          { front: "Snell's law", back: "sin i / sin r = n21, or n1 sin i = n2 sin r." },
          { front: "Absolute refractive index", back: "n = c/v, the ratio of the speed of light in vacuum to that in the medium." },
          { front: "What stays the same when light is refracted?", back: "Its frequency. Speed and wavelength both change by the factor 1/n." },
          { front: "Critical angle", back: "The angle of incidence in the denser medium for which the angle of refraction in the rarer medium is 90°." },
          { front: "Two conditions for TIR", back: "Light must go from optically denser to rarer, and the angle of incidence must be greater than the critical angle." },
          { front: "Why does a diamond sparkle?", back: "Its critical angle is small (about 24.4°), so light entering it is totally reflected many times before it emerges." },
          { front: "Structure of an optical fibre", back: "A core of higher refractive index surrounded by cladding of lower refractive index; light travels by repeated total internal reflection." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "The speed of light in a liquid is 2.0 × 10^8 m/s. What is its refractive index? (c = 3.0 × 10^8 m/s)",
            answer: 1.5,
            explain: t`$n = c/v = 3.0/2.0 = 1.5$.`,
          },
          {
            kind: "mcq",
            q: "Yellow light of wavelength 600 nm in air enters glass of refractive index 1.5. Its wavelength and frequency in glass are:",
            options: ["400 nm, unchanged frequency", "900 nm, unchanged frequency", "600 nm, frequency reduced 1.5 times", "400 nm, frequency increased 1.5 times"],
            answer: 0,
            explain: "Frequency is set by the source and does not change. λ = 600/1.5 = 400 nm.",
          },
          {
            kind: "numeric",
            q: "A fish is 1.2 m below the surface of a pond (n = 4/3). How deep does it appear to a person looking straight down, in m?",
            answer: 0.9,
            explain: t`Apparent depth $= 1.2 \times \frac{3}{4} = 0.9$ m.`,
          },
          {
            kind: "numeric",
            q: "The critical angle of a medium in air is 30°. What is its refractive index?",
            answer: 2,
            explain: t`$n = \frac{1}{\sin 30^\circ} = \frac{1}{0.5} = 2$.`,
          },
          {
            kind: "multi",
            q: "Which of these are explained by total internal reflection?",
            options: ["A mirage on a hot road", "The sparkle of a cut diamond", "Light travelling along a bent optical fibre", "A coin appearing raised in water"],
            answers: [0, 1, 2],
            explain: "Mirages, diamonds and optical fibres all depend on TIR. The raised coin is ordinary refraction at the water surface.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The ray that emerges from a parallel-sided glass slab is parallel to the incident ray.",
            answer: true,
            explain: "The bending at the two faces is equal and opposite, so the emergent ray is parallel to the incident ray but laterally shifted.",
          },
          {
            kind: "mcq",
            q: "In an optical fibre, the refractive index of the core is:",
            options: ["Less than that of the cladding", "Equal to that of the cladding", "Greater than that of the cladding", "Equal to 1"],
            answer: 2,
            explain: "TIR at the core–cladding boundary needs light to go from denser (core) to rarer (cladding).",
          },
        ],
      },

      /* ---------------- Lesson 3: Spherical surfaces and lenses ---------------- */
      {
        slug: "c12-ro-lenses",
        title: "Refraction at Spherical Surfaces and Lenses",
        summary: "Refraction at a single spherical surface, the lens maker's formula, the thin lens formula, magnification, power and combinations of thin lenses in contact.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Spectacles, phone cameras and the lens of your eye all work by refraction at curved surfaces. We build the lens formula in two stages: first one spherical surface, then two surfaces back to back.

Consider a spherical surface of radius $R$ separating medium 1 (index $n_1$) from medium 2 (index $n_2$), with light going from 1 to 2. A point object O on the axis forms an image I. With the NCERT convention ($R$ positive if the centre of curvature is on the side where light goes):`,
          },
          {
            type: "formula",
            tex: t`\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}`,
            caption: "Refraction at a single spherical surface (paraxial rays). u, v and R are measured from the pole of the surface.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Derivation.** A ray from O meets the surface at N; NM is perpendicular to the axis. Let $\alpha, \beta, \gamma$ be the angles that ON, NI and NC make with the axis. For paraxial rays $\alpha \approx \dfrac{MN}{OM}$, $\beta \approx \dfrac{MN}{MI}$, $\gamma \approx \dfrac{MN}{MC}$.`,
              t`From the triangles, the angle of incidence is $i = \alpha + \gamma$ and the angle of refraction is $r = \gamma - \beta$.`,
              t`Snell's law for small angles: $n_1 i = n_2 r$, so $n_1(\alpha + \gamma) = n_2(\gamma - \beta)$.`,
              t`Substitute: $\dfrac{n_1}{OM} + \dfrac{n_2}{MI} = \dfrac{n_2 - n_1}{MC}$.`,
              t`With signs $OM = -u$, $MI = +v$, $MC = +R$: $\dfrac{n_2}{v} - \dfrac{n_1}{u} = \dfrac{n_2 - n_1}{R}$.`,
            ],
          },
          {
            type: "example",
            title: "Single convex surface",
            problem: "A long glass rod (n = 1.5) has a convex end of radius 10 cm. A small bulb is 30 cm in front of this end, in air. Where is its image?",
            steps: [
              t`$n_1 = 1$, $n_2 = 1.5$, $u = -30$ cm, $R = +10$ cm (centre inside the glass).`,
              t`$\dfrac{1.5}{v} = \dfrac{1.5 - 1}{10} + \dfrac{1}{-30} = 0.05 - 0.0333 = 0.0167$ cm⁻¹.`,
              t`$v = \dfrac{1.5}{0.0167} = 90$ cm.`,
            ],
            answer: "A real image forms inside the rod, 90 cm from the curved end.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Lens maker's formula.** A thin lens of index $n_2$ sits in a medium of index $n_1$, with surface radii $R_1$ and $R_2$. For a thin lens all distances are taken from the optical centre.`,
              t`First surface: the object O gives an image $I_1$ at $v_1$: $\dfrac{n_2}{v_1} - \dfrac{n_1}{u} = \dfrac{n_2 - n_1}{R_1}$.`,
              t`Second surface: $I_1$ acts as the object for light going from glass back into the medium: $\dfrac{n_1}{v} - \dfrac{n_2}{v_1} = \dfrac{n_1 - n_2}{R_2}$.`,
              t`Add the two: $\dfrac{n_1}{v} - \dfrac{n_1}{u} = (n_2 - n_1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)$. Divide by $n_1$ and write $n_{21} = n_2/n_1$.`,
              t`For an object at infinity the image is at the focus ($u = -\infty$, $v = f$), so $\dfrac{1}{f} = (n_{21} - 1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)$, and the lens equation is $\dfrac{1}{v} - \dfrac{1}{u} = \dfrac{1}{f}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{1}{f} = (n_{21} - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right), \qquad \frac{1}{v} - \frac{1}{u} = \frac{1}{f}, \qquad m = \frac{h'}{h} = \frac{v}{u}`,
            caption: "Lens maker's formula, thin lens formula and magnification. Convex (converging) lens: f > 0. Concave (diverging) lens: f < 0.",
          },
          {
            type: "example",
            title: "Lens maker and image",
            problem: "An equiconvex lens is made of glass (n = 1.5) with both radii 20 cm. (a) Find its focal length in air. (b) A 1.5 cm tall object is placed 30 cm in front of it. Find the image.",
            steps: [
              t`(a) $R_1 = +20$ cm, $R_2 = -20$ cm. $\dfrac{1}{f} = (1.5 - 1)\left(\dfrac{1}{20} + \dfrac{1}{20}\right) = 0.5 \times 0.1 = 0.05$, so $f = +20$ cm.`,
              t`(b) $u = -30$ cm. $\dfrac{1}{v} = \dfrac{1}{f} + \dfrac{1}{u} = \dfrac{1}{20} - \dfrac{1}{30} = \dfrac{1}{60}$, so $v = +60$ cm.`,
              t`$m = \dfrac{v}{u} = \dfrac{60}{-30} = -2$; $h' = -2 \times 1.5 = -3.0$ cm.`,
            ],
            answer: "f = +20 cm. The image is 60 cm behind the lens, real, inverted and 3.0 cm tall.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An object is 10 cm in front of a convex lens of focal length 15 cm. What is the image distance v in cm, with sign?",
                answer: -30,
                unit: "cm",
                explain: t`$\frac{1}{v} = \frac{1}{15} + \frac{1}{-10} = \frac{2 - 3}{30} = -\frac{1}{30}$, so $v = -30$ cm. The image is virtual, on the same side as the object, and erect ($m = v/u = +3$). This is how a magnifying glass works.`,
              },
            ],
          },
          {
            type: "text",
            md: t`The **power** of a lens measures how strongly it converges or diverges light: $P = 1/f$ with $f$ in metres. Its SI unit is the **dioptre** (D) = m⁻¹. A converging lens has positive power, a diverging lens negative power. An optometrist's prescription of −2.5 D means a concave lens of focal length −0.40 m.

For thin lenses **in contact**, the image of the first lens is the object for the second. Adding their lens equations gives the result below. The total magnification is the product of the individual magnifications.`,
          },
          {
            type: "formula",
            tex: t`P = \frac{1}{f\,(\text{m})}, \qquad \frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} + \cdots, \qquad P = P_1 + P_2 + \cdots, \qquad m = m_1 m_2 \cdots`,
            caption: "Combination of thin lenses in contact.",
          },
          {
            type: "example",
            title: "Lenses in contact",
            problem: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. Find the power and focal length of the combination. Is it converging or diverging?",
            steps: [
              t`$P_1 = \dfrac{1}{0.20} = +5.0$ D; $P_2 = \dfrac{1}{-0.40} = -2.5$ D.`,
              t`$P = 5.0 - 2.5 = +2.5$ D.`,
              t`$f = \dfrac{1}{2.5} = 0.40$ m $= +40$ cm.`,
            ],
            answer: "P = +2.5 D, f = +40 cm. The combination is converging.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "You cover the lower half of a convex lens with black paper. The image on the screen:",
              emoji: "🔦",
              options: ["Loses its lower half", "Loses its upper half", "Is complete but dimmer"],
              answer: 2,
              trap: 0,
              explain: "Every point of the object sends rays through every part of the lens. The uncovered half still brings rays from each point to its image point, so the whole image forms, but with about half the light.",
            },
          },
          {
            type: "mistake",
            wrong: "The lens formula is 1/v + 1/u = 1/f, the same as for a mirror, and magnification is −v/u.",
            right: "For a thin lens, 1/v − 1/u = 1/f and m = v/u. For a mirror, 1/v + 1/u = 1/f and m = −v/u.",
            why: "In a mirror the light turns back, so the real image is on the same side as the object; in a lens it goes on through, so the real image is on the far side (v > 0). The signs in the formulas take care of this. Mixing them is the most common error in board numericals.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "The single-surface formula and the lens maker's formula are favourite 3-mark derivations: state the assumptions (thin lens, paraxial rays, point object on the axis), draw the diagram and add the two surface equations. In numericals with power, convert f to metres before taking 1/f. For an equiconvex lens remember R2 = −R1.",
          },
          {
            type: "keypoints",
            items: [
              t`Single surface: $\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$.`,
              t`Lens maker: $\frac{1}{f} = (n_{21} - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$; the focal length depends on the surrounding medium.`,
              t`Thin lens: $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$; $m = \frac{v}{u}$.`,
              "Power P = 1/f (f in metres), unit dioptre; lenses in contact: P = P1 + P2, m = m1 m2.",
            ],
          },
        ],
        flashcards: [
          { front: "Refraction at a single spherical surface", back: "n2/v − n1/u = (n2 − n1)/R, for paraxial rays." },
          { front: "Lens maker's formula", back: "1/f = (n21 − 1)(1/R1 − 1/R2), where n21 is the index of the lens relative to the surrounding medium." },
          { front: "Thin lens formula (NCERT)", back: "1/v − 1/u = 1/f." },
          { front: "Magnification of a lens", back: "m = h'/h = v/u." },
          { front: "Power of a lens", back: "P = 1/f with f in metres. Unit: dioptre (D). Convex: positive; concave: negative." },
          { front: "Focal length of thin lenses in contact", back: "1/f = 1/f1 + 1/f2, or P = P1 + P2." },
          { front: "Effect of covering half a lens", back: "The full image still forms, but it is less bright." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A concave lens has a focal length of 25 cm. What is its power in dioptre (with sign)?",
            answer: -4,
            unit: "D",
            explain: t`$P = \frac{1}{-0.25} = -4$ D.`,
          },
          {
            kind: "numeric",
            q: "An object is 20 cm in front of a concave lens of focal length 20 cm. What is the image distance v in cm (with sign)?",
            answer: -10,
            unit: "cm",
            explain: t`$\frac{1}{v} = \frac{1}{-20} + \frac{1}{-20} = -\frac{1}{10}$, so $v = -10$ cm: virtual, erect, half size.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A convex glass lens (n = 1.5) is dipped in a liquid of refractive index 1.5. It will:",
            options: ["Behave as a stronger convex lens", "Behave as a concave lens", "Behave like a plane glass sheet (no focusing)", "Keep the same focal length"],
            answer: 2,
            explain: t`$n_{21} = 1.5/1.5 = 1$, so $(n_{21} - 1) = 0$ and $1/f = 0$: the focal length becomes infinite.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A plano-convex lens (n = 1.5) has a curved surface of radius 15 cm. What is its focal length in cm?",
            answer: 30,
            unit: "cm",
            explain: t`$\frac{1}{f} = 0.5\left(\frac{1}{15} - \frac{1}{\infty}\right) = \frac{1}{30}$, so $f = 30$ cm.`,
          },
          {
            kind: "numeric",
            q: "Two thin lenses of powers +6 D and −2 D are in contact. What is the focal length of the combination in cm?",
            answer: 25,
            unit: "cm",
            explain: t`$P = +4$ D, so $f = \frac{1}{4}$ m $= 25$ cm.`,
          },
          {
            kind: "truefalse",
            q: "For a real object, a concave lens always forms a virtual, erect, diminished image.",
            answer: true,
            explain: "A diverging lens spreads the rays from a real object, so they only appear to come from a point on the object's side, closer to the lens.",
          },
          {
            kind: "mcq",
            q: "Light goes from air into glass (n = 1.5) through a convex spherical surface of radius R. Its focal length on the glass side is:",
            options: ["R", "2R", "3R", "R/2"],
            answer: 2,
            explain: t`Put $u = -\infty$: $\frac{1.5}{v} = \frac{0.5}{R}$, so $v = 3R$.`,
            difficulty: 3,
            hint: "Use the single-surface formula with the object at infinity.",
          },
        ],
      },

      /* ---------------- Lesson 4: Prism and optical instruments ---------------- */
      {
        slug: "c12-ro-prism-instruments",
        title: "Prisms and Optical Instruments",
        summary: "Deviation through a prism, the minimum-deviation formula, thin prisms, the simple and compound microscope, and refracting and reflecting telescopes.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`A **prism** has two refracting faces inclined at the **angle of the prism** $A$. A ray enters the first face at angle $i$, refracts at $r_1$, meets the second face at $r_2$ and leaves at angle of emergence $e$. The angle between the incident and emergent rays is the **angle of deviation** $\delta$. Geometry gives $r_1 + r_2 = A$ and $\delta = i + e - A$.

As $i$ increases, $\delta$ first decreases, reaches a **minimum deviation** $D_m$, then increases. At minimum deviation the ray passes **symmetrically**: $i = e$ and $r_1 = r_2$; inside an equilateral prism the ray then runs parallel to the base.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Derivation.** At minimum deviation $i = e$ and $r_1 = r_2 = r$.`,
              t`From $r_1 + r_2 = A$: $2r = A$, so $r = A/2$.`,
              t`From $\delta = i + e - A$: $D_m = 2i - A$, so $i = \dfrac{A + D_m}{2}$.`,
              t`Snell's law at the first face: $n_{21} = \dfrac{\sin i}{\sin r} = \dfrac{\sin\left(\frac{A + D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`n_{21} = \frac{\sin\left(\dfrac{A + D_m}{2}\right)}{\sin\left(\dfrac{A}{2}\right)}, \qquad \text{thin prism: } \delta = (n_{21} - 1)A`,
            caption: "For a thin prism (small A) the deviation is nearly the same for all small angles of incidence.",
          },
          {
            type: "example",
            title: "Refractive index from minimum deviation",
            problem: "In a lab at a Bengaluru PU college, a student finds that a 60° glass prism gives a minimum deviation of 38°. Find the refractive index of the glass. (sin 49° = 0.755)",
            steps: [
              t`$\dfrac{A + D_m}{2} = \dfrac{60^\circ + 38^\circ}{2} = 49^\circ$; $\dfrac{A}{2} = 30^\circ$.`,
              t`$n = \dfrac{\sin 49^\circ}{\sin 30^\circ} = \dfrac{0.755}{0.5} = 1.51$.`,
            ],
            answer: "n ≈ 1.51.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A thin prism of angle 4° is made of glass with n = 1.5. What is the deviation it produces, in degrees?",
                answer: 2,
                unit: "°",
                explain: t`$\delta = (n - 1)A = 0.5 \times 4^\circ = 2^\circ$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: dispersion",
            md: "The refractive index depends on colour: it is larger for violet than for red, so a prism splits white light into a spectrum (dispersion). The rationalised NCERT book only mentions this briefly, but ISC also asks for angular dispersion, θ = (nᵥ − nᵣ)A for a thin prism, and dispersive power ω = (nᵥ − nᵣ)/(n − 1), where n is the index for mean (yellow) light.",
          },
          {
            type: "text",
            md: t`**Simple microscope.** A convex lens of short focal length $f$ held close to the eye. The object is placed inside $f$, so a virtual, erect, magnified image forms. The **least distance of distinct vision** is $D = 25$ cm. **Magnifying power** (angular magnification) $m$ is the angle subtended by the image at the eye divided by the angle the object would subtend if placed at $D$. With the image at $D$, $m = 1 + D/f$ (maximum); with the image at infinity (relaxed eye), $m = D/f$.

**Compound microscope.** An **objective** of short focal length $f_o$ forms a real, inverted, magnified image near the **eyepiece**, which acts as a simple microscope. The total magnification is $m = m_o m_e$. If $L$ is the **tube length** (distance between the second focal point of the objective and the first focal point of the eyepiece), $m_o \approx L/f_o$.

**Astronomical (refracting) telescope.** The objective has a large focal length $f_o$ and a large aperture; the eyepiece a short $f_e$. In **normal adjustment** the final image is at infinity, $m = f_o/f_e$ and the tube length is $f_o + f_e$.`,
          },
          {
            type: "formula",
            tex: t`\text{simple: } m = 1 + \frac{D}{f}\ (\text{image at } D),\ \ m = \frac{D}{f}\ (\text{at } \infty); \qquad \text{compound: } m \approx \frac{L}{f_o}\cdot\frac{D}{f_e}; \qquad \text{telescope: } m = \frac{f_o}{f_e}`,
            caption: "D = 25 cm. For a telescope with the final image at the near point, m = (fo/fe)(1 + fe/D).",
          },
          {
            type: "example",
            title: "Compound microscope",
            problem: "A compound microscope has an objective of focal length 1.0 cm and an eyepiece of focal length 2.5 cm. An object is placed 1.2 cm from the objective, and the final image is at infinity. Find the magnifying power and the separation of the lenses.",
            steps: [
              t`Objective: $u = -1.2$ cm, $f_o = 1.0$ cm. $\dfrac{1}{v_o} = \dfrac{1}{1.0} - \dfrac{1}{1.2} = \dfrac{1}{6}$, so $v_o = 6.0$ cm.`,
              t`$m_o = \dfrac{v_o}{u} = \dfrac{6.0}{-1.2} = -5$.`,
              t`Final image at infinity, so the intermediate image is at the focus of the eyepiece: $m_e = \dfrac{D}{f_e} = \dfrac{25}{2.5} = 10$.`,
              t`$m = m_o m_e = -50$. Separation $= v_o + f_e = 6.0 + 2.5 = 8.5$ cm.`,
            ],
            answer: "Magnifying power 50 (the final image is inverted); the lenses are 8.5 cm apart.",
          },
          {
            type: "example",
            title: "Astronomical telescope",
            problem: "A telescope has an objective of focal length 120 cm and an eyepiece of focal length 4.0 cm. Find the magnifying power and tube length in normal adjustment, and the magnifying power when the final image is at 25 cm.",
            steps: [
              t`Normal adjustment: $m = \dfrac{f_o}{f_e} = \dfrac{120}{4.0} = 30$; length $= 120 + 4.0 = 124$ cm.`,
              t`Image at the near point: $m = \dfrac{f_o}{f_e}\left(1 + \dfrac{f_e}{D}\right) = 30 \times \left(1 + \dfrac{4}{25}\right) = 30 \times 1.16 = 34.8$.`,
            ],
            answer: "m = 30 and L = 124 cm in normal adjustment; m ≈ 34.8 with the image at 25 cm.",
          },
          {
            type: "table",
            headers: ["", "Refracting telescope", "Reflecting telescope (Cassegrain)"],
            rows: [
              ["Objective", "Large convex lens", "Large concave (paraboloidal) mirror"],
              ["Chromatic aberration", "Present (lens disperses light)", "None (mirror does not disperse)"],
              ["Spherical aberration", "Present", "Removed by a paraboloidal mirror"],
              ["Size and support", "Big lenses are heavy and sag; supported only at the rim", "Mirror supported over its whole back; much larger apertures possible"],
              ["Light path", "Straight through", "Secondary convex mirror sends light through a hole in the primary to the eyepiece"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each instrument setting to its magnifying power.",
              pairs: [
                ["Simple microscope, image at near point", "1 + D/f"],
                ["Simple microscope, image at infinity", "D/f"],
                ["Compound microscope, image at infinity", "(L/fo)(D/fe)"],
                ["Telescope, normal adjustment", "fo/fe"],
              ],
              explain: "The near-point setting always adds a bit (the '1 +' term) because the image sits closer to the eye; the relaxed-eye setting is a little lower but less tiring.",
            },
          },
          {
            type: "mistake",
            wrong: "Like a microscope, a telescope should have an objective of short focal length.",
            right: "A telescope needs an objective of large focal length and large aperture, and an eyepiece of short focal length (m = fo/fe). A microscope needs both focal lengths short.",
            why: "A microscope magnifies a tiny object close by, so its objective must be strong. A telescope views distant objects; a long fo gives a large image of them, and a wide aperture gathers more light and resolves finer detail.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Ray diagrams for the compound microscope and the astronomical telescope (normal adjustment) come every year. Mark the objective, eyepiece, intermediate image and the angles α and β. State which setting your formula is for. For the reflecting telescope, give two advantages over a refracting one.",
          },
          {
            type: "keypoints",
            items: [
              t`Prism: $r_1 + r_2 = A$, $\delta = i + e - A$; at minimum deviation $i = e$, $r = A/2$.`,
              t`$n = \sin\frac{A + D_m}{2} \big/ \sin\frac{A}{2}$; thin prism $\delta = (n - 1)A$.`,
              "Simple microscope: m = 1 + D/f (near point) or D/f (infinity), D = 25 cm.",
              "Compound microscope: m = mo × me ≈ (L/fo)(D/fe). Telescope: m = fo/fe, length fo + fe.",
              "Reflecting telescopes avoid chromatic aberration and allow much larger apertures.",
            ],
          },
        ],
        flashcards: [
          { front: "Angle relations in a prism", back: "r1 + r2 = A and δ = i + e − A." },
          { front: "Condition at minimum deviation", back: "i = e and r1 = r2 = A/2; the ray passes symmetrically through the prism." },
          { front: "Prism formula", back: "n = sin((A + Dm)/2) / sin(A/2)." },
          { front: "Deviation by a thin prism", back: "δ = (n − 1)A." },
          { front: "Magnifying power of a simple microscope", back: "m = 1 + D/f with the image at the near point; m = D/f with the image at infinity (D = 25 cm)." },
          { front: "Magnifying power of a telescope (normal adjustment)", back: "m = fo/fe; tube length = fo + fe." },
          { front: "Two advantages of a reflecting telescope", back: "No chromatic aberration; the mirror can be supported over its back, so very large apertures are possible (more light, better resolution)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An equilateral prism (A = 60°) has refractive index √2. What is its angle of minimum deviation in degrees?",
            answer: 30,
            unit: "°",
            explain: t`$\sin\frac{60^\circ + D_m}{2} = \sqrt{2} \sin 30^\circ = \frac{1}{\sqrt{2}}$, so $\frac{60^\circ + D_m}{2} = 45^\circ$ and $D_m = 30^\circ$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "At minimum deviation, a ray inside an equilateral prism travels:",
            options: ["Along the normal to the first face", "Parallel to the base of the prism", "Along the second face", "Towards the apex"],
            answer: 1,
            explain: "At minimum deviation r1 = r2 = 30°, so the ray inside is symmetric and runs parallel to the base.",
          },
          {
            kind: "numeric",
            q: "A magnifying glass has a focal length of 5 cm. What is its magnifying power when the image is at the near point (D = 25 cm)?",
            answer: 6,
            explain: t`$m = 1 + \frac{25}{5} = 6$.`,
          },
          {
            kind: "numeric",
            q: "A telescope has fo = 100 cm and fe = 5 cm. What is its magnifying power in normal adjustment?",
            answer: 20,
            explain: t`$m = \frac{100}{5} = 20$.`,
          },
          {
            kind: "multi",
            q: "Which changes increase the magnifying power of a compound microscope?",
            options: ["Using an objective of shorter focal length", "Using an eyepiece of shorter focal length", "Using an eyepiece of longer focal length", "Increasing the tube length"],
            answers: [0, 1, 3],
            explain: "m ≈ (L/fo)(D/fe): a larger L and smaller fo and fe all increase m.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A reflecting telescope suffers from chromatic aberration because its mirror refracts different colours differently.",
            answer: false,
            explain: "A mirror reflects all colours by the same law, so a reflecting telescope has no chromatic aberration. That is one of its advantages.",
          },
          {
            kind: "mcq",
            q: "In a compound microscope, the intermediate image formed by the objective is:",
            options: ["Virtual, erect and magnified", "Real, inverted and magnified", "Real, erect and diminished", "Virtual, inverted and diminished"],
            answer: 1,
            explain: "The object is just beyond fo, so the objective forms a real, inverted, magnified image, which the eyepiece then magnifies further.",
          },
        ],
      },
      /* ---------------- Exam edge 1: mirrors, lenses, refraction ---------------- */
      {
        slug: "c12-ro-exam-mirrors-lenses",
        title: "Exam edge: Mirrors, Lenses and Refraction",
        summary: "What JEE, NEET, KCET and COMEDK ask on mirrors and lenses, with shortcuts (Newton's formula, longitudinal magnification, slab shift, displacement method, silvered lenses) and the sign traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Ray optics is one of the highest-weightage Class 12 chapters in every entrance exam. **KCET and COMEDK** mostly ask one-step mirror and lens formula questions, power of combinations and lens-in-a-liquid. **NEET** adds slab shift, apparent depth with mirrors, and combinations of lenses and mirrors. **JEE Main** likes the displacement method, image velocity and multi-element systems. **JEE Advanced** builds systems: silvered lenses, refraction at two surfaces in sequence, moving objects and mirrors, and multiple-correct questions on image nature.\n\nThe winning habit is the same everywhere: fix the direction of incident light, write every u, v, f, R with its sign, and handle one surface or element at a time.",
          },
          {
            type: "table",
            headers: ["Exam", "Typical question from this part"],
            rows: [
              ["KCET / COMEDK", "Focal length of a lens in water; power of lenses in contact; image position by a mirror"],
              ["NEET", "Slab between object and mirror or lens; apparent shift; magnification sign and nature of image"],
              ["JEE Main", "Displacement method; speed of image; two lenses separated by a distance"],
              ["JEE Advanced", "Silvered lens or sphere; object between two refracting surfaces; multiple-correct on image nature and position"],
            ],
          },
          {
            type: "list",
            items: [
              t`**Newton's formula** $x_1 x_2 = f^2$: $x_1, x_2$ are the object and image distances from the focus (from the two foci for a lens). Quick for mirrors and lenses when both distances are measured from the foci.`,
              t`**Longitudinal magnification** of a small object along the axis: mirror $\dfrac{dv}{du} = -m^2$, lens $\dfrac{dv}{du} = +m^2$. The same factor gives the image velocity along the axis. Safe only for **small** lengths or instantaneous speeds.`,
              t`**Slab shift**: a slab of thickness $t$ and index $n$ (in air) between object and observer makes the object appear shifted by $t\left(1 - \dfrac{1}{n}\right)$ **towards** the observer, wherever the slab is placed (paraxial rays).`,
              t`**Displacement method**: for fixed object–screen distance $D > 4f$, two lens positions a distance $x$ apart give sharp images: $f = \dfrac{D^2 - x^2}{4D}$ and object size $h = \sqrt{h_1 h_2}$.`,
              t`**Silvered lens**: light passes through the lens twice and reflects once, so $P_{\text{eq}} = 2P_{\text{lens}} + P_{\text{mirror}}$ (converging powers positive). The system acts as a mirror of focal length $1/P_{\text{eq}}$.`,
              t`**Lens in a medium**: $\dfrac{f_{\text{medium}}}{f_{\text{air}}} = \dfrac{n_g - 1}{n_g/n_m - 1}$. A mirror's focal length does not depend on the medium.`,
            ],
          },
          {
            type: "formula",
            tex: t`x_1 x_2 = f^2, \qquad m_{\text{long}} = \mp m^2, \qquad \Delta = t\left(1 - \frac{1}{n}\right), \qquad f = \frac{D^2 - x^2}{4D}`,
            caption: "Minus sign of the longitudinal magnification for a mirror, plus for a lens.",
          },
          {
            type: "example",
            title: "KCET level: lens in water",
            problem: "A glass lens (n = 1.5) has a focal length of 20 cm in air. What is its focal length when it is fully immersed in water (n = 4/3)?",
            steps: [
              t`In air: $\dfrac{1}{f_a} = (1.5 - 1)K = 0.5K$, where $K = \dfrac{1}{R_1} - \dfrac{1}{R_2}$.`,
              t`In water: $n_{21} = \dfrac{1.5}{4/3} = 1.125$, so $\dfrac{1}{f_w} = 0.125K$.`,
              t`$\dfrac{f_w}{f_a} = \dfrac{0.5}{0.125} = 4$, so $f_w = 80$ cm.`,
            ],
            answer: "80 cm (still converging, but four times weaker).",
          },
          {
            type: "example",
            title: "JEE Main level: displacement method",
            problem: "An object and a screen are fixed 90 cm apart. A convex lens gives a sharp image on the screen at two positions 30 cm apart. The two images are 8.0 cm and 2.0 cm tall. Find the focal length and the object size.",
            steps: [
              t`$f = \dfrac{D^2 - x^2}{4D} = \dfrac{8100 - 900}{360} = 20$ cm. (Check: $D = 90 > 4f = 80$.)`,
              t`The two positions are conjugate: in one, $|u| = 30$, $v = 60$ ($m = -2$); in the other, $|u| = 60$, $v = 30$ ($m = -0.5$).`,
              t`$h = \sqrt{h_1 h_2} = \sqrt{8.0 \times 2.0} = 4.0$ cm (and indeed $2 \times 4 = 8$, $0.5 \times 4 = 2$).`,
            ],
            answer: "f = 20 cm; the object is 4.0 cm tall.",
          },
          {
            type: "example",
            title: "NEET level: slab between object and lens",
            problem: "An object is 30 cm in front of a convex lens of focal length 20 cm. A glass slab 6.0 cm thick (n = 1.5) is now placed between the object and the lens. Where does the image form?",
            steps: [
              t`Shift $= t\left(1 - \dfrac{1}{n}\right) = 6.0\left(1 - \dfrac{2}{3}\right) = 2.0$ cm towards the lens.`,
              t`The object effectively sits at $u = -28$ cm.`,
              t`$\dfrac{1}{v} = \dfrac{1}{20} - \dfrac{1}{28} = \dfrac{7 - 5}{140} = \dfrac{1}{70}$, so $v = 70$ cm.`,
            ],
            answer: "70 cm behind the lens (it was 60 cm without the slab).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A concave mirror has f = −10 cm. A short pin of length 1.0 mm lies along the axis at u = −15 cm. What is the length of its image, in mm?",
                answer: 4,
                unit: "mm",
                difficulty: 2,
                explain: t`$\frac{1}{v} = -\frac{1}{10} + \frac{1}{15} = -\frac{1}{30}$, $v = -30$ cm, $m = -2$. Longitudinal magnification $= -m^2 = -4$, so the image is 4.0 mm long (and reversed in direction).`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Advanced level: silvered plano-convex lens",
            problem: "A plano-convex lens (n = 1.5) has a curved surface of radius 20 cm. Its curved surface is silvered. Find the focal length of the system and where an object must be placed (on the plane side) so that its image forms on itself.",
            steps: [
              t`Lens: $\dfrac{1}{f_l} = (1.5 - 1)\dfrac{1}{20}$, so $f_l = 40$ cm, $P_l = 2.5$ D.`,
              t`Mirror: the silvered curved surface is a concave mirror of focal length $R/2 = 10$ cm, $P_m = 10$ D (a mirror's focal length does not depend on the medium in front of it).`,
              t`$P_{\text{eq}} = 2P_l + P_m = 5 + 10 = 15$ D, so $f_{\text{eq}} = \dfrac{1}{15}$ m $= 6.67$ cm, acting as a concave mirror. (Check: $f = \dfrac{R}{2n} = \dfrac{20}{3}$ cm.)`,
              t`A concave mirror images an object onto itself when the object is at its centre of curvature, $2f_{\text{eq}} = 13.3$ cm.`,
            ],
            answer: "The system is a concave mirror of focal length 20/3 ≈ 6.7 cm; place the object 40/3 ≈ 13.3 cm from the lens.",
          },
          {
            type: "example",
            title: "JEE Advanced level: speed of an image",
            problem: "An object moves along the axis towards a concave mirror (f = −20 cm) at 2.0 cm/s. Find the velocity of the image when the object is 30 cm from the mirror.",
            steps: [
              t`$\dfrac{1}{v} = -\dfrac{1}{20} + \dfrac{1}{30} = -\dfrac{1}{60}$, so $v = -60$ cm and $m = -\dfrac{v}{u} = -2$.`,
              t`Differentiate $\dfrac{1}{v} + \dfrac{1}{u} = \dfrac{1}{f}$: $\dfrac{dv}{dt} = -\dfrac{v^2}{u^2}\dfrac{du}{dt} = -m^2\dfrac{du}{dt}$.`,
              t`The object moves towards the mirror, i.e. in the $+x$ direction: $\dfrac{du}{dt} = +2.0$ cm/s. So $\dfrac{dv}{dt} = -4 \times 2.0 = -8.0$ cm/s.`,
            ],
            answer: "8.0 cm/s, in the −x direction: the image moves away from the mirror.",
          },
          {
            type: "mistake",
            wrong: "A glass slab between the object and the lens shifts the object away from the lens by t(1 − 1/n).",
            right: "The slab makes the object appear closer to the observer (towards the lens), by t(1 − 1/n), whatever the slab's position.",
            why: "Rays leaving the slab bend away from the normal, so they seem to come from a point nearer to the slab's far side, just like the raised coin in water. Getting the direction wrong turns 70 cm into 52.5 cm in the example above.",
          },
          {
            type: "mistake",
            wrong: "For a silvered lens, add the lens power once and the mirror power once: P = P(lens) + P(mirror).",
            right: "Light goes through the lens, reflects, and goes through the lens again, so P = 2P(lens) + P(mirror).",
            why: "Each passage through the lens refracts the light. Missing the second passage is the most common error in silvered-lens questions; check with f = R/(2n) for a plano-convex lens silvered on the curved side.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A concave mirror of focal length 15 cm is dipped in water. Its focal length becomes:",
              emoji: "🪞",
              options: ["Smaller than 15 cm", "Larger than 15 cm", "Still 15 cm"],
              answer: 2,
              trap: 1,
              explain: "Reflection obeys i = r in any medium, so f = R/2 does not depend on the refractive index around the mirror. Only lenses (refraction) change focal length in a liquid.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed strategy",
            md: "For multi-element problems, list the elements left to right and pass the image along: image of one is the object of the next, with u measured from the new element. Check every real or virtual answer against a rough ray diagram. Shortcuts are safe for paraxial rays and thin elements only; if a question gives a thick lens or large angles, go back to surface-by-surface refraction.",
          },
          {
            type: "keypoints",
            items: [
              "Write signs first; one element at a time; the image of one is the object of the next.",
              "Newton: x1 x2 = f²; longitudinal magnification −m² (mirror), +m² (lens).",
              "Slab shift t(1 − 1/n) towards the observer.",
              "Displacement method: f = (D² − x²)/4D, needs D > 4f; h = √(h1 h2).",
              "Silvered lens: P = 2P(lens) + P(mirror). Mirror focal length is independent of the medium; lens focal length is not.",
            ],
          },
        ],
        flashcards: [
          { front: "Newton's formula for mirrors and lenses", back: "x1 x2 = f², with x1 and x2 measured from the focus (foci)." },
          { front: "Longitudinal magnification", back: "Mirror: −m². Lens: +m². Valid for small objects along the axis." },
          { front: "Apparent shift due to a slab", back: "t(1 − 1/n), towards the observer." },
          { front: "Displacement method", back: "f = (D² − x²)/4D, requires D > 4f; object height = √(h1 h2)." },
          { front: "Power of a silvered lens", back: "P = 2P(lens) + P(mirror); behaves like a mirror of focal length 1/P." },
          { front: "Plano-convex lens with curved side silvered", back: "Acts as a concave mirror of focal length R/(2n)." },
          { front: "Focal length of a lens (n = 1.5) in water", back: "Becomes 4 times its value in air." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An object is 15 cm in front of a convex lens of focal length 10 cm. What is the magnification (with sign)?",
            answer: -2,
            explain: t`$\frac{1}{v} = \frac{1}{10} - \frac{1}{15} = \frac{1}{30}$, $v = 30$ cm; $m = \frac{v}{u} = \frac{30}{-15} = -2$.`,
          },
          {
            kind: "numeric",
            q: "An equiconvex lens of focal length 20 cm is cut into two identical plano-convex lenses by a plane perpendicular to its principal axis. What is the focal length of each piece, in cm?",
            answer: 40,
            unit: "cm",
            explain: "Each piece keeps one curved surface, so its 1/f is half: f = 40 cm. (Cutting along the axis would leave f = 20 cm.)",
            difficulty: 2,
            hint: "In the lens maker's formula, one of the 1/R terms becomes zero.",
          },
          {
            kind: "multi",
            q: "Which statements about a convex mirror are correct?",
            options: ["For a real object the image is always virtual and erect", "Its focal length is positive in the NCERT convention", "It can form a magnified image of a real object", "It gives a wider field of view than a plane mirror of the same size"],
            answers: [0, 1, 3],
            explain: "A convex mirror always gives a virtual, erect, diminished image of a real object, which is why its field of view is wide. f > 0 in the NCERT convention. It never magnifies a real object.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A concave mirror has a focal length of magnitude 20 cm. An object is 10 cm beyond the focus. Using Newton's formula, how far is the image from the pole, in cm?",
            answer: 60,
            unit: "cm",
            explain: t`$x_2 = \frac{f^2}{x_1} = \frac{400}{10} = 40$ cm beyond F, so 60 cm from the pole. Check: $u = -30$, $\frac{1}{v} = -\frac{1}{20} + \frac{1}{30}$ gives $v = -60$ cm.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A plane mirror is rotated by 10° about an axis in its plane, keeping the incident ray fixed. The reflected ray turns through:",
            options: ["5°", "10°", "20°", "40°"],
            answer: 2,
            explain: "The normal turns by 10°, so the angle of incidence changes by 10° and the reflected ray turns by 2 × 10° = 20°.",
          },
          {
            kind: "numeric",
            q: "A coin lies under a 9.0 cm thick glass block (n = 1.5). By how many cm does it appear raised when viewed from above?",
            answer: 3,
            unit: "cm",
            explain: t`Shift $= 9.0\left(1 - \frac{1}{1.5}\right) = 9.0 \times \frac{1}{3} = 3.0$ cm.`,
          },
          {
            kind: "numeric",
            q: "A plano-convex lens (n = 1.5, R = 30 cm) has its PLANE surface silvered. What is the focal length of the system, in cm?",
            answer: 30,
            unit: "cm",
            explain: t`$P_l = \frac{0.5}{0.30} = \frac{5}{3}$ D; a plane mirror has $P_m = 0$. $P = 2 \times \frac{5}{3} = \frac{10}{3}$ D, so $f = 0.30$ m $= 30$ cm. This matches $f = \frac{R}{2(n - 1)}$.`,
            difficulty: 3,
            hint: "Light crosses the lens twice; a plane mirror adds no power.",
          },
          {
            kind: "mcq",
            q: "An object is placed at 2F in front of a convex lens. The image is:",
            options: ["At F, highly diminished", "At 2F on the other side, real, inverted, same size", "Between F and 2F, magnified", "At infinity"],
            answer: 1,
            explain: t`$u = -2f$: $\frac{1}{v} = \frac{1}{f} - \frac{1}{2f} = \frac{1}{2f}$, so $v = 2f$ and $m = -1$.`,
          },
        ],
      },

      /* ---------------- Exam edge 2: prisms, TIR, instruments ---------------- */
      {
        slug: "c12-ro-exam-prisms-instruments",
        title: "Exam edge: Prisms, TIR and Instruments",
        summary: "Prism emergence conditions, the δ–i graph, optical fibre acceptance angle, and microscope and telescope problems at entrance-exam level.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "In this half of the chapter, **KCET, COMEDK and NEET** ask the prism formula, thin-prism deviation, critical angle and the magnifying power of microscopes and telescopes (often with the final image at the near point). **JEE Main** adds the δ–i graph, grazing emergence and optical fibres. **JEE Advanced** asks when a ray can emerge from a prism at all, and multi-step problems that join TIR with Snell's law.",
          },
          {
            type: "list",
            items: [
              t`**δ–i graph**: δ falls, reaches $D_m$ at $i = e$, then rises. Every δ above $D_m$ occurs for two values of $i$ (i and e swap: reversibility of light).`,
              t`**Maximum deviation** occurs at grazing incidence ($i = 90^\circ$) or grazing emergence, whichever the prism allows.`,
              t`**Emergence condition**: the ray emerges from the second face only if $r_2 \le i_c$. Since $r_1 \le i_c$ too, no ray emerges at all if $A > 2i_c$. Minimum $i$ for emergence: set $r_2 = i_c$, so $r_1 = A - i_c$ and $\sin i = n\sin(A - i_c)$.`,
              t`**Optical fibre** (in air): the maximum acceptance angle $\theta_a$ obeys $\sin\theta_a = \sqrt{n_1^2 - n_2^2}$ (numerical aperture), with $n_1$ the core and $n_2$ the cladding index.`,
              t`**Instruments**: a microscope needs both $f_o$ and $f_e$ small; a telescope needs $f_o$ large, $f_e$ small. Lens separation of a compound microscope is $f_o + L + f_e$; of a telescope in normal adjustment, $f_o + f_e$.`,
              "**ISC / JEE extra**: two thin prisms give deviation without dispersion when (nᵥ − nᵣ)A + (nᵥ' − nᵣ')A' = 0, and dispersion without deviation when (n − 1)A + (n' − 1)A' = 0.",
            ],
          },
          {
            type: "formula",
            tex: t`A \le 2i_c \ \text{(for emergence)}, \qquad \sin\theta_a = \sqrt{n_1^2 - n_2^2}, \qquad m_{\text{telescope}} = \frac{f_o}{f_e}\left(1 + \frac{f_e}{D}\right)\ \text{(image at } D)`,
          },
          {
            type: "example",
            title: "KCET level: prism formula",
            problem: t`An equilateral prism of refractive index $\sqrt{3}$ is used. Find its angle of minimum deviation and the angle of incidence at minimum deviation.`,
            steps: [
              t`$\sin\dfrac{A + D_m}{2} = n\sin\dfrac{A}{2} = \sqrt{3} \times \dfrac{1}{2} = \dfrac{\sqrt{3}}{2}$, so $\dfrac{60^\circ + D_m}{2} = 60^\circ$.`,
              t`$D_m = 60^\circ$, and $i = \dfrac{A + D_m}{2} = 60^\circ$.`,
            ],
            answer: "Dm = 60°, at i = e = 60°.",
          },
          {
            type: "example",
            title: "JEE Main level: optical fibre",
            problem: "An optical fibre in air has a core of refractive index 1.50 and a cladding of 1.40. Find the critical angle at the core–cladding boundary and the maximum angle of incidence at the end face for which light is guided.",
            steps: [
              t`$\sin i_c = \dfrac{1.40}{1.50} = 0.933$, so $i_c \approx 69.0^\circ$.`,
              t`At the end face, $\sin\theta = 1.50 \sin r$. The ray then meets the wall at $90^\circ - r$, which must be at least $i_c$: $\cos r \ge \dfrac{1.40}{1.50}$.`,
              t`So $\sin\theta \le 1.50\sqrt{1 - \left(\dfrac{1.40}{1.50}\right)^2} = \sqrt{1.50^2 - 1.40^2} = \sqrt{0.29} = 0.539$.`,
              t`$\theta_a = \sin^{-1}(0.539) \approx 32.6^\circ$.`,
            ],
            answer: "ic ≈ 69.0°; light entering at up to about 32.6° from the axis is guided.",
          },
          {
            type: "example",
            title: "NEET level: compound microscope, image at near point",
            problem: "A compound microscope has fo = 2.0 cm and fe = 5.0 cm. An object is 2.5 cm from the objective and the final image is at 25 cm from the eyepiece. Find the magnifying power and the separation of the lenses.",
            steps: [
              t`Objective: $\dfrac{1}{v_o} = \dfrac{1}{2.0} - \dfrac{1}{2.5} = 0.1$, so $v_o = 10$ cm; $m_o = \dfrac{10}{-2.5} = -4$.`,
              t`Eyepiece with the image at $D$: $m_e = 1 + \dfrac{25}{5.0} = 6$, so $m = -24$.`,
              t`Eyepiece object distance: $\dfrac{1}{u_e} = \dfrac{1}{v_e} - \dfrac{1}{f_e} = -\dfrac{1}{25} - \dfrac{1}{5} = -\dfrac{6}{25}$, so $u_e = -4.17$ cm.`,
              t`Separation $= 10 + 4.17 \approx 14.2$ cm.`,
            ],
            answer: "Magnifying power 24 (final image inverted); the lenses are about 14.2 cm apart.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A prism of angle 90° is made of glass with n = 1.5 (ic ≈ 41.8°). A ray falls on one refracting face. It:",
                options: ["Emerges for every angle of incidence", "Emerges only if i is more than 45°", "Cannot emerge from the second face for any angle of incidence", "Emerges only at grazing incidence"],
                answer: 2,
                difficulty: 3,
                explain: "Emergence needs A ≤ 2ic = 83.6°. Here A = 90°, so r2 = 90° − r1 ≥ 90° − 41.8° = 48.2° > ic for every i: the ray is always totally reflected at the second face.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Advanced level: minimum angle of incidence for emergence",
            problem: "A 60° prism has n = 1.5. Find the smallest angle of incidence for which a ray can emerge from the second face. (sin⁻¹(2/3) = 41.8°, sin 18.2° = 0.312, sin⁻¹ 0.468 = 27.9°)",
            steps: [
              t`At the limit the ray grazes out: $r_2 = i_c = 41.8^\circ$.`,
              t`$r_1 = A - r_2 = 60^\circ - 41.8^\circ = 18.2^\circ$.`,
              t`$\sin i = n \sin r_1 = 1.5 \times 0.312 = 0.468$, so $i \approx 27.9^\circ$.`,
              t`For $i < 27.9^\circ$, $r_1$ is smaller, $r_2$ exceeds $i_c$ and the ray is totally reflected inside.`,
            ],
            answer: "About 27.9°; at this angle the emergent ray grazes the second face (e = 90°).",
          },
          {
            type: "example",
            title: "JEE Main level: telescope and the Moon",
            problem: "A telescope has fo = 200 cm and fe = 5.0 cm. The Moon (diameter 3.48 × 10⁶ m) is 3.8 × 10⁸ m away. Find the diameter of the Moon's image formed by the objective, and the magnifying power in normal adjustment.",
            steps: [
              t`Angle subtended by the Moon: $\alpha = \dfrac{3.48 \times 10^6}{3.8 \times 10^8} = 9.16 \times 10^{-3}$ rad.`,
              t`The objective forms the image in its focal plane: diameter $= f_o\,\alpha = 200 \times 9.16 \times 10^{-3} \approx 1.83$ cm.`,
              t`$m = \dfrac{f_o}{f_e} = \dfrac{200}{5.0} = 40$.`,
            ],
            answer: "Image diameter ≈ 1.83 cm; magnifying power 40.",
          },
          {
            type: "mistake",
            wrong: "Minimum deviation happens at normal incidence (i = 0).",
            right: "Minimum deviation happens when the ray passes symmetrically, i = e and r1 = r2 = A/2.",
            why: "It feels as if the 'straightest' entry gives the least bending, but at i = 0 the whole bending happens at the second face, where r2 = A is large. Sharing the bending equally between the faces gives the least total deviation.",
          },
          {
            type: "mistake",
            wrong: "In a compound microscope the distance between the lenses equals the tube length L.",
            right: "L is the distance between the second focal point of the objective and the first focal point of the eyepiece, so the lens separation is about fo + L + fe.",
            why: "NCERT's formula mo ≈ L/fo uses this definition of L. Questions that give the lens separation expect you to find vo and ue from the lens formula, as in the NEET example.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for the minimum angle of incidence for emergence in order.",
              items: [
                "Find the critical angle: sin ic = 1/n",
                "Set the angle at the second face r2 = ic (grazing emergence)",
                "Find r1 = A − ic",
                "Use Snell's law at the first face: sin i = n sin r1",
              ],
              explain: "Work backwards from the second face: grazing emergence fixes r2, the prism angle fixes r1, and Snell's law gives the incidence angle.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Watch the setting",
            md: "Instrument questions turn on one phrase: 'final image at infinity' (relaxed eye, m = D/f type) or 'at the least distance of distinct vision' (m = 1 + D/f type). Read for it before you pick a formula. Resolving power of microscopes and telescopes has been removed from the rationalised NCERT book, but JEE and ISC papers may still mention it qualitatively: a larger aperture gives better resolution.",
          },
          {
            type: "keypoints",
            items: [
              "Every δ > Dm comes from two angles of incidence; Dm when i = e.",
              "No emergence from a prism if A > 2ic; grazing emergence sets the minimum i.",
              "Optical fibre in air: sin θa = √(n1² − n2²).",
              "Microscope: small fo and fe. Telescope: large fo, small fe; image at D adds the factor (1 + fe/D).",
            ],
          },
        ],
        flashcards: [
          { front: "Condition for no emergence from a prism", back: "A > 2ic: the ray is totally reflected at the second face for every angle of incidence." },
          { front: "Grazing emergence", back: "r2 = ic and e = 90°; it gives the minimum angle of incidence for which light can emerge." },
          { front: "Shape of the δ–i graph", back: "Falls to a minimum Dm at i = e, then rises; each δ > Dm occurs at two values of i." },
          { front: "Numerical aperture of an optical fibre in air", back: "sin θa = √(n1² − n2²), n1 = core, n2 = cladding." },
          { front: "Telescope with the final image at the near point", back: "m = (fo/fe)(1 + fe/D)." },
          { front: "Size of the image formed by a telescope objective", back: "fo × α, where α is the angle the distant object subtends." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An equilateral prism has n = √3. What is its angle of minimum deviation, in degrees?",
            answer: 60,
            unit: "°",
            explain: t`$\sin\frac{60^\circ + D_m}{2} = \sqrt{3} \times \frac{1}{2}$, so $\frac{60^\circ + D_m}{2} = 60^\circ$ and $D_m = 60^\circ$.`,
          },
          {
            kind: "numeric",
            q: "The critical angle of a glass in air satisfies sin ic = 0.6. What is its refractive index (two decimal places)?",
            answer: 1.67,
            tolerance: 0.01,
            explain: t`$n = \frac{1}{0.6} = 1.67$.`,
          },
          {
            kind: "numeric",
            q: "A thin prism of angle 5° and n = 1.6 deviates a ray by how many degrees?",
            answer: 3,
            unit: "°",
            explain: t`$\delta = (1.6 - 1) \times 5^\circ = 3^\circ$.`,
          },
          {
            kind: "numeric",
            q: "An astronomical telescope with fo = 150 cm and fe = 5 cm is in normal adjustment. What is the distance between the lenses, in cm?",
            answer: 155,
            unit: "cm",
            explain: "In normal adjustment the foci coincide, so the separation is fo + fe = 155 cm (m = 30).",
          },
          {
            kind: "mcq",
            q: "For a prism, the graph of deviation δ against angle of incidence i shows that:",
            options: ["δ increases steadily with i", "δ decreases steadily with i", "δ has a minimum, and each larger δ occurs at two values of i", "δ is the same for all i"],
            answer: 2,
            explain: "δ falls to Dm at i = e and rises again. By reversibility, the angles i and e can be swapped, giving two values of i for the same δ.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which statements about optical fibres are correct?",
            options: ["Light is guided by repeated total internal reflection", "The cladding has a higher refractive index than the core", "The acceptance angle increases if the difference between n(core) and n(cladding) increases", "Light can be guided round gentle bends"],
            answers: [0, 2, 3],
            explain: t`The core is denser than the cladding. $\sin\theta_a = \sqrt{n_1^2 - n_2^2}$ grows as the indices differ more. Gentle bends keep the angle at the wall above $i_c$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A compound microscope has an objective magnification of −10 and an eyepiece of focal length 2.5 cm. With the final image at infinity, what is the magnitude of the total magnifying power? (D = 25 cm)",
            answer: 100,
            explain: t`$m_e = \frac{25}{2.5} = 10$, so $|m| = 10 \times 10 = 100$.`,
          },
          {
            kind: "numeric",
            q: "A ray must emerge from a 60° prism of index √2 (ic = 45°). What is the smallest angle of incidence, in degrees? (Use sin 15° = 0.259 and sin⁻¹ 0.366 = 21.5°.)",
            answer: 21.5,
            tolerance: 0.3,
            unit: "°",
            explain: t`$r_2 = 45^\circ$, $r_1 = 15^\circ$, $\sin i = \sqrt{2} \times 0.259 = 0.366$, so $i \approx 21.5^\circ$.`,
            difficulty: 3,
            hint: "Set the angle at the second face equal to the critical angle.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Wave Optics (NCERT Class 12, Chapter 10)                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-wave-optics",
    title: "Wave Optics",
    icon: "🌊",
    description: "Wavefronts and Huygens' principle, interference and Young's double-slit experiment, single-slit diffraction, and polarisation with Malus' law.",
    lessons: [
      /* ---------------- Lesson 1: Huygens' principle ---------------- */
      {
        slug: "c12-wo-huygens",
        title: "Wavefronts and Huygens' Principle",
        summary: "What a wavefront is, Huygens' construction, proving the laws of reflection and refraction with waves, what happens to speed, wavelength and frequency, and the Doppler shift of light.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪨",
            caption: "Drop a pebble into a still pond and circular ripples spread out. Each ripple is a line of water moving up and down together: a wavefront.",
          },
          {
            type: "text",
            md: "Ray optics cannot explain why light bends round tiny obstacles or makes bright and dark bands. For that we need the **wave model**, proposed by Christiaan Huygens in 1678.\n\nA **wavefront** is the surface on which every point of the wave is oscillating **in the same phase**. Energy travels perpendicular to the wavefront, so a **ray** is simply the normal to the wavefront. The wavefront moves outward with the speed of the wave.",
          },
          {
            type: "table",
            headers: ["Source", "Shape of wavefront", "Rays"],
            rows: [
              ["Point source", "Spherical (diverging)", "Radial, spreading out"],
              ["Line source (a long slit)", "Cylindrical", "Spreading out in a plane"],
              ["Very distant source (the Sun, a star)", "Plane (a small part of a huge sphere)", "Parallel"],
            ],
          },
          {
            type: "text",
            md: "**Huygens' principle** gives a way to find the next position of a wavefront: (1) every point on a wavefront acts as a source of **secondary wavelets**, which spread out in the forward direction with the speed of the wave in that medium; (2) the **forward envelope** (common tangent surface) of these wavelets after a time τ is the new wavefront. Huygens assumed the backward wavelets have zero amplitude, so there is no backward wave.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Refraction by Huygens' construction.** A plane wavefront AB meets the plane surface PP' between medium 1 (speed $v_1$) and medium 2 (speed $v_2$), at angle of incidence $i$. A touches the surface first.`,
              t`In the time τ that the disturbance at B takes to reach C on the surface, $BC = v_1\tau$.`,
              t`Meanwhile the wavelet from A spreads into medium 2 as a sphere of radius $AE = v_2\tau$. The tangent plane CE from C to this sphere is the refracted wavefront, at angle of refraction $r$.`,
              t`From triangles ABC and AEC: $\sin i = \dfrac{BC}{AC} = \dfrac{v_1\tau}{AC}$ and $\sin r = \dfrac{AE}{AC} = \dfrac{v_2\tau}{AC}$.`,
              t`Dividing: $\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2}$. With $n_1 = c/v_1$ and $n_2 = c/v_2$ this is Snell's law, $n_1 \sin i = n_2 \sin r$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1}, \qquad \frac{\lambda_1}{\lambda_2} = \frac{v_1}{v_2}, \qquad \nu \text{ unchanged}`,
            caption: "Light slows down in a denser medium, so the wave model predicts v(glass) < v(air). This was confirmed by experiment, while Newton's corpuscle model wrongly predicted the opposite.",
          },
          {
            type: "example",
            title: "Speed and wavelength in water",
            problem: t`Yellow sodium light ($\lambda = 589$ nm in air, frequency $5.09 \times 10^{14}$ Hz) enters water ($n = 1.33$). Find its speed, wavelength and frequency in water. Take $c = 3.0 \times 10^8$ m/s.`,
            steps: [
              t`$v = \dfrac{c}{n} = \dfrac{3.0 \times 10^8}{1.33} \approx 2.26 \times 10^8$ m/s.`,
              t`$\lambda_w = \dfrac{\lambda}{n} = \dfrac{589}{1.33} \approx 443$ nm.`,
              t`Frequency is fixed by the source: $5.09 \times 10^{14}$ Hz (check: $v/\lambda_w = 2.26 \times 10^8 / 443 \times 10^{-9} \approx 5.1 \times 10^{14}$ Hz).`,
            ],
            answer: "v ≈ 2.26 × 10⁸ m/s, λ ≈ 443 nm, ν = 5.09 × 10¹⁴ Hz (unchanged). It still looks yellow, because colour depends on frequency.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Light of wavelength 600 nm in air enters glass of refractive index 1.5. What is its wavelength in the glass, in nm?",
                answer: 400,
                unit: "nm",
                explain: t`$\lambda_g = \frac{600}{1.5} = 400$ nm. The frequency stays the same.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Reflection** by the same method: the wavelet from A grows to radius $v\tau$ in the same medium while B's disturbance reaches C, so the triangles are congruent and $i = r$.

**Shapes after optical elements.** A plane wavefront passing through a **thin prism** stays plane but tilts, because the thicker base slows the lower part more. Through a **convex lens** the thick middle delays the centre, so the wavefront becomes a **converging** sphere centred at the focus. A **concave mirror** reflects a plane wavefront into a converging spherical one. The **time** taken from any point on a wavefront to the corresponding point on the next is the same for all rays; this is why a lens forms a sharp image.

**Doppler effect for light.** If a source moves away from us, the observed frequency falls (wavelength increases): a **red shift**. If it approaches, a **blue shift**. For speeds much less than $c$, the fractional change is $v_{\text{radial}}/c$. Astronomers use red shifts to measure how fast galaxies are moving away.`,
          },
          {
            type: "formula",
            tex: t`\frac{\Delta\nu}{\nu} = -\frac{v_{\text{radial}}}{c}, \qquad \frac{\Delta\lambda}{\lambda} = \frac{v_{\text{radial}}}{c} \quad (v_{\text{radial}} > 0 \text{ for a receding source}, \ v \ll c)`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each case to the wavefront that comes out.",
              pairs: [
                ["Light from a nearby point source", "Diverging spherical wavefront"],
                ["Sunlight reaching the Earth", "Plane wavefront"],
                ["Plane wave after a convex lens", "Spherical wavefront converging to the focus"],
                ["Plane wave after a thin prism", "Plane wavefront, tilted towards the base"],
              ],
              explain: "Whatever slows part of a wavefront more (thicker glass) bends the wavefront there. Rays are always perpendicular to the wavefront.",
            },
          },
          {
            type: "mistake",
            wrong: "When light goes from air into water its frequency changes, so its colour changes too.",
            right: "The frequency is set by the source and stays the same; only speed and wavelength drop by the factor n.",
            why: "At the boundary, the two sides must oscillate together, so the number of waves arriving per second equals the number leaving. Colour depends on frequency, so a red ball under water still looks red.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "'Using Huygens' principle, verify the laws of refraction (or reflection)' is a frequent 3-mark question. Draw the incident wavefront AB, the wavelet of radius v₂τ from A, and the tangent CE; write sin i = BC/AC and sin r = AE/AC clearly. Also be ready to define a wavefront and draw it for a point source, a lens and a prism.",
          },
          {
            type: "keypoints",
            items: [
              "A wavefront is a surface of constant phase; rays are normal to it.",
              "Huygens: each point is a source of secondary wavelets; the forward envelope is the new wavefront.",
              t`Huygens' construction gives $i = r$ and $\sin i/\sin r = v_1/v_2 = n_2/n_1$.`,
              "On refraction, frequency is unchanged; speed and wavelength both divide by n.",
              t`Doppler shift: $\Delta\lambda/\lambda = v_{\text{radial}}/c$; receding source → red shift.`,
            ],
          },
        ],
        flashcards: [
          { front: "Wavefront", back: "The locus of all points oscillating in the same phase. Rays are perpendicular to it." },
          { front: "Wavefront from a distant star", back: "Plane wavefront (with parallel rays)." },
          { front: "Huygens' principle", back: "Every point of a wavefront is a source of secondary wavelets moving forward at the wave speed; their forward envelope is the new wavefront." },
          { front: "Snell's law from wave theory", back: "sin i / sin r = v1/v2 = n2/n1." },
          { front: "What happens to λ when light enters a medium of index n?", back: "It becomes λ/n. Frequency is unchanged." },
          { front: "Red shift", back: "The increase in observed wavelength from a source moving away: Δλ/λ = v(radial)/c." },
          { front: "Plane wavefront after a convex lens", back: "A spherical wavefront converging to the focus, because the thick middle delays the central part." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Light from a point source very close to us has wavefronts that are:",
            options: ["Plane", "Spherical", "Cylindrical", "Elliptical"],
            answer: 1,
            explain: "A point source sends the disturbance out equally in all directions, so the wavefronts are spheres. Only far away do they look plane.",
          },
          {
            kind: "numeric",
            q: "The refractive index of a medium is 1.25. What is the speed of light in it, in units of 10⁸ m/s? (c = 3.0 × 10⁸ m/s)",
            answer: 2.4,
            explain: t`$v = \frac{3.0 \times 10^8}{1.25} = 2.4 \times 10^8$ m/s.`,
          },
          {
            kind: "truefalse",
            q: "In Huygens' construction, secondary wavelets in a medium travel with the speed of light in that medium.",
            answer: true,
            explain: "That is why the wavelet radius is v₂τ in medium 2, which leads to Snell's law.",
          },
          {
            kind: "numeric",
            q: "A star is moving away from the Earth at 3.0 × 10⁵ m/s. By how many nm is a 500 nm spectral line shifted? (c = 3.0 × 10⁸ m/s)",
            answer: 0.5,
            unit: "nm",
            explain: t`$\Delta\lambda = \lambda \frac{v}{c} = 500 \times 10^{-3} = 0.5$ nm, towards the red.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The locus of all points that oscillate in the same phase is called a ___.",
            answer: ["wavefront", "wave front"],
            explain: "This is the definition of a wavefront.",
          },
          {
            kind: "mcq",
            q: "According to the wave theory, when light passes from air into glass its speed:",
            options: ["Increases", "Decreases", "Stays the same", "Becomes zero"],
            answer: 1,
            explain: "v = c/n and n > 1 for glass, so light slows down. Newton's corpuscular theory had predicted an increase, which experiments showed to be wrong.",
          },
          {
            kind: "mcq",
            q: "A plane wavefront falls on a thin prism. The emerging wavefront is:",
            options: ["Spherical and converging", "Spherical and diverging", "Plane, but tilted", "Cylindrical"],
            answer: 2,
            explain: "The prism's thickness changes uniformly from apex to base, so the delay changes uniformly and the wavefront stays plane while tilting towards the base.",
          },
        ],
      },

      /* ---------------- Lesson 2: Interference and YDSE ---------------- */
      {
        slug: "c12-wo-interference",
        title: "Interference and Young's Double-Slit Experiment",
        summary: "Superposition of waves, coherent and incoherent sources, the intensity formula, Young's double-slit experiment and fringe width.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`When two waves overlap, the resultant displacement at any point is the sum of the individual displacements: the **principle of superposition**. Suppose two waves of equal amplitude $a$ reach a point with **phase difference** $\phi$. The resultant amplitude is $2a\cos(\phi/2)$, and since intensity is proportional to amplitude squared, $I = 4I_0\cos^2(\phi/2)$.

Two sources are **coherent** if the phase difference between them stays **constant** in time. Only then does the pattern of bright and dark regions stay fixed. If the phase difference changes rapidly and randomly (two separate bulbs or sodium lamps), the $\cos\phi$ term averages to zero and we just get $I = 2I_0$ everywhere: **incoherent** addition, no fringes.`,
          },
          {
            type: "formula",
            tex: t`I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\phi, \qquad I_1 = I_2 = I_0 \Rightarrow I = 4I_0\cos^2\frac{\phi}{2}, \qquad \phi = \frac{2\pi}{\lambda}\,\Delta x`,
            caption: "Δx is the path difference. The intensity swings between 0 and 4I₀ for equal sources; the average stays 2I₀, so energy is only redistributed.",
          },
          {
            type: "table",
            headers: ["Path difference Δx", "Phase difference φ", "Result (equal sources)"],
            rows: [
              [t`$n\lambda$ ($n = 0, 1, 2, \ldots$)`, t`$2n\pi$`, t`Constructive: $I = 4I_0$ (bright)`],
              [t`$\left(n + \tfrac{1}{2}\right)\lambda$`, t`$(2n + 1)\pi$`, "Destructive: I = 0 (dark)"],
              [t`$\lambda/4$`, t`$\pi/2$`, t`$I = 2I_0$`],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Young's experiment (1801).** Light from a narrow slit S falls on two close slits S₁ and S₂ (separation $d$). Both come from the same wavefront, so S₁ and S₂ are coherent. A screen is at distance $D \gg d$.`,
              t`For a point P on the screen at height $x$ from the centre O: $(S_2P)^2 - (S_1P)^2 = \left[D^2 + \left(x + \tfrac{d}{2}\right)^2\right] - \left[D^2 + \left(x - \tfrac{d}{2}\right)^2\right] = 2xd$.`,
              t`So $S_2P - S_1P = \dfrac{2xd}{S_2P + S_1P}$. For $x, d \ll D$, $S_2P + S_1P \approx 2D$, giving path difference $\Delta x = \dfrac{xd}{D}$.`,
              t`Bright fringe: $\dfrac{xd}{D} = n\lambda$, so $x_n = \dfrac{n\lambda D}{d}$. Dark fringe: $x_n = \left(n + \tfrac{1}{2}\right)\dfrac{\lambda D}{d}$.`,
              t`The spacing between consecutive bright (or dark) fringes is the **fringe width** $\beta = \dfrac{\lambda D}{d}$. The point O (Δx = 0) is always bright: the **central maximum**.`,
            ],
          },
          {
            type: "formula",
            tex: t`\beta = \frac{\lambda D}{d}, \qquad \text{angular fringe width } \theta = \frac{\lambda}{d}`,
            caption: "Fringes are equally spaced. In a medium of index n, λ becomes λ/n, so β becomes β/n.",
          },
          {
            type: "example",
            title: "Fringe positions",
            problem: "In a Young's double-slit experiment with light of wavelength 600 nm, the slits are 0.50 mm apart and the screen is 1.0 m away. Find (a) the fringe width, (b) the distance of the third bright fringe from the centre, (c) the distance of the second dark fringe, and (d) the fringe width if the whole set-up is put in water (n = 4/3).",
            steps: [
              t`(a) $\beta = \dfrac{600 \times 10^{-9} \times 1.0}{0.50 \times 10^{-3}} = 1.2 \times 10^{-3}$ m $= 1.2$ mm.`,
              t`(b) $x_3 = 3\beta = 3.6$ mm.`,
              t`(c) Dark fringes are at $\tfrac{1}{2}\beta, \tfrac{3}{2}\beta, \ldots$; the second is at $\tfrac{3}{2} \times 1.2 = 1.8$ mm.`,
              t`(d) $\beta_w = \dfrac{\beta}{n} = 1.2 \times \dfrac{3}{4} = 0.90$ mm.`,
            ],
            answer: "β = 1.2 mm; third bright fringe at 3.6 mm; second dark fringe at 1.8 mm; in water β = 0.90 mm.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Two coherent sources of equal intensity I₀ meet at a point with a path difference of λ/3. What is the intensity there, as a multiple of I₀?",
                answer: 1,
                difficulty: 2,
                explain: t`$\phi = \frac{2\pi}{\lambda} \cdot \frac{\lambda}{3} = \frac{2\pi}{3}$. $I = 4I_0\cos^2\left(\frac{\pi}{3}\right) = 4I_0 \times \frac{1}{4} = I_0$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**What the experiment shows.** Fringes are equally spaced; $\beta$ grows with $\lambda$ and $D$ and falls as $d$ increases. With **white light**, the central fringe is white (every colour has zero path difference there), and the next few fringes are coloured, with red fringes wider than blue ones; further out the colours overlap and the screen looks uniformly white.

The source slit S must be narrow: if its width $s$ is too large, different parts of S produce shifted patterns that wash each other out. Fringes are seen when $s/S \lesssim \lambda/d$, where $S$ is the distance of the source slit from the double slit.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "The whole double-slit set-up is lowered into a tank of water. The fringes:",
              emoji: "💧",
              options: ["Become wider", "Become narrower", "Stay exactly the same"],
              answer: 1,
              trap: 0,
              explain: "In water the wavelength becomes λ/n, so β = λD/(nd) is smaller: the fringes crowd closer together.",
            },
          },
          {
            type: "mistake",
            wrong: "At a dark fringe, light energy is destroyed.",
            right: "Energy is only redistributed: dark fringes get less, bright fringes get more, and the average intensity is still 2I₀.",
            why: "The cos φ term is positive at some points and negative at others, and it averages to zero across the screen. The total energy reaching the screen equals the sum from the two slits.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "The derivation of fringe width (5 marks with the intensity part) needs a neat diagram with S₁, S₂, d, D, x and P, the step (S₂P)² − (S₁P)² = 2xd, the approximation S₂P + S₁P ≈ 2D, and the conditions for bright and dark fringes. Questions often ask what happens to β when d, D, λ or the medium change; answer from β = λD/d.",
          },
          {
            type: "keypoints",
            items: [
              "Superposition: displacements add. Coherent sources keep a constant phase difference.",
              t`$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\phi$; equal sources: $I = 4I_0\cos^2(\phi/2)$.`,
              t`YDSE: path difference $xd/D$; bright at $n\lambda D/d$, dark at $(n + \tfrac{1}{2})\lambda D/d$.`,
              t`Fringe width $\beta = \lambda D/d$, angular width $\lambda/d$; in a medium, $\beta/n$.`,
              "White light: white central fringe with coloured fringes beside it.",
            ],
          },
        ],
        flashcards: [
          { front: "Coherent sources", back: "Sources whose phase difference stays constant in time, usually two parts of the same wavefront." },
          { front: "Why don't two bulbs show interference?", back: "Their phase difference changes randomly and rapidly, so the interference term averages to zero (incoherent addition)." },
          { front: "Resultant intensity of two coherent waves", back: "I = I1 + I2 + 2√(I1 I2) cos φ." },
          { front: "Path difference in YDSE at height x", back: "Δx = xd/D (for x, d ≪ D)." },
          { front: "Fringe width", back: "β = λD/d." },
          { front: "Condition for a dark fringe", back: "Path difference = (n + ½)λ, phase difference = (2n + 1)π." },
          { front: "YDSE with white light", back: "The central fringe is white; fringes on either side are coloured (violet closest to the centre, red farthest)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "In a YDSE, λ = 500 nm, d = 1.0 mm and D = 2.0 m. What is the fringe width in mm?",
            answer: 1,
            unit: "mm",
            explain: t`$\beta = \frac{500 \times 10^{-9} \times 2.0}{1.0 \times 10^{-3}} = 1.0 \times 10^{-3}$ m $= 1.0$ mm.`,
          },
          {
            kind: "mcq",
            q: "Two separate sodium lamps placed side by side do not produce interference fringes because:",
            options: ["Their wavelengths are different", "Their intensities are unequal", "They are not coherent", "Sodium light cannot interfere"],
            answer: 2,
            explain: "Each lamp emits in short random bursts, so the phase difference between them keeps changing. They are not coherent.",
          },
          {
            kind: "numeric",
            q: "Two coherent waves of equal intensity I₀ meet with a phase difference of π/2. What is the resultant intensity in units of I₀?",
            answer: 2,
            explain: t`$I = 4I_0\cos^2(\pi/4) = 4I_0 \times \frac{1}{2} = 2I_0$.`,
          },
          {
            kind: "numeric",
            q: "The amplitudes of two coherent waves are in the ratio 2 : 1. What is the ratio of maximum to minimum intensity in their interference pattern?",
            answer: 9,
            difficulty: 2,
            explain: t`$\frac{I_{\max}}{I_{\min}} = \frac{(a_1 + a_2)^2}{(a_1 - a_2)^2} = \frac{3^2}{1^2} = 9$.`,
            hint: "Add and subtract amplitudes, then square.",
          },
          {
            kind: "truefalse",
            q: "In a YDSE with white light, the central fringe is white.",
            answer: true,
            explain: "At the centre the path difference is zero for every wavelength, so every colour is bright there.",
          },
          {
            kind: "mcq",
            q: "If the separation between the two slits is doubled (all else unchanged), the fringe width:",
            options: ["Doubles", "Halves", "Stays the same", "Becomes four times"],
            answer: 1,
            explain: "β = λD/d, so doubling d halves β.",
          },
          {
            kind: "numeric",
            q: "In a YDSE the fringe width is 0.80 mm. How far from the central maximum is the fifth bright fringe, in mm?",
            answer: 4,
            unit: "mm",
            explain: t`$x_5 = 5\beta = 5 \times 0.80 = 4.0$ mm.`,
          },
        ],
      },

      /* ---------------- Lesson 3: Diffraction and polarisation ---------------- */
      {
        slug: "c12-wo-diffraction-polarisation",
        title: "Diffraction and Polarisation",
        summary: "Single-slit diffraction and the width of the central maximum, how diffraction differs from interference, polarisation by polaroids and Malus' law.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Look at a distant street light through a narrow gap between two fingers and you see faint dark and bright bands. Light spreads into the geometric shadow when it passes a small opening or edge: **diffraction**. It is noticeable only when the opening is comparable to the wavelength. Sound (λ about 1 m) bends easily round doors; light (λ about 500 nm) needs a slit a fraction of a millimetre wide.",
          },
          {
            type: "text",
            md: t`**Single slit.** A plane wave falls on a slit of width $a$; we look at angle $\theta$ on a distant screen (or in the focal plane of a lens). At $\theta = 0$ all parts of the slit are in phase: a bright **central maximum**.

Divide the slit into two halves. If the path difference between the two edges is $a\sin\theta = \lambda$, each point in the upper half has a partner in the lower half exactly $\lambda/2$ behind, so their contributions cancel in pairs: **first minimum**. In general, minima occur at $a\sin\theta = n\lambda$ ($n = \pm 1, \pm 2, \ldots$). Between them are **secondary maxima** near $a\sin\theta \approx \left(n + \tfrac{1}{2}\right)\lambda$, which get much weaker as $n$ increases, because only one-third, one-fifth, … of the slit is left uncancelled.`,
          },
          {
            type: "formula",
            tex: t`\text{minima: } a\sin\theta = n\lambda\ (n \neq 0), \qquad \text{angular width of central maximum} = \frac{2\lambda}{a}, \qquad \text{linear width} = \frac{2\lambda D}{a}`,
            caption: "Small-angle results. The central maximum is twice as wide as each secondary maximum.",
          },
          {
            type: "example",
            title: "Width of the central maximum",
            problem: "Light of wavelength 500 nm falls on a slit 0.25 mm wide. The screen is 1.0 m away. Find the distance of the first minimum from the centre and the width of the central maximum.",
            steps: [
              t`$\theta_1 \approx \dfrac{\lambda}{a} = \dfrac{500 \times 10^{-9}}{0.25 \times 10^{-3}} = 2.0 \times 10^{-3}$ rad.`,
              t`$y_1 = D\theta_1 = 1.0 \times 2.0 \times 10^{-3}$ m $= 2.0$ mm.`,
              t`Width of central maximum $= 2y_1 = 4.0$ mm.`,
            ],
            answer: "First minimum 2.0 mm from the centre; central maximum 4.0 mm wide.",
          },
          {
            type: "table",
            headers: ["Interference (double slit)", "Diffraction (single slit)"],
            rows: [
              ["Superposition of waves from two separate coherent sources", "Superposition of wavelets from different parts of one wavefront"],
              ["Fringes of equal width", "Central maximum twice as wide as the others"],
              ["Bright fringes of (nearly) equal intensity", "Intensity falls rapidly away from the centre"],
              [t`Bright at path difference $n\lambda$ (θ ≈ nλ/d)`, t`Dark at $a\sin\theta = n\lambda$; centre bright`],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The width of the slit in a single-slit experiment is halved. The central maximum becomes:",
                options: ["Half as wide", "Twice as wide", "Four times as wide", "Unchanged"],
                answer: 1,
                explain: "Angular width = 2λ/a, so halving a doubles the width. A narrower slit spreads light more.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Polarisation.** In light, the electric field vibrates perpendicular to the direction of travel: light is a **transverse** wave. In ordinary (**unpolarised**) light from the Sun or a bulb, the direction of vibration changes randomly in all directions perpendicular to the ray.

A **polaroid** is a sheet with long-chain molecules lined up in one direction. It absorbs the electric field component along the chains and lets through the component along its **pass axis**. Light coming out is **plane polarised** (vibrations in one plane only). An ideal polaroid passes **half** the intensity of unpolarised light, whatever its orientation.

If plane-polarised light of intensity $I_0$ falls on a second polaroid (the **analyser**) whose pass axis makes angle $\theta$ with the polarisation direction, only the component $E_0\cos\theta$ gets through. This is **Malus' law**. Crossed polaroids ($\theta = 90^\circ$) let no light through. Sound waves in air are longitudinal, so they cannot be polarised.`,
          },
          {
            type: "formula",
            tex: t`I = I_0\cos^2\theta \quad \text{(Malus' law)}, \qquad \text{unpolarised} \xrightarrow{\text{polaroid}} \frac{I_0}{2}`,
          },
          {
            type: "example",
            title: "Two polaroids",
            problem: t`Unpolarised light of intensity 80 W/m² passes through two polaroids whose pass axes are at 60° to each other. Find the intensity of the light that emerges.`,
            steps: [
              t`After the first polaroid: $\dfrac{80}{2} = 40$ W/m², plane polarised.`,
              t`After the second: $I = 40\cos^2 60^\circ = 40 \times \dfrac{1}{4} = 10$ W/m².`,
            ],
            answer: "10 W/m².",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: polarisation by reflection",
            md: "Rationalised NCERT keeps polaroids and Malus' law. ISC (and JEE) also ask **Brewster's law**: when unpolarised light is reflected at the angle θB with tan θB = n, the reflected light is completely plane polarised and the reflected and refracted rays are at 90° to each other. For glass with n = 1.5, θB ≈ 56.3°. Polaroids are used in sunglasses that cut glare, LCD screens and 3D-film glasses.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does this show light is a wave, or that it is transverse?",
              groups: ["Shows wave nature (any wave)", "Shows light is transverse"],
              items: [
                { text: "Bright and dark fringes from two slits", group: 0, hint: "Sound waves also interfere; this works for longitudinal waves too." },
                { text: "Light spreading into the shadow of a thin slit", group: 0, hint: "Diffraction happens for all waves, including sound." },
                { text: "Light through two crossed polaroids is blocked", group: 1, hint: "Only a wave with a vibration direction across the ray can be blocked by turning a filter." },
                { text: "Sunlight through one polaroid dims as the second is rotated", group: 1, hint: "Malus' law depends on the direction of vibration." },
                { text: "Red shift of a galaxy's spectrum", group: 0, hint: "The Doppler effect happens for all waves." },
              ],
              explain: "Interference, diffraction and the Doppler effect show that light is a wave. Only polarisation proves that it is a transverse wave.",
            },
          },
          {
            type: "mistake",
            wrong: "A wider slit gives a wider central maximum, because more light passes through.",
            right: "A wider slit gives a narrower central maximum (angular width 2λ/a). It is brighter, but less spread out.",
            why: "Diffraction is the spreading of light by a narrow opening. As a grows much larger than λ the spreading vanishes and ray optics takes over; that is why we can treat light as rays for windows and lenses.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "For single-slit diffraction, draw the intensity graph with the central maximum twice as wide and much higher than the secondary maxima, and mark minima at ±λ/a, ±2λ/a. 'Distinguish between interference and diffraction' wants two or three clear points from the table. In Malus' law questions, remember the first polaroid halves unpolarised light.",
          },
          {
            type: "keypoints",
            items: [
              "Diffraction is noticeable when the opening is comparable to λ.",
              t`Single slit: minima at $a\sin\theta = n\lambda$; central maximum of angular width $2\lambda/a$.`,
              "Polarisation shows that light is transverse; unpolarised light through a polaroid keeps half its intensity.",
              t`Malus' law: $I = I_0\cos^2\theta$; crossed polaroids block all light.`,
            ],
          },
        ],
        flashcards: [
          { front: "Diffraction", back: "The bending and spreading of a wave round an obstacle or opening of size comparable to its wavelength." },
          { front: "Condition for minima in single-slit diffraction", back: "a sin θ = nλ, n = ±1, ±2, …" },
          { front: "Angular width of the central maximum", back: "2λ/a." },
          { front: "Plane-polarised light", back: "Light whose electric field vibrates in one plane only." },
          { front: "Intensity after one polaroid (unpolarised light)", back: "Half the incident intensity, I0/2." },
          { front: "Malus' law", back: "I = I0 cos² θ, where θ is the angle between the polarisation direction and the analyser's pass axis." },
          { front: "Why can't sound in air be polarised?", back: "It is a longitudinal wave; its vibrations are along the direction of travel." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Light of wavelength 600 nm passes through a slit 0.30 mm wide. What is the angular width of the central maximum, in milliradians?",
            answer: 4,
            unit: "mrad",
            explain: t`$\frac{2\lambda}{a} = \frac{2 \times 600 \times 10^{-9}}{0.30 \times 10^{-3}} = 4.0 \times 10^{-3}$ rad $= 4.0$ mrad.`,
          },
          {
            kind: "numeric",
            q: "Unpolarised light of intensity 40 W/m² falls on an ideal polaroid. What intensity comes out, in W/m²?",
            answer: 20,
            unit: "W/m²",
            explain: "An ideal polaroid passes half the intensity of unpolarised light.",
          },
          {
            kind: "numeric",
            q: "Plane-polarised light of intensity 12 W/m² falls on an analyser whose pass axis is at 30° to the plane of polarisation. What intensity emerges, in W/m²?",
            answer: 9,
            unit: "W/m²",
            difficulty: 2,
            explain: t`$I = 12\cos^2 30^\circ = 12 \times \frac{3}{4} = 9$ W/m².`,
          },
          {
            kind: "mcq",
            q: "Which phenomenon shows that light waves are transverse?",
            options: ["Interference", "Diffraction", "Polarisation", "Refraction"],
            answer: 2,
            explain: "Interference and diffraction happen with longitudinal waves too. Only transverse waves can be polarised.",
          },
          {
            kind: "truefalse",
            q: "Sound waves travelling in air cannot be polarised.",
            answer: true,
            explain: "Sound in air is longitudinal: the vibration is along the direction of travel, so there is no transverse direction to select.",
          },
          {
            kind: "multi",
            q: "Polaroids are used in:",
            options: ["Sunglasses that cut glare", "LCD screens", "Glasses for 3D films", "Optical fibres for the internet"],
            answers: [0, 1, 2],
            explain: "Optical fibres guide light by total internal reflection and do not need polaroids.",
          },
          {
            kind: "mcq",
            q: "Compared with a double-slit interference pattern, a single-slit diffraction pattern has:",
            options: ["All fringes of equal width and brightness", "A central maximum twice as wide as the other maxima, with intensity falling off quickly", "No central maximum", "A dark centre"],
            answer: 1,
            explain: "In diffraction the central maximum spans −λ/a to +λ/a and is much brighter; the secondary maxima are narrower and weaker.",
          },
        ],
      },

      /* ---------------- Exam edge: wave optics ---------------- */
      {
        slug: "c12-wo-exam",
        title: "Exam edge: Interference, Diffraction and Polarisation",
        summary: "Entrance-exam patterns in wave optics: intensity ratios, thin films in one slit, overlapping fringes, polaroid chains, Brewster's angle and unequal-intensity YDSE.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Wave optics gives one or two questions in most papers. **KCET, COMEDK and NEET** ask fringe width, intensity ratios, single-slit width and Malus' law, often in one step. **JEE Main** adds a thin film over one slit, coincidence of fringes of two wavelengths and Brewster's angle. **JEE Advanced** mixes them: unequal-intensity sources with a phase shift, polaroid chains, and multiple-correct questions on how the pattern changes.",
          },
          {
            type: "table",
            headers: ["Exam", "Typical question"],
            rows: [
              ["KCET / COMEDK", "β for given λ, D, d; Imax/Imin from amplitude or intensity ratio"],
              ["NEET", "Effect of medium on β; central maximum width; Malus' law with two polaroids"],
              ["JEE Main", "Film on one slit (shift); first coincidence of two wavelengths; Brewster's angle"],
              ["JEE Advanced", "Intensity at a point with unequal sources; three-polaroid systems; multiple-correct on pattern changes"],
            ],
          },
          {
            type: "list",
            items: [
              t`**Max/min ratio**: $\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{\sqrt{I_1} + \sqrt{I_2}}{\sqrt{I_1} - \sqrt{I_2}}\right)^2$. Work with $\sqrt{I}$ (amplitudes), never with $I$ directly.`,
              t`**Thin film on one slit**: extra optical path $(n - 1)t$. The whole pattern shifts **towards the covered slit** by $\Delta y = \dfrac{(n - 1)tD}{d}$, i.e. by $N = \dfrac{(n - 1)t}{\lambda}$ fringes. β does not change.`,
              t`**Coincidence of two wavelengths**: bright fringes overlap where $n_1\lambda_1 = n_2\lambda_2$; take the smallest integers.`,
              t`**Angular fringe width** $\lambda/d$ does not depend on D; linear width $\lambda D/d$ does.`,
              t`**Polaroid chain**: unpolarised $I_0$ through P₁, then P₂ at θ, then P₃ crossed with P₁: $I = \dfrac{I_0}{8}\sin^2 2\theta$, maximum $I_0/8$ at θ = 45°.`,
              t`**Brewster**: $\tan\theta_B = n$; at θB the reflected and refracted rays are perpendicular ($\theta_B + r = 90^\circ$).`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{I_{\max}}{I_{\min}} = \left(\frac{\sqrt{I_1} + \sqrt{I_2}}{\sqrt{I_1} - \sqrt{I_2}}\right)^2, \qquad \Delta y = \frac{(n - 1)tD}{d}, \qquad \tan\theta_B = n`,
          },
          {
            type: "example",
            title: "KCET level: intensity ratio",
            problem: "Two coherent sources have intensities in the ratio 9 : 1. Find the ratio of maximum to minimum intensity in the interference pattern.",
            steps: [
              t`Amplitude ratio $= \sqrt{9} : \sqrt{1} = 3 : 1$.`,
              t`$\dfrac{I_{\max}}{I_{\min}} = \dfrac{(3 + 1)^2}{(3 - 1)^2} = \dfrac{16}{4} = 4$.`,
            ],
            answer: "4 : 1.",
          },
          {
            type: "example",
            title: "JEE Main level: film over one slit",
            problem: "In a YDSE with light of wavelength 600 nm, a thin transparent sheet (n = 1.5) covers one slit. The central bright fringe moves to where the fifth bright fringe used to be. Find the thickness of the sheet.",
            steps: [
              t`Shift of 5 fringes means the extra path equals $5\lambda$: $(n - 1)t = 5\lambda$.`,
              t`$t = \dfrac{5 \times 600 \times 10^{-9}}{1.5 - 1} = \dfrac{3.0 \times 10^{-6}}{0.5} = 6.0 \times 10^{-6}$ m.`,
            ],
            answer: "6.0 μm. The pattern moves towards the covered slit; the fringe width is unchanged.",
          },
          {
            type: "example",
            title: "NEET level: two wavelengths",
            problem: "A double slit (d = 1.0 mm, D = 1.0 m) is lit with light containing 600 nm and 480 nm. How far from the centre do bright fringes of the two colours first coincide?",
            steps: [
              t`Need $n_1 \times 600 = n_2 \times 480$, so $\dfrac{n_1}{n_2} = \dfrac{480}{600} = \dfrac{4}{5}$: $n_1 = 4$, $n_2 = 5$.`,
              t`$y = \dfrac{n_1\lambda_1 D}{d} = \dfrac{4 \times 600 \times 10^{-9} \times 1.0}{1.0 \times 10^{-3}} = 2.4 \times 10^{-3}$ m.`,
            ],
            answer: "2.4 mm from the centre (4th bright of 600 nm on the 5th bright of 480 nm).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Light is incident on glass of refractive index √3. At what angle of incidence (in degrees) is the reflected light completely plane polarised?",
                answer: 60,
                unit: "°",
                explain: t`$\tan\theta_B = \sqrt{3}$, so $\theta_B = 60^\circ$. The refracted ray is then at $30^\circ$, perpendicular to the reflected ray.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Advanced level: three polaroids",
            problem: t`Unpolarised light of intensity $I_0$ passes through polaroids P₁, P₂ and P₃ in turn. P₁ and P₃ are crossed. P₂ makes angle θ with P₁. Find the transmitted intensity as a function of θ, its maximum value, and its value at θ = 30°.`,
            steps: [
              t`After P₁: $\dfrac{I_0}{2}$. After P₂: $\dfrac{I_0}{2}\cos^2\theta$.`,
              t`P₃ is at $90^\circ - \theta$ to P₂: $I = \dfrac{I_0}{2}\cos^2\theta\,\sin^2\theta = \dfrac{I_0}{8}\sin^2 2\theta$.`,
              t`Maximum when $\sin 2\theta = 1$, θ = 45°: $I_{\max} = \dfrac{I_0}{8}$.`,
              t`At θ = 30°: $I = \dfrac{I_0}{8}\sin^2 60^\circ = \dfrac{I_0}{8} \times \dfrac{3}{4} = \dfrac{3I_0}{32}$.`,
            ],
            answer: t`$I = \frac{I_0}{8}\sin^2 2\theta$; maximum $I_0/8$ at 45°; $3I_0/32$ at 30°. With P₂ removed, no light gets through.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: unequal sources",
            problem: t`In a YDSE, one slit is wider so that the intensities from the slits are $I_0$ and $4I_0$. Find the intensity at a point where the path difference is $\lambda/4$, as a fraction of the maximum intensity.`,
            steps: [
              t`$\phi = \dfrac{2\pi}{\lambda} \cdot \dfrac{\lambda}{4} = \dfrac{\pi}{2}$, so $\cos\phi = 0$.`,
              t`$I = I_0 + 4I_0 + 2\sqrt{4I_0^2}\cos\dfrac{\pi}{2} = 5I_0$.`,
              t`$I_{\max} = (\sqrt{I_0} + \sqrt{4I_0})^2 = 9I_0$; $I_{\min} = (2 - 1)^2 I_0 = I_0$ (dark fringes are not fully dark).`,
            ],
            answer: t`$I = 5I_0 = \frac{5}{9}I_{\max}$.`,
          },
          {
            type: "mistake",
            wrong: "A glass film over the upper slit pushes the fringe pattern downwards, away from that slit.",
            right: "The pattern shifts towards the covered slit, by (n − 1)tD/d.",
            why: "The film adds optical path to the waves from that slit. To get zero path difference again (the central maximum), the point on the screen must be closer to the covered slit, so its geometric path is shorter.",
          },
          {
            type: "mistake",
            wrong: "Placing a thin film over one slit changes the fringe width.",
            right: "The fringe width stays λD/d; the whole pattern just shifts.",
            why: "The film adds a constant extra path at every point, so the spacing between successive fringes, which depends only on λ, D and d, is unchanged. Only immersing the whole set-up in a medium (λ → λ/n) changes β.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each change in a YDSE with its effect.",
              pairs: [
                ["Screen distance D doubled", "β doubles"],
                ["Slit separation d doubled", "β halves"],
                ["Set-up immersed in water (n = 4/3)", "β becomes three-quarters"],
                ["Thin film over one slit", "β unchanged, pattern shifts"],
                ["Red light replaced by blue", "β decreases"],
              ],
              explain: "Everything follows from β = λD/d, with λ replaced by λ/n in a medium. A film only adds a constant path, so it shifts the pattern without changing spacing.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Safe use of the shortcuts",
            md: "β = λD/d and Δx = xd/D need small angles (x, d ≪ D). If a question gives a large angle, use path difference d sin θ. Single-slit 'minima at nλ/a' is the condition for dark bands, the opposite of the YDSE bright-band condition; exams love to swap them. Resolving power and the Fresnel distance have been removed from the rationalised NCERT book, so KCET and NEET rarely ask them now, but they can still appear in JEE and ISC.",
          },
          {
            type: "keypoints",
            items: [
              "Ratios: work with amplitudes (√I), then square.",
              "Film on one slit: shift (n − 1)tD/d towards that slit, β unchanged.",
              "Coincidence of fringes: n1 λ1 = n2 λ2 with the smallest integers.",
              "Three polaroids with crossed ends: I = (I0/8) sin² 2θ.",
              "Brewster: tan θB = n; reflected and refracted rays at 90°.",
            ],
          },
        ],
        flashcards: [
          { front: "Imax/Imin for intensities I1 and I2", back: "((√I1 + √I2)/(√I1 − √I2))²." },
          { front: "Shift of fringes due to a film on one slit", back: "Δy = (n − 1)tD/d, towards the covered slit; N = (n − 1)t/λ fringes." },
          { front: "Coincidence of bright fringes of λ1 and λ2", back: "n1 λ1 = n2 λ2, smallest integers." },
          { front: "Angular fringe width", back: "λ/d, independent of the screen distance." },
          { front: "Three polaroids, first and last crossed", back: "I = (I0/8) sin² 2θ; maximum I0/8 at 45°." },
          { front: "Brewster's law", back: "tan θB = n; reflected light is fully plane polarised and perpendicular to the refracted ray." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Two coherent sources have intensities in the ratio 16 : 1. The ratio Imax/Imin is:",
            options: ["16", "25/9", "17/15", "5/3"],
            answer: 1,
            explain: t`Amplitudes 4 : 1, so $\frac{(4 + 1)^2}{(4 - 1)^2} = \frac{25}{9}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "In a YDSE, λ = 500 nm, d = 0.25 mm and D = 1.5 m. What is the fringe width in mm?",
            answer: 3,
            unit: "mm",
            explain: t`$\beta = \frac{500 \times 10^{-9} \times 1.5}{0.25 \times 10^{-3}} = 3.0 \times 10^{-3}$ m $= 3.0$ mm.`,
          },
          {
            kind: "numeric",
            q: "A film of thickness 3.0 μm and n = 1.6 covers one slit of a YDSE using 600 nm light. By how many fringes does the pattern shift?",
            answer: 3,
            explain: t`$N = \frac{(n - 1)t}{\lambda} = \frac{0.6 \times 3.0 \times 10^{-6}}{600 \times 10^{-9}} = 3$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these change the fringe width in a YDSE?",
            options: ["Changing the wavelength", "Moving the screen further away", "Making one source brighter", "Immersing the apparatus in oil", "Covering one slit with a thin glass film"],
            answers: [0, 1, 3],
            explain: "β = λD/d with λ → λ/n in a medium. Brightness changes contrast, not spacing; a film shifts the pattern without changing β.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In single-slit diffraction, the slit width equals the wavelength (a = λ). Then:",
            options: ["The central maximum is very narrow", "The first minima are at ±90°, so the central maximum spreads over the whole forward region", "There is no diffraction", "Many secondary maxima are seen"],
            answer: 1,
            explain: t`$\sin\theta = \lambda/a = 1$, so $\theta = 90^\circ$: the central maximum fills the entire half-space in front of the slit.`,
            difficulty: 3,
            hint: "Put a = λ in a sin θ = λ.",
          },
          {
            kind: "numeric",
            q: "Unpolarised light of intensity 64 W/m² passes through three polaroids; the first and third are crossed and the middle one is at 30° to the first. What intensity emerges, in W/m²?",
            answer: 6,
            unit: "W/m²",
            explain: t`$I = \frac{64}{8}\sin^2 60^\circ = 8 \times \frac{3}{4} = 6$ W/m².`,
            difficulty: 3,
            hint: "Use I = (I0/8) sin² 2θ.",
          },
          {
            kind: "numeric",
            q: "A YDSE (d = 0.50 mm, D = 1.0 m) uses light of 650 nm and 520 nm together. How far from the centre (in mm) do their bright fringes first coincide?",
            answer: 5.2,
            unit: "mm",
            explain: t`$n_1 \times 650 = n_2 \times 520$ gives $n_1 = 4$, $n_2 = 5$ (2600 nm). $y = \frac{2600 \times 10^{-9} \times 1.0}{0.50 \times 10^{-3}} = 5.2$ mm.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "For glass of refractive index 1.5, the Brewster angle is about 56.3°. What is the angle of refraction at this incidence, in degrees?",
            answer: 33.7,
            tolerance: 0.2,
            unit: "°",
            explain: "At the Brewster angle the reflected and refracted rays are perpendicular, so r = 90° − 56.3° = 33.7°.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Ray Optics and Optical Instruments": "c12-ray-optics",
  "12:Wave Optics": "c12-wave-optics",
  "12:Optics": ["c12-ray-optics", "c12-wave-optics"],
};
