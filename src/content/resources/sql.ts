import type { CourseResources } from "./types";

export const sqlResources: CourseResources = {
  course: "sql",
  caseStudies: [
    {
      slug: "missing-customers-left-join",
      title: "The marketing report that lost 1,800 customers",
      summary: "An INNER JOIN silently dropped customers with no orders, skewing a campaign. LEFT JOIN, COUNT and NULLs told the true story.",
      units: ["joins", "summarising-data"],
      minutes: 14,
      scenario: `An online plant shop wanted to email customers who had signed up but **never ordered**, offering a first-purchase discount. An analyst wrote a query to count orders per customer and filter those with zero:

\`SELECT c.id, c.email, COUNT(o.id) AS orders\`
\`FROM customers c JOIN orders o ON o.customer_id = c.id\`
\`GROUP BY c.id, c.email HAVING COUNT(o.id) = 0;\`

It returned **no rows**. Concluding that everyone had ordered, the team cancelled the campaign. A month later, a dashboard showed 1,800 sign-ups with no purchases.`,
      data: {
        caption: "Table sizes",
        headers: ["Table", "Rows", "Notes"],
        rows: [
          ["customers", "12,400", "id, email, signed_up_at"],
          ["orders", "31,900", "id, customer_id, total_paise, created_at"],
          ["customers with ≥1 order", "10,600", ""],
        ],
      },
      questions: [
        "Why can the original query never return a row?",
        "Rewrite it with a LEFT JOIN. Why must you use `COUNT(o.id)` rather than `COUNT(*)`?",
        "Write an alternative using `NOT EXISTS`. Which do you find clearer?",
        "How many customers should the corrected query return, based on the table sizes?",
        "What simple sanity check would have caught the mistake before the campaign was cancelled?",
      ],
      outcome: `An INNER JOIN keeps only customers who have at least one matching order, so every group has a count ≥ 1 and \`HAVING COUNT(o.id) = 0\` can never be true.

\`SELECT c.id, c.email FROM customers c LEFT JOIN orders o ON o.customer_id = c.id GROUP BY c.id, c.email HAVING COUNT(o.id) = 0;\`

With a LEFT JOIN, customers without orders appear once with \`NULL\` order columns. \`COUNT(*)\` counts that row (giving 1), while \`COUNT(o.id)\` ignores NULLs (giving 0). The \`NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)\` version reads like the question being asked.

The answer is 12,400 − 10,600 = **1,800** customers. Comparing the result count against simple totals ("how many customers? how many have ordered?") would have flagged the impossible zero immediately.`,
      takeaways: [
        "INNER JOIN drops unmatched rows; use LEFT JOIN to keep them.",
        "`COUNT(column)` skips NULLs; `COUNT(*)` counts rows.",
        "`NOT EXISTS` is a clear way to ask \"which have none?\".",
        "Sanity-check query results against known totals.",
      ],
    },
    {
      slug: "update-without-where",
      title: "The UPDATE that changed every price",
      summary: "A rushed price correction without a WHERE clause — and the transactions, constraints and habits that prevent a repeat.",
      units: ["changing-data", "querying-basics", "subqueries"],
      minutes: 15,
      scenario: `At 11:40 pm before a sale, a developer at a small electronics retailer needed to fix the price of one product (id 2207) that had been entered as ₹1,999 instead of ₹19,999. In a hurry, connected directly to the production database, she ran:

\`UPDATE products SET price_paise = 1999900;\`

She'd forgotten the \`WHERE\` clause. All **4,312** products now cost ₹19,999. Within minutes customers were sharing screenshots of ₹19,999 phone cases. The last backup was from 2 am the previous night; 140 products had been added or edited since.`,
      data: {
        caption: "Timeline",
        headers: ["Time", "Event"],
        rows: [
          ["02:00", "Nightly backup"],
          ["09:00–23:30", "140 products added or edited"],
          ["23:40", "UPDATE without WHERE (4,312 rows affected)"],
          ["23:52", "Site put in maintenance mode"],
          ["00:45", "Prices restored from backup + audit log"],
        ],
      },
      questions: [
        "Write the correct UPDATE statement. How could she have previewed which rows it would change?",
        "How would wrapping the statement in a transaction (`BEGIN … ROLLBACK/COMMIT`) have helped?",
        "Suggest a CHECK constraint that would have stopped obviously wrong prices.",
        "The team restored the 140 recent edits from an audit log table. Write a query (using a subquery or CTE) that finds each product's latest logged price.",
        "List three process changes to prevent this in future.",
      ],
      outcome: `The correct statement is \`UPDATE products SET price_paise = 1999900 WHERE id = 2207;\`. Running \`SELECT * FROM products WHERE id = 2207;\` first previews the exact rows, and many clients report "rows affected" — 4,312 instead of 1 is an instant red flag.

Inside \`BEGIN; … \` she could have checked the count and issued \`ROLLBACK;\` before anything was permanent. A constraint such as \`CHECK (price_paise > 0 AND price_paise < 50000000)\` catches typos, though not this one, so the team also added a per-category sanity report.

Recent prices were restored with a CTE:

\`WITH latest AS (SELECT product_id, MAX(changed_at) AS t FROM price_log GROUP BY product_id)\`
\`SELECT l.product_id, l.new_price FROM price_log l JOIN latest ON l.product_id = latest.product_id AND l.changed_at = latest.t;\`

Afterwards the team enabled safe-update mode in their SQL client, removed direct write access to production, and required changes to run as reviewed migration scripts.`,
      takeaways: [
        "Always write the WHERE clause first, and preview with SELECT.",
        "Use transactions for manual data changes.",
        "Constraints encode business rules the database can enforce.",
        "Audit logs and backups make mistakes recoverable — test that they work.",
      ],
    },
  ],
  readings: {
    "querying-basics": [
      { title: "SQLBolt — interactive lessons", url: "https://sqlbolt.com/", source: "SQLBolt", type: "course", level: "intro", note: "Short exercises that run in your browser." },
      { title: "SELECT (SQLite)", url: "https://www.sqlite.org/lang_select.html", source: "sqlite.org", type: "docs", level: "intermediate", note: "The full SELECT grammar with diagrams." },
      { title: "PostgreSQL tutorial: querying a table", url: "https://www.postgresql.org/docs/current/tutorial-select.html", source: "PostgreSQL docs", type: "docs", level: "intro", note: "The official tutorial's take on SELECT." },
    ],
    "summarising-data": [
      { title: "Aggregate functions (PostgreSQL)", url: "https://www.postgresql.org/docs/current/functions-aggregate.html", source: "PostgreSQL docs", type: "docs", level: "intermediate", note: "COUNT, SUM, AVG and more, with NULL behaviour." },
      { title: "Aggregates tutorial", url: "https://www.postgresql.org/docs/current/tutorial-agg.html", source: "PostgreSQL docs", type: "docs", level: "intro", note: "GROUP BY and HAVING explained." },
      { title: "Select Star SQL", url: "https://selectstarsql.com/", source: "Zi Chong Kao", type: "book", level: "intro", note: "A free interactive book built around a real dataset." },
    ],
    joins: [
      { title: "Joins between tables", url: "https://www.postgresql.org/docs/current/tutorial-join.html", source: "PostgreSQL docs", type: "docs", level: "intro", note: "Inner and outer joins with examples." },
      { title: "Join (SQL)", url: "https://en.wikipedia.org/wiki/Join_(SQL)", source: "Wikipedia", type: "article", level: "intro", note: "All join types side by side." },
      { title: "SQLBolt — joins and NULLs", url: "https://sqlbolt.com/", source: "SQLBolt", type: "course", level: "intro", note: "Lessons 6–8 practise INNER/OUTER joins and NULL handling." },
    ],
    "changing-data": [
      { title: "Data manipulation (PostgreSQL)", url: "https://www.postgresql.org/docs/current/dml.html", source: "PostgreSQL docs", type: "docs", level: "intro", note: "INSERT, UPDATE, DELETE and RETURNING." },
      { title: "Constraints (PostgreSQL)", url: "https://www.postgresql.org/docs/current/ddl-constraints.html", source: "PostgreSQL docs", type: "docs", level: "intermediate", note: "PRIMARY KEY, FOREIGN KEY, UNIQUE and CHECK." },
      { title: "Transactions (PostgreSQL tutorial)", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", source: "PostgreSQL docs", type: "docs", level: "intermediate", note: "BEGIN, COMMIT and ROLLBACK." },
    ],
    subqueries: [
      { title: "WITH queries (CTEs)", url: "https://www.postgresql.org/docs/current/queries-with.html", source: "PostgreSQL docs", type: "docs", level: "intermediate", note: "Common table expressions, including recursive ones." },
      { title: "Subquery expressions", url: "https://www.postgresql.org/docs/current/functions-subquery.html", source: "PostgreSQL docs", type: "docs", level: "intermediate", note: "EXISTS, IN, ANY and ALL." },
      { title: "Use The Index, Luke", url: "https://use-the-index-luke.com/", source: "Markus Winand", type: "book", level: "advanced", note: "Free book on SQL performance for developers." },
    ],
  },
  competencies: [
    { id: "select", name: "Querying & filtering", description: "Select, filter and sort rows.", lessons: ["sql/querying-basics/select-and-where", "sql/querying-basics/order-by-limit", "sql/querying-basics/filtering-patterns"] },
    { id: "aggregate", name: "Aggregation", description: "Summarise data with aggregates, GROUP BY and HAVING.", lessons: ["sql/summarising-data/aggregate-functions", "sql/summarising-data/group-by-having"] },
    { id: "joins", name: "Joins", description: "Combine tables with inner and outer joins.", lessons: ["sql/joins/inner-join", "sql/joins/left-join"] },
    { id: "dml", name: "Changing data safely", description: "Define tables and modify rows with constraints.", lessons: ["sql/changing-data/create-table-constraints", "sql/changing-data/insert-rows", "sql/changing-data/update-delete"] },
    { id: "subqueries", name: "Subqueries & CTEs", description: "Compose queries from smaller queries.", lessons: ["sql/subqueries/subqueries-in-where", "sql/subqueries/ctes-and-correlated"] },
  ],
};
