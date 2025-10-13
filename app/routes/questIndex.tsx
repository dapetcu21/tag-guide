import { redirect } from "react-router";
import type { Route } from "./+types/questIndex";
import { getSaveGame } from "~/lib/saveGame";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  if (getSaveGame().quests[params.questId]?.isCompleted)
    throw redirect("debrief");

  throw redirect("brief");
  return {};
}

export default function Quest(_: Route.ComponentProps) {
  throw new Error("Not reachable");
}
