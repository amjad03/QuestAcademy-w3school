import type { Pathway } from "./types";

export const pythonAutomation: Pathway = {
  slug: "python-automation",
  title: "Python Automation for Work",
  goal: "Automate the repetitive parts of your job — renaming files, tidying reports, checking data and generating summaries — with small, reliable Python scripts.",
  roles: ["Operations / admin professional", "Finance or HR executive", "Any knowledge worker who lives in spreadsheets"],
  skills: ["Python fundamentals", "Working with text and dates", "Lists, dictionaries and comprehensions", "Writing reusable functions", "Error handling", "Classes for simple tools", "Using the standard library", "Breaking a manual task into steps"],
  weeks: 8,
  prerequisites: ["No programming experience needed", "A repetitive task at work you’d like to automate (helpful)"],
  color: "#14B8A6",
  modules: [
    {
      title: "Python basics for busy people",
      why: "A few core ideas — variables, strings and decisions — already let you replace minutes of copy-paste with one command.",
      lessonIds: ["python/python-basics/hello-python", "python/python-basics/variables-and-types", "python/python-basics/strings", "python/control-flow/conditionals"],
      assignment: {
        id: "pa-name-cleaner",
        title: "Standardise employee names and emails",
        scenario:
          "HR exported a list of new joiners with names like ‘  aSHA  rao ’ and missing emails. Company emails follow firstname.lastname@company.in. Write a script that tidies names and generates missing emails.",
        deliverables: ["A function that title-cases and trims names", "A function that builds the company email from a name", "Output for at least 6 sample names, including edge cases (single name, extra spaces)"],
        rubric: [
          { criterion: "String handling", description: "Uses strip/split/title/lower correctly; handles extra spaces.", points: 30 },
          { criterion: "Edge cases", description: "Single-word names and existing emails are handled sensibly.", points: 25 },
          { criterion: "Functions", description: "Logic wrapped in small, named functions.", points: 25 },
          { criterion: "Readability", description: "Clear names and a short comment explaining the email rule.", points: 20 },
        ],
        submission: "code",
        codeLang: "python",
        estimatedHours: 1.5,
        hints: ["' '.join(name.split()) collapses repeated spaces.", "Decide what to do with single names and write it down."],
      },
    },
    {
      title: "Loops and collections",
      why: "Automation is mostly ‘do this for every row/file’. Loops, lists and dictionaries are the workhorses.",
      lessonIds: ["python/control-flow/loops", "python/collections/lists-and-tuples", "python/collections/dicts-and-sets", "python/collections/comprehensions"],
      assignment: {
        id: "pa-expense-summary",
        title: "Summarise team expenses",
        scenario:
          "Finance sends you a list of expense claims as (employee, category, amount) tuples every month. Produce totals per employee and per category, and flag any single claim above ₹10,000 for review.",
        deliverables: ["Per-employee and per-category totals using dictionaries", "A list of flagged claims", "A neatly printed summary report"],
        rubric: [
          { criterion: "Correct totals", description: "Totals per employee and per category are accurate.", points: 30 },
          { criterion: "Data structures", description: "Appropriate use of dicts/lists/comprehensions.", points: 25 },
          { criterion: "Flagging rule", description: "Threshold applied correctly and easy to change.", points: 20 },
          { criterion: "Report output", description: "Readable, aligned output a manager could paste into email.", points: 25 },
        ],
        submission: "code",
        codeLang: "python",
        estimatedHours: 2,
        hints: ["totals[name] = totals.get(name, 0) + amount", "Put the threshold in a constant at the top of the script."],
      },
    },
    {
      title: "Reusable, reliable scripts",
      why: "Scripts that crash on one bad row get abandoned. Functions and error handling make tools you can trust and share.",
      lessonIds: ["python/functions/defining-functions", "python/functions/arguments-scope-lambdas", "python/robust-python/error-handling", "python/robust-python/modules-stdlib"],
      assignment: {
        id: "pa-date-checker",
        title: "Invoice due-date checker",
        scenario:
          "Accounts payable tracks invoices as strings like ‘2026-11-03’ with payment terms of 15, 30 or 45 days. Write a tool that computes due dates, lists overdue invoices as of today, and survives badly formatted dates.",
        deliverables: ["A function computing due dates with datetime", "Overdue list sorted by days overdue", "Bad rows reported, not crashing the run"],
        rubric: [
          { criterion: "Date logic", description: "Correct due-date and overdue calculations using datetime.", points: 30 },
          { criterion: "Error handling", description: "try/except around parsing with useful messages.", points: 25 },
          { criterion: "Reusability", description: "Parameters (e.g. today’s date) passed in, not hard-coded.", points: 25 },
          { criterion: "Output", description: "Sorted, clear list with amounts and days overdue.", points: 20 },
        ],
        submission: "code",
        codeLang: "python",
        estimatedHours: 2,
        hints: ["datetime.strptime(s, '%Y-%m-%d') then + timedelta(days=terms).", "Pass `today` as an argument so you can test it."],
      },
    },
    {
      title: "Build a small tool",
      why: "Classes help you package related data and behaviour — the step from one-off script to a tool colleagues can use.",
      lessonIds: ["python/robust-python/classes-and-objects", "dsa/complexity/big-o-notation"],
      assignment: {
        id: "pa-capstone",
        title: "Capstone: automate one of your own tasks",
        scenario:
          "Pick a real, repetitive task from your work (or use: ‘Every Friday I copy numbers from 5 regional reports into one summary’). Write a short design doc and a working Python script that automates it.",
        deliverables: ["Design doc: the manual steps today, time spent, and what the script will do", "The script (or a realistic simulation with sample data)", "Estimate of hours saved per month"],
        rubric: [
          { criterion: "Problem framing", description: "Manual process and success criteria are clearly described.", points: 25 },
          { criterion: "Working solution", description: "Script runs on sample data and produces the intended output.", points: 30 },
          { criterion: "Robustness", description: "Handles missing/odd inputs gracefully.", points: 20 },
          { criterion: "Impact", description: "Credible estimate of time saved and next improvements.", points: 25 },
        ],
        submission: "code",
        codeLang: "python",
        estimatedHours: 4,
        hints: ["Start by writing the steps as comments, then fill each one in.", "Keep sample data inside the script so anyone can run it."],
      },
    },
  ],
};
