import { quests } from "@/lib/quests";
import QuestPage from "./QuestPage";

export function generateStaticParams() {
  return quests.map((quest) => ({ id: quest.id }));
}

export default ({ params }: { params: Promise<{ id: string }> }) => (
  <QuestPage params={params} />
);
