import classNames from "classnames";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { QuestType } from "~/lib/quests";
import {
  asQuestionsSolution,
  getNextUnansweredQuestion,
  isQuestionAvailable,
  validateQuestionsQuestSolution,
} from "~/lib/util";
import type { Route } from "./+types/QuestionPage";
import { useQuestContext } from "./QuestContext";

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

export default function QuestionPage({ params }: Route.ComponentProps) {
  const { quest, questSaveGame, setQuestSaveGame, validate } =
    useQuestContext();
  const questionIndex = Number.parseInt(params.questionIndex, 10);

  if (
    quest.type !== QuestType.Questions ||
    !Number.isSafeInteger(questionIndex) ||
    params.questionIndex !== questionIndex.toString() ||
    questionIndex < 0 ||
    questionIndex >= quest.questions.length
  ) {
    throw new Error("Invalid question index");
  }

  const question = quest.questions[questionIndex];

  if (!isQuestionAvailable(question, questSaveGame)) {
    throw new Error("Question not available");
  }

  const navigate = useNavigate();

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

      // If an answer was selected for an unanswered question,
      // move on to the next unanswered question
      if (oldSolution?.[question.id] == null) {
        const nextQuestionIndex = getNextUnansweredQuestion(
          quest,
          questionIndex,
          questSaveGame,
          oldSolution,
        );

        if (questionIndex >= 0) {
          navigate(`/quests/${quest.id}/questions/${nextQuestionIndex}`);
        }
      }
    },
    [quest, question, questionIndex, questSaveGame, setQuestSaveGame, navigate],
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
