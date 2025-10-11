import classNames from "classnames";
import { useCallback } from "react";
import type { Quest, Question } from "@/lib/quests";
import type { QuestSaveGame } from "@/lib/saveGame";
import { validateQuestionsQuestSolution } from "@/lib/util";

const AnswerButton = ({
  index,
  answer,
  selected,
  onClick,
}: {
  index: number;
  answer: string;
  selected: boolean;
  onClick: (index: number) => void;
}) => {
  const handleClick = useCallback(() => onClick(index), [onClick, index]);
  return (
    <button
      type="button"
      className={classNames({
        "font-bold": selected,
      })}
      onClick={handleClick}
    >
      {answer}
    </button>
  );
};

export function QuestionPage({
  quest,
  question,
  questSaveGame,
  setQuestSaveGame,
  onAnswerSelected,
}: {
  quest: Quest;
  question: Question;
  questSaveGame: QuestSaveGame;
  setQuestSaveGame: (
    updater: (questSaveGame: QuestSaveGame) => QuestSaveGame,
  ) => void;
  onAnswerSelected: (
    oldSolution: Record<string, number> | null,
    oldAnswerIndex: number,
  ) => void;
}) {
  const selectedAnswer =
    (questSaveGame.solution as Record<string, number>)?.[question.id] ?? -1;

  const handleClickAnswer = useCallback(
    (answerIndex: number) => {
      const oldSolution =
        typeof questSaveGame.solution === "object"
          ? questSaveGame.solution
          : null;

      setQuestSaveGame((s) => {
        const solution = {
          ...((typeof s.solution === "object" ? s.solution : null) ?? {}),
          [question.id]: answerIndex,
        };
        return {
          ...s,
          isCompleted:
            s.isCompleted || validateQuestionsQuestSolution(quest, solution),
          solution,
        };
      });

      onAnswerSelected(oldSolution, oldSolution?.[question.id] ?? -1);
    },
    [quest, question, questSaveGame, setQuestSaveGame, onAnswerSelected],
  );

  return (
    <div>
      <div>{question.text}</div>
      {question.answers.map((answer, answerIndex) => (
        <AnswerButton
          // biome-ignore lint/suspicious/noArrayIndexKey: <we have no other key>
          key={answerIndex}
          index={answerIndex}
          answer={answer}
          selected={answerIndex === selectedAnswer}
          onClick={handleClickAnswer}
        />
      ))}
    </div>
  );
}
