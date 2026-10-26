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

  /* ------------------------------------------------------------------ */
  /* Class 12 · Sorting                                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-sorting",
    title: "Sorting",
    icon: "📶",
    description: "Bubble sort, selection sort and insertion sort traced pass by pass and written in Python, with the idea of time complexity: constant, linear and quadratic time.",
    lessons: [
      {
        slug: "c12-cs-bubble-selection-sort",
        title: "Bubble Sort and Selection Sort",
        summary: "Why we sort, how bubble sort pushes the largest element to the end in every pass, how selection sort picks the smallest element for each position, and both algorithms in Python with pass-by-pass traces.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Sorting** means arranging the elements of a list in a particular order: **ascending** (smallest first) or **descending** (largest first). Numbers are compared by value and strings in dictionary (alphabetical) order. A dictionary, a telephone directory, a merit list and an exam hall seating chart are all sorted, because finding something in sorted data is much faster. In the next chapter you will see that binary search works **only** on sorted data.\n\nAll three sorts in this chapter work **in place**: they rearrange the same list by swapping or shifting elements, without building a new list.",
          },
          {
            type: "heading",
            text: "Bubble sort",
          },
          {
            type: "text",
            md: "Bubble sort makes repeated **passes** over the list. In each pass it compares **adjacent** elements, `L[j]` and `L[j + 1]`, and **swaps** them if they are in the wrong order. By the end of pass 1 the largest element has \"bubbled up\" to the last position; after pass 2 the second largest is in the second-last position, and so on.\n\nFor a list of n elements, **n − 1 passes** are enough. Pass i (counting from 1) needs only n − i comparisons, because the last i − 1 elements are already in their final places.",
          },
          {
            type: "widget",
            widget: "sorting",
            props: { algorithm: "bubble" },
            caption: "Watch adjacent pairs being compared and swapped.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Bubble sort that shows the list after every pass.",
            code: r`def bubbleSort(L):
    n = len(L)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if L[j] > L[j + 1]:
                L[j], L[j + 1] = L[j + 1], L[j]
        print("Pass", i + 1, ":", L)

data = [8, 3, 6, 1, 5]
bubbleSort(data)`,
          },
          {
            type: "example",
            title: "Tracing bubble sort",
            problem: "Trace bubble sort on `[8, 3, 6, 1, 5]` and show the list after each pass.",
            steps: [
              "Pass 1 (4 comparisons): 8>3 swap, 8>6 swap, 8>1 swap, 8>5 swap → `[3, 6, 1, 5, 8]`. The largest, 8, is now last.",
              "Pass 2 (3 comparisons): 3<6 no swap, 6>1 swap, 6>5 swap → `[3, 1, 5, 6, 8]`.",
              "Pass 3 (2 comparisons): 3>1 swap, 3<5 no swap → `[1, 3, 5, 6, 8]`.",
              "Pass 4 (1 comparison): 1<3 no swap → `[1, 3, 5, 6, 8]`.",
            ],
            answer: "Output: `Pass 1 : [3, 6, 1, 5, 8]`, `Pass 2 : [3, 1, 5, 6, 8]`, `Pass 3 : [1, 3, 5, 6, 8]`, `Pass 4 : [1, 3, 5, 6, 8]`. Total comparisons 4 + 3 + 2 + 1 = 10.",
          },
          {
            type: "text",
            md: "Notice that the list was already sorted after pass 3, yet pass 4 still ran. An improved bubble sort keeps a flag `swapped`: if a whole pass makes **no swap**, the list is sorted and the loop can stop early with `break`.",
          },
          {
            type: "heading",
            text: "Selection sort",
          },
          {
            type: "text",
            md: "Selection sort divides the list into a **sorted part** (on the left, initially empty) and an **unsorted part**. In each pass it **selects the smallest element** of the unsorted part and **swaps** it with the first element of the unsorted part. The sorted part then grows by one. After n − 1 passes the list is sorted.\n\nSelection sort makes the same number of comparisons as bubble sort, but **at most one swap per pass**, so at most n − 1 swaps in all.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def selectionSort(L):
    n = len(L)
    for i in range(n - 1):
        minPos = i
        for j in range(i + 1, n):
            if L[j] < L[minPos]:
                minPos = j
        L[i], L[minPos] = L[minPos], L[i]
        print("Pass", i + 1, ":", L)

data = [29, 12, 45, 7, 18]
selectionSort(data)`,
          },
          {
            type: "text",
            md: "Output:\n\n`Pass 1 : [7, 12, 45, 29, 18]` (smallest 7 swapped with 29)\n\n`Pass 2 : [7, 12, 45, 29, 18]` (12 is already the smallest of the rest)\n\n`Pass 3 : [7, 12, 18, 29, 45]` (18 swapped with 45)\n\n`Pass 4 : [7, 12, 18, 29, 45]`\n\nWhen `minPos` stays equal to `i`, the \"swap\" exchanges an element with itself and changes nothing.",
          },
          {
            type: "mistake",
            wrong: "In selection sort, every time a smaller element is found during the inner loop, it is swapped into position i straight away.",
            right: "The inner loop only **remembers the position** of the smallest element (`minPos`). The single swap happens **after** the inner loop ends.",
            why: "Swapping inside the inner loop still sorts the list but turns selection sort into a different, swap-heavy method. The point of selection sort is one swap per pass, which is also how board traces are marked.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is the list `[40, 10, 30, 20]` after the **first pass** of bubble sort (ascending)?",
                options: ["`[10, 30, 20, 40]`", "`[10, 40, 30, 20]`", "`[10, 20, 30, 40]`", "`[40, 10, 20, 30]`"],
                answer: 0,
                explain: "40 is swapped past 10, 30 and 20 to reach the end: [10, 30, 20, 40].",
              },
              {
                kind: "mcq",
                q: "What is the same list `[40, 10, 30, 20]` after the **first pass** of selection sort?",
                options: ["`[10, 40, 30, 20]`", "`[10, 30, 20, 40]`", "`[10, 20, 30, 40]`", "`[20, 10, 30, 40]`"],
                answer: 0,
                explain: "The smallest, 10, is swapped with the first element, 40. Nothing else moves.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which algorithm does each statement describe?",
              groups: ["Bubble sort", "Selection sort"],
              items: [
                { text: "Compares adjacent pairs and swaps them", group: 0, hint: "Neighbours are compared." },
                { text: "Finds the minimum of the unsorted part", group: 1, hint: "It selects one element per pass." },
                { text: "At most one swap per pass", group: 1, hint: "The swap is done after the search for the minimum." },
                { text: "Largest element reaches the end after pass 1", group: 0, hint: "It bubbles to the right." },
                { text: "Can stop early if a pass makes no swaps", group: 0, hint: "No swap means already sorted." },
                { text: "Smallest element reaches the front after pass 1", group: 1, hint: "The sorted part grows from the left." },
              ],
              explain: "Bubble sort works by neighbour swaps and builds the sorted part at the right end. Selection sort picks the minimum and builds the sorted part at the left end.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When a question says \"show the list after each pass\", write one line per pass and do not skip passes that change nothing. For descending order, only the comparison changes: `>` becomes `<` in bubble sort, and selection sort looks for the **maximum** instead of the minimum.",
          },
          {
            type: "keypoints",
            items: [
              "Sorting arranges elements in ascending or descending order; sorted data is faster to search.",
              "Bubble sort: compare and swap adjacent elements; after pass i, the i largest are in place.",
              "Selection sort: select the minimum of the unsorted part and swap it to the front of that part.",
              "Both need n − 1 passes and n(n − 1)/2 comparisons; selection sort makes at most n − 1 swaps.",
              "A `swapped` flag lets bubble sort stop early on an already sorted list.",
            ],
          },
        ],
        flashcards: [
          { front: "What is sorting?", back: "Arranging the elements of a collection in a particular order, ascending or descending." },
          { front: "Bubble sort compares which elements?", back: "Adjacent elements, L[j] and L[j + 1], swapping them if they are out of order." },
          { front: "Where is the largest element after pass 1 of bubble sort (ascending)?", back: "At the last position of the list." },
          { front: "How many passes does bubble or selection sort need for n elements?", back: "n − 1 passes." },
          { front: "Idea of selection sort?", back: "In each pass, find the smallest element of the unsorted part and swap it with the first unsorted element." },
          { front: "Maximum number of swaps in selection sort?", back: "n − 1 (one per pass)." },
          { front: "Comparisons made by simple bubble sort on n elements?", back: "(n − 1) + (n − 2) + … + 1 = n(n − 1)/2." },
          { front: "How can bubble sort detect that a list is already sorted?", back: "If a whole pass makes no swap, the list is sorted and the loop can stop." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many comparisons does the simple bubble sort above make on a list of 8 elements?",
            answer: 28,
            explain: "7 + 6 + 5 + 4 + 3 + 2 + 1 = 28, which is 8 × 7 / 2.",
          },
          {
            kind: "mcq",
            q: "List `[5, 1, 4, 2, 8]` after **two** passes of bubble sort (ascending):",
            options: ["`[1, 2, 4, 5, 8]`", "`[1, 4, 2, 5, 8]`", "`[1, 2, 5, 4, 8]`", "`[1, 5, 4, 2, 8]`"],
            answer: 0,
            explain: "Pass 1: [1, 4, 2, 5, 8]. Pass 2: 1<4, 4>2 swap, 4<5 → [1, 2, 4, 5, 8].",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "List `[5, 1, 4, 2, 8]` after **two** passes of selection sort (ascending):",
            options: ["`[1, 2, 4, 5, 8]`", "`[1, 5, 4, 2, 8]`", "`[1, 2, 5, 4, 8]`", "`[1, 4, 2, 5, 8]`"],
            answer: 0,
            explain: "Pass 1 swaps 1 with 5: [1, 5, 4, 2, 8]. Pass 2 swaps the minimum of the rest, 2, with 5: [1, 2, 4, 5, 8].",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "However jumbled a list of n elements is, selection sort makes at most n − 1 swaps.",
            answer: true,
            explain: "There is one swap after each of the n − 1 passes. Bubble sort, by contrast, swaps once for every out-of-order pair, which can be up to n(n − 1)/2 swaps.",
          },
          {
            kind: "fill",
            q: "To sort in descending order with bubble sort, the condition `L[j] > L[j + 1]` is changed to `L[j] ___ L[j + 1]`.",
            answer: ["<"],
            explain: "Now a smaller element is pushed to the right, so the largest values collect at the front.",
          },
          {
            kind: "numeric",
            q: "How many swaps does the simple bubble sort make on `[9, 4, 7, 1]`?",
            answer: 5,
            explain: "Pass 1: 9 swaps with 4, 7 and 1 (3 swaps) → [4, 7, 1, 9]. Pass 2: 7 with 1 (1 swap) → [4, 1, 7, 9]. Pass 3: 4 with 1 (1 swap). Total 5.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "In `selectionSort`, what does the variable `minPos` store?",
            options: ["The index of the smallest element found so far in the unsorted part", "The smallest value in the whole list", "The number of swaps made", "The index where the sorted part ends"],
            answer: 0,
            explain: "It records a position (an index), so that one swap can be made after the inner loop.",
          },
          {
            kind: "multi",
            q: "Which are true of both bubble sort and selection sort as written in this lesson?",
            options: ["They sort the list in place", "They use two nested loops", "They need exactly one pass for any list", "They make n(n − 1)/2 comparisons for n elements"],
            answers: [0, 1, 3],
            explain: "Both use nested loops over the same list and make the same number of comparisons; neither can finish every list in one pass.",
          },
        ],
      },
      {
        slug: "c12-cs-insertion-sort-complexity",
        title: "Insertion Sort and Time Complexity",
        summary: "How insertion sort inserts each element into its place in the sorted part by shifting larger elements right, its Python program, and how to judge an algorithm by counting steps: constant, linear and quadratic time.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🃏",
            caption: "Insertion sort is how most people arrange playing cards in their hand, one card at a time.",
          },
          {
            type: "text",
            md: "**Insertion sort** also keeps a sorted part on the left. At the start the first element alone is the sorted part. In each pass the next element of the unsorted part is taken out (held in a variable, say `temp`), and the elements of the sorted part that are **larger than temp are shifted one place to the right**. temp is then dropped into the gap that is left. After n − 1 passes the whole list is sorted.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def insertionSort(L):
    for i in range(1, len(L)):
        temp = L[i]
        j = i - 1
        while j >= 0 and L[j] > temp:
            L[j + 1] = L[j]
            j = j - 1
        L[j + 1] = temp
        print("Pass", i, ":", L)

data = [14, 33, 27, 10, 35, 19]
insertionSort(data)`,
          },
          {
            type: "example",
            title: "Tracing insertion sort",
            problem: "Trace insertion sort on `[14, 33, 27, 10, 35, 19]`.",
            steps: [
              "Pass 1, temp = 33: 14 is not greater, nothing shifts → `[14, 33, 27, 10, 35, 19]`.",
              "Pass 2, temp = 27: 33 shifts right, 14 stays → `[14, 27, 33, 10, 35, 19]`.",
              "Pass 3, temp = 10: 33, 27 and 14 all shift; 10 goes to index 0 → `[10, 14, 27, 33, 35, 19]`.",
              "Pass 4, temp = 35: nothing shifts → `[10, 14, 27, 33, 35, 19]`.",
              "Pass 5, temp = 19: 35, 33, 27 shift; 19 goes after 14 → `[10, 14, 19, 27, 33, 35]`.",
            ],
            answer: "These are exactly the five lines the program prints: `Pass 1 : [14, 33, 27, 10, 35, 19]` … `Pass 5 : [10, 14, 19, 27, 33, 35]`.",
          },
          {
            type: "mistake",
            wrong: "There is no need for `temp`: the loop can compare with `L[i]` directly, as in `while j >= 0 and L[j] > L[i]`, and finish with `L[j + 1] = L[i]`.",
            right: "Copy `L[i]` into `temp` **before** shifting, and compare with and insert `temp`.",
            why: "The very first shift, `L[j + 1] = L[j]`, overwrites `L[i]`, so the value being inserted is lost. Run without temp on `[14, 33, 27, 10, 35, 19]`, the program ends with `[14, 33, 33, 33, 35, 35]`: elements are duplicated and others vanish.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is `[40, 10, 30, 20]` after the **first two passes** of insertion sort?",
                options: ["`[10, 30, 40, 20]`", "`[10, 40, 30, 20]`", "`[10, 20, 30, 40]`", "`[10, 30, 20, 40]`"],
                answer: 0,
                explain: "Pass 1 inserts 10 before 40: [10, 40, 30, 20]. Pass 2 inserts 30 between 10 and 40: [10, 30, 40, 20].",
              },
            ],
          },
          {
            type: "heading",
            text: "Time complexity",
          },
          {
            type: "text",
            md: "Several algorithms may solve the same problem, so we need a way to compare them. Timing a program with a clock is unreliable because it depends on the computer, so instead we **count the basic steps** (comparisons, swaps, assignments) as a function of the input size n. This measure of how the running time grows with n is called the **time complexity** of the algorithm, and it is written with the big-O notation.\n\nA few simple rules of thumb are enough at this level:",
          },
          {
            type: "table",
            headers: ["Structure of the algorithm", "Steps grow like", "Name", "Example"],
            rows: [
              ["No loop: a fixed number of statements", "a constant", "**Constant time**, O(1)", "swapping two values; reading `L[0]`"],
              ["One loop that runs n times", "n", "**Linear time**, O(n)", "finding the sum or the maximum of a list"],
              ["A loop inside a loop, each up to n times", "n²", "**Quadratic time**, O(n²)", "bubble, selection and insertion sort"],
            ],
          },
          {
            type: "formula",
            tex: String.raw`(n-1) + (n-2) + \cdots + 2 + 1 = \frac{n(n-1)}{2}`,
            caption: "Comparisons made by bubble or selection sort. For large n this is close to n²/2, so the time is quadratic.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Counting bubble-sort comparisons: double n and the count roughly quadruples.",
            code: r`def countComparisons(n):
    count = 0
    for i in range(n - 1):
        for j in range(n - 1 - i):
            count += 1
    return count

for n in [5, 10, 100, 1000]:
    print(n, countComparisons(n), n * (n - 1) // 2)`,
          },
          {
            type: "text",
            md: "Output: `5 10 10`, `10 45 45`, `100 4950 4950`, `1000 499500 499500`. Going from 100 to 1000 elements (10 times as many) makes about 100 times as many comparisons: that is what quadratic growth means.\n\nAll three sorts here are O(n²) in general. **Insertion sort** has a useful best case, though: on a list that is already sorted, the while loop never shifts anything, so it does only n − 1 comparisons (linear). The flagged bubble sort also finishes an already sorted list in one pass.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each piece of code to its time complexity.",
              pairs: [
                ["`x = L[0] + L[-1]`", "Constant, O(1)"],
                ["`for v in L: total += v`", "Linear, O(n)"],
                ["`for i in L:` with `for j in L:` inside", "Quadratic, O(n²)"],
              ],
              explain: "Count how many times the innermost statement runs: once, n times, or n × n times.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A common 2-mark question: \"Which sorting algorithm needs the fewest swaps?\" (selection sort) or \"Which works best on an almost sorted list?\" (insertion sort, also flagged bubble sort). For time complexity, justify your answer by pointing to the nested loops.",
          },
          {
            type: "keypoints",
            items: [
              "Insertion sort takes the next element (temp), shifts larger sorted elements right and inserts temp in the gap.",
              "Save `L[i]` in temp before shifting; the loop stops when j < 0 or `L[j] <= temp`.",
              "Time complexity measures how the number of steps grows with input size n.",
              "No loop: constant O(1). Single loop: linear O(n). Nested loops: quadratic O(n²).",
              "Bubble, selection and insertion sort are all O(n²); insertion sort is linear on an already sorted list.",
            ],
          },
        ],
        flashcards: [
          { front: "Idea of insertion sort?", back: "Take each element in turn and insert it into its correct place in the sorted part on its left, shifting larger elements right." },
          { front: "In insertion sort, what is `temp`?", back: "The element currently being inserted into the sorted part." },
          { front: "Why does insertion sort copy L[i] into temp first?", back: "The first shift overwrites L[i]; without temp the value being inserted would be lost." },
          { front: "What is time complexity?", back: "A measure of how the number of steps (and so the running time) of an algorithm grows with the input size n." },
          { front: "Time complexity of an algorithm with no loops?", back: "Constant time, O(1)." },
          { front: "Time complexity of a single loop over n elements?", back: "Linear time, O(n)." },
          { front: "Time complexity of bubble, selection and insertion sort?", back: "Quadratic, O(n²), because of nested loops." },
          { front: "Which of the three sorts is fastest on an already sorted list?", back: "Insertion sort: n − 1 comparisons and no shifts. (A bubble sort with a `swapped` flag ties with it; the plain versions of bubble and selection sort do not.)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In insertion sort, what happens to the elements of the sorted part that are greater than temp?",
            options: ["They are shifted one position to the right", "They are swapped with the minimum", "They are deleted", "They are moved to the end of the list"],
            answer: 0,
            explain: "Each larger element moves one place right to open a gap for temp.",
          },
          {
            kind: "numeric",
            q: "How many shifts (`L[j + 1] = L[j]` steps) does insertion sort make on `[5, 4, 3, 2, 1]`?",
            answer: 10,
            explain: "Passes shift 1, 2, 3 and 4 elements: 1 + 2 + 3 + 4 = 10, the worst case n(n − 1)/2.",
            difficulty: 3,
          },
          {
            kind: "numeric",
            q: "How many shifts does insertion sort make on the sorted list `[1, 2, 3, 4, 5]`?",
            answer: 0,
            explain: "Every temp is already larger than the element before it, so nothing moves.",
          },
          {
            kind: "mcq",
            q: "An algorithm runs one loop 3n times and then a separate loop 5 times. Its time complexity is:",
            options: ["Linear, O(n)", "Constant, O(1)", "Quadratic, O(n²)", "O(3n + 5) and cannot be simplified"],
            answer: 0,
            explain: "The total 3n + 5 grows in proportion to n; constants are dropped, giving O(n).",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "If the input size doubles, a quadratic algorithm takes about four times as many steps.",
            answer: true,
            explain: "(2n)² = 4n², so the step count is multiplied by about 4.",
          },
          {
            kind: "mcq",
            q: "Which sort needs the fewest swaps in general?",
            options: ["Selection sort", "Bubble sort", "Insertion sort", "All need the same"],
            answer: 0,
            explain: "Selection sort makes at most one swap per pass, at most n − 1 in all.",
          },
          {
            kind: "fill",
            q: "Two nested loops, each running n times, give ___ time complexity.",
            answer: ["quadratic", "O(n²)", "O(n^2)"],
            explain: "The inner statement runs n × n = n² times.",
          },
          {
            kind: "order",
            q: "Arrange the steps of one pass of insertion sort in order.",
            items: ["Copy L[i] into temp", "Set j = i − 1", "While j >= 0 and L[j] > temp, shift L[j] to L[j + 1] and decrease j", "Place temp at L[j + 1]"],
            explain: "temp is saved first because the shifting overwrites L[i].",
          },
        ],
      },
      {
        slug: "c12-cs-sorting-board-practice",
        title: "Sorting: Board Practice",
        summary: "Mixed board-style questions on bubble, selection and insertion sort: pass-by-pass traces, comparing the three methods, counting comparisons, a descending sort of strings and a program to write.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "Board papers test sorting in three ways: tracing a list pass by pass, comparing the algorithms, and writing a sort in Python (often descending, or on strings). Work through each question yourself first.",
          },
          {
            type: "table",
            headers: ["", "Bubble sort", "Selection sort", "Insertion sort"],
            rows: [
              ["Basic step", "swap adjacent out-of-order pairs", "select minimum of unsorted part, one swap", "shift larger elements, insert temp"],
              ["Sorted part grows", "from the right end", "from the left end", "from the left end"],
              ["Passes for n elements", "n − 1 (fewer with a flag)", "n − 1", "n − 1"],
              ["Already sorted list", "one pass with a flag", "still n(n − 1)/2 comparisons", "n − 1 comparisons, no shifts"],
              ["Time complexity", "O(n²)", "O(n²)", "O(n²)"],
            ],
          },
          {
            type: "example",
            title: "Three algorithms, one list",
            problem: "For `[5, 1, 4, 2, 8]`, write the list after the first and second passes of bubble, selection and insertion sort (ascending).",
            steps: [
              "Bubble pass 1: 5>1 swap, 5>4 swap, 5>2 swap, 5<8 → `[1, 4, 2, 5, 8]`; pass 2: 4>2 swap → `[1, 2, 4, 5, 8]`.",
              "Selection pass 1: minimum 1 swaps with 5 → `[1, 5, 4, 2, 8]`; pass 2: minimum of the rest is 2, swaps with 5 → `[1, 2, 4, 5, 8]`.",
              "Insertion pass 1: temp 1 goes before 5 → `[1, 5, 4, 2, 8]`; pass 2: temp 4, 5 shifts → `[1, 4, 5, 2, 8]`.",
            ],
            answer: "After 2 passes: bubble `[1, 2, 4, 5, 8]`, selection `[1, 2, 4, 5, 8]`, insertion `[1, 4, 5, 2, 8]`. The intermediate lists differ even when the final answer is the same, which is why examiners ask for passes.",
          },
          {
            type: "mistake",
            wrong: "After the first pass of insertion sort, the smallest element is always at the front.",
            right: "After pass i of insertion sort, only the first i + 1 elements are sorted **among themselves**; the overall smallest may still be further right.",
            why: "That guarantee belongs to selection sort. Insertion sort only looks at the next element each pass; in `[3, 4, 1]` the 1 does not reach the front until pass 2.",
          },
          {
            type: "heading",
            text: "Descending order and strings",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Bubble sort in descending (reverse alphabetical) order.",
            code: r`def bubbleDesc(L):
    n = len(L)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if L[j] < L[j + 1]:
                L[j], L[j + 1] = L[j + 1], L[j]

names = ["Ravi", "Anu", "Zoya", "Kiran", "Meera"]
bubbleDesc(names)
print(names)`,
          },
          {
            type: "text",
            md: "Output: `['Zoya', 'Ravi', 'Meera', 'Kiran', 'Anu']`. Strings are compared character by character using their character codes, so in mixed case every capital letter comes before every small letter (`'Zoya' < 'anu'` is True). Keep names in the same case, or compare `L[j].lower()`, when the order must be truly alphabetical.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A list is almost sorted; only the last two elements are out of order. Which algorithm does the least work?",
                options: ["Insertion sort", "Selection sort", "Simple bubble sort without a flag", "All do the same work"],
                answer: 0,
                explain: "Insertion sort only shifts the one element that is out of place; selection sort and plain bubble sort always make all n(n − 1)/2 comparisons.",
              },
            ],
          },
          {
            type: "heading",
            text: "Write a program",
          },
          {
            type: "example",
            title: "Merit list with selection sort",
            problem: "Write a function `sortMarks(marks)` that uses selection sort to arrange marks in **descending** order, and print the top three marks for `[67, 92, 48, 85, 92, 71]`.",
            steps: [
              "For descending order, each pass selects the **maximum** of the unsorted part: keep its index in `maxPos`.",
              "In the inner loop, update `maxPos` when `marks[j] > marks[maxPos]`.",
              "After the inner loop, swap `marks[i]` and `marks[maxPos]`.",
              "After sorting, the slice `marks[:3]` gives the first three (largest) marks.",
            ],
            answer: "`[92, 92, 85, 71, 67, 48]` and `Top three: [92, 92, 85]`. Equal marks (92, 92) are both kept.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def sortMarks(marks):
    n = len(marks)
    for i in range(n - 1):
        maxPos = i
        for j in range(i + 1, n):
            if marks[j] > marks[maxPos]:
                maxPos = j
        marks[i], marks[maxPos] = marks[maxPos], marks[i]
    return marks

m = [67, 92, 48, 85, 92, 71]
print(sortMarks(m))
print("Top three:", m[:3])`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Insertion sort is run on [3, 1, 2]. How many shifts does it make in total?",
              emoji: "🃏",
              options: ["2", "1", "3", "0"],
              answer: 0,
              trap: 1,
              explain: "Pass 1: temp 1, 3 shifts right (1 shift) → [1, 3, 2]. Pass 2: temp 2, 3 shifts right (1 shift) and 1 stays → [1, 2, 3]. Total 2. The trap counts only the first pass.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Practical and board tip",
            md: "In the practical exam, print the list after each pass: it proves your sort works and helps you debug. In theory answers, name the algorithm, write the function, and show a small call with its output. State the number of passes (n − 1) and the complexity O(n²) if asked to analyse.",
          },
          {
            type: "keypoints",
            items: [
              "Traces: write one line per pass; intermediate lists differ between algorithms.",
              "Descending: flip the comparison in bubble and insertion sort; select the maximum in selection sort.",
              "Strings sort by character codes: capitals before small letters.",
              "Fewest swaps: selection sort. Best on nearly sorted data: insertion sort.",
              "All three are O(n²) in general.",
            ],
          },
        ],
        flashcards: [
          { front: "Which sort grows its sorted part from the right end?", back: "Bubble sort (largest elements settle at the end first)." },
          { front: "How do you change selection sort to descending order?", back: "Select the maximum of the unsorted part instead of the minimum." },
          { front: "Is `'Zoya' < 'anu'` True or False?", back: "True: capital letters have smaller character codes than small letters." },
          { front: "Comparisons by selection sort on an already sorted list of n elements?", back: "Still n(n − 1)/2; it always scans the whole unsorted part." },
          { front: "Which sort is best for a nearly sorted list?", back: "Insertion sort (few shifts)." },
          { front: "Shifts made by insertion sort on [3, 1, 2]?", back: "2" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed?\n\n`L = [6, 2, 9, 4]`\n\n`for i in range(1):`\n\n`    for j in range(len(L) - 1):`\n\n`        if L[j] > L[j + 1]:`\n\n`            L[j], L[j + 1] = L[j + 1], L[j]`\n\n`print(L)`",
            options: ["`[2, 6, 4, 9]`", "`[2, 4, 6, 9]`", "`[2, 6, 9, 4]`", "`[6, 2, 4, 9]`"],
            answer: 0,
            explain: "This is one bubble pass: 6>2 swap → [2, 6, 9, 4]; 6<9; 9>4 swap → [2, 6, 4, 9].",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Bubble sort with a `swapped` flag is run on the sorted list `[1, 2, 3, 4, 5, 6]`. How many comparisons does it make?",
            answer: 5,
            explain: "Pass 1 compares 5 adjacent pairs, makes no swap, and the loop stops.",
          },
          {
            kind: "mcq",
            q: "Which list is sorted correctly in **ascending** order by Python's string comparison?",
            options: ["`['Apple', 'Mango', 'banana']`", "`['Apple', 'banana', 'Mango']`", "`['banana', 'Apple', 'Mango']`", "`['Mango', 'Apple', 'banana']`"],
            answer: 0,
            explain: "Capital letters come before small letters, so 'banana' sorts after both 'Apple' and 'Mango'.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "After pass 2 of selection sort (ascending), the two smallest elements are in their final positions.",
            answer: true,
            explain: "Each pass places the next smallest at the front of the unsorted part.",
          },
          {
            kind: "multi",
            q: "Which statements are correct?",
            options: ["All three sorts use nested loops", "Insertion sort shifts rather than swaps", "Selection sort is linear on a sorted list", "Bubble sort places the largest element last after pass 1"],
            answers: [0, 1, 3],
            explain: "Selection sort always makes n(n − 1)/2 comparisons, so it is quadratic even on sorted input.",
          },
          {
            kind: "fill",
            q: "For 6 elements, bubble sort without a flag makes ___ passes.",
            answer: ["5", "five"],
            explain: "n − 1 = 5 passes.",
          },
          {
            kind: "mcq",
            q: "List `[30, 20, 10]` after pass 1 of insertion sort:",
            options: ["`[20, 30, 10]`", "`[10, 20, 30]`", "`[20, 10, 30]`", "`[10, 30, 20]`"],
            answer: 0,
            explain: "Pass 1 inserts 20 into the sorted part [30]: [20, 30, 10]. The 10 is handled in pass 2.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Class 12 · Searching                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-cs-searching",
    title: "Searching",
    icon: "🔍",
    description: "Linear (sequential) search, binary search on a sorted list, and search by hashing with a hash function, hash table and collisions, with Python programs and comparison counts.",
    lessons: [
      {
        slug: "c12-cs-linear-binary-search",
        title: "Linear Search and Binary Search",
        summary: "Searching an unsorted list element by element, searching a sorted list by halving the search area, both in Python, traces with first, last and mid, and how many comparisons each needs.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: "**Searching** means finding whether a given element, called the **key**, is present in a collection and, if it is, where. The search is **successful** if the key is found and **unsuccessful** if the whole collection has been examined without finding it.\n\nThis chapter covers three methods: **linear search**, **binary search** and **search by hashing**.",
          },
          {
            type: "heading",
            text: "Linear search",
          },
          {
            type: "text",
            md: "**Linear search** (also called **sequential search**) compares the key with each element of the list in turn, starting from the first. It stops as soon as a match is found, or when the end of the list is reached. It works on **any** list, sorted or not.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Returns the position (counting from 1) of the key, or None if it is absent.",
            code: r`def linearSearch(L, key):
    for index in range(len(L)):
        if L[index] == key:
            return index + 1          # position, counting from 1
    return None

roll = [17, 4, 31, 9, 26, 12]
print(linearSearch(roll, 9))
print(linearSearch(roll, 17))
print(linearSearch(roll, 50))`,
          },
          {
            type: "text",
            md: "Output: `4`, `1` and `None`. Finding 9 takes 4 comparisons. Finding 17 takes just 1 (the **best case**: key at the first position). Searching for 50 takes all 6 comparisons and fails (the **worst case**, as is a key at the last position).\n\nSo for n elements linear search needs **at most n comparisons**: its time grows **linearly** with n. That is fine for short lists but slow for, say, a million records.",
          },
          {
            type: "heading",
            text: "Binary search",
          },
          {
            type: "text",
            md: "**Binary search** works only on a list that is **already sorted**. It compares the key with the **middle** element:\n\n- if they are equal, the search succeeds;\n- if the key is **greater**, it can only be in the right half, so the left half (and the middle) is discarded;\n- if the key is **smaller**, the right half is discarded.\n\nThe search continues on the remaining half in the same way. Two indices, `first` and `last`, mark the part still being searched, and `mid = (first + last) // 2`. If `first` becomes greater than `last`, nothing is left and the key is absent.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def binarySearch(L, key):
    first = 0
    last = len(L) - 1
    while first <= last:
        mid = (first + last) // 2
        print("first", first, "last", last, "mid", mid, "L[mid]", L[mid])
        if L[mid] == key:
            return mid
        elif key > L[mid]:
            first = mid + 1
        else:
            last = mid - 1
    return -1

L = [3, 8, 15, 21, 27, 34, 42, 50, 61]
print("Found at index", binarySearch(L, 42))
print("Result", binarySearch(L, 10))`,
          },
          {
            type: "example",
            title: "Tracing binary search",
            problem: "Trace `binarySearch` on `L = [3, 8, 15, 21, 27, 34, 42, 50, 61]` for keys 42 and 10.",
            steps: [
              "Key 42: first 0, last 8, mid 4, L[4] = 27. 42 > 27, so first = 5.",
              "first 5, last 8, mid 6, L[6] = 42. Found: return 6 (2 comparisons).",
              "Key 10: first 0, last 8, mid 4, L[4] = 27. 10 < 27, so last = 3.",
              "first 0, last 3, mid 1, L[1] = 8. 10 > 8, so first = 2.",
              "first 2, last 3, mid 2, L[2] = 15. 10 < 15, so last = 1. Now first (2) > last (1): the loop ends, return −1.",
            ],
            answer: "The program prints the two trace lines and `Found at index 6`, then three trace lines and `Result -1`.",
          },
          {
            type: "mistake",
            wrong: "Binary search can be used on any list; it is just a faster linear search.",
            right: "Binary search gives correct answers **only on a sorted list**. On an unsorted list it may discard the half that actually contains the key.",
            why: "Throwing away half the list is safe only because, in sorted order, every element left of mid is smaller and every element right of mid is larger. Without sorting, that guarantee is gone.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In a sorted list of 10 elements (indices 0–9), which index does binary search compare first?",
                options: ["4", "5", "0", "9"],
                answer: 0,
                explain: "mid = (0 + 9) // 2 = 4.",
              },
              {
                kind: "truefalse",
                q: "Linear search requires the list to be sorted.",
                answer: false,
                explain: "Linear search checks every element in turn, so the order does not matter.",
              },
            ],
          },
          {
            type: "table",
            headers: ["List size n", "Linear search: worst-case comparisons", "Binary search: worst-case comparisons"],
            rows: [
              ["7", "7", "3"],
              ["16", "16", "5"],
              ["100", "100", "7"],
              ["1000", "1000", "10"],
            ],
          },
          {
            type: "text",
            md: "Each binary-search comparison halves the part still to be searched, so the number of comparisons grows very slowly: doubling the list adds only **one** more comparison. (The worst case is the number of times n can be halved before reaching 1, plus one.) The price is that the list must be sorted first, and keeping it sorted when new elements arrive costs extra work.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Linear search or binary search: which one fits?",
              groups: ["Linear search", "Binary search"],
              items: [
                { text: "Unsorted list of today's visitors", group: 0, hint: "Binary search needs sorted data." },
                { text: "Sorted list of 50,000 roll numbers", group: 1, hint: "Halving finds any roll number in at most 16 comparisons." },
                { text: "Looking up a word in a printed dictionary", group: 1, hint: "You open near the middle and discard half." },
                { text: "A list of 5 items that changes every second", group: 0, hint: "Sorting it each time is not worth it." },
                { text: "Sorted telephone directory of a city", group: 1, hint: "Names are in alphabetical order." },
              ],
              explain: "Linear search is simple and works on any data. Binary search is far faster, but only when the data is sorted and stays sorted.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a binary-search trace, make a table with columns **first, last, mid, L[mid]** and the decision, one row per comparison. Use integer division `//` for mid. State the result clearly: the index where the key was found, or \"not found\" when first > last.",
          },
          {
            type: "keypoints",
            items: [
              "Linear (sequential) search checks elements one by one; works on any list; worst case n comparisons.",
              "Binary search needs a **sorted** list; compares with the middle element and discards half each time.",
              "`mid = (first + last) // 2`; key > L[mid] → first = mid + 1; key < L[mid] → last = mid − 1.",
              "The search fails when first > last.",
              "For 1000 elements: linear needs up to 1000 comparisons, binary at most 10.",
            ],
          },
        ],
        flashcards: [
          { front: "What is the key in searching?", back: "The element we are looking for." },
          { front: "Other name for linear search?", back: "Sequential search." },
          { front: "Worst-case comparisons in linear search on n elements?", back: "n (key at the last position or absent)." },
          { front: "Best case of linear search?", back: "1 comparison, when the key is the first element." },
          { front: "Condition for using binary search?", back: "The list must be sorted." },
          { front: "Formula for mid in binary search?", back: "`mid = (first + last) // 2`" },
          { front: "When does binary search report 'not found'?", back: "When first becomes greater than last." },
          { front: "Maximum binary-search comparisons for 1000 sorted elements?", back: "10" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many comparisons does linear search make to find 26 in `[17, 4, 31, 9, 26, 12]`?",
            answer: 5,
            explain: "26 is the 5th element, so it is compared with 17, 4, 31, 9 and then found at 26.",
          },
          {
            kind: "mcq",
            q: "In binary search, if key < L[mid], the next step is:",
            options: ["`last = mid - 1`", "`first = mid + 1`", "`mid = mid - 1`", "`first = mid`"],
            answer: 0,
            explain: "The key can only be in the left half, so the right end moves to just before mid.",
          },
          {
            kind: "mcq",
            q: "For `L = [12, 18, 23, 35, 47, 52, 66, 71, 89, 94]` and key 71, which mid values does binary search use?",
            options: ["4, then 7", "5, then 7", "4, then 6, then 7", "4, then 8"],
            answer: 0,
            explain: "mid = (0 + 9) // 2 = 4 (47); 71 > 47 so first = 5; mid = (5 + 9) // 2 = 7 (71), found.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Doubling the size of a sorted list adds only about one comparison to the worst case of binary search.",
            answer: true,
            explain: "One extra halving step brings the doubled list back to the original size.",
          },
          {
            kind: "numeric",
            q: "What is the maximum number of comparisons binary search needs on a sorted list of 16 elements?",
            answer: 5,
            explain: "16 → 8 → 4 → 2 → 1 needs 4 halvings, and the last element needs one more comparison: 5.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "What does `linearSearch([17, 4, 31, 9, 26, 12], 50)` return in the lesson's program?",
            options: ["`None`", "`-1`", "`0`", "`6`"],
            answer: 0,
            explain: "The loop ends without a match, so the function reaches `return None`.",
          },
          {
            kind: "multi",
            q: "Which statements are true?",
            options: ["Linear search works on unsorted lists", "Binary search works on unsorted lists", "Binary search is usually faster on large sorted lists", "Linear search always needs n comparisons"],
            answers: [0, 2],
            explain: "Binary search needs sorted data. Linear search stops early when the key is found, so n comparisons is only the worst case.",
          },
          {
            kind: "fill",
            q: "Linear search is also called ___ search.",
            answer: ["sequential"],
            explain: "It goes through the elements in sequence.",
          },
        ],
      },
      {
        slug: "c12-cs-search-by-hashing",
        title: "Search by Hashing",
        summary: "How a hash function turns an element into a position in a hash table, the remainder method, searching in one step, collisions and the idea of a perfect hash function.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🗄️",
            caption: "If you know which drawer a file is in, you open that drawer directly instead of checking every drawer.",
          },
          {
            type: "text",
            md: "Linear search may need n comparisons and binary search about log₂ n, plus the cost of sorting. **Hashing** aims to find an element in roughly **one step**, whatever the size of the list.\n\nThe idea: use a formula, called a **hash function**, that computes from the element itself the **position** where it should be stored. The elements are kept in a list called a **hash table**, and each position of the hash table is called a **slot**. To search, apply the same hash function to the key and look only in that one slot.",
          },
          {
            type: "heading",
            text: "The remainder method",
          },
          {
            type: "text",
            md: "A simple hash function for whole numbers is the **remainder method**: divide the element by the size of the hash table and take the remainder.\n\n`h(element) = element % size_of_table`\n\nFor a table of size 10, the remainder is always 0 to 9, which is exactly the range of valid slot numbers. For example, `h(43) = 43 % 10 = 3`, so 43 is stored in slot 3.",
          },
          {
            type: "example",
            title: "Building a hash table",
            problem: "Store `[43, 27, 58, 61, 90, 14, 36]` in a hash table of size 10 with `h(x) = x % 10`. Then search for 58 and for 48.",
            steps: [
              "43 % 10 = 3, 27 % 10 = 7, 58 % 10 = 8, 61 % 10 = 1.",
              "90 % 10 = 0, 14 % 10 = 4, 36 % 10 = 6.",
              "Table (slots 0 to 9): `[90, 61, None, 43, 14, None, 36, 27, 58, None]`.",
              "Search 58: h(58) = 8, slot 8 holds 58: **found** in one comparison.",
              "Search 48: h(48) = 8, slot 8 holds 58, not 48: **not found**, again in one comparison.",
            ],
            answer: "Each search looks at exactly one slot, so the time does not depend on how many elements are stored.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def h(element, size):
    return element % size

size = 10
hashTable = [None] * size
for x in [43, 27, 58, 61, 90, 14, 36]:
    hashTable[h(x, size)] = x
print(hashTable)

def hashFind(key, table):
    pos = h(key, len(table))
    return table[pos] == key

print(hashFind(58, hashTable), hashFind(48, hashTable))`,
          },
          {
            type: "text",
            md: "Output:\n\n`[90, 61, None, 43, 14, None, 36, 27, 58, None]`\n\n`True False`\n\n`[None] * size` creates a list of 10 empty slots. `None` marks a slot that holds nothing yet.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "With `h(x) = x % 10`, in which slot is 375 stored?",
                answer: 5,
                explain: "375 % 10 = 5.",
              },
              {
                kind: "mcq",
                q: "With `h(x) = x % 7` (table size 7), which slot does 50 go to?",
                options: ["1", "7", "0", "5"],
                answer: 0,
                explain: "50 = 7 × 7 + 1, so the remainder is 1.",
              },
            ],
          },
          {
            type: "heading",
            text: "Collisions",
          },
          {
            type: "text",
            md: "What if we also want to store 53? `h(53) = 3`, but slot 3 already holds 43. When a hash function gives **the same slot for two or more different elements**, it is called a **collision**. A collision must be handled by some **collision resolution** technique (for example, placing the element in the next free slot). Such techniques are beyond the scope of this chapter, but you must know what a collision is.\n\nA hash function that maps every element of a given collection to a **unique** slot, so that no collision ever occurs, is called a **perfect hash function**. The table above happens to be perfect for those seven numbers because all their last digits are different.",
          },
          {
            type: "mistake",
            wrong: "A collision means the hash table is full.",
            right: "A collision means two **different** elements are mapped to the **same** slot. It can happen even when most of the table is empty.",
            why: "In the example, slots 2, 5 and 9 are still free, yet 53 collides with 43 at slot 3. Collisions depend on the hash function and the data, not on how full the table is.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Table size 10, h(x) = x % 10. Elements 21, 35, 41, 66 are inserted in that order. Which one causes a collision?",
              emoji: "💥",
              options: ["41", "66", "35", "No collision occurs"],
              answer: 0,
              trap: 3,
              explain: "21 goes to slot 1, 35 to slot 5, then 41 also maps to slot 1, which is taken by 21: a collision. 66 goes to slot 6 without trouble.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to build a hash table, show the calculation `x % size` for **each** element, then draw the table with slot numbers 0 to size − 1. If a collision occurs, name it and say which elements collide. Definitions often asked: hash function, hash table, slot, collision, perfect hash function.",
          },
          {
            type: "keypoints",
            items: [
              "Hashing finds an element by computing its position with a hash function: about one step.",
              "Hash table: the list holding the elements; each position is a slot.",
              "Remainder method: `h(element) = element % size`.",
              "Collision: two different elements get the same slot; it needs collision resolution.",
              "Perfect hash function: every element of the collection gets a unique slot.",
            ],
          },
        ],
        flashcards: [
          { front: "What is a hash function?", back: "A function that computes, from an element, the position (slot) where it is stored in a hash table." },
          { front: "What is a hash table?", back: "A list in which elements are stored at positions given by a hash function." },
          { front: "What is a slot?", back: "One position of a hash table." },
          { front: "The remainder method?", back: "`h(element) = element % size_of_table`" },
          { front: "What is a collision?", back: "When the hash function gives the same slot for two or more different elements." },
          { front: "What is a perfect hash function?", back: "One that maps every element of the collection to a unique slot, so there are no collisions." },
          { front: "How many slots does a hash search examine (ignoring collisions)?", back: "Just one: the slot given by the hash function." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "With table size 10 and `h(x) = x % 10`, which pair of elements collides?",
            options: ["24 and 64", "24 and 42", "15 and 51", "30 and 33"],
            answer: 0,
            explain: "24 % 10 = 4 and 64 % 10 = 4: same slot. The other pairs give different remainders.",
          },
          {
            kind: "numeric",
            q: "Table size 11, `h(x) = x % 11`. Which slot does 100 go to?",
            answer: 1,
            explain: "100 = 11 × 9 + 1, so the remainder is 1.",
          },
          {
            kind: "truefalse",
            q: "Search by hashing requires the list to be sorted first.",
            answer: false,
            explain: "Hashing computes the slot directly from the key; no sorting is needed.",
          },
          {
            kind: "fill",
            q: "Each position in a hash table is called a ___.",
            answer: ["slot"],
            explain: "The hash function's value is a slot number.",
          },
          {
            kind: "mcq",
            q: "After storing `[43, 27, 58, 61, 90, 14, 36]` with `h(x) = x % 10`, what does slot 0 hold?",
            options: ["90", "None", "43", "61"],
            answer: 0,
            explain: "90 % 10 = 0.",
          },
          {
            kind: "multi",
            q: "For table size 10 and `h(x) = x % 10`, for which collections is h a perfect hash function?",
            options: ["`[12, 25, 39, 40]`", "`[11, 21, 32]`", "`[7, 18, 29, 30, 41]`", "`[15, 5, 26]`"],
            answers: [0, 2],
            explain: "[12, 25, 39, 40] → 2, 5, 9, 0 and [7, 18, 29, 30, 41] → 7, 8, 9, 0, 1 are all unique. 11 and 21 share slot 1; 15 and 5 share slot 5.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What does `[None] * 5` create?",
            options: ["`[None, None, None, None, None]`", "`None`", "`[5]`", "An error"],
            answer: 0,
            explain: "Repeating a one-item list 5 times gives a list of 5 empty slots.",
          },
        ],
      },
      {
        slug: "c12-cs-searching-board-practice",
        title: "Searching: Board Practice",
        summary: "Mixed board-style questions on linear search, binary search and hashing: short answers, traces, output questions, comparison counts and a program to find every position of a key.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "These questions mix the three searching methods the way a II PUC paper does. Write your own answer before you read the worked solution.",
          },
          {
            type: "table",
            headers: ["", "Linear search", "Binary search", "Hashing"],
            rows: [
              ["Needs sorted data?", "No", "Yes", "No"],
              ["Idea", "check each element in turn", "compare with middle, discard half", "compute the slot with a hash function"],
              ["Worst case for n elements", "n comparisons", "about log₂ n comparisons", "one slot looked at (no collisions)"],
              ["Main drawback", "slow for large n", "data must be sorted and kept sorted", "collisions must be handled"],
            ],
          },
          {
            type: "heading",
            text: "Binary search on strings",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            caption: "Returns (index, number of comparisons). The city names are in alphabetical order.",
            code: r`def binarySearchCount(L, key):
    first, last = 0, len(L) - 1
    steps = 0
    while first <= last:
        mid = (first + last) // 2
        steps += 1
        if L[mid] == key:
            return mid, steps
        elif key > L[mid]:
            first = mid + 1
        else:
            last = mid - 1
    return -1, steps

cities = ["Belagavi", "Hassan", "Kalaburagi", "Mangaluru", "Mysuru", "Shivamogga", "Udupi"]
print(binarySearchCount(cities, "Mysuru"))
print(binarySearchCount(cities, "Belagavi"))
print(binarySearchCount(cities, "Tumakuru"))`,
          },
          {
            type: "example",
            title: "Tracing the string search",
            problem: "Explain the three lines of output of the program above.",
            steps: [
              "\"Mysuru\": mid 3 is \"Mangaluru\"; \"My\" > \"Ma\", so first = 4. mid 5 is \"Shivamogga\"; \"Mysuru\" is smaller, so last = 4. mid 4 is \"Mysuru\": found.",
              "\"Belagavi\": mid 3 \"Mangaluru\" → last = 2; mid 1 \"Hassan\" → last = 0; mid 0 \"Belagavi\": found.",
              "\"Tumakuru\": mid 3 → first = 4; mid 5 \"Shivamogga\" → first = 6; mid 6 \"Udupi\", \"T\" < \"U\" → last = 5. first > last: not found.",
            ],
            answer: "`(4, 3)`, `(0, 3)` and `(-1, 3)`. With 7 elements, binary search never needs more than 3 comparisons.",
          },
          {
            type: "mistake",
            wrong: "For a list with indices 0 to 6, `mid = (first + last) / 2` is fine.",
            right: "Use integer division: `mid = (first + last) // 2`.",
            why: "`/` always gives a float in Python 3, for example 3.0, and a float cannot be a list index: `L[3.0]` raises TypeError.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "How many comparisons does `binarySearchCount(cities, \"Mangaluru\")` make?",
                options: ["1", "2", "3", "4"],
                answer: 0,
                explain: "\"Mangaluru\" is at index 3, the very first mid: (0 + 6) // 2 = 3.",
              },
            ],
          },
          {
            type: "heading",
            text: "Write a program",
          },
          {
            type: "example",
            title: "Every position of a key",
            problem: "Write a function `allPositions(L, key)` that uses linear search to return a list of **all** indices where the key occurs, and use it to count how many students scored 78 in `[56, 78, 91, 78, 64, 78]`.",
            steps: [
              "Start with an empty list `found`.",
              "Loop over every index; do **not** stop at the first match.",
              "When `L[i] == key`, append i to `found`.",
              "Return `found`; its length is the number of occurrences, and an empty list means the key is absent.",
            ],
            answer: "`Index list: [1, 3, 5]` and `Count: 3`. For a key that is absent, the function returns `[]`.",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`def allPositions(L, key):
    found = []
    for i in range(len(L)):
        if L[i] == key:
            found.append(i)
    return found

marks = [56, 78, 91, 78, 64, 78]
pos = allPositions(marks, 78)
print("Index list:", pos)
print("Count:", len(pos))
print(allPositions(marks, 100))`,
          },
          {
            type: "heading",
            text: "Hashing with a collision check",
          },
          {
            type: "code",
            lang: "python",
            runnable: true,
            code: r`size = 10
table = [None] * size
for x in [21, 35, 41, 66]:
    pos = x % size
    if table[pos] is None:
        table[pos] = x
    else:
        print("Collision:", x, "wants slot", pos, "held by", table[pos])
print(table)`,
          },
          {
            type: "text",
            md: "Output:\n\n`Collision: 41 wants slot 1 held by 21`\n\n`[None, 21, None, None, None, 35, 66, None, None, None]`\n\n41 is not stored at all, because this program has no collision resolution; it only reports the problem.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Binary search for 34 in [3, 8, 15, 21, 27, 34, 42, 50, 61]: put the mid elements in the order they are checked.",
              items: ["27 (mid 4)", "42 (mid 6)", "34 (mid 5)"],
              explain: "first 0, last 8 → mid 4 (27), 34 > 27 so first = 5. mid (5 + 8) // 2 = 6 (42), 34 < 42 so last = 5. mid 5 (34): found.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Typical questions: \"Why can't binary search be used on an unsorted list?\", \"Give the number of comparisons in the best and worst case of linear search\", \"Define collision and perfect hash function\", and \"Trace binary search for key k\". For programs, the examiner looks for the correct loop condition (`first <= last`) and the correct updates of first and last.",
          },
          {
            type: "keypoints",
            items: [
              "Linear: any order, up to n comparisons. Binary: sorted only, about log₂ n. Hashing: one slot (ignoring collisions).",
              "Binary search works on strings too, because strings compare alphabetically.",
              "Use `//` for mid; `/` gives a float that cannot index a list.",
              "To find every occurrence, linear search must not stop at the first match.",
              "Without collision resolution, a colliding element cannot be stored in its slot.",
            ],
          },
        ],
        flashcards: [
          { front: "Which searching method needs sorted data?", back: "Binary search." },
          { front: "Loop condition in binary search?", back: "`while first <= last`" },
          { front: "Why use `//` for mid?", back: "`/` gives a float, and a float cannot be used as a list index." },
          { front: "Best case of binary search?", back: "1 comparison, when the key is the first middle element." },
          { front: "How to find all occurrences of a key?", back: "Linear search over the whole list, appending each matching index instead of returning at the first match." },
          { front: "Maximum binary-search comparisons for 7 sorted elements?", back: "3" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is printed?\n\n`L = [10, 20, 30, 40, 50]`\n\n`first, last = 0, 4`\n\n`mid = (first + last) // 2`\n\n`if 45 > L[mid]: first = mid + 1`\n\n`mid = (first + last) // 2`\n\n`print(first, mid, L[mid])`",
            options: ["`3 3 40`", "`2 3 40`", "`3 4 50`", "`3 2 30`"],
            answer: 0,
            explain: "mid = 2, L[2] = 30 and 45 > 30, so first = 3. New mid = (3 + 4) // 2 = 3, L[3] = 40.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Linear search is used on a list of 40 elements, and the key is not present. How many comparisons are made?",
            answer: 40,
            explain: "Every element is compared once before the search fails.",
          },
          {
            kind: "truefalse",
            q: "Binary search may give a wrong answer on the list `[9, 3, 7, 1, 5]`.",
            answer: true,
            explain: "The list is unsorted. For key 9: mid 2 (7), 9 > 7 so the left half is discarded, and 9 at index 0 is never found.",
          },
          {
            kind: "mcq",
            q: "Table size 10, `h(x) = x % 10`. Inserting 17, 29, 47, 50 in order, which statement is true?",
            options: ["47 collides with 17 at slot 7", "50 collides with 29", "29 collides with 17", "No collision occurs"],
            answer: 0,
            explain: "17 → 7, 29 → 9, 47 → 7 (taken by 17), 50 → 0.",
          },
          {
            kind: "fill",
            q: "`allPositions([4, 8, 4, 2, 4], 4)` returns ___ (write the Python list).",
            answer: ["[0, 2, 4]", "[0,2,4]"],
            explain: "4 occurs at indices 0, 2 and 4.",
          },
          {
            kind: "multi",
            q: "Which are advantages of binary search over linear search?",
            options: ["Far fewer comparisons on large lists", "Works without sorting", "Discards half of the remaining list per comparison", "Easier to code"],
            answers: [0, 2],
            explain: "Binary search needs sorted data and is slightly harder to code than linear search.",
          },
          {
            kind: "order",
            q: "Arrange the steps of one round of binary search in order.",
            items: ["Compute mid = (first + last) // 2", "Compare the key with L[mid]", "If equal, return mid", "Otherwise move first or last to discard half"],
            explain: "The loop repeats these steps while first <= last.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "12:Queue": "c12-cs-queue",
  "12:Sorting": "c12-cs-sorting",
  "12:Searching": "c12-cs-searching",
};
