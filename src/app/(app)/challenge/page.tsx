import { Suspense } from "react";
import { FriendChallenge } from "@/components/modes/adventure/FriendChallenge";

export const metadata = { title: "Challenge a friend" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FriendChallenge />
    </Suspense>
  );
}
