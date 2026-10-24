/**
 * Class 10 chapter lists beyond maths and science: social science, English
 * grammar and writing, Hindi, Kannada, computer applications and general knowledge,
 * for CBSE, ICSE and Karnataka SSLC. Plus the Karnataka SSLC maths and science lists.
 *
 * Lessons are shared between boards: each chapter title links to lessons written in
 * src/content/subjects/extra/ (by family and exact title). Literature chapters are not
 * listed yet.
 *
 * Mapping based on known syllabi — check against the current official CBSE, CISCE
 * and KSEAB editions; chapters are dropped, merged or renamed from year to year.
 */
import type { Row } from "./build";

const soc = (titles: string[]): Row[] => titles.map((t) => [t, "soc.none"]);
const eng = (titles: string[]): Row[] => titles.map((t) => [t, "eng.none"]);
const hin = (titles: string[]): Row[] => titles.map((t) => [t, "hin.none"]);
const kan = (titles: string[]): Row[] => titles.map((t) => [t, "kan.none"]);
const cmp = (titles: string[]): Row[] => titles.map((t) => [t, "cmp.none"]);
const gk = (titles: string[]): Row[] => titles.map((t) => [t, "gk.none"]);

/* ---------------- CBSE ---------------- */
export const CBSE_HISTORY_10 = soc(["The Rise of Nationalism in Europe", "Nationalism in India", "The Making of a Global World", "The Age of Industrialisation", "Print Culture and the Modern World"]);
export const CBSE_GEOGRAPHY_10 = soc(["Resources and Development", "Forest and Wildlife Resources", "Water Resources", "Agriculture", "Minerals and Energy Resources", "Manufacturing Industries", "Lifelines of National Economy"]);
export const CBSE_CIVICS_10 = soc(["Power Sharing", "Federalism", "Gender, Religion and Caste", "Political Parties", "Outcomes of Democracy"]);
export const CBSE_ECONOMICS_10 = soc(["Development", "Sectors of the Indian Economy", "Money and Credit", "Globalisation and the Indian Economy", "Consumer Rights"]);
export const CBSE_ENGLISH_10 = eng(["Tenses", "Modals", "Subject–Verb Agreement", "Determiners", "Reported Speech", "Active and Passive Voice", "Editing and Omission", "Formal Letter Writing", "Analytical Paragraph", "Reading Comprehension"]);
export const CBSE_HINDI_10 = hin(["Pad Parichay (पद परिचय)", "Sentence Types (रचना के आधार पर वाक्य भेद)", "Voice (वाच्य)", "Compound Words (समास)", "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)", "Letter Writing (पत्र लेखन)", "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)", "Notice, Advertisement, Message and E-mail Writing", "Unseen Passage (अपठित गद्यांश)"]);
export const CBSE_COMPUTERS_10 = cmp(["Networking and the Internet", "HTML: Lists, Images and Links", "HTML: Tables and Forms", "Styling with CSS", "Cyber Ethics and Safety"]);

/* ---------------- ICSE ---------------- */
export const ICSE_HISTORY_10 = soc([
  "The First War of Independence, 1857",
  "Growth of Nationalism",
  "First Phase of the Indian National Movement (1885–1907)",
  "Second Phase of the Indian National Movement (1905–1916)",
  "The Muslim League",
  "Mahatma Gandhi and the National Movement",
  "Forward Bloc and the INA",
  "Independence and Partition of India",
  "The First World War",
  "Rise of Dictatorships",
  "The Second World War",
  "The United Nations",
  "Major Agencies of the United Nations",
  "The Non-Aligned Movement",
]);
export const ICSE_CIVICS_10 = soc(["The Union Parliament", "The Union Executive: President and Vice-President", "The Union Executive: Prime Minister and Council of Ministers", "The Judiciary: Supreme Court", "High Courts and Subordinate Courts"]);
export const ICSE_GEOGRAPHY_10 = soc(["Interpretation of Topographical Maps", "Map of India", "Climate of India", "Soil Resources", "Natural Vegetation", "Water Resources", "Mineral and Energy Resources", "Agriculture", "Manufacturing Industries", "Transport", "Waste Management"]);
export const ICSE_ENGLISH_10 = eng(["Composition (Essay Writing)", "Letter Writing (Formal and Informal)", "Notice and E-mail Writing", "Comprehension", "Tenses", "Prepositions", "Active and Passive Voice", "Reported Speech", "Transformation of Sentences", "Joining Sentences", "Subject–Verb Agreement"]);
export const ICSE_HINDI_10 = hin([
  "Gender, Number and Case (लिंग, वचन, कारक)",
  "Vocabulary: Synonyms, Antonyms and One-word Substitutes",
  "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)",
  "Correcting Sentences (वाक्य शुद्धि)",
  "Voice (वाच्य)",
  "Tenses (काल)",
  "Letter Writing (पत्र लेखन)",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  "Unseen Passage (अपठित गद्यांश)",
]);
export const ICSE_COMPUTERS_10 = cmp(["Revision: Java Basics", "Class as the Basis of all Computation", "User-defined Methods", "Constructors", "Library Classes", "Encapsulation", "Arrays", "String Handling"]);

