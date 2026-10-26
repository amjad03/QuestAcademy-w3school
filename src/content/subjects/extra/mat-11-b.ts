import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Complex Numbers and Quadratic Equations (CBSE / Karnataka PUC / ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-complex-quadratic",
    title: "Complex Numbers and Quadratic Equations",
    icon: "🌀",
    description: "The number i, algebra of complex numbers, modulus and conjugate, the Argand plane and polar form, and quadratic equations with complex roots, with an Exam edge on loci, cube roots of unity and the theory of quadratic equations.",
    lessons: [
      {
        slug: "c11-complex-algebra",
        title: "Complex Numbers and Their Algebra",
        summary: "Why we need i, the form a + ib, equality, the four operations, powers of i and the multiplicative inverse.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🌀",
            caption: t`The equation $x^2 + 1 = 0$ asks for a number whose square is $-1$. No real number works, because every real square is $\ge 0$. So mathematicians built a bigger number system.`,
          },
          {
            type: "text",
            md: t`We define a new number $i$ (iota) with $i^2 = -1$, so $i = \sqrt{-1}$. A number of the form $z = a + ib$, where $a$ and $b$ are real, is a **complex number**. The set of all complex numbers is written $\mathbb{C}$.

$a$ is the **real part**, written $\text{Re}\,z$, and $b$ is the **imaginary part**, written $\text{Im}\,z$. For $z = 3 - 5i$: $\text{Re}\,z = 3$ and $\text{Im}\,z = -5$ (not $-5i$). If $b = 0$ the number is **purely real**; if $a = 0$ it is **purely imaginary**. Every real number is a complex number with imaginary part 0.`,
          },
          {
            type: "text",
            md: t`**Equality.** Two complex numbers are equal only when both parts match: $a + ib = c + id \iff a = c$ and $b = d$. One complex equation therefore gives **two** real equations.

**Addition and subtraction** work part by part: $(a + ib) \pm (c + id) = (a \pm c) + i(b \pm d)$. Addition is closed, commutative and associative; $0 = 0 + 0i$ is the additive identity, and $-z = -a - ib$ is the additive inverse of $z$.`,
          },
          {
            type: "formula",
            tex: t`(a + ib)(c + id) = (ac - bd) + i(ad + bc)`,
            caption: t`Multiply out like ordinary brackets, then replace $i^2$ by $-1$. Multiplication is also closed, commutative, associative and distributes over addition; $1$ is the multiplicative identity.`,
          },
          {
            type: "formula",
            tex: t`i^{4k} = 1,\quad i^{4k+1} = i,\quad i^{4k+2} = -1,\quad i^{4k+3} = -i \qquad (k \in \mathbb{Z})`,
            caption: "Powers of i repeat in a cycle of 4. Divide the power by 4 and look only at the remainder.",
          },
          {
            type: "example",
            title: "Product and a power of i",
            problem: t`Write $(2 + 3i)(4 - i) + i^{35}$ in the form $a + ib$.`,
            steps: [
              t`Expand: $(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2$.`,
              t`Use $i^2 = -1$: $8 + 10i + 3 = 11 + 10i$.`,
              t`$35 = 4 \times 8 + 3$, so $i^{35} = i^3 = -i$.`,
              t`Add: $11 + 10i - i = 11 + 9i$.`,
            ],
            answer: t`$11 + 9i$`,
          },
          {
            type: "text",
            md: t`**Division.** For $z = a + ib \ne 0$, the **multiplicative inverse** is

$z^{-1} = \dfrac{1}{a + ib} = \dfrac{a - ib}{a^2 + b^2} = \dfrac{a}{a^2 + b^2} - i\,\dfrac{b}{a^2 + b^2}$.

To divide $z_1$ by $z_2$, multiply $z_1$ by $z_2^{-1}$. In practice: multiply the numerator and the denominator by the denominator with the sign of $i$ changed. The denominator then becomes the real number $c^2 + d^2$.`,
          },
          {
            type: "example",
            title: "Dividing complex numbers",
            problem: t`Express $\dfrac{3 + 2i}{1 - 2i}$ in the form $a + ib$.`,
            steps: [
              t`Multiply top and bottom by $1 + 2i$.`,
              t`Numerator: $(3 + 2i)(1 + 2i) = 3 + 6i + 2i + 4i^2 = 3 + 8i - 4 = -1 + 8i$.`,
              t`Denominator: $(1 - 2i)(1 + 2i) = 1 - 4i^2 = 1 + 4 = 5$.`,
              t`So the quotient is $\dfrac{-1 + 8i}{5}$.`,
            ],
            answer: t`$-\dfrac{1}{5} + \dfrac{8}{5}i$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`What is $i^{-39}$?`,
                options: [t`$i$`, t`$-i$`, t`$1$`, t`$-1$`],
                answer: 0,
                explain: t`$i^{39} = i^{36} \cdot i^3 = -i$. So $i^{-39} = \dfrac{1}{-i} = \dfrac{i}{-i \cdot i} = \dfrac{i}{1} = i$. (Quicker: $i^{-39} = i^{-40} \cdot i = i$.)`,
              },
              {
                kind: "numeric",
                q: t`Find the real part of $(1 + i)^2$.`,
                answer: 0,
                explain: t`$(1 + i)^2 = 1 + 2i + i^2 = 2i$. Its real part is 0; it is purely imaginary.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\sqrt{-4} \times \sqrt{-9} = \sqrt{(-4)(-9)} = \sqrt{36} = 6$.`,
            right: t`$\sqrt{-4} = 2i$ and $\sqrt{-9} = 3i$, so the product is $6i^2 = -6$.`,
            why: t`The rule $\sqrt{a}\sqrt{b} = \sqrt{ab}$ is proved for $a, b \ge 0$. It fails when both $a$ and $b$ are negative. Always write $\sqrt{-a} = i\sqrt{a}$ first, then multiply.`,
          },
          {
            type: "text",
            md: t`**No order.** Real numbers can be compared, but complex numbers cannot. A statement such as $3 + 2i > 1 + 2i$ has **no meaning**. Only the real parts, imaginary parts or moduli (next lesson) can be compared.

The usual identities still hold for complex numbers, for example $(z_1 + z_2)^2 = z_1^2 + 2z_1z_2 + z_2^2$ and $z_1^2 - z_2^2 = (z_1 + z_2)(z_1 - z_2)$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each power of i with its value.",
              pairs: [
                [t`$i^{10}$`, t`$-1$`],
                [t`$i^{25}$`, t`$i$`],
                [t`$i^{-1}$`, t`$-i$`],
                [t`$i^{100}$`, t`$1$`],
              ],
              explain: t`Reduce the power modulo 4: $10 \to 2$, $25 \to 1$, $100 \to 0$, and $-1 \to 3$ (since $-1 = -4 + 3$), so $i^{-1} = i^3 = -i$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Questions here are usually 1–2 marks: simplify to $a + ib$, find an inverse, or use equality of complex numbers. Show the step where $i^2$ is replaced by $-1$, and leave the answer in the form $a + ib$ (write $-\frac{1}{5} + \frac{8}{5}i$, not a single fraction). A common slip is writing $\text{Im}\,z$ with the $i$ attached.`,
          },
          {
            type: "keypoints",
            items: [
              t`$i^2 = -1$; $z = a + ib$ with $\text{Re}\,z = a$, $\text{Im}\,z = b$ (both real).`,
              t`$a + ib = c + id$ gives two equations: $a = c$ and $b = d$.`,
              t`Powers of $i$ repeat with period 4; $i + i^2 + i^3 + i^4 = 0$.`,
              t`$\dfrac{1}{a + ib} = \dfrac{a - ib}{a^2 + b^2}$; divide by multiplying top and bottom by the conjugate of the denominator.`,
              t`$\sqrt{a}\sqrt{b} = \sqrt{ab}$ fails when both are negative; complex numbers have no order.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Value of $i^2$, $i^3$, $i^4$`, back: t`$-1$, $-i$, $1$` },
          { front: t`Real and imaginary parts of $4 - 7i$`, back: t`Re = 4, Im = $-7$ (the imaginary part is a real number)` },
          { front: "When are two complex numbers equal?", back: "When their real parts are equal and their imaginary parts are equal." },
          { front: t`Multiplicative inverse of $a + ib$`, back: t`$\dfrac{a - ib}{a^2 + b^2}$, for $a + ib \ne 0$` },
          { front: t`$(a + ib)(c + id)$`, back: t`$(ac - bd) + i(ad + bc)$` },
          { front: t`$\sqrt{-a}\,\sqrt{-b}$ for $a, b > 0$`, back: t`$i\sqrt{a} \cdot i\sqrt{b} = -\sqrt{ab}$` },
          { front: "Can we say 2 + i > 1 + i?", back: "No. Complex numbers (with non-zero imaginary part) cannot be ordered." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$i + i^2 + i^3 + i^4 = $`,
            options: ["0", "1", t`$i$`, t`$-1$`],
            answer: 0,
            explain: t`$i - 1 - i + 1 = 0$. Any four consecutive powers of $i$ add up to 0.`,
          },
          {
            kind: "numeric",
            q: t`If $(x + 2) + i(y - 3) = 5 + 4i$, where $x, y$ are real, find $x + y$.`,
            answer: 10,
            explain: t`Equate parts: $x + 2 = 5 \Rightarrow x = 3$; $y - 3 = 4 \Rightarrow y = 7$. So $x + y = 10$.`,
          },
          {
            kind: "mcq",
            q: t`The multiplicative inverse of $4 - 3i$ is`,
            options: [t`$\dfrac{4 + 3i}{25}$`, t`$\dfrac{4 + 3i}{7}$`, t`$\dfrac{4 - 3i}{25}$`, t`$-4 + 3i$`],
            answer: 0,
            explain: t`$\dfrac{1}{4 - 3i} = \dfrac{4 + 3i}{16 + 9} = \dfrac{4 + 3i}{25}$. The denominator is $a^2 + b^2$, not $a^2 - b^2$; $-4 + 3i$ is the additive inverse.`,
          },
          {
            kind: "truefalse",
            q: t`$3 + 2i > 1 + 2i$ because $3 > 1$.`,
            answer: false,
            explain: "The order relation > is not defined for complex numbers that are not real. We cannot compare them this way.",
          },
          {
            kind: "fill",
            q: t`For any integer $n$, $i^{4n + 3} = $ ___ .`,
            answer: ["-i", "−i", "- i"],
            explain: t`$i^{4n} = 1$, so $i^{4n + 3} = i^3 = -i$.`,
          },
          {
            kind: "mcq",
            q: t`$(1 + i)^4 = $`,
            options: [t`$-4$`, "4", t`$4i$`, t`$-4i$`],
            answer: 0,
            explain: t`$(1 + i)^2 = 2i$, so $(1 + i)^4 = (2i)^2 = 4i^2 = -4$.`,
            difficulty: 2,
            hint: t`Square once, then square again.`,
          },
          {
            kind: "numeric",
            q: t`Find the real part of $\dfrac{1}{1 - i}$.`,
            answer: 0.5,
            tolerance: 0.001,
            explain: t`$\dfrac{1}{1 - i} = \dfrac{1 + i}{1 + 1} = \dfrac{1}{2} + \dfrac{1}{2}i$. Real part $= 0.5$.`,
          },
        ],
      },
      {
        slug: "c11-modulus-polar",
        title: "Modulus, Conjugate, Argand Plane and Polar Form",
        summary: "The conjugate and modulus with their properties, plotting complex numbers on the Argand plane, the argument and the polar form.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "📍",
            caption: t`A complex number $x + iy$ needs two real numbers, just like a point $(x, y)$. So every complex number can be drawn as a point on a plane.`,
          },
          {
            type: "text",
            md: t`For $z = a + ib$, the **conjugate** is $\bar{z} = a - ib$ (change the sign of the imaginary part). The **modulus** is $|z| = \sqrt{a^2 + b^2}$, a non-negative real number. For $z = -3 + 4i$: $\bar{z} = -3 - 4i$ and $|z| = \sqrt{9 + 16} = 5$.

The key link between them: $z\bar{z} = (a + ib)(a - ib) = a^2 + b^2 = |z|^2$. This is why multiplying by the conjugate makes a denominator real.`,
          },
          {
            type: "table",
            headers: ["Property", "Result"],
            rows: [
              ["Product with conjugate", t`$z\bar{z} = |z|^2$`],
              ["Modulus of product / quotient", t`$|z_1z_2| = |z_1||z_2|$, $\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}$ ($z_2 \ne 0$)`],
              ["Conjugate of sum / product", t`$\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2$, $\overline{z_1z_2} = \bar{z}_1\bar{z}_2$`],
              ["Conjugate of quotient", t`$\overline{\left(\dfrac{z_1}{z_2}\right)} = \dfrac{\bar{z}_1}{\bar{z}_2}$ ($z_2 \ne 0$)`],
              ["Real and imaginary parts", t`$z + \bar{z} = 2\,\text{Re}\,z$, $z - \bar{z} = 2i\,\text{Im}\,z$`],
              ["Conjugate and modulus", t`$\bar{\bar{z}} = z$, $|\bar{z}| = |z|$`],
            ],
          },
          {
            type: "example",
            title: "Modulus and conjugate of a quotient",
            problem: t`Find the conjugate and the modulus of $z = \dfrac{2 - i}{(1 - 2i)^2}$.`,
            steps: [
              t`$(1 - 2i)^2 = 1 - 4i + 4i^2 = -3 - 4i$.`,
              t`$z = \dfrac{2 - i}{-3 - 4i} \times \dfrac{-3 + 4i}{-3 + 4i} = \dfrac{-6 + 8i + 3i - 4i^2}{9 + 16} = \dfrac{-2 + 11i}{25}$.`,
              t`Conjugate: $\bar{z} = -\dfrac{2}{25} - \dfrac{11}{25}i$.`,
              t`Modulus: $|z| = \dfrac{\sqrt{4 + 121}}{25} = \dfrac{\sqrt{125}}{25} = \dfrac{\sqrt{5}}{5}$.`,
              t`Check with the property: $|z| = \dfrac{|2 - i|}{|1 - 2i|^2} = \dfrac{\sqrt{5}}{5}$. ✓`,
            ],
            answer: t`$\bar{z} = -\dfrac{2}{25} - \dfrac{11}{25}i$, $|z| = \dfrac{1}{\sqrt{5}}$`,
          },
          {
            type: "text",
            md: t`**The Argand plane.** Take the $x$-axis as the **real axis** and the $y$-axis as the **imaginary axis**. The complex number $z = x + iy$ is the point $P(x, y)$. Then:

- $|z| = OP$, the distance of $P$ from the origin;
- $\bar{z}$ is the mirror image of $P$ in the real axis;
- $|z_1 - z_2|$ is the distance between the points $z_1$ and $z_2$.

Purely real numbers lie on the real axis and purely imaginary numbers on the imaginary axis.`,
          },
          {
            type: "text",
            md: t`**Polar form.** Let $OP = r$ make an angle $\theta$ with the positive real axis. Then $x = r\cos\theta$ and $y = r\sin\theta$. Here $r = |z|$ and $\theta$ is an **argument** of $z$, written $\arg z$. An argument is fixed only up to adding multiples of $2\pi$. The one value with $-\pi < \theta \le \pi$ is the **principal argument**. The number $0$ has no defined argument.`,
          },
          {
            type: "formula",
            tex: t`z = x + iy = r(\cos\theta + i\sin\theta),\qquad r = \sqrt{x^2 + y^2},\quad -\pi < \theta \le \pi`,
            caption: "Polar form of a non-zero complex number, with the principal argument.",
          },
          {
            type: "table",
            headers: ["Position of z", "Principal argument (α = tan⁻¹|y/x|, acute)"],
            rows: [
              ["Quadrant I (x > 0, y > 0)", t`$\theta = \alpha$`],
              ["Quadrant II (x < 0, y > 0)", t`$\theta = \pi - \alpha$`],
              ["Quadrant III (x < 0, y < 0)", t`$\theta = -(\pi - \alpha)$`],
              ["Quadrant IV (x > 0, y < 0)", t`$\theta = -\alpha$`],
              ["On the axes", t`positive real: $0$; negative real: $\pi$; positive imaginary: $\frac{\pi}{2}$; negative imaginary: $-\frac{\pi}{2}$`],
            ],
          },
          {
            type: "example",
            title: "Polar form of a point in Quadrant II",
            problem: t`Convert $z = -1 + i\sqrt{3}$ into polar form.`,
            steps: [
              t`$r = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{4} = 2$.`,
              t`Acute angle: $\alpha = \tan^{-1}\left|\dfrac{\sqrt{3}}{-1}\right| = \dfrac{\pi}{3}$.`,
              t`$x < 0$, $y > 0$: Quadrant II, so $\theta = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$.`,
            ],
            answer: t`$z = 2\left(\cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3}\right)$`,
          },
          {
            type: "example",
            title: "Simplify first, then convert",
            problem: t`Write $\dfrac{1 + 3i}{1 - 2i}$ in polar form.`,
            steps: [
              t`Multiply by $\dfrac{1 + 2i}{1 + 2i}$: $\dfrac{1 + 2i + 3i + 6i^2}{1 + 4} = \dfrac{-5 + 5i}{5} = -1 + i$.`,
              t`$r = \sqrt{1 + 1} = \sqrt{2}$; $\alpha = \tan^{-1} 1 = \dfrac{\pi}{4}$.`,
              t`Quadrant II, so $\theta = \pi - \dfrac{\pi}{4} = \dfrac{3\pi}{4}$.`,
            ],
            answer: t`$\sqrt{2}\left(\cos\dfrac{3\pi}{4} + i\sin\dfrac{3\pi}{4}\right)$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The principal argument of $-2 - 2i$ is`,
                options: [t`$\dfrac{\pi}{4}$`, t`$\dfrac{3\pi}{4}$`, t`$-\dfrac{3\pi}{4}$`, t`$\dfrac{5\pi}{4}$`],
                answer: 2,
                explain: t`The point is in Quadrant III and $\alpha = \frac{\pi}{4}$, so $\theta = -(\pi - \frac{\pi}{4}) = -\frac{3\pi}{4}$. $\frac{5\pi}{4}$ is an argument, but it is not in $(-\pi, \pi]$.`,
              },
              {
                kind: "numeric",
                q: t`Find $|3 + 4i|$.`,
                answer: 5,
                explain: t`$\sqrt{9 + 16} = 5$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\arg(-1 + i\sqrt{3}) = \tan^{-1}\left(\dfrac{\sqrt{3}}{-1}\right) = -\dfrac{\pi}{3}$.`,
            right: t`The point $(-1, \sqrt{3})$ is in Quadrant II, so the argument is $\pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$.`,
            why: t`$\tan^{-1}$ only gives angles between $-\frac{\pi}{2}$ and $\frac{\pi}{2}$, so it cannot tell $(-1, \sqrt{3})$ from $(1, -\sqrt{3})$. Always plot the point (or check the signs of $x$ and $y$) before writing the argument.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each number with its principal argument.",
              pairs: [
                [t`$1 + i$`, t`$\frac{\pi}{4}$`],
                [t`$-1 + i$`, t`$\frac{3\pi}{4}$`],
                [t`$-1 - i$`, t`$-\frac{3\pi}{4}$`],
                [t`$1 - i$`, t`$-\frac{\pi}{4}$`],
                [t`$-3$`, t`$\pi$`],
                [t`$2i$`, t`$\frac{\pi}{2}$`],
              ],
              explain: t`All four diagonal points have $\alpha = \frac{\pi}{4}$; only the quadrant changes the answer. A negative real number has argument $\pi$ (not $-\pi$, which is outside the principal range).`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Polar-form questions carry 2–4 marks: one mark each for $r$, the correct quadrant and the final form. Simplify a fraction to $x + iy$ before finding $r$ and $\theta$. Write the angle in the principal range unless the question allows any argument.

**Board note:** CBSE and Karnataka PUC follow the same NCERT sections. ISC also asks you to plot the number and to use $|z_1z_2| = |z_1||z_2|$ and $\arg(z_1z_2) = \arg z_1 + \arg z_2$ (see the Exam edge).`,
          },
          {
            type: "keypoints",
            items: [
              t`$\bar{z} = a - ib$, $|z| = \sqrt{a^2 + b^2}$, and $z\bar{z} = |z|^2$.`,
              t`$|z_1z_2| = |z_1||z_2|$; the conjugate of a sum, product or quotient is the sum, product or quotient of conjugates.`,
              t`On the Argand plane, $|z|$ is distance from $O$ and $|z_1 - z_2|$ is the distance between two points.`,
              t`Polar form: $z = r(\cos\theta + i\sin\theta)$ with $r = |z|$; principal argument in $(-\pi, \pi]$.`,
              "Find the quadrant first; tan⁻¹ alone gives the wrong angle in Quadrants II and III.",
            ],
          },
        ],
        flashcards: [
          { front: t`$z\bar{z}$ equals`, back: t`$|z|^2$, a non-negative real number` },
          { front: t`$|z_1 z_2|$ and $\left|\dfrac{z_1}{z_2}\right|$`, back: t`$|z_1||z_2|$ and $\dfrac{|z_1|}{|z_2|}$` },
          { front: "Geometric meaning of the conjugate", back: "Reflection of the point in the real axis." },
          { front: t`Geometric meaning of $|z_1 - z_2|$`, back: t`Distance between the points $z_1$ and $z_2$ on the Argand plane.` },
          { front: "Range of the principal argument", back: t`$-\pi < \theta \le \pi$` },
          { front: "Polar form of z", back: t`$r(\cos\theta + i\sin\theta)$ with $r = |z|$, $\theta = \arg z$` },
          { front: "Principal argument of a negative real number", back: t`$\pi$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $z = 3 - 2i$, then $z\bar{z} = $`,
            options: ["13", "5", "9 − 4i", t`$\sqrt{13}$`],
            answer: 0,
            explain: t`$z\bar{z} = |z|^2 = 9 + 4 = 13$. It is a real number, not $\sqrt{13}$ (that is $|z|$).`,
          },
          {
            kind: "numeric",
            q: t`Find $|(3 + 4i)(5 - 12i)|$.`,
            answer: 65,
            explain: t`$|3 + 4i| = 5$ and $|5 - 12i| = 13$; the modulus of a product is the product of moduli: $5 \times 13 = 65$.`,
          },
          {
            kind: "mcq",
            q: t`The conjugate of $\dfrac{1}{2 + i}$ is`,
            options: [t`$\dfrac{2 + i}{5}$`, t`$\dfrac{2 - i}{5}$`, t`$2 - i$`, t`$\dfrac{2 + i}{3}$`],
            answer: 0,
            explain: t`$\dfrac{1}{2 + i} = \dfrac{2 - i}{5}$, whose conjugate is $\dfrac{2 + i}{5}$.`,
          },
          {
            kind: "mcq",
            q: t`The principal argument of $-\sqrt{3} - i$ is`,
            options: [t`$-\dfrac{5\pi}{6}$`, t`$\dfrac{\pi}{6}$`, t`$\dfrac{7\pi}{6}$`, t`$-\dfrac{\pi}{6}$`],
            answer: 0,
            explain: t`$r = 2$, $\alpha = \tan^{-1}\frac{1}{\sqrt{3}} = \frac{\pi}{6}$, Quadrant III, so $\theta = -(\pi - \frac{\pi}{6}) = -\frac{5\pi}{6}$. $\frac{7\pi}{6}$ is the same direction but outside $(-\pi, \pi]$.`,
            difficulty: 2,
            hint: "Check the signs of the real and imaginary parts first.",
          },
          {
            kind: "truefalse",
            q: t`$|z_1 + z_2| = |z_1| + |z_2|$ for all complex numbers $z_1, z_2$.`,
            answer: false,
            explain: t`Take $z_1 = 1$, $z_2 = -1$: the left side is 0, the right side is 2. In general $|z_1 + z_2| \le |z_1| + |z_2|$.`,
          },
          {
            kind: "numeric",
            q: t`Find the distance between the points $1 + 2i$ and $4 - 2i$ on the Argand plane.`,
            answer: 5,
            explain: t`$|(4 - 2i) - (1 + 2i)| = |3 - 4i| = 5$.`,
          },
          {
            kind: "mcq",
            q: t`The polar form of $-4$ is`,
            options: [t`$4(\cos\pi + i\sin\pi)$`, t`$4(\cos 0 + i\sin 0)$`, t`$-4(\cos 0 + i\sin 0)$`, t`$4\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right)$`],
            answer: 0,
            explain: t`$r = 4$ and the point lies on the negative real axis, so $\theta = \pi$. $r$ must be positive, so $-4(\cos 0 + i\sin 0)$ is not a polar form.`,
          },
          {
            kind: "multi",
            q: t`Which statements are true for every complex number $z$?`,
            options: [t`$z + \bar{z}$ is real`, t`$z - \bar{z}$ is purely imaginary or zero`, t`$|\bar{z}| = |z|$`, t`$\bar{z} = z$`],
            answers: [0, 1, 2],
            explain: t`$z + \bar{z} = 2a$, $z - \bar{z} = 2ib$, and a reflection keeps distance from $O$. $\bar{z} = z$ only when $z$ is real.`,
          },
        ],
      },
      {
        slug: "c11-quadratic-complex-roots",
        title: "Quadratic Equations with Complex Roots",
        summary: "Solving ax² + bx + c = 0 when the discriminant is negative, conjugate roots, forming equations, and square roots of a complex number (ISC / JEE).",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: t`In Class 10 you stopped at "no real roots" when the discriminant $D = b^2 - 4ac$ was negative. Take $x^2 + x + 1 = 0$: $D = 1 - 4 = -3 < 0$. With $\sqrt{-3} = i\sqrt{3}$ available, the quadratic formula now goes all the way.`,
          },
          {
            type: "text",
            md: t`For $ax^2 + bx + c = 0$ with real $a, b, c$ and $a \ne 0$, if $D < 0$ the roots are

$x = \dfrac{-b \pm \sqrt{D}}{2a} = \dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}$.

