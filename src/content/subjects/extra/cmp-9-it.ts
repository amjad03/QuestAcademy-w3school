import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-applications";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

const r = String.raw;

/* ================================================================== */
/* CBSE Class 9 Information Technology (402) / computer basics          */
/* ================================================================== */

/* ------------------------------------------------------------------ */
const basicsOfIt: Topic = {
  slug: "c9-basics-of-it",
  title: "Basics of Information Technology",
  icon: "💻",
  description: "Parts of a computer, memory and storage, software and operating systems, the IT–ITeS industry and keyboarding skills.",
  lessons: [
    {
      slug: "c9-computer-system",
      title: "The Computer System: Hardware and Memory",
      summary: "The input–process–output cycle, the CPU and its parts, input and output devices, primary and secondary memory, and units of memory.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🧾",
          caption: "At a medical shop in Lucknow, the cashier scans three medicines. In a second the screen shows the total of ₹265 and the printer gives a bill. That is a computer at work.",
        },
        {
          type: "text",
          md: "A **computer** is an electronic machine that takes in raw facts, works on them by following instructions, and gives out a useful result. It can also store data and results for later.\n\nThe raw facts are called **data** (for example, the price of each medicine). The useful result is called **information** (the total bill). The list of instructions the computer follows is a **program**.\n\nEvery computer job follows the same cycle, called the **IPO cycle**: **Input** (data goes in), **Process** (the computer works on it) and **Output** (the result comes out). Most jobs also use **Storage**, where data and results are kept.",
        },
        {
          type: "table",
          headers: ["Part", "What it does", "Examples"],
          rows: [
            ["**Input unit**", "sends data and commands into the computer", "keyboard, mouse, scanner, microphone, webcam, barcode reader"],
            ["**CPU** (Central Processing Unit)", "the \"brain\": processes data and controls every other part", "the processor chip on the motherboard"],
            ["**Output unit**", "shows or gives out the result", "monitor, printer, speaker, projector, headphones"],
            ["**Storage unit**", "keeps data, programs and results", "RAM, hard disk, SSD, pen drive"],
          ],
        },
        {
          type: "text",
          md: "The CPU has three main parts. The **ALU** (Arithmetic Logic Unit) does calculations (add, subtract, multiply, divide) and comparisons (is 70 greater than 33?). The **CU** (Control Unit) directs the flow of data and tells every part what to do and when. **Registers** are tiny, very fast memory spaces inside the CPU that hold the data it is working on right now.",
        },
        {
          type: "example",
          title: "Finding the IPO cycle in a real task",
          problem: "Ravi uses an ATM to take out ₹500. Name the input, the processing and the output.",
          steps: [
            "**Input:** Ravi inserts his card, types his PIN on the keypad and enters the amount 500.",
            "**Process:** the computer checks the PIN, checks that his account has at least ₹500 and subtracts ₹500 from the balance (the ALU does the subtraction and the comparison).",
            "**Output:** the machine gives out the cash, shows a message on the screen and prints a slip.",
            "**Storage:** the new balance is saved by the bank's computer.",
          ],
          answer: "Input = card, PIN and amount; Process = checking and subtracting; Output = cash, screen message and slip.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which part of the CPU decides whether marks of 72 are greater than the pass mark of 33?",
              options: ["ALU", "Control Unit", "Monitor", "Hard disk"],
              answer: 0,
              explain: "Comparisons, like calculations, are done by the **Arithmetic Logic Unit**. The Control Unit only directs the work.",
            },
          ],
        },
        {
          type: "table",
          headers: ["", "Primary memory", "Secondary memory"],
          rows: [
            ["Also called", "main memory", "auxiliary memory or storage"],
            ["Examples", "**RAM**, **ROM**, cache", "hard disk (HDD), SSD, pen drive, memory card, CD/DVD"],
            ["Speed", "very fast", "slower"],
            ["Keeps data when power is off?", "RAM: **no** (volatile); ROM: yes (non-volatile)", "**yes** (non-volatile)"],
            ["Capacity and cost", "smaller, costlier per GB", "much larger, cheaper per GB"],
          ],
        },
        {
          type: "text",
          md: "**RAM** (Random Access Memory) holds the programs and files you have open right now. It is **volatile**: everything in it is lost when the power goes off. **ROM** (Read Only Memory) holds the start-up instructions the computer needs when it is switched on; it is **non-volatile**. **Cache** is a small, very fast memory between the CPU and RAM that keeps the data the CPU uses most often.\n\nMemory is measured in **bits** and **bytes**. A bit is a single 0 or 1. 4 bits make a **nibble**, 8 bits make a **byte**, and each bigger unit is 1024 times the one before it.",
        },
        {
          type: "table",
          headers: ["Unit", "Equal to"],
          rows: [
            ["1 nibble", "4 bits"],
            ["1 byte (B)", "8 bits"],
            ["1 kilobyte (KB)", "1024 bytes"],
            ["1 megabyte (MB)", "1024 KB"],
            ["1 gigabyte (GB)", "1024 MB"],
            ["1 terabyte (TB)", "1024 GB"],
            ["1 petabyte (PB)", "1024 TB"],
          ],
        },
        {
          type: "mistake",
          wrong: "My phone has 128 GB of memory, so it has 128 GB of RAM.",
          right: "The 128 GB is **storage** (secondary memory) for apps, photos and files. RAM is a separate, much smaller primary memory, often 4–8 GB on such phones.",
          why: "Shops and adverts call both of them \"memory\". But storage keeps files even when the phone is off, while RAM only holds what is running right now and is cleared when power goes.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each device into its group.",
            groups: ["Input device", "Output device", "Storage device"],
            items: [
              { text: "Scanner", group: 0, hint: "It reads a paper page into the computer." },
              { text: "Microphone", group: 0, hint: "Your voice goes into the computer." },
              { text: "Printer", group: 1, hint: "It gives a result on paper." },
              { text: "Speaker", group: 1, hint: "Sound comes out of it." },
              { text: "Projector", group: 1, hint: "It shows the screen on a wall." },
              { text: "Pen drive", group: 2, hint: "It keeps files even when unplugged." },
              { text: "SSD", group: 2, hint: "A solid-state drive keeps files permanently." },
              { text: "Barcode reader", group: 0, hint: "It reads the code on a product into the billing computer." },
            ],
            explain: "Ask one question: does data go **in**, come **out**, or stay **kept**? A scanner and a printer both handle paper, but in opposite directions.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write full forms exactly: **C**entral **P**rocessing **U**nit, **A**rithmetic **L**ogic **U**nit, **R**andom **A**ccess **M**emory, **R**ead **O**nly **M**emory. In \"difference between RAM and ROM\", one mark usually goes to the word **volatile / non-volatile**, so do not leave it out.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many bytes are there in 2 KB?",
              answer: 2048,
              explain: "1 KB = 1024 bytes, so 2 KB = 2 × 1024 = 2048 bytes.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "A computer follows the IPO cycle: Input → Process → Output, with Storage.",
            "The CPU has the ALU (calculates and compares), the CU (controls) and registers (tiny fast memory).",
            "Primary memory: RAM (volatile), ROM (non-volatile), cache. Secondary memory: HDD, SSD, pen drive, CD/DVD.",
            "8 bits = 1 byte; KB, MB, GB, TB, PB each = 1024 of the unit before.",
          ],
        },
      ],
      flashcards: [
        { front: "Data vs information", back: "Data = raw facts (prices of items). Information = processed, useful result (the total bill)." },
        { front: "IPO cycle", back: "Input → Process → Output (with Storage): the steps of every computer job." },
        { front: "ALU", back: "Arithmetic Logic Unit: does calculations and comparisons inside the CPU." },
        { front: "Control Unit", back: "The part of the CPU that directs the flow of data and controls all other parts." },
        { front: "Volatile memory", back: "Memory that loses its contents when power is switched off, e.g. RAM." },
        { front: "ROM", back: "Read Only Memory: non-volatile memory that holds the computer's start-up instructions." },
        { front: "1 byte", back: "8 bits. (4 bits = 1 nibble.)" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is an output device?",
          options: ["Projector", "Scanner", "Webcam", "Keyboard"],
          answer: 0,
          explain: "A projector shows the result on a screen or wall. Scanner, webcam and keyboard all send data *into* the computer.",
        },
        {
          kind: "truefalse",
          q: "RAM keeps your unsaved work safe even after a power cut.",
          answer: false,
          explain: "RAM is volatile. Unsaved work in RAM is lost when the power goes. That is why you save to secondary storage.",
        },
        {
          kind: "fill",
          q: "The part of the CPU that directs and controls all other parts is the ___ unit.",
          answer: ["control", "control unit", "cu"],
          explain: "The Control Unit (CU) manages the flow of data and instructions.",
        },
        {
          kind: "order",
          q: "Arrange these units from smallest to largest.",
          items: ["Bit", "Nibble", "Byte", "Kilobyte", "Megabyte", "Gigabyte"],
          explain: "1 nibble = 4 bits, 1 byte = 8 bits, then each unit is 1024 times the one before.",
        },
        {
          kind: "multi",
          q: "Which of these are secondary memory? (Choose all that apply)",
          options: ["Hard disk", "Pen drive", "RAM", "DVD", "Cache"],
          answers: [0, 1, 3],
          explain: "Hard disk, pen drive and DVD keep data permanently. RAM and cache are primary memory.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A movie file is 3 GB. How many MB is that?",
          answer: 3072,
          explain: "1 GB = 1024 MB, so 3 GB = 3 × 1024 = 3072 MB.",
          difficulty: 2,
          hint: "Multiply by 1024, not by 1000.",
        },
        {
          kind: "mcq",
          q: "Which memory sits between the CPU and RAM and holds the most-used data?",
          options: ["Cache", "ROM", "Hard disk", "Pen drive"],
          answer: 0,
          explain: "Cache is small and very fast, so the CPU does not have to wait for the slower RAM each time.",
          difficulty: 2,
        },
      ],
    },

    {
      slug: "c9-software-and-os",
      title: "Software, Operating Systems and Files",
      summary: "System, application and utility software, what an operating system does, CUI vs GUI, open source vs proprietary software, and files, folders and extensions.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "A new laptop with no programs on it is like a car with no driver: all the parts are there, but nothing happens. The parts you can touch are **hardware**. The programs that tell the hardware what to do are **software**.",
        },
        {
          type: "table",
          headers: ["Type", "What it does", "Examples"],
          rows: [
            ["**System software**", "runs and manages the computer itself", "operating systems (Windows, Linux, macOS, Android), device drivers"],
            ["**Utility software**", "a kind of system software that looks after the computer", "antivirus, disk cleanup, file compression (zip), backup tools"],
            ["**Application software**", "does a job for the user", "word processor, spreadsheet, web browser, games, a railway booking app"],
          ],
        },
        {
          type: "text",
          md: "Application software can be **general purpose** (one program for many users and many jobs, such as a word processor) or **specific purpose** (made for one job, such as a school's fee-billing program or a hospital's patient record system).\n\nA **device driver** is a small program that lets the operating system talk to one device, such as a printer. Without its driver, the printer may not work.",
        },
        {
          type: "text",
          md: "The **operating system (OS)** is the most important system software. It starts when you switch on the computer and works as a link between the user, the applications and the hardware. Its main jobs are:",
        },
        {
          type: "list",
          items: [
            "**Process management:** runs programs and shares the CPU between them.",
            "**Memory management:** gives RAM to each running program and takes it back when the program closes.",
            "**File management:** creates, saves, names, copies and deletes files and folders.",
            "**Device management:** controls input and output devices through their drivers.",
            "**Security:** asks for passwords and keeps one user's files away from another.",
            "**User interface:** gives you a way to give commands.",
          ],
        },
        {
          type: "text",
          md: "There are two kinds of user interface. In a **CUI** (Character User Interface, also called command line) you type commands, for example in the Linux terminal. In a **GUI** (Graphical User Interface) you click icons, windows and menus with a mouse or touch. Windows, macOS, Android and most Linux desktops use a GUI.",
        },
        {
          type: "example",
          title: "Classifying software",
          problem: "Classify each: (a) Android, (b) a printer driver, (c) an antivirus program, (d) LibreOffice Writer, (e) the IRCTC ticket app.",
          steps: [
            "Ask first: does it run the computer, or does it do a job for the user?",
            "(a) Android runs the phone: **system software** (an operating system).",
            "(b) A printer driver lets the OS control the printer: **system software**.",
            "(c) Antivirus protects and maintains the computer: **utility software**.",
            "(d) Writer is used to type documents: **application software** (general purpose).",
            "(e) The IRCTC app only books train tickets: **application software** (specific purpose).",
          ],
          answer: "System: Android, printer driver. Utility: antivirus. Application: Writer (general purpose), IRCTC app (specific purpose).",
        },
        {
          type: "mistake",
          wrong: "Open source software just means software you get free of cost.",
          right: "**Open source** means the **source code** is open: anyone may study it, change it and share it. **Freeware** is free of cost but its code is closed. **Proprietary** software belongs to a company that keeps the code secret and decides how it may be used.",
          why: "Many open source programs (Linux, LibreOffice, Python) are also free of cost, so the two ideas get mixed up. But a free game whose code you cannot see is freeware, not open source.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these is proprietary software?",
              options: ["Microsoft Windows", "Linux", "LibreOffice", "Python"],
              answer: 0,
              explain: "Windows is owned by Microsoft and its code is not open. Linux, LibreOffice and Python are open source.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Extension", "Kind of file"],
          rows: [
            ["`.odt` / `.docx`", "word processor document (LibreOffice Writer / MS Word)"],
            ["`.ods` / `.xlsx`", "spreadsheet (LibreOffice Calc / MS Excel)"],
            ["`.odp` / `.pptx`", "presentation (LibreOffice Impress / MS PowerPoint)"],
            ["`.pdf`", "Portable Document Format: looks the same on every device"],
            ["`.jpg`, `.png`", "pictures"],
            ["`.mp3`, `.mp4`", "audio, video"],
            ["`.py`", "Python program"],
          ],
        },
        {
          type: "text",
          md: "A **file** is a named collection of data saved on storage, such as `science-notes.odt`. The part after the dot is the **extension**; it tells the OS which program opens the file. A **folder** (or directory) holds files and other folders. The full route to a file, such as `Documents/Class9/science-notes.odt`, is its **path**.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is it system software or application software?",
            groups: ["System software", "Application software"],
            items: [
              { text: "Linux", group: 0, hint: "It is an operating system." },
              { text: "Device driver for a scanner", group: 0, hint: "It lets the OS control a device." },
              { text: "Disk cleanup tool", group: 0, hint: "Utilities that look after the computer count as system software." },
              { text: "Web browser", group: 1, hint: "You use it to visit websites: a job for you." },
              { text: "Spreadsheet program", group: 1, hint: "You use it to do calculations: a job for you." },
              { text: "Photo editing app", group: 1, hint: "It does a task the user wants." },
            ],
            explain: "System software keeps the computer running; application software does the user's own work.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For \"functions of an operating system\", list at least four with one line each (process, memory, file, device management). Writing only \"it controls the computer\" earns little. Give a real example for each software type.",
        },
        {
          type: "keypoints",
          items: [
            "Hardware = parts you can touch; software = programs.",
            "System software runs the computer (OS, drivers, utilities); application software does the user's jobs.",
            "The OS manages processes, memory, files, devices and security, and gives a CUI or GUI.",
            "Open source = code open to study, change and share; proprietary = code owned and kept closed.",
            "A file's extension (.odt, .xlsx, .py) tells which program opens it.",
          ],
        },
      ],
      flashcards: [
        { front: "System software", back: "Software that runs and manages the computer, e.g. an operating system or a device driver." },
        { front: "Application software", back: "Software that does a job for the user, e.g. a word processor or a browser." },
        { front: "Utility software", back: "System software that maintains the computer, e.g. antivirus, disk cleanup, zip tools." },
        { front: "GUI", back: "Graphical User Interface: commands are given by clicking icons, menus and windows." },
        { front: "CUI", back: "Character User Interface: commands are typed as text, e.g. a command line." },
        { front: "Open source software", back: "Software whose source code anyone can study, change and share, e.g. Linux, LibreOffice." },
        { front: "File extension", back: "The letters after the dot in a file name (.pdf, .py); they tell which program opens the file." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which function of the OS gives RAM to each running program?",
          options: ["Memory management", "File management", "Device management", "Security"],
          answer: 0,
          explain: "Memory management hands out RAM to programs and takes it back when they close.",
        },
        {
          kind: "truefalse",
          q: "Antivirus software is a kind of utility software.",
          answer: true,
          explain: "Utilities look after the computer. Antivirus protects it from malware.",
        },
        {
          kind: "fill",
          q: "A small program that lets the operating system control a printer is called a device ___.",
          answer: ["driver"],
          explain: "Each device needs a driver so the OS knows how to talk to it.",
        },
        {
          kind: "mcq",
          q: "A free game whose source code you cannot see or change is:",
          options: ["Freeware", "Open source software", "System software", "An operating system"],
          answer: 0,
          explain: "Free of cost but closed code = freeware. Open source needs the code to be open.",
          difficulty: 2,
          hint: "Free of cost is not the same as open code.",
        },
        {
          kind: "multi",
          q: "Which of these are operating systems? (Choose all that apply)",
          options: ["Android", "macOS", "Linux", "MS Excel", "Google Chrome"],
          answers: [0, 1, 2],
          explain: "Android, macOS and Linux run devices. Excel and Chrome are applications that run on an OS.",
        },
        {
          kind: "mcq",
          q: "Which file is most likely a spreadsheet?",
          options: ["marks.ods", "marks.odt", "marks.odp", "marks.py"],
          answer: 0,
          explain: "`.ods` is a LibreOffice Calc spreadsheet. `.odt` is a text document, `.odp` a presentation and `.py` a Python program.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In a CUI, you give commands mainly by clicking icons.",
          answer: false,
          explain: "In a CUI you type commands. Clicking icons is a GUI.",
        },
      ],
    },

    {
      slug: "c9-it-ites-and-keyboarding",
      title: "The IT–ITeS Industry and Keyboarding Skills",
      summary: "What IT, ICT and ITeS mean, BPO and KPO, uses of IT in daily life, the parts of a keyboard, home row keys, touch typing, posture and typing speed.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🎧",
          caption: "Meena works at a customer support centre in Bengaluru. She answers questions from bank customers all over the world using a headset, a computer and the Internet.",
        },
        {
          type: "text",
          md: "**Information Technology (IT)** is the use of computers, software and networks to store, process, send and receive information. When communication tools such as phones and the Internet are included, we say **ICT** (Information and Communication Technology).\n\n**ITeS** means **IT-enabled Services**: services that a company can offer from a distance only because of IT, such as customer support, data entry, medical transcription and online tutoring. India is one of the world's biggest providers of IT and ITeS work.",
        },
        {
          type: "table",
          headers: ["Term", "Meaning", "Example jobs"],
          rows: [
            ["**BPO** (Business Process Outsourcing)", "a company hands a routine business task to another company", "call centres, data entry, billing, payroll"],
            ["**KPO** (Knowledge Process Outsourcing)", "outsourcing of work that needs expert knowledge", "research and analysis, legal and medical services, data analytics"],
          ],
        },
        {
          type: "table",
          headers: ["Area", "How IT is used"],
          rows: [
            ["Banking", "net banking, ATMs, UPI payments"],
            ["Travel", "online train, bus and flight booking; live train status"],
            ["Health", "online appointments, digital health records, reports by e-mail"],
            ["Education", "online classes, e-books, online results"],
            ["Government", "e-governance: online forms and certificates, DigiLocker for digital documents"],
          ],
        },
        {
          type: "heading",
          text: "The keyboard and touch typing",
        },
        {
          type: "table",
          headers: ["Group of keys", "Examples", "Use"],
          rows: [
            ["**Alphanumeric keys**", "A–Z, 0–9, punctuation", "typing text and numbers"],
            ["**Function keys**", "F1 to F12", "special jobs set by each program, e.g. F1 often opens Help"],
            ["**Modifier keys**", "Shift, Ctrl, Alt", "change what another key does, e.g. Ctrl + S saves"],
            ["**Navigation (cursor) keys**", "arrow keys, Home, End, Page Up, Page Down", "move the cursor"],
            ["**Numeric keypad**", "0–9, `+ − * /` on the right side", "fast entry of numbers"],
            ["**Special keys**", "Enter, Backspace, Delete, Tab, Esc, Caps Lock", "confirm, erase, indent, cancel"],
          ],
        },
        {
          type: "text",
          md: "**Touch typing** means typing without looking at the keys, using all ten fingers. Each finger rests on one of the eight **home row keys**: **A S D F** for the left hand and **J K L ;** for the right hand. The thumbs rest on the Space bar. The **F** and **J** keys have small raised bumps so your index fingers can find home without looking.\n\nTyping speed is measured in **words per minute (WPM)**. **Gross speed** = words typed ÷ minutes. **Net speed** also takes off the errors: net WPM = gross WPM − (errors ÷ minutes).",
        },
        {
          type: "example",
          title: "Working out typing speed",
          problem: "Kiran types 250 words in 5 minutes and makes 10 errors. Find her gross and net speed.",
          steps: [
            "Gross speed = words ÷ minutes = 250 ÷ 5 = **50 WPM**.",
            "Errors per minute = 10 ÷ 5 = 2.",
            "Net speed = gross − errors per minute = 50 − 2 = **48 WPM**.",
          ],
          answer: "Gross speed = 50 WPM; net speed = 48 WPM.",
        },
        {
          type: "mistake",
          wrong: "Typing fast with two fingers while looking at the keys is good enough; touch typing is only for experts.",
          right: "Touch typing with all ten fingers from the home row is faster and has fewer errors in the long run, because your eyes stay on the screen or the paper you are copying.",
          why: "Two-finger typing feels quicker at first because you already know it. But every look down at the keys breaks your reading and causes mistakes, so it soon stops getting faster.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each home row key to the finger that rests on it.",
            pairs: [
              ["A", "Left little finger"],
              ["F", "Left index finger"],
              ["J", "Right index finger"],
              ["L", "Right ring finger"],
              ["Space bar", "Thumbs"],
            ],
            explain: "Left hand: A S D F = little, ring, middle, index. Right hand: J K L ; = index, middle, ring, little. The bumps on F and J guide the index fingers.",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "Sit right while you type",
          md: "Sit straight with your back supported and feet flat on the floor. Keep wrists straight and elbows at about a right angle. Keep the top of the screen at or a little below eye level, about an arm's length away. Take a short break to rest your eyes and hands every half hour or so.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions often ask \"Name the home row keys\" or \"Which keys have bumps?\". Write all eight keys (A S D F J K L ;) and remember the semicolon. For speed sums, show the formula line before the answer: a bare number loses a step mark.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "Arjun types 360 words in 8 minutes with no errors. What is his speed in WPM?",
              answer: 45,
              unit: "WPM",
              explain: "360 ÷ 8 = 45 WPM. With no errors, gross and net speed are the same.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "IT = using computers and networks for information; ITeS = services delivered with the help of IT.",
            "BPO outsources routine tasks; KPO outsources knowledge-based expert work.",
            "Home row keys: A S D F and J K L ; with bumps on F and J.",
            "Gross WPM = words ÷ minutes; net WPM = gross − errors ÷ minutes.",
            "Good posture: straight back, flat feet, straight wrists, screen at eye level and regular breaks.",
          ],
        },
      ],
      flashcards: [
        { front: "ITeS", back: "IT-enabled Services: services delivered from a distance using IT, e.g. customer support, data entry." },
        { front: "BPO", back: "Business Process Outsourcing: giving routine business tasks (calls, billing) to another company." },
        { front: "KPO", back: "Knowledge Process Outsourcing: outsourcing expert, knowledge-based work such as research and analysis." },
        { front: "Home row keys", back: "A S D F (left hand) and J K L ; (right hand)." },
        { front: "Keys with bumps", back: "F and J, to guide the index fingers back to the home row." },
        { front: "Net typing speed", back: "Gross WPM − (errors ÷ minutes)." },
        { front: "Modifier keys", back: "Shift, Ctrl and Alt: pressed with another key to change what it does." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A call centre answering customers for a mobile company is an example of:",
          options: ["BPO", "KPO", "An operating system", "Hardware"],
          answer: 0,
          explain: "Answering routine customer calls is a business process that is outsourced: BPO.",
        },
        {
          kind: "multi",
          q: "Which of these are home row keys? (Choose all that apply)",
          options: ["F", "J", ";", "G", "Q"],
          answers: [0, 1, 2],
          explain: "The home row keys are A S D F J K L ;. G and H sit between the hands and are reached by stretching the index fingers.",
          difficulty: 2,
          hint: "Each hand covers four keys, and the right little finger rests on a punctuation key.",
        },
        {
          kind: "truefalse",
          q: "The F and J keys have raised bumps to help in touch typing.",
          answer: true,
          explain: "The bumps let the index fingers find the home row without looking.",
        },
        {
          kind: "numeric",
          q: "Priya types 300 words in 6 minutes and makes 12 errors. What is her net speed in WPM?",
          answer: 48,
          unit: "WPM",
          explain: "Gross = 300 ÷ 6 = 50. Errors per minute = 12 ÷ 6 = 2. Net = 50 − 2 = 48 WPM.",
          difficulty: 3,
          hint: "Find gross speed first, then subtract errors per minute.",
        },
        {
          kind: "fill",
          q: "F1 to F12 are called ___ keys.",
          answer: ["function"],
          explain: "Function keys do special jobs set by each program.",
        },
        {
          kind: "mcq",
          q: "Which work is best described as KPO?",
          options: ["Analysing medical research data for a foreign company", "Typing names into a database", "Answering simple billing calls", "Printing bills"],
          answer: 0,
          explain: "KPO needs expert knowledge, like research analysis. The other jobs are routine BPO tasks.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Where should the top of the monitor be while typing?",
          options: ["At or a little below eye level", "Well above your head", "On your lap", "Very close, a few centimetres from your eyes"],
          answer: 0,
          explain: "A screen at or just below eye level, about an arm's length away, avoids neck and eye strain.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const cyberSafety: Topic = {
  slug: "c9-cyber-safety",
  title: "Cyber Safety",
  icon: "🛡️",
  description: "Malware, phishing, cyberbullying and identity theft, and the habits that keep you, your data and your devices safe online.",
  lessons: [
    {
      slug: "c9-cyber-threats",
      title: "Cyber Threats: Malware, Phishing and Bullying",
      summary: "What cyber safety means; viruses, worms, Trojans, ransomware and spyware; phishing, vishing and smishing; identity theft and cyberbullying.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "📩",
          caption: "Rohan gets an SMS: \"Congratulations! You won ₹50,000 in a lucky draw. Click the link and enter your bank details to claim it.\" He never entered any lucky draw.",
        },
        {
          type: "text",
          md: "**Cyber safety** means using the Internet and digital devices in a way that keeps you, your personal data and your devices safe from harm. The harm can come from harmful programs, from people who try to trick you, or from people who try to hurt you online.\n\nAny crime done using a computer, phone or the Internet is a **cybercrime**. Stealing money through a fake link, hacking an account and bullying someone online are all cybercrimes.",
        },
        {
          type: "heading",
          text: "Malware: harmful software",
        },
        {
          type: "text",
          md: "**Malware** (short for *malicious software*) is any program written to damage a device, steal data or spy on the user. It usually gets in through unsafe downloads, e-mail attachments, fake apps, pirated software or infected pen drives.",
        },
        {
          type: "table",
          headers: ["Malware", "How it behaves"],
          rows: [
            ["**Virus**", "attaches itself to a file or program and spreads when that infected file is opened or shared"],
            ["**Worm**", "copies itself and spreads across a network on its own, without needing you to open anything"],
            ["**Trojan horse**", "pretends to be a useful program (a free game or a \"phone cleaner\") but secretly does harm"],
            ["**Ransomware**", "locks or encrypts your files and demands money (a ransom) to unlock them"],
            ["**Spyware**", "secretly watches what you do and sends out data such as passwords"],
            ["**Adware**", "floods your screen with unwanted adverts"],
          ],
        },
        {
          type: "mistake",
          wrong: "A virus and a worm are the same thing, just two names.",
          right: "A **virus** needs a host file and spreads when a person opens or shares that file. A **worm** is a standalone program that spreads through networks by itself.",
          why: "People call every kind of malware a \"virus\" in daily speech. In exams, though, the difference is how they spread: with your action (virus) or on their own (worm).",
        },
        {
          type: "heading",
          text: "Tricks that target people",
        },
        {
          type: "list",
          items: [
            "**Phishing:** a fake e-mail, message or website that looks real (from a bank, a shop, your school) and tricks you into giving passwords, OTPs or card details.",
            "**Vishing:** phishing by a voice call, e.g. a caller pretending to be from your bank asking for an OTP.",
            "**Smishing:** phishing by SMS, like Rohan's \"lucky draw\" message.",
            "**Identity theft:** a criminal uses your stolen personal details to pretend to be you, for example to open accounts or take loans.",
            "**Hacking:** getting into a computer or account without permission.",
            "**Cyberbullying:** using the Internet or phones to threaten, insult, embarrass or leave someone out on purpose, again and again.",
          ],
        },
        {
          type: "example",
          title: "Spotting a phishing message",
          problem: "An e-mail says: \"Dear customer, your account will be BLOCKED in 2 hours. Verify now at http://sbi-kyc-update.xyz and enter your ATM PIN.\" List the warning signs.",
          steps: [
            "**Urgency and fear:** \"blocked in 2 hours\" is meant to make you act before you think.",
            "**A request for secret details:** no real bank ever asks for your PIN, password or OTP.",
            "**A strange web address:** a real bank's site ends in its own domain; `.xyz` with extra words is a copy. The link is also `http`, not `https`.",
            "**A general greeting:** \"Dear customer\" instead of your name.",
          ],
          answer: "It is phishing: urgency, a request for a PIN, a fake-looking address and a general greeting. Do not click; delete it or report it.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A free \"battery booster\" app secretly sends your contacts to a stranger. It is a:",
              options: ["Trojan horse", "Worm", "Firewall", "Cookie"],
              answer: 0,
              explain: "It pretends to be useful but does harm in secret, which is exactly what a Trojan horse does.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each threat to what it does.",
            pairs: [
              ["Ransomware", "Locks your files and asks for money"],
              ["Worm", "Spreads across a network by itself"],
              ["Spyware", "Secretly records what you type"],
              ["Smishing", "A trick message sent by SMS"],
              ["Cyberbullying", "Repeated online insults or threats"],
            ],
            explain: "Malware is a program (ransomware, worm, spyware). Smishing and cyberbullying are things *people* do using messages.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked to \"differentiate\" between two threats, write the same point for both, e.g. *how it spreads*: virus needs a host file; worm spreads on its own. Two matching points earn the marks; two unrelated facts often do not.",
        },
        {
          type: "keypoints",
          items: [
            "Cyber safety = keeping yourself, your data and your devices safe online.",
            "Malware: virus (needs a host file), worm (spreads alone), Trojan (fake useful program), ransomware (asks for money), spyware (spies).",
            "Phishing tricks you into giving secret details; vishing is by call, smishing by SMS.",
            "Real banks never ask for a PIN, password or OTP.",
            "Cyberbullying is repeated, deliberate harm to someone online.",
          ],
        },
      ],
      flashcards: [
        { front: "Malware", back: "Malicious software: any program made to damage devices, steal data or spy." },
        { front: "Virus vs worm", back: "A virus needs a host file and a user's action to spread; a worm spreads through networks on its own." },
        { front: "Trojan horse", back: "Malware disguised as a useful program." },
        { front: "Ransomware", back: "Malware that locks or encrypts files and demands payment to unlock them." },
        { front: "Phishing", back: "A fake message or website that tricks people into giving passwords, OTPs or card details." },
        { front: "Vishing / smishing", back: "Phishing done by voice call (vishing) or by SMS (smishing)." },
        { front: "Identity theft", back: "Using someone's stolen personal details to pretend to be them." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which malware demands money to give back access to your files?",
          options: ["Ransomware", "Adware", "Worm", "Spyware"],
          answer: 0,
          explain: "Ransom = money paid for release. Ransomware encrypts files and asks for payment.",
        },
        {
          kind: "truefalse",
          q: "A worm needs you to open an infected file before it can spread.",
          answer: false,
          explain: "That describes a virus. A worm spreads across networks on its own.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "A phone call from someone pretending to be a bank officer and asking for your OTP is called ___.",
          answer: ["vishing", "voice phishing"],
          explain: "Vishing = voice + phishing.",
        },
        {
          kind: "multi",
          q: "Which are warning signs of a phishing e-mail? (Choose all that apply)",
          options: ["It asks for your password or OTP", "It says your account will close in 1 hour", "The web address has odd spellings", "It comes from a friend you were already chatting with about the topic"],
          answers: [0, 1, 2],
          explain: "Requests for secrets, false urgency and odd addresses are the classic signs. An expected message from a known friend is not by itself a warning sign, though friends' accounts can also be hacked.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Sending someone hurtful messages again and again on a group chat is:",
          options: ["Cyberbullying", "Phishing", "Hacking", "Spam filtering"],
          answer: 0,
          explain: "Repeated, deliberate harm to a person online is cyberbullying.",
        },
        {
          kind: "mcq",
          q: "A pirated game downloaded from an unknown site is most likely to bring:",
          options: ["Malware", "A faster processor", "More RAM", "A valid licence"],
          answer: 0,
          explain: "Pirated and unknown downloads are one of the commonest ways malware gets into a device.",
        },
        {
          kind: "truefalse",
          q: "Using someone's stolen Aadhaar and bank details to take a loan in their name is identity theft.",
          answer: true,
          explain: "The criminal is pretending to be that person using their personal data.",
        },
      ],
    },

    {
      slug: "c9-staying-safe-online",
      title: "Staying Safe Online",
      summary: "Strong passwords and two-factor authentication, safe browsing and HTTPS, updates, antivirus and firewalls, privacy and digital footprint, and how to report cybercrime in India.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "You lock your house and do not hand your keys to strangers. Online safety works the same way: a few simple habits keep most attacks out. This lesson covers your **accounts**, your **device**, your **privacy** and what to **do if something goes wrong**.",
        },
        {
          type: "heading",
          text: "Protect your accounts",
        },
        {
          type: "text",
          md: "A **strong password** is long (at least 12 characters is a good habit), mixes capital and small letters, numbers and symbols, and is not easy to guess. Your name, birthday, phone number or `123456` are weak. A short sentence that only you know, with some numbers and symbols, is easy to remember and hard to crack.\n\n**Two-factor authentication (2FA)** asks for a second proof after the password, such as an **OTP** (One Time Password) sent to your phone. Even if someone steals your password, they cannot log in without the second step. Never share an OTP with anyone, not even someone who says they are from your bank.",
        },
        {
          type: "example",
          title: "Making a weak password strong",
          problem: "Sneha's password is `sneha2010`. Explain why it is weak and build a stronger one.",
          steps: [
            "It has her name and her birth year: anyone who knows her or sees her profile can guess it.",
            "It is only 9 characters, with no capital letters and no symbols.",
            "Start from a private sentence: \"My cat Tiger eats 2 rotis at 8!\"",
            "Take the first letter of each word, keep the numbers and the !, and write \"at\" as @: `McTe2r@8!`. Then add a word to make it longer, e.g. `McTe2r@8!Mumbai`.",
            "Use a different password for each important account, so one leak does not open them all.",
          ],
          answer: "`sneha2010` is weak (personal, short, no symbols). A long mix like `McTe2r@8!Mumbai`, used only for one account, is much stronger.",
        },
        {
          type: "mistake",
          wrong: "If I use one very strong password for all my accounts, I am safe.",
          right: "Use a **different** password for each important account (e-mail, banking, school portal) and turn on 2FA. If one website is hacked, the others stay safe.",
          why: "A strong password is hard to guess, so it feels enough. But websites do get hacked and passwords get leaked; criminals then try the same password on every other site.",
        },
        {
          type: "heading",
          text: "Protect your device and your browsing",
        },
        {
          type: "list",
          items: [
            "**Update** the operating system and apps: updates fix security holes.",
            "Install **antivirus** software and keep it updated; scan pen drives before opening files.",
            "Keep the **firewall** on. A firewall checks the traffic coming into and going out of a computer or network and blocks what is not allowed.",
            "Download apps only from official app stores or the maker's own website.",
            "Check for **HTTPS** and the padlock in the address bar before typing a password or paying. It means the connection is encrypted; it does not by itself prove the site is honest, so check the address too.",
            "Avoid logging in to bank or school accounts on **public Wi-Fi**, and always **log out** on shared or cyber-café computers.",
            "Keep **backups** of important files, so ransomware or a broken disk cannot take them from you.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A padlock and HTTPS in the address bar guarantee that the website is honest.",
              answer: false,
              explain: "HTTPS only means the connection is encrypted. Fake sites can also use HTTPS, so check the address carefully too.",
            },
          ],
        },
        {
          type: "heading",
          text: "Protect your privacy",
        },
        {
          type: "text",
          md: "Your **digital footprint** is the trail of data you leave online: posts, photos, comments, searches and the places you check in. Once something is posted, copies can stay even after you delete it.\n\nKeep social media accounts **private**, accept requests only from people you know in real life, and do not post your home address, school timetable, phone number or live location. Never agree to meet an online-only \"friend\" alone. Think before you post: would you be fine if your teacher or a future college saw it?",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Reporting cybercrime in India",
          md: "Tell a parent or teacher first. Cybercrime can be reported on the **National Cyber Crime Reporting Portal**, **cybercrime.gov.in**, and online money fraud can be reported quickly on the helpline **1930**. Keep screenshots of the messages as proof, and **block and report** a bully on the app itself. Do not reply to a bully.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Safe habit or risky habit?",
            groups: ["Safe habit", "Risky habit"],
            items: [
              { text: "Turning on two-factor authentication", group: 0, hint: "A second step protects you even if the password leaks." },
              { text: "Logging out of the cyber-café computer", group: 0, hint: "The next user cannot open your account." },
              { text: "Updating your phone's software", group: 0, hint: "Updates fix security holes." },
              { text: "Sharing your OTP with a caller from \"the bank\"", group: 1, hint: "No real bank asks for an OTP." },
              { text: "Posting your live location publicly", group: 1, hint: "Strangers can see where you are." },
              { text: "Using your pet's name as every password", group: 1, hint: "Easy to guess, and one leak opens all accounts." },
              { text: "Scanning a pen drive before opening files", group: 0, hint: "It catches malware before it runs." },
            ],
            explain: "Safe habits add a lock (2FA, updates, scans, logging out). Risky habits hand over a key (OTPs, guessable passwords, your location).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"List safety measures\" questions want specific actions: *use strong, different passwords*, *enable 2FA*, *update software*, *use antivirus and firewall*, *do not share OTPs*. Vague lines like \"be careful online\" earn no marks.",
        },
        {
          type: "keypoints",
          items: [
            "Strong, long, different passwords plus 2FA protect accounts; never share an OTP.",
            "Updates, antivirus, a firewall and official app stores protect devices.",
            "HTTPS means an encrypted connection, not an honest site; check the address too.",
            "Keep accounts private and think before posting: your digital footprint lasts.",
            "Report cybercrime at cybercrime.gov.in or call 1930 for online money fraud; tell a trusted adult.",
          ],
        },
      ],
      flashcards: [
        { front: "Strong password", back: "Long (12+ characters), mixes capitals, small letters, numbers and symbols, and is not personal or guessable." },
        { front: "Two-factor authentication", back: "A second check after the password, e.g. an OTP on your phone." },
        { front: "OTP", back: "One Time Password: a code that works once, for a short time. Never share it." },
        { front: "Firewall", back: "Software or hardware that checks network traffic and blocks what is not allowed." },
        { front: "HTTPS", back: "A secure, encrypted connection between browser and website, shown with a padlock." },
        { front: "Digital footprint", back: "The trail of data a person leaves online: posts, searches, photos, locations." },
        { front: "Where to report cybercrime in India", back: "cybercrime.gov.in; helpline 1930 for online financial fraud." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which password is the strongest?",
          options: ["Rain@Pune#Tea7Hot", "rahul123", "12345678", "password"],
          answer: 0,
          explain: "It is long and mixes capitals, small letters, symbols and a number. The others are short, personal or very common.",
        },
        {
          kind: "truefalse",
          q: "With 2FA turned on, a thief who knows only your password usually cannot log in.",
          answer: true,
          explain: "They would also need the second factor, such as the OTP sent to your phone.",
        },
        {
          kind: "fill",
          q: "A ___ checks traffic coming into and going out of a computer and blocks what is not allowed.",
          answer: ["firewall"],
          explain: "A firewall works like a security guard at the gate of a network.",
        },
        {
          kind: "mcq",
          q: "What should you do first if a classmate is being bullied in an online group?",
          options: ["Tell a trusted adult and keep screenshots", "Reply with insults to the bully", "Share the messages in more groups", "Delete everything and say nothing"],
          answer: 0,
          explain: "Save the proof and get an adult involved. Replying or spreading the messages makes things worse.",
        },
        {
          kind: "multi",
          q: "Which actions help protect a device from malware? (Choose all that apply)",
          options: ["Updating the operating system", "Keeping antivirus updated", "Installing apps from unknown links", "Scanning pen drives"],
          answers: [0, 1, 3],
          explain: "Updates, antivirus and scanning keep malware out. Unknown links are a common way malware gets in.",
        },
        {
          kind: "numeric",
          q: "Which helpline number can you call in India to report online financial fraud?",
          answer: 1930,
          explain: "1930 is the national cyber fraud helpline. Complaints can also be filed at cybercrime.gov.in.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Using the same strong password on every website is risky because:",
          options: ["If one site leaks it, all your accounts can be opened", "Strong passwords stop working after a month", "Websites do not allow strong passwords", "It makes your Internet slower"],
          answer: 0,
          explain: "Criminals try leaked passwords on other sites. Different passwords limit the damage to one account.",
          difficulty: 2,
          hint: "Think about what happens when one website is hacked.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const wordProcessing: Topic = {
  slug: "c9-word-processing",
  title: "Word Processing",
  icon: "📝",
  description: "Typing, editing and formatting documents, saving and exporting them, and adding tables, pictures, headers, footers and page layout.",
  lessons: [
    {
      slug: "c9-word-processing-basics",
      title: "Creating and Formatting a Document",
      summary: "What a word processor is, typing and editing text, shortcuts that work everywhere, character, paragraph and page formatting, and saving, Save As and PDF.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Anil writes a leave letter by hand, finds a spelling mistake in the last line and has to copy the whole page again. On a computer he would fix one word and print.\n\nA **word processor** is application software used to type, edit, format, save and print documents such as letters, notices, reports and projects. Common word processors are **LibreOffice Writer** (free and open source), **Microsoft Word** and **Google Docs** (which works in a web browser). The menus look a little different, but the ideas are the same in all three.",
        },
        {
          type: "text",
          md: "The blinking line where your typing appears is the **insertion point** (cursor). When a line is full, the word processor moves to the next line by itself; this is called **word wrap**. So press **Enter** only to end a paragraph, not at the end of every line.\n\n**Backspace** deletes the character to the *left* of the cursor; **Delete** removes the character to the *right*. To change some text, first **select** it by dragging the mouse over it (or holding Shift and pressing the arrow keys).",
        },
        {
          type: "table",
          headers: ["Shortcut", "Action"],
          rows: [
            ["Ctrl + Z / Ctrl + Y", "undo / redo"],
            ["Ctrl + X, Ctrl + C, Ctrl + V", "cut, copy, paste"],
            ["Ctrl + A", "select all"],
            ["Ctrl + B, Ctrl + I, Ctrl + U", "**bold**, *italic*, underline"],
            ["Ctrl + F / Ctrl + H", "find / find and replace"],
            ["Ctrl + S", "save (Google Docs also saves by itself)"],
            ["Ctrl + P", "print"],
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Same keys, different apps",
          md: "These shortcuts work in Writer, Word and Google Docs. On a Mac, most of them use the Command (⌘) key instead of Ctrl.",
        },
        {
          type: "heading",
          text: "Three levels of formatting",
        },
        {
          type: "table",
          headers: ["Level", "Changes", "Examples"],
          rows: [
            ["**Character formatting**", "the look of selected letters and words", "font, font size, bold, italic, underline, colour, highlight, superscript ($x^2$), subscript (H₂O)"],
            ["**Paragraph formatting**", "a whole paragraph", "alignment (left, centre, right, **justify**), line spacing, indents, bullets and numbering"],
            ["**Page formatting**", "the whole page", "margins, orientation (portrait or landscape), page size (A4), page borders"],
          ],
        },
        {
          type: "text",
          md: "**Justify** aligns text to both the left and right margins, so both edges are straight, as in a newspaper column. **Line spacing** is the gap between lines, e.g. single (1.0) or double (2.0). An **indent** moves a paragraph in from the margin.\n\nFor paragraph alignment, Writer and Word use Ctrl + L (left), Ctrl + E (centre), Ctrl + R (right) and Ctrl + J (justify). Google Docs uses the same letters with Shift added, e.g. Ctrl + Shift + E to centre.",
        },
        {
          type: "example",
          title: "Formatting a school notice",
          problem: "Type a notice about Science Day. The heading \"NOTICE\" should be large, bold and centred; the body text should be justified.",
          steps: [
            "Type all the text first; press Enter only after the heading and at the end of each paragraph.",
            "Select the word NOTICE. Press Ctrl + B for bold and pick a bigger font size, say 18 pt (character formatting).",
            "With the cursor still in the heading, centre it with the centre-align button (paragraph formatting).",
            "Select the body paragraphs and click the justify button.",
            "Save with Ctrl + S and give a clear file name such as `science-day-notice`.",
          ],
          answer: "Heading: bold, 18 pt, centred. Body: justified. Saved with a clear name.",
        },
        {
          type: "mistake",
          wrong: "To bring a heading to the middle, press the Space bar many times; to start a new line, press Enter at the end of each line.",
          right: "Use the **centre** alignment button for the heading, and let **word wrap** move text to the next line. Press Enter only at the end of a paragraph.",
          why: "Spaces and extra Enters look right on your screen. But when you change the font, size or margins, the text shifts and the layout breaks, while alignment and word wrap adjust by themselves.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Changing the line spacing of a paragraph to double is an example of:",
              options: ["Paragraph formatting", "Character formatting", "Page formatting", "Find and replace"],
              answer: 0,
              explain: "Line spacing, alignment and indents change a whole paragraph.",
            },
          ],
        },
        {
          type: "text",
          md: "**Save** stores the file under its current name. **Save As** saves a copy with a new name, a new place or a new format, leaving the old file as it was. Writer's own format is **.odt** (OpenDocument Text) and Word's is **.docx**; each can open and save the other.\n\nTo share a file that must look the same on every device, export it as a **PDF**: in Writer use *File → Export as PDF*, in Word use *File → Save As* (or *Export*) and pick PDF, and in Google Docs use *File → Download → PDF*.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each shortcut to what it does.",
            pairs: [
              ["Ctrl + Z", "Undo the last action"],
              ["Ctrl + H", "Find and replace"],
              ["Ctrl + X", "Cut the selected text"],
              ["Ctrl + U", "Underline"],
              ["Ctrl + A", "Select everything"],
            ],
            explain: "X looks like scissors (cut), Z is the last letter, so it undoes. H is find and **replace** in all three word processors.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Difference between Save and Save As\" is a common 2-mark question: Save keeps the same name and place; Save As creates a copy with a new name, location or format. Also know that **cut** removes the text and **copy** keeps it, but both put it on the **clipboard**.",
        },
        {
          type: "keypoints",
          items: [
            "A word processor types, edits, formats, saves and prints documents (Writer, Word, Google Docs).",
            "Word wrap moves text to the next line by itself; press Enter only to end a paragraph.",
            "Character formatting = letters; paragraph formatting = alignment, spacing, indents; page formatting = margins, orientation, size.",
            "Save keeps the name; Save As makes a copy with a new name, place or format (.odt, .docx, PDF).",
          ],
        },
      ],
      flashcards: [
        { front: "Word processor", back: "Application software to type, edit, format, save and print documents, e.g. Writer, Word, Google Docs." },
        { front: "Word wrap", back: "Text moves to the next line by itself when a line is full." },
        { front: "Insertion point", back: "The blinking cursor that shows where typed text will appear." },
        { front: "Justify", back: "Alignment that makes both the left and right edges of a paragraph straight." },
        { front: "Save vs Save As", back: "Save keeps the current name; Save As saves a copy with a new name, place or format." },
        { front: ".odt", back: "OpenDocument Text: LibreOffice Writer's own file format." },
        { front: "Clipboard", back: "Temporary memory that holds text you cut or copy until you paste it." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which key deletes the character to the left of the cursor?",
          options: ["Backspace", "Delete", "Enter", "Tab"],
          answer: 0,
          explain: "Backspace moves back (left) and erases; Delete removes the character to the right.",
        },
        {
          kind: "fill",
          q: "The shortcut to find and replace a word in Writer, Word and Google Docs is Ctrl + ___.",
          answer: ["H"],
          explain: "Ctrl + F only finds; Ctrl + H finds and replaces.",
        },
        {
          kind: "truefalse",
          q: "Changing a page from portrait to landscape is paragraph formatting.",
          answer: false,
          explain: "Orientation changes the whole page, so it is page formatting.",
        },
        {
          kind: "multi",
          q: "Which of these are character formatting? (Choose all that apply)",
          options: ["Font colour", "Bold", "Subscript", "Line spacing", "Margins"],
          answers: [0, 1, 2],
          explain: "Font colour, bold and subscript change letters. Line spacing is paragraph formatting and margins are page formatting.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Neha wants to keep her old report and also make an edited copy called report-v2. She should use:",
          options: ["Save As", "Save", "Undo", "Cut"],
          answer: 0,
          explain: "Save As makes a new copy with a new name; the old file stays as it was.",
          difficulty: 2,
          hint: "Which option asks for a new file name?",
        },
        {
          kind: "mcq",
          q: "Which alignment makes both edges of a paragraph straight?",
          options: ["Justify", "Centre", "Left", "Right"],
          answer: 0,
          explain: "Justify spreads the words so the text touches both margins.",
        },
        {
          kind: "order",
          q: "Put the steps to make a word bold in order.",
          items: ["Type the word", "Select the word", "Press Ctrl + B", "Save the document with Ctrl + S"],
          explain: "Text must be typed and selected before you can format it, and saving comes last so the change is kept.",
        },
      ],
    },

    {
      slug: "c9-word-tables-images-pages",
      title: "Tables, Pictures and Page Layout",
      summary: "Insert and edit tables, add pictures with text wrapping, set margins, orientation, headers, footers, page numbers and page breaks, and check spelling before printing.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Your class is making a one-page newsletter. It needs a timetable, a photo from Sports Day, the school name at the top of every page and page numbers at the bottom. A word processor can do all of it neatly.",
        },
        {
          type: "text",
          md: "A **table** arranges text in **rows** (across) and **columns** (down). Each box where a row and a column meet is a **cell**. To add one, put the cursor where it should go and choose *Table → Insert Table* in Writer, the *Insert* tab → *Table* in Word, or *Insert → Table* in Google Docs. Then give the number of columns and rows.\n\nYou can add or delete rows and columns later, **merge** cells (join several cells into one, e.g. for a title across the top) or **split** a cell into smaller ones, and change borders and shading. Press **Tab** to move to the next cell.",
        },
        {
          type: "example",
          title: "Planning a timetable table",
          problem: "Make a timetable for Monday to Saturday with 5 periods a day. The first row holds the period numbers and the first column holds the day names. How many rows, columns and cells do you need?",
          steps: [
            "Rows: 1 heading row + 6 days (Monday to Saturday) = 7 rows.",
            "Columns: 1 column for day names + 5 periods = 6 columns.",
            "Cells = rows × columns = 7 × 6 = 42.",
          ],
          answer: "Insert a table of 6 columns and 7 rows: 42 cells.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many cells does a table with 4 rows and 3 columns have?",
              answer: 12,
              explain: "Cells = rows × columns = 4 × 3 = 12.",
            },
          ],
        },
        {
          type: "heading",
          text: "Pictures and text wrapping",
        },
        {
          type: "text",
          md: "In all three apps, pictures are added from the *Insert* menu or tab (Insert → Image, or Insert → Pictures in Word). Drag the corner handles to resize a picture without stretching it out of shape.\n\n**Text wrapping** decides how text flows around a picture. *In line with text* treats the picture like one big letter in the line. *Wrap* (square) lets text flow around its sides. *Behind text* or *in front of text* lets the picture overlap the words, like a watermark. Each app names these a little differently, but the choices are similar.",
        },
        {
          type: "heading",
          text: "Page layout",
        },
        {
          type: "table",
          headers: ["Feature", "What it does"],
          rows: [
            ["**Margins**", "the blank space between the text and the edges of the page"],
            ["**Orientation**", "**portrait** (tall) or **landscape** (wide)"],
            ["**Header / footer**", "text in the top / bottom margin that repeats on every page, e.g. school name, date"],
            ["**Page number**", "a number added in the header or footer that changes by itself on each page"],
            ["**Page break**", "starts a new page at the cursor (Ctrl + Enter in Writer, Word and Google Docs)"],
            ["**Columns**", "splits text into newspaper-style columns"],
          ],
        },
        {
          type: "text",
          md: "Margins and orientation are set in *Format → Page Style* in Writer, the *Layout* tab in Word, and *File → Page setup* in Google Docs. Headers, footers and page numbers are on the *Insert* menu or tab in all three.",
        },
        {
          type: "mistake",
          wrong: "To start a new chapter on a fresh page, press Enter many times until the cursor reaches the next page.",
          right: "Insert a **page break** (Ctrl + Enter). The next chapter will always start at the top of a new page.",
          why: "Empty lines look fine until you add or delete a line above them. Then everything slides, and the chapter heading lands in the middle of a page. A page break stays in place.",
        },
        {
          type: "text",
          md: "Before printing, check spelling. A **red wavy underline** marks a word the dictionary does not know. Right-click it for suggestions, or run the full check with **F7** in Writer and Word, or *Tools → Spelling and grammar* in Google Docs. A spell checker cannot catch a wrong but real word, such as \"their\" for \"there\", so read the page yourself too. Then use **print preview** to see the page before you print.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the steps to add a table in order.",
            items: [
              "Place the cursor where the table should go",
              "Open the Insert Table option",
              "Enter the number of columns and rows",
              "Click Insert or OK",
              "Type the data, pressing Tab to move to the next cell",
            ],
            explain: "The cursor position decides where the table appears, so place it first. Data is typed after the empty table is created.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Practical exams often ask for a document with a table, an image, a header or footer and page numbers. Do not type page numbers yourself: insert the page number **field**, or the examiner will see the same number on every page.",
        },
        {
          type: "keypoints",
          items: [
            "A table has rows, columns and cells (cells = rows × columns); cells can be merged or split.",
            "Text wrapping sets how text flows around a picture: in line, wrapped, behind or in front.",
            "Margins, orientation, headers, footers and page numbers control the page layout.",
            "Use a page break (Ctrl + Enter), not many Enters, to start a new page.",
            "Spell check catches unknown words, not wrong real words; proofread and use print preview.",
          ],
        },
      ],
      flashcards: [
        { front: "Cell", back: "The box where a row and a column of a table meet." },
        { front: "Merge cells", back: "Join two or more neighbouring cells into one cell." },
        { front: "Text wrapping", back: "The setting that decides how text flows around a picture." },
        { front: "Header and footer", back: "Text in the top and bottom margins that repeats on every page." },
        { front: "Page break", back: "Forces the text after it onto a new page (Ctrl + Enter)." },
        { front: "Portrait vs landscape", back: "Portrait = tall page; landscape = wide page." },
        { front: "Red wavy underline", back: "Marks a possible spelling mistake (a word not in the dictionary)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which key moves the cursor to the next cell of a table?",
          options: ["Tab", "Enter", "Esc", "Caps Lock"],
          answer: 0,
          explain: "Tab jumps to the next cell. Enter starts a new line inside the same cell.",
        },
        {
          kind: "truefalse",
          q: "A header appears at the top of every page of the document.",
          answer: true,
          explain: "Headers and footers repeat on each page (unless you choose a different first page).",
        },
        {
          kind: "fill",
          q: "Joining two or more table cells into a single cell is called ___ cells.",
          answer: ["merging", "merge"],
          explain: "Merging is often used for a title row across the whole table.",
        },
        {
          kind: "numeric",
          q: "A marks table lists 30 students, one per row, plus one heading row. It has 5 columns. How many cells does it have?",
          answer: 155,
          explain: "Rows = 30 + 1 = 31. Cells = 31 × 5 = 155.",
          difficulty: 2,
          hint: "Do not forget the heading row.",
        },
        {
          kind: "mcq",
          q: "A wide chart does not fit across the page. The best fix is to change the:",
          options: ["Orientation to landscape", "Font to bold", "Line spacing to double", "Header text"],
          answer: 0,
          explain: "Landscape pages are wider, so wide tables and charts fit.",
        },
        {
          kind: "truefalse",
          q: "The spell checker will always catch \"Their is a test tomorrow.\"",
          answer: false,
          explain: "\"Their\" is a real word, so a spell checker may not mark it. Grammar checks sometimes help, but you must proofread.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these are page layout settings? (Choose all that apply)",
          options: ["Margins", "Orientation", "Page size", "Underline"],
          answers: [0, 1, 2],
          explain: "Margins, orientation and size apply to the page. Underline is character formatting.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const presentations: Topic = {
  slug: "c9-presentations",
  title: "Presentations",
  icon: "📽️",
  description: "Making slides with layouts and themes, the views of a presentation program, design tips, slide shows, pictures, transitions, animations and the slide master.",
  lessons: [
    {
      slug: "c9-presentation-basics",
      title: "Building a Presentation",
      summary: "What presentation software does, slides, layouts, placeholders and themes, the Normal, Outline, Slide Sorter and Notes views, good slide design and running a slide show.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌧️",
          caption: "Divya has to explain the monsoon to her class in five minutes. A few clear slides with a map and three key points help everyone follow her.",
        },
        {
          type: "text",
          md: "**Presentation software** is application software used to make and show a set of **slides**. A **slide** is one screen-sized page that can hold text, pictures, charts, tables, audio and video. The whole set of slides is a **presentation**.\n\nCommon presentation programs are **LibreOffice Impress**, **Microsoft PowerPoint** and **Google Slides**. Impress saves as **.odp** and PowerPoint as **.pptx**; each can open the other's files.",
        },
        {
          type: "text",
          md: "A **slide layout** is a ready arrangement of boxes on a slide, such as *Title Slide*, *Title and Content*, *Two Content* or *Blank*. The dotted boxes are **placeholders**: click inside one and type, or click its icon to add a picture or chart.\n\nA **theme** (Impress calls a ready design a **template** or **master slide**) gives every slide the same background, colours and fonts so the presentation looks consistent. Add a new slide from the *Slide* menu in Impress and Google Slides, or the *Home* tab → *New Slide* in PowerPoint.",
        },
        {
          type: "table",
          headers: ["View", "Best for"],
          rows: [
            ["**Normal**", "making and editing one slide at a time (the main working view)"],
            ["**Outline**", "typing and checking the titles and bullet points of all slides as text"],
            ["**Slide Sorter**", "seeing small pictures of all slides to rearrange, copy or delete them"],
            ["**Notes**", "writing **speaker notes**: reminders for the speaker that the audience does not see"],
            ["**Slide Show**", "showing the slides full screen to the audience"],
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Names in each app",
          md: "Impress and PowerPoint both have Normal, Outline, Slide Sorter and Notes views (in PowerPoint, *Notes Page*). Google Slides has a *grid view* that works like Slide Sorter, and a speaker notes box under each slide.",
        },
        {
          type: "example",
          title: "Planning a short presentation",
          problem: "Plan a 5-slide presentation on \"Saving Water at Home\". Choose a layout for each slide.",
          steps: [
            "Slide 1: *Title Slide* layout: the topic and your name and class.",
            "Slide 2: *Title and Content*: why water matters, in 3 short bullet points.",
            "Slide 3: *Two Content*: a photo of a leaking tap on one side, the litres wasted per day on the other.",
            "Slide 4: *Title and Content*: 4 tips, e.g. close the tap while brushing, use a bucket instead of a hose.",
            "Slide 5: *Title Only* or *Title Slide*: a short closing line and \"Thank you\".",
          ],
          answer: "Title Slide → Title and Content → Two Content → Title and Content → closing slide, all in one theme.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which view is best for moving slide 6 to come before slide 2?",
              options: ["Slide Sorter", "Notes", "Slide Show", "Outline"],
              answer: 0,
              explain: "Slide Sorter shows all slides as small pictures, so you can drag one to a new position.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "A good slide has everything I am going to say written on it, so I can read it out.",
          right: "Put only **key words and pictures** on the slide. Keep the full sentences in the **speaker notes** and speak to the audience.",
          why: "Full paragraphs feel safe because you will not forget anything. But the audience reads ahead and stops listening, and small text cannot be read from the back of the room.",
        },
        {
          type: "list",
          items: [
            "**One main idea per slide**, with a clear title.",
            "Follow the **6 × 6 guideline**: about 6 bullet points per slide and about 6 words per bullet.",
            "Use large text (around **24 pt or more** for points, bigger for titles) and only one or two fonts.",
            "Choose **high contrast**: dark text on a light background or light on dark.",
            "Prefer a picture or chart over a long list of numbers.",
            "Keep the same theme on every slide.",
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Good slide design or poor slide design?",
            groups: ["Good design", "Poor design"],
            items: [
              { text: "Short bullet points with a clear title", group: 0, hint: "Easy to read in a few seconds." },
              { text: "Dark blue text on a white background", group: 0, hint: "High contrast is easy to read." },
              { text: "Yellow text on a white background", group: 1, hint: "Low contrast is hard to read." },
              { text: "A full page of text in 12 pt font", group: 1, hint: "Too small and too much to read from the back." },
              { text: "Five different fonts on one slide", group: 1, hint: "Looks messy; keep to one or two fonts." },
              { text: "A labelled map instead of a long paragraph", group: 0, hint: "A picture explains faster." },
            ],
            explain: "Good slides are short, big, high-contrast and consistent. The speaker explains; the slide only supports.",
          },
        },
        {
          type: "text",
          md: "To start the slide show from the first slide, press **F5** in Impress and PowerPoint; **Shift + F5** starts from the current slide. In Google Slides, click the **Slideshow** button. Move forward with a click, the Space bar or the right arrow key, and press **Esc** to end the show.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn the **views** with their uses: questions ask \"Which view is used to rearrange slides?\" (Slide Sorter) or \"Where do you write notes for the speaker?\" (Notes view). Writing only the name without its use can cost half the marks in a 2-mark answer.",
        },
        {
          type: "keypoints",
          items: [
            "A presentation is a set of slides made in Impress (.odp), PowerPoint (.pptx) or Google Slides.",
            "Layouts arrange placeholders; a theme or template keeps all slides consistent.",
            "Views: Normal (edit), Outline (text), Slide Sorter (rearrange), Notes (speaker notes), Slide Show (present).",
            "Good slides: one idea, few words, big text, high contrast, same theme.",
            "F5 starts the show from the beginning (Impress, PowerPoint); Esc ends it.",
          ],
        },
      ],
      flashcards: [
        { front: "Slide", back: "One page of a presentation that can hold text, pictures, charts, audio and video." },
        { front: "Placeholder", back: "A dotted box on a slide layout where you click to add text or an object." },
        { front: "Slide layout", back: "A ready arrangement of placeholders, e.g. Title Slide, Title and Content, Blank." },
        { front: "Slide Sorter view", back: "Shows small pictures of all slides so you can rearrange, copy or delete them." },
        { front: "Speaker notes", back: "Notes for the presenter, written in Notes view; the audience does not see them." },
        { front: "6 × 6 guideline", back: "About 6 bullet points per slide and about 6 words per bullet." },
        { front: ".odp / .pptx", back: "Presentation file formats of LibreOffice Impress / Microsoft PowerPoint." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The dotted boxes on a new slide where you click to type are called:",
          options: ["Placeholders", "Cells", "Transitions", "Footers"],
          answer: 0,
          explain: "Placeholders hold the place for a title, text, picture or chart.",
        },
        {
          kind: "fill",
          q: "Notes that only the presenter sees are written in the ___ view.",
          answer: ["notes", "notes page"],
          explain: "Notes view (Notes Page in PowerPoint) shows the slide with a box for speaker notes.",
        },
        {
          kind: "truefalse",
          q: "Pressing F5 in Impress or PowerPoint starts the slide show from the first slide.",
          answer: true,
          explain: "F5 starts from the beginning; Shift + F5 starts from the current slide.",
        },
        {
          kind: "mcq",
          q: "Which is the best colour choice for slide text on a white background?",
          options: ["Dark blue", "Light yellow", "Pale grey", "White"],
          answer: 0,
          explain: "Dark text on a light background gives high contrast. Yellow, pale grey and white almost vanish on white.",
        },
        {
          kind: "multi",
          q: "Which of these are views in LibreOffice Impress? (Choose all that apply)",
          options: ["Normal", "Outline", "Slide Sorter", "Notes", "Print Layout"],
          answers: [0, 1, 2, 3],
          explain: "Impress has Normal, Outline, Notes and Slide Sorter views. Print Layout is a view in a word processor.",
          difficulty: 2,
          hint: "One option belongs to word processors.",
        },
        {
          kind: "mcq",
          q: "Anu's slide has 14 bullet points in small font. What should she do?",
          options: ["Split it into two or three slides with key words only", "Make the font even smaller to fit more", "Add more colours to each line", "Read every line aloud slowly"],
          answer: 0,
          explain: "Following one idea per slide and the 6 × 6 guideline keeps slides readable.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put these steps for making a presentation in a sensible order.",
          items: ["Choose a theme or template", "Add slides with suitable layouts", "Type text and insert pictures", "Check in Slide Sorter view and rearrange", "Run the slide show to rehearse"],
          explain: "Set the look first, build and fill the slides, check the order, then rehearse.",
        },
      ],
    },

    {
      slug: "c9-presentation-media-effects",
      title: "Pictures, Transitions and Animations",
      summary: "Insert pictures, shapes, tables, charts and media; the difference between a transition and an animation; entrance, emphasis, exit and motion path effects; and the slide master.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Rahul's slide on the water cycle shows everything at once, and his classmates get lost. If the arrows appeared one by one as he spoke (evaporation, then condensation, then rain), the idea would be much clearer. Effects, used with care, help a story unfold.",
        },
        {
          type: "text",
          md: "You can place many kinds of objects on a slide: **pictures**, **shapes** (arrows, circles, callout boxes), **tables**, **charts**, **audio** and **video**. In all three apps they are added from the **Insert** menu or tab. Select an object to move it, resize it with its corner handles, or bring it to the front or send it to the back.",
        },
        {
          type: "heading",
          text: "Transitions and animations",
        },
        {
          type: "table",
          headers: ["", "Transition", "Animation"],
          rows: [
            ["Applied to", "a whole **slide**", "one **object** on a slide (a picture, a text box, a bullet point)"],
            ["When it plays", "while one slide changes to the next", "while the slide is on screen"],
            ["Examples", "fade, push, wipe, cover", "fly in, appear, spin, fade out"],
            ["Where (PowerPoint)", "Transitions tab", "Animations tab"],
            ["Where (Impress)", "Slide Transition panel in the sidebar", "Animation panel in the sidebar"],
            ["Where (Google Slides)", "Slide → Transition", "Insert → Animation"],
          ],
        },
        {
          type: "mistake",
          wrong: "Transitions and animations are the same: both just make things move.",
          right: "A **transition** is the effect *between two slides*. An **animation** is the effect on *an object within a slide*.",
          why: "Both are moving effects added to a slide show, so they look alike. The test is what moves: the whole slide changing (transition) or one item on it (animation).",
        },
        {
          type: "table",
          headers: ["Animation type", "What it does", "Example"],
          rows: [
            ["**Entrance**", "makes an object appear", "a bullet point flies in"],
            ["**Emphasis**", "draws attention to an object already on the slide", "a word grows or changes colour"],
            ["**Exit**", "makes an object leave the slide", "a picture fades out"],
            ["**Motion path**", "moves an object along a line or curve", "a ball rolls across the slide"],
          ],
        },
        {
          type: "example",
          title: "Making bullet points appear one by one",
          problem: "On a slide with 3 bullet points about the water cycle, make each point appear only when Rahul clicks.",
          steps: [
            "Click the text box that holds the bullet points to select it.",
            "Open the animation options: the *Animations* tab in PowerPoint, the *Animation* panel in the Impress sidebar, or *Insert → Animation* in Google Slides.",
            "Add an **entrance** effect such as *Appear* or *Fade*.",
            "Set it to start **on click** and to play **by paragraph** (one bullet at a time).",
            "Run the slide show from this slide (Shift + F5 in PowerPoint and Impress) to test it.",
          ],
          answer: "An entrance animation on the text box, started on click, by paragraph: each click shows the next point.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Slide 3 should \"push\" slide 2 off the screen as it comes in. Which feature is this?",
              options: ["Transition", "Animation", "Slide layout", "Speaker notes"],
              answer: 0,
              explain: "The effect plays while the show moves from one slide to the next, so it is a transition.",
            },
          ],
        },
        {
          type: "text",
          md: "The **slide master** is a special background slide that controls the look of every slide: background, fonts, colours, and anything placed on it, such as a school logo. Change the master once and every slide changes. Open it from *View → Master Slide* in Impress, *View → Slide Master* in PowerPoint, or *Slide → Edit theme* in Google Slides.\n\nBefore sharing, save the file and, if the other person may not have the same program, also export it as a **PDF** (animations and transitions will not play in a PDF).",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Your school logo must appear on all 20 slides. What is the best way?",
            emoji: "🏫",
            options: ["Put the logo once on the slide master", "Paste the logo on each slide one by one", "Add the logo as a transition", "Write the logo's name in the speaker notes"],
            answer: 0,
            trap: 1,
            explain: "Pasting 20 times works but is slow and the logos may end up in different places. The **slide master** puts it on every slide in one step, and a change there updates all slides.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Differentiate between transition and animation\" is asked often. Write the same points for both: *applied to* (slide / object) and *when it plays* (between slides / within a slide), with one example each.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "An exit animation makes an object leave the slide.",
              answer: true,
              explain: "Entrance brings an object in; exit takes it out.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Pictures, shapes, tables, charts, audio and video are added from the Insert menu or tab.",
            "Transition = effect between slides; animation = effect on an object within a slide.",
            "Animation types: entrance, emphasis, exit and motion path.",
            "The slide master sets the background, fonts and repeated items (like a logo) for all slides.",
            "Use effects only where they help the audience follow the idea.",
          ],
        },
      ],
      flashcards: [
        { front: "Transition", back: "A visual effect shown when the slide show moves from one slide to the next." },
        { front: "Animation", back: "A visual effect applied to one object (text, picture, shape) within a slide." },
        { front: "Entrance effect", back: "An animation that makes an object appear on the slide." },
        { front: "Emphasis effect", back: "An animation that draws attention to an object already on the slide." },
        { front: "Motion path", back: "An animation that moves an object along a set line or curve." },
        { front: "Slide master", back: "The master slide that controls the background, fonts and repeated items of every slide." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A word on a slide should grow bigger to draw attention while you talk. Which animation type is this?",
          options: ["Emphasis", "Entrance", "Exit", "Transition"],
          answer: 0,
          explain: "The word is already on the slide; making it grow draws attention, which is emphasis.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "A transition is applied to a single picture on a slide.",
          answer: false,
          explain: "A transition is applied to a whole slide. Effects on a single picture are animations.",
        },
        {
          kind: "fill",
          q: "To place the same logo on every slide in one step, put it on the slide ___.",
          answer: ["master"],
          explain: "The slide master controls the look of all slides.",
        },
        {
          kind: "mcq",
          q: "In PowerPoint, the Fly In effect for a text box is found on the:",
          options: ["Animations tab", "Transitions tab", "File tab", "Review tab"],
          answer: 0,
          explain: "Effects on objects are animations, so they are on the Animations tab.",
        },
        {
          kind: "multi",
          q: "Which of these are animation types? (Choose all that apply)",
          options: ["Entrance", "Exit", "Motion path", "Slide Sorter"],
          answers: [0, 1, 2],
          explain: "Entrance, emphasis, exit and motion path are animation types. Slide Sorter is a view.",
        },
        {
          kind: "order",
          q: "Put the steps to animate a picture in order.",
          items: ["Select the picture", "Open the animation options", "Choose an effect such as Fade", "Set when it starts, e.g. on click", "Play the slide show to test it"],
          explain: "Always select the object first; testing in the slide show comes last.",
        },
        {
          kind: "mcq",
          q: "Why should you not add a different flashy effect to every object?",
          options: ["Too many effects distract the audience from the message", "Effects delete the slide's text", "Slides with effects cannot be saved", "Effects only work on the first slide"],
          answer: 0,
          explain: "Effects should support the story. Too many pull attention away from what you are saying.",
          difficulty: 2,
          hint: "Think of the audience, not the software.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const spreadsheets: Topic = {
  slug: "c9-spreadsheets",
  title: "Spreadsheets",
  icon: "📊",
  description: "Rows, columns and cells, entering data, formulas and operator order, functions, relative and absolute references, sorting, filtering and charts.",
  lessons: [
    {
      slug: "c9-spreadsheet-basics",
      title: "Cells, Data and Formulas",
      summary: "What a spreadsheet is, rows, columns, cells, cell addresses and ranges, kinds of data, and writing formulas with operators in the right order.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🧮",
          caption: "Mrs. Fernandes has the marks of 40 students in 5 subjects. On paper, adding 200 numbers takes an hour. In a spreadsheet, one formula copied down does it in seconds, and the totals fix themselves if a mark changes.",
        },
        {
          type: "text",
          md: "A **spreadsheet** program arranges data in a grid and calculates with it. Common ones are **LibreOffice Calc** (saves as **.ods**), **Microsoft Excel** (**.xlsx**) and **Google Sheets** (in the browser).\n\nOne file can hold several **sheets** (worksheets), shown as tabs at the bottom. Excel calls the whole file a **workbook**; Calc and Google Sheets call it a spreadsheet.",
        },
        {
          type: "table",
          headers: ["Term", "Meaning", "Example"],
          rows: [
            ["**Row**", "a line of cells across, named by a number", "row 5"],
            ["**Column**", "a line of cells down, named by letters", "column C"],
            ["**Cell**", "the box where a row and a column meet", ""],
            ["**Cell address** (cell reference)", "column letter followed by row number", "**C5**"],
            ["**Active cell**", "the selected cell, with a dark border, where typing goes", ""],
            ["**Range**", "a block of cells from one corner to the opposite corner, written with a colon", "**B2:B6** (5 cells), **A1:C3** (9 cells)"],
            ["**Formula bar**", "shows and edits the contents of the active cell", ""],
          ],
        },
        {
          type: "text",
          md: "A cell can hold **text** (labels such as \"Name\"), **numbers**, **dates** or a **formula**. By default, text lines up on the left of the cell and numbers line up on the right. If a number lines up on the left, the program may have stored it as text, and it will not calculate properly.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many cells are in the range A1:C4?",
              answer: 12,
              explain: "Columns A, B, C = 3 columns; rows 1 to 4 = 4 rows; 3 × 4 = 12 cells.",
            },
          ],
        },
        {
          type: "heading",
          text: "Formulas",
        },
        {
          type: "text",
          md: "A **formula** is an instruction to calculate. It always begins with an **equals sign (=)**, for example `=B2+C2`. The cell shows the **result**; the formula bar shows the formula.\n\nUse **cell references** instead of typing the numbers. Then, if a value changes, the result updates by itself. The arithmetic operators are `+` add, `-` subtract, `*` multiply, `/` divide and `^` power.",
        },
        {
          type: "table",
          headers: ["Order", "Operator", "Example", "Result"],
          rows: [
            ["1st", "brackets `( )`", "`=(2+3)*4`", "20"],
            ["2nd", "power `^`", "`=2^3`", "8"],
            ["3rd", "multiply `*` and divide `/`, left to right", "`=10/2*5`", "25"],
            ["4th", "add `+` and subtract `-`, left to right", "`=2+3*4`", "14"],
          ],
        },
        {
          type: "example",
          title: "Total and percentage of marks",
          problem: "Row 2 has Aman's marks: B2 = 72 (English), C2 = 85 (Maths), D2 = 68 (Science). Each paper is out of 100. Write formulas for the total in E2 and the percentage in F2.",
          steps: [
            "Total in E2: `=B2+C2+D2` gives 72 + 85 + 68 = **225**.",
            "The maximum is 3 × 100 = 300 marks.",
            "Percentage in F2: `=E2/300*100`. Divide and multiply go left to right: 225 ÷ 300 = 0.75, then × 100 = **75**.",
            "If Aman's Maths mark is corrected to 95, both E2 and F2 update by themselves, because they use references.",
          ],
          answer: "E2: `=B2+C2+D2` → 225. F2: `=E2/300*100` → 75.",
        },
        {
          type: "mistake",
          wrong: "To add B2 and C2, I type `B2+C2` in the cell.",
          right: "Type `=B2+C2`. Without the equals sign, the program treats what you type as plain text and shows the letters B2+C2.",
          why: "On paper we write a sum without an equals sign at the start, so it feels unnecessary. The spreadsheet needs the = to know that the entry is something to calculate.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does the formula `=10-2*3` show?",
            emoji: "🧮",
            options: ["4", "24", "18", "-4"],
            answer: 0,
            trap: 1,
            explain: "Multiplication comes before subtraction: 2 × 3 = 6, then 10 − 6 = **4**. Working left to right (10 − 2 = 8, then 8 × 3 = 24) is the common slip. To get 24, write `=(10-2)*3`.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When a question asks you to \"write the formula\", always start with **=** and use cell addresses (`=B2*C2`), not the numbers. Answers like `=72*3` or a formula without `=` usually get no marks.",
        },
        {
          type: "keypoints",
          items: [
            "A spreadsheet is a grid of rows (numbers) and columns (letters); a cell address is like C5.",
            "A range is written with a colon, e.g. B2:B6; cells in a range = columns × rows.",
            "Text lines up left and numbers right by default.",
            "Every formula starts with =; use cell references so results update by themselves.",
            "Order: brackets, then `^`, then `*` and `/`, then `+` and `-` (left to right within a level).",
          ],
        },
      ],
      flashcards: [
        { front: "Cell address", back: "The column letter followed by the row number, e.g. D7." },
        { front: "Range", back: "A rectangular block of cells written first:last, e.g. A1:A10." },
        { front: "Active cell", back: "The selected cell, with a dark border, where data you type will go." },
        { front: "Formula", back: "An instruction to calculate; it always starts with =, e.g. =A1+A2." },
        { front: "Operator order", back: "Brackets → `^` → `*` and `/` → `+` and `-`; left to right at the same level." },
        { front: ".ods / .xlsx", back: "Spreadsheet file formats of LibreOffice Calc / Microsoft Excel." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the address of the cell in column D and row 12?",
          options: ["D12", "12D", "D:12", "R12D"],
          answer: 0,
          explain: "Column letter first, then the row number: D12.",
        },
        {
          kind: "numeric",
          q: "What will the formula =(4+6)/2^2 show?",
          answer: 2.5,
          explain: "Brackets first: 10. Then power: 2^2 = 4. Then divide: 10 ÷ 4 = 2.5.",
          difficulty: 3,
          hint: "Do the brackets, then the power, then the division.",
        },
        {
          kind: "truefalse",
          q: "By default, numbers line up on the left side of a cell.",
          answer: false,
          explain: "Numbers line up on the right and text on the left.",
        },
        {
          kind: "fill",
          q: "Every formula in a spreadsheet must begin with the ___ sign.",
          answer: ["=", "equals", "equal", "equal to"],
          explain: "The equals sign tells the program to calculate.",
        },
        {
          kind: "numeric",
          q: "How many cells are in the range B3:E7?",
          answer: 20,
          explain: "Columns B to E = 4; rows 3 to 7 = 5; 4 × 5 = 20.",
          difficulty: 2,
          hint: "Count the columns and the rows, then multiply.",
        },
        {
          kind: "mcq",
          q: "A1 = 50 and A2 = 30. Which formula is best for their difference?",
          options: ["=A1-A2", "=50-30", "A1-A2", "=A1+A2"],
          answer: 0,
          explain: "`=A1-A2` uses references, so it updates if the values change. `=50-30` gives 20 now but never updates; `A1-A2` without = is just text.",
        },
        {
          kind: "mcq",
          q: "Which operator is done first in =8+6/2?",
          options: ["Division", "Addition", "Both at the same time", "Whichever comes first from the left"],
          answer: 0,
          explain: "Division comes before addition: 6 ÷ 2 = 3, then 8 + 3 = 11.",
        },
      ],
    },

    {
      slug: "c9-spreadsheet-functions",
      title: "Functions and Cell References",
      summary: "SUM, AVERAGE, MAX, MIN, COUNT and IF; the fill handle; relative, absolute and mixed cell references and when to use the dollar sign.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Adding 40 cells as `=B2+B3+B4+...` is slow and easy to get wrong. Spreadsheets have **functions**: ready-made formulas with a name. A function is written as `=NAME(arguments)`, where the **arguments** are the values or range it works on, for example `=SUM(B2:B41)`.",
        },
        {
          type: "table",
          headers: ["Function", "What it gives", "Example"],
          rows: [
            ["**SUM**", "the total of the numbers", "`=SUM(B2:B6)`"],
            ["**AVERAGE**", "the mean of the numbers (empty cells are left out)", "`=AVERAGE(B2:B6)`"],
            ["**MAX**", "the largest number", "`=MAX(B2:B6)`"],
            ["**MIN**", "the smallest number", "`=MIN(B2:B6)`"],
            ["**COUNT**", "how many cells contain numbers", "`=COUNT(B2:B6)`"],
          ],
        },
        {
          type: "text",
          md: "The **IF** function chooses between two results: `=IF(condition, value if true, value if false)`. For example, `=IF(B2>=33, \"Pass\", \"Fail\")` shows Pass when B2 is 33 or more. Text answers go inside double quotes.\n\nLibreOffice Calc may expect a **semicolon** between arguments instead of a comma: `=IF(B2>=33; \"Pass\"; \"Fail\")`. Excel and Google Sheets in English use commas.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "A1:A5 hold 40, 25, 35, (empty), 50. Match each formula to its result.",
            pairs: [
              ["=SUM(A1:A5)", "150"],
              ["=AVERAGE(A1:A5)", "37.5"],
              ["=MAX(A1:A5)", "50"],
              ["=MIN(A1:A5)", "25"],
              ["=COUNT(A1:A5)", "4"],
            ],
            explain: "There are only **4** numbers, so COUNT is 4 and AVERAGE = 150 ÷ 4 = 37.5. The empty cell is not counted as 0.",
          },
        },
        {
          type: "heading",
          text: "Copying formulas: relative references",
        },
        {
          type: "text",
          md: "The small square at the bottom-right corner of the active cell is the **fill handle**. Drag it down or across to copy a formula into the next cells (this is called **AutoFill**; it also continues series like 1, 2, 3 or Mon, Tue, Wed).\n\nNormal references like `B2` are **relative references**. When a formula is copied, they change to match the new position. `=B2*C2` in row 2 becomes `=B3*C3` in row 3 and `=B4*C4` in row 4. That is why one formula can work for every row.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "D2 has `=B2*C2`. It is copied down to D5. What formula is in D5?",
              options: ["`=B5*C5`", "`=B2*C2`", "`=B5*C2`", "`=E5*F5`"],
              answer: 0,
              explain: "The formula moved down 3 rows, so each row number grows by 3: B2 → B5, C2 → C5.",
            },
          ],
        },
        {
          type: "heading",
          text: "Absolute and mixed references",
        },
        {
          type: "text",
          md: "Sometimes one cell must stay fixed, such as a tax rate kept in one cell. A dollar sign `$` locks it. `$F$1` is an **absolute reference**: it never changes when copied. `$F1` locks only the column and `F$1` locks only the row; these are **mixed references**.\n\nTo switch between the kinds while typing a formula, press **F4** in Excel and Google Sheets, or **Shift + F4** in Calc.",
        },
        {
          type: "example",
          title: "Using an absolute reference",
          problem: "A shop sheet has prices in B2:B5 and a GST rate of 18% (0.18) in F1. Write one formula in C2 that can be copied down to find the GST on each price.",
          steps: [
            "For row 2 the GST is price × rate: B2 × F1.",
            "When copied down, the price must change (B3, B4, B5) but the rate must stay F1.",
            "So keep B2 relative and lock F1: `=B2*$F$1`.",
            "Copied to C3 it becomes `=B3*$F$1`; to C4, `=B4*$F$1`. If B2 = ₹500, C2 shows 90.",
          ],
          answer: "`=B2*$F$1` in C2, then drag the fill handle down to C5.",
        },
        {
          type: "mistake",
          wrong: "Write `=B2*F1` and drag it down; it will use the rate in F1 for every row.",
          right: "Write `=B2*$F$1`. Without the `$` signs, the copy in C3 becomes `=B3*F2`, which points to an empty cell, so the GST shows 0.",
          why: "The formula is right for the first row, so it seems right everywhere. But relative references move with the copy, including the one that should have stayed still.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A favourite question: \"Formula `=A1+$B$1` in C1 is copied to C3. What is the new formula?\" Move only the parts without `$`: the answer is `=A3+$B$1`. Write the full formula with the = sign.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In `$A$5`, both the column A and the row 5 stay fixed when the formula is copied.",
              answer: true,
              explain: "A `$` before the column letter locks the column and a `$` before the row number locks the row.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Functions are ready-made formulas: SUM, AVERAGE, MAX, MIN, COUNT, IF.",
            "COUNT and AVERAGE leave out empty cells.",
            "Drag the fill handle to copy a formula or continue a series (AutoFill).",
            "Relative references (B2) change when copied; absolute (`$B$2`) stay fixed; mixed (`$B2`, `B$2`) lock one part.",
            "F4 (Excel, Google Sheets) or Shift + F4 (Calc) switches reference type.",
          ],
        },
      ],
      flashcards: [
        { front: "Function", back: "A ready-made formula with a name and arguments, e.g. =SUM(A1:A10)." },
        { front: "COUNT", back: "Counts how many cells in a range contain numbers." },
        { front: "IF function", back: "=IF(condition, value if true, value if false)." },
        { front: "Fill handle", back: "The small square at the bottom-right of the active cell; drag it to copy or continue a series." },
        { front: "Relative reference", back: "A reference like B2 that changes when the formula is copied." },
        { front: "Absolute reference", back: "A reference like `$B$2` that stays the same when the formula is copied." },
        { front: "Mixed reference", back: "Only the column (`$B2`) or only the row (`B$2`) is locked." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which function finds the highest marks in C2:C41?",
          options: ["=MAX(C2:C41)", "=SUM(C2:C41)", "=COUNT(C2:C41)", "=HIGH(C2:C41)"],
          answer: 0,
          explain: "MAX gives the largest value. There is no HIGH function.",
        },
        {
          kind: "fill",
          q: "A reference such as `$D$4`, which does not change when copied, is called an ___ reference.",
          answer: ["absolute"],
          explain: "Absolute references are locked with `$` signs.",
        },
        {
          kind: "mcq",
          q: "E1 has `=C1*$A$1`. It is copied to E4. What is the new formula?",
          options: ["`=C4*$A$1`", "`=C4*$A$4`", "`=C1*$A$1`", "`=E4*$A$1`"],
          answer: 0,
          explain: "C1 is relative, so it moves down 3 rows to C4. `$A$1` is absolute and stays.",
          difficulty: 2,
          hint: "Only the parts without `$` change.",
        },
        {
          kind: "numeric",
          q: "B1:B4 hold 10, 20, 30 and 40. What does =AVERAGE(B1:B4) show?",
          answer: 25,
          explain: "Total = 100; there are 4 numbers; 100 ÷ 4 = 25.",
        },
        {
          kind: "truefalse",
          q: "=COUNT(A1:A10) counts the empty cells in the range.",
          answer: false,
          explain: "COUNT counts only cells that contain numbers.",
        },
        {
          kind: "mcq",
          q: "B2 = 28. What does =IF(B2>=33, \"Pass\", \"Fail\") show?",
          options: ["Fail", "Pass", "28", "TRUE"],
          answer: 0,
          explain: "28 is not 33 or more, so the condition is false and the formula shows the third argument, Fail.",
        },
        {
          kind: "multi",
          q: "Which of these are mixed references? (Choose all that apply)",
          options: ["`$C7`", "`C$7`", "`$C$7`", "`C7`"],
          answers: [0, 1],
          explain: "`$C7` locks only the column and `C$7` only the row. `$C$7` is absolute and `C7` is relative.",
          difficulty: 3,
          hint: "A mixed reference has exactly one `$`.",
        },
      ],
    },

    {
      slug: "c9-spreadsheet-sort-charts",
      title: "Sorting, Filtering, Formatting and Charts",
      summary: "Sort data in ascending or descending order, filter rows, format numbers and cells, and choose and create column, bar, line and pie charts.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "The class marks sheet is ready. Now the teacher wants the toppers first, only the students who scored below 40 for extra classes, and a chart for the parents' meeting. Sorting, filtering and charts turn a sheet of numbers into answers.",
        },
        {
          type: "text",
          md: "**Sorting** arranges rows in order of one column. **Ascending** order goes from smallest to largest, A to Z, or oldest to newest date. **Descending** order goes the other way. Select the whole table, then use *Data → Sort* (the *Data* menu in Calc and Google Sheets, the *Data* tab in Excel) and pick the column to sort by.\n\n**Filtering** hides the rows that do not match a condition, without deleting them. Turn it on with *Data → AutoFilter* in Calc, *Data → Filter* in Excel or *Data → Create a filter* in Google Sheets; small arrow buttons appear in the heading row.",
        },
        {
          type: "mistake",
          wrong: "To sort by marks, I select only the Marks column and sort it.",
          right: "Select the **whole table** (or one cell inside it) so that every row moves together. Sorting one column alone mixes up whose marks are whose.",
          why: "The marks column does come out in order, so it looks right. But the names stay where they were, so Riya may now show Kabir's marks.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "To show the highest marks at the top, sort the Marks column in:",
              options: ["Descending order", "Ascending order", "Alphabetical order", "Any order"],
              answer: 0,
              explain: "Descending goes from largest to smallest, so the highest comes first.",
            },
          ],
        },
        {
          type: "text",
          md: "**Formatting cells** makes the data easy to read without changing the values: number formats such as **currency** (₹ 1,250.00), **percentage** (75%) and a set number of **decimal places**; bold headings; borders; and **merge and centre** for a title across columns. **Conditional formatting** colours cells automatically by a rule, such as red fill for marks below 33.",
        },
        {
          type: "heading",
          text: "Charts",
        },
        {
          type: "table",
          headers: ["Chart", "Best for", "Example"],
          rows: [
            ["**Column chart** (vertical bars)", "comparing values of different items", "marks of 5 students"],
            ["**Bar chart** (horizontal bars)", "comparing items, especially with long names", "votes for each club"],
            ["**Line chart**", "showing change over time", "temperature each month"],
            ["**Pie chart**", "showing parts of one whole", "how a ₹1,000 budget is spent"],
          ],
        },
        {
          type: "text",
          md: "To make a chart, select the data with its headings and choose *Insert → Chart* (Calc and Google Sheets) or a chart from the *Insert* tab (Excel). A chart has a **chart title**, an **X-axis** (horizontal, often the categories), a **Y-axis** (vertical, the values), a **legend** (the key to colours) and optional **data labels** (the values shown on the bars or slices). If the data changes, the chart updates.",
        },
        {
          type: "example",
          title: "Choosing the right chart",
          problem: "Pick a chart for each: (a) Ishaan's family spends its monthly money on food, rent, travel and savings; (b) rainfall in Chennai for each month of a year; (c) the number of books read by each of 6 friends.",
          steps: [
            "(a) Four parts that make up one total: a **pie chart** shows each share of the whole.",
            "(b) One value changing month by month: a **line chart** shows the rise and fall over time.",
            "(c) Separate friends compared side by side: a **column chart** (or bar chart).",
          ],
          answer: "(a) Pie, (b) line, (c) column.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which chart fits each set of data best?",
            groups: ["Pie chart", "Line chart", "Column chart"],
            items: [
              { text: "Share of each crop in a farm's total area", group: 0, hint: "Parts of one whole." },
              { text: "How the class spent its ₹2,000 picnic fund", group: 0, hint: "The parts add up to one total." },
              { text: "Your height each year from age 8 to 14", group: 1, hint: "Change over time." },
              { text: "Daily price of tomatoes for a month", group: 1, hint: "Values over a series of days." },
              { text: "Runs scored by each player in a match", group: 2, hint: "Compare separate items." },
              { text: "Number of students in each house", group: 2, hint: "Compare groups side by side." },
            ],
            explain: "Ask: is it parts of a whole (pie), change over time (line), or a comparison of separate items (column)?",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Chart questions give a situation and ask which chart to use **and why**. Write the chart and the reason in one line, e.g. \"Line chart, because it shows change over time.\" Also remember that a pie chart shows only **one** data series.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "Filtering deletes the rows that do not match the condition.",
              answer: false,
              explain: "Filtering only hides them. Clear the filter and they come back.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Sort the whole table so rows stay together; ascending = small to large or A to Z.",
            "A filter hides non-matching rows without deleting them.",
            "Cell formats (currency, percentage, decimals) change the look, not the value.",
            "Column/bar: compare items; line: change over time; pie: parts of a whole.",
            "Chart parts: title, X-axis, Y-axis, legend, data labels.",
          ],
        },
      ],
      flashcards: [
        { front: "Ascending order", back: "Smallest to largest, A to Z, or earliest to latest date." },
        { front: "Descending order", back: "Largest to smallest, Z to A, or latest to earliest date." },
        { front: "Filter", back: "Shows only the rows that match a condition and hides the rest." },
        { front: "Conditional formatting", back: "Formats cells automatically by a rule, e.g. red for marks below 33." },
        { front: "Pie chart", back: "Shows how parts make up one whole." },
        { front: "Line chart", back: "Shows how a value changes over time." },
        { front: "Legend", back: "The key that tells which colour or pattern stands for which data series." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which chart is best for showing the percentage of students in each of four houses of the school?",
          options: ["Pie chart", "Line chart", "Scatter chart", "No chart can show this"],
          answer: 0,
          explain: "The four houses together make up all the students: parts of one whole.",
        },
        {
          kind: "truefalse",
          q: "Sorting names in ascending order puts them from A to Z.",
          answer: true,
          explain: "For text, ascending is alphabetical A to Z.",
        },
        {
          kind: "fill",
          q: "The key on a chart that tells which colour stands for which data is called the ___.",
          answer: ["legend"],
          explain: "The legend matches each colour to its data series.",
        },
        {
          kind: "mcq",
          q: "Kabir selected only the Marks column and sorted it. What went wrong?",
          options: ["The marks no longer match the right names", "The marks were deleted", "The file could not be saved", "Nothing; this is correct"],
          answer: 0,
          explain: "Only that column moved, so the rows broke apart. Select the whole table before sorting.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these change only how a number looks, not its value? (Choose all that apply)",
          options: ["Currency format", "Percentage format", "Showing fewer decimal places", "Typing a new number"],
          answers: [0, 1, 2],
          explain: "Number formats change the display. Typing a new number changes the value itself.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which chart best shows how the number of visitors to a museum changed week by week over six months?",
          options: ["Line chart", "Pie chart", "A table only", "Legend"],
          answer: 0,
          explain: "The value changes over time, which is what a line chart shows.",
        },
        {
          kind: "order",
          q: "Put the steps to make a chart in order.",
          items: ["Select the data with its headings", "Open the Insert menu or tab and choose a chart", "Choose the chart type", "Add a chart title and labels", "Check the chart and move it into place"],
          explain: "The program needs the data selected first; titles and labels are added after choosing the type.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const python: Topic = {
  slug: "c9-getting-started-with-python",
  title: "Getting Started with Python",
  icon: "🐍",
  description: "What Python is, interactive and script mode, print(), comments, variables and data types, operators, input(), if–elif–else, for and while loops, and lists.",
  lessons: [
    {
      slug: "c9-python-first-steps",
      title: "Python, print() and Variables",
      summary: "What Python is and where it is used, interactive and script mode, print() and comments, variables, naming rules (identifiers), keywords and the data types int, float, str and bool.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "A **program** is a set of instructions that tells a computer what to do, written in a **programming language**. **Python** is a popular **high-level** language: its instructions look close to English, so it is easy to read and learn.\n\nPython was created by **Guido van Rossum** and first released in **1991**. It is **free and open source** and is used for artificial intelligence, data science, websites, games, robotics and automating everyday jobs.",
        },
        {
          type: "text",
          md: "Python is an **interpreted** language: a program called the **interpreter** reads and runs the code **one line at a time**, and stops at the first line with an error.\n\nYou can work in two modes. In **interactive mode** (the Python shell), you type one statement after the `>>>` prompt and see the answer at once, e.g. typing `5 + 3` shows `8`. It is good for quick tests, but the work is not saved. In **script mode**, you write a whole program in a file ending in **.py**, save it and run it (in **IDLE**, Python's own editor, press **F5**). Other editors include Jupyter Notebook and online editors like the one below.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Press Run, then change the text and run again.",
          code: r`# My first Python program
print("Namaste, Python!")
print("Total marks:", 72 + 85 + 68)
print(10 * 3)
print("10 * 3")`,
        },
        {
          type: "text",
          md: "`print()` is a **function** that shows output on the screen. Text must be inside quotes (single or double); such text is called a **string**. Items separated by commas are printed with a space between them. `print(10 * 3)` shows 30, but `print(\"10 * 3\")` shows the characters exactly, because anything in quotes is text.\n\nA line starting with **#** is a **comment**. Python ignores it; it is a note for people reading the code.",
        },
        {
          type: "heading",
          text: "Variables and data types",
        },
        {
          type: "text",
          md: "A **variable** is a name that refers to a value stored in memory, like a labelled box. You create one with the **assignment operator** `=`: `age = 14` puts 14 into the box called `age`. The value can be changed later.\n\nThe name of a variable is an **identifier**. Rules: it may use letters, digits and the underscore `_`; it **cannot start with a digit**; it **cannot contain spaces or symbols** like `-` or `@`; and it cannot be a **keyword** (a word Python keeps for itself, such as `if`, `else`, `for`, `while`, `True` and `False`). Python is **case-sensitive**: `Marks` and `marks` are two different names.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "type() tells you the data type of a value.",
          code: r`name = "Kavya"
age = 14
height = 1.52
is_student = True

print(name, "is", age, "years old.")
print(type(name))
print(type(age))
print(type(height))
print(type(is_student))

age = age + 1      # a variable can change
print("Next year:", age)`,
        },
        {
          type: "table",
          headers: ["Data type", "Holds", "Examples"],
          rows: [
            ["**int** (integer)", "whole numbers, positive or negative", "`14`, `-5`, `0`"],
            ["**float**", "numbers with a decimal point", "`1.52`, `3.0`, `-0.5`"],
            ["**str** (string)", "text in quotes", "`\"Kavya\"`, `'9B'`, `\"123\"`"],
            ["**bool** (Boolean)", "only `True` or `False`", "`True`, `False`"],
          ],
        },
        {
          type: "example",
          title: "Predicting the output",
          problem: "What does this program print?\n\n`x = 5`  then  `x = x + 2`  then  `print(\"x\", x)`",
          steps: [
            "`x = 5` stores 5 in x.",
            "`x = x + 2`: Python works out the right side first, 5 + 2 = 7, and then stores 7 back in x. The old 5 is replaced.",
            "`print(\"x\", x)`: the first item is in quotes, so the letter x is printed as text; the second is the variable, so its value 7 is printed. A comma puts a space between them.",
          ],
          answer: "`x 7`",
        },
        {
          type: "mistake",
          wrong: "`print(\"age\")` and `print(age)` do the same thing.",
          right: "`print(\"age\")` prints the word **age**. `print(age)` prints the **value** stored in the variable, such as 14.",
          why: "Both lines contain the same word, so they look alike. The quotes make all the difference: inside quotes is plain text; without quotes Python looks up the variable.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is it a valid variable name in Python?",
            groups: ["Valid", "Not valid"],
            items: [
              { text: "total_marks", group: 0, hint: "Letters and an underscore are allowed." },
              { text: "class9", group: 0, hint: "Digits are fine if they are not at the start." },
              { text: "_score", group: 0, hint: "A name may start with an underscore." },
              { text: "9class", group: 1, hint: "A name cannot start with a digit." },
              { text: "my name", group: 1, hint: "Spaces are not allowed." },
              { text: "roll-no", group: 1, hint: "The minus sign is not allowed in a name." },
              { text: "for", group: 1, hint: "for is a keyword." },
            ],
            explain: "Use letters, digits and _ only, never start with a digit, and avoid keywords. Use _ in place of a space: `roll_no`.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Identify valid identifiers\" questions are common. Check each name against the rules in order: starts with a digit? has a space or symbol? is a keyword? Also know that `\"25\"` (in quotes) is a **str**, not an int.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is the data type of 3.0 in Python?",
              options: ["float", "int", "str", "bool"],
              answer: 0,
              explain: "It has a decimal point, so it is a float, even though its value is a whole number.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Python is a high-level, interpreted, free and open source language by Guido van Rossum (1991).",
            "Interactive mode (>>>) runs one statement at a time; script mode runs a saved .py file.",
            "print() shows output; # starts a comment.",
            "A variable stores a value with =; names use letters, digits and _, cannot start with a digit and cannot be keywords.",
            "Basic data types: int, float, str, bool; type() tells which one.",
          ],
        },
      ],
      flashcards: [
        { front: "Python's creator", back: "Guido van Rossum; first released in 1991." },
        { front: "Interpreter", back: "A program that reads and runs code one line at a time." },
        { front: "Interactive vs script mode", back: "Interactive: type one statement at >>> and see the result at once. Script: write and save a .py file, then run it." },
        { front: "Comment", back: "A note in code starting with #; Python ignores it." },
        { front: "Variable", back: "A name that refers to a value stored in memory, created with =." },
        { front: "Identifier rules", back: "Letters, digits, _ only; no digit at the start; no spaces or symbols; not a keyword; case-sensitive." },
        { front: "int, float, str, bool", back: "Whole number, decimal number, text in quotes, True/False." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is a valid variable name?",
          options: ["student_1", "1student", "student 1", "student-1"],
          answer: 0,
          explain: "student_1 uses only letters, a digit and _ and does not start with a digit.",
        },
        {
          kind: "mcq",
          q: "What does print(\"5 + 4\") show?",
          options: ["5 + 4", "9", "54", "An error"],
          answer: 0,
          explain: "The quotes make it a string, so Python prints the characters exactly.",
        },
        {
          kind: "truefalse",
          q: "In Python, Total and total are the same variable.",
          answer: false,
          explain: "Python is case-sensitive, so they are two different names.",
        },
        {
          kind: "fill",
          q: "Python files are saved with the extension ___.",
          answer: [".py", "py"],
          explain: "Script files end in .py, e.g. marks.py.",
        },
        {
          kind: "mcq",
          q: "What is the data type of \"2025\" (with quotes)?",
          options: ["str", "int", "float", "bool"],
          answer: 0,
          explain: "Anything in quotes is a string, even if it looks like a number.",
          difficulty: 2,
          hint: "Look at the quotes.",
        },
        {
          kind: "numeric",
          q: "After `a = 10` and then `a = a * 2 + 1`, what is the value of a?",
          answer: 21,
          explain: "The right side is worked out first with the old value: 10 × 2 + 1 = 21, which then replaces 10.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about Python are true? (Choose all that apply)",
          options: ["It is open source", "It is an interpreted language", "It was created by Guido van Rossum", "It can only be used for games"],
          answers: [0, 1, 2],
          explain: "Python is open source, interpreted and was created by Guido van Rossum. It is used in AI, data science, the web and much more, not only games.",
        },
      ],
    },

    {
      slug: "c9-python-operators-input",
      title: "Operators, input() and Type Conversion",
      summary: "Arithmetic operators including /, //, % and **, their order, relational and logical operators, reading input with input(), and converting types with int(), float() and str().",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Python can work as a powerful calculator. An **operator** is a symbol that does a job on values, and the values it works on are called **operands**. In `17 + 5`, `+` is the operator and 17 and 5 are the operands. A combination like this that gives a value is an **expression**.",
        },
        {
          type: "table",
          headers: ["Operator", "Name", "Example", "Result"],
          rows: [
            ["`+`", "addition", "`17 + 5`", "22"],
            ["`-`", "subtraction", "`17 - 5`", "12"],
            ["`*`", "multiplication", "`17 * 5`", "85"],
            ["`/`", "division (always gives a float)", "`17 / 5`", "3.4"],
            ["`//`", "floor division (quotient without the decimal part)", "`17 // 5`", "3"],
            ["`%`", "modulus (remainder)", "`17 % 5`", "2"],
            ["`**`", "exponent (power)", "`2 ** 3`", "8"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Change a and b and predict the answers before you run.",
          code: r`a = 17
b = 5
print(a + b)    # 22
print(a - b)    # 12
print(a * b)    # 85
print(a / b)    # 3.4
print(a // b)   # 3  (quotient only)
print(a % b)    # 2  (remainder)
print(2 ** 3)   # 8  (2 to the power 3)`,
        },
        {
          type: "text",
          md: "Python follows an order of **precedence**, like BODMAS in maths: brackets `( )` first, then `**`, then `*`, `/`, `//` and `%` (left to right), and last `+` and `-` (left to right). Use brackets whenever you want to be sure.",
        },
        {
          type: "example",
          title: "Working out an expression",
          problem: "Find the value of `10 + 8 // 3 * 2 - 4 % 3`.",
          steps: [
            "No brackets or `**`. Do `//`, `*` and `%` from left to right.",
            "`8 // 3` = 2 (8 ÷ 3 = 2 remainder 2; keep the quotient).",
            "`2 * 2` = 4.",
            "`4 % 3` = 1 (the remainder of 4 ÷ 3).",
            "Now `+` and `-` from left to right: 10 + 4 − 1 = **13**.",
          ],
          answer: "13",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What does `print(7 / 2)` show in Python 3?",
              options: ["3.5", "3", "1", "3.0"],
              answer: 0,
              explain: "`/` is true division and always gives a float: 3.5. Use `//` for 3 and `%` for the remainder 1.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Kind", "Operators", "Example (x = 8)", "Result"],
          rows: [
            ["**Relational** (comparison)", "`==` equal to, `!=` not equal to, `>`, `<`, `>=`, `<=`", "`x >= 8`", "`True`"],
            ["", "", "`x == 5`", "`False`"],
            ["**Logical**", "`and` (both true), `or` (at least one true), `not` (reverses)", "`x > 5 and x < 10`", "`True`"],
            ["", "", "`not x > 5`", "`False`"],
            ["**Assignment**", "`=` and shortcuts like `+=`", "`x += 2`", "x becomes 10"],
          ],
        },
        {
          type: "heading",
          text: "Taking input from the user",
        },
        {
          type: "text",
          md: "The **input()** function shows a message, waits for the user to type something and press Enter, and gives back what was typed. It **always gives a string**, even if the user types a number. To do maths with it, convert it with **int()** (whole number) or **float()** (decimal). **str()** turns a number into a string. Changing a value from one type to another is called **type conversion** (type casting).",
        },
        {
          type: "code",
          lang: "python",
          caption: "Run this in IDLE or any desktop Python. (The browser editor on this page cannot read typing, so it is not runnable here.)",
          code: r`name = input("Enter your name: ")
marks = int(input("Enter your marks: "))
print("Hello", name)
print("Marks after 5 bonus marks:", marks + 5)`,
        },
        {
          type: "mistake",
          wrong: "`a = input()` gives me a number if I type 5, so `a + 3` gives 8.",
          right: "`input()` always returns a string, so `a` is `\"5\"`. Adding a string and a number gives a **TypeError**. Write `a = int(input())` first; then `a + 3` gives 8.",
          why: "You typed digits, so it feels like a number. But Python stores what you type as text; with two strings, `+` joins them (`\"5\" + \"3\"` gives `\"53\"`) instead of adding.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does print(\"5\" + \"3\") show?",
            emoji: "🧩",
            options: ["8", "53", "An error", "5 + 3"],
            answer: 1,
            trap: 0,
            explain: "Both are strings, so `+` **joins** (concatenates) them into `53`. To get 8, convert first: `int(\"5\") + int(\"3\")`.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Output questions on `/`, `//` and `%` are very common. Remember: `/` always gives a float (`20 / 4` is `5.0`, not 5); `//` gives the quotient; `%` gives the remainder. In program-writing questions, wrap `input()` in `int()` or `float()` before doing maths.",
        },
        {
          type: "keypoints",
          items: [
            "Arithmetic: `+ - * / // % **`; `/` always gives a float.",
            "Precedence: brackets, then `**`, then `* / // %`, then `+ -` (left to right).",
            "Relational operators give True or False; logical operators are and, or, not.",
            "input() always returns a string; convert with int() or float() before maths.",
            "+ on two strings joins them: \"5\" + \"3\" is \"53\".",
          ],
        },
      ],
      flashcards: [
        { front: "`//`", back: "Floor division: the quotient without the decimal part. `17 // 5` = 3." },
        { front: "`%`", back: "Modulus: the remainder. `17 % 5` = 2." },
        { front: "`**`", back: "Exponent (power). `2 ** 3` = 8." },
        { front: "== vs =", back: "== compares two values (gives True/False); = assigns a value to a variable." },
        { front: "input()", back: "Reads what the user types and returns it as a string." },
        { front: "Type conversion", back: "Changing a value's type, e.g. int(\"25\") gives 25, str(25) gives \"25\"." },
        { front: "and / or / not", back: "and: both true; or: at least one true; not: reverses True and False." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "What is the value of `15 % 4`?",
          answer: 3,
          explain: "15 ÷ 4 = 3 remainder 3. % gives the remainder, 3.",
        },
        {
          kind: "mcq",
          q: "What does `print(20 / 4)` show?",
          options: ["5.0", "5", "4", "0"],
          answer: 0,
          explain: "`/` always gives a float in Python 3, so the answer is 5.0.",
          difficulty: 2,
          hint: "What kind of number does / always give?",
        },
        {
          kind: "numeric",
          q: "What is the value of `2 + 3 * 4 ** 2`?",
          answer: 50,
          explain: "Power first: `4 ** 2` = 16. Then 3 × 16 = 48. Then 2 + 48 = 50.",
          difficulty: 3,
          hint: "`**` comes before `*`, which comes before `+`.",
        },
        {
          kind: "truefalse",
          q: "The expression 8 > 5 or 2 > 9 gives True.",
          answer: true,
          explain: "With `or`, only one side needs to be true; 8 > 5 is true.",
        },
        {
          kind: "fill",
          q: "To turn the string \"42\" into the whole number 42, use the function ___().",
          answer: ["int"],
          explain: "int(\"42\") gives 42. float(\"42\") would give 42.0.",
        },
        {
          kind: "mcq",
          q: "x = input(\"Age: \") and the user types 13. What is the type of x?",
          options: ["str", "int", "float", "bool"],
          answer: 0,
          explain: "input() always returns a string.",
        },
        {
          kind: "multi",
          q: "Which of these give the value True? (Choose all that apply)",
          options: ["7 != 4", "10 == 10", "3 >= 5", "not False"],
          answers: [0, 1, 3],
          explain: "7 is not equal to 4 (True); 10 equals 10 (True); 3 is not ≥ 5 (False); not False is True.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put these in the order Python works them out in `6 + 2 ** 3 // 4`.",
          items: ["`2 ** 3` = 8", "`8 // 4` = 2", "`6 + 2` = 8"],
          explain: "`**` first, then `//`, then `+`.",
        },
      ],
    },

    {
      slug: "c9-python-decisions-loops",
      title: "Decisions, Loops and Lists",
      summary: "if, if–else and if–elif–else with indentation, for loops with range(), while loops, and storing many values in a list with indexing, len() and append().",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Every day you make decisions (\"if it rains, take an umbrella\") and repeat tasks (\"do 10 sit-ups\"). Programs need both. Python makes decisions with **if** statements and repeats work with **loops**.",
        },
        {
          type: "text",
          md: "An **if** statement checks a **condition** (an expression that is True or False). The line ends with a **colon** `:`, and the lines that belong to it are **indented** (moved right, usually by 4 spaces). Indentation is how Python knows which lines are inside the if.\n\n**if–else** gives two paths. **if–elif–else** checks several conditions in order and runs only the **first** one that is true; `elif` is short for *else if*.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Try marks = 95, 40 and 20.",
          code: r`marks = 76

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 33:
    print("Grade C")
else:
    print("Needs improvement")
print("Result checked")`,
        },
        {
          type: "mistake",
          wrong: "To check whether marks are 33, write `if marks = 33:`.",
          right: "Write `if marks == 33:`. One `=` **assigns** a value; two `==` **compare** two values.",
          why: "In maths one = sign means \"is equal to\", so it feels right. In Python, `=` is already used for storing values, so `if marks = 33:` gives a SyntaxError.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the grade program above, what is printed when marks = 90?",
              options: ["Grade A, then Result checked", "Grade B, then Result checked", "Grade A, Grade B and Grade C", "Only Result checked"],
              answer: 0,
              explain: "90 >= 90 is true, so only the first block runs. The last print is not indented, so it runs every time.",
            },
          ],
        },
        {
          type: "heading",
          text: "Loops",
        },
        {
          type: "text",
          md: "A **for loop** repeats once for each value in a sequence. It is often used with **range()**: `range(5)` gives 0, 1, 2, 3, 4; `range(1, 6)` gives 1 to 5; `range(2, 11, 2)` gives 2, 4, 6, 8, 10. The **stop** value is **never included**, and the third number is the **step**.\n\nA **while loop** repeats **as long as** its condition is True. Something inside the loop must change, or the condition stays True for ever and you get an **infinite loop**.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Change 7 to another number, or start n at 5.",
          code: r`# Table of 7 with a for loop
for i in range(1, 11):
    print(7, "x", i, "=", 7 * i)

# Countdown with a while loop
n = 3
while n > 0:
    print(n)
    n = n - 1
print("Lift off!")`,
        },
        {
          type: "example",
          title: "Tracing a loop",
          problem: "What does this program print?\n\n`total = 0`, then `for n in range(1, 5):` with the indented line `total = total + n`, then (not indented) `print(total)`.",
          steps: [
            "`range(1, 5)` gives 1, 2, 3, 4 (5 is not included).",
            "Start: total = 0. n = 1 → total = 1. n = 2 → total = 3.",
            "n = 3 → total = 6. n = 4 → total = 10.",
            "The loop ends; `print(total)` is outside the loop, so it runs once.",
          ],
          answer: "`10` (printed once).",
        },
        {
          type: "text",
          md: "A **list** stores many values in one variable, inside square brackets and separated by commas: `fruits = [\"mango\", \"banana\", \"guava\"]`. Each item has a position number called an **index**, and indexes **start at 0**, so `fruits[0]` is \"mango\". `len(fruits)` gives the number of items and `fruits.append(\"apple\")` adds an item at the end. A for loop can go through a list item by item.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Add your own favourite fruit with append().",
          code: r`fruits = ["mango", "banana", "guava"]
print(fruits[0])        # first item
print(len(fruits))      # number of items

fruits.append("apple")  # add at the end
print(fruits)

for f in fruits:
    print("I like", f)`,
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which numbers does range(1, 5) give?",
            emoji: "🔁",
            options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "5, 4, 3, 2, 1"],
            answer: 0,
            trap: 1,
            explain: "range starts at the first number and **stops before** the second. For 1 to 5 including 5, write `range(1, 6)`.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In \"find the output\" questions with loops, make a small table of each variable after every round of the loop, as in the tracing example. Most lost marks come from counting the stop value of `range()` or forgetting that list indexes start at **0**.",
        },
        {
          type: "keypoints",
          items: [
            "if / if–else / if–elif–else choose what to run; end the line with : and indent the block.",
            "Use == to compare and = to assign.",
            "for repeats over a sequence; range(start, stop, step) never includes stop.",
            "while repeats while a condition is True; change something inside to avoid an infinite loop.",
            "A list holds many values in [ ]; indexes start at 0; len() counts and append() adds.",
          ],
        },
      ],
      flashcards: [
        { front: "Condition", back: "An expression that is True or False, checked by if or while." },
        { front: "Indentation", back: "Spaces at the start of a line (usually 4) that show which lines belong to an if or a loop." },
        { front: "elif", back: "Short for 'else if': checks another condition when the ones before were False." },
        { front: "range(1, 6)", back: "Gives 1, 2, 3, 4, 5. The stop value is not included." },
        { front: "Infinite loop", back: "A loop whose condition never becomes False, so it never ends." },
        { front: "List index", back: "The position of an item in a list; the first item is at index 0." },
        { front: "append()", back: "Adds an item to the end of a list." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "How many times does `for i in range(3):` repeat its block?",
          options: ["3", "2", "4", "It never stops"],
          answer: 0,
          explain: "range(3) gives 0, 1, 2: three values, so three repeats.",
        },
        {
          kind: "mcq",
          q: "colours = [\"red\", \"green\", \"blue\"]. What is colours[1]?",
          options: ["green", "red", "blue", "An error"],
          answer: 0,
          explain: "Indexes start at 0: red is 0, green is 1, blue is 2.",
          difficulty: 2,
          hint: "The first item is at index 0.",
        },
        {
          kind: "truefalse",
          q: "In Python, the lines inside an if block must be indented.",
          answer: true,
          explain: "Indentation shows which lines belong to the if. Missing indentation gives an IndentationError.",
        },
        {
          kind: "fill",
          q: "The keyword used in Python for \"else if\" is ___.",
          answer: ["elif"],
          explain: "elif checks another condition when the earlier ones are False.",
        },
        {
          kind: "numeric",
          q: "What is printed? `n = 1`, then `while n < 20:` with the indented line `n = n * 2`, then `print(n)`.",
          answer: 32,
          explain: "n goes 1 → 2 → 4 → 8 → 16 → 32. At 32 the condition n < 20 is False, so the loop stops and 32 is printed.",
          difficulty: 3,
          hint: "Keep doubling until n is no longer less than 20.",
        },
        {
          kind: "multi",
          q: "Which of these print the even numbers 2, 4, 6, 8, 10? (Choose all that apply)",
          options: ["for i in range(2, 11, 2): print(i)", "for i in range(2, 12, 2): print(i)", "for i in range(2, 10, 2): print(i)", "for i in range(1, 11): print(i)"],
          answers: [0, 1],
          explain: "Both range(2, 11, 2) and range(2, 12, 2) stop after 10. range(2, 10, 2) stops at 8, and range(1, 11) prints every number.",
          difficulty: 3,
        },
        {
          kind: "mcq",
          q: "Which line correctly checks whether age is 18?",
          options: ["if age == 18:", "if age = 18:", "if age == 18", "if (age = 18)"],
          answer: 0,
          explain: "Use == to compare and end the if line with a colon.",
        },
        {
          kind: "order",
          q: "Put the lines of a program that prints the total of a list in order.",
          items: ["marks = [70, 85, 90]", "total = 0", "for m in marks:", "total = total + m (indented)", "print(total)"],
          explain: "Create the list and set total to 0 first, then loop and add, and print once after the loop.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [basicsOfIt, cyberSafety, wordProcessing, presentations, spreadsheets, python];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Introduction to IT–ITeS Industry": "c9-basics-of-it",
  "9:Data Entry and Keyboarding Skills": "c9-basics-of-it",
  "9:Digital Documentation": "c9-word-processing",
  "9:Electronic Spreadsheet": "c9-spreadsheets",
  "9:Digital Presentation": "c9-presentations",
  "9:Cyber Safety": "c9-cyber-safety",
  "9:Getting Started with Python": "c9-getting-started-with-python",
};
