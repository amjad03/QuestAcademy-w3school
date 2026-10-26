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
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Boolean Algebra": "c12-cs-boolean-algebra",
};
