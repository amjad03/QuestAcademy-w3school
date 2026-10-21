/**
 * Competitive exams & scholarships for Indian students: the "what's next" map.
 * Dates are typical months, not fixed dates — every entry tells the reader to
 * confirm on the official site. Only domains we are sure of are listed.
 */

export type Stage = "6-8" | "9-10" | "11-12" | "ug" | "grad";
export type CompetitionKind = "olympiad" | "entrance" | "scholarship" | "service";

export const STAGES: { id: Stage; label: string }[] = [
  { id: "6-8", label: "Classes 6–8" },
  { id: "9-10", label: "Classes 9–10" },
  { id: "11-12", label: "Classes 11–12" },
  { id: "ug", label: "Undergraduate" },
  { id: "grad", label: "Graduate" },
];

export const KINDS: Record<CompetitionKind, string> = {
  olympiad: "Olympiad",
  entrance: "Entrance exam",
  scholarship: "Scholarship",
  service: "Service exam",
};

export interface TimelineItem {
  /** 1–12 */
  month: number;
  label: string;
}

export interface PlanStep {
  title: string;
  detail: string;
}

export interface Competition {
  slug: string;
  name: string;
  /** One-line summary shown on cards. */
  short: string;
  kind: CompetitionKind;
  stages: Stage[];
  conductedBy: string;
  /** Who it is for: class, age, eligibility. */
  audience: string;
  /** What it tests. */
  tests: string;
  timeline: TimelineItem[];
  pattern: string[];
  /** Official domain, only when sure. */
  official?: string;
  /** Related Quest Academy course slugs. */
  courses: string[];
  plan: [PlanStep, PlanStep, PlanStep];
  notes?: string[];
}

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const competitions: Competition[] = [
  {
    slug: "maths-olympiad",
    name: "Mathematical Olympiad (IOQM → RMO → INMO)",
    short: "The national maths olympiad ladder that leads to the International Mathematical Olympiad.",
    kind: "olympiad",
    stages: ["6-8", "9-10", "11-12"],
    conductedBy: "Mathematics Teachers' Association (India) with HBCSE, TIFR",
    audience: "School students from about Class 8 up to Class 12. There is no entrance condition for the first stage; you register through your school or a registered centre.",
    tests: "Problem solving in number theory, algebra, combinatorics and geometry. Later stages ask for complete written proofs, not just answers.",
    timeline: [
      { month: 9, label: "IOQM (first stage), typically September" },
      { month: 10, label: "RMO, typically October or November" },
      { month: 1, label: "INMO, typically January" },
      { month: 5, label: "IMO training camp for INMO awardees, typically May–June" },
    ],
    pattern: [
      "IOQM: a single paper of short-answer questions where every answer is a whole number; about three hours.",
      "RMO: a small set of proof-based problems in about three hours.",
      "INMO: six proof-based problems over a long sitting; awardees are invited to the IMO training camp.",
      "The exact number of questions and duration change between years; read the current year's brochure.",
    ],
    official: "olympiads.hbcse.tifr.res.in",
    courses: ["math-high", "exam-maths", "math-middle"],
    plan: [
      { title: "Build the toolkit", detail: "Be fluent in school algebra, divisibility, modular arithmetic, counting and classical geometry before touching olympiad problems." },
      { title: "Solve past IOQM and RMO papers", detail: "Work through at least five years of papers untimed first, then timed. Write full solutions, not just final answers." },
      { title: "Learn to write proofs", detail: "From RMO onwards you are marked on reasoning. Practise writing complete, readable arguments and have someone check them." },
    ],
  },
  {
    slug: "science-olympiads",
    name: "Science Olympiads (NSEP, NSEC, NSEB, NSEA → INO)",
    short: "The physics, chemistry, biology and astronomy olympiad ladder, from a school-level test to the international stage.",
    kind: "olympiad",
    stages: ["9-10", "11-12"],
    conductedBy: "IAPT (first stage) and HBCSE, TIFR (national stages)",
    audience: "Students in Class 12 or below who meet the age limit for the year. Most participants are in Classes 11–12; a separate junior science exam (NSEJS) exists for Class 10 and below.",
    tests: "Depth in one subject at a level beyond the board syllabus: physics, chemistry, biology or astronomy (astronomy also leans on physics and mathematics).",
    timeline: [
      { month: 11, label: "National Standard Examinations (NSEP/NSEC/NSEB/NSEA), typically late November" },
      { month: 1, label: "Indian National Olympiads (INPhO/INChO/INBO/INAO), typically late January or early February" },
      { month: 4, label: "Orientation-cum-selection camps, typically April–June" },
    ],
    pattern: [
      "Stage 1 (NSE): an objective paper in the chosen subject, conducted by IAPT at school centres.",
      "Stage 2 (INO): a longer written paper with problems that require worked solutions, conducted by HBCSE.",
      "Stage 3: selection camp with theory and experimental tests; the top students form the team for the international olympiad.",
      "Question counts and marking schemes are revised from time to time; confirm the current scheme on the official site.",
    ],
    official: "olympiads.hbcse.tifr.res.in",
    courses: ["exam-physics", "exam-chemistry", "exam-biology", "physics-school", "chemistry-school", "biology-school"],
    plan: [
      { title: "Pick one subject and go deep", detail: "Choose the subject you enjoy most. Finish the Class 11–12 syllabus early, then move to a standard undergraduate-level text for that subject." },
      { title: "Work past NSE and INO papers", detail: "Past papers are published by IAPT and HBCSE. Time yourself on NSE papers; solve INO papers slowly with full working." },
      { title: "Practise experimental thinking", detail: "Later stages test lab reasoning. Revisit school practicals and learn how to estimate, measure and report uncertainty." },
    ],
  },
  {
    slug: "neet-ug",
    name: "NEET-UG",
    short: "The single national entrance test for MBBS, BDS and most other undergraduate medical courses.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "National Testing Agency (NTA)",
    audience: "Students who have passed or are appearing for Class 12 with Physics, Chemistry and Biology or Biotechnology. The minimum age is 17 by the end of the admission year; check the current bulletin for other conditions.",
    tests: "Physics, Chemistry, Botany and Zoology at Class 11–12 level, closely aligned to NCERT.",
    timeline: [
      { month: 2, label: "Application window, typically February–March" },
      { month: 5, label: "Exam, typically the first Sunday of May" },
      { month: 6, label: "Result, typically June; counselling follows" },
    ],
    pattern: [
      "Pen-and-paper test answered on an OMR sheet, offered in several languages.",
      "Objective questions across Physics, Chemistry, Botany and Zoology with equal weight; three hours.",
      "Four marks for a correct answer and one mark deducted for a wrong one; unattempted questions score zero.",
      "The number of questions and optional sections have changed in recent years; confirm the current pattern on the official site.",
    ],
    official: "neet.nta.nic.in",
    courses: ["exam-biology", "exam-physics", "exam-chemistry"],
    plan: [
      { title: "Master NCERT line by line", detail: "Biology and inorganic chemistry questions are drawn heavily from NCERT text and diagrams. Read each chapter twice and annotate." },
      { title: "Drill numericals in physics and physical chemistry", detail: "Daily timed sets on mechanics, electricity, thermodynamics and equilibrium. Keep an error log and re-solve mistakes weekly." },
      { title: "Full-length mocks from January", detail: "One full three-hour paper every week, then two a week in April. Review every wrong and guessed answer." },
    ],
  },
  {
    slug: "jee-main",
    name: "JEE Main",
    short: "The national engineering entrance for NITs, IIITs and centrally funded institutes, and the gateway to JEE Advanced.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "National Testing Agency (NTA)",
    audience: "Students who passed Class 12 in the two previous years or are appearing this year, with Physics and Mathematics plus one more science or technical subject. There is no age limit.",
    tests: "Physics, Chemistry and Mathematics at Class 11–12 level, with emphasis on speed and accuracy. A separate paper covers architecture and planning.",
    timeline: [
      { month: 1, label: "Session 1, typically January" },
      { month: 4, label: "Session 2, typically April" },
      { month: 6, label: "JoSAA counselling, typically June–July" },
    ],
    pattern: [
      "Computer-based test, three hours, in several languages.",
      "Paper 1 (B.E./B.Tech): Physics, Chemistry and Mathematics with multiple-choice and numerical-answer questions in each subject.",
      "Four marks for a correct answer, one deducted for a wrong one; the best of two session scores is used.",
      "Qualifying in JEE Main is required to sit JEE Advanced; the cut-off rank is announced each year.",
    ],
    official: "jeemain.nta.nic.in",
    courses: ["exam-physics", "exam-chemistry", "exam-maths"],
    plan: [
      { title: "Finish the syllabus by October of Class 12", detail: "Leave the final months for revision. Give equal time to all three subjects; Chemistry is often the quickest to score." },
      { title: "Build speed with chapter-wise timed sets", detail: "Thirty questions in forty minutes per chapter. Track accuracy, not just completion." },
      { title: "Use the two sessions well", detail: "Treat January as a serious attempt, review the paper analysis, then fix weak chapters before April." },
    ],
  },
  {
    slug: "jee-advanced",
    name: "JEE Advanced",
    short: "The entrance for the IITs, open to the top performers in JEE Main.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "One of the IITs, on rotation",
    audience: "Candidates who rank in the top group of JEE Main Paper 1 (the exact number is announced yearly), with a limit of two attempts in two consecutive years and an age condition set in the brochure.",
    tests: "Physics, Chemistry and Mathematics with multi-concept problems that reward deep understanding over memorised methods.",
    timeline: [
      { month: 4, label: "Registration, typically late April to early May" },
      { month: 5, label: "Exam, typically late May or early June" },
      { month: 6, label: "Result and JoSAA counselling, typically June" },
    ],
    pattern: [
      "Two compulsory papers on the same day, three hours each, computer-based.",
      "Question types vary each year: single and multiple correct options, numerical answers and matching lists.",
      "Marking schemes include partial credit on some question types and negative marks on others; read the paper instructions carefully.",
      "Scores are not normalised across sessions because everyone writes the same two papers.",
    ],
    official: "jeeadv.ac.in",
    courses: ["exam-physics", "exam-chemistry", "exam-maths"],
    plan: [
      { title: "Go beyond single-step problems", detail: "After JEE Main-level practice, work on problems that chain two or three concepts. Quality of problems matters more than quantity." },
      { title: "Solve the last ten years of papers", detail: "Sit each paper under real conditions. Study how partial-marking question types reward careful elimination." },
      { title: "Protect the fundamentals", detail: "Most lost marks come from careless errors in easy questions. Keep a daily fifteen-minute slot for basics until exam day." },
    ],
  },
  {
    slug: "cuet-ug",
    name: "CUET-UG",
    short: "The common entrance for undergraduate admission to central universities and many other participating universities.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "National Testing Agency (NTA)",
    audience: "Students who have passed or are appearing for Class 12 from any stream. Each university sets its own subject requirements for each programme.",
    tests: "Your choice of Class 12 subjects, languages and a general aptitude test, based on NCERT-level content.",
    timeline: [
      { month: 2, label: "Application window, typically February–March" },
      { month: 5, label: "Exam, typically May–June across several days" },
      { month: 7, label: "Result, typically July; university counselling follows" },
    ],
    pattern: [
      "Computer-based tests, one per chosen subject, each of fixed length.",
      "Subjects are grouped as languages, domain subjects and a general test; you choose a limited number of tests.",
      "Objective questions with positive marks for correct answers and a deduction for wrong ones.",
      "Universities convert the scores into their own merit lists, so check each university's rules on which subjects count.",
    ],
    official: "cuet.nta.nic.in",
    courses: ["math-high", "physics-school", "chemistry-school", "biology-school", "english", "social-studies", "economics"],
    plan: [
      { title: "Map programmes to subjects first", detail: "List the universities and courses you want, then pick CUET subjects that satisfy all of them. Changing later is hard." },
      { title: "Revise NCERT for each chosen subject", detail: "CUET questions stay close to the Class 12 textbook. Finish board revision and reuse it directly." },
      { title: "Practise the general test separately", detail: "The aptitude section covers reasoning, current affairs and basic numeracy. Fifteen minutes a day from March is enough." },
    ],
  },
  {
    slug: "kcet",
    name: "KCET (Karnataka)",
    short: "Karnataka's state entrance for engineering, pharmacy and farm-science courses.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "Karnataka Examinations Authority (KEA)",
    audience: "Students who have passed or are appearing for 2nd PUC or Class 12 and meet Karnataka's eligibility rules for state-quota seats; students from outside the state should read the domicile rules carefully.",
    tests: "Physics, Chemistry and Mathematics or Biology on the 1st and 2nd PUC syllabus, which closely follows NCERT.",
    timeline: [
      { month: 1, label: "Application window, typically January–February" },
      { month: 4, label: "Exam, typically April" },
      { month: 6, label: "Rank list and counselling, typically June onwards" },
    ],
    pattern: [
      "Pen-and-paper test on OMR sheets, one paper per subject over two days.",
      "Sixty questions per subject with one mark each and no negative marking.",
      "Engineering ranks combine KCET marks and qualifying-exam marks in Physics, Chemistry and Mathematics.",
      "A Kannada language test applies to some candidate categories; see the brochure.",
    ],
    official: "kea.kar.nic.in",
    courses: ["exam-physics", "exam-chemistry", "exam-maths", "exam-biology"],
    plan: [
      { title: "Treat the board exam as half the work", detail: "Because PUC marks count toward the rank, strong board preparation is also KCET preparation." },
      { title: "Prioritise accuracy and coverage", detail: "With no negative marking and many direct questions, attempt everything and cover every chapter rather than going very deep in a few." },
      { title: "Time practice at eighty minutes per subject", detail: "Solve past KCET papers subject by subject under the real time limit through March and April." },
    ],
  },
  {
    slug: "bitsat",
    name: "BITSAT",
    short: "The online entrance for the BITS Pilani campuses at Pilani, Goa and Hyderabad.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "BITS Pilani",
    audience: "Students who have passed or are appearing for Class 12 with Physics, Chemistry and Mathematics (or Biology for pharmacy), with minimum aggregate and per-subject marks set in the brochure.",
    tests: "Physics, Chemistry and Mathematics or Biology, plus English proficiency and logical reasoning, with a strong emphasis on speed.",
    timeline: [
      { month: 1, label: "Application window, typically January–April" },
      { month: 5, label: "Session 1, typically May" },
      { month: 6, label: "Session 2, typically June" },
    ],
    pattern: [
      "Computer-based test of three hours with questions across Physics, Chemistry, English, logical reasoning and Mathematics or Biology.",
      "Three marks for a correct answer and one deducted for a wrong one.",
      "Candidates who answer every question may unlock a small set of extra questions.",
      "Scores from the better of the two sessions are used for admission.",
    ],
    official: "bitsadmission.com",
    courses: ["exam-physics", "exam-chemistry", "exam-maths", "english"],
    plan: [
      { title: "Reuse JEE Main preparation", detail: "The science content overlaps almost entirely with JEE Main. Add nothing new to the syllabus; add speed." },
      { title: "Practise English and reasoning weekly", detail: "Short daily sets of vocabulary, grammar and reasoning puzzles cover the sections most students neglect." },
      { title: "Train for the pace", detail: "The paper has more questions per minute than most entrances. Take full mocks on screen and practise leaving questions you cannot solve quickly." },
    ],
  },
  {
    slug: "nda",
    name: "NDA & NA Examination",
    short: "The entrance for the National Defence Academy and the Indian Naval Academy, held twice a year.",
    kind: "service",
    stages: ["11-12"],
    conductedBy: "Union Public Service Commission (UPSC)",
    audience: "Unmarried candidates within the age band set in the notification (roughly sixteen and a half to nineteen and a half years), who have passed or are appearing for Class 12. Air Force and Navy wings require Physics and Mathematics at Class 12. Women have been eligible since 2021.",
    tests: "Mathematics, English and general knowledge in the written exam, followed by a multi-day Services Selection Board assessment of personality and leadership.",
    timeline: [
      { month: 12, label: "Notification for NDA (I), typically December" },
      { month: 4, label: "NDA (I) written exam, typically April" },
      { month: 5, label: "Notification for NDA (II), typically May" },
      { month: 9, label: "NDA (II) written exam, typically September" },
    ],
    pattern: [
      "Two objective papers on one day: Mathematics (300 marks) and General Ability Test (600 marks) covering English and general knowledge.",
      "Negative marking applies to wrong answers.",
      "Qualifiers attend the SSB interview, which runs over several days and carries its own marks.",
      "Medical fitness standards apply before final selection.",
    ],
    official: "upsc.gov.in",
    courses: ["math-high", "physics-school", "english", "social-studies"],
    plan: [
      { title: "Make Class 11–12 maths automatic", detail: "The Mathematics paper is fast and broad. Drill trigonometry, algebra, calculus and statistics with timed sets." },
      { title: "Read daily for the GAT", detail: "Twenty minutes of a newspaper and a weekly review of science, geography and history fundamentals build the general knowledge section." },
      { title: "Start fitness and SSB habits early", detail: "Running, group activities and clear spoken English matter at the SSB stage. Begin months before the written exam." },
    ],
  },
  {
    slug: "clat",
    name: "CLAT",
    short: "The common entrance for five-year integrated law programmes at the National Law Universities.",
    kind: "entrance",
    stages: ["11-12"],
    conductedBy: "Consortium of National Law Universities",
    audience: "Students who have passed or are appearing for Class 12 with the minimum percentage set by the Consortium. There is no upper age limit for the undergraduate test.",
    tests: "Reading comprehension across English, current affairs, legal reasoning, logical reasoning and basic quantitative techniques; every section is passage-based.",
    timeline: [
      { month: 7, label: "Application window, typically July–October" },
      { month: 12, label: "Exam, typically the first Sunday of December" },
      { month: 12, label: "Result and counselling, typically December–January" },
    ],
    pattern: [
      "Pen-and-paper test of two hours with objective questions based on passages.",
      "Five sections: English Language, Current Affairs including General Knowledge, Legal Reasoning, Logical Reasoning and Quantitative Techniques.",
      "One mark per correct answer with a small deduction for wrong answers.",
      "NLU Delhi runs its own test (AILET) and is not part of CLAT.",
    ],
    official: "consortiumofnlus.ac.in",
    courses: ["english", "social-studies", "economics", "math-middle"],
    plan: [
      { title: "Read widely every day", detail: "Editorials, long-form news and non-fiction build the reading speed and comprehension that every section depends on." },
      { title: "Keep a current-affairs journal", detail: "Summarise major national and international events weekly from the start of Class 12; the paper draws on roughly the preceding year." },
      { title: "Practise sectional timing", detail: "Two hours for all sections means quick reading and disciplined skipping. Take weekly sectional tests from September." },
    ],
  },
  {
    slug: "gate",
    name: "GATE",
    short: "The graduate aptitude test for postgraduate admission in engineering and science, also used by public-sector recruiters.",
    kind: "entrance",
    stages: ["ug", "grad"],
    conductedBy: "IISc Bengaluru and the IITs, on rotation",
    audience: "Students in the third year or later of an undergraduate degree in engineering, technology, science, architecture or related fields, and graduates. There is no age limit.",
    tests: "Your chosen subject paper at undergraduate level plus general aptitude (verbal, quantitative and reasoning).",
    timeline: [
      { month: 8, label: "Registration, typically August–October" },
      { month: 2, label: "Exam, typically February over several weekends" },
      { month: 3, label: "Result, typically March; the score is valid for three years" },
    ],
    pattern: [
      "Computer-based test of three hours with 65 questions for 100 marks.",
      "General Aptitude carries 15 marks and the subject paper 85 marks.",
      "Multiple-choice questions carry negative marks; multiple-select and numerical-answer questions do not.",
      "Around thirty subject papers are offered and some candidates may take two.",
    ],
    courses: ["dsa", "python", "electrical-engineering", "machine-learning", "math-high"],
    plan: [
      { title: "Study the official syllabus for your paper", detail: "GATE is syllabus-bound. Print the syllabus, mark every topic with your confidence level and plan from the weakest." },
      { title: "Solve past papers by topic", detail: "Ten years of papers, grouped by topic, reveal exactly which concepts recur. Numerical-answer questions deserve extra practice." },
      { title: "Do not neglect general aptitude", detail: "Fifteen marks at low difficulty often decide the rank. Practise short aptitude sets twice a week." },
    ],
  },
  {
    slug: "cat",
    name: "CAT",
    short: "The common admission test for the IIMs and many other management schools.",
    kind: "entrance",
    stages: ["ug", "grad"],
    conductedBy: "Indian Institutes of Management, on rotation",
    audience: "Graduates, and final-year students, with the minimum percentage set in the notification. There is no age limit, and work experience is not required to appear.",
    tests: "Verbal ability and reading comprehension, data interpretation and logical reasoning, and quantitative ability.",
    timeline: [
      { month: 8, label: "Registration, typically August–September" },
      { month: 11, label: "Exam, typically the last Sunday of November" },
      { month: 1, label: "Result, typically January; institute interviews follow" },
    ],
    pattern: [
      "Computer-based test of two hours with three timed sections of forty minutes each.",
      "Sections: Verbal Ability and Reading Comprehension, Data Interpretation and Logical Reasoning, Quantitative Ability.",
      "Multiple-choice questions carry negative marks; type-in-the-answer questions do not.",
      "Institutes shortlist on percentile and then run their own written tests and interviews.",
    ],
    official: "iimcat.ac.in",
    courses: ["math-middle", "english", "finance", "economics"],
    plan: [
      { title: "Rebuild school arithmetic and algebra", detail: "Quantitative Ability rewards fast, clean fundamentals from Classes 8–10. Start there, not with shortcuts." },
      { title: "Read and solve puzzles daily", detail: "Thirty minutes of dense non-fiction reading and two reasoning sets a day lift the verbal and logic sections over months." },
      { title: "Mock, analyse, repeat", detail: "From August, take one full mock a week and spend as long analysing it as taking it. Learn which questions to leave." },
    ],
  },
  {
    slug: "upsc-cse",
    name: "UPSC Civil Services Examination",
    short: "The three-stage examination for the IAS, IPS, IFS and other central services.",
    kind: "service",
    stages: ["grad"],
    conductedBy: "Union Public Service Commission (UPSC)",
    audience: "Graduates in any discipline, within the age range and attempt limits set for their category in the notification (final-year students may sit the preliminary exam).",
    tests: "Broad general studies (history, polity, geography, economy, environment, science, current affairs), an optional subject, essay writing and, at the final stage, personality.",
    timeline: [
      { month: 2, label: "Notification and application, typically February" },
      { month: 5, label: "Preliminary exam, typically late May or June" },
      { month: 9, label: "Main exam, typically September" },
      { month: 1, label: "Personality test, typically January–April" },
    ],
    pattern: [
      "Preliminary: two objective papers (General Studies and the qualifying CSAT) with negative marking; a screening stage only.",
      "Main: nine descriptive papers including an essay, four general studies papers, two optional-subject papers and two qualifying language papers.",
      "Personality test: an interview that carries marks added to the main exam score.",
      "The full cycle runs for roughly a year from notification to final result.",
    ],
    official: "upsc.gov.in",
    courses: ["social-studies", "economics", "english"],
    plan: [
      { title: "Begin with NCERTs and the newspaper", detail: "Class 6–12 NCERT books in history, geography, polity and economics give the base. Add a daily newspaper habit from day one." },
      { title: "Choose the optional carefully", detail: "Pick a subject you can sustain for a year, with available guidance and past-paper clarity, rather than one that is merely popular." },
      { title: "Write answers early", detail: "The main exam is won on writing. Practise structured answers within strict word limits months before the prelims, not after." },
    ],
  },
  {
    slug: "inspire-she",
    name: "INSPIRE Scholarship for Higher Education (SHE)",
    short: "A government scholarship for students who choose to study basic and natural sciences after Class 12.",
    kind: "scholarship",
    stages: ["11-12", "ug"],
    conductedBy: "Department of Science and Technology, Government of India",
    audience: "Students aged roughly 17–22 who are in the top band of their Class 12 board (or hold a high rank in JEE Advanced or NEET) and enrol in a B.Sc., B.S. or integrated M.Sc. programme in natural or basic sciences. Olympiad medallists are also eligible.",
    tests: "No separate exam. Selection is based on Class 12 board performance or national entrance ranks, plus enrolment in an eligible science course.",
    timeline: [
      { month: 7, label: "Application window typically opens after Class 12 results, around July–October" },
      { month: 12, label: "Selection lists typically later in the academic year" },
    ],
    pattern: [
      "Annual support for up to five years of study, with a separate mentorship component for summer research.",
      "Continuation depends on maintaining the minimum marks set by the scheme each year.",
      "Applications are online through the INSPIRE portal; the college must certify enrolment.",
      "KVPY, which earlier offered a similar fellowship, was discontinued and merged into INSPIRE-SHE from 2022.",
    ],
    official: "online-inspire.gov.in",
    courses: ["exam-physics", "exam-chemistry", "exam-biology", "exam-maths"],
    plan: [
      { title: "Aim for the top of your board", detail: "Eligibility is defined by board percentile, so treat the Class 12 board exam as the scholarship exam." },
      { title: "Choose a basic-science degree", detail: "The scholarship is for natural and basic sciences only, so confirm your course and college qualify before applying." },
      { title: "Keep documents ready", detail: "Mark sheets, a college enrolment certificate and a bank account in your name are needed. Apply as soon as the window opens." },
    ],
  },
  {
    slug: "nmmss",
    name: "National Means-cum-Merit Scholarship (NMMSS)",
    short: "A Class 8 scholarship exam that supports students from low-income families through Classes 9–12.",
    kind: "scholarship",
    stages: ["6-8"],
    conductedBy: "Ministry of Education, through state education departments",
    audience: "Class 8 students of government, government-aided and local-body schools whose family income is below the limit set by the scheme, with minimum marks in Class 7.",
    tests: "A Mental Ability Test (reasoning) and a Scholastic Aptitude Test (science, social studies and mathematics of Classes 7–8).",
    timeline: [
      { month: 10, label: "State applications, typically September–November" },
      { month: 11, label: "State selection test, typically November–January depending on the state" },
      { month: 7, label: "Scholarship renewal each year on the National Scholarship Portal" },
    ],
    pattern: [
      "Two objective papers held on the same day, each with its own qualifying marks.",
      "The scholarship is paid every year from Class 9 to Class 12, subject to promotion and continued eligibility.",
      "Each state conducts its own test and sets its own date; disbursement runs through the National Scholarship Portal.",
      "NTSE, the older talent-search exam from NCERT, has not been held since the 2021–22 cycle.",
    ],
    official: "scholarships.gov.in",
    courses: ["math-middle", "social-studies", "english"],
    plan: [
      { title: "Revise Class 7–8 textbooks", detail: "The Scholastic Aptitude Test stays inside the school syllabus. Revise science, maths and social studies chapter by chapter." },
      { title: "Practise reasoning puzzles", detail: "Series, analogies, coding and figure problems make up the Mental Ability Test. Fifteen minutes a day for two months is enough." },
      { title: "Check your state's dates and documents", detail: "Your school's head teacher handles registration. Confirm the income certificate and date with them early." },
    ],
  },
  {
    slug: "pm-usp",
    name: "PM-USP Central Sector Scholarship",
    short: "A central scholarship for college students who scored in the top band of their Class 12 board and come from families below an income limit.",
    kind: "scholarship",
    stages: ["11-12", "ug"],
    conductedBy: "Ministry of Education, through the National Scholarship Portal",
    audience: "Students above the 80th percentile in their Class 12 board, from families below the income limit set by the scheme, pursuing a regular degree course and not receiving another scholarship.",
    tests: "No separate exam. Selection uses Class 12 board results; renewal needs minimum marks and attendance each year.",
    timeline: [
      { month: 7, label: "Fresh and renewal applications on the National Scholarship Portal, typically July–October" },
      { month: 11, label: "Institute and state verification, typically November–December" },
    ],
    pattern: [
      "An annual amount for the first three years of a degree and a higher amount for later years of longer courses; confirm the current amounts on the portal.",
      "Applications and renewals are online; the college verifies each one.",
      "A bank account linked to Aadhaar is needed for payment.",
      "Only one government scholarship can be held at a time under this scheme.",
    ],
    official: "scholarships.gov.in",
    courses: ["math-high", "english"],
    plan: [
      { title: "Perform well in the Class 12 board", detail: "The 80th percentile cut-off is set per board. Ask your school for last year's percentile marks to know your target." },
      { title: "Collect income and bank documents", detail: "An income certificate from the competent authority and your own bank account take time to arrange; start before results." },
      { title: "Apply and renew on time", detail: "Set a reminder for the portal window every year. Missed renewals are the most common reason students lose the scholarship." },
    ],
  },
];

const bySlug = new Map(competitions.map((c) => [c.slug, c]));

export function getCompetition(slug: string): Competition | undefined {
  return bySlug.get(slug);
}

export function competitionsForStage(stage: Stage): Competition[] {
  return competitions.filter((c) => c.stages.includes(stage));
}

/** Typical exam calendar: every timeline entry grouped by month, January first. */
export function calendarByMonth(): { month: number; name: string; items: { slug: string; name: string; label: string }[] }[] {
  return MONTHS.map((name, i) => ({
    month: i + 1,
    name,
    items: competitions.flatMap((c) => c.timeline.filter((t) => t.month === i + 1).map((t) => ({ slug: c.slug, name: c.name, label: t.label }))),
  })).filter((m) => m.items.length > 0);
}

/** Exams that are no longer held, so readers do not look for them. */
export const DISCONTINUED = [
  { name: "NTSE", detail: "The National Talent Search Examination (NCERT) has not been held since the 2021–22 cycle. NMMSS is the active central scholarship at the Class 8 level." },
  { name: "KVPY", detail: "The Kishore Vaigyanik Protsahan Yojana fellowship was discontinued and merged into INSPIRE-SHE from 2022." },
];
