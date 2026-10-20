import type { Subject } from "@/content/types";

const r = String.raw;

export const python: Subject = {
  slug: "python",
  title: "Python",
  world: "code",
  icon: "🐍",
  colors: ["#3776AB", "#FFD43B"],
  tagline: "The friendly language behind AI, data science and automation.",
  description:
    "Learn Python by doing: every example runs right in your browser. Start with print() and variables, then work up through loops, functions, lists and dictionaries, error handling, classes and the standard library — with auto-graded challenges along the way.",
  levels: ["Beginner", "Intermediate"],
  stages: ["secondary", "ug", "pg", "lifelong"],
  topics: [
    /* ------------------------------------------------------------------ */
    /* TOPIC 1 — BASICS                                                    */
    /* ------------------------------------------------------------------ */
    {
      slug: "python-basics",
      title: "Python Basics",
      icon: "🚀",
      description: "Print things, store values in variables, and bend text to your will.",
      lessons: [
        {
          slug: "hello-python",
          title: "Hello, Python!",
          summary: "Write your first program with print(), add comments, and learn why indentation and capital letters matter.",
          minutes: 8,
          xp: 20,
          blocks: [
            {
              type: "text",
              md: "Python is the language data scientists use to train AI models, scientists use to crunch telescope data, and hobbyists use to automate boring chores. Its secret? Code that reads almost like English.\n\nEvery Python journey begins with one line. Press **Run** below and watch the output appear.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Your very first program",
              code: r`print("Hello, Quest Academy!")`,
            },
            {
              type: "text",
              md: "`print()` is a **function** — a named command that does a job. Whatever you put inside the brackets gets shown on screen. Text must sit inside quotes (single `'...'` or double `\"...\"`, both work). Numbers don't need quotes.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Text, numbers and maths",
              code: r`print('Single quotes work too')
print(42)
print(7 + 3)
print("7 + 3")`,
            },
            {
              type: "callout",
              tone: "note",
              title: "Spot the difference",
              md: "`print(7 + 3)` shows **10** because Python does the maths first. `print(\"7 + 3\")` shows the characters **7 + 3** exactly, because anything in quotes is just text.",
            },
            { type: "heading", text: "Printing several things at once" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Commas add a space between items; sep and end change the glue",
              code: r`print("Level", 3, "unlocked")
print("2026", "10", "20", sep="-")
print("Loading", end="...")
print("done!")`,
            },
            {
              type: "text",
              md: "By default `print()` puts a space between items (`sep=\" \"`) and a new line at the end (`end` is a line break). Changing `end` lets the next print continue on the same line.",
            },
            { type: "heading", text: "Comments: notes for humans" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`# This whole line is a comment - Python skips it
print("Comments are ignored")  # this part is ignored too
# print("This line will NOT run")`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: Python is picky",
              md: "**Case matters**: `Print(\"hi\")` fails because the function is called `print`, all lowercase.\n\n**Indentation matters**: don't put spaces at the start of a line unless Python expects a block (you'll meet those with `if` and loops). An unexpected indent causes an `IndentationError`.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `print(\"5\", 5, sep=\"|\")` display?",
                  options: ["5 5", "5|5", "55", "\"5\"|5"],
                  answer: 1,
                  explain: "`sep` replaces the default space between items, so you get `5|5`. The quotes are not printed.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`print()` shows values on screen; text goes in quotes.",
                "Commas separate items; `sep=` and `end=` control spacing and line endings.",
                "`#` starts a comment that Python ignores.",
                "Python is case-sensitive and cares about indentation.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `print()` do?", back: "Displays the values inside its brackets as output." },
            { front: "How do you write a comment in Python?", back: "Start it with `#`. Everything after `#` on that line is ignored." },
            { front: "What does `end=\"\"` do in print?", back: "Stops print from adding a new line, so the next output continues on the same line." },
            { front: "Is `Print` the same as `print`?", back: "No. Python is case-sensitive; only lowercase `print` exists." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which line prints the number ten?",
              options: ["`print(\"5 + 5\")`", "`print(5 + 5)`", "`Print(5 + 5)`", "`print 5 + 5`"],
              answer: 1,
              explain: "Without quotes Python evaluates `5 + 5` to 10. Option C has a capital P and option D is missing brackets.",
            },
            {
              kind: "truefalse",
              q: "A line that starts with `#` is executed by Python.",
              answer: false,
              explain: "`#` marks a comment. Python skips it entirely.",
            },
            {
              kind: "fill",
              q: "To print `a-b-c` you can write `print(\"a\", \"b\", \"c\", ___=\"-\")`.",
              answer: ["sep"],
              explain: "`sep` sets the separator placed between items.",
            },
            {
              kind: "multi",
              q: "Which of these would cause an error?",
              options: ["`PRINT(\"hi\")`", "`print('hi')`", "`print(\"hi')`", "`print(3)`"],
              answers: [0, 2],
              explain: "`PRINT` is not a defined name, and `\"hi'` opens with a double quote but closes with a single one.",
            },
          ],
        },
        {
          slug: "variables-and-types",
          title: "Variables & Data Types",
          summary: "Store values in named boxes, meet int, float, str and bool, and convert between them.",
          minutes: 12,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A game needs to remember your score, your name and whether you've found the secret key. Programs remember things with **variables**: names that point to values.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Create a variable with = (read it as 'gets')",
              code: r`player = "Asha"
score = 120
print(player, "has", score, "points")

score = score + 30   # update it
print("New score:", score)`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "No input() in this playground",
              md: "In a desktop Python you might ask the user to type with `input()`. Here in the browser, just set your values directly in a variable — then change them and re-run.",
            },
            { type: "heading", text: "The four core types" },
            {
              type: "table",
              headers: ["Type", "What it holds", "Example"],
              rows: [
                ["`int`", "Whole numbers", "`42`, `-7`, `0`"],
                ["`float`", "Numbers with a decimal point", "`3.14`, `2.0`"],
                ["`str`", "Text (a string of characters)", "`\"hello\"`"],
                ["`bool`", "Truth values", "`True`, `False`"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "type() tells you what you're holding",
              code: r`print(type(42))
print(type(3.14))
print(type("42"))
print(type(True))`,
            },
            { type: "heading", text: "Arithmetic operators" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`print(7 + 2)   # 9   add
print(7 - 2)   # 5   subtract
print(7 * 2)   # 14  multiply
print(7 / 2)   # 3.5 divide (always a float)
print(7 // 2)  # 3   floor division
print(7 % 2)   # 1   remainder (modulo)
print(2 ** 10) # 1024 power`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "Handy trick",
              md: "`n % 2 == 0` tells you whether a number is even. Modulo is also how clocks work: 15 hours after 10 o'clock is `(10 + 15) % 12` = 1 o'clock.",
            },
            { type: "heading", text: "Converting between types" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`age_text = "16"
age = int(age_text)      # str -> int
print(age + 1)

price = float("49.99")   # str -> float
print(price * 2)

label = "Level " + str(5) # int -> str
print(label)`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: text + number",
              md: "`\"Level \" + 5` raises a `TypeError` — Python won't guess whether you meant maths or text. Convert first with `str(5)`, or use an f-string (next lesson).",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: floats are approximate",
              md: "`0.1 + 0.2` prints `0.30000000000000004`. Computers store decimals in binary, so tiny rounding errors appear. Use `round(x, 2)` when showing money or measurements.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`print(0.1 + 0.2)
print(round(0.1 + 0.2, 2))`,
            },
            { type: "heading", text: "Naming rules" },
            {
              type: "list",
              items: [
                "Letters, digits and underscores only: `high_score`, `level2`.",
                "Can't start with a digit: `2players` is invalid.",
                "Case-sensitive: `Score` and `score` are different variables.",
                "Python style is `snake_case` — lowercase words joined by underscores.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What does `17 % 5` evaluate to?",
                  answer: 2,
                  explain: "17 = 3 × 5 + 2, so the remainder is 2.",
                },
                {
                  kind: "mcq",
                  q: "What is `type(10 / 2)`?",
                  options: ["`int`", "`float`", "`str`", "`bool`"],
                  answer: 1,
                  explain: "The `/` operator always returns a float — here `5.0`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`name = value` creates or updates a variable.",
                "Core types: `int`, `float`, `str`, `bool`; check with `type()`.",
                "`/` gives a float, `//` floors, `%` gives the remainder, `**` is power.",
                "Convert with `int()`, `float()`, `str()`.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `//` do?", back: "Floor division: divides and rounds down to a whole number. `7 // 2` is `3`." },
            { front: "What does `%` return?", back: "The remainder of a division. `10 % 3` is `1`." },
            { front: "How do you turn the string `\"8\"` into a number?", back: "`int(\"8\")` (or `float(\"8\")` for a decimal)." },
            { front: "Name Python's two boolean values.", back: "`True` and `False` — capitalised." },
            { front: "Why is `0.1 + 0.2` not exactly `0.3`?", back: "Floats are stored in binary and can't represent some decimals exactly." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What does `2 ** 5` evaluate to?",
              answer: 32,
              explain: "`**` is exponentiation: 2 × 2 × 2 × 2 × 2 = 32.",
            },
            {
              kind: "mcq",
              q: "Which is a valid variable name?",
              options: ["`2fast`", "`top-score`", "`top_score`", "`top score`"],
              answer: 2,
              explain: "Names can't start with a digit or contain hyphens or spaces. `top_score` follows the rules.",
            },
            {
              kind: "truefalse",
              q: "`\"3\" + \"4\"` evaluates to `\"34\"`.",
              answer: true,
              explain: "Adding two strings joins (concatenates) them.",
            },
            {
              kind: "numeric",
              q: "What does `-7 // 2` evaluate to?",
              answer: -4,
              explain: "Floor division rounds **down** towards negative infinity: -3.5 becomes -4.",
              difficulty: 3,
            },
          ],
          challenge: {
            title: "Fever check",
            prompt:
              "A thermometer reads `celsius = 37`. Create a variable `fahrenheit` using the formula **F = C × 9 / 5 + 32**, then print it. Bonus: the printed value should be rounded to 1 decimal place.",
            lang: "python",
            starter: r`celsius = 37
# create fahrenheit below, then print it
`,
            tests: [
              { label: "fahrenheit exists and is about 98.6", check: "abs(fahrenheit - 98.6) < 0.01" },
              { label: "celsius is still 37", check: "celsius == 37" },
              { label: "98.6 is printed", check: "'98.6' in __stdout" },
            ],
            solution: r`celsius = 37
fahrenheit = celsius * 9 / 5 + 32
print(round(fahrenheit, 1))`,
            hints: [
              "Write the formula exactly as given: `celsius * 9 / 5 + 32`.",
              "Use `round(fahrenheit, 1)` inside `print()` to tidy the output.",
            ],
          },
        },
        {
          slug: "strings",
          title: "Working with Strings",
          summary: "Index, slice and transform text, and build messages with f-strings.",
          minutes: 14,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Usernames, tweets, DNA sequences, passwords — so much data is text. In Python, text lives in **strings**, and they come packed with superpowers.",
            },
            { type: "heading", text: "Indexing: grab one character" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Positions start at 0; negative positions count from the end",
              code: r`word = "Python"
print(word[0])    # P
print(word[3])    # h
print(word[-1])   # n  (last)
print(len(word))  # 6`,
            },
            {
              type: "table",
              headers: ["P", "y", "t", "h", "o", "n"],
              rows: [
                ["0", "1", "2", "3", "4", "5"],
                ["-6", "-5", "-4", "-3", "-2", "-1"],
              ],
            },
            { type: "heading", text: "Slicing: grab a chunk" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "word[start:stop] — stop is NOT included",
              code: r`word = "Python"
print(word[0:2])   # Py
print(word[2:])    # thon
print(word[:4])    # Pyth
print(word[::-1])  # nohtyP  (reversed!)`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Remember the fence posts",
              md: "In `word[1:4]` you get positions 1, 2 and 3 — that's `4 - 1 = 3` characters. The stop index is where you stop, not the last one you take.",
            },
            { type: "heading", text: "Useful string methods" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`msg = "  Hello, World  "
print(msg.strip())            # remove outer spaces
print(msg.lower())
print(msg.upper())
print(msg.replace("World", "Python"))
print("hello" in msg.lower()) # True`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "split() breaks text into a list; join() glues a list together",
              code: r`csv = "red,green,blue"
colours = csv.split(",")
print(colours)
print(" & ".join(colours))
print("ada lovelace".title())`,
            },
            { type: "heading", text: "f-strings: the modern way to build text" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Put an f before the quotes, then drop variables in {braces}",
              code: r`name = "Ravi"
coins = 7
price = 2.5
print(f"{name} has {coins} coins")
print(f"Total cost: {coins * price}")
print(f"Pi to 2 places: {3.14159:.2f}")`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: strings are immutable",
              md: "You can't change a string in place: `word[0] = \"J\"` raises a `TypeError`. Instead, build a new string: `word = \"J\" + word[1:]`. Methods like `.upper()` also return a **new** string — the original stays the same unless you reassign it.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`word = "Python"
word.upper()          # result thrown away!
print(word)           # still Python
word = word.upper()   # reassign to keep it
print(word)`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "`\"Quest\"[1:3]` evaluates to `\"___\"`.",
                  answer: ["ue"],
                  explain: "Positions 1 and 2 are `u` and `e`; position 3 is excluded.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Index from 0; `-1` is the last character; `len()` counts characters.",
                "Slices `s[start:stop:step]` exclude `stop`; `s[::-1]` reverses.",
                "Methods: `strip`, `lower`, `upper`, `title`, `replace`, `split`, `join`.",
                "f-strings: `f\"Hi {name}\"`, with formats like `{x:.2f}`.",
                "Strings are immutable — reassign to keep changes.",
              ],
            },
          ],
          flashcards: [
            { front: "What is `\"hello\"[-1]`?", back: "`\"o\"` — negative indexes count from the end." },
            { front: "How do you reverse a string `s`?", back: "`s[::-1]`" },
            { front: "What does `\"a b c\".split()` return?", back: "The list `['a', 'b', 'c']`." },
            { front: "How do you show a float with 2 decimals in an f-string?", back: "`f\"{value:.2f}\"`" },
            { front: "Can you change one character of a string in place?", back: "No — strings are immutable. Build a new string instead." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is `\"banana\".replace(\"a\", \"o\")`?",
              options: ["`\"bonana\"`", "`\"bonono\"`", "`\"banana\"`", "An error"],
              answer: 1,
              explain: "`replace` changes **every** occurrence by default.",
            },
            {
              kind: "numeric",
              q: "What is `len(\"Hi there!\")`?",
              answer: 9,
              explain: "H, i, space, t, h, e, r, e, ! — spaces and punctuation count.",
            },
            {
              kind: "truefalse",
              q: "After `s = \"cat\"` and `s.upper()`, the variable `s` holds `\"CAT\"`.",
              answer: false,
              explain: "`upper()` returns a new string. Without `s = s.upper()`, `s` is unchanged.",
            },
            {
              kind: "mcq",
              q: "Which prints `Score: 95`?",
              options: ["`print(\"Score: {s}\")`", "`print(f\"Score: {s}\")`", "`print(f'Score: s')`", "`print(\"Score: \" + s)`"],
              answer: 1,
              explain: "Only an f-string substitutes `{s}`. Option D fails if `s` is an int.",
            },
          ],
          challenge: {
            title: "Name tag tidy-up",
            prompt:
              "A sign-up form saved `name = \"  ada LOVELACE \"`. Create:\n\n1. `clean` — the name with outer spaces removed and each word capitalised (`\"Ada Lovelace\"`).\n2. `initials` — the first letter of each word, uppercase (`\"AL\"`).\n3. Print `Welcome, Ada Lovelace!` using an f-string.",
            lang: "python",
            starter: r`name = "  ada LOVELACE "
clean = ""
initials = ""
`,
            tests: [
              { label: "clean is 'Ada Lovelace'", check: "clean == 'Ada Lovelace'" },
              { label: "initials is 'AL'", check: "initials == 'AL'" },
              { label: "Welcome message printed", check: "'Welcome, Ada Lovelace!' in __stdout" },
            ],
            solution: r`name = "  ada LOVELACE "
clean = name.strip().title()
parts = clean.split()
initials = parts[0][0] + parts[1][0]
print(f"Welcome, {clean}!")`,
            hints: [
              "Chain methods: `name.strip().title()`.",
              "`clean.split()` gives `['Ada', 'Lovelace']`; take index `[0]` of each word.",
              "f-string: `f\"Welcome, {clean}!\"`",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 2 — CONTROL FLOW                                              */
    /* ------------------------------------------------------------------ */
    {
      slug: "control-flow",
      title: "Decisions & Loops",
      icon: "🔀",
      description: "Make your programs choose with if/elif/else and repeat work with for and while.",
      lessons: [
        {
          slug: "conditionals",
          title: "If, Elif, Else",
          summary: "Compare values, combine conditions with and/or/not, and branch your code.",
          minutes: 12,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A traffic light, a vending machine, a game deciding if you levelled up — all of them make **decisions**. In Python, decisions start with `if`.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "The colon and the indented block are essential",
              code: r`temperature = 31

if temperature > 30:
    print("It's hot - grab some water!")
    print("This line is also inside the if")
print("This line always runs")`,
            },
            { type: "heading", text: "Comparison operators" },
            {
              type: "table",
              headers: ["Operator", "Meaning", "Example → result"],
              rows: [
                ["`==`", "equal to", "`5 == 5` → `True`"],
                ["`!=`", "not equal to", "`5 != 3` → `True`"],
                ["`>` / `<`", "greater / less than", "`2 > 9` → `False`"],
                ["`>=` / `<=`", "at least / at most", "`7 >= 7` → `True`"],
              ],
            },
            { type: "heading", text: "elif and else" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Python checks top to bottom and runs the FIRST branch that's true",
              code: r`marks = 82

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Keep practising!")`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Order matters",
              md: "If you checked `marks >= 50` first, an 82 would get a C and stop there. Put the strictest condition at the top.",
            },
            { type: "heading", text: "Combining conditions" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`age = 15
has_ticket = True

if age >= 12 and has_ticket:
    print("Enjoy the movie!")

if age < 5 or age > 60:
    print("Discount applies")
else:
    print("Standard price")

if not has_ticket:
    print("Please buy a ticket")`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Python lets you chain comparisons like maths",
              code: r`x = 7
print(1 <= x <= 10)   # True: x is between 1 and 10`,
            },
            { type: "heading", text: "Truthiness and one-line ifs" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Empty values count as False; most others as True",
              code: r`print(bool(0), bool(""), bool([]))     # False False False
print(bool(3), bool("hi"), bool([1]))  # True True True

lives = 0
status = "alive" if lives > 0 else "game over"
print(status)`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: = vs ==",
              md: "`=` **assigns** a value; `==` **compares** two values. Writing `if score = 10:` is a `SyntaxError`. Also watch out: `bool(\"0\")` is `True` — it's a non-empty string!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "With `n = 0`, what does `print(\"yes\" if n else \"no\")` show?",
                  options: ["yes", "no", "0", "Error"],
                  answer: 1,
                  explain: "`0` is falsy, so the `else` value `\"no\"` is used.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`if condition:` followed by an indented block.",
                "`elif` adds more checks; `else` catches everything left.",
                "Combine with `and`, `or`, `not`; chain like `1 <= x <= 10`.",
                "`0`, `\"\"`, `[]`, `None` are falsy.",
                "`=` assigns, `==` compares.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `elif` mean?", back: "\"else if\" — another condition checked only if earlier ones were False." },
            { front: "Which values are falsy?", back: "`False`, `0`, `0.0`, `\"\"`, `[]`, `{}`, `None` (and other empty collections)." },
            { front: "Write a one-line if/else expression.", back: "`result = \"even\" if n % 2 == 0 else \"odd\"`" },
            { front: "What does `not True` give?", back: "`False`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "In an if/elif/else chain, more than one branch can run.",
              answer: false,
              explain: "Only the first true branch runs; the rest are skipped.",
            },
            {
              kind: "mcq",
              q: "What is `True and False or True`?",
              options: ["`True`", "`False`", "Error", "`None`"],
              answer: 0,
              explain: "`and` binds tighter: `(True and False)` is `False`, then `False or True` is `True`.",
              difficulty: 2,
            },
            {
              kind: "multi",
              q: "Which expressions are `True` when `x = 4`?",
              options: ["`x > 2 and x < 5`", "`x == 4 or x == 5`", "`not x`", "`3 < x < 4`"],
              answers: [0, 1],
              explain: "`not 4` is `False` (4 is truthy) and 4 is not strictly less than 4.",
            },
            {
              kind: "fill",
              q: "The keyword used for the 'otherwise' branch is `___`.",
              answer: ["else"],
              explain: "`else:` runs when no earlier condition was true.",
            },
          ],
          challenge: {
            title: "Ticket booth",
            prompt:
              "A cinema charges by age. With the variable `age` set, create `price`:\n\n- under 3 → `0`\n- 3 to 12 → `150`\n- 13 to 59 → `250`\n- 60 and over → `120`\n\nThen print `Price: <price>`. Starter uses `age = 65`.",
            lang: "python",
            starter: r`age = 65
`,
            tests: [
              { label: "price is 120 for age 65", check: "price == 120" },
              { label: "prints the price", check: "'Price: 120' in __stdout" },
            ],
            solution: r`age = 65
if age < 3:
    price = 0
elif age <= 12:
    price = 150
elif age <= 59:
    price = 250
else:
    price = 120
print(f"Price: {price}")`,
            hints: [
              "Start with the youngest group and work upwards using `elif`.",
              "The final group (60+) can just be `else`.",
            ],
          },
        },
        {
          slug: "loops",
          title: "For & While Loops",
          summary: "Repeat code with for, range() and while, and steer loops with break and continue.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Printing 1 to 1,000 by hand would take an hour. With a loop it takes two lines. Loops are how programs do boring, repetitive work at lightning speed.",
            },
            { type: "heading", text: "for loops" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Loop over every item in a collection",
              code: r`fruits = ["mango", "apple", "kiwi"]
for fruit in fruits:
    print("I like", fruit)

for letter in "hey":
    print(letter)`,
            },
            { type: "heading", text: "range(): counting made easy" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`for i in range(5):          # 0 1 2 3 4
    print(i, end=" ")
print()
for i in range(2, 6):       # 2 3 4 5
    print(i, end=" ")
print()
for i in range(10, 0, -3):  # 10 7 4 1
    print(i, end=" ")`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: the stop value is excluded",
              md: "`range(1, 10)` gives 1 to **9**. To include 10, write `range(1, 11)`. Same rule as slicing!",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Running totals: a classic loop pattern",
              code: r`total = 0
for n in range(1, 101):
    total += n        # same as total = total + n
print("1 + 2 + ... + 100 =", total)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "enumerate() gives you the position AND the item",
              code: r`podium = ["Mei", "Arjun", "Zara"]
for place, name in enumerate(podium, start=1):
    print(place, name)`,
            },
            { type: "heading", text: "while loops" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Repeat while a condition stays True",
              code: r`fuel = 3
while fuel > 0:
    print("Flying... fuel =", fuel)
    fuel -= 1
print("Landing!")`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: infinite loops",
              md: "If nothing inside a `while` loop ever makes the condition `False`, it runs forever and your tab freezes. Always make sure something changes — here, `fuel -= 1`.",
            },
            { type: "heading", text: "break and continue" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`for n in range(1, 10):
    if n == 6:
        break        # leave the loop completely
    if n % 2 == 0:
        continue     # skip to the next n
    print(n)`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many times does `for i in range(3, 12, 2):` run?",
                  answer: 5,
                  explain: "It produces 3, 5, 7, 9, 11 — five values.",
                },
                {
                  kind: "mcq",
                  q: "What does `continue` do?",
                  options: ["Ends the program", "Exits the loop", "Skips to the next iteration", "Repeats the current iteration"],
                  answer: 2,
                  explain: "`continue` jumps straight to the next round of the loop; `break` exits it.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`for item in collection:` visits each item in turn.",
                "`range(start, stop, step)` — stop is excluded.",
                "`while condition:` repeats until the condition is False.",
                "`break` exits a loop; `continue` skips to the next round.",
                "`enumerate()` gives index + item together.",
              ],
            },
          ],
          flashcards: [
            { front: "What numbers does `range(4)` produce?", back: "0, 1, 2, 3" },
            { front: "Difference between `break` and `continue`?", back: "`break` leaves the loop; `continue` skips the rest of this iteration." },
            { front: "What is `total += 5` short for?", back: "`total = total + 5`" },
            { front: "When should you prefer `while` over `for`?", back: "When you don't know in advance how many repetitions you need — loop until a condition changes." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is printed by: `t = 0` then `for i in range(1, 5): t += i` then `print(t)`?",
              answer: 10,
              explain: "1 + 2 + 3 + 4 = 10. The stop value 5 is excluded.",
            },
            {
              kind: "order",
              q: "Put the output of `for i in range(10, 0, -4): print(i)` in order.",
              items: ["10", "6", "2"],
              explain: "Start at 10 and step by -4 while staying above 0: 10, 6, 2.",
            },
            {
              kind: "truefalse",
              q: "A `while` loop always runs at least once.",
              answer: false,
              explain: "If the condition is False at the start, the body never runs.",
            },
            {
              kind: "mcq",
              q: "Which loop prints 1 to 5 inclusive?",
              options: ["`for i in range(5)`", "`for i in range(1, 5)`", "`for i in range(1, 6)`", "`for i in range(0, 5, 1)`"],
              answer: 2,
              explain: "`range(1, 6)` stops before 6, giving 1–5.",
            },
          ],
          challenge: {
            title: "FizzBuzz",
            prompt:
              "The classic interview warm-up! Print the numbers **1 to 15**, one per line, but:\n\n- multiples of 3 print `Fizz`\n- multiples of 5 print `Buzz`\n- multiples of both print `FizzBuzz`",
            lang: "python",
            starter: r`for n in range(1, 16):
    # your logic here
    print(n)
`,
            tests: [
              { label: "15 lines printed", check: "len(__stdout.split()) == 15" },
              { label: "3 prints Fizz, 5 prints Buzz", check: "__stdout.split()[2] == 'Fizz' and __stdout.split()[4] == 'Buzz'" },
              { label: "15 prints FizzBuzz", check: "__stdout.split()[14] == 'FizzBuzz'" },
              {
                label: "every line is correct",
                check: "__stdout.split() == [('Fizz' * (i % 3 == 0) + 'Buzz' * (i % 5 == 0)) or str(i) for i in range(1, 16)]",
              },
            ],
            solution: r`for n in range(1, 16):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)`,
            hints: [
              "Use `%` to test divisibility: `n % 3 == 0`.",
              "Check the 'both' case (divisible by 15) **first**, or it will never be reached.",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 3 — FUNCTIONS                                                 */
    /* ------------------------------------------------------------------ */
    {
      slug: "functions",
      title: "Functions",
      icon: "🧩",
      description: "Package code into reusable, testable building blocks.",
      lessons: [
        {
          slug: "defining-functions",
          title: "Defining Functions",
          summary: "Write functions with def, pass in parameters, and send results back with return.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "You've already used functions others wrote: `print()`, `len()`, `round()`. Now you'll write your own. A function is a **recipe**: give it a name once, then cook it as often as you like.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "def name(parameters):  then an indented body",
              code: r`def greet(name):
    print(f"Hi {name}, welcome aboard!")

greet("Lena")
greet("Kofi")`,
            },
            { type: "heading", text: "return: hand a value back" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def area(width, height):
    return width * height

room = area(4, 3)
print("Room area:", room)
print("Two rooms:", area(4, 3) + area(5, 2))`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: print is not return",
              md: "`print` shows a value to a human; `return` gives it back to the code. A function with no `return` returns `None`, so `x = greet(\"Lena\")` leaves `x` as `None`. If you need to use the result later, **return** it.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def shout_print(word):
    print(word.upper())

def shout_return(word):
    return word.upper()

a = shout_print("hey")
b = shout_return("hey")
print("a is", a)
print("b is", b)`,
            },
            { type: "heading", text: "Default parameter values" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def power(base, exponent=2):
    return base ** exponent

print(power(5))      # uses default 2 -> 25
print(power(2, 8))   # 256`,
            },
            { type: "heading", text: "return ends the function early" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def is_even(n):
    """Return True if n is even."""
    if n % 2 == 0:
        return True
    return False      # only reached if n is odd

print(is_even(10), is_even(7))`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Shorter is sweeter",
              md: "Comparisons already produce booleans, so `is_even` can simply be `return n % 2 == 0`. The triple-quoted line under `def` is a **docstring** — a built-in description of what the function does.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does a function return if it has no `return` statement?",
                  options: ["`0`", "`\"\"`", "`None`", "An error"],
                  answer: 2,
                  explain: "Python functions return `None` by default.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Define with `def name(params):` and an indented body.",
                "`return value` sends a result back and exits immediately.",
                "No `return` → the function returns `None`.",
                "Defaults like `exponent=2` make parameters optional.",
              ],
            },
          ],
          flashcards: [
            { front: "Keyword that starts a function definition?", back: "`def`" },
            { front: "Parameter vs argument?", back: "A parameter is the name in the definition; an argument is the actual value passed in the call." },
            { front: "What is a docstring?", back: "A string literal right after `def` that documents the function." },
            { front: "What happens to code after `return`?", back: "It doesn't run — `return` exits the function immediately." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Given `def f(x, y=3): return x * y`, what is `f(4)`?",
              answer: 12,
              explain: "`y` defaults to 3, so 4 × 3 = 12.",
            },
            {
              kind: "truefalse",
              q: "A function can contain more than one `return` statement.",
              answer: true,
              explain: "Yes — the first one reached ends the function, as in `is_even`.",
            },
            {
              kind: "mcq",
              q: "What prints? `def f(): print(\"A\")` then `x = f()` then `print(x)`",
              options: ["A then A", "A then None", "None then A", "Only None"],
              answer: 1,
              explain: "Calling `f()` prints A; it returns `None`, which is then printed.",
            },
            {
              kind: "order",
              q: "Order the parts of a function definition.",
              items: ["def", "function name", "(parameters)", ":", "indented body"],
              explain: "`def name(params):` then the indented body.",
            },
          ],
          challenge: {
            title: "Grade calculator",
            prompt:
              "Write a function `grade(score)` that **returns** (not prints!) a letter:\n\n- 90 or more → `\"A\"`\n- 75 to 89 → `\"B\"`\n- 50 to 74 → `\"C\"`\n- below 50 → `\"F\"`",
            lang: "python",
            starter: r`def grade(score):
    pass  # replace with your code
`,
            tests: [
              { label: "grade(95) is 'A'", check: "grade(95) == 'A'" },
              { label: "boundary 90 is 'A', 89 is 'B'", check: "grade(90) == 'A' and grade(89) == 'B'" },
              { label: "75 is 'B', 50 is 'C'", check: "grade(75) == 'B' and grade(50) == 'C'" },
              { label: "49 and 0 are 'F'", check: "grade(49) == 'F' and grade(0) == 'F'" },
            ],
            solution: r`def grade(score):
    if score >= 90:
        return "A"
    elif score >= 75:
        return "B"
    elif score >= 50:
        return "C"
    return "F"`,
            hints: [
              "Reuse the if/elif/else pattern from the Conditionals lesson.",
              "Use `return \"A\"` rather than `print(\"A\")`.",
            ],
          },
        },
        {
          slug: "arguments-scope-lambdas",
          title: "Arguments, Scope & Lambdas",
          summary: "Call functions with keyword arguments, accept any number of inputs, understand scope and write tiny lambda functions.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Real-world functions take options: `sorted(names, reverse=True)`, `print(x, end=\"\")`. Let's learn the tricks that make functions flexible.",
            },
            { type: "heading", text: "Keyword arguments" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Name the argument and order no longer matters",
              code: r`def book(hotel, nights, breakfast=False):
    extra = "with" if breakfast else "without"
    print(f"{nights} nights at {hotel}, {extra} breakfast")

book("Sea View", 3)
book(nights=2, hotel="Hill Top", breakfast=True)`,
            },
            { type: "heading", text: "*args: any number of values" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def total(*prices):
    print("got", prices)       # a tuple
    return sum(prices)

print(total(10, 20, 5))
print(total())`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "**kwargs collects named extras into a dict",
              code: r`def profile(name, **details):
    print(name)
    for key, value in details.items():
        print(" ", key, "=", value)

profile("Ishaan", age=17, city="Pune")`,
            },
            { type: "heading", text: "Scope: where variables live" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`level = 1            # global

def level_up():
    level = 99       # a NEW local variable
    print("inside:", level)

level_up()
print("outside:", level)   # still 1`,
            },
            {
              type: "callout",
              tone: "note",
              title: "Keep functions self-contained",
              md: "Variables created inside a function are **local** — they vanish when the function ends and don't touch globals with the same name. Instead of reaching for the `global` keyword, pass values in as arguments and `return` results out.",
            },
            { type: "heading", text: "Lambdas: tiny one-line functions" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`square = lambda x: x * x
print(square(6))

players = [("Ana", 31), ("Bo", 45), ("Cy", 12)]
by_score = sorted(players, key=lambda p: p[1], reverse=True)
print(by_score)`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: mutable default arguments",
              md: "A default like `def add(item, bag=[])` is created **once**, so every call shares the same list and it keeps growing. Use `bag=None` and create a fresh list inside: `if bag is None: bag = []`.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def add_bad(item, bag=[]):
    bag.append(item)
    return bag

print(add_bad("a"))
print(add_bad("b"))   # surprise: ['a', 'b']

def add_good(item, bag=None):
    if bag is None:
        bag = []
    bag.append(item)
    return bag

print(add_good("a"))
print(add_good("b"))  # ['b']`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Inside `def f(*args):`, what type is `args`?",
                  options: ["list", "tuple", "dict", "set"],
                  answer: 1,
                  explain: "`*args` gathers positional arguments into a tuple.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Keyword arguments (`name=value`) can be passed in any order.",
                "`*args` → tuple of extra positional values; `**kwargs` → dict of extra named values.",
                "Variables assigned inside a function are local.",
                "`lambda x: expr` makes a small anonymous function — great as a `key=`.",
                "Never use a mutable object (list, dict) as a default value.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `**kwargs` collect?", back: "Extra keyword arguments, as a dictionary." },
            { front: "Write a lambda that adds 1 to x.", back: "`lambda x: x + 1`" },
            { front: "What is a local variable?", back: "A variable created inside a function; it exists only while the function runs." },
            { front: "Safe pattern for a list default?", back: "`def f(items=None):` then `if items is None: items = []`" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What does `(lambda a, b: a - b)(b=2, a=10)` return?",
              answer: 8,
              explain: "Keyword arguments assign `a = 10` and `b = 2`, so 10 − 2 = 8.",
            },
            {
              kind: "truefalse",
              q: "Assigning to a variable inside a function changes a global variable with the same name.",
              answer: false,
              explain: "It creates a new local variable unless you declare `global`.",
            },
            {
              kind: "mcq",
              q: "Which sorts the words by length?",
              options: ["`sorted(words, key=len)`", "`sorted(words, len)`", "`words.sort(len)`", "`sorted(len(words))`"],
              answer: 0,
              explain: "`key=` takes a function applied to each item; `len` works directly.",
            },
          ],
          challenge: {
            title: "Flexible average",
            prompt:
              "Write `average(*nums)` that returns the mean of any number of values. If it's called with **no** values, return `0` instead of crashing.",
            lang: "python",
            starter: r`def average(*nums):
    pass
`,
            tests: [
              { label: "average(2, 4, 6) is 4", check: "average(2, 4, 6) == 4" },
              { label: "average(5) is 5", check: "average(5) == 5" },
              { label: "average() is 0", check: "average() == 0" },
              { label: "average(1, 2) is 1.5", check: "average(1, 2) == 1.5" },
            ],
            solution: r`def average(*nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)`,
            hints: [
              "`nums` is a tuple — `sum(nums)` and `len(nums)` both work on it.",
              "An empty tuple is falsy, so `if not nums:` catches the no-argument case.",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 4 — COLLECTIONS                                               */
    /* ------------------------------------------------------------------ */
    {
      slug: "collections",
      title: "Lists, Dicts & Friends",
      icon: "🧺",
      description: "Store many values at once with lists, tuples, dictionaries and sets — then transform them with comprehensions.",
      lessons: [
        {
          slug: "lists-and-tuples",
          title: "Lists & Tuples",
          summary: "Create, change, slice and sort ordered collections — and know when to freeze them as tuples.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A playlist, a shopping cart, a leaderboard: all ordered collections. Python's **list** holds any number of items in order and lets you change them freely.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`playlist = ["Intro", "Sunrise", "Echoes"]
print(playlist[0], "|", playlist[-1])
print(len(playlist), "songs")

playlist.append("Finale")        # add to end
playlist.insert(1, "Warm-up")    # add at position 1
print(playlist)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Removing items",
              code: r`cart = ["pen", "book", "eraser", "book"]
cart.remove("book")    # removes the FIRST match
print(cart)
last = cart.pop()      # removes and returns the last item
print(last, cart)
del cart[0]
print(cart)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Lists are mutable: change items by index; slice like strings",
              code: r`nums = [10, 20, 30, 40, 50]
nums[1] = 25
print(nums)
print(nums[1:4])
print(30 in nums, 99 in nums)`,
            },
            { type: "heading", text: "Sorting" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`scores = [72, 95, 58, 81]
print(sorted(scores))                 # new list
print(sorted(scores, reverse=True))
print(scores)                         # unchanged
scores.sort()                         # sorts in place, returns None
print(scores)
print(max(scores), min(scores), sum(scores))`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: two names, one list",
              md: "`b = a` does **not** copy a list — both names point at the same list, so changing `b` changes `a`. Use `b = a.copy()` (or `a[:]`) for an independent copy.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`a = [1, 2, 3]
b = a
b.append(4)
print("a:", a)       # [1, 2, 3, 4] !

c = a.copy()
c.append(5)
print("a:", a, "c:", c)`,
            },
            { type: "heading", text: "Tuples: lists that can't change" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`point = (3, 7)          # round brackets
print(point[0])

x, y = point            # unpacking
print(f"x={x}, y={y}")

a, b = 1, 2
a, b = b, a             # swap in one line!
print(a, b)`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "When to pick a tuple",
              md: "Use a tuple for a fixed group that belongs together — coordinates, an RGB colour `(255, 128, 0)`, a date `(2026, 10, 20)`. Trying `point[0] = 5` raises a `TypeError`, which protects you from accidental edits.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `[3, 1, 2].sort()` return?",
                  options: ["`[1, 2, 3]`", "`[3, 2, 1]`", "`None`", "An error"],
                  answer: 2,
                  explain: "`.sort()` sorts in place and returns `None`. Use `sorted()` when you want a new list back.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Lists `[...]` are ordered and mutable: `append`, `insert`, `remove`, `pop`.",
                "`sorted()` returns a new list; `.sort()` changes the list and returns `None`.",
                "`b = a` shares one list; use `.copy()` to duplicate.",
                "Tuples `(...)` are immutable; unpack with `x, y = point`.",
              ],
            },
          ],
          flashcards: [
            { front: "Add an item to the end of list `L`?", back: "`L.append(item)`" },
            { front: "What does `L.pop()` do?", back: "Removes and returns the last item." },
            { front: "`sorted(L)` vs `L.sort()`?", back: "`sorted` returns a new list; `.sort()` sorts in place and returns `None`." },
            { front: "How do you swap `a` and `b`?", back: "`a, b = b, a`" },
            { front: "Can you change an item in a tuple?", back: "No — tuples are immutable." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "After `L = [1, 2, 3]` and `L.insert(0, 9)`, what is `L`?",
              options: ["`[9, 1, 2, 3]`", "`[1, 2, 3, 9]`", "`[9, 2, 3]`", "`[1, 9, 2, 3]`"],
              answer: 0,
              explain: "`insert(0, 9)` puts 9 at index 0, shifting everything right.",
            },
            {
              kind: "numeric",
              q: "What is `len([4, [5, 6], 7])`?",
              answer: 3,
              explain: "The inner list counts as one item.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "After `b = a` and `b.append(1)`, list `a` also contains 1.",
              answer: true,
              explain: "Both names refer to the same list object.",
            },
            {
              kind: "fill",
              q: "To get an independent copy of list `a`, write `b = a.___()`.",
              answer: ["copy"],
              explain: "`a.copy()` (or `a[:]`, or `list(a)`) makes a shallow copy.",
            },
          ],
          challenge: {
            title: "Podium finishers",
            prompt:
              "Write `top_three(scores)` that returns a **new** list with the three highest scores, highest first. Don't change the original list!",
            lang: "python",
            starter: r`def top_three(scores):
    pass
`,
            tests: [
              { label: "top_three([5, 1, 9, 7, 3]) is [9, 7, 5]", check: "top_three([5, 1, 9, 7, 3]) == [9, 7, 5]" },
              { label: "handles ties", check: "top_three([4, 4, 2, 8]) == [8, 4, 4]" },
              {
                label: "original list unchanged",
                check: "(d := [4, 8, 1, 9]) and top_three(d) == [9, 8, 4] and d == [4, 8, 1, 9]",
              },
            ],
            solution: r`def top_three(scores):
    return sorted(scores, reverse=True)[:3]`,
            hints: [
              "`sorted(..., reverse=True)` gives a new list, biggest first.",
              "Slice the first three items with `[:3]`.",
            ],
          },
        },
        {
          slug: "dicts-and-sets",
          title: "Dictionaries & Sets",
          summary: "Look things up by key with dictionaries, and keep unique items with sets.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A phone's contacts app doesn't search by position — you look up a **name** to get a **number**. That's exactly what a Python **dictionary** does: it maps keys to values.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`student = {"name": "Priya", "grade": 11, "house": "Blue"}
print(student["name"])

student["grade"] = 12        # update
student["club"] = "Robotics" # add a new key
print(student)
print(len(student), "keys")`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: missing keys",
              md: "`student[\"email\"]` raises a `KeyError` if the key doesn't exist. Use `.get()` for a safe lookup with a fallback value, or test with `\"email\" in student` first.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`student = {"name": "Priya"}
print(student.get("email"))               # None
print(student.get("email", "not set"))    # fallback
print("name" in student)                  # checks KEYS`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Looping through a dictionary",
              code: r`stock = {"apples": 12, "pears": 0, "plums": 7}
for fruit, count in stock.items():
    print(f"{fruit:>7}: {count}")

print(list(stock.keys()))
print(sum(stock.values()))`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Counting pattern: the most useful dict trick",
              code: r`votes = ["cat", "dog", "cat", "fish", "cat"]
tally = {}
for v in votes:
    tally[v] = tally.get(v, 0) + 1
print(tally)`,
            },
            { type: "heading", text: "Sets: unique items only" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`tags = {"python", "code", "python", "fun"}
print(tags)               # duplicate gone (order may vary)
tags.add("games")
print("code" in tags)

emails = ["a@x.com", "b@x.com", "a@x.com"]
print(len(set(emails)), "unique emails")`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Set maths",
              code: r`maths = {"Ana", "Ben", "Chen"}
art = {"Ben", "Dia"}
print(maths | art)   # union: in either
print(maths & art)   # intersection: in both
print(maths - art)   # difference: maths only`,
            },
            {
              type: "callout",
              tone: "note",
              title: "Sets have no order and no indexes",
              md: "`tags[0]` is an error. Also note: `{}` creates an empty **dict**; an empty set is `set()`.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `{\"a\": 1}.get(\"b\", 5)` return?",
                  options: ["`1`", "`5`", "`None`", "KeyError"],
                  answer: 1,
                  explain: "`\"b\"` isn't a key, so `.get` returns the fallback 5.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Dicts map keys to values: `d[key] = value`.",
                "`.get(key, default)` avoids `KeyError`.",
                "Loop with `for k, v in d.items():`.",
                "Sets keep unique items; `|`, `&`, `-` do union, intersection, difference.",
                "`{}` is an empty dict; `set()` is an empty set.",
              ],
            },
          ],
          flashcards: [
            { front: "How do you safely read a key that might be missing?", back: "`d.get(key, default)`" },
            { front: "What does `d.items()` give?", back: "(key, value) pairs, perfect for looping." },
            { front: "Quick way to remove duplicates from a list?", back: "`set(my_list)` (convert back with `list()` if needed)." },
            { front: "How do you make an empty set?", back: "`set()` — `{}` makes an empty dict." },
            { front: "What does `a & b` mean for sets?", back: "Intersection: items in both sets." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is `len({1, 2, 2, 3, 3, 3})`?",
              answer: 3,
              explain: "A set keeps only unique values: {1, 2, 3}.",
            },
            {
              kind: "truefalse",
              q: "`\"Priya\" in {\"name\": \"Priya\"}` is `True`.",
              answer: false,
              explain: "`in` checks keys, not values. `\"name\"` is the key.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "What is `{1, 2, 3} - {2, 4}`?",
              options: ["`{1, 3}`", "`{4}`", "`{1, 3, 4}`", "`{2}`"],
              answer: 0,
              explain: "Difference keeps items from the left set that aren't in the right.",
            },
            {
              kind: "multi",
              q: "Which statements about dictionaries are true?",
              options: ["Keys must be unique", "You access values by position, like `d[0]`", "Values can be lists", "`d[\"new\"] = 1` adds a key"],
              answers: [0, 2, 3],
              explain: "Dicts are accessed by key, not position (`d[0]` only works if 0 is a key).",
            },
          ],
          challenge: {
            title: "Word counter",
            prompt:
              "Write `word_count(text)` that returns a dictionary mapping each **lowercase** word to how many times it appears. Words are separated by spaces.\n\nExample: `word_count(\"The cat the hat\")` → `{'the': 2, 'cat': 1, 'hat': 1}`",
            lang: "python",
            starter: r`def word_count(text):
    counts = {}
    # your loop here
    return counts
`,
            tests: [
              { label: "counts repeated words", check: "word_count('the cat the hat') == {'the': 2, 'cat': 1, 'hat': 1}" },
              { label: "ignores case", check: "word_count('Hi hi HI') == {'hi': 3}" },
              { label: "empty text gives {}", check: "word_count('') == {}" },
            ],
            solution: r`def word_count(text):
    counts = {}
    for word in text.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return counts`,
            hints: [
              "`text.lower().split()` gives a list of lowercase words.",
              "Use the counting pattern: `counts[w] = counts.get(w, 0) + 1`.",
            ],
          },
        },
        {
          slug: "comprehensions",
          title: "Comprehensions",
          summary: "Build lists, dicts and sets in a single readable line.",
          minutes: 12,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Pythonistas love one trick above all: turning a four-line loop into one clear line. Meet the **comprehension**.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Loop version vs comprehension — same result",
              code: r`squares = []
for n in range(1, 6):
    squares.append(n * n)
print(squares)

squares = [n * n for n in range(1, 6)]
print(squares)`,
            },
            {
              type: "text",
              md: "Read it left to right: **what to keep** `n * n`, **for each** `n` **in** the source. Add an `if` at the end to filter.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`nums = [3, 8, 11, 14, 20, 7]
evens = [n for n in nums if n % 2 == 0]
print(evens)

names = ["  zoe ", "MAX", "liam"]
tidy = [n.strip().title() for n in names]
print(tidy)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "if/else in the OUTPUT part goes before for",
              code: r`marks = [45, 82, 67, 30]
results = ["pass" if m >= 50 else "fail" for m in marks]
print(results)`,
            },
            { type: "heading", text: "Dict and set comprehensions" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`words = ["apple", "fig", "banana"]
lengths = {w: len(w) for w in words}
print(lengths)

first_letters = {w[0] for w in words}
print(sorted(first_letters))

prices = {"tea": 20, "cake": 90}
discounted = {item: p * 0.9 for item, p in prices.items()}
print(discounted)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Generator expressions: no brackets needed inside sum(), max() and friends",
              code: r`print(sum(n * n for n in range(1, 11)))
print(max(len(w) for w in ["hi", "hello", "hey"]))
print(any(n > 10 for n in [3, 15, 2]))`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: where the if goes",
              md: "A **filter** `if` goes at the end: `[x for x in L if x > 0]`. A **choice** `if/else` goes at the front: `[x if x > 0 else 0 for x in L]`. Writing `[x for x in L if x > 0 else 0]` is a `SyntaxError`.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Readability first",
              md: "If a comprehension needs nested loops and several conditions, a regular `for` loop is often clearer. Comprehensions should make code easier to read, not harder.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is `[c.upper() for c in \"abc\" if c != \"b\"]`?",
                  options: ["`['A', 'B', 'C']`", "`['A', 'C']`", "`'AC'`", "`['a', 'c']`"],
                  answer: 1,
                  explain: "`b` is filtered out, and the rest are uppercased into a list.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`[expr for item in source]` builds a list.",
                "Filter with a trailing `if`; choose with `a if cond else b` up front.",
                "`{k: v for ...}` builds a dict; `{x for ...}` builds a set.",
                "Generator expressions work inside `sum()`, `max()`, `any()`.",
              ],
            },
          ],
          flashcards: [
            { front: "List comprehension for doubles of 1–5?", back: "`[n * 2 for n in range(1, 6)]`" },
            { front: "Where does a filtering `if` go?", back: "At the end: `[x for x in L if cond]`." },
            { front: "Dict comprehension mapping words to their lengths?", back: "`{w: len(w) for w in words}`" },
            { front: "What does `any(...)` return?", back: "`True` if at least one item is truthy." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is `sum([n for n in range(5) if n % 2 == 1])`?",
              answer: 4,
              explain: "Odd numbers in 0–4 are 1 and 3, which sum to 4.",
            },
            {
              kind: "mcq",
              q: "Which is valid Python?",
              options: [
                "`[x for x in L if x > 0 else 0]`",
                "`[x if x > 0 else 0 for x in L]`",
                "`[for x in L: x]`",
                "`[x for L in x]`",
              ],
              answer: 1,
              explain: "A conditional expression in the output part must come before `for`.",
            },
            {
              kind: "truefalse",
              q: "`{n % 3 for n in range(10)}` has 3 items.",
              answer: true,
              explain: "Remainders mod 3 are only 0, 1 and 2; a set keeps each once.",
              difficulty: 2,
            },
          ],
          challenge: {
            title: "Squares of evens",
            prompt:
              "Write `squares_of_evens(nums)` that returns a list of the squares of only the **even** numbers, in their original order — using a list comprehension.\n\nExample: `[1, 2, 3, 4]` → `[4, 16]`",
            lang: "python",
            starter: r`def squares_of_evens(nums):
    return []
`,
            tests: [
              { label: "[1, 2, 3, 4] → [4, 16]", check: "squares_of_evens([1, 2, 3, 4]) == [4, 16]" },
              { label: "keeps order and negatives", check: "squares_of_evens([10, -2, 7]) == [100, 4]" },
              { label: "empty list → []", check: "squares_of_evens([]) == []" },
            ],
            solution: r`def squares_of_evens(nums):
    return [n * n for n in nums if n % 2 == 0]`,
            hints: ["Pattern: `[expression for n in nums if condition]`.", "Even means `n % 2 == 0`."],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 5 — ERRORS, OOP & MODULES                                     */
    /* ------------------------------------------------------------------ */
    {
      slug: "robust-python",
      title: "Errors, Classes & Modules",
      icon: "🏗️",
      description: "Handle errors gracefully, model the world with classes, and tap into Python's standard library.",
      lessons: [
        {
          slug: "error-handling",
          title: "Handling Errors",
          summary: "Read tracebacks, catch exceptions with try/except, and raise your own errors.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A banking app that crashes when you type letters into the amount box would be a disaster. Good programs **expect** things to go wrong and recover politely. In Python, problems are signalled by **exceptions**.",
            },
            {
              type: "table",
              headers: ["Exception", "Typical cause"],
              rows: [
                ["`ZeroDivisionError`", "`10 / 0`"],
                ["`ValueError`", "`int(\"abc\")` — right type, bad value"],
                ["`TypeError`", "`\"a\" + 1` — wrong type"],
                ["`KeyError`", "`d[\"missing\"]`"],
                ["`IndexError`", "`[1, 2][5]`"],
                ["`NameError`", "using a variable that doesn't exist"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "try the risky code; except catches the problem",
              code: r`try:
    result = 10 / 0
    print("This line never runs")
except ZeroDivisionError:
    print("Can't divide by zero!")
print("Program keeps going")`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Catch several types and inspect the message",
              code: r`for text in ["42", "abc", "7.5"]:
    try:
        n = int(text)
        print("Got", n)
    except ValueError as err:
        print("Bad number:", err)`,
            },
            { type: "heading", text: "else and finally" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def check(divisor):
    try:
        value = 100 / divisor
    except ZeroDivisionError:
        print("  oops, zero")
    else:
        print("  success:", value)   # only if no error
    finally:
        print("  finished attempt")  # always runs

check(4)
check(0)`,
            },
            { type: "heading", text: "raise: signal your own errors" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`def set_age(age):
    if age < 0:
        raise ValueError("age can't be negative")
    return age

try:
    set_age(-3)
except ValueError as e:
    print("Rejected:", e)`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: don't catch everything",
              md: "A bare `except:` (or `except Exception:` around huge blocks) hides real bugs like typos. Catch the **specific** exception you expect, and keep the `try` block small.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Read tracebacks bottom-up",
              md: "When code crashes, the **last line** of the red message names the exception and the reason. The lines above show the path that led there, ending with the exact line number.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which exception does `int(\"twelve\")` raise?",
                  options: ["`TypeError`", "`ValueError`", "`NameError`", "`SyntaxError`"],
                  answer: 1,
                  explain: "It's a string (right type) but its content can't become an int — that's a `ValueError`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Wrap risky code in `try:` and handle problems in `except SomeError:`.",
                "`as err` gives you the error message.",
                "`else` runs if no exception; `finally` always runs.",
                "`raise ValueError(\"...\")` signals a problem yourself.",
                "Catch specific exceptions, not everything.",
              ],
            },
          ],
          flashcards: [
            { front: "When does a `finally` block run?", back: "Always — whether or not an exception happened." },
            { front: "When does the `else` of a try run?", back: "Only when the `try` block raised no exception." },
            { front: "Exception for `[1, 2, 3][10]`?", back: "`IndexError`" },
            { front: "How do you raise an error yourself?", back: "`raise ValueError(\"message\")` (any exception type)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What does `{\"a\": 1}[\"b\"]` raise?",
              options: ["`IndexError`", "`ValueError`", "`KeyError`", "Nothing, returns None"],
              answer: 2,
              explain: "Missing dictionary keys raise `KeyError`.",
            },
            {
              kind: "order",
              q: "With no error raised, order the blocks as they run.",
              items: ["try", "else", "finally"],
              explain: "`try` runs, `except` is skipped, then `else`, then `finally`.",
            },
            {
              kind: "truefalse",
              q: "After an exception is caught by `except`, the rest of the program can continue.",
              answer: true,
              explain: "That's the point — the error is handled and execution continues after the try statement.",
            },
          ],
          challenge: {
            title: "Crash-proof helpers",
            prompt:
              "Write two functions:\n\n1. `safe_divide(a, b)` — returns `a / b`, or `None` if `b` is zero.\n2. `to_int(text, default=0)` — returns `int(text)`, or `default` if the text isn't a valid integer.\n\nUse `try/except` in both.",
            lang: "python",
            starter: r`def safe_divide(a, b):
    pass

def to_int(text, default=0):
    pass
`,
            tests: [
              { label: "safe_divide(10, 4) is 2.5", check: "safe_divide(10, 4) == 2.5" },
              { label: "safe_divide(1, 0) is None", check: "safe_divide(1, 0) is None" },
              { label: "to_int('42') is 42", check: "to_int('42') == 42" },
              { label: "bad text gives the default", check: "to_int('abc') == 0 and to_int('x', -1) == -1" },
            ],
            solution: r`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

def to_int(text, default=0):
    try:
        return int(text)
    except ValueError:
        return default`,
            hints: [
              "Put the `return a / b` inside `try:`.",
              "`int('abc')` raises `ValueError` — catch that one in `to_int`.",
            ],
          },
        },
        {
          slug: "classes-and-objects",
          title: "Classes & Objects",
          summary: "Bundle data and behaviour together with classes, __init__, methods and inheritance.",
          minutes: 18,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "In a game, every enemy has health, a name and the ability to attack. Rather than juggling separate variables for each one, you design a **class** — a blueprint — and stamp out as many **objects** as you need.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "A class with an __init__ method and one regular method",
              code: r`class Pet:
    def __init__(self, name, species):
        self.name = name          # attributes
        self.species = species
        self.energy = 5

    def play(self):              # a method
        self.energy -= 1
        print(f"{self.name} plays! Energy: {self.energy}")

rex = Pet("Rex", "dog")
tom = Pet("Tom", "cat")
rex.play()
rex.play()
print(tom.name, "still has", tom.energy)`,
            },
            {
              type: "list",
              items: [
                "`class Pet:` defines the blueprint (class names use `CapitalWords`).",
                "`__init__` runs automatically when you create an object with `Pet(...)`.",
                "`self` is the specific object being worked on — `rex` or `tom`.",
                "`self.name = name` stores data **on** that object.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: forgetting self",
              md: "Every method needs `self` as its **first parameter**, and attributes must be accessed as `self.energy`, not just `energy`. Forgetting it gives errors like `TypeError: play() takes 0 positional arguments but 1 was given`.",
            },
            { type: "heading", text: "Making objects print nicely" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"'{self.title}' ({self.pages} pages)"

    def is_long(self):
        return self.pages > 400

b = Book("Dune", 412)
print(b)
print(b.is_long())`,
            },
            { type: "heading", text: "Inheritance: build on an existing class" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

    def intro(self):
        return f"{self.name} says {self.speak()}"

class Dog(Animal):
    def speak(self):            # override
        return "Woof!"

class Cow(Animal):
    def speak(self):
        return "Moo!"

for a in [Dog("Bolt"), Cow("Daisy"), Animal("Mystery")]:
    print(a.intro())`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "Everything is an object",
              md: "In Python even numbers and strings are objects. `\"hi\".upper()` is a method call on a `str` object — exactly like `rex.play()`.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "super() calls the parent's version",
              code: r`class Animal:
    def __init__(self, name):
        self.name = name

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name)   # reuse Animal's setup
        self.can_fly = can_fly

p = Bird("Pingu", can_fly=False)
print(p.name, p.can_fly, isinstance(p, Animal))`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is `self` inside a method?",
                  options: ["The class itself", "The object the method was called on", "A reserved keyword", "The parent class"],
                  answer: 1,
                  explain: "When you call `rex.play()`, Python passes `rex` as `self`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "A class is a blueprint; objects are instances made from it.",
                "`__init__(self, ...)` sets up attributes when an object is created.",
                "Methods are functions inside a class; their first parameter is `self`.",
                "`__str__` controls what `print(obj)` shows.",
                "Inheritance: `class Dog(Animal):` reuses and overrides behaviour; `super()` calls the parent.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `__init__` do?", back: "Initialises a new object's attributes; it runs automatically on creation." },
            { front: "What's an instance?", back: "One object created from a class, e.g. `rex = Pet(...)`." },
            { front: "What does overriding mean?", back: "A child class defines a method with the same name, replacing the parent's version." },
            { front: "What is `super()` used for?", back: "Calling a method of the parent class, often `super().__init__(...)`." },
            { front: "Which method controls `print(obj)`?", back: "`__str__`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Two objects of the same class share the same attribute values automatically.",
              answer: false,
              explain: "Each object has its own attributes — `rex.energy` and `tom.energy` are separate.",
            },
            {
              kind: "mcq",
              q: "Given `class Cat(Animal):`, which is true?",
              options: ["Animal inherits from Cat", "Cat inherits from Animal", "Cat and Animal are unrelated", "Cat cannot add new methods"],
              answer: 1,
              explain: "The class in brackets is the parent.",
            },
            {
              kind: "fill",
              q: "To create a `Pet` object you write `p = ___(\"Rex\", \"dog\")`.",
              answer: ["Pet"],
              explain: "Call the class name like a function.",
            },
            {
              kind: "multi",
              q: "Which are true about methods?",
              options: [
                "They are defined with `def` inside a class",
                "Their first parameter is usually `self`",
                "You pass `self` explicitly: `rex.play(rex)`",
                "They can read and change attributes",
              ],
              answers: [0, 1, 3],
              explain: "Python passes `self` for you; you just write `rex.play()`.",
            },
          ],
          challenge: {
            title: "Bank account",
            prompt:
              "Create a class `BankAccount`:\n\n- `BankAccount(owner, balance=0)` stores `owner` and `balance`.\n- `deposit(amount)` adds to the balance and **returns the new balance**.\n- `withdraw(amount)` subtracts and returns `True` if there's enough money; otherwise leaves the balance alone and returns `False`.",
            lang: "python",
            starter: r`class BankAccount:
    def __init__(self, owner, balance=0):
        pass
`,
            tests: [
              { label: "stores owner, balance defaults to 0", check: "BankAccount('Ria').owner == 'Ria' and BankAccount('Ria').balance == 0" },
              { label: "deposit returns new balance", check: "BankAccount('Ria', 100).deposit(50) == 150" },
              {
                label: "withdraw with enough money",
                check: "(lambda a: a.withdraw(30) is True and a.balance == 70)(BankAccount('Ria', 100))",
              },
              {
                label: "withdraw refuses overdrafts",
                check: "(lambda a: a.withdraw(500) is False and a.balance == 100)(BankAccount('Ria', 100))",
              },
            ],
            solution: r`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True`,
            hints: [
              "In `__init__`, save both values with `self.owner = owner` and `self.balance = balance`.",
              "Every method needs `self` as its first parameter.",
              "In `withdraw`, check `amount > self.balance` first and `return False`.",
            ],
          },
        },
        {
          slug: "modules-stdlib",
          title: "Modules: math, random & datetime",
          summary: "Import ready-made tools from Python's standard library instead of reinventing them.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Python is famous for coming with **batteries included**: hundreds of modules ship with it. Need a square root, a dice roll or the number of days until your birthday? Just `import` it.",
            },
            { type: "heading", text: "Three ways to import" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`import math
print(math.sqrt(81), math.pi)

from math import floor, ceil
print(floor(4.7), ceil(4.2))

import math as m
print(m.factorial(5))`,
            },
            { type: "heading", text: "math" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`import math

r = 3
print("Circle area:", round(math.pi * r ** 2, 2))
print("Hypotenuse:", math.hypot(3, 4))
print("gcd(48, 18):", math.gcd(48, 18))
print("2^0.5:", math.sqrt(2))`,
            },
            { type: "heading", text: "random" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Run it twice — you'll get different results",
              code: r`import random

print(random.randint(1, 6))           # dice roll, 1-6 inclusive
print(random.choice(["rock", "paper", "scissors"]))
deck = ["A", "K", "Q", "J"]
random.shuffle(deck)
print(deck)
print(random.random())                # float in [0, 1)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "seed() makes 'random' results repeatable — great for testing",
              code: r`import random
random.seed(42)
print([random.randint(1, 100) for _ in range(3)])
random.seed(42)
print([random.randint(1, 100) for _ in range(3)])  # identical`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: randint includes both ends",
              md: "`random.randint(1, 6)` can return 6, unlike `range(1, 6)`. And never name your own file `random.py` or `math.py` — Python would import your file instead of the real module!",
            },
            { type: "heading", text: "datetime" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: r`from datetime import date, timedelta

launch = date(2026, 1, 15)
print(launch.year, launch.month, launch.day)
print(launch.strftime("%d %B %Y"))

later = launch + timedelta(days=30)
print("30 days later:", later)

gap = date(2026, 12, 25) - launch
print("Days until Dec 25:", gap.days)`,
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Today's date comes from your device",
              code: r`from datetime import date
today = date.today()
print("Today is", today, "-", today.strftime("%A"))`,
            },
            {
              type: "callout",
              tone: "note",
              title: "Explore a module",
              md: "`dir(math)` lists everything inside a module and `help(math.gcd)` shows documentation. Curiosity is a programmer's best tool.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "After `from math import sqrt`, how do you call it?",
                  options: ["`math.sqrt(9)`", "`sqrt(9)`", "`math(sqrt, 9)`", "`import sqrt(9)`"],
                  answer: 1,
                  explain: "`from ... import` brings the name directly into your code.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`import module`, `from module import name`, `import module as alias`.",
                "`math`: `sqrt`, `pi`, `floor`, `ceil`, `gcd`, `factorial`.",
                "`random`: `randint` (inclusive), `choice`, `shuffle`, `seed`.",
                "`datetime`: `date`, `timedelta`; subtracting dates gives `.days`.",
              ],
            },
          ],
          flashcards: [
            { front: "Can `random.randint(1, 6)` return 6?", back: "Yes — both ends are included." },
            { front: "Why use `random.seed()`?", back: "To make random results repeatable, e.g. for tests." },
            { front: "How do you add 7 days to a date `d`?", back: "`d + timedelta(days=7)`" },
            { front: "What does `math.ceil(4.1)` return?", back: "`5` — rounds up." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is `math.gcd(48, 18)`?",
              answer: 6,
              explain: "The greatest common divisor of 48 and 18 is 6.",
            },
            {
              kind: "numeric",
              q: "What is `(date(2024, 3, 1) - date(2024, 2, 1)).days`? (2024 is a leap year.)",
              answer: 29,
              explain: "February 2024 had 29 days.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "`import math as m` lets you write `m.pi`.",
              answer: true,
              explain: "The alias `m` refers to the math module.",
            },
            {
              kind: "mcq",
              q: "Which function picks one random item from a list?",
              options: ["`random.pick`", "`random.choice`", "`random.shuffle`", "`random.item`"],
              answer: 1,
              explain: "`random.choice(seq)` returns one random element. `shuffle` reorders the whole list.",
            },
          ],
          challenge: {
            title: "Circles and calendars",
            prompt:
              "Write two functions using the standard library:\n\n1. `circle_area(r)` — returns the area $\\pi r^2$ rounded to **2** decimal places (use `math.pi`).\n2. `days_between(d1, d2)` — takes two `date` objects and returns the number of days from `d1` to `d2`.",
            lang: "python",
            starter: r`import math
from datetime import date

def circle_area(r):
    pass

def days_between(d1, d2):
    pass
`,
            tests: [
              { label: "circle_area(1) is 3.14", check: "circle_area(1) == 3.14" },
              { label: "circle_area(2) is 12.57", check: "circle_area(2) == 12.57" },
              {
                label: "60 days from 1 Jan to 1 Mar 2024",
                check: "days_between(__import__('datetime').date(2024, 1, 1), __import__('datetime').date(2024, 3, 1)) == 60",
              },
              {
                label: "same day is 0",
                check: "days_between(__import__('datetime').date(2026, 5, 5), __import__('datetime').date(2026, 5, 5)) == 0",
              },
            ],
            solution: r`import math
from datetime import date

def circle_area(r):
    return round(math.pi * r ** 2, 2)

def days_between(d1, d2):
    return (d2 - d1).days`,
            hints: [
              "`round(value, 2)` keeps two decimals.",
              "Subtracting two dates gives a `timedelta`; read its `.days`.",
            ],
          },
        },
      ],
    },
  ],
};
