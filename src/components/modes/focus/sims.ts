import type { ExamSubject } from "@/content/types";

/** Lessons with an interactive simulation widget. */
export const SIMULATIONS: { title: string; lessonId: string; subject: ExamSubject }[] = [
  { title: "Projectile motion", lessonId: "physics-school/motion/projectile-motion", subject: "physics" },
  { title: "Simple pendulum", lessonId: "physics-school/gravitation-energy/simple-pendulum", subject: "physics" },
  { title: "Ohm’s law circuit", lessonId: "physics-school/electricity/current-and-ohms-law", subject: "physics" },
  { title: "Waves", lessonId: "physics-school/waves-sound-light/waves-and-sound", subject: "physics" },
  { title: "Interactive periodic table", lessonId: "chemistry-school/atoms-molecules-periodic-table/the-periodic-table", subject: "chemistry" },
  { title: "Cell explorer", lessonId: "biology-school/the-cell/cell-the-unit-of-life", subject: "biology" },
  { title: "Quadratic graphs", lessonId: "math-high/polynomials-quadratics/quadratic-equations", subject: "maths" },
  { title: "Linear graphs", lessonId: "math-high/coordinate-geometry/linear-graphs", subject: "maths" },
  { title: "Trig graphs", lessonId: "math-high/trigonometry/trig-graphs", subject: "maths" },
  { title: "Triangle explorer", lessonId: "math-middle/geometry-data/angles-and-triangles", subject: "maths" },
];
