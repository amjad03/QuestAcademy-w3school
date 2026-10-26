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

export const topics: Topic[] = [methods];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Methods": "c11-isc-cs-methods",
};
