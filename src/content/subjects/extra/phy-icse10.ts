import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "physics-school";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "machines",
    title: "Machines",
    icon: "⚙️",
    description: "Levers and pulleys: mechanical advantage, velocity ratio and efficiency.",
    lessons: [
      {
        slug: "levers-ma-vr-efficiency",
        title: "Levers, MA, VR & Efficiency",
        summary: "What a machine does, mechanical advantage, velocity ratio, efficiency and the three classes of lever.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **machine** is a device that lets us apply a force at a convenient point, in a convenient direction, or of a convenient size. A crowbar lets one person shift a heavy stone; a pair of scissors puts a large force on the paper at the blades. A machine never gives you *more work* than you put in. It trades force for distance.",
          },
          {
            type: "table",
            headers: ["Term", "Definition", "Formula"],
            rows: [
              ["Mechanical advantage (MA)", "how many times the load is bigger than the effort", "$\\text{MA} = \\dfrac{L}{E}$"],
              ["Velocity ratio (VR)", "how many times further the effort moves than the load", "$\\text{VR} = \\dfrac{d_E}{d_L}$"],
              ["Efficiency (η)", "useful work out ÷ work put in", "$\\eta = \\dfrac{W_{out}}{W_{in}}$"],
            ],
          },
          {
            type: "formula",
            tex: "\\eta = \\frac{L \\times d_L}{E \\times d_E} = \\frac{\\text{MA}}{\\text{VR}} \\qquad \\Rightarrow \\qquad \\text{MA} = \\eta \\times \\text{VR}",
            caption: "For an ideal (frictionless, weightless) machine η = 1, so MA = VR. Real machines have η < 1, so MA < VR.",
          },
          {
            type: "heading",
            text: "Three classes of lever",
          },
          {
            type: "table",
            headers: ["Class", "What is in the middle", "MA", "Examples"],
            rows: [
              ["I", "Fulcrum", "> 1, = 1 or < 1", "see-saw, crowbar, scissors, pliers, beam balance"],
              ["II", "Load", "always > 1", "nutcracker, wheelbarrow, bottle opener, lemon squeezer"],
              ["III", "Effort", "always < 1", "forceps, fishing rod, human forearm, sugar tongs"],
            ],
          },
          {
            type: "text",
            md: "By the principle of moments, $L \\times \\text{load arm} = E \\times \\text{effort arm}$, so the ideal MA of a lever is $\\dfrac{\\text{effort arm}}{\\text{load arm}}$. Class III levers have MA < 1, but they give a **gain in speed**: a small movement of the biceps moves the hand a long way.",
          },
          {
            type: "example",
            problem: "A mason in Jaipur uses a 1.4 m crowbar to lift a 600 N stone. The fulcrum is 0.2 m from the stone. What effort does he need, and how far must his hands move to raise the stone by 2 cm?",
            steps: [
              "Load arm = 0.2 m, so effort arm = 1.4 − 0.2 = 1.2 m.",
              "Ideal MA $= \\tfrac{\\text{effort arm}}{\\text{load arm}} = \\tfrac{1.2}{0.2} = 6$.",
              "Effort $= \\tfrac{\\text{load}}{\\text{MA}} = \\tfrac{600}{6} = 100$ N.",
              "For an ideal lever VR = MA = 6, so the hands move $6 \\times 2 = 12$ cm.",
            ],
            answer: "100 N of effort; the hands move down 12 cm.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which class of lever is each one? Look at what is in the middle.",
              groups: ["Class I", "Class II", "Class III"],
              items: [
                { text: "See-saw", group: 0, hint: "The pivot is in the middle." },
                { text: "Nutcracker", group: 1, hint: "The nut (load) sits between the hinge and your hand." },
                { text: "Forceps", group: 2, hint: "You press in the middle, between the hinge and the tips." },
                { text: "Scissors", group: 0, hint: "The screw (fulcrum) is between the handles and the blades." },
                { text: "Wheelbarrow", group: 1, hint: "The load is between the wheel and your hands." },
                { text: "Fishing rod", group: 2, hint: "Your front hand pushes between the end you hold and the line." },
              ],
              explain: "Find the thing in the middle. **Fulcrum** in the middle → class I. **Load** in the middle → class II (MA > 1). **Effort** in the middle → class III (MA < 1, but you gain speed).",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A machine has VR = 5 and efficiency 80%. What is its MA?",
                answer: 4,
                explain: "MA $= \\eta \\times$ VR $= 0.8 \\times 5 = 4$.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A machine can be made 100% efficient if it is oiled well.",
            right: "No real machine reaches 100% efficiency.",
            why: "Some energy is always lost to friction and in lifting the moving parts of the machine itself. Also remember that VR depends only on the **design**, while MA depends on friction and so changes with use.",
          },
          {
            type: "illustration",
            emoji: "🛞",
            caption: "A wheelbarrow is a class II lever: the wheel's axle is the fulcrum and the load sits between it and your hands.",
          },
          {
            type: "keypoints",
            items: [
              "MA = L/E, VR = d_E/d_L, η = MA/VR.",
              "Ideal machine: η = 1 and MA = VR. Real machine: MA < VR.",
              "Class I: fulcrum in middle; class II: load in middle (MA > 1); class III: effort in middle (MA < 1).",
              "Ideal MA of a lever = effort arm ÷ load arm.",
            ],
          },
        ],
        flashcards: [
          { front: "Mechanical advantage", back: "Load ÷ effort. It has no unit." },
          { front: "Relation between MA, VR and η", back: "η = MA/VR, so MA = η × VR." },
          { front: "Class II lever examples", back: "Nutcracker, wheelbarrow, bottle opener. MA is always greater than 1." },
          { front: "Why is a class III lever used if MA < 1?", back: "It gives a gain in speed or distance moved by the load, e.g. forceps, fishing rod, forearm." },
          { front: "Does VR change with friction?", back: "No. VR depends only on the geometry of the machine." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a pair of forceps, the effort is applied between the fulcrum and the load. It is a:",
            options: ["Class I lever", "Class II lever", "Class III lever", "Pulley"],
            answer: 2,
            explain: "Effort in the middle makes it a class III lever, with MA < 1.",
          },
          {
            kind: "numeric",
            q: "A load of 900 N is raised by an effort of 300 N. The effort moves 4 m while the load moves 1 m. What is the efficiency (in %)?",
            answer: 75,
            unit: "%",
            explain: "MA $= 900/300 = 3$, VR $= 4/1 = 4$, $\\eta = 3/4 = 75\\%$.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "For a class II lever the mechanical advantage is always greater than 1.",
            answer: true,
            explain: "The effort arm is always longer than the load arm because the load lies between fulcrum and effort.",
          },
          {
            kind: "fill",
            q: "For an ideal machine, mechanical advantage is equal to ___ ratio.",
            answer: ["velocity", "velocity ratio"],
            explain: "With η = 1, MA = VR.",
          },
          {
            kind: "numeric",
            q: "In a see-saw, a child weighing 300 N sits 1.5 m from the fulcrum. How far from the fulcrum must a 450 N child sit on the other side to balance?",
            answer: 1,
            unit: "m",
            explain: "Moments: $300 \\times 1.5 = 450 \\times d$, so $d = 1$ m.",
          },
          {
            kind: "mcq",
            q: "A worker oils a rusty machine. Which quantity does NOT change?",
            options: ["Mechanical advantage", "Velocity ratio", "Efficiency", "Effort needed"],
            answer: 1,
            explain: "Oiling cuts friction, so MA and efficiency rise and less effort is needed. VR depends only on the design, so it stays the same.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "pulleys",
        title: "Pulleys and Block & Tackle",
        summary: "Single fixed and movable pulleys, block and tackle systems, and the effect of friction and pulley weight.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **pulley** is a wheel with a grooved rim over which a rope (or chain) passes. Pulleys help raise water from wells in villages, hoist cement on building sites in Mumbai and lift engines in garages. How much they help depends on how many rope segments share the load.",
          },
          {
            type: "table",
            headers: ["Arrangement", "Ideal MA", "VR", "Main benefit"],
            rows: [
              ["Single fixed pulley", "1", "1", "changes direction of effort (pull down to lift up)"],
              ["Single movable pulley", "2", "2", "halves the effort"],
              ["Block and tackle, n pulleys", "n", "n", "large MA, effort applied downward"],
            ],
          },
          {
            type: "formula",
            tex: "\\text{VR} = n \\quad (n = \\text{number of rope segments supporting the lower block})",
            caption: "If the load rises 1 m, each of the n segments shortens by 1 m, so the free end moves n metres.",
          },
          {
            type: "heading",
            text: "Real pulleys: friction and the lower block",
          },
          {
            type: "text",
            md: "In a block and tackle the lower (movable) block is lifted along with the load. If the lower block weighs $w$ and friction is negligible, the n segments each carry tension $E$:\n\n$nE = L + w$, so $\\text{MA} = \\dfrac{L}{E} = \\dfrac{nL}{L + w}$, which is less than n. Friction lowers MA further. VR stays n.",
          },
          {
            type: "example",
            problem: "A block and tackle has 4 pulleys (2 in each block). An effort of 250 N raises a load of 800 N by 3 m. Find the MA, VR, efficiency and the length of rope pulled.",
            steps: [
              "4 pulleys → 4 rope segments hold the lower block, so VR = 4.",
              "MA $= \\tfrac{L}{E} = \\tfrac{800}{250} = 3.2$.",
              "Efficiency $= \\tfrac{\\text{MA}}{\\text{VR}} = \\tfrac{3.2}{4} = 0.8 = 80\\%$.",
              "Rope pulled $= \\text{VR} \\times d_L = 4 \\times 3 = 12$ m.",
              "Check with work: input $= 250 \\times 12 = 3000$ J; useful work $= 800 \\times 3 = 2400$ J; $2400/3000 = 80\\%$.",
            ],
            answer: "MA = 3.2, VR = 4, efficiency = 80%, and 12 m of rope is pulled.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each pulley system to its velocity ratio.",
              pairs: [
                ["Single fixed pulley", "VR = 1"],
                ["Single movable pulley", "VR = 2"],
                ["Block and tackle with 3 pulleys", "VR = 3"],
                ["Block and tackle with 4 pulleys", "VR = 4"],
              ],
              explain: "VR = number of rope segments holding up the **lower block**. A fixed pulley has no lower block, so VR = 1; it only changes the direction of the effort.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A block and tackle has 5 pulleys and lifts a 1000 N load. The lower block weighs 100 N and friction is negligible. What effort is needed?",
                answer: 220,
                unit: "N",
                explain: "$5E = L + w = 1100$ N, so $E = 220$ N.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Why use a fixed pulley at all?",
            md: "MA = 1, so it doesn't reduce the effort. But pulling **down** is easier: you can use your own body weight. That's why wells and flagpoles use a single fixed pulley.",
          },
          {
            type: "mistake",
            wrong: "VR is the number of pulleys drawn in the diagram, and friction lowers the VR.",
            right: "VR is the number of rope segments that hold up the **lower block**. Friction lowers MA and efficiency, never VR.",
            why: "In a normal block and tackle the two numbers happen to match, so the shortcut feels safe. In an unusual diagram they differ. VR depends only on how the rope is threaded, while friction only changes the effort needed.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The efficiency of a block and tackle *increases* with load, because the lower block's weight and friction become a smaller share of the total.",
          },
          {
            type: "illustration",
            emoji: "🏗️",
            caption: "Construction cranes use multi-strand pulley blocks so a small motor force can lift tonnes of steel.",
          },
          {
            type: "keypoints",
            items: [
              "Single fixed pulley: MA = VR = 1, only changes direction.",
              "Single movable pulley: VR = 2.",
              "Block and tackle: VR = number of supporting segments n.",
              "With lower block weight w: nE = L + w; η = MA/VR < 1.",
            ],
          },
        ],
        flashcards: [
          { front: "VR of single movable pulley", back: "2" },
          { front: "Purpose of a single fixed pulley", back: "To change the direction of the effort to a convenient one; MA = 1." },
          { front: "VR of a block and tackle with n pulleys", back: "n (the number of rope segments supporting the lower block)." },
          { front: "Why is MA < VR in a real block and tackle?", back: "Friction and the weight of the lower block and rope." },
          { front: "How does efficiency of a block and tackle change with load?", back: "It increases, because the lower block's weight and friction become a smaller share of the total." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A single fixed pulley has a velocity ratio of:",
            options: ["0.5", "1", "2", "It depends on the load"],
            answer: 1,
            explain: "The effort and load move equal distances.",
          },
          {
            kind: "numeric",
            q: "A block and tackle with VR = 6 has efficiency 75%. What effort lifts a 900 N load?",
            answer: 200,
            unit: "N",
            explain: "MA $= 0.75 \\times 6 = 4.5$, so $E = 900/4.5 = 200$ N.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The velocity ratio of a block and tackle decreases when the pulleys become rusty.",
            answer: false,
            explain: "Friction reduces MA and efficiency; VR depends only on the arrangement.",
          },
          {
            kind: "fill",
            q: "In a single movable pulley, the effort moves ___ times the distance moved by the load.",
            answer: ["2", "two"],
            explain: "Two rope segments shorten, so VR = 2.",
          },
          {
            kind: "numeric",
            q: "In a block and tackle with 3 pulleys, the effort end of the rope is pulled 6 m. How far does the load rise?",
            answer: 2,
            unit: "m",
            explain: "VR = 3, so $d_L = 6/3 = 2$ m.",
          },
          {
            kind: "numeric",
            q: "A block and tackle has 4 pulleys. Its lower block weighs 40 N and friction is negligible. What is its efficiency (in %) when lifting a 360 N load?",
            answer: 90,
            unit: "%",
            explain: "$4E = 360 + 40 = 400$, so $E = 100$ N. MA $= 360/100 = 3.6$, VR = 4, $\\eta = 3.6/4 = 90\\%$.",
            difficulty: 3,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "refraction-through-a-lens",
    title: "Refraction through a Lens",
    icon: "🔍",
    description: "Convex and concave lenses, ray diagrams, the lens formula, magnification and power.",
    lessons: [
      {
        slug: "lenses-and-ray-diagrams",
        title: "Lenses and Ray Diagrams",
        summary: "Types of lenses, key terms, the three standard rays and image formation for every object position.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **lens** is a piece of transparent material bounded by two surfaces, at least one of them curved. A **convex** (converging) lens is thicker at the middle; a **concave** (diverging) lens is thinner at the middle. Light bends at both surfaces, and the shape decides whether rays come together or spread apart.",
          },
          {
            type: "list",
            items: [
              "**Optical centre (O):** the point at the centre of the lens; a ray through it goes straight on.",
              "**Principal axis:** the line through O joining the centres of curvature of the two surfaces.",
              "**Principal focus (F):** where rays parallel to the axis meet (convex) or appear to diverge from (concave).",
              "**Focal length (f):** distance OF. A lens has a focus on each side, at equal distances for a thin lens in air.",
            ],
          },
          {
            type: "heading",
            text: "The three standard rays",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A ray parallel to the principal axis passes through F (convex) or appears to come from F (concave) after refraction.",
              "A ray through the optical centre goes undeviated.",
              "A ray through F (convex) or directed towards F (concave) emerges parallel to the axis.",
            ],
          },
          {
            type: "table",
            headers: ["Object position (convex lens)", "Image position", "Nature and size"],
            rows: [
              ["At infinity", "At F", "real, inverted, point-sized"],
              ["Beyond 2F", "Between F and 2F", "real, inverted, diminished"],
              ["At 2F", "At 2F", "real, inverted, same size"],
              ["Between F and 2F", "Beyond 2F", "real, inverted, enlarged"],
              ["At F", "At infinity", "real, inverted, highly enlarged"],
              ["Between F and O", "Same side as object", "virtual, erect, enlarged"],
            ],
          },
          {
            type: "text",
            md: "A **concave lens** always forms a **virtual, erect, diminished** image between F and O on the same side as the object, wherever the object is. That is why a concave lens can never be used as a magnifying glass.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Will the image be real or virtual?",
              groups: ["Real image", "Virtual image"],
              items: [
                { text: "Convex lens, object beyond 2F", group: 0, hint: "Outside F, a convex lens brings the rays together on the other side." },
                { text: "Convex lens, object between F and O", group: 1, hint: "Inside F the rays still spread out after the lens, so the image is virtual." },
                { text: "Concave lens, object at 2F", group: 1, hint: "A concave lens spreads rays apart, so it always forms a virtual image." },
                { text: "Convex lens, object between F and 2F", group: 0, hint: "This is the projector position: real, inverted, enlarged." },
                { text: "Concave lens, object far away", group: 1, hint: "Wherever the object is, a concave lens gives a virtual image." },
                { text: "Convex lens, Sun as object", group: 0, hint: "Sunlight focuses to a real bright spot at F." },
              ],
              explain: "A convex lens gives a **real** image unless the object is between F and O. A concave lens **always** gives a virtual, erect, diminished image.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A projector must throw an enlarged real image of a slide on a screen. Where should the slide be placed in front of the convex lens?",
                options: ["Between O and F", "At F", "Between F and 2F", "Beyond 2F"],
                answer: 2,
                explain: "Between F and 2F gives a real, inverted, enlarged image beyond 2F. The slide is put in upside down so the picture looks upright.",
              },
            ],
          },
          {
            type: "example",
            title: "Identifying a lens",
            problem: "Priya is given an unmarked lens. Without any formula, how can she tell whether it is convex or concave, and roughly find its focal length?",
            steps: [
              "Hold the lens close to printed text. If the letters look **bigger and upright**, it is convex (the text is inside F).",
              "If they look **smaller and upright** at every distance, it is concave.",
              "Focus the classroom window onto a wall. Only a convex lens gives a sharp real image on the wall.",
              "The window is far away (nearly at infinity), so the image forms near F. The lens-to-wall distance is roughly f.",
            ],
            answer: "Bigger upright text and a sharp image on the wall mean a convex lens; the lens-to-wall distance is about its focal length.",
          },
          {
            type: "mistake",
            wrong: "A convex lens always forms a real image.",
            right: "A convex lens forms a **virtual, erect, enlarged** image when the object is between F and O. It forms a real image for every other position.",
            why: "Most table rows for a convex lens say \"real, inverted\", so the last row is easy to forget. But that last row is exactly how a magnifying glass works.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Ray diagram marks",
            md: "In ray diagrams draw arrows on every ray and use dotted lines for virtual rays, or you lose marks.",
          },
          {
            type: "illustration",
            emoji: "🔥",
            caption: "Focusing sunlight with a convex lens to burn paper: the Sun is at infinity, so its image forms at F. That's why F is called the burning point.",
          },
          {
            type: "keypoints",
            items: [
              "Convex = converging, concave = diverging.",
              "Rays: parallel → through F; through O → undeviated; through F → parallel.",
              "Convex lens: real images except when object is between F and O.",
              "Concave lens: always virtual, erect, diminished.",
            ],
          },
        ],
        flashcards: [
          { front: "Image when object is at 2F of a convex lens", back: "At 2F on the other side, real, inverted, same size." },
          { front: "Image formed by a concave lens", back: "Always virtual, erect, diminished, between F and O." },
          { front: "Ray through the optical centre", back: "Passes undeviated (for a thin lens)." },
          { front: "Use of convex lens as magnifier", back: "Object placed between F and O gives a virtual, erect, enlarged image." },
          { front: "Ray through F of a convex lens", back: "Emerges parallel to the principal axis after refraction." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which object position gives a real image of the same size with a convex lens?",
            options: ["At F", "At 2F", "Beyond 2F", "Between F and O"],
            answer: 1,
            explain: "Object at 2F gives image at 2F of the same size.",
          },
          {
            kind: "truefalse",
            q: "A concave lens can form a real image of a real object.",
            answer: false,
            explain: "For a real object, a concave lens always forms a virtual image.",
          },
          {
            kind: "fill",
            q: "Rays parallel to the principal axis converge at the principal ___ of a convex lens.",
            answer: ["focus", "focal point"],
            explain: "That point is F.",
          },
          {
            kind: "mcq",
            q: "An object is moved from far away towards a convex lens until it reaches F. The real image:",
            options: ["moves towards the lens and shrinks", "moves away from the lens and grows", "stays at F", "becomes virtual"],
            answer: 1,
            explain: "As u decreases from infinity to f, the image moves from F out to infinity and grows larger.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Order these object positions for a convex lens from the one giving the SMALLEST real image to the one giving the LARGEST.",
            items: ["At infinity", "Beyond 2F", "At 2F", "Between F and 2F"],
            explain: "The image grows as the object comes closer to F.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A student says a convex lens can never form an erect image. When is the student wrong?",
            options: ["Object beyond 2F", "Object at 2F", "Object between F and O", "Object at infinity"],
            answer: 2,
            explain: "With the object between F and O, a convex lens gives a virtual, erect, enlarged image. This is how a magnifying glass works.",
          },
        ],
      },
      {
        slug: "lens-formula-and-power",
        title: "Lens Formula, Magnification & Power",
        summary: "New Cartesian sign convention, 1/v − 1/u = 1/f, magnification and the power of a lens in dioptres.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Ray diagrams tell us roughly where an image is. The **lens formula** tells us exactly. To use it we need a sign convention so that distances on different sides of the lens get different signs.",
          },
          {
            type: "list",
            items: [
              "All distances are measured from the optical centre O.",
              "Distances in the direction of incident light (usually to the right) are **positive**; against it are **negative**. So a real object has $u$ negative.",
              "Heights above the axis are positive, below are negative.",
              "Focal length: convex lens $f > 0$, concave lens $f < 0$.",
            ],
          },
          {
            type: "formula",
            tex: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\qquad m = \\frac{h'}{h} = \\frac{v}{u}",
            caption: "Negative m means real and inverted; positive m means virtual and erect.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Positive or negative? Use the sign convention.",
              groups: ["Positive", "Negative"],
              items: [
                { text: "u for a real object", group: 1, hint: "A real object sits against the direction of light, on the left." },
                { text: "f of a convex lens", group: 0, hint: "Converging lenses have positive focal length." },
                { text: "f of a concave lens", group: 1, hint: "Diverging lenses have negative focal length." },
                { text: "v for a real image", group: 0, hint: "A real image forms on the far side, along the light." },
                { text: "v for a virtual image", group: 1, hint: "A virtual image is on the same side as the object." },
                { text: "m for a real, inverted image", group: 1, hint: "Inverted means the image height is below the axis." },
              ],
              explain: "Measure from O. Along the incident light is **positive**, against it is **negative**. So real objects have u < 0, real images have v > 0 and m < 0.",
            },
          },
          {
            type: "example",
            title: "Convex lens",
            problem: "An object is 15 cm in front of a convex lens of focal length 10 cm. Find the image position, magnification and nature.",
            steps: [
              "Signs: $u = -15$ cm, $f = +10$ cm.",
              "$\\tfrac{1}{v} = \\tfrac{1}{f} + \\tfrac{1}{u} = \\tfrac{1}{10} - \\tfrac{1}{15} = \\tfrac{3 - 2}{30} = \\tfrac{1}{30}$, so $v = +30$ cm.",
              "$m = \\tfrac{v}{u} = \\tfrac{30}{-15} = -2$.",
            ],
            answer: "The image is 30 cm behind the lens: real, inverted and twice as large.",
          },
          {
            type: "example",
            title: "Concave lens",
            problem: "An object is 30 cm from a concave lens of focal length 15 cm. Find the image position and magnification.",
            steps: [
              "Signs: $u = -30$ cm, $f = -15$ cm.",
              "$\\tfrac{1}{v} = \\tfrac{1}{f} + \\tfrac{1}{u} = -\\tfrac{1}{15} - \\tfrac{1}{30} = -\\tfrac{3}{30}$, so $v = -10$ cm (same side as the object).",
              "$m = \\tfrac{v}{u} = \\tfrac{-10}{-30} = +\\tfrac{1}{3}$.",
            ],
            answer: "The image is 10 cm from the lens on the object's side: virtual, erect, one-third the size.",
          },
          {
            type: "formula",
            tex: "P = \\frac{1}{f\\,(\\text{in metres})} \\quad \\text{unit: dioptre (D)} \\qquad P_{\\text{total}} = P_1 + P_2 + \\dots",
            caption: "Convex lenses have positive power, concave lenses negative.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An optician in Chennai prescribes a lens of power −2.5 D. What is its focal length in cm? (Give the sign.)",
                answer: -40,
                unit: "cm",
                explain: "$f = 1/P = 1/(-2.5) = -0.4$ m $= -40$ cm, a concave lens.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A 25 cm convex lens has power $1/25 = 0.04$ D.",
            right: "Convert f to **metres** first: $P = 1/0.25 = +4$ D.",
            why: "The formula looks like it works with any unit, but the dioptre is defined as $\\text{m}^{-1}$. Using cm makes the answer 100 times too small.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Formula trap",
            md: "The lens formula has a **minus** sign ($1/v - 1/u$); the mirror formula has a plus. Mixing them up is a common loss of marks.",
          },
          {
            type: "keypoints",
            items: [
              "Lens formula: 1/v − 1/u = 1/f, with real object u negative.",
              "m = v/u = h′/h; negative m → real and inverted.",
              "P = 1/f (f in m), in dioptres; convex +, concave −.",
              "Powers of lenses in contact add.",
            ],
          },
        ],
        flashcards: [
          { front: "Lens formula", back: "1/v − 1/u = 1/f" },
          { front: "Magnification of a lens", back: "m = v/u = h′/h" },
          { front: "1 dioptre", back: "Power of a lens of focal length 1 m." },
          { front: "Sign of f for concave lens", back: "Negative" },
          { front: "Power of two lenses in contact, +3 D and −1 D", back: "+2 D (powers add)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An object is placed 20 cm from a convex lens of focal length 10 cm. Find the image distance v in cm.",
            answer: 20,
            unit: "cm",
            explain: "$1/v = 1/10 - 1/20 = 1/20$, so $v = +20$ cm. Object at 2F gives image at 2F.",
          },
          {
            kind: "numeric",
            q: "What is the power (in D) of a convex lens of focal length 50 cm?",
            answer: 2,
            unit: "D",
            explain: "$P = 1/0.5 = +2$ D.",
          },
          {
            kind: "mcq",
            q: "A lens gives magnification m = +0.5. The image is:",
            options: ["real and inverted", "virtual, erect and diminished", "virtual, erect and enlarged", "real and erect"],
            answer: 1,
            explain: "Positive m means virtual and erect; |m| < 1 means diminished, typical of a concave lens.",
          },
          {
            kind: "truefalse",
            q: "A lens of power −4 D is a converging lens.",
            answer: false,
            explain: "Negative power means a diverging (concave) lens with f = −25 cm.",
          },
          {
            kind: "numeric",
            q: "An object 4 cm tall is 12 cm from a convex lens of focal length 8 cm. What is the height of the image in cm? (Enter the signed value.)",
            answer: -8,
            unit: "cm",
            explain: "$1/v = 1/8 - 1/12 = 1/24$, $v = 24$ cm; $m = 24/(-12) = -2$; $h' = -2 \\times 4 = -8$ cm (inverted).",
            difficulty: 3,
          },
          {
            kind: "numeric",
            q: "A convex lens of power +5 D and a concave lens of power −3 D are placed in contact. What is the focal length of the combination in cm?",
            answer: 50,
            unit: "cm",
            explain: "$P = +5 - 3 = +2$ D, so $f = 1/2$ m $= 50$ cm (converging).",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "human-eye-and-colourful-world",
    title: "The Human Eye and the Colourful World",
    icon: "🌈",
    description: "How the eye focuses, defects of vision and their correction, dispersion, scattering and the spectrum.",
    lessons: [
      {
        slug: "human-eye-and-defects",
        title: "The Human Eye and Its Defects",
        summary: "Parts of the eye, accommodation, near and far points, myopia, hypermetropia and presbyopia with corrective lens numericals.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "The eye is a natural camera. Light enters through the transparent **cornea**, where most of the bending happens, passes through the **pupil** (whose size the **iris** controls) and is fine-focused by the **crystalline lens** onto the **retina**. Rods and cones in the retina turn light into electrical signals that the **optic nerve** carries to the brain.",
          },
          {
            type: "table",
            headers: ["Part", "Job"],
            rows: [
              ["Cornea", "transparent front window; does most of the refraction"],
              ["Iris and pupil", "iris adjusts the pupil to control how much light enters"],
              ["Crystalline lens", "convex lens whose focal length can change"],
              ["Ciliary muscles", "change the curvature of the lens"],
              ["Retina", "light-sensitive screen; yellow spot is most sensitive, blind spot has no receptors"],
            ],
          },
          {
            type: "text",
            md: "**Accommodation** is the eye's ability to change the focal length of its lens. To see far objects the ciliary muscles relax and the lens becomes thin; for near objects they contract and the lens becomes thicker. For a normal young eye the **near point** is 25 cm (least distance of distinct vision) and the **far point** is at infinity.",
          },
          {
            type: "table",
            headers: ["Defect", "What goes wrong", "Causes", "Correction"],
            rows: [
              ["Myopia (short sight)", "far point closer than infinity; image of distant objects forms in front of retina", "eyeball too long or lens too curved", "concave lens"],
              ["Hypermetropia (long sight)", "near point farther than 25 cm; image of near objects forms behind retina", "eyeball too short or lens too flat", "convex lens"],
              ["Presbyopia", "near point recedes with age", "ciliary muscles weaken, lens less flexible", "convex or bifocal lens"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which lens corrects each problem?",
              groups: ["Concave lens", "Convex lens"],
              items: [
                { text: "Cannot read the blackboard from the back row", group: 0, hint: "Far objects are blurred: that is myopia." },
                { text: "Cannot read a newspaper held at 25 cm", group: 1, hint: "Near objects are blurred: that is hypermetropia." },
                { text: "Eyeball is too long", group: 0, hint: "The image forms in front of the retina; spread the rays a little first." },
                { text: "Eyeball is too short", group: 1, hint: "The image would form behind the retina; add convergence." },
                { text: "Grandmother's near point has moved to 1 m", group: 1, hint: "Presbyopia makes near vision weak, like hypermetropia." },
                { text: "Far point is only 2 m away", group: 0, hint: "A short far point is myopia." },
              ],
              explain: "**Myopia** (far things blurred) needs a **concave** lens. **Hypermetropia** and **presbyopia** (near things blurred) need a **convex** lens.",
            },
          },
          {
            type: "example",
            title: "Correcting myopia",
            problem: "A student in Pune cannot see clearly beyond 2 m. What lens does she need?",
            steps: [
              "The lens must make a distant object appear to be at her far point, 2 m away.",
              "So $u = \\infty$ and $v = -2$ m. Then $\\tfrac{1}{f} = \\tfrac{1}{v} - \\tfrac{1}{u} = -\\tfrac{1}{2} - 0$, so $f = -2$ m.",
              "$P = \\tfrac{1}{f} = \\tfrac{1}{-2} = -0.5$ D.",
            ],
            answer: "A concave lens of focal length 2 m, power −0.5 D.",
          },
          {
            type: "example",
            title: "Correcting hypermetropia",
            problem: "A man's near point is 1 m. What lens lets him read a book at 25 cm?",
            steps: [
              "The lens must form a virtual image of the book at his near point, 100 cm away.",
              "So $u = -25$ cm and $v = -100$ cm.",
              "$\\tfrac{1}{f} = \\tfrac{1}{v} - \\tfrac{1}{u} = -\\tfrac{1}{100} + \\tfrac{1}{25} = \\tfrac{3}{100}$, so $f = 33.3$ cm.",
              "$P = \\tfrac{1}{0.333} = +3$ D.",
            ],
            answer: "A convex lens of focal length 33.3 cm, power +3 D.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A myopic person's far point is 50 cm. What power of lens (in D) is needed?",
                answer: -2,
                unit: "D",
                explain: "$f = -$ far point $= -0.5$ m, so $P = -2$ D.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "For myopia, the focal length of the concave lens equals the near point distance.",
            right: "For myopia, $f = -(\\text{far point distance})$. A far point of 2 m needs $f = -2$ m.",
            why: "Myopia is about seeing **far** objects, so the lens must bring distant objects to the far point. The near point of a myopic eye is usually fine.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "It is the **ciliary muscles** that change the lens shape, not the iris. The iris only controls the pupil size.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Eye donation",
            md: "A cornea from a donated eye can restore sight to a person with corneal blindness. Eye banks across India collect corneas, and one donor can help up to two people.",
          },
          {
            type: "keypoints",
            items: [
              "Ciliary muscles change the lens curvature: accommodation.",
              "Normal eye: near point 25 cm, far point infinity.",
              "Myopia → concave lens, f = −(far point).",
              "Hypermetropia → convex lens; presbyopia → bifocals.",
            ],
          },
        ],
        flashcards: [
          { front: "Least distance of distinct vision", back: "25 cm for a normal young eye." },
          { front: "Accommodation", back: "The eye lens changing its focal length (via ciliary muscles) to focus near and far objects." },
          { front: "Myopia correction", back: "Concave lens of focal length equal to the far point distance." },
          { front: "Hypermetropia correction", back: "Convex lens." },
          { front: "Blind spot", back: "Point where the optic nerve leaves the retina; no rods or cones, so no image is sensed." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In hypermetropia, the image of a nearby object is formed:",
            options: ["on the retina", "in front of the retina", "behind the retina", "on the blind spot"],
            answer: 2,
            explain: "The eye cannot converge rays enough, so they would meet behind the retina; a convex lens adds the extra convergence.",
          },
          {
            kind: "truefalse",
            q: "When we look at a distant object, the ciliary muscles relax and the eye lens becomes thinner.",
            answer: true,
            explain: "A thinner lens has a longer focal length, suitable for distant objects.",
          },
          {
            kind: "numeric",
            q: "A person's near point is 50 cm. What power of lens (in D) lets them read at 25 cm?",
            answer: 2,
            unit: "D",
            explain: "$u = -25$, $v = -50$: $1/f = -1/50 + 1/25 = 1/50$, so $f = 50$ cm and $P = +2$ D.",
            difficulty: 3,
          },
          {
            kind: "fill",
            q: "The ability of the eye to adjust its focal length is called ___.",
            answer: ["accommodation", "power of accommodation"],
            explain: "Done by the ciliary muscles.",
          },
          {
            kind: "mcq",
            q: "Which part of the eye controls the amount of light entering it?",
            options: ["Cornea", "Iris", "Retina", "Ciliary muscles"],
            answer: 1,
            explain: "The iris widens or narrows the pupil.",
          },
          {
            kind: "numeric",
            q: "A myopic boy cannot see clearly beyond 80 cm. What is the power (in D) of the lens he needs?",
            answer: -1.25,
            tolerance: 0.01,
            unit: "D",
            explain: "$f = -(\\text{far point}) = -0.8$ m, so $P = 1/(-0.8) = -1.25$ D (concave).",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "dispersion-spectrum-scattering",
        title: "Dispersion, Spectrum and Scattering",
        summary: "Splitting white light with a prism, rainbows, atmospheric refraction, the electromagnetic spectrum and why the sky is blue.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "When white light passes through a glass prism it spreads into a band of colours, **VIBGYOR** (violet, indigo, blue, green, yellow, orange, red). This splitting is **dispersion**. It happens because the refractive index of glass is slightly different for each colour: highest for violet, lowest for red. So violet bends the most and red the least.",
          },
          {
            type: "formula",
            tex: "\\mu_{\\text{violet}} > \\mu_{\\text{red}} \\;\\Rightarrow\\; \\delta_{\\text{violet}} > \\delta_{\\text{red}} \\qquad v_{\\text{red}} > v_{\\text{violet}} \\text{ in glass}",
            caption: "In vacuum all colours travel at c; in glass, red travels fastest.",
          },
          {
            type: "list",
            items: [
              "**Recombination:** a second, inverted identical prism recombines the colours into white light (Newton).",
              "**Rainbow:** sunlight is refracted, dispersed, totally internally reflected and refracted again in raindrops. You see it with the Sun **behind** you, common after a monsoon shower.",
              "**Atmospheric refraction:** stars twinkle because air layers of changing density keep shifting their apparent position; the Sun appears about 2 minutes before actual sunrise and stays about 2 minutes after sunset.",
            ],
          },
          {
            type: "heading",
            text: "The electromagnetic spectrum",
          },
          {
            type: "table",
            headers: ["Radiation", "Rough wavelength", "Use"],
            rows: [
              ["Gamma rays", "< 0.01 nm", "cancer treatment, sterilising instruments"],
              ["X-rays", "0.01–10 nm", "medical imaging, checking luggage"],
              ["Ultraviolet", "10–400 nm", "sterilising water, detecting forged notes"],
              ["Visible", "400–700 nm", "seeing"],
              ["Infrared", "700 nm–1 mm", "TV remotes, night vision, heating"],
              ["Microwaves", "1 mm–30 cm", "radar, ovens, satellite links"],
              ["Radio waves", "> 30 cm", "radio, TV, mobile communication"],
            ],
          },
          {
            type: "heading",
            text: "Scattering of light",
          },
          {
            type: "formula",
            tex: "I_{\\text{scattered}} \\propto \\frac{1}{\\lambda^4}",
            caption: "Rayleigh's law, for particles much smaller than the wavelength (air molecules).",
          },
          {
            type: "example",
            title: "How much more is blue scattered?",
            problem: "Take blue-violet light of wavelength 400 nm and red light of 700 nm. How many times more strongly do air molecules scatter the 400 nm light?",
            steps: [
              "Rayleigh's law: $I \\propto \\tfrac{1}{\\lambda^4}$, so $\\tfrac{I_{400}}{I_{700}} = \\left(\\tfrac{700}{400}\\right)^4$.",
              "$\\tfrac{700}{400} = 1.75$, and $1.75^2 = 3.06$.",
              "$1.75^4 = 3.06^2 \\approx 9.4$.",
            ],
            answer: "About 9 times more, which is why the sky looks blue.",
          },
          {
            type: "list",
            items: [
              "At sunrise and sunset light crosses much more air; most blue is scattered out, leaving red and orange, so the Sun looks reddish.",
              "Danger signals are red because red is scattered least and is seen from far away, even through fog.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which effect explains each sight?",
              groups: ["Dispersion", "Atmospheric refraction", "Scattering"],
              items: [
                { text: "A rainbow after a monsoon shower", group: 0, hint: "Raindrops split white light into colours." },
                { text: "Stars twinkle", group: 1, hint: "Air layers of changing density keep bending starlight." },
                { text: "The sky is blue", group: 2, hint: "Air molecules send blue light off in all directions." },
                { text: "The Sun is seen 2 minutes before sunrise", group: 1, hint: "Air bends sunlight over the horizon." },
                { text: "The Sun looks red at sunset", group: 2, hint: "Blue is scattered out along the long path." },
                { text: "A prism makes a VIBGYOR band", group: 0, hint: "Each colour has its own refractive index." },
                { text: "A torch beam is visible in fog", group: 2, hint: "This is the Tyndall effect." },
              ],
              explain: "**Dispersion** splits colours. **Atmospheric refraction** bends light through air of changing density. **Scattering** sends light off in all directions, blue the most.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "To an astronaut on the ISS, the daytime sky looks:",
                options: ["blue", "red", "black", "white"],
                answer: 2,
                explain: "There is no atmosphere to scatter sunlight, so the sky looks dark.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Red light bends the most in a prism, because it is at the top of the spectrum.",
            right: "**Violet** deviates the most and red the least. Red appears at the top only because it is bent least.",
            why: "Red sits at the top of the band, so it looks like the \"leading\" colour. But glass has its highest refractive index for violet, so violet bends most and ends up at the bottom.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Why clouds are white",
            md: "Clouds look **white** because their water droplets are large compared with the wavelength, so they scatter all colours almost equally. Rayleigh's $1/\\lambda^4$ law applies only to very small particles.",
          },
          {
            type: "keypoints",
            items: [
              "Dispersion: different colours have different refractive indices; violet bends most.",
              "Rainbow = refraction + dispersion + internal reflection in raindrops.",
              "EM spectrum: gamma, X, UV, visible, IR, micro, radio (increasing λ).",
              "Scattering ∝ 1/λ⁴ → blue sky, red sunsets, red danger lights.",
            ],
          },
        ],
        flashcards: [
          { front: "Which colour deviates most through a prism?", back: "Violet (highest refractive index)." },
          { front: "Why is the sky blue?", back: "Air molecules scatter short wavelengths (blue) much more than long ones (scattering ∝ 1/λ⁴)." },
          { front: "Why do stars twinkle but planets don't?", back: "Stars are point sources whose light is shifted by changing atmospheric refraction; planets are extended sources, so the effects average out." },
          { front: "Radiation used in TV remotes", back: "Infrared" },
          { front: "Tyndall effect", back: "Scattering of light by colloidal particles, making a beam visible (e.g. sunlight through a forest canopy)." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange in order of increasing wavelength.",
            items: ["Gamma rays", "X-rays", "Ultraviolet", "Visible light", "Infrared", "Radio waves"],
            explain: "Wavelength increases from gamma to radio; frequency decreases.",
          },
          {
            kind: "mcq",
            q: "The Sun appears red at sunset mainly because:",
            options: ["red light is absorbed least by the Sun", "blue light is scattered away along the long path through air", "the Sun cools in the evening", "red light travels faster in air"],
            answer: 1,
            explain: "Near the horizon, light travels through more atmosphere and the shorter wavelengths are scattered out.",
          },
          {
            kind: "truefalse",
            q: "Red light travels faster than violet light in glass.",
            answer: true,
            explain: "Glass has a lower refractive index for red, so red travels faster in it.",
          },
          {
            kind: "fill",
            q: "The splitting of white light into its component colours is called ___.",
            answer: ["dispersion"],
            explain: "Seen with a prism or in a rainbow.",
          },
          {
            kind: "numeric",
            q: "Light of wavelength 400 nm is scattered how many times more than light of 800 nm by air molecules?",
            answer: 16,
            explain: "$(800/400)^4 = 2^4 = 16$.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Clouds look white because:",
            options: ["they reflect only white light", "their droplets are large and scatter all colours about equally", "they scatter blue light the most", "they absorb red light"],
            answer: 1,
            explain: "Rayleigh's $1/\\lambda^4$ rule works only for tiny particles. Large water droplets scatter all colours nearly equally, so the mix looks white.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "household-circuits",
    title: "Household Circuits",
    icon: "🏠",
    description: "How electricity reaches your home, house wiring, fuses, earthing, power ratings and electricity bills.",
    lessons: [
      {
        slug: "power-supply-and-house-wiring",
        title: "From Power Station to Your Socket",
        summary: "High-voltage transmission, the order of components entering a house, live, neutral and earth wires, and ring and tree wiring.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Electricity from a power station such as NTPC's Vindhyachal or a hydro plant in the Himalayas has to travel hundreds of kilometres. It is generated as AC, stepped up to very high voltages (132 kV, 220 kV or 400 kV) for transmission, then stepped down in stages until it reaches your home at **220–230 V, 50 Hz**.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Why transmit at high voltage?",
            md: "For the same power $P = VI$, a higher voltage means a smaller current. The heat lost in the lines is $I^2R$, so cutting the current by 10 cuts the loss by **100**.",
          },
          {
            type: "heading",
            text: "Entering the house",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Pole / service line:** the cable from the street pole.",
              "**Main fuse (company fuse):** sealed by the supply company; protects the supply line.",
              "**kWh meter:** records energy used.",
              "**Main switch:** lets you cut off the whole house.",
              "**Distribution board:** separate fuses or MCBs for each circuit of the house.",
            ],
          },
          {
            type: "table",
            headers: ["Wire", "Potential", "Colour (new / old)"],
            rows: [
              ["Live (phase)", "220 V AC, alternating", "brown / red"],
              ["Neutral", "about 0 V", "light blue / black"],
              ["Earth", "0 V, connected to ground", "green-yellow / green"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which wire does each fact describe?",
              groups: ["Live", "Neutral", "Earth"],
              items: [
                { text: "Brown insulation (new code)", group: 0, hint: "Brown, or red in old wiring, marks the live wire." },
                { text: "Light blue insulation (new code)", group: 1, hint: "Light blue, or black in old wiring, marks the neutral." },
                { text: "Green-yellow insulation", group: 2, hint: "Green-yellow is always earth." },
                { text: "The switch is placed in this wire", group: 0, hint: "Switching the live wire cuts the high voltage off the appliance." },
                { text: "Joined to the metal body of an iron", group: 2, hint: "Leakage current must have a safe path to the ground." },
                { text: "Carries current back at about 0 V", group: 1, hint: "This is the normal return path of the circuit." },
              ],
              explain: "**Live** is at high voltage and carries the switch and fuse. **Neutral** is the return path at about 0 V. **Earth** is a safety wire joined to metal bodies and normally carries no current.",
            },
          },
          {
            type: "heading",
            text: "Ring and tree systems",
          },
          {
            type: "text",
            md: "In older **tree systems**, each branch runs from the distribution board to a group of outlets. In the **ring main system** the live, neutral and earth wires run in a loop starting and ending at the distribution board. Sockets are tapped off the ring, current reaches each socket by two paths, and thinner wire can be used. Each appliance is protected by its own fuse. In Indian homes lighting circuits are typically rated 5 A and power circuits 15 A.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Arrange the components in the order that the supply passes through them on entering a house.",
                items: ["Pole", "Main fuse", "kWh meter", "Main switch", "Distribution board"],
                explain: "Company fuse first, then the meter, then the consumer's main switch and distribution board.",
              },
            ],
          },
          {
            type: "example",
            title: "Transmission loss",
            problem: "A line of resistance 5 Ω must carry 1 MW of power. Compare the heat lost in the line at 10 kV and at 100 kV.",
            steps: [
              "At 10 kV: $I = \\tfrac{P}{V} = \\tfrac{10^6}{10^4} = 100$ A.",
              "Loss $= I^2R = 100^2 \\times 5 = 50\\,000$ W $= 50$ kW.",
              "At 100 kV: $I = \\tfrac{10^6}{10^5} = 10$ A, so loss $= 10^2 \\times 5 = 500$ W.",
            ],
            answer: "50 kW at 10 kV but only 500 W at 100 kV: ten times the voltage gives one-hundredth of the loss.",
          },
          {
            type: "mistake",
            wrong: "It does not matter whether the switch is in the live or the neutral wire; either way the bulb goes off.",
            right: "Switches and fuses must be in the **live** wire.",
            why: "A switch in the neutral does stop the current, so the bulb goes off. But the appliance is still joined to the live wire at 220 V, so touching it while \"off\" can give a shock. The neutral is not \"dead\" in every fault either, so never assume it is safe to touch.",
          },
          {
            type: "keypoints",
            items: [
              "Indian domestic supply: 220–230 V, 50 Hz AC.",
              "Transmit at high voltage to reduce I²R loss.",
              "Order: pole → main fuse → kWh meter → main switch → distribution board.",
              "Live: brown/red; neutral: light blue/black; earth: green-yellow.",
              "Switches and fuses go in the live wire.",
            ],
          },
        ],
        flashcards: [
          { front: "Frequency of AC supply in India", back: "50 Hz" },
          { front: "Colour of live wire (new convention)", back: "Brown (old: red)" },
          { front: "Advantage of ring main system", back: "Current reaches sockets by two paths, so thinner wire can be used and each appliance has its own fuse." },
          { front: "Why step up voltage for transmission?", back: "Lower current for the same power means less I²R heating loss in the lines." },
          { front: "Order of components entering a house", back: "Pole → main fuse → kWh meter → main switch → distribution board." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which wire is at a high alternating potential in a household circuit?",
            options: ["Neutral", "Earth", "Live", "All three"],
            answer: 2,
            explain: "The live (phase) wire alternates about ±311 V peak (220 V rms).",
          },
          {
            kind: "truefalse",
            q: "The switch of an appliance should be connected in the neutral wire.",
            answer: false,
            explain: "It must be in the live wire so the appliance is disconnected from high voltage when off.",
          },
          {
            kind: "numeric",
            q: "If the transmission voltage is doubled for the same power, the power loss in the line becomes what fraction of the original? Enter as a decimal.",
            answer: 0.25,
            explain: "Current halves; loss ∝ I², so it becomes 1/4 = 0.25 of the original.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The device that records the electrical energy consumed in a house is the ___ meter.",
            answer: ["kWh", "kilowatt-hour", "energy", "electricity"],
            explain: "It measures energy in kilowatt-hours (units).",
          },
          {
            kind: "mcq",
            q: "The earth wire is connected to:",
            options: ["the switch", "the metal body of the appliance", "the fuse", "the heating element"],
            answer: 1,
            explain: "It provides a low-resistance path to ground for leakage current.",
          },
          {
            kind: "numeric",
            q: "A 2 Ω line carries 400 kW at 20 kV. How much power (in kW) is lost as heat in the line?",
            answer: 0.8,
            tolerance: 0.01,
            unit: "kW",
            explain: "$I = 400\\,000/20\\,000 = 20$ A; loss $= 20^2 \\times 2 = 800$ W $= 0.8$ kW.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "fuses-earthing-and-bills",
        title: "Fuses, Earthing and Electricity Bills",
        summary: "Choosing fuse ratings, MCBs, earthing and three-pin plugs, short circuits and overloading, and calculating the bill in kWh.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Household electricity is safe only when the circuit protects itself. Three ideas do most of the work: a **fuse or MCB** cuts the current if it gets too large, **earthing** gives leakage current a safe path to ground, and **correct ratings** stop wires from overheating.",
          },
          {
            type: "list",
            items: [
              "**Fuse:** a short wire of low melting point (tin–lead alloy) in the live wire. Too much current heats it ($H = I^2Rt$), it melts and breaks the circuit.",
              "**MCB (miniature circuit breaker):** a switch that trips automatically on overcurrent and can simply be reset.",
              "**RCCB / ELCB:** trips when current in live and neutral differ, i.e. when current leaks through a person or to earth.",
              "**Short circuit:** live touches neutral directly; resistance falls to almost zero and current shoots up.",
              "**Overloading:** too many appliances on one socket draw more current than the wiring is rated for.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What kind of fault is each one?",
              groups: ["Short circuit", "Overloading", "Earth leakage"],
              items: [
                { text: "Worn insulation lets live and neutral touch", group: 0, hint: "Live meets neutral directly, so resistance falls to almost zero." },
                { text: "Heater, iron and geyser on one socket", group: 1, hint: "Too many appliances draw more current than the wiring is rated for." },
                { text: "Live wire touches the metal body of a washing machine", group: 2, hint: "Current tries to escape to the ground through the body." },
                { text: "A frayed mixer cord sparks where the wires meet", group: 0, hint: "The two supply wires have met without passing through the appliance." },
                { text: "Ten plugs in one multi-plug adapter", group: 1, hint: "Each plug adds current through the same socket wiring." },
                { text: "A wet hand gets a shock from a faulty kettle", group: 2, hint: "Current leaks through the person to earth; an RCCB catches this." },
              ],
              explain: "A **fuse or MCB** cuts off a short circuit or overload. Earth leakage through a person may be too small to blow a fuse, so the **earth wire** and an **RCCB** handle it.",
            },
          },
          {
            type: "example",
            title: "Choosing a fuse",
            problem: "A 2 kW geyser runs on a 220 V supply. Which fuse should be used: 5 A, 10 A or 30 A?",
            steps: [
              "Normal current $I = \\tfrac{P}{V} = \\tfrac{2000}{220} \\approx 9.1$ A.",
              "The fuse must carry this current without melting, so 5 A is too small: it would blow every time.",
              "It must melt soon after the current goes above normal, so 30 A is too large: it would not protect the wiring.",
            ],
            answer: "A 10 A fuse, rated a little above the normal current of 9.1 A.",
          },
          {
            type: "heading",
            text: "Electrical energy and the bill",
          },
          {
            type: "formula",
            tex: "E = P \\times t \\qquad 1\\ \\text{kWh} = 1000\\ \\text{W} \\times 3600\\ \\text{s} = 3.6 \\times 10^6\\ \\text{J}",
            caption: "One kWh is the 'unit' printed on your electricity bill.",
          },
          {
            type: "example",
            title: "Electricity bill",
            problem: "A family in Delhi runs a 1.5 kW air conditioner for 8 h a day for 30 days. What does it cost at ₹7 per unit?",
            steps: [
              "Energy $= P \\times t = 1.5 \\text{ kW} \\times 8 \\text{ h} \\times 30 = 360$ kWh.",
              "1 kWh = 1 unit, so the AC uses 360 units.",
              "Cost $= 360 \\times 7 = ₹2520$.",
            ],
            answer: "360 units, costing ₹2520.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Five 20 W LED bulbs are used 6 hours a day for 30 days. How many units (kWh) are consumed?",
                answer: 18,
                unit: "kWh",
                explain: "$5 \\times 20 = 100$ W $= 0.1$ kW; $0.1 \\times 6 \\times 30 = 18$ kWh.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Earthing and the three-pin plug",
            md: "The earth pin of a three-pin plug is **longer and thicker**. Longer, so it connects first and disconnects last; thicker, so it can't go into the wrong hole. If the live wire touches the metal body of an iron, current flows straight to earth and the fuse blows instead of passing through you.",
          },
          {
            type: "mistake",
            wrong: "If a fuse keeps blowing, replace it with a thicker copper wire so it lasts.",
            right: "Find and fix the fault, then use a fuse wire of the **correct rating** (or reset the MCB).",
            why: "The thicker wire stops the annoying blow-outs, so it seems to work. But copper has a high melting point and will not melt in an overload, so the house wiring can overheat and catch fire.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A fuse protects the **wiring and appliance**, not your life directly: a few tens of milliamps through the body can be fatal, far below a fuse rating. That's why an RCCB is used.",
          },
          {
            type: "keypoints",
            items: [
              "Fuse: low-melting alloy in the live wire; rating slightly above normal current.",
              "MCB trips and resets; RCCB detects leakage to earth.",
              "Earth pin: longer and thicker; earth wire on metal bodies.",
              "Energy (kWh) = power (kW) × time (h); 1 kWh = 3.6 × 10⁶ J.",
            ],
          },
        ],
        flashcards: [
          { front: "Material of a fuse wire", back: "An alloy of tin and lead (low melting point)." },
          { front: "1 kWh in joules", back: "3.6 × 10⁶ J" },
          { front: "Why is the earth pin longer?", back: "So the appliance is earthed before live and neutral connect, and stays earthed until they disconnect." },
          { front: "Short circuit", back: "Live and neutral wires touch directly; resistance drops sharply and current becomes very large." },
          { front: "Advantage of MCB over fuse", back: "It can be reset, trips faster and needs no replacement wire." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 1100 W electric iron is used on a 220 V supply. What current does it draw?",
            answer: 5,
            unit: "A",
            explain: "$I = P/V = 1100/220 = 5$ A.",
          },
          {
            kind: "mcq",
            q: "For the iron in the previous question, the best fuse rating is:",
            options: ["3 A", "5 A", "6 A", "30 A"],
            answer: 2,
            explain: "Slightly above the normal 5 A, so 6 A. A 5 A fuse would blow at normal use; 30 A gives no protection.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 2 kW heater is used for 3 hours daily for 30 days. Find the bill in rupees at ₹6 per unit.",
            answer: 1080,
            unit: "₹",
            explain: "$2 \\times 3 \\times 30 = 180$ kWh; $180 \\times 6 = ₹1080$.",
          },
          {
            kind: "truefalse",
            q: "A fuse wire should have a high melting point.",
            answer: false,
            explain: "It needs a low melting point so it melts quickly on overcurrent.",
          },
          {
            kind: "fill",
            q: "The metal body of an electric appliance is connected to the ___ wire for safety.",
            answer: ["earth", "earthing", "ground"],
            explain: "Leakage current then flows to earth and the fuse blows.",
          },
          {
            kind: "mcq",
            q: "A shopkeeper replaces a blown 5 A fuse with a thick copper wire. What is the danger?",
            options: ["The bulb will glow dimly", "The wire will melt too quickly", "The wiring may overheat and catch fire in an overload", "The meter will stop working"],
            answer: 2,
            explain: "Copper has a high melting point, so it will not break the circuit when the current is too large. The wiring heats up instead.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "magnetic-effects-of-electric-current",
    title: "Magnetic Effects of Electric Current",
    icon: "🧲",
    description: "Magnetic fields of currents, electromagnets, the motor effect, electromagnetic induction, generators and transformers.",
    lessons: [
      {
        slug: "magnetic-field-of-a-current",
        title: "Magnetic Field of a Current",
        summary: "Oersted's discovery, the right-hand thumb rule, fields of a straight wire, a loop and a solenoid, and electromagnets.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "In 1820 Hans Christian Oersted noticed that a compass needle swung when current flowed in a nearby wire. Electricity and magnetism were linked: **a current-carrying conductor produces a magnetic field around it.**",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Right-hand thumb rule",
            md: "Hold the wire in your right hand with the thumb pointing along the current. Your curled fingers show the direction of the magnetic field lines.",
          },
          {
            type: "table",
            headers: ["Conductor", "Shape of field lines", "Field gets stronger when"],
            rows: [
              ["Straight wire", "concentric circles around the wire", "current increases; closer to the wire"],
              ["Circular loop", "circles near the wire, nearly straight at the centre", "current or number of turns increases; smaller radius"],
              ["Solenoid", "uniform and parallel inside, like a bar magnet outside", "current or turns per unit length increases; soft-iron core added"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does each change make the magnetic field stronger or weaker?",
              groups: ["Stronger", "Weaker"],
              items: [
                { text: "Wind more turns on the solenoid", group: 0, hint: "Each turn adds its own field." },
                { text: "Increase the current", group: 0, hint: "Field strength grows with current." },
                { text: "Put a soft-iron core inside", group: 0, hint: "Soft iron becomes magnetised and adds to the field." },
                { text: "Move the compass farther from the wire", group: 1, hint: "The field weakens with distance from a straight wire." },
                { text: "Reduce the current", group: 1, hint: "Less current, less field." },
                { text: "Make the circular loop bigger", group: 1, hint: "A larger radius gives a weaker field at the centre." },
              ],
              explain: "More **current**, more **turns** and a **soft-iron core** strengthen the field. Distance and a larger loop radius weaken it.",
            },
          },
          {
            type: "text",
            md: "**Clock rule for a loop or solenoid end:** looking at the face, if the current flows **anticlockwise** that face is a **north** pole; if **clockwise**, it is a **south** pole.",
          },
          {
            type: "example",
            title: "Finding the poles of a solenoid",
            problem: "Ravi looks at end A of a solenoid and sees the current flowing anticlockwise. Which pole is end A? What happens when he brings the north pole of a bar magnet near A, and then reverses the current?",
            steps: [
              "Clock rule: anticlockwise current at a face → that face is a **north** pole. So A is N.",
              "Like poles repel, so the bar magnet's north pole is pushed away from A.",
              "Reversing the current makes the current at A clockwise, so A becomes a **south** pole.",
              "Unlike poles attract, so the bar magnet is now pulled towards A.",
            ],
            answer: "End A is a north pole and repels the magnet; after reversing the current A is a south pole and attracts it.",
          },
          {
            type: "heading",
            text: "Electromagnets",
          },
          {
            type: "text",
            md: "A solenoid wound on a **soft iron** core becomes a strong magnet while current flows and loses its magnetism when current stops. Soft iron is used because it is easily magnetised and demagnetised. Steel keeps its magnetism and is used for permanent magnets instead. Electromagnets are used in electric bells, cranes in scrapyards, MRI scanners and relays.",
          },
          {
            type: "heading",
            text: "Electromagnet vs permanent magnet",
          },
          {
            type: "table",
            headers: ["Feature", "Electromagnet", "Permanent magnet"],
            rows: [
              ["Core", "soft iron", "steel or alloys (alnico, neodymium)"],
              ["Strength", "can be changed with current or turns", "fixed"],
              ["Polarity", "reversed by reversing current", "fixed"],
              ["Switching off", "magnetism vanishes", "not possible"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Looking at one end of a solenoid, the current flows clockwise. That end is a:",
                options: ["north pole", "south pole", "neutral point", "it depends on the core"],
                answer: 1,
                explain: "Clockwise current → south pole (clock rule).",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Field lines always run from N to S, inside a solenoid as well.",
            right: "Outside the solenoid the lines run **N to S**; inside they run **S to N**, so each line is a closed loop.",
            why: "\"North to south\" is the rule we learn first, so students apply it everywhere. But field lines never start or stop; they must come back through the inside to close the loop.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Drawing tip",
            md: "Around a straight wire the field circles get **farther apart** with distance, because the field weakens away from the wire.",
          },
          {
            type: "illustration",
            emoji: "🔔",
            caption: "An electric bell: the electromagnet pulls the hammer, which breaks the circuit, which releases the hammer, which remakes the circuit, many times a second.",
          },
          {
            type: "keypoints",
            items: [
              "A current produces a magnetic field (Oersted, 1820).",
              "Right-hand thumb rule gives field direction around a wire.",
              "Solenoid ≈ bar magnet; field inside is uniform.",
              "Anticlockwise face → N, clockwise face → S.",
              "Electromagnet: soft iron core, strength depends on current and turns.",
            ],
          },
        ],
        flashcards: [
          { front: "Right-hand thumb rule", back: "Thumb along current, curled fingers give the field direction around a straight wire." },
          { front: "Field inside a long solenoid", back: "Uniform: parallel, equally spaced lines." },
          { front: "Why soft iron for electromagnets?", back: "It magnetises strongly and loses magnetism as soon as current stops." },
          { front: "Clock rule", back: "Anticlockwise current at a face → North pole; clockwise → South pole." },
          { front: "Direction of field lines inside a solenoid", back: "From S to N (outside they run N to S), so each line is a closed loop." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The magnetic field lines around a straight current-carrying wire are:",
            options: ["parallel straight lines", "concentric circles", "radial lines", "ellipses"],
            answer: 1,
            explain: "They are concentric circles centred on the wire.",
          },
          {
            kind: "truefalse",
            q: "Reversing the current in a solenoid reverses its magnetic poles.",
            answer: true,
            explain: "The field direction depends on the current direction.",
          },
          {
            kind: "fill",
            q: "A coil of many turns of insulated wire wound in the shape of a cylinder is called a ___.",
            answer: ["solenoid"],
            explain: "It behaves like a bar magnet when current flows.",
          },
          {
            kind: "multi",
            q: "Which changes make an electromagnet stronger?",
            options: ["Increasing the current", "Increasing the number of turns", "Using a soft iron core", "Using a wooden core"],
            answers: [0, 1, 2],
            explain: "Wood is non-magnetic and gives no strengthening.",
          },
          {
            kind: "mcq",
            q: "Who first showed that an electric current produces a magnetic field?",
            options: ["Faraday", "Oersted", "Fleming", "Maxwell"],
            answer: 1,
            explain: "Oersted's compass experiment in 1820.",
          },
          {
            kind: "mcq",
            q: "Inside a current-carrying solenoid, the magnetic field lines run:",
            options: ["from N to S", "from S to N", "in circles around each turn only", "nowhere: the field inside is zero"],
            answer: 1,
            explain: "Field lines are closed loops: N to S outside, and back from S to N inside, where the field is strong and uniform.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "motor-induction-and-transformers",
        title: "Motors, Induction and Transformers",
        summary: "Force on a current in a magnetic field, the DC motor, electromagnetic induction, the AC generator and the transformer.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A current-carrying wire placed in a magnetic field feels a **force**. This motor effect turns ceiling fans, mixer-grinders and the motors of Mumbai's local trains. Run the idea backwards, move a wire in a field, and you get a current: that is how every power station generates electricity.",
          },
          {
            type: "formula",
            tex: "F = B I L \\quad (\\text{wire perpendicular to } B)",
            caption: "B in tesla, I in amperes, L in metres. The force is zero if the wire is parallel to the field.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Fleming's two hands",
            md: "**Left hand (motors):** First finger = Field, seCond finger = Current, thuMb = Motion (force).\n\n**Right hand (generators):** same fingers, but now the thumb is the motion you give the wire and the second finger shows the induced current.",
          },
          {
            type: "example",
            problem: "A 20 cm wire carries 4 A at right angles to a magnetic field of 0.5 T. Find the force on it. What happens if the current is doubled, or the wire is turned parallel to the field?",
            steps: [
              "Convert length: $L = 20$ cm $= 0.2$ m.",
              "$F = BIL = 0.5 \\times 4 \\times 0.2 = 0.4$ N.",
              "F is proportional to I, so doubling the current gives $0.8$ N.",
              "A wire parallel to the field feels no force.",
            ],
            answer: "0.4 N; it becomes 0.8 N with double the current and 0 when the wire is parallel to the field.",
          },
          {
            type: "text",
            md: "**DC motor:** a rectangular coil (armature) sits between magnet poles. Forces on opposite sides act in opposite directions, so the coil turns. A **split-ring commutator** reverses the current every half turn so the coil keeps rotating the same way. Carbon **brushes** carry current to the commutator.",
          },
          {
            type: "heading",
            text: "Electromagnetic induction",
          },
          {
            type: "list",
            items: [
              "**Faraday:** an emf is induced whenever the magnetic flux linked with a coil changes. Faster change → bigger emf.",
              "**Lenz's law:** the induced current opposes the change that produces it. This is energy conservation: you must do work to push a magnet into a coil.",
              "**AC generator:** a coil rotated in a field gives an emf that reverses every half turn; **slip rings** take it out as AC. In India it completes 50 cycles per second.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does each belong to the DC motor or the AC generator?",
              groups: ["DC motor", "AC generator"],
              items: [
                { text: "Split-ring commutator", group: 0, hint: "It reverses the current every half turn so the motor keeps turning one way." },
                { text: "Slip rings", group: 1, hint: "Full rings let the alternating emf come out as AC." },
                { text: "Fleming's left-hand rule", group: 0, hint: "Left hand: force on a current in a field (motor)." },
                { text: "Fleming's right-hand rule", group: 1, hint: "Right hand: induced current from motion (generator)." },
                { text: "Electrical energy → mechanical energy", group: 0, hint: "A motor uses current to make motion." },
                { text: "Mechanical energy → electrical energy", group: 1, hint: "A generator uses motion to make current." },
              ],
              explain: "**Motor**: current in, motion out, left hand, split ring. **Generator**: motion in, current out, right hand, slip rings.",
            },
          },
          {
            type: "formula",
            tex: "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} \\quad (\\text{ideal transformer})",
            caption: "Step-up: N_s > N_p. Step-down: N_s < N_p. Works only with AC.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A step-down transformer converts 220 V to 11 V. Its primary has 2000 turns. How many turns does the secondary have?",
                answer: 100,
                explain: "$N_s = N_p \\times V_s/V_p = 2000 \\times 11/220 = 100$.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A step-up transformer gives more energy, because the voltage goes up.",
            right: "An ideal transformer gives out the **same power** it takes in: $V_pI_p = V_sI_s$. If the voltage goes up, the current goes down.",
            why: "A bigger number on the output side feels like a gain. But a transformer only changes voltage and current; energy is conserved, and a real one loses a little as heat.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Don't mix up the hands: **left** for motors, **right** for generators. Also, a DC motor uses a **split ring**, an AC generator uses **slip rings**. A transformer cannot work on steady DC because there is no changing flux.",
          },
          {
            type: "keypoints",
            items: [
              "Force on a wire: F = BIL, direction by Fleming's left-hand rule.",
              "DC motor: electrical → mechanical; split-ring commutator.",
              "Changing flux induces emf (Faraday); it opposes the change (Lenz).",
              "AC generator: mechanical → electrical; slip rings; right-hand rule.",
              "Transformer: Vs/Vp = Ns/Np; works only on AC.",
            ],
          },
        ],
        flashcards: [
          { front: "Fleming's left-hand rule is used for", back: "Finding the direction of force on a current-carrying conductor (motors)." },
          { front: "Role of the split-ring commutator", back: "Reverses the current in the coil every half rotation so the motor turns continuously one way." },
          { front: "Lenz's law", back: "The induced current flows so as to oppose the change in flux producing it." },
          { front: "Transformer turns ratio", back: "Vs/Vp = Ns/Np" },
          { front: "Why can't a transformer step up DC?", back: "Steady DC gives no changing flux, so no emf is induced in the secondary." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A 0.5 m wire carrying 2 A is perpendicular to a 0.3 T field. Find the force in newtons.",
            answer: 0.3,
            unit: "N",
            explain: "$F = 0.3 \\times 2 \\times 0.5 = 0.3$ N.",
          },
          {
            kind: "mcq",
            q: "An AC generator converts:",
            options: ["electrical energy to mechanical", "mechanical energy to electrical", "chemical energy to electrical", "heat to electrical"],
            answer: 1,
            explain: "Turning the coil (mechanical work) induces an emf.",
          },
          {
            kind: "truefalse",
            q: "In an ideal step-up transformer, the secondary current is larger than the primary current.",
            answer: false,
            explain: "Power is conserved: if voltage goes up, current goes down.",
          },
          {
            kind: "numeric",
            q: "An ideal transformer has Np = 500 and Ns = 2500. If the primary voltage is 220 V, what is the secondary voltage?",
            answer: 1100,
            unit: "V",
            explain: "$V_s = 220 \\times 2500/500 = 1100$ V.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The phenomenon of producing an induced emf by changing the magnetic flux through a coil is called electromagnetic ___.",
            answer: ["induction"],
            explain: "Discovered by Michael Faraday in 1831.",
          },
          {
            kind: "numeric",
            q: "An ideal step-down transformer changes 220 V to 22 V. The primary current is 0.5 A. What is the secondary current in amperes?",
            answer: 5,
            unit: "A",
            explain: "Power in = power out: $220 \\times 0.5 = 22 \\times I_s$, so $I_s = 5$ A.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "radioactivity",
    title: "Radioactivity",
    icon: "☢️",
    description: "The nucleus, alpha, beta and gamma radiation, radioactive decay, nuclear energy, uses and safety.",
    lessons: [
      {
        slug: "nucleus-and-radiations",
        title: "The Nucleus and Its Radiations",
        summary: "Atomic and mass numbers, isotopes, the properties of alpha, beta and gamma radiation and how each changes the nucleus.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "In 1896 Henri Becquerel found that uranium salts fogged a wrapped photographic plate. Some nuclei are unstable and **spontaneously** emit radiation to become more stable. This is **radioactivity**. It is a purely **nuclear** process, so heating, pressure or chemical combination don't change it.",
          },
          {
            type: "formula",
            tex: "{}^{A}_{Z}\\mathrm{X} \\qquad A = Z + N",
            caption: "Z = atomic number (protons), N = neutrons, A = mass number (nucleons).",
          },
          {
            type: "list",
            items: [
              "**Isotopes:** same Z, different A (e.g. carbon-12 and carbon-14).",
              "**Isobars:** same A, different Z (e.g. argon-40 and calcium-40).",
              "**Isotones:** same number of neutrons N.",
            ],
          },
          {
            type: "table",
            headers: ["Property", "Alpha (α)", "Beta (β)", "Gamma (γ)"],
            rows: [
              ["Nature", "helium nucleus ${}^4_2\\mathrm{He}$", "fast electron", "electromagnetic wave (photon)"],
              ["Charge", "+2e", "−e", "0"],
              ["Mass", "4 u", "≈ 0.00055 u (about 1/1836 of a proton)", "0"],
              ["Speed", "up to about 0.1c", "up to 0.99c", "c"],
              ["Ionising power", "highest", "medium", "lowest"],
              ["Penetration", "stopped by paper / few cm of air", "few mm of aluminium", "several cm of lead"],
              ["In electric/magnetic field", "deflected slightly", "deflected strongly, opposite to α", "not deflected"],
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Alpha, beta or gamma? Sort each property.",
              groups: ["Alpha (α)", "Beta (β)", "Gamma (γ)"],
              items: [
                { text: "Stopped by a sheet of paper", group: 0, hint: "The heaviest, most ionising radiation is stopped most easily." },
                { text: "A fast electron from the nucleus", group: 1, hint: "A neutron turns into a proton and this particle." },
                { text: "Not deflected by a magnetic field", group: 2, hint: "Only an uncharged wave passes straight through." },
                { text: "Charge +2e and mass 4 u", group: 0, hint: "This is a helium nucleus." },
                { text: "Needs several cm of lead to stop it", group: 2, hint: "The most penetrating radiation." },
                { text: "Stopped by a few mm of aluminium", group: 1, hint: "Medium penetration." },
                { text: "Travels at the speed of light", group: 2, hint: "It is an electromagnetic wave." },
              ],
              explain: "**α** is heavy, +2e, most ionising, least penetrating. **β** is a fast electron, medium in both. **γ** is an uncharged wave, least ionising, most penetrating.",
            },
          },
          {
            type: "heading",
            text: "Changes in the nucleus",
          },
          {
            type: "formula",
            tex: "\\alpha:\\; {}^{A}_{Z}\\mathrm{X} \\to {}^{A-4}_{Z-2}\\mathrm{Y} + {}^4_2\\mathrm{He} \\qquad \\beta:\\; {}^{A}_{Z}\\mathrm{X} \\to {}^{A}_{Z+1}\\mathrm{Y} + {}^{\\;\\,0}_{-1}e",
            caption: "In β decay a neutron turns into a proton and an electron. Gamma emission changes neither A nor Z.",
          },
          {
            type: "example",
            problem: "Uranium-238 ($Z = 92$) emits an α particle, then a β particle, then a γ ray. What nucleus is left after each step?",
            steps: [
              "α emission: $A = 238 - 4 = 234$, $Z = 92 - 2 = 90$, giving thorium-234.",
              "β emission: $A$ stays 234, $Z = 90 + 1 = 91$, giving protactinium-234.",
              "γ emission: A and Z do not change; the nucleus only loses energy.",
            ],
            answer: "${}^{238}_{92}\\mathrm{U} \\to {}^{234}_{90}\\mathrm{Th} \\to {}^{234}_{91}\\mathrm{Pa}$, and the γ ray leaves ${}^{234}_{91}\\mathrm{Pa}$ unchanged.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A nucleus with Z = 88 and A = 226 emits one α particle and then two β particles. What is the new atomic number?",
                answer: 88,
                explain: "α: Z → 86; two β: Z → 86 + 2 = 88. (A becomes 222.) It is an isotope of the original element.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A β particle is one of the atom's orbiting electrons that has been knocked out.",
            right: "A β particle is made **inside the nucleus** when a neutron turns into a proton and an electron. That is why Z goes up by 1.",
            why: "It is an electron, so it is natural to think it comes from the shells. But losing a shell electron would only make an ion; it could not change Z or turn the atom into a new element.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "The most **ionising** radiation (α) is the least **penetrating**. Students often reverse these two rankings.",
          },
          {
            type: "keypoints",
            items: [
              "Radioactivity is spontaneous and unaffected by physical or chemical conditions.",
              "α: Z − 2, A − 4. β: Z + 1, A same. γ: no change.",
              "Ionising power α > β > γ; penetration γ > β > α.",
              "γ rays carry no charge and are not deflected by fields.",
            ],
          },
        ],
        flashcards: [
          { front: "Alpha particle", back: "Helium nucleus: 2 protons + 2 neutrons, charge +2e, mass 4 u." },
          { front: "Effect of β emission on Z and A", back: "Z increases by 1; A unchanged." },
          { front: "Most penetrating radiation", back: "Gamma rays (stopped only by thick lead or concrete)." },
          { front: "Isotopes", back: "Atoms with the same atomic number but different mass numbers." },
          { front: "Where does a β particle come from?", back: "From the nucleus: a neutron changes into a proton and an electron." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which radiation is NOT deflected by a magnetic field?",
            options: ["Alpha", "Beta", "Gamma", "All are deflected"],
            answer: 2,
            explain: "Gamma rays carry no charge.",
          },
          {
            kind: "numeric",
            q: "Uranium-238 (Z = 92) emits 2 α particles. What is the new mass number?",
            answer: 230,
            explain: "Each α reduces A by 4: $238 - 8 = 230$ (and Z becomes 88).",
          },
          {
            kind: "truefalse",
            q: "Heating a radioactive sample strongly speeds up its radioactive decay.",
            answer: false,
            explain: "Radioactivity is a nuclear process, unaffected by temperature.",
          },
          {
            kind: "order",
            q: "Arrange in order of increasing penetrating power.",
            items: ["Alpha", "Beta", "Gamma"],
            explain: "Alpha is stopped by paper, beta by a few mm of aluminium, gamma needs thick lead.",
          },
          {
            kind: "fill",
            q: "Atoms with the same mass number but different atomic numbers are called ___.",
            answer: ["isobars"],
            explain: "E.g. ⁴⁰Ar and ⁴⁰Ca.",
          },
          {
            kind: "mcq",
            q: "Which radiation has the greatest ionising power?",
            options: ["Gamma, because it is the most penetrating", "Beta", "Alpha", "All three are equal"],
            answer: 2,
            explain: "Alpha is heavy and doubly charged, so it ionises strongly and loses its energy quickly. That is also why it is the least penetrating.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "nuclear-energy-uses-safety",
        title: "Half-life, Nuclear Energy, Uses and Safety",
        summary: "Half-life, background radiation, fission and fusion with E = mc², uses of radioisotopes and safety precautions.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "We cannot say when one particular nucleus will decay, but in a large sample a fixed fraction decays in a fixed time. The **half-life** $T_{1/2}$ is the time in which half of the radioactive nuclei in a sample decay. It ranges from fractions of a second to billions of years.",
          },
          {
            type: "formula",
            tex: "N = N_0 \\left(\\tfrac{1}{2}\\right)^{n}, \\qquad n = \\frac{t}{T_{1/2}}",
          },
          {
            type: "example",
            problem: "A hospital receives 64 mg of a radioisotope with a half-life of 5 days. How much is left after 20 days, and how much has decayed?",
            steps: [
              "Number of half-lives: $n = \\tfrac{t}{T_{1/2}} = \\tfrac{20}{5} = 4$.",
              "Halve four times: 64 → 32 → 16 → 8 → 4 mg.",
              "Check with the formula: $64 \\times (1/2)^4 = 64/16 = 4$ mg.",
              "Decayed $= 64 - 4 = 60$ mg.",
            ],
            answer: "4 mg remains and 60 mg has decayed.",
          },
          {
            type: "text",
            md: "**Background radiation** is the low level of radiation always around us: cosmic rays, radon gas from rocks, potassium-40 in our own bodies and food. Parts of coastal Kerala have unusually high natural background radiation because the beach sands contain thorium-rich monazite.",
          },
          {
            type: "heading",
            text: "Nuclear energy",
          },
          {
            type: "formula",
            tex: "E = \\Delta m\\, c^2 \\qquad 1\\ \\text{u} \\equiv 931.5\\ \\text{MeV}",
            caption: "A small loss of mass Δm in a nuclear reaction appears as a large amount of energy.",
          },
          {
            type: "table",
            headers: ["", "Fission", "Fusion"],
            rows: [
              ["Process", "heavy nucleus (U-235) splits after absorbing a slow neutron", "light nuclei (hydrogen isotopes) combine"],
              ["Example", "${}^{235}\\mathrm{U} + n \\to {}^{141}\\mathrm{Ba} + {}^{92}\\mathrm{Kr} + 3n$", "${}^2\\mathrm{H} + {}^3\\mathrm{H} \\to {}^4\\mathrm{He} + n$"],
              ["Energy", "≈ 200 MeV per fission", "≈ 17.6 MeV per reaction, but more per kg of fuel"],
              ["Where", "nuclear reactors: Tarapur, Kudankulam, Kaiga", "the Sun and stars; ITER (India is a partner)"],
              ["Conditions", "controlled chain reaction, moderator and control rods", "extremely high temperature and pressure"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "What fraction of a radioactive sample remains after 3 half-lives? Enter as a decimal.",
                answer: 0.125,
                explain: "$(1/2)^3 = 1/8 = 0.125$.",
              },
            ],
          },
          {
            type: "heading",
            text: "Uses and safety",
          },
          {
            type: "list",
            items: [
              "**Medicine:** cobalt-60 γ rays for cancer therapy and sterilising syringes; iodine-131 for thyroid disorders; sodium-24 to trace blood clots.",
              "**Dating:** carbon-14 to date ancient wood and bones.",
              "**Agriculture and industry:** phosphorus-32 to study fertiliser uptake, gamma irradiation to stop onions sprouting, tracers to find leaks in pipelines.",
              "**Safety:** handle sources with long tongs, store them in thick lead containers, wear lead aprons, monitor dose with film badges, and never eat or drink near sources.",
              "**Harm:** radiation damages cells (burns, cancers) and can cause genetic mutations passed to offspring.",
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each radioisotope to its use.",
              pairs: [
                ["Cobalt-60", "Cancer therapy"],
                ["Iodine-131", "Thyroid disorders"],
                ["Carbon-14", "Dating ancient wood and bones"],
                ["Phosphorus-32", "Studying fertiliser uptake by plants"],
                ["Sodium-24", "Tracing blood clots"],
              ],
              explain: "Each isotope is picked for its radiation and its chemistry: iodine collects in the thyroid, carbon is in all living things, and cobalt-60 gives strong γ rays.",
            },
          },
          {
            type: "mistake",
            wrong: "If the half-life is 5 days, the whole sample has decayed after 10 days.",
            right: "After two half-lives **one-quarter** remains and three-quarters has decayed. Each half-life halves what is **left**, so a sample never quite reaches zero.",
            why: "\"Half in 5 days, the other half in the next 5\" sounds logical, as if decay were steady like a burning candle. But the decay rate depends on how many nuclei remain, so it slows down as the sample shrinks.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Nuclear energy comes from **mass defect**, not from chemical bonds: the products of fission weigh slightly less than the reactants.",
          },
          {
            type: "keypoints",
            items: [
              "Half-life: time for half the nuclei to decay; N = N₀(1/2)^n.",
              "Background radiation is natural and always present.",
              "Fission splits heavy nuclei; fusion joins light ones; both release energy from Δm (E = Δmc²).",
              "Radioisotopes are used in medicine, dating, agriculture and industry.",
              "Use tongs, lead shielding and dosimeters when handling sources.",
            ],
          },
        ],
        flashcards: [
          { front: "Half-life", back: "Time taken for half the radioactive nuclei in a sample to decay." },
          { front: "Energy per fission of U-235", back: "About 200 MeV" },
          { front: "Source of the Sun's energy", back: "Nuclear fusion of hydrogen into helium." },
          { front: "Isotope used for cancer radiotherapy", back: "Cobalt-60" },
          { front: "Two sources of background radiation", back: "Cosmic rays; radon from rocks and soil (also K-40 in the body)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A sample has a half-life of 8 days. What mass of 80 g remains after 24 days?",
            answer: 10,
            unit: "g",
            explain: "$n = 3$; $80/8 = 10$ g.",
          },
          {
            kind: "mcq",
            q: "In a nuclear reactor, energy is obtained by:",
            options: ["fusion of hydrogen", "controlled fission of uranium-235", "burning uranium in oxygen", "radioactive α decay only"],
            answer: 1,
            explain: "Slow neutrons split U-235 in a controlled chain reaction.",
          },
          {
            kind: "truefalse",
            q: "Carbon-14 is used to estimate the age of ancient wooden objects.",
            answer: true,
            explain: "Living things stop taking in C-14 when they die; measuring what remains gives the age.",
          },
          {
            kind: "numeric",
            q: "A mass defect of 0.2 u occurs in a nuclear reaction. How much energy (in MeV) is released? (1 u = 931.5 MeV)",
            answer: 186.3,
            tolerance: 0.5,
            unit: "MeV",
            explain: "$0.2 \\times 931.5 = 186.3$ MeV.",
            difficulty: 3,
          },
          {
            kind: "fill",
            q: "The time in which half of the nuclei of a radioactive sample decay is called its ___.",
            answer: ["half-life", "half life", "halflife"],
            explain: "Symbol $T_{1/2}$.",
          },
          {
            kind: "mcq",
            q: "A sample has a half-life of 6 hours. What fraction of it has decayed after 12 hours?",
            options: ["All of it", "One-half", "Three-quarters", "One-quarter"],
            answer: 2,
            explain: "12 h is 2 half-lives, so $(1/2)^2 = 1/4$ remains and $3/4$ has decayed.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sources-of-energy",
    title: "Sources of Energy",
    icon: "☀️",
    description: "What makes a good source of energy, conventional and non-conventional sources, their effect on the environment and how long they will last.",
    lessons: [
      {
        slug: "conventional-sources-of-energy",
        title: "Conventional Sources of Energy",
        summary: "What makes a good fuel, fossil fuels, thermal and hydro power plants, biomass and biogas, and wind energy.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🔥",
            caption: "Your mother cooks on an LPG stove, the fan runs on electricity from a power plant, and the bus to school burns diesel. Each one uses a different source of energy.",
          },
          {
            type: "text",
            md: "A **source of energy** is anything that can give us energy in a usable form. Energy is never made or destroyed; we only change it from one form to another. So when we say we \"use up\" energy, we mean we turn it into forms we can no longer use easily, such as low-temperature heat.",
          },
          {
            type: "text",
            md: "A **good source of energy** is one that:\n\n- does a **large amount of work per unit mass or volume** (a high **calorific value** for a fuel),\n- is **easy to get**,\n- is **easy to store and transport**,\n- is **cheap** (economical).\n\nThe sources we have used for a long time are called **conventional sources**: fossil fuels, flowing water, biomass and wind.",
          },
          {
            type: "heading",
            text: "Fossil fuels and thermal power plants",
          },
          {
            type: "text",
            md: "**Fossil fuels** such as coal, petroleum and natural gas formed from the remains of plants and animals buried under the earth for **millions of years**. Once used, they cannot be replaced in our lifetime, so they are **non-renewable**. Burning them releases oxides of carbon, nitrogen and sulphur. These cause **acid rain**, and carbon dioxide is a **greenhouse gas** that warms the Earth.",
          },
          {
            type: "text",
            md: "In a **thermal power plant**, coal, oil or gas is burnt to boil water. The high-pressure steam turns a **turbine**, which turns a **generator** to make electricity. Most thermal plants are built near coal or oil fields, because sending electricity along wires is more efficient than carrying coal over long distances.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of a thermal power plant in order.",
              items: [
                "Coal is burnt in a furnace",
                "Heat boils water into high-pressure steam",
                "Steam turns the blades of a turbine",
                "The turbine shaft turns the generator",
                "Electricity is sent out on transmission lines",
              ],
              explain: "Energy changes step by step: **chemical** energy of coal → **heat** → **kinetic** energy of steam and turbine → **electrical** energy.",
            },
          },
          {
            type: "heading",
            text: "Hydro power plants",
          },
          {
            type: "text",
            md: "A **dam** is built across a river to store water at a height. Stored water has **potential energy**. When it is let out through pipes it falls, gains kinetic energy and turns turbines at the bottom of the dam. Karnataka's Shivanasamudra plant on the Kaveri (1902) was one of the first hydro power stations in Asia. Water in the river is refilled by rain each year, so hydro power is **renewable**.",
          },
          {
            type: "example",
            title: "Power from a dam",
            problem: "At a dam, 1000 kg of water falls through a height of 50 m every second. How much power is available? (Take $g = 10\\ \\text{m/s}^2$.)",
            steps: [
              "Potential energy lost by the water each second $= mgh$.",
              "$mgh = 1000 \\times 10 \\times 50 = 5 \\times 10^5$ J.",
              "Power $= \\tfrac{\\text{energy}}{\\text{time}} = \\tfrac{5 \\times 10^5\\ \\text{J}}{1\\ \\text{s}} = 5 \\times 10^5$ W.",
              "A real plant turns only part of this into electricity, because some energy is lost in the turbine and generator.",
            ],
            answer: "$5 \\times 10^5$ W, that is 500 kW, at most.",
          },
          {
            type: "text",
            md: "Big dams also cause problems. Large areas of farmland, forest and villages are **submerged**, people are **displaced** and need rehabilitation, and plants rotting under water give off **methane**, a greenhouse gas. Projects such as the Tehri dam on the Ganga and the Sardar Sarovar dam on the Narmada faced protests for these reasons.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why are most thermal power plants set up near coal or oil fields?",
                options: ["Water is cheaper there", "Sending electricity by wire is more efficient than transporting coal", "Coal burns better near mines", "The land has no other use"],
                answer: 1,
                explain: "Transmitting electricity over long distances costs less and wastes less than carrying huge amounts of coal by train or truck.",
              },
            ],
          },
          {
            type: "heading",
            text: "Biomass and biogas",
          },
          {
            type: "text",
            md: "**Biomass** means plant and animal material used as fuel: wood, crop waste and cow-dung cakes. Burnt directly, these give little heat and a lot of smoke. Heating wood in a low supply of oxygen gives **charcoal**, which burns without flame and smoke and has a higher heat output.",
          },
          {
            type: "text",
            md: "In a **biogas plant**, a slurry of cow dung and water is fed into a closed **digester** tank. With no oxygen present, **anaerobic** bacteria break the slurry down over a few days. The gas formed, **biogas**, contains up to about **75% methane**. It burns without smoke, gives a lot of heat and leaves no ash. The left-over slurry is a rich **manure**. A village plant thus turns waste into fuel, fertiliser and a cleaner environment.",
          },
          {
            type: "mistake",
            wrong: "Biogas is made by burning cow dung.",
            right: "Biogas is made when bacteria **decompose** cow dung and water **without oxygen** (anaerobic decomposition) in a closed digester.",
            why: "Cow-dung cakes are burnt as fuel in villages, so it seems biogas must come from burning too. But burning would use up the dung and give smoke and ash; in a biogas plant nothing burns until the gas itself reaches the stove.",
          },
          {
            type: "heading",
            text: "Wind energy",
          },
          {
            type: "text",
            md: "Moving air has kinetic energy. In a **windmill** the wind turns large blades, which turn a generator. Many windmills in one place form a **wind energy farm**, as at Muppandal near Kanyakumari in Tamil Nadu. Wind is renewable and does not pollute, but a wind farm needs a **large area**, the wind speed should be above about **15 km/h**, and the towers and blades need a lot of maintenance because they face rain, sun and storms.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked for the limitations of wind energy, write all three: large land area, wind speed must be more than about 15 km/h, and high cost of setting up and maintaining the towers.",
          },
          {
            type: "keypoints",
            items: [
              "A good source gives a lot of energy per unit mass, is easy to get, store and transport, and is cheap.",
              "Fossil fuels are non-renewable and cause acid rain and global warming.",
              "Thermal plant: chemical energy → heat → turbine → generator.",
              "Hydro plant: potential energy of stored water → kinetic energy → electricity; dams submerge land and displace people.",
              "Biogas (mostly methane) comes from anaerobic decomposition; wind farms need large areas and steady wind.",
            ],
          },
        ],
        flashcards: [
          { front: "Four features of a good source of energy", back: "Large work per unit mass, easily available, easy to store and transport, economical." },
          { front: "Why are fossil fuels non-renewable?", back: "They took millions of years to form and cannot be replaced once used." },
          { front: "Main gas in biogas", back: "Methane (up to about 75%)." },
          { front: "Energy change in a hydro power plant", back: "Potential energy of stored water → kinetic energy → electrical energy." },
          { front: "Minimum wind speed for a windmill to work well", back: "About 15 km/h." },
          { front: "Two problems caused by big dams", back: "Land and forests are submerged and people are displaced; rotting plants under water release methane." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is NOT a feature of a good fuel?",
            options: ["High calorific value", "Easy to store and transport", "Burns slowly with a lot of smoke", "Cheap and easily available"],
            answer: 2,
            explain: "A good fuel burns at a steady rate and gives little smoke or harmful products.",
          },
          {
            kind: "truefalse",
            q: "Biogas is produced by anaerobic decomposition of cow dung.",
            answer: true,
            explain: "Bacteria break down the slurry in the absence of oxygen inside the digester.",
          },
          {
            kind: "fill",
            q: "In a hydro power plant, the ___ energy of water stored behind the dam is converted into electrical energy.",
            answer: ["potential", "gravitational potential"],
            explain: "Falling water changes potential energy into kinetic energy, which turns the turbine.",
          },
          {
            kind: "numeric",
            q: "Water falls from a height of 20 m at the rate of 500 kg every second. What is the power available, in kW? (Take g = 10 m/s².)",
            answer: 100,
            unit: "kW",
            explain: "$P = \\tfrac{mgh}{t} = 500 \\times 10 \\times 20 = 100\\,000$ W $= 100$ kW.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are disadvantages of wind energy?",
            options: ["Needs a large area of land", "Pollutes the air", "Needs wind speed above about 15 km/h", "Towers need a lot of maintenance"],
            answers: [0, 2, 3],
            explain: "Wind energy causes no air pollution; its problems are land, steady wind and upkeep.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Burning fossil fuels causes acid rain mainly because they release:",
            options: ["oxygen and water", "oxides of sulphur and nitrogen", "methane only", "helium"],
            answer: 1,
            explain: "Sulphur and nitrogen oxides dissolve in rain water to form acids.",
          },
          {
            kind: "mcq",
            q: "The slurry left in a biogas plant is useful because it:",
            options: ["can be burnt again as fuel", "is a good manure rich in nitrogen and phosphorus", "is pure methane", "is used to make charcoal"],
            answer: 1,
            explain: "After the gas is taken out, the slurry makes excellent manure for fields.",
          },
        ],
      },
      {
        slug: "non-conventional-sources-of-energy",
        title: "Non-conventional Sources and Our Choices",
        summary: "Solar cookers and solar cells, energy from the sea, geothermal and nuclear energy, environmental consequences and how long a source will last.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🛰️",
            caption: "ISRO's satellites run on panels of solar cells, far from any power plant.",
          },
          {
            type: "text",
            md: "Fossil fuels are running out and they pollute. So we are turning to **non-conventional** (alternative) sources: the Sun, the sea, the heat inside the Earth and the nucleus. Most of them need new technology to use them well.",
          },
          {
            type: "heading",
            text: "Solar energy",
          },
          {
            type: "text",
            md: "The Sun sends huge amounts of energy to the Earth. Just outside the atmosphere, about **1.4 kJ** falls on each square metre every second; this is the **solar constant**. Much less reaches the ground, but it is still plenty.\n\nA **box-type solar cooker** uses three ideas. Its inside is painted **black**, because black surfaces absorb more heat. A **glass lid** lets sunlight in but traps the heat (a **greenhouse effect**). A **plane mirror** reflects extra sunlight into the box. It reaches about 100–140 °C in 2–3 hours, enough to cook dal and rice. It cannot be used at night or on cloudy days.",
          },
          {
            type: "text",
            md: "A **solar cell** turns sunlight **directly** into electricity. It is made of **silicon**; one cell gives about 0.5–1 V and can produce about 0.7 W in bright sun. Many cells joined together form a **solar panel**. Solar cells have no moving parts and need little upkeep, but they are costly to make, and the silver used to connect them adds to the cost. They power satellites, traffic signals, calculators and homes in remote villages.",
          },
          {
            type: "example",
            title: "Rooftop solar panel",
            problem: "A school in Bengaluru fits 4 m² of solar panels on its roof. Sunlight of 1000 W falls on each square metre, and the panels are 15% efficient. How much electrical energy do they give in 5 hours of good sunshine?",
            steps: [
              "Sunlight on the panels $= 1000 \\times 4 = 4000$ W.",
              "Electrical power $= 15\\%$ of 4000 W $= 0.15 \\times 4000 = 600$ W $= 0.6$ kW.",
              "Energy $= P \\times t = 0.6\\ \\text{kW} \\times 5\\ \\text{h} = 3$ kWh.",
            ],
            answer: "3 kWh, or 3 units of electricity, in a day.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why is the glass lid of a solar cooker important?",
                options: ["It keeps the food clean only", "It lets sunlight in but traps the heat inside", "It reflects sunlight onto the food", "It turns sunlight into electricity"],
                answer: 1,
                explain: "The glass cover gives a greenhouse effect: short-wave sunlight passes in, but heat radiated by the hot box cannot easily escape.",
              },
            ],
          },
          {
            type: "heading",
            text: "Energy from the sea and the Earth",
          },
          {
            type: "list",
            items: [
              "**Tidal energy:** a dam is built across a narrow opening to the sea. At high tide water flows in and at low tide it flows out, turning a turbine each time. Suitable sites in India are few, such as the Gulf of Kutch and the Gulf of Khambhat.",
              "**Wave energy:** strong waves near the shore move devices that turn turbines. It works only where waves are very strong.",
              "**Ocean thermal energy (OTEC):** surface sea water is warmer than deep water. If the difference is **20 °C or more** (down to about 2 km), warm water boils a liquid like **ammonia**, whose vapour runs a turbine; cold deep water condenses it again.",
              "**Geothermal energy:** in some places molten rock pushed up from deep inside the Earth heats underground water into steam at **hot spots**. The steam is piped up to run turbines. It is cheap to run but is available only at a few places.",
            ],
          },
          {
            type: "heading",
            text: "Nuclear energy",
          },
          {
            type: "text",
            md: "In a nuclear reactor, a heavy nucleus like **uranium-235** is split by a slow neutron (**fission**) and releases a huge amount of energy from a tiny mass. The heat makes steam that runs a turbine, just as in a thermal plant. India has nuclear plants at Tarapur, Rawatbhata, Kalpakkam, Narora, Kakrapar, Kudankulam and **Kaiga** in Karnataka. The big problem is safe **storage and disposal of nuclear waste**, which stays radioactive for a very long time, and the danger of accidents.",
          },
          {
            type: "heading",
            text: "Environmental consequences and how long a source will last",
          },
          {
            type: "text",
            md: "No source is perfectly clean. Even a solar panel has to be made in a factory, and that causes some pollution. We choose a source by looking at how easy and cheap it is to use, how good our technology is, and how much it harms the environment over its whole life.\n\nSources can also be grouped by how long they will last. **Exhaustible** (**non-renewable**) sources, like coal, petroleum, natural gas and uranium, will run out one day. **Inexhaustible** (**renewable**) sources, like sunlight, wind, flowing water, tides and biomass, are refilled by nature.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Will this source run out, or is it refilled by nature?",
              groups: ["Exhaustible (non-renewable)", "Inexhaustible (renewable)"],
              items: [
                { text: "Coal", group: 0, hint: "It took millions of years to form." },
                { text: "Uranium for nuclear plants", group: 0, hint: "Uranium ore in the Earth is limited, even though nuclear energy is non-conventional." },
                { text: "Natural gas", group: 0, hint: "A fossil fuel, like petroleum." },
                { text: "Petroleum", group: 0, hint: "Oil wells run dry once the oil is taken out." },
                { text: "Sunlight", group: 1, hint: "The Sun will keep shining for billions of years." },
                { text: "Wind", group: 1, hint: "The Sun's heating of air keeps making wind." },
                { text: "Tides", group: 1, hint: "The Moon's pull makes tides every day." },
                { text: "River water behind a dam", group: 1, hint: "Rain refills the river each year." },
              ],
              explain: "**Fossil fuels** and **uranium** will run out one day. The Sun, wind, tides and rain-fed rivers are refilled by nature, so they are **renewable**.",
            },
          },
          {
            type: "mistake",
            wrong: "All non-conventional sources are renewable.",
            right: "**Nuclear** energy is non-conventional but **exhaustible**, because uranium ore is limited. \"Non-conventional\" only means a newer way of getting energy.",
            why: "Most of the new sources (solar, wind, tidal) happen to be renewable, so students lump them together. But conventional/non-conventional is about how long we have used a source, while renewable/exhaustible is about whether it will run out.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For questions on the solar cooker, always give the reason for each part: **black** inside (absorbs heat), **glass lid** (traps heat by the greenhouse effect), **mirror** (reflects more sunlight in).",
          },
          {
            type: "keypoints",
            items: [
              "Solar cooker: black box, glass lid and mirror; solar cell: silicon, sunlight → electricity directly.",
              "Tidal, wave and ocean thermal energy come from the sea; OTEC needs a 20 °C temperature difference.",
              "Geothermal energy uses steam from hot spots inside the Earth.",
              "Nuclear fission gives huge energy, but waste disposal and safety are big problems.",
              "Exhaustible sources will run out; renewable sources are refilled by nature. Every source has some environmental cost.",
            ],
          },
        ],
        flashcards: [
          { front: "Solar constant", back: "About 1.4 kJ of solar energy per second per square metre, just outside the Earth's atmosphere." },
          { front: "Why is a solar cooker painted black inside?", back: "Black surfaces absorb more heat radiation." },
          { front: "Material used to make solar cells", back: "Silicon." },
          { front: "Condition for ocean thermal energy conversion", back: "A temperature difference of at least 20 °C between surface water and deep water." },
          { front: "Main problem with nuclear power", back: "Safe storage and disposal of radioactive waste, and the risk of accidents." },
          { front: "A nuclear power plant in Karnataka", back: "Kaiga (Uttara Kannada district)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A solar cell converts:",
            options: ["solar energy into heat", "solar energy directly into electricity", "chemical energy into electricity", "heat into electricity"],
            answer: 1,
            explain: "Solar cells use silicon to change sunlight straight into electrical energy, with no moving parts.",
          },
          {
            kind: "truefalse",
            q: "A solar cooker can be used to cook food at night.",
            answer: false,
            explain: "It works only with direct sunlight; at night and on cloudy days it is of no use.",
          },
          {
            kind: "fill",
            q: "Energy obtained from hot spots of molten rock inside the Earth is called ___ energy.",
            answer: ["geothermal"],
            explain: "Steam formed at hot spots is piped up to run turbines.",
          },
          {
            kind: "mcq",
            q: "Which of these is a non-conventional but exhaustible source of energy?",
            options: ["Solar energy", "Wind energy", "Nuclear energy", "Tidal energy"],
            answer: 2,
            explain: "Nuclear energy is a newer source, but uranium ore is limited, so it will run out.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A solar panel of area 2 m² receives 1000 W of sunlight per m² and is 20% efficient. What electrical power does it give, in watts?",
            answer: 400,
            unit: "W",
            explain: "Sunlight $= 1000 \\times 2 = 2000$ W; output $= 0.2 \\times 2000 = 400$ W.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Ocean thermal energy plants use a liquid like ammonia because it:",
            options: ["is a good fuel to burn", "boils easily using the heat of warm surface water", "does not mix with sea water", "absorbs sunlight"],
            answer: 1,
            explain: "Ammonia has a low boiling point, so warm surface water can boil it; its vapour then runs the turbine.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are renewable sources of energy?",
            options: ["Wind", "Coal", "Tides", "Biomass"],
            answers: [0, 2, 3],
            explain: "Coal is a fossil fuel and will run out; wind, tides and biomass are refilled by nature.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  Machines: "machines",
  "Refraction through a Lens": "refraction-through-a-lens",
  "The Human Eye and the Colourful World": "human-eye-and-colourful-world",
  Spectrum: "human-eye-and-colourful-world",
  "Household Circuits": "household-circuits",
  "Magnetic Effects of Electric Current": "magnetic-effects-of-electric-current",
  "Electro-magnetism": "magnetic-effects-of-electric-current",
  Radioactivity: "radioactivity",
  "Sources of Energy": "sources-of-energy",
};
