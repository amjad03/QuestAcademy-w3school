import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "electronics";
/** Syllabus family: chapter titles below are matched against `ele` rows in src/content/syllabus/. */
export const family = "ele";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Semiconductor Diodes and Applications                               */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-ele-diodes",
    title: "Semiconductor Diodes and Applications",
    icon: "🔌",
    description: "The PN junction diode and its V-I characteristic, half-wave and full-wave rectifiers, filters, the Zener regulator, LEDs, photodiodes, clippers and clampers.",
    lessons: [
      {
        slug: "c11-ele-pn-diode",
        title: "The PN Junction Diode and Its Characteristic",
        summary: "Forward and reverse bias, the V-I characteristic, knee and breakdown voltage, the diode equation, static and dynamic resistance, and diode models.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚪",
            caption: "A diode is a one-way door for current: it lets current through easily in one direction and almost blocks it in the other.",
          },
          {
            type: "text",
            md: "A **PN junction diode** is a single crystal with a P-type region and an N-type region. The P side is the **anode** and the N side is the **cathode**. In the circuit symbol the arrow points from anode to cathode, which is the direction of conventional current when the diode conducts. On a real diode the cathode end is marked with a band.",
          },
          {
            type: "text",
            md: "At the junction, electrons from the N side and holes from the P side diffuse across and recombine. This leaves a thin **depletion region** of fixed ions with no free carriers. The ions set up a **barrier potential**: about **0.7 V for silicon** and **0.3 V for germanium** at room temperature.",
          },
          {
            type: "table",
            headers: ["", "Forward bias", "Reverse bias"],
            rows: [
              ["Connection", "P to + terminal, N to − terminal", "P to − terminal, N to + terminal"],
              ["Depletion region", "becomes narrower", "becomes wider"],
              ["Barrier", "reduced", "increased"],
              ["Current", "large, due to majority carriers (mA)", "very small reverse saturation current due to minority carriers (nA for Si, µA for Ge)"],
              ["Resistance", "low", "very high"],
            ],
          },
          {
            type: "heading",
            text: "The V-I characteristic",
          },
          {
            type: "text",
            md: "**Forward region.** As the forward voltage rises from zero, the current stays tiny until the voltage approaches the barrier potential. The voltage at which current starts to rise sharply is the **knee voltage** (cut-in voltage) $V_\\gamma$: about 0.7 V for Si, 0.3 V for Ge. Beyond it the current rises steeply for small increases in voltage.\n\n**Reverse region.** The current is a small, nearly constant **reverse saturation current** $I_0$. It depends on temperature, not on the reverse voltage. At the **breakdown voltage** the reverse current rises suddenly. An ordinary diode is damaged if it is driven into breakdown without a resistor to limit the current.",
          },
          {
            type: "formula",
            tex: t`I = I_0\left(e^{V/\eta V_T} - 1\right), \qquad V_T = \frac{kT}{q} \approx 26\ \text{mV at } 300\ \text{K}`,
            caption: t`The diode equation. $\eta \approx 1$ for Ge and $\eta \approx 2$ for Si. For forward bias of a few tenths of a volt, the exponential term dominates; for reverse bias, $I \approx -I_0$.`,
          },
          {
            type: "text",
            md: t`**Static (DC) resistance** at a point is $R = \dfrac{V}{I}$. **Dynamic (AC) resistance** is the inverse slope of the curve: $r_d = \dfrac{\Delta V}{\Delta I}$. In the forward region $r_d$ is only a few ohms and gets smaller as the current rises. From the diode equation, $r_d \approx \dfrac{\eta V_T}{I}$.`,
          },
          {
            type: "example",
            title: "Diode in series with a resistor",
            problem: "A silicon diode is connected in series with a 1 kΩ resistor across a 5 V DC supply, so that it is forward biased. Find the current using the practical model (constant 0.7 V drop). What happens if the supply is reversed?",
            steps: [
              "Practical model: the diode drops 0.7 V when it conducts, so the resistor gets 5 − 0.7 = 4.3 V.",
              t`Current $I = \dfrac{4.3\ \text{V}}{1000\ \Omega} = 4.3$ mA.`,
              t`With the ideal model (0 V drop) we would get $5/1000 = 5$ mA, an error of about 16%. Use the 0.7 V drop unless the question says 'ideal'.`,
              "Reversed: the diode is reverse biased and only the reverse saturation current (nanoamperes) flows, so the current is practically zero and the full 5 V appears across the diode.",
            ],
            answer: "4.3 mA forward; practically zero when reversed, with 5 V across the diode.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "When the forward voltage across a diode rises from 0.70 V to 0.72 V, the current rises from 10 mA to 20 mA. Find the dynamic resistance (in Ω).",
                answer: 2,
                tolerance: 0.01,
                unit: "Ω",
                explain: t`$r_d = \dfrac{\Delta V}{\Delta I} = \dfrac{0.02}{0.010} = 2\ \Omega$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Using the diode equation",
            problem: t`A germanium diode ($\eta = 1$) has a reverse saturation current of 1 µA. Find the current when it is forward biased by 0.2 V at room temperature ($V_T = 26$ mV). Find also its dynamic resistance at this current.`,
            steps: [
              t`$\dfrac{V}{\eta V_T} = \dfrac{0.2}{0.026} = 7.69$.`,
              t`$e^{7.69} \approx 2191$, so $I = 1\ \mu\text{A} \times (2191 - 1) \approx 2190\ \mu\text{A} = 2.19$ mA.`,
              t`$r_d \approx \dfrac{\eta V_T}{I} = \dfrac{0.026}{2.19 \times 10^{-3}} \approx 11.9\ \Omega$.`,
            ],
            answer: "About 2.19 mA, with a dynamic resistance of about 12 Ω.",
          },
          {
            type: "mistake",
            wrong: "A forward-biased diode conducts as soon as any forward voltage is applied, and reverse current grows steadily with reverse voltage.",
            right: "Forward current is tiny until the knee voltage (0.7 V for Si) is reached. Reverse current stays at the small, almost constant saturation value until breakdown.",
            why: "The barrier potential must be overcome first, so the curve hugs the axis up to the knee. Reverse current is carried by minority carriers, whose number is fixed by temperature, so raising the reverse voltage does not raise it (until breakdown).",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Forward bias or reverse bias?",
              groups: ["Forward bias", "Reverse bias"],
              items: [
                { text: "Depletion region becomes narrower", group: 0, hint: "The applied voltage opposes the barrier." },
                { text: "Current carried by minority carriers", group: 1, hint: "Majority carriers are pushed away from the junction." },
                { text: "Current of a few milliamperes at 0.75 V (Si)", group: 0, hint: "This is past the knee." },
                { text: "N side connected to the + terminal", group: 1, hint: "Electrons are pulled away from the junction." },
                { text: "Used in a photodiode", group: 1, hint: "Light adds minority carriers to the small reverse current." },
                { text: "Diode behaves like a low resistance", group: 0, hint: "Current flows easily." },
              ],
              explain: "Forward bias narrows the depletion region and lets majority carriers flow (low resistance). Reverse bias widens it and leaves only the minority-carrier saturation current (high resistance).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When you draw the V-I characteristic, use different scales: mA on the forward current axis and µA on the reverse axis, and mark the knee voltage and breakdown voltage on the graph. Label the circuit used (forward circuit with milliammeter, reverse circuit with microammeter). Examiners give separate marks for the circuit and the labelled graph.",
          },
          {
            type: "keypoints",
            items: [
              "Forward bias narrows the depletion region; reverse bias widens it.",
              "Knee voltage: about 0.7 V (Si), 0.3 V (Ge). Reverse saturation current: nA (Si), µA (Ge).",
              t`Diode equation: $I = I_0(e^{V/\eta V_T} - 1)$, with $V_T \approx 26$ mV at room temperature.`,
              t`Static resistance $V/I$; dynamic resistance $\Delta V/\Delta I \approx \eta V_T/I$.`,
              "Practical model: a 0.7 V drop in forward bias, an open circuit in reverse bias.",
            ],
          },
        ],
        flashcards: [
          { front: "Knee (cut-in) voltage", back: "The forward voltage beyond which diode current rises sharply: about 0.7 V for Si and 0.3 V for Ge." },
          { front: "Reverse saturation current", back: "The small reverse current due to minority carriers. It is nearly independent of reverse voltage but rises with temperature." },
          { front: "Diode equation", back: "I = I₀(e^(V/ηV_T) − 1), with V_T = kT/q ≈ 26 mV at 300 K; η ≈ 1 for Ge, 2 for Si." },
          { front: "Dynamic resistance", back: "r_d = ΔV/ΔI, the inverse slope of the V-I curve at the operating point." },
          { front: "Static resistance", back: "R = V/I at one point on the characteristic." },
          { front: "Breakdown voltage", back: "The reverse voltage at which reverse current rises suddenly." },
          { front: "Which side of the diode symbol is the cathode?", back: "The side with the bar; the arrow points from anode (P) to cathode (N)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In forward bias, the width of the depletion region:",
            options: ["decreases", "increases", "stays the same", "becomes zero at any voltage"],
            answer: 0,
            explain: "The applied voltage opposes the barrier potential, so the depletion region narrows. It does not vanish at small voltages.",
          },
          {
            kind: "numeric",
            q: "A Si diode and a 470 Ω resistor are in series across a 10 V supply (forward bias). Using the 0.7 V model, find the current in mA (to one decimal place).",
            answer: 19.8,
            tolerance: 0.1,
            unit: "mA",
            explain: t`$I = (10 - 0.7)/470 = 9.3/470 = 0.0198$ A $= 19.8$ mA.`,
          },
          {
            kind: "numeric",
            q: "A diode carries 10 mA at a forward voltage of 0.7 V. Find its static resistance (in Ω).",
            answer: 70,
            unit: "Ω",
            explain: t`$R = V/I = 0.7/0.010 = 70\ \Omega$. Do not confuse this with the much smaller dynamic resistance.`,
          },
          {
            kind: "truefalse",
            q: "The reverse saturation current of a diode increases when the reverse voltage is increased from 2 V to 10 V (below breakdown).",
            answer: false,
            explain: "It stays nearly constant; it depends on the number of minority carriers, which is set by temperature.",
          },
          {
            kind: "fill",
            q: "The thermal voltage kT/q is about ___ mV at room temperature.",
            answer: ["26", "25", "25.9", "25.85"],
            explain: t`$V_T = kT/q = (1.38 \times 10^{-23} \times 300)/(1.6 \times 10^{-19}) \approx 26$ mV.`,
          },
          {
            kind: "numeric",
            q: "Using r_d ≈ ηV_T/I with η = 1 and V_T = 26 mV, find the dynamic resistance of a diode carrying 5 mA (in Ω).",
            answer: 5.2,
            tolerance: 0.05,
            unit: "Ω",
            explain: t`$r_d = 0.026/0.005 = 5.2\ \Omega$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The reverse current of a germanium diode is larger than that of a silicon diode because germanium:",
            options: ["has a smaller energy gap, so more minority carriers are generated", "is more heavily doped", "has a higher knee voltage", "has no depletion region"],
            answer: 0,
            explain: "Ge has an energy gap of about 0.7 eV against 1.1 eV for Si, so far more electron-hole pairs are thermally generated at room temperature.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-ele-rectifiers-filters",
        title: "Rectifiers and Filters",
        summary: "Half-wave, centre-tap full-wave and bridge rectifiers: DC output, RMS value, ripple factor, efficiency, PIV and ripple frequency; the capacitor filter.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🔋",
            caption: "Your phone charger turns the 230 V, 50 Hz mains into about 5 V DC. Rectification is the step that makes the current flow one way only.",
          },
          {
            type: "text",
            md: "A **rectifier** converts alternating current into **unidirectional (pulsating DC)** current. A **filter** then smooths the pulses. A DC power supply is built as: step-down transformer → rectifier → filter → (regulator) → load.",
          },
          {
            type: "text",
            md: t`One diode is placed in series with the load across the transformer secondary. During the positive half cycle the diode is forward biased and current flows through the load. During the negative half cycle it is reverse biased and no current flows. The output is one positive hump per cycle, so the **ripple frequency equals the supply frequency** (50 Hz). If the secondary peak voltage is $V_m$, the diode must withstand a **peak inverse voltage (PIV)** of $V_m$ in the off half cycle.`,
          },
          {
            type: "heading",
            text: "Full-wave rectifiers",
          },
          {
            type: "text",
            md: t`**Centre-tap rectifier.** A centre-tapped secondary feeds two diodes. In each half cycle one diode conducts, and both send current through the load in the same direction. Each half of the secondary has peak $V_m$. The non-conducting diode must withstand **PIV = 2V_m**.\n\n**Bridge rectifier.** Four diodes in a bridge; no centre tap is needed. In each half cycle two diodes in series conduct. **PIV = V_m**, but there are two diode drops (about 1.4 V for Si) in the current path. In both full-wave circuits the **ripple frequency is twice the supply frequency** (100 Hz).`,
          },
          {
            type: "table",
            headers: ["Quantity", "Half-wave", "Full-wave (centre-tap / bridge)"],
            rows: [
              [t`$I_{dc}$`, t`$I_m/\pi$`, t`$2I_m/\pi$`],
              [t`$I_{rms}$`, t`$I_m/2$`, t`$I_m/\sqrt{2}$`],
              [t`$V_{dc}$ (ideal diodes)`, t`$V_m/\pi \approx 0.318V_m$`, t`$2V_m/\pi \approx 0.637V_m$`],
              ["Ripple factor γ", "1.21", "0.482"],
              ["Maximum efficiency", "40.6%", "81.2%"],
              ["PIV", t`$V_m$`, t`$2V_m$ (centre-tap), $V_m$ (bridge)`],
              ["Ripple frequency", "f (50 Hz)", "2f (100 Hz)"],
            ],
          },
          {
            type: "formula",
            tex: t`\gamma = \frac{I_{ac}}{I_{dc}} = \sqrt{\left(\frac{I_{rms}}{I_{dc}}\right)^2 - 1}, \qquad \eta = \frac{P_{dc}}{P_{ac}} = \frac{I_{dc}^2 R_L}{I_{rms}^2 (R_L + r_f)}`,
            caption: t`$r_f$ is the forward resistance of the diode. With $r_f \ll R_L$, the efficiency reaches the maximum values in the table.`,
          },
          {
            type: "example",
            title: "Half-wave rectifier",
            problem: "A transformer gives 12 V (rms) on its secondary. It feeds a half-wave rectifier with an ideal diode and a 1 kΩ load. The mains frequency is 50 Hz. Find the peak voltage, DC output voltage, DC load current, PIV and ripple frequency.",
            steps: [
              t`$V_m = \sqrt{2} \times 12 = 16.97$ V.`,
              t`$V_{dc} = V_m/\pi = 16.97/3.1416 = 5.40$ V.`,
              t`$I_{dc} = V_{dc}/R_L = 5.40/1000 = 5.40$ mA.`,
              "PIV = V_m = 16.97 V; ripple frequency = 50 Hz.",
            ],
            answer: "V_m ≈ 17.0 V, V_dc ≈ 5.40 V, I_dc ≈ 5.40 mA, PIV ≈ 17.0 V, ripple at 50 Hz.",
          },
          {
            type: "example",
            title: "Bridge rectifier with silicon diodes",
            problem: "A bridge rectifier uses silicon diodes (0.7 V each) and is fed from a 15 V (rms) secondary. Find the peak load voltage and the DC output voltage.",
            steps: [
              t`Secondary peak: $V_m = \sqrt{2} \times 15 = 21.21$ V.`,
              t`Two diodes conduct in series, so the peak load voltage is $21.21 - 2(0.7) = 19.81$ V.`,
              t`$V_{dc} = \dfrac{2 \times 19.81}{\pi} = 12.61$ V.`,
            ],
            answer: "Peak load voltage ≈ 19.8 V; DC output ≈ 12.6 V.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A centre-tap full-wave rectifier uses a 12-0-12 V (rms) transformer. Find the PIV across each diode (ideal diodes), in volts, to one decimal place.",
                answer: 33.9,
                tolerance: 0.1,
                unit: "V",
                explain: t`Each half has $V_m = 12\sqrt{2} = 16.97$ V. PIV $= 2V_m = 33.9$ V.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Capacitor (shunt) filter",
          },
          {
            type: "text",
            md: t`A large capacitor is connected **across the load**. It charges to nearly $V_m$ when the diode conducts, then discharges slowly through $R_L$ while the diode is off. The output becomes almost steady with a small sawtooth ripple. The larger $C$ and $R_L$, the smaller the ripple. For a full-wave rectifier with a capacitor filter:\n\n$\gamma = \dfrac{1}{4\sqrt{3}\, f C R_L}$ (for half-wave it is $\dfrac{1}{2\sqrt{3}\, f C R_L}$).\n\nAn **inductor filter** is placed in **series** with the load (it opposes changes in current), and an **LC** or **π (CLC) filter** combines both for even less ripple.`,
          },
          {
            type: "mistake",
            wrong: "A full-wave rectifier fed from 50 Hz mains gives ripple at 50 Hz, the same as the supply.",
            right: "The ripple frequency of a full-wave rectifier is 2f = 100 Hz. Only the half-wave rectifier has ripple at 50 Hz.",
            why: "The full-wave output has a hump for every half cycle, two humps per input cycle. This higher ripple frequency is one reason full-wave output is easier to filter.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each rectifier quantity to its value.",
              pairs: [
                ["Ripple factor of HWR", "1.21"],
                ["Ripple factor of FWR", "0.482"],
                ["Maximum efficiency of HWR", "40.6%"],
                ["Maximum efficiency of FWR", "81.2%"],
                ["PIV of centre-tap FWR", "2V_m"],
              ],
              explain: "Full-wave rectification halves the ripple-related losses: lower ripple factor (0.482 against 1.21) and double the efficiency (81.2% against 40.6%). The centre-tap circuit pays for this with PIV = 2V_m.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In the practical exam you will draw the input and output waveforms on a CRO screen. Keep the time axes aligned so the examiner can see which half cycles pass. For the filter experiment, note the ripple voltage with and without the capacitor; the difference is what earns the marks in the 'inference' line.",
          },
          {
            type: "keypoints",
            items: [
              "HWR: V_dc = V_m/π, γ = 1.21, η_max = 40.6%, PIV = V_m, ripple at f.",
              "FWR: V_dc = 2V_m/π, γ = 0.482, η_max = 81.2%, ripple at 2f.",
              "PIV: 2V_m for centre-tap, V_m for bridge; the bridge has two diode drops in the path.",
              "A capacitor filter goes across the load, an inductor filter in series; bigger C and R_L give less ripple.",
            ],
          },
        ],
        flashcards: [
          { front: "Rectifier", back: "A circuit that converts AC into unidirectional (pulsating DC) current using diodes." },
          { front: "Peak inverse voltage (PIV)", back: "The maximum reverse voltage a diode must withstand when it is not conducting." },
          { front: "Ripple factor", back: "γ = (rms value of the AC component) ÷ (DC value) of the output." },
          { front: "Ripple factor and efficiency of HWR", back: "γ = 1.21, maximum efficiency 40.6%." },
          { front: "Ripple factor and efficiency of FWR", back: "γ = 0.482, maximum efficiency 81.2%." },
          { front: "Ripple frequency of a bridge rectifier on 50 Hz mains", back: "100 Hz (twice the supply frequency)." },
          { front: "Advantage of bridge over centre-tap", back: "No centre-tapped transformer is needed and the PIV per diode is only V_m." },
          { front: "Where is the filter capacitor connected?", back: "In parallel with (across) the load." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which rectifier needs a centre-tapped transformer?",
            options: ["Half-wave", "Centre-tap full-wave", "Bridge", "None of them"],
            answer: 1,
            explain: "The centre-tap circuit uses the two halves of the secondary alternately. The bridge works with an ordinary secondary.",
          },
          {
            kind: "numeric",
            q: "A full-wave rectifier with ideal diodes has a peak load voltage of 20 V. Find V_dc to one decimal place.",
            answer: 12.7,
            tolerance: 0.1,
            unit: "V",
            explain: t`$V_{dc} = 2V_m/\pi = 40/3.1416 = 12.73$ V.`,
          },
          {
            kind: "numeric",
            q: "A half-wave rectifier gives I_m = 31.4 mA. Find I_dc in mA.",
            answer: 10,
            tolerance: 0.05,
            unit: "mA",
            explain: t`$I_{dc} = I_m/\pi = 31.4/3.14 = 10$ mA.`,
          },
          {
            kind: "truefalse",
            q: "In a bridge rectifier, two diodes conduct during each half cycle.",
            answer: true,
            explain: "Two diodes in opposite arms conduct in series in each half cycle; the other two are reverse biased.",
          },
          {
            kind: "numeric",
            q: t`Find the ripple factor of a full-wave rectifier with a capacitor filter if $f = 50$ Hz, $C = 1000\ \mu$F and $R_L = 500\ \Omega$. Give the answer as a percentage (two decimal places).`,
            answer: 0.58,
            tolerance: 0.01,
            unit: "%",
            explain: t`$\gamma = \dfrac{1}{4\sqrt{3} \times 50 \times 10^{-3} \times 500} = \dfrac{1}{173.2} = 0.00577 \approx 0.58\%$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which changes reduce the ripple at the output of a capacitor-filtered rectifier?",
            options: ["Using a larger capacitor", "Using full-wave instead of half-wave rectification", "Drawing more load current (smaller R_L)", "Using a π (CLC) filter"],
            answers: [0, 1, 3],
            explain: "Ripple is inversely proportional to f, C and R_L. A smaller R_L (more current) discharges the capacitor faster and raises the ripple.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The maximum efficiency of a half-wave rectifier is ___ %.",
            answer: ["40.6", "40.5", "40.53"],
            explain: t`$\eta_{max} = \dfrac{(I_m/\pi)^2}{(I_m/2)^2} = \dfrac{4}{\pi^2} = 0.406$.`,
          },
        ],
      },
      {
        slug: "c11-ele-zener-special-diodes",
        title: "Zener Regulator, Special Diodes, Clippers and Clampers",
        summary: "Zener and avalanche breakdown, the Zener shunt regulator, the LED and its series resistor, photodiode and varactor, and diode clippers and clampers.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "💡",
            caption: "The same PN junction can regulate a voltage, give out light or sense it, depending on how it is doped and biased.",
          },
          {
            type: "text",
            md: "A **Zener diode** is a heavily doped silicon diode designed to work in the **reverse breakdown** region. Once breakdown is reached, the voltage across it stays almost constant at the **Zener voltage** $V_Z$ over a wide range of current. That makes it a voltage reference. In its symbol, the cathode bar has bent ends like a Z.",
          },
          {
            type: "table",
            headers: ["", "Zener breakdown", "Avalanche breakdown"],
            rows: [
              ["Doping", "heavy, very thin depletion region", "lighter, wider depletion region"],
              ["Mechanism", "strong electric field pulls electrons out of covalent bonds (field ionisation)", "carriers gain enough energy to knock out more carriers in collisions (multiplication)"],
              ["Typical voltage", "below about 5 V", "above about 6 V"],
              ["Effect of temperature on V_Z", "decreases (negative temperature coefficient)", "increases (positive temperature coefficient)"],
            ],
          },
          {
            type: "heading",
            text: "Zener shunt regulator",
          },
          {
            type: "text",
            md: t`The Zener is connected **across the load, in reverse bias**, with a series resistor $R_S$ from the unregulated supply. The current in $R_S$ is shared: $I_S = I_Z + I_L$. If the input rises, the extra current goes through the Zener and the load voltage stays at $V_Z$. If the load draws more, the Zener takes less. Regulation holds as long as $I_Z$ stays between its minimum (knee) value and the maximum allowed by its power rating.`,
          },
          {
            type: "formula",
            tex: t`I_S = \frac{V_{in} - V_Z}{R_S}, \qquad I_L = \frac{V_Z}{R_L}, \qquad I_Z = I_S - I_L, \qquad P_Z = V_Z I_Z`,
          },
          {
            type: "example",
            title: "Zener regulator",
            problem: "A 6 V Zener diode is fed from a 12 V supply through a 200 Ω resistor. The load is 1 kΩ. Find the current through the series resistor, the load current, the Zener current and the power dissipated in the Zener.",
            steps: [
              t`$I_S = \dfrac{12 - 6}{200} = 0.030$ A $= 30$ mA.`,
              t`$I_L = \dfrac{6}{1000} = 6$ mA.`,
              t`$I_Z = I_S - I_L = 30 - 6 = 24$ mA.`,
              t`$P_Z = V_Z I_Z = 6 \times 0.024 = 0.144$ W $= 144$ mW.`,
            ],
            answer: "I_S = 30 mA, I_L = 6 mA, I_Z = 24 mA, P_Z = 144 mW.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "In the example above, the load is removed (open circuit). What is the new Zener current in mA?",
                answer: 30,
                unit: "mA",
                explain: "With no load, all of I_S = 30 mA flows through the Zener. This no-load case sets the Zener's power rating: 6 × 0.030 = 180 mW.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Device", "Bias", "Principle", "Use"],
            rows: [
              ["LED", "forward", "electrons recombine with holes and give out the energy as light; colour depends on the energy gap of the material (GaAs, GaAsP, GaN…)", "indicators, displays, lighting"],
              ["Photodiode", "reverse", "light creates electron-hole pairs near the junction, so reverse current rises with light intensity", "light sensors, remote-control receivers, optical communication"],
              ["Varactor (varicap)", "reverse", "the depletion region acts as the dielectric of a capacitor; more reverse voltage → wider region → less capacitance", "electronic tuning in radio and TV"],
              ["Solar cell", "no external bias", "light creates an EMF across the junction (photovoltaic effect)", "power from sunlight"],
            ],
          },
          {
            type: "example",
            title: "LED series resistor",
            problem: "A red LED needs 20 mA and drops 2.0 V when lit. Find the series resistor needed to run it from a 5 V supply, and the power in that resistor.",
            steps: [
              t`Voltage across the resistor: $5 - 2.0 = 3.0$ V.`,
              t`$R = \dfrac{3.0}{0.020} = 150\ \Omega$.`,
              t`Power: $P = I^2 R = (0.020)^2 \times 150 = 0.06$ W $= 60$ mW, so a 1/4 W resistor is enough.`,
            ],
            answer: "150 Ω, dissipating 60 mW.",
          },
          {
            type: "heading",
            text: "Clippers and clampers",
          },
          {
            type: "text",
            md: "A **clipper** removes part of a waveform above or below a chosen level. In a **shunt positive clipper** (diode across the output, anode to the output line), the diode conducts whenever the input goes above about +0.7 V, so the positive peaks are cut off at 0.7 V. Adding a battery $V_B$ in series with the diode (a **biased clipper**) moves the clipping level to $V_B + 0.7$ V. Reversing the diode clips the negative peaks.\n\nA **clamper** shifts the whole waveform up or down without changing its shape, using a capacitor, a diode and a resistor. A **positive clamper** pushes the waveform up so that its lowest point sits at about zero: an input swinging ±$V_m$ comes out swinging from 0 to $+2V_m$ (ideal diode). Clampers are also called **DC restorers**.",
          },
          {
            type: "mistake",
            wrong: "A Zener diode regulates by being forward biased, like an ordinary diode.",
            right: "A Zener regulator uses the diode in **reverse bias**, in its breakdown region, where the voltage stays close to V_Z.",
            why: "In forward bias a Zener behaves like an ordinary diode and gives only about 0.7 V. The constant V_Z appears only in reverse breakdown, and the series resistor is what keeps that breakdown current safe.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A Zener regulator's input rises from 12 V to 14 V. What changes most?",
              emoji: "⚡",
              options: ["The load voltage rises by 2 V", "The Zener current rises; the load voltage stays near V_Z", "The load current doubles", "The Zener stops conducting"],
              answer: 1,
              trap: 0,
              explain: "The extra 2 V appears across R_S, so I_S rises, and the extra current goes through the Zener. The load voltage stays at V_Z, so the load current stays the same.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a Zener regulator numerical, always write the three equations in order: I_S from the series resistor, I_L from the load, then I_Z = I_S − I_L. If I_Z comes out negative, the Zener is not in breakdown and the circuit is not regulating; say so in your answer.",
          },
          {
            type: "keypoints",
            items: [
              "A Zener works in reverse breakdown; V_Z stays nearly constant over a wide current range.",
              "Zener breakdown: heavy doping, low V_Z, negative temperature coefficient; avalanche: higher V_Z, positive coefficient.",
              "Regulator: I_S = (V_in − V_Z)/R_S, I_L = V_Z/R_L, I_Z = I_S − I_L.",
              "LED forward biased; photodiode and varactor reverse biased; LED resistor R = (V_s − V_F)/I_F.",
              "Clippers cut off part of a waveform; clampers shift it up or down.",
            ],
          },
        ],
        flashcards: [
          { front: "Zener diode", back: "A heavily doped Si diode made to work in reverse breakdown, where its voltage stays nearly constant at V_Z." },
          { front: "Zener breakdown versus avalanche", back: "Zener: field ionisation in a thin, heavily doped junction, below about 5 V. Avalanche: collision multiplication in a lightly doped junction, higher voltages." },
          { front: "Current relation in a Zener regulator", back: "I_S = I_Z + I_L." },
          { front: "LED principle", back: "Recombination of electrons and holes in a forward-biased junction releases energy as light." },
          { front: "Photodiode", back: "A reverse-biased diode whose reverse current increases with the intensity of light falling on the junction." },
          { front: "Varactor", back: "A reverse-biased diode used as a voltage-controlled capacitor; capacitance falls as reverse voltage rises." },
          { front: "Clamper", back: "A circuit (C, diode, R) that shifts a waveform's DC level without changing its shape; also called a DC restorer." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a Zener voltage regulator, the Zener diode is connected:",
            options: ["in parallel with the load, reverse biased", "in series with the load, forward biased", "in parallel with the load, forward biased", "in series with the series resistor, reverse biased, with no load"],
            answer: 0,
            explain: "The Zener is a shunt element across the load, in reverse bias, so the load voltage equals V_Z.",
          },
          {
            kind: "numeric",
            q: "A 9 V Zener is fed from 15 V through 100 Ω. The load draws 20 mA. Find the Zener current in mA.",
            answer: 40,
            unit: "mA",
            explain: t`$I_S = (15 - 9)/100 = 60$ mA; $I_Z = 60 - 20 = 40$ mA.`,
          },
          {
            kind: "numeric",
            q: "A white LED drops 3 V at 15 mA. What series resistor (in Ω) is needed on a 9 V battery?",
            answer: 400,
            unit: "Ω",
            explain: t`$R = (9 - 3)/0.015 = 400\ \Omega$.`,
          },
          {
            kind: "truefalse",
            q: "The capacitance of a varactor diode increases when its reverse voltage is increased.",
            answer: false,
            explain: "More reverse voltage widens the depletion region (like moving capacitor plates apart), so capacitance decreases.",
          },
          {
            kind: "mcq",
            q: "A shunt positive clipper uses a silicon diode and a 2.3 V battery in series with it. At what level are the positive peaks clipped?",
            options: ["2.3 V", "3.0 V", "1.6 V", "0.7 V"],
            answer: 1,
            explain: "The diode starts conducting when the output reaches V_B + 0.7 = 2.3 + 0.7 = 3.0 V.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these devices are normally operated in reverse bias?",
            options: ["Photodiode", "LED", "Varactor", "Zener in a regulator"],
            answers: [0, 2, 3],
            explain: "Only the LED is forward biased, because light comes from recombination of carriers crossing the junction.",
          },
          {
            kind: "fill",
            q: "A clamper circuit is also called a DC ___.",
            answer: ["restorer"],
            explain: "It restores (adds) a DC level to an AC waveform.",
          },
          {
            kind: "mcq",
            q: "A Zener diode of V_Z = 3.3 V most likely breaks down by:",
            options: ["Zener (field) breakdown, with a negative temperature coefficient", "avalanche breakdown, with a positive temperature coefficient", "thermal runaway", "forward conduction"],
            answer: 0,
            explain: "Low breakdown voltages come from heavily doped, thin junctions where field ionisation dominates; V_Z then falls slightly as temperature rises.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-ele-diodes-practice",
        title: "Board Practice: Diodes and Applications",
        summary: "Mixed board-style questions on diode characteristics, rectifier calculations, filters, Zener regulators and special diodes.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "This lesson mixes the question types you meet in the board paper for this chapter: definitions, differences, circuit-and-working questions, and two- or three-mark numericals. Try each one before reading the steps.",
          },
          {
            type: "example",
            title: "Comparing rectifiers",
            problem: "The same 230 V / 10 V (rms) transformer secondary is used with (a) a half-wave rectifier and (b) a bridge rectifier, each with ideal diodes and a 500 Ω load. Compare the DC load currents.",
            steps: [
              t`$V_m = 10\sqrt{2} = 14.14$ V.`,
              t`(a) $V_{dc} = 14.14/\pi = 4.50$ V, so $I_{dc} = 4.50/500 = 9.0$ mA.`,
              t`(b) $V_{dc} = 2 \times 14.14/\pi = 9.00$ V, so $I_{dc} = 18.0$ mA.`,
            ],
            answer: "9.0 mA for half-wave and 18.0 mA for the bridge: the full-wave circuit gives twice the DC output.",
          },
          {
            type: "example",
            title: "RMS current and efficiency",
            problem: t`A half-wave rectifier gives a peak load current of 50 mA in a 1 kΩ load. The diode forward resistance is 20 Ω. Find $I_{dc}$, $I_{rms}$ and the efficiency.`,
            steps: [
              t`$I_{dc} = I_m/\pi = 50/3.1416 = 15.92$ mA.`,
              t`$I_{rms} = I_m/2 = 25$ mA.`,
              t`$\eta = \dfrac{I_{dc}^2 R_L}{I_{rms}^2 (R_L + r_f)} = \dfrac{(15.92)^2 \times 1000}{(25)^2 \times 1020} = \dfrac{253\,400}{637\,500} \approx 0.398$.`,
            ],
            answer: "I_dc ≈ 15.9 mA, I_rms = 25 mA, efficiency ≈ 39.8% (a little below the 40.6% maximum because of r_f).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Show from the formula that the ripple factor of a half-wave rectifier is about 1.21. Using I_rms/I_dc = π/2, compute γ to two decimal places.",
                answer: 1.21,
                tolerance: 0.01,
                explain: t`$\gamma = \sqrt{(\pi/2)^2 - 1} = \sqrt{2.467 - 1} = \sqrt{1.467} = 1.21$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Designing a Zener regulator",
            problem: "A 5.1 V Zener must supply a load of 10 mA from a 9 V battery. The Zener needs at least 5 mA to stay in breakdown. Find the largest series resistor you can use.",
            steps: [
              "The series resistor must carry I_L + I_Z(min) = 10 + 5 = 15 mA.",
              t`$R_S = \dfrac{9 - 5.1}{0.015} = \dfrac{3.9}{0.015} = 260\ \Omega$.`,
              "Any value up to 260 Ω works; a standard 220 Ω resistor gives a safety margin (I_S ≈ 17.7 mA).",
            ],
            answer: "R_S(max) = 260 Ω; choose 220 Ω in practice.",
          },
          {
            type: "example",
            title: "Two-mark short answer",
            problem: "Why is silicon preferred to germanium for making rectifier diodes?",
            steps: [
              "Silicon has a larger energy gap (about 1.1 eV against 0.7 eV), so far fewer electron-hole pairs are generated by heat.",
              "So its reverse saturation current is much smaller (nA instead of µA), and it can work at higher temperatures (up to about 150 °C against about 75 °C for Ge) and higher reverse voltages.",
            ],
            answer: "Smaller reverse current and better behaviour at high temperature and high voltage, because of the larger energy gap of Si.",
          },
          {
            type: "mistake",
            wrong: "PIV of a bridge rectifier is 2V_m, the same as the centre-tap circuit, because it is also full-wave.",
            right: "PIV is V_m for each diode of a bridge and 2V_m for each diode of a centre-tap rectifier.",
            why: "In the centre-tap circuit the off diode sees the whole secondary (both halves) in reverse. In the bridge each off diode is connected across the secondary through one conducting (nearly shorted) diode, so it sees only V_m.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the blocks of a regulated DC power supply in order.",
              items: ["Step-down transformer", "Rectifier", "Filter", "Zener regulator", "Load"],
              explain: "The transformer sets the AC level, the rectifier makes it one-way, the filter smooths it, and the regulator holds the output steady against changes in input and load.",
            },
          },
          {
            type: "table",
            headers: ["Question type", "What earns the marks"],
            rows: [
              ["Circuit and working (4–5 marks)", "Labelled circuit, working in both half cycles, input and output waveforms"],
              ["Numerical (3 marks)", "Formula, substitution with units, answer; state PIV and ripple frequency when asked"],
              ["Distinguish (2–3 marks)", "Zener versus avalanche, HWR versus FWR, LED versus photodiode, in pairs"],
              ["Graph", "V-I characteristic with knee and breakdown voltages marked"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Read whether the transformer voltage is rms or peak. Board questions almost always give the rms secondary voltage; multiply by √2 to get V_m before using any rectifier formula. For a centre-tap transformer like 9-0-9 V, use 9 V (one half) for V_m.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "For a 9-0-9 V (rms) centre-tap full-wave rectifier with ideal diodes, V_dc is about:",
                options: ["8.1 V", "16.2 V", "5.7 V", "12.7 V"],
                answer: 0,
                explain: t`$V_m = 9\sqrt{2} = 12.73$ V; $V_{dc} = 2V_m/\pi = 8.10$ V. Using 18 V by mistake gives 16.2 V.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Convert rms to peak first: V_m = √2 V_rms (half the secondary for centre-tap).",
              "Full-wave gives twice the DC output of half-wave from the same winding.",
              "Efficiency drops below the maximum when the diode forward resistance is included.",
              "Zener design: R_S = (V_in − V_Z)/(I_L + I_Z(min)).",
            ],
          },
        ],
        flashcards: [
          { front: "I_rms / I_dc for a half-wave rectifier", back: "(I_m/2)/(I_m/π) = π/2 ≈ 1.57." },
          { front: "I_rms / I_dc for a full-wave rectifier", back: "(I_m/√2)/(2I_m/π) = π/(2√2) ≈ 1.11." },
          { front: "Peak from rms", back: "V_m = √2 × V_rms ≈ 1.414 V_rms." },
          { front: "Largest series resistor in a Zener regulator", back: "R_S = (V_in − V_Z)/(I_L + I_Z(min))." },
          { front: "Why full-wave output is easier to filter", back: "Ripple is at 2f, so the capacitor discharges for a shorter time between peaks." },
          { front: "PIV of each diode in a bridge", back: "V_m." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A bridge rectifier (ideal diodes) is fed from a 6 V (rms) secondary. Find V_dc to one decimal place.",
            answer: 5.4,
            tolerance: 0.05,
            unit: "V",
            explain: t`$V_m = 8.485$ V; $V_{dc} = 2 \times 8.485/\pi = 5.40$ V.`,
          },
          {
            kind: "mcq",
            q: "Which statement about a half-wave rectifier is correct?",
            options: ["Its ripple frequency equals the supply frequency", "It needs four diodes", "Its PIV is 2V_m", "Its ripple factor is 0.482"],
            answer: 0,
            explain: "One hump per input cycle means ripple at f. It needs one diode, PIV = V_m, and γ = 1.21.",
          },
          {
            kind: "numeric",
            q: "A 12 V Zener regulator has R_S = 150 Ω and V_in = 18 V. Find the minimum load resistance (in Ω) for which the Zener current is still at least 10 mA.",
            answer: 400,
            unit: "Ω",
            explain: t`$I_S = 6/150 = 40$ mA. $I_L(\max) = 40 - 10 = 30$ mA, so $R_L(\min) = 12/0.030 = 400\ \Omega$.`,
            difficulty: 3,
            hint: "Find I_S first, then the largest load current that still leaves 10 mA for the Zener.",
          },
          {
            kind: "truefalse",
            q: "A filter capacitor makes the DC output voltage of a rectifier rise towards V_m.",
            answer: true,
            explain: "The capacitor charges to nearly the peak and discharges only a little between peaks, so V_dc approaches V_m.",
          },
          {
            kind: "order",
            q: "Order these by increasing ripple factor (least ripple first).",
            items: ["Full-wave with capacitor filter", "Full-wave without filter", "Half-wave without filter"],
            explain: "A filtered full-wave output has γ well below 0.1; unfiltered full-wave has 0.482; unfiltered half-wave has 1.21.",
          },
          {
            kind: "multi",
            q: "Which are advantages of a bridge rectifier over a centre-tap rectifier?",
            options: ["No centre-tapped transformer is needed", "Lower PIV per diode", "Only one diode drop in the current path", "The whole secondary is used in both half cycles"],
            answers: [0, 1, 3],
            explain: "The bridge has two diode drops in series in each half cycle, which is its main disadvantage at low voltages.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A photodiode is operated in ___ bias.",
            answer: ["reverse"],
            explain: "In reverse bias the dark current is tiny, so the extra current due to light is easy to detect.",
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Semiconductor Diodes and Applications": "c11-ele-diodes",
};
