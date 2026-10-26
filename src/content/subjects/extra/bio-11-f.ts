import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

/** Standard assertion–reason options used in NEET-style questions. */
const AR = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

/* ------------------------------------------------------------------ */
/* Locomotion and Movement                                             */
/* ------------------------------------------------------------------ */
const locomotion: Topic = {
  slug: "c11-bio-locomotion-movement",
  title: "Locomotion and Movement",
  icon: "🦴",
  description:
    "Amoeboid, ciliary and muscular movement, the structure of skeletal muscle, actin and myosin, the sliding filament mechanism, the human skeleton, joints and disorders of muscles and bones.",
  lessons: [
    /* ---------------- Lesson 1: movement and skeletal muscle ---------------- */
    {
      slug: "c11-bio-movement-muscle-structure",
      title: "Types of Movement and the Structure of Skeletal Muscle",
      summary:
        "Movement versus locomotion, amoeboid, ciliary and muscular movement, the three kinds of muscle, and how a skeletal muscle is built from fascicles, fibres, myofibrils and sarcomeres.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "Watch a Bharatanatyam dancer. Her eyes dart, her fingers form mudras, her feet strike the floor and she glides across the stage. All of these are **movements**. Only the last one, where her whole body changes place, is **locomotion**.\n\n**Movement** is any change in the position of the body or a part of it. **Locomotion** is a voluntary movement that takes the whole organism from one place to another, for example walking, running, swimming or flying. So every locomotion is a movement, but not every movement is locomotion.",
        },
        {
          type: "text",
          md: "Sometimes the same structure does both jobs. In *Paramecium*, **cilia** move food through the cytopharynx and also row the cell through water. In *Hydra*, the **tentacles** capture prey and also help the animal move. We use our **limbs** to change body posture and also to walk.\n\nAnimals move to find food, shelter, a mate, a good breeding ground or a better climate, and to escape enemies or predators.",
        },
        {
          type: "table",
          headers: ["Type of movement", "How it works", "Where it happens in humans"],
          rows: [
            ["**Amoeboid**", "Pseudopodia form by streaming of protoplasm; cytoskeletal elements such as **microfilaments** are involved", "Macrophages and leucocytes (white blood cells) in blood"],
            ["**Ciliary**", "Coordinated beating of cilia on the free surface of ciliated epithelium", "Trachea (removing dust particles trapped in mucus); passage of the ovum through the female reproductive tract"],
            ["**Muscular**", "Contraction of muscle fibres, often pulling on bones", "Limbs, jaws, tongue; locomotion depends on muscles, bones and the nervous system working together"],
          ],
        },
        {
          type: "heading",
          text: "Muscle: the tissue that contracts",
        },
        {
          type: "text",
          md: "Muscle is a specialised tissue of **mesodermal** origin. About **40–50 per cent** of the body weight of an adult human is muscle. Muscles have four special properties: **excitability** (they respond to a stimulus), **contractility** (they shorten), **extensibility** (they can be stretched) and **elasticity** (they return to their resting length).",
        },
        {
          type: "table",
          headers: ["Feature", "Skeletal", "Visceral (smooth)", "Cardiac"],
          rows: [
            ["Location", "Attached to bones of the skeleton (biceps, triceps)", "Inner walls of hollow visceral organs: alimentary canal, reproductive tract", "Heart only"],
            ["Striations", "Striped (striated)", "Not striated; smooth look", "Striated"],
            ["Control", "**Voluntary** (nervous system under our will)", "**Involuntary**", "**Involuntary**"],
            ["Cells", "Long fibres, many nuclei", "Spindle-shaped, one nucleus", "Branched, joined in a network"],
            ["Main jobs", "Locomotion and changes of body posture", "Move food through the gut, gametes through the genital tract", "Pump blood"],
          ],
        },
        {
          type: "heading",
          text: "Inside a skeletal muscle",
        },
        {
          type: "text",
          md: "Picture a thick electric cable cut across. A skeletal muscle is made of many **muscle bundles** or **fascicles**, held together by a common collagenous connective tissue layer called the **fascia**. Each fascicle contains many **muscle fibres**.\n\nEach muscle fibre is lined by the plasma membrane, here called the **sarcolemma**, which encloses the cytoplasm, the **sarcoplasm**. A muscle fibre has many nuclei, so it is a **syncytium**. Its endoplasmic reticulum, the **sarcoplasmic reticulum**, is the **store of calcium ions**. The sarcoplasm is packed with parallel **myofilaments** or **myofibrils**.",
        },
        {
          type: "text",
          md: "Each myofibril shows alternate dark and light bands. This striped look comes from the way two proteins, **actin** and **myosin**, are arranged.\n\nThe **light band** contains actin and is called the **I-band** (isotropic band). The **dark band** contains myosin and is called the **A-band** (anisotropic band). Thin actin filaments are firmly attached to the **Z-line**, an elastic fibre that bisects each I-band. Thick myosin filaments in the A-band are held together in the middle by a thin fibrous membrane, the **M-line**.\n\nThe part of the myofibril between two successive Z-lines is the **sarcomere**, the **functional unit of contraction**. At rest, the edges of the thin filaments partly overlap the free ends of the thick filaments, leaving a central part of each thick filament uncovered: this lighter central region is the **H-zone**.",
        },
        {
          type: "table",
          headers: ["Region", "What it is", "Contains"],
          rows: [
            ["Z-line", "Line bisecting the I-band; boundary of a sarcomere", "Anchors thin (actin) filaments"],
            ["I-band", "Light, isotropic band", "Actin only"],
            ["A-band", "Dark, anisotropic band", "Whole length of the myosin filaments (and the overlapping actin ends)"],
            ["H-zone", "Central part of the A-band not overlapped by actin", "Myosin only"],
            ["M-line", "Thin membrane in the middle of the A-band", "Holds thick filaments together"],
          ],
        },
        {
          type: "example",
          title: "Naming the parts of a sarcomere",
          problem: "Under an electron micrograph, a student sees (p) a dark band that contains a lighter central zone, (q) a thin line cutting the light band into two halves, and (r) a line in the very middle of the dark band. Name p, q and r and state where one sarcomere begins and ends.",
          steps: [
            "The dark band is made of myosin and is anisotropic: **A-band**. Its lighter central zone, where actin does not overlap, is the **H-zone**.",
            "The line that bisects the light (I) band is the **Z-line**.",
            "The line in the middle of the A-band that holds thick filaments together is the **M-line**.",
            "A sarcomere runs from one Z-line to the next Z-line, so it contains one whole A-band and two half I-bands.",
          ],
          answer: "p = A-band (with H-zone), q = Z-line, r = M-line; a sarcomere lies between two successive Z-lines.",
        },
        {
          type: "mistake",
          wrong: "The light I-band is made of myosin and the dark A-band is made of actin.",
          right: "The **I-band (light)** contains **actin**; the **A-band (dark)** contains **myosin**. Myosin filaments are thick, so the band holding them looks dark.",
          why: "Students mix up the letters with the proteins (A for actin). Remember instead: thick myosin makes the band dark and anisotropic (A); the thin actin-only band is light and isotropic (I).",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each term with what it means.",
            pairs: [
              ["Sarcolemma", "Plasma membrane of a muscle fibre"],
              ["Sarcoplasmic reticulum", "Store of calcium ions"],
              ["Fascia", "Collagenous layer holding fascicles together"],
              ["Sarcomere", "Unit between two Z-lines"],
              ["Syncytium", "Cell with many nuclei"],
            ],
            explain: "Muscle words start with 'sarco-' (flesh): sarcolemma, sarcoplasm and sarcoplasmic reticulum are simply the membrane, cytoplasm and ER of a muscle fibre.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which human cells show amoeboid movement?",
              options: ["Ciliated cells of the trachea", "Macrophages and leucocytes", "Skeletal muscle fibres", "Sperm in the vas deferens"],
              answer: 1,
              explain: "Macrophages and leucocytes in blood move by pseudopodia, which form by protoplasmic streaming with the help of microfilaments.",
            },
            {
              kind: "mcq",
              q: "The H-zone of a resting sarcomere contains:",
              options: ["Only actin", "Only myosin", "Both actin and myosin", "Neither; it is empty space"],
              answer: 1,
              explain: "The H-zone is the central part of the thick filaments that the actin filaments do not overlap, so only myosin is present.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A labelled diagram of a sarcomere is a common 3-mark question. Marks go for Z-line, I-band, A-band, H-zone, M-line, actin and myosin, with the sarcomere marked from Z to Z. In 'differentiate between' questions, write the three muscle types in a table with at least four points each.",
        },
        {
          type: "keypoints",
          items: [
            "Movement = change in position of body or part; locomotion = voluntary movement from place to place.",
            "Amoeboid (macrophages, leucocytes), ciliary (trachea, oviduct) and muscular (limbs, jaws, tongue) movement.",
            "Muscle is mesodermal, 40–50% of adult body weight; skeletal (voluntary, striated), visceral (involuntary, smooth), cardiac (involuntary, striated).",
            "Muscle → fascicles (held by fascia) → fibres (syncytium, sarcolemma, sarcoplasmic reticulum with Ca²⁺) → myofibrils.",
            "Sarcomere = Z to Z; I-band (actin, light), A-band (myosin, dark), H-zone and M-line in the middle.",
          ],
        },
      ],
      flashcards: [
        { front: "Movement versus locomotion", back: "Movement: any change in position of the body or a part. Locomotion: voluntary movement of the whole body from one place to another." },
        { front: "Ciliary movement in humans", back: "Trachea (removes dust trapped in mucus) and the female reproductive tract (moves the ovum)." },
        { front: "Fraction of adult body weight that is muscle", back: "About 40–50 per cent." },
        { front: "Four properties of muscle", back: "Excitability, contractility, extensibility, elasticity." },
        { front: "Why is a muscle fibre called a syncytium?", back: "Its sarcoplasm contains many nuclei." },
        { front: "Store of calcium in a muscle fibre", back: "Sarcoplasmic reticulum." },
        { front: "Sarcomere", back: "The part of a myofibril between two successive Z-lines; the functional unit of contraction." },
        { front: "I-band and A-band", back: "I-band: light, isotropic, actin. A-band: dark, anisotropic, myosin." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Locomotion in *Paramecium* and movement of food through its cytopharynx are both brought about by:",
          options: ["Pseudopodia", "Flagella", "Cilia", "Muscle fibres"],
          answer: 2,
          explain: "In *Paramecium* cilia do both jobs: they move food into the cytopharynx and row the cell through water.",
        },
        {
          kind: "multi",
          q: "Which statements about visceral muscle are correct?",
          options: ["It is non-striated", "It is under voluntary control", "It lines the inner walls of the alimentary canal", "It helps move gametes through the genital tract", "It is attached to bones"],
          answers: [0, 2, 3],
          explain: "Visceral (smooth) muscle is non-striated and involuntary. It lies in the walls of hollow organs such as the gut and reproductive tract. Skeletal muscle, not visceral, is attached to bones.",
        },
        {
          kind: "mcq",
          q: "Which of these is both striated and involuntary?",
          options: ["Biceps", "Muscle of the stomach wall", "Cardiac muscle", "Muscle of the iris"],
          answer: 2,
          explain: "Cardiac muscle is striated like skeletal muscle but involuntary like visceral muscle.",
        },
        {
          kind: "fill",
          q: "Muscle bundles (fascicles) are held together by a collagenous connective tissue layer called ___.",
          answer: ["fascia"],
          explain: "The fascia wraps the fascicles of a skeletal muscle together.",
        },
        {
          kind: "truefalse",
          q: "A sarcomere extends from one M-line to the next M-line.",
          answer: false,
          explain: "A sarcomere extends between two successive Z-lines. The M-line lies in the middle of the sarcomere's A-band.",
        },
        {
          kind: "mcq",
          q: "The thin filaments of a myofibril are attached to the:",
          options: ["M-line", "Z-line", "H-zone", "Sarcolemma"],
          answer: 1,
          explain: "Actin (thin) filaments are firmly attached to the Z-line. Myosin (thick) filaments are held together at the M-line.",
        },
        {
          kind: "mcq",
          q: "Muscle is mesodermal. From which germ layer does the ciliated lining of the trachea develop?",
          options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
          answer: 2,
          explain: "The lining of the trachea, like the rest of the respiratory tract lining, comes from endoderm. This reminds you that ciliary movement is a property of epithelium, not muscle.",
          difficulty: 2,
          hint: "The respiratory tract buds off from the gut tube.",
        },
      ],
    },
    /* ---------------- Lesson 2: contractile proteins and contraction ---------------- */
    {
      slug: "c11-bio-muscle-contraction",
      title: "Contractile Proteins and the Mechanism of Muscle Contraction",
      summary:
        "Actin, tropomyosin, troponin and myosin; the motor unit and neuromuscular junction; the sliding filament theory step by step; band changes, fatigue, and red versus white fibres.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Lift a school bag. Your biceps shortens, yet not a single protein molecule inside it gets shorter. The filaments simply **slide** past each other, like the two halves of an extendable ladder. To see how, first meet the proteins.",
        },
        {
          type: "heading",
          text: "The contractile proteins",
        },
        {
          type: "text",
          md: "**Actin (thin) filament.** Each is made of two **F-actins** (filamentous actin) wound helically around each other. Each F-actin is a polymer of monomeric **G-actins** (globular actin). Two filaments of another protein, **tropomyosin**, run close to the F-actins along their whole length. A complex protein, **troponin**, sits at regular intervals on the tropomyosin. **At rest, a subunit of troponin masks the active binding sites for myosin on the actin filament.**\n\n**Myosin (thick) filament.** It is a polymer of many monomers called **meromyosins**. Each meromyosin has a **globular head with a short arm** and a **tail**. The head and short arm together form **heavy meromyosin (HMM)**; the tail is **light meromyosin (LMM)**. The heads and arms project outwards at regular distances and angles from the surface of the filament; this projection is the **cross arm**. The globular head is an **active ATPase enzyme** and has binding sites for ATP and active sites for actin.",
        },
        {
          type: "table",
          headers: ["Protein", "Filament", "Role"],
          rows: [
            ["G-actin → F-actin", "Thin", "Backbone of the thin filament; carries myosin-binding sites"],
            ["Tropomyosin", "Thin", "Two strands running along F-actin"],
            ["Troponin", "Thin", "On tropomyosin; one subunit masks binding sites at rest and binds Ca²⁺"],
            ["Meromyosin (HMM + LMM)", "Thick", "Head (HMM) is an ATPase that binds actin and ATP; tail (LMM) forms the shaft"],
          ],
        },
        {
          type: "heading",
          text: "Sliding filament theory",
        },
        {
          type: "text",
          md: "Contraction begins with a signal sent by the central nervous system through a **motor neuron**. A motor neuron together with the muscle fibres it supplies is a **motor unit**. The junction between a motor neuron and the sarcolemma of a muscle fibre is the **neuromuscular junction** or **motor end plate**.\n\nThe **sliding filament theory** says that a muscle fibre contracts because the **thin filaments slide over the thick filaments** towards the centre of the sarcomere.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The nerve signal reaches the neuromuscular junction and releases the neurotransmitter **acetylcholine**, which generates an action potential in the sarcolemma.",
            "The action potential spreads through the muscle fibre and causes release of **calcium ions** from the sarcoplasmic reticulum into the sarcoplasm.",
            "Ca²⁺ binds to a subunit of **troponin** on the actin filaments; this removes the masking of the active sites for myosin.",
            "Using energy from **ATP hydrolysis**, the myosin head binds to the exposed active sites on actin, forming a **cross bridge**.",
            "The cross bridge pulls the attached actin filaments towards the centre of the A-band. The Z-lines attached to these actins are also pulled inwards, so the sarcomere shortens: this is **contraction**.",
            "The myosin head releases ADP and Pi and goes back to its relaxed state. A new ATP binds and the cross bridge is broken. The ATP is hydrolysed again and the cycle repeats, pulling the actin further.",
            "When Ca²⁺ is pumped back into the sarcoplasmic cisternae, the actin sites are masked again, the Z-lines return to their original position and the muscle **relaxes**.",
          ],
        },
        {
          type: "formula",
          tex: t`\text{Contraction: } I \downarrow,\; H \downarrow,\; \text{sarcomere} \downarrow,\; A = \text{constant}`,
          caption: "During contraction the I-band and H-zone shorten (the H-zone may disappear); the A-band keeps its length because myosin filaments do not shorten.",
        },
        {
          type: "example",
          title: "Following one cross-bridge cycle",
          problem: "A muscle fibre is stimulated once. Put these in order and say what happens if ATP is not available after the cross bridge forms: (a) myosin head binds actin, (b) Ca²⁺ binds troponin, (c) acetylcholine released, (d) ADP and Pi released and new ATP binds.",
          steps: [
            "The signal arrives first: acetylcholine is released at the motor end plate (c).",
            "The action potential leads to Ca²⁺ release, and Ca²⁺ binds troponin, exposing actin sites (b).",
            "The energised myosin head binds actin and forms a cross bridge that pulls actin inwards (a).",
            "The head releases ADP and Pi; a new ATP binds and breaks the cross bridge (d).",
            "Without new ATP, step (d) cannot finish: myosin stays locked to actin and the muscle cannot relax. This is why muscles become stiff after death (rigor mortis).",
          ],
          answer: "c → b → a → d. Without ATP the cross bridge cannot break, so the muscle stays contracted.",
        },
        {
          type: "mistake",
          wrong: "During contraction the actin and myosin filaments themselves become shorter.",
          right: "Neither filament shortens. Actin filaments slide over myosin towards the centre, so the **sarcomere**, the **I-band** and the **H-zone** shorten while the **A-band** stays the same.",
          why: "The muscle visibly shortens, so it seems the parts must shrink. Since the A-band equals the length of the myosin filaments, a constant A-band is the proof that myosin does not shorten.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange the events of contraction in order.",
            items: [
              "Acetylcholine released at the motor end plate",
              "Action potential spreads along the sarcolemma",
              "Ca²⁺ released from sarcoplasmic reticulum",
              "Ca²⁺ binds troponin and unmasks actin sites",
              "Myosin head forms a cross bridge with actin",
              "Actin pulled towards the centre of the A-band",
            ],
            explain: "Nerve signal → electrical signal in muscle → calcium release → unmasking → cross bridge → sliding. Relaxation reverses the calcium step.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In a resting muscle fibre, the myosin-binding sites on actin are masked by:",
              options: ["Tropomyosin alone", "A subunit of troponin", "Calcium ions", "Light meromyosin"],
              answer: 1,
              explain: "NCERT states that a subunit of troponin masks the active binding sites for myosin at rest. Calcium binding to troponin removes this mask.",
            },
          ],
        },
        {
          type: "text",
          md: "**Fatigue.** Repeated activation of muscles can lead to accumulation of **lactic acid** from the anaerobic breakdown of glycogen, causing fatigue.\n\n**Red and white fibres.** Muscles contain a red oxygen-storing pigment, **myoglobin**. **Red fibres** have a lot of myoglobin and plenty of mitochondria, and use stored oxygen for ATP production: they are **aerobic muscles**. **White fibres** have little myoglobin, few mitochondria and a large amount of sarcoplasmic reticulum; they depend on **anaerobic** processes for energy.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "'Explain the mechanism of muscle contraction' is a 5-mark question. Write the steps in order: motor neuron → acetylcholine → action potential → Ca²⁺ → troponin → cross bridge (ATP) → sliding → relaxation. Add one line on which bands shorten. Missing calcium or troponin usually costs marks.",
        },
        {
          type: "keypoints",
          items: [
            "Thin filament: 2 F-actins (polymers of G-actin) + tropomyosin + troponin; troponin masks myosin sites at rest.",
            "Thick filament: meromyosins; head + short arm = HMM (ATPase, binds actin and ATP), tail = LMM.",
            "Signal: motor neuron → neuromuscular junction → acetylcholine → action potential → Ca²⁺ from sarcoplasmic reticulum.",
            "Ca²⁺–troponin unmasks actin; cross bridges pull actin to the centre; I-band and H-zone shorten, A-band constant.",
            "Lactic acid causes fatigue; red fibres are aerobic (myoglobin, mitochondria), white fibres anaerobic.",
          ],
        },
      ],
      flashcards: [
        { front: "F-actin", back: "Filamentous actin; a polymer of G-actin. Two F-actins wind helically to form a thin filament." },
        { front: "Role of troponin", back: "A subunit masks myosin-binding sites on actin at rest; binding Ca²⁺ removes the mask." },
        { front: "Heavy meromyosin (HMM)", back: "Globular head + short arm of a meromyosin; the head is an ATPase with sites for ATP and actin." },
        { front: "Motor unit", back: "A motor neuron and the muscle fibres connected to it." },
        { front: "Neurotransmitter at the neuromuscular junction", back: "Acetylcholine." },
        { front: "Which band does not change length during contraction?", back: "The A-band." },
        { front: "Cause of muscle fatigue", back: "Lactic acid build-up from anaerobic breakdown of glycogen." },
        { front: "Red versus white muscle fibres", back: "Red: much myoglobin, many mitochondria, aerobic. White: little myoglobin, few mitochondria, more sarcoplasmic reticulum, anaerobic." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The globular head of myosin acts as:",
          options: ["A Ca²⁺ pump", "An ATPase enzyme", "A receptor for acetylcholine", "A part of the Z-line"],
          answer: 1,
          explain: "The myosin head is an active ATPase. It hydrolyses ATP and uses the energy to bind actin and pull it.",
        },
        {
          kind: "mcq",
          q: "Calcium ions released into the sarcoplasm bind to:",
          options: ["Myosin head", "Tropomyosin", "Troponin", "G-actin"],
          answer: 2,
          explain: "Ca²⁺ binds a subunit of troponin, which unmasks the active sites on actin for myosin.",
        },
        {
          kind: "multi",
          q: "Which of these shorten during contraction of a skeletal muscle fibre?",
          options: ["Sarcomere", "I-band", "A-band", "H-zone", "Myosin filament"],
          answers: [0, 1, 3],
          explain: "The sarcomere, I-band and H-zone shorten as actin slides inwards. The A-band and the myosin filament keep their length.",
        },
        {
          kind: "truefalse",
          q: "Relaxation of muscle occurs when calcium ions are pumped back into the sarcoplasmic cisternae.",
          answer: true,
          explain: "Removing Ca²⁺ lets troponin mask the actin sites again, so cross bridges cannot form and the Z-lines return to their original position.",
        },
        {
          kind: "fill",
          q: "The oxygen-storing red pigment found in large amounts in aerobic muscle fibres is ___.",
          answer: ["myoglobin"],
          explain: "Red muscle fibres are rich in myoglobin and mitochondria.",
        },
        {
          kind: "order",
          q: "Arrange the steps of one cross-bridge cycle starting from an exposed actin site.",
          items: [
            "Energised myosin head binds actin to form a cross bridge",
            "Cross bridge pulls actin towards the centre of the A-band",
            "Myosin head releases ADP and Pi",
            "New ATP binds and the cross bridge breaks",
            "ATP is hydrolysed and the head is ready again",
          ],
          explain: "Bind, pull, release ADP and Pi, bind new ATP to detach, hydrolyse ATP to re-cock the head.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A drug blocks acetylcholine receptors on the sarcolemma. What is the most likely result?",
          options: ["Muscle stays permanently contracted", "Muscle cannot be stimulated to contract", "A-band shortens", "Sarcoplasmic reticulum loses its calcium at rest"],
          answer: 1,
          explain: "Without acetylcholine binding, no action potential forms in the sarcolemma, so Ca²⁺ is not released and contraction cannot start. The muscle becomes weak or paralysed.",
          difficulty: 2,
          hint: "Which step comes first in the chain of events?",
        },
        {
          kind: "mcq",
          q: "Flight muscles of migratory birds stay active for hours. Their fibres are mostly:",
          options: ["White, with few mitochondria", "Red, rich in myoglobin and mitochondria", "Smooth muscle", "Fibres that lack sarcoplasmic reticulum"],
          answer: 1,
          explain: "Long, steady work needs aerobic ATP production, which red fibres provide with their myoglobin and many mitochondria.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Lesson 3: skeleton, joints, disorders ---------------- */
    {
      slug: "c11-bio-skeleton-joints",
      title: "The Skeletal System, Joints and Disorders",
      summary:
        "The 206 bones of the axial and appendicular skeleton, the skull, vertebral column, ribs, limbs and girdles, the three kinds of joints, and disorders of muscles and the skeleton.",
      minutes: 24,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "A building in Mumbai stands on a frame of steel and concrete. Your body stands on a frame of **bones** and **cartilage**: the **skeletal system**. It supports the body, protects organs such as the brain and heart, and gives muscles something to pull on.\n\nBone has a very hard matrix because of **calcium salts**. Cartilage has a slightly pliable matrix because of **chondroitin salts**. In humans the skeleton has **206 bones** and a few cartilages, grouped into the **axial skeleton (80 bones)** along the main axis and the **appendicular skeleton (126 bones)** of the limbs and girdles.",
        },
        {
          type: "formula",
          tex: t`206 = \underbrace{80}_{\text{axial}} + \underbrace{126}_{\text{appendicular}}`,
          caption: "Axial: skull 22 + hyoid 1 + ear ossicles 6 + vertebrae 26 + sternum 1 + ribs 24 = 80. Appendicular: limbs 4 × 30 = 120 + girdles 6 = 126.",
        },
        {
          type: "table",
          headers: ["Part of axial skeleton", "Bones and key facts"],
          rows: [
            ["Skull (22)", "**Cranial bones 8** form the hard protective cranium around the brain; **facial bones 14** form the front of the skull"],
            ["Hyoid (1)", "A single U-shaped bone at the base of the buccal cavity"],
            ["Ear ossicles (3 + 3)", "Malleus, incus and stapes in each middle ear"],
            ["Vertebral column (26)", "Cervical 7, thoracic 12, lumbar 5, sacral 1 (fused), coccygeal 1 (fused); the neural canal carries the spinal cord"],
            ["Sternum (1)", "Flat bone on the ventral midline of the thorax"],
            ["Ribs (12 pairs)", "Each rib is thin and flat, joined dorsally to the vertebral column and (most) ventrally to the sternum"],
          ],
        },
        {
          type: "text",
          md: "The skull joins the top of the vertebral column through **two occipital condyles**, so the human skull is **dicondylic**. The first vertebra, the **atlas**, articulates with the occipital condyles. The number of **cervical vertebrae is seven** in almost all mammals, including humans and giraffes. The vertebral column protects the spinal cord, supports the head and serves as the point of attachment for the ribs and the musculature of the back.\n\nEach rib has two articulation surfaces on its dorsal end, so ribs are called **bicephalic**. The **first seven pairs** are **true ribs**: attached dorsally to thoracic vertebrae and ventrally to the sternum with hyaline cartilage. The **8th, 9th and 10th pairs** do not join the sternum directly but join the seventh rib with hyaline cartilage: these are **vertebrochondral (false) ribs**. The **11th and 12th pairs** are not connected ventrally: **floating ribs**. Thoracic vertebrae, ribs and sternum together form the **rib cage**.",
        },
        {
          type: "table",
          headers: ["Appendicular part", "Bones"],
          rows: [
            ["Fore limb (30)", "Humerus, radius and ulna, carpals (wrist, 8), metacarpals (palm, 5), phalanges (digits, 14)"],
            ["Hind limb (30)", "Femur (longest bone), tibia and fibula, tarsals (ankle, 7), metatarsals (5), phalanges (14); a cup-shaped **patella** (knee cap) covers the knee ventrally"],
            ["Pectoral girdle (2 × 2)", "Each half: **clavicle** (collar bone, long and slender with two curvatures) and **scapula** (large triangular flat bone on the dorsal thorax between the 2nd and 7th ribs)"],
            ["Pelvic girdle (2)", "Two **coxal bones**, each formed by fusion of **ilium, ischium and pubis**"],
          ],
        },
        {
          type: "text",
          md: "The scapula has a slightly raised ridge called the **spine**, which ends as a flat, expanded process, the **acromion**. The clavicle articulates with the acromion. Below the acromion is a depression, the **glenoid cavity**, which takes the head of the humerus to form the **shoulder joint**.\n\nIn each coxal bone, the point where ilium, ischium and pubis fuse carries a cavity, the **acetabulum**, into which the head of the femur fits. The two halves of the pelvic girdle meet ventrally at the **pubic symphysis**, which contains fibrous cartilage.",
        },
        {
          type: "heading",
          text: "Joints",
        },
        {
          type: "text",
          md: "A **joint** is a point of contact between bones, or between bones and cartilages. Muscle force pulls on bones, and the joint acts as the **fulcrum**. How much a joint moves depends on how the bones are held together.",
        },
        {
          type: "table",
          headers: ["Joint", "Structure", "Movement", "Example"],
          rows: [
            ["**Fibrous**", "Dense fibrous connective tissue; flat skull bones fuse edge to edge as **sutures**", "None", "Cranium"],
            ["**Cartilaginous**", "Bones joined by cartilage", "Limited", "Between adjacent vertebrae"],
            ["**Synovial**", "Fluid-filled **synovial cavity** between articulating surfaces", "Considerable", "See the five kinds below"],
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each synovial joint with where it is found.",
            pairs: [
              ["Ball and socket", "Humerus and pectoral girdle"],
              ["Hinge", "Knee"],
              ["Pivot", "Atlas and axis"],
              ["Gliding", "Between the carpals"],
              ["Saddle", "Carpal and metacarpal of the thumb"],
            ],
            explain: "Ball and socket allows movement in every direction; hinge moves in one plane like a door; pivot allows rotation (turning the head 'no'); gliding lets flat bones slide; saddle lets the thumb move across the palm.",
          },
        },
        {
          type: "example",
          title: "Counting bones",
          problem: "How many bones are there in (a) both hands and wrists together, (b) the vertebral column of a newborn compared with an adult, if the newborn has 5 separate sacral and 4 separate coccygeal pieces?",
          steps: [
            "One hand and wrist: carpals 8 + metacarpals 5 + phalanges 14 = 27. Both: 2 × 27 = **54**.",
            "Adult vertebral column: 7 + 12 + 5 + 1 + 1 = **26**.",
            "Newborn: 7 + 12 + 5 + 5 + 4 = **33** separate pieces, because sacral and coccygeal pieces fuse later in life.",
          ],
          answer: "(a) 54 bones; (b) 33 pieces in the newborn versus 26 vertebrae in the adult.",
        },
        {
          type: "mistake",
          wrong: "The 11th and 12th pairs are false ribs because they do not reach the sternum.",
          right: "Ribs 8–10 are the **false (vertebrochondral)** ribs: they join the sternum indirectly through the cartilage of the 7th rib. Ribs 11–12 are **floating** ribs with no ventral connection.",
          why: "In everyday speech 'false' sounds like 'not attached at all'. In NCERT the word means 'attached, but not directly'.",
        },
        {
          type: "table",
          headers: ["Disorder", "What goes wrong"],
          rows: [
            ["Myasthenia gravis", "**Autoimmune** disorder affecting the neuromuscular junction; fatigue, weakening and paralysis of skeletal muscle"],
            ["Muscular dystrophy", "Progressive degeneration of skeletal muscle, mostly due to a genetic disorder"],
            ["Tetany", "Rapid spasms (wild contractions) in muscle due to **low Ca²⁺** in body fluid"],
            ["Arthritis", "Inflammation of joints"],
            ["Osteoporosis", "Age-related; decreased bone mass and higher chance of fractures; **decreased oestrogen** is a common cause"],
            ["Gout", "Inflammation of joints due to accumulation of **uric acid crystals**"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The joint between the atlas and the axis is a:",
              options: ["Hinge joint", "Pivot joint", "Saddle joint", "Fibrous joint"],
              answer: 1,
              explain: "The atlas rotates on the axis at a pivot joint, letting us turn the head from side to side.",
            },
            {
              kind: "mcq",
              q: "Which disorder is caused by a fall in the calcium level of body fluid?",
              options: ["Gout", "Tetany", "Myasthenia gravis", "Muscular dystrophy"],
              answer: 1,
              explain: "Low Ca²⁺ in body fluid causes tetany: rapid, uncontrolled muscle spasms.",
            },
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn the bone counts as a table and check the totals add to 80 and 126. 'Name the bones of the pelvic girdle' wants ilium, ischium and pubis plus the word acetabulum. In disorder questions, one exact cause (autoimmune, genetic, low Ca²⁺, uric acid, low oestrogen) earns the mark.",
        },
        {
          type: "keypoints",
          items: [
            "206 bones: axial 80 (skull 22, hyoid 1, ossicles 6, vertebrae 26, sternum 1, ribs 24) and appendicular 126.",
            "Vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 1 sacral, 1 coccygeal; skull is dicondylic; atlas meets occipital condyles.",
            "Ribs: 1–7 true, 8–10 false (vertebrochondral), 11–12 floating; all bicephalic.",
            "Each limb has 30 bones; femur is the longest; girdles: clavicle + scapula, coxal bone (ilium + ischium + pubis).",
            "Joints: fibrous (sutures), cartilaginous (vertebrae), synovial (ball and socket, hinge, pivot, gliding, saddle).",
          ],
        },
      ],
      flashcards: [
        { front: "Number of bones in the axial and appendicular skeleton", back: "Axial 80, appendicular 126; total 206." },
        { front: "Cranial and facial bones", back: "8 cranial + 14 facial = 22 skull bones." },
        { front: "Vertebral formula of the adult human", back: "Cervical 7, thoracic 12, lumbar 5, sacral 1, coccygeal 1 = 26." },
        { front: "Why is the human skull dicondylic?", back: "It articulates with the atlas through two occipital condyles." },
        { front: "Floating ribs", back: "The 11th and 12th pairs; not connected ventrally." },
        { front: "Bones fused to form a coxal bone", back: "Ilium, ischium and pubis; the acetabulum lies at their point of fusion." },
        { front: "Glenoid cavity", back: "Depression below the acromion of the scapula; articulates with the head of the humerus (shoulder joint)." },
        { front: "Gout", back: "Joint inflammation caused by accumulation of uric acid crystals." },
        { front: "Saddle joint example", back: "Between the carpal and the metacarpal of the thumb." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "How many bones are there in one human fore limb?",
          answer: 30,
          explain: "Humerus 1 + radius 1 + ulna 1 + carpals 8 + metacarpals 5 + phalanges 14 = 30.",
        },
        {
          kind: "mcq",
          q: "The ribs that join the sternum indirectly through the cartilage of the seventh rib are:",
          options: ["1st to 7th pairs", "8th, 9th and 10th pairs", "11th and 12th pairs", "Only the 7th pair"],
          answer: 1,
          explain: "Ribs 8–10 are vertebrochondral (false) ribs. They join the 7th rib's cartilage instead of the sternum directly.",
        },
        {
          kind: "mcq",
          q: "Which bone is NOT part of the axial skeleton?",
          options: ["Hyoid", "Sternum", "Clavicle", "Malleus"],
          answer: 2,
          explain: "The clavicle belongs to the pectoral girdle, which is part of the appendicular skeleton. The hyoid, sternum and ear ossicles are axial.",
        },
        {
          kind: "multi",
          q: "Which are synovial joints?",
          options: ["Knee joint", "Sutures of the cranium", "Shoulder joint", "Joint between adjacent vertebrae", "Joint between carpals"],
          answers: [0, 2, 4],
          explain: "Knee (hinge), shoulder (ball and socket) and between carpals (gliding) are synovial. Cranial sutures are fibrous; joints between adjacent vertebrae are cartilaginous.",
        },
        {
          kind: "fill",
          q: "The cup-shaped bone that covers the knee ventrally is the ___.",
          answer: ["patella", "knee cap", "kneecap"],
          explain: "The patella (knee cap) is counted among the 30 bones of each hind limb.",
        },
        {
          kind: "mcq",
          q: "Myasthenia gravis is best described as:",
          options: [
            "A genetic disorder causing degeneration of skeletal muscle",
            "An autoimmune disorder affecting the neuromuscular junction",
            "Inflammation of joints due to uric acid",
            "Loss of bone mass due to low oestrogen",
          ],
          answer: 1,
          explain: "Myasthenia gravis is autoimmune and acts at the neuromuscular junction. Option A describes muscular dystrophy, C gout and D osteoporosis.",
        },
        {
          kind: "numeric",
          q: "How many bones form the human pectoral and pelvic girdles together?",
          answer: 6,
          explain: "Pectoral girdle: 2 clavicles + 2 scapulae = 4. Pelvic girdle: 2 coxal bones. Total 6.",
          difficulty: 2,
          hint: "Each coxal bone counts as one bone even though it forms by fusion.",
        },
        {
          kind: "mcq",
          q: "A post-menopausal woman breaks her wrist after a small fall. Which disorder is most likely and why?",
          options: ["Gout, because of uric acid crystals", "Osteoporosis, because of decreased oestrogen", "Tetany, because of high calcium", "Arthritis, because of a genetic defect"],
          answer: 1,
          explain: "After menopause oestrogen falls, a common cause of osteoporosis: lower bone mass and a higher chance of fractures.",
          difficulty: 2,
        },
      ],
    },
    /* ---------------- Exam edge ---------------- */
    {
      slug: "c11-bio-locomotion-exam-edge",
      title: "Exam edge: Locomotion and Movement",
      summary:
        "How NEET and KCET test this chapter: band changes during contraction, protein roles, bone counts, rib and joint types, disorders, and the NCERT lines behind statement and assertion–reason questions.",
      minutes: 22,
      xp: 55,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually asks 1–3 questions from this chapter, and it is part of the human physiology block that gives NEET many marks every year. The questions come straight from NCERT lines: which band shortens, what troponin does, how many bones, which joint is where, which disorder has which cause. **KCET** asks the same as one-liners and matching sets. The traps are almost always the small words: 'directly', 'masks', 'remains the same'.",
        },
        {
          type: "list",
          items: [
            "NCERT line: muscle makes up **40–50%** of adult body weight.",
            "NCERT line: the **sarcoplasmic reticulum** is the store of calcium ions.",
            "NCERT line: at rest a **subunit of troponin** masks the active binding sites for myosin on actin.",
            "NCERT line: the **myosin head** is an active ATPase with binding sites for ATP and active sites for actin.",
            "NCERT line: the I-bands get reduced, whereas the **A-bands retain their length**.",
            "NCERT line: the number of **cervical vertebrae is seven** in almost all mammals.",
            "NCERT line: **decreased levels of oestrogen** is a common cause of osteoporosis.",
          ],
        },
        {
          type: "formula",
          tex: t`H = S - 2L_{\text{thin}}, \qquad I = S - A`,
          caption: "S = sarcomere length, A = A-band (= myosin length, constant), L_thin = length of actin from the Z-line. Use these only for idealised numeric problems; NCERT itself gives no lengths.",
        },
        {
          type: "example",
          title: "NEET level: statement counting",
          problem: "How many are correct? (i) Each F-actin is a polymer of G-actin. (ii) The tail of meromyosin is heavy meromyosin. (iii) Ca²⁺ binds tropomyosin to expose actin sites. (iv) Red fibres have more mitochondria than white fibres. (v) Sarcoplasmic reticulum is abundant in white fibres.",
          steps: [
            "(i) Correct: G-actin monomers polymerise into F-actin.",
            "(ii) Wrong: the head and short arm form HMM; the tail is LMM.",
            "(iii) Wrong: Ca²⁺ binds a subunit of troponin, not tropomyosin.",
            "(iv) Correct: red, aerobic fibres have plenty of mitochondria.",
            "(v) Correct: NCERT says white fibres have a high amount of sarcoplasmic reticulum.",
          ],
          answer: "Three statements, (i), (iv) and (v), are correct.",
        },
        {
          type: "example",
          title: "Assertion–reason",
          problem: "A: During muscle contraction the A-band keeps its length. R: The A-band is formed by the full length of the myosin filaments, which do not shorten.",
          steps: [
            "A is true: NCERT states the A-bands retain their length while I-bands shorten.",
            "R is true: the A-band spans the thick filaments, and filaments slide rather than shorten.",
            "R is exactly why A is true.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "KCET style: matching",
          problem: "Match: (p) Gliding joint (q) Fibrous joint (r) Gout (s) Myasthenia gravis with (1) uric acid crystals (2) autoimmune, neuromuscular junction (3) between carpals (4) skull sutures.",
          steps: [
            "Gliding joints occur between the carpals: p–3.",
            "Fibrous joints are the sutures of the cranium: q–4.",
            "Gout is caused by uric acid crystals in joints: r–1.",
            "Myasthenia gravis is autoimmune and acts at the neuromuscular junction: s–2.",
          ],
          answer: "p–3, q–4, r–1, s–2.",
        },
        {
          type: "example",
          title: "Harder: sarcomere arithmetic",
          problem: "In an idealised sarcomere at rest, S = 2.4 μm, the A-band is 1.6 μm and each set of thin filaments extends 1.0 μm from its Z-line. Find the I-band and H-zone. The fibre then contracts until S = 2.0 μm. Find the new A-band, I-band and H-zone.",
          steps: [
            "Rest: I = S − A = 2.4 − 1.6 = 0.8 μm (0.4 μm on each side of the sarcomere).",
            "Rest: H = S − 2 × 1.0 = 2.4 − 2.0 = 0.4 μm.",
            "Contracted: A stays 1.6 μm because myosin length does not change.",
            "Contracted: I = 2.0 − 1.6 = 0.4 μm; H = 2.0 − 2.0 = 0 μm, so the H-zone disappears.",
          ],
          answer: "At rest I = 0.8 μm and H = 0.4 μm. After contraction A = 1.6 μm, I = 0.4 μm, H = 0 (the H-zone vanishes).",
        },
        {
          type: "mistake",
          wrong: "Tropomyosin masks the myosin-binding sites, so calcium must bind tropomyosin.",
          right: "NCERT says a **subunit of troponin** masks the sites, and **Ca²⁺ binds troponin**.",
          why: "Many reference books say tropomyosin physically covers the sites, which is true at the molecular level, but NEET follows the NCERT wording. In an NCERT-based question, troponin is the answer for both masking and Ca²⁺ binding.",
        },
        {
          type: "mistake",
          wrong: "The sternum and ribs are part of the appendicular skeleton because they form the chest wall that the arms attach to.",
          right: "Sternum and ribs are **axial**. The appendicular skeleton is only the limb bones and the girdles (clavicle, scapula, coxal bones).",
          why: "Students confuse 'near the shoulder' with 'part of the limb'. Axial means along the main body axis: skull, vertebral column, sternum and ribs.",
        },
        {
          type: "mistake",
          wrong: "Osteoporosis and gout are both caused by low calcium.",
          right: "Low Ca²⁺ in body fluid causes **tetany**. Osteoporosis is age-related loss of bone mass (low oestrogen is a common cause); gout is caused by **uric acid crystals**.",
          why: "All three involve bones, joints or calcium in some way, so they blur together. Tie each to one cause word.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "During contraction, what happens to the H-zone?",
            emoji: "💪",
            options: ["It stays the same, like the A-band", "It shortens and may disappear", "It gets longer", "It moves to the Z-line"],
            answer: 1,
            trap: 0,
            explain: "The H-zone is the part of the A-band without actin. As actin slides inwards, it covers more of the myosin, so the H-zone shrinks and can vanish. Only the A-band stays constant.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: The human skull is dicondylic. R: It articulates with the axis vertebra through two occipital condyles.",
              options: AR,
              answer: 2,
              explain: "A is true. R is false: the skull articulates with the atlas (the first vertebra), not the axis.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Contraction: I and H shorten, A constant; troponin masks sites and binds Ca²⁺; myosin head is the ATPase.",
            "HMM = head + short arm; LMM = tail; F-actin = polymer of G-actin.",
            "Bone counts: 206 = 80 + 126; skull 22 (8 + 14); vertebrae 26; ribs 12 pairs (7 true, 3 false, 2 floating); each limb 30.",
            "Joint examples: suture (fibrous), vertebrae (cartilaginous), shoulder, knee, atlas–axis, carpals, thumb (synovial).",
            "Disorders: autoimmune (myasthenia gravis), genetic (dystrophy), low Ca²⁺ (tetany), uric acid (gout), low oestrogen (osteoporosis).",
          ],
        },
      ],
      flashcards: [
        { front: "Which protein binds Ca²⁺ in skeletal muscle (NCERT)?", back: "Troponin." },
        { front: "Bones in the cranium", back: "8." },
        { front: "Total number of ribs", back: "24 (12 pairs)." },
        { front: "Bones in the axial skeleton", back: "80." },
        { front: "Longest bone", back: "Femur." },
        { front: "Joint type between adjacent vertebrae", back: "Cartilaginous (limited movement)." },
        { front: "Number of phalanges in one hand", back: "14." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which statement is correct for a contracted sarcomere compared with a relaxed one?",
          options: [
            "A-band shorter, I-band same",
            "A-band same, I-band shorter, H-zone shorter",
            "A-band and I-band both shorter",
            "H-zone longer, I-band shorter",
          ],
          answer: 1,
          explain: "Myosin filaments (A-band) keep their length; the I-band and H-zone shorten as actin slides inwards.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Select the correctly matched pairs.",
          options: ["Hinge joint – knee", "Pivot joint – atlas and axis", "Saddle joint – humerus and pectoral girdle", "Gliding joint – between carpals", "Ball and socket – carpal and metacarpal of thumb"],
          answers: [0, 1, 3],
          explain: "The shoulder (humerus and pectoral girdle) is ball and socket; the thumb carpal–metacarpal joint is saddle. The other three pairs are correct.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "In an idealised sarcomere, S = 2.2 μm, the A-band is 1.6 μm and thin filaments extend 0.9 μm from each Z-line. What is the width of the H-zone in μm?",
          answer: 0.4,
          tolerance: 0.01,
          unit: "μm",
          explain: "H = S − 2 × L(thin) = 2.2 − 1.8 = 0.4 μm.",
          difficulty: 3,
          hint: "The H-zone is the gap between the free ends of the thin filaments coming from the two Z-lines.",
        },
        {
          kind: "mcq",
          q: "A: Repeated activation of skeletal muscle can cause fatigue. R: Lactic acid accumulates due to anaerobic breakdown of glycogen.",
          options: AR,
          answer: 0,
          explain: "Both are NCERT statements and lactic acid build-up is the stated cause of fatigue.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which of these bones is unpaired?",
          options: ["Scapula", "Hyoid", "Coxal bone", "Clavicle"],
          answer: 1,
          explain: "The hyoid is a single U-shaped bone. Scapulae, coxal bones and clavicles occur in pairs.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many bones in the human body are found in the vertebral column, sternum and ribs together?",
          answer: 51,
          explain: "Vertebrae 26 + sternum 1 + ribs 24 = 51.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "The neuromuscular junction is affected in which disorder?",
          options: ["Gout", "Myasthenia gravis", "Osteoporosis", "Arthritis"],
          answer: 1,
          explain: "Myasthenia gravis is an autoimmune attack at the neuromuscular junction, causing weakness and paralysis of skeletal muscle.",
        },
        {
          kind: "mcq",
          q: "Which protein structure contains the active ATPase and actin-binding sites?",
          options: ["Light meromyosin", "Tropomyosin", "Globular head of heavy meromyosin", "G-actin"],
          answer: 2,
          explain: "The globular head (part of HMM) carries ATPase activity, an ATP-binding site and active sites for actin.",
        },
        {
          kind: "mcq",
          q: "A muscle fibre is placed in a solution with plenty of ATP but no Ca²⁺. What happens?",
          options: ["It contracts strongly", "It stays relaxed because actin sites remain masked", "It goes into rigor", "Its A-band shortens"],
          answer: 1,
          explain: "Without Ca²⁺, troponin keeps masking the myosin-binding sites, so cross bridges cannot form and the fibre stays relaxed. ATP alone cannot start contraction.",
          difficulty: 3,
          hint: "Which ion removes the mask?",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [locomotion];

export const links: Record<string, string | string[]> = {
  "11:Locomotion and Movement": "c11-bio-locomotion-movement",
};
