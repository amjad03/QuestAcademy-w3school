/**
 * Topic map shared by every board: what Quest Academy already has for a topic
 * (lessons, exam-bank chapter for drills, formula sheet). Boards reference
 * topics by key so a chapter like "Laws of Motion" maps the same way in CBSE,
 * PUC, ISC and JEE.
 */
import type { ExamSubject } from "@/content/types";

export interface Topic {
  lessons: string[];
  exam?: { subject: ExamSubject; chapters: string[] };
  formula?: string;
}

const P = (...chapters: string[]) => ({ subject: "physics" as const, chapters });
const C = (...chapters: string[]) => ({ subject: "chemistry" as const, chapters });
const B = (...chapters: string[]) => ({ subject: "biology" as const, chapters });
const M = (...chapters: string[]) => ({ subject: "maths" as const, chapters });

export const TOPICS = {
  /* ---------------- physics ---------------- */
  "phy.units": { lessons: [], exam: P("Units & Measurement"), formula: "Units & Measurement" },
  "phy.motion-basic": { lessons: ["physics-school/motion/speed-and-velocity", "physics-school/motion/acceleration-equations"] },
  "phy.straight-line": {
    lessons: ["physics-school/motion/acceleration-equations", "exam-physics/kinematics/kinematics-concept-crash", "exam-physics/kinematics/kinematics-problem-patterns"],
    exam: P("Kinematics"),
    formula: "Kinematics",
  },
  "phy.plane": { lessons: ["physics-school/motion/projectile-motion", "exam-physics/kinematics/kinematics-concept-crash"], exam: P("Kinematics"), formula: "Kinematics" },
  "phy.kinematics": {
    lessons: ["physics-school/motion/speed-and-velocity", "physics-school/motion/acceleration-equations", "physics-school/motion/projectile-motion", "exam-physics/kinematics/kinematics-concept-crash", "exam-physics/kinematics/kinematics-problem-patterns"],
    exam: P("Kinematics"),
    formula: "Kinematics",
  },
  "phy.force-basic": { lessons: ["physics-school/force-laws/newtons-laws", "physics-school/force-laws/momentum-and-friction"] },
  "phy.laws": {
    lessons: ["physics-school/force-laws/newtons-laws", "physics-school/force-laws/momentum-and-friction", "exam-physics/laws-of-motion/laws-of-motion-concept-crash", "exam-physics/laws-of-motion/laws-of-motion-problem-patterns"],
    exam: P("Laws of Motion"),
    formula: "Laws of Motion",
  },
  "phy.work-basic": { lessons: ["physics-school/gravitation-energy/work-energy-power"] },
  "phy.wep": {
    lessons: ["physics-school/gravitation-energy/work-energy-power", "exam-physics/work-energy-power/work-energy-power-concept-crash", "exam-physics/work-energy-power/work-energy-power-problem-patterns"],
    exam: P("Work, Energy & Power"),
    formula: "Work, Energy & Power",
  },
  "phy.rotation": { lessons: [], exam: P("Laws of Motion") },
  "phy.gravitation-basic": { lessons: ["physics-school/gravitation-energy/gravitation"] },
  "phy.gravitation": { lessons: ["physics-school/gravitation-energy/gravitation"], exam: P("Gravitation"), formula: "Gravitation" },
  "phy.bulk": { lessons: [] },
  "phy.thermal": { lessons: [], exam: P("Thermodynamics"), formula: "Thermodynamics" },
  "phy.thermo": { lessons: [], exam: P("Thermodynamics"), formula: "Thermodynamics" },
  "phy.oscillations": { lessons: ["physics-school/gravitation-energy/simple-pendulum"], exam: P("Oscillations & Waves"), formula: "Oscillations & Waves" },
  "phy.waves": { lessons: ["physics-school/waves-sound-light/waves-and-sound"], exam: P("Oscillations & Waves"), formula: "Oscillations & Waves" },
  "phy.sound-basic": { lessons: ["physics-school/waves-sound-light/waves-and-sound"] },
  "phy.electrostatics": {
    lessons: ["exam-physics/electrostatics/electrostatics-concept-crash", "exam-physics/electrostatics/electrostatics-problem-patterns"],
    exam: P("Electrostatics"),
    formula: "Electrostatics",
  },
  "phy.capacitance": { lessons: ["exam-physics/electrostatics/electrostatics-problem-patterns"], exam: P("Electrostatics"), formula: "Electrostatics" },
  "phy.electricity-basic": { lessons: ["physics-school/electricity/current-and-ohms-law", "physics-school/electricity/circuits-and-power"] },
  "phy.current": {
    lessons: ["physics-school/electricity/current-and-ohms-law", "physics-school/electricity/circuits-and-power", "exam-physics/current-electricity/current-electricity-concept-crash", "exam-physics/current-electricity/current-electricity-problem-patterns"],
    exam: P("Current Electricity"),
    formula: "Current Electricity",
  },
  "phy.magnetism": { lessons: [], exam: P("Magnetism"), formula: "Magnetism" },
  "phy.magnetism-basic": { lessons: [] },
  "phy.emi": { lessons: [], exam: P("Magnetism"), formula: "Magnetism" },
  "phy.em-waves": { lessons: [] },
  "phy.light-basic": { lessons: ["physics-school/waves-sound-light/light-reflection-refraction"] },
  "phy.ray-optics": { lessons: ["physics-school/waves-sound-light/light-reflection-refraction"], exam: P("Optics"), formula: "Optics" },
  "phy.wave-optics": { lessons: [], exam: P("Optics"), formula: "Optics" },
  "phy.modern": {
    lessons: ["exam-physics/modern-physics/modern-physics-concept-crash", "exam-physics/modern-physics/modern-physics-problem-patterns"],
    exam: P("Modern Physics"),
    formula: "Modern Physics",
  },
  "phy.electronics": { lessons: [] },
  "phy.none": { lessons: [] },

  /* ---------------- chemistry ---------------- */
  "che.matter": { lessons: ["chemistry-school/matter-and-states/states-of-matter"] },
  "che.mixtures": { lessons: ["chemistry-school/matter-and-states/pure-substances-and-mixtures"] },
  "che.atoms-molecules": { lessons: ["chemistry-school/atoms-molecules-periodic-table/molecules-and-formulae"] },
  "che.atom-basic": { lessons: ["chemistry-school/atoms-molecules-periodic-table/inside-the-atom"] },
  "che.mole": {
    lessons: ["chemistry-school/atoms-molecules-periodic-table/molecules-and-formulae", "exam-chemistry/mole-concept/mole-concept-concept-crash", "exam-chemistry/mole-concept/mole-concept-problem-patterns"],
    exam: C("Mole Concept"),
    formula: "Mole Concept",
  },
  "che.atom": { lessons: ["chemistry-school/atoms-molecules-periodic-table/inside-the-atom"], exam: C("Atomic Structure"), formula: "Atomic Structure" },
  "che.periodic": { lessons: ["chemistry-school/atoms-molecules-periodic-table/the-periodic-table"], exam: C("Periodic Table"), formula: "Periodic Table" },
  "che.periodic-basic": { lessons: ["chemistry-school/atoms-molecules-periodic-table/the-periodic-table"] },
  "che.bonding": {
    lessons: ["exam-chemistry/chemical-bonding/chemical-bonding-concept-crash", "exam-chemistry/chemical-bonding/chemical-bonding-problem-patterns"],
    exam: C("Chemical Bonding"),
    formula: "Chemical Bonding",
  },
  "che.thermo": { lessons: [], exam: C("Thermochemistry"), formula: "Thermochemistry" },
  "che.equilibrium": {
    lessons: ["exam-chemistry/equilibrium/equilibrium-concept-crash", "exam-chemistry/equilibrium/equilibrium-problem-patterns", "chemistry-school/acids-bases-salts/acids-bases-and-ph"],
    exam: C("Equilibrium"),
    formula: "Equilibrium",
  },
  "che.redox": { lessons: [], exam: C("Electrochemistry") },
  "che.electrochem": {
    lessons: ["exam-chemistry/electrochemistry/electrochemistry-concept-crash", "exam-chemistry/electrochemistry/electrochemistry-problem-patterns"],
    exam: C("Electrochemistry"),
    formula: "Electrochemistry",
  },
  "che.kinetics": {
    lessons: ["exam-chemistry/chemical-kinetics/chemical-kinetics-concept-crash", "exam-chemistry/chemical-kinetics/chemical-kinetics-problem-patterns"],
    exam: C("Chemical Kinetics"),
    formula: "Chemical Kinetics",
  },
  "che.reactions-basic": { lessons: ["chemistry-school/chemical-reactions/signs-and-types-of-reactions", "chemistry-school/chemical-reactions/balancing-equations"] },
  "che.acids-basic": { lessons: ["chemistry-school/acids-bases-salts/acids-bases-and-ph", "chemistry-school/acids-bases-salts/neutralisation-and-salts"] },
  "che.carbon-basic": { lessons: ["chemistry-school/carbon-compounds/carbon-the-builder", "chemistry-school/carbon-compounds/everyday-carbon-compounds"] },
  "che.organic": {
    lessons: ["chemistry-school/carbon-compounds/carbon-the-builder", "exam-chemistry/organic-basics/organic-basics-concept-crash", "exam-chemistry/organic-basics/organic-basics-problem-patterns"],
    exam: C("Organic Basics"),
    formula: "Organic Basics",
  },
  "che.hydrocarbons": { lessons: [], exam: C("Hydrocarbons"), formula: "Hydrocarbons" },
  "che.organic-func": { lessons: ["chemistry-school/carbon-compounds/everyday-carbon-compounds"], exam: C("Organic Basics") },
  "che.coordination": { lessons: [], exam: C("Coordination Compounds"), formula: "Coordination Compounds" },
  "che.none": { lessons: [] },

  /* ---------------- biology ---------------- */
  "bio.cell-basic": { lessons: ["biology-school/the-cell/cell-the-unit-of-life", "biology-school/the-cell/plant-cells-and-transport"] },
  "bio.cell": {
    lessons: ["biology-school/the-cell/cell-the-unit-of-life", "exam-biology/cell-biology/cell-biology-concept-crash", "exam-biology/cell-biology/cell-biology-problem-patterns"],
    exam: B("Cell Biology"),
  },
  "bio.cell-division": { lessons: ["exam-biology/cell-biology/cell-biology-problem-patterns"], exam: B("Cell Biology") },
  "bio.tissues": { lessons: ["biology-school/human-body-systems/tissues-and-digestion"] },
  "bio.biomolecules": { lessons: [], exam: B("Biomolecules") },
  "bio.diversity": { lessons: [] },
  "bio.plant-structure": { lessons: [] },
  "bio.photosynthesis": { lessons: ["biology-school/plants-and-photosynthesis/photosynthesis"], exam: B("Plant Physiology") },
  "bio.plant-resp": { lessons: ["biology-school/plants-and-photosynthesis/plant-transport-and-respiration"], exam: B("Plant Physiology") },
  "bio.plant-phys": { lessons: ["biology-school/plants-and-photosynthesis/photosynthesis", "biology-school/plants-and-photosynthesis/plant-transport-and-respiration"], exam: B("Plant Physiology") },
  "bio.life-processes": {
    lessons: ["biology-school/human-body-systems/tissues-and-digestion", "biology-school/human-body-systems/respiratory-system", "biology-school/human-body-systems/circulatory-system", "biology-school/plants-and-photosynthesis/photosynthesis", "biology-school/plants-and-photosynthesis/plant-transport-and-respiration"],
  },
  "bio.breathing": { lessons: ["biology-school/human-body-systems/respiratory-system", "exam-biology/human-physiology/human-physiology-concept-crash"], exam: B("Human Physiology"), formula: "Human Physiology" },
  "bio.circulation": {
    lessons: ["biology-school/human-body-systems/circulatory-system", "exam-biology/human-physiology/human-physiology-concept-crash", "exam-biology/human-physiology/human-physiology-problem-patterns"],
    exam: B("Human Physiology"),
    formula: "Human Physiology",
  },
  "bio.physiology": {
    lessons: ["biology-school/human-body-systems/respiratory-system", "biology-school/human-body-systems/circulatory-system", "exam-biology/human-physiology/human-physiology-concept-crash", "exam-biology/human-physiology/human-physiology-problem-patterns"],
    exam: B("Human Physiology"),
    formula: "Human Physiology",
  },
  "bio.physiology-other": { lessons: ["exam-biology/human-physiology/human-physiology-problem-patterns"], exam: B("Human Physiology"), formula: "Human Physiology" },
  "bio.digestion": { lessons: ["biology-school/human-body-systems/tissues-and-digestion"], exam: B("Human Physiology") },
  "bio.reproduction": { lessons: [], exam: B("Reproduction") },
  "bio.heredity-basic": { lessons: ["biology-school/heredity-and-genetics/dna-genes-chromosomes", "biology-school/heredity-and-genetics/mendel-and-inheritance"] },
  "bio.genetics": {
    lessons: ["biology-school/heredity-and-genetics/mendel-and-inheritance", "exam-biology/genetics/genetics-concept-crash", "exam-biology/genetics/genetics-problem-patterns"],
    exam: B("Genetics"),
    formula: "Genetics",
  },
  "bio.molecular": {
    lessons: ["biology-school/heredity-and-genetics/dna-genes-chromosomes", "exam-biology/molecular-biology/molecular-biology-concept-crash", "exam-biology/molecular-biology/molecular-biology-problem-patterns"],
    exam: B("Molecular Biology"),
  },
  "bio.evolution": { lessons: [], exam: B("Evolution") },
  "bio.biotech": { lessons: [], exam: B("Biotechnology") },
  "bio.environment-basic": { lessons: ["biology-school/ecosystems-and-environment/food-chains-and-energy", "biology-school/ecosystems-and-environment/cycles-and-human-impact"] },
  "bio.ecology": {
    lessons: ["biology-school/ecosystems-and-environment/food-chains-and-energy", "biology-school/ecosystems-and-environment/cycles-and-human-impact", "exam-biology/ecology/ecology-concept-crash", "exam-biology/ecology/ecology-problem-patterns"],
    exam: B("Ecology"),
    formula: "Ecology",
  },
  "bio.none": { lessons: [] },

  /* ---------------- maths ---------------- */
  "mat.numbers": { lessons: ["math-middle/integers/meet-the-integers", "math-middle/fractions-decimals/decimals"] },
  "mat.polynomials": { lessons: ["math-high/polynomials-quadratics/polynomials"] },
  "mat.linear": { lessons: ["math-middle/algebra-basics/linear-equations", "math-high/coordinate-geometry/linear-graphs"] },
  "mat.coord-basic": { lessons: ["math-high/coordinate-geometry/distance-midpoint-section"] },
  "mat.geometry-basic": { lessons: ["math-middle/geometry-data/angles-and-triangles"] },
  "mat.area": { lessons: ["math-middle/geometry-data/area-and-perimeter"] },
  "mat.statistics": { lessons: ["math-middle/geometry-data/data-handling", "math-high/statistics-probability/statistics"] },
  "mat.probability-basic": { lessons: ["math-high/statistics-probability/probability"] },
  "mat.quadratic": {
    lessons: ["math-high/polynomials-quadratics/quadratic-equations", "exam-maths/quadratic-equations/quadratic-equations-concept-crash", "exam-maths/quadratic-equations/quadratic-equations-problem-patterns"],
    exam: M("Quadratic Equations"),
    formula: "Quadratic Equations",
  },
  "mat.quadratic-basic": { lessons: ["math-high/polynomials-quadratics/quadratic-equations"] },
  "mat.trig-basic": { lessons: ["math-high/trigonometry/trig-ratios"] },
  "mat.trig-apps": { lessons: ["math-high/trigonometry/identities-heights-distances"] },
  "mat.trig": { lessons: ["math-high/trigonometry/trig-ratios", "math-high/trigonometry/identities-heights-distances", "math-high/trigonometry/trig-graphs"], exam: M("Trigonometry"), formula: "Trigonometry" },
  "mat.sets": { lessons: [], exam: M("Sets & Functions"), formula: "Sets & Functions" },
  "mat.sequences": {
    lessons: ["exam-maths/sequences-series/sequences-series-concept-crash", "exam-maths/sequences-series/sequences-series-problem-patterns"],
    exam: M("Sequences & Series"),
    formula: "Sequences & Series",
  },
  "mat.ap-basic": { lessons: ["exam-maths/sequences-series/sequences-series-concept-crash"] },
  "mat.coord": {
    lessons: ["math-high/coordinate-geometry/linear-graphs", "math-high/coordinate-geometry/distance-midpoint-section", "exam-maths/coordinate-geometry/coordinate-geometry-concept-crash", "exam-maths/coordinate-geometry/coordinate-geometry-problem-patterns"],
    exam: M("Coordinate Geometry"),
    formula: "Coordinate Geometry",
  },
  "mat.conics": { lessons: ["exam-maths/coordinate-geometry/coordinate-geometry-problem-patterns"], exam: M("Coordinate Geometry"), formula: "Coordinate Geometry" },
  "mat.limits": { lessons: ["math-high/intro-calculus/limits", "math-high/intro-calculus/derivatives"], exam: M("Limits & Continuity", "Differentiation"), formula: "Limits & Continuity" },
  "mat.continuity": { lessons: ["math-high/intro-calculus/limits", "math-high/intro-calculus/derivatives"], exam: M("Limits & Continuity", "Differentiation"), formula: "Differentiation" },
  "mat.derivatives-app": { lessons: ["math-high/intro-calculus/derivatives"], exam: M("Differentiation"), formula: "Differentiation" },
  "mat.integration": {
    lessons: ["exam-maths/integration/integration-concept-crash", "exam-maths/integration/integration-problem-patterns"],
    exam: M("Integration"),
    formula: "Integration",
  },
  "mat.diff-eq": { lessons: [], exam: M("Integration") },
  "mat.vectors": { lessons: [], exam: M("Vectors & 3D"), formula: "Vectors & 3D" },
  "mat.matrices": {
    lessons: ["exam-maths/matrices-determinants/matrices-determinants-concept-crash", "exam-maths/matrices-determinants/matrices-determinants-problem-patterns"],
    exam: M("Matrices & Determinants"),
    formula: "Matrices & Determinants",
  },
  "mat.probability": {
    lessons: ["math-high/statistics-probability/probability", "exam-maths/probability/probability-concept-crash", "exam-maths/probability/probability-problem-patterns"],
    exam: M("Probability"),
    formula: "Probability",
  },
  "mat.ratio": { lessons: ["math-middle/ratio-percent/ratio-and-proportion", "math-middle/ratio-percent/percentages"] },
  "mat.algebra-basic": { lessons: ["math-middle/algebra-basics/algebraic-expressions"] },
  "mat.none": { lessons: [] },
} satisfies Record<string, Topic>;

export type TopicKey = keyof typeof TOPICS;
