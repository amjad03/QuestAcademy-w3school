import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "math-high";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "arithmetic-geometric-progressions-10",
    title: "Arithmetic and Geometric Progressions",
    icon: "🪜",
    description: "Lists that grow by a fixed step or a fixed ratio: nth term, sum of n terms and word problems.",
    lessons: [
      /* ---------------- Lesson 1: AP and its nth term ---------------- */
      {
        slug: "ap-nth-term",
        title: "AP: Common Difference and nth Term",
        summary: "What an arithmetic progression is, how to find the common difference, the nth term formula and 'which term' questions.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🛺",
            caption: "An auto in Pune charges ₹30 for the first km and ₹15 for every extra km: ₹30, ₹45, ₹60, ₹75 … Each fare is ₹15 more than the one before.",
          },
          {
            type: "text",
            md: "A list of numbers written in order is a **sequence**. Each number in it is a **term**. We call the first term $a_1$ (or just $a$), the second $a_2$, and so on.\n\nAn **arithmetic progression (AP)** is a list in which every term is got by adding the *same fixed number* to the term before it. That fixed number is the **common difference**, written $d$.\n\nTo find $d$, subtract any term from the term just *after* it: $d = a_2 - a_1 = a_3 - a_2$. The value of $d$ can be positive (the list grows), negative (the list shrinks) or zero (all terms are equal).",
          },
          {
            type: "table",
            headers: ["List", "Differences", "AP?"],
            rows: [
              ["3, 7, 11, 15, …", "4, 4, 4", "Yes, $d = 4$"],
              ["20, 14, 8, 2, …", "−6, −6, −6", "Yes, $d = -6$"],
              ["5, 5, 5, 5, …", "0, 0, 0", "Yes, $d = 0$"],
              ["1, 4, 9, 16, …", "3, 5, 7", "No, the differences change"],
              ["2, 4, 8, 16, …", "2, 4, 8", "No (it multiplies by 2)"],
            ],
          },
          {
            type: "formula",
            tex: "a_n = a + (n-1)d",
            caption: "To reach the nth term you start at a and add d exactly (n − 1) times. Here n is the position of the term, so n must be a positive whole number.",
          },
          {
            type: "example",
            title: "Finding a term",
            problem: "Find the 21st term of the AP 3, 7, 11, 15, …",
            steps: [
              "First term $a = 3$. Common difference $d = 7 - 3 = 4$.",
              "We want $n = 21$, so $a_{21} = a + (21 - 1)d$.",
              "$a_{21} = 3 + 20 \\times 4 = 3 + 80 = 83$.",
            ],
            answer: "The 21st term is 83.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the common difference of the AP 10, 7, 4, 1, …?",
                answer: -3,
                explain: "$d = 7 - 10 = -3$. The list goes down, so $d$ is negative.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The nth term is $a + nd$, so the 21st term of 3, 7, 11, … is $3 + 21 \\times 4 = 87$.",
            right: "The nth term is $a + (n-1)d$, so the 21st term is $3 + 20 \\times 4 = 83$.",
            why: "It feels natural to add d once for every term. But the first term already sits at position 1 with no d added. From term 1 to term 21 there are only 20 steps.",
          },
          {
            type: "example",
            title: "Which term is it?",
            problem: "Which term of the AP 25, 21, 17, 13, … is −35?",
            steps: [
              "$a = 25$ and $d = 21 - 25 = -4$. Let $a_n = -35$.",
              "$25 + (n-1)(-4) = -35$, so $(n-1)(-4) = -60$.",
              "$n - 1 = 15$, so $n = 16$. This is a positive whole number, so −35 really is a term.",
            ],
            answer: "−35 is the 16th term.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Is 301 a term of the AP 5, 11, 17, 23, …?",
              emoji: "🤔",
              options: ["Yes, it is about the 50th term", "No, it is not a term"],
              answer: 1,
              trap: 0,
              explain: "$5 + (n-1)6 = 301$ gives $n - 1 = \\tfrac{296}{6} = 49\\tfrac{1}{3}$. A position cannot be a fraction, so 301 is **not** a term. Always check that n comes out as a positive whole number.",
            },
          },
          {
            type: "example",
            title: "Finding the AP from two terms",
            problem: "The 4th term of an AP is 11 and the 9th term is 26. Find the AP.",
            steps: [
              "$a_4 = a + 3d = 11$ and $a_9 = a + 8d = 26$.",
              "Subtract the first equation from the second: $5d = 15$, so $d = 3$.",
              "Put $d = 3$ back: $a + 9 = 11$, so $a = 2$.",
            ],
            answer: "The AP is 2, 5, 8, 11, …",
          },
          {
            type: "text",
            md: "**nth term from the end.** If an AP has a last term $l$, count backwards: the nth term from the end is $l - (n-1)d$. For 4, 9, 14, …, 254 the 3rd term from the end is $254 - 2 \\times 5 = 244$.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "Write the values of $a$ and $d$ and the formula $a_n = a + (n-1)d$ before you substitute. Marks are given for these steps even if the arithmetic slips. In 'which term' and 'is it a term' questions, finish with a sentence on whether n is a positive whole number.",
          },
          {
            type: "keypoints",
            items: [
              "In an AP each term is the previous term plus a fixed **common difference** $d = a_2 - a_1$.",
              "$d$ can be positive, negative or zero.",
              "nth term: $a_n = a + (n-1)d$. nth term from the end: $l - (n-1)d$.",
              "A number is a term only if solving for n gives a positive whole number.",
            ],
          },
        ],
        flashcards: [
          { front: "Arithmetic progression (AP)", back: "A list where each term is got by adding the same fixed number to the term before it." },
          { front: "Common difference d", back: "$d = a_2 - a_1$ (any term minus the term before it). It can be positive, negative or zero." },
          { front: "nth term of an AP", back: "$a_n = a + (n-1)d$" },
          { front: "nth term from the end of an AP with last term l", back: "$l - (n-1)d$" },
          { front: "How do you check if a number is a term of an AP?", back: "Put it equal to $a + (n-1)d$ and solve. It is a term only if n is a positive whole number." },
          { front: "Is 6, 6, 6, 6, … an AP?", back: "Yes. Its common difference is 0." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these lists is an AP?",
            options: ["1, 4, 9, 16, …", "2, 4, 8, 16, …", "5, 2, −1, −4, …", "1, 3, 6, 10, …"],
            answer: 2,
            explain: "5, 2, −1, −4 has the same difference −3 each time. The other lists have changing differences (squares, doubling, triangle numbers).",
          },
          {
            kind: "numeric",
            q: "Find the 15th term of the AP 7, 12, 17, 22, …",
            answer: 77,
            explain: "$a = 7$, $d = 5$: $a_{15} = 7 + 14 \\times 5 = 77$.",
          },
          {
            kind: "fill",
            q: "The common difference of the AP $\\tfrac{3}{2}, \\tfrac{1}{2}, -\\tfrac{1}{2}, \\ldots$ is ___.",
            answer: ["-1", "−1"],
            explain: "$d = \\tfrac{1}{2} - \\tfrac{3}{2} = -1$.",
          },
          {
            kind: "truefalse",
            q: "The list 4, 4, 4, 4, … is an AP.",
            answer: true,
            explain: "Each term is the one before plus 0, so it is an AP with $d = 0$.",
          },
          {
            kind: "numeric",
            q: "Which term of the AP 3, 8, 13, 18, … is 78?",
            answer: 16,
            explain: "$3 + (n-1)5 = 78$ gives $n - 1 = 15$, so $n = 16$.",
            difficulty: 2,
            hint: "Set $a + (n-1)d$ equal to 78 and solve for n.",
          },
          {
            kind: "order",
            q: "Put the steps for 'Which term of an AP is x?' in order.",
            items: [
              "Write down a and d",
              "Set a + (n − 1)d equal to x",
              "Solve the equation for n",
              "Check that n is a positive whole number",
            ],
            explain: "Find a and d, set up the nth term equation, solve, then check that n can really be a position.",
          },
          {
            kind: "multi",
            q: "For the AP 10, 6, 2, −2, …, which statements are true?",
            options: ["$d = -4$", "The 5th term is −6", "All its terms are positive", "0 is one of its terms"],
            answers: [0, 1],
            explain: "$d = 6 - 10 = -4$ and $a_5 = 10 + 4(-4) = -6$. The terms become negative. For 0: $10 - 4(n-1) = 0$ gives $n = 3.5$, not a whole number, so 0 is not a term.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Find the 10th term from the end of the AP 4, 9, 14, …, 254.",
            answer: 209,
            explain: "Last term $l = 254$, $d = 5$: $254 - 9 \\times 5 = 209$.",
            difficulty: 3,
            hint: "Count backwards from the last term: $l - (n-1)d$.",
          },
        ],
      },
      /* ---------------- Lesson 2: Sum of an AP ---------------- */
      {
        slug: "ap-sum-of-n-terms",
        title: "AP: Sum of the First n Terms",
        summary: "The two formulas for the sum of n terms of an AP and how to use them in savings, seating and prize problems.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🐷",
            caption: "Riya puts ₹50 in her piggy bank in the first week and ₹20 more each week than the week before. How much does she have after 12 weeks?",
          },
          {
            type: "text",
            md: "Here is a quick trick for $1 + 2 + 3 + \\ldots + 100$. Pair the first and last numbers: $1 + 100 = 101$. Then $2 + 99 = 101$, $3 + 98 = 101$, and so on. There are 50 such pairs, so the sum is $50 \\times 101 = 5050$.\n\nThe same pairing works for every AP, because going one step in from each end adds $d$ on one side and takes $d$ away on the other. This gives the formula for $S_n$, the **sum of the first n terms**.",
          },
          {
            type: "formula",
            tex: "S_n = \\frac{n}{2}\\left[2a + (n-1)d\\right]",
            caption: "Use this when you know the first term a, the common difference d and the number of terms n.",
          },
          {
            type: "formula",
            tex: "S_n = \\frac{n}{2}\\,(a + l)",
            caption: "Use this when you know the first term a and the last term l. Also, the nth term can be found from sums: a_n = S_n − S_(n−1).",
          },
          {
            type: "example",
            title: "Sum using a and d",
            problem: "Find the sum of the first 20 terms of the AP 2, 7, 12, 17, …",
            steps: [
              "$a = 2$, $d = 5$, $n = 20$.",
              "$S_{20} = \\tfrac{20}{2}[2 \\times 2 + 19 \\times 5]$.",
              "$= 10[4 + 95] = 10 \\times 99 = 990$.",
            ],
            answer: "The sum is 990.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the sum of the first 10 odd numbers: 1 + 3 + 5 + … (10 terms).",
                answer: 100,
                explain: "$a = 1$, $d = 2$: $S_{10} = 5[2 + 18] = 100$.",
              },
            ],
          },
          {
            type: "example",
            title: "Savings problem",
            problem: "Riya saves ₹50 in week 1 and ₹20 more each week than the week before. How much does she save in week 12, and how much in all 12 weeks?",
            steps: [
              "Weekly savings form an AP with $a = 50$, $d = 20$.",
              "Week 12: $a_{12} = 50 + 11 \\times 20 = 270$, so ₹270.",
              "Total: $S_{12} = \\tfrac{12}{2}[2 \\times 50 + 11 \\times 20] = 6[100 + 220] = 1920$.",
              "Check with $\\tfrac{n}{2}(a + l)$: $6(50 + 270) = 1920$. ✔",
            ],
            answer: "₹270 in week 12; ₹1920 in total.",
          },
          {
            type: "mistake",
            wrong: "The amount saved in week 12 (₹270) is her total savings.",
            right: "₹270 is only $a_{12}$, the 12th term. The total is the sum $S_{12} = ₹1920$.",
            why: "Both questions mention '12 weeks', so it is easy to grab the nth term formula. Read carefully: 'in the 12th week' asks for $a_n$; 'in 12 weeks' or 'altogether' asks for $S_n$.",
          },
          {
            type: "example",
            title: "Seats in rows",
            problem: "A school hall in Mysuru has 25 rows. The first row has 20 seats and each row has 2 more seats than the row in front. How many seats are in the last row, and in the hall?",
            steps: [
              "$a = 20$, $d = 2$, $n = 25$.",
              "Last row: $l = 20 + 24 \\times 2 = 68$ seats.",
              "Total: $S_{25} = \\tfrac{25}{2}(20 + 68) = \\tfrac{25}{2} \\times 88 = 1100$.",
            ],
            answer: "68 seats in the last row; 1100 seats in all.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each symbol to what it means.",
              pairs: [
                ["$a_n$", "the nth term (e.g. money saved in the nth week)"],
                ["$S_n$", "the total of the first n terms"],
                ["$l$", "the last term of the AP"],
                ["$S_n - S_{n-1}$", "another way to get the nth term"],
              ],
              explain: "$a_n$ is one term; $S_n$ adds up the first n terms. Subtracting the sum of $n-1$ terms from the sum of $n$ terms leaves just the nth term.",
            },
          },
          {
            type: "example",
            title: "Finding the number of terms",
            problem: "How many terms of the AP 3, 7, 11, … must be added to get a sum of 210?",
            steps: [
              "$a = 3$, $d = 4$: $S_n = \\tfrac{n}{2}[6 + 4(n-1)] = \\tfrac{n}{2}(4n + 2) = n(2n + 1)$.",
              "Set $n(2n+1) = 210$: $2n^2 + n - 210 = 0$.",
              "Factorise: $(n - 10)(2n + 21) = 0$, so $n = 10$ or $n = -\\tfrac{21}{2}$.",
              "The number of terms cannot be negative or a fraction, so $n = 10$.",
            ],
            answer: "10 terms.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tip",
            md: "When $S_n$ is given and you must find $n$, you get a quadratic. Show the quadratic, solve it, and write a line rejecting the negative or fractional root. Leaving out that line is a common way to lose a mark.",
          },
          {
            type: "keypoints",
            items: [
              "$S_n = \\tfrac{n}{2}[2a + (n-1)d]$ when you know a, d and n.",
              "$S_n = \\tfrac{n}{2}(a + l)$ when you know the first and last terms.",
              "'In the nth week' asks for $a_n$; 'in n weeks altogether' asks for $S_n$.",
              "$a_n = S_n - S_{n-1}$.",
            ],
          },
        ],
        flashcards: [
          { front: "Sum of first n terms (using a and d)", back: "$S_n = \\tfrac{n}{2}[2a + (n-1)d]$" },
          { front: "Sum of first n terms (using first and last term)", back: "$S_n = \\tfrac{n}{2}(a + l)$" },
          { front: "Sum of 1 + 2 + 3 + … + n", back: "$\\tfrac{n(n+1)}{2}$" },
          { front: "How do you get the nth term from the sums?", back: "$a_n = S_n - S_{n-1}$" },
          { front: "'Saved in the 12th week' or 'saved in 12 weeks'?", back: "The first is a term $a_{12}$; the second is a sum $S_{12}$." },
          { front: "Solving for n gives n = 10 or n = −10.5. What do you write?", back: "n = 10, because the number of terms must be a positive whole number." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the sum of the first 15 terms of the AP 4, 7, 10, …",
            answer: 375,
            explain: "$S_{15} = \\tfrac{15}{2}[8 + 14 \\times 3] = \\tfrac{15}{2} \\times 50 = 375$.",
          },
          {
            kind: "mcq",
            q: "What is $1 + 2 + 3 + \\ldots + 50$?",
            options: ["1275", "2550", "1250", "1300"],
            answer: 0,
            explain: "$\\tfrac{50}{2}(1 + 50) = 25 \\times 51 = 1275$. 2550 forgets to halve; 1250 uses 50 instead of 51.",
          },
          {
            kind: "numeric",
            q: "A school gives 7 cash prizes. The first prize is ₹1000 and each next prize is ₹100 less. What is the total prize money (in ₹)?",
            answer: 4900,
            unit: "₹",
            explain: "$a = 1000$, $d = -100$, $n = 7$: $S_7 = \\tfrac{7}{2}[2000 - 600] = \\tfrac{7}{2} \\times 1400 = 4900$.",
            difficulty: 2,
            hint: "Here d is negative: the prizes go down.",
          },
          {
            kind: "truefalse",
            q: "If the sum of the first n terms of an AP is $n^2$, then its nth term is $2n - 1$.",
            answer: true,
            explain: "$a_n = S_n - S_{n-1} = n^2 - (n-1)^2 = 2n - 1$.",
            difficulty: 3,
            hint: "Use $a_n = S_n - S_{n-1}$.",
          },
          {
            kind: "fill",
            q: "In the formula $S_n = \\tfrac{n}{2}(a + l)$, the letter $l$ stands for the ___ term.",
            answer: ["last"],
            explain: "$l$ is the last term (the nth term) of the part being added.",
          },
          {
            kind: "multi",
            q: "Which expressions give the sum of the first n terms of an AP?",
            options: ["$\\tfrac{n}{2}[2a + (n-1)d]$", "$\\tfrac{n}{2}(a + l)$", "$a + (n-1)d$", "$\\tfrac{n}{2}[2a + nd]$"],
            answers: [0, 1],
            explain: "$a + (n-1)d$ is the nth term, not the sum. $\\tfrac{n}{2}[2a + nd]$ uses $n$ instead of $n - 1$.",
          },
          {
            kind: "order",
            q: "Put the steps for 'How many seats are in a hall of 25 rows?' in order.",
            items: [
              "Read off a (first row) and d (extra seats per row)",
              "Note the number of rows n = 25",
              "Substitute into S_n = n/2 [2a + (n − 1)d]",
              "Simplify and write the answer with units",
            ],
            explain: "Identify a, d and n first, then use the sum formula and finish with a clear answer.",
          },
          {
            kind: "numeric",
            q: "Find the sum of all two-digit numbers that are multiples of 3.",
            answer: 1665,
            explain: "They are 12, 15, …, 99. Number of terms: $\\tfrac{99 - 12}{3} + 1 = 30$. Sum $= \\tfrac{30}{2}(12 + 99) = 15 \\times 111 = 1665$.",
            difficulty: 3,
            hint: "First find the smallest and largest two-digit multiples of 3, then count the terms.",
          },
        ],
      },
      /* ---------------- Lesson 3: Geometric progressions (ICSE) ---------------- */
      {
        slug: "geometric-progressions",
        title: "Geometric Progressions",
        summary: "Lists that multiply by a fixed common ratio: the nth term $ar^{n-1}$ and the sum of n terms (ICSE Class 10).",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🦠",
            caption: "A culture starts with 3 bacteria and the number doubles every hour: 3, 6, 12, 24, 48 … Each count is 2 times the one before.",
          },
          {
            type: "text",
            md: "In an AP we *add* the same number each time. In a **geometric progression (GP)** we *multiply* by the same number each time. That fixed multiplier is the **common ratio**, written $r$.\n\nTo find $r$, divide any term by the term just *before* it: $r = \\dfrac{a_2}{a_1} = \\dfrac{a_3}{a_2}$. In a GP no term is zero, and $r \\neq 0$.\n\nGP is part of the **ICSE** Class 10 chapter. The NCERT-based books (CBSE and Karnataka SSLC) teach only AP in Class 10.",
          },
          {
            type: "table",
            headers: ["", "AP", "GP"],
            rows: [
              ["Next term", "add $d$", "multiply by $r$"],
              ["Find it by", "$d = a_2 - a_1$", "$r = a_2 \\div a_1$"],
              ["nth term", "$a + (n-1)d$", "$ar^{n-1}$"],
              ["Three terms x, y, z", "$2y = x + z$", "$y^2 = xz$"],
              ["Example", "2, 5, 8, 11, …", "2, 6, 18, 54, …"],
            ],
          },
          {
            type: "formula",
            tex: "a_n = a\\,r^{\\,n-1}",
            caption: "Start at a and multiply by r exactly (n − 1) times.",
          },
          {
            type: "example",
            title: "Finding a term",
            problem: "Find the 8th term of the GP 3, 6, 12, 24, …",
            steps: [
              "$a = 3$, $r = \\tfrac{6}{3} = 2$, $n = 8$.",
              "$a_8 = 3 \\times 2^{7}$.",
              "$= 3 \\times 128 = 384$.",
            ],
            answer: "The 8th term is 384.",
          },
          {
            type: "example",
            title: "Which term is it?",
            problem: "Which term of the GP 2, 6, 18, 54, … is 1458?",
            steps: [
              "$a = 2$, $r = 3$. Set $2 \\times 3^{n-1} = 1458$.",
              "$3^{n-1} = 729 = 3^6$.",
              "So $n - 1 = 6$ and $n = 7$.",
            ],
            answer: "1458 is the 7th term.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is the common ratio of the GP 81, 27, 9, 3, …?",
                options: ["3", "$\\tfrac{1}{3}$", "−54", "−3"],
                answer: 1,
                explain: "$r = \\tfrac{27}{81} = \\tfrac{1}{3}$. Dividing the earlier term by the later one gives 3, which is upside down.",
              },
            ],
          },
          {
            type: "formula",
            tex: "S_n = \\frac{a(r^n - 1)}{r - 1}\\ \\ (r > 1), \\qquad S_n = \\frac{a(1 - r^n)}{1 - r}\\ \\ (r < 1), \\qquad S_n = na\\ \\ (r = 1)",
            caption: "Both fractions are the same formula; choose the form that keeps the numbers positive.",
          },
          {
            type: "example",
            title: "Sum of a GP",
            problem: "Arjun saves ₹10 on day 1 and each day saves double the amount of the day before. How much has he saved in 8 days?",
            steps: [
              "Savings form a GP with $a = 10$, $r = 2$, $n = 8$.",
              "$S_8 = \\dfrac{10(2^8 - 1)}{2 - 1}$.",
              "$= 10 \\times (256 - 1) = 10 \\times 255 = 2550$.",
            ],
            answer: "₹2550 in 8 days.",
          },
          {
            type: "mistake",
            wrong: "The nth term of a GP is $ar^n$, so the 8th term of 3, 6, 12, … is $3 \\times 2^8 = 768$.",
            right: "The nth term is $ar^{n-1}$, so the 8th term is $3 \\times 2^7 = 384$.",
            why: "The first term already has no r in it ($a = ar^0$). Moving from term 1 to term 8 needs only 7 multiplications, the same 'one less' idea as $(n-1)d$ in an AP.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each list an AP, a GP or neither?",
              groups: ["AP", "GP", "Neither"],
              items: [
                { text: "2, 5, 8, 11, …", group: 0, hint: "It adds 3 each time." },
                { text: "5, 10, 20, 40, …", group: 1, hint: "It multiplies by 2 each time." },
                { text: "1, 4, 9, 16, …", group: 2, hint: "Differences 3, 5, 7 and ratios 4, 2.25 both change." },
                { text: "100, 50, 25, 12.5, …", group: 1, hint: "It multiplies by ½ each time." },
                { text: "9, 5, 1, −3, …", group: 0, hint: "It adds −4 each time." },
                { text: "1, −3, 9, −27, …", group: 1, hint: "It multiplies by −3 each time; r can be negative." },
                { text: "2, 3, 5, 8, …", group: 2, hint: "Neither the difference nor the ratio stays the same." },
              ],
              explain: "Test the **difference** first: if it stays the same, it is an AP. Then test the **ratio**: if it stays the same, it is a GP. A negative or fractional r is allowed.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE exam tip",
            md: "To show that three numbers are in GP, show $\\dfrac{b}{a} = \\dfrac{c}{b}$ (that is, $b^2 = ac$). In sum questions, write the formula, then $a$, $r$ and $n$, before you work out powers. Leave large powers like $2^{10}$ as numbers only at the last step to avoid slips.",
          },
          {
            type: "keypoints",
            items: [
              "In a GP each term is the previous term times a fixed **common ratio** $r = a_2 \\div a_1$.",
              "nth term: $a_n = ar^{n-1}$.",
              "Sum: $S_n = \\tfrac{a(r^n - 1)}{r - 1}$ for $r > 1$ and $\\tfrac{a(1 - r^n)}{1 - r}$ for $r < 1$; $S_n = na$ if $r = 1$.",
              "a, b, c are in GP when $b^2 = ac$; in AP when $2b = a + c$.",
            ],
          },
        ],
        flashcards: [
          { front: "Geometric progression (GP)", back: "A list where each term is the term before it multiplied by the same fixed number." },
          { front: "Common ratio r", back: "$r = a_2 \\div a_1$ (any term divided by the term before it)." },
          { front: "nth term of a GP", back: "$a_n = ar^{n-1}$" },
          { front: "Sum of n terms of a GP (r > 1)", back: "$S_n = \\dfrac{a(r^n - 1)}{r - 1}$" },
          { front: "Sum of n terms of a GP (r < 1)", back: "$S_n = \\dfrac{a(1 - r^n)}{1 - r}$" },
          { front: "Test for a, b, c in GP", back: "$b^2 = ac$" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is the common ratio of the GP 5, −10, 20, −40, …?",
            options: ["2", "−2", "−15", "$-\\tfrac{1}{2}$"],
            answer: 1,
            explain: "$r = \\tfrac{-10}{5} = -2$. Ignoring the sign gives 2; −15 is the difference; $-\\tfrac{1}{2}$ divides the wrong way.",
          },
          {
            kind: "numeric",
            q: "Find the 6th term of the GP 2, 6, 18, …",
            answer: 486,
            explain: "$a_6 = 2 \\times 3^5 = 2 \\times 243 = 486$.",
          },
          {
            kind: "truefalse",
            q: "1, ½, ¼, ⅛, … is a GP with common ratio 2.",
            answer: false,
            explain: "Each term is half the one before, so $r = \\tfrac{1}{2}$, not 2.",
          },
          {
            kind: "fill",
            q: "If x, 12, 36 are in GP, then x = ___.",
            answer: ["4"],
            explain: "$12^2 = 36x$, so $x = \\tfrac{144}{36} = 4$. Check: 4, 12, 36 has $r = 3$.",
            difficulty: 2,
            hint: "For three terms in GP, the middle one squared equals the product of the other two.",
          },
          {
            kind: "numeric",
            q: "Find the sum of the first 6 terms of the GP 1, 3, 9, 27, …",
            answer: 364,
            explain: "$S_6 = \\tfrac{1(3^6 - 1)}{3 - 1} = \\tfrac{729 - 1}{2} = 364$.",
            difficulty: 2,
            hint: "Use $\\tfrac{a(r^n - 1)}{r - 1}$ with $a = 1$, $r = 3$, $n = 6$.",
          },
          {
            kind: "multi",
            q: "Which of these lists are GPs?",
            options: ["3, 6, 12, 24, …", "2, 4, 6, 8, …", "64, 16, 4, 1, …", "1, 2, 4, 7, …"],
            answers: [0, 2],
            explain: "3, 6, 12, 24 has $r = 2$ and 64, 16, 4, 1 has $r = \\tfrac{1}{4}$. 2, 4, 6, 8 is an AP; 1, 2, 4, 7 is neither.",
          },
          {
            kind: "numeric",
            q: "Which term of the GP 5, 10, 20, 40, … is 640?",
            answer: 8,
            explain: "$5 \\times 2^{n-1} = 640$ gives $2^{n-1} = 128 = 2^7$, so $n = 8$.",
            difficulty: 2,
            hint: "Divide 640 by the first term and write the result as a power of 2.",
          },
          {
            kind: "order",
            q: "Put the steps for finding the sum of a GP in order.",
            items: [
              "Find a and r from the first two terms",
              "Note the number of terms n",
              "Choose the formula for r > 1 or r < 1",
              "Substitute and work out the power",
              "Simplify to get the sum",
            ],
            explain: "Know a, r and n, pick the right form of the formula, then calculate.",
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "Arithmetic Progressions": "arithmetic-geometric-progressions-10",
  "Arithmetic and Geometric Progression": "arithmetic-geometric-progressions-10",
};
