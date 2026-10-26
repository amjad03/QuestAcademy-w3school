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

export const topics: Topic[] = [numbers];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Numbers": "c11-isc-numbers",
};
