import classNames from "classnames";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { setTransitionTypes } from "~/lib/fakeTransitionType";
import { QuestType } from "~/lib/Quest";
import {
  asQuestionsSolution,
  getNextUnansweredQuestion,
  isQuestionAvailable,
  validateQuestionsQuestSolution,
} from "~/lib/util";
import type { Route } from "./+types/QuestionPage";
import { useQuestContext } from "./QuestContext";
import { QuestInput } from "./QuestInput";
import { QuestMarkdown } from "./QuestMarkdown";

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
      className={classNames("block p-2", {
        "bg-orange": !selected,
        "bg-teal": selected,
        "text-yellow": correct && !selected,
        "text-orange": incorrect,
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

  const solution: number | string | undefined = (
    questSaveGame.solution as Record<string, number | string>
  )?.[question.id];

  const setSolution = useCallback(
    (solution: number | string) => {
      const oldSolution = asQuestionsSolution(questSaveGame.solution);
      setQuestSaveGame((s) => {
        const questSolution = {
          ...(asQuestionsSolution(s.solution) ?? {}),
          [question.id]: solution,
        };
        return {
          ...s,
          isCompleted:
            s.isCompleted ||
            validateQuestionsQuestSolution(quest, questSolution),
          solution: questSolution,
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

        if (nextQuestionIndex >= 0) {
          setTransitionTypes([
            nextQuestionIndex < questionIndex ? "quest-prev" : "quest-next",
          ]);
          navigate(`/quests/${quest.id}/questions/${nextQuestionIndex}`, {
            viewTransition: true,
          });
        }
      }
    },
    [quest, question, questionIndex, questSaveGame, setQuestSaveGame, navigate],
  );

  const { t } = useTranslation();

  return (
    <div>
      <QuestMarkdown text={question.text(t)} />
      {question.answers !== undefined && (
        <div className="w-full flex flex-col items-stretch gap-2 my-2">
          {question.answers.map((answer, answerIndex) => (
            <AnswerButton
              // biome-ignore lint/suspicious/noArrayIndexKey: <we have no other key>
              key={answerIndex}
              index={answerIndex}
              answer={answer(t)}
              selected={answerIndex === (solution as number | undefined)}
              correct={
                validate &&
                question.correctAnswer != null &&
                answerIndex === question.correctAnswer
              }
              incorrect={
                validate &&
                question.correctAnswer != null &&
                answerIndex !== question.correctAnswer &&
                answerIndex === (solution as number | undefined)
              }
              onClick={setSolution}
            />
          ))}
        </div>
      )}
      {question.answers === undefined && (
        <div className="mt-4">
          <QuestInput
            correctInputs={question.correctInputs}
            isCompleted={solution != null}
            solution={solution}
            setSolution={setSolution}
          />
        </div>
      )}
    </div>
  );
}
