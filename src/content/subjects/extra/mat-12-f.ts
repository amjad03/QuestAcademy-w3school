import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Probability (NCERT Class 12 Ch 13, CBSE + Karnataka II PUC; ISC)     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-probability",
    title: "Probability",
    icon: "🎲",
    description:
      "Conditional probability, the multiplication theorem, independent events, total probability, Bayes' theorem, random variables with their mean and variance, and the binomial distribution.",
    lessons: [
      {
        slug: "c12-conditional-probability",
        title: "Conditional Probability and the Multiplication Theorem",
        summary:
          "How new information shrinks the sample space: the definition of P(E|F), its properties, and the multiplication theorem for two and three events.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption:
              "The chance that India wins a match changes once you hear they won the toss. New information changes probabilities.",
          },
          {
            type: "text",
            md: t`In Class 11 you found $P(E)$ for an event $E$ in a sample space $S$. Often we already know that some event $F$ **has happened**. Then the outcomes outside $F$ are no longer possible. The sample space shrinks to $F$, and we only count the part of $E$ that lies inside $F$.

The **conditional probability of $E$ given $F$** is written $P(E|F)$ and read "probability of $E$ given $F$".`,
          },
          {
            type: "formula",
            tex: t`P(E|F) = \frac{P(E \cap F)}{P(F)}, \qquad P(F) \neq 0`,
            caption: t`For equally likely outcomes this is $\dfrac{n(E \cap F)}{n(F)}$.`,
          },
          {
            type: "example",
            title: "Two dice",
            problem: t`Two fair dice are thrown. Let $F$ = "the first die shows an even number" and $E$ = "the sum of the numbers is 8". Find $P(E|F)$ and compare it with $P(E)$.`,
            steps: [
              t`$n(S) = 36$. The first die can be 2, 4 or 6, and the second anything, so $n(F) = 3 \times 6 = 18$.`,
              t`Sum 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$, so $n(E) = 5$ and $P(E) = \frac{5}{36}$.`,
              t`Inside $F$ (first die even): $(2,6), (4,4), (6,2)$, so $n(E \cap F) = 3$.`,
              t`$P(E|F) = \dfrac{n(E \cap F)}{n(F)} = \dfrac{3}{18} = \dfrac{1}{6}$.`,
            ],
            answer: t`$P(E|F) = \frac{1}{6} = \frac{6}{36}$, slightly more than $P(E) = \frac{5}{36}$. Knowing $F$ changed the probability.`,
          },
          {
            type: "heading",
            text: "Properties of conditional probability",
          },
          {
            type: "list",
            items: [
              t`$P(S|F) = P(F|F) = 1$.`,
              t`For any events $A$, $B$: $P(A \cup B \,|\, F) = P(A|F) + P(B|F) - P(A \cap B \,|\, F)$. If $A$ and $B$ are disjoint, the last term is 0.`,
              t`$P(E'|F) = 1 - P(E|F)$.`,
              t`$0 \le P(E|F) \le 1$ always.`,
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$P(A) = 0.5$, $P(B) = 0.4$ and $P(A \cap B) = 0.2$. Find $P(A|B)$.`,
                options: ["0.4", "0.5", "0.2", "0.8"],
                answer: 1,
                explain: t`$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.4} = 0.5$. (Dividing by $P(A)$ instead gives $P(B|A) = 0.4$.)`,
              },
            ],
          },
          {
            type: "heading",
            text: "Multiplication theorem",
          },
          {
            type: "text",
            md: t`Rearranging the definition gives the **multiplication theorem on probability**. It is the tool for events that happen **one after another**, such as drawing balls without replacement.`,
          },
          {
            type: "formula",
            tex: t`P(E \cap F) = P(E)\,P(F|E) = P(F)\,P(E|F), \qquad P(E \cap F \cap G) = P(E)\,P(F|E)\,P(G|E \cap F)`,
            caption: "Each factor is the probability of the next event, given everything before it.",
          },
          {
            type: "example",
            title: "Drawing without replacement",
            problem: "A bag has 6 red and 4 white balls. Three balls are drawn one by one without replacement. Find the probability that the first two are red and the third is white.",
            steps: [
              t`Let $E$ = first red, $F$ = second red, $G$ = third white.`,
              t`$P(E) = \frac{6}{10}$. After one red is removed, 5 red remain out of 9, so $P(F|E) = \frac{5}{9}$.`,
              t`Now 8 balls remain, 4 of them white, so $P(G|E \cap F) = \frac{4}{8}$.`,
              t`$P(E \cap F \cap G) = \frac{6}{10} \times \frac{5}{9} \times \frac{4}{8} = \frac{120}{720}$.`,
            ],
            answer: t`$\frac{1}{6}$`,
          },
          {
            type: "mistake",
            wrong: t`$P(E|F)$ and $P(F|E)$ are the same thing, so I can divide $P(E \cap F)$ by either $P(E)$ or $P(F)$.`,
            right: t`$P(E|F) = \frac{P(E \cap F)}{P(F)}$: divide by the probability of the event that is **given** (the one after the bar). In general $P(E|F) \neq P(F|E)$.`,
            why: t`Both use the same numerator, so they look interchangeable. But the denominator is the new sample space. In the dice example, $P(E|F) = \frac{1}{6}$ while $P(F|E) = \frac{3}{5}$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A family has two children; at least one is a girl. P(both girls)?",
              emoji: "👧",
              options: ["1/2", "1/3", "1/4"],
              answer: 1,
              trap: 0,
              explain: t`With $S = \{GG, GB, BG, BB\}$, the given event "at least one girl" is $\{GG, GB, BG\}$. Only $GG$ of these is "both girls", so the answer is $\frac{1}{3}$. The answer $\frac{1}{2}$ wrongly treats "the other child" as a single fixed child.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a 2–3 mark question, name every event in words first (\"Let E be the event that …\"). Then write the formula, substitute and simplify. Marks are given for defining events and for the formula line, even if the arithmetic slips.",
          },
          {
            type: "keypoints",
            items: [
              t`$P(E|F) = \frac{P(E \cap F)}{P(F)}$, with $P(F) \neq 0$: the sample space shrinks to $F$.`,
              t`$P(E'|F) = 1 - P(E|F)$ and $P(S|F) = 1$.`,
              t`Multiplication theorem: $P(E \cap F) = P(E)\,P(F|E)$; extend it step by step for three events.`,
              t`$P(E|F)$ and $P(F|E)$ are usually different.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Formula for $P(E|F)$`, back: t`$\frac{P(E \cap F)}{P(F)}$, valid when $P(F) \neq 0$.` },
          { front: t`$P(E'|F)$ in terms of $P(E|F)$`, back: t`$1 - P(E|F)$` },
          { front: t`$P(F|F)$`, back: "1" },
          { front: "Multiplication theorem for two events", back: t`$P(E \cap F) = P(E)\,P(F|E) = P(F)\,P(E|F)$` },
          { front: "Multiplication theorem for three events", back: t`$P(E \cap F \cap G) = P(E)\,P(F|E)\,P(G|E \cap F)$` },
          { front: "What does conditioning on F do to the sample space?", back: "It shrinks the sample space to F: only outcomes inside F are counted." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`A die is thrown. Given that the number is greater than 2, what is the probability that it is even?`,
            options: ["1/2", "1/3", "2/3", "3/4"],
            answer: 0,
            explain: t`Given set: $\{3, 4, 5, 6\}$. Even numbers in it: $\{4, 6\}$. So $P = \frac{2}{4} = \frac{1}{2}$.`,
          },
          {
            kind: "numeric",
            q: t`$P(E) = 0.6$, $P(F) = 0.3$ and $P(E \cap F) = 0.2$. Find $P(F|E)$ (to 3 decimal places).`,
            answer: 0.333,
            tolerance: 0.002,
            explain: t`$P(F|E) = \frac{0.2}{0.6} = \frac{1}{3} \approx 0.333$.`,
          },
          {
            kind: "mcq",
            q: "Two cards are drawn one after the other without replacement from a pack of 52. Probability that both are kings?",
            options: ["1/169", "1/221", "1/13", "4/663"],
            answer: 1,
            explain: t`$\frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}$. The answer $\frac{1}{169}$ is for drawing **with** replacement.`,
          },
          {
            kind: "truefalse",
            q: t`For any events $E$ and $F$ with non-zero probabilities, $P(E|F) = P(F|E)$.`,
            answer: false,
            explain: t`They are equal only when $P(E) = P(F)$. In general the denominators differ.`,
          },
          {
            kind: "numeric",
            q: t`$P(A) = 0.8$, $P(B) = 0.5$ and $P(B|A) = 0.4$. Find $P(A \cup B)$.`,
            answer: 0.98,
            tolerance: 0.001,
            explain: t`$P(A \cap B) = P(A)\,P(B|A) = 0.32$. Then $P(A \cup B) = 0.8 + 0.5 - 0.32 = 0.98$.`,
            difficulty: 2,
            hint: "Use the multiplication theorem to get the intersection first.",
          },
          {
            kind: "mcq",
            q: "A coin is tossed three times. Given that at least one head appears, find the probability of exactly two heads.",
            options: ["3/8", "3/7", "1/2", "2/7"],
            answer: 1,
            explain: t`"At least one head" has $8 - 1 = 7$ outcomes. Exactly two heads: HHT, HTH, THH = 3. So $\frac{3}{7}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A box has 5 good and 3 defective bulbs. Two are taken out one by one without replacement. Find the probability that both are good (to 3 decimal places).",
            answer: 0.357,
            tolerance: 0.002,
            explain: t`$\frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14} \approx 0.357$.`,
          },
        ],
      },
      {
        slug: "c12-independence-bayes",
        title: "Independent Events, Total Probability and Bayes' Theorem",
        summary:
          "When one event tells you nothing about another, the law of total probability for a partition, and Bayes' theorem for reasoning backwards from an effect to its cause.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏭",
            caption: "A factory has three machines. A bolt is found defective. Which machine most likely made it?",
          },
          {
            type: "text",
            md: t`Two events $E$ and $F$ are **independent** if knowing that one has happened does not change the probability of the other: $P(E|F) = P(E)$ (when $P(F) \neq 0$). Using the multiplication theorem, this is the same as the test below, which also works when a probability is 0.`,
          },
          {
            type: "formula",
            tex: t`E, F \text{ independent} \iff P(E \cap F) = P(E)\,P(F)`,
            caption: t`Three events $E, F, G$ are (mutually) independent only if all four hold: $P(EF) = P(E)P(F)$, $P(FG) = P(F)P(G)$, $P(EG) = P(E)P(G)$ and $P(EFG) = P(E)P(F)P(G)$.`,
          },
          {
            type: "list",
            items: [
              t`If $E$ and $F$ are independent, so are $E'$ and $F$, $E$ and $F'$, and $E'$ and $F'$.`,
              t`For independent events, $P(\text{at least one}) = 1 - P(E')\,P(F')$.`,
              t`Independent and mutually exclusive are different ideas. If $P(E) > 0$ and $P(F) > 0$, two mutually exclusive events can never be independent, because $P(E \cap F) = 0 \neq P(E)P(F)$.`,
            ],
          },
          {
            type: "example",
            title: "At least one solves it",
            problem: t`Riya can solve a problem with probability $\frac{1}{2}$ and Arjun with probability $\frac{1}{3}$, working independently. Find the probability that the problem is solved.`,
            steps: [
              t`The problem is solved if at least one of them solves it.`,
              t`$P(\text{Riya fails}) = \frac{1}{2}$, $P(\text{Arjun fails}) = \frac{2}{3}$.`,
              t`By independence, $P(\text{both fail}) = \frac{1}{2} \times \frac{2}{3} = \frac{1}{3}$.`,
              t`$P(\text{solved}) = 1 - \frac{1}{3}$.`,
            ],
            answer: t`$\frac{2}{3}$`,
          },
          {
            type: "mistake",
            wrong: "Independent events cannot happen together, just like mutually exclusive events.",
            right: t`Mutually exclusive means $P(E \cap F) = 0$: they cannot happen together. Independent means $P(E \cap F) = P(E)P(F)$: they can happen together, and one does not affect the other.`,
            why: t`Both words sound like "separate". But if two events with positive probability are mutually exclusive, the occurrence of one **forces** the other not to happen, which is the strongest possible dependence.`,
          },
          {
            type: "heading",
            text: "Theorem of total probability",
          },
          {
            type: "text",
            md: t`Events $E_1, E_2, \ldots, E_n$ form a **partition** of $S$ if they are pairwise disjoint, their union is $S$, and each $P(E_i) > 0$. Every outcome falls in exactly one $E_i$. For any event $A$, we split $A$ into the pieces $A \cap E_i$ and add.`,
          },
          {
            type: "formula",
            tex: t`P(A) = \sum_{j=1}^{n} P(E_j)\,P(A|E_j) \qquad\qquad P(E_i|A) = \frac{P(E_i)\,P(A|E_i)}{\sum_{j=1}^{n} P(E_j)\,P(A|E_j)}`,
            caption: t`Left: total probability. Right: **Bayes' theorem**. $P(E_i)$ are the *prior* probabilities and $P(E_i|A)$ the *posterior* probabilities. The $E_i$ are called *hypotheses*.`,
          },
          {
            type: "example",
            title: "Which machine made the defective bolt?",
            problem: t`Machines $M_1, M_2, M_3$ make 50%, 30% and 20% of a factory's bolts. Of their output, 2%, 3% and 5% respectively are defective. A bolt chosen at random is defective. Find the probability that it was made by $M_3$.`,
            steps: [
              t`Let $E_1, E_2, E_3$ be "made by $M_1, M_2, M_3$" (a partition) and $A$ = "defective".`,
              t`Priors: $P(E_1) = 0.5$, $P(E_2) = 0.3$, $P(E_3) = 0.2$. Likelihoods: $P(A|E_1) = 0.02$, $P(A|E_2) = 0.03$, $P(A|E_3) = 0.05$.`,
              t`Total probability: $P(A) = 0.5(0.02) + 0.3(0.03) + 0.2(0.05) = 0.010 + 0.009 + 0.010 = 0.029$.`,
              t`Bayes: $P(E_3|A) = \dfrac{0.010}{0.029} = \dfrac{10}{29}$.`,
            ],
            answer: t`$\frac{10}{29} \approx 0.345$. (Similarly $P(E_1|A) = \frac{10}{29}$ and $P(E_2|A) = \frac{9}{29}$; the three add to 1.)`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$A$ and $B$ are independent, $P(A) = 0.3$ and $P(B) = 0.4$. Find $P(A \cup B)$.`,
                options: ["0.70", "0.58", "0.12", "0.42"],
                answer: 1,
                explain: t`$P(A \cap B) = 0.12$, so $P(A \cup B) = 0.3 + 0.4 - 0.12 = 0.58$. (0.70 forgets to subtract the overlap.)`,
              },
              {
                kind: "truefalse",
                q: "In Bayes' theorem, the denominator is the total probability of the observed event.",
                answer: true,
                explain: t`The denominator $\sum P(E_j)P(A|E_j)$ is exactly $P(A)$ from the theorem of total probability.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of a Bayes' theorem solution in order.",
              items: [
                "Name the hypotheses E₁, E₂, … and the observed event A",
                "Write the priors P(Eᵢ)",
                "Write the likelihoods P(A|Eᵢ)",
                "Find P(A) by total probability",
                "Divide the required term by P(A)",
              ],
              explain: "A tree diagram does the same job: one branch per hypothesis, multiply along branches, then take the required branch as a fraction of all branches that end in A.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Bayes' theorem questions are a favourite 4–5 mark question in CBSE, PUC and ISC papers (often as a case study in CBSE). Marks come for: defining the events, writing the priors and likelihoods, the total-probability line, and the final answer. Keep fractions exact; do not round in the middle.",
          },
          {
            type: "keypoints",
            items: [
              t`Independent: $P(E \cap F) = P(E)P(F)$. Their complements are also independent.`,
              t`Mutually exclusive events with positive probabilities are never independent.`,
              t`Three events need all four product conditions to be mutually independent; pairwise is not enough.`,
              t`Total probability: $P(A) = \sum P(E_j)P(A|E_j)$ over a partition.`,
              t`Bayes: $P(E_i|A) = \frac{P(E_i)P(A|E_i)}{P(A)}$; the posteriors add to 1.`,
            ],
          },
        ],
        flashcards: [
          { front: "Test for independence of E and F", back: t`$P(E \cap F) = P(E)\,P(F)$` },
          { front: t`If $E$, $F$ are independent, are $E'$ and $F'$ independent?`, back: t`Yes. $P(E' \cap F') = P(E')P(F')$.` },
          { front: "Can two mutually exclusive events with positive probabilities be independent?", back: t`No: $P(E \cap F) = 0$ but $P(E)P(F) > 0$.` },
          { front: "What is a partition of S?", back: t`Pairwise disjoint events $E_1, \ldots, E_n$ whose union is $S$, each with $P(E_i) > 0$.` },
          { front: "Theorem of total probability", back: t`$P(A) = \sum_j P(E_j)\,P(A|E_j)$` },
          { front: "Bayes' theorem", back: t`$P(E_i|A) = \dfrac{P(E_i)P(A|E_i)}{\sum_j P(E_j)P(A|E_j)}$` },
          { front: "Prior vs posterior", back: t`Prior: $P(E_i)$ before seeing $A$. Posterior: $P(E_i|A)$ after seeing $A$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$P(A) = \frac{1}{2}$, $P(B) = \frac{1}{3}$ and $P(A \cap B) = \frac{1}{6}$. Then $A$ and $B$ are:`,
            options: ["independent", "mutually exclusive", "both independent and mutually exclusive", "neither"],
            answer: 0,
            explain: t`$P(A)P(B) = \frac{1}{6} = P(A \cap B)$, so they are independent. They are not mutually exclusive because the intersection has positive probability.`,
          },
          {
            kind: "numeric",
            q: "Three students hit a target with probabilities 0.5, 0.6 and 0.8, independently. Find the probability that the target is hit at least once.",
            answer: 0.96,
            tolerance: 0.001,
            explain: t`$P(\text{all miss}) = 0.5 \times 0.4 \times 0.2 = 0.04$, so $P(\text{at least one hit}) = 1 - 0.04 = 0.96$.`,
          },
          {
            kind: "numeric",
            q: "Bag I has 3 red and 2 black balls; Bag II has 2 red and 4 black balls. A bag is picked at random and a ball drawn from it is red. Find the probability that it came from Bag I (to 3 decimal places).",
            answer: 0.643,
            tolerance: 0.002,
            explain: t`$P(R) = \frac{1}{2}\cdot\frac{3}{5} + \frac{1}{2}\cdot\frac{1}{3} = \frac{3}{10} + \frac{1}{6} = \frac{14}{30}$. $P(I|R) = \frac{3/10}{14/30} = \frac{9}{14} \approx 0.643$.`,
            difficulty: 2,
            hint: "Total probability first, then divide the Bag I branch by it.",
          },
          {
            kind: "truefalse",
            q: "If three events are pairwise independent, they are always mutually independent.",
            answer: false,
            explain: t`Pairwise independence does not guarantee $P(EFG) = P(E)P(F)P(G)$. Example: toss two coins; $E$ = first head, $F$ = second head, $G$ = both show the same face. Each pair is independent but $P(EFG) = \frac{1}{4} \neq \frac{1}{8}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$E_1, E_2$ form a partition with $P(E_1) = 0.4$. If $P(A|E_1) = 0.5$ and $P(A|E_2) = 0.25$, find $P(A)$.`,
            options: ["0.75", "0.35", "0.375", "0.20"],
            answer: 1,
            explain: t`$P(A) = 0.4(0.5) + 0.6(0.25) = 0.20 + 0.15 = 0.35$.`,
          },
          {
            kind: "multi",
            q: t`$E$ and $F$ are independent with $P(E) = 0.2$ and $P(F) = 0.5$. Which are correct?`,
            options: [t`$P(E \cap F) = 0.1$`, t`$P(E|F) = 0.2$`, t`$P(E' \cap F') = 0.4$`, t`$P(E \cup F) = 0.7$`],
            answers: [0, 1, 2],
            explain: t`$P(E \cap F) = 0.1$; $P(E|F) = P(E) = 0.2$; $P(E' \cap F') = 0.8 \times 0.5 = 0.4$; $P(E \cup F) = 0.2 + 0.5 - 0.1 = 0.6$, not 0.7.`,
          },
          {
            kind: "mcq",
            q: "In the machine example (50%, 30%, 20% of output; 2%, 3%, 5% defective), which machine most likely made a defective bolt?",
            options: [t`$M_3$ only, since it has the highest defect rate`, t`$M_1$ and $M_3$ are equally likely`, t`$M_1$ only, since it makes most bolts`, t`$M_2$`],
            answer: 1,
            explain: t`Posteriors: $M_1$: $\frac{10}{29}$, $M_2$: $\frac{9}{29}$, $M_3$: $\frac{10}{29}$. A high defect rate and a large share of output can balance each other.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-random-variables",
        title: "Random Variables, Probability Distributions, Mean and Variance",
        summary:
          "A random variable turns outcomes into numbers. Build its probability distribution, then find its mean (expectation), variance and standard deviation.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪙",
            caption: "Toss three coins and count the heads: the count 0, 1, 2 or 3 is a random variable.",
          },
          {
            type: "text",
            md: t`A **random variable** is a real-valued function whose domain is the sample space of a random experiment. It gives each outcome a number. We write it with a capital letter, such as $X$. For three coin tosses, $X$ = number of heads gives $X(HHT) = 2$ and $X(TTT) = 0$.

A **discrete** random variable takes finitely many (or countably many) values $x_1, x_2, \ldots, x_n$.`,
          },
          {
            type: "text",
            md: t`The **probability distribution** of $X$ is the list of its values with their probabilities $p_i = P(X = x_i)$. It must satisfy two conditions: every $p_i \ge 0$, and $\sum p_i = 1$.`,
          },
          {
            type: "table",
            headers: ["x (number of heads)", "0", "1", "2", "3"],
            rows: [[t`$P(X = x)$`, t`$\frac{1}{8}$`, t`$\frac{3}{8}$`, t`$\frac{3}{8}$`, t`$\frac{1}{8}$`]],
          },
          {
            type: "formula",
            tex: t`\mu = E(X) = \sum_{i} x_i\,p_i, \qquad \operatorname{Var}(X) = \sigma^2 = \sum_i (x_i - \mu)^2 p_i = E(X^2) - [E(X)]^2, \qquad \sigma = \sqrt{\operatorname{Var}(X)}`,
            caption: t`The **mean** (expectation) is the long-run average value. Variance measures spread; $E(X^2) = \sum x_i^2 p_i$.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT book (CBSE) keeps random variables, probability distributions and the **mean** of a random variable. **Variance** is taught and examined in **ISC**, and is used in JEE. Karnataka II PUC follows the NCERT book; check the current PU blueprint for whether variance is examined.",
          },
          {
            type: "example",
            title: "Mean and variance of the number of heads",
            problem: "Three fair coins are tossed. X is the number of heads. Find E(X), Var(X) and the standard deviation.",
            steps: [
              t`Distribution (from the table): $P(0) = \frac{1}{8}$, $P(1) = \frac{3}{8}$, $P(2) = \frac{3}{8}$, $P(3) = \frac{1}{8}$.`,
              t`$E(X) = 0 \cdot \frac{1}{8} + 1 \cdot \frac{3}{8} + 2 \cdot \frac{3}{8} + 3 \cdot \frac{1}{8} = \frac{12}{8} = 1.5$.`,
              t`$E(X^2) = 0 + 1 \cdot \frac{3}{8} + 4 \cdot \frac{3}{8} + 9 \cdot \frac{1}{8} = \frac{24}{8} = 3$.`,
              t`$\operatorname{Var}(X) = 3 - (1.5)^2 = 0.75$, so $\sigma = \sqrt{0.75} \approx 0.866$.`,
            ],
            answer: t`$E(X) = 1.5$, $\operatorname{Var}(X) = 0.75$, $\sigma = \frac{\sqrt{3}}{2} \approx 0.866$.`,
          },
          {
            type: "example",
            title: "Finding an unknown constant",
            problem: t`$X$ takes the values 1, 2, 3, 4 with $P(X = x) = kx$. Find $k$, $P(X \ge 3)$ and $E(X)$.`,
            steps: [
              t`Probabilities add to 1: $k(1 + 2 + 3 + 4) = 10k = 1$, so $k = \frac{1}{10}$.`,
              t`$P(X \ge 3) = P(3) + P(4) = \frac{3}{10} + \frac{4}{10} = \frac{7}{10}$.`,
              t`$E(X) = \sum x \cdot kx = k(1 + 4 + 9 + 16) = \frac{30}{10} = 3$.`,
            ],
            answer: t`$k = \frac{1}{10}$, $P(X \ge 3) = \frac{7}{10}$, $E(X) = 3$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Which table can be a probability distribution of $X$ (values 0, 1, 2)?`,
                options: ["0.4, 0.4, 0.4", "0.5, 0.6, −0.1", "0.2, 0.3, 0.5", "0.1, 0.2, 0.3"],
                answer: 2,
                explain: t`Only 0.2, 0.3, 0.5 has every $p_i \ge 0$ and sum 1. The second option adds to 1 but has a negative value.`,
              },
            ],
          },
          {
            type: "example",
            title: "Number of aces",
            problem: "Two cards are drawn without replacement from a well-shuffled pack of 52. Let X be the number of aces drawn. Find the distribution of X and its mean.",
            steps: [
              t`$n(S) = \binom{52}{2} = 1326$.`,
              t`$P(X = 0) = \frac{\binom{48}{2}}{1326} = \frac{1128}{1326} = \frac{188}{221}$.`,
              t`$P(X = 1) = \frac{4 \times 48}{1326} = \frac{192}{1326} = \frac{32}{221}$; $P(X = 2) = \frac{\binom{4}{2}}{1326} = \frac{6}{1326} = \frac{1}{221}$.`,
              t`Check: $188 + 32 + 1 = 221$. Mean: $E(X) = \frac{32}{221} + \frac{2}{221} = \frac{34}{221}$.`,
            ],
            answer: t`$E(X) = \frac{34}{221} = \frac{2}{13}$.`,
          },
          {
            type: "mistake",
            wrong: t`$\operatorname{Var}(X) = E(X^2) - E(X)$, or $\operatorname{Var}(X) = [E(X)]^2 - E(X^2)$.`,
            right: t`$\operatorname{Var}(X) = E(X^2) - [E(X)]^2$: the mean of the squares minus the square of the mean. It is never negative.`,
            why: t`Students remember "something minus something" but mix the order or forget to square $E(X)$. A quick check: if your variance comes out negative, the order is wrong.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Valid probability distribution or not?",
              groups: ["Valid", "Not valid"],
              items: [
                { text: "P = 0.1, 0.6, 0.3", group: 0, hint: "All non-negative and the sum is 1." },
                { text: "P = 0.5, 0.5, 0.2", group: 1, hint: "The sum is 1.2, more than 1." },
                { text: "P = 1/4, 1/2, 1/4", group: 0, hint: "All non-negative, sum 1." },
                { text: "P = 0.7, 0.4, −0.1", group: 1, hint: "A probability can never be negative." },
                { text: "P = 0, 1, 0", group: 0, hint: "Zero probabilities are allowed; the sum is 1." },
                { text: "P = 0.3, 0.3, 0.3", group: 1, hint: "The sum is 0.9, less than 1." },
              ],
              explain: t`Both conditions must hold: every $p_i \ge 0$ and $\sum p_i = 1$.`,
            },
          },
          {
            type: "keypoints",
            items: [
              "A random variable is a real-valued function on the sample space.",
              t`A distribution needs $p_i \ge 0$ and $\sum p_i = 1$.`,
              t`$E(X) = \sum x_i p_i$ (the long-run average).`,
              t`$\operatorname{Var}(X) = E(X^2) - [E(X)]^2$, $\sigma = \sqrt{\operatorname{Var}(X)}$ (ISC, JEE).`,
            ],
          },
        ],
        flashcards: [
          { front: "Random variable", back: "A real-valued function defined on the sample space of a random experiment." },
          { front: "Two conditions for a probability distribution", back: t`Every $p_i \ge 0$ and $\sum p_i = 1$.` },
          { front: "Mean of a random variable", back: t`$E(X) = \sum x_i p_i$` },
          { front: "Shortcut for variance", back: t`$\operatorname{Var}(X) = E(X^2) - [E(X)]^2$` },
          { front: "Standard deviation", back: t`$\sigma = \sqrt{\operatorname{Var}(X)}$` },
          { front: "Mean number of heads in 3 fair tosses", back: "1.5" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`$X$ takes values 0, 1, 2 with probabilities $k$, $2k$, $3k$. Find $E(X)$ (to 3 decimal places).`,
            answer: 1.333,
            tolerance: 0.002,
            explain: t`$6k = 1$, so $k = \frac{1}{6}$. $E(X) = 0 + \frac{2}{6} + 2 \cdot \frac{3}{6} = \frac{8}{6} = \frac{4}{3} \approx 1.333$.`,
          },
          {
            kind: "mcq",
            q: "A fair die is thrown once. X is the number shown. E(X) is:",
            options: ["3", "3.5", "6", "21"],
            answer: 1,
            explain: t`$E(X) = \frac{1 + 2 + \cdots + 6}{6} = \frac{21}{6} = 3.5$. A mean need not be a value $X$ can take.`,
          },
          {
            kind: "numeric",
            q: "For a fair die, find Var(X), where X is the number shown (to 2 decimal places).",
            answer: 2.92,
            tolerance: 0.01,
            explain: t`$E(X^2) = \frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \frac{91}{6}$. $\operatorname{Var} = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.92$.`,
            difficulty: 2,
            hint: "Find E(X²) first, then subtract (3.5)².",
          },
          {
            kind: "truefalse",
            q: "The mean of a random variable must be one of the values the variable takes.",
            answer: false,
            explain: "For a die, E(X) = 3.5, which is not a face of the die.",
          },
          {
            kind: "mcq",
            q: t`$E(X) = 2$ and $E(X^2) = 5$. The standard deviation of $X$ is:`,
            options: ["1", "√5", "3", "√3"],
            answer: 0,
            explain: t`$\operatorname{Var} = 5 - 4 = 1$, so $\sigma = 1$. (Using $5 - 2 = 3$ forgets to square the mean.)`,
          },
          {
            kind: "numeric",
            q: "Two fair coins are tossed. X is the number of tails. Find E(X²).",
            answer: 1.5,
            tolerance: 0.001,
            explain: t`$P(0) = \frac{1}{4}$, $P(1) = \frac{1}{2}$, $P(2) = \frac{1}{4}$. $E(X^2) = 0 + 1 \cdot \frac{1}{2} + 4 \cdot \frac{1}{4} = 1.5$.`,
          },
          {
            kind: "mcq",
            q: "A seller gains ₹50 with probability 0.6 and loses ₹30 with probability 0.4 on each deal. The expected gain per deal is:",
            options: ["₹20", "₹18", "₹30", "₹42"],
            answer: 1,
            explain: t`$E = 50(0.6) + (-30)(0.4) = 30 - 12 = 18$. A loss is a negative value of the random variable.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-binomial-distribution",
        title: "Bernoulli Trials and the Binomial Distribution",
        summary:
          "Repeated independent trials with two outcomes: the binomial formula, its mean np and variance npq, and how to answer 'at least' and 'at most' questions.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎯",
            caption: "An archer shoots 5 arrows. Each one hits or misses, with the same chance every time.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT book (CBSE 2023 onwards) **dropped** Bernoulli trials and the binomial distribution. **ISC** still teaches and examines it, and JEE, KCET and COMEDK use it often. Karnataka II PUC students should check the current PU blueprint. Learn it either way: it is one of the most useful ideas in the chapter.",
          },
          {
            type: "text",
            md: t`Trials of an experiment are **Bernoulli trials** if all four conditions below hold.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`The number of trials $n$ is fixed and finite.`,
              "The trials are **independent**.",
              "Each trial has exactly two outcomes, *success* or *failure*.",
              t`The probability of success $p$ is the **same** in every trial. Write $q = 1 - p$.`,
            ],
          },
          {
            type: "text",
            md: t`Let $X$ be the number of successes in $n$ Bernoulli trials. A particular order with $r$ successes and $n - r$ failures has probability $p^r q^{n-r}$. There are $\binom{n}{r}$ such orders. So $X$ has the **binomial distribution** $B(n, p)$. The probabilities are the terms of the expansion of $(q + p)^n$, which is why they add to 1.`,
          },
          {
            type: "formula",
            tex: t`P(X = r) = \binom{n}{r} p^r q^{\,n-r}, \quad r = 0, 1, \ldots, n; \qquad \text{mean} = np, \qquad \text{variance} = npq`,
            caption: t`Standard deviation $= \sqrt{npq}$. Since $q < 1$, the variance is always less than the mean.`,
          },
          {
            type: "example",
            title: "Coin tossed six times",
            problem: "A fair coin is tossed 6 times. Find the probability of (a) exactly 4 heads, (b) at least 5 heads.",
            steps: [
              t`Here $n = 6$, $p = q = \frac{1}{2}$, so $P(X = r) = \binom{6}{r}\frac{1}{64}$.`,
              t`(a) $P(X = 4) = \binom{6}{4}\frac{1}{64} = \frac{15}{64}$.`,
              t`(b) $P(X \ge 5) = P(5) + P(6) = \frac{6}{64} + \frac{1}{64} = \frac{7}{64}$.`,
            ],
            answer: t`(a) $\frac{15}{64}$ (b) $\frac{7}{64}$`,
          },
          {
            type: "example",
            title: "At most one six",
            problem: "A die is thrown 5 times. Getting a six is a success. Find the probability of at most one success.",
            steps: [
              t`$n = 5$, $p = \frac{1}{6}$, $q = \frac{5}{6}$.`,
              t`$P(X = 0) = \left(\frac{5}{6}\right)^5 = \frac{3125}{7776}$.`,
              t`$P(X = 1) = \binom{5}{1}\frac{1}{6}\left(\frac{5}{6}\right)^4 = 5 \cdot \frac{625}{7776} = \frac{3125}{7776}$.`,
              t`$P(X \le 1) = \frac{6250}{7776}$.`,
            ],
            answer: t`$\frac{3125}{3888} \approx 0.804$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A binomial distribution has mean 4 and variance 3. Find n and p.",
                options: ["n = 16, p = 1/4", "n = 12, p = 1/3", "n = 16, p = 3/4", "n = 8, p = 1/2"],
                answer: 0,
                explain: t`$q = \frac{npq}{np} = \frac{3}{4}$, so $p = \frac{1}{4}$ and $n = \frac{4}{1/4} = 16$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`The probability of exactly 2 sixes in 4 throws is $\left(\frac{1}{6}\right)^2\left(\frac{5}{6}\right)^2$.`,
            right: t`That is the probability of **one particular order**, such as SSFF. Multiply by the number of orders: $\binom{4}{2}\left(\frac{1}{6}\right)^2\left(\frac{5}{6}\right)^2 = \frac{150}{1296}$.`,
            why: t`The product rule gives one path through the trials. The successes could be in any 2 of the 4 places, and each such path has the same probability, so $\binom{n}{r}$ counts them.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is X binomial? Sort each situation.",
              groups: ["Binomial", "Not binomial"],
              items: [
                { text: "Number of heads in 10 tosses of a coin", group: 0, hint: "Fixed n, independent, same p." },
                { text: "Number of red balls in 3 draws with replacement", group: 0, hint: "Replacement keeps p the same each time." },
                { text: "Number of red balls in 3 draws without replacement", group: 1, hint: "p changes after each draw; trials are dependent." },
                { text: "Number of throws needed to get the first six", group: 1, hint: "The number of trials is not fixed." },
                { text: "Number of correct guesses on 20 four-option MCQs", group: 0, hint: "Each guess is right with p = 1/4, independently." },
                { text: "Sum of the numbers in 4 throws of a die", group: 1, hint: "This is not a count of successes." },
              ],
              explain: "Check the four conditions: fixed n, independent trials, two outcomes, constant p. Without replacement breaks independence.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip (ISC)",
            md: "Write $n$, $p$, $q$ and the formula $P(X = r) = \\binom{n}{r}p^rq^{n-r}$ before substituting. For \"at least one\", use $1 - P(X = 0)$ instead of adding many terms. Leave answers as exact powers, such as $1 - \\left(\\frac{3}{4}\\right)^{10}$, unless a decimal is asked for.",
          },
          {
            type: "keypoints",
            items: [
              "Bernoulli trials: fixed n, independent, two outcomes, constant p.",
              t`$P(X = r) = \binom{n}{r}p^rq^{n-r}$; the terms of $(q + p)^n$.`,
              t`Mean $np$, variance $npq$, SD $\sqrt{npq}$; variance < mean.`,
              t`"At least one": $1 - q^n$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Four conditions for Bernoulli trials", back: "Fixed finite n; independent trials; two outcomes; same probability of success p each time." },
          { front: "Binomial probability of r successes", back: t`$\binom{n}{r}p^rq^{n-r}$` },
          { front: "Mean and variance of B(n, p)", back: t`Mean $np$, variance $npq$.` },
          { front: "P(at least one success) in n trials", back: t`$1 - q^n$` },
          { front: "Why do binomial probabilities add to 1?", back: t`They are the terms of $(q + p)^n = 1^n = 1$.` },
          { front: "Can a binomial variance exceed its mean?", back: t`No: $npq < np$ because $q < 1$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A fair coin is tossed 5 times. P(exactly 3 heads) is:",
            options: ["3/5", "5/16", "1/32", "10/16"],
            answer: 1,
            explain: t`$\binom{5}{3}\frac{1}{32} = \frac{10}{32} = \frac{5}{16}$.`,
          },
          {
            kind: "numeric",
            q: "A binomial distribution has mean 6 and variance 4. Find n.",
            answer: 18,
            explain: t`$q = \frac{4}{6} = \frac{2}{3}$, $p = \frac{1}{3}$, $n = \frac{6}{1/3} = 18$.`,
          },
          {
            kind: "truefalse",
            q: "A binomial distribution can have mean 3 and variance 5.",
            answer: false,
            explain: t`Variance $npq$ is always less than the mean $np$, since $q < 1$.`,
          },
          {
            kind: "numeric",
            q: "10% of the bulbs a shop sells are defective. Find the probability that none of 5 bulbs bought is defective (to 4 decimal places).",
            answer: 0.5905,
            tolerance: 0.0002,
            explain: t`$P(X = 0) = (0.9)^5 = 0.59049$.`,
          },
          {
            kind: "mcq",
            q: "A student guesses all 4 answers on a true–false quiz. The probability of at least 3 correct is:",
            options: ["5/16", "1/4", "3/8", "11/16"],
            answer: 0,
            explain: t`$P(3) + P(4) = \frac{4}{16} + \frac{1}{16} = \frac{5}{16}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "X is binomial with n = 20 and p = 0.3. Find the standard deviation of X (to 2 decimal places).",
            answer: 2.05,
            tolerance: 0.01,
            explain: t`$npq = 20(0.3)(0.7) = 4.2$; $\sqrt{4.2} \approx 2.05$.`,
          },
          {
            kind: "multi",
            q: "Which of these make the number of successes binomial?",
            options: [
              "Drawing 4 cards with replacement and counting hearts",
              "Drawing 4 cards without replacement and counting hearts",
              "Counting sixes in 10 throws of a die",
              "Throwing a die until the first six and counting throws",
            ],
            answers: [0, 2],
            explain: "With replacement and repeated throws keep n fixed, trials independent and p constant. Without replacement changes p; 'until the first six' has no fixed n.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-probability-exam-edge",
        title: "Exam edge: Probability for JEE, KCET and COMEDK",
        summary:
          "What JEE Main, JEE Advanced, KCET and COMEDK ask from Class 12 probability, the shortcuts that save time, and problems rising to JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What is asked.** KCET and COMEDK ask 2–4 direct questions: conditional probability from a table or formula, independence checks, Bayes with two or three bags, mean of a distribution, and binomial mean/variance. JEE Main asks about 1–2 questions per paper, usually Bayes, "at least one" counting, binomial sums, or a distribution with an unknown $k$. JEE Advanced mixes conditional probability with permutations and combinations, games played in turns, and multi-stage Bayes.`,
          },
          {
            type: "table",
            headers: ["Shortcut", "Use it when", "Careful"],
            rows: [
              [t`$P(\text{at least one}) = 1 - \prod P(E_i')$`, "Events are independent", "Not valid for dependent events"],
              [t`Turns game: $P(\text{first player wins}) = \dfrac{p_1}{1 - q_1 q_2}$`, t`Players alternate, each turn independent; $p_1$ = first player's success probability, $q_1, q_2$ = failure probabilities of the two players`, "Check who starts"],
              [t`$n$ for $P(\text{at least one}) > a$: $q^n < 1 - a$`, "Binomial, 'minimum number of trials'", "n must be an integer; round up"],
              [t`$q = \dfrac{\text{variance}}{\text{mean}}$`, "Binomial with mean and variance given", "q must lie in (0, 1)"],
              [t`Posteriors $\propto$ prior × likelihood`, "Bayes with many hypotheses", "Normalise so they add to 1"],
            ],
          },
          {
            type: "example",
            title: "KCET level: union and complements",
            problem: t`$A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.5$. Find $P(A \cup B)$ and $P(A' \cap B')$.`,
            steps: [
              t`$P(A \cap B) = 0.4 \times 0.5 = 0.2$.`,
              t`$P(A \cup B) = 0.4 + 0.5 - 0.2 = 0.7$.`,
              t`$P(A' \cap B') = 0.6 \times 0.5 = 0.3$, which matches $1 - P(A \cup B)$.`,
            ],
            answer: t`$0.7$ and $0.3$`,
          },
          {
            type: "example",
            title: "JEE Main level: minimum number of trials",
            problem: "Find the least number of times a fair coin must be tossed so that the probability of getting at least one head is more than 0.99.",
            steps: [
              t`$P(\text{at least one head}) = 1 - \left(\frac{1}{2}\right)^n > 0.99$.`,
              t`So $\left(\frac{1}{2}\right)^n < 0.01$, that is $2^n > 100$.`,
              t`$2^6 = 64 < 100$ and $2^7 = 128 > 100$.`,
            ],
            answer: "7 tosses",
          },
          {
            type: "example",
            title: "JEE Main level: taking turns",
            problem: "A and B throw a die in turn, A first. The first to throw a six wins. Find the probability that A wins.",
            steps: [
              t`A wins on throw 1, 3, 5, …. A wins on his $k$-th turn if the first $2(k-1)$ throws all fail and then A succeeds: probability $\left(\frac{25}{36}\right)^{k-1}\frac{1}{6}$.`,
              t`Sum the geometric series: $P(A) = \dfrac{1/6}{1 - 25/36} = \dfrac{1/6}{11/36}$.`,
            ],
            answer: t`$P(A \text{ wins}) = \frac{6}{11}$, and $P(B \text{ wins}) = \frac{5}{11}$.`,
          },
          {
            type: "example",
            title: "JEE Main level: a positive test",
            problem: "1% of a town has a disease. A test detects it in 95% of people who have it, but also gives a positive result for 5% of healthy people. A person tests positive. Find the probability that they have the disease.",
            steps: [
              t`Priors: $P(D) = 0.01$, $P(H) = 0.99$. Likelihoods: $P(+|D) = 0.95$, $P(+|H) = 0.05$.`,
              t`$P(+) = 0.01(0.95) + 0.99(0.05) = 0.0095 + 0.0495 = 0.059$.`,
              t`$P(D|+) = \frac{0.0095}{0.059} = \frac{95}{590} = \frac{19}{118}$.`,
            ],
            answer: t`$\frac{19}{118} \approx 0.16$. Only about 16%: the rare disease keeps the prior small.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: Bayes, then predict",
            problem: t`Coin A is fair. Coin B shows a head with probability $\frac{3}{4}$. A coin is picked at random and tossed 3 times; all 3 tosses are heads. Find (a) the probability that coin B was picked, (b) the probability that a 4th toss of the same coin is a head.`,
            steps: [
              t`Likelihoods: $P(HHH|A) = \frac{1}{8} = \frac{8}{64}$, $P(HHH|B) = \frac{27}{64}$. Priors are equal, so they cancel.`,
              t`(a) $P(B|HHH) = \frac{27}{8 + 27} = \frac{27}{35}$, and $P(A|HHH) = \frac{8}{35}$.`,
              t`(b) Use the posteriors as new priors (total probability): $P(H_4) = \frac{8}{35}\cdot\frac{1}{2} + \frac{27}{35}\cdot\frac{3}{4} = \frac{16}{140} + \frac{81}{140}$.`,
            ],
            answer: t`(a) $\frac{27}{35}$ (b) $\frac{97}{140}$`,
          },
          {
            type: "mistake",
            wrong: t`In the test question, the test is 95% accurate, so a positive result means a 95% chance of disease.`,
            right: t`95% is $P(+|D)$. The question asks for $P(D|+)$, which needs the prior: here it is only $\frac{19}{118} \approx 16\%$.`,
            why: "This swaps the condition and the event. When the hypothesis is rare, the false positives from the large healthy group outnumber the true positives.",
          },
          {
            type: "mistake",
            wrong: t`For two independent events, $P(\text{at least one}) = P(A) + P(B)$.`,
            right: t`$P(A \cup B) = P(A) + P(B) - P(A)P(B) = 1 - P(A')P(B')$.`,
            why: "Simple addition counts the case where both happen twice. It can even give an answer above 1.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A and B toss a fair coin in turn, A first. The first to get a head wins. P(A wins) is:",
                options: ["1/2", "2/3", "3/4", "1/3"],
                answer: 1,
                explain: t`$\frac{1/2}{1 - 1/4} = \frac{2}{3}$. Going first is an advantage.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each question type to its first move.",
              pairs: [
                ["'At least one' with independent events", "Find 1 − P(none)"],
                ["Effect observed, cause asked", "Bayes' theorem"],
                ["Mean and variance of B(n, p) given", "q = variance ÷ mean"],
                ["Players take turns until a success", "Sum a geometric series"],
                ["Draws without replacement in sequence", "Multiplication theorem"],
              ],
              explain: "Spotting the type in the first ten seconds is half the solution in a timed exam.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Always ask: is the question $P(E|F)$ or $P(F|E)$?`,
              t`Bayes: posterior $\propto$ prior × likelihood; rare causes stay unlikely.`,
              t`Turns: $P(\text{first wins}) = \frac{p_1}{1 - q_1 q_2}$.`,
              t`Binomial: $q = \frac{\text{variance}}{\text{mean}}$; minimum trials from $q^n < 1 - a$.`,
            ],
          },
        ],
        flashcards: [
          { front: "A, B alternate; P(success) p for both; A starts. P(A wins)?", back: t`$\frac{p}{1 - q^2} = \frac{1}{1 + q}$` },
          { front: "Positive test, rare disease: what dominates the answer?", back: "The prior. False positives from the large healthy group can outnumber true positives." },
          { front: "Minimum n with P(at least one success) > a", back: t`Smallest integer $n$ with $q^n < 1 - a$.` },
          { front: "Binomial: find p from mean m and variance v", back: t`$q = \frac{v}{m}$, $p = 1 - \frac{v}{m}$, $n = \frac{m}{p}$.` },
          { front: "After Bayes, how do you predict the next trial?", back: "Use the posteriors as the new weights in a total-probability sum." },
          { front: "Which entrance exams test Class 12 probability?", back: "JEE Main, JEE Advanced, KCET and COMEDK. NEET has no mathematics paper." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A die is thrown repeatedly until a six appears. The probability that an even number of throws is needed is:",
            options: ["1/2", "5/11", "6/11", "5/36"],
            answer: 1,
            explain: t`$P = \sum_{k \ge 1}\left(\frac{5}{6}\right)^{2k-1}\frac{1}{6} = \frac{(5/6)(1/6)}{1 - 25/36} = \frac{5/36}{11/36} = \frac{5}{11}$.`,
            difficulty: 2,
            hint: "The six comes on throw 2, 4, 6, …; sum a geometric series.",
          },
          {
            kind: "numeric",
            q: "Box I has 2 white and 3 black balls; Box II has 3 white and 2 black. A ball is moved at random from Box I to Box II, then a ball drawn from Box II is white. Find the probability that the moved ball was black (to 3 decimal places).",
            answer: 0.529,
            tolerance: 0.002,
            explain: t`$P(W) = \frac{2}{5}\cdot\frac{4}{6} + \frac{3}{5}\cdot\frac{3}{6} = \frac{8}{30} + \frac{9}{30} = \frac{17}{30}$. $P(\text{black moved}|W) = \frac{9/30}{17/30} = \frac{9}{17} \approx 0.529$.`,
            difficulty: 2,
            hint: "After the move Box II has 6 balls.",
          },
          {
            kind: "numeric",
            q: "Find the least n such that the probability of at least one six in n throws of a die exceeds 1/2.",
            answer: 4,
            explain: t`Need $\left(\frac{5}{6}\right)^n < \frac{1}{2}$. $\left(\frac{5}{6}\right)^3 \approx 0.579$, $\left(\frac{5}{6}\right)^4 \approx 0.482$. So $n = 4$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`$A$ and $B$ are independent events with $0 < P(A), P(B) < 1$. Which must be true?`,
            options: [t`$A'$ and $B'$ are independent`, t`$P(A \cap B) = 0$`, t`$P(A|B) = P(A|B')$`, t`$P(A \cup B) = 1 - P(A')P(B')$`],
            answers: [0, 2, 3],
            explain: t`Complements of independent events are independent; $P(A|B) = P(A) = P(A|B')$; $P(A \cup B) = 1 - P(A' \cap B') = 1 - P(A')P(B')$. The intersection is $P(A)P(B) > 0$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$X \sim B(n, p)$ with $E(X) = 3$ and $\operatorname{Var}(X) = \frac{3}{2}$. Find $P(X = 1)$.`,
            options: ["3/32", "1/64", "15/64", "3/16"],
            answer: 0,
            explain: t`$q = \frac{1}{2}$, $p = \frac{1}{2}$, $n = 6$. $P(X = 1) = \binom{6}{1}\frac{1}{64} = \frac{6}{64} = \frac{3}{32}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In a class, 40% study Maths and 60% study Biology (no one studies both). 30% of Maths students and 10% of Biology students wear glasses. A student with glasses is chosen. P(they study Maths)?",
            options: ["2/3", "1/2", "3/10", "4/5"],
            answer: 0,
            explain: t`$P(G) = 0.4(0.3) + 0.6(0.1) = 0.12 + 0.06 = 0.18$. $P(M|G) = \frac{0.12}{0.18} = \frac{2}{3}$.`,
          },
          {
            kind: "numeric",
            q: t`A fair coin is tossed 4 times and $X$ is the number of heads. Find $E(X^2)$.`,
            answer: 5,
            explain: t`$E(X) = np = 2$, $\operatorname{Var}(X) = npq = 1$. $E(X^2) = \operatorname{Var} + [E(X)]^2 = 1 + 4 = 5$.`,
            difficulty: 3,
            hint: t`Rearrange $\operatorname{Var}(X) = E(X^2) - [E(X)]^2$.`,
          },
          {
            kind: "numeric",
            q: t`A coin with $P(H) = \frac{3}{4}$ and a fair coin are in a bag. One is picked at random and tossed twice, giving two heads. Find the probability that a third toss is also a head (to 3 decimal places).`,
            answer: 0.673,
            tolerance: 0.002,
            explain: t`$P(HH|\text{biased}) = \frac{9}{16}$, $P(HH|\text{fair}) = \frac{4}{16}$. Posteriors $\frac{9}{13}$ and $\frac{4}{13}$. $P(H_3) = \frac{9}{13}\cdot\frac{3}{4} + \frac{4}{13}\cdot\frac{1}{2} = \frac{27}{52} + \frac{8}{52} = \frac{35}{52} \approx 0.673$.`,
            difficulty: 3,
            hint: "Bayes first, then use the posteriors in a total-probability sum.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Linear Programming (NCERT Class 12 Ch 12, CBSE + Karnataka; ISC Sec C) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-linear-programming",
    title: "Linear Programming",
    icon: "📈",
    description:
      "Formulating linear programming problems, and solving two-variable problems graphically by the corner point method, including unbounded and infeasible regions.",
    lessons: [
      {
        slug: "c12-lpp-formulation",
        title: "Linear Programming Problems: Terms and Formulation",
        summary:
          "Decision variables, objective function, constraints and feasible region, and how to turn a word problem about profit or cost into a linear programming problem.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🪑",
            caption: "A workshop in Rajkot makes chairs and tables. How many of each should it make to earn the most profit?",
          },
          {
            type: "text",
            md: t`Many real decisions ask for the **best** use of limited resources: the most profit from limited labour, the least cost for a required diet. When every quantity involved is a **linear** function of the unknowns, the question is a **linear programming problem (LPP)**.`,
          },
          {
            type: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Decision variables", t`The unknown quantities we choose, such as $x$ chairs and $y$ tables.`],
              ["Objective function", t`The linear function $Z = ax + by$ to be maximised or minimised (profit, cost).`],
              ["Constraints", t`Linear inequalities the variables must satisfy, such as $2x + 3y \le 120$.`],
              ["Non-negative constraints", t`$x \ge 0$, $y \ge 0$: you cannot make a negative number of items.`],
              ["Optimisation problem", "Maximising or minimising the objective function subject to the constraints."],
            ],
          },
          {
            type: "example",
            title: "Formulating a production problem",
            problem: "A chair needs 2 hours of carpentry and 1 hour of polishing; a table needs 3 hours of carpentry and 2 hours of polishing. Each week the workshop has 120 carpentry hours and 70 polishing hours. Profit is ₹300 per chair and ₹500 per table. Formulate the LPP to maximise profit.",
            steps: [
              t`Let $x$ = number of chairs and $y$ = number of tables made per week.`,
              t`Objective: maximise $Z = 300x + 500y$.`,
              t`Carpentry: $2x + 3y \le 120$. Polishing: $x + 2y \le 70$.`,
              t`Non-negativity: $x \ge 0$, $y \ge 0$.`,
            ],
            answer: t`Maximise $Z = 300x + 500y$ subject to $2x + 3y \le 120$, $x + 2y \le 70$, $x \ge 0$, $y \ge 0$.`,
          },
          {
            type: "text",
            md: t`Each constraint is a half-plane. The common region of all the constraints is the **feasible region**. Every point in it (including its boundary) is a **feasible solution**. Points outside it are **infeasible**. A feasible solution that gives the best value of $Z$ is an **optimal solution**.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A dealer has ₹50,000 to buy fans at ₹2,500 each (x) and lamps at ₹1,000 each (y). The money constraint is:",
                options: [t`$2500x + 1000y \le 50000$`, t`$2500x + 1000y \ge 50000$`, t`$x + y \le 50000$`, t`$1000x + 2500y \le 50000$`],
                answer: 0,
                explain: t`Total spending $2500x + 1000y$ can be **at most** the ₹50,000 available, so the sign is $\le$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Formulating a diet (minimum cost) problem",
            problem: "Food P has 3 units of iron and 1 unit of calcium per kg; food Q has 1 unit of iron and 2 units of calcium per kg. A diet needs at least 15 units of iron and 10 units of calcium. P costs ₹60/kg and Q costs ₹40/kg. Formulate the LPP to minimise cost.",
            steps: [
              t`Let $x$ kg of P and $y$ kg of Q be used.`,
              t`Iron: $3x + y \ge 15$. Calcium: $x + 2y \ge 10$. The words "at least" give $\ge$.`,
              t`Objective: minimise $Z = 60x + 40y$, with $x, y \ge 0$.`,
            ],
            answer: t`Minimise $Z = 60x + 40y$ subject to $3x + y \ge 15$, $x + 2y \ge 10$, $x, y \ge 0$.`,
          },
          {
            type: "mistake",
            wrong: "Every constraint in a profit problem is ≤ and every constraint in a cost problem is ≥, so I can choose the sign from the objective.",
            right: "Read each sentence: \"at most\", \"not more than\", \"available\" give ≤; \"at least\", \"not less than\", \"required\" give ≥. A profit problem can have a ≥ constraint (for example, a minimum order).",
            why: "Most textbook examples follow the pattern, so it feels like a rule. Board papers often add one constraint of the other type to test exactly this.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each phrase to its inequality.",
              pairs: [
                ["At most 40 units of x can be sold", "x ≤ 40"],
                ["At least 10 units of y are needed", "y ≥ 10"],
                ["Make at least twice as many x as y", "x ≥ 2y"],
                ["Total of x and y cannot exceed 60", "x + y ≤ 60"],
                ["x cannot be negative", "x ≥ 0"],
              ],
              explain: "Translate word by word: \"at most\" is ≤, \"at least\" is ≥, and \"twice as many x as y\" puts the 2 next to y.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "CBSE and Karnataka PUC (rationalised NCERT) examine problems with two variables and up to three non-trivial constraints, solved graphically. ISC places Linear Programming in Section C and also asks formulation from word problems (manufacturing, diet, transport-style allocation in two variables).",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a word problem, the formulation usually earns 1–2 marks by itself. Write \"Let x = … and y = …\" with units, list every constraint on its own line, and do not forget x ≥ 0, y ≥ 0.",
          },
          {
            type: "keypoints",
            items: [
              "An LPP optimises a linear objective function subject to linear constraints.",
              "Define decision variables clearly before writing anything else.",
              "Feasible region = common region of all constraints, including non-negativity.",
              "\"At most\" gives ≤; \"at least\" gives ≥; read each constraint separately.",
            ],
          },
        ],
        flashcards: [
          { front: "Objective function", back: t`The linear function $Z = ax + by$ to be maximised or minimised.` },
          { front: "Decision variables", back: "The unknown non-negative quantities whose values we choose." },
          { front: "Feasible region", back: "The common region of all the constraints, including x ≥ 0, y ≥ 0." },
          { front: "Feasible solution", back: "Any point in the feasible region (boundary included)." },
          { front: "Optimal solution", back: "A feasible solution that gives the maximum or minimum value of the objective function." },
          { front: "\"At least\" in a constraint gives which sign?", back: "≥" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these can be the objective function of an LPP?",
            options: [t`$Z = 3x + 4y$`, t`$Z = x^2 + y$`, t`$Z = xy$`, t`$Z = \sqrt{x} + y$`],
            answer: 0,
            explain: "An LPP needs a linear objective. The others contain squares, products or roots.",
          },
          {
            kind: "truefalse",
            q: "Points on the boundary of the feasible region are feasible solutions.",
            answer: true,
            explain: "The constraints use ≤ or ≥, so boundary points satisfy them.",
          },
          {
            kind: "mcq",
            q: "A farmer has 50 hectares for wheat (x) and rice (y), and wants at least 10 hectares of rice. Which pair of constraints is correct?",
            options: [t`$x + y \le 50$, $y \ge 10$`, t`$x + y \ge 50$, $y \ge 10$`, t`$x + y \le 50$, $y \le 10$`, t`$x + y = 10$, $y \le 50$`],
            answer: 0,
            explain: "Total land is at most 50, and rice is at least 10.",
          },
          {
            kind: "mcq",
            q: "In the chair–table problem, the polishing constraint is x + 2y ≤ 70. Is (40, 20) feasible?",
            options: ["Yes", "No, it breaks polishing only", "No, it breaks carpentry only", "No, it breaks both"],
            answer: 3,
            explain: t`Polishing: $40 + 40 = 80 > 70$. Carpentry: $80 + 60 = 140 > 120$. Both fail.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The variables x, y ≥ 0 conditions are called ___ constraints.",
            answer: ["non-negative", "non-negativity", "nonnegative"],
            explain: "They say the decision variables cannot take negative values.",
          },
          {
            kind: "mcq",
            q: "\"The number of type A toys (x) must be at least three times the number of type B toys (y).\" The constraint is:",
            options: [t`$3x \ge y$`, t`$x \ge 3y$`, t`$x \le 3y$`, t`$y \ge 3x$`],
            answer: 1,
            explain: t`$x$ is at least 3 times $y$: $x \ge 3y$. Writing $3x \ge y$ puts the 3 on the wrong side.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Every LPP has exactly one optimal solution.",
            answer: false,
            explain: "An LPP may have no solution (infeasible), no optimum (unbounded), or infinitely many optimal solutions.",
          },
        ],
      },
      {
        slug: "c12-lpp-graphical",
        title: "Graphical Method: Corner Points, Bounded and Unbounded Regions",
        summary:
          "Solve two-variable LPPs by the corner point method, test unbounded regions with an open half-plane, and recognise multiple optimal solutions and infeasible problems.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Draw each constraint line, shade the correct side (test with the origin when the line does not pass through it), and find the feasible region. A region is **bounded** if it can be enclosed in a circle, otherwise **unbounded**. Its **corner points** are the vertices where two boundary lines meet.`,
          },
          {
            type: "list",
            items: [
              "**Theorem 1.** If an LPP has an optimal value and the feasible region is convex, the optimum occurs at a corner point.",
              "**Theorem 2.** If the feasible region is **bounded**, the objective function has **both** a maximum and a minimum, each at a corner point.",
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Draw the feasible region and find all corner points (solve pairs of boundary lines).",
              t`Evaluate $Z = ax + by$ at each corner point in a table.`,
              t`Bounded region: the largest value is the maximum, the smallest is the minimum.`,
              t`Unbounded region: let $M$ be the largest corner value. $M$ is the maximum only if the open half-plane $ax + by > M$ has **no** point in common with the region. Similarly the smallest value $m$ is the minimum only if $ax + by < m$ has no common point.`,
            ],
          },
          {
            type: "example",
            title: "Bounded region: the workshop problem",
            problem: t`Maximise $Z = 300x + 500y$ subject to $2x + 3y \le 120$, $x + 2y \le 70$, $x, y \ge 0$.`,
            steps: [
              t`Lines: $2x + 3y = 120$ meets the axes at $(60, 0)$ and $(0, 40)$; $x + 2y = 70$ at $(70, 0)$ and $(0, 35)$. The origin satisfies both, so shade towards it.`,
              t`Intersection: from $x = 70 - 2y$, $2(70 - 2y) + 3y = 120$, so $y = 20$ and $x = 30$.`,
              t`Corner points: $O(0, 0)$, $A(60, 0)$, $B(30, 20)$, $C(0, 35)$. The region is bounded.`,
              t`$Z$: $O = 0$, $A = 18000$, $B = 9000 + 10000 = 19000$, $C = 17500$.`,
            ],
            answer: t`Maximum profit ₹19,000 at $x = 30$ chairs, $y = 20$ tables.`,
          },
          {
            type: "table",
            headers: ["Corner point", "Z = 300x + 500y"],
            rows: [
              ["O(0, 0)", "0"],
              ["A(60, 0)", "18,000"],
              ["B(30, 20)", "**19,000** (maximum)"],
              ["C(0, 35)", "17,500"],
            ],
          },
          {
            type: "example",
            title: "Unbounded region: a minimum that exists",
            problem: t`Minimise $Z = 3x + 2y$ subject to $x + 2y \ge 10$, $3x + y \ge 15$, $x, y \ge 0$.`,
            steps: [
              t`The region lies on the side of each line away from the origin, so it is unbounded.`,
              t`Corners: $(10, 0)$ on $x + 2y = 10$ (it also satisfies $3x + y \ge 15$); $(0, 15)$ on $3x + y = 15$; and the intersection: $y = 15 - 3x$ gives $x + 30 - 6x = 10$, so $(4, 3)$.`,
              t`$Z(10, 0) = 30$, $Z(0, 15) = 30$, $Z(4, 3) = 12 + 6 = 18$. Smallest value $m = 18$.`,
              t`Check the open half-plane $3x + 2y < 18$: it lies below the line through $(6, 0)$ and $(0, 9)$. Both of those points break a constraint, and the region touches the line only at $(4, 3)$. No common point.`,
            ],
            answer: t`Minimum $Z = 18$ at $(4, 3)$. There is no maximum, because $Z$ grows without limit on the unbounded region.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The corner points of a bounded feasible region are (0, 0), (5, 0), (3, 4) and (0, 5). The maximum of Z = 2x + 3y is:",
                options: ["15 at (0, 5)", "18 at (3, 4)", "10 at (5, 0)", "There is no maximum"],
                answer: 1,
                explain: t`$Z$: 0, 10, $6 + 12 = 18$, 15. The largest is 18 at $(3, 4)$.`,
              },
              {
                kind: "truefalse",
                q: "On an unbounded feasible region, the largest corner value is always the maximum.",
                answer: false,
                explain: "You must check the open half-plane ax + by > M. If it meets the region, there is no maximum.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Multiple optimal solutions.** If two corner points give the same optimal value, every point on the segment joining them is also optimal. For the workshop region, $Z = x + 2y$ gives 70 at both $B(30, 20)$ and $C(0, 35)$, because the objective line is parallel to the edge $x + 2y = 70$.

**Infeasible problem.** If the constraints have no common region (for example $x + y \le 2$ and $x + y \ge 5$), there is no feasible solution and no optimum.`,
          },
          {
            type: "mistake",
            wrong: t`The feasible region is unbounded, so the minimum does not exist either.`,
            right: t`Unbounded means the optimum **may** fail to exist. Use the half-plane test: in the example above, the minimum 18 exists even though the maximum does not.`,
            why: "Students link \"unbounded\" with \"no answer\". But a region that stretches away from the origin still has a closest corner for a minimising objective with positive coefficients.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Z = x + 2y on the workshop region gives 70 at two corners. How many optimal points?",
              emoji: "📐",
              options: ["Exactly two", "Infinitely many", "None, the answer is ambiguous"],
              answer: 1,
              trap: 0,
              explain: t`Every point on the segment joining $(0, 35)$ and $(30, 20)$ gives $Z = 70$, so there are infinitely many optimal solutions.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A graphical LPP is a 5–6 mark question in CBSE, PUC and ISC. Marks usually go to: correct lines with intercepts, the shaded feasible region, corner points (show how the intersection was found), a table of Z values, and a final statement. For an unbounded region, draw the open half-plane and write the conclusion in words.",
          },
          {
            type: "keypoints",
            items: [
              "Optimal values occur at corner points; build a corner-point table.",
              "Bounded region: both maximum and minimum exist.",
              "Unbounded region: test with the open half-plane before declaring an optimum.",
              "Two optimal corners → every point on the joining segment is optimal.",
              "No common region → infeasible, no solution.",
            ],
          },
        ],
        flashcards: [
          { front: "Where does the optimum of an LPP occur?", back: "At a corner point of the feasible region (if it exists)." },
          { front: "Bounded feasible region: do max and min both exist?", back: "Yes, both exist, each at a corner point." },
          { front: "Unbounded region test for maximum M", back: t`$M$ is the maximum only if $ax + by > M$ has no point in common with the feasible region.` },
          { front: "Unbounded region test for minimum m", back: t`$m$ is the minimum only if $ax + by < m$ has no point in common with the feasible region.` },
          { front: "Two corners give the same optimal value. Conclusion?", back: "Every point on the segment joining them is optimal (infinitely many solutions)." },
          { front: "Infeasible LPP", back: "The constraints have no common region, so there is no feasible solution." },
          { front: "Which point is tested to decide the side of a line?", back: "Usually the origin (0, 0), unless the line passes through it." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Maximise Z = 5x + 4y subject to x + y ≤ 6, x ≤ 4, x, y ≥ 0. Find the maximum value.",
            answer: 28,
            explain: t`Corners: $(0,0)$, $(4,0)$, $(4,2)$, $(0,6)$. $Z$: 0, 20, $20 + 8 = 28$, 24. Maximum 28 at $(4, 2)$.`,
          },
          {
            kind: "mcq",
            q: "The corner points of a bounded feasible region are (1, 1), (4, 1), (4, 3) and (1, 3). The minimum of Z = 2x − y is:",
            options: ["−1 at (1, 3)", "1 at (1, 1)", "5 at (4, 3)", "7 at (4, 1)"],
            answer: 0,
            explain: t`$Z$: $(1,1) = 1$, $(4,1) = 7$, $(4,3) = 5$, $(1,3) = -1$. Minimum −1 at $(1, 3)$.`,
          },
          {
            kind: "truefalse",
            q: "If the feasible region is bounded, the objective function has both a maximum and a minimum.",
            answer: true,
            explain: "This is Theorem 2 of the corner point method.",
          },
          {
            kind: "mcq",
            q: "Minimise Z = 3x + 2y subject to x + 2y ≥ 10, 3x + y ≥ 15, x, y ≥ 0. The minimum is:",
            options: ["30", "18", "15", "Does not exist"],
            answer: 1,
            explain: "Corner values are 30, 30 and 18; the half-plane 3x + 2y < 18 misses the region, so 18 is the minimum.",
          },
          {
            kind: "mcq",
            q: "The constraints x + y ≥ 8 and x + y ≤ 4 with x, y ≥ 0 give:",
            options: ["an unbounded region", "a single point", "no feasible region", "a bounded region"],
            answer: 2,
            explain: "No point can have x + y both at least 8 and at most 4.",
          },
          {
            kind: "numeric",
            q: "Maximise Z = x + 2y on the region with corners (0, 0), (60, 0), (30, 20), (0, 35). Find the maximum value.",
            answer: 70,
            explain: t`$Z$: 0, 60, 70, 70. The maximum 70 occurs at $(30, 20)$ and $(0, 35)$ and every point between them.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Maximise Z = x + y subject to x − y ≤ 1, x + y ≥ 3, x, y ≥ 0. The result is:",
            options: ["Maximum 3", "Maximum 1", "No maximum: Z is unbounded", "No feasible region"],
            answer: 2,
            explain: t`The region is unbounded upwards: for example $(0, k)$ is feasible for every $k \ge 3$, and there $Z = k$ grows without limit.`,
            difficulty: 2,
            hint: t`Try points $(0, k)$ for large $k$.`,
          },
        ],
      },
      {
        slug: "c12-lpp-exam-edge",
        title: "Exam edge: Linear Programming for KCET and COMEDK",
        summary:
          "Quick corner-point reading, parameter questions on where an optimum can occur, and unbounded-region traps, as asked in KCET and COMEDK.",
        minutes: 18,
        xp: 50,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What is asked.** Linear Programming is part of the KCET and COMEDK syllabus (both follow the PUC / CBSE Class 12 book) and usually gives 1–2 quick questions: read corner points and find the optimum, count corner points, decide whether a region is bounded, or find a parameter so that the optimum is at a given point. **JEE Main and JEE Advanced do not list Linear Programming**, but the same skill (regions defined by linear inequalities) appears in JEE coordinate geometry.`,
          },
          {
            type: "list",
            items: [
              t`**Corner table first.** For an MCQ, list corner values; do not redraw the graph if the corners are given.`,
              t`**Slope test.** On a convex region, $Z = ax + by$ (with $b > 0$) is maximised at the corner where the objective line's slope $-\frac{a}{b}$ lies between the slopes of the two edges meeting there.`,
              t`**Two corners equal** → optimum along the whole edge; this happens when $Z$ is parallel to that edge.`,
              t`**Unbounded and "maximise" with positive coefficients** in a region stretching away from the origin: there is no maximum.`,
            ],
          },
          {
            type: "example",
            title: "KCET level: reading corner points",
            problem: "The corner points of a feasible region are (0, 2), (3, 0), (6, 0), (6, 8) and (0, 5). For Z = 4x + 6y, find the maximum and the minimum.",
            steps: [
              t`$Z(0, 2) = 12$, $Z(3, 0) = 12$, $Z(6, 0) = 24$, $Z(6, 8) = 24 + 48 = 72$, $Z(0, 5) = 30$.`,
              "Largest: 72. Smallest: 12, reached at two corners.",
            ],
            answer: t`Maximum 72 at $(6, 8)$. Minimum 12 at every point of the segment joining $(0, 2)$ and $(3, 0)$.`,
          },
          {
            type: "example",
            title: "COMEDK level: a parameter for a tie",
            problem: t`The feasible region has corners $O(0, 0)$, $A(4, 0)$, $B(3, 2)$, $C(0, 3)$. For $Z = px + qy$ with $p, q > 0$, find the condition for the maximum to occur at both $A$ and $B$.`,
            steps: [
              t`$Z(A) = 4p$, $Z(B) = 3p + 2q$.`,
              t`Equal: $4p = 3p + 2q$, so $p = 2q$.`,
              t`Check $C$: $Z(C) = 3q$, while $Z(A) = 8q > 3q$. So $A$ and $B$ really are the maximum.`,
            ],
            answer: t`$p = 2q$`,
          },
          {
            type: "example",
            title: "JEE-style reasoning: a range for a unique optimum",
            problem: t`On the same region ($O, A(4,0), B(3,2), C(0,3)$), find all $k > 0$ for which $Z = kx + y$ has its maximum **only** at $B$.`,
            steps: [
              t`$Z(O) = 0$, $Z(A) = 4k$, $Z(B) = 3k + 2$, $Z(C) = 3$.`,
              t`Need $Z(B) > Z(A)$: $3k + 2 > 4k$, so $k < 2$.`,
              t`Need $Z(B) > Z(C)$: $3k + 2 > 3$, so $k > \frac{1}{3}$.`,
              t`Check with slopes: edge $AB$ ($2x + y = 8$) has slope $-2$, edge $BC$ ($x + 3y = 9$) has slope $-\frac{1}{3}$; the objective slope $-k$ must lie strictly between them.`,
            ],
            answer: t`$\frac{1}{3} < k < 2$`,
          },
          {
            type: "example",
            title: "Unbounded check",
            problem: t`Maximise $Z = -x + 2y$ subject to $x \ge 3$, $x + y \ge 5$, $x + 2y \ge 6$, $y \ge 0$.`,
            steps: [
              t`Corners: $(6, 0)$ from $x + 2y = 6$, $y = 0$; $(4, 1)$ from $x + y = 5$, $x + 2y = 6$; $(3, 2)$ from $x = 3$, $x + y = 5$.`,
              t`$Z(6, 0) = -6$, $Z(4, 1) = -2$, $Z(3, 2) = 1$. Largest corner value $M = 1$.`,
              t`Test $-x + 2y > 1$: the point $(3, 5)$ is feasible and gives $Z = 7 > 1$. The half-plane meets the region.`,
            ],
            answer: "No maximum: Z is unbounded above on this region.",
          },
          {
            type: "mistake",
            wrong: "The corner with the largest x and y always gives the maximum.",
            right: t`Evaluate $Z$ at every corner. With $Z = 4x + 6y$ above, $(6, 8)$ won, but with $Z = x - y$ the corner $(6, 0)$ would win.`,
            why: "With positive coefficients the far corner often wins, so students stop checking. Negative coefficients or very unequal ones change the answer.",
          },
          {
            type: "mistake",
            wrong: "The largest corner value on an unbounded region is the maximum.",
            right: "On an unbounded region, a corner value is the optimum only after the open half-plane test.",
            why: "The corner method gives a candidate, not a proof. In the unbounded example the largest corner value 1 is beaten by the feasible point (3, 5).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Corners $(0, 0)$, $(5, 0)$, $(4, 3)$, $(0, 4)$. For which objective is the maximum at **both** $(5, 0)$ and $(4, 3)$?`,
                options: [t`$Z = 3x + y$`, t`$Z = x + 3y$`, t`$Z = x + y$`, t`$Z = 2x + y$`],
                answer: 0,
                explain: t`$3x + y$: $(5, 0) = 15$, $(4, 3) = 15$, $(0, 4) = 4$. It is parallel to the edge through those two corners.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Optimum exists or not? Sort each case.",
              groups: ["Optimum exists", "No optimum"],
              items: [
                { text: "Bounded feasible region, maximise", group: 0, hint: "Theorem 2: both max and min exist." },
                { text: "Bounded feasible region, minimise", group: 0, hint: "Theorem 2 again." },
                { text: "No common region", group: 1, hint: "Infeasible: no solution at all." },
                { text: "Region stretches away from origin, maximise x + y", group: 1, hint: "x + y grows without limit." },
                { text: "Region stretches away from origin, minimise x + y", group: 0, hint: "The nearest corner gives the minimum." },
              ],
              explain: "Bounded regions always have both optima; unbounded ones need the half-plane test; infeasible problems have none.",
            },
          },
          {
            type: "keypoints",
            items: [
              "LP is examined in KCET, COMEDK and boards; it is not in the JEE Main or JEE Advanced syllabus.",
              "Make a corner table; check every corner.",
              "Tie at two corners ↔ objective parallel to the edge joining them.",
              "Unique optimum at a vertex ↔ objective slope strictly between the two edge slopes.",
            ],
          },
        ],
        flashcards: [
          { front: "Is Linear Programming in JEE Main?", back: "No. It is in boards, KCET and COMEDK." },
          { front: "When is the optimum at every point of an edge?", back: "When the objective line is parallel to that edge and the edge is optimal." },
          { front: "Unique max of Z = kx + y at vertex B", back: "−k lies strictly between the slopes of the two edges meeting at B." },
          { front: "Quick first step for 'corner points given' MCQs", back: "Evaluate Z at each corner in a small table." },
          { front: "Maximise x + y on a region unbounded away from origin", back: "No maximum; Z can be made as large as you like." },
          { front: "Feasible region empty", back: "The LPP is infeasible: no optimal solution." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Corner points (0, 10), (5, 5), (15, 15), (0, 20). For Z = 3x − 4y, the maximum minus the minimum is:",
            options: ["75", "85", "80", "65"],
            answer: 0,
            explain: t`$Z$: $(0,10) = -40$, $(5,5) = -5$, $(15,15) = -15$, $(0,20) = -80$. Maximum $-5$, minimum $-80$, so the difference is $-5 - (-80) = 75$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Corners (0, 0), (4, 0), (3, 2), (0, 3). Find the maximum of Z = 2x + 5y.",
            answer: 16,
            explain: t`$Z$: 0, 8, $6 + 10 = 16$, 15. Maximum 16 at $(3, 2)$.`,
          },
          {
            kind: "multi",
            q: "Which statements about an LPP with a non-empty feasible region are true?",
            options: [
              "If the region is bounded, the maximum exists",
              "If the region is unbounded, the minimum never exists",
              "An optimum, if it exists, occurs at a corner point",
              "There can be infinitely many optimal solutions",
            ],
            answers: [0, 2, 3],
            explain: "Unbounded regions can still have a minimum (or maximum); test with the half-plane.",
          },
          {
            kind: "mcq",
            q: t`Corners $O(0,0)$, $A(4,0)$, $B(3,2)$, $C(0,3)$. $Z = kx + y$ ($k > 0$) is maximised only at $A$ when:`,
            options: [t`$k > 2$`, t`$k < 2$`, t`$k > \frac{1}{3}$`, t`$k = 2$`],
            answer: 0,
            explain: t`Need $4k > 3k + 2$ (so $k > 2$) and $4k > 3$; the first is stronger.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "How many corner points does the region x + y ≤ 4, x ≤ 3, y ≤ 3, x, y ≥ 0 have?",
            answer: 5,
            explain: t`$(0,0)$, $(3,0)$, $(3,1)$, $(1,3)$, $(0,3)$. The line $x + y = 4$ cuts off the corner $(3,3)$ of the square, so there are 5 corners.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Minimise Z = x + y subject to 2x + y ≥ 4, x + 2y ≥ 4, x, y ≥ 0. The minimum is:",
            options: ["4", "8/3", "2", "Does not exist"],
            answer: 1,
            explain: t`Corners $(4, 0)$, $(0, 4)$ and the intersection $(\frac{4}{3}, \frac{4}{3})$. $Z$: 4, 4, $\frac{8}{3}$. The half-plane $x + y < \frac{8}{3}$ misses the region, so the minimum is $\frac{8}{3}$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Probability": "c12-probability",
  "12:Linear Programming": "c12-linear-programming",
};
