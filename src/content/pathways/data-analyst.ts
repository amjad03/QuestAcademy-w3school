import type { Pathway } from "./types";

/** Sample data so learners can run their KPI queries in the browser (dates relative to today). */
const SALES_SETUP = `
CREATE TABLE orders (id INTEGER PRIMARY KEY, order_date TEXT, region TEXT, product TEXT, qty INTEGER, unit_price REAL);
INSERT INTO orders (order_date, region, product, qty, unit_price) VALUES
 (date('now','start of month'), 'South', 'Masala Chai 250g', 3, 180),
 (date('now','start of month','+1 day'), 'North', 'Filter Coffee 500g', 2, 420),
 (date('now','start of month','+1 day'), 'West', 'Green Tea 100g', 5, 150),
 (date('now','start of month','+2 days'), 'South', 'Filter Coffee 500g', 4, 420),
 (date('now','start of month','+2 days'), 'East', 'Assam Gold 250g', 1, 260),
 (date('now','start of month','+3 days'), 'North', 'Masala Chai 250g', 6, 180),
 (date('now','start of month','+4 days'), 'West', 'Cold Brew Pack', 2, 550),
 (date('now','start of month','+4 days'), 'South', 'Green Tea 100g', 3, 150),
 (date('now','start of month','+5 days'), 'East', 'Filter Coffee 500g', 1, 420),
 (date('now','start of month','+6 days'), 'North', 'Cold Brew Pack', 3, 550),
 (date('now','start of month','+6 days'), 'South', 'Assam Gold 250g', 2, 260),
 (date('now','start of month','+7 days'), 'West', 'Masala Chai 250g', 4, 180),
 (date('now','start of month','-3 days'), 'South', 'Filter Coffee 500g', 2, 420),
 (date('now','start of month','-10 days'), 'North', 'Green Tea 100g', 7, 150),
 (date('now','start of month','-15 days'), 'East', 'Cold Brew Pack', 1, 550);
`;

const CHURN_SETUP = `
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, city TEXT, joined TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, order_date TEXT, amount REAL);
INSERT INTO customers VALUES
 (1,'Ananya Iyer','Bengaluru',date('now','-400 days')), (2,'Rohit Verma','Delhi',date('now','-350 days')),
 (3,'Fatima Shaikh','Mumbai',date('now','-300 days')), (4,'Karthik Rao','Chennai',date('now','-280 days')),
 (5,'Neha Gupta','Pune',date('now','-200 days')), (6,'Arjun Nair','Kochi',date('now','-150 days')),
 (7,'Priya Das','Kolkata',date('now','-120 days'));
INSERT INTO orders (customer_id, order_date, amount) VALUES
 (1,date('now','-300 days'),1200),(1,date('now','-200 days'),850),(1,date('now','-150 days'),640),
 (2,date('now','-250 days'),2200),(2,date('now','-20 days'),900),
 (3,date('now','-280 days'),450),(3,date('now','-180 days'),700),
 (4,date('now','-100 days'),1500),
 (5,date('now','-190 days'),300),(5,date('now','-130 days'),520),(5,date('now','-95 days'),410),
 (6,date('now','-10 days'),980),(6,date('now','-5 days'),760);
`;

