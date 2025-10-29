import { useCallback } from "react";
import { Trans, useTranslation } from "react-i18next";
import { LuTrophy } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router";
import { QRScannerButton } from "~/components/QRScanner";
import { setTransitionTypes } from "~/lib/fakeTransitionType";
import { QuestType } from "~/lib/Quest";
import { getNextAvailableQuestion, hasUnavailableQuestions } from "~/lib/util";
import type { Route } from "./+types/QuestBrief";
import { QuestButton } from "./QuestButton";
import { useQuestContext } from "./QuestContext";
import { QuestInput } from "./QuestInput";
import { QuestMarkdown } from "./QuestMarkdown";
import { QuestIcon } from "./QuestIcon";

export default function QuestBrief(_: Route.ComponentProps) {
  const { quest, questSaveGame, setQuestSaveGame } = useQuestContext();

  const nextQuestion = getNextAvailableQuestion(quest, questSaveGame, 0);

  const navigate = useNavigate();
  const handleNextQuestionClick = useCallback(() => {
    setTransitionTypes(["quest-next"]);
    navigate(`/quests/${quest.id}/questions/${nextQuestion}`, {
      viewTransition: true,
    });
  }, [navigate, nextQuestion, quest]);

  const handleGoToDebriefClick = useCallback(() => {
    setTransitionTypes(["quest-next"]);
    navigate(`/quests/${quest.id}/debrief`, { viewTransition: true });
  }, [navigate, quest]);

  const { t } = useTranslation();
  return (
    <div>
      <style>
        {`
        html.view-transition-home-${quest.id} #quest-icon {
          view-transition-name: quest-icon-${quest.id};
          view-transition-class: quest-icon;
        }
      `}
      </style>
      <QuestIcon
        id="quest-icon"
        className="size-32 mx-auto"
        quest={quest}
        isCompleted={questSaveGame.isCompleted}
      />
      <QuestMarkdown text={quest.brief(t)} />
      {quest.type === QuestType.TextInput && (
        <div className="mt-4">
          <QuestInput
            correctInputs={quest.correctInputs}
            isCompleted={questSaveGame.isCompleted}
            solution={questSaveGame.solution}
            setSolution={(solution) =>
              setQuestSaveGame((s) => ({ ...s, isCompleted: true, solution }))
            }
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
          <Trans i18nKey="quest.continue">Continue</Trans>
        </QuestButton>
      )}
      {questSaveGame.isCompleted && (
        <QuestButton
          icon={<LuTrophy size={28} />}
          onClick={handleGoToDebriefClick}
        >
          <Trans i18nKey="quest.debrief">Debrief</Trans>
        </QuestButton>
      )}
    </div>
  );
}
