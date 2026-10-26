import type { Topic } from "@/content/types";

/** String.raw keeps code backslashes (\n, \t) exactly as written. */
const r = String.raw;

/** Seed data for the runnable SQL examples (SQLite in the browser; the same statements work in MySQL). */
const STAFF_SQL = `CREATE TABLE STAFF (
  SID INT PRIMARY KEY,
  Name VARCHAR(20) NOT NULL,
  Dept VARCHAR(10),
  Salary INT,
  City VARCHAR(15),
  Bonus INT
);
INSERT INTO STAFF VALUES (101, 'Anil', 'Sales', 42000, 'Pune', 3000);
INSERT INTO STAFF VALUES (102, 'Bhavya', 'IT', 65000, 'Bengaluru', NULL);
INSERT INTO STAFF VALUES (103, 'Chirag', 'HR', 38000, 'Mysuru', 2000);
INSERT INTO STAFF VALUES (104, 'Deepa', 'IT', 72000, 'Bengaluru', 5000);
INSERT INTO STAFF VALUES (105, 'Esha', 'Sales', 45000, 'Mangaluru', NULL);
INSERT INTO STAFF VALUES (106, 'Farooq', 'HR', 40000, 'Pune', 2500);
INSERT INTO STAFF VALUES (107, 'Gita', 'IT', 58000, 'Mysuru', 4000);`;
const DEPT_SQL = `CREATE TABLE DEPT (Dept VARCHAR(10) PRIMARY KEY, HOD VARCHAR(20), Floor INT);
INSERT INTO DEPT VALUES ('Sales', 'Rao', 1);
INSERT INTO DEPT VALUES ('IT', 'Iyer', 3);
INSERT INTO DEPT VALUES ('HR', 'Khan', 2);`;

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
            md: "In Python 3, `IOError` is another name for `OSError`, and a missing file raises its subclass `FileNotFoundError`. A missing module raises `ModuleNotFoundError`, a subclass of `ImportError`. Board answers that name the parent class (IOError, ImportError), as the NCERT book does, are normally accepted.",
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
  /* ------------------------------------------------------------------ */
  /* Class 12 · File Handling                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-file-handling",
    title: "File Handling",
    icon: "📁",
    description: "Text files (open modes, read and write methods, with, seek and tell), binary files with pickle (dump, load, search, update) and CSV files with the csv module.",
    lessons: [
      {
        slug: "c12-cs-text-files",
        title: "Text Files: Opening, Reading and Writing",
        summary: "Why files are needed, text versus binary versus CSV files, paths, file modes, write and writelines, read, readline and readlines, the with statement, seek and tell, and the classic counting programs.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "Variables live in RAM and disappear when a program ends. To keep data (marks, bills, logs) for later, a program saves it in a **file** on secondary storage. A file is a named collection of bytes.\n\nA **text file** stores characters (letters, digits, symbols) in an encoding such as ASCII or UTF-8, and is split into lines by the **end-of-line (EOL) character** `\\n`. You can open it in Notepad. A **binary file** stores data as raw bytes, exactly as in memory (images, audio, pickled Python objects); it is not readable as text. A **CSV file** is a text file whose lines hold values separated by commas.",
          },
          {
            type: "text",
            md: "A **path** tells Python where the file is. An **absolute path** starts from the root of the drive, such as `C:\\School\\CS\\marks.txt` on Windows. Inside a Python string, write it as a raw string `r\"C:\\School\\CS\\marks.txt\"` or double every backslash, because `\\` starts an escape sequence. A **relative path** starts from the current working folder, such as `marks.txt` or `data/marks.txt`.",
          },
          {
            type: "table",
            headers: ["Mode", "Meaning", "If the file is missing", "File pointer starts at"],
            rows: [
              ["`r` (default)", "read only", "FileNotFoundError", "beginning"],
              ["`r+`", "read and write", "FileNotFoundError", "beginning"],
              ["`w`", "write only; **erases** old contents", "creates it", "beginning"],
              ["`w+`", "write and read; erases old contents", "creates it", "beginning"],
              ["`a`", "append: write at the end, old data kept", "creates it", "end"],
              ["`a+`", "append and read", "creates it", "end"],
            ],
          },
          {
            type: "text",
            md: "Add `b` for binary files: `rb`, `wb`, `ab`, `rb+`, `wb+`, `ab+`.\n\n`f = open(\"poem.txt\", \"w\")` returns a **file object** (file handle) through which all reading and writing happens. Always `f.close()` when done: it flushes data still waiting in the buffer onto the disk. The **`with`** statement closes the file automatically when its block ends, even if an exception occurs, so it is the preferred style.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Writing, then reading in three different ways.",
            code: r`f = open("poem.txt", "w")
f.write("Rain on the hills\n")
f.writelines(["Mist in the valley\n", "Coffee in Coorg\n"])
f.close()

with open("poem.txt", "r") as f:
    print(f.read(4))
    print(f.readline(), end="")
    rest = f.readlines()
print(rest)
print(f.closed)`,
          },
          {
            type: "table",
            headers: ["Method", "Does", "Returns"],
            rows: [
              ["`write(s)`", "writes string s (no automatic newline)", "number of characters written"],
              ["`writelines(L)`", "writes every string in the list L (no newlines added)", "`None`"],
              ["`read()` / `read(n)`", "the whole rest of the file / at most n characters", "a string"],
              ["`readline()`", "one line including its `\\n`; `\"\"` at end of file", "a string"],
              ["`readlines()`", "all remaining lines", "a list of strings"],
              ["`tell()`", "current position of the file pointer", "an int (bytes from the start)"],
              ["`seek(offset, from)`", "moves the pointer; from = 0 start (default), 1 current, 2 end", "new position"],
            ],
          },
          {
            type: "example",
            title: "Tracing the file pointer",
            problem: "poem.txt holds the 3 lines `Rain on the hills`, `Mist in the valley`, `Coffee in Coorg` (18 + 19 + 16 = 53 characters with newlines). Find the output of: `print(f.tell())`, `f.seek(5)`, `print(f.read(6))`, `print(f.tell())`, `data = f.read()`, `print(len(data))`.",
            steps: [
              "A newly opened file in r mode has its pointer at 0, so 0 is printed.",
              "seek(5) moves past \"Rain \" (R-a-i-n-space).",
              "read(6) reads \"on the\" and the pointer moves to 11.",
              "read() takes everything left: 53 − 11 = 42 characters.",
            ],
            answer: "`0`, `on the`, `11`, `42`.",
          },
          {
            type: "mistake",
            wrong: "To add a new line to the end of my diary file I open it with `\"w\"`, since I want to write.",
            right: "Mode `\"w\"` **erases** the file the moment it is opened. Use `\"a\"` (append) to keep the old contents and write at the end.",
            why: "\"w for write\" sounds right. But write mode always starts with an empty file; only append mode keeps what was there.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which method returns a **list** of lines?",
                options: ["`readlines()`", "`readline()`", "`read()`", "`writelines()`"],
                answer: 0,
                explain: "readlines() returns all remaining lines as a list; readline() returns one string.",
              },
              {
                kind: "truefalse",
                q: "Opening a file that does not exist in mode `\"a\"` raises FileNotFoundError.",
                answer: false,
                explain: "a, a+, w and w+ create the file if it is missing. Only r and r+ need it to exist.",
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Two board favourites: count a word, show lines that start with T.",
            code: r`with open("notes.txt", "w") as f:
    f.write("The Ganga flows east.\nthe Kaveri flows to the Bay.\nA dam stands on the river.\n")

def count_the(fname):
    n = 0
    with open(fname) as f:
        for word in f.read().split():
            if word.lower() == "the":
                n += 1
    return n

def lines_starting_T(fname):
    with open(fname) as f:
        for line in f:
            if line[0] in "Tt":
                print(line, end="")

print(count_the("notes.txt"))
lines_starting_T("notes.txt")`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does the old content survive opening in this mode?",
              groups: ["Old content kept", "Old content erased"],
              items: [
                { text: "\"r\"", group: 0, hint: "Read mode never changes the file." },
                { text: "\"a\"", group: 0, hint: "Append writes after the old data." },
                { text: "\"r+\"", group: 0, hint: "r+ opens an existing file without truncating it." },
                { text: "\"a+\"", group: 0, hint: "Append-and-read keeps old data." },
                { text: "\"w\"", group: 1, hint: "Write mode truncates the file to zero length." },
                { text: "\"w+\"", group: 1, hint: "w+ also truncates first." },
                { text: "\"wb\"", group: 1, hint: "Binary write mode truncates too." },
              ],
              explain: "Every mode with w empties the file on opening. r+ can overwrite characters where the pointer is, but it does not erase the file first.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Text-file programs (count words, count lines starting with a letter, count vowels, copy lines to another file) appear in almost every paper for 3 marks. Write a function with the file name as given, use `with open(...)`, and use `split()` for words and a `for line in f` loop for lines.",
          },
          {
            type: "keypoints",
            items: [
              "Text files store characters split by `\\n`; binary files store raw bytes.",
              "`w` erases, `a` appends, `r` needs an existing file; add `b` for binary.",
              "`read()` → string, `readline()` → one line, `readlines()` → list of lines.",
              "`write()` and `writelines()` add no newline on their own.",
              "`with open(...) as f:` closes the file automatically; `tell()` and `seek()` work with the file pointer.",
            ],
          },
        ],
        flashcards: [
          { front: "Text file vs binary file?", back: "A text file stores characters in lines ending with EOL; a binary file stores raw bytes not meant to be read as text." },
          { front: "What does mode \"w\" do to an existing file?", back: "Erases its contents (truncates it) before writing." },
          { front: "Mode to add data at the end of a file?", back: "\"a\" (or \"ab\" for binary)." },
          { front: "What does `readline()` return at end of file?", back: "An empty string \"\"." },
          { front: "Why close a file?", back: "To flush buffered data to the disk and free the file; `with` does it automatically." },
          { front: "What does `tell()` return?", back: "The current position of the file pointer, in bytes from the start." },
          { front: "`seek(0)` does what?", back: "Moves the file pointer back to the beginning of the file." },
          { front: "Absolute vs relative path?", back: "Absolute starts from the root of the drive; relative starts from the current working folder." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which mode opens a file for both reading and writing **without** erasing it, and fails if the file is missing?",
            options: ["`r+`", "`w+`", "`a+`", "`w`"],
            answer: 0,
            explain: "r+ needs an existing file and does not truncate it.",
          },
          {
            kind: "mcq",
            q: "`f.write(\"abc\\n\")` returns…",
            options: ["`4`", "`3`", "`None`", "`True`"],
            answer: 0,
            explain: "write returns the number of characters written; the newline counts as one.",
          },
          {
            kind: "fill",
            q: "To move the file pointer to the 10th byte from the start, write `f.___(10)`.",
            answer: ["seek"],
            explain: "seek(offset) with the default reference point 0 measures from the start.",
          },
          {
            kind: "truefalse",
            q: "`writelines([\"a\", \"b\"])` writes `a` and `b` on separate lines.",
            answer: false,
            explain: "writelines adds no newlines; it writes \"ab\". Include \\n in each string to get separate lines.",
          },
          {
            kind: "numeric",
            q: "A file holds `Hello\\nWorld\\n` (12 characters). After `f.read(3)` then `f.readline()`, what does `f.tell()` return?",
            answer: 6,
            explain: "read(3) reaches position 3; readline() reads the rest of the line \"lo\\n\" up to position 6.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which statement correctly counts the lines in notes.txt?",
            options: ["`len(open(\"notes.txt\").readlines())`", "`len(open(\"notes.txt\").read())`", "`open(\"notes.txt\").count()`", "`len(open(\"notes.txt\").readline())`"],
            answer: 0,
            explain: "readlines() gives one list item per line. read() would count characters.",
          },
          {
            kind: "multi",
            q: "Which modes create the file if it does not exist?",
            options: ["`w`", "`a`", "`r`", "`a+`", "`r+`"],
            answers: [0, 1, 3],
            explain: "w, w+, a and a+ create a missing file; r and r+ raise FileNotFoundError.",
          },
          {
            kind: "mcq",
            q: "Which exception occurs on `open(\"missing.txt\")` when the file does not exist?",
            options: ["FileNotFoundError", "EOFError", "KeyError", "ValueError"],
            answer: 0,
            explain: "FileNotFoundError is a subclass of OSError (IOError).",
          },
        ],
      },
      {
        slug: "c12-cs-binary-files-pickle",
        title: "Binary Files with pickle",
        summary: "Storing whole Python objects in a binary file: pickling and unpickling with dump and load, reading to the end with EOFError, and the search, append and update programs the board asks for.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "A text file can only hold strings, so a list like `[1, \"Ananya\", 91]` would have to be converted to text and parsed back. The **pickle** module saves a Python object (list, dict, tuple, number) directly to a binary file and rebuilds it later.\n\n**Pickling** (serialisation) converts an object into a stream of bytes. **Unpickling** (de-serialisation) turns the bytes back into the same object. The file must be opened in a binary mode: `wb`, `ab` or `rb`.",
          },
          {
            type: "table",
            headers: ["Function", "Use", "Note"],
            rows: [
              ["`pickle.dump(obj, f)`", "writes one object to the binary file f", "f opened with `wb` or `ab`"],
              ["`pickle.load(f)`", "reads and returns the next object", "raises **EOFError** when no objects are left"],
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Write three records, then show students with more than 80 marks.",
            code: r`import pickle

students = [
    {"roll": 1, "name": "Ananya", "marks": 91},
    {"roll": 2, "name": "Farhan", "marks": 78},
    {"roll": 3, "name": "Lakshmi", "marks": 85},
]
with open("students.dat", "wb") as f:
    for rec in students:
        pickle.dump(rec, f)

def show_above(limit):
    with open("students.dat", "rb") as f:
        try:
            while True:
                rec = pickle.load(f)
                if rec["marks"] > limit:
                    print(rec["roll"], rec["name"], rec["marks"])
        except EOFError:
            pass

show_above(80)`,
          },
          {
            type: "text",
            md: "Output: `1 Ananya 91` and `3 Lakshmi 85`.\n\nA binary file does not tell you how many objects it holds, so the reading pattern is a `while True` loop that calls `pickle.load()` until it raises **EOFError**, caught by `except EOFError`. This try-loop is the skeleton of every binary-file program.",
          },
          {
            type: "mistake",
            wrong: "I can open the pickle file with `open(\"students.dat\", \"w\")` and dump into it, like a text file.",
            right: "pickle writes **bytes**, so the file must be opened in binary mode: `\"wb\"`, `\"ab\"` or `\"rb\"`. With `\"w\"`, `pickle.dump()` raises a TypeError.",
            why: "Both are \"files\", so text mode seems fine. A text-mode file object accepts only str, while dump produces bytes.",
          },
          {
            type: "heading",
            text: "Updating a record",
          },
          {
            type: "text",
            md: "To change a record, the simplest safe method is: read every record into a list, change the matching one, then write the whole list back with `wb`. (A second method uses `rb+` with `tell()` and `seek()` to overwrite the record in place, but it works only if the new pickled record is exactly the same size.)",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`import pickle

with open("students.dat", "wb") as f:
    pickle.dump([1, "Ananya", 91], f)
    pickle.dump([2, "Farhan", 78], f)
    pickle.dump([3, "Lakshmi", 85], f)

def update_marks(roll, new_marks):
    records = []
    found = False
    with open("students.dat", "rb") as f:
        try:
            while True:
                rec = pickle.load(f)
                if rec[0] == roll:
                    rec[2] = new_marks
                    found = True
                records.append(rec)
        except EOFError:
            pass
    with open("students.dat", "wb") as f:
        for rec in records:
            pickle.dump(rec, f)
    return found

print(update_marks(2, 82))
print(update_marks(9, 50))
with open("students.dat", "rb") as f:
    try:
        while True:
            print(pickle.load(f))
    except EOFError:
        print("end of file")`,
          },
          {
            type: "example",
            title: "Reading the update output",
            problem: "Explain the output: `True`, `False`, `[1, 'Ananya', 91]`, `[2, 'Farhan', 82]`, `[3, 'Lakshmi', 85]`, `end of file`.",
            steps: [
              "Roll 2 is found, its marks changed to 82, and found becomes True.",
              "Roll 9 is not in the file, so nothing changes and False is returned (the file is rewritten unchanged).",
              "The display loop loads each list until EOFError, then prints \"end of file\".",
            ],
            answer: "Only Farhan's record changed; the function's return value tells the caller whether the roll number existed.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which exception marks the end of a pickled binary file while reading?",
                options: ["EOFError", "IndexError", "StopIteration", "FileNotFoundError"],
                answer: 0,
                explain: "`pickle.load()` raises EOFError when there is nothing left to read.",
              },
              {
                kind: "fill",
                q: "Converting a Python object into a byte stream is called ___ (or serialisation).",
                answer: ["pickling"],
                explain: "Unpickling is the reverse.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to search a binary file for a record.",
              items: [
                "import pickle",
                "Open the file in rb mode",
                "Start a try block with a while True loop",
                "Load one record and compare its key",
                "Catch EOFError to stop at the end",
              ],
              explain: "Every binary search, count or display program follows this skeleton; only the test inside the loop changes.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The 5-mark file question often has two parts: (a) write a function to **add** records (open with `ab`, `pickle.dump`) and (b) write a function to **search or count** (open with `rb`, load in a try–while loop until EOFError). State the record format you assume, such as `[roll, name, marks]`.",
          },
          {
            type: "keypoints",
            items: [
              "pickle stores Python objects in binary files: `dump(obj, f)` writes, `load(f)` reads.",
              "Use binary modes only: wb, ab, rb (and rb+, wb+, ab+).",
              "Read to the end with `while True` inside `try`, stopped by `except EOFError`.",
              "Update = read all records, change the match, write all back with wb.",
              "Append new records with ab so old records are kept.",
            ],
          },
        ],
        flashcards: [
          { front: "What is pickling?", back: "Converting a Python object into a byte stream to store in a binary file (serialisation)." },
          { front: "What is unpickling?", back: "Rebuilding the Python object from the byte stream (de-serialisation)." },
          { front: "Syntax of dump?", back: "`pickle.dump(object, file_object)`" },
          { front: "Syntax of load?", back: "`obj = pickle.load(file_object)`" },
          { front: "How do you know you have reached the end of a pickle file?", back: "`pickle.load()` raises EOFError." },
          { front: "Mode to add records to an existing binary file?", back: "\"ab\"." },
          { front: "Simplest way to update a record?", back: "Read all into a list, change it, rewrite the file with wb." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which module is used to write a Python list to a binary file?",
            options: ["`pickle`", "`csv`", "`math`", "`random`"],
            answer: 0,
            explain: "pickle serialises Python objects to bytes.",
          },
          {
            kind: "mcq",
            q: "Correct way to read one object from a binary file f?",
            options: ["`pickle.load(f)`", "`f.load()`", "`pickle.read(f)`", "`pickle.dump(f)`"],
            answer: 0,
            explain: "load is a function of the pickle module that takes the file object.",
          },
          {
            kind: "truefalse",
            q: "Each call to `pickle.load(f)` returns the next object in the order they were dumped.",
            answer: true,
            explain: "Objects are read back in the same order they were written.",
          },
          {
            kind: "mcq",
            q: "A dictionary `{\"pen\": 40}` is dumped and then loaded. What is the type of the loaded object?",
            options: ["`dict`", "`str`", "`bytes`", "`list`"],
            answer: 0,
            explain: "Unpickling rebuilds an object of the same type.",
          },
          {
            kind: "numeric",
            q: "A file is created with `wb` holding one pickled dict; then reopened with `ab` and one tuple is dumped. How many objects can be loaded from it?",
            answer: 2,
            explain: "Append mode keeps the dict and adds the tuple.",
          },
          {
            kind: "fill",
            q: "To read a binary file, open it in mode \"___\".",
            answer: ["rb"],
            explain: "r for read, b for binary.",
          },
          {
            kind: "multi",
            q: "Which belong in a function that counts records with marks above 90 in a pickle file?",
            options: ["`open(fname, \"rb\")`", "`pickle.load(f)` inside a loop", "`except EOFError`", "`pickle.dump(rec, f)`", "`open(fname, \"w\")`"],
            answers: [0, 1, 2],
            explain: "Counting only reads, so no dump and no write mode.",
          },
        ],
      },
      {
        slug: "c12-cs-csv-files",
        title: "CSV Files and File Handling Practice",
        summary: "CSV files and the csv module: writer, writerow, writerows, reader, newline and delimiter, followed by mixed board questions across text, binary and CSV files.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**CSV (Comma Separated Values)** is a plain text format for tables: each line is one row and the values in it are separated by a **delimiter**, usually a comma. Spreadsheets such as Excel or LibreOffice Calc open and save CSV, so it is a common way to move data between programs.\n\nPython's **csv** module does the splitting and joining for you. Open CSV files in text mode with `newline=\"\"`; this stops an extra blank line appearing between rows on Windows, because the writer already ends each row with its own line terminator.",
          },
          {
            type: "table",
            headers: ["Function / method", "Does"],
            rows: [
              ["`w = csv.writer(f)`", "makes a writer object for the open file f"],
              ["`w.writerow(list)`", "writes one row; items are joined with the delimiter"],
              ["`w.writerows(list_of_lists)`", "writes many rows at once"],
              ["`r = csv.reader(f)`", "makes a reader; looping over it gives each row as a **list of strings**"],
              ["`csv.writer(f, delimiter=\";\")`", "uses a different separator"],
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`import csv

rows = [["Roll", "Name", "Marks"], [1, "Ananya", 91], [2, "Farhan", 78], [3, "Lakshmi", 85]]
with open("result.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(rows[0])
    w.writerows(rows[1:])

with open("result.csv") as f:
    print(f.read(), end="")

with open("result.csv", "r", newline="") as f:
    r = csv.reader(f)
    next(r)
    total = 0
    for row in r:
        print(row)
        total += int(row[2])
print("Total:", total)`,
          },
          {
            type: "example",
            title: "Reading the output",
            problem: "Why does the program print `['1', 'Ananya', '91']` with quotes around 1 and 91, and why is `int()` needed for the total?",
            steps: [
              "The file itself holds plain text lines: `Roll,Name,Marks`, `1,Ananya,91` and so on.",
              "`next(r)` reads and skips the header row.",
              "csv.reader splits each line at commas and gives every value back as a **string**.",
              "So `row[2]` is \"91\"; `int(row[2])` converts it before adding. 91 + 78 + 85 = 254.",
            ],
            answer: "Rows come back as lists of strings; the total printed is `Total: 254`.",
          },
          {
            type: "mistake",
            wrong: "csv.reader gives me back the numbers I wrote, so `row[2] + 5` works.",
            right: "A CSV file is text, so every value read back is a **str**. Convert with `int()` or `float()` before doing arithmetic; `row[2] + 5` raises TypeError.",
            why: "The writer accepted ints, so learners expect ints back. The file only stores characters; the type information is lost.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which method writes several rows to a CSV file in one call?",
                options: ["`writerows()`", "`writerow()`", "`writelines()`", "`dump()`"],
                answer: 0,
                explain: "writerows takes a list of rows (a list of lists).",
              },
              {
                kind: "truefalse",
                q: "The `newline=\"\"` argument is used when opening CSV files to prevent blank lines between rows.",
                answer: true,
                explain: "Without it, on Windows each row ends with an extra blank line.",
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A board-style pair of functions: add a user, look up a password.",
            code: r`import csv

def add_user(uid, pwd):
    with open("users.csv", "a", newline="") as f:
        csv.writer(f).writerow([uid, pwd])

def find_password(uid):
    with open("users.csv", newline="") as f:
        for row in csv.reader(f):
            if row[0] == uid:
                return row[1]
    return "not found"

open("users.csv", "w").close()
add_user("asha12", "Mango@7")
add_user("ravi_k", "Kite#21")
print(find_password("ravi_k"))
print(find_password("john"))`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each task to the right tool.",
              pairs: [
                ["Store a list of dicts and get dicts back", "pickle with a .dat file"],
                ["Save a table to open in a spreadsheet", "csv.writer"],
                ["Save a poem line by line", "text file with write()"],
                ["Read rows of a CSV file", "csv.reader"],
              ],
              explain: "Pickle keeps Python types, CSV keeps tables readable by other programs, and plain text files hold free-form text.",
            },
          },
          {
            type: "heading",
            text: "Mixed board questions",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Write `COUNT_VOWEL_LINES()` to print how many lines of `story.txt` start with a vowel. (Loop over lines; test `line[0].lower() in \"aeiou\"`.)",
              "Write `ADD_BOOK()` to append `[book_id, title, price]` to `books.dat` using pickle, and `COSTLY()` to display books priced above 500. (Use `ab` and `rb` with the EOFError loop.)",
              "Write `SAVE_CITY(L)` to write the rows of list L to `city.csv` and `READ_BIG()` to show cities whose population (column 2) exceeds 10 lakh. (Convert column 2 with `int()`.)",
              "Differentiate between `w` and `a` modes, and between `readline()` and `readlines()`. (Two points each.)",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Know which import goes with which file: no import for text files, `import pickle` for binary files of Python objects, `import csv` for CSV files. Writing `csv.writer(f).writerow(...)` on a file opened without `newline=\"\"` is usually accepted, but examiners may expect `newline=\"\"`, so include it.",
          },
          {
            type: "keypoints",
            items: [
              "CSV is a text format: one row per line, values separated by a delimiter (comma by default).",
              "Open with `newline=\"\"`; write with `csv.writer(f).writerow()` / `writerows()`.",
              "`csv.reader(f)` gives each row as a list of strings; use `next()` to skip a header.",
              "Convert numbers read from CSV with `int()` / `float()`.",
              "Text file: no module; binary objects: pickle; tables: csv.",
            ],
          },
        ],
        flashcards: [
          { front: "What is a CSV file?", back: "A text file where each line is a row and values are separated by a delimiter, usually a comma." },
          { front: "How to write one row with csv?", back: "`w = csv.writer(f)` then `w.writerow([...])`." },
          { front: "What does csv.reader return for each row?", back: "A list of strings." },
          { front: "Why `newline=\"\"` when opening a CSV file?", back: "To stop extra blank lines between rows, as the writer adds its own line ending." },
          { front: "How to use a semicolon as the separator?", back: "`csv.writer(f, delimiter=\";\")` and `csv.reader(f, delimiter=\";\")`." },
          { front: "How to skip the header row while reading?", back: "Call `next(reader)` once before the loop." },
          { front: "writerow vs writerows?", back: "writerow writes one row; writerows writes a list of rows." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which line correctly creates a CSV writer for file f?",
            options: ["`csv.writer(f)`", "`f.writer()`", "`csv.write(f)`", "`pickle.writer(f)`"],
            answer: 0,
            explain: "writer is a function of the csv module that takes the file object.",
          },
          {
            kind: "mcq",
            q: "`w.writerow([\"Ravi\", 98450])` with delimiter \";\" writes which line?",
            options: ["`Ravi;98450`", "`Ravi,98450`", "`[\"Ravi\", 98450]`", "`Ravi 98450`"],
            answer: 0,
            explain: "Values are joined by the chosen delimiter.",
          },
          {
            kind: "truefalse",
            q: "A CSV file can be opened and read in a text editor.",
            answer: true,
            explain: "CSV is plain text.",
          },
          {
            kind: "fill",
            q: "To skip the first row of a csv reader r, call ___(r).",
            answer: ["next"],
            explain: "next() returns the next row and moves past it.",
          },
          {
            kind: "mcq",
            q: "A CSV row read back is `['3', 'Lakshmi', '85']`. What does `row[2] * 2` give?",
            options: ["`'8585'`", "`170`", "TypeError", "`'85 85'`"],
            answer: 0,
            explain: "row[2] is the string '85', and a string times 2 repeats it.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "result.csv has a header and 3 data rows. How many lists does `list(csv.reader(f))` contain?",
            answer: 4,
            explain: "The header row is also a row.",
          },
          {
            kind: "multi",
            q: "Which statements are true?",
            options: ["pickle files are binary", "CSV files store type information", "csv.reader values are strings", "writerows takes a list of lists"],
            answers: [0, 2, 3],
            explain: "CSV stores only text; the types are lost.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Stack                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-stack",
    title: "Stack",
    icon: "🥞",
    description: "The stack as a LIFO data structure: push, pop, peek, overflow and underflow, a list-based implementation in Python, applications, and infix to postfix conversion and postfix evaluation.",
    lessons: [
      {
        slug: "c12-cs-stack-operations",
        title: "Stack Operations and Implementation in Python",
        summary: "What a stack is, LIFO order, push, pop, peek, isEmpty, overflow and underflow, writing a stack with a Python list, and where stacks are used.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🍽️",
            caption: "At a wedding buffet, the plate you take is always the one on top, which is the last plate the staff put down.",
          },
          {
            type: "text",
            md: "A **data structure** is a way of storing and organising data so that it can be used efficiently. A **stack** is a linear data structure in which items are added and removed at **one end only**, called the **top**.\n\nSo the item added last is the first one removed: **LIFO (Last In, First Out)**. A pile of plates, a stack of books, and bangles on a wrist all behave this way.",
          },
          {
            type: "table",
            headers: ["Operation", "Meaning"],
            rows: [
              ["**PUSH**", "add an item on the top"],
              ["**POP**", "remove and return the top item"],
              ["**PEEK** (TOP)", "look at the top item without removing it"],
              ["**isEmpty**", "check whether the stack has no items"],
              ["**size**", "number of items in the stack"],
            ],
          },
          {
            type: "text",
            md: "Two error situations have names. **Underflow** is trying to POP (or PEEK) from an **empty** stack. **Overflow** is trying to PUSH onto a **full** stack, one that has reached its fixed maximum size. A Python list grows as needed, so in Python overflow happens only if memory runs out; underflow must always be checked.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A stack built on a list: the end of the list is the top.",
            code: r`stack = []

def is_empty(stk):
    return len(stk) == 0

def push(stk, item):
    stk.append(item)

def pop(stk):
    if is_empty(stk):
        print("Underflow")
        return None
    return stk.pop()

def peek(stk):
    if is_empty(stk):
        return None
    return stk[-1]

def display(stk):
    for i in range(len(stk) - 1, -1, -1):
        print(stk[i])

push(stack, "Plate 1")
push(stack, "Plate 2")
push(stack, "Plate 3")
print("Top:", peek(stack))
print("Popped:", pop(stack))
display(stack)
pop(stack); pop(stack)
print(pop(stack))`,
          },
          {
            type: "example",
            title: "Following the stack",
            problem: "Explain the output: `Top: Plate 3`, `Popped: Plate 3`, `Plate 2`, `Plate 1`, `Underflow`, `None`.",
            steps: [
              "After three pushes the list is [\"Plate 1\", \"Plate 2\", \"Plate 3\"]; its last item is the top.",
              "peek returns `stk[-1]`, Plate 3, without removing it. pop then removes Plate 3.",
              "display prints from the top down: Plate 2, then Plate 1.",
              "Two more pops empty the stack. The next pop finds it empty, prints Underflow and returns None, which is printed.",
            ],
            answer: "`append()` is PUSH, `pop()` is POP, `stk[-1]` is PEEK, and an empty-check prevents underflow errors.",
          },
          {
            type: "mistake",
            wrong: "To pop from a stack built on a list I can use `stk.pop(0)`, since the first item went in first.",
            right: "The top is the **end** of the list, so POP is `stk.pop()` with no index. `pop(0)` removes the **oldest** item, which is queue (FIFO) behaviour, not stack behaviour.",
            why: "\"First item\" sounds like \"the one to take\". In a stack, the first item in is the last item out.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Items 10, 20, 30 are pushed in that order, then one pop is done. What is on top now?",
                options: ["20", "30", "10", "The stack is empty"],
                answer: 0,
                explain: "The pop removes 30, the last item pushed; 20 becomes the top.",
              },
              {
                kind: "fill",
                q: "Trying to pop from an empty stack is called ___.",
                answer: ["underflow", "stack underflow"],
                explain: "Pushing onto a full stack is overflow.",
              },
            ],
          },
          {
            type: "heading",
            text: "Where stacks are used",
          },
          {
            type: "list",
            items: [
              "**Undo / redo** in editors: each action is pushed; undo pops the latest.",
              "**Back button** in a browser: visited pages are pushed; Back pops.",
              "**Reversing** a string or list: push every item, then pop them all.",
              "**Matching brackets** in an expression and converting or evaluating expressions.",
              "**Function calls**: Python keeps a call stack; the last function called is the first to return.",
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Two classic applications: reversing and bracket matching.",
            code: r`def reverse(text):
    stk = []
    for ch in text:
        stk.append(ch)
    out = ""
    while stk:
        out += stk.pop()
    return out
print(reverse("STACK"))

def balanced(expr):
    stk = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for ch in expr:
        if ch in "([{":
            stk.append(ch)
        elif ch in ")]}":
            if not stk or stk.pop() != pairs[ch]:
                return False
    return len(stk) == 0
print(balanced("(a+b)*[c-d]"), balanced("(a+b]"), balanced("((a)"))`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is this LIFO (stack-like) or not?",
              groups: ["LIFO (stack)", "Not LIFO"],
              items: [
                { text: "Undo in a text editor", group: 0, hint: "The most recent change is undone first." },
                { text: "Browser Back button", group: 0, hint: "Back goes to the page visited most recently." },
                { text: "Bangles worn on a wrist", group: 0, hint: "The last bangle put on comes off first." },
                { text: "Queue at a railway ticket counter", group: 1, hint: "The first person in line is served first: FIFO." },
                { text: "Print jobs sent to a shared printer", group: 1, hint: "Jobs print in the order they arrive." },
                { text: "Function calls in a running program", group: 0, hint: "The latest call returns first." },
              ],
              explain: "Anything where the newest item is handled first is a stack. Waiting lines are queues (FIFO).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In the stack program question, write separate functions for push and pop, and **check for an empty stack** in pop (print \"Stack Empty\" or \"Underflow\"). That check is a marking point.",
          },
          {
            type: "keypoints",
            items: [
              "A stack is a linear structure with insertion and deletion at one end, the top: LIFO.",
              "PUSH adds, POP removes and returns, PEEK reads the top item.",
              "Underflow: pop from an empty stack. Overflow: push onto a full stack.",
              "With a list: `append()` = push, `pop()` = pop, `L[-1]` = peek, `len(L) == 0` = empty.",
              "Uses: undo, back button, reversing, bracket matching, expression evaluation, function calls.",
            ],
          },
        ],
        flashcards: [
          { front: "What does LIFO mean?", back: "Last In, First Out: the item added last is removed first." },
          { front: "What is PUSH?", back: "Adding an item on the top of the stack." },
          { front: "What is POP?", back: "Removing and returning the top item." },
          { front: "What is PEEK?", back: "Reading the top item without removing it." },
          { front: "Define underflow.", back: "Trying to pop or peek from an empty stack." },
          { front: "Define overflow.", back: "Trying to push onto a stack that is already full." },
          { front: "List method for PUSH?", back: "`append()`." },
          { front: "Name two uses of a stack.", back: "Undo in editors, browser Back button (also reversing, bracket matching, function calls)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A stack follows which principle?",
            options: ["LIFO", "FIFO", "Random access", "Sorted order"],
            answer: 0,
            explain: "Last In, First Out. FIFO is the queue principle.",
          },
          {
            kind: "order",
            q: "Pushes A, B, C then pops all. Order of popped items?",
            items: ["C", "B", "A"],
            explain: "The last item pushed comes out first.",
          },
          {
            kind: "mcq",
            q: "Which Python expression gives the top of a list-based stack S without removing it?",
            options: ["`S[-1]`", "`S[0]`", "`S.pop()`", "`S.pop(0)`"],
            answer: 0,
            explain: "The end of the list is the top. pop() would remove it.",
          },
          {
            kind: "truefalse",
            q: "In a stack, an item can be inserted in the middle.",
            answer: false,
            explain: "Insertion and deletion happen only at the top.",
          },
          {
            kind: "numeric",
            q: "Starting empty: push 5, push 8, pop, push 3, push 9, pop, pop, push 7. How many items are in the stack?",
            answer: 2,
            explain: "[5] → [5, 8] → [5] → [5, 3] → [5, 3, 9] → [5, 3] → [5] → [5, 7]. Two items.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What does `reverse(\"STACK\")` return when every character is pushed and then all are popped?",
            options: ["`KCATS`", "`STACK`", "`SKCAT`", "`KSTAC`"],
            answer: 0,
            explain: "Popping returns characters in reverse order.",
          },
          {
            kind: "multi",
            q: "Which are applications of a stack?",
            options: ["Undo in a word processor", "Checking balanced brackets", "Serving customers at a bank counter", "Converting infix to postfix"],
            answers: [0, 1, 3],
            explain: "A bank counter serves the first person first, which is a queue.",
          },
        ],
      },
      {
        slug: "c12-cs-stack-expressions",
        title: "Infix, Postfix and Stack Programs (Board Practice)",
        summary: "Infix, prefix and postfix notation, converting infix to postfix with a stack, evaluating a postfix expression, and the push and pop program the board asks every year.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "In the expression `A + B`, the operator sits **between** its operands: this is **infix** notation, the one we write by hand. In **prefix** (Polish) notation the operator comes **before** its operands: `+AB`. In **postfix** (reverse Polish) notation it comes **after**: `AB+`.\n\nInfix needs brackets and precedence rules to say which operation happens first. Postfix needs **no brackets**: the order of the symbols alone fixes the order of evaluation, and a computer can evaluate it in one left-to-right pass with a stack.",
          },
          {
            type: "table",
            headers: ["Infix", "Postfix", "Prefix"],
            rows: [
              ["`A + B * C`", "`ABC*+`", "`+A*BC`"],
              ["`(A + B) * C`", "`AB+C*`", "`*+ABC`"],
              ["`A * (B + C) / D`", "`ABC+*D/`", "`/*A+BCD`"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Read the infix expression from left to right, one symbol at a time.",
              "**Operand**: write it straight to the output.",
              "**(**: push it on the stack.",
              "**)**: pop operators to the output until **(** is on top; pop and discard the **(**.",
              "**Operator**: while the top of the stack is an operator of **higher or equal** precedence, pop it to the output; then push the new operator.",
              "At the end, pop all remaining operators to the output.",
            ],
          },
          {
            type: "example",
            title: "Convert (A + B) * (C − D) / E to postfix",
            problem: "Use the stack method and show the stack after each important step.",
            steps: [
              "`(` push. `A` output: A. `+` push (top is `(`). `B` output: AB. `)` pop `+`: AB+, discard `(`.",
              "`*` push (stack empty). `(` push. `C` output: AB+C. `-` push (top is `(`). `D` output: AB+CD.",
              "`)` pop `-`: AB+CD−, discard `(`. Stack now holds `*`.",
              "`/` has the same precedence as `*` on top, so pop `*`: AB+CD−*. Push `/`.",
              "`E` output: AB+CD−*E. End: pop `/`.",
            ],
            answer: "`AB+CD-*E/`",
          },
          {
            type: "mistake",
            wrong: "When `/` arrives and `*` is on top of the stack, I push `/` on top because neither is higher.",
            right: "Pop operators of **higher or equal** precedence first. `*` and `/` are equal and work left to right, so `*` is popped to the output before `/` is pushed.",
            why: "Learners remember \"pop if higher\" and forget \"or equal\". Leaving `*` on the stack would make `/` act first, changing the meaning of the expression.",
          },
          {
            type: "heading",
            text: "Evaluating a postfix expression",
          },
          {
            type: "text",
            md: "Scan left to right. **Operand**: push it. **Operator**: pop the top two items; the first popped is the **right** operand (B) and the second popped is the **left** operand (A); compute A op B and push the result. At the end the single item on the stack is the answer.",
          },
          {
            type: "example",
            title: "Evaluate 7 8 2 * 4 / +",
            problem: "Show the stack after each symbol.",
            steps: [
              "7 → [7]; 8 → [7, 8]; 2 → [7, 8, 2].",
              "`*`: pop 2 and 8, push 8 × 2 = 16 → [7, 16].",
              "4 → [7, 16, 4]. `/`: pop 4 and 16, push 16 / 4 = 4 → [7, 4].",
              "`+`: pop 4 and 7, push 7 + 4 = 11 → [11].",
            ],
            answer: "11 (Python's `/` gives 11.0).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Evaluate the postfix expression `5 3 + 2 4 * -`.",
                answer: 0,
                explain: "5 + 3 = 8; 2 × 4 = 8; then 8 − 8 = 0 (left operand is the second item popped).",
              },
              {
                kind: "mcq",
                q: "Postfix form of `A * B + C`?",
                options: ["`AB*C+`", "`ABC+*`", "`A*BC+`", "`ABC*+`"],
                answer: 0,
                explain: "`*` is done first, so AB* is formed; then + with C.",
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Both algorithms in Python. Try your own expressions.",
            code: r`def to_postfix(infix):
    prec = {"+": 1, "-": 1, "*": 2, "/": 2}
    stk = []
    out = ""
    for ch in infix:
        if ch.isalnum():
            out += ch
        elif ch == "(":
            stk.append(ch)
        elif ch == ")":
            while stk[-1] != "(":
                out += stk.pop()
            stk.pop()
        else:
            while stk and stk[-1] != "(" and prec[stk[-1]] >= prec[ch]:
                out += stk.pop()
            stk.append(ch)
    while stk:
        out += stk.pop()
    return out

def eval_postfix(tokens):
    stk = []
    for t in tokens.split():
        if t.isdigit():
            stk.append(int(t))
        else:
            b = stk.pop()
            a = stk.pop()
            if t == "+": stk.append(a + b)
            elif t == "-": stk.append(a - b)
            elif t == "*": stk.append(a * b)
            elif t == "/": stk.append(a / b)
    return stk.pop()

print(to_postfix("(A+B)*(C-D)/E"))
print(eval_postfix("7 8 2 * 4 / +"))`,
          },
          {
            type: "heading",
            text: "The board's stack program",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Push names of students scoring above 85, then pop and display them.",
            code: r`R = {"Ankit": 92, "Bhavna": 78, "Chetan": 88, "Divya": 95}
ST = []

def PUSH(R, ST):
    for name in R:
        if R[name] > 85:
            ST.append(name)

def POP_ALL(ST):
    while ST:
        print(ST.pop(), end=" ")
    print()
    print("Stack Empty")

PUSH(R, ST)
print(ST)
POP_ALL(ST)`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the stack contents while evaluating 6 2 / 3 +.",
              items: ["[6]", "[6, 2]", "[3.0]", "[3.0, 3]", "[6.0]"],
              explain: "The `/` pops 2 and 6 and pushes 6 / 2 = 3.0; the `+` pops 3 and 3.0 and pushes 6.0.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For conversions and evaluations, draw a three-column table: **Symbol | Stack | Output (or Result)**. Marks are given for the table, not just the final answer. In the program question, the output for the dictionary above is `['Ankit', 'Chetan', 'Divya']`, then `Divya Chetan Ankit` and `Stack Empty`.",
          },
          {
            type: "keypoints",
            items: [
              "Infix: A+B; prefix: +AB; postfix: AB+. Postfix needs no brackets.",
              "Conversion: operands to output, operators to the stack; pop higher-or-equal precedence first; `)` pops to `(`.",
              "Evaluation: push operands; on an operator pop B then A and push A op B.",
              "The final single value on the stack is the result.",
              "Board program: push items that meet a condition, then pop all and print \"Stack Empty\".",
            ],
          },
        ],
        flashcards: [
          { front: "Infix, prefix, postfix of A plus B?", back: "Infix A+B, prefix +AB, postfix AB+." },
          { front: "Why is postfix useful for computers?", back: "It needs no brackets or precedence rules and can be evaluated in one left-to-right pass with a stack." },
          { front: "In conversion, what happens on `)`?", back: "Pop operators to the output until `(` is on top, then discard the `(`." },
          { front: "In conversion, when do you pop operators on reading a new operator?", back: "While the top has higher or equal precedence (and is not `(`)." },
          { front: "In evaluation, which popped item is the left operand?", back: "The second item popped." },
          { front: "Postfix of (A+B)*C?", back: "AB+C*" },
          { front: "Value of postfix 7 8 2 * 4 / +?", back: "11" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Postfix form of `A + B * C - D`?",
            options: ["`ABC*+D-`", "`AB+C*D-`", "`ABC*D-+`", "`ABCD*+-`"],
            answer: 0,
            explain: "B*C first → ABC*; then A + that → ABC*+; then − D → ABC*+D−.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Evaluate the postfix expression `4 6 + 2 * 5 -`.",
            answer: 15,
            explain: "4 + 6 = 10; 10 × 2 = 20; 20 − 5 = 15.",
          },
          {
            kind: "mcq",
            q: "Evaluating `9 3 -`, the stack holds [9, 3]. What is pushed?",
            options: ["`6`", "`-6`", "`3`", "`12`"],
            answer: 0,
            explain: "B = 3 is popped first, A = 9 second; A − B = 6.",
          },
          {
            kind: "truefalse",
            q: "Postfix expressions need brackets to show the order of operations.",
            answer: false,
            explain: "The position of operators fixes the order; that is the point of postfix.",
          },
          {
            kind: "mcq",
            q: "Prefix form of `(A + B) * C`?",
            options: ["`*+ABC`", "`+*ABC`", "`AB+C*`", "`*A+BC`"],
            answer: 0,
            explain: "The bracket gives +AB, then * applies to +AB and C: *+ABC.",
          },
          {
            kind: "fill",
            q: "Converting `A / B * C` gives the postfix expression ___.",
            answer: ["AB/C*"],
            explain: "/ and * are equal and work left to right, so / is popped before * is pushed.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "For `R = {\"P\": 40, \"Q\": 90, \"S\": 99}`, a PUSH function pushes names with marks above 85, then all are popped and printed. Output?",
            options: ["`S Q`", "`Q S`", "`P`", "`P Q S`"],
            answer: 0,
            explain: "Q then S are pushed; popping gives S first, then Q.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Computer Networks                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-computer-networks",
    title: "Computer Networks",
    icon: "🌐",
    description: "Evolution of networking, data communication terms, switching, transmission media, network devices, types and topologies, protocols and web services, with a campus network case study.",
    lessons: [
      {
        slug: "c12-cs-data-communication-media",
        title: "Evolution, Data Communication and Transmission Media",
        summary: "ARPANET to the Internet, the five components of data communication, bandwidth and data transfer rate, IP and MAC addresses, circuit and packet switching, and wired and wireless media.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "A **computer network** is a group of computers and other devices (**nodes**) connected so that they can share data and resources such as printers and an Internet connection.\n\n**Evolution.** **ARPANET** (1969), funded by the US Department of Defense's Advanced Research Projects Agency, first linked computers at a few universities and research centres. **NSFNET** (1986), built by the US National Science Foundation, was a faster network for academic research. Over the late 1980s and the 1990s these and many other networks joined into the **Internet**, a worldwide **network of networks** that is open to the public.",
          },
          {
            type: "table",
            headers: ["Component of data communication", "Meaning", "Example (a WhatsApp message)"],
            rows: [
              ["Sender", "the device that sends the message", "your phone"],
              ["Receiver", "the device that receives it", "your friend's phone"],
              ["Message", "the data being sent: text, image, audio, video", "\"Match at 4 pm\""],
              ["Communication medium", "the path the signal travels on", "Wi-Fi, mobile signal, fibre cables"],
              ["Protocol", "the agreed set of rules for communication", "TCP/IP"],
            ],
          },
          {
            type: "text",
            md: "**Bandwidth** is the range of frequencies a channel can carry, measured in **hertz (Hz)**; a wider range lets more data through. **Data transfer rate** is the amount of data actually sent per second, measured in **bits per second (bps)**, with Kbps, Mbps, Gbps and Tbps for larger rates. Remember 1 byte = 8 bits, so file sizes in MB must be multiplied by 8 to compare with a speed in Mbps.\n\nEvery device on a network is identified by an **IP address**, a logical address such as `192.168.1.10` (IPv4 uses 32 bits written as four numbers 0–255; IPv6 uses 128 bits). The network card also has a **MAC address**, a 48-bit physical address fixed by the manufacturer and written as 12 hexadecimal digits, such as `00:1A:2B:3C:4D:5E`.",
          },
          {
            type: "example",
            title: "How long will the download take?",
            problem: "A 25 MB video is downloaded on a connection with a steady data transfer rate of 8 Mbps. How long does it take?",
            steps: [
              "Convert the size to bits: 25 MB × 8 = 200 Mb (megabits).",
              "Time = data ÷ rate = 200 Mb ÷ 8 Mbps.",
              "= 25 seconds.",
            ],
            answer: "25 s. Forgetting the factor of 8 would give a wrong answer of about 3 s.",
          },
          {
            type: "heading",
            text: "Switching techniques",
          },
          {
            type: "table",
            headers: ["Circuit switching", "Packet switching"],
            rows: [
              ["a dedicated path is set up between sender and receiver before data flows", "no dedicated path; the message is broken into small **packets**"],
              ["the path stays reserved for the whole session, even when idle", "each packet carries the destination address and may take a different route"],
              ["data arrives in order; good for continuous voice", "packets are put back in order at the destination"],
              ["example: the old landline telephone network", "example: the Internet"],
            ],
          },
          {
            type: "heading",
            text: "Transmission media",
          },
          {
            type: "table",
            headers: ["Medium", "How it works", "Features and uses"],
            rows: [
              ["Twisted pair cable", "pairs of insulated copper wires twisted together to reduce interference (UTP / STP)", "cheap, flexible; telephone lines and Ethernet LANs with RJ45; limited to about 100 m per segment"],
              ["Coaxial cable", "a copper core, insulation, a braided metal shield and an outer jacket", "better shielding and higher bandwidth than twisted pair; cable TV"],
              ["Optical fibre", "light pulses travel through a thin glass or plastic core by total internal reflection", "very high bandwidth, immune to electrical noise, long distances; costly and hard to join; backbones and undersea cables"],
              ["Radio waves (3 kHz – 1 GHz)", "travel in all directions and pass through walls", "FM/AM radio, cordless phones, mobile phones"],
              ["Microwaves (1 GHz – 300 GHz)", "travel in straight lines; need line of sight between towers or dishes", "long-distance links, satellite communication"],
              ["Infrared (300 GHz – 400 THz)", "short range, line of sight, cannot pass through walls", "TV remotes, short-range data between nearby devices"],
            ],
          },
          {
            type: "mistake",
            wrong: "Bandwidth and data transfer rate are the same thing, both measured in Mbps.",
            right: "**Bandwidth** is the range of frequencies the channel can carry (Hz). **Data transfer rate** is the number of bits actually sent per second (bps). Higher bandwidth allows a higher data rate, but they are different quantities.",
            why: "Internet plans are sold as \"bandwidth: 100 Mbps\", so everyday speech mixes them. The board expects the textbook distinction and the right units.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which switching technique does the Internet use?",
                options: ["Packet switching", "Circuit switching", "Message passing by hand", "No switching"],
                answer: 0,
                explain: "Data is split into packets that are routed independently.",
              },
              {
                kind: "numeric",
                q: "How many seconds does a 60 MB file take at 12 Mbps?",
                answer: 40,
                unit: "s",
                explain: "60 × 8 = 480 Mb; 480 ÷ 12 = 40 s.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each need to the best medium.",
              pairs: [
                ["Undersea link between two continents", "Optical fibre"],
                ["Cheap cabling for a school computer lab", "Twisted pair"],
                ["Changing channels with a TV remote", "Infrared"],
                ["Link between two towers 40 km apart in line of sight", "Microwave"],
                ["FM broadcast heard inside buildings", "Radio waves"],
              ],
              explain: "Fibre for huge bandwidth over distance, twisted pair for low cost, infrared for short line-of-sight, microwave for tower links, radio for signals that must pass through walls.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Also in the NCERT book (Karnataka PUC)",
            md: "Mobile generations: **1G** analogue voice (1980s); **2G** digital voice and SMS; **3G** mobile Internet and video calls; **4G** (LTE) high-speed broadband and video streaming; **5G** very high speed and very low delay for smart devices and IoT.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Expand every abbreviation the first time you use it (ARPANET, NSFNET, MAC, IP). For \"differentiate\" questions on media, compare cost, bandwidth, distance and interference in a table.",
          },
          {
            type: "keypoints",
            items: [
              "ARPANET (1969) → NSFNET (1986) → the Internet, a network of networks.",
              "Five components: sender, receiver, message, medium, protocol.",
              "Bandwidth in Hz; data transfer rate in bps; 1 byte = 8 bits.",
              "Circuit switching reserves a path; packet switching routes packets independently.",
              "Wired: twisted pair, coaxial, optical fibre. Wireless: radio, microwave, infrared.",
            ],
          },
        ],
        flashcards: [
          { front: "What was ARPANET?", back: "An early packet-switched network (1969), funded by the US Department of Defense, linking universities and research centres." },
          { front: "What was NSFNET?", back: "A faster network built in 1986 by the US National Science Foundation for academic research." },
          { front: "Five components of data communication?", back: "Sender, receiver, message, communication medium, protocol." },
          { front: "Unit of bandwidth? Of data transfer rate?", back: "Hertz (Hz); bits per second (bps)." },
          { front: "IPv4 address size?", back: "32 bits, written as four numbers 0–255." },
          { front: "MAC address?", back: "A 48-bit physical address fixed in the network card, written as 12 hex digits." },
          { front: "Circuit switching?", back: "A dedicated path is set up for the whole session, as in landline telephones." },
          { front: "Which medium is immune to electromagnetic interference?", back: "Optical fibre, because it carries light, not electric current." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which medium carries data as pulses of light?",
            options: ["Optical fibre", "Coaxial cable", "Twisted pair", "Microwave"],
            answer: 0,
            explain: "Fibre guides light by total internal reflection.",
          },
          {
            kind: "mcq",
            q: "Which wireless medium needs line of sight and is used for satellite links?",
            options: ["Microwaves", "Radio waves", "Infrared", "Coaxial"],
            answer: 0,
            explain: "Microwaves travel in straight lines between dishes or towers.",
          },
          {
            kind: "truefalse",
            q: "In packet switching, all packets of a message must follow the same path.",
            answer: false,
            explain: "Each packet can take a different route; they are reordered at the destination.",
          },
          {
            kind: "fill",
            q: "The set of rules that governs data communication is called a ___.",
            answer: ["protocol"],
            explain: "Examples: TCP/IP, HTTP, FTP.",
          },
          {
            kind: "numeric",
            q: "A 2 GB backup (take 1 GB = 1000 MB) is sent at 100 Mbps. How many seconds does it take?",
            answer: 160,
            unit: "s",
            explain: "2000 MB × 8 = 16 000 Mb; 16 000 ÷ 100 = 160 s.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Twisted pair wires are twisted in order to…",
            options: ["reduce electromagnetic interference", "make the cable shorter", "carry light", "increase the voltage"],
            answer: 0,
            explain: "Twisting cancels much of the noise picked up from nearby wires.",
          },
          {
            kind: "multi",
            q: "Which are wireless transmission media?",
            options: ["Radio waves", "Infrared", "Coaxial cable", "Microwaves", "Optical fibre"],
            answers: [0, 1, 3],
            explain: "Coaxial and fibre are wired (guided) media.",
          },
          {
            kind: "mcq",
            q: "Which address is fixed in the network card by the manufacturer?",
            options: ["MAC address", "IP address", "URL", "Domain name"],
            answer: 0,
            explain: "The IP address is logical and can change; the MAC address is physical.",
          },
        ],
      },
      {
        slug: "c12-cs-devices-topologies",
        title: "Network Devices, Types and Topologies",
        summary: "Modem, Ethernet card, RJ45, repeater, hub, switch, router, gateway and Wi-Fi card; PAN, LAN, MAN and WAN; bus, star, tree, ring and mesh topologies.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🔌",
            caption: "Behind every school computer lab is a box of blinking lights joined by blue cables. Each box has a different job.",
          },
          {
            type: "table",
            headers: ["Device", "What it does"],
            rows: [
              ["**Modem** (modulator–demodulator)", "converts the computer's digital signals to analogue for a telephone or cable line, and back again at the other end"],
              ["**Ethernet card** (NIC)", "network interface card that connects a computer to a wired network; holds the MAC address; has an RJ45 socket"],
              ["**RJ45** connector", "Registered Jack-45, an 8-pin plug used at the ends of twisted pair Ethernet cables"],
              ["**Repeater**", "regenerates (amplifies) a weak signal so it can travel further, needed beyond about 100 m of cable"],
              ["**Hub**", "connects several computers in a LAN; sends incoming data to **all** ports"],
              ["**Switch**", "connects computers in a LAN but sends data **only** to the port of the intended device, using MAC addresses"],
              ["**Router**", "connects **different networks** and forwards packets along the best route using IP addresses"],
              ["**Gateway**", "the entry and exit point of a network; connects networks that use **different protocols**, often with a firewall"],
              ["**Wi-Fi card**", "a wireless network adapter that lets a device join a wireless network through an access point"],
            ],
          },
          {
            type: "mistake",
            wrong: "A hub and a switch are the same: both connect computers, so it does not matter which I choose.",
            right: "A **hub** broadcasts every message to all connected devices, wasting bandwidth and causing collisions. A **switch** learns which device is on which port and sends each message only to its destination, so it is faster and more secure.",
            why: "They look alike and both sit in the middle of a star network. The difference is inside: broadcast versus targeted delivery.",
          },
          {
            type: "heading",
            text: "Types of networks",
          },
          {
            type: "table",
            headers: ["Type", "Area covered", "Example"],
            rows: [
              ["**PAN** (Personal Area Network)", "a few metres around one person", "phone connected to earbuds by Bluetooth, or to a laptop by USB"],
              ["**LAN** (Local Area Network)", "a room, building or campus (up to about a kilometre)", "computer lab of a school"],
              ["**MAN** (Metropolitan Area Network)", "a city (tens of kilometres)", "cable TV network or a bank's branches across Bengaluru"],
              ["**WAN** (Wide Area Network)", "a country, a continent or the world", "the Internet, railway reservation network"],
            ],
          },
          {
            type: "heading",
            text: "Topologies",
          },
          {
            type: "text",
            md: "**Topology** is the arrangement of nodes and the links between them.\n\n**Bus**: all nodes connect to one main cable (the **backbone**) with terminators at both ends. Cheap and needs little cable, but a break in the backbone stops the whole network and only one node can send at a time.\n\n**Star**: every node connects to a central **hub or switch**. Easy to install, add nodes and find faults; one faulty node does not affect others; but if the central device fails, the network stops, and it needs more cable.\n\n**Tree** (hierarchical): several star networks connected to a bus-like backbone, so it is easy to expand by branches; a backbone fault cuts off whole branches.\n\n**Ring**: each node connects to exactly two neighbours forming a loop; data travels around the ring in one direction. **Mesh**: every node connects to every other; very reliable because there are many paths, but costly. A full mesh of n nodes needs $\\frac{n(n-1)}{2}$ links.",
          },
          {
            type: "example",
            title: "Counting links",
            problem: "A company wants a full mesh between its 6 branch servers. How many links are needed, and how many would a star with a central switch need?",
            steps: [
              "Full mesh: each pair of servers needs one link: 6 × 5 / 2.",
              "= 15 links.",
              "Star: one cable from each server to the switch: 6 links.",
            ],
            answer: "15 links for the mesh, 6 for the star. The mesh is more reliable but costs much more cable.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which device forwards packets between two different networks using IP addresses?",
                options: ["Router", "Hub", "Repeater", "RJ45"],
                answer: 0,
                explain: "Routers work between networks; hubs and switches work inside one LAN.",
              },
              {
                kind: "mcq",
                q: "In which topology does failure of the central device stop the whole network?",
                options: ["Star", "Mesh", "Bus", "Ring"],
                answer: 0,
                explain: "Every node depends on the central hub or switch.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Two school blocks are 180 m apart and joined by one UTP cable. What is needed?",
              emoji: "📶",
              options: ["A repeater", "A modem", "A gateway", "Nothing extra"],
              answer: 0,
              trap: 3,
              explain: "Twisted pair signals weaken over about 100 m, so a repeater is placed between the blocks to regenerate the signal.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Know the one-line job of each device and one difference each for hub vs switch, router vs gateway, and modem vs router. For topology questions give one advantage and one disadvantage each.",
          },
          {
            type: "keypoints",
            items: [
              "Modem converts digital ↔ analogue; NIC connects a computer; RJ45 is the cable plug.",
              "Repeater regenerates weak signals; hub broadcasts; switch delivers to one port.",
              "Router joins networks using IP addresses; gateway joins networks with different protocols.",
              "PAN < LAN < MAN < WAN by area; the Internet is the largest WAN.",
              "Bus (backbone), star (central switch), tree (stars on a backbone), ring (loop), mesh (all to all, n(n−1)/2 links).",
            ],
          },
        ],
        flashcards: [
          { front: "Full form of modem?", back: "Modulator–demodulator." },
          { front: "Hub vs switch?", back: "A hub sends data to all ports; a switch sends it only to the destination port." },
          { front: "Job of a repeater?", back: "Regenerates a weak signal so it can travel further." },
          { front: "Job of a router?", back: "Connects different networks and forwards packets using IP addresses." },
          { front: "What is a gateway?", back: "The entry and exit point of a network, joining networks that use different protocols." },
          { front: "What is RJ45?", back: "An 8-pin connector for twisted pair Ethernet cables." },
          { front: "Links in a full mesh of n nodes?", back: "n(n − 1)/2." },
          { front: "Main drawback of bus topology?", back: "A break in the backbone cable stops the whole network." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which network type connects a smartwatch to a phone?",
            options: ["PAN", "LAN", "MAN", "WAN"],
            answer: 0,
            explain: "A personal area network covers a few metres around a person.",
          },
          {
            kind: "numeric",
            q: "How many links are needed for a full mesh of 8 computers?",
            answer: 28,
            explain: "8 × 7 / 2 = 28.",
          },
          {
            kind: "truefalse",
            q: "A switch sends every message to all connected computers.",
            answer: false,
            explain: "That is a hub. A switch delivers only to the intended device.",
          },
          {
            kind: "mcq",
            q: "Which device holds the MAC address of a computer?",
            options: ["Ethernet card (NIC)", "Repeater", "Hub", "RJ45"],
            answer: 0,
            explain: "The MAC address is built into the network interface card.",
          },
          {
            kind: "fill",
            q: "In bus topology, the single main cable is called the ___.",
            answer: ["backbone"],
            explain: "All nodes tap into the backbone, which has terminators at both ends.",
          },
          {
            kind: "mcq",
            q: "Which topology is a group of star networks joined by a backbone?",
            options: ["Tree", "Ring", "Mesh", "Bus"],
            answer: 0,
            explain: "Tree (hierarchical) topology combines star and bus.",
          },
          {
            kind: "multi",
            q: "Which are advantages of star topology?",
            options: ["Easy to add a new node", "A faulty node does not stop the others", "Uses the least cable", "Faults are easy to locate"],
            answers: [0, 1, 3],
            explain: "Star needs more cable than bus because each node has its own link to the centre.",
          },
        ],
      },
      {
        slug: "c12-cs-protocols-web",
        title: "Protocols, Web Services and a Network Case Study",
        summary: "HTTP, HTTPS, FTP, SMTP, POP3, PPP, TCP/IP, TELNET and VoIP; WWW, HTML, XML, domain names, URL, website, browser, web server and hosting; and the board's campus network design question.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "table",
            headers: ["Protocol", "Full form", "Used for"],
            rows: [
              ["HTTP", "HyperText Transfer Protocol", "transferring web pages between a browser (client) and a web server"],
              ["HTTPS", "HTTP Secure", "HTTP with encryption (SSL/TLS), for logins, banking, shopping; shows a padlock"],
              ["FTP", "File Transfer Protocol", "uploading and downloading files between computers"],
              ["SMTP", "Simple Mail Transfer Protocol", "**sending** email from a client to a mail server and between servers"],
              ["POP3", "Post Office Protocol version 3", "**receiving**: downloading email from the server to the user's device"],
              ["PPP", "Point-to-Point Protocol", "a direct link between two nodes, such as a user's modem and the ISP, with authentication"],
              ["TCP/IP", "Transmission Control Protocol / Internet Protocol", "TCP splits data into packets and reassembles them reliably; IP addresses and routes each packet"],
              ["TELNET", "Teletype Network", "logging in to and running commands on a remote computer (text only, not encrypted)"],
              ["VoIP", "Voice over Internet Protocol", "voice calls sent as data packets over the Internet (WhatsApp or Meet calls)"],
            ],
          },
          {
            type: "mistake",
            wrong: "SMTP is used to send and receive email, so POP3 is not really needed.",
            right: "**SMTP sends** (pushes) mail to and between servers. **POP3** (or IMAP) is used by the receiver to **fetch** mail from the server to their device.",
            why: "Both are \"email protocols\", so learners merge them. Think of SMTP as posting a letter and POP3 as collecting it from the post office.",
          },
          {
            type: "heading",
            text: "Web services",
          },
          {
            type: "text",
            md: "The **World Wide Web (WWW)**, created by **Tim Berners-Lee** at CERN (1989–91), is a system of interlinked hypertext documents and resources accessed over the Internet. The **Internet** is the network itself; the Web is one service that runs on it (email and file transfer are others).\n\n**HTML** (HyperText Markup Language) uses **predefined tags** to describe how a web page is **displayed**. **XML** (eXtensible Markup Language) lets you **define your own tags** to **store and carry data**; it is case-sensitive and every opening tag must be closed.",
          },
          {
            type: "text",
            md: "A **domain name** is the readable name of a website, such as `ncert.nic.in`; the last part is the top-level domain (`.in`, `.com`, `.org`, `.gov`). The **DNS** (Domain Name System) translates domain names into IP addresses. A **URL** (Uniform Resource Locator) is the complete address of one resource, for example `https://www.example.in/results/2025.html`: protocol, domain name, then path.\n\nA **website** is a collection of related web pages under one domain. A **web browser** (Chrome, Firefox, Edge, Safari) requests and displays pages. A **web server** stores websites and sends pages when browsers request them. **Web hosting** is the service of keeping a website's files on a server that is always connected to the Internet.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In `https://www.example.in/results/2025.html`, which part is the domain name?",
                options: ["`www.example.in`", "`https`", "`/results/2025.html`", "`2025.html`"],
                answer: 0,
                explain: "https is the protocol and the rest after the domain is the path to the file.",
              },
              {
                kind: "truefalse",
                q: "The Internet and the World Wide Web are two names for the same thing.",
                answer: false,
                explain: "The Internet is the global network; the WWW is a service of linked pages that runs on it.",
              },
            ],
          },
          {
            type: "heading",
            text: "Case study: designing a campus network",
          },
          {
            type: "text",
            md: "Vidya Vikas School, Mysuru, is setting up a network in four blocks. Computers: **Admin 30, Science 80, Library 20, Sports 10**. Distances: Admin–Science 60 m, Admin–Library 120 m, Admin–Sports 150 m, Science–Library 50 m, Science–Sports 90 m, Library–Sports 70 m. The school must also connect to its head office in Bengaluru, about 140 km away.",
          },
          {
            type: "example",
            title: "Answering the five standard parts",
            problem: "(i) Where should the server go? (ii) Suggest a cable layout. (iii) Which device connects computers inside each block? (iv) Where is a repeater needed? (v) What type of network links the school to Bengaluru?",
            steps: [
              "(i) In the **Science** block: it has the most computers (80), so most traffic stays local (the 80–20 rule).",
              "(ii) A **star** layout with Science (the server block) at the centre: Science–Admin 60 m, Science–Library 50 m, Science–Sports 90 m, 200 m in all. Every block is one direct link from the server and every link is under 100 m. (A chain Admin–Science–Library–Sports would use only 180 m of cable, but Sports traffic would then pass through the Library block.)",
              "(iii) A **switch** in each block, since it sends data only to the intended computer.",
              "(iv) With the star layout every link is under 100 m, so no repeater is needed. If Admin were wired straight to Sports (150 m) or Library (120 m), a repeater would be needed on that link.",
              "(v) It is a **WAN** (140 km); use a leased line or broadband connection through an ISP, with a router at the school.",
            ],
            answer: "Server in Science; star layout from Science; switches in each block; no repeater in this layout; WAN to the head office.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each task to its protocol.",
              pairs: [
                ["Upload a project file to the school server", "FTP"],
                ["Send an email to a teacher", "SMTP"],
                ["Download new emails to a phone", "POP3"],
                ["Pay a fee on a bank website", "HTTPS"],
                ["Make a voice call on a messaging app", "VoIP"],
                ["Log in to a remote computer's command line", "TELNET"],
              ],
              explain: "Each protocol is built for one kind of job; HTTPS adds encryption to HTTP for sensitive data.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The case study is worth 5 marks. Justify every choice in a phrase: \"maximum computers\", \"shortest cable\", \"distance over 100 m\", \"different networks so router\". Draw the layout as boxes joined by lines with distances written on them.",
          },
          {
            type: "keypoints",
            items: [
              "HTTP/HTTPS: web pages; FTP: files; SMTP: send mail; POP3: receive mail.",
              "TCP splits and reassembles packets reliably; IP addresses and routes them.",
              "PPP: direct two-node link; TELNET: remote login; VoIP: calls over the Internet.",
              "HTML displays data with fixed tags; XML stores and carries data with user-defined tags.",
              "Domain name + DNS → IP address; URL = protocol + domain + path. Server goes in the block with the most computers.",
            ],
          },
        ],
        flashcards: [
          { front: "HTTP vs HTTPS?", back: "HTTPS is HTTP with encryption (SSL/TLS), used for sensitive data." },
          { front: "SMTP vs POP3?", back: "SMTP sends email; POP3 downloads (receives) email from the server." },
          { front: "Role of TCP in TCP/IP?", back: "Splits data into packets, reassembles them in order and ensures reliable delivery." },
          { front: "Role of IP in TCP/IP?", back: "Gives addresses and routes each packet to its destination." },
          { front: "HTML vs XML?", back: "HTML has predefined tags to display data; XML has user-defined tags to store and carry data." },
          { front: "What does DNS do?", back: "Translates a domain name into its IP address." },
          { front: "Parts of a URL?", back: "Protocol, domain name, and the path to the resource." },
          { front: "Who created the WWW?", back: "Tim Berners-Lee at CERN." },
          { front: "Where should the server go in a case study?", back: "In the block with the most computers, to keep most traffic local." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which protocol is used to download emails from a mail server to a device?",
            options: ["POP3", "SMTP", "FTP", "PPP"],
            answer: 0,
            explain: "POP3 retrieves mail; SMTP sends it.",
          },
          {
            kind: "mcq",
            q: "Which markup language lets you create your own tags?",
            options: ["XML", "HTML", "HTTP", "URL"],
            answer: 0,
            explain: "XML is extensible: tags are defined by the user.",
          },
          {
            kind: "fill",
            q: "Software such as Chrome or Firefox that displays web pages is called a web ___.",
            answer: ["browser"],
            explain: "The browser requests pages from web servers and shows them.",
          },
          {
            kind: "truefalse",
            q: "TELNET sends data, including passwords, without encryption.",
            answer: true,
            explain: "That is why SSH has largely replaced TELNET.",
          },
          {
            kind: "mcq",
            q: "In the case study, why is Science chosen for the server?",
            options: ["It has the most computers", "It is closest to Bengaluru", "It has the fewest computers", "It is the oldest block"],
            answer: 0,
            explain: "Placing the server where most users are reduces traffic between blocks.",
          },
          {
            kind: "mcq",
            q: "Which protocol lets a WhatsApp voice call travel over the Internet?",
            options: ["VoIP", "FTP", "POP3", "TELNET"],
            answer: 0,
            explain: "Voice over Internet Protocol sends voice as packets.",
          },
          {
            kind: "multi",
            q: "Which are used to send or carry files or web pages, not email?",
            options: ["FTP", "HTTP", "SMTP", "HTTPS", "POP3"],
            answers: [0, 1, 3],
            explain: "SMTP and POP3 are email protocols.",
          },
          {
            kind: "mcq",
            q: "A service that stores a website's files on an always-online server is…",
            options: ["Web hosting", "Web browser", "Domain name", "DNS"],
            answer: 0,
            explain: "Hosting providers rent space on their web servers.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Database Concepts                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-database-concepts",
    title: "Database Concepts",
    icon: "🗄️",
    description: "Why a file system falls short, what a DBMS does, key database terms, the relational model (relation, attribute, tuple, domain, degree, cardinality) and keys.",
    lessons: [
      {
        slug: "c12-cs-dbms-relational-model",
        title: "From Files to DBMS: The Relational Model",
        summary: "Limitations of keeping data in separate files, what a DBMS is, schema, constraint, meta-data, instance, query and database engine, and the parts of a relation.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🗂️",
            caption: "A school keeps admissions in one spreadsheet, fees in another and exam marks in a third. A student moves house. How many files must be corrected?",
          },
          {
            type: "text",
            md: "In a **file system**, each office keeps its own data files and its own programs to use them. This causes problems that a database solves:\n\n**Difficulty in access**: there is no easy way to ask a new question of the data without writing a new program. **Data redundancy**: the same data (a student's address) is stored in many files. **Data inconsistency**: those copies stop matching when only one is updated. **Data isolation**: data is scattered across files of different formats, so it is hard to combine. **Data dependence**: programs depend on the exact file format, so changing the format breaks the programs. **Controlled data sharing**: it is hard to give each user access to only the data they should see.",
          },
          {
            type: "text",
            md: "A **database** is an organised collection of related data. A **Database Management System (DBMS)** is software used to create, store, update, retrieve and manage databases while controlling who can access what. Examples: **MySQL**, Oracle, PostgreSQL, SQLite, Microsoft Access, MongoDB.",
          },
          {
            type: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["**Database schema**", "the design of the database: table names, column names, data types, constraints and relationships"],
              ["**Data constraint**", "a rule that restricts the values allowed, such as NOT NULL or UNIQUE"],
              ["**Meta-data** (data dictionary)", "data about the data: the schema and constraints stored by the DBMS"],
              ["**Database instance**", "the actual data stored at a particular moment (a snapshot); it changes as data is updated"],
              ["**Query**", "a request to get or change data, written in a query language such as SQL"],
              ["**Data manipulation**", "inserting, deleting and updating data"],
              ["**Database engine**", "the core component of the DBMS that stores, processes and secures the data"],
            ],
          },
          {
            type: "heading",
            text: "The relational data model",
          },
          {
            type: "text",
            md: "In the **relational model**, proposed by E. F. Codd, data is kept in **relations**, which are tables of rows and columns.\n\nA **relation** is a table. An **attribute** is a column (a named property, such as Name). A **tuple** is a row (one record). A **domain** is the set of all values an attribute may take (for example, Class may only be 11 or 12). The **degree** of a relation is its **number of attributes**, and its **cardinality** is its **number of tuples**.",
          },
          {
            type: "table",
            headers: ["AdmNo", "Name", "Class", "City", "Email"],
            rows: [
              ["1201", "Kavya", "12", "Mysuru", "kavya@sch.in"],
              ["1202", "Imran", "12", "Hubballi", "imran@sch.in"],
              ["1105", "Pooja", "11", "Mysuru", "pooja@sch.in"],
              ["1107", "Tenzing", "11", "Shivamogga", "NULL"],
            ],
          },
          {
            type: "example",
            title: "Reading a relation",
            problem: "For the STUDENT relation above, give its degree and cardinality, one tuple, and the domain of Class. Then find the new degree and cardinality after adding a column Phone and deleting the row for 1105.",
            steps: [
              "Attributes: AdmNo, Name, Class, City, Email → degree 5.",
              "Rows: 4 → cardinality 4.",
              "A tuple: (1202, Imran, 12, Hubballi, imran@sch.in). The domain of Class is {11, 12}.",
              "Adding a column changes the degree to 6; deleting a row changes the cardinality to 3.",
            ],
            answer: "Degree 5, cardinality 4; after the changes, degree 6 and cardinality 3.",
          },
          {
            type: "mistake",
            wrong: "Degree is the number of rows and cardinality is the number of columns.",
            right: "**Degree = number of columns (attributes). Cardinality = number of rows (tuples).**",
            why: "Both words sound like \"size\". A memory trick: degree counts the headings across the top; cardinality counts the records you can add one by one.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A relation has 7 attributes and 25 tuples. Three new students are inserted. What is its cardinality?",
                answer: 28,
                explain: "Inserting rows changes cardinality only: 25 + 3 = 28. The degree stays 7.",
              },
              {
                kind: "mcq",
                q: "Which problem occurs when a student's phone is updated in the fee file but not in the library file?",
                options: ["Data inconsistency", "Data isolation", "Data dependence", "Difficulty in access"],
                answer: 0,
                explain: "Redundant copies no longer agree, which is inconsistency.",
              },
            ],
          },
          {
            type: "text",
            md: "**Properties of a relation**: each attribute has a unique name; the order of attributes and of tuples does not matter; no two tuples are identical; each cell holds one **atomic** (indivisible) value; and a cell with an unknown or missing value holds **NULL**, which is not zero and not an empty string.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each relational term to its everyday meaning.",
              pairs: [
                ["Relation", "Table"],
                ["Attribute", "Column"],
                ["Tuple", "Row"],
                ["Degree", "Number of columns"],
                ["Cardinality", "Number of rows"],
                ["Domain", "Set of allowed values for a column"],
              ],
              explain: "The board uses the formal words; always link them back to the table picture.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A 1-mark favourite: \"A table has degree d and cardinality c; after these changes, what are they?\" Adding or dropping columns changes only the degree; inserting or deleting rows changes only the cardinality.",
          },
          {
            type: "keypoints",
            items: [
              "File-system problems: difficult access, redundancy, inconsistency, isolation, dependence, poor control of sharing.",
              "A DBMS creates and manages databases: MySQL, Oracle, PostgreSQL, SQLite.",
              "Schema = design; instance = data at a moment; meta-data = data about data.",
              "Relation = table, attribute = column, tuple = row, domain = allowed values.",
              "Degree = number of attributes; cardinality = number of tuples.",
            ],
          },
        ],
        flashcards: [
          { front: "What is a DBMS?", back: "Software to create, store, update, retrieve and manage databases with controlled access, e.g. MySQL." },
          { front: "Data redundancy?", back: "The same data stored in several places." },
          { front: "Data inconsistency?", back: "Copies of the same data that no longer match." },
          { front: "Database schema?", back: "The design: tables, attributes, data types, constraints and relationships." },
          { front: "Database instance?", back: "The data stored in the database at a particular moment." },
          { front: "What is meta-data?", back: "Data about data, such as the schema stored in the data dictionary." },
          { front: "Degree of a relation?", back: "Its number of attributes (columns)." },
          { front: "Cardinality of a relation?", back: "Its number of tuples (rows)." },
          { front: "What is a domain?", back: "The set of allowed values for an attribute." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A row of a relation is called a…",
            options: ["Tuple", "Attribute", "Domain", "Degree"],
            answer: 0,
            explain: "Tuple = row; attribute = column.",
          },
          {
            kind: "numeric",
            q: "A table of degree 6 and cardinality 10 has 2 columns dropped. What is its new degree?",
            answer: 4,
            explain: "Dropping columns reduces the degree: 6 − 2 = 4. Cardinality stays 10.",
          },
          {
            kind: "truefalse",
            q: "NULL in a relation means the value is zero.",
            answer: false,
            explain: "NULL means unknown or not applicable; it is not 0 or an empty string.",
          },
          {
            kind: "mcq",
            q: "A programme must be rewritten whenever the file format changes. This limitation is called…",
            options: ["Data dependence", "Data redundancy", "Data isolation", "Data inconsistency"],
            answer: 0,
            explain: "Programs depend on the structure of the files.",
          },
          {
            kind: "fill",
            q: "The design of a database, including its tables and constraints, is called its ___.",
            answer: ["schema", "database schema"],
            explain: "The schema changes rarely; the instance changes all the time.",
          },
          {
            kind: "mcq",
            q: "Which of these is **not** a DBMS?",
            options: ["Python", "MySQL", "Oracle", "PostgreSQL"],
            answer: 0,
            explain: "Python is a programming language; it can talk to a DBMS but is not one.",
          },
          {
            kind: "multi",
            q: "Which are properties of a relation?",
            options: ["No two tuples are identical", "The order of rows matters", "Each cell holds one atomic value", "Attribute names are unique"],
            answers: [0, 2, 3],
            explain: "The order of rows and of columns does not matter in a relation.",
          },
        ],
      },
      {
        slug: "c12-cs-keys",
        title: "Keys in a Relational Database",
        summary: "Candidate, primary, alternate, composite primary and foreign keys, referential integrity, and board practice on identifying keys, degree and cardinality.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Since no two tuples in a relation may be identical, there must be a way to tell rows apart. A **key** is an attribute, or a set of attributes, whose values identify each tuple uniquely.\n\nA **candidate key** is any attribute (or minimal set of attributes) that can uniquely identify every tuple and contains no NULL. A relation may have several candidate keys. The **primary key** is the one candidate key the database designer chooses as the main identifier. The remaining candidate keys are **alternate keys**.",
          },
          {
            type: "example",
            title: "Finding the keys in STUDENT",
            problem: "STUDENT(AdmNo, Name, Class, City, Email). Every student has a different admission number and a different school email, and every student has both (suppose Tenzing's missing email from the last lesson has now been filled in). Names and cities can repeat. Identify the candidate, primary and alternate keys.",
            steps: [
              "AdmNo is unique and never NULL → candidate key.",
              "Email is unique and never NULL → candidate key.",
              "Name, Class and City can repeat → not keys.",
              "Choose AdmNo as primary key (short, stable, never changes); Email becomes the alternate key.",
            ],
            answer: "Candidate keys: AdmNo, Email. Primary key: AdmNo. Alternate key: Email.",
          },
          {
            type: "text",
            md: "Sometimes no single attribute is unique. In ATTENDANCE(AdmNo, AttDate, Status), one student appears on many dates and one date has many students, but the **pair** (AdmNo, AttDate) never repeats. A primary key made of two or more attributes is a **composite primary key**.",
          },
          {
            type: "text",
            md: "A **foreign key** is an attribute in one relation whose values must match the primary key of another relation (or be NULL). It is how tables are linked. In FEES(ReceiptNo, AdmNo, Amount, PaidOn), AdmNo is a foreign key referring to STUDENT(AdmNo). The relation that holds the primary key (STUDENT) is the **referenced** (parent) table; FEES is the **referencing** (child) table.\n\n**Referential integrity** is the rule a foreign key enforces: you cannot record fees for an AdmNo that does not exist in STUDENT, and you cannot delete a student who still has fee records without dealing with those records first.",
          },
          {
            type: "table",
            headers: ["ReceiptNo", "AdmNo", "Amount", "PaidOn"],
            rows: [
              ["R101", "1201", "15000", "2025-06-10"],
              ["R102", "1202", "15000", "2025-06-12"],
              ["R103", "1201", "5000", "2025-09-05"],
            ],
          },
          {
            type: "mistake",
            wrong: "AdmNo is the primary key of STUDENT, so it must also be unique in FEES.",
            right: "In FEES, AdmNo is a **foreign key**, and foreign key values can repeat: student 1201 has paid twice (R101 and R103). Only ReceiptNo is unique in FEES.",
            why: "The same column name appears in both tables, so learners give it the same role. A key's role belongs to its table: unique in the parent, repeatable in the child.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In FEES above, which attribute is the most suitable primary key?",
                options: ["ReceiptNo", "AdmNo", "Amount", "PaidOn"],
                answer: 0,
                explain: "ReceiptNo is unique for every payment; the others repeat.",
              },
              {
                kind: "truefalse",
                q: "A table can have more than one candidate key but only one primary key.",
                answer: true,
                explain: "One candidate key is chosen as primary; the rest are alternate keys.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which key? BOOK(AccessionNo, Barcode, Title), ISSUE(IssueID, AccessionNo).",
              groups: ["Primary key", "Alternate key", "Foreign key"],
              items: [
                { text: "AccessionNo in BOOK (chosen as main identifier)", group: 0, hint: "The library chose it as the main identifier." },
                { text: "Barcode in BOOK (unique for every copy)", group: 1, hint: "Unique too, but not chosen: alternate." },
                { text: "AccessionNo in ISSUE", group: 2, hint: "It refers to the BOOK table." },
                { text: "IssueID in ISSUE", group: 0, hint: "Unique for every issue record." },
              ],
              explain: "The same column can be the primary key in its own table and a foreign key in another. An unchosen candidate key is an alternate key.",
            },
          },
          {
            type: "heading",
            text: "Board practice",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Define a candidate key and an alternate key with one example each. (2 marks)",
              "EMPLOYEE(EmpID, PAN, Name, DeptID) and DEPARTMENT(DeptID, DName). Name the primary key of each, one alternate key, and the foreign key. (Answer: EmpID in EMPLOYEE and DeptID in DEPARTMENT; PAN is an alternate key; DeptID in EMPLOYEE is a foreign key referring to DEPARTMENT.)",
              "A relation of degree 4 and cardinality 15 gets 5 new rows and 1 new column. Give the new degree and cardinality. (Answer: degree 5, cardinality 20.)",
              "Give two limitations of a file system that a DBMS removes. (Any two of: redundancy, inconsistency, isolation, dependence, access, sharing.)",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to \"identify the keys\", always justify: \"AdmNo is the primary key because it is unique and not null for every student\". For a foreign key, name both tables: \"AdmNo in FEES references AdmNo in STUDENT\".",
          },
          {
            type: "keypoints",
            items: [
              "Candidate key: can uniquely identify every tuple, with no NULLs.",
              "Primary key: the chosen candidate key; alternate keys: the other candidates.",
              "Composite primary key: two or more attributes together, such as (AdmNo, AttDate).",
              "Foreign key: values must match the primary key of another table or be NULL; may repeat.",
              "Referential integrity keeps child records pointing to existing parent records.",
            ],
          },
        ],
        flashcards: [
          { front: "Candidate key?", back: "An attribute (or minimal set) that uniquely identifies every tuple and has no NULLs." },
          { front: "Primary key?", back: "The candidate key chosen to identify tuples in a relation." },
          { front: "Alternate key?", back: "A candidate key that was not chosen as the primary key." },
          { front: "Composite primary key?", back: "A primary key made of two or more attributes together." },
          { front: "Foreign key?", back: "An attribute whose values must match the primary key of another relation (or be NULL)." },
          { front: "Can foreign key values repeat?", back: "Yes. One parent row can have many matching child rows." },
          { front: "Referential integrity?", back: "The rule that a foreign key value must exist in the referenced primary key." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A candidate key that is not the primary key is called a(n)…",
            options: ["Alternate key", "Foreign key", "Composite key", "Super attribute"],
            answer: 0,
            explain: "Alternate keys are the unchosen candidate keys.",
          },
          {
            kind: "mcq",
            q: "Which key links two tables?",
            options: ["Foreign key", "Alternate key", "Candidate key", "Composite key"],
            answer: 0,
            explain: "A foreign key in one table refers to the primary key of another.",
          },
          {
            kind: "truefalse",
            q: "A primary key column may contain NULL for a few rows.",
            answer: false,
            explain: "A primary key must be unique and NOT NULL in every row.",
          },
          {
            kind: "fill",
            q: "In MARKS(AdmNo, Subject, Score), the pair (AdmNo, Subject) as primary key is a ___ primary key.",
            answer: ["composite"],
            explain: "It is made of two attributes.",
          },
          {
            kind: "numeric",
            q: "A relation has degree 4 and cardinality 15. Five rows are added and one column is added. What is the new cardinality?",
            answer: 20,
            explain: "15 + 5 = 20 rows; the degree becomes 5.",
          },
          {
            kind: "mcq",
            q: "In EMPLOYEE(EmpID, PAN, Name, DeptID), which is a likely alternate key?",
            options: ["PAN", "Name", "DeptID", "None"],
            answer: 0,
            explain: "PAN is unique per person, so it is a candidate key; if EmpID is chosen as primary, PAN is alternate.",
          },
          {
            kind: "multi",
            q: "Which are true of a foreign key?",
            options: ["Its values may repeat", "It refers to a primary key of another table", "It must be unique", "It enforces referential integrity"],
            answers: [0, 1, 3],
            explain: "Foreign keys need not be unique.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Structured Query Language (SQL)                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-sql",
    title: "Structured Query Language (SQL)",
    icon: "🔎",
    description: "MySQL: data types and constraints, DDL (CREATE, ALTER, DROP) and DML (INSERT, UPDATE, DELETE), SELECT with WHERE, IN, BETWEEN, LIKE, NULL and ORDER BY, aggregate functions, GROUP BY, HAVING and joins.",
    lessons: [
      {
        slug: "c12-cs-sql-ddl-dml",
        title: "SQL Basics: Data Types, Constraints, DDL and DML",
        summary: "What SQL is, DDL versus DML, CHAR, VARCHAR, INT, FLOAT and DATE, the constraints, creating and altering databases and tables in MySQL, and inserting, updating and deleting rows.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "**SQL (Structured Query Language)** is the standard language for working with relational databases. It is used in MySQL, Oracle, PostgreSQL and SQLite. SQL keywords are **not case-sensitive** (`select` = `SELECT`), and each statement ends with a semicolon.\n\nSQL commands fall into groups. **DDL (Data Definition Language)** defines and changes the **structure**: `CREATE`, `ALTER`, `DROP`. **DML (Data Manipulation Language)** works with the **data** in the tables: `INSERT`, `UPDATE`, `DELETE`. The query command `SELECT` retrieves data; most school books group it with DML, some call it a separate query language (DQL).",
          },
          {
            type: "table",
            headers: ["Data type", "Stores", "Example"],
            rows: [
              ["`CHAR(n)`", "fixed-length text of exactly n characters (shorter values are padded with spaces); n up to 255", "`CHAR(4)` for a stream code like 'PCMC'"],
              ["`VARCHAR(n)`", "variable-length text up to n characters; uses only the space needed", "`VARCHAR(30)` for names"],
              ["`INT`", "whole numbers", "`AdmNo INT`"],
              ["`FLOAT`", "numbers with a decimal part", "`Fee FLOAT`"],
              ["`DATE`", "a date in the format 'YYYY-MM-DD'", "'2025-06-10'"],
            ],
          },
          {
            type: "text",
            md: "**Constraints** are rules on a column. **NOT NULL**: a value must be given. **UNIQUE**: no two rows may have the same value (NULLs allowed). **DEFAULT**: the value used when none is supplied. **PRIMARY KEY**: unique and not null, identifies each row. **FOREIGN KEY**: values must exist in the primary key of another table.",
          },
          {
            type: "code",
            lang: "sql",
            caption: "MySQL commands for databases and tables (display only)",
            code: r`CREATE DATABASE school;
SHOW DATABASES;
USE school;
CREATE TABLE STUDENT (
  AdmNo  INT PRIMARY KEY,
  Name   VARCHAR(25) NOT NULL,
  Class  INT DEFAULT 12,
  Stream CHAR(4),
  Email  VARCHAR(30) UNIQUE
);
CREATE TABLE FEES (
  ReceiptNo CHAR(5) PRIMARY KEY,
  AdmNo     INT,
  Amount    FLOAT,
  PaidOn    DATE,
  FOREIGN KEY (AdmNo) REFERENCES STUDENT(AdmNo)
);
SHOW TABLES;
DESCRIBE STUDENT;`,
          },
          {
            type: "code",
            lang: "sql",
            caption: "Changing and removing structure (display only)",
            code: r`ALTER TABLE STUDENT ADD Phone CHAR(10);      -- add an attribute
ALTER TABLE STUDENT DROP Phone;               -- remove an attribute
ALTER TABLE STUDENT MODIFY Name VARCHAR(40);  -- change a column's type
DROP TABLE FEES;                              -- delete a table itself
-- with FEES gone, no foreign key depends on STUDENT's primary key:
ALTER TABLE STUDENT DROP PRIMARY KEY;         -- remove the primary key
ALTER TABLE STUDENT ADD PRIMARY KEY (AdmNo);  -- add a primary key
DROP DATABASE school;                         -- delete the whole database`,
          },
          {
            type: "text",
            md: "**DML commands.** `INSERT INTO STUDENT VALUES (...)` adds a row with values for every column in order; `INSERT INTO STUDENT (AdmNo, Name) VALUES (...)` fills only the named columns (others take their default or NULL). `UPDATE table SET column = value WHERE condition` changes existing rows. `DELETE FROM table WHERE condition` removes rows. Text and dates go in single quotes; numbers do not.",
          },
          {
            type: "code",
            lang: "sql",
            runnable: true,
            caption: "Run it, then remove the WHERE from the DELETE and run again.",
            code: r`CREATE TABLE STUDENT (
  AdmNo INT PRIMARY KEY,
  Name VARCHAR(25) NOT NULL,
  Class INT DEFAULT 12,
  Stream CHAR(4),
  Email VARCHAR(30) UNIQUE
);
INSERT INTO STUDENT VALUES (1201, 'Kavya', 12, 'PCMC', 'kavya@sch.in');
INSERT INTO STUDENT (AdmNo, Name, Stream) VALUES (1202, 'Imran', 'PCMB');
INSERT INTO STUDENT VALUES (1105, 'Pooja', 11, 'PCMC', NULL);
UPDATE STUDENT SET Email = 'imran@sch.in' WHERE AdmNo = 1202;
UPDATE STUDENT SET Class = Class + 1 WHERE Class = 11;
DELETE FROM STUDENT WHERE Stream = 'PCMB';
SELECT * FROM STUDENT;`,
          },
          {
            type: "example",
            title: "What is left in the table?",
            problem: "Trace the program above and give the final rows.",
            steps: [
              "Three rows are inserted. Imran's Class takes the DEFAULT 12 and his Email is NULL.",
              "The first UPDATE gives Imran an email.",
              "The second UPDATE changes Pooja's Class from 11 to 12.",
              "DELETE removes every row with Stream 'PCMB', which is Imran's row.",
            ],
            answer: "Two rows: (1201, Kavya, 12, PCMC, kavya@sch.in) and (1105, Pooja, 12, PCMC, NULL).",
          },
          {
            type: "mistake",
            wrong: "`DELETE FROM STUDENT;` and `DROP TABLE STUDENT;` do the same thing.",
            right: "`DELETE` is DML: it removes **rows** but the empty table (its structure) remains. `DROP TABLE` is DDL: it removes the **table itself**, structure and data.",
            why: "Both \"get rid of\" data, so they feel alike. After DELETE you can still INSERT into the table; after DROP the table no longer exists.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which command adds a new column Phone to STUDENT?",
                options: ["`ALTER TABLE STUDENT ADD Phone CHAR(10);`", "`UPDATE STUDENT ADD Phone CHAR(10);`", "`INSERT INTO STUDENT Phone CHAR(10);`", "`CREATE Phone IN STUDENT;`"],
                answer: 0,
                explain: "Changing structure is DDL, done with ALTER TABLE.",
              },
              {
                kind: "truefalse",
                q: "A column declared UNIQUE can hold NULL, but a PRIMARY KEY column cannot.",
                answer: true,
                explain: "PRIMARY KEY = UNIQUE + NOT NULL.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "DDL (structure) or DML (data)?",
              groups: ["DDL", "DML"],
              items: [
                { text: "CREATE TABLE", group: 0, hint: "It defines a new structure." },
                { text: "ALTER TABLE", group: 0, hint: "It changes columns or keys." },
                { text: "DROP TABLE", group: 0, hint: "It removes the structure itself." },
                { text: "INSERT INTO", group: 1, hint: "It adds rows of data." },
                { text: "UPDATE", group: 1, hint: "It changes values in rows." },
                { text: "DELETE FROM", group: 1, hint: "It removes rows, not the table." },
              ],
              explain: "DDL commands change the schema; DML commands change the instance (the data).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "\"CHAR vs VARCHAR\", \"DELETE vs DROP\" and \"DDL vs DML\" are common 2-mark questions. In a query answer, put text and date values in single quotes, end with a semicolon, and never forget the WHERE clause in UPDATE and DELETE unless every row should change.",
          },
          {
            type: "keypoints",
            items: [
              "DDL: CREATE, ALTER, DROP (structure). DML: INSERT, UPDATE, DELETE, SELECT (data).",
              "CHAR(n) is fixed length; VARCHAR(n) is variable length; DATE is 'YYYY-MM-DD'.",
              "Constraints: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY, FOREIGN KEY.",
              "ALTER TABLE ... ADD / DROP a column or the primary key.",
              "DELETE removes rows; DROP removes the table or database.",
            ],
          },
        ],
        flashcards: [
          { front: "DDL vs DML?", back: "DDL defines structure (CREATE, ALTER, DROP); DML works with data (INSERT, UPDATE, DELETE, SELECT)." },
          { front: "CHAR vs VARCHAR?", back: "CHAR(n) always stores n characters (padded); VARCHAR(n) stores only the characters given, up to n." },
          { front: "Date format in MySQL?", back: "'YYYY-MM-DD', e.g. '2025-06-10'." },
          { front: "Command to see a table's structure?", back: "`DESCRIBE table;` (or `DESC table;`)." },
          { front: "Command to list tables in the current database?", back: "`SHOW TABLES;`" },
          { front: "How to remove a column?", back: "`ALTER TABLE t DROP column;`" },
          { front: "What does DEFAULT do?", back: "Supplies a value when an INSERT gives none for that column." },
          { front: "DELETE vs DROP?", back: "DELETE removes rows and keeps the table; DROP removes the table itself." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which is a DDL command?",
            options: ["`ALTER`", "`UPDATE`", "`INSERT`", "`DELETE`"],
            answer: 0,
            explain: "ALTER changes the structure of a table.",
          },
          {
            kind: "mcq",
            q: "Which statement selects the database `school` for use?",
            options: ["`USE school;`", "`OPEN school;`", "`SELECT school;`", "`SHOW school;`"],
            answer: 0,
            explain: "USE makes it the current database.",
          },
          {
            kind: "fill",
            q: "To change Kavya's class to 11, write `___ STUDENT SET Class = 11 WHERE Name = 'Kavya';`",
            answer: ["UPDATE"],
            explain: "UPDATE ... SET ... WHERE changes existing rows.",
          },
          {
            kind: "truefalse",
            q: "`DELETE FROM STUDENT;` without WHERE deletes every row.",
            answer: true,
            explain: "With no condition, every row matches.",
          },
          {
            kind: "mcq",
            q: "A value 'PCM' is stored in a `CHAR(4)` column. How many characters are stored?",
            options: ["4", "3", "1", "255"],
            answer: 0,
            explain: "CHAR is fixed length, so the value is padded with one space to 4 characters.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "`INSERT INTO STUDENT (AdmNo, Stream) VALUES (1300, 'PCMC');` fails. Why?",
            options: ["Name is NOT NULL and was not given", "Stream must be CHAR(5)", "AdmNo cannot be 1300", "INSERT needs all columns"],
            answer: 0,
            explain: "Name has no default and is NOT NULL, so the row is rejected.",
          },
          {
            kind: "multi",
            q: "Which keep the table structure in place?",
            options: ["`DELETE FROM T;`", "`DROP TABLE T;`", "`UPDATE T SET x = 0;`", "`ALTER TABLE T ADD y INT;`"],
            answers: [0, 2, 3],
            explain: "Only DROP removes the table. ALTER changes the structure but the table still exists.",
          },
        ],
      },
      {
        slug: "c12-cs-sql-select",
        title: "SELECT Queries: WHERE, IN, BETWEEN, LIKE, NULL, ORDER BY",
        summary: "Retrieving data with SELECT: columns, expressions and aliases, DISTINCT, relational and logical operators, IN, BETWEEN, LIKE patterns, IS NULL and sorting with ORDER BY.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "`SELECT` retrieves data. Its basic form is `SELECT columns FROM table WHERE condition ORDER BY column;`. `SELECT *` means all columns. You can calculate in the column list (`Salary * 12`) and rename a result column with an **alias**: `Salary * 12 AS Annual`. **DISTINCT** removes duplicate rows from the result.\n\nAll the queries in this lesson use the STAFF table below.",
          },
          {
            type: "table",
            headers: ["SID", "Name", "Dept", "Salary", "City", "Bonus"],
            rows: [
              ["101", "Anil", "Sales", "42000", "Pune", "3000"],
              ["102", "Bhavya", "IT", "65000", "Bengaluru", "NULL"],
              ["103", "Chirag", "HR", "38000", "Mysuru", "2000"],
              ["104", "Deepa", "IT", "72000", "Bengaluru", "5000"],
              ["105", "Esha", "Sales", "45000", "Mangaluru", "NULL"],
              ["106", "Farooq", "HR", "40000", "Pune", "2500"],
              ["107", "Gita", "IT", "58000", "Mysuru", "4000"],
            ],
          },
          {
            type: "code",
            lang: "sql",
            runnable: true,
            caption: "The table is created first; change the last query and run.",
            code: r`${STAFF_SQL}
SELECT Name, Salary * 12 AS Annual FROM STAFF WHERE Dept = 'IT';`,
          },
          {
            type: "table",
            headers: ["Operator", "Meaning", "Example condition"],
            rows: [
              ["`= <> != < > <= >=`", "relational comparison", "`Salary >= 45000`"],
              ["`AND`, `OR`, `NOT`", "logical (NOT first, then AND, then OR)", "`Dept = 'IT' AND City = 'Mysuru'`"],
              ["`BETWEEN a AND b`", "a range, **both ends included**", "`Salary BETWEEN 40000 AND 58000`"],
              ["`IN (...)`", "matches any value in the list", "`City IN ('Pune', 'Mysuru')`"],
              ["`LIKE`", "pattern: `%` = any number of characters, `_` = exactly one", "`Name LIKE '_h%'`"],
              ["`IS NULL`, `IS NOT NULL`", "tests for a missing value", "`Bonus IS NULL`"],
            ],
          },
          {
            type: "example",
            title: "Predict the rows",
            problem: "Give the output of: (a) `SELECT Name FROM STAFF WHERE Salary BETWEEN 40000 AND 58000;` (b) `SELECT Name FROM STAFF WHERE Name LIKE '%a';` (c) `SELECT Name FROM STAFF WHERE Name LIKE '_h%';` (d) `SELECT DISTINCT City FROM STAFF;`",
            steps: [
              "(a) Salaries from 40000 to 58000 inclusive: Anil 42000, Esha 45000, Farooq 40000, Gita 58000.",
              "(b) Names ending in a: Bhavya, Deepa, Esha, Gita.",
              "(c) Second letter h (`_` is exactly one letter before it): Bhavya, Chirag.",
              "(d) Each city once: Pune, Bengaluru, Mysuru, Mangaluru.",
            ],
            answer: "(a) Anil, Esha, Farooq, Gita (b) Bhavya, Deepa, Esha, Gita (c) Bhavya, Chirag (d) 4 cities.",
          },
          {
            type: "mistake",
            wrong: "To find staff with no bonus I write `WHERE Bonus = NULL`.",
            right: "Write `WHERE Bonus IS NULL`. Any comparison with NULL using `=` gives *unknown*, so `= NULL` matches no rows at all.",
            why: "In Python `x == None` works, so `= NULL` looks natural. In SQL, NULL means \"unknown\", and an unknown cannot be equal to anything, not even another NULL.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "`SELECT Name, Salary + Bonus AS Total FROM STAFF WHERE Dept = 'Sales';` What is Esha's Total?",
                options: ["NULL", "45000", "0", "Error"],
                answer: 0,
                explain: "Any arithmetic with NULL gives NULL. Anil's total is 45000; Esha's bonus is NULL so her total is NULL.",
              },
              {
                kind: "numeric",
                q: "How many rows does `SELECT * FROM STAFF WHERE Dept = 'IT' AND Salary > 60000 OR City = 'Pune';` return?",
                answer: 4,
                explain: "AND is evaluated first: (IT and over 60000) gives Bhavya and Deepa; OR City = 'Pune' adds Anil and Farooq. 4 rows.",
              },
            ],
          },
          {
            type: "text",
            md: "**ORDER BY** sorts the result: `ASC` (ascending, the default) or `DESC`. You can sort on more than one column: `ORDER BY Dept, Salary DESC` sorts by Dept A–Z, and within each Dept by Salary from high to low. ORDER BY comes **last** in the query.",
          },
          {
            type: "code",
            lang: "sql",
            runnable: true,
            code: r`${STAFF_SQL}
SELECT Name, Dept, Salary FROM STAFF ORDER BY Dept, Salary DESC;`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each condition to the names it selects.",
              pairs: [
                ["`City IN ('Pune', 'Mysuru')`", "Anil, Chirag, Farooq, Gita"],
                ["`Bonus IS NULL`", "Bhavya, Esha"],
                ["`NOT City = 'Bengaluru' AND Bonus > 2500`", "Anil, Gita"],
                ["`Salary > 60000`", "Bhavya, Deepa"],
              ],
              explain: "Bonus > 2500 is unknown for NULL bonuses, so Esha is not selected by the third condition.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Also in the NCERT book (Karnataka PUC)",
            md: "Single-row functions: `ROUND(2912.554, 1)` → 2912.6, `POWER(2, 3)` → 8, `MOD(21, 2)` → 1; `UCASE()`, `LCASE()`, `MID('Informatics', 3, 4)` → 'form', `LENGTH('Hello World')` → 11, `LEFT('Mysuru', 3)` → 'Mys', `RIGHT('Mysuru', 3)` → 'uru', `INSTR('Informatics', 'for')` → 3, `TRIM()`; `NOW()`, `YEAR('2025-03-14')` → 2025, `MONTHNAME('2025-03-14')` → 'March', `DAYNAME('2025-03-14')` → 'Friday'. Set operations: `UNION` combines the rows of two queries without duplicates. CBSE 083 does not test these.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Write the output of a query as a small table with the column headings exactly as they appear (use the alias if there is one). Remember `BETWEEN` includes both ends, `_` matches exactly one character, and NULL needs `IS NULL`.",
          },
          {
            type: "keypoints",
            items: [
              "`SELECT cols FROM t WHERE cond ORDER BY col;` with `*`, expressions, `AS` aliases and `DISTINCT`.",
              "NOT > AND > OR; use brackets to make the meaning clear.",
              "BETWEEN is inclusive; IN matches a list; LIKE uses `%` (any) and `_` (one).",
              "Test NULL with IS NULL / IS NOT NULL; arithmetic with NULL gives NULL.",
              "ORDER BY is last; ASC is the default; several sort columns are allowed.",
            ],
          },
        ],
        flashcards: [
          { front: "What does DISTINCT do?", back: "Removes duplicate rows from the query result." },
          { front: "Is BETWEEN inclusive?", back: "Yes, both end values are included." },
          { front: "LIKE wildcards?", back: "`%` matches any number of characters (even zero); `_` matches exactly one." },
          { front: "Names starting with S?", back: "`WHERE Name LIKE 'S%'`" },
          { front: "Test for a missing value?", back: "`IS NULL` (never `= NULL`)." },
          { front: "What is a column alias?", back: "A new heading for a result column, given with AS: `Salary * 12 AS Annual`." },
          { front: "Default sort order?", back: "ASC (ascending)." },
          { front: "Result of 5000 + NULL?", back: "NULL." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which query lists names that have exactly 4 letters?",
            options: ["`WHERE Name LIKE '____'`", "`WHERE Name LIKE '%4%'`", "`WHERE Name = 4`", "`WHERE Name LIKE '4_'`"],
            answer: 0,
            explain: "Four underscores match exactly four characters.",
          },
          {
            kind: "mcq",
            q: "`SELECT Name FROM STAFF WHERE City IN ('Pune', 'Mysuru') ORDER BY Name DESC;` First name shown?",
            options: ["Gita", "Anil", "Farooq", "Chirag"],
            answer: 0,
            explain: "Selected: Anil, Chirag, Farooq, Gita; in descending order Gita comes first.",
          },
          {
            kind: "truefalse",
            q: "`WHERE Bonus = NULL` returns the rows where Bonus is missing.",
            answer: false,
            explain: "Comparing with = NULL is never true; use IS NULL.",
          },
          {
            kind: "numeric",
            q: "How many rows does `SELECT DISTINCT Dept FROM STAFF;` return?",
            answer: 3,
            explain: "Sales, IT and HR.",
          },
          {
            kind: "fill",
            q: "To sort from highest salary to lowest, write `ORDER BY Salary ___`.",
            answer: ["DESC"],
            explain: "DESC means descending.",
          },
          {
            kind: "mcq",
            q: "Which condition is the same as `Salary >= 40000 AND Salary <= 45000`?",
            options: ["`Salary BETWEEN 40000 AND 45000`", "`Salary IN (40000, 45000)`", "`Salary LIKE '4%'`", "`Salary > 40000 OR Salary < 45000`"],
            answer: 0,
            explain: "BETWEEN includes both ends. IN would match only those two exact values.",
          },
          {
            kind: "multi",
            q: "Which rows does `WHERE Name LIKE '%a%' AND Dept <> 'IT'` select?",
            options: ["Anil", "Chirag", "Esha", "Farooq", "Bhavya"],
            answers: [0, 1, 2, 3],
            explain: "Anil, Chirag, Esha and Farooq contain the letter a and are not in IT (the match is case-insensitive in MySQL, so the A in Anil counts). Bhavya is in IT.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In which clause can a column alias such as Annual **not** be used in standard MySQL?",
            options: ["WHERE", "ORDER BY", "the SELECT list where it is defined", "none of these"],
            answer: 0,
            explain: "WHERE is evaluated before the SELECT list, so aliases are not yet known there; ORDER BY can use them.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "c12-cs-sql-aggregates-joins",
        title: "Aggregate Functions, GROUP BY, HAVING and Joins",
        summary: "MAX, MIN, AVG, SUM and COUNT; grouping rows with GROUP BY and filtering groups with HAVING; Cartesian product, equi-join and natural join; and board-style output questions.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "An **aggregate function** works on a set of rows and returns **one** value: `MAX()`, `MIN()`, `AVG()`, `SUM()` and `COUNT()`. Aggregate functions **ignore NULL** values. `COUNT(*)` counts rows; `COUNT(column)` counts only the non-NULL values in that column; `COUNT(DISTINCT column)` counts different values.",
          },
          {
            type: "example",
            title: "Aggregates on STAFF",
            problem: "Find the output of `SELECT COUNT(*), COUNT(Bonus), SUM(Bonus), AVG(Bonus), MAX(Salary), COUNT(DISTINCT City) FROM STAFF;`",
            steps: [
              "COUNT(*) counts all 7 rows.",
              "Bonus is NULL for Bhavya and Esha, so COUNT(Bonus) = 5.",
              "SUM(Bonus) = 3000 + 2000 + 5000 + 2500 + 4000 = 16500.",
              "AVG(Bonus) = 16500 / 5 = 3300 (NULLs are not counted, so not 16500 / 7). MAX(Salary) = 72000. Distinct cities: 4.",
            ],
            answer: "`7 | 5 | 16500 | 3300 | 72000 | 4` (MySQL shows the average as 3300.0000).",
          },
          {
            type: "text",
            md: "**GROUP BY** collects rows with the same value in a column into groups, and an aggregate then gives one result **per group**. **HAVING** sets a condition on groups, usually on an aggregate. **WHERE** filters individual rows **before** grouping; HAVING filters groups **after** grouping. The clause order is: `SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY …`.",
          },
          {
            type: "code",
            lang: "sql",
            runnable: true,
            caption: "Try adding HAVING SUM(Salary) > 80000 before ORDER BY.",
            code: r`${STAFF_SQL}
SELECT Dept, COUNT(*) AS Staff, SUM(Salary) AS Total, AVG(Salary) AS AvgSal
FROM STAFF
GROUP BY Dept
ORDER BY Dept;`,
          },
          {
            type: "example",
            title: "WHERE and HAVING together",
            problem: "Find the output of (a) `SELECT Dept, SUM(Salary) FROM STAFF GROUP BY Dept HAVING SUM(Salary) > 80000;` and (b) `SELECT City, COUNT(*) FROM STAFF WHERE Salary > 40000 GROUP BY City;`",
            steps: [
              "(a) Totals: HR 38000 + 40000 = 78000; IT 65000 + 72000 + 58000 = 195000; Sales 42000 + 45000 = 87000.",
              "HAVING keeps groups over 80000: IT 195000 and Sales 87000.",
              "(b) WHERE first removes Chirag (38000) and Farooq (40000 is not > 40000).",
              "Grouping the remaining five: Bengaluru 2 (Bhavya, Deepa), Mangaluru 1, Mysuru 1 (Gita), Pune 1 (Anil).",
            ],
            answer: "(a) IT 195000, Sales 87000. (b) Bengaluru 2, Mangaluru 1, Mysuru 1, Pune 1.",
          },
          {
            type: "mistake",
            wrong: "`SELECT Dept, SUM(Salary) FROM STAFF WHERE SUM(Salary) > 80000 GROUP BY Dept;`",
            right: "An aggregate cannot be used in WHERE. Conditions on groups go in **HAVING**: `... GROUP BY Dept HAVING SUM(Salary) > 80000;`",
            why: "WHERE works row by row before the groups exist, so there is no SUM to test yet. HAVING runs after the groups are formed.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What does `SELECT AVG(Salary) FROM STAFF WHERE Dept = 'HR';` return?",
                answer: 39000,
                explain: "(38000 + 40000) / 2 = 39000.",
              },
            ],
          },
          {
            type: "heading",
            text: "Joins: querying two tables",
          },
          {
            type: "text",
            md: "Take a second table DEPT(Dept, HOD, Floor) with rows ('Sales', 'Rao', 1), ('IT', 'Iyer', 3), ('HR', 'Khan', 2).\n\nThe **Cartesian product** `SELECT * FROM STAFF, DEPT;` pairs **every** row of STAFF with **every** row of DEPT. Its **degree** is the sum of the degrees (6 + 3 = 9 columns) and its **cardinality** is the product of the cardinalities (7 × 3 = 21 rows). Most of those pairs are meaningless.\n\nAn **equi-join** keeps only the pairs where the common column is equal: `WHERE STAFF.Dept = DEPT.Dept`. Both Dept columns appear in `SELECT *`, so the column name must be qualified with the table name (or an alias) when it is ambiguous. A **natural join** (`STAFF NATURAL JOIN DEPT`) joins on columns with the same name automatically and shows the common column **only once** (8 columns here).",
          },
          {
            type: "code",
            lang: "sql",
            runnable: true,
            code: r`${STAFF_SQL}
${DEPT_SQL}
SELECT S.Name, S.Dept, D.HOD, D.Floor
FROM STAFF AS S, DEPT AS D
WHERE S.Dept = D.Dept AND S.City = 'Pune';`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "STAFF has 7 rows, 6 columns; DEPT has 3 rows, 3 columns. Cartesian product size?",
              emoji: "✖️",
              options: ["21 rows, 9 columns", "10 rows, 9 columns", "21 rows, 18 columns", "7 rows, 9 columns"],
              answer: 0,
              trap: 1,
              explain: "Rows multiply (7 × 3 = 21) because each row pairs with every row; columns add (6 + 3 = 9) because each result row holds both rows side by side.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In the 4–5 mark SQL question, write each output as a table with headings, count NULLs correctly (COUNT(column) and AVG skip them), and for joins name the common column with the table name, e.g. `STAFF.Dept`. Equi-join output shows the common column twice; natural join shows it once.",
          },
          {
            type: "keypoints",
            items: [
              "MAX, MIN, AVG, SUM, COUNT return one value and ignore NULLs; COUNT(*) counts all rows.",
              "GROUP BY makes groups; HAVING filters groups; WHERE filters rows before grouping.",
              "Clause order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.",
              "Cartesian product: degree adds, cardinality multiplies.",
              "Equi-join matches on equal common columns; natural join does it automatically and shows the common column once.",
            ],
          },
        ],
        flashcards: [
          { front: "Name the five aggregate functions.", back: "MAX, MIN, AVG, SUM, COUNT." },
          { front: "COUNT(*) vs COUNT(column)?", back: "COUNT(*) counts all rows; COUNT(column) counts non-NULL values in that column." },
          { front: "Do aggregates include NULLs?", back: "No, they ignore NULLs (except COUNT(*), which counts rows)." },
          { front: "WHERE vs HAVING?", back: "WHERE filters rows before grouping; HAVING filters groups after GROUP BY." },
          { front: "Order of clauses?", back: "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY." },
          { front: "Cartesian product of R (d1, c1) and S (d2, c2)?", back: "Degree d1 + d2; cardinality c1 × c2." },
          { front: "Equi-join?", back: "A join that keeps rows where the common columns are equal, shown with `=` in WHERE." },
          { front: "Natural join vs equi-join?", back: "A natural join matches same-named columns automatically and shows the common column once." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Output of `SELECT COUNT(Bonus) FROM STAFF;`?",
            options: ["5", "7", "2", "16500"],
            answer: 0,
            explain: "Two of the seven bonuses are NULL and are not counted.",
          },
          {
            kind: "numeric",
            q: "Two tables have 5 rows × 4 columns and 6 rows × 3 columns. How many rows are in their Cartesian product?",
            answer: 30,
            explain: "Rows multiply: 5 × 6 = 30 (and the degree is 4 + 3 = 7).",
          },
          {
            kind: "mcq",
            q: "Which query lists cities having at least 2 staff?",
            options: ["`SELECT City FROM STAFF GROUP BY City HAVING COUNT(*) >= 2;`", "`SELECT City FROM STAFF WHERE COUNT(*) >= 2;`", "`SELECT City FROM STAFF HAVING City >= 2;`", "`SELECT COUNT(City) >= 2 FROM STAFF;`"],
            answer: 0,
            explain: "Group by city, then keep groups with a count of 2 or more (Bengaluru, Mysuru, Pune).",
          },
          {
            kind: "truefalse",
            q: "In a natural join of STAFF and DEPT, the Dept column appears twice.",
            answer: false,
            explain: "A natural join shows the common column only once; an equi-join with `SELECT *` shows it twice.",
          },
          {
            kind: "numeric",
            q: "What is `SELECT MAX(Salary) - MIN(Salary) FROM STAFF WHERE Dept = 'IT';`?",
            answer: 14000,
            explain: "IT salaries: 65000, 72000, 58000. 72000 − 58000 = 14000.",
          },
          {
            kind: "order",
            q: "Put the clauses of a SELECT statement in the order they must be written.",
            items: ["SELECT", "FROM", "WHERE", "GROUP BY", "HAVING", "ORDER BY"],
            explain: "This order is fixed; HAVING needs GROUP BY before it in board answers.",
          },
          {
            kind: "mcq",
            q: "`SELECT Name, HOD FROM STAFF, DEPT WHERE STAFF.Dept = DEPT.Dept AND Floor = 3;` How many rows?",
            options: ["3", "1", "21", "7"],
            answer: 0,
            explain: "Floor 3 is IT, which has three staff: Bhavya, Deepa and Gita.",
          },
          {
            kind: "multi",
            q: "Which are correct about `AVG(Bonus)` on STAFF?",
            options: ["It equals 3300", "It divides by 7", "It ignores the NULL bonuses", "It equals SUM(Bonus)/COUNT(Bonus)"],
            answers: [0, 2, 3],
            explain: "16500 / 5 = 3300; the two NULLs are left out of both the sum and the count.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 12 · Interface of Python with SQL                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-python-sql-interface",
    title: "Interface of Python with SQL",
    icon: "🔗",
    description: "Connecting Python to MySQL with mysql.connector: connect, cursor, execute, fetchone, fetchmany, fetchall, rowcount, commit, and parameterised queries with %s and format().",
    lessons: [
      {
        slug: "c12-cs-mysql-connector-basics",
        title: "Connecting Python to MySQL and Fetching Rows",
        summary: "The steps of a database program: import mysql.connector, connect, create a cursor, execute a query, fetch rows with fetchone, fetchmany and fetchall, read rowcount and close.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🎫",
            caption: "A school's result website is a Python (or other) program in front and a MySQL database behind. The program sends SQL and shows the rows that come back.",
          },
          {
            type: "text",
            md: "A Python program can send SQL statements to a MySQL server and use the results like ordinary Python data. The library used in the CBSE syllabus is **mysql.connector**, installed once with `pip install mysql-connector-python`. (These examples need a running MySQL server, so they are shown with their expected output instead of a Run button.)\n\nEvery database program follows the same steps: **import** the module, **connect** to the database, create a **cursor**, **execute** the query, **fetch** the results (for SELECT) or **commit** the changes (for INSERT, UPDATE, DELETE), and finally **close** the connection.",
          },
          {
            type: "table",
            headers: ["Statement", "Purpose"],
            rows: [
              ["`import mysql.connector as sqltor`", "loads the connector (any alias is fine)"],
              ["`con = sqltor.connect(host=\"localhost\", user=\"root\", passwd=\"tiger\", database=\"school\")`", "opens a **connection object** to the MySQL server and the named database (`password=` also works)"],
              ["`con.is_connected()`", "True if the connection succeeded"],
              ["`cur = con.cursor()`", "creates a **cursor**, the object that sends queries and holds the result set"],
              ["`cur.execute(query)`", "runs one SQL statement"],
              ["`cur.fetchone()`", "next row as a tuple, or `None` if no rows are left"],
              ["`cur.fetchmany(n)`", "next n rows as a list of tuples"],
              ["`cur.fetchall()`", "all remaining rows as a list of tuples (`[]` if none)"],
              ["`cur.rowcount`", "rows fetched so far (SELECT) or rows affected (INSERT / UPDATE / DELETE)"],
              ["`con.commit()`", "saves changes made by INSERT, UPDATE or DELETE"],
              ["`con.close()`", "closes the connection"],
            ],
          },
          {
            type: "text",
            md: "The STUDENT table in the database `school` holds: (1201, 'Kavya', 12, 92), (1202, 'Imran', 12, 84), (1105, 'Pooja', 11, 88), (1107, 'Tenzing', 11, 76), with columns AdmNo, Name, Class, Marks.",
          },
          {
            type: "code",
            lang: "python",
            caption: "Display only: needs a MySQL server. The expected output is shown below.",
            code: r`import mysql.connector as sqltor

con = sqltor.connect(host="localhost", user="root",
                     passwd="tiger", database="school")
if con.is_connected():
    print("Connected")
cur = con.cursor()
cur.execute("SELECT AdmNo, Name, Marks FROM STUDENT ORDER BY Marks DESC")
first = cur.fetchone()
print(first)
two = cur.fetchmany(2)
print(two)
rest = cur.fetchall()
print(rest)
print("Rows read:", cur.rowcount)
con.close()`,
          },
          {
            type: "code",
            lang: "python",
            caption: "Expected output",
            code: r`Connected
(1201, 'Kavya', 92)
[(1105, 'Pooja', 88), (1202, 'Imran', 84)]
[(1107, 'Tenzing', 76)]
Rows read: 4`,
          },
          {
            type: "example",
            title: "Why the fetches return these rows",
            problem: "Explain each printed line after the query sorts the four rows by Marks, highest first.",
            steps: [
              "The sorted result set is: Kavya 92, Pooja 88, Imran 84, Tenzing 76. The cursor starts before the first row.",
              "`fetchone()` returns the first row as a **tuple**: (1201, 'Kavya', 92).",
              "`fetchmany(2)` returns the **next** two rows as a **list of tuples**.",
              "`fetchall()` returns whatever is left: a list with one tuple.",
              "`rowcount` counts the rows fetched so far: 1 + 2 + 1 = 4.",
            ],
            answer: "Each fetch continues from where the previous one stopped; fetchone gives a tuple, fetchmany and fetchall give lists.",
          },
          {
            type: "mistake",
            wrong: "After `fetchone()`, calling `fetchall()` gives me all four rows again.",
            right: "The cursor moves forward as rows are fetched. `fetchall()` returns only the rows **not yet fetched**. To get all rows again, execute the query again.",
            why: "A list can be read from the start any number of times, so learners expect the result set to behave the same way. A cursor is more like a reading pointer in a file.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What does `fetchone()` return when no rows are left?",
                options: ["`None`", "`[]`", "`()`", "an error"],
                answer: 0,
                explain: "fetchone returns None at the end; fetchall would return an empty list.",
              },
              {
                kind: "numeric",
                q: "A SELECT gives 10 rows. After `fetchmany(3)` and then `fetchone()`, what is `cur.rowcount`?",
                answer: 4,
                explain: "rowcount counts rows fetched so far: 3 + 1 = 4.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of a database program in order.",
              items: [
                "import mysql.connector",
                "con = connect(host, user, passwd, database)",
                "cur = con.cursor()",
                "cur.execute(query)",
                "fetch rows, or con.commit() for changes",
                "con.close()",
              ],
              explain: "Connect, get a cursor, execute, then fetch or commit, and close at the end.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The 1–2 mark questions ask for the **return type** of fetchone (tuple), fetchmany and fetchall (list of tuples), the meaning of `rowcount`, and the purpose of `connect()`, `cursor()` and `commit()`. Learn the four connect arguments: host, user, passwd (or password), database.",
          },
          {
            type: "keypoints",
            items: [
              "Steps: import, connect, cursor, execute, fetch or commit, close.",
              "`connect(host=..., user=..., passwd=..., database=...)` returns a connection object.",
              "`cursor()` creates the object that runs queries and holds results.",
              "fetchone → one tuple or None; fetchmany(n) and fetchall → list of tuples.",
              "rowcount: rows fetched so far for SELECT, rows affected for changes.",
            ],
          },
        ],
        flashcards: [
          { front: "Module used to connect Python with MySQL?", back: "`mysql.connector` (install: `pip install mysql-connector-python`)." },
          { front: "Four main arguments of connect()?", back: "host, user, passwd (or password), database." },
          { front: "What is a cursor?", back: "An object created from the connection that executes SQL and holds the result set." },
          { front: "Return type of fetchone()?", back: "A tuple (or None if no row is left)." },
          { front: "Return type of fetchall()?", back: "A list of tuples (empty list if none left)." },
          { front: "What does fetchmany(3) return?", back: "The next 3 rows as a list of tuples." },
          { front: "Meaning of rowcount after a SELECT?", back: "The number of rows fetched so far." },
          { front: "How to check the connection worked?", back: "`con.is_connected()` returns True." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which method creates a cursor?",
            options: ["`con.cursor()`", "`sqltor.cursor()`", "`con.execute()`", "`cur.connect()`"],
            answer: 0,
            explain: "A cursor is created from the connection object.",
          },
          {
            kind: "mcq",
            q: "What is the type of `cur.fetchmany(2)`?",
            options: ["list", "tuple", "dict", "str"],
            answer: 0,
            explain: "It is a list of up to 2 tuples.",
          },
          {
            kind: "truefalse",
            q: "`fetchall()` always returns every row of the result, even if some were fetched earlier.",
            answer: false,
            explain: "It returns only the remaining rows.",
          },
          {
            kind: "fill",
            q: "The argument that names the database in connect() is ___.",
            answer: ["database", "db"],
            explain: "`database=\"school\"` (the connector also accepts `db`).",
          },
          {
            kind: "numeric",
            q: "A query returns 6 rows. The program calls `fetchone()` twice and then `fetchall()`. How many tuples are in the list from fetchall?",
            answer: 4,
            explain: "6 − 2 = 4 rows remain.",
          },
          {
            kind: "mcq",
            q: "Which call ends the connection with the server?",
            options: ["`con.close()`", "`cur.end()`", "`con.commit()`", "`sqltor.close()`"],
            answer: 0,
            explain: "close() on the connection object releases it.",
          },
          {
            kind: "multi",
            q: "Which return a list?",
            options: ["`fetchall()`", "`fetchmany(4)`", "`fetchone()`", "`is_connected()`"],
            answers: [0, 1],
            explain: "fetchone gives a tuple; is_connected gives a bool.",
          },
        ],
      },
      {
        slug: "c12-cs-python-sql-programs",
        title: "Inserting, Updating and Searching from Python (Board Practice)",
        summary: "Building queries with format() and %s placeholders, commit after changes, rowcount for affected rows, and complete board-style programs that add, update, delete and search records.",
        minutes: 24,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "Real programs use values typed by the user, so the query must include Python variables. There are two common ways.\n\n**String formatting**: build the query text with `format()` (or an f-string): `\"SELECT * FROM STUDENT WHERE Marks > {}\".format(m)`. Text values must be put inside quotes in the SQL: `\"... WHERE Name = '{}'\".format(nm)`.\n\n**Parameterised query** (preferred): write `%s` for each value and pass a tuple as the second argument of execute: `cur.execute(\"INSERT INTO STUDENT VALUES (%s, %s, %s, %s)\", (adm, nm, cls, mk))`. The connector inserts the values safely and adds quotes where needed, which also protects against SQL injection.",
          },
          {
            type: "text",
            md: "INSERT, UPDATE and DELETE change the data, so they must be followed by **`con.commit()`**. Without it the changes are not saved and are lost when the connection closes. After such a statement, `cur.rowcount` is the number of rows **affected**.",
          },
          {
            type: "code",
            lang: "python",
            caption: "Display only: needs a MySQL server. Starts from the four-row STUDENT table of the previous lesson.",
            code: r`import mysql.connector as sqltor

con = sqltor.connect(host="localhost", user="root",
                     passwd="tiger", database="school")
cur = con.cursor()

cur.execute("INSERT INTO STUDENT VALUES (%s, %s, %s, %s)", (1210, "Ritu", 12, 81))
con.commit()
print("Inserted:", cur.rowcount)

cur.execute("UPDATE STUDENT SET Marks = Marks + 5 WHERE Class = %s", (11,))
con.commit()
print("Updated:", cur.rowcount)

cur.execute("DELETE FROM STUDENT WHERE Marks < %s", (82,))
con.commit()
print("Deleted:", cur.rowcount)

cur.execute("SELECT Name, Marks FROM STUDENT WHERE Class = 12 ORDER BY Name")
for row in cur.fetchall():
    print(row[0], row[1])
con.close()`,
          },
          {
            type: "code",
            lang: "python",
            caption: "Expected output",
            code: r`Inserted: 1
Updated: 2
Deleted: 2
Imran 84
Kavya 92`,
          },
          {
            type: "example",
            title: "Tracing the changes",
            problem: "Explain the output, starting from Kavya 92 (12), Imran 84 (12), Pooja 88 (11), Tenzing 76 (11).",
            steps: [
              "INSERT adds Ritu (Class 12, 81): 1 row affected.",
              "UPDATE adds 5 to Class 11 rows: Pooja 93 and Tenzing 81: 2 rows affected.",
              "DELETE removes Marks below 82: Ritu 81 and Tenzing 81: 2 rows affected.",
              "Class 12 students left, sorted by name: Imran 84 and Kavya 92.",
            ],
            answer: "`Inserted: 1`, `Updated: 2`, `Deleted: 2`, then `Imran 84` and `Kavya 92`.",
          },
          {
            type: "mistake",
            wrong: "`cur.execute(\"UPDATE STUDENT SET Marks = 90 WHERE AdmNo = %s\", (1201))` passes the value correctly.",
            right: "`(1201)` is just the int 1201, not a tuple. A one-value parameter needs a trailing comma: `(1201,)`. Without it the connector reports an error.",
            why: "Brackets look like a tuple. This is the same one-item-tuple rule from the Python revision tour: the comma, not the bracket, makes a tuple.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A program runs an INSERT but the new row is missing when checked in MySQL. The most likely cause?",
                options: ["`con.commit()` was not called", "`fetchall()` was not called", "The cursor was not closed", "rowcount was not printed"],
                answer: 0,
                explain: "Changes must be committed to be saved.",
              },
              {
                kind: "mcq",
                q: "For `nm = \"Pooja\"`, which query string is correct with format()?",
                options: ["`\"SELECT * FROM STUDENT WHERE Name = '{}'\".format(nm)`", "`\"SELECT * FROM STUDENT WHERE Name = {}\".format(nm)`", "`\"SELECT * FROM STUDENT WHERE Name = %s\".format(nm)`", "`\"SELECT * FROM STUDENT WHERE Name = 'nm'\"`"],
                answer: 0,
                explain: "A text value needs single quotes inside the SQL. Without them MySQL reads Pooja as a column name.",
              },
            ],
          },
          {
            type: "heading",
            text: "A complete board-style program",
          },
          {
            type: "code",
            lang: "python",
            caption: "Display only. A menu-free version of the usual 4-mark question.",
            code: r`import mysql.connector as sqltor

def add_student(con):
    adm = int(input("AdmNo: "))
    nm = input("Name: ")
    cls = int(input("Class: "))
    mk = int(input("Marks: "))
    cur = con.cursor()
    cur.execute("INSERT INTO STUDENT VALUES (%s, %s, %s, %s)", (adm, nm, cls, mk))
    con.commit()
    print("Record added")

def show_toppers(con, cutoff):
    cur = con.cursor()
    cur.execute("SELECT Name, Marks FROM STUDENT WHERE Marks > {} ORDER BY Name".format(cutoff))
    rows = cur.fetchall()
    for r in rows:
        print(r[0], "-", r[1])
    print("Total:", cur.rowcount)

con = sqltor.connect(host="localhost", user="root",
                     passwd="tiger", database="school")
show_toppers(con, 85)
con.close()`,
          },
          {
            type: "text",
            md: "Expected output on the table left after the earlier changes (Pooja 93, Kavya 92, Imran 84): `Kavya - 92`, `Pooja - 93`, `Total: 2`.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does this statement need con.commit() afterwards?",
              groups: ["Needs commit()", "No commit needed"],
              items: [
                { text: "INSERT INTO STUDENT ...", group: 0, hint: "It changes the data." },
                { text: "UPDATE STUDENT SET ...", group: 0, hint: "It changes existing rows." },
                { text: "DELETE FROM STUDENT ...", group: 0, hint: "It removes rows." },
                { text: "SELECT * FROM STUDENT", group: 1, hint: "It only reads data." },
                { text: "fetchall()", group: 1, hint: "Fetching reads the result set." },
              ],
              explain: "Only statements that change data need commit(). Reading never does.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In the program question, write the import, the connect line with all four arguments, `cursor()`, `execute()`, and `commit()` after any change. Marks are often lost for a missing commit or for leaving out the quotes around a text value in a format() query.",
          },
          {
            type: "keypoints",
            items: [
              "Insert values with `%s` placeholders and a tuple, or build the query with `format()`.",
              "Text values need quotes inside the SQL when using format(); `%s` adds them for you.",
              "One parameter still needs a tuple: `(x,)`.",
              "Call `con.commit()` after INSERT, UPDATE and DELETE; rowcount then gives rows affected.",
              "Loop over `fetchall()` and use `row[0]`, `row[1]` to show columns.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is commit() needed?", back: "To save changes made by INSERT, UPDATE or DELETE; without it they are lost." },
          { front: "Parameterised insert syntax?", back: "`cur.execute(\"INSERT INTO T VALUES (%s, %s)\", (a, b))`" },
          { front: "One-value parameter tuple?", back: "`(x,)` with a trailing comma." },
          { front: "Query with format() for a text value?", back: "`\"... WHERE Name = '{}'\".format(nm)` with quotes around {}." },
          { front: "rowcount after an UPDATE?", back: "The number of rows changed (affected)." },
          { front: "Advantage of %s placeholders?", back: "The connector inserts values safely and adds quotes, protecting against SQL injection." },
          { front: "How to read the second column of a fetched row?", back: "`row[1]`, since each row is a tuple." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which correctly inserts (1301, 'Arun') using placeholders?",
            options: [
              "`cur.execute(\"INSERT INTO T VALUES (%s, %s)\", (1301, \"Arun\"))`",
              "`cur.execute(\"INSERT INTO T VALUES (%s, %s)\" % 1301, \"Arun\")`",
              "`cur.execute(\"INSERT INTO T VALUES (1301, Arun)\")`",
              "`cur.insert(1301, \"Arun\")`",
            ],
            answer: 0,
            explain: "Placeholders in the query and a tuple of values as the second argument.",
          },
          {
            kind: "truefalse",
            q: "A SELECT statement must be followed by `con.commit()`.",
            answer: false,
            explain: "SELECT only reads data; commit is for changes.",
          },
          {
            kind: "numeric",
            q: "A table has 8 rows, 3 of them with Class 11. After `UPDATE ... WHERE Class = 11` and commit, what is `cur.rowcount`?",
            answer: 3,
            explain: "rowcount is the number of rows affected by the update.",
          },
          {
            kind: "fill",
            q: "After an INSERT, call con.___() to save the change.",
            answer: ["commit"],
            explain: "commit() makes the change permanent.",
          },
          {
            kind: "mcq",
            q: "`m = 85`. Which string gives `SELECT * FROM STUDENT WHERE Marks > 85`?",
            options: ["`\"SELECT * FROM STUDENT WHERE Marks > {}\".format(m)`", "`\"SELECT * FROM STUDENT WHERE Marks > m\"`", "`\"SELECT * FROM STUDENT WHERE Marks > '{}'\".format(\"m\")`", "`\"SELECT * FROM STUDENT WHERE Marks > %s\".format(m)`"],
            answer: 0,
            explain: "format replaces {} with 85. The %s version would stay as %s because format only fills braces.",
          },
          {
            kind: "mcq",
            q: "What is wrong in `cur.execute(\"DELETE FROM STUDENT WHERE AdmNo = %s\", (1202))`?",
            options: ["`(1202)` is not a tuple; write `(1202,)`", "DELETE cannot use %s", "AdmNo must be quoted", "Nothing"],
            answer: 0,
            explain: "A one-item tuple needs a comma.",
          },
          {
            kind: "multi",
            q: "Which lines are needed in a program that adds one record?",
            options: ["`con = sqltor.connect(...)`", "`cur = con.cursor()`", "`cur.execute(insert_query, values)`", "`con.commit()`", "`cur.fetchall()`"],
            answers: [0, 1, 2, 3],
            explain: "Nothing needs to be fetched after an INSERT.",
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
  "12:File Handling": "c12-cs-file-handling",
  "12:Stack": "c12-cs-stack",
  "12:Computer Networks": "c12-cs-computer-networks",
  "12:Database Concepts": "c12-cs-database-concepts",
  "12:Structured Query Language (SQL)": "c12-cs-sql",
  "12:Interface of Python with SQL": "c12-cs-python-sql-interface",
};
