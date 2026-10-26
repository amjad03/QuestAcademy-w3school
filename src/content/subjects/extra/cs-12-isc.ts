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
              prompt: "An 8:1 MUX has select inputs S2 S1 S0 = 1 0 1. Which data input reaches the output?",
              emoji: "🎛️",
              options: ["I5", "I2", "I6", "I1"],
              answer: 0,
              trap: 1,
              explain: "101 in binary is 5, so I5 is selected. Reading the bits in the wrong order (S0 as the most significant) gives the trap answer.",
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
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Boolean Algebra": "c12-cs-boolean-algebra",
  "12:Logic Circuits": "c12-cs-logic-circuits",
  "12:Objects and Classes": "c12-cs-java-classes",
};
