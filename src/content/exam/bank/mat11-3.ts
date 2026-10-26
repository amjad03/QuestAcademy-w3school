import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Maths — Straight Lines, Conic Sections, Introduction to Three Dimensional Geometry.
 * Original exam-style questions (JEE Main / Advanced, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric); `answers` lists every correct index (multi).
 */

const t = String.raw;

type D = 1 | 2 | 3;
type Body = { q: string; explain: string; hint?: string } & (
  | { kind: "mcq"; options: string[]; answer: number }
  | { kind: "multi"; options: string[]; answers: number[] }
  | { kind: "numeric"; answer: number; tolerance?: number }
);

const CH: Record<number, string> = {
  9: "Straight Lines",
  10: "Conic Sections",
  11: "Introduction to Three Dimensional Geometry",
};

/** Builds the questions of one chapter, numbering ids mat11-3-<ch>-<n>. */
function chapter(ch: number) {
  let n = 0;
  return (difficulty: D, exams: ExamId[], idealTime: number, body: Body): ExamQuestion =>
    ({
      id: `mat11-3-${String(ch).padStart(2, "0")}-${String(++n).padStart(3, "0")}`,
      subject: "maths",
      chapter: CH[ch],
      grade: "11",
      exams,
      difficulty,
      idealTime,
      ...body,
    }) as ExamQuestion;
}

/** Board / KCET / COMEDK level and JEE Main level MCQs. */
const BASIC: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["JEE", "KCET", "COMEDK"];
/** JEE Main numerical-value items (KCET / COMEDK have no numericals). */
const NUM: ExamId[] = ["JEE"];
const NUM_ADV: ExamId[] = ["JEE", "JEE_ADV"];
const ADV: ExamId[] = ["JEE_ADV", "JEE"];
const ADV_ONLY: ExamId[] = ["JEE_ADV"];

const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];
const S12 = [
  "Both Statement I and Statement II are true",
  "Statement I is true but Statement II is false",
  "Statement I is false but Statement II is true",
  "Both Statement I and Statement II are false",
];

