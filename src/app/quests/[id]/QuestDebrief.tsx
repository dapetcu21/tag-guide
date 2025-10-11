import Image from "next/image";
import type { Quest } from "@/lib/quests";

export function QuestDebrief({ quest }: { quest: Quest }) {
  return (
    <div>
      <div>{quest.completionText}</div>
      {quest.completionImage != null && (
        <Image src={quest.completionImage} alt={quest.completionText} />
      )}
    </div>
  );
}
