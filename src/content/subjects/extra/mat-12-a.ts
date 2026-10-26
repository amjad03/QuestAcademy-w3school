import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 12: Relations and Functions (NCERT Ch 1, ISC Unit 1)          */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-relations-functions",
    title: "Relations and Functions (Class 12)",
    icon: "🔗",
    description: "Types of relations, equivalence relations and classes, one-one and onto functions, composition of functions and invertible functions.",
    lessons: [
      {
        slug: "c12-types-of-relations",
        title: "Types of Relations and Equivalence Relations",
        summary: "Empty and universal relations, reflexive, symmetric and transitive relations, equivalence relations and equivalence classes.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏫",
            caption: "In a class, \"was born in the same month as\" splits the students into at most 12 groups. Everyone in a group is related to everyone else in that group, and to nobody outside it.",
          },
          {
            type: "text",
            md: t`In Class 11 you met a **relation** $R$ from a set $A$ to a set $B$ as a subset of $A \times B$. In Class 12 we study relations **on one set** $A$, that is, subsets of $A \times A$. We write $(a, b) \in R$ or $a \, R \, b$ and say "$a$ is related to $b$".

Two extreme cases: the **empty relation** $R = \phi$, where no element is related to any element, and the **universal relation** $R = A \times A$, where every element is related to every element. Both are called **trivial relations**.`,
          },
          {
            type: "text",
            md: t`A relation $R$ on a set $A$ is called:

**Reflexive** if $(a, a) \in R$ for **every** $a \in A$.

**Symmetric** if $(a_1, a_2) \in R$ implies $(a_2, a_1) \in R$, for all $a_1, a_2 \in A$.

**Transitive** if $(a_1, a_2) \in R$ and $(a_2, a_3) \in R$ together imply $(a_1, a_3) \in R$, for all $a_1, a_2, a_3 \in A$.`,
          },
          {
            type: "table",
            headers: ["Property", "What you must check", "To disprove it, show"],
            rows: [
              ["Reflexive", t`every $a \in A$ has $(a,a) \in R$`, t`one $a$ with $(a,a) \notin R$`],
              ["Symmetric", t`each pair $(a,b) \in R$ has its reverse $(b,a) \in R$`, t`one pair $(a,b) \in R$ with $(b,a) \notin R$`],
              ["Transitive", t`every chain $(a,b), (b,c) \in R$ gives $(a,c) \in R$`, t`one chain $(a,b), (b,c) \in R$ with $(a,c) \notin R$`],
            ],
          },
          {
            type: "example",
            title: "Checking all three properties",
            problem: t`On the set $\mathbb{Z}$ of integers, define $a \, R \, b$ if $ab \ge 0$. Is $R$ reflexive, symmetric, transitive?`,
            steps: [
              t`**Reflexive:** for any integer $a$, $a \cdot a = a^2 \ge 0$, so $(a, a) \in R$. Yes.`,
              t`**Symmetric:** if $ab \ge 0$ then $ba = ab \ge 0$, so $(a, b) \in R \Rightarrow (b, a) \in R$. Yes.`,
              t`**Transitive:** take $a = 2$, $b = 0$, $c = -3$. Then $2 \cdot 0 = 0 \ge 0$ and $0 \cdot (-3) = 0 \ge 0$, so $(2, 0)$ and $(0, -3)$ are in $R$.`,
              t`But $2 \cdot (-3) = -6 < 0$, so $(2, -3) \notin R$. One counter-example is enough. Not transitive.`,
            ],
            answer: t`$R$ is reflexive and symmetric but **not transitive** (the number 0 links a positive and a negative integer).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`On $A = \{1, 2, 3\}$, let $R = \{(1,1), (2,2), (3,3), (1,2), (2,3)\}$. Which statement is true?`,
                options: [
                  "R is an equivalence relation",
                  "R is reflexive but neither symmetric nor transitive",
                  "R is reflexive and transitive but not symmetric",
                  "R is symmetric and transitive but not reflexive",
                ],
                answer: 1,
                explain: t`All three $(a,a)$ are present, so $R$ is reflexive. $(1,2) \in R$ but $(2,1) \notin R$, so not symmetric. $(1,2), (2,3) \in R$ but $(1,3) \notin R$, so not transitive.`,
              },
              {
                kind: "truefalse",
                q: t`The universal relation $A \times A$ on any non-empty set $A$ is an equivalence relation.`,
                answer: true,
                explain: t`Every pair is in $A \times A$, so every reflexive, symmetric and transitive requirement is met automatically.`,
              },
            ],
          },
          {
            type: "text",
            md: t`A relation that is reflexive, symmetric **and** transitive is an **equivalence relation**. "Has the same remainder on division by 3", "is parallel or equal to" (for lines), "is congruent to" (for triangles) are all equivalence relations.

For $a \in A$, the **equivalence class** $[a]$ is the set of all elements related to $a$. The classes of an equivalence relation are **pairwise disjoint** and their **union is the whole set** $A$. So an equivalence relation cuts $A$ into non-overlapping pieces (a **partition**). Conversely, every partition of $A$ gives an equivalence relation: "is in the same piece as".`,
          },
          {
            type: "example",
            title: "Congruence modulo 3",
            problem: t`On $\mathbb{Z}$ define $a \, R \, b$ if $3$ divides $a - b$. Show that $R$ is an equivalence relation and find its equivalence classes.`,
            steps: [
              t`**Reflexive:** $a - a = 0 = 3 \times 0$, so $3 \mid (a - a)$ and $(a, a) \in R$.`,
              t`**Symmetric:** if $a - b = 3k$ then $b - a = 3(-k)$, so $3 \mid (b - a)$.`,
              t`**Transitive:** if $a - b = 3k$ and $b - c = 3m$, add: $a - c = 3(k + m)$, so $3 \mid (a - c)$.`,
              t`Classes: $[0] = \{\ldots, -3, 0, 3, 6, \ldots\}$, $[1] = \{\ldots, -2, 1, 4, 7, \ldots\}$, $[2] = \{\ldots, -1, 2, 5, 8, \ldots\}$. Every integer leaves remainder 0, 1 or 2, so these three classes cover $\mathbb{Z}$ and do not overlap.`,
            ],
            answer: t`$R$ is an equivalence relation with exactly three classes $[0], [1], [2]$. Note $[3] = [0]$ and $[5] = [2]$: different names, same class.`,
          },
          {
            type: "example",
            title: "The smallest equivalence relation containing given pairs",
            problem: t`Let $A = \{1, 2, 3\}$. Find the smallest equivalence relation on $A$ that contains $(1, 2)$ and $(2, 3)$.`,
            steps: [
              t`Reflexive forces $(1,1), (2,2), (3,3)$.`,
              t`Symmetric forces $(2,1)$ and $(3,2)$.`,
              t`Transitive: $(1,2), (2,3)$ force $(1,3)$; then symmetry forces $(3,1)$.`,
              t`We now have all $9$ ordered pairs. Check that nothing more is forced: $A \times A$ is already an equivalence relation.`,
            ],
            answer: t`The smallest such relation is the universal relation $A \times A$ (one class: $\{1, 2, 3\}$).`,
          },
          {
            type: "mistake",
            wrong: t`If $R$ is symmetric and transitive, then from $a R b$ and $b R a$ we get $a R a$, so $R$ must be reflexive.`,
            right: t`That argument only works for an $a$ that is related to **some** $b$. On $A = \{1, 2\}$, the relation $R = \{(1, 1)\}$ is symmetric and transitive, but $(2, 2) \notin R$, so it is not reflexive.`,
            why: "The proof looks complete, but it silently assumes every element has a partner. Reflexivity needs (a, a) for every element, including the lonely ones.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "On A = {1, 2, 3}, is R = {(1,1), (2,2), (1,2), (2,1)} an equivalence relation?",
              emoji: "🤔",
              options: [
                t`Yes: it is reflexive, symmetric and transitive`,
                t`No: it is not reflexive on $A$`,
                t`No: it is not symmetric`,
              ],
              answer: 1,
              trap: 0,
              explain: t`$R$ is symmetric and transitive, but $(3, 3)$ is missing, so it is not reflexive on $A$. Always check reflexivity against the whole set, not just the elements that appear in $R$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "How these questions are marked",
            md: t`A "check whether $R$ is reflexive, symmetric, transitive" question usually carries 1 mark per property. To **prove** a property, write the general argument with letters ($a$, $b$, $c$). To **disprove**, one specific counter-example with numbers is enough, and you must show why it fails. Writing "not transitive" without a counter-example earns nothing.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "CBSE and Karnataka II PUC follow the rationalised NCERT chapter, which covers types of relations and equivalence relations as above. ISC Class 12 lists the same relation types. Binary operations, once part of this chapter, are no longer in the rationalised NCERT book; check your board's current syllabus before studying them.",
          },
          {
            type: "keypoints",
            items: [
              t`A relation on $A$ is a subset of $A \times A$; $\phi$ and $A \times A$ are the trivial relations.`,
              "Reflexive: every (a, a). Symmetric: every pair has its reverse. Transitive: every chain closes.",
              "Equivalence relation = reflexive + symmetric + transitive.",
              "Equivalence classes are disjoint and together make up the whole set (a partition).",
              "Prove a property with a general argument; disprove it with one counter-example.",
            ],
          },
        ],
        flashcards: [
          { front: "Reflexive relation on A", back: t`$(a, a) \in R$ for every $a \in A$.` },
          { front: "Symmetric relation", back: t`$(a, b) \in R \Rightarrow (b, a) \in R$.` },
          { front: "Transitive relation", back: t`$(a, b) \in R$ and $(b, c) \in R \Rightarrow (a, c) \in R$.` },
          { front: "Equivalence relation", back: "A relation that is reflexive, symmetric and transitive." },
          { front: t`Equivalence class $[a]$`, back: t`The set of all elements of $A$ related to $a$. Classes are disjoint and their union is $A$.` },
          { front: "Empty relation", back: t`$R = \phi$: no element is related to any element. It is symmetric and transitive (vacuously), but not reflexive on a non-empty set.` },
          { front: "Universal relation", back: t`$R = A \times A$: every element is related to every element. It is an equivalence relation.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`On the set of all triangles in a plane, $T_1 \, R \, T_2$ if $T_1$ is similar to $T_2$. Then $R$ is:`,
            options: ["reflexive only", "symmetric only", "an equivalence relation", "transitive only"],
            answer: 2,
            explain: "Every triangle is similar to itself; similarity works both ways; and if T1 ~ T2 and T2 ~ T3 then T1 ~ T3. So R is an equivalence relation.",
          },
          {
            kind: "mcq",
            q: t`On $\mathbb{R}$, $a \, R \, b$ if $a < b$. Which properties does $R$ have?`,
            options: ["Transitive only", "Reflexive and transitive", "Symmetric and transitive", "None of the three"],
            answer: 0,
            explain: t`$a < a$ is false (not reflexive); $1 < 2$ but not $2 < 1$ (not symmetric); $a < b$ and $b < c$ give $a < c$ (transitive).`,
          },
          {
            kind: "numeric",
            q: t`On $\mathbb{Z}$, $a \, R \, b$ if $5$ divides $a - b$. How many distinct equivalence classes does $R$ have?`,
            answer: 5,
            explain: t`The classes are the remainder classes $[0], [1], [2], [3], [4]$ on division by 5.`,
          },
          {
            kind: "truefalse",
            q: t`The empty relation on $A = \{1, 2\}$ is transitive.`,
            answer: true,
            explain: "There are no pairs (a, b), (b, c) in the empty relation, so no condition can fail. It is transitive (and symmetric) vacuously, but not reflexive.",
          },
          {
            kind: "mcq",
            q: t`On $A = \{1, 2, 3\}$, $R = \{(1,1), (2,2), (3,3), (1,3), (3,1)\}$. The equivalence class $[1]$ is:`,
            options: [t`$\{1\}$`, t`$\{1, 3\}$`, t`$\{1, 2, 3\}$`, t`$\{3\}$`],
            answer: 1,
            explain: t`$1$ is related to $1$ and $3$, so $[1] = \{1, 3\}$. The other class is $[2] = \{2\}$.`,
          },
          {
            kind: "multi",
            q: t`On $\mathbb{N}$, $a \, R \, b$ if $a$ divides $b$. Select all properties that $R$ has.`,
            options: ["Reflexive", "Symmetric", "Transitive", "Equivalence relation"],
            answers: [0, 2],
            explain: t`$a \mid a$ (reflexive); $a \mid b$ and $b \mid c$ give $a \mid c$ (transitive). But $2 \mid 4$ while $4 \nmid 2$, so it is not symmetric and not an equivalence relation.`,
            difficulty: 2,
            hint: "Test symmetry with a small pair like 2 and 4.",
          },
          {
            kind: "mcq",
            q: t`An equivalence relation on $A = \{1, 2, 3, 4\}$ has classes $\{1, 2\}$ and $\{3, 4\}$. How many ordered pairs does it contain?`,
            options: ["4", "6", "8", "16"],
            answer: 2,
            explain: t`A class with $k$ elements contributes $k^2$ ordered pairs. Here $2^2 + 2^2 = 8$.`,
            difficulty: 2,
            hint: "Inside a class, every element is related to every element, itself included.",
          },
        ],
      },
      {
        slug: "c12-types-of-functions",
        title: "One-one, Onto and Bijective Functions",
        summary: "Injective, surjective and bijective functions, how to prove or disprove each, and why the codomain matters.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎫",
            caption: "Every seat in a cinema hall gets at most one ticket number, and every ticket number belongs to one seat. That pairing is a one-one and onto function.",
          },
          {
            type: "text",
            md: t`A **function** $f : X \to Y$ gives every element of $X$ (the **domain**) exactly one image in $Y$ (the **codomain**). The set of images actually used is the **range**, and range $\subseteq$ codomain.

$f$ is **one-one** (**injective**) if different inputs always give different outputs. Equivalently, for all $x_1, x_2 \in X$, $f(x_1) = f(x_2)$ implies $x_1 = x_2$. A function that is not one-one is called **many-one**.`,
          },
          {
            type: "formula",
            tex: t`f \text{ one-one} \iff \big(f(x_1) = f(x_2) \Rightarrow x_1 = x_2\big) \quad\text{for all } x_1, x_2 \in X`,
            caption: "The working test for one-one",
          },
          {
            type: "text",
            md: t`$f$ is **onto** (**surjective**) if every element of $Y$ is the image of at least one element of $X$; that is, **range = codomain**. To prove onto, take any $y \in Y$, solve $f(x) = y$, and check that the $x$ you get really lies in $X$.

$f$ is **bijective** if it is both one-one and onto. Then the elements of $X$ and $Y$ are paired off exactly.`,
          },
          {
            type: "example",
            title: "Proving a function is bijective",
            problem: t`Show that $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 3x - 5$, is bijective.`,
            steps: [
              t`**One-one:** let $f(x_1) = f(x_2)$. Then $3x_1 - 5 = 3x_2 - 5$, so $3x_1 = 3x_2$ and $x_1 = x_2$.`,
              t`**Onto:** take any $y \in \mathbb{R}$. Solve $3x - 5 = y$: $x = \dfrac{y + 5}{3}$.`,
              t`This $x$ is a real number, so it is in the domain, and $f\left(\frac{y+5}{3}\right) = (y + 5) - 5 = y$.`,
            ],
            answer: t`$f$ is one-one and onto, hence bijective.`,
          },
          {
            type: "example",
            title: "Onto but not one-one",
            problem: t`$f : \mathbb{N} \to \mathbb{N}$ is defined by $f(n) = \dfrac{n + 1}{2}$ if $n$ is odd and $f(n) = \dfrac{n}{2}$ if $n$ is even. Is $f$ one-one? Is it onto?`,
            steps: [
              t`$f(1) = \frac{2}{2} = 1$ and $f(2) = \frac{2}{2} = 1$. Two different inputs, same output, so $f$ is **not one-one**.`,
              t`For onto, take any $m \in \mathbb{N}$. The even number $2m$ is in $\mathbb{N}$ and $f(2m) = m$.`,
              t`So every natural number $m$ has a preimage, and $f$ is **onto**.`,
            ],
            answer: t`$f$ is onto but not one-one. (Each $m$ has exactly two preimages: $2m - 1$ and $2m$.)`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$f : \mathbb{N} \to \mathbb{N}$, $f(x) = 2x$. Then $f$ is:`,
                options: ["bijective", "one-one but not onto", "onto but not one-one", "neither one-one nor onto"],
                answer: 1,
                explain: t`$2x_1 = 2x_2 \Rightarrow x_1 = x_2$, so one-one. But odd numbers such as 1 are not of the form $2x$ with $x \in \mathbb{N}$, so not onto.`,
              },
            ],
          },
          {
            type: "table",
            headers: ["Function", "One-one?", "Onto?"],
            rows: [
              [t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$`, t`No: $f(-1) = f(1)$`, "No: −1 has no preimage"],
              [t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^3$`, "Yes", "Yes"],
              [t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = |x|$`, t`No: $f(-2) = f(2)$`, "No: negatives are missed"],
              [t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = [x]$ (greatest integer)`, t`No: $f(1.2) = f(1.7) = 1$`, "No: 0.5 is never an output"],
              [t`$f : [0, \infty) \to [0, \infty)$, $f(x) = x^2$`, "Yes", "Yes"],
            ],
          },
          {
            type: "text",
            md: t`**A useful fact for finite sets.** If $X$ is a finite set and $f : X \to X$, then $f$ is one-one **if and only if** it is onto. With $n$ inputs and $n$ possible outputs, $n$ different outputs must use up all of $X$.

This fails for infinite sets: $f : \mathbb{N} \to \mathbb{N}$, $f(x) = 2x$ is one-one but not onto.`,
          },
          {
            type: "mistake",
            wrong: t`$f(x) = x^2$ is onto, because every output is a square of something.`,
            right: t`Onto depends on the **codomain**. As $f : \mathbb{R} \to \mathbb{R}$ it is not onto, since $-4$ has no real preimage. As $f : \mathbb{R} \to [0, \infty)$ it is onto.`,
            why: "Students look only at the formula and forget the declared codomain. The same rule can be onto for one codomain and not for another, so always write the codomain before you decide.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each function by type.",
              groups: ["Bijective", "One-one, not onto", "Onto, not one-one"],
              items: [
                { text: t`$f : \mathbb{R} \to \mathbb{R}$, $x \mapsto 2x + 7$`, group: 0, hint: "Solve 2x + 7 = y for any y." },
                { text: t`$f : \mathbb{N} \to \mathbb{N}$, $n \mapsto n + 3$`, group: 1, hint: "Which natural numbers are never outputs?" },
                { text: t`$f : \mathbb{R} \to \mathbb{R}$, $x \mapsto x^3$`, group: 0, hint: "Every real number has exactly one real cube root." },
                { text: t`$f : \mathbb{Z} \to \mathbb{Z}$, $n \mapsto 2n$`, group: 1, hint: "Odd integers are never outputs." },
                { text: t`$f : \mathbb{R} \to [0, \infty)$, $x \mapsto x^2$`, group: 2, hint: "x and −x give the same output." },
                { text: t`$f : \mathbb{R} \to [-1, 1]$, $x \mapsto \sin x$`, group: 2, hint: "sin 0 = sin π." },
                { text: t`$f : [0, \infty) \to [0, \infty)$, $x \mapsto x^2$`, group: 0, hint: "No negative inputs are allowed now." },
              ],
              explain: "Changing the domain can make a function one-one, and changing the codomain can make it onto. Always read both before deciding.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`For one-one, start with "Let $f(x_1) = f(x_2)$" and end with "$\therefore x_1 = x_2$". For onto, start with "Let $y \in$ codomain", find $x$, **state that $x$ is in the domain**, and verify $f(x) = y$. Skipping the domain check is the most common reason for losing the onto mark (for example, $x = \frac{y+5}{3}$ need not be a natural number when the domain is $\mathbb{N}$).`,
          },
          {
            type: "keypoints",
            items: [
              t`One-one: $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Many-one otherwise.`,
              "Onto: range = codomain; every element of the codomain has a preimage in the domain.",
              "Bijective = one-one and onto.",
              t`For a finite set $X$, $f : X \to X$ is one-one exactly when it is onto.`,
              "Disprove one-one with two inputs that share an output; disprove onto with one value that is never reached.",
            ],
          },
        ],
        flashcards: [
          { front: "One-one (injective)", back: t`Different inputs give different outputs: $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$.` },
          { front: "Onto (surjective)", back: "Every element of the codomain is the image of some element of the domain; range = codomain." },
          { front: "Bijective", back: "Both one-one and onto." },
          { front: "Many-one function", back: "A function that is not one-one: at least two inputs share an output." },
          { front: t`Is $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ one-one?`, back: t`No: $f(-3) = f(3) = 9$.` },
          { front: "Finite set fact", back: t`For finite $X$, $f : X \to X$ is one-one if and only if it is onto.` },
          { front: "Greatest integer function on ℝ", back: t`$f(x) = [x]$ is neither one-one nor onto as a map $\mathbb{R} \to \mathbb{R}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = 1 - 4x$. Then $f$ is:`,
            options: ["bijective", "one-one only", "onto only", "neither"],
            answer: 0,
            explain: t`$1 - 4x_1 = 1 - 4x_2 \Rightarrow x_1 = x_2$; and $x = \frac{1 - y}{4}$ is real for every real $y$.`,
          },
          {
            kind: "mcq",
            q: t`$f : \mathbb{Z} \to \mathbb{Z}$, $f(n) = n^2$. Then $f$ is:`,
            options: ["one-one and onto", "one-one, not onto", "onto, not one-one", "neither one-one nor onto"],
            answer: 3,
            explain: t`$f(-2) = f(2)$, so not one-one; $2$ is not a perfect square, so not onto.`,
          },
          {
            kind: "truefalse",
            q: t`If $A = \{1, 2, 3\}$ and $f : A \to A$ is onto, then $f$ must be one-one.`,
            answer: true,
            explain: "For a map from a finite set to itself, onto and one-one are equivalent: three outputs must be all different to cover three values.",
          },
          {
            kind: "mcq",
            q: t`Which choice of codomain makes $f(x) = x^2 + 1$, with domain $\mathbb{R}$, onto?`,
            options: [t`$\mathbb{R}$`, t`$[0, \infty)$`, t`$[1, \infty)$`, t`$(1, \infty)$`],
            answer: 2,
            explain: t`The range of $x^2 + 1$ is $[1, \infty)$ (the value 1 is taken at $x = 0$). Onto needs codomain = range.`,
          },
          {
            kind: "multi",
            q: t`Select all functions $\mathbb{R} \to \mathbb{R}$ that are one-one.`,
            options: [t`$f(x) = x^3 + 2$`, t`$f(x) = |x|$`, t`$f(x) = e^x$`, t`$f(x) = \cos x$`],
            answers: [0, 2],
            explain: t`$x^3 + 2$ and $e^x$ are strictly increasing, so one-one. $|x|$ and $\cos x$ repeat values ($|{-1}| = |1|$, $\cos 0 = \cos 2\pi$). Note $e^x$ is not onto $\mathbb{R}$, but it is one-one.`,
            difficulty: 2,
            hint: "A strictly increasing function never repeats a value.",
          },
          {
            kind: "mcq",
            q: t`$f : \mathbb{N} \to \mathbb{N}$, $f(n) = n - 1$ if $n$ is even and $f(n) = n + 1$ if $n$ is odd. Then $f$ is:`,
            options: ["bijective", "one-one only", "onto only", "neither"],
            answer: 0,
            explain: t`$f$ swaps $1 \leftrightarrow 2$, $3 \leftrightarrow 4$, and so on. Each natural number is hit exactly once, so $f$ is bijective (in fact $f \circ f$ is the identity).`,
            difficulty: 2,
            hint: "Compute f(1), f(2), f(3), f(4).",
          },
          {
            kind: "mcq",
            q: t`For $f : \mathbb{N} \to \mathbb{N}$, $f(x) = 3x + 2$, which number is **not** in the range?`,
            options: ["5", "8", "11", "9"],
            answer: 3,
            explain: t`$3x + 2 = 9$ gives $x = \frac{7}{3} \notin \mathbb{N}$. The others come from $x = 1, 2, 3$. So $f$ is not onto.`,
          },
        ],
      },
      {
        slug: "c12-composition-invertible",
        title: "Composition of Functions and Invertible Functions",
        summary: "How to compose two functions, why order matters, when a function has an inverse, and how to find it.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏭",
            caption: "A factory first cuts cotton into cloth, then stitches the cloth into shirts. Doing one job after another is a composition; undoing both in reverse order is the inverse.",
          },
          {
            type: "text",
            md: t`Let $f : A \to B$ and $g : B \to C$. The **composition** $g \circ f : A \to C$ is defined by $(g \circ f)(x) = g(f(x))$. Read it right to left: **first** apply $f$, **then** apply $g$.

For $g \circ f$ to make sense, every output of $f$ must be an allowed input of $g$ (range of $f \subseteq$ domain of $g$).`,
          },
          {
            type: "formula",
            tex: t`(g \circ f)(x) = g\big(f(x)\big), \qquad h \circ (g \circ f) = (h \circ g) \circ f`,
            caption: "Composition is associative, but in general g∘f ≠ f∘g",
          },
          {
            type: "example",
            title: "Order matters",
            problem: t`Let $f, g : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2 + 1$ and $g(x) = 2x - 3$. Find $g \circ f$ and $f \circ g$.`,
            steps: [
              t`$(g \circ f)(x) = g(x^2 + 1) = 2(x^2 + 1) - 3 = 2x^2 - 1$.`,
              t`$(f \circ g)(x) = f(2x - 3) = (2x - 3)^2 + 1 = 4x^2 - 12x + 10$.`,
              t`Check at $x = 0$: $(g \circ f)(0) = -1$ but $(f \circ g)(0) = 10$.`,
            ],
            answer: t`$g \circ f(x) = 2x^2 - 1$ and $f \circ g(x) = 4x^2 - 12x + 10$; so $g \circ f \neq f \circ g$.`,
          },
          {
            type: "text",
            md: t`Two facts that boards like to ask as short proofs: if $f$ and $g$ are both one-one, then $g \circ f$ is one-one; if $f$ and $g$ are both onto, then $g \circ f$ is onto.

A function $f : X \to Y$ is **invertible** if there is a function $g : Y \to X$ with $g \circ f = I_X$ and $f \circ g = I_Y$, where $I$ is the identity function. Then $g$ is called the **inverse** of $f$, written $f^{-1}$. The key theorem: **$f$ is invertible if and only if $f$ is bijective.**`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$f(x) = x + 2$ and $g(x) = x^2$ on $\mathbb{R}$. What is $(f \circ g)(3)$?`,
                options: ["25", "11", "9", "5"],
                answer: 1,
                explain: t`$(f \circ g)(3) = f(g(3)) = f(9) = 11$. The value 25 is $(g \circ f)(3)$.`,
              },
              {
                kind: "truefalse",
                q: t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ has an inverse function.`,
                answer: false,
                explain: "It is neither one-one nor onto on ℝ, and only bijections are invertible.",
              },
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Check that $f$ is one-one and onto (or note that the steps below give a unique $x$ for every $y$ in the codomain).`,
              t`Write $y = f(x)$.`,
              t`Solve for $x$ in terms of $y$.`,
              t`Check that this $x$ lies in the domain for every $y$ in the codomain.`,
              t`Write $f^{-1}(y)$ = that expression, and verify $f(f^{-1}(y)) = y$ if asked.`,
            ],
          },
          {
            type: "example",
            title: "Finding an inverse",
            problem: t`Let $f : \mathbb{R} - \{3\} \to \mathbb{R} - \{2\}$, $f(x) = \dfrac{2x + 1}{x - 3}$. Show that $f$ is invertible and find $f^{-1}$.`,
            steps: [
              t`Put $y = \dfrac{2x + 1}{x - 3}$. Then $yx - 3y = 2x + 1$, so $x(y - 2) = 3y + 1$.`,
              t`For $y \neq 2$: $x = \dfrac{3y + 1}{y - 2}$. Exactly one $x$ for each $y$, which gives one-one and onto together.`,
              t`Domain check: if $\frac{3y+1}{y-2} = 3$ then $3y + 1 = 3y - 6$, impossible. So $x \neq 3$, and $x$ really is in $\mathbb{R} - \{3\}$.`,
              t`Verify: $f\left(\frac{3y+1}{y-2}\right) = \dfrac{\frac{6y+2}{y-2} + 1}{\frac{3y+1}{y-2} - 3} = \dfrac{7y}{7} = y$.`,
            ],
            answer: t`$f$ is bijective, and $f^{-1}(y) = \dfrac{3y + 1}{y - 2}$ for $y \in \mathbb{R} - \{2\}$.`,
          },
          {
            type: "formula",
            tex: t`(g \circ f)^{-1} = f^{-1} \circ g^{-1}, \qquad (f^{-1})^{-1} = f`,
            caption: "Undo the last step first: socks on, then shoes; shoes off, then socks.",
          },
          {
            type: "mistake",
            wrong: t`$f^{-1}(x) = \dfrac{1}{f(x)}$. For $f(x) = 5x - 2$, $f^{-1}(x) = \dfrac{1}{5x - 2}$.`,
            right: t`$f^{-1}$ **undoes** $f$. From $y = 5x - 2$ we get $x = \frac{y + 2}{5}$, so $f^{-1}(x) = \dfrac{x + 2}{5}$. Check: $f\left(\frac{x+2}{5}\right) = x$.`,
            why: t`The notation $x^{-1} = \frac{1}{x}$ for numbers makes $f^{-1}$ look like a reciprocal. For functions the $-1$ means "inverse under composition", not "one over".`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for finding an inverse in order.",
              items: [
                "Confirm f is one-one and onto",
                "Write y = f(x)",
                "Solve for x in terms of y",
                "Check that x lies in the domain",
                "Write f⁻¹(y) as that expression",
              ],
              explain: "You may only call the result an inverse when f is a bijection and the solved x always lands back in the domain.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "ISC Class 12 includes composite functions and the inverse of a bijective function in this unit. The current CBSE syllabus lists only types of relations and one-one and onto functions for this chapter, so composition and invertibility may appear lightly or not at all in a CBSE paper; check the year's syllabus. JEE Main lists composition of functions, and the idea of an inverse is needed for the next chapter on inverse trigonometric functions. Karnataka II PUC and KCET follow the rationalised NCERT book, so check whether your year's syllabus includes this section.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`In "show $f$ is invertible and find $f^{-1}$", marks go separately to one-one, onto (with the domain check) and the inverse formula. Always write the inverse with its own domain, e.g. $f^{-1} : \mathbb{R} - \{2\} \to \mathbb{R} - \{3\}$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$(g \circ f)(x) = g(f(x))$: apply $f$ first. Composition is associative but not commutative.`,
              "One-one ∘ one-one is one-one; onto ∘ onto is onto.",
              t`$f$ is invertible exactly when it is bijective; then $f^{-1} \circ f = I_X$ and $f \circ f^{-1} = I_Y$.`,
              t`$(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.`,
              t`$f^{-1}$ is the inverse function, not the reciprocal $\frac{1}{f}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$(g \circ f)(x)$`, back: t`$g(f(x))$: first $f$, then $g$.` },
          { front: "Is composition commutative?", back: t`No. In general $g \circ f \neq f \circ g$. It is associative.` },
          { front: "When is f invertible?", back: "Exactly when f is bijective (one-one and onto)." },
          { front: t`$(g \circ f)^{-1}$`, back: t`$f^{-1} \circ g^{-1}$ (reverse order).` },
          { front: t`Identity function $I_X$`, back: t`$I_X(x) = x$ for all $x \in X$. $f^{-1} \circ f = I_X$.` },
          { front: t`Inverse of $f(x) = ax + b$, $a \neq 0$`, back: t`$f^{-1}(x) = \dfrac{x - b}{a}$.` },
          { front: "If f and g are one-one, is g∘f one-one?", back: t`Yes: $g(f(x_1)) = g(f(x_2)) \Rightarrow f(x_1) = f(x_2) \Rightarrow x_1 = x_2$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`If $f(x) = 3x + 1$ and $g(x) = x - 4$ on $\mathbb{R}$, then $(g \circ f)(x)$ is:`,
            options: [t`$3x - 3$`, t`$3x - 11$`, t`$3x + 5$`, t`$3x^2 - 11x - 4$`],
            answer: 0,
            explain: t`$g(f(x)) = (3x + 1) - 4 = 3x - 3$. $3x - 11$ is $f(g(x)) = 3(x - 4) + 1$.`,
          },
          {
            kind: "mcq",
            q: t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = \dfrac{x - 7}{4}$. Then $f^{-1}(x)$ is:`,
            options: [t`$\dfrac{4}{x - 7}$`, t`$4x + 7$`, t`$4x - 7$`, t`$\dfrac{x + 7}{4}$`],
            answer: 1,
            explain: t`$y = \frac{x - 7}{4} \Rightarrow x = 4y + 7$. The option $\frac{4}{x - 7}$ is the reciprocal mistake.`,
          },
          {
            kind: "numeric",
            q: t`$f(x) = x^2$ and $g(x) = 2x + 1$ on $\mathbb{R}$. Find $(f \circ g)(2) - (g \circ f)(2)$.`,
            answer: 16,
            explain: t`$(f \circ g)(2) = f(5) = 25$ and $(g \circ f)(2) = g(4) = 9$. Difference $= 16$.`,
          },
          {
            kind: "truefalse",
            q: t`If $f : A \to B$ and $g : B \to C$ are both bijections, then $g \circ f$ is invertible.`,
            answer: true,
            explain: t`$g \circ f$ is one-one and onto, so it is a bijection, with inverse $f^{-1} \circ g^{-1}$.`,
          },
          {
            kind: "mcq",
            q: t`$f : [0, \infty) \to [4, \infty)$, $f(x) = x^2 + 4$. Then $f^{-1}(13)$ equals:`,
            options: ["3", "−3", "±3", "169"],
            answer: 0,
            explain: t`$x^2 + 4 = 13 \Rightarrow x^2 = 9$. The domain is $[0, \infty)$, so $x = 3$ only. That restriction is what makes $f$ invertible.`,
            difficulty: 2,
            hint: "Check which square root lies in the domain.",
          },
          {
            kind: "mcq",
            q: t`On $A = \{1, 2, 3\}$, $f = \{(1, 2), (2, 3), (3, 1)\}$. Then $f^{-1}$ is:`,
            options: [
              t`$\{(1, 2), (2, 3), (3, 1)\}$`,
              t`$\{(2, 1), (3, 2), (1, 3)\}$`,
              t`$\{(1, 1), (2, 2), (3, 3)\}$`,
              "f has no inverse",
            ],
            answer: 1,
            explain: t`$f$ is a bijection; reverse every pair. Note $f^{-1}(1) = 3$ because $f(3) = 1$.`,
          },
          {
            kind: "multi",
            q: t`Let $f(x) = 2x$ and $g(x) = x + 5$ on $\mathbb{R}$. Select all correct statements.`,
            options: [
              t`$(g \circ f)^{-1}(x) = \dfrac{x - 5}{2}$`,
              t`$(g \circ f)^{-1}(x) = \dfrac{x}{2} - 5$`,
              t`$(f \circ g)(x) = 2x + 10$`,
              t`$g \circ f = f \circ g$`,
            ],
            answers: [0, 2],
            explain: t`$(g \circ f)(x) = 2x + 5$, whose inverse is $\frac{x - 5}{2} = f^{-1}(g^{-1}(x))$. $(f \circ g)(x) = 2(x + 5) = 2x + 10 \neq 2x + 5$. Option 2 is $g^{-1}(f^{-1}(x))$, the wrong order.`,
            difficulty: 2,
            hint: t`Use $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$: undo $g$ first.`,
          },
        ],
      },
      {
        slug: "c12-relations-functions-exam",
        title: "Exam edge: Relations and Functions",
        summary: "Counting relations and functions, equivalence relations as partitions, onto-function counts, and invertibility tricks for JEE, KCET and COMEDK.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`This chapter is short in the board book but busy in entrance exams. **KCET** and **COMEDK** ask direct one-liners: identify the type of a relation, count reflexive or symmetric relations, test one-one and onto. **JEE Main** adds counting (onto functions, equivalence relations containing given pairs) and inverses of tricky functions. **JEE Advanced** mixes this chapter with permutations and combinations and with graphs of functions.`,
          },
          {
            type: "table",
            headers: ["Object (with |A| = n, or m inputs and n outputs)", "Count"],
            rows: [
              [t`All relations on $A$`, t`$2^{n^2}$`],
              [t`Reflexive relations`, t`$2^{n^2 - n}$`],
              [t`Symmetric relations`, t`$2^{n(n+1)/2}$`],
              [t`Reflexive and symmetric relations`, t`$2^{n(n-1)/2}$`],
              [t`Functions from an $m$-set to an $n$-set`, t`$n^m$`],
              [t`One-one functions ($m \le n$)`, t`$^{n}P_{m} = \dfrac{n!}{(n - m)!}$`],
              [t`Bijections from an $n$-set to itself`, t`$n!$`],
              [t`Equivalence relations on $A$ ($n = 1, 2, 3, 4, 5$)`, "1, 2, 5, 15, 52 (the number of partitions of A)"],
            ],
          },
          {
            type: "formula",
            tex: t`\#\{\text{onto } f : X \to Y\} = \sum_{k=0}^{n} (-1)^k \binom{n}{k} (n - k)^m, \quad |X| = m \ge n = |Y|`,
            caption: "Inclusion–exclusion: subtract the maps that miss one output, add back those that miss two, and so on",
          },
          {
            type: "example",
            title: "KCET level: counting relations",
            problem: t`Let $A = \{a, b, c\}$. How many relations on $A$ are reflexive? How many are symmetric?`,
            steps: [
              t`$A \times A$ has $9$ ordered pairs: $3$ diagonal pairs $(x, x)$ and $6$ off-diagonal pairs.`,
              t`**Reflexive:** all $3$ diagonal pairs must be in; each of the $6$ others is free (in or out). Count $= 2^6 = 64$.`,
              t`**Symmetric:** the 6 off-diagonal pairs form 3 couples $\{(x, y), (y, x)\}$ that must go in or out together. Free choices: $3$ diagonal pairs + $3$ couples $= 6$. Count $= 2^6 = 64$.`,
            ],
            answer: "64 reflexive relations and 64 symmetric relations (the same number for n = 3, for different reasons).",
          },
          {
            type: "example",
            title: "JEE Main level: equivalence relations containing a pair",
            problem: t`How many equivalence relations on $\{1, 2, 3, 4\}$ contain the pair $(1, 2)$?`,
            steps: [
              "Equivalence relations correspond exactly to partitions of the set into classes.",
              t`Containing $(1, 2)$ means $1$ and $2$ are in the same class. Glue them into one object "$12$".`,
              t`Now count partitions of the 3 objects $\{12, 3, 4\}$: all together (1); $\{12, 3\}\{4\}$, $\{12, 4\}\{3\}$, $\{3, 4\}\{12\}$ (3); all separate (1).`,
            ],
            answer: "5 equivalence relations.",
          },
          {
            type: "example",
            title: "JEE Main level: onto functions",
            problem: t`Find the number of onto functions from $\{1, 2, 3, 4, 5\}$ to $\{a, b, c\}$.`,
            steps: [
              t`All functions: $3^5 = 243$.`,
              t`Functions missing a chosen output: $2^5 = 32$, and there are $\binom{3}{1} = 3$ choices, so subtract $96$.`,
              t`Functions missing two chosen outputs (constant maps) were subtracted twice: add back $\binom{3}{2} \cdot 1^5 = 3$.`,
              t`Onto count $= 243 - 96 + 3 = 150$.`,
            ],
            answer: "150 onto functions.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`How many one-one functions are there from $\{1, 2, 3\}$ to $\{1, 2, 3, 4, 5\}$?`,
                answer: 60,
                explain: t`Choose images one by one without repetition: $5 \times 4 \times 3 = 60 = {}^5P_3$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Advanced level: a bijection onto an interval",
            problem: t`Show that $f : \mathbb{R} \to (-1, 1)$, $f(x) = \dfrac{x}{1 + |x|}$, is a bijection, and find $f^{-1}$.`,
            steps: [
              t`$f(x)$ has the same sign as $x$, and $|f(x)| = \frac{|x|}{1 + |x|} < 1$, so the outputs lie in $(-1, 1)$.`,
              t`For $x \ge 0$, $f(x) = \frac{x}{1 + x} = 1 - \frac{1}{1 + x}$, which is strictly increasing. For $x < 0$, $f(x) = \frac{x}{1 - x} = -1 + \frac{1}{1 - x}$, also strictly increasing. Together, $f$ is strictly increasing on $\mathbb{R}$, so one-one.`,
              t`Onto: for $0 \le y < 1$, solve $\frac{x}{1 + x} = y$: $x = \frac{y}{1 - y} \ge 0$. For $-1 < y < 0$, solve $\frac{x}{1 - x} = y$: $x = \frac{y}{1 + y} < 0$. Both lie in the correct piece.`,
              t`Both cases combine to $x = \dfrac{y}{1 - |y|}$.`,
            ],
            answer: t`$f$ is bijective and $f^{-1}(y) = \dfrac{y}{1 - |y|}$ for $y \in (-1, 1)$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: t`**Self-inverse rule:** $f(x) = \dfrac{ax + b}{cx - a}$ (with $a^2 + bc \neq 0$) satisfies $f(f(x)) = x$, so $f^{-1} = f$. Safe only when the coefficient of $x$ in the numerator is the **negative** of the constant in the denominator.

**Monotonic means one-one:** a continuous function that is strictly increasing or decreasing on an interval is one-one there. Use $f'(x) > 0$ (from calculus) as a quick test in MCQs.

**Equivalence relations = partitions:** count partitions instead of checking pairs.`,
          },
          {
            type: "mistake",
            wrong: t`Onto functions from $\{1, 2, 3, 4\}$ to $\{a, b, c\}$: pick 3 inputs to cover $a, b, c$ in $\binom{4}{3} \cdot 3!$ ways, then send the last input anywhere: $4 \times 6 \times 3 = 72$.`,
            right: t`The answer is $3^4 - 3 \cdot 2^4 + 3 \cdot 1^4 = 81 - 48 + 3 = 36$. Another way: one output gets two inputs. Choose the pair of inputs ($\binom{4}{2} = 6$) and arrange the three groups onto $a, b, c$ ($3! = 6$): $36$.`,
            why: "The 'cover first, then the rest' method counts each function twice: the two inputs that share an output can each be the 'extra' one. Inclusion–exclusion or grouping avoids this overcount.",
          },
          {
            type: "mistake",
            wrong: t`The empty relation is not symmetric and not transitive, because it has no pairs to check.`,
            right: t`The empty relation **is** symmetric and transitive: an "if … then" condition with nothing satisfying the "if" part cannot fail. It is not reflexive on a non-empty set.`,
            why: "In everyday language, 'no evidence' sounds like 'false'. In mathematics, a condition that is never tested is never broken, so it holds.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "For A = {1, 2, 3}, match each object to its count.",
              pairs: [
                ["All relations on A", "512"],
                ["Reflexive relations on A", "64"],
                ["Relations that are both reflexive and symmetric", "8"],
                ["Equivalence relations on A", "5"],
                ["Functions from A to A", "27"],
                ["Bijections from A to A", "6"],
              ],
              explain: t`$2^9 = 512$, $2^{9-3} = 64$, $2^{3} = 8$, partitions of a 3-set $= 5$, $3^3 = 27$, $3! = 6$.`,
            },
          },
          {
            type: "keypoints",
            items: [
              t`Relations on an $n$-set: $2^{n^2}$; reflexive $2^{n^2 - n}$; symmetric $2^{n(n+1)/2}$; reflexive and symmetric $2^{n(n-1)/2}$.`,
              "Equivalence relations correspond to partitions: 1, 2, 5, 15, 52 for n = 1 to 5.",
              t`Onto maps from $m$ to $n$ elements: $\sum (-1)^k \binom{n}{k}(n - k)^m$; for $(4, 3)$ it is 36, for $(5, 3)$ it is 150.`,
              "Strictly monotonic implies one-one; onto needs range = codomain.",
              "Vacuous truth: the empty relation is symmetric and transitive.",
            ],
          },
        ],
        flashcards: [
          { front: "Number of relations on an n-element set", back: t`$2^{n^2}$` },
          { front: "Number of reflexive relations on an n-element set", back: t`$2^{n^2 - n} = 2^{n(n-1)}$` },
          { front: "Number of symmetric relations on an n-element set", back: t`$2^{n(n+1)/2}$` },
          { front: "Number of equivalence relations on a 4-element set", back: "15 (the number of partitions of a 4-element set)." },
          { front: "Onto functions from a 4-set to a 3-set", back: t`$81 - 48 + 3 = 36$` },
          { front: "One-one functions from an m-set to an n-set", back: t`$^{n}P_{m}$ if $m \le n$, otherwise 0.` },
          { front: t`When is $f(x) = \frac{ax + b}{cx - a}$ its own inverse?`, back: t`Always (when $a^2 + bc \neq 0$): $f(f(x)) = x$.` },
          { front: "Fastest one-one test in an MCQ", back: "Strictly increasing or strictly decreasing on its domain (for example f′(x) > 0 on an interval)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the number of relations on $\{1, 2, 3, 4\}$ that are both reflexive and symmetric.`,
            answer: 64,
            explain: t`Diagonal pairs are forced in; the $\binom{4}{2} = 6$ couples $\{(i, j), (j, i)\}$ are free: $2^6 = 64$.`,
            difficulty: 2,
            hint: "Count the unordered pairs {i, j} with i ≠ j.",
          },
          {
            kind: "mcq",
            q: t`The number of equivalence relations on $\{1, 2, 3\}$ containing $(1, 2)$ and $(2, 1)$ is:`,
            options: ["1", "2", "3", "5"],
            answer: 1,
            explain: t`$1$ and $2$ share a class. Either $3$ joins them (universal relation) or $3$ stays alone. So 2.`,
            difficulty: 2,
            hint: "Glue 1 and 2 together and count partitions of the two objects left.",
          },
          {
            kind: "numeric",
            q: t`How many onto functions are there from a set with 4 elements to a set with 2 elements?`,
            answer: 14,
            explain: t`$2^4 - 2 = 14$: subtract the two constant functions.`,
          },
          {
            kind: "mcq",
            q: t`$f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^3 + 3x + 1$. Then $f$ is:`,
            options: ["one-one and onto", "one-one, not onto", "onto, not one-one", "neither one-one nor onto"],
            answer: 0,
            explain: t`$f'(x) = 3x^2 + 3 > 0$, so $f$ is strictly increasing (one-one). It is continuous and tends to $\pm\infty$ as $x \to \pm\infty$, so its range is $\mathbb{R}$ (onto).`,
            difficulty: 2,
            hint: "Look at the derivative and at the ends of the graph.",
          },
          {
            kind: "mcq",
            q: t`$f(x) = \dfrac{3x + 5}{2x - 3}$, $x \neq \frac{3}{2}$. Then $f^{-1}(x)$ equals:`,
            options: [t`$\dfrac{3x + 5}{2x - 3}$`, t`$\dfrac{2x - 3}{3x + 5}$`, t`$\dfrac{3x - 5}{2x + 3}$`, t`$\dfrac{-3x + 5}{2x - 3}$`],
            answer: 0,
            explain: t`It has the form $\frac{ax + b}{cx - a}$ with $a = 3$, so it is its own inverse. Check: $y(2x - 3) = 3x + 5 \Rightarrow x(2y - 3) = 3y + 5 \Rightarrow x = \frac{3y + 5}{2y - 3}$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`$R$ is a relation on $\mathbb{R}$ defined by $a \, R \, b$ if $|a - b| \le 1$. Select all properties that $R$ has.`,
            options: ["Reflexive", "Symmetric", "Transitive", "Equivalence"],
            answers: [0, 1],
            explain: t`$|a - a| = 0 \le 1$ and $|a - b| = |b - a|$. But $0 R 1$ and $1 R 2$ while $|0 - 2| = 2 > 1$, so not transitive.`,
            difficulty: 2,
            hint: "Try a chain of steps of size 1.",
          },
          {
            kind: "numeric",
            q: t`How many bijections $f : \{1, 2, 3, 4\} \to \{1, 2, 3, 4\}$ satisfy $f(i) \neq i$ for every $i$?`,
            answer: 9,
            explain: t`These are derangements: $D_4 = 4!\left(1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24}\right) = 24 \cdot \frac{9}{24} = 9$.`,
            difficulty: 3,
            hint: "Use inclusion–exclusion on the fixed points.",
          },
          {
            kind: "mcq",
            q: t`$A = \{1, 2, 3, 4, 5\}$. The number of equivalence relations on $A$ with exactly two equivalence classes is:`,
            options: ["10", "15", "16", "31"],
            answer: 1,
            explain: t`Split $A$ into two non-empty unlabelled parts: $\frac{2^5 - 2}{2} = 15$.`,
            difficulty: 3,
            hint: "Each element goes to part 1 or part 2; remove the cases with an empty part, then divide by 2 because the parts have no labels.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12: Inverse Trigonometric Functions (NCERT Ch 2, ISC Unit 1)  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-inverse-trig",
    title: "Inverse Trigonometric Functions",
    icon: "📐",
    description: "Domains, principal value branches and graphs of the six inverse trigonometric functions, their properties, and exam techniques for evaluating and solving.",
    lessons: [
      {
        slug: "c12-itf-principal-values",
        title: "Domains, Ranges and Principal Values",
        summary: "Why trigonometric functions must be restricted before they can be inverted, the principal value branch of each inverse function, and their graphs.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🛝",
            caption: t`A ramp rises 1 m over a slope length of 2 m. The angle of the ramp is the angle whose sine is $\frac{1}{2}$: that is $\sin^{-1}\frac{1}{2} = \frac{\pi}{6}$, or 30°.`,
          },
          {
            type: "text",
            md: t`From the last chapter, only a **bijection** has an inverse. But $\sin x$ is not one-one on $\mathbb{R}$: $\sin 0 = \sin \pi = 0$. So we **restrict** it. On $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, sine is increasing and takes every value in $[-1, 1]$ exactly once. So $\sin : \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \to [-1, 1]$ is a bijection, and its inverse is

$\sin^{-1} : [-1, 1] \to \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, also written **arcsin**.

Other intervals (such as $\left[\frac{\pi}{2}, \frac{3\pi}{2}\right]$) would also work and give other **branches**. The branch we use by default is the **principal value branch**, and its output is the **principal value**.`,
          },
          {
            type: "formula",
            tex: t`y = \sin^{-1} x \iff \sin y = x \ \text{ and } \ -\tfrac{\pi}{2} \le y \le \tfrac{\pi}{2}`,
            caption: "The second condition is what makes the answer unique",
          },
          {
            type: "table",
            headers: ["Function", "Domain", "Principal value branch (range)"],
            rows: [
              [t`$\sin^{-1} x$`, t`$[-1, 1]$`, t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$`],
              [t`$\cos^{-1} x$`, t`$[-1, 1]$`, t`$[0, \pi]$`],
              [t`$\tan^{-1} x$`, t`$\mathbb{R}$`, t`$\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$`],
              [t`$\cot^{-1} x$`, t`$\mathbb{R}$`, t`$(0, \pi)$`],
              [t`$\sec^{-1} x$`, t`$\mathbb{R} - (-1, 1)$`, t`$[0, \pi] - \left\{\frac{\pi}{2}\right\}$`],
              [t`$\csc^{-1} x$`, t`$\mathbb{R} - (-1, 1)$`, t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] - \{0\}$`],
            ],
          },
          {
            type: "text",
            md: t`**Graphs.** The graph of an inverse function is the mirror image of the original (restricted) graph in the line $y = x$: swap the coordinates of every point.

