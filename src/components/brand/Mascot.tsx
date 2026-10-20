import clsx from "clsx";

export type MascotPose = "idle" | "wave" | "cheer" | "think" | "sad" | "read";

const C = {
  body: "#2F6BFF",
  bodyShade: "#1E50D6",
  belly: "#DCE6FF",
  bellyMark: "#B7CBFF",
  eyeRing: "#5C8BFF",
  beak: "#FF9F1C",
  beakShade: "#E07F00",
  pupil: "#1C2333",
  book: "#2EBE70",
  bookShade: "#1F9B58",
};

/**
 * Questy — the Quest Academy owl. Flat, no outlines, built from simple shapes
 * so it stays crisp at any size. Poses change wings, eyes and props.
 */
export function Mascot({ pose = "idle", size = 120, className, animate = true }: { pose?: MascotPose; size?: number; className?: string; animate?: boolean }) {
  // Wings hang from the shoulders; angles are clockwise degrees from "hanging down".
  const wingAngle: Record<MascotPose, [number, number]> = {
    idle: [0, 0],
    wave: [0, -135],
    cheer: [135, -135],
    think: [0, 72],
    sad: [12, -12],
    read: [-38, 38],
  };
  const [la, ra] = wingAngle[pose];
  const leftWing = `rotate(${la} 52 104)`;
  const rightWing = `rotate(${ra} 148 104)`;
  const look = pose === "think" ? { x: 4, y: -5 } : pose === "sad" ? { x: 0, y: 5 } : pose === "read" ? { x: 0, y: 6 } : { x: 2, y: 2 };

  return (
    <svg
      viewBox="0 0 200 210"
      width={size}
      height={size * 1.05}
      className={clsx("shrink-0 overflow-visible", animate && (pose === "cheer" ? "animate-bob" : pose === "idle" || pose === "wave" ? "animate-float" : ""), className)}
      role="img"
      aria-label="Questy the owl"
    >
      {/* shadow */}
      <ellipse cx="100" cy="200" rx="46" ry="6" fill="#1C2333" opacity="0.08" />

      {/* ear tufts */}
      <path d="M58 52 L46 18 L86 40 Z" fill={C.body} />
      <path d="M142 52 L154 18 L114 40 Z" fill={C.body} />

      {/* body */}
      <path d="M100 30 C58 30 40 64 40 106 C40 154 68 186 100 186 C132 186 160 154 160 106 C160 64 142 30 100 30 Z" fill={C.body} />

      {/* belly + feather marks */}
      <path d="M100 98 C74 98 62 120 62 142 C62 166 80 180 100 180 C120 180 138 166 138 142 C138 120 126 98 100 98 Z" fill={C.belly} />
      {[
        [82, 126],
        [100, 126],
        [118, 126],
        [91, 141],
        [109, 141],
        [100, 156],
      ].map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x - 6} ${y} Q${x} ${y + 6} ${x + 6} ${y}`} stroke={C.bellyMark} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      ))}

      {/* wings */}
      <g transform={leftWing} className="transition-transform duration-500">
        <path d="M52 100 C30 112 26 146 46 166 C54 146 60 124 58 104 Z" fill={C.bodyShade} />
      </g>
      <g transform={rightWing} className={clsx("transition-transform duration-500", pose === "wave" && animate && "origin-[148px_104px] animate-wiggle")}>
        <path d="M148 100 C170 112 174 146 154 166 C146 146 140 124 142 104 Z" fill={C.bodyShade} />
      </g>

      {/* face discs */}
      <circle cx="76" cy="82" r="27" fill={C.eyeRing} />
      <circle cx="124" cy="82" r="27" fill={C.eyeRing} />

      {/* eyes */}
      <circle cx="76" cy="82" r="21" fill="#fff" />
      <circle cx="124" cy="82" r="21" fill="#fff" />
      {pose === "cheer" ? (
        <>
          <path d="M64 86 Q76 70 88 86" stroke={C.pupil} strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M112 86 Q124 70 136 86" stroke={C.pupil} strokeWidth="6" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={76 + look.x} cy={82 + look.y} r="10.5" fill={C.pupil} />
          <circle cx={124 + look.x} cy={82 + look.y} r="10.5" fill={C.pupil} />
          <circle cx={79 + look.x} cy={78 + look.y} r="3.6" fill="#fff" />
          <circle cx={127 + look.x} cy={78 + look.y} r="3.6" fill="#fff" />
          {pose === "sad" && (
            <>
              <path d="M54 66 L98 74 L98 58 L54 58 Z" fill={C.eyeRing} />
              <path d="M146 66 L102 74 L102 58 L146 58 Z" fill={C.eyeRing} />
            </>
          )}
          {pose === "think" && <path d="M106 58 Q124 50 142 60" stroke={C.bodyShade} strokeWidth="5" fill="none" strokeLinecap="round" />}
        </>
      )}

      {/* beak */}
      <path d="M100 94 L111 104 L100 118 L89 104 Z" fill={C.beak} />
      <path d="M100 108 L111 104 L100 118 L89 104 Z" fill={C.beakShade} opacity={pose === "cheer" ? 1 : 0.55} />

      {/* feet */}
      <path d="M80 182 q4 10 10 0 q4 10 10 0 v-6 h-20 z" fill={C.beak} />
      <path d="M100 182 q4 10 10 0 q4 10 10 0 v-6 h-20 z" fill={C.beak} />

      {/* props */}
      {pose === "read" && (
        <g>
          <path d="M60 142 L100 150 L140 142 L140 176 L100 184 L60 176 Z" fill={C.book} />
          <path d="M100 150 L100 184" stroke={C.bookShade} strokeWidth="4" />
          <path d="M66 150 L94 155 M66 160 L94 165 M106 155 L134 150 M106 165 L134 160" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>
      )}
      {pose === "cheer" && (
        <g fill="#FFB800">
          <path d="M28 40 l4 9 l9 4 l-9 4 l-4 9 l-4 -9 l-9 -4 l9 -4 z" />
          <path d="M172 34 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 z" />
        </g>
      )}
      {pose === "think" && (
        <g fill={C.bellyMark}>
          <circle cx="170" cy="40" r="5" />
          <circle cx="182" cy="24" r="7" />
        </g>
      )}
    </svg>
  );
}

/** The owl head used as the logo mark. */
export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={clsx("shrink-0", className)} aria-hidden>
      <rect width="64" height="64" rx="18" fill={C.body} />
      <path d="M14 22 L10 6 L26 16 Z" fill="#fff" opacity="0.18" />
      <path d="M50 22 L54 6 L38 16 Z" fill="#fff" opacity="0.18" />
      <circle cx="22" cy="30" r="11" fill="#fff" />
      <circle cx="42" cy="30" r="11" fill="#fff" />
      <circle cx="23" cy="31" r="5.2" fill={C.pupil} />
      <circle cx="43" cy="31" r="5.2" fill={C.pupil} />
      <circle cx="24.6" cy="29" r="1.8" fill="#fff" />
      <circle cx="44.6" cy="29" r="1.8" fill="#fff" />
      <path d="M32 38 L38 44 L32 52 L26 44 Z" fill={C.beak} />
    </svg>
  );
}
