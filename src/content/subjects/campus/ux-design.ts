import type { Subject } from "@/content/types";

export const uxDesign: Subject = {
  slug: "ux-design",
  title: "UX Design",
  world: "campus",
  icon: "🎨",
  colors: ["#db2777", "#6366f1"],
  tagline: "Design products people understand, enjoy, and can actually use.",
  description:
    "A practical, research-backed course in user experience: the design-thinking process, user research, information architecture, visual design (hierarchy, contrast, colour, typography), interaction design and Nielsen's usability heuristics, accessibility, and prototyping and testing. Real product case studies throughout.",
  levels: ["UG", "PG", "Professional"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Design",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "design-thinking-research",
      title: "Design Thinking & User Research",
      icon: "🧭",
      description: "Frame the right problem, then learn what users actually need.",
      lessons: [
        {
          slug: "design-thinking",
          title: "The Design-Thinking Process",
          summary: "Double Diamond, the five modes, and turning insights into 'How might we…' questions.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A hospital asked designers to make its MRI machine less scary for children. Instead of redesigning the hardware, the team reframed the problem: what if the scan was an **adventure**? Painted pirate-ship rooms and a story about \"staying still so the pirates don't find you\" were reported to cut the number of children needing sedation dramatically. The breakthrough came from framing the problem differently, not from better engineering.",
            },
            { type: "illustration", emoji: "💎💎", caption: "The Double Diamond: diverge, converge, diverge, converge." },
            {
              type: "table",
              headers: ["Double Diamond phase", "Mode", "Goal"],
              rows: [
                ["Discover", "Diverge", "Research widely to understand people and context"],
                ["Define", "Converge", "Synthesise findings into a clear problem statement"],
                ["Develop", "Diverge", "Generate many possible solutions"],
                ["Deliver", "Converge", "Prototype, test, refine and ship the best one"],
              ],
            },
            {
              type: "text",
              md: "The Stanford d.school describes five overlapping modes: **Empathise → Define → Ideate → Prototype → Test**. Both models stress the same thing: spend real effort understanding the problem before committing to a solution, and **loop back** whenever testing teaches you something new.",
            },
            { type: "heading", text: "From insight to opportunity" },
            {
              type: "list",
              items: [
                "**Problem statement / point of view**: \"Busy commuters need a way to pay for parking in under 10 seconds because they are often late and juggling bags.\"",
                "**How might we…?** \"How might we make paying for parking as fast as tapping a metro card?\"",
                "Good HMW questions are broad enough to allow many ideas, narrow enough to be actionable.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Many product teams run a five-day **design sprint** (popularised at Google Ventures): map the problem, sketch solutions, decide, build a realistic prototype, and test it with five users, all in one week.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Design thinking is a linear checklist.\" The stages are modes you move between. A test result can send you straight back to research. Treating it as a waterfall with sticky notes misses the point.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "order",
                  q: "Order the Double Diamond phases.",
                  items: ["Discover", "Define", "Develop", "Deliver"],
                  explain: "Problem space first (Discover, Define), then solution space (Develop, Deliver).",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Spend time in the problem space before jumping to solutions.",
                "Alternate divergent (many options) and convergent (choose) thinking.",
                "Frame opportunities as 'How might we…?' questions.",
                "Iterate: testing feeds back into every earlier stage.",
              ],
            },
          ],
          flashcards: [
            { front: "Double Diamond", back: "Design Council model: Discover, Define (problem); Develop, Deliver (solution)." },
            { front: "Divergent thinking", back: "Generating many options without judging them yet." },
            { front: "Convergent thinking", back: "Evaluating and narrowing options to the best ones." },
            { front: "'How might we…' question", back: "A reframing of a problem as an open, actionable opportunity for ideas." },
            { front: "d.school's five modes", back: "Empathise, Define, Ideate, Prototype, Test." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In the Double Diamond, which phase produces a clear problem statement?",
              options: ["Discover", "Define", "Develop", "Deliver"],
              answer: 1,
              explain: "Define converges research findings into a focused problem.",
            },
            {
              kind: "truefalse",
              q: "In design thinking, testing a prototype can legitimately send the team back to user research.",
              answer: true,
              explain: "The process is iterative; new learning can reopen any earlier stage.",
            },
            {
              kind: "mcq",
              q: "Which is the best 'How might we' question?",
              options: [
                "How might we add a blue button?",
                "How might we fix everything about banking?",
                "How might we help first-time investors feel confident making their first deposit?",
                "Why are users confused?",
              ],
              answer: 2,
              explain: "It focuses on a user and an outcome, leaving room for many solutions. The others are too narrow, too broad, or not a HMW at all.",
            },
          ],
        },
        {
          slug: "user-research",
          title: "User Research Methods",
          summary: "Interviews, surveys, observation, personas and journey maps.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "\"Would you use an app that reminds you to drink water?\" Ninety per cent of people say yes. Three weeks after launch, almost nobody opens it. What people **say** they will do and what they **actually** do are different, and good research is built around that gap.",
            },
            {
              type: "table",
              headers: ["Method", "Type", "Best for", "Watch out for"],
              rows: [
                ["User interviews", "Qualitative, attitudinal", "Motivations, pain points, mental models", "Leading questions, small samples"],
                ["Contextual inquiry", "Qualitative, behavioural", "Seeing real workflows in context", "Time-consuming"],
                ["Surveys", "Quantitative, attitudinal", "Measuring how common something is", "Poorly worded questions, self-report bias"],
                ["Analytics", "Quantitative, behavioural", "What users do at scale", "Shows *what*, not *why*"],
                ["Diary studies", "Qualitative, longitudinal", "Behaviour over days or weeks", "Participant drop-off"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Interview like a researcher",
              md: "Ask about **past behaviour**, not hypothetical futures: \"Tell me about the last time you paid a bill late\" beats \"Would you use a bill reminder?\" Ask open questions, follow with \"why?\", and get comfortable with silence.",
            },
            { type: "heading", text: "Synthesising research" },
            {
              type: "list",
              items: [
                "**Affinity mapping**: cluster observations on sticky notes to reveal themes.",
                "**Personas**: evidence-based archetypes summarising goals, behaviours and frustrations of a user group.",
                "**Journey maps**: a timeline of a user's steps, thoughts and emotions across an experience, highlighting pain points.",
                "**Jobs to be done**: \"When I… I want to… so I can…\", focusing on the progress users are trying to make.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "In a widely told early Airbnb story, the founders visited hosts in New York and noticed that poor photos made listings unappealing. Rather than tweaking the website, they photographed homes themselves, and bookings in that city reportedly rose sharply. Going out to meet users revealed a problem no dashboard showed.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Personas are made-up characters with fun names and stock photos.\" A persona without research behind it just encodes the team's assumptions. Good personas are grounded in data and focus on goals and behaviours, not hobbies.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Analytics show 60% of users abandon a sign-up form at step 3. What is the best next research step to learn **why**?",
                  options: ["Run a larger survey about colours", "Watch users attempt the form in usability sessions or interviews", "Add more steps", "Ignore it; 40% finish"],
                  answer: 1,
                  explain: "Quantitative data shows where the problem is; qualitative observation reveals the cause.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Combine qualitative (why) and quantitative (how many) methods.",
                "Observe behaviour; do not rely only on what people say they would do.",
                "Ask about specific past experiences, not hypotheticals.",
                "Synthesise with affinity maps, personas and journey maps grounded in evidence.",
              ],
            },
          ],
          flashcards: [
            { front: "Qualitative research", back: "Rich, non-numerical insight into why people behave as they do (interviews, observation)." },
            { front: "Quantitative research", back: "Numerical data about how many or how much (surveys, analytics)." },
            { front: "Contextual inquiry", back: "Observing and interviewing users in their real environment while they work." },
            { front: "Persona", back: "A research-based archetype representing a group of users' goals and behaviours." },
            { front: "Journey map", back: "A visual timeline of a user's steps, thoughts and feelings across an experience." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which interview question is least likely to bias the answer?",
              options: [
                "Don't you love how fast our app is?",
                "Would you pay for a premium plan?",
                "Walk me through the last time you booked a train ticket.",
                "Isn't the old design confusing?",
              ],
              answer: 2,
              explain: "It is open and grounded in real past behaviour; the others are leading or hypothetical.",
            },
            {
              kind: "truefalse",
              q: "Analytics are excellent at explaining why users behave the way they do.",
              answer: false,
              explain: "Analytics reveal what happens at scale; qualitative methods reveal why.",
            },
            {
              kind: "multi",
              q: "Which are qualitative research methods? (Select all.)",
              options: ["User interviews", "Contextual inquiry", "A/B test conversion rates", "Diary studies"],
              answers: [0, 1, 3],
              explain: "A/B conversion rates are quantitative.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "information-architecture",
      title: "Information Architecture",
      icon: "🗺️",
      description: "Organising, labelling and connecting content so people can find their way.",
      lessons: [
        {
          slug: "ia-fundamentals",
          title: "Organising & Labelling Content",
          summary: "Mental models, card sorting, tree testing and sitemaps.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "You walk into an unfamiliar supermarket looking for soy sauce. Is it in \"International\", \"Condiments\" or \"Asian Foods\"? Every website has the same puzzle. **Information architecture (IA)** is the practice of organising and labelling content so it matches how users think, not how the organisation's org chart looks.",
            },
            {
              type: "list",
              items: [
                "**Organisation systems**: how content is grouped (by topic, task, audience, time, alphabet).",
                "**Labelling systems**: the words used for links and headings.",
                "**Navigation systems**: how people move around (global nav, breadcrumbs, local nav).",
                "**Search systems**: how people query content directly.",
              ],
            },
            { type: "heading", text: "Research methods for IA" },
            {
              type: "table",
              headers: ["Method", "How it works", "Answers"],
              rows: [
                ["Open card sort", "Users group topic cards and name the groups themselves", "How do users naturally categorise this content?"],
                ["Closed card sort", "Users sort cards into predefined categories", "Do our categories make sense?"],
                ["Tree testing", "Users find items in a text-only hierarchy (no visual design)", "Can people find things in our proposed structure?"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Breadth vs depth",
              md: "A very deep hierarchy forces many clicks; a very broad one overwhelms each page. Research generally favours moderately broad, shallower structures with clear, distinct labels.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Government digital services such as GOV.UK reorganised thousands of department-centred pages around user needs and tasks (\"Renew a passport\", \"Pay your tax\"), a landmark IA case study in moving from organisation-centred to user-centred structure.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Users will just use search, so structure doesn't matter.\" Many users browse first, search often fails on vague queries, and good IA also improves search results by giving content clear categories and labels.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You have drafted a new navigation hierarchy and want to check whether users can find 'Return an item' in it before any visual design exists. Which method fits best?",
                  options: ["Open card sort", "Tree testing", "A/B test", "Heatmap analysis"],
                  answer: 1,
                  explain: "Tree testing evaluates findability in a proposed text-only hierarchy.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "IA covers organisation, labelling, navigation and search.",
                "Match users' mental models, not internal company structure.",
                "Open card sorts generate structures; tree tests validate them.",
                "Clear, distinct labels matter as much as the hierarchy.",
              ],
            },
          ],
          flashcards: [
            { front: "Information architecture", back: "The structural design of shared information: organisation, labelling, navigation and search." },
            { front: "Open card sort", back: "Participants group content and create their own category names." },
            { front: "Tree testing", back: "Evaluating findability in a text-only version of a site hierarchy." },
            { front: "Mental model", back: "A user's internal understanding of how something works or is organised." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "In a closed card sort, participants invent their own category names.",
              answer: false,
              explain: "That is an open card sort. In a closed sort, categories are predefined.",
            },
            {
              kind: "mcq",
              q: "A university website groups pages by internal department names that students do not recognise. The main IA problem is…",
              options: ["Too much white space", "Labels reflect the organisation, not users' mental models", "Search is too fast", "Too few colours"],
              answer: 1,
              explain: "Labels and groupings should match how students think about their tasks.",
            },
            {
              kind: "multi",
              q: "Which are core components of information architecture? (Select all.)",
              options: ["Organisation systems", "Labelling systems", "Navigation systems", "Brand colour palette"],
              answers: [0, 1, 2],
              explain: "Colour is visual design; search systems complete the classic four components.",
            },
          ],
        },
        {
          slug: "navigation-user-flows",
          title: "Navigation, User Flows & Choice",
          summary: "Designing paths through a product, and the laws that govern choice and pointing.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A food-delivery app tested a redesign with 40 menu options on its home screen, hoping more choice would mean more orders. Instead, people took longer to decide and many gave up. Choice has a cost, and navigation design manages it.",
            },
            { type: "heading", text: "User flows" },
            {
              type: "text",
              md: "A **user flow** maps the steps a user takes to complete a task: entry point, screens, decisions and end point. Drawing it exposes dead ends, unnecessary steps and missing error paths before anyone writes code.",
            },
            {
              type: "formula",
              tex: "T = b \\log_2(n + 1)",
              caption: "Hick's law: decision time grows with the logarithm of the number of equally likely choices n.",
            },
            {
              type: "formula",
              tex: "MT = a + b \\log_2\\!\\left(\\frac{D}{W} + 1\\right)",
              caption: "Fitts's law: time to reach a target grows with distance D and shrinks with target width W.",
            },
            {
              type: "list",
              items: [
                "**Hick's law in practice**: group and progressively disclose options instead of showing everything at once.",
                "**Fitts's law in practice**: make primary buttons large and place them where thumbs and cursors already are; screen edges and corners are easy targets on desktop.",
                "**Jakob's law**: users spend most of their time on other sites, so they expect yours to work the same way. Put the cart top-right, the logo top-left linking home.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Using Hick's law with b = 0.2 s, how long (in seconds) does choosing among 7 equally likely options take?",
                  answer: 0.6,
                  tolerance: 0.01,
                  unit: "s",
                  explain: "$0.2 \\times \\log_2(8) = 0.2 \\times 3 = 0.6$ s.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Mobile apps moved key navigation to **bottom tab bars** as phones grew larger, because the top of a big screen is hard to reach one-handed: Fitts's law applied to thumbs.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"The three-click rule: users leave if anything takes more than three clicks.\" Studies have not found that click count alone predicts abandonment. What matters is that each click feels like clear progress toward the goal (sometimes called *information scent*).",
            },
            {
              type: "keypoints",
              items: [
                "Map user flows to find dead ends and redundant steps.",
                "Hick's law: more options, slower decisions; use grouping and progressive disclosure.",
                "Fitts's law: big, close targets are faster to hit.",
                "Follow conventions (Jakob's law) unless you have a strong reason not to.",
              ],
            },
          ],
          flashcards: [
            { front: "User flow", back: "A diagram of the path a user takes through a product to complete a task." },
            { front: "Hick's law", back: "Decision time increases logarithmically with the number of choices." },
            { front: "Fitts's law", back: "Movement time to a target depends on distance and target size." },
            { front: "Jakob's law", back: "Users expect your product to work like the others they already use." },
            { front: "Progressive disclosure", back: "Showing only essential options first and revealing advanced ones on demand." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "According to Fitts's law, which change makes a 'Buy' button fastest to click?",
              options: ["Making it smaller and farther away", "Making it larger and closer to the user's focus", "Changing its colour only", "Adding a tooltip"],
              answer: 1,
              explain: "Larger width and shorter distance reduce movement time.",
            },
            {
              kind: "truefalse",
              q: "Hick's law suggests that doubling the number of menu options doubles decision time.",
              answer: false,
              explain: "Decision time grows logarithmically, so doubling options adds a roughly constant amount, not double.",
            },
            {
              kind: "fill",
              q: "Showing basic options first and revealing advanced settings only when requested is called progressive ___.",
              answer: ["disclosure"],
              explain: "Progressive disclosure reduces complexity for most users while keeping power features available.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "visual-design",
      title: "Visual Design Principles",
      icon: "🖌️",
      description: "Hierarchy, contrast, Gestalt grouping, colour and typography.",
      lessons: [
        {
          slug: "hierarchy-contrast-gestalt",
          title: "Hierarchy, Contrast & Gestalt",
          summary: "Guiding the eye so the most important thing is seen first.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Glance at a newspaper front page for one second. You saw the headline, the big photo, maybe a subheading. You did not read the weather box. That ordering was designed. **Visual hierarchy** controls what people notice first, second and last.",
            },
            {
              type: "table",
              headers: ["Tool", "How it creates hierarchy"],
              rows: [
                ["Size", "Bigger elements are seen first"],
                ["Contrast", "High contrast against surroundings draws attention"],
                ["Colour", "Saturated or accent colours pop against neutrals"],
                ["Position", "Top-left (in left-to-right languages) and centre attract early fixations"],
                ["White space", "Isolation makes an element feel important"],
                ["Weight", "Bold type stands out from regular"],
              ],
            },
            { type: "heading", text: "Gestalt principles of grouping" },
            {
              type: "list",
              items: [
                "**Proximity**: items close together are seen as a group (labels belong to the field nearest them).",
                "**Similarity**: items that look alike seem related (all links share one colour).",
                "**Common region**: items inside the same border or card belong together.",
                "**Closure**: we complete incomplete shapes (icons can be minimal).",
                "**Continuity**: we follow lines and curves (carousels hint that content continues).",
                "**Figure–ground**: we separate a foreground from its background (modals dim the page).",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "The squint test",
              md: "Squint at your design (or blur a screenshot). Whatever you can still see is your hierarchy. If everything blurs into the same grey, nothing stands out and users will not know where to look.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Design systems such as Google's Material Design and IBM's Carbon codify hierarchy into reusable tokens: a fixed type scale, spacing units and button variants (primary, secondary, tertiary), so hundreds of teams produce consistent pages.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Make everything important stand out.\" If everything is bold and red, nothing is. Hierarchy needs restraint: one clear primary action per screen, with secondary actions visually quieter.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A form places each label far from its input, closer to the input below. Which Gestalt principle is being violated?",
                  options: ["Closure", "Proximity", "Continuity", "Figure–ground"],
                  answer: 1,
                  explain: "Labels should sit nearest their own fields; otherwise proximity groups them with the wrong input.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Hierarchy uses size, contrast, colour, position, weight and space.",
                "Gestalt principles explain how people perceive groups.",
                "One clear primary action per view.",
                "Use the squint test to check what stands out.",
              ],
            },
          ],
          flashcards: [
            { front: "Visual hierarchy", back: "Arrangement of elements to signal their order of importance." },
            { front: "Proximity (Gestalt)", back: "Elements near each other are perceived as related." },
            { front: "Similarity (Gestalt)", back: "Elements sharing visual traits are perceived as related." },
            { front: "Figure–ground", back: "Perceiving an object (figure) as distinct from its background." },
          ],
          quiz: [
            {
              kind: "multi",
              q: "Which are Gestalt principles? (Select all.)",
              options: ["Proximity", "Similarity", "Fitts's law", "Closure"],
              answers: [0, 1, 3],
              explain: "Fitts's law is about movement time, not perception of grouping.",
            },
            {
              kind: "mcq",
              q: "A pricing page has three plans, all styled identically. To guide users to the recommended plan, the best approach is…",
              options: [
                "Make every plan bold",
                "Raise contrast and size slightly on the recommended plan and add a clear label",
                "Remove the other plans' prices",
                "Use a different font for each plan",
              ],
              answer: 1,
              explain: "A targeted change in contrast and emphasis creates hierarchy without hiding information.",
            },
            {
              kind: "truefalse",
              q: "Placing related items inside the same card uses the Gestalt principle of common region.",
              answer: true,
              explain: "A shared boundary signals that items belong together.",
            },
          ],
        },
        {
          slug: "colour-typography",
          title: "Colour & Typography",
          summary: "Palettes with purpose, readable type, and type scales.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Red means \"stop\" in traffic, \"danger\" on a button, \"luck\" at a Chinese New Year festival and, on a stock-market screen in mainland China, prices going **up**. Colour carries meaning, but that meaning is cultural and contextual, so it must be designed deliberately.",
            },
            { type: "heading", text: "Colour with purpose" },
            {
              type: "list",
              items: [
                "**Start neutral**: most of an interface is greys or off-whites; colour is the accent.",
                "**60-30-10 rule**: roughly 60% dominant, 30% secondary, 10% accent, a classic starting proportion.",
                "**Semantic colours**: success (green), warning (amber), error (red), info (blue), used consistently.",
                "**Never rely on colour alone**: about 1 in 12 men and 1 in 200 women have a colour-vision deficiency; pair colour with icons, text or patterns.",
              ],
            },
            {
              type: "formula",
              tex: "\\text{Contrast ratio} = \\frac{L_1 + 0.05}{L_2 + 0.05}",
              caption: "WCAG contrast: L₁ and L₂ are the relative luminances of the lighter and darker colours. Ranges from 1:1 to 21:1.",
            },
            { type: "heading", text: "Typography that reads well" },
            {
              type: "table",
              headers: ["Guideline", "Typical value"],
              rows: [
                ["Body text size (screen)", "16 px or larger"],
                ["Line length", "About 45–75 characters per line"],
                ["Line height for body text", "About 1.4–1.6 × font size"],
                ["Number of typefaces", "Usually one or two families"],
                ["Type scale ratio", "e.g. 1.25: 16 → 20 → 25 → 31.25 px"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "With a base size of 16 px and a type-scale ratio of 1.5, what size (px) is two steps up?",
                  answer: 36,
                  tolerance: 0.01,
                  unit: "px",
                  explain: "16 × 1.5 = 24, then 24 × 1.5 = 36.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Brands commission custom typefaces for consistency and licensing savings: Airbnb (Cereal), Netflix (Netflix Sans) and IBM (Plex) are well-known examples. Product teams then define a type scale as design tokens so every screen uses the same sizes.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Light grey text on white looks elegant, so it's fine.\" It often fails contrast requirements and is hard to read for many users, especially on phones outdoors. WCAG AA asks for at least **4.5:1** for normal body text.",
            },
            {
              type: "keypoints",
              items: [
                "Use colour sparingly and consistently, with semantic meaning.",
                "Never convey information by colour alone.",
                "Check contrast with the WCAG ratio.",
                "Readable type: 16 px+, 45–75 characters per line, generous line height, a consistent scale.",
              ],
            },
          ],
          flashcards: [
            { front: "60-30-10 rule", back: "A colour proportion guideline: 60% dominant, 30% secondary, 10% accent." },
            { front: "WCAG AA contrast for body text", back: "At least 4.5:1 (3:1 for large text)." },
            { front: "Comfortable line length", back: "About 45–75 characters per line." },
            { front: "Type scale", back: "A set of font sizes related by a fixed ratio (e.g. 1.25)." },
            { front: "Colour-vision deficiency prevalence", back: "About 1 in 12 men and 1 in 200 women." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the contrast ratio of pure white (L = 1) text on pure black (L = 0)?",
              answer: 21,
              tolerance: 0,
              unit: ":1",
              explain: "(1 + 0.05) / (0 + 0.05) = 21, the maximum possible.",
            },
            {
              kind: "mcq",
              q: "A form marks invalid fields only by turning their border red. What is the main accessibility problem?",
              options: ["Red is too bright", "Information is conveyed by colour alone", "The border is too thick", "Red is the wrong brand colour"],
              answer: 1,
              explain: "Users with colour-vision deficiency may miss it; add an icon and an error message.",
            },
            {
              kind: "truefalse",
              q: "Lines of body text 150 characters long are generally easier to read than lines of 65 characters.",
              answer: false,
              explain: "Very long lines make it hard to find the start of the next line; about 45–75 characters is comfortable.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "interaction-usability",
      title: "Interaction Design & Usability",
      icon: "🖱️",
      description: "Affordances, feedback and Nielsen's ten usability heuristics.",
      lessons: [
        {
          slug: "interaction-principles",
          title: "Affordances, Signifiers & Feedback",
          summary: "Don Norman's principles for designs that explain themselves.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "You walk up to a glass door with a flat metal plate on one side and a handle on the other. Do you push or pull? If you have ever pulled a push door, you have met a **\"Norman door\"**, named after Don Norman, whose book *The Design of Everyday Things* argued that when people struggle, it is usually the design's fault, not theirs.",
            },
            {
              type: "table",
              headers: ["Principle", "Meaning", "Digital example"],
              rows: [
                ["Affordance", "What actions an object makes possible", "A slider can be dragged"],
                ["Signifier", "A cue that shows where and how to act", "A raised button shape, an underlined link"],
                ["Feedback", "Immediate response confirming the action", "A button changes state; a spinner appears"],
                ["Mapping", "Clear relation between controls and effects", "Volume slider: right = louder"],
                ["Constraints", "Limiting possible actions to prevent errors", "Greying out 'Submit' until required fields are filled"],
                ["Conceptual model", "The user's understanding of how the system works", "A 'trash' folder you can restore from"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Response-time limits",
              md: "Classic HCI guidance: about **0.1 s** feels instant, about **1 s** keeps the user's flow of thought, and beyond about **10 s** you risk losing attention entirely, so show progress.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Skeleton screens (grey placeholder blocks while content loads), used by apps like LinkedIn and YouTube, give immediate feedback and make waits feel shorter than a blank screen with a spinner.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Flat, minimal design is always cleaner and therefore better.\" Removing every shadow and border can strip away signifiers, so users cannot tell what is clickable. Minimal is good only if it remains understandable.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "After tapping 'Pay', nothing visibly happens for three seconds, so users tap again and are charged twice. Which principle failed?",
                  options: ["Mapping", "Feedback", "Closure", "Hierarchy"],
                  answer: 1,
                  explain: "The system should immediately show that the action was received (and disable repeat taps).",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Affordances are possibilities; signifiers communicate them.",
                "Always give immediate feedback.",
                "Use natural mappings and helpful constraints.",
                "If users struggle, fix the design, not the users.",
              ],
            },
          ],
          flashcards: [
            { front: "Affordance", back: "A relationship between an object and a user that determines possible actions." },
            { front: "Signifier", back: "A perceivable cue indicating where and how to act." },
            { front: "Feedback (interaction design)", back: "Communicating the result of an action immediately." },
            { front: "Norman door", back: "A door (or any design) whose cues mislead people about how to use it." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Greying out the 'Next' button until a required field is filled is an example of…",
              options: ["A constraint", "Mapping", "Closure", "Anchoring"],
              answer: 0,
              explain: "It limits possible actions to prevent an error.",
            },
            {
              kind: "truefalse",
              q: "An underline on link text acts as a signifier.",
              answer: true,
              explain: "It signals that the text is clickable.",
            },
            {
              kind: "numeric",
              q: "According to classic response-time guidance, roughly how many seconds can a delay last before users' flow of thought is interrupted?",
              answer: 1,
              tolerance: 0.2,
              unit: "s",
              explain: "About 1 second; 0.1 s feels instant and 10 s risks losing attention.",
            },
          ],
        },
        {
          slug: "nielsen-heuristics",
          title: "Nielsen's 10 Usability Heuristics",
          summary: "The industry-standard checklist for spotting usability problems.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Jakob Nielsen's ten heuristics, refined with Rolf Molich and published in 1994, are still the most widely used rules of thumb in usability. A **heuristic evaluation** has a few experts inspect an interface against them, a fast, cheap way to catch many problems before testing with users.",
            },
            {
              type: "table",
              headers: ["#", "Heuristic", "Example"],
              rows: [
                ["1", "Visibility of system status", "Upload progress bar with percentage"],
                ["2", "Match between system and the real world", "Use 'Basket', not 'Order entity'"],
                ["3", "User control and freedom", "Undo, cancel, back"],
                ["4", "Consistency and standards", "The same icon always means the same thing"],
                ["5", "Error prevention", "Confirm before deleting; date pickers instead of free text"],
                ["6", "Recognition rather than recall", "Show recent searches instead of making users remember"],
                ["7", "Flexibility and efficiency of use", "Keyboard shortcuts for experts"],
                ["8", "Aesthetic and minimalist design", "Remove content that competes with what matters"],
                ["9", "Help users recognise, diagnose and recover from errors", "\"Card number has 15 digits; it needs 16\" instead of \"Error 402\""],
                ["10", "Help and documentation", "Searchable, task-focused help"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Usability expert Jared Spool described \"the 300-million-dollar button\": an e-commerce checkout forced customers to register before buying. Replacing it with a simple 'Continue' option and optional registration reportedly increased purchases enough to add hundreds of millions in revenue in a year. Heuristics 3 and 5 in action.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Rating severity",
              md: "Rate each problem 0–4 (0 = not a problem, 4 = usability catastrophe) based on frequency, impact and persistence, so the team fixes the worst first.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A heuristic evaluation replaces testing with real users.\" Experts catch many issues, but they are not your users. Heuristic evaluation complements usability testing; it does not replace it.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "An app shows the message \"Exception 0x80070005\" when a save fails. Which heuristic is most clearly violated?",
                  options: [
                    "Flexibility and efficiency of use",
                    "Help users recognise, diagnose and recover from errors",
                    "Aesthetic and minimalist design",
                    "Consistency and standards",
                  ],
                  answer: 1,
                  explain: "Error messages should use plain language, describe the problem and suggest a fix.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Ten heuristics cover status, language, control, consistency, prevention, recognition, efficiency, minimalism, error recovery and help.",
                "Heuristic evaluation is quick and cheap; use several evaluators.",
                "Rate severity to prioritise fixes.",
                "Always pair with real user testing.",
              ],
            },
          ],
          flashcards: [
            { front: "Heuristic 1", back: "Visibility of system status: keep users informed with timely feedback." },
            { front: "Recognition rather than recall", back: "Make options visible so users don't have to remember information." },
            { front: "User control and freedom", back: "Provide clear 'emergency exits' such as undo, cancel and back." },
            { front: "Error prevention", back: "Design to stop errors happening, e.g. confirmations and constraints." },
            { front: "Heuristic evaluation", back: "Expert inspection of an interface against usability principles." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Gmail's 'Undo send' feature best supports which heuristic?",
              options: ["User control and freedom", "Help and documentation", "Aesthetic and minimalist design", "Match with the real world"],
              answer: 0,
              explain: "It gives users an emergency exit from an action they did not mean to take.",
            },
            {
              kind: "mcq",
              q: "A search box showing your recent searches as suggestions supports…",
              options: ["Error recovery", "Recognition rather than recall", "Consistency and standards", "Help and documentation"],
              answer: 1,
              explain: "Users recognise past queries rather than having to recall and retype them.",
            },
            {
              kind: "numeric",
              q: "How many usability heuristics are in Nielsen's standard set?",
              answer: 10,
              tolerance: 0,
              explain: "Nielsen's set has ten heuristics.",
            },
            {
              kind: "truefalse",
              q: "Keyboard shortcuts for power users are an example of 'flexibility and efficiency of use'.",
              answer: true,
              explain: "Accelerators speed up expert use without getting in novices' way.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "accessibility-testing",
      title: "Accessibility, Prototyping & Testing",
      icon: "♿",
      description: "Design for everyone, then prove it works with real users.",
      lessons: [
        {
          slug: "accessibility",
          title: "Accessibility & Inclusive Design",
          summary: "WCAG, POUR, and practical techniques that help everyone.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Pavement kerb ramps were introduced for wheelchair users, but parents with prams, travellers with suitcases and delivery workers all use them. This is the **curb-cut effect**: designing for disability often improves the experience for everyone. The WHO estimates about **1.3 billion people**, roughly one in six, live with a significant disability.",
            },
            {
              type: "table",
              headers: ["POUR principle (WCAG)", "Meaning", "Example technique"],
              rows: [
                ["Perceivable", "Users can perceive the content", "Alt text for images; captions for video; sufficient contrast"],
                ["Operable", "Users can operate the interface", "Everything works with a keyboard; visible focus; no time traps"],
                ["Understandable", "Content and behaviour are clear", "Plain language; labelled inputs; predictable navigation"],
                ["Robust", "Works with assistive technologies", "Semantic HTML; valid ARIA used only when needed"],
              ],
            },
            {
              type: "code",
              lang: "html",
              runnable: true,
              caption: "Semantic, accessible markup: real buttons, labelled inputs, meaningful alt text.",
              code: "<!-- Inaccessible: no label, a div pretending to be a button -->\n<input type=\"email\" placeholder=\"Email\">\n<div class=\"btn\" onclick=\"subscribe()\">Go</div>\n\n<!-- Accessible -->\n<label for=\"email\">Email address</label>\n<input id=\"email\" type=\"email\" autocomplete=\"email\" required>\n<button type=\"submit\">Subscribe to newsletter</button>\n\n<img src=\"chart.png\" alt=\"Bar chart: mobile visits grew from 40% to 65% between 2020 and 2024\">",
            },
            {
              type: "table",
              headers: ["WCAG 2.x requirement", "Level AA", "Level AAA"],
              rows: [
                ["Contrast, normal text", "4.5:1", "7:1"],
                ["Contrast, large text (≥ 18 pt, or 14 pt bold)", "3:1", "4.5:1"],
                ["Target size (WCAG 2.2)", "At least 24 × 24 CSS px (with exceptions)", "At least 44 × 44 CSS px"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Accessibility is increasingly a legal requirement. The European Accessibility Act applies to many digital products and services from June 2025, and courts in several countries have ruled that inaccessible websites can breach disability-discrimination law. Many companies now include accessibility checks in their definition of done.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Accessibility only helps a small group of blind users.\" It also covers low vision, colour blindness, deafness, motor and cognitive disabilities, and temporary or situational limits: a broken arm, bright sunlight, a noisy train, an older parent. Captions are used by far more people than those who are deaf.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A custom dropdown can be opened with a mouse but not with the Tab and Enter keys. Which POUR principle fails?",
                  options: ["Perceivable", "Operable", "Understandable", "Robust"],
                  answer: 1,
                  explain: "All functionality must be operable via keyboard.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "WCAG is organised around POUR: perceivable, operable, understandable, robust.",
                "Use semantic HTML first; add ARIA only when needed.",
                "AA contrast: 4.5:1 for normal text, 3:1 for large text.",
                "Accessible design benefits everyone (the curb-cut effect).",
              ],
            },
          ],
          flashcards: [
            { front: "POUR", back: "Perceivable, Operable, Understandable, Robust: WCAG's four principles." },
            { front: "Alt text", back: "A text alternative describing an image's content or purpose for screen-reader users." },
            { front: "Curb-cut effect", back: "Features designed for disabled people that end up benefiting everyone." },
            { front: "WCAG AA contrast (normal text)", back: "4.5:1" },
            { front: "Semantic HTML", back: "Using elements for their meaning (button, nav, label) so assistive tech can interpret them." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What minimum contrast ratio does WCAG AA require for large text (x in x:1)?",
              answer: 3,
              tolerance: 0,
              unit: ":1",
              explain: "Large text needs 3:1 at AA; normal text needs 4.5:1.",
            },
            {
              kind: "multi",
              q: "Which practices improve accessibility? (Select all.)",
              options: ["Using a real <button> element for actions", "Visible keyboard focus styles", "Placeholder text as the only label", "Captions on videos"],
              answers: [0, 1, 3],
              explain: "Placeholders disappear when typing and are often low-contrast, so they are not a substitute for labels.",
            },
            {
              kind: "truefalse",
              q: "A decorative image with no informational value should have an empty alt attribute (alt=\"\").",
              answer: true,
              explain: "Empty alt text tells screen readers to skip it, reducing noise.",
            },
            {
              kind: "mcq",
              q: "Roughly what share of the world's population lives with a significant disability, according to the WHO?",
              options: ["About 1 in 100", "About 1 in 50", "About 1 in 6", "About 1 in 2"],
              answer: 2,
              explain: "The WHO estimates about 1.3 billion people, roughly 16%.",
            },
          ],
        },
        {
          slug: "prototyping-testing",
          title: "Prototyping & Usability Testing",
          summary: "Fidelity levels, think-aloud testing, SUS scores and A/B tests.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Before building the original PalmPilot, its inventor Jeff Hawkins reportedly carried a block of wood the size of the device in his shirt pocket, \"using\" it with a chopstick stylus in meetings to test what he would actually need. The cheapest prototype can answer the most important questions.",
            },
            {
              type: "table",
              headers: ["Fidelity", "Form", "Best for", "Cost to change"],
              rows: [
                ["Low", "Paper sketches, sticky notes, wireframes", "Concepts, flows, structure", "Very low"],
                ["Mid", "Clickable greyscale wireframes", "Navigation and layout", "Low"],
                ["High", "Polished interactive mock-ups (e.g. Figma)", "Visual detail, micro-interactions, stakeholder buy-in", "Higher"],
              ],
            },
            { type: "heading", text: "Running a usability test" },
            {
              type: "list",
              ordered: true,
              items: [
                "Define goals: what do you need to learn?",
                "Write realistic **tasks** (\"You need a train to Pune on Friday evening…\"), not instructions (\"Click Search\").",
                "Recruit participants who match your users.",
                "Ask them to **think aloud** while they work; do not help or lead.",
                "Record task success, time, errors and observations.",
                "Synthesise issues, rate severity, iterate, and test again.",
              ],
            },
            {
              type: "formula",
              tex: "P(\\text{found}) = 1 - (1 - L)^{n}",
              caption: "Nielsen and Landauer: share of problems found by n users, where L ≈ 0.31 is the chance one user reveals a given problem.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "With L = 0.31, what percentage of usability problems would 5 users be expected to reveal? (Nearest whole %.)",
                  answer: 84,
                  tolerance: 1.5,
                  unit: "%",
                  explain: "$1 - 0.69^5 = 1 - 0.156 = 0.844$, about 84–85%.",
                },
              ],
            },
            {
              type: "text",
              md: "The **System Usability Scale (SUS)** is a 10-item questionnaire scored 0–100; around **68** is average. **A/B tests** compare two live versions with real traffic to measure which performs better on a metric, great for *what* works, but not for *why*.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Mature product teams run continuous discovery: small usability tests every week or two rather than one big study before launch. Nielsen recommends several rounds of about five users each over one large round of fifteen.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Five users is enough for any study.\" The rule applies to finding qualitative usability problems in one fairly homogeneous user group per round. Measuring precise success rates, comparing designs statistically, or covering several distinct user groups needs larger samples.",
            },
            {
              type: "keypoints",
              items: [
                "Match prototype fidelity to the question you need answered.",
                "Give realistic tasks; ask users to think aloud; do not lead.",
                "About five users per round uncover most major issues; iterate in several rounds.",
                "SUS measures perceived usability; A/B tests measure behaviour at scale.",
              ],
            },
          ],
          flashcards: [
            { front: "Low-fidelity prototype", back: "A quick, rough representation (paper, wireframe) for testing concepts cheaply." },
            { front: "Think-aloud protocol", back: "Participants verbalise their thoughts while completing tasks." },
            { front: "System Usability Scale (SUS)", back: "A 10-item questionnaire giving a 0–100 usability score; about 68 is average." },
            { front: "A/B test", back: "Randomly showing users two versions to see which performs better on a metric." },
            { front: "Nielsen–Landauer formula", back: "Problems found = 1 − (1 − L)ⁿ, with L ≈ 0.31." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which task wording is best for a usability test?",
              options: [
                "Click the blue 'Book' button on the top right.",
                "You want to see a film with a friend on Saturday night. Book two seats.",
                "Do you like the booking page?",
                "Find the menu and then the bookings tab and then press next.",
              ],
              answer: 1,
              explain: "A realistic goal without UI hints reveals whether users can find their own way.",
            },
            {
              kind: "numeric",
              q: "A SUS questionnaire has raw contributions summing to 30 (after adjusting each item to 0–4). SUS multiplies this sum by 2.5. What is the SUS score?",
              answer: 75,
              tolerance: 0,
              explain: "30 × 2.5 = 75, above the average of about 68.",
            },
            {
              kind: "truefalse",
              q: "During a think-aloud test, the facilitator should explain how to use the interface when participants get stuck early.",
              answer: false,
              explain: "Helping hides the very problems you are trying to find. Note the struggle; only assist if the participant is completely blocked, and record it.",
            },
            {
              kind: "order",
              q: "Order these usability-testing steps.",
              items: ["Define goals", "Write realistic tasks", "Recruit representative participants", "Run think-aloud sessions", "Synthesise and prioritise issues"],
              explain: "Plan, write tasks, recruit, test, then analyse and iterate.",
            },
          ],
        },
      ],
    },
  ],
};
