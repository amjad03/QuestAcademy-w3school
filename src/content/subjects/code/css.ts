import type { Subject } from "@/content/types";

export const css: Subject = {
  slug: "css",
  title: "CSS",
  world: "code",
  icon: "🎨",
  colors: ["#3b82f6", "#8b5cf6"],
  tagline: "Make it beautiful — colours, layout, responsiveness and motion.",
  description:
    "Cascading Style Sheets turn plain HTML into polished, responsive designs. Master selectors and the cascade, colours and typography, the box model, flexbox, grid, media queries and animation — tweaking live examples as you go and passing auto-graded styling challenges.",
  levels: ["Beginner", "Intermediate"],
  stages: ["middle", "secondary", "ug", "pg", "lifelong"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "selectors-cascade",
      title: "Selectors & the Cascade",
      icon: "🎯",
      description: "How CSS is written, how it picks elements, and who wins when rules disagree.",
      lessons: [
        {
          slug: "how-css-works",
          title: "How CSS Works",
          summary: "Rules, properties and values — and the three ways to attach CSS to a page.",
          minutes: 10,
          xp: 20,
          blocks: [
            {
              type: "text",
              md: "Same HTML, totally different looks: that's the magic of CSS. HTML says *what* things are; CSS says *how they look*.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Change the colour value and press Run.",
              code: `<style>
  h1 {
    color: tomato;
    font-family: Georgia, serif;
  }
  p {
    color: #555;
    font-size: 18px;
  }
</style>

<h1>Styled heading</h1>
<p>A styled paragraph.</p>`,
            },
            {
              type: "text",
              md: "Each **rule** has a **selector** (`h1`) and a **declaration block** in braces. Each declaration is a `property: value;` pair.",
            },
            {
              type: "formula",
              tex: "\\text{selector} \\;\\{\\; \\text{property}: \\text{value}; \\;\\}",
              caption: "Anatomy of a CSS rule",
            },
            {
              type: "heading",
              text: "Three ways to add CSS",
            },
            {
              type: "table",
              headers: ["Method", "Example", "When"],
              rows: [
                ["External file", "`<link rel=\"stylesheet\" href=\"styles.css\">`", "Almost always — one file styles the whole site"],
                ["`<style>` element", "`<style> p { color: red; } </style>`", "Quick demos, single pages"],
                ["Inline `style`", "`<p style=\"color: red\">`", "Rarely — hard to maintain, very high priority"],
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  p { color: navy; }
</style>
<p>Navy from the style block.</p>
<p style="color: crimson;">Inline style beats the style block.</p>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Mind your semicolons",
              md: "A missing `;` silently breaks the *next* declaration. If a style mysteriously doesn't apply, check the line above it first.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In `p { color: red; }`, what is `color`?",
                  options: ["The selector", "A property", "A value", "A tag"],
                  answer: 1,
                  explain: "`color` is the property and `red` is its value.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "A rule = selector + `{ property: value; }`.",
                "Prefer external stylesheets linked in `<head>`.",
                "Comments in CSS look like `/* ... */`.",
              ],
            },
          ],
          flashcards: [
            { front: "What does CSS stand for?", back: "Cascading Style Sheets." },
            { front: "Parts of a CSS rule?", back: "Selector, then a declaration block of `property: value;` pairs." },
            { front: "How do you link an external stylesheet?", back: "`<link rel=\"stylesheet\" href=\"styles.css\">` in the head." },
            { front: "CSS comment syntax?", back: "`/* comment */`" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which is the best default way to style a multi-page site?",
              options: ["Inline styles", "An external stylesheet", "A `<style>` in every page", "`<font>` tags"],
              answer: 1,
              explain: "One external file is reusable and cached by the browser.",
            },
            {
              kind: "fill",
              q: "Each CSS declaration ends with a `___`.",
              answer: [";", "semicolon"],
              explain: "Semicolons separate declarations.",
            },
            {
              kind: "truefalse",
              q: "`// comment` is valid CSS comment syntax.",
              answer: false,
              explain: "CSS only supports `/* ... */` comments.",
            },
          ],
        },
        {
          slug: "selectors",
          title: "Selectors",
          summary: "Target elements by type, class, id, attribute, relationship and state.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Selectors are CSS's search engine: they find exactly the elements you want to style. Learn a handful and you can target almost anything.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  p        { color: gray; }          /* type */
  .hot     { color: orangered; }     /* class */
  #title   { text-decoration: underline; } /* id */
  *        { font-family: sans-serif; }   /* universal */
  h1, h2   { letter-spacing: 1px; }  /* grouping */
</style>

<h1 id="title">Menu</h1>
<p>Plain paragraph</p>
<p class="hot">Spicy paragraph</p>
<h2>Desserts</h2>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Classes are your workhorse",
              md: "An id must be unique per page; a class can be reused anywhere, and one element can have many: `class=\"btn btn-large\"`. Style mostly with classes.",
            },
            {
              type: "heading",
              text: "Combinators: relationships",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .card p      { color: teal; }        /* any p inside .card */
  .card > p    { font-weight: bold; }  /* only direct children */
  h3 + p       { font-style: italic; } /* p right after an h3 */
</style>

<div class="card">
  <h3>Card</h3>
  <p>Direct child, right after h3</p>
  <div><p>Nested deeper</p></div>
</div>`,
            },
            {
              type: "heading",
              text: "Pseudo-classes and attributes",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Hover the links and the list items.",
              code: `<style>
  a:hover              { color: hotpink; }
  li:first-child       { font-weight: bold; }
  li:nth-child(even)   { background: #eef; }
  input[type="email"]  { border: 2px solid green; }
  a[href^="https"]     { text-decoration: none; }
</style>

<a href="https://example.com">Secure link</a>
<ul><li>One</li><li>Two</li><li>Three</li><li>Four</li></ul>
<input type="email" placeholder="email">`,
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Pseudo-elements style a part of an element.",
              code: `<style>
  .note::before { content: "💡 "; }
  p::first-letter { font-size: 2em; color: purple; }
</style>
<p class="note">Pseudo-elements use two colons.</p>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which selector targets elements with `class=\"price\"`?",
                  options: ["`#price`", "`.price`", "`price`", "`*price`"],
                  answer: 1,
                  explain: "A dot selects by class; a hash selects by id.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Class vs id selector?", back: "`.name` (reusable class) vs `#name` (unique id)." },
            { front: "`.a p` vs `.a > p`?", back: "Descendant (any depth) vs direct child only." },
            { front: "What does `li:nth-child(odd)` select?", back: "The 1st, 3rd, 5th… list items." },
            { front: "Pseudo-class vs pseudo-element?", back: "`:hover` = a state; `::before` = a part of an element." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which selects every `<p>` that comes *immediately* after an `<h2>`?",
              options: ["`h2 p`", "`h2 > p`", "`h2 + p`", "`h2 ~ p`"],
              answer: 2,
              explain: "`+` is the adjacent sibling combinator.",
            },
            {
              kind: "multi",
              q: "Which are pseudo-classes?",
              options: ["`:hover`", "`::before`", "`:focus`", "`:first-child`"],
              answers: [0, 2, 3],
              explain: "`::before` is a pseudo-element (two colons).",
            },
            {
              kind: "fill",
              q: "To select all links whose href starts with https, write `a[href___\"https\"]`.",
              answer: ["^="],
              explain: "`^=` means \"starts with\".",
            },
            {
              kind: "truefalse",
              q: "One element can have several classes.",
              answer: true,
              explain: "Separate them with spaces: `class=\"card featured\"`.",
            },
          ],
          challenge: {
            title: "Style the menu",
            prompt:
              "Using only CSS:\n\n1. Make the item with class `special` **red** (`#ff0000` or `red`).\n2. Make the item with id `chef` **bold**.\n3. Make every paragraph *italic*.\n\nOther list items must stay their normal colour.",
            lang: "css",
            setup: `<h1>Menu</h1>
<ul>
  <li class="special">Pizza</li>
  <li>Pasta</li>
  <li id="chef">Chef's soup</li>
</ul>
<p>All dishes are vegetarian.</p>`,
            starter: `/* write your rules here */
`,
            tests: [
              { label: ".special is red", check: "getComputedStyle(document.querySelector('.special')).color === 'rgb(255, 0, 0)'" },
              { label: "#chef is bold", check: "parseInt(getComputedStyle(document.querySelector('#chef')).fontWeight, 10) >= 700" },
              { label: "Paragraphs are italic", check: "getComputedStyle(document.querySelector('p')).fontStyle === 'italic'" },
              { label: "Pasta is not red", check: "getComputedStyle(document.querySelectorAll('li')[1]).color !== 'rgb(255, 0, 0)'" },
            ],
            solution: `.special { color: red; }
#chef { font-weight: bold; }
p { font-style: italic; }`,
            hints: ["Classes use a dot (`.special`), ids use a hash (`#chef`).", "Bold is `font-weight: bold`; italic is `font-style: italic`."],
          },
        },
        {
          slug: "specificity-cascade",
          title: "Specificity & the Cascade",
          summary: "Why your style isn't applying — and how the browser settles conflicts.",
          minutes: 14,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "\"I wrote `color: blue` — why is it still red?!\" Every web developer has shouted this. The answer is the **cascade**: a fixed set of tie-break rules.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Importance** — `!important` declarations beat normal ones.",
                "**Specificity** — the more specific selector wins.",
                "**Source order** — if still tied, the rule written *last* wins.",
              ],
            },
            {
              type: "table",
              headers: ["Selector", "Score (id, class, type)"],
              rows: [
                ["`p`", "(0, 0, 1)"],
                ["`.intro`", "(0, 1, 0)"],
                ["`p.intro`", "(0, 1, 1)"],
                ["`#hero`", "(1, 0, 0)"],
                ["`#hero .intro p`", "(1, 1, 1)"],
                ["inline `style=\"\"`", "beats all selectors"],
              ],
            },
            {
              type: "text",
              md: "Compare scores column by column from the left — like comparing version numbers. One id beats any number of classes.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Predict the colour, then run. Try deleting rules one by one.",
              code: `<style>
  #lead   { color: green; }
  .intro  { color: red; }
  p       { color: blue; }
</style>
<p id="lead" class="intro">What colour am I?</p>`,
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Equal specificity → last one wins.",
              code: `<style>
  .tag { color: purple; }
  .tag { color: orange; }
</style>
<p class="tag">Orange, because it came last.</p>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Avoid !important",
              md: "`!important` wins the fight but starts an arms race — the only way to beat it is another `!important`. Fix the specificity instead.",
            },
            {
              type: "heading",
              text: "Inheritance",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  body { color: darkslategray; font-family: sans-serif; border: 2px solid red; }
</style>
<p>I inherit colour and font from body, but not the border.</p>`,
            },
            {
              type: "callout",
              tone: "note",
              md: "Text properties (`color`, `font-*`, `line-height`) inherit. Box properties (`border`, `margin`, `padding`, `width`) don't.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which is more specific: `.nav .link` or `#menu`?",
                  options: ["`.nav .link`", "`#menu`", "They're equal", "Depends on order"],
                  answer: 1,
                  explain: "(1,0,0) beats (0,2,0) — one id outranks any number of classes.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Cascade order of tie-breaks?", back: "Importance → specificity → source order." },
            { front: "Specificity of `.btn.primary`?", back: "(0, 2, 0)" },
            { front: "Do borders inherit?", back: "No. Text properties like colour and font do." },
            { front: "Why avoid `!important`?", back: "It can only be overridden by another `!important`, creating unmaintainable CSS." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "`#lead` (green), `.intro` (red), `p` (blue) all target the same paragraph. Colour?",
              options: ["Green", "Red", "Blue", "Black"],
              answer: 0,
              explain: "The id selector has the highest specificity.",
            },
            {
              kind: "truefalse",
              q: "When two selectors have identical specificity, the one written later wins.",
              answer: true,
              explain: "Source order is the final tie-breaker.",
            },
            {
              kind: "order",
              q: "Order from LEAST to MOST specific.",
              items: ["`li`", "`.item`", "`ul .item`", "`#list`"],
              explain: "(0,0,1) < (0,1,0) < (0,1,1) < (1,0,0).",
            },
            {
              kind: "multi",
              q: "Which properties are inherited by default?",
              options: ["`color`", "`padding`", "`font-family`", "`border`"],
              answers: [0, 2],
              explain: "Text-related properties inherit; box properties don't.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "colors-typography",
      title: "Colours, Units & Typography",
      icon: "🖌️",
      description: "Colour formats, sizing units and readable type.",
      lessons: [
        {
          slug: "colors",
          title: "Colours & Backgrounds",
          summary: "Named, hex, rgb and hsl colours, transparency and gradients.",
          minutes: 12,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Screens mix **red, green and blue** light. Every CSS colour format is just a different way of writing those three amounts.",
            },
            { type: "widget", widget: "color-mix", caption: "Play with mixing light colours." },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .a { background: tomato; }                 /* named */
  .b { background: #1e90ff; }                /* hex */
  .c { background: rgb(46, 204, 113); }      /* rgb 0–255 */
  .d { background: hsl(45, 100%, 50%); }     /* hue, saturation, lightness */
  .e { background: rgb(0 0 0 / 40%); }       /* with transparency */
  div { padding: 12px; color: white; margin: 4px; font-family: sans-serif; }
</style>
<div class="a">named</div><div class="b">hex</div><div class="c">rgb</div>
<div class="d">hsl</div><div class="e">40% black</div>`,
            },
            {
              type: "table",
              headers: ["Format", "Red example", "Notes"],
              rows: [
                ["Named", "`red`", "~140 names; quick but limited"],
                ["Hex", "`#ff0000` or `#f00`", "Two hex digits per channel (00–ff)"],
                ["RGB", "`rgb(255, 0, 0)`", "Each channel 0–255"],
                ["HSL", "`hsl(0, 100%, 50%)`", "Easy to make lighter/darker shades"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Think in HSL",
              md: "Need a darker version of your brand colour? With HSL, just lower the lightness: `hsl(210, 80%, 50%)` → `hsl(210, 80%, 35%)`.",
            },
            {
              type: "heading",
              text: "Gradients and images",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .hero {
    height: 120px;
    background: linear-gradient(135deg, #f97316, #8b5cf6);
    border-radius: 12px;
  }
  .ring {
    height: 120px; width: 120px; margin-top: 8px;
    background: radial-gradient(circle, gold, crimson);
    border-radius: 50%;
  }
</style>
<div class="hero"></div>
<div class="ring"></div>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Contrast matters",
              md: "Light-grey text on white looks sleek and is unreadable for many people. Aim for a contrast ratio of at least **4.5 : 1** for normal text.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is `#00ff00`?",
                  options: ["Red", "Green", "Blue", "Black"],
                  answer: 1,
                  explain: "The middle pair is green, at its maximum (ff).",
                },
              ],
            },
          ],
          flashcards: [
            { front: "`#fff` is…", back: "White (all channels at maximum)." },
            { front: "What does the H in HSL stand for?", back: "Hue — the angle on the colour wheel (0–360)." },
            { front: "How do you make a colour 50% transparent?", back: "Add alpha: `rgb(0 0 0 / 50%)` or `rgba(0, 0, 0, 0.5)`." },
            { front: "Minimum contrast for normal text (WCAG AA)?", back: "4.5 : 1" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "In `rgb()`, what is the maximum value of one channel?",
              answer: 255,
              explain: "Each channel ranges from 0 to 255.",
            },
            {
              kind: "mcq",
              q: "Which is the same colour as `rgb(0, 0, 0)`?",
              options: ["`#fff`", "`#000`", "`#f00`", "`#888`"],
              answer: 1,
              explain: "All channels zero = black = `#000`.",
            },
            {
              kind: "truefalse",
              q: "`linear-gradient()` is used with the `background` (or `background-image`) property.",
              answer: true,
              explain: "Gradients are images, so they go in background properties.",
            },
          ],
        },
        {
          slug: "units-typography",
          title: "Units & Typography",
          summary: "px, %, em, rem, vw/vh — and fonts, sizes and spacing that read beautifully.",
          minutes: 15,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "About 95% of web design is typography. Get the text right and a page instantly feels professional.",
            },
            {
              type: "table",
              headers: ["Unit", "Relative to", "Typical use"],
              rows: [
                ["`px`", "A fixed CSS pixel", "Borders, small details"],
                ["`%`", "The parent's size", "Fluid widths"],
                ["`em`", "The element's own font size", "Padding that scales with text"],
                ["`rem`", "The root (`html`) font size — usually 16px", "Font sizes, spacing"],
                ["`vw` / `vh`", "1% of viewport width / height", "Full-screen sections"],
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .small { font-size: 0.875rem; }  /* 14px */
  .base  { font-size: 1rem; }      /* 16px */
  .big   { font-size: 2rem; }      /* 32px */
  .wide  { width: 50%; background: #def; }
</style>
<p class="small">0.875rem</p>
<p class="base">1rem</p>
<p class="big">2rem</p>
<div class="wide">Half my parent's width</div>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Why rem for fonts?",
              md: "Users who set a bigger default font size in their browser get bigger text everywhere. `px` font sizes ignore that preference; `rem` respects it.",
            },
            {
              type: "heading",
              text: "Font properties",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  article {
    font-family: "Segoe UI", Roboto, Arial, sans-serif;
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 60ch;
    color: #222;
  }
  h2 { font-weight: 800; letter-spacing: -0.5px; text-transform: uppercase; }
  .center { text-align: center; }
</style>
<article>
  <h2>Readable text</h2>
  <p>A line height around 1.5 and a width near 60 characters make long text comfortable to read.</p>
  <p class="center">Centred text</p>
</article>`,
            },
            {
              type: "list",
              items: [
                "`font-family` — list fallbacks, ending with a generic family (`serif`, `sans-serif`, `monospace`).",
                "`line-height` — use a unitless number like `1.5` so it scales with the font.",
                "`font-weight` — `400` normal, `700` bold.",
                "`text-align`, `text-decoration`, `text-transform`, `letter-spacing`.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "em compounds",
              md: "`em` multiplies through nesting: a `1.2em` list inside a `1.2em` list is 1.44× the size. `rem` always refers to the root, so it doesn't snowball.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "The root font size is 16px. How many pixels is `1.5rem`?",
                  answer: 24,
                  unit: "px",
                  explain: "1.5 × 16 = 24.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "`em` vs `rem`?", back: "`em` = relative to the element's font size (compounds). `rem` = relative to the root font size." },
            { front: "What does `1vw` mean?", back: "1% of the viewport's width." },
            { front: "Why end a font stack with `sans-serif`?", back: "It's a generic fallback that always exists." },
            { front: "Comfortable line length?", back: "Roughly 45–75 characters — `max-width: 60ch` is a good start." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which unit best respects a user's browser font-size setting?",
              options: ["`px`", "`rem`", "`cm`", "`pt`"],
              answer: 1,
              explain: "`rem` scales with the root font size the user chose.",
            },
            {
              kind: "numeric",
              q: "A parent is 800px wide. How wide is a child with `width: 25%`?",
              answer: 200,
              unit: "px",
              explain: "25% of 800 = 200.",
            },
            {
              kind: "fill",
              q: "To make text bold, set `font-weight: ___;` (number).",
              answer: ["700", "bold"],
              explain: "700 is the numeric weight for bold.",
            },
            {
              kind: "truefalse",
              q: "A unitless `line-height: 1.5` scales automatically when font size changes.",
              answer: true,
              explain: "It's a multiplier of the element's own font size.",
            },
          ],
          challenge: {
            title: "Dark card",
            prompt:
              "Style the card:\n\n1. `.card` background colour `#222222`.\n2. Paragraph text **white**.\n3. The `h2` font size **2rem** (32px).\n4. The `h2` **centred**.",
            lang: "css",
            setup: `<div class="card">
  <h2>Night mode</h2>
  <p>Easy on the eyes after sunset.</p>
</div>`,
            starter: `.card {

}
`,
            tests: [
              { label: ".card background is #222222", check: "getComputedStyle(document.querySelector('.card')).backgroundColor === 'rgb(34, 34, 34)'" },
              { label: "Paragraph text is white", check: "getComputedStyle(document.querySelector('.card p')).color === 'rgb(255, 255, 255)'" },
              { label: "h2 is 32px", check: "getComputedStyle(document.querySelector('.card h2')).fontSize === '32px'" },
              { label: "h2 is centred", check: "getComputedStyle(document.querySelector('.card h2')).textAlign === 'center'" },
            ],
            solution: `.card {
  background-color: #222222;
  padding: 16px;
}
.card p { color: white; }
.card h2 {
  font-size: 2rem;
  text-align: center;
  color: white;
}`,
            hints: ["`background-color` sets the fill; `color` sets the text colour.", "`text-align: center` centres inline content like text."],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "box-model",
      title: "The Box Model",
      icon: "📦",
      description: "Every element is a box: content, padding, border, margin — plus display and positioning.",
      lessons: [
        {
          slug: "box-model-basics",
          title: "Content, Padding, Border, Margin",
          summary: "The four layers of every box and the box-sizing switch that makes widths sane.",
          minutes: 15,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Open dev tools, hover any element, and you'll see coloured layers. That's the **box model** — the single most important idea in CSS layout.",
            },
            { type: "illustration", emoji: "📦", caption: "margin → border → padding → content, from outside in." },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .box {
    width: 200px;
    padding: 20px;          /* space inside the border */
    border: 5px solid navy; /* the frame */
    margin: 30px;           /* space outside the border */
    background: lightblue;  /* fills content + padding */
  }
</style>
<div class="box">Inspect me!</div>`,
            },
            {
              type: "text",
              md: "By default (`box-sizing: content-box`) `width` sets **only the content**. Padding and border are added on top:",
            },
            {
              type: "formula",
              tex: "200 + 2(20) + 2(5) = 250\\text{ px wide}",
              caption: "content + left/right padding + left/right border",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "With border-box, width means the visible box width.",
              code: `<style>
  * { box-sizing: border-box; }
  .box {
    width: 200px;
    padding: 20px;
    border: 5px solid navy;
    background: lightgreen;
  }
</style>
<div class="box">Exactly 200px wide</div>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Put this at the top of every stylesheet",
              md: "`*, *::before, *::after { box-sizing: border-box; }` — nearly every modern project does, because it makes widths predictable.",
            },
            {
              type: "heading",
              text: "Shorthand directions",
            },
            {
              type: "table",
              headers: ["Shorthand", "Means"],
              rows: [
                ["`margin: 10px`", "All four sides"],
                ["`margin: 10px 20px`", "Top/bottom 10, left/right 20"],
                ["`margin: 10px 20px 30px`", "Top 10, left/right 20, bottom 30"],
                ["`margin: 1px 2px 3px 4px`", "Top, right, bottom, left (clockwise — think *TRouBLe*)"],
                ["`margin: 0 auto`", "Centres a block that has a width"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Margin collapse",
              md: "Vertical margins between blocks don't add up — the larger one wins. Two paragraphs with `margin: 20px` sit 20px apart, not 40px.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "content-box, `width: 100px; padding: 10px; border: 2px solid`. Total visible width?",
                  answer: 124,
                  unit: "px",
                  explain: "100 + 2×10 + 2×2 = 124.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Box model layers (inside → out)?", back: "Content, padding, border, margin." },
            { front: "What does `box-sizing: border-box` do?", back: "Makes `width` include padding and border." },
            { front: "Order of a 4-value margin?", back: "Top, right, bottom, left (clockwise)." },
            { front: "How do you centre a fixed-width block?", back: "`margin: 0 auto;`" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which layer is transparent and sits outside the border?",
              options: ["Padding", "Content", "Margin", "Outline"],
              answer: 2,
              explain: "Margin is the space outside the border.",
            },
            {
              kind: "numeric",
              q: "border-box, `width: 300px; padding: 20px; border: 5px`. Total visible width?",
              answer: 300,
              unit: "px",
              explain: "With border-box, width already includes padding and border.",
            },
            {
              kind: "truefalse",
              q: "The background colour shows behind the padding.",
              answer: true,
              explain: "Background covers content and padding (and under the border).",
            },
            {
              kind: "mcq",
              q: "`padding: 5px 10px` gives left padding of…",
              options: ["5px", "10px", "15px", "0"],
              answer: 1,
              explain: "Two values: vertical first, horizontal second.",
            },
          ],
          challenge: {
            title: "Perfect 200px box",
            prompt:
              "Make `.box` exactly **200px** wide on screen including padding and border.\n\n- `padding: 20px`\n- a **4px solid** border (any colour)\n- `box-sizing: border-box`\n- `width: 200px`",
            lang: "css",
            setup: `<div class="box">I am a box</div>`,
            starter: `.box {
  background: lightyellow;
}
`,
            tests: [
              { label: "Visible width is 200px", check: "document.querySelector('.box').offsetWidth === 200" },
              { label: "Padding is 20px", check: "getComputedStyle(document.querySelector('.box')).paddingLeft === '20px'" },
              { label: "Border is 4px", check: "getComputedStyle(document.querySelector('.box')).borderTopWidth === '4px'" },
              { label: "Uses border-box sizing", check: "getComputedStyle(document.querySelector('.box')).boxSizing === 'border-box'" },
            ],
            solution: `.box {
  background: lightyellow;
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 4px solid goldenrod;
}`,
            hints: ["A border needs a style (e.g. `solid`) or it has zero width.", "Without border-box, the box would be 200 + 40 + 8 = 248px."],
          },
        },
        {
          slug: "display-position",
          title: "Display & Position",
          summary: "Block vs inline, hiding things, and moving boxes with relative, absolute, fixed and sticky.",
          minutes: 15,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Why does a `<div>` start on a new line while a `<span>` doesn't? It's their default **display** value.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  span, div { background: #fde68a; margin: 4px; padding: 4px; }
  .ib { display: inline-block; width: 80px; }
</style>
<div>block</div><div>block</div>
<span>inline</span><span>inline</span>
<span class="ib">inline-block</span><span class="ib">inline-block</span>`,
            },
            {
              type: "table",
              headers: ["display", "Behaviour"],
              rows: [
                ["`block`", "New line, full width, accepts width/height"],
                ["`inline`", "Flows in text, ignores width/height"],
                ["`inline-block`", "Flows in text, but accepts width/height"],
                ["`none`", "Removed entirely — takes no space"],
                ["`flex` / `grid`", "Turns the element into a layout container (next topic!)"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              md: "`display: none` removes the box from the layout. `visibility: hidden` hides it but keeps its space.",
            },
            {
              type: "heading",
              text: "Positioning",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "The badge is absolute inside the relative card.",
              code: `<style>
  .card {
    position: relative;
    width: 200px; height: 100px;
    background: #e0e7ff; padding: 10px;
  }
  .badge {
    position: absolute;
    top: -8px; right: -8px;
    background: crimson; color: white;
    padding: 4px 8px; border-radius: 999px;
  }
</style>
<div class="card">Product card <span class="badge">NEW</span></div>`,
            },
            {
              type: "table",
              headers: ["position", "Moves relative to", "Keeps its space?"],
              rows: [
                ["`static` (default)", "Normal flow — `top`/`left` ignored", "Yes"],
                ["`relative`", "Its own normal spot", "Yes"],
                ["`absolute`", "Nearest *positioned* ancestor", "No"],
                ["`fixed`", "The viewport (stays on scroll)", "No"],
                ["`sticky`", "Scrolls normally, then sticks at a threshold", "Yes"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Absolute escaping?",
              md: "If an absolute element flies to the corner of the page, its parent probably isn't positioned. Add `position: relative` to the parent.",
            },
            {
              type: "text",
              md: "Overlapping positioned elements stack by `z-index` — higher numbers sit on top.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which keeps a header visible at the top while you scroll, without leaving its spot until needed?",
                  options: ["`relative`", "`absolute`", "`sticky`", "`static`"],
                  answer: 2,
                  explain: "`position: sticky; top: 0;` scrolls until it hits the top, then sticks.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Default display of `<span>`?", back: "`inline`" },
            { front: "`display: none` vs `visibility: hidden`?", back: "None removes the space; hidden keeps the space." },
            { front: "Absolute elements are positioned relative to…", back: "Their nearest positioned (non-static) ancestor." },
            { front: "What does `z-index` control?", back: "Stacking order of positioned elements." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Setting `width` on an inline element like `<span>` changes its width.",
              answer: false,
              explain: "Inline elements ignore width/height; use inline-block or block.",
            },
            {
              kind: "mcq",
              q: "A chat button should stay in the bottom-right corner even while scrolling. Use…",
              options: ["`position: fixed`", "`position: relative`", "`position: static`", "`float: right`"],
              answer: 0,
              explain: "Fixed positions relative to the viewport.",
            },
            {
              kind: "fill",
              q: "To hide an element and remove its space, use `display: ___;`.",
              answer: ["none"],
              explain: "`display: none` removes it from layout.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "layout",
      title: "Flexbox & Grid",
      icon: "🧩",
      description: "Modern layout: one-dimensional flexbox and two-dimensional grid.",
      lessons: [
        {
          slug: "flexbox",
          title: "Flexbox",
          summary: "Line items up in a row or column, space them out and centre anything.",
          minutes: 18,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "\"How do I centre a div?\" was a running joke for years. Flexbox made the answer three lines long.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Change justify-content to: flex-start, center, flex-end, space-around, space-evenly.",
              code: `<style>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 120px;
    background: #f1f5f9;
  }
  .row div { background: #6366f1; color: white; padding: 12px; }
  .row div:nth-child(2) { padding: 30px 12px; }
</style>
<div class="row"><div>A</div><div>B (tall)</div><div>C</div></div>`,
            },
            {
              type: "table",
              headers: ["Property (on container)", "Controls"],
              rows: [
                ["`display: flex`", "Children become flex items in a row"],
                ["`flex-direction`", "`row` (default) or `column`"],
                ["`justify-content`", "Spacing along the **main** axis"],
                ["`align-items`", "Alignment on the **cross** axis"],
                ["`flex-wrap: wrap`", "Let items flow onto new lines"],
                ["`gap`", "Space between items"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Main vs cross axis",
              md: "In a row, the main axis is horizontal. Switch to `flex-direction: column` and the axes swap — `justify-content` now works vertically.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "The famous perfect centre.",
              code: `<style>
  .stage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    background: #fef3c7;
  }
</style>
<div class="stage"><div>🎯 Perfectly centred</div></div>`,
            },
            {
              type: "heading",
              text: "Item sizing with flex",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .layout { display: flex; gap: 8px; }
  .side { flex: 1; background: #bbf7d0; padding: 8px; }
  .main { flex: 3; background: #bfdbfe; padding: 8px; }
</style>
<div class="layout">
  <aside class="side">flex: 1</aside>
  <main class="main">flex: 3 — three times the share</main>
</div>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In a default flex row, which property moves items horizontally?",
                  options: ["`align-items`", "`justify-content`", "`text-align`", "`vertical-align`"],
                  answer: 1,
                  explain: "`justify-content` works on the main axis, which is horizontal for rows.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Turn on flexbox?", back: "`display: flex` on the parent container." },
            { front: "justify-content vs align-items?", back: "Main axis vs cross axis." },
            { front: "How do you centre something both ways with flex?", back: "`justify-content: center; align-items: center;` on the parent." },
            { front: "What does `flex: 1` do on an item?", back: "Lets it grow to take an equal share of free space." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Flexbox properties like `justify-content` go on the parent (container).",
              answer: true,
              explain: "The container controls how its children are laid out.",
            },
            {
              kind: "mcq",
              q: "With `flex-direction: column`, `justify-content` controls…",
              options: ["Horizontal spacing", "Vertical spacing", "Font size", "Nothing"],
              answer: 1,
              explain: "In a column the main axis is vertical.",
            },
            {
              kind: "fill",
              q: "To let flex items move onto a new line, set `flex-wrap: ___;`.",
              answer: ["wrap"],
              explain: "The default is `nowrap`.",
            },
            {
              kind: "mcq",
              q: "Items have `flex: 1`, `flex: 1`, `flex: 2`. What share of free space does the last get?",
              options: ["1/4", "1/3", "1/2", "2/3"],
              answer: 2,
              explain: "2 out of a total of 4 parts = 1/2.",
            },
          ],
          challenge: {
            title: "Navigation bar",
            prompt:
              "Turn `.bar` into a flex navbar:\n\n1. `display: flex`\n2. Spread the links with `justify-content: space-between`\n3. Vertically centre them with `align-items: center`\n4. A `gap` of **16px**",
            lang: "css",
            setup: `<nav class="bar">
  <a href="#">Home</a>
  <a href="#">Shop</a>
  <a href="#">Contact</a>
</nav>`,
            starter: `.bar {
  height: 60px;
  background: #1e293b;
}
.bar a { color: white; }
`,
            tests: [
              { label: ".bar is a flex container", check: "getComputedStyle(document.querySelector('.bar')).display === 'flex'" },
              { label: "Links are spaced between", check: "getComputedStyle(document.querySelector('.bar')).justifyContent === 'space-between'" },
              { label: "Links are vertically centred", check: "getComputedStyle(document.querySelector('.bar')).alignItems === 'center'" },
              { label: "Gap is 16px", check: "getComputedStyle(document.querySelector('.bar')).columnGap === '16px'" },
            ],
            solution: `.bar {
  height: 60px;
  background: #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.bar a { color: white; }`,
            hints: ["All four properties go on `.bar`, the container.", "`gap: 16px;` sets space between flex items."],
          },
        },
        {
          slug: "grid",
          title: "CSS Grid",
          summary: "Rows and columns at once — galleries, dashboards and whole page layouts.",
          minutes: 18,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "Flexbox thinks in one line at a time. **Grid** thinks in rows *and* columns — like a spreadsheet you can drop content into.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Try repeat(2, 1fr) or repeat(4, 1fr).",
              code: `<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .gallery div { background: #f472b6; color: white; padding: 20px; text-align: center; }
</style>
<div class="gallery">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "The fr unit",
              md: "`fr` means \"a fraction of the free space\". `1fr 2fr` gives the second column twice the room of the first.",
            },
            {
              type: "heading",
              text: "Spanning cells",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .board div { background: #a5b4fc; padding: 16px; }
  .wide { grid-column: span 2; background: #4f46e5 !important; color: white; }
  .tall { grid-row: span 2; background: #0ea5e9 !important; color: white; }
</style>
<div class="board">
  <div class="wide">span 2 columns</div><div class="tall">span 2 rows</div>
  <div>3</div><div>4</div>
</div>`,
            },
            {
              type: "heading",
              text: "Named areas: a whole page",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  .page {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "head head"
      "side main"
      "foot foot";
    gap: 6px; height: 260px;
  }
  header { grid-area: head; background: #fca5a5; }
  aside  { grid-area: side; background: #fde68a; }
  main   { grid-area: main; background: #a7f3d0; }
  footer { grid-area: foot; background: #c4b5fd; }
</style>
<div class="page">
  <header>Header</header><aside>Sidebar</aside>
  <main>Main</main><footer>Footer</footer>
</div>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Responsive grid without media queries",
              md: "`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));` fits as many 150px+ columns as possible and wraps the rest. Magic for card layouts.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "When should you prefer grid over flexbox?",
                  options: ["Aligning items in a single row", "Laying out rows and columns together", "Centring one icon", "Never"],
                  answer: 1,
                  explain: "Grid is two-dimensional; flexbox is one-dimensional.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Turn on grid?", back: "`display: grid` on the container." },
            { front: "What is `1fr`?", back: "One fraction of the remaining free space." },
            { front: "Make an item span two columns?", back: "`grid-column: span 2;`" },
            { front: "Shorthand for 4 equal columns?", back: "`grid-template-columns: repeat(4, 1fr);`" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "`grid-template-columns: 1fr 1fr 2fr` in a 400px-wide grid with no gap. Width of the last column?",
              answer: 200,
              unit: "px",
              explain: "Total 4fr; 2fr = half of 400 = 200.",
            },
            {
              kind: "truefalse",
              q: "`gap` works in both grid and flexbox.",
              answer: true,
              explain: "Modern browsers support `gap` in both.",
            },
            {
              kind: "mcq",
              q: "Which property assigns an item to a named area?",
              options: ["`grid-name`", "`grid-area`", "`area`", "`grid-template-areas`"],
              answer: 1,
              explain: "Areas are defined on the container with `grid-template-areas` and assigned with `grid-area`.",
            },
          ],
          challenge: {
            title: "Photo grid",
            prompt:
              "Make `.gallery` a grid with **3 equal columns** and a **10px** gap.",
            lang: "css",
            setup: `<div class="gallery">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
            starter: `.gallery div {
  background: teal;
  color: white;
  padding: 20px;
}
`,
            tests: [
              { label: ".gallery is a grid", check: "getComputedStyle(document.querySelector('.gallery')).display === 'grid'" },
              { label: "Exactly 3 columns", check: "getComputedStyle(document.querySelector('.gallery')).gridTemplateColumns.trim().split(/\\s+/).length === 3" },
              { label: "Columns are equal", check: "(() => { const c = getComputedStyle(document.querySelector('.gallery')).gridTemplateColumns.trim().split(/\\s+/).map(parseFloat); return Math.max(...c) - Math.min(...c) < 1; })()" },
              { label: "Gap is 10px", check: "getComputedStyle(document.querySelector('.gallery')).columnGap === '10px'" },
            ],
            solution: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.gallery div {
  background: teal;
  color: white;
  padding: 20px;
}`,
            hints: ["`repeat(3, 1fr)` creates three equal columns.", "Put grid properties on `.gallery`, not on the children."],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "responsive-motion",
      title: "Responsive Design & Motion",
      icon: "📱",
      description: "Pages that adapt to any screen, plus transitions and keyframe animations.",
      lessons: [
        {
          slug: "responsive-design",
          title: "Responsive Design & Media Queries",
          summary: "Mobile-first thinking, fluid images and breakpoints with @media.",
          minutes: 16,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "More than half of web traffic comes from phones. A **responsive** site rearranges itself for whatever screen it lands on — no separate \"mobile site\" needed.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Add the viewport meta tag in your HTML head.",
                "Use fluid units (`%`, `fr`, `rem`) instead of fixed widths.",
                "Make media flexible: `img { max-width: 100%; height: auto; }`.",
                "Adjust layout at breakpoints with **media queries**.",
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Resize the preview pane (or your window) past 600px.",
              code: `<style>
  .cards { display: flex; flex-direction: column; gap: 10px; }
  .cards div { background: #34d399; padding: 20px; flex: 1; }

  /* Mobile first: the column layout above is the default.
     On screens 600px and wider, switch to a row. */
  @media (min-width: 600px) {
    .cards { flex-direction: row; }
    body { background: #ecfeff; }
  }
</style>
<div class="cards"><div>One</div><div>Two</div><div>Three</div></div>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Mobile first",
              md: "Write the phone styles as the default, then add `min-width` queries for bigger screens. Small screens download less override CSS, and you design for the hardest constraint first.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  img { max-width: 100%; height: auto; display: block; }
  h1 { font-size: clamp(1.5rem, 5vw, 3rem); }
</style>
<h1>Fluid heading</h1>
<img src="https://picsum.photos/id/1015/1200/500" alt="River valley between mountains">`,
            },
            {
              type: "callout",
              tone: "fact",
              md: "`clamp(min, preferred, max)` lets a value grow with the screen but never beyond sensible limits — fluid typography in one line.",
            },
            {
              type: "table",
              headers: ["Query", "Applies when"],
              rows: [
                ["`@media (min-width: 768px)`", "Viewport is at least 768px wide"],
                ["`@media (max-width: 600px)`", "Viewport is 600px wide or less"],
                ["`@media (orientation: landscape)`", "Wider than tall"],
                ["`@media (prefers-color-scheme: dark)`", "User chose dark mode"],
                ["`@media print`", "Printing the page"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Mobile-first CSS usually adds which kind of media query?",
                  options: ["`max-width`", "`min-width`", "`print`", "`orientation`"],
                  answer: 1,
                  explain: "Defaults target phones; `min-width` queries enhance for larger screens.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "What is a breakpoint?", back: "A screen width where the layout changes via a media query." },
            { front: "Make images never overflow their container?", back: "`img { max-width: 100%; height: auto; }`" },
            { front: "What does `clamp(1rem, 4vw, 2rem)` do?", back: "Scales with the viewport but stays between 1rem and 2rem." },
            { front: "Detect dark mode in CSS?", back: "`@media (prefers-color-scheme: dark) { ... }`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "`@media (max-width: 600px)` styles apply on a 400px-wide phone.",
              answer: true,
              explain: "400 ≤ 600, so the condition is met.",
            },
            {
              kind: "mcq",
              q: "Without the viewport meta tag, phones typically…",
              options: ["Render at desktop width and zoom out", "Refuse to load CSS", "Show only text", "Work perfectly"],
              answer: 0,
              explain: "They pretend to be ~980px wide, so everything looks tiny.",
            },
            {
              kind: "fill",
              q: "Media queries start with the at-rule `@___`.",
              answer: ["media"],
              explain: "`@media (condition) { ... }`",
            },
          ],
          challenge: {
            title: "Responsive cards",
            prompt:
              "1. Make `.cards` a flex container that **wraps** (`flex-wrap: wrap`).\n2. Give images `max-width: 100%`.\n3. Add a media query (`max-width` or `min-width`) containing a rule for `.cards` — e.g. switch to a column on small screens.",
            lang: "css",
            setup: `<div class="cards">
  <div class="card"><img src="https://picsum.photos/id/1011/400/200" alt="Lake"><p>Lake</p></div>
  <div class="card"><img src="https://picsum.photos/id/1012/400/200" alt="Forest"><p>Forest</p></div>
  <div class="card"><img src="https://picsum.photos/id/1013/400/200" alt="Coast"><p>Coast</p></div>
</div>`,
            starter: `.card {
  flex: 1 1 200px;
  background: #f1f5f9;
  padding: 8px;
}
`,
            tests: [
              { label: ".cards is flex and wraps", check: "getComputedStyle(document.querySelector('.cards')).display === 'flex' && getComputedStyle(document.querySelector('.cards')).flexWrap === 'wrap'" },
              { label: "Images have max-width: 100%", check: "getComputedStyle(document.querySelector('img')).maxWidth === '100%'" },
              { label: "A width media query styles .cards", check: "[...document.styleSheets].some(s => { try { return [...s.cssRules].some(r => r.type === 4 && /(min|max)-width/.test(r.media.mediaText) && [...r.cssRules].some(x => (x.selectorText || '').includes('.cards'))); } catch (e) { return false; } })" },
            ],
            solution: `.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.card {
  flex: 1 1 200px;
  background: #f1f5f9;
  padding: 8px;
}
img {
  max-width: 100%;
  height: auto;
}
@media (max-width: 500px) {
  .cards { flex-direction: column; }
}`,
            hints: [
              "Media query syntax: `@media (max-width: 500px) { .cards { ... } }`.",
              "`max-width` on `img` is different from the media query's `max-width` condition!",
            ],
          },
        },
        {
          slug: "transitions-animations",
          title: "Transitions & Animations",
          summary: "Smooth hover effects with transition and looping motion with @keyframes.",
          minutes: 15,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "A button that snaps instantly feels cheap. One that eases into its hover colour over a fraction of a second feels *crafted*. That's a **transition**.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Hover the button.",
              code: `<style>
  .btn {
    background: #6366f1; color: white; border: 0;
    padding: 12px 24px; border-radius: 8px; font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s;
  }
  .btn:hover {
    background-color: #f43f5e;
    transform: translateY(-3px) scale(1.05);
  }
</style>
<button class="btn">Hover me</button>`,
            },
            {
              type: "formula",
              tex: "\\texttt{transition: } \\textit{property} \\;\\; \\textit{duration} \\;\\; \\textit{timing} \\;\\; \\textit{delay}",
              caption: "transition shorthand",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Animate cheap properties",
              md: "`transform` and `opacity` animate smoothly because the GPU handles them. Animating `width`, `top` or `margin` forces re-layout every frame and can stutter.",
            },
            {
              type: "heading",
              text: "Keyframe animations",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<style>
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-30px); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .ball  { font-size: 3rem; display: inline-block; animation: bounce 1s ease-in-out infinite; }
  .wheel { font-size: 3rem; display: inline-block; animation: spin 2s linear infinite; }
</style>
<span class="ball">⚽</span>
<span class="wheel">🎡</span>`,
            },
            {
              type: "table",
              headers: ["animation-*", "Example"],
              rows: [
                ["`name`", "`bounce`"],
                ["`duration`", "`1s`"],
                ["`timing-function`", "`ease-in-out`, `linear`"],
                ["`iteration-count`", "`3`, `infinite`"],
                ["`direction`", "`alternate` (back and forth)"],
                ["`fill-mode`", "`forwards` (keep the final frame)"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Respect reduced motion",
              md: "Some people get dizzy or nauseous from motion. Wrap big animations in `@media (prefers-reduced-motion: no-preference) { ... }` or turn them off under `reduce`.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Transition vs animation — which can loop forever on its own?",
                  options: ["Transition", "Animation (`@keyframes`)", "Both", "Neither"],
                  answer: 1,
                  explain: "Transitions need a state change (like hover); keyframe animations can run `infinite`ly.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "What triggers a transition?", back: "A change in a property's value, e.g. on `:hover` or a class change." },
            { front: "Define a keyframe animation?", back: "`@keyframes name { from {...} to {...} }` then `animation: name 1s;`" },
            { front: "Best properties to animate?", back: "`transform` and `opacity`." },
            { front: "Media query for motion-sensitive users?", back: "`prefers-reduced-motion`" },
          ],
          quiz: [
            {
              kind: "fill",
              q: "To repeat an animation forever: `animation-iteration-count: ___;`",
              answer: ["infinite"],
              explain: "`infinite` loops endlessly.",
            },
            {
              kind: "truefalse",
              q: "A transition needs a starting and ending value of a property to animate between.",
              answer: true,
              explain: "It smoothly interpolates between the old and new value.",
            },
            {
              kind: "multi",
              q: "Which are valid `@keyframes` selectors?",
              options: ["`from`", "`50%`", "`to`", "`middle`"],
              answers: [0, 1, 2],
              explain: "`from` (0%), `to` (100%) and percentages are valid; `middle` isn't.",
            },
            {
              kind: "mcq",
              q: "`transition: opacity 0.5s 1s;` — what is the `1s`?",
              options: ["Duration", "Delay", "Iteration count", "Timing function"],
              answer: 1,
              explain: "The first time value is the duration, the second is the delay.",
            },
          ],
          challenge: {
            title: "Lively button",
            prompt:
              "1. Give `.btn` a `transition` on `background-color` lasting **0.3s**.\n2. Add a `.btn:hover` rule that changes the background colour.\n3. Create `@keyframes pulse` (any frames you like).\n4. Apply the `pulse` animation to `.badge`.",
            lang: "css",
            setup: `<button class="btn">Hover me</button>
<span class="badge">NEW</span>`,
            starter: `.btn {
  background-color: royalblue;
  color: white;
  border: 0;
  padding: 10px 20px;
}
.badge {
  display: inline-block;
  background: gold;
  padding: 2px 8px;
}
`,
            tests: [
              { label: "Transition lasts 0.3s", check: "getComputedStyle(document.querySelector('.btn')).transitionDuration.split(',').some(d => Math.abs(parseFloat(d) - 0.3) < 0.001)" },
              { label: "Transition covers background-color", check: "/background|all/.test(getComputedStyle(document.querySelector('.btn')).transitionProperty)" },
              { label: "A :hover rule exists", check: "[...document.styleSheets].some(s => { try { return [...s.cssRules].some(r => (r.selectorText || '').includes(':hover')); } catch (e) { return false; } })" },
              { label: "@keyframes pulse exists", check: "[...document.styleSheets].some(s => { try { return [...s.cssRules].some(r => r.type === 7 && r.name === 'pulse'); } catch (e) { return false; } })" },
              { label: ".badge uses the pulse animation", check: "getComputedStyle(document.querySelector('.badge')).animationName === 'pulse'" },
            ],
            solution: `.btn {
  background-color: royalblue;
  color: white;
  border: 0;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: crimson;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
.badge {
  display: inline-block;
  background: gold;
  padding: 2px 8px;
  animation: pulse 1s ease-in-out infinite;
}`,
            hints: [
              "`transition: background-color 0.3s;`",
              "Apply with `animation: pulse 1s infinite;` — the name must match the `@keyframes` name exactly.",
            ],
          },
        },
      ],
    },
  ],
};
