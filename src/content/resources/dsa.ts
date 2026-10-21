import type { CourseResources } from "./types";

export const dsaResources: CourseResources = {
  course: "dsa",
  caseStudies: [
    {
      slug: "search-box-that-froze",
      title: "The search box that froze at 10,000 users",
      summary: "A quadratic duplicate check quietly turned a fast feature into a 40-second wait.",
      units: ["complexity", "sorting-searching"],
      minutes: 15,
      scenario: `A student start-up built a campus marketplace. When a seller lists an item, the app checks whether a near-identical listing already exists so buyers aren't spammed. The first version compared the new listing's normalised title against **every** existing listing, and inside that loop it also scanned every *other* listing to build a "similar items" list.

During testing with 300 listings the check took 9 ms. At launch week the site crossed 10,000 listings and the "Post" button started taking over 40 seconds; some requests timed out entirely. The team's first instinct was to buy a bigger server.

A junior engineer instead timed the check at different sizes and plotted the results (table below). She noticed that doubling the data roughly *quadrupled* the time.`,
      data: {
        caption: "Time to post one listing",
        headers: ["Listings (n)", "Time (ms)"],
        rows: [
          ["300", "9"],
          ["1,250", "160"],
          ["2,500", "640"],
          ["5,000", "2,600"],
          ["10,000", "10,400 (plus network retries → 40 s)"],
        ],
      },
      questions: [
        "From the table, what is the growth rate of the algorithm? Show how you can tell from the ratios.",
        "Estimate the time at 40,000 listings if nothing changes. Would a 4× faster server fix the problem long-term?",
        "Propose a data structure that makes \"does an identical title exist?\" an $O(1)$ average-time check. What is its space cost?",
        "Near-duplicate (not identical) detection is harder. Sketch an approach that avoids comparing against every listing.",
      ],
      outcome: `Each doubling of $n$ multiplied time by ≈4, the signature of $O(n^2)$. At 40,000 listings the check would take roughly 16× longer (~170 s); a 4× faster server only buys one more doubling of growth.

The team replaced the exact-duplicate scan with a **hash set** of normalised titles ($O(1)$ average lookup, $O(n)$ memory). For "similar items" they pre-computed a few keyword *buckets* per listing and only compared against listings sharing a bucket — typically a few dozen candidates instead of 10,000. Posting dropped to under 20 ms and stayed flat as the marketplace grew to 60,000 listings.`,
      takeaways: [
        "Measure at several input sizes — ratios between timings reveal the complexity class.",
        "Hardware scales linearly; a quadratic algorithm out-grows any server.",
        "Hashing turns membership questions from $O(n)$ into $O(1)$ average time at the cost of memory.",
        "Narrow the candidate set (bucketing/indexing) before doing expensive comparisons.",
      ],
    },
    {
      slug: "delivery-routes-and-graphs",
      title: "Same-day delivery: modelling a city as a graph",
      summary: "A grocery app cut late deliveries by modelling streets as a weighted graph and caching shortest paths.",
      units: ["graphs", "dynamic-programming"],
      minutes: 18,
      scenario: `A grocery delivery service promised orders "within 45 minutes" across a city of 1,800 intersections and 4,600 road segments. Riders were assigned to orders using straight-line ("as the crow flies") distance from the store. In the monsoon season 23% of deliveries arrived late.

Analysis of GPS logs showed the straight-line estimate was wrong most often where a river and a railway line split the city: two points 1.2 km apart could be a 6 km ride apart. The product team asked the engineering intern to "make the ETA honest".

She modelled the city as a **weighted, directed graph**: intersections are vertices, road segments are edges, and the weight of an edge is the median travel time for that hour of day (one-way streets are single directed edges). Traffic changes slowly, so weights could be refreshed every 15 minutes.`,
      data: {
        caption: "Before vs after (4-week trial, 31,000 orders)",
        headers: ["Metric", "Straight-line", "Graph shortest path"],
        rows: [
          ["Late deliveries", "23%", "7%"],
          ["Mean ETA error", "11.4 min", "3.1 min"],
          ["Assignment time per order", "2 ms", "38 ms (uncached) / 4 ms (cached)"],
        ],
      },
      questions: [
        "Why can't plain BFS find the fastest route here, and which algorithm should be used instead?",
        "The graph has $V = 1{,}800$ and $E = 4{,}600$. Would you store it as an adjacency matrix or adjacency list? Justify with memory estimates.",
        "Riders always start from one of 9 stores. How could you pre-compute or cache results so each new order is fast?",
        "A late order costs a ₹50 coupon. Using the table, estimate the monthly savings at 30,000 orders/month.",
      ],
      outcome: `BFS minimises the *number of edges*, not total travel time, so the team used **Dijkstra's algorithm** with a binary-heap priority queue ($O((V+E)\\log V)$). An adjacency list stores ~4,600 entries versus a 1,800 × 1,800 matrix of 3.24 million cells that is 99.7% empty.

Because every route starts at one of 9 stores, they ran Dijkstra once **from each store** after every 15-minute weight refresh and cached the distance arrays — a classic "reuse overlapping sub-results" idea also at the heart of dynamic programming. Late deliveries fell from 23% to 7%, saving about 0.16 × 30,000 × ₹50 ≈ ₹2.4 lakh per month in coupons.`,
      takeaways: [
        "Choose the graph model first: what are vertices, edges and weights?",
        "BFS for unweighted shortest paths; Dijkstra for non-negative weights.",
        "Sparse graphs belong in adjacency lists.",
        "Pre-computing from a small set of sources is often cheaper than answering each query from scratch.",
      ],
    },
  ],
  readings: {
    complexity: [
      { title: "Introduction to Algorithms (6.006) — lecture notes & videos", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/", source: "MIT OpenCourseWare", type: "course", level: "intermediate", note: "MIT's core algorithms course; lectures 1–2 cover asymptotic analysis." },
      { title: "Big O notation", url: "https://en.wikipedia.org/wiki/Big_O_notation", source: "Wikipedia", type: "article", level: "intro", note: "Formal definitions of O, Ω and Θ with examples." },
      { title: "Asymptotic notation", url: "https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation", source: "Khan Academy", type: "article", level: "intro", note: "Gentle visual introduction to growth rates." },
      { title: "Time complexity — Python wiki", url: "https://wiki.python.org/moin/TimeComplexity", source: "python.org", type: "docs", level: "intermediate", note: "Real costs of list, dict and set operations in CPython." },
    ],
    "linear-structures": [
      { title: "Linked list", url: "https://en.wikipedia.org/wiki/Linked_list", source: "Wikipedia", type: "article", level: "intro", note: "Singly, doubly and circular lists with trade-offs versus arrays." },
      { title: "Data structures (Python tutorial §5)", url: "https://docs.python.org/3/tutorial/datastructures.html", source: "python.org", type: "docs", level: "intro", note: "How Python lists work as dynamic arrays." },
      { title: "6.006 lecture: data structures and dynamic arrays", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/", source: "MIT OpenCourseWare", type: "course", level: "intermediate", note: "Amortised analysis of array growth." },
    ],
    "stacks-queues-trees": [
      { title: "Binary search tree", url: "https://en.wikipedia.org/wiki/Binary_search_tree", source: "Wikipedia", type: "article", level: "intro", note: "Operations, balance and worst cases." },
      { title: "collections.deque", url: "https://docs.python.org/3/library/collections.html#collections.deque", source: "python.org", type: "docs", level: "intro", note: "O(1) appends and pops at both ends — the right queue in Python." },
      { title: "heapq — heap queue algorithm", url: "https://docs.python.org/3/library/heapq.html", source: "python.org", type: "docs", level: "intermediate", note: "Priority queues for Dijkstra and scheduling." },
      { title: "AVL tree", url: "https://en.wikipedia.org/wiki/AVL_tree", source: "Wikipedia", type: "article", level: "advanced", note: "How self-balancing keeps search O(log n)." },
    ],
    graphs: [
      { title: "Breadth-first search", url: "https://en.wikipedia.org/wiki/Breadth-first_search", source: "Wikipedia", type: "article", level: "intro", note: "Layer-by-layer exploration and shortest unweighted paths." },
      { title: "Dijkstra's algorithm", url: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm", source: "Wikipedia", type: "article", level: "intermediate", note: "Shortest paths with non-negative weights." },
      { title: "Graph representation", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs", source: "Khan Academy", type: "article", level: "intro", note: "Edge lists, adjacency matrices and adjacency lists." },
      { title: "Topological sorting", url: "https://en.wikipedia.org/wiki/Topological_sorting", source: "Wikipedia", type: "article", level: "intermediate", note: "Ordering tasks with dependencies using DFS or Kahn's algorithm." },
    ],
    "sorting-searching": [
      { title: "Sorting HOW TO", url: "https://docs.python.org/3/howto/sorting.html", source: "python.org", type: "docs", level: "intro", note: "Key functions and stability in Python's sort." },
      { title: "Timsort", url: "https://en.wikipedia.org/wiki/Timsort", source: "Wikipedia", type: "article", level: "advanced", note: "The hybrid sort behind Python and Java object sorting." },
      { title: "Binary search", url: "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search", source: "Khan Academy", type: "article", level: "intro", note: "Step-by-step with an interactive guessing game." },
      { title: "bisect — array bisection algorithm", url: "https://docs.python.org/3/library/bisect.html", source: "python.org", type: "docs", level: "intermediate", note: "Binary search on sorted lists in the standard library." },
    ],
    "dynamic-programming": [
      { title: "Dynamic programming", url: "https://en.wikipedia.org/wiki/Dynamic_programming", source: "Wikipedia", type: "article", level: "intermediate", note: "Optimal substructure and overlapping subproblems." },
      { title: "functools.cache / lru_cache", url: "https://docs.python.org/3/library/functools.html#functools.lru_cache", source: "python.org", type: "docs", level: "intro", note: "Memoisation in one decorator." },
      { title: "6.006: dynamic programming lectures", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/", source: "MIT OpenCourseWare", type: "course", level: "advanced", note: "The SRTBOT framework for designing DP solutions." },
    ],
  },
  competencies: [
    { id: "analysis", name: "Algorithm analysis", description: "Estimate time and space with Big-O and reason about growth.", lessons: ["dsa/complexity/big-o-notation", "dsa/complexity/analysing-code"] },
    { id: "linear", name: "Linear structures", description: "Choose and manipulate arrays, linked lists, stacks and queues.", lessons: ["dsa/linear-structures/arrays-two-pointers", "dsa/linear-structures/linked-lists", "dsa/stacks-queues-trees/stacks-and-queues"] },
    { id: "trees", name: "Trees & hierarchical data", description: "Use BSTs and tree traversals.", lessons: ["dsa/stacks-queues-trees/trees-and-bst"] },
    { id: "graphs", name: "Graph modelling", description: "Model problems as graphs and traverse them with BFS/DFS.", lessons: ["dsa/graphs/graphs-and-bfs", "dsa/graphs/dfs-and-applications"] },
    { id: "sort-search", name: "Sorting & searching", description: "Pick sorting algorithms and apply binary search.", lessons: ["dsa/sorting-searching/sorting-algorithms", "dsa/sorting-searching/binary-search"] },
    { id: "dp", name: "Dynamic programming", description: "Break problems into overlapping sub-problems.", lessons: ["dsa/dynamic-programming/memoisation", "dsa/dynamic-programming/tabulation"] },
  ],
};
