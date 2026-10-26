import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "electronics";
/** Syllabus family: chapter titles below are matched against `ele` rows in src/content/syllabus/. */
export const family = "ele";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Communication Systems (Karnataka II PUC Electronics)                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-ele-communication",
    title: "Communication Systems",
    icon: "📡",
    description: "Elements of a communication system, the need for modulation, amplitude and frequency modulation, AM/FM transmitters and the superheterodyne receiver, and the basics of digital communication.",
    lessons: [
      {
        slug: "c12-ele-comm-basics",
        title: "Communication Basics and the Need for Modulation",
        summary: "The blocks of a communication system, noise, modes of communication, bandwidth, the radio spectrum and why a message must ride on a high-frequency carrier.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "📻",
            caption: "Akashvani Bengaluru broadcasts on a frequency of about 612 kHz. Your voice is only a few kHz. How does a few-kHz voice reach a radio 100 km away?",
          },
          {
            type: "text",
            md: "**Communication** is the transfer of information from one place to another. In electronics the information (speech, music, pictures, data) is first turned into an electrical signal and then sent through a medium.\n\nA **signal** is the electrical form of the information. An **analog signal** varies continuously with time (the output of a microphone). A **digital signal** has only a few fixed levels, usually two (0 and 1).",
          },
          {
            type: "table",
            headers: ["Block", "What it does"],
            rows: [
              ["Information source and **transducer**", "The message (voice) is changed into an electrical signal by a transducer such as a microphone."],
              ["**Transmitter**", "Processes the signal (amplifies, modulates) so that it can travel through the channel."],
              ["**Channel**", "The medium between transmitter and receiver: wire, coaxial cable, optical fibre or free space."],
              ["**Noise**", "Unwanted signals that add to the message in the channel and in the receiver."],
              ["**Receiver**", "Picks up the weak signal, amplifies it and recovers the original message (demodulation)."],
              ["Output transducer and destination", "A loudspeaker or display turns the electrical signal back into sound or picture for the user."],
            ],
          },
          {
            type: "text",
            md: "**Noise** is any unwanted electrical disturbance. **External noise** comes from outside the system (lightning, sparking motors, other transmitters). **Internal noise** is produced inside the circuits (thermal noise in resistors, shot noise in transistors). Noise cannot be removed completely; good design keeps the **signal-to-noise ratio** high.\n\n**Modes of communication:** **simplex** (one way only: radio and TV broadcast), **half duplex** (both ways, but one at a time: walkie-talkie), **full duplex** (both ways at the same time: mobile phone call).",
          },
          {
            type: "text",
            md: "**Bandwidth** is the range of frequencies a signal occupies, or the range a channel can pass. Speech needs about 300 Hz to 3400 Hz (telephone quality), music about 20 Hz to 20 kHz, and an analog TV picture about 4.2 to 5 MHz.\n\nThe low-frequency message is called the **baseband** or **modulating signal**. The high-frequency wave that carries it is the **carrier**. **Modulation** is the process of changing some characteristic of the carrier (amplitude, frequency or phase) in step with the instantaneous value of the message.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Size of the antenna.** An antenna radiates well only when its length is comparable to the wavelength, at least $\lambda/4$. For a 3 kHz audio signal, $\lambda = c/f = (3\times10^8)/(3\times10^3) = 10^5$ m, so $\lambda/4 = 25$ km. That is impossible to build. For a 1 MHz carrier, $\lambda/4 = 75$ m, which is practical.`,
              t`**Effective power radiated.** The power radiated by a linear antenna of length $l$ is proportional to $(l/\lambda)^2$. A higher frequency (smaller $\lambda$) radiates much more power from the same antenna.`,
              "**Avoiding mixing of signals.** All voices and music lie in the same 20 Hz–20 kHz range. If every station sent its audio directly, the signals would mix. Giving each station its own carrier frequency keeps them apart (this is **frequency division**).",
              "**Range.** High-frequency waves travel much farther through space than audio-frequency waves, which die out quickly.",
            ],
          },
          {
            type: "formula",
            tex: t`\lambda = \frac{c}{f}, \qquad l_{\min} \approx \frac{\lambda}{4}, \qquad c = 3\times10^{8}\ \text{m s}^{-1}`,
            caption: "Wavelength of an electromagnetic wave and the minimum practical antenna length.",
          },
          {
            type: "example",
            title: "Antenna length for an FM station",
            problem: "An FM station in Mysuru broadcasts at 100 MHz. Find the wavelength and the length of a quarter-wave antenna. (Take c = 3 × 10⁸ m/s.)",
            steps: [
              t`$\lambda = \dfrac{c}{f} = \dfrac{3\times10^8}{100\times10^6} = 3$ m.`,
              t`Quarter-wave antenna: $l = \lambda/4 = 3/4 = 0.75$ m.`,
              "This is why FM radios and mobile phones can use short, built-in antennas.",
            ],
            answer: "λ = 3 m; a quarter-wave antenna is 0.75 m (75 cm) long.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the length (in m) of a quarter-wave antenna for a carrier of 1.5 MHz. Take c = 3 × 10⁸ m/s.",
                answer: 50,
                tolerance: 0.5,
                unit: "m",
                explain: "λ = 3 × 10⁸ / 1.5 × 10⁶ = 200 m, so λ/4 = 50 m.",
              },
              {
                kind: "mcq",
                q: "A walkie-talkie lets both people talk, but only one at a time. This mode is",
                options: ["simplex", "half duplex", "full duplex", "multiplex"],
                answer: 1,
                explain: "Both directions are possible but not at the same moment, so it is half duplex. A phone call is full duplex.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Band", "Frequency range", "Typical use"],
            rows: [
              ["MF (medium frequency)", "300 kHz – 3 MHz", "AM radio (medium wave, about 530–1600 kHz)"],
              ["HF (high frequency)", "3 – 30 MHz", "Short-wave radio, amateur radio"],
              ["VHF (very high frequency)", "30 – 300 MHz", "FM radio (88–108 MHz), TV"],
              ["UHF (ultra high frequency)", "300 MHz – 3 GHz", "TV, mobile phones, Wi-Fi at 2.4 GHz"],
              ["SHF (super high frequency)", "3 – 30 GHz", "Satellite communication, radar, microwave links"],
            ],
          },
          {
            type: "mistake",
            wrong: "Modulation increases the frequency of the message signal so that it can travel far.",
            right: "The message frequency is not changed. The message changes a property (amplitude, frequency or phase) of a separate high-frequency carrier. The receiver later recovers the original low-frequency message.",
            why: "Because the transmitted wave is at high frequency, it feels as if the voice itself was pushed up. But the carrier is generated by an oscillator in the transmitter; the voice only controls it.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each reason with the problem it solves.",
              pairs: [
                ["Antenna length ≈ λ/4", "A 25 km antenna for audio is impossible"],
                ["Power radiated ∝ (l/λ)²", "Audio-frequency waves radiate very little power"],
                ["Separate carrier for each station", "All stations' audio would overlap"],
                ["High-frequency carrier", "Low-frequency waves fade over short distances"],
              ],
              explain: "Every reason for modulation comes back to one idea: free space handles high frequencies well and audio frequencies badly.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tip",
            md: "\"Explain the need for modulation\" is a common 3-mark question. Write the four points (antenna size with a number, power radiated, mixing of signals, range) and draw the block diagram of a communication system with the noise arrow entering at the channel.",
          },
          {
            type: "keypoints",
            items: [
              "Communication system: source → transducer → transmitter → channel (+ noise) → receiver → output transducer.",
              "Simplex, half duplex and full duplex describe the direction of information flow.",
              "Bandwidth is the range of frequencies a signal occupies or a channel passes.",
              "Modulation is needed for practical antenna size, more radiated power, no mixing of signals and greater range.",
              "λ = c/f; minimum antenna length is about λ/4.",
            ],
          },
        ],
        flashcards: [
          { front: "Transducer", back: "A device that converts one form of energy into another, e.g. a microphone (sound → electrical) or a loudspeaker (electrical → sound)." },
          { front: "Modulation", back: "Changing the amplitude, frequency or phase of a high-frequency carrier in step with the instantaneous value of the message signal." },
          { front: "Carrier wave", back: "A high-frequency sinusoidal wave, produced by an oscillator in the transmitter, that carries the message." },
          { front: "Baseband signal", back: "The original low-frequency message signal before modulation (also called the modulating signal)." },
          { front: "Full duplex example", back: "A telephone or mobile phone call: both people can talk and listen at the same time." },
          { front: "Antenna length needed for a 3 kHz audio signal", back: "λ = 10⁵ m, so λ/4 = 25 km, which is impractical. Hence the need for modulation." },
          { front: "Internal noise", back: "Noise produced inside the circuit itself, e.g. thermal noise in resistors and shot noise in transistors." },
          { front: "FM broadcast band in India", back: "88 MHz to 108 MHz (VHF band)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which block of a communication system is the main place where noise enters?",
            options: ["Information source", "Channel", "Output transducer", "Destination"],
            answer: 1,
            explain: "Noise is added mostly while the signal travels through the channel, though some internal noise is also added in the receiver.",
          },
          {
            kind: "numeric",
            q: "A transmitter uses a carrier of 750 kHz. Find the length (in m) of a quarter-wave antenna. (c = 3 × 10⁸ m/s)",
            answer: 100,
            tolerance: 1,
            unit: "m",
            explain: "λ = 3 × 10⁸ / 7.5 × 10⁵ = 400 m; λ/4 = 100 m.",
          },
          {
            kind: "truefalse",
            q: "Radio and television broadcasting are examples of simplex communication.",
            answer: true,
            explain: "Information flows only from the station to the listeners or viewers.",
          },
          {
            kind: "fill",
            q: "The power radiated by a linear antenna of length l is proportional to (l/___)².",
            answer: ["λ", "lambda", "wavelength"],
            explain: "Power ∝ (l/λ)², so for a fixed antenna length, a shorter wavelength (higher frequency) radiates more power.",
          },
          {
            kind: "multi",
            q: "Which of these are reasons for modulation? (Select all that apply.)",
            options: ["Practical antenna size", "To reduce the frequency of the carrier", "To avoid mixing of signals from different stations", "To increase the effective power radiated"],
            answers: [0, 2, 3],
            explain: "Modulation does not reduce the carrier frequency. The carrier is deliberately chosen high.",
          },
          {
            kind: "mcq",
            q: "FM radio broadcasting in India lies in which band?",
            options: ["MF", "HF", "VHF", "SHF"],
            answer: 2,
            explain: "88–108 MHz lies in VHF (30–300 MHz).",
          },
          {
            kind: "mcq",
            q: "The bandwidth needed for telephone-quality speech is about",
            options: ["300 Hz to 3.4 kHz", "20 Hz to 20 kHz", "88 MHz to 108 MHz", "4.2 MHz"],
            answer: 0,
            explain: "Telephone systems pass about 300–3400 Hz; full music needs 20 Hz–20 kHz.",
          },
          {
            kind: "numeric",
            q: "How many times greater is the power radiated by the same antenna at 1 MHz than at 100 kHz? (Use P ∝ (l/λ)².)",
            answer: 100,
            difficulty: 2,
            hint: "P ∝ 1/λ² ∝ f².",
            explain: "Frequency is 10 times higher, so λ is 10 times smaller and P rises by 10² = 100 times.",
          },
        ],
      },
      {
        slug: "c12-ele-amplitude-modulation",
        title: "Amplitude Modulation, AM Transmitter and Receiver",
        summary: "The AM wave and its equation, modulation index, sidebands and bandwidth, power in an AM wave, the AM transmitter, the diode detector and the superheterodyne receiver.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "〰️",
            caption: "On a CRO an AM wave looks like a fast carrier squeezed inside a slow outline. That outline, the envelope, is the voice.",
          },
          {
            type: "text",
            md: t`In **amplitude modulation (AM)** the amplitude of the carrier is varied in step with the instantaneous value of the modulating signal, while the carrier frequency and phase stay constant.

Let the carrier be $v_c = V_c \sin \omega_c t$ and the message be $v_m = V_m \sin \omega_m t$, with $\omega_c \gg \omega_m$. The amplitude of the AM wave becomes $V_c + V_m \sin \omega_m t$.`,
          },
          {
            type: "formula",
            tex: t`v_{AM} = V_c\,[1 + m \sin \omega_m t]\,\sin \omega_c t, \qquad m = \frac{V_m}{V_c}`,
            caption: "Equation of an AM wave; m is the modulation index (also called depth of modulation).",
          },
          {
            type: "text",
            md: t`The **modulation index** $m$ (or modulation factor) is the ratio of the message amplitude to the carrier amplitude. Expressed as a percentage, it is the **percentage modulation**. From a CRO trace, $m = \dfrac{V_{max} - V_{min}}{V_{max} + V_{min}}$.

When $m < 1$ (under-modulation) the envelope is a faithful copy of the message. At $m = 1$ (100% modulation) the envelope just touches zero. When $m > 1$ (**over-modulation**) the envelope is clipped and the received signal is distorted. So $m$ is kept at or below 1.`,
          },
          {
            type: "text",
            md: t`Expanding with $\sin A \sin B = \tfrac{1}{2}[\cos(A - B) - \cos(A + B)]$:

$v_{AM} = V_c \sin \omega_c t + \dfrac{mV_c}{2}\cos(\omega_c - \omega_m)t - \dfrac{mV_c}{2}\cos(\omega_c + \omega_m)t$

So the AM wave contains three frequencies: the **carrier** $f_c$, the **lower side band (LSB)** $f_c - f_m$ and the **upper side band (USB)** $f_c + f_m$, each sideband with amplitude $mV_c/2$. The **bandwidth** is $(f_c + f_m) - (f_c - f_m) = 2f_m$.`,
          },
          {
            type: "formula",
            tex: t`P_t = P_c\left(1 + \frac{m^2}{2}\right), \qquad I_t = I_c\sqrt{1 + \frac{m^2}{2}}, \qquad \eta = \frac{m^2}{2 + m^2}`,
            caption: "Total power, total antenna current and transmission efficiency (sideband power ÷ total power) of an AM wave. Each sideband carries Pc m²/4.",
          },
          {
            type: "example",
            title: "Sidebands, bandwidth and power",
            problem: "A 1 MHz carrier of power 400 W is amplitude modulated by a 5 kHz tone to a depth of 80%. Find (a) the sideband frequencies, (b) the bandwidth, (c) the total power, (d) the power in each sideband and (e) the efficiency.",
            steps: [
              "(a) USB = 1000 + 5 = 1005 kHz; LSB = 1000 − 5 = 995 kHz.",
              "(b) Bandwidth = 2fm = 2 × 5 = 10 kHz.",
              t`(c) $P_t = 400\left(1 + \frac{0.8^2}{2}\right) = 400 \times 1.32 = 528$ W.`,
              t`(d) Total sideband power = 528 − 400 = 128 W, so each sideband carries 64 W (check: $P_c m^2/4 = 400 \times 0.64/4 = 64$ W).`,
              t`(e) $\eta = 128/528 = 0.242$, i.e. about 24.2%.`,
            ],
            answer: "995 kHz and 1005 kHz; BW = 10 kHz; Pt = 528 W; 64 W per sideband; efficiency ≈ 24.2%.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "On a CRO, an AM wave has Vmax = 15 V and Vmin = 5 V. Find the modulation index.",
                answer: 0.5,
                tolerance: 0.01,
                explain: "m = (15 − 5)/(15 + 5) = 10/20 = 0.5, i.e. 50% modulation.",
              },
              {
                kind: "numeric",
                q: "With 100% modulation, what fraction (in %) of the total AM power is in the two sidebands together?",
                answer: 33.3,
                tolerance: 0.2,
                unit: "%",
                explain: "η = m²/(2 + m²) = 1/3 ≈ 33.3%. Even at best, two-thirds of the power is in the carrier, which carries no information.",
              },
            ],
          },
          {
            type: "text",
            md: "**AM transmitter (block diagram, in order):** a crystal **oscillator** generates a stable carrier; a **buffer amplifier** isolates the oscillator from later stages; a **frequency multiplier / RF power amplifier** raises the carrier to the required frequency and power. On the other path, the **microphone** and **audio (AF) amplifiers** raise the message level. The **modulated (class C) RF amplifier** combines the two (high-level modulation), and the AM wave is fed to the **antenna**.\n\n**Demodulation (detection)** is recovering the message from the modulated wave. A simple **diode detector (envelope detector)** has a diode followed by an RC filter. The diode removes one half of the AM wave; the capacitor charges to the peaks and discharges slowly through R, so the output follows the envelope. The time constant must satisfy 1/fc ≪ RC ≪ 1/fm.",
          },
          {
            type: "text",
            md: "**Superheterodyne receiver:** the antenna feeds an **RF amplifier** (tuned to the wanted station). The **mixer** combines this signal with the output of a **local oscillator** that is always 455 kHz above the station frequency (ganged tuning). The mixer output at the difference frequency, the **intermediate frequency (IF) of 455 kHz**, goes to fixed-tuned **IF amplifiers** that give most of the gain and selectivity. The **detector** recovers the audio, the **AF amplifier** and **power amplifier** drive the **loudspeaker**, and **AGC** (automatic gain control) feeds a DC voltage back from the detector to keep the output steady for strong and weak stations.\n\nAdvantage: every station is converted to the same IF, so the IF amplifiers can be designed once for high gain, good **selectivity** (rejecting nearby stations) and **sensitivity** (picking up weak signals).",
          },
          {
            type: "example",
            title: "Local oscillator and image frequency",
            problem: "A superheterodyne receiver with IF = 455 kHz is tuned to 1000 kHz. Find the local oscillator frequency and the image frequency.",
            steps: [
              "The local oscillator runs above the signal: fLO = fs + IF = 1000 + 455 = 1455 kHz.",
              "The image frequency also gives a 455 kHz difference with the LO, but from above: fimage = fLO + IF = fs + 2 × IF.",
              "fimage = 1000 + 910 = 1910 kHz. A tuned RF amplifier before the mixer rejects it.",
            ],
            answer: "fLO = 1455 kHz; image frequency = 1910 kHz.",
          },
          {
            type: "mistake",
            wrong: "In AM, more modulation is always better, so m = 1.5 gives a louder, better signal than m = 0.8.",
            right: "For m > 1 the carrier is over-modulated: the envelope is cut off near zero and the receiver output is distorted. The useful range is 0 < m ≤ 1.",
            why: "Higher m does put more power in the sidebands (more useful power), so pushing m up seems good. Beyond 1, the envelope no longer has the shape of the message.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Arrange the stages of a superheterodyne receiver from antenna to speaker.",
              items: ["RF amplifier", "Mixer (with local oscillator)", "IF amplifier (455 kHz)", "Detector", "AF and power amplifier", "Loudspeaker"],
              explain: "The mixer converts every station to the same 455 kHz IF; most of the gain and selectivity comes from the fixed IF stages.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tip",
            md: "For the AM derivation (usually 5 marks), write the carrier and message equations, the AM equation, expand using the sin A sin B identity, then name the three frequencies and state bandwidth = 2fm. Draw the frequency spectrum: a tall line at fc with two shorter lines of height mVc/2 at fc ± fm.",
          },
          {
            type: "keypoints",
            items: [
              "AM: carrier amplitude follows the message; v = Vc[1 + m sin ωmt] sin ωct.",
              "m = Vm/Vc = (Vmax − Vmin)/(Vmax + Vmin); keep m ≤ 1 to avoid over-modulation.",
              "AM contains fc, fc − fm and fc + fm; bandwidth = 2fm.",
              "Pt = Pc(1 + m²/2); each sideband Pc m²/4; maximum efficiency 33.3% at m = 1.",
              "Superheterodyne: RF amp → mixer + LO → IF amp (455 kHz) → detector → AF amp → speaker, with AGC.",
            ],
          },
        ],
        flashcards: [
          { front: "Modulation index of AM", back: "m = Vm/Vc, the ratio of message amplitude to carrier amplitude. From a CRO: m = (Vmax − Vmin)/(Vmax + Vmin)." },
          { front: "Frequencies present in an AM wave", back: "Carrier fc, lower sideband fc − fm, upper sideband fc + fm." },
          { front: "Bandwidth of AM", back: "2fm, twice the highest modulating frequency." },
          { front: "Total power of AM wave", back: "Pt = Pc(1 + m²/2)." },
          { front: "Over-modulation", back: "m > 1. The envelope is clipped and the detected output is distorted." },
          { front: "Intermediate frequency of an AM broadcast receiver", back: "455 kHz." },
          { front: "Image frequency", back: "fs + 2 × IF; an unwanted station that also mixes to the IF. Rejected by the RF tuned stage." },
          { front: "Condition on RC in a diode detector", back: "1/fc ≪ RC ≪ 1/fm, so the capacitor ignores carrier cycles but follows the envelope." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A carrier of amplitude 10 V is modulated by a message of amplitude 6 V. Find the percentage modulation.",
            answer: 60,
            tolerance: 0.5,
            unit: "%",
            explain: "m = 6/10 = 0.6, i.e. 60%.",
          },
          {
            kind: "mcq",
            q: "A 600 kHz carrier is amplitude modulated by a 4 kHz tone. The frequencies present are",
            options: ["600 kHz only", "596 kHz and 604 kHz only", "596 kHz, 600 kHz and 604 kHz", "4 kHz and 600 kHz"],
            answer: 2,
            explain: "AM has the carrier and two sidebands at fc ± fm. The 4 kHz message itself is not transmitted.",
          },
          {
            kind: "numeric",
            q: "The antenna current of an unmodulated AM transmitter is 8 A. Find the current (in A) when the carrier is modulated to 60%.",
            answer: 8.69,
            tolerance: 0.02,
            unit: "A",
            difficulty: 2,
            hint: "It = Ic √(1 + m²/2).",
            explain: "It = 8 √(1 + 0.36/2) = 8 √1.18 = 8 × 1.0863 ≈ 8.69 A.",
          },
          {
            kind: "numeric",
            q: "An AM wave has a carrier power of 1 kW and a total power of 1.125 kW. Find the modulation index.",
            answer: 0.5,
            tolerance: 0.01,
            difficulty: 2,
            explain: "1.125 = 1 + m²/2, so m² = 0.25 and m = 0.5.",
          },
          {
            kind: "truefalse",
            q: "In a superheterodyne receiver tuned to 700 kHz, the local oscillator runs at 1155 kHz.",
            answer: true,
            explain: "fLO = fs + IF = 700 + 455 = 1155 kHz.",
          },
          {
            kind: "mcq",
            q: "What is the main job of the IF amplifiers in a superheterodyne receiver?",
            options: ["To generate the carrier", "To provide most of the gain and selectivity at a fixed frequency", "To remove the audio", "To produce the image frequency"],
            answer: 1,
            explain: "Because every station is converted to 455 kHz, the IF stages can be tuned once for high gain and sharp selectivity.",
          },
          {
            kind: "fill",
            q: "The circuit in a receiver that keeps the output nearly constant for strong and weak stations is called ___.",
            answer: ["AGC", "automatic gain control"],
            explain: "AGC feeds back a DC voltage from the detector that reduces the gain of the RF/IF stages for strong signals.",
          },
          {
            kind: "numeric",
            q: "An AM broadcast station may use a bandwidth of 10 kHz. What is the highest audio frequency (in kHz) it can transmit?",
            answer: 5,
            tolerance: 0.01,
            unit: "kHz",
            explain: "Bandwidth = 2fm, so fm = 10/2 = 5 kHz.",
          },
        ],
      },
      {
        slug: "c12-ele-fm-digital",
        title: "Frequency Modulation and Digital Communication",
        summary: "FM: frequency deviation, modulation index, Carson's rule and comparison with AM; pulse modulation, the sampling theorem, PCM and digital modulation (ASK, FSK, PSK).",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🎶",
            caption: "Drive under a power line with AM radio on and you hear crackle. Switch to FM and the music stays clean. Why?",
          },
          {
            type: "text",
            md: "In **frequency modulation (FM)** the frequency of the carrier is varied in step with the instantaneous value of the message, while the amplitude stays constant.\n\nWhen the message is positive the carrier frequency rises above fc; when it is negative the frequency falls below fc. The amount of change depends on the message **amplitude**; how many times per second it swings depends on the message **frequency**.",
          },
          {
            type: "text",
            md: t`**Frequency deviation** $\Delta f$ is the maximum change of carrier frequency from $f_c$. It is proportional to the message amplitude: $\Delta f = k_f V_m$. The **carrier swing** is $2\Delta f$ (from $f_c - \Delta f$ to $f_c + \Delta f$).

The **modulation index** of FM is $m_f = \Delta f / f_m$. Unlike AM, $m_f$ can be greater than 1. FM produces many sidebands, spaced $f_m$ apart, so its bandwidth is larger than AM.`,
          },
          {
            type: "formula",
            tex: t`m_f = \frac{\Delta f}{f_m}, \qquad BW \approx 2(\Delta f + f_m) \ \ (\text{Carson's rule}), \qquad \%\ \text{modulation} = \frac{\Delta f_{actual}}{\Delta f_{max}}\times 100`,
            caption: "FM modulation index, bandwidth by Carson's rule and percentage modulation. Broadcast FM allows Δf max = 75 kHz.",
          },
          {
            type: "example",
            title: "FM bandwidth",
            problem: "An FM broadcast station has a maximum frequency deviation of 75 kHz and the highest audio frequency is 15 kHz. Find the modulation index, the carrier swing and the bandwidth by Carson's rule.",
            steps: [
              t`$m_f = \Delta f / f_m = 75 / 15 = 5$.`,
              t`Carrier swing $= 2\Delta f = 150$ kHz.`,
              t`$BW = 2(\Delta f + f_m) = 2(75 + 15) = 180$ kHz.`,
            ],
            answer: "mf = 5, carrier swing = 150 kHz, bandwidth ≈ 180 kHz. Compare with only 30 kHz (2 × 15) for AM with the same audio.",
          },
          {
            type: "table",
            headers: ["Feature", "AM", "FM"],
            rows: [
              ["What varies", "Amplitude of carrier", "Frequency of carrier"],
              ["Noise", "Noise adds to amplitude, so it is heard", "Amplitude noise is removed by a limiter; much better noise immunity"],
              ["Bandwidth", "Small: 2fm (10 kHz for broadcast)", "Large: about 200 kHz per broadcast channel"],
              ["Transmitted power", "Depends on m; most of it is in the carrier", "Constant; all power is useful"],
              ["Range and band", "Long range (MF, ground wave); 530–1600 kHz", "Line of sight (VHF); 88–108 MHz"],
              ["Circuits", "Simpler and cheaper", "More complex"],
            ],
          },
          {
            type: "text",
            md: "**FM transmitter** in brief: the audio is amplified and given **pre-emphasis** (extra boost to high audio frequencies, which suffer more from noise). It drives a **reactance modulator** (or a varactor diode) that changes the tank-circuit capacitance of the oscillator, so the oscillator frequency follows the audio. Frequency multipliers and a power amplifier follow. The **FM receiver** is a superheterodyne with IF = **10.7 MHz**, a **limiter** that removes amplitude variations (noise), a **discriminator** (ratio detector or Foster–Seeley) that turns frequency changes back into voltage, and **de-emphasis** to undo the pre-emphasis.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 10 kHz tone produces a frequency deviation of 50 kHz. Find the FM modulation index.",
                answer: 5,
                tolerance: 0.01,
                explain: "mf = Δf/fm = 50/10 = 5.",
              },
              {
                kind: "mcq",
                q: "Which stage of an FM receiver removes amplitude noise?",
                options: ["Mixer", "Limiter", "Local oscillator", "De-emphasis network"],
                answer: 1,
                explain: "The limiter clips the IF signal to a constant amplitude, so noise riding on the amplitude is removed before the discriminator.",
              },
            ],
          },
          {
            type: "text",
            md: "**Digital communication** sends information as a stream of discrete symbols (bits). The first step for an analog message is **sampling**: measuring its value at regular instants.\n\n**Sampling theorem:** a band-limited signal whose highest frequency is fm can be recovered exactly from its samples if the sampling frequency fs ≥ 2fm. The minimum rate 2fm is the **Nyquist rate**. Sampling slower causes **aliasing** (distortion).\n\n**Pulse modulation** uses a pulse train as carrier: **PAM** (amplitude of pulses varies), **PWM/PDM** (width varies), **PPM** (position varies). In **PCM (pulse code modulation)** each sample is **quantised** to one of 2ⁿ levels and **encoded** as an n-bit binary number.",
          },
          {
            type: "example",
            title: "Bit rate of a PCM telephone channel",
            problem: "Speech is band-limited to 4 kHz and coded in PCM with 256 quantisation levels. Find the Nyquist rate, the number of bits per sample and the bit rate.",
            steps: [
              "Nyquist rate = 2fm = 2 × 4 kHz = 8 kHz, i.e. 8000 samples per second.",
              "256 = 2⁸, so n = 8 bits per sample.",
              "Bit rate = 8000 × 8 = 64 000 bit/s = 64 kbit/s.",
            ],
            answer: "8 kHz sampling, 8 bits per sample, 64 kbit/s.",
          },
          {
            type: "text",
            md: "**Digital carrier modulation** (for sending bits over radio): **ASK** (amplitude shift keying: carrier ON for 1, OFF or low for 0), **FSK** (frequency shift keying: one frequency for 1, another for 0), **PSK** (phase shift keying: carrier phase 0° for 1, 180° for 0).\n\nAdvantages of digital communication: high noise immunity (a receiver only has to decide 0 or 1, and **repeaters** can regenerate clean pulses), error detection and correction, easy encryption, and easy storage and processing by computers. Disadvantage: needs more bandwidth and accurate synchronisation.",
          },
          {
            type: "mistake",
            wrong: "In FM, a louder note makes the carrier frequency change faster.",
            right: "A louder note (larger amplitude) makes the frequency deviation larger. A higher-pitched note (larger fm) makes the carrier frequency swing back and forth more times per second.",
            why: "Both 'more' and 'faster' sound like stronger modulation, so they get mixed up. Δf = kf Vm depends only on amplitude; the rate of swing equals fm.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each statement true of AM or FM?",
              groups: ["AM", "FM"],
              items: [
                { text: "Bandwidth is exactly 2fm", group: 0, hint: "Only two sidebands." },
                { text: "Modulation index can exceed 1 without distortion", group: 1, hint: "mf = Δf/fm, often 5 for broadcast." },
                { text: "Uses IF of 10.7 MHz in the receiver", group: 1, hint: "The broadcast AM IF is 455 kHz." },
                { text: "Transmitted power changes with modulation", group: 0, hint: "Pt = Pc(1 + m²/2)." },
                { text: "Uses a limiter and discriminator", group: 1, hint: "These remove amplitude noise and detect frequency changes." },
                { text: "Travels far by ground wave in the MF band", group: 0, hint: "Medium wave broadcasts cover long distances." },
              ],
              explain: "AM is narrow-band and simple but noisy; FM uses more bandwidth to buy noise immunity and constant transmitted power.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tip",
            md: "Learn the AM vs FM comparison as a five-row table; it is asked almost every year. In numericals, always write the formula first, then substitute with units: mf = Δf/fm and BW = 2(Δf + fm). For PCM, bit rate = sampling rate × bits per sample.",
          },
          {
            type: "keypoints",
            items: [
              "FM: carrier frequency follows the message; amplitude is constant.",
              "Δf ∝ message amplitude; mf = Δf/fm; Carson's bandwidth ≈ 2(Δf + fm).",
              "FM has better noise immunity but needs more bandwidth; broadcast FM IF is 10.7 MHz.",
              "Sampling theorem: fs ≥ 2fm (Nyquist rate); PCM samples, quantises and encodes.",
              "ASK, FSK and PSK change amplitude, frequency or phase of a carrier for binary data.",
            ],
          },
        ],
        flashcards: [
          { front: "Frequency deviation", back: "The maximum shift of the FM carrier from its rest frequency; proportional to message amplitude." },
          { front: "FM modulation index", back: "mf = Δf/fm; it can be greater than 1." },
          { front: "Carson's rule", back: "FM bandwidth ≈ 2(Δf + fm)." },
          { front: "Pre-emphasis", back: "Boosting high audio frequencies at the FM transmitter to improve their signal-to-noise ratio; undone by de-emphasis in the receiver." },
          { front: "Sampling theorem", back: "A signal with highest frequency fm can be recovered from samples taken at fs ≥ 2fm." },
          { front: "Steps of PCM", back: "Sampling → quantisation → encoding into binary." },
          { front: "PSK", back: "Phase shift keying: binary 1 and 0 are sent as carrier phases differing by 180°." },
          { front: "Why does FM have less noise than AM?", back: "Noise mostly changes amplitude; FM carries information in frequency, and the limiter removes amplitude variations." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An FM signal has a carrier swing of 100 kHz. What is the frequency deviation (in kHz)?",
            answer: 50,
            tolerance: 0.01,
            unit: "kHz",
            explain: "Carrier swing = 2Δf, so Δf = 50 kHz.",
          },
          {
            kind: "numeric",
            q: "Find the Carson bandwidth (in kHz) of an FM signal with Δf = 25 kHz and fm = 5 kHz.",
            answer: 60,
            tolerance: 0.01,
            unit: "kHz",
            explain: "BW = 2(25 + 5) = 60 kHz.",
          },
          {
            kind: "numeric",
            q: "A broadcast FM station (maximum allowed deviation 75 kHz) has an actual deviation of 60 kHz. Find the percentage modulation.",
            answer: 80,
            tolerance: 0.5,
            unit: "%",
            difficulty: 2,
            explain: "Percentage modulation = 60/75 × 100 = 80%.",
          },
          {
            kind: "mcq",
            q: "A signal has frequencies up to 3.4 kHz. The minimum sampling rate is",
            options: ["1.7 kHz", "3.4 kHz", "6.8 kHz", "13.6 kHz"],
            answer: 2,
            explain: "Nyquist rate = 2fm = 6.8 kHz.",
          },
          {
            kind: "numeric",
            q: "A PCM system samples at 10 kHz and uses 128 quantisation levels. Find the bit rate in kbit/s.",
            answer: 70,
            tolerance: 0.01,
            unit: "kbit/s",
            difficulty: 2,
            hint: "128 = 2ⁿ; find n first.",
            explain: "128 = 2⁷, so 7 bits per sample. Bit rate = 10 000 × 7 = 70 kbit/s.",
          },
          {
            kind: "truefalse",
            q: "In FM, the amplitude of the transmitted wave changes with the loudness of the message.",
            answer: false,
            explain: "The amplitude of an FM wave is constant; loudness changes the frequency deviation.",
          },
          {
            kind: "mcq",
            q: "In which digital modulation is a 1 sent as one carrier frequency and a 0 as another?",
            options: ["ASK", "FSK", "PSK", "PAM"],
            answer: 1,
            explain: "Frequency shift keying switches between two frequencies.",
          },
          {
            kind: "multi",
            q: "Which are advantages of digital over analog communication?",
            options: ["Repeaters can regenerate noise-free pulses", "Needs less bandwidth", "Errors can be detected and corrected", "Easy encryption"],
            answers: [0, 2, 3],
            explain: "Digital communication usually needs more bandwidth, not less.",
          },
        ],
      },
      {
        slug: "c12-ele-comm-practice",
        title: "Communication Systems: Board Practice",
        summary: "Mixed board-style questions on modulation, AM and FM numericals, receivers and digital communication, with answer-writing tips.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "📝",
            caption: "Communication Systems carries both theory and numericals in the II PUC paper. Practise both kinds here.",
          },
          {
            type: "text",
            md: "In the board paper this chapter appears as one-mark definitions (modulation index, bandwidth, IF), two- and three-mark reasons and comparisons (need for modulation, AM vs FM, superheterodyne advantages), five-mark derivations or block diagrams (AM equation, superheterodyne receiver), and numericals on m, power, bandwidth and antenna length.",
          },
          {
            type: "table",
            headers: ["Quantity", "Formula"],
            rows: [
              ["Wavelength, antenna", "λ = c/f; l ≈ λ/4"],
              ["AM index", "m = Vm/Vc = (Vmax − Vmin)/(Vmax + Vmin)"],
              ["AM sidebands, bandwidth", "fc ± fm; BW = 2fm"],
              ["AM power and current", "Pt = Pc(1 + m²/2); It = Ic√(1 + m²/2)"],
              ["Superheterodyne", "fLO = fs + IF; fimage = fs + 2 IF"],
              ["FM", "mf = Δf/fm; BW ≈ 2(Δf + fm); swing = 2Δf"],
              ["PCM", "fs ≥ 2fm; levels = 2ⁿ; bit rate = fs × n"],
            ],
          },
          {
            type: "example",
            title: "Board numerical: finding Vmax and Vmin",
            problem: "A carrier of peak amplitude 20 V is amplitude modulated to a depth of 40%. Find the maximum and minimum amplitudes of the AM wave and the peak amplitude of each sideband.",
            steps: [
              "Vm = m Vc = 0.4 × 20 = 8 V.",
              "Vmax = Vc + Vm = 20 + 8 = 28 V; Vmin = Vc − Vm = 20 − 8 = 12 V.",
              "Check: (28 − 12)/(28 + 12) = 16/40 = 0.4. Correct.",
              "Each sideband has amplitude mVc/2 = 0.4 × 20/2 = 4 V.",
            ],
            answer: "Vmax = 28 V, Vmin = 12 V, each sideband 4 V.",
          },
          {
            type: "example",
            title: "Board numerical: total power with two tones",
            problem: "A 500 W carrier is modulated simultaneously by two audio tones with modulation indices 0.3 and 0.4. Find the total power.",
            steps: [
              t`For several tones the effective index is $m = \sqrt{m_1^2 + m_2^2} = \sqrt{0.09 + 0.16} = 0.5$.`,
              t`$P_t = 500\left(1 + \frac{0.25}{2}\right) = 500 \times 1.125 = 562.5$ W.`,
            ],
            answer: "Pt = 562.5 W.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "An AM transmitter radiates 10 kW of carrier power. Find the total power (in kW) at 100% modulation.",
                answer: 15,
                tolerance: 0.01,
                unit: "kW",
                explain: "Pt = 10(1 + 1/2) = 15 kW.",
              },
              {
                kind: "numeric",
                q: "A receiver with IF 455 kHz is tuned to 1200 kHz. Find the image frequency in kHz.",
                answer: 2110,
                tolerance: 0.5,
                unit: "kHz",
                explain: "fimage = fs + 2 IF = 1200 + 910 = 2110 kHz.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "AM bandwidth = fc + fm, so a 1 MHz carrier with a 5 kHz tone needs 1005 kHz of bandwidth.",
            right: "Bandwidth is the width of the band occupied: from fc − fm to fc + fm, i.e. 2fm = 10 kHz. 1005 kHz is only the upper sideband frequency.",
            why: "Students confuse 'the highest frequency present' with 'the range of frequencies occupied'. Bandwidth is always a difference of two frequencies.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Modulation index doubles from 0.4 to 0.8. Sideband power?",
              emoji: "🔊",
              options: ["Doubles", "Becomes four times", "Stays the same", "Halves"],
              answer: 1,
              trap: 0,
              explain: "Sideband power is Pc m²/2, which depends on m². Doubling m multiplies sideband power by 4 (from 0.08Pc to 0.32Pc).",
            },
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Short answer (1 mark):** Define modulation index of FM. What is the IF of an FM receiver?",
              "**Short answer (2 marks):** Why is the local oscillator frequency kept higher than the signal frequency in a superheterodyne receiver? (Hint: a smaller ratio of maximum to minimum LO frequency is easier to tune with a gang capacitor.)",
              "**Reasoning (3 marks):** Give three advantages of FM over AM and one disadvantage.",
              "**Long answer (5 marks):** With a block diagram, explain the working of a superheterodyne AM receiver.",
              "**Numerical (3 marks):** A 2 MHz carrier is modulated by a 3 kHz tone with m = 0.6. Find the sideband frequencies, bandwidth and efficiency.",
            ],
          },
          {
            type: "example",
            title: "Solution to numerical 5 above",
            problem: "A 2 MHz carrier is modulated by a 3 kHz tone with m = 0.6. Find the sideband frequencies, bandwidth and efficiency.",
            steps: [
              "USB = 2000 + 3 = 2003 kHz; LSB = 2000 − 3 = 1997 kHz.",
              "BW = 2 × 3 = 6 kHz.",
              t`$\eta = \dfrac{m^2}{2 + m^2} = \dfrac{0.36}{2.36} = 0.1525$, about 15.3%.`,
            ],
            answer: "1997 kHz and 2003 kHz; 6 kHz; about 15.3%.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Answer-writing tips",
            md: "Draw block diagrams with labelled arrows and the frequency at each point (for example, 'fs', 'fLO = fs + 455 kHz', '455 kHz'). In numericals, keep frequencies in kHz throughout when all data is in kHz; convert to Hz only when using c = 3 × 10⁸ m/s.",
          },
          {
            type: "keypoints",
            items: [
              "Know the seven formula groups in the table above by heart.",
              "Bandwidth is a difference of frequencies, never fc + fm.",
              "Sideband power depends on m², so it changes faster than m.",
              "For several tones, m = √(m₁² + m₂² + …).",
            ],
          },
        ],
        flashcards: [
          { front: "Vmax and Vmin of AM wave", back: "Vmax = Vc(1 + m), Vmin = Vc(1 − m)." },
          { front: "Amplitude of each AM sideband", back: "mVc/2." },
          { front: "Effective modulation index for two tones", back: "m = √(m₁² + m₂²)." },
          { front: "Power in both sidebands", back: "Pc m²/2." },
          { front: "Image frequency formula", back: "fimage = fs + 2 × IF (LO above signal)." },
          { front: "IF of AM and FM broadcast receivers", back: "AM: 455 kHz; FM: 10.7 MHz." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A carrier of 12 V peak is modulated so that Vmax = 18 V. Find m.",
            answer: 0.5,
            tolerance: 0.01,
            explain: "Vmax = Vc(1 + m): 18 = 12(1 + m), so m = 0.5.",
          },
          {
            kind: "numeric",
            q: "An AM wave has a total power of 600 W at m = 1. Find the carrier power in W.",
            answer: 400,
            tolerance: 0.5,
            unit: "W",
            explain: "600 = Pc × 1.5, so Pc = 400 W.",
          },
          {
            kind: "mcq",
            q: "An AM station at 900 kHz transmits audio up to 4.5 kHz. Its channel occupies",
            options: ["895.5 – 904.5 kHz", "900 – 904.5 kHz", "0 – 904.5 kHz", "895.5 – 900 kHz"],
            answer: 0,
            explain: "fc ± fm = 900 ± 4.5 kHz; bandwidth 9 kHz.",
          },
          {
            kind: "numeric",
            q: "A carrier of 100 MHz is frequency modulated by a 4 kHz tone with mf = 10. Find the frequency deviation in kHz.",
            answer: 40,
            tolerance: 0.01,
            unit: "kHz",
            explain: "Δf = mf × fm = 10 × 4 = 40 kHz.",
          },
          {
            kind: "truefalse",
            q: "The superheterodyne receiver converts every incoming station to the same intermediate frequency.",
            answer: true,
            explain: "The ganged local oscillator always runs IF above the tuned station, so the mixer output is always at the IF.",
          },
          {
            kind: "order",
            q: "Arrange the steps of PCM in order.",
            items: ["Band-limit the analog signal", "Sample at ≥ 2fm", "Quantise each sample", "Encode as binary bits"],
            explain: "A low-pass filter limits the signal, then it is sampled, quantised to 2ⁿ levels and each level is coded in n bits.",
          },
          {
            kind: "numeric",
            q: "Find the quarter-wave antenna length (in m) for a 2.4 GHz Wi-Fi signal. (c = 3 × 10⁸ m/s)",
            answer: 0.03125,
            tolerance: 0.0005,
            unit: "m",
            difficulty: 2,
            explain: "λ = 3 × 10⁸ / 2.4 × 10⁹ = 0.125 m; λ/4 = 0.03125 m ≈ 3.1 cm.",
          },
          {
            kind: "mcq",
            q: "Which detector is used to recover audio from an FM signal?",
            options: ["Diode envelope detector", "Ratio detector (discriminator)", "Mixer", "Crystal oscillator"],
            answer: 1,
            explain: "A discriminator such as the ratio detector converts frequency variations into voltage. The envelope detector is for AM.",
          },
        ],
      },
    ],
  },
];

/** Chapter title ("11:" / "12:" + exact title) → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Communication Systems": "c12-ele-communication",
};
