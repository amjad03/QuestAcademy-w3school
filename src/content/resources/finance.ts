import type { CourseResources } from "./types";

export const financeResources: CourseResources = {
  course: "finance",
  caseStudies: [
    {
      slug: "bakery-oven-npv",
      title: "Should the bakery buy the ₹18 lakh oven?",
      summary: "A family bakery uses NPV, IRR and payback to decide on a big equipment upgrade — and discovers the answers disagree.",
      units: ["capital-budgeting", "time-value-of-money"],
      minutes: 16,
      scenario: `A family-run bakery in Pune sells about 1,400 loaves and 900 buns a day. Its two deck ovens are 14 years old, waste gas and limit output during the Diwali rush. A supplier offers a modern convection oven for **₹18 lakh** installed, with a useful life of 6 years and a resale (salvage) value of ₹2 lakh at the end.

The owner's daughter, a commerce student, estimates the new oven will raise yearly *after-tax* cash flow through lower gas bills, less wastage and extra festival sales. Growth is front-loaded: the first two years benefit most from pent-up demand, then a competitor is expected to open nearby.

The bakery can borrow from its bank at 11%, and the family considers **12%** a fair required return given the risk. Her uncle argues for a simpler rule: "Only buy machines that pay for themselves in 3 years."`,
      data: {
        caption: "Forecast incremental after-tax cash flows (₹ lakh)",
        headers: ["Year", "0", "1", "2", "3", "4", "5", "6"],
        rows: [
          ["Cash flow", "−18.0", "5.5", "5.5", "4.0", "3.5", "3.0", "3.0 + 2.0 salvage"],
          ["Discount factor at 12%", "1.000", "0.893", "0.797", "0.712", "0.636", "0.567", "0.507"],
        ],
      },
      questions: [
        "Compute the payback period. Does the project pass the uncle's 3-year rule?",
        "Using the discount factors, compute the NPV at 12%. Should the bakery invest?",
        "The IRR turns out to be about 13%. Explain what this number means in plain language.",
        "Which of the three rules ignores cash flows after the cut-off, and why is that a problem here?",
        "List two risks to the forecast and how a sensitivity analysis would help.",
      ],
      outcome: `Cumulative cash flow reaches 5.5 + 5.5 + 4.0 = 15.0 after 3 years and 18.5 after 4, so payback is about **3.9 years** — it *fails* the 3-year rule.

Discounted inflows: 4.91 + 4.38 + 2.85 + 2.23 + 1.70 + 2.54 ≈ ₹18.61 lakh, giving **NPV ≈ +₹0.61 lakh**. The project creates value at a 12% hurdle, and an IRR of about 13% means the oven earns roughly 13% a year on the money tied up — above the cost of capital.

Payback ignores years 5–6 and the salvage value, and ignores the time value of money. The family ran a sensitivity check: if year-1 and year-2 sales were 20% lower, NPV turned slightly negative. They negotiated a ₹1 lakh discount and a 2-year service warranty, which restored a comfortable positive NPV, and bought the oven.`,
      takeaways: [
        "NPV is the decision rule most directly tied to creating value.",
        "Payback is a liquidity heuristic, not a value measure — it ignores later cash flows and discounting.",
        "IRR is intuitive but can mislead with unusual cash-flow patterns; check it against NPV.",
        "A positive but thin NPV calls for sensitivity analysis before committing.",
      ],
    },
    {
      slug: "profitable-but-out-of-cash",
      title: "Profitable on paper, out of cash in the bank",
      summary: "A growing electronics distributor shows rising profits while its cash runs dry. Reading the three statements together explains why.",
      units: ["financial-statements", "ratio-analysis"],
      minutes: 15,
      scenario: `BrightWire Distributors supplies cables and switches to electrical contractors. To win market share, the founder offered contractors **90-day credit** instead of the usual 30 days and stocked up on inventory ahead of an expected price increase.

Sales grew 45% in one year and the income statement showed record profit. Yet by March the company was struggling to pay suppliers and had to draw its overdraft to the limit. The bank asked for an explanation before renewing the credit line.`,
      data: {
        caption: "Selected figures (₹ crore)",
        headers: ["Item", "Last year", "This year"],
        rows: [
          ["Revenue", "40.0", "58.0"],
          ["Net profit", "2.4", "3.5"],
          ["Trade receivables", "3.3", "14.3"],
          ["Inventory", "5.0", "9.0"],
          ["Trade payables", "4.0", "4.6"],
          ["Cash from operations", "+2.9", "−6.6"],
          ["Current liabilities (total)", "6.5", "11.8"],
          ["Current assets (total)", "10.1", "24.0"],
        ],
      },
      questions: [
        "How can net profit rise while cash from operations turns sharply negative? Use the working-capital lines.",
        "Compute days sales outstanding (receivables ÷ revenue × 365) for both years.",
        "Compute the current ratio for both years. Why is a higher current ratio *not* reassuring here?",
        "What would you advise the founder to change, and what would the bank want to see?",
      ],
      outcome: `Profit counts sales when they're made, but cash arrives only when customers pay. Receivables rose by ₹11.0 crore and inventory by ₹4.0 crore, while payables rose only ₹0.6 crore — so about ₹14.4 crore of cash was absorbed into working capital, swamping the ₹3.5 crore profit.

DSO jumped from about **30 days** (3.3/40 × 365) to about **90 days** (14.3/58 × 365). The current ratio *rose* from 1.55 to 2.03, but only because illiquid receivables and stock piled up; the quick picture was much worse.

BrightWire tightened credit to 45 days with a 2% early-payment discount, sold slow-moving stock, and gave the bank a 13-week cash-flow forecast. The overdraft was renewed with a covenant on DSO.`,
      takeaways: [
        "Profit is an opinion; cash is a fact — always read the cash-flow statement.",
        "Rapid growth consumes working capital and can starve a profitable business.",
        "Ratios need context: a rising current ratio can signal trouble, not strength.",
        "Credit policy is a financing decision as much as a sales decision.",
      ],
    },
  ],
  readings: {
    "time-value-of-money": [
      { title: "Principles of Finance (OpenStax)", url: "https://openstax.org/details/books/principles-finance", source: "OpenStax", type: "book", level: "intro", note: "Free textbook; chapters 7–8 cover time value of money and annuities." },
      { title: "Interest and debt", url: "https://www.khanacademy.org/economics-finance-domain/core-finance", source: "Khan Academy", type: "course", level: "intro", note: "Compound interest, present value and the Rule of 72." },
      { title: "Time value of money", url: "https://en.wikipedia.org/wiki/Time_value_of_money", source: "Wikipedia", type: "article", level: "intermediate", note: "Formulas for annuities, perpetuities and growing streams." },
    ],
    "capital-budgeting": [
      { title: "Principles of Finance — capital budgeting", url: "https://openstax.org/details/books/principles-finance", source: "OpenStax", type: "book", level: "intro", note: "Chapter 16 compares NPV, IRR and payback." },
      { title: "Net present value", url: "https://en.wikipedia.org/wiki/Net_present_value", source: "Wikipedia", type: "article", level: "intro", note: "Definition, worked examples and pitfalls." },
      { title: "Finance Theory I (15.401)", url: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/", source: "MIT OpenCourseWare", type: "course", level: "advanced", note: "MIT Sloan's core finance course with video lectures." },
    ],
    "financial-statements": [
      { title: "Principles of Accounting, Volume 1 (OpenStax)", url: "https://openstax.org/details/books/principles-financial-accounting", source: "OpenStax", type: "book", level: "intro", note: "How the income statement, balance sheet and cash-flow statement connect." },
      { title: "Beginner's Guide to Financial Statements", url: "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements", source: "US SEC", type: "article", level: "intro", note: "A short, plain-English regulator's guide." },
      { title: "Accounting and financial statements", url: "https://www.khanacademy.org/economics-finance-domain/core-finance", source: "Khan Academy", type: "course", level: "intro", note: "Video walk-throughs of the three statements." },
    ],
    "ratio-analysis": [
      { title: "DuPont analysis", url: "https://en.wikipedia.org/wiki/DuPont_analysis", source: "Wikipedia", type: "article", level: "intermediate", note: "Breaking ROE into margin, turnover and leverage." },
      { title: "Financial ratio", url: "https://en.wikipedia.org/wiki/Financial_ratio", source: "Wikipedia", type: "article", level: "intro", note: "Catalogue of liquidity, leverage and profitability ratios." },
      { title: "Principles of Finance — financial ratios", url: "https://openstax.org/details/books/principles-finance", source: "OpenStax", type: "book", level: "intro", note: "Chapter 6 with worked company examples." },
    ],
    "risk-and-return": [
      { title: "Capital asset pricing model", url: "https://en.wikipedia.org/wiki/Capital_asset_pricing_model", source: "Wikipedia", type: "article", level: "intermediate", note: "Beta, the security market line and its assumptions." },
      { title: "Modern portfolio theory", url: "https://en.wikipedia.org/wiki/Modern_portfolio_theory", source: "Wikipedia", type: "article", level: "intermediate", note: "Why diversification reduces risk." },
      { title: "Financial Markets (Robert Shiller)", url: "https://oyc.yale.edu/economics/econ-252-11", source: "Open Yale Courses", type: "course", level: "intermediate", note: "Yale lectures on risk, insurance and portfolio diversification." },
    ],
    "personal-finance": [
      { title: "Investor education", url: "https://investor.sebi.gov.in/", source: "SEBI", type: "article", level: "intro", note: "India's market regulator on mutual funds, SIPs and avoiding scams." },
      { title: "Personal finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance", source: "Khan Academy", type: "course", level: "intro", note: "Budgeting, credit, loans and investing basics." },
      { title: "Financial education resources", url: "https://www.rbi.org.in/FinancialEducation/Home.aspx", source: "Reserve Bank of India", type: "article", level: "intro", note: "RBI's financial literacy material on savings, credit and digital safety." },
    ],
  },
  competencies: [
    { id: "tvm", name: "Time value of money", description: "Compound, discount and value annuities.", lessons: ["finance/time-value-of-money/compounding-and-future-value", "finance/time-value-of-money/present-value-annuities"] },
    { id: "capbudget", name: "Capital budgeting", description: "Evaluate investments with NPV, IRR and payback.", lessons: ["finance/capital-budgeting/net-present-value", "finance/capital-budgeting/irr-and-payback"] },
    { id: "statements", name: "Reading financial statements", description: "Connect the income statement, balance sheet and cash flows.", lessons: ["finance/financial-statements/income-statement-balance-sheet", "finance/financial-statements/cash-flow-statement"] },
    { id: "ratios", name: "Ratio analysis", description: "Diagnose liquidity, leverage and profitability.", lessons: ["finance/ratio-analysis/liquidity-leverage", "finance/ratio-analysis/profitability-dupont"] },
    { id: "risk", name: "Risk & return", description: "Measure risk and price it with diversification and CAPM.", lessons: ["finance/risk-and-return/measuring-risk-return", "finance/risk-and-return/diversification-capm"] },
    { id: "personal", name: "Personal finance", description: "Budget, manage debt and invest sensibly.", lessons: ["finance/personal-finance/budgeting-debt", "finance/personal-finance/investing-basics"] },
  ],
};
