import type { Subject } from "@/content/types";

/*
 * Every runnable SQL block runs in a fresh in-memory SQLite database, so each
 * one starts with its own small CREATE TABLE + INSERT. These seeds keep the
 * examples short and consistent; the LAST statement's result is displayed.
 */

const STUDENTS = `CREATE TABLE students (id INTEGER, name TEXT, city TEXT, score INTEGER);
INSERT INTO students VALUES
  (1, 'Asha', 'Delhi', 88),
  (2, 'Ben',  'Leeds', 72),
  (3, 'Chen', 'Delhi', 95),
  (4, 'Dara', 'Lagos', 64),
  (5, 'Eli',  'Leeds', 88);`;

const MOVIES = `CREATE TABLE movies (title TEXT, genre TEXT, year INTEGER, rating REAL);
INSERT INTO movies VALUES
  ('Inception',     'Sci-Fi',    2010, 8.8),
  ('Coco',          'Animation', 2017, 8.4),
  ('Interstellar',  'Sci-Fi',    2014, 8.7),
  ('Up',            'Animation', 2009, 8.3),
  ('Dangal',        'Drama',     2016, 8.3),
  ('Arrival',       'Sci-Fi',    2016, 7.9);`;

const CONTACTS = `CREATE TABLE contacts (name TEXT, phone TEXT, city TEXT, age INTEGER);
INSERT INTO contacts VALUES
  ('Sana',   '98765', 'Mumbai',  23),
  ('Samir',  NULL,    'Pune',    31),
  ('Leo',    '55501', 'Lisbon',  17),
  ('Maya',   NULL,    'Mumbai',  45),
  ('Oscar',  '44012', 'Oslo',    29);`;

const ORDERS = `CREATE TABLE orders (id INTEGER, customer TEXT, amount INTEGER, status TEXT);
INSERT INTO orders VALUES
  (1, 'Asha', 500,  'paid'),
  (2, 'Ben',  300,  'paid'),
  (3, 'Asha', 200,  'refunded'),
  (4, 'Chen', 900,  'paid'),
  (5, 'Ben',  NULL, 'pending');`;

const SHOP = `CREATE TABLE customers (id INTEGER, name TEXT, city TEXT);
INSERT INTO customers VALUES (1, 'Asha', 'Delhi'), (2, 'Ben', 'Leeds'), (3, 'Chen', 'Delhi'), (4, 'Dara', 'Lagos');
CREATE TABLE orders (id INTEGER, customer_id INTEGER, product TEXT, amount INTEGER);
INSERT INTO orders VALUES (101, 1, 'Laptop', 900), (102, 3, 'Phone', 600), (103, 1, 'Mouse', 40), (104, 2, 'Desk', 250);`;

const STAFF = `CREATE TABLE staff (name TEXT, dept TEXT, salary INTEGER);
INSERT INTO staff VALUES
  ('Asha', 'Eng',   90000),
  ('Ben',  'Eng',   70000),
  ('Chen', 'Sales', 50000),
  ('Dara', 'Sales', 65000),
  ('Eli',  'HR',    45000);`;