/* ---------------- Karnataka SSLC ---------------- */
export const KSEEB_MATHS_10: Row[] = [
  ["Arithmetic Progressions", "mat.ap-basic"],
  ["Triangles", "mat.geometry-basic"],
  ["Pair of Linear Equations in Two Variables", "mat.linear"],
  ["Circles", "mat.none"],
  ["Areas Related to Circles", "mat.none"],
  ["Coordinate Geometry", "mat.coord-basic"],
  ["Real Numbers", "mat.numbers"],
  ["Polynomials", "mat.polynomials"],
  ["Quadratic Equations", "mat.quadratic-basic"],
  ["Introduction to Trigonometry", "mat.trig-basic"],
  ["Some Applications of Trigonometry", "mat.trig-apps"],
  ["Statistics", "mat.statistics"],
  ["Probability", "mat.probability-basic"],
  ["Surface Areas and Volumes", "mat.none"],
  ["Constructions", "mat.none"],
];
export const KSEEB_SCIENCE_10: Row[] = [
  ["Chemical Reactions and Equations", "che.reactions-basic"],
  ["Acids, Bases and Salts", "che.acids-basic"],
  ["Metals and Non-metals", "che.none"],
  ["Carbon and its Compounds", "che.carbon-basic"],
  ["Periodic Classification of Elements", "che.periodic-basic"],
  ["Life Processes", "bio.life-processes"],
  ["Control and Coordination", "bio.none"],
  ["How do Organisms Reproduce?", "bio.none"],
  ["Heredity and Evolution", "bio.heredity-basic"],
  ["Light – Reflection and Refraction", "phy.light-basic"],
  ["The Human Eye and the Colourful World", "phy.none"],
  ["Electricity", "phy.electricity-basic"],
  ["Magnetic Effects of Electric Current", "phy.magnetism-basic"],
  ["Sources of Energy", "phy.none"],
  ["Our Environment", "bio.environment-basic"],
  ["Management of Natural Resources", "bio.none"],
];
export const KSEEB_HISTORY_10 = soc([
  "The Advent of Europeans to India",
  "The Extension of the British Rule",
  "The Impact of British Rule in India",
  "Opposition to British Rule in Karnataka",
  "The First War of Indian Independence (1857)",
  "Social and Religious Reform Movements",
  "Indian Freedom Movement",
  "Era of Gandhi and the National Movement",
  "Post-Independent India",
  "Political Developments of the 20th Century",
]);
export const KSEEB_POLITICS_10 = soc(["Problems of India and their Solutions", "India's Foreign Policy", "India's Relationship with Other Countries", "Global Problems and India's Role", "International Institutions"]);
export const KSEEB_SOCIOLOGY_10 = soc(["Social Stratification", "Labour", "Collective Behaviour and Protests", "Social Challenges"]);
export const KSEEB_GEOGRAPHY_10 = soc([
  "India's Position and Extent",
  "Physiography of India",
  "Indian Seasons",
  "Indian Soils",
  "Indian Forest Resources",
  "Indian Water Resources",
  "Land Use and Agriculture",
  "Indian Mineral and Power Resources",
  "Transport and Communication",
  "Major Industries of India",
  "Natural Disasters",
  "Population of India",
]);
export const KSEEB_ECONOMICS_10 = soc(["Development", "Rural Development", "Public Finance and Budget"]);
export const KSEEB_BUSINESS_10 = soc(["Bank Transactions", "Entrepreneurship", "Globalisation of Business", "Consumer Education and Protection"]);
export const KSEEB_ENGLISH_10 = eng([
  "Tenses",
  "Articles",
  "Prepositions",
  "Degrees of Comparison",
  "Question Tags",
  "Active and Passive Voice",
  "Reported Speech",
  "If-Clauses (Conditionals)",
  "Linkers and Connectors",
  "Letter Writing (Formal and Informal)",
  "Paragraph Writing",
  "Dialogue Completion",
  "Reading Comprehension",
]);
export const KSEEB_HINDI_10 = hin([
  "Gender, Number and Case (लिंग, वचन, कारक)",
  "Tenses (काल)",
  "Sandhi (संधि)",
  "Vocabulary: Synonyms, Antonyms and One-word Substitutes",
  "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)",
  "Letter Writing (पत्र लेखन)",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  "Unseen Passage (अपठित गद्यांश)",
]);

/* ---------------- Shared by all three boards ---------------- */
export const KANNADA_10 = kan([
  "Sandhi (ಸಂಧಿ)",
  "Samasa (ಸಮಾಸ)",
  "Case Suffixes (ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು)",
  "Tenses (ಕಾಲಗಳು)",
  "Gender and Number (ಲಿಂಗ ಮತ್ತು ವಚನ)",
  "Tatsama and Tadbhava (ತತ್ಸಮ – ತದ್ಭವ)",
  "Figures of Speech (ಅಲಂಕಾರ)",
  "Synonyms and Antonyms (ಸಮಾನಾರ್ಥಕ – ವಿರುದ್ಧಾರ್ಥಕ ಪದಗಳು)",
  "Proverbs and Idioms (ಗಾದೆಗಳು ಮತ್ತು ನುಡಿಗಟ್ಟುಗಳು)",
  "Letter Writing (ಪತ್ರಲೇಖನ)",
  "Essay Writing (ಪ್ರಬಂಧ)",
  "Unseen Passage (ಅಪಠಿತ ಗದ್ಯಭಾಗ)",
]);
export const GK_10 = gk([
  "Our Constitution and Government",
  "States, Capitals and the Map of India",
  "Milestones of Indian History",
  "Art, Culture and Festivals of India",
  "Science in Everyday Life",
  "Space and ISRO",
  "Inventions and Discoveries",
  "The World and its Organisations",
  "Sports and Games",
  "Environment and Important Days",
  "Money and Everyday Economics",
]);
