import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCallback } from "react";
import { type PageKey, PageType } from "@/lib/PageKey";
import type { Quest } from "@/lib/quests";
import type { QuestSaveGame } from "@/lib/saveGame";
import { getPreviousAvailableQuestion } from "@/lib/util";

export function QuestDebrief({
  quest,
  questSaveGame,
  setPage,
}: {
  quest: Quest;
  questSaveGame: QuestSaveGame;
  setPage: (page: PageKey) => void;
}) {
  const previousQuestion = getPreviousAvailableQuestion(
    quest,
    questSaveGame,
    0,
  );

  const handlePreviousQuestionClick = useCallback(() => {
    setPage({ type: PageType.Question, questionIndex: previousQuestion });
  }, [setPage, previousQuestion]);

  const handleGoTBriefClick = useCallback(() => {
    setPage({ type: PageType.Brief });
  }, [setPage]);

  if (!questSaveGame.isCompleted) return notFound();

  return (
    <div>
      <Link href="/">All quests</Link>
      <div>{quest.completionText}</div>
      {quest.completionImage != null && (
        <Image src={quest.completionImage} alt={quest.completionText} />
      )}
      {previousQuestion >= 0 ? (
        <button type="button" onClick={handlePreviousQuestionClick}>
          Continue
        </button>
      ) : (
        <button type="button" onClick={handleGoTBriefClick}>
          Brief
        </button>
      )}
    </div>
  );
}
