import type { Pathway } from "./types";

export const uxDesigner: Pathway = {
  slug: "ux-designer",
  title: "UX Designer (Foundations)",
  goal: "Research users, structure information, design clear interfaces and test them — the core loop of a junior UX or product designer, backed by a small portfolio case study.",
  roles: ["Junior UX / product designer", "UI designer moving into UX", "Product manager or developer who designs"],
  skills: ["Design thinking", "User interviews & research synthesis", "Information architecture", "User flows", "Visual hierarchy & typography", "Usability heuristics", "Accessibility", "Prototyping & usability testing"],
  weeks: 10,
  prerequisites: ["Curiosity about how people use products", "No design software required (paper is fine)"],
  color: "#7C4DFF",
  modules: [
    {
      title: "Understand users",
      why: "Good design starts with real problems. Research keeps teams from building what nobody needs.",
      lessonIds: ["ux-design/design-thinking-research/design-thinking", "ux-design/design-thinking-research/user-research", "psychology/memory/how-memory-works"],
      assignment: {
        id: "ux-research-plan",
        title: "Research plan and interview synthesis",
        scenario:
          "A neighbourhood clinic wants an online appointment booking flow. Many patients are older adults. Plan five short interviews, run at least two (friends or family are fine), and synthesise what you learn.",
        deliverables: ["Research goals and 8–10 interview questions (open, non-leading)", "Notes from at least two interviews", "An affinity summary: 3–5 key insights and one ‘How might we…’ statement"],
        rubric: [
          { criterion: "Research questions", description: "Open, non-leading questions tied to clear goals.", points: 25 },
          { criterion: "Evidence", description: "Insights are backed by quotes or observations.", points: 25 },
          { criterion: "Synthesis", description: "Patterns grouped into meaningful insights, not a transcript.", points: 25 },
          { criterion: "Problem framing", description: "A focused, actionable ‘How might we’.", points: 25 },
        ],
        submission: "text",
        estimatedHours: 3,
        hints: ["Ask about the last time they booked an appointment, not hypotheticals.", "Look for workarounds — they reveal unmet needs."],
      },
    },
    {
      title: "Structure and flows",
      why: "If people can’t find it, it doesn’t exist. Information architecture and flows shape every screen that follows.",
      lessonIds: ["ux-design/information-architecture/ia-fundamentals", "ux-design/information-architecture/navigation-user-flows"],
      assignment: {
        id: "ux-flow",
        title: "Map the booking flow",
        scenario:
          "Using your research, design the information architecture and the main user flow for booking, rescheduling and cancelling an appointment.",
        deliverables: ["A sitemap / IA outline", "A step-by-step user flow (text or link to a diagram)", "Notes on decisions you made for older or low-confidence users"],
        rubric: [
          { criterion: "IA clarity", description: "Labels use users’ language; groupings are logical.", points: 25 },
          { criterion: "Flow completeness", description: "Covers happy path plus reschedule, cancel and error states.", points: 30 },
          { criterion: "Research link", description: "Decisions trace back to research insights.", points: 25 },
          { criterion: "Simplicity", description: "Minimises steps and choices (Hick’s law in practice).", points: 20 },
        ],
        submission: "link",
        estimatedHours: 3,
        hints: ["Paste a link to a FigJam/Miro board, or describe the flow step by step in text after the link.", "Design the error states — that’s where users get stuck."],
      },
    },
    {
      title: "Visual and interaction design",
      why: "Hierarchy, colour and feedback decide whether an interface feels obvious or confusing.",
      lessonIds: ["ux-design/visual-design/hierarchy-contrast-gestalt", "ux-design/visual-design/colour-typography", "ux-design/interaction-usability/interaction-principles", "ux-design/interaction-usability/nielsen-heuristics"],
      assignment: {
        id: "ux-heuristic-review",
        title: "Heuristic review of a real product",
        scenario:
          "Pick a website or app you use (e.g. a bank, food delivery or government portal). Evaluate one key task against Nielsen’s heuristics and propose improvements.",
        deliverables: ["Task chosen and screenshots/links", "At least 6 issues, each mapped to a heuristic with a severity rating (0–4)", "Before/after recommendations for the top 3 issues"],
        rubric: [
          { criterion: "Issue quality", description: "Specific, observable issues — not vague opinions.", points: 30 },
          { criterion: "Heuristic mapping", description: "Correct heuristics and sensible severity ratings.", points: 25 },
          { criterion: "Recommendations", description: "Concrete, feasible fixes for the top issues.", points: 25 },
          { criterion: "Presentation", description: "Clear, scannable write-up.", points: 20 },
        ],
        submission: "link",
        estimatedHours: 3,
        hints: ["Severity = frequency × impact × persistence.", "A Google Doc or Notion page link is fine."],
      },
    },
    {
      title: "Accessibility, prototyping and testing",
      why: "Inclusive design reaches more people, and testing with users beats any amount of internal debate.",
      lessonIds: ["ux-design/accessibility-testing/accessibility", "ux-design/accessibility-testing/prototyping-testing", "html/semantics-media/accessibility"],
      assignment: {
        id: "ux-capstone",
        title: "Capstone: prototype, test and write a case study",
        scenario:
          "Build a low- or mid-fidelity prototype of your booking flow, run a usability test with at least three people, iterate once, and write it up as a portfolio case study.",
        deliverables: ["Link to the prototype (Figma or similar)", "Test script, findings and the change you made", "A portfolio-ready case study: problem, research, process, outcome, what you’d do next"],
        rubric: [
          { criterion: "Prototype", description: "Covers the main flow and key states; realistic content.", points: 20 },
          { criterion: "Testing", description: "Task-based test with clear observations, not opinions.", points: 25 },
          { criterion: "Iteration", description: "Changes clearly respond to test findings.", points: 20 },
          { criterion: "Accessibility", description: "Contrast, target sizes and labels considered and documented.", points: 15 },
          { criterion: "Case study", description: "Tells a clear story with your role and reasoning.", points: 20 },
        ],
        submission: "link",
        estimatedHours: 6,
        hints: ["Five users find most usability problems; three is enough to iterate.", "Show messy work — reviewers want to see your thinking."],
      },
    },
  ],
};
