import type { CourseResources } from "./types";

export const psychologyResources: CourseResources = {
  course: "psychology",
  caseStudies: [
    {
      slug: "rereading-vs-retrieval",
      title: "Two study groups, one exam: rereading vs retrieval",
      summary: "A first-year class tests whether self-quizzing beats rereading. The results surprise the students who felt most confident.",
      units: ["memory", "foundations"],
      minutes: 14,
      scenario: `A psychology lecturer ran a small classroom experiment with 120 first-year students (fictionalised but modelled on well-replicated studies). Students read a 1,500-word passage on the immune system, then were **randomly assigned** to one of two 30-minute study conditions:

- **Reread:** read the passage three more times.
- **Retrieve:** read it once more, then wrote down everything they could recall twice, without looking, checking the text in between.

Right after studying, students rated how well they expected to do. They were tested once after 5 minutes and, for half of each group, again after **one week**.`,
      data: {
        caption: "Mean recall (% of idea units) and predicted performance",
        headers: ["Condition", "Predicted score", "Recall at 5 min", "Recall at 1 week"],
        rows: [
          ["Reread (n = 60)", "78%", "81%", "42%"],
          ["Retrieve (n = 60)", "61%", "75%", "61%"],
        ],
      },
      questions: [
        "Identify the independent variable, dependent variable and one control. Why was random assignment important?",
        "Describe the pattern of results at 5 minutes versus one week.",
        "Why did the reread group feel *more* confident? Use the idea of fluency.",
        "Using what you know about memory consolidation and retrieval, explain why retrieval practice helps long-term retention.",
        "Design a one-week study plan for a student that applies these findings.",
      ],
      outcome: `The IV was the study method; the DV was recall; the passage, time on task and test were held constant. Random assignment spreads prior knowledge and motivation evenly, so differences can be attributed to the method.

Rereading won slightly at 5 minutes, but retrieval won clearly after a week — the **testing effect**. Rereading makes text feel familiar (*processing fluency*), which people mistake for learning, so the reread group over-predicted. Effortful recall strengthens and reorganises memory traces and shows students what they don't yet know.

A good plan mixes brief self-tests, spaced over several days, with feedback — exactly the "retrieve, check, space" loop many study apps are built around.`,
      takeaways: [
        "Feelings of fluency are a poor guide to durable learning.",
        "Retrieval practice and spacing improve long-term retention.",
        "Random assignment allows causal conclusions; correlation alone does not.",
        "Short-term performance can hide long-term differences — measure at a delay.",
      ],
    },
    {
      slug: "default-pension-enrolment",
      title: "The power of the default: automatic pension enrolment",
      summary: "A company switches retirement savings from opt-in to opt-out. Participation jumps — a lesson in heuristics and decision architecture.",
      units: ["cognition", "motivation-development"],
      minutes: 15,
      scenario: `A mid-sized IT services firm offered a retirement savings plan with a generous employer match: for every rupee an employee saved (up to 6% of salary), the company added 50 paise. Despite the "free money", only about 40% of new hires enrolled within their first year. In exit surveys, many said they *meant* to sign up "after sorting things out".

The HR team, advised by a behavioural-science consultant, changed one thing: new hires were **automatically enrolled** at 3% of salary, and could opt out or change the rate at any time with a two-minute online form.`,
      data: {
        caption: "Participation among new hires after 12 months",
        headers: ["Cohort", "Design", "Participation", "Median contribution"],
        rows: [
          ["2022 hires (n = 850)", "Opt-in", "41%", "6%"],
          ["2023 hires (n = 910)", "Auto-enrol at 3%", "89%", "3%"],
        ],
      },
      questions: [
        "Name at least two cognitive biases or heuristics that explain low opt-in participation.",
        "Why did participation rise so dramatically even though employees were free to opt out?",
        "The median contribution *fell* from 6% to 3%. Explain why, and propose a design that fixes this.",
        "Is it ethical for employers to use defaults this way? Consider autonomy and transparency.",
      ],
      outcome: `**Present bias** (overweighting today's spending) and **procrastination/status-quo bias** keep people in whatever state requires no action; choice overload and loss aversion add friction. A default works because inaction now produces saving, and the default is read as an implicit recommendation.

Many employees stuck at the 3% default — an **anchoring** effect — so some saved *less* than they would have chosen actively. The firm added "auto-escalation" (contributions rise 1 percentage point each year up to 6%, with easy opt-out), lifting the median to 5% by year three.

Defaults are generally considered ethical "nudges" when they're transparent, easy to change, and set in people's own interests — principles summarised by Thaler and Sunstein as libertarian paternalism.`,
      takeaways: [
        "Small changes in choice architecture can dominate large financial incentives.",
        "Status-quo bias makes defaults powerful in both directions.",
        "Defaults can anchor behaviour — design them carefully.",
        "Ethical nudges are transparent and easy to reverse.",
      ],
    },
  ],
  readings: {
    foundations: [
      { title: "Psychology 2e (OpenStax)", url: "https://openstax.org/details/books/psychology-2e", source: "OpenStax", type: "book", level: "intro", note: "Free textbook; chapters 2–3 cover research methods and biopsychology." },
      { title: "Introduction to Psychology (Paul Bloom)", url: "https://oyc.yale.edu/psychology/psyc-110", source: "Open Yale Courses", type: "course", level: "intro", note: "A popular Yale lecture series." },
      { title: "Replication crisis", url: "https://en.wikipedia.org/wiki/Replication_crisis", source: "Wikipedia", type: "article", level: "intermediate", note: "Why replication and pre-registration matter in psychology." },
    ],
    learning: [
      { title: "Psychology 2e — learning", url: "https://openstax.org/details/books/psychology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapter 6: classical, operant and observational learning." },
      { title: "Classical conditioning", url: "https://en.wikipedia.org/wiki/Classical_conditioning", source: "Wikipedia", type: "article", level: "intro", note: "Pavlov's experiments and modern extensions." },
      { title: "Bobo doll experiment", url: "https://en.wikipedia.org/wiki/Bobo_doll_experiment", source: "Wikipedia", type: "article", level: "intro", note: "Bandura's classic study of observational learning." },
    ],
    memory: [
      { title: "Psychology 2e — memory", url: "https://openstax.org/details/books/psychology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapter 8: encoding, storage and retrieval." },
      { title: "Retrieval Practice", url: "https://www.retrievalpractice.org/", source: "retrievalpractice.org", type: "article", level: "intro", note: "Research-based guides for students and teachers." },
      { title: "Testing effect", url: "https://en.wikipedia.org/wiki/Testing_effect", source: "Wikipedia", type: "article", level: "intermediate", note: "Summary of the evidence behind self-testing." },
      { title: "The Learning Scientists", url: "https://www.learningscientists.org/", source: "The Learning Scientists", type: "article", level: "intro", note: "Six evidence-based study strategies with downloadable materials." },
    ],
    cognition: [
      { title: "Psychology 2e — thinking and intelligence", url: "https://openstax.org/details/books/psychology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapter 7: problem-solving, heuristics and biases." },
      { title: "List of cognitive biases", url: "https://en.wikipedia.org/wiki/List_of_cognitive_biases", source: "Wikipedia", type: "article", level: "intro", note: "A broad catalogue with links to the original studies." },
      { title: "Judgment under Uncertainty: Heuristics and Biases", url: "https://doi.org/10.1126/science.185.4157.1124", source: "Science (Tversky & Kahneman, 1974)", type: "paper", level: "advanced", note: "The landmark paper on availability, representativeness and anchoring." },
    ],
    "motivation-development": [
      { title: "Psychology 2e — motivation, emotion & lifespan development", url: "https://openstax.org/details/books/psychology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 9–10." },
      { title: "Self-determination theory", url: "https://selfdeterminationtheory.org/theory/", source: "Center for Self-Determination Theory", type: "article", level: "intermediate", note: "Autonomy, competence and relatedness as drivers of motivation." },
      { title: "Piaget's theory of cognitive development", url: "https://en.wikipedia.org/wiki/Piaget%27s_theory_of_cognitive_development", source: "Wikipedia", type: "article", level: "intro", note: "The four stages and later critiques." },
    ],
  },
  competencies: [
    { id: "methods", name: "Research methods", description: "Design and critique studies; separate correlation from causation.", lessons: ["psychology/foundations/research-methods"] },
    { id: "bio", name: "Biological bases", description: "Relate brain structure to behaviour.", lessons: ["psychology/foundations/brain-and-behaviour"] },
    { id: "learning", name: "Learning theories", description: "Apply conditioning and observational learning.", lessons: ["psychology/learning/classical-conditioning", "psychology/learning/operant-observational"] },
    { id: "memory", name: "Memory & study science", description: "Explain memory and apply evidence-based study strategies.", lessons: ["psychology/memory/how-memory-works", "psychology/memory/spaced-repetition-retrieval"] },
    { id: "cognition", name: "Judgement & decision-making", description: "Recognise heuristics and biases in reasoning.", lessons: ["psychology/cognition/heuristics-problem-solving", "psychology/cognition/cognitive-biases"] },
    { id: "development", name: "Motivation & development", description: "Explain motivation, emotion and lifespan change.", lessons: ["psychology/motivation-development/motivation-emotion", "psychology/motivation-development/lifespan-development"] },
  ],
};
