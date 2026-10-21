import type { CourseResources } from "./types";

export const pythonResources: CourseResources = {
  course: "python",
  caseStudies: [
    {
      slug: "attendance-script",
      title: "Automating a department's attendance report",
      summary: "A lab assistant turned a three-hour weekly spreadsheet chore into a 2-second Python script — then made it robust.",
      units: ["collections", "control-flow", "functions"],
      minutes: 15,
      scenario: `Every Friday, a lab assistant in a college's chemistry department spent about three hours merging attendance sheets from 12 lab sections into one report, flagging students below the **75%** attendance requirement and emailing the list to the head of department.

Each section exported a CSV with columns \`roll_no, name, date, status\` where status was \`P\`, \`A\` or \`L\` (late, counted as present). A second-year student volunteered to automate it. Her first version worked on the sample file but crashed on the real data.`,
      data: {
        caption: "What the real files contained",
        headers: ["Issue found", "Rows affected (of 18,400)"],
        rows: [
          ["Lower-case or padded status (\" p\", \"a\")", "612"],
          ["Blank status (lab cancelled)", "340"],
          ["Same student in two sections (section change)", "27 students"],
          ["Roll numbers with leading zeros lost (e.g. 0412 → 412)", "1,150"],
        ],
      },
      questions: [
        "Which data structure would you use to accumulate present/total counts per student, and why?",
        "Write a small function `normalise_status(raw)` that returns `\"P\"`, `\"A\"` or `None`, and explain how you'd treat `None` rows.",
        "Why do leading zeros disappear, and how can you prevent it when reading CSVs?",
        "How should the script combine records for students who changed sections?",
        "List two ways to make the script safe to run every week without supervision.",
      ],
      outcome: `A **dictionary** keyed by roll number gives $O(1)$ lookup and update: \`counts[roll] = [present, total]\` (or a \`collections.defaultdict\`). Keying by roll number, not section, naturally merges students who changed sections.

\`def normalise_status(raw): s = raw.strip().upper(); return "P" if s in {"P", "L"} else "A" if s == "A" else None\`

Rows returning \`None\` (cancelled labs) are skipped so they don't count against anyone. Leading zeros vanished because a spreadsheet had treated roll numbers as numbers; reading with the \`csv\` module keeps them as strings, and \`roll.zfill(4)\` repaired older files.

Robustness came from \`try/except\` around file parsing with a clear log of bad rows, a dry-run flag that prints the report instead of emailing it, and a test file with the known edge cases. Friday's three-hour job now takes seconds plus a five-minute check.`,
      takeaways: [
        "Real data is messy — normalise inputs at the boundary.",
        "Dictionaries are the natural tool for grouping and counting.",
        "Keep identifiers like roll numbers as strings.",
        "Log and skip bad rows instead of crashing; test with real edge cases.",
      ],
    },
    {
      slug: "mutable-default-bug",
      title: "The quiz app where everyone shared one score list",
      summary: "A mutable default argument and a shared class attribute leaked one player's answers into another's. A lesson in Python's object model.",
      units: ["functions", "robust-python"],
      minutes: 13,
      scenario: `A student club wrote a Python quiz bot for their Discord server. Each player got a \`Player\` object, and answers were recorded with a helper function. During the first live quiz, a new player joined and immediately had a score of 7 — the total of everyone who played before. Later, two players' answer histories were identical.

The relevant code was:

\`def record(answer, history=[]):\`
\`    history.append(answer)\`
\`    return history\`

\`class Player:\`
\`    answers = []\`
\`    def __init__(self, name): self.name = name\``,
      data: {
        caption: "What the club saw in a test",
        headers: ["Call", "Returned / observed"],
        rows: [
          ["record(\"A\")", "[\"A\"]"],
          ["record(\"B\")", "[\"A\", \"B\"]"],
          ["p1 = Player(\"Asha\"); p1.answers.append(1)", "p1.answers == [1]"],
          ["p2 = Player(\"Ravi\"); p2.answers", "[1]"],
        ],
      },
      questions: [
        "When is the default value `[]` in `record` created, and why does it keep growing?",
        "Rewrite `record` using the `None` sentinel pattern.",
        "Why do `p1` and `p2` share `answers`? Fix the class.",
        "Explain the difference between rebinding a name and mutating an object, with a short example.",
      ],
      outcome: `Default argument values are evaluated **once**, when the \`def\` statement runs, so every call without \`history\` shares the same list object.

\`def record(answer, history=None):\`
\`    if history is None: history = []\`
\`    history.append(answer)\`
\`    return history\`

\`answers = []\` at class level is a **class attribute** shared by all instances; \`.append\` mutates that one list. Moving it into \`__init__\` (\`self.answers = []\`) gives each player their own. (A \`@dataclass\` with \`field(default_factory=list)\` does the same.)

Assignment (\`x = [...]\`) rebinds a name to a new object; \`.append\` changes the object every name pointing to it can see. The club added a linter rule (flake8-bugbear's B006) to catch mutable defaults automatically.`,
      takeaways: [
        "Default arguments are evaluated once at definition time.",
        "Use `None` as a sentinel for mutable defaults.",
        "Instance state belongs in `__init__`, not on the class.",
        "Linters catch common Python pitfalls before users do.",
      ],
    },
  ],
  readings: {
    "python-basics": [
      { title: "The Python Tutorial", url: "https://docs.python.org/3/tutorial/", source: "python.org", type: "docs", level: "intro", note: "The official tutorial — start with chapters 1–3." },
      { title: "Python for Everybody", url: "https://www.py4e.com/", source: "Dr Charles Severance", type: "course", level: "intro", note: "Free course and book for beginners." },
      { title: "Think Python 3e", url: "https://allendowney.github.io/ThinkPython/", source: "Allen B. Downey", type: "book", level: "intro", note: "Free online textbook." },
    ],
    "control-flow": [
      { title: "More control flow tools", url: "https://docs.python.org/3/tutorial/controlflow.html", source: "python.org", type: "docs", level: "intro", note: "if, for, range, break/continue and match." },
      { title: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", source: "Al Sweigart", type: "book", level: "intro", note: "Free book on practical automation." },
      { title: "CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/", source: "Harvard CS50", type: "course", level: "intro", note: "Free lectures and problem sets." },
    ],
    functions: [
      { title: "Defining functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions", source: "python.org", type: "docs", level: "intro", note: "Including the warning about mutable defaults." },
      { title: "Python's execution model: naming and binding", url: "https://docs.python.org/3/reference/executionmodel.html", source: "python.org", type: "docs", level: "advanced", note: "How scope and names really work." },
      { title: "Facts and myths about Python names and values", url: "https://nedbatchelder.com/text/names.html", source: "Ned Batchelder", type: "article", level: "intermediate", note: "A classic explanation of mutation versus rebinding." },
    ],
    collections: [
      { title: "Data structures", url: "https://docs.python.org/3/tutorial/datastructures.html", source: "python.org", type: "docs", level: "intro", note: "Lists, tuples, sets, dicts and comprehensions." },
      { title: "collections — container datatypes", url: "https://docs.python.org/3/library/collections.html", source: "python.org", type: "docs", level: "intermediate", note: "Counter, defaultdict, deque and namedtuple." },
      { title: "csv — CSV file reading and writing", url: "https://docs.python.org/3/library/csv.html", source: "python.org", type: "docs", level: "intro", note: "Reading data safely as strings." },
    ],
    "robust-python": [
      { title: "Errors and exceptions", url: "https://docs.python.org/3/tutorial/errors.html", source: "python.org", type: "docs", level: "intro", note: "try/except/else/finally and raising errors." },
      { title: "Classes", url: "https://docs.python.org/3/tutorial/classes.html", source: "python.org", type: "docs", level: "intermediate", note: "Class vs instance attributes, inheritance." },
      { title: "The Python Standard Library", url: "https://docs.python.org/3/library/", source: "python.org", type: "docs", level: "intermediate", note: "Batteries included — browse before you build." },
      { title: "PEP 8 — Style Guide for Python Code", url: "https://peps.python.org/pep-0008/", source: "python.org", type: "docs", level: "intro", note: "The community style guide." },
    ],
  },
  competencies: [
    { id: "basics", name: "Python fundamentals", description: "Work with values, variables and strings.", lessons: ["python/python-basics/hello-python", "python/python-basics/variables-and-types", "python/python-basics/strings"] },
    { id: "control", name: "Control flow", description: "Make decisions and repeat work.", lessons: ["python/control-flow/conditionals", "python/control-flow/loops"] },
    { id: "functions", name: "Functions & scope", description: "Write reusable functions and reason about scope.", lessons: ["python/functions/defining-functions", "python/functions/arguments-scope-lambdas"] },
    { id: "collections", name: "Data structures", description: "Choose lists, tuples, dicts, sets and comprehensions.", lessons: ["python/collections/lists-and-tuples", "python/collections/dicts-and-sets", "python/collections/comprehensions"] },
    { id: "errors", name: "Robust code", description: "Handle errors and use the standard library.", lessons: ["python/robust-python/error-handling", "python/robust-python/modules-stdlib"] },
    { id: "oop", name: "Objects & classes", description: "Model state with classes.", lessons: ["python/robust-python/classes-and-objects"] },
  ],
};