export const dataAnalyst: Pathway = {
  slug: "data-analyst",
  title: "Data Analyst",
  goal: "Turn raw business data into clear answers: query databases with SQL, clean and analyse data in Python, judge results statistically and present recommendations decision-makers trust.",
  roles: ["Junior data analyst", "Business / MIS analyst", "Operations or marketing analyst"],
  skills: ["SQL querying & joins", "Aggregations and KPIs", "Python for data wrangling", "Descriptive statistics", "Model evaluation basics", "Avoiding biased conclusions", "Communicating insights", "Spreadsheet-to-code migration"],
  weeks: 12,
  prerequisites: ["Comfortable with spreadsheets", "School-level maths (percentages, averages)"],
  color: "#2F6BFF",
  modules: [
    {
      title: "Query data with SQL",
      why: "Most company data lives in relational databases. SQL is the single most requested skill in analyst job postings.",
      lessonIds: [
        "sql/querying-basics/select-and-where",
        "sql/querying-basics/order-by-limit",
        "sql/querying-basics/filtering-patterns",
        "sql/summarising-data/aggregate-functions",
        "sql/summarising-data/group-by-having",
      ],
      assignment: {
        id: "da-sales-kpis",
        title: "Monthly sales KPI report",
        scenario:
          "Your manager needs this month’s numbers before Monday’s review: total revenue, number of orders, average order value, top 5 products by revenue and revenue by region — from an `orders(id, order_date, region, product, qty, unit_price)` table.",
        deliverables: ["One SQL query per KPI (5 queries)", "A short note explaining any assumptions (e.g. refunds, date range)", "The results summarised in 3–4 bullet points"],
        rubric: [
          { criterion: "Query correctness", description: "Each query returns the right figure for the stated definition.", points: 30 },
          { criterion: "Appropriate aggregation", description: "Correct use of SUM/COUNT/AVG with GROUP BY and filters.", points: 20 },
          { criterion: "Readable SQL", description: "Aliases, formatting and comments make queries easy to review.", points: 15 },
          { criterion: "Assumptions stated", description: "Date ranges and definitions written down explicitly.", points: 15 },
          { criterion: "Business summary", description: "Plain-language bullets a manager can act on.", points: 20 },
        ],
        submission: "code",
        codeLang: "sql",
        estimatedHours: 2,
        starter: "-- KPI 1: total revenue this month\nSELECT SUM(qty * unit_price) AS revenue\nFROM orders\nWHERE order_date >= date('now', 'start of month');\n",
        setup: SALES_SETUP,
        hints: ["Average order value = revenue ÷ number of distinct orders, not rows.", "Write the definition of each KPI as a comment above its query."],
      },
    },
    {
      title: "Combine tables and answer harder questions",
      why: "Real questions span customers, orders and products. Joins, subqueries and CTEs let you answer them in one place.",
      lessonIds: ["sql/joins/inner-join", "sql/joins/left-join", "sql/subqueries/subqueries-in-where", "sql/subqueries/ctes-and-correlated"],
      assignment: {
        id: "da-churn-query",
        title: "Find customers at risk of churning",
        scenario:
          "Marketing wants a win-back campaign. Using `customers(id, name, city, joined)` and `orders(id, customer_id, order_date, amount)`, list customers who ordered at least twice before but nothing in the last 90 days, with their lifetime spend.",
        deliverables: ["A single SQL query (CTEs welcome) producing the list", "Customers with zero orders handled correctly", "A one-paragraph note on how marketing should use the list"],
        rubric: [
          { criterion: "Join logic", description: "Correct join type; customers without recent orders are not lost.", points: 30 },
          { criterion: "Date logic", description: "The 90-day window and ‘at least twice before’ rule are implemented correctly.", points: 25 },
          { criterion: "Structure", description: "CTEs or subqueries make the logic readable step by step.", points: 20 },
          { criterion: "Business framing", description: "The note is practical and mentions caveats.", points: 25 },
        ],
        submission: "code",
        codeLang: "sql",
        estimatedHours: 2,
        starter: "-- Customers with 2+ orders and none in the last 90 days\nSELECT c.id, c.name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nGROUP BY c.id;\n",
        setup: CHURN_SETUP,
        hints: ["Build a CTE of order counts and last order date per customer first.", "A LEFT JOIN + IS NULL pattern finds ‘nothing recently’."],
      },
    },
    {
      title: "Python for data work",
      why: "When spreadsheets hit their limits, Python automates cleaning, reshaping and repeatable analysis.",
      lessonIds: [
        "python/python-basics/variables-and-types",
        "python/control-flow/loops",
        "python/functions/defining-functions",
        "python/collections/lists-and-tuples",
        "python/collections/dicts-and-sets",
        "python/collections/comprehensions",
        "python/robust-python/error-handling",
      ],
      assignment: {
        id: "da-clean-survey",
        title: "Clean a messy survey export",
        scenario:
          "A customer survey export has inconsistent city names (‘Bengaluru’, ‘bangalore ’, ‘BLR’), blank ages, and satisfaction scores stored as text. Write a Python function that cleans a list of row dictionaries and returns summary statistics per city.",
        deliverables: ["clean_rows(rows) that normalises fields and skips/flags invalid rows", "summarise(rows) returning count and average satisfaction per city", "Printed output for a sample of at least 10 rows"],
        rubric: [
          { criterion: "Cleaning rules", description: "Normalisation handles case, whitespace and known aliases.", points: 25 },
          { criterion: "Robustness", description: "Invalid values don’t crash the script; they are counted or reported.", points: 25 },
          { criterion: "Correct summary", description: "Per-city counts and averages are correct.", points: 25 },
          { criterion: "Readable code", description: "Small functions, clear names, comments for business rules.", points: 25 },
        ],
        submission: "code",
        codeLang: "python",
        estimatedHours: 3,
        hints: ["Keep an alias dict like {'blr': 'Bengaluru', 'bangalore': 'Bengaluru'}.", "Use try/except around number conversion and collect errors in a list."],
      },
    },
    {
      title: "Think statistically and avoid bad conclusions",
      why: "Analysts are paid for judgement: knowing when a pattern is real, when a metric misleads, and when bias creeps in.",
      lessonIds: [
        "psychology/foundations/research-methods",
        "psychology/cognition/cognitive-biases",
        "machine-learning/classification/evaluation-metrics",
        "machine-learning/generalisation/validation-bias-variance",
      ],
      assignment: {
        id: "da-ab-review",
        title: "Review an A/B test claim",
        scenario:
          "A product manager says: ‘The new checkout increased conversions from 4.0% to 4.6% in two days — let’s roll it out.’ Variant A had 1,200 visitors, B had 1,150. Write a short review memo.",
        deliverables: ["Calculation of the absolute and relative lift", "Discussion of sample size, test duration and novelty effects", "A clear recommendation with what extra data you’d need"],
        rubric: [
          { criterion: "Quantitative reasoning", description: "Correct lift figures and a sensible view on uncertainty.", points: 30 },
          { criterion: "Threats to validity", description: "Identifies duration, seasonality, sample size and bias issues.", points: 30 },
          { criterion: "Recommendation", description: "Clear, actionable and proportionate.", points: 25 },
          { criterion: "Communication", description: "Concise, non-technical language for a manager.", points: 15 },
        ],
        submission: "text",
        estimatedHours: 2,
        hints: ["Relative lift = (4.6 − 4.0) ÷ 4.0.", "Ask: would the result survive a full business cycle (at least one week)?"],
      },
    },
    {
      title: "From analysis to recommendation",
      why: "Insight only matters if it changes a decision. Strong analysts tell a clear story with evidence and trade-offs.",
      lessonIds: ["economics/supply-and-demand/elasticity", "finance/ratio-analysis/profitability-dupont", "ux-design/visual-design/hierarchy-contrast-gestalt"],
      assignment: {
        id: "da-capstone",
        title: "Capstone: pricing recommendation deck",
        scenario:
          "A subscription app is considering raising its monthly price from ₹199 to ₹249. You have last year’s price test: a 10% price increase in one city reduced sign-ups by 6%. Prepare a 5-slide outline (as text) with your analysis and recommendation.",
        deliverables: ["Slide-by-slide outline (title + key message + supporting number)", "Price elasticity estimate and revenue impact", "Risks, assumptions and a measurement plan"],
        rubric: [
          { criterion: "Analysis", description: "Elasticity and revenue impact computed and interpreted correctly.", points: 30 },
          { criterion: "Storyline", description: "Each slide has one clear message building to the recommendation.", points: 25 },
          { criterion: "Risks & assumptions", description: "Honest about what could go wrong and how to test it.", points: 25 },
          { criterion: "Visual thinking", description: "Proposes appropriate charts for each point.", points: 20 },
        ],
        submission: "text",
        estimatedHours: 4,
        hints: ["Elasticity ≈ %Δquantity ÷ %Δprice = −6% ÷ 10%.", "Lead with the recommendation, then the evidence."],
      },
    },
  ],
};
