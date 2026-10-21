import type { CourseResources } from "./types";

export const javascriptResources: CourseResources = {
  course: "javascript",
  caseStudies: [
    {
      slug: "cart-total-bug",
      title: "The shopping cart that charged ₹1,0050",
      summary: "Type coercion and floating-point maths created baffling totals in a checkout. Careful types and integer paise fixed it.",
      units: ["basics", "arrays-objects"],
      minutes: 13,
      scenario: `A small online stationery shop built its cart in plain JavaScript. Quantities came from \`<input>\` fields and prices from a JSON file. Customers reported strange totals: one saw "₹1,0050" for two items costing ₹100 and ₹50, and others saw totals like ₹0.30000000000000004 on a discount line.

The developer's original code looked like this:

\`let total = 0;\`
\`for (const item of cart) total = total + item.price * qtyInput.value + shipping;\`

where \`shipping\` was read from a data attribute (a string) and discounts were computed as decimal fractions of rupees.`,
      data: {
        caption: "Reproducing the bugs in the console",
        headers: ["Expression", "Result", "Expected"],
        rows: [
          ["\"100\" + 50", "\"10050\"", "150"],
          ["\"100\" * 2", "200", "200"],
          ["0.1 + 0.2", "0.30000000000000004", "0.3"],
          ["[\"10\", \"9\", \"100\"].sort()", "[\"10\", \"100\", \"9\"]", "[\"9\", \"10\", \"100\"]"],
        ],
      },
      questions: [
        "Why does `\"100\" + 50` produce a string while `\"100\" * 2` produces a number?",
        "Why can't `0.1 + 0.2` be represented exactly, and why is this especially risky for money?",
        "Rewrite the total calculation using `reduce`, explicit `Number()` conversion and integer paise.",
        "Explain the `.sort()` result and fix it.",
        "Which tool or habit would have caught these bugs earlier?",
      ],
      outcome: `The \`+\` operator concatenates if either operand is a string, while \`*\` always converts to numbers. Input values and data attributes are **always strings**, so they must be converted with \`Number()\` (and checked with \`Number.isFinite\`).

Floating-point numbers are stored in binary, where 0.1 has no exact representation, so tiny errors appear. The shop stored all prices as **integer paise** and formatted only at display time:

\`const totalPaise = cart.reduce((sum, item) => sum + item.pricePaise * item.qty, 0) + shippingPaise;\`
\`const label = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(totalPaise / 100);\`

\`sort()\` compares items as strings by default; \`arr.sort((a, b) => a - b)\` sorts numerically. Unit tests for the cart and strict equality (\`===\`) became team rules.`,
      takeaways: [
        "Form and DOM values are strings — convert explicitly.",
        "Represent money in integer minor units (paise, cents).",
        "Know which operators coerce types.",
        "Default `sort()` is lexicographic; pass a comparator for numbers.",
      ],
    },
    {
      slug: "weather-widget-race",
      title: "The weather widget that showed the wrong city",
      summary: "Fast typing in a search box caused out-of-order network responses. Async/await, debouncing and AbortController tamed it.",
      units: ["async", "dom-events"],
      minutes: 16,
      scenario: `A student built a weather widget: as the user types a city name, it calls a weather API and shows the forecast. Each keystroke triggered a \`fetch\`. In testing on fast Wi-Fi it worked. At a demo on a slow mobile connection, someone typed "Pune" and the widget showed the weather for "Pu" — a different place — because the "Pu" request finished *after* the "Pune" request.

The API also had a limit of 60 requests per minute, and the demo hit it within seconds, so later searches failed with a 429 error that the widget didn't handle.`,
      data: {
        caption: "Requests for typing \"Pune\" on a slow connection",
        headers: ["Request", "Sent at (ms)", "Response at (ms)"],
        rows: [
          ["P", "0", "1,900"],
          ["Pu", "120", "2,600"],
          ["Pun", "240", "1,400"],
          ["Pune", "360", "1,750"],
        ],
      },
      questions: [
        "From the table, in what order do the responses arrive, and which one would be displayed last?",
        "Explain why the order of responses isn't guaranteed even though requests were sent in order.",
        "How does debouncing the input reduce requests? Choose a delay and justify it.",
        "Show how `AbortController` or a request-id check ensures only the latest result is displayed.",
        "Why must `fetch` code check `response.ok`, and how should the UI show errors?",
      ],
      outcome: `Responses arrive Pun (1,400), Pune (1,750), P (1,900), Pu (2,600) — so "Pu" overwrites the correct "Pune" result. Each request travels independently; server load and network conditions vary, so promises resolve in arbitrary order.

The fix combined three ideas: a ~300 ms **debounce** so a request fires only when typing pauses; an **AbortController** that cancels the previous request before starting a new one; and a check of \`response.ok\` with a friendly error message and retry hint.

\`controller?.abort(); controller = new AbortController();\`
\`const res = await fetch(url, { signal: controller.signal });\`
\`if (!res.ok) throw new Error(\\\`HTTP \${res.status}\\\`);\`

Requests per search fell from ~5 to 1, and the widget always showed the latest city.`,
      takeaways: [
        "Async operations can complete in any order — design for it.",
        "Debounce high-frequency events such as typing and resizing.",
        "Cancel stale requests with AbortController.",
        "`fetch` only rejects on network failure; check `response.ok` for HTTP errors.",
      ],
    },
  ],
  readings: {
    basics: [
      { title: "JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", source: "MDN Web Docs", type: "docs", level: "intro", note: "The canonical guide to the language." },
      { title: "The Modern JavaScript Tutorial", url: "https://javascript.info/", source: "javascript.info", type: "book", level: "intro", note: "Thorough, free and up to date." },
      { title: "Equality comparisons and sameness", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness", source: "MDN Web Docs", type: "docs", level: "intermediate", note: "Why `===` is usually what you want." },
    ],
    "loops-functions": [
      { title: "Loops and iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration", source: "MDN Web Docs", type: "docs", level: "intro", note: "for, while, for...of and for...in." },
      { title: "Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions", source: "MDN Web Docs", type: "docs", level: "intro", note: "Declarations, expressions, arrow functions and closures." },
      { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", source: "Marijn Haverbeke", type: "book", level: "intermediate", note: "Free online book; chapters 2–3 on control flow and functions." },
    ],
    "arrays-objects": [
      { title: "Array", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", source: "MDN Web Docs", type: "docs", level: "intro", note: "Reference for map, filter, reduce, sort and more." },
      { title: "Working with objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects", source: "MDN Web Docs", type: "docs", level: "intro", note: "Properties, methods and destructuring." },
      { title: "Number.EPSILON and floating point", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number", source: "MDN Web Docs", type: "docs", level: "intermediate", note: "How JavaScript numbers work." },
    ],
    "dom-events": [
      { title: "Introduction to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction", source: "MDN Web Docs", type: "docs", level: "intro", note: "How JavaScript sees the page." },
      { title: "Introduction to events", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events", source: "MDN Web Docs", type: "docs", level: "intro", note: "Listeners, the event object and bubbling." },
      { title: "Browser: Document, Events, Interfaces", url: "https://javascript.info/ui", source: "javascript.info", type: "book", level: "intermediate", note: "Event delegation and default actions in depth." },
    ],
    async: [
      { title: "Asynchronous JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous", source: "MDN Web Docs", type: "docs", level: "intro", note: "Callbacks, promises and async/await." },
      { title: "Using the Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch", source: "MDN Web Docs", type: "docs", level: "intro", note: "Requests, responses and error handling." },
      { title: "AbortController", url: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController", source: "MDN Web Docs", type: "docs", level: "intermediate", note: "Cancel in-flight requests." },
      { title: "Promises, async/await", url: "https://javascript.info/async", source: "javascript.info", type: "book", level: "intermediate", note: "The event loop and microtasks explained." },
    ],
  },
  competencies: [
    { id: "types", name: "Values, types & operators", description: "Predict how values and operators behave.", lessons: ["javascript/basics/variables-types", "javascript/basics/operators-conditionals"] },
    { id: "functions", name: "Control flow & functions", description: "Write loops and reusable functions with clear scope.", lessons: ["javascript/loops-functions/loops", "javascript/loops-functions/functions", "javascript/loops-functions/arrow-functions-scope"] },
    { id: "data", name: "Arrays & objects", description: "Model and transform data with arrays and objects.", lessons: ["javascript/arrays-objects/arrays", "javascript/arrays-objects/objects", "javascript/arrays-objects/map-filter-reduce"] },
    { id: "dom", name: "DOM & events", description: "Read and update the page in response to users.", lessons: ["javascript/dom-events/dom-basics", "javascript/dom-events/events"] },
    { id: "async", name: "Asynchronous code", description: "Use promises, async/await and fetch safely.", lessons: ["javascript/async/callbacks-promises", "javascript/async/async-await-fetch"] },
  ],
};
