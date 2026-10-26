import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/*
 * Class 12 Physics — chapter question bank (part 2):
 *   4 Moving Charges and Magnetism · 5 Magnetism and Matter
 *   6 Electromagnetic Induction · 7 Alternating Current
 * All questions are original. Constants used unless stated: mu0 = 4*pi*1e-7 T m/A,
 * e = 1.6e-19 C, m_p = 1.67e-27 kg, m_e = 9.1e-31 kg, g = 10 m/s^2.
 */

const t = String.raw;

/** Compact authoring shape: `a` array => multi, `o` present => mcq, otherwise numeric. */
type Raw = {
  d: 1 | 2 | 3;
  ex: ExamId[];
  time: number;
  q: string;
  o?: string[];
  a: number | number[];
  tol?: number;
  unit?: string;
  e: string;
  h?: string;
};

function chapter(no: string, title: string, raws: Raw[]): ExamQuestion[] {
  return raws.map((r, i) => {
    const base = {
      id: `phy12-2-${no}-${String(i + 1).padStart(3, "0")}`,
      subject: "physics" as const,
      chapter: title,
      grade: "12" as const,
      exams: r.ex,
      difficulty: r.d,
      idealTime: r.time,
      q: r.q,
      explain: r.e,
      ...(r.h ? { hint: r.h } : {}),
    };
    if (Array.isArray(r.a)) return { ...base, kind: "multi", options: r.o ?? [], answers: r.a } as ExamQuestion;
    if (r.o) return { ...base, kind: "mcq", options: r.o, answer: r.a } as ExamQuestion;
    return {
      ...base,
      kind: "numeric",
      answer: r.a,
      ...(r.tol !== undefined ? { tolerance: r.tol } : {}),
      ...(r.unit ? { unit: r.unit } : {}),
    } as ExamQuestion;
  });
}

