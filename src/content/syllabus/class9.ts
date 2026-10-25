/**
 * Class 9 chapter lists beyond CBSE / ICSE maths and science: social science, English,
 * Hindi, Kannada, computer applications and GK for CBSE, ICSE and Karnataka (KSEAB), plus
 * Karnataka Class 9 maths and science.
 *
 * Language grammar, English writing and GK reuse the Class 10 lessons where the chapter is the
 * same (same title → same lessons). Literature chapters are not listed yet.
 *
 * Mapping based on known syllabi — check against the current official CBSE, CISCE and KSEAB
 * editions; the Karnataka Class 9 social science list especially needs checking.
 */
import type { Row } from "./build";
import { GK_10, KANNADA_10, KSEEB_ENGLISH_10, ICSE_ENGLISH_10 } from "./class10";

const soc = (titles: string[]): Row[] => titles.map((t) => [t, "soc.none"]);
const eng = (titles: string[]): Row[] => titles.map((t) => [t, "eng.none"]);
const hin = (titles: string[]): Row[] => titles.map((t) => [t, "hin.none"]);
const cmp = (titles: string[]): Row[] => titles.map((t) => [t, "cmp.none"]);

/* ---------------- CBSE ---------------- */
export const CBSE_HISTORY_9 = soc(["The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler", "Forest Society and Colonialism", "Pastoralists in the Modern World"]);
export const CBSE_GEOGRAPHY_9 = soc(["India – Size and Location", "Physical Features of India", "Drainage", "Climate", "Natural Vegetation and Wildlife", "Population"]);
export const CBSE_CIVICS_9 = soc(["What is Democracy? Why Democracy?", "Constitutional Design", "Electoral Politics", "Working of Institutions", "Democratic Rights"]);
export const CBSE_ECONOMICS_9 = soc(["The Story of Village Palampur", "People as Resource", "Poverty as a Challenge", "Food Security in India"]);
export const CBSE_ENGLISH_9 = eng(["Tenses", "Modals", "Subject–Verb Agreement", "Determiners", "Reported Speech", "Editing and Omission", "Descriptive Paragraph", "Story Writing", "Reading Comprehension"]);
export const CBSE_HINDI_9 = hin([
  "Prefixes and Suffixes (उपसर्ग और प्रत्यय)",
  "Anusvara, Anunasika and Nukta (अनुस्वार, अनुनासिक और नुक्ता)",
  "Sandhi (संधि)",
  "Sentence Types by Meaning (अर्थ के आधार पर वाक्य भेद)",
  "Punctuation (विराम चिह्न)",
  "Letter Writing (पत्र लेखन)",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  "Dialogue Writing (संवाद लेखन)",
  "Unseen Passage (अपठित गद्यांश)",
]);
export const CBSE_COMPUTERS_9 = cmp(["Basics of Information Technology", "Cyber Safety", "Word Processing", "Presentations", "Spreadsheets", "Getting Started with Python"]);

/* ---------------- ICSE ---------------- */
export const ICSE_HISTORY_9 = soc([
  "The Harappan Civilisation",
  "The Vedic Period",
  "Jainism and Buddhism",
  "The Mauryan Empire",
  "The Sangam Age",
  "The Age of the Guptas",
  "Medieval India: The Cholas and the Delhi Sultanate",
  "The Mughal Empire",
  "The Composite Culture",
  "The Renaissance",
  "The Reformation",
  "The Industrial Revolution",
]);
export const ICSE_CIVICS_9 = soc(["Our Constitution", "Salient Features of the Constitution", "Elections", "Local Self-Government: Rural", "Local Self-Government: Urban"]);
export const ICSE_GEOGRAPHY_9 = soc([
  "Our World: Earth as a Planet",
  "Geographic Grid: Latitudes and Longitudes",
  "Rotation and Revolution",
  "Earth's Structure",
  "Landforms of the Earth",
  "Rocks",
  "Volcanoes",
  "Earthquakes",
  "Weathering and Denudation",
  "Hydrosphere",
  "Atmosphere: Composition and Structure",
  "Insolation",
  "Atmospheric Pressure and Winds",
  "Humidity and Precipitation",
  "Pollution",
  "Natural Regions of the World",
]);
export const ICSE_ENGLISH_9 = ICSE_ENGLISH_10;
export const ICSE_HINDI_9 = hin([
  "Gender, Number and Case (लिंग, वचन, कारक)",
  "Prefixes and Suffixes (उपसर्ग और प्रत्यय)",
  "Vocabulary: Synonyms, Antonyms and One-word Substitutes",
  "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)",
  "Correcting Sentences (वाक्य शुद्धि)",
  "Tenses (काल)",
  "Letter Writing (पत्र लेखन)",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  "Unseen Passage (अपठित गद्यांश)",
]);
export const ICSE_COMPUTERS_9 = cmp([
  "Introduction to Object-Oriented Programming",
  "Elementary Concept of Objects and Classes",
  "Values and Data Types",
  "Operators in Java",
  "Input in Java",
  "Mathematical Library Methods",
  "Conditional Constructs in Java",
  "Iterative Constructs in Java",
  "Nested Loops",
]);

