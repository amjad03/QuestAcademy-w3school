import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes (and Java "\t") intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Boolean Algebra                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-boolean-algebra",
    title: "Boolean Algebra",
    icon: "🔣",
    description: "Propositional logic, the laws of Boolean algebra, duality and De Morgan's theorems, SOP and POS canonical forms, and reduction with Karnaugh maps of up to four variables.",
    lessons: [
      {
        slug: "c12-cs-bool-laws",
        title: "Propositional Logic and the Laws of Boolean Algebra",
        summary: "Propositions and connectives, converse and contrapositive, tautologies, the Boolean laws, the principle of duality and De Morgan's theorems, with algebraic proofs.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "💡",
            caption: "A corridor light in a hostel has two switches, one at each end. Whether the bulb glows depends only on whether each switch is up (1) or down (0). Boolean algebra is the arithmetic of such two-valued quantities.",
          },
          {
            type: "text",
            md: "A **proposition** is a statement that is either true or false, but not both. \"Chennai is in Tamil Nadu\" is a proposition (true). \"Close the door\" is not a proposition, because it cannot be true or false.\n\nPropositions are joined by **connectives**. A formula built correctly from propositions and connectives is called a **well-formed formula (wff)**. In Boolean algebra we write *true* as **1** and *false* as **0**.",
          },
          {
            type: "table",
            headers: ["Connective", "Symbol", "Boolean form", "False only when / true only when"],
            rows: [
              ["Negation (NOT)", t`$\sim p$`, "p'", "flips the value"],
              ["Conjunction (AND)", t`$p \wedge q$`, "p . q", "true only when both are true"],
              ["Disjunction (OR)", t`$p \vee q$`, "p + q", "false only when both are false"],
              ["Conditional (implication)", t`$p \Rightarrow q$`, "p' + q", "false only when p is true and q is false"],
              ["Biconditional", t`$p \Leftrightarrow q$`, "p'q' + pq", "true only when p and q have the same value"],
            ],
          },
          {
            type: "text",
            md: t`For a conditional $p \Rightarrow q$: the **converse** is $q \Rightarrow p$, the **inverse** is $\sim p \Rightarrow \sim q$ and the **contrapositive** is $\sim q \Rightarrow \sim p$. Only the contrapositive always has the same truth value as the original.

A wff that is true for every combination of values is a **tautology** (valid), for example $p \vee \sim p$. One that is false for every combination is a **contradiction** (unsatisfiable), for example $p \wedge \sim p$. One that is true for some combinations and false for others is a **contingency** (satisfiable).`,
          },
          {
            type: "heading",
            text: "The laws of Boolean algebra",
          },
          {
            type: "table",
            headers: ["Law", "OR form", "AND form (dual)"],
            rows: [
              ["Identity", "A + 0 = A", "A . 1 = A"],
              ["Null (dominance)", "A + 1 = 1", "A . 0 = 0"],
              ["Idempotent", "A + A = A", "A . A = A"],
              ["Complement", "A + A' = 1", "A . A' = 0"],
              ["Involution", "(A')' = A", "(A')' = A"],
              ["Commutative", "A + B = B + A", "A . B = B . A"],
              ["Associative", "A + (B + C) = (A + B) + C", "A . (B . C) = (A . B) . C"],
              ["Distributive", "A + B . C = (A + B) . (A + C)", "A . (B + C) = A . B + A . C"],
              ["Absorption", "A + A . B = A", "A . (A + B) = A"],
              ["Absorption (second form)", "A + A' . B = A + B", "A . (A' + B) = A . B"],
              ["De Morgan's theorems", "(A + B)' = A' . B'", "(A . B)' = A' + B'"],
            ],
          },
          {
            type: "text",
            md: "The **principle of duality** says: if a Boolean identity is true, then its **dual** is also true. To get the dual, swap + with . and swap 0 with 1. The variables and their complements stay exactly as they are. That is why every law above comes in a pair.\n\n**De Morgan's theorems** say \"break the bar, change the sign\": the complement of a sum is the product of the complements, and the complement of a product is the sum of the complements. They extend to any number of variables: (A + B + C)' = A'B'C'.",
          },
          {
            type: "example",
            title: "Proving a law algebraically",
            problem: "Prove that A + A'B = A + B, naming the law used in each step. Then write its dual.",
            steps: [
              "A + A'B = (A + A') . (A + B), by the distributive law A + BC = (A + B)(A + C).",
              "= 1 . (A + B), by the complement law A + A' = 1.",
              "= A + B, by the identity law 1 . X = X.",
              "Dual: swap + and . on both sides: A . (A' + B) = A . B.",
            ],
            answer: "A + A'B = A + B is proved; its dual is A(A' + B) = AB.",
          },
          {
            type: "mistake",
            wrong: "(A . B)' = A' . B', just as the bar is \"shared out\" over both letters.",
            right: "(A . B)' = A' + B'. When the bar is broken, the operator also changes: AND becomes OR and OR becomes AND.",
            why: "It feels like distributing a minus sign in ordinary algebra. But check A = 1, B = 0: (1 . 0)' = 1, while 1' . 0' = 0 . 1 = 0. The two sides differ, so the \"shared bar\" version is false.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Which statement always has the same truth value as $p \Rightarrow q$?`,
                options: [t`$q \Rightarrow p$ (converse)`, t`$\sim p \Rightarrow \sim q$ (inverse)`, t`$\sim q \Rightarrow \sim p$ (contrapositive)`, t`$p \wedge q$`],
                answer: 2,
                explain: t`The contrapositive is logically equivalent to the original: both are false only when p = 1 and q = 0. The converse and inverse are equivalent to each other, not to $p \Rightarrow q$.`,
              },
              {
                kind: "fill",
                q: "The dual of X + 0 = X is X . ___ = X.",
                answer: ["1"],
                explain: "In a dual, + becomes . and 0 becomes 1. The variable X is not complemented.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each identity to the law it shows.",
              pairs: [
                ["A + AB = A", "Absorption"],
                ["(A + B)' = A'B'", "De Morgan's theorem"],
                ["A . A = A", "Idempotent law"],
                ["A + A' = 1", "Complement law"],
                ["(A')' = A", "Involution law"],
              ],
              explain: "Absorption removes a term that already contains another whole term; De Morgan breaks a bar; idempotence removes repeats; complements give 0 or 1; a double complement cancels.",
            },
          },
          {
            type: "example",
            title: "Simplifying with the laws",
            problem: "Simplify F = (A + B')(A + C), stating the laws used.",
            steps: [
              "Multiply out: F = A.A + A.C + B'.A + B'.C (distributive law).",
              "A.A = A (idempotent), so F = A + AC + AB' + B'C.",
              "A + AC = A and A + AB' = A (absorption), so F = A + B'C.",
              "Shortcut check: this is just the distributive law A + XY = (A + X)(A + Y) read backwards, with X = B' and Y = C.",
            ],
            answer: "F = A + B'C",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "In proofs, write one law per line and **name it** (\"by absorption\", \"by De Morgan's law\"). Marks are given for the steps, not only the final result. When asked to verify a law \"using a truth table\", show every input combination (4 rows for two variables, 8 for three) and a column for each side.",
          },
          {
            type: "keypoints",
            items: [
              "A proposition is true or false; 1 means true and 0 means false.",
              t`$p \Rightarrow q$ is false only for p = 1, q = 0, and equals p' + q; its contrapositive $\sim q \Rightarrow \sim p$ is equivalent to it.`,
              "Tautology: always 1. Contradiction: always 0. Contingency: sometimes 1, sometimes 0.",
              "Dual: swap + with . and 0 with 1; never complement the variables.",
              "De Morgan: (A + B)' = A'B' and (AB)' = A' + B'. Break the bar, change the sign.",
            ],
          },
        ],
        flashcards: [
          { front: "Proposition", back: "A statement that is either true or false, but not both." },
          { front: "Contrapositive of p ⇒ q", back: "~q ⇒ ~p. It is logically equivalent to p ⇒ q." },
          { front: "When is p ⇒ q false?", back: "Only when p is true and q is false. In Boolean form p ⇒ q = p' + q." },
          { front: "Tautology", back: "A formula that is true for every combination of its variables, e.g. p ∨ ~p." },
          { front: "Principle of duality", back: "Swap + with . and 0 with 1 in a true identity; the result is also true. Variables are not complemented." },
          { front: "De Morgan's theorems", back: "(A + B)' = A'B' and (AB)' = A' + B'." },
          { front: "Second absorption law", back: "A + A'B = A + B; its dual is A(A' + B) = AB." },
          { front: "Distributive law that has no match in ordinary algebra", back: "A + BC = (A + B)(A + C)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a tautology?",
            options: ["p ∧ ~p", "p ∨ ~p", "p ⇒ ~p", "p ∧ q"],
            answer: 1,
            explain: "p ∨ ~p is 1 whether p is 0 or 1. p ∧ ~p is always 0 (a contradiction); the other two depend on the values.",
          },
          {
            kind: "mcq",
            q: "The complement of A + B'C, by De Morgan's theorems, is:",
            options: ["A' + BC'", "A'(B + C')", "A'B'C'", "A'B + C'"],
            answer: 1,
            explain: "(A + B'C)' = A' . (B'C)' = A'(B + C'). The outer + becomes ., and the inner product becomes a sum of complements.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The dual of A + A'B = A + B is A' . (A + B') = A' . B'.",
            answer: false,
            explain: "Taking a dual never complements variables. The correct dual is A . (A' + B) = A . B.",
          },
          {
            kind: "fill",
            q: "By the absorption law, A . (A + B) = ___.",
            answer: ["A"],
            explain: "A(A + B) = AA + AB = A + AB = A.",
          },
          {
            kind: "mcq",
            q: "p: \"It rains\", q: \"The match is cancelled\". The converse of p ⇒ q is:",
            options: ["If the match is cancelled, it rains.", "If it does not rain, the match is not cancelled.", "If the match is not cancelled, it does not rain.", "It rains and the match is cancelled."],
            answer: 0,
            explain: "The converse swaps the two parts: q ⇒ p. Option 2 is the inverse and option 3 is the contrapositive.",
          },
          {
            kind: "multi",
            q: "Which of these are true identities in Boolean algebra?",
            options: ["A + 1 = 1", "A + BC = (A + B)(A + C)", "A . A' = 1", "(A')' = A"],
            answers: [0, 1, 3],
            explain: "A . A' = 0, not 1. The other three are the null, distributive and involution laws.",
          },
          {
            kind: "mcq",
            q: "For how many of the 4 rows of its truth table is p ⇒ q true?",
            options: ["1", "2", "3", "4"],
            answer: 2,
            explain: "It is false only for p = 1, q = 0, so it is true in the other 3 rows.",
          },
          {
            kind: "order",
            q: "Put the steps of proving A(A' + B) = AB in order.",
            items: ["A(A' + B) = AA' + AB (distributive)", "= 0 + AB (complement)", "= AB (identity)"],
            explain: "Multiply out, use A . A' = 0, then drop the 0.",
          },
        ],
      },
      {
        slug: "c12-cs-bool-canonical",
        title: "SOP, POS and Canonical Forms",
        summary: "Minterms and maxterms, canonical sum-of-products and product-of-sums, writing a function from its truth table, and converting between the two forms.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🗳️",
            caption: "A committee of three passes a motion when at least two members vote yes. Writing down exactly which vote patterns pass is the first step to building the voting circuit.",
          },
          {
            type: "text",
            md: "A **literal** is a variable or its complement (A or A'). A **product term** is literals joined by AND (AB'C). A **sum term** is literals joined by OR (A + B' + C).\n\nAn expression written as a sum of product terms is in **Sum of Products (SOP)** form, e.g. AB + A'C. One written as a product of sum terms is in **Product of Sums (POS)** form, e.g. (A + B)(A' + C).",
          },
          {
            type: "text",
            md: "When **every** term contains **every** variable (plain or complemented), the form is **canonical**.\n\nA **minterm** is a product term containing all the variables. It is 1 for exactly one input row. We write 0 as the complemented variable and 1 as the plain one: row 101 gives AB'C, called m5.\n\nA **maxterm** is a sum term containing all the variables. It is 0 for exactly one row. Here 0 is written as the plain variable and 1 as the complement: row 101 gives A' + B + C', called M5.",
          },
          {
            type: "table",
            headers: ["Row (A B C)", "Decimal", "Minterm", "Maxterm"],
            rows: [
              ["0 0 0", "0", "A'B'C' (m0)", "A + B + C (M0)"],
              ["0 0 1", "1", "A'B'C (m1)", "A + B + C' (M1)"],
              ["0 1 0", "2", "A'BC' (m2)", "A + B' + C (M2)"],
              ["0 1 1", "3", "A'BC (m3)", "A + B' + C' (M3)"],
              ["1 0 0", "4", "AB'C' (m4)", "A' + B + C (M4)"],
              ["1 0 1", "5", "AB'C (m5)", "A' + B + C' (M5)"],
              ["1 1 0", "6", "ABC' (m6)", "A' + B' + C (M6)"],
              ["1 1 1", "7", "ABC (m7)", "A' + B' + C' (M7)"],
            ],
          },
          {
            type: "text",
            md: t`**From a truth table:** the canonical SOP is the sum of the minterms of the rows where F = 1. The canonical POS is the product of the maxterms of the rows where F = 0. Short forms: $F = \Sigma(1, 4, 5)$ and $F = \Pi(0, 2, 3, 6, 7)$.

The two lists always split the row numbers between them: a row is in the $\Sigma$ list or the $\Pi$ list, never both. Also, the minterm $m_i$ and the maxterm $M_i$ are complements of each other: $m_i' = M_i$.`,
          },
          {
            type: "example",
            title: "Majority-vote function",
            problem: "F(A, B, C) is 1 when at least two of A, B, C are 1. Write F in canonical SOP and canonical POS.",
            steps: [
              "Rows with two or more 1s: 011 (3), 101 (5), 110 (6), 111 (7). So F = 1 there.",
              t`Canonical SOP: $F = A'BC + AB'C + ABC' + ABC = \Sigma(3, 5, 6, 7)$.`,
              t`The remaining rows 0, 1, 2, 4 have F = 0, so canonical POS: $F = (A + B + C)(A + B + C')(A + B' + C)(A' + B + C) = \Pi(0, 1, 2, 4)$.`,
              "Check: 4 minterms + 4 maxterms = 8 rows, and no row appears twice.",
            ],
            answer: t`$F = \Sigma(3, 5, 6, 7) = \Pi(0, 1, 2, 4)$`,
          },
          {
            type: "mistake",
            wrong: "The maxterm of row 101 is A + B' + C: write 1 as the plain variable and 0 as the complement, as for a minterm, and then put plus signs between them.",
            right: "For a maxterm, a 0 in the row is written as the plain variable and a 1 as the complement: row 101 gives A' + B + C'. For a minterm it is the opposite: row 101 gives AB'C.",
            why: "Learners copy the minterm rule (1 = plain) into maxterms. But a maxterm must be 0 in its own row, and a sum is 0 only when every literal is 0, so each literal must be 0 there: A' (since A = 1), B (since B = 0), C' (since C = 1).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In F(A, B, C, D), the minterm m11 is:",
                options: ["AB'CD", "A'BC'D'", "A' + B + C' + D'", "ABC'D"],
                answer: 0,
                explain: "11 = 1011, so A = 1, B = 0, C = 1, D = 1, giving AB'CD. Option 3 is the maxterm M11.",
              },
              {
                kind: "truefalse",
                q: t`If $F(A, B, C) = \Sigma(0, 3, 5)$, then $F = \Pi(1, 2, 4, 6, 7)$.`,
                answer: true,
                explain: "The maxterm list is every row number not in the minterm list: 1, 2, 4, 6, 7.",
              },
            ],
          },
          {
            type: "heading",
            text: "Expanding a reduced expression to canonical form",
          },
          {
            type: "example",
            title: "Filling in missing variables",
            problem: "Write F(A, B, C) = A + B'C in canonical SOP, and then in canonical POS.",
            steps: [
              "Term A lacks B and C: A = A(B + B')(C + C') = ABC + ABC' + AB'C + AB'C' → m7, m6, m5, m4.",
              "Term B'C lacks A: B'C = (A + A')B'C = AB'C + A'B'C → m5, m1.",
              "Remove the repeat (m5 appears twice; X + X = X): F = Σ(1, 4, 5, 6, 7).",
              "Canonical POS uses the other rows: F = Π(0, 2, 3) = (A + B + C)(A + B' + C)(A + B' + C').",
            ],
            answer: "F = Σ(1, 4, 5, 6, 7) = Π(0, 2, 3)",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each expression by its form.",
              groups: ["SOP", "POS", "Neither"],
              items: [
                { text: "AB + B'C + A'C'", group: 0, hint: "Products added together." },
                { text: "(A + B)(B' + C)", group: 1, hint: "Sums multiplied together." },
                { text: "A'BC + AB'C'", group: 0, hint: "Each term is a product; the terms are ORed." },
                { text: "(A + B' + C)(A' + C)", group: 1, hint: "Each bracket is a sum; the brackets are ANDed." },
                { text: "A(B + CD)", group: 2, hint: "A product with a sum nested inside another sum: multiply out first." },
                { text: "(AB + C)'", group: 2, hint: "A bar over a whole expression: apply De Morgan first." },
              ],
              explain: "SOP is OR of AND-terms; POS is AND of OR-terms. Nested brackets or a bar over a group must be removed before the form can be named.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Questions often give F as a truth-table description (\"the output is 1 when...\") and ask for the canonical POS. Write the full truth table first, mark the 0 rows, then write each maxterm. Always state the variable order (A as the most significant bit) before you number the rows.",
          },
          {
            type: "keypoints",
            items: [
              "Minterm: product of all variables, 1 in one row; 1 → plain, 0 → complemented.",
              "Maxterm: sum of all variables, 0 in one row; 0 → plain, 1 → complemented.",
              "Canonical SOP = Σ of rows where F = 1; canonical POS = Π of rows where F = 0.",
              "A missing variable X is filled in by multiplying by (X + X') in SOP, or adding XX' in POS.",
              "The minterm and maxterm lists of one function never share a row and together cover all rows.",
            ],
          },
        ],
        flashcards: [
          { front: "Minterm", back: "A product term containing every variable once (plain or complemented). It is 1 for exactly one input row." },
          { front: "Maxterm", back: "A sum term containing every variable once. It is 0 for exactly one input row." },
          { front: "Minterm m6 for F(A, B, C)", back: "6 = 110, so ABC'." },
          { front: "Maxterm M6 for F(A, B, C)", back: "6 = 110, so A' + B' + C." },
          { front: "Canonical SOP from a truth table", back: "OR together the minterms of the rows where F = 1." },
          { front: "Canonical POS from a truth table", back: "AND together the maxterms of the rows where F = 0." },
          { front: "How to add a missing variable B to a product term in SOP", back: "Multiply by (B + B'), which equals 1, and expand." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The maxterm M3 of F(A, B, C) is:",
            options: ["A'BC", "A + B' + C'", "A' + B + C", "A + B + C'"],
            answer: 1,
            explain: "3 = 011: A = 0 → A, B = 1 → B', C = 1 → C'. So M3 = A + B' + C'. Option 1 is the minterm m3.",
          },
          {
            kind: "numeric",
            q: "F(A, B, C, D) = Σ(1, 4, 9, 12, 15). How many maxterms are in its canonical POS?",
            answer: 11,
            explain: "Four variables give 16 rows. 5 are minterms, so 16 − 5 = 11 are maxterms.",
          },
          {
            kind: "mcq",
            q: "F(A, B, C) = AB + C' in canonical SOP is:",
            options: ["Σ(0, 2, 4, 6, 7)", "Σ(6, 7)", "Σ(1, 3, 5, 6, 7)", "Σ(0, 2, 4, 6)"],
            answer: 0,
            explain: "AB gives rows 110 and 111 (6, 7). C' gives every row with C = 0: 0, 2, 4, 6. Together: 0, 2, 4, 6, 7.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The complement of a minterm is the maxterm with the same index (for example, (m5)' = M5).",
            answer: true,
            explain: "(AB'C)' = A' + B + C' by De Morgan's theorem, which is exactly M5.",
          },
          {
            kind: "fill",
            q: "An expression such as (A + B)(A' + C) is in product of ___ form.",
            answer: ["sums", "sum"],
            explain: "Sum terms (OR) are multiplied (AND) together, so it is a POS expression.",
          },
          {
            kind: "mcq",
            q: "F(X, Y, Z) is 1 only when exactly one input is 1. Which list is its canonical SOP?",
            options: ["Σ(1, 2, 4)", "Σ(3, 5, 6)", "Σ(0, 7)", "Σ(1, 2, 3, 4)"],
            answer: 0,
            explain: "Exactly one 1: 001 (1), 010 (2), 100 (4).",
          },
          {
            kind: "multi",
            q: "F(A, B, C) = Π(0, 1, 6). Which statements are true?",
            options: ["F = 0 for the input 001", "F = Σ(2, 3, 4, 5, 7)", "F = 1 for the input 110", "F has 5 minterms"],
            answers: [0, 1, 3],
            explain: "Rows 0, 1, 6 give F = 0, so F = 0 at 001 and at 110. The minterms are the other five rows: 2, 3, 4, 5, 7.",
          },
        ],
      },
      {
        slug: "c12-cs-bool-kmaps",
        title: "Karnaugh Maps up to Four Variables",
        summary: "Drawing 2-, 3- and 4-variable K-maps in Gray-code order, grouping 1s for SOP and 0s for POS in pairs, quads and octets, and reading off the reduced expression.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "illustration",
            emoji: "🗺️",
            caption: "A K-map is a truth table folded into a grid, so that rows differing in one bit sit side by side. Neighbours can then be merged at a glance instead of by long algebra.",
          },
          {
            type: "text",
            md: "A **Karnaugh map (K-map)** has one cell for each row of the truth table: 4 cells for two variables, 8 for three, 16 for four.\n\nThe row and column labels follow **Gray code** order: 00, 01, 11, 10. Two neighbouring cells differ in only one variable. The map also **wraps around**: the leftmost and rightmost columns are neighbours, and so are the top and bottom rows. The four corners of a 4-variable map are neighbours of one another.",
          },
          {
            type: "table",
            headers: ["AB \\ CD", "00", "01", "11", "10"],
            rows: [
              ["00", "m0", "m1", "m3", "m2"],
              ["01", "m4", "m5", "m7", "m6"],
              ["11", "m12", "m13", "m15", "m14"],
              ["10", "m8", "m9", "m11", "m10"],
            ],
          },
          {
            type: "text",
            md: "Rules for grouping (SOP, mark the 1s):\n\n1. Groups must be rectangles of 1, 2, 4, 8 or 16 cells (**pair**, **quad**, **octet**).\n2. Make each group as **large** as possible, and use as **few** groups as possible.\n3. Cells may be shared by groups, and groups may wrap around the edges.\n4. In each group, keep only the variables that do **not** change; a pair removes one variable, a quad two, an octet three.\n\nA cell with no neighbour stays alone and gives a full minterm. When an extra group adds no new 1s, leave it out (it is **redundant**).",
          },
          {
            type: "example",
            title: "Three-variable SOP",
            problem: "Reduce F(A, B, C) = Σ(1, 3, 5, 6, 7) using a K-map.",
            steps: [
              "Draw rows A = 0, 1 and columns BC = 00, 01, 11, 10. Put 1s in cells 1, 3, 5, 7 (columns 01 and 11) and in cell 6 (row 1, column 10).",
              "Quad: cells 1, 3, 5, 7 cover both rows and columns BC = 01, 11. A changes and B changes; C = 1 throughout. The quad gives C.",
              "Pair: cells 7 and 6 in row A = 1, columns 11 and 10. A = 1, B = 1 stay fixed; C changes. The pair gives AB.",
              "All 1s are covered, so F = C + AB.",
            ],
            answer: "F = AB + C",
          },
          {
            type: "example",
            title: "Four-variable SOP with corners",
            problem: "Reduce F(A, B, C, D) = Σ(0, 2, 5, 7, 8, 10, 13, 15).",
            steps: [
              "Mark 1s in m0, m2, m8, m10: these are the four **corners** of the map, which are neighbours by wrap-around. In all four, B = 0 and D = 0. This quad gives B'D'.",
              "Mark 1s in m5, m7, m13, m15: a square block in rows AB = 01, 11 and columns CD = 01, 11. Here B = 1 and D = 1 stay fixed. This quad gives BD.",
              "No 1 is left uncovered.",
            ],
            answer: "F = B'D' + BD (this is the XNOR of B and D)",
          },
          {
            type: "mistake",
            wrong: "Number the K-map cells in binary order 00, 01, 10, 11, so the third column is CD = 10.",
            right: "Use Gray code order 00, 01, 11, 10, so that every pair of neighbouring cells differs in exactly one variable.",
            why: "Binary order looks natural, but 01 and 10 differ in two bits. Grouping those two cells would wrongly remove two variables at once and give an expression that does not match the truth table.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In a 4-variable K-map, a quad of 1s removes how many variables from its term?",
                options: ["1", "2", "3", "4"],
                answer: 1,
                explain: t`A group of $2^k$ cells removes k variables. A quad has $4 = 2^2$ cells, so 2 variables drop out and 2 remain.`,
              },
            ],
          },
          {
            type: "heading",
            text: "POS reduction: group the 0s",
          },
          {
            type: "text",
            md: "For a POS answer, put **0s** in the cells of the maxterms and group the 0s with the same rules. Each group gives a **sum** term. Read it the maxterm way: a variable fixed at 0 is written plain, one fixed at 1 is written complemented. The answer is the product of these sum terms.",
          },
          {
            type: "example",
            title: "Four-variable POS",
            problem: "Reduce F(A, B, C, D) = Π(0, 1, 2, 3, 4, 6, 8, 9, 10, 11) to its simplest POS form.",
            steps: [
              "Put 0s in the ten cells. Rows AB = 00 (m0 to m3) and AB = 10 (m8 to m11) are full of 0s, and these two rows are neighbours by wrap-around.",
              "Octet: m0, m1, m2, m3, m8, m9, m10, m11. Only B stays fixed, at 0, so the octet gives the sum term (B).",
              "Quad: m0, m2, m4, m6 (rows AB = 00, 01; columns CD = 00, 10). A = 0 and D = 0 stay fixed, giving (A + D).",
              "All 0s are covered: F = B . (A + D).",
            ],
            answer: "F = B(A + D)",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In a 4-variable map, can m0 and m8 form a pair?",
              emoji: "🔁",
              options: ["Yes, top and bottom rows are neighbours", "No, they are far apart on the map", "Only in a POS map"],
              answer: 0,
              trap: 1,
              explain: "m0 is 0000 and m8 is 1000: they differ only in A. The map wraps from top to bottom, so they are adjacent, and the pair gives B'C'D'.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Draw the map with its variable labels and Gray-code headings, then **ring every group** and write the term next to it. Examiners award marks for the map, the groups and the final expression separately. If a question asks you to draw the logic gate diagram of the result, use the reduced expression, not the canonical one.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Don't-care cells",
            md: "Some textbooks also use \"don't care\" cells (marked X) for input rows that can never occur; an X may be put inside a group if that makes the group larger. Use them only when a question gives them.",
          },
          {
            type: "keypoints",
            items: [
              "K-map headings follow Gray code: 00, 01, 11, 10; the map wraps on all edges.",
              "Groups are rectangles of 1, 2, 4, 8 or 16 cells; make them as large and as few as possible.",
              "A group keeps only the variables that stay constant across it.",
              "SOP: group 1s, write products (1 = plain). POS: group 0s, write sums (0 = plain).",
              "Four corners of a 4-variable map form a valid quad.",
            ],
          },
        ],
        flashcards: [
          { front: "Gray code order of K-map headings", back: "00, 01, 11, 10. Neighbours differ in one bit." },
          { front: "Group sizes allowed in a K-map", back: "1, 2, 4, 8, 16 cells (powers of 2), as rectangles." },
          { front: "Variables removed by an octet", back: "Three." },
          { front: "Cells of a 4-variable K-map corner quad", back: "m0, m2, m8, m10. They give B'D' in SOP." },
          { front: "Reading a POS group", back: "Variable fixed at 0 → plain; fixed at 1 → complemented; the group is a sum term." },
          { front: "Redundant group", back: "A group all of whose cells are already covered by other groups. Leave it out." },
          { front: "Position of m6 in a 3-variable map (rows A, columns BC)", back: "Row A = 1, column BC = 10 (the last column)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A K-map for F(A, B, C, D) has 1s only in m1, m3, m9, m11. The reduced SOP is:",
            options: ["B'D", "A'B'D", "B'C'D", "AD"],
            answer: 0,
            explain: "These four cells (0001, 0011, 1001, 1011) share B = 0 and D = 1; A and C change. The quad gives B'D.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "F(A, B) = Σ(1, 2, 3) reduces to:",
            options: ["A + B", "AB", "A'B + AB'", "A + B'"],
            answer: 0,
            explain: "Pair m2, m3 gives A; pair m1, m3 gives B. F = A + B.",
          },
          {
            kind: "truefalse",
            q: "In a K-map, a group of 6 adjacent 1s may be used if they form a rectangle.",
            answer: false,
            explain: "Group sizes must be powers of 2. Six 1s are covered by overlapping groups, such as two quads.",
          },
          {
            kind: "numeric",
            q: "In a 4-variable K-map, how many literals does the term from a pair have?",
            answer: 3,
            explain: "A pair removes one of the four variables, leaving 3 literals.",
          },
          {
            kind: "mcq",
            q: "For POS reduction, a quad of 0s in which A = 1 and C = 0 stay fixed gives the term:",
            options: ["(A' + C)", "AC'", "(A + C')", "A'C"],
            answer: 0,
            explain: "In POS, fixed 1 → complemented and fixed 0 → plain, and the term is a sum: A' + C.",
          },
          {
            kind: "mcq",
            q: "F(A, B, C) = Σ(0, 2, 4, 6) reduces to:",
            options: ["C'", "A'C'", "B'C'", "A + C'"],
            answer: 0,
            explain: "All four cells have C = 0 and every combination of A and B. The quad (wrapping columns 00 and 10) gives C'.",
          },
          {
            kind: "fill",
            q: "Two cells of a K-map are adjacent when their labels differ in exactly ___ bit.",
            answer: ["one", "1"],
            explain: "That is why Gray code is used for the headings.",
          },
        ],
      },
      {
        slug: "c12-cs-bool-practice",
        title: "Boolean Algebra: Board Practice",
        summary: "Mixed ISC-style questions: laws and proofs, propositional logic, canonical forms, and full K-map reductions in SOP and POS.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "This lesson works through the kinds of questions that appear in the Boolean algebra section of the ISC theory paper: short proofs, canonical forms and a K-map reduction. Try each one before reading the steps.",
          },
          {
            type: "example",
            title: "Q1: Reduce using the laws",
            problem: "Simplify X = A'B'C + A'BC + AB'C + ABC, stating the laws.",
            steps: [
              "Group in pairs: X = A'C(B' + B) + AC(B' + B) (distributive).",
              "B' + B = 1 (complement), so X = A'C + AC (identity).",
              "X = C(A' + A) = C . 1 = C (distributive, complement, identity).",
            ],
            answer: "X = C",
          },
          {
            type: "example",
            title: "Q2: Consensus-type reduction",
            problem: "Show that (A + B)(A' + C)(B + C) = (A + B)(A' + C).",
            steps: [
              "Multiply the first two brackets: (A + B)(A' + C) = AA' + AC + A'B + BC = AC + A'B + BC.",
              "BC = BC(A + A') = ABC + A'BC. Then AC + ABC = AC and A'B + A'BC = A'B (absorption), so (A + B)(A' + C) = AC + A'B.",
              "Now (AC + A'B)(B + C) = ABC + AC + A'B + A'BC = AC + A'B (absorption again).",
              "Both sides equal AC + A'B, so the third bracket (B + C) is redundant.",
            ],
            answer: "Both sides reduce to AC + A'B.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "Simplify: AB + AB' = ___.",
                answer: ["A"],
                explain: "AB + AB' = A(B + B') = A . 1 = A.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In AC + A'B + BC, the term BC cannot be removed because no other term \"contains\" it.",
            right: "BC is the **consensus** of AC and A'B, and it is redundant: AC + A'B + BC = AC + A'B. Expand BC as ABC + A'BC to see each part absorbed.",
            why: "Absorption looks for a term inside another term, and BC is not inside AC or A'B. But splitting BC by A shows each half is absorbed separately, so the term adds nothing.",
          },
          {
            type: "example",
            title: "Q3: From a situation to a K-map",
            problem: "A lift in a four-storey Mysuru office runs (F = 1) only when the door is closed (A = 1) and either a floor button is pressed (B = 1) or the fire alarm is off and the night switch is on (C = 0, D = 1). Write F in canonical SOP and reduce it.",
            steps: [
              "F = A(B + C'D) = AB + AC'D.",
              "AB covers rows 1100 to 1111: m12, m13, m14, m15. AC'D covers 1001 and 1101: m9, m13.",
              "Canonical SOP: F = Σ(9, 12, 13, 14, 15).",
              "K-map: quad m12, m13, m15, m14 (row AB = 11) gives AB; pair m13, m9 (column CD = 01, rows 11 and 10) gives AC'D.",
            ],
            answer: "F = Σ(9, 12, 13, 14, 15) = AB + AC'D",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which wff is a contradiction?",
                options: ["(p ⇒ q) ∨ p", "p ∧ ~p ∧ q", "p ∨ q", "~(p ∧ ~p)"],
                answer: 1,
                explain: "p ∧ ~p is always 0, so ANDing it with q is still always 0. Option 4 is a tautology.",
              },
            ],
          },
          {
            type: "example",
            title: "Q4: K-map with an isolated cell",
            problem: "Reduce F(P, Q, R, S) = Σ(0, 1, 4, 5, 10, 15).",
            steps: [
              "Quad: m0, m1, m4, m5 (rows PQ = 00, 01; columns RS = 00, 01). P = 0 and R = 0 stay fixed → P'R'.",
              "m10 (1010) has no neighbouring 1: its neighbours are m11, m14, m8 and m2, all 0. It stays as PQ'RS'.",
              "m15 (1111) also has no neighbouring 1 (m14, m13, m11, m7 are 0). It stays as PQRS.",
            ],
            answer: "F = P'R' + PQ'RS' + PQRS",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps for a K-map POS reduction.",
              items: [
                "Write the function as a list of maxterms",
                "Draw the map with Gray-code headings",
                "Put 0s in the maxterm cells",
                "Ring the largest groups of 0s",
                "Write a sum term for each group",
                "Multiply the sum terms",
              ],
              explain: "POS works on the 0s: list, map, mark, group, read sums, and AND them together.",
            },
          },
          {
            type: "example",
            title: "Q5: Propositional logic",
            problem: "Using a truth table, show that p ⇒ q and ~p ∨ q are equivalent, and write the contrapositive of \"If a number is divisible by 4, it is even\".",
            steps: [
              "Rows (p, q) = 00, 01, 10, 11: p ⇒ q gives 1, 1, 0, 1.",
              "~p ∨ q: ~p is 1, 1, 0, 0; OR with q (0, 1, 0, 1) gives 1, 1, 0, 1. The columns match.",
              "Contrapositive (~q ⇒ ~p): \"If a number is not even, it is not divisible by 4.\"",
            ],
            answer: "The columns are identical, so p ⇒ q ≡ ~p ∨ q; contrapositive: if a number is not even, it is not divisible by 4.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "A full K-map question usually has three parts: (i) reduce to SOP or POS, (ii) draw the logic gate diagram of the result, sometimes (iii) using only NAND or only NOR gates. Budget your time: the map and groups carry most of the marks. Always write the final answer on its own line.",
          },
          {
            type: "keypoints",
            items: [
              "Name the law in every step of an algebraic proof.",
              "A consensus term (BC in AC + A'B + BC) is redundant.",
              "Turn a word problem into an expression first, then into Σ or Π form.",
              "A cell with no neighbouring 1 gives a full minterm in the answer.",
              "Equivalence of two wffs is shown by matching truth-table columns.",
            ],
          },
        ],
        flashcards: [
          { front: "Consensus theorem", back: "AB + A'C + BC = AB + A'C; dual: (A + B)(A' + C)(B + C) = (A + B)(A' + C)." },
          { front: "A'B'C + A'BC + AB'C + ABC", back: "Reduces to C." },
          { front: "p ⇒ q in terms of OR and NOT", back: "~p ∨ q (Boolean: p' + q)." },
          { front: "Neighbours of m10 in a 4-variable K-map", back: "m11, m14, m8 and m2." },
          { front: "Three parts of a typical ISC K-map question", back: "Reduce, draw the gate diagram, and sometimes redraw it with only NAND or only NOR gates." },
          { front: "Reduced form of Σ(9, 12, 13, 14, 15) for F(A, B, C, D)", back: "AB + AC'D." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "F(A, B, C) = Σ(2, 3, 6, 7) reduces to:",
            options: ["B", "A'B", "AB", "B + C"],
            answer: 0,
            explain: "All four cells have B = 1 (010, 011, 110, 111); A and C change. The quad gives B.",
          },
          {
            kind: "mcq",
            q: "The reduced POS of F(A, B, C) = Π(0, 1) is:",
            options: ["(A + B)", "A'B'", "(A' + B')", "AB"],
            answer: 0,
            explain: "M0 and M1 differ only in C, so the pair keeps A = 0 and B = 0, read as plain variables: (A + B).",
          },
          {
            kind: "truefalse",
            q: "AB + A'C + BC = AB + A'C.",
            answer: true,
            explain: "This is the consensus theorem; BC is redundant.",
          },
          {
            kind: "mcq",
            q: "The inverse of \"If it is Sunday, the school is closed\" is:",
            options: ["If it is not Sunday, the school is not closed.", "If the school is closed, it is Sunday.", "If the school is not closed, it is not Sunday.", "It is Sunday and the school is closed."],
            answer: 0,
            explain: "The inverse negates both parts but keeps the order: ~p ⇒ ~q.",
          },
          {
            kind: "numeric",
            q: "F(A, B, C, D) = Σ(0, 2, 8, 10) reduces to a single term. How many literals does it have?",
            answer: 2,
            explain: "The four corners form a quad giving B'D', which has 2 literals.",
          },
          {
            kind: "fill",
            q: "Simplify: A + AB' + A'B = A + ___.",
            answer: ["B"],
            explain: "A + AB' = A (absorption), then A + A'B = A + B.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "F(A, B, C) = Σ(0, 1, 2, 3, 7) reduces to:",
            options: ["A' + BC", "A' + ABC", "A'B' + BC", "A + BC"],
            answer: 0,
            explain: "Quad m0 to m3 (row A = 0) gives A'. Pair m3, m7 (column BC = 11) gives BC. F = A' + BC.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Logic Circuits                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-logic-circuits",
    title: "Logic Circuits",
    icon: "🔌",
    description: "The basic and derived logic gates, NAND and NOR as universal gates, half and full adders, encoders, decoders and multiplexers.",
    lessons: [
      {
        slug: "c12-cs-gates-universal",
        title: "Logic Gates and Universal Gates",
        summary: "NOT, AND, OR, NAND, NOR, XOR and XNOR gates, writing the expression of a circuit and the circuit of an expression, and building every gate from NAND or NOR alone.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚦",
            caption: "A railway level crossing gate closes when a train is sensed on either side. Inside the controller, that decision is made by an OR gate.",
          },
          {
            type: "text",
            md: "A **logic gate** is an electronic circuit with one or more inputs and one output, where each signal is 0 (low voltage) or 1 (high voltage). The output is a fixed Boolean function of the inputs.\n\n**AND**, **OR** and **NOT** are the **basic gates**. **NAND**, **NOR**, **XOR** (exclusive OR) and **XNOR** (exclusive NOR) are **derived gates**, made by combining the basic ones.",
          },
          {
            type: "table",
            headers: ["Gate", "Expression", "Output is 1 when", "Output for A = 1, B = 0"],
            rows: [
              ["NOT", "A'", "the input is 0", "0 (for A = 1)"],
              ["AND", "A . B", "all inputs are 1", "0"],
              ["OR", "A + B", "at least one input is 1", "1"],
              ["NAND", "(A . B)'", "at least one input is 0", "1"],
              ["NOR", "(A + B)'", "all inputs are 0", "0"],
              ["XOR", t`$A \oplus B$ = A'B + AB'`, "the inputs are different (an odd number of 1s)", "1"],
              ["XNOR", t`$(A \oplus B)'$ = A'B' + AB`, "the inputs are the same", "0"],
            ],
          },
          {
            type: "text",
            md: "**Expression from a circuit:** start at the inputs and write the output of each gate in turn, moving towards the final output.\n\n**Circuit from an expression:** draw a NOT gate for each complemented variable, an AND gate for each product term and one OR gate to add the terms. An SOP expression therefore gives an AND-OR circuit, and a POS expression gives an OR-AND circuit.",
          },
          {
            type: "example",
            title: "Reading a circuit",
            problem: "Inputs A and B go into a NAND gate. Its output and input C go into a NOR gate, whose output is F. Write F and simplify it.",
            steps: [
              "NAND output: (AB)'.",
              "NOR output: F = ((AB)' + C)'.",
              "De Morgan on the NOR: F = ((AB)')' . C' = AB . C' (involution).",
            ],
            answer: "F = ABC', so F = 1 only for A = 1, B = 1, C = 0.",
          },
          {
            type: "mistake",
            wrong: "A NAND gate is an AND gate whose inputs are inverted, so A NAND B = A'B'.",
            right: "A NAND gate inverts the **output** of AND: A NAND B = (AB)' = A' + B'. An AND gate with inverted inputs gives A'B', which is NOR.",
            why: "The bubble on a NAND symbol sits at the output, but learners attach it to the inputs. Try A = 1, B = 0: (AB)' = 1, while A'B' = 0 . 1 = 0.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A three-input XOR gate has inputs 1, 1, 1. Its output is:",
                options: ["0", "1", "undefined", "the same as NOR"],
                answer: 1,
                explain: t`$1 \oplus 1 = 0$, then $0 \oplus 1 = 1$. XOR gives 1 for an odd number of 1s, and three is odd.`,
              },
            ],
          },
          {
            type: "heading",
            text: "NAND and NOR are universal gates",
          },
          {
            type: "text",
            md: "A **universal gate** is one from which every other gate, and hence every Boolean function, can be built. NAND and NOR are both universal, which is why chips are often made from just one type of gate.",
          },
          {
            type: "table",
            headers: ["Gate needed", "Using NAND only", "NAND gates", "Using NOR only", "NOR gates"],
            rows: [
              ["NOT", "tie both inputs: (A . A)' = A'", "1", "tie both inputs: (A + A)' = A'", "1"],
              ["AND", "NAND, then a NAND used as NOT", "2", "NOR of A' and B': (A' + B')' = AB", "3"],
              ["OR", "NAND of A' and B': (A'B')' = A + B", "3", "NOR, then a NOR used as NOT", "2"],
              ["XOR", "four NAND gates", "4", "five NOR gates", "5"],
            ],
          },
          {
            type: "example",
            title: "An SOP circuit with NAND gates only",
            problem: "Implement F = AB + CD using only NAND gates.",
            steps: [
              "Double complement: F = ((AB + CD)')'.",
              "De Morgan inside: (AB + CD)' = (AB)' . (CD)'. So F = ((AB)' . (CD)')'.",
              "(AB)' and (CD)' are two NAND gates; the outer complement of their product is a third NAND gate.",
            ],
            answer: "Three NAND gates: F = NAND( NAND(A, B), NAND(C, D) ). Any two-level AND-OR circuit becomes NAND-NAND this way.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each gate to its output rule.",
              pairs: [
                ["AND", "1 only when all inputs are 1"],
                ["NOR", "1 only when all inputs are 0"],
                ["NAND", "0 only when all inputs are 1"],
                ["XOR", "1 when an odd number of inputs are 1"],
                ["XNOR (2 inputs)", "1 when both inputs are equal"],
              ],
              explain: "NAND and NOR are the complements of AND and OR; XOR and XNOR compare the inputs.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "When you draw gates in the exam, label every input and write the expression at the output of each gate. A question that says \"using NAND gates only\" gets no marks if even one NOT gate appears, so build the NOT from a NAND with tied inputs.",
          },
          {
            type: "keypoints",
            items: [
              "Basic gates: AND, OR, NOT. Derived: NAND, NOR, XOR, XNOR.",
              t`XOR: $A \oplus B$ = A'B + AB', 1 for an odd number of 1s. XNOR is its complement.`,
              "NAND = (AB)' = A' + B'; NOR = (A + B)' = A'B'.",
              "NAND and NOR are universal: NOT needs 1 gate, AND and OR need 2 or 3.",
              "Any SOP circuit can be built as NAND-NAND; any POS circuit as NOR-NOR.",
            ],
          },
        ],
        flashcards: [
          { front: "Universal gate", back: "A gate from which every other gate can be built: NAND and NOR." },
          { front: "NOT from a NAND gate", back: "Join both inputs together: (A . A)' = A'." },
          { front: "OR from NAND gates", back: "Invert A and B with two NANDs, then NAND them: (A'B')' = A + B. Three gates." },
          { front: "AND from NOR gates", back: "Invert A and B with two NORs, then NOR them: (A' + B')' = AB. Three gates." },
          { front: "XOR expression", back: "A'B + AB'. Output 1 when the inputs differ." },
          { front: "XNOR expression", back: "A'B' + AB. Output 1 when the inputs are equal." },
          { front: "Number of NAND gates for an XOR", back: "Four." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which gate gives output 1 only when all its inputs are 0?",
            options: ["NAND", "NOR", "XOR", "AND"],
            answer: 1,
            explain: "NOR = (A + B)', which is 1 only when A + B = 0, i.e. both inputs are 0.",
          },
          {
            kind: "numeric",
            q: "How many NOR gates are needed to make a 2-input AND gate?",
            answer: 3,
            explain: "Two NORs invert A and B, and a third NOR gives (A' + B')' = AB.",
          },
          {
            kind: "mcq",
            q: "A and B feed an OR gate; its output feeds a NOT gate. The circuit is equivalent to:",
            options: ["A NAND B", "A NOR B", "A XOR B", "A' + B'"],
            answer: 1,
            explain: "OR followed by NOT is (A + B)', the NOR function. Option 4 is NAND.",
          },
          {
            kind: "truefalse",
            q: "An AND gate whose two inputs are each passed through a NOT gate behaves as a NOR gate.",
            answer: true,
            explain: "A'B' = (A + B)' by De Morgan's theorem, which is NOR.",
          },
          {
            kind: "fill",
            q: "The output of an XNOR gate with inputs A = 0 and B = 0 is ___.",
            answer: ["1"],
            explain: "XNOR is 1 when the inputs are equal.",
          },
          {
            kind: "mcq",
            q: "F = ((A + B)' + (C + D)')' simplifies to:",
            options: ["(A + B)(C + D)", "AB + CD", "(A + B) + (C + D)", "A'B' + C'D'"],
            answer: 0,
            explain: "De Morgan: (X' + Y')' = XY with X = A + B and Y = C + D. This is a NOR-NOR circuit for a POS expression.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "For inputs A = 1, B = 1, which gates give output 0?",
            options: ["NAND", "NOR", "XOR", "XNOR"],
            answers: [0, 1, 2],
            explain: "NAND(1, 1) = 0, NOR(1, 1) = 0, XOR(1, 1) = 0; XNOR(1, 1) = 1.",
          },
        ],
      },
      {
        slug: "c12-cs-adders",
        title: "Half Adder and Full Adder",
        summary: "Adding binary digits with gates: the half adder, the full adder derived with a K-map, a full adder from two half adders, and ripple addition of multi-bit numbers.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "➕",
            caption: "Every calculation your phone does, from a UPI payment total to a game score, is finally carried out by tiny adder circuits that add one binary digit at a time.",
          },
          {
            type: "text",
            md: "Adding two bits gives four cases: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1 and 1 + 1 = 10 (two in binary). So the answer needs two outputs: a **sum** bit S and a **carry** bit C.\n\nA **half adder** adds two bits A and B. It cannot accept a carry from an earlier column, which is why it is only \"half\" of what is needed.",
          },
          {
            type: "table",
            headers: ["A", "B", "Sum S", "Carry C"],
            rows: [
              ["0", "0", "0", "0"],
              ["0", "1", "1", "0"],
              ["1", "0", "1", "0"],
              ["1", "1", "0", "1"],
            ],
          },
          {
            type: "formula",
            tex: t`S = A'B + AB' = A \oplus B \qquad C = A \cdot B`,
            caption: "A half adder is one XOR gate and one AND gate.",
          },
          {
            type: "text",
            md: "A **full adder** adds three bits: A, B and the carry-in from the previous column, Cin. It gives a sum S and a carry-out Cout. The truth table has 8 rows: S is 1 when an odd number of inputs are 1, and Cout is 1 when at least two inputs are 1.",
          },
          {
            type: "example",
            title: "Deriving the full adder",
            problem: "Find reduced expressions for S and Cout of a full adder.",
            steps: [
              t`S = 1 in rows 1, 2, 4, 7 (one or three 1s). On the K-map no two of these cells are adjacent, so S cannot be grouped: S = A'B'Cin + A'BCin' + AB'Cin' + ABCin = $A \oplus B \oplus C_{in}$.`,
              "Cout = 1 in rows 3, 5, 6, 7. On the K-map these form three overlapping pairs, giving Cout = AB + BCin + ACin.",
              t`Another useful form: Cout = AB + Cin(A'B + AB') = AB + $C_{in}(A \oplus B)$. This is the form built from two half adders.`,
            ],
            answer: t`$S = A \oplus B \oplus C_{in}$, Cout = AB + BCin + ACin = AB + $C_{in}(A \oplus B)$`,
          },
          {
            type: "text",
            md: t`**A full adder from two half adders:** the first half adder adds A and B, giving $A \oplus B$ and AB. The second adds $A \oplus B$ and Cin, giving the final sum $A \oplus B \oplus C_{in}$ and a carry $C_{in}(A \oplus B)$. An OR gate joins the two carries: Cout = AB + $C_{in}(A \oplus B)$.`,
          },
          {
            type: "code",
            lang: "java",
            caption: "FullAdder.java: the full adder's truth table, computed with Java's bitwise operators (^ is XOR, & is AND, | is OR)",
            code: `public class FullAdder
{
    // sum and carry of one full adder, using bitwise operators on 0/1 values
    static int sum(int a, int b, int cin)
    {
        return a ^ b ^ cin;
    }

    static int carry(int a, int b, int cin)
    {
        return (a & b) | (cin & (a ^ b));
    }

    public static void main(String[] args)
    {
        System.out.println("A B Cin | S Cout");
        for (int a = 0; a <= 1; a++)
            for (int b = 0; b <= 1; b++)
                for (int c = 0; c <= 1; c++)
                    System.out.println(a + " " + b + "  " + c + "  | " + sum(a, b, c) + "  " + carry(a, b, c));
    }
}

/* Output:
A B Cin | S Cout
0 0  0  | 0  0
0 0  1  | 1  0
0 1  0  | 1  0
0 1  1  | 0  1
1 0  0  | 1  0
1 0  1  | 0  1
1 1  0  | 0  1
1 1  1  | 1  1
*/`,
          },
          {
            type: "mistake",
            wrong: "A full adder's sum is 1 only when exactly one of A, B, Cin is 1.",
            right: "The sum is 1 when an **odd** number of inputs are 1: one or three. For 1 + 1 + 1 = 11 in binary, S = 1 and Cout = 1.",
            why: "With two inputs, \"odd\" and \"exactly one\" mean the same thing, so the half-adder rule gets stretched. With three inputs they differ in the row 111, which is a favourite exam row.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A full adder has A = 1, B = 0, Cin = 1. Its outputs (S, Cout) are:",
                options: ["(0, 1)", "(1, 0)", "(1, 1)", "(0, 0)"],
                answer: 0,
                explain: "1 + 0 + 1 = 2 = 10 in binary, so S = 0 and Cout = 1.",
              },
            ],
          },
          {
            type: "example",
            title: "Ripple addition",
            problem: "Four full adders are chained so that each carry-out feeds the next carry-in (the first Cin = 0). Add 1011 and 0110 and give each column's sum and carry.",
            steps: [
              "Bit 0: 1 + 0 + 0 → S0 = 1, carry 0.",
              "Bit 1: 1 + 1 + 0 → S1 = 0, carry 1.",
              "Bit 2: 0 + 1 + 1 → S2 = 0, carry 1.",
              "Bit 3: 1 + 0 + 1 → S3 = 0, carry 1. The final carry becomes the fifth bit.",
            ],
            answer: "1011 + 0110 = 10001 (11 + 6 = 17).",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the signals through a full adder made of half adders.",
              items: [
                "First half adder adds A and B",
                "It outputs A XOR B and the carry AB",
                "Second half adder adds A XOR B and Cin",
                "It outputs the final sum and the carry Cin(A XOR B)",
                "An OR gate joins the two carries into Cout",
              ],
              explain: "Two half adders and one OR gate make a full adder: Cout = AB + Cin(A XOR B).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Learn the full adder truth table, both forms of Cout and the two-half-adder diagram. A common short question asks why a half adder cannot be used for every column of a multi-bit addition: the answer is that it has no input for the carry coming from the column on its right.",
          },
          {
            type: "keypoints",
            items: [
              t`Half adder: S = $A \oplus B$, C = AB (one XOR, one AND).`,
              t`Full adder: S = $A \oplus B \oplus C_{in}$, Cout = AB + BCin + ACin.`,
              "Full adder = two half adders + one OR gate.",
              "The sum bit is 1 for an odd number of 1s; the carry is 1 for two or more 1s.",
              "n full adders chained carry-to-carry add two n-bit numbers (ripple-carry adder).",
            ],
          },
        ],
        flashcards: [
          { front: "Half adder outputs", back: "Sum = A XOR B, Carry = A AND B." },
          { front: "Why \"half\" adder?", back: "It adds only two bits and has no input for a carry from the previous column." },
          { front: "Full adder sum", back: "A XOR B XOR Cin: 1 when an odd number of the three inputs are 1." },
          { front: "Full adder carry-out (reduced SOP)", back: "AB + BCin + ACin: 1 when at least two inputs are 1." },
          { front: "Gates in a half adder", back: "One XOR gate and one AND gate." },
          { front: "Full adder from half adders", back: "Two half adders and one OR gate (to combine the two carries)." },
          { front: "Full adder output for inputs 1, 1, 1", back: "S = 1, Cout = 1 (1 + 1 + 1 = 11 in binary)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which gate gives the sum output of a half adder?",
            options: ["AND", "OR", "XOR", "XNOR"],
            answer: 2,
            explain: "Sum = A'B + AB' = A XOR B. The carry comes from an AND gate.",
          },
          {
            kind: "mcq",
            q: "In canonical SOP, the carry-out of a full adder (inputs A, B, Cin in that order) is:",
            options: ["Σ(3, 5, 6, 7)", "Σ(1, 2, 4, 7)", "Σ(0, 3, 5, 6)", "Σ(4, 5, 6, 7)"],
            answer: 0,
            explain: "Rows with at least two 1s: 011, 101, 110, 111. Σ(1, 2, 4, 7) is the sum output.",
          },
          {
            kind: "truefalse",
            q: "The sum output of a full adder can be reduced on a K-map to fewer than four product terms.",
            answer: false,
            explain: "Its 1s (m1, m2, m4, m7) form a checkerboard: no two are adjacent, so no grouping is possible in SOP. It is written compactly with XOR instead.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A ripple-carry adder for two 8-bit numbers uses only full adders. How many are needed?",
            answer: 8,
            explain: "One full adder per bit position. (A half adder could replace the first one, since its carry-in is always 0.)",
          },
          {
            kind: "mcq",
            q: "Adding 0111 and 0101 in a 4-bit ripple adder gives:",
            options: ["1100", "1010", "1110", "0010"],
            answer: 0,
            explain: "7 + 5 = 12 = 1100. Columns: 1+1 = 0 c1; 1+0+1 = 0 c1; 1+1+1 = 1 c1; 0+0+1 = 1 c0.",
          },
          {
            kind: "fill",
            q: "In a full adder built from two half adders, the two carries are combined by an ___ gate.",
            answer: ["OR"],
            explain: "Cout = AB + Cin(A XOR B). The two carries can never both be 1, so an OR (or even an XOR) works; ISC uses OR.",
          },
          {
            kind: "mcq",
            q: "In FullAdder.java, carry(1, 1, 0) returns:",
            options: ["1", "0", "2", "true"],
            answer: 0,
            explain: "(1 & 1) | (0 & (1 ^ 1)) = 1 | 0 = 1. The bitwise operators keep the value as the int 1.",
          },
        ],
      },
      {
        slug: "c12-cs-encoder-decoder-mux",
        title: "Encoders, Decoders and Multiplexers",
        summary: "Octal-to-binary and decimal-to-BCD encoders, 2-to-4 and 3-to-8 decoders, 4:1 and 8:1 multiplexers, their expressions and their uses.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "📺",
            caption: "Press 7 on a TV remote and a chip turns that one key into the code 0111. At the TV, another chip turns the code back into one of many actions. These chips are encoders and decoders.",
          },
          {
            type: "text",
            md: t`An **encoder** has up to $2^n$ input lines and n output lines. Exactly one input is active at a time, and the outputs give its binary code. An **octal-to-binary** encoder has 8 inputs (D0 to D7) and 3 outputs; a **decimal-to-BCD** encoder has 10 inputs and 4 outputs; a **hexadecimal-to-binary** encoder has 16 inputs and 4 outputs.

Each output bit is an **OR** of the inputs whose code has a 1 in that position.`,
          },
          {
            type: "table",
            headers: ["Output bit", "Octal-to-binary (8 × 3)", "Decimal-to-BCD (10 × 4)"],
            rows: [
              ["A3 (weight 8)", "-", "D8 + D9"],
              ["A2 (weight 4)", "D4 + D5 + D6 + D7", "D4 + D5 + D6 + D7"],
              ["A1 (weight 2)", "D2 + D3 + D6 + D7", "D2 + D3 + D6 + D7"],
              ["A0 (weight 1)", "D1 + D3 + D5 + D7", "D1 + D3 + D5 + D7 + D9"],
            ],
          },
          {
            type: "text",
            md: t`A **decoder** does the reverse: n input lines and up to $2^n$ output lines. For each input code exactly one output goes to 1. Each output is a **minterm** of the inputs, made by one AND gate (with NOT gates for the complemented inputs).

In a **3-to-8 decoder** (binary-to-octal) with inputs A, B, C (A most significant), D0 = A'B'C', D5 = AB'C and D7 = ABC. A **binary-to-decimal** decoder uses 4 inputs and only 10 of the 16 possible outputs.`,
          },
          {
            type: "example",
            title: "Designing a 2-to-4 decoder",
            problem: "Give the expressions and gate count for a 2-to-4 decoder with inputs A, B.",
            steps: [
              "Outputs are the four minterms: D0 = A'B', D1 = A'B, D2 = AB', D3 = AB.",
              "Two NOT gates make A' and B'.",
              "Four 2-input AND gates make D0 to D3.",
            ],
            answer: "2 NOT gates + 4 AND gates; input 10 makes only D2 = 1.",
          },
          {
            type: "mistake",
            wrong: "An encoder converts a binary code into one of many output lines, and a decoder converts a key press into a binary code.",
            right: "It is the other way round. An **en**coder turns one active line into a code (many → few). A **de**coder turns a code into one active line (few → many).",
            why: "Both words describe a conversion, so they are easy to swap. Think of the TV remote: the keypad **encodes** your key into a short code, and the TV **decodes** the code back.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In an octal-to-binary encoder, only input D6 is 1. The outputs A2 A1 A0 are:",
                options: ["110", "011", "101", "100"],
                answer: 0,
                explain: "6 = 110. Check: A2 includes D6 (1), A1 includes D6 (1), A0 does not (0).",
              },
            ],
          },
          {
            type: "heading",
            text: "Multiplexers",
          },
          {
            type: "text",
            md: t`A **multiplexer (MUX)** is a data selector. It has $2^n$ data inputs, n **select lines** and one output. The binary number on the select lines decides which data input is passed to the output. A 4:1 MUX has 2 select lines; an 8:1 MUX has 3.`,
          },
          {
            type: "formula",
            tex: t`Y = S_1' S_0' I_0 + S_1' S_0 I_1 + S_1 S_0' I_2 + S_1 S_0 I_3`,
            caption: "4:1 multiplexer: four 3-input AND gates, one 4-input OR gate and two NOT gates.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Mux4.java: a 4:1 multiplexer in Java, with data inputs 1, 0, 0, 1",
            code: `public class Mux4
{
    // 4:1 multiplexer: s1 s0 choose which of i0..i3 reaches the output
    static int select(int s1, int s0, int i0, int i1, int i2, int i3)
    {
        int ns1 = 1 - s1, ns0 = 1 - s0;
        return (ns1 & ns0 & i0) | (ns1 & s0 & i1) | (s1 & ns0 & i2) | (s1 & s0 & i3);
    }

    public static void main(String[] args)
    {
        int i0 = 1, i1 = 0, i2 = 0, i3 = 1;
        for (int s1 = 0; s1 <= 1; s1++)
            for (int s0 = 0; s0 <= 1; s0++)
                System.out.println("S1S0=" + s1 + s0 + " -> Y=" + select(s1, s0, i0, i1, i2, i3));
    }
}

/* Output:
S1S0=00 -> Y=1
S1S0=01 -> Y=0
S1S0=10 -> Y=0
S1S0=11 -> Y=1
*/`,
          },
          {
            type: "text",
            md: "With data inputs fixed at 1, 0, 0, 1, the output is 1 only when S1 = S0: this MUX behaves as an XNOR gate of the two select lines. Fixing the data inputs to 0s and 1s lets one multiplexer produce any function of its select inputs.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which circuit is described?",
              groups: ["Encoder", "Decoder", "Multiplexer"],
              items: [
                { text: "8 inputs, 3 outputs, one input active", group: 0, hint: "Many lines in, a short code out." },
                { text: "3 inputs, 8 outputs, one output active", group: 1, hint: "A code in, one line out of many." },
                { text: "8 data inputs, 3 select lines, 1 output", group: 2, hint: "Select lines choose one data input." },
                { text: "Each output is an OR of inputs", group: 0, hint: "Output bit = OR of the lines whose code has 1 there." },
                { text: "Each output is a minterm", group: 1, hint: "One AND gate per output line." },
                { text: "Works as a data selector", group: 2, hint: "It routes one of many signals to a single wire." },
              ],
              explain: "Encoder: many → code. Decoder: code → one of many lines. MUX: many data lines → one output, chosen by select lines.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "For an encoder, decoder or MUX question, give the truth table, the expression for each output, and the logic diagram. In a decimal-to-BCD encoder, remember that D0 does not appear in any output expression: all outputs are 0 for it.",
          },
          {
            type: "keypoints",
            items: [
              "Encoder: 2^n (or fewer) inputs → n outputs; each output is an OR of inputs.",
              "Decoder: n inputs → 2^n outputs; each output is one minterm (AND gate).",
              "MUX: 2^n data inputs, n select lines, 1 output; it selects one input.",
              "4:1 MUX: Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3.",
              "Decimal-to-BCD needs 4 outputs: A3 = D8 + D9, A0 = D1 + D3 + D5 + D7 + D9.",
            ],
          },
        ],
        flashcards: [
          { front: "Encoder", back: "A circuit that converts one active input line out of 2^n into an n-bit binary code." },
          { front: "Decoder", back: "A circuit that converts an n-bit code into one active line out of 2^n." },
          { front: "Multiplexer", back: "A data selector: n select lines choose one of 2^n data inputs to send to the single output." },
          { front: "Select lines of an 8:1 MUX", back: "Three." },
          { front: "A0 of an octal-to-binary encoder", back: "D1 + D3 + D5 + D7." },
          { front: "Output D5 of a 3-to-8 decoder (inputs A, B, C)", back: "AB'C." },
          { front: "Gates in a 2-to-4 decoder", back: "Two NOT gates and four 2-input AND gates." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many select lines does a 16:1 multiplexer need?",
            answer: 4,
            explain: t`$2^4 = 16$, so 4 select lines.`,
          },
          {
            kind: "mcq",
            q: "In a 3-to-8 decoder with inputs A B C = 011, the active output is:",
            options: ["D3", "D6", "D1", "D4"],
            answer: 0,
            explain: "011 is 3, so D3 = A'BC goes to 1.",
          },
          {
            kind: "mcq",
            q: "In a decimal-to-BCD encoder, which inputs are ORed to form A3?",
            options: ["D8, D9", "D4, D5, D6, D7", "D1, D3, D5, D7, D9", "D2, D3, D6, D7"],
            answer: 0,
            explain: "Only 8 (1000) and 9 (1001) have a 1 in the 8s place.",
          },
          {
            kind: "truefalse",
            q: "Every output of a decoder corresponds to one minterm of its inputs.",
            answer: true,
            explain: "Each output is 1 for exactly one input combination, which is the definition of a minterm.",
          },
          {
            kind: "mcq",
            q: "A 4:1 MUX has I0 = 0, I1 = 1, I2 = 1, I3 = 0. As a function of S1 and S0 it acts as:",
            options: ["XOR", "XNOR", "AND", "OR"],
            answer: 0,
            explain: "Y = 1 for select 01 and 10, i.e. when S1 and S0 differ: XOR.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A hexadecimal-to-binary encoder has 16 inputs and ___ outputs.",
            answer: ["4", "four"],
            explain: t`$2^4 = 16$, so a 4-bit code is needed.`,
          },
          {
            kind: "mcq",
            q: "In Mux4.java, what does select(1, 0, 1, 0, 0, 1) return?",
            options: ["0", "1", "2", "3"],
            answer: 0,
            explain: "Select lines 10 choose I2, which is 0.",
          },
        ],
      },
      {
        slug: "c12-cs-logic-practice",
        title: "Logic Circuits: Board Practice",
        summary: "Mixed ISC-style questions on gate diagrams, NAND/NOR-only circuits, adders, encoders, decoders and multiplexers, including tracing a gate-level Java program.",
        minutes: 20,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "These questions combine Boolean algebra and gates, the way the ISC theory paper does. Work each one on paper first: write the expression at every gate output.",
          },
          {
            type: "example",
            title: "Q1: Circuit to expression",
            problem: "A and B feed an XOR gate (output P). A and B also feed an AND gate (output Q). P and C feed an AND gate (output R). Q and R feed an OR gate (output F). Write F and name the circuit.",
            steps: [
              t`P = $A \oplus B$, Q = AB.`,
              t`R = $C(A \oplus B)$.`,
              t`F = AB + $C(A \oplus B)$.`,
            ],
            answer: "F is the carry-out of a full adder (with C as the carry-in).",
          },
          {
            type: "example",
            title: "Q2: NOR-only circuit",
            problem: "Implement F = (A + B)(C + D') using NOR gates only, and count the gates.",
            steps: [
              "F = ((F)')' = ((A + B)' + (C + D')')' by De Morgan.",
              "(A + B)' is one NOR gate. D' needs a NOR with tied inputs; (C + D')' is another NOR.",
              "The outer complement of the sum of the two NOR outputs is a final NOR gate.",
            ],
            answer: "4 NOR gates: one inverter for D, two first-level NORs and one output NOR.",
          },
          {
            type: "mistake",
            wrong: "To build F = AB + CD from NAND gates, use AND gates for AB and CD and a NAND gate in place of the OR.",
            right: "Replace **every** gate by a NAND: NAND(A, B), NAND(C, D), then NAND of those two outputs. That gives ((AB)'(CD)')' = AB + CD.",
            why: "Changing only the last gate gives (AB . CD)', which is a different function. In a two-level AND-OR circuit, the inversions at the outputs of the first level and the inputs of the second level must cancel in pairs.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "How many NAND gates are needed for a half adder?",
                options: ["3", "4", "5", "6"],
                answer: 2,
                explain: "Four NANDs make the XOR (sum). The first of them already gives (AB)', so one more NAND, used as an inverter, gives the carry AB: 5 in all.",
              },
            ],
          },
          {
            type: "example",
            title: "Q3: Encoder fault",
            problem: "In an octal-to-binary encoder, the wire from D5 to the A2 OR gate breaks. What code appears when D5 is pressed, and which other input gives the same code?",
            steps: [
              "D5 should give 101 (A2 = 1, A1 = 0, A0 = 1).",
              "With the break, A2 stays 0, so the output is 001.",
              "001 is the code of D1.",
            ],
            answer: "Output 001, the same as D1, so pressing 5 is read as 1.",
          },
          {
            type: "example",
            title: "Q4: Tracing a gate-level program",
            problem: "What does this Java line print? int a = 1, b = 0, c = 1; System.out.println((a ^ b ^ c) + \" \" + ((a & b) | (c & (a ^ b))));",
            steps: [
              "a ^ b = 1, then 1 ^ c = 1 ^ 1 = 0. So the sum is 0.",
              "a & b = 0; a ^ b = 1; c & 1 = 1; 0 | 1 = 1. So the carry is 1.",
              "The + between an int and a String joins them as text.",
            ],
            answer: "0 1",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "An 8:1 MUX has select inputs S2 S1 S0 = 1 1 0. Which data input reaches the output?",
              emoji: "🎛️",
              options: ["I6", "I3", "I5", "I1"],
              answer: 0,
              trap: 1,
              explain: "S2 S1 S0 = 110 is 6 in binary, so I6 is selected. Reading the bits in the wrong order (S0 as the most significant bit) gives 011 = 3, the trap answer.",
            },
          },
          {
            type: "example",
            title: "Q5: Decoder as a function generator",
            problem: "Use a 3-to-8 decoder and one OR gate to make the full adder's sum S(A, B, C) = Σ(1, 2, 4, 7).",
            steps: [
              "Each decoder output Di is the minterm mi.",
              "Connect D1, D2, D4 and D7 to a 4-input OR gate.",
              "Its output is m1 + m2 + m4 + m7 = S.",
            ],
            answer: "S = D1 + D2 + D4 + D7 (one decoder, one 4-input OR gate). Cout would use D3 + D5 + D6 + D7.",
          },
          {
            type: "table",
            headers: ["Simplified expression", "Name of the circuit"],
            rows: [
              ["A'B + AB'", "XOR (half adder sum)"],
              ["A'B' + AB", "XNOR (equality checker)"],
              ["AB + BC + CA", "majority function, full adder carry"],
              [t`$A \oplus B \oplus C$`, "full adder sum, odd-parity checker"],
              ["S'I0 + SI1", "2:1 multiplexer"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "When a question gives a circuit and asks \"what does it do\", write the expression, simplify it, then compare with the patterns you know: XOR, XNOR, half adder, full adder carry, majority function, multiplexer. Naming the circuit correctly usually earns the last mark.",
          },
          {
            type: "keypoints",
            items: [
              "Write the expression at every gate output, then simplify.",
              "SOP → NAND-NAND; POS → NOR-NOR; complemented inputs need extra inverters.",
              "Half adder from NAND: 5 gates; XOR from NAND: 4 gates.",
              "A decoder plus an OR gate can generate any function in canonical SOP.",
              "Select lines are read as a binary number, with the highest-numbered line as the MSB.",
            ],
          },
        ],
        flashcards: [
          { front: "AB + C(A XOR B)", back: "Carry-out of a full adder; equals AB + BC + AC." },
          { front: "NAND gates in a half adder", back: "Five." },
          { front: "NOR-only form of (A + B)(C + D)", back: "((A + B)' + (C + D)')', i.e. NOR of two NOR outputs." },
          { front: "Function generator using a decoder", back: "OR together the decoder outputs for the minterms of the function." },
          { front: "8:1 MUX with select 110", back: "Data input I6 reaches the output." },
          { front: "Java operators for gates on 0/1 ints", back: "& is AND, | is OR, ^ is XOR; 1 - x gives NOT." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A and B enter a NOR gate, and its output enters a NOT gate. The result is:",
            options: ["A + B", "AB", "(AB)'", "A'B'"],
            answer: 0,
            explain: "NOT of NOR undoes the inversion: ((A + B)')' = A + B.",
          },
          {
            kind: "mcq",
            q: "Which single circuit can directly route one of eight sensor signals to a single display wire?",
            options: ["8:1 multiplexer", "3-to-8 decoder", "Octal-to-binary encoder", "Full adder"],
            answer: 0,
            explain: "Routing one of many inputs to one output is the job of a multiplexer.",
          },
          {
            kind: "numeric",
            q: "How many outputs of a 3-to-8 decoder must be ORed to produce the carry-out of a full adder?",
            answer: 4,
            explain: "Cout = Σ(3, 5, 6, 7): four minterms, so four decoder outputs.",
          },
          {
            kind: "truefalse",
            q: "In a two-level NAND-NAND circuit for F = AB + CD, replacing all three NAND gates with NOR gates gives the same function.",
            answer: false,
            explain: "NOR-NOR gives ((A + B)' + (C + D)')' = (A + B)(C + D), a different function.",
          },
          {
            kind: "mcq",
            q: "What does this print? int x = 1, y = 1; System.out.println((x ^ y) + \"\" + (x & y));",
            options: ["01", "10", "1", "11"],
            answer: 0,
            explain: "x ^ y = 0 and x & y = 1; the empty string makes + join them as text: \"01\". This is the half adder for 1 + 1.",
          },
          {
            kind: "fill",
            q: "An encoder with 10 inputs needs at least ___ output lines.",
            answer: ["4", "four"],
            explain: t`3 lines give only 8 codes; 4 lines give 16, which is enough for 10.`,
          },
          {
            kind: "multi",
            q: "Which of these can be built using only NAND gates?",
            options: ["A NOT gate", "A full adder", "A 4:1 multiplexer", "An XOR gate"],
            answers: [0, 1, 2, 3],
            explain: "NAND is universal, so every combinational circuit, however large, can be built from NAND gates alone.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Objects and Classes                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-java-classes",
    title: "Objects and Classes",
    icon: "🧱",
    description: "Classes as blueprints, objects, instance and static members, access specifiers, constructors and this, objects as parameters and return values, and the ISC \"design a class\" question.",
    lessons: [
      {
        slug: "c12-cs-classes-constructors",
        title: "Classes, Objects and Constructors",
        summary: "Instance and class (static) variables, member methods, access specifiers, default and parameterised constructors, constructor overloading and the this keyword.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚇",
            caption: "Every Namma Metro card has its own holder and balance, but all cards follow the same rules for recharging and travelling. In Java, the rules are the class; each card is an object.",
          },
          {
            type: "text",
            md: "A **class** is a user-defined blueprint that describes the **data members** (state) and **member methods** (behaviour) shared by a group of objects. An **object** is an **instance** of a class, created at run time with the `new` operator. Each object gets its own copy of the **instance variables**.\n\nA variable declared `static` is a **class variable**: there is only **one** copy, shared by all objects of the class. A `static` method belongs to the class and can be called without an object, but it cannot use instance variables directly.",
          },
          {
            type: "table",
            headers: ["Access specifier", "Visible in the same class", "Same package", "Subclass (other package)", "Everywhere"],
            rows: [
              ["`private`", "yes", "no", "no", "no"],
              ["default (none written)", "yes", "yes", "no", "no"],
              ["`protected`", "yes", "yes", "yes", "no"],
              ["`public`", "yes", "yes", "yes", "yes"],
            ],
          },
          {
            type: "text",
            md: "Making data members `private` and giving `public` methods to use them is **encapsulation** (data hiding). Other classes cannot change the balance of a metro card directly; they must call `recharge()` or `travel()`, which apply the rules.\n\nA **constructor** is a special member method with the **same name as the class** and **no return type**, not even `void`. It runs automatically when an object is created and is used to initialise the data members.",
          },
          {
            type: "list",
            items: [
              "**Default (non-parameterised) constructor**: takes no arguments and sets fixed starting values. If a class has no constructor at all, Java supplies an empty default one.",
              "**Parameterised constructor**: takes arguments and copies them into the data members.",
              "**Constructor overloading**: a class may have several constructors with different parameter lists.",
              "**this**: a reference to the current object. `this.balance = balance;` copies the parameter into the data member when both have the same name.",
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "MetroCard.java",
            code: `public class MetroCard
{
    private String holder;
    private double balance;
    private static int cardsIssued = 0;

    public MetroCard()
    {
        holder = "Guest";
        balance = 0.0;
        cardsIssued++;
    }

    public MetroCard(String holder, double balance)
    {
        this.holder = holder;
        this.balance = balance;
        cardsIssued++;
    }

    public void recharge(double amt)
    {
        balance += amt;
    }

    public boolean travel(double fare)
    {
        if (fare > balance)
            return false;
        balance -= fare;
        return true;
    }

    public void display()
    {
        System.out.println(holder + " : Rs " + balance);
    }

    public static void main(String[] args)
    {
        MetroCard c1 = new MetroCard("Ananya", 100.0);
        MetroCard c2 = new MetroCard();
        c1.travel(35.0);
        c2.recharge(50.0);
        boolean ok = c2.travel(60.0);
        c1.display();
        c2.display();
        System.out.println("Trip allowed: " + ok);
        System.out.println("Cards issued: " + MetroCard.cardsIssued);
    }
}

/* Output:
Ananya : Rs 65.0
Guest : Rs 50.0
Trip allowed: false
Cards issued: 2
*/`,
          },
          {
            type: "example",
            title: "Tracing MetroCard",
            problem: "Explain each line of the output of MetroCard.java.",
            steps: [
              "c1 is made by the parameterised constructor (Ananya, 100.0); c2 by the default one (Guest, 0.0). Each constructor adds 1 to the shared cardsIssued, so it becomes 2.",
              "c1.travel(35.0): 35 ≤ 100, so the balance becomes 65.0 and true is returned (the result is not used).",
              "c2.recharge(50.0) makes c2's balance 50.0. c2.travel(60.0): 60 > 50, so false is returned and the balance stays 50.0.",
              "A double is printed with at least one decimal place, so 65.0 and 50.0 appear.",
            ],
            answer: "Ananya : Rs 65.0 / Guest : Rs 50.0 / Trip allowed: false / Cards issued: 2",
          },
          {
            type: "mistake",
            wrong: "A constructor should be declared void because it does not return anything: public void MetroCard() { ... }",
            right: "A constructor has **no return type at all**: public MetroCard() { ... }. Writing void makes it an ordinary method named MetroCard that is never called automatically.",
            why: "Java allows a method with the same name as the class, so the void version compiles without error. The object is then made by the hidden default constructor, and the data members silently keep their default values (null, 0.0).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Three MetroCard objects are created. How many copies of cardsIssued exist in memory?",
                options: ["1", "3", "0", "4"],
                answer: 0,
                explain: "cardsIssued is static, so a single copy is shared by all objects of the class.",
              },
              {
                kind: "truefalse",
                q: "A static method can directly use the instance variable balance of MetroCard.",
                answer: false,
                explain: "A static method runs without any particular object, so there is no balance to refer to. It must use an object reference, such as c1.balance.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Instance member or class (static) member?",
              groups: ["Instance member", "Class (static) member"],
              items: [
                { text: "holder of a MetroCard", group: 0, hint: "Each card has its own holder." },
                { text: "cardsIssued", group: 1, hint: "One count for the whole class." },
                { text: "balance", group: 0, hint: "Different for each card." },
                { text: "main(String[] args)", group: 1, hint: "It is declared static so Java can call it without an object." },
                { text: "recharge(double amt)", group: 0, hint: "It changes one card's balance, so it needs an object." },
                { text: "Math.sqrt()", group: 1, hint: "Called with the class name, no object." },
              ],
              explain: "Instance members belong to each object; static members belong to the class and are shared.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Short questions often ask: \"State two differences between a constructor and a method\" (same name as class, no return type, called automatically on new) or \"What is the use of the keyword this?\" (refers to the current object; separates a data member from a parameter of the same name). Learn crisp one-line answers.",
          },
          {
            type: "keypoints",
            items: [
              "A class is a blueprint of data members and member methods; an object is an instance made with new.",
              "Instance variables: one copy per object. Static (class) variables: one copy shared by all objects.",
              "private hides data inside the class: encapsulation.",
              "A constructor has the class's name, no return type, and runs automatically when an object is created.",
              "this refers to the current object.",
            ],
          },
        ],
        flashcards: [
          { front: "Class", back: "A user-defined blueprint that describes the data members and member methods of a group of objects." },
          { front: "Object", back: "An instance of a class, created at run time with new, with its own copy of the instance variables." },
          { front: "Class (static) variable", back: "A data member declared static; only one copy exists and it is shared by all objects." },
          { front: "Constructor", back: "A member method with the class's name and no return type, called automatically when an object is created, used to initialise data members." },
          { front: "Default constructor", back: "A constructor with no parameters. Java supplies an empty one only if the class defines no constructor." },
          { front: "this keyword", back: "A reference to the current object, e.g. this.balance = balance." },
          { front: "Encapsulation", back: "Wrapping data and methods into one unit (a class) and hiding the data with private." },
          { front: "Constructor overloading", back: "Several constructors in one class with different parameter lists." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a valid constructor header for class Student?",
            options: ["public Student(String n)", "public void Student(String n)", "public int Student()", "static Student()"],
            answer: 0,
            explain: "A constructor has the class name and no return type. A static constructor is not allowed in Java.",
          },
          {
            kind: "mcq",
            q: "A data member declared private can be accessed:",
            options: ["only inside its own class", "anywhere in the same package", "in subclasses only", "everywhere"],
            answer: 0,
            explain: "private is the most restrictive access specifier.",
          },
          {
            kind: "truefalse",
            q: "If a class defines a parameterised constructor only, the statement new ClassName() still compiles.",
            answer: false,
            explain: "Java gives the free default constructor only when the class has no constructor at all. Here it must be written by the programmer.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Objects are created at run time using the ___ operator.",
            answer: ["new"],
            explain: "new allocates memory for the object and calls a constructor.",
          },
          {
            kind: "mcq",
            q: "In MetroCard, if main called c2.travel(50.0) instead of c2.travel(60.0), what would display() print for c2?",
            options: ["Guest : Rs 0.0", "Guest : Rs 50.0", "Guest : Rs -10.0", "Guest : Rs 100.0"],
            answer: 0,
            explain: "50 is not greater than 50, so the trip is allowed and the balance becomes 50.0 − 50.0 = 0.0.",
          },
          {
            kind: "multi",
            q: "Which statements about constructors are true?",
            options: ["They can be overloaded", "They are called automatically when an object is created", "They must return the object", "They have the same name as the class"],
            answers: [0, 1, 3],
            explain: "A constructor never has a return statement with a value; new gives back the reference.",
          },
          {
            kind: "mcq",
            q: "What is printed? class K { static int n = 0; K() { n += 2; } } ... new K(); new K(); new K(); System.out.println(K.n);",
            options: ["6", "2", "0", "3"],
            answer: 0,
            explain: "Each of the three constructor calls adds 2 to the one shared n: 0 + 2 + 2 + 2 = 6.",
          },
        ],
      },
      {
        slug: "c12-cs-design-class",
        title: "Designing a Class the ISC Way",
        summary: "Reading an ISC class specification, writing data members, constructor and methods, writing main(), and passing and returning objects.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Most programming questions in the ISC theory paper look the same: a **class name**, a list of **data members** with their purpose, and a list of **member methods** with what each must do. You must write the class exactly to this specification, and often a `main()` method that creates an object and calls the methods.\n\nUse the names given in the question, the same return types and the same parameters. Examiners check each method against the specification.",
          },
          {
            type: "table",
            headers: ["Specification (as given)", "Purpose"],
            rows: [
              ["Class name: **Harshad**", "-"],
              ["Data member: int **num**", "to store a positive number"],
              ["**Harshad(int n)**", "parameterised constructor to store n in num"],
              ["int **sumOfDigits()**", "returns the sum of the digits of num"],
              ["boolean **isHarshad()**", "returns true if num is divisible by the sum of its digits, else false"],
              ["void **display()**", "prints whether num is a Harshad number, using isHarshad()"],
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "Harshad.java (sample input 156; also run with 157)",
            code: `import java.util.Scanner;

public class Harshad
{
    int num;

    Harshad(int n)
    {
        num = n;
    }

    int sumOfDigits()
    {
        int s = 0, t = num;
        while (t > 0)
        {
            s = s + t % 10;
            t = t / 10;
        }
        return s;
    }

    boolean isHarshad()
    {
        int s = sumOfDigits();
        return s != 0 && num % s == 0;
    }

    void display()
    {
        if (isHarshad())
            System.out.println(num + " IS A HARSHAD NUMBER");
        else
            System.out.println(num + " IS NOT A HARSHAD NUMBER");
    }

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        Harshad obj = new Harshad(n);
        obj.display();
    }
}

/* Sample run 1:
Enter a number: 156
156 IS A HARSHAD NUMBER

Sample run 2:
Enter a number: 157
157 IS NOT A HARSHAD NUMBER
*/`,
          },
          {
            type: "example",
            title: "Why 156 is Harshad and 157 is not",
            problem: "Trace sumOfDigits() and isHarshad() for num = 156 and num = 157.",
            steps: [
              "156: t = 156 → s = 6, t = 15 → s = 11, t = 1 → s = 12, t = 0. Sum = 12.",
              "156 % 12 = 0 (156 = 12 × 13), so isHarshad() returns true.",
              "157: the digit sum is 1 + 5 + 7 = 13, and 157 % 13 = 1, so it returns false.",
              "Note that sumOfDigits() works on a copy t, so num itself is not destroyed for later use.",
            ],
            answer: "156 IS A HARSHAD NUMBER; 157 IS NOT A HARSHAD NUMBER",
          },
          {
            type: "mistake",
            wrong: "In sumOfDigits(), loop directly on num: while (num > 0) { s += num % 10; num /= 10; }",
            right: "Copy num into a local variable (t) and destroy the copy. num must keep its value because isHarshad() and display() use it afterwards.",
            why: "The loop gives the right sum, so the method looks correct when tested alone. But afterwards num is 0, so num % s is 0 for every input and display() prints \"0 IS A HARSHAD NUMBER\".",
          },
          {
            type: "heading",
            text: "Objects as parameters and return values",
          },
          {
            type: "text",
            md: "A method can take an object as a parameter and can return a new object. ISC questions use this for adding times, distances, complex numbers or fractions: `Time add(Time t)` adds the time in `t` to the current object (`this`) and returns the result as a new `Time` object.\n\nPrimitive values (int, double, char, boolean) are **passed by value**: the method gets a copy. When an object is passed, the **reference** is copied, so the method can change the original object's data members through it.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Time.java",
            code: `public class Time
{
    int hh, mm;

    Time(int h, int m)
    {
        hh = h;
        mm = m;
    }

    // returns a NEW object holding the sum of this time and t
    Time add(Time t)
    {
        int total = (this.hh + t.hh) * 60 + this.mm + t.mm;
        return new Time(total / 60, total % 60);
    }

    void show()
    {
        System.out.println(hh + " h " + mm + " min");
    }

    public static void main(String[] args)
    {
        Time t1 = new Time(2, 45);
        Time t2 = new Time(1, 30);
        Time t3 = t1.add(t2);
        t1.show();
        t3.show();
    }
}

/* Output:
2 h 45 min
4 h 15 min
*/`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In Time.add(), what is the value of total when 2 h 45 min is added to 1 h 30 min?",
                answer: 255,
                unit: "min",
                explain: "(2 + 1) × 60 + 45 + 30 = 180 + 75 = 255 minutes, which is 4 h 15 min.",
              },
              {
                kind: "truefalse",
                q: "After t1.add(t2), the object t1 holds 4 h 15 min.",
                answer: false,
                explain: "add() builds and returns a new object; t1 is unchanged, as the output line 2 h 45 min shows.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the parts of an ISC class answer.",
              items: [
                "Import any package needed (java.util.Scanner)",
                "Class header with the given name",
                "Data members as specified",
                "Constructor(s)",
                "Member methods in the order given",
                "main() creating an object and calling the methods",
              ],
              explain: "Following the specification's order makes it easy for the examiner to tick each part.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "If the question says \"Define the class and write main()\", main() carries marks: create the object and call the methods in a sensible order. If it says \"main() need not be written\", don't waste time on it. In the practical exam, also write the algorithm, comments in the code and the variable description, then test with the sample inputs given.",
          },
          {
            type: "keypoints",
            items: [
              "Follow the specification exactly: names, return types and parameters.",
              "Work on a copy of a data member if the method would otherwise destroy it.",
              "Reuse methods: display() calls isHarshad(), which calls sumOfDigits().",
              "A method can return a new object (Time add(Time t)).",
              "Primitives are passed by value; for objects, the reference is copied, so the object can be changed.",
            ],
          },
        ],
        flashcards: [
          { front: "Harshad (Niven) number", back: "A number divisible by the sum of its digits, e.g. 156 (sum 12, 156 = 12 × 13)." },
          { front: "Why copy num before extracting digits?", back: "So that num keeps its value for the other methods that use it later." },
          { front: "Pass by value", back: "The method receives a copy of a primitive argument; changes do not affect the caller's variable." },
          { front: "Passing an object", back: "The reference is copied; the method can change the object's data members through it." },
          { front: "Signature of a method that adds two Time objects", back: "Time add(Time t): uses this and t, returns a new Time object." },
          { front: "Parts of an ISC practical answer", back: "Algorithm, program with comments, variable description and output for the sample inputs." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these numbers is a Harshad number?",
            options: ["111", "113", "115", "119"],
            answer: 0,
            explain: "111: digit sum 3, 111 = 3 × 37. 113 (sum 5), 115 (sum 7, 115 = 7 × 16 + 3) and 119 (sum 11, 119 = 11 × 10 + 9) are not.",
          },
          {
            kind: "mcq",
            q: "A specification says: \"Fraction sum(Fraction f): returns the sum of the current object and f\". The current object is referred to by:",
            options: ["this", "f", "super", "new Fraction()"],
            answer: 0,
            explain: "this is the object on which sum() is called; f is the parameter.",
          },
          {
            kind: "truefalse",
            q: "A method whose return type is Time must end by returning a Time object (or null).",
            answer: true,
            explain: "Every path through the method must return a value of the declared type.",
          },
          {
            kind: "numeric",
            q: "What does sumOfDigits() return when num = 4096?",
            answer: 19,
            explain: "4 + 0 + 9 + 6 = 19.",
          },
          {
            kind: "mcq",
            q: "void twice(int x) { x = x * 2; } is called as twice(a) with a = 7. After the call, a is:",
            options: ["7", "14", "0", "it depends on the class"],
            answer: 0,
            explain: "int is passed by value, so only the copy x is doubled.",
          },
          {
            kind: "fill",
            q: "To read an int from the keyboard in BlueJ, the program imports java.util.___ .",
            answer: ["Scanner"],
            explain: "Scanner sc = new Scanner(System.in); then sc.nextInt().",
          },
          {
            kind: "mcq",
            q: "In Time.add(), what object does the statement new Time(total / 60, total % 60) create for total = 125?",
            options: ["2 h 5 min", "2 h 25 min", "1 h 65 min", "125 h 0 min"],
            answer: 0,
            explain: "125 / 60 = 2 (integer division) and 125 % 60 = 5.",
          },
        ],
      },
      {
        slug: "c12-cs-classes-practice",
        title: "Objects and Classes: Board Practice",
        summary: "Output tracing with static and instance variables, overloaded methods and object parameters, short-answer questions, and a full class to write.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Output questions on classes test three ideas: which variables are shared (static), what a method receives (a copy or a reference), and which overloaded method is chosen. Trace the program below on paper, one statement at a time, keeping a table of every variable.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Trace.java: predict the output before reading the trace",
            code: `public class Trace
{
    int x;
    static int y;

    Trace(int a)
    {
        x = a;
        y = y + a;
    }

    void change(int x)
    {
        x = x * 2;
        y++;
    }

    void change(Trace t)
    {
        t.x = t.x * 2;
    }

    public static void main(String[] args)
    {
        Trace p = new Trace(3);
        Trace q = new Trace(5);
        p.change(p.x);
        q.change(q);
        System.out.println(p.x + " " + q.x + " " + Trace.y);
    }
}

/* Output:
3 10 9
*/`,
          },
          {
            type: "example",
            title: "Tracing Trace.java",
            problem: "Explain the output 3 10 9.",
            steps: [
              "new Trace(3): p.x = 3, y = 0 + 3 = 3. new Trace(5): q.x = 5, y = 3 + 5 = 8 (one shared y).",
              "p.change(p.x) calls change(int): the parameter x (a copy, 3) **hides** the data member x. The copy becomes 6 and is thrown away; y becomes 9. p.x stays 3.",
              "q.change(q) calls change(Trace): t refers to the same object as q, so q.x becomes 10.",
              "The print statement gives p.x, q.x, y.",
            ],
            answer: "3 10 9",
          },
          {
            type: "mistake",
            wrong: "In change(int x), the statement x = x * 2 doubles the object's data member x.",
            right: "Inside change(int x) the name x means the **parameter**, which hides the data member. To change the data member you would write this.x = x * 2.",
            why: "The two variables have the same name, so they look like one. Java always picks the nearest (local) declaration first; this.x is needed to reach the instance variable.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "If main also called p.change(p) before printing, the output would be:",
                options: ["6 10 9", "3 10 9", "6 10 10", "6 20 9"],
                answer: 0,
                explain: "change(Trace) doubles p.x to 6 and does not touch y.",
              },
            ],
          },
          {
            type: "heading",
            text: "Write a class",
          },
          {
            type: "text",
            md: "**Question.** A class **Rational** stores a fraction in lowest terms. Data members: int **num**, int **den**. Methods: **Rational(int n, int d)**: stores n and d and reduces the fraction; int **gcd(int a, int b)**: returns the HCF of a and b; void **reduce()**: divides num and den by their HCF; Rational **multiply(Rational r)**: returns the product of the current fraction and r, in lowest terms; void **display()**: prints the fraction as num/den. Write main() to multiply 2/6 by 9/4.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Rational.java: a model answer",
            code: `public class Rational
{
    int num, den;

    Rational(int n, int d)
    {
        num = n;
        den = d;
        reduce();
    }

    int gcd(int a, int b)
    {
        while (b != 0)
        {
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    void reduce()
    {
        int g = gcd(num, den);
        num = num / g;
        den = den / g;
    }

    Rational multiply(Rational r)
    {
        return new Rational(num * r.num, den * r.den);
    }

    void display()
    {
        System.out.println(num + "/" + den);
    }

    public static void main(String[] args)
    {
        Rational a = new Rational(2, 6);
        Rational b = new Rational(9, 4);
        a.display();
        a.multiply(b).display();
    }
}

/* Output:
1/3
3/4
*/`,
          },
          {
            type: "example",
            title: "Checking the model answer",
            problem: "Trace the creation of a and the call a.multiply(b).",
            steps: [
              "new Rational(2, 6): gcd(2, 6) → (6, 2) → (2, 0) → 2. num = 1, den = 3.",
              "b = 9/4 is already in lowest terms (gcd = 1).",
              "multiply: new Rational(1 × 9, 3 × 4) = new Rational(9, 12). gcd(9, 12) = 3, so 3/4.",
              "a.multiply(b).display() calls display() on the returned object directly.",
            ],
            answer: "1/3, then 3/4",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What does gcd(48, 18) return in Rational?",
              emoji: "➗",
              options: ["6", "2", "18", "3"],
              answer: 0,
              trap: 1,
              explain: "(48, 18) → (18, 12) → (12, 6) → (6, 0), so 6. The trap 2 comes from stopping at the first common factor found instead of finishing Euclid's steps.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "In an output question, write a small table of variables as you go and show the final output in a box. When a print statement mixes numbers and strings, remember that + works left to right: 2 + 3 + \" \" gives \"5 \", but \" \" + 2 + 3 gives \" 23\".",
          },
          {
            type: "keypoints",
            items: [
              "Static variables accumulate across all objects; trace one shared copy.",
              "A parameter with the same name as a data member hides it; use this to reach the member.",
              "Overloading is resolved by the argument types: change(int) vs change(Trace).",
              "Passing an object lets the method change that object.",
              "Calling a method on a returned object (a.multiply(b).display()) is allowed.",
            ],
          },
        ],
        flashcards: [
          { front: "What does a parameter named like a data member do?", back: "It hides (shadows) the data member inside that method; this.name reaches the member." },
          { front: "How does Java choose between overloaded methods?", back: "By the number and types of the arguments in the call (compile-time polymorphism)." },
          { front: "Euclid's HCF step", back: "Replace (a, b) by (b, a % b) until b is 0; then a is the HCF." },
          { front: "2 + 3 + \"A\" in Java", back: "\"5A\": the addition happens first, then joining with the string." },
          { front: "\"A\" + 2 + 3 in Java", back: "\"A23\": once a String appears, + joins as text from left to right." },
          { front: "Static variable after creating 3 objects whose constructor does y++", back: "3, because all objects share one y." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "class N { int a = 2; static int b = 2; N() { a++; b++; } } After new N(); new N(); what are the last object's a and N.b?",
            options: ["3 and 4", "4 and 4", "3 and 3", "4 and 3"],
            answer: 0,
            explain: "Each object starts with its own a = 2 and makes it 3; the shared b goes 2 → 3 → 4.",
          },
          {
            kind: "mcq",
            q: "What is printed by System.out.println(\"Sum=\" + 4 + 5);?",
            options: ["Sum=45", "Sum=9", "Sum= 9", "Error"],
            answer: 0,
            explain: "\"Sum=\" + 4 gives \"Sum=4\", then + 5 gives \"Sum=45\".",
          },
          {
            kind: "numeric",
            q: "Rational r = new Rational(15, 35); what is r.den after the constructor runs?",
            answer: 7,
            explain: "gcd(15, 35) = 5, so 15/35 becomes 3/7.",
          },
          {
            kind: "truefalse",
            q: "The statement a.multiply(b).display(); creates a third Rational object.",
            answer: true,
            explain: "multiply() returns a new Rational object, which is displayed and then has no reference left.",
          },
          {
            kind: "fill",
            q: "Inside an instance method, the keyword ___ refers to the object that called the method.",
            answer: ["this"],
            explain: "this is the current object.",
          },
          {
            kind: "mcq",
            q: "void swap(Trace a, Trace b) { int t = a.x; a.x = b.x; b.x = t; } With p.x = 3 and q.x = 5, swap(p, q) makes:",
            options: ["p.x = 5, q.x = 3", "no change", "p.x = 3, q.x = 3", "a compile error"],
            answer: 0,
            explain: "a and b refer to the original objects, so their data members really are swapped.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which statement about Trace.y is correct?",
            options: ["It can be read as Trace.y without any object", "Each object has its own y", "It cannot be changed by instance methods", "It must be private"],
            answer: 0,
            explain: "A static variable belongs to the class, so the class name is enough. Instance methods may change it, as change(int) does.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Arrays and Strings                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-java-arrays-strings",
    title: "Arrays and Strings",
    icon: "🧮",
    description: "One- and two-dimensional arrays inside classes, linear and binary search, selection and bubble sort, matrix operations, String and StringBuffer methods, and word-by-word sentence processing.",
    lessons: [
      {
        slug: "c12-cs-arrays-search-sort",
        title: "Arrays: Searching, Sorting and Matrices",
        summary: "Arrays as data members, binary search, selection sort, two-dimensional arrays, diagonals and transpose, with traced ISC-style class programs.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🗄️",
            caption: "A school locker room has numbered lockers in a row: locker 0, locker 1, locker 2... An array is the same idea in memory: many values of one type, reached by their index.",
          },
          {
            type: "text",
            md: "An **array** is a collection of elements of the **same type**, stored in consecutive memory locations and reached by an **index** (subscript) starting from 0. `int arr[] = new int[n];` creates n elements, all 0 at first. `arr.length` gives the size.\n\nA **two-dimensional array** `int a[][] = new int[m][n];` is a table of m rows and n columns. `a.length` gives the number of rows and `a[0].length` the number of columns. A square matrix has m = n.",
          },
          {
            type: "table",
            headers: ["Technique", "Idea", "Needs sorted data?", "Comparisons (worst case, n items)"],
            rows: [
              ["Linear search", "check each element in turn", "no", "n"],
              ["Binary search", "compare with the middle; discard half each time", "yes", t`about $\log_2 n$`],
              ["Selection sort", "find the smallest of the unsorted part; swap it to the front", "-", t`$\frac{n(n-1)}{2}$`],
              ["Bubble sort", "swap neighbours that are out of order; the largest sinks to the end each pass", "-", t`$\frac{n(n-1)}{2}$`],
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "SearchSort.java",
            code: `public class SearchSort
{
    int arr[];
    int n;

    SearchSort(int a[])
    {
        n = a.length;
        arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = a[i];
    }

    // selection sort, ascending
    void sort()
    {
        for (int i = 0; i < n - 1; i++)
        {
            int min = i;
            for (int j = i + 1; j < n; j++)
                if (arr[j] < arr[min])
                    min = j;
            int t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
    }

    // binary search on the sorted array; returns index or -1
    int binSearch(int key)
    {
        int lb = 0, ub = n - 1;
        while (lb <= ub)
        {
            int mid = (lb + ub) / 2;
            if (arr[mid] == key)
                return mid;
            else if (arr[mid] < key)
                lb = mid + 1;
            else
                ub = mid - 1;
        }
        return -1;
    }

    void display()
    {
        for (int i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        int data[] = {42, 17, 8, 99, 23, 61};
        SearchSort ob = new SearchSort(data);
        ob.sort();
        ob.display();
        System.out.println("61 found at index " + ob.binSearch(61));
        System.out.println("50 found at index " + ob.binSearch(50));
    }
}

/* Output:
8 17 23 42 61 99
61 found at index 4
50 found at index -1
*/`,
          },
          {
            type: "example",
            title: "Tracing binSearch(50)",
            problem: "The sorted array is 8 17 23 42 61 99 (indices 0 to 5). Trace binSearch(50).",
            steps: [
              "lb = 0, ub = 5, mid = 2: arr[2] = 23 < 50, so lb = 3.",
              "lb = 3, ub = 5, mid = 4: arr[4] = 61 > 50, so ub = 3.",
              "lb = 3, ub = 3, mid = 3: arr[3] = 42 < 50, so lb = 4.",
              "Now lb = 4 > ub = 3, the loop ends and -1 is returned.",
            ],
            answer: "Three comparisons with the middle; 50 is not present, so -1.",
          },
          {
            type: "mistake",
            wrong: "Apply binary search to the array as entered (42, 17, 8, 99, 23, 61) to save the time spent sorting.",
            right: "Binary search works only on **sorted** data. Sort first (or use linear search on unsorted data).",
            why: "Binary search throws away half of the array after each comparison, assuming everything on that side is too small or too large. In unsorted data that assumption is false, so it can miss an element that is present: on the unsorted array, binSearch(17) checks 8, then 23, then 99, and returns -1 although 17 is at index 1.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Selection sort is applied to 6 elements. How many passes of the outer loop are made?",
                answer: 5,
                explain: "The outer loop runs for i = 0 to n − 2, which is n − 1 = 5 passes. The last element is then automatically in place.",
              },
            ],
          },
          {
            type: "heading",
            text: "Two-dimensional arrays",
          },
          {
            type: "text",
            md: "In a square matrix of size m, the **left (main) diagonal** has elements a[i][i], and the **right diagonal** has elements a[i][m − 1 − i]. The **transpose** swaps rows and columns: t[j][i] = a[i][j]. **Boundary elements** are those in row 0, row m − 1, column 0 or column m − 1.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Matrix.java",
            code: t`public class Matrix
{
    int a[][];
    int m;

    Matrix(int x[][])
    {
        m = x.length;
        a = new int[m][m];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < m; j++)
                a[i][j] = x[i][j];
    }

    int leftDiagonal()
    {
        int s = 0;
        for (int i = 0; i < m; i++)
            s += a[i][i];
        return s;
    }

    int rightDiagonal()
    {
        int s = 0;
        for (int i = 0; i < m; i++)
            s += a[i][m - 1 - i];
        return s;
    }

    Matrix transpose()
    {
        int t[][] = new int[m][m];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < m; j++)
                t[j][i] = a[i][j];
        return new Matrix(t);
    }

    void display()
    {
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < m; j++)
                System.out.print(a[i][j] + "\t");
            System.out.println();
        }
    }

    public static void main(String[] args)
    {
        int x[][] = {{2, 7, 1}, {5, 3, 8}, {4, 6, 9}};
        Matrix p = new Matrix(x);
        System.out.println("Left diagonal sum = " + p.leftDiagonal());
        System.out.println("Right diagonal sum = " + p.rightDiagonal());
        p.transpose().display();
    }
}

/* Output (columns separated by tabs):
Left diagonal sum = 14
Right diagonal sum = 8
2   5   4
7   3   6
1   8   9
*/`,
          },
          {
            type: "text",
            md: t`**Address calculation.** An array is stored in consecutive memory cells. If the first element is at the **base address** B and each element takes W bytes, element A[i] of an array with lower bound $L$ is at $B + W(i - L)$.

A 2D array A[$L_r$..$U_r$, $L_c$..$U_c$] has $R = U_r - L_r + 1$ rows and $C = U_c - L_c + 1$ columns. In **row-major** order (row by row, as C stores arrays), A[i][j] is at $B + W[(i - L_r)C + (j - L_c)]$. In **column-major** order (column by column), it is at $B + W[(j - L_c)R + (i - L_r)]$. Theory papers give arrays with any lower bounds, even negative ones, although Java indices always start at 0.`,
          },
          {
            type: "example",
            title: "Address of an element",
            problem: "An array M[−3..5, 2..12] stores 4-byte elements from base address 2500. Find the address of M[2][7] (a) in row-major order, (b) in column-major order.",
            steps: [
              "R = 5 − (−3) + 1 = 9 rows; C = 12 − 2 + 1 = 11 columns.",
              "Row-major: elements before M[2][7] = (2 − (−3)) × 11 + (7 − 2) = 55 + 5 = 60. Address = 2500 + 4 × 60 = 2740.",
              "Column-major: elements before it = (7 − 2) × 9 + (2 − (−3)) = 45 + 5 = 50. Address = 2500 + 4 × 50 = 2700.",
            ],
            answer: "(a) 2740 (b) 2700",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each 3 × 3 matrix part to its index rule.",
              pairs: [
                ["Left diagonal", "a[i][i]"],
                ["Right diagonal", "a[i][2 - i]"],
                ["Last row", "a[2][j]"],
                ["First column", "a[i][0]"],
                ["Transpose element", "t[j][i] = a[i][j]"],
              ],
              explain: "For size m, the right diagonal is a[i][m − 1 − i]; with m = 3 that is a[i][2 − i].",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Matrix programs in the practical exam usually ask you to accept M and N, check that they are in range (for example 2 < M < 10), and print \"INVALID INPUT\" otherwise. Do the range check before creating the array, and display the original matrix before the result.",
          },
          {
            type: "keypoints",
            items: [
              "Indices run from 0 to length − 1; a.length is rows, a[0].length is columns.",
              "Binary search needs sorted data and halves the search range each step.",
              "Selection sort: n − 1 passes, one swap per pass.",
              "Diagonals of an m × m matrix: a[i][i] and a[i][m − 1 − i].",
              "Copy an array element by element if the object must have its own copy.",
            ],
          },
        ],
        flashcards: [
          { front: "Index of the last element of an array arr", back: "arr.length − 1." },
          { front: "Condition for binary search", back: "The array must be sorted." },
          { front: "mid in binary search", back: "(lb + ub) / 2, using integer division." },
          { front: "Idea of selection sort", back: "In each pass, find the smallest element of the unsorted part and swap it into the first unsorted position." },
          { front: "Idea of bubble sort", back: "Compare neighbours and swap if out of order; after each pass the largest remaining element is at the end." },
          { front: "Right diagonal of an m × m matrix", back: "a[i][m − 1 − i] for i = 0 to m − 1." },
          { front: "Number of columns of a[][]", back: "a[0].length." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "int a[] = new int[5]; What is the value of a[4] before anything is stored?",
            options: ["0", "null", "garbage", "an error"],
            answer: 0,
            explain: "Numeric array elements are given the default value 0.",
          },
          {
            kind: "numeric",
            q: "For a sorted array of 1000 elements, at most how many comparisons does binary search make? (Use the smallest k with 2^k > 1000.)",
            answer: 10,
            explain: t`$2^{10} = 1024 > 1000$, so at most 10 halvings are needed.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "After the first pass of selection sort (ascending) on 42, 17, 8, 99, 23, 61, the array is:",
            options: ["8 17 42 99 23 61", "17 8 42 23 61 99", "8 17 23 42 61 99", "17 42 8 99 23 61"],
            answer: 0,
            explain: "The smallest, 8 at index 2, is swapped with 42 at index 0. Option 2 is what one bubble sort pass would give.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In Java, a two-dimensional array is an array of one-dimensional arrays.",
            answer: true,
            explain: "a[i] is itself a 1D array (row i), which is why a[0].length gives the number of columns.",
          },
          {
            kind: "mcq",
            q: "For the matrix {{2, 7, 1}, {5, 3, 8}, {4, 6, 9}}, what is the sum of its boundary elements?",
            options: ["42", "45", "14", "36"],
            answer: 0,
            explain: "Total of all elements is 45; the only non-boundary element is the centre, 3. So 45 − 3 = 42.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A[1..10] stores 2-byte elements from base address 1000. What is the address of A[7]?",
            answer: 1012,
            explain: "1000 + 2 × (7 − 1) = 1012.",
          },
          {
            kind: "fill",
            q: "In the transpose, element a[1][2] moves to position t[___][1].",
            answer: ["2"],
            explain: "t[j][i] = a[i][j], so a[1][2] goes to t[2][1].",
          },
          {
            kind: "multi",
            q: "Which of these must be true before binSearch(key) is called in SearchSort?",
            options: ["sort() has been called", "key is inside the array", "n > 0", "arr has been created by the constructor"],
            answers: [0, 3],
            explain: "The array must exist and be sorted. The key may be absent (the method then returns -1), and n = 0 simply returns -1.",
          },
        ],
      },
      {
        slug: "c12-cs-strings-methods",
        title: "Strings, String Methods and Sentence Processing",
        summary: "String immutability, the common String and Character methods, StringBuffer, splitting a sentence into words with StringTokenizer, and a full ISC-style word-processing class.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "A **String** is a sequence of characters, indexed from 0. Strings in Java are **immutable**: once made, a String object cannot be changed. Methods such as `toUpperCase()` or `replace()` return a **new** String; the original is untouched.\n\n**StringBuffer** is a mutable sequence of characters. Its methods `append()`, `insert()`, `reverse()`, `setCharAt()` and `deleteCharAt()` change the same object.",
          },
          {
            type: "table",
            headers: ["Method", "Returns", "Example (s = \"QUEST ACADEMY\")"],
            rows: [
              ["`length()`", "number of characters", "13"],
              ["`charAt(i)`", "the char at index i", "`s.charAt(4)` → 'T'"],
              ["`indexOf(ch)` / `lastIndexOf(ch)`", "first / last index of ch, or -1", "'A' → 6; last 'E' → 10"],
              ["`substring(b, e)`", "chars from index b to e − 1", "`s.substring(6, 9)` → \"ACA\""],
              ["`compareTo(t)`", "0 if equal; else difference of the first unequal chars (or of lengths)", "\"ant\".compareTo(\"apple\") → 'n' − 'p' = −2"],
              ["`equals(t)` / `equalsIgnoreCase(t)`", "true/false", "\"Java\".equals(\"JAVA\") → false"],
              ["`replace(a, b)`", "new String with every a replaced by b", "\"QUEST @C@DEMY\""],
              ["`trim()`, `toUpperCase()`, `toLowerCase()`", "new String", "-"],
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "StrTrace.java: a typical output question",
            code: `public class StrTrace
{
    public static void main(String[] args)
    {
        String s = "QUEST ACADEMY";
        System.out.println(s.indexOf('A'));
        System.out.println(s.substring(6, 9));
        System.out.println(s.charAt(4) + s.length());
        System.out.println("ant".compareTo("apple"));
        System.out.println(s.lastIndexOf('E'));
        System.out.println(s.replace('A', '@'));
        System.out.println("" + s.charAt(0) + s.charAt(6));
        System.out.println("Java".equals("JAVA") + " " + "Java".equalsIgnoreCase("JAVA"));
    }
}

/* Output:
6
ACA
97
-2
10
QUEST @C@DEMY
QA
false true
*/`,
          },
          {
            type: "mistake",
            wrong: "s.charAt(4) + s.length() prints T13.",
            right: "It prints **97**. charAt() returns a **char**, and char + int is arithmetic: 'T' has code 84, and 84 + 13 = 97.",
            why: "Strings join with +, so learners expect joining here too. But there is no String in this expression, only a char and an int. Compare the next line, \"\" + s.charAt(0) + s.charAt(6), where the empty String forces joining and gives QA.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What does \"MANGO\".compareTo(\"MAN\") return?",
                options: ["2", "-2", "0", "71"],
                answer: 0,
                explain: "The first three characters match and then \"MAN\" ends, so the result is the difference in lengths: 5 − 3 = 2.",
              },
            ],
          },
          {
            type: "heading",
            text: "Processing a sentence word by word",
          },
          {
            type: "text",
            md: "ISC string programs usually give a sentence that ends with '.', '?' or '!' and ask for work on each word. A **StringTokenizer** (in java.util) splits a String at the delimiter characters you give it: `new StringTokenizer(sen, \" .?!\")` uses space and the three end marks. `countTokens()` gives the number of words and `nextToken()` returns them one by one. `sen.split(\" \")` is another way to get the words as an array.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Sentence.java (input: MADAM AND ARORA WENT TO NOON MEETING.)",
            code: `import java.util.Scanner;
import java.util.StringTokenizer;

public class Sentence
{
    String sen;
    String words[];
    int count;

    Sentence(String s)
    {
        sen = s.trim().toUpperCase();
        count = 0;
    }

    // splits the sentence (ending in . ? or !) into words
    void extract()
    {
        StringTokenizer st = new StringTokenizer(sen, " .?!");
        count = st.countTokens();
        words = new String[count];
        for (int i = 0; i < count; i++)
            words[i] = st.nextToken();
    }

    boolean isPalin(String w)
    {
        int i = 0, j = w.length() - 1;
        while (i < j)
        {
            if (w.charAt(i) != w.charAt(j))
                return false;
            i++;
            j--;
        }
        return true;
    }

    int palinCount()
    {
        int c = 0;
        for (int i = 0; i < count; i++)
            if (isPalin(words[i]))
                c++;
        return c;
    }

    // bubble sort of the words, alphabetical order
    void sortWords()
    {
        for (int i = 0; i < count - 1; i++)
            for (int j = 0; j < count - 1 - i; j++)
                if (words[j].compareTo(words[j + 1]) > 0)
                {
                    String t = words[j];
                    words[j] = words[j + 1];
                    words[j + 1] = t;
                }
    }

    void display()
    {
        for (int i = 0; i < count; i++)
            System.out.print(words[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        char last = s.charAt(s.length() - 1);
        if (last != '.' && last != '?' && last != '!')
        {
            System.out.println("INVALID INPUT");
            return;
        }
        Sentence ob = new Sentence(s);
        ob.extract();
        System.out.println("PALINDROMIC WORDS: " + ob.palinCount());
        ob.sortWords();
        ob.display();
    }
}

/* Output:
PALINDROMIC WORDS: 3
AND ARORA MADAM MEETING NOON TO WENT

With input "hello there" (no end mark):
INVALID INPUT
*/`,
          },
          {
            type: "example",
            title: "Why the words sort this way",
            problem: "Explain the sorted order AND ARORA MADAM MEETING NOON TO WENT.",
            steps: [
              "compareTo() compares character codes from the left. AND and ARORA both start with A; at index 1, 'N' (78) < 'R' (82), so AND comes first.",
              "MADAM and MEETING: 'A' < 'E' at index 1, so MADAM is first.",
              "The palindromes counted were MADAM, ARORA and NOON, giving 3.",
            ],
            answer: "Dictionary order by character codes; 3 palindromic words.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "String s = \"rail\"; s.toUpperCase(); System.out.println(s); prints:",
              emoji: "🔤",
              options: ["rail", "RAIL", "Rail", "an error"],
              answer: 0,
              trap: 1,
              explain: "Strings are immutable: toUpperCase() returns a new String, which is thrown away here. Write s = s.toUpperCase(); to keep it.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Check the input format first and print exactly the message the question asks for (\"INVALID INPUT\"). Convert the sentence to one case before comparing letters, and remember that the end mark is not part of the last word: remove it or use it as a delimiter.",
          },
          {
            type: "keypoints",
            items: [
              "Strings are immutable; their methods return new Strings. StringBuffer is mutable.",
              "char + int is arithmetic; start with \"\" to force joining.",
              "compareTo() returns the difference of the first unequal characters, or of the lengths.",
              "StringTokenizer(sen, \" .?!\") splits a sentence into words; countTokens() counts them.",
              "substring(b, e) excludes index e.",
            ],
          },
        ],
        flashcards: [
          { front: "Immutable String", back: "A String object cannot be changed after creation; methods return new String objects." },
          { front: "StringBuffer", back: "A mutable sequence of characters with append(), insert(), reverse(), setCharAt(), deleteCharAt()." },
          { front: "substring(2, 5) of \"KOLKATA\"", back: "\"LKA\" (indices 2, 3, 4)." },
          { front: "\"ant\".compareTo(\"apple\")", back: "−2: first unequal characters 'n' (110) and 'p' (112)." },
          { front: "StringTokenizer methods", back: "countTokens(), hasMoreTokens(), nextToken()." },
          { front: "'A' + 1 in Java", back: "66: char + int gives an int." },
          { front: "Check if a word is a palindrome", back: "Compare charAt(i) with charAt(j) from both ends, moving inwards until i ≥ j." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "\"BENGALURU\".indexOf('U') returns:",
            options: ["6", "8", "5", "-1"],
            answer: 0,
            explain: "B0 E1 N2 G3 A4 L5 U6 R7 U8: the first U is at index 6. lastIndexOf('U') would give 8.",
          },
          {
            kind: "mcq",
            q: "What does System.out.println('a' + 'b'); print?",
            options: ["195", "ab", "a+b", "an error"],
            answer: 0,
            explain: "Two chars added give an int: 97 + 98 = 195.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "StringBuffer sb = new StringBuffer(\"ISC\"); sb.reverse(); changes sb itself to \"CSI\".",
            answer: true,
            explain: "StringBuffer is mutable; reverse() changes the same object.",
          },
          {
            kind: "numeric",
            q: "How many tokens does new StringTokenizer(\"IS IT RAINING?\", \" ?\") give?",
            answer: 3,
            explain: "IS, IT and RAINING; the space and ? are delimiters and are not returned.",
          },
          {
            kind: "fill",
            q: "\"COMPUTER\".substring(3) returns ___.",
            answer: ["PUTER"],
            explain: "From index 3 to the end: C0 O1 M2 P3 U4 T5 E6 R7.",
          },
          {
            kind: "mcq",
            q: "Which call returns true?",
            options: ["\"Delhi\".equalsIgnoreCase(\"DELHI\")", "\"Delhi\".equals(\"DELHI\")", "\"Delhi\".compareTo(\"DELHI\") == 0", "\"Delhi\" == \"DELHI\""],
            answer: 0,
            explain: "Only equalsIgnoreCase() ignores the difference between capital and small letters.",
          },
          {
            kind: "mcq",
            q: "In Sentence.java, why is the sentence converted with toUpperCase() in the constructor?",
            options: ["So that words such as \"Madam\" are compared letter-for-letter correctly", "Because StringTokenizer needs capitals", "Because compareTo() cannot handle small letters", "To remove the full stop"],
            answer: 0,
            explain: "'M' and 'm' have different codes, so mixed case would make \"Madam\" fail the palindrome test and upset the sorting.",
          },
        ],
      },
      {
        slug: "c12-cs-arrays-strings-practice",
        title: "Arrays and Strings: Board Practice",
        summary: "Merging sorted arrays inside a class, output questions on String methods and array loops, and a sentence program to plan and write.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Board questions on this chapter often ask for an object that holds an array, and a method that combines two such objects. The class below merges two sorted arrays into one sorted array in a single pass.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Merger.java",
            code: `public class Merger
{
    int arr[];
    int n;

    Merger(int a[])
    {
        arr = a;
        n = a.length;
    }

    // merges this sorted array with sorted array m into a new sorted Merger
    Merger merge(Merger m)
    {
        int c[] = new int[n + m.n];
        int i = 0, j = 0, k = 0;
        while (i < n && j < m.n)
        {
            if (arr[i] <= m.arr[j])
                c[k++] = arr[i++];
            else
                c[k++] = m.arr[j++];
        }
        while (i < n)
            c[k++] = arr[i++];
        while (j < m.n)
            c[k++] = m.arr[j++];
        return new Merger(c);
    }

    void display()
    {
        for (int i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        Merger p = new Merger(new int[] {3, 9, 14, 20});
        Merger q = new Merger(new int[] {1, 9, 12});
        p.merge(q).display();
    }
}

/* Output:
1 3 9 9 12 14 20
*/`,
          },
          {
            type: "example",
            title: "Tracing merge()",
            problem: "Trace p.merge(q) for p = 3 9 14 20 and q = 1 9 12.",
            steps: [
              "1 < 3 → take 1 from q. 3 < 9 → take 3 from p. 9 ≤ 9 → take p's 9 (the <= keeps equal items from p first).",
              "q's 9 < 14 → take 9. 12 < 14 → take 12; q is now used up (j = 3).",
              "The first while loop stops. The second copies the rest of p: 14, 20. The third does nothing.",
            ],
            answer: "1 3 9 9 12 14 20 (7 elements, one pass, no sorting needed)",
          },
          {
            type: "mistake",
            wrong: "After the main while loop, the merge is complete, so the leftover loops are not needed.",
            right: "The main loop stops as soon as **one** array runs out. The other may still have elements, and the two leftover loops copy them.",
            why: "With the sample data the last elements happen to come from p, so forgetting only the q loop still prints the right answer. Test with an input where the other array finishes last to catch the bug.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In p.merge(q) above, what is the value of k when the method returns?",
                answer: 7,
                explain: "k counts the elements copied into c: 4 + 3 = 7.",
              },
            ],
          },
          {
            type: "example",
            title: "Output question: strings",
            problem: "Give the output: String w = \"MYSURU\"; String r = \"\"; for (int i = w.length() - 1; i >= 0; i -= 2) r = r + w.charAt(i); System.out.println(r + r.length());",
            steps: [
              "w has length 6: M0 Y1 S2 U3 R4 U5.",
              "i = 5 → 'U', i = 3 → 'U', i = 1 → 'Y'. So r = \"UUY\".",
              "r + r.length() joins the String with 3.",
            ],
            answer: "UUY3",
          },
          {
            type: "example",
            title: "Output question: arrays",
            problem: "Give the output: int a[] = {4, 1, 3, 2}; for (int i = 0; i < 3; i++) if (a[i] > a[i + 1]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; } then print the array.",
            steps: [
              "i = 0: 4 > 1, swap → 1 4 3 2.",
              "i = 1: 4 > 3, swap → 1 3 4 2.",
              "i = 2: 4 > 2, swap → 1 3 2 4.",
            ],
            answer: "1 3 2 4: one pass of bubble sort moves the largest element to the end.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Plan: print each word of a sentence with its first letter last.",
              items: [
                "Accept the sentence and check its end mark",
                "Split it into words with StringTokenizer",
                "For each word, form substring(1) + charAt(0)",
                "Join the new words with spaces",
                "Print the original and the new sentence",
              ],
              explain: "Validate, split, change each word, rebuild, then display. \"RAIN IS COMING.\" would become \"AINR SI OMINGC\".",
            },
          },
          {
            type: "heading",
            text: "Program to write",
          },
          {
            type: "text",
            md: "**Question.** Design a class **Shift** with data members String **sen** and String **res**. Methods: **Shift(String s)**: stores s in sen and \"\" in res; void **convert()**: forms res by moving the first letter of every word of sen to the end of that word; void **show()**: prints sen and res. Write main() to accept a sentence ending in '.', '?' or '!' and print \"INVALID INPUT\" for any other ending. Use the plan above, and test it with RAIN IS COMING. and with HELLO (no end mark).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "For the word \"PUNE\", the expression w.substring(1) + w.charAt(0) gives ___.",
                answer: ["UNEP"],
                explain: "substring(1) is \"UNE\"; adding 'P' at the end gives \"UNEP\".",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Practical-exam string questions expect the output in a fixed format (original sentence, then the result). Test with all the sample inputs given in the question, including the invalid one; the examiner checks each sample run.",
          },
          {
            type: "keypoints",
            items: [
              "Merging two sorted arrays takes one pass plus leftover loops.",
              "Use <= in merge so equal items keep their order (stable merge).",
              "In output questions, write each loop variable's values in a column.",
              "char + String joins; char + int adds.",
              "One bubble-sort pass sends the largest element to the end.",
            ],
          },
        ],
        flashcards: [
          { front: "Merging two sorted arrays of sizes p and q", back: "Takes p + q copy steps; compare front elements, take the smaller, then copy the leftovers." },
          { front: "Why leftover loops in merge?", back: "The main loop stops when one array runs out; the rest of the other array must still be copied." },
          { front: "w.charAt(w.length() - 1)", back: "The last character of w." },
          { front: "Effect of one bubble sort pass (ascending)", back: "The largest element reaches the last position." },
          { front: "Moving the first letter of a word to the end", back: "w.substring(1) + w.charAt(0)." },
          { front: "Stable merge", back: "Equal elements keep the order they had, achieved by using <= when comparing." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed? String s = \"PUNE\"; System.out.println(s.charAt(1) + \"\" + s.length() + s.charAt(3));",
            options: ["U4E", "U4 E", "89E", "U+4+E"],
            answer: 0,
            explain: "s.charAt(1) + \"\" makes a String \"U\"; then 4 and 'E' are joined: \"U4E\".",
          },
          {
            kind: "mcq",
            q: "Merging 2 5 8 with 1 6 gives:",
            options: ["1 2 5 6 8", "2 5 8 1 6", "1 6 2 5 8", "1 2 6 5 8"],
            answer: 0,
            explain: "Merging keeps the result sorted.",
          },
          {
            kind: "numeric",
            q: "int a[] = {5, 2, 7, 1}; int s = 0; for (int i = 0; i < a.length; i += 2) s += a[i]; What is s?",
            answer: 12,
            explain: "i = 0 and 2: 5 + 7 = 12.",
          },
          {
            kind: "truefalse",
            q: "\"RAIN\".substring(1) + \"RAIN\".charAt(0) gives \"AINR\".",
            answer: true,
            explain: "substring(1) is \"AIN\"; adding 'R' gives \"AINR\".",
          },
          {
            kind: "fill",
            q: "int m[][] = new int[3][4]; the value of m.length is ___.",
            answer: ["3"],
            explain: "m.length is the number of rows; m[0].length is 4.",
          },
          {
            kind: "mcq",
            q: "What is printed? String t = \"\"; for (char c = 'a'; c <= 'e'; c += 2) t = c + t; System.out.println(t);",
            options: ["eca", "ace", "abcde", "edcba"],
            answer: 0,
            explain: "c takes 'a', 'c', 'e', and each is put in front of t: \"a\" → \"ca\" → \"eca\".",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A practical question says words must be counted in a sentence terminated by '.', '?' or '!'. Which delimiter string suits StringTokenizer?",
            options: ["\" .?!\"", "\".\"", "\" \"", "\"!?\""],
            answer: 0,
            explain: "Including the space and all three end marks keeps the end mark out of the last word.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Recursion                                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-java-recursion",
    title: "Recursion",
    icon: "🪆",
    description: "Recursive methods with a base case and a recursive case, the call stack, winding and unwinding, tracing output, and recursive methods inside ISC-style class programs on numbers and strings.",
    lessons: [
      {
        slug: "c12-cs-recursion-basics",
        title: "Recursion: Base Case, Call Stack and Tracing",
        summary: "What a recursive method is, why it needs a base case, how the call stack winds and unwinds, and how to trace a recursive method's output step by step.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪆",
            caption: "Open a set of nesting dolls and each one holds a smaller copy of itself, until the tiniest doll that does not open. A recursive method works the same way: it solves a smaller copy of the problem until it reaches a case it can answer directly.",
          },
          {
            type: "text",
            md: "A method that calls **itself** is **recursive**. Every correct recursive method has two parts:\n\n1. The **base case** (terminating condition): the simplest input, answered directly without another call.\n2. The **recursive case**: the method calls itself on a **smaller** problem, moving towards the base case.\n\nFor example, n! = n × (n − 1)! with the base case 1! = 1 (and 0! = 1).",
          },
          {
            type: "code",
            lang: "java",
            caption: "RecBasic.java",
            code: `public class RecBasic
{
    static int fact(int n)
    {
        if (n <= 1)              // base case
            return 1;
        return n * fact(n - 1);  // recursive case
    }

    static int sumDigits(int n)
    {
        if (n == 0)
            return 0;
        return n % 10 + sumDigits(n / 10);
    }

    static void show(int n)
    {
        if (n == 0)
            return;
        System.out.print(n + " ");
        show(n - 1);
        System.out.print(n + " ");
    }

    public static void main(String[] args)
    {
        System.out.println(fact(5));
        System.out.println(sumDigits(4706));
        show(3);
        System.out.println();
    }
}

/* Output:
120
17
3 2 1 1 2 3
*/`,
          },
          {
            type: "text",
            md: "Each call gets its own **activation record** (its own copy of n and its place to return to) on the **call stack**. Calls pile up while the method keeps calling itself: this is **winding**. When the base case returns, the records come off the stack one by one in reverse order, and each waiting call finishes its work: this is **unwinding**. The stack is last-in, first-out.",
          },
          {
            type: "example",
            title: "Tracing fact(5) on the stack",
            problem: "Show how fact(5) is evaluated.",
            steps: [
              "Winding: fact(5) waits for fact(4), which waits for fact(3), then fact(2), then fact(1).",
              "fact(1) is the base case and returns 1.",
              "Unwinding: fact(2) = 2 × 1 = 2; fact(3) = 3 × 2 = 6; fact(4) = 4 × 6 = 24; fact(5) = 5 × 24 = 120.",
              "Five activation records were on the stack at the deepest point.",
            ],
            answer: "fact(5) = 120",
          },
          {
            type: "example",
            title: "Statements before and after the call",
            problem: "Explain why show(3) prints 3 2 1 1 2 3.",
            steps: [
              "The print before the recursive call runs during winding: show(3) prints 3, show(2) prints 2, show(1) prints 1.",
              "show(0) is the base case and returns without printing.",
              "The print after the call runs during unwinding, in reverse order: show(1) prints 1, then show(2) prints 2, then show(3) prints 3.",
            ],
            answer: "3 2 1 1 2 3",
          },
          {
            type: "mistake",
            wrong: "A base case is optional: the method will stop on its own when n becomes small.",
            right: "Without a reachable base case the method calls itself for ever, until the call stack runs out of memory and Java throws a **StackOverflowError**.",
            why: "In a loop, a wrong condition just repeats; it feels as if recursion should also \"run out\". But each new call needs more stack space, and n keeps going down past 0 into negative numbers, so nothing stops it except the error.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Trace sumDigits(4706). How many times is sumDigits called in total, including the first call?",
                answer: 5,
                explain: "Calls with 4706, 470, 47, 4 and 0. The last one is the base case. The result is 6 + 0 + 7 + 4 = 17.",
              },
              {
                kind: "mcq",
                q: "If show(n) had only the print statement after the recursive call, show(3) would print:",
                options: ["1 2 3", "3 2 1", "3 2 1 1 2 3", "nothing"],
                answer: 0,
                explain: "All printing would happen during unwinding, which starts from the deepest call, show(1).",
              },
            ],
          },
          {
            type: "table",
            headers: ["Point", "Recursion", "Iteration (loop)"],
            rows: [
              ["How it repeats", "the method calls itself", "a loop repeats a block"],
              ["How it stops", "base case", "loop condition becomes false"],
              ["Memory", "a new stack frame per call", "the same variables reused"],
              ["Speed", "slower (call overhead)", "usually faster"],
              ["Good for", "naturally recursive problems: trees, Tower of Hanoi, divide and conquer", "simple counting and repetition"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order what happens when fact(3) runs.",
              items: [
                "fact(3) calls fact(2)",
                "fact(2) calls fact(1)",
                "fact(1) returns 1 (base case)",
                "fact(2) returns 2 × 1 = 2",
                "fact(3) returns 3 × 2 = 6",
              ],
              explain: "Calls go down to the base case (winding), then results come back up in reverse order (unwinding).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "For a recursion output question, draw a column of calls with their parameters going down, then write the return values coming back up. Show this working: it earns marks even if you slip at the final step. Mark clearly which statements run before the recursive call and which run after.",
          },
          {
            type: "keypoints",
            items: [
              "A recursive method calls itself; it needs a base case and a recursive case that shrinks the problem.",
              "Each call has its own activation record on the call stack.",
              "Winding: calls pile up. Unwinding: they return in reverse order.",
              "Statements before the call run in calling order; statements after it run in reverse order.",
              "Missing or unreachable base case → StackOverflowError.",
            ],
          },
        ],
        flashcards: [
          { front: "Recursion", back: "A technique in which a method calls itself to solve a smaller instance of the same problem." },
          { front: "Base case", back: "The condition under which a recursive method returns a result directly, without calling itself." },
          { front: "Winding and unwinding", back: "Winding: recursive calls pile up on the stack. Unwinding: they return one by one in reverse order." },
          { front: "Error from endless recursion", back: "StackOverflowError." },
          { front: "Data structure used by the JVM to manage method calls", back: "The call stack (LIFO)." },
          { front: "fact(5)", back: "120." },
          { front: "One drawback of recursion", back: "Extra memory and time for each call's stack frame." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "int f(int n) { if (n == 0) return 0; return n + f(n - 1); } What is f(4)?",
            options: ["10", "4", "24", "0"],
            answer: 0,
            explain: "4 + 3 + 2 + 1 + 0 = 10.",
          },
          {
            kind: "mcq",
            q: "What happens if f from the previous question is called as f(-2)?",
            options: ["StackOverflowError", "It returns -3", "It returns 0", "It returns -2"],
            answer: 0,
            explain: "n goes −2, −3, −4, ... and never equals 0, so the base case is never reached.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In a recursive method, the statements after the recursive call run in the reverse order of the calls.",
            answer: true,
            explain: "They run while the stack unwinds, from the deepest call back to the first.",
          },
          {
            kind: "numeric",
            q: "int p(int b, int e) { if (e == 0) return 1; return b * p(b, e - 1); } What is p(3, 4)?",
            answer: 81,
            explain: "3 × 3 × 3 × 3 × 1 = 81.",
          },
          {
            kind: "fill",
            q: "The condition that stops recursion is called the ___ case.",
            answer: ["base"],
            explain: "It is also called the terminating condition.",
          },
          {
            kind: "mcq",
            q: "void r(int n) { if (n > 0) { r(n / 10); System.out.print(n % 10); } } What does r(527) print?",
            options: ["527", "725", "5", "7"],
            answer: 0,
            explain: "The print comes after the call, so digits are printed while unwinding, from the leading digit: 5, 2, 7.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are true of recursion compared with a loop?",
            options: ["It uses more memory per repetition", "It must have a terminating condition", "It is always faster", "Some problems, like tree traversal, are much simpler to write with it"],
            answers: [0, 1, 3],
            explain: "Recursion is usually slower than a loop because of call overhead.",
          },
        ],
      },
      {
        slug: "c12-cs-recursion-programs",
        title: "Recursive Methods in ISC Class Programs",
        summary: "Writing recursive methods to a specification: reversing a number with a data member, HCF, binary conversion, reversing a string and counting vowels.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "ISC questions often say \"using the **recursive technique**\" for one method of a class. That method must call itself and must **not** use a loop. The other methods of the class can be ordinary.\n\nA useful way to design a recursive method is to ask two questions: *What is the smallest input, and what is the answer for it?* (base case) *If I already had the answer for a slightly smaller input, how would I build this answer?* (recursive case).",
          },
          {
            type: "table",
            headers: ["Task", "Base case", "Recursive case"],
            rows: [
              ["Sum of digits of n", "n == 0 → 0", "n % 10 + sum(n / 10)"],
              ["HCF of a and b (Euclid)", "b == 0 → a", "gcd(b, a % b)"],
              ["Binary of n as a String", "n == 0 → \"\"", "toBinary(n / 2) + (n % 2)"],
              ["Reverse of string s", "length ≤ 1 → s", "reverse(s.substring(1)) + s.charAt(0)"],
              ["Vowels in s from index i", "i == s.length() → 0", "(1 if charAt(i) is a vowel, else 0) + count(s, i + 1)"],
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "RecString.java",
            code: `public class RecString
{
    static int gcd(int a, int b)
    {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    static String toBinary(int n)
    {
        if (n == 0)
            return "";
        return toBinary(n / 2) + (n % 2);
    }

    static String reverse(String s)
    {
        if (s.length() <= 1)
            return s;
        return reverse(s.substring(1)) + s.charAt(0);
    }

    static int countVowels(String s, int i)
    {
        if (i == s.length())
            return 0;
        char ch = Character.toUpperCase(s.charAt(i));
        int v = ("AEIOU".indexOf(ch) >= 0) ? 1 : 0;
        return v + countVowels(s, i + 1);
    }

    public static void main(String[] args)
    {
        System.out.println(gcd(84, 36));
        System.out.println(toBinary(13));
        System.out.println(reverse("KOCHI"));
        System.out.println(countVowels("Education", 0));
    }
}

/* Output:
12
1101
IHCOK
5
*/`,
          },
          {
            type: "example",
            title: "Tracing toBinary(13)",
            problem: "Show how toBinary(13) builds \"1101\".",
            steps: [
              "toBinary(13) = toBinary(6) + 1; toBinary(6) = toBinary(3) + 0; toBinary(3) = toBinary(1) + 1; toBinary(1) = toBinary(0) + 1; toBinary(0) = \"\".",
              "Unwinding: \"\" + 1 = \"1\"; \"1\" + 1 = \"11\"; \"11\" + 0 = \"110\"; \"110\" + 1 = \"1101\".",
              "The remainders are joined during unwinding, so they come out in the right order without reversing.",
            ],
            answer: "\"1101\" (13 in binary)",
          },
          {
            type: "mistake",
            wrong: "In toBinary, write return (n % 2) + toBinary(n / 2); the order of the two parts does not matter.",
            right: "Write toBinary(n / 2) + (n % 2). The remainder for the last division is the **most** significant bit, so it must come first.",
            why: "Addition of numbers is commutative, so swapping feels harmless. But + here joins Strings, and joining is not commutative: the swapped version gives \"1011\" for 13, the reverse of the correct answer.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "gcd(84, 36) calls itself with which arguments next?",
                options: ["gcd(36, 12)", "gcd(36, 48)", "gcd(12, 36)", "gcd(84, 12)"],
                answer: 0,
                explain: "gcd(b, a % b) = gcd(36, 84 % 36) = gcd(36, 12). Then gcd(12, 0) returns 12.",
              },
            ],
          },
          {
            type: "heading",
            text: "A recursive method that uses a data member",
          },
          {
            type: "code",
            lang: "java",
            caption: "Palin.java (sample inputs 1221 and 1230)",
            code: `import java.util.Scanner;

public class Palin
{
    int num;
    int revnum;

    Palin()
    {
        num = 0;
        revnum = 0;
    }

    void accept()
    {
        Scanner sc = new Scanner(System.in);
        num = sc.nextInt();
    }

    // builds the reverse of y in revnum, using recursion
    int reverse(int y)
    {
        if (y == 0)
            return revnum;
        revnum = revnum * 10 + y % 10;
        return reverse(y / 10);
    }

    void check()
    {
        revnum = 0;
        if (reverse(num) == num)
            System.out.println(num + " IS A PALINDROME NUMBER");
        else
            System.out.println(num + " IS NOT A PALINDROME NUMBER");
    }

    public static void main(String[] args)
    {
        Palin ob = new Palin();
        ob.accept();
        ob.check();
    }
}

/* Sample run 1: input 1221
1221 IS A PALINDROME NUMBER

Sample run 2: input 1230
1230 IS NOT A PALINDROME NUMBER
*/`,
          },
          {
            type: "example",
            title: "Tracing reverse(1230)",
            problem: "Trace revnum through reverse(1230).",
            steps: [
              "y = 1230: revnum = 0 × 10 + 0 = 0, call reverse(123).",
              "y = 123: revnum = 0 × 10 + 3 = 3; y = 12: revnum = 32; y = 1: revnum = 321.",
              "y = 0: base case, return revnum = 321.",
              "321 ≠ 1230, so the number is not a palindrome.",
            ],
            answer: "reverse(1230) returns 321",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each call to its result.",
              pairs: [
                ["gcd(48, 18)", "6"],
                ["toBinary(10)", "\"1010\""],
                ["reverse(\"GOA\")", "\"AOG\""],
                ["countVowels(\"Agra\", 0)", "2"],
              ],
              explain: "gcd: (48, 18) → (18, 12) → (12, 6) → (6, 0). Binary of 10 is 1010. Agra has A and a.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "If a method is to be written \"using recursion\", a loop inside it costs marks even when the output is right. Start the method with the base case written as an if statement; examiners look for it first. Reset any data member that the recursion builds (like revnum = 0) before calling it again.",
          },
          {
            type: "keypoints",
            items: [
              "Design: smallest input → base case; build the answer from a smaller answer → recursive case.",
              "Euclid's HCF: gcd(a, b) = gcd(b, a % b), base case b == 0.",
              "The order of joining in String recursion decides the order of the output.",
              "A recursive method may build its result in a data member, which must be reset before use.",
              "\"Using recursion\" means no loops inside that method.",
            ],
          },
        ],
        flashcards: [
          { front: "Recursive HCF (Euclid)", back: "gcd(a, b) = a if b == 0, else gcd(b, a % b)." },
          { front: "Recursive binary conversion", back: "toBinary(n) = toBinary(n / 2) + (n % 2), base case n == 0 → \"\"." },
          { front: "Recursive string reverse", back: "reverse(s) = reverse(s.substring(1)) + s.charAt(0), base case length ≤ 1." },
          { front: "Recursive vowel count", back: "count(s, i) = (vowel at i ? 1 : 0) + count(s, i + 1), base case i == s.length()." },
          { front: "Why reset revnum in check()?", back: "reverse() adds to whatever revnum already holds; an old value would give a wrong reverse." },
          { front: "toBinary(13)", back: "\"1101\"." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What does reverse(\"ISC\") (from RecString) return?",
            options: ["\"CSI\"", "\"ISC\"", "\"SCI\"", "\"C\""],
            answer: 0,
            explain: "reverse(\"SC\") + 'I' = (reverse(\"C\") + 'S') + 'I' = \"CSI\".",
          },
          {
            kind: "numeric",
            q: "What does gcd(105, 30) return?",
            answer: 15,
            explain: "(105, 30) → (30, 15) → (15, 0) → 15.",
          },
          {
            kind: "mcq",
            q: "How many times is countVowels called for countVowels(\"Pune\", 0)?",
            options: ["5", "4", "2", "1"],
            answer: 0,
            explain: "With i = 0, 1, 2, 3 and finally 4 (the base case, i == length): 5 calls.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In Palin, if check() did not set revnum = 0 and was called twice on the same object, the second check could give a wrong answer.",
            answer: true,
            explain: "revnum would start from the old reverse, so the digits would be added onto it.",
          },
          {
            kind: "fill",
            q: "toBinary(6) returns the String ___.",
            answer: ["110"],
            explain: "6 → 3 r0 → 1 r1 → 0 r1; joined during unwinding: \"110\".",
          },
          {
            kind: "mcq",
            q: "Which is the correct base case for a recursive method that counts the digits of a positive int n?",
            options: ["if (n < 10) return 1;", "if (n == 1) return 0;", "if (n > 0) return 1;", "if (n % 10 == 0) return 0;"],
            answer: 0,
            explain: "A one-digit number has 1 digit; otherwise the answer is 1 + count(n / 10).",
          },
          {
            kind: "mcq",
            q: "Which statement about a method written \"using the recursive technique\" is correct?",
            options: ["It must call itself and must not use a loop for the repetition", "It must be static", "It must return void", "It cannot use data members"],
            answer: 0,
            explain: "Palin.reverse() shows a recursive instance method that returns an int and uses a data member.",
          },
        ],
      },
      {
        slug: "c12-cs-recursion-practice",
        title: "Recursion: Board Practice",
        summary: "Output and \"what does this method do\" questions on recursive methods, and a complete recursive class to write and test.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Two question types appear again and again: (a) give the output of a recursive method for a given input, and (b) state in one line what the method computes. For (b), trace two or three small inputs and look for the pattern.",
          },
          {
            type: "code",
            lang: "java",
            caption: "RecTrace.java",
            code: `public class RecTrace
{
    static int fun(int a, int b)
    {
        if (b == 0)
            return 0;
        else if (b % 2 == 0)
            return fun(a + a, b / 2);
        else
            return fun(a + a, b / 2) + a;
    }

    static int digitProduct(int n)
    {
        if (n < 10)
            return n;
        return (n % 10) * digitProduct(n / 10);
    }

    static void pattern(String s, int i)
    {
        if (i > s.length())
            return;
        pattern(s, i + 1);
        System.out.println(s.substring(0, i));
    }

    public static void main(String[] args)
    {
        System.out.println(fun(5, 6));
        System.out.println(digitProduct(3426));
        pattern("ISC", 1);
    }
}

/* Output:
30
144
ISC
IS
I
*/`,
          },
          {
            type: "example",
            title: "What does fun(a, b) compute?",
            problem: "Trace fun(5, 6) and state what fun does.",
            steps: [
              "fun(5, 6): b even → fun(10, 3).",
              "fun(10, 3): b odd → fun(20, 1) + 10.",
              "fun(20, 1): b odd → fun(40, 0) + 20 = 0 + 20 = 20.",
              "Unwinding: fun(10, 3) = 20 + 10 = 30, so fun(5, 6) = 30.",
            ],
            answer: "30. fun(a, b) returns a × b, by doubling a and halving b (the \"Russian peasant\" method).",
          },
          {
            type: "example",
            title: "Output order in pattern()",
            problem: "Why does pattern(\"ISC\", 1) print ISC, then IS, then I?",
            steps: [
              "Calls go pattern(1) → pattern(2) → pattern(3) → pattern(4); pattern(4) returns because 4 > 3.",
              "The print is after the call, so it runs during unwinding: i = 3 prints substring(0, 3) = ISC, then i = 2 prints IS, then i = 1 prints I.",
            ],
            answer: "ISC / IS / I",
          },
          {
            type: "mistake",
            wrong: "fun(5, 6) is just fun(10, 3), so the + a in the odd branch never matters for even b.",
            right: "The first call has even b, but later calls can have odd b (here 3 and 1), and their + a values are added during unwinding.",
            why: "Learners look only at the first call. A recursion trace must follow every level down to the base case, because each level can take a different branch.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is digitProduct(705)?",
                answer: 0,
                explain: "5 × 0 × 7 = 0. Any zero digit makes the product 0.",
              },
              {
                kind: "mcq",
                q: "What is fun(3, 5)?",
                options: ["15", "8", "12", "3"],
                answer: 0,
                explain: "fun(a, b) = a × b. Trace: fun(3,5) = fun(6,2) + 3; fun(6,2) = fun(12,1) = fun(24,0) + 12 = 12; so 12 + 3 = 15.",
              },
            ],
          },
          {
            type: "heading",
            text: "Program to write",
          },
          {
            type: "text",
            md: "**Question.** A **special number** is equal to the sum of the factorials of its digits (145 = 1! + 4! + 5! = 1 + 24 + 120). Design a class **Special** with data member int **n**. Methods: **Special(int num)**: stores num in n; int **factorial(int x)**: returns x! using recursion; int **sumFact(int m)**: returns the sum of the factorials of the digits of m using recursion; void **check()**: prints whether n is a special number. Write main().",
          },
          {
            type: "code",
            lang: "java",
            caption: "Special.java (sample inputs 145 and 146)",
            code: `import java.util.Scanner;

public class Special
{
    int n;

    Special(int num)
    {
        n = num;
    }

    int factorial(int x)
    {
        if (x <= 1)
            return 1;
        return x * factorial(x - 1);
    }

    // sum of factorials of the digits of m, by recursion
    int sumFact(int m)
    {
        if (m == 0)
            return 0;
        return factorial(m % 10) + sumFact(m / 10);
    }

    void check()
    {
        if (n > 0 && sumFact(n) == n)
            System.out.println(n + " IS A SPECIAL NUMBER");
        else
            System.out.println(n + " IS NOT A SPECIAL NUMBER");
    }

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        Special ob = new Special(sc.nextInt());
        ob.check();
    }
}

/* Sample run 1: input 145
145 IS A SPECIAL NUMBER

Sample run 2: input 146
146 IS NOT A SPECIAL NUMBER
*/`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "factorial(0) is called for the digit 0 in a number like 405. What does it return?",
              emoji: "0️⃣",
              options: ["1", "0", "StackOverflowError"],
              answer: 0,
              trap: 1,
              explain: "The base case x <= 1 covers 0, and 0! = 1 by definition. So 405 gives 4! + 0! + 5! = 24 + 1 + 120 = 145, not 405.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "In \"what does this method do\" questions, give the purpose in words (\"returns the product of a and b\"), not a repeat of the code. In the practical exam, write the algorithm for the recursive method as two clear steps: the base case and the recursive step.",
          },
          {
            type: "keypoints",
            items: [
              "Follow every level of a recursive trace; branches can change from level to level.",
              "Print statements after the call print in reverse order of the calls.",
              "Find what a method does by tracing small inputs and spotting the pattern.",
              "0! = 1: make sure the base case handles 0.",
              "Two recursive methods can work together (sumFact calls factorial).",
            ],
          },
        ],
        flashcards: [
          { front: "fun(a, b) that doubles a and halves b, adding a when b is odd", back: "Returns a × b." },
          { front: "digitProduct(3426)", back: "144 (6 × 2 × 4 × 3)." },
          { front: "Special (Krishnamurthy) number", back: "Equal to the sum of the factorials of its digits, e.g. 1, 2, 145, 40585." },
          { front: "0!", back: "1." },
          { front: "How to answer \"what does this method do?\"", back: "Trace small inputs, find the pattern, and state the purpose in words." },
          { front: "pattern(\"ISC\", 1) output", back: "ISC, IS, I on separate lines (printing during unwinding)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is fun(7, 4)?",
            answer: 28,
            explain: "fun(a, b) returns a × b = 28. Trace: fun(7,4) → fun(14,2) → fun(28,1) = fun(56,0) + 28 = 28.",
          },
          {
            kind: "mcq",
            q: "What does sumFact(23) return?",
            options: ["8", "5", "6", "120"],
            answer: 0,
            explain: "3! + 2! = 6 + 2 = 8.",
          },
          {
            kind: "mcq",
            q: "void p(int n) { if (n <= 0) return; p(n - 2); System.out.print(n + \" \"); } What does p(7) print?",
            options: ["1 3 5 7", "7 5 3 1", "7 5 3 1 -1", "1 3 5 7 9"],
            answer: 0,
            explain: "Calls 7 → 5 → 3 → 1 → −1 (base case). Printing happens while unwinding: 1 3 5 7.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "If pattern() printed before its recursive call, pattern(\"ISC\", 1) would print I, IS, ISC.",
            answer: true,
            explain: "Printing would then happen during winding, with i = 1, 2, 3 in that order.",
          },
          {
            kind: "fill",
            q: "int q(int n) { if (n == 0) return 0; return 1 + q(n / 10); } q(50213) returns ___.",
            answer: ["5"],
            explain: "q counts the digits: 50213 has 5 digits.",
          },
          {
            kind: "mcq",
            q: "String m(String s) { if (s.length() == 0) return \"\"; return m(s.substring(1)) + s.charAt(0) + s.charAt(0); } m(\"AB\") returns:",
            options: ["\"BBAA\"", "\"AABB\"", "\"ABAB\"", "\"BA\""],
            answer: 0,
            explain: "m(\"B\") = m(\"\") + \"BB\" = \"BB\"; then m(\"AB\") = \"BB\" + \"AA\" = \"BBAA\".",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which input is a special number by the definition in the question?",
            options: ["2", "3", "10", "100"],
            answer: 0,
            explain: "2! = 2. 3! = 6; 10 gives 1 + 1 = 2; 100 gives 1 + 1 + 1 = 3.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Inheritance, Interfaces and Polymorphism              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-java-inheritance",
    title: "Inheritance, Interfaces and Polymorphism",
    icon: "🧬",
    description: "Superclasses and subclasses, protected members, super and constructor chaining, method overriding and dynamic method dispatch, abstract classes, interfaces, and the ISC inheritance question.",
    lessons: [
      {
        slug: "c12-cs-inheritance-super",
        title: "Inheritance, super and Constructor Chaining",
        summary: "extends, superclass and subclass, types of inheritance, protected access, calling the superclass constructor with super(...), constructor chaining order and super.method().",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "👨‍👩‍👧",
            caption: "A school keeps a name and roll number for every student. The exam cell needs all of that plus marks. Instead of rewriting the student details, the exam cell's class can inherit them.",
          },
          {
            type: "text",
            md: "**Inheritance** lets a new class acquire the data members and methods of an existing class. The existing class is the **superclass** (base or parent class); the new one is the **subclass** (derived or child class), declared with `extends`. The subclass can add new members and can **override** inherited methods. Inheritance models an **is-a** relationship: a Marks record *is a* Student record with more detail.\n\nThe main benefit is **reusability**: tested code is used again without being copied.",
          },
          {
            type: "table",
            headers: ["Type", "Shape", "Allowed with classes in Java?"],
            rows: [
              ["Single", "B extends A", "yes"],
              ["Multilevel", "C extends B, B extends A", "yes"],
              ["Hierarchical", "B extends A and C extends A", "yes"],
              ["Multiple", "C extends A and B together", "no (a class can extend only one class); achieved with interfaces"],
              ["Hybrid", "a mix of the above", "yes, unless the mix includes multiple inheritance; then only through interfaces"],
            ],
          },
          {
            type: "text",
            md: "**private** members of the superclass are inherited into the object but **cannot be used by name** in the subclass. Members declared **protected** can be used in the subclass (and in the same package), so ISC questions declare superclass data members `protected`.\n\nConstructors are **not** inherited. A subclass constructor calls the superclass constructor with `super(arguments)`, which must be the **first statement**. If it is left out, Java inserts `super()` automatically, so the superclass must then have a no-argument constructor. Inside an overriding method, `super.methodName()` calls the superclass version.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Chain.java: the order of constructors",
            code: `class A
{
    A()
    {
        System.out.println("A()");
    }
}

class B extends A
{
    B()
    {
        System.out.println("B()");
    }
}

class C extends B
{
    C(int x)
    {
        super();
        System.out.println("C(" + x + ")");
    }
}

public class Chain
{
    public static void main(String[] args)
    {
        C obj = new C(5);
    }
}

/* Output:
A()
B()
C(5)
*/`,
          },
          {
            type: "example",
            title: "Why A() prints first",
            problem: "new C(5) is called first, yet A() is printed first. Explain.",
            steps: [
              "C(5) begins with super(), which calls B() before C's own print statement.",
              "B() has no explicit super(), so Java inserts super() at its start, calling A().",
              "A() prints, returns to B(), which prints, then returns to C(5), which prints.",
            ],
            answer: "Constructors run from the top of the hierarchy down: A(), B(), C(5). This is constructor chaining.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Result.java: a subclass that reuses and extends its superclass",
            code: `class Student
{
    protected String name;
    protected int roll;

    Student(String n, int r)
    {
        name = n;
        roll = r;
    }

    void show()
    {
        System.out.println("Roll " + roll + ": " + name);
    }
}

class Marks extends Student
{
    int m[];

    Marks(String n, int r, int x[])
    {
        super(n, r);          // must be the first statement
        m = x;
    }

    double percent()
    {
        int total = 0;
        for (int i = 0; i < m.length; i++)
            total += m[i];
        return total * 100.0 / (m.length * 100);
    }

    void show()               // overrides Student's show()
    {
        super.show();
        System.out.println("Percentage = " + percent());
    }
}

public class Result
{
    public static void main(String[] args)
    {
        int marks[] = {78, 92, 85, 69, 96};
        Marks s = new Marks("Kavya", 12, marks);
        s.show();
    }
}

/* Output:
Roll 12: Kavya
Percentage = 84.0
*/`,
          },
          {
            type: "mistake",
            wrong: "In the subclass constructor, set the inherited fields first and call super(n, r) afterwards.",
            right: "super(...) must be the **first statement** of the subclass constructor; anything before it is a compile-time error.",
            why: "It seems natural to do the subclass's own work first. But the superclass part of the object must be built before the subclass part, so Java requires the call to super at the very top.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In Marks.show(), what would happen if super.show(); were replaced by show();?",
                options: ["Endless recursion, ending in StackOverflowError", "The same output", "A compile-time error", "Only the percentage is printed"],
                answer: 0,
                explain: "Without super, show() calls Marks.show() itself again and again.",
                difficulty: 2,
              },
              {
                kind: "truefalse",
                q: "A Java class can extend two classes at the same time.",
                answer: false,
                explain: "Java allows only one superclass per class. Multiple inheritance is done through interfaces.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each term to its meaning.",
              pairs: [
                ["extends", "declares the superclass of a class"],
                ["super(...)", "calls the superclass constructor"],
                ["super.show()", "calls the superclass version of a method"],
                ["protected", "visible in subclasses and the same package"],
                ["is-a relationship", "what inheritance models"],
              ],
              explain: "These five ideas appear in almost every ISC inheritance answer.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "The ISC inheritance question gives a superclass (already written, or to be assumed) and asks you to write only the **subclass**. Use `extends`, call `super(...)` with the right arguments as the first line, and reuse the superclass's display method with `super.show()`. Do not rewrite the superclass, and write main() only if asked.",
          },
          {
            type: "keypoints",
            items: [
              "class B extends A: B inherits A's accessible members and can add or override.",
              "Java supports single, multilevel and hierarchical inheritance with classes; multiple only through interfaces.",
              "protected members are usable in subclasses; private members are not usable by name.",
              "super(...) must be the first statement in a subclass constructor; constructors run top-down.",
              "super.method() calls the superclass version from an overriding method.",
            ],
          },
        ],
        flashcards: [
          { front: "Inheritance", back: "The mechanism by which a subclass acquires the members of a superclass, using extends; it gives reusability." },
          { front: "Superclass and subclass", back: "Superclass: the existing (base, parent) class. Subclass: the new (derived, child) class that extends it." },
          { front: "Rule for super(...)", back: "It must be the first statement in the subclass constructor." },
          { front: "Constructor chaining order", back: "From the topmost superclass down to the subclass." },
          { front: "Why multiple inheritance is not allowed with classes in Java", back: "To avoid ambiguity when two superclasses have members with the same name; interfaces are used instead." },
          { front: "protected", back: "Access specifier that makes a member visible in the same package and in all subclasses." },
          { front: "Are constructors inherited?", back: "No. A subclass constructor calls one with super(...)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "class C extends B, and class B extends A. This is:",
            options: ["Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance", "Hybrid inheritance"],
            answer: 0,
            explain: "A chain of single inheritance steps is multilevel.",
          },
          {
            kind: "mcq",
            q: "If class A has only the constructor A(int x), which subclass constructor compiles?",
            options: ["B() { super(0); }", "B() { }", "B() { System.out.println(); super(0); }", "B() { A(0); }"],
            answer: 0,
            explain: "Without an explicit super(...), Java inserts super(), but A has no no-argument constructor. The super call must also come first.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A subclass can use the protected data members of its superclass by name.",
            answer: true,
            explain: "That is the purpose of protected in ISC inheritance questions.",
          },
          {
            kind: "numeric",
            q: "In Result.java, if the marks were {80, 70, 90, 60} (out of 100 each), what would percent() return?",
            answer: 75,
            explain: "Total 300 out of 400, so 300 × 100.0 / 400 = 75.0.",
          },
          {
            kind: "fill",
            q: "The keyword used to declare that one class inherits from another is ___.",
            answer: ["extends"],
            explain: "class Marks extends Student.",
          },
          {
            kind: "mcq",
            q: "class P { P() { System.out.print(\"P\"); } } class Q extends P { Q() { System.out.print(\"Q\"); } } What does new Q(); print?",
            options: ["PQ", "QP", "Q", "P"],
            answer: 0,
            explain: "Q() starts with an automatic super(), so P's constructor prints first.",
          },
          {
            kind: "multi",
            q: "Which are benefits of inheritance?",
            options: ["Reuse of tested code", "Less duplication", "Faster execution of every method", "A natural model of is-a relationships"],
            answers: [0, 1, 3],
            explain: "Inheritance is about design and reuse, not speed.",
          },
        ],
      },
      {
        slug: "c12-cs-polymorphism-interfaces",
        title: "Polymorphism, Abstract Classes and Interfaces",
        summary: "Overloading and overriding, dynamic method dispatch through a superclass reference, abstract classes and methods, interfaces and implements, and the traps with fields and static methods.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Polymorphism** means \"one name, many forms\". Java has two kinds:\n\n**Compile-time (static) polymorphism** is **method overloading**: methods in the same class with the same name but different parameter lists. The compiler chooses one from the arguments.\n\n**Run-time (dynamic) polymorphism** is **method overriding**: a subclass gives its own version of an inherited method with the **same signature**. When a superclass reference points to a subclass object, the **object's** version runs. This is **dynamic method dispatch**.",
          },
          {
            type: "table",
            headers: ["Point", "Overloading", "Overriding"],
            rows: [
              ["Where", "same class (or inherited)", "subclass over superclass"],
              ["Parameters", "must differ", "must be the same"],
              ["Decided", "at compile time", "at run time"],
              ["Example", "area(int), area(double, double)", "Marks.show() replacing Student.show()"],
            ],
          },
          {
            type: "text",
            md: "An **abstract class** is declared `abstract` and cannot be instantiated with new. It can have **abstract methods** (a header with no body) that every concrete subclass must override, as well as normal methods and data members.\n\nAn **interface** is a fully abstract type. Its methods are `public` and `abstract` by default (newer Java versions also allow default methods), and its variables are automatically `public static final` constants. A class **implements** an interface and must define all its methods as `public`. A class can implement **many** interfaces, which is how Java provides multiple inheritance of type.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Shapes.java: one interface, several implementations",
            code: `interface Shape
{
    double area();
    String name();
}

class Circle implements Shape
{
    double r;

    Circle(double r)
    {
        this.r = r;
    }

    public double area()
    {
        return Math.PI * r * r;
    }

    public String name()
    {
        return "Circle";
    }
}

class Rectangle implements Shape
{
    double l, b;

    Rectangle(double l, double b)
    {
        this.l = l;
        this.b = b;
    }

    public double area()
    {
        return l * b;
    }

    public String name()
    {
        return "Rectangle";
    }
}

class Square extends Rectangle
{
    Square(double s)
    {
        super(s, s);
    }

    public String name()
    {
        return "Square";
    }
}

public class Shapes
{
    public static void main(String[] args)
    {
        Shape list[] = {new Circle(7), new Rectangle(4, 2.5), new Square(3)};
        for (int i = 0; i < list.length; i++)
            System.out.println(list[i].name() + " " + String.format("%.2f", list[i].area()));
    }
}

/* Output:
Circle 153.94
Rectangle 10.00
Square 9.00
*/`,
          },
          {
            type: "example",
            title: "Dynamic dispatch in Shapes",
            problem: "list[i] is of type Shape. How does Java know which area() and name() to run?",
            steps: [
              "The reference type (Shape) only decides which methods may be called: area() and name().",
              "At run time Java looks at the actual object: for list[0] it is a Circle, so Circle.area() gives π × 49 ≈ 153.94.",
              "list[2] is a Square: name() is Square's override, but area() is inherited from Rectangle: 3 × 3 = 9.00.",
            ],
            answer: "The object's class decides at run time (dynamic method dispatch).",
          },
          {
            type: "heading",
            text: "An abstract class in code",
          },
          {
            type: "code",
            lang: "java",
            caption: "Electricity.java: an abstract superclass with one abstract method",
            code: `abstract class Bill
{
    protected int units;

    Bill(int u)
    {
        units = u;
    }

    abstract double charge();     // no body: each subclass decides

    void print()
    {
        System.out.println(units + " units: Rs " + charge());
    }
}

class Domestic extends Bill
{
    Domestic(int u)
    {
        super(u);
    }

    double charge()
    {
        return units * 5.5;
    }
}

class Commercial extends Bill
{
    Commercial(int u)
    {
        super(u);
    }

    double charge()
    {
        return units * 9.0 + 200;
    }
}

public class Electricity
{
    public static void main(String[] args)
    {
        Bill b1 = new Domestic(120);
        Bill b2 = new Commercial(120);
        b1.print();
        b2.print();
    }
}

/* Output:
120 units: Rs 660.0
120 units: Rs 1280.0
*/`,
          },
          {
            type: "mistake",
            wrong: "With P r = new Q();, r.v gives Q's field and r.hello() calls Q's static method, just as r.show() calls Q's show().",
            right: "Only **instance methods** are dispatched dynamically. **Fields** and **static methods** are chosen by the **reference type**, so r.v and r.hello() use P's versions.",
            why: "Dynamic dispatch works so neatly for show() that learners extend it to everything. But a field in a subclass with the same name only hides the superclass field, and static methods belong to classes, not objects.",
          },
          {
            type: "code",
            lang: "java",
            caption: "FieldTrace.java: what is dispatched and what is not",
            code: `class P
{
    int v = 10;

    void show()
    {
        System.out.println("P " + v);
    }

    static void hello()
    {
        System.out.println("hello from P");
    }
}

class Q extends P
{
    int v = 20;

    void show()
    {
        System.out.println("Q " + v + " " + super.v);
    }

    static void hello()
    {
        System.out.println("hello from Q");
    }
}

public class FieldTrace
{
    public static void main(String[] args)
    {
        P r = new Q();
        r.show();
        System.out.println(r.v);
        r.hello();
    }
}

/* Output:
Q 20 10
10
hello from P
*/`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which line will NOT compile?",
                options: ["Shape s = new Shape();", "Shape s = new Circle(2);", "Rectangle q = new Square(5);", "Shape t = new Square(1);"],
                answer: 0,
                explain: "An interface (like an abstract class) cannot be instantiated. A reference of its type may point to any implementing object.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Overloading or overriding?",
              groups: ["Overloading", "Overriding"],
              items: [
                { text: "area(int s) and area(int l, int b) in one class", group: 0, hint: "Same name, different parameters." },
                { text: "Square.name() replacing Rectangle.name()", group: 1, hint: "Same signature in a subclass." },
                { text: "Resolved at compile time", group: 0, hint: "The compiler picks by argument types." },
                { text: "Resolved at run time", group: 1, hint: "Depends on the actual object." },
                { text: "Constructors Time() and Time(int, int)", group: 0, hint: "Constructors can be overloaded but never overridden." },
                { text: "Circle defining area() from interface Shape", group: 1, hint: "Implementing an interface method is overriding an abstract method." },
              ],
              explain: "Overloading: same class, different parameters, compile time. Overriding: subclass, same signature, run time.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Frequent short questions: difference between an abstract class and an interface (an abstract class may have constructors, instance variables and concrete methods; a class can extend one abstract class but implement many interfaces), and between overloading and overriding. Methods that implement an interface must be declared public, or the code will not compile.",
          },
          {
            type: "keypoints",
            items: [
              "Overloading: same name, different parameters, chosen at compile time.",
              "Overriding: same signature in a subclass; the object's version runs (dynamic method dispatch).",
              "Fields and static methods are chosen by the reference type, not the object.",
              "An abstract class cannot be instantiated; its abstract methods must be overridden.",
              "An interface's methods are public and abstract; a class can implement many interfaces.",
            ],
          },
        ],
        flashcards: [
          { front: "Polymorphism", back: "One name, many forms: overloading (compile time) and overriding (run time)." },
          { front: "Dynamic method dispatch", back: "When a superclass reference refers to a subclass object, the overridden method of the object's class runs, decided at run time." },
          { front: "Abstract method", back: "A method declared with abstract and no body; a concrete subclass must override it." },
          { front: "Interface", back: "A type with abstract public methods and public static final constants; a class uses implements to provide the methods." },
          { front: "Abstract class vs interface", back: "Abstract class: may have constructors, fields and concrete methods; one per class. Interface: constants and abstract methods; a class can implement many." },
          { front: "Are fields polymorphic?", back: "No. A field is chosen by the reference type; a subclass field with the same name hides the superclass one." },
          { front: "Can a constructor be overridden?", back: "No. Constructors are not inherited, so they can be overloaded but not overridden." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Run-time polymorphism in Java is achieved through:",
            options: ["method overriding", "method overloading", "constructor overloading", "static methods"],
            answer: 0,
            explain: "Overridden instance methods are chosen at run time from the object's class.",
          },
          {
            kind: "mcq",
            q: "From FieldTrace.java, what does new Q().show() print?",
            options: ["Q 20 10", "P 10", "Q 10 20", "P 20"],
            answer: 0,
            explain: "Q's show() prints Q's v (20) and super.v (10).",
          },
          {
            kind: "truefalse",
            q: "A variable declared in an interface can be changed by a class that implements it.",
            answer: false,
            explain: "Interface variables are public static final constants.",
          },
          {
            kind: "fill",
            q: "A class uses the keyword ___ to promise that it provides the methods of an interface.",
            answer: ["implements"],
            explain: "class Circle implements Shape.",
          },
          {
            kind: "mcq",
            q: "abstract class Bird { abstract void sound(); void fly() { System.out.println(\"flies\"); } } Which statement is true?",
            options: ["A subclass must define sound() unless it is also abstract", "new Bird() is allowed", "fly() must also be abstract", "Bird cannot have a constructor"],
            answer: 0,
            explain: "An abstract class may contain concrete methods and constructors, but cannot be instantiated.",
          },
          {
            kind: "numeric",
            q: "In Shapes.java, what area would a Square(4.5) report?",
            answer: 20.25,
            tolerance: 0.001,
            explain: "Square calls super(4.5, 4.5), and Rectangle's area() gives 4.5 × 4.5 = 20.25.",
          },
          {
            kind: "multi",
            q: "P r = new Q(); (from FieldTrace). Which use Q's version?",
            options: ["r.show()", "r.v", "r.hello()", "((Q) r).v"],
            answers: [0, 3],
            explain: "Only the instance method is dispatched dynamically; the cast to Q makes the reference type Q, so ((Q) r).v is 20.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "c12-cs-inheritance-practice",
        title: "Inheritance: Board Practice",
        summary: "An ISC-style superclass and subclass question with a model answer, output questions on chaining and dispatch, and short-answer comparisons.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Question.** A superclass **Item** has protected data members String **name** and double **cost**, a constructor **Item(String n, double c)** and a method void **show()** that prints the name and cost.\n\nA subclass **Taxed** has data members double **gstRate** (GST percentage) and double **total**. Methods: **Taxed(String n, double c, double g)**: parameterised constructor that also sets total to 0.0; void **compute()**: total = cost + GST on cost; void **show()**: prints all details using the superclass show(). Write the subclass. (A main() is added here only to test it.)",
          },
          {
            type: "code",
            lang: "java",
            caption: "Taxed.java (Item is the given superclass)",
            code: `class Item
{
    protected String name;
    protected double cost;

    Item(String n, double c)
    {
        name = n;
        cost = c;
    }

    void show()
    {
        System.out.println("Item: " + name);
        System.out.println("Cost: " + cost);
    }
}

class Taxed extends Item
{
    double gstRate;
    double total;

    Taxed(String n, double c, double g)
    {
        super(n, c);
        gstRate = g;
        total = 0.0;
    }

    void compute()
    {
        total = cost + cost * gstRate / 100;
    }

    void show()
    {
        super.show();
        System.out.println("GST %: " + gstRate);
        System.out.println("Total: " + total);
    }

    public static void main(String[] args)
    {
        Taxed t = new Taxed("Mixer", 2000, 18);
        t.compute();
        t.show();
    }
}

/* Output:
Item: Mixer
Cost: 2000.0
GST %: 18.0
Total: 2360.0
*/`,
          },
          {
            type: "example",
            title: "Checking the answer",
            problem: "Verify the output for a mixer of cost ₹2000 with 18% GST.",
            steps: [
              "super(n, c) stores \"Mixer\" and 2000.0 (the int 2000 is widened to double, which is why 2000.0 is printed).",
              "compute(): total = 2000 + 2000 × 18 / 100 = 2000 + 360 = 2360.0.",
              "show() first runs Item's show() through super.show(), then prints the subclass's own data.",
            ],
            answer: "Total: 2360.0",
          },
          {
            type: "mistake",
            wrong: "In Taxed, redeclare protected String name; protected double cost; so that compute() can use them.",
            right: "Do not redeclare inherited members. Taxed already has name and cost from Item and can use them because they are protected.",
            why: "Redeclaring creates new fields that **hide** the inherited ones. super(n, c) fills Item's copies, while compute() would read the new, still-zero copies, and the total would be 0.0.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What would Taxed(\"Fan\", 1500, 12) print as Total after compute()?",
                answer: 1680,
                unit: "₹",
                explain: "1500 + 1500 × 12 / 100 = 1500 + 180 = 1680.0.",
              },
            ],
          },
          {
            type: "example",
            title: "Output question: an overridden method called from the superclass",
            problem: "class X { void m() { System.out.print(\"X\"); } void call() { m(); } } class Y extends X { void m() { System.out.print(\"Y\"); } } What does new Y().call(); print, and what does new X().call(); print?",
            steps: [
              "call() is inherited by Y. Inside it, m() means this.m().",
              "For a Y object, this is a Y, so Y's m() runs and prints Y.",
              "For an X object, X's m() runs and prints X.",
            ],
            answer: "Y, then X: overriding works even when the call comes from an inherited method.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Item i = new Taxed(\"Lamp\", 500, 5); i.show(); Which show() runs?",
              emoji: "🏷️",
              options: ["Taxed's show()", "Item's show()", "A compile-time error"],
              answer: 0,
              trap: 1,
              explain: "show() is overridden, so the object's class (Taxed) decides at run time. Calling i.compute() would not compile, because Item has no compute(): the reference type limits which methods can be named.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Bill b = new Bill(50); (from Electricity.java) gives:",
                options: ["a compile-time error, because Bill is abstract", "an object with charge() = 0", "a run-time error", "a Domestic object"],
                answer: 0,
                explain: "An abstract class cannot be instantiated; only its concrete subclasses can.",
              },
            ],
          },
          {
            type: "heading",
            text: "Program to write",
          },
          {
            type: "text",
            md: "**Question.** A superclass **Account** has protected data members String **holder** and double **balance**, a constructor and a method void **show()**. Write a subclass **Savings** with data member double **rate** (annual interest %) and methods: **Savings(String h, double b, double r)**; void **addInterest()**: adds one year's simple interest to balance; void **show()**: prints all data using the superclass method. For holder Ravi, balance ₹12,000 and rate 6.5%, the new balance should be ₹12,780.0.",
          },
          {
            type: "table",
            headers: ["Short question", "Model answer (one line)"],
            rows: [
              ["Why is super(...) the first statement?", "The superclass part of the object must be initialised before the subclass part."],
              ["What is method overriding?", "Redefining an inherited method in a subclass with the same signature."],
              ["How does Java support multiple inheritance?", "A class can implement more than one interface."],
              ["What does final do to a method?", "It cannot be overridden in a subclass."],
              ["What does final do to a class?", "It cannot be extended."],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Read the specification for the access specifier: if the superclass members are protected, use them directly in the subclass. Keep method names and parameters exactly as given, and in show() call super.show() rather than reprinting the superclass's data yourself.",
          },
          {
            type: "keypoints",
            items: [
              "Write only the subclass unless told otherwise; use extends and super(...).",
              "Never redeclare inherited data members in the subclass.",
              "An overridden method called through a superclass reference runs the object's version.",
              "The reference type decides which methods can be named; the object decides which version runs.",
              "final method: cannot be overridden; final class: cannot be extended.",
            ],
          },
        ],
        flashcards: [
          { front: "Total with GST", back: "total = cost + cost × rate / 100." },
          { front: "Effect of redeclaring an inherited field", back: "The new field hides the inherited one; the superclass constructor fills the hidden copy." },
          { front: "Item i = new Taxed(...); i.compute();", back: "Compile-time error: Item has no compute() method." },
          { front: "final method", back: "A method that cannot be overridden." },
          { front: "final class", back: "A class that cannot be extended (e.g. String)." },
          { front: "Calling an overridden method from an inherited method", back: "this.m() still dispatches to the object's class version." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "class A { int f() { return 1; } } class B extends A { int f() { return 2; } } A a = new B(); System.out.println(a.f() + new A().f());",
            options: ["3", "2", "4", "21"],
            answer: 0,
            explain: "a.f() is B's version (2) and new A().f() is 1; both are ints, so 2 + 1 = 3.",
          },
          {
            kind: "mcq",
            q: "Which line in a subclass constructor of Taxed is correct?",
            options: ["super(n, c);", "Item(n, c);", "this.Item(n, c);", "super.Item(n, c);"],
            answer: 0,
            explain: "The superclass constructor is called only through super(arguments).",
          },
          {
            kind: "truefalse",
            q: "A final class can be used as a superclass.",
            answer: false,
            explain: "final on a class forbids extending it.",
          },
          {
            kind: "numeric",
            q: "Taxed t = new Taxed(\"TV\", 30000, 28); after t.compute(), what is t.total?",
            answer: 38400,
            explain: "30000 × 28 / 100 = 8400, so total = 38400.0.",
          },
          {
            kind: "fill",
            q: "Inside Taxed.show(), the call ___.show() runs the version written in Item.",
            answer: ["super"],
            explain: "super.show() reaches the superclass method that Taxed overrides.",
          },
          {
            kind: "mcq",
            q: "class M { M() { System.out.print(\"1\"); } M(int x) { this(); System.out.print(\"2\"); } } class N extends M { N() { super(5); System.out.print(\"3\"); } } new N(); prints:",
            options: ["123", "23", "321", "13"],
            answer: 0,
            explain: "N() calls M(5), which first calls M() through this() (printing 1), then prints 2; finally N prints 3.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Which pair correctly names the polymorphism types?",
            options: ["Overloading: compile time; overriding: run time", "Overloading: run time; overriding: compile time", "Both are compile time", "Both are run time"],
            answer: 0,
            explain: "Overloads are fixed by the compiler from the argument list; overrides are chosen from the object at run time.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Data Structures                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-java-data-structures",
    title: "Data Structures",
    icon: "🧺",
    description: "Stacks and queues in arrays, infix to postfix conversion, circular queues and deques, a data structure defined through an interface, singly linked lists, and binary tree terms and traversals in Java.",
    lessons: [
      {
        slug: "c12-cs-stack-queue",
        title: "Stack and Queue",
        summary: "LIFO and FIFO, array implementations with top, front and rear, overflow and underflow, and the stack applications ISC asks about: infix to postfix and postfix evaluation.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "illustration",
            emoji: "🍽️",
            caption: "At a wedding buffet, plates are taken from the top of the pile and washed plates are put back on top: a stack. At the ticket counter of a railway station, the first person in line is served first: a queue.",
          },
          {
            type: "text",
            md: "A **data structure** is a way of organising data so that it can be used efficiently. A **linear** data structure arranges elements in a sequence (array, stack, queue, linked list); a **non-linear** one does not (tree, graph).\n\nA **stack** is a linear structure in which insertion (**push**) and deletion (**pop**) happen at one end only, the **top**. It works on **LIFO**: last in, first out. Pushing onto a full stack is **overflow**; popping from an empty stack is **underflow**.",
          },
          {
            type: "code",
            lang: "java",
            caption: "Stack.java: an array stack with capacity 3",
            code: `public class Stack
{
    int arr[];
    int cap;
    int top;

    Stack(int n)
    {
        cap = n;
        arr = new int[cap];
        top = -1;
    }

    void push(int v)
    {
        if (top == cap - 1)
            System.out.println("STACK OVERFLOW");
        else
            arr[++top] = v;
    }

    int pop()
    {
        if (top == -1)
            return -9999;     // underflow signal
        return arr[top--];
    }

    void display()
    {
        if (top == -1)
        {
            System.out.println("STACK EMPTY");
            return;
        }
        for (int i = top; i >= 0; i--)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        Stack s = new Stack(3);
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.display();
        System.out.println("Popped " + s.pop());
        System.out.println("Popped " + s.pop());
        s.display();
    }
}

/* Output:
STACK OVERFLOW
30 20 10
Popped 30
Popped 20
10
*/`,
          },
          {
            type: "text",
            md: "A **queue** is a linear structure in which elements are inserted at the **rear** and deleted from the **front**. It works on **FIFO**: first in, first out. In the array version below, front and rear start at −1 (empty queue).",
          },
          {
            type: "code",
            lang: "java",
            caption: "Queue.java: a simple (linear) array queue",
            code: `public class Queue
{
    int q[];
    int cap;
    int front, rear;

    Queue(int n)
    {
        cap = n;
        q = new int[cap];
        front = -1;
        rear = -1;
    }

    void insert(int v)
    {
        if (rear == cap - 1)
        {
            System.out.println("QUEUE OVERFLOW");
            return;
        }
        if (front == -1)
            front = 0;
        q[++rear] = v;
    }

    int delete()
    {
        if (front == -1 || front > rear)
            return -9999;     // underflow signal
        return q[front++];
    }

    void display()
    {
        if (front == -1 || front > rear)
        {
            System.out.println("QUEUE EMPTY");
            return;
        }
        for (int i = front; i <= rear; i++)
            System.out.print(q[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        Queue t = new Queue(3);
        t.insert(5);
        t.insert(8);
        t.insert(2);
        System.out.println("Removed " + t.delete());
        t.display();
        t.insert(7);
    }
}

/* Output:
Removed 5
8 2
QUEUE OVERFLOW
*/`,
          },
          {
            type: "mistake",
            wrong: "After one element is deleted, a linear queue of capacity 3 always has room for one more element.",
            right: "In a linear array queue, rear only moves forward. Once rear reaches cap − 1, insert() reports overflow even if front has moved and cells at the start are free. A **circular queue** fixes this.",
            why: "We picture a real queue moving up as people leave. The array does not shift its elements, so the freed cell at index 0 is never reused, as the last line of the output shows.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "An empty stack receives push(4), push(9), pop(), push(6), push(1), pop(). What is now on top?",
                options: ["6", "1", "9", "4"],
                answer: 0,
                explain: "4 → 4 9 → 4 → 4 6 → 4 6 1 → 4 6. The top is 6.",
              },
            ],
          },
          {
            type: "heading",
            text: "Stack application: infix to postfix",
          },
          {
            type: "text",
            md: "In **infix** notation the operator is between its operands (A + B). In **postfix** (Reverse Polish) it comes after (A B +), and in **prefix** (Polish) before (+ A B). Postfix and prefix need no brackets, so a computer can evaluate them with one stack.\n\nPrecedence, highest first: ^ (exponent), then * and /, then + and −. Operators of equal precedence are taken left to right (except ^, which is right to left). To convert by hand, bracket each operation in order of precedence, then move each operator to the end (postfix) or the front (prefix) of its bracket.",
          },
          {
            type: "example",
            title: "Converting and evaluating",
            problem: "Convert (A + B) * C − D / E to postfix and prefix. Then evaluate the postfix expression 6 2 3 + * 4 − with a stack.",
            steps: [
              "Fully bracket: (((A + B) * C) − (D / E)).",
              "Postfix: A + B → AB+; times C → AB+C*; D / E → DE/; subtract → AB+C*DE/−.",
              "Prefix: +AB; *+ABC; /DE; −*+ABC/DE.",
              "Evaluate 6 2 3 + * 4 −: push 6, 2, 3; + pops 3 and 2, pushes 5; * pops 5 and 6, pushes 30; push 4; − pops 4 and 30, pushes 30 − 4 = 26.",
            ],
            answer: "Postfix AB+C*DE/−, prefix −*+ABC/DE; the postfix value is 26.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Stack (LIFO) or queue (FIFO)?",
              groups: ["Stack", "Queue"],
              items: [
                { text: "Undo in a text editor", group: 0, hint: "The last change is undone first." },
                { text: "Printer jobs waiting to print", group: 1, hint: "The first job sent prints first." },
                { text: "Method calls during recursion", group: 0, hint: "The latest call returns first." },
                { text: "Customers at a bank counter", group: 1, hint: "First come, first served." },
                { text: "Evaluating a postfix expression", group: 0, hint: "Operands are pushed and the latest two are popped." },
                { text: "Keyboard buffer of typed characters", group: 1, hint: "Characters are processed in the order typed." },
              ],
              explain: "Anything that must be reversed or nested uses a stack; anything served in arrival order uses a queue.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "ISC papers often ask for the postfix (or prefix) form of an infix expression with brackets: show the bracketing steps. In stack and queue programs, the underflow value to return (such as −9999) and the overflow message are given in the question; use exactly those.",
          },
          {
            type: "keypoints",
            items: [
              "Stack: LIFO, one end (top); push and pop; top = −1 means empty, top = cap − 1 means full.",
              "Queue: FIFO, insert at rear, delete from front.",
              "Overflow: inserting into a full structure; underflow: deleting from an empty one.",
              "A linear array queue cannot reuse freed cells at the front.",
              "Postfix puts the operator after the operands and is evaluated with one stack.",
            ],
          },
        ],
        flashcards: [
          { front: "LIFO", back: "Last In, First Out: the rule of a stack." },
          { front: "FIFO", back: "First In, First Out: the rule of a queue." },
          { front: "Stack overflow (array stack)", back: "push() when top == capacity − 1." },
          { front: "Stack underflow", back: "pop() when top == −1 (stack empty)." },
          { front: "Postfix of A + B * C", back: "A B C * +." },
          { front: "Prefix of (A + B) * C", back: "* + A B C." },
          { front: "Applications of a stack", back: "Recursion (call stack), undo, reversing data, expression conversion and evaluation." },
          { front: "Applications of a queue", back: "Printer spooling, CPU scheduling, keyboard buffers, serving requests in order." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The postfix form of A * (B + C) − D is:",
            options: ["A B C + * D −", "A B + C * D −", "A B C * + D −", "− * A + B C D"],
            answer: 0,
            explain: "B + C → BC+; A * that → ABC+*; minus D → ABC+*D−. The last option is the prefix form.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Evaluate the postfix expression 8 2 / 3 4 * +.",
            answer: 16,
            explain: "8 / 2 = 4; 3 * 4 = 12; 4 + 12 = 16.",
          },
          {
            kind: "truefalse",
            q: "In the array stack, pop() returns arr[top--], which returns the top element and then lowers top.",
            answer: true,
            explain: "Post-decrement uses the current top as the index, then decreases it.",
          },
          {
            kind: "mcq",
            q: "A queue of capacity 4 (front = rear = −1) receives insert(3), insert(7), delete(), insert(1). The values of front and rear are:",
            options: ["1 and 2", "0 and 2", "1 and 1", "0 and 1"],
            answer: 0,
            explain: "insert(3): front 0, rear 0. insert(7): rear 1. delete(): front 1. insert(1): rear 2.",
          },
          {
            kind: "fill",
            q: "Deleting from an empty stack or queue is called ___.",
            answer: ["underflow"],
            explain: "Inserting into a full one is overflow.",
          },
          {
            kind: "mcq",
            q: "The prefix form of A − B / C is:",
            options: ["− A / B C", "/ − A B C", "A B C / −", "− / A B C"],
            answer: 0,
            explain: "B / C → /BC; A − that → −A/BC.",
          },
          {
            kind: "multi",
            q: "Which are linear data structures?",
            options: ["Stack", "Queue", "Binary tree", "Linked list"],
            answers: [0, 1, 3],
            explain: "A tree branches, so it is non-linear.",
          },
        ],
      },
      {
        slug: "c12-cs-circular-queue-deque",
        title: "Circular Queue, Deque and Interfaces",
        summary: "Reusing array cells with a circular queue, the double-ended queue, and defining a stack through an interface so it can have more than one implementation.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "In a **circular queue** the last cell of the array is followed by the first. The indices move forward with the **modulus** operator: rear = (rear + 1) % cap. Cells freed at the front can then be reused.\n\nWith front and rear starting at −1, the queue is **empty** when front == −1, and **full** when (rear + 1) % cap == front.",
          },
          {
            type: "code",
            lang: "java",
            caption: "CQueue.java: a circular queue of capacity 3",
            code: `public class CQueue
{
    int q[];
    int cap;
    int front, rear;

    CQueue(int n)
    {
        cap = n;
        q = new int[cap];
        front = -1;
        rear = -1;
    }

    void enqueue(int v)
    {
        if ((rear + 1) % cap == front)
        {
            System.out.println("OVERFLOW");
            return;
        }
        if (front == -1)
            front = 0;
        rear = (rear + 1) % cap;
        q[rear] = v;
    }

    int dequeue()
    {
        if (front == -1)
            return -9999;
        int v = q[front];
        if (front == rear)          // last element removed
            front = rear = -1;
        else
            front = (front + 1) % cap;
        return v;
    }

    void display()
    {
        if (front == -1)
        {
            System.out.println("EMPTY");
            return;
        }
        int i = front;
        while (true)
        {
            System.out.print(q[i] + " ");
            if (i == rear)
                break;
            i = (i + 1) % cap;
        }
        System.out.println("(front=" + front + ", rear=" + rear + ")");
    }

    public static void main(String[] args)
    {
        CQueue c = new CQueue(3);
        c.enqueue(11);
        c.enqueue(22);
        c.enqueue(33);
        c.enqueue(44);
        System.out.println("Out: " + c.dequeue());
        c.enqueue(44);
        c.display();
    }
}

/* Output:
OVERFLOW
Out: 11
22 33 44 (front=1, rear=0)
*/`,
          },
          {
            type: "example",
            title: "Tracing the circular queue",
            problem: "Trace front and rear through the main() of CQueue.java.",
            steps: [
              "enqueue 11, 22, 33: front = 0, rear = 0 → 1 → 2. The array is 11 22 33.",
              "enqueue(44): (2 + 1) % 3 = 0 = front, so OVERFLOW.",
              "dequeue(): returns 11, front = 1.",
              "enqueue(44): (2 + 1) % 3 = 0 ≠ 1, so rear = 0 and q[0] = 44. The freed cell is reused.",
              "display() starts at front = 1: 22, 33, then wraps to index 0: 44.",
            ],
            answer: "OVERFLOW / Out: 11 / 22 33 44 (front=1, rear=0)",
          },
          {
            type: "mistake",
            wrong: "A circular queue is full when rear == cap − 1, as in a linear queue.",
            right: "A circular queue is full when (rear + 1) % cap == front. rear can be at any index, including below front.",
            why: "The linear-queue test is learned first and looks the same. But after wrapping, rear = cap − 1 can happen with free cells at the front, and rear = 0 can happen in a full queue, as in the trace above.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In a circular queue of capacity 5, rear = 4. After one successful enqueue, what is rear?",
                answer: 0,
                explain: "(4 + 1) % 5 = 0: rear wraps to the first cell.",
              },
            ],
          },
          {
            type: "text",
            md: "A **deque** (double-ended queue, also written *dequeue* in ISC papers) allows insertion and deletion at **both** ends. An **input-restricted** deque allows insertion at one end only; an **output-restricted** deque allows deletion at one end only. A deque can act as a stack (use one end) or as a queue (insert at one end, delete at the other).",
          },
          {
            type: "code",
            lang: "java",
            caption: "Dequeue.java: a deque in an array of size 4",
            code: `public class Dequeue
{
    int dq[];
    int cap;
    int front, rear;

    Dequeue(int n)
    {
        cap = n;
        dq = new int[cap];
        front = 0;
        rear = -1;         // empty when rear < front
    }

    void addRear(int v)
    {
        if (rear == cap - 1)
            System.out.println("NO SPACE AT REAR");
        else
            dq[++rear] = v;
    }

    void addFront(int v)
    {
        if (front == 0)
            System.out.println("NO SPACE AT FRONT");
        else
            dq[--front] = v;
    }

    int removeFront()
    {
        if (rear < front)
            return -9999;
        return dq[front++];
    }

    int removeRear()
    {
        if (rear < front)
            return -9999;
        return dq[rear--];
    }

    void display()
    {
        for (int i = front; i <= rear; i++)
            System.out.print(dq[i] + " ");
        System.out.println();
    }

    public static void main(String[] args)
    {
        Dequeue d = new Dequeue(4);
        d.addRear(1);
        d.addRear(2);
        d.addRear(3);
        d.addFront(9);
        System.out.println(d.removeFront());
        d.addFront(9);
        System.out.println(d.removeRear());
        d.display();
    }
}

/* Output:
NO SPACE AT FRONT
1
3
9 2
*/`,
          },
          {
            type: "text",
            md: "**Defining a data structure through an interface.** An interface states *what* a structure can do, and different classes decide *how*. Code written against the interface works with any implementation: an array stack today, a linked-list stack tomorrow.",
          },
          {
            type: "code",
            lang: "java",
            caption: "StackDemo.java: a stack defined by an interface",
            code: `interface IntStack
{
    void push(int v);
    int pop();
    boolean isEmpty();
}

class ArrayStack implements IntStack
{
    private int a[] = new int[10];
    private int top = -1;

    public void push(int v)
    {
        a[++top] = v;
    }

    public int pop()
    {
        return a[top--];
    }

    public boolean isEmpty()
    {
        return top == -1;
    }
}

public class StackDemo
{
    // reverses a number's digits using any IntStack
    static int reverseDigits(int n, IntStack s)
    {
        while (n > 0)
        {
            s.push(n % 10);
            n /= 10;
        }
        int r = 0, place = 1;
        while (!s.isEmpty())
        {
            r = r + s.pop() * place;
            place *= 10;
        }
        return r;
    }

    public static void main(String[] args)
    {
        System.out.println(reverseDigits(5823, new ArrayStack()));
    }
}

/* Output:
3285
*/`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "In reverseDigits(5823), which digit is popped first?",
              emoji: "🔄",
              options: ["5", "3", "8", "2"],
              answer: 0,
              trap: 1,
              explain: "Digits are pushed from the right: 3, 2, 8, 5. The last pushed, 5, is popped first and gets place value 1, giving 5 + 80 + 200 + 3000 = 3285.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "For circular queue programs, write the full and empty conditions as comments at the top of the class; examiners look for the % operator in both enqueue and dequeue. For a deque, the question tells you which end each method works on (for example addFront and popRear): follow those names exactly.",
          },
          {
            type: "keypoints",
            items: [
              "Circular queue: rear = (rear + 1) % cap; full when (rear + 1) % cap == front.",
              "When the last element leaves a circular queue, reset front = rear = −1.",
              "Deque: insert and delete at both ends; input- and output-restricted forms exist.",
              "An interface defines a structure's operations; classes give implementations.",
              "Code written against an interface works with any implementing class.",
            ],
          },
        ],
        flashcards: [
          { front: "Advance an index in a circular queue", back: "i = (i + 1) % capacity." },
          { front: "Circular queue full (front = rear = −1 convention)", back: "(rear + 1) % cap == front." },
          { front: "Advantage of a circular queue", back: "Cells freed at the front are reused, so no space is wasted." },
          { front: "Deque", back: "Double-ended queue: insertion and deletion at both ends." },
          { front: "Input-restricted deque", back: "Insertion at only one end; deletion at both ends." },
          { front: "Output-restricted deque", back: "Deletion at only one end; insertion at both ends." },
          { front: "Why define a stack with an interface?", back: "The same operations can have several implementations (array, linked list) without changing the code that uses them." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A circular queue of capacity 4 has front = 2 and rear = 1. It is:",
            options: ["full", "empty", "holding one element", "in an invalid state"],
            answer: 0,
            explain: "(1 + 1) % 4 = 2 = front, so it is full: the elements are at indices 2, 3, 0, 1.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A circular queue has capacity 6, front = 4 and rear = 1. How many elements does it hold?",
            answer: 4,
            explain: "Indices 4, 5, 0, 1: four elements. Formula: (rear − front + cap) % cap + 1 = (1 − 4 + 6) % 6 + 1 = 4.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A deque in which insertion and deletion are both done at the same single end behaves as a stack.",
            answer: true,
            explain: "Using one end for both operations gives LIFO behaviour.",
          },
          {
            kind: "mcq",
            q: "In Dequeue.java, why does the first addFront(9) fail?",
            options: ["front is 0, so there is no cell before it", "the deque is full", "rear < front", "addFront works only after addRear"],
            answer: 0,
            explain: "In this simple array deque, addFront needs a free cell before front. It succeeds later, after removeFront() has moved front to 1.",
          },
          {
            kind: "fill",
            q: "The methods of a Java interface are implemented in a class with the access specifier ___.",
            answer: ["public"],
            explain: "Interface methods are public, and an implementation cannot reduce their visibility.",
          },
          {
            kind: "mcq",
            q: "What does reverseDigits(470, new ArrayStack()) return?",
            options: ["74", "740", "47", "0"],
            answer: 0,
            explain: "Pushes 0, 7, 4; pops 4 (×1), 7 (×10), 0 (×100): 4 + 70 + 0 = 74.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In CQueue, dequeue() on a queue holding exactly one element sets:",
            options: ["front = rear = −1", "front = rear + 1", "front = 0, rear = 0", "nothing"],
            answer: 0,
            explain: "When front == rear, the last element is leaving, so the queue is reset to empty.",
          },
        ],
      },
      {
        slug: "c12-cs-linked-list-tree",
        title: "Linked Lists and Binary Trees",
        summary: "Self-referential Node classes, inserting, counting and deleting in a singly linked list, binary tree terms, and preorder, inorder and postorder traversals of a binary search tree.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "A **linked list** is a linear collection of **nodes**. Each node holds data and a **reference** (link) to the next node. The first node is reached through a reference called **start** (or head); the last node's link is **null**. A Node class that contains a reference to its own type is a **self-referential** (recursive) data structure.\n\nUnlike an array, a linked list grows and shrinks at run time, and inserting or deleting needs only a change of links, not shifting of elements. The cost is that there is no direct access by index: you must walk the list from start.",
          },
          {
            type: "code",
            lang: "java",
            caption: "LinkList.java",
            code: `class Node
{
    int data;
    Node next;

    Node(int d)
    {
        data = d;
        next = null;
    }
}

public class LinkList
{
    Node start;

    LinkList()
    {
        start = null;
    }

    void insertEnd(int v)
    {
        Node n = new Node(v);
        if (start == null)
        {
            start = n;
            return;
        }
        Node p = start;
        while (p.next != null)
            p = p.next;
        p.next = n;
    }

    void insertBeg(int v)
    {
        Node n = new Node(v);
        n.next = start;
        start = n;
    }

    int count()
    {
        int c = 0;
        for (Node p = start; p != null; p = p.next)
            c++;
        return c;
    }

    // deletes the first node holding v
    void delete(int v)
    {
        if (start == null)
            return;
        if (start.data == v)
        {
            start = start.next;
            return;
        }
        Node p = start;
        while (p.next != null && p.next.data != v)
            p = p.next;
        if (p.next != null)
            p.next = p.next.next;
    }

    void display()
    {
        for (Node p = start; p != null; p = p.next)
            System.out.print(p.data + " -> ");
        System.out.println("null");
    }

    public static void main(String[] args)
    {
        LinkList L = new LinkList();
        L.insertEnd(20);
        L.insertEnd(30);
        L.insertBeg(10);
        L.insertEnd(40);
        L.display();
        L.delete(30);
        L.display();
        System.out.println("Nodes: " + L.count());
    }
}

/* Output:
10 -> 20 -> 30 -> 40 -> null
10 -> 20 -> 40 -> null
Nodes: 3
*/`,
          },
          {
            type: "mistake",
            wrong: "To insert at the beginning, write start = n; and then n.next = start;",
            right: "Link first, then move start: n.next = start; start = n;",
            why: "Both lines are needed, so the order looks unimportant. But after start = n, the old first node has no reference left, and n.next = start makes n point to itself: the rest of the list is lost.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In delete(v), why does the loop test p.next.data rather than p.data?",
                options: ["To stop at the node before the one to delete, so its link can be changed", "Because p.data is private", "To skip the first node", "To make the loop faster"],
                answer: 0,
                explain: "In a singly linked list you cannot go back, so you stop one node early and set p.next = p.next.next.",
              },
            ],
          },
          {
            type: "heading",
            text: "Binary trees",
          },
          {
            type: "text",
            md: "A **tree** is a non-linear structure of nodes joined by edges, with one special node, the **root**. In a **binary tree** every node has at most two children, the **left child** and the **right child**. Each child is the root of a smaller binary tree (its **subtree**), so a binary tree is also a recursive data structure.\n\nIn a **binary search tree (BST)**, every value in a node's left subtree is smaller than the node, and every value in its right subtree is larger (or equal, in the code below).",
          },
          {
            type: "table",
            headers: ["Term", "Meaning", "In the BST built from 50, 30, 70, 20, 40, 60, 80"],
            rows: [
              ["Root", "the top node, with no parent", "50"],
              ["Leaf (external node)", "a node with no children", "20, 40, 60, 80"],
              ["Internal node", "a node with at least one child", "50, 30, 70"],
              ["Siblings", "nodes with the same parent", "30 and 70; 20 and 40; 60 and 80"],
              ["Level / depth of a node", "number of edges from the root (root at level 0)", "40 is at level 2"],
              ["Height of the tree", "edges on the longest root-to-leaf path", "2"],
              ["Size", "number of nodes", "7"],
              ["Degree of a node", "number of its children", "2 for 50, 0 for 80"],
            ],
          },
          {
            type: "code",
            lang: "java",
            caption: "BST.java: building a binary search tree and traversing it",
            code: `class TNode
{
    int data;
    TNode left, right;

    TNode(int d)
    {
        data = d;
        left = right = null;
    }
}

public class BST
{
    TNode root;

    TNode insert(TNode r, int v)
    {
        if (r == null)
            return new TNode(v);
        if (v < r.data)
            r.left = insert(r.left, v);
        else
            r.right = insert(r.right, v);
        return r;
    }

    void preorder(TNode r)
    {
        if (r == null)
            return;
        System.out.print(r.data + " ");
        preorder(r.left);
        preorder(r.right);
    }

    void inorder(TNode r)
    {
        if (r == null)
            return;
        inorder(r.left);
        System.out.print(r.data + " ");
        inorder(r.right);
    }

    void postorder(TNode r)
    {
        if (r == null)
            return;
        postorder(r.left);
        postorder(r.right);
        System.out.print(r.data + " ");
    }

    public static void main(String[] args)
    {
        BST t = new BST();
        int keys[] = {50, 30, 70, 20, 40, 60, 80};
        for (int k : keys)
            t.root = t.insert(t.root, k);
        t.preorder(t.root);
        System.out.println();
        t.inorder(t.root);
        System.out.println();
        t.postorder(t.root);
        System.out.println();
    }
}

/* Output:
50 30 20 40 70 60 80
20 30 40 50 60 70 80
20 40 30 60 80 70 50
*/`,
          },
          {
            type: "example",
            title: "Reading the three traversals",
            problem: "Explain the three output lines of BST.java.",
            steps: [
              "Preorder (Root, Left, Right): visit 50, then all of the left subtree (30, 20, 40), then the right subtree (70, 60, 80).",
              "Inorder (Left, Root, Right): left subtree 20 30 40, then 50, then 60 70 80. For a BST, inorder always gives ascending order.",
              "Postorder (Left, Right, Root): 20 40 30, then 60 80 70, and the root 50 comes last.",
            ],
            answer: "Pre: 50 30 20 40 70 60 80; In: 20 30 40 50 60 70 80; Post: 20 40 30 60 80 70 50",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each traversal to its visiting order.",
              pairs: [
                ["Preorder", "Root, Left, Right"],
                ["Inorder", "Left, Root, Right"],
                ["Postorder", "Left, Right, Root"],
                ["Inorder of a BST", "values in ascending order"],
              ],
              explain: "The name tells you where the root goes: pre = first, in = middle, post = last.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "Linked list questions in ISC ask for an **algorithm or a method** using a given Node class (for example, count the nodes holding even numbers, or insert after a given node). Always handle the empty list (start == null) first. Tree questions give a diagram and ask for terms and traversals: write each traversal by visiting subtrees completely before moving on.",
          },
          {
            type: "keypoints",
            items: [
              "A linked list node holds data and a reference to the next node; the last link is null.",
              "Insert at the beginning: n.next = start; start = n.",
              "To delete, stop at the node before the target and bypass it.",
              "Binary tree: each node has at most two children; root at level 0; leaves have no children.",
              "Preorder: N L R; inorder: L N R (sorted for a BST); postorder: L R N.",
            ],
          },
        ],
        flashcards: [
          { front: "Self-referential class", back: "A class with a data member that refers to an object of the same class, e.g. Node next." },
          { front: "Advantage of a linked list over an array", back: "Its size changes at run time, and insertion or deletion needs only link changes." },
          { front: "Disadvantage of a linked list", back: "No direct access by index; extra memory for the links." },
          { front: "Leaf node", back: "A node with no children." },
          { front: "Binary search tree rule", back: "Left subtree values < node < right subtree values." },
          { front: "Inorder traversal of a BST", back: "Gives the values in ascending order." },
          { front: "Postorder visiting order", back: "Left subtree, right subtree, then the root." },
          { front: "Level of the root (ISC convention)", back: "0." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Starting with an empty LinkList: insertBeg(5); insertBeg(8); insertEnd(2); display() prints:",
            options: ["8 -> 5 -> 2 -> null", "5 -> 8 -> 2 -> null", "2 -> 5 -> 8 -> null", "8 -> 2 -> 5 -> null"],
            answer: 0,
            explain: "insertBeg(8) puts 8 in front of 5; insertEnd(2) adds 2 at the end.",
          },
          {
            kind: "mcq",
            q: "Keys 40, 25, 60, 10, 30 are inserted into an empty BST. The preorder traversal is:",
            options: ["40 25 10 30 60", "10 25 30 40 60", "10 30 25 60 40", "40 25 60 10 30"],
            answer: 0,
            explain: "40 is the root; 25 left with children 10, 30; 60 right. Preorder: 40, 25, 10, 30, 60. Option 2 is inorder and option 3 is postorder.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many leaf nodes are in the BST built from 40, 25, 60, 10, 30?",
            answer: 3,
            explain: "10, 30 and 60 have no children.",
          },
          {
            kind: "truefalse",
            q: "In a singly linked list, the last node's next field is null.",
            answer: true,
            explain: "null marks the end of the list; loops stop when p becomes null.",
          },
          {
            kind: "fill",
            q: "The traversal Left, Right, Root is called ___ traversal.",
            answer: ["postorder", "post-order", "post order"],
            explain: "The root is visited last (post).",
          },
          {
            kind: "mcq",
            q: "Which code correctly counts the nodes of a list whose first node is start?",
            options: ["for (Node p = start; p != null; p = p.next) c++;", "for (Node p = start; p.next != null; p = p.next) c++;", "while (start != null) c++;", "for (Node p = start; p != null; p++) c++;"],
            answer: 0,
            explain: "Option 2 misses the last node (and fails on an empty list); option 3 never moves; option 4 does not compile.",
          },
          {
            kind: "multi",
            q: "For the BST from 50, 30, 70, 20, 40, 60, 80, which statements are true?",
            options: ["Its height is 2 (counting edges)", "70 and 30 are siblings", "40 is a leaf", "50 has degree 1"],
            answers: [0, 1, 2],
            explain: "50 has two children (30 and 70), so its degree is 2.",
          },
        ],
      },
      {
        slug: "c12-cs-data-structures-practice",
        title: "Data Structures: Board Practice",
        summary: "Mixed ISC-style questions: stack and queue traces, infix to postfix and prefix, circular-queue conditions, a linked-list method to write and binary tree traversals.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "These questions mix the forms used in the ISC theory paper: a short trace, a conversion, a method to write for a given Node class, and a tree to read. Write the working each time.",
          },
          {
            type: "example",
            title: "Q1: Postfix and prefix",
            problem: "Convert (P + Q) / (R − S) * T to postfix and to prefix.",
            steps: [
              "/ and * have equal precedence and are taken left to right: (((P + Q) / (R − S)) * T).",
              "Postfix: PQ+ and RS− → PQ+RS−/ → PQ+RS−/T*.",
              "Prefix: +PQ and −RS → /+PQ−RS → */+PQ−RST.",
            ],
            answer: "Postfix PQ+RS−/T*; prefix */+PQ−RST",
          },
          {
            type: "example",
            title: "Q2: Write a method for a given Node class",
            problem: "Using class Node { int data; Node next; }, write a method int sumEven(Node start) that returns the sum of the even values in the list.",
            steps: [
              "Set s = 0 and a reference p = start.",
              "While p != null: if p.data % 2 == 0, add p.data to s; then p = p.next.",
              "Return s. An empty list (start == null) correctly gives 0.",
              "Code: int sumEven(Node start) { int s = 0; for (Node p = start; p != null; p = p.next) if (p.data % 2 == 0) s += p.data; return s; }",
            ],
            answer: "For the list 10 → 15 → 22 → 7 → null, sumEven returns 32.",
          },
          {
            type: "code",
            lang: "java",
            caption: "ListSum.java: the method from Q2, tested, with a recursive version",
            code: `class Node
{
    int data;
    Node next;

    Node(int d, Node n)
    {
        data = d;
        next = n;
    }
}

public class ListSum
{
    static int sumEven(Node start)
    {
        int s = 0;
        for (Node p = start; p != null; p = p.next)
            if (p.data % 2 == 0)
                s += p.data;
        return s;
    }

    // recursive version: same result
    static int sumEvenRec(Node p)
    {
        if (p == null)
            return 0;
        return (p.data % 2 == 0 ? p.data : 0) + sumEvenRec(p.next);
    }

    public static void main(String[] args)
    {
        // builds 10 -> 15 -> 22 -> 7 -> null from the end
        Node start = new Node(10, new Node(15, new Node(22, new Node(7, null))));
        System.out.println(sumEven(start) + " " + sumEvenRec(start));
        System.out.println(sumEven(null));
    }
}

/* Output:
32 32
0
*/`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In ListSum.java, what would sumEvenRec return for the list 3 → 8 → 4 → null?",
                options: ["12", "15", "8", "0"],
                answer: 0,
                explain: "3 is odd (adds 0), then 8 + 4 = 12, and null returns 0.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "To evaluate A B − in postfix, pop A, then pop B, and compute A − B, taking the values in the order they come off the stack.",
            right: "The first value popped is the **right** operand. Pop B, then pop A, and compute A − B (second popped − first popped).",
            why: "Learners expect the stack to give the operands in reading order, but LIFO reverses them. For 9 3 −, the wrong order gives 3 − 9 = −6 instead of 6; for + and * the order does not matter, which hides the error.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Evaluate the postfix expression 5 1 2 + 4 * + 3 −.",
                answer: 14,
                explain: "1 + 2 = 3; 3 * 4 = 12; 5 + 12 = 17; 17 − 3 = 14.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "Q3: Binary tree terms",
            problem: "A binary tree has root K. K's children are F (left) and P (right). F's children are B (left) and H (right). P has only a right child, T. Give the leaves, the height, the level of H, and the three traversals.",
            steps: [
              "Leaves: B, H, T (no children). Internal nodes: K, F, P.",
              "Height: the longest path K → F → B (or K → P → T) has 2 edges, so the height is 2. H is at level 2.",
              "Preorder (N L R): K F B H P T.",
              "Inorder (L N R): B F H K P T. Postorder (L R N): B H F T P K.",
            ],
            answer: "Leaves B, H, T; height 2; H at level 2; pre K F B H P T; in B F H K P T; post B H F T P K",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to delete a node holding v from a linked list.",
              items: [
                "If start is null, stop",
                "If start.data == v, set start = start.next and stop",
                "Set p = start",
                "Move p forward while p.next is not null and p.next.data != v",
                "If p.next is not null, set p.next = p.next.next",
              ],
              explain: "Handle the empty list and the first node separately, then stop one node before the target and bypass it.",
            },
          },
          {
            type: "example",
            title: "Q4: Circular queue conditions",
            problem: "A circular queue in an array of size 5 has front = 3 and rear = 1. (a) Which indices hold elements? (b) Where will the next element go? (c) How many more can be inserted?",
            steps: [
              "Elements run from front to rear, wrapping: indices 3, 4, 0, 1 (four elements).",
              "Next position: (1 + 1) % 5 = 2.",
              "After that, (2 + 1) % 5 = 3 = front, so the queue is full. Only 1 more element fits.",
            ],
            answer: "(a) 3, 4, 0, 1 (b) index 2 (c) one",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "When asked for a linked-list method, the Node class is given: use its field names exactly (often num and next, or data and link). Algorithms may be written as numbered steps in English; either an algorithm or a method is usually accepted, but read the question.",
          },
          {
            type: "keypoints",
            items: [
              "Bracket fully before converting infix; equal precedence goes left to right.",
              "Walk a linked list with a separate reference p; handle start == null first.",
              "Traversals: visit each subtree completely before moving to the next part.",
              "Circular queue elements run from front to rear with wrap-around.",
              "Postfix evaluation: the second popped value is the left operand.",
            ],
          },
        ],
        flashcards: [
          { front: "Postfix of (P + Q) / (R − S) * T", back: "PQ+RS−/T*." },
          { front: "Prefix of (P + Q) / (R − S) * T", back: "*/+PQ−RST." },
          { front: "In postfix evaluation, for A B −", back: "Pop B first, then A; compute A − B." },
          { front: "Sum of even values in a linked list", back: "Walk with p from start to null; add p.data when p.data % 2 == 0." },
          { front: "Elements in a circular queue (size 5, front 3, rear 1)", back: "Four, at indices 3, 4, 0, 1." },
          { front: "Inorder of the tree K(F(B, H), P(-, T))", back: "B F H K P T." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The postfix form of A + B * C − D / E is:",
            options: ["A B C * + D E / −", "A B + C * D E / −", "A B C * D E / + −", "A B C + * D − E /"],
            answer: 0,
            explain: "B * C first → ABC*+; then D / E → DE/; then subtract: ABC*+DE/−.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Evaluate the postfix expression 9 3 − 2 ^ (where ^ is exponent).",
            answer: 36,
            explain: "9 − 3 = 6; 6 ^ 2 = 36.",
          },
          {
            kind: "mcq",
            q: "For the tree with root K (children F, P), F (children B, H) and P (right child T), the postorder traversal is:",
            options: ["B H F T P K", "K F B H P T", "B F H K P T", "B H T F P K"],
            answer: 0,
            explain: "Left subtree B H F, right subtree T P, then root K.",
          },
          {
            kind: "truefalse",
            q: "In an array stack, pop() on an empty stack should check top == −1 before reading arr[top].",
            answer: true,
            explain: "Otherwise arr[−1] throws an ArrayIndexOutOfBoundsException.",
          },
          {
            kind: "fill",
            q: "A tree in which every node has at most two children is called a ___ tree.",
            answer: ["binary"],
            explain: "Each node has a left and a right child reference, either of which can be null.",
          },
          {
            kind: "mcq",
            q: "An empty queue receives insert(4), insert(6), insert(9), delete(), insert(2), delete(). What is now at the front?",
            options: ["9", "6", "2", "4"],
            answer: 0,
            explain: "After the inserts: 4 6 9. delete removes 4; insert gives 6 9 2; delete removes 6. Front is 9.",
          },
          {
            kind: "mcq",
            q: "The method int f(Node p) { if (p == null) return 0; return 1 + f(p.next); } returns:",
            options: ["the number of nodes from p to the end", "the sum of the data values", "the last node's data", "always 1"],
            answer: 0,
            explain: "Each node adds 1 and the recursion stops at null: a recursive node count.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* ISC Class 12 · Complexity and Big O                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-complexity",
    title: "Complexity and Big O",
    icon: "📈",
    description: "Time and space complexity, counting steps, Big O notation and the dominant term, best, average and worst cases, and the complexity of common loops, searches, sorts and recursive methods.",
    lessons: [
      {
        slug: "c12-cs-big-o",
        title: "Big O Notation and Counting Steps",
        summary: "What complexity measures, counting the steps of loops, the formal idea of Big O, dropping constants and lower terms, the common complexity classes, and best, average and worst cases.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "📒",
            caption: "To find a name in an unsorted attendance register you may read every line. In the sorted phone contacts list, you can open near the middle and halve the search each time. For 1,000 names that is up to 1,000 looks against about 10.",
          },
          {
            type: "text",
            md: "The **complexity** of an algorithm measures the resources it needs as the input size n grows. **Time complexity** counts the number of basic steps (comparisons, assignments, arithmetic operations); **space complexity** counts the extra memory used.\n\nWe do not measure seconds, because they depend on the computer. Instead we ask how the step count **grows** with n. **Big O notation** describes this growth as an upper bound on the step count for large n.",
          },
          {
            type: "formula",
            tex: t`f(n) = O(g(n)) \iff \exists\, c > 0,\ n_0 \text{ such that } f(n) \le c \cdot g(n) \text{ for all } n \ge n_0`,
            caption: "f grows no faster than a constant multiple of g, once n is large enough.",
          },
          {
            type: "text",
            md: t`Two rules make Big O quick to find:

1. **Keep only the dominant (fastest-growing) term.** For $3n^2 + 5n + 7$, the $n^2$ term outgrows the rest, so the order is $O(n^2)$.
2. **Drop constant factors.** $O(3n^2)$ is written $O(n^2)$, and $O(n/2)$ is $O(n)$.

For example, a selection sort makes $\frac{n(n-1)}{2} = \frac{n^2}{2} - \frac{n}{2}$ comparisons, which is $O(n^2)$.`,
          },
          {
            type: "table",
            headers: ["Big O", "Name", "Typical code or algorithm"],
            rows: [
              [t`$O(1)$`, "constant", "accessing arr[i]; a fixed number of statements"],
              [t`$O(\log n)$`, "logarithmic", "binary search; a loop that halves i each time"],
              [t`$O(n)$`, "linear", "linear search; one loop from 0 to n; sum of an array"],
              [t`$O(n \log n)$`, "linearithmic", "merge sort; a loop to n with a halving loop inside"],
              [t`$O(n^2)$`, "quadratic", "bubble, selection, insertion sort; two nested loops to n"],
              [t`$O(2^n)$`, "exponential", "naive recursive Fibonacci; all subsets of n items"],
            ],
          },
          {
            type: "widget",
            widget: "big-o",
            caption: "Compare how quickly the growth curves separate as n increases. The ordering O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) holds for all large n.",
          },
          {
            type: "code",
            lang: "java",
            caption: "StepCount.java: counting how often each loop body runs",
            code: `public class StepCount
{
    public static void main(String[] args)
    {
        int sizes[] = {10, 100, 1000};
        for (int n : sizes)
        {
            int linear = 0, quad = 0, halve = 0, tri = 0;
            for (int i = 0; i < n; i++)
                linear++;
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    quad++;
            for (int i = n; i > 1; i = i / 2)
                halve++;
            for (int i = 0; i < n; i++)
                for (int j = i + 1; j < n; j++)
                    tri++;
            System.out.println(n + ": " + linear + " " + quad + " " + halve + " " + tri);
        }
    }
}

/* Output:
10: 10 100 3 45
100: 100 10000 6 4950
1000: 1000 1000000 9 499500
*/`,
          },
          {
            type: "example",
            title: "Reading the step counts",
            problem: "Use the output of StepCount.java to find the order of each loop.",
            steps: [
              t`linear: exactly n steps → $O(n)$.`,
              t`quad: $n \times n$ steps → $O(n^2)$. Multiplying n by 10 multiplies the steps by 100.`,
              t`halve: 3, 6, 9: it grows by about 3 each time n grows 10 times, since $\log_2 10 \approx 3.3$ → $O(\log n)$.`,
              t`tri: $\frac{n(n-1)}{2}$ steps (45, 4950, 499500). Half of quad, but still $O(n^2)$.`,
            ],
            answer: t`linear $O(n)$, quad $O(n^2)$, halve $O(\log n)$, tri $O(n^2)$`,
          },
          {
            type: "mistake",
            wrong: t`An algorithm taking $2n$ steps is of a higher order than one taking $n$ steps, so it should be written $O(2n)$.`,
            right: t`Both are $O(n)$. Big O ignores constant factors; it describes the **rate of growth**, and both double when n doubles.`,
            why: "The constant does change the actual running time, which is why it feels important. But changing the computer or compiler changes constants too, so Big O keeps only what stays the same: the shape of the growth.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`An algorithm makes $5n^3 + 100n^2 + 2000$ steps. Its order is:`,
                options: [t`$O(n^3)$`, t`$O(5n^3)$`, t`$O(n^2)$`, t`$O(2000)$`],
                answer: 0,
                explain: t`The $n^3$ term dominates for large n, and the constant 5 is dropped.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Best, average and worst case.** For the same n, the step count can depend on the data. In **linear search**, the best case is finding the key in the first position (1 comparison, $O(1)$); the worst case is a missing key or one in the last position (n comparisons, $O(n)$); the average for a present key is about $n/2$ comparisons, which is still $O(n)$. When people quote one Big O for an algorithm, they usually mean the **worst case**.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order these from slowest-growing to fastest-growing.",
              items: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
              explain: "For large n each class eventually needs far more steps than every class before it.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "ISC short questions ask for the complexity of a given code fragment, or the best and worst case of searching and sorting. Show how you counted (\"outer loop n times, inner loop n times, so n × n\") and then give the Big O. Learn: linear search O(n), binary search O(log n), bubble and selection sort O(n²).",
          },
          {
            type: "keypoints",
            items: [
              "Time complexity counts basic steps as a function of input size n.",
              "Big O gives an upper bound on growth: keep the dominant term, drop constants.",
              "Single loop to n: O(n); two nested loops to n: O(n²); halving loop: O(log n).",
              "Linear search: best O(1), worst O(n). Binary search: O(log n).",
              "Order: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).",
            ],
          },
        ],
        flashcards: [
          { front: "Time complexity", back: "A measure of how the number of basic steps of an algorithm grows with the input size n." },
          { front: "Space complexity", back: "A measure of how the extra memory needed by an algorithm grows with n." },
          { front: "Big O notation", back: "An upper bound on the growth rate: f(n) = O(g(n)) if f(n) ≤ c·g(n) for all n ≥ n₀." },
          { front: "Dominant term", back: "The fastest-growing term of the step count; it alone decides the Big O." },
          { front: "Complexity of binary search", back: "O(log n) in the worst case; O(1) in the best case." },
          { front: "Complexity of bubble and selection sort", back: "O(n²)." },
          { front: "Best case of linear search", back: "The key is the first element: 1 comparison, O(1)." },
          { front: "O(n/2) simplifies to", back: "O(n)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "for (int i = 1; i < n; i = i * 2) { s++; } has time complexity:",
            options: [t`$O(\log n)$`, t`$O(n)$`, t`$O(n^2)$`, t`$O(1)$`],
            answer: 0,
            explain: t`i takes the values 1, 2, 4, 8, ...: about $\log_2 n$ iterations.`,
          },
          {
            kind: "mcq",
            q: "Which is the worst-case complexity of linear search on n elements?",
            options: [t`$O(n)$`, t`$O(\log n)$`, t`$O(1)$`, t`$O(n^2)$`],
            answer: 0,
            explain: "A missing key needs all n comparisons.",
          },
          {
            kind: "numeric",
            q: "How many times does the inner statement run? for (int i = 0; i < 6; i++) for (int j = i + 1; j < 6; j++) c++;",
            answer: 15,
            explain: t`5 + 4 + 3 + 2 + 1 + 0 = 15 = $\frac{6 \times 5}{2}$.`,
          },
          {
            kind: "truefalse",
            q: t`An $O(n^2)$ algorithm is always slower than an $O(n)$ algorithm, even for n = 5.`,
            answer: false,
            explain: "Big O describes growth for large n. For small inputs, the constants can make an O(n²) algorithm faster.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Big O notation describes the ___ case unless stated otherwise.",
            answer: ["worst"],
            explain: "It gives an upper bound on the steps over all inputs of size n.",
          },
          {
            kind: "mcq",
            q: t`$T(n) = 4n \log_2 n + 3n + 10$. Its order is:`,
            options: [t`$O(n \log n)$`, t`$O(n)$`, t`$O(\log n)$`, t`$O(4n \log n + 3n)$`],
            answer: 0,
            explain: t`$n \log n$ grows faster than n, so it dominates; the constant 4 is dropped.`,
          },
          {
            kind: "multi",
            q: "Which of these are O(1)?",
            options: ["Reading arr[500] from an array", "Swapping two variables", "Finding the largest element of an unsorted array", "Checking if a number is even"],
            answers: [0, 1, 3],
            explain: "Finding the largest element must look at all n elements: O(n).",
          },
        ],
      },
      {
        slug: "c12-cs-complexity-practice",
        title: "Complexity: Board Practice",
        summary: "Finding the Big O of loops, nested loops and recursive methods, comparing algorithms, and best and worst cases of searching and sorting.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`To find the complexity of code: (1) find the statement that runs most often; (2) count how many times it runs in terms of n; (3) keep the dominant term and drop constants. Loops **one after another** add their counts; loops **one inside another** multiply them.`,
          },
          {
            type: "example",
            title: "Q1: Sequential and nested loops",
            problem: "Find the complexity: for (i = 0; i < n; i++) a++; for (i = 0; i < n; i++) for (j = 0; j < 10; j++) b++;",
            steps: [
              "First loop: n steps.",
              t`Second: the inner loop runs a fixed 10 times for each of n outer passes: $10n$ steps.`,
              t`Total $n + 10n = 11n$ → $O(n)$. The inner loop runs a constant number of times, so it does not make this $O(n^2)$.`,
            ],
            answer: t`$O(n)$`,
          },
          {
            type: "mistake",
            wrong: t`Any two nested loops give $O(n^2)$.`,
            right: t`Multiply the actual counts. An inner loop of fixed length (10) gives $O(n)$; an inner halving loop gives $O(n \log n)$; only an inner loop that grows with n gives $O(n^2)$.`,
            why: "Nested loops to n are the most common example taught, so the shape gets memorised instead of the counting. Always ask how many times the inner loop runs for each outer pass.",
          },
          {
            type: "example",
            title: "Q2: A loop with a halving loop inside",
            problem: "Find the complexity: for (i = 0; i < n; i++) for (j = n; j > 1; j = j / 2) c++;",
            steps: [
              t`The inner loop halves j from n down to 1: about $\log_2 n$ passes.`,
              t`It runs once for each of the n outer passes: $n \log_2 n$ steps.`,
            ],
            answer: t`$O(n \log n)$`,
          },
          {
            type: "code",
            lang: "java",
            caption: "LoopCheck.java: counting the steps of Q1 and Q2 for n = 16 (176 = 11 × 16, and 64 = 16 × log₂16 = 16 × 4)",
            code: `public class LoopCheck
{
    public static void main(String[] args)
    {
        int n = 16;
        int a = 0, b = 0, c = 0;
        for (int i = 0; i < n; i++)            // Q1, first loop
            a++;
        for (int i = 0; i < n; i++)            // Q1, second loop
            for (int j = 0; j < 10; j++)
                b++;
        for (int i = 0; i < n; i++)            // Q2
            for (int j = n; j > 1; j = j / 2)
                c++;
        System.out.println("Q1 steps: " + (a + b));
        System.out.println("Q2 steps: " + c);
    }
}

/* Output:
Q1 steps: 176
Q2 steps: 64
*/`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "for (i = 0; i < n; i++) for (j = 0; j < i; j++) for (k = 0; k < 3; k++) x++; Its complexity is:",
                options: [t`$O(n^2)$`, t`$O(n^3)$`, t`$O(n)$`, t`$O(3n)$`],
                answer: 0,
                explain: t`The j loop gives $\frac{n(n-1)}{2}$ passes and the k loop multiplies by 3: $\frac{3n(n-1)}{2}$ → $O(n^2)$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Q3: Recursive methods",
            problem: "Give the complexity of fact(n) (n * fact(n − 1)) and of recursive binary search, in terms of the number of calls.",
            steps: [
              t`fact(n) calls fact(n − 1), ..., fact(1): n calls, each doing constant work → $O(n)$.`,
              t`Binary search on n elements calls itself on about n/2, then n/4, ... down to 1: about $\log_2 n$ calls → $O(\log n)$.`,
              t`Naive Fibonacci fib(n) = fib(n − 1) + fib(n − 2) makes two calls per call; the number of calls roughly doubles with each level → exponential, about $O(2^n)$.`,
            ],
            answer: t`fact: $O(n)$; binary search: $O(\log n)$; naive Fibonacci: $O(2^n)$`,
          },
          {
            type: "table",
            headers: ["Algorithm", "Best case", "Worst case"],
            rows: [
              ["Linear search", t`$O(1)$`, t`$O(n)$`],
              ["Binary search (sorted)", t`$O(1)$`, t`$O(\log n)$`],
              ["Bubble sort with a \"no swaps\" exit", t`$O(n)$ (already sorted)`, t`$O(n^2)$`],
              ["Selection sort", t`$O(n^2)$`, t`$O(n^2)$`],
              ["Insertion sort", t`$O(n)$ (already sorted)`, t`$O(n^2)$`],
              ["Merging two sorted arrays of sizes m and n", t`$O(m + n)$`, t`$O(m + n)$`],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each code pattern to its complexity.",
              pairs: [
                ["for (i = 0; i < n; i++) s += a[i];", "O(n)"],
                ["for (i = n; i > 0; i /= 2) c++;", "O(log n)"],
                ["two loops, each 0 to n, one inside the other", "O(n²)"],
                ["return a[0] + a[n - 1];", "O(1)"],
                ["a loop to n containing a halving loop", "O(n log n)"],
              ],
              explain: "Count the passes of the innermost statement, multiply for nesting, then keep the dominant term.",
            },
          },
          {
            type: "example",
            title: "Q4: Comparing two algorithms",
            problem: t`Algorithm P takes $100n$ steps and algorithm Q takes $n^2$ steps. For which n is P faster, and which is better for large inputs?`,
            steps: [
              t`P is faster when $100n < n^2$, i.e. when $n > 100$.`,
              t`For $n < 100$, Q is faster; at $n = 100$ they are equal (10,000 steps).`,
              t`P is $O(n)$ and Q is $O(n^2)$, so P wins for every large input: at $n = 10{,}000$, P takes $10^6$ steps and Q takes $10^8$.`,
            ],
            answer: "P is faster for n > 100 and is the better choice for large inputs.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC board tip",
            md: "When a question asks you to state the complexity of a code fragment, write the count first (for example \"n(n + 1)/2 iterations\") and then the order. If the question also asks for the best case, look for an early exit (a break or a return inside the loop).",
          },
          {
            type: "keypoints",
            items: [
              "Sequential loops add; nested loops multiply.",
              "A fixed-length inner loop adds only a constant factor.",
              "A halving loop contributes log n.",
              "fact(n): O(n); binary search: O(log n); naive Fibonacci: O(2ⁿ).",
              "Lower order wins for large n, even if its constant is larger.",
            ],
          },
        ],
        flashcards: [
          { front: "Sequential loops of n and n² steps", back: "Total n + n² → O(n²)." },
          { front: "Loop to n with an inner loop of 10", back: "10n steps → O(n)." },
          { front: "Loop to n with an inner halving loop", back: "n log n steps → O(n log n)." },
          { front: "Complexity of recursive factorial", back: "O(n): n calls of constant work." },
          { front: "Best case of insertion sort", back: "O(n), when the array is already sorted." },
          { front: "Merging sorted arrays of sizes m and n", back: "O(m + n)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "for (i = 0; i < n; i++) for (j = 0; j < n; j++) for (k = 0; k < n; k++) x++; has complexity:",
            options: [t`$O(n^3)$`, t`$O(n^2)$`, t`$O(3n)$`, t`$O(n \log n)$`],
            answer: 0,
            explain: t`Three nested loops, each to n: $n^3$ steps.`,
          },
          {
            kind: "numeric",
            q: "A merge of two sorted arrays of sizes 40 and 25 copies how many elements into the result?",
            answer: 65,
            explain: "Every element is copied once: 40 + 25 = 65, which is O(m + n).",
          },
          {
            kind: "mcq",
            q: "Algorithm A takes 50n steps and B takes 2n² steps. For which n do they take the same number of steps?",
            options: ["25", "50", "100", "5"],
            answer: 0,
            explain: t`$50n = 2n^2$ gives $n = 25$ (both take 1,250 steps). Beyond that, A is faster.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Selection sort makes the same number of comparisons whether the array is sorted or not.",
            answer: true,
            explain: "It always scans the whole unsorted part to find the minimum: n(n − 1)/2 comparisons in every case.",
          },
          {
            kind: "fill",
            q: "A recursive method that calls itself once on a problem half the size, doing constant work per call, has complexity O(___).",
            answer: ["log n", "logn", "log(n)"],
            explain: "The size halves each call, so there are about log₂ n calls, as in recursive binary search.",
          },
          {
            kind: "mcq",
            q: "int i = 1; while (i <= n) { i = i * 3; } runs about how many times?",
            options: [t`$\log_3 n$`, t`$n/3$`, t`$3n$`, t`$n^3$`],
            answer: 0,
            explain: t`i takes 1, 3, 9, 27, ...; it passes n after about $\log_3 n$ steps, so the loop is $O(\log n)$.`,
          },
          {
            kind: "multi",
            q: "Which algorithms have a best case of O(n) or better on an already sorted array?",
            options: ["Insertion sort", "Bubble sort with a \"no swaps\" exit", "Selection sort", "Linear search for the first element"],
            answers: [0, 1, 3],
            explain: "Selection sort is O(n²) even on sorted data. Linear search finding the first element is O(1).",
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Boolean Algebra": "c12-cs-boolean-algebra",
  "12:Logic Circuits": "c12-cs-logic-circuits",
  "12:Objects and Classes": "c12-cs-java-classes",
  "12:Arrays and Strings": "c12-cs-java-arrays-strings",
  "12:Recursion": "c12-cs-java-recursion",
  "12:Inheritance, Interfaces and Polymorphism": "c12-cs-java-inheritance",
  "12:Data Structures": "c12-cs-java-data-structures",
  "12:Complexity and Big O": "c12-cs-complexity",
};
