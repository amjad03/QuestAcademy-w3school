import type { Subject } from "@/content/types";

export const psychology: Subject = {
  slug: "psychology",
  title: "Psychology",
  world: "campus",
  icon: "🧠",
  colors: ["#7c3aed", "#ec4899"],
  tagline: "The science of mind and behaviour, and how to use it to learn smarter.",
  description:
    "A university-level introduction to psychological science: how researchers test ideas, how the brain produces behaviour, how we learn and remember (including the evidence behind spaced repetition and retrieval practice), the shortcuts and biases of human thinking, motivation and emotion, and development across the lifespan.",
  levels: ["UG", "PG", "Professional"],
  stages: ["ug", "pg", "lifelong"],
  domain: "Humanities & Social Science",
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "foundations",
      title: "Foundations: Methods & the Brain",
      icon: "🔬",
      description: "How psychology produces trustworthy knowledge, and the biology underneath behaviour.",
      lessons: [
        {
          slug: "research-methods",
          title: "Research Methods",
          summary: "Experiments, correlations, sampling and the replication crisis.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Countries that eat more chocolate win more Nobel prizes per person. A real correlation, published as a light-hearted note in a leading medical journal in 2012. Should you start eating chocolate to boost your brain? Psychology's first lesson is **how to tell a real cause from a coincidence**.",
            },
            {
              type: "table",
              headers: ["Method", "What it does", "Can it show cause?"],
              rows: [
                ["Case study", "In-depth look at one person or group", "No, but generates hypotheses"],
                ["Survey", "Self-reports from many people", "No"],
                ["Naturalistic observation", "Watch behaviour in real settings", "No"],
                ["Correlational study", "Measures how two variables move together", "No"],
                ["Experiment", "Manipulates a variable with random assignment", "**Yes**"],
              ],
            },
            { type: "heading", text: "Anatomy of an experiment" },
            {
              type: "list",
              items: [
                "**Independent variable (IV)**: what the researcher manipulates (e.g. hours of sleep).",
                "**Dependent variable (DV)**: what is measured (e.g. memory test score).",
                "**Random assignment**: every participant has an equal chance of each condition, so groups differ only by chance at the start.",
                "**Control group**: gets no treatment or a placebo, as a baseline.",
                "**Double-blind**: neither participants nor experimenters know who is in which condition, which reduces expectancy effects.",
              ],
            },
            {
              type: "formula",
              tex: "-1 \\le r \\le +1",
              caption: "The correlation coefficient r: sign gives direction, size gives strength. r = 0 means no linear relationship.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A study finds that students who sleep more get better grades. Which conclusion is justified?",
                  options: [
                    "More sleep causes better grades",
                    "Sleep and grades are positively correlated",
                    "Better grades cause more sleep",
                    "Sleep has no effect on grades",
                  ],
                  answer: 1,
                  explain: "Without manipulation and random assignment, only an association can be claimed. A third variable, such as conscientiousness, could drive both.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The replication crisis",
              md: "In 2015 the Open Science Collaboration repeated 100 published psychology studies. Only about 36% of the replications produced statistically significant results, compared with 97% of the originals. The field responded with **pre-registration**, larger samples and open data.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Tech companies run thousands of online **A/B tests** a year. They are true randomised experiments: users are randomly assigned to versions of a page, and differences in behaviour can be attributed to the change.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Random sampling and random assignment are the same thing.\" Random **sampling** (choosing who is in the study) supports generalising to a population. Random **assignment** (allocating participants to conditions) supports causal conclusions. A study can have one without the other.",
            },
            {
              type: "keypoints",
              items: [
                "Correlation does not imply causation; look for third variables and reverse causation.",
                "Only experiments with random assignment support causal claims.",
                "IV = manipulated; DV = measured.",
                "Replication and pre-registration make findings more trustworthy.",
              ],
            },
          ],
          flashcards: [
            { front: "Independent variable", back: "The factor an experimenter manipulates." },
            { front: "Dependent variable", back: "The outcome measured to see the effect of the IV." },
            { front: "Random assignment", back: "Allocating participants to conditions by chance, so groups are equivalent at the start." },
            { front: "Third-variable problem", back: "An unmeasured factor causes both correlated variables." },
            { front: "Double-blind study", back: "Neither participants nor researchers know who receives which condition." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which correlation shows the strongest relationship?",
              options: ["r = +0.45", "r = −0.82", "r = +0.10", "r = 0"],
              answer: 1,
              explain: "Strength depends on distance from zero, not sign. |−0.82| is the largest.",
            },
            {
              kind: "truefalse",
              q: "In a study of whether caffeine improves reaction time, reaction time is the independent variable.",
              answer: false,
              explain: "Caffeine dose is manipulated (IV); reaction time is measured (DV).",
            },
            {
              kind: "fill",
              q: "Allocating participants to conditions by chance is called random ___.",
              answer: ["assignment", "allocation"],
              explain: "Random assignment equalises groups on average, enabling causal inference.",
            },
            {
              kind: "multi",
              q: "Which features strengthen an experiment's causal conclusions? (Select all.)",
              options: ["Random assignment", "A control group", "Double-blind procedure", "Using only volunteers who chose their condition"],
              answers: [0, 1, 2],
              explain: "Letting people choose their condition introduces self-selection bias.",
            },
          ],
        },
        {
          slug: "brain-and-behaviour",
          title: "The Brain & Behaviour",
          summary: "Neurons, neurotransmitters, brain regions and neuroplasticity.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In 1848 a railway foreman named **Phineas Gage** survived an iron rod blasting through his frontal lobe. He could walk and talk, but friends said he was \"no longer Gage\": impulsive and unreliable. His case helped convince scientists that specific brain regions support specific functions, including personality.",
            },
            { type: "illustration", emoji: "🧠⚡🔗", caption: "About 86 billion neurons, each linked to thousands of others." },
            { type: "heading", text: "How neurons communicate" },
            {
              type: "list",
              ordered: true,
              items: [
                "Dendrites receive signals from other neurons.",
                "If input crosses a threshold, the neuron fires an **action potential**, an all-or-none electrical pulse along the axon.",
                "At the axon terminal, **neurotransmitters** are released into the synapse.",
                "They bind to receptors on the next neuron, making it more or less likely to fire.",
              ],
            },
            {
              type: "table",
              headers: ["Neurotransmitter", "Key roles"],
              rows: [
                ["Dopamine", "Reward prediction, motivation, movement"],
                ["Serotonin", "Mood, sleep, appetite"],
                ["Glutamate", "Main excitatory transmitter; learning and memory"],
                ["GABA", "Main inhibitory transmitter; calming activity"],
                ["Acetylcholine", "Muscle action, attention, memory"],
              ],
            },
            {
              type: "table",
              headers: ["Lobe", "Main functions"],
              rows: [
                ["Frontal", "Planning, decision-making, self-control, speech production (Broca's area)"],
                ["Parietal", "Touch, body position, spatial attention"],
                ["Temporal", "Hearing, language comprehension (Wernicke's area), memory"],
                ["Occipital", "Vision"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Neuroplasticity",
              md: "The brain rewires with experience. London taxi drivers who memorised the city's maze of streets were found to have larger posterior hippocampi than control participants, a region involved in spatial memory.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"We only use 10% of our brains.\" Brain imaging shows activity across virtually all regions over a day, and damage to almost any area causes some deficit. The myth is popular, but it has no scientific basis.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Many psychiatric medications target neurotransmitter systems: SSRIs, for example, increase serotonin availability in synapses. Understanding synapses matters for clinicians, pharmacologists and anyone evaluating health claims.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Damage to which lobe would most likely impair vision?",
                  options: ["Frontal", "Parietal", "Temporal", "Occipital"],
                  answer: 3,
                  explain: "The primary visual cortex lies in the occipital lobe at the back of the brain.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Neurons signal electrically within and chemically between cells.",
                "Different neurotransmitters excite or inhibit and serve different functions.",
                "Each lobe specialises, but complex behaviour relies on networks.",
                "The brain is plastic: experience reshapes it throughout life.",
              ],
            },
          ],
          flashcards: [
            { front: "Action potential", back: "An all-or-none electrical impulse travelling down a neuron's axon." },
            { front: "Synapse", back: "The junction between neurons where neurotransmitters carry the signal." },
            { front: "Broca's area", back: "Frontal-lobe region involved in speech production." },
            { front: "Neuroplasticity", back: "The brain's ability to change structure and function with experience." },
            { front: "GABA", back: "The brain's main inhibitory neurotransmitter." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "An action potential becomes stronger when the stimulus is stronger.",
              answer: false,
              explain: "It is all-or-none. Stimulus intensity is coded by firing rate and the number of neurons firing, not by bigger spikes.",
            },
            {
              kind: "mcq",
              q: "Which neurotransmitter is most associated with reward prediction?",
              options: ["GABA", "Dopamine", "Acetylcholine", "Glutamate"],
              answer: 1,
              explain: "Dopamine neurons signal the difference between expected and received rewards.",
            },
            {
              kind: "order",
              q: "Order the steps of neural communication.",
              items: ["Dendrites receive input", "Action potential travels down the axon", "Neurotransmitters released into the synapse", "Receptors on the next neuron bind them"],
              explain: "Input, fire, release, bind.",
            },
            {
              kind: "numeric",
              q: "The adult human brain contains roughly how many billion neurons? (Nearest 10 billion.)",
              answer: 86,
              tolerance: 10,
              unit: "billion",
              explain: "Modern counting methods estimate about 86 billion.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "learning",
      title: "Learning & Conditioning",
      icon: "🔔",
      description: "Classical and operant conditioning, and learning by watching others.",
      lessons: [
        {
          slug: "classical-conditioning",
          title: "Classical Conditioning",
          summary: "Pavlov's dogs, learned associations, and why your phone's buzz grabs you.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Your phone buzzes in someone else's pocket and you reach for yours. You never decided to react to that sound; you **learned** it, through the same process Ivan Pavlov discovered in dogs more than a century ago.",
            },
            { type: "illustration", emoji: "🔔🐕🍖", caption: "Bell + food, repeated: soon the bell alone triggers drooling." },
            {
              type: "table",
              headers: ["Term", "Pavlov's dogs", "Your phone"],
              rows: [
                ["Unconditioned stimulus (US)", "Food", "An interesting message"],
                ["Unconditioned response (UR)", "Salivation to food", "Interest or excitement"],
                ["Conditioned stimulus (CS)", "Bell (once neutral)", "Notification buzz"],
                ["Conditioned response (CR)", "Salivation to the bell", "Urge to check the phone"],
              ],
            },
            {
              type: "list",
              items: [
                "**Acquisition**: the CS is repeatedly paired with the US.",
                "**Extinction**: the CS is presented without the US and the CR weakens.",
                "**Spontaneous recovery**: after a pause, an extinguished CR briefly returns.",
                "**Generalisation**: similar stimuli trigger the CR; **discrimination**: learning to respond only to the specific CS.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Little Albert (1920)",
              md: "John Watson and Rosalie Rayner conditioned an infant to fear a white rat by pairing it with a loud noise. The fear generalised to other furry objects. The study is now a textbook example of an **unethical** experiment and helped shape modern ethics codes.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Clinicians treat phobias with **exposure therapy**, which is built on extinction: gradual, safe exposure to the feared stimulus without the bad outcome weakens the fear response. Advertisers use the opposite trick, pairing products with attractive people and upbeat music.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Extinction erases the original learning.\" Spontaneous recovery and relapse show the association is suppressed by new learning, not deleted. That is why fears can return under stress.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "After food poisoning from prawns, the smell of prawns makes you nauseous. The smell is the…",
                  options: ["Unconditioned stimulus", "Conditioned stimulus", "Unconditioned response", "Conditioned response"],
                  answer: 1,
                  explain: "The once-neutral smell became a conditioned stimulus through pairing with illness (the US).",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Classical conditioning links a neutral stimulus with one that triggers an automatic response.",
                "US → UR is innate; CS → CR is learned.",
                "Extinction suppresses, but does not erase, learning.",
                "Applications: exposure therapy, advertising, taste aversions.",
              ],
            },
          ],
          flashcards: [
            { front: "Unconditioned stimulus", back: "A stimulus that naturally triggers a response without learning (e.g. food)." },
            { front: "Conditioned stimulus", back: "A once-neutral stimulus that triggers a response after pairing with a US." },
            { front: "Extinction", back: "Weakening of a CR when the CS is repeatedly presented without the US." },
            { front: "Spontaneous recovery", back: "Reappearance of an extinguished CR after a rest period." },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "In Pavlov's experiment, salivating to food is an unconditioned response.",
              answer: true,
              explain: "Salivation to food is automatic and unlearned.",
            },
            {
              kind: "mcq",
              q: "A dog conditioned to a 1,000 Hz tone also salivates to a 1,100 Hz tone. This is…",
              options: ["Discrimination", "Extinction", "Generalisation", "Spontaneous recovery"],
              answer: 2,
              explain: "Responding to stimuli similar to the CS is generalisation.",
            },
            {
              kind: "order",
              q: "Order the phases of classical conditioning as they typically occur.",
              items: ["Acquisition", "Extinction", "Rest period", "Spontaneous recovery"],
              explain: "Learning, unlearning, pause, then the CR briefly returns.",
            },
          ],
        },
        {
          slug: "operant-observational",
          title: "Operant & Observational Learning",
          summary: "Reinforcement, punishment, schedules, and learning by watching.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Why is it so hard to stop scrolling? Each pull-to-refresh **might** reveal something rewarding, and you never know which one. B. F. Skinner showed that behaviour is shaped by its consequences, and that unpredictable rewards are the stickiest of all.",
            },
            {
              type: "table",
              headers: ["", "Add a stimulus", "Remove a stimulus"],
              rows: [
                ["**Behaviour increases**", "Positive reinforcement (praise for finishing homework)", "Negative reinforcement (seatbelt alarm stops when you buckle up)"],
                ["**Behaviour decreases**", "Positive punishment (a fine for speeding)", "Negative punishment (losing phone privileges)"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Negative reinforcement is a kind of punishment.\" **Reinforcement** always increases behaviour; **punishment** always decreases it. \"Negative\" just means something is taken away. Removing an annoying alarm when you buckle up makes buckling up **more** likely.",
            },
            { type: "heading", text: "Schedules of reinforcement" },
            {
              type: "table",
              headers: ["Schedule", "Reward given…", "Example", "Pattern"],
              rows: [
                ["Fixed ratio", "After every n responses", "Free coffee after 10 stamps", "High rate, pause after reward"],
                ["Variable ratio", "After an unpredictable number", "Slot machines, social-media likes", "Very high rate, most resistant to extinction"],
                ["Fixed interval", "After a set time", "Monthly salary", "Burst near the deadline"],
                ["Variable interval", "After unpredictable time", "Checking for a reply email", "Steady, moderate rate"],
              ],
            },
            { type: "heading", text: "Observational learning" },
            {
              type: "text",
              md: "In Albert Bandura's **Bobo doll** studies (1961), children who watched an adult hit an inflatable doll were more likely to act aggressively towards it themselves. We learn by watching **models**, especially those who are similar to us, high-status, or rewarded. Bandura identified four steps: **attention, retention, reproduction, motivation**.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Product designers use reinforcement deliberately: streaks, badges and variable rewards drive engagement. Ethical design asks whether those loops serve the user's own goals (like learning a language) or merely maximise screen time.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You take a painkiller and your headache goes away, so you take painkillers more often. This is…",
                  options: ["Positive reinforcement", "Negative reinforcement", "Positive punishment", "Negative punishment"],
                  answer: 1,
                  explain: "An unpleasant stimulus (pain) is removed and the behaviour increases.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Reinforcement increases behaviour; punishment decreases it.",
                "Positive = add a stimulus; negative = remove one.",
                "Variable-ratio schedules produce the most persistent behaviour.",
                "Much learning is observational, guided by models.",
              ],
            },
          ],
          flashcards: [
            { front: "Operant conditioning", back: "Learning in which behaviour is shaped by its consequences." },
            { front: "Negative reinforcement", back: "Removing an unpleasant stimulus to increase a behaviour." },
            { front: "Variable-ratio schedule", back: "Reinforcement after an unpredictable number of responses; highly resistant to extinction." },
            { front: "Shaping", back: "Reinforcing successive approximations of a target behaviour." },
            { front: "Observational learning", back: "Learning by watching others (Bandura): attention, retention, reproduction, motivation." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which schedule do slot machines use?",
              options: ["Fixed ratio", "Variable ratio", "Fixed interval", "Variable interval"],
              answer: 1,
              explain: "Payouts come after an unpredictable number of plays.",
            },
            {
              kind: "truefalse",
              q: "Taking away a teenager's phone for breaking curfew is negative punishment.",
              answer: true,
              explain: "Something pleasant is removed to decrease the behaviour.",
            },
            {
              kind: "order",
              q: "Put Bandura's four steps of observational learning in order.",
              items: ["Attention", "Retention", "Reproduction", "Motivation"],
              explain: "You must notice, remember, be able to perform, and want to perform the behaviour.",
            },
            {
              kind: "fill",
              q: "Reinforcing closer and closer approximations of a target behaviour is called ___.",
              answer: ["shaping"],
              explain: "Skinner used shaping to teach pigeons complex behaviours step by step.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "memory",
      title: "Memory & Learning Science",
      icon: "🗂️",
      description: "How memory works, why we forget, and the evidence for spaced repetition and retrieval practice.",
      lessons: [
        {
          slug: "how-memory-works",
          title: "How Memory Works",
          summary: "Encoding, storage and retrieval; sensory, working and long-term memory.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "You can hum a song you have not heard in ten years, yet forget why you walked into the kitchen ten seconds ago. Memory is not one thing but a set of systems, each with its own capacity and lifespan.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Encoding**: getting information in, by paying attention and making it meaningful.",
                "**Storage**: keeping it over time.",
                "**Retrieval**: getting it back out when needed.",
              ],
            },
            {
              type: "table",
              headers: ["Store", "Capacity", "Duration"],
              rows: [
                ["Sensory memory", "Large", "Under a second (visual) to a few seconds (auditory)"],
                ["Short-term / working memory", "About 4 chunks (Cowan); classically 7 ± 2 (Miller)", "Roughly 15–30 seconds without rehearsal"],
                ["Long-term memory", "Effectively unlimited", "Minutes to a lifetime"],
              ],
            },
            {
              type: "text",
              md: "Alan Baddeley's **working memory** model splits short-term memory into a *phonological loop* (sounds), a *visuospatial sketchpad* (images), an *episodic buffer*, and a *central executive* that directs attention. This is why you can sketch while listening, but struggle to read while someone talks to you.",
            },
            {
              type: "table",
              headers: ["Long-term memory", "Type", "Example"],
              rows: [
                ["Explicit (declarative)", "Episodic", "Your first day at university"],
                ["Explicit (declarative)", "Semantic", "Paris is the capital of France"],
                ["Implicit (non-declarative)", "Procedural", "Riding a bicycle"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Chunking",
              md: "The string 9-1-1-1-9-4-7-2-0-0-1 is hard to hold. As 911 · 1947 · 2001 (three meaningful chunks) it becomes easy. Experts in chess or medicine remember more because they chunk patterns.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Memory works like a video recording.\" Memory is **reconstructive**. Elizabeth Loftus showed that the wording of a question (\"smashed\" vs \"hit\") changed people's estimates of a car's speed, and some later \"remembered\" broken glass that was never there.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Because memory is reconstructive, police forces in many countries now use evidence-based interview protocols and careful line-up procedures to reduce false identifications by eyewitnesses.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Knowing how to type without looking at the keys is an example of…",
                  options: ["Episodic memory", "Semantic memory", "Procedural memory", "Sensory memory"],
                  answer: 2,
                  explain: "Skills performed automatically are implicit, procedural memories.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Memory = encoding, storage, retrieval.",
                "Working memory is small (about 4 chunks) and brief.",
                "Long-term memory includes explicit (episodic, semantic) and implicit (procedural) forms.",
                "Memories are reconstructed each time, so they can be distorted.",
              ],
            },
          ],
          flashcards: [
            { front: "Encoding", back: "Processing information so it can be stored in memory." },
            { front: "Working memory capacity", back: "About 4 chunks (modern estimate); classically 7 ± 2 items." },
            { front: "Episodic memory", back: "Memory for personal events tied to a time and place." },
            { front: "Semantic memory", back: "Memory for facts and general knowledge." },
            { front: "Misinformation effect", back: "Misleading information after an event distorts memory of it (Loftus)." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the three memory processes.",
              items: ["Encoding", "Storage", "Retrieval"],
              explain: "Information must get in, be kept, then be brought back.",
            },
            {
              kind: "mcq",
              q: "Remembering that water boils at 100 °C at sea level is…",
              options: ["Episodic", "Semantic", "Procedural", "Sensory"],
              answer: 1,
              explain: "A general fact not tied to when you learned it.",
            },
            {
              kind: "truefalse",
              q: "Vivid, confident memories are always accurate.",
              answer: false,
              explain: "Confidence and vividness are poor guides to accuracy; even \"flashbulb\" memories distort over time.",
            },
            {
              kind: "numeric",
              q: "According to Cowan's modern estimate, about how many chunks can working memory hold?",
              answer: 4,
              tolerance: 1,
              unit: "chunks",
              explain: "Cowan (2001) argued for roughly 4 ± 1 chunks.",
            },
          ],
        },
        {
          slug: "spaced-repetition-retrieval",
          title: "Spaced Repetition & Retrieval Practice",
          summary: "The forgetting curve, and the two best-evidenced study techniques in learning science.",
          minutes: 22,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Most students study by rereading notes and highlighting, often the night before an exam. It feels productive. Decades of experiments say it is among the **least** effective strategies. This lesson covers what works better, and it is exactly how Quest Academy's flashcards are designed.",
            },
            { type: "heading", text: "The forgetting curve" },
            {
              type: "text",
              md: "In the 1880s Hermann Ebbinghaus memorised lists of nonsense syllables and tested himself at intervals. He found forgetting is steep at first, then levels off. A common simplified model is exponential decay:",
            },
            {
              type: "formula",
              tex: "R(t) = e^{-t/S}",
              caption: "Retention R after time t, where S is memory stability. Each successful review increases S, flattening the curve.",
            },
            { type: "heading", text: "1. Spaced repetition (the spacing effect)" },
            {
              type: "text",
              md: "Spreading study over several sessions beats cramming the same total time into one. Large reviews of the research (for example Cepeda and colleagues, 2006) find the spacing effect across ages, materials and settings. The best gap grows with how long you need to remember: for an exam weeks away, revisiting material after days rather than minutes works well, and expanding the gaps after each successful recall keeps effort efficient.",
            },
            {
              type: "table",
              headers: ["Leitner box", "Review every", "A card moves here when…"],
              rows: [
                ["Box 1", "1 day", "It is new or you got it wrong"],
                ["Box 2", "2 days", "You recalled it from Box 1"],
                ["Box 3", "4 days", "You recalled it from Box 2"],
                ["Box 4", "8 days", "You recalled it from Box 3"],
                ["Box 5", "16 days", "You recalled it from Box 4"],
              ],
            },
            { type: "heading", text: "2. Retrieval practice (the testing effect)" },
            {
              type: "text",
              md: "Pulling information **out** of memory strengthens it more than putting it in again. In a well-known study, Roediger and Karpicke (2006) had students either reread a passage or recall it from memory. Rereaders did slightly better after five minutes, but a week later the retrieval group remembered substantially more.",
            },
            {
              type: "list",
              items: [
                "Close the book and write down everything you remember, then check.",
                "Use flashcards and answer **before** flipping.",
                "Do practice questions and past papers, not just worked examples.",
                "**Interleave** topics: mixing problem types forces you to choose the method, which improves transfer.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A card starts in Box 1 on day 0 and is answered correctly at every review. Gaps are 1, 2, 4 and 8 days. On what day does its review in Box 5 happen?",
                  answer: 15,
                  tolerance: 0,
                  unit: "day",
                  explain: "Reviews fall on days 1, 3 (1+2), 7 (3+4) and 15 (7+8).",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"I learn best in my learning style, so I should only study visually (or by listening).\" Careful reviews (for example Pashler and colleagues, 2008) found little evidence that matching teaching to a preferred \"learning style\" improves outcomes. Spacing and retrieval help virtually everyone.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Medical students worldwide use spaced-repetition software such as Anki to retain thousands of facts, and language apps schedule reviews with algorithms derived from the forgetting curve. Corporate trainers increasingly replace one-off workshops with spaced \"micro-quizzes\".",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Desirable difficulties",
              md: "Robert Bjork's term for techniques that feel harder but produce stronger learning: spacing, retrieval, interleaving. If studying feels effortful, that is often a sign it is working.",
            },
            {
              type: "keypoints",
              items: [
                "Forgetting is fast at first; each successful review slows it.",
                "Spacing beats cramming for long-term retention.",
                "Retrieval practice beats rereading.",
                "Interleaving and other desirable difficulties improve transfer.",
                "Learning-styles matching has weak evidence; use spacing and retrieval instead.",
              ],
            },
          ],
          flashcards: [
            { front: "Spacing effect", back: "Distributing study over time produces better long-term retention than massed study (cramming)." },
            { front: "Testing effect (retrieval practice)", back: "Recalling information strengthens memory more than restudying it." },
            { front: "Forgetting curve", back: "Ebbinghaus's finding that forgetting is rapid at first and then slows." },
            { front: "Interleaving", back: "Mixing different topics or problem types within one study session." },
            { front: "Leitner system", back: "Flashcard boxes reviewed at increasing intervals; wrong cards return to Box 1." },
            { front: "Desirable difficulty", back: "A learning condition that feels harder but improves long-term retention (Bjork)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "In Roediger and Karpicke's 2006 study, which group remembered more after one week?",
              options: ["Those who reread the passage", "Those who practised recalling it", "Both groups equally", "Those who highlighted it"],
              answer: 1,
              explain: "Retrieval practice produced much better delayed retention, even though rereading looked better at five minutes.",
            },
            {
              kind: "truefalse",
              q: "Six one-hour sessions spread over two weeks typically beat one six-hour session the night before, for remembering the material a month later.",
              answer: true,
              explain: "This is the spacing effect: same total time, better long-term retention.",
            },
            {
              kind: "multi",
              q: "Which are forms of retrieval practice? (Select all.)",
              options: ["Answering flashcards before flipping them", "Highlighting key sentences", "Doing a past paper without notes", "Writing a summary from memory"],
              answers: [0, 2, 3],
              explain: "Highlighting is passive restudy; the others force recall.",
            },
            {
              kind: "numeric",
              q: "With $R(t) = e^{-t/S}$ and stability S = 5 days, what fraction of material is retained after 5 days? (Two decimal places.)",
              answer: 0.37,
              tolerance: 0.01,
              explain: "$e^{-1} \\approx 0.368$.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "cognition",
      title: "Thinking, Heuristics & Biases",
      icon: "🤔",
      description: "How we reason and decide, and the systematic ways intuition misleads us.",
      lessons: [
        {
          slug: "heuristics-problem-solving",
          title: "Heuristics & Problem Solving",
          summary: "System 1 and System 2, mental shortcuts, and obstacles to insight.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A bat and a ball cost ₹110 together. The bat costs ₹100 more than the ball. How much is the ball? If ₹10 popped into your head, you are in good company, but it is wrong: the ball costs **₹5** (and the bat ₹105). That quick, confident wrong answer is your intuitive mind at work.",
            },
            {
              type: "table",
              headers: ["", "System 1", "System 2"],
              rows: [
                ["Speed", "Fast, automatic", "Slow, deliberate"],
                ["Effort", "Effortless", "Demanding"],
                ["Example", "Reading a friend's facial expression", "Calculating 17 × 24"],
                ["Risk", "Prone to systematic biases", "Lazy: often accepts System 1's answer"],
              ],
            },
            {
              type: "text",
              md: "Daniel Kahneman popularised this dual-process view. **Heuristics** are System 1 shortcuts. They are usually helpful but produce predictable errors.",
            },
            {
              type: "table",
              headers: ["Heuristic", "How it works", "Where it misleads"],
              rows: [
                ["Availability", "Judge frequency by how easily examples come to mind", "Fearing plane crashes more than car journeys after news coverage"],
                ["Representativeness", "Judge by similarity to a stereotype", "Ignoring base rates (\"quiet and tidy, so probably a librarian\")"],
                ["Anchoring", "Estimates drift toward an initial number", "A high opening price in a negotiation pulls the final deal up"],
              ],
            },
            { type: "heading", text: "Obstacles to problem solving" },
            {
              type: "list",
              items: [
                "**Functional fixedness**: seeing objects only in their usual role (Duncker's candle problem: use the tack box as a shelf).",
                "**Mental set**: sticking with a method that worked before even when a simpler one exists.",
                "**Insight**: sudden restructuring of a problem, often after taking a break (incubation).",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Bat and ball cost ₹110 together; the bat costs ₹100 more than the ball. What does the ball cost (in ₹)?",
                  answer: 5,
                  tolerance: 0,
                  unit: "₹",
                  explain: "Ball = x, bat = x + 100, so 2x + 100 = 110 and x = 5.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Pilots and surgeons use **checklists** precisely because expert intuition, however good, occasionally skips steps. Atul Gawande's work on the WHO Surgical Safety Checklist reported substantial drops in complications in pilot hospitals.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Heuristics are just errors and smart people avoid them.\" Heuristics are efficient and often accurate, which is why we evolved to use them. Experts use them too. The goal is to recognise the situations where they reliably fail.",
            },
            {
              type: "keypoints",
              items: [
                "System 1 is fast and intuitive; System 2 is slow and effortful.",
                "Availability, representativeness and anchoring are core heuristics.",
                "Functional fixedness and mental set block creative solutions.",
                "Checklists and slowing down catch System 1 errors.",
              ],
            },
          ],
          flashcards: [
            { front: "Heuristic", back: "A mental shortcut that simplifies judgement, usually useful but bias-prone." },
            { front: "Availability heuristic", back: "Judging likelihood by how easily examples come to mind." },
            { front: "Anchoring", back: "Over-relying on an initial piece of information when estimating." },
            { front: "Functional fixedness", back: "Seeing objects only in terms of their usual function." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "After seeing several news stories about shark attacks, Riya overestimates the risk of swimming at the beach. This illustrates…",
              options: ["Anchoring", "The availability heuristic", "Functional fixedness", "Mental set"],
              answer: 1,
              explain: "Vivid, recent examples come easily to mind, inflating perceived frequency.",
            },
            {
              kind: "truefalse",
              q: "System 2 thinking is fast and requires little effort.",
              answer: false,
              explain: "That describes System 1. System 2 is slow and effortful.",
            },
            {
              kind: "mcq",
              q: "A shop marks a jacket as \"was ₹9,999, now ₹4,999\". The original price mainly exploits…",
              options: ["Anchoring", "Confirmation bias", "Functional fixedness", "Spontaneous recovery"],
              answer: 0,
              explain: "The high reference price anchors your sense of value, making the sale price feel like a bargain.",
            },
          ],
        },
        {
          slug: "cognitive-biases",
          title: "Cognitive Biases in Decisions",
          summary: "Confirmation bias, framing, loss aversion, sunk costs and base-rate neglect.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A test for a rare disease is \"90% accurate\". You test positive. What is the chance you actually have it? Most people, including many doctors in classic studies, say about 90%. The real answer can be **under 10%**. Welcome to the biases that shape high-stakes decisions.",
            },
            { type: "heading", text: "Base-rate neglect, worked through" },
            {
              type: "table",
              headers: ["Out of 1,000 people", "Test positive", "Test negative"],
              rows: [
                ["Have the disease (1% = 10)", "9 (90% detected)", "1"],
                ["Healthy (990)", "99 (10% false positives)", "891"],
                ["**Total**", "**108**", "892"],
              ],
            },
            {
              type: "formula",
              tex: "P(\\text{disease} \\mid +) = \\frac{9}{9 + 99} \\approx 8.3\\%",
              caption: "Bayes' theorem in natural frequencies: most positives come from the large healthy group.",
            },
            {
              type: "table",
              headers: ["Bias", "What happens", "Everyday example"],
              rows: [
                ["Confirmation bias", "Seeking and favouring evidence that fits what we already believe", "Only reading news that agrees with you"],
                ["Framing effect", "Choices change with wording, not substance", "\"90% survival\" sounds better than \"10% mortality\""],
                ["Loss aversion", "Losses hurt roughly twice as much as equal gains please", "Refusing a fair coin flip: win ₹1,000 or lose ₹1,000"],
                ["Sunk-cost fallacy", "Continuing because of past investment", "Finishing a terrible film because you paid for the ticket"],
                ["Overconfidence", "Being more certain than accuracy justifies", "Project timelines that always overrun (planning fallacy)"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Prospect theory",
              md: "Kahneman and Tversky's **prospect theory** (1979) described how people evaluate gains and losses relative to a reference point, with losses weighted more heavily. It contributed to Kahneman's 2002 Nobel Memorial Prize in Economic Sciences.",
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Governments and firms run **behavioural insights** teams. Switching pension schemes from opt-in to automatic enrolment (with the right to opt out) sharply raised participation in the UK, a nudge that works with inertia rather than against it.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Knowing about biases makes me immune to them.\" Awareness alone helps little; people readily spot biases in others but not themselves (the *bias blind spot*). Better defences are structural: checklists, pre-mortems, outside views and decision rules set in advance.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A manager keeps funding a failing project because \"we've already spent ₹2 crore on it\". This is…",
                  options: ["Loss aversion only", "The sunk-cost fallacy", "Anchoring", "Base-rate neglect"],
                  answer: 1,
                  explain: "Past spending that cannot be recovered should not drive future decisions.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Always ask for the base rate before interpreting a test or a stereotype.",
                "Framing and loss aversion change choices without changing facts.",
                "Sunk costs are irrelevant to future decisions.",
                "Debias with structure, not willpower.",
              ],
            },
          ],
          flashcards: [
            { front: "Confirmation bias", back: "Tendency to seek, interpret and remember information that confirms existing beliefs." },
            { front: "Framing effect", back: "Different but equivalent descriptions of options lead to different choices." },
            { front: "Loss aversion", back: "Losses loom larger than equivalent gains (roughly 2:1)." },
            { front: "Base-rate neglect", back: "Ignoring how common something is when judging probability." },
            { front: "Pre-mortem", back: "Imagining a plan has failed and asking why, to surface risks in advance." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A condition affects 2% of 1,000 people. A test detects all true cases and gives false positives for 5% of healthy people. Of those who test positive, what percentage actually have the condition? (Nearest whole %.)",
              answer: 29,
              tolerance: 1,
              unit: "%",
              explain: "20 true positives; 5% of 980 = 49 false positives. 20 / 69 ≈ 29%.",
            },
            {
              kind: "mcq",
              q: "Describing ground beef as \"80% lean\" rather than \"20% fat\" makes people rate it more favourably. This is…",
              options: ["Anchoring", "The framing effect", "Confirmation bias", "Overconfidence"],
              answer: 1,
              explain: "Identical information, different frame, different judgement.",
            },
            {
              kind: "truefalse",
              q: "Loss aversion predicts that many people will reject a 50/50 bet to win ₹1,000 or lose ₹1,000.",
              answer: true,
              explain: "The potential loss feels larger than the equal potential gain.",
            },
            {
              kind: "multi",
              q: "Which are effective structural defences against biased decisions? (Select all.)",
              options: ["Running a pre-mortem", "Using a checklist", "Simply trying harder to be objective", "Seeking a base rate or outside view"],
              answers: [0, 1, 3],
              explain: "Willpower alone is unreliable; procedures that force a second look work better.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "motivation-development",
      title: "Motivation, Emotion & Development",
      icon: "🌱",
      description: "What drives us, how emotions arise, and how minds change across the lifespan.",
      lessons: [
        {
          slug: "motivation-emotion",
          title: "Motivation & Emotion",
          summary: "Self-determination theory, arousal, and the main theories of emotion.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "In a classic study, preschoolers who loved drawing were promised a certificate for it. Afterwards, during free play, they drew **less** than children who had not been rewarded (Lepper, Greene and Nisbett, 1973). How can a reward reduce motivation?",
            },
            { type: "heading", text: "Intrinsic vs extrinsic motivation" },
            {
              type: "text",
              md: "**Intrinsic** motivation comes from the activity itself (curiosity, enjoyment); **extrinsic** comes from outside (grades, pay, praise). Expected, tangible rewards for an already-enjoyable task can crowd out intrinsic interest: the **overjustification effect**.",
            },
            {
              type: "table",
              headers: ["Self-determination theory need", "Meaning", "How to support it"],
              rows: [
                ["Autonomy", "Feeling in control of your choices", "Offer meaningful choices, explain the why"],
                ["Competence", "Feeling effective and growing", "Optimal challenge, clear feedback"],
                ["Relatedness", "Feeling connected to others", "Teams, mentors, belonging"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Yerkes–Dodson law",
              md: "Performance rises with arousal up to a point, then falls: an inverted U. The optimum is lower for complex tasks (exam problem solving) than for simple ones (a sprint).",
            },
            { type: "heading", text: "Theories of emotion" },
            {
              type: "table",
              headers: ["Theory", "Sequence", "Key idea"],
              rows: [
                ["James–Lange", "Event → bodily arousal → emotion", "We feel afraid because we tremble"],
                ["Cannon–Bard", "Event → arousal and emotion together", "Body and feeling occur simultaneously"],
                ["Schachter–Singer (two-factor)", "Event → arousal + cognitive label → emotion", "The same arousal can be labelled fear or excitement"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Workplaces applying self-determination theory replace rigid micromanagement with clear goals plus autonomy over methods. Many organisations' research on effective teams highlights psychological safety, the confidence to speak up without fear, a close cousin of relatedness.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Maslow proved that needs are met strictly one level at a time.\" Maslow's hierarchy is a useful framework, but research does not support a rigid order. People pursue belonging and meaning even when basic needs are unmet.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Your heart races before a presentation and you tell yourself \"I'm excited\" rather than \"I'm anxious\". Which theory best explains why this might help?",
                  options: ["James–Lange", "Cannon–Bard", "Schachter–Singer two-factor theory", "Drive-reduction theory"],
                  answer: 2,
                  explain: "Two-factor theory says the cognitive label applied to arousal shapes the emotion experienced.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Intrinsic motivation is fragile; controlling rewards can undermine it.",
                "Self-determination theory: autonomy, competence, relatedness.",
                "Moderate arousal is optimal (Yerkes–Dodson), lower for complex tasks.",
                "Emotion theories differ on how arousal and interpretation combine.",
              ],
            },
          ],
          flashcards: [
            { front: "Overjustification effect", back: "Expected external rewards reduce intrinsic motivation for an enjoyable activity." },
            { front: "Self-determination theory", back: "Motivation thrives when needs for autonomy, competence and relatedness are met (Deci & Ryan)." },
            { front: "Yerkes–Dodson law", back: "Performance peaks at moderate arousal; the optimum is lower for complex tasks." },
            { front: "Two-factor theory of emotion", back: "Emotion = physiological arousal + cognitive label (Schachter & Singer)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which is an example of intrinsic motivation?",
              options: ["Studying to win a scholarship", "Coding a game because you find it fun", "Working overtime for a bonus", "Exercising to avoid a doctor's warning"],
              answer: 1,
              explain: "The activity itself is the reward.",
            },
            {
              kind: "truefalse",
              q: "According to the Yerkes–Dodson law, maximum arousal produces the best performance on difficult tasks.",
              answer: false,
              explain: "Very high arousal impairs performance, especially on complex tasks.",
            },
            {
              kind: "multi",
              q: "Which are the three basic needs in self-determination theory? (Select all.)",
              options: ["Autonomy", "Competence", "Wealth", "Relatedness"],
              answers: [0, 1, 3],
              explain: "Deci and Ryan identify autonomy, competence and relatedness.",
            },
          ],
        },
        {
          slug: "lifespan-development",
          title: "Development Across the Lifespan",
          summary: "Piaget, Vygotsky, attachment, and Erikson's psychosocial stages.",
          minutes: 20,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Pour juice from a short, wide glass into a tall, thin one in front of a four-year-old, and they will usually insist there is now **more** juice. A seven-year-old will roll their eyes. Something fundamental about thinking changes in between.",
            },
            {
              type: "table",
              headers: ["Piaget's stage", "Approx. age", "Hallmarks"],
              rows: [
                ["Sensorimotor", "0–2", "Learning through senses and action; object permanence develops"],
                ["Preoperational", "2–7", "Symbolic thought and language; egocentrism; fails conservation"],
                ["Concrete operational", "7–11", "Logical thinking about concrete events; conservation"],
                ["Formal operational", "12+", "Abstract and hypothetical reasoning"],
              ],
            },
            {
              type: "text",
              md: "Lev **Vygotsky** emphasised the social side: children learn most in the **zone of proximal development (ZPD)**, the gap between what they can do alone and what they can do with guidance. Support that is gradually removed is called **scaffolding**.",
            },
            { type: "heading", text: "Attachment" },
            {
              type: "text",
              md: "Mary Ainsworth's **Strange Situation** observed toddlers as a caregiver left and returned. Most were **securely attached**: upset at separation, comforted on reunion. Others showed **insecure-avoidant**, **insecure-resistant (anxious)** or, as later added, **disorganised** patterns. Early attachment is linked, though not deterministically, to later relationships.",
            },
            {
              type: "table",
              headers: ["Erikson stage (selected)", "Life period", "Core challenge"],
              rows: [
                ["Trust vs mistrust", "Infancy", "Can I rely on the world?"],
                ["Identity vs role confusion", "Adolescence", "Who am I?"],
                ["Intimacy vs isolation", "Young adulthood", "Can I form close relationships?"],
                ["Generativity vs stagnation", "Middle adulthood", "Am I contributing to the next generation?"],
                ["Integrity vs despair", "Late adulthood", "Was my life meaningful?"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "In industry",
              md: "Good tutoring and game design both live in the ZPD: challenges just beyond current ability, with hints that fade as skill grows. Adaptive-learning platforms try to keep each learner in that zone automatically.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Common misconception",
              md: "\"Development is fixed by age five.\" Early experiences matter, but the brain stays plastic. Adolescence is a second period of major brain reorganisation, and adults keep learning, changing personality traits modestly, and building new skills throughout life.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A child understands that flattening a ball of clay does not change how much clay there is. Which Piagetian stage has the child most likely reached?",
                  options: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
                  answer: 2,
                  explain: "Conservation is a hallmark of the concrete operational stage (about 7–11).",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Piaget: four stages from sensorimotor to formal operational.",
                "Vygotsky: learning is social; teach within the ZPD with scaffolding.",
                "Attachment styles describe early caregiver bonds.",
                "Erikson: each life stage brings a psychosocial challenge.",
              ],
            },
          ],
          flashcards: [
            { front: "Object permanence", back: "Understanding that objects exist even when out of sight; develops in the sensorimotor stage." },
            { front: "Conservation", back: "Understanding that quantity stays the same despite changes in shape." },
            { front: "Zone of proximal development", back: "The range of tasks a learner can do with guidance but not yet alone (Vygotsky)." },
            { front: "Scaffolding", back: "Temporary support adjusted to the learner and gradually withdrawn." },
            { front: "Secure attachment", back: "Child uses caregiver as a safe base; distressed at separation, comforted on return." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Put Piaget's stages in developmental order.",
              items: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
              explain: "From action-based infancy to abstract adolescent thought.",
            },
            {
              kind: "numeric",
              q: "How many stages are in Piaget's theory of cognitive development?",
              answer: 4,
              tolerance: 0,
              explain: "Sensorimotor, preoperational, concrete operational and formal operational.",
            },
            {
              kind: "mcq",
              q: "According to Erikson, the central challenge of adolescence is…",
              options: ["Trust vs mistrust", "Identity vs role confusion", "Intimacy vs isolation", "Integrity vs despair"],
              answer: 1,
              explain: "Adolescents work out who they are and what they value.",
            },
            {
              kind: "fill",
              q: "Support that a teacher gradually removes as a learner gains skill is called ___.",
              answer: ["scaffolding"],
              explain: "A term associated with Vygotsky-inspired teaching.",
            },
          ],
        },
      ],
    },
  ],
};
