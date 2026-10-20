import type { Subject } from "@/content/types";

/*
 * Note: currency amounts use ₹ rather than the dollar sign, because "$...$"
 * is the inline-TeX delimiter in Md strings.
 */
export const finance: Subject = {
  slug: "finance",
  title: "Finance Fundamentals",
  world: "campus",
  icon: "💹",
  colors: ["#0f766e", "#22c55e"],
  tagline: "Value money across time, read any company, and price risk like a pro.",
  description:
    "A university-grade tour of corporate and personal finance: the time value of money, NPV and IRR, the three financial statements, ratio analysis, risk and diversification, and evidence-based investing basics. Every idea is anchored in worked numbers and real-world cases. Educational content only, not financial advice.",
  levels: ["UG", "PG", "Professional"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Business & Finance",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "time-value-of-money",
      title: "Time Value of Money",
      icon: "⏳",
      description:
        "Why ₹100 today beats ₹100 next year: compounding, discounting, annuities and perpetuities.",
      lessons: [
        {
          slug: "compounding-and-future-value",
          title: "Compounding & Future Value",
          summary: "How money grows when interest earns interest, and how compounding frequency changes the real rate.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Would you rather have **₹1,00,000 today** or **₹1,00,000 in five years**? Almost everyone picks today, and finance turns that instinct into precise maths. Money today can be invested, so it is worth more than the same amount later. That one idea, the **time value of money (TVM)**, sits underneath loans, pensions, bond prices and every company valuation you will ever see.",
            },
            { type: "illustration", emoji: "🌱💰📈", caption: "Interest that earns interest: a small seed becomes a tree." },
            { type: "heading", text: "Simple vs compound interest" },
            {
              type: "text",
              md: "With **simple interest**, you earn interest only on the original principal. With **compound interest**, each period's interest is added to the balance, so next period you earn interest on the interest too.",
            },
            {
              type: "formula",
              tex: "FV = PV\\,(1 + r)^{n}",
              caption: "Future value of a single sum: PV = present value, r = rate per period, n = number of periods.",
            },
            {
              type: "table",
              headers: ["Year", "Simple (8%) on ₹1,000", "Compound (8%) on ₹1,000"],
              rows: [
                ["0", "1,000.00", "1,000.00"],
                ["1", "1,080.00", "1,080.00"],
                ["2", "1,160.00", "1,166.40"],
                ["5", "1,400.00", "1,469.33"],
                ["10", "1,800.00", "2,158.92"],
              ],
            },
            {
              type: "widget",
              widget: "compound-interest",
              caption: "Play with rate, time and contributions. Notice how the curve bends upward in later years.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "The Rule of 72",
              md: "For a quick mental estimate, money doubles in roughly $72 / r$ years, where r is the annual rate in percent. At 8% that is about 9 years; the exact answer is 9.01 years.",
            },
            { type: "heading", text: "Compounding frequency and the effective rate" },
            {
              type: "text",
              md: "Banks quote a **nominal annual rate** (APR) but may compound monthly or daily. The rate you actually earn or pay over a year is the **effective annual rate (EAR)**.",
            },
            {
              type: "formula",
              tex: "EAR = \\left(1 + \\frac{APR}{m}\\right)^{m} - 1",
              caption: "m = compounding periods per year (12 for monthly, 365 for daily).",
            },
            {
              type: "text",
              md: "A credit card at 12% APR compounded monthly has $EAR = (1.01)^{12} - 1 \\approx 12.68\\%$. As m grows without limit, you approach continuous compounding, $e^{r} - 1$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "₹5,000 is invested at 6% per year, compounded annually, for 3 years. What is the future value (in ₹, to the nearest rupee)?",
                  answer: 5955,
                  tolerance: 1,
                  unit: "₹",
                  explain: "$5000 \\times 1.06^{3} = 5000 \\times 1.191016 = 5955.08$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Lenders in many countries are legally required to disclose an annualised effective figure (for example the APR in the EU and UK, or the APY on US deposits) precisely because nominal rates with frequent compounding look cheaper than they are.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Doubling the time doubles the growth.\" Not with compounding. At 8%, 10 years gives ×2.16 but 20 years gives ×4.66, more than twice the gain, because growth is exponential, not linear.",
            },
            {
              type: "keypoints",
              items: [
                "Money has a time value because it can be invested.",
                "$FV = PV(1+r)^n$; compounding makes growth exponential.",
                "Compare loans and deposits on the effective annual rate, not the nominal rate.",
                "Rule of 72: doubling time ≈ 72 / rate%.",
              ],
            },
          ],
          flashcards: [
            { front: "Future value formula", back: "$FV = PV(1+r)^n$" },
            { front: "Simple vs compound interest", back: "Simple earns only on principal; compound also earns on accumulated interest." },
            { front: "Effective annual rate", back: "$EAR = (1 + APR/m)^m - 1$; the true one-year rate after compounding." },
            { front: "Rule of 72", back: "Doubling time ≈ 72 ÷ annual rate (in %)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Using the Rule of 72, roughly how many years does it take money to double at 6% per year?",
              answer: 12,
              tolerance: 0.5,
              unit: "years",
              explain: "72 / 6 = 12 years (exact answer: about 11.9 years).",
            },
            {
              kind: "mcq",
              q: "Which offer gives the highest effective annual rate?",
              options: ["10% compounded annually", "10% compounded quarterly", "10% compounded monthly", "They are all equal"],
              answer: 2,
              explain: "For the same nominal rate, more frequent compounding gives a higher EAR: annual 10%, quarterly 10.38%, monthly 10.47%.",
            },
            {
              kind: "truefalse",
              q: "Under compound interest, the interest earned in year 10 is larger than the interest earned in year 1 (same rate, no withdrawals).",
              answer: true,
              explain: "Each year's interest is a fixed percentage of a balance that keeps growing, so the rupee amount of interest grows too.",
            },
            {
              kind: "numeric",
              q: "What is the EAR (in %) of a 24% APR compounded monthly? Give one decimal place.",
              answer: 26.8,
              tolerance: 0.1,
              unit: "%",
              explain: "$(1 + 0.24/12)^{12} - 1 = 1.02^{12} - 1 = 0.2682$, about 26.8%.",
            },
          ],
        },
        {
          slug: "present-value-annuities",
          title: "Discounting, Annuities & Perpetuities",
          summary: "Bringing future cash back to today, and valuing streams of payments.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A lottery offers you **₹10 lakh today** or **₹1 lakh a year for 15 years**. The second adds up to more, but is it actually worth more? To answer, you need to **discount**: convert future cash into today's money.",
            },
            { type: "heading", text: "Present value of a single sum" },
            {
              type: "formula",
              tex: "PV = \\frac{FV}{(1 + r)^{n}}",
              caption: "Discounting is compounding run backwards. r is called the discount rate.",
            },
            {
              type: "text",
              md: "₹10,000 received in 5 years at a 5% discount rate is worth $10000 / 1.05^5 \\approx ₹7,835$ today. The higher the rate or the longer the wait, the smaller the present value.",
            },
            { type: "heading", text: "Annuities: equal payments for a fixed time" },
            {
              type: "formula",
              tex: "PV_{\\text{annuity}} = PMT \\times \\frac{1 - (1 + r)^{-n}}{r}",
              caption: "Ordinary annuity: payments at the end of each period.",
            },
            {
              type: "table",
              headers: ["Year", "Cash flow", "Discount factor at 10%", "Present value"],
              rows: [
                ["1", "1,000", "0.9091", "909.09"],
                ["2", "1,000", "0.8264", "826.45"],
                ["3", "1,000", "0.7513", "751.31"],
                ["**Total**", "3,000", "", "**2,486.85**"],
              ],
            },
            {
              type: "text",
              md: "The formula gives the same answer in one line: $1000 \\times (1 - 1.1^{-3}) / 0.1 = 2486.85$. Home loans and car EMIs are annuities: the bank lends you the present value and you repay it with equal instalments.",
            },
            { type: "heading", text: "Perpetuities: payments forever" },
            {
              type: "formula",
              tex: "PV_{\\text{perpetuity}} = \\frac{C}{r} \\qquad PV_{\\text{growing}} = \\frac{C_1}{r - g}\\;(r > g)",
              caption: "The growing perpetuity is the engine behind the Gordon dividend-growth model.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A scholarship fund must pay ₹50,000 every year forever. If it earns 5% a year, how much must be endowed today (in ₹)?",
                  answer: 1000000,
                  tolerance: 1,
                  unit: "₹",
                  explain: "$C / r = 50000 / 0.05 = ₹10,00,000$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Real university endowments work like perpetuities: many cap annual spending at around 4–5% of the fund's value so the principal can last indefinitely.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Fifteen payments of ₹1 lakh is ₹15 lakh, so it must beat ₹10 lakh now.\" Summing undiscounted cash flows ignores timing. At 8%, those 15 payments are worth only about ₹8.56 lakh today, so the lump sum wins.",
            },
            {
              type: "keypoints",
              items: [
                "$PV = FV/(1+r)^n$: higher rates and longer waits shrink present value.",
                "Annuity PV values equal payments over n periods in one step.",
                "Perpetuity PV = C / r; growing perpetuity = C₁ / (r − g).",
                "Never add cash flows from different dates without discounting them first.",
              ],
            },
          ],
          flashcards: [
            { front: "Present value of a single sum", back: "$PV = FV / (1+r)^n$" },
            { front: "PV of an ordinary annuity", back: "$PMT \\times [1 - (1+r)^{-n}] / r$" },
            { front: "PV of a perpetuity", back: "$C / r$" },
            { front: "PV of a growing perpetuity", back: "$C_1 / (r - g)$, valid only if r > g." },
            { front: "Discount factor", back: "$1/(1+r)^n$: the value today of ₹1 received in n periods." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the present value (in ₹, nearest rupee) of ₹10,000 received in 5 years at a 5% discount rate?",
              answer: 7835,
              tolerance: 2,
              unit: "₹",
              explain: "$10000 / 1.05^5 = 10000 / 1.27628 = 7835.26$.",
            },
            {
              kind: "mcq",
              q: "If the discount rate rises, what happens to the present value of a fixed future cash flow?",
              options: ["It rises", "It falls", "It stays the same", "It depends on inflation only"],
              answer: 1,
              explain: "The rate sits in the denominator, so a higher rate means a smaller present value. This is why bond prices fall when interest rates rise.",
            },
            {
              kind: "numeric",
              q: "A stock will pay a dividend of ₹20 next year, growing 4% a year forever. Investors require 9%. What is its value today (in ₹)?",
              answer: 400,
              tolerance: 0.5,
              unit: "₹",
              explain: "Growing perpetuity: $20 / (0.09 - 0.04) = 20 / 0.05 = ₹400$.",
            },
            {
              kind: "truefalse",
              q: "A home-loan EMI schedule is an example of an annuity.",
              answer: true,
              explain: "Equal payments at regular intervals for a fixed term: the textbook definition of an annuity.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "capital-budgeting",
      title: "Capital Budgeting: NPV & IRR",
      icon: "🏗️",
      description: "How companies decide which projects create value.",
      lessons: [
        {
          slug: "net-present-value",
          title: "Net Present Value (NPV)",
          summary: "The gold-standard rule for investment decisions.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A coffee chain is considering a ₹1 crore espresso-machine upgrade that will raise profits for several years. Is it worth it? **Net present value** answers in one number: the value the project adds today, after paying back everyone who funded it.",
            },
            {
              type: "formula",
              tex: "NPV = -C_0 + \\sum_{t=1}^{n} \\frac{CF_t}{(1 + r)^{t}}",
              caption: "C₀ = upfront cost, CFₜ = cash flow in year t, r = cost of capital (the required return).",
            },
            {
              type: "list",
              items: [
                "**NPV > 0**: accept. The project earns more than investors require and creates value.",
                "**NPV < 0**: reject. Investors could do better elsewhere at the same risk.",
                "**NPV = 0**: the project earns exactly the required return. It neither creates nor destroys value.",
              ],
            },
            { type: "heading", text: "Worked example" },
            {
              type: "table",
              headers: ["Year", "Cash flow (₹ thousands)", "Discount factor at 10%", "PV"],
              rows: [
                ["0", "−1,000", "1.0000", "−1,000.00"],
                ["1", "600", "0.9091", "545.45"],
                ["2", "600", "0.8264", "495.87"],
                ["**NPV**", "", "", "**+41.32**"],
              ],
            },
            {
              type: "text",
              md: "The project returns ₹1,200k in total, but after discounting it adds only ₹41.32k of value. Positive, so accept, but with a thin margin of safety.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A project costs ₹2,000 and returns ₹1,100 in year 1 and ₹1,210 in year 2. At a 10% cost of capital, what is its NPV (in ₹)?",
                  answer: 0,
                  tolerance: 0.5,
                  unit: "₹",
                  explain: "$1100/1.1 = 1000$ and $1210/1.21 = 1000$, so NPV = −2000 + 1000 + 1000 = 0.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Analysts build NPV models in spreadsheets and then run **sensitivity analysis**: how does NPV change if sales are 10% lower or the discount rate is 2 points higher? A project whose NPV flips sign under small changes is risky, even if the base case looks good.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Sunk costs belong in the NPV.\" Money already spent (last year's market research, for example) cannot be recovered whatever you decide, so it must be excluded. Only **incremental, future** cash flows count, including opportunity costs such as a warehouse you could otherwise rent out.",
            },
            {
              type: "keypoints",
              items: [
                "NPV = PV of future cash flows − initial cost.",
                "Accept projects with NPV > 0; NPVs of independent projects add up.",
                "Use incremental cash flows; ignore sunk costs; include opportunity costs.",
                "The discount rate should reflect the project's risk.",
              ],
            },
          ],
          flashcards: [
            { front: "NPV decision rule", back: "Accept if NPV > 0, reject if NPV < 0." },
            { front: "Sunk cost", back: "A cost already incurred that cannot be recovered; excluded from NPV." },
            { front: "Opportunity cost (in capital budgeting)", back: "The value of the best alternative use of a resource the project ties up; included as a cost." },
            { front: "Cost of capital", back: "The return investors require for the project's level of risk; used as the discount rate." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A firm spent ₹5 lakh on a feasibility study last year. When computing the project's NPV today, the ₹5 lakh should be…",
              options: ["Added as a cost in year 0", "Ignored because it is sunk", "Spread over the project's life", "Treated as a tax shield"],
              answer: 1,
              explain: "The study cost is spent whether or not the project goes ahead, so it is irrelevant to the decision.",
            },
            {
              kind: "numeric",
              q: "Cost ₹1,000; one cash flow of ₹1,210 at the end of year 2; discount rate 10%. What is the NPV (in ₹)?",
              answer: 0,
              tolerance: 0.5,
              unit: "₹",
              explain: "$1210 / 1.1^2 = 1210 / 1.21 = 1000$, so NPV = 0.",
            },
            {
              kind: "truefalse",
              q: "Raising the discount rate always increases the NPV of a project that has a cost today followed by positive cash flows.",
              answer: false,
              explain: "A higher rate shrinks the present value of the future inflows, so NPV falls.",
            },
            {
              kind: "multi",
              q: "Which of these belong in a project's NPV? (Select all that apply.)",
              options: [
                "Extra working capital the project requires",
                "Rent forgone on a building the project will use",
                "Last year's R&D spending",
                "Future maintenance costs caused by the project",
              ],
              answers: [0, 1, 3],
              explain: "Working capital, opportunity costs and future incremental costs are all relevant. Past R&D is sunk.",
            },
          ],
        },
        {
          slug: "irr-and-payback",
          title: "IRR, Payback & Comparing Rules",
          summary: "The internal rate of return, the payback period, and when they mislead.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Executives love a single percentage: \"this project returns 18%\". That number is usually the **internal rate of return (IRR)**, the discount rate at which NPV equals exactly zero.",
            },
            {
              type: "formula",
              tex: "0 = -C_0 + \\sum_{t=1}^{n} \\frac{CF_t}{(1 + IRR)^{t}}",
              caption: "IRR is found by trial and error or a spreadsheet's IRR() function.",
            },
            {
              type: "text",
              md: "For the project costing 1,000 that pays 600 in each of two years, solving gives IRR ≈ **13.07%**. Since that exceeds the 10% cost of capital, the IRR rule agrees with NPV: accept.",
            },
            { type: "heading", text: "Payback period" },
            {
              type: "text",
              md: "The **payback period** is how long it takes to recover the initial outlay. A ₹1,000 project paying ₹300 a year pays back in $1000/300 \\approx 3.33$ years. It is intuitive and hints at liquidity risk, but it ignores the time value of money and everything after the cutoff.",
            },
            {
              type: "table",
              headers: ["Rule", "Uses TVM?", "Strength", "Weakness"],
              rows: [
                ["NPV", "Yes", "Measures value created in ₹", "Needs a discount rate"],
                ["IRR", "Yes", "Intuitive % return", "Can mislead on mutually exclusive or unconventional projects"],
                ["Payback", "No", "Simple, shows speed of recovery", "Ignores later cash flows and discounting"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Higher IRR always means the better project.\" When projects are mutually exclusive, a small project with 40% IRR may add less value than a large one with 20% IRR. Project A: invest 100, get 140 next year (IRR 40%, NPV at 10% ≈ 27). Project B: invest 1,000, get 1,200 (IRR 20%, NPV ≈ 91). Choose by **NPV**.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Private-equity funds report IRR to investors, but because IRR can be boosted by returning cash early, they also report the **multiple on invested capital (MOIC)**. Seasoned investors read both together.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "You invest ₹100 today and receive ₹121 in exactly two years. What is the IRR (in %)?",
                  answer: 10,
                  tolerance: 0.1,
                  unit: "%",
                  explain: "$100(1+IRR)^2 = 121 \\Rightarrow 1 + IRR = 1.1$, so IRR = 10%.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "IRR is the discount rate that makes NPV = 0.",
                "Accept if IRR > cost of capital (for conventional, independent projects).",
                "For mutually exclusive projects, prefer the one with higher NPV.",
                "Payback is a quick screen, not a value measure.",
              ],
            },
          ],
          flashcards: [
            { front: "Internal rate of return (IRR)", back: "The discount rate at which a project's NPV equals zero." },
            { front: "IRR decision rule", back: "Accept if IRR exceeds the cost of capital (conventional cash flows)." },
            { front: "Payback period", back: "Time needed for cumulative cash flows to recover the initial cost." },
            { front: "Why NPV beats IRR for ranking", back: "NPV measures value in currency; IRR ignores project scale and can have multiple solutions." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A ₹1,200 project generates ₹400 a year. What is its payback period (in years)?",
              answer: 3,
              tolerance: 0.01,
              unit: "years",
              explain: "1200 / 400 = 3 years.",
            },
            {
              kind: "mcq",
              q: "If a project's IRR is 15% and the cost of capital is 12%, its NPV at 12% is…",
              options: ["Negative", "Zero", "Positive", "Impossible to tell"],
              answer: 2,
              explain: "For a conventional project, NPV is positive at any discount rate below the IRR.",
            },
            {
              kind: "truefalse",
              q: "The payback period accounts for cash flows received after the payback date.",
              answer: false,
              explain: "Payback ignores everything after the cutoff, which is one of its main weaknesses.",
            },
            {
              kind: "order",
              q: "Order these steps for evaluating a project with NPV, from first to last.",
              items: [
                "Forecast incremental cash flows",
                "Choose a risk-appropriate discount rate",
                "Discount each cash flow to the present",
                "Sum the PVs and subtract the initial cost",
                "Accept if NPV is positive",
              ],
              explain: "Forecast, choose rate, discount, sum, decide.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "financial-statements",
      title: "Financial Statements",
      icon: "📑",
      description: "The income statement, balance sheet and cash-flow statement, and how they connect.",
      lessons: [
        {
          slug: "income-statement-balance-sheet",
          title: "Income Statement & Balance Sheet",
          summary: "Profit over a period versus position at a moment.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Think of a company as a person. The **income statement** is their salary slip and expenses for the year: did they earn more than they spent? The **balance sheet** is a photo of everything they own and owe on 31 March. One is a movie, the other a snapshot.",
            },
            { type: "heading", text: "The income statement (profit & loss)" },
            {
              type: "table",
              headers: ["Chai & Co. café, FY", "₹ thousands"],
              rows: [
                ["Revenue", "500"],
                ["− Cost of goods sold", "(200)"],
                ["**= Gross profit**", "**300**"],
                ["− Operating expenses (incl. depreciation 30)", "(180)"],
                ["**= Operating profit (EBIT)**", "**120**"],
                ["− Interest", "(20)"],
                ["= Profit before tax", "100"],
                ["− Tax at 25%", "(25)"],
                ["**= Net income**", "**75**"],
              ],
            },
            { type: "heading", text: "The balance sheet" },
            {
              type: "formula",
              tex: "\\text{Assets} = \\text{Liabilities} + \\text{Shareholders' equity}",
              caption: "The accounting identity: everything a firm owns was funded by lenders or owners.",
            },
            {
              type: "table",
              headers: ["Assets", "₹k", "Liabilities & equity", "₹k"],
              rows: [
                ["Cash", "50", "Accounts payable", "70"],
                ["Accounts receivable", "40", "Short-term debt", "30"],
                ["Inventory", "60", "**Current liabilities**", "**100**"],
                ["**Current assets**", "**150**", "Long-term debt", "150"],
                ["Property, plant & equipment", "350", "Shareholders' equity", "250"],
                ["**Total assets**", "**500**", "**Total liabilities & equity**", "**500**"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A firm has total assets of ₹800k and total liabilities of ₹520k. What is shareholders' equity (in ₹ thousands)?",
                  answer: 280,
                  tolerance: 0,
                  unit: "₹k",
                  explain: "Equity = Assets − Liabilities = 800 − 520 = 280.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Public companies publish these statements in annual reports (in India, filed with the stock exchanges; in the US, the 10-K with the SEC). Analysts read the **notes** first, because accounting choices like revenue recognition and lease treatment live there.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Net income is the cash the business made.\" Revenue is recorded when earned, not when collected, and depreciation reduces profit without any cash leaving. Profitable firms can and do run out of cash.",
            },
            {
              type: "keypoints",
              items: [
                "Income statement = performance over a period; balance sheet = position at a date.",
                "Revenue − expenses cascades through gross profit, EBIT, PBT to net income.",
                "Assets = Liabilities + Equity, always.",
                "Accrual accounting means profit ≠ cash.",
              ],
            },
          ],
          flashcards: [
            { front: "Accounting identity", back: "Assets = Liabilities + Shareholders' equity" },
            { front: "EBIT", back: "Earnings before interest and taxes: operating profit." },
            { front: "Gross profit", back: "Revenue − cost of goods sold." },
            { front: "Current assets", back: "Assets expected to become cash within a year: cash, receivables, inventory." },
            { front: "Depreciation", back: "Spreading a long-lived asset's cost over its useful life; a non-cash expense." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Revenue ₹900k, COGS ₹400k, operating expenses ₹300k. What is EBIT (₹ thousands)?",
              answer: 200,
              tolerance: 0,
              unit: "₹k",
              explain: "900 − 400 − 300 = 200.",
            },
            {
              kind: "mcq",
              q: "Which item appears on the balance sheet rather than the income statement?",
              options: ["Revenue", "Interest expense", "Inventory", "Cost of goods sold"],
              answer: 2,
              explain: "Inventory is an asset held at a point in time; the others are flows over a period.",
            },
            {
              kind: "truefalse",
              q: "A company that reports a profit cannot run out of cash.",
              answer: false,
              explain: "Profit is an accrual measure. Slow-paying customers, inventory build-up or heavy capex can drain cash even when profits look healthy.",
            },
            {
              kind: "fill",
              q: "Assets = Liabilities + ___",
              answer: ["equity", "shareholders' equity", "shareholders equity", "owners' equity", "owners equity"],
              explain: "Owners' (shareholders') equity is the residual claim after liabilities.",
            },
          ],
        },
        {
          slug: "cash-flow-statement",
          title: "The Cash-Flow Statement",
          summary: "Following the cash: operating, investing and financing flows.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "\"Revenue is vanity, profit is sanity, cash is reality.\" The **cash-flow statement** reconciles accounting profit with the actual change in the bank balance, sorted into three buckets.",
            },
            {
              type: "list",
              items: [
                "**Operating (CFO)**: cash from running the business: collecting from customers, paying suppliers, staff and taxes.",
                "**Investing (CFI)**: buying or selling long-term assets such as machines, buildings or other companies.",
                "**Financing (CFF)**: raising or repaying debt, issuing or buying back shares, paying dividends.",
              ],
            },
            { type: "heading", text: "The indirect method, step by step" },
            {
              type: "table",
              headers: ["Chai & Co. café", "₹ thousands"],
              rows: [
                ["Net income", "75"],
                ["+ Depreciation (non-cash)", "30"],
                ["− Increase in receivables", "(10)"],
                ["− Increase in inventory", "(5)"],
                ["+ Increase in payables", "5"],
                ["**Cash from operations**", "**95**"],
                ["Capital expenditure", "(60)"],
                ["**Cash from investing**", "**(60)**"],
                ["Debt repaid", "(20)"],
                ["Dividends paid", "(10)"],
                ["**Cash from financing**", "**(30)**"],
                ["**Net change in cash**", "**+5**"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Working-capital intuition",
              md: "An increase in an asset like receivables **uses** cash (you sold but have not been paid). An increase in a liability like payables **frees** cash (you received goods but have not paid yet).",
            },
            {
              type: "formula",
              tex: "FCF = CFO - \\text{Capital expenditure}",
              caption: "Free cash flow: cash available to repay lenders and reward owners. Here 95 − 60 = 35.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Amazon spent years reporting thin profits while generating large operating cash flow, partly because customers paid it before it paid suppliers (a negative cash conversion cycle). Investors who read only the income statement missed the story.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Negative free cash flow means the company is failing.\" A fast-growing firm investing heavily in capacity may show negative FCF for years by choice. Context (why the cash is going out) matters more than the sign.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Buying back the company's own shares is classified as a…",
                  options: ["Operating cash flow", "Investing cash flow", "Financing cash flow", "Non-cash item"],
                  answer: 2,
                  explain: "Transactions with owners and lenders (buybacks, dividends, borrowing) are financing activities.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Three sections: operating, investing, financing.",
                "Indirect method: start from net income, add back non-cash items, adjust for working capital.",
                "Free cash flow = CFO − capex.",
                "Cash flow quality often reveals what profit hides.",
              ],
            },
          ],
          flashcards: [
            { front: "Cash from operations (CFO)", back: "Cash generated by the core business, after working-capital changes." },
            { front: "Free cash flow (FCF)", back: "CFO − capital expenditure." },
            { front: "Effect of rising receivables on cash", back: "Reduces cash flow: sales recorded but not yet collected." },
            { front: "Why add back depreciation?", back: "It reduces profit but involves no cash outflow in the period." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Net income ₹120k, depreciation ₹40k, receivables rise by ₹25k, payables rise by ₹10k. What is CFO (₹ thousands)?",
              answer: 145,
              tolerance: 0,
              unit: "₹k",
              explain: "120 + 40 − 25 + 10 = 145.",
            },
            {
              kind: "mcq",
              q: "Purchasing a new delivery van appears under…",
              options: ["Operating activities", "Investing activities", "Financing activities", "It does not appear"],
              answer: 1,
              explain: "Buying long-lived assets is capital expenditure, an investing outflow.",
            },
            {
              kind: "numeric",
              q: "CFO is ₹300k and capital expenditure is ₹180k. What is free cash flow (₹ thousands)?",
              answer: 120,
              tolerance: 0,
              unit: "₹k",
              explain: "FCF = 300 − 180 = 120.",
            },
            {
              kind: "truefalse",
              q: "An increase in accounts payable increases cash from operations.",
              answer: true,
              explain: "Delaying payment to suppliers keeps cash in the business for now.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "ratio-analysis",
      title: "Ratio Analysis",
      icon: "🧮",
      description: "Turning statements into insight: liquidity, leverage, profitability and DuPont.",
      lessons: [
        {
          slug: "liquidity-leverage",
          title: "Liquidity & Leverage Ratios",
          summary: "Can the firm pay its bills, and how much debt is it carrying?",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A bank deciding whether to lend to Chai & Co. asks two questions: **can they pay next month's bills?** (liquidity) and **how much debt are they already carrying?** (leverage). Ratios let you compare firms of any size on equal terms.",
            },
            {
              type: "table",
              headers: ["Ratio", "Formula", "Chai & Co."],
              rows: [
                ["Current ratio", "Current assets ÷ current liabilities", "150 ÷ 100 = **1.5**"],
                ["Quick ratio", "(Current assets − inventory) ÷ current liabilities", "90 ÷ 100 = **0.9**"],
                ["Debt-to-equity", "Total debt ÷ equity", "180 ÷ 250 = **0.72**"],
                ["Interest coverage", "EBIT ÷ interest expense", "120 ÷ 20 = **6.0×**"],
              ],
            },
            {
              type: "text",
              md: "The quick ratio strips out inventory because coffee beans cannot always be sold fast at full price. Interest coverage of 6× means operating profit could fall by over 80% before the café struggled to pay interest.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A higher current ratio is always better.\" A current ratio of 5 may mean idle cash or unsold inventory piling up. Ratios have healthy ranges that depend on the industry; supermarkets often run below 1 comfortably because inventory turns over in days.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Loan agreements often contain **covenants** such as \"debt-to-EBITDA must stay below 3×\". Breaching one can let the lender demand early repayment, so CFOs track these ratios monthly.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Current assets ₹400k (inventory ₹160k), current liabilities ₹200k. What is the quick ratio?",
                  answer: 1.2,
                  tolerance: 0.01,
                  explain: "(400 − 160) / 200 = 240 / 200 = 1.2.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Liquidity: current ratio and quick ratio.",
                "Leverage: debt-to-equity; solvency: interest coverage.",
                "Always benchmark against peers and the firm's own history.",
              ],
            },
          ],
          flashcards: [
            { front: "Current ratio", back: "Current assets ÷ current liabilities." },
            { front: "Quick (acid-test) ratio", back: "(Current assets − inventory) ÷ current liabilities." },
            { front: "Debt-to-equity", back: "Total debt ÷ shareholders' equity." },
            { front: "Interest coverage", back: "EBIT ÷ interest expense; how many times profit covers interest." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "EBIT is ₹90k and interest expense is ₹30k. What is interest coverage (×)?",
              answer: 3,
              tolerance: 0.01,
              unit: "×",
              explain: "90 / 30 = 3×.",
            },
            {
              kind: "mcq",
              q: "Why does the quick ratio exclude inventory?",
              options: [
                "Inventory is a liability",
                "Inventory may be hard to turn into cash quickly at full value",
                "Inventory is already counted in cash",
                "Accounting rules forbid including it",
              ],
              answer: 1,
              explain: "It is the least liquid current asset; the quick ratio tests short-term solvency without relying on selling stock.",
            },
            {
              kind: "truefalse",
              q: "Debt-to-equity of 0.5 means the firm has twice as much equity as debt.",
              answer: true,
              explain: "D/E = 0.5 means debt is half of equity.",
            },
          ],
        },
        {
          slug: "profitability-dupont",
          title: "Profitability & the DuPont Identity",
          summary: "Margins, returns, and decomposing ROE into its drivers.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Two firms both report a 30% return on equity. One is a luxury brand with fat margins; the other is a thin-margin retailer using lots of debt. Same headline, very different risk. The **DuPont identity** tells them apart.",
            },
            {
              type: "table",
              headers: ["Ratio", "Formula", "Chai & Co."],
              rows: [
                ["Gross margin", "Gross profit ÷ revenue", "300 ÷ 500 = 60%"],
                ["Operating margin", "EBIT ÷ revenue", "120 ÷ 500 = 24%"],
                ["Net margin", "Net income ÷ revenue", "75 ÷ 500 = 15%"],
                ["ROA", "Net income ÷ total assets", "75 ÷ 500 = 15%"],
                ["ROE", "Net income ÷ equity", "75 ÷ 250 = 30%"],
              ],
            },
            {
              type: "formula",
              tex: "ROE = \\underbrace{\\frac{NI}{\\text{Sales}}}_{\\text{net margin}} \\times \\underbrace{\\frac{\\text{Sales}}{\\text{Assets}}}_{\\text{asset turnover}} \\times \\underbrace{\\frac{\\text{Assets}}{\\text{Equity}}}_{\\text{equity multiplier}}",
              caption: "Three-step DuPont: profitability × efficiency × leverage.",
            },
            {
              type: "text",
              md: "For the café: 15% × 1.0 × 2.0 = **30%**. Half of that ROE comes from leverage: the equity multiplier of 2 doubles the 15% ROA.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Retailers like Walmart or DMart run net margins of only a few percent but turn over their assets quickly; luxury houses like LVMH earn high margins with slower turnover. DuPont shows each can reach a healthy ROE by a different route.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Rising ROE always means management is improving the business.\" ROE can rise simply because the firm took on more debt or bought back shares, which raises the equity multiplier and the risk, not the underlying profitability.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Net margin 5%, asset turnover 2.5, equity multiplier 2. What is ROE (in %)?",
                  answer: 25,
                  tolerance: 0.1,
                  unit: "%",
                  explain: "5% × 2.5 × 2 = 25%.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Margins measure profit per rupee of sales at different levels.",
                "ROA measures how well assets generate profit; ROE measures return to owners.",
                "DuPont: ROE = net margin × asset turnover × equity multiplier.",
                "Leverage magnifies ROE in both directions.",
              ],
            },
          ],
          flashcards: [
            { front: "Return on equity (ROE)", back: "Net income ÷ shareholders' equity." },
            { front: "Asset turnover", back: "Sales ÷ total assets; revenue generated per rupee of assets." },
            { front: "Equity multiplier", back: "Total assets ÷ equity; a measure of financial leverage." },
            { front: "DuPont identity", back: "ROE = net margin × asset turnover × equity multiplier." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Net income ₹60k, equity ₹400k. What is ROE (in %)?",
              answer: 15,
              tolerance: 0.1,
              unit: "%",
              explain: "60 / 400 = 15%.",
            },
            {
              kind: "mcq",
              q: "A firm's ROA is 8% and its equity multiplier is 3. Its ROE is…",
              options: ["2.7%", "11%", "24%", "8%"],
              answer: 2,
              explain: "ROE = ROA × equity multiplier = 8% × 3 = 24%.",
            },
            {
              kind: "multi",
              q: "Which actions could raise ROE without improving operating profitability? (Select all.)",
              options: ["Borrowing to buy back shares", "Raising prices with no loss of volume", "Paying a large special dividend funded by debt", "Cutting raw-material waste"],
              answers: [0, 2],
              explain: "Debt-funded buybacks and dividends shrink equity and raise leverage. Price rises and lower waste genuinely improve margins.",
            },
            {
              kind: "truefalse",
              q: "Gross margin is always at least as large as net margin.",
              answer: true,
              explain: "Net income is gross profit minus further costs (operating costs, interest, taxes), so in normal cases net margin cannot exceed gross margin.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "risk-and-return",
      title: "Risk, Return & Diversification",
      icon: "🎲",
      description: "Measuring risk, building portfolios, and pricing risk with CAPM.",
      lessons: [
        {
          slug: "measuring-risk-return",
          title: "Measuring Risk & Return",
          summary: "Expected return, variance, standard deviation and the risk–return trade-off.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A fixed deposit pays 7% with near certainty. A tech stock might return +40% or −30%. Which is better? Neither, in the abstract: finance asks how much **extra return** you get for the **extra uncertainty** you bear.",
            },
            {
              type: "formula",
              tex: "E[R] = \\sum_i p_i R_i \\qquad \\sigma^2 = \\sum_i p_i \\,(R_i - E[R])^2",
              caption: "Expected return and variance across scenarios i with probabilities pᵢ. Standard deviation σ is the square root of variance.",
            },
            {
              type: "table",
              headers: ["Scenario", "Probability", "Return", "p × R"],
              rows: [
                ["Boom", "0.3", "30%", "9%"],
                ["Normal", "0.5", "10%", "5%"],
                ["Bust", "0.2", "−20%", "−4%"],
                ["**Expected**", "1.0", "", "**10%**"],
              ],
            },
            {
              type: "text",
              md: "Variance = $0.3(20)^2 + 0.5(0)^2 + 0.2(-30)^2 = 120 + 0 + 180 = 300$ (%²), so $\\sigma = \\sqrt{300} \\approx 17.3\\%$.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "The long-run record",
              md: "Across a century of data in many countries, equities have delivered higher average returns than government bonds, which in turn beat treasury bills, and with correspondingly higher volatility. Return is compensation for risk, not a free lunch.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Expected return is the return I should expect this year.\" It is a probability-weighted average. In the example, no single scenario actually returns 10%, and any one year could be a bust.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "An asset returns 20% with probability 0.5 and 0% with probability 0.5. What is its expected return (in %)?",
                  answer: 10,
                  tolerance: 0.01,
                  unit: "%",
                  explain: "0.5 × 20 + 0.5 × 0 = 10%.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Fund factsheets report annualised volatility (standard deviation) and the **Sharpe ratio**, $(R_p - R_f)/\\sigma_p$: excess return earned per unit of risk.",
            },
            {
              type: "keypoints",
              items: [
                "Expected return is a probability-weighted average.",
                "Standard deviation measures how widely outcomes spread.",
                "Higher expected return generally requires accepting higher risk.",
                "Sharpe ratio = excess return ÷ volatility.",
              ],
            },
          ],
          flashcards: [
            { front: "Expected return", back: "$E[R] = \\sum p_i R_i$" },
            { front: "Standard deviation (σ)", back: "Square root of variance; the typical spread of returns around the mean." },
            { front: "Sharpe ratio", back: "$(R_p - R_f) / \\sigma_p$: excess return per unit of total risk." },
            { front: "Risk premium", back: "Extra expected return over the risk-free rate for bearing risk." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A fund returned 12% with volatility 15% while the risk-free rate was 3%. What is its Sharpe ratio?",
              answer: 0.6,
              tolerance: 0.01,
              explain: "(12 − 3) / 15 = 0.6.",
            },
            {
              kind: "mcq",
              q: "Two investments both have an expected return of 8%. A rational, risk-averse investor prefers the one with…",
              options: ["Higher standard deviation", "Lower standard deviation", "Higher price", "Longer history"],
              answer: 1,
              explain: "With equal expected returns, a risk-averse investor picks less risk.",
            },
            {
              kind: "truefalse",
              q: "Variance is measured in squared units (for example %²), which is why we usually report standard deviation instead.",
              answer: true,
              explain: "Taking the square root puts risk back into the same units as returns.",
            },
          ],
        },
        {
          slug: "diversification-capm",
          title: "Diversification & CAPM",
          summary: "Why combining assets cuts risk, and which risk the market pays you for.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "An umbrella seller and a sunscreen seller each have volatile profits, but own both and whatever the weather does, one of them is having a good day. That is diversification: combining assets that do not move together lowers overall risk **without necessarily lowering expected return**.",
            },
            {
              type: "formula",
              tex: "\\sigma_p^2 = w_A^2\\sigma_A^2 + w_B^2\\sigma_B^2 + 2\\,w_A w_B\\,\\rho_{AB}\\,\\sigma_A\\sigma_B",
              caption: "Two-asset portfolio variance. The correlation ρ (between −1 and +1) drives the benefit.",
            },
            {
              type: "text",
              md: "Portfolio expected return is just the weighted average: 60% in a 10% asset plus 40% in a 4% asset gives $0.6(10) + 0.4(4) = 7.6\\%$. But portfolio risk is **less** than the weighted average whenever ρ < 1.",
            },
            { type: "heading", text: "Two kinds of risk" },
            {
              type: "table",
              headers: ["Type", "Also called", "Examples", "Diversifiable?"],
              rows: [
                ["Unsystematic", "Idiosyncratic, firm-specific", "A CEO resigns, a factory fire, a failed drug trial", "Yes"],
                ["Systematic", "Market risk", "Recessions, interest-rate shocks, pandemics", "No"],
              ],
            },
            {
              type: "text",
              md: "Because firm-specific risk can be diversified away cheaply, markets do not reward you for holding it. Only systematic risk, measured by **beta (β)**, earns a premium. That insight is the **Capital Asset Pricing Model**.",
            },
            {
              type: "formula",
              tex: "E[R_i] = R_f + \\beta_i\\,(E[R_m] - R_f)",
              caption: "CAPM: required return = risk-free rate + beta × market risk premium.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "The risk-free rate is 4%, the expected market return is 10%, and a stock's beta is 1.5. What is its CAPM required return (in %)?",
                  answer: 13,
                  tolerance: 0.01,
                  unit: "%",
                  explain: "4 + 1.5 × (10 − 4) = 4 + 9 = 13%.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Corporate finance teams plug CAPM into the **weighted average cost of capital (WACC)**, the discount rate used in the NPV models you met earlier. Many also adjust for size or country risk, since CAPM's empirical fit is imperfect.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Owning ten tech stocks means I'm diversified.\" Stocks in the same sector tend to be highly correlated, so they fall together. Diversification is about low correlation across sectors, countries and asset classes, not the number of tickers.",
            },
            {
              type: "keypoints",
              items: [
                "Portfolio return = weighted average; portfolio risk is lower when correlations are below 1.",
                "Unsystematic risk diversifies away; systematic risk does not.",
                "Beta measures sensitivity to the market; β = 1 moves with the market.",
                "CAPM: $E[R] = R_f + \\beta(E[R_m] - R_f)$.",
              ],
            },
          ],
          flashcards: [
            { front: "Diversification", back: "Combining imperfectly correlated assets to reduce risk without proportionally reducing expected return." },
            { front: "Systematic risk", back: "Market-wide risk that cannot be diversified away; measured by beta." },
            { front: "Beta (β)", back: "Sensitivity of an asset's returns to market returns." },
            { front: "CAPM", back: "$E[R_i] = R_f + \\beta_i(E[R_m] - R_f)$" },
            { front: "Correlation ρ = −1", back: "Perfectly opposite movements; risk can, in theory, be eliminated entirely." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A portfolio is 50% in an asset expected to return 12% and 50% in one expected to return 6%. What is the portfolio's expected return (in %)?",
              answer: 9,
              tolerance: 0.01,
              unit: "%",
              explain: "0.5 × 12 + 0.5 × 6 = 9%.",
            },
            {
              kind: "mcq",
              q: "Which risk does CAPM say investors are compensated for bearing?",
              options: ["Total risk (σ)", "Firm-specific risk", "Systematic (market) risk", "Liquidity risk only"],
              answer: 2,
              explain: "Firm-specific risk can be diversified away for free, so only systematic risk (beta) earns a premium.",
            },
            {
              kind: "truefalse",
              q: "A stock with a beta of 0 has an expected return equal to the risk-free rate under CAPM.",
              answer: true,
              explain: "With β = 0 the risk premium term vanishes, leaving $E[R] = R_f$.",
            },
            {
              kind: "mcq",
              q: "Diversification benefits are greatest when assets have a correlation of…",
              options: ["+1", "+0.8", "0", "−1"],
              answer: 3,
              explain: "Perfect negative correlation lets losses in one asset offset gains in the other most completely.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "personal-finance",
      title: "Personal Finance & Investing Basics",
      icon: "🏦",
      description: "Budgets, debt, emergency funds and evidence-based investing. Educational, not advice.",
      lessons: [
        {
          slug: "budgeting-debt",
          title: "Budgeting, Debt & Safety Nets",
          summary: "Building the foundation before you invest a single rupee.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "callout",
              tone: "warning",
              title: "Educational content",
              md: "This lesson teaches general principles. It is not personal financial advice. Rules, taxes and products differ by country; for decisions about your own money, consult a qualified, regulated adviser.",
            },
            {
              type: "text",
              md: "Your first salary arrives. Rent, food, a phone bill, a friend's wedding, and suddenly the month is gone. Professionals who build wealth rarely start with clever stock picks; they start with a **plan for cash flow** and a **safety net**.",
            },
            { type: "heading", text: "A starting budget: 50/30/20" },
            {
              type: "table",
              headers: ["Bucket", "Share of take-home pay", "On ₹40,000"],
              rows: [
                ["Needs (rent, food, transport, minimum loan payments)", "50%", "₹20,000"],
                ["Wants (dining out, travel, subscriptions)", "30%", "₹12,000"],
                ["Savings & extra debt repayment", "20%", "₹8,000"],
              ],
            },
            {
              type: "text",
              md: "It is a heuristic, not a law. In expensive cities needs may take 60%; the habit that matters is **paying yourself first**: automate the savings transfer on payday.",
            },
            { type: "heading", text: "The order of operations" },
            {
              type: "list",
              ordered: true,
              items: [
                "Build a starter **emergency fund**, then grow it to roughly 3–6 months of essential expenses in a safe, accessible account.",
                "Get adequate **insurance** (health, and term life if others depend on your income).",
                "Clear **high-interest debt** such as credit-card balances, which can cost 30–40% a year.",
                "Then invest for long-term goals.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Avalanche vs snowball",
              md: "**Avalanche**: pay off the highest-interest debt first; mathematically cheapest. **Snowball**: pay off the smallest balance first; quick wins keep many people motivated. Either beats paying only the minimums.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Your essential monthly expenses are ₹25,000. What is the upper end of a 3–6 month emergency fund (in ₹)?",
                  answer: 150000,
                  tolerance: 0,
                  unit: "₹",
                  explain: "6 × 25,000 = ₹1,50,000.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Behavioural economists Richard Thaler and Shlomo Benartzi designed \"Save More Tomorrow\", where employees pre-commit future pay rises to savings. In early trials, participants' savings rates roughly tripled over a few years, showing that defaults and automation beat willpower.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Paying the minimum on my credit card keeps me safe.\" The minimum mostly covers interest, so the balance shrinks very slowly. A large balance can take many years to clear and cost more in interest than the original purchases.",
            },
            {
              type: "keypoints",
              items: [
                "Budget so savings happen automatically, before spending.",
                "Emergency fund first: about 3–6 months of essentials.",
                "Kill high-interest debt before investing.",
                "Use defaults and automation to beat procrastination.",
              ],
            },
          ],
          flashcards: [
            { front: "50/30/20 rule", back: "A budgeting heuristic: 50% needs, 30% wants, 20% savings/debt repayment." },
            { front: "Emergency fund", back: "Easily accessible savings covering about 3–6 months of essential expenses." },
            { front: "Debt avalanche", back: "Repay the highest-interest debt first; minimises total interest." },
            { front: "Pay yourself first", back: "Move savings out automatically on payday, then spend what is left." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Under the 50/30/20 rule, how much of a ₹60,000 take-home salary goes to savings and extra debt repayment (in ₹)?",
              answer: 12000,
              tolerance: 0,
              unit: "₹",
              explain: "20% of 60,000 = ₹12,000.",
            },
            {
              kind: "mcq",
              q: "You have a credit card at 36% interest and a car loan at 9%. Under the avalanche method, which do you pay down first?",
              options: ["The car loan", "The credit card", "Whichever has the smaller balance", "Neither; invest instead"],
              answer: 1,
              explain: "Avalanche targets the highest interest rate first.",
            },
            {
              kind: "order",
              q: "Put this common financial foundation sequence in order.",
              items: ["Starter emergency fund", "Adequate insurance", "Pay off high-interest debt", "Invest for long-term goals"],
              explain: "Protect against shocks first, remove expensive debt, then invest.",
            },
            {
              kind: "truefalse",
              q: "An emergency fund is best kept in volatile stocks so it grows faster.",
              answer: false,
              explain: "Emergencies often coincide with market crashes. The fund must be safe and available when needed.",
            },
          ],
        },
        {
          slug: "investing-basics",
          title: "Investing Basics: Index Funds, Fees & Time",
          summary: "Asset classes, the power of low costs, and staying invested.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "callout",
              tone: "warning",
              title: "Educational content",
              md: "General education only, not a recommendation to buy or sell any product. All investing involves risk, including loss of capital.",
            },
            {
              type: "text",
              md: "In 2007 Warren Buffett bet a hedge-fund firm one million US dollars that a simple, low-cost S&P 500 index fund would beat a hand-picked basket of hedge funds over ten years. The index fund won comfortably. Why would \"doing less\" beat the professionals?",
            },
            { type: "heading", text: "Asset classes at a glance" },
            {
              type: "table",
              headers: ["Asset class", "Typical role", "Main risks"],
              rows: [
                ["Cash & deposits", "Safety, liquidity", "Inflation erodes value"],
                ["Bonds", "Income, stability", "Interest-rate and credit risk"],
                ["Equities (shares)", "Long-term growth", "High volatility, deep drawdowns"],
                ["Real estate, gold", "Diversification, inflation hedge", "Illiquidity, price swings"],
              ],
            },
            { type: "heading", text: "Fees compound too" },
            {
              type: "text",
              md: "Invest ₹10,000 for 30 years. At 7% a year it grows to about **₹76,100**. If a 1% annual fee cuts the net return to 6%, it grows to about **₹57,400**. That small-sounding fee consumed roughly a quarter of the final wealth.",
            },
            {
              type: "widget",
              widget: "compound-interest",
              caption: "Try the same amount at 7% versus 6% over 30 years and compare the ending balances.",
            },
            {
              type: "list",
              items: [
                "**Index funds / ETFs** track a whole market cheaply, giving instant diversification.",
                "**Active funds** try to beat the market; after fees, most fail to do so consistently over long periods (as reported repeatedly by S&P's SPIVA scorecards).",
                "**Rupee-cost averaging (SIPs)**: investing a fixed amount regularly buys more units when prices are low and removes the need to time the market.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Passive funds have grown from a niche product to a very large share of global fund assets, pushing fee levels down across the whole industry. Regulators in many countries now require clear disclosure of a fund's total expense ratio.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"I'll sell before the crash and buy back at the bottom.\" Market timing requires being right twice. Many of the market's best days occur close to its worst days, so investors who jump out often miss the rebound.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which choice most directly increases your long-run net return, all else equal?",
                  options: ["Trading more often", "Choosing a fund with a lower expense ratio", "Following hot tips on social media", "Holding only one stock"],
                  answer: 1,
                  explain: "Costs are one of the few things an investor controls, and lower fees compound in your favour.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Match assets to goals and time horizon: cash for the short term, equities for the long term.",
                "Diversify broadly; index funds do this cheaply.",
                "Fees compound against you; small percentages matter over decades.",
                "Time in the market generally beats timing the market.",
              ],
            },
          ],
          flashcards: [
            { front: "Index fund", back: "A fund that tracks a market index (e.g. Nifty 50, S&P 500) at low cost." },
            { front: "Expense ratio", back: "The annual fee a fund charges as a percentage of assets." },
            { front: "SIP / rupee-cost averaging", back: "Investing a fixed amount at regular intervals regardless of price." },
            { front: "Time horizon", back: "How long until you need the money; longer horizons can tolerate more volatility." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A ₹1,00,000 portfolio pays a 1.5% annual expense ratio. Roughly how much is the fee in the first year (in ₹)?",
              answer: 1500,
              tolerance: 0,
              unit: "₹",
              explain: "1.5% × 1,00,000 = ₹1,500.",
            },
            {
              kind: "mcq",
              q: "With a fixed monthly SIP, when prices fall your rupees buy…",
              options: ["Fewer units", "More units", "The same units", "No units"],
              answer: 1,
              explain: "A fixed amount divided by a lower price gives more units.",
            },
            {
              kind: "truefalse",
              q: "A 1% difference in annual fees makes a negligible difference over 30 years.",
              answer: false,
              explain: "Compounded over 30 years, 7% vs 6% turns ₹10,000 into about ₹76,100 vs ₹57,400.",
            },
            {
              kind: "multi",
              q: "Which are genuine advantages of broad index funds? (Select all.)",
              options: ["Low fees", "Built-in diversification", "Guaranteed returns", "No need to pick individual stocks"],
              answers: [0, 1, 3],
              explain: "Index funds still carry market risk; nothing guarantees returns.",
            },
          ],
        },
      ],
    },
  ],
};
