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
  /* ------------------------------------------------------------------ */
  /* Class 12 · Functions                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-functions",
    title: "Functions",
    icon: "🧩",
    description: "Built-in, module and user-defined functions; parameters and arguments (positional, default, keyword); return values; flow of execution; local and global scope.",
    lessons: [
      {
        slug: "c12-cs-defining-functions",
        title: "Defining Functions, Arguments and Return Values",
        summary: "Why we write functions, the def statement, parameters versus arguments, positional, default and keyword arguments, returning one or many values, and the flow of execution.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧾",
            caption: "A shop's billing program works out GST hundreds of times a day. Write the steps once as a function and call it whenever needed.",
          },
          {
            type: "text",
            md: "A **function** is a named block of statements that does one job and runs only when it is **called**. Functions make programs shorter (no repeated code), easier to read and test, and reusable.\n\nPython has three kinds: **built-in functions** always available (`len()`, `print()`, `int()`, `max()`, `round()`), functions **defined in modules** that must be imported (`math.sqrt()`, `random.randint()`, `statistics.mean()`), and **user-defined functions** that you write with `def`.",
          },
          {
            type: "code",
            lang: "python",
            caption: "Parts of a user-defined function (display only)",
            code: r`def function_name(parameter1, parameter2):   # function header
    """optional docstring"""
    statements                               # function body (indented)
    return value                             # optional`,
          },
          {
            type: "text",
            md: "The names in the header are **parameters** (formal parameters). The values you pass in a call are **arguments** (actual parameters). In `def area(l, b)` and the call `area(12, 5)`, `l` and `b` are parameters while 12 and 5 are arguments.\n\nA `return` statement sends a value back to the caller and ends the function at once. A function with no `return` (or a bare `return`) gives back **`None`**. Functions that return a value are sometimes called **fruitful**; those that do not are **void** functions.",
          },
          {
            type: "heading",
            text: "Three ways to pass arguments",
          },
          {
            type: "table",
            headers: ["Kind", "Example call", "Rule"],
            rows: [
              ["Positional", "`bill(1000, 5)`", "matched to parameters left to right; the count must match"],
              ["Default", "`def bill(amount, gst=18)`", "a parameter with a default may be left out; defaults must come **after** all non-default parameters"],
              ["Keyword (named)", "`bill(gst=12, amount=500)`", "matched by name, so order does not matter; positional arguments must come before keyword ones"],
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Change the calls and predict each total.",
            code: r`def bill(amount, gst=18, discount=0):
    tax = amount * gst / 100
    return amount + tax - discount

print(bill(1000))
print(bill(1000, 5))
print(bill(1000, discount=100))
print(bill(gst=12, amount=500))

def stats(a, b, c):
    total = a + b + c
    return total, total / 3

s, avg = stats(70, 80, 96)
print(s, avg)
print(stats(1, 2, 3))`,
          },
          {
            type: "example",
            title: "Reading the output",
            problem: "Explain each line printed by the program above.",
            steps: [
              "`bill(1000)`: gst = 18 by default, tax = 180, discount 0, so 1180.0 (a float because `/` was used).",
              "`bill(1000, 5)`: gst = 5, tax = 50, so 1050.0.",
              "`bill(1000, discount=100)`: gst stays 18, so 1000 + 180 − 100 = 1080.0.",
              "`bill(gst=12, amount=500)`: keyword arguments in any order; 500 + 60 = 560.0.",
              "`stats` returns two values packed as a tuple. Unpacking gives `246 82.0`; printing the call directly shows the tuple `(6, 2.0)`.",
            ],
            answer: "`1180.0`, `1050.0`, `1080.0`, `560.0`, `246 82.0`, `(6, 2.0)`.",
          },
          {
            type: "mistake",
            wrong: "`def interest(p, r=8, t)` is fine because every parameter has a name.",
            right: "It is a **SyntaxError**: a parameter without a default cannot follow one with a default. Write `def interest(p, t, r=8)`.",
            why: "If defaults could come first, Python could not tell which parameter a positional argument like `interest(5000, 2)` should fill. Putting defaults last removes the doubt.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "For `def f(x, y=2, z=3): return x * y + z`, what is `f(4, z=1)`?",
                options: ["`9`", "`11`", "`7`", "Error"],
                answer: 0,
                explain: "x = 4, y keeps its default 2, z = 1: 4 × 2 + 1 = 9.",
              },
              {
                kind: "truefalse",
                q: "A call like `f(y=5, 3)` is valid.",
                answer: false,
                explain: "A positional argument cannot come after a keyword argument; Python raises a SyntaxError.",
              },
            ],
          },
          {
            type: "text",
            md: "**Flow of execution.** Python reads a program from the top. A `def` statement only **creates** the function; its body does not run then. When a call is met, control jumps to the function's first statement, runs the body, and on `return` (or the end of the body) comes back to the point of the call. A function must be defined before the line that calls it runs.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the flow of execution in order for a call.",
              items: [
                "The def line is read and the function object is created",
                "The main program reaches the call bill(1000)",
                "Arguments are matched to parameters",
                "The function body runs",
                "return sends the value back to the line of the call",
              ],
              explain: "Defining a function does not run it. Each call matches arguments, runs the body and returns to where it was called.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "\"Differentiate between parameters and arguments\" and \"positional versus keyword arguments\" are favourite 2-mark questions. Give the definition and a two-line example for each. When writing a function in a program question, `return` the result unless the question says *display*.",
          },
          {
            type: "keypoints",
            items: [
              "Function types: built-in, defined in modules, user-defined (with `def`).",
              "Parameters are in the header; arguments are the values in the call.",
              "Default parameters must follow non-default ones; keyword arguments must follow positional ones.",
              "`return a, b` returns a tuple; no return means the function returns `None`.",
              "`def` creates the function; the body runs only when it is called.",
            ],
          },
        ],
        flashcards: [
          { front: "Parameter vs argument?", back: "A parameter is the name in the function header; an argument is the value passed in the call." },
          { front: "What does a function without return give back?", back: "`None`." },
          { front: "Rule for default parameters?", back: "They must come after all parameters without defaults." },
          { front: "What is a keyword argument?", back: "An argument passed as `name=value`, matched by name so order does not matter." },
          { front: "What does `return a, b` return?", back: "A tuple `(a, b)`, which can be unpacked: `x, y = f()`." },
          { front: "Name the three kinds of functions.", back: "Built-in, defined in modules, user-defined." },
          { front: "When does a function body run?", back: "Only when the function is called, not when `def` is read." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which header is **valid**?",
            options: ["`def f(a, b=1, c=2):`", "`def f(a=1, b, c):`", "`def f(a, b=1, c):`", "`def f(a=1, b):`"],
            answer: 0,
            explain: "Only the first keeps every default parameter after the non-default one.",
          },
          {
            kind: "mcq",
            q: "What is printed? `def greet(n): print(\"Hello\", n)` then `r = greet(\"Asha\")` and `print(r)`",
            options: ["`Hello Asha` then `None`", "`Hello Asha` then `Hello Asha`", "`None`", "`Hello Asha` only"],
            answer: 0,
            explain: "The call prints the greeting; greet has no return, so r is None, which is then printed.",
          },
          {
            kind: "fill",
            q: "In `def area(l, b):`, the names l and b are called ___ (formal parameters).",
            answer: ["parameters", "formal parameters"],
            explain: "Names in the header are parameters; values in the call are arguments.",
          },
          {
            kind: "numeric",
            q: "For `def calc(a, b=4, c=2): return a + b * c`, find `calc(3, c=5)`.",
            answer: 23,
            explain: "a = 3, b = 4 (default), c = 5: 3 + 4 × 5 = 23.",
          },
          {
            kind: "truefalse",
            q: "`math.sqrt()` can be used without any import statement.",
            answer: false,
            explain: "It belongs to the math module, so you need `import math` (or `from math import sqrt`).",
          },
          {
            kind: "mcq",
            q: "`def mm(L): return min(L), max(L)`. What does `print(mm([4, 9, 1]))` show?",
            options: ["`(1, 9)`", "`1 9`", "`[1, 9]`", "`1`"],
            answer: 0,
            explain: "Two returned values are packed into a tuple, and printing a tuple shows brackets.",
          },
          {
            kind: "multi",
            q: "For `def f(p, q=10):`, which calls are valid?",
            options: ["`f(5)`", "`f(q=3, p=2)`", "`f(p=1, 7)`", "`f()`", "`f(1, 2)`"],
            answers: [0, 1, 4],
            explain: "`f(p=1, 7)` puts a positional argument after a keyword one; `f()` leaves out p, which has no default.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-cs-scope-and-passing",
        title: "Scope of Variables and Passing Mutable Objects",
        summary: "Local and global scope, the global keyword, UnboundLocalError, and why a function can change a list you pass but not an int.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "The **scope** of a variable is the part of the program where that name can be used.\n\nA **global variable** is created outside every function, at the top level of the program. It can be **read** anywhere, including inside functions. A **local variable** is created inside a function (parameters are local too). It exists only while that function runs and cannot be used outside it.",
          },
          {
            type: "text",
            md: "When Python meets a name inside a function, it looks first in the **local** scope, then in any enclosing function, then in the **global** scope, then among built-in names (the LEGB order). If a function **assigns** to a name anywhere in its body, that name is local for the whole function, unless it is declared with the keyword **`global`**.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A local count hides the global one; global lets change() update it.",
            code: r`count = 10

def show():
    count = 5
    print("inside:", count)

def change():
    global count
    count = count + 1
    print("changed:", count)

show()
print("outside:", count)
change()
print("outside:", count)`,
          },
          {
            type: "text",
            md: "Output: `inside: 5`, `outside: 10`, `changed: 11`, `outside: 11`. Inside `show()` the assignment makes a new local `count`; the global stays 10. `change()` declares `global count`, so its assignment updates the global.",
          },
          {
            type: "mistake",
            wrong: "Inside a function I can write `z = z + 1` to update a global z, because the function can see globals.",
            right: "Because `z` is assigned in the function, it is local there, and reading it before it has a value raises **UnboundLocalError**. Add `global z` at the top of the function, or pass z in and return the new value.",
            why: "Reading a global without assigning does work, so learners think updating works too. The assignment is what changes the name's scope for the whole function.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is printed? `def total(): x = 3; x += 1; return x` then `x = 7` and `print(total() + x)`",
                options: ["`11`", "`15`", "`8`", "`14`"],
                answer: 0,
                explain: "The local x inside total() becomes 4 and is returned; the global x is still 7; 4 + 7 = 11.",
              },
            ],
          },
          {
            type: "heading",
            text: "Passing lists versus numbers",
          },
          {
            type: "text",
            md: "When you call a function, each parameter becomes a new name for the **same object** the argument refers to. What happens next depends on mutability.\n\nIf the object is **immutable** (int, float, str, tuple), any \"change\" inside the function makes the local name refer to a new object; the caller's variable is untouched. If the object is **mutable** (list, dict) and the function changes it **in place** (`append`, item assignment), the caller sees the change.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def update(n, L):
    n = n * 2
    L.append(n)
    print("in function:", n, L)

x = 4
nums = [1, 2]
update(x, nums)
print("after call:", x, nums)`,
          },
          {
            type: "example",
            title: "Why x stays 4 but nums changes",
            problem: "Explain the two lines of output: `in function: 8 [1, 2, 8]` and `after call: 4 [1, 2, 8]`.",
            steps: [
              "At the call, n refers to the int 4 and L refers to the same list object as nums.",
              "`n = n * 2` makes n refer to a new int 8; x still refers to 4.",
              "`L.append(n)` changes the shared list in place, so it becomes [1, 2, 8].",
              "After the call, x prints as 4 but nums prints the changed list.",
            ],
            answer: "Rebinding a parameter never affects the caller; changing a mutable object in place does.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What is nums after `def f(L): L = [0]` and `f(nums)` with nums = [5, 6]?",
              emoji: "📦",
              options: ["`[5, 6]`", "`[0]`", "`[5, 6, 0]`", "Error"],
              answer: 0,
              trap: 1,
              explain: "`L = [0]` only makes the local name L point at a new list. The original list is not changed in place, so nums is still [5, 6].",
            },
          },
          {
            type: "callout",
            tone: "warning",
            title: "The mutable default trap",
            md: "A default value is created **once**, when `def` runs. With `def add_item(item, basket=[])`, calling `add_item(\"mango\")` then `add_item(\"guava\")` returns `['mango']` and then `['mango', 'guava']`, because both calls share the same default list. Use `basket=None` and create a new list inside the function.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"local vs global\" questions write one sentence each plus a 4-line example using the `global` keyword. In output questions, keep two columns: one for global values and one for the local values inside the function call.",
          },
          {
            type: "keypoints",
            items: [
              "Global: made at top level, readable anywhere. Local: made inside a function, lives only during the call.",
              "Assigning to a name in a function makes it local, unless declared `global`.",
              "Using a local name before giving it a value raises UnboundLocalError.",
              "Changes to a list or dict in place are seen by the caller; rebinding a parameter is not.",
              "Default values are made once, so avoid mutable defaults.",
            ],
          },
        ],
        flashcards: [
          { front: "What is the scope of a variable?", back: "The part of the program where the name can be used." },
          { front: "Local variable?", back: "A name created inside a function (including its parameters); it exists only while the function runs." },
          { front: "Purpose of the `global` keyword?", back: "Lets a function assign to a global variable instead of creating a local one." },
          { front: "LEGB order?", back: "Local, Enclosing, Global, Built-in: the order Python searches for a name." },
          { front: "Can a function change the caller's int argument?", back: "No; ints are immutable, so rebinding the parameter does not affect the caller." },
          { front: "Can a function change the caller's list?", back: "Yes, if it changes the list in place (append, item assignment)." },
          { front: "When is a default parameter value created?", back: "Once, when the def statement runs." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "`def f(): print(y)` then `y = 2` then `f()`. Output?",
            options: ["`2`", "NameError", "UnboundLocalError", "`None`"],
            answer: 0,
            explain: "f only reads y, and y is global by the time f is called, so 2 is printed.",
          },
          {
            kind: "mcq",
            q: "`z = 1`, `def g(): z = z + 1`, then `g()`. What happens?",
            options: ["UnboundLocalError", "z becomes 2", "NameError", "Nothing"],
            answer: 0,
            explain: "The assignment makes z local in g; it is read before it has a value.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A local variable can be printed in the main program after the function returns.",
            answer: false,
            explain: "Local names stop existing when the function ends; the main program gets a NameError.",
          },
          {
            kind: "fill",
            q: "To change a global variable inside a function, declare it with the keyword ___.",
            answer: ["global"],
            explain: "`global name` must appear before the name is used in that function.",
          },
          {
            kind: "mcq",
            q: "`def addz(D): D[\"z\"] = 0` then `d = {\"a\": 1}`, `addz(d)`, `print(d)`. Output?",
            options: ["`{'a': 1, 'z': 0}`", "`{'a': 1}`", "`{'z': 0}`", "Error"],
            answer: 0,
            explain: "The dictionary is mutable and changed in place, so the caller sees the new key.",
          },
          {
            kind: "mcq",
            q: "`def dbl(s): s = s * 2` then `t = \"ab\"`, `dbl(t)`, `print(t)`. Output?",
            options: ["`ab`", "`abab`", "`None`", "Error"],
            answer: 0,
            explain: "Strings are immutable; s is rebound to a new string inside the function only.",
          },
          {
            kind: "multi",
            q: "Which are local to function `f` in `def f(a, b=1): c = a + b; return c`?",
            options: ["`a`", "`b`", "`c`", "`f`"],
            answers: [0, 1, 2],
            explain: "Parameters and names assigned in the body are local. The name f itself is global.",
          },
        ],
      },
      {
        slug: "c12-cs-functions-board-practice",
        title: "Functions: Board Practice",
        summary: "Output questions with default and global variables, possible outputs with the random module, and short functions to write on lists and strings.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Function questions in the board paper come in four shapes: **trace the output** of a function that changes its parameters, **possible outputs** of code that uses `random`, **find and correct errors**, and **write a function** that works on a list, string or dictionary passed to it.",
          },
          {
            type: "example",
            title: "Trace with default arguments",
            problem: "Find the output.\n\n`def Change(P, Q=30):` with body `P = P + Q`, `Q = P - Q`, `print(P, \"#\", Q)`, `return P`. Main: `R = 150`, `S = 100`, `R = Change(R, S)`, `print(R, \"#\", S)`, `S = Change(S)`.",
            steps: [
              "Call 1: P = 150, Q = 100. P = 250, Q = 250 − 100 = 150. Prints `250 # 150`; returns 250, so R = 250.",
              "Main prints `250 # 100` (S was never changed).",
              "Call 2: P = 100, Q takes its default 30. P = 130, Q = 130 − 30 = 100. Prints `130 # 100`.",
              "S becomes 130, but nothing more is printed.",
            ],
            answer: "`250 # 150`, `250 # 100`, `130 # 100`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Check the trace. Then add print(S) at the end.",
            code: r`def Change(P, Q=30):
    P = P + Q
    Q = P - Q
    print(P, "#", Q)
    return P

R = 150
S = 100
R = Change(R, S)
print(R, "#", S)
S = Change(S)`,
          },
          {
            type: "example",
            title: "A function that changes a list",
            problem: "`def Shift(L, n):` for every index i, if `L[i] % n == 0` set `L[i] = L[i] // n`, else `L[i] = L[i] * 10`. Find the output of `Nums = [12, 7, 15, 9, 20]`, `Shift(Nums, 3)`, `print(Nums)`.",
            steps: [
              "12 is divisible by 3 → 4. 7 is not → 70.",
              "15 → 5. 9 → 3. 20 is not → 200.",
              "The list was changed in place, so the caller sees it.",
            ],
            answer: "`[4, 70, 5, 3, 200]`",
          },
          {
            type: "heading",
            text: "Possible outputs with random",
          },
          {
            type: "text",
            md: "`random.random()` gives a float in [0, 1). `random.randint(a, b)` gives an int from a to b, **both included**. `random.randrange(a, b)` gives an int from a up to b − 1.\n\nMethod: write down the smallest and largest value of every random variable, then check each option against those limits.",
          },
          {
            type: "example",
            title: "Which output is impossible?",
            problem: "`cities = [\"Agra\", \"Bidar\", \"Chennai\", \"Delhi\"]`, `start = random.randint(0, 2)`, `end = random.randint(2, 3)`, then `for k in range(start, end + 1): print(cities[k], end=\"-\")`. Which cannot be printed: (a) `Agra-Bidar-Chennai-` (b) `Chennai-` (c) `Bidar-Chennai-Delhi-` (d) `Delhi-`?",
            steps: [
              "start can be 0, 1 or 2; end can be 2 or 3.",
              "(a) needs start 0, end 2: possible. (b) needs start 2, end 2: possible.",
              "(c) needs start 1, end 3: possible.",
              "(d) needs start = 3, but start is at most 2.",
            ],
            answer: "(d) `Delhi-` is not possible. The output always begins with Agra, Bidar or Chennai.",
          },
          {
            type: "mistake",
            wrong: "`random.randint(1, 5)` behaves like `range(1, 5)`, so it never gives 5.",
            right: "`randint(a, b)` **includes** both ends, so 5 is possible. It is `randrange(1, 5)` that stops at 4.",
            why: "Learners carry the \"stop is excluded\" rule from `range()` and slicing to every function. `randint` is the exception.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "`k = random.randint(2, 4)`; `print(\"AB\" * k)`. Which output is **not** possible?",
                options: ["`ABAB`", "`ABABAB`", "`ABABABAB`", "`AB`"],
                answer: 3,
                explain: "k is 2, 3 or 4, so \"AB\" repeats 2 to 4 times. A single AB would need k = 1.",
              },
            ],
          },
          {
            type: "heading",
            text: "Write the function",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Three short functions of the kind asked for 2–3 marks.",
            code: r`def count_vowels(text):
    n = 0
    for ch in text.lower():
        if ch in "aeiou":
            n += 1
    return n

def is_palindrome(word):
    w = word.lower()
    return w == w[::-1]

def lshift(arr, n):
    return arr[n:] + arr[:n]

print(count_vowels("Hampi Utsav"))
print(is_palindrome("Malayalam"), is_palindrome("Kannada"))
print(lshift([10, 20, 30, 40, 50], 2))`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each call to its output.",
              pairs: [
                ["`count_vowels(\"Hampi Utsav\")`", "`4`"],
                ["`is_palindrome(\"Malayalam\")`", "`True`"],
                ["`lshift([10, 20, 30, 40, 50], 2)`", "`[30, 40, 50, 10, 20]`"],
                ["`random.randint(3, 3)`", "`3`"],
              ],
              explain: "Hampi Utsav has a, i, U, a. Malayalam reads the same backwards once lowered. Slicing from index 2 and adding the first two items shifts left by 2.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"possible outputs\" questions, the examiner also asks for the **minimum and maximum value** a random variable can take. Write those first; they earn marks even if you pick a wrong option.",
          },
          {
            type: "keypoints",
            items: [
              "Track parameter values separately from the caller's variables in every call.",
              "A list passed to a function and changed in place stays changed.",
              "`randint(a, b)` includes both ends; `randrange(a, b)` excludes b.",
              "For possible outputs, find each random variable's range first.",
              "Return results from functions unless asked to display them.",
            ],
          },
        ],
        flashcards: [
          { front: "Range of `random.randint(1, 6)`?", back: "1 to 6, both included." },
          { front: "Range of `random.randrange(1, 6)`?", back: "1 to 5." },
          { front: "Range of `random.random()`?", back: "A float from 0.0 up to, but not including, 1.0." },
          { front: "One-line palindrome check?", back: "`return w == w[::-1]`" },
          { front: "Left-shift a list by n using slices?", back: "`arr[n:] + arr[:n]`" },
          { front: "First step in a possible-outputs question?", back: "Write the minimum and maximum value of each random variable." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "`def F(a, b=5): a += b; return a * 2`. What is `F(F(1))`?",
            options: ["`34`", "`22`", "`12`", "`17`"],
            answer: 0,
            explain: "F(1): a = 6, returns 12. F(12): a = 17, returns 34.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "`N = random.randrange(10, 20)`. What is the largest value N can take?",
            answer: 19,
            explain: "randrange stops before 20.",
          },
          {
            kind: "mcq",
            q: "`def tot(L): s = 0` then `for x in L: s += x` then `return s / len(L)`. What is `tot([4, 6, 11])`?",
            options: ["`7.0`", "`7`", "`21`", "`7.33`"],
            answer: 0,
            explain: "Sum 21 ÷ 3 = 7.0; `/` always gives a float.",
          },
          {
            kind: "truefalse",
            q: "`random.randint(0, 1)` can return 1.",
            answer: true,
            explain: "Both ends are included.",
          },
          {
            kind: "mcq",
            q: "`x = 5`, `def p(): global x; x = x * 3`, then `p()`, `p()`, `print(x)`. Output?",
            options: ["`45`", "`15`", "`5`", "Error"],
            answer: 0,
            explain: "Each call triples the global: 5 → 15 → 45.",
          },
          {
            kind: "fill",
            q: "To use `randint()` without writing `random.` in front, write `from random import ___`.",
            answer: ["randint"],
            explain: "`from random import randint` brings that one name into the program.",
          },
          {
            kind: "multi",
            q: "`v = random.randint(1, 3)`; `print(\"#\" * v + \"*\")`. Which outputs are possible?",
            options: ["`#*`", "`##*`", "`###*`", "`*`", "`####*`"],
            answers: [0, 1, 2],
            explain: "v is 1, 2 or 3, so 1 to 3 hashes come before the star.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Exception Handling                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-exception-handling",
    title: "Exception Handling",
    icon: "🛟",
    description: "Syntax errors versus exceptions, built-in exceptions, raise and assert, and handling exceptions with try, except, else and finally.",
    lessons: [
      {
        slug: "c12-cs-errors-and-exceptions",
        title: "Syntax Errors, Exceptions, raise and assert",
        summary: "Why a program stops, the difference between a syntax error and an exception, the built-in exceptions you must recognise, and how to throw one yourself with raise and assert.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚧",
            caption: "A railway ticket app asks for the number of passengers and someone types \"two\". Without a plan for bad input, the whole app crashes.",
          },
          {
            type: "text",
            md: "A **syntax error** (also called a parsing error) happens when code breaks the grammar rules of Python: a missing colon, an unclosed bracket, wrong indentation. The interpreter finds it **before** the program starts running and shows the line with a small arrow. Nothing in the program runs until it is fixed.\n\nAn **exception** is an error that happens **while the program is running**, even though the code is grammatically correct: dividing by zero, opening a file that does not exist, converting \"abc\" to int. When it happens, Python creates an **exception object**; if nothing handles it, the program stops and prints a **traceback**.",
          },
          {
            type: "table",
            headers: ["Built-in exception", "Raised when…", "Example"],
            rows: [
              ["`SyntaxError`", "the code breaks Python's grammar", "`if x > 2 print(x)`"],
              ["`IndentationError`", "indentation is wrong (a kind of SyntaxError)", "a body line not indented"],
              ["`ValueError`", "the type is right but the value is not", "`int(\"abc\")`"],
              ["`TypeError`", "an operation gets the wrong type", "`\"5\" + 5`"],
              ["`ZeroDivisionError`", "the divisor is zero", "`10 / 0`, `10 % 0`"],
              ["`NameError`", "a name is not defined", "`print(totl)`"],
              ["`IndexError`", "a sequence index is out of range", "`[1, 2][5]`"],
              ["`KeyError`", "a dictionary key is missing", "`{\"a\": 1}[\"b\"]`"],
              ["`ImportError`", "a module cannot be found or loaded", "`import nomodule`"],
              ["`IOError` / `OSError`", "an input/output operation fails", "opening a missing file for reading"],
              ["`EOFError`", "`input()` reaches end of file with no data", "pressing Ctrl+D at an input prompt"],
              ["`OverflowError`", "a calculation is too large to represent", "`2.0 ** 10000`"],
              ["`KeyboardInterrupt`", "the user presses Ctrl+C or Delete while it runs", "stopping a long loop"],
            ],
          },
          {
            type: "text",
            md: "In Python 3, `IOError` is another name for `OSError`, and a missing file raises its subclass `FileNotFoundError`. A missing module raises `ModuleNotFoundError`, a subclass of `ImportError`. Board answers that name the parent class (IOError, ImportError) are accepted.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each line to the exception it raises.",
              pairs: [
                ["`int(\"12a\")`", "ValueError"],
                ["`\"Total: \" + 50`", "TypeError"],
                ["`marks[10]` for a 5-item list", "IndexError"],
                ["`7 // 0`", "ZeroDivisionError"],
                ["`print(Score)` when only `score` exists", "NameError"],
              ],
              explain: "ValueError means a wrong value of the right type; TypeError means the wrong type altogether. Python is case-sensitive, so Score is undefined.",
            },
          },
          {
            type: "mistake",
            wrong: "`int(\"abc\")` gives a TypeError, because \"abc\" is the wrong type.",
            right: "It gives a **ValueError**. `int()` does accept a string; it is this particular string's value that cannot be converted. `int(\"42\")` works fine.",
            why: "Both names sound like \"wrong data\". Test: if some value of that same type would work, it is a ValueError; if no value of that type could work (adding a str to an int), it is a TypeError.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is detected **before** the program starts running?",
                options: ["SyntaxError", "ZeroDivisionError", "KeyError", "ValueError"],
                answer: 0,
                explain: "Syntax errors are found while the code is being parsed. The others are exceptions raised at run time.",
              },
              {
                kind: "truefalse",
                q: "Every exception is an error that stops the program, whatever we do.",
                answer: false,
                explain: "An exception stops the program only if it is not handled. A try–except block can catch it and let the program continue.",
              },
            ],
          },
          {
            type: "heading",
            text: "Raising exceptions: raise and assert",
          },
          {
            type: "text",
            md: "Python raises built-in exceptions on its own, but a programmer can also **throw** one on purpose. The **`raise`** statement creates the exception and passes control away at once: `raise ValueError(\"age cannot be negative\")`. The statements after `raise` in that block do not run.\n\nThe **`assert`** statement tests a condition that must be true: `assert condition, \"message\"`. If the condition is True nothing happens; if it is False, Python raises an **AssertionError** with the message. It is a quick way to check inputs while developing.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

try:
    set_age(-3)
except ValueError as err:
    print("Caught:", err)

def avg(marks):
    assert len(marks) > 0, "empty list"
    return sum(marks) / len(marks)

print(avg([60, 70]))
try:
    avg([])
except AssertionError as err:
    print("Assertion failed:", err)`,
          },
          {
            type: "example",
            title: "What raise and assert do here",
            problem: "Explain the three lines of output: `Caught: age cannot be negative`, `65.0`, `Assertion failed: empty list`.",
            steps: [
              "`set_age(-3)`: the condition age < 0 is True, so raise throws a ValueError carrying the message; `return age` never runs.",
              "The except clause catches it; `as err` names the exception object, and printing err shows its message.",
              "`avg([60, 70])`: the assertion is True, so the average 130 / 2 = 65.0 is returned.",
              "`avg([])`: len is 0, the assertion fails and AssertionError(\"empty list\") is raised and caught.",
            ],
            answer: "raise always throws; assert throws AssertionError only when its condition is False.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "\"Differentiate between syntax error and exception\" carries 2 marks: say *when* each is detected (before running / while running) and give one example of each. For `raise` and `assert`, write the syntax line and one example.",
          },
          {
            type: "keypoints",
            items: [
              "Syntax errors are found before the program runs; exceptions occur during the run.",
              "An unhandled exception stops the program and prints a traceback.",
              "ValueError: right type, bad value. TypeError: wrong type for the operation.",
              "`raise ExceptionName(\"message\")` throws an exception on purpose.",
              "`assert condition, \"message\"` raises AssertionError when the condition is False.",
            ],
          },
        ],
        flashcards: [
          { front: "Syntax error vs exception?", back: "A syntax error breaks Python's grammar and is found before running; an exception occurs while the program runs." },
          { front: "Exception raised by `int(\"abc\")`?", back: "ValueError." },
          { front: "Exception raised by `\"5\" + 5`?", back: "TypeError." },
          { front: "Exception for a missing dictionary key?", back: "KeyError." },
          { front: "Syntax of raise?", back: "`raise ExceptionName(\"optional message\")`" },
          { front: "What does `assert x > 0, \"msg\"` do when x is −1?", back: "Raises AssertionError with the message \"msg\"." },
          { front: "Which exception does Ctrl+C raise?", back: "KeyboardInterrupt." },
          { front: "What is a traceback?", back: "The error report Python prints when an exception is not handled, ending with the exception name and message." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which exception does `L = [3, 6]; print(L[2])` raise?",
            options: ["IndexError", "KeyError", "ValueError", "NameError"],
            answer: 0,
            explain: "Valid indices are 0 and 1, so index 2 is out of range.",
          },
          {
            kind: "mcq",
            q: "Which exception does `print(10 % 0)` raise?",
            options: ["ZeroDivisionError", "ValueError", "ArithmeticError only", "No error, prints 0"],
            answer: 0,
            explain: "Modulus by zero is a division by zero too.",
          },
          {
            kind: "truefalse",
            q: "`assert 5 > 2, \"wrong\"` raises an AssertionError.",
            answer: false,
            explain: "The condition is True, so assert does nothing.",
          },
          {
            kind: "fill",
            q: "The keyword ___ is used to throw an exception deliberately.",
            answer: ["raise"],
            explain: "`raise` creates and throws the named exception.",
          },
          {
            kind: "mcq",
            q: "An exception raised when Python cannot find a module named in an import statement is…",
            options: ["ImportError", "NameError", "IOError", "EOFError"],
            answer: 0,
            explain: "Import failures raise ImportError (in Python 3, its subclass ModuleNotFoundError).",
          },
          {
            kind: "multi",
            q: "Which of these are raised only while the program is running (exceptions)?",
            options: ["ZeroDivisionError", "SyntaxError", "TypeError", "KeyError", "IndentationError"],
            answers: [0, 2, 3],
            explain: "SyntaxError and its subclass IndentationError are found when the code is parsed, before it runs.",
          },
          {
            kind: "mcq",
            q: "What does the program print after `raise ValueError(\"x\")` if the exception is not handled?",
            options: ["A traceback ending in `ValueError: x`", "Just `x`", "Nothing; it continues", "`None`"],
            answer: 0,
            explain: "An unhandled exception stops the program with a traceback whose last line is the exception name and message.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-cs-try-except-finally",
        title: "Handling Exceptions: try, except, else, finally",
        summary: "Catching exceptions with try and except, several except clauses, the else and finally clauses, tracing which blocks run, plus board-style questions.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Exception handling** means writing code that catches an exception and deals with it so the program does not crash. Put the risky statements in a **`try`** block. If an exception occurs there, Python skips the rest of the try block and looks for a matching **`except`** clause. This is called **catching** the exception.\n\nIf no except clause matches, Python passes the exception up to the code that called the function, and so on up the **call stack**. If no handler is found anywhere, the program stops.",
          },
          {
            type: "code",
            lang: "python",
            caption: "Full syntax (display only). Only try and at least one except (or finally) are required.",
            code: r`try:
    statements that may raise an exception
except ZeroDivisionError:
    runs if that exception occurred
except (ValueError, TypeError):
    one clause can catch several exceptions
except:
    catches any other exception (keep it last)
else:
    runs only if the try block raised NO exception
finally:
    always runs, exception or not`,
          },
          {
            type: "table",
            headers: ["Clause", "Runs when"],
            rows: [
              ["`try`", "always, until the first exception (if any)"],
              ["`except Name`", "an exception of that type (or a subclass) occurred in try"],
              ["`except` (no name)", "any exception not matched by an earlier except"],
              ["`else`", "the try block finished with **no** exception"],
              ["`finally`", "**always**, last, whether or not an exception occurred or was handled"],
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "One function, three calls, three different paths.",
            code: r`def divide(a, b):
    try:
        q = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
    except TypeError:
        print("Numbers only")
    else:
        print("Quotient:", q)
    finally:
        print("Done with", a, b)

divide(9, 3)
divide(9, 0)
divide(9, "3")`,
          },
          {
            type: "text",
            md: "Output:\n\n`Quotient: 3.0` / `Done with 9 3`\n\n`Cannot divide by zero` / `Done with 9 0`\n\n`Numbers only` / `Done with 9 3`\n\nThe last line shows `9 3` because print displays the string \"3\" without quotes. `finally` ran in all three calls.",
          },
          {
            type: "example",
            title: "Which blocks run?",
            problem: "Find the output.\n\n`try:` `x = int(\"7\")`, `print(\"A\")`, `y = x / 0`, `print(\"B\")` / `except ZeroDivisionError: print(\"C\")` / `else: print(\"D\")` / `finally: print(\"E\")` / then `print(\"F\")` after the whole statement.",
            steps: [
              "`int(\"7\")` works and A is printed.",
              "`x / 0` raises ZeroDivisionError; the rest of try (print B) is skipped.",
              "The matching except prints C. Because an exception occurred, else is skipped.",
              "finally prints E. The exception was handled, so the program continues and prints F.",
            ],
            answer: "A, C, E, F (one per line).",
          },
          {
            type: "mistake",
            wrong: "The `else` block runs after the except block has handled the error, like an \"otherwise\" that always comes next.",
            right: "`else` runs **only when the try block raised no exception**. After an exception is handled, else is skipped; it is `finally` that always runs.",
            why: "In `if–else`, one of the two parts always runs, so learners expect the same here. In try statements, else pairs with \"no error\" and finally with \"always\".",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In `try: ... except: ... else: ... finally: ...`, which part runs even if the try block raises an exception that **no** except clause handles?",
                options: ["finally", "else", "the bare except", "none of them"],
                answer: 0,
                explain: "finally always runs; then the unhandled exception continues upward and may stop the program.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Total after the loop? Each item adds `24 // int(item)`.",
              emoji: "🧮",
              options: ["`8`", "Program crashes at \"x\"", "`14`", "`2`"],
              answer: 0,
              trap: 1,
              explain: "With data [\"12\", \"x\", \"0\", \"4\"] and except clauses for ValueError and ZeroDivisionError inside the loop: 12 adds 2, \"x\" is caught as ValueError, \"0\" is caught as ZeroDivisionError, 4 adds 6. Total 8; the loop never crashes.",
            },
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "The loop from the activity: errors are handled per item.",
            code: r`data = ["12", "x", "0", "4"]
total = 0
for item in data:
    try:
        total += 24 // int(item)
    except ValueError:
        print("bad:", item)
    except ZeroDivisionError:
        print("zero skipped")
print("total =", total)`,
          },
          {
            type: "example",
            title: "Board-style program",
            problem: "Write a program that asks for two numbers and prints their quotient, showing a friendly message for a zero divisor or for input that is not a number, and printing \"Thank you\" in every case.",
            steps: [
              "Put both `int(input(...))` calls and the division inside try.",
              "`except ValueError:` print \"Please enter whole numbers\".",
              "`except ZeroDivisionError:` print \"Second number cannot be zero\".",
              "`else:` print the quotient; `finally:` print \"Thank you\".",
            ],
            answer: "Inputs 15 and 4 print `Quotient: 3.75` then `Thank you`; inputs 15 and 0 print the zero message then `Thank you`; input \"ten\" prints the whole-numbers message then `Thank you`.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When you write several except clauses, put specific exceptions first and the bare `except:` last (Python reports a SyntaxError if a bare except is not the last one). In output questions, mark which line raised the exception and cross out the rest of the try block.",
          },
          {
            type: "keypoints",
            items: [
              "try holds risky code; at the first exception the rest of try is skipped.",
              "Python runs the first matching except; a bare except catches anything left.",
              "else runs only if try raised no exception.",
              "finally always runs, even when the exception is not handled.",
              "Handled exceptions let the program continue after the try statement.",
            ],
          },
        ],
        flashcards: [
          { front: "When does the else clause of try run?", back: "Only when the try block raised no exception." },
          { front: "When does finally run?", back: "Always, whether or not an exception occurred or was handled." },
          { front: "What happens to the rest of the try block after an exception?", back: "It is skipped; control jumps to the matching except." },
          { front: "Where must a bare `except:` go?", back: "After all the named except clauses (last)." },
          { front: "How do you catch two exceptions in one clause?", back: "Give a tuple: `except (ValueError, TypeError):`" },
          { front: "What does `except ValueError as err` give you?", back: "The exception object in err; `print(err)` shows its message." },
          { front: "What if no except matches?", back: "finally runs, then the exception passes up the call stack; if never handled, the program stops." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "`try: print(\"P\")` / `except: print(\"Q\")` / `else: print(\"R\")` / `finally: print(\"S\")`. Output?",
            options: ["P R S", "P Q S", "P S", "P Q R S"],
            answer: 0,
            explain: "No exception: try prints P, else prints R, finally prints S.",
          },
          {
            kind: "mcq",
            q: "`try: L = [1, 2, 3]; print(L[3])` / `except: print(\"Something went wrong\")`. Output?",
            options: ["`Something went wrong`", "`3`", "IndexError traceback", "`None`"],
            answer: 0,
            explain: "L[3] raises IndexError, which the bare except catches.",
          },
          {
            kind: "truefalse",
            q: "A try statement may have more than one except clause.",
            answer: true,
            explain: "Each except handles a different exception; the first matching one runs.",
          },
          {
            kind: "fill",
            q: "The clause that runs whether or not an exception occurs is ___.",
            answer: ["finally"],
            explain: "finally is used for clean-up such as closing files.",
          },
          {
            kind: "mcq",
            q: "`def f():` `try: return \"try\"` `finally: print(\"finally runs\")`. What does `print(f())` show?",
            options: ["`finally runs` then `try`", "`try` then `finally runs`", "`try` only", "`finally runs` only"],
            answer: 0,
            explain: "finally runs before the function actually returns, so its print comes first; then the returned \"try\" is printed.",
            difficulty: 3,
          },
          {
            kind: "order",
            q: "For a try block that raises a handled exception, put the events in order.",
            items: ["Statements in try run up to the error", "The exception object is created", "The matching except block runs", "The finally block runs", "The statement after the try statement runs"],
            explain: "else is skipped because an exception occurred; finally always comes before the program moves on.",
          },
          {
            kind: "multi",
            q: "Which are true about exception handling?",
            options: ["It stops a program from crashing on bad input", "else runs after every except", "finally is good for closing files", "A bare except must come last"],
            answers: [0, 2, 3],
            explain: "else runs only when no exception occurred, not after except.",
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Python Revision Tour": "c12-cs-python-revision",
  "12:Functions": "c12-cs-functions",
  "12:Exception Handling": "c12-cs-exception-handling",
};
