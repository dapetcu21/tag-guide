import { questsById } from "~/lib/quests";
import { QuestPage } from "~/quests/QuestPage";
import type { Route } from "./+types/quest";

export default function QuestComponent({ params }: Route.ComponentProps) {
  const quest = questsById.get(params.questId);

  if (quest == null) throw new Error("Quest not found");

  return <QuestPage quest={quest} />;
}
