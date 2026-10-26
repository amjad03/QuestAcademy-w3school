# Class 11–12 teacher review

Class 11 and 12 Physics, Chemistry, Maths, Biology, Electronics and Computer Science were written
for CBSE (rationalised NCERT), Karnataka PUC and ISC, with an Exam edge layer and question banks for
JEE Main, JEE Advanced, NEET, KCET and COMEDK. Every lesson file and every bank was then checked by an
independent reviewer, who recomputed answers and fixed errors. This page lists what a subject teacher
should still confirm. Nothing here is a known error; these are scope and wording calls made from
memory of the syllabi.

## Decisions that apply everywhere

- **Board scope.** CBSE and Karnataka PUC are taken to follow the rationalised NCERT books exactly.
  Content that was dropped from NCERT but is still taught in ISC (or asked in JEE Advanced) is kept,
  with a "Board note" saying who needs it. Please confirm the Karnataka PUC deletion list matches NCERT.
- **Exam tags (question banks).**
  - NEET, KCET and COMEDK set only single-answer MCQs, so numeric and multi-correct questions never
    count for them (enforced in `src/content/exam/bank/index.ts`).
  - KCET follows the PUC syllabus, so KCET tags were removed from dropped topics and added to all
    in-syllabus single-answer questions of difficulty 1–2.
  - JEE Main 2024 cuts applied: planes and triple products, Rolle/MVT, tangents and normals,
    trigonometric equations, special series / AGP, rolling motion, radioactivity decay law,
    geostationary satellites and similar topics are tagged JEE Advanced only. The JEE Main and NEET
    2024 syllabi were read from memory; please confirm.
  - COMEDK's exact syllabus could not be checked; reviewers kept or removed COMEDK case by case.
- **Karnataka PUC Computer Science** uses the full NCERT CS books (Queue, Sorting, Searching,
  Understanding Data, Data Communication, Security Aspects, Emerging Trends), not the shorter CBSE
  083 list. This came from college exam portions, not the official PUE syllabus; please confirm.
- **Karnataka PUC Electronics** chapter names and splits were written from memory and need checking
  against the current PUE textbook.
- **ISC extras written as their own lessons:** Class 11 States of Matter, s-Block, p-Block (13–14),
  Environmental Chemistry, Transport in Plants, Mineral Nutrition, Digestion and Absorption, reflex
  action / eye / ear, Circles, 3D geometry (Section B); Class 12 Strategies for Enhancement in Food
  Production, Stem Cell Technology, Environmental Issues.
- **Gaps not written:** ISC Class 11 "Physical World" introduction; ISC triangle properties
  (sine/cosine rules); PUC Electronics topics that may exist (star–delta, Hall effect, instruments,
  optical fibre / satellite communication, Arduino).

## Writer notes per file

Each writer listed what they were unsure of. Reviewers resolved most of these; the review log below
says what was fixed and what is still open.