export const sql: Subject = {
  slug: "sql",
  title: "SQL",
  world: "code",
  icon: "🗃️",
  colors: ["#0EA5E9", "#6366F1"],
  tagline: "Ask questions of data — and get answers in milliseconds.",
  description:
    "SQL is the language of databases, used by apps, banks, hospitals and data analysts everywhere. Write real queries against a live SQLite database in your browser: filter and sort, summarise with GROUP BY, combine tables with JOINs, change data safely, design tables with constraints and nest queries inside queries.",
  levels: ["Beginner", "Intermediate"],
  stages: ["secondary", "ug", "pg", "lifelong"],
  topics: [
    /* ------------------------------------------------------------------ */
    /* TOPIC 1 — QUERYING                                                  */
    /* ------------------------------------------------------------------ */
    {
      slug: "querying-basics",
      title: "Querying Data",
      icon: "🔍",
      description: "Pick columns, filter rows, sort results and match patterns.",
      lessons: [
        {
          slug: "select-and-where",
          title: "SELECT & WHERE",
          summary: "Read columns from a table and keep only the rows you care about.",
          minutes: 12,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Every time you search a shopping site, check your exam results online or scroll a feed, a database somewhere answers a question. Those questions are written in **SQL** (Structured Query Language).\n\nData lives in **tables**: rows are records (one student), columns are fields (name, city, score).",
            },
            {
              type: "callout",
              tone: "note",
              title: "How these examples work",
              md: "Each example builds a tiny table with `CREATE TABLE` and `INSERT`, then queries it. Only the **last** statement's result is shown. Focus on the final `SELECT` — you'll learn the setup statements later.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "SELECT * means 'every column'",
              code: `${STUDENTS}

SELECT * FROM students;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Name the columns you want, in the order you want",
              code: `${STUDENTS}

SELECT name, score FROM students;`,
            },
            { type: "heading", text: "WHERE: filter rows" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${STUDENTS}

SELECT name, city
FROM students
WHERE city = 'Delhi';`,
            },
            {
              type: "table",
              headers: ["Operator", "Meaning"],
              rows: [
                ["`=`", "equal"],
                ["`<>` or `!=`", "not equal"],
                ["`>` `<` `>=` `<=`", "comparisons"],
                ["`AND` / `OR` / `NOT`", "combine conditions"],
              ],
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Combine conditions — use brackets to be clear",
              code: `${STUDENTS}

SELECT name, city, score
FROM students
WHERE score >= 80 AND (city = 'Delhi' OR city = 'Leeds');`,
            },
            { type: "heading", text: "Calculated columns and aliases" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "AS gives a column a friendly name",
              code: `${STUDENTS}

SELECT name, score, score + 5 AS curved_score
FROM students
WHERE city <> 'Lagos';`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: quotes",
              md: "Text values use **single quotes**: `'Delhi'`. Double quotes are for column or table names. Also, `=` on text is case-sensitive in SQLite: `city = 'delhi'` finds nothing.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Style",
              md: "SQL keywords aren't case-sensitive (`select` works), but writing them in CAPITALS and putting each clause on its own line makes queries much easier to read.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Using the `students` table above, how many rows does `SELECT * FROM students WHERE score = 88;` return?",
                  answer: 2,
                  explain: "Asha and Eli both scored 88.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`SELECT columns FROM table` reads data; `*` means all columns.",
                "`WHERE` keeps only rows where the condition is true.",
                "Combine with `AND`, `OR`, `NOT` — add brackets for clarity.",
                "`expr AS alias` names a calculated column.",
                "Text in single quotes.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `SELECT *` return?", back: "Every column of the table." },
            { front: "Which clause filters rows?", back: "`WHERE`" },
            { front: "Two ways to write 'not equal' in SQL?", back: "`<>` and `!=`" },
            { front: "What does `AS` do?", back: "Gives a column (or table) an alias — a temporary name." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which query returns only the names of students from Leeds?",
              options: [
                "`SELECT * FROM students WHERE city = 'Leeds';`",
                "`SELECT name FROM students WHERE city = 'Leeds';`",
                "`SELECT name WHERE city = 'Leeds' FROM students;`",
                "`SELECT name FROM students IF city = 'Leeds';`",
              ],
              answer: 1,
              explain: "Clause order is SELECT → FROM → WHERE, and `name` limits it to one column.",
            },
            {
              kind: "order",
              q: "Put these clauses in the order they're written.",
              items: ["SELECT", "FROM", "WHERE"],
              explain: "You always write SELECT, then FROM, then WHERE.",
            },
            {
              kind: "truefalse",
              q: "In SQL, text values should be wrapped in single quotes.",
              answer: true,
              explain: "Single quotes mark string literals; double quotes are for identifiers.",
            },
            {
              kind: "mcq",
              q: "Which rows match `WHERE score > 70 AND city = 'Leeds'` in the students table?",
              options: ["Ben only", "Eli only", "Ben and Eli", "Asha and Chen"],
              answer: 2,
              explain: "Ben (72) and Eli (88) are both in Leeds with scores above 70.",
            },
          ],
          challenge: {
            title: "Modern bargains",
            prompt:
              "The `books` table has columns `title`, `author`, `year`, `price`.\n\nReturn the **title** and **price** of books published in **2000 or later** that cost **less than 500**.",
            lang: "sql",
            setup: `CREATE TABLE books (title TEXT, author TEXT, year INTEGER, price INTEGER);
INSERT INTO books VALUES
  ('The Hobbit', 'Tolkien', 1937, 350),
  ('Wings of Fire', 'Kalam', 1999, 250),
  ('Atomic Habits', 'Clear', 2018, 499),
  ('Sapiens', 'Harari', 2011, 650),
  ('The Alchemist', 'Coelho', 1988, 299),
  ('Educated', 'Westover', 2018, 420);`,
            starter: `SELECT *
FROM books;`,
            tests: [
              { label: "returns exactly 2 books", check: "rows.length === 2" },
              {
                label: "the right books",
                check: "rows.map(r => r.title).sort().join('|') === 'Atomic Habits|Educated'",
              },
              {
                label: "only title and price columns",
                check: "columns.length === 2 && columns.map(c => c.toLowerCase()).sort().join() === 'price,title'",
              },
            ],
            solution: `SELECT title, price
FROM books
WHERE year >= 2000 AND price < 500;`,
            hints: [
              "Replace `*` with `title, price`.",
              "You need two conditions joined with `AND`.",
              "'Less than 500' means `price < 500` — 499 counts, 500 wouldn't.",
            ],
          },
        },
        {
          slug: "order-by-limit",
          title: "ORDER BY, LIMIT & DISTINCT",
          summary: "Sort results, keep just the top few, and remove duplicates.",
          minutes: 10,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Leaderboards, 'top 10 songs', 'cheapest flights first' — most real queries need sorting. SQL makes it a one-liner.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "ASC (default) = smallest first, DESC = largest first",
              code: `${MOVIES}

SELECT title, rating
FROM movies
ORDER BY rating DESC;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Sort by several columns: ties on the first are broken by the second",
              code: `${MOVIES}

SELECT genre, title, year
FROM movies
ORDER BY genre ASC, year DESC;`,
            },
            { type: "heading", text: "LIMIT and OFFSET" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Top 3 highest-rated movies",
              code: `${MOVIES}

SELECT title, rating
FROM movies
ORDER BY rating DESC
LIMIT 3;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "OFFSET skips rows — this is how 'page 2' works",
              code: `${MOVIES}

SELECT title
FROM movies
ORDER BY title
LIMIT 2 OFFSET 2;`,
            },
            { type: "heading", text: "DISTINCT: remove duplicates" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${MOVIES}

SELECT DISTINCT genre
FROM movies
ORDER BY genre;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: no ORDER BY, no promises",
              md: "Without `ORDER BY`, a database may return rows in any order — often insertion order, but that can change. If order matters (and with `LIMIT` it always does), **say so** with `ORDER BY`.",
            },
            {
              type: "callout",
              tone: "note",
              title: "Clause order",
              md: "`SELECT … FROM … WHERE … ORDER BY … LIMIT …` — `ORDER BY` comes after `WHERE`, and `LIMIT` comes last.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which movie comes first with `ORDER BY year ASC`?",
                  options: ["Inception", "Up", "Coco", "Arrival"],
                  answer: 1,
                  explain: "Up (2009) is the oldest movie in the table.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`ORDER BY col` sorts ascending; add `DESC` for descending.",
                "Multiple sort keys: `ORDER BY a, b DESC`.",
                "`LIMIT n` keeps the first n rows; `OFFSET k` skips k rows.",
                "`SELECT DISTINCT` removes duplicate rows.",
              ],
            },
          ],
          flashcards: [
            { front: "Default sort direction of ORDER BY?", back: "`ASC` — ascending (smallest / A first)." },
            { front: "How do you get only the first 5 rows?", back: "`LIMIT 5` at the end of the query." },
            { front: "What does `DISTINCT` do?", back: "Removes duplicate rows from the result." },
            { front: "What does `LIMIT 10 OFFSET 20` return?", back: "Rows 21–30 of the sorted result." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many rows does `SELECT DISTINCT genre FROM movies;` return for the movies table?",
              answer: 3,
              explain: "Sci-Fi, Animation and Drama.",
            },
            {
              kind: "order",
              q: "Arrange the clauses in the correct order.",
              items: ["SELECT", "FROM", "WHERE", "ORDER BY", "LIMIT"],
              explain: "LIMIT always comes last, after ORDER BY.",
            },
            {
              kind: "truefalse",
              q: "`ORDER BY rating DESC` puts the highest rating first.",
              answer: true,
              explain: "DESC = descending, largest first.",
            },
            {
              kind: "mcq",
              q: "Which query finds the single cheapest product?",
              options: [
                "`SELECT * FROM products LIMIT 1;`",
                "`SELECT * FROM products ORDER BY price DESC LIMIT 1;`",
                "`SELECT * FROM products ORDER BY price LIMIT 1;`",
                "`SELECT * FROM products WHERE LIMIT 1;`",
              ],
              answer: 2,
              explain: "Sort ascending by price so the cheapest is first, then keep one row.",
            },
          ],
          challenge: {
            title: "Most expensive three",
            prompt:
              "The `products` table has `name`, `category` and `price`. Return the **name** and **price** of the **3 most expensive** products, most expensive first.",
            lang: "sql",
            setup: `CREATE TABLE products (name TEXT, category TEXT, price INTEGER);
INSERT INTO products VALUES
  ('Headphones', 'audio', 2999),
  ('Keyboard', 'computer', 1499),
  ('Monitor', 'computer', 8999),
  ('Speaker', 'audio', 4599),
  ('Mouse', 'computer', 699),
  ('Webcam', 'computer', 3499);`,
            starter: `SELECT name, price
FROM products;`,
            tests: [
              { label: "exactly 3 rows", check: "rows.length === 3" },
              {
                label: "correct order",
                check: "rows.map(r => r.name).join() === 'Monitor,Speaker,Webcam'",
              },
              { label: "price column included", check: "rows[0].price === 8999" },
            ],
            solution: `SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;`,
            hints: ["Sort with `ORDER BY price DESC`.", "Then add `LIMIT 3` at the very end."],
          },
        },
        {
          slug: "filtering-patterns",
          title: "IN, BETWEEN, LIKE & NULL",
          summary: "Write smarter filters: lists of values, ranges, text patterns and missing data.",
          minutes: 12,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Your contacts app lets you search 'everyone named Sa-something in Mumbai or Pune'. These four tools make filters like that short and readable.",
            },
            { type: "heading", text: "IN: match any value in a list" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${CONTACTS}

SELECT name, city
FROM contacts
WHERE city IN ('Mumbai', 'Pune');`,
            },
            { type: "heading", text: "BETWEEN: inclusive ranges" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "BETWEEN 18 AND 30 includes both 18 and 30",
              code: `${CONTACTS}

SELECT name, age
FROM contacts
WHERE age BETWEEN 18 AND 30;`,
            },
            { type: "heading", text: "LIKE: text patterns" },
            {
              type: "table",
              headers: ["Pattern", "Matches"],
              rows: [
                ["`'Sa%'`", "starts with Sa (Sana, Samir)"],
                ["`'%a'`", "ends with a"],
                ["`'%ar%'`", "contains ar anywhere"],
                ["`'L_o'`", "L, any ONE character, then o (Leo)"],
              ],
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${CONTACTS}

SELECT name
FROM contacts
WHERE name LIKE 'sa%';`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "SQLite quirk",
              md: "In SQLite, `LIKE` ignores case for English letters — so `'sa%'` matches Sana and Samir. Other databases (like PostgreSQL) are case-sensitive here and use `ILIKE` for case-insensitive matching.",
            },
            { type: "heading", text: "NULL: the missing value" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Who has no phone number on file?",
              code: `${CONTACTS}

SELECT name
FROM contacts
WHERE phone IS NULL;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: = NULL never works",
              md: "`NULL` means *unknown*, and comparing anything to unknown gives unknown — never true. So `WHERE phone = NULL` returns **no rows**. Always use `IS NULL` or `IS NOT NULL`. Also note: an empty string `''` is **not** NULL.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Proof: this returns nothing",
              code: `${CONTACTS}

SELECT name
FROM contacts
WHERE phone = NULL;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "NOT works with all of them",
              code: `${CONTACTS}

SELECT name, city, phone
FROM contacts
WHERE city NOT IN ('Mumbai') AND phone IS NOT NULL;`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "multi",
                  q: "Which names match `LIKE '%a'`?",
                  options: ["Sana", "Samir", "Maya", "Oscar"],
                  answers: [0, 2],
                  explain: "`'%a'` means 'ends with a' — Sana and Maya.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`IN (a, b, c)` is shorthand for several `OR`s.",
                "`BETWEEN x AND y` includes both ends.",
                "`LIKE`: `%` = any number of characters, `_` = exactly one.",
                "Test missing values with `IS NULL` / `IS NOT NULL`, never `= NULL`.",
              ],
            },
          ],
          flashcards: [
            { front: "What does `%` mean in a LIKE pattern?", back: "Any sequence of characters (including none)." },
            { front: "What does `_` mean in a LIKE pattern?", back: "Exactly one character." },
            { front: "Is BETWEEN inclusive?", back: "Yes — both endpoints are included." },
            { front: "How do you find rows where email is missing?", back: "`WHERE email IS NULL`" },
            { front: "Is `''` the same as NULL?", back: "No. An empty string is a known (empty) value; NULL means unknown/missing." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which condition is equivalent to `age >= 18 AND age <= 30`?",
              options: ["`age IN (18, 30)`", "`age BETWEEN 18 AND 30`", "`age LIKE '18%30'`", "`age > 18 AND age < 30`"],
              answer: 1,
              explain: "BETWEEN is inclusive on both ends. `IN (18, 30)` matches only those two exact values.",
            },
            {
              kind: "truefalse",
              q: "`WHERE phone = NULL` returns the rows with missing phone numbers.",
              answer: false,
              explain: "Comparisons with NULL are never true. Use `IS NULL`.",
            },
            {
              kind: "fill",
              q: "To match names that start with 'J', write `WHERE name LIKE '___'`.",
              answer: ["J%"],
              explain: "`J%` = J followed by anything.",
            },
            {
              kind: "numeric",
              q: "How many contacts match `WHERE age BETWEEN 17 AND 29`?",
              answer: 3,
              explain: "Sana (23), Leo (17) and Oscar (29) — both ends count.",
              difficulty: 2,
            },
          ],
          challenge: {
            title: "Missing emails",
            prompt:
              "The `users` table has `name`, `email` and `country`. Some emails are missing (NULL).\n\nReturn the **name** of every user with **no email**, sorted alphabetically. Careful: an empty string is not the same as missing!",
            lang: "sql",
            setup: `CREATE TABLE users (name TEXT, email TEXT, country TEXT);
INSERT INTO users VALUES
  ('Sara', 'sara@mail.com', 'IN'),
  ('Tom', NULL, 'UK'),
  ('Ama', NULL, 'GH'),
  ('Ravi', 'ravi@mail.com', 'IN'),
  ('Lea', '', 'FR');`,
            starter: `SELECT name
FROM users
WHERE email = NULL;`,
            tests: [
              { label: "two users found", check: "rows.length === 2" },
              { label: "Ama then Tom", check: "rows[0].name === 'Ama' && rows[1].name === 'Tom'" },
            ],
            solution: `SELECT name
FROM users
WHERE email IS NULL
ORDER BY name;`,
            hints: ["`= NULL` never matches — use `IS NULL`.", "Add `ORDER BY name` for alphabetical order."],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 2 — SUMMARISING                                               */
    /* ------------------------------------------------------------------ */
    {
      slug: "summarising-data",
      title: "Summarising Data",
      icon: "📊",
      description: "Count, total and average your data, then break the numbers down by group.",
      lessons: [
        {
          slug: "aggregate-functions",
          title: "Aggregate Functions",
          summary: "Collapse many rows into one answer with COUNT, SUM, AVG, MIN and MAX.",
          minutes: 12,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A shop owner doesn't want to read 10,000 receipts — they want **one number**: total sales today. **Aggregate functions** squash many rows into a single summary value.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Look at the raw data first",
              code: `${ORDERS}

SELECT * FROM orders;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${ORDERS}

SELECT COUNT(*)    AS num_orders,
       SUM(amount) AS total,
       MIN(amount) AS smallest,
       MAX(amount) AS largest
FROM orders;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Aggregates work on filtered rows too",
              code: `${ORDERS}

SELECT COUNT(*) AS paid_orders, SUM(amount) AS paid_total
FROM orders
WHERE status = 'paid';`,
            },
            { type: "heading", text: "COUNT(*) vs COUNT(column)" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${ORDERS}

SELECT COUNT(*)        AS all_rows,
       COUNT(amount)   AS rows_with_amount,
       COUNT(DISTINCT customer) AS customers
FROM orders;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: aggregates skip NULL",
              md: "`COUNT(*)` counts rows (5), but `COUNT(amount)` skips the NULL (4). `AVG(amount)` also ignores NULLs: it divides by 4, not 5. Usually that's what you want — but know it's happening!",
            },
            { type: "heading", text: "AVG and ROUND" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${ORDERS}

SELECT AVG(amount)           AS average,
       ROUND(AVG(amount), 1) AS rounded
FROM orders;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: integer division",
              md: "In SQLite, `7 / 2` is `3` because both numbers are integers. Write `7 / 2.0` (or `7 * 1.0 / 2`) to get `3.5`. `AVG()` always returns a decimal, so it's safe.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `SELECT 7 / 2 AS int_div, 7 / 2.0 AS real_div;`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Using the orders table, what is `SUM(amount)`?",
                  answer: 1900,
                  explain: "500 + 300 + 200 + 900 = 1900; the NULL is ignored.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`COUNT`, `SUM`, `AVG`, `MIN`, `MAX` turn many rows into one value.",
                "`COUNT(*)` counts rows; `COUNT(col)` counts non-NULL values.",
                "`COUNT(DISTINCT col)` counts unique values.",
                "Aggregates ignore NULLs; `WHERE` filters rows before aggregating.",
                "Integer ÷ integer truncates in SQLite — use `2.0`.",
              ],
            },
          ],
          flashcards: [
            { front: "Difference between `COUNT(*)` and `COUNT(col)`?", back: "`COUNT(*)` counts all rows; `COUNT(col)` skips rows where col is NULL." },
            { front: "How do you round an average to 2 decimals?", back: "`ROUND(AVG(col), 2)`" },
            { front: "What is `5 / 2` in SQLite?", back: "`2` — integer division. Use `5 / 2.0` for 2.5." },
            { front: "How do you count unique customers?", back: "`COUNT(DISTINCT customer)`" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "For the orders table, what does `AVG(amount)` return?",
              answer: 475,
              explain: "1900 ÷ 4 non-NULL values = 475.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "What does `COUNT(DISTINCT customer)` return for the orders table?",
              options: ["5", "4", "3", "2"],
              answer: 2,
              explain: "Asha, Ben and Chen — three unique customers.",
            },
            {
              kind: "truefalse",
              q: "`MAX()` works on text as well as numbers.",
              answer: true,
              explain: "For text it returns the alphabetically last value.",
            },
            {
              kind: "multi",
              q: "Which are aggregate functions?",
              options: ["`SUM`", "`ROUND`", "`MIN`", "`COUNT`"],
              answers: [0, 2, 3],
              explain: "`ROUND` works on a single value per row; it isn't an aggregate.",
            },
          ],
          challenge: {
            title: "Stationery shop totals",
            prompt:
              "The `sales` table has `item`, `qty` and `price` (price per unit). Return **one row** with two columns:\n\n- `total_items` — the total quantity sold\n- `revenue` — the total money earned (qty × price, summed)",
            lang: "sql",
            setup: `CREATE TABLE sales (item TEXT, qty INTEGER, price INTEGER);
INSERT INTO sales VALUES
  ('pen', 10, 5),
  ('notebook', 4, 40),
  ('bag', 1, 350);`,
            starter: `SELECT SUM(qty) AS total_items
FROM sales;`,
            tests: [
              { label: "one summary row", check: "rows.length === 1" },
              {
                label: "columns named total_items and revenue",
                check: "columns.map(c => c.toLowerCase()).join() === 'total_items,revenue'",
              },
              { label: "total_items is 15", check: "Object.values(rows[0])[0] === 15" },
              { label: "revenue is 560", check: "Object.values(rows[0])[1] === 560" },
            ],
            solution: `SELECT SUM(qty) AS total_items,
       SUM(qty * price) AS revenue
FROM sales;`,
            hints: [
              "You can put an expression inside an aggregate: `SUM(qty * price)`.",
              "Name each column with `AS`.",
            ],
          },
        },
        {
          slug: "group-by-having",
          title: "GROUP BY & HAVING",
          summary: "Calculate a summary for each group, then filter the groups themselves.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "'Total sales' is one number. 'Total sales **per city**' is a whole report. `GROUP BY` splits rows into buckets and runs your aggregate once per bucket.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "One row per city",
              code: `${STUDENTS}

SELECT city, COUNT(*) AS students, AVG(score) AS avg_score
FROM students
GROUP BY city;`,
            },
            {
              type: "illustration",
              emoji: "🧺🧺🧺",
              caption: "GROUP BY sorts rows into baskets (Delhi, Leeds, Lagos), then each basket is summarised into one row.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Sort the groups by an aggregate",
              code: `${ORDERS}

SELECT customer, SUM(amount) AS spent
FROM orders
GROUP BY customer
ORDER BY spent DESC;`,
            },
            { type: "heading", text: "HAVING: filter the groups" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Cities with more than one student",
              code: `${STUDENTS}

SELECT city, COUNT(*) AS students
FROM students
GROUP BY city
HAVING COUNT(*) > 1;`,
            },
            {
              type: "table",
              headers: ["", "WHERE", "HAVING"],
              rows: [
                ["Filters…", "individual rows", "whole groups"],
                ["Runs…", "before grouping", "after grouping"],
                ["Can use aggregates?", "No", "Yes"],
              ],
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Both together: only paid orders, then only big spenders",
              code: `${ORDERS}

SELECT customer, SUM(amount) AS paid_total
FROM orders
WHERE status = 'paid'
GROUP BY customer
HAVING SUM(amount) >= 500
ORDER BY paid_total DESC;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: un-grouped columns",
              md: "Every column in `SELECT` should either be in `GROUP BY` or wrapped in an aggregate. SQLite won't complain if you break this rule — it silently picks a value from some row in the group — but most databases throw an error, and your results can be misleading.",
            },
            {
              type: "callout",
              tone: "exam",
              title: "Interview favourite",
              md: "The full clause order is **SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT**. Mnemonic: *Sweet Frogs Will Grab Huge Orange Lollies*.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You want departments whose average salary exceeds 60,000. Which clause holds `AVG(salary) > 60000`?",
                  options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
                  answer: 1,
                  explain: "Conditions on aggregates belong in HAVING.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`GROUP BY col` produces one row per distinct value of col.",
                "Aggregates then run once per group.",
                "`WHERE` filters rows before grouping; `HAVING` filters groups after.",
                "Select only grouped columns and aggregates.",
              ],
            },
          ],
          flashcards: [
            { front: "What does GROUP BY do?", back: "Splits rows into groups sharing a value, so aggregates are computed per group." },
            { front: "WHERE vs HAVING?", back: "WHERE filters rows before grouping; HAVING filters groups after aggregation." },
            { front: "Full clause order?", back: "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT" },
            { front: "Can WHERE use `COUNT(*)`?", back: "No — aggregates aren't known until after grouping. Use HAVING." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many rows does `SELECT city, COUNT(*) FROM students GROUP BY city;` return?",
              answer: 3,
              explain: "Three distinct cities: Delhi, Leeds and Lagos.",
            },
            {
              kind: "order",
              q: "Order these clauses as they must be written.",
              items: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
              explain: "Rows are filtered, grouped, groups filtered, then sorted.",
            },
            {
              kind: "truefalse",
              q: "HAVING can be used to filter on aggregate values like `SUM(amount)`.",
              answer: true,
              explain: "That's exactly HAVING's job.",
            },
            {
              kind: "mcq",
              q: "In the students table, what is the average score for Leeds?",
              options: ["72", "80", "88", "160"],
              answer: 1,
              explain: "Ben 72 and Eli 88 → (72 + 88) / 2 = 80.",
            },
          ],
          challenge: {
            title: "Busy cities",
            prompt:
              "The `orders` table has `customer`, `city` and `amount`.\n\nFor each city with **at least 2 orders**, show `city` and the **total amount**. Put the highest total first.",
            lang: "sql",
            setup: `CREATE TABLE orders (customer TEXT, city TEXT, amount INTEGER);
INSERT INTO orders VALUES
  ('Asha', 'Delhi', 500),
  ('Ben', 'Leeds', 300),
  ('Chen', 'Delhi', 200),
  ('Dara', 'Lagos', 900),
  ('Eli', 'Leeds', 150),
  ('Fay', 'Delhi', 100);`,
            starter: `SELECT city, SUM(amount) AS total
FROM orders;`,
            tests: [
              { label: "two cities qualify", check: "rows.length === 2" },
              { label: "Delhi first with 800", check: "rows[0].city === 'Delhi' && Object.values(rows[0]).includes(800)" },
              { label: "Leeds second with 450", check: "rows[1].city === 'Leeds' && Object.values(rows[1]).includes(450)" },
            ],
            solution: `SELECT city, SUM(amount) AS total
FROM orders
GROUP BY city
HAVING COUNT(*) >= 2
ORDER BY total DESC;`,
            hints: [
              "Group with `GROUP BY city`.",
              "Filter groups with `HAVING COUNT(*) >= 2` — Lagos only has one order.",
              "Finish with `ORDER BY total DESC`.",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 3 — JOINS                                                     */
    /* ------------------------------------------------------------------ */
    {
      slug: "joins",
      title: "Joining Tables",
      icon: "🔗",
      description: "Combine related tables to answer questions no single table can.",
      lessons: [
        {
          slug: "inner-join",
          title: "INNER JOIN",
          summary: "Link rows from two tables through a shared key.",
          minutes: 14,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Good databases don't repeat information. Instead of writing a customer's name and city on every order, an order stores just a `customer_id` that **points** to the customers table. A **JOIN** follows those pointers to stitch the tables back together.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "The orders table only knows customer IDs",
              code: `${SHOP}

SELECT * FROM orders;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "JOIN ... ON says how rows match up",
              code: `${SHOP}

SELECT orders.id, customers.name, orders.product
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;`,
            },
            {
              type: "illustration",
              emoji: "🧩",
              caption: "Each order row is matched with the customer row whose id equals its customer_id.",
            },
            { type: "heading", text: "Table aliases keep it short" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${SHOP}

SELECT c.name, c.city, o.product, o.amount
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
WHERE c.city = 'Delhi'
ORDER BY o.amount DESC;`,
            },
            {
              type: "callout",
              tone: "note",
              title: "JOIN = INNER JOIN",
              md: "Writing just `JOIN` means `INNER JOIN`. An inner join keeps only rows that have a match in **both** tables. Dara has no orders, so she doesn't appear.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: ambiguous columns",
              md: "Both tables have an `id` column. Writing plain `id` after joining raises *ambiguous column name*. Prefix it: `o.id` or `c.id`.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: forgetting ON",
              md: "A join without a proper `ON` condition pairs **every** row with **every** row (a *cross join*): 4 customers × 4 orders = 16 nonsense rows.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Join + aggregate: revenue per customer",
              code: `${SHOP}

SELECT c.name, SUM(o.amount) AS spent
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.name
ORDER BY spent DESC;`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many rows does the INNER JOIN of orders and customers produce for the shop data?",
                  answer: 4,
                  explain: "All 4 orders have a matching customer. (Dara has none, but she isn't an order.)",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "A **foreign key** (like `customer_id`) points to another table's primary key.",
                "`JOIN other ON a.key = b.key` matches rows; `JOIN` means `INNER JOIN`.",
                "Inner joins drop rows without a match.",
                "Use table aliases and prefix shared column names.",
              ],
            },
          ],
          flashcards: [
            { front: "What does an INNER JOIN return?", back: "Only rows that have a match in both tables." },
            { front: "What is a foreign key?", back: "A column that refers to the primary key of another table." },
            { front: "What happens if you omit the join condition?", back: "You get a cross join — every row paired with every row." },
            { front: "What does `FROM orders o` do?", back: "Gives the orders table the alias `o`." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which customer is missing from the INNER JOIN result?",
              options: ["Asha", "Ben", "Chen", "Dara"],
              answer: 3,
              explain: "Dara has no orders, so there's nothing to match.",
            },
            {
              kind: "truefalse",
              q: "`JOIN` on its own means `INNER JOIN`.",
              answer: true,
              explain: "INNER is the default join type.",
            },
            {
              kind: "fill",
              q: "Complete: `SELECT ... FROM orders o JOIN customers c ___ o.customer_id = c.id`",
              answer: ["ON"],
              explain: "`ON` introduces the join condition.",
            },
            {
              kind: "numeric",
              q: "Without an ON condition, how many rows would joining 4 customers with 4 orders give?",
              answer: 16,
              explain: "A cross join gives 4 × 4 = 16 combinations.",
              difficulty: 2,
            },
          ],
          challenge: {
            title: "Who bought what?",
            prompt:
              "Tables: `customers(id, name)` and `orders(id, customer_id, product)`.\n\nShow each order's **customer name** and **product**, as columns `name` and `product`, sorted by product. Orders whose customer doesn't exist should be left out.",
            lang: "sql",
            setup: `CREATE TABLE customers (id INTEGER, name TEXT);
INSERT INTO customers VALUES (1, 'Asha'), (2, 'Ben'), (3, 'Chen');
CREATE TABLE orders (id INTEGER, customer_id INTEGER, product TEXT);
INSERT INTO orders VALUES (101, 1, 'Laptop'), (102, 3, 'Phone'), (103, 1, 'Mouse'), (104, 9, 'Desk');`,
            starter: `SELECT *
FROM orders;`,
            tests: [
              { label: "three matched orders", check: "rows.length === 3" },
              { label: "sorted by product", check: "rows.map(r => r.product).join() === 'Laptop,Mouse,Phone'" },
              { label: "correct customer names", check: "rows.map(r => r.name).join() === 'Asha,Asha,Chen'" },
            ],
            solution: `SELECT c.name, o.product
FROM orders o
JOIN customers c ON o.customer_id = c.id
ORDER BY o.product;`,
            hints: [
              "Join on `o.customer_id = c.id`.",
              "An INNER JOIN automatically drops order 104 (customer 9 doesn't exist).",
            ],
          },
        },
        {
          slug: "left-join",
          title: "LEFT JOIN & Finding Gaps",
          summary: "Keep every row from one table, even without a match — and use that to find what's missing.",
          minutes: 14,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "'Which customers have **never** ordered?' 'Which students haven't submitted homework?' An inner join can't answer these, because it throws away the unmatched rows — the very rows you're asking about. Enter `LEFT JOIN`.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Every customer appears; missing order data becomes NULL",
              code: `${SHOP}

SELECT c.name, o.product
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id;`,
            },
            {
              type: "text",
              md: "**LEFT** means 'keep everything from the table on the left of the word JOIN'. Dara has no orders, so her `product` is `NULL`.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "The anti-join pattern: keep only the unmatched",
              code: `${SHOP}

SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.id IS NULL;`,
            },
            { type: "heading", text: "Counting with LEFT JOIN" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Compare COUNT(*) with COUNT(o.id)",
              code: `${SHOP}

SELECT c.name,
       COUNT(*)    AS wrong_count,
       COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name
ORDER BY c.name;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: COUNT(*) after a LEFT JOIN",
              md: "Dara still has **one row** (filled with NULLs), so `COUNT(*)` says 1. Count a column from the right-hand table — `COUNT(o.id)` — which skips NULLs and correctly gives 0.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: WHERE can undo a LEFT JOIN",
              md: "`WHERE o.amount > 100` removes rows where `o.amount` is NULL — silently turning your LEFT JOIN back into an inner join. Put conditions about the right table inside `ON` if you want to keep unmatched rows.",
            },
            { type: "heading", text: "Joining three tables" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `CREATE TABLE students (id INTEGER, name TEXT);
INSERT INTO students VALUES (1, 'Mia'), (2, 'Raj');
CREATE TABLE courses (id INTEGER, title TEXT);
INSERT INTO courses VALUES (10, 'Python'), (20, 'SQL');
CREATE TABLE enrolments (student_id INTEGER, course_id INTEGER);
INSERT INTO enrolments VALUES (1, 10), (1, 20), (2, 20);

SELECT s.name, c.title
FROM enrolments e
JOIN students s ON s.id = e.student_id
JOIN courses  c ON c.id = e.course_id
ORDER BY s.name, c.title;`,
            },
            {
              type: "callout",
              tone: "fact",
              title: "Many-to-many",
              md: "A student takes many courses and a course has many students. A **junction table** like `enrolments` stores the pairs — one of the most common designs in real databases.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In `customers LEFT JOIN orders`, which table's rows are all kept?",
                  options: ["customers", "orders", "both", "neither"],
                  answer: 0,
                  explain: "The left table — the one written before `LEFT JOIN`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`LEFT JOIN` keeps all left-table rows; missing right-side values are NULL.",
                "Find unmatched rows with `LEFT JOIN ... WHERE right.id IS NULL`.",
                "After a LEFT JOIN, count a right-table column, not `*`.",
                "Chain several JOINs to walk across many tables.",
              ],
            },
          ],
          flashcards: [
            { front: "What does LEFT JOIN keep?", back: "Every row of the left table, with NULLs where the right table has no match." },
            { front: "How do you find customers with no orders?", back: "`LEFT JOIN orders ... WHERE orders.id IS NULL`" },
            { front: "Why use `COUNT(o.id)` instead of `COUNT(*)` after a LEFT JOIN?", back: "`COUNT(*)` counts the NULL-filled row as 1; `COUNT(o.id)` correctly gives 0." },
            { front: "What is a junction table?", back: "A table linking two others in a many-to-many relationship, e.g. enrolments(student_id, course_id)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many rows does `customers LEFT JOIN orders` return for the shop data (4 customers, Asha has 2 orders, Ben and Chen 1 each)?",
              answer: 5,
              explain: "Asha 2 rows + Ben 1 + Chen 1 + Dara 1 (with NULLs) = 5.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "An INNER JOIN always returns at least as many rows as a LEFT JOIN of the same tables.",
              answer: false,
              explain: "It's the opposite: a LEFT JOIN returns everything the inner join does, plus unmatched left rows.",
            },
            {
              kind: "mcq",
              q: "After a LEFT JOIN, what value fills right-table columns with no match?",
              options: ["0", "''", "NULL", "The left value"],
              answer: 2,
              explain: "Missing matches are filled with NULL.",
            },
          ],
          challenge: {
            title: "Order counts for everyone",
            prompt:
              "Tables: `customers(id, name)` and `orders(id, customer_id, product)`.\n\nFor **every** customer show `name` and `order_count` (how many orders they placed) — customers with no orders must show **0**. Sort by name.",
            lang: "sql",
            setup: `CREATE TABLE customers (id INTEGER, name TEXT);
INSERT INTO customers VALUES (1, 'Asha'), (2, 'Ben'), (3, 'Chen'), (4, 'Dara');
CREATE TABLE orders (id INTEGER, customer_id INTEGER, product TEXT);
INSERT INTO orders VALUES (101, 1, 'Laptop'), (102, 3, 'Phone'), (103, 1, 'Mouse');`,
            starter: `SELECT c.name, COUNT(*) AS order_count
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.name;`,
            tests: [
              { label: "all 4 customers listed", check: "rows.length === 4" },
              { label: "sorted by name", check: "rows.map(r => r.name).join() === 'Asha,Ben,Chen,Dara'" },
              {
                label: "counts are 2, 0, 1, 0",
                check: "rows.map(r => Object.values(r)[1]).join() === '2,0,1,0'",
              },
            ],
            solution: `SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name
ORDER BY c.name;`,
            hints: [
              "An inner JOIN drops Ben and Dara — switch to `LEFT JOIN`.",
              "`COUNT(*)` would give them 1. Count `o.id` instead.",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 4 — CHANGING DATA & DESIGNING TABLES                          */
    /* ------------------------------------------------------------------ */
    {
      slug: "changing-data",
      title: "Creating & Changing Data",
      icon: "✏️",
      description: "Design tables with constraints, add rows, update them and delete them safely.",
      lessons: [
        {
          slug: "create-table-constraints",
          title: "CREATE TABLE & Constraints",
          summary: "Design tables with column types, primary keys and rules that keep bad data out.",
          minutes: 15,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A database is only as good as its data. **Constraints** are rules you build into a table — 'every user must have an email', 'no two users share one' — so the database itself refuses bad data, no matter which app sends it.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `CREATE TABLE players (
  id       INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  level    INTEGER DEFAULT 1 CHECK (level >= 1),
  country  TEXT
);

INSERT INTO players (username, country) VALUES ('nova', 'IN');
INSERT INTO players (username, level) VALUES ('blaze', 7);

SELECT * FROM players;`,
            },
            {
              type: "table",
              headers: ["Constraint", "Rule it enforces"],
              rows: [
                ["`PRIMARY KEY`", "Uniquely identifies each row. In SQLite, `INTEGER PRIMARY KEY` auto-numbers itself."],
                ["`NOT NULL`", "The column must have a value."],
                ["`UNIQUE`", "No two rows can share the value."],
                ["`DEFAULT x`", "Value used when none is given."],
                ["`CHECK (cond)`", "Every row must satisfy the condition."],
                ["`REFERENCES t(col)`", "Foreign key: the value must exist in another table."],
              ],
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "This one fails on purpose — read the error message!",
              code: `CREATE TABLE players (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE
);
INSERT INTO players (username) VALUES ('nova');
INSERT INTO players (username) VALUES ('nova');`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Errors are your friend",
              md: "A failed insert means the constraint did its job. Try changing the second `'nova'` to `NULL` — you'll get a *NOT NULL constraint failed* error instead.",
            },
            { type: "heading", text: "Data types in SQLite" },
            {
              type: "list",
              items: [
                "`INTEGER` — whole numbers",
                "`REAL` — decimals",
                "`TEXT` — strings (dates are usually stored as text like `'2026-10-20'`)",
                "`BLOB` — raw bytes",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "SQLite is relaxed about types",
              md: "Most databases reject `'abc'` in an INTEGER column. SQLite uses *type affinity* and will usually store it anyway. That's why `CHECK` constraints matter even more here.",
            },
            { type: "heading", text: "Foreign keys" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `PRAGMA foreign_keys = ON;   -- SQLite needs this switched on
CREATE TABLE teams (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE members (
  id      INTEGER PRIMARY KEY,
  name    TEXT NOT NULL,
  team_id INTEGER REFERENCES teams(id)
);
INSERT INTO teams (name) VALUES ('Falcons'), ('Tigers');
INSERT INTO members (name, team_id) VALUES ('Ivy', 1), ('Omar', 2);

SELECT m.name, t.name AS team
FROM members m JOIN teams t ON t.id = m.team_id;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: SQLite foreign keys are off by default",
              md: "Without `PRAGMA foreign_keys = ON;`, SQLite accepts a `team_id` of 99 even if no such team exists. Other databases enforce foreign keys automatically.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Changing structure: ALTER TABLE and DROP TABLE",
              code: `CREATE TABLE notes (id INTEGER PRIMARY KEY, body TEXT);
ALTER TABLE notes ADD COLUMN pinned INTEGER DEFAULT 0;
INSERT INTO notes (body) VALUES ('Buy milk');
DROP TABLE IF EXISTS old_notes;
SELECT * FROM notes;`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which constraint stops two users registering the same email?",
                  options: ["NOT NULL", "DEFAULT", "UNIQUE", "CHECK"],
                  answer: 2,
                  explain: "UNIQUE forbids duplicate values in the column.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`CREATE TABLE name (col TYPE constraints, ...)` defines a table.",
                "`PRIMARY KEY` identifies rows; `INTEGER PRIMARY KEY` auto-increments in SQLite.",
                "`NOT NULL`, `UNIQUE`, `DEFAULT`, `CHECK` guard data quality.",
                "`REFERENCES` creates a foreign key (enable with `PRAGMA foreign_keys = ON` in SQLite).",
              ],
            },
          ],
          flashcards: [
            { front: "What two properties does a primary key have?", back: "Unique and not NULL — it identifies exactly one row." },
            { front: "What does `DEFAULT 'free'` do?", back: "Uses 'free' when an INSERT doesn't supply that column." },
            { front: "Write a CHECK that keeps age non-negative.", back: "`CHECK (age >= 0)`" },
            { front: "How do you enable foreign keys in SQLite?", back: "`PRAGMA foreign_keys = ON;`" },
            { front: "How do you add a column to an existing table?", back: "`ALTER TABLE t ADD COLUMN c TYPE;`" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "A table can have two rows with the same primary key value.",
              answer: false,
              explain: "Primary keys must be unique.",
            },
            {
              kind: "multi",
              q: "Which inserts would FAIL on `players(id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE)` that already contains 'nova'?",
              options: [
                "`INSERT INTO players (username) VALUES ('nova');`",
                "`INSERT INTO players (username) VALUES (NULL);`",
                "`INSERT INTO players (username) VALUES ('zed');`",
                "`INSERT INTO players (username) VALUES ('Nova');`",
              ],
              answers: [0, 1],
              explain: "Duplicate 'nova' breaks UNIQUE and NULL breaks NOT NULL. 'Nova' differs in case, so it's a different value.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "Which column type stores decimals in SQLite?",
              options: ["INTEGER", "REAL", "TEXT", "BLOB"],
              answer: 1,
              explain: "REAL holds floating-point numbers.",
            },
            {
              kind: "fill",
              q: "A column that refers to another table's primary key is called a ___ key.",
              answer: ["foreign"],
              explain: "Foreign keys link tables together.",
            },
          ],
          challenge: {
            title: "Design a members table",
            prompt:
              "Create a table `members` with:\n\n- `id` — integer primary key\n- `email` — text, **required** and **unique**\n- `plan` — text that defaults to `'free'`\n\nInsert two members: `'ana@mail.com'` on plan `'pro'`, and `'raj@mail.com'` with **no plan given**. Finish with `SELECT * FROM members ORDER BY id;`",
            lang: "sql",
            starter: `CREATE TABLE members (
  id INTEGER PRIMARY KEY
);

SELECT * FROM members ORDER BY id;`,
            tests: [
              { label: "two members inserted", check: "rows.length === 2" },
              {
                label: "columns id, email, plan",
                check: "columns.map(c => c.toLowerCase()).join() === 'id,email,plan'",
              },
              { label: "first member is ana on pro", check: "rows[0].email === 'ana@mail.com' && rows[0].plan === 'pro'" },
              { label: "default plan is 'free'", check: "rows[1].email === 'raj@mail.com' && rows[1].plan === 'free'" },
              { label: "ids auto-assigned", check: "rows[0].id === 1 && rows[1].id === 2" },
            ],
            solution: `CREATE TABLE members (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  plan TEXT DEFAULT 'free'
);
INSERT INTO members (email, plan) VALUES ('ana@mail.com', 'pro');
INSERT INTO members (email) VALUES ('raj@mail.com');
SELECT * FROM members ORDER BY id;`,
            hints: [
              "Combine constraints on one column: `email TEXT NOT NULL UNIQUE`.",
              "`plan TEXT DEFAULT 'free'`",
              "For Raj, list only the email column in the INSERT so the default kicks in.",
            ],
          },
        },
        {
          slug: "insert-rows",
          title: "INSERT INTO",
          summary: "Add new rows one at a time, several at once, or copied from a query.",
          minutes: 10,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Every sign-up, every 'Add to cart', every new message is an `INSERT` happening behind the scenes.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Name the columns, then supply matching values",
              code: `CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER DEFAULT 0);

INSERT INTO tasks (title) VALUES ('Finish SQL lesson');
INSERT INTO tasks (title, done) VALUES ('Drink water', 1);

SELECT * FROM tasks;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Insert several rows in one statement",
              code: `CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER DEFAULT 0);

