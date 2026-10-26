import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

const r = String.raw;

/* ================================================================== */
/* CBSE Computer Science (083) Class 11 · also Karnataka I PUC CS        */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* Flow of Control                                                      */
/* ------------------------------------------------------------------ */
const flowOfControl: Topic = {
  slug: "c11-cs-flow-of-control",
  title: "Flow of Control",
  icon: "🔀",
  description: "Sequence, selection with if, if–else and if–elif–else, indentation, repetition with for, range() and while, break and continue, and nested loops.",
  lessons: [
    {
      slug: "selection-if-elif",
      title: "Selection: if, if–else and if–elif–else",
      summary: "How a program decides what to run next: conditions, indentation, if, if–else, the if–elif–else ladder and nested if.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🚦",
          caption: "A traffic light: if it is red you stop, else if it is amber you slow down, else you go. Programs make the same kind of choices.",
        },
        {
          type: "text",
          md: "The order in which the statements of a program are run is called the **flow of control**. Python has three kinds of flow:\n\n1. **Sequence**: statements run one after another, top to bottom.\n2. **Selection** (decision making): a condition is tested and one block or another is run.\n3. **Repetition** (iteration, looping): a block is run again and again.\n\nThis lesson is about selection. A **condition** is an expression that gives `True` or `False`, usually built with the **relational operators** `==`, `!=`, `<`, `>`, `<=`, `>=` and joined with the **logical operators** `and`, `or`, `not`.",
        },
        {
          type: "text",
          md: "**Indentation** is the space at the start of a line. Many languages use braces to group statements; Python uses indentation instead. All statements of one block must be indented by the **same amount** (4 spaces is the usual choice). The line before a block (such as `if marks >= 33:`) ends with a **colon**. Wrong indentation gives an `IndentationError` or, worse, a program that runs but does the wrong thing.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "if–else: exactly one of the two blocks runs. Change n and run again.",
          code: r`n = 17
if n % 2 == 0:
    print(n, "is even")
else:
    print(n, "is odd")
print("Done")      # not indented: runs in both cases`,
        },
        {
          type: "text",
          md: "When there are more than two choices, use the **if–elif–else ladder**. Python tests the conditions **from the top**. The block under the **first** true condition runs, and the rest of the ladder is skipped. The `else` part (optional) runs only if every condition was false.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints: Marks: 78 Grade: A2",
          code: r`marks = 78
if marks >= 90:
    grade = "A1"
elif marks >= 75:
    grade = "A2"
elif marks >= 60:
    grade = "B"
elif marks >= 33:
    grade = "C"
else:
    grade = "Fail"
print("Marks:", marks, "Grade:", grade)`,
        },
        {
          type: "mistake",
          wrong: "In a grade ladder, I can test the conditions in any order, e.g. `if marks >= 33:` first and then `elif marks >= 90:`.",
          right: "Test the strictest condition first (`>= 90`, then `>= 75`, …). Only the first true branch runs, so a loose test at the top swallows every case below it.",
          why: "With `>= 33` at the top, 95 marks also satisfies it, gets grade C, and the `>= 90` line is never reached. Each condition looks correct on its own, which is why the bug is easy to miss.",
        },
        {
          type: "example",
          title: "Largest of three numbers",
          problem: "Trace the program for `a, b, c = 12, 45, 30` and give the output.\n\n`if a >= b and a >= c:` print(a) · `elif b >= c:` print(b) · `else:` print(c)",
          steps: [
            "`a, b, c = 12, 45, 30` assigns 12 to a, 45 to b and 30 to c (multiple assignment).",
            "First test: `12 >= 45` is False, so `False and …` is False. Skip the first block.",
            "Second test: `b >= c` is `45 >= 30`, which is True. Print b.",
            "The `else` block is skipped because a branch has already run.",
          ],
          answer: "Output: `45`",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "With `x = 7`, what is printed?\n\n`if x > 5:` print(\"big\") — then a separate `if x > 3:` print(\"medium\") `else:` print(\"small\")",
              options: ["big", "big and medium", "medium", "big and small"],
              answer: 1,
              explain: "These are two separate `if` statements, not one ladder. 7 > 5 prints big; then 7 > 3 prints medium.",
            },
          ],
        },
        {
          type: "heading",
          text: "Nested if",
        },
        {
          type: "text",
          md: "An `if` written inside another `if` (or `else`) block is a **nested if**. The inner test is made only when the outer test has sent control into that block. The leap-year rule is a classic: a year is a leap year if it is divisible by 4, **except** century years, which must be divisible by 400.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints: 1900 is not a leap year. Try 2000 and 2024.",
          code: r`year = 1900
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print(year, "is a leap year")
        else:
            print(year, "is not a leap year")
    else:
        print(year, "is a leap year")
else:
    print(year, "is not a leap year")`,
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does this print when marks = 95?",
            emoji: "🧐",
            options: ["Grade C", "Grade A1", "Both Grade C and Grade A1"],
            answer: 0,
            trap: 1,
            explain: "The code is `if marks >= 33:` print(\"Grade C\") followed by `elif marks >= 90:` print(\"Grade A1\"). 95 >= 33 is true, so Grade C prints and the elif is never tested. Order matters in a ladder.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In \"find the output\" questions, first mark which lines belong to which block by their indentation. In \"rewrite after removing errors\" questions, look for a missing colon after `if`/`elif`/`else`, `=` used instead of `==`, `else if` instead of `elif`, and uneven indentation. Underline each correction.",
        },
        {
          type: "keypoints",
          items: [
            "Flow of control is sequence, selection or repetition.",
            "Python groups a block by equal indentation; the header line ends with a colon.",
            "In an if–elif–else ladder only the first true branch runs; else runs when all are false.",
            "Put the strictest condition first in a range ladder.",
            "A nested if is tested only when control reaches the outer block.",
          ],
        },
      ],
      flashcards: [
        { front: "Three kinds of flow of control", back: "Sequence, selection (decision) and repetition (iteration)." },
        { front: "How does Python mark a block?", back: "By indentation: every statement of the block starts with the same amount of space. The header line ends with a colon." },
        { front: "if–elif–else: how many branches run?", back: "At most one: the first branch whose condition is True, or else if none is True." },
        { front: "Is `else` compulsory with `if`?", back: "No. `if` can stand alone; `else` and `elif` are optional." },
        { front: "`=` vs `==`", back: "`=` assigns a value; `==` compares two values and gives True or False." },
        { front: "Nested if", back: "An if statement placed inside the block of another if or else." },
        { front: "Leap-year rule", back: "Divisible by 4 and not by 100, or divisible by 400." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which keyword does Python use for \"else if\"?",
          options: ["`else if`", "`elif`", "`elseif`", "`elsif`"],
          answer: 1,
          explain: "Python's keyword is `elif`. Writing `else if` on one line is a syntax error.",
        },
        {
          kind: "truefalse",
          q: "In Python, the statements inside an if block must all be indented by the same amount.",
          answer: true,
          explain: "Indentation defines the block, so it must be consistent; otherwise Python raises IndentationError.",
        },
        {
          kind: "mcq",
          q: "With `n = 0`, what does this print? `if n:` print(\"yes\") `else:` print(\"no\")",
          options: ["yes", "no", "0", "Error"],
          answer: 1,
          explain: "The number 0 counts as False in a condition (any non-zero number counts as True), so the else block runs.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Every `if`, `elif` and `else` header line must end with a ___.",
          answer: ["colon", ":"],
          explain: "The colon tells Python an indented block follows.",
        },
        {
          kind: "mcq",
          q: "`a = 10; b = 20`. What is printed? `if a > b:` print(\"P\") `elif a == 10:` print(\"Q\") `elif b == 20:` print(\"R\") `else:` print(\"S\")",
          options: ["Q", "Q and R", "R", "S"],
          answer: 0,
          explain: "10 > 20 is False; a == 10 is True, so Q prints and the ladder ends. R is never tested.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these years are leap years?",
          options: ["1900", "2000", "2024", "2100"],
          answers: [1, 2],
          explain: "2000 is divisible by 400; 2024 by 4 and not by 100. 1900 and 2100 are century years not divisible by 400.",
        },
        {
          kind: "mcq",
          q: "Which error is raised by `if x > 5` (no colon)?",
          options: ["SyntaxError", "NameError", "TypeError", "ValueError"],
          answer: 0,
          explain: "A missing colon breaks the grammar of the statement, so Python reports a SyntaxError before running anything.",
        },
      ],
    },
    {
      slug: "loops-for-while",
      title: "Repetition: for, range(), while, break and continue",
      summary: "Looping with for and range(), while loops, break and continue, nested loops, and the standard digit, factorial, prime and pattern programs.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🔁",
          caption: "A watchman checks every floor of a building, one after another, until the top. A loop repeats a job in the same way.",
        },
        {
          type: "text",
          md: "**Repetition** runs a block many times. Python has two loops:\n\n- the **for loop**, which takes each item of a **sequence** (a range of numbers, a string, a list…) one at a time, and\n- the **while loop**, which keeps repeating **as long as a condition stays True**.\n\nUse `for` when you know how many times to repeat (or have a sequence to walk through); use `while` when you repeat until something happens.",
        },
        {
          type: "table",
          headers: ["Call", "Numbers produced", "Rule"],
          rows: [
            ["`range(4)`", "0, 1, 2, 3", "start 0, stop before 4"],
            ["`range(2, 11, 3)`", "2, 5, 8", "start 2, step 3, stop before 11"],
            ["`range(5, 0, -2)`", "5, 3, 1", "a negative step counts down"],
            ["`range(10, 3, -3)`", "10, 7, 4", "stops before 3"],
            ["`range(3, 3)`", "nothing", "start equals stop: empty"],
          ],
        },
        {
          type: "text",
          md: "`range(start, stop, step)` gives integers from `start` up to **but not including** `stop`, jumping by `step`. `start` defaults to 0 and `step` to 1; `step` cannot be 0. All three must be integers.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints 5 lines and then the total. end=\" \" would keep output on one line.",
          code: r`total = 0
for i in range(1, 6):
    total = total + i
    print("i =", i, " total =", total)
print("Sum of 1 to 5 is", total)`,
        },
        {
          type: "example",
          title: "Sum of digits with while",
          problem: "Trace the loop for `n = 4072` and give the output.\n\n`s = 0` · `while n > 0:` `s += n % 10` · `n //= 10` · then `print(s)`",
          steps: [
            "`n % 10` gives the last digit and `n // 10` drops it.",
            "Pass 1: digit 2, s = 2, n = 407.",
            "Pass 2: digit 7, s = 9, n = 40. Pass 3: digit 0, s = 9, n = 4.",
            "Pass 4: digit 4, s = 13, n = 0. Now `n > 0` is False, so the loop stops.",
          ],
          answer: "Output: `13` (4 + 0 + 7 + 2). The loop ran 4 times, once per digit.",
        },
        {
          type: "mistake",
          wrong: "`for i in range(1, 10):` runs for i = 1 to 10.",
          right: "It runs for i = 1 to **9**. The stop value is never included; for 1 to 10 write `range(1, 11)`.",
          why: "In everyday speech \"from 1 to 10\" includes 10. Python's range stops one step before `stop`, so it gives exactly stop − start numbers when the step is 1.",
        },
        {
          type: "heading",
          text: "break and continue",
        },
        {
          type: "text",
          md: "**break** ends the loop at once; control jumps to the first statement after the loop. **continue** skips the rest of the **current** pass and goes straight to the next pass. In a `while` loop, make sure the variable in the condition still changes, or the loop runs for ever (an **infinite loop**).",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints: 1 2 4 5 7 (3 and 6 skipped by continue; the loop ends at 8 by break)",
          code: r`for i in range(1, 10):
    if i % 3 == 0:
        continue
    if i == 8:
        break
    print(i, end=" ")
print()`,
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "How many times does `for i in range(10, 0, -3):` run its body?",
              options: ["3", "4", "10", "It does not run"],
              answer: 1,
              explain: "i takes 10, 7, 4, 1 — four values. The next value, −2, is past the stop 0.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "A loop inside another loop is a **nested loop**. For each single pass of the outer loop, the inner loop runs **completely**. Nested loops print patterns. Below, a **flag** variable (`is_prime`) records whether a divisor was found, which is how NCERT checks for a prime.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints the number pattern 1 / 12 / 123 / 1234, then: 29 is prime",
          code: r`for i in range(1, 5):          # outer loop: rows
    for j in range(1, i + 1):  # inner loop: numbers in the row
        print(j, end="")
    print()                    # new line after each row

n = 29
is_prime = True
for d in range(2, n):
    if n % d == 0:
        is_prime = False
        break
if is_prime and n > 1:
    print(n, "is prime")
else:
    print(n, "is not prime")`,
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each range() call to what it produces.",
            pairs: [
              ["range(4)", "0 1 2 3"],
              ["range(1, 4)", "1 2 3"],
              ["range(1, 8, 3)", "1 4 7"],
              ["range(4, 0, -1)", "4 3 2 1"],
              ["range(4, 1)", "nothing (empty)"],
            ],
            explain: "range() never includes the stop value. With a positive step, if start is not below stop, nothing is produced; counting down needs a negative step.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board and practical tip",
          md: "For trace questions, draw a table with one column per variable and one row per pass; it avoids losing count. Learn by heart: sum of digits, reverse a number, factorial, prime test, Fibonacci series and simple patterns. In the practical exam, show your output for at least two test values.",
        },
        {
          type: "keypoints",
          items: [
            "`for` walks through a sequence; `while` repeats while a condition is True.",
            "`range(start, stop, step)` excludes stop; step may be negative but never 0.",
            "`break` leaves the loop; `continue` skips to the next pass.",
            "In a nested loop the inner loop finishes fully for every outer pass.",
            "`n % 10` gives the last digit and `n // 10` removes it.",
          ],
        },
      ],
      flashcards: [
        { front: "for vs while", back: "for: walks through a sequence, often a known count. while: repeats as long as a condition is True." },
        { front: "range(2, 11, 3)", back: "2, 5, 8 (stop 11 is excluded)." },
        { front: "Default start and step of range()", back: "start = 0, step = 1." },
        { front: "break", back: "Ends the loop immediately; control goes to the statement after the loop." },
        { front: "continue", back: "Skips the rest of this pass and starts the next pass of the loop." },
        { front: "Infinite loop", back: "A loop whose condition never becomes False, e.g. a while loop whose variable never changes." },
        { front: "Last digit of n / remove last digit", back: "`n % 10` / `n // 10`" },
        { front: "Nested loop count", back: "Outer runs m times and inner runs n times per outer pass: the inner body runs m × n times." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `for i in range(3): print(i, end=\" \")` print?",
          options: ["1 2 3", "0 1 2", "0 1 2 3", "3"],
          answer: 1,
          explain: "range(3) gives 0, 1, 2. The stop value 3 is not included.",
        },
        {
          kind: "numeric",
          q: "How many times is `*` printed? `for i in range(3):` / (indented) `for j in range(4):` / (indented twice) `print(\"*\", end=\"\")`",
          answer: 12,
          explain: "The inner loop prints 4 stars for each of the 3 outer passes: 3 × 4 = 12.",
        },
        {
          kind: "mcq",
          q: "What is the output? `i = 1` / `while i < 10:` / `    i = i * 2` / `print(i)`",
          options: ["8", "16", "10", "2"],
          answer: 1,
          explain: "i goes 1 → 2 → 4 → 8 → 16. At 16 the condition fails; the print after the loop shows 16.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`continue` ends the loop completely.",
          answer: false,
          explain: "`break` ends the loop. `continue` only skips the rest of the current pass.",
        },
        {
          kind: "fill",
          q: "To loop over 1, 2, …, 10 write `for i in range(1, ___):`",
          answer: ["11"],
          explain: "The stop value is excluded, so it must be one more than the last number wanted.",
        },
        {
          kind: "mcq",
          q: "What does this print? `for ch in \"loop\":` / `    if ch == \"o\": continue` / `    print(ch, end=\"\")`",
          options: ["loop", "lp", "l", "oo"],
          answer: 1,
          explain: "Both o's are skipped by continue; only l and p are printed.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put the steps of a factorial program in order.",
          items: ["Set n = 5 and fact = 1", "for i in range(1, n + 1):", "fact = fact * i (inside the loop)", "print(fact) after the loop"],
          explain: "fact must start at 1 (not 0), multiply by every i from 1 to n, and be printed after the loop ends. 5! = 120.",
        },
        {
          kind: "mcq",
          q: "Which call gives the numbers 10, 8, 6?",
          options: ["`range(10, 6, -2)`", "`range(10, 5, -2)`", "`range(6, 10, 2)`", "`range(10, 6, 2)`"],
          answer: 1,
          explain: "range(10, 5, −2) gives 10, 8, 6 and stops before 5. range(10, 6, −2) gives only 10, 8.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Flow of Control",
      summary: "Mixed board-style questions: short answers, output tracing, error correction and short programs on selection and loops.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "This lesson pulls the chapter together the way a board paper does: 1-mark facts, 2-mark output and error questions, and 3-mark programs. Try each before reading the answer.",
        },
        {
          type: "example",
          title: "Output question (2 marks)",
          problem: "Find the output:\n\n`x = 3` · `while x <= 15:` · `if x % 2 == 0: print(x, end=\"#\")` · `x += 4`",
          steps: [
            "x takes the values 3, 7, 11, 15 (each +4); at 19 the loop stops.",
            "3, 7, 11 and 15 are all odd, so the if is never True.",
            "Nothing is printed.",
          ],
          answer: "No output. (A common trap: students print 3#7#11#15# without checking the condition.)",
        },
        {
          type: "example",
          title: "Error correction (2 marks)",
          problem: "Rewrite after removing the errors:\n\n`n = int(input(\"Number\"))` · `if n%2=0` · `print(\"Even\")` · `else if:` · `print(\"Odd\")`",
          steps: [
            "`if n%2=0` uses assignment and has no colon: write `if n % 2 == 0:`.",
            "`print(\"Even\")` must be indented under the if.",
            "`else if:` is wrong: write `else:` (no condition is needed here).",
            "`print(\"Odd\")` must be indented under else.",
          ],
          answer: "`if n % 2 == 0:` / indented `print(\"Even\")` / `else:` / indented `print(\"Odd\")`",
        },
        {
          type: "text",
          md: "**Program to write (3 marks).** Reverse a number and check whether it is a **palindrome** (reads the same both ways, like 1221). The method: repeatedly take the last digit with `% 10`, attach it to `rev` with `rev * 10 + digit`, and cut it off with `// 10`. Keep a copy of the original number because the loop destroys `n`.",
        },
        {
          type: "code",
          lang: "python",
          caption: "Run in IDLE (it reads input). For 1221 it prints: Reverse: 1221 then Palindrome",
          code: r`n = int(input("Enter a number: "))
original = n
rev = 0
while n > 0:
    digit = n % 10
    rev = rev * 10 + digit
    n = n // 10
print("Reverse:", rev)
if rev == original:
    print("Palindrome")
else:
    print("Not a palindrome")`,
        },
        {
          type: "mistake",
          wrong: "After the while loop I can compare `rev == n` to test the palindrome.",
          right: "Compare with a saved copy (`original`). By the time the loop ends, `n` has become 0.",
          why: "`n // 10` is applied until n is 0, so `rev == n` is False for every positive number. Saving the input first keeps the value you need.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "First 8 Fibonacci terms. Prints: 0 1 1 2 3 5 8 13",
          code: r`a, b = 0, 1
for i in range(8):
    print(a, end=" ")
    a, b = b, a + b
print()`,
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is the output? `s = 0` / `for i in range(1, 10, 2): s += i` / `print(s)`",
              options: ["25", "45", "20", "16"],
              answer: 0,
              explain: "i = 1, 3, 5, 7, 9; their sum is 25.",
            },
            {
              kind: "numeric",
              q: "What does `print(rev)` show after the reverse-number loop runs on n = 1200?",
              answer: 21,
              explain: "Digits taken: 0, 0, 2, 1 → rev = 0, 0, 2, 21. Leading zeros vanish in an integer.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the lines of a program printing 5 4 3 2 1.",
            items: ["i = 5", "while i >= 1:", "    print(i, end=\" \")", "    i = i - 1"],
            explain: "Initialise, test, do the work, then update. If the update line is missing, i stays 5 and the loop never ends.",
          },
        },
        {
          type: "table",
          headers: ["Question type", "What to show for full marks"],
          rows: [
            ["Find the output", "The exact output, including spacing and line breaks (`end=` matters)."],
            ["Remove errors", "The full corrected code, each correction underlined."],
            ["Write a program", "Input, processing, output; meaningful names; correct indentation."],
            ["Differentiate (break/continue, for/while)", "Two points of difference plus a tiny example each."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A short program question is marked for logic, not only syntax. Even if you forget one detail, write the loop and condition clearly with comments. When asked to \"convert a for loop to while\", keep the same start value, the same test (stop) and the same step.",
        },
        {
          type: "keypoints",
          items: [
            "Trace loops pass by pass; check the condition on every pass.",
            "Common errors: missing colon, `=` for `==`, `else if`, bad indentation.",
            "Reverse number: `rev = rev * 10 + n % 10`, then `n //= 10`.",
            "Keep a copy of input that a loop will change.",
          ],
        },
      ],
      flashcards: [
        { front: "Reverse a number: key line", back: "`rev = rev * 10 + n % 10` then `n = n // 10`" },
        { front: "Palindrome number", back: "A number equal to its reverse, e.g. 1221 or 34543." },
        { front: "Fibonacci update in one line", back: "`a, b = b, a + b`" },
        { front: "Factorial: starting value", back: "`fact = 1` (starting at 0 would make every product 0)." },
        { front: "Converting for to while", back: "Initialise before the loop, test in the while header, update at the end of the body." },
        { front: "Armstrong number (3 digits)", back: "Sum of cubes of digits equals the number, e.g. 153 = 1 + 125 + 27." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is printed? `for i in range(5, 0, -1):` / `    if i == 2: break` / `    print(i, end=\"\")`",
          options: ["543", "5432", "54321", "21"],
          answer: 0,
          explain: "5, 4 and 3 are printed; when i is 2 the loop breaks before printing.",
        },
        {
          kind: "numeric",
          q: "What is the output? `p = 1` / `for i in range(1, 5): p = p * i` / `print(p)`",
          answer: 24,
          explain: "1 × 1 × 2 × 3 × 4 = 24 (4 factorial).",
        },
        {
          kind: "truefalse",
          q: "153 is an Armstrong number.",
          answer: true,
          explain: "1³ + 5³ + 3³ = 1 + 125 + 27 = 153.",
        },
        {
          kind: "mcq",
          q: "Which while loop is equivalent to `for k in range(2, 9, 3): print(k)`?",
          options: [
            "`k = 2` / `while k < 9: print(k); k += 3`",
            "`k = 2` / `while k <= 11: print(k); k += 3`",
            "`k = 0` / `while k < 9: print(k); k += 3`",
            "`k = 2` / `while k < 9: k += 3; print(k)`",
          ],
          answer: 0,
          explain: "Same start (2), same test (< 9) and same step (3), printing before updating: 2, 5, 8. The `<= 11` version also prints 11; the last option prints 5, 8, 11.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is the output? `c = 0` / `for i in range(1, 21):` / `    if i % 4 == 0 or i % 5 == 0: c += 1` / `print(c)`",
          options: ["8", "9", "5", "4"],
          answer: 0,
          explain: "Multiples of 4: 4, 8, 12, 16, 20 (5). Multiples of 5: 5, 10, 15, 20 (4). 20 is counted once: 5 + 4 − 1 = 8.",
          difficulty: 3,
          hint: "Watch for a number that is a multiple of both.",
        },
        {
          kind: "fill",
          q: "A loop that never stops because its condition never becomes False is called an ___ loop.",
          answer: ["infinite"],
          explain: "For example `while True:` with no break, or a while loop that never updates its variable.",
        },
        {
          kind: "multi",
          q: "Which of these are errors in `while i < 5` / `print(i)` / `i = i + 1` (with nothing indented)?",
          options: ["Missing colon after the condition", "The body is not indented", "`i` must be declared with a type", "`while` must be written `While`"],
          answers: [0, 1],
          explain: "Add `:` and indent the body. Python needs no type declarations, and keywords are lowercase.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [flowOfControl];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Flow of Control": "c11-cs-flow-of-control",
};
