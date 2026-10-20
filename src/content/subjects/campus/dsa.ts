import type { Subject } from "@/content/types";

export const dsa: Subject = {
  slug: "dsa",
  title: "Data Structures & Algorithms",
  world: "campus",
  icon: "🧮",
  colors: ["#4f46e5", "#06b6d4"],
  tagline: "Think in structures, reason in Big-O, ace the interview.",
  description:
    "A rigorous but friendly tour of the ideas behind every fast program: asymptotic analysis, arrays and pointers, linked structures, stacks, queues, trees, graphs, sorting, searching and dynamic programming. Every lesson pairs theory with runnable Python and real engineering case studies.",
  levels: ["UG Year 1", "UG Year 2", "Interview prep"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Computer Science",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "complexity",
      title: "Complexity & Big-O",
      icon: "⏱️",
      description: "Measure how algorithms scale before you write a single benchmark.",
      lessons: [
        {
          slug: "big-o-notation",
          title: "Big-O Notation",
          summary: "Describe how running time grows with input size, and why constants stop mattering.",
          minutes: 18,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Your side project works beautifully with 100 users. Launch day brings 1,000,000, and the page that took 10 ms now takes **hours**. Nothing was \"broken\" — the algorithm simply *scaled* badly. Big-O is the language engineers use to predict that disaster on a whiteboard, long before it hits production.",
            },
            { type: "heading", text: "Counting growth, not seconds" },
            {
              type: "text",
              md: "Wall-clock time depends on the machine, the language and the weather in the data centre. Instead we count how the number of basic steps $T(n)$ grows as the input size $n$ grows. We say $T(n) = O(f(n))$ when, for large enough $n$, $T(n)$ is bounded above by a constant multiple of $f(n)$.",
            },
            {
              type: "formula",
              tex: "T(n) = O(f(n)) \\iff \\exists\\, c > 0,\\ n_0 \\text{ such that } T(n) \\le c\\cdot f(n)\\ \\ \\forall n \\ge n_0",
              caption: "Formal definition: an asymptotic upper bound.",
            },
            {
              type: "widget",
              widget: "big-o",
              caption: "Drag n upward and watch the curves separate. Which one explodes first?",
            },
            {
              type: "table",
              headers: ["Class", "Name", "Example", "n = 1,000,000 (approx. steps)"],
              rows: [
                ["$O(1)$", "Constant", "Read `arr[i]`, dict lookup", "1"],
                ["$O(\\log n)$", "Logarithmic", "Binary search", "20"],
                ["$O(n)$", "Linear", "Scan a list for the max", "1,000,000"],
                ["$O(n \\log n)$", "Linearithmic", "Merge sort, Python's `sorted`", "~20,000,000"],
                ["$O(n^2)$", "Quadratic", "Compare every pair", "1,000,000,000,000"],
                ["$O(2^n)$", "Exponential", "Try every subset", "more than atoms in the universe"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "An algorithm takes $3n^2 + 50n + 7$ steps. What is its Big-O?",
                  options: ["$O(3n^2)$", "$O(n^2)$", "$O(n^2 + n)$", "$O(50n)$"],
                  answer: 1,
                  explain: "Keep the dominant term and drop constant factors: $3n^2$ dominates, so $O(n^2)$.",
                },
              ],
            },
            { type: "heading", text: "Big-O, Big-Omega, Big-Theta" },
            {
              type: "list",
              items: [
                "**$O$ (Big-O)** — an upper bound: \"grows no faster than\".",
                "**$\\Omega$ (Big-Omega)** — a lower bound: \"grows at least as fast as\".",
                "**$\\Theta$ (Big-Theta)** — a tight bound: both at once.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Big-O means worst case.\" Not quite! Big-O is an *upper bound on a function*; worst/average/best case describe *which function* you are bounding. You can state a Big-O for the average case (quicksort: $O(n \\log n)$) and a different one for the worst case ($O(n^2)$).",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Engineers rarely write proofs, but they constantly ask \"what happens at 10× the data?\" A classic incident pattern: an $O(n^2)$ de-duplication loop that runs fine in staging (1,000 rows) and stalls a nightly job in production (5,000,000 rows) — a 25-million-fold difference in work.",
            },
            {
              type: "keypoints",
              items: [
                "Big-O describes growth rate as $n \\to \\infty$, ignoring constants and lower-order terms.",
                "Order to remember: $1 < \\log n < n < n\\log n < n^2 < 2^n < n!$.",
                "Constants still matter in practice for small $n$ — Big-O tells you who wins *eventually*.",
              ],
            },
          ],
          flashcards: [
            { front: "Formal meaning of $T(n) = O(f(n))$", back: "There exist $c>0$ and $n_0$ such that $T(n) \\le c f(n)$ for all $n \\ge n_0$." },
            { front: "Big-Theta ($\\Theta$)", back: "A tight bound: the function is both $O(f)$ and $\\Omega(f)$." },
            { front: "Steps for binary search on 1,000,000 items", back: "About 20, since $\\log_2 10^6 \\approx 19.9$." },
            { front: "Rule for simplifying Big-O", back: "Keep the fastest-growing term; drop constant multipliers." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order these growth rates from slowest to fastest.",
              items: ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(n^2)$", "$O(2^n)$"],
              explain: "Logarithms grow slower than any polynomial; exponentials grow faster than any polynomial.",
            },
            {
              kind: "truefalse",
              q: "An $O(n)$ algorithm is always faster than an $O(n^2)$ algorithm, for every input size.",
              answer: false,
              explain: "For small $n$, constants can make the $O(n^2)$ algorithm faster (e.g. $1000n$ vs $n^2$ when $n < 1000$). Big-O is about large $n$.",
            },
            {
              kind: "mcq",
              q: "Which bound states \"grows at least as fast as\"?",
              options: ["Big-O", "Big-Omega", "Big-Theta", "little-o"],
              answer: 1,
              explain: "$\\Omega$ is the asymptotic lower bound.",
            },
            {
              kind: "numeric",
              q: "If an $O(n^2)$ job takes 1 second for $n = 1000$, roughly how many seconds will it take for $n = 10{,}000$?",
              answer: 100,
              tolerance: 1,
              unit: "s",
              explain: "Input grows 10×, so work grows $10^2 = 100$×.",
            },
          ],
        },
        {
          slug: "analysing-code",
          title: "Analysing Real Code",
          summary: "Read loops, nested loops and halving loops, and spot hidden costs in built-ins.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A code reviewer glances at your pull request and says \"this is quadratic\" in two seconds. How? They are pattern-matching loop shapes. Let's learn those patterns.",
            },
            {
              type: "table",
              headers: ["Pattern", "Cost", "Why"],
              rows: [
                ["Single loop over `n` items", "$O(n)$", "Body runs $n$ times"],
                ["Two nested loops over `n`", "$O(n^2)$", "$n \\times n$ body executions"],
                ["Loop that halves `n` each time", "$O(\\log n)$", "You can halve $n$ only $\\log_2 n$ times"],
                ["Loop then a separate loop", "$O(n) + O(n) = O(n)$", "Sequential costs add"],
                ["Loop over `n`, inner halving loop", "$O(n \\log n)$", "Nested costs multiply"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              caption: "Count the operations yourself — change n and compare.",
              code: `def count_pairs(n):
    steps = 0
    for i in range(n):
        for j in range(n):
            steps += 1
    return steps

def count_halving(n):
    steps = 0
    while n > 1:
        n //= 2
        steps += 1
    return steps

for n in [10, 100, 1000]:
    print(n, count_pairs(n), count_halving(n))`,
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is the complexity of `for i in range(n): for j in range(i): ...`?",
                  options: ["$O(n)$", "$O(n \\log n)$", "$O(n^2)$", "$O(2^n)$"],
                  answer: 2,
                  explain: "The inner loop runs $0 + 1 + \\dots + (n-1) = n(n-1)/2$ times, which is $O(n^2)$.",
                },
              ],
            },
            { type: "heading", text: "Hidden costs in built-ins" },
            {
              type: "table",
              headers: ["Python operation", "Typical cost"],
              rows: [
                ["`x in my_list`", "$O(n)$ — linear scan"],
                ["`x in my_set` / `key in my_dict`", "$O(1)$ average — hashing"],
                ["`my_list.append(x)`", "$O(1)$ amortised"],
                ["`my_list.insert(0, x)` / `pop(0)`", "$O(n)$ — shifts every element"],
                ["`sorted(my_list)`", "$O(n \\log n)$"],
                ["`my_list[a:b]` (slice)", "$O(b - a)$ — copies"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"One line of code = one step.\" A line like `if item in seen_list:` inside a loop hides a whole extra loop. Swap `seen_list` for a `set` and an $O(n^2)$ function can become $O(n)$.",
            },
            { type: "heading", text: "Amortised analysis & space" },
            {
              type: "text",
              md: "A dynamic array occasionally doubles its capacity, copying everything — an $O(n)$ moment. But doublings are rare: over $n$ appends the total copying is under $2n$, so each append costs $O(1)$ **amortised**.\n\n**Space complexity** counts extra memory the same way. Building a new list of size $n$ is $O(n)$ space; swapping two variables is $O(1)$.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Profilers (cProfile, py-spy, perf) tell you *where* time goes; Big-O tells you *why* and whether it will get worse. Senior engineers use both: measure first, then reason about the scaling of the hot spot.",
            },
            {
              type: "keypoints",
              items: [
                "Sequential blocks add; nested blocks multiply.",
                "Halving or doubling loops give $\\log n$.",
                "Know the cost of library calls — membership on lists is linear, on sets is constant on average.",
              ],
            },
          ],
          flashcards: [
            { front: "Cost of `x in list` vs `x in set`", back: "List: $O(n)$. Set: $O(1)$ on average." },
            { front: "Amortised $O(1)$", back: "An operation that is occasionally expensive but averages constant cost over a long sequence (e.g. list append)." },
            { front: "$1 + 2 + \\dots + n$", back: "$n(n+1)/2$, which is $\\Theta(n^2)$." },
            { front: "Nested loop: outer $n$, inner halving", back: "$O(n \\log n)$" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which change turns this de-duplication from $O(n^2)$ to $O(n)$ on average?\n\n`for x in data: if x not in seen: seen.append(x)`",
              options: ["Use a `while` loop", "Make `seen` a set and use `add`", "Sort `data` first", "Use `insert(0, x)`"],
              answer: 1,
              explain: "Set membership is $O(1)$ on average, so the loop body becomes constant time.",
            },
            {
              kind: "numeric",
              q: "How many times does `while n > 1: n //= 2` run when $n = 1024$?",
              answer: 10,
              explain: "$1024 = 2^{10}$, so it halves 10 times to reach 1.",
            },
            {
              kind: "multi",
              q: "Which operations are $O(n)$ on a Python list of length $n$? (Select all.)",
              options: ["`lst.append(x)`", "`lst.pop(0)`", "`x in lst`", "`lst[5]`"],
              answers: [1, 2],
              explain: "Popping from the front shifts all elements and membership scans the list. Append is amortised $O(1)$ and indexing is $O(1)$.",
            },
            {
              kind: "truefalse",
              q: "Two loops one after another, each over $n$ items, give $O(n^2)$.",
              answer: false,
              explain: "Sequential costs add: $O(n) + O(n) = O(n)$. Only *nesting* multiplies.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "linear-structures",
      title: "Arrays & Linked Lists",
      icon: "📏",
      description: "Contiguous memory versus chains of pointers — and the techniques each enables.",
      lessons: [
        {
          slug: "arrays-two-pointers",
          title: "Arrays & the Two-Pointer Technique",
          summary: "Why arrays are fast, and how two indices can replace a nested loop.",
          minutes: 25,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "An array is a row of numbered lockers in one corridor. Because every locker is the same size and they sit side by side, the address of locker $i$ is just `start + i × size` — one multiplication, no searching. That is why `arr[i]` is $O(1)$.",
            },
            { type: "illustration", emoji: "🗄️", caption: "Contiguous memory: index arithmetic gives instant access." },
            {
              type: "table",
              headers: ["Operation", "Array / Python list", "Reason"],
              rows: [
                ["Access by index", "$O(1)$", "Address arithmetic"],
                ["Append at end", "$O(1)$ amortised", "Spare capacity, occasional resize"],
                ["Insert / delete in middle", "$O(n)$", "Shift later elements"],
                ["Search unsorted", "$O(n)$", "Must look at each element"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "CPUs load memory in *cache lines* (often 64 bytes). Scanning an array touches neighbouring bytes, so it is extremely cache-friendly — one reason arrays often beat \"theoretically equal\" pointer-based structures in practice.",
            },
            { type: "heading", text: "Two pointers" },
            {
              type: "text",
              md: "**Problem:** given a *sorted* list and a target, find two positions whose values sum to the target. Brute force checks every pair: $O(n^2)$. Two pointers do it in $O(n)$:\n\n1. Put `left` at the start and `right` at the end.\n2. If the sum is too small, move `left` right (bigger values).\n3. If too big, move `right` left (smaller values).\n4. Stop when they meet.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("racecar"))   # True
print(is_palindrome("campus"))    # False`,
              caption: "Two pointers walking inward: an O(n) palindrome check with O(1) extra space.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "The two-pointer pair-sum trick works on any list, sorted or not.",
                  answer: false,
                  explain: "It relies on sorted order: moving `left` must increase the sum and moving `right` must decrease it.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Merging two sorted streams — log files from two servers, or two sorted database indexes during a merge join — is the two-pointer idea at production scale.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Python lists are linked lists.\" They are actually dynamic arrays of references. That is why indexing is fast but `insert(0, x)` is slow.",
            },
            {
              type: "keypoints",
              items: [
                "Arrays give $O(1)$ indexing thanks to contiguous memory.",
                "Middle insertion/deletion costs $O(n)$ due to shifting.",
                "Two pointers turn many $O(n^2)$ pair searches on sorted data into $O(n)$.",
              ],
            },
          ],
          flashcards: [
            { front: "Why is array indexing $O(1)$?", back: "Address = start + index × element size: pure arithmetic." },
            { front: "Two-pointer precondition for pair-sum", back: "The array must be sorted." },
            { front: "Cache line", back: "A block of memory (often 64 bytes) loaded together; sequential array scans exploit it." },
            { front: "Python `list` under the hood", back: "A dynamic array of object references." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In sorted `[1, 4, 6, 9, 12]` with target 13, left=0 and right=4 give sum 13. What should the algorithm do?",
              options: ["Move left", "Move right", "Return (0, 4)", "Restart"],
              answer: 2,
              explain: "$1 + 12 = 13$ matches the target, so return the pair.",
            },
            {
              kind: "numeric",
              q: "Deleting index 0 from a 1,000-element array requires shifting how many elements?",
              answer: 999,
              explain: "Every element after index 0 moves one place left: 999 elements.",
            },
            {
              kind: "fill",
              q: "The two-pointer pair-sum algorithm runs in O(___) time.",
              answer: ["n"],
              explain: "Each step moves one pointer inward, so at most $n$ steps.",
            },
            {
              kind: "multi",
              q: "Which are strengths of arrays? (Select all.)",
              options: ["$O(1)$ random access", "$O(1)$ insertion at the front", "Cache-friendly scanning", "No need to know positions"],
              answers: [0, 2],
              explain: "Front insertion is $O(n)$; access and locality are the big wins.",
            },
          ],
          challenge: {
            title: "Pair with target sum",
            prompt:
              "Write `pair_with_sum(nums, target)` for a **sorted** list `nums`. Return a tuple `(i, j)` with `i < j` and `nums[i] + nums[j] == target`, or `None` if no such pair exists. Aim for $O(n)$ with two pointers.",
            lang: "python",
            starter: `def pair_with_sum(nums, target):
    left, right = 0, len(nums) - 1
    # your code here
    return None
`,
            tests: [
              { label: "Finds (2, 3) in [2, 5, 7, 11, 15] for 18", check: "pair_with_sum([2, 5, 7, 11, 15], 18) == (2, 3)" },
              { label: "Returns None when impossible", check: "pair_with_sum([2, 5, 7, 11, 15], 100) is None" },
              { label: "Handles the ends", check: "pair_with_sum([1, 3, 8, 20], 21) == (0, 3)" },
              { label: "Empty list gives None", check: "pair_with_sum([], 5) is None" },
            ],
            solution: `def pair_with_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return (left, right)
        if s < target:
            left += 1
        else:
            right -= 1
    return None
`,
            hints: [
              "Loop `while left < right`.",
              "If the sum is too small, only increasing `left` can help.",
            ],
          },
        },
        {
          slug: "linked-lists",
          title: "Linked Lists",
          summary: "Nodes and pointers: cheap splicing, slow indexing, and the classic reversal.",
          minutes: 22,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A treasure hunt: each clue tells you where the next clue is hidden. You can't jump to clue #7 — you must follow the chain. That is a **linked list**: each node stores a value and a reference to the next node.",
            },
            { type: "illustration", emoji: "🔗", caption: "head → [3] → [8] → [5] → None" },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

def to_list(head):
    out = []
    while head:
        out.append(head.value)
        head = head.next
    return out

def reverse(head):
    prev = None
    while head:
        nxt = head.next     # remember the rest
        head.next = prev    # flip the arrow
        prev = head         # step forward
        head = nxt
    return prev

head = Node(3, Node(8, Node(5)))
print(to_list(head))
print(to_list(reverse(head)))`,
              caption: "Build, print and reverse a singly linked list in O(n) time and O(1) extra space.",
            },
            {
              type: "table",
              headers: ["Operation", "Singly linked list", "Array"],
              rows: [
                ["Access k-th element", "$O(k)$", "$O(1)$"],
                ["Insert at head", "$O(1)$", "$O(n)$"],
                ["Insert after a known node", "$O(1)$", "$O(n)$"],
                ["Memory per element", "Value + pointer", "Value only"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In `reverse`, why do we save `nxt = head.next` before flipping the pointer?",
                  options: [
                    "To make the code faster",
                    "Because after flipping, we'd lose our only reference to the rest of the list",
                    "Python requires it",
                    "To count the nodes",
                  ],
                  answer: 1,
                  explain: "Once `head.next = prev`, the rest of the list is unreachable unless we stored it first.",
                },
              ],
            },
            { type: "heading", text: "Variants & the runner technique" },
            {
              type: "list",
              items: [
                "**Doubly linked:** nodes also point back — $O(1)$ removal of a known node.",
                "**Circular:** the tail points to the head — handy for round-robin scheduling.",
                "**Fast & slow pointers (Floyd):** move one pointer 2 steps and another 1 step. If they ever meet, the list has a cycle; when the fast one hits the end, the slow one is at the middle.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "An **LRU cache** (used in browsers, CDNs and databases) combines a hash map with a doubly linked list: the map finds a node in $O(1)$ and the list moves it to the front in $O(1)$. Python's `collections.OrderedDict` has historically been built on this idea.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Linked lists are always better for insertion.\" Only if you already *have* the node. Finding the insertion point is still $O(n)$, and poor cache locality often makes arrays faster overall.",
            },
            {
              type: "keypoints",
              items: [
                "Linked lists trade $O(1)$ indexing for $O(1)$ splicing at a known node.",
                "Reversal: keep `prev`, `head`, `nxt` and flip one arrow per step.",
                "Fast/slow pointers detect cycles and find midpoints.",
              ],
            },
          ],
          flashcards: [
            { front: "Node in a singly linked list", back: "A value plus a reference to the next node." },
            { front: "Floyd's cycle detection", back: "Slow pointer moves 1, fast moves 2; they meet iff there is a cycle." },
            { front: "LRU cache structure", back: "Hash map + doubly linked list: $O(1)$ get and update." },
            { front: "Cost to reach the k-th node", back: "$O(k)$ — you must follow k links." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which operation is $O(1)$ for a singly linked list with only a head pointer?",
              options: ["Append at tail", "Access the middle node", "Insert at head", "Find the maximum"],
              answer: 2,
              explain: "Create a node pointing to the old head. Tail append needs a traversal unless you also keep a tail pointer.",
            },
            {
              kind: "truefalse",
              q: "A doubly linked list lets you delete a node you hold a reference to in $O(1)$.",
              answer: true,
              explain: "You can reach both neighbours through `prev` and `next` and relink them directly.",
            },
            {
              kind: "order",
              q: "Order the steps inside the reversal loop.",
              items: ["nxt = head.next", "head.next = prev", "prev = head", "head = nxt"],
              explain: "Save the rest, flip the arrow, advance `prev`, advance `head`.",
            },
            {
              kind: "mcq",
              q: "With fast/slow pointers on a 9-node list (no cycle), where is the slow pointer when fast reaches the last node?",
              options: ["Node 3", "Node 5 (the middle)", "Node 9", "Node 1"],
              answer: 1,
              explain: "Slow moves half as far, ending at the middle — the 5th of 9 nodes.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "stacks-queues-trees",
      title: "Stacks, Queues & Trees",
      icon: "🌳",
      description: "Ordered access patterns and hierarchical data.",
      lessons: [
        {
          slug: "stacks-and-queues",
          title: "Stacks & Queues",
          summary: "LIFO and FIFO: the two disciplines behind undo buttons, call stacks and job queues.",
          minutes: 20,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Press Ctrl+Z and the *last* thing you did disappears first — that's a **stack** (Last In, First Out). Queue at a coffee shop and the *first* person in line is served first — that's a **queue** (First In, First Out).",
            },
            {
              type: "table",
              headers: ["", "Stack (LIFO)", "Queue (FIFO)"],
              rows: [
                ["Add", "`push` — `list.append(x)`", "`enqueue` — `deque.append(x)`"],
                ["Remove", "`pop` — `list.pop()`", "`dequeue` — `deque.popleft()`"],
                ["Python tool", "`list`", "`collections.deque`"],
                ["Uses", "Undo, call stack, DFS, parsing", "Print jobs, BFS, task workers"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def balanced(text):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in text:
        if ch in "([{":
            stack.append(ch)
        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack

print(balanced("f(a[1], {b: 2})"))  # True
print(balanced("(]"))               # False
print(balanced("(("))               # False`,
              caption: "A stack checks bracket balance — exactly what your code editor does.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You push 1, 2, 3 onto a stack and pop twice. What is left on top?",
                  options: ["1", "2", "3", "Nothing"],
                  answer: 0,
                  explain: "Pops remove 3, then 2. Only 1 remains.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"A list works fine as a queue.\" `list.pop(0)` is $O(n)$ because every element shifts. Use `collections.deque`, whose `popleft()` is $O(1)$.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Message queues such as RabbitMQ, Amazon SQS and Kafka topics decouple producers from consumers: a web server enqueues \"send welcome email\" and returns instantly, while workers dequeue jobs at their own pace. A **priority queue** (heap, `heapq` in Python) serves the most urgent job first instead.",
            },
            {
              type: "keypoints",
              items: [
                "Stack = LIFO; queue = FIFO; both give $O(1)$ add/remove with the right structure.",
                "Recursion uses the call stack — deep recursion can overflow it.",
                "Use `deque` for queues and `heapq` for priority queues.",
              ],
            },
          ],
          flashcards: [
            { front: "LIFO", back: "Last In, First Out — a stack." },
            { front: "FIFO", back: "First In, First Out — a queue." },
            { front: "Python's O(1) queue", back: "`collections.deque` with `append` and `popleft`." },
            { front: "Priority queue in Python", back: "`heapq` — a binary min-heap with $O(\\log n)$ push/pop." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which structure naturally models a browser's Back button?",
              options: ["Queue", "Stack", "Hash set", "Heap"],
              answer: 1,
              explain: "The most recently visited page is the first one you go back to: LIFO.",
            },
            {
              kind: "truefalse",
              q: "`balanced(\"([)]\")` returns True.",
              answer: false,
              explain: "When `)` arrives the top of the stack is `[`, which doesn't match, so it returns False.",
            },
            {
              kind: "fill",
              q: "In a deque, removing from the front uses the method `___()`.",
              answer: ["popleft"],
              explain: "`deque.popleft()` is $O(1)$.",
            },
            {
              kind: "mcq",
              q: "You enqueue A, B, C then dequeue once. What comes out?",
              options: ["A", "B", "C", "Nothing"],
              answer: 0,
              explain: "FIFO: the first in, A, is the first out.",
            },
          ],
        },
        {
          slug: "trees-and-bst",
          title: "Trees & Binary Search Trees",
          summary: "Hierarchies, traversals, and the ordering rule that makes search logarithmic.",
          minutes: 25,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Your file system, the HTML DOM, an org chart and a JSON document are all **trees**: one root, each node with children, no cycles. Add one rule and you get a search engine in miniature.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "The BST rule",
              md: "In a **binary search tree**, for every node: all values in the left subtree are smaller, all values in the right subtree are larger. Searching is then a game of \"higher or lower\".",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.key:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root

def inorder(root):
    if root is None:
        return []
    return inorder(root.left) + [root.key] + inorder(root.right)

def contains(root, key):
    while root:
        if key == root.key:
            return True
        root = root.left if key < root.key else root.right
    return False

root = None
for k in [50, 30, 70, 20, 40, 60, 80]:
    root = insert(root, k)
print(inorder(root))        # sorted!
print(contains(root, 60), contains(root, 65))`,
              caption: "In-order traversal of a BST visits keys in sorted order.",
            },
            {
              type: "table",
              headers: ["Traversal", "Order", "Typical use"],
              rows: [
                ["Pre-order", "Node, left, right", "Copy/serialise a tree"],
                ["In-order", "Left, node, right", "Sorted output from a BST"],
                ["Post-order", "Left, right, node", "Delete a tree, evaluate expressions"],
                ["Level-order", "Breadth-first by depth", "Shortest depth, printing by level"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Inserting 1, 2, 3, 4, 5 in that order into an empty BST produces…",
                  options: ["A perfectly balanced tree", "A chain leaning right (like a linked list)", "A chain leaning left", "An error"],
                  answer: 1,
                  explain: "Each key is larger than all before it, so it always goes right — height becomes $n$.",
                },
              ],
            },
            {
              type: "text",
              md: "Search, insert and delete cost $O(h)$ where $h$ is the height. A balanced tree has $h \\approx \\log_2 n$; a degenerate one has $h = n$. **Self-balancing** trees (AVL, red-black) rotate nodes to keep $h = O(\\log n)$ guaranteed.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Relational databases index columns with **B-trees** — wide, shallow cousins of BSTs where each node holds hundreds of keys, so a billion-row table needs only a handful of disk reads per lookup. Java's `TreeMap` and C++'s `std::map` are typically red-black trees.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"BST operations are always $O(\\log n)$.\" Only when the tree is balanced. Feed sorted data into a naive BST and you get $O(n)$ — a real production pitfall.",
            },
            {
              type: "keypoints",
              items: [
                "A BST keeps left < node < right at every node.",
                "Cost is $O(h)$: $O(\\log n)$ if balanced, $O(n)$ if degenerate.",
                "In-order traversal of a BST yields sorted keys.",
              ],
            },
          ],
          flashcards: [
            { front: "BST invariant", back: "Every key in the left subtree < node key < every key in the right subtree." },
            { front: "In-order traversal", back: "Left subtree, node, right subtree." },
            { front: "Height of a balanced BST with n nodes", back: "About $\\log_2 n$." },
            { front: "Why databases use B-trees", back: "High fan-out makes trees shallow, minimising slow disk reads." },
            { front: "Examples of self-balancing BSTs", back: "AVL trees, red-black trees." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which traversal of a BST outputs the keys in ascending order?",
              options: ["Pre-order", "In-order", "Post-order", "Level-order"],
              answer: 1,
              explain: "Left (smaller), node, right (larger) gives sorted order.",
            },
            {
              kind: "numeric",
              q: "A perfectly balanced BST holds 1,023 keys. What is the maximum number of comparisons to find a key? (Number of levels.)",
              answer: 10,
              explain: "A perfect tree with 10 levels holds $2^{10} - 1 = 1023$ nodes.",
            },
            {
              kind: "truefalse",
              q: "Post-order traversal is the natural choice when deleting every node of a tree.",
              answer: true,
              explain: "Children are processed before the parent, so you never free a node whose children you still need to visit.",
            },
            {
              kind: "multi",
              q: "Which structures are trees? (Select all.)",
              options: ["The HTML DOM", "A folder hierarchy", "A road network with loops", "A JSON document"],
              answers: [0, 1, 3],
              explain: "A road network with loops contains cycles, so it is a general graph, not a tree.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "graphs",
      title: "Graphs: BFS & DFS",
      icon: "🕸️",
      description: "Model networks and explore them systematically.",
      lessons: [
        {
          slug: "graphs-and-bfs",
          title: "Graph Representation & BFS",
          summary: "Adjacency lists, and the breadth-first search that finds shortest hop counts.",
          minutes: 25,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "\"You may know…\" suggestions on a social network are friends-of-friends: people **two hops** away. Finding everyone within $k$ hops is breadth-first search on a graph.",
            },
            {
              type: "text",
              md: "A **graph** $G = (V, E)$ is a set of vertices joined by edges. Edges may be **directed** (Twitter follows) or **undirected** (Facebook friendships), and **weighted** (road distances) or unweighted.",
            },
            {
              type: "table",
              headers: ["Representation", "Space", "Check edge (u, v)", "Best for"],
              rows: [
                ["Adjacency matrix", "$O(V^2)$", "$O(1)$", "Dense graphs"],
                ["Adjacency list", "$O(V + E)$", "$O(\\deg u)$", "Sparse graphs (most real ones)"],
              ],
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `from collections import deque

graph = {
    "Asha": ["Ben", "Chen"],
    "Ben": ["Asha", "Dev"],
    "Chen": ["Asha", "Dev", "Eli"],
    "Dev": ["Ben", "Chen", "Fay"],
    "Eli": ["Chen"],
    "Fay": ["Dev"],
}

def bfs_distances(graph, start):
    dist = {start: 0}
    queue = deque([start])
    while queue:
        node = queue.popleft()
        for nb in graph[node]:
            if nb not in dist:
                dist[nb] = dist[node] + 1
                queue.append(nb)
    return dist

print(bfs_distances(graph, "Asha"))`,
              caption: "BFS explores in rings: distance 0, then 1, then 2…",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Using the graph above, how many hops is Fay from Asha?",
                  answer: 3,
                  explain: "Asha → Ben (or Chen) → Dev → Fay: 3 hops.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              md: "Mark a node as visited **when you enqueue it**, not when you dequeue it. Otherwise the same node can be queued many times.",
            },
            {
              type: "text",
              md: "BFS visits every vertex and examines every edge once: $O(V + E)$ time. In an **unweighted** graph it finds shortest paths by number of edges. For weighted graphs you need Dijkstra's algorithm (a BFS with a priority queue).",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Web crawlers expand pages breadth-first from seed URLs; network engineers use BFS-style flooding to discover topology; and LinkedIn's \"2nd / 3rd degree\" labels are BFS distances.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"BFS finds the shortest route on Google Maps.\" Roads have different lengths — BFS minimises the number of edges, not total distance. Weighted shortest paths need Dijkstra or A*.",
            },
            {
              type: "keypoints",
              items: [
                "Adjacency lists use $O(V + E)$ space — ideal for sparse graphs.",
                "BFS uses a queue and runs in $O(V + E)$.",
                "BFS gives shortest paths in unweighted graphs.",
              ],
            },
          ],
          flashcards: [
            { front: "BFS data structure", back: "A FIFO queue." },
            { front: "BFS complexity", back: "$O(V + E)$" },
            { front: "Adjacency list space", back: "$O(V + E)$" },
            { front: "Shortest path in a weighted graph (non-negative weights)", back: "Dijkstra's algorithm." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A graph has 1,000,000 users and about 200 friendships each. Which representation fits?",
              options: ["Adjacency matrix", "Adjacency list", "Either is identical", "A single array of names"],
              answer: 1,
              explain: "A matrix would need $10^{12}$ cells; the list needs roughly $V + E$ entries.",
            },
            {
              kind: "truefalse",
              q: "BFS always finds the shortest path by edge count in an unweighted graph.",
              answer: true,
              explain: "It explores all nodes at distance $d$ before any at distance $d+1$.",
            },
            {
              kind: "fill",
              q: "A friendship graph where edges have no direction is called ___.",
              answer: ["undirected"],
              explain: "Friendship is mutual, so edges are undirected.",
            },
            {
              kind: "mcq",
              q: "When should BFS mark a node as visited?",
              options: ["When it is dequeued", "When it is enqueued", "At the very end", "Never"],
              answer: 1,
              explain: "Marking on enqueue prevents duplicates in the queue.",
            },
          ],
        },
        {
          slug: "dfs-and-applications",
          title: "DFS & Its Applications",
          summary: "Go deep first: connected components, cycle detection and topological sort.",
          minutes: 25,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Solve a maze by keeping one hand on the wall: walk as far as you can, and backtrack only at dead ends. That is **depth-first search** — a stack (or recursion) instead of a queue.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def dfs(graph, node, seen=None):
    if seen is None:
        seen = set()
    seen.add(node)
    for nb in graph[node]:
        if nb not in seen:
            dfs(graph, nb, seen)
    return seen

def count_components(graph):
    seen = set()
    count = 0
    for node in graph:
        if node not in seen:
            dfs(graph, node, seen)
            count += 1
    return count

islands = {1: [2], 2: [1], 3: [4], 4: [3, 5], 5: [4], 6: []}
print(count_components(islands))   # 3 groups: {1,2}, {3,4,5}, {6}`,
              caption: "Recursive DFS and counting connected components.",
            },
            { type: "heading", text: "Topological sort" },
            {
              type: "text",
              md: "In a **directed acyclic graph** (DAG) of dependencies — \"install A before B\" — a topological order lists tasks so every edge points forward. One method: run DFS and add each node to the output *after* all its descendants finish, then reverse.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def topo_sort(deps):
    order, seen = [], set()
    def visit(n):
        seen.add(n)
        for m in deps.get(n, []):
            if m not in seen:
                visit(m)
        order.append(n)        # post-order
    for n in deps:
        if n not in seen:
            visit(n)
    return order[::-1]

courses = {"Intro CS": ["DSA"], "DSA": ["Algorithms", "ML"], "Maths": ["ML"], "Algorithms": [], "ML": []}
print(topo_sort(courses))`,
              caption: "Edges point from prerequisite to the course it unlocks.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which structure does DFS use implicitly when written recursively?",
                  options: ["A queue", "The call stack", "A heap", "A hash map only"],
                  answer: 1,
                  explain: "Each recursive call is pushed on the call stack; returning is popping.",
                },
              ],
            },
            {
              type: "table",
              headers: ["", "BFS", "DFS"],
              rows: [
                ["Frontier", "Queue", "Stack / recursion"],
                ["Shortest unweighted path", "Yes", "No"],
                ["Memory on wide graphs", "Can be large", "Proportional to depth"],
                ["Classic uses", "Distances, levels", "Components, cycles, topo sort, mazes"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Build systems (Make, Bazel), package managers (npm, pip) and spreadsheet engines topologically sort dependency graphs. If they find a cycle, you get the infamous \"circular dependency\" error.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Recursive DFS is always safe.\" Python's default recursion limit is about 1,000 frames. On a long chain of 100,000 nodes, use an explicit stack instead.",
            },
            {
              type: "keypoints",
              items: [
                "DFS also runs in $O(V + E)$.",
                "Use it for connected components, cycle detection and topological sorting.",
                "Topological order exists only for DAGs.",
              ],
            },
          ],
          flashcards: [
            { front: "DAG", back: "Directed Acyclic Graph — directed edges, no cycles." },
            { front: "Topological sort via DFS", back: "Append nodes in post-order, then reverse the list." },
            { front: "DFS complexity", back: "$O(V + E)$" },
            { front: "Python's default recursion limit", back: "About 1,000 frames (`sys.getrecursionlimit()`)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A graph has edges 1–2, 2–3, 4–5 and isolated vertices 6 and 7. How many connected components?",
              answer: 4,
              explain: "{1,2,3}, {4,5}, {6}, {7} — four components.",
            },
            {
              kind: "truefalse",
              q: "Every directed graph has a topological ordering.",
              answer: false,
              explain: "Only acyclic ones do; a cycle means some task must come before itself.",
            },
            {
              kind: "mcq",
              q: "Which is a valid topological order for prerequisites Maths → Physics → Engineering?",
              options: ["Physics, Maths, Engineering", "Maths, Physics, Engineering", "Engineering, Physics, Maths", "Maths, Engineering, Physics"],
              answer: 1,
              explain: "Every prerequisite must appear before what it unlocks.",
            },
            {
              kind: "multi",
              q: "Which problems are naturally solved with DFS? (Select all.)",
              options: ["Detecting a cycle", "Topological sort", "Fewest hops between two users", "Solving a maze"],
              answers: [0, 1, 3],
              explain: "Fewest hops in an unweighted graph is BFS territory.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "sorting-searching",
      title: "Sorting & Searching",
      icon: "🔀",
      description: "From bubble sort to merge sort, and the power of binary search.",
      lessons: [
        {
          slug: "sorting-algorithms",
          title: "Sorting Algorithms",
          summary: "Elementary sorts, divide-and-conquer sorts, and the n log n barrier.",
          minutes: 28,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "Sorting is everywhere: leaderboards, search results, \"price: low to high\". Sorted data also unlocks fast searching, de-duplication and merging. Let's watch the classics race.",
            },
            {
              type: "widget",
              widget: "sorting",
              props: { algorithm: "insertion" },
              caption: "Step through insertion sort, then switch algorithms and compare the number of swaps.",
            },
            {
              type: "table",
              headers: ["Algorithm", "Best", "Average", "Worst", "Stable?", "Extra space"],
              rows: [
                ["Bubble sort", "$O(n)$*", "$O(n^2)$", "$O(n^2)$", "Yes", "$O(1)$"],
                ["Selection sort", "$O(n^2)$", "$O(n^2)$", "$O(n^2)$", "No", "$O(1)$"],
                ["Insertion sort", "$O(n)$", "$O(n^2)$", "$O(n^2)$", "Yes", "$O(1)$"],
                ["Merge sort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n \\log n)$", "Yes", "$O(n)$"],
                ["Quicksort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n^2)$", "No", "$O(\\log n)$ stack"],
                ["Heapsort", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n \\log n)$", "No", "$O(1)$"],
              ],
            },
            { type: "text", md: "*with the early-exit optimisation when no swaps occur in a pass." },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left, right = merge_sort(a[:mid]), merge_sort(a[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:     # <= keeps it stable
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))`,
              caption: "Divide, sort each half, merge with two pointers.",
            },
            {
              type: "formula",
              tex: "T(n) = 2\\,T\\!\\left(\\tfrac{n}{2}\\right) + O(n) \\;\\Rightarrow\\; T(n) = O(n \\log n)",
              caption: "Merge sort's recurrence: $\\log_2 n$ levels, $O(n)$ merging work per level.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which sort is a great choice for data that is *already nearly sorted*?",
                  options: ["Selection sort", "Insertion sort", "Heapsort", "Bogosort"],
                  answer: 1,
                  explain: "Insertion sort does very little work per element when items are close to their final positions — close to $O(n)$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The lower bound",
              md: "Any sort that works only by comparing pairs needs $\\Omega(n \\log n)$ comparisons in the worst case. Non-comparison sorts (counting sort, radix sort) dodge this by exploiting the structure of keys, e.g. small integers.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Python's `sorted` and Java's object sort use **Timsort**, a hybrid of merge sort and insertion sort that detects existing sorted \"runs\" in real-world data. Stability matters: sort orders by date, then stably by customer, and each customer's orders stay in date order.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Quicksort is always $O(n \\log n)$.\" A poor pivot choice (e.g. always the first element on sorted input) degrades it to $O(n^2)$. Random or median-of-three pivots make that vanishingly unlikely.",
            },
            {
              type: "keypoints",
              items: [
                "Elementary sorts are $O(n^2)$; merge, heap and (average) quick sort are $O(n \\log n)$.",
                "A stable sort preserves the order of equal keys.",
                "Comparison sorting can't beat $\\Omega(n \\log n)$ in the worst case.",
              ],
            },
          ],
          flashcards: [
            { front: "Stable sort", back: "Equal keys keep their original relative order." },
            { front: "Merge sort recurrence", back: "$T(n) = 2T(n/2) + O(n)$, giving $O(n \\log n)$." },
            { front: "Quicksort worst case", back: "$O(n^2)$ with consistently bad pivots." },
            { front: "Comparison-sort lower bound", back: "$\\Omega(n \\log n)$ comparisons." },
            { front: "Timsort", back: "Hybrid merge + insertion sort used by Python; exploits existing runs." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which algorithm guarantees $O(n \\log n)$ worst case *and* is stable?",
              options: ["Quicksort", "Heapsort", "Merge sort", "Selection sort"],
              answer: 2,
              explain: "Heapsort is $O(n \\log n)$ but unstable; quicksort's worst case is $O(n^2)$.",
            },
            {
              kind: "truefalse",
              q: "Counting sort can sort small integer keys in linear time.",
              answer: true,
              explain: "It is not comparison-based, so the $n \\log n$ bound does not apply. Its cost is $O(n + k)$ for key range $k$.",
            },
            {
              kind: "numeric",
              q: "How many levels of splitting does merge sort perform on 64 elements (until sub-lists have size 1)?",
              answer: 6,
              explain: "$\\log_2 64 = 6$.",
            },
            {
              kind: "multi",
              q: "Which sorts use only $O(1)$ extra space? (Select all.)",
              options: ["Insertion sort", "Merge sort (array version)", "Heapsort", "Selection sort"],
              answers: [0, 2, 3],
              explain: "Standard array merge sort needs an $O(n)$ buffer for merging.",
            },
          ],
        },
        {
          slug: "binary-search",
          title: "Binary Search",
          summary: "Halve the search space each step — and avoid the off-by-one traps.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Guess a number between 1 and 1,000,000 with only \"higher\" or \"lower\" hints. A smart player needs at most **20 guesses**. That strategy — always guess the middle — is binary search.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

scores = [12, 19, 23, 31, 44, 58, 67, 72, 85, 99]
print(binary_search(scores, 67))   # 6
print(binary_search(scores, 50))   # -1`,
              caption: "The invariant: if the target exists, it lies within arr[lo..hi].",
            },
            {
              type: "formula",
              tex: "\\text{steps} \\le \\lfloor \\log_2 n \\rfloor + 1",
              caption: "Each comparison halves the remaining range.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is the maximum number of comparisons binary search needs on a sorted list of 1,000 items?",
                  answer: 10,
                  explain: "$\\lfloor \\log_2 1000 \\rfloor + 1 = 9 + 1 = 10$.",
                },
              ],
            },
            { type: "heading", text: "Searching for a boundary" },
            {
              type: "text",
              md: "The most useful form of binary search finds the **first position where a condition becomes true** — e.g. the first version of your code that fails a test. Python's `bisect` module does this for sorted lists: `bisect_left(a, x)` returns the first index where `a[i] >= x`.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "`git bisect` binary-searches your commit history to find the commit that introduced a bug: 1,000 commits take about 10 test runs. Databases binary-search within B-tree pages, and ML engineers binary-search learning rates and batch sizes.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Binary search is easy to write.\" Famously, many published implementations had bugs: infinite loops from `lo = mid` instead of `lo = mid + 1`, or integer overflow from `(lo + hi) / 2` in fixed-width languages (use `lo + (hi - lo) / 2`). Always state your invariant.",
            },
            {
              type: "keypoints",
              items: [
                "Requires sorted (or monotonic) data; runs in $O(\\log n)$.",
                "Maintain a clear invariant about where the answer can be.",
                "Generalise it to \"find the first true\" on any monotonic condition.",
              ],
            },
          ],
          flashcards: [
            { front: "Binary search precondition", back: "Sorted data (or a monotonic predicate)." },
            { front: "Binary search complexity", back: "$O(\\log n)$ time, $O(1)$ space (iterative)." },
            { front: "`bisect_left(a, x)`", back: "First index $i$ with `a[i] >= x`." },
            { front: "`git bisect`", back: "Binary search over commits to locate the one that introduced a bug." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In `[3, 8, 15, 21, 30]`, searching for 21: what is the first `mid` index?",
              options: ["1", "2", "3", "4"],
              answer: 1,
              explain: "`(0 + 4) // 2 = 2`. The value there is 15, which is less than 21, so the search continues in the right half.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "Binary search works on an unsorted list as long as it is short.",
              answer: false,
              explain: "Without order, discarding half the list could throw away the target.",
            },
            {
              kind: "numeric",
              q: "`git bisect` over 1,024 commits needs at most how many test runs to isolate the bad commit?",
              answer: 10,
              explain: "$\\log_2 1024 = 10$.",
            },
            {
              kind: "fill",
              q: "To avoid overflow in C or Java, compute the midpoint as lo + (hi - lo) / ___.",
              answer: ["2"],
              explain: "This never exceeds `hi`, unlike `lo + hi` which can overflow.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "dynamic-programming",
      title: "Dynamic Programming",
      icon: "🧩",
      description: "Solve each subproblem once, store it, and reuse it.",
      lessons: [
        {
          slug: "memoisation",
          title: "Overlapping Subproblems & Memoisation",
          summary: "Turn exponential recursion into linear time by caching answers.",
          minutes: 25,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Ask a friend \"what's $1+1+1+1+1+1+1+1$?\" They count: 8. Add \"$+1$\" and they instantly say 9 — they *remembered* the previous answer. Dynamic programming (DP) is exactly that: never solve the same subproblem twice.",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `from functools import lru_cache

calls = 0
def fib_slow(n):
    global calls
    calls += 1
    return n if n < 2 else fib_slow(n - 1) + fib_slow(n - 2)

@lru_cache(maxsize=None)
def fib_fast(n):
    return n if n < 2 else fib_fast(n - 1) + fib_fast(n - 2)

print(fib_slow(25), "computed with", calls, "calls")
print(fib_fast(90))`,
              caption: "Same recurrence, wildly different cost. Try fib_slow(35) if you're patient.",
            },
            {
              type: "text",
              md: "The naive version recomputes `fib(23)` twice, `fib(22)` three times, and so on — about $O(\\varphi^n)$ calls, where $\\varphi \\approx 1.618$. With a cache, each `fib(k)` is computed once: $O(n)$.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "When is DP applicable?",
              md: "Look for two properties:\n\n1. **Optimal substructure** — the best answer is built from best answers to smaller problems.\n2. **Overlapping subproblems** — the same smaller problems appear again and again.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "Merge sort is a dynamic programming algorithm because it splits into subproblems.",
                  answer: false,
                  explain: "Merge sort's halves don't overlap — it's divide and conquer. DP needs *overlapping* subproblems.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Memoisation is the same idea as caching in web systems: Redis in front of a database, or React's `useMemo`. The trade-off is always memory for time — and knowing when cached values become stale.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"DP is a specific algorithm.\" It's a *technique*. The hard part is defining the state — what exactly does `dp(i)` mean? Once that sentence is clear, the recurrence usually follows.",
            },
            {
              type: "keypoints",
              items: [
                "DP = recursion + reuse of overlapping subproblems.",
                "Memoisation (top-down) caches results of recursive calls.",
                "Time ≈ number of distinct states × work per state.",
              ],
            },
          ],
          flashcards: [
            { front: "Two hallmarks of DP problems", back: "Optimal substructure and overlapping subproblems." },
            { front: "Memoisation", back: "Top-down DP: cache the result of each recursive call." },
            { front: "`@lru_cache(maxsize=None)`", back: "Python decorator that memoises a function." },
            { front: "DP running time estimate", back: "(number of states) × (work per state)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Memoised Fibonacci has how many distinct states for `fib(n)`?",
              options: ["$O(1)$", "$O(n)$", "$O(n^2)$", "$O(2^n)$"],
              answer: 1,
              explain: "States are `fib(0)` … `fib(n)`: $n + 1$ of them.",
            },
            {
              kind: "truefalse",
              q: "Memoisation trades extra memory for less computation.",
              answer: true,
              explain: "It stores every computed answer.",
            },
            {
              kind: "numeric",
              q: "How many ways can you climb 5 stairs taking 1 or 2 steps at a time?",
              answer: 8,
              explain: "ways(n) = ways(n−1) + ways(n−2) with ways(1)=1, ways(2)=2: 1, 2, 3, 5, 8.",
            },
            {
              kind: "multi",
              q: "Which problems have overlapping subproblems? (Select all.)",
              options: ["Fibonacci", "Binary search", "Edit distance between two words", "Counting paths in a grid"],
              answers: [0, 2, 3],
              explain: "Binary search discards half each time — no subproblem is revisited.",
            },
          ],
        },
        {
          slug: "tabulation",
          title: "Tabulation & Classic DP Problems",
          summary: "Build answers bottom-up in a table: coin change and the knapsack mindset.",
          minutes: 30,
          xp: 55,
          blocks: [
            {
              type: "text",
              md: "A vending machine must return 12 cents using coins $\\{1, 6, 10\\}$. Greedy grabs 10 + 1 + 1 = **3 coins**, but 6 + 6 = **2 coins** is better. Greedy fails; DP never does.",
            },
            {
              type: "text",
              md: "**Tabulation** (bottom-up DP) fills a table from the smallest subproblems upward, with no recursion. For coin change, let `dp[a]` be the minimum number of coins to make amount `a`.",
            },
            {
              type: "formula",
              tex: "dp[0] = 0, \\qquad dp[a] = 1 + \\min_{c\\,\\in\\,\\text{coins},\\ c \\le a} dp[a - c]",
            },
            {
              type: "code",
              lang: "python",
              runnable: true,
              code: `def min_coins_table(coins, amount):
    INF = float("inf")
    dp = [0] + [INF] * amount
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return dp

table = min_coins_table([1, 6, 10], 12)
for a, v in enumerate(table):
    print(a, v)`,
              caption: "Watch the table fill: dp[12] = 2.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "With coins {1, 6, 10}, what is dp[7] (minimum coins for 7)?",
                  answer: 2,
                  explain: "6 + 1 = 7 uses 2 coins.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Problem", "State", "Complexity"],
              rows: [
                ["Coin change (min coins)", "`dp[a]` for amount a", "$O(A \\cdot k)$"],
                ["0/1 knapsack", "`dp[i][w]`: best value using first i items, capacity w", "$O(n W)$"],
                ["Longest common subsequence", "`dp[i][j]` over prefixes", "$O(nm)$"],
                ["Edit distance", "`dp[i][j]` edits to turn prefix into prefix", "$O(nm)$"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "`git diff` and spell-checkers rely on LCS / edit-distance DP. Bioinformatics aligns DNA with Needleman–Wunsch and Smith–Waterman (both DP). Speech recognisers decode with the Viterbi algorithm — DP again.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Knapsack in $O(nW)$ is polynomial.\" It's *pseudo-polynomial*: $W$ is a number, and its input size is only $\\log W$ bits. Double the bits and $W$ squares.",
            },
            {
              type: "keypoints",
              items: [
                "Tabulation fills a table bottom-up — no recursion limits.",
                "Define the state in words first, then write the recurrence and base case.",
                "Greedy can be wrong where DP is exact (coin change with $\\{1, 6, 10\\}$).",
              ],
            },
          ],
          flashcards: [
            { front: "Tabulation", back: "Bottom-up DP: fill a table from base cases upward." },
            { front: "Coin change recurrence", back: "$dp[a] = 1 + \\min_c dp[a-c]$, with $dp[0] = 0$." },
            { front: "Edit distance use cases", back: "Spell-check, diff tools, DNA alignment." },
            { front: "Pseudo-polynomial", back: "Polynomial in a numeric value (like $W$), not in the input's bit-length." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "With coins {1, 5, 6, 9}, what is the minimum number of coins for 11?",
              options: ["1", "2", "3", "4"],
              answer: 1,
              explain: "5 + 6 = 11 uses 2 coins. Greedy (9 + 1 + 1) would use 3.",
            },
            {
              kind: "truefalse",
              q: "Tabulation avoids the risk of hitting Python's recursion limit.",
              answer: true,
              explain: "It uses loops over a table rather than recursive calls.",
            },
            {
              kind: "order",
              q: "Order the steps for designing a DP solution.",
              items: ["Define the state in words", "Write the recurrence", "Set the base cases", "Choose the fill order", "Read off the answer"],
              explain: "State → recurrence → base cases → evaluation order → answer.",
            },
            {
              kind: "numeric",
              q: "Coin change with 3 coin types and amount 1,000: how many (amount, coin) checks does tabulation make, roughly?",
              answer: 3000,
              tolerance: 10,
              explain: "$A \\times k = 1000 \\times 3 = 3000$.",
            },
          ],
          challenge: {
            title: "Minimum coins",
            prompt:
              "Write `min_coins(coins, amount)` that returns the minimum number of coins needed to make `amount`, or `-1` if it's impossible. Coins can be reused. Use bottom-up DP.",
            lang: "python",
            starter: `def min_coins(coins, amount):
    # dp[a] = fewest coins to make amount a
    pass
`,
            tests: [
              { label: "{1, 5, 6, 9} makes 11 with 2 coins", check: "min_coins([1, 5, 6, 9], 11) == 2" },
              { label: "{1, 2, 5} makes 11 with 3 coins", check: "min_coins([1, 2, 5], 11) == 3" },
              { label: "Impossible returns -1", check: "min_coins([2], 3) == -1" },
              { label: "Amount 0 needs 0 coins", check: "min_coins([1], 0) == 0" },
              { label: "Fast on larger amounts", check: "min_coins([1, 6, 10], 1000) == 100" },
            ],
            solution: `def min_coins(coins, amount):
    INF = float("inf")
    dp = [0] + [INF] * amount
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return dp[amount] if dp[amount] != INF else -1
`,
            hints: [
              "Start with `dp = [0] + [float('inf')] * amount`.",
              "At the end, convert infinity to -1.",
            ],
          },
        },
      ],
    },
  ],
};