INSERT INTO tasks (title, done) VALUES
  ('Water plants', 0),
  ('Call grandma', 1),
  ('Read 10 pages', 0);

SELECT * FROM tasks;`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Always list your columns",
              md: "`INSERT INTO tasks VALUES (...)` without column names works only if you give a value for **every** column in the exact table order. If someone later adds a column, that query breaks. Naming columns is safer and clearer.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Skipped columns get their DEFAULT, or NULL",
              code: `CREATE TABLE people (name TEXT, nickname TEXT, active INTEGER DEFAULT 1);
INSERT INTO people (name) VALUES ('Yusuf');
SELECT name, nickname, active FROM people;`,
            },
            { type: "heading", text: "INSERT ... SELECT" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Copy rows from a query into another table",
              code: `CREATE TABLE tasks (title TEXT, done INTEGER);
INSERT INTO tasks VALUES ('A', 1), ('B', 0), ('C', 1);
CREATE TABLE archive (title TEXT);

INSERT INTO archive (title)
SELECT title FROM tasks WHERE done = 1;

SELECT * FROM archive;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: value count must match",
              md: "`INSERT INTO tasks (title, done) VALUES ('Nap');` fails — two columns listed, one value given. And text values need quotes: `VALUES (Nap)` is read as a column name.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "A single INSERT statement can add several rows.",
                  answer: true,
                  explain: "Separate each row's values with commas: `VALUES (...), (...), (...)`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`INSERT INTO t (cols) VALUES (vals);`",
                "Multiple rows: `VALUES (...), (...)`.",
                "Omitted columns get DEFAULT or NULL.",
                "`INSERT INTO t (cols) SELECT ...` copies query results.",
              ],
            },
          ],
          flashcards: [
            { front: "Syntax to add one row?", back: "`INSERT INTO table (col1, col2) VALUES (v1, v2);`" },
            { front: "What value does an omitted column get?", back: "Its DEFAULT, or NULL if there is no default." },
            { front: "How do you copy rows from one table to another?", back: "`INSERT INTO target (cols) SELECT cols FROM source WHERE ...;`" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which statement is valid?",
              options: [
                "`INSERT tasks (title) VALUES ('Run');`",
                "`INSERT INTO tasks (title) VALUES ('Run');`",
                "`INSERT INTO tasks VALUE 'Run';`",
                "`ADD INTO tasks (title) VALUES ('Run');`",
              ],
              answer: 1,
              explain: "The form is `INSERT INTO table (columns) VALUES (values);`.",
            },
            {
              kind: "numeric",
              q: "After the 'several rows' example above, how many rows are in tasks?",
              answer: 3,
              explain: "One INSERT added three rows.",
            },
            {
              kind: "truefalse",
              q: "In `INSERT INTO people (name) VALUES ('Yusuf')`, the `active` column becomes NULL even though it has `DEFAULT 1`.",
              answer: false,
              explain: "The DEFAULT applies, so `active` is 1. Only `nickname` (no default) is NULL.",
            },
          ],
          challenge: {
            title: "New pets",
            prompt:
              "The `pets` table (`id INTEGER PRIMARY KEY, name, species`) already holds Bruno the dog.\n\nAdd **Milo** (a `cat`) and **Kiwi** (a `parrot`), then return all pets with `SELECT * FROM pets ORDER BY id;`",
            lang: "sql",
            setup: `CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT NOT NULL, species TEXT);
INSERT INTO pets (name, species) VALUES ('Bruno', 'dog');`,
            starter: `-- your INSERT here

SELECT * FROM pets ORDER BY id;`,
            tests: [
              { label: "3 pets in total", check: "rows.length === 3" },
              { label: "Bruno still first", check: "rows[0].name === 'Bruno'" },
              { label: "Milo is a cat", check: "rows.some(r => r.name === 'Milo' && r.species === 'cat')" },
              { label: "Kiwi is a parrot", check: "rows.some(r => r.name === 'Kiwi' && r.species === 'parrot')" },
            ],
            solution: `INSERT INTO pets (name, species) VALUES
  ('Milo', 'cat'),
  ('Kiwi', 'parrot');

SELECT * FROM pets ORDER BY id;`,
            hints: [
              "List only `(name, species)` — the id fills itself in.",
              "Two rows in one INSERT: `VALUES (...), (...)`.",
            ],
          },
        },
        {
          slug: "update-delete",
          title: "UPDATE & DELETE",
          summary: "Change and remove existing rows — and avoid the most famous SQL mistake.",
          minutes: 12,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Prices change, users edit profiles, old posts get deleted. `UPDATE` and `DELETE` change data that already exists — powerful, and permanent.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `CREATE TABLE menu (item TEXT, price INTEGER, available INTEGER);
INSERT INTO menu VALUES ('Dosa', 80, 1), ('Idli', 50, 1), ('Vada', 40, 0);

UPDATE menu SET price = 90 WHERE item = 'Dosa';

SELECT * FROM menu;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Update several columns, using the current value",
              code: `CREATE TABLE menu (item TEXT, price INTEGER, available INTEGER);
INSERT INTO menu VALUES ('Dosa', 80, 1), ('Idli', 50, 1), ('Vada', 40, 0);

UPDATE menu
SET price = price + 10, available = 1
WHERE price < 60;

SELECT * FROM menu;`,
            },
            { type: "heading", text: "DELETE" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `CREATE TABLE menu (item TEXT, price INTEGER, available INTEGER);
INSERT INTO menu VALUES ('Dosa', 80, 1), ('Idli', 50, 1), ('Vada', 40, 0);

DELETE FROM menu WHERE available = 0;

SELECT * FROM menu;`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: the missing WHERE",
              md: "`UPDATE menu SET price = 0;` sets **every** price to zero. `DELETE FROM menu;` empties the whole table. There's no undo button in production! Run the matching `SELECT ... WHERE ...` first to preview exactly which rows you'll touch.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "See the damage a missing WHERE does",
              code: `CREATE TABLE menu (item TEXT, price INTEGER);
INSERT INTO menu VALUES ('Dosa', 80), ('Idli', 50), ('Vada', 40);

UPDATE menu SET price = 0;   -- oops: no WHERE

SELECT * FROM menu;`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Professional safety net",
              md: "Real systems wrap risky changes in a **transaction**: `BEGIN;` … check the result … then `COMMIT;` to keep it or `ROLLBACK;` to undo it.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What does `DELETE FROM menu;` do?",
                  options: ["Deletes the table itself", "Deletes all rows, keeps the table", "Does nothing without WHERE", "Raises an error"],
                  answer: 1,
                  explain: "It removes every row. `DROP TABLE` would remove the table itself.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "`UPDATE t SET col = value WHERE condition;`",
                "Expressions can use the old value: `SET price = price * 1.1`.",
                "`DELETE FROM t WHERE condition;` removes rows.",
                "No WHERE = every row is affected. Preview with SELECT first.",
              ],
            },
          ],
          flashcards: [
            { front: "Syntax to change a value?", back: "`UPDATE table SET col = value WHERE condition;`" },
            { front: "What happens with `UPDATE` and no WHERE?", back: "Every row in the table is updated." },
            { front: "DELETE vs DROP TABLE?", back: "DELETE removes rows; DROP TABLE removes the table and its structure." },
            { front: "How can you undo changes before saving them?", back: "Use a transaction: `BEGIN;` ... `ROLLBACK;`" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "After the 'several columns' example, what is Idli's price?",
              answer: 60,
              explain: "Idli was 50 (< 60), so it became 50 + 10 = 60.",
            },
            {
              kind: "truefalse",
              q: "`UPDATE` can change more than one column in one statement.",
              answer: true,
              explain: "Separate them with commas: `SET a = 1, b = 2`.",
            },
            {
              kind: "order",
              q: "Order a safe workflow for deleting rows.",
              items: ["Write a SELECT with the WHERE condition", "Check the rows it returns", "Run DELETE with the same WHERE", "Verify with SELECT again"],
              explain: "Preview, confirm, act, verify.",
            },
          ],
          challenge: {
            title: "Bookshop clean-up",
            prompt:
              "The `products` table has `name`, `category`, `price` and `stock`.\n\n1. Raise the price of every product in the `books` category by **10**.\n2. Delete every product with **0** stock.\n3. Finish with `SELECT name, price FROM products ORDER BY name;`",
            lang: "sql",
            setup: `CREATE TABLE products (name TEXT, category TEXT, price INTEGER, stock INTEGER);
INSERT INTO products VALUES
  ('Atlas', 'books', 300, 5),
  ('Comic', 'books', 120, 0),
  ('Crayons', 'art', 80, 12),
  ('Novel', 'books', 250, 3),
  ('Paints', 'art', 200, 0);`,
            starter: `-- 1. UPDATE

-- 2. DELETE

SELECT name, price FROM products ORDER BY name;`,
            tests: [
              { label: "out-of-stock items removed", check: "rows.length === 3 && rows.map(r => r.name).join() === 'Atlas,Crayons,Novel'" },
              { label: "book prices raised by 10", check: "rows[0].price === 310 && rows[2].price === 260" },
              { label: "art prices unchanged", check: "rows[1].price === 80" },
            ],
            solution: `UPDATE products SET price = price + 10 WHERE category = 'books';
DELETE FROM products WHERE stock = 0;
SELECT name, price FROM products ORDER BY name;`,
            hints: [
              "`UPDATE products SET price = price + 10 WHERE category = 'books';`",
              "`DELETE FROM products WHERE stock = 0;`",
            ],
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* TOPIC 5 — SUBQUERIES                                                */
    /* ------------------------------------------------------------------ */
    {
      slug: "subqueries",
      title: "Subqueries & CTEs",
      icon: "🪆",
      description: "Nest queries inside queries to answer multi-step questions.",
      lessons: [
        {
          slug: "subqueries-in-where",
          title: "Subqueries in WHERE",
          summary: "Use the result of one query as a value or list inside another.",
          minutes: 13,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "'Who earns more than the average?' sounds like one question, but it's really two: *what is the average?* and *who beats it?* A **subquery** lets you answer both at once — like Russian nesting dolls, one query sits inside another.",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Step 1: the inner question on its own",
              code: `${STAFF}

SELECT AVG(salary) FROM staff;`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Step 2: plug it in as a scalar subquery",
              code: `${STAFF}

SELECT name, salary
FROM staff
WHERE salary > (SELECT AVG(salary) FROM staff)
ORDER BY salary DESC;`,
            },
            {
              type: "callout",
              tone: "note",
              title: "Why not just WHERE salary > AVG(salary)?",
              md: "Aggregates aren't allowed in `WHERE`, because WHERE looks at one row at a time. The subquery computes the average separately first.",
            },
            { type: "heading", text: "IN with a subquery" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Customers who have placed at least one order",
              code: `${SHOP}

SELECT name
FROM customers
WHERE id IN (SELECT customer_id FROM orders);`,
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Who holds the top salary?",
              code: `${STAFF}

SELECT name, salary
FROM staff
WHERE salary = (SELECT MAX(salary) FROM staff);`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: NOT IN and NULL",
              md: "If the subquery's list contains even one `NULL`, `x NOT IN (...)` returns **no rows at all**, since SQL can't be sure x differs from an unknown value. Add `WHERE col IS NOT NULL` inside the subquery, or use `NOT EXISTS` (next lesson).",
            },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Watch NOT IN return nothing",
              code: `CREATE TABLE a (x INTEGER);
INSERT INTO a VALUES (1), (2), (3);
CREATE TABLE b (y INTEGER);
INSERT INTO b VALUES (1), (NULL);

SELECT x FROM a WHERE x NOT IN (SELECT y FROM b);`,
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: scalar means ONE value",
              md: "With `=` or `>`, the subquery must return a single value. `WHERE salary = (SELECT salary FROM staff)` returns many values — most databases raise an error, and SQLite quietly uses just the first one.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What does `SELECT AVG(salary) FROM staff;` return?",
                  answer: 64000,
                  explain: "(90000 + 70000 + 50000 + 65000 + 45000) / 5 = 320000 / 5 = 64000.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "A subquery is a SELECT in brackets inside another query.",
                "Scalar subqueries return one value, used with `=`, `>`, `<`...",
                "`IN (SELECT ...)` checks membership in a list of results.",
                "Beware `NOT IN` when the list may contain NULL.",
              ],
            },
          ],
          flashcards: [
            { front: "What is a scalar subquery?", back: "A subquery that returns exactly one value (one row, one column)." },
            { front: "Why can't WHERE use AVG() directly?", back: "WHERE filters rows one at a time, before any aggregation happens." },
            { front: "What's dangerous about `NOT IN (subquery)`?", back: "If the subquery returns a NULL, NOT IN matches no rows." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many staff earn more than the average (64,000)?",
              answer: 3,
              explain: "Asha 90k, Ben 70k and Dara 65k.",
            },
            {
              kind: "mcq",
              q: "Which query finds the cheapest product(s)?",
              options: [
                "`SELECT * FROM products WHERE price = MIN(price);`",
                "`SELECT * FROM products WHERE price = (SELECT MIN(price) FROM products);`",
                "`SELECT MIN(*) FROM products;`",
                "`SELECT * FROM products HAVING MIN(price);`",
              ],
              answer: 1,
              explain: "The subquery computes the minimum first; WHERE can't use MIN directly.",
            },
            {
              kind: "truefalse",
              q: "`WHERE id IN (SELECT customer_id FROM orders)` returns customers who have at least one order.",
              answer: true,
              explain: "Their id appears in the list of customer_ids from orders.",
            },
          ],
          challenge: {
            title: "Above-average earners",
            prompt:
              "Using the `staff` table (`name`, `dept`, `salary`), return the **name** and **salary** of everyone who earns **more than the company average**, highest salary first.",
            lang: "sql",
            setup: `CREATE TABLE staff (name TEXT, dept TEXT, salary INTEGER);
INSERT INTO staff VALUES
  ('Asha', 'Eng', 90000),
  ('Ben', 'Eng', 70000),
  ('Chen', 'Sales', 50000),
  ('Dara', 'Sales', 65000),
  ('Eli', 'HR', 45000);`,
            starter: `SELECT name, salary
FROM staff
WHERE salary > 0;`,
            tests: [
              { label: "three people", check: "rows.length === 3" },
              { label: "highest first", check: "rows.map(r => r.name).join() === 'Asha,Ben,Dara'" },
              { label: "salary column included", check: "rows[2].salary === 65000" },
            ],
            solution: `SELECT name, salary
FROM staff
WHERE salary > (SELECT AVG(salary) FROM staff)
ORDER BY salary DESC;`,
            hints: [
              "Replace `0` with a subquery: `(SELECT AVG(salary) FROM staff)`.",
              "Don't forget `ORDER BY salary DESC`.",
            ],
          },
        },
        {
          slug: "ctes-and-correlated",
          title: "Derived Tables, CTEs & EXISTS",
          summary: "Query a query, name it with WITH, and write subqueries that look at the outer row.",
          minutes: 16,
          xp: 50,
          blocks: [
            {
              type: "text",
              md: "Analysts often build answers in layers: first total things up, then filter or rank the totals. SQL lets you treat a query's result as a **temporary table**.",
            },
            { type: "heading", text: "Subquery in FROM (a derived table)" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              code: `${STAFF}

SELECT dept, avg_salary
FROM (
  SELECT dept, AVG(salary) AS avg_salary
  FROM staff
  GROUP BY dept
) AS dept_stats
WHERE avg_salary > 55000;`,
            },
            { type: "heading", text: "WITH: Common Table Expressions" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Same result, but the steps read top to bottom",
              code: `${STAFF}

WITH dept_stats AS (
  SELECT dept, AVG(salary) AS avg_salary
  FROM staff
  GROUP BY dept
)
SELECT dept, avg_salary
FROM dept_stats
WHERE avg_salary > 55000;`,
            },
            {
              type: "callout",
              tone: "tip",
              title: "Why analysts love CTEs",
              md: "A CTE gives each step a **name**. You can define several, separated by commas — `WITH a AS (...), b AS (...)` — and later ones can use earlier ones. Long reports become readable recipes.",
            },
            { type: "heading", text: "Correlated subqueries" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "The inner query uses s.dept from the OUTER row",
              code: `${STAFF}

SELECT s.name, s.dept, s.salary
FROM staff s
WHERE s.salary > (
  SELECT AVG(salary) FROM staff WHERE dept = s.dept
);`,
            },
            {
              type: "text",
              md: "For each person, the subquery re-runs with **their** department, asking 'what's the average in *my* team?'. That's what makes it **correlated**.",
            },
            { type: "heading", text: "EXISTS and NOT EXISTS" },
            {
              type: "code",
              lang: "sql",
              runnable: true,
              caption: "Customers with no orders — NULL-safe",
              code: `${SHOP}

SELECT c.name
FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);`,
            },
            {
              type: "callout",
              tone: "note",
              title: "EXISTS only asks 'any rows?'",
              md: "`EXISTS (subquery)` is true if the subquery returns at least one row; the selected columns don't matter, so `SELECT 1` is the convention. Unlike `NOT IN`, `NOT EXISTS` behaves sensibly with NULLs.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Gotcha: derived tables need a name",
              md: "Many databases require an alias for a subquery in `FROM` — `( ... ) AS dept_stats`. SQLite is forgiving, but always naming it keeps your SQL portable and readable.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What makes a subquery *correlated*?",
                  options: [
                    "It uses GROUP BY",
                    "It refers to a column from the outer query",
                    "It appears in the FROM clause",
                    "It returns more than one row",
                  ],
                  answer: 1,
                  explain: "A correlated subquery depends on the current outer row, like `dept = s.dept`.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "A subquery in `FROM` acts as a temporary table — give it an alias.",
                "`WITH name AS (...)` defines a reusable, readable step (a CTE).",
                "Correlated subqueries reference the outer row and run per row.",
                "`EXISTS` / `NOT EXISTS` test whether any matching rows exist.",
              ],
            },
          ],
          flashcards: [
            { front: "What does CTE stand for?", back: "Common Table Expression — a named subquery defined with WITH." },
            { front: "What is a derived table?", back: "A subquery in the FROM clause, used like a table." },
            { front: "When is `EXISTS (...)` true?", back: "When the subquery returns at least one row." },
            { front: "Why prefer NOT EXISTS over NOT IN?", back: "NOT EXISTS isn't broken by NULLs in the subquery." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many departments have an average salary above 55,000? (Eng 80,000; Sales 57,500; HR 45,000)",
              answer: 2,
              explain: "Eng and Sales.",
            },
            {
              kind: "multi",
              q: "Who earns more than their own department's average?",
              options: ["Asha", "Ben", "Chen", "Dara", "Eli"],
              answers: [0, 3],
              explain: "Asha 90k > Eng avg 80k; Dara 65k > Sales avg 57.5k. Eli equals the HR average, so isn't *more*.",
              difficulty: 3,
            },
            {
              kind: "fill",
              q: "A CTE begins with the keyword ___.",
              answer: ["WITH"],
              explain: "`WITH name AS (SELECT ...)`",
            },
            {
              kind: "truefalse",
              q: "In `EXISTS (SELECT 1 FROM ...)`, the `1` affects the result.",
              answer: false,
              explain: "EXISTS only checks whether rows exist; the selected value is irrelevant.",
            },
          ],
          challenge: {
            title: "Stars of their teams",
            prompt:
              "Using `staff` (`name`, `dept`, `salary`), return the **name** and **dept** of everyone who earns **more than the average salary of their own department**. Sort by name.",
            lang: "sql",
            setup: `CREATE TABLE staff (name TEXT, dept TEXT, salary INTEGER);
INSERT INTO staff VALUES
  ('Asha', 'Eng', 90000),
  ('Ben', 'Eng', 70000),
  ('Chen', 'Sales', 50000),
  ('Dara', 'Sales', 65000),
  ('Eli', 'HR', 45000),
  ('Fay', 'HR', 55000);`,
            starter: `SELECT s.name, s.dept
FROM staff s
WHERE s.salary > ( /* average of s's department */ 0 )
ORDER BY s.name;`,
            tests: [
              { label: "three stars", check: "rows.length === 3" },
              { label: "Asha, Dara, Fay", check: "rows.map(r => r.name).join() === 'Asha,Dara,Fay'" },
              { label: "dept column included", check: "rows.map(r => r.dept).join() === 'Eng,Sales,HR'" },
            ],
            solution: `SELECT s.name, s.dept
FROM staff s
WHERE s.salary > (
  SELECT AVG(salary) FROM staff WHERE dept = s.dept
)
ORDER BY s.name;`,
            hints: [
              "Inside the brackets: `SELECT AVG(salary) FROM staff WHERE dept = s.dept`.",
              "Alternatively, build a CTE of department averages and JOIN it on `dept`.",
            ],
          },
        },
      ],
    },
  ],
};