### bio-12-d (Biotechnology x2)
- PCR temps ~94 / 50–65 / 72 °C (typical, not NCERT); insulin C-peptide/intron explanation; fragment-count shortcuts and 4⁶ estimate are exam shortcuts.
- Assumes rationalised NCERT kept both biotech chapters fully. ISC note on recombinant vaccines (HBsAg in yeast); check ISC extras (stem cells, DNA vaccines).
### phy-12-f (Semiconductor Electronics)
- Rationalised NCERT: bands, doping, p-n junction, diode V-I, rectifier only; special diodes, transistor, logic gates dropped. Assumed PUC follows the deletions — confirm. Logic gates note says KCET still asks them — may not hold.
- ISC: transistor (CE amp) and logic gates lessons added with board note — confirm current ISC syllabus.
- Values: 0.7/0.2 V; depletion ~0.1 μm; Zener field ~5×10⁶ V/m; Si 1.1 eV, Ge 0.71 eV, diamond 5.4 eV; n_i 1.5×10¹⁶ m⁻³. Exam-only: V_dc, PIV, efficiencies 40.6/81.2 %.
### mat-12-c (Continuity and Differentiability; Application of Derivatives)
- Rationalised NCERT ch 6 dropped tangents/normals and approximations (taught in Exam edge); Rolle/MVT in Exam edge with board note.
- JEE Main 2024+ syllabus said to omit Rolle/MVT and tangents/normals — confirm. ISC still has tangents/normals/approximations? Assumed PUC/KCET/COMEDK follow rationalised NCERT.
- d/dx sec⁻¹x = 1/(|x|√(x²−1)) — check NCERT table. Marking-split tips are typical, not official.
### phy-12-a (Electric Charges and Fields; Potential and Capacitance)
- Charging by induction still in rationalised NCERT ch 1? Van de Graaff dropped (board note); still in ISC?
- P = χₑE, χₑ–K relation not stated. Constants k 9×10⁹, ε₀ 8.85×10⁻¹², g 10.
### mat-12-a (Relations and Functions; Inverse Trig)
- CBSE syllabus may list only relation types and one-one/onto (composition/inverse ISC-noted); binary operations dropped.
- Rationalised NCERT inverse trig: properties removed (ISC-only board content). Assumed PUC same.
### phy-12-c (EMI, AC, EM Waves)
- Rationalised NCERT may have dropped eddy currents, energy consideration, LC oscillations, Q factor — kept with board notes.
- Microwave wording (NCERT "resonant frequency of water"); spectrum ranges per NCERT table; J. C. Bose 25–5 mm; snakes sense IR.
- Phase convention i = iₘ sin(ωt + φ), tan φ = (X_C − X_L)/R — ISC books may differ.
### bio-12-c (Evolution; Human Health and Disease; Microbes)
- ISC "Biology and Human Welfare" may include enhancement of food production (plant breeding, tissue culture, SCP, animal husbandry) — not covered; check.
- Non-NCERT additions: Lamarckism/Weismann/synthetic theory (ISC note), Bhimbetka, q' = q/(1+q), mosquito definitive host. P. malariae (NCERT prints "P. malaria"); fertilisation in mosquito gut.
- Mycorrhiza A–R item keyed "both true, reason does not explain".
### bio-12-a (Reproduction x3)
- MTP: 2017 amendment as in NCERT (1 practitioner ≤12 wk, 2 for 12–24 wk), 2021 amendment noted.
- Population figures from NCERT memory (2 bn 1900, 6 bn 2000, 7.2 bn 2011; India 350 m → 1.2 bn).
- Fertilisation site "ampullary region" (some say ampullary–isthmic junction). ISC extras: ovule and endosperm types.
### phy-12-d (Ray Optics; Wave Optics)
- Rationalised NCERT: dispersion brief; resolving power, Fresnel distance, Brewster's law removed (exam edge / ISC notes); Doppler shift kept? Human eye and scattering assumed dropped.
- ISC Optics assumed: dispersion and dispersive power, deviation without dispersion, Brewster.
### bio-12-b (Principles of Inheritance; Molecular Basis)
- Rationalised NCERT may have cut honey bee sex determination, pleiotropy, polygenic, HGP/fingerprinting — all covered.
- NCERT figures: 1.3%/37.2% recombination; colour blindness 8% males / 0.4% females; HGP 3164.7 Mbp, ~30,000 genes (goal 20,000–25,000), chr 1 2968 genes, Y 231, 1.4 m SNPs, dystrophin 2.4 Mb; E. coli 2000 bp/s; Sutton–Boveri 1902.
- Drones-by-mitosis A–R keyed "R explains A"; lac mutant predictions beyond NCERT.
### mat-12-b (Matrices; Determinants)
- Rationalised NCERT dropped properties of determinants and elementary row operations (taught with board notes); assumed PUC same; Cramer's rule in ISC?
### che-12-c (Haloalkanes; Alcohols, Phenols, Ethers)
- Dow's process set to 623 K, 320 atm (NCERT). Kolbe ~4–7 atm 400 K; Reimer–Tiemann ~340 K.
- Remembered NCERT data: nitrochlorobenzene temps, bond lengths/enthalpies, dipoles, bp, pKa table; methoxyphenol pKa from general data.
- "Commercially important alcohols" possibly dropped from rationalised NCERT (noted). CBSE may limit alcohol reactions to primary.
### mat-12-e (Vectors; 3D)
- Scalar triple product and planes not in rationalised NCERT (board-noted lessons). JEE Main 2024 may have dropped planes/triple products; KCET/COMEDK planes status to confirm.
- A multi item treats a line lying in a plane as "parallel".
### phy-12-b (Current Electricity; Moving Charges; Magnetism and Matter)
- Rationalised NCERT said to drop metre bridge, potentiometer, colour code, series–parallel; velocity selector, cyclotron, toroid; Earth's magnetism; hysteresis extent? (ISC notes). Karnataka PUC extras uncertain.
- Potentiometer assumed out of NEET/JEE Main syllabi. Ampere: both old and 2019 SI definitions.
### phy-12-e (Dual Nature; Atoms; Nuclei)
- Radioactivity dropped from rationalised NCERT (full lesson with board note for ISC/JEE Adv); Davisson–Germer details dropped?; hydrogen series sub-parts kept?; X-rays not covered (ISC?).
- Rounded: free neutron mean life "about 1000 s" (NCERT; measured ~880 s); 1 g ≈ 20 kt TNT.
### mat-12-f (Probability; LPP; ISC Calculus in Commerce; Linear Regression)
- Rationalised NCERT keeps mean of random variable, dropped variance and binomial (board notes); PUC status?
- LPP assumed in KCET/COMEDK, not JEE; binomial in JEE Main? ISC Section C: elasticity of demand, total cost from MC examined?
### che-12-a (Solutions; Electrochemistry)
- F = 96 500 (NCERT 96 487); ΔG° answers on 96 500. Ni–Cd cell as NCERT's Ni(OH)₃ equation. λ° values and KCl conductivities per NCERT tables — confirm.
- ISC normality note (N = M × n-factor) — confirm ISC still uses it.
### che-12-b (Kinetics; d/f-Block; Coordination)
- Pseudo first order, collision theory, carbonyl bonding, stability constants, EAN — kept with board notes; current CBSE/ISC status?
- NCERT colour values (Cu ammines, nitro/nitrito), E° tables, Ce⁴⁺/Ce³⁺ 1.74 V; Np/Pu +7, U +6; Ag via Ag²⁺.
### mat-12-d (Integrals; Application of Integrals; DE)
- Rationalised NCERT dropped limit of a sum, area between two curves, forming DEs (taught with notes). Growth/decay mainly ISC.
### che-12-d (Carbonyls; Amines; Biomolecules)
- Hormones section status; essential amino acids list per older NCERT; non-NCERT data (amine bp, pKb/pKa values); HNO₂ with 2°/3° amines beyond NCERT. ISC note: cyanides and isocyanides.
### bio-12-e (Organisms and Populations; Ecosystem; Biodiversity)
- Treated as removed in rationalised NCERT: organism & environment; succession, nutrient cycling, ecosystem services (ISC lessons with notes). Life history variation, "why conserve" assumed kept.
- Biomass pyramid 809/37/11/1.5 units; Costanza figures; NCERT counts 14 BR / 90 NP / 448 WLS (not current); "Chanda" under MP as NCERT prints.
- ISC Environmental Issues (pollution, ozone, global warming) not covered.
- bank phy12-2: 174 q; difficulty-3 share ~19% (target 25%); Earth's magnetism items tagged KCET/COMEDK only

### bank mat12-2 (Continuity/Differentiability, Applications of Derivatives) — 100 Q, VALID
- Rolle/MVT, tangents/normals and approximations kept for JEE/KCET even where rationalised CBSE dropped them; teacher to confirm scope tags.

