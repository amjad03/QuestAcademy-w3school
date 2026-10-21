import type { CourseResources } from "./types";

export const htmlResources: CourseResources = {
  course: "html",
  caseStudies: [
    {
      slug: "div-soup-rescue",
      title: "Rescuing a college fest site from \"div soup\"",
      summary: "A festival website built entirely from <div>s fails search, screen readers and mobile users. Semantic HTML fixes all three.",
      units: ["semantics-media", "getting-started"],
      minutes: 14,
      scenario: `A student team built the website for their college's annual tech fest in a weekend. Every element — the header, menu, event cards, footer, even the buttons — was a \`<div>\` or \`<span>\` styled with CSS and wired up with JavaScript click handlers. Headings were \`<div class="big-text">\`.

Two weeks before the fest, three problems appeared:

1. The site didn't show up when people searched for the fest's name plus the city.
2. A visually impaired student emailed: her screen reader announced the whole page as one long block of text, and she couldn't reach the "Register" button with the keyboard.
3. Registration completion on phones was much lower than on laptops.`,
      data: {
        caption: "Audit before and after the semantic rewrite",
        headers: ["Check", "Before", "After"],
        rows: [
          ["Headings (h1–h3) on home page", "0", "1 h1, 5 h2, 14 h3"],
          ["Landmarks (header/nav/main/footer)", "0", "4"],
          ["Keyboard-reachable buttons", "0 of 9", "9 of 9"],
          ["Images with alt text", "3 of 22", "22 of 22 (6 decorative alt=\"\")"],
          ["Lighthouse accessibility score", "54", "98"],
        ],
      },
      questions: [
        "Why can't a keyboard user reach a `<div>` with a click handler, and what's the one-line fix?",
        "How do headings and landmarks help screen-reader users navigate?",
        "Why might semantic headings and a proper `<title>` help the page appear in search results?",
        "The registration form used placeholder text instead of `<label>`s. Why does that hurt phone users in particular?",
        "When is `alt=\"\"` the *correct* choice for an image?",
      ],
      outcome: `A \`<div>\` is not focusable and has no button role; replacing it with \`<button type="button">\` gives focus, Enter/Space activation and the correct role for free. Headings create an outline screen-reader users can jump through, and landmarks (\`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\`) let them skip straight to content.

Search engines use the \`<title>\`, headings and meaningful link text to understand a page; the team added a descriptive title and meta description. Real \`<label>\`s stay visible while typing, enlarge the tap target and let phones pick the right keyboard via \`type="email"\` and \`type="tel"\`.

Decorative images get \`alt=""\` so screen readers skip them. Mobile registrations rose noticeably in the final week, and the site appeared on the first page of results for the fest's name.`,
      takeaways: [
        "Use the element that means what you want — semantics are free accessibility.",
        "Native `<button>` and `<a>` elements bring keyboard support automatically.",
        "Headings and landmarks are navigation for assistive technology.",
        "Good HTML helps search engines and mobile users too.",
      ],
    },
    {
      slug: "ration-card-form",
      title: "A government form that people could actually finish",
      summary: "Redesigning a long application form with proper labels, input types, grouping and validation.",
      units: ["forms", "lists-and-tables"],
      minutes: 15,
      scenario: `A municipal office moved its ration-card application online. The form had 34 fields on one page, no visible labels (only placeholders), a single "Submit" button at the bottom, and showed one generic message — "Invalid input" — when anything was wrong. Dates were free-text boxes and phone numbers accepted letters.

Help-desk logs showed most calls were about the form. A web developer intern was asked to rebuild it using only HTML and a little CSS, keeping the same backend.`,
      data: {
        caption: "Help-desk call reasons (one month, 1,240 calls)",
        headers: ["Reason", "Calls"],
        rows: [
          ["\"Invalid input\" with no indication where", "512"],
          ["Date format rejected", "268"],
          ["Lost data after page refresh", "190"],
          ["Couldn't tell which fields were required", "176"],
          ["Other", "94"],
        ],
      },
      questions: [
        "Which HTML attributes and input types would prevent the date and phone errors before submission?",
        "How do `<fieldset>` and `<legend>` help a 34-field form? Suggest sensible groups.",
        "Write the HTML for one accessible, required phone-number field with a hint.",
        "The family-members section is really tabular data. When is a `<table>` appropriate in a form, and what makes it accessible?",
      ],
      outcome: `The intern used \`type="date"\`, \`type="tel"\` with \`pattern="[0-9]{10}"\` and \`inputmode="numeric"\`, plus \`required\` and \`autocomplete\` attributes. Fields were grouped into fieldsets — *Applicant*, *Address*, *Family members*, *Documents* — each with a \`<legend>\`.

A typical field became:

\`<label for="phone">Mobile number</label>\`
\`<input id="phone" name="phone" type="tel" required pattern="[0-9]{10}" aria-describedby="phone-hint">\`
\`<p id="phone-hint">10 digits, no spaces</p>\`

The family-members grid became a real \`<table>\` with \`<th scope="col">\` headers and a \`<caption>\`, so screen readers announce the column for each input. Errors were shown next to the field. Form-related calls fell by about 70% in the next month.`,
      takeaways: [
        "Labels, not placeholders, describe fields.",
        "Input types and validation attributes catch errors early and pick the right keyboard.",
        "Group long forms with fieldsets and legends.",
        "Use tables for genuinely tabular data, with header cells and captions.",
      ],
    },
  ],
  readings: {
    "getting-started": [
      { title: "HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics", source: "MDN Web Docs", type: "docs", level: "intro", note: "The anatomy of an HTML element and document." },
      { title: "HTML Living Standard", url: "https://html.spec.whatwg.org/", source: "WHATWG", type: "docs", level: "advanced", note: "The official specification, for when you need the exact rules." },
      { title: "Learn HTML", url: "https://web.dev/learn/html", source: "web.dev (Google)", type: "course", level: "intro", note: "A free, modern course from the Chrome team." },
    ],
    "text-links-images": [
      { title: "HTML text fundamentals", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", source: "MDN Web Docs", type: "docs", level: "intro", note: "Headings, paragraphs and emphasis." },
      { title: "Images in HTML", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML", source: "MDN Web Docs", type: "docs", level: "intro", note: "src, alt, width/height and figures." },
      { title: "An alt decision tree", url: "https://www.w3.org/WAI/tutorials/images/decision-tree/", source: "W3C WAI", type: "article", level: "intro", note: "How to write the right alt text for any image." },
    ],
    "lists-and-tables": [
      { title: "HTML table basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics", source: "MDN Web Docs", type: "docs", level: "intro", note: "Rows, cells and headers." },
      { title: "Tables tutorial", url: "https://www.w3.org/WAI/tutorials/tables/", source: "W3C WAI", type: "article", level: "intermediate", note: "Making simple and complex tables accessible." },
      { title: "The <ul>, <ol> and <dl> elements", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul", source: "MDN Web Docs", type: "docs", level: "intro", note: "Reference for list elements." },
    ],
    forms: [
      { title: "Web forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms", source: "MDN Web Docs", type: "docs", level: "intro", note: "A complete guide to building forms." },
      { title: "Forms tutorial", url: "https://www.w3.org/WAI/tutorials/forms/", source: "W3C WAI", type: "article", level: "intermediate", note: "Labels, grouping, instructions and validation." },
      { title: "Learn Forms", url: "https://web.dev/learn/forms", source: "web.dev (Google)", type: "course", level: "intermediate", note: "Autofill, validation and usability." },
    ],
    "semantics-media": [
      { title: "Document and website structure", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure", source: "MDN Web Docs", type: "docs", level: "intro", note: "Landmarks and semantic layout." },
      { title: "HTML: a good basis for accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML", source: "MDN Web Docs", type: "docs", level: "intro", note: "Why semantic HTML is accessible by default." },
      { title: "Video and audio content", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", source: "MDN Web Docs", type: "docs", level: "intro", note: "<video>, <audio>, sources and captions." },
      { title: "WCAG 2 Overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", source: "W3C WAI", type: "docs", level: "advanced", note: "The accessibility standard semantic HTML helps you meet." },
    ],
  },
  competencies: [
    { id: "structure", name: "Document structure", description: "Write valid, well-structured HTML documents.", lessons: ["html/getting-started/what-is-html", "html/getting-started/document-structure"] },
    { id: "content", name: "Text, links & images", description: "Mark up text, links and images correctly.", lessons: ["html/text-links-images/headings-and-text", "html/text-links-images/links-and-images"] },
    { id: "data", name: "Lists & tables", description: "Present structured data accessibly.", lessons: ["html/lists-and-tables/lists", "html/lists-and-tables/tables"] },
    { id: "forms", name: "Forms", description: "Build labelled, validated forms.", lessons: ["html/forms/form-basics", "html/forms/choices-and-validation"] },
    { id: "semantics", name: "Semantics & accessibility", description: "Use landmarks, semantic elements and accessible media.", lessons: ["html/semantics-media/semantic-layout", "html/semantics-media/accessibility", "html/semantics-media/media"] },
  ],
};
