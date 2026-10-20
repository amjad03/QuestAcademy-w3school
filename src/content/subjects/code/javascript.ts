import type { Subject } from "@/content/types";

export const javascript: Subject = {
  slug: "javascript",
  title: "JavaScript",
  world: "code",
  icon: "⚡",
  colors: ["#facc15", "#f97316"],
  tagline: "Bring pages to life — logic, data, interactivity and async code.",
  description:
    "JavaScript is the programming language of the web. Go from your first variable to arrays, objects, map/filter/reduce, DOM manipulation, events and async/await. Every example runs live in your browser, and auto-graded challenges test your functions for real.",
  levels: ["Beginner", "Intermediate"],
  stages: ["middle", "secondary", "ug", "pg", "lifelong"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "basics",
      title: "Variables, Types & Decisions",
      icon: "🔤",
      description: "Store values, understand types, compare things and make decisions.",
      lessons: [
        {
          slug: "variables-types",
          title: "Variables & Data Types",
          summary: "let, const, strings, numbers, booleans, null, undefined — and console.log.",
          minutes: 14,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A program without variables is like a kitchen without containers — nowhere to put anything. A **variable** is a labelled box that holds a value.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "console.log prints to the output panel.",
              code: `let score = 0;          // can change later
const playerName = "Mia"; // can't be reassigned

score = score + 10;
console.log(playerName, "has", score, "points");`,
            },
            {
              type: "table",
              headers: ["Keyword", "Reassign?", "Use when"],
              rows: [
                ["`const`", "No", "Default choice — most values never get reassigned"],
                ["`let`", "Yes", "Counters, totals, anything that changes"],
                ["`var`", "Yes", "Old style with confusing scoping — avoid in new code"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Start with const",
              md: "Declare everything with `const`. Switch to `let` only when you actually need to reassign. Your code becomes easier to reason about.",
            },
            {
              type: "heading",
              text: "The primitive types",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `console.log(typeof "hello");   // string
console.log(typeof 42);        // number
console.log(typeof 3.14);      // number (no separate float type)
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // "object" — a famous old bug!
console.log(typeof 10n);       // bigint`,
            },
            {
              type: "heading",
              text: "Working with strings",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Template literals use backticks and ${...}.",
              code: `const city = "Lisbon";
const temp = 24;

console.log("It is " + temp + "°C in " + city);   // concatenation
console.log(\`It is \${temp}°C in \${city}\`);       // template literal
console.log(city.length, city.toUpperCase(), city[0]);`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "+ with strings concatenates",
              md: "`\"5\" + 3` is `\"53\"`, not `8`. If either side is a string, `+` glues text. Convert first: `Number(\"5\") + 3` → `8`.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `console.log("5" + 3);          // "53"
console.log("5" - 3);          // 2  (minus forces numbers)
console.log(Number("5") + 3);  // 8
console.log(String(99) + "!"); // "99!"`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `typeof 7.5` return?",
                  options: ["`\"float\"`", "`\"number\"`", "`\"decimal\"`", "`\"double\"`"],
                  answer: 1,
                  explain: "JavaScript has one `number` type for integers and decimals.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`const` by default, `let` when reassigning, avoid `var`.",
                "Primitives: string, number, boolean, undefined, null, bigint, symbol.",
                "Template literals are wrapped in backticks and use `${...}` placeholders.",
                "`+` with a string concatenates.",
              ],
            },
          ],
          flashcards: [
            { front: "`let` vs `const`?", back: "`let` can be reassigned; `const` can't." },
            { front: "What does `typeof null` return?", back: "`\"object\"` — a historical bug kept for compatibility." },
            { front: "`\"2\" + 2`?", back: "`\"22\"` (string concatenation)." },
            { front: "How do you insert a variable into a template literal?", back: "Wrap the string in backticks and write `${total}` where the value should go." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "`total` is declared with one of these keywords and then reassigned with `total = 2;`. Which keyword makes the reassignment throw an error?",
              options: ["`let`", "`var`", "`const`", "None of them"],
              answer: 2,
              explain: "Reassigning a `const` throws a TypeError.",
            },
            {
              kind: "fill",
              q: "`\"10\" - 4` evaluates to the number ___.",
              answer: ["6"],
              explain: "`-` converts strings to numbers: 10 − 4 = 6.",
            },
            {
              kind: "truefalse",
              q: "JavaScript has separate types for integers and decimals.",
              answer: false,
              explain: "Both are `number` (plus `bigint` for huge integers).",
            },
            {
              kind: "multi",
              q: "Which are primitive types?",
              options: ["string", "boolean", "array", "undefined"],
              answers: [0, 1, 3],
              explain: "Arrays are objects, not primitives.",
            },
          ],
          challenge: {
            title: "Checkout total",
            prompt:
              "Create a variable `price` set to **5** and a variable `quantity` set to **3**. Then log the text `Total: 15` — calculated from the variables, not typed by hand.",
            lang: "javascript",
            starter: `// declare price and quantity

// log "Total: " followed by price × quantity
`,
            tests: [
              { label: "Logs \"Total: 15\"", check: "__logs.some(l => l.trim().replace(/\\s+/g, ' ') === 'Total: 15')" },
              { label: "price is 5 and quantity is 3", check: "typeof price !== 'undefined' && typeof quantity !== 'undefined' && price === 5 && quantity === 3" },
            ],
            solution: `const price = 5;
const quantity = 3;
console.log("Total: " + price * quantity);`,
            hints: ["Multiplication uses `*`.", "`\"Total: \" + price * quantity` — multiplication happens before `+`."],
          },
        },
        {
          slug: "operators-conditionals",
          title: "Operators & Conditionals",
          summary: "Maths, comparisons, logic, if/else, the ternary and switch.",
          minutes: 16,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Games decide if you won. Shops decide if you get free shipping. Every decision in code comes down to a **condition** that is either `true` or `false`.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `console.log(7 + 2, 7 - 2, 7 * 2, 7 / 2); // 9 5 14 3.5
console.log(7 % 2);   // 1  (remainder)
console.log(2 ** 10); // 1024 (power)

let lives = 3;
lives -= 1;   // same as lives = lives - 1
lives++;      // add one
console.log(lives);`,
            },
            {
              type: "heading",
              text: "Comparisons",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `console.log(5 === 5);    // true  strict equality
console.log(5 === "5");  // false different types
console.log(5 == "5");   // true  loose: converts types (avoid!)
console.log(5 !== 3);    // true
console.log(10 >= 10);   // true`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Always use === and !==",
              md: "Loose `==` does surprising conversions: `0 == \"\"` is `true`, `null == undefined` is `true`. Strict `===` compares type *and* value, so no surprises.",
            },
            {
              type: "heading",
              text: "if / else if / else",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Change temp and run again.",
              code: `const temp = 18;

if (temp >= 30) {
  console.log("Beach day! 🏖️");
} else if (temp >= 15) {
  console.log("Nice for a walk 🚶");
} else {
  console.log("Grab a jacket 🧥");
}`,
            },
            {
              type: "heading",
              text: "Logical operators",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const age = 16;
const hasTicket = true;

console.log(age >= 13 && hasTicket); // AND: both must be true
console.log(age < 5 || age > 65);    // OR: at least one true
console.log(!hasTicket);             // NOT: flips it

// Ternary: condition ? ifTrue : ifFalse
const label = age >= 18 ? "adult" : "minor";
console.log(label);`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "Truthy & falsy",
              md: "In a condition, these count as false: `false`, `0`, `\"\"`, `null`, `undefined`, `NaN`. Everything else — including `\"0\"` and `[]` — is truthy.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const day = "sat";
switch (day) {
  case "sat":
  case "sun":
    console.log("Weekend!");
    break;
  default:
    console.log("Weekday");
}`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is `17 % 5`?",
                  answer: 2,
                  explain: "17 = 3×5 + 2, so the remainder is 2.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "`==` vs `===`?", back: "`==` converts types first; `===` requires same type and value. Use `===`." },
            { front: "What does `%` do?", back: "Gives the remainder of a division." },
            { front: "Ternary syntax?", back: "`condition ? valueIfTrue : valueIfFalse`" },
            { front: "List the falsy values.", back: "`false`, `0`, `\"\"`, `null`, `undefined`, `NaN` (and `0n`)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What does `true && false || true` evaluate to?",
              options: ["`true`", "`false`", "`undefined`", "Error"],
              answer: 0,
              explain: "`&&` runs first: `true && false` = false, then `false || true` = true.",
            },
            {
              kind: "truefalse",
              q: "An empty array `[]` is falsy.",
              answer: false,
              explain: "All objects, including empty arrays, are truthy.",
            },
            {
              kind: "numeric",
              q: "What is `2 ** 5`?",
              answer: 32,
              explain: "2 to the power 5 = 32.",
            },
            {
              kind: "mcq",
              q: "Without `break`, what happens after a matching `case` runs?",
              options: ["The switch ends", "It falls through into the next case", "An error is thrown", "It loops"],
              answer: 1,
              explain: "Execution continues into the following cases until a break.",
            },
          ],
          challenge: {
            title: "Grade calculator",
            prompt:
              "Write a function `grade(score)` that returns:\n\n- `\"A\"` for 90 and above\n- `\"B\"` for 75–89\n- `\"C\"` for 50–74\n- `\"F\"` below 50",
            lang: "javascript",
            starter: `function grade(score) {
  // your if / else if / else here
}
`,
            tests: [
              { label: "grade is a function", check: "typeof grade === 'function'" },
              { label: "95 → A and 90 → A", check: "grade(95) === 'A' && grade(90) === 'A'" },
              { label: "89 → B and 75 → B", check: "grade(89) === 'B' && grade(75) === 'B'" },
              { label: "74 → C and 50 → C", check: "grade(74) === 'C' && grade(50) === 'C'" },
              { label: "49 → F and 0 → F", check: "grade(49) === 'F' && grade(0) === 'F'" },
            ],
            solution: `function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 75) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "F";
  }
}`,
            hints: ["Check the highest band first, then work down.", "Use `>=` so boundary scores like 90 land in the right band."],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "loops-functions",
      title: "Loops & Functions",
      icon: "🔁",
      description: "Repeat work with loops and package logic into reusable functions.",
      lessons: [
        {
          slug: "loops",
          title: "Loops",
          summary: "for, while, for...of, break and continue.",
          minutes: 15,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Need to print 1 to 1000? Writing 1000 lines would be silly. A **loop** repeats a block of code for you.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "start; keep going while; step",
              code: `for (let i = 1; i <= 5; i++) {
  console.log("Lap", i);
}`,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "`let i = 1` — runs once at the start.",
                "`i <= 5` — checked before each lap; stop when false.",
                "`i++` — runs after each lap.",
              ],
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "while: repeat until a condition changes.",
              code: `let coins = 1;
let days = 0;
while (coins < 100) {
  coins *= 2;   // doubles every day
  days++;
}
console.log("Days to reach 100 coins:", days);`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Infinite loops",
              md: "If the condition never becomes false, the loop never ends and the tab freezes. Make sure something inside the loop moves you towards the exit.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "for...of walks through every item of an array or string.",
              code: `const fruits = ["apple", "mango", "kiwi"];
for (const fruit of fruits) {
  console.log("I like", fruit);
}

for (const letter of "hey") {
  console.log(letter);
}`,
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip evens
  if (i > 7) break;          // stop entirely
  console.log(i);            // 1 3 5 7
}`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many times does `for (let i = 0; i < 4; i++)` run its body?",
                  answer: 4,
                  explain: "i = 0, 1, 2, 3 — four laps.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Three parts of a `for` loop header?", back: "Initialiser; condition; update — e.g. `let i = 0; i < n; i++`." },
            { front: "`break` vs `continue`?", back: "`break` exits the loop; `continue` skips to the next iteration." },
            { front: "Loop over array values directly?", back: "`for (const item of array) { ... }`" },
            { front: "When is `while` handy?", back: "When you don't know in advance how many iterations you need." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is the last number logged by `for (let i = 10; i > 0; i -= 3) console.log(i)`?",
              options: ["0", "1", "3", "4"],
              answer: 1,
              explain: "It logs 10, 7, 4, 1; then i = −2 fails the condition.",
            },
            {
              kind: "truefalse",
              q: "`for...of` gives you each value of an array.",
              answer: true,
              explain: "Yes — `for...in` gives keys/indexes, `for...of` gives values.",
            },
            {
              kind: "numeric",
              q: "`let s = 0; for (let i = 1; i <= 4; i++) s += i;` What is `s`?",
              answer: 10,
              explain: "1 + 2 + 3 + 4 = 10.",
            },
          ],
          challenge: {
            title: "FizzBuzz",
            prompt:
              "The classic interview warm-up! Loop from **1 to 15** and log one line per number:\n\n- `Fizz` if divisible by 3\n- `Buzz` if divisible by 5\n- `FizzBuzz` if divisible by both\n- otherwise the number itself\n\nLog nothing else.",
            lang: "javascript",
            starter: `for (let i = 1; i <= 15; i++) {
  // decide what to log
}
`,
            tests: [
              { label: "Logs exactly 15 lines", check: "__logs.length === 15" },
              { label: "1 and 2 log as numbers", check: "__logs[0].trim() === '1' && __logs[1].trim() === '2'" },
              { label: "3 → Fizz, 5 → Buzz", check: "__logs[2].trim() === 'Fizz' && __logs[4].trim() === 'Buzz'" },
              { label: "15 → FizzBuzz", check: "__logs[14].trim() === 'FizzBuzz'" },
              { label: "Every line is correct", check: "__logs.map(s => s.trim()).join(',') === '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz'" },
            ],
            solution: `for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`,
            hints: ["`i % 3 === 0` tests divisibility by 3.", "Check the 'both' case (divisible by 15) first, or it will be caught by the Fizz branch."],
          },
        },
        {
          slug: "functions",
          title: "Functions",
          summary: "Declare, call, pass parameters, set defaults and return values.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A function is a recipe: write the steps once, then cook it whenever you like with different ingredients.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `function greet(name) {        // name is a parameter
  return "Hello, " + name + "!";
}

console.log(greet("Ravi"));   // "Ravi" is an argument
console.log(greet("Zoe"));`,
            },
            {
              type: "callout",
              tone: "note",
              title: "return vs console.log",
              md: "`console.log` only *shows* a value. `return` *hands it back* so other code can use it. A function without `return` gives back `undefined`.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `function area(width, height = width) { // default parameter
  return width * height;
}
console.log(area(4, 5)); // 20
console.log(area(3));    // 9  (height defaults to width)

function noReturn() { const x = 1; }
console.log(noReturn()); // undefined`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "return ends the function",
              md: "Code after a `return` in the same block never runs. Handy for early exits: `if (!user) return;`.",
            },
            {
              type: "heading",
              text: "Functions are values",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "You can store functions in variables and pass them around.",
              code: `const shout = function (text) {
  return text.toUpperCase() + "!!!";
};

function applyTwice(fn, value) {
  return fn(fn(value));
}

console.log(shout("hi"));
console.log(applyTwice(shout, "go"));`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In `function add(a, b)`, what are `a` and `b`?",
                  options: ["Arguments", "Parameters", "Returns", "Globals"],
                  answer: 1,
                  explain: "Parameters are the names in the definition; arguments are the values passed in a call.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Parameter vs argument?", back: "Parameter = name in the definition. Argument = actual value passed when calling." },
            { front: "What does a function return without `return`?", back: "`undefined`" },
            { front: "Default parameter syntax?", back: "`function f(x = 10) { ... }`" },
            { front: "Can functions be passed to other functions?", back: "Yes — functions are values (\"first-class\")." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "`function f(x) { return x * 2; return x * 3; }` What is `f(5)`?",
              answer: 10,
              explain: "The first return exits the function.",
            },
            {
              kind: "truefalse",
              q: "`console.log` inside a function is the same as returning the value.",
              answer: false,
              explain: "Logging displays it; only `return` makes it available to the caller.",
            },
            {
              kind: "fill",
              q: "`function hi(name = \"pal\") { return name; }` — `hi()` returns `\"___\"`.",
              answer: ["pal"],
              explain: "The default kicks in when no argument is given.",
            },
          ],
          challenge: {
            title: "Friendly greeter",
            prompt:
              "Write `greet(name)` that **returns** `\"Hello, <name>!\"`. If no name is given, use `\"friend\"` as a default, so `greet()` returns `\"Hello, friend!\"`.",
            lang: "javascript",
            starter: `function greet(name) {

}
`,
            tests: [
              { label: "greet is a function", check: "typeof greet === 'function'" },
              { label: "greet('Ada') returns 'Hello, Ada!'", check: "greet('Ada') === 'Hello, Ada!'" },
              { label: "greet() returns 'Hello, friend!'", check: "greet() === 'Hello, friend!'" },
            ],
            solution: `function greet(name = "friend") {
  return "Hello, " + name + "!";
}`,
            hints: ["Default parameters look like `name = \"friend\"`.", "Use `return`, not `console.log`."],
          },
        },
        {
          slug: "arrow-functions-scope",
          title: "Arrow Functions, Scope & Closures",
          summary: "Short arrow syntax, where variables live, and functions that remember.",
          minutes: 16,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "Modern JavaScript is full of tiny functions passed around. **Arrow functions** make them short and sweet.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `// Regular function expression
const square1 = function (n) { return n * n; };

// Arrow function
const square2 = (n) => { return n * n; };

// One expression? Drop the braces and return:
const square3 = n => n * n;

const add = (a, b) => a + b;
const sayHi = () => "hi!";

console.log(square3(6), add(2, 3), sayHi());`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Returning an object",
              md: "`() => { x: 1 }` returns `undefined` — the braces are read as a function body. Wrap objects in parentheses: `() => ({ x: 1 })`.",
            },
            {
              type: "heading",
              text: "Scope: where variables live",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const planet = "Earth";      // global scope

function visit() {
  const city = "Paris";       // function scope
  if (true) {
    const room = "42";        // block scope
    console.log(planet, city, room);
  }
  // console.log(room);       // ❌ ReferenceError — room lives only in the block
}
visit();`,
            },
            {
              type: "callout",
              tone: "tip",
              md: "Inner code can see outer variables, never the other way round. Think one-way mirrored glass: you can look out, nobody can look in.",
            },
            {
              type: "heading",
              text: "Closures",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "The inner function remembers count even after makeCounter has finished.",
              code: `function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const clicks = makeCounter();
console.log(clicks()); // 1
console.log(clicks()); // 2

const other = makeCounter();
console.log(other());  // 1 — its own private count`,
            },
            {
              type: "callout",
              tone: "fact",
              md: "A **closure** is a function bundled with the variables around where it was created. It's how JavaScript gives you private state.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `const f = x => x + 1; f(4)` return?",
                  options: ["4", "5", "undefined", "Error"],
                  answer: 1,
                  explain: "A single-expression arrow returns its expression: 4 + 1 = 5.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Arrow function with one parameter and implicit return?", back: "`n => n * 2`" },
            { front: "How do you return an object from an arrow?", back: "Wrap it in parentheses: `() => ({ a: 1 })`." },
            { front: "Block scope?", back: "`let`/`const` declared inside `{ }` exist only within those braces." },
            { front: "What is a closure?", back: "A function that keeps access to variables from the scope where it was created." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which arrow function correctly adds two numbers?",
              options: ["`(a, b) -> a + b`", "`(a, b) => a + b`", "`a, b => a + b`", "`=> (a, b) a + b`"],
              answer: 1,
              explain: "Multiple parameters need parentheses, and the arrow is `=>`.",
            },
            {
              kind: "truefalse",
              q: "A variable declared with `const` inside an `if` block is available after the block ends.",
              answer: false,
              explain: "`const` and `let` are block-scoped.",
            },
            {
              kind: "numeric",
              q: "`const c = makeCounter(); c(); c(); c();` — what does the third `c()` return (using the counter from this lesson)?",
              answer: 3,
              explain: "Each call increments the remembered count: 1, 2, 3.",
            },
          ],
          challenge: {
            title: "Private counter",
            prompt:
              "Write `makeCounter()` that returns a function. Each call to that returned function should increase a private count by 1 and return the new value. Separate counters must be independent.",
            lang: "javascript",
            starter: `function makeCounter() {

}
`,
            tests: [
              { label: "makeCounter returns a function", check: "typeof makeCounter === 'function' && typeof makeCounter() === 'function'" },
              { label: "Counts 1, 2, 3", check: "(() => { const c = makeCounter(); return c() === 1 && c() === 2 && c() === 3; })()" },
              { label: "Counters are independent", check: "(() => { const a = makeCounter(); const b = makeCounter(); a(); a(); return b() === 1 && a() === 3; })()" },
            ],
            solution: `function makeCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}`,
            hints: ["Declare `let count = 0` inside makeCounter, not globally.", "Return an arrow function that increments and returns `count`."],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "arrays-objects",
      title: "Arrays & Objects",
      icon: "🧺",
      description: "Store lists and records, then transform them with map, filter and reduce.",
      lessons: [
        {
          slug: "arrays",
          title: "Arrays",
          summary: "Ordered lists: indexes, length, push/pop, includes, slice and spread.",
          minutes: 14,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A playlist, a leaderboard, the items in your basket — whenever you have *many* of something in order, use an **array**.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const songs = ["Intro", "Sunrise", "Echoes"];

console.log(songs[0]);       // "Intro" — indexes start at 0
console.log(songs.length);   // 3
console.log(songs[songs.length - 1]); // last item: "Echoes"
console.log(songs.at(-1));   // also the last item`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Zero-based!",
              md: "The first item is `[0]` and the last is `[length - 1]`. Asking for `songs[3]` in a 3-item array gives `undefined`, not an error.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const queue = ["Ann", "Ben"];
queue.push("Cara");      // add to end
queue.unshift("Zed");    // add to start
console.log(queue);      // ["Zed","Ann","Ben","Cara"]

const last = queue.pop();    // remove from end
const first = queue.shift(); // remove from start
console.log(first, last, queue);`,
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const nums = [10, 20, 30, 40, 50];
console.log(nums.includes(30));   // true
console.log(nums.indexOf(40));    // 3
console.log(nums.slice(1, 3));    // [20, 30] — end not included
console.log(nums.join(" | "));

const more = [...nums, 60];       // spread: copy + add
console.log(more, nums.length);   // original unchanged`,
            },
            {
              type: "callout",
              tone: "note",
              md: "`const` arrays can still change their *contents* (`push`, `pop`). `const` only stops you reassigning the variable to a different array.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "`const a = [5, 8, 13]; a[1]` is…",
                  options: ["5", "8", "13", "undefined"],
                  answer: 1,
                  explain: "Index 1 is the second item.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Index of the first array item?", back: "0" },
            { front: "`push` vs `pop`?", back: "`push` adds to the end; `pop` removes from the end." },
            { front: "Does `slice` change the original?", back: "No — it returns a new array." },
            { front: "Copy an array with spread?", back: "`const copy = [...original];`" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "`[1, 2, 3, 4, 5, 6].slice(2, 5).length`?",
              answer: 3,
              explain: "Indexes 2, 3, 4 → three items.",
            },
            {
              kind: "truefalse",
              q: "You can `push` onto an array declared with `const`.",
              answer: true,
              explain: "`const` prevents reassignment, not mutation.",
            },
            {
              kind: "fill",
              q: "To check whether an array contains a value, use `.___(value)`.",
              answer: ["includes"],
              explain: "`includes` returns true or false.",
            },
            {
              kind: "mcq",
              q: "Which method removes the FIRST item?",
              options: ["`pop()`", "`shift()`", "`unshift()`", "`slice()`"],
              answer: 1,
              explain: "`shift` removes from the start; `unshift` adds to the start.",
            },
          ],
        },
        {
          slug: "objects",
          title: "Objects",
          summary: "Key–value records, dot and bracket access, methods, destructuring and JSON.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "An array answers \"which number in the list?\". An **object** answers \"which property?\" — like a contact card with a name, phone and email.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const pet = {
  name: "Biscuit",
  species: "dog",
  age: 4,
  tricks: ["sit", "roll"],
};

