import type { Topic } from "@/content/types";

/** String.raw keeps code exactly as written. */
const r = String.raw;

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 12 · Queue (NCERT Class 12 CS, Karnataka II PUC)              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-queue",
    title: "Queue",
    icon: "🚶",
    description: "The FIFO queue and its operations, the double-ended queue (deque), list implementations of both in Python, and where queues are used in real life and inside computers.",
    lessons: [
      {
        slug: "c12-cs-queue-fifo-operations",
        title: "Queue: FIFO and its Operations",
        summary: "What a queue is, the front and rear ends, the FIFO rule, the operations ENQUEUE, DEQUEUE, IS EMPTY, IS FULL and PEEK, overflow and underflow, and real and computer applications.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎫",
            caption: "At a bus-pass counter the first person to join the line is the first person served.",
          },
          {
            type: "text",
            md: "A **queue** is an ordered linear list of elements in which new elements are added at one end, called the **rear** (or tail), and elements are removed from the other end, called the **front** (or head).\n\nBecause the element that joined first is the one that leaves first, a queue follows the **FIFO** principle: **First In, First Out**. (You may also see it called First Come, First Served.) Compare this with a **stack**, where both adding and removing happen at the same end (the top), giving LIFO: Last In, First Out.",
          },
          {
            type: "table",
            headers: ["", "Stack", "Queue"],
            rows: [
              ["Principle", "LIFO (Last In, First Out)", "FIFO (First In, First Out)"],
              ["Ends used", "One end: the top", "Two ends: rear for insertion, front for deletion"],
              ["Add operation", "PUSH", "ENQUEUE"],
              ["Remove operation", "POP", "DEQUEUE"],
              ["Look without removing", "TOP / PEEK (top element)", "PEEK (front element)"],
            ],
          },
          {
            type: "heading",
            text: "Operations on a queue",
          },
          {
            type: "list",
            items: [
              "**ENQUEUE**: insert a new element at the **rear**. Trying to add to a queue that is already full causes **overflow**.",
              "**DEQUEUE**: remove and return the element at the **front**. Trying to remove from an empty queue causes **underflow**.",
              "**IS EMPTY**: check whether the queue has no elements, so that DEQUEUE never runs on an empty queue.",
              "**IS FULL**: check whether there is room for another element, so that ENQUEUE does not overflow. A Python list grows as needed, so with a plain list this check is not required unless we fix a maximum size ourselves.",
              "**PEEK**: return the front element **without removing it**.",
            ],
          },
          {
            type: "example",
            title: "Tracing a sequence of operations",
            problem: "Start with an empty queue Q. Perform: ENQUEUE 15, ENQUEUE 40, ENQUEUE 25, DEQUEUE, ENQUEUE 60, PEEK, DEQUEUE. Show the queue (front on the left) after each step and give the values returned.",
            steps: [
              "ENQUEUE 15 → `[15]` (15 is both front and rear).",
              "ENQUEUE 40 → `[15, 40]`; ENQUEUE 25 → `[15, 40, 25]`.",
              "DEQUEUE removes the **front**, 15 → `[40, 25]`.",
              "ENQUEUE 60 joins at the rear → `[40, 25, 60]`.",
              "PEEK returns 40 and leaves the queue unchanged → `[40, 25, 60]`.",
              "DEQUEUE removes 40 → `[25, 60]`.",
            ],
            answer: "Values returned: 15 (first DEQUEUE), 40 (PEEK), 40 (second DEQUEUE). Final queue `[25, 60]`, front 25, rear 60.",
          },
          {
            type: "mistake",
            wrong: "DEQUEUE removes the element that was added most recently, because it is at the end of the list.",
            right: "DEQUEUE removes the element at the **front**, which is the **oldest** element. Removing the newest one is what a stack's POP does.",
            why: "The two structures look alike when drawn as a row of boxes. Remember the counter: the person who just joined the line is the last to be served, not the first.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A Python list as a queue: append() adds at the rear, pop(0) removes from the front.",
            code: r`q = []
q.append("T1")
q.append("T2")
q.append("T3")
print(q)
served = q.pop(0)
print("Served:", served)
print("Front:", q[0], "Rear:", q[-1])
print("Size:", len(q))`,
          },
          {
            type: "text",
            md: "Output:\n\n`['T1', 'T2', 'T3']`\n\n`Served: T1`\n\n`Front: T2 Rear: T3`\n\n`Size: 2`\n\nWith a list, index 0 is the front and index −1 is the rear. Note that `pop()` with no argument would remove the **rear** element, which is stack behaviour; a queue needs `pop(0)`.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Elements A, B, C, D are enqueued in that order. Two DEQUEUE operations are then done. Which element is at the front now?",
                options: ["C", "A", "B", "D"],
                answer: 0,
                explain: "DEQUEUE removes A and then B (the oldest first), so C is at the front and D at the rear.",
              },
              {
                kind: "fill",
                q: "Trying to DEQUEUE from an empty queue is called ___.",
                answer: ["underflow", "queue underflow"],
                explain: "Underflow means removing from an empty structure; overflow means adding to a full one.",
              },
            ],
          },
          {
            type: "heading",
            text: "Where queues are used",
          },
          {
            type: "text",
            md: "**In daily life:** people waiting at a ticket counter or an ATM, vehicles at a toll plaza, and a train's waiting list, where the confirmed seat goes to the passenger whose ticket was booked earliest.\n\n**Inside computers:** a **printer** shared on a network prints jobs in the order they arrive (the print queue); a **web server** keeps incoming requests in a queue and handles them in turn; the **operating system** keeps processes waiting for the CPU in a queue (job scheduling); a customer-care phone line holds callers in a queue until an agent is free; keyboard key presses are kept in a buffer and processed in the order typed.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the situation better modelled by a stack or a queue?",
              groups: ["Stack (LIFO)", "Queue (FIFO)"],
              items: [
                { text: "Jobs sent to a shared office printer", group: 1, hint: "The first document sent is printed first." },
                { text: "Undo in a text editor", group: 0, hint: "The most recent change is undone first." },
                { text: "Callers waiting for a customer-care agent", group: 1, hint: "The caller who waited longest is answered next." },
                { text: "Plates piled in a canteen", group: 0, hint: "You take the plate that was put on last." },
                { text: "Requests reaching a web server", group: 1, hint: "Handled in order of arrival." },
                { text: "Back button of a browser", group: 0, hint: "Goes to the page visited most recently." },
              ],
              explain: "Whenever fairness by arrival time matters (first come, first served), the structure is a queue. Whenever the latest item must be handled first, it is a stack.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 2–3 mark trace, draw the queue after **every** operation with the front and rear marked, and write the value returned by each DEQUEUE and PEEK. Say clearly that insertion happens at the rear and deletion at the front; examiners look for the words FIFO, front and rear.",
          },
          {
            type: "keypoints",
            items: [
              "A queue is a linear list with insertion at the **rear** and deletion at the **front**: FIFO.",
              "Operations: ENQUEUE, DEQUEUE, IS EMPTY, IS FULL, PEEK.",
              "Overflow: adding to a full queue. Underflow: removing from an empty queue.",
              "With a Python list: `append()` to enqueue, `pop(0)` to dequeue, `[0]` to peek.",
              "Uses: print queues, web-server requests, CPU job scheduling, call centres, waiting lists.",
            ],
          },
        ],
        flashcards: [
          { front: "What does FIFO stand for?", back: "First In, First Out: the element added first is removed first." },
          { front: "At which end of a queue is an element inserted?", back: "At the rear (tail)." },
          { front: "At which end of a queue is an element deleted?", back: "At the front (head)." },
          { front: "What is ENQUEUE?", back: "The operation that inserts a new element at the rear of a queue." },
          { front: "What is DEQUEUE?", back: "The operation that removes and returns the element at the front of a queue." },
          { front: "What is queue underflow?", back: "An attempt to delete (dequeue) from an empty queue." },
          { front: "What does PEEK do on a queue?", back: "Returns the front element without removing it." },
          { front: "Why is IS FULL usually not needed for a Python list queue?", back: "A list grows dynamically, so it does not run out of room unless we impose a maximum size." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which principle does a queue follow?",
            options: ["FIFO", "LIFO", "FILO", "Random access"],
            answer: 0,
            explain: "A queue serves elements in the order they arrived: First In, First Out.",
          },
          {
            kind: "mcq",
            q: "Starting empty: ENQUEUE 5, ENQUEUE 9, DEQUEUE, ENQUEUE 3, ENQUEUE 7, DEQUEUE. What is the queue now (front first)?",
            options: ["`[3, 7]`", "`[9, 3]`", "`[5, 9]`", "`[9, 7]`"],
            answer: 0,
            explain: "After the first DEQUEUE (removes 5): [9]. Add 3 and 7: [9, 3, 7]. The second DEQUEUE removes 9: [3, 7].",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In a queue, both insertion and deletion take place at the same end.",
            answer: false,
            explain: "That is a stack. A queue inserts at the rear and deletes at the front.",
          },
          {
            kind: "mcq",
            q: "In a Python list `q` used as a queue (front at index 0), which statement performs DEQUEUE?",
            options: ["`q.pop(0)`", "`q.pop()`", "`q.append(x)`", "`q.remove()`"],
            answer: 0,
            explain: "`pop(0)` removes and returns the front element. `pop()` removes the last (rear) element, which would make it a stack.",
          },
          {
            kind: "multi",
            q: "Which of these are naturally handled using a queue?",
            options: ["Print jobs on a shared printer", "Undo/redo of edits", "Processes waiting for the CPU", "Ticket booking waiting list", "Checking balanced brackets"],
            answers: [0, 2, 3],
            explain: "Print jobs, CPU scheduling and waiting lists are first-come-first-served. Undo and bracket checking need the most recent item first, so they use a stack.",
          },
          {
            kind: "fill",
            q: "Adding an element to a queue that has no space left is called ___.",
            answer: ["overflow", "queue overflow"],
            explain: "Overflow happens on ENQUEUE into a full queue.",
          },
          {
            kind: "mcq",
            q: "After ENQUEUE 'P', ENQUEUE 'Q', ENQUEUE 'R' on an empty queue, what does PEEK return?",
            options: ["'P'", "'R'", "'Q'", "It raises an error"],
            answer: 0,
            explain: "PEEK returns the front element, which is the first one added, and leaves the queue unchanged.",
          },
          {
            kind: "order",
            q: "Elements arrive in the order Ravi, Sana, Tara, Usha. Put them in the order they leave the queue.",
            items: ["Ravi", "Sana", "Tara", "Usha"],
            explain: "FIFO: they leave in exactly the order they arrived.",
          },
        ],
      },
      {
        slug: "c12-cs-queue-deque-python",
        title: "Implementing Queue and Deque in Python",
        summary: "Writing enqueue, dequeue, isEmpty, peek and size as Python functions on a list, then the double-ended queue (deque), its six operations, list implementation and applications such as palindrome checking.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "In NCERT's approach, a queue is simply a Python **list** that we agree to use in a fixed way: the **front is index 0** and the **rear is the end of the list**. Each operation is written as a small function that takes the list as a parameter. Because a list is mutable, the function changes the caller's list directly, so nothing needs to be returned for ENQUEUE.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Queue operations as functions. Predict the output first.",
            code: r`def enqueue(myQueue, element):
    myQueue.append(element)

def isEmpty(myQueue):
    return len(myQueue) == 0

def dequeue(myQueue):
    if isEmpty(myQueue):
        print("Queue is empty: underflow")
        return None
    return myQueue.pop(0)

def peek(myQueue):
    if isEmpty(myQueue):
        return None
    return myQueue[0]

def size(myQueue):
    return len(myQueue)

myQueue = []
enqueue(myQueue, "Asha")
enqueue(myQueue, "Bilal")
enqueue(myQueue, "Chetan")
print("Queue:", myQueue, "size", size(myQueue))
print("Removed:", dequeue(myQueue))
print("Front:", peek(myQueue))
enqueue(myQueue, "Divya")
print("Queue:", myQueue)
while not isEmpty(myQueue):
    print("Served", dequeue(myQueue))
print(dequeue(myQueue))`,
          },
          {
            type: "text",
            md: "Output:\n\n`Queue: ['Asha', 'Bilal', 'Chetan'] size 3`\n\n`Removed: Asha`\n\n`Front: Bilal`\n\n`Queue: ['Bilal', 'Chetan', 'Divya']`\n\n`Served Bilal`, `Served Chetan`, `Served Divya` (one per line)\n\n`Queue is empty: underflow`\n\n`None`\n\nThe last two lines come from the final call: `dequeue()` prints the underflow message, returns `None`, and `print()` then shows that `None`.",
          },
          {
            type: "mistake",
            wrong: "`dequeue()` can just be `return myQueue.pop(0)`; checking for an empty queue is optional.",
            right: "Always test `isEmpty()` first. `pop(0)` on an empty list raises `IndexError: pop from empty list`, which crashes the program.",
            why: "Underflow is a real error condition. Handling it inside `dequeue()` lets the program report it politely and carry on, which is what board answers are expected to show.",
          },
          {
            type: "heading",
            text: "Deque: the double-ended queue",
          },
          {
            type: "text",
            md: "A **deque** (pronounced \"deck\", short for **double-ended queue**) is a linear list in which elements can be **inserted and deleted at both ends**, the front and the rear. It is more flexible than both a stack and a queue:\n\n- use only one end for both insertion and deletion, and the deque behaves as a **stack**;\n- insert at one end and delete at the other, and it behaves as a **queue**.",
          },
          {
            type: "table",
            headers: ["Operation", "Meaning", "Python list statement"],
            rows: [
              ["INSERTFRONT", "add at the front", "`myDeque.insert(0, element)`"],
              ["INSERTREAR", "add at the rear", "`myDeque.append(element)`"],
              ["DELETIONFRONT", "remove from the front", "`myDeque.pop(0)`"],
              ["DELETIONREAR", "remove from the rear", "`myDeque.pop()`"],
              ["GETFRONT", "read the front element", "`myDeque[0]`"],
              ["GETREAR", "read the rear element", "`myDeque[-1]`"],
            ],
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Deque functions on a list (front = index 0).",
            code: r`def insertFront(myDeque, element):
    myDeque.insert(0, element)

def insertRear(myDeque, element):
    myDeque.append(element)

def deletionFront(myDeque):
    if len(myDeque) == 0:
        return None
    return myDeque.pop(0)

def deletionRear(myDeque):
    if len(myDeque) == 0:
        return None
    return myDeque.pop()

def getFront(myDeque):
    return myDeque[0] if myDeque else None

def getRear(myDeque):
    return myDeque[-1] if myDeque else None

d = []
insertRear(d, 20)
insertRear(d, 30)
insertFront(d, 10)
insertFront(d, 5)
print(d)
print(deletionRear(d), deletionFront(d))
print(d, getFront(d), getRear(d))`,
          },
          {
            type: "text",
            md: "Output:\n\n`[5, 10, 20, 30]`\n\n`30 5`\n\n`[10, 20] 10 20`\n\nThe two INSERTFRONT calls put 10 and then 5 in front of 20, so 5 ends up first.",
          },
          {
            type: "example",
            title: "Checking a palindrome with a deque",
            problem: "Use a deque to decide whether a word reads the same forwards and backwards. Trace it for \"ROTOR\" and \"MYSURU\".",
            steps: [
              "Insert every character at the rear: the deque holds the word in order.",
              "While more than one character is left, delete one from the front **and** one from the rear and compare them.",
              "ROTOR: R = R, then O = O, then only T is left, so it is a palindrome.",
              "MYSURU: front M and rear U differ at the very first comparison, so it is not a palindrome.",
              "If the loop ends without a mismatch, the word is a palindrome (a single middle character needs no partner).",
            ],
            answer: "\"ROTOR\" → True, \"MYSURU\" → False. Each comparison removes a matching pair from both ends at once, which only a deque can do.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def isPalindrome(word):
    d = []
    for ch in word:
        d.append(ch)            # insertRear
    while len(d) > 1:
        first = d.pop(0)        # deletionFront
        last = d.pop()          # deletionRear
        if first != last:
            return False
    return True

for w in ["MALAYALAM", "KANNADA", "LEVEL", "ROTOR", "MYSURU"]:
    print(w, isPalindrome(w))`,
          },
          {
            type: "text",
            md: "Output: `MALAYALAM True`, `KANNADA False`, `LEVEL True`, `ROTOR True`, `MYSURU False` (one per line). KANNADA fails because its first letter K does not match its last letter A.\n\n**Other uses of a deque:** a person who has just left a ticket counter to fetch something may be allowed back at the **front** instead of the rear; a browser or text editor that keeps only a limited history adds new entries at one end and drops the oldest from the other end, while undo takes the newest from the same end it was added.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Starting with `d = [4, 8]`, what is `d` after `d.insert(0, 1)`, `d.append(9)` and `d.pop()`?",
                options: ["`[1, 4, 8]`", "`[4, 8, 9]`", "`[1, 4, 8, 9]`", "`[4, 8]`"],
                answer: 0,
                explain: "insert(0, 1) gives [1, 4, 8]; append(9) gives [1, 4, 8, 9]; pop() removes the rear 9.",
              },
              {
                kind: "truefalse",
                q: "A deque in which insertion and deletion are both done only at the rear behaves like a stack.",
                answer: true,
                explain: "Using one end for both operations gives LIFO behaviour, exactly like a stack.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each deque operation to its Python list statement.",
              pairs: [
                ["INSERTFRONT", "`d.insert(0, x)`"],
                ["INSERTREAR", "`d.append(x)`"],
                ["DELETIONFRONT", "`d.pop(0)`"],
                ["DELETIONREAR", "`d.pop()`"],
                ["GETREAR", "`d[-1]`"],
              ],
              explain: "With the front at index 0, front operations use index 0 and rear operations use the end of the list.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Practical and board tip",
            md: "In the practical exam, write each operation as a separate function and add a small menu or test code that calls them, including one call on an empty queue to show underflow. In theory answers, a deque can be used as both stack and queue: say which ends are used in each case.",
          },
          {
            type: "keypoints",
            items: [
              "Queue on a list: `append()` = ENQUEUE, `pop(0)` = DEQUEUE, `[0]` = PEEK, `len()` = size.",
              "Check `isEmpty()` before deleting; `pop(0)` on an empty list raises IndexError.",
              "A deque allows insertion and deletion at **both** ends.",
              "Deque operations: insertFront, insertRear, deletionFront, deletionRear, getFront, getRear.",
              "A deque can act as a stack (one end) or a queue (two ends); it is used for palindrome checks.",
            ],
          },
        ],
        flashcards: [
          { front: "Which list method implements ENQUEUE?", back: "`append(element)`, which adds at the rear (end of the list)." },
          { front: "Which list method implements DEQUEUE?", back: "`pop(0)`, which removes and returns the front element." },
          { front: "What error does `pop(0)` raise on an empty list?", back: "IndexError (pop from empty list)." },
          { front: "What is a deque?", back: "A double-ended queue: insertion and deletion are allowed at both the front and the rear." },
          { front: "Python statement for INSERTFRONT on list d?", back: "`d.insert(0, element)`" },
          { front: "Python statement for DELETIONREAR on list d?", back: "`d.pop()`" },
          { front: "How does a deque act as a queue?", back: "Insert at one end (say rear) and delete from the other end (front)." },
          { front: "Name one application of a deque.", back: "Checking whether a string is a palindrome by comparing characters removed from both ends." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed?\n\n`q = [10, 20]`\n\n`q.append(30)`\n\n`q.pop(0)`\n\n`q.append(q[0] * 2)`\n\n`print(q)`",
            options: ["`[20, 30, 40]`", "`[10, 20, 30, 20]`", "`[20, 30, 60]`", "`[10, 20, 40]`"],
            answer: 0,
            explain: "After append: [10, 20, 30]. pop(0) removes 10: [20, 30]. q[0] * 2 = 40 is appended: [20, 30, 40].",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which function correctly returns the front element of queue `Q` without removing it?",
            options: ["`return Q[0]`", "`return Q.pop(0)`", "`return Q[-1]`", "`return Q.pop()`"],
            answer: 0,
            explain: "PEEK reads index 0 (the front). pop(0) would also remove it; Q[-1] is the rear.",
          },
          {
            kind: "truefalse",
            q: "In a deque, deletion is allowed only from the front.",
            answer: false,
            explain: "A deque allows deletion from both the front and the rear.",
          },
          {
            kind: "mcq",
            q: "`d = []`, then `d.append('B')`, `d.insert(0, 'A')`, `d.append('C')`, `d.insert(0, 'Z')`. What is `d`?",
            options: ["`['Z', 'A', 'B', 'C']`", "`['A', 'Z', 'B', 'C']`", "`['B', 'A', 'C', 'Z']`", "`['Z', 'B', 'A', 'C']`"],
            answer: 0,
            explain: "['B'] → ['A', 'B'] → ['A', 'B', 'C'] → ['Z', 'A', 'B', 'C'].",
          },
          {
            kind: "fill",
            q: "The full form of deque is ___ queue.",
            answer: ["double-ended", "double ended"],
            explain: "Deque = double-ended queue.",
          },
          {
            kind: "multi",
            q: "Which statements about the `isPalindrome()` deque function are true?",
            options: ["It deletes from both ends in each round", "It returns False at the first mismatch", "It needs the word to be sorted first", "A word with one middle letter left over is a palindrome if no mismatch was found"],
            answers: [0, 1, 3],
            explain: "No sorting is involved: sorting would destroy the order of letters that a palindrome test depends on.",
          },
          {
            kind: "numeric",
            q: "How many character comparisons does `isPalindrome(\"MALAYALAM\")` make before returning True?",
            answer: 4,
            explain: "9 letters: pairs (M,M), (A,A), (L,L), (A,A) are compared; then only Y is left and the loop stops. That is 4 comparisons.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What does the call `dequeue([])` from the lesson's code return?",
            options: ["`None`, after printing an underflow message", "An IndexError", "An empty list", "0"],
            answer: 0,
            explain: "`isEmpty()` is True, so it prints the underflow message and returns None instead of calling pop(0).",
          },
        ],
      },
      {
        slug: "c12-cs-queue-board-practice",
        title: "Queue: Board Practice",
        summary: "Mixed board-style questions on queues and deques: definitions, traces, a fixed-size queue with overflow, output questions and a short program to write.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "This lesson collects the kinds of questions that appear in II PUC papers on this chapter: 1-mark definitions, 2-mark differences and traces, 3-mark output questions and a 4–5 mark program. Try each one before reading the answer.",
          },
          {
            type: "heading",
            text: "Short answers",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Define a queue.** An ordered linear list where elements are inserted at the rear and deleted from the front, following FIFO.",
              "**Differentiate between overflow and underflow.** Overflow: ENQUEUE on a full queue. Underflow: DEQUEUE on an empty queue.",
              "**Give two differences between a stack and a queue.** A stack is LIFO and uses one end (top); a queue is FIFO and uses two ends (rear for insertion, front for deletion).",
              "**What is a deque? How is it different from a queue?** A double-ended queue permits insertion and deletion at both ends; an ordinary queue inserts only at the rear and deletes only at the front.",
              "**Give two applications of a queue in computing.** Print spooling on a shared printer; CPU scheduling of waiting processes (also web-server request handling).",
            ],
          },
          {
            type: "heading",
            text: "A fixed-size queue with IS FULL",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "A print queue that can hold at most 3 jobs.",
            code: r`SIZE = 3

def isFull(q):
    return len(q) == SIZE

def enqueue(q, item):
    if isFull(q):
        print("Overflow: cannot add", item)
    else:
        q.append(item)

def dequeue(q):
    if len(q) == 0:
        print("Underflow")
        return None
    return q.pop(0)

jobs = []
for job in ["J1", "J2", "J3", "J4"]:
    enqueue(jobs, job)
print(jobs)
print("Printed", dequeue(jobs))
enqueue(jobs, "J4")
print(jobs)`,
          },
          {
            type: "text",
            md: "Output:\n\n`Overflow: cannot add J4`\n\n`['J1', 'J2', 'J3']`\n\n`Printed J1`\n\n`['J2', 'J3', 'J4']`\n\nThe overflow line comes **first** because it is printed inside the loop, before `print(jobs)` runs. Once J1 is printed, there is room again and J4 joins at the rear.",
          },
          {
            type: "example",
            title: "Output question: list operations as a queue",
            problem: "Find the output:\n\n`Q = []`\n\n`for n in [4, 9, 2, 7]:`\n\n`    Q.append(n * 2)`\n\n`Q.pop(0)`\n\n`Q.append(Q[0] + Q[-1])`\n\n`Q.insert(0, Q.pop())`\n\n`print(Q, len(Q))`",
            steps: [
              "The loop enqueues doubled values: `[8, 18, 4, 14]`.",
              "`Q.pop(0)` dequeues 8: `[18, 4, 14]`.",
              "`Q[0] + Q[-1]` = 18 + 14 = 32, appended: `[18, 4, 14, 32]`.",
              "`Q.pop()` removes the rear 32 and `insert(0, ...)` puts it at the front: `[32, 18, 4, 14]`. This pair is DELETIONREAR followed by INSERTFRONT, a deque move.",
            ],
            answer: "`[32, 18, 4, 14] 4`",
          },
          {
            type: "mistake",
            wrong: "In the fixed-size program, `print(jobs)` runs first, so the output starts with the list.",
            right: "Statements run in order: the overflow message is printed during the loop, so it appears before the list.",
            why: "In output questions, follow the program line by line and write down every `print` the moment it executes, including those inside functions.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "With SIZE = 3 in the program above, what is printed if the loop list is `[\"J1\", \"J2\"]` instead?",
                options: ["`['J1', 'J2']`, then `Printed J1`, then `['J2', 'J4']`", "`Overflow: cannot add J4` first", "`['J1', 'J2', 'J4']`", "Only `Underflow`"],
                answer: 0,
                explain: "No overflow happens. After printing J1 the queue is ['J2'], and J4 is added: ['J2', 'J4'].",
              },
            ],
          },
          {
            type: "heading",
            text: "Write a program",
          },
          {
            type: "example",
            title: "Queue of even numbers",
            problem: "Write a function `evenQueue(nums)` that enqueues only the even numbers of a list into a new queue and returns it. Then dequeue all elements, printing each one with a running total.",
            steps: [
              "Create an empty list `q`; for each `n` in `nums`, if `n % 2 == 0`, do `q.append(n)`.",
              "Return `q`.",
              "Loop `while q:` (a non-empty list is true), dequeue with `q.pop(0)` and add it to `total`.",
              "Print the removed value and the running total each time.",
            ],
            answer: "For `[15, 8, 22, 7, 40, 13]`: `Queue: [8, 22, 40]`, then `Removed 8 running total 8`, `Removed 22 running total 30`, `Removed 40 running total 70`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def evenQueue(nums):
    q = []
    for n in nums:
        if n % 2 == 0:
            q.append(n)
    return q

q = evenQueue([15, 8, 22, 7, 40, 13])
print("Queue:", q)
total = 0
while q:
    x = q.pop(0)
    total += x
    print("Removed", x, "running total", total)`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A deque holds [3, 6, 9]. You do INSERTFRONT 1, DELETIONREAR, INSERTREAR 12, DELETIONFRONT. What is the deque now?",
              emoji: "🔁",
              options: ["[3, 6, 12]", "[1, 3, 6]", "[6, 9, 12]", "[3, 6, 9, 12]"],
              answer: 0,
              trap: 2,
              explain: "[1, 3, 6, 9] → remove rear 9 → [1, 3, 6] → add 12 at rear → [1, 3, 6, 12] → remove front 1 → [3, 6, 12]. The trap answer treats every deletion as a front deletion.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a program answer, show the function definitions, a comment naming each operation (ENQUEUE, DEQUEUE, etc.) and handle the empty case. Marks are given separately for correct insertion at the rear, deletion from the front and the underflow check.",
          },
          {
            type: "keypoints",
            items: [
              "Definitions to know: queue, FIFO, front, rear, overflow, underflow, deque.",
              "A fixed SIZE makes IS FULL meaningful: check `len(q) == SIZE` before appending.",
              "For output questions, track the list after every statement and write prints in the order they run.",
              "`pop()` + `insert(0, x)` is a deque move: delete at rear, insert at front.",
            ],
          },
        ],
        flashcards: [
          { front: "Condition for IS FULL in a queue of fixed SIZE?", back: "`len(q) == SIZE`" },
          { front: "Condition for IS EMPTY?", back: "`len(q) == 0` (or `not q`)." },
          { front: "Why does `while q:` stop when the queue is empty?", back: "An empty list is treated as False in a condition." },
          { front: "Two queue applications in computing?", back: "Print spooling and CPU job scheduling (also web-server requests)." },
          { front: "Which deque operations does `q.insert(0, q.pop())` perform?", back: "DELETIONREAR then INSERTFRONT: the rear element moves to the front." },
          { front: "Stack vs queue in one line?", back: "Stack: LIFO, one end (top). Queue: FIFO, two ends (rear in, front out)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed?\n\n`q = [7, 3, 5]`\n\n`q.append(q.pop(0))`\n\n`q.append(q.pop(0))`\n\n`print(q)`",
            options: ["`[5, 7, 3]`", "`[7, 3, 5]`", "`[3, 5, 7]`", "`[5, 3, 7]`"],
            answer: 0,
            explain: "First the front 7 moves to the rear: [3, 5, 7]. Then 3 moves: [5, 7, 3]. This is a queue rotation.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A queue of fixed size 4 is empty. ENQUEUE is attempted 6 times, then DEQUEUE is attempted 5 times. How many of these 11 operations fail (overflow or underflow)?",
            answer: 3,
            explain: "2 enqueues overflow (only 4 fit). Of 5 dequeues, 4 succeed and 1 underflows. Total failures = 2 + 1 = 3.",
            difficulty: 3,
          },
          {
            kind: "truefalse",
            q: "PEEK on a queue changes the number of elements in it.",
            answer: false,
            explain: "PEEK only reads the front element; the size stays the same.",
          },
          {
            kind: "mcq",
            q: "Which of these correctly describes a deque used as a stack?",
            options: ["Insert and delete at the same end", "Insert at rear, delete at front", "Insert at front, delete at rear", "Delete from both ends alternately"],
            answer: 0,
            explain: "A stack uses one end for both operations, so a deque restricted to one end behaves as a stack.",
          },
          {
            kind: "fill",
            q: "In `evenQueue([5, 10, 11, 16])`, the returned queue is ___ (write it as a Python list).",
            answer: ["[10, 16]", "[10,16]"],
            explain: "Only 10 and 16 are even, and they are added in order.",
          },
          {
            kind: "multi",
            q: "Which statements are true for the fixed-size queue program?",
            options: ["`isFull()` is checked before appending", "A dequeue makes room for a new element", "Overflow deletes the oldest job", "Underflow is reported when the queue is empty"],
            answers: [0, 1, 3],
            explain: "On overflow the new item is simply refused; nothing already in the queue is deleted.",
          },
          {
            kind: "order",
            q: "Arrange the steps of a safe DEQUEUE function in order.",
            items: ["Check whether the queue is empty", "If empty, report underflow and return None", "Otherwise remove the element at index 0", "Return the removed element"],
            explain: "The empty check must come first so that pop(0) never runs on an empty list.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "12:Queue": "c12-cs-queue",
};
