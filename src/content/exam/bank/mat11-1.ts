import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Maths — Sets, Relations and Functions, Trigonometric Functions,
 * Complex Numbers and Quadratic Equations.
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
  1: "Sets",
  2: "Relations and Functions",
  3: "Trigonometric Functions",
  4: "Complex Numbers and Quadratic Equations",
};

/** Builds the questions of one chapter, numbering ids mat11-1-<ch>-<n>. */
function chapter(ch: number) {
  let n = 0;
  return (difficulty: D, exams: ExamId[], idealTime: number, body: Body): ExamQuestion =>
    ({
      id: `mat11-1-${String(ch).padStart(2, "0")}-${String(++n).padStart(3, "0")}`,
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
/* Chapter 1 — Sets                                                    */
/* ================================================================== */
const q1 = chapter(1);
const ch1: ExamQuestion[] = [
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`The set $\{x : x\in\mathbb N,\ x^2<30\}$ in roster form is:`,
    options: [t`$\{1,2,3,4,5\}$`, t`$\{0,1,2,3,4,5\}$`, t`$\{-5,-4,\dots,4,5\}$`, t`$\{1,2,3,4,5,6\}$`],
    answer: 0,
    explain: t`Natural numbers start at 1. $5^2=25<30$ but $6^2=36>30$, so the set is $\{1,2,3,4,5\}$. Including 0 or negatives ignores $x\in\mathbb N$; including 6 ignores the strict inequality.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: "Which of the following is the empty set?",
    options: [
      t`$\{x : x\in\mathbb R,\ x^2+1=0\}$`,
      t`$\{0\}$`,
      t`$\{x : x \text{ is an even prime}\}$`,
      t`$\{x : x\in\mathbb Z,\ x^2=1\}$`,
    ],
    answer: 0,
    explain: t`$x^2+1=0$ gives $x^2=-1$, which no real number satisfies, so that set is $\varnothing$. $\{0\}$ has one element (0), the even primes form $\{2\}$, and $x^2=1$ gives $\{-1,1\}$.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`The number of proper subsets of $A=\{a,b,c,d\}$ is:`,
    options: [t`$16$`, t`$15$`, t`$8$`, t`$14$`],
    answer: 1,
    explain: t`A set with $n$ elements has $2^n$ subsets; all except $A$ itself are proper, giving $2^n-1 = 16-1 = 15$. 16 counts all subsets; 14 wrongly removes $\varnothing$ as well ($\varnothing$ is a proper subset).`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`The set $\{x : x\in\mathbb R,\ -2<x\le5\}$ in interval notation is:`,
    options: [t`$[-2,5]$`, t`$(-2,5)$`, t`$(-2,5]$`, t`$[-2,5)$`],
    answer: 2,
    explain: t`A strict inequality gives an open end (round bracket) and $\le$ gives a closed end (square bracket): $-2$ is excluded and $5$ is included, so $(-2,5]$.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $A\subset B$, then which of the following is always true?`,
    options: [t`$A\cap B = A$`, t`$A\cup B = A$`, t`$B-A = \varnothing$`, t`$A'\subset B'$`],
    answer: 0,
    explain: t`Every element of $A$ lies in $B$, so the common part is all of $A$: $A\cap B = A$. Also $A\cup B = B$ (not $A$). $B-A$ is empty only if $A=B$. Complements reverse inclusion: $B'\subset A'$, not $A'\subset B'$.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $n(A)=20$, $n(B)=15$ and $n(A\cap B)=6$, then $n(A\cup B)$ is:`,
    options: [t`$35$`, t`$29$`, t`$41$`, t`$23$`],
    answer: 1,
    explain: t`$n(A\cup B) = n(A)+n(B)-n(A\cap B) = 20+15-6 = 29$. Simply adding (35) counts the 6 common elements twice; 41 adds them instead of subtracting.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`Let $U=\{1,2,3,\dots,10\}$ and $A=\{2,4,6,8\}$. Then $A'$ is:`,
    options: [t`$\{1,3,5,7,9\}$`, t`$\{1,3,5,7,9,10\}$`, t`$\{2,4,6,8,10\}$`, t`$\{10\}$`],
    answer: 1,
    explain: t`$A' = U-A$ = every element of $U$ not in $A$: $\{1,3,5,7,9,10\}$. The common slip is to list only the odd numbers and forget 10, which is in $U$ but not in $A$.`,
  }),
  q1(1, BASIC, 35, {
    kind: "mcq",
    q: t`If $A=\{1,2,3,4,5\}$ and $B=\{4,5,6,7\}$, then $A-B$ is:`,
    options: [t`$\{6,7\}$`, t`$\{4,5\}$`, t`$\{1,2,3\}$`, t`$\{1,2,3,6,7\}$`],
    answer: 2,
    explain: t`$A-B$ keeps the elements of $A$ that are not in $B$: remove 4 and 5 to get $\{1,2,3\}$. $\{6,7\}$ is $B-A$, $\{4,5\}$ is $A\cap B$, and $\{1,2,3,6,7\}$ is the symmetric difference.`,
  }),
  q1(1, BASIC, 35, {
    kind: "mcq",
    q: t`By De Morgan's law, $(A\cup B)'$ equals:`,
    options: [t`$A'\cup B'$`, t`$A'\cap B'$`, t`$A\cap B$`, t`$(A\cap B)'$`],
    answer: 1,
    explain: t`An element is outside $A\cup B$ exactly when it is outside $A$ and outside $B$, so $(A\cup B)' = A'\cap B'$. The partner law is $(A\cap B)' = A'\cup B'$; mixing up the two laws gives the first option.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`Let $A$ be the set of letters of the word FOLLOW and $B$ the set of letters of the word WOLF. Then:`,
    options: [t`$A\subsetneq B$`, t`$B\subsetneq A$`, t`$A=B$`, t`$A\cap B=\varnothing$`],
    answer: 2,
    explain: t`Repeated letters are listed once in a set, so $A=\{F,O,L,W\}$ and $B=\{W,O,L,F\}$. Order does not matter, so $A=B$. Thinking FOLLOW has more elements because it has more letters leads to the wrong "proper subset" answers.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: "Which of the following sets is finite?",
    options: [
      "The set of points on a line segment of length 1 cm",
      "The set of prime numbers",
      "The set of months of a year",
      t`$\{x : x\in\mathbb R,\ 0<x<1\}$`,
    ],
    answer: 2,
    explain: "There are 12 months, so that set is finite. A segment has infinitely many points, there are infinitely many primes (Euclid), and between 0 and 1 there are infinitely many real numbers.",
  }),
  q1(1, NUM, 40, {
    kind: "numeric",
    q: t`If $n(U)=50$ and $n(A)=22$, find $n(A')$.`,
    answer: 28,
    explain: t`$A$ and $A'$ split $U$ with no overlap, so $n(A') = n(U)-n(A) = 50-22 = 28$.`,
  }),
  q1(1, BASIC, 35, {
    kind: "mcq",
    q: t`The set $\{x : x\in\mathbb Z,\ |x|\le2\}$ in roster form is:`,
    options: [t`$\{-2,-1,0,1,2\}$`, t`$\{0,1,2\}$`, t`$\{-1,0,1\}$`, t`$\{-2,2\}$`],
    answer: 0,
    explain: t`$|x|\le2$ means $-2\le x\le2$; the integers in this range are $-2,-1,0,1,2$. $\{-2,2\}$ solves $|x|=2$ only, and $\{0,1,2\}$ forgets the negative integers.`,
  }),

  /* ---------- difficulty 2 ---------- */
  q1(2, NUM, 60, {
    kind: "numeric",
    q: "In a class of 100 students, 60 play cricket, 45 play football and 25 play both. How many students play neither game?",
    answer: 20,
    hint: "Find how many play at least one game first.",
    explain: t`$n(C\cup F) = 60+45-25 = 80$ play at least one game, so $100-80 = 20$ play neither. Subtracting $60+45$ from 100 directly is impossible (negative) because the 25 who play both are counted twice.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $n(A)=3$ and $n(B)=5$, the least possible value of $n(A\cup B)$ is:`,
    options: [t`$3$`, t`$5$`, t`$8$`, t`$2$`],
    answer: 1,
    hint: t`$n(A\cup B)$ is smallest when the overlap is as large as possible.`,
    explain: t`$n(A\cup B) = 8 - n(A\cap B)$ and $n(A\cap B)\le\min(3,5) = 3$. So the least value is $8-3 = 5$, reached when $A\subset B$. 8 is the greatest value (disjoint sets).`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`Let $A$ be the set of all multiples of 4 and $B$ the set of all multiples of 6 (in $\mathbb N$). Then $A\cap B$ is the set of all multiples of:`,
    options: [t`$24$`, t`$2$`, t`$12$`, t`$10$`],
    answer: 2,
    hint: "A number divisible by both 4 and 6 is divisible by their LCM.",
    explain: t`A number is in both sets iff it is divisible by $\operatorname{lcm}(4,6) = 12$. Using the product $4\times6=24$ misses 12, 36, …; 2 is the HCF and gives far too large a set.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $A=\{1,2,3,4\}$ and $B=\{3,4,5,6\}$, the symmetric difference $A\,\Delta\,B = (A-B)\cup(B-A)$ is:`,
    options: [t`$\{3,4\}$`, t`$\{1,2,5,6\}$`, t`$\{1,2\}$`, t`$\{1,2,3,4,5,6\}$`],
    answer: 1,
    hint: "Keep the elements that belong to exactly one of the two sets.",
    explain: t`$A-B = \{1,2\}$, $B-A = \{5,6\}$, so $A\,\Delta\,B = \{1,2,5,6\}$ — the union minus the intersection. $\{3,4\}$ is the intersection, the last option is the union.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`Statement I: The empty set is a subset of every set. Statement II: $\{\varnothing\}$ is the empty set.`,
    options: S12,
    answer: 1,
    explain: t`Statement I is true: $\varnothing\subseteq A$ holds vacuously because $\varnothing$ has no element outside $A$. Statement II is false: $\{\varnothing\}$ has exactly one element (the empty set), so $n(\{\varnothing\}) = 1\ne0$.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`For any sets $A,B,C$, the set $A-(B\cup C)$ equals:`,
    options: [t`$(A-B)\cup(A-C)$`, t`$(A-B)\cap(A-C)$`, t`$(A-B)\cup C$`, t`$A\cap B\cap C'$`],
    answer: 1,
    hint: t`Write $A-X = A\cap X'$ and apply De Morgan's law.`,
    explain: t`$A-(B\cup C) = A\cap(B\cup C)' = A\cap B'\cap C' = (A\cap B')\cap(A\cap C') = (A-B)\cap(A-C)$. The union $(A-B)\cup(A-C)$ equals $A-(B\cap C)$ instead — the usual mix-up.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $P(A)=P(B)$ for sets $A$ and $B$ (where $P$ denotes the power set), then:`,
    options: [t`$A\subsetneq B$`, t`$A=B$`, t`$A\cap B=\varnothing$`, t`$A$ and $B$ need only have the same number of elements`],
    answer: 1,
    hint: t`$A\in P(A)$ always.`,
    explain: t`$A\in P(A) = P(B)$, so $A\subseteq B$; likewise $B\in P(B) = P(A)$ gives $B\subseteq A$. Hence $A = B$. Equal cardinality is not enough: $P(\{1\}) = \{\varnothing,\{1\}\}\ne P(\{2\})$.`,
  }),
  q1(2, NUM, 75, {
    kind: "numeric",
    q: t`Set $A$ has $m$ elements and set $B$ has $k$ elements. The number of subsets of $A$ exceeds the number of subsets of $B$ by 112. Find $m$.`,
    answer: 7,
    hint: t`Factor $2^m-2^k = 2^k(2^{m-k}-1)$.`,
    explain: t`$2^k(2^{m-k}-1) = 112 = 16\times7$. The bracket is odd, so $2^k = 16$ (k = 4) and $2^{m-k}-1 = 7$, i.e. $m-k = 3$. Hence $m = 7$ (check: $128-16 = 112$).`,
  }),
  q1(2, NUM, 100, {
    kind: "numeric",
    q: "In a survey of 200 people, 90 read newspaper H, 80 read T and 70 read I; 30 read H and T, 25 read T and I, 35 read H and I, and 15 read all three. How many read none of the three?",
    answer: 35,
    hint: t`$n(H\cup T\cup I) = \sum n - \sum n(\text{pairs}) + n(\text{all three})$.`,
    explain: t`$n(H\cup T\cup I) = (90+80+70)-(30+25+35)+15 = 240-90+15 = 165$. So $200-165 = 35$ read none. Forgetting to add back the triple gives 150 and the wrong answer 50.`,
  }),
  q1(2, MAIN, 100, {
    kind: "mcq",
    q: "In a survey of 200 people, 90 read newspaper H, 80 read T, 70 read I; 30 read H and T, 25 read T and I, 35 read H and I, 15 read all three. The number of people who read exactly one newspaper is:",
    options: [t`$105$`, t`$165$`, t`$150$`, t`$45$`],
    answer: 0,
    hint: "Find the 'only H', 'only T' and 'only I' regions of the Venn diagram.",
    explain: t`Only H $= 90-30-35+15 = 40$; only T $= 80-30-25+15 = 40$; only I $= 70-25-35+15 = 25$. Total $40+40+25 = 105$. (Formula: $\sum n - 2\sum n(\text{pairs}) + 3n(\text{all}) = 240-180+45 = 105$.) 165 is "at least one"; 45 is "exactly two".`,
  }),
  q1(2, MAIN, 45, {
    kind: "mcq",
    q: t`For sets $A$ and $B$, $A\cup B = A\cap B$ holds if and only if:`,
    options: [t`$A\subset B$`, t`$B\subset A$`, t`$A=B$`, t`$A\cap B=\varnothing$`],
    answer: 2,
    explain: t`$A\subseteq A\cup B = A\cap B\subseteq B$, and similarly $B\subseteq A$, so $A=B$; conversely $A=B$ makes both sides equal $A$. A single inclusion is not enough: $A\subset B$ gives $A\cup B = B$ but $A\cap B = A$.`,
  }),
  q1(2, MAIN, 45, {
    kind: "mcq",
    q: t`A set $A$ has 4 elements, one of which is $a$. The number of subsets of $A$ that contain $a$ is:`,
    options: [t`$16$`, t`$4$`, t`$8$`, t`$15$`],
    answer: 2,
    explain: t`Put $a$ in, then choose freely among the other 3 elements: $2^3 = 8$. Exactly half of the 16 subsets contain $a$.`,
  }),
  q1(2, MAIN, 45, {
    kind: "mcq",
    q: t`$(-3,4]\cap[1,6)$ equals:`,
    options: [t`$[1,4]$`, t`$(1,4)$`, t`$(-3,6)$`, t`$[1,4)$`],
    answer: 0,
    explain: t`The overlap runs from the larger left end 1 (included, since $1\in[1,6)$ and $1\in(-3,4]$) to the smaller right end 4 (included, since $4\in(-3,4]$ and $4<6$). So $[1,4]$. $(-3,6)$ is the union.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`The set $(A\cup B)\cap(A\cup B')$ simplifies to:`,
    options: [t`$U$`, t`$A\cup B$`, t`$A$`, t`$B$`],
    answer: 2,
    hint: "Use the distributive law in reverse.",
    explain: t`By distributivity, $(A\cup B)\cap(A\cup B') = A\cup(B\cap B') = A\cup\varnothing = A$.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`Assertion (A): If $A\subseteq B$, then $B'\subseteq A'$. Reason (R): If $x\notin B$, then $x\notin A$ whenever $A\subseteq B$.`,
    options: AR,
    answer: 0,
    explain: t`R is the contrapositive of "$x\in A\Rightarrow x\in B$", so it is true. Taking any $x\in B'$, R gives $x\notin A$, i.e. $x\in A'$; this is exactly the proof of A. Both true and R explains A.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`If $n(A)=28$, $n(B)=32$ and $n(A\cup B)=50$, then $n(A\,\Delta\,B)$ is:`,
    options: [t`$40$`, t`$18$`, t`$22$`, t`$60$`],
    answer: 0,
    hint: t`Find $n(A\cap B)$ first.`,
    explain: t`$n(A\cap B) = 28+32-50 = 10$. Then $n(A\,\Delta\,B) = n(A\cup B)-n(A\cap B) = 50-10 = 40$ (that is, $18 + 22$ from $A-B$ and $B-A$). 18 alone is $n(A-B)$.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: "In a group, 65% of the people like tea and 40% like coffee. The least possible percentage of people who like both is:",
    options: [t`$5\%$`, t`$25\%$`, t`$40\%$`, t`$0\%$`],
    answer: 0,
    hint: t`$n(T\cup C)\le100\%$.`,
    explain: t`$n(T\cap C) = 65+40-n(T\cup C)\ge105-100 = 5\%$. The overlap cannot be 0% because $65+40$ exceeds 100%. 40% is the greatest possible overlap.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`The number of elements in $P(P(\varnothing))$ is:`,
    options: [t`$0$`, t`$1$`, t`$2$`, t`$4$`],
    answer: 2,
    explain: t`$P(\varnothing) = \{\varnothing\}$ has 1 element, so its power set has $2^1 = 2$ elements: $\{\varnothing,\{\varnothing\}\}$. Answering 1 stops after the first power set.`,
  }),
  q1(2, MAIN, 75, {
    kind: "mcq",
    q: t`Match List-I with List-II. List-I: (P) $A\cup A'$ (Q) $A\cap A'$ (R) $(A\cap B)\cup(A\cap B')$ (S) $(A\cup B)'$. List-II: (1) $A$ (2) $A'\cap B'$ (3) $\varnothing$ (4) $U$.`,
    options: [
      "P-4, Q-3, R-1, S-2",
      "P-3, Q-4, R-1, S-2",
      "P-4, Q-3, R-2, S-1",
      "P-1, Q-3, R-4, S-2",
    ],
    answer: 0,
    explain: t`$A\cup A' = U$ and $A\cap A' = \varnothing$ (complement laws). $(A\cap B)\cup(A\cap B') = A\cap(B\cup B') = A\cap U = A$. By De Morgan, $(A\cup B)' = A'\cap B'$. So P-4, Q-3, R-1, S-2.`,
  }),
  q1(2, NUM, 60, {
    kind: "numeric",
    q: t`In a universal set of 60 elements, $n(A)=25$, $n(B)=30$ and $n\big((A\cup B)'\big)=15$. Find $n(A\cap B)$.`,
    answer: 10,
    explain: t`$n(A\cup B) = 60-15 = 45$, so $n(A\cap B) = 25+30-45 = 10$.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`Let $A=\{x : x=2n+1,\ n\in\mathbb Z\}$ and $B=\{x : x=4n+1,\ n\in\mathbb Z\}$. Then $A\cap B$ equals:`,
    options: [t`$A$`, t`$B$`, t`$\varnothing$`, t`$\mathbb Z$`],
    answer: 1,
    hint: t`Is every number of the form $4n+1$ odd?`,
    explain: t`$4n+1 = 2(2n)+1$ is odd, so $B\subseteq A$ and therefore $A\cap B = B$. The inclusion is proper: $3\in A$ but $3\notin B$, so the answer is not $A$.`,
  }),
  q1(2, NUM, 100, {
    kind: "numeric",
    q: "Each of the 60 students of a class studies at least one of Maths, Physics and Chemistry. 35 study Maths, 30 Physics, 28 Chemistry; 12 study Maths and Physics, 10 Physics and Chemistry, and 14 Maths and Chemistry. How many study all three?",
    answer: 3,
    hint: "The union is the whole class.",
    explain: t`$60 = (35+30+28)-(12+10+14)+x = 93-36+x = 57+x$, so $x = 3$. Check the regions: only M $=12$, only P $=11$, only C $=7$, and the pair-only regions 9, 7, 11 — all non-negative, totalling $12+11+7+9+7+11+3 = 60$.`,
  }),
  q1(2, MAIN, 90, {
    kind: "mcq",
    q: "In a town, 52% of families read paper A, 40% read B and 30% read C; 18% read A and B, 12% read B and C, 15% read A and C, and 6% read all three. The percentage of families that read at least two papers is:",
    options: [t`$27\%$`, t`$33\%$`, t`$39\%$`, t`$45\%$`],
    answer: 1,
    hint: "At least two = exactly two + all three.",
    explain: t`Exactly two $= \sum(\text{pairs}) - 3(\text{all}) = 45-18 = 27\%$, so at least two $= 27+6 = 33\%$. Equivalently $\sum(\text{pairs}) - 2(\text{all}) = 45-12 = 33\%$. 45% (just adding the pairs) counts the triple region three times.`,
  }),
  q1(2, MAIN, 50, {
    kind: "mcq",
    q: t`Let $U=\{1,2,\dots,20\}$, $A$ the set of multiples of 2 and $B$ the set of multiples of 3 in $U$. Then $n(A'\cap B')$ is:`,
    options: [t`$7$`, t`$13$`, t`$4$`, t`$10$`],
    answer: 0,
    hint: t`$A'\cap B' = (A\cup B)'$.`,
    explain: t`$n(A)=10$, $n(B)=6$, $n(A\cap B)$ = multiples of 6 $= 3$. So $n(A\cup B) = 13$ and $n(A'\cap B') = 20-13 = 7$ (the numbers 1, 5, 7, 11, 13, 17, 19). 13 is $n(A\cup B)$ itself.`,
  }),

  /* ---------- difficulty 3 ---------- */
  q1(3, ADV_ONLY, 90, {
    kind: "multi",
    q: t`Let $A=\{1,\{2\},\{1,2\}\}$. Which of the following are true?`,
    options: [t`$\{2\}\in A$`, t`$\{1,2\}\subseteq A$`, t`$\{\{1,2\}\}\subseteq A$`, t`$2\in A$`],
    answers: [0, 2],
    hint: t`List the three elements of $A$ and test membership versus inclusion separately.`,
    explain: t`The elements of $A$ are $1$, $\{2\}$ and $\{1,2\}$. So $\{2\}\in A$ is true and $2\in A$ is false. $\{1,2\}\subseteq A$ would need $2\in A$ — false (though $\{1,2\}\in A$). $\{\{1,2\}\}\subseteq A$ needs only $\{1,2\}\in A$ — true.`,
  }),
  q1(3, ADV_ONLY, 90, {
    kind: "multi",
    q: t`In a universal set with $n(U)=50$, sets $A$ and $B$ have $n(A)=40$ and $n(B)=26$. Which of the following can be the value of $n(A\cap B)$?`,
    options: [t`$12$`, t`$18$`, t`$26$`, t`$30$`],
    answers: [1, 2],
    hint: t`Bound $n(A\cap B)$ above by $\min(n(A),n(B))$ and below using $n(A\cup B)\le n(U)$.`,
    explain: t`$n(A\cap B)\le\min(40,26) = 26$ and $n(A\cap B) = 66-n(A\cup B)\ge66-50 = 16$. Every integer in $[16,26]$ is attainable, so 18 and 26 work; 12 would force $n(A\cup B) = 54>50$, and 30 exceeds $n(B)$.`,
  }),
  q1(3, ADV, 90, {
    kind: "mcq",
    q: t`For $n\in\mathbb N$ let $A_n = \left(-\frac1n,\ \frac1n\right)$. Then $\bigcap_{n=1}^{\infty}A_n$ is:`,
    options: [t`$\varnothing$`, t`$\{0\}$`, t`$(-1,1)$`, t`$[0,1)$`],
    answer: 1,
    hint: t`Which real numbers lie in every interval, however small?`,
    explain: t`$0$ lies in every $A_n$. Any $x\ne0$ fails once $\frac1n\le|x|$, i.e. for large $n$. So the intersection is $\{0\}$, not empty — the intervals shrink but always contain 0. $(-1,1)$ is the union.`,
  }),
  q1(3, NUM_ADV, 90, {
    kind: "numeric",
    q: t`Let $X=\{1,2,3,4,5\}$. Find the number of ordered pairs $(A,B)$ of subsets of $X$ with $A\subseteq B$.`,
    answer: 243,
    hint: "Decide, element by element, where each element of X goes.",
    explain: t`Each element independently is in neither set, in $B$ only, or in both $A$ and $B$ (it cannot be in $A$ only). That gives $3^5 = 243$ pairs. $2^5\cdot2^5 = 1024$ counts all pairs with no condition.`,
  }),
  q1(3, ADV_ONLY, 100, {
    kind: "multi",
    q: t`For all sets $A, B, C$, which of the following identities hold?`,
    options: [
      t`$A-(B-C) = (A-B)\cup(A\cap C)$`,
      t`$A\cup(B\cap C) = (A\cup B)\cap(A\cup C)$`,
      t`$A-(B\cap C) = (A-B)\cap(A-C)$`,
      t`$(A-B)\cap B = \varnothing$`,
    ],
    answers: [0, 1, 3],
    hint: t`Use $X-Y = X\cap Y'$ throughout.`,
    explain: t`(a) $A\cap(B\cap C')' = A\cap(B'\cup C) = (A\cap B')\cup(A\cap C)$ ✓. (b) is the distributive law ✓. (c) $A\cap(B\cap C)' = A\cap(B'\cup C') = (A-B)\cup(A-C)$, a union, not an intersection ✗ (try $A=\{1,2\}$, $B=\{1\}$, $C=\{2\}$: left side $A$, right side $\varnothing$). (d) $A\cap B'\cap B = \varnothing$ ✓.`,
  }),
  q1(3, ADV, 80, {
    kind: "mcq",
    q: t`Statement I: If $A\cup B = A\cup C$, then $B = C$. Statement II: If $A\cup B = A\cup C$ and $A\cap B = A\cap C$, then $B = C$.`,
    options: S12,
    answer: 2,
    hint: "Test Statement I with A large.",
    explain: t`Statement I is false: $A=\{1,2\}$, $B=\{1\}$, $C=\{2\}$ give $A\cup B = A\cup C = A$ but $B\ne C$. Statement II is true: $B = B\cap(A\cup B) = B\cap(A\cup C) = (B\cap A)\cup(B\cap C) = (A\cap C)\cup(B\cap C) = C\cap(A\cup B) = C\cap(A\cup C) = C$.`,
  }),
  q1(3, NUM_ADV, 100, {
    kind: "numeric",
    q: "How many natural numbers from 1 to 100 are divisible by at least one of 2, 3 and 5?",
    answer: 74,
    hint: "Inclusion–exclusion with three sets; pairwise intersections are multiples of 6, 10, 15.",
    explain: t`$n = \lfloor100/2\rfloor+\lfloor100/3\rfloor+\lfloor100/5\rfloor-\lfloor100/6\rfloor-\lfloor100/10\rfloor-\lfloor100/15\rfloor+\lfloor100/30\rfloor = 50+33+20-16-10-6+3 = 74$.`,
  }),
  q1(3, ADV, 100, {
    kind: "mcq",
    q: t`Let $X=\{5^n-4n-1 : n\in\mathbb N\}$ and $Y=\{16(n-1) : n\in\mathbb N\}$. Then:`,
    options: [t`$X = Y$`, t`$X\cup Y = X$`, t`$X\cup Y = Y$`, t`$X\cap Y = \varnothing$`],
    answer: 2,
    hint: t`Expand $5^n = (1+4)^n$.`,
    explain: t`$5^n = 1+4n+\binom n2 4^2+\binom n3 4^3+\dots$, so $5^n-4n-1$ is a non-negative multiple of 16 and every element of $X$ is in $Y$ (n = 1 gives 0). Hence $X\subseteq Y$ and $X\cup Y = Y$. $X\ne Y$: $32\in Y$ but the values of $X$ are $0, 16, 112, \dots$, so $32\notin X$.`,
  }),
  q1(3, ADV, 80, {
    kind: "mcq",
    q: t`The number of ordered pairs $(A,B)$ of subsets of $X=\{1,2,3,4\}$ with $A\cup B = X$ is:`,
    options: [t`$81$`, t`$16$`, t`$64$`, t`$256$`],
    answer: 0,
    hint: "Each element must land in at least one of A, B.",
    explain: t`Each element is in $A$ only, $B$ only, or both — 3 choices — so $3^4 = 81$. 256 ignores the condition; 16 counts only the disjoint covering pairs ($A\cap B=\varnothing$ too).`,
  }),
  q1(3, ADV_ONLY, 90, {
    kind: "multi",
    q: t`For subsets $A, B$ of a universal set $U$, which of the following conditions are each equivalent to $A\subseteq B$?`,
    options: [t`$A\cup B = B$`, t`$A\cap B' = \varnothing$`, t`$A'\cup B = U$`, t`$B'\subseteq A$`],
    answers: [0, 1, 2],
    explain: t`(a) $A\subseteq B\iff A\cup B = B$ ✓. (b) $A-B = A\cap B'$ is empty iff no element of $A$ is outside $B$ ✓. (c) $A'\cup B = (A\cap B')'$, which equals $U$ iff $A\cap B' = \varnothing$ ✓. (d) The correct statement is $B'\subseteq A'$; with $A=\varnothing$, $B=\{1\}$, $U=\{1,2\}$ we have $A\subseteq B$ but $B' = \{2\}\not\subseteq A$ ✗.`,
  }),
  q1(3, ADV, 90, {
    kind: "mcq",
    q: "In a survey, 70% of people like product A, 75% like B and 80% like C. The least possible percentage of people who like all three is:",
    options: [t`$25\%$`, t`$5\%$`, t`$30\%$`, t`$70\%$`],
    answer: 0,
    hint: "Count the people who miss at least one product.",
    explain: t`At most $30\%+25\%+20\% = 75\%$ dislike at least one product (the three "dislike" groups could be disjoint). So at least $100-75 = 25\%$ like all three, and 25% is attained when those groups do not overlap. 5% applies the two-set bound only; 70% is the greatest possible value.`,
  }),
];

/* ================================================================== */
/* Chapter 2 — Relations and Functions                                 */
/* ================================================================== */
const q2 = chapter(2);
const ch2: ExamQuestion[] = [
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $(x+1,\ y-2) = (3,\ 1)$, then $(x, y)$ is:`,
    options: [t`$(2,3)$`, t`$(4,-1)$`, t`$(2,-1)$`, t`$(3,1)$`],
    answer: 0,
    explain: t`Ordered pairs are equal only when corresponding entries are equal: $x+1 = 3\Rightarrow x = 2$ and $y-2 = 1\Rightarrow y = 3$. $(4,-1)$ comes from moving the constants the wrong way.`,
  }),
  q2(1, BASIC, 35, {
    kind: "mcq",
    q: t`If $n(A)=3$ and $n(B)=4$, then $n(A\times B)$ is:`,
    options: [t`$7$`, t`$12$`, t`$64$`, t`$81$`],
    answer: 1,
    explain: t`$A\times B$ contains one ordered pair for each choice of first and second entry: $n(A)\,n(B) = 3\times4 = 12$. $7$ adds instead of multiplying; $4^3 = 64$ is the number of functions from $A$ to $B$.`,
  }),
  q2(1, BASIC, 35, {
    kind: "mcq",
    q: t`If $A=\{1,2\}$ and $B=\{a\}$, then $A\times B$ is:`,
    options: [t`$\{(a,1),(a,2)\}$`, t`$\{(1,a),(2,a)\}$`, t`$\{1,2,a\}$`, t`$\{(1,2),(a,a)\}$`],
    answer: 1,
    explain: t`$A\times B = \{(x,y) : x\in A,\ y\in B\}$, first entry from $A$: $\{(1,a),(2,a)\}$. $\{(a,1),(a,2)\}$ is $B\times A$ — order matters in a Cartesian product.`,
  }),
  q2(1, NUM, 40, {
    kind: "numeric",
    q: t`If $n(A)=2$ and $n(B)=3$, find the number of relations from $A$ to $B$.`,
    answer: 64,
    explain: t`A relation from $A$ to $B$ is any subset of $A\times B$, which has $2\times3 = 6$ elements. So there are $2^6 = 64$ relations (including the empty relation).`,
  }),
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`The range of the relation $R = \{(x,\ x+3) : x\in\{0,1,2\}\}$ is:`,
    options: [t`$\{0,1,2\}$`, t`$\{3,4,5\}$`, t`$\{0,1,2,3,4,5\}$`, t`$\{3\}$`],
    answer: 1,
    explain: t`$R = \{(0,3),(1,4),(2,5)\}$. The range is the set of second entries: $\{3,4,5\}$; $\{0,1,2\}$ is the domain.`,
  }),
  q2(1, BASIC, 45, {
    kind: "mcq",
    q: t`Which of the following relations from $\{1,2,3\}$ to $\{1,2,3\}$ is a function?`,
    options: [
      t`$\{(1,2),(1,3),(2,1),(3,1)\}$`,
      t`$\{(1,2),(2,3),(3,2)\}$`,
      t`$\{(1,1),(2,2)\}$`,
      t`$\{(1,3),(2,1),(2,2),(3,3)\}$`,
    ],
    answer: 1,
    explain: t`A function needs every element of the domain $\{1,2,3\}$ to have exactly one image. Option 2 does. Option 1 gives 1 two images, option 4 gives 2 two images, and option 3 leaves 3 without an image. (Two inputs sharing the image 2 is allowed.)`,
  }),
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $f(x) = x^2-3x$, then $f(2)+f(-1)$ equals:`,
    options: [t`$2$`, t`$-4$`, t`$6$`, t`$0$`],
    answer: 0,
    explain: t`$f(2) = 4-6 = -2$ and $f(-1) = (-1)^2-3(-1) = 1+3 = 4$, so the sum is $2$. Writing $f(-1) = 1-3 = -2$ (dropping the sign of $-3\cdot(-1)$) gives $-4$; always substitute negative values inside brackets.`,
  }),
  q2(1, BASIC, 35, {
    kind: "mcq",
    q: t`The domain of the real function $f(x) = \dfrac{1}{x-2}$ is:`,
    options: [t`$\mathbb R$`, t`$\mathbb R-\{2\}$`, t`$\mathbb R-\{0\}$`, t`$(2,\infty)$`],
    answer: 1,
    explain: t`The only restriction is a non-zero denominator: $x\ne2$. So the domain is $\mathbb R-\{2\}$. $(2,\infty)$ would be the answer for $1/\sqrt{x-2}$.`,
  }),
  q2(1, BASIC, 35, {
    kind: "mcq",
    q: t`The range of the modulus function $f(x) = |x|$, $x\in\mathbb R$, is:`,
    options: [t`$\mathbb R$`, t`$(0,\infty)$`, t`$[0,\infty)$`, t`$\{-1,0,1\}$`],
    answer: 2,
    explain: t`$|x|\ge0$ for every $x$ and every $y\ge0$ is attained ($|y| = y$), including $0 = |0|$. So the range is $[0,\infty)$. $(0,\infty)$ forgets $x=0$; $\{-1,0,1\}$ is the range of the signum function.`,
  }),
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $\operatorname{sgn}$ denotes the signum function, then $\operatorname{sgn}(-3)+\operatorname{sgn}(0)+\operatorname{sgn}(2)$ equals:`,
    options: [t`$-1$`, t`$0$`, t`$1$`, "not defined, since sgn(0) is undefined"],
    answer: 1,
    explain: t`$\operatorname{sgn}x = 1, 0, -1$ for $x>0$, $x=0$, $x<0$. So the sum is $-1+0+1 = 0$. The signum function is defined at 0 with value 0.`,
  }),
  q2(1, BASIC, 35, {
    kind: "mcq",
    q: t`If $[\cdot]$ denotes the greatest integer function, then $[-2.3]$ equals:`,
    options: [t`$-2$`, t`$-3$`, t`$2$`, t`$-2.3$`],
    answer: 1,
    explain: t`$[x]$ is the greatest integer $\le x$. The integers not exceeding $-2.3$ are $-3, -4, \dots$; the greatest is $-3$. Answering $-2$ (dropping the decimal) is wrong because $-2>-2.3$.`,
  }),
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $f(x) = x+1$ and $g(x) = 2x-3$, then $(fg)(1)$ equals:`,
    options: [t`$-2$`, t`$0$`, t`$2$`, t`$-1$`],
    answer: 0,
    explain: t`$(fg)(x) = f(x)\,g(x)$ — a product, not a composition. $(fg)(1) = f(1)\,g(1) = 2\times(-1) = -2$. Composing, $f(g(1)) = f(-1) = 0$, is the common confusion.`,
  }),
  q2(1, BASIC, 40, {
    kind: "mcq",
    q: t`If $A\times B = \{(a,1),(a,2),(b,1),(b,2)\}$, then:`,
    options: [
      t`$A=\{1,2\},\ B=\{a,b\}$`,
      t`$A=\{a,b\},\ B=\{1,2\}$`,
      t`$A=\{a,1\},\ B=\{b,2\}$`,
      t`$A=\{a,b,1,2\}=B$`,
    ],
    answer: 1,
    explain: t`$A$ is the set of first entries $\{a,b\}$ and $B$ the set of second entries $\{1,2\}$. Swapping them describes $B\times A$.`,
  }),

  /* ---------- difficulty 2 ---------- */
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $A=\{1,2,3\}$, $B=\{3,4\}$ and $C=\{4,5\}$, then $A\times(B\cap C)$ is:`,
    options: [
      t`$\{(1,4),(2,4),(3,4)\}$`,
      t`$\{(1,3),(2,3),(3,3)\}$`,
      t`$\{(4,1),(4,2),(4,3)\}$`,
      t`$\{(3,4)\}$`,
    ],
    answer: 0,
    explain: t`$B\cap C = \{4\}$, so $A\times\{4\} = \{(1,4),(2,4),(3,4)\}$. Note $A\times(B\cap C) = (A\times B)\cap(A\times C)$.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`$A\times B$ has 6 elements, three of which are $(1,x)$, $(2,y)$ and $(3,x)$. Then:`,
    options: [
      t`$A=\{1,2,3\},\ B=\{x,y\}$`,
      t`$A=\{x,y\},\ B=\{1,2,3\}$`,
      t`$A=\{1,2,3\},\ B=\{x\}$`,
      t`$A=\{1,3\},\ B=\{x,y\}$`,
    ],
    answer: 0,
    hint: "Read off the first and second entries that must be present.",
    explain: t`First entries 1, 2, 3 must lie in $A$, and second entries $x, y$ in $B$. Then $n(A)\ge3$, $n(B)\ge2$ and $n(A)\,n(B) = 6$ force $A=\{1,2,3\}$, $B=\{x,y\}$.`,
  }),
  q2(2, NUM, 60, {
    kind: "numeric",
    q: t`$A\times A$ has 9 elements, among which are $(-1,0)$ and $(0,1)$. How many elements $(a,b)$ of $A\times A$ satisfy $a+b=0$?`,
    answer: 3,
    hint: "First find A.",
    explain: t`$n(A)^2 = 9$ gives $n(A) = 3$, and $-1, 0, 1$ must be in $A$, so $A = \{-1,0,1\}$. Pairs with $a+b = 0$: $(-1,1)$, $(0,0)$, $(1,-1)$ — three of them.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The domain of $f(x) = \sqrt{x^2-5x+6}$ is:`,
    options: [t`$[2,3]$`, t`$(-\infty,2]\cup[3,\infty)$`, t`$(-\infty,2)\cup(3,\infty)$`, t`$\mathbb R$`],
    answer: 1,
    hint: "The expression under the root must be non-negative.",
    explain: t`$x^2-5x+6 = (x-2)(x-3)\ge0$ outside the roots, with the roots included: $(-\infty,2]\cup[3,\infty)$. $[2,3]$ is where the quadratic is $\le0$; the open version wrongly removes $x=2,3$, where $f = 0$.`,
  }),
  q2(2, MAIN, 70, {
    kind: "mcq",
    q: t`The range of $f(x) = \dfrac{x}{1+x^2}$, $x\in\mathbb R$, is:`,
    options: [t`$\left[-\frac12,\frac12\right]$`, t`$[-1,1]$`, t`$\left[0,\frac12\right]$`, t`$\mathbb R$`],
    answer: 0,
    hint: t`Put $y = \frac{x}{1+x^2}$ and require a real $x$.`,
    explain: t`$yx^2-x+y = 0$. For $y\ne0$, real $x$ needs $1-4y^2\ge0$, i.e. $|y|\le\frac12$; $y = 0$ comes from $x=0$. So the range is $\left[-\frac12,\frac12\right]$, with $\pm\frac12$ at $x=\pm1$. (AM–GM: $|1+x^2|\ge2|x|$.) $\left[0,\frac12\right]$ forgets negative $x$.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The range of $f(x) = \dfrac{x^2}{1+x^2}$, $x\in\mathbb R$, is:`,
    options: [t`$[0,1]$`, t`$[0,1)$`, t`$(0,1)$`, t`$[0,\infty)$`],
    answer: 1,
    explain: t`$f(x) = 1-\frac{1}{1+x^2}$. As $x^2$ runs over $[0,\infty)$, $\frac1{1+x^2}$ runs over $(0,1]$, so $f$ runs over $[0,1)$. $f = 0$ at $x = 0$, but $f = 1$ would need $\frac1{1+x^2} = 0$, which never happens.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The domain of $f(x) = \dfrac{1}{\sqrt{|x|-x}}$ is:`,
    options: [t`$(0,\infty)$`, t`$(-\infty,0)$`, t`$\mathbb R-\{0\}$`, t`$\mathbb R$`],
    answer: 1,
    hint: t`When is $|x|-x$ positive?`,
    explain: t`We need $|x|-x>0$. For $x\ge0$, $|x|-x = 0$ (not allowed); for $x<0$, $|x|-x = -2x>0$. So the domain is $(-\infty,0)$.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The range of $f(x) = |x-1|+|x+2|$ is:`,
    options: [t`$[0,\infty)$`, t`$[1,\infty)$`, t`$[3,\infty)$`, t`$[-1,\infty)$`],
    answer: 2,
    hint: "Think of distances on the number line.",
    explain: t`$f(x)$ is the sum of the distances from $x$ to 1 and to $-2$. It is least, equal to $3$, for every $x\in[-2,1]$, and grows without bound outside. So the range is $[3,\infty)$.`,
  }),
  q2(2, MAIN, 45, {
    kind: "mcq",
    q: t`The number of functions from a set with 3 elements to a set with 2 elements is:`,
    options: [t`$6$`, t`$9$`, t`$8$`, t`$64$`],
    answer: 2,
    explain: t`Each of the 3 elements picks one of 2 images independently: $2^3 = 8$. $3^2 = 9$ reverses the roles; $64 = 2^6$ is the number of relations.`,
  }),
  q2(2, MAIN, 60, {
    kind: "mcq",
    q: t`If $f(x) = \dfrac{x-1}{x+1}$ $(x\ne-1)$, then $f(f(x))$ (where defined) equals:`,
    options: [t`$x$`, t`$-\dfrac1x$`, t`$\dfrac1x$`, t`$-x$`],
    answer: 1,
    hint: t`Multiply the top and bottom of the compound fraction by $x+1$.`,
    explain: t`$f(f(x)) = \dfrac{\frac{x-1}{x+1}-1}{\frac{x-1}{x+1}+1} = \dfrac{(x-1)-(x+1)}{(x-1)+(x+1)} = \dfrac{-2}{2x} = -\dfrac1x$ (for $x\ne0,-1$).`,
  }),
  q2(2, NUM, 80, {
    kind: "numeric",
    q: t`A function satisfies $f(x)+2f\!\left(\frac1x\right) = 3x$ for all $x\ne0$. Find $f(2)$.`,
    answer: -1,
    hint: t`Replace $x$ by $\frac1x$ to get a second equation.`,
    explain: t`Also $f\!\left(\frac1x\right)+2f(x) = \frac3x$. Doubling this and subtracting the original: $3f(x) = \frac6x-3x$, so $f(x) = \frac2x-x$ and $f(2) = 1-2 = -1$. (Check: $f(x)+2f(1/x) = \frac2x-x+4x-\frac2x = 3x$.)`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The domain of $f(x) = \dfrac{1}{[x]}$, where $[\cdot]$ is the greatest integer function, is:`,
    options: [t`$\mathbb R-\{0\}$`, t`$\mathbb R-[0,1)$`, t`$\mathbb R-(0,1)$`, t`$\mathbb R-\mathbb Z$`],
    answer: 1,
    explain: t`We need $[x]\ne0$. Since $[x] = 0$ exactly for $0\le x<1$, the domain is $\mathbb R-[0,1)$. Removing only $x=0$ misses values like $x = 0.5$ where $[x]$ is also 0.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The range of $f(x) = [x]-x$, where $[\cdot]$ is the greatest integer function, is:`,
    options: [t`$[0,1)$`, t`$(-1,0]$`, t`$[-1,0]$`, t`$(-1,1)$`],
    answer: 1,
    hint: t`$x-[x]$ is the fractional part.`,
    explain: t`$x-[x] = \{x\}\in[0,1)$, so $[x]-x = -\{x\}\in(-1,0]$. It equals 0 at integers but never reaches $-1$.`,
  }),
  q2(2, MAIN, 60, {
    kind: "mcq",
    q: t`Statement I: $|x| = x\operatorname{sgn}(x)$ for every real $x$. Statement II: $\operatorname{sgn}(x^2-1) = 1$ for every real $x$ with $|x|>1$.`,
    options: S12,
    answer: 0,
    explain: t`I: for $x>0$, $x\cdot1 = x = |x|$; for $x<0$, $x\cdot(-1) = -x = |x|$; for $x = 0$ both sides are 0 — true. II: $|x|>1\Rightarrow x^2-1>0\Rightarrow\operatorname{sgn} = 1$ — true.`,
  }),
  q2(2, MAIN, 45, {
    kind: "mcq",
    q: t`On $A=\{1,2,3,4\}$, the relation $R = \{(a,b) : b = a+1,\ a,b\in A\}$ has range:`,
    options: [t`$\{1,2,3\}$`, t`$\{2,3,4\}$`, t`$\{2,3,4,5\}$`, t`$\{1,2,3,4\}$`],
    answer: 1,
    explain: t`$R = \{(1,2),(2,3),(3,4)\}$ ($a = 4$ would need $b = 5\notin A$). The range is $\{2,3,4\}$ and the domain $\{1,2,3\}$; including 5 ignores $b\in A$.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`For $R = \{(x,y) : x+2y = 8,\ x,y\in\mathbb N\}$, the domain of $R$ is:`,
    options: [t`$\{2,4,6\}$`, t`$\{1,2,3\}$`, t`$\{0,2,4,6\}$`, t`$\{2,4,6,8\}$`],
    answer: 0,
    explain: t`$x = 8-2y$ must be a natural number: $y = 1, 2, 3$ give $x = 6, 4, 2$, while $y = 4$ gives $x = 0\notin\mathbb N$. So $R = \{(6,1),(4,2),(2,3)\}$ with domain $\{2,4,6\}$ and range $\{1,2,3\}$.`,
  }),
  q2(2, MAIN, 70, {
    kind: "mcq",
    q: t`Match each function (List-I) with its range (List-II). List-I: (P) $|x|$ (Q) $\operatorname{sgn}x$ (R) $[x]$ (S) $f(x)=3$ for all $x$. List-II: (1) $\mathbb Z$ (2) $\{-1,0,1\}$ (3) $[0,\infty)$ (4) $\{3\}$.`,
    options: [
      "P-3, Q-2, R-1, S-4",
      "P-3, Q-1, R-2, S-4",
      "P-1, Q-2, R-3, S-4",
      "P-3, Q-2, R-4, S-1",
    ],
    answer: 0,
    explain: t`$|x|$ takes all values $\ge0$: (3). Signum takes only $-1,0,1$: (2). The greatest integer function takes every integer: (1). A constant function has a one-element range $\{3\}$: (4).`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`Assertion (A): $R = \{(1,1),(2,1),(3,1)\}$ is a function from $\{1,2,3\}$ to $\{1\}$. Reason (R): In a function every element of the domain has exactly one image, while distinct elements may share an image.`,
    options: AR,
    answer: 0,
    explain: t`Each of 1, 2, 3 has exactly one image (namely 1), so $R$ is a (constant) function — A is true. R states the definition and is exactly why A holds.`,
  }),
  q2(2, NUM, 50, {
    kind: "numeric",
    q: t`The number of relations from a set $A$ with 4 elements to a set $B$ is 4096. Find $n(B)$.`,
    answer: 3,
    explain: t`The number of relations is $2^{n(A)n(B)} = 2^{4n(B)} = 4096 = 2^{12}$, so $4n(B) = 12$ and $n(B) = 3$.`,
  }),
  q2(2, MAIN, 45, {
    kind: "mcq",
    q: t`The range of $f(x) = \sqrt{9-x^2}$ is:`,
    options: [t`$[-3,3]$`, t`$[0,3]$`, t`$[0,9]$`, t`$(0,3)$`],
    answer: 1,
    explain: t`The domain is $[-3,3]$, where $9-x^2$ runs over $[0,9]$; taking the (non-negative) square root gives $[0,3]$. $[-3,3]$ is the domain, not the range.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $f(x) = \sqrt{x-1}$ and $g(x) = x-3$, the domain of $\dfrac fg$ is:`,
    options: [t`$[1,\infty)$`, t`$[1,\infty)-\{3\}$`, t`$(1,\infty)-\{3\}$`, t`$\mathbb R-\{3\}$`],
    answer: 1,
    explain: t`$\frac fg$ is defined on (domain of $f$) $\cap$ (domain of $g$) minus the zeros of $g$: $[1,\infty)\cap\mathbb R-\{3\} = [1,\infty)-\{3\}$. $x = 1$ is allowed since $f(1) = 0$ is fine in a numerator.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`The domain of $f(x) = \dfrac{\sqrt{x+3}}{x^2-4}$ is:`,
    options: [t`$[-3,\infty)-\{-2,2\}$`, t`$(-3,\infty)-\{2\}$`, t`$[-3,\infty)-\{2\}$`, t`$\mathbb R-\{-2,2\}$`],
    answer: 0,
    explain: t`Need $x+3\ge0$, i.e. $x\ge-3$, and $x^2\ne4$, i.e. $x\ne\pm2$. Both $\pm2$ lie in $[-3,\infty)$, so the domain is $[-3,\infty)-\{-2,2\}$. Forgetting that $-2\ge-3$ gives the third option.`,
  }),
  q2(2, MAIN, 60, {
    kind: "mcq",
    q: t`The solution set of $[x]^2-5[x]+6 = 0$, where $[\cdot]$ is the greatest integer function, is:`,
    options: [t`$\{2,3\}$`, t`$[2,3]$`, t`$[2,4)$`, t`$[2,3)$`],
    answer: 2,
    hint: t`Solve for $[x]$ first.`,
    explain: t`$([x]-2)([x]-3) = 0$ gives $[x] = 2$ ($2\le x<3$) or $[x] = 3$ ($3\le x<4$). Together, $x\in[2,4)$. Answering $\{2,3\}$ solves for $x$ instead of $[x]$.`,
  }),
  q2(2, NUM, 45, {
    kind: "numeric",
    q: t`A linear function $f(x) = ax+b$ has $f(1) = 5$ and $f(3) = 11$. Find $f(5)$.`,
    answer: 17,
    explain: t`$a+b = 5$ and $3a+b = 11$ give $a = 3$, $b = 2$. So $f(5) = 15+2 = 17$.`,
  }),
  q2(2, MAIN, 50, {
    kind: "mcq",
    q: t`If $A=\{1,2,3\}$ and $B=\{2,3,4\}$, the number of elements of $(A\times B)\cap(B\times A)$ is:`,
    options: [t`$4$`, t`$9$`, t`$2$`, t`$0$`],
    answer: 0,
    hint: t`$(A\times B)\cap(C\times D) = (A\cap C)\times(B\cap D)$.`,
    explain: t`$(A\times B)\cap(B\times A) = (A\cap B)\times(B\cap A) = \{2,3\}\times\{2,3\}$, which has $2\times2 = 4$ elements: $(2,2),(2,3),(3,2),(3,3)$.`,
  }),
  q2(2, MAIN, 60, {
    kind: "mcq",
    q: t`Statement I: $f(x) = \sqrt{x^2}$ and $g(x) = x$ are equal functions on $\mathbb R$. Statement II: $f(x) = \dfrac{x^2}{x}$ and $g(x) = x$ are equal functions.`,
    options: S12,
    answer: 3,
    explain: t`I is false: $\sqrt{x^2} = |x|$, which differs from $x$ for $x<0$. II is false: $\frac{x^2}{x}$ is not defined at $x = 0$, so its domain $\mathbb R-\{0\}$ differs from that of $g$. Equal functions need the same domain and the same rule.`,
  }),

  /* ---------- difficulty 3 ---------- */
  q2(3, ADV, 100, {
    kind: "mcq",
    q: t`The range of $f(x) = \dfrac{x^2+x+1}{x^2-x+1}$, $x\in\mathbb R$, is:`,
    options: [t`$\left[\frac13,3\right]$`, t`$(0,\infty)$`, t`$\left(\frac13,3\right)$`, t`$[1,3]$`],
    answer: 0,
    hint: t`Set $y = f(x)$ and demand a non-negative discriminant in $x$.`,
    explain: t`$(y-1)x^2-(y+1)x+(y-1) = 0$. For $y\ne1$: $(y+1)^2-4(y-1)^2\ge0\iff(3-y)(3y-1)\ge0\iff\frac13\le y\le3$; $y = 1$ is attained at $x = 0$. The ends are attained ($y = 3$ at $x = 1$, $y = \frac13$ at $x = -1$), so the range is $\left[\frac13,3\right]$.`,
  }),
  q2(3, ADV_ONLY, 100, {
    kind: "multi",
    q: t`For the greatest integer function $[\cdot]$, which of the following hold?`,
    options: [
      t`$[x+n] = [x]+n$ for every real $x$ and integer $n$`,
      t`$[x]+[-x] = -1$ for every non-integer $x$`,
      t`$[2x] = 2[x]$ for every real $x$`,
      t`$[x+y]\ge[x]+[y]$ for all real $x, y$`,
    ],
    answers: [0, 1, 3],
    explain: t`(a) Adding an integer shifts the floor by that integer ✓. (b) If $x = k+f$ with $0<f<1$, then $[x] = k$ and $[-x] = -k-1$ ✓. (c) $x = 0.5$: $[1] = 1$ but $2[0.5] = 0$ ✗. (d) $x+y = [x]+[y]+\{x\}+\{y\}$ with $\{x\}+\{y\}\ge0$, so $[x+y]$ is $[x]+[y]$ or $[x]+[y]+1$ ✓.`,
  }),
  q2(3, NUM_ADV, 120, {
    kind: "numeric",
    q: t`Find $\displaystyle\sum_{n=1}^{30}\left[\sqrt n\right]$, where $[\cdot]$ is the greatest integer function.`,
    answer: 100,
    hint: t`$[\sqrt n] = k$ for $k^2\le n<(k+1)^2$, i.e. for $2k+1$ values of $n$.`,
    explain: t`$k=1$: $n = 1..3$ (3 terms) → 3; $k=2$: $n = 4..8$ (5 terms) → 10; $k=3$: $n = 9..15$ (7) → 21; $k=4$: $n = 16..24$ (9) → 36; $k=5$: $n = 25..30$ (6 terms only) → 30. Total $3+10+21+36+30 = 100$.`,
  }),
  q2(3, NUM_ADV, 90, {
    kind: "numeric",
    q: t`A function $f:\mathbb R\to\mathbb R$ satisfies $f(x+y) = f(x)+f(y)$ for all real $x, y$, and $f(1) = 3$. Find $\displaystyle\sum_{k=1}^{10}f(k)$.`,
    answer: 165,
    hint: t`Show $f(n) = nf(1)$ for natural $n$.`,
    explain: t`By induction $f(n) = f(n-1)+f(1)$, so $f(n) = 3n$. Then $\sum_{k=1}^{10}3k = 3\cdot55 = 165$.`,
  }),
  q2(3, ADV_ONLY, 90, {
    kind: "multi",
    q: t`Let $A = \{1,2,3\}$ and $B = \{a,b\}$. Which of the following are correct?`,
    options: [
      t`The number of relations from $A$ to $B$ is 64`,
      t`The number of functions from $A$ to $B$ is 8`,
      t`The number of onto functions from $A$ to $B$ is 6`,
      t`The number of one-one functions from $A$ to $B$ is 6`,
    ],
    answers: [0, 1, 2],
    explain: t`Relations: $2^{3\cdot2} = 64$ ✓. Functions: $2^3 = 8$ ✓. Onto: all functions except the two constant ones, $8-2 = 6$ ✓. One-one is impossible since 3 elements cannot have 3 distinct images in a 2-element set, so the count is 0 ✗.`,
  }),
  q2(3, ADV, 100, {
    kind: "mcq",
    q: t`The domain of $f(x) = \dfrac{1}{\sqrt{[x]^2-[x]-6}}$, where $[\cdot]$ is the greatest integer function, is:`,
    options: [
      t`$(-\infty,-2)\cup[4,\infty)$`,
      t`$(-\infty,-2]\cup[3,\infty)$`,
      t`$(-\infty,-2)\cup(3,\infty)$`,
      t`$(-\infty,-3)\cup[4,\infty)$`,
    ],
    answer: 0,
    hint: t`Solve for the integer $[x]$, then translate back to $x$.`,
    explain: t`We need $([x]-3)([x]+2)>0$, so $[x]>3$ or $[x]<-2$. As $[x]$ is an integer: $[x]\ge4\iff x\ge4$, and $[x]\le-3\iff x<-2$. Domain $(-\infty,-2)\cup[4,\infty)$. Reading the conditions as $x>3$ or $x<-2$ forgets that $[x] = 3$ for $x\in[3,4)$ gives 0 under the root.`,
  }),
  q2(3, ADV, 90, {
    kind: "mcq",
    q: t`The range of $f(x) = \sqrt{x-1}+\sqrt{5-x}$ is:`,
    options: [t`$[0,2\sqrt2]$`, t`$[2,2\sqrt2]$`, t`$[2,4]$`, t`$[\sqrt2,2]$`],
    answer: 1,
    hint: t`Square: $f^2 = 4+2\sqrt{(x-1)(5-x)}$.`,
    explain: t`Domain $[1,5]$. $f^2 = 4+2\sqrt{(x-1)(5-x)}$, and $(x-1)(5-x)$ runs over $[0,4]$ (maximum 4 at $x = 3$). So $f^2\in[4,8]$ and, $f$ being non-negative, $f\in[2,2\sqrt2]$. The minimum is not 0: at the ends $f = 2$.`,
  }),
  q2(3, ADV_ONLY, 100, {
    kind: "multi",
    q: t`For $f(x) = |x-2|+|x-5|$, which of the following are true?`,
    options: [
      t`The least value of $f$ is 3`,
      t`$f(x) = 3$ has infinitely many solutions`,
      t`$f(x) = 5$ has exactly two solutions`,
      t`The range of $f$ is $[0,\infty)$`,
    ],
    answers: [0, 1, 2],
    hint: "Write f piecewise on the three intervals cut by 2 and 5.",
    explain: t`$f(x) = 7-2x$ for $x<2$, $3$ on $[2,5]$, $2x-7$ for $x>5$. So the least value is 3 ✓, attained on the whole interval $[2,5]$ ✓. $f = 5$: $7-2x = 5\Rightarrow x = 1$; $2x-7 = 5\Rightarrow x = 6$ — two solutions ✓. The range is $[3,\infty)$ ✗.`,
  }),
  q2(3, ADV_ONLY, 90, {
    kind: "multi",
    q: t`Let $\{x\} = x-[x]$ denote the fractional part of $x$. Which of the following are true?`,
    options: [
      t`The range of $\{x\}$ is $[0,1)$`,
      t`$\{x\}+\{-x\} = 1$ for every non-integer $x$`,
      t`$\{x+1\} = \{x\}$ for every real $x$`,
      t`$\{2x\} = 2\{x\}$ for every real $x$`,
    ],
    answers: [0, 1, 2],
    explain: t`(a) $0\le x-[x]<1$ and every value in $[0,1)$ occurs ✓. (b) For non-integer $x$, $\{-x\} = 1-\{x\}$ ✓ (for integers the sum is 0). (c) $[x+1] = [x]+1$, so $\{x\}$ has period 1 ✓. (d) $x = 0.7$: $\{1.4\} = 0.4\ne1.4$ ✗.`,
  }),
  q2(3, ADV, 120, {
    kind: "mcq",
    q: t`If $f(x) = \dfrac{4^x}{4^x+2}$, then $\displaystyle\sum_{k=1}^{20}f\!\left(\frac{k}{21}\right)$ equals:`,
    options: [t`$10$`, t`$20$`, t`$\frac{21}2$`, t`$\frac{19}2$`],
    answer: 0,
    hint: t`Compute $f(x)+f(1-x)$.`,
    explain: t`$f(1-x) = \dfrac{4/4^x}{4/4^x+2} = \dfrac{4}{4+2\cdot4^x} = \dfrac{2}{2+4^x}$, so $f(x)+f(1-x) = 1$. Pair $k$ with $21-k$: the 20 terms form 10 pairs, each summing to 1, giving $10$.`,
  }),
];