/* ================================================================== */
/* Chapter 9 — Straight Lines                                          */
/* ================================================================== */
const q9 = chapter(9);
const ch9: ExamQuestion[] = [
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The slope of the line joining $(2,-3)$ and $(-4,5)$ is:`,
    options: [t`$-\frac43$`, t`$\frac43$`, t`$-\frac34$`, t`$\frac34$`],
    answer: 0,
    explain: t`$m = \dfrac{y_2-y_1}{x_2-x_1} = \dfrac{5-(-3)}{-4-2} = \dfrac{8}{-6} = -\dfrac43$. Dropping the sign of the denominator gives $\frac43$; inverting the ratio ($\Delta x/\Delta y$) gives $-\frac34$.`,
  }),
  q9(1, BASIC, 45, {
    kind: "mcq",
    q: t`The equation of the line through $(1,2)$ inclined at $135^\circ$ to the positive $x$-axis is:`,
    options: [t`$x-y+1=0$`, t`$x+y-3=0$`, t`$x+y+3=0$`, t`$x-y-1=0$`],
    answer: 1,
    explain: t`Slope $= \tan135^\circ = -1$. Point–slope form: $y-2 = -1(x-1)$, i.e. $x+y-3 = 0$. Taking $\tan135^\circ = +1$ gives $x-y+1=0$, a common sign slip.`,
  }),
  q9(1, BASIC, 50, {
    kind: "mcq",
    q: t`The points $A(1,2)$, $B(3,k)$ and $C(5,8)$ are collinear. Then $k$ equals:`,
    options: [t`$4$`, t`$6$`, t`$5$`, t`$3$`],
    answer: 2,
    explain: t`Collinear points have equal slopes: slope $AB = \dfrac{k-2}{2}$ and slope $AC = \dfrac{8-2}{5-1} = \dfrac32$. So $k-2 = 3$, $k = 5$. (Equivalently, $B$ is the midpoint of $AC$ since its $x$-coordinate is the average of 1 and 5.)`,
  }),
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The sum of the intercepts cut off on the axes by the line $3x-4y+12=0$ is:`,
    options: [t`$1$`, t`$7$`, t`$-7$`, t`$-1$`],
    answer: 3,
    explain: t`Rewrite as $3x-4y = -12$, i.e. $\dfrac{x}{-4}+\dfrac{y}{3} = 1$. The intercepts are $-4$ and $3$, with sum $-1$. Treating both intercepts as positive gives 7; taking $4$ and $-3$ gives 1.`,
  }),
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The perpendicular distance of the point $(3,-2)$ from the line $4x+3y-1=0$ is:`,
    options: [t`$1$`, t`$\frac75$`, t`$5$`, t`$\frac{13}5$`],
    answer: 0,
    explain: t`$d = \dfrac{|4(3)+3(-2)-1|}{\sqrt{4^2+3^2}} = \dfrac{|12-6-1|}{5} = 1$. Using $+1$ for the constant gives $\frac75$; forgetting to divide by $\sqrt{a^2+b^2}$ gives 5.`,
  }),
  q9(1, BASIC, 50, {
    kind: "mcq",
    q: t`The distance between the parallel lines $3x+4y-7=0$ and $6x+8y+1=0$ is:`,
    options: [t`$\frac85$`, t`$\frac32$`, t`$\frac45$`, t`$\frac65$`],
    answer: 1,
    explain: t`First make the $x$, $y$ coefficients identical: $6x+8y+1=0$ is $3x+4y+\tfrac12=0$. Then $d = \dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}} = \dfrac{|-7-\frac12|}{5} = \dfrac{15/2}{5} = \dfrac32$. Using $|-7-1|/5 = \frac85$ without rescaling is the classic error.`,
  }),
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The acute angle between the lines $y = \sqrt3\,x+2$ and $\sqrt3\,y = x-5$ is:`,
    options: [t`$45^\circ$`, t`$60^\circ$`, t`$90^\circ$`, t`$30^\circ$`],
    answer: 3,
    explain: t`The slopes are $\sqrt3 = \tan60^\circ$ and $\frac1{\sqrt3} = \tan30^\circ$, so the lines are inclined at $60^\circ$ and $30^\circ$; the angle between them is $30^\circ$. Check: $\tan\theta = \left|\dfrac{\sqrt3-\frac1{\sqrt3}}{1+1}\right| = \dfrac1{\sqrt3}$.`,
  }),
  q9(1, BASIC, 45, {
    kind: "mcq",
    q: t`The equation of the line through $(1,4)$ perpendicular to $2x-3y+5=0$ is:`,
    options: [t`$3x+2y-11=0$`, t`$3x-2y+5=0$`, t`$2x-3y+10=0$`, t`$2x+3y-14=0$`],
    answer: 0,
    explain: t`A line perpendicular to $ax+by+c=0$ has the form $bx-ay+k=0$, here $3x+2y+k=0$. Through $(1,4)$: $3+8+k = 0\Rightarrow k=-11$. Option $2x-3y+10=0$ is the parallel line through $(1,4)$.`,
  }),
  q9(1, BASIC, 45, {
    kind: "mcq",
    q: t`The equation of the line whose perpendicular distance from the origin is 4 units and whose normal makes an angle of $30^\circ$ with the positive $x$-axis is:`,
    options: [t`$x+\sqrt3\,y = 8$`, t`$\sqrt3\,x+y = 4$`, t`$\sqrt3\,x+y = 8$`, t`$x+\sqrt3\,y = 4$`],
    answer: 2,
    explain: t`Normal form: $x\cos\omega+y\sin\omega = p$, so $\dfrac{\sqrt3}2x+\dfrac12y = 4$, i.e. $\sqrt3\,x+y = 8$. Swapping $\cos$ and $\sin$ gives $x+\sqrt3 y = 8$; forgetting to clear the halves gives $\sqrt3 x+y = 4$.`,
  }),
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The line cutting off intercepts $3$ on the $x$-axis and $-2$ on the $y$-axis is:`,
    options: [t`$3x-2y=6$`, t`$2x+3y=6$`, t`$2x-3y=6$`, t`$3x+2y=6$`],
    answer: 2,
    explain: t`Intercept form: $\dfrac x3+\dfrac{y}{-2} = 1$. Multiply by 6: $2x-3y = 6$. Check: $y=0\Rightarrow x=3$ and $x=0\Rightarrow y=-2$. $3x-2y=6$ has intercepts 2 and $-3$ (swapped).`,
  }),
  q9(1, BASIC, 40, {
    kind: "mcq",
    q: t`The point dividing the join of $A(1,-2)$ and $B(4,7)$ internally in the ratio $1:2$ is:`,
    options: [t`$(3,4)$`, t`$(2,1)$`, t`$\left(\frac52,\frac52\right)$`, t`$(-2,-11)$`],
    answer: 1,
    explain: t`$P = \left(\dfrac{1\cdot4+2\cdot1}{3},\ \dfrac{1\cdot7+2\cdot(-2)}{3}\right) = (2,1)$. In $m:n = 1:2$ the point is nearer to $A$. $(3,4)$ divides in $2:1$ (weights swapped), $\left(\frac52,\frac52\right)$ is the midpoint, and $(-2,-11)$ divides externally.`,
  }),
  q9(1, BASIC, 50, {
    kind: "mcq",
    q: t`The area of the triangle with vertices $(1,2)$, $(-3,4)$ and $(2,-1)$ is:`,
    options: [t`$10$`, t`$4$`, t`$5$`, t`$9$`],
    answer: 2,
    explain: t`$\Delta = \frac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right| = \frac12\left|1(5)+(-3)(-3)+2(-2)\right| = \frac12|5+9-4| = 5$. Forgetting the $\frac12$ gives 10; a sign slip in the middle term gives $\frac12|5-9-4| = 4$.`,
  }),
  q9(1, BASIC, 35, {
    kind: "mcq",
    q: t`The slope and $y$-intercept of the line $2x+5y-10=0$ are respectively:`,
    options: [t`$-\frac25,\ 2$`, t`$\frac25,\ 2$`, t`$-\frac52,\ 2$`, t`$-\frac25,\ -2$`],
    answer: 0,
    explain: t`Solve for $y$: $5y = -2x+10$, so $y = -\frac25x+2$. Slope $m = -\frac ab = -\frac25$, $y$-intercept $= 2$.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`The foot of the perpendicular from $(1,2)$ to the line $x+y-7=0$ is:`,
    options: [t`$(5,6)$`, t`$(4,3)$`, t`$(3,4)$`, t`$(2,5)$`],
    answer: 2,
    hint: t`Use $\dfrac{x-x_1}a = \dfrac{y-y_1}b = -\dfrac{ax_1+by_1+c}{a^2+b^2}$.`,
    explain: t`$\dfrac{x-1}1 = \dfrac{y-2}1 = -\dfrac{1+2-7}{2} = 2$, so the foot is $(3,4)$, which lies on the line ($3+4=7$). $(5,6)$ is the image (the factor $-2(\dots)/(a^2+b^2)$ = 4). $(4,3)$ lies on the line but $(4-1,3-2) = (3,1)$ is not along the normal $(1,1)$.`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`The image of the point $(2,-1)$ in the line $x-2y+1=0$ is:`,
    options: [t`$(1,1)$`, t`$(4,-5)$`, t`$(3,-3)$`, t`$(0,3)$`],
    answer: 3,
    hint: t`For the image the common ratio is $-2(ax_1+by_1+c)/(a^2+b^2)$.`,
    explain: t`$\dfrac{x-2}{1} = \dfrac{y+1}{-2} = -\dfrac{2(2+2+1)}{5} = -2$, giving $x = 0$, $y = 3$. Check: the midpoint $(1,1)$ lies on the line ($1-2+1=0$) and the join $(-2,4)$ is parallel to the normal $(1,-2)$. $(1,1)$ is only the foot; $(4,-5)$ comes from dropping the minus sign.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`The points on the $x$-axis at a distance 3 units from the line $3x+4y-6=0$ are:`,
    options: [t`$(3,0)$ and $(-7,0)$`, t`$(7,0)$ and $(-3,0)$`, t`$(5,0)$ and $(-5,0)$`, t`$(7,0)$ and $(3,0)$`],
    answer: 1,
    explain: t`For $(a,0)$: $\dfrac{|3a-6|}{5} = 3\Rightarrow 3a-6 = \pm15\Rightarrow a = 7$ or $a = -3$. Missing the $\pm$ gives only one point; $(3,0)$, $(-7,0)$ solve $|3a+6| = 15$ (sign of the constant flipped).`,
  }),
  q9(2, MAIN, 50, {
    kind: "mcq",
    q: t`The lines $2x+y-3=0$, $3x-y-2=0$ and $kx+2y-5=0$ are concurrent. Then $k$ equals:`,
    options: [t`$-3$`, t`$5$`, t`$3$`, t`$1$`],
    answer: 2,
    explain: t`Adding the first two: $5x-5 = 0$, so $x = 1$ and then $y = 1$. The third line must pass through $(1,1)$: $k+2-5 = 0\Rightarrow k = 3$.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`The line through the point of intersection of $x+2y-5=0$ and $3x-y-1=0$ and parallel to $2x+3y=0$ is:`,
    options: [t`$2x+3y-8=0$`, t`$2x+3y-7=0$`, t`$3x-2y+1=0$`, t`$2x+3y+8=0$`],
    answer: 0,
    explain: t`From $3x-y-1=0$, $y = 3x-1$; then $x+6x-2-5 = 0$ gives $x = 1$, $y = 2$. A parallel line is $2x+3y = k$ with $k = 2+6 = 8$. $3x-2y+1=0$ is the perpendicular through $(1,2)$.`,
  }),
  q9(2, NUM, 50, {
    kind: "numeric",
    q: t`Find the area (in square units) of the triangle formed by the line $3x+4y=24$ and the coordinate axes.`,
    answer: 24,
    hint: "Find both intercepts.",
    explain: t`The intercepts are $x = 8$ and $y = 6$. The triangle is right-angled at the origin with legs 8 and 6, so its area is $\frac12\cdot8\cdot6 = 24$.`,
  }),
  q9(2, NUM, 50, {
    kind: "numeric",
    q: t`Find the distance between the parallel lines $5x-12y+3=0$ and $10x-24y-20=0$.`,
    answer: 1,
    hint: "Divide the second equation by 2 first.",
    explain: t`$10x-24y-20=0$ is $5x-12y-10=0$. Then $d = \dfrac{|3-(-10)|}{\sqrt{25+144}} = \dfrac{13}{13} = 1$.`,
  }),
  q9(2, MAIN, 50, {
    kind: "mcq",
    q: t`The locus of a point that is equidistant from $A(1,2)$ and $B(3,4)$ is:`,
    options: [t`$x-y+1=0$`, t`$x+y-7=0$`, t`$x+y-5=0$`, t`$x-y-1=0$`],
    answer: 2,
    hint: "It is the perpendicular bisector of AB.",
    explain: t`$(x-1)^2+(y-2)^2 = (x-3)^2+(y-4)^2\Rightarrow -2x-4y+5 = -6x-8y+25\Rightarrow 4x+4y = 20$, i.e. $x+y-5 = 0$. It passes through the midpoint $(2,3)$ with slope $-1$, perpendicular to $AB$ (slope 1). $x-y+1=0$ is the line $AB$ itself.`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`Statement I: The lines $2x+3y=5$ and $6x+9y=7$ are parallel.<br>Statement II: The distance between these two lines is $\dfrac{2}{\sqrt{13}}$.`,
    options: S12,
    answer: 1,
    hint: "Rescale one equation before using the distance formula.",
    explain: t`Statement I: the slopes are both $-\frac23$ and the lines are distinct, so they are parallel — true. Statement II: $6x+9y=7$ is $2x+3y = \frac73$, so $d = \dfrac{|5-\frac73|}{\sqrt{13}} = \dfrac{8}{3\sqrt{13}}$, not $\dfrac{2}{\sqrt{13}}$ (that value comes from $|5-7|$ without rescaling) — false.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`Assertion (A): The lines $x+2y=3$, $2x+4y=7$ and $x-y=1$ form a triangle.<br>Reason (R): Three lines form a triangle if and only if no two of them are parallel and the three are not concurrent.`,
    options: AR,
    answer: 3,
    explain: t`$x+2y=3$ and $2x+4y=7$ both have slope $-\frac12$ and are distinct, so they are parallel and can never meet — the three lines bound no triangle, and A is false. R is the correct criterion (two parallel lines leave the region unbounded; three concurrent lines meet at a single point), so R is true.`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`A line makes an angle of $45^\circ$ with the line of slope 2. The possible slopes of the line are:`,
    options: [t`$3$ or $-\frac13$`, t`$-3$ or $\frac13$`, t`$1$ or $-1$`, t`$-3$ or $-\frac13$`],
    answer: 1,
    hint: t`Solve $\left|\dfrac{m-2}{1+2m}\right| = 1$.`,
    explain: t`$\dfrac{m-2}{1+2m} = 1\Rightarrow m-2 = 1+2m\Rightarrow m = -3$; $\dfrac{m-2}{1+2m} = -1\Rightarrow m-2 = -1-2m\Rightarrow m = \frac13$. Check $m = -3$: $\left|\frac{-5}{-5}\right| = 1$ ✓. The values $3,-\frac13$ come from writing $1-2m$ in the denominator.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`A line passes through $P(3,4)$ and the segment of it intercepted between the axes is bisected at $P$. Its equation is:`,
    options: [t`$3x+4y=25$`, t`$4x+3y=12$`, t`$3x+4y=24$`, t`$4x+3y=24$`],
    answer: 3,
    explain: t`If the intercepts are $(a,0)$ and $(0,b)$, the midpoint is $\left(\frac a2,\frac b2\right) = (3,4)$, so $a = 6$, $b = 8$: $\dfrac x6+\dfrac y8 = 1\Rightarrow 4x+3y = 24$. $3x+4y=24$ swaps the intercepts (it does not even pass through $(3,4)$); $3x+4y=25$ is the line through $P$ perpendicular to $OP$.`,
  }),
  q9(2, MAIN, 50, {
    kind: "mcq",
    q: t`The line through $(-2,3)$ whose intercepts on the axes are equal in magnitude but opposite in sign is:`,
    options: [t`$x+y-1=0$`, t`$x-y-5=0$`, t`$x-y+5=0$`, t`$x+y+1=0$`],
    answer: 2,
    explain: t`Intercepts $a$ and $-a$: $\dfrac xa+\dfrac{y}{-a} = 1$, i.e. $x-y = a$. Through $(-2,3)$: $a = -5$, so $x-y+5 = 0$ (intercepts $-5$ and $5$). $x+y-1=0$ is the equal-intercept line through the same point.`,
  }),
  q9(2, NUM, 60, {
    kind: "numeric",
    q: t`Find the perpendicular distance of the origin from the line $\dfrac x6+\dfrac y8 = 1$.`,
    answer: 4.8,
    tolerance: 0.01,
    explain: t`The line is $4x+3y-24 = 0$, so $d = \dfrac{24}{\sqrt{16+9}} = \dfrac{24}5 = 4.8$. (In general $p = \dfrac{ab}{\sqrt{a^2+b^2}} = \dfrac{48}{10}$.)`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`Match each line in List-I with its inclination in List-II. List-I: (P) $x-y+1=0$ (Q) $\sqrt3\,x+y=2$ (R) $x=5$ (S) $y=-2$. List-II: (1) $90^\circ$ (2) $0^\circ$ (3) $45^\circ$ (4) $120^\circ$.`,
    options: [
      "P-3, Q-4, R-2, S-1",
      "P-4, Q-3, R-1, S-2",
      "P-3, Q-4, R-1, S-2",
      "P-1, Q-4, R-3, S-2",
    ],
    answer: 2,
    explain: t`(P) slope 1 → $45^\circ$ (3). (Q) $y = -\sqrt3x+2$, slope $-\sqrt3 = \tan120^\circ$ → (4) (not $60^\circ$: the slope is negative). (R) $x = 5$ is vertical → $90^\circ$ (1). (S) $y = -2$ is horizontal → $0^\circ$ (2).`,
  }),
  q9(2, NUM, 80, {
    kind: "numeric",
    q: t`The points $(1,k)$, $(k,3)$ and $(3,5)$ are collinear. Find the sum of all real values of $k$.`,
    answer: 8,
    hint: "Set the area determinant to zero.",
    explain: t`$1(3-5)+k(5-k)+3(k-3) = 0\Rightarrow -2+5k-k^2+3k-9 = 0\Rightarrow k^2-8k+11 = 0$. Its discriminant $64-44 = 20>0$, so both roots $k = 4\pm\sqrt5$ are real and their sum is 8.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`The line $(2k+1)x+(k-3)y+4 = 0$ is perpendicular to $3x-y+2=0$. Then $k$ equals:`,
    options: [t`$\frac65$`, t`$0$`, t`$\frac67$`, t`$-\frac65$`],
    answer: 3,
    explain: t`$a_1x+b_1y+c_1=0$ and $a_2x+b_2y+c_2=0$ are perpendicular when $a_1a_2+b_1b_2 = 0$: $3(2k+1)+(-1)(k-3) = 5k+6 = 0$, so $k = -\frac65$. Forgetting the minus sign of $b_2$ gives $7k = 0$, i.e. $k = 0$.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`For every real $\lambda$, the line $(1+2\lambda)x+(1-\lambda)y-3 = 0$ passes through the fixed point:`,
    options: [t`$(2,1)$`, t`$(1,2)$`, t`$(-1,2)$`, t`$(1,-2)$`],
    answer: 1,
    hint: t`Collect the terms in $\lambda$.`,
    explain: t`Rewrite as $(x+y-3)+\lambda(2x-y) = 0$. This holds for all $\lambda$ exactly when $x+y = 3$ and $2x = y$, giving $(1,2)$. Check $(2,1)$: $2+4\lambda+1-\lambda-3 = 3\lambda\ne0$.`,
  }),
  q9(2, NUM, 50, {
    kind: "numeric",
    q: t`Find the area (in square units) of the triangle bounded by the lines $y = x$, $y = -x$ and $y = 4$.`,
    answer: 16,
    explain: t`The vertices are $(0,0)$, $(4,4)$ and $(-4,4)$. Base (on $y=4$) $= 8$, height $= 4$, area $= \frac12\cdot8\cdot4 = 16$.`,
  }),
  q9(2, MAIN, 80, {
    kind: "mcq",
    q: t`A ray of light from $A(1,2)$ is reflected at a point $P$ on the $x$-axis and then passes through $B(5,3)$. The point $P$ is:`,
    options: [t`$(3,0)$`, t`$\left(\frac{13}5,0\right)$`, t`$\left(\frac{17}5,0\right)$`, t`$\left(\frac{11}5,0\right)$`],
    answer: 1,
    hint: "Reflect A in the mirror; the reflected ray points away from the image.",
    explain: t`The image of $A$ in the $x$-axis is $A'(1,-2)$, and $A'$, $P$, $B$ are collinear. Line $A'B$: slope $\frac{5}{4}$, so $y+2 = \frac54(x-1)$; at $y = 0$, $x = 1+\frac85 = \frac{13}5$. Check: angle of incidence $\tan^{-1}\frac{2}{8/5}$ equals $\tan^{-1}\frac{3}{12/5}$ ✓ (both $\frac54$). $(3,0)$ is just the midpoint of the $x$-coordinates.`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`The incentre of the triangle with vertices $O(0,0)$, $A(6,0)$ and $B(0,8)$ is:`,
    options: [t`$(3,4)$`, t`$(2,2)$`, t`$\left(2,\frac83\right)$`, t`$(4,3)$`],
    answer: 1,
    hint: t`Weights are the lengths of the opposite sides.`,
    explain: t`Opposite sides: $a = AB = 10$ (opposite $O$), $b = OB = 8$ (opposite $A$), $c = OA = 6$ (opposite $B$). $I = \dfrac{10(0,0)+8(6,0)+6(0,8)}{24} = (2,2)$. Also $r = \frac{\Delta}{s} = \frac{24}{12} = 2$ and the incircle touches both axes, confirming $(2,2)$. $(3,4)$ is the circumcentre and $\left(2,\frac83\right)$ the centroid.`,
  }),
  q9(2, MAIN, 60, {
    kind: "mcq",
    q: t`The point $(\alpha,\alpha^2)$ and the origin lie on opposite sides of the line $x+y-2=0$. Then $\alpha$ lies in:`,
    options: [t`$(-2,1)$`, t`$(-\infty,-1)\cup(2,\infty)$`, t`$(-1,2)$`, t`$(-\infty,-2)\cup(1,\infty)$`],
    answer: 3,
    explain: t`At the origin $x+y-2 = -2<0$, so we need $\alpha+\alpha^2-2>0$, i.e. $(\alpha+2)(\alpha-1)>0$: $\alpha<-2$ or $\alpha>1$. $(-2,1)$ is the same-side condition; the other intervals come from factorising as $(\alpha-2)(\alpha+1)$.`,
  }),
  q9(2, MAIN, 70, {
    kind: "mcq",
    q: t`The lines through $A(3,2)$ making an angle of $45^\circ$ with the line $x-2y=3$ are:`,
    options: [
      t`$3x-y-7=0$ and $x+3y-9=0$`,
      t`$x-3y+3=0$ and $3x+y-11=0$`,
      t`$3x+y-11=0$ and $x+3y-9=0$`,
      t`$x-y-1=0$ and $x+y-5=0$`,
    ],
    answer: 0,
    hint: t`The given line has slope $\frac12$.`,
    explain: t`$\left|\dfrac{m-\frac12}{1+\frac m2}\right| = 1$ gives $m-\frac12 = 1+\frac m2\Rightarrow m = 3$, or $m-\frac12 = -1-\frac m2\Rightarrow m = -\frac13$. Lines: $y-2 = 3(x-3)$, i.e. $3x-y-7=0$, and $y-2 = -\frac13(x-3)$, i.e. $x+3y-9=0$. The last option makes $45^\circ$ with the $x$-axis, not with the given line.`,
  }),
  q9(3, ADV, 120, {
    kind: "mcq",
    q: t`The bisector of the angle between the lines $3x-4y+7=0$ and $12x+5y-2=0$ that contains the origin is:`,
    options: [t`$21x+77y-101=0$`, t`$11x+3y-9=0$`, t`$11x-3y+9=0$`, t`$21x-77y+101=0$`],
    answer: 2,
    hint: "Make both constant terms positive, then take the + sign.",
    explain: t`Write the lines with positive constants: $3x-4y+7=0$ and $-12x-5y+2=0$. The origin-containing bisector is $\dfrac{3x-4y+7}{5} = +\dfrac{-12x-5y+2}{13}$: $39x-52y+91 = -60x-25y+10\Rightarrow 99x-27y+81 = 0\Rightarrow 11x-3y+9 = 0$. Check: at the origin both expressions are positive, so it lies in this angle. The minus sign gives the other bisector $21x+77y-101=0$.`,
  }),
  q9(3, ADV, 110, {
    kind: "mcq",
    q: t`The distance of the point $(2,5)$ from the line $3x+y+4=0$, measured along a line of slope $\frac34$, is:`,
    options: [t`$\frac{3\sqrt{10}}2$`, t`$3$`, t`$5$`, t`$\frac{15}4$`],
    answer: 2,
    hint: t`Use the parametric form $(2+r\cos\theta,\ 5+r\sin\theta)$ with $\cos\theta = \frac45$, $\sin\theta = \frac35$.`,
    explain: t`A point at distance $r$ along the direction is $\left(2+\frac{4r}5,\ 5+\frac{3r}5\right)$. Substituting: $6+\frac{12r}5+5+\frac{3r}5+4 = 0\Rightarrow 15+3r = 0\Rightarrow r = -5$, so the distance is $5$. The perpendicular distance $\frac{15}{\sqrt{10}} = \frac{3\sqrt{10}}2$ is the shortest one — not the one asked for.`,
  }),
  q9(3, NUM_ADV, 150, {
    kind: "numeric",
    q: t`How many straight lines pass through $(1,1)$ and form with the coordinate axes a triangle of area 2 square units?`,
    answer: 3,
    hint: t`With intercepts $a, b$: $\frac1a+\frac1b = 1$ and $|ab| = 4$.`,
    explain: t`Line $\frac xa+\frac yb = 1$ through $(1,1)$: $a+b = ab$. Area $\frac12|ab| = 2\Rightarrow ab = \pm4$. If $ab = 4$: $a+b = 4$, so $a = b = 2$ — one line, $x+y = 2$. If $ab = -4$: $a+b = -4$, and $t^2+4t-4 = 0$ has two distinct real roots — two lines. Total $3$. (Students who assume positive intercepts find only 1.)`,
  }),
  q9(3, ADV_ONLY, 150, {
    kind: "multi",
    q: t`For the triangle formed by the lines $y = x$, $y = -x$ and $x = 3$, which of the following are correct?`,
    options: [
      t`Its orthocentre is $(0,0)$`,
      t`Its circumcentre is $(3,0)$`,
      t`Its centroid is $(1,0)$`,
      t`Its incentre is $(6-3\sqrt2,\ 0)$`,
    ],
    answers: [0, 1, 3],
    hint: "Two of the sides are perpendicular.",
    explain: t`Vertices: $O(0,0)$, $A(3,3)$, $B(3,-3)$. $y=x$ and $y=-x$ are perpendicular, so the right angle is at $O$: orthocentre $O$ ✓; circumcentre = midpoint of hypotenuse $AB$ = $(3,0)$ ✓. Centroid $=\left(\frac{0+3+3}3,0\right) = (2,0)$, not $(1,0)$ ✗. Incentre: $a = AB = 6$, $b = OB = 3\sqrt2$, $c = OA = 3\sqrt2$; $x = \dfrac{6\cdot0+3\sqrt2\cdot3+3\sqrt2\cdot3}{6+6\sqrt2} = \dfrac{3\sqrt2}{1+\sqrt2} = 3\sqrt2(\sqrt2-1) = 6-3\sqrt2$ ✓ (also $r = \frac{\Delta}{s} = \frac{9}{3+3\sqrt2}$ is consistent).`,
  }),
  q9(3, ADV_ONLY, 120, {
    kind: "multi",
    q: t`For the line $3x+4y = 12$, which of the following are correct?`,
    options: [
      t`Its intercepts on the $x$- and $y$-axes are 4 and 3`,
      t`Its distance from the origin is $\frac{12}7$`,
      t`Its slope is $\frac34$`,
      t`The foot of the perpendicular from the origin to it is $\left(\frac{36}{25},\frac{48}{25}\right)$`,
    ],
    answers: [0, 3],
    explain: t`(a) $\frac x4+\frac y3 = 1$ ✓. (b) $p = \frac{12}{\sqrt{9+16}} = \frac{12}5$ ✗ ($\frac{12}7$ divides by $3+4$). (c) Slope $= -\frac34$ ✗. (d) Normal form $\frac35x+\frac45y = \frac{12}5$, so the foot is $p(\cos\omega,\sin\omega) = \frac{12}5\left(\frac35,\frac45\right) = \left(\frac{36}{25},\frac{48}{25}\right)$ ✓ (check: $\frac{108+192}{25} = 12$).`,
  }),
  q9(3, NUM_ADV, 150, {
    kind: "numeric",
    q: t`$A(1,0)$ and $B(2,0)$ are given, and $P$ moves on the line $x+y = 4$. Find the least value of $(PA+PB)^2$.`,
    answer: 13,
    hint: "A and B are on the same side of the line, so reflect one of them.",
    explain: t`Both points give $x+y-4<0$, so they are on the same side. Image of $A$ in $x+y-4=0$: $\frac{x-1}1 = \frac{y-0}1 = -\frac{2(1+0-4)}2 = 3$, i.e. $A'(4,3)$. Then $PA+PB = PA'+PB\ge A'B = \sqrt{(4-2)^2+3^2} = \sqrt{13}$, with equality where $A'B$ meets the line, at $\left(\frac{14}5,\frac65\right)$. So the minimum of $(PA+PB)^2$ is $13$.`,
  }),
  q9(3, ADV, 120, {
    kind: "mcq",
    q: t`The area of the parallelogram formed by the lines $y = 2x+1$, $y = 2x+5$, $y = -x+2$ and $y = -x+8$ is:`,
    options: [t`$24$`, t`$16$`, t`$8$`, t`$6$`],
    answer: 2,
    hint: t`Area $= \left|\dfrac{(c_1-c_2)(d_1-d_2)}{m_1-m_2}\right|$.`,
    explain: t`$\left|\dfrac{(1-5)(2-8)}{2-(-1)}\right| = \dfrac{24}{3} = 8$. Check with vertices $(\frac13,\frac53)$, $(\frac73,\frac{17}3)$, $(1,7)$, $(-1,3)$: edge vectors from $(\frac13,\frac53)$ are $(2,4)$ and $(-\frac43,\frac43)$, and $|2\cdot\frac43-4\cdot(-\frac43)| = 8$. Forgetting to divide by $|m_1-m_2|$ gives 24.`,
  }),
  q9(3, ADV, 120, {
    kind: "mcq",
    q: t`A variable line through $(2,3)$ meets the coordinate axes at $A$ and $B$. The locus of the midpoint of $AB$ is:`,
    options: [t`$2x+3y = 2xy$`, t`$3x+2y = 2xy$`, t`$3x+2y = xy$`, t`$2x+3y = xy$`],
    answer: 1,
    hint: t`If the midpoint is $(h,k)$, the intercepts are $2h$ and $2k$.`,
    explain: t`Line $\frac x{2h}+\frac y{2k} = 1$ through $(2,3)$: $\frac1h+\frac3{2k} = 1\Rightarrow 2k+3h = 2hk$. Replacing $(h,k)$ by $(x,y)$: $3x+2y = 2xy$. Check with the line $x+y = 5$: midpoint $\left(\frac52,\frac52\right)$ gives $\frac{25}2 = \frac{25}2$ ✓. Using the intercepts as $h, k$ (forgetting the factor 2) gives $3x+2y = xy$.`,
  }),
  q9(3, ADV_ONLY, 120, {
    kind: "multi",
    q: t`Let $A(2,3)$ and $B(6,-1)$. Which of the following are correct?`,
    options: [
      t`The perpendicular bisector of $AB$ is $x-y-3=0$`,
      t`The point $(5,1)$ is equidistant from $A$ and $B$`,
      t`The image of $A$ in the line $x-y-3=0$ is $B$`,
      t`$AB = 4$`,
    ],
    answers: [0, 2],
    explain: t`Midpoint $(4,1)$, slope of $AB = \frac{-4}{4} = -1$, so the bisector has slope 1: $y-1 = x-4$, i.e. $x-y-3 = 0$ ✓. $(5,1)$: $5-1-3 = 1\ne0$, so it is not on the bisector ✗ (indeed $PA^2 = 13$, $PB^2 = 5$). A line is the mirror taking $A$ to $B$ exactly when it is the perpendicular bisector of $AB$ ✓. $AB = \sqrt{16+16} = 4\sqrt2$ ✗.`,
  }),
  q9(3, ADV_ONLY, 150, {
    kind: "multi",
    q: t`For the triangle with vertices $O(0,0)$, $A(6,0)$ and $B(2,4)$, which of the following are correct?`,
    options: [
      t`The circumradius is $2\sqrt5$`,
      t`The orthocentre is $(2,2)$`,
      t`The circumcentre is $(3,1)$`,
      t`The centroid is $\left(\frac83,\frac43\right)$`,
    ],
    answers: [1, 2, 3],
    hint: "Find two altitudes; then use the Euler line H = 3G − 2O to check.",
    explain: t`Altitude from $B$ to $OA$ (the $x$-axis): $x = 2$. Side $AB$ has slope $\frac{4}{-4} = -1$, so the altitude from $O$ is $y = x$. Orthocentre $H = (2,2)$ ✓. Circumcentre on $x = 3$ (bisector of $OA$): $9+k^2 = 1+(k-4)^2\Rightarrow k = 1$, so $(3,1)$ ✓ and $R = \sqrt{10}$, not $2\sqrt5$ ✗. Centroid $\left(\frac83,\frac43\right)$ ✓; check $3G-2O_c = (8,4)-(6,2) = (2,2) = H$.`,
  }),
  q9(3, NUM_ADV, 150, {
    kind: "numeric",
    q: t`A line of negative slope passes through $(1,2)$ and meets the positive coordinate axes at $P$ and $Q$. Find the least possible area of triangle $OPQ$, $O$ being the origin.`,
    answer: 4,
    hint: t`Write the slope as $-t$ with $t>0$ and use AM ≥ GM.`,
    explain: t`$y-2 = -t(x-1)$ has intercepts $1+\frac2t$ and $2+t$. Area $= \frac12\left(1+\frac2t\right)(2+t) = \frac12\left(4+t+\frac4t\right)\ge\frac12(4+4) = 4$, with equality at $t = 2$ (the line $2x+y = 4$, intercepts 2 and 4, area 4).`,
  }),
];