$y = \sin^{-1} x$ rises from $\left(-1, -\frac{\pi}{2}\right)$ through $(0, 0)$ to $\left(1, \frac{\pi}{2}\right)$. $y = \cos^{-1} x$ falls from $(-1, \pi)$ through $\left(0, \frac{\pi}{2}\right)$ to $(1, 0)$. $y = \tan^{-1} x$ is defined for all $x$, increases, and flattens towards the lines $y = \pm\frac{\pi}{2}$ without touching them.`,
          },
          {
            type: "example",
            title: "Principal values",
            problem: t`Find the principal values of (a) $\sin^{-1}\left(-\frac{1}{2}\right)$, (b) $\cos^{-1}\left(-\frac{1}{2}\right)$, (c) $\tan^{-1}(-\sqrt{3})$, (d) $\csc^{-1}(2)$.`,
            steps: [
              t`(a) We need $y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ with $\sin y = -\frac{1}{2}$. Since $\sin\frac{\pi}{6} = \frac{1}{2}$, $y = -\frac{\pi}{6}$.`,
              t`(b) We need $y \in [0, \pi]$ with $\cos y = -\frac{1}{2}$. Since $\cos\frac{\pi}{3} = \frac{1}{2}$, $y = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$ (a negative angle is not allowed here).`,
              t`(c) $y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ with $\tan y = -\sqrt{3}$: $y = -\frac{\pi}{3}$.`,
              t`(d) $\csc y = 2$ means $\sin y = \frac{1}{2}$, with $y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] - \{0\}$: $y = \frac{\pi}{6}$.`,
            ],
            answer: t`(a) $-\frac{\pi}{6}$, (b) $\frac{2\pi}{3}$, (c) $-\frac{\pi}{3}$, (d) $\frac{\pi}{6}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The principal value of $\cos^{-1}(-1)$ is:`,
                options: [t`$-\pi$`, t`$\pi$`, t`$0$`, t`$-\frac{\pi}{2}$`],
                answer: 1,
                explain: t`$\cos \pi = -1$ and $\pi \in [0, \pi]$. $-\pi$ also has cosine $-1$ but is outside the principal branch.`,
              },
              {
                kind: "mcq",
                q: t`The principal value of $\cot^{-1}(-1)$ is:`,
                options: [t`$-\frac{\pi}{4}$`, t`$\frac{\pi}{4}$`, t`$\frac{3\pi}{4}$`, t`$\frac{5\pi}{4}$`],
                answer: 2,
                explain: t`The branch of $\cot^{-1}$ is $(0, \pi)$. $\cot\frac{3\pi}{4} = -1$, and $\frac{3\pi}{4}$ is in $(0, \pi)$. $-\frac{\pi}{4}$ is the answer people give by copying the $\tan^{-1}$ branch.`,
              },
            ],
          },
          {
            type: "example",
            title: "Combining principal values",
            problem: t`Evaluate $\sin^{-1}\left(-\frac{\sqrt{3}}{2}\right) + \cot^{-1}\left(-\frac{1}{\sqrt{3}}\right)$.`,
            steps: [
              t`$\sin^{-1}\left(-\frac{\sqrt{3}}{2}\right) = -\frac{\pi}{3}$, because $\sin\left(-\frac{\pi}{3}\right) = -\frac{\sqrt{3}}{2}$ and $-\frac{\pi}{3} \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.`,
              t`$\cot^{-1}\left(-\frac{1}{\sqrt{3}}\right)$ lies in $(0, \pi)$. $\cot\frac{\pi}{3} = \frac{1}{\sqrt{3}}$, so the angle with cotangent $-\frac{1}{\sqrt{3}}$ in $(0, \pi)$ is $\pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`,
              t`Add: $-\frac{\pi}{3} + \frac{2\pi}{3} = \frac{\pi}{3}$.`,
            ],
            answer: t`$\dfrac{\pi}{3}$`,
          },
          {
            type: "example",
            title: "Domain of a composite expression",
            problem: t`Find the domain of $f(x) = \sin^{-1}(2x - 3)$.`,
            steps: [
              t`$\sin^{-1}$ accepts only inputs in $[-1, 1]$, so we need $-1 \le 2x - 3 \le 1$.`,
              t`Add 3: $2 \le 2x \le 4$. Divide by 2: $1 \le x \le 2$.`,
            ],
            answer: t`Domain $= [1, 2]$.`,
          },
          {
            type: "mistake",
            wrong: t`$\sin^{-1} x$ means $\dfrac{1}{\sin x}$, so $\sin^{-1}\frac{1}{2} = 2$.`,
            right: t`$\sin^{-1} x$ is the **angle** whose sine is $x$: $\sin^{-1}\frac{1}{2} = \frac{\pi}{6}$. The reciprocal is $(\sin x)^{-1} = \csc x$.`,
            why: t`We write $\sin^2 x$ for $(\sin x)^2$, so $\sin^{-1} x$ looks like a power. For inverse functions the $-1$ means "inverse function", exactly as in $f^{-1}$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each function to its principal value branch.",
              pairs: [
                [t`$\sin^{-1} x$`, t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$`],
                [t`$\cos^{-1} x$`, t`$[0, \pi]$`],
                [t`$\tan^{-1} x$`, t`$\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$`],
                [t`$\cot^{-1} x$`, t`$(0, \pi)$`],
                [t`$\sec^{-1} x$`, t`$[0, \pi] - \left\{\frac{\pi}{2}\right\}$`],
                [t`$\csc^{-1} x$`, t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] - \{0\}$`],
              ],
              explain: t`Sine, tangent and cosecant use a branch centred on 0 (so they give negative angles for negative inputs). Cosine, cotangent and secant use a branch starting at 0 (so their values are never negative).`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`Principal-value questions are 1–2 mark items. Write the branch first, for example "Let $\cos^{-1}\left(-\frac{1}{2}\right) = y$, $y \in [0, \pi]$", then find $y$. An angle with the right sine or cosine but outside the branch (such as $-\frac{\pi}{3}$ for $\cos^{-1}\frac{1}{2}$) gets no marks. Use radians in the final answer.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT chapter (CBSE, Karnataka II PUC) covers exactly this: definitions, domains and ranges, principal value branches, graphs and evaluation of principal values. The properties and identities in the next lesson were removed from the NCERT book but remain in the ISC Class 12 syllabus and in JEE.",
          },
          {
            type: "keypoints",
            items: [
              "A trigonometric function is inverted only after restricting it to an interval where it is a bijection.",
              t`Branches: $\sin^{-1}, \csc^{-1}$ in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$; $\tan^{-1}$ in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$; $\cos^{-1}, \sec^{-1}$ in $[0, \pi]$; $\cot^{-1}$ in $(0, \pi)$; with $0$ or $\frac{\pi}{2}$ removed for csc and sec.`,
              t`$\sin^{-1}$ and $\cos^{-1}$ accept only $[-1, 1]$; $\sec^{-1}$ and $\csc^{-1}$ only $|x| \ge 1$; $\tan^{-1}$ and $\cot^{-1}$ accept every real number.`,
              t`The graph of an inverse function is the reflection of the restricted graph in $y = x$.`,
              t`$\sin^{-1} x \neq \frac{1}{\sin x}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Principal branch of $\sin^{-1}$`, back: t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, domain $[-1, 1]$.` },
          { front: t`Principal branch of $\cos^{-1}$`, back: t`$[0, \pi]$, domain $[-1, 1]$.` },
          { front: t`Principal branch of $\tan^{-1}$`, back: t`$\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, domain $\mathbb{R}$.` },
          { front: t`Principal branch of $\cot^{-1}$`, back: t`$(0, \pi)$, domain $\mathbb{R}$.` },
          { front: t`Principal branch of $\sec^{-1}$`, back: t`$[0, \pi] - \left\{\frac{\pi}{2}\right\}$, domain $|x| \ge 1$.` },
          { front: t`Principal branch of $\csc^{-1}$`, back: t`$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] - \{0\}$, domain $|x| \ge 1$.` },
          { front: t`$\cos^{-1}\left(-\frac{1}{2}\right)$`, back: t`$\frac{2\pi}{3}$` },
          { front: "Graph of an inverse function", back: t`Reflection of the restricted original graph in the line $y = x$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The principal value of $\cos^{-1}\left(-\frac{\sqrt{3}}{2}\right)$ is:`,
            options: [t`$-\frac{\pi}{6}$`, t`$\frac{\pi}{6}$`, t`$\frac{5\pi}{6}$`, t`$\frac{7\pi}{6}$`],
            answer: 2,
            explain: t`$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$, so in $[0, \pi]$ the angle is $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.`,
          },
          {
            kind: "mcq",
            q: t`The principal value of $\csc^{-1}(-2)$ is:`,
            options: [t`$-\frac{\pi}{6}$`, t`$\frac{5\pi}{6}$`, t`$\frac{7\pi}{6}$`, t`$-\frac{\pi}{3}$`],
            answer: 0,
            explain: t`$\csc y = -2 \Rightarrow \sin y = -\frac{1}{2}$, with $y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] - \{0\}$: $y = -\frac{\pi}{6}$.`,
          },
          {
            kind: "mcq",
            q: t`The domain of $\cos^{-1}(3x - 1)$ is:`,
            options: [t`$[-1, 1]$`, t`$\left[0, \frac{2}{3}\right]$`, t`$[0, 2]$`, t`$\left[-\frac{2}{3}, 0\right]$`],
            answer: 1,
            explain: t`$-1 \le 3x - 1 \le 1 \Rightarrow 0 \le 3x \le 2 \Rightarrow 0 \le x \le \frac{2}{3}$.`,
          },
          {
            kind: "mcq",
            q: t`$\sec^{-1}(2) + \cot^{-1}(\sqrt{3})$ equals:`,
            options: [t`$\frac{\pi}{2}$`, t`$\frac{\pi}{3}$`, t`$\frac{2\pi}{3}$`, t`$\pi$`],
            answer: 0,
            explain: t`$\sec^{-1} 2 = \frac{\pi}{3}$ (since $\cos\frac{\pi}{3} = \frac{1}{2}$) and $\cot^{-1}\sqrt{3} = \frac{\pi}{6}$. Sum $= \frac{\pi}{2}$.`,
          },
          {
            kind: "truefalse",
            q: t`$\sin^{-1}(2)$ is not defined as a real number.`,
            answer: true,
            explain: t`The domain of $\sin^{-1}$ is $[-1, 1]$; no real angle has sine 2.`,
          },
          {
            kind: "mcq",
            q: t`$\sin\left(\frac{\pi}{3} + \cos^{-1}\frac{1}{2}\right)$ equals:`,
            options: [t`$1$`, t`$\frac{1}{2}$`, t`$\frac{\sqrt{3}}{2}$`, t`$0$`],
            answer: 2,
            explain: t`$\cos^{-1}\frac{1}{2} = \frac{\pi}{3}$, so the expression is $\sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}$.`,
          },
          {
            kind: "multi",
            q: t`Select all values that can be outputs of $\cot^{-1} x$ for some real $x$.`,
            options: [t`$\frac{\pi}{2}$`, t`$0$`, t`$\frac{3\pi}{4}$`, t`$-\frac{\pi}{4}$`],
            answers: [0, 2],
            explain: t`The branch is the open interval $(0, \pi)$. $\frac{\pi}{2} = \cot^{-1} 0$ and $\frac{3\pi}{4} = \cot^{-1}(-1)$. $0$ is excluded (cot 0 is undefined) and negative angles are outside.`,
            difficulty: 2,
            hint: "Is the interval open or closed at 0?",
          },
          {
            kind: "mcq",
            q: t`The domain of $f(x) = \cos^{-1}(x^2 - 4)$ is:`,
            options: [
              t`$[\sqrt{3}, \sqrt{5}]$`,
              t`$[-\sqrt{5}, \sqrt{5}]$`,
              t`$[-\sqrt{5}, -\sqrt{3}] \cup [\sqrt{3}, \sqrt{5}]$`,
              t`$[3, 5]$`,
            ],
            answer: 2,
            explain: t`$-1 \le x^2 - 4 \le 1 \Rightarrow 3 \le x^2 \le 5 \Rightarrow \sqrt{3} \le |x| \le \sqrt{5}$. Do not forget the negative part.`,
            difficulty: 2,
            hint: t`Solve for $x^2$ first, then take both signs.`,
          },
        ],
      },
      {
        slug: "c12-itf-properties",
        title: "Properties of Inverse Trigonometric Functions",
        summary: "Negative arguments, reciprocal and complementary pairs, sum and difference formulas for tan⁻¹, double-angle forms, and simplifying by substitution (ISC and JEE).",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Who needs this lesson",
            md: "ISC Class 12 students study these properties for the board exam. CBSE and Karnataka II PUC students do not need them for the board paper (they were removed from the rationalised NCERT book), but JEE Main and JEE Advanced problems still use them, and they speed up many KCET and COMEDK questions, so treat this as essential exam preparation.",
          },
          {
            type: "text",
            md: t`Start with the two directions of "undoing".

$\sin(\sin^{-1} x) = x$ for **every** $x \in [-1, 1]$: take the angle, then its sine, and you are back.

$\sin^{-1}(\sin x) = x$ **only** when $x \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$. Outside that interval, $\sin^{-1}$ returns the angle in the principal branch with the same sine, not $x$ itself. The same holds for every pair: $\cos^{-1}(\cos x) = x$ only for $x \in [0, \pi]$, and $\tan^{-1}(\tan x) = x$ only for $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.`,
          },
          {
            type: "example",
            title: "Undoing outside the principal branch",
            problem: t`Evaluate (a) $\sin^{-1}\left(\sin\frac{2\pi}{3}\right)$, (b) $\cos^{-1}\left(\cos\frac{7\pi}{6}\right)$, (c) $\tan^{-1}\left(\tan\frac{3\pi}{4}\right)$.`,
            steps: [
              t`(a) $\frac{2\pi}{3}$ is outside $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$. Use $\sin(\pi - \theta) = \sin\theta$: $\sin\frac{2\pi}{3} = \sin\frac{\pi}{3}$, and $\frac{\pi}{3}$ is in the branch. Answer $\frac{\pi}{3}$.`,
              t`(b) $\frac{7\pi}{6}$ is outside $[0, \pi]$. Use $\cos(2\pi - \theta) = \cos\theta$: $\cos\frac{7\pi}{6} = \cos\frac{5\pi}{6}$, and $\frac{5\pi}{6} \in [0, \pi]$. Answer $\frac{5\pi}{6}$.`,
              t`(c) $\tan$ has period $\pi$: $\tan\frac{3\pi}{4} = \tan\left(\frac{3\pi}{4} - \pi\right) = \tan\left(-\frac{\pi}{4}\right)$. Answer $-\frac{\pi}{4}$.`,
            ],
            answer: t`(a) $\frac{\pi}{3}$, (b) $\frac{5\pi}{6}$, (c) $-\frac{\pi}{4}$.`,
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \sin^{-1}(-x) &= -\sin^{-1}x, & \tan^{-1}(-x) &= -\tan^{-1}x, & \csc^{-1}(-x) &= -\csc^{-1}x \\ \cos^{-1}(-x) &= \pi - \cos^{-1}x, & \cot^{-1}(-x) &= \pi - \cot^{-1}x, & \sec^{-1}(-x) &= \pi - \sec^{-1}x \end{aligned}`,
            caption: "Negative arguments: odd behaviour for branches centred on 0, the π − rule for branches in [0, π]",
          },
          {
            type: "formula",
            tex: t`\sin^{-1}x + \cos^{-1}x = \tfrac{\pi}{2} \ (|x| \le 1), \quad \tan^{-1}x + \cot^{-1}x = \tfrac{\pi}{2} \ (x \in \mathbb{R}), \quad \sec^{-1}x + \csc^{-1}x = \tfrac{\pi}{2} \ (|x| \ge 1)`,
            caption: t`Complementary pairs. Reciprocals: $\csc^{-1}x = \sin^{-1}\frac{1}{x}$ and $\sec^{-1}x = \cos^{-1}\frac{1}{x}$ for $|x| \ge 1$; $\cot^{-1}x = \tan^{-1}\frac{1}{x}$ only for $x > 0$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\cot^{-1}(-\sqrt{3})$ equals:`,
                options: [t`$-\frac{\pi}{6}$`, t`$\frac{5\pi}{6}$`, t`$\frac{\pi}{6}$`, t`$\frac{2\pi}{3}$`],
                answer: 1,
                explain: t`$\cot^{-1}(-x) = \pi - \cot^{-1}x$, so $\pi - \frac{\pi}{6} = \frac{5\pi}{6}$.`,
              },
              {
                kind: "mcq",
                q: t`$\tan^{-1}\left(\tan\frac{5\pi}{4}\right)$ equals:`,
                options: [t`$\frac{5\pi}{4}$`, t`$-\frac{\pi}{4}$`, t`$\frac{\pi}{4}$`, t`$\frac{3\pi}{4}$`],
                answer: 2,
                explain: t`$\tan\frac{5\pi}{4} = \tan\left(\frac{5\pi}{4} - \pi\right) = \tan\frac{\pi}{4}$, and $\frac{\pi}{4}$ is in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.`,
              },
            ],
          },
          {
            type: "formula",
            tex: t`\tan^{-1}x + \tan^{-1}y = \begin{cases} \tan^{-1}\dfrac{x + y}{1 - xy}, & xy < 1 \\[4pt] \pi + \tan^{-1}\dfrac{x + y}{1 - xy}, & x > 0,\ y > 0,\ xy > 1 \\[4pt] -\pi + \tan^{-1}\dfrac{x + y}{1 - xy}, & x < 0,\ y < 0,\ xy > 1 \end{cases}`,
            caption: t`Difference: $\tan^{-1}x - \tan^{-1}y = \tan^{-1}\frac{x - y}{1 + xy}$ when $xy > -1$`,
          },
          {
            type: "example",
            title: "Using the sum formula",
            problem: t`Show that $\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3} = \frac{\pi}{4}$.`,
            steps: [
              t`Here $xy = \frac{1}{6} < 1$, so the first case applies.`,
              t`$\dfrac{x + y}{1 - xy} = \dfrac{\frac{1}{2} + \frac{1}{3}}{1 - \frac{1}{6}} = \dfrac{\frac{5}{6}}{\frac{5}{6}} = 1$.`,
              t`So the sum is $\tan^{-1} 1 = \frac{\pi}{4}$.`,
            ],
            answer: t`$\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3} = \frac{\pi}{4}$.`,
          },
          {
            type: "formula",
            tex: t`2\tan^{-1}x = \tan^{-1}\frac{2x}{1 - x^2}\ (|x| < 1) = \sin^{-1}\frac{2x}{1 + x^2}\ (|x| \le 1) = \cos^{-1}\frac{1 - x^2}{1 + x^2}\ (x \ge 0)`,
            caption: t`Also $2\sin^{-1}x = \sin^{-1}\left(2x\sqrt{1 - x^2}\right)$ for $|x| \le \frac{1}{\sqrt{2}}$`,
          },
          {
            type: "example",
            title: "Simplifying by substitution",
            problem: t`Write $\tan^{-1}\left(\dfrac{\cos x - \sin x}{\cos x + \sin x}\right)$ in the simplest form, for $-\frac{\pi}{4} < x < \frac{3\pi}{4}$.`,
            steps: [
              t`For $\cos x \neq 0$, divide top and bottom by $\cos x$: $\dfrac{1 - \tan x}{1 + \tan x}$.`,
              t`Since $\tan\frac{\pi}{4} = 1$, this is $\dfrac{\tan\frac{\pi}{4} - \tan x}{1 + \tan\frac{\pi}{4}\tan x} = \tan\left(\frac{\pi}{4} - x\right)$.`,
              t`For $-\frac{\pi}{4} < x < \frac{3\pi}{4}$, the angle $\frac{\pi}{4} - x$ lies in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, so $\tan^{-1}\left(\tan\left(\frac{\pi}{4} - x\right)\right) = \frac{\pi}{4} - x$.`,
              t`At $x = \frac{\pi}{2}$ (where $\cos x = 0$) check directly: the expression is $\tan^{-1}(-1) = -\frac{\pi}{4} = \frac{\pi}{4} - \frac{\pi}{2}$. The formula still holds.`,
            ],
            answer: t`$\dfrac{\pi}{4} - x$`,
          },
          {
            type: "mistake",
            wrong: t`$\tan^{-1} 2 + \tan^{-1} 3 = \tan^{-1}\dfrac{2 + 3}{1 - 6} = \tan^{-1}(-1) = -\frac{\pi}{4}$.`,
            right: t`Here $x, y > 0$ and $xy = 6 > 1$, so $\tan^{-1} 2 + \tan^{-1} 3 = \pi + \tan^{-1}(-1) = \frac{3\pi}{4}$.`,
            why: t`Two positive angles cannot add up to a negative angle. The plain formula gives the answer only up to a multiple of $\pi$; the condition $xy < 1$ is what keeps the sum inside $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict the value of sin⁻¹(sin 5π/6).",
              options: [t`$\frac{5\pi}{6}$`, t`$\frac{\pi}{6}$`, t`$-\frac{\pi}{6}$`],
              answer: 1,
              trap: 0,
              explain: t`$\frac{5\pi}{6}$ is outside $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, so the functions do not simply cancel. $\sin\frac{5\pi}{6} = \sin\frac{\pi}{6} = \frac{1}{2}$, and $\sin^{-1}\frac{1}{2} = \frac{\pi}{6}$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC exam tips",
            md: t`In "prove that" questions, convert everything to one function first (for example, write $\sin^{-1}\frac{3}{5}$ as $\tan^{-1}\frac{3}{4}$ using a right triangle), then use the $\tan^{-1}$ sum formula, **stating** the condition $xy < 1$. In "solve" questions, always substitute your roots back; marks are reserved for rejecting a root that makes the original equation false.`,
          },
          {
            type: "keypoints",
            items: [
              t`$f(f^{-1}(x)) = x$ on the whole domain; $f^{-1}(f(x)) = x$ only on the principal branch.`,
              t`Negative arguments: $\sin^{-1}, \tan^{-1}, \csc^{-1}$ are odd; $\cos^{-1}, \cot^{-1}, \sec^{-1}$ follow $\pi - (\ldots)$.`,
              t`$\sin^{-1}x + \cos^{-1}x = \tan^{-1}x + \cot^{-1}x = \sec^{-1}x + \csc^{-1}x = \frac{\pi}{2}$.`,
              t`$\tan^{-1}x + \tan^{-1}y = \tan^{-1}\frac{x + y}{1 - xy}$ only when $xy < 1$; add or subtract $\pi$ otherwise.`,
              t`Substitutions such as $x = \tan\theta$ or $x = \cos\theta$ turn messy expressions into $\tan^{-1}(\tan\ldots)$; then check the branch.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\sin^{-1}(\sin x) = x$ holds when?`, back: t`Only for $x \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.` },
          { front: t`$\cos^{-1}(-x)$`, back: t`$\pi - \cos^{-1}x$` },
          { front: t`$\tan^{-1}(-x)$`, back: t`$-\tan^{-1}x$` },
          { front: t`$\sin^{-1}x + \cos^{-1}x$`, back: t`$\frac{\pi}{2}$ for $x \in [-1, 1]$.` },
          { front: t`$\tan^{-1}x + \tan^{-1}y$ when $xy < 1$`, back: t`$\tan^{-1}\dfrac{x + y}{1 - xy}$` },
          { front: t`$\tan^{-1}x + \tan^{-1}y$ when $x, y > 0$, $xy > 1$`, back: t`$\pi + \tan^{-1}\dfrac{x + y}{1 - xy}$` },
          { front: t`$2\tan^{-1}x$ as a $\sin^{-1}$ (for $|x| \le 1$)`, back: t`$\sin^{-1}\dfrac{2x}{1 + x^2}$` },
          { front: t`$\cot^{-1}x = \tan^{-1}\frac{1}{x}$ holds when?`, back: t`Only for $x > 0$. For $x < 0$, $\cot^{-1}x = \pi + \tan^{-1}\frac{1}{x}$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\sin^{-1}\left(\sin\frac{3\pi}{5}\right)$ equals:`,
            options: [t`$\frac{3\pi}{5}$`, t`$\frac{2\pi}{5}$`, t`$-\frac{2\pi}{5}$`, t`$\frac{\pi}{5}$`],
            answer: 1,
            explain: t`$\sin\frac{3\pi}{5} = \sin\left(\pi - \frac{3\pi}{5}\right) = \sin\frac{2\pi}{5}$, and $\frac{2\pi}{5}$ lies in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.`,
          },
          {
            kind: "mcq",
            q: t`$\cos^{-1}\left(\cos\frac{4\pi}{3}\right)$ equals:`,
            options: [t`$\frac{4\pi}{3}$`, t`$-\frac{2\pi}{3}$`, t`$\frac{2\pi}{3}$`, t`$\frac{\pi}{3}$`],
            answer: 2,
            explain: t`$\cos\frac{4\pi}{3} = \cos\left(2\pi - \frac{4\pi}{3}\right) = \cos\frac{2\pi}{3}$, and $\frac{2\pi}{3} \in [0, \pi]$.`,
          },
          {
            kind: "mcq",
            q: t`$\tan^{-1}\frac{1}{4} + \tan^{-1}\frac{3}{5}$ equals:`,
            options: [t`$\frac{\pi}{6}$`, t`$\frac{\pi}{4}$`, t`$\frac{\pi}{3}$`, t`$\frac{3\pi}{4}$`],
            answer: 1,
            explain: t`$xy = \frac{3}{20} < 1$; $\frac{\frac{1}{4} + \frac{3}{5}}{1 - \frac{3}{20}} = \frac{17/20}{17/20} = 1$, so the sum is $\frac{\pi}{4}$.`,
          },
          {
            kind: "mcq",
            q: t`$\sin\left(\cos^{-1}\frac{5}{13}\right)$ equals:`,
            options: [t`$\frac{12}{13}$`, t`$-\frac{12}{13}$`, t`$\frac{5}{12}$`, t`$\frac{13}{12}$`],
            answer: 0,
            explain: t`Let $\theta = \cos^{-1}\frac{5}{13} \in [0, \pi]$, so $\sin\theta \ge 0$ and $\sin\theta = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$.`,
          },
          {
            kind: "mcq",
            q: t`$2\tan^{-1}\frac{1}{2}$ equals:`,
            options: [t`$\tan^{-1} 1$`, t`$\tan^{-1}\frac{4}{3}$`, t`$\tan^{-1}\frac{3}{4}$`, t`$\tan^{-1} 2$`],
            answer: 1,
            explain: t`$|x| < 1$, so $2\tan^{-1}x = \tan^{-1}\frac{2x}{1 - x^2} = \tan^{-1}\frac{1}{3/4} = \tan^{-1}\frac{4}{3}$.`,
          },
          {
            kind: "truefalse",
            q: t`$\cos^{-1}(-x) = -\cos^{-1}x$ for all $x \in [-1, 1]$.`,
            answer: false,
            explain: t`$\cos^{-1}$ never takes negative values. The correct rule is $\cos^{-1}(-x) = \pi - \cos^{-1}x$.`,
          },
          {
            kind: "mcq",
            q: t`$\sin^{-1}\frac{3}{5} + \sin^{-1}\frac{4}{5}$ equals:`,
            options: [t`$\frac{\pi}{4}$`, t`$\frac{\pi}{3}$`, t`$\frac{\pi}{2}$`, t`$\pi$`],
            answer: 2,
            explain: t`In a 3-4-5 right triangle, $\sin^{-1}\frac{4}{5} = \cos^{-1}\frac{3}{5}$. So the sum is $\sin^{-1}\frac{3}{5} + \cos^{-1}\frac{3}{5} = \frac{\pi}{2}$.`,
            difficulty: 2,
            hint: "Draw the right triangle with sides 3, 4, 5.",
          },
          {
            kind: "multi",
            q: t`Select all identities that are true for **every** $x$ in the stated set.`,
            options: [
              t`$\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2}$, $x \in \mathbb{R}$`,
              t`$\cot^{-1}x = \tan^{-1}\frac{1}{x}$, $x \neq 0$`,
              t`$\sec^{-1}x = \cos^{-1}\frac{1}{x}$, $|x| \ge 1$`,
              t`$\tan^{-1}(\tan x) = x$, $x \in (0, \pi)$, $x \neq \frac{\pi}{2}$`,
            ],
            answers: [0, 2],
            explain: t`Option 2 fails for $x < 0$: $\cot^{-1}(-1) = \frac{3\pi}{4}$ but $\tan^{-1}(-1) = -\frac{\pi}{4}$. Option 4 fails for $x \in \left(\frac{\pi}{2}, \pi\right)$, where $\tan^{-1}(\tan x) = x - \pi$.`,
            difficulty: 2,
            hint: "Test a negative value, or an angle just above π/2.",
          },
        ],
      },
      {
        slug: "c12-inverse-trig-exam",
        title: "Exam edge: Inverse Trigonometric Functions",
        summary: "Sawtooth formulas, telescoping sums, equations with root rejection and range problems, from KCET to JEE Advanced.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**KCET** and **COMEDK** ask one-step evaluations: principal values, $\sin(\cos^{-1}x)$-type conversions and the complementary sums. **JEE Main** asks equations in $\tan^{-1}$, telescoping series and evaluations like $\cos^{-1}(\cos 5)$. **JEE Advanced** mixes the chapter with graphs, ranges and number of solutions, where knowing the exact branch decides the answer.`,
          },
          {
            type: "table",
            headers: ["Pattern", "Tool"],
            rows: [
              [t`$\sin^{-1}(\sin k)$, $\cos^{-1}(\cos k)$ with $k$ in radians`, "Sawtooth formulas below; locate k between multiples of π/2"],
              [t`$\sum \tan^{-1}\frac{1}{1 + r(r+1)}$ and similar`, t`Write each term as $\tan^{-1}(r + 1) - \tan^{-1} r$ and telescope`],
              [t`Equation in $\tan^{-1}$`, "Sum formula, solve, then reject roots that break the branch"],
              [t`Range of an expression in $\sin^{-1}x$ and $\cos^{-1}x$`, t`Put $\theta = \sin^{-1}x$, use $\cos^{-1}x = \frac{\pi}{2} - \theta$, $\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$`],
              [t`Compare $\sin^{-1}x$ and $\cos^{-1}x$`, t`They are equal at $x = \frac{1}{\sqrt{2}}$; $\sin^{-1}$ is larger to the right`],
            ],
          },
          {
            type: "formula",
            tex: t`\sin^{-1}(\sin x) = (-1)^n (x - n\pi) \ \text{ for } x \in \left[n\pi - \tfrac{\pi}{2},\, n\pi + \tfrac{\pi}{2}\right], \qquad \tan^{-1}(\tan x) = x - n\pi \ \text{ for } x \in \left(n\pi - \tfrac{\pi}{2},\, n\pi + \tfrac{\pi}{2}\right)`,
            caption: t`And $\cos^{-1}(\cos x) = x - 2n\pi$ on $[2n\pi, 2n\pi + \pi]$, $= 2n\pi - x$ on $[2n\pi - \pi, 2n\pi]$. The graphs are zig-zag (sawtooth) lines.`,
          },
          {
            type: "example",
            title: "KCET level",
            problem: t`Evaluate $\cos\left[\frac{\pi}{6} + \cos^{-1}\left(-\frac{1}{2}\right)\right]$.`,
            steps: [
              t`$\cos^{-1}\left(-\frac{1}{2}\right) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`,
              t`The bracket is $\frac{\pi}{6} + \frac{2\pi}{3} = \frac{5\pi}{6}$.`,
              t`$\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt{3}}{2}$.`,
            ],
            answer: t`$-\dfrac{\sqrt{3}}{2}$`,
          },
          {
            type: "example",
            title: "JEE Main level: an equation with a false root",
            problem: t`Solve $\tan^{-1}(x + 1) + \tan^{-1}(x - 1) = \tan^{-1}\frac{4}{7}$.`,
            steps: [
              t`Apply the sum formula: $\dfrac{(x + 1) + (x - 1)}{1 - (x^2 - 1)} = \dfrac{2x}{2 - x^2} = \dfrac{4}{7}$.`,
              t`Cross-multiply: $14x = 8 - 4x^2$, so $2x^2 + 7x - 4 = 0$, i.e. $(2x - 1)(x + 4) = 0$. Candidates: $x = \frac{1}{2}$, $x = -4$.`,
              t`Check $x = \frac{1}{2}$: the arguments are $\frac{3}{2}$ and $-\frac{1}{2}$, product $-\frac{3}{4} < 1$, so the formula was valid. Accept.`,
              t`Check $x = -4$: the arguments are $-3$ and $-5$, both negative with product $15 > 1$. Then the left side is $-\pi + \tan^{-1}\frac{4}{7}$, which is negative and not equal to $\tan^{-1}\frac{4}{7}$. Reject.`,
            ],
            answer: t`$x = \dfrac{1}{2}$ only.`,
          },
          {
            type: "example",
            title: "JEE Main level: a telescoping sum",
            problem: t`Find $S_n = \displaystyle\sum_{r=1}^{n} \tan^{-1}\frac{1}{r^2 + r + 1}$ and $\displaystyle\lim_{n \to \infty} S_n$.`,
            steps: [
              t`Write $\frac{1}{r^2 + r + 1} = \frac{(r + 1) - r}{1 + r(r + 1)}$. Since $r(r + 1) > -1$, the difference formula gives $\tan^{-1}\frac{1}{r^2 + r + 1} = \tan^{-1}(r + 1) - \tan^{-1} r$.`,
              t`Add from $r = 1$ to $n$: all middle terms cancel, leaving $S_n = \tan^{-1}(n + 1) - \tan^{-1} 1$.`,
              t`Combine: $S_n = \tan^{-1}\dfrac{(n + 1) - 1}{1 + (n + 1)} = \tan^{-1}\dfrac{n}{n + 2}$.`,
              t`As $n \to \infty$, $\frac{n}{n + 2} \to 1$, so $S_n \to \frac{\pi}{4}$.`,
            ],
            answer: t`$S_n = \tan^{-1}\dfrac{n}{n + 2}$, and the limit is $\dfrac{\pi}{4}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $\cos^{-1}(\cos 5)$, where 5 is in radians. Give the answer to 2 decimal places (use $\pi = 3.1416$).`,
                answer: 1.28,
                tolerance: 0.01,
                explain: t`$5 \in [\pi, 2\pi]$, so $\cos^{-1}(\cos 5) = 2\pi - 5 = 6.2832 - 5 = 1.2832 \approx 1.28$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Advanced level: the sawtooth",
            problem: t`Evaluate $\sin^{-1}(\sin 10)$, where 10 is in radians.`,
            steps: [
              t`Locate 10: $\frac{5\pi}{2} \approx 7.85$ and $\frac{7\pi}{2} \approx 11.00$, so $10 \in \left[3\pi - \frac{\pi}{2}, 3\pi + \frac{\pi}{2}\right]$, i.e. $n = 3$.`,
              t`Use $\sin^{-1}(\sin x) = (-1)^n(x - n\pi)$: $(-1)^3(10 - 3\pi) = 3\pi - 10$.`,
              t`Check: $3\pi - 10 \approx -0.575$, which lies in $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$, and $\sin(3\pi - 10) = \sin(\pi - 10 + 2\pi) = \sin(\pi - 10) = \sin 10$.`,
            ],
            answer: t`$\sin^{-1}(\sin 10) = 3\pi - 10$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: a range problem",
            problem: t`Find the range of $f(x) = (\sin^{-1}x)^2 + (\cos^{-1}x)^2$.`,
            steps: [
              t`Let $\theta = \sin^{-1}x$, so $\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ and $\cos^{-1}x = \frac{\pi}{2} - \theta$.`,
              t`$f = \theta^2 + \left(\frac{\pi}{2} - \theta\right)^2 = 2\theta^2 - \pi\theta + \frac{\pi^2}{4} = 2\left(\theta - \frac{\pi}{4}\right)^2 + \frac{\pi^2}{8}$.`,
              t`Minimum at $\theta = \frac{\pi}{4}$ (inside the interval): $\frac{\pi^2}{8}$.`,
              t`Maximum at the endpoint farther from $\frac{\pi}{4}$, which is $\theta = -\frac{\pi}{2}$: $2\left(\frac{3\pi}{4}\right)^2 + \frac{\pi^2}{8} = \frac{9\pi^2}{8} + \frac{\pi^2}{8} = \frac{5\pi^2}{4}$.`,
            ],
            answer: t`Range $= \left[\dfrac{\pi^2}{8}, \dfrac{5\pi^2}{4}\right]$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Results worth remembering",
            md: t`$\tan^{-1} 1 + \tan^{-1} 2 + \tan^{-1} 3 = \pi$, and $\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3} = \frac{\pi}{4}$.

