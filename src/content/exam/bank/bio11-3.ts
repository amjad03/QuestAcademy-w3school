import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Biology bank, part 3 (NEET / KCET): Breathing and Exchange of Gases,
 * Body Fluids and Circulation, Excretory Products and their Elimination,
 * Locomotion and Movement, Neural Control and Coordination,
 * Chemical Coordination and Integration.
 * All questions are original MCQs written close to NCERT lines. `a` is the 0-based answer index.
 */

const t = String.raw;

type Q = {
  d: 1 | 2 | 3;
  t: number;
  q: string;
  o: string[];
  a: number;
  e: string;
  h?: string;
  x?: ExamId[];
};

/** Standard NEET statement-I / statement-II options. */
const ST = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/** Standard assertion–reason options. */
const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

function build(chapter: string, no: number, list: Q[]): ExamQuestion[] {
  return list.map(
    (it, i): ExamQuestion => ({
      id: `bio11-3-${no}-${String(i + 1).padStart(3, "0")}`,
      subject: "biology",
      chapter,
      grade: "11",
      exams: it.x ?? ["NEET", "KCET"],
      kind: "mcq",
      difficulty: it.d,
      idealTime: it.t,
      q: it.q,
      options: it.o,
      answer: it.a,
      explain: it.e,
      ...(it.h ? { hint: it.h } : {}),
    }),
  );
}

/* ================================================================== */
/* Chapter 14: Breathing and Exchange of Gases                         */
/* ================================================================== */

const CH14 = "Breathing and Exchange of Gases";

