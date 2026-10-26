import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "computer-science";
/** Syllabus family: chapter titles below are matched against `cmp` rows in src/content/syllabus/. */
export const family = "cmp";

/* ================================================================== */
/* ISC Computer Science Class 11 (Java), part A                        */
/* Every Java program below was compiled and run; outputs are exact.   */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/* 1. Numbers                                                          */
/* ------------------------------------------------------------------ */
const numbers: Topic = {
  slug: "c11-isc-numbers",
  title: "Numbers",
  icon: "🔢",
  description: "Positional number systems (binary, octal, decimal, hexadecimal), conversions between them, addition and subtraction in any base, and sign-magnitude, 1's and 2's complement representation.",
  lessons: [
    {
      slug: "c11-isc-number-systems-conversions",
      title: "Number Systems and Conversions",
      summary: "Base and place value; converting decimal to binary, octal and hexadecimal (whole and fractional parts) and back; the grouping shortcut between binary, octal and hex.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "💡",
          caption: "Inside a computer every switch is either OFF or ON. Two states give two digits, 0 and 1. Everything you type, from your marks to a photo of the Mysuru Palace, is stored as long strings of these two digits.",
        },
        {
          type: "text",
          md: "A **number system** is a way of writing numbers with a fixed set of symbols called **digits**. The number of digits a system uses is its **base** or **radix**.\n\nAll the systems in this chapter are **positional**: the value of a digit depends on its position. Each position has a **place value** (weight) that is a power of the base. In decimal 345 the 3 is worth 3 × 100 because it sits in the $10^2$ place.\n\nWe write the base as a subscript to avoid confusion: $(101)_2$ is five, but $(101)_{10}$ is one hundred and one.",
        },
        {
          type: "table",
          headers: ["System", "Base", "Digits used", "Example"],
          rows: [
            ["**Binary**", "2", "0, 1", "$(1011)_2$"],
            ["**Octal**", "8", "0 to 7", "$(257)_8$"],
            ["**Decimal**", "10", "0 to 9", "$(486)_{10}$"],
            ["**Hexadecimal**", "16", "0 to 9 and A, B, C, D, E, F (for 10 to 15)", "$(2AF)_{16}$"],
          ],
        },
        {
          type: "text",
          md: "**Any base to decimal.** Multiply each digit by its place value and add. For the fractional part the place values are negative powers of the base.\n\n$(1011.11)_2$ = 1×8 + 0×4 + 1×2 + 1×1 + 1×0.5 + 1×0.25 = 11.75\n\n$(2AF)_{16}$ = 2×256 + 10×16 + 15×1 = 512 + 160 + 15 = 687\n\n**Decimal to any base.** For the **integer part**, divide repeatedly by the base and write the remainders from the **last to the first** (bottom to top). For the **fractional part**, multiply repeatedly by the base and write the integer parts that come out from the **first to the last** (top to bottom).",
        },
        {
          type: "example",
          title: "Decimal to binary with a fraction",
          problem: "Convert $(45.625)_{10}$ to binary.",
          steps: [
            "Integer part, divide by 2: 45 ÷ 2 = 22 r 1; 22 ÷ 2 = 11 r 0; 11 ÷ 2 = 5 r 1; 5 ÷ 2 = 2 r 1; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1.",
            "Read the remainders from the bottom up: 101101.",
            "Fractional part, multiply by 2: 0.625 × 2 = **1**.25; 0.25 × 2 = **0**.5; 0.5 × 2 = **1**.0 (fraction is now 0, so stop).",
            "Read the integer parts from the top down: .101",
            "Check: 32 + 8 + 4 + 1 + 0.5 + 0.125 = 45.625.",
          ],
          answer: "$(45.625)_{10} = (101101.101)_2$",
        },
        {
          type: "mistake",
          wrong: "In repeated division the first remainder I get is the first (leftmost) digit of the answer, so 6 becomes 011.",
          right: "The **first remainder is the least significant bit** (rightmost). Read remainders from the bottom up: 6 ÷ 2 = 3 r 0, 3 ÷ 2 = 1 r 1, 1 ÷ 2 = 0 r 1, so 6 = $(110)_2$. For fractions it is the other way: the first integer part is the first digit after the point.",
          why: "45 happens to give a palindrome (101101), so reading it either way looks right and hides the error. Each division by 2 strips off the units digit first, so that digit belongs on the right. Check a few answers by converting back.",
        },
        {
          type: "text",
          md: "**The grouping shortcut.** Because 8 = $2^3$ and 16 = $2^4$, each octal digit stands for exactly 3 bits and each hex digit for exactly 4 bits.\n\n- Binary to octal: group bits in **threes** from the binary point (leftwards for the integer part, rightwards for the fraction), padding with 0s, and replace each group by its octal digit.\n- Binary to hex: the same with groups of **four**.\n- Octal to hex (or hex to octal): go through binary.",
        },
        {
          type: "example",
          title: "Binary, octal and hex by grouping",
          problem: "Convert $(11010110)_2$ to octal, hexadecimal and decimal.",
          steps: [
            "Octal: groups of three from the right: 11 | 010 | 110 → pad to 011 | 010 | 110 → 3, 2, 6.",
            "Hex: groups of four from the right: 1101 | 0110 → D (13), 6.",
            "Decimal: 128 + 64 + 16 + 4 + 2 = 214.",
            "Cross-check: $(326)_8$ = 3×64 + 2×8 + 6 = 214 and $(D6)_{16}$ = 13×16 + 6 = 214.",
          ],
          answer: "$(11010110)_2 = (326)_8 = (D6)_{16} = (214)_{10}$",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "$(57)_8$ written in hexadecimal is ___.",
              answer: ["2F", "2f", "(2F)16"],
              explain: "5 = 101 and 7 = 111, so the bits are 101111. Regroup in fours: 0010 1111 = 2F. Check: 5×8 + 7 = 47 = 2×16 + 15.",
              hint: "Write each octal digit as 3 bits, then regroup in 4s.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "BaseConvert.java: repeated division in Java, checked against the built-in methods",
          code: `public class BaseConvert
{
    // Converts a non-negative decimal number to any base from 2 to 16
    static String toBase(int n, int base)
    {
        String digits = "0123456789ABCDEF";
        if (n == 0)
            return "0";
        String result = "";
        while (n > 0)
        {
            int r = n % base;                       // remainder = next digit
            result = digits.charAt(r) + result;     // add it on the LEFT
            n = n / base;
        }
        return result;
    }

    public static void main(String[] args)
    {
        System.out.println("45 in base 2  = " + toBase(45, 2));
        System.out.println("687 in base 8  = " + toBase(687, 8));
        System.out.println("687 in base 16 = " + toBase(687, 16));
        System.out.println("Check: " + Integer.toBinaryString(45) + " "
                + Integer.toOctalString(687) + " " + Integer.toHexString(687));
        System.out.println("101101 (base 2) = " + Integer.parseInt("101101", 2));
        System.out.println("2AF (base 16)   = " + Integer.parseInt("2AF", 16));
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`45 in base 2  = 101101`\n\n`687 in base 8  = 1257`\n\n`687 in base 16 = 2AF`\n\n`Check: 101101 1257 2af`\n\n`101101 (base 2) = 45`\n\n`2AF (base 16)   = 687`\n\nThe line `result = digits.charAt(r) + result` puts each new remainder on the **left**, which is exactly \"read the remainders bottom up\". Note that `Integer.toHexString` prints small letters (`2af`).",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each number to its equal value.",
            pairs: [
              ["$(1100100)_2$", "$(100)_{10}$"],
              ["$(144)_8$", "$(64)_{16}$"],
              ["$(3F)_{16}$", "$(63)_{10}$"],
              ["$(0.11)_2$", "$(0.75)_{10}$"],
            ],
            explain: "64 + 32 + 4 = 100; $(144)_8$ = 64 + 32 + 4 = 100 = 6×16 + 4; 3×16 + 15 = 63; 0.5 + 0.25 = 0.75. Converting through binary or decimal always lets you check.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Show every division or multiplication step in a conversion; the steps carry marks. Mark the base on every number, including the answer. Some decimal fractions, such as 0.1, never end in binary (0.000110011...); when that happens, stop at the number of places the question asks for and say the answer is approximate.",
        },
        {
          type: "keypoints",
          items: [
            "Base (radix) = number of digits; place values are powers of the base.",
            "Any base to decimal: multiply each digit by its place value and add.",
            "Decimal to base b: divide the integer part by b and read remainders bottom up; multiply the fraction by b and read integer parts top down.",
            "1 octal digit = 3 bits, 1 hex digit = 4 bits; group from the binary point outwards.",
            "Octal ↔ hex: go through binary.",
          ],
        },
      ],
      flashcards: [
        { front: "Base (radix)", back: "The number of distinct digits a number system uses: 2 for binary, 8 for octal, 10 for decimal, 16 for hexadecimal." },
        { front: "Positional number system", back: "A system in which the value of a digit depends on its position; each position has a weight that is a power of the base." },
        { front: "Hex digits A to F", back: "A = 10, B = 11, C = 12, D = 13, E = 14, F = 15." },
        { front: "Decimal integer to base b", back: "Divide repeatedly by b; the remainders read from last to first give the answer." },
        { front: "Decimal fraction to base b", back: "Multiply repeatedly by b; the integer parts read from first to last give the digits after the point." },
        { front: "Binary to octal / hex", back: "Group bits in 3s (octal) or 4s (hex) starting from the binary point, pad with zeros, and replace each group by one digit." },
        { front: "LSB and MSB", back: "Least significant bit: the rightmost bit (weight $2^0$). Most significant bit: the leftmost bit (highest weight)." },
        { front: "$(0.1)_{10}$ in binary", back: "0.000110011... It never terminates, so computers store it only approximately." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "Convert $(1101101)_2$ to decimal.",
          answer: 109,
          explain: "64 + 32 + 8 + 4 + 1 = 109.",
        },
        {
          kind: "mcq",
          q: "$(100)_{10}$ in octal is:",
          options: ["$(144)_8$", "$(441)_8$", "$(124)_8$", "$(64)_8$"],
          answer: 0,
          explain: "100 ÷ 8 = 12 r 4; 12 ÷ 8 = 1 r 4; 1 ÷ 8 = 0 r 1. Bottom up: 144. 441 is the remainders read the wrong way; 64 is the hex answer.",
        },
        {
          kind: "fill",
          q: "$(A5)_{16}$ in binary is ___ (write all 8 bits).",
          answer: ["10100101"],
          explain: "A = 1010 and 5 = 0101, so A5 = 1010 0101.",
        },
        {
          kind: "numeric",
          q: "Convert $(1011.11)_2$ to decimal.",
          answer: 11.75,
          tolerance: 0.001,
          explain: "8 + 2 + 1 = 11 for the integer part, 0.5 + 0.25 = 0.75 for the fraction.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a valid octal number?",
          options: ["$(128)_8$", "$(777)_8$", "$(1010)_8$", "$(0)_8$"],
          answer: 0,
          explain: "Octal digits run from 0 to 7, so the digit 8 cannot appear.",
        },
        {
          kind: "truefalse",
          q: "Every decimal fraction can be written exactly as a binary fraction with a finite number of bits.",
          answer: false,
          explain: "0.5, 0.25 and 0.625 terminate, but 0.1 and 0.2 give endless repeating bits in binary.",
        },
        {
          kind: "order",
          q: "Arrange from smallest to largest.",
          items: ["$(11110)_2$", "$(37)_8$", "$(20)_{16}$", "$(33)_{10}$"],
          explain: "In decimal they are 30, 31, 32 and 33.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "$(0.375)_{10}$ in binary is:",
          options: ["0.011", "0.110", "0.101", "0.0011"],
          answer: 0,
          explain: "0.375 × 2 = 0.75 → 0; 0.75 × 2 = 1.5 → 1; 0.5 × 2 = 1.0 → 1. Top down: 0.011. 0.110 is the digits read in reverse.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-binary-arithmetic-complements",
      title: "Arithmetic in Other Bases and Complements",
      summary: "Adding and subtracting in binary, octal and hex; sign-magnitude, 1's complement and 2's complement; subtraction by adding the complement; ranges of n-bit numbers.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "**Addition in any base** works like school addition. Add a column; if the total reaches the base, write (total − base) and carry 1.\n\nIn binary the four rules are: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1) and 1 + 1 + 1 = 11 (write 1, carry 1).\n\n**Subtraction** borrows one unit of the next place, which is worth **the base** in the current column: 2 in binary, 8 in octal, 16 in hex.",
        },
        {
          type: "table",
          headers: ["Sum", "Working", "Answer", "Check in decimal"],
          rows: [
            ["$(1011)_2 + (0110)_2$", "1+0 = 1; 1+1 = 0 c1; 0+1+1 = 0 c1; 1+0+1 = 0 c1", "$(10001)_2$", "11 + 6 = 17"],
            ["$(657)_8 + (236)_8$", "7+6 = 13 = 8+5 → 5 c1; 5+3+1 = 9 → 1 c1; 6+2+1 = 9 → 1 c1", "$(1115)_8$", "431 + 158 = 589"],
            ["$(9C)_{16} + (7E)_{16}$", "C+E = 26 = 16+10 → A c1; 9+7+1 = 17 → 1 c1", "$(11A)_{16}$", "156 + 126 = 282"],
          ],
        },
        {
          type: "example",
          title: "Subtraction with borrows in hexadecimal",
          problem: "Find $(2A3)_{16} − (1B7)_{16}$.",
          steps: [
            "Units: 3 < 7, so borrow 16 from the next column: 16 + 3 − 7 = 12 = C.",
            "Sixteens: A was lent, so it is now 9. 9 < B (11), so borrow again: 16 + 9 − 11 = 14 = E.",
            "256s: 2 was lent, so it is now 1. 1 − 1 = 0.",
            "Check: $(2A3)_{16}$ = 675, $(1B7)_{16}$ = 439 and 675 − 439 = 236 = 14×16 + 12 = $(EC)_{16}$.",
          ],
          answer: "$(2A3)_{16} − (1B7)_{16} = (EC)_{16}$",
        },
        {
          type: "mistake",
          wrong: "When I borrow in octal or hex, I add 10 to the digit, just like in decimal.",
          right: "A borrow is always worth **one unit of the next place = the base**: add 8 in octal and 16 in hex. In $(524)_8 − (167)_8$ the units become 8 + 4 − 7 = 5, giving $(335)_8$.",
          why: "Years of decimal arithmetic make \"borrow ten\" automatic. But ten is special only in base 10; in base b the next place is worth b times the current one. Converting both numbers to decimal (340 − 119 = 221 = $(335)_8$) catches the error.",
        },
        {
          type: "text",
          md: "**Storing negative numbers.** A computer has no minus sign, only bits. With n bits there are three common methods:\n\n- **Sign-magnitude:** the leftmost bit is the **sign bit** (0 = positive, 1 = negative); the other bits hold the size.\n- **1's complement:** a negative number is formed by **inverting every bit** of the positive number.\n- **2's complement:** invert every bit, then **add 1**. Java stores `byte`, `short`, `int` and `long` in 2's complement.",
        },
        {
          type: "table",
          headers: ["Method", "+13 (8 bits)", "−13 (8 bits)", "Range with n bits", "Zeros"],
          rows: [
            ["Sign-magnitude", "00001101", "10001101", "$-(2^{n-1}-1)$ to $2^{n-1}-1$", "two (+0 and −0)"],
            ["1's complement", "00001101", "11110010", "$-(2^{n-1}-1)$ to $2^{n-1}-1$", "two"],
            ["2's complement", "00001101", "11110011", "$-2^{n-1}$ to $2^{n-1}-1$", "one"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is the range of an 8-bit number in 2's complement?",
              options: ["−128 to +127", "−127 to +127", "0 to 255", "−256 to +255"],
              answer: 0,
              explain: "$-2^7$ to $2^7 - 1$, i.e. −128 to 127. −127 to +127 is the sign-magnitude and 1's complement range; 0 to 255 is unsigned.",
            },
          ],
        },
        {
          type: "example",
          title: "Subtraction by adding the 2's complement",
          problem: "Using 4 bits, find 12 − 7 and 7 − 12 by 2's complement.",
          steps: [
            "12 = 1100, 7 = 0111. The 2's complement of 0111 is 1000 + 1 = 1001.",
            "12 − 7 = 1100 + 1001 = 1 0101. A carry comes out of the 4th bit: **discard it**. The result 0101 = +5.",
            "The 2's complement of 1100 is 0011 + 1 = 0100. 7 − 12 = 0111 + 0100 = 1011, with **no carry out**.",
            "No carry means the answer is negative and is in 2's complement form. Take the 2's complement of 1011: 0100 + 1 = 0101 = 5, so the answer is −5.",
          ],
          answer: "12 − 7 = 0101 = +5; 7 − 12 = 1011, which is −5 in 2's complement.",
        },
        {
          type: "text",
          md: "In **1's complement subtraction** the carry out of the leftmost bit is not discarded but **added back** to the result (the **end-around carry**): 12 − 7 = 1100 + 1000 = 1 0100 → 0100 + 1 = 0101 = 5.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Complements.java: Java really uses 2's complement",
          code: `public class Complements
{
    public static void main(String[] args)
    {
        int a = 13;
        System.out.println(Integer.toBinaryString(a));
        System.out.println(Integer.toBinaryString(-a));
        System.out.println(~a);
        byte b = (byte) 200;
        System.out.println(b);
        System.out.println(Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
        int x = 0b1100, y = 0b0111;
        System.out.println(x - y);
        System.out.println(x + (~y + 1));
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`1101`\n\n`11111111111111111111111111110011`\n\n`-14`\n\n`-56`\n\n`-128 to 127`\n\n`5`\n\n`5`\n\nAn `int` has 32 bits, so −13 shows as 28 ones before ...0011: the same 2's complement pattern 11110011, just longer. `~` inverts every bit (1's complement), so `~a` is −a − 1 = −14, and `~y + 1` is the 2's complement of y, which is why `x + (~y + 1)` equals `x - y`. The 8-bit pattern of 200 is 11001000, which as a signed byte means 200 − 256 = −56.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "In 8-bit 2's complement, what is 10000000?",
            emoji: "🤔",
            options: ["−128", "−0", "+128", "−127"],
            answer: 0,
            trap: 1,
            explain: "In 2's complement there is only one zero (00000000). The pattern 10000000 is the extra negative number, −128, which is why the range is −128 to +127. \"−0\" is the right reading only in sign-magnitude.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "State the number of bits before you complement; the answer changes with the width. In a 2's complement subtraction, write a sentence about the carry: \"carry discarded, result positive\" or \"no carry, result negative, so take its 2's complement\". This sentence is often worth a mark.",
        },
        {
          type: "keypoints",
          items: [
            "Carry when a column total reaches the base; a borrow is worth one base.",
            "Sign-magnitude: sign bit + size. 1's complement: invert all bits. 2's complement: invert and add 1.",
            "n-bit 2's complement range: $-2^{n-1}$ to $2^{n-1}-1$, with a single zero.",
            "A − B = A + (2's complement of B); discard the final carry; no carry means a negative result.",
            "Java stores integers in 2's complement; `~x` equals −x − 1.",
          ],
        },
      ],
      flashcards: [
        { front: "1 + 1 + 1 in binary", back: "11: write 1 and carry 1." },
        { front: "Value of a borrow in hexadecimal", back: "16 (one unit of the next place). In octal it is 8, in binary 2." },
        { front: "Sign bit", back: "The leftmost bit of a signed number: 0 for positive, 1 for negative." },
        { front: "1's complement", back: "Invert every bit (0 → 1, 1 → 0)." },
        { front: "2's complement", back: "The 1's complement plus 1. Used by Java for byte, short, int and long." },
        { front: "End-around carry", back: "In 1's complement subtraction, the carry out of the leftmost bit is added back to the least significant bit." },
        { front: "8-bit ranges", back: "Unsigned 0 to 255; sign-magnitude and 1's complement −127 to +127; 2's complement −128 to +127." },
        { front: "Why 2's complement is preferred", back: "It has only one zero and subtraction becomes plain addition, so the hardware needs only an adder." },
      ],
      quiz: [
        {
          kind: "fill",
          q: "$(11001)_2 − (01110)_2$ = ___ (in binary, 5 bits).",
          answer: ["01011", "1011"],
          explain: "25 − 14 = 11 = 01011.",
        },
        {
          kind: "mcq",
          q: "The 8-bit 2's complement of 00101100 is:",
          options: ["11010100", "11010011", "10101100", "00101101"],
          answer: 0,
          explain: "Invert: 11010011. Add 1: 11010100. 11010011 is only the 1's complement; 10101100 is the sign-magnitude form of −44.",
        },
        {
          kind: "fill",
          q: "$(657)_8 + (236)_8$ = ___ in octal.",
          answer: ["1115", "(1115)8"],
          explain: "7+6 = 13 → 5 carry 1; 5+3+1 = 9 → 1 carry 1; 6+2+1 = 9 → 1 carry 1; so 1115. Check: 431 + 158 = 589 = 512 + 64 + 8 + 5.",
        },
        {
          kind: "numeric",
          q: "An 8-bit 2's complement number is 11111010. What is its decimal value?",
          answer: -6,
          explain: "It starts with 1, so it is negative. 2's complement of 11111010: 00000101 + 1 = 00000110 = 6. So the value is −6.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Sign-magnitude representation has two different patterns for zero.",
          answer: true,
          explain: "00000000 is +0 and 10000000 is −0. 1's complement also has two zeros (00000000 and 11111111); 2's complement has only one.",
        },
        {
          kind: "mcq",
          q: "What does `System.out.println(~20);` print in Java?",
          options: ["-21", "-20", "11", "-19"],
          answer: 0,
          explain: "`~` inverts every bit, which gives the 1's complement. For any int, ~x = −x − 1, so ~20 = −21.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about 2's complement subtraction A − B (n bits) are correct? (Choose all that apply)",
          options: ["Add A to the 2's complement of B", "A carry out of the leftmost bit is discarded", "No carry out means the result is negative", "The carry is added back to the result"],
          answers: [0, 1, 2],
          explain: "Adding the carry back (end-around carry) belongs to 1's complement subtraction, not 2's complement.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What is the largest positive number in 16-bit 2's complement?",
          answer: 32767,
          explain: "$2^{15} - 1$ = 32767. This is `Short.MAX_VALUE` in Java.",
        },
      ],
    },
    {
      slug: "c11-isc-numbers-board-practice",
      title: "Board Practice: Numbers",
      summary: "Mixed ISC-style questions on conversions, arithmetic in other bases and complements, with a traced program and an evil-number program to write.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "This lesson mixes the whole chapter the way a board paper does: short conversions, an arithmetic question in another base, a complement question and a program. Try each question before reading the working.",
        },
        {
          type: "example",
          title: "Short answer: octal to hexadecimal",
          problem: "Convert $(736.4)_8$ to hexadecimal.",
          steps: [
            "Each octal digit to 3 bits: 7 = 111, 3 = 011, 6 = 110, 4 = 100. So the number is 111011110.100.",
            "Regroup in fours from the point. Integer part: 1 | 1101 | 1110 → 0001 | 1101 | 1110 = 1, D, E.",
            "Fraction part: .100 → pad on the right to .1000 = 8.",
            "Check: $(736.4)_8$ = 448 + 24 + 6 + 0.5 = 478.5 and $(1DE.8)_{16}$ = 256 + 208 + 14 + 0.5 = 478.5.",
          ],
          answer: "$(736.4)_8 = (1DE.8)_{16}$",
        },
        {
          type: "mistake",
          wrong: "When grouping a fraction, I pad zeros on the left, just as I do for the integer part: .100 becomes .0100 = 4.",
          right: "Fraction bits are padded with zeros on the **right** (the far end from the point): .100 → .1000 = 8.",
          why: "Zeros are only harmless at the end away from the point. Zeros on the left of an integer do not change it, and zeros on the right of a fraction do not change it; .0100 is a quarter of .1000.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "$(10110.011)_2$ in octal is ___.",
              answer: ["26.3", "(26.3)8"],
              explain: "Integer: 010 | 110 = 2, 6. Fraction: 011 = 3. Check: 22.375 = 2×8 + 6 + 3/8.",
            },
          ],
        },
        {
          type: "example",
          title: "Complement question",
          problem: "Represent −37 in 8 bits using (a) sign-magnitude, (b) 1's complement, (c) 2's complement.",
          steps: [
            "+37 = 32 + 4 + 1 = 00100101.",
            "(a) Set the sign bit: 10100101.",
            "(b) Invert every bit of +37: 11011010.",
            "(c) Add 1 to the 1's complement: 11011011.",
          ],
          answer: "(a) 10100101 (b) 11011010 (c) 11011011",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the steps of 9 − 14 (8-bit 2's complement) in order.",
            items: [
              "Write 9 = 00001001 and 14 = 00001110",
              "Find the 2's complement of 14: 11110010",
              "Add: 00001001 + 11110010 = 11111011",
              "No carry out, so the result is negative",
              "2's complement of 11111011 is 00000101, so the answer is −5",
            ],
            explain: "Subtraction becomes addition of the complement; the missing carry tells you to complement the result once more to read its size.",
          },
        },
        {
          type: "code",
          lang: "java",
          caption: "EvilNumber.java: an ISC practical-style program",
          code: `public class EvilNumber
{
    public static void main(String[] args)
    {
        int n = 156;
        int m = n, ones = 0;
        String bin = "";
        while (m > 0)
        {
            int bit = m % 2;
            if (bit == 1)
                ones++;
            bin = bit + bin;
            m = m / 2;
        }
        System.out.println("Binary of " + n + " = " + bin);
        System.out.println("Number of 1s = " + ones);
        if (ones % 2 == 0)
            System.out.println("EVIL NUMBER");
        else
            System.out.println("NOT AN EVIL NUMBER");
    }
}`,
        },
        {
          type: "example",
          title: "Trace the program",
          problem: "An **evil number** is a positive whole number with an even number of 1s in its binary form. Trace EvilNumber.java for n = 156 and give its output.",
          steps: [
            "m = 156 → bit 0, bin = \"0\"; m = 78 → bit 0, bin = \"00\"; m = 39 → bit 1, ones = 1, bin = \"100\".",
            "m = 19 → bit 1, ones = 2, bin = \"1100\"; m = 9 → bit 1, ones = 3, bin = \"11100\".",
            "m = 4 → bit 0, bin = \"011100\"; m = 2 → bit 0, bin = \"0011100\"; m = 1 → bit 1, ones = 4, bin = \"10011100\"; m becomes 0 and the loop stops.",
            "ones = 4 is even.",
          ],
          answer: "Binary of 156 = 10011100\n\nNumber of 1s = 4\n\nEVIL NUMBER",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Practical-exam tip",
          md: "In the ISC practical, the examiner looks for an **algorithm**, the **program with comments**, a **variable description** table and sample outputs. Test your program on edge cases: n = 0 (the loop never runs, so print a message), n = 1 and a large number. Writing `bin = bit + bin` builds the binary string in the right order without reversing.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "For \"Write a program\" questions, a few lines of comments explaining the logic earn marks even if a small detail is wrong. Use meaningful names (`ones`, `bin`) rather than single letters everywhere.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "If EvilNumber.java is run with n = 7, what is the last line of output?",
              options: ["NOT AN EVIL NUMBER", "EVIL NUMBER", "Number of 1s = 3", "Binary of 7 = 111"],
              answer: 0,
              explain: "7 = 111 has three 1s, which is odd, so the last line is NOT AN EVIL NUMBER.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Octal ↔ hex: expand to bits, then regroup; pad integers on the left and fractions on the right.",
            "Always check a conversion by changing both answers to decimal.",
            "Negative numbers: give the bit width and the method; 2's complement = invert + 1.",
            "In programs, `bit + bin` builds the binary digits in the correct order.",
          ],
        },
      ],
      flashcards: [
        { front: "Evil number", back: "A positive whole number whose binary form has an even number of 1s (e.g. 156 = 10011100 has four)." },
        { front: "Padding rule for groups", back: "Add zeros to the left of the integer part and to the right of the fraction part." },
        { front: "−37 in 8-bit 2's complement", back: "11011011 (from +37 = 00100101: invert to 11011010, add 1)." },
        { front: "$(736.4)_8$ in hex", back: "$(1DE.8)_{16}$, both equal to 478.5." },
        { front: "Quick check for any conversion", back: "Convert both the question and your answer to decimal; they must be equal." },
        { front: "What the ISC practical expects", back: "Algorithm, commented program, variable description and sample input/output." },
      ],
      quiz: [
        {
          kind: "fill",
          q: "$(3B.C)_{16}$ in binary is ___.",
          answer: ["111011.11", "00111011.1100", "111011.1100"],
          explain: "3 = 0011, B = 1011, C = 1100, so 0011 1011.1100 = 111011.11 (dropping zeros at the ends).",
        },
        {
          kind: "numeric",
          q: "Find the decimal value of $(1000)_{16} − (1)_{16}$.",
          answer: 4095,
          explain: "$(1000)_{16}$ = $16^3$ = 4096, minus 1 gives 4095 = $(FFF)_{16}$.",
        },
        {
          kind: "mcq",
          q: "$(1111)_2 + (0001)_2$ in a 4-bit register gives:",
          options: ["0000 with a carry out", "10000 stored in 4 bits", "1110", "1111"],
          answer: 0,
          explain: "15 + 1 = 16 = 10000, which needs 5 bits. A 4-bit register keeps 0000 and the 1 goes out as a carry.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "In 1's complement subtraction, the carry out of the leftmost bit is:",
          options: ["added to the least significant bit", "discarded", "used as the sign bit", "a sign of overflow"],
          answer: 0,
          explain: "This is the end-around carry. Discarding the carry is the 2's complement rule.",
        },
        {
          kind: "truefalse",
          q: "$(777)_8$ is equal to $(1FF)_{16}$.",
          answer: true,
          explain: "Both are 111 111 111 in binary = 511.",
        },
        {
          kind: "numeric",
          q: "How many 1s does 100 have in binary?",
          answer: 3,
          explain: "100 = 64 + 32 + 4 = 1100100, which has three 1s, so 100 is not an evil number.",
        },
        {
          kind: "mcq",
          q: "In EvilNumber.java, what would happen if `bin = bit + bin;` were changed to `bin = bin + bit;`?",
          options: ["The binary digits would print in reverse order", "The count of 1s would be wrong", "It would not compile", "Nothing would change"],
          answer: 0,
          explain: "Remainders come out LSB first, so adding each on the right reverses the string (156 would show 00111001). The count of 1s is unchanged.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "$(524)_8 − (167)_8$ = ___ in octal.",
          answer: ["335", "(335)8"],
          explain: "Units 8 + 4 − 7 = 5; eights 8 + 1 − 6 = 3 (2 lent 1); 64s 5 − 1 − 1 = 3. Check: 340 − 119 = 221 = 3×64 + 3×8 + 5.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Propositional Logic                                              */
/* ------------------------------------------------------------------ */
const propLogic: Topic = {
  slug: "c11-isc-propositional-logic",
  title: "Propositional Logic",
  icon: "🧠",
  description: "Propositions, the connectives ~, ∧, ∨, ⇒ and ⇔, truth tables and well-formed formulae, tautology, contradiction and contingency, converse, inverse and contrapositive, and the equivalence laws used to simplify formulae.",
  lessons: [
    {
      slug: "c11-isc-propositions-connectives",
      title: "Propositions, Connectives and Truth Tables",
      summary: "What a proposition is, the five connectives with their truth tables, well-formed formulae, writing word statements as formulae, and evaluating them in Java.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🚦",
          caption: "\"If the signal is red, the car stops.\" A traffic camera does not care about feelings; it checks whether each part is true or false. Propositional logic is exactly this kind of true/false reasoning, and it is how a computer makes every decision.",
        },
        {
          type: "text",
          md: "A **proposition** (or statement) is a declarative sentence that is either **true** or **false**, but not both. Its **truth value** is T (true) or F (false).\n\n\"Bengaluru is the capital of Karnataka\" is a proposition (T). \"7 is an even number\" is a proposition (F). \"Close the door\", \"What time is it?\" and \"x + 2 = 5\" are **not** propositions: a command and a question have no truth value, and the last one depends on x.\n\nA **simple** (atomic) proposition has no connective. A **compound** proposition joins simple ones with **connectives**. We name simple propositions with **propositional variables** p, q, r.",
        },
        {
          type: "table",
          headers: ["Connective", "Symbol", "Read as", "True when", "Java"],
          rows: [
            ["**Negation**", "~p", "not p", "p is false", "`!p`"],
            ["**Conjunction**", "p ∧ q", "p and q", "both are true", "`p && q`"],
            ["**Disjunction**", "p ∨ q", "p or q", "at least one is true", "`p || q`"],
            ["**Implication** (conditional)", "p ⇒ q", "if p then q", "every case except p true and q false", "`!p || q`"],
            ["**Biconditional**", "p ⇔ q", "p if and only if q", "both have the same value", "`p == q`"],
          ],
        },
        {
          type: "table",
          headers: ["p", "q", "~p", "p ∧ q", "p ∨ q", "p ⇒ q", "p ⇔ q"],
          rows: [
            ["T", "T", "F", "T", "T", "T", "T"],
            ["T", "F", "F", "F", "T", "F", "F"],
            ["F", "T", "T", "F", "T", "T", "F"],
            ["F", "F", "T", "F", "F", "T", "T"],
          ],
        },
        {
          type: "text",
          md: "In p ⇒ q, p is the **antecedent** (hypothesis) and q is the **consequent** (conclusion). Think of it as a promise: \"If you score 90, I will buy you a cycle.\" The promise is broken only if you score 90 and get no cycle (T ⇒ F). If you do not score 90, the promise is not broken whatever happens, so both rows with p = F are true.",
        },
        {
          type: "mistake",
          wrong: "p ⇒ q is false when p is false, because nothing \"follows\" from a false statement.",
          right: "p ⇒ q is false in **only one row**: p true and q false. When p is false the implication is **true** (it is said to be *vacuously* true). So p ⇒ q ≡ ~p ∨ q.",
          why: "In everyday speech \"if... then\" suggests cause and effect, so a false \"if\" feels like it should make the whole sentence false. Logic only asks whether the promise was broken, and a promise with an unmet condition cannot be broken.",
        },
        {
          type: "text",
          md: "A **well-formed formula (wff)** is a formula built by the rules: every propositional variable (and T, F) is a wff; if A and B are wffs, so are ~A, (A ∧ B), (A ∨ B), (A ⇒ B) and (A ⇔ B). So (p ∧ ~q) ⇒ r is a wff, but p ∧ ∨ q and p ~ q are not.\n\nThe usual **precedence** is ~ first, then ∧, then ∨, then ⇒, then ⇔. Use brackets whenever there is any doubt.\n\nAn **interpretation** of a wff gives a truth value to each variable. With n variables there are $2^n$ interpretations, so a truth table has $2^n$ rows.",
        },
        {
          type: "example",
          title: "From words to a wff",
          problem: "Let p: \"Riya studies\", q: \"Riya passes\", r: \"Riya gets a prize\". Write \"If Riya studies and does not get a prize, she still passes\" as a wff, and find its value when p = T, q = F, r = F.",
          steps: [
            "\"Riya studies and does not get a prize\" is p ∧ ~r.",
            "\"If ... she still passes\" makes this the antecedent and q the consequent: (p ∧ ~r) ⇒ q.",
            "With p = T, r = F: ~r = T, so p ∧ ~r = T.",
            "q = F, so the formula is T ⇒ F = F.",
          ],
          answer: "(p ∧ ~r) ⇒ q; for p = T, q = F, r = F its value is **false**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "How many rows does the truth table of (p ∨ q) ⇒ (r ∧ s) have?",
              options: ["16", "8", "4", "32"],
              answer: 0,
              explain: "There are 4 variables, so $2^4$ = 16 rows.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "TruthTable.java: the five connectives with Java booleans",
          code: `public class TruthTable
{
    static char tf(boolean b)
    {
        return b ? 'T' : 'F';
    }

    public static void main(String[] args)
    {
        boolean[] values = {true, false};
        System.out.println("p q | AND OR IMP BICOND");
        for (boolean p : values)
        {
            for (boolean q : values)
            {
                boolean imp = !p || q;      // p => q is the same as ~p OR q
                boolean bic = (p == q);     // p <=> q is true when both match
                System.out.println(tf(p) + " " + tf(q) + " |  "
                        + tf(p && q) + "   " + tf(p || q) + "   "
                        + tf(imp) + "    " + tf(bic));
            }
        }
    }
}`,
        },
        {
          type: "example",
          title: "Output of TruthTable.java",
          problem: "Give the exact output of TruthTable.java.",
          steps: [
            "The outer loop takes p = true, then false; for each p the inner loop takes q = true, then false. So the rows come in the order TT, TF, FT, FF.",
            "`imp` is `!p || q`, which is false only for p = T, q = F.",
            "`bic` is `p == q`, true for TT and FF.",
          ],
          answer: "p q | AND OR IMP BICOND\nT T |  T   T   T    T\nT F |  F   T   F    F\nF T |  F   T   T    F\nF F |  F   F   T    T",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is each sentence a proposition?",
            groups: ["Proposition", "Not a proposition"],
            items: [
              { text: "The Kaveri flows through Karnataka.", group: 0, hint: "It is a declarative sentence and it is true." },
              { text: "2 + 2 = 5", group: 0, hint: "It has a definite truth value: false. False statements are still propositions." },
              { text: "Please submit your project.", group: 1, hint: "A request or command has no truth value." },
              { text: "Is Java case-sensitive?", group: 1, hint: "A question is neither true nor false." },
              { text: "x is greater than 10.", group: 1, hint: "Its truth depends on x, which is not given." },
              { text: "Every prime number is odd.", group: 0, hint: "It is false (2 is prime and even), but it has a truth value." },
            ],
            explain: "A proposition needs a definite truth value. False sentences count; commands, questions and sentences with an unknown variable do not.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Draw truth tables with the variables in the standard order (TT, TF, FT, FF, or 1 1, 1 0, 0 1, 0 0) and add a column for each sub-formula before the final one. Examiners give step marks for the intermediate columns, and a missing row is the most common way to lose the whole question.",
        },
        {
          type: "keypoints",
          items: [
            "A proposition is a declarative sentence that is either true or false.",
            "Connectives: ~ (not), ∧ (and), ∨ (or), ⇒ (if...then), ⇔ (if and only if).",
            "p ⇒ q is false only when p is true and q is false; it equals ~p ∨ q.",
            "p ⇔ q is true when p and q have the same value.",
            "n variables give $2^n$ interpretations (truth-table rows).",
          ],
        },
      ],
      flashcards: [
        { front: "Proposition", back: "A declarative sentence that is either true or false, but not both." },
        { front: "Conjunction p ∧ q", back: "True only when both p and q are true." },
        { front: "Disjunction p ∨ q", back: "True when at least one of p, q is true (inclusive or)." },
        { front: "Implication p ⇒ q", back: "False only when p is true and q is false. Equivalent to ~p ∨ q." },
        { front: "Biconditional p ⇔ q", back: "True when p and q have the same truth value; same as (p ⇒ q) ∧ (q ⇒ p)." },
        { front: "Antecedent and consequent", back: "In p ⇒ q, p is the antecedent (hypothesis) and q the consequent (conclusion)." },
        { front: "Well-formed formula (wff)", back: "A formula built correctly from variables, T, F, connectives and brackets according to the formation rules." },
        { front: "Rows in a truth table", back: "$2^n$ for n propositional variables." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is a proposition?",
          options: ["The Sun rises in the west.", "Open the window.", "Where is Hampi?", "y + 3 = 7"],
          answer: 0,
          explain: "It is false, but it has a definite truth value. A command, a question and an equation with an unknown are not propositions.",
        },
        {
          kind: "truefalse",
          q: "If p is false, then p ⇒ q is true whatever the value of q.",
          answer: true,
          explain: "Both rows with p = F give T. An implication is false only for T ⇒ F.",
        },
        {
          kind: "mcq",
          q: "p = T, q = F, r = T. What is the value of (p ∨ q) ⇒ (q ∧ r)?",
          options: ["F", "T", "Cannot be found", "Depends on precedence only"],
          answer: 0,
          explain: "p ∨ q = T, q ∧ r = F, and T ⇒ F = F.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "In Java, p ⇒ q can be written as `___ || q`.",
          answer: ["!p"],
          explain: "p ⇒ q ≡ ~p ∨ q, and ~ is `!` in Java.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a well-formed formula?",
          options: ["p ∨ ∧ q", "~(p ∧ q)", "(p ⇒ q) ⇔ r", "~(~p) ∨ q"],
          answer: 0,
          explain: "Two binary connectives cannot stand side by side. Repeated negation, as in ~(~p), is allowed.",
        },
        {
          kind: "numeric",
          q: "How many rows are there in the truth table of a formula with 5 propositional variables?",
          answer: 32,
          explain: "$2^5$ = 32.",
        },
        {
          kind: "mcq",
          q: "Let p: \"It is a holiday\" and q: \"The school is open\". Which wff says \"The school is open only if it is not a holiday\"?",
          options: ["q ⇒ ~p", "~p ⇒ q", "p ⇒ q", "q ∧ ~p"],
          answer: 0,
          explain: "\"A only if B\" means A ⇒ B. Here A is q and B is ~p. Writing ~p ⇒ q (the converse) is the usual slip.",
          difficulty: 3,
          hint: "\"A only if B\" is A ⇒ B, not B ⇒ A.",
        },
        {
          kind: "multi",
          q: "For which (p, q) is p ⇔ q true? (Choose all that apply)",
          options: ["p = T, q = T", "p = T, q = F", "p = F, q = T", "p = F, q = F"],
          answers: [0, 3],
          explain: "A biconditional is true when both sides have the same value.",
        },
      ],
    },
    {
      slug: "c11-isc-tautology-equivalence-laws",
      title: "Tautologies, Equivalence Laws and Simplification",
      summary: "Tautology, contradiction and contingency; satisfiable, unsatisfiable and valid formulae; converse, inverse and contrapositive; the equivalence laws and how to simplify a wff with them.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Some formulae have the same value in every row of their truth table. We classify every wff by its final column:\n\n- **Tautology**: true in **every** interpretation, e.g. p ∨ ~p. A tautology is also called a **valid** formula.\n- **Contradiction**: false in every interpretation, e.g. p ∧ ~p. It is **unsatisfiable**.\n- **Contingency**: true in some rows and false in others, e.g. p ⇒ q.\n\nA formula is **satisfiable** if it is true in **at least one** interpretation. So tautologies and contingencies are satisfiable; only contradictions are not.",
        },
        {
          type: "text",
          md: "Two wffs A and B are **logically equivalent**, written A ≡ B, if they have the same truth value in every interpretation. Equivalently, A ⇔ B is a tautology.\n\nFrom an implication p ⇒ q we form three related statements:\n\n- **Converse**: q ⇒ p\n- **Inverse**: ~p ⇒ ~q\n- **Contrapositive**: ~q ⇒ ~p\n\nThe **contrapositive is equivalent** to the original. The converse and the inverse are equivalent to **each other**, but **not** to the original.",
        },
        {
          type: "example",
          title: "Converse, inverse and contrapositive in words",
          problem: "Write the converse, inverse and contrapositive of \"If it rains, the match is cancelled.\" Which one means the same as the original?",
          steps: [
            "p: it rains; q: the match is cancelled. The statement is p ⇒ q.",
            "Converse (q ⇒ p): If the match is cancelled, it rains.",
            "Inverse (~p ⇒ ~q): If it does not rain, the match is not cancelled.",
            "Contrapositive (~q ⇒ ~p): If the match is not cancelled, it did not rain.",
            "A match can be cancelled for other reasons (a power cut), so the converse can be false while the original is true. Only the contrapositive always agrees.",
          ],
          answer: "Only the contrapositive, \"If the match is not cancelled, it did not rain\", is equivalent to the original.",
        },
        {
          type: "mistake",
          wrong: "The converse of a true statement is also true: if \"If p then q\" holds, then \"If q then p\" holds.",
          right: "The converse q ⇒ p is a **different** statement. For p = F, q = T the original is true but the converse is false. The statement that always matches the original is the **contrapositive** ~q ⇒ ~p.",
          why: "Many familiar sentences are true both ways (\"a triangle is equilateral if and only if its angles are equal\"), so swapping the parts feels safe. Those are biconditionals. \"If it is a mango, it is a fruit\" is true, but \"If it is a fruit, it is a mango\" is not.",
        },
        {
          type: "table",
          headers: ["Law", "Equivalence"],
          rows: [
            ["Commutative", "p ∧ q ≡ q ∧ p; p ∨ q ≡ q ∨ p"],
            ["Associative", "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r); (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)"],
            ["Distributive", "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r); p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)"],
            ["De Morgan's", "~(p ∧ q) ≡ ~p ∨ ~q; ~(p ∨ q) ≡ ~p ∧ ~q"],
            ["Implication", "p ⇒ q ≡ ~p ∨ q"],
            ["Biconditional", "p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p)"],
            ["Double negation", "~(~p) ≡ p"],
            ["Excluded middle", "p ∨ ~p ≡ T"],
            ["Contradiction", "p ∧ ~p ≡ F"],
            ["Identity and domination", "p ∧ T ≡ p; p ∨ F ≡ p; p ∨ T ≡ T; p ∧ F ≡ F"],
            ["Idempotent", "p ∧ p ≡ p; p ∨ p ≡ p"],
            ["Absorption", "p ∨ (p ∧ q) ≡ p; p ∧ (p ∨ q) ≡ p"],
          ],
        },
        {
          type: "example",
          title: "Simplifying with the laws",
          problem: "Simplify ~(p ∨ ~q) ∨ (~p ∧ ~q).",
          steps: [
            "De Morgan's law on the first part: ~(p ∨ ~q) ≡ ~p ∧ ~(~q).",
            "Double negation: ~(~q) ≡ q, so the first part is ~p ∧ q.",
            "The formula is (~p ∧ q) ∨ (~p ∧ ~q). Distributive law (take ~p out): ~p ∧ (q ∨ ~q).",
            "Excluded middle: q ∨ ~q ≡ T, so we get ~p ∧ T.",
            "Identity law: ~p ∧ T ≡ ~p.",
          ],
          answer: "~(p ∨ ~q) ∨ (~p ∧ ~q) ≡ ~p",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The negation of p ⇒ q is:",
              options: ["p ∧ ~q", "~p ⇒ ~q", "~p ∧ q", "q ⇒ p"],
              answer: 0,
              explain: "~(p ⇒ q) ≡ ~(~p ∨ q) ≡ p ∧ ~q by De Morgan's law and double negation. ~p ⇒ ~q is the inverse, not the negation.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "example",
          title: "Proving a tautology without a truth table",
          problem: "Show that p ⇒ (q ⇒ p) is a tautology.",
          steps: [
            "Implication law on the inner part: q ⇒ p ≡ ~q ∨ p.",
            "Implication law on the outer part: ~p ∨ (~q ∨ p).",
            "Associative and commutative laws: (~p ∨ p) ∨ ~q.",
            "Excluded middle: ~p ∨ p ≡ T, and domination: T ∨ ~q ≡ T.",
          ],
          answer: "p ⇒ (q ⇒ p) ≡ T, so it is a tautology (a valid formula).",
        },
        {
          type: "code",
          lang: "java",
          caption: "Classify.java: let Java check every interpretation",
          code: `public class Classify
{
    static boolean imp(boolean a, boolean b)
    {
        return !a || b;
    }

    // formula number f, evaluated for one row of the truth table
    static boolean wff(int f, boolean p, boolean q)
    {
        if (f == 1)
            return imp(p, q) == imp(!q, !p);   // (p => q) <=> (~q => ~p)
        else if (f == 2)
            return p && !p;                    // p AND ~p
        else
            return imp(q, p);                  // q => p
    }

    public static void main(String[] args)
    {
        boolean[] values = {true, false};
        for (int f = 1; f <= 3; f++)
        {
            int trueRows = 0;
            for (boolean p : values)
                for (boolean q : values)
                    if (wff(f, p, q))
                        trueRows++;
            String kind;
            if (trueRows == 4)
                kind = "tautology";
            else if (trueRows == 0)
                kind = "contradiction";
            else
                kind = "contingency";
            System.out.println("Formula " + f + ": " + trueRows + " true rows, " + kind);
        }
    }
}`,
        },
        {
          type: "text",
          md: "Output:\n\n`Formula 1: 4 true rows, tautology`\n\n`Formula 2: 0 true rows, contradiction`\n\n`Formula 3: 3 true rows, contingency`\n\nFormula 1 says an implication is equivalent to its contrapositive; Java confirms it is true in all 4 rows. The converse q ⇒ p (formula 3) fails in one row (p = F, q = T).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Classify each formula.",
            groups: ["Tautology", "Contradiction", "Contingency"],
            items: [
              { text: "p ∨ ~p", group: 0, hint: "One of p, ~p is always true." },
              { text: "(p ∧ q) ⇒ p", group: 0, hint: "If p ∧ q is true, p must be true, so T ⇒ F never happens." },
              { text: "p ∧ ~p", group: 1, hint: "p and ~p can never both be true." },
              { text: "~(p ⇒ p)", group: 1, hint: "p ⇒ p is always true, so its negation is always false." },
              { text: "p ⇒ q", group: 2, hint: "False for p = T, q = F; true otherwise." },
              { text: "p ∨ q", group: 2, hint: "False only when both are false." },
            ],
            explain: "Look at the final column: all T is a tautology, all F is a contradiction, a mix is a contingency.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "When you simplify with laws, write the **name of the law** against every step. \"Prove using a truth table\" and \"prove using laws\" are different instructions; use the method asked for. To show two formulae are **not** equivalent, one row where they differ is enough.",
        },
        {
          type: "keypoints",
          items: [
            "Tautology (valid): always true. Contradiction (unsatisfiable): always false. Contingency: sometimes true.",
            "Satisfiable: true in at least one interpretation.",
            "Contrapositive ~q ⇒ ~p ≡ p ⇒ q; converse and inverse are equivalent to each other only.",
            "Key laws: De Morgan's, implication (p ⇒ q ≡ ~p ∨ q), distributive, excluded middle, double negation.",
            "~(p ⇒ q) ≡ p ∧ ~q.",
          ],
        },
      ],
      flashcards: [
        { front: "Tautology", back: "A wff that is true in every interpretation, e.g. p ∨ ~p. Also called a valid formula." },
        { front: "Contradiction", back: "A wff that is false in every interpretation, e.g. p ∧ ~p. It is unsatisfiable." },
        { front: "Contingency", back: "A wff that is true in some interpretations and false in others." },
        { front: "Satisfiable", back: "True in at least one interpretation (tautologies and contingencies)." },
        { front: "Contrapositive of p ⇒ q", back: "~q ⇒ ~p. It is logically equivalent to p ⇒ q." },
        { front: "Converse and inverse of p ⇒ q", back: "Converse q ⇒ p; inverse ~p ⇒ ~q. They are equivalent to each other but not to p ⇒ q." },
        { front: "De Morgan's laws", back: "~(p ∧ q) ≡ ~p ∨ ~q and ~(p ∨ q) ≡ ~p ∧ ~q." },
        { front: "Negation of p ⇒ q", back: "p ∧ ~q." },
        { front: "Absorption laws", back: "p ∨ (p ∧ q) ≡ p and p ∧ (p ∨ q) ≡ p." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "(p ⇒ q) ∧ (q ⇒ p) is equivalent to:",
          options: ["p ⇔ q", "p ∧ q", "p ∨ q", "~p ⇒ q"],
          answer: 0,
          explain: "This is the biconditional law.",
        },
        {
          kind: "mcq",
          q: "Which formula is a contradiction?",
          options: ["(p ∨ q) ∧ (~p ∧ ~q)", "p ⇒ (p ∨ q)", "p ∨ (q ∨ ~q)", "p ⇔ q"],
          answer: 0,
          explain: "~p ∧ ~q ≡ ~(p ∨ q), so the formula is A ∧ ~A with A = p ∨ q, which is always false. Options 2 and 3 are tautologies; p ⇔ q is a contingency.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Every tautology is satisfiable.",
          answer: true,
          explain: "A tautology is true in every interpretation, so it is certainly true in at least one.",
        },
        {
          kind: "fill",
          q: "The contrapositive of \"If a number is divisible by 4, it is even\" is \"If a number is not even, it is not ___ by 4\".",
          answer: ["divisible"],
          explain: "~q ⇒ ~p: if not even, then not divisible by 4.",
        },
        {
          kind: "mcq",
          q: "Using the laws, p ∨ (p ∧ q) simplifies to:",
          options: ["p", "q", "p ∧ q", "T"],
          answer: 0,
          explain: "Absorption law. Check: if p = T the whole is T; if p = F both parts are F. So the value is always p.",
        },
        {
          kind: "multi",
          q: "Which are equivalent to ~(p ∧ ~q)? (Choose all that apply)",
          options: ["~p ∨ q", "p ⇒ q", "~q ⇒ ~p", "q ⇒ p"],
          answers: [0, 1, 2],
          explain: "De Morgan: ~p ∨ ~(~q) = ~p ∨ q = p ⇒ q, and the contrapositive ~q ⇒ ~p is the same. q ⇒ p is the converse.",
          difficulty: 3,
        },
        {
          kind: "order",
          q: "Put the steps of simplifying ~(~p ∧ q) ∧ (p ∨ q) in order.",
          items: [
            "De Morgan: (p ∨ ~q) ∧ (p ∨ q)",
            "Distributive (take p out): p ∨ (~q ∧ q)",
            "Contradiction law: p ∨ F",
            "Identity law: p",
          ],
          explain: "~(~p ∧ q) = ~(~p) ∨ ~q = p ∨ ~q. Then p ∨ (~q ∧ q) = p ∨ F = p.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "The inverse of a statement is logically equivalent to its converse.",
          answer: true,
          explain: "The inverse ~p ⇒ ~q is the contrapositive of the converse q ⇒ p, so they are equivalent.",
        },
      ],
    },
    {
      slug: "c11-isc-propositional-logic-board-practice",
      title: "Board Practice: Propositional Logic",
      summary: "Mixed ISC-style questions: truth tables for three variables, word problems, proofs with laws, and a Java program that prints a three-variable truth table.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Board papers ask propositional logic in three ways: build a truth table, translate between words and symbols, and prove or simplify using laws. This lesson has one of each, plus a program.",
        },
        {
          type: "example",
          title: "Truth table with intermediate columns",
          problem: "Using a truth table, state whether (p ⇒ q) ∧ (q ⇒ p) and p ⇔ q are equivalent.",
          steps: [
            "Row TT: p ⇒ q = T, q ⇒ p = T, AND = T; p ⇔ q = T.",
            "Row TF: p ⇒ q = F, q ⇒ p = T, AND = F; p ⇔ q = F.",
            "Row FT: p ⇒ q = T, q ⇒ p = F, AND = F; p ⇔ q = F.",
            "Row FF: p ⇒ q = T, q ⇒ p = T, AND = T; p ⇔ q = T.",
            "The final columns T, F, F, T match in all four rows.",
          ],
          answer: "They are logically equivalent (the biconditional law).",
        },
        {
          type: "example",
          title: "Word problem",
          problem: "p: \"The password is correct\", q: \"The OTP is correct\", r: \"Access is granted\". Write: \"Access is granted if and only if both the password and the OTP are correct\". Then write its contrapositive-style consequence: what must be true if access is not granted?",
          steps: [
            "The rule is r ⇔ (p ∧ q).",
            "From it, r ⇒ (p ∧ q) and (p ∧ q) ⇒ r both hold.",
            "Contrapositive of (p ∧ q) ⇒ r: ~r ⇒ ~(p ∧ q).",
            "De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q.",
          ],
          answer: "r ⇔ (p ∧ q). If access is not granted, then ~p ∨ ~q: the password is wrong or the OTP is wrong (or both).",
        },
        {
          type: "mistake",
          wrong: "~(p ∧ q) means \"not p and not q\", so if access is refused, both the password and the OTP must be wrong.",
          right: "By De Morgan's law ~(p ∧ q) ≡ ~p **∨** ~q: at least one of them is wrong. The connective changes from ∧ to ∨ when the negation is pushed inside.",
          why: "It feels natural to \"multiply the not into the bracket\" and keep the connective. But \"not both\" is weaker than \"neither\": a correct password with a wrong OTP is still \"not both\".",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which law proves ~(p ∨ q) ≡ ~p ∧ ~q?",
              options: ["De Morgan's law", "Distributive law", "Absorption law", "Law of implication"],
              answer: 0,
              explain: "It is the second of De Morgan's laws.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Table3.java: write a program to print the truth table of F = (p ∧ q) ∨ (~p ∧ r)",
          code: `public class Table3
{
    public static void main(String[] args)
    {
        int count = 0;
        System.out.println("p q r  F");
        for (int p = 1; p >= 0; p--)
        {
            for (int q = 1; q >= 0; q--)
            {
                for (int r = 1; r >= 0; r--)
                {
                    boolean P = (p == 1), Q = (q == 1), R = (r == 1);
                    boolean F = (P && Q) || (!P && R);
                    if (F)
                        count++;
                    System.out.println(p + " " + q + " " + r + "  " + (F ? 1 : 0));
                }
            }
        }
        System.out.println("F is true in " + count + " rows");
    }
}`,
        },
        {
          type: "example",
          title: "Predict the output",
          problem: "Without running it, give the output of Table3.java.",
          steps: [
            "Three nested loops each count 1 then 0, so there are 2 × 2 × 2 = 8 rows in the order 111, 110, 101, 100, 011, 010, 001, 000.",
            "When p = 1, ~p is false, so F = q. Rows 111 and 110 give 1; rows 101 and 100 give 0.",
            "When p = 0, F = r. Rows 011 and 001 give 1; rows 010 and 000 give 0.",
            "Four rows are true.",
          ],
          answer: "p q r  F\n1 1 1  1\n1 1 0  1\n1 0 1  0\n1 0 0  0\n0 1 1  1\n0 1 0  0\n0 0 1  1\n0 0 0  0\nF is true in 4 rows",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each formula with an equivalent one.",
            pairs: [
              ["p ⇒ q", "~p ∨ q"],
              ["~(p ∨ q)", "~p ∧ ~q"],
              ["p ∧ (p ∨ q)", "p"],
              ["~(p ⇒ q)", "p ∧ ~q"],
              ["p ⇔ q", "(p ⇒ q) ∧ (q ⇒ p)"],
            ],
            explain: "Implication law, De Morgan's law, absorption, negation of an implication and the biconditional law. These five cover most board simplifications.",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "Practical-exam tip",
          md: "To print a truth table in Java, use one loop per variable, counting from 1 down to 0, so the rows come out in the standard order. Convert the int to boolean with `p == 1`. Java has no ⇒ operator: write `!a || b`. For ⇔ use `a == b`.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "If asked to \"state whether the formula is a tautology\", a complete truth table with a clear final column and a one-line conclusion (\"all entries are T, hence a tautology\") earns full marks. With laws, finish on T to prove a tautology.",
        },
        {
          type: "keypoints",
          items: [
            "Equivalence by truth table: the final columns must match in every row.",
            "\"A if and only if B\" is A ⇔ B; \"A only if B\" is A ⇒ B.",
            "Pushing ~ inside a bracket swaps ∧ and ∨ (De Morgan).",
            "In Java: `!` for ~, `&&` for ∧, `||` for ∨, `!a || b` for ⇒, `a == b` for ⇔.",
          ],
        },
      ],
      flashcards: [
        { front: "\"A only if B\"", back: "A ⇒ B." },
        { front: "\"A if B\"", back: "B ⇒ A." },
        { front: "\"Not both p and q\"", back: "~(p ∧ q) ≡ ~p ∨ ~q (at least one is false)." },
        { front: "\"Neither p nor q\"", back: "~(p ∨ q) ≡ ~p ∧ ~q (both are false)." },
        { front: "Java for p ⇔ q", back: "`p == q` for two boolean values." },
        { front: "Standard row order for 3 variables", back: "111, 110, 101, 100, 011, 010, 001, 000 (or TTT ... FFF)." },
        { front: "(p ∧ q) ∨ (~p ∧ r)", back: "Takes the value of q when p is true and the value of r when p is false." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "p = F, q = T, r = F. Value of (p ∧ q) ∨ (~p ∧ r)?",
          options: ["F", "T", "Undefined", "Same as q"],
          answer: 0,
          explain: "p is false, so the formula takes the value of r, which is F.",
        },
        {
          kind: "mcq",
          q: "Which formula is a tautology?",
          options: ["(p ∧ (p ⇒ q)) ⇒ q", "(q ∧ (p ⇒ q)) ⇒ p", "p ⇒ (p ∧ q)", "(p ∨ q) ⇒ p"],
          answer: 0,
          explain: "If p is true and p ⇒ q is true, q must be true, so T ⇒ F never happens. Option 2 fails for p = F, q = T; option 3 fails for p = T, q = F; option 4 fails for p = F, q = T.",
          difficulty: 3,
        },
        {
          kind: "fill",
          q: "\"I will come only if you call me\" with p: I will come, q: you call me, is written p ___ q (one symbol).",
          answer: ["⇒", "=>", "->", "→"],
          explain: "\"A only if B\" means A ⇒ B.",
        },
        {
          kind: "truefalse",
          q: "p ⇒ q and q ⇒ p always have the same truth value.",
          answer: false,
          explain: "They differ when p = T, q = F and when p = F, q = T.",
        },
        {
          kind: "numeric",
          q: "In how many rows of its truth table is p ∨ q ∨ r false?",
          answer: 1,
          explain: "A disjunction is false only when every part is false: just the row p = q = r = F.",
        },
        {
          kind: "mcq",
          q: "Which Java expression correctly evaluates p ⇒ (q ∧ r) for boolean p, q, r?",
          options: ["`!p || (q && r)`", "`p || (q && r)`", "`!p && (q && r)`", "`(p && q) || r`"],
          answer: 0,
          explain: "A ⇒ B ≡ ~A ∨ B with A = p and B = q ∧ r.",
        },
        {
          kind: "multi",
          q: "Which of these are satisfiable? (Choose all that apply)",
          options: ["p ∧ q", "p ∨ ~p", "p ∧ ~p", "~p ⇒ p"],
          answers: [0, 1, 3],
          explain: "p ∧ q is true for p = q = T; p ∨ ~p is always true; ~p ⇒ p ≡ p ∨ p ≡ p, true when p = T. Only p ∧ ~p is never true.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Computer Hardware                                                */
/* ------------------------------------------------------------------ */
const hardware: Topic = {
  slug: "c11-isc-computer-hardware",
  title: "Computer Hardware",
  icon: "🔌",
  description: "Elementary logic gates and their truth tables, switching circuits, NAND and NOR as universal gates, and the combinational circuits built from gates: half adder, full adder, decoder, encoder and multiplexer.",
  lessons: [
    {
      slug: "c11-isc-logic-gates",
      title: "Logic Gates and Switching Circuits",
      summary: "NOT, AND, OR, NAND, NOR, XOR and XNOR gates with their Boolean expressions and truth tables; how gates match propositional connectives and switches in series and parallel; simulating gates with Java's bitwise operators.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🔦",
          caption: "Two switches control one bulb in a corridor. If they are in series, both must be ON for light; if they are in parallel, either one will do. Every chip in your phone is built from millions of tiny switches combined in exactly these ways.",
        },
        {
          type: "text",
          md: "A **logic gate** is an electronic circuit with one or more inputs and one output, where every input and the output is a **binary signal**: 1 (high voltage, true) or 0 (low voltage, false). The output depends only on the present inputs, according to a fixed rule given by the gate's **truth table**.\n\nGates are the hardware form of propositional logic: AND matches ∧, OR matches ∨, NOT matches ~, 1 matches T and 0 matches F. In **Boolean algebra** we write A·B (or AB) for AND, A + B for OR and A' for NOT A.",
        },
        {
          type: "table",
          headers: ["Gate", "Expression", "Output is 1 when", "Symbol (in words)"],
          rows: [
            ["**NOT** (inverter)", "X = A'", "the input is 0", "triangle with a small circle (bubble) at the tip"],
            ["**AND**", "X = A·B", "all inputs are 1", "D-shape: flat back, round front"],
            ["**OR**", "X = A + B", "at least one input is 1", "curved back, pointed front"],
            ["**NAND**", "X = (A·B)'", "at least one input is 0", "AND symbol with a bubble at the output"],
            ["**NOR**", "X = (A + B)'", "all inputs are 0", "OR symbol with a bubble at the output"],
            ["**XOR**", "X = A ⊕ B = A'B + AB'", "the inputs are different", "OR symbol with an extra curved line at the back"],
            ["**XNOR**", "X = (A ⊕ B)' = A'B' + AB", "the inputs are the same", "XOR symbol with a bubble at the output"],
          ],
        },
        {
          type: "table",
          headers: ["A", "B", "AND", "OR", "NAND", "NOR", "XOR", "XNOR"],
          rows: [
            ["0", "0", "0", "0", "1", "1", "0", "1"],
            ["0", "1", "0", "1", "1", "0", "1", "0"],
            ["1", "0", "0", "1", "1", "0", "1", "0"],
            ["1", "1", "1", "1", "0", "0", "0", "1"],
          ],
        },
        {
          type: "text",
          md: "**Switching circuits.** Think of a switch as a variable: closed = 1, open = 0, and the lamp glowing = output 1.\n\n- Two switches in **series**: the lamp glows only if both are closed. This is **AND** (A·B).\n- Two switches in **parallel**: the lamp glows if either is closed. This is **OR** (A + B).\n\nSo a Boolean expression can be drawn as a switching circuit, as a gate circuit, or written as a propositional formula; all three describe the same function.",
        },
        {
          type: "example",
          title: "Evaluating a gate circuit",
          problem: "A circuit gives X = (A + B)' · (B ⊕ C). Find X for A = 0, B = 0, C = 1, and for A = 0, B = 1, C = 0.",
          steps: [
            "First input set: A + B = 0 + 0 = 0, so the NOR part (A + B)' = 1.",
            "B ⊕ C = 0 ⊕ 1 = 1 (inputs differ). X = 1 · 1 = **1**.",
            "Second input set: A + B = 0 + 1 = 1, so (A + B)' = 0.",
            "Whatever B ⊕ C is, X = 0 · (anything) = **0**.",
          ],
          answer: "X = 1 for (0, 0, 1) and X = 0 for (0, 1, 0).",
        },
        {
          type: "mistake",
          wrong: "A NAND gate gives 1 only when all inputs are 0, the same as \"NOT of each input, then AND\".",
          right: "NAND = NOT of (AND): (A·B)' is 1 whenever **at least one** input is 0, so it is 0 only for 1, 1. By De Morgan's law (A·B)' = A' + B', not A'·B'. The gate that is 1 only for all-0 inputs is **NOR**: (A + B)' = A'·B'.",
          why: "The bubble seems to \"flip\" each input, so learners invert the inputs and keep the AND. But the bubble sits on the output. Pushing it to the inputs changes AND into OR, exactly as De Morgan's law says.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which gate gives output 1 only when its two inputs are different?",
              options: ["XOR", "XNOR", "NOR", "NAND"],
              answer: 0,
              explain: "XOR (exclusive OR) is 1 for 01 and 10. XNOR is the opposite: 1 when the inputs are the same.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Gates.java: Java's bitwise operators & | ^ act as gates on 0 and 1",
          code: `public class Gates
{
    public static void main(String[] args)
    {
        System.out.println("A B  AND OR XOR NAND NOR XNOR");
        for (int a = 0; a <= 1; a++)
        {
            for (int b = 0; b <= 1; b++)
            {
                int and = a & b;
                int or = a | b;
                int xor = a ^ b;
                System.out.println(a + " " + b + "   " + and + "   " + or + "   " + xor
                        + "    " + (and ^ 1) + "    " + (or ^ 1) + "    " + (xor ^ 1));
            }
        }
        System.out.println("~1 = " + (~1) + ", 1 ^ 1 = " + (1 ^ 1));
    }
}`,
        },
        {
          type: "text",
          md: "The program prints the same four rows as the truth table above (in the order 00, 01, 10, 11), then the line `~1 = -2, 1 ^ 1 = 0`.\n\nThat last line matters. `~` inverts **all 32 bits** of an `int`, so `~1` is −2, not 0. To invert a single bit that is 0 or 1, use `x ^ 1` (XOR with 1 flips the bit).",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each description to its gate.",
            pairs: [
              ["Output 0 only when all inputs are 1", "NAND"],
              ["Output 1 only when all inputs are 0", "NOR"],
              ["Output 1 when the inputs are equal", "XNOR"],
              ["Two switches in series with a lamp", "AND"],
              ["Two switches in parallel with a lamp", "OR"],
            ],
            explain: "NAND and NOR are AND and OR with the output inverted. Series switches need both closed (AND); parallel switches need either (OR).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "When you draw a gate circuit in the paper, label every intermediate output with its expression (for example \"A + B\" after the OR gate). If the final expression is wrong, the labels still earn part marks. Draw the bubble clearly on NAND, NOR and XNOR; without it the gate is a different one.",
        },
        {
          type: "keypoints",
          items: [
            "AND: 1 if all inputs are 1. OR: 1 if any input is 1. NOT: inverts.",
            "NAND = (AB)', 0 only for all 1s. NOR = (A + B)', 1 only for all 0s.",
            "XOR = A'B + AB' (1 when inputs differ); XNOR = A'B' + AB (1 when equal).",
            "Series switches = AND, parallel switches = OR.",
            "In Java, `&`, `|`, `^` work as gates on 0/1; flip a bit with `^ 1`, not `~`.",
          ],
        },
      ],
      flashcards: [
        { front: "Logic gate", back: "An electronic circuit that takes one or more binary inputs and gives one binary output according to a fixed logical rule." },
        { front: "NAND gate", back: "X = (A·B)'. Output is 0 only when all inputs are 1." },
        { front: "NOR gate", back: "X = (A + B)'. Output is 1 only when all inputs are 0." },
        { front: "XOR gate", back: "X = A ⊕ B = A'B + AB'. Output is 1 when the two inputs are different." },
        { front: "XNOR gate", back: "X = A'B' + AB. Output is 1 when the two inputs are the same (equality detector)." },
        { front: "Switches in series", back: "Behave like AND: the lamp glows only if all switches are closed." },
        { front: "Switches in parallel", back: "Behave like OR: the lamp glows if any switch is closed." },
        { front: "Java: ~1 vs 1 ^ 1", back: "~1 = −2 (all 32 bits inverted); 1 ^ 1 = 0 (one bit flipped)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A 3-input AND gate has inputs 1, 1, 0. Its output is:",
          options: ["0", "1", "Undefined", "Same as the last input inverted"],
          answer: 0,
          explain: "AND needs every input to be 1.",
        },
        {
          kind: "mcq",
          q: "For A = 1, B = 0, which gate gives output 0?",
          options: ["NOR", "OR", "NAND", "XOR"],
          answer: 0,
          explain: "A + B = 1, so (A + B)' = 0. OR, NAND and XOR all give 1 for these inputs.",
        },
        {
          kind: "fill",
          q: "The Boolean expression of an XNOR gate is A'B' + ___.",
          answer: ["AB", "A.B", "A·B", "BA"],
          explain: "XNOR is 1 when both are 0 (A'B') or both are 1 (AB).",
        },
        {
          kind: "truefalse",
          q: "Two switches connected in parallel with a lamp represent the AND operation.",
          answer: false,
          explain: "Parallel switches give OR: closing either one completes the circuit. Series switches give AND.",
        },
        {
          kind: "numeric",
          q: "What does `System.out.println(1 ^ 0 ^ 1);` print in Java?",
          answer: 0,
          explain: "1 ^ 0 = 1, then 1 ^ 1 = 0. A chain of XORs is 1 when the number of 1s is odd; here there are two 1s.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "X = (A·B)' + C. For A = 1, B = 1, C = 0, X is:",
          options: ["0", "1", "Depends on the gate type", "Undefined"],
          answer: 0,
          explain: "A·B = 1, so (A·B)' = 0, and 0 + 0 = 0.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which gates give output 1 when both inputs are 0? (Choose all that apply)",
          options: ["NAND", "NOR", "XNOR", "XOR", "OR"],
          answers: [0, 1, 2],
          explain: "NAND: (0·0)' = 1. NOR: (0 + 0)' = 1. XNOR: inputs equal, so 1. XOR and OR give 0.",
        },
        {
          kind: "mcq",
          q: "Which propositional connective corresponds to the XNOR gate?",
          options: ["⇔ (biconditional)", "⇒ (implication)", "∨ (disjunction)", "∧ (conjunction)"],
          answer: 0,
          explain: "Both are true exactly when the two inputs have the same value.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-universal-gates",
      title: "NAND and NOR: the Universal Gates",
      summary: "Why NAND and NOR are called universal, building NOT, AND, OR and XOR from NAND gates alone and from NOR gates alone, and converting an AND-OR circuit into a NAND-only or NOR-only circuit.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Every Boolean function can be written using only AND, OR and NOT. So if one kind of gate can make all three, it can make **any** circuit. Such a gate is called a **universal gate**. NAND and NOR are both universal.\n\nThis is a practical advantage: a chip factory can make millions of identical NAND gates (they are also cheap and fast in silicon) and wire them into any circuit.",
        },
        {
          type: "table",
          headers: ["Build", "Using NAND only", "NAND gates", "Using NOR only", "NOR gates"],
          rows: [
            ["NOT A", "(A·A)' = A'", "1", "(A + A)' = A'", "1"],
            ["A AND B", "((A·B)')' : NAND followed by a NAND-inverter", "2", "(A' + B')' : invert each input, then NOR", "3"],
            ["A OR B", "(A'·B')' : invert each input, then NAND", "3", "((A + B)')' : NOR followed by a NOR-inverter", "2"],
          ],
        },
        {
          type: "example",
          title: "Proving that NAND makes OR",
          problem: "Show that the circuit \"NAND each input with itself, then NAND the two results\" gives A + B.",
          steps: [
            "The first gate gives (A·A)' = A' (idempotent law A·A = A). The second gives B'.",
            "The third gate gives (A'·B')'.",
            "De Morgan's law: (A'·B')' = (A')' + (B')'.",
            "Double complement: (A')' = A, so the output is A + B. Three NAND gates in all.",
          ],
          answer: "(A'·B')' = A + B, so 3 NAND gates make an OR gate.",
        },
        {
          type: "mistake",
          wrong: "To build an AND gate from NOR gates I need 2 gates, just as I need 2 NAND gates.",
          right: "AND from NOR needs **3** gates: invert A and invert B (2 NOR gates), then NOR them: (A' + B')' = A·B. It is OR that needs only 2 NOR gates. The two tables are mirror images: NAND makes AND cheaply, NOR makes OR cheaply.",
          why: "Learners copy the NAND table without checking the logic. A NAND gate already contains an AND (just add an inverter); a NOR gate already contains an OR. The \"other\" operation needs De Morgan's law and two extra inverters.",
        },
        {
          type: "text",
          md: "**Converting a circuit to NAND only.** An expression in **sum-of-products** form (AND gates feeding an OR gate) converts directly: replace every AND and the final OR with NAND gates. Because F = AB + CD = ((AB)'·(CD)')' by De Morgan's law, three NAND gates do the job.\n\n**Converting to NOR only.** An expression in **product-of-sums** form (OR gates feeding an AND gate) converts the same way to NOR gates: F = (A + B)(C + D) = ((A + B)' + (C + D)')'.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "How many NAND gates are needed to make a 2-input OR gate?",
              answer: 3,
              explain: "Two NAND gates act as inverters for A and B, then a third NAND gives (A'B')' = A + B.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "NandOnly.java: every gate built from one method, nand()",
          code: `public class NandOnly
{
    static int nand(int a, int b)
    {
        return (a & b) ^ 1;
    }

    static int not(int a)
    {
        return nand(a, a);                     // 1 NAND gate
    }

    static int and(int a, int b)
    {
        return not(nand(a, b));                // 2 NAND gates
    }

    static int or(int a, int b)
    {
        return nand(not(a), not(b));           // 3 NAND gates
    }

    static int xor(int a, int b)
    {
        int m = nand(a, b);                    // 4 NAND gates
        return nand(nand(a, m), nand(b, m));
    }

    public static void main(String[] args)
    {
        System.out.println("A B  NOT A  AND  OR  XOR");
        for (int a = 0; a <= 1; a++)
            for (int b = 0; b <= 1; b++)
                System.out.println(a + " " + b + "    " + not(a) + "     " + and(a, b)
                        + "    " + or(a, b) + "    " + xor(a, b));
    }
}`,
        },
        {
          type: "table",
          headers: ["A", "B", "NOT A", "AND", "OR", "XOR"],
          rows: [
            ["0", "0", "1", "0", "0", "0"],
            ["0", "1", "1", "0", "1", "1"],
            ["1", "0", "0", "0", "1", "1"],
            ["1", "1", "0", "1", "1", "0"],
          ],
        },
        {
          type: "example",
          title: "Why the 4-NAND XOR works",
          problem: "In `xor()`, m = (AB)'. Show that nand(nand(a, m), nand(b, m)) equals A ⊕ B.",
          steps: [
            "nand(a, m) = (A·(AB)')'. nand(b, m) = (B·(AB)')'.",
            "The last NAND of two NANDs gives an OR of the products: A·(AB)' + B·(AB)' (De Morgan and double complement).",
            "Factor out (AB)': (A + B)·(AB)' = (A + B)(A' + B') by De Morgan.",
            "Multiply out: AA' + AB' + A'B + BB' = 0 + AB' + A'B + 0 = A ⊕ B.",
          ],
          answer: "The four-NAND circuit gives AB' + A'B = A ⊕ B, matching the XOR column printed by the program.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "How many NOR gates make a 2-input AND gate?",
            emoji: "🧮",
            options: ["3", "2", "1", "4"],
            answer: 0,
            trap: 1,
            explain: "Two NOR gates invert A and B; a third gives (A' + B')' = A·B. Two NOR gates are enough only for OR.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "\"Show that NAND (or NOR) is a universal gate\" is a frequent question. Draw all three circuits (NOT, AND, OR) and write the Boolean proof under each one. Give the gate count; it shows you understand the circuit.",
        },
        {
          type: "keypoints",
          items: [
            "A universal gate can build NOT, AND and OR, so it can build any circuit.",
            "NAND: NOT = 1, AND = 2, OR = 3 gates. NOR: NOT = 1, OR = 2, AND = 3 gates.",
            "XOR needs 4 NAND gates.",
            "Sum of products (AND-OR) → all NAND; product of sums (OR-AND) → all NOR.",
            "Every conversion is justified by De Morgan's law and double complement.",
          ],
        },
      ],
      flashcards: [
        { front: "Universal gate", back: "A gate from which every other gate (and so every Boolean function) can be built. NAND and NOR are universal." },
        { front: "NOT from NAND", back: "Join both inputs: (A·A)' = A'." },
        { front: "AND from NAND", back: "NAND followed by a NAND used as an inverter: ((AB)')' = AB. 2 gates." },
        { front: "OR from NAND", back: "Invert each input with a NAND, then NAND them: (A'B')' = A + B. 3 gates." },
        { front: "OR from NOR", back: "NOR followed by a NOR inverter: ((A + B)')' = A + B. 2 gates." },
        { front: "AND from NOR", back: "Invert each input with a NOR, then NOR them: (A' + B')' = AB. 3 gates." },
        { front: "AB + CD with NAND only", back: "((AB)'·(CD)')': two NANDs for the products and one NAND to combine them." },
        { front: "XOR from NAND", back: "4 gates: m = (AB)', then ((A·m)'·(B·m)')'." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Why are NAND and NOR called universal gates?",
          options: ["Any Boolean function can be built using only one of them", "They have the most inputs", "They are used in every computer's display", "They are the only gates with a bubble"],
          answer: 0,
          explain: "Each can make NOT, AND and OR, and those three can make any function.",
        },
        {
          kind: "numeric",
          q: "How many NOR gates are needed to make a 2-input OR gate?",
          answer: 2,
          explain: "A NOR followed by a NOR used as an inverter: ((A + B)')' = A + B.",
        },
        {
          kind: "fill",
          q: "By De Morgan's law, (A'·B')' = ___.",
          answer: ["A+B", "A + B", "B+A", "B + A"],
          explain: "(A'·B')' = (A')' + (B')' = A + B.",
        },
        {
          kind: "truefalse",
          q: "Connecting both inputs of a NOR gate together makes a NOT gate.",
          answer: true,
          explain: "(A + A)' = A' because A + A = A.",
        },
        {
          kind: "mcq",
          q: "F = AB + CD is to be built with NAND gates only. The circuit is:",
          options: ["NAND(NAND(A, B), NAND(C, D))", "NAND(NAND(A, C), NAND(B, D))", "NOR(NAND(A, B), NAND(C, D))", "NAND(A, B, C, D)"],
          answer: 0,
          explain: "((AB)'·(CD)')' = AB + CD by De Morgan's law. This AND-OR to NAND-NAND swap works for any sum of products.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The output of NOR(NOR(A, A), NOR(B, B)) is:",
          options: ["A·B", "A + B", "(A·B)'", "A ⊕ B"],
          answer: 0,
          explain: "The inner gates give A' and B'. NOR of them is (A' + B')' = A·B.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements are true? (Choose all that apply)",
          options: ["A product-of-sums circuit converts directly to all NOR gates", "XOR needs 4 NAND gates", "AND needs 3 NAND gates", "NOT needs 1 NOR gate"],
          answers: [0, 1, 3],
          explain: "AND from NAND needs only 2 gates; it is OR that needs 3.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-adders-encoders-mux",
      title: "Adders, Decoders, Encoders and Multiplexers",
      summary: "Half adder and full adder with their expressions and truth tables, a full adder from two half adders, 2-to-4 and 3-to-8 decoders, the octal-to-binary encoder, and 2:1 and 4:1 multiplexers.",
      minutes: 25,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "A **combinational circuit** is a circuit of gates whose outputs depend only on the present inputs (it has no memory). The adders, decoders, encoders and multiplexers in this lesson are all combinational circuits, and each is a small part inside a processor.",
        },
        {
          type: "text",
          md: "**Half adder.** Adds two bits A and B and gives a **sum** S and a **carry** C.\n\nS = A ⊕ B = A'B + AB' and C = A·B. So a half adder is one XOR gate and one AND gate. It is called \"half\" because it cannot accept a carry coming in from a previous column.\n\n**Full adder.** Adds three bits: A, B and an incoming carry Cin.\n\nS = A ⊕ B ⊕ Cin and Cout = AB + BCin + ACin = AB + Cin(A ⊕ B).\n\nA full adder can be built from **two half adders and one OR gate**: the first adds A and B, the second adds that sum to Cin, and the OR joins the two carries.",
        },
        {
          type: "table",
          headers: ["A", "B", "Cin", "S", "Cout"],
          rows: [
            ["0", "0", "0", "0", "0"],
            ["0", "0", "1", "1", "0"],
            ["0", "1", "0", "1", "0"],
            ["0", "1", "1", "0", "1"],
            ["1", "0", "0", "1", "0"],
            ["1", "0", "1", "0", "1"],
            ["1", "1", "0", "0", "1"],
            ["1", "1", "1", "1", "1"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "FullAdder.java: two half adders and an OR gate; prints exactly the table above",
          code: `public class FullAdder
{
    public static void main(String[] args)
    {
        System.out.println("A B Cin | S Cout");
        for (int a = 0; a <= 1; a++)
            for (int b = 0; b <= 1; b++)
                for (int c = 0; c <= 1; c++)
                {
                    int s1 = a ^ b;             // first half adder: sum
                    int c1 = a & b;             // first half adder: carry
                    int sum = s1 ^ c;           // second half adder: sum
                    int c2 = s1 & c;            // second half adder: carry
                    int cout = c1 | c2;         // OR gate joins the carries
                    System.out.println(a + " " + b + "  " + c + "  | " + sum + "  " + cout);
                }
    }
}`,
        },
        {
          type: "example",
          title: "Why Cout = AB + Cin(A ⊕ B)",
          problem: "From the truth table, derive Cout and show it equals AB + BCin + ACin.",
          steps: [
            "Cout is 1 in rows 011, 101, 110 and 111. As minterms: A'BCin + AB'Cin + ABCin' + ABCin.",
            "Group the last two: AB(Cin' + Cin) = AB.",
            "Group the first two: Cin(A'B + AB') = Cin(A ⊕ B). So Cout = AB + Cin(A ⊕ B).",
            "In words: a carry comes out if both A and B are 1, or if exactly one of them is 1 and a carry comes in. That is the same as \"at least two of the three inputs are 1\", i.e. AB + BCin + ACin.",
          ],
          answer: "Cout = AB + Cin(A ⊕ B) = AB + BCin + ACin (the majority function of A, B, Cin).",
        },
        {
          type: "mistake",
          wrong: "A full adder is just two half adders joined together; the two carries go into a second XOR (or AND) gate.",
          right: "The two carries are joined by an **OR** gate. They can never both be 1 at once (if A = B = 1 then A ⊕ B = 0, so the second carry is 0), so OR gives the correct carry.",
          why: "\"Adding\" the carries sounds like it needs another adder or XOR. Because the two carries are never 1 together, XOR and OR would give the same result here, but the standard circuit and the board answer use an OR gate.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "For a full adder with A = 1, B = 1, Cin = 1, the outputs are:",
              options: ["S = 1, Cout = 1", "S = 0, Cout = 1", "S = 1, Cout = 0", "S = 0, Cout = 0"],
              answer: 0,
              explain: "1 + 1 + 1 = 3 = binary 11: sum 1, carry 1.",
            },
          ],
        },
        {
          type: "text",
          md: "**Decoder.** Has n inputs and up to $2^n$ outputs; for each input code **exactly one** output is 1. A 2-to-4 decoder with inputs A (MSB) and B gives D0 = A'B', D1 = A'B, D2 = AB', D3 = AB, so it needs two NOT and four AND gates. A 3-to-8 decoder turns a 3-bit code into one of 8 lines. Decoders select a memory chip from an address.\n\n**Encoder.** The reverse: $2^n$ input lines (only one active at a time) and n outputs giving the code of the active line. In an **octal-to-binary (8-to-3) encoder**: A2 = D4 + D5 + D6 + D7, A1 = D2 + D3 + D6 + D7, A0 = D1 + D3 + D5 + D7. Each output is one OR gate. A **decimal-to-BCD encoder** turns a key press 0 to 9 into a 4-bit code.\n\n**Multiplexer (MUX).** A **data selector**: $2^n$ data inputs, n **select lines**, one output. The select lines choose which input goes to the output. 2:1 MUX: Y = S'I0 + SI1. 4:1 MUX: Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3.",
        },
        {
          type: "example",
          title: "Encoder output",
          problem: "In an octal-to-binary encoder, input line D6 is 1 and all others are 0. Find A2 A1 A0.",
          steps: [
            "A2 = D4 + D5 + D6 + D7 = 0 + 0 + 1 + 0 = 1.",
            "A1 = D2 + D3 + D6 + D7 = 1.",
            "A0 = D1 + D3 + D5 + D7 = 0 (D6 is not in this sum).",
          ],
          answer: "A2 A1 A0 = 110, the binary code of 6.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each circuit to what it does.",
            pairs: [
              ["Half adder", "adds 2 bits, gives sum and carry"],
              ["Full adder", "adds 3 bits including a carry in"],
              ["Decoder", "n-bit code in, one of 2ⁿ lines active"],
              ["Encoder", "one active line in, its n-bit code out"],
              ["Multiplexer", "select lines pick one of many inputs"],
            ],
            explain: "Decoders and encoders are reverses of each other. A multiplexer is many-to-one; its select lines work like a decoder inside it.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "For each circuit, the board expects three things: the **truth table**, the **Boolean expressions** and the **logic diagram**. For a full adder made of half adders, label the outputs of the first half adder (A ⊕ B and AB) on the diagram. Remember the number of lines: a 3-to-8 decoder has 3 inputs and 8 outputs; an 8:1 MUX has 8 data inputs and 3 select lines.",
        },
        {
          type: "keypoints",
          items: [
            "Half adder: S = A ⊕ B, C = AB (one XOR, one AND).",
            "Full adder: S = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B); two half adders + an OR gate.",
            "Decoder: n inputs → 2ⁿ outputs, one active. Encoder: the reverse.",
            "MUX: 2ⁿ inputs, n select lines, 1 output; 4:1 MUX Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3.",
          ],
        },
      ],
      flashcards: [
        { front: "Combinational circuit", back: "A gate circuit whose outputs depend only on the present inputs; it has no memory." },
        { front: "Half adder expressions", back: "Sum = A ⊕ B; Carry = A·B." },
        { front: "Full adder expressions", back: "Sum = A ⊕ B ⊕ Cin; Cout = AB + BCin + ACin = AB + Cin(A ⊕ B)." },
        { front: "Full adder from half adders", back: "Two half adders and one OR gate (the OR joins the two carries)." },
        { front: "Decoder", back: "A circuit with n inputs and 2ⁿ outputs in which exactly one output is active for each input code." },
        { front: "Encoder", back: "A circuit with 2ⁿ inputs (one active) and n outputs giving the binary code of the active input." },
        { front: "Multiplexer", back: "A data selector: 2ⁿ data inputs, n select lines and one output." },
        { front: "2:1 MUX expression", back: "Y = S'I0 + SI1." },
        { front: "Octal-to-binary encoder, A0", back: "A0 = D1 + D3 + D5 + D7 (the odd-numbered lines)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A half adder is made of:",
          options: ["one XOR gate and one AND gate", "two XOR gates", "one OR gate and one AND gate", "two half adders and an OR gate"],
          answer: 0,
          explain: "Sum = A ⊕ B (XOR), carry = AB (AND). Two half adders and an OR gate make a full adder.",
        },
        {
          kind: "fill",
          q: "The sum output of a full adder is S = A ⊕ B ⊕ ___.",
          answer: ["Cin", "C", "carry in", "Ci"],
          explain: "The full adder adds the incoming carry as a third bit.",
        },
        {
          kind: "numeric",
          q: "How many select lines does a 16:1 multiplexer need?",
          answer: 4,
          explain: "$2^4$ = 16, so 4 select lines.",
        },
        {
          kind: "mcq",
          q: "In a 2-to-4 decoder (A is the MSB), which output is 1 when A = 1, B = 0?",
          options: ["D2", "D1", "D3", "D0"],
          answer: 0,
          explain: "AB = 10 is binary 2, so D2 = AB' is active.",
        },
        {
          kind: "truefalse",
          q: "A decoder converts one active input line into a binary code.",
          answer: false,
          explain: "That is an encoder. A decoder converts a binary code into one active output line.",
        },
        {
          kind: "mcq",
          q: "A 4:1 MUX has I0 = 0, I1 = 1, I2 = 1, I3 = 0. If S1 = 1 and S0 = 0, the output Y is:",
          options: ["1", "0", "Cannot be found", "Equal to S0"],
          answer: 0,
          explain: "S1S0 = 10 selects I2, which is 1.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "For which inputs is the carry out of a full adder 1? (Choose all that apply)",
          options: ["A = 1, B = 1, Cin = 0", "A = 0, B = 1, Cin = 1", "A = 1, B = 0, Cin = 0", "A = 1, B = 1, Cin = 1"],
          answers: [0, 1, 3],
          explain: "Cout is 1 when at least two of the three inputs are 1.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "In FullAdder.java, why is `c1 | c2` used rather than `c1 + c2`?",
          options: ["The carries are bits and are joined by an OR gate; they are never both 1, so | gives 0 or 1", "+ does not compile for int", "| is faster to type", "c1 + c2 would always be 2"],
          answer: 0,
          explain: "c1 and c2 cannot both be 1, so here `c1 + c2` would give the same values, but `|` models the OR gate of the circuit.",
          difficulty: 3,
        },
      ],
    },
    {
      slug: "c11-isc-hardware-board-practice",
      title: "Board Practice: Computer Hardware",
      summary: "Mixed ISC-style questions on gate outputs, NAND/NOR conversion, adders, decoders, encoders and multiplexers, with a multiplexer program to trace and write.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Board questions on hardware usually ask you to (1) find the output of a given circuit, (2) draw a circuit for an expression, often with NAND or NOR only, and (3) give the truth table, expressions and diagram of an adder, decoder, encoder or multiplexer.",
        },
        {
          type: "example",
          title: "Expression from a circuit description",
          problem: "A and B feed a NAND gate. B and C feed a NOR gate. The two outputs feed an XOR gate giving X. Write X and find it for A = 1, B = 1, C = 0.",
          steps: [
            "NAND output: (AB)'. NOR output: (B + C)'.",
            "X = (AB)' ⊕ (B + C)'.",
            "A = 1, B = 1: (AB)' = 0. B + C = 1, so (B + C)' = 0.",
            "X = 0 ⊕ 0 = 0.",
          ],
          answer: "X = (AB)' ⊕ (B + C)'; for (1, 1, 0), X = 0.",
        },
        {
          type: "example",
          title: "NOR-only circuit",
          problem: "Draw (describe) F = (A + B)·(C + D) using NOR gates only, and give the gate count.",
          steps: [
            "Use NOR gates for the sums: P = (A + B)' and Q = (C + D)'.",
            "NOR them: (P + Q)' = ((A + B)' + (C + D)')'.",
            "De Morgan: ((A + B)')'·((C + D)')' = (A + B)·(C + D).",
          ],
          answer: "Two NOR gates for the sums feed one NOR gate: 3 NOR gates in all.",
        },
        {
          type: "mistake",
          wrong: "To convert AB + CD to NAND only, I replace the AND gates by NAND gates and keep the OR gate.",
          right: "Replace the **OR gate as well**: F = NAND(NAND(A, B), NAND(C, D)). Keeping the OR would give (AB)' + (CD)', which is a different function.",
          why: "Only the product gates seem to \"match\" NAND. But the bubbles at the outputs of the first-level NANDs must be cancelled; a NAND at the second level (an OR with bubbled inputs, by De Morgan) does exactly that.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A 3-to-8 decoder has inputs A B C = 101 (A is the MSB). Which output is active?",
              options: ["D5", "D3", "D6", "D2"],
              answer: 0,
              explain: "101 in binary is 5, so D5 = AB'C is 1 and all other outputs are 0.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Mux4.java: a 4:1 multiplexer with I0 = 1, I1 = 0, I2 = 0, I3 = 1",
          code: `public class Mux4
{
    public static void main(String[] args)
    {
        int[] in = {1, 0, 0, 1};        // data inputs I0, I1, I2, I3
        System.out.println("S1 S0 | Y");
        for (int s1 = 0; s1 <= 1; s1++)
        {
            for (int s0 = 0; s0 <= 1; s0++)
            {
                int n1 = s1 ^ 1, n0 = s0 ^ 1;
                int y = (n1 & n0 & in[0]) | (n1 & s0 & in[1])
                      | (s1 & n0 & in[2]) | (s1 & s0 & in[3]);
                System.out.println(" " + s1 + "  " + s0 + " | " + y);
            }
        }
    }
}`,
        },
        {
          type: "example",
          title: "Trace Mux4.java",
          problem: "Give the output of Mux4.java and name the gate that this multiplexer is acting as.",
          steps: [
            "S1S0 = 00 selects I0 = 1; 01 selects I1 = 0; 10 selects I2 = 0; 11 selects I3 = 1.",
            "Only one product term can be 1 at a time, because only one of n1·n0, n1·s0, s1·n0, s1·s0 is 1.",
            "Y is 1 when S1 and S0 are equal, so the MUX behaves as an XNOR gate of S1 and S0.",
          ],
          answer: "S1 S0 | Y\n 0  0 | 1\n 0  1 | 0\n 1  0 | 0\n 1  1 | 1\nThe MUX acts as an XNOR gate.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the steps to build a full adder from half adders.",
            items: [
              "Feed A and B into the first half adder",
              "Get A ⊕ B and AB from it",
              "Feed A ⊕ B and Cin into the second half adder",
              "Its sum output is S = A ⊕ B ⊕ Cin",
              "OR the two carries to get Cout",
            ],
            explain: "The second half adder adds the incoming carry; the OR gate combines the carry from each half adder.",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "Practical-exam tip",
          md: "To make a 2:1 MUX program, write it as `y = (s ^ 1) & i0 | s & i1`; `&` has higher precedence than `|` in Java, so this reads as (S'·I0) + (S·I1). A program that checks a circuit should loop over **every** input combination; 3 inputs need 8 rows.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Write the select-line combinations of a multiplexer in binary order (00, 01, 10, 11) next to I0, I1, I2, I3; examiners check that S1 is the more significant bit. In a decoder or encoder, state which input is the MSB.",
        },
        {
          type: "keypoints",
          items: [
            "Label each gate's output with its expression, then evaluate step by step.",
            "AND-OR → all NAND; OR-AND → all NOR; replace every gate, including the last one.",
            "A MUX passes the input whose number equals the select code.",
            "A full adder = 2 half adders + 1 OR gate.",
          ],
        },
      ],
      flashcards: [
        { front: "NAND-only form of AB + CD", back: "NAND(NAND(A, B), NAND(C, D))." },
        { front: "NOR-only form of (A + B)(C + D)", back: "NOR(NOR(A, B), NOR(C, D))." },
        { front: "3-to-8 decoder, input 101", back: "Output D5 = AB'C is active." },
        { front: "4:1 MUX with I0..I3 = 1, 0, 0, 1", back: "It gives Y = S1'S0' + S1S0, the XNOR of the select lines." },
        { front: "Java precedence of & and |", back: "& binds more tightly than |, so a & b | c & d means (a & b) | (c & d)." },
        { front: "Number of rows for a 3-input circuit", back: "2³ = 8." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "X = (A ⊕ B)·C. For A = 1, B = 1, C = 1, X is:",
          options: ["0", "1", "Undefined", "Equal to A"],
          answer: 0,
          explain: "A ⊕ B = 0 because the inputs are equal, and 0·1 = 0.",
        },
        {
          kind: "mcq",
          q: "Which expression gives the output of a 2:1 MUX?",
          options: ["Y = S'I0 + SI1", "Y = SI0 + S'I1", "Y = I0 ⊕ I1", "Y = S(I0 + I1)"],
          answer: 0,
          explain: "When S = 0 the output follows I0; when S = 1 it follows I1.",
        },
        {
          kind: "numeric",
          q: "How many NAND gates are needed for F = AB + CD in NAND-only form?",
          answer: 3,
          explain: "Two NANDs for the products and one to combine them.",
        },
        {
          kind: "fill",
          q: "In an octal-to-binary encoder, A1 = D2 + D3 + D6 + ___.",
          answer: ["D7"],
          explain: "A1 is the middle bit; it is 1 for 2 (010), 3 (011), 6 (110) and 7 (111).",
        },
        {
          kind: "truefalse",
          q: "A half adder can add the carry coming from a lower column.",
          answer: false,
          explain: "A half adder has only two inputs. A full adder has the third input, Cin.",
        },
        {
          kind: "mcq",
          q: "What does `System.out.println((1 ^ 1) & 1 | 1 & 0);` print?",
          options: ["0", "1", "2", "It does not compile"],
          answer: 0,
          explain: "(1 ^ 1) = 0; then & before |: (0 & 1) | (1 & 0) = 0 | 0 = 0. This is a 2:1 MUX with S = 1, I0 = 1, I1 = 0.",
          difficulty: 3,
        },
        {
          kind: "multi",
          q: "Which are combinational circuits? (Choose all that apply)",
          options: ["Full adder", "Multiplexer", "Decoder", "Encoder"],
          answers: [0, 1, 2, 3],
          explain: "All four have outputs that depend only on the present inputs.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Objects and Classes                                              */
/* ------------------------------------------------------------------ */
const objectsClasses: Topic = {
  slug: "c11-isc-objects-classes",
  title: "Objects and Classes",
  icon: "🧱",
  description: "Objects as data (attributes) plus behaviour (methods), a class as the blueprint and an object as its instance, creating objects with new, reference variables, constructors of every kind, the keyword this, and analysing real-world problems as classes.",
  lessons: [
    {
      slug: "c11-isc-objects-as-instances",
      title: "Objects, Classes and Instances",
      summary: "State, behaviour and identity; a class as a blueprint and user-defined type; instance variables and methods; creating objects with new; reference variables and the dot operator; modelling real-world things as classes.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "📚",
          caption: "A bookshop in Pune has thousands of books. Each one is different, but every book has a title, a price and a number of copies, and the shop can sell any of them. That shared plan is a class; each actual book is an object.",
        },
        {
          type: "text",
          md: "An **object** is a thing in the problem that has:\n\n- **State (attributes, data)**: the values it holds, such as a book's title, price and copies.\n- **Behaviour (methods)**: what it can do or what can be done to it, such as `sell()` or `stockValue()`.\n- **Identity**: it is a separate thing, even if another object has the same values.\n\nSo an object = **data + behaviour**, kept together. This is **encapsulation**.",
        },
        {
          type: "text",
          md: "A **class** is the blueprint (template) from which objects are made. It declares which attributes every object will have and defines the methods they can use. An object is an **instance** of a class; making one is called **instantiation**.\n\nBecause a class describes a new kind of value, it is a **user-defined data type**. A class is also called an **object factory**: one class can produce any number of objects, each with its own copy of the attributes.",
        },
        {
          type: "table",
          headers: ["Class", "Object"],
          rows: [
            ["a blueprint or template", "an instance made from the blueprint"],
            ["a logical idea; no memory for attributes is set aside when it is declared", "a real entity; memory is allotted when it is created with `new`"],
            ["declared once", "any number can be created"],
            ["e.g. `Book`", "e.g. the book \"Panchatantra\" with price ₹150"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Book.java: one class, several objects",
          code: `public class Book
{
    // attributes (instance variables): the state of each object
    String title;
    double price;
    int copies;

    // behaviour (methods)
    void sell(int n)
    {
        if (n <= copies)
            copies = copies - n;
        else
            System.out.println("Only " + copies + " copies of " + title + " left");
    }

    double stockValue()
    {
        return price * copies;
    }

    public static void main(String[] args)
    {
        Book b1 = new Book();
        b1.title = "Panchatantra";
        b1.price = 150.0;
        b1.copies = 10;

        Book b2 = new Book();
        b2.title = "Wings of Fire";
        b2.price = 299.5;
        b2.copies = 4;

        b1.sell(3);
        b2.sell(6);
        System.out.println(b1.title + ": " + b1.copies + " copies, value " + b1.stockValue());
        System.out.println(b2.title + ": " + b2.copies + " copies, value " + b2.stockValue());

        Book b3 = b1;           // b3 refers to the SAME object as b1
        b3.sell(2);
        System.out.println(b1.copies);
    }
}`,
        },
        {
          type: "text",
          md: "`Book b1 = new Book();` does three things: it declares a **reference variable** `b1` of type Book, `new` creates an object in memory (the heap) and runs the constructor, and the **address** of the new object is stored in `b1`.\n\nThe **dot operator** reaches an object's members: `b1.price` is b1's price, `b1.sell(3)` asks b1 to run `sell` on its own data. Calling a method on an object is also described as **sending a message** to it.",
        },
        {
          type: "example",
          title: "Trace Book.java",
          problem: "Give the exact output of Book.java.",
          steps: [
            "b1 starts with 10 copies; `b1.sell(3)` leaves 7.",
            "b2 has 4 copies; `b2.sell(6)` asks for more than it has, so it prints the message and copies stays 4.",
            "b1's value: 150.0 × 7 = 1050.0. b2's value: 299.5 × 4 = 1198.0 (a double prints with .0).",
            "`Book b3 = b1;` copies the reference, not the object. b3 and b1 are two names for one book, so `b3.sell(2)` changes b1's copies to 5.",
          ],
          answer: "Only 4 copies of Wings of Fire left\nPanchatantra: 7 copies, value 1050.0\nWings of Fire: 4 copies, value 1198.0\n5",
        },
        {
          type: "mistake",
          wrong: "`Book b3 = b1;` makes a new book b3 that is a copy of b1, so changing b3 does not affect b1.",
          right: "A variable of a class type holds a **reference** (address), not the object. `b3 = b1` copies the address, so both names point to the **same** object. Only `new` creates a new object.",
          why: "With primitives, `int y = x;` really does copy the value, and the habit carries over. Objects are handled through references, so assignment shares the object instead of duplicating it.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "How many Book objects exist after `Book p = new Book(); Book q = new Book(); Book r = q;`?",
              options: ["2", "3", "1", "0"],
              answer: 0,
              explain: "`new` runs twice, so there are 2 objects. r is a third reference to the second object.",
            },
          ],
        },
        {
          type: "example",
          title: "Analysing a real-world problem",
          problem: "A metro card system stores the card number, the holder's name and the balance. A card can be recharged, a fare can be deducted, and the balance can be shown. Identify the class, attributes and methods.",
          steps: [
            "The \"thing\" with its own data is a card, so the class is `MetroCard`.",
            "Each card holds: `long cardNo`, `String name`, `double balance`. These are the attributes.",
            "Actions on a card: `recharge(double amt)`, `payFare(double fare)` (only if the balance is enough), `showBalance()`. These are the methods.",
            "Every passenger's card is an object of MetroCard with its own balance.",
          ],
          answer: "Class MetroCard; attributes cardNo, name, balance; methods recharge(), payFare(), showBalance().",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "For a class MobilePhone, is each item an attribute or a method?",
            groups: ["Attribute (data)", "Method (behaviour)"],
            items: [
              { text: "batteryLevel", group: 0, hint: "It is a value the phone holds." },
              { text: "brand", group: 0, hint: "Each phone stores its brand name." },
              { text: "makeCall()", group: 1, hint: "It is an action the phone performs." },
              { text: "storageGB", group: 0, hint: "A number stored for each phone." },
              { text: "charge(int minutes)", group: 1, hint: "It changes the battery level: an action." },
              { text: "takePhoto()", group: 1, hint: "An action, shown by the brackets." },
            ],
            explain: "Nouns describing the object's values are attributes; verbs describing what it does are methods. In Java, methods are written with brackets.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "\"Why is a class called an object factory?\" and \"Why is a class a user-defined data type?\" are 1-mark favourites. Answer in one sentence each: a class can create any number of objects; a class lets the programmer create a new type, whose variables are objects. When a question gives a real situation, list the attributes with their **data types** and the methods with their **parameters**.",
        },
        {
          type: "keypoints",
          items: [
            "An object has state (attributes), behaviour (methods) and identity.",
            "A class is the blueprint; an object is an instance of a class.",
            "A class is a user-defined data type and an object factory.",
            "`new` creates an object; a class-type variable stores a reference to it.",
            "Assigning one reference to another shares the same object.",
          ],
        },
      ],
      flashcards: [
        { front: "Object", back: "An identifiable entity with state (attributes) and behaviour (methods); an instance of a class." },
        { front: "Class", back: "A blueprint or template that defines the attributes and methods common to a set of objects." },
        { front: "Instance variable", back: "An attribute declared in a class (without static); every object gets its own copy." },
        { front: "Instantiation", back: "Creating an object of a class, done with the new operator." },
        { front: "Why a class is an object factory", back: "Because any number of objects can be produced from one class." },
        { front: "Why a class is a user-defined data type", back: "It lets the programmer define a new type; its variables are objects of that class." },
        { front: "Reference variable", back: "A variable of a class type; it stores the address of an object, not the object itself." },
        { front: "Message passing", back: "Objects interact by calling one another's methods, e.g. b1.sell(3)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which keyword allots memory for a new object?",
          options: ["new", "class", "this", "static"],
          answer: 0,
          explain: "`new` creates the object on the heap and calls its constructor.",
        },
        {
          kind: "truefalse",
          q: "Declaring a class sets aside memory for the attributes of all its future objects.",
          answer: false,
          explain: "A class is only a plan. Memory for instance variables is allotted when each object is created with new.",
        },
        {
          kind: "fill",
          q: "An object is called an ___ of its class.",
          answer: ["instance"],
          explain: "Creating an object is instantiation; the object is an instance.",
        },
        {
          kind: "mcq",
          q: "In `Book b = new Book();`, what does b store?",
          options: ["the address (reference) of the Book object", "a copy of the class Book", "the title of the book", "nothing until a method is called"],
          answer: 0,
          explain: "b is a reference variable; the object itself lives in memory created by new.",
        },
        {
          kind: "numeric",
          q: "`Book x = new Book(); x.copies = 8; Book y = x; y.copies = y.copies - 3;` What is `x.copies` now?",
          answer: 5,
          explain: "x and y refer to the same object, so the change through y is seen through x: 8 − 3 = 5.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are characteristics of every object? (Choose all that apply)",
          options: ["State", "Behaviour", "Identity", "A main() method"],
          answers: [0, 1, 2],
          explain: "Objects have state, behaviour and identity. main() is a method of one class, not part of every object.",
        },
        {
          kind: "mcq",
          q: "For a class `Train`, which is the best choice of an attribute?",
          options: ["int coaches", "void depart()", "Train()", "new Train"],
          answer: 0,
          explain: "An attribute is data with a type. depart() is a method, Train() is a constructor, and new Train creates an object.",
        },
        {
          kind: "mcq",
          q: "The principle of keeping data and the methods that work on it together in a class is:",
          options: ["Encapsulation", "Inheritance", "Polymorphism", "Instantiation"],
          answer: 0,
          explain: "Wrapping data and methods into one unit is encapsulation.",
        },
      ],
    },
    {
      slug: "c11-isc-constructors",
      title: "Constructors and the Keyword this",
      summary: "What a constructor is and how it differs from a method; default, non-parameterised, parameterised and copy constructors; constructor overloading; default values of instance variables; using this.",
      minutes: 23,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "In Book.java we set every attribute by hand after `new`. That is slow and easy to forget. A **constructor** does it for us.\n\nA **constructor** is a special member method that has the **same name as the class**, has **no return type** (not even `void`), and is **called automatically** when an object is created with `new`. Its job is to **initialise** the object's instance variables.",
        },
        {
          type: "table",
          headers: ["Kind", "What it is"],
          rows: [
            ["**Default constructor**", "supplied by the compiler **only if the class has no constructor at all**; it takes no arguments and leaves every instance variable at its default value"],
            ["**Non-parameterised constructor**", "written by the programmer with no parameters; sets fixed starting values"],
            ["**Parameterised constructor**", "takes parameters and copies them into the instance variables"],
            ["**Copy constructor**", "takes an object of the same class and copies its values into the new object (Java does not supply one; you write it)"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Student.java: three overloaded constructors",
          code: `public class Student
{
    String name;
    int roll;
    double marks;

    // non-parameterised constructor
    Student()
    {
        name = "Not set";
        roll = 0;
        marks = 0.0;
    }

    // parameterised constructor
    Student(String name, int roll, double marks)
    {
        this.name = name;       // this.name is the instance variable
        this.roll = roll;
        this.marks = marks;
    }

    // copy constructor
    Student(Student s)
    {
        name = s.name;
        roll = s.roll;
        marks = s.marks;
    }

    void display()
    {
        System.out.println(roll + " " + name + " " + marks);
    }

    public static void main(String[] args)
    {
        Student s1 = new Student();
        Student s2 = new Student("Kavya", 12, 88.5);
        Student s3 = new Student(s2);
        s3.marks = 91;
        s1.display();
        s2.display();
        s3.display();
    }
}`,
        },
        {
          type: "example",
          title: "Trace Student.java",
          problem: "Give the output of Student.java and say which constructor each `new` calls.",
          steps: [
            "`new Student()` has no arguments, so the non-parameterised constructor runs: s1 = (\"Not set\", 0, 0.0).",
            "`new Student(\"Kavya\", 12, 88.5)` matches (String, int, double): the parameterised constructor runs.",
            "`new Student(s2)` matches (Student): the copy constructor makes a **separate** object with s2's values.",
            "`s3.marks = 91;` changes only s3 (it is a different object). The int 91 is stored in a double, so it prints as 91.0.",
          ],
          answer: "0 Not set 0.0\n12 Kavya 88.5\n12 Kavya 91.0",
        },
        {
          type: "text",
          md: "Having several constructors with different parameter lists is **constructor overloading**; Java picks the one whose parameters match the arguments in number, type and order.\n\nThe keyword **this** refers to the **current object**, the one whose constructor or method is running. In the parameterised constructor the parameter `name` hides the instance variable `name`; `this.name = name;` says \"store the parameter in this object's attribute\". Without `this`, `name = name;` would just copy the parameter into itself.",
        },
        {
          type: "mistake",
          wrong: "If I write only a parameterised constructor, Java still gives me the default constructor, so `new Student()` will work.",
          right: "The compiler adds the default constructor **only when the class has no constructor at all**. Once you write any constructor, `new Student()` compiles only if you also write a no-argument constructor yourself.",
          why: "Learners see objects created with `new Student()` in classes that have no constructor and assume this always works. The rule exists because a class with its own constructor has said how its objects must be set up.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these is a valid constructor for a class `Box`?",
              options: ["Box(int side)", "void Box(int side)", "int Box()", "box()"],
              answer: 0,
              explain: "A constructor has the class name exactly (Java is case-sensitive) and no return type. With `void` or `int` in front it becomes an ordinary method.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Constructor", "Method"],
          rows: [
            ["same name as the class", "any valid name"],
            ["no return type, not even void", "must have a return type (void if nothing is returned)"],
            ["called automatically by `new`, once per object", "called explicitly, any number of times"],
            ["initialises the object", "performs any task"],
            ["not inherited", "inherited (unless private)"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Defaults.java: what the default constructor leaves in each instance variable",
          code: `public class Defaults
{
    int count;
    double rate;
    boolean done;
    char grade;
    String name;

    public static void main(String[] args)
    {
        Defaults d = new Defaults();
        System.out.println(d.count + " " + d.rate + " " + d.done + " " + (int) d.grade + " " + d.name);
    }
}`,
        },
        {
          type: "text",
          md: "Output: `0 0.0 false 0 null`\n\nInstance variables get default values: 0 for whole numbers, 0.0 for decimals, false for boolean, the null character (code 0, written '\\u0000') for char, and **null** for any reference such as a String. Local variables inside a method get **no** default value and must be assigned before use.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "A class has only `Shop(String n)`. What happens with `new Shop()`?",
            emoji: "🏪",
            options: ["Compile-time error", "The compiler adds a default constructor", "name is set to null", "Run-time error"],
            answer: 0,
            trap: 1,
            explain: "The class already has a constructor, so no default constructor is added. No constructor matches an empty argument list, so the code does not compile.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In ISC program questions the class design usually lists \"a parameterised constructor to initialise the data members\". Write it as `ClassName(type a, ...)` with no return type, and assign every data member in it. Differences between a constructor and a method, and the use of `this`, are common 2-mark theory questions.",
        },
        {
          type: "keypoints",
          items: [
            "A constructor has the class's name, no return type, and runs automatically with `new`.",
            "Kinds: default (compiler, only if none written), non-parameterised, parameterised, copy.",
            "Constructor overloading: several constructors with different parameter lists.",
            "`this` refers to the current object; `this.x = x` resolves a name clash.",
            "Default values: 0, 0.0, false, the null character, null.",
          ],
        },
      ],
      flashcards: [
        { front: "Constructor", back: "A member method with the same name as the class and no return type, called automatically when an object is created, to initialise it." },
        { front: "Default constructor", back: "A no-argument constructor added by the compiler only when the class defines no constructor; it leaves attributes at default values." },
        { front: "Parameterised constructor", back: "A constructor that receives values as parameters and uses them to initialise the object." },
        { front: "Copy constructor", back: "A constructor that takes an object of the same class and copies its data into the new object." },
        { front: "Constructor overloading", back: "Defining more than one constructor in a class with different parameter lists." },
        { front: "this", back: "A reference to the current object; used to tell an instance variable apart from a parameter of the same name." },
        { front: "Default value of a String attribute", back: "null (it is a reference type)." },
        { front: "Constructor vs method: return type", back: "A constructor has none, not even void; a method must have one." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "When is a constructor called?",
          options: ["Automatically when an object is created with new", "Whenever any method is called", "When the program ends", "Only when called by name"],
          answer: 0,
          explain: "`new` creates the object and runs the matching constructor once.",
        },
        {
          kind: "truefalse",
          q: "A constructor can be declared with the return type void.",
          answer: false,
          explain: "Adding void makes it an ordinary method that happens to share the class's name; it will not run automatically.",
        },
        {
          kind: "fill",
          q: "The keyword ___ refers to the object whose method or constructor is currently running.",
          answer: ["this"],
          explain: "`this.name = name;` stores the parameter in the current object's attribute.",
        },
        {
          kind: "mcq",
          q: "What is printed by `System.out.println(new Defaults().done);` for the Defaults class in this lesson?",
          options: ["false", "true", "0", "null"],
          answer: 0,
          explain: "A boolean instance variable defaults to false.",
        },
        {
          kind: "mcq",
          q: "In a parameterised constructor `Item(int price) { price = price; }`, what happens?",
          options: ["The instance variable stays 0, because the parameter is assigned to itself", "The instance variable gets the parameter's value", "It does not compile", "A run-time error occurs"],
          answer: 0,
          explain: "Inside the constructor, `price` means the parameter. Write `this.price = price;` to set the attribute.",
          difficulty: 3,
        },
        {
          kind: "multi",
          q: "Which statements about constructors are true? (Choose all that apply)",
          options: ["They can be overloaded", "They have no return type", "They are called explicitly like methods, e.g. s.Student()", "They have the same name as the class"],
          answers: [0, 1, 3],
          explain: "A constructor cannot be called with the dot operator like a method; it runs through new.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Student.java creates s3 with `new Student(s2)` and then sets `s3.marks = 91`. What is s2.marks?",
          options: ["88.5", "91.0", "0.0", "null"],
          answer: 0,
          explain: "The copy constructor made a separate object, so changing s3 does not change s2.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-objects-classes-board-practice",
      title: "Board Practice: Objects and Classes",
      summary: "Mixed ISC-style questions: theory on classes, objects and constructors, output questions, finding errors, and a full class program (Disarium number) in the ISC format.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "ISC program questions describe a class in a fixed format: the **class name**, the **data members** with their purpose, and the **member methods** with what each must do. You write the class exactly as described, then a `main()` that creates an object and calls the methods.",
        },
        {
          type: "example",
          title: "Reading an ISC-style class design",
          problem: "A **Disarium number** is one in which the sum of its digits raised to their positions (1st, 2nd, 3rd... from the left) equals the number, e.g. 135 = 1¹ + 3² + 5³. Design: class `Disarium`; data members `int num`, `int size`; methods: `Disarium(int n)` sets num = n and size = 0; `void countDigit()` counts the digits into size; `int sumOfDigits()` returns the sum of the digits raised to their positions; `void check()` prints whether num is a Disarium number. Plan the program.",
          steps: [
            "The constructor copies n into num and sets size to 0.",
            "countDigit(): copy num into a temporary t (so num is not destroyed) and divide by 10 until 0, adding 1 to size each time.",
            "sumOfDigits(): the last digit is at position size, the next at size − 1, and so on. Take d = t % 10, add $d^p$, then decrease p.",
            "check(): call countDigit(), then compare sumOfDigits() with num.",
          ],
          answer: "For 135: size = 3; 5³ + 3² + 1¹ = 125 + 9 + 1 = 135, so it is a Disarium number.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Disarium.java: the class written to the design",
          code: `public class Disarium
{
    int num;        // the number to test
    int size;       // number of digits

    Disarium(int n)
    {
        num = n;
        size = 0;
    }

    void countDigit()
    {
        int t = num;
        while (t > 0)
        {
            size++;
            t = t / 10;
        }
    }

    int sumOfDigits()
    {
        int t = num, p = size, sum = 0;
        while (t > 0)
        {
            int d = t % 10;                     // last digit
            sum = sum + (int) Math.pow(d, p);   // raised to its position
            p--;
            t = t / 10;
        }
        return sum;
    }

    void check()
    {
        countDigit();
        int s = sumOfDigits();
        if (s == num)
            System.out.println(num + " is a Disarium number");
        else
            System.out.println(num + " is not a Disarium number (sum = " + s + ")");
    }

    public static void main(String[] args)
    {
        Disarium a = new Disarium(135);
        Disarium b = new Disarium(136);
        a.check();
        b.check();
    }
}`,
        },
        {
          type: "example",
          title: "Output",
          problem: "Give the output of Disarium.java.",
          steps: [
            "a: 135 → 5³ + 3² + 1¹ = 125 + 9 + 1 = 135, equal.",
            "b: 136 → 6³ + 3² + 1¹ = 216 + 9 + 1 = 226, not equal.",
            "`Math.pow` returns a double, so it is cast to int before adding.",
          ],
          answer: "135 is a Disarium number\n136 is not a Disarium number (sum = 226)",
        },
        {
          type: "mistake",
          wrong: "In countDigit() I can loop on num directly: `while (num > 0) { size++; num = num / 10; }`.",
          right: "Work on a **copy**: `int t = num;`. Dividing num itself leaves it 0, so sumOfDigits() and check() would then work on 0 and every number would look wrong.",
          why: "In a single method it looks harmless. But num is an instance variable shared by all the methods of the object, so changing it in one method changes it for all the others.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which line has an error? `class Pen { int ink; void Pen() { ink = 100; } }` is meant to set ink to 100 when a Pen is created.",
              options: ["`void Pen()` should be `Pen()`", "`int ink;` should be `ink int;`", "`class` should be `Class`", "There is no error"],
              answer: 0,
              explain: "With void, Pen() is an ordinary method and never runs automatically, so ink stays 0. A constructor has no return type.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order what happens when `Disarium a = new Disarium(135);` runs.",
            items: [
              "Memory for a new Disarium object is allotted",
              "Instance variables get default values (0)",
              "The constructor runs: num = 135, size = 0",
              "The object's reference is stored in a",
            ],
            explain: "new allots memory and sets defaults, the constructor then initialises, and finally the reference is assigned to the variable.",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "Practical-exam tip",
          md: "Use the **exact** names of the class, data members and methods given in the question; examiners mark against them. Write a comment beside every data member (that is your variable description). Test with one number that passes and one that fails, as main() does here.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In a question that says \"Specify the class giving details of the constructor and the methods\", you may skip `main()`; when it says \"define main() to create an object and call the methods\", you must write it. Read the last line of the question for this.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What would sumOfDigits() return for num = 89 (after countDigit())?",
              answer: 89,
              explain: "size = 2: 9² + 8¹ = 81 + 8 = 89, so 89 is a Disarium number.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Follow the given class design exactly: names, types and method headers.",
            "Work on a copy of a data member when a loop would destroy it.",
            "A constructor has no return type; `void ClassName()` is just a method.",
            "Test the class with a passing and a failing value.",
          ],
        },
      ],
      flashcards: [
        { front: "Disarium number", back: "A number equal to the sum of its digits raised to their positions, e.g. 135 = 1¹ + 3² + 5³, 89 = 8¹ + 9²." },
        { front: "Why copy num before a digit loop", back: "Dividing the data member itself would leave it 0 for the other methods." },
        { front: "Math.pow return type", back: "double, so cast to int when the result is stored in an int." },
        { front: "Parts of an ISC class question", back: "Class name, data members (with purpose) and member methods (with their task)." },
        { front: "`void Pen()` inside class Pen", back: "An ordinary method, not a constructor; it does not run automatically." },
        { front: "Order of events in new", back: "Allot memory → default values → constructor → reference stored." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement creates an object of Disarium for the number 175?",
          options: ["Disarium d = new Disarium(175);", "Disarium d = Disarium(175);", "new d = Disarium(175);", "Disarium(175) d;"],
          answer: 0,
          explain: "Declare a reference and use new with the constructor's arguments.",
        },
        {
          kind: "numeric",
          q: "For num = 175, what is the sum of digits raised to their positions?",
          answer: 175,
          explain: "1¹ + 7² + 5³ = 1 + 49 + 125 = 175. So 175 is also a Disarium number.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "If countDigit() is called twice on the same object, size will be wrong.",
          answer: true,
          explain: "size is never reset inside countDigit(), so a second call adds the digits again (3 becomes 6 for 135).",
          difficulty: 3,
        },
        {
          kind: "mcq",
          q: "A class has data members `int a, b;` and no constructor. What does `new Pair().a` give?",
          options: ["0", "null", "garbage value", "compile-time error"],
          answer: 0,
          explain: "The compiler supplies a default constructor and int instance variables default to 0. Java never has garbage values in fields.",
        },
        {
          kind: "fill",
          q: "The values of an object's instance variables at any moment are called its ___.",
          answer: ["state"],
          explain: "State = the current values of the attributes; behaviour = the methods.",
        },
        {
          kind: "mcq",
          q: "Which is the correct header for a parameterised constructor of class `Time` taking hours and minutes?",
          options: ["Time(int h, int m)", "void Time(int h, int m)", "Time(int h, m)", "public int Time(int h, int m)"],
          answer: 0,
          explain: "No return type, and each parameter needs its own type.",
        },
        {
          kind: "multi",
          q: "Which belong in a class `Account` as data members? (Choose all that apply)",
          options: ["long accNo", "double balance", "void deposit(double amt)", "String holder"],
          answers: [0, 1, 3],
          explain: "deposit() is a member method, not a data member.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. Primitive Values, Wrapper Classes and Types                      */
/* ------------------------------------------------------------------ */
const primitives: Topic = {
  slug: "c11-isc-primitive-wrapper-types",
  title: "Primitive Values, Wrapper Classes and Types",
  icon: "🧮",
  description: "Java's eight primitive types with their sizes and ranges, literals of every kind, primitive and reference types, wrapper classes with autoboxing and unboxing, parse and Character methods, and type conversion: widening, casting and promotion.",
  lessons: [
    {
      slug: "c11-isc-primitive-types-literals",
      title: "Primitive Types and Literals",
      summary: "The eight primitive data types with sizes, ranges and default values; integer, floating, character, boolean and string literals; escape sequences and Unicode; primitive versus reference types.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "A **data type** tells Java two things about a value: how much memory it needs and which operations are allowed on it. Java is **strongly typed**: every variable has a type fixed when it is declared, and the compiler checks every use.\n\nJava's types are of two kinds. **Primitive types** are the eight built-in types that hold a single simple value directly. **Reference (non-primitive) types** are classes, arrays and interfaces; their variables hold a reference to an object. `String` is a class, so it is a reference type.",
        },
        {
          type: "table",
          headers: ["Type", "Size", "Range / values", "Default"],
          rows: [
            ["`byte`", "8 bits", "−128 to 127", "0"],
            ["`short`", "16 bits", "−32768 to 32767", "0"],
            ["`int`", "32 bits", "−2147483648 to 2147483647 ($-2^{31}$ to $2^{31}-1$)", "0"],
            ["`long`", "64 bits", "$-2^{63}$ to $2^{63}-1$", "0L"],
            ["`float`", "32 bits", "about ±3.4 × 10³⁸, 6 to 7 significant digits", "0.0f"],
            ["`double`", "64 bits", "about ±1.7 × 10³⁰⁸, about 15 significant digits", "0.0"],
            ["`char`", "16 bits", "Unicode characters, codes 0 to 65535", "the null character (code 0)"],
            ["`boolean`", "not fixed by Java", "only `true` or `false`", "false"],
          ],
        },
        {
          type: "text",
          md: "A **literal** is a fixed value written directly in the program.\n\n- **Integer literals**: decimal `25`, octal with a leading 0 (`025` = 21), hexadecimal with `0x` (`0x25` = 37), binary with `0b` (`0b101` = 5). They are `int` by default; add `L` for `long` (`9000000000L`).\n- **Floating-point literals**: `2.5`, `1.5e3` (= 1500.0). They are `double` by default; add `f` for `float` (`2.5f`).\n- **Character literals**: one character in single quotes, `'A'`, `'7'`, or an escape sequence such as `'\\n'` (new line), `'\\t'` (tab), `'\\\\'` (backslash), `'\\''` (single quote), or a Unicode escape `'\\u0041'` (A).\n- **Boolean literals**: `true` and `false`. **String literals**: text in double quotes, `\"Java\"`. The **null literal**: `null`.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Literals.java",
          code: `public class Literals
{
    public static void main(String[] args)
    {
        int dec = 25, oct = 025, hex = 0x25, bin = 0b101;
        System.out.println(dec + " " + oct + " " + hex + " " + bin);
        long big = 9000000000L;
        float f = 2.5f;
        double d = 1.5e3;
        System.out.println(big + " " + f + " " + d);
        char c = 'A';
        System.out.println(c + 1);
        System.out.println((char) (c + 1));
        System.out.println('A' + 'B');
        System.out.println("A" + 'B');
        System.out.println(Integer.MAX_VALUE + " " + Long.MAX_VALUE);
        System.out.println(Character.SIZE + " bits per char");
    }
}`,
        },
        {
          type: "example",
          title: "Trace Literals.java",
          problem: "Give the exact output of Literals.java and explain lines 3 to 6.",
          steps: [
            "Line 1: 025 is octal (2×8 + 5 = 21), 0x25 is hex (2×16 + 5 = 37), 0b101 is binary (5).",
            "Line 2: the long prints in full; 2.5f prints as 2.5; 1.5e3 is the double 1500.0.",
            "`c + 1`: a char in arithmetic becomes its code, 'A' = 65, so it prints 66. `(char) (c + 1)` turns 66 back into 'B'.",
            "`'A' + 'B'` is char + char, which is int addition: 65 + 66 = 131. But `\"A\" + 'B'` starts with a String, so + joins them: AB.",
            "Integer.MAX_VALUE is $2^{31}-1$; Long.MAX_VALUE is $2^{63}-1$; a char is 16 bits.",
          ],
          answer: "25 21 37 5\n9000000000 2.5 1500.0\n66\nB\n131\nAB\n2147483647 9223372036854775807\n16 bits per char",
        },
        {
          type: "mistake",
          wrong: "`'A' + 'B'` prints AB, because + joins characters together.",
          right: "+ joins only when one operand is a **String**. Two chars are numbers to Java (Unicode codes), so `'A' + 'B'` = 65 + 66 = **131**. Use `\"\" + 'A' + 'B'` or `\"A\" + 'B'` to get AB.",
          why: "Single and double quotes look almost the same, and in everyday writing letters \"join\". In Java a char is an integral type, so arithmetic wins unless a String is involved.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "What does `System.out.println(012 + 0x12);` print?",
              answer: 28,
              explain: "012 is octal = 10 and 0x12 is hex = 18; 10 + 18 = 28.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "text",
          md: "Java uses **Unicode** for `char`, so one char can hold a letter of any script: English, Devanagari, Kannada and more. That is why a char takes **16 bits** in Java, not 8 bits as in ASCII. The first 128 Unicode codes are the same as ASCII: '0' to '9' are 48 to 57, 'A' to 'Z' are 65 to 90, 'a' to 'z' are 97 to 122.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each literal to its type.",
            pairs: [
              ["`45L`", "long"],
              ["`3.14`", "double"],
              ["`3.14f`", "float"],
              ["`'9'`", "char"],
              ["`\"9\"`", "String"],
              ["`0x1F`", "int"],
            ],
            explain: "Whole-number literals are int unless they end in L; decimal literals are double unless they end in f; single quotes give a char and double quotes a String.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Learn the sizes in **bits and bytes**: byte 1, short 2, int 4, long 8, float 4, double 8, char 2 bytes. \"Name the type of the literal\" questions often hide a suffix (`L`, `f`) or a leading 0 (octal). Write `'\\u0000'` for the default char value.",
        },
        {
          type: "keypoints",
          items: [
            "Eight primitive types: byte, short, int, long, float, double, char, boolean.",
            "Whole-number literals are int, decimal literals are double, by default; use L and f suffixes.",
            "0 prefix = octal, 0x = hex, 0b = binary.",
            "char is 16-bit Unicode; in arithmetic it acts as its code number.",
            "Reference types (classes such as String, arrays) hold references to objects.",
          ],
        },
      ],
      flashcards: [
        { front: "Primitive data type", back: "One of Java's 8 built-in types that holds a single value directly: byte, short, int, long, float, double, char, boolean." },
        { front: "Reference data type", back: "A class, array or interface type; its variables store a reference to an object (e.g. String)." },
        { front: "Size of char in Java", back: "16 bits (2 bytes), because Java uses Unicode." },
        { front: "Range of byte", back: "−128 to 127 (8 bits, 2's complement)." },
        { front: "Literal", back: "A constant value written directly in the code, e.g. 25, 2.5f, 'A', \"Hi\", true, null." },
        { front: "Default type of 3.5", back: "double. Write 3.5f for a float." },
        { front: "Octal and hex literals", back: "Leading 0 for octal (025 = 21); 0x for hex (0x25 = 37)." },
        { front: "Codes of '0', 'A', 'a'", back: "48, 65 and 97." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "How many bytes does a `double` occupy?",
          options: ["8", "4", "2", "16"],
          answer: 0,
          explain: "double is 64 bits = 8 bytes; float is 4 bytes.",
        },
        {
          kind: "mcq",
          q: "Which declaration does NOT compile?",
          options: ["float f = 3.5;", "long n = 35;", "double d = 3;", "char c = 65;"],
          answer: 0,
          explain: "3.5 is a double literal, and double cannot go into float without a cast. Write 3.5f. The others are widening or a constant char code in range.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What does `System.out.println('a' + 2);` print?",
          answer: 99,
          explain: "'a' is 97, and char + int is int arithmetic: 99.",
        },
        {
          kind: "fill",
          q: "The default value of a boolean instance variable is ___.",
          answer: ["false"],
          explain: "Numeric types default to 0, boolean to false, references to null.",
        },
        {
          kind: "truefalse",
          q: "String is one of Java's primitive data types.",
          answer: false,
          explain: "String is a class, so it is a reference type.",
        },
        {
          kind: "mcq",
          q: "Which is a valid character literal?",
          options: ["'\\n'", "'AB'", "\"A\"", "'\\q'"],
          answer: 0,
          explain: "'\\n' is the newline escape. A char literal holds exactly one character; \"A\" is a String; \\q is not a valid escape.",
        },
        {
          kind: "numeric",
          q: "What is the decimal value of the Java literal `0b1101`?",
          answer: 13,
          explain: "8 + 4 + 1 = 13.",
        },
        {
          kind: "multi",
          q: "Which types can store the value 200 without a cast? (Choose all that apply)",
          options: ["short", "int", "byte", "double"],
          answers: [0, 1, 3],
          explain: "byte stops at 127. short, int and double all hold 200.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c11-isc-wrapper-classes-casting",
      title: "Wrapper Classes and Type Conversion",
      summary: "Why wrapper classes exist; autoboxing and unboxing; parseInt, parseDouble, valueOf and toString; Character class methods; implicit widening, explicit casting and promotion in expressions; overflow.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Primitives are fast, but they are not objects. Some parts of Java (for example collections like ArrayList) can store only objects. So for every primitive type there is a **wrapper class** in `java.lang` whose object \"wraps\" one primitive value and also offers useful methods.\n\n**Autoboxing** is Java automatically converting a primitive to its wrapper object (`Integer a = 45;`). **Unboxing** is the reverse (`int b = a;`).",
        },
        {
          type: "table",
          headers: ["Primitive", "Wrapper class", "Useful methods"],
          rows: [
            ["byte, short", "Byte, Short", "`Byte.parseByte(s)`, `Short.parseShort(s)`"],
            ["int", "**Integer**", "`Integer.parseInt(s)`, `Integer.valueOf(s)`, `Integer.toString(n)`, `Integer.MAX_VALUE`"],
            ["long", "Long", "`Long.parseLong(s)`"],
            ["float, double", "Float, **Double**", "`Float.parseFloat(s)`, `Double.parseDouble(s)`"],
            ["char", "**Character**", "`isDigit`, `isLetter`, `isLetterOrDigit`, `isUpperCase`, `isLowerCase`, `isWhitespace`, `toUpperCase`, `toLowerCase`"],
            ["boolean", "Boolean", "`Boolean.parseBoolean(s)`"],
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Wrap.java",
          code: `public class Wrap
{
    public static void main(String[] args)
    {
        Integer a = 45;                     // autoboxing: int -> Integer
        int b = a + 5;                      // unboxing: Integer -> int
        System.out.println(b);

        int n = Integer.parseInt("372");
        double x = Double.parseDouble("12.5");
        System.out.println(n + x);
        System.out.println("372" + "12.5");

        String s = Integer.toString(98) + Double.toString(1.0);
        System.out.println(s);

        char ch = '7';
        System.out.println(Character.isDigit(ch) + " " + Character.isLetter(ch));
        System.out.println(Character.toUpperCase('g') + " " + Character.isUpperCase('g'));
        System.out.println(Character.getNumericValue('7') + 1);
        System.out.println(ch + 1);
    }
}`,
        },
        {
          type: "example",
          title: "Trace Wrap.java",
          problem: "Give the output of Wrap.java.",
          steps: [
            "a holds 45 (boxed); `a + 5` unboxes it: 50.",
            "parseInt and parseDouble turn the strings into numbers, so n + x = 372 + 12.5 = 384.5. Joining the two strings instead gives 37212.5.",
            "Integer.toString(98) is \"98\" and Double.toString(1.0) is \"1.0\"; joined: 981.0.",
            "'7' is a digit, not a letter: true false. toUpperCase('g') is 'G'; 'g' is not upper case.",
            "getNumericValue('7') is the number 7, so 7 + 1 = 8. But `ch + 1` uses the code of '7' (55): 56.",
          ],
          answer: "50\n384.5\n37212.5\n981.0\ntrue false\nG false\n8\n56",
        },
        {
          type: "text",
          md: "**Type conversion.** When a value of one type is used where another is expected:\n\n- **Implicit (widening) conversion**: Java converts automatically to a type that can hold every value of the old one. The order is byte → short → int → long → float → double, and char → int. No data is lost (except that a very large long may lose precision as a float).\n- **Explicit conversion (type casting / narrowing)**: the programmer writes the target type in brackets, `(int) 9.99`. Java **truncates** the fractional part (9, not 10), and out-of-range values wrap around.\n- **Promotion in expressions**: in arithmetic, byte, short and char are first promoted to **int**; then the whole expression takes the widest type present. So `byte + byte` is an int, and `int / double` is a double.",
        },
        {
          type: "code",
          lang: "java",
          caption: "Cast.java",
          code: `public class Cast
{
    public static void main(String[] args)
    {
        int i = 7;
        double d = i;                       // implicit widening
        System.out.println(d);

        double p = 9.99;
        int q = (int) p;                    // explicit narrowing: truncates
        System.out.println(q);

        System.out.println(7 / 2);
        System.out.println(7 / 2.0);
        System.out.println((double) 7 / 2);
        System.out.println((double) (7 / 2));

        byte b1 = 10, b2 = 20;
        int sum = b1 + b2;                  // byte + byte is an int
        System.out.println(sum);

        int big = Integer.MAX_VALUE;
        System.out.println(big + 1);

        char c = (char) 98;
        System.out.println(c);
        System.out.println((int) 'z' - (int) 'a');
        long L = 5;
        float F = L;
        System.out.println(F);
    }
}`,
        },
        {
          type: "text",
          md: "Output, one value per line: `7.0`, `9`, `3`, `3.5`, `3.5`, `3.0`, `30`, `-2147483648`, `b`, `25`, `5.0`.\n\n`7 / 2` is int division (3). `(double) 7 / 2` casts 7 first, so the division is in double (3.5); `(double) (7 / 2)` divides first (3) and then widens it (3.0). `big + 1` goes past the int range and **overflows** to the most negative int, with no error message.",
        },
        {
          type: "mistake",
          wrong: "`(int) 9.99` rounds to 10, and `byte b = b1 + b2;` is fine because the sum 30 fits in a byte.",
          right: "A cast to int **truncates** toward zero: `(int) 9.99` is 9 (use `Math.round` to round). And `b1 + b2` is promoted to **int**, so `byte b = b1 + b2;` is a compile-time error (\"possible lossy conversion\"); write `byte b = (byte) (b1 + b2);`.",
          why: "In maths class, converting 9.99 to a whole number means rounding. Java instead throws away the fraction. And the compiler checks types, not values: an int expression may not go into a byte without a cast, even if this particular value happens to fit.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "What is the type of `'a' + 2L * 3.0f`?",
              options: ["float", "long", "double", "char"],
              answer: 0,
              explain: "char → int, then with long and float present the widest is float. No double is involved.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does each statement compile without a cast?",
            groups: ["Compiles", "Needs a cast"],
            items: [
              { text: "double d = 15;", group: 0, hint: "int to double is widening." },
              { text: "long n = 'A';", group: 0, hint: "char to long is widening." },
              { text: "int k = 4.0;", group: 1, hint: "double to int loses the fraction: narrowing." },
              { text: "float f = 2.5;", group: 1, hint: "2.5 is a double literal; double to float is narrowing." },
              { text: "short s = 10; s = s + 1;", group: 1, hint: "s + 1 is promoted to int." },
              { text: "Integer w = 8;", group: 0, hint: "Autoboxing of an int literal." },
            ],
            explain: "Widening (to a bigger type) is automatic; narrowing needs a cast. Remember that arithmetic on byte, short and char gives an int.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "Define the terms exactly: **implicit conversion** (done by the compiler, also called coercion or widening), **explicit conversion** (type casting, done by the programmer). For \"give the output\" questions with casts, check whether the cast applies to one operand or to the whole bracket: `(double) 7 / 2` and `(double) (7 / 2)` differ.",
        },
        {
          type: "keypoints",
          items: [
            "Each primitive has a wrapper class in java.lang (Integer, Double, Character...).",
            "Autoboxing: primitive → object; unboxing: object → primitive.",
            "`Integer.parseInt(\"372\")` converts a String to an int; `Integer.toString(98)` the reverse.",
            "Widening is automatic; narrowing needs a cast, and casting to int truncates.",
            "In expressions, byte/short/char become int, then the widest type wins.",
          ],
        },
      ],
      flashcards: [
        { front: "Wrapper class", back: "A class in java.lang that wraps a primitive value in an object, e.g. Integer for int, Character for char." },
        { front: "Autoboxing", back: "Automatic conversion of a primitive into its wrapper object, e.g. Integer a = 45;" },
        { front: "Unboxing", back: "Automatic conversion of a wrapper object back to its primitive, e.g. int b = a;" },
        { front: "Integer.parseInt(\"42\")", back: "Returns the int 42. A non-numeric string causes a NumberFormatException." },
        { front: "Implicit type conversion", back: "Automatic widening by the compiler to a type that can hold all values: byte → short → int → long → float → double." },
        { front: "Explicit type conversion", back: "Type casting written by the programmer, e.g. (int) 9.99, which gives 9." },
        { front: "Type promotion", back: "In an expression, byte, short and char are converted to int, and then to the widest type present." },
        { front: "Integer overflow", back: "Integer.MAX_VALUE + 1 wraps to Integer.MIN_VALUE (−2147483648) without any error." },
        { front: "Character.getNumericValue('7') vs '7' + 0", back: "7 versus 55 (the Unicode code of '7')." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is the wrapper class for `char`?",
          options: ["Character", "Char", "String", "Integer"],
          answer: 0,
          explain: "The wrappers are Byte, Short, Integer, Long, Float, Double, Character and Boolean.",
        },
        {
          kind: "numeric",
          q: "What does `System.out.println((int) 7.8 + (int) 2.6);` print?",
          answer: 9,
          explain: "Each cast truncates: 7 + 2 = 9.",
        },
        {
          kind: "fill",
          q: "Converting an int into an Integer object automatically is called ___.",
          answer: ["autoboxing", "boxing", "auto-boxing"],
          explain: "The reverse is unboxing.",
        },
        {
          kind: "mcq",
          q: "Output of `System.out.println(Integer.parseInt(\"12\") + \"3\");`?",
          options: ["123", "15", "12 3", "Error"],
          answer: 0,
          explain: "parseInt gives the int 12, but + with the String \"3\" joins: 123.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "`Character.isLetterOrDigit('_')` returns true.",
          answer: false,
          explain: "An underscore is neither a letter nor a digit.",
        },
        {
          kind: "numeric",
          q: "What does `System.out.println(5 / 2 * 2.0);` print? (Give the number.)",
          answer: 4,
          explain: "Left to right: 5 / 2 is int division = 2; then 2 * 2.0 = 4.0.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What is printed by `byte b = (byte) 130; System.out.println(b);`?",
          options: ["-126", "130", "127", "2"],
          answer: 0,
          explain: "130 does not fit in a byte, so it wraps: 130 − 256 = −126.",
          difficulty: 3,
        },
        {
          kind: "multi",
          q: "Which are widening conversions (no cast needed)? (Choose all that apply)",
          options: ["int → long", "char → int", "float → double", "double → int"],
          answers: [0, 1, 2],
          explain: "double → int is narrowing and needs a cast.",
        },
      ],
    },
    {
      slug: "c11-isc-primitive-types-board-practice",
      title: "Board Practice: Primitive Values, Wrapper Classes and Types",
      summary: "Mixed ISC-style questions on types, literals, wrapper methods and casting, with an output question and a program that sorts the characters of a vehicle number.",
      minutes: 20,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "This chapter is a favourite for short answers: \"name the type\", \"give the output\", \"what is the value after the cast\", and \"state the difference\". Practise each kind below.",
        },
        {
          type: "example",
          title: "Output question with mixed types",
          problem: "Give the output: `char ch = 'D'; int k = ch + 3; System.out.println(k); System.out.println((char) k); System.out.println(ch + \"\" + 3); System.out.println(Character.toLowerCase(ch));`",
          steps: [
            "'D' is 68, so k = 71.",
            "(char) 71 is 'G'.",
            "`ch + \"\"` is the String \"D\", then + 3 joins: \"D3\".",
            "toLowerCase('D') is 'd'.",
          ],
          answer: "71\nG\nD3\nd",
        },
        {
          type: "example",
          title: "Difference questions",
          problem: "State two differences between primitive types and wrapper classes.",
          steps: [
            "A primitive variable holds the value itself; a wrapper variable holds a reference to an object that contains the value.",
            "Primitives have no methods; wrapper classes provide methods and constants such as parseInt() and MAX_VALUE.",
            "A wrapper reference can be null; a primitive cannot (an int field defaults to 0).",
          ],
          answer: "Value vs object reference; no methods vs useful methods (any two, with an example each).",
        },
        {
          type: "mistake",
          wrong: "To change the digit character '7' into the number 7, I write `(int) '7'`.",
          right: "`(int) '7'` gives **55**, the Unicode code. Use `'7' - '0'` (55 − 48 = 7) or `Character.getNumericValue('7')`.",
          why: "Casting \"looks\" like converting to a number, and for a digit you expect its face value. But a char is stored as its code, and the cast just shows that code.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "Value of `'9' - '0' + 1`?",
              answer: 10,
              explain: "57 − 48 = 9, plus 1 = 10.",
            },
          ],
        },
        {
          type: "code",
          lang: "java",
          caption: "Convert.java: write a program to count the letters and digits in a vehicle number and add its digits",
          code: `public class Convert
{
    public static void main(String[] args)
    {
        String code = "KA05MX2025";
        int letters = 0, digits = 0, sum = 0;
        for (int i = 0; i < code.length(); i++)
        {
            char ch = code.charAt(i);
            if (Character.isLetter(ch))
                letters++;
            else if (Character.isDigit(ch))
            {
                digits++;
                sum = sum + (ch - '0');
            }
        }
        System.out.println("Letters = " + letters);
        System.out.println("Digits = " + digits);
        System.out.println("Sum of digits = " + sum);
        int year = Integer.parseInt(code.substring(6));
        System.out.println("Year + 1 = " + (year + 1));
    }
}`,
        },
        {
          type: "example",
          title: "Trace Convert.java",
          problem: "Give the output of Convert.java.",
          steps: [
            "Letters: K, A, M, X = 4. Digits: 0, 5, 2, 0, 2, 5 = 6.",
            "`ch - '0'` turns each digit character into its value: 0 + 5 + 2 + 0 + 2 + 5 = 14.",
            "`code.substring(6)` is \"2025\" (positions start at 0). parseInt makes it the int 2025, and + 1 gives 2026.",
          ],
          answer: "Letters = 4\nDigits = 6\nSum of digits = 14\nYear + 1 = 2026",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "What does `System.out.println(\"Sum: \" + 2 + 3);` print?",
            emoji: "➕",
            options: ["Sum: 23", "Sum: 5", "Sum: 2 3", "Error"],
            answer: 0,
            trap: 1,
            explain: "+ works left to right. \"Sum: \" + 2 is a String, so + 3 joins again. Write \"Sum: \" + (2 + 3) to get Sum: 5.",
          },
        },
        {
          type: "callout",
          tone: "tip",
          title: "Practical-exam tip",
          md: "When you read numbers from the user as text, convert them with `Integer.parseInt` or `Double.parseDouble`. If the text is not a number, Java throws a NumberFormatException, so test with sensible input. Use `Character` methods rather than comparing with codes; they are clearer to the examiner.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "ISC tip",
          md: "In output questions, underline every place where a String meets + : from that point on, + joins. Before it, + adds. Write the type of each intermediate result in rough work.",
        },
        {
          type: "keypoints",
          items: [
            "char arithmetic uses codes: '0' = 48, 'A' = 65, 'a' = 97.",
            "Digit character to number: `ch - '0'` or Character.getNumericValue(ch).",
            "String to number: Integer.parseInt / Double.parseDouble.",
            "Once a String appears in a + chain, everything after it is joined.",
          ],
        },
      ],
      flashcards: [
        { front: "'D' + 3", back: "71 (an int). (char) 71 is 'G'." },
        { front: "ch - '0' for ch = '6'", back: "6: the face value of a digit character." },
        { front: "\"Sum: \" + 2 + 3", back: "Sum: 23 (joined left to right)." },
        { front: "substring(6) of \"KA05MX2025\"", back: "\"2025\" (from index 6 to the end)." },
        { front: "Primitive vs wrapper", back: "Primitive holds a value and has no methods; a wrapper object holds the value and offers methods; a wrapper reference can be null." },
        { front: "NumberFormatException", back: "Thrown by parseInt / parseDouble when the String is not a valid number." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Output of `System.out.println(1 + 2 + \"3\" + 4 + 5);`?",
          options: ["3345", "12345", "339", "15"],
          answer: 0,
          explain: "1 + 2 = 3 (both ints), then \"3\" joins: \"33\", then \"334\", then \"3345\".",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "What does `System.out.println((int) 'C' + 1);` print?",
          answer: 68,
          explain: "'C' is 67; 67 + 1 = 68.",
        },
        {
          kind: "truefalse",
          q: "`Integer.parseInt(\"12.5\")` returns 12.",
          answer: false,
          explain: "\"12.5\" is not a valid int, so it throws a NumberFormatException. Use Double.parseDouble.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The wrapper class method that converts the String \"3.75\" into a double is Double.___(\"3.75\").",
          answer: ["parseDouble", "valueOf"],
          explain: "parseDouble returns a double; valueOf returns a Double object (which unboxes automatically).",
        },
        {
          kind: "mcq",
          q: "What is the value of `Character.isUpperCase(Character.toUpperCase('k'))`?",
          options: ["true", "false", "'K'", "75"],
          answer: 0,
          explain: "toUpperCase('k') is 'K', which is upper case.",
        },
        {
          kind: "mcq",
          q: "Which statement correctly stores the sum of two shorts a and b in a short c?",
          options: ["c = (short) (a + b);", "c = a + b;", "c = (short) a + b;", "c = short(a + b);"],
          answer: 0,
          explain: "a + b is an int, so the whole sum must be cast. In option 3 only a is cast, and the sum is still int.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "For the string \"MH12AB3456\", what is the sum of its digits?",
          answer: 21,
          explain: "1 + 2 + 3 + 4 + 5 + 6 = 21.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [numbers, propLogic, hardware, objectsClasses, primitives];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Numbers": "c11-isc-numbers",
  "11:Propositional Logic": "c11-isc-propositional-logic",
  "11:Computer Hardware": "c11-isc-computer-hardware",
  "11:Objects and Classes": "c11-isc-objects-classes",
  "11:Primitive Values, Wrapper Classes and Types": "c11-isc-primitive-wrapper-types",
};