$\sin(\cos^{-1}x) = \cos(\sin^{-1}x) = \sqrt{1 - x^2}$ for $|x| \le 1$ (safe because the branches make these non-negative).

$\tan(\sin^{-1}x) = \frac{x}{\sqrt{1 - x^2}}$ for $|x| < 1$. For any conversion, draw a right triangle, but use it only when the angle is in $\left[0, \frac{\pi}{2}\right]$; for negative inputs use the odd or $\pi - (\ldots)$ rule first.`,
          },
          {
            type: "mistake",
            wrong: t`$\sin^{-1}(\sin 10) = 10$, or $10 - 3\pi$ (just subtract multiples of $\pi$ until the answer is small).`,
            right: t`Subtracting $\pi$ flips the sign of sine: $\sin(10 - 3\pi) = -\sin 10$. The correct answer is $3\pi - 10$, from $(-1)^n(x - n\pi)$ with $n = 3$.`,
            why: t`For $\tan$, period $\pi$ makes "subtract $n\pi$" safe. For $\sin$ the period is $2\pi$, and a shift by an odd multiple of $\pi$ changes the sign.`,
          },
          {
            type: "mistake",
            wrong: t`Both roots of the quadratic from a $\tan^{-1}$ equation are solutions.`,
            right: t`The sum formula $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\frac{x + y}{1 - xy}$ is valid only for $xy < 1$. Squaring or cross-multiplying can add roots for which the original sum differs by $\pm\pi$. Check every root in the original equation.`,
            why: t`Taking $\tan$ of both sides keeps only the tangent of the angle, which repeats every $\pi$. Different angle sums with the same tangent all survive the algebra.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the identity true for every x stated?",
              groups: ["True for every stated x", "False for some stated x"],
              items: [
                { text: t`$\sin(\sin^{-1}x) = x$, $x \in [-1, 1]$`, group: 0, hint: "Angle first, then its sine: always back to x." },
                { text: t`$\sin^{-1}(\sin x) = x$, $x \in \mathbb{R}$`, group: 1, hint: "Try x = π." },
                { text: t`$\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2}$, $x \in \mathbb{R}$`, group: 0, hint: "Check x = −1: −π/4 + 3π/4." },
                { text: t`$\tan^{-1}\frac{1}{x} = \cot^{-1}x$, $x \neq 0$`, group: 1, hint: "Try x = −1." },
                { text: t`$\cos^{-1}(-x) = \pi - \cos^{-1}x$, $x \in [-1, 1]$`, group: 0, hint: "This is the rule for the branch [0, π]." },
                { text: t`$2\tan^{-1}x = \sin^{-1}\frac{2x}{1 + x^2}$, $x \in \mathbb{R}$`, group: 1, hint: "For x = 2 the left side exceeds π/2." },
              ],
              explain: "f(f⁻¹(x)) = x is always safe. f⁻¹(f(x)) = x and conversions between inverse functions hold only when the angle stays in the principal branch, so test a negative value or a large angle before trusting one.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Sawtooth: $\sin^{-1}(\sin x) = (-1)^n(x - n\pi)$ near $n\pi$; $\tan^{-1}(\tan x) = x - n\pi$; $\cos^{-1}(\cos x) = |x - 2n\pi|$ near $2n\pi$.`,
              t`Telescope by writing a term as $\tan^{-1}A - \tan^{-1}B$ with $A - B$ in the numerator and $1 + AB$ in the denominator.`,
              "In equations, check each root against the branch conditions.",
              t`For ranges, set $\theta = \sin^{-1}x$ and use $\cos^{-1}x = \frac{\pi}{2} - \theta$ on $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.`,
              t`$\sin^{-1}x > \cos^{-1}x$ exactly when $\frac{1}{\sqrt{2}} < x \le 1$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\tan^{-1}1 + \tan^{-1}2 + \tan^{-1}3$`, back: t`$\pi$` },
          { front: t`$\sin^{-1}(\sin x)$ for $x \in \left[\frac{\pi}{2}, \frac{3\pi}{2}\right]$`, back: t`$\pi - x$` },
          { front: t`$\cos^{-1}(\cos x)$ for $x \in [\pi, 2\pi]$`, back: t`$2\pi - x$` },
          { front: t`$\tan^{-1}(\tan x)$ for $x \in \left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$`, back: t`$x - \pi$` },
          { front: t`Telescoping form of $\tan^{-1}\frac{1}{1 + r(r+1)}$`, back: t`$\tan^{-1}(r + 1) - \tan^{-1}r$` },
          { front: t`Range of $\sin^{-1}x + \cos^{-1}x + \tan^{-1}x$`, back: t`$\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$ (it equals $\frac{\pi}{2} + \tan^{-1}x$ with $x \in [-1, 1]$).` },
          { front: t`Range of $(\sin^{-1}x)^2 + (\cos^{-1}x)^2$`, back: t`$\left[\frac{\pi^2}{8}, \frac{5\pi^2}{4}\right]$` },
          { front: t`When is $\sin^{-1}x > \cos^{-1}x$?`, back: t`For $x \in \left(\frac{1}{\sqrt{2}}, 1\right]$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{5} + \tan^{-1}\frac{1}{8}$ equals:`,
            options: [t`$\frac{\pi}{6}$`, t`$\frac{\pi}{4}$`, t`$\frac{\pi}{3}$`, t`$\frac{\pi}{2}$`],
            answer: 1,
            explain: t`$\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{5} = \tan^{-1}\frac{7/10}{9/10} = \tan^{-1}\frac{7}{9}$. Then $\tan^{-1}\frac{7}{9} + \tan^{-1}\frac{1}{8} = \tan^{-1}\frac{65/72}{65/72} = \frac{\pi}{4}$. Each product is less than 1.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$\sin^{-1}(\sin 4)$, with 4 in radians, equals:`,
            options: [t`$4$`, t`$4 - \pi$`, t`$\pi - 4$`, t`$2\pi - 4$`],
            answer: 2,
            explain: t`$4 \in \left[\frac{\pi}{2}, \frac{3\pi}{2}\right]$ ($n = 1$), so the value is $-(4 - \pi) = \pi - 4 \approx -0.86$, which is in the principal branch.`,
            difficulty: 2,
            hint: "Between which multiples of π/2 does 4 lie?",
          },
          {
            kind: "mcq",
            q: t`If $\sin^{-1}x + \sin^{-1}y = \frac{2\pi}{3}$, then $\cos^{-1}x + \cos^{-1}y$ equals:`,
            options: [t`$\frac{\pi}{3}$`, t`$\frac{2\pi}{3}$`, t`$\frac{\pi}{6}$`, t`$\pi$`],
            answer: 0,
            explain: t`$\cos^{-1}x + \cos^{-1}y = \left(\frac{\pi}{2} - \sin^{-1}x\right) + \left(\frac{\pi}{2} - \sin^{-1}y\right) = \pi - \frac{2\pi}{3} = \frac{\pi}{3}$.`,
          },
          {
            kind: "multi",
            q: t`For which of these values of $x$ is $\cos^{-1}x > \sin^{-1}x$?`,
            options: [t`$x = -1$`, t`$x = 0$`, t`$x = 0.7$`, t`$x = 0.8$`],
            answers: [0, 1, 2],
            explain: t`$\cos^{-1}x > \sin^{-1}x \iff \sin^{-1}x < \frac{\pi}{4} \iff x < \frac{1}{\sqrt{2}} \approx 0.7071$. So $-1$, $0$ and $0.7$ work; $0.8$ does not.`,
            difficulty: 2,
            hint: t`Use $\cos^{-1}x = \frac{\pi}{2} - \sin^{-1}x$.`,
          },
          {
            kind: "mcq",
            q: t`$\displaystyle\sum_{r=1}^{\infty} \tan^{-1}\frac{2}{r^2}$ equals:`,
            options: [t`$\frac{\pi}{4}$`, t`$\frac{\pi}{2}$`, t`$\frac{3\pi}{4}$`, t`$\pi$`],
            answer: 2,
            explain: t`$\frac{2}{r^2} = \frac{(r + 1) - (r - 1)}{1 + (r + 1)(r - 1)}$, so each term is $\tan^{-1}(r + 1) - \tan^{-1}(r - 1)$. The partial sum is $\tan^{-1}(n + 1) + \tan^{-1}n - \tan^{-1}1 - \tan^{-1}0 \to \frac{\pi}{2} + \frac{\pi}{2} - \frac{\pi}{4} = \frac{3\pi}{4}$.`,
            difficulty: 3,
            hint: "Look for a difference of two terms that are two steps apart.",
          },
          {
            kind: "mcq",
            q: t`The range of $f(x) = \sin^{-1}x + \cos^{-1}x + \tan^{-1}x$ is:`,
            options: [
              t`$\left[0, \pi\right]$`,
              t`$\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$`,
              t`$\left(0, \pi\right)$`,
              t`$\left[-\frac{\pi}{4}, \frac{\pi}{4}\right]$`,
            ],
            answer: 1,
            explain: t`The domain is $[-1, 1]$ (because of $\sin^{-1}$ and $\cos^{-1}$). $f(x) = \frac{\pi}{2} + \tan^{-1}x$, and $\tan^{-1}x$ runs over $\left[-\frac{\pi}{4}, \frac{\pi}{4}\right]$.`,
            difficulty: 2,
            hint: "First find the domain.",
          },
          {
            kind: "numeric",
            q: t`Find $\tan\left(\cos^{-1}\frac{4}{5} + \tan^{-1}\frac{1}{7}\right)$.`,
            answer: 1,
            explain: t`$\cos^{-1}\frac{4}{5} = \tan^{-1}\frac{3}{4}$ (3-4-5 triangle, first quadrant). $\tan\left(\tan^{-1}\frac{3}{4} + \tan^{-1}\frac{1}{7}\right) = \frac{\frac{3}{4} + \frac{1}{7}}{1 - \frac{3}{28}} = \frac{25/28}{25/28} = 1$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`How many real numbers $x$ satisfy $\tan^{-1}(2x) + \tan^{-1}(3x) = \frac{\pi}{4}$?`,
            answer: 1,
            explain: t`The sum formula gives $\frac{5x}{1 - 6x^2} = 1$, so $6x^2 + 5x - 1 = 0$, $(6x - 1)(x + 1) = 0$. $x = \frac{1}{6}$ works ($6x^2 = \frac{1}{6} < 1$). $x = -1$ gives $\tan^{-1}(-2) + \tan^{-1}(-3) = -\frac{3\pi}{4} \neq \frac{\pi}{4}$. One solution.`,
            difficulty: 3,
            hint: "Solve the quadratic, then test each root in the original equation.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Relations and Functions": "c12-relations-functions",
  "12:Inverse Trigonometric Functions": "c12-inverse-trig",
};