const ch14: Q[] = [
  {
    d: 1, t: 45,
    q: "In which of the following animals does exchange of gases take place by simple diffusion over the entire body surface?",
    o: ["Earthworm", "Cockroach", "Planaria (flatworm)", "Prawn"],
    a: 2,
    e: "Lower invertebrates such as sponges, coelenterates and flatworms exchange O₂ and CO₂ by simple diffusion over the whole body surface. Earthworms use their moist cuticle, insects (cockroach) use a network of tracheal tubes, and aquatic arthropods like prawn use gills.",
  },
  {
    d: 1, t: 45,
    q: "Which group of vertebrates can respire through both lungs and moist skin?",
    o: ["Reptiles", "Amphibians", "Birds", "Bony fishes"],
    a: 1,
    e: "Amphibians such as frogs respire through lungs and also through their moist skin (cutaneous respiration). Fishes use gills, while reptiles, birds and mammals respire only through lungs.",
  },
  {
    d: 1, t: 45,
    q: "The trachea divides into the right and left primary bronchi at the level of the:",
    o: ["5th thoracic vertebra", "7th cervical vertebra", "1st lumbar vertebra", "2nd thoracic vertebra"],
    a: 0,
    e: "The trachea is a straight tube extending up to the mid-thoracic cavity, where it divides at the level of the 5th thoracic vertebra into right and left primary bronchi.",
  },
  {
    d: 1, t: 45,
    q: "During swallowing, the glottis is covered by a thin elastic cartilaginous flap called the:",
    o: ["Larynx", "Epiglottis", "Uvula", "Pleura"],
    a: 1,
    e: "The epiglottis is a thin elastic cartilaginous flap that covers the glottis during swallowing and prevents food from entering the larynx. The larynx itself is the sound box; the pleura covers the lungs.",
  },
  {
    d: 1, t: 45,
    q: "The lungs are covered by a double-layered pleura. The fluid between the two layers:",
    o: [
      "Carries oxygen to the lung tissue",
      "Reduces friction on the lung surface",
      "Secretes surfactant into the alveoli",
      "Stores residual air",
    ],
    a: 1,
    e: "Pleural fluid lies between the two pleural membranes and reduces friction on the lung surface. The outer pleural membrane is in close contact with the thoracic lining and the inner one with the lung surface.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following parts forms the exchange (respiratory) part of the human respiratory system rather than the conducting part?",
    o: ["Trachea", "Primary bronchi", "Terminal bronchioles", "Alveoli and their ducts"],
    a: 3,
    e: "The conducting part runs from the external nostrils up to the terminal bronchioles; it transports, filters, warms and humidifies air. The alveoli and their ducts form the respiratory or exchange part, the site of actual diffusion of O₂ and CO₂.",
    h: "Exchange needs a very thin wall in contact with capillaries.",
  },
  {
    d: 2, t: 60,
    q: "The trachea, primary, secondary and tertiary bronchi and initial bronchioles are supported by:",
    o: [
      "Complete bony rings",
      "Incomplete cartilaginous rings",
      "Complete cartilaginous rings",
      "Smooth muscle bands only",
    ],
    a: 1,
    e: "These airways are supported by incomplete (C-shaped) cartilaginous rings, which keep them from collapsing while still allowing some flexibility. There are no bony rings in the airways.",
    h: "NCERT uses the word 'incomplete'.",
  },
  {
    d: 1, t: 45,
    q: "The volume of air inspired or expired during a normal respiration (tidal volume) in a healthy man is approximately:",
    o: ["1000 mL", "1200 mL", "500 mL", "2500 mL"],
    a: 2,
    e: "Tidal volume is about 500 mL, so a healthy man inspires or expires roughly 6000–8000 mL of air per minute. 1000–1100 mL is ERV, 1100–1200 mL is RV and 2500–3000 mL is IRV.",
  },
  {
    d: 2, t: 60,
    q: "Inspiration in humans is initiated by the contraction of the diaphragm, which increases the volume of the thoracic chamber in the:",
    o: ["Dorso-ventral axis", "Antero-posterior axis", "Lateral axis only", "Volume does not change"],
    a: 1,
    e: "Contraction of the dome-shaped diaphragm flattens it and increases thoracic volume in the antero-posterior axis. Contraction of the external intercostal muscles lifts the ribs and sternum, increasing volume in the dorso-ventral axis.",
    h: "Diaphragm and intercostals change different axes.",
  },
  {
    d: 2, t: 60,
    q: "Which of the following is NOT a step of respiration as listed in NCERT?",
    o: [
      "Diffusion of gases across the alveolar membrane",
      "Transport of gases by the blood",
      "Utilisation of O₂ by cells for catabolic reactions",
      "Production of surfactant by alveolar cells",
    ],
    a: 3,
    e: "NCERT lists five steps: breathing (pulmonary ventilation), diffusion across the alveolar membrane, transport of gases by blood, diffusion of O₂ and CO₂ between blood and tissues, and use of O₂ by cells for catabolic reactions with release of CO₂. Surfactant production is not one of these steps.",
    h: "Recall the five steps, from breathing to cellular respiration.",
  },
  {
    d: 2, t: 75,
    q: t`Given TV = 500 mL, IRV = 2500 mL, ERV = 1000 mL and RV = 1200 mL, the vital capacity (VC) is:`,
    o: ["4000 mL", "5200 mL", "3000 mL", "2200 mL"],
    a: 0,
    e: t`$VC = ERV + TV + IRV = 1000 + 500 + 2500 = 4000$ mL. 5200 mL is the total lung capacity (VC + RV), 3000 mL is the inspiratory capacity (TV + IRV) and 2200 mL is the functional residual capacity (ERV + RV).`,
    h: "VC = the most air you can breathe out after the deepest breath in.",
  },
  {
    d: 2, t: 75,
    q: "Functional residual capacity (FRC) is the sum of:",
    o: ["TV + ERV", "ERV + RV", "TV + IRV", "IRV + ERV + TV"],
    a: 1,
    e: "FRC is the volume of air left in the lungs after a normal expiration, so FRC = ERV + RV. TV + ERV is expiratory capacity, TV + IRV is inspiratory capacity and IRV + ERV + TV is vital capacity.",
    h: "After a normal breath out, what air is still inside?",
  },
  {
    d: 2, t: 60,
    q: "Which of the following lung volumes CANNOT be measured directly with a simple spirometer?",
    o: ["Tidal volume", "Inspiratory reserve volume", "Residual volume", "Expiratory reserve volume"],
    a: 2,
    e: "Residual volume stays in the lungs even after a forceful expiration, so it never enters the spirometer. For the same reason, capacities that include RV (FRC, TLC) cannot be measured directly either. TV, IRV and ERV are all breathed in or out and can be recorded.",
    h: "Which air never leaves the lungs?",
  },
  {
    d: 1, t: 45,
    q: "The partial pressure of oxygen (pO₂) in the alveoli is about:",
    o: ["159 mm Hg", "104 mm Hg", "95 mm Hg", "40 mm Hg"],
    a: 1,
    e: "Alveolar pO₂ is about 104 mm Hg. 159 mm Hg is atmospheric pO₂, 95 mm Hg is oxygenated blood and 40 mm Hg is deoxygenated blood and tissues.",
  },
  {
    d: 2, t: 60,
    q: "The pCO₂ values (in mm Hg) of deoxygenated blood and of alveolar air respectively are:",
    o: ["45 and 40", "40 and 45", "40 and 0.3", "95 and 40"],
    a: 0,
    e: "Deoxygenated blood has pCO₂ = 45 mm Hg and alveolar air has pCO₂ = 40 mm Hg, so CO₂ diffuses from blood into the alveoli. Atmospheric pCO₂ is only about 0.3 mm Hg.",
    h: "CO₂ must flow from blood to alveoli.",
  },
  {
    d: 2, t: 60,
    q: "Although the pCO₂ gradient between blood and alveoli (45 → 40 mm Hg) is much smaller than the pO₂ gradient, enough CO₂ diffuses out because:",
    o: [
      "CO₂ is actively pumped out by alveolar cells",
      "The solubility of CO₂ is 20–25 times higher than that of O₂",
      "CO₂ is a smaller molecule than O₂",
      "The diffusion membrane is thinner for CO₂",
    ],
    a: 1,
    e: "Solubility affects the rate of diffusion. CO₂ is 20–25 times more soluble than O₂, so the amount of CO₂ that can diffuse per unit difference in partial pressure is much higher. Gas exchange is passive diffusion; there is no pump, and the membrane is the same for both gases.",
    h: "Diffusion depends on the pressure gradient, the solubility and the membrane thickness.",
  },
  {
    d: 2, t: 60,
    q: "The diffusion membrane in the alveoli is made of three major layers. Which of the following is NOT one of them?",
    o: [
      "Thin squamous epithelium of the alveoli",
      "Endothelium of the alveolar capillaries",
      "Basement substance between them",
      "Ciliated columnar epithelium",
    ],
    a: 3,
    e: "The diffusion membrane is made of the thin squamous alveolar epithelium, the endothelium of alveolar capillaries and the basement substance between them. Its total thickness is much less than a millimetre. Ciliated epithelium lines the conducting airways, not the alveoli.",
    h: "A diffusion surface must be as thin as possible.",
  },
  {
    d: 1, t: 45,
    q: "About what percentage of O₂ is transported by RBCs in the blood?",
    o: ["3 per cent", "70 per cent", "97 per cent", "20–25 per cent"],
    a: 2,
    e: "About 97% of O₂ is carried by RBCs (as oxyhaemoglobin) and the remaining 3% is carried dissolved in plasma.",
  },
  {
    d: 1, t: 45,
    q: "The maximum number of O₂ molecules that one haemoglobin molecule can carry is:",
    o: ["One", "Two", "Four", "Eight"],
    a: 2,
    e: "Haemoglobin has four haem groups (four subunits), so each haemoglobin molecule can carry a maximum of four molecules of O₂.",
  },
  {
    d: 2, t: 75,
    q: "Which set of conditions in the alveoli favours the formation of oxyhaemoglobin?",
    o: [
      "High pO₂, high pCO₂, high H⁺, high temperature",
      "High pO₂, low pCO₂, low H⁺, low temperature",
      "Low pO₂, high pCO₂, high H⁺, high temperature",
      "Low pO₂, low pCO₂, low H⁺, low temperature",
    ],
    a: 1,
    e: "In the alveoli, high pO₂, low pCO₂, lower H⁺ concentration and lower temperature favour the binding of O₂ to haemoglobin. The opposite conditions found in the tissues (low pO₂, high pCO₂, high H⁺, higher temperature) favour dissociation of O₂.",
    h: "Think of what the lungs are like compared with active muscle.",
  },
  {
    d: 2, t: 60,
    q: "The oxygen dissociation curve of haemoglobin, obtained by plotting % saturation of Hb against pO₂, is:",
    o: ["Linear", "Hyperbolic", "Sigmoid", "Parabolic, falling at high pO₂"],
    a: 2,
    e: "The curve is sigmoid (S-shaped). It is very useful for studying the effect of factors such as pCO₂ and H⁺ concentration on the binding of O₂ with haemoglobin.",
    h: "Its shape resembles the letter S.",
  },
  {
    d: 2, t: 60,
    q: "Under normal physiological conditions, every 100 mL of oxygenated blood delivers about ____ of O₂ to the tissues.",
    o: ["4 mL", "5 mL", "20 mL", "50 mL"],
    a: 1,
    e: "Every 100 mL of oxygenated blood delivers around 5 mL of O₂ to the tissues. In contrast, every 100 mL of deoxygenated blood delivers about 4 mL of CO₂ to the alveoli; 4 mL is the tempting mix-up.",
    h: "O₂ delivered is 5 mL; CO₂ delivered is 4 mL.",
  },
  {
    d: 2, t: 60,
    q: "About 70 per cent of CO₂ is transported in the blood as:",
    o: ["Carbamino-haemoglobin", "Dissolved CO₂ in plasma", "Bicarbonate", "Carbonic acid in RBCs only"],
    a: 2,
    e: "About 70% of CO₂ is carried as bicarbonate, 20–25% as carbamino-haemoglobin in RBCs and about 7% dissolved in plasma.",
    h: "The largest share is the product of carbonic anhydrase action.",
  },
  {
    d: 2, t: 75,
    q: "The enzyme carbonic anhydrase is found in high concentration in:",
    o: ["Plasma", "RBCs", "Alveolar epithelium", "WBCs"],
    a: 1,
    e: "Carbonic anhydrase is present in very high concentration in RBCs and in minute quantities in plasma. It catalyses CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ in both directions: towards bicarbonate in the tissues and back to CO₂ in the alveoli.",
    h: "Most bicarbonate is formed inside a blood cell.",
  },
  {
    d: 3, t: 90,
    q: "In the tissues pCO₂ is high and pO₂ is low. Which of the following correctly describes what happens to CO₂ binding to haemoglobin there and in the alveoli?",
    o: [
      "More CO₂ binds in tissues; in alveoli low pCO₂ and high pO₂ cause CO₂ to dissociate from carbamino-haemoglobin",
      "Less CO₂ binds in tissues; in alveoli high pO₂ promotes more CO₂ binding",
      "CO₂ binding is independent of pO₂ and pCO₂",
      "CO₂ binds the haem iron, competing directly with O₂ in both places",
    ],
    a: 0,
    e: "Carbamino-haemoglobin formation depends on the partial pressure of CO₂; pO₂ also affects it. In tissues, high pCO₂ and low pO₂ favour more CO₂ binding. In the alveoli, low pCO₂ and high pO₂ cause CO₂ to dissociate, so it is released. CO₂ binds the protein (amino groups), not the haem iron, so option D is wrong.",
    h: "Conditions in the tissues are the opposite of those in the alveoli, for both gases.",
  },
  {
    d: 1, t: 45,
    q: "The respiratory rhythm centre is located in the:",
    o: ["Pons", "Medulla oblongata", "Hypothalamus", "Cerebellum"],
    a: 1,
    e: "The respiratory rhythm centre is present in the medulla region of the brain and is primarily responsible for the regulation of breathing. The pneumotaxic centre in the pons moderates it.",
  },
  {
    d: 2, t: 60,
    q: "A neural signal from the pneumotaxic centre can:",
    o: [
      "Increase the duration of inspiration",
      "Reduce the duration of inspiration and thereby alter the respiratory rate",
      "Stop breathing completely",
      "Directly sense the blood O₂ level",
    ],
    a: 1,
    e: "The pneumotaxic centre in the pons moderates the rhythm centre. Its neural signal reduces the duration of inspiration and thereby alters the respiratory rate. It does not sense O₂; chemoreceptors do the sensing.",
    h: "It shortens something.",
  },
  {
    d: 2, t: 60,
    q: "The chemosensitive area adjacent to the rhythm centre is highly sensitive to:",
    o: ["O₂ and CO₂", "CO₂ and hydrogen ions", "O₂ only", "Na⁺ and K⁺"],
    a: 1,
    e: "The chemosensitive area is highly sensitive to CO₂ and hydrogen ions. An increase in these activates the centre, which signals the rhythm centre to make adjustments so these substances can be eliminated. NCERT notes that the role of O₂ in regulating respiratory rhythm is quite insignificant.",
    h: "The role of O₂ is described as insignificant.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** A person holding the breath for a long time is finally forced to breathe, mainly because blood O₂ falls.
**Reason (R):** Receptors in the aortic arch and carotid artery recognise changes in CO₂ and H⁺ concentration.`,
    o: AR,
    a: 3,
    e: "A is false: the urge to breathe is driven mainly by rising CO₂ and H⁺, which the chemosensitive area and the aortic and carotid receptors detect; NCERT calls the role of O₂ quite insignificant. R is true: receptors associated with the aortic arch and carotid artery can recognise changes in CO₂ and H⁺ and send signals to the rhythm centre.",
    h: "Which gas does the brain monitor most closely?",
  },
  {
    d: 1, t: 45,
    q: "Asthma is a difficulty in breathing that causes wheezing due to:",
    o: [
      "Damage to alveolar walls",
      "Inflammation of bronchi and bronchioles",
      "Fibrosis of lung tissue due to silica",
      "Accumulation of fluid in the pleura",
    ],
    a: 1,
    e: "Asthma is a difficulty in breathing that causes wheezing due to inflammation of the bronchi and bronchioles. Damage to alveolar walls is emphysema, and fibrosis from silica or asbestos dust is an occupational disorder.",
  },
  {
    d: 2, t: 60,
    q: "Emphysema is a chronic disorder in which:",
    o: [
      "Bronchioles are inflamed",
      "Alveolar walls are damaged, so the respiratory surface decreases",
      "The diaphragm is paralysed",
      "Haemoglobin cannot bind O₂",
    ],
    a: 1,
    e: "In emphysema the alveolar walls are damaged and the respiratory surface decreases. Cigarette smoking is one of its major causes.",
    h: "Fewer, larger air spaces mean less surface.",
  },
  {
    d: 2, t: 60,
    q: "Workers in stone-grinding or stone-breaking industries may suffer serious lung damage. This occupational disorder results mainly in:",
    o: [
      "Inflammation that leads to fibrosis (proliferation of fibrous tissue) of the upper part of the lung",
      "Increase in the number of alveoli",
      "Excess surfactant production",
      "Collapse of the trachea",
    ],
    a: 0,
    e: "Long exposure to dust such as silica or asbestos gives rise to inflammation leading to fibrosis (proliferation of fibrous tissues), which causes serious lung damage. Workers in such industries should wear protective masks.",
    h: "Dust is the irritant; scar tissue is the result.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** In mammals, expiration takes place when the intra-pulmonary pressure becomes higher than the atmospheric pressure.
**Statement II:** Additional muscles in the abdomen can increase the strength of inspiration and expiration.`,
    o: ST,
    a: 0,
    e: "Both are correct. Relaxation of the diaphragm and intercostal muscles reduces the thoracic and pulmonary volume, raising intra-pulmonary pressure slightly above atmospheric pressure, so air is expelled (expiration). NCERT also states that additional muscles in the abdomen can increase the strength of inspiration and expiration.",
    h: "Air always moves from higher to lower pressure.",
  },
  {
    d: 3, t: 90,
    q: t`Match the respiratory volumes or capacities (Column I) with their values in a healthy adult (Column II):
(a) Inspiratory reserve volume — (i) 1100–1200 mL
(b) Expiratory reserve volume — (ii) 2500–3000 mL
(c) Residual volume — (iii) 500 mL
(d) Tidal volume — (iv) 1000–1100 mL`,
    o: [
      "a-ii, b-iv, c-i, d-iii",
      "a-ii, b-i, c-iv, d-iii",
      "a-iv, b-ii, c-i, d-iii",
      "a-iii, b-iv, c-i, d-ii",
    ],
    a: 0,
    e: "IRV = 2500–3000 mL, ERV = 1000–1100 mL, RV = 1100–1200 mL and TV = 500 mL. A common slip is to swap ERV and RV, which have close values; the RV is slightly larger.",
    h: "RV is slightly larger than ERV.",
  },
  {
    d: 3, t: 120,
    q: t`A person has TV = 500 mL, IRV = 3000 mL, ERV = 1100 mL and RV = 1200 mL, and breathes 14 times a minute. Which of the following is correct?`,
    o: [
      "Total lung capacity = 5800 mL; pulmonary ventilation = 7000 mL/min",
      "Total lung capacity = 4600 mL; pulmonary ventilation = 7000 mL/min",
      "Total lung capacity = 5800 mL; pulmonary ventilation = 6000 mL/min",
      "Inspiratory capacity = 4100 mL; expiratory capacity = 1600 mL",
    ],
    a: 0,
    e: t`$TLC = RV + ERV + TV + IRV = 1200 + 1100 + 500 + 3000 = 5800$ mL. Minute ventilation $= TV \times \text{rate} = 500 \times 14 = 7000$ mL/min. 4600 mL is the vital capacity (TLC without RV). Inspiratory capacity is $TV + IRV = 3500$ mL (not 4100), while expiratory capacity is $TV + ERV = 1600$ mL, so option D is wrong in its first part.`,
    h: "TLC includes RV; IC = TV + IRV.",
  },
  {
    d: 3, t: 90,
    q: t`**Statement I:** In the alveoli, pO₂ (104 mm Hg) is higher than in deoxygenated blood (40 mm Hg), so O₂ diffuses into the blood.
**Statement II:** In the tissues, pCO₂ (45 mm Hg) is lower than in oxygenated blood (40 mm Hg), so CO₂ diffuses from blood into the tissues.`,
    o: ST,
    a: 2,
    e: "Statement I is correct. Statement II is wrong: tissue pCO₂ (45 mm Hg) is higher than that of oxygenated blood (40 mm Hg), so CO₂ diffuses from the tissues into the blood, not the other way. (45 is not lower than 40.)",
    h: "Compare the numbers given in Statement II.",
  },
  {
    d: 3, t: 90,
    q: t`**Assertion (A):** A healthy human breathes 12–16 times a minute even during sleep, without conscious effort.
**Reason (R):** Human beings can moderate respiratory rhythm to suit tissue demands through the respiratory centres in the medulla and pons.`,
    o: AR,
    a: 0,
    e: "Both are true, and R explains A. Rhythmic breathing continues without conscious effort because the respiratory rhythm centre in the medulla, moderated by the pneumotaxic centre in the pons, automatically keeps up and adjusts breathing to match the body's needs.",
    h: "Who sets the rhythm when you are asleep?",
  },
];