const ALL: ExamId[] = ["NEET", "JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["NEET", "JEE", "COMEDK"];
const JEEM: ExamId[] = ["JEE", "COMEDK"];
const ADV: ExamId[] = ["JEE", "JEE_ADV"];
const MULTI: ExamId[] = ["JEE_ADV"];
const CET: ExamId[] = ["KCET", "COMEDK"];

/* ================================================================== */
/* Chapter 4 — Moving Charges and Magnetism                            */
/* ================================================================== */
const C4 = "Moving Charges and Magnetism";
const ch4: Raw[] = [
  {
    d: 1, ex: ALL, time: 45,
    q: t`A charged particle moves with velocity $\vec v$ exactly parallel to a uniform magnetic field $\vec B$. The magnetic force on it is:`,
    o: [t`$qvB$, perpendicular to $\vec v$`, t`zero`, t`$qvB$, along $\vec v$`, t`$qvB/2$, perpendicular to $\vec v$`],
    a: 1,
    e: t`$\vec F = q\,\vec v \times \vec B$ has magnitude $qvB\sin\theta$. For $\vec v \parallel \vec B$, $\theta = 0$ and $\sin 0 = 0$, so the force is zero and the particle keeps moving in a straight line. A magnetic force is never along $\vec v$, so the other options are impossible here.`,
  },
  {
    d: 1, ex: ALL, time: 50,
    q: t`A proton moves at $2\times10^{6}$ m/s perpendicular to a uniform magnetic field of 0.5 T. The magnitude of the magnetic force on it is:`,
    o: [t`$1.6\times10^{-13}$ N`, t`$3.2\times10^{-13}$ N`, t`$0.8\times10^{-13}$ N`, t`$1.6\times10^{-12}$ N`],
    a: 0,
    e: t`$F = qvB = (1.6\times10^{-19})(2\times10^{6})(0.5) = 1.6\times10^{-13}$ N. Forgetting the factor 0.5 gives $3.2\times10^{-13}$ N.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A charged particle moves in a region containing only a uniform magnetic field. Which statement is always true?`,
    o: [
      t`Its kinetic energy increases`,
      t`Its velocity stays constant`,
      t`Its speed stays constant though the direction of velocity may change`,
      t`Its momentum stays constant`,
    ],
    a: 2,
    e: t`The magnetic force $q\vec v\times\vec B$ is always perpendicular to $\vec v$, so it does no work ($\vec F\cdot\vec v = 0$). Speed and kinetic energy are therefore constant, but the direction of $\vec v$ (and hence velocity and momentum as vectors) can change.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`An electron and a proton having equal kinetic energies enter the same uniform magnetic field perpendicular to it. If $r_e$ and $r_p$ are the radii of their circular paths, then:`,
    o: [t`$r_p/r_e = \sqrt{m_p/m_e}$`, t`$r_p/r_e = m_p/m_e$`, t`$r_p = r_e$`, t`$r_p/r_e = \sqrt{m_e/m_p}$`],
    a: 0,
    h: t`Write $r = p/(qB)$ and express momentum in terms of kinetic energy.`,
    e: t`$r = \dfrac{mv}{qB} = \dfrac{\sqrt{2mK}}{qB}$. Both have the same $|q|$, $K$ and $B$, so $r \propto \sqrt m$ and $r_p/r_e = \sqrt{m_p/m_e} \approx 43$. The ratio $m_p/m_e$ would apply only for equal speeds.`,
  },
  {
    d: 2, ex: ALL, time: 50,
    q: t`A charged particle moves in a circle in a uniform magnetic field. If its speed is doubled (field unchanged), then:`,
    o: [
      t`radius doubles and time period doubles`,
      t`radius doubles and time period is unchanged`,
      t`radius is unchanged and time period halves`,
      t`radius becomes four times and time period doubles`,
    ],
    a: 1,
    h: t`Compare $r = mv/(qB)$ with $T = 2\pi r/v$.`,
    e: t`$r = mv/(qB) \propto v$, so $r$ doubles. $T = 2\pi r/v = 2\pi m/(qB)$ is independent of speed, so the period is unchanged. This speed-independence is what makes the cyclotron work.`,
  },
  {
    d: 2, ex: MAIN, time: 75,
    q: t`A proton and an $\alpha$-particle are accelerated from rest through the same potential difference and then enter the same uniform magnetic field perpendicularly. If the ratio of radii is $r_\alpha : r_p = \sqrt{x} : 1$, find $x$.`,
    a: 2,
    h: t`Kinetic energy gained is $qV$; then use $r = \sqrt{2mK}/(qB)$.`,
    e: t`$K = qV$, so $r = \dfrac{\sqrt{2m qV}}{qB} = \dfrac1B\sqrt{\dfrac{2mV}{q}}$, i.e. $r \propto \sqrt{m/q}$. For the $\alpha$-particle $m/q = 4m_p/2e = 2(m_p/e)$; for the proton it is $m_p/e$. So $r_\alpha/r_p = \sqrt2$ and $x = 2$.`,
  },
  {
    d: 2, ex: MAIN, time: 80,
    q: t`A charged particle enters a uniform magnetic field with its velocity making $60^\circ$ with the field. The ratio of the pitch of its helical path to the radius of the helix is:`,
    o: [t`$2\pi/\sqrt3$`, t`$2\pi\sqrt3$`, t`$\pi/\sqrt3$`, t`$\sqrt3\,\pi$`],
    a: 0,
    h: t`The parallel component of velocity sets the pitch; the perpendicular component sets the radius.`,
    e: t`Radius $r = \dfrac{m v\sin\theta}{qB}$; pitch $p = v\cos\theta \cdot T = v\cos\theta\cdot\dfrac{2\pi m}{qB}$. Hence $\dfrac pr = 2\pi\cot\theta = 2\pi\cot 60^\circ = \dfrac{2\pi}{\sqrt3}$. Swapping sine and cosine gives the tempting $2\pi\sqrt3$.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`In a velocity selector the electric field is $3\times10^{4}$ V/m and the magnetic field is 0.02 T (mutually perpendicular, both perpendicular to the beam). Particles passing undeflected have speed:`,
    o: [t`$1.5\times10^{6}$ m/s`, t`$6\times10^{2}$ m/s`, t`$1.5\times10^{4}$ m/s`, t`$6\times10^{6}$ m/s`],
    a: 0,
    e: t`Undeflected when $qE = qvB$, i.e. $v = E/B = 3\times10^{4}/0.02 = 1.5\times10^{6}$ m/s, independent of the charge and mass of the particle. $6\times10^2$ is $E\times B$.`,
  },
  {
    d: 2, ex: ALL, time: 60,
    q: t`The frequency of the alternating voltage needed to operate a cyclotron for protons in a magnetic field of 1.0 T is about ($m_p = 1.67\times10^{-27}$ kg):`,
    o: [t`15.2 MHz`, t`95.8 MHz`, t`7.6 MHz`, t`30.4 MHz`],
    a: 0,
    h: t`The oscillator must match the cyclotron frequency $qB/(2\pi m)$, not the angular frequency.`,
    e: t`$\nu_c = \dfrac{qB}{2\pi m} = \dfrac{1.6\times10^{-19}\times1}{2\pi\times1.67\times10^{-27}} \approx 1.52\times10^{7}$ Hz $= 15.2$ MHz. The value 95.8 MHz is really $\omega = qB/m = 9.58\times10^{7}$ rad/s mistaken for a frequency.`,
  },
  {
    d: 2, ex: JEEM, time: 90,
    q: t`A cyclotron has dees of radius 0.5 m and a magnetic field of 1.0 T. The maximum kinetic energy (in MeV) of the protons it delivers is approximately ($m_p = 1.67\times10^{-27}$ kg):`,
    a: 12, tol: 0.3, unit: "MeV",
    h: t`At the exit radius $R$, $v = qBR/m$.`,
    e: t`$K_{max} = \dfrac{q^2B^2R^2}{2m} = \dfrac{(1.6\times10^{-19})^2(1)^2(0.5)^2}{2\times1.67\times10^{-27}} = \dfrac{6.4\times10^{-39}}{3.34\times10^{-27}} \approx 1.92\times10^{-12}$ J. Dividing by $1.6\times10^{-13}$ J/MeV gives $\approx 12$ MeV.`,
  },
  {
    d: 2, ex: ALL, time: 60,
    q: t`**Assertion (A):** A cyclotron is not suitable for accelerating electrons.<br>**Reason (R):** Because of their very small mass, electrons quickly reach speeds at which relativistic mass increase makes their revolution frequency fall out of step with the fixed oscillator frequency.`,
    o: [
      t`Both A and R are true, and R is the correct explanation of A`,
      t`Both A and R are true, but R is not the correct explanation of A`,
      t`A is true but R is false`,
      t`A is false but R is true`,
    ],
    a: 0,
    h: t`Which quantity in $\nu = qB/(2\pi m)$ changes at high speed?`,
    e: t`The cyclotron relies on $\nu = qB/(2\pi m)$ being constant. An electron gains only a few keV and is already relativistic; its effective mass rises, $\nu$ drops and the electron arrives at the gap out of phase. So A is true and R explains it.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A circular loop of radius 10 cm carries a current of 5 A. The magnetic field at its centre is:`,
    o: [t`$3.14\times10^{-5}$ T`, t`$6.28\times10^{-5}$ T`, t`$1.57\times10^{-5}$ T`, t`$3.14\times10^{-6}$ T`],
    a: 0,
    e: t`$B = \dfrac{\mu_0 I}{2R} = \dfrac{4\pi\times10^{-7}\times5}{2\times0.1} = \dfrac{6.28\times10^{-6}}{0.2} = 3.14\times10^{-5}$ T. Using $R$ instead of $2R$ in the denominator gives the $6.28\times10^{-5}$ T trap.`,
  },
  {
    d: 1, ex: ALL, time: 40,
    q: t`The magnetic field at a distance of 5 cm from a long straight wire carrying 10 A is:`,
    o: [t`$4\times10^{-5}$ T`, t`$2\times10^{-5}$ T`, t`$4\times10^{-4}$ T`, t`$1.26\times10^{-4}$ T`],
    a: 0,
    e: t`$B = \dfrac{\mu_0 I}{2\pi r} = \dfrac{2\times10^{-7}\times10}{0.05} = 4\times10^{-5}$ T.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`For a circular coil of radius $R$, the ratio of the magnetic field at an axial point at distance $\sqrt3R$ from the centre to the field at the centre is:`,
    o: [t`$1/8$`, t`$1/4$`, t`$1/2$`, t`$1/(3\sqrt3)$`],
    a: 0,
    h: t`Use $B_{axis} = \mu_0IR^2/[2(R^2+x^2)^{3/2}]$.`,
    e: t`$\dfrac{B_x}{B_0} = \dfrac{R^3}{(R^2+x^2)^{3/2}} = \dfrac{R^3}{(4R^2)^{3/2}} = \dfrac{R^3}{8R^3} = \dfrac18$.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`A wire carrying current $I$ comes in radially along one diameter line, goes round a semicircle of radius $R$, and leaves radially along the same line on the other side. The magnetic field at the centre of the semicircle is:`,
    o: [t`$\mu_0I/(4R)$`, t`$\mu_0I/(2R)$`, t`$\mu_0I/(4R) + \mu_0I/(2\pi R)$`, t`zero`],
    a: 0,
    h: t`What does Biot–Savart give for a current element pointing straight at (or away from) the field point?`,
    e: t`The straight parts lie on a line through the centre, so $d\vec l \parallel \vec r$ and $d\vec l\times\vec r = 0$: they contribute nothing. The semicircle gives half of a full loop: $\tfrac12\cdot\dfrac{\mu_0I}{2R} = \dfrac{\mu_0I}{4R}$. The third option would be right for a hairpin, where the straight wires are tangent rather than radial.`,
  },
  {
    d: 3, ex: ADV, time: 100,
    q: t`A long hairpin is made of two semi-infinite parallel straight wires joined at their ends by a semicircle of radius $R$. A current $I$ flows through it. The magnetic field at the centre of the semicircle is:`,
    o: [
      t`$\dfrac{\mu_0 I}{4\pi R}(\pi + 2)$`,
      t`$\dfrac{\mu_0 I}{4\pi R}(\pi - 2)$`,
      t`$\dfrac{\mu_0 I}{4R}$`,
      t`$\dfrac{\mu_0 I}{2\pi R}(\pi + 1)$`,
    ],
    a: 0,
    h: t`Each semi-infinite wire ends at the foot of the perpendicular from the centre.`,
    e: t`Semicircle: $\mu_0I/(4R)$. Each semi-infinite wire at perpendicular distance $R$, ending at the foot of the perpendicular: $\dfrac{\mu_0I}{4\pi R}(\sin90^\circ + \sin 0^\circ) = \dfrac{\mu_0I}{4\pi R}$. Current goes out along one wire and back along the other, so all three contributions point the same way. Total $= \dfrac{\mu_0I}{4R} + \dfrac{2\mu_0I}{4\pi R} = \dfrac{\mu_0I}{4\pi R}(\pi + 2)$. Subtracting the wire terms (the $\pi-2$ option) is a sign error.`,
  },
  {
    d: 2, ex: MAIN, time: 75,
    q: t`A square loop of side $a$ carries current $I$. The magnetic field at its centre is:`,
    o: [t`$\dfrac{2\sqrt2\,\mu_0I}{\pi a}$`, t`$\dfrac{\sqrt2\,\mu_0I}{\pi a}$`, t`$\dfrac{\mu_0I}{2a}$`, t`$\dfrac{4\mu_0I}{\pi a}$`],
    a: 0,
    h: t`Each side is a finite wire at distance $a/2$ subtending $\pm45^\circ$.`,
    e: t`One side: $B_1 = \dfrac{\mu_0I}{4\pi(a/2)}(\sin45^\circ + \sin45^\circ) = \dfrac{\mu_0I}{2\pi a}\sqrt2$. Four sides add: $B = \dfrac{4\sqrt2\mu_0I}{2\pi a} = \dfrac{2\sqrt2\mu_0I}{\pi a}$. The $\sqrt2\mu_0I/(\pi a)$ option comes from using distance $a$ instead of $a/2$.`,
  },
  {
    d: 3, ex: ADV, time: 120,
    q: t`The same length of wire is bent once into a circular loop and once into a square loop, and the same current is passed. Find $B_{\text{circle}}/B_{\text{square}}$ at the respective centres (to two decimal places).`,
    a: 0.87, tol: 0.01,
    h: t`Circle radius $L/2\pi$, square side $L/4$; use $B_{sq} = 2\sqrt2\mu_0I/(\pi a)$.`,
    e: t`Circle: $R = L/2\pi$, $B_c = \mu_0I/(2R) = \pi\mu_0I/L$. Square: $a = L/4$, $B_s = \dfrac{2\sqrt2\mu_0I}{\pi(L/4)} = \dfrac{8\sqrt2\mu_0I}{\pi L}$. Ratio $= \dfrac{\pi^2}{8\sqrt2} = \dfrac{9.870}{11.31} \approx 0.87$. The square gives the larger field for the same wire.`,
  },
  {
    d: 1, ex: ALL, time: 40,
    q: t`A closed Amperian loop encloses a wire carrying 5 A upward and another carrying 2 A downward through the loop. The value of $\oint \vec B\cdot d\vec l$ (taking upward current as positive) is:`,
    o: [t`$3\mu_0$`, t`$7\mu_0$`, t`$-3\mu_0$`, t`zero`],
    a: 0,
    e: t`Ampere's law: $\oint\vec B\cdot d\vec l = \mu_0 I_{enc}$ with $I_{enc} = 5 - 2 = 3$ A, so the integral is $3\mu_0$ (SI units). Adding magnitudes gives $7\mu_0$.`,
  },
  {
    d: 2, ex: MAIN, time: 70,
    q: t`A long solid cylindrical wire of radius $R$ carries a steady current uniformly distributed over its cross-section. The ratio of the magnetic field at distance $R/2$ from the axis to that at distance $2R$ is:`,
    o: [t`1 : 1`, t`1 : 4`, t`4 : 1`, t`1 : 2`],
    a: 0,
    h: t`Inside, $B\propto r$; outside, $B\propto 1/r$.`,
    e: t`Inside: $B = \dfrac{\mu_0 I r}{2\pi R^2}$, so at $R/2$: $\dfrac{\mu_0I}{4\pi R}$. Outside: $B = \dfrac{\mu_0I}{2\pi r}$, so at $2R$: $\dfrac{\mu_0I}{4\pi R}$. Equal, ratio 1 : 1.`,
  },
  {
    d: 3, ex: MULTI, time: 120,
    q: t`A long straight conducting pipe has inner radius $a$ and outer radius $b$ and carries current $I$ uniformly spread over its cross-section. Which of the following are correct? ($r$ = distance from axis)`,
    o: [
      t`$B = 0$ for $r < a$`,
      t`$B \propto 1/r$ for $r > b$`,
      t`$B$ is maximum at $r = a$`,
      t`$B$ is continuous at $r = b$`,
    ],
    a: [0, 1, 3],
    h: t`Apply Ampere's law in the three regions; find $I_{enc}(r)$ in the metal.`,
    e: t`$r<a$: no enclosed current, $B=0$ (A true). $a<r<b$: $B = \dfrac{\mu_0 I}{2\pi r}\cdot\dfrac{r^2-a^2}{b^2-a^2}$, which increases with $r$ because $r - a^2/r$ increases. $r>b$: $B = \mu_0I/(2\pi r)$ (B true). At $r=b$ both expressions give $\mu_0I/(2\pi b)$, so $B$ is continuous (D true) and maximum there — not at $r=a$, where $B=0$ (C false).`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A long solenoid has 1000 turns per metre and carries 2 A. The magnetic field well inside it is about:`,
    o: [t`$2.51\times10^{-3}$ T`, t`$1.26\times10^{-3}$ T`, t`$2.51\times10^{-5}$ T`, t`$5.02\times10^{-3}$ T`],
    a: 0,
    e: t`$B = \mu_0 n I = 4\pi\times10^{-7}\times1000\times2 = 8\pi\times10^{-4} \approx 2.51\times10^{-3}$ T.`,
  },
  {
    d: 1, ex: ALL, time: 40,
    q: t`For a long solenoid, the magnetic field at a point on the axis at one end, compared with that at the middle, is:`,
    o: [t`the same`, t`half`, t`double`, t`zero`],
    a: 1,
    e: t`At an end only the turns on one side contribute, so the field is $\tfrac12\mu_0 nI$ — half the value at the middle.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A toroid with 500 turns has mean radius 10 cm and carries 3 A. The magnetic field inside its core (along the mean circle) is:`,
    o: [t`$3\times10^{-3}$ T`, t`$3\times10^{-5}$ T`, t`$1.5\times10^{-3}$ T`, t`$6\times10^{-3}$ T`],
    a: 0,
    e: t`$B = \dfrac{\mu_0 N I}{2\pi r} = \dfrac{2\times10^{-7}\times500\times3}{0.1} = 3\times10^{-3}$ T.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`**Statement I:** The magnetic field inside the windings of an ideal toroid is exactly the same at every point of its cross-section.<br>**Statement II:** The magnetic field in the open space enclosed by an ideal toroid (the central hole) is zero.`,
    o: [
      t`Both Statement I and Statement II are true`,
      t`Statement I is true but Statement II is false`,
      t`Statement I is false but Statement II is true`,
      t`Both statements are false`,
    ],
    a: 2,
    h: t`Ampere's law inside the core gives $B = \mu_0NI/(2\pi r)$ — what does it depend on?`,
    e: t`Inside the windings $B = \mu_0NI/(2\pi r)$ varies as $1/r$ across the cross-section (it is nearly uniform only when the cross-section is thin), so Statement I is false. A circle in the central hole encloses no current, so $B = 0$ there: Statement II is true.`,
  },
  {
    d: 1, ex: ALL, time: 35,
    q: t`Two long parallel wires carry currents in the same direction. They:`,
    o: [t`attract each other`, t`repel each other`, t`exert no force on each other`, t`experience a torque but no net force`],
    a: 0,
    e: t`The field of one wire at the other, crossed with its current, gives a force towards the first wire: like (parallel) currents attract, unlike currents repel — the opposite of the rule for charges.`,
  },
  {
    d: 1, ex: ALL, time: 50,
    q: t`Two long parallel wires 5 cm apart carry 10 A and 15 A. The force per unit length between them is $x\times10^{-4}$ N/m. Find $x$.`,
    a: 6,
    e: t`$\dfrac Fl = \dfrac{\mu_0 I_1I_2}{2\pi d} = \dfrac{2\times10^{-7}\times10\times15}{0.05} = 6\times10^{-4}$ N/m, so $x = 6$.`,
  },
  {
    d: 2, ex: MAIN, time: 75,
    q: t`Three long parallel wires A, B, C lie in a plane, equally spaced a distance $d$ apart (B in the middle), each carrying current $I$ in the same direction. The net force per unit length on wire A is:`,
    o: [
      t`$\dfrac{3\mu_0I^2}{4\pi d}$ towards B`,
      t`$\dfrac{\mu_0I^2}{2\pi d}$ towards B`,
      t`$\dfrac{3\mu_0I^2}{4\pi d}$ away from B`,
      t`zero`,
    ],
    a: 0,
    h: t`Both B and C attract A, from distances $d$ and $2d$.`,
    e: t`All currents parallel, so B and C both pull A the same way (towards B). $f = \dfrac{\mu_0I^2}{2\pi d} + \dfrac{\mu_0I^2}{2\pi(2d)} = \dfrac{\mu_0I^2}{2\pi d}\cdot\dfrac32 = \dfrac{3\mu_0I^2}{4\pi d}$. The force on the middle wire B is zero, which makes "zero" tempting.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A straight wire of length 0.5 m carrying 4 A is placed in a uniform magnetic field of 0.2 T, making $30^\circ$ with the field. The force on it is:`,
    o: [t`0.2 N`, t`0.4 N`, t`0.35 N`, t`0.1 N`],
    a: 0,
    e: t`$F = BIL\sin\theta = 0.2\times4\times0.5\times\sin30^\circ = 0.2$ N. Using $\cos30^\circ$ gives 0.35 N.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`A semicircular wire of radius $R$ carrying current $I$ lies in a plane perpendicular to a uniform magnetic field $B$. The net magnetic force on the wire is:`,
    o: [t`$2BIR$`, t`$\pi BIR$`, t`$BIR$`, t`zero`],
    a: 0,
    h: t`In a uniform field the force on any wire equals that on the straight segment joining its ends.`,
    e: t`$\vec F = I\left(\int d\vec l\right)\times\vec B = I\vec L_{eff}\times\vec B$, where $\vec L_{eff}$ is the vector from start to end — the diameter $2R$. So $F = BI(2R)$. Using the arc length $\pi R$ gives $\pi BIR$.`,
  },
  {
    d: 3, ex: MULTI, time: 100,
    q: t`A plane current loop of magnetic moment $\vec m$ is placed in a uniform magnetic field $\vec B$. Which of the following are correct?`,
    o: [
      t`The net force on the loop is zero`,
      t`The torque on the loop can be non-zero`,
      t`The torque is maximum when the plane of the loop is parallel to $\vec B$`,
      t`The loop is in stable equilibrium when $\vec m$ is antiparallel to $\vec B$`,
    ],
    a: [0, 1, 2],
    h: t`$\vec\tau = \vec m\times\vec B$ and $U = -\vec m\cdot\vec B$.`,
    e: t`In a uniform field $\oint I\,d\vec l\times\vec B = 0$, so net force is zero (A). $\vec\tau = \vec m\times\vec B$ is non-zero in general (B) and is maximum when $\vec m\perp\vec B$, i.e. when the plane of the loop contains $\vec B$ (C). $U = -mB\cos\theta$ is minimum (stable) for $\vec m\parallel\vec B$; antiparallel is unstable equilibrium (D false).`,
  },
  {
    d: 2, ex: ALL, time: 60,
    q: t`A rectangular coil of 100 turns and area $4\times10^{-3}$ m² carries 0.5 A. It is placed in a uniform field of 0.25 T with the plane of the coil parallel to the field. The torque on it is:`,
    o: [t`0.05 N m`, t`zero`, t`0.025 N m`, t`0.5 N m`],
    a: 0,
    h: t`The angle in $\tau = NIAB\sin\theta$ is between the field and the normal to the coil.`,
    e: t`Plane parallel to $\vec B$ means the area vector (normal) is perpendicular to $\vec B$: $\theta = 90^\circ$. $\tau = NIAB = 100\times0.5\times4\times10^{-3}\times0.25 = 0.05$ N m. Taking $\theta = 0$ (angle with the plane) wrongly gives zero.`,
  },
  {
    d: 2, ex: MAIN, time: 75,
    q: t`A coil of 50 turns, area 0.01 m², carries 2 A in a uniform field of 0.3 T. How much work (in J) is needed to turn it from its stable equilibrium orientation to its unstable equilibrium orientation?`,
    a: 0.6, tol: 0.01, unit: "J",
    h: t`$W = U_f - U_i$ with $U = -mB\cos\theta$.`,
    e: t`$m = NIA = 50\times2\times0.01 = 1$ A m². $W = U(180^\circ) - U(0^\circ) = mB - (-mB) = 2mB = 2\times1\times0.3 = 0.6$ J.`,
  },
  {
    d: 2, ex: MAIN, time: 70,
    q: t`In a simple Bohr-type model, an electron revolves in a circular orbit of radius $0.53\times10^{-10}$ m with speed $2.2\times10^{6}$ m/s. The magnetic moment due to this orbital motion is about:`,
    o: [t`$9.3\times10^{-24}$ A m²`, t`$1.87\times10^{-23}$ A m²`, t`$4.7\times10^{-24}$ A m²`, t`$9.3\times10^{-22}$ A m²`],
    a: 0,
    h: t`Equivalent current $I = e/T = ev/(2\pi r)$; then $m = I\pi r^2$.`,
    e: t`$m = \dfrac{ev}{2\pi r}\cdot\pi r^2 = \dfrac{evr}{2} = \dfrac{1.6\times10^{-19}\times2.2\times10^{6}\times0.53\times10^{-10}}{2} \approx 9.3\times10^{-24}$ A m² (close to the Bohr magneton). Forgetting the factor $\tfrac12$ gives $1.87\times10^{-23}$.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`A thin non-conducting ring of mass $M$ carrying charge $Q$ uniformly spread over it rotates about its axis with angular speed $\omega$. The ratio of its magnetic moment to its angular momentum is:`,
    o: [t`$Q/(2M)$`, t`$Q/M$`, t`$2Q/M$`, t`$Q/(4M)$`],
    a: 0,
    h: t`Compute $m = I\pi R^2$ with $I = Q\omega/2\pi$, and $L = MR^2\omega$.`,
    e: t`$I = Q\omega/(2\pi)$, $m = I\pi R^2 = Q\omega R^2/2$; $L = MR^2\omega$. Ratio $= Q/(2M)$, independent of $\omega$ and $R$ — the same gyromagnetic ratio $e/(2m_e)$ as for an orbiting electron.`,
  },
  {
    d: 3, ex: ADV, time: 120,
    q: t`A thin non-conducting disc of radius $R$ carries charge $Q$ uniformly over one face and spins about its axis with angular speed $\omega$. Its magnetic moment is:`,
    o: [t`$Q\omega R^2/4$`, t`$Q\omega R^2/2$`, t`$Q\omega R^2/3$`, t`$Q\omega R^2$`],
    a: 0,
    h: t`Split the disc into rings of radius $r$, width $dr$.`,
    e: t`Ring charge $dq = \sigma\,2\pi r\,dr$ with $\sigma = Q/(\pi R^2)$; its current $dI = dq\,\omega/(2\pi) = \sigma\omega r\,dr$; moment $dm = \pi r^2\,dI = \pi\sigma\omega r^3\,dr$. Integrate: $m = \pi\sigma\omega R^4/4 = Q\omega R^2/4$. ($Q\omega R^2/2$ would be a ring of the same charge.) Check: $L = \tfrac12 MR^2\omega$ gives $m/L = Q/2M$, as expected.`,
  },
  {
    d: 1, ex: ALL, time: 40,
    q: t`In a moving-coil galvanometer the pole pieces are made concave and a soft-iron cylinder is placed inside the coil. The main purpose is to:`,
    o: [
      t`make the field radial so that the deflection is proportional to the current`,
      t`make the field zero inside the coil`,
      t`increase the resistance of the coil`,
      t`make the coil oscillate freely for longer`,
    ],
    a: 0,
    e: t`A radial field keeps the plane of the coil parallel to $\vec B$ at every deflection, so $\tau = NIAB$ for all $\phi$. Balancing with $k\phi$ gives $\phi = (NAB/k)I$ — a linear scale. The soft iron also strengthens the field.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`The number of turns of a galvanometer coil is doubled (keeping the same wire gauge, so its resistance also doubles), all else unchanged. Then:`,
    o: [
      t`current sensitivity doubles, voltage sensitivity is unchanged`,
      t`both current and voltage sensitivity double`,
      t`current sensitivity is unchanged, voltage sensitivity halves`,
      t`both are unchanged`,
    ],
    a: 0,
    h: t`Current sensitivity $= NAB/k$; voltage sensitivity $= NAB/(kR)$.`,
    e: t`$I_s = NAB/k \propto N$ doubles. $V_s = I_s/R = NAB/(kR)$: $N$ and $R$ both double, so $V_s$ is unchanged. This is why more turns does not automatically make a better voltmeter.`,
  },
  {
    d: 1, ex: ALL, time: 60,
    q: t`A galvanometer of resistance 50 Ω gives full-scale deflection for 5 mA. The shunt resistance (in Ω, to two decimal places) needed to convert it into an ammeter of range 0–5 A is:`,
    a: 0.05, tol: 0.002, unit: "Ω",
    e: t`The shunt carries $I - I_g$ at the same p.d.: $I_gG = (I - I_g)S$, so $S = \dfrac{I_gG}{I - I_g} = \dfrac{0.005\times50}{4.995} \approx 0.050$ Ω. A small resistance in parallel.`,
  },
  {
    d: 1, ex: ALL, time: 50,
    q: t`A galvanometer of resistance 20 Ω shows full-scale deflection for 2 mA. To use it as a voltmeter of range 0–10 V, one must connect:`,
    o: [t`4980 Ω in series`, t`5000 Ω in series`, t`5020 Ω in series`, t`4980 Ω in parallel`],
    a: 0,
    e: t`$I_g(G + R) = V$ gives $R = V/I_g - G = 10/0.002 - 20 = 5000 - 20 = 4980$ Ω, in series. 5000 Ω forgets to subtract $G$.`,
  },
  {
    d: 2, ex: ALL, time: 60,
    q: t`Match List-I with List-II.<br>**List-I:** (P) Field at centre of a circular loop (Q) Field inside a long solenoid (R) Field near a long straight wire (S) Field inside a toroid<br>**List-II:** (1) $\mu_0 nI$ (2) $\mu_0I/(2\pi r)$ (3) $\mu_0NI/(2\pi r)$ (4) $\mu_0I/(2R)$`,
    o: [t`P-4, Q-1, R-2, S-3`, t`P-4, Q-3, R-2, S-1`, t`P-2, Q-1, R-4, S-3`, t`P-1, Q-4, R-3, S-2`],
    a: 0,
    h: t`The toroid and the straight wire both have a $2\pi r$ — which one has $N$?`,
    e: t`Loop centre $\mu_0I/(2R)$ (P-4); solenoid $\mu_0nI$ (Q-1); straight wire $\mu_0I/(2\pi r)$ (R-2); toroid $\mu_0NI/(2\pi r)$ (S-3).`,
  },
  {
    d: 3, ex: ADV, time: 120,
    q: t`A particle of mass $m$ and charge $q$ enters, perpendicular to the boundary, a region $0 \le x \le d$ containing a uniform magnetic field $B$ perpendicular to its velocity. The radius of its circular path is $r = 2d$, so it emerges from the far side. The time it spends in the field is $\dfrac{\pi m}{k\,qB}$. Find $k$.`,
    a: 6,
    h: t`Find the angle turned using $r\sin\theta = d$, then $t = \theta/\omega$.`,
    e: t`The centre of the circle lies on the entry boundary. The particle reaches $x = d$ after turning through $\theta$ with $r\sin\theta = d$, so $\sin\theta = 1/2$, $\theta = \pi/6$. With $\omega = qB/m$, $t = \theta/\omega = \dfrac{\pi m}{6qB}$, so $k = 6$.`,
  },
  {
    d: 3, ex: ADV, time: 90,
    q: t`Uniform electric and magnetic fields both point along $+z$. A positive charge is launched with velocity in the $xy$-plane. Its subsequent path is:`,
    o: [
      t`a helix about the $z$-axis direction whose pitch keeps increasing`,
      t`a circle in the $xy$-plane`,
      t`a helix of constant pitch`,
      t`a straight line along $+z$`,
    ],
    a: 0,
    h: t`Treat the motion parallel and perpendicular to $z$ separately.`,
    e: t`Perpendicular to $z$, only $\vec B$ acts: uniform circular motion with fixed period $2\pi m/(qB)$. Along $z$, $\vec E$ gives constant acceleration $qE/m$, so the $z$-velocity grows linearly. Equal time per turn with growing $v_z$ means a helix of increasing pitch.`,
  },
  {
    d: 3, ex: MULTI, time: 150,
    q: t`A positive charge $q$ of mass $m$ is released from rest at the origin in uniform fields $\vec E = E\hat j$ and $\vec B = B\hat k$. Which of the following are correct?`,
    o: [
      t`The path is a cycloid`,
      t`The particle drifts on average with speed $E/B$ along $+x$`,
      t`The maximum speed of the particle is $2E/B$`,
      t`The particle keeps moving along $+y$ with ever-increasing speed`,
    ],
    a: [0, 1, 2],
    h: t`Go to a frame moving with $\vec v_d = \vec E\times\vec B/B^2$.`,
    e: t`In a frame moving with $\vec v_d = \vec E\times\vec B/B^2 = (E/B)\hat j\times\hat k = (E/B)\hat i$, the electric field vanishes and the particle (velocity $-E/B\,\hat i$ there) moves in a circle. Back in the lab frame: a cycloid (A) with average drift $E/B$ along $+x$ (B); speed ranges from 0 to $E/B + E/B = 2E/B$ (C). The $y$-displacement is bounded by $2mE/(qB^2)$, so D is false.`,
  },
  {
    d: 2, ex: MAIN, time: 60,
    q: t`Two concentric coplanar circular loops have radii $R$ and $2R$ and carry currents $I_1$ and $I_2$ in opposite senses. The field at the common centre is zero. Find $I_2/I_1$.`,
    a: 2,
    h: t`Set $\mu_0I_1/(2R) = \mu_0I_2/(2\cdot2R)$.`,
    e: t`Opposite senses give opposite fields: $\dfrac{\mu_0I_1}{2R} = \dfrac{\mu_0I_2}{4R}$, so $I_2 = 2I_1$ and $I_2/I_1 = 2$.`,
  },
  {
    d: 2, ex: ALL, time: 55,
    q: t`Two identical circular coils of radius $R$ share a common centre with their planes perpendicular to each other. Each carries current $I$. The magnitude of the field at the common centre is:`,
    o: [t`$\sqrt2\,\mu_0I/(2R)$`, t`$\mu_0I/R$`, t`zero`, t`$\mu_0I/(2R)$`],
    a: 0,
    h: t`The two fields are perpendicular vectors.`,
    e: t`Each coil gives $\mu_0I/(2R)$ along its own axis; the axes are perpendicular, so $B = \sqrt2\cdot\mu_0I/(2R) = \mu_0I/(\sqrt2R)$. Adding them as scalars gives $\mu_0I/R$.`,
  },
  {
    d: 3, ex: ADV, time: 100,
    q: t`A long straight wire carries current $I_1$. A rectangular loop carrying $I_2$ lies in the same plane, with its sides of length $a$ parallel to the wire at distances $d$ and $d+b$. The current in the nearer side is parallel to $I_1$. The net force on the loop is:`,
    o: [
      t`$\dfrac{\mu_0 I_1I_2 a}{2\pi}\left(\dfrac1d - \dfrac1{d+b}\right)$ towards the wire`,
      t`$\dfrac{\mu_0 I_1I_2 a}{2\pi}\left(\dfrac1d - \dfrac1{d+b}\right)$ away from the wire`,
      t`$\dfrac{\mu_0 I_1I_2 a}{2\pi}\left(\dfrac1d + \dfrac1{d+b}\right)$ towards the wire`,
      t`zero, since the loop is closed`,
    ],
    a: 0,
    h: t`The field is not uniform, so a closed loop can feel a net force. What happens to the two perpendicular sides?`,
    e: t`Near side (parallel current) is attracted with $\dfrac{\mu_0I_1I_2a}{2\pi d}$; far side (antiparallel) is repelled with $\dfrac{\mu_0I_1I_2a}{2\pi(d+b)}$. The forces on the two sides of length $b$ are equal and opposite. Net $= \dfrac{\mu_0I_1I_2a}{2\pi}\left(\dfrac1d-\dfrac1{d+b}\right)$ towards the wire. "Zero" holds only in a uniform field.`,
  },
  {
    d: 3, ex: MULTI, time: 90,
    q: t`Which of the following statements about a moving-coil galvanometer and its conversions are correct?`,
    o: [
      t`A radial magnetic field is used so that the scale is linear`,
      t`Phosphor-bronze is used for the suspension because it has a small torsion constant and high tensile strength`,
      t`Increasing the current sensitivity always increases the voltage sensitivity`,
      t`Connecting a shunt lowers the effective resistance of the instrument`,
    ],
    a: [0, 1, 3],
    h: t`Voltage sensitivity is current sensitivity divided by resistance.`,
    e: t`A and B are standard design facts. C is false: if current sensitivity is raised by adding turns, $R$ rises too and voltage sensitivity $NAB/(kR)$ may stay the same. D is true: a small shunt in parallel makes $R_{eff} = GS/(G+S) < S$ — that is why an ammeter has low resistance.`,
  },
  {
    d: 1, ex: ALL, time: 45,
    q: t`A current element $I\,d\vec l$ at the origin points along $+x$. The direction of the magnetic field it produces at the point $(0, a, 0)$ is:`,
    o: [t`$+z$`, t`$-z$`, t`$+y$`, t`$-x$`],
    a: 0,
    e: t`Biot–Savart: $d\vec B \propto d\vec l\times\vec r = \hat i\times\hat j = \hat k$, i.e. along $+z$. Using $\vec r\times d\vec l$ instead reverses the sign.`,
  },
];
