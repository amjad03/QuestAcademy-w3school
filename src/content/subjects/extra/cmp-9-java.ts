import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "computer-applications";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

/* ================================================================== */
/* ICSE Class 9 Computer Applications (Java with BlueJ)                */
/* Every program below was compiled and run; outputs are exact.        */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* 1. Introduction to Object-Oriented Programming                      */
/* ------------------------------------------------------------------ */
const introOop: Topic = {
  slug: "java9-intro-oop",
  title: "Introduction to Object-Oriented Programming",
  icon: "🧩",
  description: "Programming languages, procedure-oriented vs object-oriented programming, the four principles of OOP, and how a Java program is compiled and run.",
  lessons: [
    {
      slug: "java9-pop-vs-oop",
      title: "From Procedures to Objects: the Four Principles of OOP",
      summary: "Low-level and high-level languages, procedure-oriented vs object-oriented programming, and abstraction, encapsulation, inheritance and polymorphism.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🏏",
          caption: "A cricket video game has players, a ball and a bat. Each one has its own details (name, speed, colour) and its own actions (run, bowl, hit). Object-oriented programming builds programs the same way: out of such things.",
        },
        {
          type: "text",
          md: "A **program** is a set of instructions that tells a computer what to do. The language in which we write it is a **programming language**.\n\n**Low-level languages** are close to the machine. **Machine language** uses only 0s and 1s and is the only language the processor understands directly. **Assembly language** uses short words called **mnemonics** (such as `ADD`, `MOV`) and needs an **assembler** to turn it into machine language.\n\n**High-level languages** (Java, C, C++, Python) use English-like words. They are easy to read and write, but must be translated by a **compiler** or an **interpreter**.",
        },
        {
          type: "table",
          headers: ["Translator", "How it works", "Example"],
          rows: [
            ["**Assembler**", "converts assembly language into machine language", "-"],
            ["**Compiler**", "translates the whole program at once and lists all errors together", "C, C++; `javac` for Java"],
            ["**Interpreter**", "translates and runs the program one line at a time; stops at the first error", "the Java Virtual Machine runs bytecode this way"],
          ],
        },
        {
          type: "text",
          md: "A **programming paradigm** is a style of organising a program.\n\nIn **Procedure-Oriented Programming (POP)** the program is a list of steps grouped into **functions** (procedures). The focus is on *what to do*. Data is usually kept separately and many functions can change it freely. C, BASIC, Pascal and FORTRAN are procedure-oriented languages.\n\nIn **Object-Oriented Programming (OOP)** the program is built from **objects**. Each object keeps its **data** and the **functions** that work on that data together in one unit. The focus is on the *things* in the problem. Java, C++ and Smalltalk are object-oriented languages.",
        },
        {
          type: "table",
          headers: ["Point", "Procedure-Oriented (POP)", "Object-Oriented (OOP)"],
          rows: [
            ["Main focus", "functions (steps)", "objects (data + functions)"],
            ["Data", "moves freely between functions, so it is less secure", "hidden inside objects, so it is more secure"],
            ["Approach", "**top-down**: break the big task into smaller steps", "**bottom-up**: build objects first, then join them"],
            ["Reusing code", "harder", "easy, through inheritance"],
            ["Examples", "C, BASIC, Pascal, FORTRAN", "Java, C++, Smalltalk"],
          ],
        },
        {
          type: "table",
          headers: ["Principle", "Meaning in plain words", "Everyday example"],
          rows: [
            ["**Abstraction**", "showing only the essential features and hiding the background details", "you drive a car with the steering, pedals and gears without knowing how the engine works inside"],
            ["**Encapsulation**", "wrapping data and the functions that use it into one unit (a class), so outsiders cannot change the data directly", "a medicine capsule keeps the powder inside one shell"],
            ["**Inheritance**", "one class gets (inherits) the features of another class and can add its own", "a child inherits features from parents; a `Car` class can inherit from a `Vehicle` class"],
            ["**Polymorphism**", "one name, many forms: the same message behaves differently in different situations", "a person is a student at school and a customer at a shop; one `area()` can find the area of a square or a circle"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A remote control lets you change channels without knowing about the circuits inside. Which OOP principle does this show?",
              options: ["Abstraction", "Inheritance", "Polymorphism", "Compilation"],
              answer: 0,
              explain: "Only the essential features (buttons) are shown and the details are hidden. That is **abstraction**.",
            },
          ],
        },
        {
          type: "example",
          title: "Naming the principle",
          problem: "A school app has a class `Person` with name and address. Classes `Student` and `Teacher` are made from `Person` and add roll number and subject. Marks can be changed only through a method `setMarks()`. Which principles are used?",
          steps: [
            "`Student` and `Teacher` get name and address from `Person` without writing them again. Getting features from another class is **inheritance**.",
            "Marks are kept inside the class and can be changed only through `setMarks()`. Binding data with its methods and protecting it is **encapsulation**.",
            "The app user sees only \"Enter marks\" and not how the data is stored. Hiding the details is **abstraction**.",
          ],
          answer: "Inheritance (Student and Teacher from Person), encapsulation (marks changed only through setMarks()) and abstraction (details hidden from the user).",
        },
        {
          type: "mistake",
          wrong: "Abstraction and encapsulation are the same thing, because both hide something.",
          right: "**Abstraction** is about *what is shown*: only the essential features. **Encapsulation** is about *how it is packed*: data and methods wrapped together in one unit, with the data protected from outside.",
          why: "Both are linked to hiding, so they blur together. Think of a car: the dashboard showing only speed and fuel is abstraction; the engine sealed under the bonnet with its own parts is encapsulation. Encapsulation is one way of achieving abstraction.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each situation to the OOP principle.",
            pairs: [
              ["A bank account balance can be changed only through deposit() and withdraw()", "Encapsulation"],
              ["A map app shows roads but not the soil type", "Abstraction"],
              ["A class Dog gets eat() and sleep() from a class Animal", "Inheritance"],
              ["The + sign adds numbers but joins strings", "Polymorphism"],
            ],
            explain: "Protected data = encapsulation; only essential features = abstraction; features passed on = inheritance; one name with many forms = polymorphism.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Definitions of the four principles are frequent 2-mark questions. Write the definition in one line and add one example; an example alone does not get full marks. In a \"POP vs OOP\" question, give at least two points of difference in a table.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In procedure-oriented programming, data is hidden inside objects and is therefore more secure.",
              answer: false,
              explain: "That describes OOP. In POP, data moves freely between functions, so it is less secure.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Machine language (0s and 1s) and assembly language are low-level; Java is high-level.",
            "POP focuses on functions and uses a top-down approach; OOP focuses on objects and uses a bottom-up approach.",
            "**Abstraction**: show the essentials, hide the details.",
            "**Encapsulation**: wrap data and methods into one unit and protect the data.",
            "**Inheritance**: reuse features of another class. **Polymorphism**: one name, many forms.",
          ],
        },
      ],
      flashcards: [
        { front: "Abstraction", back: "Showing only the essential features of an object and hiding the background details." },
        { front: "Encapsulation", back: "Wrapping up data and the functions that work on it into a single unit (a class)." },
        { front: "Inheritance", back: "The process by which one class acquires the properties and behaviour of another class." },
        { front: "Polymorphism", back: "The ability of one name (method or operator) to take many forms, e.g. + adds numbers and joins strings." },
        { front: "POP vs OOP approach", back: "POP is top-down (task broken into steps); OOP is bottom-up (objects built first, then combined)." },
        { front: "Compiler vs interpreter", back: "A compiler translates the whole program at once; an interpreter translates and runs it line by line." },
        { front: "Mnemonic", back: "A short code word such as ADD or MOV used in assembly language." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is an object-oriented language?",
          options: ["Java", "BASIC", "FORTRAN", "Machine language"],
          answer: 0,
          explain: "Java is object-oriented. BASIC and FORTRAN are procedure-oriented; machine language is low-level.",
        },
        {
          kind: "mcq",
          q: "The class `Car` gets the method `start()` from the class `Vehicle`. This is:",
          options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
          answer: 0,
          explain: "Acquiring features from another class is inheritance.",
        },
        {
          kind: "fill",
          q: "Wrapping data and methods together into a single unit is called ___.",
          answer: ["encapsulation"],
          explain: "A class encapsulates its data and the methods that work on that data.",
        },
        {
          kind: "truefalse",
          q: "OOP follows a bottom-up approach.",
          answer: true,
          explain: "In OOP the objects are designed first and then put together to build the program.",
        },
        {
          kind: "multi",
          q: "Which of these are principles of OOP? (Choose all that apply)",
          options: ["Abstraction", "Polymorphism", "Compilation", "Inheritance", "Iteration"],
          answers: [0, 1, 3],
          explain: "The four principles are abstraction, encapsulation, inheritance and polymorphism. Compilation and iteration are not OOP principles.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which translator converts the whole high-level program into machine code in one go?",
          options: ["Compiler", "Interpreter", "Assembler", "Editor"],
          answer: 0,
          explain: "A compiler works on the whole program. An interpreter goes line by line; an assembler is only for assembly language.",
        },
        {
          kind: "mcq",
          q: "A method `draw()` draws a circle for a Circle object and a square for a Square object. Which principle is this?",
          options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
          answer: 0,
          explain: "The same name `draw()` behaves in different ways: one name, many forms.",
          difficulty: 2,
          hint: "Look at the one name doing different jobs.",
        },
        {
          kind: "order",
          q: "Arrange from closest to the machine to closest to humans.",
          items: ["Machine language", "Assembly language", "High-level language (Java)"],
          explain: "Machine language is pure 0s and 1s, assembly uses mnemonics, and high-level languages use English-like words.",
        },
      ],
    },
    {
      slug: "java9-compile-run-java",
      title: "Java: Bytecode, JVM and Your First Program",
      summary: "Where Java came from, its main features, how source code becomes bytecode and runs on the JVM, and the parts of a simple Java program in BlueJ.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "text",
          md: "Java was created by **James Gosling** and his team at **Sun Microsystems**. Work began in 1991 under the name **Oak**, and Java was released in 1995. Today Java is owned by **Oracle**.\n\nIn ICSE schools we write Java in **BlueJ**, a simple **IDE** (Integrated Development Environment) where you can type, compile and run programs in one window.",
        },
        {
          type: "heading",
          text: "From source code to output",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "You type the program and save it as a **source file** with the extension `.java`, e.g. `Welcome.java`.",
            "The Java **compiler** (`javac`) checks it for errors and translates it into **bytecode**, stored in `Welcome.class`.",
            "**Bytecode** is not the language of any one machine. It is an in-between code for an imaginary computer.",
            "The **Java Virtual Machine (JVM)** reads the bytecode and interprets it into the machine code of the computer it is running on.",
          ],
        },
        {
          type: "text",
          md: "Because every computer (Windows, Linux, Mac) has its own JVM, the same `.class` file runs on all of them. This is called **platform independence**, often summed up as \"Write Once, Run Anywhere\".\n\nOther features of Java: it is **object-oriented**, **simple** (no pointers), **robust** (strong error checking), **secure**, and **case-sensitive** (`Main` and `main` are different).",
        },
        {
          type: "code",
          lang: "java",
          caption: "Welcome.java",
          code: `// My first Java program
public class Welcome
{
    public static void main(String[] args)
    {
        System.out.println("Welcome to Java");
        System.out.print("Class ");
        System.out.println(9);
        System.out.println("5 + 3 = " + 5 + 3);
        System.out.println("5 + 3 = " + (5 + 3));
    }
}`,
        },
        {
          type: "table",
          headers: ["Part", "What it means"],
          rows: [
            ["`public class Welcome`", "declares a class named Welcome; the file is saved as Welcome.java"],
            ["`public static void main(String[] args)`", "the **main method**, where execution begins"],
            ["`System.out.println(...)`", "prints, then moves the cursor to the next line"],
            ["`System.out.print(...)`", "prints and keeps the cursor on the same line"],
            ["`{ }`", "curly brackets mark the start and end of the class and the method"],
            ["`;`", "every statement ends with a semicolon"],
            ["`//`", "a comment, ignored by the compiler"],
          ],
        },
        {
          type: "example",
          title: "Dry run: print, println and +",
          problem: "Give the exact output of Welcome.java.",
          steps: [
            "Line 1: `println(\"Welcome to Java\")` prints the text and moves to a new line.",
            "`print(\"Class \")` prints `Class ` and stays on the same line, so the next `println(9)` prints 9 right after it: `Class 9`.",
            "`\"5 + 3 = \" + 5 + 3` works left to right. String + 5 gives the string `5 + 3 = 5`; adding 3 joins another character: `5 + 3 = 53`.",
            "In `\"5 + 3 = \" + (5 + 3)` the brackets are done first: 5 + 3 = 8, so it prints `5 + 3 = 8`.",
          ],
          answer: "Welcome to Java\nClass 9\n5 + 3 = 53\n5 + 3 = 8",
        },
        {
          type: "mistake",
          wrong: "`System.out.println(\"Sum = \" + 5 + 3);` prints Sum = 8.",
          right: "It prints **Sum = 53**. Once a string comes first, `+` **joins** (concatenates) the values that follow. Write `(5 + 3)` in brackets to add first.",
          why: "We read `5 + 3` and think of addition. But Java works left to right: `\"Sum = \" + 5` is already a string, and string + number is joining, not adding.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The Java compiler converts source code into ___, which is stored in a .class file.",
              answer: ["bytecode", "byte code"],
              explain: "javac produces bytecode; the JVM then interprets it.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the steps from writing to output.",
            items: [
              "Type the program and save it as a .java file",
              "Compile it with javac",
              "Bytecode is stored in a .class file",
              "The JVM interprets the bytecode",
              "The output appears on the screen",
            ],
            explain: "Source code → compiler → bytecode → JVM → machine code and output. The JVM is what makes Java platform independent.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"What is bytecode?\" and \"What is the JVM?\" are common 2-mark questions. Bytecode: the machine-independent code produced by the Java compiler. JVM: the software that interprets bytecode into machine code for the computer it runs on. Spell it **Java Virtual Machine**.",
        },
        {
          type: "keypoints",
          items: [
            "Java: James Gosling, Sun Microsystems, first called Oak; now owned by Oracle.",
            "`.java` source → `javac` compiler → bytecode in `.class` → JVM → output.",
            "Bytecode + JVM make Java platform independent: Write Once, Run Anywhere.",
            "Execution starts at `public static void main(String[] args)`.",
            "`print` stays on the line; `println` moves to the next line.",
          ],
        },
      ],
      flashcards: [
        { front: "Bytecode", back: "The machine-independent code produced by the Java compiler and stored in a .class file." },
        { front: "JVM", back: "Java Virtual Machine: software that interprets bytecode into the machine code of the computer it runs on." },
        { front: "Platform independence", back: "The same bytecode runs on any computer that has a JVM (Write Once, Run Anywhere)." },
        { front: "Who developed Java?", back: "James Gosling and his team at Sun Microsystems (first named Oak)." },
        { front: "print vs println", back: "print keeps the cursor on the same line; println moves it to the next line after printing." },
        { front: "BlueJ", back: "An IDE (Integrated Development Environment) used to write, compile and run Java programs." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which file does the Java compiler create from `Marks.java`?",
          options: ["Marks.class", "Marks.exe", "Marks.byte", "Marks.jvm"],
          answer: 0,
          explain: "Bytecode is stored in a file with the .class extension.",
        },
        {
          kind: "truefalse",
          q: "Java bytecode can run only on the type of computer on which it was compiled.",
          answer: false,
          explain: "Bytecode is platform independent: any computer with a JVM can run it.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(\"Total: \" + 4 + 6);`?",
          options: ["Total: 46", "Total: 10", "Total: 4 6", "Error"],
          answer: 0,
          explain: "The string comes first, so + joins: \"Total: \" + 4 gives \"Total: 4\", then + 6 gives \"Total: 46\".",
          difficulty: 2,
          hint: "Work left to right. What type is the result after the first +?",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(4 + 6 + \" is the total\");`?",
          options: ["10 is the total", "46 is the total", "4 + 6 is the total", "Error"],
          answer: 0,
          explain: "Left to right: 4 + 6 are both numbers, so they are added to 10 first; then 10 is joined to the string.",
          difficulty: 3,
          hint: "Compare with the previous question: what comes first this time?",
        },
        {
          kind: "fill",
          q: "Java was first named ___.",
          answer: ["Oak"],
          explain: "The project started in 1991 as Oak and was later renamed Java.",
        },
        {
          kind: "multi",
          q: "Which of these are features of Java? (Choose all that apply)",
          options: ["Platform independent", "Object-oriented", "Case-insensitive", "Robust"],
          answers: [0, 1, 3],
          explain: "Java is case-**sensitive**: `Total` and `total` are different names.",
        },
        {
          kind: "order",
          q: "Put these in the order they are used when a Java program runs.",
          items: ["Source code (.java)", "Compiler (javac)", "Bytecode (.class)", "JVM"],
          explain: "The compiler turns source code into bytecode, and the JVM runs the bytecode.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Elementary Concept of Objects and Classes                         */
/* ------------------------------------------------------------------ */
const objectsClasses: Topic = {
  slug: "java9-objects-and-classes",
  title: "Elementary Concept of Objects and Classes",
  icon: "📱",
  description: "Objects with state and behaviour, the class as a blueprint and object factory, creating objects with new, and message passing.",
  lessons: [
    {
      slug: "java9-objects-state-behaviour",
      title: "Objects, Classes and Instances",
      summary: "Model real things as objects with characteristics and behaviour, write a class as their blueprint, and create objects with new.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🍪",
          caption: "One cookie cutter can make many cookies. Each cookie has the same shape, but one may have chocolate chips and another may be plain. A class is the cutter; objects are the cookies.",
        },
        {
          type: "text",
          md: "Look around you: a fan, a mobile phone, your friend Arjun. Each of these is an **object**: a thing that has **characteristics** and **behaviour**.\n\n- **Characteristics** (also called **attributes** or **state**) describe the object: a phone's brand, colour and battery level.\n- **Behaviour** is what the object can do: a phone can call, charge and switch off.",
        },
        {
          type: "table",
          headers: ["Real-world object", "Characteristics (state)", "Behaviour"],
          rows: [
            ["Mobile phone", "brand, colour, battery %", "call(), charge(), switchOff()"],
            ["Student", "name, roll number, marks", "study(), writeExam()"],
            ["Bank account", "account number, balance", "deposit(), withdraw()"],
          ],
        },
        {
          type: "text",
          md: "In Java, a **software object** copies this idea. Its characteristics are stored in **variables** (called **data members** or **instance variables**) and its behaviour is written as **methods** (also called **member functions**).\n\nA **class** is the **blueprint** or template that describes what data and methods its objects will have. Because a class can create many objects of the same kind, it is called an **object factory**. Each object made from a class is an **instance** of that class.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Mobile.java",
          code: `public class Mobile
{
    String brand;
    int battery;

    void charge(int units)
    {
        battery = battery + units;
    }

    void show()
    {
        System.out.println(brand + " battery: " + battery + "%");
    }

    public static void main(String[] args)
    {
        Mobile m1 = new Mobile();
        Mobile m2 = new Mobile();
        m1.brand = "Lava";
        m1.battery = 40;
        m2.brand = "Micromax";
        m2.battery = 75;
        m1.charge(30);
        m1.show();
        m2.show();
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: two objects from one class",
          problem: "Trace Mobile.java and give its exact output.",
          steps: [
            "`new Mobile()` creates an object in memory. It is done twice, so there are two separate objects, `m1` and `m2`, each with its **own** brand and battery.",
            "m1 gets brand \"Lava\", battery 40. m2 gets brand \"Micromax\", battery 75.",
            "`m1.charge(30)` runs `battery = battery + units` for m1 only: 40 + 30 = 70. m2's battery stays 75.",
            "`m1.show()` prints m1's data, then `m2.show()` prints m2's data.",
          ],
          answer: "Lava battery: 70%\nMicromax battery: 75%",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the Mobile class, `battery` is a ___ and `charge()` is a ___.",
              options: ["data member; method", "method; data member", "class; object", "object; class"],
              answer: 0,
              explain: "Variables inside a class store state (data members); methods describe behaviour.",
            },
          ],
        },
        {
          type: "list",
          items: [
            "The keyword **new** creates an object and gives it memory: `Mobile m1 = new Mobile();`",
            "The **dot operator** (`.`) reaches an object's data or methods: `m1.brand`, `m1.show()`.",
            "Objects work together by calling each other's methods. This is called **message passing**: `m1.charge(30)` sends the message \"charge by 30\" to m1.",
            "A class defines a new type, so it is called a **user-defined data type** (also a composite data type). `Mobile` can be used like `int` to declare variables.",
          ],
        },
        {
          type: "mistake",
          wrong: "A class and an object are the same thing; `Mobile` is a phone.",
          right: "A **class** is only a description (a blueprint). An **object** is a real instance made from it, with its own values in memory. One class can make many objects.",
          why: "In speech we say \"a mobile\" for both the idea and the real phone. In Java, writing the class creates no phone at all; only `new Mobile()` does, and each `new` makes a different one.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Class (blueprint) or object (instance)?",
            groups: ["Class", "Object"],
            items: [
              { text: "Car", group: 0, hint: "A general kind of thing is a class." },
              { text: "The red car with number KA-01-AB-1234", group: 1, hint: "One particular car is an instance." },
              { text: "Fruit", group: 0, hint: "Fruit describes a whole family." },
              { text: "The mango on your plate", group: 1, hint: "A single real mango is an object." },
              { text: "Student", group: 0, hint: "A template for all students." },
              { text: "Meera, roll number 12 of 9B", group: 1, hint: "A particular student is an object." },
            ],
            explain: "A class names a *kind* of thing; an object is *one particular* thing of that kind, with its own values.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Learn these exact phrases: \"A class is an **object factory**\", \"An object is an **instance of a class**\", \"A class is a **user-defined data type**\". When asked why, give one line each: the class produces many objects of the same kind; each object is one copy with its own state; the class can be used to declare variables like a built-in type.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In Mobile.java, calling `m1.charge(30)` also changes the battery of m2.",
              answer: false,
              explain: "Each object has its own copy of the instance variables. Only m1's battery changes.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "An object has state (characteristics) and behaviour.",
            "In Java, state is stored in data members and behaviour is written as methods.",
            "A class is a blueprint, an object factory and a user-defined data type.",
            "An object is an instance of a class, created with `new`.",
            "Objects communicate by message passing: calling methods with the dot operator.",
          ],
        },
      ],
      flashcards: [
        { front: "Object", back: "An identifiable entity with characteristics (state) and behaviour; an instance of a class." },
        { front: "Class", back: "A blueprint or template that describes the data and methods common to a set of objects." },
        { front: "Why is a class called an object factory?", back: "Because it can produce any number of objects of the same kind." },
        { front: "Instance", back: "One object created from a class, with its own values." },
        { front: "new keyword", back: "Creates an object and allocates memory for it, e.g. Mobile m = new Mobile();" },
        { front: "Message passing", back: "Objects interacting by calling one another's methods, e.g. m1.charge(30)." },
        { front: "Why is a class a user-defined data type?", back: "The programmer creates it, and it can be used to declare variables just like int or double." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement creates an object of class `Book`?",
          options: ["`Book b = new Book();`", "`Book b;`", "`class Book { }`", "`new b = Book();`"],
          answer: 0,
          explain: "`Book b;` only declares a variable. The object is created by `new Book()`.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "For a `Fan` object, which of these is behaviour?",
          options: ["rotate()", "colour", "number of blades", "brand"],
          answer: 0,
          explain: "Behaviour is an action; colour, blades and brand are characteristics.",
        },
        {
          kind: "fill",
          q: "An object is an ___ of a class.",
          answer: ["instance"],
          explain: "Each object made from a class is one instance of it.",
        },
        {
          kind: "truefalse",
          q: "One class can be used to create many objects.",
          answer: true,
          explain: "That is why a class is called an object factory.",
        },
        {
          kind: "numeric",
          q: "A program has `Mobile a = new Mobile(); Mobile b = new Mobile(); Mobile c = new Mobile();`. How many Mobile objects are created?",
          answer: 3,
          explain: "Each `new Mobile()` creates one object, so there are 3.",
        },
        {
          kind: "mcq",
          q: "In Mobile.java, if `m2.charge(10);` is added just before `m2.show();`, what does the last line print?",
          options: ["Micromax battery: 85%", "Micromax battery: 75%", "Micromax battery: 80%", "Lava battery: 80%"],
          answer: 0,
          explain: "m2's battery was 75; charging by 10 makes it 85. m1 is not affected.",
          difficulty: 2,
          hint: "Only m2's own battery changes.",
        },
        {
          kind: "multi",
          q: "Which of these correctly describe a class? (Choose all that apply)",
          options: ["A blueprint for objects", "An object factory", "A user-defined data type", "An instance of an object"],
          answers: [0, 1, 2],
          explain: "An object is an instance of a class, not the other way round.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Values and Data Types                                             */
/* ------------------------------------------------------------------ */
const valuesTypes: Topic = {
  slug: "java9-values-and-data-types",
  title: "Values and Data Types",
  icon: "🔢",
  description: "Character set, ASCII and Unicode, escape sequences, tokens and literals, primitive and non-primitive types, variables, constants and type conversion.",
  lessons: [
    {
      slug: "java9-character-set-tokens",
      title: "Character Set, Escape Sequences and Tokens",
      summary: "The characters Java understands, ASCII and Unicode codes, escape sequences like \\n and \\t, and the five kinds of tokens.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "English is built from letters, words and punctuation. Java is built the same way. Its **character set** is the set of characters it accepts: **letters** (A–Z, a–z), **digits** (0–9), **operators** (`+ - * / % = < >`), **special characters** and **delimiters** (`; , ( ) { } [ ]`), and **white space** (space, tab, new line).",
        },
        {
          type: "text",
          md: "A computer stores only numbers, so each character is given a code. **ASCII** (American Standard Code for Information Interchange) is a 7-bit code for 128 characters (codes 0 to 127), covering English letters, digits and symbols.\n\nJava uses **Unicode**, a much larger code that includes the letters of almost every language: Devanagari, Kannada, Tamil, Arabic and more. A Java `char` takes 2 bytes. For English letters and digits, the Unicode value is the same as the ASCII value.",
        },
        {
          type: "table",
          headers: ["Characters", "Codes", "Remember"],
          rows: [
            ["`'A'` to `'Z'`", "65 to 90", "A = 65"],
            ["`'a'` to `'z'`", "97 to 122", "a = 97 (32 more than A)"],
            ["`'0'` to `'9'`", "48 to 57", "the character '0' is 48, not 0"],
            ["space", "32", "-"],
          ],
        },
        {
          type: "text",
          md: "Some characters cannot be typed directly inside a string, such as a new line or a double quote. Java writes them as an **escape sequence**: a backslash `\\` followed by a character. It counts as one character.",
        },
        {
          type: "table",
          headers: ["Escape sequence", "Meaning"],
          rows: [
            ["`\\n`", "new line"],
            ["`\\t`", "horizontal tab (jumps to the next tab stop)"],
            ["`\\\\`", "one backslash"],
            ["`\\\"`", "a double quote inside a string"],
            ["`\\'`", "a single quote"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Escape.java",
          code: `public class Escape
{
    public static void main(String[] args)
    {
        System.out.println("Roll\\tName");
        System.out.println("Ravi said \\"Namaste\\"");
        System.out.println("Line 1\\nLine 2");
        System.out.println("C:\\\\Java");
        char ch = 'A';
        int code = ch;
        char next = (char) (ch + 2);
        System.out.println(code);
        System.out.println(next);
        System.out.println('A' + 1);
        System.out.println("A" + 1);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: escape sequences and character codes",
          problem: "Give the exact output of Escape.java.",
          steps: [
            "`\\t` puts a tab between Roll and Name. `\\\"` prints a double quote, so the line reads Ravi said \"Namaste\".",
            "`\\n` breaks the string onto two lines: Line 1, then Line 2. `\\\\` prints a single backslash: C:\\Java.",
            "`int code = ch;` stores the Unicode value of 'A', which is 65. `ch + 2` is 67 and casting it to char gives 'C'.",
            "`'A' + 1`: a char in arithmetic becomes its code, so 65 + 1 = 66. But `\"A\" + 1` is a String, so + joins: A1.",
          ],
          answer: "Roll    Name   (with a tab between)\nRavi said \"Namaste\"\nLine 1\nLine 2\nC:\\Java\n65\nC\n66\nA1",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What is printed by `System.out.println((int) 'a');`?",
              answer: 97,
              explain: "The code of lowercase a is 97.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Token", "What it is", "Examples"],
          rows: [
            ["**Keyword**", "a reserved word with a fixed meaning; cannot be used as a name", "`int`, `class`, `if`, `while`, `public`"],
            ["**Identifier**", "a name you give to a variable, method or class", "`marks`, `total_sum`, `Mobile`"],
            ["**Literal**", "a fixed value written in the program", "`25`, `3.5`, `'A'`, `\"India\"`, `true`, `null`"],
            ["**Operator**", "a symbol that does an operation", "`+`, `*`, `>=`, `&&`"],
            ["**Separator** (punctuator)", "marks the end or grouping of code", "`;` `,` `.` `( )` `{ }` `[ ]`"],
          ],
        },
        {
          type: "text",
          md: "**Types of literals**: **integer** (`45`, `-7`), **real** or floating-point (`3.14`, `2.5f`), **character** (one character in single quotes, `'x'`), **string** (any characters in double quotes, `\"Hi\"`), **boolean** (`true`, `false`) and the **null** literal.\n\n**Rules for identifiers**: use letters, digits, `_` and the dollar sign; do not start with a digit; no spaces; not a keyword; Java is case-sensitive.",
        },
        {
          type: "mistake",
          wrong: "`'A' + 1` and `\"A\" + 1` both print A1.",
          right: "`'A' + 1` prints **66** because a `char` in arithmetic uses its code (65). `\"A\" + 1` prints **A1** because a String joined with a number gives a String.",
          why: "Both look like \"the letter A plus one\". The difference is the quotes: single quotes make a char (a number code underneath), double quotes make a String (text).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which kind of token is it?",
            groups: ["Keyword", "Identifier", "Literal"],
            items: [
              { text: "while", group: 0, hint: "while is reserved for loops." },
              { text: "rollNo", group: 1, hint: "A name chosen by the programmer." },
              { text: "'7'", group: 2, hint: "A character in single quotes is a character literal." },
              { text: "double", group: 0, hint: "double is a data type keyword." },
              { text: "Area_1", group: 1, hint: "Letters, digits and _ make a valid name." },
              { text: "\"Pune\"", group: 2, hint: "Text in double quotes is a string literal." },
              { text: "false", group: 2, hint: "true and false are boolean literals, not keywords." },
            ],
            explain: "Keywords are reserved by Java, identifiers are names you choose, and literals are fixed values. `true`, `false` and `null` are literals, so they also cannot be used as names.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"Give the output\" questions often mix `char` and `int`, e.g. `System.out.println('B' + 2);` (prints 68) versus `System.out.println((char) ('B' + 2));` (prints D). Keep the codes A = 65 and a = 97 in mind and count on from there.",
        },
        {
          type: "keypoints",
          items: [
            "Java uses Unicode; a char takes 2 bytes. ASCII is a 7-bit code for 128 characters.",
            "Codes: A = 65, a = 97, '0' = 48, space = 32.",
            "Escape sequences: \\n new line, \\t tab, \\\\ backslash, \\\" double quote.",
            "Five tokens: keywords, identifiers, literals, operators, separators.",
            "A char in arithmetic uses its code; a String with + joins.",
          ],
        },
      ],
      flashcards: [
        { front: "Unicode", back: "A character code that covers almost every language's script; Java's char uses it (2 bytes)." },
        { front: "ASCII", back: "American Standard Code for Information Interchange: a 7-bit code for 128 characters (0–127)." },
        { front: "ASCII codes of A, a and 0", back: "A = 65, a = 97, '0' = 48." },
        { front: "Escape sequence", back: "A backslash followed by a character that stands for one special character, e.g. \\n (new line), \\t (tab)." },
        { front: "Token", back: "The smallest individual unit of a program: keyword, identifier, literal, operator or separator." },
        { front: "Literal", back: "A fixed value in a program: integer, real, character, string, boolean or null." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which escape sequence moves the output to a new line?",
          options: ["`\\n`", "`\\t`", "`\\\\`", "`/n`"],
          answer: 0,
          explain: "`\\n` is new line. `\\t` is tab and `\\\\` is a backslash. `/n` uses the wrong slash.",
        },
        {
          kind: "numeric",
          q: "What is printed by `System.out.println('C' + 3);`?",
          answer: 70,
          explain: "'C' is 67; 67 + 3 = 70. A char in arithmetic gives an int.",
          difficulty: 2,
          hint: "A = 65, so C = ?",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println((char) ('a' + 4));`?",
          options: ["e", "101", "a4", "d"],
          answer: 0,
          explain: "'a' + 4 = 97 + 4 = 101, and casting to char gives 'e'.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`true` can be used as the name of a variable.",
          answer: false,
          explain: "`true` is a boolean literal, so it is reserved and cannot be an identifier.",
        },
        {
          kind: "fill",
          q: "In Java, a char occupies ___ bytes of memory.",
          answer: ["2", "two"],
          explain: "Java chars store Unicode values in 2 bytes (16 bits).",
        },
        {
          kind: "multi",
          q: "Which of these are literals? (Choose all that apply)",
          options: ["`45.6`", "`'z'`", "`\"Goa\"`", "`int`", "`marks`"],
          answers: [0, 1, 2],
          explain: "`int` is a keyword and `marks` is an identifier.",
        },
        {
          kind: "mcq",
          q: "Which line prints exactly:  He said \"Go\"",
          options: ["`System.out.println(\"He said \\\"Go\\\"\");`", "`System.out.println(\"He said \"Go\"\");`", "`System.out.println('He said \"Go\"');`", "`System.out.println(\"He said /\"Go/\"\");`"],
          answer: 0,
          explain: "A double quote inside a string must be written as `\\\"`. The second option ends the string early and gives a syntax error; single quotes can hold only one character.",
          difficulty: 3,
          hint: "Which one uses the backslash?",
        },
      ],
    },
    {
      slug: "java9-data-types-conversion",
      title: "Data Types, Variables and Type Conversion",
      summary: "The eight primitive types and their sizes, non-primitive types, declaring variables and constants, and implicit and explicit type conversion.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "At a vegetable shop, small things go in small bags and heavy things in big ones. Java also uses \"bags\" of different sizes for different kinds of values. A **data type** tells Java what kind of value a variable will hold and how much memory it needs.\n\nA **variable** is a named memory location whose value can change while the program runs. You must **declare** it with a type before using it: `int marks;` Then you can **initialise** it, i.e. give it a first value: `marks = 87;` or both at once: `int marks = 87;`",
        },
        {
          type: "table",
          headers: ["Primitive type", "Size", "Stores", "Example"],
          rows: [
            ["`byte`", "1 byte", "whole numbers −128 to 127", "`byte age = 14;`"],
            ["`short`", "2 bytes", "whole numbers", "`short year = 2025;`"],
            ["`int`", "4 bytes", "whole numbers (default integer type)", "`int pop = 1400000;`"],
            ["`long`", "8 bytes", "very large whole numbers; literal ends with L", "`long big = 9876543210L;`"],
            ["`float`", "4 bytes", "decimal numbers; literal ends with f", "`float rate = 7.5f;`"],
            ["`double`", "8 bytes", "decimal numbers (default decimal type)", "`double pi = 3.14159;`"],
            ["`char`", "2 bytes", "one Unicode character", "`char sec = 'B';`"],
            ["`boolean`", "-", "only true or false", "`boolean pass = true;`"],
          ],
        },
        {
          type: "text",
          md: "These eight are **primitive** (fundamental) data types: built into Java. **Non-primitive** (reference or composite) data types are made from them: **classes**, **arrays** and **interfaces**. `String` is a class, so `String name = \"Kavya\";` uses a non-primitive type.\n\nA **constant** is a variable whose value cannot change once set. Declare it with the keyword **final**: `final double PI = 3.14;` Trying `PI = 3.2;` later gives a compile-time error.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which type is best for storing whether a student has passed?",
              options: ["boolean", "char", "int", "String"],
              answer: 0,
              explain: "Pass or not is a yes/no value, so boolean (true/false) fits.",
            },
          ],
        },
        {
          type: "heading",
          text: "Type conversion",
        },
        {
          type: "text",
          md: "**Type conversion** changes a value from one data type to another.\n\n**Implicit conversion** (also called **widening**, **coercion** or **type promotion**) happens automatically when a smaller type goes into a bigger one. In a mixed expression, every value is promoted to the biggest type present. The order is: byte → short → int → long → float → double (and char → int).\n\n**Explicit conversion** (**type casting**) is written by the programmer, by putting the type in brackets, to force a bigger type into a smaller one: `int r = (int) 49.99;` gives 49. The decimal part is **cut off**, not rounded.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Convert.java",
          code: `public class Convert
{
    public static void main(String[] args)
    {
        int a = 7;
        double d = a;
        double price = 49.99;
        int rupees = (int) price;
        char c = 'b';
        int sum = c + 1;
        long big = 1234567890123L;
        float f = 2.5f;
        double mix = a / 2 + f;
        System.out.println(d);
        System.out.println(rupees);
        System.out.println(sum);
        System.out.println(big);
        System.out.println(mix);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: implicit and explicit conversion",
          problem: "Trace Convert.java and give the exact output, line by line.",
          steps: [
            "`double d = a;` widens 7 to 7.0 automatically (implicit).",
            "`(int) price` casts 49.99 to int, cutting off .99: rupees = 49 (explicit).",
            "`c + 1`: 'b' is 98, so sum = 99.",
            "`big` holds 1234567890123; the L makes the literal a long, because it is too large for int.",
            "`a / 2 + f`: first `7 / 2` is int ÷ int = 3. Then 3 + 2.5f is promoted to float: 5.5. Stored in a double, it prints 5.5.",
          ],
          answer: "7.0\n49\n99\n1234567890123\n5.5",
        },
        {
          type: "mistake",
          wrong: "`(int) 7.9` gives 8, because 7.9 is closer to 8.",
          right: "`(int) 7.9` gives **7**. Casting to an integer type **truncates**: it simply drops everything after the decimal point.",
          why: "In maths class we round to the nearest whole number, so 8 feels right. A cast does not look at the decimal part at all. To round, Java has a separate method, `Math.round()`, which you will meet in the Mathematical Library Methods chapter.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does `double avg = 9 / 2;` store?",
            emoji: "🤔",
            options: ["4.5", "4.0", "4", "Error"],
            answer: 1,
            trap: 0,
            explain: "`9 / 2` is int ÷ int, so it is worked out first as 4. Only then is 4 widened to 4.0 to fit in the double. Write `9 / 2.0` to get 4.5.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "When asked for the **data type of the result**, apply promotion: `int + double` → double, `char + int` → int, `long * float` → float. Also learn the sizes in bytes: byte 1, short 2, int 4, long 8, float 4, double 8, char 2. These are asked as 1-mark questions.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "`String` is a primitive data type in Java.",
              answer: false,
              explain: "String is a class, so it is a non-primitive (reference) type.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Eight primitive types: byte, short, int, long, float, double, char, boolean.",
            "Non-primitive types: classes (including String), arrays, interfaces.",
            "A variable is a named memory location; `final` makes a constant.",
            "Implicit conversion (widening) is automatic; explicit conversion (casting) is written by you and truncates.",
            "In a mixed expression, values are promoted to the biggest type present.",
          ],
        },
      ],
      flashcards: [
        { front: "Primitive data types", back: "byte, short, int, long, float, double, char, boolean." },
        { front: "Sizes: int, long, float, double", back: "int 4 bytes, long 8 bytes, float 4 bytes, double 8 bytes." },
        { front: "Variable", back: "A named memory location whose value can change during the program." },
        { front: "final keyword", back: "Makes a constant: final double PI = 3.14; its value cannot be changed later." },
        { front: "Implicit type conversion", back: "Automatic conversion from a smaller to a bigger type (widening / type promotion), e.g. int to double." },
        { front: "Explicit type conversion", back: "Type casting written by the programmer, e.g. (int) 49.99 gives 49." },
        { front: "Non-primitive data types", back: "Types built from primitives: classes (e.g. String), arrays and interfaces." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the data type of the result of `5 + 2.0`?",
          options: ["double", "int", "float", "long"],
          answer: 0,
          explain: "int + double is promoted to double. A decimal literal like 2.0 is a double by default.",
        },
        {
          kind: "mcq",
          q: "What is the value of `(int) 12.75`?",
          options: ["12", "13", "12.75", "12.0"],
          answer: 0,
          explain: "Casting to int truncates the decimal part.",
        },
        {
          kind: "fill",
          q: "The size of a `long` variable is ___ bytes.",
          answer: ["8", "eight"],
          explain: "long takes 8 bytes; int takes 4.",
        },
        {
          kind: "truefalse",
          q: "`float f = 3.5;` compiles without error.",
          answer: false,
          explain: "3.5 is a double literal; putting a double into a float needs `3.5f` or a cast.",
          difficulty: 3,
          hint: "What is the default type of a decimal literal?",
        },
        {
          kind: "numeric",
          q: "What is printed by `double x = 11 / 4; System.out.println(x);`? (Type the number.)",
          answer: 2,
          explain: "11 / 4 is integer division = 2; widened to 2.0 and printed as 2.0.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order these types in the direction of implicit (widening) conversion.",
          items: ["byte", "short", "int", "long", "float", "double"],
          explain: "Java widens automatically from left to right in this list.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these are non-primitive data types? (Choose all that apply)",
          options: ["String", "an array", "a class you write, e.g. Mobile", "char", "boolean"],
          answers: [0, 1, 2],
          explain: "char and boolean are primitive. String, arrays and user-defined classes are reference types.",
        },
        {
          kind: "mcq",
          q: "Which declaration makes a constant?",
          options: ["`final int MAX = 100;`", "`const int MAX = 100;`", "`static int MAX = 100;`", "`int final = 100;`"],
          answer: 0,
          explain: "Java uses `final` for constants. `const` is reserved but not used; `static` alone does not stop changes.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Operators in Java                                                 */
/* ------------------------------------------------------------------ */
const operators: Topic = {
  slug: "java9-operators",
  title: "Operators in Java",
  icon: "➗",
  description: "Arithmetic, increment and decrement, assignment, relational, logical and ternary operators, precedence, and writing maths as Java expressions.",
  lessons: [
    {
      slug: "java9-arithmetic-increment",
      title: "Arithmetic, Increment and Assignment Operators",
      summary: "Unary, binary and ternary operators; +, −, *, / and %; prefix and postfix ++ and --; and shorthand assignment like += and *=.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "An **operator** is a symbol that tells Java to do an operation. The values it works on are called **operands**. In `a + b`, `+` is the operator and `a`, `b` are operands. A combination of operators and operands that gives a value, such as `a + b * 2`, is an **expression**.\n\nOperators are grouped by how many operands they take: **unary** (one operand: `-a`, `a++`), **binary** (two: `a * b`) and **ternary** (three: `a > b ? a : b`).",
        },
        {
          type: "table",
          headers: ["Arithmetic operator", "Meaning", "Result with 17 and 5"],
          rows: [
            ["`+`", "addition", "22"],
            ["`-`", "subtraction", "12"],
            ["`*`", "multiplication", "85"],
            ["`/`", "division: **integer division** if both operands are integers", "3"],
            ["`%`", "**modulus**: the remainder after division", "2"],
          ],
        },
        {
          type: "text",
          md: "With `%`, the sign of the answer follows the **first** operand (the dividend): `-23 % 5` is −3 but `23 % -5` is 3.\n\n**Increment** `++` adds 1 and **decrement** `--` subtracts 1. Each has two forms:\n\n- **Prefix** (`++a`): change first, then use the new value. Rule: *change then use*.\n- **Postfix** (`a++`): use the current value first, then change it. Rule: *use then change*.\n\nOn a line by itself, `a++;` and `++a;` do the same thing. The difference shows only inside a bigger expression.",
        },
        {
          type: "table",
          headers: ["Shorthand", "Means", "If a = 10, a becomes"],
          rows: [
            ["`a += 4`", "`a = a + 4`", "14"],
            ["`a -= 4`", "`a = a - 4`", "6"],
            ["`a *= 4`", "`a = a * 4`", "40"],
            ["`a /= 4`", "`a = a / 4`", "2"],
            ["`a %= 4`", "`a = a % 4`", "2"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Incr.java",
          code: `public class Incr
{
    public static void main(String[] args)
    {
        int x = 8;
        int y = x++ * 2 + --x;
        System.out.println("x = " + x + ", y = " + y);
        int p = 10;
        p += p++ + ++p;
        System.out.println("p = " + p);
        int m = 23, n = 5;
        System.out.println(m / n + " " + m % n);
        System.out.println(-23 % 5);
        System.out.println(23 % -5);
        int k = 6;
        k *= 2 + 3;
        System.out.println("k = " + k);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: prefix, postfix and shorthand",
          problem: "Find the exact output of Incr.java. Show the working for y and p.",
          steps: [
            "y: `x++` uses 8, then x = 9. `8 * 2 = 16`. Then `--x` makes x = 8 and uses 8. y = 16 + 8 = 24, and x is 8.",
            "p: `p += expr` means `p = p + (expr)`. The old p (10) is taken first. Then `p++` uses 10 (p becomes 11) and `++p` makes p 12 and uses 12. So p = 10 + (10 + 12) = 32.",
            "`23 / 5` is 4 and `23 % 5` is 3, printed with a space: `4 3`. `-23 % 5` is −3 and `23 % -5` is 3 (the sign follows the first number).",
            "`k *= 2 + 3` means `k = k * (2 + 3)` = 6 × 5 = 30, not 6 × 2 + 3.",
          ],
          answer: "x = 8, y = 24\np = 32\n4 3\n-3\n3\nk = 30",
        },
        {
          type: "table",
          headers: ["Step", "Part evaluated", "Value used", "x after"],
          rows: [
            ["1", "`int x = 8;`", "-", "8"],
            ["2", "`x++`", "8", "9"],
            ["3", "`8 * 2`", "16", "9"],
            ["4", "`--x`", "8", "8"],
            ["5", "`y = 16 + 8`", "24", "8"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "`int a = 5; int b = ++a + a++;` What are a and b?",
              options: ["a = 7, b = 12", "a = 7, b = 11", "a = 6, b = 12", "a = 7, b = 13"],
              answer: 0,
              explain: "`++a` makes a = 6 and uses 6; `a++` uses 6 and then makes a = 7. b = 6 + 6 = 12.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "`k *= 2 + 3;` means `k = k * 2 + 3`, so with k = 6 it gives 15.",
          right: "A shorthand operator works on the **whole** right side: `k *= 2 + 3` means `k = k * (2 + 3)`, which is 30.",
          why: "Students expand it by just copying the symbols across, and then `*` before `+` gives 15. Java first works out everything to the right of `*=`, then multiplies.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each expression to its value (int a = 9).",
            pairs: [
              ["a / 2", "4"],
              ["a % 2", "1"],
              ["a / 2.0", "4.5"],
              ["-a % 4", "-1"],
              ["a % 10", "9"],
            ],
            explain: "int ÷ int drops the remainder; % gives the remainder, with the sign of the first operand; one double operand gives a decimal answer.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "For increment/decrement outputs, write the current value of the variable under each step, exactly as in the table above. Examiners give marks for the working. A frequent slip in `p += p++ + ++p` is forgetting that the **old** value of p (10) is kept for the addition.",
        },
        {
          type: "keypoints",
          items: [
            "Unary, binary and ternary operators take one, two and three operands.",
            "int / int gives an int (integer division); % gives the remainder, with the sign of the dividend.",
            "Prefix ++a: change then use. Postfix a++: use then change.",
            "Shorthand `a op= b` means `a = a op (b)`.",
          ],
        },
      ],
      flashcards: [
        { front: "Operand", back: "A value or variable on which an operator acts, e.g. a and b in a + b." },
        { front: "Unary, binary, ternary", back: "Operators that work on one, two or three operands, e.g. ++a, a * b, a > b ? a : b." },
        { front: "Prefix increment ++a", back: "Increases a by 1 first, then uses the new value (change then use)." },
        { front: "Postfix increment a++", back: "Uses the current value of a first, then increases it by 1 (use then change)." },
        { front: "Modulus operator %", back: "Gives the remainder of a division, e.g. 17 % 5 = 2; the sign follows the first operand." },
        { front: "a *= b + c", back: "Means a = a * (b + c)." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "What is the value of `47 % 6`?",
          answer: 5,
          explain: "47 = 6 × 7 + 5, so the remainder is 5.",
        },
        {
          kind: "mcq",
          q: "`int a = 4; int b = a++ + a;` What is b?",
          options: ["9", "8", "10", "5"],
          answer: 0,
          explain: "a++ uses 4 and then makes a = 5; the second a is 5. b = 4 + 5 = 9.",
          difficulty: 2,
          hint: "After a++ is used, what is a?",
        },
        {
          kind: "numeric",
          q: "`int n = 20; n -= 3 * 2;` What is n?",
          answer: 14,
          explain: "n = 20 − (3 × 2) = 14.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(-17 % 4);`?",
          options: ["-1", "1", "3", "-3"],
          answer: 0,
          explain: "17 % 4 is 1, and the sign follows the first operand (−17), so the answer is −1.",
          difficulty: 3,
          hint: "The sign comes from the number before %.",
        },
        {
          kind: "truefalse",
          q: "The ternary operator `?:` needs three operands.",
          answer: true,
          explain: "condition ? value1 : value2 has three parts.",
        },
        {
          kind: "fill",
          q: "In postfix form, the value is first used and ___ changed.",
          answer: ["then", "later", "afterwards", "after"],
          explain: "Postfix: use then change. Prefix: change then use.",
        },
        {
          kind: "mcq",
          q: "`int c = 3; c = c++ * 2 + c;` What is c?",
          options: ["10", "9", "11", "8"],
          answer: 0,
          explain: "c++ uses 3 (c becomes 4): 3 × 2 = 6. Then the last c is 4: 6 + 4 = 10. Finally c is assigned 10.",
          difficulty: 3,
          hint: "Track c after the c++ has been used.",
        },
      ],
    },
    {
      slug: "java9-relational-logical-ternary",
      title: "Relational, Logical and Ternary Operators; Precedence",
      summary: "Comparing with relational operators, combining conditions with &&, || and !, choosing with the ternary operator, operator precedence, and writing maths in Java.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Programs keep asking questions: *Is the age 18 or more? Is the number even?* The answer is always `true` or `false`, a **boolean** value.\n\n**Relational operators** compare two values: `<`, `>`, `<=`, `>=`, `==` (equal to) and `!=` (not equal to). Note that `=` **assigns** a value, while `==` **compares** two values.\n\n**Logical operators** join conditions:",
        },
        {
          type: "table",
          headers: ["Operator", "Name", "Result is true when", "Example (a = 10, b = 3)"],
          rows: [
            ["`&&`", "logical AND", "**both** conditions are true", "`a > b && b > 5` is false"],
            ["`||`", "logical OR", "**at least one** condition is true", "`a > b || b > 5` is true"],
            ["`!`", "logical NOT", "it reverses true and false", "`!(a == 10)` is false"],
          ],
        },
        {
          type: "text",
          md: "**Short-circuit evaluation**: with `&&`, if the first condition is false, Java does not check the second (the answer must be false). With `||`, if the first is true, the second is skipped. So any `++` in the skipped part never happens.\n\nThe **ternary operator** (also called the **conditional operator**) picks one of two values:\n\n`variable = (condition) ? valueIfTrue : valueIfFalse;`",
        },
        {
          type: "code",
          lang: "java",
          caption: "Logic.java",
          code: `public class Logic
{
    public static void main(String[] args)
    {
        int a = 10, b = 3;
        boolean r1 = a > b && b > 5;
        boolean r2 = a > b || b > 5;
        boolean r3 = !(a == 10);
        System.out.println(r1 + " " + r2 + " " + r3);
        int big = (a > b) ? a : b;
        String res = (a % 2 == 0) ? "Even" : "Odd";
        System.out.println(big + " " + res);
        int v = 2 + 3 * 4 - 6 / 2;
        System.out.println(v);
        boolean s = (b > 5) && (++a > 0);
        System.out.println(s + " " + a);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: logic, ternary and precedence",
          problem: "Give the exact output of Logic.java.",
          steps: [
            "r1: `10 > 3` is true, `3 > 5` is false; true && false = false. r2: true || false = true. r3: `a == 10` is true, and ! makes it false.",
            "`(a > b) ? a : b` is true, so big = a = 10. `10 % 2 == 0` is true, so res = \"Even\".",
            "`2 + 3 * 4 - 6 / 2`: * and / first: 12 and 3. Then left to right: 2 + 12 − 3 = 11.",
            "`(b > 5) && (++a > 0)`: b > 5 is false, so Java short-circuits and **never runs** ++a. s = false and a stays 10.",
          ],
          answer: "false true false\n10 Even\n11\nfalse 10",
        },
        {
          type: "table",
          headers: ["Precedence (high to low)", "Operators"],
          rows: [
            ["1", "`()` brackets, postfix `a++ a--`"],
            ["2", "unary `++a --a`, unary minus `-`, `!`"],
            ["3", "`*` `/` `%`"],
            ["4", "`+` `-`"],
            ["5", "relational `<` `>` `<=` `>=`"],
            ["6", "equality `==` `!=`"],
            ["7", "`&&`"],
            ["8", "`||`"],
            ["9", "ternary `?:`"],
            ["10", "assignment `=` `+=` `-=` `*=` `/=` `%=`"],
          ],
        },
        {
          type: "text",
          md: "Operators on the same level are worked **left to right** (assignment works right to left). Two more operators you already use: **new** creates an object (`new Scanner(System.in)`), and the **dot operator** `.` reaches a member of a class or object (`Math.sqrt`, `System.out.println`).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What is the value of `20 - 8 / 4 * 2`?",
              answer: 16,
              explain: "8 / 4 = 2, then 2 * 2 = 4 (left to right on the same level); 20 − 4 = 16.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "heading",
          text: "Writing maths as a Java expression",
        },
        {
          type: "table",
          headers: ["Maths", "Java expression"],
          rows: [
            ["$\\dfrac{a+b}{2c}$", "`(a + b) / (2 * c)`"],
            ["$ut + \\frac{1}{2}at^2$", "`u * t + 0.5 * a * t * t`"],
            ["$\\dfrac{9}{5}C + 32$", "`9.0 / 5 * C + 32`"],
            ["$x^2 + 2xy + y^2$", "`x * x + 2 * x * y + y * y`"],
          ],
        },
        {
          type: "mistake",
          wrong: "To write $\\dfrac{a+b}{2c}$ in Java, type `a + b / 2 * c`.",
          right: "Write `(a + b) / (2 * c)`. Brackets are needed around the whole top and the whole bottom.",
          why: "On paper, the fraction bar groups the top and bottom for you. Java has no fraction bar: without brackets, `/` is done first and `/ 2 * c` multiplies by c instead of dividing by it.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "`int a = 5; boolean t = (a < 3) && (a++ > 2);` What is a now?",
            emoji: "⚡",
            options: ["5", "6", "4"],
            answer: 0,
            trap: 1,
            explain: "`a < 3` is false, so && short-circuits and the right side with `a++` never runs. a stays 5.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"Write the Java expression for...\" questions lose marks for missing `*` (write `2 * a`, not `2a`) and for wrong brackets. For $\\frac{1}{2}$ write `0.5` or `1.0 / 2`: `1 / 2` is integer division and gives 0, which makes the whole term zero.",
        },
        {
          type: "keypoints",
          items: [
            "Relational operators give true/false; `==` compares, `=` assigns.",
            "&& needs both true; || needs at least one true; ! reverses.",
            "Short-circuit: && skips the right side if the left is false; || skips it if the left is true.",
            "Ternary: `x = condition ? v1 : v2;`",
            "Precedence: unary, then * / %, then + −, then relational, equality, &&, ||, ?:, assignment.",
          ],
        },
      ],
      flashcards: [
        { front: "== vs =", back: "== compares two values (relational); = assigns a value to a variable." },
        { front: "Logical AND (&&)", back: "True only when both conditions are true." },
        { front: "Logical OR (||)", back: "True when at least one condition is true." },
        { front: "Short-circuit evaluation", back: "&& skips the second condition if the first is false; || skips it if the first is true." },
        { front: "Ternary operator", back: "condition ? value1 : value2; gives value1 if the condition is true, otherwise value2." },
        { front: "Highest and lowest precedence (common operators)", back: "Unary operators (++, --, !) are highest; assignment operators are lowest." },
        { front: "Java for 2ab", back: "2 * a * b (the * cannot be left out)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which operator checks whether two values are equal?",
          options: ["`==`", "`=`", "`!=`", "`=>`"],
          answer: 0,
          explain: "`=` assigns, `!=` checks not equal, and `=>` is not a Java operator.",
        },
        {
          kind: "mcq",
          q: "`int x = 7; String s = (x % 2 == 0) ? \"Even\" : \"Odd\";` What is s?",
          options: ["Odd", "Even", "true", "1"],
          answer: 0,
          explain: "7 % 2 is 1, so the condition is false and the second value \"Odd\" is chosen.",
        },
        {
          kind: "truefalse",
          q: "`!(5 > 2) || 4 == 4` is true.",
          answer: true,
          explain: "!(true) is false, 4 == 4 is true; false || true = true.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What is the value of `4 + 6 % 4 * 3`?",
          answer: 10,
          explain: "% and * are on the same level, left to right: 6 % 4 = 2, 2 * 3 = 6; then 4 + 6 = 10.",
          difficulty: 2,
          hint: "% and * share a level; go left to right.",
        },
        {
          kind: "mcq",
          q: "Which is the correct Java expression for $\\dfrac{a^2 + b^2}{2ab}$?",
          options: ["`(a * a + b * b) / (2 * a * b)`", "`a * a + b * b / 2 * a * b`", "`(a ^ 2 + b ^ 2) / 2ab`", "`(a * a + b * b) / 2 * a * b`"],
          answer: 0,
          explain: "The whole numerator and the whole denominator need brackets; ^ is not a power operator in Java and 2ab must be written 2 * a * b.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`int p = 4, q = 9; boolean r = (q > p) || (++p > 10);` What are r and p?",
          options: ["r = true, p = 4", "r = true, p = 5", "r = false, p = 5", "r = false, p = 4"],
          answer: 0,
          explain: "q > p is true, so || short-circuits: the right side (with ++p) is skipped. r is true and p stays 4.",
          difficulty: 3,
          hint: "Does Java need to look at the right side of || here?",
        },
        {
          kind: "order",
          q: "Order these operators from highest to lowest precedence.",
          items: ["`!`", "`*`", "`+`", "`>`", "`&&`", "`=`"],
          explain: "Unary NOT, then multiplicative, additive, relational, logical AND, and assignment last.",
          difficulty: 3,
        },
        {
          kind: "multi",
          q: "Which of these are relational operators? (Choose all that apply)",
          options: ["`>=`", "`!=`", "`&&`", "`<`", "`%`"],
          answers: [0, 1, 3],
          explain: "&& is logical and % is arithmetic.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. Input in Java                                                     */
/* ------------------------------------------------------------------ */
const inputJava: Topic = {
  slug: "java9-input-in-java",
  title: "Input in Java",
  icon: "⌨️",
  description: "Three ways to give data to a program (initialisation, parameters and the Scanner class), types of errors and comments.",
  lessons: [
    {
      slug: "java9-scanner-input",
      title: "Initialisation, Parameters and the Scanner Class",
      summary: "Give values by initialisation, through method parameters in BlueJ, or at run time with Scanner's nextInt, nextDouble, next, nextLine and next().charAt(0).",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "A calculator that always adds 2 + 3 is not much use. A good program lets the user give it new values each time. Data given to a program is called **input**. There are three ways to give input in ICSE Java programs.",
        },
        {
          type: "table",
          headers: ["Method", "How", "Example"],
          rows: [
            ["**Initialisation**", "values are written inside the program; to change them you must edit and recompile", "`int a = 60, b = 70;`"],
            ["**Parameters** (function arguments)", "values are passed to a method when it is called; in BlueJ a box asks for them", "`void area(int length, int breadth)`"],
            ["**Scanner class**", "the user types values on the keyboard while the program runs", "`int n = sc.nextInt();`"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Rectangle.java: input through parameters",
          code: `public class Rectangle
{
    public void area(int length, int breadth)
    {
        int a = length * breadth;
        System.out.println("Area = " + a);
    }
}`,
        },
        {
          type: "text",
          md: "In BlueJ, create an object of Rectangle, choose the method `area`, and a dialog asks for length and breadth. If you type 12 and 5, the output is `Area = 60`. The variables `length` and `breadth` in the method heading are **parameters**; the values 12 and 5 you pass are **arguments**.\n\nThe **Scanner** class is in the package **java.util**, so the program must **import** it first: `import java.util.Scanner;` (or `import java.util.*;` for the whole package). Then create a Scanner object that reads from the keyboard, `System.in`.",
        },
        {
          type: "table",
          headers: ["Scanner method", "Reads", "Example"],
          rows: [
            ["`nextInt()`", "an int", "`int age = sc.nextInt();`"],
            ["`nextLong()`", "a long", "`long ph = sc.nextLong();`"],
            ["`nextFloat()`", "a float", "`float w = sc.nextFloat();`"],
            ["`nextDouble()`", "a double", "`double m = sc.nextDouble();`"],
            ["`nextBoolean()`", "true or false", "`boolean ok = sc.nextBoolean();`"],
            ["`next()`", "one word (stops at a space)", "`String city = sc.next();`"],
            ["`nextLine()`", "a whole line, spaces included", "`String name = sc.nextLine();`"],
            ["`next().charAt(0)`", "one character", "`char sec = sc.next().charAt(0);`"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Details.java",
          code: `import java.util.Scanner;

public class Details
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        System.out.print("Enter marks: ");
        double marks = sc.nextDouble();
        System.out.print("Enter section: ");
        char sec = sc.next().charAt(0);
        System.out.println(name + ", " + age + ", 9" + sec);
        System.out.println("Marks out of 50: " + marks / 2);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run with user input",
          problem: "The user types Asha Rao, 14, 86.5 and B (pressing Enter after each). Give the screen output.",
          steps: [
            "Each prompt uses `print`, so the value the user types appears on the same line as the prompt.",
            "`nextLine()` reads the full name with the space: \"Asha Rao\". `nextInt()` reads 14 and `nextDouble()` reads 86.5.",
            "`next().charAt(0)` reads the word \"B\" and takes its first character 'B'.",
            "`name + \", \" + age + \", 9\" + sec` joins everything into one string: Asha Rao, 14, 9B. Then 86.5 / 2 = 43.25.",
          ],
          answer: "Enter your name: Asha Rao\nEnter your age: 14\nEnter marks: 86.5\nEnter section: B\nAsha Rao, 14, 9B\nMarks out of 50: 43.25",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "To read the city name \"New Delhi\" in one go, use:",
              options: ["`sc.nextLine()`", "`sc.next()`", "`sc.nextInt()`", "`sc.next().charAt(0)`"],
              answer: 0,
              explain: "next() stops at the space and would read only \"New\".",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "To read a character, write `char ch = sc.nextChar();`",
          right: "Scanner has **no** `nextChar()` method. Write `char ch = sc.next().charAt(0);`: read a word, then take its first character.",
          why: "Since there are nextInt and nextDouble, nextChar seems natural. It does not exist, so the program will not compile. `charAt(0)` is a String method that gives the character at position 0.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each value to the Scanner call that reads it.",
            pairs: [
              ["Price 249.50", "nextDouble()"],
              ["Roll number 23", "nextInt()"],
              ["Full address with spaces", "nextLine()"],
              ["Grade letter A", "next().charAt(0)"],
              ["Mobile number 9876543210", "nextLong()"],
            ],
            explain: "A 10-digit mobile number is too big for int, so use long. Text with spaces needs nextLine(); one character needs next().charAt(0).",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "nextLine() after nextInt()",
          md: "If you call `nextLine()` right after `nextInt()`, it reads the Enter key left behind by nextInt and returns an empty string. Read the line first (as in Details.java), or put an extra `sc.nextLine();` before it to clear the leftover Enter.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "In Section B, a program that should accept values must take them with Scanner, with a clear prompt for each value. Writing the `import java.util.*;` line and creating the Scanner object are part of the marking scheme, so never skip them.",
        },
        {
          type: "keypoints",
          items: [
            "Three ways to input: initialisation, parameters (arguments), Scanner.",
            "Scanner is in java.util: `import java.util.Scanner;` then `Scanner sc = new Scanner(System.in);`",
            "nextInt, nextLong, nextFloat, nextDouble, nextBoolean, next (one word), nextLine (whole line).",
            "There is no nextChar(); use `sc.next().charAt(0)`.",
          ],
        },
      ],
      flashcards: [
        { front: "Package of Scanner", back: "java.util (import java.util.Scanner; or import java.util.*;)" },
        { front: "Creating a Scanner object", back: "Scanner sc = new Scanner(System.in);" },
        { front: "next() vs nextLine()", back: "next() reads one word up to a space; nextLine() reads the whole line including spaces." },
        { front: "Reading one character", back: "char ch = sc.next().charAt(0);" },
        { front: "Parameter vs argument", back: "Parameters are the variables in the method heading; arguments are the actual values passed when calling it." },
        { front: "Input by initialisation", back: "Values are written in the program itself, e.g. int a = 5; changing them needs editing the code." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement correctly imports the Scanner class?",
          options: ["`import java.util.Scanner;`", "`import java.io.Scanner;`", "`import Scanner;`", "`include java.util.Scanner;`"],
          answer: 0,
          explain: "Scanner is in the java.util package, and Java uses import, not include.",
        },
        {
          kind: "fill",
          q: "Complete: `Scanner sc = new Scanner(System.___);`",
          answer: ["in"],
          explain: "System.in is the standard input stream: the keyboard.",
        },
        {
          kind: "truefalse",
          q: "Scanner has a method nextChar() to read a character.",
          answer: false,
          explain: "There is no nextChar(). Use next().charAt(0).",
        },
        {
          kind: "mcq",
          q: "The user types `Hello World` and the program runs `String s = sc.next();`. What is s?",
          options: ["Hello", "Hello World", "World", "H"],
          answer: 0,
          explain: "next() reads only up to the first space.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which method should read a value like 72.5?",
          options: ["`nextDouble()`", "`nextInt()`", "`next().charAt(0)`", "`nextBoolean()`"],
          answer: 0,
          explain: "72.5 is a decimal number. nextInt() would fail with an InputMismatchException.",
        },
        {
          kind: "order",
          q: "Put the steps of taking input with Scanner in order.",
          items: ["Write import java.util.Scanner;", "Create Scanner sc = new Scanner(System.in);", "Print a prompt such as \"Enter a number: \"", "Read the value with sc.nextInt();"],
          explain: "Import before the class, create the object, prompt the user, then read.",
        },
        {
          kind: "multi",
          q: "Which are ways of giving input to a Java program in the ICSE syllabus? (Choose all that apply)",
          options: ["Initialisation", "Parameters (function arguments)", "Scanner class", "Compiler options"],
          answers: [0, 1, 2],
          explain: "Initialisation, parameters and Scanner are the three ways taught.",
        },
      ],
    },
    {
      slug: "java9-errors-and-comments",
      title: "Types of Errors and Comments",
      summary: "Syntax, run-time and logical errors with examples, and single-line, multi-line and documentation comments.",
      minutes: 13,
      xp: 35,
      blocks: [
        {
          type: "text",
          md: "Even good programmers make mistakes. A mistake in a program is called an **error** or a **bug**, and finding and removing it is called **debugging**. Java errors are of three types.",
        },
        {
          type: "table",
          headers: ["Error", "When it is found", "Example"],
          rows: [
            ["**Syntax error** (compile-time error)", "by the compiler, before the program runs; the program does not compile", "missing `;`, misspelt keyword like `Int`, missing `}`"],
            ["**Run-time error**", "while the program is running; the program stops suddenly", "`int x = 10 / 0;` gives ArithmeticException; typing \"abc\" for `nextInt()` gives InputMismatchException"],
            ["**Logical error**", "never reported by Java; the program runs but gives a wrong answer", "using `a + b + c / 3` for the average"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Average.java",
          code: `/* Average of three numbers
   (a logical error is fixed below) */
public class Average
{
    public static void main(String[] args)
    {
        int a = 60, b = 70, c = 80;
        double wrong = a + b + c / 3;   // logical error
        double right = (a + b + c) / 3.0;
        System.out.println(wrong);
        System.out.println(right);
    }
}`,
        },
        {
          type: "example",
          title: "Finding a logical error",
          problem: "Give the output of Average.java and explain why the first answer is wrong.",
          steps: [
            "In `a + b + c / 3`, division is done first: `80 / 3` is integer division = 26.",
            "Then 60 + 70 + 26 = 156, stored in a double as 156.0. The program compiles and runs, so Java reports nothing.",
            "In `(a + b + c) / 3.0`, the brackets give 210 first, and 210 / 3.0 = 70.0.",
          ],
          answer: "156.0\n70.0\n\nThe first line is a logical error: the formula is wrong, not the syntax.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A program has `System.out.println(\"Hi\")` with no semicolon. What kind of error is this?",
              options: ["Syntax error", "Run-time error", "Logical error", "No error"],
              answer: 0,
              explain: "Breaking a grammar rule of Java is a syntax error; the compiler catches it.",
            },
          ],
        },
        {
          type: "heading",
          text: "Comments",
        },
        {
          type: "text",
          md: "A **comment** is a note for humans. The compiler ignores it. Comments explain what the code does, which makes programs easier to read and correct later.",
        },
        {
          type: "table",
          headers: ["Type", "Syntax", "Use"],
          rows: [
            ["**Single-line comment**", "`// text`", "a short note to the end of the line"],
            ["**Multi-line comment**", "`/* text */`", "a note over several lines"],
            ["**Documentation comment**", "`/** text */`", "describes a class or method; the javadoc tool turns it into help pages"],
          ],
        },
        {
          type: "mistake",
          wrong: "If a program compiles and runs without any message, it has no errors.",
          right: "It can still have a **logical error**: it runs smoothly but gives a wrong result. Check the output by hand with simple values.",
          why: "We expect the computer to warn us about every mistake. Java can only check the rules of the language and problems like dividing by zero; it has no idea what answer you wanted.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which type of error is it?",
            groups: ["Syntax", "Run-time", "Logical"],
            items: [
              { text: "Writing whlie instead of while", group: 0, hint: "A misspelt keyword breaks the grammar." },
              { text: "Dividing an int by zero", group: 1, hint: "This stops the program with ArithmeticException." },
              { text: "Area of a circle written as 2 * 3.14 * r", group: 2, hint: "It runs, but that is the circumference formula." },
              { text: "Missing closing bracket }", group: 0, hint: "The compiler reports it." },
              { text: "Typing \"ten\" when nextInt() is waiting", group: 1, hint: "InputMismatchException happens while running." },
              { text: "Using > instead of >= for \"18 or older\"", group: 2, hint: "It runs, but 18 is wrongly left out." },
            ],
            explain: "Syntax errors stop compiling, run-time errors stop the running program, and logical errors give wrong answers without any message.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "For \"name the type of error\" questions, look at the clue: *does not compile* → syntax; *stops while running* → run-time; *wrong output* → logical. Section B programs that include short comments or a variable description table are easier for the examiner to follow, and ICSE papers ask for it.",
        },
        {
          type: "keypoints",
          items: [
            "Syntax errors are found by the compiler; the program does not compile.",
            "Run-time errors stop the program while it runs (e.g. 10 / 0, wrong input type).",
            "Logical errors give a wrong result with no error message.",
            "Comments: `//` single-line, `/* */` multi-line, `/** */` documentation.",
          ],
        },
      ],
      flashcards: [
        { front: "Syntax error", back: "An error in the grammar rules of Java, found by the compiler (e.g. missing semicolon)." },
        { front: "Run-time error", back: "An error that occurs while the program runs and stops it, e.g. division of an int by zero." },
        { front: "Logical error", back: "A mistake in the logic or formula; the program runs but gives a wrong result." },
        { front: "Debugging", back: "Finding and removing errors (bugs) from a program." },
        { front: "Three types of comments", back: "Single-line //, multi-line /* */ and documentation /** */." },
        { front: "Exception for 10 / 0 with ints", back: "ArithmeticException (a run-time error)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which error is NOT reported by the computer?",
          options: ["Logical error", "Syntax error", "Run-time error", "All are reported"],
          answer: 0,
          explain: "A logical error gives a wrong answer silently; only careful testing finds it.",
        },
        {
          kind: "mcq",
          q: "`int a = 8, b = 0; System.out.println(a / b);` This causes a:",
          options: ["run-time error", "syntax error", "logical error", "no error; prints 0"],
          answer: 0,
          explain: "The code compiles, but dividing an int by zero throws an ArithmeticException while running.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "A multi-line comment starts with ___ and ends with */.",
          answer: ["/*"],
          explain: "/* ... */ can span many lines. /** ... */ is the documentation comment.",
        },
        {
          kind: "truefalse",
          q: "The compiler ignores comments.",
          answer: true,
          explain: "Comments are notes for humans only.",
        },
        {
          kind: "mcq",
          q: "A program to find simple interest uses `si = p * r * t / 10;`. It runs without any message. The error is:",
          options: ["logical", "syntax", "run-time", "none"],
          answer: 0,
          explain: "Simple interest is p × r × t / 100. The program runs but the formula is wrong: a logical error.",
        },
        {
          kind: "numeric",
          q: "In Average.java, if `c / 3` is changed to `c / 4`, what does the first line print? (Type the number.)",
          answer: 150,
          explain: "80 / 4 = 20; 60 + 70 + 20 = 150, printed as 150.0.",
          difficulty: 2,
          hint: "Only the last number is divided.",
        },
        {
          kind: "multi",
          q: "Which of these are syntax errors? (Choose all that apply)",
          options: ["`int 2x = 5;`", "`System.out.println(\"Hi\")` with no semicolon", "`String s = \"abc\"; int n = 10 / 0;`", "`double d = 3.5`  with no semicolon"],
          answers: [0, 1, 3],
          explain: "An identifier cannot start with a digit, and missing semicolons are syntax errors. 10 / 0 compiles but fails while running.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 6. Mathematical Library Methods                                      */
/* ------------------------------------------------------------------ */
const mathLibrary: Topic = {
  slug: "java9-math-library-methods",
  title: "Mathematical Library Methods",
  icon: "📐",
  description: "The Math class: sqrt, cbrt, pow, abs, max, min, ceil, floor, round and random, their return types and using them in programs.",
  lessons: [
    {
      slug: "java9-math-power-root-abs",
      title: "Math.sqrt, cbrt, pow, abs, max and min",
      summary: "Use the ready-made methods of the Math class for roots, powers, absolute values and the larger or smaller of two numbers, and know what type each returns.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "You could write your own code to find a square root, but Java already has it. A **library method** is a ready-made method that comes with Java. The mathematical ones are in the class **Math**, which is in the package **java.lang**. java.lang is imported automatically, so you do not need an import line.\n\nYou call a Math method with the class name and the dot operator: `Math.sqrt(49)`. The value inside the brackets is the **argument**; the answer the method gives back is its **return value**.",
        },
        {
          type: "table",
          headers: ["Method", "Returns", "Return type", "Example → result"],
          rows: [
            ["`Math.sqrt(x)`", "square root of x", "double", "`Math.sqrt(49)` → 7.0"],
            ["`Math.cbrt(x)`", "cube root of x", "double", "`Math.cbrt(64)` → 4.0"],
            ["`Math.pow(x, y)`", "x raised to the power y", "double", "`Math.pow(2, 5)` → 32.0"],
            ["`Math.abs(x)`", "absolute value (drops the minus sign)", "same as argument", "`Math.abs(-7)` → 7; `Math.abs(-2.5)` → 2.5"],
            ["`Math.max(a, b)`", "the larger of a and b", "same as arguments (wider type if mixed)", "`Math.max(-4, -9)` → -4"],
            ["`Math.min(a, b)`", "the smaller of a and b", "same as arguments (wider type if mixed)", "`Math.min(2.5, 3)` → 2.5"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "MathDemo.java",
          code: `public class MathDemo
{
    public static void main(String[] args)
    {
        System.out.println(Math.sqrt(49));
        System.out.println(Math.cbrt(64));
        System.out.println(Math.pow(2, 5));
        System.out.println(Math.abs(-7));
        System.out.println(Math.abs(-2.5));
        System.out.println(Math.max(-4, -9));
        System.out.println(Math.min(2.5, 3));
        System.out.println(Math.sqrt(-4));
        double h = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
        System.out.println(h);
        System.out.println(Math.pow(16, 0.5));
        System.out.println(Math.max(Math.min(15, 8), 10));
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: return types matter",
          problem: "Give the exact output of MathDemo.java.",
          steps: [
            "sqrt, cbrt and pow always return a double, so they print with .0: 7.0, 4.0, 32.0.",
            "abs keeps the type: `abs(-7)` is an int → 7; `abs(-2.5)` → 2.5. `max(-4, -9)` → −4, because −4 is greater than −9. `min(2.5, 3)` → 2.5.",
            "`Math.sqrt(-4)` has no real answer, so Java returns **NaN** (Not a Number).",
            "h = sqrt(9.0 + 16.0) = sqrt(25.0) = 5.0. `pow(16, 0.5)` is a square root too: 4.0.",
            "Nested call, inside first: `min(15, 8)` = 8, then `max(8, 10)` = 10 (ints, so no .0).",
          ],
          answer: "7.0\n4.0\n32.0\n7\n2.5\n-4\n2.5\nNaN\n5.0\n4.0\n10",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed by `System.out.println(Math.pow(3, 2));`?",
              options: ["9.0", "9", "6.0", "8.0"],
              answer: 0,
              explain: "pow returns a double, so 9 is printed as 9.0.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "`int sq = Math.sqrt(36);` stores 6.",
          right: "It does not compile: `Math.sqrt` returns a **double** (6.0), and a double cannot be stored in an int without a cast. Write `double sq = Math.sqrt(36);` or `int sq = (int) Math.sqrt(36);`.",
          why: "The answer 6 is a whole number, so int seems fine. But Java looks at the declared return type of the method, not at the value, and double → int is a narrowing conversion that needs a cast.",
        },
        {
          type: "heading",
          text: "Maths formulas in Java",
        },
        {
          type: "table",
          headers: ["Maths", "Java"],
          rows: [
            ["$\\sqrt{a^2 + b^2}$", "`Math.sqrt(a * a + b * b)` or `Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))`"],
            ["$\\pi r^2$", "`3.14 * Math.pow(r, 2)` or `Math.PI * r * r`"],
            ["$\\sqrt[3]{x} + |y|$", "`Math.cbrt(x) + Math.abs(y)`"],
            ["$P\\left(1 + \\dfrac{R}{100}\\right)^T$", "`P * Math.pow(1 + R / 100.0, T)`"],
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each call to its exact output.",
            pairs: [
              ["Math.sqrt(81)", "9.0"],
              ["Math.abs(-9)", "9"],
              ["Math.cbrt(27)", "3.0"],
              ["Math.min(-3, 2)", "-3"],
              ["Math.pow(10, 2)", "100.0"],
            ],
            explain: "sqrt, cbrt and pow always give a double (with .0). abs, max and min give back the same type as their arguments.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "When asked for the output of a Math method, the **.0 counts**: `Math.sqrt(25)` is 5.0, not 5. When asked for the **return type**, answer double for sqrt, cbrt, pow, ceil and floor. `Math.PI` is a constant (3.141592653589793), not a method, so it has no brackets.",
        },
        {
          type: "keypoints",
          items: [
            "Math is in java.lang, which is imported automatically.",
            "sqrt, cbrt and pow return double.",
            "abs, max and min return the type of their arguments.",
            "Math.sqrt of a negative number gives NaN.",
            "Work nested calls from the inside out.",
          ],
        },
      ],
      flashcards: [
        { front: "Package of the Math class", back: "java.lang (imported automatically)." },
        { front: "Math.pow(x, y)", back: "Returns x raised to the power y as a double, e.g. Math.pow(2, 3) = 8.0." },
        { front: "Math.cbrt(x)", back: "Returns the cube root of x as a double, e.g. Math.cbrt(125) = 5.0." },
        { front: "Math.abs(x)", back: "Returns the absolute (positive) value of x in the same type, e.g. Math.abs(-12) = 12." },
        { front: "Math.sqrt(-9)", back: "NaN (Not a Number)." },
        { front: "Math.max(-5, -2)", back: "-2 (the larger value)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the return type of `Math.cbrt(27)`?",
          options: ["double", "int", "float", "long"],
          answer: 0,
          explain: "cbrt always returns a double: 3.0.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(Math.abs(-15) + Math.max(4, 9));`?",
          options: ["24", "24.0", "-6", "19"],
          answer: 0,
          explain: "abs(-15) = 15 and max(4, 9) = 9, both int: 15 + 9 = 24.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "To use the Math class you must write `import java.lang.Math;`.",
          answer: false,
          explain: "java.lang is imported automatically, so no import is needed (writing it is allowed but not required).",
        },
        {
          kind: "fill",
          q: "`Math.sqrt(-16)` returns ___.",
          answer: ["NaN"],
          explain: "The square root of a negative number is not a real number, so Java gives NaN.",
        },
        {
          kind: "mcq",
          q: "Which Java expression gives $\\sqrt{b^2 - 4ac}$?",
          options: ["`Math.sqrt(b * b - 4 * a * c)`", "`Math.sqrt(b * b) - 4 * a * c`", "`Math.sqrt(b ^ 2 - 4ac)`", "`sqrt(b * b - 4 * a * c)`"],
          answer: 0,
          explain: "The whole expression must be inside sqrt's brackets; ^ is not a power operator, 4ac needs * signs, and sqrt needs Math. before it.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What is the value of `Math.pow(2, 3) + Math.sqrt(16)`? (Type the number.)",
          answer: 12,
          explain: "8.0 + 4.0 = 12.0.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(Math.min(Math.max(3, 7), 5));`?",
          options: ["5", "7", "3", "5.0"],
          answer: 0,
          explain: "Inside first: max(3, 7) = 7. Then min(7, 5) = 5. The arguments are ints, so the result is the int 5.",
          difficulty: 3,
          hint: "Work from the innermost call outward.",
        },
        {
          kind: "multi",
          q: "Which of these always return a double? (Choose all that apply)",
          options: ["`Math.sqrt()`", "`Math.pow()`", "`Math.abs()`", "`Math.cbrt()`", "`Math.max()`"],
          answers: [0, 1, 3],
          explain: "abs and max return the type of their arguments, so `Math.abs(-3)` is the int 3.",
        },
      ],
    },
    {
      slug: "java9-math-rounding-random",
      title: "Math.ceil, floor, round and random",
      summary: "Round up, round down and round to the nearest with ceil, floor and round (including negative numbers), and make random numbers in a range with Math.random().",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "A shop bill of ₹249.60 may be rounded to ₹250. A lift that holds 8 people needs 4 trips for 25 people, not 3.125 trips. These are jobs for Java's rounding methods.",
        },
        {
          type: "table",
          headers: ["Method", "Does what", "Return type", "Examples"],
          rows: [
            ["`Math.ceil(x)`", "smallest whole number **≥ x** (rounds up, towards +∞)", "double", "`ceil(4.2)` → 5.0, `ceil(-4.2)` → -4.0"],
            ["`Math.floor(x)`", "largest whole number **≤ x** (rounds down, towards −∞)", "double", "`floor(4.8)` → 4.0, `floor(-4.2)` → -5.0"],
            ["`Math.round(x)`", "nearest whole number; a .5 goes **up** (towards +∞)", "long for a double argument (int for a float)", "`round(4.5)` → 5, `round(-4.5)` → -4"],
            ["`Math.random()`", "a random decimal from 0.0 up to (not including) 1.0", "double", "e.g. 0.7316..."],
          ],
        },
        {
          type: "text",
          md: "`Math.round(x)` works like `Math.floor(x + 0.5)`. That is why `round(-4.5)` is `floor(-4.0)` = −4, while `round(-4.6)` is `floor(-4.1)` = −5.",
        },
        {
          type: "code",
          lang: "java",
          caption: "RoundDemo.java",
          code: `public class RoundDemo
{
    public static void main(String[] args)
    {
        System.out.println(Math.ceil(4.2));
        System.out.println(Math.floor(4.8));
        System.out.println(Math.ceil(-4.2));
        System.out.println(Math.floor(-4.2));
        System.out.println(Math.round(4.5));
        System.out.println(Math.round(-4.5));
        System.out.println(Math.round(-4.6));
        System.out.println(Math.round(7.49));
        System.out.println(Math.ceil(6.0));
        System.out.println(Math.round(2.5f));
        int dice = (int) (Math.random() * 6) + 1;
        System.out.println(dice >= 1 && dice <= 6);
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: rounding negatives",
          problem: "Give the exact output of RoundDemo.java.",
          steps: [
            "`ceil(4.2)` goes up to 5.0; `floor(4.8)` goes down to 4.0.",
            "On the number line, \"up\" from −4.2 is −4, so `ceil(-4.2)` = -4.0; \"down\" is −5, so `floor(-4.2)` = -5.0.",
            "`round(4.5)` = floor(5.0) = 5. `round(-4.5)` = floor(-4.0) = -4. `round(-4.6)` = floor(-4.1) = -5. `round(7.49)` = floor(7.99) = 7. round returns a whole-number type, so there is no .0.",
            "`ceil(6.0)` is already whole: 6.0. `round(2.5f)` = 3 (an int, since the argument is a float).",
            "`Math.random() * 6` is from 0.0 to below 6.0; cast to int gives 0 to 5; adding 1 gives 1 to 6. So the test always prints true.",
          ],
          answer: "5.0\n4.0\n-4.0\n-5.0\n5\n-4\n-5\n7\n6.0\n3\ntrue",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is printed by `System.out.println(Math.floor(-2.1));`?",
              options: ["-3.0", "-2.0", "-2", "-3"],
              answer: 0,
              explain: "floor goes down towards −∞: below −2.1 the next whole number is −3, and floor returns a double.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "`Math.ceil(-4.2)` is −5.0, because ceil makes the number bigger and 5 is bigger than 4.",
          right: "`Math.ceil(-4.2)` is **−4.0**. Ceil moves **up the number line** (towards +∞), and −4 is greater than −4.2.",
          why: "With positive numbers, \"up\" also means \"bigger digits\", so students think only of the digits. For negatives, the number with the bigger digit is actually smaller: −5 < −4.2 < −4.",
        },
        {
          type: "heading",
          text: "Random numbers in a range",
        },
        {
          type: "formula",
          tex: "\\text{int } n = (\\text{int})(\\text{Math.random()} \\times (\\text{max} - \\text{min} + 1)) + \\text{min}",
          caption: "Gives a random whole number from min to max, both included. For a dice: (int)(Math.random() * 6) + 1.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the call give a double or a whole-number type?",
            groups: ["double (prints with .0)", "whole-number type (no .0)"],
            items: [
              { text: "Math.ceil(3.1)", group: 0, hint: "ceil returns double: 4.0." },
              { text: "Math.round(3.1)", group: 1, hint: "round(double) returns long: 3." },
              { text: "Math.floor(9.9)", group: 0, hint: "floor returns double: 9.0." },
              { text: "Math.abs(-8)", group: 1, hint: "abs keeps the int type: 8." },
              { text: "Math.random()", group: 0, hint: "A decimal from 0.0 to below 1.0." },
              { text: "Math.max(2, 6)", group: 1, hint: "Two ints give an int: 6." },
            ],
            explain: "ceil, floor and random always return double. round returns long (or int for a float argument); abs, max and min keep their argument's type.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "ceil/floor/round with **negative** numbers appear in almost every paper. Draw a quick number line in the margin. Also remember `Math.round()` returns a long for a double argument, so `int r = Math.round(4.7);` does not compile; write `long r = Math.round(4.7);` or cast with `(int)`.",
        },
        {
          type: "keypoints",
          items: [
            "ceil rounds up (towards +∞); floor rounds down (towards −∞); both return double.",
            "round gives the nearest whole number, .5 going up; it returns long for a double argument.",
            "round(x) works like floor(x + 0.5): round(-4.5) = -4.",
            "Math.random() gives 0.0 ≤ value < 1.0; use (int)(Math.random() * (max − min + 1)) + min for a range.",
          ],
        },
      ],
      flashcards: [
        { front: "Math.ceil(x)", back: "The smallest whole number greater than or equal to x, as a double, e.g. ceil(7.1) = 8.0." },
        { front: "Math.floor(x)", back: "The largest whole number less than or equal to x, as a double, e.g. floor(7.9) = 7.0." },
        { front: "Math.round(x)", back: "The nearest whole number (.5 goes up); returns long for a double argument, e.g. round(7.5) = 8." },
        { front: "Math.round(-6.5)", back: "-6 (works like floor(-6.5 + 0.5) = floor(-6.0))." },
        { front: "Range of Math.random()", back: "0.0 or more, but less than 1.0." },
        { front: "Random number from 1 to 10", back: "(int)(Math.random() * 10) + 1" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(Math.ceil(7.01));`?",
          options: ["8.0", "7.0", "8", "7"],
          answer: 0,
          explain: "ceil rounds up to 8 and returns a double.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(Math.round(-3.5));`?",
          options: ["-3", "-4", "-3.0", "-4.0"],
          answer: 0,
          explain: "round(-3.5) = floor(-3.5 + 0.5) = floor(-3.0) = -3, and round returns a whole-number type.",
          difficulty: 3,
          hint: "Add 0.5, then take the floor.",
        },
        {
          kind: "truefalse",
          q: "`Math.random()` can return the value 1.0.",
          answer: false,
          explain: "It returns values from 0.0 up to but not including 1.0.",
        },
        {
          kind: "fill",
          q: "The return type of `Math.round(5.6)` is ___.",
          answer: ["long"],
          explain: "With a double argument, Math.round returns a long. With a float argument it returns an int.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What is the value of `Math.floor(-6.3) + Math.ceil(-6.3)`? (Type the number.)",
          answer: -13,
          explain: "floor(-6.3) = -7.0 and ceil(-6.3) = -6.0; the sum is -13.0.",
          difficulty: 3,
          hint: "Draw −7, −6.3 and −6 on a number line.",
        },
        {
          kind: "mcq",
          q: "Which expression gives a random whole number from 10 to 20 (both included)?",
          options: ["`(int) (Math.random() * 11) + 10`", "`(int) (Math.random() * 10) + 10`", "`(int) Math.random() * 11 + 10`", "`(int) (Math.random() * 20) + 10`"],
          answer: 0,
          explain: "There are 20 − 10 + 1 = 11 values, so multiply by 11 and add 10. In the third option the cast applies to Math.random() alone, which is always 0.",
          difficulty: 3,
          hint: "Count how many numbers are in the range.",
        },
        {
          kind: "order",
          q: "Order these from smallest to largest value.",
          items: ["`Math.floor(-2.5)`", "`Math.ceil(-2.5)`", "`Math.round(2.5)`", "`Math.abs(-4.5)`"],
          explain: "floor(-2.5) = -3.0, ceil(-2.5) = -2.0, round(2.5) = 3 and abs(-4.5) = 4.5.",
          difficulty: 3,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 7. Conditional Constructs in Java                                    */
/* ------------------------------------------------------------------ */
const conditionals: Topic = {
  slug: "java9-conditional-constructs",
  title: "Conditional Constructs in Java",
  icon: "🔀",
  description: "if, if-else, if-else-if ladder, nested if, the switch statement with break, default and fall through, and menu-driven programs.",
  lessons: [
    {
      slug: "java9-if-else-forms",
      title: "if, if-else, the if-else-if Ladder and Nested if",
      summary: "Make a program choose between actions with if and if-else, test many ranges with an if-else-if ladder, and put one if inside another.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Every morning you decide: *if it is raining, take an umbrella, else wear a cap.* Programs decide in the same way. Normally Java runs statements one after another, which is called **sequential flow**. A **conditional construct** (also called a **selection** or **decision-making** statement) lets the program choose which statements to run, depending on a **condition** that is true or false.",
        },
        {
          type: "table",
          headers: ["Form", "Syntax", "Use"],
          rows: [
            ["**if**", "`if (condition) statement;`", "do something only when the condition is true"],
            ["**if-else**", "`if (condition) A; else B;`", "choose between two actions"],
            ["**if-else-if ladder**", "`if (c1) A; else if (c2) B; ... else Z;`", "choose one of many actions; Java checks from the top and stops at the first true condition"],
            ["**nested if**", "an if (or if-else) inside another if", "test a second condition only after the first is true"],
          ],
        },
        {
          type: "text",
          md: "If more than one statement must run for a condition, put them in a **block** with curly brackets `{ }`. Without brackets, only the **first** statement after `if` belongs to it.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Grade.java",
          code: `import java.util.Scanner;

public class Grade
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter percentage: ");
        double p = sc.nextDouble();
        if (p >= 90)
            System.out.println("Grade A");
        else if (p >= 75)
            System.out.println("Grade B");
        else if (p >= 60)
            System.out.println("Grade C");
        else if (p >= 40)
            System.out.println("Grade D");
        else
            System.out.println("Needs improvement");
    }
}`,
        },
        {
          type: "example",
          title: "Dry run of the ladder",
          problem: "What does Grade.java print for the inputs 92, 75 and 59.5?",
          steps: [
            "92: `92 >= 90` is true at the first test, so it prints Grade A and skips the rest of the ladder.",
            "75: `75 >= 90` is false; `75 >= 75` is true, so it prints Grade B. The boundary value 75 is included because of `>=`.",
            "59.5: false for 90, 75 and 60 (59.5 is less than 60); `59.5 >= 40` is true, so it prints Grade D.",
          ],
          answer: "92 → Grade A\n75 → Grade B\n59.5 → Grade D",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In Grade.java, what is printed for the input 40?",
              options: ["Grade D", "Needs improvement", "Grade C", "Nothing"],
              answer: 0,
              explain: "`40 >= 40` is true, so Grade D. Boundary values need careful checking of > and >=.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Largest.java: nested if",
          code: `public class Largest
{
    public static void main(String[] args)
    {
        int a = 14, b = 29, c = 21;
        if (a > b)
        {
            if (a > c)
                System.out.println("Largest = " + a);
            else
                System.out.println("Largest = " + c);
        }
        else
        {
            if (b > c)
                System.out.println("Largest = " + b);
            else
                System.out.println("Largest = " + c);
        }
    }
}`,
        },
        {
          type: "text",
          md: "Trace: `14 > 29` is false, so Java goes to the outer `else`. There `29 > 21` is true, so it prints `Largest = 29`. The inner if is checked only after the outer test decides which side to go.\n\nThe same idea can be written with logical operators: `if (a > b && a > c)`. Simple two-way choices can also use the **ternary operator**: `int max = (a > b) ? a : b;`",
        },
        {
          type: "mistake",
          wrong: "Putting a semicolon after the condition is harmless: `if (marks >= 40); System.out.println(\"Pass\");`",
          right: "The `;` right after `if (...)` is an **empty statement** that becomes the body of the if. \"Pass\" is then printed **every time**, even for 12 marks. Remove that semicolon.",
          why: "Students are used to ending lines with `;`. But the if controls only the one statement that follows it, and here that statement is the empty `;`, so the println runs on its own.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the ladder so every age gets the right ticket.",
            items: [
              "if (age < 5) price = 0;",
              "else if (age < 12) price = 50;",
              "else if (age < 60) price = 100;",
              "else price = 70;",
            ],
            explain: "With `<` tests, check the smallest limit first. If `age < 60` came first, a 3-year-old would also match it and pay 100.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Programs on electricity bills, discounts or tax slabs use an if-else-if ladder. Read the slab table carefully: \"up to 100 units\" means `<= 100`, \"above 100\" means `> 100`. Check one value **on** each boundary in your dry run; boundary slips are the most common reason for lost marks.",
        },
        {
          type: "keypoints",
          items: [
            "Conditional constructs choose what to run based on a true/false condition.",
            "Forms: if, if-else, if-else-if ladder, nested if.",
            "In a ladder only the first true branch runs; the final else catches everything else.",
            "Use { } when a branch has more than one statement; never put `;` straight after `if (...)`.",
          ],
        },
      ],
      flashcards: [
        { front: "Conditional construct", back: "A statement that runs different code depending on whether a condition is true or false (if, if-else, switch)." },
        { front: "Sequential flow", back: "Statements running one after another in the order written." },
        { front: "if-else-if ladder", back: "A chain of conditions checked from the top; only the first true branch runs." },
        { front: "Nested if", back: "An if or if-else statement placed inside another if or else." },
        { front: "Effect of if (x > 0); with a semicolon", back: "The semicolon becomes the empty body, so the next statement runs every time." },
        { front: "Dangling else rule", back: "An else pairs with the nearest unmatched if before it; use { } to show which if you mean." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`int n = 0; if (n > 0) System.out.println(\"Positive\"); else if (n < 0) System.out.println(\"Negative\"); else System.out.println(\"Zero\");` prints:",
          options: ["Zero", "Positive", "Negative", "Nothing"],
          answer: 0,
          explain: "0 is neither > 0 nor < 0, so the final else runs.",
        },
        {
          kind: "mcq",
          q: "`int x = 5; if (x > 2) System.out.print(\"A\"); System.out.print(\"B\");` prints:",
          options: ["AB", "A", "B", "Nothing"],
          answer: 0,
          explain: "x > 2 is true, so A is printed. The second print is not part of the if (no brackets), so B is printed anyway.",
          difficulty: 2,
          hint: "How many statements belong to an if without { }?",
        },
        {
          kind: "mcq",
          q: "`int x = 1; if (x > 2) System.out.print(\"A\"); System.out.print(\"B\");` prints:",
          options: ["B", "AB", "A", "Nothing"],
          answer: 0,
          explain: "The condition is false, so A is skipped. B is outside the if, so it always prints.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In an if-else-if ladder, more than one branch can run for the same input.",
          answer: false,
          explain: "Java stops at the first true condition and skips the rest.",
        },
        {
          kind: "fill",
          q: "An if statement placed inside another if statement is called a ___ if.",
          answer: ["nested"],
          explain: "Nested if checks a second condition only after the outer one is decided.",
        },
        {
          kind: "mcq",
          q: "In Largest.java, if the values are changed to a = 30, b = 12, c = 30, what is printed?",
          options: ["Largest = 30", "Largest = 12", "Nothing", "Largest = 60"],
          answer: 0,
          explain: "30 > 12 is true; then 30 > 30 is false, so the inner else prints c, which is also 30.",
          difficulty: 3,
          hint: "Follow the outer test, then the inner one.",
        },
        {
          kind: "order",
          q: "Order the tests for a ladder that gives: above 1000 → 20% off, above 500 → 10% off, otherwise no discount.",
          items: ["if (bill > 1000)", "else if (bill > 500)", "else"],
          explain: "With `>` tests, check the biggest limit first; otherwise a bill of 2000 would match `> 500` and get only 10%.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "java9-switch-menu",
      title: "The switch Statement and Menu-driven Programs",
      summary: "Choose among fixed values with switch, case, break and default; understand fall through; and write menu-driven programs.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "A canteen menu says: press 1 for idli, 2 for dosa, 3 for vada. When a choice must match one of several **fixed values**, the **switch** statement is neater than a long ladder.\n\n`switch` evaluates an expression once, then jumps to the **case** label with the matching value. **break** ends the switch. **default** runs when no case matches; it is optional.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Menu.java",
          code: `import java.util.Scanner;

public class Menu
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Area of square");
        System.out.println("2. Area of circle");
        System.out.print("Enter choice: ");
        int ch = sc.nextInt();
        switch (ch)
        {
            case 1:
                System.out.print("Enter side: ");
                int s = sc.nextInt();
                System.out.println("Area = " + (s * s));
                break;
            case 2:
                System.out.print("Enter radius: ");
                double r = sc.nextDouble();
                System.out.println("Area = " + (3.14 * r * r));
                break;
            default:
                System.out.println("Wrong choice");
        }
    }
}`,
        },
        {
          type: "example",
          title: "Dry run of a menu",
          problem: "Give the output of Menu.java when the user enters (a) 1 and then 7, (b) 2 and then 10, (c) 5.",
          steps: [
            "The two menu lines always print first. The prompt uses print, so the typed choice appears beside it.",
            "(a) ch = 1 matches `case 1`. Side 7 gives 7 × 7 = 49. `break` leaves the switch.",
            "(b) ch = 2 matches `case 2`. Area = 3.14 × 10 × 10 = 314.0 (a double).",
            "(c) ch = 5 matches no case, so `default` prints Wrong choice.",
          ],
          answer: "(a) 1. Area of square\n2. Area of circle\nEnter choice: 1\nEnter side: 7\nArea = 49\n\n(b) ... Enter choice: 2\nEnter radius: 10\nArea = 314.0\n\n(c) ... Enter choice: 5\nWrong choice",
        },
        {
          type: "list",
          items: [
            "The switch expression can be `int`, `char`, `byte`, `short` or `String`. It **cannot** be `double`, `float`, `long` or `boolean`.",
            "Each case value must be a **constant** (like `1` or `'A'`), and no two cases can have the same value.",
            "A program that shows a list of choices and acts on the one the user picks is a **menu-driven program**.",
            "`System.exit(0);` ends the whole program at once, e.g. for an \"Exit\" option in a menu.",
          ],
        },
        {
          type: "heading",
          text: "Fall through",
        },
        {
          type: "code",
          lang: "java",
          caption: "Fall.java",
          code: `public class Fall
{
    public static void main(String[] args)
    {
        char grade = 'B';
        switch (grade)
        {
            case 'A':
                System.out.println("Excellent");
            case 'B':
                System.out.println("Good");
            case 'C':
                System.out.println("Fair");
                break;
            default:
                System.out.println("Invalid");
        }
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Good`\n`Fair`\n\nJava enters at `case 'B'` and prints Good. There is no break, so it **falls through** into `case 'C'` and prints Fair. Then it meets `break` and leaves. Excellent is not printed, because Java never enters at case 'A'. Running into the next case when `break` is missing is called **fall through**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In Fall.java, what is printed if grade is 'A'?",
              options: ["Excellent, Good, Fair (one per line)", "Excellent", "Excellent, Good", "Excellent, Good, Fair, Invalid"],
              answer: 0,
              explain: "It enters at 'A' and falls through 'B' and 'C' until the break after Fair. default is never reached.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "table",
          headers: ["Point", "if-else-if", "switch"],
          rows: [
            ["Tests", "any condition, including ranges (`marks >= 75`) and `&&`, `||`", "only equality with fixed constant values"],
            ["Data types", "any type, including double and boolean", "int, char, byte, short, String"],
            ["Many choices", "can get long and harder to read", "neat for menus"],
          ],
        },
        {
          type: "mistake",
          wrong: "`switch (marks) { case marks >= 90: ... }` lets switch check a range.",
          right: "A case label must be a **constant value**, not a condition. For ranges like marks ≥ 90, use an **if-else-if ladder**.",
          why: "switch looks like a shorter if, so students try to write conditions in it. switch only checks \"is the value equal to this constant?\", so a condition is a syntax error.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "`int d = 3;` Case 3 prints \"Wed\" with no break; case 4 prints \"Thu\" then breaks. Output?",
            emoji: "📅",
            options: ["Wed", "Wed then Thu", "Thu"],
            answer: 1,
            trap: 0,
            explain: "With no break after case 3, Java falls through and also runs case 4, printing Thu, before the break stops it.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Menu-driven programs with switch are a favourite in Section B. Write a `break` at the end of every case, add a `default` for a wrong choice, and print the menu before reading the choice. In output questions, always check for a missing break: that is where the trick is.",
        },
        {
          type: "keypoints",
          items: [
            "switch matches one expression against constant case values.",
            "break ends the switch; without it, execution falls through into the next case.",
            "default runs when no case matches; it is optional.",
            "switch works with int, char, byte, short and String, not with double, float, long or boolean.",
            "Use switch for menus and fixed choices; use if-else-if for ranges and complex conditions.",
          ],
        },
      ],
      flashcards: [
        { front: "switch statement", back: "A multiple-branch statement that compares one expression with constant case values." },
        { front: "Fall through", back: "When a case has no break, execution continues into the following case(s)." },
        { front: "default in switch", back: "The block that runs when no case value matches; it is optional." },
        { front: "Types allowed in switch", back: "int, char, byte, short and String (not double, float, long or boolean)." },
        { front: "Menu-driven program", back: "A program that displays choices and does the task the user selects, usually using switch." },
        { front: "System.exit(0)", back: "Ends the program immediately, e.g. for an Exit option in a menu." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which keyword stops execution from falling into the next case?",
          options: ["break", "default", "continue", "exit"],
          answer: 0,
          explain: "break ends the switch. default is the no-match case; continue is used in loops.",
        },
        {
          kind: "truefalse",
          q: "A switch statement can use a double variable as its expression.",
          answer: false,
          explain: "switch does not work with double, float, long or boolean.",
        },
        {
          kind: "mcq",
          q: "`int n = 2; switch (n) { case 1: System.out.print(\"X\"); case 2: System.out.print(\"Y\"); case 3: System.out.print(\"Z\"); }` prints:",
          options: ["YZ", "Y", "XYZ", "Z"],
          answer: 0,
          explain: "It enters at case 2, prints Y, and with no break falls through to case 3 and prints Z.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`int n = 7; switch (n) { case 1: System.out.print(\"one\"); break; default: System.out.print(\"other\"); }` prints:",
          options: ["other", "one", "oneother", "Nothing"],
          answer: 0,
          explain: "No case matches 7, so default runs.",
        },
        {
          kind: "fill",
          q: "The statement ___(0); ends a Java program immediately.",
          answer: ["System.exit"],
          explain: "System.exit(0) terminates the program; it is used for an Exit option in menus.",
        },
        {
          kind: "multi",
          q: "Which of these are correct about switch? (Choose all that apply)",
          options: ["Case values must be constants", "Two cases can have the same value", "default is optional", "It can test ranges like marks >= 90"],
          answers: [0, 2],
          explain: "Case values must be unique constants; switch only tests equality, so ranges need if-else-if.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "`char c = 'b'; switch (c) { case 'a': case 'e': System.out.print(\"Vowel\"); break; default: System.out.print(\"Consonant\"); }` prints:",
          options: ["Consonant", "Vowel", "VowelConsonant", "Error"],
          answer: 0,
          explain: "'b' matches neither 'a' nor 'e', so default prints Consonant. Grouping cases like 'a' and 'e' together is a handy use of fall through.",
          difficulty: 3,
          hint: "Does 'b' match any case label?",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 8. Iterative Constructs in Java                                      */
/* ------------------------------------------------------------------ */
const iteration: Topic = {
  slug: "java9-iterative-constructs",
  title: "Iterative Constructs in Java",
  icon: "🔁",
  description: "for, while and do-while loops, entry- and exit-controlled loops, variations of loops, break and continue, and digit-based programs.",
  lessons: [
    {
      slug: "java9-for-while-do-while",
      title: "for, while and do-while Loops",
      summary: "The parts of a loop, the for, while and do-while statements, entry-controlled and exit-controlled loops, and tracing loops with a table.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Writing `System.out.println` 100 times to print 1 to 100 would be silly. An **iterative construct**, or **loop**, repeats a set of statements while a condition stays true. Each repetition is called an **iteration**.\n\nEvery loop has four parts:\n\n1. **Initialisation**: give the **loop variable** (counter) its starting value, e.g. `i = 1`.\n2. **Test condition**: checked to decide whether to repeat, e.g. `i <= 5`.\n3. **Body**: the statements that repeat.\n4. **Update**: change the loop variable, e.g. `i++`, so that the loop can end.",
        },
        {
          type: "table",
          headers: ["Loop", "Syntax", "Type"],
          rows: [
            ["**for**", "`for (init; condition; update) { body }`", "entry-controlled; best when the number of iterations is known"],
            ["**while**", "`init; while (condition) { body; update; }`", "entry-controlled; best when the number of iterations is not known in advance"],
            ["**do-while**", "`init; do { body; update; } while (condition);`", "**exit-controlled**; the body runs at least once"],
          ],
        },
        {
          type: "text",
          md: "In an **entry-controlled** loop the condition is tested **before** the body, so if it is false at the start the body runs **zero** times. In an **exit-controlled** loop (do-while) the condition is tested **after** the body, so the body always runs **at least once**. Note the semicolon after `while (condition);` in a do-while.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Loops.java",
          code: `public class Loops
{
    public static void main(String[] args)
    {
        for (int i = 1; i <= 5; i++)
            System.out.print(i * i + " ");
        System.out.println();

        int n = 20;
        while (n > 1)
        {
            System.out.print(n + " ");
            n = n / 2;
        }
        System.out.println();

        int k = 10;
        do
        {
            System.out.print(k + " ");
            k++;
        } while (k < 5);
        System.out.println();
    }
}`,
        },
        {
          type: "example",
          title: "Dry run of three loops",
          problem: "Give the exact output of Loops.java.",
          steps: [
            "for: i = 1, 2, 3, 4, 5 prints the squares 1 4 9 16 25. When i becomes 6, `6 <= 5` is false and the loop stops.",
            "while: n = 20 (print, n = 10), 10 (print, n = 5), 5 (print, n = 2), 2 (print, n = 1). Now `1 > 1` is false: stop. Printed: 20 10 5 2.",
            "do-while: the body runs first and prints 10, then k = 11. `11 < 5` is false, so it stops after one round.",
            "Each `println()` with nothing inside just moves to a new line.",
          ],
          answer: "1 4 9 16 25\n20 10 5 2\n10",
        },
        {
          type: "table",
          headers: ["Round", "n at start", "n > 1 ?", "Printed", "n = n / 2"],
          rows: [
            ["1", "20", "true", "20", "10"],
            ["2", "10", "true", "10", "5"],
            ["3", "5", "true", "5", "2"],
            ["4", "2", "true", "2", "1"],
            ["-", "1", "false: stop", "-", "-"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many times does the body of `for (int i = 3; i <= 15; i += 4)` run?",
              answer: 4,
              explain: "i takes the values 3, 7, 11, 15. Next it would be 19, which fails the test.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "A do-while loop whose condition is false at the start does not run at all, just like while.",
          right: "A do-while runs its body **once** before checking. In Loops.java, `k < 5` is false from the start, yet 10 is printed once.",
          why: "Both loops use the word while, so they seem the same. The difference is where the test sits: at the top (while, entry-controlled) or at the bottom (do-while, exit-controlled).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Entry-controlled or exit-controlled?",
            groups: ["Entry-controlled", "Exit-controlled"],
            items: [
              { text: "for loop", group: 0, hint: "The condition is in the heading, checked first." },
              { text: "while loop", group: 0, hint: "while tests before the body." },
              { text: "do-while loop", group: 1, hint: "The test comes after the body." },
              { text: "May run zero times", group: 0, hint: "Only a test-first loop can skip the body completely." },
              { text: "Always runs at least once", group: 1, hint: "The body runs before the first test." },
              { text: "Ends with a semicolon after the condition", group: 1, hint: "do { } while (condition);" },
            ],
            explain: "for and while test first (entry-controlled). do-while tests last (exit-controlled), so its body always runs once.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "\"How many times will the loop execute?\" and \"Give the output\" are standard questions. Make a small table of the loop variable as above, and count only the rounds where the condition was true. Questions that ask you to convert a for loop into a while loop (or the reverse) are also common: keep the same initialisation, condition and update.",
        },
        {
          type: "keypoints",
          items: [
            "Loop parts: initialisation, test condition, body, update.",
            "for and while are entry-controlled; do-while is exit-controlled and runs at least once.",
            "Use for when the number of rounds is known; while when it depends on a condition.",
            "Trace loops with a table of the loop variable.",
          ],
        },
      ],
      flashcards: [
        { front: "Iteration", back: "One repetition of the body of a loop." },
        { front: "Four parts of a loop", back: "Initialisation, test condition, body, update (increment/decrement)." },
        { front: "Entry-controlled loop", back: "Tests the condition before the body (for, while); may run zero times." },
        { front: "Exit-controlled loop", back: "Tests the condition after the body (do-while); runs at least once." },
        { front: "Syntax of do-while", back: "do { statements; } while (condition);  (note the semicolon)" },
        { front: "for to while conversion", back: "for (i = 1; i <= n; i++) S;  becomes  i = 1; while (i <= n) { S; i++; }" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which loop is exit-controlled?",
          options: ["do-while", "for", "while", "None"],
          answer: 0,
          explain: "do-while checks its condition after the body.",
        },
        {
          kind: "numeric",
          q: "How many times does `int i = 10; while (i > 0) { i = i - 3; }` run its body?",
          answer: 4,
          explain: "i goes 10 → 7 → 4 → 1 → −2. The body ran 4 times; then −2 > 0 is false.",
          difficulty: 2,
          hint: "Track i after each round.",
        },
        {
          kind: "mcq",
          q: "`int s = 0; for (int t = 2; t <= 10; t += 2) s += t; System.out.println(s);` prints:",
          options: ["30", "20", "55", "28"],
          answer: 0,
          explain: "2 + 4 + 6 + 8 + 10 = 30.",
        },
        {
          kind: "truefalse",
          q: "The body of a for loop may not run at all.",
          answer: true,
          explain: "for is entry-controlled; if the condition is false at the start, the body is skipped, e.g. `for (int i = 5; i < 3; i++)`.",
        },
        {
          kind: "mcq",
          q: "`int m = 5; do { m -= 2; } while (m > 0); System.out.println(m);` prints:",
          options: ["-1", "1", "3", "0"],
          answer: 0,
          explain: "m goes 5 → 3 → 1 → −1. After −1, the test m > 0 fails.",
          difficulty: 3,
          hint: "The test is at the bottom; check it after each change.",
        },
        {
          kind: "fill",
          q: "In `for (int i = 1; i <= 10; i++)`, the part `i++` is the ___ expression.",
          answer: ["update", "increment", "updation", "step"],
          explain: "It updates the loop variable after each iteration.",
        },
        {
          kind: "order",
          q: "Order the steps of one run of a for loop.",
          items: ["Initialisation (done once)", "Test the condition", "Run the body", "Update the loop variable, then test again"],
          explain: "Initialisation happens once; then test → body → update repeats until the test fails.",
        },
      ],
    },
    {
      slug: "java9-jump-statements-digits",
      title: "break, continue, Loop Variations and Digit Programs",
      summary: "Leave or skip rounds with break and continue, recognise infinite and empty loops, and write programs that reverse a number, test palindromes and test primes.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Sometimes you want to stop a loop early, like stopping a search once you find your lost key. Java has two **jump statements** for loops:\n\n- **break** ends the loop at once; control goes to the statement after the loop.\n- **continue** skips the rest of the current round and goes to the next round (in a for loop, to the update part).",
        },
        {
          type: "code",
          lang: "java",
          caption: "Jump.java",
          code: `public class Jump
{
    public static void main(String[] args)
    {
        for (int i = 1; i <= 10; i++)
        {
            if (i % 3 == 0)
                continue;
            if (i == 8)
                break;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,
        },
        {
          type: "text",
          md: "Trace: 1 and 2 are printed. At 3, `continue` skips the print. 4 and 5 are printed; 6 is skipped; 7 is printed. At 8, `break` ends the loop, so 9 and 10 never run. Output: `1 2 4 5 7`",
        },
        {
          type: "table",
          headers: ["Variation", "Example", "What happens"],
          rows: [
            ["**Infinite loop**", "`for ( ; ; )` or `while (true)`, or a condition that never becomes false", "runs forever unless a break stops it"],
            ["**Empty (null) loop** / delay loop", "`for (i = 1; i <= 5; i++);`", "the `;` is the body; the loop only counts. Afterwards i is 6"],
            ["**Multiple variables**", "`for (int a = 1, b = 10; a < b; a++, b--)`", "commas separate several initialisations and updates; this runs 5 times"],
            ["**Parts left out**", "`for ( ; i <= 5; )`", "allowed, but the initialisation and update must then be done elsewhere"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "`int i; for (i = 1; i <= 5; i++); System.out.println(i);` prints:",
              options: ["6", "1 2 3 4 5", "5", "Nothing"],
              answer: 0,
              explain: "The `;` after the heading makes an empty loop. It counts i up to 6 (when the test fails), then println runs once.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "Two tricks unlock most digit programs: `n % 10` gives the **last digit** and `n / 10` **removes** it. To build a reversed number, use `rev = rev * 10 + digit`. A number that reads the same backwards (like 1221) is a **palindrome number**.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Reverse.java",
          code: `import java.util.Scanner;

public class Reverse
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int copy = num, rev = 0;
        while (num > 0)
        {
            int d = num % 10;
            rev = rev * 10 + d;
            num = num / 10;
        }
        System.out.println("Reverse = " + rev);
        if (rev == copy)
            System.out.println("Palindrome number");
        else
            System.out.println("Not a palindrome");
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: reversing 3470",
          problem: "The user enters 3470. Trace Reverse.java and give the output.",
          steps: [
            "Start: num = 3470, copy = 3470, rev = 0. The copy is kept because num becomes 0 by the end.",
            "Round 1: d = 0, rev = 0 × 10 + 0 = 0, num = 347. Round 2: d = 7, rev = 7, num = 34.",
            "Round 3: d = 4, rev = 74, num = 3. Round 4: d = 3, rev = 743, num = 0. The loop stops.",
            "743 is not equal to 3470, so it is not a palindrome. (The leading zero of 0743 disappears in an int.)",
          ],
          answer: "Enter a number: 3470\nReverse = 743\nNot a palindrome",
        },
        {
          type: "code",
          lang: "java",
          caption: "Prime.java: a prime has exactly 2 factors",
          code: `import java.util.Scanner;

public class Prime
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int count = 0;
        for (int i = 1; i <= n; i++)
        {
            if (n % i == 0)
                count++;
        }
        if (count == 2)
            System.out.println(n + " is prime");
        else
            System.out.println(n + " is not prime");
    }
}`,
        },
        {
          type: "text",
          md: "For 17, the only factors found are 1 and 17, so count = 2 and it prints `17 is prime`. For 21, the factors are 1, 3, 7 and 21 (count = 4): `21 is not prime`. For 1, count = 1, so 1 is correctly reported as not prime.",
        },
        {
          type: "mistake",
          wrong: "`continue` and `break` both stop the loop.",
          right: "`break` **ends** the whole loop. `continue` only **skips the rest of this round**; the loop carries on with the next value.",
          why: "Both jump out of the normal flow, so they feel alike. In Jump.java, continue at 3 and 6 skips only those numbers, but break at 8 ends everything, so 9 and 10 never appear.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the lines inside the reverse loop.",
            items: [
              "while (num > 0) {",
              "int d = num % 10;",
              "rev = rev * 10 + d;",
              "num = num / 10;",
              "}",
            ],
            explain: "Take the last digit first, add it to rev, and only then remove it from num. Removing it first would lose the digit.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "Digit programs (sum of digits, reverse, palindrome, Armstrong, count digits) are very common in Section B. Always store a **copy** of the original number before the loop, because the loop turns it into 0. Without the copy, the final comparison is wrong, which is a logical error.",
        },
        {
          type: "keypoints",
          items: [
            "break ends the loop; continue skips to the next round.",
            "for( ; ; ) and while(true) are infinite loops; a `;` after the heading makes an empty loop.",
            "`n % 10` gives the last digit; `n / 10` removes it; `rev = rev * 10 + d` builds the reverse.",
            "Keep a copy of the number before a digit loop.",
            "A prime number has exactly two factors: 1 and itself.",
          ],
        },
      ],
      flashcards: [
        { front: "break", back: "Ends the loop immediately; control passes to the statement after the loop." },
        { front: "continue", back: "Skips the rest of the current iteration and moves to the next one." },
        { front: "Infinite loop", back: "A loop whose condition never becomes false, e.g. for( ; ; ) or while(true)." },
        { front: "Empty (null) loop", back: "A loop with no body, e.g. for (i = 1; i <= 5; i++); often used as a delay loop." },
        { front: "Palindrome number", back: "A number equal to its reverse, e.g. 1221, 545." },
        { front: "Building the reverse of a number", back: "rev = rev * 10 + n % 10; then n = n / 10; repeat while n > 0." },
        { front: "Prime test by counting factors", back: "Count i from 1 to n where n % i == 0; the number is prime if the count is 2." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`for (int i = 1; i <= 6; i++) { if (i == 4) break; System.out.print(i); }` prints:",
          options: ["123", "1234", "12356", "123456"],
          answer: 0,
          explain: "At i = 4, break ends the loop before printing.",
        },
        {
          kind: "mcq",
          q: "`for (int i = 1; i <= 6; i++) { if (i == 4) continue; System.out.print(i); }` prints:",
          options: ["12356", "123", "1234", "123456"],
          answer: 0,
          explain: "continue skips only the print for 4; the loop goes on to 5 and 6.",
        },
        {
          kind: "numeric",
          q: "Using Reverse.java, what is printed as the reverse when the user enters 5120?",
          answer: 215,
          explain: "Digits from the end: 0, 2, 1, 5 → 0, 2, 21, 215. The leading zero is lost.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`while (true)` with no break inside makes an infinite loop.",
          answer: true,
          explain: "The condition is always true, so only a break (or System.exit) can stop it.",
        },
        {
          kind: "numeric",
          q: "How many times does `for (int a = 1, b = 10; a < b; a++, b--)` run its body?",
          answer: 5,
          explain: "(a, b) = (1,10), (2,9), (3,8), (4,7), (5,6). At (6,5), a < b fails.",
          difficulty: 3,
          hint: "List the pairs until a is no longer less than b.",
        },
        {
          kind: "mcq",
          q: "Why does Reverse.java keep `copy = num` before the loop?",
          options: ["The loop changes num to 0, so the original is needed for the palindrome check", "Java needs two variables to run a while loop", "To make the program faster", "copy stores the reverse"],
          answer: 0,
          explain: "By the end num is 0; comparing rev with num would be wrong.",
        },
        {
          kind: "fill",
          q: "To get the last digit of an int n, write n ___ 10.",
          answer: ["%"],
          explain: "% gives the remainder, which is the last digit.",
        },
        {
          kind: "multi",
          q: "Which of these are infinite loops? (Choose all that apply)",
          options: ["`for ( ; ; ) { }`", "`while (true) { }`", "`for (int i = 1; i != 10; i += 2) { }`", "`for (int i = 1; i <= 5; i++) { }`"],
          answers: [0, 1, 2],
          explain: "In the third loop i takes only odd values (1, 3, 5, ...), so it never equals 10 and `i != 10` stays true. The last loop ends after 5 rounds.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 9. Nested Loops                                                      */
/* ------------------------------------------------------------------ */
const nestedLoops: Topic = {
  slug: "java9-nested-loops",
  title: "Nested Loops",
  icon: "🔺",
  description: "A loop inside a loop: how the inner loop runs for every outer round, printing number and star patterns, and using break and continue in nested loops.",
  lessons: [
    {
      slug: "java9-nested-loop-patterns",
      title: "Nested for Loops and Patterns",
      summary: "How an inner loop runs completely for every round of the outer loop, counting total iterations, and printing triangle patterns of numbers and stars.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🕰️",
          caption: "A clock is a nested loop: the minute hand goes round 60 times for every single turn of the hour hand.",
        },
        {
          type: "text",
          md: "A **nested loop** is a loop placed inside the body of another loop. The first one is the **outer loop** and the one inside is the **inner loop**.\n\nThe rule: for **every one** round of the outer loop, the inner loop runs **all** its rounds from the start. If the outer loop runs 4 times and the inner loop 3 times, the inner body runs 4 × 3 = 12 times.\n\nIn patterns, think of it this way: the **outer loop controls the rows**, the **inner loop controls what is printed in each row**, and `System.out.println()` after the inner loop moves to the next row.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Pattern.java",
          code: `public class Pattern
{
    public static void main(String[] args)
    {
        for (int i = 1; i <= 4; i++)
        {
            for (int j = 1; j <= i; j++)
                System.out.print(j + " ");
            System.out.println();
        }
        for (int i = 4; i >= 1; i--)
        {
            for (int j = 1; j <= i; j++)
                System.out.print("* ");
            System.out.println();
        }
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: two triangles",
          problem: "Trace Pattern.java and give its exact output.",
          steps: [
            "First pair of loops: when i = 1, j runs 1 to 1 and prints `1`; then println ends the row.",
            "i = 2: j runs 1 to 2: `1 2`. i = 3: `1 2 3`. i = 4: `1 2 3 4`. The inner limit is `i`, so each row is one longer.",
            "Second pair: i goes 4, 3, 2, 1, and the inner loop prints `* ` i times: 4 stars, then 3, 2 and 1.",
            "The inner loop prints values of **j** in the first triangle, so each row starts again at 1.",
          ],
          answer: "1\n1 2\n1 2 3\n1 2 3 4\n* * * *\n* * *\n* *\n*",
        },
        {
          type: "table",
          headers: ["i (row)", "j runs", "Printed"],
          rows: [
            ["1", "1", "`1`"],
            ["2", "1, 2", "`1 2`"],
            ["3", "1, 2, 3", "`1 2 3`"],
            ["4", "1, 2, 3, 4", "`1 2 3 4`"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "`for (int i = 1; i <= 5; i++) for (int j = 1; j <= 4; j++) count++;` If count starts at 0, what is it at the end?",
              answer: 20,
              explain: "The inner body runs 4 times for each of the 5 outer rounds: 5 × 4 = 20.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Floyd.java: Floyd's triangle",
          code: `public class Floyd
{
    public static void main(String[] args)
    {
        int k = 1;
        for (int i = 1; i <= 4; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                System.out.print(k + " ");
                k++;
            }
            System.out.println();
        }
    }
}`,
        },
        {
          type: "text",
          md: "Here a separate counter `k` is printed instead of j. Because `k` is set to 1 **before** the outer loop, it is never reset, so the numbers keep going: row 1 is `1`, row 2 is `2 3`, row 3 is `4 5 6`, row 4 is `7 8 9 10`. This is called **Floyd's triangle**.",
        },
        {
          type: "mistake",
          wrong: "Putting `System.out.println();` inside the inner loop, so that each row is printed properly.",
          right: "`println()` goes **after** the inner loop, inside the outer loop. Then it runs once per row. Inside the inner loop it runs after every single value, so everything comes out one per line.",
          why: "The bracket where the println sits decides how often it runs. The inner loop's body runs for every value; the outer loop's body (after the inner loop finishes) runs once per row.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each inner loop to the pattern row it prints (i = 3).",
            pairs: [
              ["for (j = 1; j <= i; j++) print(j + \" \")", "1 2 3"],
              ["for (j = 1; j <= i; j++) print(i + \" \")", "3 3 3"],
              ["for (j = i; j >= 1; j--) print(j + \" \")", "3 2 1"],
              ["for (j = 1; j <= i; j++) print(\"* \")", "* * *"],
            ],
            explain: "Look at what is printed (j, i or a star) and in which direction j moves. Printing i repeats the row number; printing j counts within the row.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "For a pattern question, first write down the row number and how many items are in each row: if row i has i items, the inner loop is `j <= i`; if it has (5 − i + 1) items, the outer loop can count down instead. Then decide what is printed: j, i, a counter, or a symbol. Put `println()` after the inner loop.",
        },
        {
          type: "keypoints",
          items: [
            "A nested loop is a loop inside another loop.",
            "The inner loop runs completely for every round of the outer loop: total = outer × inner (for fixed limits).",
            "For patterns: outer loop = rows, inner loop = items in a row, println() after the inner loop.",
            "Print j for 1 2 3, i for 3 3 3, a running counter for Floyd's triangle.",
          ],
        },
      ],
      flashcards: [
        { front: "Nested loop", back: "A loop placed inside the body of another loop." },
        { front: "How often does the inner loop run?", back: "Completely, from start to end, for every single iteration of the outer loop." },
        { front: "Total iterations of outer m × inner n", back: "m × n (when the limits are fixed)." },
        { front: "Where does println() go in a pattern?", back: "After the inner loop, inside the outer loop, so it runs once per row." },
        { front: "Floyd's triangle", back: "1 / 2 3 / 4 5 6 / 7 8 9 10 ...: a counter that keeps increasing across rows." },
        { front: "Inner loop for a right triangle", back: "for (j = 1; j <= i; j++), so row i has i items." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many stars are printed by `for (int i = 1; i <= 3; i++) for (int j = 1; j <= 6; j++) System.out.print(\"*\");`?",
          answer: 18,
          explain: "3 outer rounds × 6 inner rounds = 18.",
        },
        {
          kind: "mcq",
          q: "Which output does `for (int i = 1; i <= 3; i++) { for (int j = 1; j <= i; j++) System.out.print(i); System.out.println(); }` give?",
          options: ["1 / 22 / 333 (one row per line)", "1 / 12 / 123", "111 / 22 / 3", "123 / 123 / 123"],
          answer: 0,
          explain: "It prints i, i times: 1, then 22, then 333.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In a nested loop, the outer loop finishes all its rounds before the inner loop starts.",
          answer: false,
          explain: "It is the other way round: for each outer round, the inner loop runs all its rounds.",
        },
        {
          kind: "numeric",
          q: "`int count = 0; for (int p = 1; p <= 3; p++) for (int r = p; r <= 3; r++) count++;` What is count?",
          answer: 6,
          explain: "p = 1: r = 1..3 (3 times); p = 2: r = 2..3 (2); p = 3: r = 3 (1). 3 + 2 + 1 = 6.",
          difficulty: 3,
          hint: "The inner start depends on p; count each row separately.",
        },
        {
          kind: "fill",
          q: "In a pattern program, the ___ loop usually controls the number of rows.",
          answer: ["outer"],
          explain: "The outer loop decides the rows; the inner loop prints within each row.",
        },
        {
          kind: "mcq",
          q: "In Floyd.java, what is the last number printed if the outer loop runs to 5 instead of 4?",
          options: ["15", "10", "5", "25"],
          answer: 0,
          explain: "Rows have 1 + 2 + 3 + 4 + 5 = 15 numbers, so the counter ends at 15.",
          difficulty: 2,
          hint: "Add up how many numbers each row prints.",
        },
        {
          kind: "order",
          q: "Order the lines of a right-triangle star pattern.",
          items: ["for (int i = 1; i <= 4; i++) {", "for (int j = 1; j <= i; j++)", "System.out.print(\"* \");", "System.out.println(); }"],
          explain: "Outer loop for rows, inner loop for stars, print inside the inner loop, println after it.",
        },
      ],
    },
    {
      slug: "java9-nested-loops-break-series",
      title: "break and continue in Nested Loops; Primes and Series",
      summary: "See that break and continue affect only the loop they are in, list prime numbers in a range, and add a series of factorials with nested loops.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Nested loops are not only for patterns. Whenever a task must be done **for each** of many values, and the task itself needs a loop, you get a nested loop. For example: *for each number from 2 to 20, check whether it is prime* (checking needs its own loop).\n\nImportant rule: `break` and `continue` act only on the **innermost loop that contains them**. A break inside the inner loop ends only the inner loop; the outer loop carries on with its next round.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Inner.java",
          code: `public class Inner
{
    public static void main(String[] args)
    {
        for (int i = 1; i <= 3; i++)
        {
            for (int j = 1; j <= 3; j++)
            {
                if (j == 2)
                    break;
                System.out.print(i + "" + j + " ");
            }
        }
        System.out.println();
        int count = 0;
        for (int i = 1; i <= 4; i++)
            for (int j = 1; j <= 3; j++)
                count++;
        System.out.println(count);
        for (int i = 1; i <= 3; i++)
        {
            for (int j = 1; j <= 3; j++)
            {
                if (i == j)
                    continue;
                System.out.print(i * j + " ");
            }
        }
        System.out.println();
    }
}`,
        },
        {
          type: "example",
          title: "Dry run: break and continue in the inner loop",
          problem: "Give the exact output of Inner.java.",
          steps: [
            "Part 1: for each i, j = 1 prints `i` and `j` joined (the `\"\"` makes it a string, so 1 and 1 give 11, not 2). At j = 2, break ends the **inner** loop only. The outer loop goes on: `11 21 31`.",
            "Part 2: the inner body runs 3 times for each of 4 outer rounds: count = 12.",
            "Part 3: continue skips the pairs where i == j: (1,1), (2,2), (3,3). The others print i × j: i = 1 → 2 3; i = 2 → 2 6; i = 3 → 3 6.",
          ],
          answer: "11 21 31\n12\n2 3 2 6 3 6",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A break inside the inner loop also stops the outer loop.",
              answer: false,
              explain: "break leaves only the loop it is written in. In Inner.java the outer loop still ran for i = 2 and 3.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Primes.java: prime numbers from 2 to 20",
          code: `public class Primes
{
    public static void main(String[] args)
    {
        for (int n = 2; n <= 20; n++)
        {
            boolean prime = true;
            for (int d = 2; d < n; d++)
            {
                if (n % d == 0)
                {
                    prime = false;
                    break;
                }
            }
            if (prime)
                System.out.print(n + " ");
        }
        System.out.println();
    }
}`,
        },
        {
          type: "text",
          md: "The outer loop picks each number n. The inner loop tries divisors from 2 to n − 1. As soon as one divides n exactly, n is not prime, so `break` stops trying more divisors. The variable `prime` is a **flag**: a boolean that remembers whether something happened. It must be reset to true **inside** the outer loop for every new n.\n\nOutput: `2 3 5 7 11 13 17 19`",
        },
        {
          type: "example",
          title: "Series with nested loops",
          problem: "Find the sum $S = 1! + 2! + 3! + 4!$ using nested loops, and give the output.",
          steps: [
            "Outer loop: i from 1 to 4 picks each term. Inner loop: multiplies f = 1 × 2 × ... × i to get i!. f must be reset to 1 for each i.",
            "i = 1: f = 1. i = 2: f = 2. i = 3: f = 6. i = 4: f = 24.",
            "sum = 1 + 2 + 6 + 24 = 33.",
          ],
          answer: "Sum = 33",
        },
        {
          type: "code",
          lang: "java",
          caption: "Series.java",
          code: `public class Series
{
    public static void main(String[] args)
    {
        long sum = 0;
        for (int i = 1; i <= 4; i++)
        {
            long f = 1;
            for (int j = 1; j <= i; j++)
                f = f * j;
            sum = sum + f;
        }
        System.out.println("Sum = " + sum);
    }
}`,
        },
        {
          type: "mistake",
          wrong: "Declare `long f = 1;` once, before the outer loop, to save a line.",
          right: "Reset `f = 1` **inside** the outer loop, just before the inner loop. Otherwise f keeps the old product and each \"factorial\" is multiplied onto the last one.",
          why: "It looks like the same variable doing the same job. But each term needs a fresh start. Without the reset, the terms become 1, 2, 12, 288, giving a sum of 303 instead of 33. The same applies to the `prime` flag in Primes.java.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "In Primes.java, the inner loop finds a divisor and runs break. What happens next?",
            emoji: "🔍",
            options: ["The program ends", "The outer loop moves to the next n", "The inner loop starts again with the same n"],
            answer: 1,
            trap: 0,
            explain: "break ends only the inner loop. Java then reaches `if (prime)`, and the outer loop goes on to the next n.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ICSE tip",
          md: "In series programs, check two things in your dry run: is the inner accumulator (factorial, power, count) **reset** for each term, and does the outer loop run for the right number of terms? For `S = 1 + (1+2) + (1+2+3) + ...`, the inner loop adds 1 to i and the outer loop adds each inner total to S.",
        },
        {
          type: "keypoints",
          items: [
            "break and continue affect only the innermost loop that contains them.",
            "Use nested loops when each value of the outer loop needs its own loop of work.",
            "A flag (boolean) remembers a result, e.g. prime = false once a divisor is found.",
            "Reset inner accumulators and flags inside the outer loop for each new value.",
          ],
        },
      ],
      flashcards: [
        { front: "break in a nested loop", back: "Ends only the loop it is in (usually the inner loop); the outer loop continues." },
        { front: "continue in a nested loop", back: "Skips the rest of the current round of the loop it is in and goes to that loop's next round." },
        { front: "Flag variable", back: "A variable, often boolean, that records whether something has happened (e.g. prime = false)." },
        { front: "1! + 2! + 3! + 4!", back: "1 + 2 + 6 + 24 = 33." },
        { front: "Prime numbers from 2 to 20", back: "2, 3, 5, 7, 11, 13, 17, 19." },
        { front: "Why reset f = 1 inside the outer loop?", back: "So each term's factorial starts fresh instead of building on the previous one." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`for (int p = 1; p <= 3; p++) { for (int r = 1; r <= 3; r++) { if (r > p) break; System.out.print(r); } System.out.print(\" \"); }` prints:",
          options: ["1 12 123", "123 123 123", "1 2 3", "1"],
          answer: 0,
          explain: "For each p, r prints from 1 up to p and then break stops the inner loop: 1, 12, 123.",
          difficulty: 3,
          hint: "break stops the inner loop as soon as r passes p.",
        },
        {
          kind: "truefalse",
          q: "In Primes.java, the flag `prime` must be set to true again for every new value of n.",
          answer: true,
          explain: "Otherwise, once one number is found not prime, every later number would also be reported as not prime.",
        },
        {
          kind: "numeric",
          q: "In Series.java, if the outer loop runs to 5 instead of 4, what sum is printed?",
          answer: 153,
          explain: "33 + 5! = 33 + 120 = 153.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which numbers does Primes.java print if the outer loop is changed to run from 20 to 30?",
          options: ["23 29", "21 23 25 27 29", "23 27 29", "20 23 29"],
          answer: 0,
          explain: "21 = 3 × 7, 25 = 5 × 5 and 27 = 3 × 9 are not prime; only 23 and 29 are.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "break inside an inner loop ends only the ___ loop.",
          answer: ["inner"],
          explain: "break affects only the loop that directly contains it.",
        },
        {
          kind: "multi",
          q: "In Inner.java Part 3, which products are printed? (Choose all that apply)",
          options: ["2", "1", "4", "6", "9"],
          answers: [0, 3],
          explain: "The pairs with i == j (1×1, 2×2, 3×3) are skipped, so 1, 4 and 9 never appear. The printed values are 2, 3, 2, 6, 3, 6.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the steps of the prime-listing program for one value of n.",
          items: ["Set prime = true", "Try divisors d from 2 to n − 1", "If n % d == 0, set prime = false and break", "If prime is still true, print n"],
          explain: "Reset the flag, test divisors, stop at the first divisor, and print only if no divisor was found.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const topics: Topic[] = [
  introOop,
  objectsClasses,
  valuesTypes,
  operators,
  inputJava,
  mathLibrary,
  conditionals,
  iteration,
  nestedLoops,
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Introduction to Object-Oriented Programming": "java9-intro-oop",
  "9:Elementary Concept of Objects and Classes": "java9-objects-and-classes",
  "9:Values and Data Types": "java9-values-and-data-types",
  "9:Operators in Java": "java9-operators",
  "9:Input in Java": "java9-input-in-java",
  "9:Mathematical Library Methods": "java9-math-library-methods",
  "9:Conditional Constructs in Java": "java9-conditional-constructs",
  "9:Iterative Constructs in Java": "java9-iterative-constructs",
  "9:Nested Loops": "java9-nested-loops",
};
