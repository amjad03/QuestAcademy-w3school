import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Laws of Motion (NCERT Class 11 / Karnataka I PUC / ISC Class 11)     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-laws-of-motion",
    title: "Laws of Motion",
    icon: "🚀",
    description: "Newton's three laws, momentum and impulse, conservation of momentum, equilibrium, free-body diagrams, friction and the dynamics of circular motion including banked roads.",
    lessons: [
      {
        slug: "c11-newtons-laws-momentum",
        title: "Newton's Laws, Momentum and Impulse",
        summary: "Inertia and the first law, momentum and the second law, impulse, the third law, conservation of momentum and the equilibrium of a particle.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚌",
            caption: "When a city bus brakes suddenly, standing passengers lurch forward. Nothing pushed them forward: their bodies simply kept moving.",
          },
          {
            type: "text",
            md: t`Aristotle taught that a body needs a force to *keep* moving. Galileo showed this was wrong. A ball rolling down one smooth incline climbs a second incline to almost the same height; as the second incline is made flatter, the ball rolls further. On a perfectly smooth horizontal plane it would roll on forever. Real bodies stop only because of opposing forces such as friction and air drag.

The tendency of a body to stay in its state of rest or of uniform motion in a straight line is called **inertia**. Mass is the measure of inertia.

**Newton's first law:** every body continues in its state of rest or of uniform motion in a straight line unless an external net force compels it to change that state. So if the net external force is zero, the acceleration is zero.`,
          },
          {
            type: "text",
            md: t`**Linear momentum** is the product of mass and velocity, $\vec p = m\vec v$. It is a vector with SI unit kg m/s. A loaded truck and a cricket ball at the same speed are very different to stop: the larger the momentum, the larger the force or the longer the time needed.

**Newton's second law:** the rate of change of momentum of a body is directly proportional to the applied net force and takes place in the direction of the force. With a suitable choice of unit (the newton), the constant of proportionality is 1. For constant mass this gives the familiar $F = ma$. The law is a vector law, so it holds separately for each component: $F_x = ma_x$, $F_y = ma_y$, $F_z = ma_z$.`,
          },
          {
            type: "formula",
            tex: t`\vec F_{\text{net}} = \frac{d\vec p}{dt} = m\frac{d\vec v}{dt} = m\vec a \qquad 1\ \text{N} = 1\ \text{kg m s}^{-2}`,
            caption: "Second law for a body of constant mass. F is the net external force; internal forces are not included.",
          },
          {
            type: "text",
            md: t`A large force acting for a very short time (a bat hitting a ball, a hammer on a nail) is an **impulsive force**. We rarely know its exact value at each instant, but we can find its total effect, the **impulse**:

$J = F_{\text{avg}}\,\Delta t = \Delta p$ (impulse–momentum theorem).

Impulse has the same unit as momentum (N s = kg m/s). A fielder pulls the hands back while catching: the same change in momentum is spread over a longer time, so the average force on the hands is smaller.`,
          },
          {
            type: "example",
            title: "Impulse on a cricket ball",
            problem: t`A 0.15 kg cricket ball reaches the bat at 20 m/s and is hit straight back along the same line at 30 m/s. The bat is in contact with the ball for 0.01 s. Find the impulse and the average force on the ball.`,
            steps: [
              t`Take the direction of the return shot as positive. Initial velocity $u = -20$ m/s, final velocity $v = +30$ m/s.`,
              t`Impulse $J = m(v - u) = 0.15\,(30 - (-20)) = 0.15 \times 50 = 7.5$ N s.`,
              t`Average force $F = J/\Delta t = 7.5/0.01 = 750$ N, in the direction of the return shot.`,
            ],
            answer: "Impulse = 7.5 N s and average force = 750 N, both directed away from the bat (towards the bowler).",
          },
          {
            type: "text",
            md: t`**Newton's third law:** to every action there is always an equal and opposite reaction. Forces always occur in pairs. If body A pushes body B with $\vec F_{AB}$, then B pushes A with $\vec F_{BA} = -\vec F_{AB}$. The two forces act at the same instant, along the same line, and are of the same kind (both gravitational, both contact, and so on). Crucially, they act on **different bodies**.`,
          },
          {
            type: "mistake",
            wrong: "Action and reaction are equal and opposite, so they cancel and nothing can ever accelerate.",
            right: "Action and reaction act on two different bodies, so they never cancel each other. Only forces acting on the same body can be added to find its net force.",
            why: "Equal and opposite forces on one body do cancel, so the idea feels natural. But when you push a wall, the wall's push acts on you, not on the wall. To find the motion of a body, draw only the forces acting on that body.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Two bodies A and B collide (or push apart, as in a gun firing a bullet). No external force acts on the pair.`,
              t`During contact, A exerts $\vec F_{AB}$ on B and B exerts $\vec F_{BA}$ on A for the same time $\Delta t$.`,
              t`By the second law, change in momentum of B: $\Delta \vec p_B = \vec F_{AB}\,\Delta t$; of A: $\Delta \vec p_A = \vec F_{BA}\,\Delta t$.`,
              t`By the third law, $\vec F_{BA} = -\vec F_{AB}$, so $\Delta \vec p_A = -\Delta \vec p_B$, i.e. $\Delta \vec p_A + \Delta \vec p_B = 0$.`,
              t`Hence $\vec p_A + \vec p_B$ is unchanged: **the total momentum of an isolated system of interacting particles is conserved.**`,
            ],
          },
          {
            type: "example",
            title: "Recoil of a rifle",
            problem: t`A 4 kg rifle fires a 20 g bullet with a muzzle speed of 400 m/s. Find the recoil speed of the rifle.`,
            steps: [
              t`Before firing, rifle and bullet are at rest, so total momentum = 0.`,
              t`After firing: $m_b v_b + M v_r = 0$, so $v_r = -\dfrac{m_b v_b}{M}$.`,
              t`$v_r = -\dfrac{0.020 \times 400}{4} = -2$ m/s. The minus sign means the rifle moves opposite to the bullet.`,
            ],
            answer: "The rifle recoils at 2 m/s, opposite to the bullet. This is why a rifle is held firmly against the shoulder.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A stone is whirled in a horizontal circle on a string. The string snaps. Just after that, the stone moves:",
                options: ["along the tangent to the circle at that point", "radially outward, away from the centre", "radially inward, towards the centre", "along a spiral that slowly opens out"],
                answer: 0,
                explain: "Once the string breaks, no horizontal force acts. By the first law the stone keeps the velocity it had at that instant, which is along the tangent.",
              },
              {
                kind: "numeric",
                q: "A constant net force of 5 N acts for 3 s on a 1 kg body initially at rest. What is its final speed (m/s)?",
                answer: 15,
                unit: "m/s",
                explain: t`Impulse $= 5 \times 3 = 15$ N s $= \Delta p = 1 \times v$, so $v = 15$ m/s.`,
              },
            ],
          },
          {
            type: "text",
            md: t`A particle is in **equilibrium** when the net external force on it is zero: $\vec F_1 + \vec F_2 + \dots + \vec F_n = 0$. It is then at rest or moving with constant velocity. In components, $\sum F_x = 0$, $\sum F_y = 0$, $\sum F_z = 0$. Three concurrent forces in equilibrium can be drawn head-to-tail as a closed triangle.`,
          },
          {
            type: "example",
            title: "A lamp hung from two strings",
            problem: t`A 4 kg lamp hangs at rest from two strings, each making 30° with the horizontal, one on each side. Find the tension in each string. Take $g = 10$ m/s².`,
            steps: [
              t`Forces on the lamp: weight $mg = 40$ N down, and tensions $T_1$, $T_2$ along the strings.`,
              t`Horizontal: $T_1\cos 30^\circ = T_2\cos 30^\circ$, so $T_1 = T_2 = T$.`,
              t`Vertical: $2T\sin 30^\circ = mg$, so $2T \times 0.5 = 40$ and $T = 40$ N.`,
            ],
            answer: "Each string has a tension of 40 N, equal to the full weight of the lamp. The flatter the strings, the larger the tension.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A horse pulls a cart forward. Why can they move?",
              emoji: "🐎",
              options: [
                "The horse pulls the cart harder than the cart pulls the horse.",
                "The cart's pull on the horse cancels the horse's pull, so they cannot move.",
                "The ground pushes the horse forward (friction on its hooves) more than the backward forces on the horse-cart system.",
              ],
              answer: 2,
              trap: 0,
              explain: "The horse and cart pull each other with equal and opposite forces (third law), but these are internal to the horse-cart system. The system accelerates because the external forward friction from the ground on the hooves is larger than the friction opposing the cart's wheels.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`State each law in full words before using it, and draw the force diagram even if not asked. In derivation questions on conservation of momentum, marks go for: naming the second law, naming the third law, and the final statement. Always write units (N, N s, kg m/s) and give the direction of vector answers.`,
          },
          {
            type: "keypoints",
            items: [
              "Inertia: a body resists changes in its state of motion; mass measures inertia (first law).",
              t`Second law: $\vec F_{\text{net}} = d\vec p/dt$; for constant mass, $\vec F = m\vec a$.`,
              t`Impulse $J = F\Delta t = \Delta p$; spreading the same $\Delta p$ over more time reduces the force.`,
              "Third law: action and reaction are equal, opposite and act on different bodies.",
              "With no external force, the total momentum of a system is conserved (gun recoil, collisions).",
            ],
          },
        ],
        flashcards: [
          { front: "Newton's first law", back: "A body stays at rest or in uniform motion in a straight line unless an external net force acts on it." },
          { front: "Measure of inertia", back: "Mass. More mass means more resistance to a change in velocity." },
          { front: "Newton's second law (momentum form)", back: t`$\vec F_{\text{net}} = d\vec p/dt$; for constant mass, $\vec F = m\vec a$.` },
          { front: "Impulse", back: t`Force × time of action $= \Delta p$. Unit: N s (same as kg m/s).` },
          { front: "Why does a fielder pull the hands back while catching?", back: "It increases the time over which the ball's momentum is destroyed, so the average force on the hands is smaller." },
          { front: "Third law: on which bodies do action and reaction act?", back: "On two different bodies. They never cancel each other." },
          { front: "Condition for conservation of linear momentum", back: "The net external force on the system is zero." },
          { front: "Equilibrium of a particle", back: t`$\sum \vec F = 0$, i.e. $\sum F_x = \sum F_y = \sum F_z = 0$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A 2 kg body's velocity changes from 3 m/s to 7 m/s in 2 s along a straight line. The net force on it is:",
            options: ["2 N", "4 N", "8 N", "14 N"],
            answer: 1,
            explain: t`$a = (7 - 3)/2 = 2$ m/s², so $F = ma = 2 \times 2 = 4$ N. 8 N is the change in momentum, not the force.`,
          },
          {
            kind: "numeric",
            q: "A 50 g ball hits a wall normally at 10 m/s and rebounds at 10 m/s. Contact lasts 0.02 s. What is the average force on the ball (N)?",
            answer: 50,
            unit: "N",
            explain: t`$\Delta p = 0.05 \times (10 - (-10)) = 1$ N s. $F = 1/0.02 = 50$ N. Forgetting the reversal of direction gives the wrong answer 0.`,
            difficulty: 2,
            hint: "Velocity reverses, so the change in velocity is 20 m/s, not zero.",
          },
          {
            kind: "truefalse",
            q: "An action–reaction pair can act on the same body.",
            answer: false,
            explain: "The two forces of a third-law pair always act on different bodies.",
          },
          {
            kind: "mcq",
            q: "The total linear momentum of a system is conserved when:",
            options: ["the net external force on the system is zero", "no internal forces act between its parts", "its kinetic energy is conserved", "every body in it moves at constant speed"],
            answer: 0,
            explain: "Internal forces cancel in pairs (third law), so only an external force can change the total momentum. Kinetic energy may change even when momentum is conserved.",
          },
          {
            kind: "multi",
            q: "Which of these are explained by inertia? Select all that apply.",
            options: [
              "Passengers lurch forward when a bus brakes suddenly",
              "Dust leaves a carpet when it is beaten with a stick",
              "A rocket rises as hot gases rush out downward",
              "A coin on a card drops into a glass when the card is flicked away",
            ],
            answers: [0, 1, 3],
            explain: "The bus, carpet and coin cases show bodies resisting a change in their state of motion. The rocket is explained by the third law and momentum conservation.",
          },
          {
            kind: "numeric",
            q: "A 5 kg gun fires a 25 g bullet at 300 m/s. What is the recoil speed of the gun (m/s)?",
            answer: 1.5,
            unit: "m/s",
            explain: t`$v = \dfrac{0.025 \times 300}{5} = 1.5$ m/s, opposite to the bullet.`,
          },
          {
            kind: "mcq",
            q: "A book rests on a table. The reaction force to the Earth's pull on the book (its weight) is:",
            options: ["the normal force of the table on the book", "the force of the book on the table", "the gravitational pull of the book on the Earth", "the friction between book and table"],
            answer: 2,
            explain: "The Earth pulls the book, so the book pulls the Earth with an equal and opposite gravitational force. The normal force balances the weight, but it is a different (contact) force and both act on the book, so they are not a third-law pair.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Impulse has the same unit as linear ___.",
            answer: ["momentum"],
            explain: "Impulse equals the change in momentum, so both are measured in N s = kg m/s.",
          },
        ],
      },
      {
        slug: "c11-fbd-friction",
        title: "Free-Body Diagrams, Connected Bodies and Friction",
        summary: "The common forces of mechanics, a step-by-step method with free-body diagrams, static and kinetic friction, the angle of repose and motion on a rough incline.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧳",
            caption: "Pulling a heavy suitcase across a railway platform: weight, normal force, the pull of the handle and friction all act on it at once.",
          },
          {
            type: "text",
            md: t`Most problems in mechanics use only a few kinds of force. **Weight** $mg$ acts vertically down; it is a non-contact force. The **normal reaction** $N$ is the push of a surface, perpendicular to it. **Tension** $T$ pulls along a string; for a light (massless) string it is the same all along the string. The **spring force** $-kx$ opposes the extension or compression $x$. **Friction** $f$ acts along the surface and opposes relative motion or its tendency.

Weight is gravitational. All the contact forces (normal force, tension, spring force, friction) come from electromagnetic forces between the atoms of the bodies in contact.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Draw a rough diagram of the system: bodies, strings, supports.",
              "Choose the body (or group of bodies) whose motion you want, and isolate it.",
              "Draw its free-body diagram: every force acting ON that body, and no forces it exerts on others.",
              "Choose axes (often along and perpendicular to the motion) and resolve forces into components.",
              t`Apply $\sum F_x = ma_x$ and $\sum F_y = ma_y$; repeat for other bodies and use the third law to link them.`,
            ],
          },
          {
            type: "example",
            title: "Two blocks in contact",
            problem: t`Blocks of 4 kg and 2 kg are in contact on a smooth horizontal floor. A horizontal force of 12 N pushes the 4 kg block, which pushes the 2 kg block. Find the acceleration and the contact force between the blocks.`,
            steps: [
              t`Whole system (6 kg): the contact forces are internal. $a = \dfrac{12}{6} = 2$ m/s².`,
              t`Free-body diagram of the 2 kg block: the only horizontal force is the contact force $F_c$ from the 4 kg block.`,
              t`$F_c = 2 \times 2 = 4$ N.`,
              t`Check with the 4 kg block: $12 - F_c = 4 \times 2$, so $F_c = 4$ N. ✓`,
            ],
            answer: "a = 2 m/s² and the contact force is 4 N. Pushing on the 2 kg block instead would make the contact force 8 N.",
          },
          {
            type: "text",
            md: t`**Friction** is the force that opposes relative motion (or impending relative motion) between surfaces in contact.

**Static friction** $f_s$ acts when the surfaces do not slide. It is self-adjusting: it takes whatever value (up to a limit) is needed to prevent sliding. Its maximum value, **limiting friction**, is $\mu_s N$, where $\mu_s$ is the coefficient of static friction.

**Kinetic friction** $f_k$ acts once sliding begins. It is nearly independent of speed and equals $\mu_k N$. Usually $\mu_k < \mu_s$, which is why it is harder to start a heavy box moving than to keep it moving. To a good approximation, both are independent of the area of contact.`,
          },
          {
            type: "formula",
            tex: t`f_s \le \mu_s N \qquad f_k = \mu_k N \qquad \tan\theta_r = \mu_s`,
            caption: "θ_r is the angle of repose: the steepest incline on which a block stays at rest.",
          },
          {
            type: "table",
            headers: ["Kind", "When it acts", "Size"],
            rows: [
              ["Static", "no sliding between surfaces", t`any value from 0 to $\mu_s N$`],
              ["Kinetic (sliding)", "surfaces sliding over each other", t`$\mu_k N$, nearly constant`],
              ["Rolling", "a wheel or ball rolls without slipping", "much smaller than sliding friction (ball bearings use this)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 5 kg box rests on a floor with μs = 0.4. A worker pushes it horizontally with 10 N and it does not move. What is the friction force on it (N)? Take g = 10 m/s².",
                answer: 10,
                unit: "N",
                explain: t`Limiting friction is $0.4 \times 50 = 20$ N, but the box is at rest, so static friction just balances the push: 10 N.`,
              },
            ],
          },
          {
            type: "example",
            title: "A box on an accelerating truck",
            problem: t`A crate rests on the flat bed of a truck. $\mu_s = 0.15$ between crate and bed. The truck accelerates at 2 m/s². Does the crate stay at rest relative to the truck? Take $g = 10$ m/s².`,
            steps: [
              t`To move with the truck, the crate needs a forward force $ma = 2m$ (newtons, with $m$ in kg).`,
              t`The only horizontal force on it is static friction from the bed, and its maximum is $\mu_s mg = 0.15 \times 10 \times m = 1.5m$.`,
              t`Needed $2m$ > available $1.5m$, so friction cannot hold it. The maximum acceleration the crate can share is $\mu_s g = 1.5$ m/s².`,
            ],
            answer: "The crate slides backward relative to the truck (though it still moves forward relative to the road). Friction here acts forward and is what accelerates the crate.",
          },
          {
            type: "mistake",
            wrong: "Friction always opposes motion, so it always acts backwards and always slows bodies down.",
            right: "Friction opposes relative motion (or the tendency of relative motion) between the two surfaces in contact. It can act in the direction of a body's motion and even be the cause of it.",
            why: "In everyday sliding, friction does slow things down. But when you walk, your foot pushes the ground backward and friction on your foot acts forward. A crate on an accelerating truck is carried forward by friction.",
          },
          {
            type: "text",
            md: t`**Block on a rough incline.** Resolve the weight: $mg\sin\theta$ along the slope and $mg\cos\theta$ into the surface, so $N = mg\cos\theta$. If $\tan\theta > \mu_s$ the block slides, and while sliding down its acceleration is $g(\sin\theta - \mu_k\cos\theta)$. If $\tan\theta \le \mu_s$ it stays at rest, and the static friction is exactly $mg\sin\theta$ up the slope.`,
          },
          {
            type: "formula",
            tex: t`a_{\text{down}} = g(\sin\theta - \mu_k\cos\theta)`,
            caption: "Valid only while the block is sliding down the incline.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "A box is pushed along a table. Which forces go on the box's free-body diagram?",
              groups: ["Acts on the box", "Does not act on the box"],
              items: [
                { text: "Weight of the box", group: 0, hint: "The Earth pulls the box." },
                { text: "Normal force from the table", group: 0, hint: "The table pushes up on the box." },
                { text: "Push of the hand", group: 0, hint: "The hand is in contact with the box." },
                { text: "Friction from the table", group: 0, hint: "The table surface acts on the box." },
                { text: "Force of the box on the table", group: 1, hint: "This acts on the table, not on the box." },
                { text: "Pull of the box on the Earth", group: 1, hint: "This acts on the Earth." },
              ],
              explain: "A free-body diagram shows only forces acting ON the chosen body. Each third-law partner acts on the other body, so it is left out.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Draw a separate free-body diagram for each body in connected-body problems; examiners award a mark for it. Write $f = \mu N$ only for limiting or kinetic friction. Name the methods of reducing friction (polishing, lubricants, ball bearings, streamlining) and give an advantage and a disadvantage of friction for short answers.`,
          },
          {
            type: "keypoints",
            items: [
              "A free-body diagram shows every force acting on one chosen body, and nothing else.",
              t`Static friction adjusts itself up to $\mu_s N$; kinetic friction is $\mu_k N$, with $\mu_k < \mu_s$ usually.`,
              t`Angle of repose: $\tan\theta_r = \mu_s$.`,
              t`On a rough incline: $N = mg\cos\theta$; sliding down, $a = g(\sin\theta - \mu_k\cos\theta)$.`,
              "Friction opposes relative motion, not motion itself; it can accelerate a body.",
            ],
          },
        ],
        flashcards: [
          { front: "Free-body diagram", back: "A sketch of one body showing every force acting on it (and none of the forces it exerts on others)." },
          { front: "Limiting friction", back: t`The maximum static friction, $f_{s,\max} = \mu_s N$, just before sliding begins.` },
          { front: "Why is it harder to start a box than to keep it sliding?", back: t`Because $\mu_s > \mu_k$: limiting static friction is larger than kinetic friction.` },
          { front: "Angle of repose", back: t`The steepest incline on which a body stays at rest: $\tan\theta_r = \mu_s$.` },
          { front: "Does friction depend on area of contact?", back: "To a good approximation, no. It depends on the normal force and the nature of the surfaces." },
          { front: "Acceleration sliding down a rough incline", back: t`$a = g(\sin\theta - \mu_k\cos\theta)$.` },
          { front: "Direction of friction on your foot when you walk", back: "Forward. Your foot pushes the ground backward; friction on the foot opposes that slipping and acts forward." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A 10 kg block on a floor has μs = 0.5 and μk = 0.4. A horizontal push of 30 N is applied. The friction on the block is (g = 10 m/s²):",
            options: ["30 N", "40 N", "50 N", "0 N"],
            answer: 0,
            explain: "Limiting friction is 0.5 × 100 = 50 N, more than 30 N, so the block stays at rest and static friction equals the push, 30 N.",
          },
          {
            kind: "numeric",
            q: "The same 10 kg block (μs = 0.5, μk = 0.4) is now pushed with 60 N. Find its acceleration (m/s²). g = 10 m/s².",
            answer: 2,
            unit: "m/s²",
            explain: t`60 N exceeds the 50 N limit, so it slides. Kinetic friction $= 0.4 \times 100 = 40$ N. $a = (60 - 40)/10 = 2$ m/s².`,
            difficulty: 2,
            hint: "Once it slides, use μk, not μs.",
          },
          {
            kind: "truefalse",
            q: "The coefficient of friction between two surfaces increases strongly when the area of contact is increased.",
            answer: false,
            explain: "To a good approximation, friction is independent of the area of contact; it depends on N and the nature of the surfaces.",
          },
          {
            kind: "mcq",
            q: "A block just begins to slide when an incline is raised to 30°. The coefficient of static friction is:",
            options: ["0.5", "0.577", "0.866", "1.73"],
            answer: 1,
            explain: t`$\mu_s = \tan 30^\circ = 1/\sqrt 3 \approx 0.577$. 0.5 is $\sin 30^\circ$, a common slip.`,
          },
          {
            kind: "numeric",
            q: "A block slides down a 30° incline with μk = 0.2. Find its acceleration (m/s²). g = 10 m/s².",
            answer: 3.27,
            tolerance: 0.05,
            unit: "m/s²",
            explain: t`$a = 10(\sin 30^\circ - 0.2\cos 30^\circ) = 10(0.5 - 0.173) = 3.27$ m/s².`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A box rests on a rough incline. Which forces belong on its free-body diagram?",
            options: ["Weight mg", "Normal force from the incline", "Static friction up the slope", "A separate 'downhill force' in addition to the weight", "Force of the box on the incline"],
            answers: [0, 1, 2],
            explain: t`$mg\sin\theta$ is a component of the weight, not an extra force. The force of the box on the incline acts on the incline.`,
          },
          {
            kind: "mcq",
            q: "Blocks of 3 kg and 2 kg are in contact on a smooth floor. A 10 N force pushes the 3 kg block. The contact force between them is:",
            options: ["4 N", "6 N", "10 N", "2 N"],
            answer: 0,
            explain: t`$a = 10/5 = 2$ m/s². The contact force alone accelerates the 2 kg block: $2 \times 2 = 4$ N.`,
          },
          {
            kind: "fill",
            q: "Rolling friction is ___ than sliding friction for the same pair of bodies.",
            answer: ["less", "smaller", "lower"],
            explain: "That is why wheels and ball bearings make motion easier.",
          },
        ],
      },
      {
        slug: "c11-circular-motion-dynamics",
        title: "Dynamics of Circular Motion and Banking of Roads",
        summary: "Centripetal force and what supplies it, a car on a level curve, the banked road with and without friction, and the leaning cyclist.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏎️",
            caption: "On a hairpin bend of a ghat road, something must keep pulling the car towards the centre of the curve, or it would carry straight on.",
          },
          {
            type: "text",
            md: t`A body moving in a circle of radius $r$ at speed $v$ has an acceleration $v^2/r$ towards the centre, even if its speed is constant (its direction keeps changing). By the second law, a net force towards the centre is needed: the **centripetal force**.

Centripetal force is not a new kind of force. It is the name for whichever real force (or combination) points to the centre: tension for a stone on a string, gravity for the Moon, friction for a car on a level road, the normal force for a rider pressed against the wall of a rotating drum.`,
          },
          {
            type: "formula",
            tex: t`F_c = \frac{mv^2}{r} = m\omega^2 r`,
            caption: "The net inward force needed to keep mass m on a circle of radius r at speed v (angular speed ω = v/r).",
          },
          {
            type: "text",
            md: t`**Car on a level curve.** Vertically, $N = mg$. The only horizontal force is static friction from the road, towards the centre. It must supply $mv^2/r$, but it cannot exceed $\mu_s N = \mu_s mg$. So $mv^2/r \le \mu_s mg$, giving $v_{\max} = \sqrt{\mu_s r g}$. The maximum safe speed does not depend on the mass of the car. On a wet or oily road, $\mu_s$ falls and so does the safe speed.`,
          },
          {
            type: "example",
            title: "Safe speed on a level curve",
            problem: t`A level curve has radius 50 m and $\mu_s = 0.4$ between tyres and road. Find the maximum safe speed. Take $g = 10$ m/s².`,
            steps: [
              t`$v_{\max} = \sqrt{\mu_s r g} = \sqrt{0.4 \times 50 \times 10} = \sqrt{200}$.`,
              t`$\sqrt{200} \approx 14.1$ m/s.`,
              t`In km/h: $14.1 \times 3.6 \approx 51$ km/h.`,
            ],
            answer: "About 14.1 m/s (≈ 51 km/h), whatever the mass of the vehicle.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Road banked at angle $\theta$. Forces on the car: weight $mg$ down, normal force $N$ perpendicular to the road, friction $f$ along the road. At maximum speed the car tends to slide outward (up the slope), so $f$ acts down the slope.`,
              t`Vertical: $N\cos\theta = mg + f\sin\theta$.`,
              t`Horizontal (towards the centre): $N\sin\theta + f\cos\theta = \dfrac{mv^2}{r}$.`,
              t`At the limit, $f = \mu_s N$. Then $mg = N(\cos\theta - \mu_s\sin\theta)$ and $\dfrac{mv^2}{r} = N(\sin\theta + \mu_s\cos\theta)$.`,
              t`Divide: $\dfrac{v^2}{rg} = \dfrac{\sin\theta + \mu_s\cos\theta}{\cos\theta - \mu_s\sin\theta} = \dfrac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}$.`,
            ],
          },
          {
            type: "formula",
            tex: t`v_{\max} = \sqrt{rg\,\frac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}} \qquad v_0 = \sqrt{rg\tan\theta}\ \ (\text{no friction needed})`,
            caption: "Putting μs = 0 gives the optimum speed v₀, at which the horizontal component of N alone supplies the centripetal force.",
          },
          {
            type: "example",
            title: "A banked highway curve",
            problem: t`A curve of radius 200 m is banked at 10°. $\mu_s = 0.25$. Find the optimum speed and the maximum safe speed. Take $g = 9.8$ m/s², $\tan 10^\circ = 0.176$.`,
            steps: [
              t`$rg = 200 \times 9.8 = 1960$ m²/s².`,
              t`Optimum: $v_0 = \sqrt{1960 \times 0.176} = \sqrt{345} \approx 18.6$ m/s (≈ 67 km/h).`,
              t`Maximum: $\dfrac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta} = \dfrac{0.25 + 0.176}{1 - 0.044} = \dfrac{0.426}{0.956} \approx 0.446$.`,
              t`$v_{\max} = \sqrt{1960 \times 0.446} = \sqrt{874} \approx 29.6$ m/s (≈ 106 km/h).`,
            ],
            answer: "Optimum speed ≈ 18.6 m/s; maximum safe speed ≈ 29.6 m/s. Banking raises the safe speed well above the level-road value.",
          },
          {
            type: "mistake",
            wrong: "A car on a curve feels pushed outward, so the free-body diagram needs an outward centrifugal force that balances the inward force.",
            right: "In the ground frame there is no outward force on the car. The real forces (friction, normal force, weight) have a net inward resultant equal to mv²/r, which is why the car's velocity keeps turning.",
            why: "Passengers feel thrown outward because their bodies tend to go straight on (inertia) while the car turns under them. If the forces were balanced, the car would move in a straight line, not a circle.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 1000 kg car goes round a curve of radius 50 m at 10 m/s. What centripetal force (N) is needed?",
                answer: 2000,
                unit: "N",
                explain: t`$F = mv^2/r = 1000 \times 100/50 = 2000$ N.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each motion to the force supplying its centripetal force.",
              pairs: [
                ["Stone whirled on a string", "Tension in the string"],
                ["Car turning on a level road", "Static friction from the road"],
                ["Moon going round the Earth", "Gravitational pull of the Earth"],
                ["Car on a banked road at the optimum speed", "Horizontal component of the normal force"],
                ["Rider stuck to the wall of a spinning rotor", "Normal force from the wall"],
              ],
              explain: "Centripetal force is a role, not a new force. In each case find the real force that points towards the centre.",
            },
          },
          {
            type: "text",
            md: t`**The leaning cyclist** (ISC and JEE also ask this). A cyclist taking a turn leans inward by angle $\theta$ from the vertical so that the resultant of the normal force and friction from the road passes through the centre of mass. Then $\tan\theta = \dfrac{v^2}{rg}$: faster turns or sharper curves need more lean.

**Board note.** ISC Class 11 also covers motion in a vertical circle under this chapter; it is taught with energy methods in the Exam edge lesson of Work, Energy and Power.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`The banked-road derivation is a favourite 5-mark question. Show the force diagram, resolve N and f into vertical and horizontal parts, write both equations, then put $f = \mu_s N$. Finish by setting $\mu_s = 0$ to get $v_0 = \sqrt{rg\tan\theta}$. Convert km/h to m/s (divide by 3.6) before substituting.`,
          },
          {
            type: "keypoints",
            items: [
              t`Uniform circular motion needs a net inward force $mv^2/r = m\omega^2 r$.`,
              "Centripetal force is supplied by a real force: tension, gravity, friction, normal force.",
              t`Level road: $v_{\max} = \sqrt{\mu_s r g}$, independent of mass.`,
              t`Banked road: $v_{\max} = \sqrt{rg(\mu_s + \tan\theta)/(1 - \mu_s\tan\theta)}$; optimum $v_0 = \sqrt{rg\tan\theta}$.`,
              t`Leaning cyclist: $\tan\theta = v^2/(rg)$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Centripetal force", back: t`The net force towards the centre needed for circular motion: $mv^2/r$.` },
          { front: "What supplies centripetal force for a car on a level curve?", back: "Static friction between the tyres and the road." },
          { front: "Maximum speed on a level curve", back: t`$v_{\max} = \sqrt{\mu_s r g}$.` },
          { front: "Optimum speed on a banked road", back: t`$v_0 = \sqrt{rg\tan\theta}$; no friction is needed at this speed.` },
          { front: "Maximum speed on a banked road with friction", back: t`$\sqrt{rg\,\dfrac{\mu_s + \tan\theta}{1 - \mu_s\tan\theta}}$.` },
          { front: "Angle of lean of a cyclist", back: t`$\tan\theta = v^2/(rg)$ from the vertical.` },
          { front: "Does the safe speed on a curve depend on the vehicle's mass?", back: "No. Mass cancels in every one of these formulas." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For a car turning on a level (unbanked) road, the centripetal force is provided by:",
            options: ["static friction between tyres and road", "the weight of the car", "the normal force of the road", "the engine's driving force along the motion"],
            answer: 0,
            explain: "On a level road the weight and normal force are vertical. Only friction from the road acts horizontally towards the centre.",
          },
          {
            kind: "numeric",
            q: "Find the maximum safe speed (m/s) on a level curve of radius 80 m with μs = 0.5. g = 10 m/s².",
            answer: 20,
            unit: "m/s",
            explain: t`$v = \sqrt{0.5 \times 80 \times 10} = \sqrt{400} = 20$ m/s.`,
          },
          {
            kind: "numeric",
            q: "A curve of radius 40 m is to be banked so that cars at 20 m/s need no friction. Find the banking angle in degrees. g = 10 m/s².",
            answer: 45,
            unit: "°",
            explain: t`$\tan\theta = v^2/(rg) = 400/400 = 1$, so $\theta = 45^\circ$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "On a banked road, a car moving at exactly the optimum speed needs no friction to go round the curve.",
            answer: true,
            explain: t`At $v_0 = \sqrt{rg\tan\theta}$ the horizontal component of the normal force alone gives $mv^2/r$.`,
          },
          {
            kind: "mcq",
            q: "If a car's speed on the same curve is doubled, the centripetal force needed becomes:",
            options: ["4 times", "2 times", "half", "unchanged"],
            answer: 0,
            explain: t`$F \propto v^2$, so doubling $v$ makes $F$ four times as large.`,
          },
          {
            kind: "multi",
            q: "Which changes raise the maximum safe speed on a curve? Select all that apply.",
            options: ["Increasing the radius of the curve", "Banking the road", "Using tyres with a higher coefficient of friction", "Using a heavier car"],
            answers: [0, 1, 2],
            explain: t`$v_{\max}$ grows with $r$, $\theta$ and $\mu_s$, but mass cancels out.`,
          },
          {
            kind: "mcq",
            q: "A 0.5 kg ball tied to a 1 m string moves in a circle on a smooth horizontal table at 2 revolutions per second. The tension is about:",
            options: ["79 N", "20 N", "6.3 N", "39 N"],
            answer: 0,
            explain: t`$\omega = 2\pi \times 2 = 4\pi$ rad/s. $T = m\omega^2 r = 0.5 \times 16\pi^2 \times 1 = 8\pi^2 \approx 79$ N. Using 2 rad/s instead of 4π rad/s gives a wrong small answer.`,
            difficulty: 2,
            hint: "Convert revolutions per second to rad/s: ω = 2πf.",
          },
          {
            kind: "fill",
            q: "While taking a turn, a cyclist leans ___ the centre of the curve.",
            answer: ["towards", "toward", "inwards", "inward"],
            explain: t`The lean tilts the road's resultant force to pass through the centre of mass; $\tan\theta = v^2/(rg)$.`,
          },
        ],
      },
      {
        slug: "c11-lom-exam-constraints",
        title: "Exam edge: Constraints, Pulleys and Pseudo Forces",
        summary: "How JEE, NEET and the CETs test Newton's laws: Atwood machines, string constraints, movable pulleys, lifts, pseudo forces and block-on-block friction.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Laws of Motion is a foundation chapter: almost every mechanics problem in JEE Main and Advanced, NEET, KCET and COMEDK starts with a free-body diagram. Direct questions usually come on connected bodies (strings and pulleys), lifts, friction between stacked blocks, and accelerating frames. JEE Advanced combines these with constraint relations and wedges.

Three tools do most of the work: **free-body diagrams**, **constraint relations** (how accelerations of connected bodies are linked) and **pseudo forces** (to work in an accelerating frame).`,
          },
          {
            type: "formula",
            tex: t`a = \frac{(m_1 - m_2)g}{m_1 + m_2} \qquad T = \frac{2m_1 m_2 g}{m_1 + m_2}`,
            caption: "Atwood machine (light string, ideal pulley, m₁ > m₂). Safe only when the pulley is massless and frictionless.",
          },
          {
            type: "example",
            title: "Level 1 (KCET / NEET): Atwood machine",
            problem: t`Masses of 3 kg and 2 kg hang from the ends of a light string over a smooth fixed pulley. Find the acceleration and the tension. $g = 10$ m/s².`,
            steps: [
              t`3 kg block: $30 - T = 3a$. 2 kg block: $T - 20 = 2a$.`,
              t`Add: $10 = 5a$, so $a = 2$ m/s².`,
              t`$T = 20 + 2 \times 2 = 24$ N. Check with the formula: $2 \times 3 \times 2 \times 10/5 = 24$ N. ✓`,
            ],
            answer: "a = 2 m/s² (3 kg moves down), T = 24 N.",
          },
          {
            type: "text",
            md: t`**Constraint relations.** An inextensible string has fixed length. Write the length in terms of the positions of the bodies, then differentiate twice: the accelerations must satisfy the same linear relation. A quick check for ideal strings: the total power of all tensions is zero, $\sum T\,v = 0$ (taking signs along each string segment). For a movable pulley held by two string segments, the pulley moves half as far as the free end of the string.`,
          },
          {
            type: "example",
            title: "Level 2 (JEE Main): a movable pulley",
            problem: t`Block A (1 kg) lies on a smooth table. A light string from A runs over a fixed pulley at the table's edge, down under a light movable pulley, and up to a hook in the ceiling. Block B (4 kg) hangs from the movable pulley. Find the accelerations of A and B and the tension. $g = 10$ m/s².`,
            steps: [
              t`Constraint: if B drops by $y$, both string segments holding the pulley lengthen by $y$, so A moves $2y$. Hence $a_A = 2a_B$.`,
              t`A: $T = 1 \times a_A = 2a_B$.`,
              t`B (two segments pull up): $40 - 2T = 4a_B$, so $40 - 4a_B = 4a_B$ and $a_B = 5$ m/s².`,
              t`$a_A = 10$ m/s² and $T = 10$ N. Check B: $40 - 20 = 20 = 4 \times 5$. ✓`,
            ],
            answer: "a_B = 5 m/s² downward, a_A = 10 m/s² towards the pulley, T = 10 N.",
          },
          {
            type: "mistake",
            wrong: "Bodies joined by a string always have equal accelerations.",
            right: "Only bodies on the two ends of a single string over fixed pulleys have equal-sized accelerations. With movable pulleys, write the string length and differentiate to get the true relation (such as a_A = 2a_B).",
            why: "The simple Atwood case trains the habit of setting all accelerations equal. A movable pulley is held by two segments, so each metre it moves takes up two metres of string.",
          },
          {
            type: "text",
            md: t`**Pseudo forces.** Newton's laws hold only in inertial frames. In a frame with acceleration $\vec a_0$ (a lift, a braking bus), you may still use $\sum \vec F = m\vec a_{\text{rel}}$ if you add a **pseudo force** $-m\vec a_0$ on every body. It has no source body and no third-law partner. Use it in the accelerating frame or not at all; never in both frames. In a lift accelerating up at $a$, apparent weight is $m(g + a)$; going down with acceleration $a$, it is $m(g - a)$; in free fall it is zero.`,
          },
          {
            type: "example",
            title: "Level 2 (JEE Main): pendulum in an accelerating car",
            problem: t`A 0.2 kg bob hangs from the roof of a car accelerating at 5 m/s² on a level road. Find the angle of the string with the vertical and the tension. $g = 10$ m/s².`,
            steps: [
              t`In the car's frame the bob is at rest. Forces: $mg$ down, tension $T$, and pseudo force $ma = 0.2 \times 5 = 1$ N backward.`,
              t`Horizontal: $T\sin\theta = ma$; vertical: $T\cos\theta = mg$. So $\tan\theta = a/g = 0.5$, $\theta \approx 26.6^\circ$, tilted backward.`,
              t`$T = m\sqrt{g^2 + a^2} = 0.2\sqrt{125} \approx 2.24$ N.`,
            ],
            answer: "The string makes about 26.6° with the vertical (bob swings back), and T ≈ 2.24 N.",
          },
          {
            type: "example",
            title: "Level 3 (JEE Advanced): block on a block",
            problem: t`A 1 kg block rests on a 4 kg plank on a smooth floor. $\mu = 0.3$ (take $\mu_s = \mu_k$) between them. A horizontal force $F$ pulls the plank. (a) Find the largest $F$ for which they move together. (b) Find both accelerations when $F = 25$ N. $g = 10$ m/s².`,
            steps: [
              t`Only friction can accelerate the top block, and at most $\mu m g = 3$ N, so its largest acceleration is $3/1 = 3$ m/s².`,
              t`(a) Together: $F_{\max} = (1 + 4) \times 3 = 15$ N.`,
              t`(b) 25 N > 15 N, so they slip. Top block: kinetic friction 3 N forward, $a_1 = 3$ m/s².`,
              t`Plank: $25 - 3 = 4a_2$, so $a_2 = 5.5$ m/s². The top block slides backward relative to the plank at $5.5 - 3 = 2.5$ m/s².`,
            ],
            answer: "(a) F_max = 15 N. (b) a_top = 3 m/s², a_plank = 5.5 m/s²; relative acceleration 2.5 m/s².",
          },
          {
            type: "mistake",
            wrong: "I solved in the ground frame and also added a pseudo force, to be safe.",
            right: "Add a pseudo force only when you write the equations in an accelerating frame. In the ground (inertial) frame use real forces only.",
            why: "The pseudo force exactly accounts for the frame's acceleration. Adding it in the ground frame counts that acceleration twice and gives wrong tensions and angles.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A 60 kg person stands on a weighing scale in a lift that accelerates upward at 2 m/s². The scale reads (g = 10 m/s²):",
                options: ["720 N", "600 N", "480 N", "120 N"],
                answer: 0,
                explain: t`$N - mg = ma$, so $N = 60(10 + 2) = 720$ N.`,
              },
              {
                kind: "mcq",
                q: "In which direction does the pseudo force act on a passenger in a bus that is braking?",
                options: ["Forward, opposite to the bus's acceleration", "Backward, along the bus's acceleration", "Vertically down", "There is no pseudo force in a braking bus"],
                answer: 0,
                explain: t`Braking means the bus's acceleration points backward. The pseudo force $-m\vec a_0$ points forward, which is why passengers lurch forward.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for a pulley-system problem in order.",
              items: [
                "Draw a free-body diagram for each block and each movable pulley",
                "Write the string length and differentiate to get the constraint relation",
                "Write Newton's second law for each body along its motion",
                "Substitute the constraint and solve for accelerations and tensions",
                "Check one answer by substituting into an unused equation",
              ],
              explain: "Free-body diagrams first, then the constraint, then the equations. Without the constraint you have more unknowns than equations.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Atwood: $a = (m_1 - m_2)g/(m_1 + m_2)$, $T = 2m_1m_2g/(m_1 + m_2)$.`,
              "Get constraint relations from the fixed string length; a movable pulley moves half as fast as the free string end.",
              t`Pseudo force $-m\vec a_0$ only in an accelerating frame; lift: apparent weight $m(g \pm a)$.`,
              t`Block on block: they move together while the needed friction stays below $\mu_s N$; find $F_{\max}$ from the block that is driven by friction.`,
            ],
          },
        ],
        flashcards: [
          { front: "Atwood machine acceleration", back: t`$a = \dfrac{(m_1 - m_2)g}{m_1 + m_2}$.` },
          { front: "Atwood machine tension", back: t`$T = \dfrac{2m_1m_2 g}{m_1 + m_2}$.` },
          { front: "Movable pulley held by two string segments", back: "It moves (and accelerates) half as much as the free end of the string." },
          { front: "Pseudo force", back: t`$-m\vec a_0$ on every body, used only in a frame with acceleration $\vec a_0$. It has no reaction.` },
          { front: "Apparent weight in a lift", back: t`Accelerating up: $m(g + a)$; accelerating down: $m(g - a)$; free fall: 0.` },
          { front: "Pendulum in a car accelerating at a", back: t`String tilts back at $\tan\theta = a/g$; $T = m\sqrt{g^2 + a^2}$.` },
          { front: "Block on a plank: largest force on the plank without slipping", back: t`$F_{\max} = (M + m)\mu_s g$, since the top block can get at most $\mu_s g$ of acceleration.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Masses of 5 kg and 3 kg hang over a smooth light pulley. Find the acceleration (m/s²). g = 10 m/s².",
            answer: 2.5,
            unit: "m/s²",
            explain: t`$a = (5 - 3) \times 10/8 = 2.5$ m/s².`,
            difficulty: 1,
          },
          {
            kind: "numeric",
            q: "For the same 5 kg – 3 kg Atwood machine, find the string tension (N). g = 10 m/s².",
            answer: 37.5,
            unit: "N",
            explain: t`$T = 2 \times 5 \times 3 \times 10/8 = 37.5$ N. Check: $30 + 3 \times 2.5 = 37.5$ N.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A 50 kg student in a lift that is accelerating downward at 2 m/s² stands on a scale. The reading is (g = 10 m/s²):",
            options: ["400 N", "500 N", "600 N", "0 N"],
            answer: 0,
            explain: t`$mg - N = ma$, so $N = 50(10 - 2) = 400$ N.`,
            difficulty: 1,
          },
          {
            kind: "mcq",
            q: "A pendulum hangs in a train accelerating forward at a. In equilibrium relative to the train, the string:",
            options: ["tilts backward with tan θ = a/g", "tilts forward with tan θ = g/a", "tilts backward with sin θ = a/g", "stays vertical"],
            answer: 0,
            explain: t`In the train frame, a pseudo force $ma$ acts backward; balancing gives $\tan\theta = a/g$ with the bob behind the suspension point.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 2 kg block lies on a 3 kg plank on a smooth floor; μs = 0.4 between them. What is the largest horizontal force (N) on the plank for which the two move together? g = 10 m/s².",
            answer: 20,
            unit: "N",
            explain: t`Top block: max acceleration $\mu_s g = 4$ m/s². Together: $F = 5 \times 4 = 20$ N.`,
            difficulty: 3,
            hint: "Find the most acceleration friction can give the top block.",
          },
          {
            kind: "multi",
            q: "Which statements about pseudo forces are correct?",
            options: [
              "They are used only in non-inertial (accelerating) frames",
              t`On a body of mass m in a frame of acceleration $\vec a_0$, the pseudo force is $-m\vec a_0$`,
              "They have no third-law reaction force",
              "They must also be included when solving in the ground frame",
            ],
            answers: [0, 1, 2],
            explain: "Pseudo forces are a bookkeeping device for accelerating frames. They have no source body, so there is no reaction, and they must not appear in the ground frame.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "In the movable-pulley set-up (block A on a smooth table, B hanging from a movable pulley so that a_A = 2a_B), let m_A = 2 kg and m_B = 2 kg. Find a_B (m/s²). g = 10 m/s².",
            answer: 2,
            unit: "m/s²",
            explain: t`$T = m_A a_A = 4a_B$; B: $20 - 2T = 2a_B \Rightarrow 20 - 8a_B = 2a_B \Rightarrow a_B = 2$ m/s² (and $a_A = 4$ m/s², $T = 8$ N).`,
            difficulty: 3,
            hint: "Write T from block A in terms of a_B, then use B's equation with two segments pulling up.",
          },
          {
            kind: "mcq",
            q: "A string tied to the ceiling passes under a light movable pulley that carries a load; its free end is pulled straight up at 4 m/s. The load rises at:",
            options: ["2 m/s", "4 m/s", "8 m/s", "1 m/s"],
            answer: 0,
            explain: "Both segments holding the pulley must shorten equally. Pulling 4 m of string shortens each by 2 m, so the load rises at 2 m/s.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-lom-exam-friction-circular",
        title: "Exam edge: Friction and Circular Motion Problems",
        summary: "Exam-level friction on inclines, the least force to drag a block, rotating drums, the conical pendulum and the speed range on a banked road.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Friction and circular dynamics appear in almost every JEE Main paper and regularly in NEET, KCET and COMEDK, often inside a bigger problem. The usual questions: is the block at rest or sliding (and so which friction formula applies), the least force to move a block, the speed range on a banked road, the conical pendulum and the rotor (rotating drum).

First decide whether there is sliding. If there is not, static friction is whatever the other equations demand; only check that it stays below $\mu_s N$.`,
          },
          {
            type: "table",
            headers: ["Result", "Formula", "Safe when"],
            rows: [
              ["Angle of repose", t`$\tan\theta_r = \mu_s$`, "block on a fixed incline, no other force"],
              ["Sliding down a rough incline", t`$a = g(\sin\theta - \mu_k\cos\theta)$`, t`block actually sliding down; no extra force changing $N$`],
              ["Least pull to drag a block on a level floor", t`$F_{\min} = \dfrac{\mu mg}{\sqrt{1 + \mu^2}}$ at $\tan\alpha = \mu$ above the horizontal`, t`same $\mu$ for starting motion, pull at the best angle`],
              ["Banked road speed range", t`$v^2 = rg\,\dfrac{\tan\theta \mp \mu}{1 \pm \mu\tan\theta}$`, "upper signs give v_min, lower signs give v_max"],
              ["Conical pendulum", t`$T_{\text{period}} = 2\pi\sqrt{L\cos\theta/g}$`, "bob moving uniformly in a horizontal circle"],
              ["Rotor (drum)", t`$\omega_{\min} = \sqrt{g/(\mu r)}$`, "person pressed against the inside wall of a vertical drum"],
            ],
          },
          {
            type: "example",
            title: "Level 1 (KCET / COMEDK): sliding down a rough incline",
            problem: t`A block slides down an incline of 30° with $\mu_k = 0.2$. Find its acceleration. $g = 10$ m/s².`,
            steps: [
              t`$\tan 30^\circ = 0.577 > 0.2$, so sliding is consistent.`,
              t`$a = 10(\sin 30^\circ - 0.2\cos 30^\circ) = 10(0.5 - 0.2 \times 0.866)$.`,
              t`$a = 10(0.5 - 0.173) = 3.27$ m/s².`,
            ],
            answer: "a ≈ 3.27 m/s² down the incline.",
          },
          {
            type: "example",
            title: "Level 2 (JEE Main): least force to drag a block",
            problem: t`A 10 kg block lies on a floor with $\mu = 0.75$. A rope pulls it at angle $\alpha$ above the horizontal. Find the least force that just starts it moving, and the best angle. $g = 10$ m/s².`,
            steps: [
              t`Vertical: $N = mg - F\sin\alpha$. Horizontal, at the limit: $F\cos\alpha = \mu N = \mu(mg - F\sin\alpha)$.`,
              t`So $F = \dfrac{\mu mg}{\cos\alpha + \mu\sin\alpha}$. The denominator is largest, $\sqrt{1 + \mu^2}$, when $\tan\alpha = \mu$.`,
              t`$\sqrt{1 + 0.75^2} = \sqrt{1.5625} = 1.25$, so $F_{\min} = \dfrac{0.75 \times 100}{1.25} = 60$ N.`,
              t`$\tan\alpha = 0.75$, so $\alpha \approx 37^\circ$.`,
            ],
            answer: "F_min = 60 N at about 37° above the horizontal (a horizontal pull would need 75 N).",
          },
          {
            type: "example",
            title: "Level 2 (JEE Main / NEET): conical pendulum",
            problem: t`A bob on a 1 m string moves in a horizontal circle with the string at 60° to the vertical. Find its angular speed and period. $g = 10$ m/s².`,
            steps: [
              t`Vertical: $T\cos\theta = mg$. Horizontal: $T\sin\theta = m\omega^2 (L\sin\theta)$, so $T = m\omega^2 L$.`,
              t`Dividing: $\omega^2 = \dfrac{g}{L\cos\theta} = \dfrac{10}{1 \times 0.5} = 20$, so $\omega \approx 4.47$ rad/s.`,
              t`Period $= 2\pi/\omega = 2\pi\sqrt{0.05} \approx 1.40$ s.`,
            ],
            answer: "ω ≈ 4.47 rad/s and period ≈ 1.40 s.",
          },
          {
            type: "example",
            title: "Level 3 (JEE Advanced): speed range on a banked road",
            problem: t`A curve of radius 100 m is banked at 45°, with $\mu_s = 0.5$. Find the range of speeds at which a car can take the curve without slipping. $g = 10$ m/s².`,
            steps: [
              t`Too slow, the car tends to slide down, so friction acts up the slope: $v_{\min}^2 = rg\,\dfrac{\tan\theta - \mu}{1 + \mu\tan\theta} = 1000 \times \dfrac{0.5}{1.5}$.`,
              t`$v_{\min} = \sqrt{333.3} \approx 18.3$ m/s.`,
              t`Too fast, friction acts down the slope: $v_{\max}^2 = 1000 \times \dfrac{1 + 0.5}{1 - 0.5} = 3000$, so $v_{\max} \approx 54.8$ m/s.`,
              t`Between them, at $v_0 = \sqrt{1000 \times 1} \approx 31.6$ m/s, no friction is needed.`,
            ],
            answer: "18.3 m/s ≤ v ≤ 54.8 m/s (about 66 km/h to 197 km/h).",
          },
          {
            type: "mistake",
            wrong: "Friction on a block resting on an incline is always μs mg cos θ.",
            right: "A block at rest feels static friction exactly equal to what balance needs (mg sin θ on a plain incline). μs N is only the upper limit.",
            why: "Students memorise f = μN and plug it in everywhere. It is true only at the point of slipping or once sliding (with μk).",
          },
          {
            type: "mistake",
            wrong: "When I pull a block with a rope at an angle, the normal force is still mg.",
            right: "The upward component of the pull reduces the normal force: N = mg − F sin α. A downward push at an angle increases it: N = mg + F sin α.",
            why: "Most textbook blocks have N = mg, so the habit sticks. Always write the perpendicular equation first, then find friction from that N.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "On a banked road with friction, a car going faster than the optimum speed v₀ feels friction acting:",
                options: ["down the slope", "up the slope", "along the direction of motion", "nowhere; friction is zero"],
                answer: 0,
                explain: "Above v₀ the car tends to slide outward (up the slope), so friction acts down the slope to give extra inward force.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A 2 kg block rests on a 30° incline, μs = 0.7. Friction on it?",
              options: ["10 N up the slope", "12.1 N up the slope", "17.3 N down the slope", "0 N"],
              answer: 0,
              trap: 1,
              explain: t`It stays at rest because $\tan 30^\circ = 0.577 < 0.7$. Static friction balances $mg\sin 30^\circ = 2 \times 10 \times 0.5 = 10$ N. The value 12.1 N is $\mu_s mg\cos 30^\circ$, the limit, which is not reached.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam strategy",
            md: t`Before writing $f = \mu N$, ask two questions: is there sliding, and what is $N$ here? In multi-body friction problems, assume the bodies move together, find the friction this needs, and compare it with $\mu_s N$. If the needed value is larger, redo the problem with kinetic friction and different accelerations. This one check removes most wrong options in JEE Main and KCET questions.`,
          },
          {
            type: "keypoints",
            items: [
              "Decide first: sliding or not. Use μN only at the limit or while sliding.",
              t`Least pull on a level floor: $\mu mg/\sqrt{1 + \mu^2}$ at $\tan\alpha = \mu$.`,
              t`Banked road: speeds between $v_{\min}$ (friction up the slope) and $v_{\max}$ (friction down the slope) are safe.`,
              t`Conical pendulum: $\omega^2 = g/(L\cos\theta)$; rotor: $\omega_{\min} = \sqrt{g/(\mu r)}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Least force to drag a block on a level floor", back: t`$F_{\min} = \mu mg/\sqrt{1 + \mu^2}$, pulling at $\tan\alpha = \mu$ above the horizontal.` },
          { front: "Minimum speed on a banked road", back: t`$v_{\min} = \sqrt{rg\,(\tan\theta - \mu)/(1 + \mu\tan\theta)}$; zero if $\mu \ge \tan\theta$.` },
          { front: "Conical pendulum period", back: t`$2\pi\sqrt{L\cos\theta/g}$.` },
          { front: "Rotor: least angular speed", back: t`Friction $\mu N = mg$ with $N = m\omega^2 r$, so $\omega_{\min} = \sqrt{g/(\mu r)}$.` },
          { front: "Static friction on a block at rest on an incline", back: t`$mg\sin\theta$ up the slope (not $\mu_s mg\cos\theta$).` },
          { front: "Block pressed against a wall by horizontal force F", back: t`It stays up if $\mu_s F \ge mg$, so $F_{\min} = mg/\mu_s$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A rotor of radius 2.5 m spins about a vertical axis; μs = 0.4 between rider and wall. Find the least angular speed (rad/s) for the rider to stay up when the floor drops. g = 10 m/s².",
            answer: 3.16,
            tolerance: 0.05,
            unit: "rad/s",
            explain: t`$\omega = \sqrt{g/(\mu r)} = \sqrt{10/(0.4 \times 2.5)} = \sqrt{10} \approx 3.16$ rad/s.`,
            difficulty: 2,
            hint: "Friction balances weight; the normal force from the wall supplies mω²r.",
          },
          {
            kind: "mcq",
            q: "A 2 kg block is at rest on a 30° incline with μs = 0.7. The friction force on it is (g = 10 m/s²):",
            options: ["10 N", "12.1 N", "17.3 N", "14 N"],
            answer: 0,
            explain: t`At rest, static friction equals $mg\sin 30^\circ = 10$ N. $\mu_s mg\cos 30^\circ = 12.1$ N is only the limit.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A 5 kg block lies on a floor with μ = 1/√3. Find the least pull (N), at the best angle, that just starts it moving. g = 10 m/s².",
            answer: 25,
            tolerance: 0.1,
            unit: "N",
            explain: t`$F_{\min} = \dfrac{\mu mg}{\sqrt{1 + \mu^2}} = \dfrac{50/\sqrt 3}{2/\sqrt 3} = 25$ N, at $\alpha = 30^\circ$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A car takes a banked curve that has friction. Which statements are correct?",
            options: [
              "Below v_min the car tends to slide down the slope",
              "At the optimum speed v₀ friction is zero",
              "Above v₀ friction acts down the slope",
              "Friction always acts up the slope on a banked road",
            ],
            answers: [0, 1, 2],
            explain: "The direction of friction depends on speed: up the slope below v₀, zero at v₀, down the slope above v₀.",
            difficulty: 3,
          },
          {
            kind: "numeric",
            q: "A conical pendulum has a 2 m string at 60° to the vertical. Find its period (s). g = 10 m/s².",
            answer: 1.99,
            tolerance: 0.03,
            unit: "s",
            explain: t`$T = 2\pi\sqrt{L\cos\theta/g} = 2\pi\sqrt{2 \times 0.5/10} = 2\pi\sqrt{0.1} \approx 1.99$ s.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The maximum safe speed on a level curve of radius 20 m with μs = 0.5 is (g = 10 m/s²):",
            options: ["10 m/s", "100 m/s", "14.1 m/s", "5 m/s"],
            answer: 0,
            explain: t`$v = \sqrt{0.5 \times 20 \times 10} = \sqrt{100} = 10$ m/s. 100 is $v^2$, not $v$.`,
            difficulty: 1,
          },
          {
            kind: "numeric",
            q: "A horizontal force F presses a 2 kg block against a vertical wall, μs = 0.5. Find the least F (N) that stops it from sliding down. g = 10 m/s².",
            answer: 40,
            unit: "N",
            explain: t`$N = F$ and friction must hold the weight: $\mu_s F \ge 20$, so $F \ge 40$ N.`,
            difficulty: 3,
            hint: "Here the normal force is F, not mg.",
          },
          {
            kind: "mcq",
            q: "On an incline of 45° with μ = 0.5, what is the ratio of the force along the slope needed to just push a block up to the force needed to just stop it sliding down?",
            options: ["3", "2", "1.5", "√3"],
            answer: 0,
            explain: t`Up: $mg(\sin\theta + \mu\cos\theta) = mg \times 0.707 \times 1.5$. Hold: $mg(\sin\theta - \mu\cos\theta) = mg \times 0.707 \times 0.5$. Ratio $= 1.5/0.5 = 3$.`,
            difficulty: 3,
            hint: "Friction acts down the slope in one case and up the slope in the other.",
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Laws of Motion": "c11-laws-of-motion",
};
