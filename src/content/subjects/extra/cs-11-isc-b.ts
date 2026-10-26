import type { Topic } from "@/content/types";

/** String.raw keeps TeX and Java backslashes intact. */
const t = String.raw;
const java = String.raw;

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

/* ================================================================== */
/* ISC Computer Science Class 11 (Java): Methods, Arrays, Strings,     */
/* Recursion, Basic I/O and Packages, Trends in Computing and Ethics.  */
/* Every program below was compiled and run; outputs are exact.        */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* 1. Methods                                                          */
/* ------------------------------------------------------------------ */
const methods: Topic = {
  slug: "c11-isc-cs-methods",
  title: "Methods",
  icon: "🧰",
  description: "Defining and calling methods, formal and actual arguments, return values, primitive and object arguments, static members, the this keyword and method overloading.",
  lessons: [
    {
      slug: "c11-isc-methods-define-call",
      title: "Defining and Calling Methods",
      summary: "The parts of a method header, formal and actual arguments, return values, void methods, and methods as abstractions for number problems.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🧾",
          caption: "A shopkeeper in Pune works out a bill the same way for every customer: price × quantity, minus the discount. Write the rule once, give it a name, and use it again and again. That named rule is a method.",
        },
        {
          type: "text",
          md: "A **method** is a named block of statements inside a class that does one job. Other code **calls** (invokes) it by name, may send it values, and may get one value back.\n\nMethods are **abstractions**: the caller only needs to know *what* the method does (its name, inputs and result), not *how* it does it. They also stop us repeating code and make a big program easier to test, one method at a time.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Shop.java",
          code: java`public class Shop
{
    // returns the bill after a discount
    static double bill(double price, int qty, double discountPercent)
    {
        double total = price * qty;
        return total - total * discountPercent / 100;
    }

    // prints a line of n copies of c; returns nothing
    static void line(char c, int n)
    {
        for (int i = 1; i <= n; i++)
            System.out.print(c);
        System.out.println();
    }

    public static void main(String[] args)
    {
        line('=', 20);
        double amt = bill(250.0, 4, 10);
        System.out.println("Amount: " + amt);
        System.out.println("Two pens: " + bill(15.5, 2, 0));
        line('-', 20);
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`====================`\n`Amount: 900.0`\n`Two pens: 31.0`\n`--------------------`\n\nThe first line of a method is its **header**. `static double bill(double price, int qty, double discountPercent)` has a **modifier** (`static`), a **return type** (`double`), a **name** (`bill`) and a **parameter list** in brackets. An **access specifier** (`public`, `private`, `protected`) may come first. The statements inside `{ }` are the **method body**.",
        },
        {
          type: "table",
          headers: ["Term", "Meaning", "In Shop.java"],
          rows: [
            ["**Formal parameters**", "variables declared in the header; they receive values when the method is called", "`price`, `qty`, `discountPercent`"],
            ["**Actual parameters** (arguments)", "the values or expressions written in the call", "`250.0`, `4`, `10`"],
            ["**Return type**", "type of the value sent back; `void` means nothing is sent back", "`double` for bill, `void` for line"],
            ["**Method signature**", "the method name with the number, types and order of its parameters", "`bill(double, int, double)`"],
            ["**Method prototype**", "the header ending in a semicolon, used to describe a method", "`double bill(double price, int qty, double discountPercent);`"],
          ],
        },
        {
          type: "text",
          md: "**What happens in a call.** Each actual argument is evaluated, its value is copied into the matching formal parameter, the body runs, and `return` sends the result back to the exact place where the call was written. A `return` statement also ends the method at once, even inside a loop. The actual argument must match the formal parameter in number, order and a compatible type: `4` (an `int`) can go into a `double` parameter by widening, but `2.5` cannot go into an `int` parameter.\n\nA method that returns a value can be used inside an expression: `bill(15.5, 2, 0)` sits inside `println`. A `void` method cannot: `int x = line('-', 5);` is a compile-time error.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the call `bill(250.0, 4, 10)`, what are `250.0`, `4` and `10`?",
              options: ["Actual parameters", "Formal parameters", "Return values", "Instance variables"],
              answer: 0,
              explain: "Values written in the call are **actual parameters** (arguments). The variables `price`, `qty`, `discountPercent` in the header are the formal parameters.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "NumTools.java",
          code: java`public class NumTools
{
    static int sumOfDigits(int n)
    {
        int s = 0;
        while (n > 0)
        {
            s += n % 10;
            n /= 10;
        }
        return s;
    }

    static boolean isPrime(int n)
    {
        if (n < 2)
            return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0)
                return false;
        return true;
    }

    public static void main(String[] args)
    {
        System.out.println(sumOfDigits(4729));
        for (int k = 20; k <= 30; k++)
            if (isPrime(k))
                System.out.print(k + " ");
        System.out.println();
        System.out.println(isPrime(sumOfDigits(4729)));
    }
}`,
        },
        {
          type: "example",
          title: "Dry run of NumTools",
          problem: "Give the exact output of NumTools.java and explain the last line.",
          steps: [
            "`sumOfDigits(4729)`: s takes the values 9, 11, 18, 22 as n becomes 472, 47, 4, 0. It returns **22**.",
            "The loop calls `isPrime(k)` for k = 20 to 30. Only 23 and 29 have no factor from 2 up to their square root, so `23 29 ` is printed, then `println()` ends the line.",
            "Last line: the inner call runs first and returns 22; then `isPrime(22)` finds 22 % 2 == 0 and returns `false`. A method call can be an argument to another call.",
          ],
          answer: "22\n23 29\nfalse",
        },
        {
          type: "mistake",
          wrong: "A method can return two values, for example `return a, b;`, or it can have two return statements that both send values back in one call.",
          right: "A method returns **at most one value** per call. The first `return` that runs ends the method. To send back several values, return an array or an object.",
          why: "Methods often contain several `return` statements (as in `isPrime`), so it looks as if they all run. Only one of them executes in any single call; the rest are on paths that were not taken.",
        },
        {
          type: "text",
          md: "**Pure and impure methods.** A **pure method** only uses its parameters to compute a result; it does not change any variable outside itself, so the same arguments always give the same answer (`sumOfDigits` is pure). An **impure method** changes the state of an object or a static variable, or prints output (a method `deposit(amt)` that adds to a balance is impure). Pure methods are easier to test.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each part of the header to its name.",
            pairs: [
              ["public", "Access specifier"],
              ["static", "Modifier"],
              ["boolean", "Return type"],
              ["isPrime", "Method name"],
              ["(int n)", "Parameter list"],
            ],
            explain: "In `public static boolean isPrime(int n)` the parts always come in this order: access specifier, modifier, return type, name, parameter list.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In the theory paper, \"write the method prototype\" means the header only, with a semicolon, for example `int sumOfDigits(int n);`. Do not write the body. In the practical exam, give every method a comment line saying what it does; documentation earns marks.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A `void` method can be used on the right-hand side of an assignment, like `int x = line('-', 5);`.",
              answer: false,
              explain: "A `void` method returns nothing, so there is no value to assign. The compiler reports an error.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "A method header has: access specifier, modifier, return type, name and parameter list.",
            "Formal parameters are in the header; actual parameters are in the call. They must match in number, order and type.",
            "`return` sends one value back and ends the method at once; `void` methods return nothing.",
            "The signature is the name with the parameter types; the prototype is the header with a semicolon.",
            "Pure methods change nothing outside themselves; impure methods change state or print.",
          ],
        },
      ],
      flashcards: [
        { front: "Method", back: "A named block of statements in a class that does one job and is invoked by name." },
        { front: "Formal parameter", back: "A variable declared in the method header that receives a value when the method is called." },
        { front: "Actual parameter", back: "The value or expression written in the method call." },
        { front: "Method signature", back: "The method name together with the number, types and order of its parameters." },
        { front: "Method prototype", back: "The first line (header) of a method ending with a semicolon, e.g. `int sum(int a, int b);`" },
        { front: "What does `return` do?", back: "Sends one value back to the caller and ends the method immediately." },
        { front: "Pure method", back: "A method that does not change the state of any object or outside variable; same inputs always give the same output." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is a valid method prototype?",
          options: ["`int area(int l, int b);`", "`area(int l, int b) int;`", "`int area(l, b);`", "`int area(int l, b)`"],
          answer: 0,
          explain: "A prototype is return type, name, and a parameter list in which every parameter has its own type, ending in a semicolon.",
        },
        {
          kind: "fill",
          q: "A method that sends no value back has the return type ___.",
          answer: ["void"],
          explain: "`void` means the method returns nothing.",
        },
        {
          kind: "truefalse",
          q: "A method can have several `return` statements, but only one of them runs in a single call.",
          answer: true,
          explain: "The first `return` that executes ends the method, so no other return can run in that call.",
        },
        {
          kind: "numeric",
          q: "What does `sumOfDigits(9087)` return, using the method in NumTools.java?",
          answer: 24,
          explain: "9 + 0 + 8 + 7 = 24.",
        },
        {
          kind: "mcq",
          q: "A method `static double avg(int a, int b)` is called as `avg(7, 2.5)`. What happens?",
          options: ["Compile-time error: 2.5 (double) cannot be passed to an int parameter", "It returns 4.75", "2.5 is rounded to 3 automatically", "It runs but returns 0"],
          answer: 0,
          explain: "Widening (int to double) is automatic, but narrowing (double to int) is not. The call does not compile.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these are impure methods?",
          options: ["A method that adds an amount to an account's balance field", "A method that returns the cube of its parameter", "A method that increases a static counter each time it is called", "A method that returns the larger of two parameters"],
          answers: [0, 2],
          explain: "Changing an object's field or a static variable changes state, so those methods are impure. The other two only compute a result from their parameters.",
        },
        {
          kind: "order",
          q: "Put the steps of a method call in order.",
          items: ["Actual arguments are evaluated", "Their values are copied into the formal parameters", "The method body runs", "return sends the result back to the point of call"],
          explain: "Arguments are worked out first, copied into parameters, then the body runs and the result comes back to where the call was written.",
        },
      ],
    },
    {
      slug: "c11-isc-methods-arguments-static",
      title: "Primitive and Object Arguments, static, this and Overloading",
      summary: "Why a method cannot change a caller's int but can change the contents of a caller's array, static versus instance members, the this keyword, and method overloading.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "📄",
          caption: "Give a friend a photocopy of your marks and they can scribble on it: your original is safe. Give them the address of your house and they can repaint your walls. Java passes a copy of the value every time, but for an object that value is an address.",
        },
        {
          type: "text",
          md: "Java always passes arguments **by value**: the formal parameter gets a **copy** of the actual argument.\n\nFor a **primitive** argument (`int`, `double`, `char`, `boolean`...) the copy is the number or character itself. Changing the parameter inside the method does not change the caller's variable.\n\nFor an **object** argument (an array, a `String`, an object of your own class) the variable holds a **reference**: the address of the object. The copy is a copy of that address, so the method reaches the **same object**. If the method changes the object's contents, the caller sees the change. This is often called **pass by reference** in ISC answers.",
        },
        {
          type: "code",
          lang: "java",
          caption: "PassDemo.java",
          code: java`public class PassDemo
{
    static void change(int x, int[] arr)
    {
        x = x + 10;
        arr[0] = arr[0] + 10;
    }

    static void replace(int[] arr)
    {
        arr = new int[] {0, 0};
        arr[1] = 99;
    }

    public static void main(String[] args)
    {
        int a = 5;
        int[] b = {5, 6};
        change(a, b);
        System.out.println("a = " + a);
        System.out.println("b[0] = " + b[0]);
        replace(b);
        System.out.println("b[1] = " + b[1]);
    }
}`,
        },
        {
          type: "example",
          title: "Tracing PassDemo",
          problem: "Give the output of PassDemo.java and explain each line.",
          steps: [
            "`change(a, b)`: x gets a copy of 5 and becomes 15, but `a` in main is untouched, so `a = 5`.",
            "`arr` gets a copy of the reference in `b`, so `arr[0] = arr[0] + 10` changes the shared array: `b[0] = 15`.",
            "`replace(b)`: `arr = new int[] {0, 0}` makes the local copy point to a **new** array. `arr[1] = 99` changes only that new array. `b` still points to the old array, whose element 1 is 6.",
          ],
          answer: "a = 5\nb[0] = 15\nb[1] = 6",
        },
        {
          type: "mistake",
          wrong: "Arrays are passed by reference, so if a method does `arr = new int[5];` the caller's array is replaced too.",
          right: "The method has only a **copy of the reference**. Changing an element (`arr[0] = ...`) changes the shared object, but making the parameter point to a new object (`arr = new ...`) changes only the local copy.",
          why: "\"Pass by reference\" sounds as if the caller's variable itself is handed over. In Java only its value (the address) is copied, so re-pointing the copy cannot move the caller's variable.",
        },
        {
          type: "text",
          md: "**Strings are a special case.** A `String` is an object, but it is **immutable**: no method can change its characters. Inside a method, `s = s + \"!\"` builds a new String and re-points the local copy, so the caller's String never changes.\n\n**static and instance members.** A **static** (class) variable has **one copy shared by every object** of the class; an **instance** variable has a separate copy in each object. A **static method** belongs to the class and is called as `ClassName.method()`. It can use static variables directly but cannot use instance variables or `this`, because no particular object is involved. An **instance method** needs an object: `obj.method()`.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Student.java",
          code: java`public class Student
{
    static int count = 0;   // one copy shared by all objects
    String name;            // each object has its own
    int marks;

    Student(String name, int marks)
    {
        this.name = name;   // this.name is the instance variable
        this.marks = marks;
        count++;
    }

    void show()
    {
        System.out.println(name + " : " + marks);
    }

    static void showCount()
    {
        System.out.println("Students: " + count);
    }

    public static void main(String[] args)
    {
        Student s1 = new Student("Ananya", 91);
        Student s2 = new Student("Kabir", 84);
        s1.show();
        s2.show();
        Student.showCount();
    }
}`,
        },
        {
          type: "text",
          md: "Output: `Ananya : 91`, `Kabir : 84`, `Students: 2`.\n\nThe keyword **`this`** is a reference to the **current object**, the object on which the method or constructor was called. When a parameter has the same name as an instance variable, the parameter **shadows** it; `this.name = name` copies the parameter into the instance variable. Without `this`, `name = name` would just assign the parameter to itself and the object's `name` would stay `null`.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Three Student objects are created in main. How many copies of `count` and of `marks` exist?",
              options: ["1 count, 3 marks", "3 count, 3 marks", "1 count, 1 marks", "3 count, 1 marks"],
              answer: 0,
              explain: "`count` is static, so there is one copy for the class. `marks` is an instance variable, so each of the 3 objects has its own.",
            },
          ],
        },
        {
          type: "text",
          md: "**Method overloading** means defining two or more methods with the **same name** but **different parameter lists** (a different number, type or order of parameters) in the same class. Java picks the version whose parameters match the call. This is **compile-time (static) polymorphism**. Changing only the return type is **not** overloading and gives a compile-time error.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Area.java",
          code: java`public class Area
{
    static int area(int side)
    {
        return side * side;
    }

    static double area(double r)
    {
        return 3.14 * r * r;
    }

    static int area(int l, int b)
    {
        return l * b;
    }

    public static void main(String[] args)
    {
        System.out.println(area(5));
        System.out.println(area(2.0));
        System.out.println(area(4, 3));
        System.out.println(area('A'));
    }
}`,
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does `area('A')` print in Area.java?",
            emoji: "🔤",
            options: ["Compile-time error: no area(char)", "4225", "A", "1.0"],
            answer: 1,
            trap: 0,
            explain: "There is no `area(char)`, so Java widens the char to the nearest match, `int`. 'A' has code 65, and 65 × 65 = 4225. The other lines print 25, 12.56 and 12.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "When asked to \"differentiate static and non-static methods\" or \"call by value and call by reference\", give two clear points each with a one-line code example. For overloading, always write that the methods differ in their **parameter lists**, not in their return types.",
        },
        {
          type: "keypoints",
          items: [
            "Java copies every argument. A primitive copy cannot affect the caller; a reference copy reaches the same object.",
            "Changing an object's contents through a parameter is seen by the caller; re-pointing the parameter is not.",
            "A static variable has one copy per class; instance variables have one copy per object. Static methods cannot use `this`.",
            "`this` refers to the current object and resolves name clashes between parameters and instance variables.",
            "Overloaded methods share a name but differ in their parameter lists; a different return type alone is not enough.",
          ],
        },
      ],
      flashcards: [
        { front: "Call by value (primitive argument)", back: "The method gets a copy of the value; changes to the parameter do not affect the caller's variable." },
        { front: "Call by reference (object argument)", back: "The method gets a copy of the reference, so changes to the object's contents are seen by the caller." },
        { front: "Static variable", back: "A class variable: one copy shared by all objects of the class." },
        { front: "Instance variable", back: "A variable declared in a class without `static`; every object has its own copy." },
        { front: "The `this` keyword", back: "A reference to the current object, used e.g. in `this.name = name`." },
        { front: "Method overloading", back: "Same method name, different parameter lists (number, type or order), in one class." },
        { front: "Why can't a static method use `this`?", back: "It belongs to the class, not to an object, so there is no current object." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "`static void inc(int n) { n++; }` is called as `int k = 4; inc(k);`. What is k after the call?",
          options: ["4", "5", "0", "Compile-time error"],
          answer: 0,
          explain: "n gets a copy of 4 and becomes 5, but k in the caller is unchanged.",
        },
        {
          kind: "mcq",
          q: "`static void inc(int[] a) { a[0]++; }` is called with `int[] p = {4};`. What is p[0] after `inc(p)`?",
          options: ["5", "4", "0", "Compile-time error"],
          answer: 0,
          explain: "a holds a copy of the reference, so it changes the same array that p refers to.",
        },
        {
          kind: "truefalse",
          q: "Two methods `int sum(int a, int b)` and `double sum(int a, int b)` in the same class are a valid example of overloading.",
          answer: false,
          explain: "Their parameter lists are identical; only the return type differs. This is a compile-time error.",
        },
        {
          kind: "fill",
          q: "The keyword ___ refers to the object on which an instance method was called.",
          answer: ["this"],
          explain: "`this` is the reference to the current object.",
        },
        {
          kind: "numeric",
          q: "Using Area.java, what does `area(6, 2) + area(3)` print?",
          answer: 21,
          explain: "area(6, 2) = 12 and area(3) = 9, total 21.",
        },
        {
          kind: "mcq",
          q: "Inside a static method, which of these causes a compile-time error?",
          options: ["Using an instance variable directly", "Using a static variable of the same class", "Calling another static method", "Declaring a local variable"],
          answer: 0,
          explain: "A static method has no current object, so it cannot refer to instance variables (or `this`) directly.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A method does `s = s + \"!\";` where s is a String parameter. The caller passed `msg = \"Hi\"`. What is msg after the call?",
          options: ["\"Hi\"", "\"Hi!\"", "null", "\"!\""],
          answer: 0,
          explain: "Strings are immutable. The method builds a new String and re-points its local copy; msg still refers to \"Hi\".",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-methods-board-practice",
      title: "Board Practice: Methods",
      summary: "Mixed ISC-style questions: output tracing, roots of a quadratic using a method, and writing a class with methods to find Niven numbers.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "This lesson mixes the kinds of questions ISC papers ask on methods: definitions, output tracing, and a complete program written with methods. Try each one before you read the answer.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Trace.java",
          code: java`public class Trace
{
    static int calls = 0;

    static int f(int n)
    {
        calls++;
        return n * 2 + 1;
    }

    public static void main(String[] args)
    {
        int x = f(f(3));
        System.out.println(x + " " + calls);
        System.out.println(f(0) + f(1));
        System.out.println(calls);
    }
}`,
        },
        {
          type: "example",
          title: "Output question",
          problem: "Give the output of Trace.java.",
          steps: [
            "`f(f(3))`: inner f(3) = 3 × 2 + 1 = 7 (calls = 1); outer f(7) = 15 (calls = 2). Line 1: `15 2`.",
            "`f(0) + f(1)` = 1 + 3 = 4, and calls becomes 4. Line 2: `4`.",
            "Line 3 prints the static counter: `4`.",
          ],
          answer: "15 2\n4\n4",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "In Trace.java, what would `f(f(f(1)))` return?",
              answer: 15,
              explain: "f(1) = 3, f(3) = 7, f(7) = 15.",
            },
          ],
        },
        {
          type: "text",
          md: t`**Using a method for an algebraic problem.** The roots of $ax^2 + bx + c = 0$ depend on the discriminant $d = b^2 - 4ac$. If $d > 0$ the roots $\frac{-b \pm \sqrt{d}}{2a}$ are real and distinct; if $d = 0$ they are real and equal, $-\frac{b}{2a}$; if $d < 0$ they are not real (imaginary).`,
        },
        {
          type: "code",
          lang: "java",
          caption: "Roots.java",
          code: java`public class Roots
{
    static void solve(double a, double b, double c)
    {
        double d = b * b - 4 * a * c;
        if (d > 0)
        {
            double r1 = (-b + Math.sqrt(d)) / (2 * a);
            double r2 = (-b - Math.sqrt(d)) / (2 * a);
            System.out.println("Real and distinct: " + r1 + ", " + r2);
        }
        else if (d == 0)
            System.out.println("Real and equal: " + (-b / (2 * a)));
        else
            System.out.println("Imaginary roots");
    }

    public static void main(String[] args)
    {
        solve(1, -5, 6);
        solve(1, 4, 4);
        solve(2, 1, 3);
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Real and distinct: 3.0, 2.0`\n`Real and equal: -2.0`\n`Imaginary roots`\n\nFor (1, −5, 6): d = 25 − 24 = 1, roots (5 ± 1) / 2 = 3 and 2. For (1, 4, 4): d = 16 − 16 = 0, root −4/2 = −2. For (2, 1, 3): d = 1 − 24 = −23 < 0. The `int` arguments 1, −5, 6 are widened to `double` automatically.",
        },
        {
          type: "mistake",
          wrong: "`-b / 2 * a` is the same as `-b / (2 * a)`.",
          right: "`/` and `*` have equal precedence and work left to right, so `-b / 2 * a` means `(-b / 2) * a`. Always bracket the denominator: `-b / (2 * a)`.",
          why: "On paper the fraction bar groups the denominator for you. In Java there is no bar, so you must add the brackets yourself; for a = 2 the two forms give different answers.",
        },
        {
          type: "example",
          title: "Program to write: Niven numbers",
          problem: "A **Niven (Harshad) number** is divisible by the sum of its digits (e.g. 102: 1 + 0 + 2 = 3 and 102 ÷ 3 = 34). Design a class `Niven` with `int sumDigits(int n)`, `boolean isNiven(int n)` and `main()` that prints all Niven numbers from 100 to 130.",
          steps: [
            "`sumDigits(n)`: repeat `s += n % 10; n /= 10;` while n > 0, then return s.",
            "`isNiven(n)`: return `n % sumDigits(n) == 0`. For n ≥ 1 the sum is never 0, so there is no division by zero.",
            "`main()`: loop k from 100 to 130 and print k when `isNiven(k)` is true.",
            "Check one by hand: 112 → sum 4 → 112 ÷ 4 = 28, so it is printed; 116 → sum 8 → 14.5, so it is not.",
          ],
          answer: "See Niven.java below. Output: 100 102 108 110 111 112 114 117 120 126",
        },
        {
          type: "code",
          lang: "java",
          caption: "Niven.java",
          code: java`public class Niven
{
    // returns the sum of the digits of n
    int sumDigits(int n)
    {
        int s = 0;
        while (n > 0)
        {
            s += n % 10;
            n /= 10;
        }
        return s;
    }

    // true if n is divisible by the sum of its digits
    boolean isNiven(int n)
    {
        return n % sumDigits(n) == 0;
    }

    public static void main(String[] args)
    {
        Niven ob = new Niven();
        for (int k = 100; k <= 130; k++)
            if (ob.isNiven(k))
                System.out.print(k + " ");
        System.out.println();
    }
}`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the call valid for `static int add(int a, int b)`?",
            groups: ["Compiles", "Compile-time error"],
            items: [
              { text: "add(3, 4)", group: 0, hint: "Two ints match exactly." },
              { text: "add('a', 1)", group: 0, hint: "A char widens to int automatically." },
              { text: "add(2.0, 1)", group: 1, hint: "A double cannot narrow to int without a cast." },
              { text: "add(5)", group: 1, hint: "The number of arguments must match." },
              { text: "int r = add(1, 2) * 3;", group: 0, hint: "An int-returning call can sit inside an expression." },
              { text: "String s = add(1, 2);", group: 1, hint: "An int cannot be assigned to a String." },
            ],
            explain: "Arguments must match the parameters in number and compatible type (widening is allowed, narrowing is not), and the returned value must suit where it is used.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Notice that the methods in Niven.java are not static, so `main` creates an object `ob` and calls `ob.isNiven(k)`. ISC programs usually ask for this style. In the practical exam, write the algorithm in numbered steps before the code, and show at least two sample runs.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In Niven.java, `main` could call `isNiven(k)` directly without creating an object.",
              answer: false,
              explain: "`isNiven` is an instance method and `main` is static, so it needs an object: `ob.isNiven(k)`.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Trace nested calls from the inside out, and track static counters carefully.",
            "Bracket denominators: `-b / (2 * a)`, not `-b / 2 * a`.",
            "Break a program into small methods: one to compute, one to test, and main to drive the loop.",
            "Instance methods need an object when called from static `main`.",
          ],
        },
      ],
      flashcards: [
        { front: "Discriminant of $ax^2 + bx + c = 0$", back: "$d = b^2 - 4ac$; d > 0 real distinct, d = 0 real equal, d < 0 imaginary." },
        { front: "Niven (Harshad) number", back: "A number divisible by the sum of its digits, e.g. 126 (sum 9, 126 ÷ 9 = 14)." },
        { front: "How do you call an instance method from `main`?", back: "Create an object first: `Niven ob = new Niven(); ob.isNiven(k);`" },
        { front: "Value of `8 / 2 * 4` in Java", back: "16, because / and * work left to right: (8 / 2) × 4." },
        { front: "Order of evaluating `f(f(3))`", back: "The inner call runs first; its result becomes the argument of the outer call." },
        { front: "`Math.sqrt(x)` returns which type?", back: "`double`." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `solve(1, -7, 12)` print, using Roots.java?",
          options: ["Real and distinct: 4.0, 3.0", "Real and distinct: 3.0, 4.0", "Real and equal: 3.5", "Imaginary roots"],
          answer: 0,
          explain: "d = 49 − 48 = 1; r1 = (7 + 1)/2 = 4.0 is printed first, then r2 = (7 − 1)/2 = 3.0.",
        },
        {
          kind: "truefalse",
          q: "132 is a Niven number.",
          answer: true,
          explain: "1 + 3 + 2 = 6 and 132 ÷ 6 = 22.",
        },
        {
          kind: "numeric",
          q: "In Trace.java, if main had only `System.out.println(f(f(f(f(0)))));`, what is printed?",
          answer: 15,
          explain: "f(0) = 1, f(1) = 3, f(3) = 7, f(7) = 15.",
        },
        {
          kind: "mcq",
          q: "Which statement about the method `static boolean isNiven(int n) { return n % sumDigits(n) == 0; }` is correct?",
          options: ["It returns true or false; its return type is boolean", "It must contain an if statement to return a boolean", "It returns the remainder", "It is a void method"],
          answer: 0,
          explain: "The expression `n % sumDigits(n) == 0` is itself a boolean, so it can be returned directly.",
        },
        {
          kind: "fill",
          q: "In `int x = f(f(3));` the call ___(3) is evaluated first. (write the method name)",
          answer: ["f"],
          explain: "The innermost call f(3) runs first.",
        },
        {
          kind: "mcq",
          q: "For a = 2, b = 8, what is `-b / 2 * a` (all doubles)?",
          options: ["-8.0", "-2.0", "-16.0", "-0.5"],
          answer: 0,
          explain: "(-8 / 2) × 2 = −4 × 2 = −8.0. The intended `-b / (2 * a)` would be −2.0.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which of these are Niven numbers?",
          options: ["120", "121", "126", "128"],
          answers: [0, 2],
          explain: "120: sum 3, 120 ÷ 3 = 40. 126: sum 9, 126 ÷ 9 = 14. 121 (sum 4) and 128 (sum 11) do not divide evenly.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Arrays                                                           */
/* ------------------------------------------------------------------ */
const arrays: Topic = {
  slug: "c11-isc-cs-arrays",
  title: "Arrays",
  icon: "🗃️",
  description: "Single- and two-dimensional arrays, traversal, maximum and minimum, linear and binary search, bubble and selection sort, matrices and address calculation.",
  lessons: [
    {
      slug: "c11-isc-arrays-one-d",
      title: "Single-Dimensional Arrays and Linear Search",
      summary: "Declaring, creating and initialising arrays, the length field, default values, traversal for total, maximum and minimum, linear search and the address of an element.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🚆",
          caption: "A train has numbered coaches: S1, S2, S3 and so on. Every coach is the same kind of thing, they stand side by side, and you find one by its number. An array stores values the same way.",
        },
        {
          type: "text",
          md: "An **array** is a collection of a fixed number of values of the **same type**, stored in consecutive memory locations under one name. Each value is an **element**, reached by its **index** (subscript) written in square brackets. In Java the first index is **0** and the last is **length − 1**.\n\nAn array is a **structured (composite) data type** and in Java it is an **object**: the array variable holds a reference to it.",
        },
        {
          type: "table",
          headers: ["Step", "Code", "What it does"],
          rows: [
            ["Declare", "`int[] m;`", "makes a reference variable; no array exists yet"],
            ["Create", "`m = new int[5];`", "creates 5 int elements, all set to 0"],
            ["Both together", "`int[] m = new int[5];`", "declare and create in one line"],
            ["Initialise", "`int[] m = {72, 85, 64, 91, 58};`", "size is fixed at 5 by the list"],
            ["Size", "`m.length`", "number of elements (a field, no brackets)"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Marks.java",
          code: java`public class Marks
{
    public static void main(String[] args)
    {
        int[] m = {72, 85, 64, 91, 58};
        int sum = 0, max = m[0], min = m[0];
        for (int i = 0; i < m.length; i++)
        {
            sum += m[i];
            if (m[i] > max)
                max = m[i];
            if (m[i] < min)
                min = m[i];
        }
        System.out.println("Total = " + sum);
        System.out.println("Average = " + (double) sum / m.length);
        System.out.println("Highest = " + max + ", Lowest = " + min);

        double[] d = new double[3];
        boolean[] f = new boolean[2];
        String[] s = new String[2];
        System.out.println(d[0] + " " + f[1] + " " + s[0]);
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Total = 370`\n`Average = 74.0`\n`Highest = 91, Lowest = 58`\n`0.0 false null`\n\nThe loop visits every element once: this is **traversal**. Starting `max` and `min` at `m[0]` (not at 0) makes the code correct even when all marks are negative or all are large. The last line shows **default values** of a new array: 0 for `int`, 0.0 for `double`, `false` for `boolean`, `'\\u0000'` for `char`, and `null` for objects such as `String`.",
        },
        {
          type: "mistake",
          wrong: "An array of 5 elements has indexes 1 to 5, so the loop should be `for (int i = 1; i <= m.length; i++)`.",
          right: "Indexes run from **0 to length − 1**. The correct loop is `for (int i = 0; i < m.length; i++)`. Using `m[5]` on a 5-element array throws an `ArrayIndexOutOfBoundsException` at run time.",
          why: "We count from 1 in daily life, and roll numbers start at 1. Java counts the offset from the first element, and the first element is 0 steps away from the start.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "For `int[] a = new int[8];` which is the index of the last element?",
              options: ["7", "8", "9", "0"],
              answer: 0,
              explain: "Indexes go from 0 to length − 1 = 7.",
            },
          ],
        },
        {
          type: "text",
          md: "**Linear search** looks for a value (the **key**) by checking the elements one by one from the start. It stops when it finds the key or reaches the end. It works on **unsorted** data. In the worst case it makes **n** comparisons for n elements.",
        },
        {
          type: "code",
          lang: "java",
          caption: "LinearSearch.java",
          code: java`public class LinearSearch
{
    // returns the index of the first match, or -1 if key is absent
    static int search(int[] a, int key)
    {
        for (int i = 0; i < a.length; i++)
            if (a[i] == key)
                return i;
        return -1;
    }

    public static void main(String[] args)
    {
        int[] roll = {14, 7, 22, 9, 30, 7};
        System.out.println(search(roll, 7));
        System.out.println(search(roll, 25));
    }
}`,
        },
        {
          type: "text",
          md: t`Output: ${"`1`"} then ${"`-1`"}. The method returns at the **first** 7 (index 1) and never reaches the second one at index 5.

**Address of an element.** Elements are stored one after another, so if the first element is at base address $B$, each element takes $W$ bytes, and the lowest index is $L_B$, the address of element $A[i]$ is:`,
        },
        {
          type: "formula",
          tex: t`\text{Address}(A[i]) = B + W \times (i - L_B)`,
          caption: "Single-dimensional array; the number of elements is U − L + 1 for index range L to U.",
        },
        {
          type: "example",
          title: "Address calculation",
          problem: "An array A[10 … 40] stores 2-byte elements. The base address is 1500. Find the address of A[25] and the number of elements.",
          steps: [
            t`$B = 1500$, $W = 2$, $L_B = 10$, $i = 25$.`,
            t`$\text{Address} = 1500 + 2 \times (25 - 10) = 1500 + 30 = 1530$.`,
            t`Number of elements $= 40 - 10 + 1 = 31$.`,
          ],
          answer: "Address of A[25] = 1530; the array has 31 elements.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What is the default value of each element after `char[] c = new char[3];`?",
            emoji: "🔣",
            options: ["The space character ' '", "The null character '\\u0000' (code 0)", "null", "The digit '0'"],
            answer: 1,
            trap: 0,
            explain: "A new char array is filled with the character whose code is 0, written '\\u0000'. It prints as nothing visible, which is why it is often mistaken for a space (code 32).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Write `a.length` for arrays and `s.length()` for Strings: mixing them up is a common deduction. In address questions, write the formula first, then substitute; the method mark is given even if the arithmetic slips.",
        },
        {
          type: "keypoints",
          items: [
            "An array holds a fixed number of same-type elements in consecutive locations; indexes run 0 to length − 1.",
            "`length` is a field of every array; a new array gets default values (0, 0.0, false, '\\u0000', null).",
            "Start max and min at the first element, then traverse the rest.",
            "Linear search checks elements one by one, works on unsorted data and needs up to n comparisons.",
            "Address(A[i]) = B + W × (i − L).",
          ],
        },
      ],
      flashcards: [
        { front: "Array", back: "A fixed-size collection of elements of the same type, stored in consecutive locations and reached by index." },
        { front: "First and last index of an array of size n", back: "0 and n − 1." },
        { front: "`a.length` vs `s.length()`", back: "`length` is a field of an array; `length()` is a method of String." },
        { front: "Default values of a new array", back: "int 0, double 0.0, boolean false, char '\\u0000', objects null." },
        { front: "ArrayIndexOutOfBoundsException", back: "The run-time exception thrown when an index is below 0 or ≥ length." },
        { front: "Linear search", back: "Compare the key with each element in turn; works on unsorted data; at most n comparisons." },
        { front: "Address of A[i] (1-D)", back: "B + W × (i − L), where B = base address, W = element size, L = lower bound." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement creates an array of 10 doubles?",
          options: ["`double[] d = new double[10];`", "`double d = new double[10];`", "`double[] d = new double(10);`", "`double[10] d;`"],
          answer: 0,
          explain: "The variable must be an array type `double[]`, and the size goes in square brackets after `new double`.",
        },
        {
          kind: "numeric",
          q: "`int[] p = {3, 9, 4, 1};` What is `p[p.length - 1] + p[1]`?",
          answer: 10,
          explain: "p.length − 1 = 3, so p[3] = 1; p[1] = 9; 1 + 9 = 10.",
        },
        {
          kind: "truefalse",
          q: "Linear search can only be used when the array is sorted.",
          answer: false,
          explain: "Linear search checks every element in turn, so the order does not matter. It is binary search that needs sorted data.",
        },
        {
          kind: "numeric",
          q: "An array B[5 … 54] has 4-byte elements and base address 2000. What is the address of B[20]?",
          answer: 2060,
          explain: "2000 + 4 × (20 − 5) = 2000 + 60 = 2060.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Accessing `a[a.length]` throws an ___ at run time.",
          answer: ["ArrayIndexOutOfBoundsException"],
          explain: "The last valid index is length − 1, so index length is out of bounds.",
        },
        {
          kind: "mcq",
          q: "What does `search(roll, 9)` return for `roll = {14, 7, 22, 9, 30, 7}` in LinearSearch.java?",
          options: ["3", "4", "9", "-1"],
          answer: 0,
          explain: "9 is the fourth element, at index 3.",
        },
        {
          kind: "mcq",
          q: "Why does Marks.java start `max` at `m[0]` instead of 0?",
          options: ["So that it works even if every value is negative", "Because Java does not allow int max = 0", "To make the loop run faster", "Because m[0] is always the largest"],
          answer: 0,
          explain: "If all values were negative, a max starting at 0 would wrongly stay 0. Starting at a real element is always safe.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-arrays-sort-search",
      title: "Sorting and Binary Search",
      summary: "Bubble sort and selection sort traced pass by pass, binary search on a sorted array, and how the techniques compare.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "📚",
          caption: "Finding a word in a dictionary is quick because the words are in order: you open the middle, see which half the word is in, and repeat. Sorting first makes searching fast.",
        },
        {
          type: "text",
          md: "**Sorting** arranges the elements in ascending (or descending) order.\n\n**Bubble sort** compares each pair of **adjacent** elements and swaps them if they are in the wrong order. After pass 1 the largest element has \"bubbled\" to the last position; after pass 2 the second largest is in place, and so on. For n elements, n − 1 passes are enough.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Bubble.java",
          code: java`public class Bubble
{
    public static void main(String[] args)
    {
        int[] a = {29, 10, 14, 37, 13};
        int n = a.length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - 1 - i; j++)
            {
                if (a[j] > a[j + 1])
                {
                    int tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
                }
            }
            System.out.print("Pass " + (i + 1) + ":");
            for (int k = 0; k < n; k++)
                System.out.print(" " + a[k]);
            System.out.println();
        }
    }
}`,
        },
        {
          type: "example",
          title: "Tracing bubble sort",
          problem: "Show the array after each pass of Bubble.java for {29, 10, 14, 37, 13}.",
          steps: [
            "Pass 1: swap 29/10, swap 29/14, keep 29/37, swap 37/13 → `10 14 29 13 37`. 37 is now in place.",
            "Pass 2 (inner loop stops one earlier): keep 10/14, keep 14/29, swap 29/13 → `10 14 13 29 37`.",
            "Pass 3: keep 10/14, swap 14/13 → `10 13 14 29 37`.",
            "Pass 4: no swaps → `10 13 14 29 37`.",
          ],
          answer: "Pass 1: 10 14 29 13 37\nPass 2: 10 14 13 29 37\nPass 3: 10 13 14 29 37\nPass 4: 10 13 14 29 37",
        },
        {
          type: "text",
          md: "**Selection sort** finds the **smallest** element in the unsorted part and swaps it into the first unsorted position. It makes at most one swap per pass.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Selection.java",
          code: java`public class Selection
{
    public static void main(String[] args)
    {
        int[] a = {29, 10, 14, 37, 13};
        for (int i = 0; i < a.length - 1; i++)
        {
            int min = i;
            for (int j = i + 1; j < a.length; j++)
                if (a[j] < a[min])
                    min = j;
            int tmp = a[i];
            a[i] = a[min];
            a[min] = tmp;
            System.out.print("Pass " + (i + 1) + ":");
            for (int k = 0; k < a.length; k++)
                System.out.print(" " + a[k]);
            System.out.println();
        }
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Pass 1: 10 29 14 37 13`\n`Pass 2: 10 13 14 37 29`\n`Pass 3: 10 13 14 37 29`\n`Pass 4: 10 13 14 29 37`\n\nIn pass 3 the smallest of {14, 37, 29} is already in position 2, so it is swapped with itself and nothing changes.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "After pass 1 of bubble sort (ascending), which element is certainly in its final place?",
              options: ["The largest, at the last index", "The smallest, at index 0", "The middle element", "None"],
              answer: 0,
              explain: "Each pass carries the largest remaining element to the end. Selection sort is the one that fixes the smallest first.",
            },
          ],
        },
        {
          type: "text",
          md: "**Binary search** works only on a **sorted** array. Compare the key with the middle element `mid = (lo + hi) / 2`. If equal, stop. If the key is larger, search the right half (`lo = mid + 1`); if smaller, the left half (`hi = mid - 1`). Each step halves the range, so about log₂ n comparisons are enough: at most 10 for 1000 elements.",
        },
        {
          type: "code",
          lang: "java",
          caption: "BinarySearch.java",
          code: java`public class BinarySearch
{
    static int search(int[] a, int key)
    {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi)
        {
            int mid = (lo + hi) / 2;
            System.out.println("lo=" + lo + " hi=" + hi + " mid=" + mid);
            if (a[mid] == key)
                return mid;
            else if (a[mid] < key)
                lo = mid + 1;
            else
                hi = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args)
    {
        int[] a = {5, 12, 18, 23, 37, 41, 56, 62, 78};
        System.out.println("56 at " + search(a, 56));
        System.out.println("20 at " + search(a, 20));
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`lo=0 hi=8 mid=4`\n`lo=5 hi=8 mid=6`\n`56 at 6`\n`lo=0 hi=8 mid=4`\n`lo=0 hi=3 mid=1`\n`lo=2 hi=3 mid=2`\n`lo=3 hi=3 mid=3`\n`20 at -1`\n\nFor 20 the range shrinks until `lo` (4) passes `hi` (3); the loop ends and −1 means \"not found\".",
        },
        {
          type: "mistake",
          wrong: "Binary search is always better than linear search, so use it on any array.",
          right: "Binary search gives correct answers **only on sorted data**. On an unsorted array it can miss a value that is present. For a small or unsorted list, linear search is the right choice.",
          why: "Binary search throws away half the array based on one comparison. That is only safe if order guarantees the key cannot be in the discarded half.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which technique does each statement describe?",
            groups: ["Bubble sort", "Selection sort", "Binary search"],
            items: [
              { text: "Swaps adjacent elements that are out of order", group: 0, hint: "Neighbours are compared." },
              { text: "Largest element reaches the end after pass 1", group: 0, hint: "It bubbles to the end." },
              { text: "At most one swap in each pass", group: 1, hint: "It swaps only the minimum into place." },
              { text: "Smallest remaining element is placed at the front", group: 1, hint: "It selects the minimum." },
              { text: "Needs the array to be sorted first", group: 2, hint: "Halving only works on ordered data." },
              { text: "Compares the key with the middle element", group: 2, hint: "mid = (lo + hi) / 2." },
            ],
            explain: "Bubble sort swaps neighbours; selection sort selects the minimum and swaps once per pass; binary search halves a sorted range.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Questions often ask for the array \"after the second pass\" of a sort. Write each pass on a new line. **Insertion sort** (taking each element and inserting it into its place in the already-sorted left part) may also be asked; know how it differs from the two above.",
        },
        {
          type: "keypoints",
          items: [
            "Bubble sort: compare and swap neighbours; n − 1 passes; largest goes to the end each pass.",
            "Selection sort: find the minimum of the unsorted part and swap it into place; one swap per pass.",
            "Binary search needs a sorted array; mid = (lo + hi) / 2; stop when found or lo > hi.",
            "Binary search needs about log₂ n comparisons; linear search up to n.",
          ],
        },
      ],
      flashcards: [
        { front: "Bubble sort", back: "Repeatedly compare adjacent elements and swap if out of order; the largest moves to the end each pass." },
        { front: "Selection sort", back: "Each pass finds the smallest element of the unsorted part and swaps it into the first unsorted position." },
        { front: "Insertion sort", back: "Takes the next element and inserts it into its correct place in the sorted left part." },
        { front: "Binary search: condition", back: "The array must be sorted." },
        { front: "Binary search: mid", back: "mid = (lo + hi) / 2; move lo = mid + 1 or hi = mid − 1." },
        { front: "Passes needed to sort n elements (bubble or selection)", back: "n − 1." },
        { front: "Maximum comparisons in binary search of 1000 elements", back: "10, since 2¹⁰ = 1024 ≥ 1000." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is {5, 1, 4, 2} after the first pass of bubble sort (ascending)?",
          options: ["1 4 2 5", "1 5 4 2", "1 2 4 5", "1 4 5 2"],
          answer: 0,
          explain: "Swap 5/1 → 1 5 4 2; swap 5/4 → 1 4 5 2; swap 5/2 → 1 4 2 5.",
        },
        {
          kind: "mcq",
          q: "What is {5, 1, 4, 2} after the first pass of selection sort (ascending)?",
          options: ["1 5 4 2", "1 4 2 5", "1 2 4 5", "5 1 4 2"],
          answer: 0,
          explain: "The minimum 1 is swapped with the first element 5.",
        },
        {
          kind: "numeric",
          q: "In BinarySearch.java, how many times is the `lo=... hi=... mid=...` line printed when searching for 78?",
          answer: 4,
          explain: "mid = 4 (37), lo = 5; mid = 6 (56), lo = 7; mid = 7 (62), lo = 8; mid = 8 (78) found. Four probes.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Binary search (code as in BinarySearch.java) on the unsorted array {40, 10, 30, 20} finds the key 40.",
          answer: false,
          explain: "mid = 1 (10 < 40) so lo = 2; mid = 2 (30 < 40) so lo = 3; mid = 3 (20 < 40) so lo = 4 > hi. It returns −1 although 40 is at index 0, because the data is not sorted.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "In bubble sort the inner loop runs `j < n - 1 - i` because after pass i the last ___ elements are already in place.",
          answer: ["i", "i elements"],
          explain: "Each finished pass fixes one more element at the end, so it need not be compared again.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the steps of one round of binary search.",
          items: ["Find mid = (lo + hi) / 2", "Compare a[mid] with the key", "If equal, return mid", "Otherwise move lo or hi to discard half"],
          explain: "Find the middle, compare, stop if found, otherwise halve the range and repeat.",
        },
        {
          kind: "multi",
          q: "Which statements are true?",
          options: ["Selection sort makes at most one swap per pass", "Bubble sort compares only adjacent elements", "Binary search works on unsorted data", "Both sorts need n − 1 passes for n elements"],
          answers: [0, 1, 3],
          explain: "Binary search needs sorted data; the other three are correct.",
        },
      ],
    },
    {
      slug: "c11-isc-arrays-two-d",
      title: "Two-Dimensional Arrays and Address Calculation",
      summary: "Matrices as arrays of arrays, row and column traversal, row sums and transpose, and row-major and column-major address calculation.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🎭",
          caption: "Seats in a theatre are named by row and seat number: row C, seat 7. A two-dimensional array names each element by a row index and a column index in the same way.",
        },
        {
          type: "text",
          md: "A **two-dimensional (double-dimensional) array** stores data in **rows** and **columns**, like a matrix. `int[][] m = new int[2][3];` makes 2 rows and 3 columns: 6 elements, `m[0][0]` to `m[1][2]`.\n\nIn Java a 2-D array is an **array of arrays**: `m.length` is the number of rows and `m[i].length` is the number of columns in row i. We traverse it with **nested loops**: the outer loop for rows, the inner loop for columns.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Matrix.java",
          code: java`public class Matrix
{
    public static void main(String[] args)
    {
        int[][] m = { {3, 8, 1}, {4, 6, 5} };
        System.out.println("Rows = " + m.length + ", Columns = " + m[0].length);
        for (int i = 0; i < m.length; i++)
        {
            int rowSum = 0;
            for (int j = 0; j < m[i].length; j++)
            {
                System.out.print(m[i][j] + " ");
                rowSum += m[i][j];
            }
            System.out.println("| " + rowSum);
        }

        int[][] tr = new int[m[0].length][m.length];
        for (int i = 0; i < m.length; i++)
            for (int j = 0; j < m[0].length; j++)
                tr[j][i] = m[i][j];

        System.out.println("Transpose:");
        for (int i = 0; i < tr.length; i++)
        {
            for (int j = 0; j < tr[i].length; j++)
                System.out.print(tr[i][j] + " ");
            System.out.println();
        }
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Rows = 2, Columns = 3`\n`3 8 1 | 12`\n`4 6 5 | 15`\n`Transpose:`\n`3 4 `\n`8 6 `\n`1 5 `\n\nThe **transpose** turns rows into columns: element `m[i][j]` goes to `tr[j][i]`, so a 2 × 3 matrix becomes 3 × 2.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many elements does `int[][] x = new int[4][6];` have?",
              answer: 24,
              explain: "4 rows × 6 columns = 24 elements.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "`m[1][2]` in `int[][] m = { {3, 8, 1}, {4, 6, 5} }` means the element in row 2, column 1, so it is 6.",
          right: "The **first** index is the row and the **second** is the column, both from 0. `m[1][2]` is row 1 (the second row), column 2 (the third column): **5**.",
          why: "In maths we often say \"column then row\" for coordinates (x, y). Java arrays always use [row][column], and both counts start from 0.",
        },
        {
          type: "text",
          md: "**Storing a matrix in memory.** Memory is a single line of locations, so a 2-D array must be laid out in one of two orders:\n\n- **Row-major**: all of row 0, then all of row 1, and so on (C and C++ store arrays this way).\n- **Column-major**: all of column 0, then all of column 1, and so on (FORTRAN uses this).\n\nFor an array A[Lr … Ur][Lc … Uc] with M rows, N columns, base address B and element size W:",
        },
        {
          type: "formula",
          tex: t`\text{Row-major: } A[i][j] = B + W\left[\,N\,(i - L_r) + (j - L_c)\,\right]`,
          caption: "N = number of columns = Uc − Lc + 1",
        },
        {
          type: "formula",
          tex: t`\text{Column-major: } A[i][j] = B + W\left[\,(i - L_r) + M\,(j - L_c)\,\right]`,
          caption: "M = number of rows = Ur − Lr + 1",
        },
        {
          type: "example",
          title: "Row-major and column-major address",
          problem: "An array A[1 … 10][1 … 15] stores 2-byte elements from base address 2000. Find the address of A[4][7] in row-major and in column-major order.",
          steps: [
            t`M = 10 − 1 + 1 = 10 rows, N = 15 − 1 + 1 = 15 columns, W = 2, B = 2000, Lr = Lc = 1.`,
            t`Row-major: $2000 + 2[15(4 - 1) + (7 - 1)] = 2000 + 2[45 + 6] = 2000 + 102 = 2102$.`,
            t`Column-major: $2000 + 2[(4 - 1) + 10(7 - 1)] = 2000 + 2[3 + 60] = 2000 + 126 = 2126$.`,
          ],
          answer: "Row-major: 2102. Column-major: 2126.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the elements of a 2 × 2 matrix in column-major storage.",
            items: ["A[0][0]", "A[1][0]", "A[0][1]", "A[1][1]"],
            explain: "Column-major stores the whole first column (rows 0 and 1) before moving to the second column. Row-major would give A[0][0], A[0][1], A[1][0], A[1][1].",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In address questions, first write M and N, then write which formula you are using. Read the question carefully: if it gives the address of some other element instead of the base address, substitute that element first to find B. Check that the lower bounds (often 1, sometimes negative) are subtracted correctly.",
        },
        {
          type: "keypoints",
          items: [
            "A 2-D array is an array of arrays: `m.length` rows, `m[i].length` columns.",
            "Use nested loops: outer for rows, inner for columns. Index is always [row][column].",
            "Transpose: `tr[j][i] = m[i][j]`; an M × N matrix becomes N × M.",
            "Row-major: B + W[N(i − Lr) + (j − Lc)]. Column-major: B + W[(i − Lr) + M(j − Lc)].",
          ],
        },
      ],
      flashcards: [
        { front: "2-D array", back: "Data in rows and columns; in Java an array of arrays, accessed as m[row][column]." },
        { front: "Number of rows / columns of `int[][] m`", back: "`m.length` rows; `m[0].length` columns (for a rectangular array)." },
        { front: "Transpose of a matrix", back: "Rows become columns: tr[j][i] = m[i][j]." },
        { front: "Row-major order", back: "Elements stored row by row: all of row 0, then row 1, …" },
        { front: "Column-major order", back: "Elements stored column by column: all of column 0, then column 1, …" },
        { front: "Row-major address formula", back: "B + W[N(i − Lr) + (j − Lc)], N = number of columns." },
        { front: "Column-major address formula", back: "B + W[(i − Lr) + M(j − Lc)], M = number of rows." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "For `int[][] m = { {3, 8, 1}, {4, 6, 5} };` what is `m[0][2] + m[1][0]`?",
          options: ["5", "13", "9", "7"],
          answer: 0,
          explain: "m[0][2] = 1 and m[1][0] = 4; 1 + 4 = 5.",
        },
        {
          kind: "numeric",
          q: "A[1 … 5][1 … 4], 4-byte elements, base 1000. Address of A[3][2] in row-major order?",
          answer: 1036,
          explain: "N = 4. 1000 + 4[4(3 − 1) + (2 − 1)] = 1000 + 4 × 9 = 1036.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "Same array A[1 … 5][1 … 4], 4-byte elements, base 1000. Address of A[3][2] in column-major order?",
          answer: 1028,
          explain: "M = 5. 1000 + 4[(3 − 1) + 5(2 − 1)] = 1000 + 4 × 7 = 1028.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "The transpose of a 3 × 5 matrix is a 5 × 3 matrix.",
          answer: true,
          explain: "Rows and columns swap roles.",
        },
        {
          kind: "fill",
          q: "In `int[][] m = new int[3][7];`, `m[2].length` is ___.",
          answer: ["7"],
          explain: "Each row has 7 columns.",
        },
        {
          kind: "mcq",
          q: "In which order is a 2-D array stored if all elements of the first column come first?",
          options: ["Column-major", "Row-major", "Ascending", "Random"],
          answer: 0,
          explain: "Storing column by column is column-major order.",
        },
        {
          kind: "mcq",
          q: "Which loop header prints every element of row i correctly?",
          options: ["`for (int j = 0; j < m[i].length; j++)`", "`for (int j = 0; j <= m[i].length; j++)`", "`for (int j = 1; j <= m.length; j++)`", "`for (int j = 0; j < m.length(); j++)`"],
          answer: 0,
          explain: "Columns in row i go from 0 to m[i].length − 1. `<=` overruns; `m.length` counts rows; `length()` is not an array method.",
        },
      ],
    },
    {
      slug: "c11-isc-arrays-board-practice",
      title: "Board Practice: Arrays",
      summary: "Mixed ISC-style questions: output tracing with array aliasing, address calculation with a negative lower bound, and a matrix program for diagonal sums and symmetry.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Practise the three things ISC asks most on arrays: predicting output, calculating addresses, and writing a complete array program.",
        },
        {
          type: "code",
          lang: "java",
          caption: "ArrTrace.java",
          code: java`public class ArrTrace
{
    public static void main(String[] args)
    {
        int[] a = {2, 4, 6, 8, 10};
        for (int i = 1; i < a.length; i++)
            a[i] = a[i] + a[i - 1];
        for (int i = 0; i < a.length; i++)
            System.out.print(a[i] + " ");
        System.out.println();
        int[] b = a;
        b[0] = 100;
        System.out.println(a[0] + " " + a[a.length - 1] / 5);
    }
}`,
        },
        {
          type: "example",
          title: "Output question",
          problem: "Give the output of ArrTrace.java.",
          steps: [
            "Each element becomes itself plus the new value of the one before it (a running total): 2, 2 + 4 = 6, 6 + 6 = 12, 12 + 8 = 20, 20 + 10 = 30.",
            "`int[] b = a;` copies the reference, not the array. `b` and `a` are two names for one array, so `b[0] = 100` also changes `a[0]`.",
            "`a[a.length - 1] / 5` = 30 / 5 = 6.",
          ],
          answer: "2 6 12 20 30\n100 6",
        },
        {
          type: "mistake",
          wrong: "`int[] b = a;` makes b a separate copy of the array, so changing b leaves a unchanged.",
          right: "It copies only the **reference**: both names point to the same array. To make a real copy, create a new array and copy each element in a loop (or use `a.clone()`).",
          why: "For primitives, `=` copies the value, so it feels the same for arrays. An array variable's value is an address, and copying an address gives a second way to reach the same object.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "In ArrTrace.java, what would `a[2] + b[3]` be at the end?",
              answer: 32,
              explain: "a and b are the same array: a[2] = 12 and b[3] = 20, total 32.",
            },
          ],
        },
        {
          type: "example",
          title: "Address with a negative lower bound",
          problem: "An array P[−5 … 20] stores 4-byte elements with base address 1000. Find the number of elements and the address of P[3].",
          steps: [
            "Number of elements = U − L + 1 = 20 − (−5) + 1 = 26.",
            t`Address $= 1000 + 4 \times (3 - (-5)) = 1000 + 4 \times 8 = 1032$.`,
          ],
          answer: "26 elements; address of P[3] = 1032.",
        },
        {
          type: "text",
          md: "**Program to write.** A square matrix has a **left (main) diagonal** `m[i][i]` and a **right diagonal** `m[i][n - 1 - i]`. It is **symmetric** if `m[i][j] == m[j][i]` for every i and j, that is, if it equals its transpose. Write a class with a method for each and test it on a 3 × 3 matrix.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Diagonal.java",
          code: java`public class Diagonal
{
    int[][] m;
    int n;

    Diagonal(int[][] data)
    {
        m = data;
        n = data.length;
    }

    // sum of the left diagonal m[i][i]
    int leftSum()
    {
        int s = 0;
        for (int i = 0; i < n; i++)
            s += m[i][i];
        return s;
    }

    // sum of the right diagonal m[i][n-1-i]
    int rightSum()
    {
        int s = 0;
        for (int i = 0; i < n; i++)
            s += m[i][n - 1 - i];
        return s;
    }

    // true if the matrix equals its transpose
    boolean isSymmetric()
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (m[i][j] != m[j][i])
                    return false;
        return true;
    }

    public static void main(String[] args)
    {
        int[][] a = { {2, 7, 5}, {7, 4, 1}, {5, 1, 9} };
        Diagonal ob = new Diagonal(a);
        System.out.println("Left diagonal sum = " + ob.leftSum());
        System.out.println("Right diagonal sum = " + ob.rightSum());
        System.out.println("Symmetric: " + ob.isSymmetric());
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Left diagonal sum = 15`\n`Right diagonal sum = 14`\n`Symmetric: true`\n\nLeft: 2 + 4 + 9 = 15. Right: m[0][2] + m[1][1] + m[2][0] = 5 + 4 + 5 = 14. Each pair across the main diagonal matches (7 and 7, 5 and 5, 1 and 1), so the matrix is symmetric.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each expression to its meaning in an n × n matrix m.",
            pairs: [
              ["m[i][i]", "Element on the left diagonal"],
              ["m[i][n - 1 - i]", "Element on the right diagonal"],
              ["m[j][i]", "Element in the transpose at position [i][j]"],
              ["m[0][j]", "Element in the first row"],
            ],
            explain: "Same row and column index gives the left diagonal; row + column = n − 1 gives the right diagonal; swapping the indexes gives the transpose.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In the practical exam, matrix questions usually ask you to accept M and N, reject invalid sizes with a message, then print the original and the result matrix. Print matrices row by row with spaces so the examiner can check them, and test with at least one 3 × 3 and one non-square input.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "For an odd-sized square matrix, the centre element is on both diagonals.",
              answer: true,
              explain: "For n = 3 the centre is m[1][1]: i = 1 and n − 1 − i = 1, so it lies on both diagonals.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Array assignment copies the reference; both names then share one array.",
            "Number of elements = U − L + 1; take care when L is negative.",
            "Left diagonal m[i][i]; right diagonal m[i][n − 1 − i]; symmetric if m[i][j] = m[j][i].",
            "Split matrix programs into small methods and print matrices row by row.",
          ],
        },
      ],
      flashcards: [
        { front: "Effect of `int[] b = a;`", back: "b refers to the same array as a; no copy is made." },
        { front: "How to really copy an array", back: "Create a new array of the same length and copy each element in a loop (or use clone())." },
        { front: "Left diagonal of n × n matrix", back: "Elements m[i][i] for i = 0 to n − 1." },
        { front: "Right diagonal of n × n matrix", back: "Elements m[i][n − 1 − i]." },
        { front: "Symmetric matrix", back: "A square matrix equal to its transpose: m[i][j] = m[j][i] for all i, j." },
        { front: "Number of elements in A[L … U]", back: "U − L + 1." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many elements does Q[−10 … 10] have?",
          answer: 21,
          explain: "10 − (−10) + 1 = 21.",
        },
        {
          kind: "numeric",
          q: "For the matrix { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }, what is the right diagonal sum?",
          answer: 15,
          explain: "3 + 5 + 7 = 15.",
        },
        {
          kind: "truefalse",
          q: "The matrix { {1, 2}, {3, 1} } is symmetric.",
          answer: false,
          explain: "m[0][1] = 2 but m[1][0] = 3.",
        },
        {
          kind: "mcq",
          q: "`int[] x = {1, 2, 3}; int[] y = x; y[1] = 9;` What does `x[1]` print?",
          options: ["9", "2", "1", "0"],
          answer: 0,
          explain: "x and y refer to the same array.",
        },
        {
          kind: "numeric",
          q: "An array R[−3 … 12] of 8-byte elements has base address 500. Address of R[0]?",
          answer: 524,
          explain: "500 + 8 × (0 − (−3)) = 500 + 24 = 524.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is printed by `int[] a = {1, 2, 3, 4}; for (int i = 1; i < 4; i++) a[i] += a[i-1]; System.out.println(a[3]);`?",
          options: ["10", "7", "4", "6"],
          answer: 0,
          explain: "Running totals: 1, 3, 6, 10.",
        },
        {
          kind: "fill",
          q: "A square matrix that equals its own transpose is called ___.",
          answer: ["symmetric", "a symmetric matrix"],
          explain: "Symmetric means m[i][j] = m[j][i] for all i, j.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Strings in Java                                                  */
/* ------------------------------------------------------------------ */
const strings: Topic = {
  slug: "c11-isc-cs-strings",
  title: "Strings in Java",
  icon: "🔤",
  description: "The String class and its methods, immutability, comparing strings, Character methods, processing strings character by character and word by word, and StringBuffer.",
  lessons: [
    {
      slug: "c11-isc-strings-methods",
      title: "The String Class and Its Methods",
      summary: "Creating strings, immutability, length, charAt, indexOf, substring, case and replace methods, and comparing strings with equals and compareTo.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🪪",
          caption: "A railway ticket prints your name, PNR and station codes. Programs handle such text all day: checking a PNR, cutting out the station code, turning a name into capitals. In Java, text is a String.",
        },
        {
          type: "text",
          md: "A **String** is a sequence of characters. In Java it is an object of the class `String` in the package `java.lang`, which is imported automatically. A string literal is written in double quotes: `\"Quest Academy\"`.\n\nCharacters are numbered from **0**, like array elements. `s.length()` (a **method**, with brackets) gives the number of characters, and the last character is at `s.length() - 1`.\n\nStrings are **immutable**: once a String object is made, its characters can never change. Methods such as `toUpperCase()` or `replace()` do not change the original; they **return a new String**.",
        },
        {
          type: "code",
          lang: "java",
          caption: "StrMethods.java",
          code: java`public class StrMethods
{
    public static void main(String[] args)
    {
        String s = "  Quest Academy  ";
        String t = s.trim();
        System.out.println("[" + t + "] " + t.length());
        System.out.println(t.charAt(0) + " " + t.charAt(t.length() - 1));
        System.out.println(t.indexOf('e') + " " + t.lastIndexOf('e') + " " + t.indexOf("Acad"));
        System.out.println(t.substring(6) + "|" + t.substring(0, 5));
        System.out.println(t.toUpperCase() + " " + t.replace('a', '@'));
        System.out.println(t.indexOf('z'));
    }
}`,
        },
        {
          type: "example",
          title: "Dry run of StrMethods",
          problem: "Give the output of StrMethods.java.",
          steps: [
            "`trim()` removes the leading and trailing spaces: t = \"Quest Academy\", 13 characters. Positions: Q0 u1 e2 s3 t4, space 5, A6 c7 a8 d9 e10 m11 y12.",
            "`charAt(0)` is Q and `charAt(12)` is y. The first 'e' is at 2, the last at 10, and \"Acad\" starts at 6.",
            "`substring(6)` runs from 6 to the end: \"Academy\". `substring(0, 5)` takes positions 0 to **4** (the end index is not included): \"Quest\".",
            "`replace('a', '@')` changes only lowercase a: \"Quest Ac@demy\". `indexOf('z')` returns −1 because z is absent.",
          ],
          answer: "[Quest Academy] 13\nQ y\n2 10 6\nAcademy|Quest\nQUEST ACADEMY Quest Ac@demy\n-1",
        },
        {
          type: "table",
          headers: ["Method", "Returns", "Example (s = \"Monsoon\")"],
          rows: [
            ["`length()`", "int: number of characters", "7"],
            ["`charAt(i)`", "char at index i", "`charAt(3)` → 's'"],
            ["`indexOf(x)` / `lastIndexOf(x)`", "int: first / last position of char or string x, −1 if absent", "`indexOf('o')` → 1, `lastIndexOf('o')` → 5"],
            ["`substring(a)` / `substring(a, b)`", "String from a to the end / from a to b − 1", "`substring(3)` → \"soon\", `substring(0, 3)` → \"Mon\""],
            ["`toUpperCase()` / `toLowerCase()`", "new String in upper / lower case", "\"MONSOON\""],
            ["`replace(c1, c2)`", "new String with every c1 replaced by c2", "`replace('o', '0')` → \"M0ns00n\""],
            ["`trim()`", "new String without leading and trailing spaces", "-"],
            ["`concat(t)`", "new String: s followed by t", "`concat(\"!\")` → \"Monsoon!\""],
            ["`startsWith(t)` / `endsWith(t)`", "boolean", "`endsWith(\"on\")` → true"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "`\"Bengaluru\".substring(2, 5)` returns \"___\".",
              answer: ["nga"],
              explain: "Positions 2, 3, 4 are n, g, a. The end index 5 is not included.",
            },
          ],
        },
        {
          type: "text",
          md: "**Comparing strings.** `==` compares **references**: it asks whether two variables point to the very same object. To compare the **characters**, use `equals()` (case matters) or `equalsIgnoreCase()`.\n\n`a.compareTo(b)` compares in dictionary (lexicographic) order using character codes. It returns **0** if equal, a **negative** number if a comes first, a **positive** number if a comes later. At the first position where they differ, the result is the difference of the two character codes; if one string is a prefix of the other, it is the difference of the lengths.",
        },
        {
          type: "code",
          lang: "java",
          caption: "StrCompare.java",
          code: java`public class StrCompare
{
    public static void main(String[] args)
    {
        String a = "Delhi";
        String b = "Delhi";
        String c = new String("Delhi");
        System.out.println(a == b);
        System.out.println(a == c);
        System.out.println(a.equals(c));
        System.out.println("delhi".equalsIgnoreCase(a));
        System.out.println("Apple".compareTo("Banana"));
        System.out.println("cat".compareTo("car"));
        System.out.println("pen".compareTo("pencil"));
        System.out.println("Zebra".compareTo("apple"));
        String s = "Hi";
        s.concat(" there");
        System.out.println(s);
        s = s.concat(" there");
        System.out.println(s);
    }
}`,
        },
        {
          type: "text",
          md: "Output: `true`, `false`, `true`, `true`, `-1`, `2`, `-3`, `-7`, `Hi`, `Hi there`.\n\nIdentical literals share one object in the **string pool**, so `a == b` is true, but `new String(...)` always makes a separate object, so `a == c` is false. 'A' − 'B' = −1; 't' − 'r' = 2; \"pen\" is a prefix of \"pencil\", so 3 − 6 = −3; 'Z' (90) − 'a' (97) = −7, so every capital letter comes before every small letter. The line `s.concat(\" there\");` makes a new String and throws it away; s changes only when the result is assigned back.",
        },
        {
          type: "mistake",
          wrong: "`if (name == \"Ravi\")` is the right way to check whether the user typed Ravi.",
          right: "Use `name.equals(\"Ravi\")` (or `equalsIgnoreCase`). `==` checks whether both sides are the same object, and a String read from input is a different object from the literal even when the characters match.",
          why: "With two literals `==` often happens to give true because of the string pool, so the bug hides in small tests and appears only with real input.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does `\"Mango\".compareTo(\"mango\")` return?",
            emoji: "🥭",
            options: ["0, because the words are the same", "-32", "32", "1"],
            answer: 1,
            trap: 0,
            explain: "compareTo is case-sensitive. 'M' is 77 and 'm' is 109, so the result is 77 − 109 = −32. Use `compareToIgnoreCase` to ignore case.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Output questions love `substring(a, b)` (end not included), `indexOf` returning −1, and `compareTo` values. Write the index of each character above the string before you answer. State the return type when asked about a method: `charAt` returns `char`, `indexOf` returns `int`, `equals` returns `boolean`.",
        },
        {
          type: "keypoints",
          items: [
            "A String is an immutable object of `java.lang.String`; methods return new strings.",
            "Indexes run 0 to `length() - 1`; `substring(a, b)` gives a to b − 1.",
            "`indexOf` / `lastIndexOf` return −1 when not found.",
            "Compare text with `equals` / `equalsIgnoreCase`, never `==`.",
            "`compareTo` returns 0, negative or positive: code difference at the first mismatch, or length difference for a prefix.",
          ],
        },
      ],
      flashcards: [
        { front: "Immutable String", back: "A String's characters can never change; methods like toUpperCase() return a new String." },
        { front: "`substring(a, b)`", back: "Characters from index a to b − 1 (end index excluded)." },
        { front: "`indexOf` when not found", back: "Returns −1." },
        { front: "`==` vs `equals()` for Strings", back: "`==` compares references (same object?); `equals()` compares the characters." },
        { front: "`compareTo` result", back: "0 if equal; negative if the caller comes first in dictionary order; positive if it comes later." },
        { front: "`\"pen\".compareTo(\"pencil\")`", back: "−3: one is a prefix of the other, so the result is 3 − 6." },
        { front: "String pool", back: "Area where identical string literals share one object." },
        { front: "`trim()`", back: "Returns a copy without leading and trailing spaces." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `\"Kolkata\".indexOf('k')` return?",
          options: ["3", "0", "-1", "4"],
          answer: 0,
          explain: "The capital K at 0 does not match lowercase 'k'. The first lowercase k is at index 3.",
        },
        {
          kind: "numeric",
          q: "What does `\"Ball\".compareTo(\"Bat\")` return?",
          answer: -8,
          explain: "First difference at index 2: 'l' (108) − 't' (116) = −8.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "After `String s = \"abc\"; s.toUpperCase();` the variable s holds \"ABC\".",
          answer: false,
          explain: "Strings are immutable and the new String was not assigned back, so s is still \"abc\".",
        },
        {
          kind: "fill",
          q: "`\"Programming\".lastIndexOf('m')` returns ___.",
          answer: ["7"],
          explain: "P0 r1 o2 g3 r4 a5 m6 m7 i8 n9 g10: the last m is at 7.",
        },
        {
          kind: "mcq",
          q: "Which expression correctly tests whether String x has the same characters as \"YES\", ignoring case?",
          options: ["`x.equalsIgnoreCase(\"YES\")`", "`x == \"YES\"`", "`x.compareTo(\"YES\") == 1`", "`x.equals(\"yes\")`"],
          answer: 0,
          explain: "equalsIgnoreCase compares characters and ignores case. == compares references; compareTo == 1 is not equality; equals(\"yes\") is case-sensitive.",
        },
        {
          kind: "mcq",
          q: "What is the return type of `charAt()`?",
          options: ["char", "String", "int", "boolean"],
          answer: 0,
          explain: "charAt returns a single character, of type char.",
        },
        {
          kind: "multi",
          q: "Which calls return a value of type boolean?",
          options: ["`s.equals(t)`", "`s.endsWith(\"a\")`", "`s.compareTo(t)`", "`s.length()`"],
          answers: [0, 1],
          explain: "compareTo and length return int.",
        },
      ],
    },
    {
      slug: "c11-isc-strings-processing",
      title: "Character Methods, String Processing and StringBuffer",
      summary: "Character class tests, counting and classifying characters, extracting words, palindromes, and the mutable StringBuffer class.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🔍",
          caption: "A proofreader at a newspaper in Chennai reads a line letter by letter: is this a capital, a digit, a space? Most string programs do exactly that with a loop and charAt().",
        },
        {
          type: "text",
          md: "The wrapper class **`Character`** (in `java.lang`) has static methods to test and convert one `char`:\n\n- `Character.isLetter(ch)`, `isDigit(ch)`, `isLetterOrDigit(ch)`, `isWhitespace(ch)`\n- `Character.isUpperCase(ch)`, `isLowerCase(ch)`\n- `Character.toUpperCase(ch)`, `toLowerCase(ch)` return a converted `char`\n\nThe usual pattern: loop `i` from 0 to `s.length() - 1`, take `char ch = s.charAt(i);`, test it, and count or build a result.",
        },
        {
          type: "code",
          lang: "java",
          caption: "CharCount.java",
          code: java`public class CharCount
{
    public static void main(String[] args)
    {
        String s = "Chandrayaan-3 landed in 2023!";
        int up = 0, low = 0, dig = 0, sp = 0, other = 0, vow = 0;
        for (int i = 0; i < s.length(); i++)
        {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch))
                up++;
            else if (Character.isLowerCase(ch))
                low++;
            else if (Character.isDigit(ch))
                dig++;
            else if (Character.isWhitespace(ch))
                sp++;
            else
                other++;
            if ("AEIOUaeiou".indexOf(ch) >= 0)
                vow++;
        }
        System.out.println("Upper " + up + ", Lower " + low + ", Digits " + dig);
        System.out.println("Spaces " + sp + ", Others " + other + ", Vowels " + vow);
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Upper 1, Lower 18, Digits 5`\n`Spaces 3, Others 2, Vowels 7`\n\nThe five counts add up to 29, the length of the string. The vowel test uses a neat trick: `\"AEIOUaeiou\".indexOf(ch)` is −1 only if ch is not a vowel.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What does `Character.toUpperCase('7')` return?",
              options: ["'7'", "Compile-time error", "-1", "' '"],
              answer: 0,
              explain: "Characters that are not letters are returned unchanged.",
            },
          ],
        },
        {
          type: "text",
          md: "**Extracting words.** To work word by word, add a space to the end of the sentence, then build each word letter by letter. Every time a space is met, the word so far is complete: process it and start a new empty word. (The class `StringTokenizer`, covered in the input/output chapter, can also split a sentence into words.)\n\nA **palindrome** reads the same both ways: MADAM, LEVEL, 121. Compare the first and last characters, move inwards, and stop at the first mismatch.",
        },
        {
          type: "code",
          lang: "java",
          caption: "WordWork.java",
          code: java`public class WordWork
{
    static boolean isPalindrome(String w)
    {
        w = w.toUpperCase();
        int i = 0, j = w.length() - 1;
        while (i < j)
        {
            if (w.charAt(i) != w.charAt(j))
                return false;
            i++;
            j--;
        }
        return true;
    }

    public static void main(String[] args)
    {
        String sen = "Madam Malayalam is a Level language";
        sen = sen + " ";
        String word = "";
        for (int i = 0; i < sen.length(); i++)
        {
            char ch = sen.charAt(i);
            if (ch != ' ')
                word = word + ch;
            else
            {
                if (isPalindrome(word))
                    System.out.print(word + " ");
                word = "";
            }
        }
        System.out.println();
    }
}`,
        },
        {
          type: "example",
          title: "Tracing WordWork",
          problem: "Which words does WordWork.java print, and why is a space added to `sen`?",
          steps: [
            "The words are Madam, Malayalam, is, a, Level, language. Each is changed to capitals inside `isPalindrome`, so case does not matter: MADAM, MALAYALAM, LEVEL read the same both ways.",
            "\"is\" fails at the first comparison (I ≠ S); \"a\" has i = j = 0, the loop never runs, and it returns true; \"language\" fails (L ≠ E).",
            "Without the extra space, the last word \"language\" would never be followed by a space and would not be checked.",
          ],
          answer: "Madam Malayalam a Level",
        },
        {
          type: "mistake",
          wrong: "Building a result with `r = r + ch;` changes the String r in place, so Strings are not really immutable.",
          right: "Each `r + ch` creates a **new** String object and r is re-pointed to it; the old object is unchanged and later discarded. For heavy editing, **StringBuffer** (or StringBuilder) changes one object in place.",
          why: "The variable name stays the same, so it looks like the same string grew. What changed is which object the variable refers to.",
        },
        {
          type: "text",
          md: "**StringBuffer** is a **mutable** sequence of characters: its methods change the same object. Useful methods: `append(x)` adds at the end, `insert(i, x)` inserts at index i, `reverse()`, `setCharAt(i, ch)`, `deleteCharAt(i)`, `length()`, and `toString()` to get a String back. Note that `equals` on two StringBuffers does **not** compare their contents; convert with `toString()` first.",
        },
        {
          type: "code",
          lang: "java",
          caption: "BufferDemo.java",
          code: java`public class BufferDemo
{
    public static void main(String[] args)
    {
        StringBuffer sb = new StringBuffer("India");
        sb.append(" 2047");
        System.out.println(sb);
        sb.insert(0, "Viksit ");
        System.out.println(sb);
        sb.reverse();
        System.out.println(sb);
        sb.reverse();
        sb.setCharAt(0, 'v');
        sb.deleteCharAt(sb.length() - 1);
        System.out.println(sb + " " + sb.length());
    }
}`,
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the call change the object it is called on?",
            groups: ["Changes the object", "Returns a new object; original unchanged"],
            items: [
              { text: "sb.append(\"!\") on a StringBuffer", group: 0, hint: "StringBuffer is mutable." },
              { text: "sb.reverse() on a StringBuffer", group: 0, hint: "It reverses the same buffer." },
              { text: "sb.setCharAt(0, 'X')", group: 0, hint: "Changes one character in place." },
              { text: "s.toUpperCase() on a String", group: 1, hint: "Strings are immutable." },
              { text: "s.replace('a', 'b') on a String", group: 1, hint: "A new String is returned." },
              { text: "s.concat(\"!\") on a String", group: 1, hint: "Assign it back to keep it." },
            ],
            explain: "StringBuffer methods edit the same object. String methods never change the original; they return a new String that you must store.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "BufferDemo prints `India 2047`, `Viksit India 2047`, `7402 aidnI tiskiV`, then `viksit India 204 16`. In string programs for the practical exam, convert the input to one case first when the question says case does not matter, and state in a comment that a space is appended to catch the last word.",
        },
        {
          type: "keypoints",
          items: [
            "Character methods (isLetter, isDigit, isUpperCase, toUpperCase…) test and convert one char.",
            "Loop with `charAt(i)` from 0 to `length() - 1` to count or build results.",
            "Append a space to a sentence so the last word is processed too.",
            "Palindrome check: compare from both ends towards the middle.",
            "StringBuffer is mutable: append, insert, reverse, setCharAt, deleteCharAt change the same object.",
          ],
        },
      ],
      flashcards: [
        { front: "`Character.isLetterOrDigit(ch)`", back: "true if ch is a letter or a digit." },
        { front: "`Character.toUpperCase('b')`", back: "'B'; a non-letter is returned unchanged." },
        { front: "Palindrome", back: "A word or number that reads the same forwards and backwards, e.g. MALAYALAM." },
        { front: "Why append a space before extracting words?", back: "So that the last word is also followed by a space and gets processed." },
        { front: "StringBuffer", back: "A mutable sequence of characters whose methods change the same object." },
        { front: "`sb.insert(2, \"xy\")`", back: "Inserts \"xy\" at index 2 of the StringBuffer." },
        { front: "How to test a vowel quickly", back: "`\"AEIOUaeiou\".indexOf(ch) >= 0`" },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many vowels are in \"ISRO Bengaluru\" (count both cases)?",
          answer: 6,
          explain: "I, O, e, a, u, u: 6 vowels.",
        },
        {
          kind: "mcq",
          q: "What is printed? `StringBuffer b = new StringBuffer(\"code\"); b.reverse(); b.append(1); System.out.println(b);`",
          options: ["edoc1", "code1", "1edoc", "edoc"],
          answer: 0,
          explain: "reverse gives \"edoc\" in the same buffer; append(1) adds \"1\" at the end.",
        },
        {
          kind: "truefalse",
          q: "`Character.isLetter(' ')` returns true.",
          answer: false,
          explain: "A space is whitespace, not a letter.",
        },
        {
          kind: "fill",
          q: "To remove the character at index 3 of a StringBuffer sb, write sb.___(3).",
          answer: ["deleteCharAt"],
          explain: "`deleteCharAt(i)` removes the character at index i.",
        },
        {
          kind: "multi",
          q: "Using isPalindrome from WordWork.java, which return true?",
          options: ["\"Noon\"", "\"Refer\"", "\"Kayaks\"", "\"x\""],
          answers: [0, 1, 3],
          explain: "NOON, REFER and X read the same both ways. KAYAKS does not (K ≠ S).",
        },
        {
          kind: "mcq",
          q: "Why does `sen = sen + \" \";` appear before the word loop in WordWork.java?",
          options: ["So the last word is followed by a space and is checked", "To make the sentence a palindrome", "Because Strings must end with a space", "To count the spaces"],
          answer: 0,
          explain: "A word is processed only when a space is met; the extra space completes the last word.",
        },
        {
          kind: "order",
          q: "Order the steps of the palindrome check.",
          items: ["Convert the word to one case", "Set i = 0 and j = length − 1", "While i < j compare charAt(i) and charAt(j)", "Return false at the first mismatch, else move i up and j down", "Return true after the loop"],
          explain: "Normalise case, start at both ends, compare inwards, stop on a mismatch, and return true if none is found.",
        },
      ],
    },
    {
      slug: "c11-isc-strings-board-practice",
      title: "Board Practice: Strings in Java",
      summary: "Mixed ISC-style questions: string method output, the char-plus-char trap, and a Caesar cipher program.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Practise ISC string questions: predict the output of method chains, spot type traps, and write a complete string program.",
        },
        {
          type: "code",
          lang: "java",
          caption: "StrTrace.java",
          code: java`public class StrTrace
{
    public static void main(String[] args)
    {
        String s = "COMPUTER";
        System.out.println(s.substring(2, 5).toLowerCase());
        System.out.println(s.indexOf('T') + s.length());
        System.out.println(s.charAt(3) + s.charAt(4));
        System.out.println("" + s.charAt(3) + s.charAt(4));
        System.out.println(s.replace("UTE", "ute").compareTo(s));
    }
}`,
        },
        {
          type: "example",
          title: "Output question",
          problem: "Give the output of StrTrace.java.",
          steps: [
            "C0 O1 M2 P3 U4 T5 E6 R7. `substring(2, 5)` = \"MPU\", in lower case \"mpu\".",
            "`indexOf('T')` = 5, length 8, so 5 + 8 = 13.",
            "`charAt(3) + charAt(4)` adds two chars, which is **int** addition: 'P' (80) + 'U' (85) = 165.",
            "Starting with `\"\" +` makes it string joining: \"PU\".",
            "\"COMPuteR\" vs \"COMPUTER\": first difference at index 4, 'u' (117) − 'U' (85) = 32.",
          ],
          answer: "mpu\n13\n165\nPU\n32",
        },
        {
          type: "mistake",
          wrong: "`s.charAt(3) + s.charAt(4)` joins the two characters, so it prints PU.",
          right: "Two `char` values are promoted to `int` and **added**. Only when one operand of `+` is a String does `+` join text. Write `\"\" + s.charAt(3) + s.charAt(4)` to get \"PU\".",
          why: "With Strings, + always joins, so learners expect characters to behave the same. But char is a numeric type in Java, holding a character code.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What does `System.out.println('A' + 2);` print?",
              answer: 67,
              explain: "'A' is 65, and char + int is int: 67. To get the letter C, cast: `(char) ('A' + 2)`.",
            },
          ],
        },
        {
          type: "text",
          md: "**Program to write.** In a **Caesar cipher** each letter is shifted k places along the alphabet, wrapping from Z back to A. Case is kept and other characters are left as they are. Write a method `String encode(String s, int k)` and show that shifting by 3 and then by 23 (26 − 3) gives back the original.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Caesar.java",
          code: java`public class Caesar
{
    // shifts every letter k places, wrapping round; other characters unchanged
    static String encode(String s, int k)
    {
        String r = "";
        for (int i = 0; i < s.length(); i++)
        {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch))
                ch = (char) ('A' + (ch - 'A' + k) % 26);
            else if (Character.isLowerCase(ch))
                ch = (char) ('a' + (ch - 'a' + k) % 26);
            r = r + ch;
        }
        return r;
    }

    public static void main(String[] args)
    {
        String e = encode("Meet at Gateway, 5 PM!", 3);
        System.out.println(e);
        System.out.println(encode(e, 23));
    }
}`,
        },
        {
          type: "example",
          title: "How the wrap-around works",
          problem: "Show how `encode` turns 'y' into 'b' for k = 3, and give the program's output.",
          steps: [
            "`ch - 'a'` gives the letter's position: 'y' − 'a' = 24.",
            "Add the shift and wrap with % 26: (24 + 3) % 26 = 27 % 26 = 1.",
            "Add back to 'a' and cast: (char) ('a' + 1) = 'b'.",
            "Applying this to every letter of \"Meet at Gateway, 5 PM!\" gives the first line; shifting by 23 more brings each letter round a full 26 to the original.",
          ],
          answer: "Phhw dw Jdwhzdb, 5 SP!\nMeet at Gateway, 5 PM!",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each expression to what it prints.",
            pairs: [
              ["\"ab\".charAt(0) + 1", "98"],
              ["(char) ('a' + 1)", "b"],
              ["\"ab\" + 1", "ab1"],
              ["\"ab\".length() + 1", "3"],
            ],
            explain: "char + int is int (97 + 1 = 98); casting back gives 'b'; String + anything joins; length() is an int.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Practical-exam string problems often say \"the sentence is terminated by '.', '?' or '!'\". Check the last character first and print INVALID INPUT if it is wrong, then remove it before processing words. Show the sample output exactly in the format the question gives.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "Using Caesar.java, `encode(\"Zoo\", 1)` returns \"___\".",
              answer: ["App"],
              explain: "Z wraps to A, and each o becomes p.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Write index numbers above the string before tracing substring and indexOf.",
            "char + char (or char + int) is integer addition; a String operand makes + join text.",
            "Letter arithmetic: position = ch − 'a'; shift with % 26; cast back with (char).",
            "Validate input and match the sample output format in practical programs.",
          ],
        },
      ],
      flashcards: [
        { front: "`'A' + 'B'` in Java", back: "131 (65 + 66), an int." },
        { front: "`\"\" + 'A' + 'B'`", back: "\"AB\": the empty String makes + join." },
        { front: "Position of a lowercase letter ch in the alphabet (0-based)", back: "`ch - 'a'`" },
        { front: "Caesar cipher", back: "Each letter is shifted k places, wrapping Z to A: new = (pos + k) % 26." },
        { front: "Decode a Caesar shift of k", back: "Shift again by 26 − k (or subtract k with wrap-around)." },
        { front: "`(char) 66`", back: "'B'." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `\"MANGO\".substring(1, 4).toLowerCase()` return?",
          options: ["\"ang\"", "\"ango\"", "\"man\"", "\"angO\""],
          answer: 0,
          explain: "Indexes 1 to 3: A, N, G → \"ANG\" → \"ang\".",
        },
        {
          kind: "numeric",
          q: "What does `System.out.println('a' + 'b');` print?",
          answer: 195,
          explain: "97 + 98 = 195.",
        },
        {
          kind: "fill",
          q: "Using Caesar.java, `encode(\"cat\", 2)` returns \"___\".",
          answer: ["ecv"],
          explain: "c → e, a → c, t → v.",
        },
        {
          kind: "truefalse",
          q: "In Caesar.java, digits and punctuation are changed by the shift.",
          answer: false,
          explain: "Only upper- and lowercase letters are shifted; other characters are copied unchanged.",
        },
        {
          kind: "numeric",
          q: "What does `\"apple\".compareTo(\"apply\")` return?",
          answer: -20,
          explain: "First difference at index 4: 'e' (101) − 'y' (121) = −20.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What does `\"COMPUTER\".indexOf(\"PUT\") + \"COMPUTER\".indexOf('X')` print?",
          options: ["2", "3", "-1", "4"],
          answer: 0,
          explain: "\"PUT\" starts at 3; 'X' is absent (−1); 3 + (−1) = 2.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which statement prints the character two places after 'x' in the alphabet, wrapping round?",
          options: ["`System.out.println((char) ('a' + ('x' - 'a' + 2) % 26));`", "`System.out.println('x' + 2);`", "`System.out.println((char) ('x' + 2));`", "`System.out.println(\"x\" + 2);`"],
          answer: 0,
          explain: "('x' − 'a' + 2) % 26 = 25 → 'z'. Option 2 prints 122; option 3 also gives 'z' here but would not wrap for 'y' or 'z'; option 4 prints x2.",
          difficulty: 3,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Recursion                                                        */
/* ------------------------------------------------------------------ */
const recursion: Topic = {
  slug: "c11-isc-cs-recursion",
  title: "Recursion",
  icon: "🪆",
  description: "Recursive methods, base and recursive cases, the call stack, factorial and Fibonacci, recursion on numbers and strings, GCD, base conversion and recursive binary search.",
  lessons: [
    {
      slug: "c11-isc-recursion-basics",
      title: "What Recursion Is: Base Case, Recursive Case and the Call Stack",
      summary: "How a method can call itself, why it needs a base case, how calls wind onto the stack and unwind, with factorial and Fibonacci.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🪆",
          caption: "Open a set of wooden nesting dolls from Channapatna: inside each doll is a smaller doll of the same kind, until you reach the tiny solid one that does not open. Recursion solves a problem by solving a smaller copy of the same problem, until a smallest case that is answered directly.",
        },
        {
          type: "text",
          md: "A method is **recursive** if it **calls itself**. Every correct recursive method has two parts:\n\n- a **base case** (terminating condition): a simple input whose answer is given directly, with no further call;\n- a **recursive case**: the method calls itself on a **smaller** input that moves closer to the base case.\n\nFactorial fits this naturally: 0! = 1! = 1 (base case), and n! = n × (n − 1)! for n > 1 (recursive case).",
        },
        {
          type: "code",
          lang: "java",
          caption: "Fact.java",
          code: java`public class Fact
{
    static long fact(int n)
    {
        if (n <= 1)                 // base case
            return 1;
        return n * fact(n - 1);     // recursive case
    }

    static int fib(int n)
    {
        if (n <= 1)                 // fib(0) = 0, fib(1) = 1
            return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args)
    {
        System.out.println(fact(5));
        System.out.println(fact(20));
        for (int i = 0; i < 10; i++)
            System.out.print(fib(i) + " ");
        System.out.println();
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`120`\n`2432902008176640000`\n`0 1 1 2 3 5 8 13 21 34`\n\n`fact` returns `long` because 20! is far larger than the biggest `int` (about 2.1 × 10⁹).",
        },
        {
          type: "example",
          title: "Tracing fact(4)",
          problem: "Show how `fact(4)` is evaluated.",
          steps: [
            "**Winding:** fact(4) needs 4 × fact(3); fact(3) needs 3 × fact(2); fact(2) needs 2 × fact(1). Each call waits, unfinished, on the **call stack**.",
            "fact(1) hits the base case and returns 1 without calling again.",
            "**Unwinding:** fact(2) = 2 × 1 = 2; fact(3) = 3 × 2 = 6; fact(4) = 4 × 6 = 24. The calls finish in the reverse order in which they started.",
          ],
          answer: "fact(4) = 24, after 4 calls in total.",
        },
        {
          type: "text",
          md: "**The call stack.** Each call gets its own **stack frame** holding its own copy of the parameters and local variables. A new call is **pushed** on top; when it returns, it is **popped** and the caller continues from where it left off. This is last-in, first-out (LIFO).\n\nStatements written **after** the recursive call therefore run during unwinding, in reverse order. The next program shows this.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Wind.java",
          code: java`public class Wind
{
    static void show(int n)
    {
        if (n == 0)
            return;
        System.out.println("down " + n);
        show(n - 1);
        System.out.println("up " + n);
    }

    public static void main(String[] args)
    {
        show(3);
    }
}`,
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the output lines of Wind.java in order.",
            items: ["down 3", "down 2", "down 1", "up 1", "up 2", "up 3"],
            explain: "Lines before the call print while winding (3, 2, 1). Lines after it print while unwinding, newest call first (1, 2, 3).",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is the base case in `fib`?",
              options: ["n <= 1, returning n", "n == 10", "fib(n - 1) + fib(n - 2)", "There is none"],
              answer: 0,
              explain: "For n = 0 or 1 the method returns n directly without calling itself.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "If I forget the base case, the method just returns 0 at the end.",
          right: "Without a base case (or if the input never reaches it, like calling `fact(n + 1)`), the method keeps calling itself until the call stack is full and Java throws a **StackOverflowError** at run time.",
          why: "Loops without an end simply run forever, so learners expect a similar harmless stop. Each recursive call uses new stack memory, and that memory runs out.",
        },
        {
          type: "table",
          headers: ["Point", "Recursion", "Iteration (loop)"],
          rows: [
            ["How it repeats", "the method calls itself", "a for / while loop"],
            ["Stops when", "the base case is reached", "the loop condition becomes false"],
            ["Memory", "a stack frame for every pending call", "the same few variables"],
            ["Code", "often shorter and closer to the definition", "often longer but faster"],
            ["Error if it never stops", "StackOverflowError", "infinite loop"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "When asked \"what is the base case\" write the exact condition and what it returns. When tracing, draw a column of calls going down (winding) and write each return value going back up (unwinding). Note that the recursive `fib` repeats work: fib(5) computes fib(2) three times.",
        },
        {
          type: "keypoints",
          items: [
            "A recursive method calls itself on a smaller input.",
            "Base case: answered directly, stops the recursion. Recursive case: moves towards the base case.",
            "Calls wind onto the call stack and unwind in reverse (LIFO) order.",
            "Code after the recursive call runs during unwinding.",
            "A missing or unreachable base case causes StackOverflowError.",
          ],
        },
      ],
      flashcards: [
        { front: "Recursion", back: "A technique in which a method calls itself to solve a smaller instance of the same problem." },
        { front: "Base case", back: "The condition under which a recursive method returns a value directly, without calling itself." },
        { front: "Recursive case", back: "The part where the method calls itself with an input closer to the base case." },
        { front: "Call stack", back: "The memory area where each pending method call keeps its frame of parameters and local variables; LIFO." },
        { front: "Winding and unwinding", back: "Winding: calls pile up until the base case. Unwinding: calls return one by one in reverse order." },
        { front: "StackOverflowError", back: "Run-time error when recursion goes too deep, usually because the base case is missing or never reached." },
        { front: "fact(n) definition", back: "1 if n ≤ 1; otherwise n × fact(n − 1)." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many times is `fact` called in total when evaluating `fact(6)`?",
          answer: 6,
          explain: "fact(6), fact(5), fact(4), fact(3), fact(2), fact(1): six calls.",
        },
        {
          kind: "numeric",
          q: "What is fib(11) using the definition in Fact.java?",
          answer: 89,
          explain: "Continue 0 1 1 2 3 5 8 13 21 34 55 89: fib(10) = 55 and fib(11) = 89.",
        },
        {
          kind: "truefalse",
          q: "Each recursive call has its own copy of the method's parameters and local variables.",
          answer: true,
          explain: "Every call gets its own stack frame.",
        },
        {
          kind: "mcq",
          q: "What happens when `static int f(int n) { return n + f(n - 1); }` is called as f(3)?",
          options: ["StackOverflowError at run time", "It returns 6", "Compile-time error", "It returns 0"],
          answer: 0,
          explain: "There is no base case, so it calls f(2), f(1), f(0), f(−1)… until the stack overflows. The code itself compiles.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The call stack works on the ___ principle (write the four-letter short form).",
          answer: ["LIFO"],
          explain: "Last in, first out: the newest call finishes first.",
        },
        {
          kind: "mcq",
          q: "If Wind.java printed only the line after the call (\"up n\"), what would `show(3)` print?",
          options: ["up 1, up 2, up 3", "up 3, up 2, up 1", "up 3 only", "nothing"],
          answer: 0,
          explain: "Statements after the recursive call run during unwinding, so the deepest call (n = 1) prints first.",
        },
        {
          kind: "multi",
          q: "Which are true of a correct recursive method?",
          options: ["It has at least one base case", "Each recursive call moves closer to a base case", "It must return an int", "It always runs faster than a loop"],
          answers: [0, 1],
          explain: "Any return type is allowed, and recursion is usually slower than a loop because of the call overhead.",
        },
      ],
    },
    {
      slug: "c11-isc-recursion-numbers-strings",
      title: "Recursion on Numbers and Strings",
      summary: "Recursive sum of digits, power, GCD by Euclid's method, conversion to another base, reversing a string, and recursive binary search.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🔢",
          caption: "To add the digits of 4729, add the last digit 9 to the digit-sum of 472. That smaller problem is the same kind of problem, so the method can hand it to itself.",
        },
        {
          type: "text",
          md: "To write a recursive method, ask two questions:\n\n1. **What is the smallest input**, whose answer I know at once? That is the base case (n == 0, an empty string, b == 0…).\n2. **How does the answer for n use the answer for a smaller input?** That is the recursive case.\n\nFor numbers, the smaller input is usually `n / 10` (drop the last digit) or `n - 1`. For strings, it is usually `s.substring(1)` (drop the first character).",
        },
        {
          type: "code",
          lang: "java",
          caption: "RecNum.java",
          code: java`public class RecNum
{
    static int sumDigits(int n)
    {
        if (n == 0)
            return 0;
        return n % 10 + sumDigits(n / 10);
    }

    static int gcd(int a, int b)
    {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    static long power(int x, int p)
    {
        if (p == 0)
            return 1;
        return x * power(x, p - 1);
    }

    // n > 0; b from 2 to 16
    static String toBase(int n, int b)
    {
        if (n == 0)
            return "";
        return toBase(n / b, b) + "0123456789ABCDEF".charAt(n % b);
    }

    static String rev(String s)
    {
        if (s.length() <= 1)
            return s;
        return rev(s.substring(1)) + s.charAt(0);
    }

    public static void main(String[] args)
    {
        System.out.println(sumDigits(4729));
        System.out.println(gcd(84, 36));
        System.out.println(power(2, 10));
        System.out.println(toBase(45, 2) + " " + toBase(100, 8) + " " + toBase(255, 16));
        System.out.println(rev("ISRO"));
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`22`\n`12`\n`1024`\n`101101 144 FF`\n`ORSI`\n\n**Euclid's GCD** uses the fact that gcd(a, b) = gcd(b, a % b), and gcd(a, 0) = a: gcd(84, 36) → gcd(36, 12) → gcd(12, 0) = 12.",
        },
        {
          type: "example",
          title: "Tracing toBase(45, 2)",
          problem: "Show how `toBase(45, 2)` builds \"101101\".",
          steps: [
            "Winding: toBase(45) calls toBase(22), which calls toBase(11), then toBase(5), toBase(2), toBase(1), toBase(0).",
            "toBase(0) is the base case and returns \"\".",
            "Unwinding, each call adds its remainder **after** the deeper result: toBase(1) = \"\" + 1, toBase(2) = \"1\" + 0, toBase(5) = \"10\" + 1, toBase(11) = \"101\" + 1, toBase(22) = \"1011\" + 0, toBase(45) = \"10110\" + 1.",
            "The remainders come out in reverse order of calculation, which is exactly the order in which binary digits are written. Check: 32 + 8 + 4 + 1 = 45.",
          ],
          answer: "\"101101\"",
        },
        {
          type: "mistake",
          wrong: "In `toBase`, it does not matter whether I write `toBase(n / b, b) + digit` or `digit + toBase(n / b, b)`.",
          right: "The order decides the result. Putting the digit **after** the recursive call writes the last remainder last, giving 101101. Putting it **before** gives the digits reversed: 101101 happens to be a palindrome, but toBase(6, 2) would give \"011\" instead of \"110\".",
          why: "In maths, + on numbers is commutative, so order feels unimportant. On Strings, + joins text, and the position of the join decides whether a digit is written before or after the rest.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "Using RecNum.java, `toBase(10, 2)` returns \"___\".",
              answer: ["1010"],
              explain: "10 = 8 + 2, binary 1010.",
            },
          ],
        },
        {
          type: "text",
          md: "**Recursive binary search.** The halving idea is itself recursive: search the half that can contain the key. The range [lo, hi] is passed as parameters. The base cases are \"range empty\" (lo > hi, return −1) and \"found\" (a[mid] == key).",
        },
        {
          type: "code",
          lang: "java",
          caption: "RecSearch.java",
          code: java`public class RecSearch
{
    static int bsearch(int[] a, int key, int lo, int hi)
    {
        if (lo > hi)
            return -1;                         // not found
        int mid = (lo + hi) / 2;
        if (a[mid] == key)
            return mid;                        // found
        if (key < a[mid])
            return bsearch(a, key, lo, mid - 1);
        return bsearch(a, key, mid + 1, hi);
    }

    public static void main(String[] args)
    {
        int[] pin = {110001, 226001, 400001, 560001, 600001, 700001};
        System.out.println(bsearch(pin, 560001, 0, pin.length - 1));
        System.out.println(bsearch(pin, 500001, 0, pin.length - 1));
    }
}`,
        },
        {
          type: "text",
          md: "Output: `3` then `-1`. The array holds PIN codes of six cities in ascending order. For 560001: mid = 2 (400001 is smaller) → search [3, 5], mid = 4 (600001 is larger) → search [3, 3], mid = 3, found.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each recursive method to its base case.",
            pairs: [
              ["sumDigits(n)", "n == 0 returns 0"],
              ["gcd(a, b)", "b == 0 returns a"],
              ["power(x, p)", "p == 0 returns 1"],
              ["rev(s)", "length ≤ 1 returns s"],
              ["bsearch(a, key, lo, hi)", "lo > hi returns −1"],
            ],
            explain: "Each base case is the smallest input whose answer is known without any more calls.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "ISC questions often give a recursive method with blanks to fill. Fill the base case first (what stops it), then the recursive call (what gets smaller), then the combining step (how the results join). Check your answer with the smallest input by hand.",
        },
        {
          type: "keypoints",
          items: [
            "Base case = smallest input; recursive case = combine the answer of a smaller input.",
            "Numbers shrink with n / 10 or n − 1; strings shrink with substring(1).",
            "gcd(a, b) = gcd(b, a % b), gcd(a, 0) = a.",
            "In base conversion, adding the digit after the recursive call writes digits in the right order.",
            "Recursive binary search passes lo and hi as parameters; lo > hi means not found.",
          ],
        },
      ],
      flashcards: [
        { front: "Recursive sum of digits", back: "0 if n == 0; else n % 10 + sumDigits(n / 10)." },
        { front: "Euclid's GCD (recursive)", back: "gcd(a, 0) = a; gcd(a, b) = gcd(b, a % b)." },
        { front: "Recursive power", back: "power(x, 0) = 1; power(x, p) = x × power(x, p − 1)." },
        { front: "Recursive string reverse", back: "rev(s) = rev(s.substring(1)) + s.charAt(0); base: length ≤ 1." },
        { front: "Decimal to base b (recursive)", back: "toBase(n / b) + digit(n % b); base case n == 0 returns \"\"." },
        { front: "Base cases of recursive binary search", back: "lo > hi (not found, −1) and a[mid] == key (found)." },
        { front: "45 in binary", back: "101101." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "What does `gcd(48, 18)` return using RecNum.java?",
          answer: 6,
          explain: "gcd(48, 18) → gcd(18, 12) → gcd(12, 6) → gcd(6, 0) = 6.",
        },
        {
          kind: "numeric",
          q: "How many calls to gcd are made in total for `gcd(48, 18)`?",
          answer: 4,
          explain: "gcd(48,18), gcd(18,12), gcd(12,6), gcd(6,0): four calls.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "`toBase(26, 16)` returns \"___\".",
          answer: ["1A"],
          explain: "26 = 1 × 16 + 10, and digit 10 is A.",
        },
        {
          kind: "mcq",
          q: "What does `rev(\"abc\")` return?",
          options: ["\"cba\"", "\"abc\"", "\"bca\"", "\"cab\""],
          answer: 0,
          explain: "rev(\"abc\") = rev(\"bc\") + 'a' = (rev(\"c\") + 'b') + 'a' = \"cba\".",
        },
        {
          kind: "truefalse",
          q: "`toBase(0, 2)` from RecNum.java returns \"0\".",
          answer: false,
          explain: "n == 0 is the base case and returns the empty string \"\". That is why the method is meant for n > 0.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "In RecSearch.java, which call follows `bsearch(pin, 110001, 0, 5)`?",
          options: ["bsearch(pin, 110001, 0, 1)", "bsearch(pin, 110001, 3, 5)", "bsearch(pin, 110001, 0, 2)", "It returns 0 at once"],
          answer: 0,
          explain: "mid = 2 holds 400001, which is larger than the key, so the left half [0, mid − 1] = [0, 1] is searched.",
        },
        {
          kind: "numeric",
          q: "What does `sumDigits(90817)` return?",
          answer: 25,
          explain: "9 + 0 + 8 + 1 + 7 = 25.",
        },
      ],
    },
    {
      slug: "c11-isc-recursion-board-practice",
      title: "Board Practice: Recursion",
      summary: "Mixed ISC-style questions: tracing mystery recursive methods, the binary printer and Russian peasant multiplication, and writing a recursive palindrome check.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "ISC papers usually give a short recursive method and ask what it returns for a given input, and what it does in general. Trace carefully on paper, one call per line.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Mystery.java",
          code: java`public class Mystery
{
    static void print(int n)
    {
        if (n > 0)
        {
            print(n / 2);
            System.out.print(n % 2);
        }
    }

    static int f(int a, int b)
    {
        if (b == 0)
            return 0;
        if (b % 2 == 0)
            return f(a + a, b / 2);
        return f(a + a, b / 2) + a;
    }

    public static void main(String[] args)
    {
        print(13);
        System.out.println();
        System.out.println(f(5, 6));
        System.out.println(f(7, 9));
    }
}`,
        },
        {
          type: "example",
          title: "Tracing print(13)",
          problem: "What does `print(13)` print, and what does `print` do in general?",
          steps: [
            "print(13) calls print(6) before printing; print(6) calls print(3); print(3) calls print(1); print(1) calls print(0), which does nothing.",
            "Unwinding: print(1) prints 1 % 2 = 1; print(3) prints 1; print(6) prints 0; print(13) prints 1.",
            "In general, it prints the binary form of a positive n.",
          ],
          answer: "1101 (13 in binary).",
        },
        {
          type: "example",
          title: "Tracing f(5, 6)",
          problem: "Find `f(5, 6)` and `f(7, 9)`, and say what f computes.",
          steps: [
            "f(5, 6): b even → f(10, 3). b = 3 odd → f(20, 1) + 10. b = 1 odd → f(40, 0) + 20 = 0 + 20 = 20.",
            "Unwinding: f(20, 1) = 20, f(10, 3) = 20 + 10 = 30, f(5, 6) = 30.",
            "f(7, 9): odd → f(14, 4) + 7; f(14, 4) → f(28, 2) → f(56, 1) = f(112, 0) + 56 = 56. So f(7, 9) = 56 + 7 = 63.",
            "f doubles a and halves b, adding a whenever b is odd: this is the **Russian peasant method** of multiplication, f(a, b) = a × b for b ≥ 0.",
          ],
          answer: "f(5, 6) = 30 and f(7, 9) = 63; f returns a × b.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "Using Mystery.java, `print(10)` prints ___.",
              answer: ["1010"],
              explain: "10 in binary is 1010.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "In `print`, the digits come out in the order the remainders are calculated, so print(13) prints 1011.",
          right: "The remainders of 13, 6, 3 and 1 are 1, 0, 1, 1, but each is **printed** only after the deeper call finishes, so they appear deepest first: 1, 1, 0, 1, giving **1101**.",
          why: "The print statement is written after the call, so every call waits until all the deeper calls have printed. The order is reversed by the call stack.",
        },
        {
          type: "text",
          md: "**Program to write.** Write a recursive method `boolean isPal(String s, int i, int j)` that checks whether s reads the same between positions i and j, and use it to test words. Base case: if i ≥ j the part is empty or one character, so it is a palindrome. Recursive case: the ends must match and the inner part must be a palindrome.",
        },
        {
          type: "code",
          lang: "java",
          caption: "RecPal.java",
          code: java`public class RecPal
{
    // true if s reads the same from index i to index j
    static boolean isPal(String s, int i, int j)
    {
        if (i >= j)
            return true;
        if (s.charAt(i) != s.charAt(j))
            return false;
        return isPal(s, i + 1, j - 1);
    }

    public static void main(String[] args)
    {
        String[] words = {"RACECAR", "ROTOR", "ROBOT", "NOON", "Q"};
        for (int k = 0; k < words.length; k++)
        {
            String w = words[k];
            System.out.println(w + " : " + isPal(w, 0, w.length() - 1));
        }
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`RACECAR : true`\n`ROTOR : true`\n`ROBOT : false`\n`NOON : true`\n`Q : true`\n\nFor ROBOT, R ≠ T at once (index 0 and 4), so only one call is made.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "How many calls does `isPal(\"RACECAR\", 0, 6)` make in total?",
            emoji: "🏎️",
            options: ["3", "4", "7", "6"],
            answer: 1,
            trap: 2,
            explain: "Calls with (0,6), (1,5), (2,4), (3,3). The fourth has i ≥ j and returns true. Each call checks two characters, so a 7-letter word needs only 4 calls.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "When asked \"what does the method do\", give one sentence in general terms (\"prints n in binary\", \"returns a × b\"), not just the answer for the given input. Full marks need both the traced value and the general purpose.",
        },
        {
          type: "keypoints",
          items: [
            "Trace recursion one call per line: parameters going down, return values coming up.",
            "Output written after the call appears in reverse (unwinding) order.",
            "Doubling one argument and halving the other is the Russian peasant method of multiplication.",
            "A recursive palindrome check compares the two ends and recurses on the inside.",
          ],
        },
      ],
      flashcards: [
        { front: "What does `print(n)` with print(n/2) then print n%2 do?", back: "Prints n in binary." },
        { front: "Russian peasant multiplication", back: "Double a, halve b (integer division), add a when b is odd; the total is a × b." },
        { front: "Base case of recursive palindrome check", back: "i ≥ j: an empty or one-character part is a palindrome." },
        { front: "Recursive case of palindrome check", back: "s.charAt(i) == s.charAt(j) and isPal(s, i + 1, j − 1)." },
        { front: "What two things should an answer to \"what does this method do\" contain?", back: "The traced value for the given input and the general purpose of the method." },
        { front: "13 in binary", back: "1101." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "Using Mystery.java, what is f(6, 8)?",
          answer: 48,
          explain: "f returns a × b: 6 × 8 = 48. (f(12,4) → f(24,2) → f(48,1) = f(96,0) + 48 = 48.)",
        },
        {
          kind: "fill",
          q: "Using Mystery.java, `print(18)` prints ___.",
          answer: ["10010"],
          explain: "18 = 16 + 2, binary 10010.",
        },
        {
          kind: "truefalse",
          q: "`isPal(\"LEVEL\", 0, 4)` returns true.",
          answer: true,
          explain: "L = L, E = E, and the middle V alone is a palindrome.",
        },
        {
          kind: "numeric",
          q: "What does this return for m(5)? `static int m(int n) { if (n == 1) return 1; return n + m(n - 1); }`",
          answer: 15,
          explain: "5 + 4 + 3 + 2 + 1 = 15. It returns the sum of 1 to n.",
        },
        {
          kind: "mcq",
          q: "What does `static int c(int n) { if (n < 10) return 1; return 1 + c(n / 10); }` compute?",
          options: ["The number of digits of n", "The sum of digits of n", "The last digit of n", "n divided by 10"],
          answer: 0,
          explain: "Each call drops one digit and adds 1, until a single digit remains (counted as 1).",
        },
        {
          kind: "mcq",
          q: "What is printed by `static void p(int n) { if (n > 0) { System.out.print(n); p(n - 2); } }` for p(7)?",
          options: ["7531", "1357", "75310", "7531-1"],
          answer: 0,
          explain: "The print is before the call, so it prints while winding: 7, 5, 3, 1; p(-1) does nothing.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many calls does `isPal(\"ABCDCBA\", 0, 6)` make?",
          answer: 4,
          explain: "(0,6), (1,5), (2,4), (3,3): four calls.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. Basic Input/Output and Packages                                  */
/* ------------------------------------------------------------------ */
const inputOutput: Topic = {
  slug: "c11-isc-cs-io-packages",
  title: "Basic Input/Output and Packages",
  icon: "⌨️",
  description: "Reading input with Scanner and BufferedReader, tokens and whitespace, StringTokenizer, formatted output with printf, input/output exceptions, and Java packages.",
  lessons: [
    {
      slug: "c11-isc-io-scanner-output",
      title: "Input with Scanner and Formatted Output",
      summary: "Tokens and whitespace, the Scanner methods next, nextInt, nextDouble and nextLine, checking input with hasNextInt, and print, println and printf.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "⌨️",
          caption: "At a railway reservation counter the clerk types your name, age and station one after another, pressing space or Enter between them. A Java program reads keyboard input the same way: as separate pieces split by spaces and line breaks.",
        },
        {
          type: "text",
          md: "Keyboard input arrives as a **stream** of characters. **Whitespace** characters (space, tab, newline) separate it into **tokens**: the input `Priya 16` has two tokens, \"Priya\" and \"16\".\n\nThe class **`Scanner`** in the package `java.util` reads tokens and converts them to the type we ask for. We create one object attached to the standard input stream `System.in`:\n\n`Scanner sc = new Scanner(System.in);`",
        },
        {
          type: "table",
          headers: ["Method", "Reads", "Returns"],
          rows: [
            ["`next()`", "the next token (up to whitespace)", "String"],
            ["`nextInt()` / `nextLong()`", "the next token as a whole number", "int / long"],
            ["`nextDouble()` / `nextFloat()`", "the next token as a decimal number", "double / float"],
            ["`nextBoolean()`", "the token true or false", "boolean"],
            ["`nextLine()`", "everything up to the end of the current line (spaces included); the newline is used up but not returned", "String"],
            ["`hasNext()` / `hasNextInt()`", "only checks whether another token (an int token) is waiting", "boolean"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "ScanDemo.java",
          code: java`import java.util.Scanner;

public class ScanDemo
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name and age: ");
        String name = sc.next();
        int age = sc.nextInt();
        System.out.print("Fee per month: ");
        double fee = sc.nextDouble();
        sc.nextLine();                 // use up the rest of the line
        System.out.print("City: ");
        String city = sc.nextLine();
        System.out.println(name + " (" + age + ") from " + city);
        System.out.printf("Yearly fee: %.2f%n", fee * 12);
        System.out.printf("%-8s|%5d|%n", name, age);
    }
}`,
        },
        {
          type: "text",
          md: "A sample run (what the user types appears after each prompt):\n\n`Name and age: Priya 16`\n`Fee per month: 1250.5`\n`City: New Delhi`\n`Priya (16) from New Delhi`\n`Yearly fee: 15006.00`\n`Priya   |   16|`\n\n`next()` would read only \"New\" from \"New Delhi\", so the city is read with `nextLine()`.",
        },
        {
          type: "mistake",
          wrong: "After `int age = sc.nextInt();` I can call `sc.nextLine()` and it will wait for the user to type the city.",
          right: "`nextInt()` leaves the newline after the number in the stream. The next `nextLine()` reads that leftover empty line at once and returns \"\". Call `sc.nextLine();` once to use up the rest of the line, then read the real line.",
          why: "Typing a number and pressing Enter feels like one complete action, but nextInt() takes only the digits; the Enter key's newline stays waiting.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The user types `Rahul Dravid` and presses Enter. What does `sc.next()` return?",
              options: ["\"Rahul\"", "\"Rahul Dravid\"", "\"Dravid\"", "\"\""],
              answer: 0,
              explain: "next() reads one token, stopping at the space. nextLine() would return the whole line.",
            },
          ],
        },
        {
          type: "text",
          md: "**Output.** `System.out` is an object of the class **`PrintStream`** connected to the screen. `print()` leaves the cursor on the same line; `println()` moves to the next line; `printf(format, values...)` (also called `format`) prints values using **format specifiers**:\n\n- `%d` integer, `%f` decimal, `%.2f` decimal with 2 places, `%s` String, `%c` char, `%n` new line;\n- a width pads with spaces: `%5d` right-justifies in 5 places, `%-8s` left-justifies in 8.\n\nThe class `PrintWriter` (in `java.io`) offers the same print methods and can also write to files.",
        },
        {
          type: "code",
          lang: "java",
          caption: "SafeInput.java",
          code: java`import java.util.Scanner;

public class SafeInput
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int count = 0;
        while (sc.hasNext())
        {
            if (sc.hasNextInt())
            {
                int n = sc.nextInt();
                count++;
                System.out.println("Got " + n);
            }
            else
                System.out.println("Skipped " + sc.next());
        }
        System.out.println(count + " numbers");
    }
}`,
        },
        {
          type: "example",
          title: "Checking tokens before reading",
          problem: "SafeInput.java is given the input `45 abc 7` on one line and `3.5 -2` on the next. What is printed?",
          steps: [
            "Tokens, split by whitespace (the newline counts too): 45, abc, 7, 3.5, −2.",
            "`hasNextInt()` is true for 45, 7 and −2, so they are read with nextInt() and counted.",
            "\"abc\" and \"3.5\" are not ints, so they are read with next() as Strings and skipped. Calling `nextInt()` on them would throw an **InputMismatchException**.",
          ],
          answer: "Got 45\nSkipped abc\nGot 7\nSkipped 3.5\nGot -2\n3 numbers",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each printf call to its output.",
            pairs: [
              ["printf(\"%.1f\", 2.456)", "2.5"],
              ["printf(\"%4d\", 7)", "   7"],
              ["printf(\"%-4d|\", 7)", "7   |"],
              ["printf(\"%s-%c\", \"ab\", 'z')", "ab-z"],
            ],
            explain: "%.1f rounds to one decimal place; %4d right-justifies in 4 places; the minus sign left-justifies; %s and %c print a String and a char.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In practical programs, write `import java.util.*;` (or `import java.util.Scanner;`) at the top, show a prompt before every input, and print output in exactly the format given in the question. If input is invalid (for example, a size out of range), print the message the question asks for, such as INVALID INPUT.",
        },
        {
          type: "keypoints",
          items: [
            "Input is a stream split into tokens by whitespace (spaces, tabs, newlines).",
            "Scanner (java.util): next, nextInt, nextDouble read one token; nextLine reads the rest of the line.",
            "After nextInt / nextDouble, call nextLine once before reading a full line.",
            "hasNextInt() checks the next token without reading it; a wrong type causes InputMismatchException.",
            "System.out is a PrintStream: print, println, printf with %d, %.2f, %s, %n and widths.",
          ],
        },
      ],
      flashcards: [
        { front: "Token", back: "A piece of input separated from the next by whitespace." },
        { front: "Whitespace", back: "Space, tab and newline characters; they separate tokens." },
        { front: "Creating a Scanner for the keyboard", back: "`Scanner sc = new Scanner(System.in);` (import java.util.Scanner)." },
        { front: "`next()` vs `nextLine()`", back: "next() reads one token; nextLine() reads the rest of the current line, spaces included." },
        { front: "InputMismatchException", back: "Thrown when, for example, nextInt() meets a token that is not an integer." },
        { front: "`%8.3f` in printf", back: "A decimal number in a field 8 wide with 3 digits after the point." },
        { front: "Class of `System.out`", back: "PrintStream." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many tokens are in the input `  12   apples and\n  3 mangoes `?",
          answer: 5,
          explain: "12, apples, and, 3, mangoes. Extra spaces and the newline only separate tokens.",
        },
        {
          kind: "mcq",
          q: "Which package contains the Scanner class?",
          options: ["java.util", "java.lang", "java.io", "java.scanner"],
          answer: 0,
          explain: "Scanner is in java.util, so it must be imported.",
        },
        {
          kind: "mcq",
          q: "What does `System.out.printf(\"%.2f\", 10.0 / 3);` print?",
          options: ["3.33", "3.3", "3.333333", "3"],
          answer: 0,
          explain: "%.2f shows two decimal places: 3.33.",
        },
        {
          kind: "truefalse",
          q: "`nextInt()` reads the number and also the newline typed after it.",
          answer: false,
          explain: "It reads only the number; the newline stays in the stream for the next read.",
        },
        {
          kind: "fill",
          q: "To check whether the next token is an integer without reading it, call sc.___().",
          answer: ["hasNextInt"],
          explain: "hasNextInt() returns true or false and leaves the token in place.",
        },
        {
          kind: "mcq",
          q: "The input is `abc`. What happens on `int n = sc.nextInt();`?",
          options: ["InputMismatchException at run time", "n becomes 0", "Compile-time error", "n becomes the code of 'a'"],
          answer: 0,
          explain: "The token is not an integer, so the Scanner throws InputMismatchException.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.printf(\"[%5s]\", \"Goa\");`?",
          options: ["[  Goa]", "[Goa  ]", "[Goa]", "[    Goa]"],
          answer: 0,
          explain: "Width 5, right-justified by default: two spaces and then Goa.",
        },
      ],
    },
    {
      slug: "c11-isc-io-tokenizer-exceptions",
      title: "StringTokenizer, BufferedReader and Input/Output Exceptions",
      summary: "Extracting tokens with StringTokenizer and custom delimiters, reading lines with BufferedReader, converting text to numbers, and handling IOException and NumberFormatException.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "✂️",
          caption: "A date like 2024-08-15 is three numbers glued together with dashes. To use them, a program must cut the text at each dash. Cutting text into tokens is called tokenising.",
        },
        {
          type: "text",
          md: "The class **`StringTokenizer`** (in `java.util`) breaks a String into tokens.\n\n- `new StringTokenizer(str)` splits at whitespace;\n- `new StringTokenizer(str, delims)` splits at **any** of the characters in `delims`, for example \" ,.\";\n- `countTokens()` gives the number of tokens left, `hasMoreTokens()` tells whether any remain, and `nextToken()` returns the next one.\n\nDelimiters are never part of a token, and several delimiters in a row count as one break, so no empty tokens are produced. (StringTokenizer is an older class; newer code often uses `String.split()`, but ISC asks about StringTokenizer.)",
        },
        {
          type: "code",
          lang: "java",
          caption: "Tokens.java",
          code: java`import java.util.StringTokenizer;

public class Tokens
{
    public static void main(String[] args)
    {
        String line = "  Ravi   scored 87,  Meena 92 ";
        StringTokenizer st = new StringTokenizer(line);
        System.out.println("Tokens: " + st.countTokens());
        while (st.hasMoreTokens())
            System.out.print("[" + st.nextToken() + "]");
        System.out.println();

        StringTokenizer st2 = new StringTokenizer("2024-08-15", "-");
        int sum = 0;
        while (st2.hasMoreTokens())
            sum += Integer.parseInt(st2.nextToken());
        System.out.println("Sum = " + sum);
    }
}`,
        },
        {
          type: "example",
          title: "Tracing Tokens.java",
          problem: "Give the output of Tokens.java.",
          steps: [
            "With the default delimiters (whitespace), the tokens are Ravi, scored, 87, (with the comma), Meena, 92. Leading, trailing and repeated spaces make no empty tokens: 5 tokens.",
            "The comma is not a delimiter here, so it stays inside \"87,\".",
            "With \"-\" as delimiter, \"2024-08-15\" gives 2024, 08, 15. `Integer.parseInt` turns \"08\" into 8, so the sum is 2024 + 8 + 15 = 2047.",
          ],
          answer: "Tokens: 5\n[Ravi][scored][87,][Meena][92]\nSum = 2047",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many tokens does `new StringTokenizer(\"a,b,,c\", \",\")` produce?",
              answer: 3,
              explain: "a, b, c. The two commas together count as one break; no empty token is made.",
            },
          ],
        },
        {
          type: "text",
          md: "**BufferedReader.** Another way to read the keyboard joins two classes from `java.io`: `InputStreamReader` turns the byte stream `System.in` into characters, and `BufferedReader` collects them and reads a whole line with `readLine()`. Every value comes in as a String, so we convert it with **wrapper class** methods such as `Integer.parseInt()` or `Double.parseDouble()`.\n\n`readLine()` can throw an **IOException** (a checked exception), so the method must either handle it with `try`–`catch` or declare it with **`throws IOException`** in its header.",
        },
        {
          type: "code",
          lang: "java",
          caption: "ReadDemo.java",
          code: java`import java.io.*;

public class ReadDemo
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter marks: ");
        int m = Integer.parseInt(br.readLine().trim());
        System.out.println("Marks + 5 = " + (m + 5));
    }
}`,
        },
        {
          type: "text",
          md: "If the user types `78`, the program prints `Marks + 5 = 83`. `trim()` removes any stray spaces, because `parseInt(\" 78\")` would fail.\n\n**Exceptions** are run-time error events. When one is **thrown** and not **caught**, the program stops with an error message. Common ones in input/output work:",
        },
        {
          type: "table",
          headers: ["Exception", "Thrown when", "Checked?"],
          rows: [
            ["`IOException`", "a read or write fails (java.io)", "checked: must be caught or declared with throws"],
            ["`NumberFormatException`", "`Integer.parseInt(\"12a\")`: text is not a valid number", "unchecked"],
            ["`InputMismatchException`", "Scanner's nextInt() meets a non-integer token", "unchecked"],
            ["`NoSuchElementException`", "nextToken() or next() is called when no tokens remain", "unchecked"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "ParseCheck.java",
          code: java`public class ParseCheck
{
    static int toInt(String s)
    {
        try
        {
            return Integer.parseInt(s);
        }
        catch (NumberFormatException e)
        {
            System.out.println("Bad input: " + s);
            return 0;
        }
    }

    public static void main(String[] args)
    {
        System.out.println(toInt("250") + toInt("12a") + toInt("-50"));
    }
}`,
        },
        {
          type: "mistake",
          wrong: "`throws IOException` in the header handles the error, so the program can never crash on bad input.",
          right: "`throws` only **declares** that the method may pass the exception on to its caller; it does not handle it. Handling means catching it in a `try`–`catch` block. Also, `throws IOException` does nothing for a `NumberFormatException` from parseInt.",
          why: "The keyword sits next to the exception name and looks like protection. It is really a warning label that satisfies the compiler's rule for checked exceptions.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does ParseCheck.java print?",
            emoji: "🧮",
            options: ["Bad input: 12a, then 200", "200 only", "Bad input: 12a, then 0", "The program stops with NumberFormatException"],
            answer: 0,
            trap: 3,
            explain: "The exception from \"12a\" is caught inside toInt, which prints the message and returns 0. The sum is 250 + 0 + (−50) = 200, printed after the message.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Learn the full BufferedReader line by heart: `BufferedReader br = new BufferedReader(new InputStreamReader(System.in));`. Remember `import java.io.*;` and `throws IOException` in `main`. Questions also ask you to name the exception a given statement throws.",
        },
        {
          type: "keypoints",
          items: [
            "StringTokenizer(str) splits at whitespace; StringTokenizer(str, delims) splits at any delimiter character.",
            "countTokens, hasMoreTokens and nextToken work through the tokens; delimiters never appear in tokens.",
            "BufferedReader + InputStreamReader read whole lines as Strings; convert with Integer.parseInt / Double.parseDouble.",
            "IOException is checked: catch it or declare `throws IOException`.",
            "NumberFormatException comes from parsing bad text; try–catch lets the program continue.",
          ],
        },
      ],
      flashcards: [
        { front: "StringTokenizer", back: "A java.util class that splits a String into tokens using delimiter characters." },
        { front: "Default delimiters of StringTokenizer", back: "Whitespace: space, tab, newline, carriage return, form feed." },
        { front: "`countTokens()`", back: "Returns how many tokens are still left to read." },
        { front: "BufferedReader declaration", back: "`BufferedReader br = new BufferedReader(new InputStreamReader(System.in));`" },
        { front: "`Integer.parseInt(\"12a\")`", back: "Throws NumberFormatException." },
        { front: "Checked exception", back: "An exception (like IOException) that the compiler forces you to catch or declare with throws." },
        { front: "`throws` vs `try`–`catch`", back: "throws declares and passes the exception on; try–catch actually handles it." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many tokens does `new StringTokenizer(\"Hi! How are you?\", \" !?\")` produce?",
          answer: 4,
          explain: "Hi, How, are, you. Space, ! and ? are all delimiters.",
        },
        {
          kind: "mcq",
          q: "Which package must be imported for BufferedReader and InputStreamReader?",
          options: ["java.io", "java.util", "java.lang", "java.net"],
          answer: 0,
          explain: "Both are in java.io.",
        },
        {
          kind: "mcq",
          q: "Which exception does `Integer.parseInt(\"4.5\")` throw?",
          options: ["NumberFormatException", "IOException", "InputMismatchException", "ArithmeticException"],
          answer: 0,
          explain: "\"4.5\" is not a valid int, so parseInt throws NumberFormatException.",
        },
        {
          kind: "truefalse",
          q: "If main uses `br.readLine()` and has no try–catch, it must declare `throws IOException`.",
          answer: true,
          explain: "IOException is checked, so the compiler requires it to be caught or declared.",
        },
        {
          kind: "numeric",
          q: "What is printed? `StringTokenizer s = new StringTokenizer(\"10 20 30\"); s.nextToken(); System.out.println(s.countTokens());`",
          answer: 2,
          explain: "countTokens counts only the tokens still left: 20 and 30.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "To convert the String \"3.75\" into a double, use Double.___(\"3.75\").",
          answer: ["parseDouble"],
          explain: "Double.parseDouble returns the double value 3.75.",
        },
        {
          kind: "mcq",
          q: "With the line `  Ravi   scored 87,  Meena 92 `, what would `new StringTokenizer(line, \" ,\").countTokens()` give?",
          options: ["5", "6", "4", "8"],
          answer: 0,
          explain: "The comma is now a delimiter too, so the tokens are Ravi, scored, 87, Meena, 92: still 5, but \"87\" no longer has the comma.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-io-packages",
      title: "Packages and the Java Library",
      summary: "What a package is, the main built-in packages, the import statement, creating and using a user-defined package, and access specifiers across packages.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🗄️",
          caption: "A school office keeps files in labelled cabinets: Admissions, Fees, Exams. Two files can both be called \"List\" if they are in different cabinets. Java keeps its classes in labelled groups called packages.",
        },
        {
          type: "text",
          md: "A **package** is a named group of related classes and interfaces. Java's own library (the **Java API**) is organised into packages, and we can make our own.\n\nPackages help in three ways: they **organise** classes by purpose, they **prevent name clashes** (two classes may share a name if they are in different packages), and they **control access** (members with default access are visible only inside their own package).",
        },
        {
          type: "table",
          headers: ["Package", "Contains (examples)", "Import needed?"],
          rows: [
            ["`java.lang`", "String, Math, System, Integer, Character, StringBuffer", "No: imported automatically"],
            ["`java.util`", "Scanner, StringTokenizer, Arrays, ArrayList, Random", "Yes"],
            ["`java.io`", "BufferedReader, InputStreamReader, PrintWriter, IOException", "Yes"],
            ["`java.math`", "BigInteger, BigDecimal", "Yes"],
            ["`java.net`", "URL, Socket", "Yes"],
          ],
        },
        {
          type: "text",
          md: "**The import statement** comes before the class and lets us use a class by its short name:\n\n- `import java.util.Scanner;` imports one class (**single-type import**);\n- `import java.util.*;` makes every class of `java.util` available (**import on demand**). The `*` does **not** include sub-packages: `import java.util.*;` does not import classes of `java.util.regex`.\n\nWithout an import, we can still use a class by its **fully qualified name**: `java.util.Scanner sc = new java.util.Scanner(System.in);`.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Why can a program use `Math.sqrt()` and `String` without any import?",
              options: ["They are in java.lang, which is imported automatically", "They are keywords", "They are in java.util", "Because main is static"],
              answer: 0,
              explain: "Every Java program imports java.lang automatically.",
            },
          ],
        },
        {
          type: "text",
          md: "**Making your own package.** Put a `package` statement as the **first statement** of the file. The folder structure must match the package name: the class `Grade` in package `school.util` is saved as `school/util/Grade.java`. Classes and methods meant for use outside the package must be `public`.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Grade.java (saved in school/util/)",
          code: java`package school.util;

public class Grade
{
    public static char grade(int marks)
    {
        if (marks >= 90)
            return 'A';
        if (marks >= 75)
            return 'B';
        if (marks >= 50)
            return 'C';
        return 'D';
    }
}`,
        },
        {
          type: "code",
          lang: "java",
          caption: "Report.java",
          code: java`import school.util.Grade;

public class Report
{
    public static void main(String[] args)
    {
        int[] m = {93, 76, 48};
        for (int i = 0; i < m.length; i++)
            System.out.println(m[i] + " -> " + Grade.grade(m[i]));
        System.out.println(java.lang.Math.max(3, 9) + " " + Math.abs(-7));
    }
}`,
        },
        {
          type: "example",
          title: "Using the package",
          problem: "Give the output of Report.java and explain how it finds the class Grade.",
          steps: [
            "`import school.util.Grade;` tells the compiler where Grade lives; Java looks for `school/util/Grade.class` from the class path.",
            "93 ≥ 90 gives A; 76 ≥ 75 gives B; 48 is below 50, so D.",
            "`java.lang.Math.max(3, 9)` uses the fully qualified name and gives 9; `Math.abs(-7)` uses the short name, allowed because java.lang is automatic, and gives 7.",
          ],
          answer: "93 -> A\n76 -> B\n48 -> D\n9 7",
        },
        {
          type: "table",
          headers: ["Access specifier", "Same class", "Same package", "Subclass in another package", "Any class in another package"],
          rows: [
            ["`public`", "yes", "yes", "yes", "yes"],
            ["`protected`", "yes", "yes", "yes", "no"],
            ["default (none written)", "yes", "yes", "no", "no"],
            ["`private`", "yes", "no", "no", "no"],
          ],
        },
        {
          type: "mistake",
          wrong: "`import java.util.*;` copies all the classes of java.util into my program, so it makes the program bigger and slower.",
          right: "An import only tells the compiler **where to look** for class names. Nothing is copied, and only the classes actually used are loaded when the program runs.",
          why: "In some other languages \"include\" really pastes code into the file, so learners expect the same. Java's import is just a naming shortcut.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which package is each class in?",
            groups: ["java.lang", "java.util", "java.io"],
            items: [
              { text: "Math", group: 0, hint: "Used without any import." },
              { text: "Character", group: 0, hint: "A wrapper class; wrappers are automatic." },
              { text: "Scanner", group: 1, hint: "A utility for reading tokens." },
              { text: "StringTokenizer", group: 1, hint: "Another utility class for tokens." },
              { text: "BufferedReader", group: 2, hint: "Input/output stream class." },
              { text: "IOException", group: 2, hint: "The input/output exception." },
            ],
            explain: "java.lang holds the core classes and needs no import; java.util holds utilities like Scanner and StringTokenizer; java.io holds stream classes and IOException.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Common short questions: \"Name the package that is imported by default\" (java.lang), \"What is the use of the `*` in an import statement?\", and \"Which keyword creates a package?\" (`package`, written as the first statement of the file).",
        },
        {
          type: "keypoints",
          items: [
            "A package groups related classes; it organises code, prevents name clashes and controls access.",
            "java.lang is imported automatically; java.util and java.io must be imported.",
            "`import p.C;` imports one class; `import p.*;` imports all classes of p but not its sub-packages.",
            "`package name;` must be the first statement; the folder path must match the package name.",
            "Access: public everywhere, protected adds subclasses, default stays in the package, private stays in the class.",
          ],
        },
      ],
      flashcards: [
        { front: "Package", back: "A named group of related classes and interfaces, e.g. java.util." },
        { front: "Package imported by default", back: "java.lang." },
        { front: "Single-type import vs import on demand", back: "`import java.util.Scanner;` imports one class; `import java.util.*;` imports all classes of java.util." },
        { front: "Fully qualified name", back: "A class name with its package, e.g. java.util.Scanner." },
        { front: "Creating a package", back: "Write `package name;` as the first statement and save the file in a folder path matching the name." },
        { front: "Default (package) access", back: "No access specifier written: visible only to classes in the same package." },
        { front: "Does `import java.util.*;` import java.util.regex classes?", back: "No; `*` does not include sub-packages." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement must come first in a file that defines a class in a package?",
          options: ["package school.util;", "import java.util.*;", "public class Grade", "import school.util.*;"],
          answer: 0,
          explain: "The package statement must be the first statement (only comments may come before it).",
        },
        {
          kind: "truefalse",
          q: "A class in package A can use a member with default access of a class in package B.",
          answer: false,
          explain: "Default access is limited to the same package.",
        },
        {
          kind: "fill",
          q: "The package that contains the wrapper classes Integer and Character is ___.",
          answer: ["java.lang"],
          explain: "Wrapper classes are in java.lang.",
        },
        {
          kind: "mcq",
          q: "Using Grade.java, what does `Grade.grade(75)` return?",
          options: ["'B'", "'A'", "'C'", "'D'"],
          answer: 0,
          explain: "75 is not ≥ 90, but it is ≥ 75, so the method returns 'B'.",
        },
        {
          kind: "multi",
          q: "Which are benefits of packages?",
          options: ["Avoiding name clashes between classes", "Grouping related classes", "Controlling access to members", "Making every method run faster"],
          answers: [0, 1, 2],
          explain: "Packages organise code and control names and access; they do not affect speed.",
        },
        {
          kind: "mcq",
          q: "A member declared `protected` in package p is visible to which of these?",
          options: ["Classes in p and subclasses anywhere", "Only its own class", "Only classes in p", "Every class in every package"],
          answer: 0,
          explain: "protected = package access plus access from subclasses in other packages.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which line uses Scanner without any import statement?",
          options: ["`java.util.Scanner sc = new java.util.Scanner(System.in);`", "`Scanner sc = new Scanner(System.in);`", "`util.Scanner sc = new util.Scanner(System.in);`", "`Scanner sc = new java.Scanner(System.in);`"],
          answer: 0,
          explain: "A fully qualified name (package + class) works without an import.",
        },
      ],
    },
    {
      slug: "c11-isc-io-board-practice",
      title: "Board Practice: Basic Input/Output and Packages",
      summary: "Mixed ISC-style questions: the nextInt–nextLine trap, printf output, naming exceptions and packages, and a program that reads a sentence and finds its longest word.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "These questions mix the short-answer and program questions ISC sets on input, output and packages.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Trap.java",
          code: java`import java.util.Scanner;

public class Trap
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String city = sc.nextLine();
        System.out.println("n = " + n);
        System.out.println("city = [" + city + "]");
        System.out.printf("%05d|%6.2f|%-6s|%n", n, n / 8.0, "ok");
    }
}`,
        },
        {
          type: "example",
          title: "Output question",
          problem: "The user types `42`, presses Enter, then types `Mumbai` and presses Enter. What does Trap.java print?",
          steps: [
            "`nextInt()` reads 42 and stops before the newline.",
            "`nextLine()` reads from there to the end of that same line: nothing, so city = \"\". \"Mumbai\" is never read.",
            "`%05d` pads 42 with zeros to 5 places: 00042. `%6.2f` prints 42 / 8.0 = 5.25 in 6 places: \"  5.25\". `%-6s` left-justifies \"ok\" in 6 places: \"ok    \".",
          ],
          answer: "n = 42\ncity = []\n00042|  5.25|ok    |",
        },
        {
          type: "mistake",
          wrong: "`n / 8` and `n / 8.0` give the same value, 5.25, for n = 42.",
          right: "`42 / 8` is **integer division** and gives 5. Only when one operand is a double (`8.0`) is the result 5.25. Also, `printf(\"%f\", 42 / 8)` would throw an IllegalFormatConversionException, because %f needs a decimal value, not an int.",
          why: "On a calculator, 42 ÷ 8 is always 5.25. In Java, the types of the operands decide the type of the result.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "`System.out.printf(\"%04d\", 7);` prints ___.",
              answer: ["0007"],
              explain: "The 0 flag pads with zeros to a width of 4.",
            },
          ],
        },
        {
          type: "text",
          md: "**Program to write.** Read a sentence that ends with a full stop. Using StringTokenizer, count the words and find the longest word (the first one if there is a tie). Treat space, comma and full stop as delimiters.",
        },
        {
          type: "code",
          lang: "java",
          caption: "LongWord.java",
          code: java`import java.util.*;

public class LongWord
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim();
        if (!s.endsWith("."))
        {
            System.out.println("INVALID INPUT");
            return;
        }
        StringTokenizer st = new StringTokenizer(s, " ,.");
        int count = st.countTokens();
        String longest = "";
        while (st.hasMoreTokens())
        {
            String w = st.nextToken();
            if (w.length() > longest.length())
                longest = w;
        }
        System.out.println("Words: " + count);
        System.out.println("Longest: " + longest + " (" + longest.length() + " letters)");
    }
}`,
        },
        {
          type: "example",
          title: "Sample run",
          problem: "Input: `India launched Aditya L1 to study the Sun.` Give the output and explain the tie rule.",
          steps: [
            "The ending full stop is present, so the input is valid.",
            "Tokens: India, launched, Aditya, L1, to, study, the, Sun: 8 words. The full stop is a delimiter and is not part of \"Sun\".",
            "Lengths 5, 8, 6, 2, 2, 5, 3, 3. Since the test is `>` (not `>=`), a later word of equal length would not replace the first; \"launched\" is the longest.",
          ],
          answer: "Enter a sentence: India launched Aditya L1 to study the Sun.\nWords: 8\nLongest: launched (8 letters)",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each statement to the exception it can throw.",
            pairs: [
              ["Integer.parseInt(\"7up\")", "NumberFormatException"],
              ["sc.nextInt() when the token is \"seven\"", "InputMismatchException"],
              ["br.readLine() when the stream fails", "IOException"],
              ["st.nextToken() with no tokens left", "NoSuchElementException"],
            ],
            explain: "Parsing bad text gives NumberFormatException; Scanner type mismatches give InputMismatchException; stream failures give IOException; reading past the last token gives NoSuchElementException.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Validate first and stop early: check the terminating character, print the exact error message, and `return`. Then do the work. Always give at least two test runs in the practical, one valid and one invalid.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In LongWord.java, changing `>` to `>=` would make the last of several equally long words the answer.",
              answer: true,
              explain: "With `>=`, a word of equal length replaces the current longest, so the last such word wins.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "nextInt followed by nextLine reads an empty line; use up the newline first.",
            "printf flags: 0 pads with zeros, − left-justifies; %f needs a decimal value.",
            "Name the exception: NumberFormatException, InputMismatchException, IOException, NoSuchElementException.",
            "StringTokenizer with \" ,.\" removes punctuation from words; countTokens gives the word count.",
          ],
        },
      ],
      flashcards: [
        { front: "`%05d` with 42", back: "00042." },
        { front: "`%-6s|` with \"ok\"", back: "\"ok    |\": left-justified in 6 places." },
        { front: "42 / 8 in Java", back: "5 (integer division); 42 / 8.0 is 5.25." },
        { front: "NoSuchElementException", back: "Thrown by nextToken() or next() when no tokens remain." },
        { front: "Word count with StringTokenizer", back: "Call countTokens() before reading any token." },
        { front: "Tie rule: `>` vs `>=` when finding the longest", back: "`>` keeps the first longest; `>=` ends with the last longest." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What does `System.out.printf(\"%6.1f|\", 3.14159);` print?",
          options: ["\"   3.1|\"", "\"3.1   |\"", "\"3.14159|\"", "\"  3.14|\""],
          answer: 0,
          explain: "One decimal place gives 3.1, right-justified in a width of 6: three spaces then 3.1.",
        },
        {
          kind: "numeric",
          q: "How many words does LongWord.java report for `Chess, cricket and kabaddi are played here.`?",
          answer: 7,
          explain: "Chess, cricket, and, kabaddi, are, played, here: 7 (the comma and full stop are delimiters).",
        },
        {
          kind: "mcq",
          q: "What does LongWord.java print for the input `We love Bharat` (no full stop)?",
          options: ["INVALID INPUT", "Words: 3", "Longest: Bharat (6 letters)", "Nothing"],
          answer: 0,
          explain: "The sentence does not end with \".\", so the program prints INVALID INPUT and returns.",
        },
        {
          kind: "truefalse",
          q: "`import java.io.*;` is needed to use the String class.",
          answer: false,
          explain: "String is in java.lang, which is imported automatically.",
        },
        {
          kind: "fill",
          q: "In Trap.java, `n / 8.0` for n = 42 equals ___.",
          answer: ["5.25"],
          explain: "42 ÷ 8 = 5.25, a double because 8.0 is a double.",
        },
        {
          kind: "mcq",
          q: "Which method of Scanner reads `New Delhi` as one String?",
          options: ["nextLine()", "next()", "nextWord()", "readLine()"],
          answer: 0,
          explain: "nextLine() reads the whole line including spaces. readLine() belongs to BufferedReader; nextWord() does not exist.",
        },
        {
          kind: "multi",
          q: "Which statements are correct?",
          options: ["System.out is an object of PrintStream", "Scanner is in java.util", "IOException is an unchecked exception", "BufferedReader.readLine() returns a String"],
          answers: [0, 1, 3],
          explain: "IOException is a checked exception; the others are correct.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 6. Trends in Computing and Ethics                                   */
/* ------------------------------------------------------------------ */
const trends: Topic = {
  slug: "c11-isc-cs-trends-ethics",
  title: "Trends in Computing and Ethics",
  icon: "🌐",
  description: "Artificial intelligence, the Internet of Things, virtual and augmented reality, cyber security, privacy, netiquette, spam and phishing, intellectual property, free and open source software and licences.",
  lessons: [
    {
      slug: "c11-isc-trends-ai-iot-vr",
      title: "Trends: AI, Internet of Things, Virtual and Augmented Reality",
      summary: "What artificial intelligence and machine learning are, how IoT devices sense and share data, the difference between VR and AR, and the social questions each raises.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🤖",
          caption: "A farmer in Punjab asks a phone app, in Punjabi, why the wheat leaves are turning yellow. The app recognises speech, looks at a photo of the leaf and suggests a cause. Several new computing trends are at work in that one answer.",
        },
        {
          type: "text",
          md: "**Artificial Intelligence (AI)** is the branch of computer science that builds systems able to do tasks that normally need human intelligence: understanding language, recognising images, making decisions, playing games. In 1950 Alan Turing proposed a test (the **Turing Test**) in which a machine counts as intelligent if a person chatting with it cannot reliably tell it from a human.\n\n**Machine Learning (ML)** is a part of AI in which a program is not given fixed rules; it **learns patterns from examples (data)**. A spam filter shown thousands of marked messages learns which words and senders suggest spam. All of today's AI is **narrow AI**, good at one kind of task. A machine with general human-level intelligence (**general AI**) does not exist yet.",
        },
        {
          type: "table",
          headers: ["Area", "Example in India"],
          rows: [
            ["Speech and language", "voice assistants and translation between Indian languages"],
            ["Image recognition", "detecting crop disease from a leaf photo; reading number plates at toll plazas"],
            ["Prediction", "weather and monsoon forecasting; detecting unusual (possibly fraudulent) payments"],
            ["Recommendation", "suggesting videos, songs or products from what you watched or bought"],
          ],
        },
        {
          type: "text",
          md: "The **Internet of Things (IoT)** is a network of everyday physical objects fitted with **sensors**, software and a network connection, so that they collect data and exchange it with other devices or a server over the internet, often without a human in the loop. Examples: smart electricity meters that report readings, soil-moisture sensors that switch on a pump, fitness bands, smart street lights.\n\nAn IoT system has four parts: **sensors / actuators** on the device, **connectivity** (Wi-Fi, mobile data, Bluetooth), **data processing** (often in the **cloud**: computing and storage rented over the internet), and a **user interface** such as a phone app.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "How is machine learning different from ordinary programming?",
              options: ["It learns patterns from data instead of following only hand-written rules", "It needs no computer", "It only works on robots", "It cannot make mistakes"],
              answer: 0,
              explain: "In ML the program builds its own rules from examples. It can still be wrong, especially when the data is poor.",
            },
          ],
        },
        {
          type: "text",
          md: "**Virtual Reality (VR)** places the user inside a completely **computer-generated** 3-D world, usually through a headset that blocks the real surroundings and tracks head movement. Uses: flight and surgery training, virtual tours of monuments, games.\n\n**Augmented Reality (AR)** keeps the **real world** in view and **adds** digital information on top of it, through a phone camera or smart glasses. Uses: seeing how a sofa would look in your room, labels on a star map when you point your phone at the sky, navigation arrows on a live street view.",
        },
        {
          type: "table",
          headers: ["Point", "Virtual Reality", "Augmented Reality"],
          rows: [
            ["What you see", "a fully artificial world", "the real world with digital layers"],
            ["Real surroundings", "hidden", "visible"],
            ["Typical device", "VR headset", "phone camera, smart glasses"],
            ["Example", "practising a spacewalk in a simulator", "trying spectacle frames on your face in a shop app"],
          ],
        },
        {
          type: "example",
          title: "Naming the trend",
          problem: "Identify the main technology in each case: (a) a museum app that shows a 3-D Ashoka pillar standing on your table through the phone camera; (b) a headset that lets trainee pilots fly a plane with no real cockpit in sight; (c) a water tank that messages the owner when it is nearly empty; (d) a bank system that learns from past cases to flag strange card payments.",
          steps: [
            "(a) The real table stays visible and a digital object is added: **AR**.",
            "(b) The real world is hidden and a full artificial cockpit is shown: **VR**.",
            "(c) A sensor on an everyday object sends data over the network: **IoT**.",
            "(d) The system learns patterns from past data: **AI / machine learning**.",
          ],
          answer: "(a) AR, (b) VR, (c) IoT, (d) AI (machine learning).",
        },
        {
          type: "mistake",
          wrong: "AI systems are neutral and objective because they are just maths.",
          right: "An ML system learns from data collected by people. If the data is unbalanced or reflects past unfairness, the system can repeat it (**bias**). AI decisions need human checking, clear responsibility and explanation.",
          why: "Computers do not have opinions, so their outputs look impartial. But the patterns they learn come from the examples they are given.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which trend does each example show?",
            groups: ["AI / ML", "IoT", "VR / AR"],
            items: [
              { text: "App that translates spoken Kannada into Hindi", group: 0, hint: "Understanding language." },
              { text: "Email filter that learns what spam looks like", group: 0, hint: "Learning from examples." },
              { text: "Smart meter sending power readings every hour", group: 1, hint: "A sensor on an object sharing data." },
              { text: "Soil sensor that switches on a pump", group: 1, hint: "Device acts on sensed data." },
              { text: "Headset tour inside a virtual Hampi", group: 2, hint: "A full artificial world." },
              { text: "Phone shows furniture placed in your real room", group: 2, hint: "Digital layer over the real view." },
            ],
            explain: "AI and ML handle language, images and learning from data; IoT connects sensing objects; VR replaces the view, AR adds to it.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Short questions ask you to define AI, IoT, VR or AR and give one example each, or to state one difference between VR and AR. Give the definition first in one exact sentence, then a real example. For \"social impact\" questions, write one benefit and one concern (for example: jobs, privacy, bias, addiction).",
        },
        {
          type: "keypoints",
          items: [
            "AI: systems doing tasks that need human intelligence; ML is the part of AI that learns from data.",
            "Today's AI is narrow AI; it can carry bias from its training data.",
            "IoT: everyday objects with sensors and connectivity that exchange data, often through the cloud.",
            "VR replaces the real world with a computer-made one; AR adds digital information to the real view.",
            "Every trend brings benefits and concerns such as privacy, security, jobs and fairness.",
          ],
        },
      ],
      flashcards: [
        { front: "Artificial Intelligence", back: "The design of computer systems that perform tasks normally needing human intelligence, such as understanding language or recognising images." },
        { front: "Machine Learning", back: "A part of AI in which programs learn patterns from data instead of following only hand-written rules." },
        { front: "Turing Test", back: "Proposed by Alan Turing (1950): a machine is called intelligent if a human questioner cannot reliably tell it from a person." },
        { front: "Internet of Things", back: "A network of physical objects with sensors, software and connectivity that collect and exchange data." },
        { front: "Virtual Reality", back: "A fully computer-generated 3-D environment experienced through a headset, hiding the real world." },
        { front: "Augmented Reality", back: "Digital information overlaid on a live view of the real world." },
        { front: "Cloud computing", back: "Using computing power, storage and software over the internet instead of on one's own machine." },
        { front: "AI bias", back: "Unfair results from an AI system that learned from unbalanced or prejudiced data." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A medical student practises surgery inside a fully simulated operating theatre using a headset. This is:",
          options: ["Virtual Reality", "Augmented Reality", "Internet of Things", "Cloud storage"],
          answer: 0,
          explain: "The real surroundings are replaced by a computer-generated one: VR.",
        },
        {
          kind: "truefalse",
          q: "Machine learning is a branch of artificial intelligence.",
          answer: true,
          explain: "ML is one approach within AI: learning from data.",
        },
        {
          kind: "mcq",
          q: "Which is the best example of IoT?",
          options: ["A refrigerator that sends a message when its door is left open", "A calculator app", "A printed timetable", "A spreadsheet of marks"],
          answer: 0,
          explain: "An everyday object with a sensor that communicates over a network is IoT.",
        },
        {
          kind: "fill",
          q: "The test proposed in 1950 to judge whether a machine can think like a human is called the ___ Test.",
          answer: ["Turing"],
          explain: "Alan Turing proposed it.",
        },
        {
          kind: "multi",
          q: "Which are genuine concerns raised by AI and IoT?",
          options: ["Privacy of collected personal data", "Bias in automated decisions", "Security of connected devices", "They make computers use less electricity"],
          answers: [0, 1, 2],
          explain: "Privacy, bias and device security are real concerns. Using less electricity is not a concern (and is not generally true either).",
        },
        {
          kind: "mcq",
          q: "Pointing a phone at the night sky shows the names of the stars on the live camera view. This is:",
          options: ["Augmented Reality", "Virtual Reality", "Machine Learning only", "Cloud computing only"],
          answer: 0,
          explain: "The real sky stays visible and labels are added on top: AR.",
        },
        {
          kind: "mcq",
          q: "Which statement about present-day AI is correct?",
          options: ["It is narrow AI, good at specific tasks", "It has general human-level intelligence", "It never makes mistakes", "It needs no data"],
          answer: 0,
          explain: "Today's systems are narrow; general AI does not yet exist, and AI depends on data and can err.",
        },
      ],
    },
    {
      slug: "c11-isc-trends-cyber-security",
      title: "Cyber Security, Privacy and Netiquette",
      summary: "Malware, hacking, spam, phishing and its variants, protecting privacy, safe practices, netiquette, and Indian cyber laws.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🎣",
          caption: "\"Your electricity will be cut tonight. Call this number and share the OTP to update your account.\" Messages like this reach lakhs of phones in India. They are fishing for your secrets: that is why the trick is called phishing.",
        },
        {
          type: "text",
          md: "**Cyber security** is the protection of computers, networks, programs and data from attack, damage or unauthorised access. It aims at three things: **confidentiality** (only the right people see the data), **integrity** (data is not changed wrongly) and **availability** (the system works when needed).\n\n**Malware** (malicious software) is any program written to harm. **Hacking** is gaining unauthorised access to a computer system; doing it without permission is a crime. Testing a system *with* the owner's permission to find weaknesses is called **ethical hacking**.",
        },
        {
          type: "table",
          headers: ["Malware", "How it behaves"],
          rows: [
            ["**Virus**", "attaches itself to a file or program and spreads when that file is run or shared"],
            ["**Worm**", "a standalone program that copies itself across a network on its own, without a host file"],
            ["**Trojan horse**", "looks like useful software but secretly does harm, e.g. opens a back door"],
            ["**Ransomware**", "locks or encrypts the victim's files and demands payment to unlock them"],
            ["**Spyware**", "secretly records what the user does, such as keystrokes and passwords"],
          ],
        },
        {
          type: "text",
          md: "**Spam** is unwanted bulk messages (email, SMS, chat) sent to many people, usually for advertising; some spam carries malware or scams.\n\n**Phishing** is a fraud in which the attacker pretends to be a trusted organisation (a bank, a courier, a government office) to trick people into revealing passwords, card numbers or OTPs, often through a link to a fake website. Variants: **vishing** (by voice call), **smishing** (by SMS). Warning signs: urgency or threats, spelling mistakes, odd web addresses, requests for an OTP or PIN, offers that are too good to be true.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A program spreads from computer to computer across a college network by itself, without being attached to any file. It is a:",
              options: ["Worm", "Virus", "Trojan horse", "Cookie"],
              answer: 0,
              explain: "A worm is standalone and self-spreading over a network. A virus needs a host file.",
            },
          ],
        },
        {
          type: "text",
          md: "**Privacy** is a person's right to control how their personal information is collected, used and shared. Apps and websites collect data such as location, contacts and browsing history; everything you post leaves a **digital footprint** that is hard to erase.\n\n**Netiquette** (net + etiquette) is the set of rules for polite, responsible behaviour online: respect others and do not bully or troll; do not type in ALL CAPITALS (it reads as shouting); check facts before forwarding; respect others' privacy and do not share their photos or details without consent; give credit for content you use.",
        },
        {
          type: "example",
          title: "Spotting a phishing message",
          problem: "An SMS says: \"Dear customer, your KYC has expired. Your account will be BLOCKED in 2 hours. Click bit-ly-link to update and enter the OTP you receive.\" List the warning signs and the correct response.",
          steps: [
            "Urgency and a threat (\"BLOCKED in 2 hours\") push you to act without thinking.",
            "A shortened, unknown link instead of the bank's official site or app.",
            "A request for the OTP: no genuine bank asks for an OTP, PIN or password.",
            "Correct response: do not click or reply; check only through the bank's official app or branch; report the fraud (in India, at cybercrime.gov.in or the helpline 1930) and delete the message.",
          ],
          answer: "It is a phishing (smishing) message: urgency, an unknown link and an OTP request are the giveaways. Ignore it, verify through official channels and report it.",
        },
        {
          type: "mistake",
          wrong: "If a message shows the bank's real logo and name, it must be genuine.",
          right: "Logos, names and even sender IDs can be copied or faked. Judge a message by **what it asks for**: any request for an OTP, PIN, password or a payment to \"unlock\" something is a scam, whatever it looks like.",
          why: "We trust familiar branding in the physical world because it is hard to fake there. Online, copying a logo takes seconds.",
        },
        {
          type: "table",
          headers: ["Safe practice", "Why"],
          rows: [
            ["Long passwords mixing letters, digits and symbols; a different one for each site", "harder to guess; one leak does not open every account"],
            ["Two-factor authentication (2FA)", "a stolen password alone is not enough"],
            ["Update the OS and apps; use antivirus software", "patches close known holes"],
            ["Install apps only from official stores; check permissions", "avoids Trojans and spyware"],
            ["Back up important files", "protects against ransomware and hardware failure"],
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each threat to its description.",
            pairs: [
              ["Phishing", "Fake message or site that tricks you into giving secrets"],
              ["Spam", "Unwanted bulk messages sent to many people"],
              ["Ransomware", "Locks your files and demands payment"],
              ["Trojan horse", "Harmful program disguised as a useful one"],
              ["Vishing", "Fraud attempted through a phone call"],
            ],
            explain: "Phishing and vishing trick people; spam floods them; ransomware and Trojans are kinds of malware.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Distinguish clearly in answers: a **virus** needs a host file, a **worm** does not. For India, know that the **Information Technology Act, 2000** (amended in 2008) deals with cyber crime and electronic records, and the **Digital Personal Data Protection Act, 2023** deals with how organisations handle personal data.",
        },
        {
          type: "keypoints",
          items: [
            "Cyber security protects confidentiality, integrity and availability of systems and data.",
            "Malware: virus (needs a host), worm (self-spreading), Trojan (disguised), ransomware, spyware.",
            "Spam is unwanted bulk messaging; phishing (and vishing, smishing) tricks people into revealing secrets.",
            "Never share an OTP, PIN or password; use strong passwords, 2FA, updates and backups.",
            "Netiquette means respectful, responsible behaviour online; privacy means control over your personal data.",
          ],
        },
      ],
      flashcards: [
        { front: "Cyber security", back: "Protecting computers, networks and data from attack, damage or unauthorised access." },
        { front: "Virus vs worm", back: "A virus attaches to a host file and spreads when it runs; a worm is standalone and spreads over networks by itself." },
        { front: "Trojan horse", back: "Malware disguised as useful software." },
        { front: "Phishing", back: "Fraud that impersonates a trusted body to trick people into revealing passwords, card details or OTPs." },
        { front: "Spam", back: "Unsolicited bulk messages sent to many recipients." },
        { front: "Netiquette", back: "Rules of polite and responsible behaviour on the internet." },
        { front: "Digital footprint", back: "The trail of data a person leaves online through posts, searches and app use." },
        { front: "Indian law on cyber crime", back: "The Information Technology Act, 2000 (amended 2008)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A caller claiming to be from a bank asks for the OTP just sent to you. This is:",
          options: ["Vishing", "Spam", "A worm", "Netiquette"],
          answer: 0,
          explain: "Phishing done over a voice call is vishing.",
        },
        {
          kind: "truefalse",
          q: "A virus can spread across a network on its own without being attached to any file.",
          answer: false,
          explain: "That describes a worm. A virus needs a host file or program.",
        },
        {
          kind: "multi",
          q: "Which are warning signs of a phishing email?",
          options: ["Urgent threat to close your account", "Request for your password or OTP", "Link to an unfamiliar web address", "Sent by your own school's official portal after you requested it"],
          answers: [0, 1, 2],
          explain: "Urgency, secret requests and odd links are classic signs. A message you requested from an official portal is expected.",
        },
        {
          kind: "fill",
          q: "Malware that encrypts a victim's files and demands payment is called ___.",
          answer: ["ransomware"],
          explain: "Ransomware holds data to ransom.",
        },
        {
          kind: "mcq",
          q: "Which is a breach of netiquette?",
          options: ["Posting a classmate's photo without asking", "Crediting the source of an image", "Checking a news story before forwarding it", "Replying politely to a disagreement"],
          answer: 0,
          explain: "Sharing someone's photo without consent violates their privacy and netiquette.",
        },
        {
          kind: "mcq",
          q: "Two-factor authentication helps because:",
          options: ["A stolen password alone is not enough to log in", "It makes passwords unnecessary", "It removes all viruses", "It speeds up the internet"],
          answer: 0,
          explain: "A second factor (such as an OTP on your phone) is needed as well as the password.",
        },
        {
          kind: "order",
          q: "Order the correct response to a suspicious bank SMS.",
          items: ["Do not click the link or reply", "Check through the bank's official app or branch", "Report it to the cyber crime portal or helpline", "Delete the message"],
          explain: "Avoid the bait, verify through official channels, report, then remove it.",
        },
      ],
    },
    {
      slug: "c11-isc-trends-ip-licensing",
      title: "Intellectual Property, Free and Open Source Software and Licences",
      summary: "Copyright, patents and trademarks for software, plagiarism, the Free Software Foundation and its four freedoms, open source software, and GPL, BSD and other licence types.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "💡",
          caption: "A team of students in Kochi spends months building an app for booking turf time. Someone copies their code, renames it and sells it. Who owns the app, and what may others do with the code? Intellectual property rules answer such questions.",
        },
        {
          type: "text",
          md: "**Intellectual property (IP)** is a creation of the mind (an invention, a program, a book, a song, a logo) that the law lets its creator own and control. **Intellectual property rights (IPR)** are the legal rights given to that owner for a period.",
        },
        {
          type: "table",
          headers: ["Right", "Protects", "Software example"],
          rows: [
            ["**Copyright**", "the expression of an idea: written text, code, music, art. It arises automatically when the work is created", "the source code of the turf-booking app"],
            ["**Patent**", "a new, inventive, useful invention; must be applied for and granted; usually lasts 20 years", "a new technical method; in India a computer programme per se cannot be patented"],
            ["**Trademark**", "a name, logo or symbol that identifies a brand", "the app's name and icon"],
          ],
        },
        {
          type: "text",
          md: "**Software copyright** means nobody else may copy, distribute or sell the program without the owner's permission. Copying and distributing software without permission is **software piracy**. Presenting someone else's work (code, an essay, an image) as your own without credit is **plagiarism**: it is dishonest even when the work is free to use.\n\nA **licence** is the owner's written permission saying what users may and may not do with the software.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which right protects a company's logo?",
              options: ["Trademark", "Patent", "Copyright of the source code", "None"],
              answer: 0,
              explain: "Brand names, logos and symbols are protected by trademarks.",
            },
          ],
        },
        {
          type: "text",
          md: "**The Free Software Foundation (FSF)**, founded by Richard Stallman in 1985 to support the GNU project, holds that users should control the software they use. \"Free\" here means **freedom, not price** (\"free as in free speech, not free beer\"). Software is free if every user has four freedoms:\n\n- **Freedom 0**: to run the program for any purpose;\n- **Freedom 1**: to study how it works and change it (this needs the **source code**);\n- **Freedom 2**: to give copies to others;\n- **Freedom 3**: to distribute your modified versions.\n\nThe FSF sees proprietary software, which withholds these freedoms, as unjust to users.",
        },
        {
          type: "text",
          md: "**Open Source Software (OSS)** also makes the source code available to view, change and share. The term was promoted from 1998 by the **Open Source Initiative**, which stresses practical benefits: many people can find and fix bugs, and code can be reused. Free software and open source software cover almost the same programs; the difference is mainly in emphasis (freedom and ethics for the FSF, development benefits for OSI). Together they are often called **FOSS**. Examples: Linux, LibreOffice, Firefox, Python, BlueJ.",
        },
        {
          type: "table",
          headers: ["Licence / category", "Key rule"],
          rows: [
            ["**GPL** (GNU General Public License)", "**copyleft**: anyone may use, change and share the code, but modified versions that are distributed must also be under the GPL with source code"],
            ["**BSD** (and MIT)", "**permissive**: use, change and share freely, even inside closed proprietary products, as long as the copyright notice is kept"],
            ["**Proprietary**", "source code kept secret; the licence limits copying and changing (e.g. most paid office suites and games)"],
            ["**Freeware**", "free of cost, but source code usually not given and changes not allowed"],
            ["**Shareware**", "free to try for a limited time or with limited features; pay to keep using"],
            ["**Public domain**", "no copyright at all; anyone may do anything with it"],
          ],
        },
        {
          type: "example",
          title: "Choosing a licence",
          problem: "The Kochi team wants others to improve their app, but they want every improved version to stay open for everyone. Should they choose GPL or BSD? What changes if they choose the other?",
          steps: [
            "Their condition is that improvements must remain open. That is exactly the **copyleft** rule of the GPL.",
            "Under BSD, a company could take the code, improve it and sell a closed version without sharing the changes; only the copyright notice must be kept.",
            "So GPL protects openness of future versions; BSD gives the widest freedom of reuse.",
          ],
          answer: "GPL. With BSD, others could make closed, proprietary versions of the improved app.",
        },
        {
          type: "mistake",
          wrong: "Freeware and free software are the same thing, because both cost nothing.",
          right: "**Freeware** is only free of **cost**; its source is usually closed and you may not change it. **Free software** is about **freedom**: source available, with the right to study, change and share. Free software may even be sold.",
          why: "In English, \"free\" means both \"no price\" and \"liberty\". The FSF uses the second meaning; freeware uses the first.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "A company changes GPL-licensed code and sells the new version. What must it do?",
            emoji: "📜",
            options: ["Nothing; once bought, the code is theirs", "Release its modified version under the GPL with source code", "Pay the original author a royalty", "It is not allowed to sell it at all"],
            answer: 1,
            trap: 3,
            explain: "The GPL allows selling, but the distributed modified version must carry the same GPL freedoms, including access to the source code. That is copyleft.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Typical questions: \"State the four freedoms of free software\", \"Differentiate between GPL and BSD licences\", \"What is copyleft?\", \"Differentiate between copyright and patent\". Use the exact terms (copyleft, permissive, source code) and one example for each.",
        },
        {
          type: "keypoints",
          items: [
            "Copyright protects the expression (code); patents protect inventions; trademarks protect brand names and logos.",
            "Piracy is unauthorised copying of software; plagiarism is presenting others' work as your own.",
            "FSF (Richard Stallman, 1985): free means freedom; the four freedoms are run, study and change, share, share changes.",
            "Open source (OSI, 1998) stresses the practical benefits of open code.",
            "GPL is copyleft; BSD and MIT are permissive; freeware is free of cost only; shareware is try-then-pay.",
          ],
        },
      ],
      flashcards: [
        { front: "Intellectual property", back: "A creation of the mind, such as an invention, program, text or logo, that the law allows its creator to own." },
        { front: "Copyright vs patent", back: "Copyright protects the expression of an idea (e.g. code) automatically; a patent protects an invention and must be granted." },
        { front: "Software piracy", back: "Copying or distributing software without the owner's permission." },
        { front: "Four freedoms of free software", back: "Run for any purpose; study and change (needs source); redistribute copies; distribute modified versions." },
        { front: "Copyleft", back: "A licence rule (as in the GPL) that modified versions must be shared under the same free terms." },
        { front: "Permissive licence", back: "A licence such as BSD or MIT that allows reuse even in closed software, if the notice is kept." },
        { front: "Freeware vs shareware", back: "Freeware is free of cost permanently; shareware is free to try, then must be paid for." },
        { front: "Who founded the Free Software Foundation?", back: "Richard Stallman, in 1985." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which licence requires that distributed modified versions stay under the same licence with source code?",
          options: ["GPL", "BSD", "Freeware", "Shareware"],
          answer: 0,
          explain: "That is copyleft, the defining rule of the GPL.",
        },
        {
          kind: "truefalse",
          q: "In the sense used by the FSF, \"free software\" means software that costs nothing.",
          answer: false,
          explain: "It means freedom: to run, study, change and share. Free software can be sold.",
        },
        {
          kind: "fill",
          q: "Freedom 1 of free software (to study and change the program) requires access to the ___ code.",
          answer: ["source"],
          explain: "You cannot study or change a program properly without its source code.",
        },
        {
          kind: "mcq",
          q: "A game can be played free for 30 days, after which you must pay. It is:",
          options: ["Shareware", "Freeware", "Open source", "Public domain"],
          answer: 0,
          explain: "Try first, pay later is shareware.",
        },
        {
          kind: "multi",
          q: "Which are open source software?",
          options: ["Linux", "LibreOffice", "Python", "A paid closed-source photo editor"],
          answers: [0, 1, 2],
          explain: "Linux, LibreOffice and Python publish their source; the paid closed editor is proprietary.",
        },
        {
          kind: "mcq",
          q: "A student copies a program from a website and submits it as their own project without credit. This is:",
          options: ["Plagiarism", "Copyleft", "Phishing", "Netiquette"],
          answer: 0,
          explain: "Presenting someone else's work as your own is plagiarism.",
        },
        {
          kind: "mcq",
          q: "What does a BSD licence allow that the GPL does not?",
          options: ["Using the code inside a closed, proprietary product without releasing the changes", "Removing the copyright notice", "Claiming you wrote the original code", "Patenting the original code"],
          answer: 0,
          explain: "BSD is permissive: closed derivative products are allowed if the notice is kept.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-trends-board-practice",
      title: "Board Practice: Trends in Computing and Ethics",
      summary: "Mixed ISC-style short answers and case studies on trends, cyber security and licensing, plus a Java program that rates password strength.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "This chapter is examined mostly through short answers and case studies. Answer in exact terms, give an example, and where asked, state both a benefit and a concern. The lesson ends with a short program that puts a cyber-safety rule into code.",
        },
        {
          type: "example",
          title: "Case study: a smart school",
          problem: "A school in Lucknow installs face-recognition cameras for attendance, smart lights that switch off in empty rooms, and VR headsets for science lessons. Name the trend behind each and give one ethical concern for the cameras.",
          steps: [
            "Face-recognition attendance learns to match faces from images: **AI / machine learning**.",
            "Lights that sense empty rooms and act on it, linked over the network: **IoT**.",
            "Headsets that show a fully simulated laboratory: **VR**.",
            "Concern: face images are sensitive **personal data**. The school must get consent, store data securely, limit who can see it, and delete it when no longer needed (privacy); the system may also be less accurate for some faces (bias).",
          ],
          answer: "AI (cameras), IoT (lights), VR (headsets). Main concern: privacy and consent for students' biometric data, plus possible bias.",
        },
        {
          type: "mistake",
          wrong: "If a photo, program or song is on the internet, it is free to copy and use however I like.",
          right: "Most material online is **copyrighted** even without a notice. Use it only as its licence allows (for example a Creative Commons or open source licence), and always credit the creator.",
          why: "Downloading is easy and nobody seems to stop you, so it feels allowed. But copyright arises automatically when a work is created; ease of copying does not remove it.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A program is released with its source code; anyone may change and share it, but shared changes must use the same licence. Its licence is most likely:",
              options: ["GPL", "BSD", "Freeware", "Proprietary"],
              answer: 0,
              explain: "Shared changes under the same licence = copyleft = GPL.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Short question", "Model answer (key words)"],
          rows: [
            ["Define phishing.", "Fraud that pretends to be a trusted source to trick users into revealing passwords, card details or OTPs."],
            ["Difference between a virus and a worm.", "A virus needs a host file and user action to spread; a worm spreads over a network by itself."],
            ["What is netiquette? Give two rules.", "Good manners online. Respect others / no bullying; do not share others' data without consent."],
            ["Difference between AR and VR.", "AR adds digital content to the real view; VR replaces it with a computer-made world."],
            ["What is copyleft?", "A licence condition that modified versions must be distributed under the same free terms (GPL)."],
          ],
        },
        {
          type: "text",
          md: "**Program to write.** A common cyber-safety rule: a strong password has at least 8 characters and contains an uppercase letter, a lowercase letter, a digit and a special character. Write a method that scores a password 1 point for each condition and returns Strong (5 points), Medium (3 or 4) or Weak (0 to 2).",
        },
        {
          type: "code",
          lang: "java",
          caption: "Password.java",
          code: java`public class Password
{
    // rates a password as Strong, Medium or Weak
    static String rate(String p)
    {
        boolean up = false, low = false, dig = false, sp = false;
        for (int i = 0; i < p.length(); i++)
        {
            char ch = p.charAt(i);
            if (Character.isUpperCase(ch))
                up = true;
            else if (Character.isLowerCase(ch))
                low = true;
            else if (Character.isDigit(ch))
                dig = true;
            else
                sp = true;
        }
        int score = 0;
        if (p.length() >= 8) score++;
        if (up) score++;
        if (low) score++;
        if (dig) score++;
        if (sp) score++;
        if (score == 5)
            return "Strong";
        if (score >= 3)
            return "Medium";
        return "Weak";
    }

    public static void main(String[] args)
    {
        String[] tests = {"ravi123", "Ravi@2008", "PASSWORD", "Tiger#9"};
        for (int i = 0; i < tests.length; i++)
            System.out.println(tests[i] + " : " + rate(tests[i]));
    }
}`,
        },
        {
          type: "example",
          title: "Tracing Password.java",
          problem: "Find the score and rating of each test password.",
          steps: [
            "\"ravi123\": 7 characters (no), lowercase and digits only → 2 points → Weak.",
            "\"Ravi@2008\": 9 characters, uppercase R, lowercase, digits, special @ → 5 points → Strong.",
            "\"PASSWORD\": exactly 8 characters (yes) and uppercase → 2 points → Weak.",
            "\"Tiger#9\": only 7 characters, but has uppercase, lowercase, # and a digit → 4 points → Medium.",
          ],
          answer: "ravi123 : Weak\nRavi@2008 : Strong\nPASSWORD : Weak\nTiger#9 : Medium",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the action ethical or unethical?",
            groups: ["Ethical", "Unethical"],
            items: [
              { text: "Using a GPL library and sharing your changes under the GPL", group: 0, hint: "That follows the licence." },
              { text: "Testing the school network for weaknesses with written permission", group: 0, hint: "Permission makes it ethical hacking." },
              { text: "Crediting the author of an image used in a project", group: 0, hint: "Giving credit avoids plagiarism." },
              { text: "Installing a cracked copy of paid software", group: 1, hint: "That is software piracy." },
              { text: "Logging into a friend's account after seeing the password", group: 1, hint: "Unauthorised access." },
              { text: "Forwarding a classmate's private chat to a group", group: 1, hint: "Breaks privacy and netiquette." },
            ],
            explain: "Ethical use follows licences, gets permission and gives credit. Piracy, unauthorised access and sharing private data are unethical, and often illegal.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Case-study questions reward structure: name the technology, explain how it fits, then give one benefit and one ethical or legal concern with a safeguard. Two or three precise lines score better than a long, vague paragraph.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "Using Password.java, `rate(\"Ab1!\")` returns \"___\".",
              answer: ["Medium"],
              explain: "Too short (no point), but uppercase, lowercase, digit and special give 4 points: Medium.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Case studies: name the trend, justify it, give a benefit and a concern with a safeguard.",
            "Online material is usually copyrighted; follow its licence and give credit.",
            "Permission separates ethical hacking from crime; consent protects privacy.",
            "Rules such as password strength can be checked in code with Character methods.",
          ],
        },
      ],
      flashcards: [
        { front: "Ethical hacking", back: "Testing a system's security with the owner's permission to find and fix weaknesses." },
        { front: "Biometric data", back: "Personal data from body features, such as face or fingerprint; needs consent and strong protection." },
        { front: "Strong password (common rule)", back: "At least 8 characters with uppercase, lowercase, a digit and a special character." },
        { front: "Creative Commons", back: "A family of licences that let creators allow sharing and reuse on stated conditions, such as giving credit." },
        { front: "Three parts of a good case-study answer", back: "Identify the technology, explain it, state a benefit and a concern (with a safeguard)." },
        { front: "Is material online free to copy?", back: "No; it is usually copyrighted. Use it only as its licence allows, and credit the creator." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Using Password.java, what is `rate(\"mumbai2024\")`?",
          options: ["Weak", "Medium", "Strong", "Error"],
          answer: 1,
          explain: "10 characters (1), lowercase (1), digits (1) = 3 points: Medium.",
        },
        {
          kind: "truefalse",
          q: "Using Password.java, \"Pass word1\" is rated Strong because the space counts as a special character.",
          answer: true,
          explain: "The space is not a letter or digit, so it sets sp = true; with 10 characters, uppercase, lowercase and a digit, the score is 5. (A real system might reject spaces; the program follows only its stated rules.)",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A hospital app predicts patients' risk of disease from past records. Which concern is most relevant?",
          options: ["Privacy of medical data and possible bias in predictions", "The app uses too many colours", "Phones get heavier", "It increases spam"],
          answer: 0,
          explain: "Health data is highly personal, and predictions learned from data can be biased.",
        },
        {
          kind: "fill",
          q: "Copying and distributing paid software without permission is called software ___.",
          answer: ["piracy"],
          explain: "Unauthorised copying of software is piracy.",
        },
        {
          kind: "multi",
          q: "Which actions protect privacy?",
          options: ["Reviewing app permissions before installing", "Using two-factor authentication", "Posting your home address publicly", "Asking before sharing a friend's photo"],
          answers: [0, 1, 3],
          explain: "Posting your address publicly exposes personal data; the other actions protect it.",
        },
        {
          kind: "mcq",
          q: "Which statement about FOSS is correct?",
          options: ["Its source code is available to study and change", "It can never be sold", "It always has a 30-day trial", "It cannot be used by companies"],
          answer: 0,
          explain: "FOSS shares source code; it can be sold and used commercially.",
        },
        {
          kind: "numeric",
          q: "How many points does Password.java give to \"INDIA@75\"?",
          answer: 4,
          explain: "8 characters (1), uppercase (1), special @ (1), digits (1); no lowercase: 4 points (Medium).",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [methods, arrays, strings, recursion, inputOutput, trends];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Methods": "c11-isc-cs-methods",
  "11:Arrays": "c11-isc-cs-arrays",
  "11:Strings in Java": "c11-isc-cs-strings",
  "11:Recursion": "c11-isc-cs-recursion",
  "11:Basic Input/Output and Packages": "c11-isc-cs-io-packages",
  "11:Trends in Computing and Ethics": "c11-isc-cs-trends-ethics",
};
