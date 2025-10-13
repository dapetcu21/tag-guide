import type { Quest } from "~/lib/quests";

export function QuestDebrief({ quest }: { quest: Quest }) {
  return (
    <div>
      <div>{quest.completionText}</div>
      {quest.completionImage != null && (
        <img src={quest.completionImage} alt={quest.completionText} />
      )}
    </div>
  );
}
