import { notFound } from "next/navigation";
import { GAMES, type GameId } from "@/components/kids/games";
import { GamePlayer } from "@/components/kids/GamePlayer";

export function generateStaticParams() {
  return GAMES.map((g) => ({ game: g.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const g = GAMES.find((x) => x.id === game);
  return { title: g ? `${g.title} — Wonder Woods` : "Game" };
}

export default async function Page({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  if (!GAMES.some((g) => g.id === game)) notFound();
  return <GamePlayer id={game as GameId} />;
}
