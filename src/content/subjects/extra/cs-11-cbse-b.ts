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

/* ------------------------------------------------------------------ */
/* Strings                                                              */
/* ------------------------------------------------------------------ */
const strings: Topic = {
  slug: "c11-cs-strings",
  title: "Strings",
  icon: "🔤",
  description: "Strings as sequences of characters: indexing, slicing, immutability, operators, traversal, built-in string methods and the standard string programs.",
  lessons: [
    {
      slug: "indexing-slicing",
      title: "Strings: Indexing, Slicing and Operations",
      summary: "What a string is, positive and negative indices, slicing with start, stop and step, immutability, concatenation, repetition, membership and traversal.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🚃",
          caption: "A train of coaches, each with a number painted on it. A string is a train of characters, and each character has a position number.",
        },
        {
          type: "text",
          md: "A **string** is a **sequence of characters** (letters, digits, spaces, symbols) written inside single quotes `'…'`, double quotes `\"…\"` or triple quotes `'''…'''` / `\"\"\"…\"\"\"`. Triple quotes allow a string to run over several lines. A string with no characters, `\"\"`, is the **empty string**.\n\nEach character has an **index** (position number). Counting from the left starts at **0**; counting from the right starts at **−1**. For a string of length n, valid indices run from 0 to n − 1 and from −1 to −n. Any other index gives an `IndexError`.",
        },
        {
          type: "table",
          headers: ["Character", "B", "e", "n", "g", "a", "l", "u", "r", "u"],
          rows: [
            ["Positive index", "0", "1", "2", "3", "4", "5", "6", "7", "8"],
            ["Negative index", "−9", "−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1"],
          ],
        },
        {
          type: "text",
          md: "A **slice** `s[start:stop:step]` gives a new string from index `start` up to **but not including** `stop`. Leave out `start` to begin at the start, leave out `stop` to go to the end. A `step` of 2 takes every second character; a step of −1 walks backwards, so `s[::-1]` is the reversed string. A slice never gives an IndexError: an out-of-range stop is simply cut to the end, and a slice that selects nothing gives `\"\"`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Indexing and slicing. Compare each line of output with the table above.",
          code: r`s = "Bengaluru"
print(s[0], s[4], s[-1], s[-3], len(s))   # B a u u 9
print(s[2:6])     # ngal
print(s[:4])      # Beng
print(s[5:])      # luru
print(s[::2])     # Bnauu
print(s[::-1])    # urulagneB
print(s[-4:-1])   # lur
print(s[6:2])     # empty string: start is past stop
print(s[1:100])   # engaluru (stop is cut to the end)`,
        },
        {
          type: "example",
          title: "Slicing by hand",
          problem: "For `city = \"Bengaluru\"`, find `city[1:8:3]` and `city[-2:-7:-2]`.",
          steps: [
            "`city[1:8:3]`: indices 1, 4, 7 (stop 8 excluded) → e, a, r.",
            "`city[-2:-7:-2]`: start at −2 and step back by 2: indices −2, −4, −6 (stop −7 excluded).",
            "Index −2 is r, −4 is l, −6 is g.",
          ],
          answer: "`city[1:8:3]` is `\"ear\"` and `city[-2:-7:-2]` is `\"rlg\"`.",
        },
        {
          type: "heading",
          text: "Strings are immutable",
        },
        {
          type: "text",
          md: "Strings are **immutable**: once made, their characters cannot be changed. `s[0] = \"b\"` raises `TypeError: 'str' object does not support item assignment`. To \"change\" a string you build a **new** one, for example `s = \"b\" + s[1:]`, and point the name at it.",
        },
        {
          type: "mistake",
          wrong: "`name = \"ravi\"` then `name[0] = \"R\"` changes the name to Ravi.",
          right: "It raises TypeError. Make a new string instead: `name = \"R\" + name[1:]` or `name = name.capitalize()`.",
          why: "Lists allow item assignment, so learners expect the same of strings. Strings are immutable; every string method returns a new string and leaves the original as it was.",
        },
        {
          type: "table",
          headers: ["Operator", "Meaning", "Example → result"],
          rows: [
            ["`+`", "**Concatenation** (join two strings)", "`\"Py\" + \"thon\"` → `\"Python\"`"],
            ["`*`", "**Repetition** (string × integer)", "`\"ha\" * 3` → `\"hahaha\"`"],
            ["`in`", "**Membership**: is it a substring?", "`\"ga\" in \"Bengaluru\"` → True"],
            ["`not in`", "The opposite of in", "`\"G\" not in \"Bengaluru\"` → True (case matters)"],
            ["`==`, `<`, `>`", "Comparison, character by character by Unicode value", "`\"apple\" < \"banana\"` → True"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is `\"5\" + \"3\"`?",
              options: ["8", "\"53\"", "\"8\"", "Error"],
              answer: 1,
              explain: "Both are strings, so + joins them. `\"5\" + 3` (string + int) would be a TypeError.",
            },
          ],
        },
        {
          type: "text",
          md: "**Traversing** a string means visiting every character one by one. Either loop over the characters directly (`for ch in s:`), or loop over the indices (`for i in range(len(s)):`) when you also need the position.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Two ways to traverse. First line: N-A-M-A-S-T-E-",
          code: r`t = "NAMASTE"
for ch in t:
    print(ch, end="-")
print()
for i in range(len(t)):
    if t[i] == "A":
        print("A found at index", i)`,
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "s = \"PYTHON\". Match each expression to its value.",
            pairs: [
              ["s[1]", "Y"],
              ["s[-2]", "O"],
              ["s[1:4]", "YTH"],
              ["s[::-2]", "NHY"],
              ["s[4:]", "ON"],
            ],
            explain: "Positive indices start at 0 from the left, negative at −1 from the right; the stop index is always left out. s[::-2] takes N, H, Y from the right.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For slicing questions, write the indices under the string first (both rows if negatives appear). State `\"\"` (empty string) clearly when a slice selects nothing; examiners expect it. Remember `len()` counts spaces too.",
        },
        {
          type: "keypoints",
          items: [
            "A string is an immutable sequence of characters.",
            "Indices go 0 to n − 1 from the left and −1 to −n from the right.",
            "`s[start:stop:step]` excludes stop; `s[::-1]` reverses.",
            "Out-of-range index → IndexError; out-of-range slice → no error.",
            "`+` joins, `*` repeats, `in` tests for a substring.",
          ],
        },
      ],
      flashcards: [
        { front: "String", back: "An immutable sequence of characters enclosed in single, double or triple quotes." },
        { front: "Index of the last character", back: "`len(s) - 1`, or simply `-1`." },
        { front: "`s[::-1]`", back: "The string reversed." },
        { front: "Immutable", back: "Cannot be changed in place. `s[0] = 'x'` gives TypeError for a string." },
        { front: "`\"ab\" * 3`", back: "`\"ababab\"` (repetition)" },
        { front: "`s[10]` on a 5-character string", back: "IndexError: string index out of range." },
        { front: "`s[2:100]` on a 5-character string", back: "No error: characters from index 2 to the end." },
        { front: "Two ways to traverse", back: "`for ch in s:` (characters) or `for i in range(len(s)):` (indices)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`s = \"Computer\"`. What is `s[-3:]`?",
          options: ["\"ter\"", "\"Com\"", "\"te\"", "\"ret\""],
          answer: 0,
          explain: "From index −3 (t) to the end: \"ter\".",
        },
        {
          kind: "mcq",
          q: "`s = \"Computer\"`. What is `s[1:6:2]`?",
          options: ["\"opt\"", "\"oput\"", "\"mue\"", "\"out\""],
          answer: 0,
          explain: "Indices 1, 3, 5 → o, p, t.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`len(\"Hi there\")` is 7.",
          answer: false,
          explain: "The space is a character too: H, i, space, t, h, e, r, e = 8.",
        },
        {
          kind: "mcq",
          q: "What happens on `s = \"abc\"; s[1] = \"x\"`?",
          options: ["s becomes \"axc\"", "TypeError", "IndexError", "s becomes \"x\""],
          answer: 1,
          explain: "Strings are immutable, so item assignment is a TypeError.",
        },
        {
          kind: "fill",
          q: "`\"In\" ___ \"India\"` gives True. (Fill the operator.)",
          answer: ["in"],
          explain: "The membership operator `in` checks for a substring.",
        },
        {
          kind: "mcq",
          q: "Which expression gives `\"-----\"`?",
          options: ["`\"-\" + 5`", "`\"-\" * 5`", "`5 + \"-\"`", "`\"-\" ** 5`"],
          answer: 1,
          explain: "String × integer repeats the string. Adding a string and an integer is a TypeError.",
        },
        {
          kind: "mcq",
          q: "Which is True?",
          options: ["`\"Zebra\" < \"apple\"`", "`\"apple\" > \"banana\"`", "`\"cat\" == \"Cat\"`", "`\"10\" > \"9\"`"],
          answer: 0,
          explain: "Strings compare by character codes: \"Z\" is 90 and \"a\" is 97, so \"Zebra\" < \"apple\". \"10\" > \"9\" is False because \"1\" < \"9\".",
          difficulty: 3,
          hint: "All uppercase letters have smaller codes than lowercase ones.",
        },
      ],
    },
    {
      slug: "string-methods",
      title: "String Methods and String Programs",
      summary: "Built-in functions and methods: len, upper, lower, title, capitalize, count, find, index, startswith, endswith, the is… tests, strip, replace, split, join and partition, with standard programs.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🧰",
          caption: "A toolbox where every tool does one job on a string: change case, search, test, trim, split and join.",
        },
        {
          type: "text",
          md: "A **method** is a function attached to a value and called with a dot: `s.upper()`. `len(s)` is a **built-in function**, not a method. Because strings are immutable, every method that \"changes\" a string **returns a new string**; the original is untouched. To keep the result, assign it: `s = s.upper()`.",
        },
        {
          type: "table",
          headers: ["Method", "What it returns", "Example with w = \"data science is fun\""],
          rows: [
            ["`upper()` / `lower()`", "All capitals / all small letters", "`w.upper()` → DATA SCIENCE IS FUN"],
            ["`title()`", "First letter of each word capital", "Data Science Is Fun"],
            ["`capitalize()`", "First letter of the string capital, rest small", "Data science is fun"],
            ["`count(sub)`", "Number of non-overlapping occurrences", "`w.count(\"a\")` → 2"],
            ["`find(sub)`", "Lowest index of sub, or −1 if absent", "`w.find(\"sci\")` → 5; `w.find(\"z\")` → −1"],
            ["`index(sub)`", "Like find, but ValueError if absent", "`w.index(\"is\")` → 13"],
            ["`startswith(x)` / `endswith(x)`", "True / False", "`\"lab.py\".endswith(\".py\")` → True"],
            ["`replace(old, new)`", "Every old replaced by new", "`w.replace(\"fun\", \"great\")`"],
          ],
        },
        {
          type: "table",
          headers: ["Method", "Gives True when…", "Example"],
          rows: [
            ["`isalnum()`", "all characters are letters or digits (and the string is not empty)", "`\"abc123\".isalnum()` → True"],
            ["`isalpha()` / `isdigit()`", "all letters / all digits", "`\"123\".isdigit()` → True"],
            ["`islower()` / `isupper()`", "all cased letters are small / capital", "`\"HELLO\".isupper()` → True"],
            ["`isspace()`", "only whitespace", "`\"   \".isspace()` → True"],
            ["`istitle()`", "the string is in title case", "`\"Hello World\".istitle()` → True"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Trimming, splitting and joining. The | marks show where each string ends.",
          code: r`st = "  Quest Academy, Mysuru  "
print(st.strip() + "|")      # spaces removed from both ends
print(st.lstrip() + "|")     # left end only
print(st.rstrip() + "|")     # right end only

w = "data science is fun"
print(w.split())                    # ['data', 'science', 'is', 'fun']
print("a,b,,c".split(","))          # ['a', 'b', '', 'c']
print("-".join(["2024", "08", "15"]))   # 2024-08-15
print(w.partition(" is "))          # ('data science', ' is ', 'fun')`,
        },
        {
          type: "text",
          md: "`split(sep)` breaks a string into a **list** of parts at each `sep`; with no argument it splits on any run of whitespace. `sep.join(list)` does the reverse: it glues the strings of a list with `sep` between them. `partition(sep)` splits at the **first** `sep` only and always returns a **tuple of three**: the part before, the separator, and the part after.",
        },
        {
          type: "mistake",
          wrong: "After `s = \"hello\"` and `s.upper()`, printing s shows HELLO.",
          right: "s is still \"hello\". Write `s = s.upper()` (or `print(s.upper())`) to use the new string.",
          why: "`upper()` returns a new string because the original cannot be changed. If the result is not stored, it is lost at once.",
        },
        {
          type: "example",
          title: "Count vowels",
          problem: "Write a program to count the vowels in `line = \"Karnataka is in India\"`.",
          steps: [
            "Start a counter `v = 0`.",
            "Traverse: `for ch in line:`.",
            "`if ch.lower() in \"aeiou\":` add 1. Using `lower()` makes capital I count too.",
            "Count: Karnataka has 4 a's, is 1, in 1, India 3 (I, i, a).",
          ],
          answer: "`v = 0` / `for ch in line:` / `    if ch.lower() in \"aeiou\": v += 1` / `print(v)` prints **9**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is `\"banana\".find(\"a\", 2)`?",
              options: ["1", "3", "2", "−1"],
              answer: 1,
              explain: "The search starts at index 2 (the n). The next \"a\" is at index 3.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Palindrome string and word statistics. Prints True, then 5 words, 4 capitals.",
          code: r`word = "Malayalam"
w = word.lower()
print(w == w[::-1])          # palindrome check, ignoring case

text = "Python Is Easy To learn"
print(len(text.split()), "words")
caps = 0
for ch in text:
    if ch.isupper():
        caps += 1
print(caps, "capitals")`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the method return a string, a number or True/False?",
            groups: ["String", "Number", "True / False"],
            items: [
              { text: "s.title()", group: 0, hint: "It returns the text in a new case." },
              { text: "s.find(\"x\")", group: 1, hint: "It returns a position, or −1." },
              { text: "s.isdigit()", group: 2, hint: "All is… methods answer yes or no." },
              { text: "s.count(\"a\")", group: 1, hint: "It counts occurrences." },
              { text: "s.replace(\"a\", \"b\")", group: 0, hint: "A new string with replacements." },
              { text: "s.endswith(\".py\")", group: 2, hint: "It tests the end of the string." },
              { text: "len(s)", group: 1, hint: "The number of characters." },
            ],
            explain: "Case and editing methods return new strings; find, index, count and len return integers; is…, startswith and endswith return Booleans.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Differentiate find() and index()\" is a favourite: both give the first position, but for a missing substring find() returns −1 and index() raises ValueError. Also know split() (returns a list) versus partition() (returns a 3-tuple), and that `title()` and `capitalize()` differ for strings of several words.",
        },
        {
          type: "keypoints",
          items: [
            "String methods return new values; the original string never changes.",
            "find() gives −1 when absent; index() raises ValueError.",
            "split() gives a list; join() makes one string from a list of strings.",
            "partition() always returns 3 parts in a tuple.",
            "is… methods return True/False and are false for the empty string.",
          ],
        },
      ],
      flashcards: [
        { front: "`title()` vs `capitalize()`", back: "title: first letter of every word capital. capitalize: only the first letter of the whole string capital, the rest small." },
        { front: "`find()` vs `index()` when not found", back: "find returns −1; index raises ValueError." },
        { front: "`\"a b  c\".split()`", back: "`['a', 'b', 'c']` (any run of spaces is one separator)." },
        { front: "`\"-\".join([\"x\", \"y\", \"z\"])`", back: "`\"x-y-z\"`" },
        { front: "`partition(sep)`", back: "Splits at the first sep and returns a 3-tuple (before, sep, after)." },
        { front: "`strip()`, `lstrip()`, `rstrip()`", back: "Remove whitespace from both ends, the left end, the right end." },
        { front: "`isalnum()`", back: "True if every character is a letter or a digit and the string is not empty. A space makes it False." },
        { front: "`swapcase()`", back: "Capitals become small and small become capitals: \"Hello\" → \"hELLO\"." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is `\"hello world\".title()`?",
          options: ["\"Hello world\"", "\"Hello World\"", "\"HELLO WORLD\"", "\"hello World\""],
          answer: 1,
          explain: "title() capitalises the first letter of every word. \"Hello world\" is what capitalize() gives.",
        },
        {
          kind: "numeric",
          q: "What is `\"mississippi\".count(\"ss\")`?",
          answer: 2,
          explain: "\"ss\" occurs at indices 2 and 5.",
        },
        {
          kind: "mcq",
          q: "What does `\"2024-08-15\".split(\"-\")` return?",
          options: ["`['2024', '08', '15']`", "`('2024', '-', '08-15')`", "`[2024, 8, 15]`", "`'2024 08 15'`"],
          answer: 0,
          explain: "split returns a list of strings. The tuple is what partition(\"-\") would give.",
        },
        {
          kind: "truefalse",
          q: "`\"Class 11\".isalnum()` is True.",
          answer: false,
          explain: "The space is neither a letter nor a digit, so isalnum() is False.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`s = \"Mysuru\"`. What does `s.index(\"z\")` do?",
          options: ["Returns −1", "Returns 0", "Raises ValueError", "Returns None"],
          answer: 2,
          explain: "index() raises ValueError when the substring is missing; find() would return −1.",
        },
        {
          kind: "fill",
          q: "`\"   hi   \".___()` returns `\"hi   \"` (spaces removed on the left only).",
          answer: ["lstrip"],
          explain: "lstrip() removes leading (left-side) whitespace.",
        },
        {
          kind: "mcq",
          q: "What is printed? `s = \"good\"` / `s.upper()` / `print(s + \"!\")`",
          options: ["GOOD!", "good!", "Good!", "Error"],
          answer: 1,
          explain: "The result of upper() was not stored, so s is still \"good\".",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is `\"a\" + \"-\".join(\"bcd\")`?",
          options: ["\"ab-c-d\"", "\"a-b-c-d\"", "\"abcd-\"", "Error"],
          answer: 0,
          explain: "A string is a sequence, so join puts \"-\" between b, c and d: \"b-c-d\". Adding \"a\" in front gives \"ab-c-d\".",
          difficulty: 3,
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Strings",
      summary: "Mixed board-style questions on strings: slicing outputs, method outputs, error spotting and short string-processing programs.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Board papers love string output questions because one small detail (an excluded stop index, a missed space, an unstored result) changes the answer. Work slowly and write indices.",
        },
        {
          type: "example",
          title: "Output question (3 marks)",
          problem: "Find the output:\n\n`s = \"ExAm@2025\"` · `new = \"\"` · `for ch in s:` · `if ch.isupper(): new += ch.lower()` · `elif ch.islower(): new += ch.upper()` · `elif ch.isdigit(): new += \"#\"` · `else: new += \"*\"` · `print(new)`",
          steps: [
            "E (upper) → e; x (lower) → X; A → a; m → M.",
            "@ is neither letter nor digit → *.",
            "2, 0, 2, 5 are digits → # # # #.",
          ],
          answer: "Output: `eXaM*####`",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Check the worked example. Prints: eXaM*####",
          code: r`s = "ExAm@2025"
new = ""
for ch in s:
    if ch.isupper():
        new += ch.lower()
    elif ch.islower():
        new += ch.upper()
    elif ch.isdigit():
        new += "#"
    else:
        new += "*"
print(new)`,
        },
        {
          type: "example",
          title: "Program: longest word (3 marks)",
          problem: "Write a program that prints the longest word in a sentence (the first one if there is a tie).",
          steps: [
            "Break the sentence into words with `split()`.",
            "Keep `longest = \"\"`; for each word, if `len(word) > len(longest)`, store it.",
            "Using `>` (not `>=`) keeps the first of equal-length words.",
          ],
          answer: "See the program below. For \"India won the cricket world cup\" it prints: cricket",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints: cricket",
          code: r`sentence = "India won the cricket world cup"
longest = ""
for word in sentence.split():
    if len(word) > len(longest):
        longest = word
print(longest)`,
        },
        {
          type: "mistake",
          wrong: "To count words, I count the spaces: `sentence.count(\" \")`.",
          right: "Use `len(sentence.split())`. Counting spaces gives one less than the number of words, and goes wrong with double spaces or leading spaces.",
          why: "Spaces sit between words, so n words have n − 1 single spaces. split() with no argument ignores extra spaces and gives the words themselves.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed? `s = \"PYTHON\"` / `print(s[1:5:2] + s[-1])`",
              options: ["\"YHN\"", "\"YTN\"", "\"YHO\"", "\"PTN\""],
              answer: 0,
              explain: "s[1:5:2] takes indices 1 and 3 → Y, H. s[-1] is N. Joined: YHN.",
            },
            {
              kind: "mcq",
              q: "What is `\"Hello\"[-1:-6:-1]`?",
              options: ["\"olleH\"", "\"olle\"", "\"\"", "\"H\""],
              answer: 0,
              explain: "Start at −1 (o) and step back to −5 (H); −6 is the excluded stop. The whole string reversed.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "x = \"ab\" * 2 + \"c\". What is len(x)?",
            emoji: "📏",
            options: ["5", "6", "3"],
            answer: 0,
            trap: 1,
            explain: "* is done before +, as in arithmetic: \"ab\" * 2 is \"abab\" (4 characters), and adding \"c\" makes 5. The answer 6 comes from counting \"ab\" three times.",
          },
        },
        {
          type: "table",
          headers: ["Common program", "Key idea"],
          rows: [
            ["Count vowels / digits / capitals", "Traverse and test each character with `in \"aeiou\"`, `isdigit()`, `isupper()`."],
            ["Palindrome string", "`s == s[::-1]` (lower() first to ignore case)."],
            ["Replace vowels with *", "Build a new string; strings are immutable."],
            ["Count words / longest word", "`split()` then loop over the list."],
            ["Frequency of one character", "`s.count(ch)` or a counter in a loop."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When a string is built inside a loop (`new += …`), the output is printed once at the end unless the print is indented inside the loop. Check the indentation of the print statement before you write the output.",
        },
        {
          type: "keypoints",
          items: [
            "Write index numbers under the string before slicing.",
            "Build a new string with `+=` to \"change\" a string.",
            "`len(s.split())` counts words correctly.",
            "Check whether print is inside or outside the loop.",
          ],
        },
      ],
      flashcards: [
        { front: "Swap case of every letter (method)", back: "`s.swapcase()`, or test isupper()/islower() in a loop and build a new string." },
        { front: "Count words in a sentence", back: "`len(sentence.split())`" },
        { front: "Palindrome string test (ignore case)", back: "`s.lower() == s.lower()[::-1]`" },
        { front: "Is `\"\"` (empty) alnum?", back: "No: `\"\".isalnum()` is False." },
        { front: "Precedence of * and + on strings", back: "Same as numbers: repetition (*) before concatenation (+)." },
        { front: "Replace all spaces with underscores", back: "`s.replace(\" \", \"_\")`" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output? `s = \"KARNATAKA\"` / `print(s.count(\"A\"), s.find(\"A\"), s.rfind(\"A\"))`",
          options: ["4 1 8", "4 1 7", "3 1 8", "4 0 8"],
          answer: 0,
          explain: "A appears at indices 1, 5, 7 and 8: count 4, first at 1, last (rfind) at 8.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is printed? `t = \"cbse\"` / `for i in range(len(t)): print(t[i].upper() * i, end=\"\")`",
          options: ["BSSEEE", "CBBSSSEEEE", "BBSSSEEE", "CBSE"],
          answer: 0,
          explain: "i = 0: \"C\" × 0 = \"\"; i = 1: \"B\"; i = 2: \"SS\"; i = 3: \"EEE\". Joined: BSSEEE.",
          difficulty: 3,
          hint: "Anything × 0 is the empty string.",
        },
        {
          kind: "truefalse",
          q: "`\"Python\"[6]` raises IndexError but `\"Python\"[6:]` gives an empty string.",
          answer: true,
          explain: "Indexing past the end is an error; slicing past the end just selects nothing.",
        },
        {
          kind: "fill",
          q: "To check whether every character of `pin` is a digit, use `pin.___()`.",
          answer: ["isdigit", "isnumeric", "isdecimal"],
          explain: "isdigit() returns True only if the string is non-empty and all characters are digits.",
        },
        {
          kind: "mcq",
          q: "Which line removes the error in `msg = \"Marks: \" + 95`?",
          options: ["`msg = \"Marks: \" + str(95)`", "`msg = \"Marks: \" + int(95)`", "`msg = \"Marks: \" * 95`", "`msg = str(\"Marks: \" + 95)`"],
          answer: 0,
          explain: "A string can only be joined to a string, so convert the number with str() first.",
        },
        {
          kind: "numeric",
          q: "How many characters are in `\"Go\" * 3 + \"!\" * 2`?",
          answer: 8,
          explain: "\"GoGoGo\" has 6 characters and \"!!\" has 2: 8 in all.",
        },
        {
          kind: "multi",
          q: "Which expressions give `\"abc\"` when `s = \"xabcx\"`?",
          options: ["`s[1:4]`", "`s.strip(\"x\")`", "`s[-4:-1]`", "`s[1:-1]`"],
          answers: [0, 1, 2, 3],
          explain: "All four work: slices 1–3 (as 1:4, −4:−1 or 1:−1), and strip(\"x\") removes x from both ends.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Lists                                                                */
/* ------------------------------------------------------------------ */
const lists: Topic = {
  slug: "c11-cs-lists",
  title: "Lists",
  icon: "📋",
  description: "Lists as mutable ordered sequences: indexing, slicing, operators, traversal, list methods and built-in functions, copying and aliasing, nested lists and passing lists to functions.",
  lessons: [
    {
      slug: "list-basics",
      title: "Lists: Creating, Indexing, Slicing and Traversing",
      summary: "Creating lists, indexing and slicing, mutability, concatenation, repetition, membership, and traversing a list to sum, search and find the largest element.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🛒",
          caption: "A shopping list: items in order, you can add, cross out or change items. A Python list works the same way.",
        },
        {
          type: "text",
          md: "A **list** is an **ordered sequence** of elements written in square brackets and separated by commas: `marks = [72, 85, 68]`. The elements can be of **different types**, even other lists: `[\"apple\", 3.5, True, [1, 2]]`. `[]` is the **empty list**, and `list(\"abc\")` builds `['a', 'b', 'c']` from a string.\n\nIndexing and slicing work exactly as for strings: indices 0 to n − 1 from the left and −1 to −n from the right, and `L[start:stop:step]` excludes stop.",
        },
        {
          type: "text",
          md: "The big difference from strings: lists are **mutable**. You can change an element in place with `L[i] = value`, change a whole slice with `L[a:b] = [...]`, and delete with `del L[i]`. The list object stays the same; only its contents change.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Lists can be changed in place. Compare each output line with the comment.",
          code: r`L = [10, 20, 30, 40, 50]
print(L[1], L[-2], L[1:4])   # 20 40 [20, 30, 40]
print(L[::-1])               # [50, 40, 30, 20, 10]
L[0] = 15
print(L)                     # [15, 20, 30, 40, 50]
L[1:3] = [99]                # two elements replaced by one
print(L)                     # [15, 99, 40, 50]
del L[1]
print(L)                     # [15, 40, 50]`,
        },
        {
          type: "table",
          headers: ["Operation", "Example", "Result"],
          rows: [
            ["Concatenation `+`", "`[1, 2] + [3]`", "`[1, 2, 3]` (a new list)"],
            ["Repetition `*`", "`[0] * 3`", "`[0, 0, 0]`"],
            ["Membership `in`", "`30 in [10, 20, 30]`", "`True`"],
            ["Slicing", "`[12, 45, 7, 23, 56][1:3]`", "`[45, 7]`"],
            ["Length", "`len([\"a\", [1, 2]])`", "`2` (the inner list counts as one element)"],
          ],
        },
        {
          type: "mistake",
          wrong: "`L = [1, 2] + 3` adds 3 to the end of the list.",
          right: "`+` joins two lists, so write `L = [1, 2] + [3]` or use `L.append(3)`. `[1, 2] + 3` raises TypeError.",
          why: "Learners read + as \"add\". For lists, + means concatenation and both sides must be lists.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "`L = [12, 45, 7, 23, 56, 89, 3]`. What is `L[5:1:-2]`?",
              options: ["`[89, 23]`", "`[89, 23, 45]`", "`[56, 7]`", "`[]`"],
              answer: 0,
              explain: "Indices 5 and 3 (stop 1 excluded): 89 and 23.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "**Traversing** a list means visiting every element. `for x in L:` gives the values, which is enough for summing, counting or searching. To **change** elements you need their positions, so use `for i in range(len(L)):` and assign `L[i] = …`.",
        },
        {
          type: "example",
          title: "Sum, mean and largest without built-ins",
          problem: "For `L = [12, 45, 7, 23, 56, 89, 3]`, find the total, the mean and the largest element using loops only.",
          steps: [
            "`total = 0`; `for x in L: total += x` gives 235.",
            "Mean = `total / len(L)` = 235 / 7 = 33.571… (true division gives a float).",
            "Largest: start with `big = L[0]` (not 0, in case all are negative); for each x, `if x > big: big = x`.",
            "big changes 12 → 45 → 56 → 89 and stays 89.",
          ],
          answer: "Total 235, mean about 33.57, largest 89.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Linear search and doubling every element. Prints: Found at index 3, then [2, 4, 6, 8, 10]",
          code: r`L = [12, 45, 7, 23, 56, 89, 3]
key = 23
pos = -1
for i in range(len(L)):
    if L[i] == key:
        pos = i
        break
if pos == -1:
    print("Not found")
else:
    print("Found at index", pos)

N = [1, 2, 3, 4, 5]
for i in range(len(N)):     # indices are needed to change elements
    N[i] = N[i] * 2
print(N)`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Works on a list, a string, or both?",
            groups: ["Lists only", "Both lists and strings"],
            items: [
              { text: "x[0] = 5", group: 0, hint: "Item assignment needs a mutable sequence." },
              { text: "x[1:3]", group: 1, hint: "Slicing works on every sequence." },
              { text: "x + x", group: 1, hint: "Concatenation of two sequences of the same type." },
              { text: "del x[2]", group: 0, hint: "Deleting an element changes the object." },
              { text: "len(x)", group: 1, hint: "Every sequence has a length." },
              { text: "x.append(4)", group: 0, hint: "append is a list method." },
            ],
            explain: "Read-only operations (index, slice, +, *, in, len) work on both. Anything that changes the object in place works only on mutable lists.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Show list outputs with square brackets and commas exactly as Python prints them, e.g. `[15, 99, 40, 50]`. Strings inside a printed list appear with single quotes: `['a', 'b']`. When a slice is assigned a list of a different length, the list grows or shrinks.",
        },
        {
          type: "keypoints",
          items: [
            "A list is an ordered, mutable sequence in [ ]; elements may be of any type.",
            "Indexing and slicing follow the same rules as strings.",
            "`L[i] = v`, `L[a:b] = [...]` and `del L[i]` change the list in place.",
            "`+` needs two lists; `*` needs a list and an integer.",
            "Use `range(len(L))` when you must change elements during traversal.",
          ],
        },
      ],
      flashcards: [
        { front: "List", back: "An ordered, mutable sequence of elements of any type, written in square brackets." },
        { front: "Mutable", back: "Can be changed in place. Lists are mutable; strings and tuples are not." },
        { front: "`list(\"abc\")`", back: "`['a', 'b', 'c']`" },
        { front: "`[0] * 4`", back: "`[0, 0, 0, 0]`" },
        { front: "`len([1, [2, 3], 4])`", back: "3: the inner list is one element." },
        { front: "Starting value for \"largest\"", back: "`big = L[0]`, so the code also works when every element is negative." },
        { front: "Delete the element at index i", back: "`del L[i]` (or `L.pop(i)`, which also returns it)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`L = [5, 10, 15, 20]`. What is `L[-1] + L[0]`?",
          options: ["25", "15", "`[20, 5]`", "Error"],
          answer: 0,
          explain: "L[−1] is 20 and L[0] is 5; both are integers, so 20 + 5 = 25.",
        },
        {
          kind: "mcq",
          q: "What is printed? `L = [1, 2, 3, 4]` / `L[1:3] = [7, 8, 9]` / `print(L)`",
          options: ["`[1, 7, 8, 9, 4]`", "`[1, 7, 8, 4]`", "`[7, 8, 9, 3, 4]`", "Error"],
          answer: 0,
          explain: "Indices 1 and 2 (the 2 and 3) are replaced by three new elements, so the list grows to 5.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "A list can hold an integer, a string and another list at the same time.",
          answer: true,
          explain: "Lists are heterogeneous: elements may be of any type, including lists (nested lists).",
        },
        {
          kind: "mcq",
          q: "Which raises an error?",
          options: ["`[1, 2] * 2`", "`[1, 2] + [3]`", "`[1, 2] + 3`", "`3 in [1, 2]`"],
          answer: 2,
          explain: "A list can only be concatenated with another list; `[1, 2] + 3` is a TypeError.",
        },
        {
          kind: "numeric",
          q: "`L = [3, 8, 2, 8, 5]`. After `for i in range(len(L)): L[i] = L[i] % 3`, what is `sum(L)`?",
          answer: 8,
          explain: "Remainders: 0, 2, 2, 2, 2. Sum = 8.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "To remove the element at index 2 of list L without using a method, write `___ L[2]`.",
          answer: ["del"],
          explain: "The del statement deletes an element (or a slice) in place.",
        },
        {
          kind: "mcq",
          q: "`L = [\"a\", \"b\", \"c\"]`. What does `print(L[1:])` show?",
          options: ["`['b', 'c']`", "`bc`", "`[b, c]`", "`'b', 'c'`"],
          answer: 0,
          explain: "A slice of a list is a list, and Python prints the strings inside it with quotes.",
        },
      ],
    },
    {
      slug: "list-methods",
      title: "List Methods, Copying, Nested Lists and Functions",
      summary: "append, extend, insert, count, index, remove, pop, reverse, sort, sorted, min, max, sum; aliasing versus copying; nested lists; and lists passed to functions.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🧑‍🍳",
          caption: "A cook adjusting a recipe list: add an item at the end, insert one in the middle, remove one, or sort them. List methods do these jobs.",
        },
        {
          type: "table",
          headers: ["Method / function", "What it does", "Returns"],
          rows: [
            ["`L.append(x)`", "Adds x as **one** element at the end", "None"],
            ["`L.extend(seq)`", "Adds each element of seq at the end", "None"],
            ["`L.insert(i, x)`", "Puts x at index i, shifting the rest right", "None"],
            ["`L.count(x)`", "How many times x occurs", "int"],
            ["`L.index(x)`", "Index of the first x (ValueError if absent)", "int"],
            ["`L.remove(x)`", "Deletes the first x (ValueError if absent)", "None"],
            ["`L.pop()` / `L.pop(i)`", "Deletes and **returns** the last element / the one at i", "the element"],
            ["`L.reverse()`", "Reverses the list in place", "None"],
            ["`L.sort()`", "Sorts in place; `sort(reverse=True)` for descending", "None"],
            ["`sorted(L)`", "A **new** sorted list; L unchanged", "list"],
            ["`len`, `min`, `max`, `sum`", "Built-in functions on the list", "a value"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Follow the list as each method acts on it. The comments show the printed lines.",
          code: r`nums = [4, 7, 1]
nums.append(9);        print(nums)    # [4, 7, 1, 9]
nums.extend([2, 5]);   print(nums)    # [4, 7, 1, 9, 2, 5]
nums.insert(1, 8);     print(nums)    # [4, 8, 7, 1, 9, 2, 5]
print(nums.count(7), nums.index(1))   # 1 3
nums.remove(7);        print(nums)    # [4, 8, 1, 9, 2, 5]
x = nums.pop();        print(x, nums) # 5 [4, 8, 1, 9, 2]
y = nums.pop(0);       print(y, nums) # 4 [8, 1, 9, 2]
nums.sort();           print(nums)    # [1, 2, 8, 9]
nums.sort(reverse=True); print(nums)  # [9, 8, 2, 1]
print(min(nums), max(nums), sum(nums))  # 1 9 20`,
        },
        {
          type: "mistake",
          wrong: "`L = L.sort()` sorts L and keeps the sorted list.",
          right: "`L.sort()` sorts in place and returns None, so `L = L.sort()` makes L None. Write `L.sort()` alone, or `L = sorted(L)`.",
          why: "Most string methods return a new string, so learners expect list methods to do the same. List methods that change the list (append, sort, reverse…) return None.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "`L = [1, 2]`. After `L.append([3, 4])`, what is `len(L)`?",
              options: ["3", "4", "2", "Error"],
              answer: 0,
              explain: "append adds its argument as one element: `[1, 2, [3, 4]]`. extend would give `[1, 2, 3, 4]`, length 4.",
            },
          ],
        },
        {
          type: "heading",
          text: "Aliasing and copying",
        },
        {
          type: "text",
          md: "`b = a` does **not** copy a list. It makes `b` a second name (an **alias**) for the **same** list object, so a change through `b` shows through `a` as well. `a is b` is True. To get an independent copy use any of `a.copy()`, `a[:]` or `list(a)`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Alias versus copy.",
          code: r`a = [1, 2, 3]
b = a            # alias: same list
b.append(4)
print(a, b, a is b)    # [1, 2, 3, 4] [1, 2, 3, 4] True

c = a.copy()     # also a[:] or list(a)
c.append(5)
print(a, c)            # [1, 2, 3, 4] [1, 2, 3, 4, 5]`,
        },
        {
          type: "text",
          md: "A **nested list** is a list inside a list, often used as a table: `m = [[1, 2, 3], [4, 5, 6]]`. `m[1]` is the row `[4, 5, 6]` and `m[1][2]` is 6. A nested loop visits every element.\n\nWhen a list is **passed to a function**, the function receives a reference to the same list. If the function changes the list's elements (with `lst[i] = …`, append, etc.), the caller sees the change. If the function instead assigns a brand-new list to its parameter, only the local name changes.",
        },
        {
          type: "example",
          title: "List passed to a function",
          problem: "What is printed?\n\n`def increase(lst):` · `for i in range(len(lst)): lst[i] = lst[i] + 5` · then `marks = [60, 72, 88]` · `increase(marks)` · `print(marks)`",
          steps: [
            "`lst` inside the function refers to the same list object as `marks`.",
            "Each element is changed in place: 60 → 65, 72 → 77, 88 → 93.",
            "No new list was made, so `marks` shows the changes.",
          ],
          answer: "Output: `[65, 77, 93]`",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "a = [1, 2]; b = a; b[0] = 9. What is a?",
            emoji: "🔗",
            options: ["[1, 2]", "[9, 2]", "Error"],
            answer: 1,
            trap: 0,
            explain: "b = a makes an alias, not a copy. Both names point to one list, so changing b[0] changes what a shows. Use a.copy() for a separate list.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Pairs examiners ask you to differentiate: **append vs extend**, **remove vs pop** (remove deletes by value and returns None; pop deletes by index and returns the element), **sort vs sorted**, and **del vs remove**. Give one line of code for each.",
        },
        {
          type: "keypoints",
          items: [
            "append adds one element; extend adds each element of a sequence.",
            "remove works by value, pop by index (and returns the element).",
            "sort() changes the list and returns None; sorted() returns a new list.",
            "`b = a` is an alias; `a.copy()`, `a[:]`, `list(a)` make copies.",
            "A function that changes a passed list's elements changes the caller's list.",
          ],
        },
      ],
      flashcards: [
        { front: "append vs extend", back: "append(x) adds x as one element; extend(seq) adds each element of seq." },
        { front: "remove vs pop", back: "remove(x) deletes the first x by value, returns None. pop(i) deletes by index (last by default) and returns it." },
        { front: "sort() vs sorted()", back: "L.sort() sorts in place and returns None. sorted(L) returns a new sorted list; L is unchanged." },
        { front: "insert(i, x)", back: "Puts x at index i and shifts later elements one place right." },
        { front: "Three ways to copy a list", back: "`a.copy()`, `a[:]`, `list(a)`" },
        { front: "Alias", back: "A second name for the same object, e.g. `b = a`. Changes through either name show in both." },
        { front: "`m = [[1, 2, 3], [4, 5, 6]]`: m[1][2]", back: "6 (row 1, column 2)." },
        { front: "Sort in descending order", back: "`L.sort(reverse=True)` or `sorted(L, reverse=True)`" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`L = [3, 1, 2]`. What does `print(L.sort())` show?",
          options: ["`[1, 2, 3]`", "None", "`[3, 1, 2]`", "Error"],
          answer: 1,
          explain: "sort() works in place and returns None, which is what gets printed. L itself is now [1, 2, 3].",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`L = [10, 20, 30]`. What does `L.pop(1)` return?",
          options: ["10", "20", "30", "None"],
          answer: 1,
          explain: "pop(1) removes and returns the element at index 1, which is 20. L becomes [10, 30].",
        },
        {
          kind: "mcq",
          q: "`L = [5, 3, 5, 1]`. After `L.remove(5)`, L is…",
          options: ["`[3, 5, 1]`", "`[3, 1]`", "`[5, 3, 1]`", "`[5, 3, 5]`"],
          answer: 0,
          explain: "remove deletes only the first 5.",
        },
        {
          kind: "truefalse",
          q: "After `a = [1, 2]; b = a[:]; b.append(3)`, a is still `[1, 2]`.",
          answer: true,
          explain: "a[:] makes a new list, so appending to b does not affect a.",
        },
        {
          kind: "numeric",
          q: "`m = [[2, 4], [6, 8, 10], [1]]`. What is `len(m) + m[1][-1]`?",
          answer: 13,
          explain: "len(m) is 3 rows; m[1][−1] is 10. 3 + 10 = 13.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which inserts 0 at the beginning of L?",
          options: ["`L.insert(0, 0)`", "`L.append(0)`", "`L.insert(0)`", "`L[0] = 0`"],
          answer: 0,
          explain: "insert(index, value). L[0] = 0 would replace the first element instead of adding one.",
        },
        {
          kind: "multi",
          q: "Which of these return None?",
          options: ["`L.append(4)`", "`L.pop()`", "`L.reverse()`", "`sorted(L)`"],
          answers: [0, 2],
          explain: "append and reverse change the list in place and return None. pop returns the removed element; sorted returns a new list.",
        },
        {
          kind: "mcq",
          q: "What is printed? `def f(x):` / `    x = [0, 0]` / then `v = [1, 2]; f(v); print(v)`",
          options: ["`[1, 2]`", "`[0, 0]`", "None", "Error"],
          answer: 0,
          explain: "Assigning a new list to x only changes the local name; the caller's list is untouched.",
          difficulty: 3,
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Lists",
      summary: "Mixed board-style list questions: method outputs, aliasing traps, and programs to search, shift, count frequencies and separate elements.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "List questions in board papers are usually \"find the output\" with several methods in a row, or 3-mark programs that process a list of numbers entered by the user. Track the list after **every** line.",
        },
        {
          type: "example",
          title: "Output question (3 marks)",
          problem: "Find the output:\n\n`L = [2, 4, 6, 8, 10]` · `for i in range(1, len(L)):` · `L[i-1] = L[i]` · then `print(L)`",
          steps: [
            "i = 1: L[0] = L[1] → [4, 4, 6, 8, 10].",
            "i = 2: L[1] = L[2] → [4, 6, 6, 8, 10]. i = 3: L[2] = 8 → [4, 6, 8, 8, 10].",
            "i = 4: L[3] = 10 → [4, 6, 8, 10, 10].",
          ],
          answer: "Output: `[4, 6, 8, 10, 10]` — every element moves one place left and the last one is left as it was.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Rotate left by one place: keep the first element, shift, put it at the end. Prints [4, 6, 8, 10, 2]",
          code: r`P = [2, 4, 6, 8, 10]
first = P[0]
for i in range(len(P) - 1):
    P[i] = P[i + 1]
P[-1] = first
print(P)`,
        },
        {
          type: "example",
          title: "Program: frequency of each element (3 marks)",
          problem: "For `lst = [3, 5, 3, 8, 5, 3]`, print each distinct element with the number of times it occurs, in order of first appearance.",
          steps: [
            "Build a list `seen` of distinct elements: append x only if `x not in seen`.",
            "Loop over `seen` and print `x, lst.count(x)`.",
          ],
          answer: "Output lines: `3 3`, `5 2`, `8 1`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Frequency of elements. Prints 3 3 / 5 2 / 8 1",
          code: r`lst = [3, 5, 3, 8, 5, 3]
seen = []
for x in lst:
    if x not in seen:
        seen.append(x)
for x in seen:
    print(x, lst.count(x))`,
        },
        {
          type: "mistake",
          wrong: "To read n numbers into a list, `L = int(input())` inside the loop is enough.",
          right: "Start with `L = []` before the loop and `L.append(int(input()))` inside it. Assigning to L each time keeps only the last number, and it is an int, not a list.",
          why: "Reading and storing are two steps. The list must exist before the loop, and each value must be appended to it.",
        },
        {
          type: "code",
          lang: "python",
          caption: "Run in IDLE. With n = 4 and the numbers 12, 7, 30, 5 it prints: Even: [12, 30] Odd: [7, 5]",
          code: r`n = int(input("How many numbers? "))
L = []
for i in range(n):
    L.append(int(input("Enter a number: ")))
even, odd = [], []
for x in L:
    if x % 2 == 0:
        even.append(x)
    else:
        odd.append(x)
print("Even:", even, "Odd:", odd)`,
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed? `L = [1, 2, 3]` / `L.append(L.pop(0))` / `print(L)`",
              options: ["`[2, 3, 1]`", "`[1, 2, 3]`", "`[3, 1, 2]`", "`[2, 3]`"],
              answer: 0,
              explain: "pop(0) removes and returns 1; append puts it at the end: [2, 3, 1].",
              difficulty: 2,
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the steps of a linear search.",
            items: ["Read the list and the key", "Set pos = -1", "Loop over the indices of the list", "If L[i] == key, set pos = i and break", "After the loop, print pos or \"Not found\""],
            explain: "pos = −1 means \"not found yet\". break stops at the first match, and the result is decided only after the loop ends.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board and practical tip",
          md: "Practical-file programs on lists: largest/smallest, mean, linear search, count frequency, swap elements at even and odd positions, and remove duplicates. In the exam, read the list with a loop and `append`, or with `eval(input())` only if your teacher allows it.",
        },
        {
          type: "keypoints",
          items: [
            "Track the list after every statement in output questions.",
            "Create the list before the loop; append inside it.",
            "Shifting left: `L[i] = L[i + 1]`; save the first element if you rotate.",
            "`x not in seen` is the simplest way to collect distinct elements.",
          ],
        },
      ],
      flashcards: [
        { front: "Read n numbers into a list", back: "`L = []` then `for i in range(n): L.append(int(input()))`" },
        { front: "Rotate a list left by one", back: "`L.append(L.pop(0))`" },
        { front: "Remove duplicates keeping order", back: "Loop and append x to a new list only if `x not in new`." },
        { front: "Swap two elements", back: "`L[i], L[j] = L[j], L[i]`" },
        { front: "Mean of a list", back: "`sum(L) / len(L)`" },
        { front: "Linear search result when absent", back: "Keep pos = −1 (or a flag False) and report \"Not found\"." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output? `L = [10, 20, 30, 40]` / `L.insert(2, 25)` / `L.remove(10)` / `print(L)`",
          options: ["`[20, 25, 30, 40]`", "`[20, 30, 25, 40]`", "`[10, 20, 25, 30]`", "`[25, 20, 30, 40]`"],
          answer: 0,
          explain: "insert(2, 25) → [10, 20, 25, 30, 40]; remove(10) → [20, 25, 30, 40].",
        },
        {
          kind: "mcq",
          q: "What is printed? `X = [1, 2, 3, 4]` / `X[::2] = [0, 0]` / `print(X)`",
          options: ["`[0, 2, 0, 4]`", "`[0, 0, 3, 4]`", "`[1, 0, 3, 0]`", "Error"],
          answer: 0,
          explain: "X[::2] selects indices 0 and 2; both are replaced by 0.",
          difficulty: 3,
        },
        {
          kind: "numeric",
          q: "`L = [4, 9, 2, 9, 7]`. What is `L.index(9) + L.count(9)`?",
          answer: 3,
          explain: "The first 9 is at index 1 and 9 occurs twice: 1 + 2 = 3.",
        },
        {
          kind: "truefalse",
          q: "`max([\"pear\", \"apple\", \"mango\"])` returns \"pear\".",
          answer: true,
          explain: "Strings are compared alphabetically (by character codes); p comes after a and m.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which program line swaps the first and last elements of L?",
          options: ["`L[0], L[-1] = L[-1], L[0]`", "`L[0] = L[-1]; L[-1] = L[0]`", "`L.swap(0, -1)`", "`L[0], L[-1] = L[0], L[-1]`"],
          answer: 0,
          explain: "Tuple assignment evaluates the right side first, then assigns. Two separate assignments lose the first value; lists have no swap method.",
        },
        {
          kind: "mcq",
          q: "What is printed? `a = [5, 6]` / `b = a` / `a = a + [7]` / `print(b)`",
          options: ["`[5, 6]`", "`[5, 6, 7]`", "`[7]`", "Error"],
          answer: 0,
          explain: "`a + [7]` builds a new list and a now names it. b still names the old list [5, 6]. (Compare a.append(7), which would change both.)",
          difficulty: 3,
          hint: "Does + change a list in place or create a new one?",
        },
        {
          kind: "fill",
          q: "`sorted([3, 1, 2], reverse=___)` returns `[3, 2, 1]`.",
          answer: ["True"],
          explain: "reverse=True sorts in descending order.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Tuples and Dictionaries                                              */
/* ------------------------------------------------------------------ */
const tuplesDicts: Topic = {
  slug: "c11-cs-tuples-dictionaries",
  title: "Tuples and Dictionaries",
  icon: "🗂️",
  description: "Tuples as immutable sequences, tuple operations, methods and tuple assignment; dictionaries as mutable key–value mappings, their operations, methods and frequency-counting programs.",
  lessons: [
    {
      slug: "tuples",
      title: "Tuples: Immutable Sequences",
      summary: "Creating tuples (including one-element tuples), indexing and slicing, immutability, operators, len, count, index, sorted, min, max, sum, tuple assignment and nested tuples.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "📅",
          caption: "The seven days of the week never change order or number. Data that should stay fixed is a good fit for a tuple.",
        },
        {
          type: "text",
          md: "A **tuple** is an **ordered sequence** of elements, like a list, but **immutable**: once created, its elements cannot be changed, added or removed. Tuples are written with round brackets: `t = (10, 20, 30)`. The brackets are optional, so `t = 10, 20, 30` is also a tuple. Elements may be of any type, and `()` is the empty tuple.\n\nA tuple with **one** element needs a **trailing comma**: `(5,)`. Without the comma, `(5)` is just the integer 5 in brackets.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Indexing and slicing work as for lists; changing an element does not.",
          code: r`t = (10, 20, 30, 40)
print(t[1], t[-1], t[1:3], len(t))   # 20 40 (20, 30) 4

a = (5)
b = (5,)
print(type(a), type(b))     # <class 'int'> <class 'tuple'>

print((1, 2) + (3,), (0,) * 3, 20 in t)   # (1, 2, 3) (0, 0, 0) True
print(tuple("abc"), tuple([1, 2]))       # ('a', 'b', 'c') (1, 2)

try:
    t[0] = 1
except TypeError:
    print("TypeError: a tuple cannot be changed")`,
        },
        {
          type: "mistake",
          wrong: "`t = (\"Asha\")` makes a tuple with one name in it.",
          right: "It makes the string \"Asha\". Write `t = (\"Asha\",)` with a trailing comma.",
          why: "Round brackets are also used to group expressions, as in `(2 + 3) * 4`. It is the comma, not the brackets, that makes a tuple.",
        },
        {
          type: "table",
          headers: ["Function / method", "Example with T = (3, 1, 4, 1, 5)", "Result"],
          rows: [
            ["`len(T)`", "number of elements", "5"],
            ["`T.count(x)`", "`T.count(1)`", "2"],
            ["`T.index(x)`", "`T.index(4)`", "2 (ValueError if absent)"],
            ["`sorted(T)`", "returns a **list**", "`[1, 1, 3, 4, 5]`"],
            ["`min(T)`, `max(T)`, `sum(T)`", "smallest, largest, total", "1, 5, 14"],
            ["`tuple(seq)`", "`tuple([1, 2])`", "`(1, 2)`"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What type is `sorted((3, 1, 2))`?",
              options: ["tuple", "list", "int", "set"],
              answer: 1,
              explain: "sorted() always returns a new list, whatever sequence it is given. Use tuple(sorted(t)) to get a tuple back.",
            },
          ],
        },
        {
          type: "heading",
          text: "Tuple assignment and nested tuples",
        },
        {
          type: "text",
          md: "**Tuple assignment** (unpacking) gives each variable on the left the matching value on the right: `(p, q, r) = (1, 2, 3)`. The right side is worked out completely **first**, so `x, y = y, x` swaps two values without a third variable. The number of variables must equal the number of values, or Python raises `ValueError`.\n\nA **nested tuple** is a tuple whose elements are tuples, for example a table of student records. Tuples are also used where a value should not change by accident, and they can be dictionary keys (lists cannot).",
        },
        {
          type: "example",
          title: "Swap and unpack",
          problem: "Find the output:\n\n`x, y = 3, 7` · `x, y = y, x + y` · `print(x, y)`",
          steps: [
            "First line: x = 3, y = 7.",
            "Right side of the second line is computed first, using the old values: (7, 3 + 7) = (7, 10).",
            "Then x = 7 and y = 10.",
          ],
          answer: "Output: `7 10`",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "A nested tuple of records, unpacked in the for loop.",
          code: r`students = ((101, "Asha", 92), (102, "Ravi", 85), (103, "Meena", 78))
total = 0
for roll, name, marks in students:
    print(roll, name, marks)
    total += marks
print("Class average:", total / len(students))   # 85.0
print(students[1][1])                              # Ravi`,
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which of these is a tuple?",
            emoji: "🔍",
            options: ["(7)", "7,", "[7]"],
            answer: 1,
            trap: 0,
            explain: "The comma makes a tuple: `7,` is the tuple (7,). `(7)` is just the number 7, and `[7]` is a list.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"List vs tuple\": list is mutable, uses `[ ]`, has methods like append and sort; tuple is immutable, uses `( )`, has only count and index, and is slightly faster and safer for fixed data. Remember that a tuple **containing a list** can still have that inner list changed: `(1, [2, 3])[1].append(4)` works.",
        },
        {
          type: "keypoints",
          items: [
            "A tuple is an ordered, immutable sequence; the comma makes it a tuple.",
            "One-element tuple: `(5,)`.",
            "Tuple methods: count and index only; sorted() returns a list.",
            "Tuple assignment evaluates the right side first: `a, b = b, a` swaps.",
            "Unpacking needs as many variables as values, else ValueError.",
          ],
        },
      ],
      flashcards: [
        { front: "Tuple", back: "An ordered, immutable sequence of elements, usually written in round brackets." },
        { front: "One-element tuple", back: "`(5,)` — the trailing comma is essential." },
        { front: "Tuple methods", back: "Only `count()` and `index()`." },
        { front: "`sorted((3, 1, 2))`", back: "`[1, 2, 3]` (a list)." },
        { front: "Swap without a third variable", back: "`a, b = b, a`" },
        { front: "`m, n = (1, 2, 3)`", back: "ValueError: too many values to unpack." },
        { front: "Why use a tuple?", back: "For data that must not change; it can also be a dictionary key and is a little faster than a list." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which creates a tuple with one element?",
          options: ["`t = (9)`", "`t = (9,)`", "`t = [9]`", "`t = tuple(9)`"],
          answer: 1,
          explain: "The trailing comma makes a tuple. tuple(9) is a TypeError because 9 is not a sequence.",
        },
        {
          kind: "mcq",
          q: "`T = (2, 4, 6, 8)`. What is `T[1:3] + (10,)`?",
          options: ["`(4, 6, 10)`", "`(4, 6, 8, 10)`", "`[4, 6, 10]`", "Error"],
          answer: 0,
          explain: "T[1:3] is (4, 6); concatenating (10,) gives (4, 6, 10).",
        },
        {
          kind: "truefalse",
          q: "`T.append(5)` adds 5 to the end of the tuple T.",
          answer: false,
          explain: "Tuples are immutable and have no append method; this raises AttributeError.",
        },
        {
          kind: "numeric",
          q: "`T = (5, 2, 5, 9, 5)`. What is `T.count(5) * T.index(9)`?",
          answer: 9,
          explain: "count(5) is 3 and 9 is at index 3: 3 × 3 = 9.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is printed? `a, b, c = \"xyz\"` / `print(c, a)`",
          options: ["z x", "x z", "Error", "xyz"],
          answer: 0,
          explain: "A string is a sequence of 3 characters, so it unpacks into a = x, b = y, c = z.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Tuples are ___, which means their elements cannot be changed after creation.",
          answer: ["immutable"],
          explain: "Immutable objects (tuples, strings) cannot be changed in place.",
        },
        {
          kind: "mcq",
          q: "`t = (1, [2, 3])`. What happens on `t[1].append(4)`?",
          options: ["TypeError", "t becomes `(1, [2, 3, 4])`", "t becomes `(1, 4)`", "AttributeError"],
          answer: 1,
          explain: "The tuple still holds the same list object; the list itself is mutable, so appending to it is allowed.",
          difficulty: 3,
          hint: "What exactly is immutable: the tuple's slots or the objects in them?",
        },
      ],
    },
    {
      slug: "dictionaries",
      title: "Dictionaries: Keys and Values",
      summary: "Dictionaries as mutable key–value mappings: creating, accessing, adding and changing items, membership, traversal, the methods keys, values, items, get, update, pop, del and clear, and counting frequencies.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "📖",
          caption: "A real dictionary: you look up a word (the key) to get its meaning (the value). You never ask for \"the 57th meaning\".",
        },
        {
          type: "text",
          md: "A **dictionary** is a **mutable** collection of **key: value** pairs written in curly brackets: `marks = {\"Asha\": 92, \"Ravi\": 85}`. Each **key** maps to one **value**. You reach a value by its key, `marks[\"Asha\"]`, not by a position number.\n\nRules for keys: keys must be **unique** (assigning to an existing key replaces its value) and **immutable** (numbers, strings, tuples; never a list). Values can be anything, and may repeat. `{}` is the empty dictionary; `dict()` can also build one, e.g. `dict([(\"a\", 1), (\"b\", 2)])`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Adding, changing and looking up items.",
          code: r`d = {"Asha": 92, "Ravi": 85}
d["Meena"] = 78        # new key: item added
d["Ravi"] = 88         # existing key: value replaced
print(d)               # {'Asha': 92, 'Ravi': 88, 'Meena': 78}
print(len(d), d["Asha"])        # 3 92
print("Ravi" in d, 92 in d)     # True False  (in checks KEYS)
print(d.get("Kiran"), d.get("Kiran", 0))   # None 0`,
        },
        {
          type: "mistake",
          wrong: "`92 in d` checks whether 92 is one of the marks in the dictionary.",
          right: "`in` checks **keys** only. To search the values write `92 in d.values()`.",
          why: "For lists and strings, `in` searches the contents, so learners expect the same here. A dictionary is organised by keys, and membership looks only at them.",
        },
        {
          type: "table",
          headers: ["Method / statement", "What it does", "Example (d = {\"Asha\": 92, \"Ravi\": 88})"],
          rows: [
            ["`d.keys()`", "All keys", "`dict_keys(['Asha', 'Ravi'])`"],
            ["`d.values()`", "All values", "`dict_values([92, 88])`"],
            ["`d.items()`", "All (key, value) pairs as tuples", "`dict_items([('Asha', 92), ('Ravi', 88)])`"],
            ["`d.get(k, default)`", "Value of k, or default (None) if k is missing — no error", "`d.get(\"Zoya\", 0)` → 0"],
            ["`d[k]` for a missing k", "Raises KeyError", "`d[\"Zoya\"]` → KeyError"],
            ["`d.update(d2)`", "Adds the pairs of d2; existing keys get d2's values", "`d.update({\"Asha\": 95})`"],
            ["`del d[k]` / `d.pop(k)`", "Remove the item (pop also returns its value)", "`d.pop(\"Ravi\")` → 88"],
            ["`d.clear()`", "Empties the dictionary", "`{}`"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed? `D = {1: \"a\", 2: \"b\", 1: \"c\"}` / `print(len(D), D[1])`",
              options: ["2 c", "3 a", "2 a", "Error"],
              answer: 0,
              explain: "Keys are unique: the second `1:` replaces the first, so D is {1: 'c', 2: 'b'}.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "**Traversing** a dictionary with `for k in d:` gives the **keys**; use `d[k]` for each value. `for k, v in d.items():` gives both at once. In Python 3.7 and later, a dictionary keeps its keys in the order they were inserted, but you still access items by key, never by index.",
        },
        {
          type: "example",
          title: "Character frequency",
          problem: "Count how often each character occurs in `\"banana\"` using a dictionary.",
          steps: [
            "Start with `freq = {}`.",
            "For each character: if it is already a key, add 1 to its value; otherwise create it with value 1.",
            "b → {'b': 1}; a → {'b': 1, 'a': 1}; n → … 'n': 1; then a, n, a raise the counts.",
            "Final counts: b once, a three times, n twice.",
          ],
          answer: "`{'b': 1, 'a': 3, 'n': 2}`",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Two ways to count. The get() version is shorter.",
          code: r`freq = {}
for ch in "banana":
    if ch in freq:
        freq[ch] += 1
    else:
        freq[ch] = 1
print(freq)      # {'b': 1, 'a': 3, 'n': 2}

f2 = {}
for ch in "mississippi":
    f2[ch] = f2.get(ch, 0) + 1
for k, v in f2.items():
    print(k, v)`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Can this be a dictionary key?",
            groups: ["Valid key", "Not allowed as a key"],
            items: [
              { text: "\"Mysuru\"", group: 0, hint: "Strings are immutable." },
              { text: "101", group: 0, hint: "Numbers are immutable." },
              { text: "(12, 5)", group: 0, hint: "A tuple of numbers is immutable." },
              { text: "[1, 2]", group: 1, hint: "Lists are mutable, so Python refuses them (TypeError: unhashable type)." },
              { text: "3.14", group: 0, hint: "A float is immutable too." },
              { text: "{\"a\": 1}", group: 1, hint: "A dictionary is mutable." },
            ],
            explain: "Keys must be immutable so that Python can find them reliably. Lists and dictionaries can change, so they cannot be keys; they can be values.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Classic 2-mark questions: \"difference between `d[k]` and `d.get(k)`\" (KeyError vs None), \"list vs dictionary\" (index vs key access), and \"why can't a list be a key?\" (keys must be immutable). For output questions, remember that printing `d.keys()` shows `dict_keys([...])`, not a plain list.",
        },
        {
          type: "keypoints",
          items: [
            "A dictionary maps unique, immutable keys to values; it is mutable.",
            "`d[k] = v` adds a new item or replaces an existing value.",
            "`in` tests keys; use `d.values()` to search values.",
            "`get()` avoids KeyError; `update()` merges another dictionary.",
            "`d[ch] = d.get(ch, 0) + 1` is the standard frequency counter.",
          ],
        },
      ],
      flashcards: [
        { front: "Dictionary", back: "A mutable collection of key: value pairs in { }, accessed by key." },
        { front: "Rules for keys", back: "Unique and immutable (string, number, tuple). Values can be anything." },
        { front: "`d[k]` vs `d.get(k)` for a missing key", back: "d[k] raises KeyError; get returns None (or the default given)." },
        { front: "`for k in d:` gives…", back: "The keys." },
        { front: "`d.items()`", back: "A view of (key, value) tuples, used as `for k, v in d.items():`." },
        { front: "`d.update(d2)`", back: "Adds d2's pairs to d; for keys already in d, d2's values replace them." },
        { front: "Frequency counter line", back: "`freq[x] = freq.get(x, 0) + 1`" },
        { front: "Remove a key and get its value", back: "`d.pop(k)`" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`d = {\"a\": 1, \"b\": 2}`. What does `d[\"c\"] = 3` do?",
          options: ["Adds the item 'c': 3", "Raises KeyError", "Replaces 'b'", "Nothing"],
          answer: 0,
          explain: "Assigning to a new key adds the item. Reading `d[\"c\"]` before it exists would raise KeyError.",
        },
        {
          kind: "mcq",
          q: "What is printed? `d = {\"x\": 10, \"y\": 20}` / `print(d.get(\"z\", -1) + d[\"y\"])`",
          options: ["19", "20", "KeyError", "None"],
          answer: 0,
          explain: "get returns the default −1 for the missing key; −1 + 20 = 19.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`{[1, 2]: \"pair\"}` is a valid dictionary.",
          answer: false,
          explain: "A list is mutable and cannot be a key: TypeError: unhashable type: 'list'. A tuple (1, 2) would work.",
        },
        {
          kind: "numeric",
          q: "`d = {}` / `for w in \"to be or not to be\".split(): d[w] = d.get(w, 0) + 1`. What is `len(d)`?",
          answer: 4,
          explain: "The distinct words are to, be, or, not: 4 keys.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which gives all the values of d?",
          options: ["`d.values()`", "`d.keys()`", "`d.items()`", "`d.get()`"],
          answer: 0,
          explain: "values() gives the values; keys() the keys; items() the pairs.",
        },
        {
          kind: "mcq",
          q: "`d = {\"A\": 1, \"B\": 2}` / `d.update({\"B\": 5, \"C\": 3})`. What is d?",
          options: ["`{'A': 1, 'B': 5, 'C': 3}`", "`{'A': 1, 'B': 2, 'C': 3}`", "`{'A': 1, 'B': 7, 'C': 3}`", "`{'B': 5, 'C': 3}`"],
          answer: 0,
          explain: "update replaces B's value with 5 (it does not add) and inserts C.",
        },
        {
          kind: "fill",
          q: "`for k, v in d.___():` gives each key with its value.",
          answer: ["items"],
          explain: "items() returns (key, value) pairs that unpack into k and v.",
        },
        {
          kind: "multi",
          q: "Which remove the key \"Ravi\" from d?",
          options: ["`del d[\"Ravi\"]`", "`d.pop(\"Ravi\")`", "`d.remove(\"Ravi\")`", "`d.clear(\"Ravi\")`"],
          answers: [0, 1],
          explain: "del and pop remove a key. Dictionaries have no remove(); clear() takes no argument and empties everything.",
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Tuples and Dictionaries",
      summary: "Mixed board-style questions on tuples and dictionaries: outputs, error spotting, and programs on records, frequencies and look-ups.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "This chapter's board questions mix tuples and dictionaries: outputs of unpacking and dictionary methods, \"which line gives an error and why\", and programs that store records in a dictionary and search them.",
        },
        {
          type: "example",
          title: "Error spotting (2 marks)",
          problem: "Which lines give errors? `t = (4, 5, 6)` · (1) `print(t[3])` · (2) `t = t + (7,)` · (3) `t[0] = 9` · (4) `print(t.index(5))`",
          steps: [
            "(1) Valid indices are 0 to 2: IndexError.",
            "(2) Works: it builds a new tuple (4, 5, 6, 7) and rebinds the name t. The old tuple was not changed.",
            "(3) Item assignment on a tuple: TypeError.",
            "(4) Works and prints 1.",
          ],
          answer: "Lines (1) and (3) give errors. (Line 2 is the trap: rebinding a name is allowed.)",
        },
        {
          type: "example",
          title: "Output question (3 marks)",
          problem: "Find the output: `stock = {\"pen\": 10, \"book\": 4, \"bag\": 2}` · `for item in stock:` · `if stock[item] < 5: stock[item] += 10` · then `print(stock)` and `print(sum(stock.values()))`",
          steps: [
            "pen: 10 is not < 5, unchanged.",
            "book: 4 < 5 → 14. bag: 2 < 5 → 12.",
            "Changing values while looping over keys is allowed (no keys are added or removed).",
            "Sum of values = 10 + 14 + 12 = 36.",
          ],
          answer: "`{'pen': 10, 'book': 14, 'bag': 12}` then `36`",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Check the output example.",
          code: r`stock = {"pen": 10, "book": 4, "bag": 2}
for item in stock:
    if stock[item] < 5:
        stock[item] += 10
print(stock)
print(sum(stock.values()))`,
        },
        {
          type: "text",
          md: "**Program (3 marks):** store employee names with salaries, then print the names of those earning more than ₹50,000 and the name of the highest earner. `max(d, key=d.get)` is a shortcut, but at board level a loop is clearer.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints Kavya and Imran (one per line), then: Highest: Imran 72000",
          code: r`salary = {"Rohit": 45000, "Kavya": 58000, "Imran": 72000, "Divya": 39000}
top_name, top_pay = "", 0
for name, pay in salary.items():
    if pay > 50000:
        print(name)
    if pay > top_pay:
        top_name, top_pay = name, pay
print("Highest:", top_name, top_pay)`,
        },
        {
          type: "mistake",
          wrong: "To search for a name in the dictionary I use `salary.index(\"Kavya\")`.",
          right: "Dictionaries have no index(); test `\"Kavya\" in salary` and then read `salary[\"Kavya\"]`.",
          why: "index() belongs to sequences (strings, lists, tuples), which have positions. A dictionary has keys instead of positions, so a key lookup does the job directly.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed? `t = (1, 2, 3)` / `x = t * 2` / `print(len(x), x[-2])`",
              options: ["6 2", "3 3", "6 3", "Error"],
              answer: 0,
              explain: "t * 2 is (1, 2, 3, 1, 2, 3): length 6 and the second-last element is 2.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match the type to its brackets and nature.",
            pairs: [
              ["list", "[ ] mutable, ordered by index"],
              ["tuple", "( ) immutable, ordered by index"],
              ["dictionary", "{ } mutable, accessed by key"],
              ["string", "quotes, immutable characters"],
            ],
            explain: "Lists and dictionaries can change; tuples and strings cannot. Sequences use positions; dictionaries use keys.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When a program reads records into a dictionary in the practical exam, read the key and value separately: `name = input(\"Name: \")`, `marks = int(input(\"Marks: \"))`, then `d[name] = marks`. Print the final dictionary to show the examiner it worked.",
        },
        {
          type: "keypoints",
          items: [
            "`t = t + (7,)` makes a new tuple; `t[0] = 9` is an error.",
            "Changing values while looping over a dictionary's keys is fine.",
            "Dictionaries have no index(); use `in` and `d[key]`.",
            "Use items() to loop over names and values together.",
          ],
        },
      ],
      flashcards: [
        { front: "`t = (4, 5, 6); t = t + (7,)` — error?", back: "No. A new tuple is created and t is rebound to it." },
        { front: "Highest value's key (loop method)", back: "Track the best value and its key while looping over d.items()." },
        { front: "Search a dictionary for a key", back: "`if key in d:` then use `d[key]`." },
        { front: "Search a dictionary for a value", back: "`if value in d.values():`" },
        { front: "`(1, 2) * 2`", back: "`(1, 2, 1, 2)`" },
        { front: "Read records into a dictionary", back: "Inside a loop: read name and marks, then `d[name] = marks`." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output? `d = {1: 10, 2: 20, 3: 30}` / `s = 0` / `for k in d: s += k * d[k]` / `print(s)`",
          options: ["140", "60", "6", "100"],
          answer: 0,
          explain: "1×10 + 2×20 + 3×30 = 10 + 40 + 90 = 140.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which statement raises an error for `t = (3, 6, 9)`?",
          options: ["`t.count(6)`", "`t + (12,)`", "`t.sort()`", "`sorted(t)`"],
          answer: 2,
          explain: "Tuples have no sort() method (AttributeError). sorted(t) returns a new list.",
        },
        {
          kind: "truefalse",
          q: "`d = {}` creates an empty dictionary, not an empty set or tuple.",
          answer: true,
          explain: "Empty curly brackets give an empty dictionary. An empty tuple is ().",
        },
        {
          kind: "numeric",
          q: "`marks = {\"A\": 40, \"B\": 75, \"C\": 90}`. After `marks[\"B\"] = marks[\"B\"] + 5` and `del marks[\"A\"]`, what is `sum(marks.values())`?",
          answer: 170,
          explain: "B becomes 80, A is removed: 80 + 90 = 170.",
        },
        {
          kind: "mcq",
          q: "What is printed? `t = ((1, 2), (3, 4))` / `print(t[1][0] + t[0][1])`",
          options: ["5", "4", "3", "6"],
          answer: 0,
          explain: "t[1][0] is 3 and t[0][1] is 2: 3 + 2 = 5.",
        },
        {
          kind: "fill",
          q: "Reading `d[\"Zoya\"]` when \"Zoya\" is not a key raises ___.",
          answer: ["KeyError"],
          explain: "A missing key raises KeyError; d.get(\"Zoya\") would return None.",
        },
        {
          kind: "mcq",
          q: "What is printed? `x = 10` / `y = 20` / `x, y = y, x` / `print(x - y)`",
          options: ["10", "−10", "0", "30"],
          answer: 0,
          explain: "After the swap x = 20 and y = 10, so x − y = 10.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Python Modules                                                       */
/* ------------------------------------------------------------------ */
const modules: Topic = {
  slug: "c11-cs-python-modules",
  title: "Python Modules",
  icon: "📦",
  description: "What a module is, import, import … as and from … import, the math module (pi, e, sqrt, ceil, floor, pow, fabs, sin, cos, tan), the random module (random, randint, randrange) and the statistics module (mean, median, mode).",
  lessons: [
    {
      slug: "importing-math",
      title: "Modules, import and the math Module",
      summary: "Modules and the standard library, the three ways to import, and the math module's constants and functions with their return types.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🧮",
          caption: "You do not build a calculator every time you need a square root; you pick one up. Python modules are ready-made tools you pick up with import.",
        },
        {
          type: "text",
          md: "A **module** is a Python file (`.py`) containing ready-made definitions: functions, constants and more. Python comes with a large **standard library** of modules, such as `math`, `random` and `statistics`. Built-in functions like `print()`, `len()` and `abs()` are always available; a module's functions become available only after you **import** the module.",
        },
        {
          type: "table",
          headers: ["Form", "How you then call it", "Note"],
          rows: [
            ["`import math`", "`math.sqrt(16)`", "The whole module; names are used with the **module name and a dot**."],
            ["`import math as m`", "`m.sqrt(16)`", "Same, with a short **alias**."],
            ["`from math import sqrt, pi`", "`sqrt(16)`, `pi`", "Only the named items, used **without** the prefix."],
            ["`from math import *`", "`sqrt(16)`", "Everything, without the prefix. Can clash with your own names, so use with care."],
          ],
        },
        {
          type: "mistake",
          wrong: "After `import math`, I can write `sqrt(25)`.",
          right: "With `import math`, write `math.sqrt(25)`. Plain `sqrt(25)` works only after `from math import sqrt` (or `*`); otherwise it is a NameError.",
          why: "`import math` brings in only the name `math`. The functions live inside it and are reached with the dot. The `from` form copies the chosen names into your program directly.",
        },
        {
          type: "table",
          headers: ["Item", "Meaning", "Example → result"],
          rows: [
            ["`math.pi`, `math.e`", "The constants π and e", "3.141592653589793, 2.718281828459045"],
            ["`math.sqrt(x)`", "Square root (a float)", "`math.sqrt(49)` → 7.0"],
            ["`math.ceil(x)`", "Smallest integer **≥ x** (rounds up)", "`math.ceil(4.2)` → 5; `math.ceil(-4.2)` → −4"],
            ["`math.floor(x)`", "Largest integer **≤ x** (rounds down)", "`math.floor(4.8)` → 4; `math.floor(-4.2)` → −5"],
            ["`math.pow(x, y)`", "x to the power y, always a float", "`math.pow(2, 5)` → 32.0 (but `2 ** 5` → 32)"],
            ["`math.fabs(x)`", "Absolute value as a float", "`math.fabs(-7)` → 7.0 (but `abs(-7)` → 7)"],
            ["`math.sin(x)`, `cos(x)`, `tan(x)`", "Trigonometric ratios; x in **radians**", "`math.cos(0)` → 1.0"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Run it and compare with the table. Note which results are floats.",
          code: r`import math
print(math.sqrt(49), math.ceil(4.2), math.floor(4.8))   # 7.0 5 4
print(math.ceil(-4.2), math.floor(-4.2))               # -4 -5
print(math.pow(2, 5), math.fabs(-7))                   # 32.0 7.0
print(math.sin(math.pi / 2), math.cos(0))              # 1.0 1.0

angle = math.radians(30)          # degrees -> radians
print(round(math.sin(angle), 2))  # 0.5

from math import sqrt, pi
print(sqrt(16), round(pi * 7 ** 2, 2))   # 4.0 153.94`,
        },
        {
          type: "text",
          md: "The trigonometric functions expect the angle in **radians** ($\\pi$ radians = 180°). Convert with `math.radians(deg)` first. Because computers store decimals approximately, `math.sin(math.radians(30))` prints `0.49999999999999994`, not exactly 0.5; `round()` tidies such results.",
        },
        {
          type: "example",
          title: "Area and hypotenuse",
          problem: "Use the math module to find (a) the area of a circle of radius 7 cm and (b) the hypotenuse of a right triangle with legs 3 and 4.",
          steps: [
            "(a) Area = $\\pi r^2$: `math.pi * 7 ** 2` = 153.938…; `round(…, 2)` gives 153.94.",
            "(b) Hypotenuse = $\\sqrt{3^2 + 4^2}$: `math.sqrt(math.pow(3, 2) + math.pow(4, 2))`.",
            "pow returns floats 9.0 and 16.0; the sum is 25.0; sqrt gives 5.0.",
          ],
          answer: "(a) 153.94 cm² (b) 5.0",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is `math.ceil(-2.5) + math.floor(2.5)`?",
              options: ["0", "−1", "1", "5"],
              answer: 0,
              explain: "ceil(−2.5) rounds up to −2; floor(2.5) rounds down to 2. −2 + 2 = 0.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each call to its value.",
            pairs: [
              ["math.floor(-3.7)", "-4"],
              ["math.ceil(3.1)", "4"],
              ["math.pow(3, 2)", "9.0"],
              ["math.fabs(-2)", "2.0"],
              ["math.sqrt(81)", "9.0 (not 9)"],
            ],
            explain: "floor rounds towards minus infinity and ceil towards plus infinity, giving ints. pow, fabs and sqrt always return floats.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Output questions often test the **type** of the result: `math.sqrt(16)` prints `4.0`, `math.pow(2, 3)` prints `8.0`, `math.fabs(-5)` prints `5.0`, but `math.ceil` and `math.floor` print integers. For negative numbers, draw a number line: floor moves left, ceil moves right.",
        },
        {
          type: "keypoints",
          items: [
            "A module is a .py file of ready-made code; import it before use.",
            "`import math` → `math.f()`; `from math import f` → `f()`.",
            "ceil rounds up, floor rounds down (towards −∞ for negatives).",
            "sqrt, pow and fabs return floats; ceil and floor return ints.",
            "sin, cos and tan take radians: use `math.radians()` first.",
          ],
        },
      ],
      flashcards: [
        { front: "Module", back: "A Python file containing definitions (functions, constants) that other programs can import." },
        { front: "`import math` vs `from math import sqrt`", back: "First: call as math.sqrt(). Second: call as sqrt() directly." },
        { front: "`import math as m`", back: "Imports math under the alias m: m.sqrt(9)." },
        { front: "math.ceil(-4.2) / math.floor(-4.2)", back: "−4 / −5" },
        { front: "math.pow(2, 3) vs 2 ** 3", back: "8.0 (float) vs 8 (int)." },
        { front: "math.fabs(-7) vs abs(-7)", back: "7.0 (float) vs 7 (int)." },
        { front: "Unit of angle for math.sin()", back: "Radians. Convert degrees with math.radians()." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement lets you write `sqrt(36)` directly?",
          options: ["`import math`", "`from math import sqrt`", "`import sqrt`", "`include math`"],
          answer: 1,
          explain: "from … import puts the name sqrt into your program. import math needs math.sqrt.",
        },
        {
          kind: "mcq",
          q: "What does `print(math.sqrt(64))` show?",
          options: ["8", "8.0", "64", "Error"],
          answer: 1,
          explain: "sqrt always returns a float, so 8.0.",
        },
        {
          kind: "numeric",
          q: "What is `math.floor(-7 / 2)`?",
          answer: -4,
          explain: "−7 / 2 = −3.5; the largest integer not above −3.5 is −4.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`math.sin(90)` gives 1.0.",
          answer: false,
          explain: "90 is taken as 90 radians. Use math.sin(math.radians(90)) or math.sin(math.pi / 2) for 1.0.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The constant π is available as `math.___`.",
          answer: ["pi"],
          explain: "math.pi is 3.141592653589793.",
        },
        {
          kind: "mcq",
          q: "What is printed? `import math as m` / `print(m.ceil(9.01), m.fabs(-0.5))`",
          options: ["10 0.5", "9 0.5", "10 -0.5", "Error: math is not defined"],
          answer: 0,
          explain: "The alias m works like math. ceil(9.01) is 10; fabs(−0.5) is 0.5.",
        },
        {
          kind: "mcq",
          q: "Which error occurs? `import math` / `print(pow(2, 3), sqrt(4))`",
          options: ["NameError for sqrt", "NameError for pow", "No error", "TypeError"],
          answer: 0,
          explain: "pow is also a built-in function, so pow(2, 3) works (gives 8). sqrt is not built in, so plain sqrt is a NameError.",
          difficulty: 3,
          hint: "Which of the two names exists without any import?",
        },
      ],
    },
    {
      slug: "random-statistics",
      title: "The random and statistics Modules",
      summary: "random(), randint() and randrange() with their exact ranges, the classic \"possible outputs\" board question, and mean, median and mode from the statistics module.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🎲",
          caption: "A ludo die gives 1 to 6, and you cannot know which in advance. The random module lets programs roll dice, shuffle quiz questions or pick OTP digits.",
        },
        {
          type: "text",
          md: "The **random** module produces **pseudo-random** numbers: they look random but come from a formula, so each run usually gives different output. The three functions in the syllabus differ in what they return and whether the end value is included.",
        },
        {
          type: "table",
          headers: ["Function", "Returns", "End value included?", "Example"],
          rows: [
            ["`random.random()`", "a float in **[0.0, 1.0)**", "0.0 possible, 1.0 never", "e.g. 0.6394…"],
            ["`random.randint(a, b)`", "an int from a to b", "**Yes, both a and b**", "`randint(1, 6)` → 1 … 6"],
            ["`random.randrange(stop)`", "an int from 0 to stop − 1", "No", "`randrange(10)` → 0 … 9"],
            ["`random.randrange(start, stop, step)`", "an int from range(start, stop, step)", "No", "`randrange(5, 20, 5)` → 5, 10 or 15"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Run it several times: the numbers change, but always stay in their ranges.",
          code: r`import random
print(random.random())             # 0.0 <= x < 1.0
print(random.randint(1, 6))        # a die: 1 to 6
print(random.randrange(5, 20, 5))  # 5, 10 or 15
otp = ""
for i in range(4):
    otp += str(random.randint(0, 9))
print("OTP:", otp)`,
        },
        {
          type: "mistake",
          wrong: "`random.randint(1, 10)` gives 1 to 9, like range().",
          right: "randint includes **both** ends: 1 to 10. It is randrange (and range) that leaves out the stop value.",
          why: "Learners carry over the range() rule. randint was designed to mean \"an integer between a and b, inclusive\"; randrange follows range().",
        },
        {
          type: "example",
          title: "The \"possible outputs\" question",
          problem: "`colours = [\"RED\", \"BLUE\", \"GREEN\", \"PINK\", \"GOLD\"]` · `start = random.randint(1, 2)` · `stop = random.randint(3, 4)` · `for i in range(start, stop): print(colours[i], end=\"-\")`\n\nWhich are possible: (i) RED-BLUE- (ii) BLUE-GREEN-PINK- (iii) GREEN- (iv) GREEN-PINK-GOLD-?",
          steps: [
            "start is 1 or 2, so the first word is BLUE or GREEN, never RED. (i) is impossible.",
            "stop is 3 or 4 and range excludes it, so the last index is 2 or 3: GREEN or PINK, never GOLD. (iv) is impossible.",
            "(ii) is start 1, stop 4 → indices 1, 2, 3. (iii) is start 2, stop 3 → index 2 only.",
            "All four possible outputs: BLUE-GREEN-, BLUE-GREEN-PINK-, GREEN-, GREEN-PINK-.",
          ],
          answer: "(ii) and (iii) are possible. Minimum start 1, maximum stop 4.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What are the smallest and largest possible values of `random.randint(3, 8) + 2`?",
              options: ["5 and 10", "5 and 9", "3 and 8", "2 and 10"],
              answer: 0,
              explain: "randint(3, 8) gives 3 … 8 inclusive; adding 2 gives 5 … 10.",
            },
          ],
        },
        {
          type: "heading",
          text: "The statistics module",
        },
        {
          type: "text",
          md: "The **statistics** module gives the three measures of central tendency:\n\n- `statistics.mean(data)`: the arithmetic average, sum ÷ count.\n- `statistics.median(data)`: the middle value **after sorting**; for an even count, the average of the two middle values.\n- `statistics.mode(data)`: the most frequent value (it also works for strings). If several values tie, Python 3.8+ returns the one that appears **first**.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Prints: 80 85 85, then 25 25.0, then b",
          code: r`import statistics
marks = [72, 85, 68, 85, 90]
print(statistics.mean(marks), statistics.median(marks), statistics.mode(marks))

ages = [10, 40, 20, 30]           # even count
print(statistics.mean(ages), statistics.median(ages))   # median = (20 + 30) / 2

print(statistics.mode(["a", "b", "b", "c"]))`,
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What is statistics.median([7, 1, 5])?",
            emoji: "📊",
            options: ["1", "5", "4.33"],
            answer: 1,
            trap: 0,
            explain: "The median is the middle value of the sorted data [1, 5, 7], which is 5. Picking the middle position of the unsorted list gives 1, the trap. 4.33 is the mean.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For \"possible output\" questions, write the range of every random variable first, then test each option against the smallest and largest values. Also state the min and max values when asked. For statistics, remember median sorts first, and the median of an even count can be a float (e.g. 25.0).",
        },
        {
          type: "keypoints",
          items: [
            "random() → float in [0, 1); randint(a, b) includes a and b.",
            "randrange(start, stop, step) follows range(): stop excluded.",
            "In possible-output questions, find each variable's range first.",
            "mean = sum/count; median = middle of sorted data; mode = most frequent.",
            "Import first: `import random`, `import statistics`.",
          ],
        },
      ],
      flashcards: [
        { front: "random.random()", back: "A float from 0.0 up to but not including 1.0." },
        { front: "random.randint(a, b)", back: "An integer from a to b, both included." },
        { front: "random.randrange(2, 11, 2)", back: "One of 2, 4, 6, 8, 10 (stop 11 excluded)." },
        { front: "A die roll in Python", back: "`random.randint(1, 6)` or `random.randrange(1, 7)`." },
        { front: "statistics.median of an even count", back: "Average of the two middle values of the sorted data." },
        { front: "statistics.mode on a tie (Python 3.8+)", back: "Returns the tied value that appears first in the data." },
        { front: "Pseudo-random", back: "Numbers produced by a formula that only look random." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which can `random.randrange(1, 10, 3)` return?",
          options: ["10", "7", "3", "9"],
          answer: 1,
          explain: "range(1, 10, 3) is 1, 4, 7. 3, 9 and 10 are not in it.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`random.random()` can return 1.0.",
          answer: false,
          explain: "It returns values from 0.0 up to, but not including, 1.0.",
        },
        {
          kind: "numeric",
          q: "What is `statistics.mean([4, 8, 6, 2])`?",
          answer: 5,
          explain: "(4 + 8 + 6 + 2) / 4 = 20 / 4 = 5.",
        },
        {
          kind: "numeric",
          q: "What is `statistics.median([9, 3, 7, 1, 5, 11])`?",
          answer: 6,
          explain: "Sorted: 1, 3, 5, 7, 9, 11. The two middle values 5 and 7 average to 6 (printed as 6.0).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is `statistics.mode([4, 1, 4, 2, 1, 4])`?",
          options: ["4", "1", "2", "2.67"],
          answer: 0,
          explain: "4 occurs three times, more than any other value.",
        },
        {
          kind: "multi",
          q: "`L = [10, 20, 30, 40]` · `k = random.randint(0, 2)` · `print(L[k] + L[k + 1])`. Which outputs are possible?",
          options: ["30", "50", "70", "90"],
          answers: [0, 1, 2],
          explain: "k is 0, 1 or 2, giving 10 + 20 = 30, 20 + 30 = 50 or 30 + 40 = 70. 90 would need k = 3.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which expression simulates a die roll (1 to 6)?",
          options: ["`int(random.random() * 6) + 1`", "`int(random.random() * 6)`", "`random.randrange(1, 6)`", "`random.randint(0, 6)`"],
          answer: 0,
          explain: "random() × 6 is 0 to just under 6; int() gives 0 … 5; +1 gives 1 … 6. randrange(1, 6) never gives 6.",
          difficulty: 3,
        },
        {
          kind: "fill",
          q: "The middle value of sorted data is found with `statistics.___()`.",
          answer: ["median"],
          explain: "median sorts the data and takes the middle value (or the average of the middle two).",
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Python Modules",
      summary: "Mixed board-style questions on modules: import forms, math outputs and types, random possible-output questions and statistics programs.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Module questions in board papers are short but exact: which import statement is needed, what a math call prints (with or without `.0`), which outputs a random program can give, and simple programs using mean, median and mode.",
        },
        {
          type: "example",
          title: "Which module? (1 mark each)",
          problem: "Name the module needed for: (a) `ceil()` (b) `randint()` (c) `mode()` (d) `len()`.",
          steps: [
            "(a) ceil belongs to math.",
            "(b) randint belongs to random.",
            "(c) mode belongs to statistics.",
            "(d) len is a built-in function: no module is needed.",
          ],
          answer: "(a) math (b) random (c) statistics (d) none — built-in",
        },
        {
          type: "example",
          title: "Output with types (2 marks)",
          problem: "Find the output: `import math` · `print(math.fabs(-3) + math.pow(2, 2))` · `print(math.ceil(7 / 2), math.floor(-7 / 2), -7 // 2)`",
          steps: [
            "fabs(−3) = 3.0 and pow(2, 2) = 4.0, so the sum is 7.0.",
            "7 / 2 = 3.5 → ceil 4. −7 / 2 = −3.5 → floor −4.",
            "`-7 // 2` is floor division, also −4.",
          ],
          answer: "`7.0` then `4 -4 -4`",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Statistics of a data set. Prints: Mean: 24.86 Median: 23 Mode: 23",
          code: r`import statistics as st
data = [23, 17, 23, 31, 17, 23, 40]
print("Mean:", round(st.mean(data), 2), "Median:", st.median(data), "Mode:", st.mode(data))`,
        },
        {
          type: "mistake",
          wrong: "`from random import randint` then calling `random.randint(1, 6)` works.",
          right: "With `from random import randint`, call `randint(1, 6)`. The name `random` itself was never imported, so `random.randint` is a NameError.",
          why: "The from form brings in only the listed names. Mixing the two styles is a very common error-spotting question.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "multi",
              q: "`n = random.randint(2, 4)` · `for i in range(1, n): print(i * 10, end=\" \")`. Which outputs are possible?",
              options: ["10", "10 20", "10 20 30", "10 20 30 40"],
              answers: [0, 1, 2],
              explain: "n is 2, 3 or 4, so the loop runs up to n − 1: one, two or three numbers. Four numbers would need n = 5.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "**Program (3 marks):** simulate 10 rolls of a die and report how many sixes came up. The answer changes on every run, which is expected for random programs; in the practical exam, show two runs.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Output varies each run, e.g. Rolls: [3, 6, 1, 4, 6, 2, 5, 5, 1, 6] Sixes: 3",
          code: r`import random
rolls = []
for i in range(10):
    rolls.append(random.randint(1, 6))
print("Rolls:", rolls, "Sixes:", rolls.count(6))`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which module does each name come from?",
            groups: ["math", "random", "statistics"],
            items: [
              { text: "floor", group: 0, hint: "Rounding down is a maths job." },
              { text: "randrange", group: 1, hint: "The name says random." },
              { text: "median", group: 2, hint: "A measure of central tendency." },
              { text: "fabs", group: 0, hint: "Float absolute value." },
              { text: "randint", group: 1, hint: "Random integer." },
              { text: "mode", group: 2, hint: "Most frequent value." },
              { text: "tan", group: 0, hint: "A trigonometric ratio." },
            ],
            explain: "math holds constants, rounding, powers and trigonometry; random holds random number tools; statistics holds mean, median and mode.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In random questions you may be asked for the **minimum and maximum** value a variable can take, or to **choose all correct options**. Write the range of each variable, and remember randint(a, b) includes b but randrange and range exclude the stop.",
        },
        {
          type: "keypoints",
          items: [
            "Built-in functions (len, abs, round, pow) need no import.",
            "`from m import f` → call `f()`, not `m.f()`.",
            "fabs, pow and sqrt give floats; ceil and floor give ints.",
            "Random programs give different outputs; reason with ranges.",
          ],
        },
      ],
      flashcards: [
        { front: "Module for mean, median, mode", back: "statistics" },
        { front: "Module for ceil, floor, sqrt, pow, fabs, sin, cos, tan, pi, e", back: "math" },
        { front: "Module for random, randint, randrange", back: "random" },
        { front: "`-7 // 2`", back: "−4 (floor division rounds down)." },
        { front: "`from random import randint` — how to call?", back: "`randint(1, 6)` (no `random.` prefix)." },
        { front: "Max value of `random.randrange(10) * 2`", back: "18 (randrange(10) gives at most 9)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which import is needed for `print(mean([2, 4]))` to work?",
          options: ["`from statistics import mean`", "`import statistics`", "`import math`", "`from math import mean`"],
          answer: 0,
          explain: "mean is in statistics, and calling it without a prefix needs the from form.",
        },
        {
          kind: "numeric",
          q: "What is the maximum possible value of `random.randint(1, 5) * 2 + 1`?",
          answer: 11,
          explain: "randint(1, 5) is at most 5: 5 × 2 + 1 = 11.",
        },
        {
          kind: "mcq",
          q: "What is printed? `import math` / `print(math.sqrt(math.pow(3, 2) + math.pow(4, 2)))`",
          options: ["5.0", "5", "25.0", "7.0"],
          answer: 0,
          explain: "9.0 + 16.0 = 25.0 and sqrt gives 5.0.",
        },
        {
          kind: "truefalse",
          q: "`random.randrange(0, 10, 2)` can return 10.",
          answer: false,
          explain: "Like range(0, 10, 2), it can return 0, 2, 4, 6 or 8; the stop value 10 is excluded.",
        },
        {
          kind: "mcq",
          q: "What is `statistics.median([10, 40, 20, 30])`?",
          options: ["25.0", "30", "20", "25 exactly as an int"],
          answer: 0,
          explain: "Sorted: 10, 20, 30, 40. The middle two average to 25.0 (a float, from dividing by 2).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`AR = [5, 15, 25, 35, 45]` · `a = random.randint(0, 2)` · `print(AR[a], AR[a + 2])`. Which output is NOT possible?",
          options: ["5 25", "15 35", "25 45", "35 45"],
          answer: 3,
          explain: "a is 0, 1 or 2, giving pairs (5, 25), (15, 35), (25, 45). The two numbers printed are always two places apart.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "To use `m.floor(2.7)`, the import statement is `import math ___ m`.",
          answer: ["as"],
          explain: "import … as gives the module an alias.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Society, Law and Ethics                                              */
/* ------------------------------------------------------------------ */
const society: Topic = {
  slug: "c11-cs-society-law-ethics",
  title: "Society, Law and Ethics",
  icon: "⚖️",
  description: "Digital footprints, netiquette, data protection, intellectual property rights and licences, cyber crime and cyber safety, malware, the IT Act, privacy, e-waste management, health, and gender and disability issues in computing.",
  lessons: [
    {
      slug: "footprints-netiquette-ipr",
      title: "Digital Footprints, Netiquette and Intellectual Property",
      summary: "Active and passive digital footprints, being a good netizen, net, communication and social-media etiquette, intellectual property rights (copyright, patent, trademark), their violation, and open-source licences (GPL, Creative Commons, Apache).",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "👣",
          caption: "Footprints in wet sand show where you walked. Online, every search, post and click leaves a trail too, and it does not wash away.",
        },
        {
          type: "text",
          md: "A **digital footprint** is the record or trail of data a person leaves behind while using the Internet or digital devices.\n\n- An **active digital footprint** is data you share **on purpose**: posts, comments, photos, e-mails, forms you fill.\n- A **passive digital footprint** is data collected **without you actively sharing it**: browsing history, cookies, your IP address, location data, the time spent on a page.\n\nFootprints are hard to delete completely, can be copied by others and may be seen years later by colleges or employers. So think before you post.",
        },
        {
          type: "text",
          md: "Anyone who uses digital technology and the Internet is part of the **digital society**; a responsible user is called a **digital citizen** or **netizen**. Good netizens follow **etiquette** (polite rules of behaviour):\n\n- **Net etiquette**: be **ethical** (no piracy, share knowledge), be **respectful** (respect privacy and diversity of others), be **responsible** (do not bully; do not \"feed the troll\" by reacting to provocations).\n- **Communication etiquette** (e-mail, chat, forums): be **precise** (respect others' time and data; no huge unnecessary attachments), be **polite**, be **credible** (check before you comment; your words are recorded).\n- **Social-media etiquette**: be **secure** (strong passwords, know who you befriend, beware of fake information), be **reliable** (think before uploading; posts may be permanent).",
        },
        {
          type: "heading",
          text: "Intellectual property rights",
        },
        {
          type: "text",
          md: "**Intellectual property** is a creation of the mind: inventions, software, books, music, designs, brand names. **Intellectual property rights (IPR)** are the legal rights of its creator to control its use and earn from it. The three main kinds:",
        },
        {
          type: "table",
          headers: ["Right", "Protects", "Example"],
          rows: [
            ["**Copyright**", "Original creative expression: books, music, films, photos, drawings, **computer programs**. It arises automatically once the work is created; it protects the expression, not the underlying idea.", "The code of an app; a novel; a song"],
            ["**Patent**", "An **invention** (a new, useful, non-obvious product or process). Granted by the government for a limited time (20 years in India), after which anyone may use it.", "A new type of battery cell"],
            ["**Trademark**", "A word, name, symbol, logo, sound or colour scheme that identifies a brand and separates it from others.", "A company's logo and brand name"],
          ],
        },
        {
          type: "text",
          md: "**Violations of IPR**:\n\n- **Plagiarism**: presenting someone else's work or ideas as your own without giving credit (e.g. copying an article into a project without citing it).\n- **Copyright infringement**: using copyrighted work without the owner's permission or without paying, e.g. downloading pirated films or software.\n- **Trademark infringement**: unauthorised use of another's trademark, or a confusingly similar one, on your products.",
        },
        {
          type: "mistake",
          wrong: "If something is on the Internet and I can download it for free, I am allowed to reuse it in my project.",
          right: "Free to view is not free to reuse. Check the licence or ask permission, and always credit the source; otherwise it can be copyright infringement or plagiarism.",
          why: "Copyright exists from the moment a work is created, even if no © sign is shown. Easy access feels like permission, but the law depends on the owner's licence.",
        },
        {
          type: "text",
          md: "Creators can choose to share their work through **licences**, which state what others may do with it. **Free and open source software (FOSS)** lets anyone use, study, modify and share the source code; Linux and LibreOffice are examples.\n\n- **GPL** (GNU General Public License): a **copyleft** software licence. You may use, change and distribute the software, but any modified version you distribute must also be released under the GPL with its source code.\n- **Creative Commons (CC)**: licences mostly for creative works (images, text, music, videos), built from conditions such as BY (give credit), SA (share alike), NC (non-commercial) and ND (no derivatives).\n- **Apache License**: a **permissive** licence from the Apache Software Foundation. You may modify and redistribute the software, even inside closed-source products, as long as you keep the licence and notices.",
        },
        {
          type: "example",
          title: "Case: the school magazine",
          problem: "Neha copies a paragraph from a website into her magazine article without credit, uses a CC BY photograph with the photographer's name, and puts a soft-drink company's logo on the cover without permission. Classify each act.",
          steps: [
            "Copying text as if it were her own, without credit, is **plagiarism** (and possibly copyright infringement).",
            "A CC BY image may be reused if the creator is credited. She credited the photographer, so this use is **allowed**.",
            "Using a company's logo without permission is **trademark infringement**.",
          ],
          answer: "Paragraph: plagiarism. Photo: fair use under its CC BY licence. Logo: trademark infringement.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which is part of your **passive** digital footprint?",
              options: ["A comment you post on a video", "The cookies a website stores while you browse", "A photo you upload", "An e-mail you send"],
              answer: 1,
              explain: "Cookies, IP address and browsing history are collected without you actively sharing them. The others are active footprints.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each item to the IPR that protects it.",
            pairs: [
              ["A new water-purifying process", "Patent"],
              ["The source code of a game", "Copyright"],
              ["A sports brand's swoosh logo", "Trademark"],
              ["Copying a classmate's essay as your own", "Plagiarism (a violation)"],
            ],
            explain: "Inventions get patents, creative expression (including code) gets copyright, and brand identifiers get trademarks. Taking credit for others' work is plagiarism.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Common 2-mark questions: \"active vs passive digital footprint\" (with one example each), \"copyright vs patent vs trademark\", and \"what is plagiarism and how to avoid it\" (cite sources, use quotation marks, paraphrase in your own words). For GPL say **copyleft**; for Apache say **permissive**.",
        },
        {
          type: "keypoints",
          items: [
            "Digital footprints are active (shared on purpose) or passive (collected silently).",
            "A good netizen is ethical, respectful, responsible, precise, polite, credible, secure and reliable.",
            "Copyright protects creative work and code; patent protects inventions; trademark protects brand identity.",
            "Plagiarism, copyright infringement and trademark infringement violate IPR.",
            "GPL is copyleft, Apache is permissive, CC licences suit creative works.",
          ],
        },
      ],
      flashcards: [
        { front: "Digital footprint", back: "The trail of data a person leaves behind while using the Internet or digital devices." },
        { front: "Active vs passive footprint", back: "Active: shared on purpose (posts, e-mails). Passive: collected without active sharing (cookies, IP address, history)." },
        { front: "Netizen", back: "A responsible citizen of the digital society: anyone who uses the Internet and behaves ethically online." },
        { front: "Copyright", back: "Legal right of the creator over original creative work (including software); arises automatically on creation." },
        { front: "Patent", back: "Exclusive right over an invention, granted by the government for a limited period (20 years in India)." },
        { front: "Trademark", back: "A word, logo, symbol or sound that identifies a brand." },
        { front: "Plagiarism", back: "Presenting someone else's work or ideas as your own without giving credit." },
        { front: "GPL vs Apache licence", back: "GPL is copyleft (modified versions must stay GPL); Apache is permissive (can be used in closed products if notices are kept)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which IPR protects the logo of a company?",
          options: ["Trademark", "Patent", "Copyright", "Licence"],
          answer: 0,
          explain: "A logo identifies a brand, so it is protected as a trademark.",
        },
        {
          kind: "truefalse",
          q: "A work must carry the © symbol to be protected by copyright.",
          answer: false,
          explain: "Copyright arises automatically when the original work is created; the symbol is optional.",
        },
        {
          kind: "multi",
          q: "Which belong to a person's active digital footprint?",
          options: ["A tweet they post", "An online form they fill", "Their IP address logged by a site", "Their location tracked by an app in the background"],
          answers: [0, 1],
          explain: "Posts and forms are shared on purpose. IP logs and background tracking are passive.",
        },
        {
          kind: "mcq",
          q: "Under which licence must modified versions that you distribute also be released under the same licence?",
          options: ["GPL", "Apache", "Proprietary licence", "Freeware"],
          answer: 0,
          explain: "GPL is a copyleft licence: derivatives must stay GPL. Apache is permissive.",
        },
        {
          kind: "fill",
          q: "Using another person's words or ideas as your own without credit is called ___.",
          answer: ["plagiarism"],
          explain: "Plagiarism is avoided by citing sources and putting ideas in your own words.",
        },
        {
          kind: "mcq",
          q: "Responding angrily to a person who posts provocative comments to upset others is called…",
          options: ["feeding the troll", "phishing", "eavesdropping", "spamming"],
          answer: 0,
          explain: "Trolls want a reaction. Good net etiquette says ignore them and do not \"feed the troll\".",
        },
        {
          kind: "mcq",
          q: "Which etiquette is broken by e-mailing a 50 MB video to the whole class when a link would do?",
          options: ["Be precise (respect others' time and data)", "Be secure", "Be credible", "Be reliable"],
          answer: 0,
          explain: "Communication etiquette asks you to be precise: avoid needless large attachments and messages.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "cyber-crime-safety",
      title: "Cyber Crime, Cyber Safety and Malware",
      summary: "What cyber crime is: hacking, eavesdropping, phishing and fraud e-mails, identity theft, ransomware, cyber trolls and cyber bullying; staying safe online; and the kinds of malware (virus, worm, Trojan, spyware, adware, keylogger) with ways to fight them.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🎣",
          caption: "A fisherman hides a hook inside tasty bait. Phishing hides a trap inside a tempting message: \"You have won ₹50,000! Click here.\"",
        },
        {
          type: "text",
          md: "**Cyber crime** is any criminal act in which a computer or network is the **target**, the **tool**, or both. Common cyber crimes:\n\n- **Hacking**: gaining **unauthorised access** to a computer or network. **Ethical (white-hat) hackers** are hired to find weaknesses so they can be fixed; **black-hat hackers** break in to steal or damage.\n- **Eavesdropping**: secretly listening to or intercepting private communication on a network.\n- **Phishing**: fake e-mails, SMS or websites that look genuine and trick people into giving passwords, card numbers or OTPs. **Fraud e-mails** promise prizes or jobs for a \"fee\".\n- **Identity theft**: stealing someone's personal details to pose as them, for example to take loans.\n- **Ransomware**: malware that locks or encrypts a victim's data and demands payment to release it.\n- **Cyber trolling**: posting insulting or provocative comments to upset people; **cyber bullying**: using technology to repeatedly harass, threaten or humiliate someone.",
        },
        {
          type: "example",
          title: "Spot the phishing message",
          problem: "An SMS says: \"Dear customer, your bank KYC has expired. Your account will be blocked today. Update now at bank-kyc-update.example.xyz and enter your OTP.\" List the warning signs and what to do.",
          steps: [
            "**Urgency and fear** (\"blocked today\") push you to act without thinking.",
            "The link is **not the bank's official domain**, and real banks never ask for an OTP.",
            "The greeting is generic (\"Dear customer\"), not your name.",
            "Action: do not click; check through the bank's official app or branch; report it (in India, at cybercrime.gov.in or the helpline 1930).",
          ],
          answer: "It is a phishing attempt. Never share OTP, PIN or passwords; verify through official channels and report it.",
        },
        {
          type: "mistake",
          wrong: "Only careless or non-technical people fall for phishing, and hackers only attack big companies.",
          right: "Phishing messages are designed to fool everyone, and attackers target ordinary users because they are easier. Everyone needs safe habits.",
          why: "Feeling \"too smart to be fooled\" makes people skip checks. Modern fake messages copy real logos and language, so verifying the source matters more than confidence.",
        },
        {
          type: "heading",
          text: "Cyber safety",
        },
        {
          type: "list",
          items: [
            "**Safe browsing**: use updated browsers; look for **https** and the padlock before entering data; avoid unknown links, pop-ups and pirated sites; download only from trusted sources.",
            "**Identity protection**: share as little personal information as possible; use strong, different passwords and two-factor authentication; never share OTPs.",
            "**Confidentiality**: use a firewall; avoid public Wi-Fi for banking; on shared computers, use private browsing, do not save passwords and always log out; clear history when done.",
          ],
        },
        {
          type: "table",
          headers: ["Malware", "What it does", "Key feature"],
          rows: [
            ["**Virus**", "Attaches itself to a program or file and damages data when the host is run", "Needs a host file and usually a user action to spread"],
            ["**Worm**", "Copies itself across networks, using up bandwidth and storage", "Spreads **on its own**, no host file needed"],
            ["**Trojan horse**", "Looks like useful software but secretly harms or opens a back door", "Disguised; does not copy itself"],
            ["**Spyware**", "Secretly collects information about the user and sends it to others", "Works silently in the background"],
            ["**Adware**", "Floods the user with unwanted advertisements", "Often bundled with free software"],
            ["**Keylogger**", "Records every key pressed to capture passwords", "Can be software or a hardware device"],
            ["**Ransomware**", "Encrypts or locks data and demands a ransom", "Back-ups are the best defence"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which malware spreads across a network by itself, without attaching to a file?",
              options: ["Worm", "Virus", "Trojan horse", "Adware"],
              answer: 0,
              explain: "A worm is self-replicating and standalone. A virus needs a host file; a Trojan does not replicate.",
            },
          ],
        },
        {
          type: "text",
          md: "Malware spreads through infected e-mail attachments, downloads from untrusted sites, pirated software, infected pen drives and malicious links. To **combat** it: install and update **antivirus/anti-malware** software, keep the operating system and apps updated, use a firewall, do not open unexpected attachments, scan removable drives, and keep regular **back-ups** of important data.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is this a safe or unsafe online habit?",
            groups: ["Safe", "Unsafe"],
            items: [
              { text: "Using the same password everywhere", group: 1, hint: "One leak would unlock every account." },
              { text: "Turning on two-factor authentication", group: 0, hint: "A second check stops most stolen-password attacks." },
              { text: "Logging out of a cyber café computer", group: 0, hint: "The next user cannot open your account." },
              { text: "Sharing an OTP with a \"bank officer\" on the phone", group: 1, hint: "Banks never ask for OTPs." },
              { text: "Keeping regular back-ups", group: 0, hint: "Back-ups defeat ransomware." },
              { text: "Installing a cracked (pirated) game", group: 1, hint: "Pirated software is a common malware carrier." },
            ],
            explain: "Safe habits limit what an attacker can do even if one thing goes wrong; unsafe ones hand them the keys.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Differentiate virus and worm\" and \"virus and Trojan\" are frequent. Give two points each: host needed or not, self-replicating or not, disguised or not. For phishing, mention the fake look-alike and the aim (stealing credentials).",
        },
        {
          type: "keypoints",
          items: [
            "Cyber crime uses a computer as the target, the tool, or both.",
            "Hacking, eavesdropping, phishing, identity theft, ransomware, trolling and bullying are cyber crimes.",
            "Safe browsing, identity protection and confidentiality keep users safe.",
            "Virus needs a host; worm spreads alone; Trojan is disguised.",
            "Antivirus, updates, caution with attachments and back-ups combat malware.",
          ],
        },
      ],
      flashcards: [
        { front: "Cyber crime", back: "A crime in which a computer or network is the target, the tool, or both." },
        { front: "Ethical hacking", back: "Authorised hacking to find and fix security weaknesses (white-hat)." },
        { front: "Phishing", back: "Fake e-mails, SMS or sites made to look genuine, to steal passwords, card details or OTPs." },
        { front: "Ransomware", back: "Malware that encrypts or locks data and demands payment to restore it." },
        { front: "Cyber bullying", back: "Using digital technology to repeatedly harass, threaten or humiliate someone." },
        { front: "Virus vs worm", back: "A virus attaches to a host file and needs it to run; a worm copies itself across networks on its own." },
        { front: "Trojan horse", back: "Malware disguised as useful software; it does not replicate itself." },
        { front: "Keylogger", back: "Software or hardware that records keystrokes to capture passwords." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Secretly intercepting a private chat on a network is called…",
          options: ["Eavesdropping", "Phishing", "Trolling", "Spamming"],
          answer: 0,
          explain: "Eavesdropping is listening in on communication without permission.",
        },
        {
          kind: "mcq",
          q: "A free \"speed booster\" app secretly opens a back door for an attacker. It is a…",
          options: ["Trojan horse", "Worm", "Adware", "Keylogger"],
          answer: 0,
          explain: "It is disguised as useful software but does harm in secret: the definition of a Trojan.",
        },
        {
          kind: "truefalse",
          q: "Ethical hackers break into systems with the owner's permission to find weaknesses.",
          answer: true,
          explain: "White-hat hacking is authorised and aims to fix vulnerabilities.",
        },
        {
          kind: "multi",
          q: "Which are signs of a phishing e-mail?",
          options: ["Urgent threats like \"account blocked today\"", "A link to a look-alike domain", "A request for your password or OTP", "Your teacher's usual school e-mail address with a class notice"],
          answers: [0, 1, 2],
          explain: "Urgency, look-alike links and requests for secrets are classic signs. A normal notice from a known, genuine address is not.",
        },
        {
          kind: "mcq",
          q: "Which is the best protection against losing data to ransomware?",
          options: ["Regular back-ups kept separately", "Paying the ransom", "Using a bigger hard disk", "Turning off the monitor"],
          answer: 0,
          explain: "With a recent back-up you can restore your files without paying; paying does not guarantee recovery.",
        },
        {
          kind: "fill",
          q: "Before entering a password on a website, check that the address begins with ___ and shows a padlock.",
          answer: ["https", "https://"],
          explain: "https means the connection between your browser and the site is encrypted.",
        },
        {
          kind: "mcq",
          q: "Which malware mainly shows unwanted advertisements?",
          options: ["Adware", "Spyware", "Worm", "Ransomware"],
          answer: 0,
          explain: "Adware floods the screen with ads; spyware secretly collects information.",
        },
      ],
    },
    {
      slug: "it-act-ewaste-health",
      title: "IT Act, Privacy, E-waste and Technology in Society",
      summary: "India's Information Technology Act, 2000 and its 2008 amendment, data protection and privacy, e-waste hazards and management, health and computers, and gender and disability issues in teaching and using computers.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🏛️",
          caption: "Traffic rules keep roads safe. Cyber laws are the traffic rules of the Internet.",
        },
        {
          type: "text",
          md: "India's main cyber law is the **Information Technology Act, 2000 (IT Act)**, amended in **2008**. It:\n\n- gives **legal recognition to electronic records and digital signatures**, which made e-commerce and e-governance possible;\n- defines **cyber crimes** and their penalties, such as tampering with computer source documents, hacking-type offences, identity theft, cheating by impersonation online, and publishing obscene material electronically;\n- sets up authorities to handle disputes and appeals, and gives **CERT-In** (Indian Computer Emergency Response Team) the role of national agency for responding to cyber security incidents.\n\nVictims in India can report cyber crime on the **National Cyber Crime Reporting Portal** (cybercrime.gov.in) or call **1930** for online financial fraud.",
        },
        {
          type: "text",
          md: "**Data protection** means keeping personal data safe from misuse, theft and unauthorised sharing. **Privacy** is a person's right to control information about themselves. **Sensitive personal data** includes bank details, passwords, health records and biometric data (fingerprints, face). India passed the **Digital Personal Data Protection Act** in **2023**, which requires organisations to collect personal data only for a lawful purpose, with consent, and to protect it.",
        },
        {
          type: "mistake",
          wrong: "Anything I do online is anonymous, so cyber laws cannot reach me.",
          right: "Online actions leave traces (IP addresses, device and account logs) that investigators can follow, and the IT Act makes cyber crimes punishable.",
          why: "A screen name feels like a mask, but every connection passes through service providers who keep records. Passive footprints make most offenders traceable.",
        },
        {
          type: "heading",
          text: "E-waste",
        },
        {
          type: "text",
          md: "**E-waste** (electronic waste) is discarded electrical and electronic equipment: old phones, computers, TVs, batteries, chargers. It contains **toxic substances** such as **lead**, **mercury**, **cadmium**, **beryllium** and brominated flame retardants. Dumped in landfills or burnt in the open, these leak into soil, water and air:\n\n- **lead** harms the nervous system, kidneys and blood;\n- **mercury** damages the brain and nerves;\n- **cadmium** harms the kidneys and bones;\n- **beryllium** dust can cause lung disease.\n\n**Management**: **reduce** (buy only what you need, use devices longer), **reuse** (repair, resell or donate), **recycle** (give to authorised e-waste recyclers, not scrap dealers who burn wires). Under India's E-Waste (Management) Rules, producers have **Extended Producer Responsibility (EPR)**: they must arrange collection and recycling of their products.",
        },
        {
          type: "example",
          title: "Case: the old laptop",
          problem: "Arjun's 8-year-old laptop works but is slow. A scrap dealer offers ₹300; a local school would accept it as a donation; the company runs a take-back scheme. Which choices are responsible, in the right order?",
          steps: [
            "First try **reuse**: a working laptop can be upgraded (more RAM, an SSD) or donated to the school.",
            "If it truly cannot be used, **recycle** through the company's take-back scheme or an authorised recycler.",
            "Before giving it away, **back up and wipe** personal data (privacy).",
            "Informal scrap dealers often burn cables and dump parts, releasing toxins, so avoid them.",
          ],
          answer: "Wipe the data, then donate it (reuse); if unusable, use the take-back scheme or an authorised recycler. Avoid the scrap dealer.",
        },
        {
          type: "table",
          headers: ["Health problem", "Cause", "Prevention"],
          rows: [
            ["Eye strain, dry eyes", "Staring at screens for long", "20-20-20 rule: every 20 minutes look 20 feet away for 20 seconds; good lighting"],
            ["Back and neck pain", "Poor posture", "Screen at eye level, back supported, feet flat"],
            ["Wrist pain (repetitive strain injury)", "Long typing and mouse use", "Breaks, wrist support, correct keyboard height"],
            ["Poor sleep, Internet addiction", "Late-night screen use, endless scrolling", "Screen-time limits; no screens before bed"],
          ],
        },
        {
          type: "text",
          md: "**Gender and disability issues.** Fewer girls choose computer science, often because of stereotypes (\"computers are for boys\"), less access to devices at home, and few visible women role models. Schools can help with equal access, mixed teams, encouragement and examples of women in computing.\n\nStudents with disabilities face a lack of special teaching aids and trained teachers, and inaccessible software. **Assistive technology** helps: **screen readers** and text-to-speech for visually impaired users, **Braille keyboards and printers**, speech recognition, on-screen keyboards, and captions for hearing-impaired users.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these gave legal recognition to electronic records and digital signatures in India?",
              options: ["IT Act, 2000", "Copyright Act", "E-Waste Rules", "Patents Act"],
              answer: 0,
              explain: "The Information Technology Act, 2000 recognises e-records and digital signatures and deals with cyber crime.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the e-waste choices from most to least preferred.",
            items: ["Reduce: keep using the device longer", "Reuse: repair, resell or donate it", "Recycle: give it to an authorised recycler", "Dispose: only as a last resort, through proper channels"],
            explain: "Avoiding waste is best, then extending a device's life, then recovering its materials safely. Throwing e-waste in the dustbin or burning it is never acceptable.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write the IT Act as **Information Technology Act, 2000** (amended 2008), and give two of its purposes. For e-waste, name at least two toxic elements with their effects and the three Rs. For disability, name specific assistive tools such as a screen reader or a Braille keyboard.",
        },
        {
          type: "keypoints",
          items: [
            "The IT Act, 2000 (amended 2008) recognises e-records and digital signatures and punishes cyber crimes.",
            "Privacy is control over your personal data; India's Digital Personal Data Protection Act came in 2023.",
            "E-waste contains lead, mercury, cadmium and other toxins; reduce, reuse, recycle.",
            "Good posture, breaks and screen limits prevent computer-related health problems.",
            "Equal access, role models and assistive technology address gender and disability gaps.",
          ],
        },
      ],
      flashcards: [
        { front: "IT Act", back: "India's Information Technology Act, 2000, amended in 2008: legal recognition of e-records and digital signatures, and penalties for cyber crimes." },
        { front: "CERT-In", back: "Indian Computer Emergency Response Team: the national agency for responding to cyber security incidents." },
        { front: "E-waste", back: "Discarded electrical and electronic equipment such as phones, computers and batteries." },
        { front: "Toxins in e-waste", back: "Lead, mercury, cadmium, beryllium, brominated flame retardants." },
        { front: "EPR", back: "Extended Producer Responsibility: producers must arrange collection and recycling of their products." },
        { front: "20-20-20 rule", back: "Every 20 minutes, look at something 20 feet away for 20 seconds." },
        { front: "Assistive technology examples", back: "Screen readers, text-to-speech, Braille keyboards and printers, speech recognition, captions." },
        { front: "Cyber crime helpline (India)", back: "1930, and the portal cybercrime.gov.in." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In which year was the IT Act of India amended?",
          options: ["2008", "2000", "2015", "1999"],
          answer: 0,
          explain: "The Act was passed in 2000 and amended in 2008.",
        },
        {
          kind: "multi",
          q: "Which toxic substances are found in e-waste?",
          options: ["Lead", "Mercury", "Cadmium", "Oxygen"],
          answers: [0, 1, 2],
          explain: "Lead, mercury and cadmium are toxic metals in electronics; oxygen is not a pollutant here.",
        },
        {
          kind: "truefalse",
          q: "Selling old electronics to an informal scrap dealer who burns the wires is a safe way to recycle.",
          answer: false,
          explain: "Open burning releases toxic fumes. Use authorised recyclers or company take-back schemes.",
        },
        {
          kind: "mcq",
          q: "A visually impaired student wants to use a computer. Which tool helps most?",
          options: ["Screen reader", "Larger mouse pad", "Second monitor", "Faster processor"],
          answer: 0,
          explain: "A screen reader speaks out the text and controls on the screen.",
        },
        {
          kind: "fill",
          q: "Long hours of typing can cause repetitive ___ injury in the wrists.",
          answer: ["strain"],
          explain: "Repetitive strain injury (RSI) comes from the same movements done for long periods.",
        },
        {
          kind: "mcq",
          q: "Which is an example of sensitive personal data?",
          options: ["Fingerprint (biometric) data", "The name of your school", "Today's weather", "A public news article"],
          answer: 0,
          explain: "Biometric, health, financial and password data are sensitive and need the strongest protection.",
        },
        {
          kind: "mcq",
          q: "Which choice for an old but working phone is best for the environment?",
          options: ["Reuse it by donating or reselling", "Throw it in the dustbin", "Burn it", "Bury it"],
          answer: 0,
          explain: "Reuse keeps the device in service; dustbin, burning and burying release toxins.",
        },
      ],
    },
    {
      slug: "board-practice",
      title: "Board practice: Society, Law and Ethics",
      summary: "Mixed board-style questions and case studies on footprints, netiquette, IPR, licences, cyber crime, malware, the IT Act, e-waste and health.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "This chapter is mostly 1- and 2-mark theory plus 3- or 4-mark **case-based** questions. In a case, first name the issue (e.g. \"this is phishing\"), then say why, then give the remedy or the law.",
        },
        {
          type: "example",
          title: "Case study (4 marks)",
          problem: "Rahul finds that a stranger has created a fake profile with his photos and is sending rude messages to his friends. Meanwhile his laptop shows pop-up adverts, and a file named \"marks_list.exe\" arrived by e-mail from an unknown sender. (a) Name the crime in the fake profile. (b) What is the pop-up problem? (c) Should he open the file? (d) Where can he report?",
          steps: [
            "(a) Posing as Rahul using his details is **identity theft** (impersonation); the rude messages are also **cyber bullying**.",
            "(b) Unwanted pop-up adverts point to **adware**; scan with updated anti-malware.",
            "(c) No. An unexpected .exe from an unknown sender is likely a **Trojan or virus**; delete it.",
            "(d) Report the profile to the platform and the crime on cybercrime.gov.in; tell a trusted adult. Keep screenshots as evidence.",
          ],
          answer: "(a) Identity theft and cyber bullying (b) Adware (c) No — likely malware (d) The platform, cybercrime.gov.in, and a trusted adult; save evidence.",
        },
        {
          type: "example",
          title: "Short answers (2 marks each)",
          problem: "(i) Give one difference between a virus and a worm. (ii) Give one difference between GPL and Apache licences. (iii) Give two net etiquettes.",
          steps: [
            "(i) A virus needs a host file to spread; a worm spreads on its own across networks.",
            "(ii) GPL is copyleft (distributed changes must stay GPL); Apache is permissive (can be used in closed-source products with notices kept).",
            "(iii) Be respectful of others' privacy and views; do not feed the troll. (Others: be ethical, share expertise, avoid cyber bullying.)",
          ],
          answer: "Any correct pair of points earns full marks; one example each makes the answer stronger.",
        },
        {
          type: "mistake",
          wrong: "Deleting a post removes it from the Internet completely.",
          right: "Copies, screenshots, caches and archives may survive. Digital footprints are hard to erase, so think before posting.",
          why: "The post disappears from your profile, so it feels gone. But others may already have saved or shared it.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A student downloads a paid movie from a pirate website. Which IPR violation is this?",
              options: ["Copyright infringement", "Trademark infringement", "Patent infringement", "Plagiarism"],
              answer: 0,
              explain: "Using a copyrighted work without the owner's permission or payment is copyright infringement.",
            },
            {
              kind: "mcq",
              q: "Which is passive data collection?",
              options: ["A shopping site noting what you viewed", "Writing a review", "Uploading a selfie", "Sending a message"],
              answer: 0,
              explain: "Viewing history is recorded without you actively sharing it.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each situation to its correct term.",
            pairs: [
              ["Fake lottery e-mail asking for bank details", "Phishing"],
              ["Data locked until a payment is made", "Ransomware"],
              ["Repeated threatening messages to a classmate", "Cyber bullying"],
              ["Secretly recording keystrokes", "Keylogger"],
              ["Old monitors dumped in a landfill", "Improper e-waste disposal"],
            ],
            explain: "Naming the issue correctly is the first mark in every case-based answer.",
          },
        },
        {
          type: "table",
          headers: ["Asked", "Points to write"],
          rows: [
            ["Ways to avoid plagiarism", "Cite the source, use quotation marks, paraphrase in your own words."],
            ["Ways to stay safe online", "Strong unique passwords, 2FA, https, no OTP sharing, log out, updates, back-ups."],
            ["Purposes of the IT Act", "Legal status of e-records and digital signatures; penalties for cyber crimes."],
            ["E-waste management", "Reduce, reuse, recycle via authorised recyclers; EPR."],
            ["Health tips", "Posture, breaks, 20-20-20 rule, screen-time limits."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Use the exact terms: *active/passive digital footprint*, *netizen*, *copyleft*, *Trojan horse*, *Extended Producer Responsibility*. Examiners look for the keyword before the explanation. Avoid one-word answers in 2-mark questions: give the term, a one-line meaning and an example.",
        },
        {
          type: "keypoints",
          items: [
            "Case answers: name the issue, explain, give the remedy or reporting route.",
            "Piracy is copyright infringement; copying without credit is plagiarism.",
            "Unknown attachments, especially .exe files, are a malware risk.",
            "Deleted posts may survive; think before you post.",
          ],
        },
      ],
      flashcards: [
        { front: "First step in a case-based answer", back: "Name the issue with the exact term (e.g. phishing, identity theft)." },
        { front: "Piracy", back: "Copying or distributing copyrighted software, films or music without permission: copyright infringement." },
        { front: "Ways to avoid plagiarism", back: "Cite sources, quote exactly, paraphrase in your own words." },
        { front: "Evidence of cyber bullying", back: "Keep screenshots and messages; report to the platform, a trusted adult and cybercrime.gov.in." },
        { front: "Why avoid unknown .exe attachments?", back: "They can install viruses, Trojans or ransomware when opened." },
        { front: "Two purposes of the IT Act, 2000", back: "Legal recognition of electronic records and digital signatures; punishment of cyber crimes." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Posting a classmate's private photo online without consent mainly violates their…",
          options: ["Privacy", "Patent", "Trademark", "Bandwidth"],
          answer: 0,
          explain: "Sharing someone's personal images without consent is a privacy violation and may be punishable.",
        },
        {
          kind: "truefalse",
          q: "Creative Commons licences are mainly used for creative works such as images, text and music.",
          answer: true,
          explain: "CC licences suit creative content; GPL and Apache are mainly for software.",
        },
        {
          kind: "mcq",
          q: "Which statement about a Trojan horse is correct?",
          options: ["It pretends to be useful software", "It copies itself across networks without a host", "It only shows adverts", "It is a hardware device"],
          answer: 0,
          explain: "A Trojan is disguised as something useful. Self-spreading without a host describes a worm.",
        },
        {
          kind: "multi",
          q: "Which are good practices on a shared (cyber café) computer?",
          options: ["Use private browsing", "Log out of every account", "Let the browser save your password", "Clear the browsing history"],
          answers: [0, 1, 3],
          explain: "Saving passwords on a shared computer lets the next user into your accounts.",
        },
        {
          kind: "fill",
          q: "A responsible citizen of the digital society is called a ___.",
          answer: ["netizen", "digital citizen"],
          explain: "Netizen = net + citizen.",
        },
        {
          kind: "mcq",
          q: "Which IPR would a company use to protect a new, non-obvious manufacturing process?",
          options: ["Patent", "Copyright", "Trademark", "Creative Commons"],
          answer: 0,
          explain: "Inventions and new processes are protected by patents.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a sign of good communication etiquette?",
          options: ["Typing in ALL CAPITALS to make a point", "Keeping messages short and clear", "Being polite to people you disagree with", "Checking facts before sharing"],
          answer: 0,
          explain: "All capitals reads as shouting online. The others follow the precise, polite and credible rules.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [flowOfControl, strings, lists, tuplesDicts, modules, society];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Flow of Control": "c11-cs-flow-of-control",
  "11:Strings": "c11-cs-strings",
  "11:Lists": "c11-cs-lists",
  "11:Tuples and Dictionaries": "c11-cs-tuples-dictionaries",
  "11:Python Modules": "c11-cs-python-modules",
  "11:Society, Law and Ethics": "c11-cs-society-law-ethics",
};
