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

export const topics: Topic[] = [numbers, propLogic];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Numbers": "c11-isc-numbers",
  "11:Propositional Logic": "c11-isc-propositional-logic",
};
