import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Principles of Inheritance and Variation (NCERT Class 12)            */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-principles-of-inheritance",
    title: "Principles of Inheritance and Variation",
    icon: "🌱",
    description:
      "Mendel's laws, deviations from Mendelism, chromosomal theory, linkage, sex determination, mutation, pedigree analysis and genetic disorders, with crosses worked in full.",
    lessons: [
      /* ---------------- Board lesson 1 ---------------- */
      {
        slug: "c12-mendel-monohybrid",
        title: "Mendel's Laws and Inheritance of One Gene",
        summary:
          "Why Mendel chose the pea, the monohybrid cross, the laws of dominance and segregation, the test cross, incomplete dominance, codominance and the ABO blood groups.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🫛",
            caption:
              "Children look like their parents, yet no two siblings are identical. Inheritance explains the likeness; variation explains the differences.",
          },
          {
            type: "text",
            md: "**Inheritance** is the process by which characters pass from parents to offspring; it is the basis of heredity. **Variation** is the degree by which offspring differ from their parents. Humans used variation long before genetics existed: Indian farmers selected cattle breeds such as Sahiwal from wild ancestors by keeping the best animals for breeding.\n\n**Gregor Mendel** worked on the garden pea (*Pisum sativum*) for seven years (1856–1863). He was the first to use **statistics** and large samples in biology. He used **true-breeding lines** (lines that show the same trait over many generations of self-pollination) and chose 14 such lines differing in 7 pairs of contrasting traits.",
          },
          {
            type: "table",
            headers: ["Character", "Dominant", "Recessive"],
            rows: [
              ["Stem height", "Tall", "Dwarf"],
              ["Flower colour", "Violet", "White"],
              ["Flower position", "Axial", "Terminal"],
              ["Pod shape", "Inflated", "Constricted"],
              ["Pod colour", "Green", "Yellow"],
              ["Seed shape", "Round", "Wrinkled"],
              ["Seed colour", "Yellow", "Green"],
            ],
          },
          {
            type: "text",
            md: "**Monohybrid cross.** Mendel crossed tall (TT) with dwarf (tt) plants. All **F₁** plants were tall: the dwarf trait did not appear. On selfing F₁, the **F₂** showed tall and dwarf in the ratio **3 : 1**. The dwarf trait had not been lost; it was only hidden.\n\nMendel called the units of inheritance **factors**; we now call them **genes**. Different forms of one gene are **alleles**. TT and tt are **homozygous**, Tt is **heterozygous**. The genetic make-up (TT, Tt, tt) is the **genotype**; the visible character (tall, dwarf) is the **phenotype**. A **Punnett square** (devised by Reginald C. Punnett) lists the gametes of each parent on two sides and fills in the zygotes.",
          },
          {
            type: "example",
            title: "Monohybrid cross with a Punnett square",
            problem: "Cross a true-breeding round-seeded pea (RR) with a wrinkled-seeded pea (rr). Give the F₁ and the F₂ phenotypic and genotypic ratios.",
            steps: [
              "Parents RR × rr. Gametes: only R from one parent, only r from the other.",
              "F₁: all Rr, phenotype round (R is dominant).",
              "Self F₁: Rr × Rr. Each parent makes gametes R and r in equal numbers (segregation).",
              "Punnett square: RR, Rr, Rr, rr → genotypes 1 RR : 2 Rr : 1 rr.",
              "Phenotypes: RR and Rr are round, rr is wrinkled → 3 round : 1 wrinkled.",
            ],
            answer: "F₁ all round (Rr). F₂ phenotypic ratio 3 : 1; genotypic ratio 1 : 2 : 1.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Law of Dominance**: characters are controlled by discrete units (factors) that occur in pairs; in a dissimilar pair one member (dominant) shows itself over the other (recessive). It explains why only one parental form appears in F₁ and why the 3 : 1 ratio appears in F₂.",
              "**Law of Segregation**: the two alleles of a pair do not blend; they separate during gamete formation, so each gamete gets only one allele. Homozygotes make one kind of gamete; heterozygotes make two kinds in equal proportion.",
            ],
          },
          {
            type: "text",
            md: "**Test cross.** A tall plant may be TT or Tt; the phenotype cannot tell us. Cross it with the **recessive parent** (tt). If all progeny are tall, the plant was TT. If tall and dwarf appear 1 : 1, the plant was Tt.\n\n**Incomplete dominance.** In snapdragon (*Antirrhinum*), red (RR) × white (rr) gives **pink** (Rr) F₁. The F₂ ratio is 1 red : 2 pink : 1 white: here the phenotypic ratio equals the genotypic ratio. Dominance is not a property of the gene alone: in pea, one gene decides starch synthesis. BB seeds have large starch grains and are round; bb seeds have small grains and are wrinkled; Bb seeds are round but have **intermediate-sized** grains. So for seed shape B is dominant, but for grain size it shows incomplete dominance.",
          },
          {
            type: "text",
            md: "**Codominance and multiple alleles: the ABO blood groups.** The gene I has three alleles, $I^A$, $I^B$ and $i$. $I^A$ and $I^B$ each make a slightly different sugar polymer on the RBC surface; $i$ makes none. $I^A$ and $I^B$ are **codominant** (both show fully in $I^AI^B$), and both are dominant over $i$. Since a person carries only two alleles, there are 6 genotypes and 4 phenotypes. A gene with more than two alleles in a population is said to have **multiple alleles**; they can be found only by studying a population.",
          },
          {
            type: "table",
            headers: ["Genotype", "Blood group", "Sugar on RBC"],
            rows: [
              [t`$I^AI^A$ or $I^Ai$`, "A", "A"],
              [t`$I^BI^B$ or $I^Bi$`, "B", "B"],
              [t`$I^AI^B$`, "AB", "A and B"],
              [t`$ii$`, "O", "none"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A tall pea plant is crossed with a dwarf plant and gives 52 tall and 49 dwarf plants. The genotype of the tall parent is:",
                options: ["TT", "Tt", "tt", "Cannot be told"],
                answer: 1,
                explain: "This is a test cross. A 1 : 1 ratio shows the tall parent made two kinds of gametes, T and t, so it was heterozygous (Tt).",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A recessive allele is weaker, so it slowly disappears from the population, and in a heterozygote the two alleles blend.",
            right: "The recessive allele is passed on unchanged and reappears in F₂ (1 in 4). Alleles never blend; in Tt both stay separate and segregate into different gametes.",
            why: "The pink snapdragon looks like a blend, but its F₂ gives back pure red and pure white plants. A recessive allele usually makes a non-functional or less effective product, so its effect is masked, not erased.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which pattern of inheritance does each case show?",
              groups: ["Complete dominance", "Incomplete dominance", "Codominance"],
              items: [
                { text: "Tall × dwarf pea gives all tall F₁", group: 0, hint: "Only one parental form shows in F₁." },
                { text: "Red × white snapdragon gives pink F₁", group: 1, hint: "F₁ is in between the parents." },
                { text: "Blood group AB child of A and B parents", group: 2, hint: "Both sugars appear on the RBC." },
                { text: "Pea starch grain size in Bb seeds", group: 1, hint: "Grains are medium-sized, between BB and bb." },
                { text: "Round × wrinkled seed gives all round F₁", group: 0, hint: "Look at seed shape, not grain size." },
              ],
              explain: "In complete dominance the heterozygote looks like the dominant parent; in incomplete dominance it is intermediate; in codominance both parental traits appear together.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a cross question, marks are given for: parents' genotypes, gametes (circled), Punnett square or checkerboard, and the ratio stated in words. Always label P, F₁ and F₂ and use one letter for both alleles (T/t), never two different letters. CBSE, Karnataka II PUC and ISC all ask the 2–3 mark 'show with a cross' question from this lesson.",
          },
          {
            type: "keypoints",
            items: [
              "Mendel used 7 contrasting traits in true-breeding pea lines and counted large samples.",
              "Monohybrid F₂: phenotype 3 : 1, genotype 1 : 2 : 1; test cross Tt × tt gives 1 : 1.",
              "Laws: dominance and segregation (alleles separate during gamete formation).",
              "Incomplete dominance: F₂ phenotype = genotype = 1 : 2 : 1 (snapdragon).",
              t`ABO: three alleles, $I^A$ and $I^B$ codominant, 6 genotypes, 4 phenotypes.`,
            ],
          },
        ],
        flashcards: [
          { front: "True-breeding line", back: "A line that, after continuous self-pollination, shows the same trait for several generations." },
          { front: "Allele", back: "One of the alternative forms of the same gene, e.g. T and t." },
          { front: "Monohybrid F₂ ratios", back: "Phenotypic 3 : 1; genotypic 1 : 2 : 1." },
          { front: "Test cross", back: "Crossing an organism of dominant phenotype with the recessive parent to find its genotype." },
          { front: "Law of Segregation", back: "Alleles of a pair separate during gamete formation, so each gamete gets only one allele." },
          { front: "Incomplete dominance example", back: "Snapdragon flower colour: RR red, Rr pink, rr white." },
          { front: "Codominance example", back: t`ABO blood group: $I^AI^B$ shows both A and B sugars.` },
          { front: "Number of ABO genotypes and phenotypes", back: "6 genotypes, 4 phenotypes (A, B, AB, O)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a recessive trait in Mendel's peas?",
            options: ["Axial flowers", "Green pods", "Constricted pods", "Violet flowers"],
            answer: 2,
            explain: "Constricted pod shape is recessive; inflated is dominant. Green pod colour is dominant over yellow.",
          },
          {
            kind: "numeric",
            q: "In an F₂ of 800 plants from Tt × Tt, how many plants are expected to be homozygous?",
            answer: 400,
            explain: "TT (1/4) + tt (1/4) = 1/2 of 800 = 400.",
            difficulty: 2,
            hint: "Add the fractions of TT and tt.",
          },
          {
            kind: "mcq",
            q: "A pink snapdragon is crossed with a white one. The progeny will be:",
            options: ["All pink", "1 red : 2 pink : 1 white", "1 pink : 1 white", "3 pink : 1 white"],
            answer: 2,
            explain: "Rr × rr gives Rr (pink) and rr (white) in equal numbers.",
          },
          {
            kind: "truefalse",
            q: "In incomplete dominance the F₂ phenotypic ratio is the same as the genotypic ratio.",
            answer: true,
            explain: "Each genotype (RR, Rr, rr) has its own phenotype, so both ratios are 1 : 2 : 1.",
          },
          {
            kind: "mcq",
            q: "A woman of group AB marries a man of group O. Their children can have blood group:",
            options: ["A or B only", "AB or O only", "A, B, AB or O", "O only"],
            answer: 0,
            explain: t`$I^AI^B \times ii$ gives $I^Ai$ (A) and $I^Bi$ (B). No child can be AB or O.`,
          },
          {
            kind: "multi",
            q: "Select all correct statements about the ABO gene.",
            options: [
              "It shows multiple allelism",
              t`$I^A$ is dominant over $I^B$`,
              t`$i$ is recessive to both $I^A$ and $I^B$`,
              "An individual can carry three alleles",
            ],
            answers: [0, 2],
            explain: t`Three alleles exist in the population (multiple alleles), but each person has only two. $I^A$ and $I^B$ are codominant; $i$ is recessive to both.`,
          },
          {
            kind: "fill",
            q: "The law that explains why F₁ shows only one parental form is the law of ___.",
            answer: ["dominance"],
            explain: "The dominant allele expresses itself in the heterozygote and masks the recessive one.",
          },
          {
            kind: "mcq",
            q: "In pea, a Bb seed is round but has medium-sized starch grains. This shows that:",
            options: [
              "Dominance depends on which phenotype we look at",
              "B and b blend in the seed",
              "The seed is homozygous",
              "Starch grain size is polygenic",
            ],
            answer: 0,
            explain: "For seed shape B is dominant; for grain size it is incompletely dominant. Dominance is a property of a gene product and the trait examined.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Board lesson 2 ---------------- */
      {
        slug: "c12-dihybrid-linkage-sex",
        title: "Two Genes, Chromosomes, Linkage and Sex Determination",
        summary:
          "The dihybrid cross and independent assortment, the chromosomal theory of inheritance, Morgan's linkage and recombination, polygenic inheritance, pleiotropy and the mechanisms of sex determination.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: "**Dihybrid cross.** Mendel crossed a pea with **round yellow** seeds (RRYY) and one with **wrinkled green** seeds (rryy). F₁ was all round yellow (RrYy). On selfing, F₂ showed four phenotypes: round yellow, round green, wrinkled yellow and wrinkled green in the ratio **9 : 3 : 3 : 1**.\n\nThis ratio is just two 3 : 1 ratios multiplied: $(3 : 1) \\times (3 : 1) = 9 : 3 : 3 : 1$. Seed shape and seed colour are inherited without affecting each other.",
          },
          {
            type: "formula",
            tex: t`(3R\_ : 1rr)\times(3Y\_ : 1yy) = 9\,R\_Y\_ : 3\,R\_yy : 3\,rrY\_ : 1\,rryy`,
            caption: "The blank (_) means either allele. F₂ of a dihybrid has 16 combinations, 9 genotypes and 4 phenotypes.",
          },
          {
            type: "text",
            md: "**Law of Independent Assortment**: when two pairs of traits are combined in a hybrid, segregation of one pair is independent of the other. So RrYy makes four kinds of gametes, RY, Ry, rY and ry, each 1/4. A dihybrid **test cross** (RrYy × rryy) gives 1 : 1 : 1 : 1.\n\nMendel published in 1865 but his work stayed unrecognised: communication was poor, his idea of discrete factors did not fit the belief in continuous variation, and he used mathematics in biology, which was new. In **1900** de Vries, Correns and von Tschermak independently rediscovered his results.",
          },
          {
            type: "example",
            title: "Genotypes in a dihybrid F₂",
            problem: "From RrYy × RrYy, what fraction of the progeny is (a) RrYy, (b) round green, (c) homozygous for both genes?",
            steps: [
              "Treat each gene separately: Rr × Rr gives 1/4 RR, 1/2 Rr, 1/4 rr; Yy × Yy gives 1/4 YY, 1/2 Yy, 1/4 yy.",
              "(a) RrYy = 1/2 × 1/2 = 1/4 (that is 4 of the 16 squares).",
              "(b) Round green = R_yy = 3/4 × 1/4 = 3/16.",
              "(c) Homozygous for both: (RR or rr) and (YY or yy) = 1/2 × 1/2 = 1/4 (RRYY, RRyy, rrYY, rryy, one square each).",
            ],
            answer: "(a) 1/4, (b) 3/16, (c) 1/4.",
          },
          {
            type: "text",
            md: "**Chromosomal theory of inheritance.** By 1900 microscopes showed chromosomes in meiosis. **Walter Sutton and Theodore Boveri** (1902) noticed that chromosomes, like Mendel's factors, occur in pairs, segregate at gamete formation and assort independently. They proposed that genes are located on chromosomes. **Thomas Hunt Morgan** proved it with the fruit fly *Drosophila melanogaster*, which is easy to rear on simple medium, completes its life cycle in about two weeks, gives many progeny per mating, has clearly different sexes and shows many visible hereditary variations.",
          },
          {
            type: "text",
            md: "**Linkage and recombination.** Morgan crossed flies for X-linked genes (yellow body with white eye, and white eye with miniature wing). The F₂ ratios departed strongly from 9 : 3 : 3 : 1: parental combinations were far more common than new ones. He called the physical association of genes on one chromosome **linkage** and the formation of non-parental combinations **recombination**. Yellow and white were tightly linked (**1.3%** recombination); white and miniature were loosely linked (**37.2%** recombination). His student **Alfred Sturtevant** used recombination frequency as a measure of distance between genes and drew the first genetic maps.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Polygenic inheritance and pleiotropy",
            md: "**Polygenic traits** are controlled by three or more genes, each adding a small effect, and the environment also acts on them. Human skin colour and height vary in a continuous gradient. For skin colour with three genes, AABBCC is darkest, aabbcc lightest and AaBbCc intermediate.\n\n**Pleiotropy** is the opposite case: one gene affects several phenotypes. In **phenylketonuria**, one faulty gene for phenylalanine hydroxylase causes mental retardation and reduced hair and skin pigmentation. The pea starch gene (B) is another example: it affects both starch grain size and seed shape.",
          },
          {
            type: "text",
            md: "**Sex determination.** Henking (1891) saw a nuclear structure in half the sperm of an insect and named it the **X body**; it was later found to be a chromosome, the **X chromosome**. The other chromosomes are **autosomes**.",
          },
          {
            type: "list",
            items: [
              "**XO type** (grasshopper and many insects): females XX, males XO, so males have one chromosome fewer.",
              "**XY type** (humans, *Drosophila*): females XX, males XY. Here males are **male heterogametic** (two kinds of sperm).",
              "**ZW type** (birds): females ZW, males ZZ, so females are **female heterogametic**.",
            ],
          },
          {
            type: "text",
            md: "In humans (22 pairs of autosomes + XX or XY), every egg carries X; a sperm carries X or Y in equal numbers. The sex of the child is therefore decided by the father's sperm, with a 50% chance of each sex at every birth.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Honey bee: haplodiploidy",
            md: "A fertilised egg becomes a female (queen or worker, 2n = 32); an unfertilised egg becomes a male drone by parthenogenesis (n = 16). Males make sperm by **mitosis**. So a drone has no father and cannot have sons, but has a grandfather.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many kinds of gametes does an organism of genotype AaBBCcDd make, if all genes assort independently?",
                answer: 8,
                explain: "Number of gamete types = $2^n$, where n = number of heterozygous pairs. Aa, Cc and Dd are heterozygous (BB is not), so $2^3 = 8$.",
              },
              {
                kind: "mcq",
                q: "In birds, the sex of the chick is decided by:",
                options: ["The sperm", "The egg", "Temperature", "The number of autosomes"],
                answer: 1,
                explain: "Females are ZW and make two kinds of eggs (Z or W); males are ZZ. So the egg decides the sex.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Independent assortment always holds, so any two genes give 9 : 3 : 3 : 1.",
            right: "Only genes on different chromosomes (or very far apart on one chromosome) assort independently. Linked genes stay together and give mostly parental types.",
            why: "Mendel's seven traits happened to behave independently, so his law looked universal. Morgan's flies showed that genes on the same chromosome are inherited together unless crossing over separates them, and the closer they are, the rarer the recombinants.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each organism to its sex-determination system.",
              pairs: [
                ["Grasshopper", "XX female, XO male"],
                ["Human", "XX female, XY male"],
                ["Fowl (bird)", "ZW female, ZZ male"],
                ["Honey bee", "Diploid female, haploid male"],
              ],
              explain: "In XO and XY systems the male is heterogametic; in birds the female is heterogametic; in honey bees sex depends on the number of chromosome sets.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'explain the law of independent assortment with a cross', draw the full 4 × 4 checkerboard of RrYy × RrYy, list the four gametes of F₁, and state 9 : 3 : 3 : 1. Write 'segregation of one pair is independent of the other' in the definition. For sex determination, a labelled cross of 44 + XX × 44 + XY showing 50% boys is a standard 3-mark answer.",
          },
          {
            type: "keypoints",
            items: [
              "Dihybrid F₂: 9 : 3 : 3 : 1; dihybrid test cross: 1 : 1 : 1 : 1; gamete types = $2^n$.",
              "Sutton and Boveri: genes lie on chromosomes; Morgan proved it in *Drosophila*.",
              "Linkage keeps genes together; recombination % measures distance (1.3% vs 37.2%).",
              "Polygenic: many genes, one trait (skin colour). Pleiotropy: one gene, many traits (PKU).",
              "XO grasshopper, XY human, ZW birds, haplodiploid honey bee.",
            ],
          },
        ],
        flashcards: [
          { front: "Dihybrid F₂ phenotypic ratio", back: "9 : 3 : 3 : 1." },
          { front: "Law of Independent Assortment", back: "In a dihybrid, segregation of one pair of alleles is independent of the other pair." },
          { front: "Who rediscovered Mendel's work in 1900?", back: "de Vries, Correns and von Tschermak, independently." },
          { front: "Chromosomal theory of inheritance", back: "Sutton and Boveri: genes lie on chromosomes, which segregate and assort like Mendel's factors." },
          { front: "Linkage vs recombination", back: "Linkage: genes on one chromosome inherited together. Recombination: new, non-parental gene combinations." },
          { front: "Morgan's recombination values", back: "Yellow body–white eye 1.3%; white eye–miniature wing 37.2%." },
          { front: "Pleiotropy example", back: "Phenylketonuria: one gene causes mental retardation and reduced hair and skin pigment." },
          { front: "Female heterogamety", back: "Birds: females ZW, males ZZ." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a dihybrid F₂ of 160 plants, how many are expected to be wrinkled yellow?",
            options: ["10", "30", "60", "90"],
            answer: 1,
            explain: "Wrinkled yellow = 3/16; 3/16 × 160 = 30.",
          },
          {
            kind: "mcq",
            q: "A cross AaBb × aabb gives 1 : 1 : 1 : 1. This proves that:",
            options: [
              "A and B are linked",
              "The dihybrid makes four gamete types in equal numbers",
              "A is incompletely dominant",
              "Crossing over did not occur",
            ],
            answer: 1,
            explain: "The recessive parent gives only ab, so progeny show the dihybrid's gametes directly. Equal numbers mean independent assortment.",
          },
          {
            kind: "mcq",
            q: "Sturtevant's genetic maps are based on:",
            options: [
              "Number of genes on a chromosome",
              "Frequency of recombination between gene pairs",
              "Length of chromosomes seen in a microscope",
              "Number of chromosomes in a cell",
            ],
            answer: 1,
            explain: "Recombination frequency rises with distance between genes, so it can be used to place genes in order.",
          },
          {
            kind: "truefalse",
            q: "A drone honey bee has a grandfather but no father.",
            answer: true,
            explain: "The drone comes from an unfertilised egg (no father); its mother, the queen, came from a fertilised egg, so it has a maternal grandfather.",
          },
          {
            kind: "multi",
            q: "Which are reasons why Morgan's *Drosophila* suited genetic work?",
            options: [
              "Life cycle of about two weeks",
              "Many progeny from one mating",
              "Clear differentiation of sexes",
              "It reproduces only asexually",
            ],
            answers: [0, 1, 2],
            explain: "Fruit flies breed sexually, quickly and in large numbers, and males and females are easy to tell apart.",
          },
          {
            kind: "numeric",
            q: "How many different genotypes appear in the F₂ of a dihybrid cross?",
            answer: 9,
            explain: "Each gene gives 3 genotypes; 3 × 3 = 9.",
          },
          {
            kind: "mcq",
            q: "In humans, the probability that a couple's third child is a girl, when the first two are girls, is:",
            options: ["1/8", "1/4", "1/2", "1"],
            answer: 2,
            explain: "Each birth is an independent event: the sperm carries X or Y with equal chance. Earlier births do not change it.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A trait such as human skin colour, controlled by three or more genes, is called a ___ trait.",
            answer: ["polygenic"],
            explain: "Polygenic traits show continuous variation because many genes add small effects and the environment acts too.",
          },
        ],
      },
      /* ---------------- Board lesson 3 ---------------- */
      {
        slug: "c12-mutation-disorders",
        title: "Mutation, Pedigrees and Genetic Disorders",
        summary:
          "Point and frameshift mutations, how to read a pedigree, the Mendelian disorders (haemophilia, sickle-cell anaemia, phenylketonuria, thalassemia, colour blindness) and the chromosomal disorders Down's, Klinefelter's and Turner's syndromes.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "**Mutation** is a change in the DNA sequence that changes the genotype and phenotype. Loss (**deletion**), gain (**insertion or duplication**) of a DNA segment causes changes in chromosomes; such **chromosomal aberrations** are common in cancer cells. A change in a single base pair is a **point mutation**; sickle-cell anaemia is the classic case. Deletion or insertion of bases can shift the reading frame (**frameshift mutation**). Chemical and physical agents that cause mutations, such as UV radiation, are **mutagens**.",
          },
          {
            type: "text",
            md: "**Pedigree analysis.** Controlled crosses cannot be done in humans, so geneticists trace a trait through several generations of a family tree, a **pedigree**. Standard symbols: square = male, circle = female, filled symbol = affected, horizontal line = mating, double line = consanguineous (related) mating, vertical line down to the offspring line = children, Roman numerals = generations.",
          },
          {
            type: "table",
            headers: ["Clue in the pedigree", "What it suggests"],
            rows: [
              ["Two unaffected parents have an affected child", "Recessive trait"],
              ["Unaffected parents have an affected **daughter**", "Autosomal recessive (an X-linked recessive daughter needs an affected father)"],
              ["Every affected child has an affected parent; trait in every generation", "Dominant trait"],
              ["Mostly males affected, passed through carrier mothers; never father to son", "X-linked recessive"],
            ],
          },
          {
            type: "heading",
            text: "Mendelian disorders (single-gene)",
          },
          {
            type: "table",
            headers: ["Disorder", "Inheritance", "Key facts"],
            rows: [
              ["Haemophilia", "Sex-linked recessive", "A protein of the blood-clotting cascade is missing, so a small cut can bleed for long. Carrier females pass it to sons; affected females are very rare. Queen Victoria's family is the famous pedigree."],
              ["Sickle-cell anaemia", "Autosomal recessive", t`Only $Hb^SHb^S$ shows the disease; $Hb^AHb^S$ are carriers. GAG → GUG in the β-globin gene, so glutamic acid → valine at the **sixth** position of the β chain. Under low O₂ the HbS polymerises and RBCs become sickle-shaped.`],
              ["Phenylketonuria", "Autosomal recessive", "Phenylalanine hydroxylase is missing, so phenylalanine builds up and is turned into phenylpyruvic acid and other derivatives; brain damage (mental retardation); these are also excreted in urine."],
              ["Thalassemia", "Autosomal recessive", "Reduced synthesis of α or β globin chains → abnormal haemoglobin and anaemia. α: genes HBA1 and HBA2 on chromosome 16 of each parent. β: gene HBB on chromosome 11 of each parent."],
              ["Colour blindness", "Sex-linked recessive", "Defect in red or green cones of the eye; affects about 8% of males and 0.4% of females. A daughter is colour blind only if her mother is at least a carrier and her father is colour blind."],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Thalassemia vs sickle-cell",
            md: "Thalassemia is a **quantitative** problem: too few globin molecules are made. Sickle-cell anaemia is a **qualitative** problem: the globin is made but it works wrongly. NCERT also names **cystic fibrosis** among Mendelian disorders.",
          },
          {
            type: "example",
            title: "Colour blindness in a family",
            problem: t`A woman with normal vision, whose father was colour blind, marries a man with normal vision. What fraction of their sons and of their daughters will be colour blind?`,
            steps: [
              t`Her father passed his only X ($X^c$) to her, so she is a carrier: $X^CX^c$. The husband is $X^CY$.`,
              t`Gametes: mother $X^C$, $X^c$; father $X^C$, $Y$.`,
              t`Children: $X^CX^C$ (normal girl), $X^CX^c$ (carrier girl), $X^CY$ (normal boy), $X^cY$ (colour-blind boy).`,
              "Daughters all get the father's normal X, so none is colour blind (half are carriers). Sons get their X from the mother, so half are colour blind.",
            ],
            answer: "50% of sons are colour blind; 0% of daughters (50% of daughters are carriers).",
          },
          {
            type: "text",
            md: "**Chromosomal disorders** come from absence, excess or abnormal arrangement of chromosomes. **Aneuploidy** (gain or loss of one or more chromosomes) arises when chromatids fail to segregate during cell division. **Polyploidy** (an increase in whole sets) arises when cytokinesis fails after telophase; it is often seen in plants.",
          },
          {
            type: "list",
            items: [
              "**Down's syndrome**: trisomy of chromosome 21 (2n + 1 = 47). First described by Langdon Down (1866). Short stature, small round head, furrowed tongue, partly open mouth, broad palm with a characteristic crease, retarded physical, psychomotor and mental development.",
              "**Klinefelter's syndrome**: an extra X in a male, **47, XXY**. Overall masculine, but with feminine development such as breasts (gynaecomastia); sterile.",
              "**Turner's syndrome**: absence of one X in a female, **45, X0**. Sterile, ovaries rudimentary, secondary sexual characters lacking.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In sickle-cell anaemia, which change occurs in the β-globin chain?",
                options: ["Valine → glutamic acid at position 6", "Glutamic acid → valine at position 6", "Glutamic acid → lysine at position 16", "Loss of the β chain"],
                answer: 1,
                explain: "The codon GAG (glutamic acid) becomes GUG (valine) at the sixth position of the β chain.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Klinefelter's syndrome is a female disorder and Turner's is a male one, because Klinefelter has an extra X.",
            right: "Klinefelter's (47, XXY) is a male: the Y makes the person male. Turner's (45, X0) is a female with only one X.",
            why: "Students link 'extra X' with femaleness. In humans the presence of a Y chromosome decides maleness, however many X chromosomes there are.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it a Mendelian disorder or a chromosomal disorder?",
              groups: ["Mendelian disorder", "Chromosomal disorder"],
              items: [
                { text: "Haemophilia", group: 0, hint: "A single gene on the X chromosome." },
                { text: "Down's syndrome", group: 1, hint: "An extra chromosome 21." },
                { text: "Phenylketonuria", group: 0, hint: "One gene for one enzyme." },
                { text: "Turner's syndrome", group: 1, hint: "A whole X is missing." },
                { text: "Thalassemia", group: 0, hint: "Mutations in globin genes." },
                { text: "Klinefelter's syndrome", group: 1, hint: "Karyotype 47, XXY." },
              ],
              explain: "Mendelian disorders come from a change in one gene and follow Mendel's rules in a pedigree. Chromosomal disorders come from a change in the number or structure of whole chromosomes.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a pedigree question, write the genotype under each symbol and give a reason for your conclusion, e.g. 'unaffected parents in generation II have an affected daughter, so the trait is autosomal recessive'. Examiners do not give marks for the answer without the reason.",
          },
          {
            type: "keypoints",
            items: [
              "Point mutation: one base pair changes (sickle-cell); frameshift: insertion or deletion shifts the reading frame.",
              "Haemophilia and colour blindness: X-linked recessive. Sickle-cell, PKU, thalassemia: autosomal recessive.",
              "Sickle-cell: GAG → GUG, Glu → Val at position 6 of β chain.",
              "Down's: trisomy 21. Klinefelter's: 47, XXY male. Turner's: 45, X0 female.",
              "Aneuploidy: failure of chromatid segregation; polyploidy: failure of cytokinesis after telophase.",
            ],
          },
        ],
        flashcards: [
          { front: "Point mutation example", back: "Sickle-cell anaemia: a single base change GAG → GUG in the β-globin gene." },
          { front: "Pedigree symbol for consanguineous mating", back: "A double horizontal line between the partners." },
          { front: "Why are affected haemophilic females rare?", back: "A female must get the recessive allele from both a carrier (or affected) mother and an affected father." },
          { front: "Thalassemia genes", back: "α: HBA1 and HBA2 on chromosome 16. β: HBB on chromosome 11." },
          { front: "Colour blindness frequency", back: "About 8% of males and 0.4% of females." },
          { front: "Klinefelter's karyotype", back: "47, XXY; male, sterile, gynaecomastia." },
          { front: "Turner's karyotype", back: "45, X0; female, sterile, rudimentary ovaries." },
          { front: "Cause of aneuploidy", back: "Failure of segregation of chromatids during cell division." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A haemophilic man marries a normal (non-carrier) woman. Which is true of their children?",
            options: ["All sons are haemophilic", "All daughters are carriers", "Half the daughters are haemophilic", "Half the sons are carriers"],
            answer: 1,
            explain: t`Father $X^hY$ gives $X^h$ to every daughter and Y to every son. Mother gives $X^H$. Daughters are all $X^HX^h$ carriers; sons are all normal.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which disorder is caused by too few globin chains rather than a faulty globin?",
            options: ["Sickle-cell anaemia", "Thalassemia", "Haemophilia", "Phenylketonuria"],
            answer: 1,
            explain: "Thalassemia is a quantitative defect; sickle-cell anaemia is a qualitative defect.",
          },
          {
            kind: "truefalse",
            q: "Polyploidy results from failure of cytokinesis after telophase.",
            answer: true,
            explain: "The chromosomes divide but the cell does not, so the whole set is doubled.",
          },
          {
            kind: "numeric",
            q: "How many chromosomes are present in a somatic cell of a person with Down's syndrome?",
            answer: 47,
            explain: "Trisomy 21 adds one chromosome to the normal 46.",
          },
          {
            kind: "multi",
            q: "Select the autosomal recessive disorders.",
            options: ["Sickle-cell anaemia", "Colour blindness", "Phenylketonuria", "Thalassemia"],
            answers: [0, 2, 3],
            explain: "Colour blindness is X-linked recessive; the other three are autosomal recessive.",
          },
          {
            kind: "mcq",
            q: "In a pedigree, two unaffected parents have an affected daughter. The trait is most likely:",
            options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
            answer: 1,
            explain: "Unaffected parents → recessive. For an X-linked recessive daughter the father would have to be affected, so it is autosomal recessive.",
            difficulty: 2,
            hint: "Where does an X-linked daughter get her second X from?",
          },
          {
            kind: "fill",
            q: "In phenylketonuria the enzyme that converts phenylalanine into tyrosine, phenylalanine ___, is missing.",
            answer: ["hydroxylase"],
            explain: "Phenylalanine accumulates and is converted into phenylpyruvic acid and other derivatives.",
          },
          {
            kind: "mcq",
            q: "A furrowed tongue, broad palm with a characteristic crease and retarded mental development indicate:",
            options: ["Turner's syndrome", "Klinefelter's syndrome", "Down's syndrome", "Phenylketonuria"],
            answer: 2,
            explain: "These are the features of trisomy 21, described by Langdon Down in 1866.",
          },
        ],
      },
      /* ---------------- Exam edge 1 ---------------- */
      {
        slug: "c12-inheritance-exam-problems",
        title: "Exam edge: Genetics Problems (Crosses, Blood Groups, Pedigrees)",
        summary:
          "Fast and safe methods for NEET and KCET genetics problems: splitting crosses into monohybrids, counting gametes and genotypes, polygenic ratios, linkage and map order, blood-group paternity and pedigree probabilities.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "NEET usually sets 4–6 questions from this chapter, and KCET 3–4. Most are of three kinds: (1) a ratio or probability from a cross, (2) a disorder fact (type of inheritance, chromosome number, the amino acid change), (3) a pedigree or blood-group reasoning question. The calculations are short if you **split every cross into one-gene crosses** and multiply.",
          },
          {
            type: "table",
            headers: ["For n heterozygous gene pairs (independent, complete dominance)", "Value"],
            rows: [
              ["Kinds of gametes from the hybrid", t`$2^n$`],
              ["Squares in the F₂ checkerboard", t`$4^n$`],
              ["Genotypes in F₂", t`$3^n$`],
              ["Phenotypes in F₂", t`$2^n$`],
              ["Phenotypic classes for a polygenic additive trait", t`$2n + 1$`],
            ],
          },
          {
            type: "formula",
            tex: t`P(\text{A and B}) = P(A)\times P(B) \qquad P(\text{A or B}) = P(A)+P(B)`,
            caption: "Product rule for independent events (two genes, two children); sum rule for mutually exclusive outcomes (two ways of getting the same result). Safe only when the genes assort independently.",
          },
          {
            type: "example",
            title: "KCET level: blood groups of children",
            problem: "A man of blood group A, whose mother was group O, marries a woman of group B, whose father was group O. Which blood groups can their children have, and in what proportion?",
            steps: [
              t`The man got $i$ from his O mother, so he is $I^Ai$. The woman got $i$ from her O father, so she is $I^Bi$.`,
              t`Gametes: man $I^A$, $i$; woman $I^B$, $i$.`,
              t`Children: $I^AI^B$ (AB), $I^Ai$ (A), $I^Bi$ (B), $ii$ (O), each 1/4.`,
            ],
            answer: "A, B, AB and O, each with probability 1/4 (1 : 1 : 1 : 1).",
          },
          {
            type: "example",
            title: "NEET level: a trihybrid in one line",
            problem: "In AaBbCc × AaBbCc (independent genes, complete dominance), find the fraction of progeny that is (a) aabbcc, (b) AaBbCc, (c) dominant for all three traits.",
            steps: [
              "Split: each Xx × Xx gives 1/4 XX, 1/2 Xx, 1/4 xx, and 3/4 dominant phenotype.",
              t`(a) $\tfrac14 \times \tfrac14 \times \tfrac14 = \tfrac{1}{64}$.`,
              t`(b) $\tfrac12 \times \tfrac12 \times \tfrac12 = \tfrac18$.`,
              t`(c) $\tfrac34 \times \tfrac34 \times \tfrac34 = \tfrac{27}{64}$.`,
            ],
            answer: "(a) 1/64, (b) 1/8, (c) 27/64.",
          },
          {
            type: "example",
            title: "NEET level: polygenic skin colour",
            problem: "Skin colour is controlled by three additive genes (A, B, C). Two persons of genotype AaBbCc marry. What fraction of their children will have exactly three dominant alleles, and how many skin-colour classes are possible?",
            steps: [
              "Each parent passes 3 alleles, so a child carries 6 alleles, each being dominant with probability 1/2.",
              t`Number of ways of choosing 3 dominant out of 6 positions $= \binom{6}{3} = 20$; total combinations $= 2^6 = 64$.`,
              t`Fraction $= \tfrac{20}{64} = \tfrac{5}{16}$. These children have the same intermediate colour as the parents.`,
              t`Classes: 0 to 6 dominant alleles, that is $2n + 1 = 7$ phenotypes (ratio 1 : 6 : 15 : 20 : 15 : 6 : 1).`,
            ],
            answer: "5/16 of the children; 7 phenotypic classes.",
          },
          {
            type: "example",
            title: "Harder: linkage and gene order",
            problem: "Genes p and q are 10 map units apart on one chromosome. A plant PQ/pq is test-crossed with pq/pq and gives 1000 progeny. How many of each type are expected? In another species, recombination frequencies are a–b 8%, b–c 3%, a–c 5%. Give the gene order.",
            steps: [
              "10 map units = 10% recombinants. Recombinant gametes Pq and pQ share 10%, so 5% each; parental gametes PQ and pq share 90%, so 45% each.",
              "Progeny: PQ 450, pq 450, Pq 50, pQ 50.",
              "For order, the largest distance (a–b, 8) marks the two ends. c lies between them because a–c + c–b = 5 + 3 = 8.",
            ],
            answer: "450 : 450 : 50 : 50 (parental : parental : recombinant : recombinant); gene order a–c–b.",
          },
          {
            type: "example",
            title: "Hardest: pedigree probability",
            problem: "A woman with normal haemoglobin has a brother with sickle-cell anaemia; both her parents are normal. She marries a man who is a known carrier. What is the probability that their first child has sickle-cell anaemia?",
            steps: [
              t`Normal parents with an affected son must both be carriers: $Hb^AHb^S \times Hb^AHb^S$.`,
              t`Their children are 1 AA : 2 AS : 1 SS. The woman is not SS, so she is one of the 3 normal outcomes: P(she is a carrier) $= \tfrac23$, not $\tfrac12$.`,
              t`If she is a carrier, AS × AS gives an SS child with probability $\tfrac14$.`,
              t`Total $= \tfrac23 \times \tfrac14 = \tfrac16$.`,
            ],
            answer: "1/6.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many different genotypes are possible in the F₂ of a cross between AABBCC and aabbcc (independent genes)?",
                answer: 27,
                explain: "Genotypes $= 3^n = 3^3 = 27$.",
              },
              {
                kind: "mcq",
                q: "A child is of blood group O and the mother is group A. Which man can be excluded as the father?",
                options: ["Group A man", "Group B man", "Group AB man", "Group O man"],
                answer: 2,
                explain: t`The child $ii$ needs an $i$ from the father. An AB man ($I^AI^B$) has no $i$ allele.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A normal sibling of an affected child (both parents carriers) is a carrier with probability 1/2.",
            right: "Once we know the sibling is normal, the probability that he or she is a carrier is 2/3.",
            why: "The 1/2 comes from the full 1 : 2 : 1 ratio. Knowing the person is unaffected removes the 'SS' outcome, leaving 1 AA : 2 AS, so 2 out of 3.",
          },
          {
            type: "mistake",
            wrong: "A man of group A and a woman of group B can never have a group O child.",
            right: t`If both are heterozygous ($I^Ai$ and $I^Bi$), 1/4 of their children are group O.`,
            why: t`Students look only at the visible groups. Group A may hide an $i$ allele because $i$ is recessive, so always check the parents' parents or children for clues.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Two linked genes show 0% recombination. What does a dihybrid test cross give?",
              emoji: "🧬",
              options: ["1 : 1 : 1 : 1", "Only the two parental types, 1 : 1", "9 : 3 : 3 : 1", "3 : 1"],
              answer: 1,
              trap: 0,
              explain: "With complete linkage no recombinant gametes form, so PQ/pq makes only PQ and pq and the test cross shows only the two parental classes in a 1 : 1 ratio. 1 : 1 : 1 : 1 needs independent assortment.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcuts fail",
            md: "The product rule and $2^n$, $3^n$ counts assume genes on different chromosomes. For linked genes use recombination frequency. For X-linked genes, never split by 'children'; split by sons and daughters, because a son's X always comes from the mother.",
          },
          {
            type: "keypoints",
            items: [
              "Split multi-gene crosses into monohybrids and multiply: aabbcc from trihybrid self = 1/64.",
              "Gametes $2^n$, genotypes $3^n$, phenotypes $2^n$, polygenic classes $2n + 1$.",
              "Recombination % = map distance; recombinants share it equally; largest distance gives the end genes.",
              "A normal sibling of an affected child (carrier parents) is a carrier with probability 2/3.",
              "Blood-group paternity: the father must supply whichever allele the child did not get from the mother.",
            ],
          },
        ],
        flashcards: [
          { front: "Kinds of gametes from AaBbCcDd", back: "$2^4 = 16$." },
          { front: "Genotypes in a trihybrid F₂", back: "$3^3 = 27$." },
          { front: "Polygenic F₂ ratio for 3 genes", back: "1 : 6 : 15 : 20 : 15 : 6 : 1 (7 classes)." },
          { front: "P(carrier) for a normal sibling of an autosomal recessive patient", back: "2/3 (both parents carriers)." },
          { front: "Test cross of PQ/pq with 20% recombination", back: "PQ 40%, pq 40%, Pq 10%, pQ 10%." },
          { front: "Group AB parent and group O parent", back: "Children only A or B, never AB or O." },
          { front: "Product rule", back: "Multiply probabilities of independent events, e.g. two genes or two separate children." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a cross AaBb × Aabb (independent genes, complete dominance), the fraction of progeny showing both dominant traits is:",
            options: ["9/16", "3/8", "3/16", "1/4"],
            answer: 1,
            explain: "Aa × Aa → 3/4 dominant; Bb × bb → 1/2 dominant. 3/4 × 1/2 = 3/8.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "From AaBBCcDd × AaBBCcDd (independent genes), what is the probability (as a fraction 1/x) of getting aaBBccdd? Enter x.",
            answer: 64,
            explain: "aa 1/4 × BB 1 × cc 1/4 × dd 1/4 = 1/64, so x = 64.",
            difficulty: 2,
            hint: "BB × BB always gives BB.",
          },
          {
            kind: "mcq",
            q: "A normal woman whose brother is haemophilic (parents normal) marries a normal man. The probability that their first child is a haemophilic son is:",
            options: ["1/2", "1/4", "1/8", "0"],
            answer: 2,
            explain: "Her mother must be a carrier, so she is a carrier with probability 1/2. A carrier mother gives a haemophilic son with probability 1/4 (1/2 son × 1/2 gets the faulty X). 1/2 × 1/4 = 1/8.",
            difficulty: 3,
            hint: "First find the chance that she is a carrier.",
          },
          {
            kind: "numeric",
            q: "Genes x and y show 16% recombination. In a test cross of XY/xy giving 500 progeny, how many Xy plants are expected?",
            answer: 40,
            explain: "Recombinants are 16%, shared equally: Xy = 8% of 500 = 40.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Recombination frequencies are: P–Q 12%, Q–R 4%, P–R 16%. The gene order is:",
            options: ["P–R–Q", "P–Q–R", "Q–P–R", "R–P–Q"],
            answer: 1,
            explain: "The largest value, P–R (16), gives the two ends; Q lies between because 12 + 4 = 16.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A woman of group B and a man of group AB have children. Which blood groups are possible?",
            options: ["A", "B", "AB", "O"],
            answers: [0, 1, 2],
            explain: t`The man gives $I^A$ or $I^B$. The woman ($I^BI^B$ or $I^Bi$) gives $I^B$ or $i$. Possible children: $I^AI^B$, $I^Ai$, $I^BI^B$, $I^Bi$ → AB, A, B. O needs $i$ from both, which the man cannot give.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Skin colour is controlled by 4 additive genes. How many phenotypic classes appear in the progeny of two quadruple heterozygotes?",
            answer: 9,
            explain: "Number of dominant alleles can be 0 to 8, so $2n + 1 = 9$ classes.",
          },
          {
            kind: "mcq",
            q: "A colour-blind woman marries a man with normal vision. Which statement is correct?",
            options: [
              "All sons are colour blind and all daughters are carriers",
              "Half the sons are colour blind",
              "All children have normal vision",
              "All daughters are colour blind",
            ],
            answer: 0,
            explain: t`Mother $X^cX^c$ gives $X^c$ to every child. Sons ($X^cY$) are all colour blind; daughters get the father's $X^C$ and are all carriers.`,
          },
        ],
      },
      /* ---------------- Exam edge 2 ---------------- */
      {
        slug: "c12-inheritance-exam-ncert-lines",
        title: "Exam edge: NCERT Lines and Assertion–Reason in Inheritance",
        summary:
          "The exact numbers, names and examples NEET turns into statement, match-the-column and assertion–reason questions, with the reasoning to crack each format.",
        minutes: 20,
        xp: 55,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "NEET writers take a single sentence from NCERT and change one word: a number, a chromosome, a name or 'dominant' for 'recessive'. KCET does the same with direct one-liners. The defence is to know these lines exactly, and to read every option for the one changed word.",
          },
          {
            type: "table",
            headers: ["NCERT line", "Exact value"],
            rows: [
              ["Years of Mendel's pea experiments", "1856–1863 (seven years)"],
              ["True-breeding pea lines / contrasting trait pairs", "14 lines, 7 pairs"],
              ["Rediscovery of Mendel's work", "1900, by de Vries, Correns, von Tschermak"],
              ["Recombination, yellow body–white eye (*Drosophila*)", "1.3%"],
              ["Recombination, white eye–miniature wing", "37.2%"],
              ["X body discovered by", "Henking, 1891"],
              ["Honey bee chromosome numbers", "Female 32 (2n), drone 16 (n)"],
              ["Colour blindness frequency", "about 8% males, 0.4% females"],
              ["Sickle-cell change", "GAG → GUG; Glu → Val at 6th position of β chain"],
              ["Thalassemia genes", "α: HBA1, HBA2 on chr 16; β: HBB on chr 11"],
              ["Down's syndrome described by", "Langdon Down, 1866"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Word swaps NEET loves",
            md: "**Male** heterogamety (XO, XY) vs **female** heterogamety (ZW, birds). Thalassemia is **quantitative**, sickle-cell **qualitative**. Klinefelter's is **47, XXY male**, Turner's **45, X0 female**. Pleiotropy is **one gene, many traits**; polygenic is **many genes, one trait**. In honey bees, drones make sperm by **mitosis**.",
          },
          {
            type: "example",
            title: "Statement-type (NEET)",
            problem: "Which of the following statements are correct? (i) In grasshoppers, all sperms carry an X chromosome. (ii) In birds, the female decides the sex of the offspring. (iii) In *Drosophila*, males are heterogametic. (iv) Human females produce two types of eggs.",
            steps: [
              "(i) Grasshopper males are XO, so half the sperm have X and half have none. False.",
              "(ii) Birds: female ZW makes Z and W eggs. True.",
              "(iii) *Drosophila* males are XY. True.",
              "(iv) Human females are XX; all eggs carry X. False.",
            ],
            answer: "Only (ii) and (iii) are correct.",
          },
          {
            type: "example",
            title: "Assertion–reason (NEET)",
            problem: "Assertion (A): Sickle-cell anaemia is an example of a point mutation. Reason (R): A single base substitution in the β-globin gene replaces glutamic acid with valine.",
            steps: [
              "Check A alone: sickle-cell anaemia results from a change in one base pair, which is the definition of a point mutation. A is true.",
              "Check R alone: GAG → GUG changes Glu to Val at position 6. R is true.",
              "Does R explain A? Yes: the single base change in R is exactly what makes it a point mutation.",
            ],
            answer: "Both A and R are true and R is the correct explanation of A.",
          },
          {
            type: "example",
            title: "Assertion–reason with a false reason",
            problem: "Assertion (A): Very few recombinants appear between the genes for yellow body and white eye in *Drosophila*. Reason (R): These two genes lie on different chromosomes.",
            steps: [
              "A: recombination was only 1.3%, so very few recombinants. True.",
              "R: genes on different chromosomes assort independently and would give about 50% recombinants. Both genes are actually on the X chromosome and tightly linked. False.",
            ],
            answer: "A is true but R is false.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which pair is mismatched?",
                options: [
                  "Phenylketonuria – autosomal recessive",
                  "Haemophilia – X-linked recessive",
                  "Turner's syndrome – 47, XXY",
                  "Down's syndrome – trisomy 21",
                ],
                answer: 2,
                explain: "Turner's syndrome is 45, X0. 47, XXY is Klinefelter's syndrome.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Mendel worked with 7 true-breeding lines, one for each character.",
            right: "He selected 14 true-breeding lines: two contrasting lines for each of the 7 characters.",
            why: "The number 7 is so prominent that students attach it to everything. A pair of contrasting traits needs two lines, so 7 × 2 = 14.",
          },
          {
            type: "mistake",
            wrong: "Polyploidy arises from non-disjunction of a single chromosome pair.",
            right: "Non-disjunction of chromatids gives aneuploidy (2n ± 1). Polyploidy arises when cytokinesis fails after telophase, doubling whole sets.",
            why: "Both involve 'extra chromosomes', so the causes get swapped. Ask: one chromosome extra (aneuploidy) or whole sets extra (polyploidy)?",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the scientist to the contribution.",
              pairs: [
                ["Sutton and Boveri", "Chromosomal theory of inheritance"],
                ["T. H. Morgan", "Linkage and recombination in Drosophila"],
                ["A. Sturtevant", "First genetic maps"],
                ["Henking", "Discovered the X body"],
                ["R. C. Punnett", "Checkerboard for crosses"],
              ],
              explain: "Match-the-column questions in NEET often pair these five names. Sturtevant was Morgan's student and used recombination frequency as distance.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Assertion–reason method",
            md: "Judge A alone, then R alone. Only if both are true ask: 'Does R answer *why* A happens?' Most errors come from marking 'R explains A' just because both statements are true and on the same topic.",
          },
          {
            type: "keypoints",
            items: [
              "Learn the NCERT numbers exactly: 14 lines, 7 traits, 1.3% and 37.2%, 8% and 0.4%, 32 and 16.",
              "Heterogamety: male in XO and XY, female in ZW.",
              "Sickle-cell = point mutation (Glu → Val, 6th position); thalassemia = quantitative globin defect.",
              "Assertion–reason: test each statement separately, then the link.",
            ],
          },
        ],
        flashcards: [
          { front: "Number of true-breeding lines Mendel chose", back: "14 (7 pairs of contrasting traits)." },
          { front: "Who discovered the X body and when?", back: "Henking, 1891." },
          { front: "Honey bee female and drone chromosome numbers", back: "Female 32, drone 16." },
          { front: "Gene for β-globin and its chromosome", back: "HBB, chromosome 11." },
          { front: "Genes for α-globin and their chromosome", back: "HBA1 and HBA2, chromosome 16." },
          { front: "Who made the first genetic maps?", back: "Alfred Sturtevant, using recombination frequencies." },
          { front: "Aneuploidy vs polyploidy cause", back: "Aneuploidy: chromatid non-segregation. Polyploidy: no cytokinesis after telophase." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Assertion (A): In honey bees a drone cannot have a son. Reason (R): Drones develop from unfertilised eggs.",
            options: [
              "Both A and R are true and R is the correct explanation of A",
              "Both A and R are true but R is not the correct explanation of A",
              "A is true but R is false",
              "A is false but R is true",
            ],
            answer: 0,
            explain: "A drone's sperm can only produce fertilised eggs, which become females; sons come only from unfertilised eggs laid by the queen. So the fact in R explains A.",
            difficulty: 3,
            hint: "If sons come only from unfertilised eggs, can a male's sperm ever make a son?",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT among Mendel's seven characters?",
            options: ["Pod colour", "Flower position", "Leaf shape", "Seed colour"],
            answer: 2,
            explain: "Mendel's seven: stem height, flower colour, flower position, pod shape, pod colour, seed shape, seed colour. Leaf shape was not one of them.",
          },
          {
            kind: "multi",
            q: "Select the correct statements.",
            options: [
              "Colour blindness affects about 8% of human males",
              "In birds, males are heterogametic",
              "Klinefelter's syndrome shows gynaecomastia",
              "Thalassemia α is controlled by genes on chromosome 16",
            ],
            answers: [0, 2, 3],
            explain: "Birds show female heterogamety (ZW female, ZZ male). The other three are NCERT facts.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Assertion (A): The F₂ of a snapdragon cross shows a 1 : 2 : 1 phenotypic ratio. Reason (R): The alleles for red and white blend in the heterozygote.",
            options: [
              "Both A and R are true and R is the correct explanation of A",
              "Both A and R are true but R is not the correct explanation of A",
              "A is true but R is false",
              "A is false but R is true",
            ],
            answer: 2,
            explain: "A is true (incomplete dominance). R is false: alleles never blend; pure red and white reappear in F₂.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "What is the recombination percentage between the white-eye and miniature-wing genes reported by Morgan?",
            answer: 37.2,
            tolerance: 0.05,
            unit: "%",
            explain: "Morgan found 37.2% recombination for white–miniature, and only 1.3% for yellow–white.",
          },
          {
            kind: "mcq",
            q: "One gene affecting several unrelated phenotypes, such as mental retardation and reduced pigmentation, is called:",
            options: ["Polygenic inheritance", "Pleiotropy", "Codominance", "Multiple allelism"],
            answer: 1,
            explain: "Phenylketonuria is the NCERT example of a pleiotropic gene.",
          },
          {
            kind: "mcq",
            q: "Which statement about Turner's syndrome is correct?",
            options: [
              "Karyotype 47, XXY; sterile male",
              "Karyotype 45, X0; female with rudimentary ovaries",
              "Trisomy of chromosome 21",
              "Karyotype 47, XXX; fertile female",
            ],
            answer: 1,
            explain: "Turner's: one X missing (45, X0), sterile female, rudimentary ovaries, no secondary sexual characters.",
          },
        ],
      },
    ],
  },
  /* MOLECULAR_TOPIC */
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Principles of Inheritance and Variation": "c12-principles-of-inheritance",
};
