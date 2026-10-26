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

/* ------------------------------------------------------------------ */
const numberSystems: Topic = {
  slug: "c11-cs-number-systems",
  title: "Number Systems and Encoding",
  icon: "🔢",
  description: "Decimal, binary, octal and hexadecimal number systems, conversions between them (including fractions), and the encoding schemes ASCII, ISCII and Unicode (UTF-8, UTF-32).",
  lessons: [
    {
      slug: "c11-cs-number-conversions",
      title: "Number Systems and Conversions",
      summary: "Base and positional value; converting between decimal, binary, octal and hexadecimal, including fractional parts, and the 3-bit and 4-bit grouping shortcuts.",
      minutes: 25,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🧮",
          caption: "On a cricket scoreboard, 156 means 1 hundred, 5 tens and 6 ones. Inside a computer the same score is stored as 10011100, using only two digits. Both are positional number systems, just with different bases.",
        },
        {
          type: "text",
          md: "A **number system** is a way of writing numbers using a fixed set of digits (symbols). The number of digits it uses is its **base** or **radix**. In a **positional** system the value of a digit depends on its position: each position is worth a power of the base.\n\nWe write the base as a subscript: $(156)_{10}$ is decimal, $(10011100)_2$ is binary. Hexadecimal uses the letters A to F for the values 10 to 15.",
        },
        {
          type: "table",
          headers: ["System", "Base", "Digits used", "Example"],
          rows: [
            ["Decimal", "10", "0–9", "$(156)_{10}$"],
            ["Binary", "2", "0, 1", "$(10011100)_2$"],
            ["Octal", "8", "0–7", "$(234)_8$"],
            ["Hexadecimal", "16", "0–9 and A(10), B(11), C(12), D(13), E(14), F(15)", "$(9C)_{16}$"],
          ],
        },
        {
          type: "formula",
          tex: t`(d_{n-1}\dots d_1 d_0 . d_{-1} d_{-2})_b = d_{n-1}\,b^{n-1} + \dots + d_1\,b^{1} + d_0\,b^{0} + d_{-1}\,b^{-1} + d_{-2}\,b^{-2}`,
          caption: "Any base to decimal: multiply each digit by its positional value (a power of the base) and add.",
        },
        {
          type: "example",
          title: "Decimal to binary: repeated division",
          problem: "Convert $(156)_{10}$ to binary.",
          steps: [
            "Divide by 2 again and again, writing each remainder: 156 ÷ 2 = 78 r 0; 78 ÷ 2 = 39 r 0; 39 ÷ 2 = 19 r 1; 19 ÷ 2 = 9 r 1.",
            "Continue: 9 ÷ 2 = 4 r 1; 4 ÷ 2 = 2 r 0; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1. Stop when the quotient is 0.",
            "Read the remainders from the **last to the first** (bottom to top): 1 0 0 1 1 1 0 0.",
            "Check: 128 + 16 + 8 + 4 = 156. ✓",
          ],
          answer: "$(156)_{10} = (10011100)_2$",
        },
        {
          type: "example",
          title: "Binary with a fraction to decimal",
          problem: "Convert $(10110.101)_2$ to decimal.",
          steps: [
            t`Integer part: $1\times2^4 + 0\times2^3 + 1\times2^2 + 1\times2^1 + 0\times2^0 = 16 + 0 + 4 + 2 + 0 = 22$.`,
            t`Fractional part: $1\times2^{-1} + 0\times2^{-2} + 1\times2^{-3} = 0.5 + 0 + 0.125 = 0.625$.`,
            "Add the two parts: 22 + 0.625.",
          ],
          answer: "$(10110.101)_2 = (22.625)_{10}$",
        },
        {
          type: "text",
          md: "The same two methods work for octal and hexadecimal. **Decimal → base 8 or 16:** divide repeatedly by 8 or 16 and read the remainders bottom to top (write remainders 10–15 as A–F). **Base 8 or 16 → decimal:** multiply by powers of 8 or 16 and add. For example $(725)_8 = 7\\times64 + 2\\times8 + 5 = 469$ and $(3A7)_{16} = 3\\times256 + 10\\times16 + 7 = 935$.\n\nFor a **decimal fraction**, multiply the fraction by the new base again and again; each time the whole-number part is the next digit, read **top to bottom**. For 0.375 to binary: 0.375 × 2 = 0.75 → 0; 0.75 × 2 = 1.5 → 1; 0.5 × 2 = 1.0 → 1. So $(0.375)_{10} = (0.011)_2$. Some fractions, like 0.6, never end in binary; stop after the number of places asked.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "Convert $(725)_8$ to decimal.",
              answer: 469,
              explain: "7 × 64 + 2 × 8 + 5 × 1 = 448 + 16 + 5 = 469.",
            },
          ],
        },
        {
          type: "heading",
          text: "Shortcuts through binary",
        },
        {
          type: "text",
          md: "Since $8 = 2^3$ and $16 = 2^4$, every octal digit is exactly **3 bits** and every hexadecimal digit is exactly **4 bits**.\n\n**Binary → octal:** group bits in threes starting from the binary point (from the right for the integer part, from the left for the fraction), pad with 0s, and write each group as one digit. **Binary → hex:** the same with groups of four. Reverse the steps to go from octal or hex to binary. To go from octal to hex (or back), go through binary.",
        },
        {
          type: "example",
          title: "Grouping bits",
          problem: "Convert $(1101011010)_2$ to octal and to hexadecimal. Then convert $(3576)_8$ to hexadecimal.",
          steps: [
            "Octal: groups of 3 from the right: 1 | 101 | 011 | 010 → pad to 001 | 101 | 011 | 010 → 1 5 3 2.",
            "Hex: groups of 4 from the right: 11 | 0101 | 1010 → 0011 | 0101 | 1010 → 3 5 A.",
            "Check: $(1532)_8 = 512 + 320 + 24 + 2 = 858$ and $(35A)_{16} = 768 + 80 + 10 = 858$. ✓",
            "$(3576)_8$: write each digit as 3 bits: 011 101 111 110. Regroup in fours from the right: 0111 | 0111 | 1110 → 7 7 E.",
          ],
          answer: "$(1101011010)_2 = (1532)_8 = (35A)_{16}$, and $(3576)_8 = (77E)_{16}$",
        },
        {
          type: "mistake",
          wrong: "To change 156 to binary, I read the remainders from top to bottom: 00111001.",
          right: "The **first** remainder is the **least significant** (rightmost) bit, so read the remainders from bottom to top: 10011100.",
          why: "We usually write in the order we work. But the first division by 2 finds the units place. For fractions it is the other way: the first digit from multiplying sits just after the point, so read those top to bottom.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each number with its decimal value.",
            pairs: [
              ["$(101101)_2$", "45"],
              ["$(310)_8$", "200"],
              ["$(FF)_{16}$", "255"],
              ["$(7EA)_{16}$", "2026"],
              ["$(0.1101)_2$", "0.8125"],
            ],
            explain: "Each one is a sum of digit × place value: e.g. $(310)_8 = 3\\times64 + 1\\times8 + 0 = 200$ and $(0.1101)_2 = 0.5 + 0.25 + 0.0625 = 0.8125$.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Always show the division table or the place-value working; the answer alone gets at most 1 mark. Write the base as a subscript in the final answer, and check it by converting back.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "$(10101010)_2$ in hexadecimal is ___.",
              answer: ["AA", "aa", "(AA)16"],
              explain: "1010 | 1010 → A A. (Check: 170 = 10 × 16 + 10.)",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Base = number of digits: binary 2, octal 8, decimal 10, hexadecimal 16 (A–F = 10–15).",
            "Decimal integer → base b: divide by b, read remainders bottom to top.",
            "Decimal fraction → base b: multiply by b, read whole parts top to bottom.",
            "Base b → decimal: sum of digit × power of b (negative powers after the point).",
            "1 octal digit = 3 bits, 1 hex digit = 4 bits; use binary to go between octal and hex.",
          ],
        },
      ],
      flashcards: [
        { front: "Base (radix)", back: "The number of distinct digits used in a number system." },
        { front: "Hexadecimal digits for 10 to 15", back: "A, B, C, D, E, F." },
        { front: "Decimal integer to binary", back: "Divide repeatedly by 2; read the remainders from bottom (last) to top (first)." },
        { front: "Decimal fraction to binary", back: "Multiply the fraction by 2 repeatedly; the integer parts, read top to bottom, are the bits after the point." },
        { front: "Bits per octal digit / hex digit", back: "3 bits / 4 bits." },
        { front: "$(156)_{10}$ in binary, octal, hex", back: "$(10011100)_2 = (234)_8 = (9C)_{16}$" },
        { front: "$(0.375)_{10}$ in binary", back: "$(0.011)_2$" },
        { front: "Octal to hexadecimal", back: "Convert each octal digit to 3 bits, regroup into 4 bits from the point, write each group as a hex digit." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "Convert $(3A7)_{16}$ to decimal.",
          answer: 935,
          explain: "3 × 256 + 10 × 16 + 7 = 768 + 160 + 7 = 935.",
        },
        {
          kind: "mcq",
          q: "$(45)_{10}$ in binary is:",
          options: ["101101", "110101", "101011", "100101"],
          answer: 0,
          explain: "45 = 32 + 8 + 4 + 1 → 101101. (110101 is 53. Note that the remainders of 45 read the same either way, so always check by adding place values.)",
        },
        {
          kind: "fill",
          q: "$(200)_{10}$ in octal is ___.",
          answer: ["310", "(310)8"],
          explain: "200 ÷ 8 = 25 r 0; 25 ÷ 8 = 3 r 1; 3 ÷ 8 = 0 r 3 → 310.",
        },
        {
          kind: "mcq",
          q: "$(77E)_{16}$ in octal is:",
          options: ["3576", "3756", "1918", "7716"],
          answer: 0,
          explain: "7 7 E → 0111 0111 1110 → regroup in threes: 011 101 111 110 → 3576.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "$(128)_8$ is a valid octal number.",
          answer: false,
          explain: "Octal digits go only from 0 to 7, so the digit 8 cannot appear.",
        },
        {
          kind: "fill",
          q: "$(0.3125)_{10}$ in binary is 0.___ (write only the bits after the point).",
          answer: ["0101"],
          explain: "0.3125 × 2 = 0.625 → 0; × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; × 2 = 1.0 → 1. Read top to bottom: 0.0101.",
          difficulty: 2,
          hint: "Multiply by 2 and keep the whole-number parts, top to bottom.",
        },
        {
          kind: "numeric",
          q: "Convert $(11001.101)_2$ to decimal.",
          answer: 25.625,
          explain: "16 + 8 + 1 = 25 and 0.5 + 0.125 = 0.625, so 25.625.",
        },
        {
          kind: "mcq",
          q: "Why are octal and hexadecimal used as short forms of binary?",
          options: ["Each of their digits stands for exactly 3 or 4 bits", "They use fewer symbols than binary", "The CPU stores data in hexadecimal", "They are faster for the ALU"],
          answer: 0,
          explain: "Because $8 = 2^3$ and $16 = 2^4$, long bit strings can be written and read in groups. The CPU still works in binary.",
        },
      ],
    },
    {
      slug: "c11-cs-encoding-schemes",
      title: "Encoding Schemes: ASCII, ISCII and Unicode",
      summary: "Why characters need codes; 7-bit ASCII, 8-bit ISCII for Indian scripts, and Unicode with its UTF-8, UTF-16 and UTF-32 encodings, explored with Python's ord() and chr().",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "⌨️",
          caption: "When Arjun presses the key A, the computer does not store a picture of A. It stores the number 65, in binary 1000001. When Priya types क in a Hindi message, a different, bigger number is stored.",
        },
        {
          type: "text",
          md: "A computer stores only binary numbers, so every letter, digit and symbol is given a unique number called its **code**. The rule that links characters to codes is an **encoding scheme**. **Encoding** means changing a character into its code; **decoding** means changing a code back into the character. The same scheme must be used at both ends, or the text turns into rubbish.",
        },
        {
          type: "heading",
          text: "ASCII",
        },
        {
          type: "text",
          md: "**ASCII** (American Standard Code for Information Interchange) was developed in the 1960s. It is a **7-bit** code, so it has $2^7 = 128$ codes (0 to 127). They cover the English capital and small letters, the digits 0–9, punctuation, space and some control characters (such as Enter). It cannot represent letters of Indian or most other languages.\n\nThe letters and digits are in order, so one code lets you find the others.",
        },
        {
          type: "table",
          headers: ["Characters", "ASCII codes (decimal)", "First code in binary (7 bits)"],
          rows: [
            ["space", "32", "0100000"],
            ["'0' to '9'", "48 to 57", "0110000"],
            ["'A' to 'Z'", "65 to 90", "1000001"],
            ["'a' to 'z'", "97 to 122", "1100001"],
          ],
        },
        {
          type: "example",
          title: "Encoding and decoding with ASCII",
          problem: "(a) Write the word CAB in 7-bit ASCII. (b) Decode 1001000 1101001.",
          steps: [
            "(a) C = 67, A = 65, B = 66 (A is 65, and the letters follow in order).",
            "In 7-bit binary: 67 = 1000011, 65 = 1000001, 66 = 1000010.",
            "(b) 1001000 = 64 + 8 = 72 → 'H'; 1101001 = 64 + 32 + 8 + 1 = 105 → 'i' (since 'a' = 97, 105 is the 9th letter).",
          ],
          answer: "(a) 1000011 1000001 1000010; (b) \"Hi\"",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "The ASCII code of 'a' is 97. What is the ASCII code of 'e'?",
              answer: 101,
              explain: "a, b, c, d, e: 'e' is 4 places after 'a', so 97 + 4 = 101.",
            },
          ],
        },
        {
          type: "text",
          md: "**ISCII** (Indian Script Code for Information Interchange) is an **8-bit** code made for Indian scripts, and was standardised by the Bureau of Indian Standards in 1991. Its first 128 codes are the same as ASCII; the upper codes hold the letters of Indian scripts such as Devanagari, Bengali, Tamil, Telugu and Kannada. Because these scripts share a similar structure, one ISCII table serves all of them.\n\n**Unicode** gives a unique number, called a **code point**, to every character of every major script in the world, plus symbols and emoji. Code points are written U+ followed by hexadecimal: 'A' is U+0041, 'क' is U+0915, the Kannada 'ಕ' is U+0C95 and '₹' is U+20B9. The first 128 code points match ASCII. Unicode code points are stored using an encoding: **UTF-8**, **UTF-16** or **UTF-32**.",
        },
        {
          type: "table",
          headers: ["Encoding", "Bytes per character", "Notes"],
          rows: [
            ["UTF-8", "1 to 4 (variable)", "ASCII characters take 1 byte; most Indian letters take 3; used by most web pages"],
            ["UTF-16", "2 or 4", "most common characters take 2 bytes"],
            ["UTF-32", "4 (fixed)", "every character takes 4 bytes: simple but uses more space"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "ord() gives a character's code point; encode() shows how many bytes an encoding uses.",
          code: t`for ch in ["A", "क", "ಕ", "₹"]:
    code = ord(ch)
    print(ch, "U+" + format(code, "04X"),
          len(ch.encode("utf-8")), "bytes in UTF-8,",
          len(ch.encode("utf-32-be")), "bytes in UTF-32")`,
        },
        {
          type: "text",
          md: "Output:\n\n`A U+0041 1 bytes in UTF-8, 4 bytes in UTF-32`\n\n`क U+0915 3 bytes in UTF-8, 4 bytes in UTF-32`\n\n`ಕ U+0C95 3 bytes in UTF-8, 4 bytes in UTF-32`\n\n`₹ U+20B9 3 bytes in UTF-8, 4 bytes in UTF-32`\n\n`chr()` works the other way: `chr(72) + chr(105)` gives `'Hi'`.",
        },
        {
          type: "mistake",
          wrong: "Unicode is a 16-bit code, so every character takes exactly 2 bytes.",
          right: "Unicode is a **character set** that gives each character a code point; the number of bytes depends on the **encoding**: UTF-8 uses 1–4 bytes, UTF-16 uses 2 or 4, UTF-32 always uses 4.",
          why: "Early Unicode did fit in 16 bits, and UTF-16 is common, so the idea stuck. Today Unicode has far more than 65,536 code points (up to U+10FFFF).",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "How many bytes does \"India\" take in UTF-32?",
            emoji: "🇮🇳",
            options: ["5 bytes", "20 bytes", "10 bytes", "35 bits"],
            answer: 1,
            trap: 0,
            explain: "UTF-32 is fixed-width: 5 characters × 4 bytes = 20 bytes. In UTF-8 (or ASCII stored one per byte) the same word takes only 5 bytes.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Remember the bit sizes: ASCII 7 bits (128 characters), ISCII 8 bits (256 codes), UTF-32 fixed 32 bits. For \"why was Unicode needed?\", say that ASCII and ISCII could not represent all the world's scripts together, and different code pages gave the same code different meanings.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which encoding uses a fixed 4 bytes for every character?",
              options: ["UTF-32", "UTF-8", "ASCII", "ISCII"],
              answer: 0,
              explain: "UTF-32 always uses 32 bits = 4 bytes. UTF-8 is variable; ASCII and ISCII use one byte or less.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "An encoding scheme gives each character a unique binary code; encoding and decoding must use the same scheme.",
            "ASCII: 7-bit, 128 characters; A = 65, a = 97, '0' = 48, space = 32.",
            "ISCII: 8-bit code for Indian scripts; first 128 codes are the same as ASCII.",
            "Unicode: a code point for every character of every script (U+0915 = क); first 128 match ASCII.",
            "UTF-8 is 1–4 bytes, UTF-16 is 2 or 4 bytes, UTF-32 is fixed 4 bytes.",
          ],
        },
      ],
      flashcards: [
        { front: "Encoding scheme", back: "A rule that gives every character a unique code (number) so it can be stored in binary." },
        { front: "ASCII", back: "American Standard Code for Information Interchange: 7-bit, 128 characters (English letters, digits, symbols, control codes)." },
        { front: "ASCII codes of 'A', 'a', '0'", back: "65, 97, 48." },
        { front: "ISCII", back: "Indian Script Code for Information Interchange: an 8-bit code for Indian scripts; lower 128 codes = ASCII." },
        { front: "Unicode code point", back: "The unique number Unicode gives a character, written U+hex, e.g. U+0915 for क." },
        { front: "UTF-8", back: "Variable-length Unicode encoding using 1 to 4 bytes; ASCII characters take 1 byte." },
        { front: "UTF-32", back: "Fixed-length Unicode encoding: every character takes 4 bytes." },
        { front: "ord() and chr() in Python", back: "ord('A') gives 65; chr(65) gives 'A'." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many different characters can 7-bit ASCII represent?",
          answer: 128,
          explain: "$2^7 = 128$ codes, numbered 0 to 127.",
        },
        {
          kind: "mcq",
          q: "The ASCII code of 'Z' is:",
          options: ["90", "91", "122", "26"],
          answer: 0,
          explain: "'A' = 65 and Z is the 26th letter, so 65 + 25 = 90. (122 is 'z'.)",
        },
        {
          kind: "fill",
          q: "In Python, `ord(\"0\")` gives ___.",
          answer: ["48"],
          explain: "The digit characters start at 48, so '0' is 48 (not 0).",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "ISCII is an 8-bit code whose first 128 codes are the same as ASCII.",
          answer: true,
          explain: "ISCII keeps ASCII in the lower half and uses the upper codes for Indian scripts.",
        },
        {
          kind: "mcq",
          q: "Decode the 7-bit ASCII codes 1000010 1000001 1010100.",
          options: ["BAT", "CAT", "BAR", "bat"],
          answer: 0,
          explain: "1000010 = 66 = B, 1000001 = 65 = A, 1010100 = 84 = T.",
          difficulty: 2,
          hint: "Change each group to decimal; A = 65.",
        },
        {
          kind: "numeric",
          q: "How many bytes does the word \"Namaste\" (7 English letters) take in UTF-32?",
          answer: 28,
          explain: "UTF-32 is 4 bytes per character: 7 × 4 = 28 bytes.",
        },
        {
          kind: "multi",
          q: "Select all **true** statements about UTF-8.",
          options: ["It is a variable-length encoding", "An English letter takes 1 byte", "A Devanagari letter such as क takes 3 bytes", "Every character takes 2 bytes"],
          answers: [0, 1, 2],
          explain: "UTF-8 uses 1–4 bytes: ASCII characters 1 byte, most Indian-script letters 3 bytes. Fixed 2 bytes is wrong.",
        },
        {
          kind: "mcq",
          q: "What does `chr(ord(\"a\") - 32)` give in Python?",
          options: ["'A'", "'a'", "65", "'@'"],
          answer: 0,
          explain: "ord('a') = 97; 97 − 32 = 65; chr(65) = 'A'. Capital and small letters are 32 apart in ASCII.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-cs-number-systems-practice",
      title: "Board practice: Number Systems and Encoding",
      summary: "Mixed board-style conversions, ASCII decoding, fraction conversions and a Python program that converts decimal to binary by repeated division.",
      minutes: 20,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Board papers ask 1- and 2-mark conversions, \"convert and verify\" questions and short notes on encoding. Work each problem on paper first; then compare with the steps.",
        },
        {
          type: "example",
          title: "One number in four systems",
          problem: "Convert $(1F4)_{16}$ to decimal, binary and octal.",
          steps: [
            "Decimal: 1 × 256 + 15 × 16 + 4 = 256 + 240 + 4 = 500.",
            "Binary: each hex digit as 4 bits: 1 → 0001, F → 1111, 4 → 0100, giving 000111110100 = 111110100.",
            "Octal: group 111110100 in threes from the right: 111 | 110 | 100 → 7 6 4.",
            "Verify: 7 × 64 + 6 × 8 + 4 = 448 + 48 + 4 = 500. ✓",
          ],
          answer: "$(1F4)_{16} = (500)_{10} = (111110100)_2 = (764)_8$",
        },
        {
          type: "example",
          title: "Decimal with a fraction to binary",
          problem: "Convert $(25.625)_{10}$ to binary.",
          steps: [
            "Integer part 25: 25 → 12 r 1 → 6 r 0 → 3 r 0 → 1 r 1 → 0 r 1. Bottom to top: 11001.",
            "Fraction 0.625: × 2 = 1.25 → 1; 0.25 × 2 = 0.5 → 0; 0.5 × 2 = 1.0 → 1. Top to bottom: .101.",
            "Join the parts with the binary point.",
          ],
          answer: "$(25.625)_{10} = (11001.101)_2$",
        },
        {
          type: "mistake",
          wrong: "In hexadecimal, 205 decimal is written C13 because 205 = 12 × 16 + 13.",
          right: "Each hex digit must be a **single** symbol: 12 is C and 13 is D, so 205 = $(CD)_{16}$.",
          why: "The remainders are right, but writing 13 as two digits makes it look like three hex places (C, 1, 3). Always change 10–15 into A–F.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the number valid in the base shown?",
            groups: ["Valid", "Not valid"],
            items: [
              { text: "(1011)₂", group: 0, hint: "Only 0s and 1s." },
              { text: "(1021)₂", group: 1, hint: "Binary has no digit 2." },
              { text: "(764)₈", group: 0, hint: "All digits are 7 or less." },
              { text: "(198)₈", group: 1, hint: "Octal has no 8 or 9." },
              { text: "(2AF)₁₆", group: 0, hint: "A and F are hex digits." },
              { text: "(4G2)₁₆", group: 1, hint: "Hex letters stop at F." },
            ],
            explain: "A base-b number may only use digits from 0 to b − 1. Check this first in any conversion question.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which is the largest?",
              options: ["$(11111111)_2$", "$(376)_8$", "$(FD)_{16}$", "$(250)_{10}$"],
              answer: 0,
              explain: "Change all to decimal: $(11111111)_2 = 255$, $(376)_8 = 192 + 56 + 6 = 254$, $(FD)_{16} = 240 + 13 = 253$, and 250. The binary number is the largest.",
            },
          ],
        },
        {
          type: "heading",
          text: "Write a small program",
        },
        {
          type: "text",
          md: "**Question (3 marks):** Write a Python program that converts a decimal number to binary by repeated division by 2, without using `bin()`, and then checks the answer with `bin()`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Each remainder is put in front of the bits found so far, so the last remainder ends up on the left.",
          code: t`n = 156
num = n
bits = ""
while num > 0:
    bits = str(num % 2) + bits
    num = num // 2
print("Decimal", n, "= binary", bits)
print("Check with bin():", bin(n))`,
        },
        {
          type: "text",
          md: "Output:\n\n`Decimal 156 = binary 10011100`\n\n`Check with bin(): 0b10011100`\n\nPython also reads numbers in other bases: `int(\"9C\", 16)` and `int(\"234\", 8)` both give 156, and the literals `0b1011 + 0o17 + 0x1F` give 11 + 15 + 31 = 57.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In a \"short note on ISCII / Unicode\" answer, give the full form, the number of bits, what it covers, and one advantage. In conversions, never drop leading zeros while grouping bits; pad them, then remove them only from the final answer.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "$(11001101)_2$ in hexadecimal is ___.",
              answer: ["CD", "cd"],
              explain: "1100 | 1101 → C D (= 205).",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Verify every conversion by converting back to decimal.",
            "Pad groups with leading 0s (integer part) or trailing 0s (fraction part).",
            "Hex remainders 10–15 are written as A–F.",
            "A base-b number uses only digits 0 to b − 1.",
          ],
        },
      ],
      flashcards: [
        { front: "$(1F4)_{16}$ in decimal", back: "500" },
        { front: "$(25.625)_{10}$ in binary", back: "$(11001.101)_2$" },
        { front: "Python: binary text to decimal", back: "int(\"10011100\", 2) gives 156." },
        { front: "Python literals for binary, octal, hex", back: "0b1011, 0o17, 0x1F" },
        { front: "Largest digit in base b", back: "b − 1 (1 in binary, 7 in octal, F = 15 in hex)." },
        { front: "Why pad with zeros when grouping?", back: "So every group has exactly 3 (octal) or 4 (hex) bits; padding on the far left of the integer part does not change the value." },
      ],
      quiz: [
        {
          kind: "fill",
          q: "$(B6)_{16}$ in octal is ___.",
          answer: ["266", "(266)8"],
          explain: "B6 → 1011 0110 → 10 110 110 → 010 110 110 → 2 6 6 (= 182).",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "Convert $(777)_8$ to decimal.",
          answer: 511,
          explain: "7 × 64 + 7 × 8 + 7 = 448 + 56 + 7 = 511.",
        },
        {
          kind: "mcq",
          q: "What does `print(int(\"101\", 2) + int(\"11\", 8))` show?",
          options: ["14", "112", "10111", "8"],
          answer: 0,
          explain: "\"101\" in base 2 is 5; \"11\" in base 8 is 9; 5 + 9 = 14.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "$(2026)_{10}$ in hexadecimal is:",
          options: ["7EA", "7AE", "3752", "11111101010"],
          answer: 0,
          explain: "2026 ÷ 16 = 126 r 10 (A); 126 ÷ 16 = 7 r 14 (E); 7 ÷ 16 = 0 r 7 → 7EA. (3752 is the octal form and 11111101010 the binary form.)",
        },
        {
          kind: "truefalse",
          q: "$(0.6)_{10}$ has an exact, finite binary form.",
          answer: false,
          explain: "0.6 × 2 gives the bits 1, 0, 0, 1, 1, 0, 0, 1, … which repeat for ever, so it is written to a fixed number of places.",
        },
        {
          kind: "numeric",
          q: "In ASCII, what is the decimal code of the character '7'?",
          answer: 55,
          explain: "'0' is 48, so '7' is 48 + 7 = 55.",
        },
        {
          kind: "order",
          q: "Put the steps to convert octal to hexadecimal in order.",
          items: ["Write each octal digit as 3 bits", "Join the bits into one binary number", "Regroup the bits in fours from the right", "Write each group of 4 as one hex digit"],
          explain: "Octal → binary (3 bits each) → regroup in 4s → hex.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const booleanLogic: Topic = {
  slug: "c11-cs-boolean-logic",
  title: "Boolean Logic",
  icon: "🔌",
  description: "Boolean values and operators, the logic gates NOT, AND, OR, NAND, NOR and XOR, truth tables, Boolean expressions, logic circuits and De Morgan's laws.",
  lessons: [
    {
      slug: "c11-cs-logic-gates",
      title: "Boolean Operators, Logic Gates and Truth Tables",
      summary: "Boolean variables, the NOT, AND and OR operators, the derived gates NAND, NOR and XOR, their symbols and truth tables, and checking them with Python.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🚨",
          caption: "A bank locker room in Pune has an alarm that rings only when the door is open AND it is after closing time. The alarm's decision uses just two values: yes or no. Such yes/no logic is what every digital circuit is built on.",
        },
        {
          type: "text",
          md: "**Boolean logic**, named after the mathematician George Boole, works with only two values: **True** and **False**, written **1** and **0**. A variable that can hold only these two values is a **Boolean variable**. Inside a computer, 1 and 0 are two voltage levels (high and low).\n\nA **logic gate** is an electronic circuit that takes one or more Boolean inputs and gives one Boolean output. A **truth table** lists the output for **every** possible combination of inputs; with $n$ inputs there are $2^n$ rows.",
        },
        {
          type: "text",
          md: "The three basic operators are:\n\n**NOT** (one input): the output is the opposite of the input. Written $\\overline{A}$ (A bar) or A′. Gate symbol: a triangle with a small circle (**bubble**) at its tip.\n\n**AND** (two or more inputs): the output is 1 only when **all** inputs are 1. Written $A \\cdot B$. Gate symbol: a D shape.\n\n**OR** (two or more inputs): the output is 1 when **at least one** input is 1. Written $A + B$. Gate symbol: a curved, shield-like shape with a pointed tip.",
        },
        {
          type: "table",
          headers: ["A", "B", "NOT A", "A · B (AND)", "A + B (OR)"],
          rows: [
            ["0", "0", "1", "0", "0"],
            ["0", "1", "1", "0", "1"],
            ["1", "0", "0", "0", "1"],
            ["1", "1", "0", "1", "1"],
          ],
        },
        {
          type: "example",
          title: "From a rule to a gate",
          problem: "A school bus door motor should run (Y = 1) only when the driver presses the button (A = 1) and the bus is not moving. Let M = 1 mean the bus is moving. Write Y as a Boolean expression and find Y for A = 1, M = 1.",
          steps: [
            "\"Not moving\" is NOT M, that is $\\overline{M}$.",
            "Both conditions must be true, so use AND: $Y = A \\cdot \\overline{M}$.",
            "For A = 1, M = 1: $\\overline{M} = 0$, so $Y = 1 \\cdot 0 = 0$.",
          ],
          answer: "$Y = A \\cdot \\overline{M}$; with the bus moving, Y = 0, so the door stays shut.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many rows does the truth table of a 4-input AND gate have?",
              answer: 16,
              explain: "$2^4 = 16$ input combinations. Only one of them (1111) gives output 1.",
            },
          ],
        },
        {
          type: "heading",
          text: "Derived gates: NAND, NOR, XOR",
        },
        {
          type: "text",
          md: "**NAND** = NOT of AND, $\\overline{A \\cdot B}$: output 0 only when all inputs are 1. Symbol: AND gate with a bubble.\n\n**NOR** = NOT of OR, $\\overline{A + B}$: output 1 only when all inputs are 0. Symbol: OR gate with a bubble.\n\n**XOR** (exclusive OR), $A \\oplus B$: output 1 when the inputs are **different** (for two inputs, when exactly one is 1). Symbol: OR gate with an extra curved line at its inputs.\n\nNAND and NOR are called **universal gates**, because NOT, AND and OR (and so any circuit) can be built using only NAND gates, or only NOR gates.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "& is AND, | is OR and ^ is XOR on the integers 0 and 1; 1 − x flips a bit.",
          code: t`print("A B | AND OR NAND NOR XOR")
for A in (0, 1):
    for B in (0, 1):
        AND = A & B
        OR = A | B
        NAND = 1 - AND
        NOR = 1 - OR
        XOR = A ^ B
        print(A, B, "|", AND, " ", OR, " ", NAND, "   ", NOR, " ", XOR)`,
        },
        {
          type: "table",
          headers: ["A", "B", "AND", "OR", "NAND", "NOR", "XOR"],
          rows: [
            ["0", "0", "0", "0", "1", "1", "0"],
            ["0", "1", "0", "1", "1", "0", "1"],
            ["1", "0", "0", "1", "1", "0", "1"],
            ["1", "1", "1", "1", "0", "0", "0"],
          ],
        },
        {
          type: "mistake",
          wrong: "OR and XOR are the same, so 1 OR 1 = 0.",
          right: "OR gives 1 when **at least one** input is 1, so 1 + 1 = 1. Only **XOR** gives 0 when both inputs are 1, because it needs the inputs to be different.",
          why: "In everyday speech \"tea or coffee\" means one, not both, which is the XOR idea. In Boolean logic, plain OR includes the case where both are true.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each gate with when its output is 1.",
            pairs: [
              ["AND", "All inputs are 1"],
              ["OR", "At least one input is 1"],
              ["NAND", "At least one input is 0"],
              ["NOR", "All inputs are 0"],
              ["XOR", "The two inputs differ"],
            ],
            explain: "NAND and NOR are just AND and OR with the output flipped: NAND is 1 except when all inputs are 1; NOR is 1 only when all inputs are 0.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you draw a gate, label the inputs and the output with the expression (for example, write $\\overline{A + B}$ at the output of a NOR gate). Make the bubble clearly visible: it is the only difference between AND and NAND, and between OR and NOR.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A gate gives output 0 only when both inputs are 1. Which gate is it?",
              options: ["NAND", "NOR", "AND", "XOR"],
              answer: 0,
              explain: "Output 0 only for 1,1 is the NAND truth table (1, 1, 1, 0). XOR is also 0 for 0,0.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Boolean values are 1 (True) and 0 (False); a truth table with n inputs has $2^n$ rows.",
            "NOT flips; AND is 1 only if all inputs are 1; OR is 1 if any input is 1.",
            "NAND = NOT AND, NOR = NOT OR (shown by a bubble at the output).",
            "XOR is 1 when the two inputs are different.",
            "NAND and NOR are universal gates.",
          ],
        },
      ],
      flashcards: [
        { front: "Truth table", back: "A table showing the output of a logic circuit for every possible combination of inputs ($2^n$ rows for n inputs)." },
        { front: "AND gate output", back: "1 only when all inputs are 1." },
        { front: "OR gate output", back: "1 when at least one input is 1." },
        { front: "NAND gate", back: "NOT of AND: output is 0 only when all inputs are 1." },
        { front: "NOR gate", back: "NOT of OR: output is 1 only when all inputs are 0." },
        { front: "XOR gate", back: "Exclusive OR: output is 1 when the two inputs are different." },
        { front: "Universal gates", back: "NAND and NOR: any logic circuit can be built using only one of them." },
        { front: "The bubble in a gate symbol", back: "A small circle meaning NOT (inversion) of the output." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output of an OR gate with inputs A = 1, B = 1?",
          options: ["1", "0", "2", "Undefined"],
          answer: 0,
          explain: "OR is 1 when at least one input is 1. In Boolean algebra 1 + 1 = 1 (there is no 2).",
        },
        {
          kind: "mcq",
          q: "For which inputs is a NOR gate's output 1?",
          options: ["A = 0, B = 0", "A = 1, B = 1", "A = 0, B = 1", "A = 1, B = 0"],
          answer: 0,
          explain: "NOR is NOT of OR. OR is 0 only for 0, 0, so NOR is 1 only then.",
        },
        {
          kind: "truefalse",
          q: "NOT, AND and OR can all be made using only NAND gates.",
          answer: true,
          explain: "That is why NAND is called a universal gate (and NOR too).",
        },
        {
          kind: "fill",
          q: "The output of $1 \\oplus 1$ (XOR) is ___.",
          answer: ["0"],
          explain: "XOR needs the inputs to differ. 1 and 1 are the same, so the output is 0.",
        },
        {
          kind: "numeric",
          q: "In the truth table of a 3-input NOR gate, in how many rows is the output 1?",
          answer: 1,
          explain: "There are $2^3 = 8$ rows. NOR is 1 only when all inputs are 0, which is just one row (000).",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which gates give output 1 for inputs A = 0, B = 1?",
          options: ["OR", "XOR", "NAND", "AND", "NOR"],
          answers: [0, 1, 2],
          explain: "OR (one input is 1), XOR (inputs differ) and NAND (not both 1) give 1. AND and NOR give 0.",
        },
        {
          kind: "mcq",
          q: "What does `print(1 & 0, 1 | 0, 1 ^ 1)` show in Python?",
          options: ["0 1 0", "1 1 0", "0 1 1", "0 0 0"],
          answer: 0,
          explain: "1 AND 0 = 0, 1 OR 0 = 1, 1 XOR 1 = 0.",
        },
      ],
    },
    {
      slug: "c11-cs-de-morgan-circuits",
      title: "Boolean Expressions, Logic Circuits and De Morgan's Laws",
      summary: "Evaluating Boolean expressions with truth tables, drawing a logic circuit from an expression, basic Boolean laws, and De Morgan's laws with a truth-table proof.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A **Boolean expression** joins Boolean variables with NOT, AND and OR, for example $Y = A \\cdot B + \\overline{C}$. Like BODMAS in arithmetic, there is an order: **brackets first, then NOT, then AND, then OR**. So $A \\cdot B + \\overline{C}$ means $(A \\cdot B) + (\\overline{C})$.\n\nA **logic circuit** is the gate diagram of an expression. Every expression can be drawn as a circuit, and every circuit can be written as an expression.",
        },
        {
          type: "example",
          title: "Truth table of an expression",
          problem: t`Make the truth table of $Y = A \cdot B + \overline{C}$.`,
          steps: [
            "Three variables, so $2^3 = 8$ rows. List A, B, C counting in binary from 000 to 111.",
            t`Add helper columns: $A \cdot B$ (1 only when A = B = 1) and $\overline{C}$ (the opposite of C).`,
            "Y is the OR of the two helper columns: Y = 1 if either helper is 1.",
            "Reading the table: Y = 0 only when C = 1 and A · B = 0, that is in rows 001, 011 and 101.",
          ],
          answer: "Y is 1 in five rows (000, 010, 100, 110, 111) and 0 in three rows (001, 011, 101).",
        },
        {
          type: "table",
          headers: ["A", "B", "C", "A · B", "C̄", "Y = A · B + C̄"],
          rows: [
            ["0", "0", "0", "0", "1", "1"],
            ["0", "0", "1", "0", "0", "0"],
            ["0", "1", "0", "0", "1", "1"],
            ["0", "1", "1", "0", "0", "0"],
            ["1", "0", "0", "0", "1", "1"],
            ["1", "0", "1", "0", "0", "0"],
            ["1", "1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "0", "1"],
          ],
        },
        {
          type: "text",
          md: "To **draw the circuit** of $Y = A \\cdot B + \\overline{C}$: feed C into a NOT gate to get $\\overline{C}$; feed A and B into an AND gate to get $A \\cdot B$; feed both of these into an OR gate, whose output is Y. Work from the innermost part of the expression outwards, and label the output of every gate.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the steps to draw the circuit for Y = (A + B) · C̄.",
            items: ["Write the input lines A, B and C", "Make A + B with an OR gate and C̄ with a NOT gate", "Feed A + B and C̄ into an AND gate", "Label the AND gate's output Y"],
            explain: "Build the bracket and the NOT first, then the operator that joins them, and label the final output.",
          },
        },
        {
          type: "heading",
          text: "De Morgan's laws",
        },
        {
          type: "formula",
          tex: t`\overline{A + B} = \overline{A}\cdot\overline{B} \qquad\qquad \overline{A \cdot B} = \overline{A} + \overline{B}`,
          caption: "De Morgan's laws: to complement an expression, complement each variable and change OR to AND (or AND to OR).",
        },
        {
          type: "text",
          md: "In words: **the complement of a sum is the product of the complements**, and **the complement of a product is the sum of the complements**. They also tell us that a NOR gate behaves like an AND gate with both inputs inverted, and a NAND gate like an OR gate with both inputs inverted.\n\nA Boolean law is proved by a truth table: if two expressions give the same output in **every** row, they are equal.",
        },
        {
          type: "table",
          headers: ["A", "B", "A + B", "(A + B)′", "A′", "B′", "A′ · B′"],
          rows: [
            ["0", "0", "0", "1", "1", "1", "1"],
            ["0", "1", "1", "0", "1", "0", "0"],
            ["1", "0", "1", "0", "0", "1", "0"],
            ["1", "1", "1", "0", "0", "0", "0"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Python checks the first law for every row. Both columns come out as 1, 0, 0, 0.",
          code: t`print("A B | not(A or B)  (not A) and (not B)")
for A in (False, True):
    for B in (False, True):
        left = not (A or B)
        right = (not A) and (not B)
        print(int(A), int(B), "|", int(left), "           ", int(right))`,
        },
        {
          type: "mistake",
          wrong: "The complement of (A + B) is A′ + B′: just put a bar on each letter.",
          right: "When you break the bar, you must also **change the operator**: $(A + B)′ = A′ \\cdot B′$ and $(A \\cdot B)′ = A′ + B′$.",
          why: "It looks like taking a minus sign inside brackets in algebra. Check row A = 0, B = 1: (A + B)′ = 0, but A′ + B′ = 1 + 0 = 1, so the shortcut fails.",
        },
        {
          type: "table",
          headers: ["Law", "OR form", "AND form"],
          rows: [
            ["Identity", "A + 0 = A", "A · 1 = A"],
            ["Null (domination)", "A + 1 = 1", "A · 0 = 0"],
            ["Idempotent", "A + A = A", "A · A = A"],
            ["Complement", "A + A′ = 1", "A · A′ = 0"],
            ["Involution", "(A′)′ = A", ""],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Prove De Morgan's law using a truth table\" is a common 3-mark question. Draw separate columns for each step, and finish with a sentence: *since the two columns are identical for all input combinations, the law is proved.*",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: t`By De Morgan's law, $\overline{P \cdot Q}$ equals:`,
              options: [t`$\overline{P} + \overline{Q}$`, t`$\overline{P} \cdot \overline{Q}$`, "$P + Q$", t`$\overline{P + Q}$`],
              answer: 0,
              explain: "Complement each variable and change AND to OR.",
            },
            {
              kind: "truefalse",
              q: t`For A = 1, B = 0, C = 1, the value of $Y = A \cdot B + \overline{C}$ is 0.`,
              answer: true,
              explain: "$A \\cdot B = 0$ and $\\overline{C} = 0$, so Y = 0 + 0 = 0.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Order of evaluation: brackets, NOT, AND, OR.",
            "Build a truth table with $2^n$ rows and a helper column for each part of the expression.",
            "Draw circuits from the inside of the expression outwards; label each gate's output.",
            "De Morgan: (A + B)′ = A′ · B′ and (A · B)′ = A′ + B′.",
            "Two expressions are equal if their truth-table columns match in every row.",
          ],
        },
      ],
      flashcards: [
        { front: "Order of Boolean operations", back: "Brackets, then NOT, then AND, then OR." },
        { front: "De Morgan's first law", back: "(A + B)′ = A′ · B′: the complement of a sum is the product of the complements." },
        { front: "De Morgan's second law", back: "(A · B)′ = A′ + B′: the complement of a product is the sum of the complements." },
        { front: "Complement law", back: "A + A′ = 1 and A · A′ = 0." },
        { front: "Null law", back: "A + 1 = 1 and A · 0 = 0." },
        { front: "How to prove a Boolean law", back: "Make a truth table for both sides; if the columns are identical for all inputs, the law holds." },
        { front: "NOR gate as an AND gate", back: "By De Morgan, a NOR gate equals an AND gate with both inputs inverted: (A + B)′ = A′ · B′." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: t`Which is equal to $\overline{A + B}$?`,
          options: [t`$\overline{A}\cdot\overline{B}$`, t`$\overline{A} + \overline{B}$`, t`$A \cdot B$`, t`$\overline{A \cdot B}$`],
          answer: 0,
          explain: "De Morgan's first law: break the bar and change + to ·.",
        },
        {
          kind: "numeric",
          q: t`In the truth table of $Y = A \cdot B + \overline{C}$, in how many rows is Y = 1?`,
          answer: 5,
          explain: "Y = 1 whenever C = 0 (4 rows) plus the row A = B = C = 1, so 5 rows.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "A · A′ = 1 for every value of A.",
          answer: false,
          explain: "A variable AND its complement is always **0** (one of them is always 0). It is A + A′ that is always 1.",
        },
        {
          kind: "fill",
          q: "In the expression A + B · C, the operation done first is ___.",
          answer: ["AND", "B · C", "B.C", "and"],
          explain: "AND comes before OR, so B · C is found first, then OR-ed with A.",
        },
        {
          kind: "mcq",
          q: t`Simplify $\overline{\overline{A} + \overline{B}}$ using De Morgan's law.`,
          options: ["$A \\cdot B$", "$A + B$", t`$\overline{A} \cdot \overline{B}$`, "1"],
          answer: 0,
          explain: "By De Morgan, it equals $\\overline{\\overline{A}} \\cdot \\overline{\\overline{B}}$, and by involution that is $A \\cdot B$.",
          difficulty: 2,
          hint: "Break the long bar, change + to ·, then use (A′)′ = A.",
        },
        {
          kind: "order",
          q: "Order the gates you meet from input to output in the circuit for Y = (A · B)′ + C.",
          items: ["AND gate on A and B", "NOT gate on A · B", "OR gate with C"],
          explain: "Innermost first: A · B, then its complement, then OR with C. (The AND and NOT together could also be one NAND gate.)",
        },
        {
          kind: "multi",
          q: "Select all identities that are **true**.",
          options: ["A + 1 = 1", "A · 0 = 0", "A + A = 2A", "(A′)′ = A"],
          answers: [0, 1, 3],
          explain: "In Boolean algebra A + A = A (idempotent law); there is no 2A.",
        },
      ],
    },
    {
      slug: "c11-cs-boolean-logic-practice",
      title: "Board practice: Boolean Logic",
      summary: "Mixed board-style questions: truth tables of expressions, applying De Morgan's laws, identifying gates, and a Python program that prints a truth table.",
      minutes: 20,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Boolean logic questions in the Class 11 paper are short but exact: draw a gate, complete a truth table, write the expression for a circuit, or prove a law. Practise these until every row is right; one wrong row usually costs the mark.",
        },
        {
          type: "example",
          title: "Spot the gate from its truth table",
          problem: t`Make the truth table of $Y = \overline{A} \cdot B + A \cdot \overline{B}$ and name the single gate it equals.`,
          steps: [
            t`Row 00: $\overline{A} \cdot B = 1 \cdot 0 = 0$ and $A \cdot \overline{B} = 0$, so Y = 0.`,
            t`Row 01: $\overline{A} \cdot B = 1 \cdot 1 = 1$, so Y = 1.`,
            t`Row 10: $A \cdot \overline{B} = 1 \cdot 1 = 1$, so Y = 1.`,
            "Row 11: both terms are 0, so Y = 0. The output column is 0, 1, 1, 0.",
          ],
          answer: t`Y is 1 only when the inputs differ: it is the XOR gate, $Y = A \oplus B$.`,
        },
        {
          type: "example",
          title: "Complement an expression",
          problem: "Find the complement of $A \\cdot B + C$ using De Morgan's laws.",
          steps: [
            "Treat $A \\cdot B$ as one block: $\\overline{(A \\cdot B) + C} = \\overline{A \\cdot B} \\cdot \\overline{C}$ (first law).",
            "Apply the second law to the block: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.",
            "Keep brackets so that OR is done before AND.",
          ],
          answer: t`$\overline{A \cdot B + C} = (\overline{A} + \overline{B}) \cdot \overline{C}$`,
        },
        {
          type: "mistake",
          wrong: "A truth table with 3 inputs needs 6 rows (2 × 3).",
          right: "It needs $2^3 = 8$ rows. Each input can be 0 or 1, so the count doubles with every new input.",
          why: "Students multiply 2 by the number of inputs instead of raising 2 to that power. Listing rows as binary numbers 000 to 111 avoids missing any.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Both inputs of a NAND gate are joined to A. What is the output?",
            emoji: "🔁",
            options: ["A′ (NOT A)", "A", "Always 0", "Always 1"],
            answer: 0,
            trap: 1,
            explain: "With both inputs equal to A, the output is $\\overline{A \\cdot A} = \\overline{A}$, since A · A = A. So a NAND gate with its inputs tied works as a NOT gate; this is the first step in showing NAND is universal.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A circuit feeds A and B into an OR gate, and that output into a NOT gate. Which single gate is this?",
              options: ["NOR", "NAND", "XOR", "AND"],
              answer: 0,
              explain: "NOT after OR gives $\\overline{A + B}$, which is NOR.",
            },
          ],
        },
        {
          type: "heading",
          text: "Write a small program",
        },
        {
          type: "text",
          md: "**Question (3 marks):** Write a Python program that prints the truth table of $Y = (A + B) \\cdot \\overline{C}$ using nested loops and the operators `or`, `and`, `not`.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Three nested loops give all 8 combinations in binary order.",
          code: t`print("A B C Y")
for A in (0, 1):
    for B in (0, 1):
        for C in (0, 1):
            Y = (A or B) and not C
            print(A, B, C, int(Y))`,
        },
        {
          type: "table",
          headers: ["A", "B", "C", "Y"],
          rows: [
            ["0", "0", "0", "0"],
            ["0", "0", "1", "0"],
            ["0", "1", "0", "1"],
            ["0", "1", "1", "0"],
            ["1", "0", "0", "1"],
            ["1", "0", "1", "0"],
            ["1", "1", "0", "1"],
            ["1", "1", "1", "0"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you are asked to write the expression of a given circuit, write the output of each gate on the diagram first, then combine them. For proofs, one column per sub-expression is safer than doing two steps in your head.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: t`For A = 0, B = 1, C = 0, what is $Y = (A + B) \cdot \overline{C}$?`,
              answer: 1,
              explain: "A + B = 1 and $\\overline{C} = 1$, so Y = 1 · 1 = 1.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "List inputs in binary order (000 to 111) so that no row is missed.",
            "A′B + AB′ is XOR; NOT after OR is NOR; NOT after AND is NAND.",
            "De Morgan: break the bar, change the operator, keep brackets.",
            "A NAND (or NOR) with both inputs tied together acts as a NOT gate.",
          ],
        },
      ],
      flashcards: [
        { front: "A′B + AB′", back: "The XOR of A and B: 1 when A and B differ." },
        { front: "Complement of A · B + C", back: "(A′ + B′) · C′" },
        { front: "Rows in a truth table with n inputs", back: "$2^n$" },
        { front: "NAND gate with inputs tied together", back: "Acts as a NOT gate: (A · A)′ = A′." },
        { front: "Python Boolean operators", back: "`not`, `and`, `or` (and `&`, `|`, `^` for bits)." },
        { front: "Output of OR followed by NOT", back: "NOR: (A + B)′" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which output column (rows 00, 01, 10, 11) belongs to the NAND gate?",
          options: ["1, 1, 1, 0", "0, 0, 0, 1", "1, 0, 0, 0", "0, 1, 1, 0"],
          answer: 0,
          explain: "NAND is the opposite of AND (0, 0, 0, 1). 1, 0, 0, 0 is NOR and 0, 1, 1, 0 is XOR.",
        },
        {
          kind: "truefalse",
          q: "(A + B + C)′ = A′ · B′ · C′",
          answer: true,
          explain: "De Morgan's law extends to any number of variables.",
        },
        {
          kind: "numeric",
          q: t`In the truth table of $Y = (A + B) \cdot \overline{C}$, how many rows have Y = 1?`,
          answer: 3,
          explain: "C must be 0 (4 rows) and A + B must be 1, which removes the row A = B = 0. So 3 rows: 010, 100, 110.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What does `print(not (1 and 0), (0 or 1) and 0)` show?",
          options: ["True 0", "False 1", "True 1", "0 0"],
          answer: 0,
          explain: "1 and 0 gives 0, and not 0 is True. (0 or 1) gives 1, and 1 and 0 gives 0. Python prints True 0.",
          difficulty: 2,
          hint: "`not` always gives True or False; `and` / `or` give one of their operands.",
        },
        {
          kind: "fill",
          q: "A gate whose output is 1 only when both inputs are 0 is the ___ gate.",
          answer: ["NOR"],
          explain: "NOR = NOT of OR; OR is 0 only for 0, 0.",
        },
        {
          kind: "mcq",
          q: "Which expression describes: the light is on when switch A is on and switch B is off?",
          options: [t`$A \cdot \overline{B}$`, t`$\overline{A} \cdot B$`, "$A + B$", t`$\overline{A \cdot B}$`],
          answer: 0,
          explain: "\"A on\" is A, \"B off\" is B′, and \"and\" is AND.",
        },
        {
          kind: "multi",
          q: "Select all gates that are universal gates.",
          options: ["NAND", "NOR", "XOR", "AND"],
          answers: [0, 1],
          explain: "Only NAND and NOR can build every other gate on their own.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const problemSolving: Topic = {
  slug: "c11-cs-problem-solving",
  title: "Introduction to Problem Solving",
  icon: "🧠",
  description: "Steps of problem solving, algorithms and their characteristics, flowcharts, pseudocode, flow of control, verifying and comparing algorithms, coding and decomposition.",
  lessons: [
    {
      slug: "c11-cs-algorithms-flowcharts",
      title: "Problem Solving Steps, Algorithms and Flowcharts",
      summary: "The four steps of problem solving, what an algorithm is and the qualities of a good one, and how to draw a flowchart with the standard symbols.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🍳",
          caption: "A recipe for upma lists the ingredients, then exact steps in order, and ends when the dish is ready. A computer needs instructions written in the same careful way, because it cannot guess what you meant.",
        },
        {
          type: "text",
          md: "A computer can solve a problem only when it is told exactly how. **Problem solving** is the process of finding the problem, designing a solution and writing it as a program. It has four steps:\n\n1. **Analysing the problem**: understand what is given (the **input**) and what is wanted (the **output**).\n2. **Developing an algorithm**: write the step-by-step method in plain language.\n3. **Coding**: turn the algorithm into a program in a programming language such as Python.\n4. **Testing and debugging**: run the program with different inputs, find errors (**bugs**) and correct them.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the problem-solving steps in order.",
            items: ["Analyse the problem", "Develop an algorithm", "Code the algorithm", "Test and debug the program"],
            explain: "You cannot plan a method before you know the input and output, and you cannot test code you have not written. Writing code first, without an algorithm, is the most common cause of confused programs.",
          },
        },
        {
          type: "text",
          md: "An **algorithm** is a finite sequence of clear steps that solves a problem. A good algorithm has these characteristics:\n\n- **Precision**: each step is stated exactly, with no doubt about what to do.\n- **Uniqueness**: the result of each step is uniquely defined and depends only on the input and the earlier steps.\n- **Finiteness**: it stops after a finite number of steps.\n- **Input**: it takes zero or more inputs.\n- **Output**: it produces at least one result.",
        },
        {
          type: "example",
          title: "Writing an algorithm",
          problem: "Write an algorithm to find the sum of the first N natural numbers.",
          steps: [
            "Step 1: Input N.",
            "Step 2: Set total = 0 and count = 1.",
            "Step 3: While count ≤ N, repeat steps 4 and 5.",
            "Step 4: total = total + count. Step 5: count = count + 1.",
            "Step 6: Print total. Step 7: Stop.",
          ],
          answer: "For N = 5 the algorithm adds 1 + 2 + 3 + 4 + 5 and prints 15. It is finite because count grows by 1 each time and the loop ends when count becomes 6.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "The same algorithm in Python. Change N and run again.",
          code: t`N = 5
total = 0
count = 1
while count <= N:
    total = total + count
    count = count + 1
print("Sum of first", N, "natural numbers =", total)`,
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A set of steps keeps repeating and never stops. Which characteristic of an algorithm does it break?",
              options: ["Finiteness", "Precision", "Input", "Uniqueness"],
              answer: 0,
              explain: "An algorithm must end after a finite number of steps.",
            },
          ],
        },
        {
          type: "heading",
          text: "Flowcharts",
        },
        {
          type: "text",
          md: "A **flowchart** is a picture of an algorithm. Each kind of step has its own box shape, and **arrows** show the order in which steps are carried out. A flowchart is easy to follow and makes loops and decisions visible at a glance.",
        },
        {
          type: "table",
          headers: ["Symbol", "Name", "Used for"],
          rows: [
            ["Oval (rounded rectangle)", "Terminal", "Start and Stop (End)"],
            ["Parallelogram", "Input / Output", "reading data (INPUT) or showing a result (PRINT)"],
            ["Rectangle", "Process", "a calculation or assignment, e.g. total = total + count"],
            ["Diamond", "Decision", "a yes/no question, e.g. Is A > B?, with two exit arrows"],
            ["Arrow", "Flow line", "joins symbols and shows the direction of flow"],
          ],
        },
        {
          type: "text",
          md: "**Flowchart for the larger of two numbers:** Start (oval) → Input A, B (parallelogram) → Is A > B? (diamond). The **Yes** arrow goes to Print A (parallelogram); the **No** arrow goes to Print B (parallelogram). Both arrows then join and go to Stop (oval).",
        },
        {
          type: "mistake",
          wrong: "A decision box is just like a process box: one arrow in, one arrow out.",
          right: "A **decision** (diamond) asks a yes/no question and always has **two** exits, labelled Yes and No (or True and False). A process (rectangle) has one exit.",
          why: "When students draw a decision with one exit, the flowchart cannot show what happens in the other case. Every question has two possible answers, so it needs two paths.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Use the correct shape for every step and label both arrows of each diamond. Start and Stop must both appear. Marks are lost for using a rectangle for input or output: input and output always go in a parallelogram.",
        },
        {
          type: "keypoints",
          items: [
            "Problem solving: analyse → develop an algorithm → code → test and debug.",
            "An algorithm is a finite sequence of precise steps; a good one has precision, uniqueness, finiteness, input and output.",
            "Flowchart symbols: oval (start/stop), parallelogram (input/output), rectangle (process), diamond (decision), arrow (flow).",
            "A decision box has two exits, Yes and No.",
          ],
        },
      ],
      flashcards: [
        { front: "Algorithm", back: "A finite sequence of clear, precise steps for solving a problem." },
        { front: "Four steps of problem solving", back: "Analyse the problem, develop an algorithm, code, test and debug." },
        { front: "Finiteness", back: "An algorithm must stop after a finite number of steps." },
        { front: "Precision (of an algorithm)", back: "Every step is stated clearly and exactly." },
        { front: "Parallelogram in a flowchart", back: "Input or output step." },
        { front: "Diamond in a flowchart", back: "Decision: a yes/no question with two exit arrows." },
        { front: "Oval in a flowchart", back: "Terminal: Start or Stop." },
        { front: "Debugging", back: "Finding and correcting errors (bugs) in a program." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which flowchart symbol is used for `total = total + count`?",
          options: ["Rectangle (process)", "Diamond (decision)", "Parallelogram (input/output)", "Oval (terminal)"],
          answer: 0,
          explain: "A calculation or assignment is a process step.",
        },
        {
          kind: "mcq",
          q: "Which symbol is used for `PRINT total`?",
          options: ["Parallelogram", "Rectangle", "Diamond", "Oval"],
          answer: 0,
          explain: "Input and output both use the parallelogram.",
        },
        {
          kind: "truefalse",
          q: "An algorithm must always take at least one input.",
          answer: false,
          explain: "An algorithm takes **zero or more** inputs (for example, printing the first 10 even numbers needs no input), but it must give at least one output.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the flowchart symbols for: read a number and print its square.",
          items: ["Oval: Start", "Parallelogram: Input N", "Rectangle: S = N × N", "Parallelogram: Print S", "Oval: Stop"],
          explain: "Start → input → process → output → stop.",
        },
        {
          kind: "fill",
          q: "Finding and removing errors from a program is called ___.",
          answer: ["debugging"],
          explain: "Errors are bugs; removing them is **debugging**.",
        },
        {
          kind: "numeric",
          q: "The sum algorithm in this lesson is run with N = 10. What does it print?",
          answer: 55,
          explain: "1 + 2 + … + 10 = 10 × 11 ÷ 2 = 55.",
        },
        {
          kind: "multi",
          q: "Select all characteristics of a good algorithm.",
          options: ["Precision", "Finiteness", "Uniqueness", "It must be written in Python"],
          answers: [0, 1, 2],
          explain: "An algorithm is language-independent; it is written in plain steps and coded later.",
        },
      ],
    },
    {
      slug: "c11-cs-pseudocode-decomposition",
      title: "Pseudocode, Flow of Control, Verifying and Comparing Algorithms, Decomposition",
      summary: "Writing pseudocode, the three kinds of flow of control, dry-running an algorithm, comparing two algorithms for the same problem, and breaking a big problem into parts.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "**Pseudocode** is a way of writing an algorithm in plain English mixed with a few keywords, set out like a program but not in any real programming language. It is easy to read, easy to turn into code, and lets you ignore language rules while planning. Common keywords: **INPUT**, **COMPUTE**, **PRINT**, **INCREMENT**, **DECREMENT**, **IF / ELSE**, **WHILE**, **TRUE / FALSE**.",
        },
        {
          type: "example",
          title: "Pseudocode with a decision",
          problem: "Write pseudocode that reads a student's marks and prints Pass if the marks are 33 or more, otherwise Fail. Then write it in Python.",
          steps: [
            "INPUT marks",
            "IF marks >= 33 THEN PRINT \"Pass\"",
            "ELSE PRINT \"Fail\"",
            "In Python: `if marks >= 33:` followed by an indented `print(\"Pass\")`, then `else:` with an indented `print(\"Fail\")`. With marks = 78 it prints Pass.",
          ],
          answer: "Pseudocode is close enough to Python that each line turns into one or two lines of code.",
        },
        {
          type: "text",
          md: "The order in which steps run is the **flow of control**. There are three kinds:\n\n- **Sequence**: steps run one after another, in the order written.\n- **Selection** (decision): one of two or more paths is chosen depending on a condition (IF / ELSE).\n- **Repetition** (iteration, loop): a set of steps is repeated while a condition is true (WHILE).",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Repetition: the two indented lines run five times.",
          code: t`num = 3
i = 1
while i <= 5:
    print(num, "x", i, "=", num * i)
    i = i + 1`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which flow of control does each task need?",
            groups: ["Sequence", "Selection", "Repetition"],
            items: [
              { text: "Read length and breadth, then print the area", group: 0, hint: "The steps simply follow one another." },
              { text: "Print Adult if age is 18 or more, else Minor", group: 1, hint: "A choice depends on a condition." },
              { text: "Find whether a number is odd or even", group: 1, hint: "Two possible outputs, one condition." },
              { text: "Print the numbers 1 to 100", group: 2, hint: "The same step is done again and again." },
              { text: "Keep asking for a password until it is correct", group: 2, hint: "Repeat while a condition holds." },
              { text: "Convert a temperature from °C to °F once", group: 0, hint: "One formula, no choices, no repeats." },
            ],
            explain: "Real programs mix all three, but each task has one main shape. Look for words like \"if\" (selection) and \"until\" or \"each\" (repetition).",
          },
        },
        {
          type: "heading",
          text: "Verifying and comparing algorithms",
        },
        {
          type: "text",
          md: "To **verify** an algorithm we **dry run** it: we act as the computer, take sample inputs, and write the value of each variable after every step in a table. If the final output matches the expected answer for several inputs (including edge cases like 0 or 1), the algorithm is likely correct. Here is the dry run of the sum algorithm for N = 3:",
        },
        {
          type: "table",
          headers: ["Step", "count", "count ≤ N?", "total"],
          rows: [
            ["start", "1", "", "0"],
            ["loop 1", "1 → 2", "yes", "0 + 1 = 1"],
            ["loop 2", "2 → 3", "yes", "1 + 2 = 3"],
            ["loop 3", "3 → 4", "yes", "3 + 3 = 6"],
            ["check", "4", "no, loop ends", "print 6"],
          ],
        },
        {
          type: "text",
          md: "Two correct algorithms for the same problem can differ in how much **time** (number of steps) and **space** (memory) they need. To test whether 97 is prime, method A divides 97 by every number from 2 to 96 (95 divisions). Method B divides only by numbers d with $d \\times d \\le 97$, i.e. 2 to 9, because if 97 had a factor bigger than 9 it would also have one smaller than 9. Method B gives the same answer with only 8 divisions, so it is the better algorithm.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Method B: stop at the square root. Try n = 91 (= 7 × 13).",
          code: t`n = 97
checks = 0
is_prime = n > 1
d = 2
while d * d <= n:
    checks = checks + 1
    if n % d == 0:
        is_prime = False
        break
    d = d + 1
print(n, "is prime:", is_prime, "| divisions tried:", checks)`,
        },
        {
          type: "mistake",
          wrong: "If two algorithms give the correct answer, they are equally good.",
          right: "Both are **correct**, but the one needing fewer steps (less time) or less memory is **more efficient**, and is preferred, especially for large inputs.",
          why: "For small inputs the difference is invisible. For a 12-digit number, trying every divisor would take far longer than stopping at the square root.",
        },
        {
          type: "text",
          md: "**Decomposition** means breaking a complex problem into smaller sub-problems, solving each separately (often by different people) and then joining the parts. An online railway ticket system, for example, can be split into: searching trains, checking seat availability, collecting passenger details, payment, and printing the ticket. Each part is simpler to design, code and test.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Writing down each variable's value after every step, using sample input, is called:",
              options: ["Dry run", "Decomposition", "Compiling", "Coding"],
              answer: 0,
              explain: "A **dry run** verifies an algorithm by hand, before or without running it on a computer.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you write pseudocode, indent the steps inside IF, ELSE and WHILE, and use the standard keywords in capitals. For \"why is decomposition useful?\", give two points: each part is easier to solve and test, and different people can work on different parts at the same time.",
        },
        {
          type: "keypoints",
          items: [
            "Pseudocode: plain-English steps with keywords like INPUT, COMPUTE, PRINT, IF/ELSE, WHILE.",
            "Flow of control: sequence, selection (IF/ELSE), repetition (WHILE).",
            "Verify an algorithm by dry running it with sample inputs in a trace table.",
            "Compare correct algorithms by time (steps) and space (memory).",
            "Decomposition breaks a complex problem into simpler sub-problems.",
          ],
        },
      ],
      flashcards: [
        { front: "Pseudocode", back: "An algorithm written in plain English with programming-like keywords, not in any real language." },
        { front: "Three kinds of flow of control", back: "Sequence, selection, repetition." },
        { front: "Selection", back: "Choosing one path from two or more depending on a condition (IF / ELSE)." },
        { front: "Repetition", back: "Repeating a set of steps while a condition is true (a loop)." },
        { front: "Dry run", back: "Tracing an algorithm by hand with sample input, recording variable values at each step." },
        { front: "Comparing algorithms", back: "By the time (number of steps) and space (memory) they need for the same problem." },
        { front: "Decomposition", back: "Breaking a complex problem into smaller, simpler sub-problems." },
        { front: "Why check divisors only up to √n?", back: "If n has a factor larger than √n, it must also have one smaller than √n, so smaller checks are enough." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "\"Print the multiplication table of 7 from 1 to 10\" mainly needs:",
          options: ["Repetition", "Selection", "Sequence only", "Decomposition"],
          answer: 0,
          explain: "The same multiply-and-print step is repeated 10 times.",
        },
        {
          kind: "truefalse",
          q: "Pseudocode must follow the exact grammar of Python.",
          answer: false,
          explain: "Pseudocode is language-independent; it is meant for people to read, not for a computer to run.",
        },
        {
          kind: "numeric",
          q: "Method B in this lesson tests whether 101 is prime. How many divisions does it try?",
          answer: 9,
          explain: "It divides by 2, 3, …, 10 (since 10 × 10 = 100 ≤ 101 and 11 × 11 = 121 > 101). None divides 101, so 9 divisions.",
          difficulty: 2,
          hint: "Find the largest d with d × d ≤ 101.",
        },
        {
          kind: "fill",
          q: "Breaking a big problem into smaller sub-problems is called ___.",
          answer: ["decomposition"],
          explain: "That is **decomposition**.",
        },
        {
          kind: "mcq",
          q: "In the dry run of the sum algorithm with N = 3, what is the value of count when the loop stops?",
          options: ["4", "3", "6", "0"],
          answer: 0,
          explain: "The loop stops only when count ≤ N becomes false, which first happens at count = 4.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which keywords are commonly used in pseudocode?",
          options: ["INPUT", "WHILE", "PRINT", "def"],
          answers: [0, 1, 2],
          explain: "`def` is a Python keyword; pseudocode uses language-free words like INPUT, PRINT, IF, WHILE.",
        },
        {
          kind: "order",
          q: "Order the lines of pseudocode to print the larger of A and B.",
          items: ["INPUT A, B", "IF A > B THEN", "PRINT A", "ELSE", "PRINT B"],
          explain: "Input first, then the decision with its two branches.",
        },
      ],
    },
    {
      slug: "c11-cs-problem-solving-practice",
      title: "Board practice: Introduction to Problem Solving",
      summary: "Board-style questions on algorithms, flowcharts, pseudocode and dry runs, with a Python program to find the largest of three numbers.",
      minutes: 20,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "This chapter's board questions ask you to write an algorithm, draw a flowchart, write pseudocode, or trace (dry run) given steps and write the output. Plan the input and output first every time.",
        },
        {
          type: "example",
          title: "Algorithm with selection",
          problem: "An electricity board charges ₹5 per unit for the first 100 units and ₹7 per unit for every unit above 100. Write pseudocode to print the bill, and find the bill for 250 units.",
          steps: [
            "INPUT units",
            "IF units <= 100 THEN COMPUTE bill = units × 5",
            "ELSE COMPUTE bill = 100 × 5 + (units − 100) × 7",
            "PRINT bill",
            "For 250 units: 100 × 5 = 500 and 150 × 7 = 1050, so bill = 500 + 1050.",
          ],
          answer: "The bill for 250 units is ₹1550.",
        },
        {
          type: "example",
          title: "Dry run and output",
          problem: "Trace these steps and give the output: n = 6, s = 0, i = 1; WHILE i <= n: IF i is even THEN s = s + i; i = i + 1. PRINT s.",
          steps: [
            "i = 1: odd, s stays 0. i = 2: even, s = 2. i = 3: odd.",
            "i = 4: even, s = 2 + 4 = 6. i = 5: odd.",
            "i = 6: even, s = 6 + 6 = 12. i becomes 7, 7 <= 6 is false, the loop ends.",
          ],
          answer: "Output: 12 (the sum of the even numbers 2, 4 and 6).",
        },
        {
          type: "mistake",
          wrong: "In a WHILE loop, I only need to write the work to repeat; the loop will stop by itself.",
          right: "Something inside the loop must change the condition, e.g. **INCREMENT i**. Without it the condition stays true and the loop never ends (an **infinite loop**).",
          why: "In a for-each style of thinking the counting seems automatic. In a WHILE loop the programmer must update the variable, or the algorithm breaks the finiteness rule.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the steps to find the largest of three numbers.",
            items: ["INPUT a, b, c", "SET largest = a", "IF b > largest THEN largest = b", "IF c > largest THEN largest = c", "PRINT largest"],
            explain: "Start by assuming the first number is the largest, then let each other number replace it only if it is bigger. This idea works for any number of values.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "Using the electricity rule above, what is the bill (in ₹) for 80 units?",
              answer: 400,
              explain: "80 ≤ 100, so bill = 80 × 5 = 400.",
            },
          ],
        },
        {
          type: "heading",
          text: "Write a small program",
        },
        {
          type: "text",
          md: "**Question (3 marks):** Write a Python program to find the largest of three numbers stored in a, b and c.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "The same steps as the pseudocode above. Try other values for a, b and c.",
          code: t`a, b, c = 14, 31, 27
largest = a
if b > largest:
    largest = b
if c > largest:
    largest = c
print("Largest:", largest)`,
        },
        {
          type: "text",
          md: "Output: `Largest: 31`\n\nTest it with the largest value in each position (first, middle, last) and with two equal values. Testing different kinds of input is part of the fourth problem-solving step.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In \"write the output\" questions, write a small trace table even if it is not asked; it prevents off-by-one mistakes. In flowcharts, connect every path to Stop, and make loops visible with an arrow going back to the decision box.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "Trace: x = 10, y = 3; WHILE x > 0: x = x − y. PRINT x. What is printed?",
              answer: -2,
              explain: "x goes 10 → 7 → 4 → 1 → −2. Now x > 0 is false, so −2 is printed.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Write INPUT, process and PRINT clearly in every algorithm.",
            "Selection problems (bills, grades) need IF / ELSE with the exact boundary (≤ or <).",
            "Every WHILE loop must change its condition, or it never ends.",
            "Dry run with a table to get output questions right.",
          ],
        },
      ],
      flashcards: [
        { front: "Infinite loop", back: "A loop whose condition never becomes false, so it never ends." },
        { front: "Trace table", back: "A table showing each variable's value after every step during a dry run." },
        { front: "Largest-of-three idea", back: "Assume the first is largest, then replace it by any later value that is bigger." },
        { front: "Bill for 250 units at ₹5 (first 100) and ₹7 (rest)", back: "100 × 5 + 150 × 7 = ₹1550" },
        { front: "Sum of even numbers from 1 to 6", back: "2 + 4 + 6 = 12" },
        { front: "Why test with several inputs?", back: "To check every path (each IF branch) and edge cases, such as equal values or 0." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which step is missing from this loop? i = 1; WHILE i <= 5: PRINT i",
          options: ["INCREMENT i inside the loop", "INPUT i", "PRINT i again", "DECREMENT 5"],
          answer: 0,
          explain: "Without increasing i, i <= 5 is always true and the loop never ends.",
        },
        {
          kind: "numeric",
          q: "Using the electricity rule (₹5 for the first 100 units, ₹7 for each unit above), what is the bill for 101 units?",
          answer: 507,
          explain: "100 × 5 + 1 × 7 = 500 + 7 = 507.",
        },
        {
          kind: "mcq",
          q: "With a = 9, b = 9, c = 4, what does the largest-of-three program print?",
          options: ["Largest: 9", "Largest: 4", "Largest: 18", "An error"],
          answer: 0,
          explain: "largest starts at 9; b > largest is false (9 > 9 is false), c > largest is false. It prints 9.",
        },
        {
          kind: "truefalse",
          q: "A flowchart may have more than one arrow leading into the Stop symbol.",
          answer: true,
          explain: "Different paths (for example, the Yes and No branches) can all end at the same Stop.",
        },
        {
          kind: "numeric",
          q: "Trace: s = 0; FOR k from 1 to 4: s = s + k × k. PRINT s.",
          answer: 30,
          explain: "1 + 4 + 9 + 16 = 30.",
        },
        {
          kind: "fill",
          q: "A step-by-step hand trace of an algorithm with sample input is called a ___ run.",
          answer: ["dry"],
          explain: "A **dry run**.",
        },
        {
          kind: "order",
          q: "Put the problem-solving steps for the bill program in order.",
          items: ["Identify input (units) and output (bill)", "Write the pseudocode with IF / ELSE", "Code it in Python", "Test with 80, 100 and 250 units"],
          explain: "Analyse, design, code, test. Testing at the boundary (100) checks the ≤ condition.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
const pythonStart: Topic = {
  slug: "c11-cs-getting-started-python",
  title: "Getting Started with Python",
  icon: "🐍",
  description: "Features of Python, execution modes, tokens, identifiers, variables and comments, objects and data types, mutable and immutable types, operators and precedence, input and output, type conversion and debugging.",
  lessons: [
    {
      slug: "c11-cs-python-basics",
      title: "Python Basics: Features, Modes, Tokens and Variables",
      summary: "Why Python, interactive and script mode, the five kinds of tokens, rules for identifiers, variables and comments.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🐍",
          caption: "The same few lines of Python can add marks for a class in Hubballi, run a weather model, or sort lakhs of train bookings. It is one of the most used programming languages in the world, and the language of the CBSE and Karnataka PUC Computer Science syllabus.",
        },
        {
          type: "text",
          md: "**Python** is a high-level, general-purpose programming language created by **Guido van Rossum** and first released in **1991**. Its main features:\n\n- **Free and open source**: anyone can download, use and share it.\n- **Interpreted**: the Python interpreter executes the program one statement at a time.\n- **Easy to read**: simple, English-like syntax, with **indentation** (spaces at the start of a line) used to mark blocks of code instead of brackets.\n- **Case-sensitive**: `Marks` and `marks` are different names.\n- **Portable and platform independent**: the same program runs on Windows, Linux and macOS.\n- **Rich library** of ready-made modules, used in web development, data science, AI and more.",
        },
        {
          type: "text",
          md: "Python can be used in two **execution modes**.\n\n**Interactive mode**: type a statement at the **>>>** prompt of the Python shell and press Enter; the result appears at once. Typing `5 + 3` shows `8`. It is good for testing small pieces, but the statements are not saved.\n\n**Script mode**: write the program in a file with the extension **.py**, save it, and run it (in IDLE: Run → Run Module, or press **F5**). The program can be saved, edited and run again. In script mode you must use `print()` to see a value.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Output: Welcome to Hubballi, then Total fee: 52521.0 (42 × 1250.50).",
          code: t`# A first program in script mode
city = "Hubballi"
students = 42
fee = 1250.50
print("Welcome to", city)
print("Total fee:", students * fee)`,
        },
        {
          type: "heading",
          text: "Tokens",
        },
        {
          type: "text",
          md: "The smallest meaningful unit of a program is a **token**. Python has five kinds:\n\n- **Keywords**: reserved words with a fixed meaning, such as `if`, `else`, `while`, `for`, `def`, `import`, `True`, `False`, `None`, `and`, `or`, `not`. Python 3 has **35** keywords; they cannot be used as names.\n- **Identifiers**: names given to variables, functions and so on, like `city` or `fee`.\n- **Literals**: fixed values written directly: `42`, `1250.50`, `\"Hubballi\"`, `True`.\n- **Operators**: symbols that act on values: `+`, `*`, `==`, `and`.\n- **Punctuators** (delimiters): symbols that organise code: `( ) [ ] { } , : . = #` and quotes.",
        },
        {
          type: "example",
          title: "Identifying tokens",
          problem: "List the tokens in the statement `if total >= 100: print(\"Bonus\")`, by kind.",
          steps: [
            "Keyword: `if` (and nothing else is reserved here, as `print` is a built-in function name, not a keyword).",
            "Identifiers: `total` and `print`.",
            "Operator: `>=`. Literals: `100` and `\"Bonus\"`.",
            "Punctuators: `:` `(` `)`.",
          ],
          answer: "Keyword if; identifiers total, print; operator >=; literals 100, \"Bonus\"; punctuators : ( ).",
        },
        {
          type: "text",
          md: "**Rules for identifiers:** they may contain letters (a–z, A–Z), digits (0–9) and the underscore `_`; they **must not start with a digit**; they **cannot contain spaces or special symbols** such as `@ % & -`; and they **cannot be a keyword**. Python is case-sensitive, so `Total` and `total` are different identifiers. Choose meaningful names like `marks_maths`, not `mm`.\n\nA **variable** is an identifier that refers to a value stored in memory. In Python a variable is created the moment a value is **assigned** to it with `=`; no separate declaration is needed: `students = 42`.\n\nA **comment** starts with `#`; the interpreter ignores everything after it on that line. Comments explain the code to people.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is it a valid Python identifier?",
            groups: ["Valid", "Not valid"],
            items: [
              { text: "roll_no", group: 0, hint: "Letters and an underscore are allowed." },
              { text: "_total2", group: 0, hint: "An identifier may start with an underscore." },
              { text: "Marks", group: 0, hint: "Capital letters are allowed; it differs from marks." },
              { text: "2ndTerm", group: 1, hint: "An identifier cannot start with a digit." },
              { text: "first name", group: 1, hint: "Spaces are not allowed." },
              { text: "while", group: 1, hint: "It is a keyword." },
              { text: "net-pay", group: 1, hint: "The hyphen is the minus operator." },
              { text: "True", group: 1, hint: "True is a keyword (a Boolean literal)." },
            ],
            explain: "Check three things in order: only letters, digits and _; does not start with a digit; is not a keyword.",
          },
        },
        {
          type: "mistake",
          wrong: "Python does not care about capital letters, so `Print(\"Hi\")` works like `print(\"Hi\")`.",
          right: "Python is **case-sensitive**. `Print` is an unknown name, so the program stops with **NameError: name 'Print' is not defined**.",
          why: "Some other software (like many search boxes) ignores case, so learners expect the same. In Python every identifier and keyword must match its exact spelling and case.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In which mode can a program be saved and run again later?",
              options: ["Script mode", "Interactive mode", "Both equally", "Neither"],
              answer: 0,
              explain: "Script mode saves the program as a .py file. Statements typed at the >>> prompt are lost when the shell is closed.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "\"Identify valid and invalid identifiers, giving reasons\" is a very common 2-mark question. Give the exact rule each invalid one breaks: *starts with a digit*, *contains a space*, *contains a special character*, or *is a keyword*.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many keywords does Python 3 have (as listed by the keyword module in current versions)?",
              answer: 35,
              explain: "`import keyword; print(len(keyword.kwlist))` prints 35.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Python: high-level, interpreted, free and open source, case-sensitive, portable, uses indentation; by Guido van Rossum, 1991.",
            "Interactive mode (>>> prompt, not saved) and script mode (.py file, saved, run with F5).",
            "Five tokens: keywords, identifiers, literals, operators, punctuators.",
            "Identifiers: letters, digits, _; not starting with a digit; no spaces or symbols; not a keyword.",
            "A variable is created by assignment; # starts a comment.",
          ],
        },
      ],
      flashcards: [
        { front: "Who created Python, and when was it first released?", back: "Guido van Rossum; 1991." },
        { front: "Interactive mode", back: "Statements typed at the >>> prompt run immediately; they are not saved." },
        { front: "Script mode", back: "The program is written and saved in a .py file and then run as a whole." },
        { front: "Token", back: "The smallest meaningful unit of a program: keyword, identifier, literal, operator or punctuator." },
        { front: "Keyword", back: "A reserved word with a special meaning in Python (if, while, True, None…); it cannot be used as an identifier." },
        { front: "Literal", back: "A fixed value written directly in code, e.g. 42, 3.5, \"Delhi\", True." },
        { front: "Rules for identifiers", back: "Letters, digits and _ only; cannot start with a digit; no spaces or special symbols; not a keyword." },
        { front: "Comment", back: "Text after # that the interpreter ignores; it explains the code to people." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is a valid identifier?",
          options: ["total_marks", "total marks", "1total", "total@marks"],
          answer: 0,
          explain: "Only total_marks follows the rules: no space, does not start with a digit, no special symbol.",
        },
        {
          kind: "multi",
          q: "Select all Python keywords.",
          options: ["None", "elif", "print", "pass", "main"],
          answers: [0, 1, 3],
          explain: "None, elif and pass are keywords. print is a built-in function and main is an ordinary name.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In Python, a variable must be declared with its type before it is used.",
          answer: false,
          explain: "A Python variable is created when a value is first assigned to it; its type comes from the value.",
        },
        {
          kind: "mcq",
          q: "In the statement `area = 3.14 * r * r`, what kind of token is `3.14`?",
          options: ["Literal", "Identifier", "Keyword", "Punctuator"],
          answer: 0,
          explain: "3.14 is a fixed value written in the code: a (floating-point) literal.",
        },
        {
          kind: "fill",
          q: "Python files are saved with the extension ___.",
          answer: [".py", "py"],
          explain: "Python script files end in **.py**.",
        },
        {
          kind: "mcq",
          q: "What does Python do with the line `# total of marks`?",
          options: ["Ignores it", "Prints it", "Stores it in a variable", "Gives a syntax error"],
          answer: 0,
          explain: "A line starting with # is a comment and is ignored by the interpreter.",
        },
        {
          kind: "truefalse",
          q: "`Name` and `name` refer to the same variable in Python.",
          answer: false,
          explain: "Python is case-sensitive, so they are two different identifiers.",
        },
      ],
    },
    {
      slug: "c11-cs-python-data-types",
      title: "Objects and Data Types; Mutable and Immutable",
      summary: "Everything in Python is an object with an identity, type and value; the built-in data types (numbers, sequences, sets, None, dictionaries); and which of them can be changed in place.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "In Python **every value is an object**. Each object has an **identity** (a unique number, like its address in memory, shown by `id()`), a **type** (shown by `type()`) and a **value**. A variable does not hold the value inside itself; it is a **name that refers to an object**. Two names can refer to the same object.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Output: True, then 10 15, then False.",
          code: t`num1 = 10
num2 = num1
print(id(num1) == id(num2))
num2 = num2 + 5
print(num1, num2)
print(id(num1) == id(num2))`,
        },
        {
          type: "text",
          md: "After `num2 = num1`, both names refer to the same object 10, so their ids are equal. `num2 + 5` makes a **new** object 15, and `num2` now refers to it. The object 10 did not change; `num1` still refers to it.",
        },
        {
          type: "table",
          headers: ["Category", "Type", "Example literals"],
          rows: [
            ["Number", "`int` (integer)", "`25`, `-7`, `0`"],
            ["Number", "`float` (real number)", "`3.75`, `-0.5`, `2.0`"],
            ["Number", "`complex`", "`2 + 3j` (j is the imaginary unit)"],
            ["Number", "`bool` (a sub-type of int)", "`True` (behaves as 1), `False` (behaves as 0)"],
            ["Sequence", "`str`, `list`, `tuple`", "`\"CBSE\"`, `[1, 2]`, `(1, 2)`"],
            ["Set", "`set`", "`{1, 2}`: unordered, no duplicates"],
            ["None", "`NoneType`", "`None`: means no value"],
            ["Mapping", "`dict` (dictionary)", "`{\"roll\": 7}`: key–value pairs"],
          ],
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "type() of each value. The output shows <class 'int'>, <class 'float'>, <class 'complex'>, <class 'bool'>, <class 'str'>, <class 'list'>, <class 'tuple'>, <class 'set'>, <class 'dict'> and <class 'NoneType'>.",
          code: t`values = [25, 3.75, 2 + 3j, True, "CBSE", [1, 2], (1, 2), {1, 2}, {"roll": 7}, None]
for v in values:
    print(repr(v), type(v))`,
        },
        {
          type: "example",
          title: "Finding the data type",
          problem: "Give the type of each: (a) `7 / 2` (b) `\"7\"` (c) `7.0` (d) `7 > 2` (e) `10 / 5`.",
          steps: [
            "(a) `/` always gives a float: 3.5 → `float`.",
            "(b) anything in quotes is text → `str`.",
            "(c) a decimal point makes it a float, even with .0 → `float`.",
            "(d) a comparison gives True or False → `bool`.",
            "(e) `/` gives a float even when the division is exact: 2.0 → `float`.",
          ],
          answer: "(a) float (b) str (c) float (d) bool (e) float",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is `type(True + True)`, and what is the value?",
              options: ["int, 2", "bool, True", "bool, 2", "str, TrueTrue"],
              answer: 0,
              explain: "bool is a sub-type of int, with True = 1. Adding them gives the int 2.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "**Mutable** objects can be changed **in place** after they are created (their value changes, their identity stays the same): **list**, **dictionary** and **set**.\n\n**Immutable** objects cannot be changed once created: **int**, **float**, **complex**, **bool**, **str** and **tuple**. To \"change\" them, Python makes a new object and the name is pointed at it.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "A list changes in place; a string method returns a new string. Output: [72, 85, 90], then RAVI ravi.",
          code: t`marks = [72, 85]
marks.append(90)
print(marks)
name = "ravi"
print(name.upper(), name)`,
        },
        {
          type: "code",
          lang: "python",
          caption: "This stops with TypeError: 'str' object does not support item assignment.",
          code: t`name = "ravi"
name[0] = "R"`,
        },
        {
          type: "mistake",
          wrong: "A string is a sequence like a list, so `name[0] = \"R\"` changes its first letter.",
          right: "Strings are **immutable**. Make a new string instead: `name = \"R\" + name[1:]`, or use `name.capitalize()`.",
          why: "Strings and lists can both be indexed with `[ ]`, so they look alike. Reading `name[0]` is fine; only assigning to it fails.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Mutable or immutable?",
            groups: ["Mutable", "Immutable"],
            items: [
              { text: "list", group: 0, hint: "append() changes it in place." },
              { text: "dict", group: 0, hint: "You can add or change a key's value." },
              { text: "set", group: 0, hint: "add() changes it in place." },
              { text: "tuple", group: 1, hint: "A tuple cannot be changed after creation." },
              { text: "str", group: 1, hint: "String methods return new strings." },
              { text: "int", group: 1, hint: "x = x + 1 creates a new int object." },
              { text: "float", group: 1, hint: "Numbers are immutable." },
            ],
            explain: "Only list, dict and set are mutable among the basic types. Everything numeric, plus str and tuple, is immutable.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn the two lists exactly: mutable = list, dictionary, set; immutable = int, float, complex, bool, string, tuple. For \"what will be the output?\" questions, remember that `/` always returns a float.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A tuple is a mutable sequence.",
              answer: false,
              explain: "A tuple is **immutable**: its elements cannot be replaced after it is made. A list is the mutable sequence.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Every value is an object with identity (id()), type (type()) and value; a variable is a name referring to an object.",
            "Numbers: int, float, complex, bool; sequences: str, list, tuple; also set, None and dict.",
            "`/` always gives a float; True and False behave as 1 and 0.",
            "Mutable: list, dict, set. Immutable: int, float, complex, bool, str, tuple.",
          ],
        },
      ],
      flashcards: [
        { front: "id()", back: "Returns the identity of an object, a unique number for it while it exists." },
        { front: "type()", back: "Returns the data type (class) of a value, e.g. <class 'float'>." },
        { front: "Numeric types in Python", back: "int, float, complex (and bool, a sub-type of int)." },
        { front: "Sequence types", back: "str, list, tuple." },
        { front: "Mutable types", back: "list, dictionary, set: they can be changed in place." },
        { front: "Immutable types", back: "int, float, complex, bool, str, tuple." },
        { front: "None", back: "A special value of type NoneType meaning no value / nothing." },
        { front: "Dictionary", back: "A mapping type that stores key–value pairs, e.g. {\"roll\": 7}." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `print(type(10 / 5))` show?",
          options: ["<class 'float'>", "<class 'int'>", "2.0", "<class 'str'>"],
          answer: 0,
          explain: "The `/` operator always gives a float (here 2.0), so its type is float.",
        },
        {
          kind: "multi",
          q: "Select all mutable types.",
          options: ["list", "tuple", "dict", "str", "set"],
          answers: [0, 2, 4],
          explain: "list, dict and set can be changed in place. tuple and str cannot.",
        },
        {
          kind: "fill",
          q: "The data type of `3 + 4j` is ___.",
          answer: ["complex"],
          explain: "A number with a j part is a **complex** number.",
        },
        {
          kind: "mcq",
          q: "a = 5 and b = a. Then b = b + 1. What are a and b?",
          options: ["5 and 6", "6 and 6", "5 and 5", "6 and 5"],
          answer: 0,
          explain: "b + 1 creates a new object 6 and b refers to it. a still refers to 5, because ints are immutable.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`{1, 2, 2, 3}` is a set with 3 elements.",
          answer: true,
          explain: "A set keeps no duplicates, so it is {1, 2, 3}.",
        },
        {
          kind: "mcq",
          q: "Which built-in function tells you whether two names refer to the same object?",
          options: ["id()", "type()", "print()", "len()"],
          answer: 0,
          explain: "If `id(x) == id(y)`, both names refer to the same object.",
        },
        {
          kind: "mcq",
          q: "What happens when `t = (4, 5); t[0] = 9` runs?",
          options: ["TypeError: tuples cannot be changed", "t becomes (9, 5)", "t becomes [9, 5]", "Nothing happens"],
          answer: 0,
          explain: "A tuple is immutable, so item assignment raises a TypeError.",
        },
      ],
    },
    {
      slug: "c11-cs-python-operators-io",
      title: "Operators, Expressions, Input/Output, Type Conversion and Errors",
      summary: "Arithmetic, relational, assignment, logical, identity and membership operators; precedence; input() and print(); explicit and implicit type conversion; syntax, logical and runtime errors.",
      minutes: 25,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "An **operator** acts on values called **operands**. An **expression** combines operands and operators and has a value, like `5 + 3 * 2`. A **statement** is a complete instruction that Python executes, like `x = 5 + 3 * 2` or `print(x)`.",
        },
        {
          type: "table",
          headers: ["Operator", "Meaning", "Example", "Result"],
          rows: [
            ["`+` `-` `*`", "add, subtract, multiply", "`7 * 2`", "`14`"],
            ["`/`", "division (always a float)", "`7 / 2`", "`3.5`"],
            ["`//`", "floor division (rounds down)", "`7 // 2`, `-7 // 2`", "`3`, `-4`"],
            ["`%`", "remainder (modulus)", "`7 % 2`, `-7 % 2`", "`1`, `1`"],
            ["`**`", "exponent (power)", "`2 ** 3`", "`8`"],
            ["`==` `!=` `<` `>` `<=` `>=`", "relational: compare, give True/False", "`10 > 5`", "`True`"],
            ["`=` `+=` `-=` `*=` `/=` `//=` `%=` `**=`", "assignment; `x += 5` means `x = x + 5`", "`x = 10; x += 5`", "x is `15`"],
            ["`and` `or` `not`", "logical", "`10 > 5 and 3 > 4`", "`False`"],
            ["`is`, `is not`", "identity: same object?", "`a is b`", "True/False"],
            ["`in`, `not in`", "membership: present in a sequence?", "`3 in [1, 2, 3]`", "`True`"],
          ],
        },
        {
          type: "text",
          md: "When an expression has several operators, **precedence** decides which is done first. From highest to lowest: brackets `( )`; `**`; unary `+` and `-`; then `*`, `/`, `//`, `%`; then binary `+`, `-`; then relational, identity and membership operators; then `not`; then `and`; then `or`.\n\nOperators of the same level are worked **left to right**, except `**`, which works **right to left**. Note that `**` is stronger than a minus sign written before it, so `-2 ** 2` is `-(2 ** 2) = -4`.",
        },
        {
          type: "example",
          title: "Evaluating expressions",
          problem: "Find the value of (a) `5 + 3 * 2 ** 2` (b) `2 ** 3 ** 2` (c) `15 // 4 * 2` (d) `not 3 > 5 or 2 == 2`.",
          steps: [
            "(a) `**` first: 2 ** 2 = 4; then 3 * 4 = 12; then 5 + 12 = 17.",
            "(b) `**` is right to left: 3 ** 2 = 9, then 2 ** 9 = 512 (not 8 ** 2 = 64).",
            "(c) `//` and `*` are at the same level, so left to right: 15 // 4 = 3, then 3 * 2 = 6.",
            "(d) relational first: 3 > 5 is False, 2 == 2 is True; then not False = True; True or True = True.",
          ],
          answer: "(a) 17 (b) 512 (c) 6 (d) True",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "Predict each line before you run it.",
          code: t`print(7 / 2, 7 // 2, 7 % 2, 2 ** 3)
print(-7 // 2, -7 % 2)
print(5 + 3 * 2 ** 2, 2 ** 3 ** 2, -2 ** 2)
x = 10
x += 5
x *= 2
print(x)
print(3 in [1, 2, 3], "a" not in "cat")
print(10 > 5 and 3 > 4, not 3 > 5)`,
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What is the value of `2 + 3 * 4 // 5 - 1`?",
              answer: 3,
              explain: "3 * 4 = 12; 12 // 5 = 2 (left to right at the same level); 2 + 2 − 1 = 3.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "**Input and output.** `input(\"prompt\")` shows the prompt, waits for the user to type and press Enter, and returns what was typed **as a string**. `print()` shows values separated by a space and then moves to a new line; `sep=` changes the separator and `end=` changes what is printed at the end. `print(\"CS\", \"IP\", sep=\"-\", end=\"!\")` prints `CS-IP!`.\n\n**Type conversion.** **Explicit** conversion (type casting) is done by the programmer with `int()`, `float()`, `str()`: `int(\"25\")` is 25, `int(9.99)` is 9 (the decimal part is cut off, not rounded), `str(12) + \"3\"` is `\"123\"`. **Implicit** conversion is done by Python itself: in `3 + 4.5`, the int 3 is turned into a float and the result is 7.5.",
        },
        {
          type: "code",
          lang: "python",
          caption: "Run this in IDLE (it waits for typing). Sample run: type Asha, then 16; it prints Hello Asha - next year you will be 17.",
          code: t`name = input("Enter your name: ")
age = int(input("Enter your age: "))
print("Hello", name, "- next year you will be", age + 1)`,
        },
        {
          type: "mistake",
          wrong: "`age = input(\"Age: \")` stores a number, so `age + 1` gives next year's age.",
          right: "`input()` always returns a **string**. `\"16\" + 1` raises **TypeError**; convert first: `age = int(input(\"Age: \"))`.",
          why: "The user types digits, so it feels like a number. But input() cannot know what you meant, so it keeps the characters as text; and `\"25\" + \"4\"` would join them into `\"254\"`.",
        },
        {
          type: "text",
          md: "**Debugging** means finding and fixing errors. There are three kinds:\n\n- **Syntax error**: the code breaks Python's grammar rules (a missing `:` or bracket, a misspelt keyword). Python will not run the program at all.\n- **Logical error**: the program runs but gives the wrong result because the logic is wrong, e.g. `avg = a + b / 2` instead of `(a + b) / 2`. No error message appears, so it is the hardest to find.\n- **Runtime error**: the program starts but stops while running because of an impossible operation, e.g. dividing by zero (**ZeroDivisionError**) or `int(\"abc\")` (**ValueError**).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which kind of error is it?",
            groups: ["Syntax error", "Logical error", "Runtime error"],
            items: [
              { text: "if marks > 33 print(\"Pass\")", group: 0, hint: "The colon after the condition is missing." },
              { text: "print(\"Hello\"", group: 0, hint: "A closing bracket is missing." },
              { text: "area = 2 * l * b for a rectangle", group: 1, hint: "It runs but gives the wrong area." },
              { text: "avg = a + b / 2", group: 1, hint: "Precedence makes it a + (b / 2)." },
              { text: "x = 10 / 0", group: 2, hint: "ZeroDivisionError while running." },
              { text: "n = int(\"twelve\")", group: 2, hint: "ValueError while running." },
            ],
            explain: "Syntax errors stop the program before it starts; runtime errors stop it midway; logical errors never stop it but give wrong answers.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In output questions, watch three traps: `/` gives a float (`10 / 5` is `2.0`), `//` rounds **down** (so `-7 // 2` is `-4`), and `**` is right to left. In \"find the errors\" questions, underline each error and write the corrected line next to it.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What does `print(\"25\" + \"4\", int(\"25\") + int(\"4\"))` show?",
              options: ["254 29", "29 29", "254 254", "TypeError"],
              answer: 0,
              explain: "Two strings are joined: \"254\". After conversion, 25 + 4 = 29.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Arithmetic: + - * / // % **; / always gives float; // rounds down; % gives remainder.",
            "Also relational, assignment (+= etc.), logical, identity (is) and membership (in) operators.",
            "Precedence: ( ), **, unary −, * / // %, + −, comparisons, not, and, or; ** works right to left.",
            "input() returns a string; convert with int() or float(). Implicit conversion: int + float gives float.",
            "Errors: syntax (grammar), logical (wrong result), runtime (stops while running).",
          ],
        },
      ],
      flashcards: [
        { front: "Expression vs statement", back: "An expression has a value (5 + 3); a statement is a complete instruction Python executes (x = 5 + 3)." },
        { front: "// operator", back: "Floor division: divides and rounds down to the nearest whole number. 7 // 2 = 3, −7 // 2 = −4." },
        { front: "% operator", back: "Gives the remainder: 17 % 5 = 2." },
        { front: "Associativity of **", back: "Right to left: 2 ** 3 ** 2 = 2 ** 9 = 512." },
        { front: "What type does input() return?", back: "Always a string (str)." },
        { front: "Explicit vs implicit conversion", back: "Explicit: done by the programmer with int(), float(), str(). Implicit: done by Python, e.g. int + float → float." },
        { front: "int(9.99)", back: "9: int() cuts off the decimal part; it does not round." },
        { front: "Three kinds of errors", back: "Syntax error, logical error, runtime error." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output of `print(17 // 5, 17 % 5)`?",
          options: ["3 2", "3.4 2", "3 3", "2 3"],
          answer: 0,
          explain: "17 = 5 × 3 + 2, so the quotient is 3 and the remainder is 2.",
        },
        {
          kind: "numeric",
          q: "What is the value of `-2 ** 2`?",
          answer: -4,
          explain: "`**` has higher precedence than the unary minus, so it is −(2 ** 2) = −4.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which error does `print(10 / 0)` cause?",
          options: ["ZeroDivisionError (runtime)", "SyntaxError", "A logical error with output 0", "No error; prints inf"],
          answer: 0,
          explain: "The code is grammatically correct but division by zero is impossible, so it stops at run time with ZeroDivisionError.",
        },
        {
          kind: "fill",
          q: "After `x = 4` and `x **= 2`, the value of x is ___.",
          answer: ["16"],
          explain: "`x **= 2` means x = x ** 2 = 16.",
        },
        {
          kind: "truefalse",
          q: "`int(-3.7)` gives −4.",
          answer: false,
          explain: "int() cuts off the decimal part (it truncates towards zero), so int(−3.7) is −3. Floor division `//` is the one that rounds down.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What does `print(5 > 3 and 2 > 4 or 1 == 1)` show?",
          options: ["True", "False", "1", "Error"],
          answer: 0,
          explain: "and comes before or: (True and False) = False; then False or True = True.",
          difficulty: 2,
          hint: "`and` is done before `or`.",
        },
        {
          kind: "multi",
          q: "Which of these are **membership** or **identity** operators?",
          options: ["in", "is not", "not in", "==", "and"],
          answers: [0, 1, 2],
          explain: "in / not in are membership operators; is / is not are identity operators. == is relational and `and` is logical.",
        },
        {
          kind: "mcq",
          q: "The program `avg = a + b / 2` runs but gives a wrong average. This is a:",
          options: ["Logical error", "Syntax error", "Runtime error", "Not an error"],
          answer: 0,
          explain: "It runs without any message but the logic is wrong: it should be (a + b) / 2.",
        },
      ],
    },
    {
      slug: "c11-cs-getting-started-python-practice",
      title: "Board practice: Getting Started with Python",
      summary: "Board-style output questions, error finding, identifiers and data types, and a Python program that converts seconds into hours, minutes and seconds.",
      minutes: 22,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "The Python part of the Class 11 paper has many short output questions and \"find and correct the errors\" questions, plus programs of 2–3 marks. Write your answer first, then check it against the steps below.",
        },
        {
          type: "example",
          title: "Output question",
          problem: "Find the output:\n\n`a = 5`; `b = 2`; `print(a // b * b + a % b, a ** b % 7, a / b * 2)`",
          steps: [
            "a // b = 2; 2 * b = 4; a % b = 1; 4 + 1 = 5.",
            "a ** b = 25; 25 % 7 = 4.",
            "a / b = 2.5; 2.5 * 2 = 5.0 (a float, because / gives a float).",
          ],
          answer: "`5 4 5.0`",
        },
        {
          type: "example",
          title: "Find and correct the errors",
          problem: "Rewrite after correcting the errors: `Print(\"Total\" , marks1 + marks2` where marks1 = \"45\" and marks2 = 38.",
          steps: [
            "`Print` must be `print` (Python is case-sensitive).",
            "The closing bracket is missing (syntax error).",
            "marks1 is the string \"45\"; adding it to 38 gives a TypeError, so convert it: `int(marks1)`.",
          ],
          answer: "`print(\"Total\", int(marks1) + marks2)` prints `Total 83`.",
        },
        {
          type: "mistake",
          wrong: "`print(7 // 2)` and `print(7 / 2)` both show 3.5.",
          right: "`7 / 2` is true division and gives 3.5; `7 // 2` is floor division and gives 3.",
          why: "The two symbols look nearly the same. Read every `/` in an output question twice and ask: one slash or two?",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each expression with its output.",
            pairs: [
              ["print(17 // -5)", "-4"],
              ["print(17 % -5)", "-3"],
              ["print(10 % 3 ** 2)", "1"],
              ["print(round(7.456, 2))", "7.46"],
              ["print(type(5 / 5))", "<class 'float'>"],
            ],
            explain: "Floor division rounds down (towards −∞), and the remainder takes the sign of the divisor: 17 = (−5)(−4) + (−3). ** comes before %, so 10 % 9 = 1.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "x = y = 4; x = x + y; y = x − y. What does `print(x, y)` show?",
              options: ["8 4", "8 0", "4 4", "4 8"],
              answer: 0,
              explain: "x = 4 + 4 = 8; then y = 8 − 4 = 4.",
            },
          ],
        },
        {
          type: "heading",
          text: "Write a small program",
        },
        {
          type: "text",
          md: "**Question (3 marks):** Write a Python program that converts a number of seconds into hours, minutes and seconds, and also prints the time in the form h:m:s.",
        },
        {
          type: "code",
          lang: "python",
          runnable: true,
          caption: "// gives the whole hours or minutes; % gives what is left over.",
          code: t`total_seconds = 5000
hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60
print(total_seconds, "seconds =", hours, "h", minutes, "min", seconds, "s")
print(hours, minutes, seconds, sep=":")`,
        },
        {
          type: "text",
          md: "Output:\n\n`5000 seconds = 1 h 23 min 20 s`\n\n`1:23:20`\n\nCheck: 1 × 3600 + 23 × 60 + 20 = 3600 + 1380 + 20 = 5000. ✓ In the exam you would usually read the value with `total_seconds = int(input(\"Enter seconds: \"))`.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For programs, use meaningful variable names, convert input with int() or float(), and print a label with each result. Indent consistently (4 spaces). A short comment on the main step can earn the benefit of the doubt if a small slip is made.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "`a, b = 8, 3` and then `a, b = b, a`. Now `print(a, b)` shows ___.",
              answer: ["3 8"],
              explain: "The right side (3, 8) is made first and then assigned, so the values are swapped.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Work output questions step by step, following precedence and left-to-right order.",
            "Check for case errors, missing brackets or colons, and string-number mixing.",
            "// and % together split a total into units (hours, minutes, seconds; rupees and paise).",
            "print(..., sep=\":\") changes the separator between values.",
          ],
        },
      ],
      flashcards: [
        { front: "a = 5, b = 2: a // b * b + a % b", back: "5 (always gives back a, for positive a and b)." },
        { front: "17 // −5 and 17 % −5", back: "−4 and −3." },
        { front: "Swapping two variables in Python", back: "a, b = b, a" },
        { front: "5000 seconds in h:m:s", back: "1:23:20" },
        { front: "print(1, 2, 3, sep=\"-\")", back: "1-2-3" },
        { front: "round(7.456, 2)", back: "7.46" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the output of `print(\"CS\", \"IP\", sep=\"-\", end=\"!\")` followed by `print(\"Done\")`?",
          options: ["CS-IP!Done", "CS IP!Done", "CS-IP! Done", "CS-IP!\nDone on two lines"],
          answer: 0,
          explain: "sep=\"-\" joins CS and IP with a hyphen; end=\"!\" replaces the newline, so the next print continues on the same line.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many minutes are left over after taking whole hours from 7384 seconds? (Use `7384 % 3600 // 60`.)",
          answer: 3,
          explain: "7384 % 3600 = 184 (since 2 × 3600 = 7200); 184 // 60 = 3.",
        },
        {
          kind: "mcq",
          q: "What does `t = 15; print(t > 10 or 1 / 0)` show?",
          options: ["True", "ZeroDivisionError", "False", "15"],
          answer: 0,
          explain: "`or` stops as soon as the left side is True (short-circuit), so 1 / 0 is never evaluated.",
          difficulty: 3,
          hint: "Does Python need to look at the right side of or here?",
        },
        {
          kind: "fill",
          q: "The output of `print(str(12) + \"3\")` is ___.",
          answer: ["123"],
          explain: "str(12) is \"12\"; joining with \"3\" gives \"123\".",
        },
        {
          kind: "truefalse",
          q: "`print(float(\"3.5\") * 2)` shows 7.0.",
          answer: true,
          explain: "float(\"3.5\") is 3.5, and 3.5 × 2 = 7.0, a float.",
        },
        {
          kind: "mcq",
          q: "Which line has a **syntax** error?",
          options: ["if x > 5 print(x)", "x = 10 / 0", "y = int(\"7\") + 1", "z = 2 ** 3 ** 2"],
          answer: 0,
          explain: "The colon after the if condition is missing. 10 / 0 is a runtime error; the other two are correct.",
        },
        {
          kind: "numeric",
          q: "What is the value of `3 + 4.5 * 2 // 3`?",
          answer: 6,
          explain: "4.5 * 2 = 9.0; 9.0 // 3 = 3.0; 3 + 3.0 = 6.0 (a float, which equals 6).",
          difficulty: 2,
        },
      ],
    },
  ],
};

export const topics: Topic[] = [computerSystems, numberSystems, booleanLogic, problemSolving, pythonStart];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Computer Systems and Organisation": "c11-cs-computer-systems",
  "11:Number Systems and Encoding": "c11-cs-number-systems",
  "11:Boolean Logic": "c11-cs-boolean-logic",
  "11:Introduction to Problem Solving": "c11-cs-problem-solving",
  "11:Getting Started with Python": "c11-cs-getting-started-python",
};
