import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "physics-school";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "calorimetry-10",
    title: "Calorimetry",
    icon: "🌡️",
    description: "Heat and temperature, specific heat capacity, latent heat and the principle of mixtures.",
    lessons: [
      /* ---------------- Lesson 1: Specific heat capacity ---------------- */
      {
        slug: "specific-heat-capacity",
        title: "Heat, Specific Heat Capacity & Mixtures",
        summary: "Heat versus temperature, heat capacity, specific heat capacity ($Q = mc\\Delta T$), the principle of method of mixtures and why water's high specific heat matters.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏖️",
            caption: "At noon on Marina Beach, Chennai, the sand burns your feet but the sea water still feels cool. Both had the same sunshine all morning.",
          },
          {
            type: "text",
            md: "**Heat** is energy that flows from a hotter body to a colder body because of their temperature difference. Its SI unit is the **joule (J)**. An older unit is the **calorie**: 1 cal ≈ 4.2 J (more exactly 4.186 J).\n\n**Temperature** tells how hot or cold a body is. Its SI unit is the **kelvin (K)**; we also use °C. A change of 1 °C is the same size as a change of 1 K, so $\\Delta T$ has the same number in both units.\n\nThe **heat capacity** ($C'$) of a body is the heat needed to raise its temperature by 1 °C (or 1 K). The **specific heat capacity** ($c$) of a substance is the heat needed to raise the temperature of **unit mass** (1 kg) of it by 1 °C. So heat capacity = mass × specific heat capacity.",
          },
          {
            type: "table",
            headers: ["Quantity", "What it depends on", "SI unit"],
            rows: [
              ["Heat $Q$", "mass, material and temperature change", "J"],
              ["Temperature $T$", "only how hot the body is", "K (or °C)"],
              ["Heat capacity $C' = \\dfrac{Q}{\\Delta T} = mc$", "mass and material of the body", "J K⁻¹"],
              ["Specific heat capacity $c = \\dfrac{Q}{m\\Delta T}$", "only the material", "J kg⁻¹ K⁻¹"],
            ],
          },
          {
            type: "formula",
            tex: "Q = m\\,c\\,\\Delta T",
            caption: "Heat taken in or given out = mass × specific heat capacity × change in temperature. For water c = 4200 J kg⁻¹ K⁻¹ (= 4.2 J g⁻¹ K⁻¹).",
          },
          {
            type: "example",
            title: "Heating water",
            problem: "How much heat is needed to warm 2 kg of water from 25 °C to 75 °C? (c of water = 4200 J kg⁻¹ K⁻¹)",
            steps: [
              "$m = 2$ kg, $c = 4200$ J kg⁻¹ K⁻¹, $\\Delta T = 75 - 25 = 50$ °C.",
              "$Q = mc\\Delta T = 2 \\times 4200 \\times 50$.",
              "$Q = 420\\,000$ J $= 420$ kJ.",
            ],
            answer: "420 kJ (4.2 × 10⁵ J).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How much heat (in J) warms 0.5 kg of aluminium by 20 °C? (c of aluminium = 900 J kg⁻¹ K⁻¹)",
                answer: 9000,
                unit: "J",
                explain: "$Q = 0.5 \\times 900 \\times 20 = 9000$ J.",
              },
            ],
          },
          {
            type: "text",
            md: "**Principle of method of mixtures.** When a hot body and a cold body are put in contact and no heat escapes to the surroundings, heat flows until both reach the same final temperature, and\n\n**heat lost by the hot body = heat gained by the cold body.**\n\nSuch experiments are done in a **calorimeter**, usually a copper vessel. Copper is used because it is a good conductor (it quickly reaches the temperature of its contents) and its specific heat capacity is low (it takes very little of the heat itself). The vessel is kept in an insulating jacket to cut heat loss.",
          },
          {
            type: "example",
            title: "Mixing hot and cold water",
            problem: "200 g of water at 80 °C is mixed with 300 g of water at 20 °C. Find the final temperature T. (Ignore heat taken by the container.)",
            steps: [
              "Heat lost by hot water $= 200 \\times 4.2 \\times (80 - T)$.",
              "Heat gained by cold water $= 300 \\times 4.2 \\times (T - 20)$.",
              "Equate and cancel 4.2: $200(80 - T) = 300(T - 20)$, so $16000 - 200T = 300T - 6000$.",
              "$22000 = 500T$, so $T = 44$ °C.",
            ],
            answer: "Final temperature = 44 °C.",
          },
          {
            type: "example",
            title: "Finding the specific heat of a metal",
            problem: "A 100 g metal ball at 100 °C is dropped into 200 g of water at 25 °C. The final temperature is 30 °C. Find the specific heat capacity of the metal. (Ignore the container.)",
            steps: [
              "Heat gained by water $= 0.2 \\times 4200 \\times (30 - 25) = 4200$ J.",
              "Heat lost by metal $= 0.1 \\times c \\times (100 - 30) = 7c$.",
              "Heat lost = heat gained: $7c = 4200$, so $c = 600$ J kg⁻¹ K⁻¹.",
            ],
            answer: "c = 600 J kg⁻¹ K⁻¹.",
          },
          {
            type: "mistake",
            wrong: "Heat and temperature are the same thing, so a red-hot pin holds more heat than a bucket of warm water.",
            right: "The pin has a higher **temperature**, but the bucket holds far more **heat energy** because its mass is huge and water's specific heat is high.",
            why: "Hotter things feel 'full of heat', so the two ideas get mixed up. But temperature only tells which way heat will flow; the amount of heat also depends on mass and material ($Q = mc\\Delta T$).",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Equal masses of sand and water get the same heat. Which warms more?",
              emoji: "☀️",
              options: ["Water", "Sand", "Both warm by the same amount"],
              answer: 1,
              trap: 2,
              explain: "From $\\Delta T = \\dfrac{Q}{mc}$, the smaller c gives the bigger rise. Sand's c (about 800 J kg⁻¹ K⁻¹) is roughly five times smaller than water's (4200), so sand gets much hotter.",
            },
          },
          {
            type: "list",
            items: [
              "**Coastal climate:** the sea warms and cools slowly, so places like Mumbai and Kochi have milder days and nights than inland places like Nagpur.",
              "**Car radiators:** water is used as a coolant because each kilogram carries away a lot of heat for a small rise in temperature.",
              "**Hot-water bottles:** water gives out a lot of heat as it cools, so the bottle stays warm for a long time.",
              "**Frost protection:** farmers water their fields on cold nights; the water gives out heat slowly and keeps the crops from freezing.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE exam tip",
            md: "Keep units consistent: if c is in J kg⁻¹ K⁻¹, put mass in kg; if c is in J g⁻¹ K⁻¹, put mass in grams. In mixture questions, write 'heat lost = heat gained' as a separate line and state 'no heat is lost to the surroundings'. A common error is writing $(T - 80)$ instead of $(80 - T)$ for the hot body.",
          },
          {
            type: "keypoints",
            items: [
              "Heat is energy in transit (unit J); temperature is degree of hotness (unit K or °C).",
              "Heat capacity $C' = mc$ (J K⁻¹) depends on the body; specific heat capacity c (J kg⁻¹ K⁻¹) depends only on the material.",
              "$Q = mc\\Delta T$; for water $c = 4200$ J kg⁻¹ K⁻¹.",
              "Method of mixtures: heat lost by hot body = heat gained by cold body (no heat loss to surroundings).",
              "Water's high c moderates coastal climate and makes it a good coolant.",
            ],
          },
        ],
        flashcards: [
          { front: "Heat", back: "Energy that flows from a hotter body to a colder one because of a temperature difference. SI unit: joule." },
          { front: "Heat capacity", back: "Heat needed to raise the temperature of a body by 1 K. $C' = mc$, unit J K⁻¹." },
          { front: "Specific heat capacity", back: "Heat needed to raise the temperature of 1 kg of a substance by 1 K. Unit J kg⁻¹ K⁻¹." },
          { front: "Specific heat capacity of water", back: "4200 J kg⁻¹ K⁻¹ = 4.2 J g⁻¹ K⁻¹" },
          { front: "Principle of method of mixtures", back: "Heat lost by the hot body = heat gained by the cold body, if no heat escapes to the surroundings." },
          { front: "Why is a calorimeter made of copper?", back: "Copper is a good conductor and has a low specific heat capacity, so it takes up little heat." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is the SI unit of specific heat capacity?",
            options: ["J", "J K⁻¹", "J kg⁻¹ K⁻¹", "J kg⁻¹"],
            answer: 2,
            explain: "c = Q/(mΔT), so its unit is J kg⁻¹ K⁻¹. J K⁻¹ is the unit of heat capacity, and J kg⁻¹ is the unit of specific latent heat.",
          },
          {
            kind: "numeric",
            q: "How much heat (in kJ) is needed to raise 500 g of water from 20 °C to 100 °C?",
            answer: 168,
            unit: "kJ",
            explain: "$Q = 0.5 \\times 4200 \\times 80 = 168\\,000$ J = 168 kJ.",
          },
          {
            kind: "numeric",
            q: "1 kg of water at 90 °C is mixed with 2 kg of water at 30 °C. What is the final temperature (in °C)?",
            answer: 50,
            unit: "°C",
            explain: "$1(90 - T) = 2(T - 30)$ gives $150 = 3T$, so $T = 50$ °C.",
            difficulty: 2,
            hint: "Heat lost by the hot water = heat gained by the cold water; c cancels.",
          },
          {
            kind: "truefalse",
            q: "The heat capacity of a body depends on its mass, but the specific heat capacity of its material does not.",
            answer: true,
            explain: "$C' = mc$ grows with mass; c is a property of the material only.",
          },
          {
            kind: "fill",
            q: "Heat capacity = mass × ___.",
            answer: ["specific heat capacity", "specific heat"],
            explain: "$C' = mc$.",
          },
          {
            kind: "multi",
            q: "Which of these are due to the high specific heat capacity of water?",
            options: ["Water is used as a coolant in car radiators", "Coastal places have a milder climate", "A hot-water bottle stays warm for long", "Ice floats on water"],
            answers: [0, 1, 2],
            explain: "Ice floats because it is less dense than water. That has nothing to do with specific heat.",
          },
          {
            kind: "numeric",
            q: "A 0.2 kg metal block at 100 °C is put into 0.4 kg of water at 20 °C. The final temperature is 25 °C. Find the specific heat capacity of the metal (in J kg⁻¹ K⁻¹). Ignore the container.",
            answer: 560,
            unit: "J kg⁻¹ K⁻¹",
            explain: "Water gains $0.4 \\times 4200 \\times 5 = 8400$ J. Metal loses $0.2 \\times c \\times 75 = 15c$. So $15c = 8400$ and $c = 560$ J kg⁻¹ K⁻¹.",
            difficulty: 3,
            hint: "The metal cools from 100 °C to 25 °C; the water warms from 20 °C to 25 °C.",
          },
          {
            kind: "order",
            q: "1 kg each of these gets the same heat. Order them from the biggest temperature rise to the smallest. (c in J kg⁻¹ K⁻¹: mercury 140, copper 390, aluminium 900, water 4200)",
            items: ["Mercury", "Copper", "Aluminium", "Water"],
            explain: "$\\Delta T = Q/(mc)$: the smaller the specific heat capacity, the bigger the rise.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Lesson 2: Latent heat ---------------- */
      {
        slug: "latent-heat",
        title: "Change of State & Latent Heat",
        summary: "Why temperature stays constant while ice melts or water boils, $Q = mL$, the latent heats of ice and steam, and mixture problems with melting ice.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🧊",
            caption: "Heat a pan of crushed ice on a stove with a thermometer in it. The reading stays at 0 °C until the very last bit of ice has melted.",
          },
          {
            type: "text",
            md: "When a substance changes from solid to liquid (**melting**) or from liquid to gas (**boiling** or vaporisation), it takes in heat but its temperature does **not** change until the change of state is complete.\n\nThe heat goes into pulling the molecules further apart. It raises their **potential energy**, not their average **kinetic energy**, so the thermometer reading stays fixed. Because this heat seems 'hidden', it is called **latent heat**.\n\nThe **specific latent heat** ($L$) of a substance is the heat needed to change **unit mass** of it from one state to another **at constant temperature**. The same amount of heat is given out when the change goes the other way (freezing or condensing).",
          },
          {
            type: "formula",
            tex: "Q = m\\,L",
            caption: "Heat for a change of state = mass × specific latent heat. SI unit of L: J kg⁻¹. No ΔT appears, because the temperature does not change.",
          },
          {
            type: "table",
            headers: ["Quantity", "Value (ICSE)", "In J kg⁻¹"],
            rows: [
              ["Specific latent heat of fusion of ice (at 0 °C)", "336 J g⁻¹", "$3.36 \\times 10^5$"],
              ["Specific latent heat of vaporisation of water (at 100 °C)", "2260 J g⁻¹", "$2.26 \\times 10^6$"],
              ["Specific heat capacity of water", "4.2 J g⁻¹ K⁻¹", "4200 J kg⁻¹ K⁻¹"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Ice below 0 °C warms up to 0 °C: $Q = mc_{ice}\\Delta T$ (c of ice ≈ 2100 J kg⁻¹ K⁻¹).",
              "Ice melts at 0 °C, temperature constant: $Q = mL_{fusion}$.",
              "Water warms from 0 °C to 100 °C: $Q = mc_{water}\\Delta T$.",
              "Water boils at 100 °C, temperature constant: $Q = mL_{vap}$.",
            ],
          },
          {
            type: "example",
            title: "Melting ice and warming the water",
            problem: "How much heat is needed to change 50 g of ice at 0 °C into water at 40 °C?",
            steps: [
              "Melt the ice at 0 °C: $Q_1 = mL = 50 \\times 336 = 16\\,800$ J.",
              "Warm the melted water from 0 °C to 40 °C: $Q_2 = 50 \\times 4.2 \\times 40 = 8400$ J.",
              "Total $Q = 16\\,800 + 8400 = 25\\,200$ J.",
            ],
            answer: "25 200 J (25.2 kJ).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How much heat (in J) is needed to turn 10 g of water at 100 °C into steam at 100 °C?",
                answer: 22600,
                unit: "J",
                explain: "$Q = mL = 10 \\times 2260 = 22\\,600$ J.",
              },
            ],
          },
          {
            type: "text",
            md: "**Why burns from steam are worse.** 1 g of steam at 100 °C first gives out 2260 J as it condenses on the skin, and then the hot water gives out more as it cools to body temperature (37 °C): $1 \\times 4.2 \\times 63 \\approx 265$ J. That is about 2525 J in all. 1 g of boiling water gives only the 265 J, so steam delivers nearly ten times as much heat.\n\n**Why ice cools a drink better than ice-cold water.** Each gram of ice at 0 °C takes 336 J from the drink just to melt, *before* its own temperature can rise. Water at 0 °C has no latent heat to absorb, so it cools the drink much less.",
          },
          {
            type: "example",
            title: "Mixture with melting ice",
            problem: "20 g of ice at 0 °C is dropped into 200 g of water at 30 °C. Find the final temperature T. (Ignore the container.)",
            steps: [
              "Heat lost by the warm water $= 200 \\times 4.2 \\times (30 - T) = 840(30 - T)$.",
              "Heat gained by the ice = melting + warming the melted water $= 20 \\times 336 + 20 \\times 4.2 \\times T = 6720 + 84T$.",
              "Equate: $25\\,200 - 840T = 6720 + 84T$, so $18\\,480 = 924T$.",
              "$T = 20$ °C.",
            ],
            answer: "Final temperature = 20 °C.",
          },
          {
            type: "example",
            title: "How much ice is needed?",
            problem: "What mass of ice at 0 °C must be added to 300 g of water at 40 °C to cool it to 10 °C? (Ignore the container.)",
            steps: [
              "Heat lost by water $= 300 \\times 4.2 \\times (40 - 10) = 37\\,800$ J.",
              "Heat gained by m g of ice $= m \\times 336 + m \\times 4.2 \\times 10 = 378m$.",
              "$378m = 37\\,800$, so $m = 100$ g.",
            ],
            answer: "100 g of ice.",
          },
          {
            type: "mistake",
            wrong: "If I keep heating melting ice, its temperature must keep rising.",
            right: "While ice melts, the temperature stays at 0 °C. All the heat is used as latent heat to change the state.",
            why: "In daily life, heating usually makes things hotter, so it feels as if the reading must go up. During a change of state, the heat raises the potential energy of the molecules, not their kinetic energy, so the temperature cannot rise.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which cools a glass of juice more: 50 g ice or 50 g ice-cold water?",
              emoji: "🥤",
              options: ["50 g of ice at 0 °C", "50 g of water at 0 °C", "Both cool it equally"],
              answer: 0,
              trap: 2,
              explain: "Both are at 0 °C, but the ice must first absorb $50 \\times 336 = 16\\,800$ J to melt. Only then does it warm up like the cold water does, so ice takes far more heat from the juice.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE exam tip",
            md: "In ice problems the ice gains heat in **two parts**: $mL$ to melt, and then $mc\\Delta T$ to warm the melted water from 0 °C to the final temperature. Students often forget the second part. After melting, use the specific heat of **water** (4.2 J g⁻¹ K⁻¹), not of ice.",
          },
          {
            type: "keypoints",
            items: [
              "During melting and boiling the temperature stays constant; the heat taken in is **latent heat**.",
              "$Q = mL$; SI unit of specific latent heat is J kg⁻¹.",
              "Ice: $L_f = 336$ J g⁻¹ $= 3.36 \\times 10^5$ J kg⁻¹. Water: $L_v = 2260$ J g⁻¹ $= 2.26 \\times 10^6$ J kg⁻¹.",
              "Steam burns more than boiling water; ice cools better than ice-cold water, both because of latent heat.",
              "Mixture with ice: heat lost by warm body = $mL$ + $mc\\Delta T$ for the ice.",
            ],
          },
        ],
        flashcards: [
          { front: "Latent heat", back: "Heat taken in or given out during a change of state, with no change in temperature." },
          { front: "Specific latent heat", back: "Heat needed to change 1 kg of a substance from one state to another at constant temperature. Unit J kg⁻¹." },
          { front: "Specific latent heat of fusion of ice", back: "336 J g⁻¹ = 3.36 × 10⁵ J kg⁻¹" },
          { front: "Specific latent heat of vaporisation of water", back: "2260 J g⁻¹ = 2.26 × 10⁶ J kg⁻¹" },
          { front: "Why does temperature stay constant while melting?", back: "The heat raises the potential energy of the molecules (separating them), not their average kinetic energy." },
          { front: "Why does steam at 100 °C burn more than water at 100 °C?", back: "Each gram of steam gives out an extra 2260 J of latent heat when it condenses on the skin." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "While a block of ice is melting, its temperature:",
            options: ["rises steadily", "stays at 0 °C", "falls below 0 °C", "rises and then falls"],
            answer: 1,
            explain: "During the change of state the heat is used as latent heat, so the temperature stays at the melting point, 0 °C.",
          },
          {
            kind: "numeric",
            q: "How much heat (in kJ) is needed to melt 2 kg of ice at 0 °C? ($L = 3.36 \\times 10^5$ J kg⁻¹)",
            answer: 672,
            unit: "kJ",
            explain: "$Q = 2 \\times 3.36 \\times 10^5 = 6.72 \\times 10^5$ J = 672 kJ.",
          },
          {
            kind: "truefalse",
            q: "Steam at 100 °C causes more severe burns than the same mass of water at 100 °C.",
            answer: true,
            explain: "Steam gives out its latent heat (2260 J per gram) when it condenses, in addition to the heat the hot water gives as it cools.",
          },
          {
            kind: "fill",
            q: "The specific latent heat of fusion of ice is ___ J g⁻¹.",
            answer: ["336"],
            explain: "336 J g⁻¹, which is $3.36 \\times 10^5$ J kg⁻¹.",
          },
          {
            kind: "order",
            q: "Ice at −5 °C is heated until it becomes steam. Put the stages in order.",
            items: [
              "Ice warms from −5 °C to 0 °C",
              "Ice melts at 0 °C",
              "Water warms from 0 °C to 100 °C",
              "Water boils at 100 °C",
            ],
            explain: "Temperature rises in stages 1 and 3. In stages 2 and 4 it stays constant while latent heat is absorbed.",
          },
          {
            kind: "multi",
            q: "Which statements about water boiling at 100 °C are true?",
            options: ["Its temperature stays constant", "The heat supplied increases the potential energy of the molecules", "The average kinetic energy of the molecules keeps increasing", "The heat taken in is the latent heat of vaporisation"],
            answers: [0, 1, 3],
            explain: "During boiling the temperature, and so the average kinetic energy, does not change. The heat goes into potential energy as latent heat of vaporisation.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "10 g of ice at 0 °C is put into 50 g of water at 40 °C. Find the final temperature (in °C). Ignore the container.",
            answer: 20,
            unit: "°C",
            explain: "Heat lost $= 50 \\times 4.2 \\times (40 - T) = 8400 - 210T$. Heat gained $= 10 \\times 336 + 10 \\times 4.2 \\times T = 3360 + 42T$. So $5040 = 252T$ and $T = 20$ °C.",
            difficulty: 3,
            hint: "The ice first melts ($mL$) and then the melted water warms from 0 °C to T.",
          },
          {
            kind: "numeric",
            q: "How much heat (in J) is given out when 5 g of steam at 100 °C condenses into water at 100 °C?",
            answer: 11300,
            unit: "J",
            explain: "$Q = mL = 5 \\times 2260 = 11\\,300$ J.",
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  Calorimetry: "calorimetry-10",
};
