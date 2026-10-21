import type { CourseResources } from "./types";

export const humanAnatomyResources: CourseResources = {
  course: "human-anatomy",
  caseStudies: [
    {
      slug: "marathon-runner-collapse",
      title: "The marathon runner who drank too much water",
      summary: "Physiology of fluid balance, electrolytes and the nervous system in an endurance event. (Educational case — not medical advice.)",
      units: ["nervous", "endocrine", "cardiovascular"],
      minutes: 15,
      scenario: `*This is a fictionalised teaching case for learning physiology. It is not medical advice.*

A 29-year-old amateur runner, worried about dehydration in a humid city marathon, drank a cup of plain water at **every** aid station plus extra from her own bottle — about 5 litres over 5 hours. She sweated heavily. Near the 35 km mark she felt nauseous, developed a headache and became confused, then collapsed shortly after the finish.

At the medical tent, her blood test showed a serum sodium of **124 mmol/L**. Staff noted that she had *gained* about 1.5 kg of body weight during the race.`,
      data: {
        caption: "Selected findings at the medical tent",
        headers: ["Measurement", "Runner", "Typical reference range"],
        rows: [
          ["Serum sodium", "124 mmol/L", "135–145 mmol/L"],
          ["Body-weight change during race", "+1.5 kg", "usually a small loss"],
          ["Blood glucose", "5.4 mmol/L", "~4–7 mmol/L"],
          ["Heart rate", "104 bpm", "60–100 bpm at rest"],
        ],
      },
      questions: [
        "Why does weight *gain* during a long race point to excess water intake rather than dehydration?",
        "Explain, using osmosis, what happens to brain cells when blood sodium falls quickly.",
        "Which hormone normally reduces water excretion by the kidneys, and why might it remain active during exercise?",
        "Suggest an evidence-based hydration message for amateur endurance athletes.",
      ],
      outcome: `Weight gain means more fluid went in than was lost through sweat and urine, diluting blood sodium (**exercise-associated hyponatraemia**). Water moves by osmosis from the dilute blood into cells; brain cells swell inside the rigid skull, causing headache, confusion and, in severe cases, seizures.

**ADH (vasopressin)** makes the kidneys retain water; stress, pain, nausea and exercise can keep it elevated, so the kidneys can't excrete the excess. Race medical guidance now advises drinking **to thirst** rather than on a fixed schedule. In the real cases this story is based on, treatment was given by emergency clinicians under close monitoring.`,
      takeaways: [
        "Sodium concentration, not just water volume, governs fluid shifts between compartments.",
        "The brain is especially vulnerable to swelling because the skull cannot expand.",
        "Hormonal feedback (ADH) can be overridden by non-osmotic stimuli such as exercise and stress.",
        "Physiology knowledge informs public-health messaging.",
      ],
    },
    {
      slug: "type-1-diabetes-feedback",
      title: "A broken feedback loop: diagnosing type 1 diabetes",
      summary: "How the endocrine system's glucose control fails, seen through one teenager's symptoms. (Educational case — not medical advice.)",
      units: ["endocrine", "cells-tissues"],
      minutes: 14,
      scenario: `*Fictionalised teaching case. Not medical advice.*

A 15-year-old student had been unusually thirsty for three weeks, waking at night to urinate and losing 4 kg despite eating more than usual. Her teacher noticed she seemed tired and found it hard to concentrate. Her family doctor ordered tests.`,
      data: {
        caption: "Test results",
        headers: ["Test", "Result", "Typical reference"],
        rows: [
          ["Fasting plasma glucose", "14.2 mmol/L", "< 5.6 mmol/L"],
          ["HbA1c", "10.1%", "< 5.7%"],
          ["Urine glucose", "Positive", "Negative"],
          ["Urine ketones", "Positive", "Negative"],
          ["C-peptide", "Very low", "Normal"],
        ],
      },
      questions: [
        "Describe the normal negative feedback loop that keeps blood glucose in range after a meal.",
        "Why does very low C-peptide suggest the problem is insulin *production* rather than insulin *action*?",
        "Explain why high blood glucose leads to glucose in the urine and frequent urination.",
        "Why might the body produce ketones when glucose is plentiful in the blood?",
      ],
      outcome: `Normally, rising glucose triggers β-cells in the pancreatic islets to secrete insulin, which promotes glucose uptake into muscle and fat and storage as glycogen; as glucose falls, insulin secretion falls (negative feedback). C-peptide is released in equal amounts to insulin, so very low C-peptide means the β-cells are not producing insulin — consistent with **type 1 diabetes**, an autoimmune destruction of β-cells.

When blood glucose exceeds the kidney's reabsorption threshold, glucose spills into urine and drags water with it by osmosis (polyuria → thirst). Without insulin, cells cannot take up glucose and the body breaks down fat, producing ketones. She was referred to a specialist and started insulin therapy with education on monitoring.`,
      takeaways: [
        "Homeostasis depends on intact negative feedback loops.",
        "Biomarkers like C-peptide help locate where a pathway fails.",
        "Renal thresholds explain why excess glucose appears in urine.",
        "Cells can starve in the middle of plenty when a hormone signal is missing.",
      ],
    },
  ],
  readings: {
    "cells-tissues": [
      { title: "Anatomy and Physiology 2e (OpenStax)", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Free textbook; chapters 3–4 cover cells and tissues." },
      { title: "Histology, Epithelium (StatPearls)", url: "https://www.ncbi.nlm.nih.gov/books/NBK430685/", source: "NCBI Bookshelf", type: "article", level: "intermediate", note: "Peer-reviewed clinical overview; the StatPearls collection covers every tissue type." },
      { title: "Cells (Khan Academy biology)", url: "https://www.khanacademy.org/science/biology", source: "Khan Academy", type: "course", level: "intro", note: "Cell structure and organelles." },
    ],
    cardiovascular: [
      { title: "Anatomy and Physiology 2e — the cardiovascular system", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 18–20: blood, heart, vessels." },
      { title: "Human biology: circulatory system", url: "https://www.khanacademy.org/science/biology", source: "Khan Academy", type: "course", level: "intro", note: "Videos on the cardiac cycle and blood pressure." },
      { title: "Cardiac cycle", url: "https://en.wikipedia.org/wiki/Cardiac_cycle", source: "Wikipedia", type: "article", level: "intermediate", note: "Pressure–volume changes through systole and diastole." },
    ],
    respiratory: [
      { title: "Anatomy and Physiology 2e — the respiratory system", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapter 22: ventilation and gas exchange." },
      { title: "Oxygen–haemoglobin dissociation curve", url: "https://en.wikipedia.org/wiki/Oxygen%E2%80%93hemoglobin_dissociation_curve", source: "Wikipedia", type: "article", level: "intermediate", note: "Shifts with pH, CO₂ and temperature (Bohr effect)." },
      { title: "Respiratory system (Khan Academy)", url: "https://www.khanacademy.org/science/biology", source: "Khan Academy", type: "course", level: "intro", note: "Alveoli, partial pressures and breathing control." },
    ],
    nervous: [
      { title: "Anatomy and Physiology 2e — nervous tissue", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 12–16 on neurons and the CNS." },
      { title: "Action potential", url: "https://en.wikipedia.org/wiki/Action_potential", source: "Wikipedia", type: "article", level: "intermediate", note: "Ion channels and the phases of an action potential." },
      { title: "Fundamentals of Neuroscience (HarvardX, free to audit)", url: "https://www.edx.org/learn/neuroscience", source: "edX", type: "course", level: "intermediate", note: "Free-to-audit neuroscience courses." },
    ],
    musculoskeletal: [
      { title: "Anatomy and Physiology 2e — bones & muscles", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapters 6–11." },
      { title: "Sliding filament theory", url: "https://en.wikipedia.org/wiki/Sliding_filament_theory", source: "Wikipedia", type: "article", level: "intermediate", note: "How actin and myosin produce contraction." },
      { title: "Muscles (Khan Academy)", url: "https://www.khanacademy.org/science/biology", source: "Khan Academy", type: "course", level: "intro", note: "Neuromuscular junction and contraction." },
    ],
    endocrine: [
      { title: "Anatomy and Physiology 2e — the endocrine system", url: "https://openstax.org/details/books/anatomy-and-physiology-2e", source: "OpenStax", type: "book", level: "intro", note: "Chapter 17: glands, hormones and feedback." },
      { title: "Type 1 diabetes — NIDDK overview", url: "https://www.niddk.nih.gov/health-information/diabetes", source: "US NIH (NIDDK)", type: "article", level: "intro", note: "Authoritative patient-level background." },
      { title: "Physiology, Insulin (StatPearls)", url: "https://www.ncbi.nlm.nih.gov/books/NBK534262/", source: "NCBI Bookshelf", type: "article", level: "intermediate", note: "Peer-reviewed clinical overview of insulin physiology." },
    ],
  },
  competencies: [
    { id: "cells", name: "Cells & tissues", description: "Relate cell structure to tissue function.", lessons: ["human-anatomy/cells-tissues/the-human-cell", "human-anatomy/cells-tissues/tissue-types"] },
    { id: "cardio", name: "Cardiovascular physiology", description: "Explain the heart, vessels and blood.", lessons: ["human-anatomy/cardiovascular/the-heart", "human-anatomy/cardiovascular/blood-and-vessels"] },
    { id: "resp", name: "Respiratory physiology", description: "Explain ventilation and gas exchange.", lessons: ["human-anatomy/respiratory/airways-and-breathing", "human-anatomy/respiratory/gas-exchange"] },
    { id: "neuro", name: "Neurophysiology", description: "Explain impulses and brain organisation.", lessons: ["human-anatomy/nervous/neurons-and-impulses", "human-anatomy/nervous/brain-and-divisions"] },
    { id: "msk", name: "Musculoskeletal system", description: "Relate bones, joints and muscles to movement.", lessons: ["human-anatomy/musculoskeletal/bones-and-joints", "human-anatomy/musculoskeletal/muscles-and-movement"] },
    { id: "endo", name: "Endocrine regulation", description: "Explain hormones and feedback loops.", lessons: ["human-anatomy/endocrine/glands-and-hormones", "human-anatomy/endocrine/feedback-and-glucose"] },
  ],
};
