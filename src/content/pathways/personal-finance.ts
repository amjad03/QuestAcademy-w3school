import type { Pathway } from "./types";

export const personalFinance: Pathway = {
  slug: "personal-finance",
  title: "Personal Finance & Investing Basics",
  goal: "Take control of your money: build a budget and safety net, understand loans and inflation, and make informed long-term investing decisions. Educational only — not financial advice.",
  roles: ["Anyone managing a household budget", "Early-career professionals", "Small-business owners"],
  skills: ["Budgeting & cash-flow planning", "Emergency funds & debt strategy", "Compound growth", "Inflation-adjusted thinking", "Risk vs return", "Diversification", "Comparing fees", "Recognising money biases"],
  weeks: 6,
  prerequisites: ["Basic arithmetic and percentages"],
  color: "#2EBE70",
  modules: [
    {
      title: "Budgets, debt and safety nets",
      why: "A clear monthly budget and an emergency fund are the foundation every other money decision rests on.",
      lessonIds: ["finance/personal-finance/budgeting-debt", "economics/money-and-inflation/inflation"],
      assignment: {
        id: "pf-budget",
        title: "Build a 3-month budget and safety-net plan",
        scenario:
          "Meera earns ₹55,000 a month after tax, pays ₹16,000 rent, has a ₹4,000/month phone EMI and a credit-card balance of ₹38,000 at 36% a year. She has no savings. Create a realistic budget and plan.",
        deliverables: ["Monthly budget split into needs, wants, savings and debt repayment", "Plan to clear the credit card and build a 3-month emergency fund", "A short list of 3 habits to keep the plan on track"],
        rubric: [
          { criterion: "Realistic budget", description: "All income allocated; categories plausible for the scenario.", points: 25 },
          { criterion: "Debt priority", description: "High-interest debt tackled first with a clear timeline.", points: 25 },
          { criterion: "Safety net", description: "Emergency-fund target and monthly contribution calculated.", points: 25 },
          { criterion: "Clarity", description: "Plan is easy to follow; numbers add up.", points: 25 },
        ],
        submission: "text",
        estimatedHours: 1.5,
        hints: ["36% a year on ₹38,000 is roughly ₹1,140 interest per month.", "Emergency fund ≈ 3 × essential monthly spending, not income."],
      },
    },
    {
      title: "The time value of money",
      why: "Compounding is why small, early savings beat large, late ones — and why loans cost more than they look.",
      lessonIds: ["finance/time-value-of-money/compounding-and-future-value", "finance/time-value-of-money/present-value-annuities"],
      assignment: {
        id: "pf-compounding",
        title: "Start now or later?",
        scenario:
          "Two friends invest ₹5,000 a month in the same fund earning 10% a year. Arjun starts at 25 and stops at 35; Kavya starts at 35 and continues until 60. Compare their values at 60 and explain the result to a 22-year-old.",
        deliverables: ["Future-value calculations for both (show formula or tool used)", "A comparison table", "A plain-language explanation (150–200 words)"],
        rubric: [
          { criterion: "Calculations", description: "Future values computed correctly with monthly compounding or a stated simplification.", points: 35 },
          { criterion: "Interpretation", description: "Explains why the earlier start wins (or doesn’t) using compounding.", points: 30 },
          { criterion: "Assumptions", description: "States return, compounding and inflation assumptions.", points: 15 },
          { criterion: "Communication", description: "Clear for a non-finance reader.", points: 20 },
        ],
        submission: "text",
        estimatedHours: 2,
        hints: ["Use the compound-interest widget in the lesson to check numbers.", "Arjun’s money keeps compounding after he stops contributing."],
      },
    },
    {
      title: "Risk, return and diversification",
      why: "Higher returns come with higher risk. Diversification is the closest thing to a free lunch in investing.",
      lessonIds: ["finance/risk-and-return/measuring-risk-return", "finance/risk-and-return/diversification-capm"],
      assignment: {
        id: "pf-risk-profile",
        title: "Match goals to investments",
        scenario:
          "Write short guidance for three goals: a wedding in 2 years (₹4 lakh), a child’s education in 15 years, and retirement in 30 years. For each, discuss suitable asset types, risk level and why.",
        deliverables: ["A table: goal, time horizon, risk capacity, suitable asset mix", "Reasoning for each choice", "A note on why this is education, not personal advice"],
        rubric: [
          { criterion: "Horizon thinking", description: "Short-term goals avoid volatile assets; long-term goals use growth assets.", points: 30 },
          { criterion: "Diversification", description: "Explains spreading risk across assets/regions.", points: 25 },
          { criterion: "Reasoning", description: "Each recommendation is justified with risk/return logic.", points: 25 },
          { criterion: "Responsibility", description: "Notes limits, fees and the value of professional advice.", points: 20 },
        ],
        submission: "text",
        estimatedHours: 2,
        hints: ["Ask: could this goal survive a 30% market drop the year before it’s due?"],
      },
    },
    {
      title: "Investing wisely and avoiding money traps",
      why: "Fees and behaviour — panic selling, overconfidence, chasing tips — quietly destroy more wealth than bad markets.",
      lessonIds: ["finance/personal-finance/investing-basics", "psychology/cognition/cognitive-biases", "psychology/cognition/heuristics-problem-solving"],
      assignment: {
        id: "pf-capstone",
        title: "Capstone: your personal money plan (anonymised)",
        scenario:
          "Write a one-page money plan for yourself or a realistic persona: budget, emergency fund, debt strategy, long-term investing approach, and three behavioural rules to protect yourself from common biases.",
        deliverables: ["One-page plan with numbers", "Fee comparison: an active fund at 2% vs an index fund at 0.2% over 20 years", "Three ‘rules for future me’ tied to specific biases"],
        rubric: [
          { criterion: "Completeness", description: "Covers budget, safety net, debt and investing.", points: 25 },
          { criterion: "Fee analysis", description: "Shows the long-run cost difference correctly.", points: 25 },
          { criterion: "Behavioural rules", description: "Rules map to named biases and are practical.", points: 25 },
          { criterion: "Coherence", description: "The plan is consistent and realistic.", points: 25 },
        ],
        submission: "text",
        estimatedHours: 3,
        hints: ["A 1.8% yearly fee difference compounds to a large gap over 20 years — calculate it.", "Use anonymised or illustrative numbers; don’t share private data."],
      },
    },
  ],
};