/* ---------------- Karnataka (KSEAB) ---------------- */
export const KSEEB_MATHS_9: Row[] = [
  ["Number Systems", "mat.numbers"],
  ["Polynomials", "mat.polynomials"],
  ["Coordinate Geometry", "mat.coord-basic"],
  ["Linear Equations in Two Variables", "mat.linear"],
  ["Introduction to Euclid's Geometry", "mat.none"],
  ["Lines and Angles", "mat.geometry-basic"],
  ["Triangles", "mat.geometry-basic"],
  ["Quadrilaterals", "mat.none"],
  ["Areas of Parallelograms and Triangles", "mat.none"],
  ["Circles", "mat.none"],
  ["Constructions", "mat.none"],
  ["Heron's Formula", "mat.area"],
  ["Surface Areas and Volumes", "mat.none"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability-basic"],
];
export const KSEEB_SCIENCE_9: Row[] = [
  ["Matter in Our Surroundings", "che.matter"],
  ["Is Matter Around Us Pure?", "che.mixtures"],
  ["Atoms and Molecules", "che.atoms-molecules"],
  ["Structure of the Atom", "che.atom-basic"],
  ["The Fundamental Unit of Life", "bio.cell-basic"],
  ["Tissues", "bio.tissues"],
  ["Diversity in Living Organisms", "bio.none"],
  ["Motion", "phy.motion-basic"],
  ["Force and Laws of Motion", "phy.force-basic"],
  ["Gravitation", "phy.gravitation-basic"],
  ["Work and Energy", "phy.work-basic"],
  ["Sound", "phy.sound-basic"],
  ["Why Do We Fall Ill?", "bio.none"],
  ["Natural Resources", "bio.none"],
  ["Improvement in Food Resources", "bio.none"],
];
export const KSEEB_HISTORY_9 = soc([
  "Christianity and Islam",
  "Medieval Europe, the Renaissance and the Reformation",
  "The Age of Revolutions",
  "The Rajputs and the Delhi Sultans",
  "The Vijayanagara and Bahmani Kingdoms",
  "The Bhakti and Sufi Movements",
  "The Mughals and the Marathas",
  "The Wodeyars of Mysore and the Nayakas of Keladi",
]);
export const KSEEB_POLITICS_9 = soc(["Democracy", "Elections and Political Parties", "Local Self-Government"]);
export const KSEEB_SOCIOLOGY_9 = soc(["Socialisation", "Community and Social Groups"]);
export const KSEEB_GEOGRAPHY_9 = soc([
  "Karnataka: Location and Physical Divisions",
  "Climate, Soils and Natural Vegetation of Karnataka",
  "Water Resources of Karnataka",
  "Land Use and Agriculture in Karnataka",
  "Minerals, Power and Industries of Karnataka",
  "Transport, Communication and Tourism in Karnataka",
  "Population of Karnataka",
]);
export const KSEEB_ECONOMICS_9 = soc(["Meaning and Concepts of Economics", "Natural and Human Resources"]);
export const KSEEB_BUSINESS_9 = soc(["Business and Its Types", "Banks and Their Services"]);
export const KSEEB_ENGLISH_9 = KSEEB_ENGLISH_10;
export const KSEEB_HINDI_9 = hin([
  "Gender, Number and Case (लिंग, वचन, कारक)",
  "Tenses (काल)",
  "Prefixes and Suffixes (उपसर्ग और प्रत्यय)",
  "Vocabulary: Synonyms, Antonyms and One-word Substitutes",
  "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)",
  "Letter Writing (पत्र लेखन)",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  "Unseen Passage (अपठित गद्यांश)",
]);

/* ---------------- Shared ---------------- */
export const KANNADA_9 = KANNADA_10;
export const GK_9 = GK_10;
