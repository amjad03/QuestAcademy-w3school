import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Chemical Bonding and Molecular Structure (NCERT Class 11; same title in ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-bonding",
    title: "Chemical Bonding and Molecular Structure",
    icon: "🔗",
    description: "Lewis structures and formal charge, ionic bonding and lattice enthalpy, bond parameters and resonance, dipole moment and Fajans' rules, VSEPR shapes, valence bond theory and hybridisation, molecular orbital theory and hydrogen bonding.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-bond-lewis-ionic",
        title: "Kossel–Lewis Approach, Lewis Structures and the Ionic Bond",
        summary: "Why atoms combine, the octet rule, writing Lewis structures, formal charge, the limits of the octet rule, and how ionic bonds and lattice enthalpy work.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧂",
            caption: "Table salt is a hard crystal that melts at about 800 °C, while methane is a gas even on a cold winter night. The difference is the kind of bond holding each together.",
          },
          {
            type: "text",
            md: t`Atoms combine because the combined state has **lower energy** than the separate atoms. In 1916 **Kossel** and **Lewis** independently explained this using the noble gases, which rarely react: atoms tend to gain, lose or share electrons until their outer shell looks like a noble gas, usually with eight electrons. This is the **octet rule** (two electrons, a **duplet**, for H, Li and Be).

Kossel's idea leads to the **electrovalent (ionic) bond**: one atom loses electrons, the other gains them, and the oppositely charged ions attract. Lewis's idea leads to the **covalent bond**: two atoms *share* a pair of electrons. A **Lewis symbol** shows the valence electrons as dots around the element symbol, for example N with five dots. The number of dots also tells the common **group valence**: 8 minus the dots for non-metals, equal to the dots for most metals.`,
          },
          {
            type: "heading",
            text: "Writing Lewis structures",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Add up the valence electrons of all atoms. Add one electron for each negative charge; remove one for each positive charge.",
              "Pick the central atom: usually the least electronegative atom (never H). Join each outer atom to it with a single bond (one shared pair).",
              "Complete the octets of the outer atoms with lone pairs, then place any remaining electrons on the central atom.",
              "If the central atom still lacks an octet, turn lone pairs on outer atoms into double or triple bonds.",
              "Check the total electron count and work out formal charges. The best structure has the smallest formal charges, with any negative charge on the more electronegative atom.",
            ],
          },
          {
            type: "formula",
            tex: t`\text{Formal charge} = V - L - \tfrac{1}{2}S`,
            caption: t`$V$: valence electrons of the free atom; $L$: electrons in lone pairs on that atom; $S$: electrons it shares in bonds. Formal charges in a species add up to its overall charge.`,
          },
          {
            type: "example",
            title: "Formal charges in ozone",
            problem: t`Draw a Lewis structure of ozone, $\text{O}_3$, and find the formal charge on each oxygen atom.`,
            steps: [
              "Valence electrons: 3 × 6 = 18. Arrange O–O–O with the middle O as the central atom.",
              "Two single bonds use 4 electrons; octets on the end atoms use 12 more; the last 2 sit as a lone pair on the middle O. The middle O now has only 6 electrons, so one end O gives a lone pair to make a double bond: O=O–O.",
              t`Middle O: $V = 6$, $L = 2$, $S = 6$, so formal charge $= 6 - 2 - 3 = +1$.`,
              t`Double-bonded end O: $6 - 4 - \tfrac{1}{2}(4) = 0$. Single-bonded end O: $6 - 6 - \tfrac{1}{2}(2) = -1$.`,
              t`Check: $+1 + 0 + (-1) = 0$, the charge of the neutral molecule.`,
            ],
            answer: "Formal charges are +1 on the central O, 0 on the double-bonded O and −1 on the single-bonded O.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many valence electrons must be shown in the Lewis structure of the carbonate ion, CO₃²⁻?",
                answer: 24,
                explain: "C has 4, three O atoms have 18, and the 2− charge adds 2 electrons: 4 + 18 + 2 = 24.",
              },
              {
                kind: "mcq",
                q: "What is the formal charge on N in the ammonium ion, NH₄⁺?",
                options: ["0", "+1", "−1", "+4"],
                answer: 1,
                explain: t`N has $V = 5$, no lone pairs and 8 shared electrons: $5 - 0 - 4 = +1$. It matches the overall charge because each H has formal charge 0.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Limits of the octet rule.** (1) **Incomplete octet**: the central atom has fewer than eight electrons, as in LiCl, BeH₂ and BCl₃. (2) **Odd-electron molecules**: NO and NO₂ have an odd number of electrons, so not every atom can have an octet. (3) **Expanded octet**: elements of period 3 onwards can use 3d orbitals and hold more than eight electrons, as in PF₅ (10), SF₆ (12) and H₂SO₄ (12 around S). The rule also says nothing about the **shape** of a molecule or the **energy** of its bonds, and it assumes noble gases never react, yet xenon forms XeF₂ and XeF₄.`,
          },
          {
            type: "text",
            md: t`**The ionic bond.** An ionic bond forms easily when the metal has a **low ionisation enthalpy**, the non-metal has a strongly **negative electron gain enthalpy**, and the ions pack into a crystal that releases a large **lattice enthalpy**. Forming Na⁺ and Cl⁻ from gaseous atoms actually costs energy (496 − 349 = +147 kJ mol⁻¹), so the ions alone are not stable. The crystal becomes stable because of the lattice. The **lattice enthalpy** of an ionic solid is the energy needed to separate one mole of the solid completely into gaseous ions: for NaCl it is +788 kJ mol⁻¹. It is larger for smaller ions and for higher ionic charges.`,
          },
          {
            type: "mistake",
            wrong: "Sodium gives its electron to chlorine because both atoms 'want' an octet, and this transfer by itself releases energy.",
            right: "Electron transfer from Na(g) to Cl(g) is uphill in energy. The ionic solid is stable because the attraction of ions in the crystal lattice (lattice enthalpy, 788 kJ mol⁻¹ for NaCl) more than repays that cost.",
            why: "The octet story sounds like a reason, but energy decides. The ionisation enthalpy of Na (496 kJ mol⁻¹) is larger than the energy released when Cl gains an electron (349 kJ mol⁻¹). Only the lattice makes the whole process favourable.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which way does each molecule break the octet rule?",
              groups: ["Incomplete octet", "Expanded octet", "Odd-electron molecule"],
              items: [
                { text: "BCl₃", group: 0, hint: "Boron has only three valence electrons and makes three bonds: 6 electrons." },
                { text: "BeH₂", group: 0, hint: "Two bonds around Be give only 4 electrons." },
                { text: "PF₅", group: 1, hint: "Five bonds around P: 10 electrons." },
                { text: "SF₆", group: 1, hint: "Six bonds around S: 12 electrons." },
                { text: "H₂SO₄", group: 1, hint: "In the usual structure S has two double and two single bonds: 12 electrons." },
                { text: "NO", group: 2, hint: "5 + 6 = 11 valence electrons, an odd number." },
                { text: "NO₂", group: 2, hint: "5 + 12 = 17 valence electrons." },
              ],
              explain: "Light central atoms like B and Be often fall short of eight; period 3 elements can go beyond eight; an odd total count means at least one atom cannot be paired up.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Lewis structures in board answers must show every lone pair. Write the electron count first, then the structure, then formal charges with the working. Two common mark losses: forgetting to add electrons for the charge of an ion, and putting the negative formal charge on the less electronegative atom.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`ISC also asks for the **coordinate (dative) bond**: a covalent bond in which both shared electrons come from one atom. Examples: $\text{NH}_3 + \text{H}^+ \rightarrow \text{NH}_4^+$ and $\text{H}_2\text{O} + \text{H}^+ \rightarrow \text{H}_3\text{O}^+$. Once formed it is identical to the other N–H or O–H bonds. The **Born–Haber cycle** used to find lattice enthalpy is worked out in the Thermodynamics topic.`,
          },
          {
            type: "keypoints",
            items: [
              "Atoms bond to reach lower energy; the octet rule is a useful guide, not a law.",
              t`Formal charge $= V - L - \tfrac{1}{2}S$; the best Lewis structure has the smallest formal charges.`,
              "The octet rule fails for incomplete octets (BCl₃), expanded octets (SF₆) and odd-electron molecules (NO).",
              "Ionic bonds need low ionisation enthalpy, negative electron gain enthalpy and, above all, a large lattice enthalpy.",
            ],
          },
        ],
        flashcards: [
          { front: "State the octet rule.", back: "Atoms tend to gain, lose or share electrons so that each has eight electrons in its valence shell, like a noble gas." },
          { front: "Formula for formal charge", back: t`$V - L - \tfrac{1}{2}S$ (valence electrons minus lone-pair electrons minus half the bonding electrons).` },
          { front: "Three exceptions to the octet rule", back: "Incomplete octet (BCl₃, BeH₂, LiCl), odd-electron molecules (NO, NO₂), expanded octet (PF₅, SF₆, H₂SO₄)." },
          { front: "Define lattice enthalpy.", back: "The enthalpy needed to separate one mole of an ionic solid completely into its gaseous ions. For NaCl it is 788 kJ mol⁻¹." },
          { front: "Three conditions favouring an ionic bond", back: "Low ionisation enthalpy of the metal, strongly negative electron gain enthalpy of the non-metal, high lattice enthalpy." },
          { front: "Why can S hold 12 electrons in SF₆ but O cannot do the same?", back: "S (period 3) has vacant 3d orbitals; O (period 2) has no d orbitals in its valence shell." },
          { front: "Formal charges in O₃", back: "+1 on the central O, 0 on the double-bonded O, −1 on the single-bonded O." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which molecule has an expanded octet on its central atom?",
            options: ["BF₃", "SF₆", "NH₃", "CH₄"],
            answer: 1,
            explain: "S in SF₆ has six bond pairs, 12 electrons. BF₃ is an incomplete octet; NH₃ and CH₄ obey the octet rule.",
          },
          {
            kind: "multi",
            q: "Select all the odd-electron molecules.",
            options: ["NO", "NO₂", "CO₂", "ClO₂"],
            answers: [0, 1, 3],
            explain: "Valence electrons: NO 11, NO₂ 17, CO₂ 16, ClO₂ 7 + 12 = 19. Odd totals cannot all be paired.",
          },
          {
            kind: "numeric",
            q: "In the Lewis structure of H₂SO₄ that has two S=O double bonds and two S–OH single bonds, what is the formal charge on S?",
            answer: 0,
            explain: t`S: $V = 6$, no lone pairs, 12 shared electrons. Formal charge $= 6 - 0 - 6 = 0$. (With four single bonds it would be $+2$, which is why the double-bonded structure is preferred.)`,
            difficulty: 2,
            hint: "Count six bonds around S: that is 12 shared electrons.",
          },
          {
            kind: "mcq",
            q: "Which factor does NOT favour the formation of an ionic bond?",
            options: [
              "Low ionisation enthalpy of the metal atom",
              "Strongly negative electron gain enthalpy of the non-metal",
              "High lattice enthalpy of the solid",
              "High ionisation enthalpy of the metal atom",
            ],
            answer: 3,
            explain: "A high ionisation enthalpy makes it harder to form the cation, so it works against ionic bonding.",
          },
          {
            kind: "truefalse",
            q: "Formation of Na⁺(g) and Cl⁻(g) from Na(g) and Cl(g) releases energy.",
            answer: false,
            explain: "It needs about 496 − 349 = 147 kJ mol⁻¹. The energy released when the ions form a lattice is what makes NaCl stable.",
          },
          {
            kind: "mcq",
            q: "In the best Lewis structure of the cyanate ion, OCN⁻, where should the negative formal charge sit?",
            options: ["On C", "On N", "On O", "Shared equally by C and N"],
            answer: 2,
            explain: "Negative formal charge should rest on the most electronegative atom. O is more electronegative than N and C. (A structure with −1 on N is also drawn, but the one with −1 on O is the major one.)",
            difficulty: 2,
            hint: "Compare the electronegativities of O, N and C.",
          },
          {
            kind: "mcq",
            q: "Which of these has a larger lattice enthalpy than NaCl?",
            options: ["KCl", "MgO", "NaBr", "CsCl"],
            answer: 1,
            explain: "MgO has ions with charges +2 and −2 and small radii, so the attraction is much stronger. KCl, NaBr and CsCl have larger ions with the same single charges.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-bond-parameters-polarity",
        title: "Bond Parameters, Resonance and Polarity of Bonds",
        summary: "Bond length, bond angle, bond enthalpy and bond order; resonance structures and the resonance hybrid; polar bonds, dipole moment, and Fajans' rules for covalent character in ionic bonds.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Every covalent bond can be described by a few measurable numbers, the **bond parameters**. They let chemists compare bonds: which is shorter, which is stronger, which is more polar. These numbers are measured by spectroscopy, X-ray and electron diffraction.",
          },
          {
            type: "table",
            headers: ["Parameter", "Meaning", "Useful trend"],
            rows: [
              ["Bond length", "Equilibrium distance between the nuclei of two bonded atoms", "Triple < double < single: C≡C 120 pm, C=C 134 pm, C–C 154 pm"],
              ["Bond angle", "Angle between the orbitals holding the bond pairs around a central atom", "Tells the shape: 104.5° in H₂O, 107° in NH₃"],
              ["Bond enthalpy", "Energy needed to break one mole of a given bond in gaseous molecules", "H–H 435.8, O=O 498, N≡N 946 kJ mol⁻¹"],
              ["Bond order", "Number of bonds between two atoms in a molecule", "Higher bond order: shorter and stronger bond"],
            ],
          },
          {
            type: "text",
            md: t`For a molecule with several bonds of the same kind, such as the two O–H bonds in water, breaking the first and the second bond needs different energies. We then use the **mean (average) bond enthalpy**. **Isoelectronic** molecules and ions (same number of electrons) often have the same bond order: N₂, CO and NO⁺ all have bond order 3; F₂ and O₂²⁻ both have bond order 1.`,
          },
          {
            type: "heading",
            text: "Resonance",
          },
          {
            type: "text",
            md: t`Sometimes one Lewis structure cannot explain the facts. In ozone, both O–O bonds are 128 pm long, between a typical O–O single bond (148 pm) and O=O double bond (121 pm). We draw two **resonance structures** (canonical forms) and say the real molecule is the **resonance hybrid** of both. The hybrid is a single structure; the molecule does not flip between the forms. The hybrid is lower in energy than any one canonical form; the difference is the **resonance energy**. Carbonate (three forms), nitrate (three forms), CO₂ and benzene are other standard examples.`,
          },
          {
            type: "example",
            title: "Bond order in the carbonate ion",
            problem: "The carbonate ion, CO₃²⁻, is drawn as three resonance structures, each with one C=O and two C–O⁻ bonds. Find the C–O bond order in the resonance hybrid and the average charge on each O.",
            steps: [
              "Total bonds between C and the three O atoms in any one structure: 2 + 1 + 1 = 4.",
              "In the hybrid all three C–O bonds are identical, so bond order = 4 ÷ 3 = 1.33.",
              "The total charge of −2 is spread over three equivalent O atoms: average charge = −2/3 on each O.",
            ],
            answer: "C–O bond order 4/3 ≈ 1.33; each O carries −2/3 on average. All three C–O bonds have the same length.",
          },
          {
            type: "heading",
            text: "Polarity and dipole moment",
          },
          {
            type: "text",
            md: t`In H₂ or Cl₂ the shared pair is held equally: a **non-polar covalent bond**. In HF the more electronegative F pulls the pair towards itself, so F carries a partial negative charge $\delta^-$ and H a partial positive charge $\delta^+$: a **polar covalent bond**. The size of the polarity is measured by the **dipole moment**, a vector drawn (in the convention NCERT uses) as a crossed arrow pointing from the positive end towards the negative end. For a molecule, the dipole moment is the vector sum of the bond dipoles and any lone-pair contributions, so it depends on **shape**.`,
          },
          {
            type: "formula",
            tex: t`\mu = q \times d \qquad 1\ \text{D} = 3.33564 \times 10^{-30}\ \text{C m}`,
            caption: "μ: dipole moment; q: magnitude of the separated charge; d: distance between the charges. The unit used in chemistry is the debye (D).",
          },
          {
            type: "table",
            headers: ["Molecule", "Shape", "Dipole moment / D", "Reason"],
            rows: [
              ["BeF₂, CO₂", "Linear", "0", "Two equal bond dipoles point opposite ways"],
              ["BF₃", "Trigonal planar", "0", "Three equal dipoles at 120° cancel"],
              ["CH₄, CCl₄", "Tetrahedral", "0", "Four equal dipoles cancel"],
              ["H₂O", "Bent", "1.85", "Two O–H dipoles add; lone pairs add to it"],
              ["NH₃", "Trigonal pyramidal", "1.47", "Lone-pair dipole and N–H dipoles point the same way"],
              ["NF₃", "Trigonal pyramidal", "0.23", "Lone-pair dipole opposes the N–F dipoles"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which molecule has a zero dipole moment even though its bonds are polar?",
                options: ["H₂O", "NH₃", "BF₃", "HCl"],
                answer: 2,
                explain: "BF₃ is trigonal planar: three equal B–F dipoles at 120° add to zero. The others have shapes in which the dipoles do not cancel.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Partial covalent character in ionic bonds (Fajans' rules).** A small, highly charged cation pulls the electron cloud of a nearby anion towards itself; this distortion is **polarisation**. The more the anion is polarised, the more covalent the bond. Covalent character is greater when: (1) the **cation is small**; (2) the **anion is large**; (3) the **charges on the ions are high**; (4) the cation has a **pseudo-noble-gas configuration** ($n$s$^2$$n$p$^6$$n$d$^{10}$, such as Cu⁺ or Ag⁺), because d electrons shield the nucleus poorly. So LiCl is more covalent than NaCl, LiI more than LiF, AlCl₃ more than NaCl, and CuCl more than NaCl.`,
          },
          {
            type: "mistake",
            wrong: "F is more electronegative than H, so the N–F bonds in NF₃ are more polar and NF₃ must have a larger dipole moment than NH₃.",
            right: "NF₃ (0.23 D) has a much smaller dipole moment than NH₃ (1.47 D). In NH₃ the lone pair and the three N–H bond dipoles point the same way; in NF₃ the N–F dipoles point away from N, opposite to the lone-pair dipole, so they partly cancel.",
            why: "Bond polarity is only part of the story. A molecular dipole is a vector sum, and lone pairs on the central atom also contribute. Always draw the arrows on the actual shape.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does the molecule have a dipole moment?",
              groups: ["Zero dipole moment", "Non-zero dipole moment"],
              items: [
                { text: "CO₂", group: 0, hint: "Linear: the two C=O dipoles cancel." },
                { text: "CCl₄", group: 0, hint: "Four equal C–Cl dipoles in a tetrahedron cancel." },
                { text: "p-dichlorobenzene", group: 0, hint: "The two C–Cl dipoles are opposite each other." },
                { text: "BF₃", group: 0, hint: "Trigonal planar with three equal dipoles." },
                { text: "H₂O", group: 1, hint: "Bent shape: the dipoles add." },
                { text: "CHCl₃", group: 1, hint: "One C–H and three C–Cl bonds are not equal, so they do not cancel." },
                { text: "SO₂", group: 1, hint: "Bent, with a lone pair on S." },
                { text: "NH₃", group: 1, hint: "Pyramidal with a lone pair." },
              ],
              explain: "Polar bonds give a zero dipole only when the shape is symmetric and all the outer atoms are the same. A lone pair on the central atom usually makes the shape unsymmetric.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked 'Why does BeF₂ have zero dipole moment while H₂O has 1.85 D?', the marks are for the shapes (linear versus bent) and a sketch of the bond dipole arrows. For resonance questions, draw every canonical form with lone pairs and charges, and state that the hybrid is a single real structure.",
          },
          {
            type: "keypoints",
            items: [
              "Higher bond order means shorter and stronger bonds; isoelectronic species often share bond orders (N₂, CO, NO⁺: 3).",
              "Resonance: the real molecule is one hybrid of the canonical forms, more stable than any of them; it does not oscillate.",
              t`Dipole moment $\mu = q \times d$ (in debye) is a vector; symmetric shapes (CO₂, BF₃, CH₄) give zero.`,
              "Fajans' rules: small or highly charged cations, large anions and pseudo-noble-gas cations increase covalent character.",
            ],
          },
        ],
        flashcards: [
          { front: "Bond order and bond length", back: "The higher the bond order, the shorter (and stronger) the bond." },
          { front: "Define resonance energy.", back: "The difference in energy between the most stable canonical structure and the real resonance hybrid." },
          { front: "C–O bond order in CO₃²⁻ and NO₃⁻", back: "4/3 ≈ 1.33 in both." },
          { front: "Unit and value of the debye", back: t`1 D $= 3.33564 \times 10^{-30}$ C m.` },
          { front: "Why is μ(NH₃) > μ(NF₃)?", back: "In NH₃ the lone-pair dipole adds to the N–H dipoles; in NF₃ it opposes the N–F dipoles." },
          { front: "Fajans' rules in one line", back: "Small, highly charged cation + large, highly charged anion (and pseudo-noble-gas cations) → more covalent character." },
          { front: "Which is more covalent: NaCl or CuCl?", back: "CuCl. Cu⁺ (3d¹⁰) has a pseudo-noble-gas configuration and polarises Cl⁻ more than Na⁺ of similar size." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which compound has the greatest covalent character?",
            options: ["NaCl", "LiF", "LiI", "KF"],
            answer: 2,
            explain: "Li⁺ is the smallest cation and I⁻ the largest, most polarisable anion of the set, so LiI is the most covalent.",
          },
          {
            kind: "mcq",
            q: "Which species has the same bond order as N₂?",
            options: ["O₂", "CO", "F₂", "O₂²⁻"],
            answer: 1,
            explain: "CO is isoelectronic with N₂ (14 electrons) and has a triple bond. O₂ has bond order 2; F₂ and O₂²⁻ have 1.",
          },
          {
            kind: "truefalse",
            q: "The ozone molecule spends half its time as one resonance structure and half as the other.",
            answer: false,
            explain: "Resonance structures are only drawings. The real molecule is a single hybrid in which both O–O bonds are identical (128 pm).",
          },
          {
            kind: "numeric",
            q: t`Water has a dipole moment of 1.85 D. Express it in units of $10^{-30}$ C m (two decimal places).`,
            answer: 6.17,
            tolerance: 0.02,
            unit: "× 10⁻³⁰ C m",
            explain: t`$1.85 \times 3.33564 \times 10^{-30} = 6.17 \times 10^{-30}$ C m.`,
          },
          {
            kind: "multi",
            q: "According to Fajans' rules, which of these increase the covalent character of an ionic bond?",
            options: ["Smaller cation", "Larger cation", "Larger anion", "Higher charge on the cation", "Cation with a noble gas configuration rather than an 18-electron outer shell"],
            answers: [0, 2, 3],
            explain: "Small, highly charged cations polarise strongly and large anions are easily polarised. A pseudo-noble-gas (18-electron) cation polarises MORE than a noble-gas cation, so the last option works the wrong way.",
            difficulty: 2,
            hint: "Think about which cation pulls harder and which anion distorts more easily.",
          },
          {
            kind: "mcq",
            q: "The C–C bond length in benzene (139 pm) lies between those of ethane and ethene. Which idea explains this?",
            options: ["Hydrogen bonding", "Resonance", "Expanded octet", "Polarisation of the C–C bond"],
            answer: 1,
            explain: "Benzene is a resonance hybrid of two Kekulé structures, so each C–C bond has bond order 1.5, between a single and a double bond.",
          },
          {
            kind: "mcq",
            q: "Arrange the dipole moments correctly.",
            options: ["NH₃ > NF₃ > BF₃", "NF₃ > NH₃ > BF₃", "BF₃ > NH₃ > NF₃", "NH₃ = NF₃ > BF₃"],
            answer: 0,
            explain: "NH₃ 1.47 D, NF₃ 0.23 D, BF₃ 0 (symmetric trigonal planar).",
          },
          {
            kind: "mcq",
            q: "Which is the correct order of C–O bond length?",
            options: ["CO < CO₂ < CO₃²⁻", "CO₃²⁻ < CO₂ < CO", "CO₂ < CO < CO₃²⁻", "CO < CO₃²⁻ < CO₂"],
            answer: 0,
            explain: "Bond orders: CO 3, CO₂ 2, CO₃²⁻ 1.33. A higher bond order gives a shorter bond.",
            difficulty: 2,
            hint: "Find the bond order in each species first.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-bond-vsepr-hybridisation",
        title: "VSEPR Theory, Valence Bond Theory and Hybridisation",
        summary: "Predicting shapes from electron pairs with VSEPR, how orbital overlap forms sigma and pi bonds, and the hybridisation schemes sp, sp², sp³, sp³d and sp³d².",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: t`Lewis structures do not give shapes. **Valence Shell Electron Pair Repulsion (VSEPR) theory** (Sidgwick and Powell, refined by Nyholm and Gillespie) does. Its main ideas: the shape depends on the number of **electron pairs** (bonded and lone) around the central atom; the pairs repel each other and sit as far apart as possible; a multiple bond counts as one super-pair; and **lone pairs repel more** than bond pairs because they are held by only one nucleus and spread out more.`,
          },
          {
            type: "list",
            items: [
              "Order of repulsion: lone pair–lone pair > lone pair–bond pair > bond pair–bond pair.",
              "Lone pairs squeeze bond angles: CH₄ 109.5°, NH₃ 107°, H₂O 104.5°.",
              "In a trigonal bipyramid, lone pairs always take equatorial positions (they have more room there).",
              "The shape names only the positions of atoms, not of lone pairs.",
            ],
          },
          {
            type: "table",
            headers: ["Electron pairs", "Bond pairs", "Lone pairs", "Shape", "Example"],
            rows: [
              ["2", "2", "0", "Linear (180°)", "BeCl₂, CO₂"],
              ["3", "3", "0", "Trigonal planar (120°)", "BF₃"],
              ["3", "2", "1", "Bent", "SO₂, O₃"],
              ["4", "4", "0", "Tetrahedral (109.5°)", "CH₄, NH₄⁺"],
              ["4", "3", "1", "Trigonal pyramidal", "NH₃"],
              ["4", "2", "2", "Bent", "H₂O"],
              ["5", "5", "0", "Trigonal bipyramidal (120° and 90°)", "PCl₅"],
              ["5", "4", "1", "See-saw", "SF₄"],
              ["5", "3", "2", "T-shaped", "ClF₃"],
              ["5", "2", "3", "Linear", "XeF₂, I₃⁻"],
              ["6", "6", "0", "Octahedral (90°)", "SF₆"],
              ["6", "5", "1", "Square pyramidal", "BrF₅"],
              ["6", "4", "2", "Square planar", "XeF₄"],
            ],
          },
          {
            type: "example",
            title: "Shape of ClF₃",
            problem: "Use VSEPR theory to predict the shape of chlorine trifluoride, ClF₃.",
            steps: [
              "Cl has 7 valence electrons. Three are used in three Cl–F bonds, leaving 4 electrons = 2 lone pairs.",
              "Total electron pairs = 3 bond pairs + 2 lone pairs = 5, so the pairs point to the corners of a trigonal bipyramid.",
              "The two lone pairs take equatorial positions to reduce lone pair–lone pair repulsion. The three F atoms sit in the two axial positions and one equatorial position.",
              "The atoms form a T; lone-pair repulsion bends the axial F atoms slightly towards the equatorial F (F–Cl–F a little less than 90°).",
            ],
            answer: "ClF₃ is T-shaped (slightly bent T).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "What is the shape of SF₄?",
                options: ["Tetrahedral", "Square planar", "See-saw", "Trigonal pyramidal"],
                answer: 2,
                explain: "S has 4 bond pairs and 1 lone pair (5 pairs). The lone pair takes an equatorial position of the trigonal bipyramid, leaving a see-saw shape.",
              },
            ],
          },
          {
            type: "heading",
            text: "Valence bond theory and orbital overlap",
          },
          {
            type: "text",
            md: t`**Valence bond theory** (Heitler, London, Pauling) explains a bond as the **overlap** of half-filled atomic orbitals of opposite spin. As two H atoms approach, nucleus–electron attraction lowers the energy and nucleus–nucleus and electron–electron repulsion raise it. Energy is lowest at 74 pm: this is the bond length of H₂, and 435.8 kJ mol⁻¹ is released per mole of bonds formed. Greater overlap gives a stronger bond.

Overlap can be **positive** (same phase, bonding), **negative** (opposite phase, no bond) or **zero** (orbitals at right angles). Two kinds of covalent bond result: a **sigma (σ) bond** from end-to-end (head-on) overlap along the internuclear axis (s–s, s–p, p–p), and a **pi (π) bond** from side-wise overlap of parallel p orbitals above and below the axis.`,
          },
          {
            type: "table",
            headers: ["Sigma (σ) bond", "Pi (π) bond"],
            rows: [
              ["Head-on overlap along the internuclear axis", "Side-wise overlap of parallel p orbitals"],
              ["Larger overlap: stronger", "Smaller overlap: weaker"],
              ["Electron density on the axis; free rotation possible", "Electron density above and below the axis; no free rotation"],
              ["Every single bond; one bond in every multiple bond", "The second and third bonds in double and triple bonds"],
            ],
          },
          {
            type: "heading",
            text: "Hybridisation",
          },
          {
            type: "text",
            md: t`Valence bond theory with plain s and p orbitals cannot explain why the four C–H bonds in CH₄ are identical and 109.5° apart. Pauling's answer is **hybridisation**: atomic orbitals of similar energy on the *same* atom mix to give an equal number of identical **hybrid orbitals**, which point in fixed directions and overlap better than pure orbitals. Only orbitals of similar energy mix; lone pairs can occupy hybrid orbitals; half-filled orbitals need not be the only ones involved (in NH₃ and H₂O filled orbitals also mix).`,
          },
          {
            type: "table",
            headers: ["Hybridisation", "Orbitals mixed", "Geometry of hybrids", "Angle", "Examples"],
            rows: [
              ["sp", "one s + one p", "Linear", "180°", "BeCl₂, C₂H₂"],
              ["sp²", "one s + two p", "Trigonal planar", "120°", "BCl₃, C₂H₄"],
              ["sp³", "one s + three p", "Tetrahedral", "109.5°", "CH₄, NH₃, H₂O, C₂H₆"],
              [t`sp$^3$d`, t`s + three p + d$_{z^2}$`, "Trigonal bipyramidal", "120° and 90°", "PCl₅"],
              [t`sp$^3$d$^2$`, t`s + three p + d$_{z^2}$ + d$_{x^2-y^2}$`, "Octahedral", "90°", "SF₆"],
            ],
          },
          {
            type: "example",
            title: "Counting sigma and pi bonds, and why PCl₅ is reactive",
            problem: "(a) Give the hybridisation of carbon and the number of σ and π bonds in ethene (C₂H₄) and ethyne (C₂H₂). (b) Why are the axial P–Cl bonds of PCl₅ longer than the equatorial ones?",
            steps: [
              "(a) Ethene: each C uses three sp² hybrids for one C–C and two C–H σ bonds; the unhybridised 2p orbitals overlap side-wise to form one π bond. Total: 5 σ, 1 π.",
              "Ethyne: each C uses two sp hybrids for one C–C and one C–H σ bond; two unhybridised p orbitals on each C form two π bonds at right angles. Total: 3 σ, 2 π.",
              "(b) In PCl₅ (sp³d), each axial Cl has three equatorial bond pairs at 90° to it, while each equatorial Cl has only two axial pairs at 90°. Axial bond pairs feel more repulsion.",
              "So axial bonds (about 240 pm) are longer and weaker than equatorial bonds (about 202 pm), which makes PCl₅ reactive.",
            ],
            answer: "Ethene: sp², 5 σ + 1 π. Ethyne: sp, 3 σ + 2 π. PCl₅'s axial bonds are longer because they suffer more bond pair–bond pair repulsion.",
          },
          {
            type: "mistake",
            wrong: "NH₃ has three bonds, so nitrogen is sp² hybridised and the molecule is trigonal planar.",
            right: "N in NH₃ has three bond pairs and one lone pair: four electron pairs, so it is sp³ hybridised. The electron-pair geometry is tetrahedral and the shape, which names only atom positions, is trigonal pyramidal.",
            why: "Learners count only bonds. Hybridisation counts every electron pair on the central atom (σ bonds + lone pairs). π bonds and atoms do not decide it.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each molecule with its shape.",
              pairs: [
                ["XeF₄", "Square planar"],
                ["SF₄", "See-saw"],
                ["ClF₃", "T-shaped"],
                ["NH₃", "Trigonal pyramidal"],
                ["XeF₂", "Linear"],
                ["BrF₅", "Square pyramidal"],
              ],
              explain: "Count bond pairs and lone pairs on the central atom first; the total gives the electron geometry, and the lone pairs carve the final shape out of it.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 'shape and hybridisation' answer, write four lines: valence electrons of the central atom, bond pairs and lone pairs, hybridisation, shape with bond angle. Draw orbital box diagrams for the ground, excited and hybridised states when the question says 'explain the formation'. Do not use the word 'tetrahedral' for the shape of NH₃ or H₂O.",
          },
          {
            type: "keypoints",
            items: [
              "VSEPR: count all electron pairs on the central atom; lone pairs repel most and go equatorial in a trigonal bipyramid.",
              "σ bonds come from head-on overlap and are stronger; π bonds come from side-wise p–p overlap.",
              "sp 180°, sp² 120°, sp³ 109.5°, sp³d trigonal bipyramidal, sp³d² octahedral.",
              "Hybridisation number = σ bonds + lone pairs on the central atom.",
            ],
          },
        ],
        flashcards: [
          { front: "VSEPR order of repulsion", back: "lone pair–lone pair > lone pair–bond pair > bond pair–bond pair." },
          { front: "Bond angles of CH₄, NH₃, H₂O", back: "109.5°, 107°, 104.5°. Each lone pair squeezes the angle more." },
          { front: "Shape of XeF₄ and its hybridisation", back: "Square planar; sp³d² with two lone pairs." },
          { front: "Shape of I₃⁻", back: "Linear: 2 bond pairs and 3 equatorial lone pairs on the central I (sp³d)." },
          { front: "Which d orbital is used in sp³d hybridisation?", back: t`d$_{z^2}$. sp$^3$d$^2$ uses d$_{z^2}$ and d$_{x^2-y^2}$.` },
          { front: "σ and π bonds in ethyne", back: "3 σ (one C–C, two C–H) and 2 π." },
          { front: "Why is a σ bond stronger than a π bond?", back: "Head-on overlap along the axis is larger than side-wise overlap." },
          { front: "Why is PCl₅ reactive?", back: "Its two axial P–Cl bonds are longer and weaker than the three equatorial ones because of greater bond-pair repulsion." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is the hybridisation of the central atom in SF₆?",
            options: ["sp³", "sp³d", "sp³d²", "dsp²"],
            answer: 2,
            explain: "S has six bond pairs and no lone pairs: six electron pairs → sp³d² (octahedral).",
          },
          {
            kind: "mcq",
            q: "Which molecule is bent with an sp² central atom?",
            options: ["H₂O", "SO₂", "CO₂", "BeCl₂"],
            answer: 1,
            explain: "S in SO₂ has two σ bonds and one lone pair (3 pairs, sp²), so the shape is bent. H₂O is bent too but its O is sp³; CO₂ and BeCl₂ are linear.",
            difficulty: 2,
            hint: "Count σ bonds plus lone pairs on the central atom.",
          },
          {
            kind: "numeric",
            q: "How many π bonds are there in a molecule of buta-1,3-diene, CH₂=CH–CH=CH₂?",
            answer: 2,
            explain: "There are two C=C double bonds, each with one π bond. (It has 9 σ bonds.)",
          },
          {
            kind: "truefalse",
            q: "In a trigonal bipyramidal electron arrangement, lone pairs prefer axial positions.",
            answer: false,
            explain: "Lone pairs go equatorial: there they have only two neighbours at 90°, compared with three for an axial position.",
          },
          {
            kind: "mcq",
            q: "Arrange in decreasing bond angle: CH₄, NH₃, H₂O.",
            options: ["CH₄ > NH₃ > H₂O", "H₂O > NH₃ > CH₄", "NH₃ > CH₄ > H₂O", "CH₄ = NH₃ = H₂O"],
            answer: 0,
            explain: "All are sp³. Zero, one and two lone pairs respectively: 109.5° > 107° > 104.5°.",
          },
          {
            kind: "mcq",
            q: "Which overlap gives a π bond?",
            options: ["s with s", "s with p along the axis", "p with p head-on", "p with p side-wise"],
            answer: 3,
            explain: "π bonds form only by side-wise overlap of parallel p orbitals. The other three give σ bonds.",
          },
          {
            kind: "mcq",
            q: "Which pair has the same shape?",
            options: ["XeF₂ and CO₂", "SF₄ and CH₄", "NH₃ and BF₃", "XeF₄ and CCl₄"],
            answer: 0,
            explain: "XeF₂ (2 bp + 3 lp) and CO₂ (2 σ, no lp) are both linear. SF₄ is see-saw, NH₃ pyramidal, XeF₄ square planar.",
            difficulty: 2,
            hint: "Shape names the atom positions only; lone pairs can still give a familiar shape.",
          },
        ],
      },

      /* ---------------- Lesson 4 ---------------- */
      {
        slug: "c11-che-bond-mot-hbond",
        title: "Molecular Orbital Theory and Hydrogen Bonding",
        summary: "Building molecular orbitals by LCAO, the energy orders for homonuclear diatomics, bond order and magnetic behaviour from electronic configurations, and hydrogen bonding with its effects.",
        minutes: 25,
        xp: 60,
        blocks: [
          {
            type: "text",
            md: t`Liquid oxygen sticks between the poles of a strong magnet: O₂ is **paramagnetic**, so it has unpaired electrons. Its Lewis structure (O=O with all electrons paired) cannot explain this. **Molecular orbital theory** (Hund and Mulliken) can. In MOT, electrons in a molecule belong to **molecular orbitals** that spread over the whole molecule, formed by the **linear combination of atomic orbitals (LCAO)**.`,
          },
          {
            type: "list",
            items: [
              "Two atomic orbitals combine to give two molecular orbitals: a **bonding MO** (lower energy, electron density between the nuclei) and an **antibonding MO** (higher energy, marked *, a node between the nuclei).",
              "Atomic orbitals combine only if they have similar energy, the same symmetry about the molecular axis, and overlap well. So 1s combines with 1s, and 2pz (along the axis) with 2pz, but not 2pz with 2px.",
              "MOs fill by the aufbau principle, Pauli's exclusion principle and Hund's rule, just like atomic orbitals.",
            ],
          },
          {
            type: "text",
            md: t`Two energy orders are used (z is the internuclear axis). **For B₂, C₂ and N₂ (up to 14 electrons):** σ1s < σ*1s < σ2s < σ*2s < (π2p$_x$ = π2p$_y$) < σ2p$_z$ < (π*2p$_x$ = π*2p$_y$) < σ*2p$_z$. **For O₂, F₂ (and Ne₂):** σ2p$_z$ comes *below* the π2p pair: … σ*2s < σ2p$_z$ < (π2p$_x$ = π2p$_y$) < (π*2p$_x$ = π*2p$_y$) < σ*2p$_z$. The switch happens because in the lighter atoms 2s and 2p are close in energy and mix, pushing σ2p$_z$ up.`,
          },
          {
            type: "formula",
            tex: t`\text{Bond order} = \tfrac{1}{2}\,(N_b - N_a)`,
            caption: t`$N_b$: electrons in bonding MOs; $N_a$: electrons in antibonding MOs. A positive bond order means a stable molecule; zero means it does not exist. Any unpaired electron makes the species paramagnetic.`,
          },
          {
            type: "table",
            headers: ["Molecule", "Electrons", "Bond order", "Magnetic behaviour"],
            rows: [
              ["H₂", "2", "1", "Diamagnetic"],
              ["He₂", "4", "0", "Does not exist"],
              ["Li₂", "6", "1", "Diamagnetic"],
              ["Be₂", "8", "0", "Does not exist"],
              ["B₂", "10", "1", "Paramagnetic (2 unpaired in π2p)"],
              ["C₂", "12", "2", "Diamagnetic"],
              ["N₂", "14", "3", "Diamagnetic"],
              ["O₂", "16", "2", "Paramagnetic (2 unpaired in π*2p)"],
              ["F₂", "18", "1", "Diamagnetic"],
              ["Ne₂", "20", "0", "Does not exist"],
            ],
          },
          {
            type: "example",
            title: "O₂ and its ions",
            problem: "Write the MO configuration of O₂. Find the bond orders of O₂, O₂⁺, O₂⁻ and O₂²⁻, and say which are paramagnetic.",
            steps: [
              t`O₂ (16 e): σ1s$^2$ σ*1s$^2$ σ2s$^2$ σ*2s$^2$ σ2p$_z^2$ (π2p$_x^2$ = π2p$_y^2$) (π*2p$_x^1$ = π*2p$_y^1$).`,
              "Bonding electrons = 2 + 2 + 2 + 4 = 10; antibonding = 2 + 2 + 2 = 6. Bond order = (10 − 6)/2 = 2. The two π* electrons are unpaired (Hund's rule), so O₂ is paramagnetic.",
              "O₂⁺ removes one π* electron: (10 − 5)/2 = 2.5, one unpaired electron, paramagnetic.",
              "O₂⁻ adds one π* electron: (10 − 7)/2 = 1.5, one unpaired, paramagnetic. O₂²⁻ adds two: (10 − 8)/2 = 1, all paired, diamagnetic.",
            ],
            answer: "Bond orders: O₂⁺ 2.5 > O₂ 2 > O₂⁻ 1.5 > O₂²⁻ 1. O₂⁺, O₂ and O₂⁻ are paramagnetic; O₂²⁻ is diamagnetic. Bond length increases in the reverse order.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What is the bond order of the H₂⁺ ion?",
                answer: 0.5,
                explain: "H₂⁺ has one electron, in σ1s. Bond order = (1 − 0)/2 = 0.5, so it exists but has a weak bond.",
              },
              {
                kind: "mcq",
                q: "Which molecule is paramagnetic?",
                options: ["N₂", "C₂", "B₂", "F₂"],
                answer: 2,
                explain: "In B₂ (10 electrons, π2p below σ2pz) the last two electrons go one each into π2px and π2py, so two are unpaired.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A molecule with an even number of electrons always has all its electrons paired, so it is diamagnetic.",
            right: "O₂ (16 electrons) and B₂ (10 electrons) are paramagnetic. Their last two electrons go singly into a pair of degenerate π orbitals by Hund's rule.",
            why: "Pairing up looks natural when the count is even, but degenerate orbitals fill singly first. Only an MO diagram shows whether the highest occupied level is a degenerate pair.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Arrange from shortest to longest O–O bond.",
              items: ["O₂⁺ (bond order 2.5)", "O₂ (bond order 2)", "O₂⁻ (bond order 1.5)", "O₂²⁻ (bond order 1)"],
              explain: "Each extra electron enters an antibonding π* orbital, lowering the bond order and lengthening the bond.",
            },
          },
          {
            type: "heading",
            text: "Hydrogen bonding",
          },
          {
            type: "text",
            md: t`When H is bonded to a small, highly electronegative atom (F, O or N), the H end becomes strongly $\delta^+$ and is attracted to a lone pair on another F, O or N. This attraction, shown by a dotted line (H–F···H–F), is a **hydrogen bond**. It is much weaker than a covalent bond but stronger than ordinary van der Waals forces.

**Intermolecular** hydrogen bonds join different molecules: HF chains, water and ice, alcohols. They raise boiling points (H₂O boils at 100 °C, H₂S at about −60 °C) and explain why ice, with its open cage structure, is less dense than water. **Intramolecular** hydrogen bonds form within one molecule, as in o-nitrophenol, where the –OH hydrogen bonds to an O of the neighbouring –NO₂ group.`,
          },
          {
            type: "example",
            title: "o-Nitrophenol versus p-nitrophenol",
            problem: "o-Nitrophenol boils at a lower temperature and is steam-volatile, while p-nitrophenol has a higher boiling point. Explain.",
            steps: [
              "In o-nitrophenol the –OH and –NO₂ groups are next to each other, so an intramolecular hydrogen bond forms inside each molecule.",
              "Its –OH is now 'busy', so molecules hardly hydrogen-bond to each other. They separate easily, giving a lower boiling point and volatility in steam.",
              "In p-nitrophenol the groups are too far apart to bond within a molecule, so the –OH forms intermolecular hydrogen bonds with neighbouring molecules.",
              "Extra energy is needed to break these, so p-nitrophenol boils higher.",
            ],
            answer: "Intramolecular H-bonding (ortho) lowers the boiling point; intermolecular H-bonding (para) raises it.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "ISC also asks for the **metallic bond**: in the electron-sea model, metal atoms give up their valence electrons to a sea of electrons that moves freely through a lattice of positive ions. This explains electrical and thermal conductivity, lustre, malleability and ductility. NCERT (CBSE, Karnataka PUC) does not treat metallic bonding in this chapter.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Draw an MO energy diagram with both atoms' orbitals at the sides and the MOs in the middle, arrows for electrons, and labels. State which energy order you used and why. For hydrogen bonding answers, name the type (inter or intra) and link it to the property asked: boiling point, solubility or density.",
          },
          {
            type: "keypoints",
            items: [
              "LCAO: two atomic orbitals give one bonding and one antibonding MO; they must match in energy and symmetry.",
              "Up to N₂, π2p lies below σ2pz; for O₂ and F₂, σ2pz lies below π2p.",
              t`Bond order $= \tfrac{1}{2}(N_b - N_a)$; unpaired electrons mean paramagnetic (B₂, O₂, O₂⁺, O₂⁻).`,
              "Hydrogen bonds need H on F, O or N; intermolecular ones raise boiling points, intramolecular ones lower them.",
            ],
          },
        ],
        flashcards: [
          { front: "What does LCAO stand for?", back: "Linear combination of atomic orbitals: the way molecular orbitals are built in MOT." },
          { front: "Conditions for atomic orbitals to combine", back: "Similar energy, same symmetry about the molecular axis, and good overlap." },
          { front: "Bond order formula", back: t`$\tfrac{1}{2}(N_b - N_a)$.` },
          { front: "Why is O₂ paramagnetic?", back: "Two unpaired electrons, one each in π*2px and π*2py." },
          { front: "Bond orders of N₂, O₂, F₂", back: "3, 2, 1." },
          { front: "MO energy order up to N₂ (from σ*2s)", back: "σ*2s < (π2px = π2py) < σ2pz < (π*2px = π*2py) < σ*2pz." },
          { front: "Why is ice less dense than water?", back: "Hydrogen bonding holds ice molecules in an open cage-like structure with empty spaces." },
          { front: "Inter- or intramolecular H-bond in o-nitrophenol?", back: "Intramolecular, so it is more volatile than p-nitrophenol." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which species does not exist according to MOT?",
            options: ["He₂⁺", "Li₂", "Be₂", "H₂⁺"],
            answer: 2,
            explain: "Be₂ has 8 electrons: 4 bonding and 4 antibonding, bond order 0. He₂⁺ (0.5), Li₂ (1) and H₂⁺ (0.5) have positive bond orders.",
          },
          {
            kind: "numeric",
            q: "What is the bond order of C₂?",
            answer: 2,
            explain: "12 electrons: σ1s² σ*1s² σ2s² σ*2s² (π2px² = π2py²). Bonding 8, antibonding 4: (8 − 4)/2 = 2.",
          },
          {
            kind: "mcq",
            q: "Which has the longest bond?",
            options: ["O₂⁺", "O₂", "O₂⁻", "O₂²⁻"],
            answer: 3,
            explain: "O₂²⁻ has the lowest bond order (1), so the longest bond.",
          },
          {
            kind: "truefalse",
            q: "An antibonding molecular orbital has a node between the two nuclei.",
            answer: true,
            explain: "Destructive combination cancels the electron density between the nuclei, leaving a nodal plane there.",
          },
          {
            kind: "multi",
            q: "Select all the paramagnetic species.",
            options: ["O₂", "N₂", "O₂⁻", "F₂", "B₂"],
            answers: [0, 2, 4],
            explain: "O₂ has 2 unpaired, O₂⁻ has 1, B₂ has 2. N₂ and F₂ have all electrons paired.",
            difficulty: 2,
            hint: "Write the last few electrons of each MO configuration.",
          },
          {
            kind: "mcq",
            q: "Which compound shows intramolecular hydrogen bonding?",
            options: ["Water", "Ethanol", "o-Nitrophenol", "p-Nitrophenol"],
            answer: 2,
            explain: "Only in o-nitrophenol are the –OH and –NO₂ groups close enough to bond within the same molecule.",
          },
          {
            kind: "mcq",
            q: "Why does H₂O boil at 100 °C while H₂S, a heavier molecule, is a gas at room temperature?",
            options: [
              "The O–H bond is stronger than the S–H bond",
              "Water molecules are held by intermolecular hydrogen bonds",
              "H₂S is linear and H₂O is bent",
              "Water has more lone pairs than H₂S",
            ],
            answer: 1,
            explain: "Boiling separates molecules, not atoms. O is small and very electronegative, so water forms strong intermolecular hydrogen bonds; S is too large and not electronegative enough.",
          },
          {
            kind: "mcq",
            q: "For which molecule is the energy order with σ2pz BELOW π2p used?",
            options: ["B₂", "C₂", "N₂", "O₂"],
            answer: 3,
            explain: "The order with σ2pz below π2p applies to O₂, F₂ and Ne₂. For B₂, C₂ and N₂, π2p lies below σ2pz.",
          },
        ],
      },

      /* ---------------- Lesson 5: Exam edge ---------------- */
      {
        slug: "c11-che-bond-exam-edge",
        title: "Exam edge: Chemical Bonding for JEE, NEET, KCET and COMEDK",
        summary: "The bonding patterns exams test every year: the hybridisation shortcut, lone-pair counting, MO bond order and magnetism of ions, percentage ionic character, and the classic traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "**What gets asked.** Chemical bonding is one of the highest-weight Class 11 chapters and also underpins organic and inorganic chemistry in Class 12. NEET and KCET: shapes and hybridisation of given species, bond order and magnetism from MOT, dipole moment comparisons, hydrogen bonding effects, and Fajans' rules. JEE Main: the same with ions and interhalogens, bond angle orders, and percentage ionic character. JEE Advanced: counting lone pairs, 90° angles or σ/π bonds across several species, and 'select all correct statements' questions. COMEDK follows JEE Main with simpler species.",
          },
          {
            type: "table",
            headers: ["Shortcut", "When it is safe to use"],
            rows: [
              [t`$H = \tfrac{1}{2}(V + M - C + A)$`, "Central atom of a main-group molecule or ion. V: valence electrons of the central atom; M: number of monovalent atoms (H, halogens) attached; C: positive charge; A: negative charge. Do not count O or S atoms in M."],
              ["H = σ bonds + lone pairs on the central atom", "Always works once the Lewis structure is right. Use it when O or other divalent atoms are present."],
              ["Electron count → bond order: 14 e gives 3, 16 e gives 2, 15 e and 13 e give 2.5, 17 e gives 1.5", "Homonuclear and simple heteronuclear diatomics of period 2 (N₂, CO, NO, CN⁻, O₂ and their ions)."],
              ["Fewer lone pairs, more electronegative central atom → larger bond angle", "Comparing hydrides with the same hybridisation, such as NH₃ > PH₃ or H₂O > H₂S."],
            ],
          },
          {
            type: "formula",
            tex: t`\%\ \text{ionic character} = \frac{\mu_{\text{observed}}}{\mu_{\text{100\% ionic}}} \times 100, \qquad \mu_{\text{100\% ionic}} = e \times d`,
            caption: t`$e = 1.602 \times 10^{-19}$ C; $d$ is the bond length. Divide by $3.336 \times 10^{-30}$ C m per debye to convert.`,
          },
          {
            type: "example",
            title: "KCET / NEET level: hybridisation by the shortcut",
            problem: "Find the hybridisation and shape of XeF₄, I₃⁻ and NH₄⁺.",
            steps: [
              t`XeF₄: $H = \tfrac{1}{2}(8 + 4) = 6$ → sp³d². Four F atoms use 4 pairs, leaving 2 lone pairs → square planar.`,
              t`I₃⁻ (central I, two I atoms are monovalent): $H = \tfrac{1}{2}(7 + 2 + 1) = 5$ → sp³d. Two bond pairs and three equatorial lone pairs → linear.`,
              t`NH₄⁺: $H = \tfrac{1}{2}(5 + 4 - 1) = 4$ → sp³, four bond pairs → tetrahedral.`,
            ],
            answer: "XeF₄: sp³d², square planar. I₃⁻: sp³d, linear. NH₄⁺: sp³, tetrahedral.",
          },
          {
            type: "example",
            title: "NEET / JEE Main level: bond order and magnetism of ions",
            problem: "Find the bond order and magnetic nature of N₂⁺, N₂⁻ and NO.",
            steps: [
              "N₂⁺ has 13 electrons. It loses the σ2pz electron of N₂ (order up to 14 e): bonding 9, antibonding 4. Bond order = 5/2 = 2.5, one unpaired electron.",
              "N₂⁻ has 15 electrons. The extra electron enters π*2p: bonding 10, antibonding 5. Bond order = 2.5, one unpaired electron.",
              "NO has 7 + 8 = 15 electrons, like N₂⁻: bond order 2.5, one unpaired electron in π*2p.",
            ],
            answer: "All three have bond order 2.5 and are paramagnetic. (N₂⁺ is slightly more stable than N₂⁻, because N₂⁻ has an antibonding electron.)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which species has the same bond order as O₂⁺?",
                options: ["NO", "O₂", "F₂", "N₂"],
                answer: 0,
                explain: "O₂⁺ and NO both have 15 electrons, so both have bond order 2.5. O₂ has 2, F₂ has 1, N₂ has 3.",
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: percentage ionic character",
            problem: "HCl has a bond length of 127 pm and an observed dipole moment of 1.03 D. Find its percentage ionic character.",
            steps: [
              t`If HCl were 100% ionic: $\mu = e \times d = (1.602 \times 10^{-19}\ \text{C})(127 \times 10^{-12}\ \text{m}) = 2.035 \times 10^{-29}$ C m.`,
              t`In debye: $2.035 \times 10^{-29} / 3.336 \times 10^{-30} = 6.10$ D.`,
              t`Percentage ionic character $= (1.03/6.10) \times 100 = 16.9$.`,
            ],
            answer: "About 17% ionic character; the H–Cl bond is mainly covalent but polar.",
          },
          {
            type: "example",
            title: "JEE Advanced level: lone pairs across several species",
            problem: "Find the total number of lone pairs on the central atoms of ClF₃, BrF₅, XeF₄, SF₄ and I₃⁻ taken together.",
            steps: [
              "ClF₃: 7 valence electrons, 3 used in bonds, 4 left → 2 lone pairs.",
              "BrF₅: 7 − 5 = 2 left → 1 lone pair.",
              "XeF₄: 8 − 4 = 4 left → 2 lone pairs.",
              "SF₄: 6 − 4 = 2 left → 1 lone pair.",
              "I₃⁻: central I has 7 + 1 (charge) = 8 electrons, 2 used in bonds, 6 left → 3 lone pairs. Total = 2 + 1 + 2 + 1 + 3 = 9.",
            ],
            answer: "9 lone pairs in all.",
          },
          {
            type: "mistake",
            wrong: t`For SO₄²⁻, $H = \tfrac{1}{2}(6 + 4 + 2) = 6$, so S is sp³d² and sulfate is octahedral.`,
            right: t`O is divalent, so it is not counted in M: $H = \tfrac{1}{2}(6 + 0 + 2) = 4$ → sp³, tetrahedral. Check: four σ bonds and no lone pairs on S.`,
            why: "The shortcut counts only monovalent atoms. Counting every attached atom is the most common way it gives nonsense; always confirm with σ bonds + lone pairs.",
          },
          {
            type: "mistake",
            wrong: "In SF₄ the lone pair sits in an axial position of the trigonal bipyramid, so SF₄ is trigonal pyramidal.",
            right: "The lone pair takes an equatorial position, giving a see-saw shape with F–S–F angles below 180° and 120°.",
            why: "An axial lone pair would have three neighbours at 90°; an equatorial one has only two. Lone pairs always choose the roomier equatorial site.",
          },
          {
            type: "mistake",
            wrong: "Use the same MO order for every diatomic, so B₂ has its last two electrons paired in σ2pz and is diamagnetic.",
            right: "For B₂, C₂ and N₂, π2p lies below σ2pz. B₂'s last two electrons occupy π2px and π2py singly, so B₂ is paramagnetic.",
            why: "The paramagnetism of B₂ is experimental evidence for s–p mixing. Questions on B₂ and C₂ are set precisely to catch learners who use the O₂ order everywhere.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Is C₂ paramagnetic or diamagnetic?",
              emoji: "🧲",
              options: ["Paramagnetic, with two unpaired electrons", "Diamagnetic, with all electrons paired"],
              answer: 1,
              trap: 0,
              explain: "C₂ has 12 electrons. With π2p below σ2pz, the last four fill π2px² and π2py² completely, so all are paired. Using the O₂ order would wrongly put two electrons singly in π orbitals.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed check",
            md: "Learn the shape table (2 to 6 electron pairs) by heart: it answers most shape and hybridisation questions in seconds. For MOT, count total electrons first and use the bond-order pattern; draw the full diagram only when the question asks about magnetism near the 14-electron border (B₂, C₂, N₂⁺).",
          },
          {
            type: "keypoints",
            items: [
              t`$H = \tfrac{1}{2}(V + M - C + A)$ counts only monovalent atoms; confirm with σ bonds + lone pairs.`,
              "Bond order from electron count: 14 e → 3, 15 e → 2.5, 16 e → 2, 17 e → 1.5, 18 e → 1.",
              t`% ionic character $= \mu_{\text{obs}}/(e d) \times 100$.`,
              "Lone pairs go equatorial; B₂ is paramagnetic, C₂ diamagnetic.",
            ],
          },
        ],
        flashcards: [
          { front: "Hybridisation shortcut", back: t`$H = \tfrac{1}{2}(V + M - C + A)$; H = 2, 3, 4, 5, 6 → sp, sp², sp³, sp³d, sp³d².` },
          { front: "Bond order of NO, NO⁺ and NO⁻", back: "NO (15 e) 2.5, NO⁺ (14 e) 3, NO⁻ (16 e) 2." },
          { front: "Bond order of CN⁻ and its magnetic nature", back: "14 electrons → bond order 3, diamagnetic." },
          { front: "100% ionic dipole moment", back: t`$\mu = e \times d$, with $e = 1.602 \times 10^{-19}$ C.` },
          { front: "Bond angle order: NH₃, PH₃, H₂O, H₂S", back: "NH₃ (107°) > PH₃ (about 93.5°); H₂O (104.5°) > H₂S (about 92°)." },
          { front: "Lone pairs on central Xe in XeF₂, XeF₄", back: "3 and 2." },
          { front: "Which is more stable, N₂⁺ or N₂⁻?", back: "N₂⁺: both have bond order 2.5, but N₂⁻ has an electron in an antibonding orbital." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which species is NOT sp³ hybridised at the central atom?",
            options: ["NH₄⁺", "H₃O⁺", "BF₄⁻", "SF₄"],
            answer: 3,
            explain: t`SF₄: $\tfrac{1}{2}(6 + 4) = 5$ → sp³d. NH₄⁺: $\tfrac{1}{2}(5+4-1) = 4$; H₃O⁺: $\tfrac{1}{2}(6+3-1) = 4$; BF₄⁻: $\tfrac{1}{2}(3+4+1) = 4$.`,
            difficulty: 2,
            hint: "Apply the shortcut to each; remember to subtract for + charge and add for − charge.",
          },
          {
            kind: "multi",
            q: "Select all species with bond order 2.5.",
            options: ["NO", "O₂⁺", "N₂⁺", "CN⁻", "O₂⁻"],
            answers: [0, 1, 2],
            explain: "NO (15 e), O₂⁺ (15 e) and N₂⁺ (13 e) have bond order 2.5. CN⁻ (14 e) has 3; O₂⁻ (17 e) has 1.5.",
            difficulty: 2,
            hint: "Count electrons in each species.",
          },
          {
            kind: "numeric",
            q: "How many of these molecules have a non-zero dipole moment: CO₂, SO₂, BF₃, NF₃, CCl₄, CHCl₃, XeF₄, SF₄?",
            answer: 4,
            explain: "Non-zero: SO₂ (bent), NF₃ (pyramidal), CHCl₃ (unequal bonds), SF₄ (see-saw). Zero: CO₂, BF₃, CCl₄, XeF₄ (square planar is symmetric).",
            difficulty: 2,
            hint: "Square planar XeF₄ is symmetric; see-saw SF₄ is not.",
          },
          {
            kind: "numeric",
            q: "HF has a bond length of 92 pm and a dipole moment of 1.91 D. Find its percentage ionic character (nearest whole number).",
            answer: 43,
            tolerance: 1,
            unit: "%",
            explain: t`$\mu_{100\%} = 1.602 \times 10^{-19} \times 92 \times 10^{-12} = 1.474 \times 10^{-29}$ C m $= 4.42$ D. $1.91/4.42 \times 100 = 43\%$.`,
            difficulty: 2,
            hint: t`Find $e \times d$ in C m, then divide by $3.336 \times 10^{-30}$ to get debye.`,
          },
          {
            kind: "mcq",
            q: "Which molecule has the largest bond angle at the central atom?",
            options: ["H₂O", "NH₃", "CH₄", "PH₃"],
            answer: 2,
            explain: "CH₄ has no lone pairs (109.5°). NH₃ 107°, H₂O 104.5°, PH₃ about 93.5°.",
          },
          {
            kind: "multi",
            q: "Which statements are correct?",
            options: [
              "In PCl₅, axial bonds are longer than equatorial bonds.",
              "XeF₂ and I₃⁻ are both linear.",
              "In BrF₅ the central atom is sp³d hybridised.",
              "All F–S–F angles in SF₆ are 90° or 180°.",
            ],
            answers: [0, 1, 3],
            explain: "BrF₅ has 5 bond pairs + 1 lone pair = 6 pairs, so sp³d² (square pyramidal). The other three statements are correct.",
            difficulty: 3,
            hint: "Count electron pairs on Br in BrF₅.",
          },
          {
            kind: "numeric",
            q: "Count the total number of 90° F–X–F bond angles in one molecule of SF₆.",
            answer: 12,
            explain: "Each of the 6 F atoms makes 90° with 4 others: 6 × 4 / 2 = 12 pairs. (The other 3 pairs are at 180°; 12 + 3 = 15 = 6C2.)",
            difficulty: 3,
            hint: "Count pairs of F atoms; each pair is either 90° or 180° apart.",
          },
          {
            kind: "mcq",
            q: "Which is more covalent, and why: AgCl or NaCl? (Ag⁺ and Na⁺ are of comparable size.)",
            options: [
              "NaCl, because Na is more electropositive",
              "AgCl, because Ag⁺ has a pseudo-noble-gas (4d¹⁰) configuration that polarises Cl⁻ strongly",
              "Both are equally ionic",
              "AgCl, because Ag⁺ is much larger than Na⁺",
            ],
            answer: 1,
            explain: "d electrons shield the nuclear charge poorly, so Ag⁺ polarises the anion more than Na⁺ does. This is also why AgCl is far less soluble in water.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Chemical Bonding and Molecular Structure": "c11-che-bonding",
};
