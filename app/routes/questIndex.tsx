import { redirect } from "react-router";
import { getSaveGame } from "~/lib/saveGame";
import type { Route } from "./+types/questIndex";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  if (getSaveGame().quests[params.questId]?.isCompleted)
    throw redirect("debrief");

  throw redirect("brief");
}

export default function Quest(_: Route.ComponentProps) {
  throw new Error("Not reachable");
}