The two roots are **conjugates** of each other. The **fundamental theorem of algebra** says that a polynomial equation of degree $n$ has $n$ roots in $\mathbb{C}$ (counting repeated roots). A quadratic therefore always has two roots.`,
          },
          {
            type: "formula",
            tex: t`D < 0:\qquad x = \frac{-b \pm i\sqrt{4ac - b^2}}{2a},\qquad \alpha + \beta = -\frac{b}{a},\quad \alpha\beta = \frac{c}{a}`,
            caption: "The sum and product of roots still follow from the coefficients when the roots are complex.",
          },
          {
            type: "example",
            title: "A monic quadratic",
            problem: t`Solve $x^2 + 3x + 9 = 0$.`,
            steps: [
              t`$D = 3^2 - 4(1)(9) = 9 - 36 = -27$.`,
              t`$\sqrt{-27} = i\sqrt{27} = 3\sqrt{3}\,i$.`,
              t`$x = \dfrac{-3 \pm 3\sqrt{3}\,i}{2}$.`,
            ],
            answer: t`$x = -\dfrac{3}{2} \pm \dfrac{3\sqrt{3}}{2}i$`,
          },
          {
            type: "example",
            title: "Surd coefficients",
            problem: t`Solve $\sqrt{3}x^2 - \sqrt{2}x + 3\sqrt{3} = 0$.`,
            steps: [
              t`$a = \sqrt{3}$, $b = -\sqrt{2}$, $c = 3\sqrt{3}$.`,
              t`$D = (\sqrt{2})^2 - 4(\sqrt{3})(3\sqrt{3}) = 2 - 36 = -34$.`,
              t`$x = \dfrac{\sqrt{2} \pm i\sqrt{34}}{2\sqrt{3}}$.`,
            ],
            answer: t`$x = \dfrac{\sqrt{2} \pm \sqrt{34}\,i}{2\sqrt{3}}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The roots of $x^2 + 4 = 0$ are`,
                options: [t`$\pm 2i$`, t`$\pm 2$`, t`$\pm 4i$`, "There are no roots"],
                answer: 0,
                explain: t`$x^2 = -4 \Rightarrow x = \pm\sqrt{-4} = \pm 2i$. There are no **real** roots, but there are two complex roots.`,
              },
              {
                kind: "truefalse",
                q: t`If a quadratic with real coefficients has $2 + 3i$ as a root, then $2 - 3i$ is also a root.`,
                answer: true,
                explain: t`With real coefficients, the roots $\frac{-b \pm i\sqrt{4ac - b^2}}{2a}$ are conjugates. So non-real roots always come in conjugate pairs.`,
              },
            ],
          },
          {
            type: "example",
            title: "Forming an equation from a complex root",
            problem: t`Find the quadratic equation with real coefficients, leading coefficient 1, having $3 - 2i$ as one root.`,
            steps: [
              t`Coefficients are real, so the other root is $3 + 2i$.`,
              t`Sum $= 6$; product $= (3 - 2i)(3 + 2i) = 9 + 4 = 13$.`,
              t`Equation: $x^2 - (\text{sum})x + \text{product} = 0$.`,
            ],
            answer: t`$x^2 - 6x + 13 = 0$`,
          },
          {
            type: "mistake",
            wrong: t`For $2x^2 + 3x + 5 = 0$, $D = -31$, so the equation has no solution (or the roots are $\frac{-3 \pm \sqrt{31}}{4}$).`,
            right: t`There are no **real** roots, but there are two complex roots: $x = \dfrac{-3 \pm i\sqrt{31}}{4}$.`,
            why: t`Class 10 habits say "no roots" when $D < 0$. In Class 11 the answer must be given in $\mathbb{C}$. Dropping the $i$ gives real numbers that do not satisfy the equation.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: square root of a complex number",
            md: t`The current rationalised NCERT book (CBSE, Karnataka PUC) does not include square roots of a complex number. **ISC** Class 11 and **JEE / KCET** still use it, so learn the method below.

To find $\sqrt{a + ib}$, put $(x + iy)^2 = a + ib$. Then $x^2 - y^2 = a$ and $2xy = b$. Also $x^2 + y^2 = |a + ib| = \sqrt{a^2 + b^2}$. Solve for $x^2$ and $y^2$, then choose signs so that $xy$ has the sign of $b$.`,
          },
          {
            type: "example",
            title: "Square roots of −8 − 6i (ISC / JEE)",
            problem: t`Find the square roots of $-8 - 6i$.`,
            steps: [
              t`Let $(x + iy)^2 = -8 - 6i$: $x^2 - y^2 = -8$ and $2xy = -6$.`,
              t`$x^2 + y^2 = \sqrt{64 + 36} = 10$.`,
              t`Adding: $2x^2 = 2 \Rightarrow x^2 = 1$; subtracting: $2y^2 = 18 \Rightarrow y^2 = 9$.`,
              t`$xy = -3 < 0$, so $x$ and $y$ have opposite signs: $(x, y) = (1, -3)$ or $(-1, 3)$.`,
              t`Check: $(1 - 3i)^2 = 1 - 6i + 9i^2 = -8 - 6i$. ✓`,
            ],
            answer: t`$\pm(1 - 3i)$`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for finding √(a + ib) in order.",
              items: [
                "Write (x + iy)² = a + ib",
                "Compare parts: x² − y² = a and 2xy = b",
                "Use x² + y² = |a + ib|",
                "Solve for x² and y²",
                "Fix the signs of x and y using the sign of b",
              ],
              explain: "The modulus equation turns the problem into two linear equations in x² and y². The sign of 2xy = b decides which sign pairs are allowed.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`A typical 2-mark question: solve a quadratic with $D < 0$. Marks go for $D$, for writing $\sqrt{D} = i\sqrt{|D|}$, and for the final roots. If the coefficients are fractions or surds, you may first multiply the equation through by a suitable number, but never divide by an expression that might be zero.`,
          },
          {
            type: "keypoints",
            items: [
              t`If $D < 0$: $x = \dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}$, a pair of conjugate complex roots.`,
              "A polynomial equation of degree n has n complex roots (fundamental theorem of algebra).",
              t`Sum $= -\frac{b}{a}$ and product $= \frac{c}{a}$ hold for complex roots too.`,
              t`To form the equation from a complex root (real coefficients), use the conjugate as the other root: $x^2 - (\text{sum})x + \text{product} = 0$.`,
              t`ISC / JEE: $\sqrt{a + ib}$ by solving $x^2 - y^2 = a$, $2xy = b$, $x^2 + y^2 = \sqrt{a^2 + b^2}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Roots of $ax^2 + bx + c = 0$ when $D < 0$`, back: t`$\dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}$` },
          { front: "Fundamental theorem of algebra (NCERT form)", back: "A polynomial equation of degree n has n roots in the complex numbers." },
          { front: "Non-real roots of a real quadratic come in…", back: "conjugate pairs: p + iq and p − iq" },
          { front: "Quadratic with roots α, β", back: t`$x^2 - (\alpha + \beta)x + \alpha\beta = 0$` },
          { front: t`Equation with roots $p \pm iq$`, back: t`$x^2 - 2px + (p^2 + q^2) = 0$` },
          { front: t`Square roots of $2i$`, back: t`$\pm(1 + i)$, since $(1 + i)^2 = 2i$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The roots of $x^2 - 2x + 5 = 0$ are`,
            options: [t`$1 \pm 2i$`, t`$-1 \pm 2i$`, t`$2 \pm i$`, t`$1 \pm 4i$`],
            answer: 0,
            explain: t`$D = 4 - 20 = -16$, $\sqrt{D} = 4i$, so $x = \frac{2 \pm 4i}{2} = 1 \pm 2i$.`,
          },
          {
            kind: "numeric",
            q: t`Find the product of the roots of $3x^2 + 2x + 7 = 0$ (to 2 decimal places).`,
            answer: 2.33,
            tolerance: 0.01,
            explain: t`Product $= \frac{c}{a} = \frac{7}{3} \approx 2.33$. The roots are complex, but the formula still holds.`,
          },
          {
            kind: "mcq",
            q: t`A quadratic with real coefficients and leading coefficient 1 has $1 + i$ as a root. The equation is`,
            options: [t`$x^2 - 2x + 2 = 0$`, t`$x^2 + 2x + 2 = 0$`, t`$x^2 - 2x = 0$`, t`$x^2 - x + 1 = 0$`],
            answer: 0,
            explain: t`The other root is $1 - i$. Sum $= 2$, product $= 1 + 1 = 2$, so $x^2 - 2x + 2 = 0$.`,
          },
          {
            kind: "truefalse",
            q: t`The equation $x^2 + 1 = 0$ has no roots.`,
            answer: false,
            explain: t`It has no real roots, but it has the two complex roots $\pm i$.`,
          },
          {
            kind: "mcq",
            q: t`The square roots of $2i$ are`,
            options: [t`$\pm(1 + i)$`, t`$\pm(1 - i)$`, t`$\pm\sqrt{2}\,i$`, t`$\pm 2i$`],
            answer: 0,
            explain: t`$(1 + i)^2 = 1 + 2i + i^2 = 2i$. Check $(1 - i)^2 = -2i$, which is wrong.`,
            difficulty: 2,
            hint: t`Square each option.`,
          },
          {
            kind: "numeric",
            q: t`If the roots of $x^2 + bx + 10 = 0$ are $3 \pm i$, find $b$.`,
            answer: -6,
            explain: t`Sum of roots $= 6 = -b$, so $b = -6$. Check: product $= 9 + 1 = 10$. ✓`,
          },
          {
            kind: "mcq",
            q: t`The roots of $2x^2 + x + 1 = 0$ are`,
            options: ["non-real complex conjugates", "real and distinct", "real and equal", "one real, one non-real"],
            answer: 0,
            explain: t`$D = 1 - 8 = -7 < 0$. With real coefficients, the roots are a pair of non-real conjugates; one real and one non-real root is impossible.`,
          },
        ],
      },
      {
        slug: "c11-complex-exam",
        title: "Exam edge: Complex Numbers",
        summary: "Cube roots of unity, the triangle inequality, arguments of products, and loci on the Argand plane, from KCET to JEE Advanced level.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What exams ask.** Complex numbers and quadratic equations together are one of the most regularly tested Class 11 chapters in **JEE Main** (usually at least one question per paper). **KCET** and **COMEDK** ask direct questions: powers of $i$, modulus, argument, cube roots of unity, square roots. **JEE Advanced** goes further into loci on the Argand plane, arguments and the geometry of $|z - z_0|$. Many of these results are beyond NCERT, so they are collected here.`,
          },
          {
            type: "formula",
            tex: t`\omega = \frac{-1 + i\sqrt{3}}{2},\quad \omega^2 = \frac{-1 - i\sqrt{3}}{2} = \bar{\omega},\qquad 1 + \omega + \omega^2 = 0,\quad \omega^3 = 1`,
            caption: t`The cube roots of unity are $1, \omega, \omega^2$ (roots of $x^3 = 1$). Use $\omega^{3k} = 1$ to cut down any power, and $1 + \omega = -\omega^2$, $1 + \omega^2 = -\omega$.`,
          },
          {
            type: "table",
            headers: ["Result", "Statement", "Safe to use when"],
            rows: [
              ["Triangle inequality", t`$\big||z_1| - |z_2|\big| \le |z_1 \pm z_2| \le |z_1| + |z_2|$`, "always; equality when the points are in line with O"],
              ["Argument of product", t`$\arg(z_1z_2) = \arg z_1 + \arg z_2 + 2k\pi$`, t`always, but add or subtract $2\pi$ to land in $(-\pi, \pi]$`],
              ["Argument of quotient", t`$\arg\frac{z_1}{z_2} = \arg z_1 - \arg z_2 + 2k\pi$`, t`$z_1, z_2 \ne 0$`],
              ["Circle", t`$|z - z_0| = r$`, t`centre $z_0$, radius $r > 0$`],
              ["Perpendicular bisector", t`$|z - z_1| = |z - z_2|$`, t`$z_1 \ne z_2$`],
              ["Real / imaginary test", t`$z$ real $\iff z = \bar{z}$; $z$ purely imaginary $\iff z = -\bar{z}$`, t`always (0 counts as both)`],
            ],
          },
          {
            type: "example",
            title: "KCET level: cube roots of unity",
            problem: t`Find the value of $(1 + \omega - \omega^2)^3$, where $\omega$ is a non-real cube root of unity.`,
            steps: [
              t`$1 + \omega = -\omega^2$, so $1 + \omega - \omega^2 = -2\omega^2$.`,
              t`$(-2\omega^2)^3 = -8\omega^6 = -8(\omega^3)^2 = -8$.`,
            ],
            answer: t`$-8$`,
          },
          {
            type: "example",
            title: "JEE Main: greatest and least modulus on a circle",
            problem: t`If $|z - 3 - 4i| = 2$, find the greatest and least values of $|z|$.`,
            steps: [
              t`The points $z$ lie on a circle with centre $C = 3 + 4i$ and radius 2.`,
              t`$|OC| = |3 + 4i| = 5$, and $O$ lies outside the circle since $5 > 2$.`,
              t`The farthest point is on line $OC$ beyond $C$: $5 + 2 = 7$. The nearest is $5 - 2 = 3$.`,
              t`(Same result from the triangle inequality: $\big||z - c| - |c|\big| \le |z| \le |z - c| + |c|$.)`,
            ],
            answer: t`Greatest $|z| = 7$, least $|z| = 3$.`,
          },
          {
            type: "example",
            title: "JEE Main: an equation with modulus",
            problem: t`Find the complex number $z$ that satisfies $|z| + z = 2 + i$.`,
            steps: [
              t`Let $z = x + iy$. Then $\sqrt{x^2 + y^2} + x + iy = 2 + i$.`,
              t`Imaginary parts: $y = 1$. Real parts: $\sqrt{x^2 + 1} = 2 - x$ (so we need $x \le 2$).`,
              t`Square: $x^2 + 1 = 4 - 4x + x^2 \Rightarrow x = \dfrac{3}{4}$, which satisfies $x \le 2$.`,
              t`Check: $|z| = \sqrt{\frac{9}{16} + 1} = \frac{5}{4}$ and $\frac{5}{4} + \frac{3}{4} = 2$. ✓`,
            ],
            answer: t`$z = \dfrac{3}{4} + i$`,
          },
          {
            type: "example",
            title: "JEE Advanced: a locus from a 'real' condition",
            problem: t`For $z \ne 1$, find the locus of $z$ if $\dfrac{z^2}{z - 1}$ is real.`,
            steps: [
              t`A number $w$ is real exactly when $w = \bar{w}$: $\dfrac{z^2}{z - 1} = \dfrac{\bar{z}^2}{\bar{z} - 1}$.`,
              t`Cross-multiply: $z^2\bar{z} - z^2 = \bar{z}^2 z - \bar{z}^2$, i.e. $z\bar{z}(z - \bar{z}) - (z - \bar{z})(z + \bar{z}) = 0$.`,
              t`Factor: $(z - \bar{z})\big(|z|^2 - (z + \bar{z})\big) = 0$.`,
              t`Either $z = \bar{z}$ ($z$ real, $z \ne 1$), or $x^2 + y^2 = 2x$, i.e. $(x - 1)^2 + y^2 = 1$. The point $z = 1$ is not on this circle, so nothing more is removed from it.`,
            ],
            answer: t`The real axis without the point 1, together with the circle with centre $(1, 0)$ and radius 1.`,
          },
          {
            type: "mistake",
            wrong: t`For principal values, $\arg(z_1z_2) = \arg z_1 + \arg z_2$ always.`,
            right: t`It holds only up to a multiple of $2\pi$. Take $z_1 = z_2 = -1$: each has principal argument $\pi$, the sum is $2\pi$, but $\arg(1) = 0$.`,
            why: "The principal range has length 2π, so adding two values can push the sum outside it. Adjust by ±2π at the end.",
          },
          {
            type: "mistake",
            wrong: t`$|z|^2 = z^2$, so $|1 + i|^2 = (1 + i)^2 = 2i$.`,
            right: t`$|z|^2 = z\bar{z}$, so $|1 + i|^2 = (1 + i)(1 - i) = 2$.`,
            why: t`For real numbers $|x|^2 = x^2$, and the habit carries over. For complex $z$, $z^2$ is usually not even real, while $|z|^2$ always is.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $\omega$ is a non-real cube root of unity, find $1 + \omega^{2025} + \omega^{4050}$.`,
                answer: 3,
                explain: t`2025 and 4050 are both multiples of 3, so each power is 1. The sum is $1 + 1 + 1 = 3$. (Compare: $1 + \omega^n + \omega^{2n} = 0$ when $n$ is **not** a multiple of 3.)`,
              },
              {
                kind: "mcq",
                q: t`The locus of $z$ with $|z - 1| = |z + 1|$ is`,
                options: ["the imaginary axis", "the real axis", "a circle of radius 1", "the line y = x"],
                answer: 0,
                explain: t`Points equidistant from $1$ and $-1$ lie on the perpendicular bisector of the segment joining them, which is the line $x = 0$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each condition on z with its locus.",
              pairs: [
                [t`$|z - 2| = 3$`, "circle, centre (2, 0), radius 3"],
                [t`$|z - 1| = |z - i|$`, "the line y = x"],
                [t`$\text{Re}\,z = 3$`, "the vertical line x = 3"],
                [t`$\arg z = \frac{\pi}{4}$`, "the ray y = x, x > 0 (origin excluded)"],
                [t`$|z - 1| + |z + 1| = 4$`, "ellipse with foci (±1, 0)"],
              ],
              explain: t`Read $|z - a|$ as "distance from $a$". An argument condition gives a ray, not a full line, because $\arg z$ fixes the direction from the origin.`,
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Speed strategy",
            md: t`For a locus, first try to read it geometrically (distances, angles). Only substitute $z = x + iy$ if no picture comes to mind. For "is real" or "is purely imaginary" conditions, the $w = \bar{w}$ or $w = -\bar{w}$ test is usually faster than expanding.`,
          },
          {
            type: "keypoints",
            items: [
              t`$1 + \omega + \omega^2 = 0$, $\omega^3 = 1$, $\bar{\omega} = \omega^2$; reduce powers modulo 3.`,
              t`Triangle inequality: $\big||z_1| - |z_2|\big| \le |z_1 + z_2| \le |z_1| + |z_2|$.`,
              t`$\arg(z_1z_2) = \arg z_1 + \arg z_2$ only up to $2\pi$.`,
              t`$|z - z_0| = r$ is a circle; $|z - z_1| = |z - z_2|$ is a perpendicular bisector; $\arg z = \theta$ is a ray.`,
              t`$|z|^2 = z\bar{z}$, never $z^2$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\omega$ (a cube root of unity) in $a + ib$ form`, back: t`$\dfrac{-1 + i\sqrt{3}}{2}$` },
          { front: t`$1 + \omega + \omega^2$`, back: "0" },
          { front: t`$1 + \omega^n + \omega^{2n}$`, back: "3 if n is a multiple of 3, otherwise 0" },
          { front: "Triangle inequality for complex numbers", back: t`$|z_1 + z_2| \le |z_1| + |z_2|$` },
          { front: t`Locus $|z - z_1| = |z - z_2|$`, back: t`Perpendicular bisector of the segment joining $z_1$ and $z_2$` },
          { front: t`Test for $z$ real`, back: t`$z = \bar{z}$` },
          { front: t`Greatest $|z|$ on $|z - c| = r$ (with $|c| > r$)`, back: t`$|c| + r$; least is $|c| - r$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$(1 + i)^8 = $`,
            options: ["16", t`$-16$`, t`$16i$`, "8"],
            answer: 0,
            explain: t`$(1 + i)^2 = 2i$, so $(1 + i)^8 = (2i)^4 = 16i^4 = 16$.`,
            difficulty: 1,
          },
          {
            kind: "numeric",
            q: t`If $z = \dfrac{\sqrt{3} + i}{2}$, find $z^6$.`,
            answer: -1,
            explain: t`$|z| = 1$ and $\arg z = \frac{\pi}{6}$. Multiplying adds arguments, so $z^6$ has modulus 1 and argument $\pi$: $z^6 = -1$. (Check: $z^2 = \frac{1 + i\sqrt{3}}{2}$, $z^3 = i$, $z^6 = i^2 = -1$.)`,
            difficulty: 2,
            hint: "Write z in polar form, or compute z³ first.",
          },
          {
            kind: "mcq",
            q: t`$(1 - \omega + \omega^2)(1 + \omega - \omega^2) = $`,
            options: ["4", "1", "0", t`$-4$`],
            answer: 0,
            explain: t`$1 + \omega^2 = -\omega$, so the first factor is $-2\omega$; $1 + \omega = -\omega^2$, so the second is $-2\omega^2$. Product $= 4\omega^3 = 4$.`,
            difficulty: 2,
            hint: t`Use $1 + \omega + \omega^2 = 0$ inside each bracket.`,
          },
          {
            kind: "numeric",
            q: t`If $|z - 6 - 8i| \le 4$, find the greatest value of $|z|$.`,
            answer: 14,
            explain: t`The region is a disc with centre $6 + 8i$ (distance 10 from $O$) and radius 4. Greatest $|z| = 10 + 4 = 14$.`,
            difficulty: 2,
            hint: "Distance from O to the centre, plus the radius.",
          },
          {
            kind: "multi",
            q: t`Which of these hold for all complex numbers $z_1, z_2$?`,
            options: [t`$|z_1 + z_2| \le |z_1| + |z_2|$`, t`$|z_1z_2| = |z_1||z_2|$`, t`$\text{Re}(z_1z_2) = \text{Re}\,z_1 \cdot \text{Re}\,z_2$`, t`$|z_1 - z_2| \ge |z_1| - |z_2|$`],
            answers: [0, 1, 3],
            explain: t`Options 1, 2 and 4 are standard. Option 3 fails: $z_1 = z_2 = i$ gives $\text{Re}(i^2) = -1$ but $0 \cdot 0 = 0$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`If $|z| = 1$ and $z \ne -1$, then $\dfrac{z - 1}{z + 1}$ is`,
            options: ["purely imaginary or zero", "always real and non-zero", "of modulus 1", "always equal to 0"],
            answer: 0,
            explain: t`Let $w = \frac{z - 1}{z + 1}$. Since $\bar{z} = \frac{1}{z}$, $\bar{w} = \frac{1/z - 1}{1/z + 1} = \frac{1 - z}{1 + z} = -w$. So $w$ is purely imaginary (it is 0 when $z = 1$). In polar form, $w = i\tan\frac{\theta}{2}$.`,
            difficulty: 3,
            hint: t`On the unit circle, $\bar{z} = \dfrac{1}{z}$.`,
          },
          {
            kind: "numeric",
            q: t`How many complex numbers $z$ satisfy $\bar{z} = z^2$?`,
            answer: 4,
            explain: t`Taking moduli: $|z| = |z|^2$, so $|z| = 0$ or $1$. $z = 0$ works. If $|z| = 1$ then $\bar{z} = \frac{1}{z}$, so $z^3 = 1$: three solutions $1, \omega, \omega^2$. Total 4.`,
            difficulty: 3,
            hint: "Take the modulus of both sides first.",
          },
          {
            kind: "mcq",
            q: t`The locus of $z$ with $|z - 2i| = |z + 2i|$ is`,
            options: ["the real axis", "the imaginary axis", "a circle of radius 2", "the line y = 2"],
            answer: 0,
            explain: t`Equidistant from $2i$ and $-2i$: the perpendicular bisector of the segment joining $(0, 2)$ and $(0, -2)$, which is $y = 0$.`,
            difficulty: 1,
          },
        ],
      },
      {
        slug: "c11-quadratic-exam",
        title: "Exam edge: Quadratic Equations — Nature, Relations and Location of Roots",
        summary: "Nature of roots from D, symmetric functions of roots, common roots, the least value of a quadratic, and conditions for where the roots lie.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What exams ask.** NCERT stops at solving the equation, but exams test the *theory* of quadratics: **KCET / COMEDK** ask for sums and products of roots, symmetric expressions and forming new equations. **JEE Main** adds common roots, nature of roots with a parameter and the range of a quadratic expression. **JEE Advanced** loves *location of roots*: for which values of a parameter the roots lie on one side of a number or inside an interval. These ideas return in inequalities, functions and calculus.

**Board note:** ISC Class 11 asks for nature of roots, sum and product of roots and forming equations. The NCERT Class 11 chapter (CBSE, Karnataka PUC) only solves equations with $D < 0$; nature of roots was covered in Class 10.`,
          },
          {
            type: "table",
            headers: ["For ax² + bx + c = 0 (a, b, c real, a ≠ 0)", "Nature of roots"],
            rows: [
              [t`$D > 0$`, "real and distinct"],
              [t`$D = 0$`, t`real and equal, each $-\frac{b}{2a}$`],
              [t`$D < 0$`, "non-real complex conjugates"],
              [t`$a, b, c$ rational and $D$ a perfect square (of a rational)`, "rational roots"],
              [t`$a, b, c$ rational and $D > 0$ not a perfect square`, t`irrational roots in pairs $p \pm \sqrt{q}$`],
            ],
          },
          {
            type: "formula",
            tex: t`\alpha + \beta = -\frac{b}{a},\quad \alpha\beta = \frac{c}{a},\quad \alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta,\quad |\alpha - \beta| = \frac{\sqrt{D}}{|a|},\quad \alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)`,
            caption: "Every symmetric expression in α and β can be written using α + β and αβ only. The formula for |α − β| needs real roots (D ≥ 0).",
          },
          {
            type: "example",
            title: "KCET level: symmetric functions",
            problem: t`If $\alpha, \beta$ are the roots of $x^2 - 5x + 3 = 0$, find $\alpha^2 + \beta^2$ and $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$.`,
            steps: [
              t`$\alpha + \beta = 5$, $\alpha\beta = 3$.`,
              t`$\alpha^2 + \beta^2 = 25 - 2(3) = 19$.`,
              t`$\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha + \beta}{\alpha\beta} = \dfrac{5}{3}$.`,
            ],
            answer: t`$19$ and $\dfrac{5}{3}$`,
          },
          {
            type: "example",
            title: "JEE Main: a common root",
            problem: t`Find $k \ne 2$ such that $x^2 + kx + 2 = 0$ and $x^2 + 2x + k = 0$ have a common root.`,
            steps: [
              t`Let $\alpha$ be the common root. Subtract the equations: $(k - 2)\alpha + (2 - k) = 0$.`,
              t`Since $k \ne 2$, divide by $k - 2$: $\alpha = 1$.`,
              t`Substitute in the first: $1 + k + 2 = 0 \Rightarrow k = -3$.`,
              t`Check in the second: $1 + 2 - 3 = 0$. ✓`,
            ],
            answer: t`$k = -3$ (common root $x = 1$)`,
          },
          {
            type: "text",
            md: t`**Location of roots.** Let $f(x) = ax^2 + bx + c$ with real roots $\alpha \le \beta$, and let $k$ be a real number. Think of the parabola: its vertex is at $x = -\frac{b}{2a}$ and $a\,f(k) > 0$ means $k$ lies **outside** the roots, while $a\,f(k) < 0$ means $k$ lies **strictly between** them. If $a < 0$, you can also multiply the equation by $-1$ first.`,
          },
          {
            type: "table",
            headers: ["Requirement", "Conditions (all must hold)"],
            rows: [
              [t`both roots $> k$`, t`$D \ge 0$, $a\,f(k) > 0$, $-\frac{b}{2a} > k$`],
              [t`both roots $< k$`, t`$D \ge 0$, $a\,f(k) > 0$, $-\frac{b}{2a} < k$`],
              [t`$k$ strictly between the roots`, t`$a\,f(k) < 0$ (this alone is enough)`],
              [t`both roots in $(k_1, k_2)$`, t`$D \ge 0$, $a\,f(k_1) > 0$, $a\,f(k_2) > 0$, $k_1 < -\frac{b}{2a} < k_2$`],
              [t`exactly one root in $(k_1, k_2)$`, t`$f(k_1)\,f(k_2) < 0$`],
            ],
          },
          {
            type: "example",
            title: "JEE Main: both roots inside an interval",
            problem: t`Find all real $m$ for which both roots of $x^2 - 2mx + m^2 - 1 = 0$ lie in $(-2, 4)$.`,
            steps: [
              t`$D = 4m^2 - 4(m^2 - 1) = 4 > 0$ for every $m$.`,
              t`$f(-2) = m^2 + 4m + 3 = (m + 1)(m + 3) > 0 \Rightarrow m < -3$ or $m > -1$.`,
              t`$f(4) = m^2 - 8m + 15 = (m - 3)(m - 5) > 0 \Rightarrow m < 3$ or $m > 5$.`,
              t`Vertex: $-2 < m < 4$.`,
              t`Common part: $-1 < m < 3$. (Check directly: the roots are $m \pm 1$, and $m - 1 > -2$, $m + 1 < 4$ give the same answer.)`,
            ],
            answer: t`$-1 < m < 3$`,
          },
          {
            type: "example",
            title: "JEE Advanced style: both roots less than a number",
            problem: t`Find all real $a$ for which both roots of $x^2 - 2ax + a^2 + a - 3 = 0$ are real and less than 3.`,
            steps: [
              t`$D = 4a^2 - 4(a^2 + a - 3) = 4(3 - a) \ge 0 \Rightarrow a \le 3$.`,
              t`$f(3) = 9 - 6a + a^2 + a - 3 = a^2 - 5a + 6 = (a - 2)(a - 3) > 0 \Rightarrow a < 2$ or $a > 3$.`,
              t`Vertex: $-\frac{b}{2a} = a < 3$.`,
              t`Intersect $a \le 3$, ($a < 2$ or $a > 3$) and $a < 3$: $a < 2$.`,
            ],
            answer: t`$a \in (-\infty, 2)$`,
          },
          {
            type: "mistake",
            wrong: t`For "both roots greater than $k$", it is enough to check $f(k) > 0$ and $-\frac{b}{2a} > k$.`,
            right: t`You must also check $D \ge 0$. Example: $x^2 - 4x + 5$ has $f(0) = 5 > 0$ and vertex at $2 > 0$, but its roots $2 \pm i$ are not real.`,
            why: t`$f(k) > 0$ is also true when the whole parabola is above the axis. The discriminant condition is the one that guarantees the parabola actually cuts the axis.`,
          },
          {
            type: "mistake",
            wrong: t`"$k$ lies between the roots" means $f(k) < 0$, whatever the sign of $a$.`,
            right: t`The condition is $a\,f(k) < 0$. If $a < 0$ the parabola opens downward, so $f(k) > 0$ between the roots.`,
            why: "The picture of an upward parabola is so familiar that the sign of a is forgotten. Multiplying by a covers both cases.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $\alpha, \beta$ are the roots of $2x^2 + 3x - 7 = 0$, find $\alpha\beta$.`,
                answer: -3.5,
                tolerance: 0.001,
                explain: t`$\alpha\beta = \frac{c}{a} = -\frac{7}{2} = -3.5$.`,
              },
              {
                kind: "mcq",
                q: t`$x^2 + px + 4 = 0$ has equal roots when`,
                options: [t`$p = \pm 4$`, t`$p = 4$ only`, t`$p = \pm 2$`, t`$p = 16$`],
                answer: 0,
                explain: t`$D = p^2 - 16 = 0 \Rightarrow p = \pm 4$. Both signs work.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "If c < 0 in x² + bx + c = 0, the roots are…",
              emoji: "🎯",
              options: ["both positive", "real, with opposite signs", "both negative", "possibly non-real"],
              answer: 1,
              trap: 3,
              explain: t`$D = b^2 - 4c > 0$ because $-4c > 0$, so the roots are real; their product $c < 0$ means one is positive and one is negative. Equivalently, $f(0) = c < 0$ puts $0$ between the roots.`,
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Least or greatest value",
            md: t`$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a}$. So if $a > 0$ the least value is $-\frac{D}{4a}$ at $x = -\frac{b}{2a}$; if $a < 0$ this is the greatest value. If $a > 0$ and $D < 0$, the expression is positive for **every** real $x$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Nature of roots from $D$; rational coefficients give irrational roots in pairs $p \pm \sqrt{q}$.`,
              t`Write any symmetric expression in terms of $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$.`,
              "Common root: subtract the equations to remove the x² term, then substitute back.",
              t`Location of roots: combine $D \ge 0$, the sign of $a\,f(k)$ and the position of the vertex $-\frac{b}{2a}$.`,
              t`Least value of $ax^2 + bx + c$ ($a > 0$) is $-\frac{D}{4a}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\alpha^2 + \beta^2$ in terms of sum and product`, back: t`$(\alpha + \beta)^2 - 2\alpha\beta$` },
          { front: t`$|\alpha - \beta|$ for $ax^2 + bx + c = 0$`, back: t`$\dfrac{\sqrt{D}}{|a|}$ (real roots)` },
          { front: "k lies strictly between the roots of ax² + bx + c = 0", back: t`$a\,f(k) < 0$` },
          { front: "Both roots greater than k", back: t`$D \ge 0$, $a\,f(k) > 0$, $-\frac{b}{2a} > k$` },
          { front: "Exactly one root in (k₁, k₂)", back: t`$f(k_1) f(k_2) < 0$` },
          { front: t`Least value of $ax^2 + bx + c$, $a > 0$`, back: t`$-\dfrac{D}{4a}$, at $x = -\dfrac{b}{2a}$` },
          { front: t`If $a + b + c = 0$, the roots of $ax^2 + bx + c = 0$ are`, back: t`$1$ and $\dfrac{c}{a}$` },
          { front: "Equation whose roots are reciprocals of the roots of ax² + bx + c = 0", back: t`$cx^2 + bx + a = 0$ ($c \ne 0$)` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $\alpha, \beta$ are the roots of $x^2 - 3x + 1 = 0$, then $\alpha^3 + \beta^3 = $`,
            options: ["18", "24", "27", "21"],
            answer: 0,
            explain: t`$(\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = 27 - 3(1)(3) = 18$.`,
            difficulty: 1,
          },
          {
            kind: "numeric",
            q: t`Find $|\alpha - \beta|$ for the roots of $x^2 - 7x + 10 = 0$.`,
            answer: 3,
            explain: t`$\frac{\sqrt{D}}{|a|} = \sqrt{49 - 40} = 3$. (The roots are 5 and 2.)`,
            difficulty: 1,
          },
          {
            kind: "mcq",
            q: t`$x^2 + kx + 9 = 0$ has real roots exactly when`,
            options: [t`$k \le -6$ or $k \ge 6$`, t`$-6 \le k \le 6$`, t`$k \ge 6$ only`, t`$k \ge 3$`],
            answer: 0,
            explain: t`$D = k^2 - 36 \ge 0 \Rightarrow |k| \ge 6$. Option 2 is where the roots are non-real (or equal at the ends).`,
            difficulty: 1,
          },
          {
            kind: "mcq",
            q: t`The equation whose roots are the reciprocals of the roots of $2x^2 - 5x + 3 = 0$ is`,
            options: [t`$3x^2 - 5x + 2 = 0$`, t`$2x^2 + 5x + 3 = 0$`, t`$3x^2 + 5x + 2 = 0$`, t`$2x^2 - 5x + 3 = 0$`],
            answer: 0,
            explain: t`Replace $x$ by $\frac{1}{x}$ and multiply by $x^2$: $2 - 5x + 3x^2 = 0$. (Check: roots of the original are $1, \frac{3}{2}$; reciprocals $1, \frac{2}{3}$ satisfy $3x^2 - 5x + 2 = 0$.)`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Find the least value of $x^2 - 6x + 13$ for real $x$.`,
            answer: 4,
            explain: t`$x^2 - 6x + 13 = (x - 3)^2 + 4$, least value 4 at $x = 3$. Or $-\frac{D}{4a} = -\frac{36 - 52}{4} = 4$.`,
            difficulty: 2,
            hint: "Complete the square.",
          },
          {
            kind: "mcq",
            q: t`For which real $k$ does 1 lie strictly between the roots of $x^2 - kx + k - 3 = 0$?`,
            options: ["every real k", "k > 3 only", "k < 1 only", "no real k"],
            answer: 0,
            explain: t`Here $a = 1$ and $f(1) = 1 - k + k - 3 = -2 < 0$ for every $k$. So 1 is always between the roots (and the roots are automatically real).`,
            difficulty: 3,
            hint: t`Work out $f(1)$; the condition is $a\,f(1) < 0$.`,
          },
          {
            kind: "numeric",
            q: t`Find the greatest integer $k$ for which both roots of $x^2 - 2kx + k^2 + k - 5 = 0$ are real and less than 5.`,
            answer: 3,
            explain: t`$D = 4(5 - k) \ge 0 \Rightarrow k \le 5$. $f(5) = k^2 - 9k + 20 = (k - 4)(k - 5) > 0 \Rightarrow k < 4$ or $k > 5$. Vertex $k < 5$. Together: $k < 4$, so the greatest integer is 3.`,
            difficulty: 3,
            hint: "Use D ≥ 0, f(5) > 0 and vertex < 5.",
          },
          {
            kind: "multi",
            q: t`For $ax^2 + bx + c = 0$ with real $a \ne 0$, $b$, $c$ and $a + b + c = 0$, which statements are always true?`,
            options: [t`$x = 1$ is a root`, "both roots are real", t`the product of the roots is $\frac{c}{a}$`, "the roots are always distinct"],
            answers: [0, 1, 2],
            explain: t`$f(1) = a + b + c = 0$, so 1 is a root; the other is $\frac{c}{a}$, which is real. The roots are equal when $c = a$ (e.g. $x^2 - 2x + 1 = 0$), so option 4 fails.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Complex Numbers and Quadratic Equations": "c11-complex-quadratic",
};
