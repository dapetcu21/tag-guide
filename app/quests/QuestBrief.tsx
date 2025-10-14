import { useCallback } from "react";
import { useNavigate } from "react-router";
import { QuestType } from "~/lib/quests";
import { getNextAvailableQuestion, hasUnavailableQuestions } from "~/lib/util";
import type { Route } from "./+types/QuestBrief";
import { useQuestContext } from "./QuestContext";
import { QuestInput } from "./QuestInput";
import { QRScannerButton } from "~/components/QRScanner";

export default function QuestBrief(_: Route.ComponentProps) {
  const { quest, questSaveGame, setQuestSaveGame } = useQuestContext();

  const nextQuestion = getNextAvailableQuestion(quest, questSaveGame, 0);

  const navigate = useNavigate();
  const handleNextQuestionClick = useCallback(() => {
    navigate(`/quests/${quest.id}/questions/${nextQuestion}`);
  }, [navigate, nextQuestion, quest]);

  const handleGoToDebriefClick = useCallback(() => {
    navigate(`/quests/${quest.id}/debrief`);
  }, [navigate, quest]);

  return (
    <div>
      <div>{quest.text}</div>
      {quest.image != null && <img src={quest.image} alt={quest.text} />}
      {quest.type === QuestType.TextInput && (
        <QuestInput
          quest={quest}
          questSaveGame={questSaveGame}
          setQuestSaveGame={setQuestSaveGame}
        />
      )}
      {((quest.type === QuestType.Scannable && !questSaveGame.isCompleted) ||
        hasUnavailableQuestions(quest, questSaveGame)) && <QRScannerButton />}
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
