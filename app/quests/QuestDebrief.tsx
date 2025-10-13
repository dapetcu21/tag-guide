import { useQuestContext } from "./QuestContext";

export default function QuestDebrief() {
  const { quest, questSaveGame } = useQuestContext();

  if (!questSaveGame.isCompleted) {
    throw new Error("Quest not completed yet");
  }

  return (
    <div>
      <div>{quest.completionText}</div>
      {quest.completionImage != null && (
        <img src={quest.completionImage} alt={quest.completionText} />
      )}
    </div>
  );
}
