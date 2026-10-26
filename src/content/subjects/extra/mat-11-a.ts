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
  /* END TOPICS */
];

export const links: Record<string, string | string[]> = {
  "11:Sets": "c11-sets",
};