### bank phy12-3 (EM Waves, Ray Optics, Wave Optics) — 127 Q, VALID
- Glass-sphere bubble numeric (3.43 cm) uses R = −6 cm for glass→air refraction.
- Point-source field numeric 27.4 V/m (±0.3).
- Fringes within central diffraction envelope = 9 (m = ±5 missing orders stated in question).
- Rainbow Statement I/II: primary ≈ 42°, secondary ≈ 50–53°.

### bank phy12-1 (Electrostatics, Current) — 142 Q, VALID
- Cube edge resistance 7R/12 explained via Foster's theorem (beyond syllabus; answer standard).
- Potentiometer omitted (rationalised NCERT); ISC/PUC may still teach it — teacher to decide whether to add.
- Relaxation-time item uses invented values (v_d 2.2 mm/s, E 0.5 V/m → τ 2.5×10⁻¹⁴ s).

### bank che12-1 (Solutions, Electrochemistry, Kinetics) — 135 Q, VALID
- Henry's constant for N₂ given as 1.0×10⁵ atm "for the question" (real ≈ 8.7×10⁴).
- AgCl/Ag E° from Ksp 10⁻¹⁰ = 0.21 V (tabulated 0.22 V, noted in explanation).
- ΔS = nF dE/dT item tagged JEE/JEE_ADV only.

### bank che12-2 (d/f block, Coordination, Haloalkanes) — 135 Q, VALID
- 04-045 / 04-036 rely on data-table orders (3rd IE Mn highest; E°(M³⁺/M²⁺) Co > Mn > Fe > Cr).
- 05-040/041 treat [Cu(NH₃)₄]²⁺ as dsp² square planar (NCERT VBT).
- 06-043 neopentyl bromide → 2-methylbutan-2-ol under Ag⁺/SN1 conditions.
- 06-026 dipole moment CH₃Cl > CH₃F (literature values).

### bank che12-3 (Alcohols…Biomolecules) — 186 Q, VALID
- Formic acid reduces Fehling's (true in Ch 8 multi); fructose counted as reducing sugar.
- Mutarotation numeric 64% β (α +112°, β +19°, eq +52.5°); invert sugar −19.95°.
- Beyond-NCERT difficulty-3 items (periodate counts, osazone, intramolecular aldol, Haworth) tagged JEE/JEE_ADV.
- Ether solubility ≈ alcohol of similar mass (NCERT wording).

### bank phy12-4 (Dual nature, Atoms, Nuclei, Semiconductors) — 179 Q, VALID
- Radioactivity items (13-031…037, 039) tagged JEE_ADV only (dropped from rationalised NCERT / JEE Main / NEET 2024) — confirm.
- Zener/LED/photodiode/solar cell tagged NEET/JEE/COMEDK although out of rationalised NCERT — confirm.
- Semiconductor multi items tagged JEE_ADV for format reasons though JEE Adv syllabus may exclude semiconductors — consider retagging JEE only.
- 12-040 muonic hydrogen −2.82 keV (infinite-mass proton).

### bank bio12-1 (Reproduction ×3, Inheritance) — 186 Q, VALID
- MTP rule tested per NCERT (≤12 wk one RMP; 12–24 wk two). The 2021 Act actually says ≤20 wk one RMP, 20–24 wk two — NEET follows NCERT; teacher to decide whether to add a note.
- "Prevents autogamy" count includes monoecy (answer five); sickle-cell A–R: R doesn't explain A; pregnancy-only hormones = hCG, hPL, relaxin.

### bank bio12-3 (Biotech ×2, Ecology ×3) — 217 Q, VALID
- Rationalised scope: organism–environment section, succession, nutrient cycling, ecosystem services left out (ISC still teaches some — lessons cover them; bank does not).
- Recalled NCERT figures to spot-check: 14/90/448 protected areas; 12/23/32/31% threatened; Amazon ≈20% O₂; 27 Basmati varieties / 2,00,000 rice varieties; Rosie 2.4 g/L.
- Logistic growth fastest at N = K/2 (hard NEET item, beyond NCERT).

### bank mat12-1 (Relations/Functions, ITF, Matrices, Determinants) — 160 Q, VALID
- Counting answers double-checked (15 equivalence relations on 4; 44 derangements of 5; 336 matrices with tr(MᵀM)=6).
- Standard ideas reused with new numbers: range of (sin⁻¹x)²+(cos⁻¹x)², Machin's identity, x+y+z=3 consistency system.

### bank bio12-2 (Molecular basis, Evolution, Health, Microbes) — 179 Q, VALID
- E. coli replication rate per NCERT (4.6×10⁶ bp / 38 min ≈ 2000 bp/s).
- Geological / human-evolution dates and drugs & anabolic-steroids items follow the older full NCERT; remove if the rationalised edition dropped them (NEET 2024 syllabus still lists adolescence, drug and alcohol abuse — confirm).

### bank mat12-3 (Integrals, Application, DEs) — 140 Q, VALID (sympy-checked)
- Rounded numerics: tripling time 15.8 h (±0.1), m = 2 − 4^{1/3} ≈ 0.41 (±0.01).
- Improper integral ∫₀¹ ln(x/(1−x)) dx = 0 used as a correct option.

### bank mat12-4 (Vectors, 3D, LP, Probability) — 160 Q, VALID (2 warnings: LP multi not JEE_ADV — intended)
- LP tagged KCET/COMEDK only (not in JEE syllabus).
- Scalar triple product and binomial distribution not tagged KCET (dropped from rationalised NCERT) — confirm against current KCET syllabus.

