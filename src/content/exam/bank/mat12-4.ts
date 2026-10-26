import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/*
 * Class 12 Maths — Vector Algebra, Three Dimensional Geometry, Linear Programming, Probability.
 * All questions are original, written in JEE Main / JEE Advanced / KCET / COMEDK style.
 * Note: Linear Programming is not in the JEE Main / Advanced syllabus, so those items are
 * tagged KCET / COMEDK only.
 */

const t = String.raw;

type DistOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
type Raw = DistOmit<ExamQuestion, "id" | "subject" | "chapter" | "grade">;

const BASIC: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN_NK: ExamId[] = ["JEE", "COMEDK"]; // topics outside the current KCET (rationalised NCERT) list
const ADV: ExamId[] = ["JEE", "JEE_ADV"];
const ADV_ONLY: ExamId[] = ["JEE_ADV"];
const STATE: ExamId[] = ["KCET", "COMEDK"];

function bank(no: string, chapter: string, items: Raw[]): ExamQuestion[] {
  return items.map(
    (it, i) =>
      ({
        ...it,
        id: `mat12-4-${no}-${String(i + 1).padStart(3, "0")}`,
        subject: "maths",
        chapter,
        grade: "12",
      }) as ExamQuestion,
  );
}

const AR_OPTIONS = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];
const S12_OPTIONS = [
  "Both Statement I and Statement II are true",
  "Statement I is true, Statement II is false",
  "Statement I is false, Statement II is true",
  "Both Statement I and Statement II are false",
];

/* ================================================================== */
/* Chapter 10 — Vector Algebra                                          */
/* ================================================================== */

