import { useTranslation } from "react-i18next";
import { useQuestContext } from "./QuestContext";

export default function QuestDebrief() {
  const { quest, questSaveGame } = useQuestContext();
  const { t } = useTranslation();

  if (!questSaveGame.isCompleted) {
    throw new Error("Quest not completed yet");
  }

  return (
    <div>
      <div>{quest.debrief(t)}</div>
    </div>
  );
}