### ele-12-b (Communication, Boolean/Combinational, Sequential, Microcontrollers) — 15 lessons, VALID
- AIR Bengaluru ≈ 612 kHz (memory); AM band 530–1600 kHz; TV bandwidth 4.2–5 MHz.
- 8051: PSW D1 "user-definable" (some books "reserved"); 5 interrupts (some count reset as 6). Embedded-C delay 1275/ms approximate.
- Chapter split guessed — verify against the current PUE Electronics syllabus (optical fibre / satellite comm, code converters/comparators, Arduino not covered).

### ele-12-a (Amplifiers, Feedback/Oscillators, FET, Op-amps, Wave shaping) — 15 lessons, VALID
- CE gain via h-parameters (A_v = −h_fe R_ac/h_ie); textbook may use r_e notation.
- 741 typical values; class A/B/C efficiencies; RC phase-shift f = 1/(2πRC√6), gain ≥ 29; Hartley L₁+L₂+2M.
- Clipper/clamper diode orientations described in words — check.
- Chapter split guessed: FET may be inside "Special semiconductor devices" (UJT, SCR, opto not covered); wave shaping/555 placement uncertain.

### ele-11-a (Intro, Passive, DC theorems, AC, Semiconductor physics) — 18 lessons, VALID
- Point-contact transistor credited to "Bardeen, Brattain and Shockley" — should be Bardeen & Brattain (1947), Shockley junction (1948). FIXED.
- Diode called an active device (as board books do).
- Not covered: star–delta, mesh/nodal formal, Hall effect, instruments (CRO, multimeter). Verify chapter scope against PUE syllabus.
- Values: Si/Ge band gaps, nᵢ, mobilities, nichrome ρ 1.1×10⁻⁶ Ω m, colour-code tolerances.

### ele-11-b (Diodes, BJT, Biasing, Number systems, Logic gates) — 17 lessons, VALID
- Diode equation η ≈ 1 Ge, ≈ 2 Si (older Indian convention); Zener < ~5 V / avalanche > ~6 V.
- Biasing formulas per textbook convention (collector-to-base S, voltage-divider S ≈ 1 + R_Th/R_E); full-wave C-filter γ = 1/(4√3 fCR_L).
- Chapter split guessed (DC power supplies, biasing may be merged) — verify against PUE book.

