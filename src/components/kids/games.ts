import { ALargeSmall, Brain, PartyPopper, Plus, Search, Shapes } from "lucide-react";

export const GAMES = [
  { id: "balloon-pop", title: "Balloon Pop", icon: PartyPopper, color: "#FF4B4B", shade: "#D93636", age: "Ages 3–6", skill: "Counting", blurb: "Pop exactly the number of balloons Questy asks for." },
  { id: "letter-hunt", title: "Letter Hunt", icon: ALargeSmall, color: "#EC4899", shade: "#C02677", age: "Ages 3–6", skill: "Phonics", blurb: "Listen, then tap the letter you hear." },
  { id: "memory-match", title: "Memory Match", icon: Brain, color: "#7C4DFF", shade: "#5E35D9", age: "Ages 4–10", skill: "Memory", blurb: "Flip cards and find all the matching pairs." },
  { id: "shape-safari", title: "Shape Safari", icon: Shapes, color: "#2EBE70", shade: "#1F9B58", age: "Ages 3–6", skill: "Shapes", blurb: "Spot the shape Questy names." },
  { id: "math-pop", title: "Math Pop", icon: Plus, color: "#FF8A00", shade: "#D97000", age: "Ages 5–10", skill: "Addition", blurb: "Quick sums — beat the clock!" },
  { id: "odd-one-out", title: "Odd One Out", icon: Search, color: "#2F6BFF", shade: "#1E50D6", age: "Ages 4–8", skill: "Logic", blurb: "Which one doesn’t belong?" },
] as const;

export type GameId = (typeof GAMES)[number]["id"];
