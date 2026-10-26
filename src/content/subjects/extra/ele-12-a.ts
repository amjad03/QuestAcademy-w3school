import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "electronics";
/** Syllabus family: chapter titles below are matched against `ele` rows in src/content/syllabus/. */
export const family = "ele";

/* ------------------------------------------------------------------ */
/* 12: Transistor Amplifiers                                           */
/* ------------------------------------------------------------------ */
const amplifiers: Topic = {
  slug: "c12-ele-transistor-amplifiers",
  title: "Transistor Amplifiers",
  icon: "🔊",
  description: "The CE amplifier, DC and AC load lines, h-parameter gain formulas, decibels, multistage (RC-coupled) amplifiers, frequency response and power amplifier classes.",
  lessons: [
    {
      slug: "c12-ele-ce-amplifier",
      title: "The CE Amplifier: Working, Load Lines and Gain",
      summary: "How a voltage-divider biased CE amplifier boosts a small signal, why the output is 180° out of phase, how to draw DC and AC load lines, and how to find voltage, current and power gain.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🎤",
          caption: "At a Dasara procession in Mysuru, a microphone gives a few millivolts. The amplifier in the PA system turns that into volts that can drive a speaker.",
        },
        {
          type: "text",
          md: "An **amplifier** is a circuit that increases the amplitude of a signal without changing its shape. The extra energy comes from the DC supply, not from the signal. A transistor can amplify only when it is biased in the **active region**: emitter–base junction forward biased, collector–base junction reverse biased.",
        },
        {
          type: "text",
          md: "The **common emitter (CE) amplifier** is the most used single-stage amplifier because it gives both voltage gain and current gain, and so the largest power gain of the three configurations. Here is the circuit, described in words (an n-p-n transistor with voltage divider bias):",
        },
        {
          type: "table",
          headers: ["Component", "Where it is connected", "What it does"],
          rows: [
            ["R₁ and R₂", "a potential divider from +V_CC to ground; the middle point goes to the base", "fix the DC base voltage, so the Q-point is stable"],
            ["R_C", "between +V_CC and the collector", "the collector load; the output voltage is developed across it"],
            ["R_E", "between the emitter and ground", "stabilises the Q-point against temperature changes (negative feedback for DC)"],
            ["C_E (emitter bypass capacitor)", "in parallel with R_E", "short-circuits R_E for AC, so the AC gain is not reduced"],
            ["C_in (input coupling capacitor)", "between the signal source and the base", "passes AC, blocks DC so the source does not disturb the bias"],
            ["C_out (output coupling capacitor)", "between the collector and the load R_L", "passes the amplified AC to the load, blocks the collector DC"],
          ],
        },
        {
          type: "text",
          md: t`**Working.** During the positive half of the input, the forward bias of the base increases, so $I_B$ rises and $I_C = \beta I_B$ rises a lot. The drop $I_C R_C$ increases, so $V_{CE} = V_{CC} - I_C R_C$ **falls**. During the negative half the opposite happens. A small change in base current gives a large change in collector voltage, so the signal is amplified, and the output is **180° out of phase** with the input (phase reversal).`,
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the chain of events in order for a positive input swing.",
            items: [
              "Input voltage rises",
              "Base current increases",
              "Collector current increases (β times)",
              "Voltage drop across R_C increases",
              "Output V_CE falls",
            ],
            explain: "Because V_CE = V_CC − I_C R_C, a rise in collector current makes the output fall. That is why a CE amplifier inverts the signal (180° phase shift).",
          },
        },
        {
          type: "heading",
          text: "DC load line and Q-point",
        },
        {
          type: "formula",
          tex: t`V_{CE} = V_{CC} - I_C R_C \qquad\Rightarrow\qquad I_C(\text{sat}) = \frac{V_{CC}}{R_C},\quad V_{CE}(\text{cut-off}) = V_{CC}`,
          caption: "The DC load line joins the two end points on the output characteristics. The operating point (Q-point) is where it meets the curve for the chosen I_B. (If R_E is present, use R_C + R_E in place of R_C.)",
        },
        {
          type: "example",
          title: "DC and AC load lines",
          problem: "A CE amplifier has V_CC = 12 V and R_C = 2 kΩ (R_E is bypassed and its DC drop is ignored). It is biased at I_C = 3 mA. A load R_L = 2 kΩ is connected through C_out. Find the end points of the DC load line, the Q-point, and the end points of the AC load line.",
          steps: [
            t`DC load line: $I_C(\text{sat}) = V_{CC}/R_C = 12/2\text{ k}\Omega = 6$ mA; $V_{CE}(\text{cut-off}) = 12$ V.`,
            t`Q-point: $V_{CEQ} = 12 - (3\text{ mA})(2\text{ k}\Omega) = 6$ V. So Q = (6 V, 3 mA), the middle of the load line.`,
            t`For AC, $C_{out}$ is a short, so the collector sees $R_{ac} = R_C \parallel R_L = \frac{2 \times 2}{2 + 2} = 1$ kΩ.`,
            t`AC load line passes through Q with slope $-1/R_{ac}$: $V_{CE}(\max) = V_{CEQ} + I_{CQ}R_{ac} = 6 + 3 = 9$ V and $I_C(\max) = I_{CQ} + V_{CEQ}/R_{ac} = 3 + 6 = 9$ mA.`,
          ],
          answer: "DC load line: (12 V, 0) to (0, 6 mA). Q = (6 V, 3 mA). AC load line: (9 V, 0) to (0, 9 mA); it is steeper than the DC load line.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "V_CC = 15 V and R_C = 3 kΩ. What is the saturation current I_C(sat) on the DC load line, in mA?",
              answer: 5,
              unit: "mA",
              explain: "I_C(sat) = V_CC/R_C = 15 V / 3 kΩ = 5 mA.",
            },
          ],
        },
        {
          type: "heading",
          text: "Gain using h-parameters",
        },
        {
          type: "formula",
          tex: t`A_i \approx h_{fe},\qquad R_i \approx h_{ie},\qquad A_v = -\frac{h_{fe}\,R_{ac}}{h_{ie}},\qquad A_p = |A_v| \times A_i`,
          caption: "Approximate CE formulas (h_oe and h_re neglected). R_ac = R_C ∥ R_L. The minus sign shows the 180° phase reversal. Gain in decibels: G_v = 20 log₁₀|A_v| dB, G_p = 10 log₁₀ A_p dB.",
        },
        {
          type: "example",
          title: "Voltage, current and power gain",
          problem: "A CE amplifier uses a transistor with h_fe = 100 and h_ie = 1.5 kΩ. R_C = 3 kΩ and the load R_L = 6 kΩ. Find A_v, A_p and the voltage gain in dB.",
          steps: [
            t`$R_{ac} = R_C \parallel R_L = \frac{3 \times 6}{3 + 6} = 2$ kΩ.`,
            t`$A_v = -\frac{h_{fe}R_{ac}}{h_{ie}} = -\frac{100 \times 2}{1.5} = -133.3$.`,
            t`$A_i \approx h_{fe} = 100$, so $A_p = 133.3 \times 100 \approx 1.33 \times 10^4$.`,
            t`$G_v = 20\log_{10}(133.3) \approx 42.5$ dB.`,
          ],
          answer: "A_v ≈ −133 (output inverted), A_p ≈ 13 300, voltage gain ≈ 42.5 dB.",
        },
        {
          type: "mistake",
          wrong: "The voltage gain is −133, so the amplifier makes the signal smaller (negative gain means loss).",
          right: "The size of the gain is 133. The minus sign only says the output is 180° out of phase with the input.",
          why: "In everyday speech, negative sounds like 'less'. In amplifier formulas the sign carries phase information. A real loss shows up as |A_v| < 1, or a negative value in decibels.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For the 5-mark CE amplifier question, draw the circuit neatly (label R₁, R₂, R_C, R_E, C_E, C_in, C_out), write the role of each component, explain working with input and output waveforms 180° apart, and end with the gain formula. In the practical exam, keep the input small (tens of mV) so the output is not clipped.",
        },
        {
          type: "keypoints",
          items: [
            "A transistor amplifies only in the active region; energy comes from V_CC.",
            "CE amplifier: high voltage and current gain, highest power gain, output 180° out of phase.",
            "DC load line: V_CE = V_CC − I_C R_C; Q-point is best near the middle.",
            "AC load line uses R_ac = R_C ∥ R_L, passes through Q, and is steeper than the DC load line.",
            "A_v = −h_fe R_ac / h_ie, A_i ≈ h_fe, A_p = |A_v| A_i; dB gain = 20 log|A_v|.",
          ],
        },
      ],
      flashcards: [
        { front: "Why is a CE amplifier the most popular?", back: "It gives both current gain and voltage gain, so it has the highest power gain." },
        { front: "Phase relation in a CE amplifier", back: "Output is 180° out of phase with the input (phase reversal)." },
        { front: "Role of the emitter bypass capacitor C_E", back: "It short-circuits R_E for AC, so the AC voltage gain is not reduced, while R_E still stabilises the DC Q-point." },
        { front: "Role of coupling capacitors", back: "Pass the AC signal and block DC, so the bias of one part is not disturbed by the source or load." },
        { front: "DC load line end points", back: "V_CE = V_CC at I_C = 0, and I_C = V_CC / R_C at V_CE = 0." },
        { front: "AC load resistance", back: "R_ac = R_C ∥ R_L (the collector load as seen by the signal)." },
        { front: "Voltage gain in decibels", back: "G = 20 log₁₀ |A_v| dB. Power gain in dB = 10 log₁₀ A_p." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In a CE amplifier, the phase difference between input and output voltage is:",
          options: ["0°", "90°", "180°", "360°"],
          answer: 2,
          explain: "As the input rises, I_C rises and V_CE = V_CC − I_C R_C falls, so output is inverted: 180°.",
        },
        {
          kind: "mcq",
          q: "If the emitter bypass capacitor C_E is removed, the voltage gain of a CE amplifier:",
          options: ["increases", "decreases", "stays the same", "becomes infinite"],
          answer: 1,
          explain: "Without C_E, R_E is present for AC as well. This gives negative feedback and the gain falls.",
        },
        {
          kind: "numeric",
          q: "A CE amplifier has h_fe = 120, h_ie = 2 kΩ and R_ac = 2.5 kΩ. What is the magnitude of the voltage gain?",
          answer: 150,
          explain: "|A_v| = h_fe R_ac / h_ie = 120 × 2.5 / 2 = 150.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "An amplifier has a voltage gain of 1000. What is its gain in dB?",
          answer: 60,
          unit: "dB",
          explain: "20 log₁₀ 1000 = 20 × 3 = 60 dB.",
        },
        {
          kind: "truefalse",
          q: "The AC load line of a CE amplifier with a load R_L is steeper than its DC load line.",
          answer: true,
          explain: "Its slope is −1/R_ac and R_ac = R_C ∥ R_L is smaller than R_C, so the AC load line is steeper.",
        },
        {
          kind: "fill",
          q: "The capacitor that connects the signal source to the base and blocks DC is called the input ___ capacitor.",
          answer: ["coupling"],
          explain: "Coupling capacitors pass AC and block DC.",
        },
        {
          kind: "multi",
          q: "For a transistor to work as an amplifier, which conditions must hold?",
          options: [
            "Emitter–base junction forward biased",
            "Collector–base junction reverse biased",
            "Both junctions forward biased",
            "Q-point in the active region",
          ],
          answers: [0, 1, 3],
          explain: "Both junctions forward biased is saturation (switch ON), not amplification.",
        },
      ],
    },
    {
      slug: "c12-ele-multistage-power-amplifiers",
      title: "Multistage Amplifiers, Frequency Response and Power Amplifiers",
      summary: "Cascading stages, the RC-coupled amplifier and its frequency response, bandwidth and half-power points, and the classes of power amplifier with their efficiencies.",
      minutes: 22,
      xp: 50,
      blocks: [
        {
          type: "text",
          md: "One CE stage may give a gain of about 100. A radio receiver may need a gain of a million. So stages are **cascaded**: the output of one stage drives the input of the next. This is a **multistage amplifier**.",
        },
        {
          type: "formula",
          tex: t`A = A_1 \times A_2 \times A_3 \cdots \qquad G_{dB} = G_1 + G_2 + G_3 + \cdots`,
          caption: "Overall gain is the product of the stage gains (taking loading into account); in decibels the stage gains simply add.",
        },
        {
          type: "table",
          headers: ["Coupling", "How stages are joined", "Good points", "Limits / use"],
          rows: [
            ["RC coupling", "coupling capacitor from the collector of stage 1 to the base of stage 2, with R_C as load", "cheap, light, flat gain over the audio range", "gain falls at low and high frequencies; used in voltage (audio) amplifiers"],
            ["Transformer coupling", "primary of a transformer in the collector circuit, secondary to the next base", "impedance matching, high efficiency", "bulky, costly, poor frequency response; used in power and tuned amplifiers"],
            ["Direct coupling", "collector of stage 1 wired directly to the base of stage 2", "amplifies very low frequencies and DC", "Q-point drifts with temperature; used in op-amps and DC amplifiers"],
          ],
        },
        {
          type: "text",
          md: "**Two-stage RC-coupled amplifier (in words).** Two identical voltage-divider biased CE stages share one V_CC. The collector of the first transistor is joined to the base of the second through a coupling capacitor C_C. Each stage has its own R₁, R₂, R_C, R_E and C_E. The signal is inverted twice, so the final output is **in phase** with the input (360°).",
        },
        {
          type: "text",
          md: "A graph of gain (usually in dB) against frequency (on a log scale) is the **frequency response**. For an RC-coupled amplifier it has three regions. **Low frequencies:** the reactance of the coupling and bypass capacitors (X_C = 1/2πfC) is large, so gain falls. **Mid frequencies:** capacitor reactances are negligible and gain is constant. **High frequencies:** the internal junction capacitances and stray wiring capacitances short the signal, and β itself falls, so gain falls again.",
        },
        {
          type: "formula",
          tex: t`A(f_1) = A(f_2) = \frac{A_{mid}}{\sqrt{2}} \approx 0.707\,A_{mid} \quad(-3\text{ dB}),\qquad \text{BW} = f_2 - f_1`,
          caption: "f₁ (lower cut-off) and f₂ (upper cut-off) are the half-power points: output power there is half the mid-band value.",
        },
        {
          type: "example",
          title: "Two-stage gain and bandwidth",
          problem: "A two-stage RC-coupled amplifier has stage gains of 50 and 40 (loading already included). Its lower and upper cut-off frequencies are 50 Hz and 20 kHz. Find the overall gain, the gain in dB and the bandwidth.",
          steps: [
            t`Overall gain $A = 50 \times 40 = 2000$.`,
            t`In dB: $20\log_{10}2000 = 66.0$ dB. Check: $20\log 50 + 20\log 40 = 33.98 + 32.04 = 66.0$ dB.`,
            t`$\text{BW} = f_2 - f_1 = 20\,000 - 50 = 19\,950$ Hz $\approx 19.95$ kHz.`,
          ],
          answer: "A = 2000 (66 dB); bandwidth ≈ 19.95 kHz.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "At the upper cut-off frequency f₂, the voltage gain of an amplifier is:",
              options: ["0.5 × A_mid", "0.707 × A_mid", "zero", "2 × A_mid"],
              answer: 1,
              explain: "At a cut-off frequency the gain is A_mid/√2 ≈ 0.707 A_mid, which is 3 dB down. The *power* is half there.",
            },
          ],
        },
        {
          type: "text",
          md: "A **voltage amplifier** handles small signals and aims for high voltage gain. A **power amplifier** is the last stage: it handles large signals and must deliver large power to a low-resistance load such as a speaker, so its key figure is **collector efficiency** η = P_ac (output) / P_dc (drawn from supply) × 100%. Power amplifiers are classified by how much of the input cycle the collector current flows.",
        },
        {
          type: "table",
          headers: ["Class", "Q-point", "Collector current flows for", "Maximum efficiency", "Use"],
          rows: [
            ["A", "middle of the load line", "the full cycle (360°)", "25% (resistive load), 50% (transformer coupled)", "low-distortion small power stages"],
            ["B", "at cut-off", "half cycle (180°); two transistors in push-pull", "78.5%", "audio output stages"],
            ["AB", "just above cut-off", "slightly more than half cycle", "between A and B", "audio output without crossover distortion"],
            ["C", "below cut-off", "less than half cycle", "above 90% (tuned load)", "radio-frequency transmitters (with an LC tank)"],
          ],
        },
        {
          type: "text",
          md: "**Class B push-pull.** Two transistors share the load through a centre-tapped transformer (or as a complementary n-p-n/p-n-p pair). One conducts in the positive half, the other in the negative half. Because a transistor needs about 0.7 V before it conducts, there is a small dead zone near zero: **crossover distortion**. Giving both a small forward bias (class AB) removes it.",
        },
        {
          type: "example",
          title: "Efficiency of class A and class B stages",
          problem: "(a) A series-fed class A amplifier runs from 20 V with I_CQ = 0.5 A and delivers 2 W of AC power. Find its efficiency. (b) A class B push-pull stage on V_CC = 12 V gives an output of peak 8 V. Find its efficiency using η = (π/4)(V_p/V_CC).",
          steps: [
            t`(a) $P_{dc} = V_{CC} I_{CQ} = 20 \times 0.5 = 10$ W.`,
            t`(a) $\eta = \frac{P_{ac}}{P_{dc}} \times 100 = \frac{2}{10} \times 100 = 20\%$ (below the 25% limit).`,
            t`(b) $\eta = \frac{\pi}{4}\cdot\frac{8}{12} = 0.785 \times 0.667 \approx 0.524$, i.e. 52.4%.`,
            t`(b) If $V_p$ reached $V_{CC}$, $\eta = \pi/4 = 78.5\%$, the class B maximum.`,
          ],
          answer: "(a) 20%; (b) about 52.4%.",
        },
        {
          type: "mistake",
          wrong: "Class C is the most efficient, so it is the best choice for a music amplifier.",
          right: "Class C distorts the waveform badly; it is used only with a tuned LC load at radio frequencies. Audio uses class A, B or AB.",
          why: "High efficiency comes from conducting for only a small part of the cycle. The tank circuit restores a sine wave at one frequency, which works for an RF carrier but not for speech or music, which contain many frequencies.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which power amplifier class fits each statement?",
            groups: ["Class A", "Class B", "Class C"],
            items: [
              { text: "Conducts for the full 360° of the cycle", group: 0, hint: "The Q-point is at the centre of the load line." },
              { text: "Maximum efficiency 78.5%", group: 1, hint: "π/4 × 100%." },
              { text: "Needs a tuned LC tank circuit", group: 2, hint: "Used in RF transmitters." },
              { text: "Suffers from crossover distortion", group: 1, hint: "Two transistors hand over near zero." },
              { text: "Lowest distortion, lowest efficiency", group: 0, hint: "Current flows all the time, even with no signal." },
              { text: "Conducts for less than 180°", group: 2, hint: "Biased beyond cut-off." },
            ],
            explain: "The less of the cycle the transistor conducts, the higher the efficiency and the greater the distortion: A (360°) → B (180°) → C (< 180°).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked for the frequency response of an RC-coupled amplifier, draw gain (dB) against log f, mark f₁, f₂, the 0.707 A_mid (−3 dB) line and the bandwidth, and give one reason each for the low-frequency and high-frequency fall. In the lab, plot frequency on semi-log paper.",
        },
        {
          type: "keypoints",
          items: [
            "Cascaded gain: A = A₁A₂…; in dB the stage gains add.",
            "RC coupling for audio voltage amplifiers; transformer coupling for matching; direct coupling for DC.",
            "Gain falls at low f (coupling and bypass capacitors) and high f (junction and stray capacitances, fall in β).",
            "Cut-off: gain = 0.707 A_mid (−3 dB, half power); BW = f₂ − f₁.",
            "Max efficiency: class A 25% / 50%, class B 78.5%, class C above 90%.",
          ],
        },
      ],
      flashcards: [
        { front: "Overall gain of a cascade in dB", back: "The sum of the individual stage gains in dB." },
        { front: "Why does gain fall at low frequency in an RC-coupled amplifier?", back: "Coupling and bypass capacitors have large reactance (X_C = 1/2πfC), so less signal passes and R_E is not fully bypassed." },
        { front: "Why does gain fall at high frequency?", back: "Junction and stray capacitances shunt the signal, and β of the transistor falls." },
        { front: "Half-power frequencies", back: "f₁ and f₂, where gain = 0.707 A_mid (−3 dB) and output power is half the mid-band value." },
        { front: "Bandwidth", back: "BW = f₂ − f₁, the range over which gain stays within 3 dB of the mid-band gain." },
        { front: "Crossover distortion", back: "Distortion near zero crossing in class B push-pull, because each transistor needs about 0.7 V to start conducting. Cured by class AB bias." },
        { front: "Collector efficiency", back: "η = P_ac (output) / P_dc (from supply) × 100%." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "Three stages have gains of 20 dB, 25 dB and 15 dB. What is the overall gain in dB?",
          answer: 60,
          unit: "dB",
          explain: "Decibel gains add: 20 + 25 + 15 = 60 dB (a voltage gain of 1000).",
        },
        {
          kind: "mcq",
          q: "Which coupling can amplify DC signals?",
          options: ["RC coupling", "Transformer coupling", "Direct coupling", "Capacitor coupling"],
          answer: 2,
          explain: "Capacitors and transformers block DC; only direct coupling passes it.",
        },
        {
          kind: "mcq",
          q: "The maximum theoretical efficiency of a class B push-pull amplifier is:",
          options: ["25%", "50%", "78.5%", "100%"],
          answer: 2,
          explain: "η(max) = π/4 = 78.5%.",
        },
        {
          kind: "numeric",
          q: "An amplifier's gain is 3 dB down at 40 Hz and at 18 kHz. What is its bandwidth in kHz? (Give to 2 decimal places.)",
          answer: 17.96,
          tolerance: 0.01,
          unit: "kHz",
          explain: "BW = 18 000 − 40 = 17 960 Hz = 17.96 kHz.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In a two-stage RC-coupled amplifier, the output is in phase with the input.",
          answer: true,
          explain: "Each CE stage gives 180°, so two stages give 360°, which is in phase.",
        },
        {
          kind: "fill",
          q: "A class ___ amplifier conducts for less than half a cycle and is used in RF transmitters.",
          answer: ["C"],
          explain: "Class C is biased beyond cut-off and uses a tuned tank to restore a sine wave.",
        },
        {
          kind: "numeric",
          q: "A class A amplifier draws 12 W from the supply and delivers 3 W to the load. What is its efficiency in %?",
          answer: 25,
          unit: "%",
          explain: "η = 3/12 × 100 = 25%.",
        },
      ],
    },
    {
      slug: "c12-ele-amplifiers-board-practice",
      title: "Board practice: Transistor Amplifiers",
      summary: "Mixed board-style questions on CE amplifiers, load lines, gains in dB, RC-coupled amplifiers and power amplifier classes.",
      minutes: 20,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "This lesson collects the kinds of questions the II PUC Electronics paper asks on amplifiers: 1-mark definitions, 2–3 mark reasons and short derivations, and 5-mark circuit-plus-working or numerical questions. Try each one before you open the steps.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Define amplifier. Why is CE the most widely used configuration? (2 marks)",
            "Explain why the output of a CE amplifier is 180° out of phase with the input. (2 marks)",
            "Draw a two-stage RC-coupled amplifier. Explain its working and frequency response. (5 marks)",
            "Classify power amplifiers by the position of the Q-point. (3 marks)",
            "What is crossover distortion and how is it removed? (2 marks)",
          ],
        },
        {
          type: "example",
          title: "Numerical 1: Q-point",
          problem: "In a CE amplifier V_CC = 9 V, R_C = 1.5 kΩ and I_B = 20 μA. β = 150. Find I_C, V_CE and say whether the transistor is in the active region.",
          steps: [
            t`$I_C = \beta I_B = 150 \times 20\ \mu\text{A} = 3$ mA.`,
            t`$V_{CE} = V_{CC} - I_C R_C = 9 - (3\text{ mA})(1.5\text{ k}\Omega) = 9 - 4.5 = 4.5$ V.`,
            t`$V_{CE}$ is well above about 0.2 V and below $V_{CC}$, so the transistor is in the active region (Q at mid-point).`,
          ],
          answer: "I_C = 3 mA, V_CE = 4.5 V; active region, Q-point at the centre of the load line.",
        },
        {
          type: "example",
          title: "Numerical 2: output voltage from dB gain",
          problem: "An amplifier has a gain of 40 dB. An input of 5 mV is applied. Find the output voltage. If the output power is 2 W, what is the power at the −3 dB frequency?",
          steps: [
            t`$20\log_{10}A_v = 40 \Rightarrow \log_{10}A_v = 2 \Rightarrow A_v = 100$.`,
            t`$V_o = A_v V_i = 100 \times 5\text{ mV} = 0.5$ V.`,
            t`At a −3 dB point the power is half: $2/2 = 1$ W.`,
          ],
          answer: "Output = 0.5 V; power at the cut-off frequency = 1 W.",
        },
        {
          type: "example",
          title: "Numerical 3: h-parameter gains",
          problem: "A CE stage has h_ie = 1 kΩ, h_fe = 80, R_C = 4 kΩ and R_L = 4 kΩ. Find the input resistance, current gain, voltage gain and power gain in dB.",
          steps: [
            t`$R_i \approx h_{ie} = 1$ kΩ and $A_i \approx h_{fe} = 80$.`,
            t`$R_{ac} = 4 \parallel 4 = 2$ kΩ, so $A_v = -\frac{80 \times 2}{1} = -160$.`,
            t`$A_p = 160 \times 80 = 12\,800$; $G_p = 10\log_{10}12\,800 \approx 41.1$ dB.`,
          ],
          answer: "R_i ≈ 1 kΩ, A_i ≈ 80, A_v = −160, power gain ≈ 41.1 dB.",
        },
        {
          type: "example",
          title: "Numerical 4: two-stage amplifier in dB",
          problem: "A two-stage amplifier has a first-stage gain of 30 and an overall gain of 64 dB. Find the gain of the second stage in dB and as a ratio. (Take log 3 = 0.477.)",
          steps: [
            t`Stage 1 in dB: $20\log_{10}30 = 20(1.477) = 29.5$ dB.`,
            t`Stage 2 in dB: $64 - 29.5 = 34.5$ dB.`,
            t`Ratio: $A_2 = 10^{34.5/20} = 10^{1.725} \approx 53$.`,
          ],
          answer: "Second stage ≈ 34.5 dB, a gain of about 53.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "An amplifier has a voltage gain of 26 dB. Roughly what is its voltage gain as a plain number? (Use log 2 ≈ 0.3.)",
              answer: 20,
              tolerance: 0.5,
              explain: "26 dB = 20 dB + 6 dB, i.e. 10 × 2 = 20 (since 20 log 2 ≈ 6 dB).",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "Removing the coupling capacitor between two RC-coupled stages lets the collector DC of stage 1 upset the bias of stage 2.",
              answer: true,
              explain: "The coupling capacitor blocks DC between stages, keeping each Q-point independent.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "At the cut-off frequency the gain becomes half the mid-band gain.",
          right: "At cut-off the voltage gain is 0.707 (1/√2) of the mid-band value; it is the power that becomes half.",
          why: "P ∝ V², so (0.707)² = 0.5. Many students mix the two because the points are called half-power points.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each item to its correct value or role.",
            pairs: [
              ["Class A, resistive load", "25% maximum efficiency"],
              ["Class B push-pull", "78.5% maximum efficiency"],
              ["Emitter bypass capacitor", "prevents fall of AC gain"],
              ["−3 dB point", "gain = 0.707 A_mid"],
              ["Direct coupling", "amplifies DC"],
            ],
            explain: "These pairs are favourite 1-mark questions. Learn the numbers 25%, 50%, 78.5% and 0.707 by heart.",
          },
        },
        {
          type: "table",
          headers: ["Quantity", "Formula"],
          rows: [
            ["DC load line", "V_CE = V_CC − I_C R_C"],
            ["AC load resistance", "R_ac = R_C ∥ R_L"],
            ["Voltage gain (CE)", "A_v = −h_fe R_ac / h_ie"],
            ["Gain in dB", "20 log₁₀|A_v| (voltage), 10 log₁₀ A_p (power)"],
            ["Bandwidth", "BW = f₂ − f₁"],
            ["Efficiency", "η = P_ac / P_dc × 100%"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In numericals, always write the formula first, then substitute with units, then box the answer with its unit. Convert kΩ and mA together: (mA) × (kΩ) gives volts directly, which saves time.",
        },
        {
          type: "keypoints",
          items: [
            "Q-point: I_C = βI_B, V_CE = V_CC − I_C R_C; mid-point gives the largest undistorted swing.",
            "dB to ratio: A_v = 10^(G/20); 6 dB ≈ ×2, 20 dB = ×10.",
            "Half-power points: voltage gain × 0.707, power × 0.5.",
            "Know the efficiency figures and uses of class A, B, AB and C.",
          ],
        },
      ],
      flashcards: [
        { front: "20 dB of voltage gain is a ratio of…", back: "10." },
        { front: "6 dB of voltage gain is about…", back: "2 (since 20 log 2 ≈ 6)." },
        { front: "−3 dB in voltage terms", back: "0.707 of the reference voltage gain." },
        { front: "Unit trick: mA × kΩ", back: "gives volts directly." },
        { front: "Best position for the Q-point in a class A voltage amplifier", back: "Near the middle of the AC load line, for maximum undistorted output swing." },
        { front: "Which class is used in a radio transmitter's final stage?", back: "Class C with a tuned LC tank circuit." },
      ],
      quiz: [
        {
          kind: "numeric",
          q: "V_CC = 10 V, R_C = 2 kΩ, I_C = 2 mA. Find V_CE in volts.",
          answer: 6,
          unit: "V",
          explain: "V_CE = 10 − 2 × 2 = 6 V.",
        },
        {
          kind: "numeric",
          q: "An amplifier has input 10 mV and output 2 V. What is its voltage gain in dB? (Give to the nearest whole number.)",
          answer: 46,
          tolerance: 0.1,
          unit: "dB",
          explain: "A_v = 2/0.01 = 200; 20 log 200 = 20 × 2.301 = 46.0 dB.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Crossover distortion occurs in:",
          options: ["class A amplifiers", "class B push-pull amplifiers", "RC-coupled voltage amplifiers", "emitter followers"],
          answer: 1,
          explain: "It happens where one transistor of the push-pull pair hands over to the other near zero volts.",
        },
        {
          kind: "mcq",
          q: "Transformer coupling is preferred for power amplifiers mainly because it:",
          options: ["is cheap and light", "gives impedance matching", "passes DC", "has the flattest frequency response"],
          answer: 1,
          explain: "Matching the speaker's low impedance to the transistor gives maximum power transfer.",
        },
        {
          kind: "truefalse",
          q: "A class A amplifier draws collector current even when no signal is applied.",
          answer: true,
          explain: "Its Q-point is at the centre, so I_CQ flows all the time. That is why its efficiency is low.",
        },
        {
          kind: "order",
          q: "Arrange the power amplifier classes from lowest to highest maximum efficiency.",
          items: ["Class A", "Class AB", "Class B", "Class C"],
          explain: "A (25–50%) < AB < B (78.5%) < C (above 90%).",
        },
        {
          kind: "multi",
          q: "Which of these reduce the gain of an RC-coupled amplifier at high frequencies?",
          options: ["Junction capacitances of the transistor", "Stray wiring capacitance", "Fall of β with frequency", "Large reactance of coupling capacitors"],
          answers: [0, 1, 2],
          explain: "Large coupling-capacitor reactance matters at low frequencies, not high.",
          difficulty: 2,
        },
      ],
    },
  ],
};

export const topics: Topic[] = [amplifiers];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Transistor Amplifiers": "c12-ele-transistor-amplifiers",
};
