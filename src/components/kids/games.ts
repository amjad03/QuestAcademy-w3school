export const GAMES = [
  { id: "balloon-pop", title: "Balloon Pop", emoji: "🎈", age: "Ages 3–6", blurb: "Pop exactly the number of balloons Questy asks for." },
  { id: "letter-hunt", title: "Letter Hunt", emoji: "🔤", age: "Ages 3–6", blurb: "Listen, then tap the letter you hear." },
  { id: "memory-match", title: "Memory Match", emoji: "🧠", age: "Ages 4–10", blurb: "Flip cards and find all the matching pairs." },
  { id: "shape-safari", title: "Shape Safari", emoji: "🔺", age: "Ages 3–6", blurb: "Spot the shape Questy names." },
  { id: "math-pop", title: "Math Pop", emoji: "➕", age: "Ages 5–10", blurb: "Quick sums — beat the clock!" },
  { id: "odd-one-out", title: "Odd One Out", emoji: "🕵️", age: "Ages 4–8", blurb: "Which one doesn’t belong?" },
] as const;

export type GameId = (typeof GAMES)[number]["id"];
