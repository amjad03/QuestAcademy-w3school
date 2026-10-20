import type { Subject } from "@/content/types";

export const html: Subject = {
  slug: "html",
  title: "HTML",
  world: "code",
  icon: "🧱",
  colors: ["#f97316", "#ef4444"],
  tagline: "The skeleton of every web page — build real pages in minutes.",
  description:
    "Learn HyperText Markup Language by building things: page structure, text, links, images, lists, tables, forms, semantic layout, accessibility and media. Every concept comes with a live editor so you can poke it and see what changes, plus auto-graded challenges that check your markup for real.",
  levels: ["Beginner", "Intermediate"],
  stages: ["middle", "secondary", "ug", "pg", "lifelong"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "getting-started",
      title: "Getting Started",
      icon: "🚀",
      description: "What HTML is, how tags and elements work, and the skeleton every page shares.",
      lessons: [
        {
          slug: "what-is-html",
          title: "What Is HTML?",
          summary: "Tags, elements and attributes — the three words you need to read any web page.",
          minutes: 10,
          xp: 20,
          blocks: [
            {
              type: "text",
              md: "Right-click any website and choose **View page source**. That wall of angle brackets is HTML — and by the end of this course you will be able to read every line of it.\n\n**HTML** (HyperText Markup Language) is not a programming language. It does not calculate or make decisions. It *labels* content so the browser knows what each piece is: \"this is a heading\", \"this is a link\", \"this is a picture\".",
            },
            { type: "illustration", emoji: "🧱🎨⚙️", caption: "HTML = structure, CSS = style, JavaScript = behaviour." },
            {
              type: "text",
              md: "Content is wrapped in **tags**. An opening tag like `<p>` and a closing tag like `</p>` surround the content. The whole thing — opening tag, content, closing tag — is called an **element**.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Edit the text and press Run.",
              code: `<h1>Hello, web!</h1>
<p>This is a paragraph. Change me!</p>`,
            },
            {
              type: "heading",
              text: "Attributes add extra information",
            },
            {
              type: "text",
              md: "Attributes live inside the opening tag as `name=\"value\"` pairs. They tweak or describe an element — where a link goes, which image to show, what language the text is in.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<p title="I appear when you hover">Hover over this paragraph.</p>
<a href="https://example.com">A link with an href attribute</a>`,
            },
            {
              type: "heading",
              text: "Empty (void) elements",
            },
            {
              type: "text",
              md: "A few elements have no content, so they have no closing tag: `<br>` (line break), `<hr>` (divider), `<img>` (image) and `<input>` (form field).",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<p>Roses are red,<br>violets are blue.</p>
<hr>
<p>Everything above the line is a poem.</p>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Nest properly",
              md: "Elements must close in the reverse order they opened, like nesting boxes. `<p><strong>hi</strong></p>` is correct; `<p><strong>hi</p></strong>` is tangled and browsers have to guess what you meant.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In `<a href=\"/shop\">Shop</a>`, what is `href`?",
                  options: ["A tag", "An attribute", "An element", "A closing tag"],
                  answer: 1,
                  explain: "`href` sits inside the opening tag as a name=\"value\" pair, so it is an attribute.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "HTML labels content; it does not compute anything.",
                "Element = opening tag + content + closing tag.",
                "Attributes go in the opening tag: `name=\"value\"`.",
                "Void elements like `<br>` and `<img>` have no closing tag.",
              ],
            },
          ],
          flashcards: [
            { front: "What does HTML stand for?", back: "HyperText Markup Language." },
            { front: "What is an element?", back: "An opening tag, its content and the matching closing tag, e.g. `<p>Hi</p>`." },
            { front: "Where do attributes go?", back: "Inside the opening tag, written as `name=\"value\"`." },
            { front: "Name two void elements.", back: "`<br>`, `<hr>`, `<img>`, `<input>` (no closing tag)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which job belongs to HTML?",
              options: ["Choosing colours and fonts", "Describing the structure and meaning of content", "Reacting to button clicks", "Storing data in a database"],
              answer: 1,
              explain: "HTML gives content structure and meaning. CSS styles it and JavaScript adds behaviour.",
            },
            {
              kind: "truefalse",
              q: "HTML is a programming language because it has loops and variables.",
              answer: false,
              explain: "HTML is a markup language — it has no loops, variables or logic.",
            },
            {
              kind: "fill",
              q: "The closing tag for `<p>` is `___`.",
              answer: ["</p>"],
              explain: "Closing tags repeat the name with a forward slash: `</p>`.",
            },
            {
              kind: "multi",
              q: "Which of these are void (self-contained) elements?",
              options: ["`<br>`", "`<p>`", "`<img>`", "`<h1>`"],
              answers: [0, 2],
              explain: "`<br>` and `<img>` never wrap content, so they have no closing tag.",
            },
          ],
        },
        {
          slug: "document-structure",
          title: "The Page Skeleton",
          summary: "DOCTYPE, html, head and body — the boilerplate every page starts with.",
          minutes: 14,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Every house has a foundation, walls and a roof before anyone picks curtains. Every web page has a skeleton too, and it looks almost identical on billions of sites.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "The standard starter template. Try changing the title — look at the preview's tab name in your head!",
              code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Everything you can see lives inside body.</p>
  </body>
</html>`,
            },
            {
              type: "table",
              headers: ["Line", "What it does"],
              rows: [
                ["`<!DOCTYPE html>`", "Tells the browser to use modern HTML rules (not ancient \"quirks mode\")."],
                ["`<html lang=\"en\">`", "The root element. `lang` helps screen readers pronounce words and search engines index them."],
                ["`<head>`", "Invisible information *about* the page: title, character set, links to CSS."],
                ["`<meta charset=\"UTF-8\">`", "Lets the page show any character: é, ñ, 你好, 🎉."],
                ["`<meta name=\"viewport\">`", "Makes the page fit phone screens instead of looking zoomed out."],
                ["`<title>`", "Text on the browser tab and in search results."],
                ["`<body>`", "Everything the visitor actually sees."],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Indentation is for humans",
              md: "Browsers ignore extra spaces and line breaks. Indent child elements anyway — future-you will be grateful when hunting for a missing closing tag.",
            },
            {
              type: "heading",
              text: "Comments",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<!-- This note is invisible on the page -->
<p>Visible text.</p>
<!-- <p>This paragraph is "commented out".</p> -->`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Comments are not secret",
              md: "Anyone can read comments with *View source*. Never put passwords or private notes in them.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Where does the `<title>` element belong?",
                  options: ["Inside `<body>`", "Inside `<head>`", "Before `<!DOCTYPE html>`", "Inside `<h1>`"],
                  answer: 1,
                  explain: "The title is information about the page, so it belongs in `<head>`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Start every page with `<!DOCTYPE html>`.",
                "`<head>` = info about the page; `<body>` = what users see.",
                "Always set `lang`, `charset` and the viewport meta tag.",
                "Comments look like `<!-- ... -->` and are public.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `<!DOCTYPE html>` do?", back: "Switches the browser into standards mode for modern HTML." },
            { front: "`<head>` vs `<body>`?", back: "Head holds metadata (title, charset, CSS links). Body holds visible content." },
            { front: "Why add the viewport meta tag?", back: "So the page scales properly on mobile screens." },
            { front: "How do you write an HTML comment?", back: "`<!-- your note -->`" },
          ],
          quiz: [
            {
              kind: "order",
              q: "Put these in the order they appear in a page.",
              items: ["`<!DOCTYPE html>`", "`<html>`", "`<head>`", "`<body>`"],
              explain: "DOCTYPE first, then the html root, which contains head followed by body.",
            },
            {
              kind: "mcq",
              q: "Which attribute tells assistive tech which language the page is in?",
              options: ["`charset`", "`lang`", "`title`", "`name`"],
              answer: 1,
              explain: "`lang` on `<html>` declares the page language, e.g. `lang=\"en\"`.",
            },
            {
              kind: "truefalse",
              q: "Text inside an HTML comment is hidden from people who view the page source.",
              answer: false,
              explain: "Comments are hidden on the rendered page but fully visible in the source.",
            },
            {
              kind: "fill",
              q: "To show emoji and accented letters correctly, use `<meta charset=\"___\">`.",
              answer: ["UTF-8", "utf-8", "utf8"],
              explain: "UTF-8 covers practically every character in every language.",
            },
          ],
          challenge: {
            title: "Your first real page",
            prompt:
              "Build a complete page about a hobby you love.\n\n1. Give the `<html>` element a `lang` attribute.\n2. Give the page a `<title>` (any text).\n3. Add exactly **one** `<h1>`.\n4. Add at least one `<p>` with some text.",
            lang: "html",
            starter: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>

  </body>
</html>`,
            tests: [
              { label: "The <html> element has a lang attribute", check: "document.documentElement.getAttribute('lang') !== null && document.documentElement.getAttribute('lang').trim() !== ''" },
              { label: "The page has a non-empty <title>", check: "document.title.trim().length > 0" },
              { label: "There is exactly one <h1>", check: "document.querySelectorAll('h1').length === 1" },
              { label: "There is a paragraph with text", check: "[...document.querySelectorAll('p')].some(p => p.textContent.trim().length > 0)" },
            ],
            solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Why I Love Chess</title>
  </head>
  <body>
    <h1>Chess</h1>
    <p>Chess is a game of patience, tactics and the occasional dramatic blunder.</p>
  </body>
</html>`,
            hints: [
              "`lang` goes in the opening tag: `<html lang=\"en\">`.",
              "`<title>` belongs inside `<head>`, while `<h1>` and `<p>` go inside `<body>`.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "text-links-images",
      title: "Text, Links & Images",
      icon: "✍️",
      description: "Headings, paragraphs, emphasis, hyperlinks and pictures — the bread and butter of the web.",
      lessons: [
        {
          slug: "headings-and-text",
          title: "Headings & Text Elements",
          summary: "Build a clear outline with h1–h6 and add meaning with strong, em, code and friends.",
          minutes: 12,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "Think of a newspaper: a giant headline, smaller section titles, then paragraphs. Readers skim headings to decide what to read — and so do search engines and screen-reader users.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<h1>Space Weekly</h1>
<h2>Mars</h2>
<p>The red planet has the tallest volcano in the solar system.</p>
<h3>Olympus Mons</h3>
<p>It is roughly 22 km high — about two and a half Everests.</p>
<h2>Jupiter</h2>
<p>A storm on Jupiter has been raging for centuries.</p>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Don't pick headings by size",
              md: "Choose a heading level by its place in the outline, not by how big it looks. Need small text that is a top-level heading? Use `<h1>` and shrink it with CSS. Also avoid skipping levels (h2 → h4).",
            },
            {
              type: "heading",
              text: "Inline text with meaning",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<p><strong>Warning:</strong> the oven is hot.</p>
<p>I <em>really</em> mean it.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>Run <code>npm start</code> in the terminal.</p>
<p>Water is H<sub>2</sub>O and 2<sup>10</sup> is 1024.</p>
<p><mark>Highlighted</mark> and <del>deleted</del> text.</p>`,
            },
            {
              type: "table",
              headers: ["Element", "Meaning"],
              rows: [
                ["`<strong>`", "Strong importance (bold by default)"],
                ["`<em>`", "Stress emphasis (italic by default)"],
                ["`<code>` / `<kbd>`", "Computer code / keyboard input"],
                ["`<sub>` / `<sup>`", "Subscript / superscript"],
                ["`<mark>`", "Highlighted, relevant text"],
                ["`<blockquote>`", "A long quotation from another source"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "`<b>` and `<i>` still exist, but they only change appearance. `<strong>` and `<em>` carry *meaning* — screen readers may announce them with extra stress.",
            },
            {
              type: "heading",
              text: "Whitespace collapses",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "All those spaces shrink to one. Use <pre> when spacing matters.",
              code: `<p>Lots      of      spaces
and a new line.</p>
<pre>
  Spacing   is
     kept   in pre!
</pre>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which element marks text as strongly important?",
                  options: ["`<b>`", "`<strong>`", "`<mark>`", "`<big>`"],
                  answer: 1,
                  explain: "`<strong>` conveys importance; `<b>` is purely visual.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Use one `<h1>` per page, then h2–h6 in outline order.",
                "`<strong>`/`<em>` add meaning; `<b>`/`<i>` only add looks.",
                "Browsers collapse whitespace — `<pre>` preserves it.",
              ],
            },
          ],
          flashcards: [
            { front: "How many heading levels does HTML have?", back: "Six: `<h1>` to `<h6>`." },
            { front: "`<strong>` vs `<b>`?", back: "`<strong>` means important; `<b>` just looks bold." },
            { front: "Which element keeps spaces and line breaks?", back: "`<pre>` (preformatted text)." },
            { front: "How do you write H₂O in HTML?", back: "`H<sub>2</sub>O`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "It is good practice to jump from `<h2>` straight to `<h5>` if you want smaller text.",
              answer: false,
              explain: "Pick levels by outline position and style size with CSS.",
            },
            {
              kind: "mcq",
              q: "How would you show 'x squared'?",
              options: ["`x<sub>2</sub>`", "`x<sup>2</sup>`", "`x<small>2</small>`", "`x^2` inside `<code>`"],
              answer: 1,
              explain: "Superscript (`<sup>`) raises the 2.",
            },
            {
              kind: "fill",
              q: "To show the keyboard shortcut Ctrl, wrap it in the `<___>` element.",
              answer: ["kbd"],
              explain: "`<kbd>` represents keyboard input.",
            },
            {
              kind: "mcq",
              q: "You type five spaces between two words inside a `<p>`. How many appear?",
              options: ["Five", "One", "None", "Two"],
              answer: 1,
              explain: "Consecutive whitespace collapses to a single space.",
            },
          ],
        },
        {
          slug: "links-and-images",
          title: "Links & Images",
          summary: "Connect pages with anchors and add pictures with meaningful alt text.",
          minutes: 15,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "The \"HyperText\" in HTML means text that links to other text. Links are what turned a pile of documents into a *web*.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<p><a href="https://developer.mozilla.org">Absolute URL (another site)</a></p>
<p><a href="/about.html">Root-relative URL (same site)</a></p>
<p><a href="#faq">Jump to the FAQ on this page</a></p>
<p><a href="mailto:hello@example.com">Email us</a></p>
<p><a href="tel:+15551234567">Call us</a></p>`,
            },
            {
              type: "heading",
              text: "Opening in a new tab",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Opens in a new tab
</a>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Write link text that makes sense alone",
              md: "Screen-reader users often jump from link to link. \"Click here\" tells them nothing; \"Download the 2026 timetable (PDF)\" tells them everything.",
            },
            {
              type: "heading",
              text: "Images",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<img src="https://picsum.photos/id/237/300/200"
     alt="A black puppy looking up at the camera"
     width="300" height="200">`,
            },
            {
              type: "list",
              items: [
                "`src` — where the image file lives.",
                "`alt` — words that replace the image if it can't be seen (blind users, slow networks, broken links).",
                "`width` / `height` — reserve space so the page doesn't jump while the image loads.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "alt is not optional",
              md: "Every `<img>` needs `alt`. For purely decorative images use an empty one: `alt=\"\"` — screen readers then skip it.",
            },
            {
              type: "heading",
              text: "Image links",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<a href="https://picsum.photos">
  <img src="https://picsum.photos/id/1025/120/80" alt="Visit the photo gallery">
</a>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `href=\"#contact\"` link to?",
                  options: ["A file named contact", "The element with `id=\"contact\"` on this page", "An email address", "Nothing"],
                  answer: 1,
                  explain: "A `#` link jumps to the element whose id matches.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`<a href=\"...\">` makes a link; `#id` links within the page.",
                "Add `rel=\"noopener\"` when using `target=\"_blank\"`.",
                "Every `<img>` needs `alt`; decorative images get `alt=\"\"`.",
              ],
            },
          ],
          flashcards: [
            { front: "Which attribute holds a link's destination?", back: "`href`" },
            { front: "Why add `rel=\"noopener\"` with `target=\"_blank\"`?", back: "So the new tab cannot control the original page via `window.opener`." },
            { front: "What is `alt` text for?", back: "A text alternative when the image can't be seen — essential for accessibility." },
            { front: "What alt should a decorative image have?", back: "An empty one: `alt=\"\"`." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which link opens the user's email app?",
              options: ["`<a href=\"email:me@x.com\">`", "`<a href=\"mailto:me@x.com\">`", "`<a mail=\"me@x.com\">`", "`<a href=\"@me@x.com\">`"],
              answer: 1,
              explain: "The `mailto:` scheme opens a new email.",
            },
            {
              kind: "truefalse",
              q: "Setting `width` and `height` on images helps stop the layout jumping as they load.",
              answer: true,
              explain: "The browser can reserve the right amount of space before the file arrives.",
            },
            {
              kind: "multi",
              q: "Which are good link texts?",
              options: ["Click here", "Read our refund policy", "Download the menu (PDF, 2 MB)", "More"],
              answers: [1, 2],
              explain: "Good link text describes the destination even out of context.",
            },
            {
              kind: "fill",
              q: "To open a link in a new tab use `target=\"___\"`.",
              answer: ["_blank"],
              explain: "`_blank` means a new browsing context (tab/window).",
            },
          ],
          challenge: {
            title: "Profile card",
            prompt:
              "Create a mini profile card.\n\n1. Add an `<img>` with a meaningful (non-empty) `alt`.\n2. Add a link whose `href` starts with `https://`.\n3. Make at least one link open in a new tab safely (`target=\"_blank\"` **and** a `rel` containing `noopener`).\n4. Add a link that jumps to an element with `id=\"bio\"` on the same page (and create that element).",
            lang: "html",
            starter: `<h1>Ada Lovelace</h1>
<!-- image here -->

<p id="bio">The first computer programmer.</p>

<!-- links here -->`,
            tests: [
              { label: "An image with non-empty alt text", check: "[...document.querySelectorAll('img')].some(i => (i.getAttribute('alt') || '').trim().length > 0)" },
              { label: "A link to an https:// address", check: "[...document.querySelectorAll('a')].some(a => (a.getAttribute('href') || '').trim().startsWith('https://'))" },
              { label: "A safe new-tab link", check: "[...document.querySelectorAll('a')].some(a => a.getAttribute('target') === '_blank' && (a.getAttribute('rel') || '').includes('noopener'))" },
              { label: "A same-page link to #bio, and the target exists", check: "!!document.getElementById('bio') && [...document.querySelectorAll('a')].some(a => (a.getAttribute('href') || '').trim() === '#bio')" },
            ],
            solution: `<h1>Ada Lovelace</h1>
<img src="https://picsum.photos/id/64/150/150" alt="Portrait-style photo used for Ada's profile">

<p id="bio">The first computer programmer.</p>

<p><a href="#bio">Read the bio</a></p>
<p><a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" rel="noopener noreferrer">Ada on Wikipedia</a></p>`,
            hints: [
              "A same-page link looks like `<a href=\"#bio\">`.",
              "You can satisfy tests 2 and 3 with a single link that has `href`, `target` and `rel`.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "lists-and-tables",
      title: "Lists & Tables",
      icon: "📋",
      description: "Organise items with lists and present data in accessible tables.",
      lessons: [
        {
          slug: "lists",
          title: "Lists",
          summary: "Unordered, ordered and description lists — plus nesting.",
          minutes: 10,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Navigation menus, recipe steps, search results, a product's features — under the hood most of the web is lists.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Order doesn't matter → ul. Order matters → ol.",
              code: `<h3>Packing list</h3>
<ul>
  <li>Sunscreen</li>
  <li>Water bottle</li>
  <li>Snacks</li>
</ul>

<h3>Make tea</h3>
<ol>
  <li>Boil water</li>
  <li>Add the tea bag</li>
  <li>Wait three minutes</li>
</ol>`,
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Ordered list options: start number, reverse, letter style.",
              code: `<ol start="5"><li>Five</li><li>Six</li></ol>
<ol reversed><li>Three</li><li>Two</li><li>One</li></ol>
<ol type="A"><li>Option A</li><li>Option B</li></ol>`,
            },
            {
              type: "heading",
              text: "Nesting lists",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<ul>
  <li>Fruit
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Only li inside ul/ol",
              md: "A nested list must go *inside* an `<li>`, never directly inside the `<ul>`. The direct children of `<ul>` and `<ol>` should only be `<li>` elements.",
            },
            {
              type: "heading",
              text: "Description lists",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<dl>
  <dt>HTML</dt>
  <dd>Structures content.</dd>
  <dt>CSS</dt>
  <dd>Styles content.</dd>
</dl>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which list suits the steps of a recipe?",
                  options: ["`<ul>`", "`<ol>`", "`<dl>`", "`<menu>`"],
                  answer: 1,
                  explain: "Steps happen in order, so an ordered list fits.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "`<ul>` vs `<ol>`?", back: "Unordered (bullets) vs ordered (numbers) — choose by whether order matters." },
            { front: "What goes directly inside `<ul>`?", back: "Only `<li>` elements." },
            { front: "What are `<dt>` and `<dd>`?", back: "Term and description inside a `<dl>` description list." },
            { front: "How do you start an ordered list at 5?", back: "`<ol start=\"5\">`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "A nested `<ul>` should be placed inside an `<li>`.",
              answer: true,
              explain: "Nested lists belong inside the list item they relate to.",
            },
            {
              kind: "fill",
              q: "Each item in a list is wrapped in `<___>`.",
              answer: ["li"],
              explain: "`<li>` = list item.",
            },
            {
              kind: "mcq",
              q: "Which attribute makes an ordered list count down?",
              options: ["`desc`", "`reverse`", "`reversed`", "`down`"],
              answer: 2,
              explain: "The boolean attribute is `reversed`.",
            },
          ],
          challenge: {
            title: "Plan a picnic",
            prompt:
              "1. Make an **unordered** list with exactly **3** things to bring.\n2. Make an **ordered** list with at least **2** steps for setting up.",
            lang: "html",
            starter: `<h2>Bring</h2>

<h2>Set up</h2>
`,
            tests: [
              { label: "An unordered list with exactly 3 items", check: "!!document.querySelector('ul') && document.querySelector('ul').querySelectorAll(':scope > li').length === 3" },
              { label: "An ordered list with at least 2 items", check: "!!document.querySelector('ol') && document.querySelector('ol').querySelectorAll(':scope > li').length >= 2" },
            ],
            solution: `<h2>Bring</h2>
<ul>
  <li>Blanket</li>
  <li>Sandwiches</li>
  <li>Lemonade</li>
</ul>

<h2>Set up</h2>
<ol>
  <li>Find a shady spot</li>
  <li>Spread the blanket</li>
  <li>Unpack the food</li>
</ol>`,
            hints: ["`<ul>` for bullets, `<ol>` for numbered steps.", "Every item needs its own `<li>`."],
          },
        },
        {
          slug: "tables",
          title: "Tables",
          summary: "Rows, cells, headers and captions for genuinely tabular data.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Train timetables, league standings, nutrition labels — when data has rows *and* columns, reach for a table.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<table border="1">
  <caption>Weekend football results</caption>
  <thead>
    <tr><th>Team</th><th>Played</th><th>Points</th></tr>
  </thead>
  <tbody>
    <tr><td>Lions</td><td>5</td><td>13</td></tr>
    <tr><td>Hawks</td><td>5</td><td>10</td></tr>
  </tbody>
</table>`,
            },
            {
              type: "table",
              headers: ["Element", "Role"],
              rows: [
                ["`<table>`", "The whole table"],
                ["`<caption>`", "Title of the table (great for accessibility)"],
                ["`<thead>` / `<tbody>` / `<tfoot>`", "Header, body and footer groups of rows"],
                ["`<tr>`", "Table row"],
                ["`<th>`", "Header cell (bold & centred by default)"],
                ["`<td>`", "Data cell"],
              ],
            },
            {
              type: "heading",
              text: "Spanning cells",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<table border="1">
  <tr><th colspan="2">Lunch menu</th></tr>
  <tr><td rowspan="2">Mains</td><td>Pasta</td></tr>
  <tr><td>Curry</td></tr>
</table>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Tables are for data, not layout",
              md: "In the 2000s people built entire page layouts with tables. Don't! It confuses screen readers and breaks on phones. Use CSS flexbox or grid for layout.",
            },
            {
              type: "callout",
              tone: "tip",
              md: "Add `scope=\"col\"` or `scope=\"row\"` to `<th>` so screen readers know which cells each header describes.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A cell should stretch across 3 columns. Which attribute?",
                  options: ["`rowspan=\"3\"`", "`colspan=\"3\"`", "`span=\"3\"`", "`width=\"3\"`"],
                  answer: 1,
                  explain: "`colspan` spans columns; `rowspan` spans rows.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "`<th>` vs `<td>`?", back: "Header cell vs data cell." },
            { front: "What does `<caption>` do?", back: "Gives the table a visible title that is announced by screen readers." },
            { front: "What do `colspan` and `rowspan` do?", back: "Make a cell span multiple columns or rows." },
            { front: "Should you use tables for page layout?", back: "No — only for tabular data. Use CSS for layout." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order these from outermost to innermost.",
              items: ["`<table>`", "`<tbody>`", "`<tr>`", "`<td>`"],
              explain: "Table → row group → row → cell.",
            },
            {
              kind: "numeric",
              q: "A table has 4 rows of `<td>` cells and 3 cells per row. How many data cells?",
              answer: 12,
              explain: "4 × 3 = 12.",
            },
            {
              kind: "truefalse",
              q: "`<tr>` stands for 'table row'.",
              answer: true,
              explain: "Yes — each `<tr>` holds one row of cells.",
            },
            {
              kind: "mcq",
              q: "Which attribute tells screen readers a header labels a column?",
              options: ["`scope=\"col\"`", "`header=\"col\"`", "`role=\"column\"`", "`for=\"col\"`"],
              answer: 0,
              explain: "`scope=\"col\"` associates the header with its column.",
            },
          ],
          challenge: {
            title: "Snack nutrition table",
            prompt:
              "Build a table comparing snacks.\n\n1. Give it a `<caption>`.\n2. A `<thead>` row with exactly **3** `<th>` cells (e.g. Snack, Calories, Sugar).\n3. A `<tbody>` with exactly **2** rows.",
            lang: "html",
            starter: `<table border="1">

</table>`,
            tests: [
              { label: "The table has a caption", check: "!!document.querySelector('table > caption') && document.querySelector('table > caption').textContent.trim().length > 0" },
              { label: "The header has exactly 3 th cells", check: "document.querySelectorAll('table thead th').length === 3" },
              { label: "The body has exactly 2 rows", check: "document.querySelectorAll('table tbody tr').length === 2" },
            ],
            solution: `<table border="1">
  <caption>Snack comparison</caption>
  <thead>
    <tr><th scope="col">Snack</th><th scope="col">Calories</th><th scope="col">Sugar (g)</th></tr>
  </thead>
  <tbody>
    <tr><td>Apple</td><td>95</td><td>19</td></tr>
    <tr><td>Crisps</td><td>150</td><td>1</td></tr>
  </tbody>
</table>`,
            hints: [
              "`<caption>` must be the first child of `<table>`.",
              "Put the header row inside `<thead>` and the data rows inside `<tbody>`.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "forms",
      title: "Forms",
      icon: "📝",
      description: "Collect input with labels, inputs, choices and built-in validation.",
      lessons: [
        {
          slug: "form-basics",
          title: "Form Basics",
          summary: "form, label, input types and buttons — how the web asks questions.",
          minutes: 15,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Logging in, searching, checking out, posting a comment — every time you type into a website you're using a form.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<form action="/subscribe" method="post">
  <label for="name">Your name</label>
  <input type="text" id="name" name="name">

  <label for="email">Email</label>
  <input type="email" id="email" name="email">

  <button type="submit">Subscribe</button>
</form>`,
            },
            {
              type: "list",
              items: [
                "`action` — where the data is sent.",
                "`method` — `get` (data in the URL, good for searches) or `post` (data in the request body, good for sign-ups).",
                "`name` — the key each value is sent under. **No name, no data.**",
                "`<label for=\"id\">` — connects text to an input. Clicking the label focuses the field.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Click the label",
              md: "In the editor above, click the word \"Email\". The cursor jumps into the box — that's `for`/`id` doing its job, and it makes small tap targets easier on phones.",
            },
            {
              type: "heading",
              text: "Input types give you free features",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "On a phone, each type even brings up a different keyboard.",
              code: `<p><input type="email" placeholder="email"></p>
<p><input type="password" placeholder="password"></p>
<p><input type="number" min="1" max="10"></p>
<p><input type="date"></p>
<p><input type="color" value="#ff6600"></p>
<p><input type="range" min="0" max="100"></p>
<p><input type="search" placeholder="Search..."></p>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Placeholder is not a label",
              md: "Placeholder text vanishes as soon as you type, is often low-contrast, and is unreliable for screen readers. Always use a real `<label>`.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "An input has no `name` attribute. What happens on submit?",
                  options: ["It sends as 'unnamed'", "Its value is not sent", "The form errors", "It uses the id"],
                  answer: 1,
                  explain: "Only fields with a `name` are included in submitted data.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Wrap fields in `<form action method>`.",
                "Pair each input with `<label for>` matching its `id`.",
                "`name` decides the key the value is sent under.",
                "Pick the right `type` for free validation and mobile keyboards.",
              ],
            },
          ],
          flashcards: [
            { front: "How do you link a label to an input?", back: "Label's `for` equals the input's `id`." },
            { front: "GET vs POST?", back: "GET puts data in the URL (searches); POST sends it in the body (sign-ups, logins)." },
            { front: "Why is `name` important on inputs?", back: "It's the key used when the form data is submitted." },
            { front: "Give three input types.", back: "e.g. `email`, `password`, `number`, `date`, `color`, `range`, `checkbox`." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which input type hides characters as you type?",
              options: ["`hidden`", "`secret`", "`password`", "`private`"],
              answer: 2,
              explain: "`type=\"password\"` masks the characters.",
            },
            {
              kind: "truefalse",
              q: "A placeholder is an acceptable replacement for a label.",
              answer: false,
              explain: "Placeholders disappear and aren't reliably announced — use a label.",
            },
            {
              kind: "fill",
              q: "`<label ___=\"email\">` connects the label to `<input id=\"email\">`.",
              answer: ["for"],
              explain: "The `for` attribute references the input's id.",
            },
            {
              kind: "mcq",
              q: "A search box that should create shareable result URLs should use…",
              options: ["`method=\"get\"`", "`method=\"post\"`", "`method=\"put\"`", "No method"],
              answer: 0,
              explain: "GET puts the query in the URL so it can be bookmarked and shared.",
            },
          ],
        },
        {
          slug: "choices-and-validation",
          title: "Choices & Validation",
          summary: "Checkboxes, radios, selects, textareas and the browser's built-in validation.",
          minutes: 16,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Not every question has a typed answer. Pizza size? Pick one. Toppings? Pick several. Let's give users the right kind of control.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Radios share a name → only one can be chosen. Checkboxes are independent.",
              code: `<form>
  <fieldset>
    <legend>Size</legend>
    <label><input type="radio" name="size" value="s"> Small</label>
    <label><input type="radio" name="size" value="m" checked> Medium</label>
    <label><input type="radio" name="size" value="l"> Large</label>
  </fieldset>

  <fieldset>
    <legend>Toppings</legend>
    <label><input type="checkbox" name="top" value="cheese"> Extra cheese</label>
    <label><input type="checkbox" name="top" value="olive"> Olives</label>
  </fieldset>
</form>`,
            },
            {
              type: "callout",
              tone: "tip",
              md: "Wrapping an input inside its `<label>` is another valid way to connect them — no `for`/`id` needed.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<label for="city">City</label>
<select id="city" name="city">
  <option value="">-- choose --</option>
  <option value="del">Delhi</option>
  <option value="lon">London</option>
  <option value="nyc">New York</option>
</select>

<p><label for="msg">Message</label></p>
<textarea id="msg" name="msg" rows="4" cols="30"></textarea>`,
            },
            {
              type: "heading",
              text: "Built-in validation",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Press Join with empty or wrong values to see the browser complain.",
              code: `<form>
  <label for="u">Username (3–12 letters)</label>
  <input id="u" name="u" required minlength="3" maxlength="12" pattern="[A-Za-z]+">

  <label for="age">Age</label>
  <input id="age" name="age" type="number" min="13" max="120" required>

  <button>Join</button>
</form>`,
            },
            {
              type: "table",
              headers: ["Attribute", "Rule"],
              rows: [
                ["`required`", "Field can't be empty"],
                ["`minlength` / `maxlength`", "Text length limits"],
                ["`min` / `max` / `step`", "Number and date limits"],
                ["`pattern`", "Must match a regular expression"],
                ["`type=\"email\"` / `url`", "Must look like an email / URL"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Never trust the browser alone",
              md: "Anyone can switch off HTML validation with dev tools. It's for user-friendliness; the server must *always* validate again.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Three radio buttons should allow only one selection. What must they share?",
                  options: ["The same `id`", "The same `name`", "The same `value`", "The same `label`"],
                  answer: 1,
                  explain: "Radios with the same `name` form a group where only one can be checked.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Radio vs checkbox?", back: "Radio: pick exactly one from a group. Checkbox: each can be on or off independently." },
            { front: "What do `<fieldset>` and `<legend>` do?", back: "Group related controls and give the group a caption." },
            { front: "Which attribute makes a field mandatory?", back: "`required`" },
            { front: "Is HTML validation enough for security?", back: "No — always validate on the server too." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which element creates a multi-line text box?",
              options: ["`<input type=\"multiline\">`", "`<textarea>`", "`<textbox>`", "`<input rows=\"4\">`"],
              answer: 1,
              explain: "`<textarea>` accepts multiple lines.",
            },
            {
              kind: "multi",
              q: "Which attributes limit what can be typed into a text input?",
              options: ["`maxlength`", "`pattern`", "`legend`", "`required`"],
              answers: [0, 1, 3],
              explain: "`legend` is an element for fieldsets, not an input attribute.",
            },
            {
              kind: "truefalse",
              q: "A `<select>` element contains `<option>` elements.",
              answer: true,
              explain: "Each choice in a dropdown is an `<option>`.",
            },
            {
              kind: "fill",
              q: "To pre-select a radio button, add the `___` attribute.",
              answer: ["checked"],
              explain: "`checked` makes it selected by default.",
            },
          ],
          challenge: {
            title: "Sign-up form",
            prompt:
              "Build an accessible sign-up form.\n\n1. A `<form>` element.\n2. An `type=\"email\"` input with an `id`, connected to a `<label for>`.\n3. A `type=\"password\"` input that is `required` with a `minlength` of **8**.\n4. A submit button inside the form.",
            lang: "html",
            starter: `<form>

</form>`,
            tests: [
              { label: "There is a form", check: "!!document.querySelector('form')" },
              { label: "Email input with a matching label", check: "(() => { const e = document.querySelector('input[type=email]'); return !!e && !!e.id && !!document.querySelector('label[for=\"' + e.id + '\"]'); })()" },
              { label: "Password is required with minlength 8", check: "(() => { const p = document.querySelector('input[type=password]'); return !!p && p.required && p.minLength === 8; })()" },
              { label: "A submit button inside the form", check: "!!document.querySelector('form button:not([type]), form button[type=submit], form input[type=submit]')" },
            ],
            solution: `<form action="/signup" method="post">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="pw">Password</label>
  <input type="password" id="pw" name="password" required minlength="8">

  <button type="submit">Create account</button>
</form>`,
            hints: [
              "The label's `for` must exactly match the input's `id`.",
              "`minlength=\"8\"` and `required` both go on the password input.",
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "semantics-media",
      title: "Semantic HTML, Accessibility & Media",
      icon: "♿",
      description: "Meaningful page landmarks, writing for everyone, and embedding audio and video.",
      lessons: [
        {
          slug: "semantic-layout",
          title: "Semantic Layout",
          summary: "header, nav, main, article, section, aside and footer — elements that say what they are.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Imagine a building where every room is just labelled \"room\". That's a page built only from `<div>`s. Semantic elements are signs on the doors: *kitchen*, *exit*, *reception*.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<header>
  <h1>Green Thumb Blog</h1>
  <nav>
    <a href="/">Home</a> | <a href="/tips">Tips</a>
  </nav>
</header>

<main>
  <article>
    <h2>Growing tomatoes on a balcony</h2>
    <p>Six hours of sun is all they need…</p>
  </article>
  <aside>
    <h3>Did you know?</h3>
    <p>Tomatoes are technically berries.</p>
  </aside>
</main>

<footer>
  <p>&copy; 2026 Green Thumb</p>
</footer>`,
            },
            {
              type: "table",
              headers: ["Element", "Use it for"],
              rows: [
                ["`<header>`", "Intro area: logo, site title, maybe nav"],
                ["`<nav>`", "Major navigation links"],
                ["`<main>`", "The unique main content — once per page"],
                ["`<article>`", "Self-contained piece that makes sense alone (post, card, comment)"],
                ["`<section>`", "A themed group of content, usually with a heading"],
                ["`<aside>`", "Side content related to, but separate from, the main flow"],
                ["`<footer>`", "Closing info: copyright, contact, links"],
                ["`<div>` / `<span>`", "No meaning — pure styling hooks (block / inline)"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Why bother?",
              md: "Screen readers let users jump straight to `main` or `nav`. Search engines understand your page better. And your code is easier to read. Three wins, zero cost.",
            },
            {
              type: "heading",
              text: "Entities: special characters",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<p>5 &lt; 10 &amp;&amp; 10 &gt; 5</p>
<p>&copy; &reg; &euro; &hearts;</p>
<p>Keep&nbsp;together (non-breaking space)</p>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which element should wrap a single blog post that could be shared on its own?",
                  options: ["`<div>`", "`<section>`", "`<article>`", "`<aside>`"],
                  answer: 2,
                  explain: "`<article>` is for self-contained, independently distributable content.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "How many `<main>` elements per page?", back: "One (visible) — it holds the page's unique content." },
            { front: "`<article>` vs `<section>`?", back: "Article stands alone (a post); section groups related content within something larger." },
            { front: "What meaning does `<div>` carry?", back: "None — it's a generic container for styling." },
            { front: "How do you show a literal `<` in HTML?", back: "`&lt;`" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Where would a site's main menu links go?",
              options: ["`<aside>`", "`<nav>`", "`<footer>`", "`<menuitem>`"],
              answer: 1,
              explain: "`<nav>` marks major navigation blocks.",
            },
            {
              kind: "truefalse",
              q: "Semantic elements look very different from `<div>` by default.",
              answer: false,
              explain: "Most look identical to a div — their value is meaning, not appearance.",
            },
            {
              kind: "fill",
              q: "The entity for the © symbol is `&___;`.",
              answer: ["copy"],
              explain: "`&copy;` renders ©.",
            },
          ],
          challenge: {
            title: "Landmark layout",
            prompt:
              "Turn this div soup into semantic HTML.\n\n1. A `<header>` containing a `<nav>`.\n2. Exactly **one** `<main>`.\n3. Inside main, an `<article>` with an `<h2>`.\n4. A `<footer>`.",
            lang: "html",
            starter: `<div class="top">
  <h1>Pixel News</h1>
  <div class="menu"><a href="/">Home</a> <a href="/games">Games</a></div>
</div>
<div class="content">
  <div class="post">
    <h2>New console announced</h2>
    <p>It fits in your pocket.</p>
  </div>
</div>
<div class="bottom">© 2026 Pixel News</div>`,
            tests: [
              { label: "A header that contains a nav", check: "!!document.querySelector('header nav')" },
              { label: "Exactly one main", check: "document.querySelectorAll('main').length === 1" },
              { label: "An article with an h2 inside main", check: "!!document.querySelector('main article h2')" },
              { label: "A footer", check: "!!document.querySelector('footer')" },
            ],
            solution: `<header>
  <h1>Pixel News</h1>
  <nav><a href="/">Home</a> <a href="/games">Games</a></nav>
</header>
<main>
  <article>
    <h2>New console announced</h2>
    <p>It fits in your pocket.</p>
  </article>
</main>
<footer>© 2026 Pixel News</footer>`,
            hints: ["Replace each `<div>` with the element that describes its job.", "The menu of links becomes `<nav>`, and the post becomes `<article>`."],
          },
        },
        {
          slug: "accessibility",
          title: "Accessibility Essentials",
          summary: "Build pages that work for keyboard users, screen-reader users and everyone else.",
          minutes: 12,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Over a billion people live with some form of disability. Accessibility (often written **a11y** — 11 letters between a and y) means nobody gets locked out of your page. The good news: correct HTML gets you most of the way for free.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Use the right element.** A `<button>` is focusable, clickable with Enter/Space and announced as a button. A clickable `<div>` is none of those.",
                "**Label everything.** Inputs get `<label>`s, images get `alt`, icon-only buttons get an `aria-label`.",
                "**Keep a logical heading outline.** Many screen-reader users navigate by headings.",
                "**Never rely on colour alone.** Add text or icons to red/green states.",
                "**Make it keyboard-friendly.** Try pressing Tab through your page.",
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Press Tab in the preview: only the real button gets focus.",
              code: `<div onclick="alert('div clicked')">I am a fake button (div)</div>
<button onclick="alert('button clicked')">I am a real button</button>

<button aria-label="Close dialog">✕</button>`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "First rule of ARIA",
              md: "ARIA attributes (`role`, `aria-label`, `aria-expanded`…) patch gaps — but if a native HTML element already does the job, use it instead. Bad ARIA is worse than no ARIA.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "A skip link lets keyboard users jump past the menu.",
              code: `<a href="#main">Skip to main content</a>
<nav><a href="#">One</a> <a href="#">Two</a> <a href="#">Three</a></nav>
<main id="main"><h1>Main content</h1></main>`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "An icon-only ✕ button needs an accessible name. Which is best?",
                  options: ["`title=\"x\"`", "`aria-label=\"Close\"`", "`class=\"close\"`", "Nothing — the ✕ is obvious"],
                  answer: 1,
                  explain: "`aria-label` gives screen readers a clear name for the button.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "What does a11y mean?", back: "Accessibility — 11 letters between the a and the y." },
            { front: "Why use `<button>` over a clickable `<div>`?", back: "Buttons are focusable, keyboard-operable and announced correctly by default." },
            { front: "First rule of ARIA?", back: "Prefer a native HTML element over adding ARIA." },
            { front: "What's a skip link?", back: "A link at the top that jumps keyboard users past navigation to the main content." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "Showing errors only by turning a field red is accessible to everyone.",
              answer: false,
              explain: "Colour-blind users may miss it. Add text such as \"Email is required\".",
            },
            {
              kind: "mcq",
              q: "Which key moves focus to the next interactive element?",
              options: ["Enter", "Tab", "Space", "Shift"],
              answer: 1,
              explain: "Tab moves forward; Shift+Tab moves back.",
            },
            {
              kind: "multi",
              q: "Which improve accessibility?",
              options: ["Descriptive `alt` text", "Using `<div>` for all buttons", "Labels on inputs", "A logical heading order"],
              answers: [0, 2, 3],
              explain: "Div-buttons break keyboard and screen-reader access.",
            },
          ],
        },
        {
          slug: "media",
          title: "Audio, Video & Embeds",
          summary: "Play media natively, add captions, and embed other pages with iframes.",
          minutes: 12,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Not long ago, playing a video in a browser needed a plugin. Today it takes one element.",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<video controls width="320"
       poster="https://picsum.photos/id/1018/320/180">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
  Sorry, your browser can't play this video.
</video>`,
            },
            {
              type: "list",
              items: [
                "`controls` — show play/pause/volume.",
                "Multiple `<source>`s — the browser picks the first format it supports.",
                "`poster` — the image shown before playback.",
                "`autoplay` only works reliably together with `muted` — browsers block noisy autoplay.",
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<audio controls>
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
</audio>`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Captions",
              md: "Add `<track kind=\"captions\" src=\"subs.vtt\" srclang=\"en\" label=\"English\">` inside `<video>`. Captions help deaf viewers, people in noisy places, and language learners.",
            },
            {
              type: "heading",
              text: "Figures and iframes",
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              code: `<figure>
  <img src="https://picsum.photos/id/1043/240/160" alt="Misty forest at dawn">
  <figcaption>Fig. 1 — The forest at 6 am.</figcaption>
</figure>

<iframe src="https://example.com" width="300" height="150"
        title="Example website" loading="lazy"></iframe>`,
            },
            {
              type: "callout",
              tone: "note",
              md: "Give every `<iframe>` a `title` so screen-reader users know what's inside, and `loading=\"lazy\"` to defer offscreen embeds.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Why list several `<source>` elements?",
                  options: ["To play them all at once", "So the browser can pick a format it supports", "For captions", "To make it louder"],
                  answer: 1,
                  explain: "The browser uses the first source whose format it can play.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Which attribute shows play/pause buttons?", back: "`controls`" },
            { front: "What does `<track kind=\"captions\">` add?", back: "A captions/subtitles file (WebVTT) for the video." },
            { front: "What pairs `<figure>` with a caption?", back: "`<figcaption>`" },
            { front: "What must autoplaying video usually be?", back: "`muted` — browsers block autoplay with sound." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "The text inside `<video>` (after the sources) is shown only if the browser can't play video.",
              answer: true,
              explain: "It's fallback content.",
            },
            {
              kind: "fill",
              q: "The image shown before a video plays is set with the `___` attribute.",
              answer: ["poster"],
              explain: "`poster=\"image.jpg\"`",
            },
            {
              kind: "mcq",
              q: "Which element embeds another web page inside yours?",
              options: ["`<embed-page>`", "`<frame>`", "`<iframe>`", "`<object-page>`"],
              answer: 2,
              explain: "`<iframe>` = inline frame.",
            },
          ],
          challenge: {
            title: "Media gallery",
            prompt:
              "1. Add a `<video>` that shows its `controls` and contains at least one `<source>`.\n2. Add a `<figure>` containing an `<img>` (with alt) and a `<figcaption>`.",
            lang: "html",
            starter: `<h1>Trip highlights</h1>
`,
            tests: [
              { label: "A video with controls", check: "!!document.querySelector('video') && document.querySelector('video').controls === true" },
              { label: "The video has a <source>", check: "!!document.querySelector('video source')" },
              { label: "A figure with an image that has alt text", check: "[...document.querySelectorAll('figure img')].some(i => (i.getAttribute('alt') || '').trim().length > 0)" },
              { label: "The figure has a figcaption", check: "!!document.querySelector('figure figcaption') && document.querySelector('figure figcaption').textContent.trim().length > 0" },
            ],
            solution: `<h1>Trip highlights</h1>
<video controls width="320">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
  Your browser can't play this video.
</video>

<figure>
  <img src="https://picsum.photos/id/1036/240/160" alt="Snowy mountain peaks under a blue sky">
  <figcaption>Day 3: the view from the pass.</figcaption>
</figure>`,
            hints: ["`controls` is a boolean attribute — just write the word.", "`<figcaption>` goes inside `<figure>`, next to the image."],
          },
        },
      ],
    },
  ],
};
