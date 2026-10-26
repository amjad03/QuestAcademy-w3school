/**
 * Class 11–12 optional subjects for the PCME / PCM-CS streams: Electronics (Karnataka PUC)
 * and Computer Science (CBSE 083, ISC, Karnataka PUC).
 *
 * Mapping based on known syllabi — check against the current official CBSE, CISCE and
 * Karnataka PUE syllabi (the PUC Electronics and Computer Science lists especially).
 */
import type { Row } from "./build";

const ele = (titles: string[]): Row[] => titles.map((t) => [t, "ele.none"]);
const cs = (titles: string[]): Row[] => titles.map((t) => [t, "cmp.none"]);

/* ---------------- Electronics (Karnataka PUC) ---------------- */
export const ELECTRONICS_11 = ele([
  "Introduction to Electronics",
  "Passive Components",
  "DC Circuits and Network Theorems",
  "AC Fundamentals",
  "Semiconductor Physics",
  "Semiconductor Diodes and Applications",
  "Bipolar Junction Transistor",
  "Transistor Biasing",
  "Number Systems and Codes",
  "Logic Gates",
]);
export const ELECTRONICS_12 = ele([
  "Transistor Amplifiers",
  "Feedback Amplifiers and Oscillators",
  "Field Effect Transistors",
  "Operational Amplifiers",
  "Wave Shaping and Multivibrators",
  "Communication Systems",
  "Boolean Algebra and Combinational Circuits",
  "Sequential Circuits",
  "Microcontrollers and Embedded Systems",
]);

/* ---------------- Computer Science · CBSE 083 ---------------- */
export const CS_CBSE_11 = cs([
  "Computer Systems and Organisation",
  "Number Systems and Encoding",
  "Boolean Logic",
  "Introduction to Problem Solving",
  "Getting Started with Python",
  "Flow of Control",
  "Strings",
  "Lists",
  "Tuples and Dictionaries",
  "Python Modules",
  "Society, Law and Ethics",
]);
export const CS_CBSE_12 = cs([
  "Python Revision Tour",
  "Functions",
  "Exception Handling",
  "File Handling",
  "Stack",
  "Computer Networks",
  "Database Concepts",
  "Structured Query Language (SQL)",
  "Interface of Python with SQL",
]);

/* ---------------- Computer Science · Karnataka PUC (the full NCERT CS books, not the CBSE 083 cut) ---------------- */
export const CS_PUC_11 = cs([
  "Computer Systems and Organisation",
  "Number Systems and Encoding",
  "Emerging Trends",
  "Introduction to Problem Solving",
  "Getting Started with Python",
  "Flow of Control",
  "Functions",
  "Strings",
  "Lists",
  "Tuples and Dictionaries",
  "Society, Law and Ethics",
]);
export const CS_PUC_12 = cs([
  "Exception Handling",
  "File Handling",
  "Stack",
  "Queue",
  "Sorting",
  "Searching",
  "Understanding Data",
  "Database Concepts",
  "Structured Query Language (SQL)",
  "Computer Networks",
  "Data Communication",
  "Security Aspects",
]);

/* ---------------- Computer Science · ISC (Java) ---------------- */
export const CS_ISC_11 = cs([
  "Numbers",
  "Propositional Logic",
  "Computer Hardware",
  "Objects and Classes",
  "Primitive Values, Wrapper Classes and Types",
  "Expressions and Statements",
  "Methods",
  "Arrays",
  "Strings in Java",
  "Recursion",
  "Basic Input/Output and Packages",
  "Trends in Computing and Ethics",
]);
export const CS_ISC_12 = cs([
  "Boolean Algebra",
  "Logic Circuits",
  "Objects and Classes",
  "Arrays and Strings",
  "Recursion",
  "Inheritance, Interfaces and Polymorphism",
  "Data Structures",
  "Complexity and Big O",
]);
