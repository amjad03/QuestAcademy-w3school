import type { Subject } from "@/content/types";

export const physicsSchool: Subject = {
  slug: "physics-school",
  title: "School Physics",
  world: "school",
  icon: "🚀",
  colors: ["#f97316", "#0ea5e9"],
  tagline: "Why things move, fall, swing, glow and echo.",
  description:
    "A Grade 6–10 physics journey covering motion and projectiles, force and Newton's laws, gravitation, pendulums, work, energy and power, electricity, and waves, sound and light. Aligned with CBSE/ICSE and middle/high-school science standards, with simulations you can play with and worked numericals in SI units.",
  levels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
  stages: ["middle", "secondary"],
  topics: [
    /* ------------------------------------------------------------------ */
    {
      slug: "motion",
      title: "Motion",
      icon: "🏃",
      description: "Describing how things move: speed, velocity, acceleration and projectiles.",
      lessons: [
        {
          slug: "speed-and-velocity",
          title: "Distance, Speed & Velocity",
          summary: "Scalars vs vectors, distance vs displacement, average speed and velocity, and unit conversion.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "An athlete runs one full lap of a 400 m track and stops exactly where she started. She has run 400 m, yet her **displacement** is zero. Physics needs both ideas, and the difference matters.",
            },
            {
              type: "table",
              headers: ["Quantity", "Type", "Meaning"],
              rows: [
                ["Distance", "scalar", "total path length travelled"],
                ["Displacement", "vector", "straight-line change in position, with direction"],
                ["Speed", "scalar", "distance ÷ time"],
                ["Velocity", "vector", "displacement ÷ time"],
              ],
            },
            {
              type: "formula",
              tex: "\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}} \\qquad \\vec{v}_{\\text{avg}} = \\frac{\\text{displacement}}{\\text{time}}",
            },
            {
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "The athlete takes 80 s for the 400 m lap.",
                "Average speed $= \\tfrac{400}{80} = 5$ m/s.",
                "Displacement $= 0$, so average velocity $= 0$ m/s.",
              ],
            },
            {
              type: "heading",
              text: "Converting units",
            },
            {
              type: "formula",
              tex: "1\\ \\text{km/h} = \\frac{1000\\ \\text{m}}{3600\\ \\text{s}} = \\frac{5}{18}\\ \\text{m/s}",
              caption: "km/h → m/s: multiply by 5/18. m/s → km/h: multiply by 18/5.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Convert 72 km/h into m/s.",
                  answer: 20,
                  unit: "m/s",
                  explain: "$72 \\times \\tfrac{5}{18} = 20$ m/s.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Average speed trap",
              md: "Drive 30 km at 60 km/h, then 30 km at 30 km/h. The average is **not** 45 km/h. Time = 0.5 h + 1 h = 1.5 h for 60 km, so the average speed is **40 km/h**. Always use total distance ÷ total time.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Highway speed cameras in some countries measure *average* speed: they time your car between two cameras kilometres apart. Braking just before one camera won't help.",
            },
            {
              type: "keypoints",
              items: [
                "Scalars have size only; vectors have size and direction.",
                "Displacement can be zero even when distance is not.",
                "Average speed = total distance ÷ total time.",
                "km/h × 5/18 = m/s.",
              ],
            },
          ],
          flashcards: [
            { front: "Scalar vs vector", back: "A scalar has only magnitude (speed); a vector has magnitude and direction (velocity)." },
            { front: "Displacement", back: "The shortest straight-line distance from start to finish, in a stated direction." },
            { front: "SI unit of speed", back: "metre per second (m/s)" },
            { front: "Convert 36 km/h to m/s", back: "10 m/s" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which of these is a vector quantity?",
              options: ["Distance", "Speed", "Velocity", "Time"],
              answer: 2,
              explain: "Velocity includes a direction; the others don't.",
            },
            {
              kind: "numeric",
              q: "A car covers 30 km at 60 km/h and the next 30 km at 30 km/h. What is its average speed?",
              answer: 40,
              unit: "km/h",
              explain: "Total time $= 0.5 + 1 = 1.5$ h for 60 km, so $60 \\div 1.5 = 40$ km/h.",
              difficulty: 3,
            },
            {
              kind: "truefalse",
              q: "An object's displacement can be zero even though it has travelled a large distance.",
              answer: true,
              explain: "If it returns to its starting point, displacement is zero.",
            },
            {
              kind: "fill",
              q: "Speed in a stated direction is called ___.",
              answer: ["velocity"],
              explain: "Velocity is the vector version of speed.",
            },
          ],
        },
        {
          slug: "acceleration-equations",
          title: "Acceleration & Equations of Motion",
          summary: "Acceleration, the three equations of uniformly accelerated motion, free fall and motion graphs.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A sports car brags “0 to 100 km/h in 3 seconds.” That's a statement about **acceleration**: how quickly velocity changes.",
            },
            {
              type: "formula",
              tex: "a = \\frac{v - u}{t}",
              caption: "u = initial velocity, v = final velocity, t = time. Unit: m/s².",
            },
            {
              type: "text",
              md: "If velocity decreases, $a$ is negative; this is often called **deceleration** or retardation.",
            },
            {
              type: "heading",
              text: "The three equations (constant acceleration)",
            },
            {
              type: "formula",
              tex: "v = u + at \\qquad s = ut + \\tfrac{1}{2}at^2 \\qquad v^2 = u^2 + 2as",
            },
            {
              type: "heading",
              text: "Worked example: braking distance",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "A car moving at 30 m/s brakes with $a = -6$ m/s². How far does it travel before stopping?",
                "Known: $u = 30$, $v = 0$, $a = -6$. Unknown: $s$. Pick $v^2 = u^2 + 2as$.",
                "$0 = 900 + 2(-6)s \\Rightarrow 12s = 900$.",
                "$s = 75$ m.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Choosing the equation",
              md: "List what you know and what you want ($u, v, a, s, t$). Pick the equation that contains your unknown and leaves out the quantity you neither know nor need.",
            },
            {
              type: "heading",
              text: "Free fall",
            },
            {
              type: "text",
              md: "Ignoring air resistance, every object near Earth's surface falls with $g \\approx 9.8$ m/s² (we often use 10 m/s² for easy numbers). A stone dropped from rest reaches $v = gt = 30$ m/s after 3 s, having fallen $s = \\tfrac{1}{2}gt^2 = 45$ m.",
            },
            {
              type: "heading",
              text: "Reading motion graphs",
            },
            {
              type: "list",
              items: [
                "**Distance–time graph:** slope = speed. A flat line means the object is at rest.",
                "**Velocity–time graph:** slope = acceleration; **area under the graph** = displacement.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A bike speeds up from 10 m/s to 25 m/s in 3 s. What is its acceleration?",
                  answer: 5,
                  unit: "m/s²",
                  explain: "$a = \\tfrac{25 - 10}{3} = 5$ m/s².",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Stopping distance grows with the **square** of speed ($s = \\tfrac{u^2}{2|a|}$). Double your speed and you need four times the braking distance, which is why speed limits near schools are so low.",
            },
            {
              type: "keypoints",
              items: [
                "a = (v − u)/t, measured in m/s².",
                "v = u + at; s = ut + ½at²; v² = u² + 2as.",
                "Free fall: a = g ≈ 9.8 m/s² downward.",
                "v–t graph: slope = a, area = displacement.",
              ],
            },
          ],
          flashcards: [
            { front: "Acceleration", back: "Rate of change of velocity: $a = (v - u)/t$, unit m/s²." },
            { front: "Equation linking v, u, a, s (no t)", back: "$v^2 = u^2 + 2as$" },
            { front: "Slope of a velocity–time graph", back: "Acceleration" },
            { front: "Area under a velocity–time graph", back: "Displacement" },
            { front: "Value of g near Earth's surface", back: "About 9.8 m/s²" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A stone is dropped from rest. Taking $g = 10$ m/s², how far does it fall in 3 s?",
              answer: 45,
              unit: "m",
              explain: "$s = \\tfrac{1}{2} \\times 10 \\times 3^2 = 45$ m.",
            },
            {
              kind: "numeric",
              q: "A car accelerates from rest at 4 m/s² for 5 s. How far does it travel?",
              answer: 50,
              unit: "m",
              explain: "$s = 0 + \\tfrac{1}{2} \\times 4 \\times 25 = 50$ m.",
            },
            {
              kind: "mcq",
              q: "The slope of a velocity–time graph gives…",
              options: ["distance", "displacement", "acceleration", "speed"],
              answer: 2,
              explain: "Slope = change in velocity ÷ time = acceleration.",
            },
            {
              kind: "truefalse",
              q: "A body can have zero velocity and non-zero acceleration at the same instant.",
              answer: true,
              explain: "A ball at the top of its throw is momentarily at rest but still accelerating downward at g.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "projectile-motion",
          title: "Projectile Motion",
          summary: "Independent horizontal and vertical motion, time of flight, maximum height and range.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A footballer chips the ball over the defenders. A basketball arcs into the hoop. Each follows a curved path called a **trajectory**. The secret: split the motion into two independent parts.",
            },
            {
              type: "list",
              items: [
                "**Horizontal:** no force (ignoring air), so velocity stays constant: $u\\cos\\theta$.",
                "**Vertical:** gravity pulls down, so it's free-fall motion starting at $u\\sin\\theta$.",
              ],
            },
            {
              type: "widget",
              widget: "projectile",
              caption: "Change the launch angle and speed. Which angle sends the ball furthest?",
            },
            {
              type: "formula",
              tex: "T = \\frac{2u\\sin\\theta}{g} \\qquad H = \\frac{u^2\\sin^2\\theta}{2g} \\qquad R = \\frac{u^2\\sin 2\\theta}{g}",
              caption: "Time of flight, maximum height and range for launch and landing at the same level.",
            },
            {
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "A ball is kicked at 20 m/s at 30° to the ground. Take $g = 10$ m/s².",
                "$T = \\dfrac{2 \\times 20 \\times 0.5}{10} = 2$ s.",
                "$H = \\dfrac{400 \\times 0.25}{20} = 5$ m.",
                "$R = \\dfrac{400 \\times \\sin 60^\\circ}{10} = 40 \\times 0.866 \\approx 34.6$ m.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Two neat facts",
              md: "Range is greatest at **45°**, because $\\sin 2\\theta$ peaks at $\\sin 90^\\circ = 1$. Complementary angles such as 30° and 60° give the **same range** (the higher one just takes longer).",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A ball is thrown horizontally off a 45 m cliff. How long until it lands? ($g = 10$ m/s²)",
                  answer: 3,
                  unit: "s",
                  explain: "Vertical motion starts from 0: $45 = \\tfrac{1}{2}(10)t^2 \\Rightarrow t = 3$ s. The horizontal speed doesn't matter.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Real shot-putters release at about 37–40°, not 45°, because they launch from shoulder height and air resistance trims long flights. Physics gives the ideal; sport tweaks it.",
            },
            {
              type: "keypoints",
              items: [
                "Horizontal and vertical motions are independent.",
                "Horizontal velocity stays constant; vertical is free fall.",
                "Max range at 45°; complementary angles give equal ranges.",
                "At the top, vertical velocity is 0 but horizontal velocity remains.",
              ],
            },
          ],
          flashcards: [
            { front: "Range formula", back: "$R = \\dfrac{u^2 \\sin 2\\theta}{g}$" },
            { front: "Angle for maximum range (level ground)", back: "45°" },
            { front: "Velocity at the top of the trajectory", back: "Only the horizontal part, $u\\cos\\theta$; the vertical part is zero." },
            { front: "Time of flight", back: "$T = \\dfrac{2u\\sin\\theta}{g}$" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "On level ground, which launch angle gives the maximum range?",
              options: ["30°", "45°", "60°", "90°"],
              answer: 1,
              explain: "$\\sin 2\\theta$ is largest when $2\\theta = 90^\\circ$.",
            },
            {
              kind: "numeric",
              q: "A projectile is launched at 10 m/s at 45°. Find its range. ($g = 10$ m/s²)",
              answer: 10,
              unit: "m",
              explain: "$R = \\tfrac{100 \\times \\sin 90^\\circ}{10} = 10$ m.",
            },
            {
              kind: "truefalse",
              q: "Launch angles of 15° and 75° (same speed) give the same range.",
              answer: true,
              explain: "$\\sin 30^\\circ = \\sin 150^\\circ$; complementary angles share a range.",
            },
            {
              kind: "mcq",
              q: "At the highest point of its path, a projectile's velocity is…",
              options: ["zero", "vertical only", "horizontal only", "at 45° to the ground"],
              answer: 2,
              explain: "The vertical part is momentarily zero; the horizontal part never changed.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "force-laws",
      title: "Force & Newton's Laws",
      icon: "🍎",
      description: "What forces do, Newton's three laws, momentum and friction.",
      lessons: [
        {
          slug: "newtons-laws",
          title: "Newton's Three Laws",
          summary: "Inertia, F = ma and action–reaction pairs, with free-body thinking.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "When a bus brakes suddenly, you lurch forward. Nothing pushed you; your body simply kept moving. Isaac Newton explained this, and almost all everyday motion, with three short laws.",
            },
            {
              type: "heading",
              text: "First law: inertia",
            },
            {
              type: "text",
              md: "An object stays at rest, or keeps moving at constant velocity, unless a **net (unbalanced) force** acts on it. The tendency to resist changes in motion is **inertia**, and more mass means more inertia.",
            },
            {
              type: "heading",
              text: "Second law: F = ma",
            },
            {
              type: "formula",
              tex: "F_{\\text{net}} = ma",
              caption: "1 newton (N) is the force that gives 1 kg an acceleration of 1 m/s², so 1 N = 1 kg·m/s².",
            },
            {
              type: "example",
              problem: "A 1200 kg car speeds up from 0 to 15 m/s in 6 s on a straight road. What net force acts on it?",
              steps: [
                "Acceleration $a = \\tfrac{v - u}{t} = \\tfrac{15 - 0}{6} = 2.5$ m/s².",
                "Second law: $F = ma = 1200 \\times 2.5$.",
                "$F = 3000$ N, in the direction of motion.",
              ],
              answer: "A net force of 3000 N acts forward on the car.",
            },
            {
              type: "heading",
              text: "Third law: action and reaction",
            },
            {
              type: "text",
              md: "If body A pushes on body B, then B pushes back on A with a force **equal in size and opposite in direction**. The two forces act on **different** bodies, so they never cancel each other.",
            },
            {
              type: "illustration",
              emoji: "🚀",
              caption: "A rocket pushes exhaust gas down; the gas pushes the rocket up.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Which of Newton's laws explains each one best?",
                groups: ["First law (inertia)", "Second law (F = ma)", "Third law (action–reaction)"],
                items: [
                  { text: "You lurch forward when a bus brakes", group: 0, hint: "Your body keeps moving because of inertia." },
                  { text: "Dust leaves a carpet when it is beaten", group: 0, hint: "The carpet moves, but the dust tends to stay at rest." },
                  { text: "An empty cart speeds up faster than a loaded one with the same push", group: 1, hint: "Same force, more mass, less acceleration: a = F/m." },
                  { text: "A harder kick makes the football speed up more", group: 1, hint: "More force gives more acceleration." },
                  { text: "A gun recoils when fired", group: 2, hint: "The bullet pushes back on the gun." },
                  { text: "A swimmer pushes water back to move forward", group: 2, hint: "The water pushes the swimmer forward." },
                ],
                explain: "**First law**: things keep doing what they were doing. **Second law**: force changes motion by $a = F/m$. **Third law**: forces come in equal, opposite pairs on two different bodies.",
              },
            },
            {
              type: "mistake",
              wrong: "Action and reaction are equal and opposite, so they cancel and nothing can move.",
              right: "Action and reaction act on **different bodies**, so they never cancel each other. Only forces on the **same** body can cancel.",
              why: "\"Equal and opposite\" sounds exactly like balanced forces. But when a horse pulls a cart, the cart's pull acts on the horse, not on the cart. The cart moves because the horse's pull on it is larger than the friction on it.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A net force of 12 N acts on a 4 kg trolley. What is its acceleration?",
                  answer: 3,
                  unit: "m/s²",
                  explain: "$a = F/m = 12/4 = 3$ m/s².",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Seat belts and airbags exist because of the first law: in a crash the car stops but your body's inertia carries it forward. The belt supplies the force that slows *you* down safely.",
            },
            {
              type: "keypoints",
              items: [
                "No net force → no change in velocity.",
                "F = ma; force in newtons, mass in kg, a in m/s².",
                "Action–reaction forces are equal, opposite, on different bodies.",
              ],
            },
          ],
          flashcards: [
            { front: "Newton's first law", back: "A body keeps its state of rest or uniform motion unless a net force acts on it." },
            { front: "Newton's second law", back: "$F_{\\text{net}} = ma$" },
            { front: "Newton's third law", back: "Every action has an equal and opposite reaction, acting on a different body." },
            { front: "1 newton in base units", back: "1 kg·m/s²" },
            { front: "Inertia", back: "The tendency of a body to resist a change in its state of rest or motion. More mass means more inertia." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What force gives a 50 kg box an acceleration of 3 m/s²?",
              answer: 150,
              unit: "N",
              explain: "$F = 50 \\times 3 = 150$ N.",
            },
            {
              kind: "mcq",
              q: "Which law best explains why passengers need seat belts?",
              options: ["First law", "Second law", "Third law", "Law of gravitation"],
              answer: 0,
              explain: "Inertia keeps the passenger moving when the car stops.",
            },
            {
              kind: "truefalse",
              q: "Action and reaction forces act on the same body, so they cancel out.",
              answer: false,
              explain: "They act on different bodies, which is why they don't cancel.",
            },
            {
              kind: "multi",
              q: "Which statements are true about a car moving at constant velocity on a straight road?",
              options: [
                "The net force on it is zero",
                "The engine force balances friction and air resistance",
                "It must be accelerating",
                "No forces act on it at all",
              ],
              answers: [0, 1],
              explain: "Constant velocity means balanced forces, not an absence of forces.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "A horse pulls a cart forward. The cart pulls back on the horse with an equal force. Why does the cart still move?",
              options: [
                "The horse's pull is slightly larger than the cart's pull",
                "The two forces act on different bodies, so they do not cancel",
                "Newton's third law does not apply to animals",
                "The cart's pull acts only when it is at rest",
              ],
              answer: 1,
              explain: "The cart's pull acts on the horse. The cart moves because the horse's pull on it is bigger than the friction on the cart.",
              difficulty: 3,
            },
            {
              kind: "numeric",
              q: "A 2 kg ball is pushed with a force of 10 N while friction of 4 N opposes it. What is its acceleration in m/s²?",
              answer: 3,
              unit: "m/s²",
              explain: "Net force $= 10 - 4 = 6$ N, so $a = 6/2 = 3$ m/s².",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "momentum-and-friction",
          title: "Momentum & Friction",
          summary: "Momentum, impulse, conservation of momentum, recoil, and the friction force.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A cricket ball and a slow-rolling truck: which is harder to stop? It depends on mass **and** velocity together, a quantity called **momentum**.",
            },
            {
              type: "formula",
              tex: "p = mv \\qquad F\\,t = \\Delta p = mv - mu",
              caption: "Momentum (kg·m/s), and impulse: force × time equals change in momentum.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "A fielder pulls their hands back while catching. This **increases the time** $t$ over which the ball's momentum is removed, so the force $F = \\Delta p / t$ on the hands is smaller. Crumple zones in cars and the sand pit in long jump work the same way.",
            },
            {
              type: "mistake",
              wrong: "A fielder pulls the hands back so that the ball loses less momentum.",
              right: "The ball loses **the same momentum** either way (it ends at rest). Pulling back makes the **time** longer, so the **force** $F = \\Delta p / t$ is smaller.",
              why: "The catch feels softer, so it seems that \"less\" happened to the ball. But the change in momentum is fixed by the ball's starting and final speeds; only the time, and so the force, changes.",
            },
            {
              type: "heading",
              text: "Conservation of momentum",
            },
            {
              type: "text",
              md: "When no external force acts, the total momentum of a system stays the same before and after a collision or explosion.",
            },
            {
              type: "example",
              problem: "A 4 kg gun fires a 20 g bullet at 400 m/s. Find the gun's recoil velocity.",
              steps: [
                "Convert: 20 g $= 0.02$ kg. Before firing, gun and bullet are at rest, so total momentum is 0.",
                "After firing: $0.02 \\times 400 + 4 \\times v = 0$.",
                "$8 + 4v = 0$, so $v = -2$ m/s.",
              ],
              answer: "The gun recoils backward at 2 m/s (the minus sign means opposite to the bullet).",
            },
            {
              type: "heading",
              text: "Friction",
            },
            {
              type: "text",
              md: "Friction opposes relative motion (or attempted motion) between surfaces in contact. A simple model says it is proportional to the **normal force** $N$:",
            },
            {
              type: "formula",
              tex: "f = \\mu N",
              caption: "μ is the coefficient of friction; on level ground N = mg.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A 10 kg box rests on a floor with $\\mu = 0.3$. What friction force must be overcome to slide it? ($g = 10$ m/s²)",
                  answer: 30,
                  unit: "N",
                  explain: "$f = \\mu mg = 0.3 \\times 10 \\times 10 = 30$ N.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              md: "Friction isn't only a nuisance. Without it you couldn't walk, cars couldn't brake, and knots would slip undone. Treads on tyres are designed to keep enough friction even on wet roads.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Does each idea lengthen impact time or change friction?",
                groups: ["Longer impact time, smaller force", "Changes friction"],
                items: [
                  { text: "Airbags in a car", group: 0, hint: "The bag lets your head stop slowly." },
                  { text: "Sand pit for the long jump", group: 0, hint: "Soft sand makes the landing take longer." },
                  { text: "Crumple zones at the front of a car", group: 0, hint: "The car body folds slowly, stretching out the crash." },
                  { text: "Treads on tyres", group: 1, hint: "Grooves grip the road, even when wet." },
                  { text: "Oiling a bicycle chain", group: 1, hint: "Oil makes surfaces slide more easily." },
                  { text: "Ball bearings in a fan", group: 1, hint: "Rolling replaces sliding, so friction falls." },
                ],
                explain: "Making the stopping **time** longer reduces the **force** for the same change in momentum. Treads, oil and ball bearings change **friction** instead.",
              },
            },
            {
              type: "keypoints",
              items: [
                "p = mv, a vector in kg·m/s.",
                "Impulse Ft = change in momentum.",
                "Longer stopping time → smaller force.",
                "Total momentum is conserved without external forces.",
                "Friction f = μN opposes relative motion.",
              ],
            },
          ],
          flashcards: [
            { front: "Momentum", back: "$p = mv$, unit kg·m/s." },
            { front: "Impulse", back: "Force × time $= \\Delta p$." },
            { front: "Law of conservation of momentum", back: "With no external force, total momentum before = total momentum after." },
            { front: "Why do cars have crumple zones?", back: "They lengthen the collision time, reducing the force on passengers." },
            { front: "Friction formula", back: "$f = \\mu N$; on level ground $N = mg$." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the momentum of a 0.5 kg ball moving at 8 m/s?",
              answer: 4,
              unit: "kg·m/s",
              explain: "$p = 0.5 \\times 8 = 4$ kg·m/s.",
            },
            {
              kind: "numeric",
              q: "A 5 kg gun fires a 25 g bullet at 300 m/s. Find the recoil speed of the gun.",
              answer: 1.5,
              tolerance: 0.01,
              unit: "m/s",
              explain: "$0.025 \\times 300 = 7.5$ kg·m/s, so $v = 7.5 / 5 = 1.5$ m/s backward.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "A fielder moves their hands back while catching a fast ball in order to…",
              options: ["increase the ball's momentum", "reduce the time of impact", "increase the time of impact and reduce the force", "increase friction"],
              answer: 2,
              explain: "Same change in momentum over a longer time means a smaller force.",
            },
            {
              kind: "truefalse",
              q: "Friction always opposes the relative motion between surfaces.",
              answer: true,
              explain: "That is the defining property of friction.",
            },
            {
              kind: "numeric",
              q: "A 0.15 kg cricket ball moving at 20 m/s is stopped by a fielder in 0.1 s. What average force (in N) acts on the hands?",
              answer: 30,
              unit: "N",
              explain: "$\\Delta p = 0.15 \\times 20 = 3$ kg·m/s, so $F = \\Delta p / t = 3 / 0.1 = 30$ N.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "A 2 kg trolley at 3 m/s hits and sticks to a 1 kg trolley at rest. What is their common speed afterwards, in m/s?",
              answer: 2,
              unit: "m/s",
              explain: "Momentum before $= 2 \\times 3 = 6$ kg·m/s. After: $(2 + 1)v = 6$, so $v = 2$ m/s.",
              difficulty: 3,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "gravitation-energy",
      title: "Gravitation, Oscillations & Energy",
      icon: "🪐",
      description: "The universal law of gravitation, the swinging pendulum, and work, energy and power.",
      lessons: [
        {
          slug: "gravitation",
          title: "Universal Gravitation",
          summary: "Newton's law of gravitation, g, mass vs weight, and the inverse-square idea.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "The same force that drops an apple also keeps the Moon in orbit. Newton's insight was that gravity is **universal**: every mass attracts every other mass.",
            },
            {
              type: "formula",
              tex: "F = \\frac{G\\,m_1 m_2}{r^2} \\qquad G = 6.67 \\times 10^{-11}\\ \\text{N m}^2/\\text{kg}^2",
              caption: "r is the distance between the centres of the two masses.",
            },
            {
              type: "heading",
              text: "The inverse-square law",
            },
            {
              type: "table",
              headers: ["Distance becomes", "Force becomes"],
              rows: [
                ["2r", "F/4"],
                ["3r", "F/9"],
                ["r/2", "4F"],
              ],
            },
            {
              type: "heading",
              text: "g and weight",
            },
            {
              type: "formula",
              tex: "g = \\frac{GM}{R^2} \\approx 9.8\\ \\text{m/s}^2 \\qquad W = mg",
              caption: "M and R are Earth's mass and radius.",
            },
            {
              type: "list",
              items: [
                "**Mass** (kg) is the amount of matter; it is the same everywhere.",
                "**Weight** (N) is the gravitational pull on that mass; it changes with $g$.",
                "On the Moon, $g$ is about $\\tfrac{1}{6}$ of Earth's, so you weigh about a sixth as much.",
              ],
            },
            {
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "A 60 kg astronaut on Earth: $W = 60 \\times 9.8 = 588$ N.",
                "On the Moon: $W \\approx \\tfrac{588}{6} = 98$ N.",
                "Her mass is still 60 kg in both places.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "If the distance between two masses is tripled, the gravitational force becomes…",
                  options: ["3 times", "one third", "one ninth", "9 times"],
                  answer: 2,
                  explain: "$F \\propto \\tfrac{1}{r^2}$, so $\\tfrac{1}{3^2} = \\tfrac{1}{9}$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Astronauts on the space station float not because there is no gravity there (it's still about 90% of surface gravity) but because they and the station are **falling together** around Earth, continuously missing it.",
            },
            {
              type: "keypoints",
              items: [
                "F = Gm₁m₂/r², attractive and universal.",
                "Double the distance → quarter the force.",
                "g ≈ 9.8 m/s² on Earth's surface.",
                "Weight W = mg changes; mass does not.",
              ],
            },
          ],
          flashcards: [
            { front: "Newton's law of gravitation", back: "$F = \\dfrac{Gm_1m_2}{r^2}$" },
            { front: "Value of G", back: "$6.67 \\times 10^{-11}$ N m²/kg²" },
            { front: "Mass vs weight", back: "Mass is matter (kg, constant); weight is gravitational force (N, = mg)." },
            { front: "g on the Moon compared to Earth", back: "About 1/6" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the weight of a 45 kg student on Earth? ($g = 9.8$ m/s²)",
              answer: 441,
              unit: "N",
              explain: "$W = 45 \\times 9.8 = 441$ N.",
            },
            {
              kind: "truefalse",
              q: "An object's mass is smaller on the Moon than on Earth.",
              answer: false,
              explain: "Mass is the same everywhere; only weight changes.",
            },
            {
              kind: "numeric",
              q: "A person weighs 600 N on Earth. About how much would they weigh on the Moon?",
              answer: 100,
              tolerance: 1,
              unit: "N",
              explain: "Moon gravity is about one sixth: $600 / 6 = 100$ N.",
            },
            {
              kind: "mcq",
              q: "G is called the universal gravitational constant because…",
              options: [
                "it equals g everywhere",
                "it has the same value anywhere in the universe",
                "it changes with altitude",
                "it is only used on Earth",
              ],
              answer: 1,
              explain: "G is the same for any pair of masses anywhere; g varies from place to place.",
            },
          ],
        },
        {
          slug: "simple-pendulum",
          title: "The Simple Pendulum",
          summary: "Oscillations, period and frequency, and what does (and doesn't) change a pendulum's swing.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "In 1583, a teenage Galileo timed a swinging cathedral lamp against his pulse and noticed something odd: big swings and small swings took the same time. That discovery led to the pendulum clock.",
            },
            {
              type: "text",
              md: "A **simple pendulum** is a small heavy bob on a light string. Pulled aside and released, it **oscillates**: it moves back and forth about its rest position. One complete back-and-forth is one **oscillation**.",
            },
            {
              type: "widget",
              widget: "pendulum",
              caption: "Change the length and gravity. Which one changes the period? Does the swing size matter?",
            },
            {
              type: "formula",
              tex: "T = 2\\pi\\sqrt{\\frac{L}{g}} \\qquad f = \\frac{1}{T}",
              caption: "Period T (s) for small swings; frequency f in hertz (Hz).",
            },
            {
              type: "list",
              items: [
                "**Longer string → slower swing.** $T \\propto \\sqrt{L}$, so 4× the length doubles the period.",
                "**Stronger gravity → faster swing.** On the Moon a pendulum swings more slowly.",
                "**Mass doesn't matter**, and for small angles neither does the amplitude.",
              ],
            },
            {
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Find the period of a 1 m pendulum on Earth ($g = 9.8$ m/s²).",
                "$\\sqrt{L/g} = \\sqrt{1/9.8} \\approx 0.319$ s.",
                "$T = 2\\pi \\times 0.319 \\approx 2.0$ s.",
                "A pendulum with a 2 s period is called a **seconds pendulum**: each one-way swing takes 1 s.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A pendulum has a period of 0.5 s. What is its frequency?",
                  answer: 2,
                  unit: "Hz",
                  explain: "$f = 1/T = 1/0.5 = 2$ Hz.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Grandfather clocks are adjusted by moving the bob up or down. If a clock runs slow, shorten the pendulum slightly so each swing takes less time.",
            },
            {
              type: "keypoints",
              items: [
                "T = 2π√(L/g) for small swings.",
                "Period depends on length and g only.",
                "Mass and (small) amplitude don't affect T.",
                "Frequency f = 1/T, in hertz.",
              ],
            },
          ],
          flashcards: [
            { front: "Period of a simple pendulum", back: "$T = 2\\pi\\sqrt{L/g}$" },
            { front: "Does the bob's mass affect the period?", back: "No." },
            { front: "Frequency", back: "Number of oscillations per second; $f = 1/T$, unit Hz." },
            { front: "Seconds pendulum", back: "A pendulum with period 2 s (length ≈ 0.99 m on Earth)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Find the period of a pendulum of length 2.45 m on Earth ($g = 9.8$ m/s²). Use $\\pi \\approx 3.14$.",
              answer: 3.14,
              tolerance: 0.02,
              unit: "s",
              explain: "$\\sqrt{2.45/9.8} = \\sqrt{0.25} = 0.5$, so $T = 2\\pi \\times 0.5 = \\pi \\approx 3.14$ s.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "If you double the mass of a pendulum bob, the period…",
              options: ["doubles", "halves", "stays the same", "increases by √2"],
              answer: 2,
              explain: "Mass does not appear in $T = 2\\pi\\sqrt{L/g}$.",
            },
            {
              kind: "truefalse",
              q: "The same pendulum swings more slowly on the Moon than on Earth.",
              answer: true,
              explain: "Smaller g gives a larger period.",
            },
            {
              kind: "numeric",
              q: "A pendulum's length is made 4 times longer. By what factor does its period change?",
              answer: 2,
              explain: "$T \\propto \\sqrt{L}$ and $\\sqrt{4} = 2$.",
            },
          ],
        },
        {
          slug: "work-energy-power",
          title: "Work, Energy & Power",
          summary: "Work done by a force, kinetic and potential energy, conservation of energy, and power.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Holding a heavy bag still for ten minutes leaves your arms aching, yet physics says you did **no work** on it. Here, “work” has a precise meaning.",
            },
            {
              type: "formula",
              tex: "W = F s \\cos\\theta",
              caption: "Work (joules) = force × displacement × cos of the angle between them. If there is no displacement, W = 0.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Is work done by the force named? Sort each one.",
                groups: ["Work is done", "No work is done"],
                items: [
                  { text: "Your pull lifts a bucket from a well", group: 0, hint: "The bucket moves up, along the pull." },
                  { text: "Your push on a wall that does not move", group: 1, hint: "No displacement means no work, however tired you get." },
                  { text: "Your upward force on a bag carried along a flat road", group: 1, hint: "The force is up, the motion is sideways: θ = 90°." },
                  { text: "A horse's pull on a moving tonga", group: 0, hint: "The tonga moves in the direction of the pull." },
                  { text: "Your hold on books kept still on your head", group: 1, hint: "The books do not move." },
                  { text: "Gravity on a falling coconut", group: 0, hint: "The coconut moves down, along the force of gravity." },
                ],
                explain: "Work needs **both** a force and a displacement **along** the force. No movement, or movement at 90° to the force, means **zero work**.",
              },
            },
            {
              type: "mistake",
              wrong: "Holding a heavy bag still for a long time is a lot of work, because it makes you tired.",
              right: "In physics, **no work** is done on the bag, because it does not move: $W = Fs\\cos\\theta$ with $s = 0$.",
              why: "In daily language \"work\" means effort, so tiredness feels like proof. Your muscles do use up food energy, but it turns into heat inside your body, not into work on the bag.",
            },
            {
              type: "heading",
              text: "Two kinds of mechanical energy",
            },
            {
              type: "formula",
              tex: "KE = \\tfrac{1}{2}mv^2 \\qquad PE = mgh",
              caption: "Kinetic energy (motion) and gravitational potential energy (height).",
            },
            {
              type: "text",
              md: "Energy can't be created or destroyed, only changed from one form to another (**conservation of energy**). As a ball falls, PE turns into KE; ignoring air, the total stays constant.",
            },
            {
              type: "example",
              problem: "A 20 kg box is lifted 5 m. It is then dropped. Ignoring air resistance, how fast is it moving just before it hits the ground? Take $g = 10$ m/s².",
              steps: [
                "PE gained $= mgh = 20 \\times 10 \\times 5 = 1000$ J.",
                "As it falls, all of this PE becomes KE: $\\tfrac{1}{2}(20)v^2 = 1000$.",
                "$10v^2 = 1000$, so $v^2 = 100$.",
                "$v = 10$ m/s.",
              ],
              answer: "The box gains 1000 J of PE and hits the ground at 10 m/s.",
            },
            {
              type: "heading",
              text: "Power",
            },
            {
              type: "formula",
              tex: "P = \\frac{W}{t} \\qquad 1\\ \\text{W} = 1\\ \\text{J/s} \\qquad 1\\ \\text{kWh} = 3.6 \\times 10^6\\ \\text{J}",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A 60 kg student climbs 10 m of stairs in 12 s. What power does she develop? ($g = 10$ m/s²)",
                  answer: 500,
                  unit: "W",
                  explain: "Work $= 60 \\times 10 \\times 10 = 6000$ J; $P = 6000/12 = 500$ W.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "A hydroelectric dam is a giant PE → KE → electrical energy converter. Water stored high up has PE; it rushes down, spins turbines, and generators turn that motion into electricity.",
            },
            {
              type: "callout",
              tone: "warning",
              md: "KE depends on $v^2$. Doubling a car's speed gives it **four times** the kinetic energy, and the brakes must remove all of it.",
            },
            {
              type: "keypoints",
              items: [
                "W = Fs cos θ; zero if no displacement or if force ⟂ motion.",
                "KE = ½mv², PE = mgh.",
                "Total energy is conserved.",
                "Power = work ÷ time, in watts.",
              ],
            },
          ],
          flashcards: [
            { front: "SI unit of work and energy", back: "joule (J) = 1 N·m" },
            { front: "Kinetic energy formula", back: "$KE = \\tfrac{1}{2}mv^2$" },
            { front: "Potential energy formula", back: "$PE = mgh$" },
            { front: "1 kWh in joules", back: "$3.6 \\times 10^6$ J" },
            { front: "Power", back: "Rate of doing work: $P = W/t$, unit watt (W)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A force of 50 N pushes a crate 8 m along its direction. How much work is done?",
              answer: 400,
              unit: "J",
              explain: "$W = 50 \\times 8 = 400$ J.",
            },
            {
              kind: "numeric",
              q: "What is the kinetic energy of a 2 kg ball moving at 3 m/s?",
              answer: 9,
              unit: "J",
              explain: "$\\tfrac{1}{2} \\times 2 \\times 3^2 = 9$ J.",
            },
            {
              kind: "mcq",
              q: "If an object's speed doubles, its kinetic energy becomes…",
              options: ["the same", "2 times", "4 times", "half"],
              answer: 2,
              explain: "KE ∝ v², and $2^2 = 4$.",
            },
            {
              kind: "truefalse",
              q: "When you carry a bag horizontally at constant speed, the upward force you apply on the bag does no work.",
              answer: true,
              explain: "The force is vertical but the displacement is horizontal ($\\theta = 90^\\circ$, cos 90° = 0).",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "A 500 W motor lifts a load for 2 minutes. How much work does it do, in kJ?",
              answer: 60,
              unit: "kJ",
              explain: "$W = Pt = 500 \\times 120 = 60\\,000$ J $= 60$ kJ.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "A 0.5 kg ball is dropped from a height of 20 m. Ignoring air, what is its speed just before it lands, in m/s? ($g = 10$ m/s²)",
              answer: 20,
              unit: "m/s",
              explain: "$mgh = \\tfrac{1}{2}mv^2$, so $v^2 = 2gh = 400$ and $v = 20$ m/s. The mass cancels.",
              difficulty: 3,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "electricity",
      title: "Electricity",
      icon: "⚡",
      description: "Current, voltage and resistance, Ohm's law, circuits and electrical power.",
      lessons: [
        {
          slug: "current-and-ohms-law",
          title: "Current, Voltage & Ohm's Law",
          summary: "Charge and current, potential difference, resistance and the relationship V = IR.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Flip a switch and the light comes on instantly. What actually flows through the wire, and what pushes it? Think of a water pipe: **current** is the flow, **voltage** is the push, and **resistance** is how narrow the pipe is.",
            },
            {
              type: "table",
              headers: ["Quantity", "Symbol", "Unit", "Measured with"],
              rows: [
                ["Charge", "Q", "coulomb (C)", "—"],
                ["Current", "I", "ampere (A)", "ammeter (in series)"],
                ["Potential difference", "V", "volt (V)", "voltmeter (in parallel)"],
                ["Resistance", "R", "ohm (Ω)", "ohmmeter"],
              ],
            },
            {
              type: "formula",
              tex: "I = \\frac{Q}{t}",
              caption: "Current is the rate of flow of charge: 1 A = 1 C/s.",
            },
            {
              type: "heading",
              text: "Ohm's law",
            },
            {
              type: "formula",
              tex: "V = IR",
              caption: "At constant temperature, current through a conductor is proportional to the voltage across it.",
            },
            {
              type: "widget",
              widget: "ohms-law",
              caption: "Raise the voltage and watch the current grow. Raise the resistance and watch it shrink.",
            },
            {
              type: "example",
              problem: "A 12 V battery is connected to a 4 Ω resistor. Find the current. What happens to the current if the resistor is changed to 6 Ω?",
              steps: [
                "Ohm's law: $I = \\dfrac{V}{R} = \\dfrac{12}{4} = 3$ A.",
                "With 6 Ω: $I = \\dfrac{12}{6} = 2$ A.",
                "More resistance with the same voltage gives less current.",
              ],
              answer: "3 A with 4 Ω, falling to 2 A with 6 Ω.",
            },
            {
              type: "mistake",
              wrong: "Current gets used up as it goes round a circuit, so less current comes back to the battery.",
              right: "In a series circuit the **same current** flows everywhere, even after a bulb. What the bulb uses is **energy**, not charge.",
              why: "The bulb clearly \"uses\" something, so it seems the current must drop. But charge is not destroyed; each coulomb gives up energy in the bulb and flows on. An ammeter reads the same on both sides.",
            },
            {
              type: "heading",
              text: "What sets resistance?",
            },
            {
              type: "formula",
              tex: "R = \\rho \\frac{L}{A}",
              caption: "ρ is resistivity (material), L is length, A is cross-sectional area.",
            },
            {
              type: "text",
              md: "A longer wire has more resistance; a thicker wire has less. Copper has very low resistivity, which is why it's used for wiring, while nichrome's high resistivity makes it perfect for heater coils.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Does each change raise or lower the wire's resistance?",
                groups: ["More resistance", "Less resistance"],
                items: [
                  { text: "Use a longer wire", group: 0, hint: "R ∝ L: charges have farther to travel." },
                  { text: "Use a thicker wire", group: 1, hint: "R ∝ 1/A: a wider path is easier." },
                  { text: "Swap copper for nichrome", group: 0, hint: "Nichrome has a much higher resistivity." },
                  { text: "Cut the wire to half its length", group: 1, hint: "Half the length, half the resistance." },
                  { text: "Use a thinner wire", group: 0, hint: "A smaller area means more resistance." },
                  { text: "Swap nichrome for copper", group: 1, hint: "Copper has a very low resistivity." },
                ],
                explain: "$R = \\rho \\dfrac{L}{A}$: resistance rises with **length** and **resistivity**, and falls as the **area** grows.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A current of 2 A flows for 1 minute. How much charge passes?",
                  answer: 120,
                  unit: "C",
                  explain: "$Q = It = 2 \\times 60 = 120$ C.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Your body's resistance drops sharply when skin is wet, so the same voltage drives a much larger, more dangerous current. That's why you should never touch switches with wet hands.",
            },
            {
              type: "keypoints",
              items: [
                "I = Q/t; 1 A = 1 C/s.",
                "V = IR (Ohm's law).",
                "Ammeter in series, voltmeter in parallel.",
                "R increases with length, decreases with area.",
              ],
            },
          ],
          flashcards: [
            { front: "Ohm's law", back: "$V = IR$" },
            { front: "Unit of resistance", back: "ohm (Ω)" },
            { front: "How is an ammeter connected?", back: "In series with the component." },
            { front: "How is a voltmeter connected?", back: "In parallel across the component." },
            { front: "Effect of doubling a wire's length", back: "Its resistance doubles." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A 9 V supply drives 0.5 A through a resistor. What is its resistance?",
              answer: 18,
              unit: "Ω",
              explain: "$R = V/I = 9/0.5 = 18$ Ω.",
            },
            {
              kind: "numeric",
              q: "What current flows through a 46 Ω heater on a 230 V supply?",
              answer: 5,
              unit: "A",
              explain: "$I = 230/46 = 5$ A.",
            },
            {
              kind: "mcq",
              q: "You swap a wire for one of the same material and thickness but twice as long. Its resistance…",
              options: ["halves", "stays the same", "doubles", "becomes four times"],
              answer: 2,
              explain: "$R \\propto L$ when the area is unchanged.",
            },
            {
              kind: "truefalse",
              q: "An ammeter should be connected in parallel with a component.",
              answer: false,
              explain: "Ammeters go in series so the whole current flows through them.",
            },
            {
              kind: "numeric",
              q: "A current of 0.5 A flows for 10 minutes. How much charge passes?",
              answer: 300,
              unit: "C",
              explain: "$Q = It = 0.5 \\times 600 = 300$ C.",
            },
            {
              kind: "numeric",
              q: "A copper wire has a resistance of 4 Ω. Another wire of the same copper is twice as long and has twice the cross-sectional area. What is its resistance in Ω?",
              answer: 4,
              unit: "Ω",
              explain: "$R \\propto L/A$: doubling L doubles R, doubling A halves it, so R stays 4 Ω.",
              difficulty: 3,
            },
          ],
        },
        {
          slug: "circuits-and-power",
          title: "Series, Parallel & Electrical Power",
          summary: "Combining resistors, electrical power and calculating your electricity bill.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In old festive light strings, one dead bulb made the whole string go dark. In your home, one fused bulb doesn't switch off the fridge. The difference is **series** versus **parallel** wiring.",
            },
            {
              type: "formula",
              tex: "\\text{Series: } R = R_1 + R_2 + \\cdots \\qquad \\text{Parallel: } \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots",
            },
            {
              type: "table",
              headers: ["", "Series", "Parallel"],
              rows: [
                ["Current", "same through each", "splits between branches"],
                ["Voltage", "shared between components", "same across each branch"],
                ["Total resistance", "larger than any one", "smaller than the smallest"],
                ["One component fails", "whole circuit stops", "other branches keep working"],
              ],
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Is this true of series or parallel circuits?",
                groups: ["Series", "Parallel"],
                items: [
                  { text: "The same current flows through every part", group: 0, hint: "There is only one path for the charge." },
                  { text: "Each branch gets the full supply voltage", group: 1, hint: "Every branch is joined straight across the supply." },
                  { text: "One fused bulb puts all the others out", group: 0, hint: "Breaking the single path stops all current." },
                  { text: "Total resistance is less than the smallest resistor", group: 1, hint: "Each branch adds a new path for current." },
                  { text: "Total resistance is the sum of all resistors", group: 0, hint: "Charge must pass through each one in turn." },
                  { text: "How the fan and fridge in your home are connected", group: 1, hint: "Each appliance can be switched on and off on its own." },
                ],
                explain: "**Series**: one path, same current, resistances add. **Parallel**: many paths, same voltage, total resistance falls; that is how homes are wired.",
              },
            },
            {
              type: "example",
              problem: "Find the combined resistance of a 4 Ω and a 6 Ω resistor, first in series and then in parallel.",
              steps: [
                "Series: $R = 4 + 6 = 10$ Ω.",
                "Parallel: $\\tfrac{1}{R} = \\tfrac{1}{4} + \\tfrac{1}{6} = \\tfrac{3 + 2}{12} = \\tfrac{5}{12}$, so $R = \\tfrac{12}{5} = 2.4$ Ω.",
                "Check with the shortcut for two resistors: $\\tfrac{R_1 R_2}{R_1 + R_2} = \\tfrac{24}{10} = 2.4$ Ω.",
              ],
              answer: "10 Ω in series and 2.4 Ω in parallel (less than the smaller resistor, 4 Ω).",
            },
            {
              type: "mistake",
              wrong: "Adding another resistor in parallel increases the total resistance, just as in series.",
              right: "Adding a resistor in **parallel** always makes the total resistance **smaller**, because it opens one more path for the current.",
              why: "\"More resistors means more resistance\" is true in series, so it feels like a general rule. In parallel, each new branch lets extra current flow from the same voltage, and more current for the same V means less R.",
            },
            {
              type: "heading",
              text: "Electrical power",
            },
            {
              type: "formula",
              tex: "P = VI = I^2 R = \\frac{V^2}{R}",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "An appliance draws 2 A from a 230 V supply. What is its power?",
                  answer: 460,
                  unit: "W",
                  explain: "$P = VI = 230 \\times 2 = 460$ W.",
                },
              ],
            },
            {
              type: "heading",
              text: "Reading the electricity bill",
            },
            {
              type: "text",
              md: "Bills count energy in **units**, where 1 unit = 1 kWh. A 1500 W heater used 2 hours a day for 30 days uses $1.5 \\times 2 \\times 30 = 90$ kWh. At ₹8 per unit, that costs ₹720.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Swapping a 60 W bulb for a 9 W LED of the same brightness saves 51 W. Run it 5 hours a day for a year and you save about $0.051 \\times 5 \\times 365 \\approx 93$ units.",
            },
            {
              type: "keypoints",
              items: [
                "Series adds resistances; parallel adds reciprocals.",
                "Homes are wired in parallel.",
                "P = VI = I²R = V²/R.",
                "Energy (kWh) = power (kW) × time (h).",
              ],
            },
          ],
          flashcards: [
            { front: "Resistors in series", back: "$R = R_1 + R_2 + \\cdots$" },
            { front: "Two resistors in parallel (shortcut)", back: "$R = \\dfrac{R_1R_2}{R_1 + R_2}$" },
            { front: "Why are homes wired in parallel?", back: "Each appliance gets full voltage and can be switched independently." },
            { front: "1 unit of electricity", back: "1 kWh = $3.6 \\times 10^6$ J" },
            { front: "Three formulas for electrical power", back: "$P = VI = I^2R = \\dfrac{V^2}{R}$" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the combined resistance of 6 Ω and 3 Ω in parallel?",
              answer: 2,
              unit: "Ω",
              explain: "$\\tfrac{6 \\times 3}{6 + 3} = \\tfrac{18}{9} = 2$ Ω.",
            },
            {
              kind: "numeric",
              q: "Resistors of 2 Ω, 3 Ω and 5 Ω are connected in series. Total resistance?",
              answer: 10,
              unit: "Ω",
              explain: "$2 + 3 + 5 = 10$ Ω.",
            },
            {
              kind: "mcq",
              q: "Household appliances are connected…",
              options: ["in series", "in parallel", "half in series, half in parallel", "it doesn't matter"],
              answer: 1,
              explain: "Parallel wiring gives each appliance the full mains voltage and independent switching.",
            },
            {
              kind: "numeric",
              q: "How many units (kWh) does a 100 W bulb use in 10 hours?",
              answer: 1,
              unit: "kWh",
              explain: "$0.1\\ \\text{kW} \\times 10\\ \\text{h} = 1$ kWh.",
            },
            {
              kind: "numeric",
              q: "Three 6 Ω resistors are connected in parallel. What is their combined resistance in Ω?",
              answer: 2,
              unit: "Ω",
              explain: "$\\tfrac{1}{R} = \\tfrac{1}{6} + \\tfrac{1}{6} + \\tfrac{1}{6} = \\tfrac{3}{6}$, so $R = 2$ Ω.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "An electric kettle has a resistance of 23 Ω and runs on 230 V. What is its power in watts?",
              answer: 2300,
              unit: "W",
              explain: "$P = \\tfrac{V^2}{R} = \\tfrac{230^2}{23} = \\tfrac{52\\,900}{23} = 2300$ W.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "waves-sound-light",
      title: "Waves, Sound & Light",
      icon: "🌊",
      description: "How waves carry energy, how sound travels, and how light reflects and refracts.",
      lessons: [
        {
          slug: "waves-and-sound",
          title: "Waves & Sound",
          summary: "Transverse and longitudinal waves, v = fλ, how sound travels, echoes and the audible range.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Drop a pebble in a pond and ripples spread out, but the water itself just bobs up and down. A **wave** carries energy from place to place without carrying the material along.",
            },
            {
              type: "table",
              headers: ["Type", "Particles vibrate…", "Examples"],
              rows: [
                ["Transverse", "at right angles to the wave's direction", "ripples on water, light, waves on a string"],
                ["Longitudinal", "along the wave's direction (compressions and rarefactions)", "sound in air, a pushed slinky"],
              ],
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Is each wave transverse or longitudinal?",
                groups: ["Transverse", "Longitudinal"],
                items: [
                  { text: "Ripples on a pond", group: 0, hint: "The water bobs up and down while the ripple moves outward." },
                  { text: "Sound from a temple bell", group: 1, hint: "Air is squeezed and stretched along the direction of travel." },
                  { text: "Light from the Sun", group: 0, hint: "Light is a transverse electromagnetic wave." },
                  { text: "A slinky pushed and pulled along its length", group: 1, hint: "The coils bunch up and spread out along the slinky." },
                  { text: "A guitar string plucked sideways", group: 0, hint: "The string moves sideways while the wave runs along it." },
                  { text: "Ultrasound in a hospital scan", group: 1, hint: "Ultrasound is still sound, just of high frequency." },
                ],
                explain: "Ask how the particles move. **At right angles** to the wave's travel → transverse. **Back and forth along** it → longitudinal. All sound is longitudinal.",
              },
            },
            {
              type: "widget",
              widget: "wave",
              caption: "Adjust amplitude, frequency and wavelength. Notice how frequency and wavelength trade off.",
            },
            {
              type: "formula",
              tex: "v = f\\lambda \\qquad f = \\frac{1}{T}",
              caption: "Wave speed = frequency × wavelength.",
            },
            {
              type: "list",
              items: [
                "**Amplitude:** maximum disturbance; for sound it sets **loudness**.",
                "**Frequency:** waves per second (Hz); for sound it sets **pitch**.",
                "**Wavelength $\\lambda$:** distance between neighbouring crests (or compressions).",
              ],
            },
            {
              type: "heading",
              text: "Sound",
            },
            {
              type: "text",
              md: "Sound needs a **medium**; it cannot travel through a vacuum. It moves at about 343 m/s in air at 20 °C, roughly 1500 m/s in water and about 5000 m/s in steel. Humans hear roughly **20 Hz to 20 000 Hz**; above that is **ultrasound**, below it **infrasound**.",
            },
            {
              type: "example",
              title: "Echo",
              problem: "You shout at a cliff and hear the echo 2 s later. Take $v = 340$ m/s. How far away is the cliff?",
              steps: [
                "Sound travels to the cliff **and back** in 2 s.",
                "Total distance $= v \\times t = 340 \\times 2 = 680$ m.",
                "Distance to the cliff $= 680 \\div 2 = 340$ m, i.e. $d = \\tfrac{vt}{2}$.",
              ],
              answer: "The cliff is 340 m away.",
            },
            {
              type: "mistake",
              wrong: "Distance to the cliff = speed × echo time.",
              right: "Distance $= \\dfrac{\\text{speed} \\times \\text{time}}{2}$, because the sound goes to the cliff **and comes back**.",
              why: "\"Distance = speed × time\" is the rule from motion, so students apply it directly. But in an echo the measured time covers the round trip, which is twice the distance.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A tuning fork of 500 Hz produces sound of wavelength 0.68 m. What is the speed of sound?",
                  answer: 340,
                  unit: "m/s",
                  explain: "$v = f\\lambda = 500 \\times 0.68 = 340$ m/s.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Bats and dolphins use **echolocation**, and ships use SONAR: send out ultrasound, time the echo, and compute distance with $d = \\tfrac{vt}{2}$. Medical ultrasound scans build images the same way.",
            },
            {
              type: "keypoints",
              items: [
                "Waves transfer energy, not matter.",
                "v = fλ.",
                "Sound is longitudinal and needs a medium.",
                "Echo distance = v × t ÷ 2.",
                "Audible range ≈ 20 Hz–20 kHz.",
              ],
            },
          ],
          flashcards: [
            { front: "Wave equation", back: "$v = f\\lambda$" },
            { front: "Transverse vs longitudinal", back: "Transverse: vibration ⟂ direction of travel. Longitudinal: vibration ∥ direction of travel." },
            { front: "Can sound travel through a vacuum?", back: "No, it needs a medium." },
            { front: "What sets pitch? What sets loudness?", back: "Pitch: frequency. Loudness: amplitude." },
            { front: "Distance to a reflecting surface from an echo", back: "$d = \\dfrac{vt}{2}$, since sound travels there and back." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Sound of frequency 170 Hz travels at 340 m/s. What is its wavelength?",
              answer: 2,
              unit: "m",
              explain: "$\\lambda = v/f = 340/170 = 2$ m.",
            },
            {
              kind: "mcq",
              q: "Why can't astronauts hear each other directly in space?",
              options: ["It is too cold", "Sound needs a medium and space is nearly a vacuum", "Their helmets block light", "Sound is too slow in space"],
              answer: 1,
              explain: "Sound is a vibration of particles; with almost no particles, it can't travel.",
            },
            {
              kind: "numeric",
              q: "An echo is heard 3 s after a shout. If sound travels at 330 m/s, how far away is the reflecting wall?",
              answer: 495,
              unit: "m",
              explain: "$d = \\tfrac{330 \\times 3}{2} = 495$ m.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "Sound waves in air are longitudinal.",
              answer: true,
              explain: "Air particles vibrate back and forth along the direction the sound travels.",
            },
            {
              kind: "mcq",
              q: "Ultrasound has a frequency…",
              options: ["below 20 Hz", "between 20 Hz and 20 kHz", "above 20 kHz", "exactly 343 Hz"],
              answer: 2,
              explain: "Ultrasound is above the upper limit of human hearing.",
            },
            {
              kind: "numeric",
              q: "A ship's SONAR sends an ultrasound pulse to the sea bed and receives the echo after 2 s. Sound travels at 1500 m/s in sea water. How deep is the sea, in m?",
              answer: 1500,
              unit: "m",
              explain: "$d = \\tfrac{vt}{2} = \\tfrac{1500 \\times 2}{2} = 1500$ m.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "light-reflection-refraction",
          title: "Light: Reflection & Refraction",
          summary: "Laws of reflection, mirror formula, refractive index and lens power.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Put a straw in a glass of water and it looks broken at the surface. Look into a spoon and your face flips upside down. Both tricks come from two behaviours of light: **reflection** and **refraction**.",
            },
            {
              type: "heading",
              text: "Laws of reflection",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "The angle of incidence equals the angle of reflection: $\\angle i = \\angle r$.",
                "The incident ray, the reflected ray and the normal all lie in the same plane.",
              ],
            },
            {
              type: "heading",
              text: "Spherical mirrors",
            },
            {
              type: "formula",
              tex: "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\qquad m = -\\frac{v}{u} \\qquad f = \\frac{R}{2}",
              caption: "Mirror formula (New Cartesian sign convention: distances measured from the pole, against the incoming light are negative).",
            },
            {
              type: "example",
              title: "Concave mirror",
              problem: "An object is 30 cm in front of a concave mirror of focal length 15 cm. Find the position, size and nature of the image.",
              steps: [
                "Signs: $u = -30$ cm, $f = -15$ cm.",
                "$\\tfrac{1}{v} = \\tfrac{1}{f} - \\tfrac{1}{u} = -\\tfrac{1}{15} + \\tfrac{1}{30} = -\\tfrac{1}{30}$, so $v = -30$ cm.",
                "$m = -\\tfrac{v}{u} = -\\tfrac{-30}{-30} = -1$.",
              ],
              answer: "A real, inverted image of the same size, 30 cm in front of the mirror (the object is at the centre of curvature).",
            },
            {
              type: "heading",
              text: "Refraction",
            },
            {
              type: "text",
              md: "Light changes speed when it enters a new medium, so it **bends**. Entering a denser medium (air → glass) it bends **towards** the normal; leaving it, it bends away.",
            },
            {
              type: "formula",
              tex: "n = \\frac{c}{v} \\qquad n_1 \\sin i = n_2 \\sin r",
              caption: "Refractive index, and Snell's law. c = 3 × 10⁸ m/s.",
            },
            {
              type: "text",
              md: "Glass has $n \\approx 1.5$, so light travels through it at $\\tfrac{3 \\times 10^8}{1.5} = 2 \\times 10^8$ m/s.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Does the ray bend towards or away from the normal?",
                groups: ["Towards the normal", "Away from the normal"],
                items: [
                  { text: "Air into glass", group: 0, hint: "Glass is optically denser, so light slows down." },
                  { text: "Glass into air", group: 1, hint: "Light speeds up as it leaves the denser glass." },
                  { text: "Air into water", group: 0, hint: "Water (n ≈ 1.33) is denser than air." },
                  { text: "Water into air", group: 1, hint: "This is why a pool looks shallower than it is." },
                  { text: "Water into glass", group: 0, hint: "Glass (n ≈ 1.5) is denser than water (n ≈ 1.33)." },
                  { text: "Diamond into air", group: 1, hint: "Diamond has n ≈ 2.42, so light speeds up a lot on leaving it." },
                ],
                explain: "Into a medium with a **higher n** (light slows down) → bends **towards** the normal. Into a **lower n** (light speeds up) → bends **away**.",
              },
            },
            {
              type: "mistake",
              wrong: "Light always bends towards the normal when it goes into a new medium.",
              right: "It bends **towards** the normal only when it enters an optically **denser** medium. Going into a rarer medium (glass → air) it bends **away**. A ray along the normal does not bend at all.",
              why: "The first example everyone learns is air → glass, so \"towards the normal\" sticks as the rule. The real rule depends on whether light slows down or speeds up.",
            },
            {
              type: "heading",
              text: "Lenses and power",
            },
            {
              type: "formula",
              tex: "P = \\frac{1}{f\\ (\\text{in metres})}",
              caption: "Unit: dioptre (D). Convex (converging) lenses have positive power; concave lenses negative.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A convex lens has focal length +25 cm. What is its power?",
                  answer: 4,
                  unit: "D",
                  explain: "$P = \\tfrac{1}{0.25} = +4$ D.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "An eye-glass prescription of −2.0 D means a concave lens with $f = -0.5$ m, used to correct short-sightedness. Optical fibres trap light by **total internal reflection**, carrying the internet under oceans.",
            },
            {
              type: "keypoints",
              items: [
                "Reflection: ∠i = ∠r.",
                "Mirror formula: 1/f = 1/v + 1/u; m = −v/u.",
                "n = c/v; denser medium → bends towards the normal.",
                "Lens power P = 1/f (m), in dioptres.",
              ],
            },
          ],
          flashcards: [
            { front: "First law of reflection", back: "Angle of incidence = angle of reflection." },
            { front: "Refractive index", back: "$n = c/v$, the ratio of light's speed in vacuum to its speed in the medium." },
            { front: "Mirror formula", back: "$\\dfrac{1}{f} = \\dfrac{1}{v} + \\dfrac{1}{u}$" },
            { front: "Unit of lens power", back: "Dioptre (D) = 1/m" },
            { front: "Air → glass: which way does light bend?", back: "Towards the normal." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A ray strikes a plane mirror at an angle of incidence of 35°. What is the angle of reflection?",
              answer: 35,
              unit: "°",
              explain: "Angle of reflection equals angle of incidence.",
            },
            {
              kind: "numeric",
              q: "A medium has refractive index 2. What is the speed of light in it, in units of $10^8$ m/s?",
              answer: 1.5,
              tolerance: 0.01,
              unit: "× 10⁸ m/s",
              explain: "$v = c/n = 3 \\times 10^8 / 2 = 1.5 \\times 10^8$ m/s.",
            },
            {
              kind: "numeric",
              q: "What is the power of a lens with focal length +50 cm?",
              answer: 2,
              unit: "D",
              explain: "$P = 1/0.5 = +2$ D.",
            },
            {
              kind: "mcq",
              q: "The bending of light as it passes from one medium into another is called…",
              options: ["reflection", "refraction", "diffraction", "dispersion"],
              answer: 1,
              explain: "Refraction is bending due to a change of speed between media.",
            },
            {
              kind: "truefalse",
              q: "Light bends towards the normal when it enters a denser medium.",
              answer: true,
              explain: "It slows down, so it bends towards the normal.",
            },
            {
              kind: "numeric",
              q: "An object is placed 20 cm in front of a concave mirror of focal length 10 cm. What is the image distance v in cm? (Give the sign.)",
              answer: -20,
              unit: "cm",
              explain: "$\\tfrac{1}{v} = \\tfrac{1}{f} - \\tfrac{1}{u} = -\\tfrac{1}{10} + \\tfrac{1}{20} = -\\tfrac{1}{20}$, so $v = -20$ cm: real image at C.",
              difficulty: 3,
            },
          ],
        },
      ],
    },
  ],
};
