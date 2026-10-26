import type { Topic } from "@/content/types";

/** String.raw keeps code backslashes (\n, \t) exactly as written. */
const r = String.raw;

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 12 · Python Revision Tour                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-python-revision",
    title: "Python Revision Tour",
    icon: "🐍",
    description: "Tokens, data types, mutability, operators and precedence, flow of control, strings, lists, tuples and dictionaries: the Class 11 base that every Class 12 program stands on.",
    lessons: [
      {
        slug: "c12-cs-tokens-types-operators",
        title: "Tokens, Data Types and Operators",
        summary: "The five kinds of tokens, Python's built-in types, mutable versus immutable objects, every operator family and the precedence rules that decide an expression's value.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧱",
            caption: "Every Python program, however long, is built from a handful of small pieces called tokens.",
          },
          {
            type: "text",
            md: "A **token** is the smallest unit of a program that the Python interpreter recognises. There are five kinds:\n\n**Keywords** are reserved words with a fixed meaning (`if`, `for`, `def`, `True`, `None`, `lambda`). **Identifiers** are names you give to variables, functions and classes. **Literals** are fixed values written directly in code (`25`, `3.14`, `\"Hubballi\"`, `True`, `None`). **Operators** act on values (`+`, `//`, `==`, `and`, `in`). **Punctuators** (delimiters) organise the code (`( ) [ ] { } , : ;` and `=`).",
          },
          {
            type: "text",
            md: "An identifier may contain letters, digits and the underscore, must **not start with a digit**, cannot be a keyword, and is **case-sensitive** (`Total` and `total` are different). So `marks_12`, `_count` and `Total` are valid, while `12marks`, `my-name` and `for` are not.",
          },
          {
            type: "table",
            headers: ["Category", "Types", "Mutable?"],
            rows: [
              ["Numbers", "`int`, `float`, `complex` (e.g. `3+4j`), `bool`", "No"],
              ["Sequences", "`str`, `tuple`", "No"],
              ["Sequences", "`list`", "Yes"],
              ["Mapping", "`dict` (keys must be immutable)", "Yes"],
              ["Set", "`set`", "Yes"],
              ["None", "`NoneType` (only value `None`)", "No"],
            ],
          },
          {
            type: "text",
            md: "An object is **mutable** if its value can be changed **in place** without creating a new object (list, dict, set). It is **immutable** if any \"change\" really builds a new object (int, float, str, tuple). Assignment like `L2 = L1` does not copy a list; it makes a second name for the **same** object, which you can test with `is` or `id()`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Predict each line before you press Run.",
            code: r`L1 = [10, 20, 30]
L2 = L1
L2.append(40)
print(L1)
print(L1 is L2)
s = "quest"
t = s.upper()
print(s, t)
T = (4, 5, [6, 7])
T[2].append(8)
print(T)
print(type(3 + 4j), type(None), type((7,)), type((7)))`,
          },
          {
            type: "text",
            md: "Output: `[10, 20, 30, 40]`, `True`, `quest QUEST`, `(4, 5, [6, 7, 8])` and then `<class 'complex'> <class 'NoneType'> <class 'tuple'> <class 'int'>`.\n\nTwo lessons hide here. A tuple is immutable, but if one of its items is a list, that list can still be changed. And `(7)` is just the int 7 in brackets; a one-item tuple needs a comma, `(7,)`.",
          },
          {
            type: "table",
            headers: ["Family", "Operators", "Note"],
            rows: [
              ["Arithmetic", "`+ - * / // % **`", "`/` always gives a float; `//` floors (rounds down); `%` takes the sign of the divisor"],
              ["Relational", "`< > <= >= == !=`", "give `True` / `False`; can be chained: `5 > 3 > 1`"],
              ["Logical", "`not and or`", "short-circuit: `or` stops at the first true value"],
              ["Assignment", "`= += -= *= /= //= %= **=`", "`x += 3` means `x = x + 3`"],
              ["Identity", "`is`, `is not`", "same object in memory?"],
              ["Membership", "`in`, `not in`", "is the value present in the sequence or dict keys?"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "`()` brackets",
              "`**` exponent (evaluated **right to left**)",
              "unary `+x`, `-x` (and `~x`)",
              "`* / // %`",
              "`+ -`",
              "relational, identity and membership operators",
              "`not`, then `and`, then `or`",
            ],
          },
          {
            type: "example",
            title: "Evaluating tricky expressions",
            problem: "Find the output: `print(17 // 5, 17 % 5, -17 // 5, -17 % 5)`, `print(2 ** 3 ** 2)`, `print(-2 ** 2)` and `print(10 + 4 * 3 > 20 and not 5 == 5.0)`.",
            steps: [
              "`17 // 5` = 3 and `17 % 5` = 2, since 5 × 3 + 2 = 17.",
              "`-17 // 5` floors −3.4 down to **−4**; then `-17 % 5` = −17 − 5 × (−4) = **3**.",
              "`**` groups from the right: `2 ** (3 ** 2)` = `2 ** 9` = 512.",
              "`**` binds tighter than unary minus: `-(2 ** 2)` = −4.",
              "`10 + 12 = 22`, `22 > 20` is True; `5 == 5.0` is True so `not` gives False; `True and False` is False.",
            ],
            answer: "`3 2 -4 3`, then `512`, then `-4`, then `False`.",
          },
          {
            type: "mistake",
            wrong: "`-17 // 5` is −3, because 17 // 5 is 3 and the minus just goes in front.",
            right: "`//` is **floor division**: it rounds towards minus infinity, so −3.4 becomes −4, and then `-17 % 5` is 3.",
            why: "In ordinary arithmetic we drop the decimal part, which works for positive numbers. Floor division always moves to the lower whole number, which for negative results is further from zero.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What does `print(7 / 2, 7 // 2, 2 ** -1)` show?",
                options: ["`3.5 3 0.5`", "`3 3 0.5`", "`3.5 3.0 -2`", "`3.5 4 0.5`"],
                answer: 0,
                explain: "`/` gives a float 3.5; `//` floors to 3; `2 ** -1` is 1/2 = 0.5.",
              },
              {
                kind: "multi",
                q: "Which of these are **valid** identifiers?",
                options: ["`_total`", "`2nd_term`", "`Marks12`", "`class`", "`first-name`"],
                answers: [0, 2],
                explain: "`2nd_term` starts with a digit, `class` is a keyword and `first-name` contains a hyphen (an operator).",
              },
            ],
          },
          {
            type: "text",
            md: "**Type conversion.** In an expression with an int and a float, Python converts the int to float on its own (**implicit** conversion): `3 + 2.0` is `5.0`. You convert **explicitly** with `int()`, `float()`, `str()`, `list()`, `tuple()`. Remember `input()` always returns a **string**, so `int(input(\"Age: \"))` is needed before doing arithmetic.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each type: mutable or immutable?",
              groups: ["Mutable", "Immutable"],
              items: [
                { text: "list", group: 0, hint: "append() changes the same list object." },
                { text: "dict", group: 0, hint: "You can add a key to the same dictionary." },
                { text: "set", group: 0, hint: "add() changes the set in place." },
                { text: "str", group: 1, hint: "upper() returns a new string; the old one is unchanged." },
                { text: "tuple", group: 1, hint: "Items of a tuple cannot be reassigned." },
                { text: "int", group: 1, hint: "x += 1 makes x name a new int object." },
                { text: "float", group: 1, hint: "Numbers are never changed in place." },
              ],
              explain: "Only list, dict and set can change in place. That is why a list, but not a tuple, can be a mutable default argument trap and why dictionary keys must be immutable.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "1-mark questions love `//` and `%` with negative numbers, `**` grouping from the right, `-2 ** 2`, and \"is this a valid identifier?\". Write the evaluation order in steps when the question carries 2 marks.",
          },
          {
            type: "keypoints",
            items: [
              "Tokens: keywords, identifiers, literals, operators, punctuators.",
              "Mutable: list, dict, set. Immutable: int, float, complex, bool, str, tuple.",
              "`/` gives float, `//` floors towards minus infinity, `%` follows the divisor's sign.",
              "`**` is right-associative and binds tighter than unary minus; `not` > `and` > `or`.",
              "`input()` returns a string; convert it with `int()` or `float()`.",
            ],
          },
        ],
        flashcards: [
          { front: "What is a token?", back: "The smallest unit of a program the interpreter recognises: keyword, identifier, literal, operator or punctuator." },
          { front: "Name the mutable built-in types.", back: "list, dict and set." },
          { front: "Value of `-17 // 5`?", back: "−4 (floor division rounds towards minus infinity)." },
          { front: "Value of `2 ** 3 ** 2`?", back: "512, because `**` groups from the right: 2 ** 9." },
          { front: "What does `L2 = L1` do for a list?", back: "Makes L2 a second name for the same list; changing one changes what both show." },
          { front: "How do you write a one-item tuple?", back: "With a comma: `(7,)` or `7,`. `(7)` is just an int." },
          { front: "Order of logical operators?", back: "`not` first, then `and`, then `or`." },
          { front: "What type does `input()` return?", back: "Always `str`." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed by `print(-2 ** 2, (-2) ** 2)`?",
            options: ["`-4 4`", "`4 4`", "`-4 -4`", "`4 -4`"],
            answer: 0,
            explain: "`**` is applied before unary minus, so `-2 ** 2` is −(4); with brackets, (−2)² = 4.",
          },
          {
            kind: "numeric",
            q: "Evaluate `25 % 7 + 25 // 7 * 2`.",
            answer: 10,
            explain: "25 % 7 = 4; 25 // 7 = 3; 3 × 2 = 6; 4 + 6 = 10.",
          },
          {
            kind: "truefalse",
            q: "A tuple that contains a list can never change in any way.",
            answer: false,
            explain: "The tuple's own slots cannot be reassigned, but a list stored inside it is mutable and can be changed with `append()`.",
          },
          {
            kind: "mcq",
            q: "Which of these is a **keyword** in Python?",
            options: ["`None`", "`print`", "`input`", "`main`"],
            answer: 0,
            explain: "`None` is a keyword. `print` and `input` are built-in function names (identifiers), not keywords.",
          },
          {
            kind: "fill",
            q: "The operator ___ checks whether two names refer to the same object in memory.",
            answer: ["is"],
            explain: "`is` compares identity (same object); `==` compares values.",
          },
          {
            kind: "mcq",
            q: "What is printed by `print(True + True, 5 > 3 > 1)`?",
            options: ["`2 True`", "`TrueTrue True`", "`1 True`", "Error"],
            answer: 0,
            explain: "`bool` is a subtype of int with True = 1, so True + True = 2. The chain means `5 > 3 and 3 > 1`, which is True.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which expressions give a value of type `float`?",
            options: ["`8 / 4`", "`8 // 4`", "`3 + 2.0`", "`int('7')`", "`float(3)`"],
            answers: [0, 2, 4],
            explain: "`/` always gives a float (2.0); int + float is a float; `float(3)` is 3.0. `8 // 4` is the int 2 and `int('7')` is the int 7.",
          },
          {
            kind: "order",
            q: "Arrange these operators from highest to lowest precedence.",
            items: ["`**`", "`*`", "`+`", "`==`", "`not`", "`or`"],
            explain: "Exponent, then multiplication, addition, comparison, then not, and finally or.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-cs-flow-and-sequences",
        title: "Flow of Control, Strings, Lists and Dictionaries",
        summary: "if–elif–else, for and while loops with break, continue and else, then slicing and the string, list, tuple and dictionary methods the board asks about most.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Programs run statements one after another (**sequential** flow) unless a **selection** (`if`, `if–else`, `if–elif–else`) or an **iteration** (`for`, `while`) changes the order. Python marks a block by **indentation**, not braces, so a wrong indent is a real error, not a style problem.\n\n`range(start, stop, step)` produces numbers from `start` up to **but not including** `stop`. `break` leaves the loop at once; `continue` skips the rest of the current pass. A loop's `else` part runs only when the loop ends **normally**, without a `break`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Trace i from 1 to 10 on paper first.",
            code: r`total = 0
for i in range(1, 11):
    if i % 3 == 0:
        continue
    if i > 8:
        break
    total += i
print(total)
n = 6
while n > 0:
    n -= 2
else:
    print("loop over, n =", n)`,
          },
          {
            type: "text",
            md: "Output: `27` and then `loop over, n = 0`. The values added are 1, 2, 4, 5, 7, 8 (3, 6, 9 are skipped by `continue`, and 10 hits `break`). The while loop stops normally, so its `else` part runs.",
          },
          {
            type: "heading",
            text: "Strings: indexing and slicing",
          },
          {
            type: "text",
            md: "A string is an **immutable** sequence of characters. Index 0 is the first character and index −1 the last. A **slice** `s[start:stop:step]` takes characters from `start` up to but not including `stop`. A missing `start` means the beginning, a missing `stop` means the end, and step −1 walks backwards, so `s[::-1]` reverses a string. Slices never raise an IndexError, but `s[20]` does.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`s = "BENGALURU"
print(s[0], s[-1], s[2:5], s[::-1])
print(s[1:8:2], len(s), s.count("U"))
print(s.lower().capitalize(), s.find("GAL"), s.replace("U", "u"))
print("cs,ip,ai".split(","), "-".join(["12", "A"]))`,
          },
          {
            type: "text",
            md: "Output:\n\n`B U NGA URULAGNEB`\n\n`EGLR 9 2`\n\n`Bengaluru 3 BENGALuRu`\n\n`['cs', 'ip', 'ai'] 12-A`\n\n`find()` returns the index of the first match (−1 if absent); `index()` does the same but raises ValueError when absent. Other common methods: `isalpha()`, `isdigit()`, `isalnum()`, `isupper()`, `islower()`, `isspace()`, `strip()`, `startswith()`, `endswith()`, `title()`, `partition()`.",
          },
          {
            type: "heading",
            text: "Lists, tuples and dictionaries",
          },
          {
            type: "table",
            headers: ["Method", "What it does", "Returns"],
            rows: [
              ["`L.append(x)`", "adds one item at the end", "`None`"],
              ["`L.extend(seq)`", "adds every item of seq at the end", "`None`"],
              ["`L.insert(i, x)`", "puts x before index i", "`None`"],
              ["`L.pop(i)`", "removes and returns item at i (last if no i)", "the item"],
              ["`L.remove(x)`", "removes the first x (ValueError if absent)", "`None`"],
              ["`L.sort()` / `sorted(L)`", "sorts in place / returns a new sorted list", "`None` / new list"],
              ["`D.get(k, d)`", "value for key k, or d if k is absent", "the value"],
              ["`D.items()`, `D.keys()`, `D.values()`", "views of pairs, keys, values", "view objects"],
              ["`D.update(D2)`", "adds or overwrites pairs from D2", "`None`"],
            ],
          },
          {
            type: "example",
            title: "Tracing list methods",
            problem: "Find the output.\n\n`marks = [72, 85, 64]`, then `marks.append(90)`, `marks.insert(1, 55)`, `marks.extend([40, 77])`, `print(marks)`, `print(marks.pop(), marks.pop(0))`, `marks.remove(64)`, `marks.sort(reverse=True)`, `print(marks)`.",
            steps: [
              "After append: [72, 85, 64, 90]. After insert at 1: [72, 55, 85, 64, 90].",
              "After extend: [72, 55, 85, 64, 90, 40, 77], which is printed.",
              "`pop()` removes the last item 77; then `pop(0)` removes 72. Both are printed: `77 72`.",
              "The list is [55, 85, 64, 90, 40]. `remove(64)` leaves [55, 85, 90, 40].",
              "Sorting in descending order gives [90, 85, 55, 40].",
            ],
            answer: "`[72, 55, 85, 64, 90, 40, 77]`, then `77 72`, then `[90, 85, 55, 40]`.",
          },
          {
            type: "mistake",
            wrong: "`marks = marks.sort()` stores the sorted list back in `marks`.",
            right: "`sort()` sorts the list **in place** and returns `None`, so that line makes `marks` equal to `None`. Write `marks.sort()` alone, or `marks = sorted(marks)`.",
            why: "String methods like `upper()` return a new string, so learners expect every method to return the result. List methods that change the list in place (`append`, `insert`, `extend`, `sort`, `reverse`, `remove`) return `None`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A dictionary of stationery stock.",
            code: r`stock = {"pen": 40, "pencil": 25}
stock["eraser"] = 15
stock["pen"] += 10
print(stock)
print(stock.get("ruler", 0), len(stock))
for item, qty in stock.items():
    if qty < 30:
        print(item, "is low")
print(list(stock.keys()))`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "For `s = \"PYTHON\"`, what is `s[1:5:2]`?",
                options: ["`YH`", "`YTH`", "`PTO`", "`YHN`"],
                answer: 0,
                explain: "Indices 1 and 3 are taken (5 is excluded): Y and H.",
              },
              {
                kind: "truefalse",
                q: "Writing `s[0] = \"J\"` for a string `s` changes its first letter.",
                answer: false,
                explain: "Strings are immutable, so item assignment raises TypeError. Build a new string instead: `s = \"J\" + s[1:]`.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each expression to its result.",
              pairs: [
                ["`\"CBSE\"[::-1]`", "`ESBC`"],
                ["`[1, 2] * 2`", "`[1, 2, 1, 2]`"],
                ["`len({\"a\": 1, \"b\": 2})`", "`2`"],
                ["`\"a-b-c\".split(\"-\")`", "`['a', 'b', 'c']`"],
                ["`(5, 6) + (7,)`", "`(5, 6, 7)`"],
              ],
              explain: "Step −1 reverses, `*` repeats, `len` of a dict counts keys, `split` breaks at the separator and `+` joins tuples into a new tuple.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In output questions, write each print's result on its own line, keep list brackets and quotes exactly as Python shows them (`['cs', 'ip']` uses single quotes), and remember a `print` with commas puts one space between items.",
          },
          {
            type: "keypoints",
            items: [
              "`range(a, b)` stops before b; a loop's `else` runs only if no `break` happened.",
              "Slicing `s[start:stop:step]` excludes `stop`; `s[::-1]` reverses.",
              "Strings and tuples are immutable; lists and dicts are mutable.",
              "In-place list methods return `None`; `sorted()` returns a new list.",
              "`D.get(k, default)` avoids a KeyError for a missing key.",
            ],
          },
        ],
        flashcards: [
          { front: "When does a loop's `else` block run?", back: "When the loop finishes normally, without meeting `break`." },
          { front: "`break` vs `continue`?", back: "`break` leaves the loop; `continue` skips to the next pass." },
          { front: "`find()` vs `index()` for a missing substring?", back: "`find()` returns −1; `index()` raises ValueError." },
          { front: "`append()` vs `extend()`?", back: "`append(x)` adds x as one item; `extend(seq)` adds each item of seq." },
          { front: "What does `L.pop()` return?", back: "The item it removed (the last one if no index is given)." },
          { front: "What does `L.sort()` return?", back: "`None`; it sorts the list in place." },
          { front: "How to read a dict value safely?", back: "`D.get(key, default)` returns the default instead of raising KeyError." },
          { front: "Can a list be a dictionary key?", back: "No. Keys must be immutable (hashable), such as str, int or tuple." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed? `for i in range(10, 0, -3): print(i, end=\" \")`",
            options: ["`10 7 4 1`", "`10 7 4`", "`10 7 4 1 -2`", "`9 6 3`"],
            answer: 0,
            explain: "Start at 10, step −3, stop before 0: 10, 7, 4, 1.",
          },
          {
            kind: "mcq",
            q: "For `L = [4, 8, 12]`, what does `L.append([1, 2])` make L?",
            options: ["`[4, 8, 12, [1, 2]]`", "`[4, 8, 12, 1, 2]`", "`[[1, 2], 4, 8, 12]`", "Error"],
            answer: 0,
            explain: "`append` adds its argument as one item, here a whole list. `extend` would add 1 and 2 separately.",
          },
          {
            kind: "fill",
            q: "`\"Kannada\".count(\"a\")` gives ___.",
            answer: ["3"],
            explain: "K-a-n-n-a-d-a has three lowercase a's.",
          },
          {
            kind: "truefalse",
            q: "`for x in range(5): pass` followed by `else: print(\"done\")` prints done.",
            answer: true,
            explain: "The loop finishes without a break, so the else part runs.",
          },
          {
            kind: "mcq",
            q: "`D = {\"a\": 1}` then `print(D[\"b\"])` gives…",
            options: ["KeyError", "`None`", "`0`", "IndexError"],
            answer: 0,
            explain: "Indexing a missing key raises KeyError. `D.get(\"b\")` would return None.",
          },
          {
            kind: "numeric",
            q: "How many times does `while n < 50: n *= 3` run if n starts at 2?",
            answer: 3,
            explain: "The condition is checked before each pass: 2 → 6 (pass 1), 6 → 18 (pass 2), 18 → 54 (pass 3). Now 54 < 50 is False, so the loop stops after 3 passes.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which return a **new** object and leave the original unchanged?",
            options: ["`s.upper()` for a string s", "`sorted(L)`", "`L.sort()`", "`L.reverse()`", "`s.replace(\"a\", \"b\")`"],
            answers: [0, 1, 4],
            explain: "String methods and `sorted()` return new objects; `sort()` and `reverse()` change the list in place and return None.",
          },
        ],
      },
      {
        slug: "c12-cs-revision-board-practice",
        title: "Python Revision: Board Practice",
        summary: "Mixed board-style questions: output tracing on strings, lists and dictionaries, error spotting, and a short program to write.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Board papers test the revision tour through **output questions** (trace and write what is printed), **error-finding questions** (rewrite the code correctly and underline the changes) and **short programs** using strings, lists and dictionaries. The method is the same every time: make a small table of variables and update it line by line.",
          },
          {
            type: "example",
            title: "Output: changing letters",
            problem: "Write the output.\n\n`word = \"Mysuru\"`, `out = \"\"`, then for each `ch` in `word`: if `ch` is a vowel (in `\"aeiouAEIOU\"`) add `\"*\"`; elif `ch.isupper()` add `ch.lower()`; else add `ch.upper()`. Finally `print(out)`.",
            steps: [
              "M is not a vowel and is upper case, so add `m`.",
              "y is not in the vowel string (y is not listed) and is lower case, so add `Y`. s gives `S`.",
              "u is a vowel, add `*`. r gives `R`. u gives `*`.",
              "Joined: m Y S * R *.",
            ],
            answer: "`mYS*R*`",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Run it to check the trace.",
            code: r`word = "Mysuru"
out = ""
for ch in word:
    if ch in "aeiouAEIOU":
        out += "*"
    elif ch.isupper():
        out += ch.lower()
    else:
        out += ch.upper()
print(out)`,
          },
          {
            type: "example",
            title: "Output: list and dictionary",
            problem: "Find the output.\n\n`L = [3, 8, 5, 12, 7]`; for each index i, if `L[i]` is even do `L[i] //= 2`, else `L[i] *= 3`; `print(L)`. Then `D = {}`; for each x in `\"banana\"`: `D[x] = D.get(x, 0) + 1`; `print(D)`.",
            steps: [
              "3 is odd → 9; 8 is even → 4; 5 → 15; 12 → 6; 7 → 21.",
              "So L is [9, 4, 15, 6, 21].",
              "For banana: b first gets 1; a appears 3 times; n appears 2 times.",
              "Keys keep the order they were first inserted: b, a, n.",
            ],
            answer: "`[9, 4, 15, 6, 21]` and `{'b': 1, 'a': 3, 'n': 2}`",
          },
          {
            type: "mistake",
            wrong: "A dictionary prints its keys in alphabetical order, so the answer is `{'a': 3, 'b': 1, 'n': 2}`.",
            right: "Since Python 3.7 a dictionary keeps **insertion order**: keys appear in the order they were first added, here b, a, n.",
            why: "Older books said dictionaries are \"unordered\", and sorted output looks neat. Board answer keys follow insertion order.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is printed by `a, b = 4, 9` then `a, b = b, a % b` then `print(a, b)`?",
                options: ["`9 4`", "`9 0`", "`4 9`", "`9 1`"],
                answer: 0,
                explain: "The right side is evaluated first using the old values: b = 9 and a % b = 4 % 9 = 4. Then a = 9, b = 4.",
              },
            ],
          },
          {
            type: "heading",
            text: "Error spotting",
          },
          {
            type: "text",
            md: "A typical question gives code like this and asks you to remove the errors:\n\n`Num = input(\"Enter number\")` / `if Num % 2 = 0` / `print(\"Even\")` / `else print(\"Odd\")`\n\nCorrected: `Num = int(input(\"Enter number\"))` (input gives a string, so `%` would not do arithmetic), `if Num % 2 == 0:` (comparison needs `==` and the line needs a colon), indent `print(\"Even\")`, and write `else:` on its own line with the next print indented.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What does this print? `print(10 > 5 or 1/0)`",
              emoji: "⚡",
              options: ["`True`", "ZeroDivisionError", "`10`", "`False`"],
              answer: 0,
              trap: 1,
              explain: "`or` short-circuits: once `10 > 5` is True, the right side is never evaluated, so 1/0 never runs and the result is True.",
            },
          },
          {
            type: "heading",
            text: "Write a program",
          },
          {
            type: "example",
            title: "Longest word",
            problem: "Write a program that counts the words longer than 4 letters in a line and prints the longest word. Use the line \"Chandrayaan three landed near the lunar south pole\".",
            steps: [
              "Split the line into a list of words with `split()`.",
              "Keep a counter `count = 0` and a variable `longest = \"\"`.",
              "For each word: if `len(w) > 4` add 1 to count; if `len(w) > len(longest)` store w.",
              "Print both results after the loop.",
            ],
            answer: "Words longer than 4: 5 (Chandrayaan, three, landed, lunar, south). Longest word: Chandrayaan.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`line = "Chandrayaan three landed near the lunar south pole"
words = line.split()
count = 0
longest = ""
for w in words:
    if len(w) > 4:
        count += 1
    if len(w) > len(longest):
        longest = w
print("Words longer than 4:", count)
print("Longest word:", longest)`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a program answer, marks go to correct logic, correct loops and indentation, and correct output statements. Use meaningful names and do not forget to convert `input()` with `int()` when numbers are needed.",
          },
          {
            type: "keypoints",
            items: [
              "Trace with a variable table, one line at a time.",
              "Dictionaries keep insertion order; `D.get(x, 0) + 1` is the standard counting pattern.",
              "Tuple-swap `a, b = b, a % b` uses the old values on the right.",
              "`or` / `and` short-circuit: the right side may never run.",
              "Common errors: `=` for `==`, missing colon, missing `int()`, wrong indentation.",
            ],
          },
        ],
        flashcards: [
          { front: "Standard pattern to count items with a dict?", back: "`D[x] = D.get(x, 0) + 1` inside a loop." },
          { front: "In `a, b = b, a + b`, which values are used on the right?", back: "The old values; the whole right side is evaluated before assigning." },
          { front: "Does a dict print in sorted key order?", back: "No, in insertion order (Python 3.7+)." },
          { front: "Fix: `if x = 5`", back: "`if x == 5:` (comparison operator and colon)." },
          { front: "Why can `print(True or 1/0)` work?", back: "`or` short-circuits, so 1/0 is never evaluated." },
          { front: "Output of `print(3 * '7')`?", back: "`777` (string repetition)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed by `print(7 // 2 * 2 + 7 % 2)`?",
            options: ["`7`", "`8`", "`6`", "`7.0`"],
            answer: 0,
            explain: "7 // 2 = 3; 3 × 2 = 6; 7 % 2 = 1; 6 + 1 = 7.",
          },
          {
            kind: "mcq",
            q: "`t = (1, 2, 3) + (4,)`. What is `len(t * 2)`?",
            options: ["`8`", "`4`", "`5`", "Error"],
            answer: 0,
            explain: "t has 4 items; repeating twice gives 8 items.",
          },
          {
            kind: "fill",
            q: "`\"-\".join([\"12\", \"B\", \"CS\"])` gives the string ___.",
            answer: ["12-B-CS"],
            explain: "join puts the separator between items.",
          },
          {
            kind: "truefalse",
            q: "`L = [1, 2, 3]` then `print(L[5:])` raises IndexError.",
            answer: false,
            explain: "A slice past the end simply gives an empty list `[]`. Only plain indexing like `L[5]` raises IndexError.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which line has an error? (1) `x = 10` (2) `if x > 5` (3) `    print(x)`",
            options: ["Line 2: missing colon", "Line 1", "Line 3: indentation", "No error"],
            answer: 0,
            explain: "An if header must end with a colon.",
          },
          {
            kind: "mcq",
            q: "Output of: `s = \"ABCDEF\"`; `print(s[-2:-5:-1])`",
            options: ["`EDC`", "`EDCB`", "`CDE`", "empty string"],
            answer: 0,
            explain: "Start at index −2 (E) and move left, stopping before −5 (B): E, D, C.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which statements about `D = {\"x\": 1, \"y\": 2}` are true?",
            options: ["`\"x\" in D` is True", "`1 in D` is True", "`len(D)` is 2", "`D[0]` gives 1"],
            answers: [0, 2],
            explain: "`in` checks keys, so 1 in D is False. D[0] raises KeyError because 0 is not a key.",
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Python Revision Tour": "c12-cs-python-revision",
};
