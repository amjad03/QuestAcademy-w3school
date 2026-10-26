import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

/** String.raw keeps TeX backslashes and Python escapes intact. */
const t = String.raw;

/* ================================================================== */
/* CBSE Computer Science (083) Class 11 · Karnataka I PUC CS (NCERT)  */
/* ================================================================== */

/* ------------------------------------------------------------------ */
const computerSystems: Topic = {
  slug: "c11-cs-computer-systems",
  title: "Computer Systems and Organisation",
  icon: "🖥️",
  description: "The parts of a computer system, the CPU, memory and its units, buses, types of software, language translators and the operating system.",
  lessons: [
    {
      slug: "c11-cs-computer-organisation",
      title: "Computer Organisation: CPU, Memory and Buses",
      summary: "The block diagram of a computer, the ALU, control unit and registers, the memory hierarchy, units of memory and how data moves on the system bus.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "📲",
          caption: "Meena pays ₹30 at a tea stall in Mysuru by scanning a QR code. In under two seconds her phone reads the code, checks her PIN, talks to the bank and shows a green tick. A complete computer system did all of that.",
        },
        {
          type: "text",
          md: "A **computer** is an electronic device that accepts **data** as input, **processes** it according to a set of instructions (a **program**), produces **output** and can **store** data and results for later use.\n\nEvery computer, from a phone to a supercomputer, has the same four functional parts: **input devices**, the **Central Processing Unit (CPU)**, **memory** and **output devices**. They are joined by wires called the **system bus**.",
        },
        {
          type: "table",
          headers: ["Part", "Job", "Examples"],
          rows: [
            ["**Input device**", "converts what we give (keys, touch, sound, images) into digital form the computer can use", "keyboard, mouse, touch screen, scanner, microphone, webcam, barcode reader, biometric scanner"],
            ["**CPU**", "executes instructions: does calculations, comparisons and controls all other parts", "the processor chip"],
            ["**Memory**", "holds data and instructions, for the moment (primary) or for the long term (secondary)", "RAM, ROM, cache, hard disk, SSD, pen drive"],
            ["**Output device**", "converts digital results into a form people can see, hear or use", "monitor, printer, speaker, projector, 3D printer, braille display"],
          ],
        },
        {
          type: "text",
          md: "The CPU has three parts. The **Arithmetic Logic Unit (ALU)** performs arithmetic (add, subtract, multiply, divide) and logical operations (comparisons such as *is 45 greater than 33?*). The **Control Unit (CU)** fetches each instruction, decodes it and sends signals that make the other parts carry it out. **Registers** are a few very small, very fast storage locations inside the CPU that hold the data and instructions being worked on right now.\n\nWhen the whole CPU is built on one integrated circuit chip, it is called a **microprocessor**. A **microcontroller** puts a small processor, memory and input/output ports together on one chip; it runs a single dedicated job, as in a washing machine or a TV remote.",
        },
        {
          type: "heading",
          text: "Memory and its units",
        },
        {
          type: "text",
          md: "**Primary memory** is directly used by the CPU. **RAM** (Random Access Memory) holds the programs and data in use; it is **volatile**, so its contents are lost when power goes off. **ROM** (Read Only Memory) holds start-up instructions; it is **non-volatile**. **Cache** is a small, fast memory between the CPU and RAM that keeps the most frequently used data, so the CPU waits less.\n\n**Secondary memory** (HDD, SSD, pen drive, CD/DVD, memory card) is non-volatile, much larger and cheaper per byte, but slower. The CPU cannot work on it directly: data is first brought into RAM.\n\nThe smallest unit is the **bit** (0 or 1). 4 bits = 1 **nibble**, 8 bits = 1 **byte**, and from there each unit is 1024 times the one before: KB, MB, GB, TB, PB, EB, ZB, YB.",
        },
        {
          type: "example",
          title: "Working with memory units",
          problem: "A pen drive has 2 GB of free space. Each photo is 3 MB. How many complete photos can be copied? Also express 2 GB in bytes.",
          steps: [
            "Convert GB to MB: 2 GB = 2 × 1024 MB = 2048 MB.",
            "Number of photos = 2048 ÷ 3 = 682.67, and only complete photos can be stored, so take the whole number part: 682.",
            "In bytes: 2 GB = 2 × 1024 × 1024 × 1024 bytes = 2,147,483,648 bytes.",
          ],
          answer: "682 photos; 2 GB = 2,147,483,648 bytes (that is, $2^{31}$ bytes).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which unit of the CPU fetches and decodes an instruction and then directs the other parts to carry it out?",
              options: ["Control Unit", "Arithmetic Logic Unit", "Cache", "RAM"],
              answer: 0,
              explain: "The **Control Unit** fetches, decodes and controls. The ALU only performs the arithmetic and logical operations it is told to do.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange from fastest to slowest.",
            items: ["Registers", "Cache memory", "Main memory (RAM)", "Secondary storage (hard disk)"],
            explain: "This is the **memory hierarchy**: the closer a memory is to the CPU, the faster, smaller and costlier per byte it is. Registers are inside the CPU; the hard disk is the farthest.",
          },
        },
        {
          type: "heading",
          text: "Moving data: the system bus",
        },
        {
          type: "text",
          md: "Data travels between the CPU, memory and I/O devices on a **bus**, a set of parallel wires. The system bus has three parts:\n\n**Data bus**: carries the actual data. It is **bidirectional** (data goes from CPU to memory when writing and from memory to CPU when reading).\n\n**Address bus**: carries the address of the memory location the CPU wants. It is **unidirectional**, from the CPU to memory. With $n$ address lines the CPU can address $2^n$ locations.\n\n**Control bus**: carries control signals, such as *memory read*, *memory write* and timing signals, that tell each part what to do.",
        },
        {
          type: "mistake",
          wrong: "The hard disk is inside the cabinet, so it is primary memory.",
          right: "Primary memory is memory the CPU uses **directly** (RAM, ROM, cache). The hard disk or SSD is **secondary** memory wherever it is placed: its data must first be loaded into RAM.",
          why: "Students sort memory by where it sits. The board definition is about how the CPU reaches it and whether it is volatile, not about its physical position.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In \"differentiate RAM and ROM\" give at least three points: volatile / non-volatile, read-write / read-only, and what it stores (programs in use / start-up instructions). For the bus question, always state the **direction** of the data bus and the address bus.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "A CPU has 16 address lines. How many memory locations can it address?",
              answer: 65536,
              explain: "$2^{16} = 65536$ locations. If each location holds one byte, that is 64 KB.",
              hint: "With n lines, the number of different addresses is $2^n$.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "A computer system has input devices, CPU, memory and output devices, joined by the system bus.",
            "CPU = ALU (arithmetic and logic) + CU (fetch, decode, control) + registers (fastest storage).",
            "RAM is volatile; ROM, HDD, SSD and pen drives are non-volatile. Cache sits between CPU and RAM.",
            "8 bits = 1 byte; 1 KB = 1024 bytes; then MB, GB, TB, PB, EB, ZB, YB, each × 1024.",
            "Data bus is bidirectional, address bus is unidirectional (CPU → memory), control bus carries control signals.",
          ],
        },
      ],
      flashcards: [
        { front: "Three parts of a CPU", back: "Arithmetic Logic Unit (ALU), Control Unit (CU) and registers." },
        { front: "Volatile memory", back: "Memory that loses its contents when power is switched off, e.g. RAM." },
        { front: "Cache memory", back: "Small, very fast memory between the CPU and RAM that keeps frequently used data and instructions." },
        { front: "Microprocessor", back: "A CPU built on a single integrated circuit chip." },
        { front: "Microcontroller", back: "A single chip with a processor, memory and I/O ports, used for one dedicated task (washing machine, remote)." },
        { front: "1 nibble, 1 byte, 1 KB", back: "4 bits; 8 bits; 1024 bytes." },
        { front: "Data bus vs address bus", back: "Data bus carries data and is bidirectional; address bus carries memory addresses from CPU to memory and is unidirectional." },
        { front: "Locations addressed by n address lines", back: "$2^n$" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is an **output** device?",
          options: ["Braille display", "Barcode reader", "Biometric scanner", "Microphone"],
          answer: 0,
          explain: "A braille display gives results out in a form a visually impaired user can touch. The other three send data into the computer.",
        },
        {
          kind: "truefalse",
          q: "ROM is non-volatile memory.",
          answer: true,
          explain: "ROM keeps its contents without power, which is why start-up instructions are stored there.",
        },
        {
          kind: "numeric",
          q: "How many bits are there in 4 KB?",
          answer: 32768,
          explain: "4 KB = 4 × 1024 = 4096 bytes, and 4096 × 8 = 32768 bits.",
          difficulty: 2,
          hint: "First change KB to bytes, then bytes to bits.",
        },
        {
          kind: "order",
          q: "Arrange these units from smallest to largest.",
          items: ["Nibble", "Byte", "Kilobyte", "Gigabyte", "Petabyte"],
          explain: "Nibble (4 bits) < byte (8 bits) < KB < GB < PB.",
        },
        {
          kind: "mcq",
          q: "Which bus is unidirectional?",
          options: ["Address bus", "Data bus", "Both data and address bus", "Neither"],
          answer: 0,
          explain: "Addresses are sent only from the CPU to memory, so the address bus is one-way. Data must travel both ways for read and write.",
        },
        {
          kind: "multi",
          q: "Select all **secondary** storage devices.",
          options: ["SSD", "Cache", "Pen drive", "RAM", "Memory card"],
          answers: [0, 2, 4],
          explain: "SSD, pen drive and memory card are non-volatile secondary storage. Cache and RAM are primary memory.",
        },
        {
          kind: "fill",
          q: "The part of the CPU that compares two numbers is the ___.",
          answer: ["ALU", "arithmetic logic unit", "Arithmetic Logic Unit"],
          explain: "Comparisons are logical operations, done by the **ALU**.",
        },
        {
          kind: "numeric",
          q: "A CPU has 32 address lines and each location stores 1 byte. How many GB of memory can it address?",
          answer: 4,
          explain: "$2^{32}$ bytes = $2^{2} \\times 2^{30}$ bytes = 4 GB.",
          difficulty: 2,
          hint: "1 GB = $2^{30}$ bytes.",
        },
      ],
    },
    {
      slug: "c11-cs-software-and-os",
      title: "Software, Language Translators and the Operating System",
      summary: "System software, programming tools and application software; machine, assembly and high-level languages; assembler, compiler and interpreter; open-source and proprietary software; functions of an operating system and its user interfaces.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🧩",
          caption: "A new laptop from a shop in Lucknow has hardware worth ₹50,000, but it does nothing until software tells it what to do. Software is the set of programs that make hardware useful.",
        },
        {
          type: "text",
          md: "**Software** is a set of programs (instructions) and the data they need. Hardware is the physical parts you can touch; software cannot be touched. Software is grouped into three kinds:\n\n**System software** manages the computer itself: the **operating system**, **system utilities** (disk defragmenter, antivirus, backup, compression tools) and **device drivers** (a program that lets the OS talk to one particular device, such as a printer).\n\n**Programming tools** help people write programs: **language translators** and program development tools such as editors and **IDEs** (Integrated Development Environments, e.g. IDLE for Python).\n\n**Application software** does a task for the user. It may be **general purpose** (word processor, spreadsheet, browser, photo editor) or **customised** (made for one organisation, such as a school's fee-management system or a railway reservation system).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each program into its kind of software.",
            groups: ["System software", "Programming tool", "Application software"],
            items: [
              { text: "Printer driver", group: 0, hint: "It lets the operating system control one device." },
              { text: "Antivirus", group: 0, hint: "A system utility that keeps the computer healthy." },
              { text: "Linux", group: 0, hint: "An operating system." },
              { text: "Python interpreter", group: 1, hint: "It translates a program for the machine." },
              { text: "IDLE editor", group: 1, hint: "An IDE used to write Python code." },
              { text: "Spreadsheet", group: 2, hint: "It does a task for the user." },
              { text: "School fee-management system", group: 2, hint: "Customised software made for one school." },
            ],
            explain: "Ask: does it run the machine (system), help write programs (programming tool) or do the user's job (application)?",
          },
        },
        {
          type: "heading",
          text: "Languages and translators",
        },
        {
          type: "text",
          md: "The CPU understands only **machine language**: instructions written in 0s and 1s. It is fast but very hard for people to write. **Assembly language** uses short words called **mnemonics** (such as ADD, MOV) in place of bit patterns. Both are **low-level languages** and depend on the processor.\n\n**High-level languages** (Python, C++, Java) use English-like words and are machine-independent. A program written in them is called **source code**, and it must be translated into machine code (**object code**) before it runs. Translators are:\n\n- **Assembler**: translates assembly language into machine language.\n- **Compiler**: translates the **whole** source program at once; errors are listed after the whole program is checked; the object code can be run again without translating.\n- **Interpreter**: translates and executes **one statement at a time**, stopping at the first error. Python is an interpreted language.",
        },
        {
          type: "table",
          headers: ["", "Compiler", "Interpreter"],
          rows: [
            ["Translates", "the whole program in one go", "one line (statement) at a time"],
            ["Errors", "reported together after compiling", "reported at the first wrong line; execution stops there"],
            ["Object code", "produced and saved; run again without retranslating", "not saved; translated every time the program runs"],
            ["Examples", "C, C++", "Python, early BASIC"],
          ],
        },
        {
          type: "mistake",
          wrong: "An interpreter checks the whole program first and then shows all the errors together.",
          right: "That is what a **compiler** does. An interpreter runs the program line by line and stops at the **first** line with an error; lines before it have already run.",
          why: "Both are translators, so they are easy to swap. Picture Python: a program that divides by zero on line 5 still prints the output of lines 1 to 4 before the error message.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which translator converts mnemonics like ADD and MOV into machine code?",
              options: ["Assembler", "Compiler", "Interpreter", "Device driver"],
              answer: 0,
              explain: "Mnemonics belong to **assembly language**, which an **assembler** translates.",
            },
          ],
        },
        {
          type: "text",
          md: "Software can also be grouped by its licence. **Proprietary software** is owned by a company; you pay for a licence and cannot see or change its source code. **Freeware** can be used free of cost, but its source code is not shared. **Free and Open Source Software (FOSS)** is free to use and its source code is available to study, change and share. Examples of FOSS: Linux, LibreOffice, Python, Mozilla Firefox.",
        },
        {
          type: "heading",
          text: "The operating system",
        },
        {
          type: "text",
          md: "The **operating system (OS)** is the system software that manages all the computer's resources and acts as an **interface** between the user and the hardware. Examples: Windows, Linux, macOS, Android, iOS.\n\nIts main functions are **process management** (deciding which program uses the CPU and when), **memory management** (giving and taking back memory for programs), **file management** (creating, naming, storing and protecting files and folders) and **device management** (controlling I/O devices through their drivers).\n\nThe user talks to the OS through a **user interface**: **command-based** (typed commands, e.g. MS-DOS, Linux terminal), **Graphical User Interface (GUI)** (icons, windows and menus), **touch-based** (phones, tablets), **voice-based** (voice assistants) and **gesture-based** (a hand wave or a head nod is the input).",
        },
        {
          type: "example",
          title: "Naming the OS function",
          problem: "Rahul has a browser, a music player and a Python program open. Which OS function is at work when (a) the music keeps playing while he types code, (b) closing the browser frees space for a new program, (c) he saves marks.py inside a folder, (d) he prints the code?",
          steps: [
            "(a) Several programs share one CPU, switched quickly: **process management**.",
            "(b) Memory used by the browser is taken back and given to another program: **memory management**.",
            "(c) Creating and storing a file in a folder: **file management**.",
            "(d) Sending the job to the printer through its driver: **device management**.",
          ],
          answer: "(a) process, (b) memory, (c) file, (d) device management.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "The \"compiler vs interpreter\" question is almost always worth 2 marks: give two clear points of difference in a table. When asked for examples of system software, write an OS **and** a utility or driver, not two operating systems.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A device driver is an example of application software.",
              answer: false,
              explain: "A device driver lets the OS control a device, so it is **system software**.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Software types: system software (OS, utilities, drivers), programming tools, application software (general purpose or customised).",
            "Machine and assembly languages are low-level; Python, C++ and Java are high-level.",
            "Assembler: assembly → machine code. Compiler: whole program at once. Interpreter: one statement at a time.",
            "FOSS is free to use with source code available; proprietary software is licensed and closed.",
            "OS functions: process, memory, file and device management; interfaces: command, GUI, touch, voice, gesture.",
          ],
        },
      ],
      flashcards: [
        { front: "System software", back: "Software that runs and manages the computer: operating system, system utilities, device drivers." },
        { front: "Device driver", back: "A program that lets the operating system communicate with and control a particular hardware device." },
        { front: "Customised application software", back: "Software made for the needs of one user or organisation, e.g. a school's fee system." },
        { front: "Compiler", back: "Translates the whole high-level program into object code at once and lists the errors after checking it." },
        { front: "Interpreter", back: "Translates and executes a high-level program one statement at a time, stopping at the first error." },
        { front: "Assembler", back: "Translates assembly language (mnemonics) into machine language." },
        { front: "FOSS", back: "Free and Open Source Software: free to use, with source code that can be studied, changed and shared (Linux, Python)." },
        { front: "Four functions of an OS", back: "Process management, memory management, file management, device management." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is **system utility** software?",
          options: ["Disk defragmenter", "Spreadsheet", "Railway reservation system", "Web browser"],
          answer: 0,
          explain: "A defragmenter maintains the disk, so it is a utility (system software). The rest are application software.",
        },
        {
          kind: "mcq",
          q: "A 10-line program divides by zero on line 6. With an **interpreter**, what happens?",
          options: ["Lines 1–5 run, then the error is reported", "No line runs; all errors are listed", "All 10 lines run and the error is ignored", "Only line 6 is skipped"],
          answer: 0,
          explain: "An interpreter executes statement by statement and stops at the first error, so lines 1–5 have already run and their output is on the screen.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Assembly language is a high-level language because it uses words like ADD.",
          answer: false,
          explain: "Assembly language is **low-level**: each mnemonic stands for one machine instruction and it depends on the processor.",
        },
        {
          kind: "multi",
          q: "Select all examples of Free and Open Source Software.",
          options: ["Linux", "LibreOffice", "Python", "A paid office suite with a licence key"],
          answers: [0, 1, 2],
          explain: "Linux, LibreOffice and Python share their source code freely. A paid, licensed suite with closed code is proprietary.",
        },
        {
          kind: "fill",
          q: "Siri-like assistants that obey spoken commands use a ___-based user interface.",
          answer: ["voice"],
          explain: "Spoken commands = **voice-based** interface.",
        },
        {
          kind: "mcq",
          q: "Which OS function decides which of the running programs gets the CPU next?",
          options: ["Process management", "File management", "Device management", "Memory management"],
          answer: 0,
          explain: "Scheduling programs on the CPU is **process management**.",
        },
        {
          kind: "order",
          q: "Arrange from the language closest to the machine to the one closest to people.",
          items: ["Machine language", "Assembly language", "High-level language"],
          explain: "Machine code (0s and 1s) → assembly (mnemonics) → high-level (English-like).",
        },
      ],
    },
    {
      slug: "c11-cs-computer-systems-practice",
      title: "Board practice: Computer Systems and Organisation",
      summary: "Mixed board-style questions on the CPU, memory, units, buses, software, translators and the operating system, with a short Python program on memory units.",
      minutes: 20,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "This lesson mixes the question types that appear in the Class 11 paper on this unit: 1-mark definitions, 2-mark differences, 3-mark explanations, and a short calculation on memory units. Try each one before reading the answer.",
        },
        {
          type: "example",
          title: "2-mark difference: primary vs secondary memory",
          problem: "Write two differences between primary memory and secondary memory, with one example of each.",
          steps: [
            "Access: the CPU accesses primary memory **directly**; secondary memory data must first be loaded into primary memory.",
            "Volatility and speed: primary memory (RAM) is volatile and faster; secondary memory is non-volatile and slower.",
            "Examples: primary = RAM; secondary = SSD.",
          ],
          answer: "Any two correct points with one example each earn the 2 marks.",
        },
        {
          type: "example",
          title: "3-mark calculation",
          problem: "A school lab backs up 120 student folders of 850 MB each. Will they fit on a 100 GB external drive? How much space is used or short?",
          steps: [
            "Total size = 120 × 850 MB = 102000 MB.",
            "Drive size = 100 × 1024 MB = 102400 MB.",
            "102400 − 102000 = 400 MB left over.",
          ],
          answer: "Yes, they fit, with 400 MB spare.",
        },
        {
          type: "mistake",
          wrong: "1 KB = 1000 bytes, so 100 GB = 100,000 MB.",
          right: "In the CBSE / NCERT syllabus, 1 KB = 1024 bytes and each next unit is × 1024, so 100 GB = 102400 MB.",
          why: "Disk makers advertise in powers of 1000, so the shorter number looks familiar. Board answers use the binary units (powers of 2), and the 1000 version can flip a \"fits / does not fit\" answer.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each term with its description.",
            pairs: [
              ["Register", "Fastest storage, inside the CPU"],
              ["Cache", "Fast buffer between CPU and RAM"],
              ["Control bus", "Carries read and write signals"],
              ["Device driver", "Lets the OS control one device"],
              ["Interpreter", "Translates one statement at a time"],
            ],
            explain: "Each term has one key phrase that board markers look for. Learn the phrase, not a long paragraph.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which statement about the Control Unit is correct?",
              options: ["It directs the flow of data and instructions in the computer", "It stores data permanently", "It performs addition and comparison", "It converts output into printed form"],
              answer: 0,
              explain: "The CU controls; the ALU calculates and compares; secondary memory stores permanently.",
            },
          ],
        },
        {
          type: "heading",
          text: "Write a small program",
        },
        {
          type: "text",
          md: "**Question (3 marks):** Write a Python program that stores a size in GB in a variable and prints the same size in MB, KB, bytes and bits. One solution is below. Run it, then change `gb` and check the new answers by hand.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Each unit is 1024 times the next smaller one; 1 byte = 8 bits.",
          code: t`gb = 2
mb = gb * 1024
kb = mb * 1024
b = kb * 1024
print(gb, "GB =", mb, "MB")
print(gb, "GB =", kb, "KB")
print(gb, "GB =", b, "bytes")
print("Bits:", b * 8)`,
        },
        {
          type: "text",
          md: "Output:\n\n`2 GB = 2048 MB`\n\n`2 GB = 2097152 KB`\n\n`2 GB = 2147483648 bytes`\n\n`Bits: 17179869184`",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For a 3-mark \"explain\" question, write a one-line definition, then the points, then one example. For a block-diagram question, draw input → CPU (ALU, CU, registers) → output with memory connected to the CPU, and label every arrow.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many MB are there in 3.5 GB?",
              answer: 3584,
              explain: "3.5 × 1024 = 3584 MB.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Differences: give matching points side by side (volatile vs non-volatile, direct vs indirect access).",
            "Use 1024, not 1000, in every memory calculation.",
            "Know one key phrase each for register, cache, buses, driver, compiler, interpreter.",
            "Label diagrams fully; name both the data-bus and address-bus directions.",
          ],
        },
      ],
      flashcards: [
        { front: "Two differences: RAM vs ROM", back: "RAM is volatile and read-write and holds programs in use; ROM is non-volatile, read-only and holds start-up instructions." },
        { front: "Why is cache memory used?", back: "To reduce the time the CPU waits for data from the slower RAM, by keeping frequently used data close to the CPU." },
        { front: "Object code", back: "The machine-language program produced by translating source code." },
        { front: "Source code", back: "A program written by a programmer in a high-level or assembly language." },
        { front: "GUI", back: "Graphical User Interface: icons, windows, menus and pointer instead of typed commands." },
        { front: "100 GB in MB", back: "102400 MB (100 × 1024)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which memory is non-volatile **and** primary?",
          options: ["ROM", "RAM", "Hard disk", "Cache"],
          answer: 0,
          explain: "ROM is primary memory and keeps its data without power. RAM and cache are volatile; a hard disk is secondary.",
        },
        {
          kind: "numeric",
          q: "How many 4 MB songs fit completely in 1 GB?",
          answer: 256,
          explain: "1 GB = 1024 MB, and 1024 ÷ 4 = 256 songs.",
        },
        {
          kind: "truefalse",
          q: "A compiler must translate a program again every time it is run.",
          answer: false,
          explain: "A compiler saves the object code, so the program can run again without translating. An interpreter translates every time.",
        },
        {
          kind: "mcq",
          q: "Which interface is used when a smart TV changes channel because you wave your hand?",
          options: ["Gesture-based", "Command-based", "Voice-based", "Touch-based"],
          answer: 0,
          explain: "A movement of the hand or body as input is a **gesture-based** interface.",
        },
        {
          kind: "multi",
          q: "Which of these are functions of an operating system?",
          options: ["Memory management", "File management", "Writing a school timetable", "Device management"],
          answers: [0, 1, 3],
          explain: "Making a timetable is an application's job; the OS manages memory, files, devices and processes.",
        },
        {
          kind: "numeric",
          q: "A memory has 1024 locations. How many address lines are needed?",
          answer: 10,
          explain: "$2^{10} = 1024$, so 10 address lines.",
          difficulty: 2,
          hint: "Find n such that $2^n = 1024$.",
        },
        {
          kind: "fill",
          q: "The program that translates assembly language into machine code is called an ___.",
          answer: ["assembler"],
          explain: "An **assembler** translates mnemonics into machine code.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [computerSystems];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Computer Systems and Organisation": "c11-cs-computer-systems",
};
