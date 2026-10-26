import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 11: Sets (NCERT Ch 1, Karnataka I PUC, ISC)                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-sets",
    title: "Sets (Class 11)",
    icon: "🧺",
    description: "Sets and their representations, types of sets, subsets, intervals, power set, Venn diagrams, operations on sets, laws of set algebra and counting with sets.",
    lessons: [
      {
        slug: "c11-sets-representation",
        title: "Sets, Their Representations and Subsets",
        summary: "What makes a collection a set, roster and set-builder forms, empty, finite, infinite and equal sets, subsets, intervals, power set and universal set.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧺",
            caption: "\"The rivers of India\" is a set: you can always decide whether a river belongs. \"The five best cricketers in India\" is not: people will disagree.",
          },
          {
            type: "text",
            md: t`A **set** is a **well-defined** collection of objects. "Well-defined" means that for any object we can say for certain whether it belongs to the collection or not. The objects are called **elements** (or members) of the set.

We name sets with capital letters and elements with small letters. If $a$ is an element of $A$ we write $a \in A$ ("$a$ belongs to $A$"); if not, $a \notin A$.

Standard sets used throughout the course: $\mathbf{N}$ natural numbers, $\mathbf{Z}$ integers, $\mathbf{Q}$ rational numbers, $\mathbf{R}$ real numbers, $\mathbf{Z^+}$ positive integers, $\mathbf{Q^+}$ positive rationals and $\mathbf{R^+}$ positive reals.`,
          },
          {
            type: "text",
            md: t`There are two ways to write a set.

**Roster (tabular) form**: list every element, separated by commas, inside braces: $A = \{2, 3, 5, 7\}$. Order does not matter and an element is **not repeated**: the letters of the word SCHOOL form $\{S, C, H, O, L\}$.

**Set-builder form**: describe the property every element shares: $A = \{x : x \text{ is a prime number less than } 10\}$. Read the colon as "such that".`,
          },
          {
            type: "example",
            title: "Changing between the two forms",
            problem: t`(a) Write $B = \{x : x \in \mathbf{Z},\ x^2 < 10\}$ in roster form. (b) Write $C = \{1, 4, 9, 16, 25\}$ in set-builder form.`,
            steps: [
              t`(a) We need integers whose squares are less than 10. $3^2 = 9 < 10$ but $4^2 = 16 > 10$.`,
              t`Negative integers count too: $(-3)^2 = 9 < 10$. So $x$ runs from $-3$ to $3$.`,
              t`(b) Every element of $C$ is a perfect square: $1^2, 2^2, 3^2, 4^2, 5^2$.`,
            ],
            answer: t`(a) $B = \{-3, -2, -1, 0, 1, 2, 3\}$. (b) $C = \{x : x = n^2,\ n \in \mathbf{N},\ 1 \le n \le 5\}$.`,
          },
          {
            type: "text",
            md: t`**Types of sets.**

The **empty set** (null or void set) has no elements. It is written $\phi$ or $\{\}$. Example: $\{x : x \in \mathbf{N},\ 1 < x < 2\} = \phi$.

A set is **finite** if it is empty or its elements can be counted to an end; the number of distinct elements is written $n(A)$. Otherwise it is **infinite**, like $\mathbf{N}$ or the set of points on a line. Infinite sets such as $\mathbf{R}$ cannot be written in roster form at all.

Two sets are **equal** ($A = B$) if they have exactly the same elements. A set with exactly one element is a **singleton**, e.g. $\{0\}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Which of these sets is the empty set?`,
                options: [t`$\{0\}$`, t`$\{x : x \in \mathbf{R},\ x^2 = -4\}$`, t`$\{\phi\}$`, t`$\{x : x \in \mathbf{Z},\ x^2 = 4\}$`],
                answer: 1,
                explain: t`No real number has a negative square, so that set has no elements. $\{0\}$ and $\{\phi\}$ each have one element, and the last set is $\{-2, 2\}$.`,
              },
              {
                kind: "truefalse",
                q: t`$\{1, 2, 2, 3\}$ and $\{3, 1, 2\}$ are equal sets.`,
                answer: true,
                explain: "Repeated elements are counted once and order does not matter, so both sets are {1, 2, 3}.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\{0\}$ and $\{\phi\}$ are empty sets, because they contain "nothing".`,
            right: t`$\{0\}$ has one element (the number 0) and $\{\phi\}$ has one element (the empty set). Only $\phi = \{\}$ is empty.`,
            why: "Zero and the empty set both feel like \"nothing\", so learners treat the braces around them as empty too. The braces form a box; a box holding an empty box is not empty.",
          },
          {
            type: "text",
            md: t`**Subsets.** $A$ is a **subset** of $B$, written $A \subset B$, if every element of $A$ is also an element of $B$. In symbols: $A \subset B$ if $a \in A \Rightarrow a \in B$.

Two facts follow straight from the definition: every set is a subset of itself, and $\phi$ is a subset of every set (it has no element that could fail the test). $A = B$ exactly when $A \subset B$ and $B \subset A$.

If $A \subset B$ and $A \ne B$, then $A$ is a **proper subset** of $B$ and $B$ is a **superset** of $A$. For example $\mathbf{N} \subset \mathbf{Z} \subset \mathbf{Q} \subset \mathbf{R}$. Note: $a \in A$ links an element to a set, while $\{a\} \subset A$ links a set to a set.`,
          },
          {
            type: "table",
            headers: ["Interval", "Set-builder form", "End points"],
            rows: [
              [t`Open $(a, b)$`, t`$\{x \in \mathbf{R} : a < x < b\}$`, "both excluded"],
              [t`Closed $[a, b]$`, t`$\{x \in \mathbf{R} : a \le x \le b\}$`, "both included"],
              [t`$[a, b)$`, t`$\{x \in \mathbf{R} : a \le x < b\}$`, t`$a$ included, $b$ excluded`],
              [t`$(a, b]$`, t`$\{x \in \mathbf{R} : a < x \le b\}$`, t`$a$ excluded, $b$ included`],
              [t`$[0, \infty)$`, t`$\{x \in \mathbf{R} : x \ge 0\}$`, t`$\infty$ is never included`],
            ],
          },
          {
            type: "text",
            md: t`Intervals are subsets of $\mathbf{R}$. The number $b - a$ is the **length** of each of the four intervals above. On a number line, a filled dot marks an included end point and a hollow dot an excluded one.

The **power set** $P(A)$ is the set of **all subsets** of $A$. For $A = \{1, 2\}$: $P(A) = \{\phi, \{1\}, \{2\}, \{1, 2\}\}$. Each element either goes into a subset or stays out, so a set with $m$ elements has $2^m$ subsets.

A **universal set** $U$ is the basic set that contains all the sets in a given discussion. When studying number systems, $\mathbf{R}$ can serve as $U$; for triangles, $U$ can be the set of all triangles.`,
          },
          {
            type: "formula",
            tex: t`n(A) = m \;\Rightarrow\; n\big(P(A)\big) = 2^m, \qquad \text{proper subsets} = 2^m - 1`,
            caption: "Each of the m elements is either in or out of a subset: 2 × 2 × … × 2 = 2^m choices.",
          },
          {
            type: "example",
            title: "Listing a power set",
            problem: t`Write $P(A)$ for $A = \{a, b, c\}$ and count its proper subsets.`,
            steps: [
              t`Subsets with 0 elements: $\phi$.`,
              t`With 1 element: $\{a\}, \{b\}, \{c\}$. With 2 elements: $\{a, b\}, \{b, c\}, \{a, c\}$.`,
              t`With 3 elements: $\{a, b, c\}$. Total $1 + 3 + 3 + 1 = 8 = 2^3$.`,
              t`All except $A$ itself are proper subsets: $8 - 1 = 7$.`,
            ],
            answer: t`$P(A) = \{\phi, \{a\}, \{b\}, \{c\}, \{a,b\}, \{b,c\}, \{a,c\}, \{a,b,c\}\}$; 7 proper subsets.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each set empty, finite (non-empty) or infinite?",
              groups: ["Empty", "Finite, non-empty", "Infinite"],
              items: [
                { text: "Even prime numbers greater than 2", group: 0, hint: "2 is the only even prime." },
                { text: "Months with 32 days", group: 0, hint: "No month has 32 days." },
                { text: "Letters of the word MATHEMATICS", group: 1, hint: "{M, A, T, H, E, I, C, S}: 8 letters." },
                { text: "Districts of Karnataka", group: 1, hint: "A large but countable number." },
                { text: "Points on a straight line", group: 2, hint: "Between any two points there is another." },
                { text: "Multiples of 7", group: 2, hint: "7, 14, 21, … never ends." },
                { text: "Real numbers between 0 and 1", group: 2, hint: "The interval (0, 1) never runs out of numbers." },
              ],
              explain: "A finite set can be counted to an end, however large it is. A description that no object satisfies gives the empty set, which also counts as finite.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Write braces in every answer: $\{1, 2\}$, not 1, 2. In 1-mark questions on $\in$ and $\subset$, check the type of each side first: element versus set. For "write the power set", list subsets size by size so none is missed, and state $n(P(A)) = 2^m$ as a check.`,
          },
          {
            type: "keypoints",
            items: [
              "A set is a well-defined collection; elements are not repeated and order does not matter.",
              t`Roster form lists elements; set-builder form states the property: $\{x : \ldots\}$.`,
              t`$\phi$ is a subset of every set; every set is a subset of itself.`,
              t`Intervals $(a,b)$, $[a,b]$, $[a,b)$, $(a,b]$ are subsets of $\mathbf{R}$ of length $b - a$.`,
              t`A set with $m$ elements has $2^m$ subsets and $2^m - 1$ proper subsets.`,
            ],
          },
        ],
        flashcards: [
          { front: "Well-defined collection", back: "One where we can decide for certain whether any given object belongs to it. Only such collections are sets." },
          { front: "Roster form", back: t`All elements listed in braces, each once, e.g. $\{2, 4, 6\}$.` },
          { front: "Set-builder form", back: t`$\{x : x \text{ has property } P\}$, e.g. $\{x : x \in \mathbf{N},\ x < 5\}$.` },
          { front: "Empty set", back: t`The set with no elements, written $\phi$ or $\{\}$.` },
          { front: "Proper subset", back: t`$A \subset B$ and $A \ne B$: every element of $A$ is in $B$, and $B$ has at least one more.` },
          { front: "Power set", back: t`$P(A)$, the set of all subsets of $A$. If $n(A) = m$, then $n(P(A)) = 2^m$.` },
          { front: t`Interval $[a, b)$`, back: t`$\{x \in \mathbf{R} : a \le x < b\}$: includes $a$, excludes $b$.` },
          { front: "Universal set", back: "The basic set containing all sets under discussion, usually written U." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The set of letters of the word ALLAHABAD in roster form is`,
            options: [t`$\{A, L, L, H, B, D\}$`, t`$\{A, L, H, B, D\}$`, t`$\{A, L, A, H, A, B, A, D\}$`, t`$\{L, H, B\}$`],
            answer: 1,
            explain: "Each distinct letter is written once: A, L, H, B, D.",
          },
          {
            kind: "mcq",
            q: t`$\{x : x \in \mathbf{R},\ -1 < x \le 4\}$ as an interval is`,
            options: [t`$[-1, 4)$`, t`$(-1, 4)$`, t`$(-1, 4]$`, t`$[-1, 4]$`],
            answer: 2,
            explain: t`$-1$ is excluded (round bracket) and 4 is included (square bracket).`,
          },
          {
            kind: "numeric",
            q: t`A set $A$ has 5 elements. How many elements does $P(A)$ have?`,
            answer: 32,
            explain: t`$n(P(A)) = 2^5 = 32$.`,
          },
          {
            kind: "truefalse",
            q: t`For $A = \{1, \{2, 3\}\}$, the statement $\{2, 3\} \subset A$ is true.`,
            answer: false,
            difficulty: 2,
            hint: "List the elements of A. Is 2 one of them?",
            explain: t`The elements of $A$ are $1$ and $\{2, 3\}$. So $\{2, 3\} \in A$ is true, but $\{2,3\} \subset A$ would need $2 \in A$ and $3 \in A$, which is false.`,
          },
          {
            kind: "multi",
            q: t`Which statements are true for every set $A$?`,
            options: [t`$\phi \subset A$`, t`$A \subset A$`, t`$\phi \in A$`, t`$A \in P(A)$`],
            answers: [0, 1, 3],
            explain: t`$\phi$ and $A$ are always subsets of $A$, so $A \in P(A)$. But $\phi \in A$ is true only if $\phi$ is actually listed as an element of $A$.`,
          },
          {
            kind: "fill",
            q: t`The number of proper subsets of a set with 4 elements is ___.`,
            answer: ["15"],
            explain: t`$2^4 - 1 = 15$.`,
          },
          {
            kind: "mcq",
            q: t`Which of the following is an infinite set?`,
            options: ["The set of people living in India today", "The set of factors of 1000", "The set of circles through a given point", "The set of vowels in English"],
            answer: 2,
            explain: "Through one point you can draw circles of every radius and centre direction, so there are infinitely many. The others are finite.",
          },
        ],
      },
      {
        slug: "c11-set-operations",
        title: "Venn Diagrams and Operations on Sets",
        summary: "Union, intersection, difference and complement, the laws of set algebra, De Morgan's laws and counting with n(A ∪ B).",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption: "In a class of 40, some students play cricket, some play kabaddi, and some play both. A Venn diagram shows all these groups at a glance.",
          },
          {
            type: "text",
            md: t`A **Venn diagram** (after John Venn) shows the universal set $U$ as a rectangle and its subsets as circles inside it. Overlapping circles show shared elements. It is a picture, not a proof, but it shows which region each operation picks out.

**Union** $A \cup B = \{x : x \in A \text{ or } x \in B\}$: everything in $A$, in $B$, or in both.

**Intersection** $A \cap B = \{x : x \in A \text{ and } x \in B\}$: only the common elements. If $A \cap B = \phi$, the sets are **disjoint** (circles that do not overlap).`,
          },
          {
            type: "text",
            md: t`**Difference** $A - B = \{x : x \in A \text{ and } x \notin B\}$: elements of $A$ that are not in $B$. In general $A - B \ne B - A$.

**Complement** $A' = U - A = \{x : x \in U,\ x \notin A\}$: everything in $U$ outside $A$.

The three regions $A - B$, $A \cap B$ and $B - A$ do not overlap, and together they make up $A \cup B$.`,
          },
          {
            type: "example",
            title: "All four operations at once",
            problem: t`Let $U = \{1, 2, 3, \ldots, 10\}$, $A = \{2, 4, 6, 8, 10\}$ and $B = \{1, 2, 3, 4, 5\}$. Find $A \cup B$, $A \cap B$, $A - B$, $B - A$ and $A'$.`,
            steps: [
              t`Union: put all elements together, each once: $\{1, 2, 3, 4, 5, 6, 8, 10\}$.`,
              t`Intersection: common elements: $\{2, 4\}$.`,
              t`$A - B$: remove 2 and 4 from $A$: $\{6, 8, 10\}$. $B - A$: remove 2 and 4 from $B$: $\{1, 3, 5\}$.`,
              t`$A'$: elements of $U$ not in $A$: $\{1, 3, 5, 7, 9\}$.`,
            ],
            answer: t`$A \cup B = \{1,2,3,4,5,6,8,10\}$, $A \cap B = \{2,4\}$, $A - B = \{6,8,10\}$, $B - A = \{1,3,5\}$, $A' = \{1,3,5,7,9\}$.`,
          },
          {
            type: "table",
            headers: ["Law", "Union", "Intersection"],
            rows: [
              ["Idempotent", t`$A \cup A = A$`, t`$A \cap A = A$`],
              ["Identity", t`$A \cup \phi = A$`, t`$A \cap U = A$`],
              ["Commutative", t`$A \cup B = B \cup A$`, t`$A \cap B = B \cap A$`],
              ["Associative", t`$(A \cup B) \cup C = A \cup (B \cup C)$`, t`$(A \cap B) \cap C = A \cap (B \cap C)$`],
              ["Distributive", t`$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$`, t`$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$`],
              ["Complement", t`$A \cup A' = U$`, t`$A \cap A' = \phi$`],
            ],
          },
          {
            type: "formula",
            tex: t`(A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'`,
            caption: "De Morgan's laws: the complement swaps union and intersection. Also (A′)′ = A, U′ = φ and φ′ = U.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For any sets $A$ and $B$, $A - B$ equals`,
                options: [t`$A \cap B'$`, t`$A' \cap B$`, t`$A \cup B'$`, t`$B - A$`],
                answer: 0,
                explain: t`$x \in A - B$ means $x \in A$ and $x \notin B$, that is $x \in A$ and $x \in B'$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$(A \cup B)' = A' \cup B'$: the dash just "goes inside" each set.`,
            right: t`$(A \cup B)' = A' \cap B'$. Taking the complement also flips $\cup$ to $\cap$ (and $\cap$ to $\cup$).`,
            why: t`It looks like distributing a minus sign in algebra. But "outside $A \cup B$" means outside $A$ **and** outside $B$. Shade the Venn diagram once and the swap is obvious.`,
          },
          {
            type: "text",
            md: t`**Counting with sets.** If we add $n(A)$ and $n(B)$, the elements of $A \cap B$ are counted twice, so we subtract them once. If $A$ and $B$ are disjoint, $n(A \cup B) = n(A) + n(B)$. For three sets the same idea (add singles, subtract pairs, add back the triple) gives the second formula below.`,
          },
          {
            type: "formula",
            tex: t`n(A \cup B) = n(A) + n(B) - n(A \cap B)`,
            caption: t`Three sets: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(A ∩ C) + n(A ∩ B ∩ C).`,
          },
          {
            type: "example",
            title: "A survey problem",
            problem: t`In a group of 65 people, 40 like tea and 10 like both tea and coffee. Every person likes at least one of the two. How many like coffee? How many like coffee but not tea?`,
            steps: [
              t`Let $T$ = tea lovers, $C$ = coffee lovers. Everyone likes at least one, so $n(T \cup C) = 65$.`,
              t`Use $n(T \cup C) = n(T) + n(C) - n(T \cap C)$: $65 = 40 + n(C) - 10$.`,
              t`So $n(C) = 65 - 30 = 35$.`,
              t`Coffee but not tea: $n(C - T) = n(C) - n(C \cap T) = 35 - 10 = 25$.`,
            ],
            answer: "35 people like coffee; 25 like coffee but not tea.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each shaded region to its set.",
              pairs: [
                ["Inside A only, outside B", "A − B"],
                ["The overlap of A and B", "A ∩ B"],
                ["Everything outside both circles", "(A ∪ B)′"],
                ["Everything outside the overlap", "(A ∩ B)′"],
                ["Inside at least one circle", "A ∪ B"],
              ],
              explain: "Read each symbol as a word: ∪ = or, ∩ = and, − = but not, ′ = outside. By De Morgan, (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`The survey-type "practical problems on union and intersection" and the three-set formula are not in every edition of the rationalised NCERT chapter. ISC Class 11 and KCET regularly use them, and they are needed for JEE, so learn them whatever your board.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`To "verify" a law such as De Morgan's with given sets, compute **both** sides separately and show they are equal; marks are given for each side. For survey problems, define the sets in words first ("let $T$ be the set of …"), then write the formula, then substitute.`,
          },
          {
            type: "keypoints",
            items: [
              t`$A \cup B$: in $A$ or $B$; $A \cap B$: in both; $A - B$: in $A$ but not $B$; $A' = U - A$.`,
              t`Disjoint sets have $A \cap B = \phi$; then $n(A \cup B) = n(A) + n(B)$.`,
              t`De Morgan: $(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$.`,
              t`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$; extend to three sets by inclusion and exclusion.`,
            ],
          },
        ],
        flashcards: [
          { front: "Union A ∪ B", back: t`$\{x : x \in A \text{ or } x \in B\}$: elements in A, in B, or in both.` },
          { front: "Intersection A ∩ B", back: t`$\{x : x \in A \text{ and } x \in B\}$: the common elements.` },
          { front: "Disjoint sets", back: t`Sets with no common element: $A \cap B = \phi$.` },
          { front: "Difference A − B", back: t`$\{x : x \in A,\ x \notin B\} = A \cap B'$.` },
          { front: "Complement A′", back: t`$U - A$: all elements of the universal set not in A.` },
          { front: "De Morgan's laws", back: t`$(A \cup B)' = A' \cap B'$ and $(A \cap B)' = A' \cup B'$.` },
          { front: "Distributive law (∩ over ∪)", back: t`$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.` },
          { front: "Counting formula for two sets", back: t`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $A = \{1, 3, 5, 7\}$ and $B = \{3, 4, 5, 6\}$, then $B - A$ is`,
            options: [t`$\{1, 7\}$`, t`$\{4, 6\}$`, t`$\{3, 5\}$`, t`$\{1, 4, 6, 7\}$`],
            answer: 1,
            explain: t`Remove the common elements 3 and 5 from $B$: $\{4, 6\}$. $\{1, 7\}$ is $A - B$.`,
          },
          {
            kind: "mcq",
            q: t`$(A \cap B)'$ is equal to`,
            options: [t`$A' \cap B'$`, t`$A' \cup B'$`, t`$A \cup B$`, t`$A' - B'$`],
            answer: 1,
            explain: "De Morgan's law: the complement of an intersection is the union of the complements.",
          },
          {
            kind: "numeric",
            q: t`$n(A) = 25$, $n(B) = 18$ and $n(A \cup B) = 35$. Find $n(A \cap B)$.`,
            answer: 8,
            explain: t`$n(A \cap B) = n(A) + n(B) - n(A \cup B) = 25 + 18 - 35 = 8$.`,
          },
          {
            kind: "truefalse",
            q: t`For all sets, $A - B = B - A$.`,
            answer: false,
            explain: t`In the worked example $A - B = \{6, 8, 10\}$ but $B - A = \{1, 3, 5\}$. They are equal only when $A = B$.`,
          },
          {
            kind: "multi",
            q: t`Which of these are always true?`,
            options: [t`$A \cup A' = U$`, t`$A \cap \phi = A$`, t`$A \cup (A \cap B) = A$`, t`$(A')' = A$`],
            answers: [0, 2, 3],
            explain: t`$A \cap \phi = \phi$, not $A$. The others are the complement law, the absorption law and double complement.`,
          },
          {
            kind: "numeric",
            q: t`In a class of 50 students, 30 study Sanskrit, 25 study French and 8 study neither. How many study both?`,
            answer: 13,
            difficulty: 2,
            hint: "First find how many study at least one language.",
            explain: t`$n(S \cup F) = 50 - 8 = 42$. Then $n(S \cap F) = 30 + 25 - 42 = 13$.`,
          },
          {
            kind: "mcq",
            q: t`If $A \subset B$, then $A \cap B$ and $A \cup B$ are`,
            options: [t`$A$ and $B$`, t`$B$ and $A$`, t`$\phi$ and $U$`, t`$A$ and $A$`],
            answer: 0,
            explain: t`Every element of $A$ is already in $B$, so the common part is $A$ and putting them together gives $B$.`,
          },
        ],
      },
      {
        slug: "c11-sets-exam-edge",
        title: "Exam edge: Sets",
        summary: "What JEE Main, KCET and COMEDK ask from sets: counting subsets, three-set surveys, bounds on intersections and counting ordered pairs of subsets.",
        minutes: 20,
        xp: 55,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Sets is a short, scoring chapter. **KCET** and **COMEDK** usually ask 1–2 direct questions: number of subsets, power sets, intervals, $n(A \cup B)$ and survey counts. **JEE Main** asks set questions less often, and usually mixes them with relations or counting (for example, "how many ordered pairs of subsets …"). **JEE Advanced** uses set language everywhere, so fluency here pays off across the syllabus. There is no NEET Maths.`,
          },
          {
            type: "text",
            md: t`**Results worth remembering.**

1. $n(A) = m$: subsets $2^m$; proper subsets $2^m - 1$; non-empty proper subsets $2^m - 2$; subsets with exactly $r$ elements $\binom{m}{r}$ (from *Permutations and Combinations*).

2. **Symmetric difference** $A \,\Delta\, B = (A - B) \cup (B - A)$, and $n(A \,\Delta\, B) = n(A) + n(B) - 2\,n(A \cap B)$.

3. For three sets, "exactly one" $= \Sigma n(A) - 2\,\Sigma n(A \cap B) + 3\,n(A \cap B \cap C)$ and "exactly two" $= \Sigma n(A \cap B) - 3\,n(A \cap B \cap C)$. Safe only when all seven region counts come from the same data; when in doubt, fill a Venn diagram from the centre outwards.`,
          },
          {
            type: "formula",
            tex: t`\max\{0,\ n(A) + n(B) - n(U)\} \;\le\; n(A \cap B) \;\le\; \min\{n(A),\ n(B)\}`,
            caption: "Smallest overlap: when A ∪ B fills as much of U as possible. Largest overlap: when the smaller set sits inside the larger.",
          },
          {
            type: "example",
            title: "KCET level: counting subsets",
            problem: t`(a) A set $A$ has 4 elements. How many subsets of $A$ have at least 2 elements? (b) Find $n\big(P(P(\phi))\big)$.`,
            steps: [
              t`(a) Total subsets $= 2^4 = 16$. Remove the empty set (1) and the singletons (4).`,
              t`Subsets with at least 2 elements $= 16 - 1 - 4 = 11$.`,
              t`(b) $\phi$ has 0 elements, so $P(\phi) = \{\phi\}$ has $2^0 = 1$ element.`,
              t`Then $P(P(\phi))$ has $2^1 = 2$ elements: $\{\phi, \{\phi\}\}$.`,
            ],
            answer: "(a) 11. (b) 2.",
          },
          {
            type: "example",
            title: "JEE Main level: a three-set survey",
            problem: t`Of 100 students, 50 take Maths, 45 Physics and 40 Chemistry; 20 take Maths and Physics, 15 Physics and Chemistry, 18 Maths and Chemistry, and 10 take all three. How many take none of these? How many take exactly one?`,
            steps: [
              t`$n(M \cup P \cup C) = 50 + 45 + 40 - 20 - 15 - 18 + 10 = 92$. None $= 100 - 92 = 8$.`,
              t`Fill the Venn diagram from the centre: all three = 10; M and P only $= 20 - 10 = 10$; P and C only $= 15 - 10 = 5$; M and C only $= 18 - 10 = 8$.`,
              t`Only M $= 50 - 10 - 8 - 10 = 22$; only P $= 45 - 10 - 5 - 10 = 20$; only C $= 40 - 5 - 8 - 10 = 17$.`,
              t`Exactly one $= 22 + 20 + 17 = 59$. Check with the shortcut: $135 - 2(53) + 3(10) = 59$. Also $59 + 23 + 10 = 92$.`,
            ],
            answer: "8 take none; 59 take exactly one subject.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$n(A) = 12$, $n(B) = 9$, $n(A \cap B) = 4$. Find $n(A \,\Delta\, B)$.`,
                answer: 13,
                explain: t`$n(A \,\Delta\, B) = 12 + 9 - 2(4) = 13$ (that is, $8$ in $A$ only plus $5$ in $B$ only).`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: bounds on an overlap",
            problem: t`In a city, 70% of families read a Hindi newspaper and 80% read an English newspaper. What are the least and greatest possible percentages of families that read both?`,
            steps: [
              t`Take $n(U) = 100$, $n(H) = 70$, $n(E) = 80$.`,
              t`$n(H \cup E) \le 100$, so $n(H \cap E) = 70 + 80 - n(H \cup E) \ge 150 - 100 = 50$.`,
              t`The overlap cannot exceed the smaller set: $n(H \cap E) \le 70$, reached when every Hindi reader also reads English.`,
            ],
            answer: "At least 50% and at most 70% read both.",
          },
          {
            type: "mistake",
            wrong: t`To find how many take "only Maths", subtract $n(M \cap P)$ and $n(M \cap C)$ from $n(M)$: $50 - 20 - 18 = 12$.`,
            right: t`The 10 students in all three were subtracted twice. Only Maths $= 50 - 20 - 18 + 10 = 22$.`,
            why: "Each pairwise overlap already contains the triple overlap. Filling the Venn diagram from the centre outwards avoids this double subtraction.",
          },
          {
            type: "example",
            title: "JEE Advanced level: ordered pairs of subsets",
            problem: t`$X$ is a set with 5 elements. How many ordered pairs $(A, B)$ of subsets of $X$ satisfy (a) $A \cap B = \phi$, (b) $A \subset B$, (c) $A \cap B = \phi$ and $A \cup B = X$?`,
            steps: [
              t`Decide each element of $X$ separately and multiply (multiplication principle).`,
              t`(a) Each element is in $A$ only, in $B$ only, or in neither (not both): 3 choices. Total $3^5 = 243$.`,
              t`(b) Each element is in both, in $B$ only, or in neither (never "$A$ only"): again $3^5 = 243$.`,
              t`(c) Each element must be in exactly one of $A$, $B$: 2 choices. Total $2^5 = 32$.`,
            ],
            answer: "(a) 243, (b) 243, (c) 32.",
          },
          {
            type: "mistake",
            wrong: t`If $A \cap B = A \cap C$, then $B = C$ (cancel $A$ like a common factor).`,
            right: t`Sets do not cancel. Take $A = \phi$: then $A \cap B = A \cap C = \phi$ for every $B$ and $C$. The cancellation is valid only if **both** $A \cap B = A \cap C$ and $A \cup B = A \cup C$.`,
            why: "Set algebra looks like number algebra, but there is no inverse for ∩ or ∪. A single counter-example kills a general claim.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`How many elements does $\{\phi, \{\phi\}\}$ have?`,
              emoji: "📦",
              options: ["0", "1", "2", "3"],
              answer: 2,
              trap: 0,
              explain: t`Its elements are $\phi$ and $\{\phi\}$: two different objects. An empty box and a box holding an empty box are both things you can count.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When are the shortcuts safe?",
            md: t`Use $2^m$ only for **distinct** elements: first remove repeats ($\{1,1,2\}$ has 2 elements). The intersection bounds assume all sets lie in the same $U$. In multiple-choice tests, a quick Venn diagram with numbers in all regions is the safest check; the region counts must add up to $n(U)$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Subsets $2^m$, proper $2^m - 1$, non-empty proper $2^m - 2$.`,
              t`$\max\{0, n(A) + n(B) - n(U)\} \le n(A \cap B) \le \min\{n(A), n(B)\}$.`,
              t`Fill three-set Venn diagrams from the centre outwards.`,
              t`Count ordered pairs of subsets element by element: $3^n$ for $A \cap B = \phi$ or $A \subset B$.`,
              "Set operations do not cancel; test claims with A = φ.",
            ],
          },
        ],
        flashcards: [
          { front: "Non-empty proper subsets of an m-element set", back: t`$2^m - 2$ (remove both $\phi$ and the set itself).` },
          { front: "Symmetric difference", back: t`$A \,\Delta\, B = (A - B) \cup (B - A)$; $n = n(A) + n(B) - 2n(A \cap B)$.` },
          { front: "Three-set union", back: t`$\Sigma n(A) - \Sigma n(A \cap B) + n(A \cap B \cap C)$.` },
          { front: "Least possible n(A ∩ B)", back: t`$\max\{0,\ n(A) + n(B) - n(U)\}$.` },
          { front: "Greatest possible n(A ∩ B)", back: t`$\min\{n(A), n(B)\}$.` },
          { front: t`Ordered pairs $(A, B)$ of subsets of an $n$-set with $A \subset B$`, back: t`$3^n$: each element is in both, in B only, or in neither.` },
          { front: t`$n(P(P(\phi)))$`, back: t`2, since $P(\phi) = \{\phi\}$ has one element.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$n(A) = 3$ and $n(B) = 6$. The least possible value of $n(A \cup B)$ is`,
            options: ["3", "6", "9", "18"],
            answer: 1,
            explain: t`$n(A \cup B)$ is least when $A \subset B$; then $A \cup B = B$ with 6 elements.`,
          },
          {
            kind: "numeric",
            q: t`Of 200 students, 120 speak Hindi, 90 Kannada and 70 English; 40 speak Hindi and Kannada, 30 Kannada and English, 35 Hindi and English, and 20 speak all three. How many speak none of the three?`,
            answer: 5,
            difficulty: 2,
            explain: t`$n(H \cup K \cup E) = 120 + 90 + 70 - 40 - 30 - 35 + 20 = 195$, so $200 - 195 = 5$ speak none.`,
          },
          {
            kind: "numeric",
            q: t`With the same data, how many students speak exactly two of the three languages?`,
            answer: 45,
            difficulty: 2,
            hint: "Subtract the triple overlap from each pairwise overlap.",
            explain: t`$(40 - 20) + (30 - 20) + (35 - 20) = 20 + 10 + 15 = 45$.`,
          },
          {
            kind: "multi",
            q: t`Which identities hold for all sets $A$, $B$, $C$?`,
            options: [t`$A - (B \cup C) = (A - B) \cap (A - C)$`, t`$A - (B \cap C) = (A - B) \cup (A - C)$`, t`$A \cap (B - C) = (A \cap B) - (A \cap C)$`, t`$(A \cup B) - B = A$`],
            answers: [0, 1, 2],
            difficulty: 3,
            hint: t`Write $A - X$ as $A \cap X'$ and apply De Morgan.`,
            explain: t`$A - (B \cup C) = A \cap B' \cap C'$, which is $(A - B) \cap (A - C)$; the second is the same with De Morgan for $\cap$; the third follows from $A \cap B \cap C'$. But $(A \cup B) - B = A - B$, which equals $A$ only when $A \cap B = \phi$.`,
          },
          {
            kind: "numeric",
            q: t`$X$ has 4 elements. How many ordered pairs $(A, B)$ of subsets of $X$ satisfy $A \subset B$?`,
            answer: 81,
            difficulty: 2,
            explain: t`Each element is in both, in $B$ only, or in neither: $3^4 = 81$.`,
          },
          {
            kind: "mcq",
            q: t`$n(U) = 20$, $n(A) = 10$, $n(B) = 15$. The greatest possible value of $n(A' \cap B')$ is`,
            options: ["5", "10", "0", "15"],
            answer: 0,
            difficulty: 2,
            hint: t`$A' \cap B' = (A \cup B)'$.`,
            explain: t`$n(A' \cap B') = 20 - n(A \cup B)$, and $n(A \cup B) \ge 15$. So the greatest value is $20 - 15 = 5$, when $A \subset B$.`,
          },
          {
            kind: "truefalse",
            q: t`If $A \cup B = A \cup C$, then $B = C$.`,
            answer: false,
            explain: t`Take $A = U$: then $A \cup B = A \cup C = U$ for any $B$ and $C$.`,
          },
          {
            kind: "mcq",
            q: t`The number of non-empty proper subsets of $\{a, e, i, o, u\}$ is`,
            options: ["32", "31", "30", "25"],
            answer: 2,
            explain: t`$2^5 - 2 = 30$: drop both $\phi$ and the full set.`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 11: Relations and Functions (NCERT Ch 2, Karnataka I PUC, ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-relations-functions",
    title: "Relations and Functions (Class 11)",
    icon: "🔗",
    description: "Ordered pairs and Cartesian products, relations with domain, codomain and range, functions, standard real functions and their graphs, and the algebra of real functions.",
    lessons: [
      {
        slug: "c11-cartesian-relations",
        title: "Cartesian Products and Relations",
        summary: "Ordered pairs, the Cartesian product A × B and its size, relations as subsets of A × B, and domain, codomain and range of a relation.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "👕",
            caption: "Riya has 3 kurtas and 2 dupattas. Every outfit is a pair (kurta, dupatta), so she has 3 × 2 = 6 outfits. That list of pairs is a Cartesian product.",
          },
          {
            type: "text",
            md: t`An **ordered pair** $(a, b)$ is a pair in which the order matters: $a$ is the **first element** and $b$ the **second**. So $(2, 5) \ne (5, 2)$.

Two ordered pairs are **equal** only when their corresponding elements are equal: $(a, b) = (x, y)$ if and only if $a = x$ and $b = y$.`,
          },
          {
            type: "text",
            md: t`The **Cartesian product** of non-empty sets $A$ and $B$ is the set of all ordered pairs whose first element is from $A$ and second element is from $B$:

$A \times B = \{(a, b) : a \in A,\ b \in B\}$.

If either set is empty, $A \times B = \phi$. If $n(A) = p$ and $n(B) = q$, then $n(A \times B) = pq$. If one of the sets is infinite (and the other non-empty), so is $A \times B$.

We also write $A \times A \times A = \{(a, b, c) : a, b, c \in A\}$, whose elements are **ordered triplets**. The plane $\mathbf{R} \times \mathbf{R}$ is the set of all points $(x, y)$ in coordinate geometry, and $\mathbf{R} \times \mathbf{R} \times \mathbf{R}$ is three-dimensional space.`,
          },
          {
            type: "example",
            title: "Equal pairs and a product",
            problem: t`(a) Find $x$ and $y$ if $(x + 2,\ 3y - 1) = (5,\ 8)$. (b) If $A = \{1, 2\}$ and $B = \{p, q, r\}$, write $A \times B$ and $B \times A$.`,
            steps: [
              t`(a) Equate first elements: $x + 2 = 5$, so $x = 3$. Equate second elements: $3y - 1 = 8$, so $y = 3$.`,
              t`(b) Pair each element of $A$ with each element of $B$: $A \times B = \{(1,p), (1,q), (1,r), (2,p), (2,q), (2,r)\}$.`,
              t`For $B \times A$, the first element comes from $B$: $\{(p,1), (p,2), (q,1), (q,2), (r,1), (r,2)\}$.`,
              t`Both have $2 \times 3 = 6$ elements, but $(1, p) \in A \times B$ while $(1, p) \notin B \times A$.`,
            ],
            answer: t`(a) $x = 3$, $y = 3$. (b) Six pairs each; $A \times B \ne B \times A$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$n(A) = 3$ and $n(B) = 4$. How many elements does $A \times B$ have?`,
                answer: 12,
                explain: t`$n(A \times B) = n(A) \times n(B) = 3 \times 4 = 12$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$A \times B$ and $B \times A$ are the same set, since both have $pq$ elements.`,
            right: t`They have the same **number** of elements but contain different pairs. $A \times B = B \times A$ only when $A = B$ (or one of them is empty).`,
            why: "Multiplication of numbers is commutative, so the × sign suggests the order does not matter. But the elements here are ordered pairs, and (1, p) is not (p, 1).",
          },
          {
            type: "text",
            md: t`A **relation** $R$ from a non-empty set $A$ to a non-empty set $B$ is a **subset** of $A \times B$. It is usually given by a rule linking the first and second elements, e.g. $R = \{(x, y) : y = 2x\}$.

If $(a, b) \in R$, then $b$ is the **image** of $a$ and $a$ is a **pre-image** of $b$.

The **domain** of $R$ is the set of all first elements of its pairs. The **range** is the set of all second elements (all images). The whole set $B$ is the **codomain**, so range $\subset$ codomain.`,
          },
          {
            type: "formula",
            tex: t`n(A) = p,\ n(B) = q \;\Rightarrow\; n(A \times B) = pq, \qquad \text{number of relations from } A \text{ to } B = 2^{pq}`,
            caption: "Each relation is a subset of A × B, and a set with pq elements has 2^(pq) subsets (including φ and A × B itself).",
          },
          {
            type: "example",
            title: "Domain, codomain and range",
            problem: t`Let $A = \{1, 2, 3, 4, 5, 6\}$. Define $R$ on $A$ by $R = \{(x, y) : y = x + 2\}$. Write $R$ in roster form and find its domain, codomain and range.`,
            steps: [
              t`Try each $x \in A$ and keep the pair only if $y = x + 2$ is also in $A$: $x = 1 \to 3$, $2 \to 4$, $3 \to 5$, $4 \to 6$. For $x = 5, 6$ the image 7, 8 is not in $A$.`,
              t`So $R = \{(1, 3), (2, 4), (3, 5), (4, 6)\}$.`,
              t`Domain = first elements = $\{1, 2, 3, 4\}$. Range = second elements = $\{3, 4, 5, 6\}$.`,
              t`The relation is "on $A$", so the codomain is $A = \{1, 2, 3, 4, 5, 6\}$.`,
            ],
            answer: t`$R = \{(1,3), (2,4), (3,5), (4,6)\}$; domain $\{1,2,3,4\}$; range $\{3,4,5,6\}$; codomain $A$.`,
          },
          {
            type: "table",
            headers: ["Way to show a relation", "For R in the example above"],
            rows: [
              ["Set-builder form", t`$\{(x, y) : y = x + 2,\ x, y \in A\}$`],
              ["Roster form", t`$\{(1,3), (2,4), (3,5), (4,6)\}$`],
              ["Arrow diagram", "Two ovals listing A and A; arrows 1 → 3, 2 → 4, 3 → 5, 4 → 6"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`$n(A) = 2$, $n(B) = 3$. How many relations from $A$ to $B$?`,
              emoji: "🔗",
              options: ["6", "8", "64", "9"],
              answer: 2,
              trap: 0,
              explain: t`6 is the number of **pairs** in $A \times B$. A relation is any subset of those 6 pairs, so there are $2^6 = 64$ relations.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`When asked for domain and range, write the relation in roster form first; marks are often split between the roster form and the two sets. Write ordered pairs with round brackets and sets with braces. In "find $A$ and $B$ from $A \times B$", the set of first elements is $A$ and the set of second elements is $B$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$(a, b) = (x, y)$ if and only if $a = x$ and $b = y$.`,
              t`$A \times B = \{(a, b) : a \in A, b \in B\}$ and $n(A \times B) = n(A) \cdot n(B)$.`,
              t`In general $A \times B \ne B \times A$.`,
              t`A relation from $A$ to $B$ is a subset of $A \times B$; there are $2^{pq}$ of them.`,
              "Domain = first elements, range = images, codomain = the whole of B; range ⊂ codomain.",
            ],
          },
        ],
        flashcards: [
          { front: "Ordered pair equality", back: t`$(a, b) = (x, y) \iff a = x$ and $b = y$.` },
          { front: "Cartesian product A × B", back: t`$\{(a, b) : a \in A,\ b \in B\}$.` },
          { front: "n(A × B)", back: t`$n(A) \times n(B)$.` },
          { front: t`$A \times \phi$`, back: t`$\phi$: there is nothing to pair with.` },
          { front: "Relation from A to B", back: t`Any subset of $A \times B$.` },
          { front: "Domain and range of a relation", back: "Domain: set of first elements. Range: set of second elements (images)." },
          { front: "Codomain", back: "The set B in a relation from A to B. The range is a subset of it." },
          { front: "Number of relations from A to B", back: t`$2^{pq}$, where $n(A) = p$, $n(B) = q$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $\left(\frac{x}{3} + 1,\ y - \frac{2}{3}\right) = \left(\frac{5}{3},\ \frac{1}{3}\right)$, then $(x, y)$ is`,
            options: [t`$(2, 1)$`, t`$(5, 1)$`, t`$(2, \frac{1}{3})$`, t`$(\frac{2}{3}, 1)$`],
            answer: 0,
            explain: t`$\frac{x}{3} = \frac{5}{3} - 1 = \frac{2}{3}$ gives $x = 2$; $y = \frac{1}{3} + \frac{2}{3} = 1$.`,
          },
          {
            kind: "numeric",
            q: t`$n(A) = 2$ and $n(B) = 2$. How many relations are there from $A$ to $B$?`,
            answer: 16,
            explain: t`$n(A \times B) = 4$, so there are $2^4 = 16$ relations.`,
          },
          {
            kind: "mcq",
            q: t`$R = \{(x, x^3) : x \text{ is a prime number less than } 10\}$. The range of $R$ is`,
            options: [t`$\{2, 3, 5, 7\}$`, t`$\{8, 27, 125, 343\}$`, t`$\{1, 8, 27, 125, 343\}$`, t`$\{8, 27, 64, 125\}$`],
            answer: 1,
            explain: t`The primes below 10 are 2, 3, 5, 7 (1 is not prime). Their cubes are 8, 27, 125, 343.`,
          },
          {
            kind: "truefalse",
            q: t`If $A = \{1, 2\}$ and $B = \{3, 4\}$, then $A \times (B \cap \phi) = \phi$.`,
            answer: true,
            explain: t`$B \cap \phi = \phi$, and the Cartesian product with an empty set is empty.`,
          },
          {
            kind: "multi",
            q: t`$A = \{1, 2, 3\}$, $B = \{1, 4, 9\}$ and $R = \{(x, y) : y = x^2,\ x \in A,\ y \in B\}$. Which are true?`,
            options: [t`Domain of $R$ is $\{1, 2, 3\}$`, t`Range of $R$ is $\{1, 4, 9\}$`, t`$(4, 2) \in R$`, t`$R \subset A \times B$`],
            answers: [0, 1, 3],
            explain: t`$R = \{(1,1), (2,4), (3,9)\}$. The pair $(4, 2)$ is reversed: 4 is not even in $A$.`,
          },
          {
            kind: "mcq",
            q: t`$A \times A$ has 9 elements, two of which are $(-1, 0)$ and $(0, 1)$. Then $A$ is`,
            options: [t`$\{-1, 0\}$`, t`$\{0, 1\}$`, t`$\{-1, 0, 1\}$`, t`$\{-1, 1\}$`],
            answer: 2,
            difficulty: 2,
            hint: t`$n(A)^2 = 9$. Which numbers must be in $A$?`,
            explain: t`$n(A) = 3$, and the given pairs show $-1, 0, 1 \in A$. So $A = \{-1, 0, 1\}$.`,
          },
          {
            kind: "fill",
            q: t`If $A \times B = \{(a, x), (a, y), (b, x), (b, y)\}$, then $B$ = ___ (write in roster form).`,
            answer: ["{x, y}", "{x,y}", "{y, x}", "{y,x}"],
            explain: t`The second elements of the pairs are $x$ and $y$, so $B = \{x, y\}$ (and $A = \{a, b\}$).`,
          },
        ],
      },
      {
        slug: "c11-functions-standard",
        title: "Functions and Standard Real Functions",
        summary: "When a relation is a function, real functions, and the identity, constant, polynomial, rational, modulus, signum and greatest integer functions with their graphs.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🥤",
            caption: "Press a button on a vending machine and exactly one drink comes out. Two buttons may give the same drink, but one button never gives two different drinks.",
          },
          {
            type: "text",
            md: t`A relation $f$ from a set $A$ to a set $B$ is a **function** if **every** element of $A$ has **one and only one** image in $B$. We write $f : A \to B$ and $y = f(x)$; $y$ is the **image** of $x$ under $f$, and $x$ is a pre-image of $y$.

So a function is a relation with two extra rules: (1) every element of $A$ is used as a first element, and (2) no first element repeats with different second elements. $A$ is the **domain**, $B$ the **codomain**, and the set of all images is the **range** (a subset of $B$).`,
          },
          {
            type: "example",
            title: "Which relations are functions?",
            problem: t`Which of these relations are functions? Give the domain and range of each function. (a) $\{(1, 7), (3, 7), (5, 7)\}$ (b) $\{(0, 0), (1, 1), (1, -1)\}$ (c) $\{(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)\}$`,
            steps: [
              t`(a) The first elements $1, 3, 5$ are all different, so each has exactly one image. It is a function (all images equal is allowed). Domain $\{1, 3, 5\}$, range $\{7\}$.`,
              t`(b) The element $1$ has two images, $1$ and $-1$. Not a function.`,
              t`(c) The first elements $-2, -1, 0, 1, 2$ are all different. It is a function: domain $\{-2, -1, 0, 1, 2\}$, range $\{0, 1, 4\}$.`,
            ],
            answer: "(a) and (c) are functions; (b) is not.",
          },
          {
            type: "text",
            md: t`A function whose range is a subset of $\mathbf{R}$ is a **real-valued function**. If its domain is also a subset of $\mathbf{R}$, it is a **real function**. Most functions in this course are real functions given by a formula, e.g. $f(x) = x^2 + 1$: then $f(-2) = 5$, $f(0) = 1$ and $f(3) = 10$.

The **graph** of a real function is the set of points $(x, f(x))$ in the plane. A curve is the graph of a function exactly when every vertical line meets it at most once.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these relations is a function?",
                options: [t`$\{(1, 2), (2, 3), (1, 4)\}$`, t`$\{(2, 1), (3, 1), (4, 2)\}$`, t`$\{(5, 1), (5, 2), (5, 3)\}$`, t`$\{(1, 1), (1, 2)\}$`],
                answer: 1,
                explain: t`Only in $\{(2,1), (3,1), (4,2)\}$ does each first element appear once. Sharing the image 1 is allowed.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\{(2, 1), (3, 1)\}$ is not a function because two elements have the same image 1.`,
            right: "Two inputs may share an output. A relation fails to be a function only if some input has two different outputs, or some element of the domain has no output at all.",
            why: "Learners mix up \"function\" with \"one-one function\" (a Class 12 idea). The rule is about each input, not each output.",
          },
          {
            type: "table",
            headers: ["Function", "Rule", "Domain", "Range", "Graph"],
            rows: [
              ["Identity", t`$f(x) = x$`, t`$\mathbf{R}$`, t`$\mathbf{R}$`, "line through the origin at 45°"],
              ["Constant", t`$f(x) = c$`, t`$\mathbf{R}$`, t`$\{c\}$`, "horizontal line y = c"],
              ["Polynomial", t`$a_0 + a_1x + \cdots + a_nx^n$, $n \in \mathbf{N} \cup \{0\}$`, t`$\mathbf{R}$`, "depends on f", "smooth unbroken curve, e.g. parabola for x²"],
              ["Rational", t`$\frac{f(x)}{g(x)}$, $f, g$ polynomials`, t`$\{x : g(x) \ne 0\}$`, "depends on f", t`e.g. $\frac{1}{x}$: two branches in quadrants I and III`],
              ["Modulus", t`$f(x) = |x|$`, t`$\mathbf{R}$`, t`$[0, \infty)$`, "V shape with vertex at O"],
              ["Signum", "see formula below", t`$\mathbf{R}$`, t`$\{-1, 0, 1\}$`, "y = −1 for x < 0, point (0, 0), y = 1 for x > 0"],
              ["Greatest integer", t`$f(x) = [x]$`, t`$\mathbf{R}$`, t`$\mathbf{Z}$`, "steps; each step closed on the left, open on the right"],
            ],
          },
          {
            type: "formula",
            tex: t`|x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases} \qquad \operatorname{sgn}(x) = \begin{cases} \dfrac{|x|}{x}, & x \ne 0 \\ 0, & x = 0 \end{cases} = \begin{cases} 1, & x > 0 \\ 0, & x = 0 \\ -1, & x < 0 \end{cases}`,
            caption: "Modulus and signum functions, both defined for every real x.",
          },
          {
            type: "text",
            md: t`The **greatest integer function** $f(x) = [x]$ gives the greatest integer **less than or equal to** $x$. For example $[3.7] = 3$, $[5] = 5$, $[-0.4] = -1$ and $[-2.7] = -3$.

For $n \le x < n + 1$ (with $n$ an integer), $[x] = n$. So on $[0, 1)$ the value is 0, on $[1, 2)$ it is 1, on $[-1, 0)$ it is $-1$, and so on: the graph is a staircase with a filled dot at the left end of each step and a hollow dot at the right end.`,
          },
          {
            type: "example",
            title: "Evaluating standard functions",
            problem: t`Find (a) $|{-6}| + |2 - 5|$, (b) $\operatorname{sgn}(-3) + \operatorname{sgn}(0) + \operatorname{sgn}(\sqrt{2})$, (c) $[2.5] + [-2.5] + [\pi]$.`,
            steps: [
              t`(a) $|{-6}| = 6$ and $|2 - 5| = |{-3}| = 3$. Sum $= 9$.`,
              t`(b) $\operatorname{sgn}(-3) = -1$, $\operatorname{sgn}(0) = 0$, $\operatorname{sgn}(\sqrt{2}) = 1$. Sum $= 0$.`,
              t`(c) $[2.5] = 2$. The greatest integer not exceeding $-2.5$ is $-3$. $[\pi] = [3.14\ldots] = 3$.`,
              t`Sum for (c) $= 2 + (-3) + 3 = 2$.`,
            ],
            answer: "(a) 9, (b) 0, (c) 2.",
          },
          {
            type: "mistake",
            wrong: t`$[-2.7] = -2$, because we just drop the decimal part.`,
            right: t`$[-2.7] = -3$. On the number line, $-3$ is the nearest integer **to the left of** $-2.7$.`,
            why: "Dropping the decimal works for positive numbers, so it feels like a rule. For negative numbers, dropping the decimal moves right, giving an integer greater than x.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each function to its range.",
              pairs: [
                ["f(x) = |x|", "[0, ∞)"],
                ["f(x) = sgn(x)", "{−1, 0, 1}"],
                ["f(x) = [x]", "the set of integers Z"],
                ["f(x) = 7", "{7}"],
                ["f(x) = x", "all real numbers R"],
              ],
              explain: "The modulus is never negative, the signum takes only three values, and the greatest integer function always outputs an integer.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`"Draw the graph" questions carry marks for a table of values, correct shape and labelled axes. For $[x]$ and $\operatorname{sgn}(x)$, show filled and hollow dots clearly; a staircase without them loses marks. For "is this relation a function?", always give the reason (the element with two images, or the element with none).`,
          },
          {
            type: "keypoints",
            items: [
              "A function assigns every element of the domain exactly one image.",
              "Different inputs may share an image; one input may not have two images.",
              t`Real function: domain and range are subsets of $\mathbf{R}$.`,
              t`$|x| \ge 0$; $\operatorname{sgn}(x) \in \{-1, 0, 1\}$; $[x]$ is the greatest integer $\le x$.`,
              t`A rational function $\frac{f(x)}{g(x)}$ is defined wherever $g(x) \ne 0$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Function", back: "A relation from A to B in which every element of A has exactly one image in B." },
          { front: "Real function", back: "A function whose domain and range are both subsets of R." },
          { front: "Vertical line test", back: "A curve is the graph of a function if no vertical line meets it more than once." },
          { front: "Modulus function", back: t`$|x| = x$ for $x \ge 0$ and $-x$ for $x < 0$. Range $[0, \infty)$.` },
          { front: "Signum function", back: t`$1$ for $x > 0$, $0$ for $x = 0$, $-1$ for $x < 0$. Range $\{-1, 0, 1\}$.` },
          { front: "Greatest integer function", back: t`$[x]$ = greatest integer $\le x$, e.g. $[-1.2] = -2$. Range $\mathbf{Z}$.` },
          { front: "Rational function", back: t`$\frac{f(x)}{g(x)}$ with $f, g$ polynomials, defined where $g(x) \ne 0$.` },
          { front: "Constant function", back: t`$f(x) = c$ for all $x$; range $\{c\}$; graph a horizontal line.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $[-3.2]$.`,
            answer: -4,
            explain: t`The greatest integer less than or equal to $-3.2$ is $-4$.`,
          },
          {
            kind: "numeric",
            q: t`$f(x) = x^2 - 3x + 2$. Find $f(-1)$.`,
            answer: 6,
            explain: t`$f(-1) = 1 + 3 + 2 = 6$.`,
          },
          {
            kind: "mcq",
            q: "The range of the signum function is",
            options: [t`$\mathbf{R}$`, t`$\{-1, 1\}$`, t`$\{-1, 0, 1\}$`, t`$[-1, 1]$`],
            answer: 2,
            explain: t`$\operatorname{sgn}(0) = 0$, so 0 is in the range as well as $\pm 1$; nothing else is.`,
          },
          {
            kind: "truefalse",
            q: "The range of the modulus function is R.",
            answer: false,
            explain: t`$|x| \ge 0$ always, so the range is $[0, \infty)$.`,
          },
          {
            kind: "mcq",
            q: t`$[2.999]$ equals`,
            options: ["3", "2", "2.999", "−3"],
            answer: 1,
            explain: t`$2 \le 2.999 < 3$, so $[2.999] = 2$. Rounding is not the same as the greatest integer function.`,
          },
          {
            kind: "fill",
            q: t`For $x < 0$, $|x|$ = ___ (in terms of $x$).`,
            answer: ["-x", "−x"],
            explain: t`For negative $x$, $-x$ is positive: e.g. $|{-4}| = -(-4) = 4$.`,
          },
          {
            kind: "multi",
            q: t`Which of these real functions have domain $\mathbf{R}$?`,
            options: [t`$f(x) = |x|$`, t`$f(x) = [x]$`, t`$f(x) = \frac{1}{x}$`, t`$f(x) = x^3 - 2x$`],
            answers: [0, 1, 3],
            explain: t`$\frac{1}{x}$ is not defined at $x = 0$; its domain is $\mathbf{R} - \{0\}$. The others are defined for every real $x$.`,
          },
          {
            kind: "mcq",
            q: t`The relation $\{(x, y) : y^2 = x,\ x, y \in \mathbf{R}\}$ is not a function from $\mathbf{R}$ to $\mathbf{R}$ because`,
            options: ["some x has two images and negative x has none", "two values of x share an image", "its range is not R", "y is not a polynomial in x"],
            answer: 0,
            difficulty: 2,
            hint: "Look at x = 4 and at x = −1.",
            explain: t`$x = 4$ gives $y = \pm 2$ (two images), and $x = -1$ gives no real $y$. Either failure alone stops it being a function.`,
          },
        ],
      },
      {
        slug: "c11-domain-range-algebra",
        title: "Domain, Range and Algebra of Real Functions",
        summary: "How to find the domain and range of a real function from its formula, and how to add, subtract, multiply and divide real functions.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧮",
            caption: "Type 1 ÷ 0 or √(−4) into a calculator and it shows an error. The domain of a real function is exactly the set of inputs that never cause such an error.",
          },
          {
            type: "text",
            md: t`When a real function is given only by a formula, its **domain** is taken to be the largest subset of $\mathbf{R}$ for which the formula gives a real value. Its **range** is then the set of all values $f(x)$ for $x$ in that domain.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`A **denominator** must not be zero: remove every $x$ with $g(x) = 0$.`,
              t`An **even root** (such as $\sqrt{\ }$) needs a non-negative expression inside: solve $u(x) \ge 0$.`,
              t`An even root **in a denominator** needs $u(x) > 0$ (strict).`,
              "If several conditions apply, the domain is the intersection of their solution sets.",
            ],
          },
          {
            type: "example",
            title: "Domain of a rational function",
            problem: t`Find the domain of $f(x) = \dfrac{x^2 + 2x + 1}{x^2 - 8x + 12}$.`,
            steps: [
              t`The numerator is a polynomial, defined for all $x$. Only the denominator matters.`,
              t`$x^2 - 8x + 12 = (x - 2)(x - 6)$, which is zero at $x = 2$ and $x = 6$.`,
              t`Remove these two values from $\mathbf{R}$.`,
            ],
            answer: t`Domain $= \mathbf{R} - \{2, 6\}$.`,
          },
          {
            type: "example",
            title: "Domain and range with a square root",
            problem: t`Find the domain and range of $f(x) = \sqrt{9 - x^2}$.`,
            steps: [
              t`Need $9 - x^2 \ge 0$, i.e. $x^2 \le 9$, i.e. $-3 \le x \le 3$. Domain $= [-3, 3]$.`,
              t`On this domain, $9 - x^2$ takes every value from $0$ (at $x = \pm 3$) to $9$ (at $x = 0$).`,
              t`Taking the square root, $f(x)$ takes every value from $\sqrt{0} = 0$ to $\sqrt{9} = 3$.`,
            ],
            answer: t`Domain $[-3, 3]$, range $[0, 3]$. (The graph is the upper half of the circle $x^2 + y^2 = 9$.)`,
          },
          {
            type: "text",
            md: t`**Finding the range.** A reliable method: write $y = f(x)$, solve for $x$ in terms of $y$, and find the values of $y$ for which that $x$ is real and lies in the domain.`,
          },
          {
            type: "example",
            title: "Range of a rational function",
            problem: t`Find the range of $f(x) = \dfrac{2x + 1}{x - 3}$, $x \ne 3$.`,
            steps: [
              t`Let $y = \frac{2x + 1}{x - 3}$. Then $y(x - 3) = 2x + 1$, so $xy - 2x = 3y + 1$.`,
              t`$x(y - 2) = 3y + 1$, so $x = \frac{3y + 1}{y - 2}$.`,
              t`This gives a real $x$ for every $y \ne 2$. Check $x \ne 3$: $\frac{3y+1}{y-2} = 3$ would need $3y + 1 = 3y - 6$, which is impossible.`,
            ],
            answer: t`Range $= \mathbf{R} - \{2\}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The domain of $f(x) = \dfrac{x^2 + 3x + 5}{x^2 - 5x + 4}$ is`,
                options: [t`$\mathbf{R} - \{1, 4\}$`, t`$\mathbf{R} - \{-1, -4\}$`, t`$\mathbf{R}$`, t`$(1, 4)$`],
                answer: 0,
                explain: t`$x^2 - 5x + 4 = (x - 1)(x - 4) = 0$ at $x = 1, 4$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$f(x) = \frac{x^2 - 4}{x - 2}$ simplifies to $x + 2$, so its domain is $\mathbf{R}$.`,
            right: t`Find the domain **before** simplifying. $f(2)$ means $\frac{0}{0}$, which is undefined, so the domain is $\mathbf{R} - \{2\}$ and the range is $\mathbf{R} - \{4\}$.`,
            why: "Cancelling is valid only where x − 2 ≠ 0. The simplified formula agrees with f everywhere except at the point that was removed.",
          },
          {
            type: "text",
            md: t`**Algebra of real functions.** Let $f : X \to \mathbf{R}$ and $g : X \to \mathbf{R}$, where $X \subset \mathbf{R}$. We combine them point by point. For different given domains, the new function lives on the common part $D_f \cap D_g$, and a quotient also removes the points where the denominator is zero.`,
          },
          {
            type: "formula",
            tex: t`(f \pm g)(x) = f(x) \pm g(x), \quad (fg)(x) = f(x)\,g(x), \quad (\alpha f)(x) = \alpha f(x), \quad \left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)},\ g(x) \ne 0`,
            caption: "Sum, difference, product, scalar multiple (α a real number) and quotient of real functions.",
          },
          {
            type: "example",
            title: "Combining two functions",
            problem: t`Let $f(x) = \sqrt{x}$ and $g(x) = x$. Find $f + g$, $f - g$, $fg$ and $\frac{f}{g}$ with their domains.`,
            steps: [
              t`$D_f = [0, \infty)$ and $D_g = \mathbf{R}$, so the common domain is $[0, \infty)$.`,
              t`$(f + g)(x) = \sqrt{x} + x$, $(f - g)(x) = \sqrt{x} - x$, $(fg)(x) = x\sqrt{x}$: all on $[0, \infty)$.`,
              t`$\left(\frac{f}{g}\right)(x) = \frac{\sqrt{x}}{x}$ also needs $g(x) = x \ne 0$, so its domain is $(0, \infty)$.`,
            ],
            answer: t`$f \pm g$ and $fg$ on $[0, \infty)$; $\frac{f}{g} = \frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}}$ on $(0, \infty)$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for finding a range in order.",
              items: [
                "Find the domain of f first",
                "Write y = f(x)",
                "Solve for x in terms of y",
                "Find the y for which this x is real",
                "Remove any y whose x falls outside the domain",
              ],
              explain: "Working backwards from y to x tells you which outputs are possible; checking the domain at the end removes outputs that only an excluded input could give.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State the domain in correct notation (interval or $\mathbf{R} - \{\ldots\}$). Typical 2–3 mark questions: domain of a rational function, domain and range of $\sqrt{a^2 - x^2}$ or $|x - a|$, and $f + g$, $fg$, $\frac{f}{g}$ for two given functions. For $\frac{f}{g}$, write the condition $g(x) \ne 0$ explicitly.`,
          },
          {
            type: "keypoints",
            items: [
              "Domain: the largest set of real x where the formula is real. No zero denominators; even roots need non-negative insides.",
              "Range: set y = f(x), solve for x, keep the y that give an allowed x.",
              "Find the domain before cancelling factors.",
              t`$f \pm g$, $fg$ live on $D_f \cap D_g$; $\frac{f}{g}$ also needs $g(x) \ne 0$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Domain of a formula-defined real function", back: "The largest subset of R on which the formula gives a real value." },
          { front: "Condition for √u(x) to be real", back: t`$u(x) \ge 0$; if the root is in a denominator, $u(x) > 0$.` },
          { front: t`Domain of $\sqrt{a^2 - x^2}$`, back: t`$[-a, a]$; range $[0, a]$ (for $a > 0$).` },
          { front: "Method for range", back: "Put y = f(x), solve for x, find the y for which x is real and in the domain." },
          { front: "Domain of f + g", back: t`$D_f \cap D_g$.` },
          { front: "Domain of f/g", back: t`$\{x \in D_f \cap D_g : g(x) \ne 0\}$.` },
          { front: t`Range of $\frac{ax + b}{cx + d}$ ($c \ne 0$, $ad - bc \ne 0$)`, back: t`$\mathbf{R} - \{\frac{a}{c}\}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The range of $f(x) = \sqrt{9 - x^2}$ is`,
            options: [t`$[-3, 3]$`, t`$[0, 3]$`, t`$[0, 9]$`, t`$(0, 3)$`],
            answer: 1,
            explain: t`The square root is never negative; its largest value is $\sqrt{9} = 3$ at $x = 0$ and smallest is 0 at $x = \pm 3$. $[-3, 3]$ is the domain.`,
          },
          {
            kind: "mcq",
            q: t`The range of $f(x) = 2 - 3x$, $x \in \mathbf{R}$, $x > 0$, is`,
            options: [t`$(-\infty, 2)$`, t`$(2, \infty)$`, t`$\mathbf{R}$`, t`$(-\infty, 2]$`],
            answer: 0,
            difficulty: 2,
            explain: t`For $x > 0$, $3x > 0$, so $2 - 3x < 2$, and every value below 2 is reached. 2 itself would need $x = 0$, which is excluded.`,
          },
          {
            kind: "numeric",
            q: t`$f(x) = x^2$ and $g(x) = 2x + 1$. Find $(f - g)(3)$.`,
            answer: 2,
            explain: t`$f(3) = 9$, $g(3) = 7$, so $(f - g)(3) = 2$.`,
          },
          {
            kind: "mcq",
            q: t`$f(x) = \sqrt{x}$ and $g(x) = x - 4$. The domain of $\frac{f}{g}$ is`,
            options: [t`$[0, \infty)$`, t`$[0, 4) \cup (4, \infty)$`, t`$\mathbf{R} - \{4\}$`, t`$(4, \infty)$`],
            answer: 1,
            explain: t`$D_f = [0, \infty)$; remove $x = 4$ where $g(x) = 0$.`,
          },
          {
            kind: "truefalse",
            q: t`$f(x) = \frac{x^2 - 1}{x - 1}$ and $g(x) = x + 1$ are the same function.`,
            answer: false,
            explain: t`They agree for $x \ne 1$, but $f$ is not defined at $x = 1$ while $g(1) = 2$. Functions with different domains are different.`,
          },
          {
            kind: "mcq",
            q: t`The range of $f(x) = |x - 1| + 2$ is`,
            options: [t`$[1, \infty)$`, t`$[2, \infty)$`, t`$(2, \infty)$`, t`$\mathbf{R}$`],
            answer: 1,
            explain: t`$|x - 1| \ge 0$ with equality at $x = 1$, so $f(x) \ge 2$, and every value from 2 upwards is reached.`,
          },
          {
            kind: "numeric",
            q: t`Exactly one real number is not in the range of $f(x) = \dfrac{3x - 2}{x + 1}$. Find it.`,
            answer: 3,
            difficulty: 2,
            hint: "Solve y = f(x) for x.",
            explain: t`$y(x + 1) = 3x - 2 \Rightarrow x(y - 3) = -2 - y \Rightarrow x = \frac{-(y + 2)}{y - 3}$, real for all $y \ne 3$.`,
          },
        ],
      },
      {
        slug: "c11-relations-functions-exam-edge",
        title: "Exam edge: Relations and Functions",
        summary: "Counting relations and functions, domains with roots and greatest-integer parts, ranges by the discriminant method, and the traps examiners set.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** **KCET** and **COMEDK** ask direct questions: $n(A \times B)$, number of relations, domain and range of rational, root and modulus functions, values of $[x]$. **JEE Main** treats "Sets, Relations and Functions" as one unit and asks 1–2 questions a paper, often on domain and range or on counting functions; Class 12 ideas (one-one, onto, composition) are added on top. **JEE Advanced** likes domains with $[x]$, ranges found by the discriminant, and equations in $[x]$.`,
          },
          {
            type: "text",
            md: t`**Results worth remembering.**

1. $n(A) = m$, $n(B) = n$: relations from $A$ to $B$: $2^{mn}$; relations on $A$: $2^{m^2}$; **functions** from $A$ to $B$: $n^m$ (each of the $m$ elements picks one of $n$ images).

2. $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$, and $A \times (B \cup C) = (A \times B) \cup (A \times C)$.

3. Greatest integer: $[x + k] = [x] + k$ for an integer $k$ (not for non-integer $k$). The **fractional part** $\{x\} = x - [x]$ lies in $[0, 1)$.

4. **Discriminant method for range**: if $y = f(x)$ rearranges to a quadratic $a(y)x^2 + b(y)x + c(y) = 0$, real $x$ needs $b^2 - 4ac \ge 0$ when $a(y) \ne 0$; check the values of $y$ that make $a(y) = 0$ separately.`,
          },
          {
            type: "formula",
            tex: t`x - 1 < [x] \le x, \qquad [x] + [-x] = \begin{cases} 0, & x \in \mathbf{Z} \\ -1, & x \notin \mathbf{Z} \end{cases}`,
            caption: "Two properties of the greatest integer function used in many JEE questions.",
          },
          {
            type: "example",
            title: "KCET level: counting relations and functions",
            problem: t`$A = \{1, 2, 3\}$ and $B = \{a, b\}$. Find the number of (a) relations from $A$ to $B$, (b) functions from $A$ to $B$, (c) functions from $B$ to $A$.`,
            steps: [
              t`(a) $n(A \times B) = 6$, so there are $2^6 = 64$ relations.`,
              t`(b) Each of 1, 2, 3 chooses its image from $\{a, b\}$: $2 \times 2 \times 2 = 2^3 = 8$.`,
              t`(c) Each of $a, b$ chooses its image from $\{1, 2, 3\}$: $3^2 = 9$.`,
            ],
            answer: "(a) 64, (b) 8, (c) 9. The base is the size of the codomain; the power is the size of the domain.",
          },
          {
            type: "example",
            title: "JEE Main level: domain from several conditions",
            problem: t`Find the domain of $f(x) = \sqrt{x^2 - 5x + 6} + \dfrac{1}{\sqrt{9 - x^2}}$.`,
            steps: [
              t`First term: $x^2 - 5x + 6 = (x - 2)(x - 3) \ge 0$, so $x \le 2$ or $x \ge 3$.`,
              t`Second term: the root is in a denominator, so $9 - x^2 > 0$, i.e. $-3 < x < 3$.`,
              t`Intersect: $\big((-\infty, 2] \cup [3, \infty)\big) \cap (-3, 3) = (-3, 2]$. (The point 3 is excluded by the second condition.)`,
            ],
            answer: t`Domain $= (-3, 2]$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$n(A) = 4$ and $n(B) = 3$. How many functions are there from $A$ to $B$?`,
                answer: 81,
                explain: t`Each of the 4 elements of $A$ has 3 choices: $3^4 = 81$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: range by the discriminant",
            problem: t`Find the range of $f(x) = \dfrac{x}{1 + x^2}$, $x \in \mathbf{R}$.`,
            steps: [
              t`Let $y = \frac{x}{1 + x^2}$. Then $yx^2 - x + y = 0$.`,
              t`If $y = 0$: the equation is $-x = 0$, so $x = 0$ works and $0$ is in the range.`,
              t`If $y \ne 0$: it is a quadratic in $x$; real $x$ needs $1 - 4y^2 \ge 0$, so $-\frac{1}{2} \le y \le \frac{1}{2}$.`,
              t`The end values are reached: $f(1) = \frac{1}{2}$ and $f(-1) = -\frac{1}{2}$.`,
            ],
            answer: t`Range $= \left[-\frac{1}{2}, \frac{1}{2}\right]$.`,
          },
          {
            type: "mistake",
            wrong: t`The range of $\frac{x^2}{1 + x^2}$ is $[0, 1]$, since the fraction is between 0 and 1.`,
            right: t`It is $[0, 1)$. The value 1 would need $x^2 = 1 + x^2$, which is impossible; the function only gets closer and closer to 1.`,
            why: "Bounds that are approached but never reached are a favourite trap. Always test whether each end value is actually attained.",
          },
          {
            type: "example",
            title: "JEE Advanced level: a domain involving [x]",
            problem: t`Find the domain of $f(x) = \dfrac{1}{\sqrt{[x]^2 - [x] - 6}}$.`,
            steps: [
              t`The root is in a denominator: need $[x]^2 - [x] - 6 > 0$. Put $t = [x]$, an integer.`,
              t`$t^2 - t - 6 = (t - 3)(t + 2) > 0$ gives $t > 3$ or $t < -2$.`,
              t`$t$ is an integer, so $[x] \ge 4$ or $[x] \le -3$.`,
              t`$[x] \ge 4 \iff x \ge 4$. $[x] \le -3 \iff x < -2$ (for $-3 \le x < -2$, $[x] = -3$).`,
            ],
            answer: t`Domain $= (-\infty, -2) \cup [4, \infty)$.`,
          },
          {
            type: "mistake",
            wrong: t`$[x] = 2$, so $x = 2$.`,
            right: t`$[x] = 2$ means $2 \le x < 3$: a whole interval of solutions.`,
            why: "Learners treat [x] like an ordinary variable. Solve for [x] first, then turn each integer value n into the interval [n, n + 1).",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each relation from R to R a function?",
              groups: ["Function", "Not a function"],
              items: [
                { text: "y = x²", group: 0, hint: "Each x gives one value of x²." },
                { text: "y² = x", group: 1, hint: "x = 4 gives y = 2 and y = −2." },
                { text: "y = |x|", group: 0, hint: "Each x has exactly one modulus." },
                { text: "y = [x]", group: 0, hint: "Each x has exactly one greatest integer below it." },
                { text: "x² + y² = 1", group: 1, hint: "x = 0 gives y = ±1, and x = 2 gives none." },
                { text: "y = 1/x", group: 1, hint: "x = 0 in R has no image." },
              ],
              explain: "A function from R must give every real x exactly one image. Two images for one x, or no image for some x, both fail.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When are the shortcuts safe?",
            md: t`$n^m$ counts **all** functions; questions on one-one or onto functions need different counts (Class 12). The discriminant method needs the full real line as domain, or a final check that the $x$ found lies in the domain. $[x + k] = [x] + k$ is safe only for integer $k$: $[0.6 + 0.6] = 1$ but $[0.6] + [0.6] = 0$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Relations $A \to B$: $2^{mn}$; functions $A \to B$: $n^m$ (codomain size to the power of domain size).`,
              "Domain: intersect every condition; strict inequality for roots in denominators.",
              "Range: discriminant method, then check the special y-values and whether end points are attained.",
              t`$[x] = n \iff n \le x < n + 1$; $[x] + [-x] = -1$ for non-integer $x$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Number of functions from an m-set to an n-set", back: t`$n^m$.` },
          { front: "Number of relations on a set with m elements", back: t`$2^{m^2}$.` },
          { front: t`$[x] + [-x]$`, back: t`$0$ if $x$ is an integer, $-1$ otherwise.` },
          { front: "Fractional part {x}", back: t`$x - [x]$, always in $[0, 1)$.` },
          { front: t`Solving $[x] = n$ ($n$ integer)`, back: t`$n \le x < n + 1$.` },
          { front: "Discriminant method", back: "Write y = f(x) as a quadratic in x; real x needs discriminant ≥ 0. Check y-values that kill the x² term separately." },
          { front: t`Range of $\frac{x}{1 + x^2}$`, back: t`$\left[-\frac{1}{2}, \frac{1}{2}\right]$.` },
          { front: t`$(A \times B) \cap (C \times D)$`, back: t`$(A \cap C) \times (B \cap D)$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many relations are there on a set with 3 elements?`,
            answer: 512,
            explain: t`$n(A \times A) = 9$, so there are $2^9 = 512$ relations.`,
          },
          {
            kind: "mcq",
            q: t`The domain of $f(x) = \sqrt{4 - x^2} + \dfrac{1}{\sqrt{x - 1}}$ is`,
            options: [t`$[-2, 2]$`, t`$(1, 2]$`, t`$[1, 2]$`, t`$(1, \infty)$`],
            answer: 1,
            difficulty: 2,
            explain: t`$4 - x^2 \ge 0$ gives $[-2, 2]$; $x - 1 > 0$ gives $(1, \infty)$. The intersection is $(1, 2]$.`,
          },
          {
            kind: "mcq",
            q: t`The range of $f(x) = x^2 + 4x + 7$, $x \in \mathbf{R}$, is`,
            options: [t`$[7, \infty)$`, t`$[3, \infty)$`, t`$(3, \infty)$`, t`$\mathbf{R}$`],
            answer: 1,
            explain: t`$x^2 + 4x + 7 = (x + 2)^2 + 3 \ge 3$, with equality at $x = -2$.`,
          },
          {
            kind: "mcq",
            q: t`The set of real $x$ with $[x]^2 - 5[x] + 6 = 0$ is`,
            options: [t`$\{2, 3\}$`, t`$[2, 3]$`, t`$[2, 4)$`, t`$[2, 3)$`],
            answer: 2,
            difficulty: 2,
            hint: "Solve the quadratic for [x] first.",
            explain: t`$([x] - 2)([x] - 3) = 0$, so $[x] = 2$ or $3$, i.e. $x \in [2, 3) \cup [3, 4) = [2, 4)$.`,
          },
          {
            kind: "multi",
            q: t`Which statements are true for every real $x$?`,
            options: [t`$[x + 3] = [x] + 3$`, t`$[2x] = 2[x]$`, t`$x - 1 < [x] \le x$`, t`$0 \le x - [x] < 1$`],
            answers: [0, 2, 3],
            difficulty: 2,
            explain: t`Adding an integer shifts $[x]$ by that integer. But $[2(0.6)] = 1 \ne 2[0.6] = 0$. The last two describe $[x]$ and the fractional part.`,
          },
          {
            kind: "numeric",
            q: t`How many integers lie in the range of $f(x) = \dfrac{4x}{x^2 + 1}$, $x \in \mathbf{R}$?`,
            answer: 5,
            difficulty: 3,
            hint: "Use the discriminant method to find the range first.",
            explain: t`$yx^2 - 4x + y = 0$: for $y \ne 0$ real $x$ needs $16 - 4y^2 \ge 0$, so $-2 \le y \le 2$; $y = 0$ comes from $x = 0$, and $\pm 2$ from $x = \pm 1$. Range $[-2, 2]$ contains $-2, -1, 0, 1, 2$.`,
          },
          {
            kind: "mcq",
            q: t`The domain of $f(x) = \dfrac{1}{x - [x]}$ is`,
            options: [t`$\mathbf{R}$`, t`$\mathbf{R} - \mathbf{Z}$`, t`$(0, \infty)$`, t`$\mathbf{R} - \{0\}$`],
            answer: 1,
            difficulty: 2,
            explain: t`$x - [x] = 0$ exactly when $x$ is an integer, so remove all integers.`,
          },
          {
            kind: "mcq",
            q: t`$n(A) = 2$ and $n(B) = 3$. The number of relations from $A$ to $B$ that are **not** functions from $A$ to $B$ is`,
            options: ["55", "58", "64", "9"],
            answer: 0,
            difficulty: 3,
            hint: "Count all relations, then subtract the functions.",
            explain: t`All relations: $2^6 = 64$. Functions from $A$ to $B$: $3^2 = 9$. Relations that are not functions: $64 - 9 = 55$.`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 11: Trigonometric Functions (NCERT Ch 3, Karnataka I PUC, ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-trigonometric-functions",
    title: "Trigonometric Functions (Class 11)",
    icon: "📐",
    description: "Radian measure, trigonometric functions of real numbers, signs, domains, ranges and graphs, sum and difference formulae, multiple angles, sum-product formulae and trigonometric equations.",
    lessons: [
      {
        slug: "c11-radian-trig-functions",
        title: "Angles, Radian Measure and Trigonometric Functions",
        summary: "Degree and radian measure, l = rθ, trigonometric functions of any real number through the unit circle, standard values and signs in the four quadrants.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🕰️",
            caption: "In 20 minutes the minute hand of a clock turns through one third of a full turn: 120°, or 2π/3 radians.",
          },
          {
            type: "text",
            md: t`An **angle** is the amount of rotation of a ray about its end point (the **vertex**) from an **initial side** to a **terminal side**. Rotation **anticlockwise** gives a **positive** angle; **clockwise** gives a **negative** angle. Angles can be larger than one full turn: $450°$ is one turn plus $90°$.

In **degree measure**, one full turn is $360°$; $1° = 60'$ (minutes) and $1' = 60''$ (seconds).`,
          },
          {
            type: "text",
            md: t`In **radian measure**, an angle at the centre of a circle that cuts off an arc **equal in length to the radius** measures **1 radian**. A full circle has circumference $2\pi r$, so a full turn is $2\pi$ radians.

If an arc of length $l$ on a circle of radius $r$ subtends an angle $\theta$ radians at the centre, then $l = r\theta$. This formula works only with $\theta$ in **radians**. When no unit is written, an angle is taken to be in radians: $\sin 2$ means the sine of 2 radians.`,
          },
          {
            type: "formula",
            tex: t`\pi \text{ rad} = 180^\circ, \qquad 1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57^\circ 16', \qquad 1^\circ = \frac{\pi}{180} \text{ rad} \approx 0.01746 \text{ rad}, \qquad l = r\theta`,
            caption: "Radian measure = (π/180) × degree measure; degree measure = (180/π) × radian measure.",
          },
          {
            type: "example",
            title: "Converting between degrees and radians",
            problem: t`(a) Convert $25^\circ 30'$ into radians. (b) Convert 3 radians into degrees, minutes and seconds (use $\pi = \frac{22}{7}$).`,
            steps: [
              t`(a) $30' = \frac{30}{60}^\circ = \frac{1}{2}^\circ$, so $25^\circ 30' = \frac{51}{2}^\circ$.`,
              t`Radians $= \frac{51}{2} \times \frac{\pi}{180} = \frac{51\pi}{360} = \frac{17\pi}{120}$.`,
              t`(b) Degrees $= 3 \times \frac{180}{\pi} = 3 \times 180 \times \frac{7}{22} = \frac{3780}{22} = 171\frac{9}{11}^\circ$.`,
              t`$\frac{9}{11}^\circ = \frac{540}{11}' = 49\frac{1}{11}'$, and $\frac{1}{11}' = \frac{60}{11}'' \approx 5''$.`,
            ],
            answer: t`(a) $\frac{17\pi}{120}$ rad. (b) about $171^\circ 49' 5''$.`,
          },
          {
            type: "example",
            title: "Using l = rθ",
            problem: t`(a) An arc of length 22 cm lies on a circle of radius 14 cm. Find the angle it subtends at the centre, in degrees (use $\pi = \frac{22}{7}$). (b) A wheel turns at 300 revolutions per minute. Through how many radians does it turn in one second?`,
            steps: [
              t`(a) $\theta = \frac{l}{r} = \frac{22}{14} = \frac{11}{7}$ radians.`,
              t`In degrees: $\frac{11}{7} \times \frac{180}{\pi} = \frac{11}{7} \times 180 \times \frac{7}{22} = 90^\circ$.`,
              t`(b) 300 revolutions per minute is $\frac{300}{60} = 5$ revolutions per second.`,
              t`Each revolution is $2\pi$ radians, so $5 \times 2\pi = 10\pi$ radians per second.`,
            ],
            answer: t`(a) $90^\circ$. (b) $10\pi$ radians.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$210^\circ$ in radian measure is`,
                options: [t`$\frac{5\pi}{6}$`, t`$\frac{7\pi}{6}$`, t`$\frac{4\pi}{3}$`, t`$\frac{7\pi}{4}$`],
                answer: 1,
                explain: t`$210 \times \frac{\pi}{180} = \frac{7\pi}{6}$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`For an arc subtending $60^\circ$ in a circle of radius 6 cm, $l = r\theta = 6 \times 60 = 360$ cm.`,
            right: t`Convert first: $60^\circ = \frac{\pi}{3}$ rad, so $l = 6 \times \frac{\pi}{3} = 2\pi \approx 6.28$ cm.`,
            why: "The formula l = rθ comes from the definition of the radian, so it is false for degrees. A quick sense check: an arc can never be longer than the whole circumference (here about 37.7 cm).",
          },
          {
            type: "text",
            md: t`**Trigonometric functions of a real number.** Draw the **unit circle** $x^2 + y^2 = 1$. Start at $A(1, 0)$ and move along the circle a distance $x$ (anticlockwise if $x > 0$, clockwise if $x < 0$), reaching a point $P$. The arc $AP$ subtends $x$ radians at the centre, and we define $P = (\cos x, \sin x)$. This works for **every** real $x$, so $\sin x$ and $\cos x$ are defined on all of $\mathbf{R}$.

Then $\tan x = \frac{\sin x}{\cos x}$ ($\cos x \ne 0$), $\cot x = \frac{\cos x}{\sin x}$ ($\sin x \ne 0$), $\sec x = \frac{1}{\cos x}$, $\csc x = \frac{1}{\sin x}$. Since $P$ is on the unit circle, $\sin^2 x + \cos^2 x = 1$, which gives $1 + \tan^2 x = \sec^2 x$ and $1 + \cot^2 x = \csc^2 x$.

$\sin x = 0$ exactly when $x = n\pi$, and $\cos x = 0$ exactly when $x = (2n + 1)\frac{\pi}{2}$, $n \in \mathbf{Z}$. A full turn brings $P$ back: $\sin(2n\pi + x) = \sin x$ and $\cos(2n\pi + x) = \cos x$.`,
          },
          {
            type: "table",
            headers: ["x", "0", "π/6", "π/4", "π/3", "π/2", "π", "3π/2", "2π"],
            rows: [
              ["sin x", "0", "1/2", t`$\frac{1}{\sqrt{2}}$`, t`$\frac{\sqrt{3}}{2}$`, "1", "0", "−1", "0"],
              ["cos x", "1", t`$\frac{\sqrt{3}}{2}$`, t`$\frac{1}{\sqrt{2}}$`, "1/2", "0", "−1", "0", "1"],
              ["tan x", "0", t`$\frac{1}{\sqrt{3}}$`, "1", t`$\sqrt{3}$`, "not defined", "0", "not defined", "0"],
            ],
          },
          {
            type: "table",
            headers: ["Quadrant", "Angles", "Positive functions"],
            rows: [
              ["I", t`$0 < x < \frac{\pi}{2}$`, "all six"],
              ["II", t`$\frac{\pi}{2} < x < \pi$`, "sin and cosec only"],
              ["III", t`$\pi < x < \frac{3\pi}{2}$`, "tan and cot only"],
              ["IV", t`$\frac{3\pi}{2} < x < 2\pi$`, "cos and sec only"],
            ],
          },
          {
            type: "example",
            title: "All six values from one",
            problem: t`$\cos x = -\frac{3}{5}$ and $x$ lies in the third quadrant. Find the other five trigonometric functions.`,
            steps: [
              t`$\sin^2 x = 1 - \cos^2 x = 1 - \frac{9}{25} = \frac{16}{25}$, so $\sin x = \pm\frac{4}{5}$.`,
              t`In the third quadrant $\sin x < 0$, so $\sin x = -\frac{4}{5}$.`,
              t`$\tan x = \frac{\sin x}{\cos x} = \frac{-4/5}{-3/5} = \frac{4}{3}$ (positive in quadrant III, as expected), so $\cot x = \frac{3}{4}$.`,
              t`$\sec x = \frac{1}{\cos x} = -\frac{5}{3}$ and $\csc x = \frac{1}{\sin x} = -\frac{5}{4}$.`,
            ],
            answer: t`$\sin x = -\frac{4}{5}$, $\tan x = \frac{4}{3}$, $\cot x = \frac{3}{4}$, $\sec x = -\frac{5}{3}$, $\csc x = -\frac{5}{4}$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each angle to the quadrant of its terminal side.",
              pairs: [
                ["7π/3", "Quadrant I"],
                ["2π/3", "Quadrant II"],
                ["5π/4", "Quadrant III"],
                ["−π/6", "Quadrant IV"],
              ],
              explain: "7π/3 = 2π + π/3 lands where π/3 does. A negative angle turns clockwise, so −π/6 ends just below the positive x-axis.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`In "find the other five" questions, marks are given for the quadrant reasoning: write "since $x$ lies in quadrant III, $\sin x < 0$" before choosing the sign. In conversions, show the factor $\frac{\pi}{180}$ or $\frac{180}{\pi}$, and use $\pi = \frac{22}{7}$ only if the question says so.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\pi$ radians $= 180^\circ$; $l = r\theta$ needs $\theta$ in radians.`,
              t`On the unit circle, the point at arc length $x$ from $(1, 0)$ is $(\cos x, \sin x)$, for every real $x$.`,
              t`$\sin^2 x + \cos^2 x = 1$, $1 + \tan^2 x = \sec^2 x$, $1 + \cot^2 x = \csc^2 x$.`,
              "Positive functions by quadrant: I all, II sin, III tan, IV cos (with their reciprocals).",
              t`$\sin x = 0 \iff x = n\pi$; $\cos x = 0 \iff x = (2n + 1)\frac{\pi}{2}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "One radian", back: "The angle at the centre of a circle subtended by an arc equal in length to the radius." },
          { front: "Degrees ↔ radians", back: t`$\pi \text{ rad} = 180^\circ$; multiply degrees by $\frac{\pi}{180}$ to get radians.` },
          { front: "Arc length formula", back: t`$l = r\theta$, with $\theta$ in radians.` },
          { front: "1 radian in degrees", back: t`$\frac{180}{\pi}^\circ \approx 57^\circ 16'$.` },
          { front: "Unit circle definition", back: t`The point reached after an arc of length $x$ from $(1, 0)$ is $(\cos x, \sin x)$.` },
          { front: "Where sin x = 0 and cos x = 0", back: t`$\sin x = 0$ at $x = n\pi$; $\cos x = 0$ at $x = (2n + 1)\frac{\pi}{2}$.` },
          { front: "Signs by quadrant", back: "I: all positive; II: sin, cosec; III: tan, cot; IV: cos, sec." },
          { front: t`$\cos\frac{\pi}{6}$, $\sin\frac{\pi}{6}$, $\tan\frac{\pi}{6}$`, back: t`$\frac{\sqrt{3}}{2}$, $\frac{1}{2}$, $\frac{1}{\sqrt{3}}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$-37^\circ 30'$ in radians is`,
            options: [t`$-\frac{5\pi}{24}$`, t`$-\frac{5\pi}{12}$`, t`$-\frac{37\pi}{180}$`, t`$-\frac{7\pi}{36}$`],
            answer: 0,
            explain: t`$-37\frac{1}{2}^\circ = -\frac{75}{2}^\circ$; $-\frac{75}{2} \times \frac{\pi}{180} = -\frac{75\pi}{360} = -\frac{5\pi}{24}$.`,
          },
          {
            kind: "numeric",
            q: t`Find the length (in cm) of an arc of a circle of radius 21 cm that subtends $60^\circ$ at the centre. Use $\pi = \frac{22}{7}$.`,
            answer: 22,
            unit: "cm",
            explain: t`$l = r\theta = 21 \times \frac{\pi}{3} = 7\pi = 7 \times \frac{22}{7} = 22$ cm.`,
          },
          {
            kind: "mcq",
            q: t`$\cos\frac{17\pi}{3}$ equals`,
            options: [t`$-\frac{1}{2}$`, t`$\frac{1}{2}$`, t`$\frac{\sqrt{3}}{2}$`, t`$-\frac{\sqrt{3}}{2}$`],
            answer: 1,
            difficulty: 2,
            hint: t`Remove whole turns of $2\pi$.`,
            explain: t`$\frac{17\pi}{3} = 4\pi + \frac{5\pi}{3}$, so the value is $\cos\frac{5\pi}{3}$. $\frac{5\pi}{3}$ is in quadrant IV where cosine is positive, and $\cos\frac{5\pi}{3} = \cos\frac{\pi}{3} = \frac{1}{2}$.`,
          },
          {
            kind: "mcq",
            q: t`$\sin x = \frac{3}{5}$ and $x$ lies in the second quadrant. Then $\tan x$ is`,
            options: [t`$\frac{3}{4}$`, t`$-\frac{3}{4}$`, t`$-\frac{4}{3}$`, t`$\frac{4}{5}$`],
            answer: 1,
            explain: t`$\cos x = -\frac{4}{5}$ in quadrant II, so $\tan x = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
          },
          {
            kind: "truefalse",
            q: "The tangent function is positive in the third quadrant.",
            answer: true,
            explain: "Both sin and cos are negative there, so their ratio is positive.",
          },
          {
            kind: "multi",
            q: "Which identities hold wherever both sides are defined?",
            options: [t`$\sin^2 x + \cos^2 x = 1$`, t`$1 + \tan^2 x = \sec^2 x$`, t`$\sin x + \cos x = 1$`, t`$\csc^2 x - \cot^2 x = 1$`],
            answers: [0, 1, 3],
            explain: t`Divide $\sin^2 x + \cos^2 x = 1$ by $\cos^2 x$ or by $\sin^2 x$ to get the others. $\sin x + \cos x = 1$ fails, e.g. at $x = \frac{\pi}{4}$ the sum is $\sqrt{2}$.`,
          },
          {
            kind: "numeric",
            q: "In how many seconds does the minute hand of a clock turn through π/3 radians?",
            answer: 600,
            unit: "s",
            difficulty: 2,
            explain: t`The minute hand turns $2\pi$ in 60 minutes. $\frac{\pi}{3}$ is $\frac{1}{6}$ of a turn: 10 minutes $= 600$ s.`,
          },
        ],
      },
      {
        slug: "c11-trig-graphs-compound",
        title: "Graphs, Allied Angles and Sum and Difference Formulae",
        summary: "Domains, ranges, behaviour and graphs of the six functions, the proof of cos(x + y), the formulae it leads to, and allied-angle results.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: t`As $x$ runs through $\mathbf{R}$, the point $(\cos x, \sin x)$ goes round the unit circle again and again. So $\sin x$ and $\cos x$ always lie between $-1$ and $1$, and their values repeat every $2\pi$: they are **periodic** with period $2\pi$. The tangent and cotangent repeat every $\pi$.

Also, $-x$ is the mirror image of $x$ in the $x$-axis, so $\cos(-x) = \cos x$ (cosine is **even**) and $\sin(-x) = -\sin x$ (sine is **odd**).`,
          },
          {
            type: "table",
            headers: ["Function", "Domain", "Range", "Period"],
            rows: [
              ["sin x", t`$\mathbf{R}$`, t`$[-1, 1]$`, t`$2\pi$`],
              ["cos x", t`$\mathbf{R}$`, t`$[-1, 1]$`, t`$2\pi$`],
              ["tan x", t`$\mathbf{R} - \{(2n + 1)\frac{\pi}{2} : n \in \mathbf{Z}\}$`, t`$\mathbf{R}$`, t`$\pi$`],
              ["cot x", t`$\mathbf{R} - \{n\pi : n \in \mathbf{Z}\}$`, t`$\mathbf{R}$`, t`$\pi$`],
              ["sec x", t`$\mathbf{R} - \{(2n + 1)\frac{\pi}{2} : n \in \mathbf{Z}\}$`, t`$(-\infty, -1] \cup [1, \infty)$`, t`$2\pi$`],
              ["cosec x", t`$\mathbf{R} - \{n\pi : n \in \mathbf{Z}\}$`, t`$(-\infty, -1] \cup [1, \infty)$`, t`$2\pi$`],
            ],
          },
          {
            type: "table",
            headers: ["", "Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
            rows: [
              ["sin x", "increases 0 to 1", "decreases 1 to 0", "decreases 0 to −1", "increases −1 to 0"],
              ["cos x", "decreases 1 to 0", "decreases 0 to −1", "increases −1 to 0", "increases 0 to 1"],
              ["tan x", "increases 0 to ∞", "increases −∞ to 0", "increases 0 to ∞", "increases −∞ to 0"],
            ],
          },
          {
            type: "text",
            md: t`**Graphs.** The graph of $y = \sin x$ is a smooth wave through $(0, 0)$, rising to $1$ at $\frac{\pi}{2}$, back to $0$ at $\pi$, down to $-1$ at $\frac{3\pi}{2}$ and back to $0$ at $2\pi$, then repeating. The graph of $y = \cos x$ is the same wave shifted left by $\frac{\pi}{2}$, starting at $(0, 1)$. The graph of $y = \tan x$ is a set of increasing branches, one on each interval $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$, …, with vertical asymptotes at the odd multiples of $\frac{\pi}{2}$. The graphs of $\csc x$ and $\sec x$ are U-shaped pieces that touch the sine and cosine waves at their peaks and troughs.`,
          },
          {
            type: "example",
            title: "Proof: cos(x + y) = cos x cos y − sin x sin y",
            problem: t`Prove the formula for $\cos(x + y)$ using the unit circle.`,
            steps: [
              t`On the unit circle mark $P_1 = (\cos x, \sin x)$, $P_2 = (\cos(x + y), \sin(x + y))$, $P_3 = (\cos(-y), \sin(-y)) = (\cos y, -\sin y)$ and $P_4 = (1, 0)$.`,
              t`$\angle P_1OP_3 = x + y = \angle P_4OP_2$. Equal angles at the centre cut equal chords, so $P_1P_3 = P_2P_4$, hence $P_1P_3^2 = P_2P_4^2$.`,
              t`$P_1P_3^2 = (\cos x - \cos y)^2 + (\sin x + \sin y)^2 = 2 - 2(\cos x\cos y - \sin x\sin y)$, using $\sin^2 + \cos^2 = 1$ twice.`,
              t`$P_2P_4^2 = (1 - \cos(x + y))^2 + \sin^2(x + y) = 2 - 2\cos(x + y)$.`,
              t`Equate the two: $\cos(x + y) = \cos x\cos y - \sin x\sin y$.`,
            ],
            answer: t`$\cos(x + y) = \cos x \cos y - \sin x \sin y$ for all real $x, y$.`,
          },
          {
            type: "text",
            md: t`**Everything else follows.** Replace $y$ by $-y$: $\cos(x - y) = \cos x\cos y + \sin x\sin y$. Put $x = \frac{\pi}{2}$: $\cos\left(\frac{\pi}{2} - y\right) = \sin y$, and then $\sin\left(\frac{\pi}{2} - y\right) = \cos y$. Using these, $\sin(x + y) = \cos\left(\left(\frac{\pi}{2} - x\right) - y\right) = \sin x\cos y + \cos x\sin y$, and $y \to -y$ gives $\sin(x - y)$. Dividing the sine and cosine formulae gives $\tan(x \pm y)$ and $\cot(x \pm y)$.`,
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \sin(x \pm y) &= \sin x\cos y \pm \cos x\sin y \\ \cos(x \pm y) &= \cos x\cos y \mp \sin x\sin y \\ \tan(x \pm y) &= \frac{\tan x \pm \tan y}{1 \mp \tan x\tan y} \\ \cot(x \pm y) &= \frac{\cot x\cot y \mp 1}{\cot y \pm \cot x} \end{aligned}`,
            caption: "The tan formula needs x, y and x ± y not to be odd multiples of π/2; the cot formula needs them not to be multiples of π.",
          },
          {
            type: "table",
            headers: ["Angle", "sin", "cos"],
            rows: [
              [t`$\frac{\pi}{2} - x$`, t`$\cos x$`, t`$\sin x$`],
              [t`$\frac{\pi}{2} + x$`, t`$\cos x$`, t`$-\sin x$`],
              [t`$\pi - x$`, t`$\sin x$`, t`$-\cos x$`],
              [t`$\pi + x$`, t`$-\sin x$`, t`$-\cos x$`],
              [t`$2\pi - x$`, t`$-\sin x$`, t`$\cos x$`],
            ],
          },
          {
            type: "example",
            title: "Exact values",
            problem: t`Find (a) $\cos 15^\circ$ and (b) $\tan 105^\circ$.`,
            steps: [
              t`(a) $\cos(45^\circ - 30^\circ) = \cos 45^\circ\cos 30^\circ + \sin 45^\circ\sin 30^\circ = \frac{1}{\sqrt{2}}\cdot\frac{\sqrt{3}}{2} + \frac{1}{\sqrt{2}}\cdot\frac{1}{2}$.`,
              t`$= \frac{\sqrt{3} + 1}{2\sqrt{2}} = \frac{\sqrt{6} + \sqrt{2}}{4}$.`,
              t`(b) $\tan(60^\circ + 45^\circ) = \frac{\sqrt{3} + 1}{1 - \sqrt{3}}$.`,
              t`Multiply top and bottom by $1 + \sqrt{3}$: $\frac{(\sqrt{3} + 1)^2}{1 - 3} = \frac{4 + 2\sqrt{3}}{-2} = -(2 + \sqrt{3})$.`,
            ],
            answer: t`$\cos 15^\circ = \frac{\sqrt{6} + \sqrt{2}}{4}$; $\tan 105^\circ = -(2 + \sqrt{3})$ (negative, as $105^\circ$ is in quadrant II).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\sin 75^\circ\cos 15^\circ + \cos 75^\circ\sin 15^\circ$ equals`,
                options: ["0", t`$\frac{1}{2}$`, "1", t`$\frac{\sqrt{3}}{2}$`],
                answer: 2,
                explain: t`It is $\sin(75^\circ + 15^\circ) = \sin 90^\circ = 1$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Proving an identity",
            problem: t`Prove that $\sin\left(\frac{\pi}{6} + x\right) + \cos\left(\frac{\pi}{3} + x\right) = \cos x$.`,
            steps: [
              t`$\sin\left(\frac{\pi}{6} + x\right) = \sin\frac{\pi}{6}\cos x + \cos\frac{\pi}{6}\sin x = \frac{1}{2}\cos x + \frac{\sqrt{3}}{2}\sin x$.`,
              t`$\cos\left(\frac{\pi}{3} + x\right) = \cos\frac{\pi}{3}\cos x - \sin\frac{\pi}{3}\sin x = \frac{1}{2}\cos x - \frac{\sqrt{3}}{2}\sin x$.`,
              t`Add: the $\sin x$ terms cancel, leaving $\frac{1}{2}\cos x + \frac{1}{2}\cos x = \cos x$.`,
            ],
            answer: "LHS = cos x = RHS. ∎",
          },
          {
            type: "mistake",
            wrong: t`$\sin(x + y) = \sin x + \sin y$, so $\sin 90^\circ = \sin 60^\circ + \sin 30^\circ$.`,
            right: t`$\sin(x + y) = \sin x\cos y + \cos x\sin y$. Check: $\sin 60^\circ + \sin 30^\circ = \frac{\sqrt{3} + 1}{2} \approx 1.37$, which is not even a possible sine value.`,
            why: "Sine is not linear, so it does not distribute over addition. Testing one pair of angles exposes the error at once.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`What is $\sin(\pi + x)$?`,
              emoji: "🔄",
              options: [t`$\sin x$`, t`$-\sin x$`, t`$\cos x$`, t`$-\cos x$`],
              answer: 1,
              trap: 0,
              explain: t`$\sin(\pi + x) = \sin\pi\cos x + \cos\pi\sin x = -\sin x$. Adding $\pi$ moves the point to the opposite side of the circle, flipping both coordinates.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`The proof of $\cos(x + y)$ is a standard long-answer question: draw the unit circle with all four points labelled, state why the chords are equal, then expand. For allied angles, a quick method: if the angle is $\pi \pm x$ or $2\pi - x$, keep the same function; if it is $\frac{\pi}{2} \pm x$, change sin ↔ cos; then fix the sign from the quadrant, treating $x$ as acute.`,
          },
          {
            type: "keypoints",
            items: [
              t`sin and cos: domain $\mathbf{R}$, range $[-1, 1]$, period $2\pi$; tan and cot have period $\pi$.`,
              t`$\cos(-x) = \cos x$ and $\sin(-x) = -\sin x$.`,
              t`$\cos(x + y) = \cos x\cos y - \sin x\sin y$ is proved with chords on the unit circle; the other formulae follow.`,
              t`$\tan(x + y) = \frac{\tan x + \tan y}{1 - \tan x\tan y}$.`,
              "Allied angles: same function for π ± x, 2π − x; co-function for π/2 ± x; sign from the quadrant.",
            ],
          },
        ],
        flashcards: [
          { front: "Range of sec x and cosec x", back: t`$(-\infty, -1] \cup [1, \infty)$.` },
          { front: "Period of tan x", back: t`$\pi$.` },
          { front: "Domain of tan x", back: t`$\mathbf{R} - \{(2n+1)\frac{\pi}{2} : n \in \mathbf{Z}\}$.` },
          { front: t`$\cos(x - y)$`, back: t`$\cos x\cos y + \sin x\sin y$.` },
          { front: t`$\sin(x - y)$`, back: t`$\sin x\cos y - \cos x\sin y$.` },
          { front: t`$\tan(x - y)$`, back: t`$\frac{\tan x - \tan y}{1 + \tan x\tan y}$.` },
          { front: t`$\cos\left(\frac{\pi}{2} + x\right)$`, back: t`$-\sin x$.` },
          { front: t`$\cos 15^\circ$`, back: t`$\frac{\sqrt{6} + \sqrt{2}}{4}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\cos 105^\circ$ equals`,
            options: [t`$\frac{1 - \sqrt{3}}{2\sqrt{2}}$`, t`$\frac{1 + \sqrt{3}}{2\sqrt{2}}$`, t`$\frac{\sqrt{3} - 1}{2\sqrt{2}}$`, t`$-\frac{1 + \sqrt{3}}{2\sqrt{2}}$`],
            answer: 0,
            explain: t`$\cos(60^\circ + 45^\circ) = \frac{1}{2}\cdot\frac{1}{\sqrt{2}} - \frac{\sqrt{3}}{2}\cdot\frac{1}{\sqrt{2}} = \frac{1 - \sqrt{3}}{2\sqrt{2}}$, which is negative, as it should be in quadrant II.`,
          },
          {
            kind: "mcq",
            q: t`$\cos(\pi - x)$ equals`,
            options: [t`$\cos x$`, t`$-\cos x$`, t`$\sin x$`, t`$-\sin x$`],
            answer: 1,
            explain: t`$\cos\pi\cos x + \sin\pi\sin x = -\cos x$.`,
          },
          {
            kind: "numeric",
            q: t`$\tan A = 2$ and $\tan B = 3$. Find $\tan(A + B)$.`,
            answer: -1,
            explain: t`$\frac{2 + 3}{1 - 6} = \frac{5}{-5} = -1$.`,
          },
          {
            kind: "truefalse",
            q: "The cosine function is an even function.",
            answer: true,
            explain: t`$\cos(-x) = \cos x$ for every $x$, because $-x$ is the reflection of $x$ in the $x$-axis and cosine is the $x$-coordinate.`,
          },
          {
            kind: "mcq",
            q: t`The range of $\sec x$ is`,
            options: [t`$[-1, 1]$`, t`$\mathbf{R}$`, t`$(-\infty, -1] \cup [1, \infty)$`, t`$[1, \infty)$`],
            answer: 2,
            explain: t`$\sec x = \frac{1}{\cos x}$ with $0 < |\cos x| \le 1$, so $|\sec x| \ge 1$, and both signs occur.`,
          },
          {
            kind: "multi",
            q: t`On the interval $\left(\frac{\pi}{2}, \pi\right)$ (quadrant II), which statements are true?`,
            options: ["sin x decreases from 1 to 0", "cos x decreases from 0 to −1", "tan x increases from −∞ to 0", "cos x increases from −1 to 0"],
            answers: [0, 1, 2],
            explain: "In quadrant II the point moves from (0, 1) to (−1, 0): its y-coordinate falls and its x-coordinate falls from 0 to −1. tan rises from −∞ to 0.",
          },
          {
            kind: "mcq",
            q: t`$\dfrac{\tan 69^\circ + \tan 66^\circ}{1 - \tan 69^\circ\tan 66^\circ}$ equals`,
            options: ["1", "−1", t`$\sqrt{3}$`, "0"],
            answer: 1,
            difficulty: 2,
            explain: t`It is $\tan(69^\circ + 66^\circ) = \tan 135^\circ = -1$.`,
          },
        ],
      },
      {
        slug: "c11-multiple-angles",
        title: "Multiple Angles, Sum-to-Product and Product-to-Sum",
        summary: "Formulae for 2x and 3x, half-angle values, and converting sums of sines and cosines into products and back.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: t`Put $y = x$ in the sum formulae and you get the **double-angle** formulae. Using $\sin^2 x + \cos^2 x = 1$, $\cos 2x$ can be written in three useful ways; rearranged, they give $\cos^2 x$ and $\sin^2 x$ in terms of $\cos 2x$, which is how we find half-angle values.`,
          },
          {
            type: "formula",
            tex: t`\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x = \frac{1 - \tan^2 x}{1 + \tan^2 x}`,
            caption: t`So 2cos²x = 1 + cos 2x and 2sin²x = 1 − cos 2x.`,
          },
          {
            type: "formula",
            tex: t`\sin 2x = 2\sin x\cos x = \frac{2\tan x}{1 + \tan^2 x}, \qquad \tan 2x = \frac{2\tan x}{1 - \tan^2 x}`,
            caption: "tan 2x needs tan x ≠ ±1 (and x not an odd multiple of π/2).",
          },
          {
            type: "formula",
            tex: t`\sin 3x = 3\sin x - 4\sin^3 x, \qquad \cos 3x = 4\cos^3 x - 3\cos x, \qquad \tan 3x = \frac{3\tan x - \tan^3 x}{1 - 3\tan^2 x}`,
            caption: "Triple-angle formulae.",
          },
          {
            type: "example",
            title: "Derivation: sin 3x",
            problem: t`Prove that $\sin 3x = 3\sin x - 4\sin^3 x$.`,
            steps: [
              t`$\sin 3x = \sin(2x + x) = \sin 2x\cos x + \cos 2x\sin x$.`,
              t`$= 2\sin x\cos^2 x + (1 - 2\sin^2 x)\sin x$.`,
              t`Replace $\cos^2 x$ by $1 - \sin^2 x$: $= 2\sin x - 2\sin^3 x + \sin x - 2\sin^3 x$.`,
              t`$= 3\sin x - 4\sin^3 x$.`,
            ],
            answer: t`$\sin 3x = 3\sin x - 4\sin^3 x$. ∎ (For $\cos 3x$, start from $\cos(2x + x)$ and use $\cos 2x = 2\cos^2 x - 1$.)`,
          },
          {
            type: "example",
            title: "Half-angle values",
            problem: t`$\tan x = -\frac{4}{3}$ and $x$ lies in the second quadrant. Find $\sin\frac{x}{2}$, $\cos\frac{x}{2}$ and $\tan\frac{x}{2}$.`,
            steps: [
              t`In quadrant II, $\cos x < 0$: $\sec^2 x = 1 + \frac{16}{9} = \frac{25}{9}$, so $\cos x = -\frac{3}{5}$.`,
              t`$\frac{\pi}{2} < x < \pi$ gives $\frac{\pi}{4} < \frac{x}{2} < \frac{\pi}{2}$: quadrant I, so all half-angle values are positive.`,
              t`$\cos^2\frac{x}{2} = \frac{1 + \cos x}{2} = \frac{1 - 3/5}{2} = \frac{1}{5}$, so $\cos\frac{x}{2} = \frac{1}{\sqrt{5}}$.`,
              t`$\sin^2\frac{x}{2} = \frac{1 - \cos x}{2} = \frac{1 + 3/5}{2} = \frac{4}{5}$, so $\sin\frac{x}{2} = \frac{2}{\sqrt{5}}$, and $\tan\frac{x}{2} = 2$.`,
            ],
            answer: t`$\sin\frac{x}{2} = \frac{2}{\sqrt{5}}$, $\cos\frac{x}{2} = \frac{1}{\sqrt{5}}$, $\tan\frac{x}{2} = 2$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$\sin x = \frac{3}{5}$ with $x$ acute. Find $\sin 2x$ as a decimal.`,
                answer: 0.96,
                tolerance: 0.001,
                explain: t`$\cos x = \frac{4}{5}$, so $\sin 2x = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25} = 0.96$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\sin 2x = 2\sin x$, so $\sin 60^\circ = 2\sin 30^\circ = 1$.`,
            right: t`$\sin 2x = 2\sin x\cos x$. Here $\sin 60^\circ = 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}$.`,
            why: "The 2 inside the bracket multiplies the angle, not the value. Doubling an angle never simply doubles its sine (the sine can never exceed 1).",
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \sin x + \sin y &= 2\sin\tfrac{x + y}{2}\cos\tfrac{x - y}{2} & \sin x - \sin y &= 2\cos\tfrac{x + y}{2}\sin\tfrac{x - y}{2} \\ \cos x + \cos y &= 2\cos\tfrac{x + y}{2}\cos\tfrac{x - y}{2} & \cos x - \cos y &= -2\sin\tfrac{x + y}{2}\sin\tfrac{x - y}{2} \end{aligned}`,
            caption: "Sum-to-product formulae. Note the minus sign in cos x − cos y.",
          },
          {
            type: "formula",
            tex: t`\begin{aligned} 2\sin x\cos y &= \sin(x + y) + \sin(x - y) & 2\cos x\sin y &= \sin(x + y) - \sin(x - y) \\ 2\cos x\cos y &= \cos(x + y) + \cos(x - y) & -2\sin x\sin y &= \cos(x + y) - \cos(x - y) \end{aligned}`,
            caption: "Product-to-sum formulae: add or subtract the compound-angle formulae in pairs.",
          },
          {
            type: "example",
            title: "Using sum-to-product",
            problem: t`Prove that $\dfrac{\sin 5x + \sin 3x}{\cos 5x + \cos 3x} = \tan 4x$.`,
            steps: [
              t`Numerator: $\sin 5x + \sin 3x = 2\sin\frac{5x + 3x}{2}\cos\frac{5x - 3x}{2} = 2\sin 4x\cos x$.`,
              t`Denominator: $\cos 5x + \cos 3x = 2\cos 4x\cos x$.`,
              t`Cancel $2\cos x$ (where it is non-zero): $\frac{\sin 4x}{\cos 4x} = \tan 4x$.`,
            ],
            answer: "LHS = tan 4x = RHS. ∎",
          },
          {
            type: "example",
            title: "A sum that vanishes",
            problem: t`Show that $\cos 20^\circ + \cos 100^\circ + \cos 140^\circ = 0$.`,
            steps: [
              t`Pair the last two: $\cos 100^\circ + \cos 140^\circ = 2\cos 120^\circ\cos 20^\circ$ (note $\cos(-20^\circ) = \cos 20^\circ$).`,
              t`$\cos 120^\circ = -\frac{1}{2}$, so this pair equals $-\cos 20^\circ$.`,
              t`Adding $\cos 20^\circ$ gives 0.`,
            ],
            answer: "The sum is 0. ∎",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each expression to its product form.",
              pairs: [
                ["sin A + sin B", "2 sin((A+B)/2) cos((A−B)/2)"],
                ["sin A − sin B", "2 cos((A+B)/2) sin((A−B)/2)"],
                ["cos A + cos B", "2 cos((A+B)/2) cos((A−B)/2)"],
                ["cos A − cos B", "−2 sin((A+B)/2) sin((A−B)/2)"],
              ],
              explain: "Sums of like functions give cos of the half-difference; only cos A − cos B carries a minus sign and two sines.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`In identity proofs, work on one side only (usually the more complicated one) and end with "= RHS". For half-angle questions, the mark for the **sign** comes from stating the quadrant of $\frac{x}{2}$, not of $x$. Pair terms in sum-to-product so that the half-sums or half-differences become standard angles.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$; $\sin 2x = 2\sin x\cos x$.`,
              t`$\sin 3x = 3\sin x - 4\sin^3 x$; $\cos 3x = 4\cos^3 x - 3\cos x$.`,
              t`Half angles: $\cos^2\frac{x}{2} = \frac{1 + \cos x}{2}$, $\sin^2\frac{x}{2} = \frac{1 - \cos x}{2}$; sign from the quadrant of $\frac{x}{2}$.`,
              "Sum-to-product turns sums into products (useful for factorising and proofs); product-to-sum does the reverse.",
            ],
          },
        ],
        flashcards: [
          { front: "Three forms of cos 2x", back: t`$\cos^2 x - \sin^2 x$, $2\cos^2 x - 1$, $1 - 2\sin^2 x$.` },
          { front: "sin 2x in terms of tan x", back: t`$\frac{2\tan x}{1 + \tan^2 x}$.` },
          { front: "tan 2x", back: t`$\frac{2\tan x}{1 - \tan^2 x}$.` },
          { front: "sin 3x", back: t`$3\sin x - 4\sin^3 x$.` },
          { front: "cos 3x", back: t`$4\cos^3 x - 3\cos x$.` },
          { front: "tan 3x", back: t`$\frac{3\tan x - \tan^3 x}{1 - 3\tan^2 x}$.` },
          { front: "cos x − cos y", back: t`$-2\sin\frac{x+y}{2}\sin\frac{x-y}{2}$.` },
          { front: "2 cos x cos y", back: t`$\cos(x + y) + \cos(x - y)$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\cos^2 15^\circ - \sin^2 15^\circ$ equals`,
            options: [t`$\frac{1}{2}$`, t`$\frac{\sqrt{3}}{2}$`, "1", t`$\frac{1}{\sqrt{2}}$`],
            answer: 1,
            explain: t`It is $\cos 30^\circ = \frac{\sqrt{3}}{2}$.`,
          },
          {
            kind: "mcq",
            q: t`$2\sin 75^\circ\cos 15^\circ$ equals`,
            options: [t`$1 + \frac{\sqrt{3}}{2}$`, t`$\frac{\sqrt{3}}{2}$`, "1", t`$1 - \frac{\sqrt{3}}{2}$`],
            answer: 0,
            explain: t`$2\sin x\cos y = \sin(x + y) + \sin(x - y) = \sin 90^\circ + \sin 60^\circ = 1 + \frac{\sqrt{3}}{2}$.`,
          },
          {
            kind: "mcq",
            q: t`$\dfrac{1 - \cos 2x}{\sin 2x}$ simplifies to`,
            options: [t`$\cot x$`, t`$\tan x$`, t`$\tan 2x$`, t`$2\tan x$`],
            answer: 1,
            explain: t`$\frac{2\sin^2 x}{2\sin x\cos x} = \frac{\sin x}{\cos x} = \tan x$.`,
          },
          {
            kind: "truefalse",
            q: t`$\cos 3x = 4\cos^3 x - 3\cos x$ for all real $x$.`,
            answer: true,
            explain: t`Expand $\cos(2x + x)$ with $\cos 2x = 2\cos^2 x - 1$ and $\sin^2 x = 1 - \cos^2 x$.`,
          },
          {
            kind: "numeric",
            q: t`$\tan x = \frac{1}{2}$. Find $\cos 2x$ as a decimal.`,
            answer: 0.6,
            tolerance: 0.001,
            explain: t`$\cos 2x = \frac{1 - \tan^2 x}{1 + \tan^2 x} = \frac{3/4}{5/4} = \frac{3}{5} = 0.6$.`,
          },
          {
            kind: "mcq",
            q: t`$\sin 50^\circ - \sin 70^\circ + \sin 10^\circ$ equals`,
            options: ["1", "0", t`$\frac{1}{2}$`, t`$2\sin 10^\circ$`],
            answer: 1,
            difficulty: 2,
            hint: "Combine the first two with sin x − sin y.",
            explain: t`$\sin 50^\circ - \sin 70^\circ = 2\cos 60^\circ\sin(-10^\circ) = -\sin 10^\circ$. Adding $\sin 10^\circ$ gives 0.`,
          },
          {
            kind: "multi",
            q: t`Which expressions are equal to $\cos 2x$ (where defined)?`,
            options: [t`$\cos^2 x - \sin^2 x$`, t`$2\cos^2 x - 1$`, t`$1 - 2\sin^2 x$`, t`$\frac{1 - \tan^2 x}{1 + \tan^2 x}$`, t`$2\sin x\cos x$`],
            answers: [0, 1, 2, 3],
            explain: t`All four are forms of $\cos 2x$; $2\sin x\cos x$ is $\sin 2x$.`,
          },
          {
            kind: "numeric",
            q: t`$\cos x = -\frac{1}{3}$ and $\pi < x < \frac{3\pi}{2}$. Find $\cos\frac{x}{2}$ correct to 3 decimal places.`,
            answer: -0.577,
            tolerance: 0.002,
            difficulty: 3,
            hint: t`Find the quadrant of $\frac{x}{2}$ first.`,
            explain: t`$\frac{\pi}{2} < \frac{x}{2} < \frac{3\pi}{4}$: quadrant II, so $\cos\frac{x}{2} < 0$. $\cos^2\frac{x}{2} = \frac{1 - 1/3}{2} = \frac{1}{3}$, so $\cos\frac{x}{2} = -\frac{1}{\sqrt{3}} \approx -0.577$.`,
          },
        ],
      },
    ],
  },
  /* END TOPICS */
];

export const links: Record<string, string | string[]> = {
  "11:Sets": "c11-sets",
  "11:Relations and Functions": "c11-relations-functions",
};
