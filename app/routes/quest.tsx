import { questsById } from "~/lib/quests";
import { QuestPage } from "~/quests/QuestPage";
import type { Route } from "./+types/quest";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const quest = questsById.get(params.questId);

  if (quest == null)
    throw new Error("Quest not found");

  return { quest };
}

export default function Quest({ loaderData }: Route.ComponentProps) {
  return <QuestPage quest={loaderData.quest} />;
}
