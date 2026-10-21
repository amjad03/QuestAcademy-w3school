import type { CourseResources } from "./types";

export const uxDesignResources: CourseResources = {
  course: "ux-design",
  caseStudies: [
    {
      slug: "clinic-booking-dropoff",
      title: "Why 62% of patients abandoned the clinic booking form",
      summary: "Funnel data and five usability tests reveal what was really stopping people from booking appointments.",
      units: ["design-thinking-research", "interaction-usability"],
      minutes: 16,
      scenario: `A chain of 14 neighbourhood clinics launched a web booking flow to cut phone calls at reception. After three months, analytics showed that most people who *started* booking never finished, and reception phones were as busy as ever.

The product manager wanted to add a chatbot. A UX designer asked for one week to research first. She combined the funnel analytics with **five moderated usability tests** (patients aged 22–68, two on low-end Android phones) and a review of 200 reception call notes.`,
      data: {
        caption: "Booking funnel (30 days, 9,800 starts)",
        headers: ["Step", "Users reaching step", "Drop from previous"],
        rows: [
          ["1. Choose clinic", "9,800", "—"],
          ["2. Choose doctor", "7,900", "19%"],
          ["3. Create account (OTP + email + password)", "4,400", "44%"],
          ["4. Pick date & time", "4,050", "8%"],
          ["5. Confirm", "3,720", "8%"],
        ],
      },
      questions: [
        "Which step deserves attention first, and why is the absolute number of users lost important here?",
        "In testing, 4 of 5 participants said \"I just want to see when the doctor is free.\" What does this suggest about task order?",
        "Which of Nielsen's heuristics does a mandatory account before seeing availability violate?",
        "Propose a redesigned flow and two metrics to evaluate it in an A/B test.",
        "Why might a chatbot not have solved the problem?",
      ],
      outcome: `Account creation lost 3,500 people — far more than any other step. Testing showed users wanted to **see availability before committing**; asking for an email, password *and* OTP up front felt like a barrier, especially for older patients and those on slow phones. This violates *flexibility and efficiency of use* and *user control*, and imposes needless memory load (passwords for a twice-a-year task).

The redesign put date & time **before** sign-in and replaced the account with a phone-number OTP at confirmation ("guest booking"). An A/B test measured completion rate and calls to reception per booking. Completion rose from 38% to 64%, and booking calls fell by about a third. A chatbot would have added another interface on top of the same broken order of steps.`,
      takeaways: [
        "Combine quantitative funnels (where) with qualitative testing (why).",
        "Five well-chosen participants often reveal the biggest problems.",
        "Match the flow's order to the user's mental model and goal.",
        "Fix the underlying journey before adding new channels.",
      ],
    },
    {
      slug: "bank-app-accessibility",
      title: "Making a banking app usable for everyone",
      summary: "An accessibility audit uncovers contrast, labelling and focus problems that locked out screen-reader users.",
      units: ["accessibility-testing", "visual-design"],
      minutes: 15,
      scenario: `A regional bank received complaints from visually impaired customers who could not transfer money in its mobile web app. A customer who uses the TalkBack screen reader said she could log in but then heard only "button, button, button" on the transfer screen.

The design team ran an audit against **WCAG 2.2 Level AA** using automated tools, keyboard-only navigation and sessions with three screen-reader users.`,
      data: {
        caption: "Audit findings on the transfer flow",
        headers: ["Issue", "Instances", "WCAG criterion"],
        rows: [
          ["Icon-only buttons without accessible names", "11", "4.1.2 Name, Role, Value"],
          ["Grey placeholder text #A0A0A0 on white as the only label", "6", "1.4.3 Contrast; 3.3.2 Labels"],
          ["Focus outline removed with CSS", "all screens", "2.4.7 Focus Visible"],
          ["Error shown only as red border", "4", "1.4.1 Use of Colour"],
          ["Session timeout with no warning (90 s)", "1", "2.2.1 Timing Adjustable"],
        ],
      },
      questions: [
        "Why does an icon-only button sound like \"button\" to a screen reader? How do you fix it in HTML?",
        "The placeholder colour #A0A0A0 on white has a contrast ratio of about 2.6:1. What ratio does AA require for normal text, and what else is wrong with placeholder-only labels?",
        "Which issues also hurt users *without* disabilities? Give examples.",
        "Prioritise the five issues for a two-week sprint and justify the order.",
      ],
      outcome: `Screen readers announce a control's *accessible name*; an icon with no text, \`aria-label\` or visually hidden label has none. The team added visible text labels where space allowed and \`aria-label\` elsewhere.

AA requires **4.5:1** for normal text. Placeholders also vanish as you type, burdening memory. Persistent labels, a darker grey (#595959 ≈ 7:1), visible focus rings, error text with icons, and a timeout warning with an "extend" button were shipped first because they blocked the core task.

Older customers, people in bright sunlight and keyboard users all benefited — after release, transfer completion rose 9% overall, not just for assistive-technology users.`,
      takeaways: [
        "Accessibility is usability for the widest range of people.",
        "Semantic HTML and accessible names are the foundation for screen readers.",
        "Never rely on colour alone to convey meaning.",
        "Test with real assistive-technology users, not only automated checkers.",
      ],
    },
  ],
  readings: {
    "design-thinking-research": [
      { title: "Design thinking resources", url: "https://www.ideo.com/design-thinking", source: "IDEO", type: "article", level: "intro", note: "The approach from the firm that popularised it." },
      { title: "Why you only need to test with 5 users", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/", source: "Nielsen Norman Group", type: "article", level: "intro", note: "The classic argument for small, iterative tests." },
      { title: "When to use which user-experience research methods", url: "https://www.nngroup.com/articles/which-ux-research-methods/", source: "Nielsen Norman Group", type: "article", level: "intermediate", note: "A map of 20 methods by goal and data type." },
      { title: "GOV.UK Service Manual — user research", url: "https://www.gov.uk/service-manual/user-research", source: "UK Government Digital Service", type: "docs", level: "intermediate", note: "Practical, public-sector research guidance." },
    ],
    "information-architecture": [
      { title: "Card sorting", url: "https://www.nngroup.com/articles/card-sorting-definition/", source: "Nielsen Norman Group", type: "article", level: "intro", note: "How to discover users' mental models of content." },
      { title: "Information architecture", url: "https://en.wikipedia.org/wiki/Information_architecture", source: "Wikipedia", type: "article", level: "intro", note: "History and key concepts of IA." },
      { title: "Navigation patterns (Material Design)", url: "https://m3.material.io/", source: "Google Material Design", type: "docs", level: "intermediate", note: "Guidelines for navigation bars, rails and drawers." },
    ],
    "visual-design": [
      { title: "Laws of UX", url: "https://lawsofux.com/", source: "Jon Yablonski", type: "article", level: "intro", note: "Gestalt principles and psychology laws with examples." },
      { title: "Butterick's Practical Typography", url: "https://practicaltypography.com/", source: "Matthew Butterick", type: "book", level: "intermediate", note: "Free online book on typography essentials." },
      { title: "Material Design 3 — colour and type", url: "https://m3.material.io/", source: "Google Material Design", type: "docs", level: "intermediate", note: "Colour roles, type scales and hierarchy." },
    ],
    "interaction-usability": [
      { title: "10 Usability Heuristics for User Interface Design", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", source: "Nielsen Norman Group", type: "article", level: "intro", note: "The canonical heuristics with examples." },
      { title: "Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/", source: "Apple", type: "docs", level: "intermediate", note: "Platform conventions for interaction and feedback." },
      { title: "Fitts's law", url: "https://en.wikipedia.org/wiki/Fitts%27s_law", source: "Wikipedia", type: "article", level: "intermediate", note: "Why target size and distance matter." },
    ],
    "accessibility-testing": [
      { title: "WCAG 2 Overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", source: "W3C WAI", type: "docs", level: "intermediate", note: "The international accessibility standard." },
      { title: "Accessibility (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility", source: "MDN Web Docs", type: "docs", level: "intro", note: "Practical guides for accessible HTML, CSS and ARIA." },
      { title: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", source: "WebAIM", type: "docs", level: "intro", note: "Check colour pairs against AA/AAA ratios." },
      { title: "Usability testing 101", url: "https://www.nngroup.com/articles/usability-testing-101/", source: "Nielsen Norman Group", type: "article", level: "intro", note: "Plan, run and analyse a usability test." },
    ],
  },
  competencies: [
    { id: "research", name: "User research", description: "Plan research and turn findings into insight.", lessons: ["ux-design/design-thinking-research/design-thinking", "ux-design/design-thinking-research/user-research"] },
    { id: "ia", name: "Information architecture", description: "Structure content and navigation around mental models.", lessons: ["ux-design/information-architecture/ia-fundamentals", "ux-design/information-architecture/navigation-user-flows"] },
    { id: "visual", name: "Visual design", description: "Use hierarchy, contrast, colour and type.", lessons: ["ux-design/visual-design/hierarchy-contrast-gestalt", "ux-design/visual-design/colour-typography"] },
    { id: "interaction", name: "Interaction & usability", description: "Apply interaction principles and evaluate with heuristics.", lessons: ["ux-design/interaction-usability/interaction-principles", "ux-design/interaction-usability/nielsen-heuristics"] },
    { id: "a11y", name: "Accessibility", description: "Design and audit for WCAG conformance.", lessons: ["ux-design/accessibility-testing/accessibility"] },
    { id: "testing", name: "Prototyping & testing", description: "Prototype and run usability tests.", lessons: ["ux-design/accessibility-testing/prototyping-testing"] },
  ],
};
