import type { CourseResources } from "./types";

export const cssResources: CourseResources = {
  course: "css",
  caseStudies: [
    {
      slug: "important-everywhere",
      title: "The stylesheet with 400 !important rules",
      summary: "A specificity arms race made a small redesign take three weeks. Understanding the cascade unwound it.",
      units: ["selectors-cascade"],
      minutes: 14,
      scenario: `A growing online bookshop had a single 6,000-line stylesheet written by five different freelancers over four years. When a designer asked for the "Add to cart" button to be green instead of orange, a developer changed the colour — and nothing happened. A rule elsewhere, \`#product-page .sidebar div.buy-box a.btn\`, was more specific. She added \`!important\`. Then the button in the mobile menu broke, because *that* rule also had \`!important\`.

By the time of the redesign the file contained over 400 \`!important\` declarations and many ID selectors. A two-day colour update took three weeks. The tech lead asked a junior developer to analyse the problem.`,
      data: {
        caption: "Specificity of selectors targeting the cart button",
        headers: ["Selector", "Specificity (IDs, classes, elements)"],
        rows: [
          [".btn-primary", "0, 1, 0"],
          [".buy-box .btn", "0, 2, 0"],
          ["#product-page .sidebar div.buy-box a.btn", "1, 3, 2"],
          ["header nav .menu a.btn (with !important)", "0, 3, 3 + important"],
        ],
      },
      questions: [
        "Explain how the cascade decides which declaration wins: origin/importance, specificity, then order.",
        "Why does `#product-page .sidebar div.buy-box a.btn` beat `.buy-box .btn` regardless of order in the file?",
        "Why does adding `!important` to fix one bug tend to cause more bugs?",
        "Propose a strategy to make the stylesheet maintainable. Mention naming conventions, low-specificity selectors and/or cascade layers.",
      ],
      outcome: `The cascade compares *importance and origin* first, then *specificity* (IDs, then classes/attributes/pseudo-classes, then elements), and only then *source order*. One ID outranks any number of classes, so the long selector (1,3,2) wins over (0,2,0) wherever it sits.

\`!important\` jumps to a higher layer of the cascade, so the only way to override it is another \`!important\` with equal or higher specificity — an arms race.

The team adopted single-class component selectors (a BEM-style naming convention), design tokens as **custom properties** (\`--color-cta\`), and \`@layer reset, base, components, utilities\` so that the order of layers — not selector weight — decides priority. They removed \`!important\` from all but a few utility classes. The next colour change took one line.`,
      takeaways: [
        "Know the cascade order: importance → specificity → source order.",
        "Keep specificity low and flat; avoid ID selectors for styling.",
        "`!important` is a last resort, not a fix.",
        "Custom properties and cascade layers make large stylesheets manageable.",
      ],
    },
    {
      slug: "mobile-layout-overflow",
      title: "Half the users saw a broken checkout",
      summary: "A fixed-width layout overflowed on phones. Flexbox, grid and media queries made the page responsive.",
      units: ["box-model", "layout", "responsive-motion"],
      minutes: 16,
      scenario: `A local food-delivery start-up noticed that 52% of its traffic came from phones, but only 18% of orders. Session recordings showed users pinching and scrolling sideways on the checkout page; the "Place order" button was often off-screen to the right.

The checkout was laid out with floats and fixed widths: a 960px container, a 640px order summary and a 300px payment panel, each with 20px padding and a 1px border. There was no viewport meta tag.`,
      data: {
        caption: "Checkout metrics before and after the fix (2 weeks each)",
        headers: ["Metric", "Before", "After"],
        rows: [
          ["Mobile checkout completion", "21%", "47%"],
          ["Horizontal scroll events per session (mobile)", "6.4", "0.1"],
          ["Cumulative Layout Shift", "0.31", "0.04"],
        ],
      },
      questions: [
        "With the default `box-sizing: content-box`, how wide is the 640px panel on screen including padding and border?",
        "Why did the page appear zoomed out or overflow on phones without `<meta name=\"viewport\">`?",
        "Sketch a mobile-first layout using flexbox or grid that stacks the panels on small screens and places them side by side above 768px.",
        "The total-price box jumped as images loaded. Which CSS properties help prevent layout shift?",
      ],
      outcome: `In content-box, the rendered width is 640 + 2×20 + 2×1 = **682px**, so two panels plus gaps exceeded the container. The team set \`*, *::before, *::after { box-sizing: border-box; }\` so padding and borders fit inside declared widths.

Without the viewport meta tag, mobile browsers render at a virtual ~980px width and shrink it. Adding \`<meta name="viewport" content="width=device-width, initial-scale=1">\` fixed scaling.

The new layout was mobile-first:

\`.checkout { display: grid; gap: 1rem; }\`
\`@media (min-width: 768px) { .checkout { grid-template-columns: 2fr 1fr; } }\`

Widths became fluid (\`max-width\`, \`fr\`, \`%\`), images got explicit \`width\`/\`height\` or \`aspect-ratio\`, and the button became sticky at the bottom on small screens. Mobile completion more than doubled.`,
      takeaways: [
        "Use `box-sizing: border-box` globally to make widths predictable.",
        "Always include the viewport meta tag for responsive pages.",
        "Design mobile-first; add complexity with min-width media queries.",
        "Reserve space for media with width/height or aspect-ratio to prevent layout shift.",
      ],
    },
  ],
  readings: {
    "selectors-cascade": [
      { title: "Cascade, specificity and inheritance", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance", source: "MDN Web Docs", type: "docs", level: "intro", note: "How the browser decides which rule wins." },
      { title: "Learn CSS", url: "https://web.dev/learn/css", source: "web.dev (Google)", type: "course", level: "intro", note: "A free, modern course from the Chrome team." },
      { title: "Cascade layers (@layer)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer", source: "MDN Web Docs", type: "docs", level: "advanced", note: "Control priority without specificity wars." },
    ],
    "colors-typography": [
      { title: "CSS values and units", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units", source: "MDN Web Docs", type: "docs", level: "intro", note: "px, em, rem, %, vw and colour formats." },
      { title: "Fundamental text and font styling", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals", source: "MDN Web Docs", type: "docs", level: "intro", note: "Font families, sizes, line-height and spacing." },
      { title: "Butterick's Practical Typography", url: "https://practicaltypography.com/", source: "Matthew Butterick", type: "book", level: "intermediate", note: "Typography rules that apply directly to CSS." },
    ],
    "box-model": [
      { title: "The box model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model", source: "MDN Web Docs", type: "docs", level: "intro", note: "Content, padding, border, margin and box-sizing." },
      { title: "Positioning", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning", source: "MDN Web Docs", type: "docs", level: "intro", note: "static, relative, absolute, fixed and sticky." },
      { title: "CSS Box Model Module Level 3", url: "https://www.w3.org/TR/css-box-3/", source: "W3C", type: "docs", level: "advanced", note: "The specification." },
    ],
    layout: [
      { title: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox", source: "MDN Web Docs", type: "docs", level: "intro", note: "One-dimensional layout explained." },
      { title: "Grids", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids", source: "MDN Web Docs", type: "docs", level: "intro", note: "Two-dimensional layout with CSS grid." },
      { title: "Flexbox Froggy", url: "https://flexboxfroggy.com/", source: "Codepip", type: "course", level: "intro", note: "A game for practising flexbox properties." },
      { title: "Grid Garden", url: "https://cssgridgarden.com/", source: "Codepip", type: "course", level: "intro", note: "A game for practising grid properties." },
    ],
    "responsive-motion": [
      { title: "Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design", source: "MDN Web Docs", type: "docs", level: "intro", note: "Media queries, fluid grids and images." },
      { title: "Learn Responsive Design", url: "https://web.dev/learn/design", source: "web.dev (Google)", type: "course", level: "intermediate", note: "Modern responsive patterns, including container queries." },
      { title: "Using CSS transitions", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions", source: "MDN Web Docs", type: "docs", level: "intro", note: "Animate property changes smoothly." },
      { title: "prefers-reduced-motion", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion", source: "MDN Web Docs", type: "docs", level: "intermediate", note: "Respect users who want less animation." },
    ],
  },
  competencies: [
    { id: "cascade", name: "Selectors & the cascade", description: "Target elements precisely and predict which rule wins.", lessons: ["css/selectors-cascade/how-css-works", "css/selectors-cascade/selectors", "css/selectors-cascade/specificity-cascade"] },
    { id: "type", name: "Colour & typography", description: "Use colour, units and type for readable designs.", lessons: ["css/colors-typography/colors", "css/colors-typography/units-typography"] },
    { id: "box", name: "Box model & positioning", description: "Control sizing, spacing and positioning.", lessons: ["css/box-model/box-model-basics", "css/box-model/display-position"] },
    { id: "layout", name: "Modern layout", description: "Build layouts with flexbox and grid.", lessons: ["css/layout/flexbox", "css/layout/grid"] },
    { id: "responsive", name: "Responsive design & motion", description: "Adapt to any screen and animate with care.", lessons: ["css/responsive-motion/responsive-design", "css/responsive-motion/transitions-animations"] },
  ],
};