console.log(pet.name);          // dot notation
console.log(pet["species"]);    // bracket notation
pet.age = 5;                    // update
pet.vaccinated = true;          // add
delete pet.tricks;              // remove
console.log(pet);`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "When to use brackets",
              md: "Use brackets when the key is in a variable or has spaces: `const key = \"age\"; pet[key]`.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Methods are functions stored on an object.",
              code: `const player = {
  name: "Kai",
  hp: 100,
  hit(damage) {
    this.hp -= damage;
    return this.name + " has " + this.hp + " HP";
  },
};
console.log(player.hit(30));`,
            },
            {
              type: "heading",
              text: "Looping and destructuring",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const scores = { maths: 91, art: 78, music: 85 };

for (const [subject, mark] of Object.entries(scores)) {
  console.log(subject, mark);
}
console.log(Object.keys(scores));

const { maths, art } = scores;     // destructuring
console.log(maths + art);

const copy = { ...scores, art: 80 }; // spread + override
console.log(copy);`,
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "JSON is how objects travel across the internet as text.",
              code: `const text = JSON.stringify({ id: 7, done: false });
console.log(text, typeof text);

const obj = JSON.parse('{"id": 8, "done": true}');
console.log(obj.done);`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "`const k = \"age\";` How do you read the property named by `k`?",
                  options: ["`obj.k`", "`obj[k]`", "`obj.(k)`", "`obj->k`"],
                  answer: 1,
                  explain: "Brackets evaluate the variable; `obj.k` looks for a key literally called \"k\".",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Two ways to read a property?", back: "Dot `obj.key` and bracket `obj[\"key\"]`." },
            { front: "Get all keys of an object?", back: "`Object.keys(obj)`" },
            { front: "What is destructuring?", back: "Unpacking properties into variables: `const { a, b } = obj;`" },
            { front: "Object → JSON text?", back: "`JSON.stringify(obj)`; back with `JSON.parse(text)`." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Reading a property that doesn't exist throws an error.",
              answer: false,
              explain: "It returns `undefined`.",
            },
            {
              kind: "mcq",
              q: "`const { x } = { x: 3, y: 4 };` — what is `x`?",
              options: ["`{ x: 3 }`", "3", "4", "undefined"],
              answer: 1,
              explain: "Destructuring pulls out the `x` property's value.",
            },
            {
              kind: "fill",
              q: "To turn a JSON string into an object, call `JSON.___(text)`.",
              answer: ["parse"],
              explain: "`JSON.parse` converts text to a value.",
            },
          ],
        },
        {
          slug: "map-filter-reduce",
          title: "map, filter & reduce",
          summary: "Transform, select and combine arrays without writing manual loops.",
          minutes: 18,
          xp: 55,
          blocks: [
            {
              type: "text",
              md: "These three methods are the power tools of everyday JavaScript. Once they click, you'll write fewer loops and clearer code.",
            },
            {
              type: "table",
              headers: ["Method", "Does", "Returns"],
              rows: [
                ["`map(fn)`", "Transforms every item", "New array, same length"],
                ["`filter(fn)`", "Keeps items where `fn` returns true", "New array, same or shorter"],
                ["`reduce(fn, start)`", "Combines items into one value", "Anything (number, object…)"],
                ["`find(fn)`", "First item that matches", "One item or `undefined`"],
                ["`some` / `every`", "Does any / every item match?", "`true` / `false`"],
              ],
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const prices = [4, 10, 25, 7];

const withTax = prices.map(p => p * 1.2);
console.log(withTax);                 // [4.8, 12, 30, 8.4]

const cheap = prices.filter(p => p < 10);
console.log(cheap);                   // [4, 7]

const total = prices.reduce((sum, p) => sum + p, 0);
console.log(total);                   // 46`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "How reduce thinks",
              md: "`reduce` carries an **accumulator** along the array. With start 0: 0+4 = 4 → 4+10 = 14 → 14+25 = 39 → 39+7 = 46. Always pass a starting value.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Real data is usually arrays of objects. Chain the methods!",
              code: `const products = [
  { name: "Pen",      price: 2,  inStock: true },
  { name: "Lamp",     price: 30, inStock: false },
  { name: "Notebook", price: 5,  inStock: true },
];

const available = products
  .filter(p => p.inStock)
  .map(p => p.name);
console.log(available); // ["Pen", "Notebook"]

const stockValue = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log(stockValue); // 7

console.log(products.find(p => p.price > 10).name); // "Lamp"`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Don't forget to return",
              md: "With braces, an arrow needs `return`: `prices.map(p => { p * 2 })` gives `[undefined, …]`. Write `p => p * 2` or `p => { return p * 2; }`.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "`[1, 2, 3, 4].filter(n => n % 2 === 0)` returns…",
                  options: ["`[1, 3]`", "`[2, 4]`", "`[true, false, …]`", "`6`"],
                  answer: 1,
                  explain: "filter keeps the even numbers.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "map vs forEach?", back: "`map` returns a new transformed array; `forEach` just runs code and returns `undefined`." },
            { front: "What does filter's callback return?", back: "true to keep the item, false to drop it." },
            { front: "reduce's two callback parameters?", back: "The accumulator and the current item: `(acc, item) => ...`." },
            { front: "Do map/filter change the original array?", back: "No, they return new arrays." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "`[3, 5, 7].reduce((a, n) => a + n, 10)`?",
              answer: 25,
              explain: "10 + 3 + 5 + 7 = 25.",
            },
            {
              kind: "mcq",
              q: "`[1, 2, 3].map(n => n * n)`?",
              options: ["`[1, 2, 3]`", "`[2, 4, 6]`", "`[1, 4, 9]`", "`14`"],
              answer: 2,
              explain: "Each item is squared.",
            },
            {
              kind: "order",
              q: "Order these steps to get the total price of in-stock items.",
              items: ["Start with the products array", "`.filter(p => p.inStock)`", "`.map(p => p.price)`", "`.reduce((a, b) => a + b, 0)`"],
              explain: "Select, then extract, then combine.",
            },
            {
              kind: "truefalse",
              q: "`find` returns an array of all matching items.",
              answer: false,
              explain: "`find` returns the first match (or undefined). `filter` returns all matches.",
            },
          ],
          challenge: {
            title: "Shopping cart",
            prompt:
              "Each cart item looks like `{ name, price, qty }`.\n\n1. Write `cartTotal(items)` that returns the sum of `price * qty` for all items.\n2. Write `cheapNames(items, max)` that returns an array of the **names** of items whose price is **less than or equal to** `max`, in original order.\n\nUse `reduce`, `filter` and `map`.",
            lang: "javascript",
            starter: `function cartTotal(items) {

}

function cheapNames(items, max) {

}
`,
            tests: [
              { label: "cartTotal adds price × qty", check: "cartTotal([{ name: 'Pen', price: 2, qty: 3 }, { name: 'Ink', price: 5, qty: 2 }]) === 16" },
              { label: "cartTotal of an empty cart is 0", check: "cartTotal([]) === 0" },
              { label: "cheapNames filters and maps", check: "JSON.stringify(cheapNames([{ name: 'Pen', price: 2, qty: 1 }, { name: 'Lamp', price: 30, qty: 1 }, { name: 'Pad', price: 5, qty: 1 }], 5)) === JSON.stringify(['Pen', 'Pad'])" },
              { label: "cheapNames returns [] when nothing matches", check: "Array.isArray(cheapNames([{ name: 'Lamp', price: 30, qty: 1 }], 10)) && cheapNames([{ name: 'Lamp', price: 30, qty: 1 }], 10).length === 0" },
            ],
            solution: `function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cheapNames(items, max) {
  return items
    .filter(item => item.price <= max)
    .map(item => item.name);
}`,
            hints: [
              "Give `reduce` a starting value of `0`, otherwise an empty cart breaks.",
              "Filter first (`item.price <= max`), then map to `item.name`.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "dom-events",
      title: "The DOM & Events",
      icon: "🖱️",
      description: "Read and change the page with JavaScript, and respond to clicks, typing and more.",
      lessons: [
        {
          slug: "dom-basics",
          title: "Selecting & Changing Elements",
          summary: "querySelector, textContent, classList, styles and creating new elements.",
          minutes: 16,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "When a browser loads HTML it builds a live tree of objects called the **DOM** (Document Object Model). JavaScript can reach into that tree and change anything — text, colours, whole sections — without reloading.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<h1 id="title">Old title</h1>
<p class="msg">First</p>
<p class="msg">Second</p>

<script>
  const title = document.querySelector("#title");
  title.textContent = "New title from JavaScript!";

  const msgs = document.querySelectorAll(".msg");
  msgs.forEach((p, i) => {
    p.textContent = "Paragraph number " + (i + 1);
  });
</script>`,
            },
            {
              type: "table",
              headers: ["Method", "Returns"],
              rows: [
                ["`document.querySelector(css)`", "The first match (or `null`)"],
                ["`document.querySelectorAll(css)`", "A list of all matches"],
                ["`document.getElementById(id)`", "One element by id"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              md: "`querySelector` takes the same selectors you learned in CSS: `\"#id\"`, `\".class\"`, `\"nav a\"`, `\"li:first-child\"`.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Prefer toggling classes over setting styles one by one.",
              code: `<style>
  .dark { background: #111; color: #eee; padding: 10px; }
</style>
<div id="box">Watch me change</div>

<script>
  const box = document.querySelector("#box");
  box.classList.add("dark");
  box.style.borderRadius = "12px";       // camelCase for CSS properties
  box.setAttribute("title", "I was changed");
  console.log(box.classList.contains("dark"));
</script>`,
            },
            {
              type: "heading",
              text: "Creating and removing elements",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<ul id="todo"><li>Buy milk</li></ul>

<script>
  const list = document.querySelector("#todo");
  ["Walk dog", "Read book"].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.append(li);
  });
  list.firstElementChild.remove(); // remove "Buy milk"
</script>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "textContent vs innerHTML",
              md: "`innerHTML` parses HTML, so putting user input into it can let attackers inject scripts (XSS). Use `textContent` for plain text.",
            },
            {
              type: "callout",
              tone: "note",
              md: "Scripts run as soon as the browser reaches them. Put `<script>` at the end of `<body>` (or use `defer`) so the elements exist before you select them.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `document.querySelector(\".card\")` return if nothing matches?",
                  options: ["An empty list", "`null`", "`undefined`", "An error"],
                  answer: 1,
                  explain: "querySelector returns `null` when there's no match.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "What is the DOM?", back: "The browser's live tree of objects representing the page." },
            { front: "querySelector vs querySelectorAll?", back: "First match vs a list of all matches." },
            { front: "Add a CSS class with JS?", back: "`el.classList.add(\"name\")` (also `remove`, `toggle`)." },
            { front: "Why prefer textContent over innerHTML?", back: "It treats input as plain text, preventing script injection." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "To make a new `<li>`, call `document.___(\"li\")`.",
              answer: ["createElement"],
              explain: "`createElement` makes a detached element you can then append.",
            },
            {
              kind: "mcq",
              q: "How do you set the CSS `background-color` from JS?",
              options: ["`el.style.background-color = ...`", "`el.style.backgroundColor = ...`", "`el.css.bg = ...`", "`el.backgroundColor = ...`"],
              answer: 1,
              explain: "Hyphenated CSS names become camelCase on `style`.",
            },
            {
              kind: "truefalse",
              q: "A script in `<head>` without `defer` can always find elements in the body.",
              answer: false,
              explain: "The body hasn't been parsed yet, so the elements don't exist.",
            },
          ],
          challenge: {
            title: "Page makeover",
            prompt:
              "Using a `<script>` at the end of the body:\n\n1. Change the `<h1>` text to `Hello, DOM!`\n2. Add the class `highlight` to all three `.item` elements.\n3. Append a **fourth** `<li>` to `#list`.",
            lang: "html",
            starter: `<style>.highlight { background: yellow; }</style>
<h1>Hello?</h1>
<ul id="list">
  <li class="item">One</li>
  <li class="item">Two</li>
  <li class="item">Three</li>
</ul>

<script>
  // your code here
</script>`,
            tests: [
              { label: "h1 reads 'Hello, DOM!'", check: "document.querySelector('h1').textContent.trim() === 'Hello, DOM!'" },
              { label: "All three .item elements are highlighted", check: "document.querySelectorAll('.item.highlight').length >= 3" },
              { label: "#list has 4 list items", check: "document.querySelectorAll('#list > li').length === 4" },
            ],
            solution: `<style>.highlight { background: yellow; }</style>
<h1>Hello?</h1>
<ul id="list">
  <li class="item">One</li>
  <li class="item">Two</li>
  <li class="item">Three</li>
</ul>

<script>
  document.querySelector("h1").textContent = "Hello, DOM!";

  document.querySelectorAll(".item").forEach(el => el.classList.add("highlight"));

  const li = document.createElement("li");
  li.textContent = "Four";
  document.querySelector("#list").append(li);
</script>`,
            hints: [
              "`querySelectorAll` returns a list — use `.forEach` to touch each one.",
              "Create with `document.createElement(\"li\")`, then `list.append(li)`.",
            ],
          },
        },
        {
          slug: "events",
          title: "Events",
          summary: "addEventListener, the event object, input events and form submission.",
          minutes: 16,
          xp: 55,
          blocks: [
            {
              type: "text",
              md: "Clicks, key presses, scrolling, typing — each is an **event**. You tell the browser: \"when *this* happens to *that* element, run *my* function\".",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<button id="like">👍 Like</button>
<span id="likes">0</span>

<script>
  const btn = document.querySelector("#like");
  const out = document.querySelector("#likes");
  let likes = 0;

  btn.addEventListener("click", () => {
    likes++;
    out.textContent = likes;
  });
</script>`,
            },
            {
              type: "table",
              headers: ["Event", "Fires when"],
              rows: [
                ["`click`", "Element is clicked or tapped"],
                ["`input`", "The value of a field changes (every keystroke)"],
                ["`change`", "A field's value is committed (e.g. select changed)"],
                ["`submit`", "A form is submitted"],
                ["`keydown`", "A key is pressed"],
                ["`mouseover` / `mouseout`", "Pointer enters / leaves"],
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "The event object tells you what happened.",
              code: `<input id="name" placeholder="Type your name">
<p id="preview">Hello, stranger!</p>

<script>
  document.querySelector("#name").addEventListener("input", (event) => {
    const value = event.target.value.trim();
    document.querySelector("#preview").textContent =
      "Hello, " + (value || "stranger") + "!";
  });
</script>`,
            },
            {
              type: "heading",
              text: "Handling forms",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<form id="f">
  <input name="city" placeholder="City" required>
  <button>Save</button>
</form>
<p id="saved"></p>

<script>
  document.querySelector("#f").addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page reloading
    const city = e.target.elements.city.value;
    document.querySelector("#saved").textContent = "Saved: " + city;
  });
</script>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Pass the function, don't call it",
              md: "`btn.addEventListener(\"click\", doThing)` ✅ — `btn.addEventListener(\"click\", doThing())` ❌ runs `doThing` immediately and registers its *result*.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Event delegation",
              md: "Instead of a listener on every list item, put one on the parent and check `event.target`. It also works for items added later.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which call stops a form submission from reloading the page?",
                  options: ["`e.stop()`", "`e.preventDefault()`", "`return false` in HTML only", "`form.cancel()`"],
                  answer: 1,
                  explain: "`preventDefault()` cancels the browser's default action.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Attach a click handler?", back: "`el.addEventListener(\"click\", handler)`" },
            { front: "What is `event.target`?", back: "The element the event happened on." },
            { front: "`input` vs `change`?", back: "`input` fires on every edit; `change` fires when the value is committed." },
            { front: "Stop a form's default submit?", back: "`event.preventDefault()` inside the submit handler." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "`addEventListener(\"click\", greet())` registers greet to run on click.",
              answer: false,
              explain: "The parentheses call greet immediately; pass `greet` without them.",
            },
            {
              kind: "mcq",
              q: "Which event fires on every keystroke in a text box?",
              options: ["`change`", "`input`", "`submit`", "`load`"],
              answer: 1,
              explain: "`input` fires whenever the value changes.",
            },
            {
              kind: "fill",
              q: "Inside a handler, the element that triggered the event is `event.___`.",
              answer: ["target"],
              explain: "`event.target` points at that element.",
            },
          ],
          challenge: {
            title: "Click counter",
            prompt:
              "Make the counter work.\n\n1. Clicking `#add` increases the number shown in `#count` by 1.\n2. Clicking `#reset` sets it back to `0`.",
            lang: "html",
            starter: `<p>Count: <span id="count">0</span></p>
<button id="add">+1</button>
<button id="reset">Reset</button>

<script>
  // add your event listeners here
</script>`,
            tests: [
              { label: "Clicking +1 increases the count", check: "(() => { const b = document.querySelector('#add'); const c = document.querySelector('#count'); if (!b || !c) return false; const before = parseInt(c.textContent, 10) || 0; b.click(); return parseInt(c.textContent, 10) === before + 1; })()" },
              { label: "Clicking twice adds two", check: "(() => { const b = document.querySelector('#add'); const c = document.querySelector('#count'); const before = parseInt(c.textContent, 10) || 0; b.click(); b.click(); return parseInt(c.textContent, 10) === before + 2; })()" },
              { label: "Reset sets the count to 0", check: "(() => { document.querySelector('#add').click(); document.querySelector('#reset').click(); return document.querySelector('#count').textContent.trim() === '0'; })()" },
              { label: "Counting works again after reset", check: "(() => { document.querySelector('#reset').click(); document.querySelector('#add').click(); return document.querySelector('#count').textContent.trim() === '1'; })()" },
            ],
            solution: `<p>Count: <span id="count">0</span></p>
<button id="add">+1</button>
<button id="reset">Reset</button>

<script>
  const countEl = document.querySelector("#count");
  let count = 0;

  document.querySelector("#add").addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });

  document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
  });
</script>`,
            hints: [
              "Keep a `let count = 0` variable and update `textContent` after changing it.",
              "You need two listeners — one per button.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "async",
      title: "Asynchronous JavaScript",
      icon: "⏳",
      description: "Timers, promises, async/await and fetching data without freezing the page.",
      lessons: [
        {
          slug: "callbacks-promises",
          title: "Callbacks & Promises",
          summary: "Why code doesn't always run top to bottom, setTimeout, and the Promise object.",
          minutes: 16,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Ordering food at a counter: you don't stand frozen until it's cooked — you get a buzzer and do other things. JavaScript works the same way with slow tasks like timers and network requests.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Predict the order before running!",
              code: `console.log("1. Order placed");

setTimeout(() => {
  console.log("3. Food ready (after 1 second)");
}, 1000);

console.log("2. Chatting with friends");`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "The event loop",
              md: "JavaScript runs one thing at a time. `setTimeout` hands the callback to the browser and moves on; when the timer finishes, the callback queues up and runs once the current code is done — even with a delay of `0`.",
            },
            {
              type: "heading",
              text: "Promises",
            },
            {
              type: "text",
              md: "A **Promise** is an object representing a future result. It's *pending*, then either *fulfilled* (with a value) or *rejected* (with an error).",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.ceil(Math.random() * 6);
      if (n === 1) reject(new Error("Rolled a 1 — you lose!"));
      else resolve(n);
    }, 500);
  });
}

rollDice()
  .then(n => console.log("Rolled", n))
  .catch(err => console.log("Oops:", err.message))
  .finally(() => console.log("Turn over"));`,
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Run several promises at once.",
              code: `const wait = (ms, value) =>
  new Promise(resolve => setTimeout(() => resolve(value), ms));

Promise.all([wait(300, "🍕"), wait(100, "🥤"), wait(200, "🍟")])
  .then(order => console.log("All ready:", order.join(" ")));`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Callback hell",
              md: "Before promises, async steps were nested callbacks inside callbacks — a sideways pyramid that's hard to read. Promises (and async/await, next lesson) flatten it.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "order",
                  q: "Put the logs in the order they appear.",
                  items: ["`console.log(\"A\")`", "`console.log(\"C\")`", "`setTimeout(() => console.log(\"B\"), 0)` callback"],
                  explain: "The timeout callback waits until the synchronous code (A, then C) has finished.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Three states of a Promise?", back: "Pending, fulfilled, rejected." },
            { front: "Handle success and failure?", back: "`.then(value => ...)` and `.catch(error => ...)`." },
            { front: "Does `setTimeout(fn, 0)` run fn immediately?", back: "No — after the current synchronous code finishes." },
            { front: "What does `Promise.all` do?", back: "Waits for all promises and gives an array of results (rejects if any fail)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Inside `new Promise((resolve, reject) => ...)`, how do you signal success?",
              options: ["`return value`", "`resolve(value)`", "`then(value)`", "`success(value)`"],
              answer: 1,
              explain: "Calling `resolve` fulfils the promise.",
            },
            {
              kind: "truefalse",
              q: "`.finally()` runs whether the promise was fulfilled or rejected.",
              answer: true,
              explain: "It's for clean-up that must always happen.",
            },
            {
              kind: "mcq",
              q: "`Promise.all([wait(300,'a'), wait(100,'b')])` resolves with…",
              options: ["`['b', 'a']`", "`['a', 'b']`", "`'b'`", "`'a'`"],
              answer: 1,
              explain: "Results keep the input order, regardless of finishing order.",
            },
          ],
        },
        {
          slug: "async-await-fetch",
          title: "async/await & fetch",
          summary: "Write async code that reads like sync code, handle errors, and load data from APIs.",
          minutes: 18,
          xp: 55,
          blocks: [
            {
              type: "text",
              md: "`async`/`await` is syntax sugar over promises. It lets you write asynchronous steps top-to-bottom, like a recipe.",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `const wait = (ms) => new Promise(r => setTimeout(r, ms));

async function makeTea() {
  console.log("Boiling water…");
  await wait(500);
  console.log("Steeping…");
  await wait(500);
  return "🍵 Tea is ready";
}

makeTea().then(msg => console.log(msg));
console.log("(I can do other things meanwhile)");`,
            },
            {
              type: "list",
              items: [
                "`async` before a function makes it **always return a Promise**.",
                "`await` pauses *that function* until the promise settles — the rest of the page keeps running.",
                "`await` can only be used inside an `async` function (or at the top level of modules).",
              ],
            },
            {
              type: "heading",
              text: "Errors with try/catch",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              code: `function riskyLoad() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Server unreachable")), 300));
}

async function main() {
  try {
    const data = await riskyLoad();
    console.log(data);
  } catch (err) {
    console.log("Handled:", err.message);
  } finally {
    console.log("Hide loading spinner");
  }
}
main();`,
            },
            {
              type: "heading",
              text: "fetch: talking to servers",
            },
            {
              type: "code",
              lang: "javascript",
              runnable: true,
              caption: "Needs internet. Swap the number for a different post.",
              code: `async function loadPost(id) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const post = await res.json();    // parse the JSON body
    console.log(post.title);
  } catch (err) {
    console.log("Could not load:", err.message);
  }
}
loadPost(1);`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "fetch doesn't reject on 404",
              md: "`fetch` only rejects on network failure. A 404 or 500 still resolves — check `res.ok` (true for status 200–299) yourself.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Parallel, not sequential",
              md: "Two independent requests? `await Promise.all([fetch(a), fetch(b)])` runs them at the same time instead of one after the other.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does an `async` function always return?",
                  options: ["Whatever you return, unchanged", "A Promise", "undefined", "A callback"],
                  answer: 1,
                  explain: "Return values are wrapped in a resolved Promise; thrown errors become rejections.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "What does `await` do?", back: "Pauses the async function until the promise settles, then gives its value." },
            { front: "How do you catch errors with await?", back: "Wrap it in `try { ... } catch (err) { ... }`." },
            { front: "Turn a fetch response into an object?", back: "`const data = await res.json();`" },
            { front: "What does `res.ok` mean?", back: "The HTTP status was 200–299." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "`await` freezes the whole browser tab until the promise resolves.",
              answer: false,
              explain: "Only the async function pauses; everything else keeps running.",
            },
            {
              kind: "mcq",
              q: "`fetch` gets a 404 response. What happens?",
              options: ["The promise rejects", "It resolves; `res.ok` is false", "It retries automatically", "It returns null"],
              answer: 1,
              explain: "HTTP errors still resolve — check `res.ok`.",
            },
            {
              kind: "fill",
              q: "To use `await` inside a function, the function must be marked `___`.",
              answer: ["async"],
              explain: "`async function f() { await ... }`",
            },
            {
              kind: "multi",
              q: "Which are true about `async function f() { return 5; }`?",
              options: ["`f()` returns a Promise", "`await f()` gives 5", "`f()` returns 5 directly", "`f().then(v => ...)` receives 5"],
              answers: [0, 1, 3],
              explain: "The return value is wrapped in a promise.",
            },
          ],
          challenge: {
            title: "Promise toolkit",
            prompt:
              "1. Write `wait(ms, value)` that returns a **Promise** resolving to `value` after `ms` milliseconds (use `setTimeout`).\n2. Write an **async** function `getDouble(n)` that awaits `wait(10, n)` and returns the result times 2.",
            lang: "javascript",
            starter: `function wait(ms, value) {
  // return a new Promise...
}

async function getDouble(n) {

}
`,
            tests: [
              { label: "wait returns a Promise", check: "typeof wait === 'function' && !!wait(1, 'x') && typeof wait(1, 'x').then === 'function'" },
              { label: "getDouble is an async function", check: "typeof getDouble === 'function' && getDouble.constructor.name === 'AsyncFunction'" },
              { label: "getDouble returns a Promise", check: "!!getDouble(2) && typeof getDouble(2).then === 'function'" },
              { label: "wait uses setTimeout and getDouble uses await", check: "wait.toString().includes('setTimeout') && getDouble.toString().includes('await')" },
            ],
            solution: `function wait(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

async function getDouble(n) {
  const value = await wait(10, n);
  return value * 2;
}

getDouble(21).then(result => console.log(result)); // 42`,
            hints: [
              "`new Promise(resolve => setTimeout(() => resolve(value), ms))`",
              "Put the `async` keyword before `function getDouble`.",
            ],
          },
        },
      ],
    },
  ],
};
