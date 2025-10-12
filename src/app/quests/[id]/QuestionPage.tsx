import classNames from "classnames";
import { useCallback } from "react";
import type { Quest, Question } from "@/lib/quests";
import type { QuestSaveGame } from "@/lib/saveGame";
import {
  asQuestionsSolution,
  validateQuestionsQuestSolution,
} from "@/lib/util";

const AnswerButton = ({
  index,
  answer,
  selected,
  correct,
  incorrect,
  onClick,
}: {
  index: number;
  answer: string;
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  onClick: (index: number) => void;
}) => {
  const handleClick = useCallback(() => onClick(index), [onClick, index]);
  return (
    <button
      type="button"
      className={classNames("block", {
        "font-bold": selected,
        "text-green-400": correct,
        "text-red-400": incorrect,
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
  validate,
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
  validate: boolean;
}) {
  const selectedAnswer =
    (questSaveGame.solution as Record<string, number>)?.[question.id] ?? -1;

  const handleClickAnswer = useCallback(
    (answerIndex: number) => {
      const oldSolution = asQuestionsSolution(questSaveGame.solution);

      setQuestSaveGame((s) => {
        const solution = {
          ...(asQuestionsSolution(s.solution) ?? {}),
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
          correct={
            validate &&
            question.correctAnswer != null &&
            answerIndex === question.correctAnswer
          }
          incorrect={
            validate &&
            question.correctAnswer != null &&
            answerIndex !== question.correctAnswer &&
            answerIndex === selectedAnswer
          }
          onClick={handleClickAnswer}
        />
      ))}
    </div>
  );
}