### phy-11-b (Laws of Motion, WEP) — 9 lessons (6 board / 3 exam edge), VALID
- Aristotle's fallacy kept as short intro (may be cut in rationalised NCERT); E = mc² / forms of energy left out.
- Vertical circle placed in WEP Exam edge; ISC teaches it under Laws of Motion — check.
- Coefficient of restitution flagged as ISC/JEE extra (NCERT doesn't formally define e) — confirm.

### cs-11-cbse-a (Computer systems, Number systems, Boolean logic, Problem solving, Python start) — 16 lessons, VALID (code run)
- ISCII 8-bit, BIS 1991; control-bus direction not stated; true Python precedence (NCERT table layout differs); 35 keywords (3.7+); 1 KB = 1024 B.
- Fractional base conversions included (NCERT-level; CBSE syllabus may not require).

### bio-11-b (Morphology, Anatomy, Structural organisation) — 13 lessons, VALID
- Secondary growth and earthworm/cockroach flagged as removed from rationalised NCERT/NEET but kept for ISC — confirm current ISC animals and Karnataka PUC position.
- Liliaceae/Solanaceae overline convention for epitepalous/epipetalous stamens — check NCERT figure. ⚥ in TeX renders via fallback font (KaTeX warns, works).
- Frog colour change called "mimicry" (NCERT wording, debatable). Dracaena/Yucca monocot secondary growth.

### che-11-a (Basic concepts, Atom, Periodicity) — 14 lessons, VALID
- Ge m.p. 1211 K (NCERT table may print 1231 K). Ga 135 pm < Al 143 pm (metallic radii).
- Molar volume 22.7 L (1 bar) vs 22.4 L (1 atm). ISC vapour density note — confirm still in ISC.

### phy-11-c (Rotation, Gravitation) — 10 lessons, VALID
- Treated rationalised NCERT as dropping theorems of axes, rolling, geostationary/polar satellites, weightlessness (board notes for ISC/JEE/KCET) — confirm Karnataka PUC/KCET.
- g with latitude as ISC/JEE extra; geostationary radius ≈ 42,200 km.

### mat-11-a (Sets, Relations/Functions, Trig) — 13 lessons, VALID
- Trig equations treated as dropped from rationalised NCERT, kept in ISC/JEE/KCET — confirm PUC. ISC triangle properties (sine/cosine rules) not covered.
- Set survey problems / three-set formula edition-dependent.

### mat-11-c (Binomial, Sequences) — 9 lessons, VALID
- Claimed rationalised NCERT dropped general/middle terms, induction proof, special-series sums, trimmed AP — CONFIRM (general & middle terms may still be in NCERT 2023). HP: JEE Adv only.

### cs-11-cbse-b (Flow, Strings, Lists, Tuples/Dicts, Modules, Society) — 19 lessons, VALID (35 code blocks run)
- IT Act 2000 (amended 2008), CERT-In, cybercrime.gov.in / 1930, DPDP Act 2023, patent 20 years. Dicts insertion-ordered (3.7+) vs NCERT "unordered".

### phy-11-a (Units, Straight line, Plane) — 11 lessons, VALID
- Errors in measurement treated as dropped from rationalised NCERT (kept ISC/JEE/NEET) — confirm. Relative velocity retention unsure. ISC "Physical World" scope/forces not written.

### mat-11-b (Complex/Quadratic, Linear Inequalities, P&C) — 13 lessons, VALID
- Assumed rationalised NCERT dropped 2-variable inequality graphs and square roots of complex numbers; polar form status unsure.

### che-11-b (Bonding, Thermodynamics) — 10 lessons, VALID
- ISC extras (coordinate bond, metallic bond, enthalpy of neutralisation −57 kJ) from memory. H–H 435.8 vs 435.0 (NCERT inconsistency). KCl Born–Haber gives 718 (lit. 717); some example data invented.

### cs-12-cbse (9 CBSE 083 chapters) — 23 lessons, VALID (30 code blocks run)
- FINDING: Karnataka PUC CS follows the full NCERT CS books, not CBSE 083. Syllabus changed: new CS_PUC_11 / CS_PUC_12 in senior-extra.ts (PUC-2 adds Queue, Sorting, Searching, Understanding Data, Data Communication, Security Aspects; PUC-1 adds Emerging Trends, Functions). Writers cs-12-puc-a/b launched. Confirm against the official PUE syllabus.
- TELNET "Teletype Network"; frequency bands; SELECT as DML/DQL; mysql.connector rowcount semantics.

### cs-11-isc-b (Methods, Arrays, Strings in Java, Recursion, I/O & Packages, Trends/Ethics) — 21 lessons, VALID (Java 21 run)
- Confirm address calculation and StringBuffer are ISC Class 11 (not only 12); "Printer classes" = PrintStream/PrintWriter.
- Patents Act s.3(k); FSF 1985, OSI 1998; BlueJ listed as open source.

### cs-12-isc (8 ISC chapters) — 26 lessons, VALID (33 Java programs run)
- Added address calculation and propositional logic per ISC syllabus; don't-care K-map cells only optional note; circular queue included.
- Not covered: wrapper classes / packages / I/O at Class 12 and Paper 2 practical (only tips). Tree height counted in edges.

### bio-11-a (Living World, Classification, Plant & Animal Kingdom) — 19 lessons, VALID
- Assumed rationalised NCERT dropped "What is living?", taxonomical aids, plant life cycles/alternation of generations — confirm.
- NCERT spellings kept (Polymoniales, Primata); Bungarus (NCERT "Bangarus"). 8 ascospores stated in question.
- A–R judgement calls: fungi/refrigeration; sponge internal fertilisation/hermaphrodite.

### cs-11-isc-a (Numbers, Propositional logic, Hardware, Objects, Primitives/Wrappers, Expressions) — 20 lessons, VALID (23 Java programs run)
- "Computer Hardware" read as gates/adders/encoders/MUX only (no CPU/memory) — confirm CISCE scope. Java boolean size "not fixed" (some books say 1 bit/byte).

### bio-11-c (Cell, Biomolecules, Cell cycle) — 11 lessons, VALID
- Element table (NCERT 9.1) from memory; bonds/metabolism/living state assumed dropped (kept short with ISC note).
- Exam-edge-only extras: Km/Michaelis–Menten, inhibitor effects, flagellin, male honeybee mitosis. Carbonic anhydrase factor numeric = 11 (NCERT "about 10 million").

### che-11-c (Equilibrium, Redox) — 10 lessons, VALID
- Illustrative K values ("take"); H₂O₂ volume strength item from dropped Hydrogen chapter (JEE still asks) — consider removing.

### phy-11-d (Solids, Fluids, Thermal properties) — 11 lessons, VALID
- Poisson's ratio / elastic energy / Reynolds number possibly dropped from rationalised NCERT — board notes for ISC/PUC/JEE.
- Table values to match textbook: ice c 2100, glass k 0.8, Al α 2.5×10⁻⁵, glycerine η 0.80 Pa s.

### cs-12-puc-a (Queue, Sorting, Searching — Karnataka II PUC) — 9 lessons, VALID (code run)
- Function names per NCERT; own selection-sort version (no flag); linear search 1-based / binary 0-based returns; own hashing data.

### phy-11-f (Oscillations, Waves) — 8 lessons, VALID
- Damped/forced oscillations and Doppler treated as removed from rationalised NCERT (ISC/JEE Adv keep) — confirm JEE Main & ISC status. End correction e ≈ 0.3d ISC-only.

### che-11-d (GOC, Hydrocarbons) — 12 lessons, VALID
- Dumas uses 22400 mL at STP (1 atm). Approx pKa list; radical stability benzyl ≈ allyl (books differ).
- Beyond-NCERT extras labelled (antiaromaticity, Clemmensen, terminal-alkyne tests, rearrangements).

### phy-11-e (Thermodynamics, Kinetic theory) — 8 lessons, VALID
- Heat engines/refrigerators possibly removed in rationalised NCERT — kept with board note. Fowler 1931 zeroth law naming.
- "11:Heat and Thermodynamics" accumulates phy-11-d thermal + phy-11-e thermo (BATCHES order) — OK.

### mat-11-d (Straight lines, Circles [ISC], Conics, 3D) — 15 lessons, VALID
- Assumed rationalised NCERT dropped normal form, section formula in 3D, directrices/asymptotes — confirm.

### bio-11-f (Locomotion, Neural, Chemical coordination) — 12 lessons, VALID
- Troponin masks myosin sites (NCERT wording) vs tropomyosin in references — mistake block explains. Resting potential −70 mV labelled non-NCERT.
- Reflex action, eye and ear as ISC-only lesson (removed from rationalised NCERT) — confirm ISC. Insulin receptor simplification.

### bio-11-e (Digestion [ISC], Breathing, Body fluids, Excretion) — 16 lessons, VALID
- Digestion figures from pre-rationalised NCERT (30% starch in mouth, pH 1.8/7.8, energy values). PEM included.
- Cardiac cycle: own example uses 75 bpm → 0.8 s (NCERT pairs 0.8 s with 72 bpm).

### bank phy11-2 (WEP, Rotation, Gravitation) — 143 Q, VALID
- Orbital speed 8 km/s in questions (g = 10) vs 7.9 in formula sheet. Ch 06 difficulty-3 share 20%.

### bank che11-2 (Bonding, Thermodynamics, Equilibrium) — 138 Q, VALID
- KCET tagged only on difficulty-1 (12–13/chapter) — consider widening KCET tags on difficulty-2 MCQs across banks.
- Trisilylamine planar via pπ–dπ (newer texts: σ*). HCl % ionic numeric 17; Born–Haber −412 with Cl₂ 242.

### bank che11-1 (Basic concepts, Atom, Periodicity) — 147 Q, VALID
- O second electron gain enthalpy +780 given in question (some texts +744). Molar volume 22.7 vs 22.4 stated per question.

### mat-11-e (Limits/Derivatives, Statistics, Probability) — 11 lessons, VALID
- Step-deviation "accepted in every board" claim; ISC exp/log limits note; σ² uses 1/n (NCERT).

### bank mat11-1 (Sets, R&F, Trig, Complex/Quadratic) — 193 Q, VALID
- ℕ starts at 1; principal arg in (−π, π]. KCET/COMEDK have no numericals (by design).

### cs-12-puc-b (Understanding Data, Data Communication, Security, + 11 Emerging Trends) — 15 lessons, VALID (18 code blocks run)
- NCERT data-rate unit convention (2^10?); frequency bands; pstdev (÷n); 5G India Oct 2022; Smart City examples.

### bank phy11-1 (Units, Straight line, Plane, Laws) — 192 Q, VALID
- 3 difficulty-3 items still carry wide tags (vernier, t³ distance, overtaking) — narrow to JEE in review. Sound speed 200 m/s "take" value.

### bank mat11-2 (Inequalities, P&C, Binomial, Sequences) — 161 Q, VALID (sympy/brute-force checked)
- 2-variable inequality graphing items (dropped from rationalised NCERT, kept for KCET/COMEDK).

### bank bio11-1 (ch 1–7) — 250 Q, VALID
- Rationalised scope: no taxonomic aids, life cycles, secondary growth, earthworm/frog items (KCET may still ask).

### che-11-e (ISC: States of Matter, s-Block, p-Block 13–14, Environmental) — 16 lessons, VALID
- Exam syllabus claims (JEE Adv still lists gaseous state, groups 1–2, 13–14) from memory. Numbers: CO₂ Tc 30.98 °C, cement %, water limits, BOD thresholds.

### bio-11-d (Transport [ISC], Mineral nutrition [ISC], Photosynthesis, Respiration, Growth) — 22 lessons, VALID
- NEET/KCET drop transport & mineral nutrition (from 2024) — confirm. C4 30 ATP labelled non-NCERT. Sulphur remobilisation NCERT conflict noted. Illustrative: maize 3 L/day, air ψ −95 MPa.

### bank bio11-2 (ch 8–13) — 222 Q, VALID
- build() rotates MCQ options at runtime for answer spread (deterministic). RQ malic/oxalic beyond NCERT. Photoperiodism/vernalisation left out.

### bank mat11-4 (Limits, Statistics, Probability) — 130 Q, VALID
- A few ch 12 items use series/GIF (beyond NCERT 11), tagged JEE_ADV/numeric.

### bank mat11-3 (Lines, Conics, 3D) — 125 Q, VALID
### bank che11-3 (Redox, GOC, Hydrocarbons) — 124 Q, VALID. −I order with COOH vs F varies by source.

### bank phy11-4 (KT, Oscillations, Waves) — 124 Q, VALID. Doppler JEE_ADV only; compound pendulum/pressure amplitude JEE only.

### bank bio11-3 (ch 14–19) — 222 Q, VALID. No reflex/eye/ear items (rationalised).

### bank phy11-3 (Solids, Fluids, Thermal, Thermodynamics) — 168 Q, VALID. d3 share 18–22%. Dry ice/CO₂ triple point item.
ALL 28 BANKS WRITTEN.

### bio-12-f (ISC: Food production, Stem cells, Environmental issues) — 12 lessons, VALID
- Merino (NCERT "Marino"); Delhi CNG case avoids CO/CO₂ claim; greenhouse shares from old NCERT pie; ICMR–DBT 2017 stem-cell guidelines from memory.

## Review log

What each reviewer fixed, and what they left for a teacher ("Open").

- **phy-12-a** — no errors found; all examples/quiz recomputed. Open: charging by induction in rationalised NCERT; ISC Van de Graaff.
- **phy-12-b** — 3 fixes: insulator resistivity 10¹⁴→10¹⁰ (NCERT table); L-shape vs arc magnet wording; toroid exam claim hedged. Open: hysteresis in rationalised NCERT; toroid/potentiometer on JEE Main/NEET 2024.
- **phy-12-c** — 3 fixes: capacitance/spring analogue flashcard; LC oscillations exam status hedged (JEE Adv/ISC); 750 nm described as edge of visible. Open: "UV absorbed by ordinary glass" as NCERT line; NEET topics (LC energy, Q factor, eddy currents) vs NMC syllabus.
- **phy-12-d** — 3 fixes: slab mistake value 52.5→53.3 cm; white-light fringe flashcard; fringe-width derivation hedged for CBSE. Open: polarisation in current CBSE syllabus; ISC achromatism; NCERT white-light wording.
- **che-12-a** — 2 fixes: "solvent's normal boiling point"; E°cell shortcut row (cathode − anode). Open: exact RLVP formula ideal-solution caveat; concentration-cell n meaning.
- **phy-12-f** — 9 fixes: centre-tap "half the secondary" wording ×2; solar-cell band gaps; Zener field 5×10⁶ V/m; KCET logic-gates claims hedged ×4; topic description. Open: ISC transistor/gates; KCET/COMEDK scope. NOTE: phy12-4 bank logic-gate items lack NEET tag though NEET 2024 lists gates — fix in bank review.
- **phy-12-e** — no errors. Open: X-rays for ISC; neutron mean life NCERT "1000 s" (measured ≈ 880 s); BE peak 8.75 vs 8.79.
- **che-12-b** — 3 fixes: collision theory credit (Trautz & Lewis); collision theory and carbonyl/EAN/stability exam claims hedged. Plus mine: Fe(CO)₅ VBT sp³d → dsp³. Open: pseudo-first-order / collision theory / stability constants status in rationalised NCERT; ISC EAN.
- **mat-12-a** — 3 fixes: KCET composition claim hedged; inverse-trig properties KCET claim; principal-branch identity explanation corrected. Open: NCERT §1.4 composition retained?; ISC composite/inverse; JEE Adv ITF wording; PUC/KCET scope.
- **mat-12-c** — 1 hedge (marking tips). No errors. Open: ISC Rolle/MVT & approximations; inflection wording (NCERT); COMEDK follows PUC?
- **che-12-c** — 3 edits: alcohols with Na act as acids; CBSE primary-alcohol scope note; C2 methyl wording. Open: ISC commercial alcohols; KNO₂/AgCN NCERT simplifications.
- **mat-12-b** — 1 hedge (determinant properties board note). No errors. Open: ISC Cramer's rule.
- **mat-12-e** — 4 fixes: JEE Main 2024 drops triple products and planes (tables); planes lesson retitled (ISC, JEE Advanced); ambiguous "parallel" multi option. => mat12-4 bank: planes/triple-product items should be JEE_ADV only (fix in bank review).
- **mat-12-d** — 2 hedges (KCET claims). No errors. Open: JEE Main 2024 formation of DEs / limit of sum.
- **bio-12-b** — 2 clarity fixes (HGP books assumption; lac z-deletion explanation hedged). Open: board notes for honey bee/pleiotropy/polygenic/HGP/fingerprinting; Meischer (NCERT spelling).
- **che-12-d** — 2 fixes: Tollens' row (glucose is an aldehyde); ortho effect "generally". Open: biotin solubility (NCERT wording); pH 3.5 vs 4.5 for ammonia derivatives; Mendius reduction naming.
- **mat-12-f** — 5 fixes: binomial exam claims hedged ×2 (JEE Main 2024 dropped); LPP slope test was false in general — restricted to upper-boundary vertex ×4 places; unit-elastic revenue wording; ISC elasticity hedged. Open: ISC Section C scope; JEE Adv binomial; KCET variance.
- **bio-12-a** — 3 fixes: LAM grammar; Saheli group "Oral pill / surgical" (non-steroidal); MTP "most illegal" claim → NCERT wording. Open: relaxin source; hCG rescue.
- **bio-12-d** — 1 fix: ADA gene therapy permanent-cure line. GAP: ISC stem cell technology not covered → bio-12-f writer.
- **bio-12-c** — 2 fixes: "one generation of selection"; geysers "as hot as 100°C". GAP: ISC Biology and Human Welfare food production (plant breeding, tissue culture, SCP, animal husbandry) → bio-12-f writer. Open: universe age 20 bn (NCERT line); LSD wording (NCERT).
- **bank phy12-1** — no content errors; tags: KCET +5 MCQs, KCET removed from 3 numerics.
- **bio-12-e** — 3 fixes: inland salinity "<5 ppt"; conformers "nearly all plants" ×2. GAP: ISC Environmental Issues → added to bio-12-f writer.
- **bank phy12-4** — no content errors; tags: gates +NEET (−KCET, by me: rationalised NCERT dropped gates); semiconductor multi → JEE; KCET +10 MCQs; 11-003 explanation wording. Open: COMEDK scope; reactor moderator item KCET.
- **bank mat12-1** — tags only: KCET −15 numerics, +1 MCQ. Open: KCET on dropped sections (composition, ITF properties, det properties).
- **bank che12-1** — tags only: KCET +11 MCQs.
- **bank mat12-4** — 30 plane/triple-product items → JEE_ADV only. Open: binomial (JEE Main 2024 dropped?) still JEE+COMEDK.
- **bank che12-2** — Gd distractor explanation (64 e⁻, not 65); KCET off 15 numerics; hydrate colours grey-green/dark green.
- **bank mat12-2** — Rolle/MVT, tangents/normals, approximations → JEE_ADV only (17 items); KCET +12 MCQs, −8 numerics.
- **bank phy12-2** — FACT FIX: bismuth χ −1.7×10⁻⁵ (was ×10⁻⁴); KCET −10 numerics, +15 MCQs; cyclotron/toroid −KCET; Earth's magnetism → COMEDK only; d3 share 19.5%. Open: cyclotron/toroid/LC/Q-factor/eddy for NEET/JEE Main.
- **bank bio12-1** — germ-layer statement per NCERT (mesoderm appears later); MTP 2021 Act note added.
- **bank che12-3** — KCET +68 d2 MCQs. Open: industrial methanol item (commercial alcohols dropped?); CH₃OH vs H₂O acidity.
- **bank phy12-3** — KCET −16 numerics; scattering/rainbow/eye → COMEDK only; dispersive power/achromat/resolving power/Fresnel/Doppler → JEE_ADV; Brewster −KCET; microwave range wording.
- **bank mat12-3** — 2 explanation fixes (DE family distractor; ∫cot v); KCET off dropped topics (limit of sum, area between curves, forming DEs); KCET +16 MCQs. Open: JEE Main 2024 limit-of-sum / forming DEs.
- **NOTE: after MCQ-only stripping, 11 bank items have no exam tag (LP multi, COMEDK-only numerics)** — they stay in chapter practice only.
- **bank bio12-2** — 2 distractor explanation fixes (nucleosome ÷50; HW 810); KCET on d3 non-AR/statement items.
- **phy-11-b** — 4 fixes: vertical circle board note (CBSE under WEP); moderator nuclei wording; bullet-block factor; energy-principle board tip hedged. Open: vertical circle only in Exam edge though CBSE lists it.
- **ele-12-a** — 1 fix: integrator sine→cosine sign. Open: PUC chapter split (FET/special devices; 555).
- **ele-12-b** — 2 fixes: SR forbidden state (NAND clocked SR → both 1); K-map distractor that was also correct replaced.
- **che-11-a** — 6 fixes: limiting-reagent counterexample; Ge m.p. NCERT note; "group 12"; Na/Ca diagonal explanation; successive-IE group shortcut (p-block = 10 + n) ×2.
- **phy-11-a** — 2 fixes: "Système International"; relative velocity CBSE claim hedged. GAP (optional): ISC "Physical World" intro lesson.
- **bank bio12-3** — 4 fixes: deer distractors; prickly pear 1920s; PCR and exponential distractor explanations.
- **phy-11-e** — 1 fix: work 6051 → 6050 J.
- **phy-11-c** — 3 fixes: theorems of axes/rolling/geostationary exam claims (KCET, NEET) hedged.
- **che-11-b** — 1 fix: −5744 J.
- **phy-11-f** — 2 fixes: damped/forced oscillations not in JEE syllabi.
- **mat-11-a** — 4 fixes: set survey problems dropped (board note); [x] "not exceeding"; trig equations dropped from NCERT & JEE Main 2024 (×2). GAP: ISC triangle properties. => mat11-1 bank: trig equation items → JEE_ADV.
- **phy-11-d** — 2 fixes: Poisson/elastic energy & Reynolds notes (dropped from NCERT & JEE Main; ISC keeps).
- **che-11-c** — 3 fixes: peroxide-link oxidation state wording; H₂O₂ volume strength STP + dropped-chapter note ×2.
- **mat-11-b** — 2 fixes: complex square root KCET claim; triangle-inequality equality condition. Open: quadratic-equation section in rationalised NCERT; polar form.
- **che-11-d** — 1 fix: pyrolysis 773–973 K.
- **cs-12-cbse** — 1 real fix (network case study: star isn't shortest cable; 180 m chain) + 3 clarity edits. All code run.
- **mat-11-e** — 5 board-note fixes (L'Hôpital not NCERT; exp/log limits KCET hedge; step-deviation and C.V. dropped from rationalised NCERT). Maths all correct.
- **mat-11-c** — 5 board-note fixes (general/middle terms and special series dropped from NCERT; JEE Main 2024 keeps general terms, drops special series/AGP; infinite GP on CBSE list). Me: example labels → KCET/COMEDK level.
- **mat-11-d** — 2 fixes: ISC Class 11 Section B has 3D (me: added row to ISC MATHS_11); circle sort label.
- **bio-11-a** — 5 fixes: "asexual reproduction"; housefly/mango checkpoint wording; taxonomical aids / plant life cycles marked as older-paper content ×3.
- **cs-12-isc** — 3 fixes: ambiguous binSearch multi option; hybrid inheritance row; Java 2D arrays aren't row-major blocks.
- **bio-11-c** — 7 wording fixes (mesosome; primary wall; activation energy; acrocentric shape; exam claims ×2; honeybee exception).
- **bank che11-1** — CH₄/CO distractor explanation; KCET +7 MCQs.
- **bank che11-2** — 3 distractor/explanation fixes (K without entropy 9.2×10⁶; AgCl 2Ksp; conjugate wording); KCET +44.
- **bank mat11-1** — trig equations → JEE_ADV only (8); set survey −KCET (3); wording fix.
- **bank phy11-2** — rolling/geostationary → JEE_ADV only; axis theorems → JEE/COMEDK; KCET +d2 MCQs; car-incline explanation; orbital speed note.
- **bank phy11-1** — 3 d3 items narrowed; KCET +7; 2 distractor explanations; SI supplementary units wording.
- **bio-11-b** — 2 fixes: flower symmetry wording; compound epithelium A–R reason.
- **che-11-e** — 6 fixes: Linde liquefaction; Z>1 multi option; Castner–Kellner caption; cement silica:alumina ratio; JEE Main States of Matter; JEE Adv does list environmental chem.
- **bio-11-d** — 4 fixes: stroma lamellae cyclic flow; FAD; C4 NCERT line; MoO₄²⁻.
- **bio-11-e** — 4 fixes: milk molars; nucleotidase row; constipation rectum; gall-bladder explanation.
- **bio-11-f** — 1 clarity fix.
- **bank mat11-3** — 2 distractor fixes. Open: circle/conic tangent items tagged JEE Main/KCET.
- **bank mat11-4** — 4 distractor explanation fixes; CV items −KCET.
- **bank phy11-4** — speed-of-sound distractor explanation; KCET +39.
- **bank bio11-2** — mitosis option ambiguity; fermentation CO₂ step on sheet.
- **bank phy11-3** — 6 distractor/explanation fixes; triple point of water value on sheet (6.0×10⁻³ atm); KCET −19 numerics, +4 MCQs.
- **bank che11-3** — resonance-energy sign on sheet; OsO₄ "one of the highest"; KCET +11; −I note hedged.
- **bank bio11-3** — earthworm distractor replaced.
- **bank mat11-2** — numerics JEE only; 2-var region items → KCET/COMEDK (2 converted to MCQ); |x|<1 condition. FOLLOW-UP: binomial general terms −KCET; special series/AGP → JEE_ADV.
- **cs-11-cbse-a** — 1 fix: 45 → binary explanation. Open: NCERT may list sets as immutable.
- **ele-11-a** — no errors.
- **cs-11-cbse-b** — 2 fixes: KARNATAKA indices; CC BY not "fair use".
- **ele-11-b** — 1 fix: 4/π² ≈ 0.405.
- **cs-12-puc-a/b** — 2 fixes: flagged bubble sort ties insertion sort on sorted list; numerical title.
- **bank bio11-1** — 29 questions on dropped content (What is living?, cockroach) replaced with on-syllabus items (classification, frog); sheets updated.
- **cs-11-isc-a** — 6 fixes: ambiguous base match pair; Gates.java column order; widening precision; board-practice summary; boolean size hedge.
- **cs-11-isc-b** — 1 wording fix (RecPal).
- **bio-12-f** — 5 wording fixes.