const vectors: Raw[] = [
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 45,
    q: t`The magnitude of $\vec a = 2\hat i - 3\hat j + 6\hat k$ is:`,
    options: [t`$\sqrt5$`, t`$49$`, t`$7$`, t`$11$`],
    answer: 2,
    explain: t`$|\vec a| = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$. $\sqrt5$ comes from adding the components before squaring, $49$ forgets the square root, and $11$ adds the absolute values of the components.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 45,
    q: t`The unit vector in the direction of $\vec a = \hat i + 2\hat j - 2\hat k$ is:`,
    options: [
      t`$\frac{1}{9}(\hat i + 2\hat j - 2\hat k)$`,
      t`$\frac{1}{3}(\hat i + 2\hat j - 2\hat k)$`,
      t`$\frac{1}{\sqrt5}(\hat i + 2\hat j - 2\hat k)$`,
      t`$\frac{1}{3}(\hat i + 2\hat j + 2\hat k)$`,
    ],
    answer: 1,
    explain: t`$|\vec a| = \sqrt{1 + 4 + 4} = 3$, so $\hat a = \vec a/|\vec a| = \frac13(\hat i + 2\hat j - 2\hat k)$. Dividing by $9$ uses $|\vec a|^2$; $\sqrt5$ drops the $\hat k$ component from the magnitude; the last option changes the direction of the $\hat k$ component.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 50,
    q: t`The value of $\lambda$ for which $\vec a = 2\hat i + \lambda\hat j + \hat k$ and $\vec b = \hat i - 2\hat j + 3\hat k$ are perpendicular is:`,
    options: [t`$-\frac52$`, t`$\frac25$`, t`$\frac52$`, t`$\frac32$`],
    answer: 2,
    explain: t`Perpendicular means $\vec a\cdot\vec b = 0$: $2(1) + \lambda(-2) + 1(3) = 5 - 2\lambda = 0$, so $\lambda = \frac52$. The value $-\frac52$ comes from a sign slip in the $\hat j$ term.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 50,
    q: t`The scalar projection of $\vec a = 2\hat i + 3\hat j + 2\hat k$ on $\vec b = \hat i + 2\hat j + \hat k$ is:`,
    options: [t`$\frac{10}{\sqrt{17}}$`, t`$\frac{10}{\sqrt6}$`, t`$\frac{10}{6}$`, t`$10$`],
    answer: 1,
    explain: t`Projection of $\vec a$ on $\vec b$ $= \dfrac{\vec a\cdot\vec b}{|\vec b|}$. $\vec a\cdot\vec b = 2 + 6 + 2 = 10$ and $|\vec b| = \sqrt6$, giving $\frac{10}{\sqrt6}$. Dividing by $|\vec a| = \sqrt{17}$ gives the projection of $\vec b$ on $\vec a$ instead; dividing by $6$ uses $|\vec b|^2$.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 45,
    q: t`$P$ and $Q$ have position vectors $\vec a$ and $\vec b$. The position vector of the point $R$ dividing $PQ$ internally in the ratio $2:1$ is:`,
    options: [t`$\frac{2\vec a + \vec b}{3}$`, t`$\frac{\vec a + 2\vec b}{3}$`, t`$2\vec b - \vec a$`, t`$\frac{\vec a + \vec b}{2}$`],
    answer: 1,
    explain: t`For $PR:RQ = m:n$, $\vec r = \dfrac{m\vec b + n\vec a}{m + n}$. With $m:n = 2:1$, $\vec r = \dfrac{2\vec b + \vec a}{3}$. The common error attaches the ratio to the wrong end, giving $\frac{2\vec a + \vec b}{3}$ (that point is nearer $P$). $2\vec b - \vec a$ is the external division.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 40,
    q: t`If $|\vec a| = 2$, $|\vec b| = 3$ and $\vec a\cdot\vec b = 3$, the angle between $\vec a$ and $\vec b$ is:`,
    options: [t`$\frac{\pi}{6}$`, t`$\frac{\pi}{3}$`, t`$\frac{\pi}{2}$`, t`$\frac{2\pi}{3}$`],
    answer: 1,
    explain: t`$\cos\theta = \dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|} = \dfrac{3}{6} = \dfrac12$, so $\theta = \dfrac{\pi}{3}$. $\frac{\pi}{6}$ would need $\cos\theta = \frac{\sqrt3}{2}$.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 50,
    q: t`The value of $\hat i\cdot(\hat j\times\hat k) + \hat j\cdot(\hat k\times\hat i) + \hat k\cdot(\hat j\times\hat i)$ is:`,
    options: [t`$3$`, t`$0$`, t`$1$`, t`$-1$`],
    answer: 2,
    explain: t`$\hat j\times\hat k = \hat i$ and $\hat k\times\hat i = \hat j$ (cyclic order), so the first two terms are $1$ each. But $\hat j\times\hat i = -\hat k$ (anti-cyclic), so the third term is $-1$. Total $= 1 + 1 - 1 = 1$. Answering $3$ misses the reversed order in the last term.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 60,
    q: t`The area of the parallelogram whose adjacent sides are $\vec a = \hat i + \hat j - \hat k$ and $\vec b = \hat i - \hat j + \hat k$ is:`,
    options: [t`$\sqrt2$`, t`$2\sqrt2$`, t`$8$`, t`$4$`],
    answer: 1,
    explain: t`$\vec a\times\vec b = \begin{vmatrix}\hat i & \hat j & \hat k\\ 1 & 1 & -1\\ 1 & -1 & 1\end{vmatrix} = \hat i(1 - 1) - \hat j(1 + 1) + \hat k(-1 - 1) = -2\hat j - 2\hat k$. Area $= |\vec a\times\vec b| = \sqrt{8} = 2\sqrt2$. $\sqrt2$ is the area of the triangle on these sides (half), and $8$ forgets the square root.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 40,
    q: t`The vectors $\lambda\hat i + 6\hat j - 2\hat k$ and $2\hat i + 3\hat j - \hat k$ are collinear when $\lambda$ equals:`,
    options: [t`$2$`, t`$-4$`, t`$4$`, t`$1$`],
    answer: 2,
    explain: t`Collinear vectors have proportional components: $\dfrac{\lambda}{2} = \dfrac{6}{3} = \dfrac{-2}{-1} = 2$, so $\lambda = 4$.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 35,
    q: t`If $|\vec a| = 3$, $|\vec b| = 4$ and $\vec a\perp\vec b$, then $|\vec a + \vec b|$ equals:`,
    options: [t`$7$`, t`$1$`, t`$25$`, t`$5$`],
    answer: 3,
    explain: t`$|\vec a + \vec b|^2 = |\vec a|^2 + |\vec b|^2 + 2\vec a\cdot\vec b = 9 + 16 + 0 = 25$, so $|\vec a + \vec b| = 5$. $7$ would be true only if the vectors were in the same direction.`,
  },
  {
    kind: "numeric", difficulty: 1, exams: BASIC, idealTime: 30,
    q: t`For $\vec a = \hat i + 2\hat j + 3\hat k$ and $\vec b = 3\hat i - \hat j + 2\hat k$, find $\vec a\cdot\vec b$.`,
    answer: 7,
    explain: t`$\vec a\cdot\vec b = (1)(3) + (2)(-1) + (3)(2) = 3 - 2 + 6 = 7$.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 40,
    q: t`The direction cosines of the vector $2\hat i - \hat j + 2\hat k$ are:`,
    options: [
      t`$2, -1, 2$`,
      t`$\frac23, -\frac13, \frac23$`,
      t`$\frac{2}{\sqrt5}, -\frac{1}{\sqrt5}, \frac{2}{\sqrt5}$`,
      t`$\frac23, \frac13, \frac23$`,
    ],
    answer: 1,
    explain: t`Magnitude $= \sqrt{4 + 1 + 4} = 3$, so the direction cosines are $\frac23, -\frac13, \frac23$ (check: $\frac49 + \frac19 + \frac49 = 1$). $2, -1, 2$ are only direction ratios, and the sign of the middle cosine must stay negative.`,
  },

  /* ---- difficulty 2 ---- */
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`If $|\vec a| = 2$, $|\vec b| = 5$ and $|\vec a\times\vec b| = 8$, then $\vec a\cdot\vec b$ is:`,
    options: [t`$6$ only`, t`$\pm 6$`, t`$\pm 2$`, t`$\pm 10$`],
    answer: 1,
    hint: t`Use $|\vec a\times\vec b|^2 + (\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2$.`,
    explain: t`Lagrange's identity: $(\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2 - |\vec a\times\vec b|^2 = 100 - 64 = 36$, so $\vec a\cdot\vec b = \pm 6$. Both signs are possible because $\sin\theta = \frac{8}{10}$ is satisfied by an acute and an obtuse $\theta$ — so "$6$ only" is incomplete. $\pm10$ is $|\vec a||\vec b|$, the maximum possible value.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 90,
    q: t`$\vec a + \vec b + \vec c = \vec 0$ with $|\vec a| = 3$, $|\vec b| = 5$, $|\vec c| = 7$.<br>**Statement I:** The angle between $\vec a$ and $\vec b$ is $\frac{\pi}{3}$.<br>**Statement II:** $\vec a\cdot\vec b + \vec b\cdot\vec c + \vec c\cdot\vec a = \frac{83}{2}$.`,
    options: S12_OPTIONS,
    answer: 1,
    hint: t`Write $\vec c = -(\vec a + \vec b)$ and square; for II, square $\vec a + \vec b + \vec c = \vec 0$.`,
    explain: t`I: $|\vec c|^2 = |\vec a + \vec b|^2 \Rightarrow 49 = 9 + 25 + 2\vec a\cdot\vec b \Rightarrow \vec a\cdot\vec b = \frac{15}{2}$, so $\cos\theta = \frac{15/2}{15} = \frac12$ and $\theta = \frac{\pi}{3}$ — true. II: $0 = |\vec a + \vec b + \vec c|^2 = 9 + 25 + 49 + 2\sum\vec a\cdot\vec b$, so $\sum\vec a\cdot\vec b = -\frac{83}{2}$, not $+\frac{83}{2}$ — false.`,
  },
  {
    kind: "numeric", difficulty: 2, exams: MAIN_NK, idealTime: 75,
    q: t`Find the volume of the parallelepiped whose coterminous edges are $\vec a = \hat i + \hat j + \hat k$, $\vec b = \hat i - \hat j + \hat k$ and $\vec c = \hat i + 2\hat j - \hat k$.`,
    answer: 4,
    hint: t`Volume $= |[\vec a\ \vec b\ \vec c]|$.`,
    explain: t`$[\vec a\ \vec b\ \vec c] = \begin{vmatrix}1 & 1 & 1\\ 1 & -1 & 1\\ 1 & 2 & -1\end{vmatrix} = 1(1 - 2) - 1(-1 - 1) + 1(2 + 1) = -1 + 2 + 3 = 4$. Volume $= |4| = 4$ cubic units.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN_NK, idealTime: 70,
    q: t`The vectors $\hat i + \hat j + \hat k$, $2\hat i + 3\hat j + \lambda\hat k$ and $\hat i + 2\hat j + 3\hat k$ are coplanar when $\lambda$ equals:`,
    options: [t`$-4$`, t`$2$`, t`$3$`, t`$4$`],
    answer: 3,
    hint: t`Coplanar $\iff$ scalar triple product $= 0$.`,
    explain: t`$\begin{vmatrix}1 & 1 & 1\\ 2 & 3 & \lambda\\ 1 & 2 & 3\end{vmatrix} = 1(9 - 2\lambda) - 1(6 - \lambda) + 1(4 - 3) = 4 - \lambda$. Setting this to $0$ gives $\lambda = 4$.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`A unit vector perpendicular to both $\vec a = \hat i + \hat j$ and $\vec b = \hat j + \hat k$ is:`,
    options: [
      t`$\pm\frac{1}{\sqrt3}(\hat i + \hat j + \hat k)$`,
      t`$\pm\frac{1}{3}(\hat i - \hat j + \hat k)$`,
      t`$\pm\frac{1}{\sqrt3}(\hat i - \hat j + \hat k)$`,
      t`$\hat i - \hat j + \hat k$`,
    ],
    answer: 2,
    hint: t`Normalise $\vec a\times\vec b$.`,
    explain: t`$\vec a\times\vec b = \begin{vmatrix}\hat i & \hat j & \hat k\\ 1 & 1 & 0\\ 0 & 1 & 1\end{vmatrix} = \hat i(1) - \hat j(1) + \hat k(1) = \hat i - \hat j + \hat k$, of magnitude $\sqrt3$. The unit vectors are $\pm\frac{1}{\sqrt3}(\hat i - \hat j + \hat k)$. $\hat i - \hat j + \hat k$ itself is not a unit vector, and $\hat i + \hat j + \hat k$ is not perpendicular to $\vec a$ (dot product $2$).`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 70,
    q: t`$\hat a$ and $\hat b$ are unit vectors with $|\hat a + \hat b| = \sqrt3\,|\hat a - \hat b|$. The angle between them is:`,
    options: [t`$\frac{\pi}{6}$`, t`$\frac{\pi}{3}$`, t`$\frac{\pi}{2}$`, t`$\frac{2\pi}{3}$`],
    answer: 1,
    hint: t`Square both sides; for unit vectors $|\hat a\pm\hat b|^2 = 2 \pm 2\cos\theta$.`,
    explain: t`Squaring: $2 + 2\cos\theta = 3(2 - 2\cos\theta) \Rightarrow 8\cos\theta = 4 \Rightarrow \cos\theta = \frac12$, so $\theta = \frac{\pi}{3}$. Forgetting to square the $\sqrt3$ gives a wrong equation.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 75,
    q: t`For $\vec a = 2\hat i + \lambda\hat j + 3\hat k$ and $\vec b = 3\hat i + 2\hat j + 2\hat k$, the projection of $\vec a$ on $\vec b$ equals the projection of $\vec b$ on $\vec a$. Then $\lambda$ is:`,
    options: [t`$2$ only`, t`$-2$ only`, t`$\pm 2$`, t`$\pm 4$`],
    answer: 2,
    hint: t`$\frac{\vec a\cdot\vec b}{|\vec b|} = \frac{\vec a\cdot\vec b}{|\vec a|}$ with $\vec a\cdot\vec b\ne 0$ forces $|\vec a| = |\vec b|$.`,
    explain: t`Equal projections with $\vec a\cdot\vec b\ne0$ means $|\vec a| = |\vec b|$: $4 + \lambda^2 + 9 = 9 + 4 + 4 = 17 \Rightarrow \lambda^2 = 4 \Rightarrow \lambda = \pm2$. Check $\vec a\cdot\vec b = 12 + 2\lambda$, which is $16$ or $8$ — non-zero for both, so both values are valid.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 90,
    q: t`A vector along the internal bisector of the angle between $\vec b = \hat i - 2\hat j + 2\hat k$ and $\vec c = 3\hat i + 4\hat k$ is parallel to:`,
    options: [
      t`$2\hat i - \hat j + 3\hat k$`,
      t`$7\hat i - 5\hat j + 11\hat k$`,
      t`$2\hat i + 5\hat j + \hat k$`,
      t`$\hat i - 2\hat j + 2\hat k$`,
    ],
    answer: 1,
    hint: t`The internal bisector is along $\hat b + \hat c$ (unit vectors), not $\vec b + \vec c$.`,
    explain: t`$|\vec b| = 3$, $|\vec c| = 5$. $\hat b + \hat c = \frac{\hat i - 2\hat j + 2\hat k}{3} + \frac{3\hat i + 4\hat k}{5} = \frac{14\hat i - 10\hat j + 22\hat k}{15}\parallel 7\hat i - 5\hat j + 11\hat k$. Adding the vectors without normalising gives $4\hat i - 2\hat j + 6\hat k\parallel 2\hat i - \hat j + 3\hat k$ (wrong unless $|\vec b| = |\vec c|$); $\hat b - \hat c$ gives the external bisector $\parallel 2\hat i + 5\hat j + \hat k$.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 75,
    q: t`The area of the triangle with vertices $A(1, 1, 1)$, $B(1, 2, 3)$ and $C(2, 3, 1)$ is:`,
    options: [t`$\sqrt{21}$`, t`$\frac{\sqrt{21}}{2}$`, t`$\frac{21}{2}$`, t`$\frac{\sqrt{21}}{4}$`],
    answer: 1,
    hint: t`Area $= \frac12|\vec{AB}\times\vec{AC}|$.`,
    explain: t`$\vec{AB} = (0, 1, 2)$, $\vec{AC} = (1, 2, 0)$. $\vec{AB}\times\vec{AC} = \hat i(0 - 4) - \hat j(0 - 2) + \hat k(0 - 1) = (-4, 2, -1)$, magnitude $\sqrt{21}$. Area $= \frac{\sqrt{21}}{2}$. $\sqrt{21}$ is the parallelogram's area.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`If $\hat a$ and $\hat b$ are unit vectors inclined at an angle $\theta$, then $|\hat a - \hat b|$ equals:`,
    options: [t`$2\sin\frac{\theta}{2}$`, t`$2\cos\frac{\theta}{2}$`, t`$2\sin\theta$`, t`$\sin\frac{\theta}{2}$`],
    answer: 0,
    hint: t`Expand $|\hat a - \hat b|^2$ and use $1 - \cos\theta = 2\sin^2\frac{\theta}{2}$.`,
    explain: t`$|\hat a - \hat b|^2 = 1 + 1 - 2\cos\theta = 2(1 - \cos\theta) = 4\sin^2\frac{\theta}{2}$. Since $\theta\in[0, \pi]$, $\sin\frac{\theta}{2}\ge0$, so $|\hat a - \hat b| = 2\sin\frac{\theta}{2}$. $2\cos\frac{\theta}{2}$ is $|\hat a + \hat b|$.`,
  },
  {
    kind: "numeric", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`$|\vec a| = 2$, $|\vec b| = 3$ and the angle between $\vec a$ and $\vec b$ is $60^\circ$. Find $|2\vec a - 3\vec b|^2$.`,
    answer: 61,
    hint: t`$|2\vec a - 3\vec b|^2 = 4|\vec a|^2 + 9|\vec b|^2 - 12\,\vec a\cdot\vec b$.`,
    explain: t`$\vec a\cdot\vec b = 2\cdot3\cdot\frac12 = 3$. $|2\vec a - 3\vec b|^2 = 4(4) + 9(9) - 12(3) = 16 + 81 - 36 = 61$. A frequent slip is to use $-6\,\vec a\cdot\vec b$ instead of $-2\cdot2\cdot3\,\vec a\cdot\vec b = -12\,\vec a\cdot\vec b$.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 70,
    q: t`**Assertion (A):** If $\vec a\times\vec b = \vec a\times\vec c$ with $\vec a\ne\vec 0$, then $\vec b = \vec c$.<br>**Reason (R):** If $\vec a\times(\vec b - \vec c) = \vec 0$, then $\vec b - \vec c$ is parallel to $\vec a$ (or zero).`,
    options: AR_OPTIONS,
    answer: 3,
    hint: t`Cross products cannot be "cancelled".`,
    explain: t`R is true: a zero cross product means the vectors are parallel (or one is zero). That is exactly why A is false — $\vec a\times\vec b = \vec a\times\vec c$ only gives $\vec b - \vec c = \lambda\vec a$, i.e. $\vec c = \vec b + \lambda\vec a$. Example: $\vec a = \hat i$, $\vec b = \hat j$, $\vec c = \hat i + \hat j$ gives $\vec a\times\vec b = \vec a\times\vec c = \hat k$ but $\vec b\ne\vec c$.`,
  },
  {
    kind: "numeric", difficulty: 2, exams: MAIN_NK, idealTime: 60,
    q: t`If $[\vec a\ \vec b\ \vec c] = 3$, find $[\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a]$.`,
    answer: 6,
    hint: t`Expand by linearity; terms with a repeated vector vanish.`,
    explain: t`$(\vec a + \vec b)\cdot[(\vec b + \vec c)\times(\vec c + \vec a)]$. Expanding, $(\vec b + \vec c)\times(\vec c + \vec a) = \vec b\times\vec c + \vec b\times\vec a + \vec c\times\vec a$. Dotting with $\vec a + \vec b$ keeps only $\vec a\cdot(\vec b\times\vec c) + \vec b\cdot(\vec c\times\vec a) = 2[\vec a\ \vec b\ \vec c] = 6$; all other terms have a repeated vector and are $0$.`,
  },
  {
    kind: "mcq", difficulty: 1, exams: BASIC, idealTime: 60,
    q: t`Match List-I with List-II.<br>List-I: (P) $\hat i\times\hat j$ (Q) $\hat j\times\hat i$ (R) $\hat k\cdot\hat k$ (S) $\hat i\cdot(\hat i\times\hat j)$<br>List-II: (1) $0$ (2) $\hat k$ (3) $-\hat k$ (4) $1$`,
    options: [
      "P-2, Q-3, R-4, S-1",
      "P-3, Q-2, R-4, S-1",
      "P-2, Q-3, R-1, S-4",
      "P-2, Q-2, R-4, S-1",
    ],
    answer: 0,
    explain: t`$\hat i\times\hat j = \hat k$, $\hat j\times\hat i = -\hat k$, $\hat k\cdot\hat k = 1$, and $\hat i\cdot(\hat i\times\hat j) = \hat i\cdot\hat k = 0$. So P-2, Q-3, R-4, S-1. Remember the cross product is anti-commutative, so P and Q cannot have the same answer.`,
  },
  {
    kind: "numeric", difficulty: 2, exams: MAIN, idealTime: 75,
    q: t`$|\vec a| = 3$, $|\vec b| = 4$ and $|\vec a - \vec b| = \sqrt{13}$. Find $|\vec a\times\vec b|^2$.`,
    answer: 108,
    hint: t`Find $\vec a\cdot\vec b$ first, then use Lagrange's identity.`,
    explain: t`$13 = 9 + 16 - 2\vec a\cdot\vec b \Rightarrow \vec a\cdot\vec b = 6$. Then $|\vec a\times\vec b|^2 = |\vec a|^2|\vec b|^2 - (\vec a\cdot\vec b)^2 = 144 - 36 = 108$ (i.e. $|\vec a\times\vec b| = 6\sqrt3$, angle $60^\circ$).`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 90,
    q: t`For $\vec a = \hat i + \hat j + \hat k$, a vector $\vec b$ satisfies $\vec a\cdot\vec b = 5$ and $\vec a\times\vec b = \hat i - \hat k$. Then $\vec b$ is:`,
    options: [t`$\hat i + 2\hat j + 2\hat k$`, t`$2\hat i + 2\hat j + \hat k$`, t`$2\hat i + \hat j + 2\hat k$`, t`$\hat i + \hat j + 3\hat k$`],
    answer: 2,
    hint: t`Let $\vec b = (x, y, z)$ and compare components of $\vec a\times\vec b$.`,
    explain: t`$\vec a\times\vec b = (z - y,\ x - z,\ y - x) = (1, 0, -1)$, so $z = y + 1$ and $x = z = y + 1$. Then $x + y + z = 3y + 2 = 5 \Rightarrow y = 1$, giving $\vec b = 2\hat i + \hat j + 2\hat k$. Check: $\vec a\times\vec b = (1\cdot2 - 1\cdot1,\ 1\cdot2 - 1\cdot2,\ 1\cdot1 - 1\cdot2) = (1, 0, -1)$. The other options also have component sum 5 but fail the cross-product condition.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`In triangle $ABC$, $\vec{AB} = 2\hat i + 3\hat j + 6\hat k$ and $\vec{AC} = 4\hat i - \hat j + 2\hat k$. The length of the median through $A$ is:`,
    options: [t`$\sqrt{104}$`, t`$\sqrt{13}$`, t`$\sqrt{26}$`, t`$26$`],
    answer: 2,
    hint: t`The median vector is $\frac12(\vec{AB} + \vec{AC})$.`,
    explain: t`$\vec{AD} = \frac12(\vec{AB} + \vec{AC}) = \frac12(6\hat i + 2\hat j + 8\hat k) = 3\hat i + \hat j + 4\hat k$, so $AD = \sqrt{9 + 1 + 16} = \sqrt{26}$. $\sqrt{104}$ forgets to halve.`,
  },
  {
    kind: "mcq", difficulty: 2, exams: MAIN, idealTime: 60,
    q: t`Points $A$, $B$, $C$ have position vectors $\vec a$, $\vec b$, $\vec c$ with $2\vec a + 3\vec b - 5\vec c = \vec 0$. Then:`,
    options: [
      "A, B, C are collinear and C divides AB internally in the ratio 2 : 3",
      "A, B, C are collinear and C divides AB internally in the ratio 3 : 2",
      "A, B, C are not collinear",
      "A, B, C are collinear and C divides AB externally in the ratio 3 : 2",
    ],
    answer: 1,
    hint: t`Rewrite as $\vec c = \frac{3\vec b + 2\vec a}{3 + 2}$.`,
    explain: t`$\vec c = \dfrac{2\vec a + 3\vec b}{5} = \dfrac{3\vec b + 2\vec a}{3 + 2}$, which is the section formula with $AC:CB = 3:2$. So the points are collinear and $C$ divides $AB$ internally in $3:2$. The coefficient of $\vec b$ (3) goes with the part $AC$ — reading it the other way gives $2:3$.`,
  },
  {
    kind: "numeric", difficulty: 2, exams: MAIN_NK, idealTime: 75,
    q: t`Find the volume of the tetrahedron with vertices $O(0, 0, 0)$, $A(1, 2, 1)$, $B(2, 1, 3)$ and $C(-1, 1, 2)$.`,
    answer: 2,
    hint: t`Volume $= \frac16|[\vec{OA}\ \vec{OB}\ \vec{OC}]|$.`,
    explain: t`$\begin{vmatrix}1 & 2 & 1\\ 2 & 1 & 3\\ -1 & 1 & 2\end{vmatrix} = 1(2 - 3) - 2(4 + 3) + 1(2 + 1) = -1 - 14 + 3 = -12$. Volume $= \frac{12}{6} = 2$ cubic units. Forgetting the $\frac16$ gives the parallelepiped volume 12.`,
  },

  /* ---- difficulty 3 ---- */
  {
    kind: "multi", difficulty: 3, exams: ADV_ONLY, idealTime: 150,
    q: t`Let $\vec a = \hat i + \hat j$, $\vec b = \hat j + \hat k$, $\vec c = \hat k + \hat i$. Which of the following are correct?`,
    options: [
      t`$[\vec a\ \vec b\ \vec c] = 2$`,
      t`$\vec a\times(\vec b\times\vec c) = -\hat i + \hat j$`,
      t`$\vec a$, $\vec b$, $\vec c$ are coplanar`,
      t`The angle between $\vec a$ and $\vec b$ is $\frac{\pi}{3}$`,
    ],
    answers: [0, 1, 3],
    hint: t`Use $\vec a\times(\vec b\times\vec c) = (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c$.`,
    explain: t`(A) $\begin{vmatrix}1 & 1 & 0\\ 0 & 1 & 1\\ 1 & 0 & 1\end{vmatrix} = 1(1) - 1(0 - 1) + 0 = 2$ ✓. (B) $\vec a\cdot\vec c = 1$, $\vec a\cdot\vec b = 1$, so $\vec a\times(\vec b\times\vec c) = \vec b - \vec c = -\hat i + \hat j$ ✓. (C) The triple product is $2\ne0$, so they are not coplanar ✗. (D) $\cos\theta = \frac{1}{\sqrt2\sqrt2} = \frac12$, $\theta = \frac{\pi}{3}$ ✓.`,
  },
  {
    kind: "multi", difficulty: 3, exams: ADV_ONLY, idealTime: 120,
    q: t`For non-zero vectors $\vec a$ and $\vec b$, which of the following are always true?`,
    options: [
      t`$|\vec a + \vec b|^2 + |\vec a - \vec b|^2 = 2(|\vec a|^2 + |\vec b|^2)$`,
      t`$|\vec a\times\vec b| = |\vec a||\vec b| \Rightarrow \vec a\perp\vec b$`,
      t`$|\vec a + \vec b| = |\vec a| + |\vec b| \Rightarrow \vec a\perp\vec b$`,
      t`$(\vec a\times\vec b)\cdot\vec a = 0$`,
    ],
    answers: [0, 1, 3],
    hint: t`Expand each modulus squared; think about when equality holds in the triangle inequality.`,
    explain: t`(A) Adding $|\vec a\pm\vec b|^2 = |\vec a|^2 + |\vec b|^2\pm2\vec a\cdot\vec b$ cancels the dot terms ✓ (parallelogram law). (B) $|\vec a||\vec b|\sin\theta = |\vec a||\vec b| \Rightarrow \sin\theta = 1 \Rightarrow \theta = \frac{\pi}{2}$ ✓. (C) Squaring gives $\vec a\cdot\vec b = |\vec a||\vec b|$, i.e. $\theta = 0$ — same direction, not perpendicular ✗. (D) $\vec a\times\vec b$ is perpendicular to $\vec a$ ✓.`,
  },
  {
    kind: "multi", difficulty: 3, exams: ADV_ONLY, idealTime: 150,
    q: t`A vector $\vec c$ of magnitude $\sqrt6$ lies in the plane of $\vec a = \hat i + \hat j$ and $\vec b = \hat j + \hat k$ and is perpendicular to $\vec d = \hat i - \hat k$. Then $\vec c$ can be:`,
    options: [
      t`$\hat i + 2\hat j + \hat k$`,
      t`$-\hat i - 2\hat j - \hat k$`,
      t`$\hat i - 2\hat j + \hat k$`,
      t`$2\hat i + \hat j + 2\hat k$`,
    ],
    answers: [0, 1],
    hint: t`Write $\vec c = \alpha\vec a + \beta\vec b$.`,
    explain: t`$\vec c = \alpha\vec a + \beta\vec b = (\alpha, \alpha + \beta, \beta)$. $\vec c\cdot\vec d = \alpha - \beta = 0 \Rightarrow \vec c = \alpha(1, 2, 1)$, and $|\vec c| = \sqrt6|\alpha| = \sqrt6 \Rightarrow \alpha = \pm1$. So $\vec c = \pm(\hat i + 2\hat j + \hat k)$. Option C is not of the form $(\alpha, \alpha + \beta, \beta)$ with $\alpha = \beta$; option D is perpendicular to $\vec d$ but is not in the plane — $(2, 1, 2)$ would need $\alpha = \beta = 2$ and hence middle component $4$ — and its magnitude is $3$, not $\sqrt6$.`,
  },
  {
    kind: "multi", difficulty: 3, exams: ADV_ONLY, idealTime: 150,
    q: t`$\hat a$ and $\hat b$ are unit vectors inclined at angle $\theta\in[0, \pi]$. Which of the following are correct?`,
    options: [
      t`$|\hat a + \hat b| < 1 \iff \theta\in\left(\frac{2\pi}{3}, \pi\right]$`,
      t`$|\hat a - \hat b| = \sqrt2 \iff \theta = \frac{\pi}{2}$`,
      t`$|\hat a\times\hat b| = \hat a\cdot\hat b \iff \theta = \frac{\pi}{4}$`,
      t`$|\hat a + \hat b| = |\hat a - \hat b| \iff \theta = \frac{\pi}{3}$`,
    ],
    answers: [0, 1, 2],
    hint: t`$|\hat a\pm\hat b|^2 = 2\pm2\cos\theta$.`,
    explain: t`(A) $2 + 2\cos\theta < 1 \iff \cos\theta < -\frac12 \iff \theta\in(\frac{2\pi}{3}, \pi]$ ✓. (B) $2 - 2\cos\theta = 2 \iff \cos\theta = 0$ ✓. (C) $\sin\theta = \cos\theta$ on $[0, \pi]$ only at $\frac{\pi}{4}$ ✓. (D) Equal moduli give $\cos\theta = 0$, i.e. $\theta = \frac{\pi}{2}$, not $\frac{\pi}{3}$ ✗.`,
  },
  {
    kind: "mcq", difficulty: 3, exams: ADV, idealTime: 120,
    q: t`For any vectors $\vec a$, $\vec b$, the vector $\vec a\times(\vec a\times(\vec a\times\vec b))$ equals:`,
    options: [
      t`$|\vec a|^2(\vec a\times\vec b)$`,
      t`$-|\vec a|^2(\vec a\times\vec b)$`,
      t`$(\vec a\cdot\vec b)(\vec a\times\vec b)$`,
      t`$\vec 0$`,
    ],
    answer: 1,
    hint: t`Expand the inner $\vec a\times(\vec a\times\vec b)$ first.`,
    explain: t`$\vec a\times(\vec a\times\vec b) = (\vec a\cdot\vec b)\vec a - |\vec a|^2\vec b$. Crossing with $\vec a$: $(\vec a\cdot\vec b)(\vec a\times\vec a) - |\vec a|^2(\vec a\times\vec b) = -|\vec a|^2(\vec a\times\vec b)$, since $\vec a\times\vec a = \vec 0$. The sign is the usual trap.`,
  },
  {
    kind: "numeric", difficulty: 3, exams: ADV, idealTime: 90,
    q: t`If $[\vec a\ \vec b\ \vec c] = 4$, find $[\vec a\times\vec b\ \ \vec b\times\vec c\ \ \vec c\times\vec a]$.`,
    answer: 16,
    hint: t`Use $(\vec a\times\vec b)\times(\vec b\times\vec c) = [\vec a\ \vec b\ \vec c]\,\vec b$, then dot with the remaining factor.`,
    explain: t`$(\vec b\times\vec c)\times(\vec c\times\vec a) = [\vec b\ \vec c\ \vec a]\,\vec c = [\vec a\ \vec b\ \vec c]\,\vec c$ (expand $\vec u\times(\vec c\times\vec a)$ with $\vec u = \vec b\times\vec c$: $(\vec u\cdot\vec a)\vec c - (\vec u\cdot\vec c)\vec a$, and $\vec u\cdot\vec c = 0$). Then $(\vec a\times\vec b)\cdot[\vec a\ \vec b\ \vec c]\vec c = [\vec a\ \vec b\ \vec c]^2 = 16$.`,
  },
  {
    kind: "mcq", difficulty: 3, exams: ADV, idealTime: 120,
    q: t`Let $\vec a = \hat i + \hat j + \hat k$, $\vec b = 2\hat i - \hat k$ and $\vec c = \hat i - \hat j + \hat k$. The vector $\vec r$ with $\vec r\times\vec a = \vec b\times\vec a$ and $\vec r\cdot\vec c = 0$ is:`,
    options: [t`$3\hat i + \hat j$`, t`$\hat i + \hat j - 2\hat k$`, t`$2\hat i - \hat k$`, t`$\hat i - \hat j - 2\hat k$`],
    answer: 3,
    hint: t`$(\vec r - \vec b)\times\vec a = \vec 0 \Rightarrow \vec r = \vec b + \lambda\vec a$.`,
    explain: t`$\vec r = \vec b + \lambda\vec a = (2 + \lambda,\ \lambda,\ -1 + \lambda)$. $\vec r\cdot\vec c = (2 + \lambda) - \lambda + (-1 + \lambda) = 1 + \lambda = 0 \Rightarrow \lambda = -1$, so $\vec r = \hat i - \hat j - 2\hat k$. Choosing $\vec r = \vec b$ satisfies the first condition but $\vec b\cdot\vec c = 1\ne0$; $3\hat i + \hat j$ is $\lambda = +1$.`,
  },
  {
    kind: "mcq", difficulty: 3, exams: ADV, idealTime: 120,
    q: t`$\hat a$, $\hat b$, $\hat c$ are unit vectors. The maximum value of $|\hat a - \hat b|^2 + |\hat b - \hat c|^2 + |\hat c - \hat a|^2$ is:`,
    options: [t`$6$`, t`$9$`, t`$12$`, t`$3$`],
    answer: 1,
    hint: t`Express the sum through $\hat a\cdot\hat b + \hat b\cdot\hat c + \hat c\cdot\hat a$ and use $|\hat a + \hat b + \hat c|^2\ge0$.`,
    explain: t`The sum $= 6 - 2(\hat a\cdot\hat b + \hat b\cdot\hat c + \hat c\cdot\hat a)$. From $|\hat a + \hat b + \hat c|^2 = 3 + 2\sum\hat a\cdot\hat b\ge0$, $\sum\hat a\cdot\hat b\ge-\frac32$. Hence the sum $\le 6 + 3 = 9$, attained when $\hat a + \hat b + \hat c = \vec 0$ (three unit vectors at $120^\circ$). $12$ would need each pair opposite, which is impossible for three vectors.`,
  },
  {
    kind: "mcq", difficulty: 3, exams: ADV, idealTime: 120,
    q: t`$\hat a$, $\hat b$, $\hat c$ are unit vectors, $\hat b$ and $\hat c$ are not parallel, and $\hat a\times(\hat b\times\hat c) = \frac{\sqrt3}{2}\hat b$. The angles that $\hat a$ makes with $\hat b$ and with $\hat c$ are respectively:`,
    options: [
      t`$\frac{\pi}{2}$ and $\frac{\pi}{6}$`,
      t`$\frac{\pi}{6}$ and $\frac{\pi}{2}$`,
      t`$\frac{\pi}{3}$ and $\frac{\pi}{2}$`,
      t`$\frac{\pi}{2}$ and $\frac{\pi}{3}$`,
    ],
    answer: 0,
    hint: t`Expand and compare coefficients of the independent vectors $\hat b$ and $\hat c$.`,
    explain: t`$(\hat a\cdot\hat c)\hat b - (\hat a\cdot\hat b)\hat c = \frac{\sqrt3}{2}\hat b$. As $\hat b$, $\hat c$ are non-parallel, compare coefficients: $\hat a\cdot\hat c = \frac{\sqrt3}{2}$ and $\hat a\cdot\hat b = 0$. So $\hat a\perp\hat b$ (angle $\frac{\pi}{2}$) and the angle with $\hat c$ is $\frac{\pi}{6}$. Swapping which dot product goes with $\hat b$ gives option B.`,
  },
];
