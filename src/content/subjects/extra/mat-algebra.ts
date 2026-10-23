import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Sets                                                          */
  /* ------------------------------------------------------------ */
  {
    slug: "sets",
    title: "Sets",
    icon: "🗂️",
    description: "Roster and set-builder form, subsets, power sets, intervals, set operations, Venn diagrams and counting with n(A ∪ B).",
    lessons: [
      {
        slug: "sets-basics",
        title: "Sets, subsets and power sets",
        summary: "How to write a set, the kinds of sets, subsets, power sets and interval notation.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "A **set** is a well-defined collection of objects. *Well-defined* means that for any object you can say for certain whether it belongs. \"The states of India\" is a set; \"the beautiful cities of India\" is not, because beauty is a matter of opinion.",
          },
          { type: "heading", text: "Two ways to write a set" },
          {
            type: "table",
            headers: ["Form", "Example", "When to use it"],
            rows: [
              ["Roster (tabular)", t`$A = \{2, 3, 5, 7\}$`, "Small or clearly patterned sets"],
              ["Set-builder", t`$A = \{x : x \text{ is a prime}, x < 10\}$`, "Large or infinite sets, or a set given by a rule"],
            ],
          },
          { type: "heading", text: "Kinds of sets" },
          {
            type: "list",
            items: [
              t`**Empty (null) set** $\varnothing = \{\}$: no elements, e.g. $\{x \in \mathbb{N} : x^2 = 3\}$.`,
              "**Finite / infinite**: the number of elements can or cannot be counted to an end.",
              t`**Equal sets** have exactly the same elements: $\{1,2,3\} = \{3,1,2,2\}$ (order and repetition do not matter).`,
              t`**Equivalent sets** have the same number of elements: $n(A) = n(B)$.`,
              t`**Universal set** $U$: the set containing every element under discussion.`,
            ],
          },
          { type: "heading", text: "Subsets and the power set" },
          {
            type: "text",
            md: t`$A \subseteq B$ if every element of $A$ is in $B$. A **proper subset** $A \subset B$ also needs $A \ne B$. The **power set** $P(A)$ is the set of all subsets of $A$.`,
          },
          { type: "formula", tex: t`n(A) = m \;\Rightarrow\; n\big(P(A)\big) = 2^m, \quad \text{proper subsets} = 2^m - 1`, caption: "Each element is either in or out of a subset: 2 choices per element" },
          {
            type: "text",
            md: t`**Worked example.** $A = \{a, b, c\}$. Subsets: $\varnothing, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}$. That is $2^3 = 8$ subsets, of which $8 - 1 = 7$ are proper.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`$\{\varnothing\}$ is **not** empty: it has one element (the empty set). Also, $\varnothing$ is a subset of every set, and every set is a subset of itself. Many students write $n(P(\varnothing)) = 0$; the correct answer is $2^0 = 1$.`,
          },
          { type: "heading", text: "Intervals: subsets of ℝ" },
          {
            type: "table",
            headers: ["Notation", "Meaning", "Endpoints"],
            rows: [
              ["$(a, b)$", "$a < x < b$", "Both excluded"],
              ["$[a, b]$", t`$a \le x \le b$`, "Both included"],
              ["$[a, b)$", t`$a \le x < b$`, "Only $a$ included"],
              ["$(a, b]$", t`$a < x \le b$`, "Only $b$ included"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A set has 4 elements. How many subsets does it have?",
                answer: 16,
                explain: t`$2^4 = 16$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "A set must be well-defined; order and repetition of elements do not matter.",
              t`$n(P(A)) = 2^{n(A)}$; proper subsets $= 2^{n(A)} - 1$.`,
              t`$\varnothing \subseteq A$ for every set $A$; $\{\varnothing\}$ has one element.`,
              t`$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.`,
              "Square bracket = endpoint included, round bracket = excluded.",
            ],
          },
        ],
        flashcards: [
          { front: "Number of subsets of a set with n elements", back: t`$2^n$` },
          { front: "Equal vs equivalent sets", back: "Equal: same elements. Equivalent: same number of elements." },
          { front: t`Is $\{\varnothing\}$ empty?`, back: "No. It has exactly one element, the empty set." },
          { front: t`Set-builder form of $(2, 5]$`, back: t`$\{x \in \mathbb{R} : 2 < x \le 5\}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is the empty set?",
            options: [t`$\{x \in \mathbb{N} : 1 < x < 2\}$`, t`$\{0\}$`, t`$\{\varnothing\}$`, t`$\{x : x \text{ is an even prime}\}$`],
            answer: 0,
            explain: t`There is no natural number strictly between 1 and 2. $\{0\}$ and $\{\varnothing\}$ each have one element, and 2 is an even prime.`,
          },
          {
            kind: "numeric",
            q: "How many proper subsets does a set with 5 elements have?",
            answer: 31,
            explain: t`$2^5 - 1 = 31$.`,
          },
          {
            kind: "truefalse",
            q: t`$\{1, 2, 2, 3\}$ and $\{3, 2, 1\}$ are equal sets.`,
            answer: true,
            explain: "Repetition and order do not matter; both sets contain exactly 1, 2 and 3.",
          },
          {
            kind: "fill",
            q: "The interval [2, 5) contains 2 but does not contain ___.",
            answer: ["5"],
            explain: "A round bracket excludes the endpoint 5.",
          },
          {
            kind: "order",
            q: "Arrange from smallest set to largest (each is a subset of the next).",
            items: [t`$\varnothing$`, t`$\mathbb{N}$`, t`$\mathbb{Z}$`, t`$\mathbb{Q}$`, t`$\mathbb{R}$`],
            explain: t`$\varnothing \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.`,
          },
          {
            kind: "numeric",
            q: t`If $n(P(A)) = 64$, find $n(A)$.`,
            answer: 6,
            difficulty: 2,
            explain: t`$2^{n} = 64 = 2^6$, so $n(A) = 6$.`,
          },
        ],
      },
      {
        slug: "sets-operations",
        title: "Union, intersection, complement and Venn diagrams",
        summary: "Set operations, their laws, De Morgan's laws and how to read Venn diagrams.",
        minutes: 15,
        xp: 35,
        blocks: [
          { type: "text", md: "Once you have sets, you can combine them, much like adding and multiplying numbers. Venn diagrams turn these operations into pictures of overlapping circles." },
          {
            type: "table",
            headers: ["Operation", "Symbol", "Elements that are…"],
            rows: [
              ["Union", t`$A \cup B$`, "in A or B (or both)"],
              ["Intersection", t`$A \cap B$`, "in both A and B"],
              ["Difference", t`$A - B$`, "in A but not in B"],
              ["Complement", t`$A'$`, "in U but not in A"],
              ["Symmetric difference", t`$A \,\Delta\, B$`, t`in exactly one of them: $(A - B) \cup (B - A)$`],
            ],
          },
          { type: "illustration", emoji: "⭕", caption: "Two overlapping circles inside a rectangle U: the lens in the middle is A ∩ B, everything shaded is A ∪ B." },
          {
            type: "text",
            md: t`**Worked example.** $U = \{1, 2, \dots, 10\}$, $A = \{2, 4, 6, 8\}$, $B = \{1, 2, 3, 4\}$.

- $A \cup B = \{1, 2, 3, 4, 6, 8\}$
- $A \cap B = \{2, 4\}$
- $A - B = \{6, 8\}$, $B - A = \{1, 3\}$
- $A' = \{1, 3, 5, 7, 9, 10\}$`,
          },
          { type: "heading", text: "Laws worth remembering" },
          {
            type: "list",
            items: [
              t`Commutative: $A \cup B = B \cup A$, $A \cap B = B \cap A$.`,
              t`Distributive: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ and $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.`,
              t`Complement laws: $A \cup A' = U$, $A \cap A' = \varnothing$, $(A')' = A$.`,
              t`$A - B = A \cap B'$.`,
            ],
          },
          { type: "formula", tex: t`(A \cup B)' = A' \cap B' \qquad (A \cap B)' = A' \cup B'`, caption: "De Morgan's laws: complement flips ∪ and ∩" },
          {
            type: "text",
            md: t`**Check De Morgan with the example.** $(A \cup B)' = \{5, 7, 9, 10\}$. $B' = \{5, 6, 7, 8, 9, 10\}$, so $A' \cap B' = \{5, 7, 9, 10\}$. Same set.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common slip",
            md: t`$A - B \ne B - A$ in general. In the example $A - B = \{6, 8\}$ but $B - A = \{1, 3\}$. Also, $A - B$ and $A \cap B$ are always **disjoint**, and together they make up $A$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`If $A = \{1,2,3,4,5\}$ and $B = \{4,5,6\}$, then $A - B$ is:`,
                options: [t`$\{1,2,3\}$`, t`$\{6\}$`, t`$\{4,5\}$`, t`$\{1,2,3,6\}$`],
                answer: 0,
                explain: "Remove 4 and 5 (the common elements) from A.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Union = or; intersection = and; difference = but not.",
              t`$A - B = A \cap B'$.`,
              "De Morgan: complement of union = intersection of complements, and vice versa.",
              t`Disjoint sets: $A \cap B = \varnothing$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$(A \cup B)'$ equals`, back: t`$A' \cap B'$` },
          { front: t`$A - B$ in terms of ∩ and complement`, back: t`$A \cap B'$` },
          { front: "Symmetric difference", back: t`$(A - B) \cup (B - A)$: elements in exactly one set` },
          { front: "Disjoint sets", back: t`Sets with $A \cap B = \varnothing$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$(A \cap B)'$ is equal to:`,
            options: [t`$A' \cap B'$`, t`$A' \cup B'$`, t`$A \cup B$`, t`$A - B$`],
            answer: 1,
            explain: "De Morgan's law: complement of an intersection is the union of complements.",
          },
          {
            kind: "truefalse",
            q: t`For any sets, $A - B = B - A$.`,
            answer: false,
            explain: t`Counter-example: $A = \{1\}, B = \varnothing$ gives $A - B = \{1\}$ but $B - A = \varnothing$.`,
          },
          {
            kind: "fill",
            q: t`For any set $A$ in universal set $U$, $A \cup A' =$ ___.`,
            answer: ["U", "the universal set"],
            explain: "Every element of U is either in A or in A'.",
          },
          {
            kind: "mcq",
            q: t`$A = \{1,2,3\}$, $B = \{2,3,4\}$. Find $A \,\Delta\, B$.`,
            options: [t`$\{2,3\}$`, t`$\{1,4\}$`, t`$\{1,2,3,4\}$`, t`$\varnothing$`],
            answer: 1,
            explain: t`$A - B = \{1\}$, $B - A = \{4\}$, union $\{1, 4\}$.`,
          },
          {
            kind: "truefalse",
            q: t`$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.`,
            answer: true,
            explain: "This is the distributive law of intersection over union.",
          },
        ],
      },
      {
        slug: "sets-counting",
        title: "Counting with sets: n(A ∪ B) problems",
        summary: "The inclusion–exclusion formulas for two and three sets, and survey-style word problems.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "text", md: "Surveys ask questions like \"how many students like cricket or football?\" The answer comes from counting each region of a Venn diagram exactly once." },
          { type: "formula", tex: t`n(A \cup B) = n(A) + n(B) - n(A \cap B)`, caption: "Subtract the overlap, which was counted twice" },
          {
            type: "text",
            md: t`**Worked example 1.** In a class of 60 in Pune, 35 like cricket (C), 25 like football (F) and 10 like both.

- At least one: $n(C \cup F) = 35 + 25 - 10 = 50$
- Neither: $60 - 50 = 10$
- Only cricket: $n(C) - n(C \cap F) = 35 - 10 = 25$`,
          },
          { type: "heading", text: "Three sets" },
          { type: "formula", tex: t`n(A \cup B \cup C) = \sum n(A) - \sum n(A \cap B) + n(A \cap B \cap C)` },
          {
            type: "text",
            md: t`**Worked example 2.** 200 households in Chennai were asked which newspapers they read: $H = 100$, $T = 80$, $I = 60$, $H \cap T = 30$, $T \cap I = 20$, $H \cap I = 25$, all three $= 10$.

- At least one: $100 + 80 + 60 - 30 - 20 - 25 + 10 = 175$, so none $= 200 - 175 = 25$.
- Only H: $100 - 30 - 25 + 10 = 55$; only T: $80 - 30 - 20 + 10 = 40$; only I: $60 - 20 - 25 + 10 = 25$.
- Exactly one: $55 + 40 + 25 = 120$. Exactly two: $(30 + 20 + 25) - 3(10) = 45$. Check: $120 + 45 + 10 = 175$.`,
          },
          {
            type: "table",
            headers: ["Quantity", "Formula (three sets)"],
            rows: [
              ["Exactly one", t`$\sum n(A) - 2\sum n(A\cap B) + 3\,n(A\cap B\cap C)$`],
              ["Exactly two", t`$\sum n(A \cap B) - 3\,n(A \cap B \cap C)$`],
              ["None", t`$n(U) - n(A \cup B \cup C)$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "\"Only A\" is not the same as \"A\". When a question says *only Hindi*, subtract every overlap involving Hindi (and add back the triple region for three sets). Fill a Venn diagram from the centre outwards to avoid this.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Max and min of the overlap",
            md: t`With $n(U)$ fixed: $n(A \cap B)$ is largest when the smaller set sits inside the other ($\min(n(A), n(B))$), and smallest when the union is as big as possible: $\max(0,\; n(A) + n(B) - n(U))$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$n(A) = 20$, $n(B) = 15$, $n(A \cup B) = 28$. Find $n(A \cap B)$.`,
                answer: 7,
                explain: t`$n(A \cap B) = 20 + 15 - 28 = 7$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$.`,
              t`$n(A - B) = n(A) - n(A \cap B)$.`,
              "Three sets: add singles, subtract pairs, add back the triple.",
              "Fill Venn regions from the centre outward.",
            ],
          },
        ],
        flashcards: [
          { front: t`$n(A \cup B)$`, back: t`$n(A) + n(B) - n(A \cap B)$` },
          { front: t`$n(\text{only } A)$ for two sets`, back: t`$n(A) - n(A \cap B)$` },
          { front: "Exactly two of three sets", back: t`$\sum n(A \cap B) - 3\,n(A \cap B \cap C)$` },
          { front: "First region to fill in a 3-set Venn diagram", back: t`The centre, $A \cap B \cap C$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "In a group of 50 people, 30 speak Hindi, 25 speak Tamil and 10 speak both. How many speak neither?",
            answer: 5,
            explain: t`At least one $= 30 + 25 - 10 = 45$; neither $= 50 - 45 = 5$.`,
          },
          {
            kind: "numeric",
            q: "In the same group, how many speak only Tamil?",
            answer: 15,
            explain: t`$25 - 10 = 15$.`,
          },
          {
            kind: "mcq",
            q: t`$n(U) = 100$, $n(A) = 70$, $n(B) = 60$. The least possible value of $n(A \cap B)$ is:`,
            options: ["10", "30", "60", "0"],
            answer: 1,
            difficulty: 3,
            explain: t`$n(A \cup B) \le 100$, so $n(A \cap B) = 130 - n(A \cup B) \ge 30$.`,
          },
          {
            kind: "numeric",
            q: t`$n(A)=12$, $n(B)=10$, $n(C)=8$, each pairwise intersection has 4 elements and $n(A \cap B \cap C) = 2$. Find $n(A \cup B \cup C)$.`,
            answer: 20,
            difficulty: 2,
            explain: t`$30 - 12 + 2 = 20$.`,
          },
          {
            kind: "truefalse",
            q: t`If $A$ and $B$ are disjoint, then $n(A \cup B) = n(A) + n(B)$.`,
            answer: true,
            explain: t`The overlap $n(A \cap B)$ is 0.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Relations and Functions                                        */
  /* ------------------------------------------------------------ */
  {
    slug: "relations-functions",
    title: "Relations and Functions",
    icon: "🔗",
    description: "Cartesian products, relations, equivalence relations, and functions: domain, range, one-one, onto, composition and inverse.",
    lessons: [
      {
        slug: "rf-cartesian-relations",
        title: "Cartesian products and relations",
        summary: "Ordered pairs, A × B, relations as subsets of A × B, and domain, codomain and range.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "A railway timetable pairs every train with a departure time. Mathematics builds such pairings from **ordered pairs** $(a, b)$, where order matters: $(2, 3) \\ne (3, 2)$." },
          { type: "formula", tex: t`A \times B = \{(a, b) : a \in A,\; b \in B\}, \qquad n(A \times B) = n(A)\cdot n(B)`, caption: "Cartesian product" },
          {
            type: "text",
            md: t`**Worked example.** $A = \{1, 2\}$, $B = \{3, 4, 5\}$. Then $A \times B = \{(1,3), (1,4), (1,5), (2,3), (2,4), (2,5)\}$, which has $2 \times 3 = 6$ pairs. Note $A \times B \ne B \times A$ unless $A = B$ (or one is empty).`,
          },
          { type: "heading", text: "What is a relation?" },
          {
            type: "text",
            md: t`A **relation** $R$ from $A$ to $B$ is any subset of $A \times B$. If $(a, b) \in R$ we write $a\,R\,b$. The **domain** is the set of first entries, the **codomain** is $B$, and the **range** is the set of second entries actually used.`,
          },
          {
            type: "text",
            md: t`**Worked example.** With $A$, $B$ above, $R = \{(a, b) : b = a + 2\}$ gives $R = \{(1, 3), (2, 4)\}$. Domain $= \{1, 2\}$, range $= \{3, 4\}$, codomain $= \{3, 4, 5\}$.`,
          },
          { type: "formula", tex: t`\text{Number of relations from } A \text{ to } B = 2^{\,n(A)\,n(B)}`, caption: "Every subset of A × B is a relation" },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Range ⊆ codomain, but they need not be equal. In the example, 5 is in the codomain but not in the range. Questions that ask for the *range* want only the second entries that appear.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Equal ordered pairs",
            md: t`$(a, b) = (c, d)$ means $a = c$ **and** $b = d$. E.g. $(x + 1, y - 2) = (3, 1)$ gives $x = 2, y = 3$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$n(A) = 3$, $n(B) = 2$. How many relations are there from $A$ to $B$?`,
                answer: 64,
                explain: t`$n(A \times B) = 6$, so $2^6 = 64$ relations.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Ordered pairs: order matters.",
              t`$n(A \times B) = n(A)\,n(B)$.`,
              t`A relation is a subset of $A \times B$; there are $2^{n(A)n(B)}$ of them.`,
              "Range is a subset of the codomain.",
            ],
          },
        ],
        flashcards: [
          { front: t`$n(A \times B)$`, back: t`$n(A) \times n(B)$` },
          { front: "Relation from A to B", back: t`Any subset of $A \times B$` },
          { front: "Number of relations from A (m elements) to B (n elements)", back: t`$2^{mn}$` },
          { front: "Range vs codomain", back: "Range: images actually used. Codomain: the whole set B." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`If $(x + 1, y - 2) = (3, 1)$, find $x + y$.`,
            answer: 5,
            explain: t`$x = 2$, $y = 3$, so $x + y = 5$.`,
          },
          {
            kind: "mcq",
            q: t`If $A \times B$ has 6 elements and $(1, a), (2, b), (3, a)$ are among them, then $B$ could be:`,
            options: [t`$\{a, b\}$`, t`$\{1, 2, 3\}$`, t`$\{a\}$`, t`$\{a, b, c\}$`],
            answer: 0,
            difficulty: 2,
            explain: t`$A \supseteq \{1, 2, 3\}$ and $B \supseteq \{a, b\}$; $3 \times 2 = 6$ fits exactly.`,
          },
          {
            kind: "truefalse",
            q: t`For non-empty sets $A \ne B$, $A \times B = B \times A$.`,
            answer: false,
            explain: "The pairs are reversed, and ordered pairs depend on order.",
          },
          {
            kind: "fill",
            q: "The set of all second elements of the pairs in a relation is called its ___.",
            answer: ["range"],
            explain: "The codomain is the whole of B; the range is what is actually used.",
          },
          {
            kind: "numeric",
            q: t`$A = \{1, 2, 3\}$. How many elements does $A \times A$ have?`,
            answer: 9,
            explain: t`$3 \times 3 = 9$.`,
          },
        ],
      },
      {
        slug: "rf-types-relations",
        title: "Types of relations and equivalence relations",
        summary: "Reflexive, symmetric and transitive relations, equivalence relations and equivalence classes.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "text", md: "A relation **on** a set $A$ is a subset of $A \\times A$. Three properties decide its type." },
          {
            type: "table",
            headers: ["Type", "Condition", "Example on people"],
            rows: [
              ["Reflexive", t`$(a, a) \in R$ for every $a \in A$`, "\"is the same age as\""],
              ["Symmetric", t`$(a, b) \in R \Rightarrow (b, a) \in R$`, "\"is a sibling of\""],
              ["Transitive", t`$(a, b), (b, c) \in R \Rightarrow (a, c) \in R$`, "\"is taller than\""],
              ["Equivalence", "Reflexive + symmetric + transitive", "\"lives in the same city as\""],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** On $A = \{1, 2, 3\}$, let $R = \{(1,1), (2,2), (3,3), (1,2)\}$.

- Reflexive: yes, all of $(1,1), (2,2), (3,3)$ are present.
- Symmetric: no, $(1,2) \in R$ but $(2,1) \notin R$.
- Transitive: yes. The only chains are $(1,1),(1,2) \to (1,2)$ and $(1,2),(2,2) \to (1,2)$, both in $R$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** On $\mathbb{Z}$, define $a\,R\,b \iff 3 \mid (a - b)$.

- Reflexive: $a - a = 0$ is divisible by 3.
- Symmetric: if $3 \mid (a - b)$ then $3 \mid (b - a)$.
- Transitive: $a - c = (a - b) + (b - c)$, a sum of multiples of 3.

So $R$ is an equivalence relation. It splits $\mathbb{Z}$ into three **equivalence classes**: $[0] = \{\dots, -3, 0, 3, \dots\}$, $[1]$ and $[2]$.`,
          },
          {
            type: "callout",
            tone: "fact",
            title: "Classes partition the set",
            md: "Equivalence classes are pairwise disjoint and their union is the whole set. Two classes are either identical or have nothing in common.",
          },
          { type: "heading", text: "Counting relations on a set with n elements" },
          {
            type: "table",
            headers: ["Kind", "Number"],
            rows: [
              ["All relations", t`$2^{n^2}$`],
              ["Reflexive", t`$2^{n(n-1)}$`],
              ["Symmetric", t`$2^{n(n+1)/2}$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / board trap",
            md: t`The empty relation on a non-empty set is symmetric and transitive (vacuously) but **not** reflexive. And $\{(1,2)\}$ on $\{1,2\}$ is transitive, because there is no pair $(2, c)$ to chain with.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many reflexive relations are there on a set with 3 elements?",
                answer: 64,
                explain: t`$2^{n(n-1)} = 2^{6} = 64$. The 3 diagonal pairs are forced; the other 6 pairs are free.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Reflexive: every element related to itself.",
              "Symmetric: every pair has its reverse.",
              "Transitive: every chain a→b→c closes with a→c.",
              "Equivalence relations split a set into disjoint classes.",
            ],
          },
        ],
        flashcards: [
          { front: "Equivalence relation", back: "Reflexive, symmetric and transitive" },
          { front: "Number of relations on a set with n elements", back: t`$2^{n^2}$` },
          { front: "Equivalence classes of a R b ⇔ 3 | (a − b) on ℤ", back: "[0], [1], [2]" },
          { front: "Is the empty relation on {1, 2} transitive?", back: "Yes, vacuously. It is not reflexive." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`On $\{1, 2, 3\}$, $R = \{(1,2), (2,1)\}$ is:`,
            options: ["Reflexive only", "Symmetric only", "Transitive only", "An equivalence relation"],
            answer: 1,
            difficulty: 2,
            explain: t`It is symmetric. Not reflexive (no $(1,1)$). Not transitive: $(1,2), (2,1)$ would need $(1,1)$.`,
          },
          {
            kind: "truefalse",
            q: "\"is less than\" on ℝ is transitive but not symmetric.",
            answer: true,
            explain: t`$a < b < c \Rightarrow a < c$, but $a < b$ does not give $b < a$.`,
          },
          {
            kind: "numeric",
            q: "How many symmetric relations are there on a set with 2 elements?",
            answer: 8,
            explain: t`$2^{n(n+1)/2} = 2^3 = 8$.`,
          },
          {
            kind: "fill",
            q: "A relation that is reflexive, symmetric and transitive is called an ___ relation.",
            answer: ["equivalence"],
            explain: "That is the definition.",
          },
          {
            kind: "mcq",
            q: "The relation \"is perpendicular to\" on the set of lines in a plane is:",
            options: ["Reflexive", "Symmetric but not transitive", "Transitive", "An equivalence relation"],
            answer: 1,
            explain: "If L₁ ⊥ L₂ then L₂ ⊥ L₁, but L₁ ⊥ L₂ and L₂ ⊥ L₃ give L₁ ∥ L₃. No line is perpendicular to itself.",
          },
        ],
      },
      {
        slug: "rf-functions",
        title: "Functions: domain, range, one-one, onto, composition",
        summary: "What makes a relation a function, finding domain and range, injective and surjective maps, composition and inverse.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "text", md: "A **function** $f : A \\to B$ is a relation in which **every** element of $A$ has **exactly one** image in $B$. Think of Aadhaar: every resident gets one number, never two." },
          { type: "heading", text: "Domain and range of common functions" },
          {
            type: "table",
            headers: ["Function", "Domain", "Range"],
            rows: [
              [t`$f(x) = x^2$`, t`$\mathbb{R}$`, t`$[0, \infty)$`],
              [t`$f(x) = \sqrt{x}$`, t`$[0, \infty)$`, t`$[0, \infty)$`],
              [t`$f(x) = \dfrac{1}{x}$`, t`$\mathbb{R} - \{0\}$`, t`$\mathbb{R} - \{0\}$`],
              [t`$f(x) = |x|$`, t`$\mathbb{R}$`, t`$[0, \infty)$`],
              [t`$f(x) = \sqrt{4 - x^2}$`, t`$[-2, 2]$`, t`$[0, 2]$`],
            ],
          },
          { type: "widget", widget: "function-plot", props: { kind: "quadratic" }, caption: "A horizontal line cuts y = x² twice, so x² is not one-one on ℝ." },
          { type: "heading", text: "One-one and onto" },
          {
            type: "list",
            items: [
              t`**One-one (injective):** $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Every horizontal line meets the graph at most once.`,
              "**Onto (surjective):** range = codomain.",
              "**Bijective:** both. Only bijections have inverses.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2x + 3$. If $2x_1 + 3 = 2x_2 + 3$ then $x_1 = x_2$: one-one. For any $y$, $x = \frac{y - 3}{2}$ gives $f(x) = y$: onto. So $f^{-1}(x) = \dfrac{x - 3}{2}$.`,
          },
          { type: "formula", tex: t`(g \circ f)(x) = g\big(f(x)\big)`, caption: "Apply f first, then g" },
          {
            type: "text",
            md: t`**Worked example 2.** $f(x) = x^2$, $g(x) = 2x + 1$. Then $(f \circ g)(x) = (2x + 1)^2$ and $(g \circ f)(x) = 2x^2 + 1$. At $x = 1$: $9$ versus $3$, so $f \circ g \ne g \circ f$.`,
          },
          {
            type: "table",
            headers: [t`Maps from $A$ ($m$ elements) to $B$ ($n$ elements)`, "Number"],
            rows: [
              ["All functions", t`$n^m$`],
              [t`One-one ($m \le n$)`, t`$^nP_m = \dfrac{n!}{(n-m)!}$`],
              [t`Onto, when $n = 2$`, t`$2^m - 2$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: "Whether a function is onto depends on the **codomain**. $f(x) = x^2$ is not onto as a map ℝ → ℝ, but it is onto as a map ℝ → [0, ∞). Always state the codomain before you answer.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many one-one functions are there from a set with 3 elements to a set with 4 elements?",
                answer: 24,
                explain: t`$4 \times 3 \times 2 = 24$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Function: every input has exactly one output.",
              "One-one: different inputs give different outputs; onto: range = codomain.",
              "Only bijections are invertible.",
              t`$g \circ f$ means f first; in general $f \circ g \ne g \circ f$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Condition for a relation to be a function", back: "Every element of the domain has exactly one image" },
          { front: "Number of functions from m-element set to n-element set", back: t`$n^m$` },
          { front: t`Inverse of $f(x) = 2x + 3$`, back: t`$f^{-1}(x) = (x - 3)/2$` },
          { front: t`Domain of $\sqrt{4 - x^2}$`, back: t`$[-2, 2]$` },
          { front: "Horizontal line test", back: "Every horizontal line cuts the graph at most once ⇒ one-one" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ is:`,
            options: ["One-one and onto", "One-one, not onto", "Onto, not one-one", "Neither one-one nor onto"],
            answer: 3,
            explain: t`$f(2) = f(-2)$, so not one-one; negative numbers have no pre-image, so not onto.`,
          },
          {
            kind: "numeric",
            q: t`$f(x) = 3x - 1$ and $g(x) = x^2$. Find $(g \circ f)(2)$.`,
            answer: 25,
            explain: t`$f(2) = 5$, $g(5) = 25$.`,
          },
          {
            kind: "numeric",
            q: "How many onto functions are there from a set with 4 elements to a set with 2 elements?",
            answer: 14,
            difficulty: 2,
            explain: t`All functions $2^4 = 16$, minus the 2 constant ones: $14$.`,
          },
          {
            kind: "fill",
            q: t`The range of $f(x) = |x|$ on $\mathbb{R}$ is $[0, $ ___ $)$.`,
            answer: ["∞", "infinity", "inf"],
            explain: "|x| takes every non-negative value.",
          },
          {
            kind: "truefalse",
            q: "A function must be bijective to have an inverse.",
            answer: true,
            explain: "One-one ensures a unique pre-image; onto ensures every element has one.",
          },
          {
            kind: "order",
            q: t`To evaluate $(f \circ g)(x)$, arrange the steps in order.`,
            items: ["Take the input x", "Apply g to get g(x)", "Apply f to g(x)", "Read off f(g(x))"],
            explain: t`The function written next to $x$ acts first.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Linear Inequalities                                            */
  /* ------------------------------------------------------------ */
  {
    slug: "linear-inequalities",
    title: "Linear Inequalities",
    icon: "⚖️",
    description: "Solving inequalities in one variable, rational and modulus inequalities, and graphing inequalities in two variables.",
    lessons: [
      {
        slug: "li-one-variable",
        title: "Linear inequalities in one variable",
        summary: "The rules for solving, the sign flip, number-line graphs and interval answers.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "A phone plan costs ₹199 plus ₹2 per extra GB. How many extra GB keep your bill under ₹300? That is $199 + 2x < 300$, a **linear inequality**." },
          { type: "heading", text: "The rules" },
          {
            type: "list",
            items: [
              "You may add or subtract the same number on both sides.",
              "You may multiply or divide both sides by the same **positive** number.",
              "Multiplying or dividing by a **negative** number **reverses** the sign.",
            ],
          },
          { type: "formula", tex: t`a < b \;\Rightarrow\; -a > -b`, caption: "The sign flip" },
          {
            type: "text",
            md: t`**Worked example 1.** $3x - 5 < 2x + 4 \Rightarrow x < 9$, i.e. $x \in (-\infty, 9)$.

**Worked example 2.** $-2x + 3 \ge 7 \Rightarrow -2x \ge 4 \Rightarrow x \le -2$ (sign flipped), i.e. $(-\infty, -2]$.`,
          },
          {
            type: "text",
            md: t`**Worked example 3 (double inequality).** $-3 \le 4 - \frac{7x}{2} \le 18$. Subtract 4: $-7 \le -\frac{7x}{2} \le 14$. Multiply by $-\frac{2}{7}$ and flip both signs: $2 \ge x \ge -4$. So $x \in [-4, 2]$.`,
          },
          { type: "widget", widget: "number-line", props: { min: -6, max: 6 }, caption: "Shade from −4 to 2 with filled dots at both ends for [−4, 2]." },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`Forgetting the flip is the most common error. In $-2x \ge 4$, writing $x \ge -2$ gives the wrong half of the number line. Test a value: $x = 0$ gives $3 \ge 7$, false, so 0 must not be in the answer.`,
          },
          {
            type: "text",
            md: t`**Word problem.** Ravi scored 70 and 75 in two unit tests. What must he score in the third to average at least 60? $\frac{70 + 75 + x}{3} \ge 60 \Rightarrow 145 + x \ge 180 \Rightarrow x \ge 35$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`What is the largest whole number of extra GB if $199 + 2x < 300$?`,
                answer: 50,
                explain: t`$2x < 101 \Rightarrow x < 50.5$, so the largest whole number is 50.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Add/subtract freely; multiply/divide by positives freely.",
              "Multiplying or dividing by a negative flips the sign.",
              "Filled dot / square bracket: included. Hollow dot / round bracket: excluded.",
              "Check your answer with a test value.",
            ],
          },
        ],
        flashcards: [
          { front: "What happens when you multiply an inequality by −3?", back: "The inequality sign reverses." },
          { front: t`Solve $-2x \ge 4$`, back: t`$x \le -2$` },
          { front: "Interval for x ≥ 3", back: t`$[3, \infty)$` },
          { front: "Hollow dot on a number line means", back: "The endpoint is not included" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Solve $5 - 3x > 11$.`,
            options: [t`$x > -2$`, t`$x < -2$`, t`$x > 2$`, t`$x < 2$`],
            answer: 1,
            explain: t`$-3x > 6 \Rightarrow x < -2$ (sign flipped).`,
          },
          {
            kind: "numeric",
            q: t`How many integers satisfy $-3 < 2x + 1 \le 7$?`,
            answer: 5,
            difficulty: 2,
            explain: t`$-4 < 2x \le 6 \Rightarrow -2 < x \le 3$: the integers are $-1, 0, 1, 2, 3$, five in all.`,
          },
          {
            kind: "truefalse",
            q: t`If $a < b$ and $c > 0$, then $ac < bc$.`,
            answer: true,
            explain: "Multiplying by a positive number keeps the sign.",
          },
          {
            kind: "fill",
            q: t`The solution of $x - 4 \le 1$ in interval form is $(-\infty,$ ___ $]$.`,
            answer: ["5"],
            explain: t`$x \le 5$.`,
          },
          {
            kind: "numeric",
            q: "A student scored 62 and 48 in two tests. Find the minimum marks needed in a third test to average at least 60.",
            answer: 70,
            explain: t`$110 + x \ge 180 \Rightarrow x \ge 70$.`,
          },
        ],
      },
      {
        slug: "li-rational-modulus",
        title: "Rational and modulus inequalities (JEE)",
        summary: "The wavy-curve (sign-chart) method and inequalities with |x|.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "text", md: "Board papers stick to linear inequalities, but JEE regularly asks for products and quotients such as $\\frac{x - 1}{x + 2} > 0$. Cross-multiplying is wrong here, because the sign of $x + 2$ is unknown." },
          { type: "heading", text: "The wavy-curve method" },
          {
            type: "list",
            ordered: true,
            items: [
              "Move everything to one side so the other side is 0.",
              "Factorise; mark the zeros of numerator and denominator on the number line (critical points).",
              "Start at the far right with + (when every leading coefficient is positive) and alternate signs across each simple root.",
              "Pick the intervals with the required sign. Denominator zeros are always excluded.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** $\frac{x - 1}{x + 2} > 0$. Critical points $-2, 1$. Signs from the right: $+$ on $(1, \infty)$, $-$ on $(-2, 1)$, $+$ on $(-\infty, -2)$. Answer: $x \in (-\infty, -2) \cup (1, \infty)$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** $\frac{(x - 1)(x - 2)}{x + 3} \le 0$. Critical points $-3, 1, 2$. Signs: $(2, \infty)$: $+$; $(1, 2)$: $-$; $(-3, 1)$: $+$; $(-\infty, -3)$: $-$. Include the zeros 1 and 2, exclude $-3$. Answer: $(-\infty, -3) \cup [1, 2]$.`,
          },
          { type: "heading", text: "Modulus inequalities" },
          { type: "formula", tex: t`|x| < a \iff -a < x < a, \qquad |x| > a \iff x < -a \text{ or } x > a \quad (a > 0)` },
          {
            type: "text",
            md: t`**Worked example 3.** $|x - 3| < 5 \Rightarrow -5 < x - 3 < 5 \Rightarrow -2 < x < 8$.

**Worked example 4.** $|2x - 1| \ge 3 \Rightarrow 2x - 1 \le -3$ or $2x - 1 \ge 3 \Rightarrow x \le -1$ or $x \ge 2$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: t`Never multiply both sides by an expression like $x + 2$ whose sign you do not know. And a repeated factor such as $(x - 1)^2$ does **not** change sign at $x = 1$; do not alternate there.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The solution of $|x + 1| \le 4$ is:`,
                options: [t`$[-5, 3]$`, t`$[-3, 5]$`, t`$(-5, 3)$`, t`$x \le 3$`],
                answer: 0,
                explain: t`$-4 \le x + 1 \le 4 \Rightarrow -5 \le x \le 3$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Bring everything to one side and factorise.",
              "Alternate signs across simple critical points; not across squared factors.",
              "Denominator zeros are never included.",
              "|x| < a: between; |x| > a: outside.",
            ],
          },
        ],
        flashcards: [
          { front: t`$|x| < a$ ($a > 0$)`, back: t`$-a < x < a$` },
          { front: t`$|x| \ge a$ ($a > 0$)`, back: t`$x \le -a$ or $x \ge a$` },
          { front: "Why not cross-multiply in (x − 1)/(x + 2) > 0?", back: "The sign of x + 2 is unknown, so the inequality might need to flip." },
          { front: "Is a denominator zero ever part of the solution?", back: "No, the expression is undefined there." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Solve $\frac{x + 4}{x - 2} < 0$.`,
            options: [t`$(-4, 2)$`, t`$[-4, 2)$`, t`$(-\infty, -4) \cup (2, \infty)$`, t`$(-4, 2]$`],
            answer: 0,
            explain: t`Critical points $-4, 2$; negative between them; strict inequality and $x \ne 2$.`,
          },
          {
            kind: "numeric",
            q: t`How many integers satisfy $|x - 3| < 5$?`,
            answer: 9,
            explain: t`$-2 < x < 8$: integers $-1, 0, 1, \dots, 7$, which is 9 values.`,
          },
          {
            kind: "truefalse",
            q: t`$(x - 1)^2 (x + 2) > 0$ holds for all $x > -2$.`,
            answer: false,
            difficulty: 3,
            explain: t`At $x = 1$ the expression is 0, so the solution is $(-2, 1) \cup (1, \infty)$.`,
          },
          {
            kind: "mcq",
            q: t`Solve $|2x - 1| \ge 3$.`,
            options: [t`$-1 \le x \le 2$`, t`$x \le -1$ or $x \ge 2$`, t`$x \ge 2$`, t`$x \le -2$ or $x \ge 1$`],
            answer: 1,
            explain: t`$2x - 1 \le -3$ or $2x - 1 \ge 3$.`,
          },
          {
            kind: "fill",
            q: "In the wavy-curve method, signs alternate at a critical point only if its factor has ___ power.",
            answer: ["odd", "an odd"],
            explain: "Even powers do not change sign.",
          },
        ],
      },
      {
        slug: "li-two-variables",
        title: "Inequalities in two variables and their graphs",
        summary: "Half-planes, the test-point method, and the solution region of a system of inequalities.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "text", md: "An inequality like $2x + 3y \\ge 6$ has infinitely many solutions $(x, y)$. Together they fill a **half-plane**: one side of the line $2x + 3y = 6$." },
          {
            type: "list",
            ordered: true,
            items: [
              "Draw the boundary line by replacing the inequality sign with =.",
              "Use a **solid** line for ≤ or ≥, a **dashed** line for < or >.",
              "Test a point not on the line, usually (0, 0).",
              "If the test point satisfies the inequality, shade its side; otherwise shade the other side.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** $2x + 3y \ge 6$. The line passes through $(3, 0)$ and $(0, 2)$. Test $(0, 0)$: $0 \ge 6$ is false. So shade the side **away** from the origin, line included.`,
          },
          { type: "illustration", emoji: "📐", caption: "A system's solution is where all the shaded half-planes overlap." },
          {
            type: "text",
            md: t`**Worked example 2.** A Kolkata bakery makes $x$ cakes and $y$ trays of cookies; the oven allows at most 5 batches: $x + y \le 5$, $x \ge 0$, $y \ge 0$. The solution region is the triangle with corners $(0, 0)$, $(5, 0)$, $(0, 5)$, including its sides.`,
          },
          {
            type: "table",
            headers: ["Inequality", "Region"],
            rows: [
              [t`$x \ge 0$`, "Right of (and on) the y-axis"],
              [t`$y \ge 0$`, "Above (and on) the x-axis"],
              [t`$x \ge 0,\; y \ge 0$`, "First quadrant"],
              [t`$y < 2$`, "Below the dashed line y = 2"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "If the boundary line passes through the origin (e.g. x − 2y ≥ 0), (0, 0) cannot be the test point. Use a point such as (1, 0) instead.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: t`The point $(2, 1)$ lies in the region $3x + 2y < 8$.`,
                answer: false,
                explain: t`$3(2) + 2(1) = 8$, and $8 < 8$ is false; the point is on the dashed boundary.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Why this matters",
            md: "This chapter is the groundwork for **Linear Programming** in Class 12, where you find the best corner of such a region.",
          },
          {
            type: "keypoints",
            items: [
              "A linear inequality in two variables describes a half-plane.",
              "Solid line for ≤, ≥; dashed for <, >.",
              "Test with (0, 0) unless the line passes through it.",
              "The solution of a system is the common shaded region.",
            ],
          },
        ],
        flashcards: [
          { front: "Line style for 2x + y < 4", back: "Dashed (boundary not included)" },
          { front: "Region x ≥ 0, y ≥ 0", back: "First quadrant, including the axes" },
          { front: "Test point when the line passes through the origin", back: "Any other point, e.g. (1, 0)" },
          { front: "Solution of a system of inequalities", back: "The intersection of all the half-planes" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Which point satisfies $x + 2y \le 4$?`,
            options: ["(2, 2)", "(0, 3)", "(1, 1)", "(4, 1)"],
            answer: 2,
            explain: t`$1 + 2 = 3 \le 4$. The others give 6, 6 and 6.`,
          },
          {
            kind: "truefalse",
            q: t`For $x - y > 0$ you can test with the origin.`,
            answer: false,
            explain: "The line x = y passes through the origin.",
          },
          {
            kind: "fill",
            q: t`The region $x + y \le 5$, $x \ge 0$, $y \ge 0$ is a triangle with vertices (0, 0), (5, 0) and ___.`,
            answer: ["(0, 5)", "(0,5)"],
            explain: "The line x + y = 5 meets the y-axis at (0, 5).",
          },
          {
            kind: "mcq",
            q: t`For $3x + 4y \ge 12$, which side is shaded?`,
            options: ["The side containing the origin", "The side away from the origin", "Only the line", "The whole plane"],
            answer: 1,
            explain: t`Origin: $0 \ge 12$ is false.`,
          },
          {
            kind: "numeric",
            q: t`Find the area of the region $x \ge 0$, $y \ge 0$, $x + y \le 4$.`,
            answer: 8,
            difficulty: 2,
            explain: t`A right triangle with legs 4 and 4: $\frac12 \times 4 \times 4 = 8$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Permutations and Combinations                                  */
  /* ------------------------------------------------------------ */
  {
    slug: "permutations-combinations",
    title: "Permutations and Combinations",
    icon: "🎲",
    description: "The fundamental principle of counting, factorials, arrangements with and without repetition, circular arrangements and selections.",
    lessons: [
      {
        slug: "pc-counting-principle",
        title: "Fundamental principle of counting and factorials",
        summary: "When to multiply, when to add, and how factorial notation saves writing.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "You have 3 kurtas and 4 trousers. Each kurta goes with each trouser, so there are $3 \\times 4 = 12$ outfits. That is the **multiplication principle**." },
          {
            type: "table",
            headers: ["Principle", "Use when", "Rule"],
            rows: [
              ["Multiplication", "Tasks done one **after** another (and)", t`$m \times n$ ways`],
              ["Addition", "Exactly **one** of several options (or)", t`$m + n$ ways`],
            ],
          },
          { type: "formula", tex: t`n! = n(n-1)(n-2)\cdots 2 \cdot 1, \qquad 0! = 1`, caption: "Factorial" },
          {
            type: "text",
            md: t`**Worked example 1.** How many 4-digit numbers can be formed from the digits 1–9 **without** repetition? $9 \times 8 \times 7 \times 6 = 3024$. **With** repetition: $9^4 = 6561$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** How many 3-digit **even** numbers can be formed from 1, 2, 3, 4, 5, 6 without repetition? Fill the restricted place first: units digit must be 2, 4 or 6 (3 ways). Then hundreds: 5 ways, tens: 4 ways. Total $3 \times 5 \times 4 = 60$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Restricted places first",
            md: "Always fill the position with a condition (first digit non-zero, last digit even, a specific person at the end) before the free positions.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "When 0 is among the digits, it cannot be the first digit. With digits 0–9 and no repetition, 3-digit numbers number $9 \\times 9 \\times 8 = 648$, not $10 \\times 9 \\times 8 = 720$.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\dfrac{7!}{5!}$.`,
                answer: 42,
                explain: t`$\frac{7 \cdot 6 \cdot 5!}{5!} = 42$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Worked example 3.** A Delhi Metro smart-card PIN has 4 digits (0–9) with repetition allowed: $10^4 = 10\,000$ PINs. Without repetition: $10 \times 9 \times 8 \times 7 = 5040$.`,
          },
          {
            type: "keypoints",
            items: [
              "\"And\" → multiply; \"or\" → add.",
              t`$0! = 1$ and $n! = n \cdot (n-1)!$.`,
              "Fill restricted positions first.",
              "Watch out for 0 in the leading place.",
            ],
          },
        ],
        flashcards: [
          { front: t`$0!$`, back: "1" },
          { front: "Multiplication principle", back: "If one task can be done in m ways and the next in n ways, together they can be done in mn ways." },
          { front: "4-digit numbers from 1–9 with repetition", back: t`$9^4 = 6561$` },
          { front: t`$5!$`, back: "120" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many 3-digit numbers (digits 0–9) have all digits different?",
            answer: 648,
            explain: t`$9 \times 9 \times 8 = 648$.`,
          },
          {
            kind: "mcq",
            q: "A restaurant thali offers 4 dals or 3 sabzis as the main item (choose exactly one). How many choices?",
            options: ["7", "12", "1", "24"],
            answer: 0,
            explain: "One item from either group: addition principle, 4 + 3 = 7.",
          },
          {
            kind: "numeric",
            q: t`Find $n$ if $\dfrac{n!}{(n-2)!} = 56$.`,
            answer: 8,
            difficulty: 2,
            explain: t`$n(n-1) = 56 = 8 \times 7$.`,
          },
          {
            kind: "truefalse",
            q: t`$(2 + 3)! = 2! + 3!$`,
            answer: false,
            explain: t`$5! = 120$, but $2! + 3! = 8$.`,
          },
          {
            kind: "numeric",
            q: "How many 2-letter codes can be made from the 26 English letters if letters cannot repeat?",
            answer: 650,
            explain: t`$26 \times 25 = 650$.`,
          },
        ],
      },
      {
        slug: "pc-permutations",
        title: "Permutations: arrangements",
        summary: "nPr, arrangements with repeated objects, words with conditions and circular arrangements.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "text", md: "A **permutation** is an *arrangement* where order matters: the batting order of a cricket team, the letters of a word, seats in a row." },
          { type: "formula", tex: t`{}^nP_r = \frac{n!}{(n - r)!}`, caption: "Arrangements of r objects out of n distinct objects" },
          {
            type: "text",
            md: t`**Worked example 1.** In how many ways can gold, silver and bronze go to 5 finalists? $^5P_3 = 5 \times 4 \times 3 = 60$.`,
          },
          { type: "heading", text: "Repeated objects" },
          { type: "formula", tex: t`\frac{n!}{p_1!\, p_2! \cdots p_k!}`, caption: "n objects, p₁ alike of one kind, p₂ alike of another, …" },
          {
            type: "text",
            md: t`**Worked example 2.** Arrangements of **INDIA**: 5 letters with I twice: $\frac{5!}{2!} = 60$.

**Worked example 3.** **MISSISSIPPI**: 11 letters, I ×4, S ×4, P ×2: $\frac{11!}{4!\,4!\,2!} = \frac{39\,916\,800}{1152} = 34\,650$.`,
          },
          {
            type: "text",
            md: t`**Worked example 4 (vowels together).** In **LEADING** (7 distinct letters), keep the vowels E, A, I together. Treat them as one block: L, D, N, G, [EAI] give $5!$ arrangements, and the block can be ordered in $3!$ ways. Total $120 \times 6 = 720$.`,
          },
          { type: "heading", text: "Circular arrangements" },
          {
            type: "table",
            headers: ["Situation", "Number of ways"],
            rows: [
              ["n people round a table", t`$(n - 1)!$`],
              ["n beads on a necklace (flip allowed)", t`$\dfrac{(n - 1)!}{2}$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: t`Use $\frac{(n-1)!}{2}$ only when clockwise and anticlockwise arrangements are the same (garlands, necklaces). People at a round table are different when mirrored, so it is $(n - 1)!$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In how many ways can 6 friends sit around a round table?",
                answer: 120,
                explain: t`$(6 - 1)! = 5! = 120$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$^nP_r = n!/(n - r)!$; $^nP_n = n!$.`,
              "Divide by factorials of repeated letters.",
              "\"Together\" → glue into a block, then arrange inside the block.",
              t`Round table: $(n - 1)!$; necklace: $(n - 1)!/2$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$^nP_r$`, back: t`$\dfrac{n!}{(n - r)!}$` },
          { front: "Arrangements of the letters of INDIA", back: "5!/2! = 60" },
          { front: "n people around a round table", back: t`$(n - 1)!$` },
          { front: "\"Vowels together\" method", back: "Treat the vowels as one block; multiply by arrangements inside the block" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $^6P_2$.`,
            answer: 30,
            explain: t`$6 \times 5 = 30$.`,
          },
          {
            kind: "numeric",
            q: "How many arrangements of the letters of BANANA are there?",
            answer: 60,
            explain: t`6 letters with A ×3, N ×2: $\frac{720}{6 \times 2} = 60$.`,
          },
          {
            kind: "mcq",
            q: "How many ways can 8 different beads be strung into a necklace?",
            options: ["5040", "2520", "40320", "20160"],
            answer: 1,
            explain: t`$\frac{7!}{2} = \frac{5040}{2} = 2520$.`,
          },
          {
            kind: "numeric",
            q: "In how many arrangements of the letters of MOTHER do the vowels always come together?",
            answer: 240,
            difficulty: 2,
            explain: t`Vowels O, E as one block: 5 units → $5! = 120$; inside the block $2! = 2$. Total $240$.`,
          },
          {
            kind: "truefalse",
            q: t`$^nP_r = r! \times {}^nC_r$`,
            answer: true,
            explain: "Choose r objects, then arrange them in r! ways.",
          },
        ],
      },
      {
        slug: "pc-combinations",
        title: "Combinations: selections",
        summary: "nCr and its properties, committees, at-least problems, and geometry counts.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "text", md: "A **combination** is a *selection* where order does not matter: choosing 11 players for a squad, 3 toppings for a dosa, 2 people for a committee." },
          { type: "formula", tex: t`{}^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}` },
          {
            type: "list",
            items: [
              t`$^nC_r = {}^nC_{n-r}$, so $^nC_0 = {}^nC_n = 1$.`,
              t`$^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$ (Pascal's rule).`,
              t`If $^nC_a = {}^nC_b$, then $a = b$ or $a + b = n$.`,
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** A committee of 3 men and 2 women from 6 men and 5 women: $^6C_3 \times {}^5C_2 = 20 \times 10 = 200$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2 (at least one).** A 4-member team from 5 men and 4 women with at least one woman. Total $^9C_4 = 126$; all-men teams $^5C_4 = 5$. Answer $126 - 5 = 121$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "\"At least\" shortcut",
            md: "At least one = total − none. It is usually much faster than adding the cases one, two, three, …",
          },
          { type: "heading", text: "Geometry counts" },
          {
            type: "table",
            headers: ["Count (n points, no three collinear)", "Formula", "n = 10"],
            rows: [
              ["Straight lines", t`$^nC_2$`, "45"],
              ["Triangles", t`$^nC_3$`, "120"],
              ["Diagonals of an n-gon", t`$^nC_2 - n = \dfrac{n(n - 3)}{2}$`, "35"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: "Ask: does order matter? Selecting a captain and vice-captain is an **arrangement** ($^nP_2$); selecting two openers for the squad list is a **selection** ($^nC_2$). Using the wrong one is the most common error in this chapter.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $^nC_8 = {}^nC_2$, find $^nC_2$.`,
                answer: 45,
                explain: t`$8 + 2 = n$, so $n = 10$ and $^{10}C_2 = 45$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Selection (order irrelevant) → nCr; arrangement → nPr.",
              t`$^nC_r = {}^nC_{n-r}$.`,
              "At least one = total − none.",
              t`Diagonals: $n(n - 3)/2$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$^nC_r$`, back: t`$\dfrac{n!}{r!\,(n - r)!}$` },
          { front: "Pascal's rule", back: t`$^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$` },
          { front: "Diagonals of an n-sided polygon", back: t`$\dfrac{n(n - 3)}{2}$` },
          { front: t`If $^nC_a = {}^nC_b$ with $a \ne b$`, back: t`$a + b = n$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $^8C_3$.`,
            answer: 56,
            explain: t`$\frac{8 \cdot 7 \cdot 6}{6} = 56$.`,
          },
          {
            kind: "numeric",
            q: "How many diagonals does a hexagon have?",
            answer: 9,
            explain: t`$\frac{6 \times 3}{2} = 9$.`,
          },
          {
            kind: "mcq",
            q: "From 7 players, a captain and a vice-captain are chosen. Number of ways:",
            options: ["21", "42", "49", "14"],
            answer: 1,
            explain: t`Order matters: $^7P_2 = 42$.`,
          },
          {
            kind: "numeric",
            q: "A student must answer 8 of 10 questions, including both of the first two. In how many ways can she choose?",
            answer: 28,
            difficulty: 2,
            explain: t`Choose 6 more from the remaining 8: $^8C_6 = 28$.`,
          },
          {
            kind: "truefalse",
            q: t`$^{20}C_{17} = {}^{20}C_3$`,
            answer: true,
            explain: t`$^nC_r = {}^nC_{n-r}$ and $20 - 17 = 3$.`,
          },
          {
            kind: "numeric",
            q: "How many triangles can be formed from 12 points in a plane, no three collinear?",
            answer: 220,
            explain: t`$^{12}C_3 = \frac{12 \cdot 11 \cdot 10}{6} = 220$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Binomial Theorem                                              */
  /* ------------------------------------------------------------ */
  {
    slug: "binomial-theorem",
    title: "Binomial Theorem",
    icon: "🔺",
    description: "Expanding (a + b)ⁿ, Pascal's triangle, the general and middle terms, terms independent of x, and properties of binomial coefficients.",
    lessons: [
      {
        slug: "bt-expansion",
        title: "The binomial expansion and Pascal's triangle",
        summary: "Expanding (a + b)ⁿ for positive integers n, and using it for quick calculations.",
        minutes: 15,
        xp: 35,
        blocks: [
          { type: "text", md: "Multiplying $(a + b)$ by itself ten times by hand is tedious. The **binomial theorem** writes the answer down directly." },
          { type: "formula", tex: t`(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^{r} = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \cdots + \binom{n}{n}b^n` },
          { type: "heading", text: "Pascal's triangle" },
          {
            type: "table",
            headers: ["n", "Coefficients"],
            rows: [
              ["0", "1"],
              ["1", "1 1"],
              ["2", "1 2 1"],
              ["3", "1 3 3 1"],
              ["4", "1 4 6 4 1"],
              ["5", "1 5 10 10 5 1"],
            ],
          },
          { type: "illustration", emoji: "🔺", caption: "Each entry is the sum of the two entries just above it: that is Pascal's rule ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ." },
          {
            type: "list",
            items: [
              t`There are $n + 1$ terms.`,
              t`Powers of $a$ fall from $n$ to 0 while powers of $b$ rise from 0 to $n$; in every term they add to $n$.`,
              t`Putting $a = b = 1$: the sum of coefficients is $2^n$.`,
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** $(x + 2)^4 = x^4 + 4x^3(2) + 6x^2(4) + 4x(8) + 16 = x^4 + 8x^3 + 24x^2 + 32x + 16$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** Compute $99^5$. Write $99 = 100 - 1$:
$(100 - 1)^5 = 10^{10} - 5 \cdot 10^8 + 10 \cdot 10^6 - 10 \cdot 10^4 + 5 \cdot 10^2 - 1 = 9\,509\,900\,499$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`In $(a - b)^n$ the signs alternate: $+, -, +, \dots$. Treat it as $(a + (-b))^n$, and carry the minus sign inside the power: $(-b)^r$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`What is the sum of the coefficients in $(1 + x)^8$?`,
                answer: 256,
                explain: t`Put $x = 1$: $2^8 = 256$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$(a + b)^n$ has $n + 1$ terms.`,
              "Coefficients come from Pascal's triangle or nCr.",
              t`Sum of coefficients: put every variable = 1.`,
              "For (a − b)ⁿ the signs alternate.",
            ],
          },
        ],
        flashcards: [
          { front: t`Number of terms in $(a + b)^n$`, back: t`$n + 1$` },
          { front: "Row 4 of Pascal's triangle", back: "1 4 6 4 1" },
          { front: t`Sum of coefficients of $(1 + x)^n$`, back: t`$2^n$` },
          { front: t`$(a - b)^3$`, back: t`$a^3 - 3a^2b + 3ab^2 - b^3$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many terms are there in $(x + y)^{10}$?`,
            answer: 11,
            explain: t`$n + 1 = 11$.`,
          },
          {
            kind: "mcq",
            q: t`The coefficient of $x^2$ in $(x + 3)^3$ is:`,
            options: ["3", "9", "27", "6"],
            answer: 1,
            explain: t`$\binom{3}{1} x^2 \cdot 3 = 9x^2$.`,
          },
          {
            kind: "numeric",
            q: t`Find the sum of the coefficients of $(2x - 1)^7$.`,
            answer: 1,
            explain: t`Put $x = 1$: $(2 - 1)^7 = 1$.`,
          },
          {
            kind: "truefalse",
            q: t`$(a + b)^5$ contains the term $10a^2b^3$.`,
            answer: true,
            explain: t`$\binom{5}{3} a^2 b^3 = 10a^2b^3$.`,
          },
          {
            kind: "fill",
            q: "The row of Pascal's triangle after 1 4 6 4 1 is 1 5 ___ 10 5 1.",
            answer: ["10"],
            explain: "4 + 6 = 10.",
          },
        ],
      },
      {
        slug: "bt-general-term",
        title: "General term, middle term and the term independent of x",
        summary: "Using T(r+1) to pull any single term out of an expansion.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "text", md: "Exams rarely ask for the whole expansion. They ask for one term, such as the coefficient of $x^5$ or the constant term. The **general term** finds it directly." },
          { type: "formula", tex: t`T_{r+1} = \binom{n}{r} a^{\,n-r}\, b^{\,r}`, caption: "The (r + 1)th term of (a + b)ⁿ" },
          {
            type: "text",
            md: t`**Worked example 1.** Coefficient of $x^5$ in $(x + 3)^8$: $T_{r+1} = \binom{8}{r}x^{8-r}3^r$. Need $8 - r = 5$, so $r = 3$: $\binom{8}{3} \cdot 27 = 56 \times 27 = 1512$.`,
          },
          { type: "heading", text: "Middle term(s)" },
          {
            type: "table",
            headers: ["n", "Middle term(s)"],
            rows: [
              ["Even", t`One: $T_{\frac{n}{2} + 1}$`],
              ["Odd", t`Two: $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 2.** Middle term of $(2x - 3)^6$: $n = 6$, so $T_4 = \binom{6}{3}(2x)^3(-3)^3 = 20 \cdot 8x^3 \cdot (-27) = -4320x^3$.`,
          },
          { type: "heading", text: "Term independent of x" },
          {
            type: "text",
            md: t`**Worked example 3.** In $\left(x^2 + \frac{1}{x}\right)^9$: $T_{r+1} = \binom{9}{r}(x^2)^{9-r}x^{-r} = \binom{9}{r}x^{18 - 3r}$. Set $18 - 3r = 0$: $r = 6$. The term is $\binom{9}{6} = 84$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: t`$T_{r+1}$, not $T_r$. If you find $r = 6$, it is the **7th** term. Also, "coefficient" includes the sign and constants, but not the power of $x$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find the coefficient of $x^2$ in $(1 + 2x)^5$.`,
                answer: 40,
                explain: t`$\binom{5}{2}(2x)^2 = 10 \times 4x^2 = 40x^2$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Power-of-x shortcut",
            md: t`For $\left(x^p + \frac{1}{x^q}\right)^n$, the power of $x$ in $T_{r+1}$ is $p(n - r) - qr$. Set it equal to the power you need and solve for $r$; if $r$ is not a whole number between 0 and n, that term does not exist.`,
          },
          {
            type: "keypoints",
            items: [
              t`$T_{r+1} = \binom{n}{r}a^{n-r}b^r$.`,
              "n even: one middle term; n odd: two.",
              "Constant term: set the power of x to 0.",
              "Remember the sign of b when it is negative.",
            ],
          },
        ],
        flashcards: [
          { front: t`General term of $(a + b)^n$`, back: t`$T_{r+1} = \binom{n}{r}a^{n-r}b^r$` },
          { front: "Middle term of (a + b)¹⁰", back: t`$T_6$` },
          { front: "Middle terms of (a + b)⁷", back: t`$T_4$ and $T_5$` },
          { front: t`Constant term of $(x^2 + 1/x)^9$`, back: "84 (the 7th term)" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the term independent of $x$ in $\left(x - \frac{1}{x}\right)^6$.`,
            answer: -20,
            explain: t`$T_{r+1} = \binom{6}{r}(-1)^r x^{6 - 2r}$; $r = 3$ gives $-20$.`,
          },
          {
            kind: "mcq",
            q: t`How many middle terms does $(x + y)^{11}$ have?`,
            options: ["1", "2", "3", "0"],
            answer: 1,
            explain: "11 is odd, so there are two: T₆ and T₇.",
          },
          {
            kind: "numeric",
            q: t`Coefficient of $x^3$ in $(1 - x)^6$.`,
            answer: -20,
            explain: t`$\binom{6}{3}(-1)^3 = -20$.`,
          },
          {
            kind: "truefalse",
            q: t`$\left(x^2 + \frac{1}{x}\right)^5$ has a term independent of $x$.`,
            answer: false,
            difficulty: 3,
            explain: t`Power of $x$ is $10 - 3r = 0 \Rightarrow r = 10/3$, not a whole number.`,
          },
          {
            kind: "numeric",
            q: t`Find the coefficient of $x^4$ in $(x + 2)^6$.`,
            answer: 60,
            explain: t`$r = 2$: $\binom{6}{2} \cdot 4 = 60$.`,
          },
        ],
      },
      {
        slug: "bt-applications",
        title: "Properties of coefficients, remainders and approximations",
        summary: "Sums of binomial coefficients, divisibility and remainder tricks, and approximating (1 + x)ⁿ.",
        minutes: 17,
        xp: 45,
        blocks: [
          { type: "text", md: "Write $C_r$ for $\\binom{n}{r}$. Substituting clever values of $x$ into $(1 + x)^n = C_0 + C_1x + \\cdots + C_nx^n$ gives several useful identities." },
          {
            type: "table",
            headers: ["Substitute", "Result"],
            rows: [
              [t`$x = 1$`, t`$C_0 + C_1 + \cdots + C_n = 2^n$`],
              [t`$x = -1$`, t`$C_0 - C_1 + C_2 - \cdots = 0$`],
              ["Add the two", t`$C_0 + C_2 + C_4 + \cdots = C_1 + C_3 + \cdots = 2^{n-1}$`],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Greatest coefficient",
            md: t`The largest binomial coefficient is $\binom{n}{n/2}$ for even $n$, and $\binom{n}{(n-1)/2} = \binom{n}{(n+1)/2}$ for odd $n$. They sit in the middle of Pascal's row.`,
          },
          { type: "heading", text: "Remainders" },
          {
            type: "text",
            md: t`Write the base as (multiple of the divisor) ± 1, then expand. Every term except the last contains the divisor.

**Worked example 1.** Remainder of $3^{100}$ divided by 8: $3^{100} = 9^{50} = (8 + 1)^{50} = 8k + 1$. Remainder $= 1$.

**Worked example 2.** Remainder of $2^{30}$ divided by 7: $2^{30} = 8^{10} = (7 + 1)^{10} = 7k + 1$. Remainder $= 1$.`,
          },
          { type: "heading", text: "Approximation" },
          { type: "formula", tex: t`(1 + x)^n \approx 1 + nx + \frac{n(n-1)}{2}x^2 \quad (|x| \text{ small})` },
          {
            type: "text",
            md: t`**Worked example 3.** $(1.02)^6 \approx 1 + 6(0.02) + 15(0.0004) = 1 + 0.12 + 0.006 = 1.126$ (exact: $1.12616\ldots$).

**Worked example 4.** A ₹1,00,000 deposit at 2% per year for 6 years grows to about ₹1,12,600 by the same calculation.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: t`For a negative base, check the parity: $(7 - 1)^{n}$ gives remainder $(-1)^n$ on division by 7. For odd $n$ that is $-1$, which means a remainder of $7 - 1 = 6$, not $-1$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`For $n = 10$, find $C_1 + C_3 + C_5 + C_7 + C_9$.`,
                answer: 512,
                explain: t`Sum of odd-indexed coefficients $= 2^{n-1} = 2^9 = 512$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$\sum C_r = 2^n$; alternating sum = 0; even-indexed sum = odd-indexed sum = $2^{n-1}$.`,
              "Remainders: rewrite the base as (divisor × k) ± 1.",
              "A negative remainder −1 means divisor − 1.",
              t`$(1 + x)^n \approx 1 + nx$ for small $x$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$C_0 + C_1 + \cdots + C_n$`, back: t`$2^n$` },
          { front: t`$C_0 + C_2 + C_4 + \cdots$`, back: t`$2^{n-1}$` },
          { front: "Remainder trick", back: "Write the base as (multiple of divisor) ± 1 and expand" },
          { front: "Greatest coefficient in (1 + x)¹⁰", back: t`$\binom{10}{5} = 252$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $C_0 + C_1 + \cdots + C_6$ for $(1 + x)^6$.`,
            answer: 64,
            explain: t`$2^6 = 64$.`,
          },
          {
            kind: "mcq",
            q: t`The remainder when $5^{40}$ is divided by 24 is:`,
            options: ["0", "1", "5", "23"],
            answer: 1,
            explain: t`$5^{40} = 25^{20} = (24 + 1)^{20}$, remainder 1.`,
          },
          {
            kind: "numeric",
            q: t`Find the remainder when $6^{5}$ is divided by 7.`,
            answer: 6,
            difficulty: 2,
            explain: t`$(7 - 1)^5$ leaves $(-1)^5 = -1$, i.e. remainder $7 - 1 = 6$. Check: $6^5 = 7776 = 7 \times 1110 + 6$.`,
          },
          {
            kind: "numeric",
            q: t`Approximate $(0.99)^5$ to three decimal places using the first three terms.`,
            answer: 0.951,
            tolerance: 0.001,
            explain: t`$1 - 5(0.01) + 10(0.0001) = 0.951$.`,
          },
          {
            kind: "truefalse",
            q: t`For any $n \ge 1$, $C_0 - C_1 + C_2 - \cdots + (-1)^nC_n = 0$.`,
            answer: true,
            explain: t`Put $x = -1$: $(1 - 1)^n = 0$.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  Sets: "sets",
  "Sets, Relations and Functions": "sets",
  "Relations and Functions": "relations-functions",
  "Linear Inequalities": "linear-inequalities",
  "Permutations and Combinations": "permutations-combinations",
  "Binomial Theorem": "binomial-theorem",
};
