import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { type PageKey, PageType } from "@/lib/PageKey";
import { type Quest, QuestType } from "@/lib/quests";
import type { QuestSaveGame, QuestSolution } from "@/lib/saveGame";
import { getNextAvailableQuestion, hasUnavailableQuestions } from "@/lib/util";
import { QuestInput } from "./QuestInput";

export function QuestBrief({
  quest,
  questSaveGame,
  onCompletion,
  setPage,
}: {
  quest: Quest;
  questSaveGame: QuestSaveGame;
  onCompletion: (solution: QuestSolution | undefined) => void;
  setPage: (page: PageKey) => void;
}) {
  const nextQuestion = getNextAvailableQuestion(quest, questSaveGame, 0);

  const handleNextQuestionClick = useCallback(() => {
    setPage({ type: PageType.Question, questionIndex: nextQuestion });
  }, [setPage, nextQuestion]);

  const handleGoToDebriefClick = useCallback(() => {
    setPage({ type: PageType.Debrief });
  }, [setPage]);

  return (
    <div>
      <Link href="/">All quests</Link>
      <div>{quest.text}</div>
      {quest.image != null && <Image src={quest.image} alt={quest.text} />}
      {quest.type === QuestType.TextInput && (
        <QuestInput quest={quest} onCompletion={onCompletion} />
      )}
      {((quest.type === QuestType.Scannable && !questSaveGame.isCompleted) ||
        hasUnavailableQuestions(quest, questSaveGame)) && (
          <button type="button">Scan QR</button>
        )}
      {nextQuestion >= 0 && (
        <button type="button" onClick={handleNextQuestionClick}>
          Continue
        </button>
      )}
      {questSaveGame.isCompleted && (
        <button type="button" onClick={handleGoToDebriefClick}>
          Debrief
        </button>
      )}
    </div>
  );
}
