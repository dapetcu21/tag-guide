import { useTranslation } from "react-i18next";
import { useQuestContext } from "./QuestContext";
import { QuestMarkdown } from "./QuestMarkdown";

export default function QuestDebrief() {
  const { quest, questSaveGame } = useQuestContext();
  const { t } = useTranslation();

  if (!questSaveGame.isCompleted) {
    throw new Error("Quest not completed yet");
  }

  return (
    <div>
      <QuestMarkdown text={quest.debrief(t)} />
    </div>
  );
}
