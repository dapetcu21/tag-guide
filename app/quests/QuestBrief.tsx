import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LuTrophy } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router";
import { QRScannerButton } from "~/components/QRScanner";
import { QuestType } from "~/lib/quests";
import { getNextAvailableQuestion, hasUnavailableQuestions } from "~/lib/util";
import type { Route } from "./+types/QuestBrief";
import { useQuestContext } from "./QuestContext";
import { QuestInput } from "./QuestInput";
import { QuestMarkdown } from "./QuestMarkdown";
import { QuestButton } from "./QuestButton";

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

  const { t } = useTranslation();
  return (
    <div>
      <QuestMarkdown text={quest.brief(t)} />
      {quest.image != null && (
        <img src={quest.image} alt={t("quest.brief_image_alt", "Quest icon")} />
      )}
      {quest.type === QuestType.TextInput && (
        <div className="mt-4">
          <QuestInput
            quest={quest}
            questSaveGame={questSaveGame}
            setQuestSaveGame={setQuestSaveGame}
          />
        </div>
      )}
      {((quest.type === QuestType.Scannable && !questSaveGame.isCompleted) ||
        hasUnavailableQuestions(quest, questSaveGame)) && <QRScannerButton />}
      {nextQuestion >= 0 && (
        <QuestButton
          icon={<MdChevronRight size={32} />}
          onClick={handleNextQuestionClick}
        >
          Continue
        </QuestButton>
      )}
      {questSaveGame.isCompleted && (
        <QuestButton
          icon={<LuTrophy size={28} />}
          onClick={handleGoToDebriefClick}
        >
          Debrief
        </QuestButton>
      )}
    </div>
  );
}
