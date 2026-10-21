import type { CourseResources } from "./types";

export const economicsResources: CourseResources = {
  course: "economics",
  caseStudies: [
    {
      slug: "onion-price-spike",
      title: "The onion price spike",
      summary: "A late monsoon cuts the onion harvest and prices triple. Supply, demand and elasticity explain why — and what policy can and can't do.",
      units: ["supply-and-demand", "money-and-inflation"],
      minutes: 15,
      scenario: `Onions are a staple in almost every Indian kitchen. In this fictionalised season, unseasonal rain in the main growing districts destroyed part of the kharif crop and delayed the late-kharif harvest. Arrivals at a large wholesale market fell by about a third over six weeks.

Wholesale prices climbed from ₹22/kg to ₹68/kg. Households complained loudly, but sales volumes fell far less than prices rose. Traders were accused of hoarding. The government considered three responses: an export ban, releasing a buffer stock it had procured earlier, and a cap on retail prices.`,
      data: {
        caption: "Wholesale market, average of selected weeks",
        headers: ["Period", "Daily arrivals (tonnes)", "Modal price (₹/kg)"],
        rows: [
          ["Normal (before rain)", "1,500", "22"],
          ["Week 3 after rain", "1,150", "41"],
          ["Week 6 after rain", "1,000", "68"],
          ["Week 10 (buffer stock + new crop)", "1,420", "30"],
        ],
      },
      questions: [
        "Draw (or describe) the shift that caused the price spike. Which curve moved and why?",
        "Estimate the price elasticity of demand from the normal and week-6 rows using the midpoint method. Is demand elastic or inelastic?",
        "Why does inelastic demand make price swings so large when supply falls?",
        "Predict the likely effects of a strict retail price cap at ₹30/kg while supply is still low.",
        "How might a food-price shock show up in headline CPI inflation, and should the central bank react?",
      ],
      outcome: `The **supply curve shifted left** (fewer onions available at every price); demand barely moved. Midpoint elasticity ≈ (−500/1,250) ÷ (46/45) ≈ −0.39 — strongly **inelastic**, because onions have few substitutes in daily cooking and are a small share of the total budget.

With inelastic demand, a small fall in quantity needs a large price rise to ration the remaining supply. A binding price cap would create a **shortage**: queues, informal markets and less incentive to bring stored onions to market. Releasing buffer stock and the arrival of new crop shifted supply back right, bringing prices down to about ₹30.

Food has a large weight in India's CPI, so the spike raised headline inflation temporarily. Central banks generally "look through" one-off supply shocks unless they feed into wages and expectations — they watch *core* inflation for that.`,
      takeaways: [
        "Separate shifts *of* a curve from movements *along* it.",
        "Inelastic demand turns small supply shocks into large price swings.",
        "Price ceilings below equilibrium create shortages.",
        "Supply-driven inflation calls for a different response than demand-driven inflation.",
      ],
    },
    {
      slug: "telecom-price-war",
      title: "The telecom price war",
      summary: "A new entrant offers free calls and cheap data, forcing an oligopoly to cut prices. Game theory explains the market's sudden reshuffle.",
      units: ["market-structures"],
      minutes: 17,
      scenario: `For years a country's mobile market was served by four large operators. Prices were stable and data was expensive at around ₹200 per GB. Each firm watched the others closely: when one cut tariffs, others followed within days, so no one gained much by cutting first.

Then a well-funded entrant launched with free voice calls and data at under ₹50 per GB, backed by a huge new 4G network. Within a year data usage per subscriber rose more than tenfold. Two smaller incumbents merged, one exited, and industry profits collapsed before slowly recovering as the remaining three firms raised tariffs together.`,
      data: {
        caption: "Stylised payoff matrix for two incumbents (annual profit, ₹ thousand crore)",
        headers: ["", "Firm B keeps price high", "Firm B cuts price"],
        rows: [
          ["Firm A keeps price high", "A: 12, B: 12", "A: 4, B: 15"],
          ["Firm A cuts price", "A: 15, B: 4", "A: 7, B: 7"],
        ],
      },
      questions: [
        "Find each firm's dominant strategy in the payoff matrix. What is the Nash equilibrium?",
        "Why could the incumbents sustain high prices before the entrant arrived, even without a formal agreement?",
        "Why did the entrant's low prices force the market towards fewer firms?",
        "Was the price war good for consumers in the short run and the long run? Consider prices, variety and investment.",
      ],
      outcome: `Cutting is the dominant strategy for both (15 > 12 and 7 > 4), so the one-shot Nash equilibrium is (cut, cut) with 7 each — a **prisoner's dilemma**: both would prefer (high, high). In a *repeated* game, firms can sustain high prices by tacitly matching any cut ("tit-for-tat"), which is what the incumbents did.

The entrant changed the game: with deep pockets and lower average costs on a new network, it was willing to accept losses for market share. Incumbents with high fixed costs and debt couldn't match prices profitably, leading to consolidation — a classic route from a four-firm to a three-firm oligopoly.

Consumers gained hugely from cheap data in the short run. In the long run, fewer competitors and coordinated tariff rises raised concerns, so regulators watch concentration (e.g. the Herfindahl–Hirschman Index) and spectrum policy closely.`,
      takeaways: [
        "Oligopolists face strategic interdependence; game theory models it.",
        "Repeated interaction can sustain tacit collusion that one-shot games predict won't last.",
        "Entry by a low-cost rival can break collusion and trigger consolidation.",
        "Competition policy weighs short-run prices against long-run market structure.",
      ],
    },
  ],
  readings: {
    "supply-and-demand": [
      { title: "Principles of Economics 3e (OpenStax)", url: "https://openstax.org/details/books/principles-economics-3e", source: "OpenStax", type: "book", level: "intro", note: "Free textbook; chapters 3–5 on demand, supply and elasticity." },
      { title: "Microeconomics", url: "https://www.khanacademy.org/economics-finance-domain/microeconomics", source: "Khan Academy", type: "course", level: "intro", note: "Video lessons and practice on market equilibrium." },
      { title: "Principles of Microeconomics (14.01)", url: "https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/", source: "MIT OpenCourseWare", type: "course", level: "intermediate", note: "Jonathan Gruber's lectures with problem sets." },
    ],
    "market-structures": [
      { title: "Principles of Economics — monopoly & oligopoly", url: "https://openstax.org/details/books/principles-economics-3e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 8–10 on competition, monopoly and oligopoly." },
      { title: "Prisoner's dilemma", url: "https://en.wikipedia.org/wiki/Prisoner%27s_dilemma", source: "Wikipedia", type: "article", level: "intro", note: "The canonical game and its repeated version." },
      { title: "Game Theory (Ben Polak)", url: "https://oyc.yale.edu/economics/econ-159", source: "Open Yale Courses", type: "course", level: "advanced", note: "A full university course on strategic thinking." },
      { title: "Herfindahl–Hirschman index", url: "https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index", source: "Wikipedia", type: "article", level: "intermediate", note: "How regulators measure market concentration." },
    ],
    "gdp-and-growth": [
      { title: "Macroeconomics", url: "https://www.khanacademy.org/economics-finance-domain/macroeconomics", source: "Khan Academy", type: "course", level: "intro", note: "GDP accounting and growth models." },
      { title: "Our World in Data — economic growth", url: "https://ourworldindata.org/economic-growth", source: "Our World in Data", type: "article", level: "intro", note: "Long-run GDP data with interactive charts." },
      { title: "World Bank Open Data", url: "https://data.worldbank.org/", source: "World Bank", type: "docs", level: "intermediate", note: "Download GDP, population and development indicators." },
    ],
    "money-and-inflation": [
      { title: "Monetary policy", url: "https://www.rbi.org.in/Scripts/Annualpolicy.aspx", source: "Reserve Bank of India", type: "article", level: "intermediate", note: "RBI monetary policy statements and the repo rate." },
      { title: "Principles of Economics — money and banking", url: "https://openstax.org/details/books/principles-economics-3e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 27–28: money creation and central banks." },
      { title: "Inflation", url: "https://en.wikipedia.org/wiki/Inflation", source: "Wikipedia", type: "article", level: "intro", note: "Causes, measurement and history of inflation." },
    ],
    "fiscal-policy-trade": [
      { title: "Principles of Economics — government budgets & trade", url: "https://openstax.org/details/books/principles-economics-3e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 19–20 and 30–33." },
      { title: "Comparative advantage", url: "https://en.wikipedia.org/wiki/Comparative_advantage", source: "Wikipedia", type: "article", level: "intro", note: "Ricardo's insight with numerical examples." },
      { title: "Union Budget", url: "https://www.indiabudget.gov.in/", source: "Government of India", type: "docs", level: "intermediate", note: "Budget documents and the Economic Survey." },
    ],
  },
  competencies: [
    { id: "markets", name: "Markets & equilibrium", description: "Analyse supply, demand and price changes.", lessons: ["economics/supply-and-demand/market-equilibrium"] },
    { id: "elasticity", name: "Elasticity", description: "Measure and interpret responsiveness to price.", lessons: ["economics/supply-and-demand/elasticity"] },
    { id: "structures", name: "Market structures", description: "Compare competition, monopoly and oligopoly.", lessons: ["economics/market-structures/competition-vs-monopoly", "economics/market-structures/oligopoly-game-theory"] },
    { id: "macro", name: "Measuring the economy", description: "Interpret GDP and explain long-run growth.", lessons: ["economics/gdp-and-growth/measuring-gdp", "economics/gdp-and-growth/economic-growth"] },
    { id: "monetary", name: "Money & inflation", description: "Explain inflation and monetary policy.", lessons: ["economics/money-and-inflation/inflation", "economics/money-and-inflation/monetary-policy"] },
    { id: "policy", name: "Fiscal policy & trade", description: "Evaluate budgets, multipliers and trade.", lessons: ["economics/fiscal-policy-trade/fiscal-policy", "economics/fiscal-policy-trade/international-trade"] },
  ],
};
