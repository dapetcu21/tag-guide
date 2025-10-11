import classNames from "classnames";
import type { Quest, Question } from "@/lib/quests";
import type { QuestSaveGame } from "@/lib/saveGame";
import { validateQuestionsQuestSolution } from "@/lib/util";

export function QuestionPage({
  quest,
  question,
  questSaveGame,
  setQuestSaveGame,
}: {
  quest: Quest;
  question: Question;
  questSaveGame: QuestSaveGame;
  setQuestSaveGame: (
    updater: (questSaveGame: QuestSaveGame) => QuestSaveGame,
  ) => void;
}) {
  const selectedAnswer =
    (questSaveGame.solution as Record<string, number>)?.[question.id] ?? -1;

  return (
    <div>
      <div>{question.text}</div>
      {question.answers.map((answer, answerIndex) => (
        <button
          // biome-ignore lint/suspicious/noArrayIndexKey: <we have no other key>
          key={answerIndex}
          type="button"
          className={classNames({
            "font-bold": selectedAnswer === answerIndex,
          })}
          onClick={() => {
            setQuestSaveGame((s) => {
              const solution = {
                ...((typeof s.solution === "object" ? s.solution : null) ?? {}),
                [question.id]: answerIndex,
              };
              return {
                ...s,
                isCompleted:
                  s.isCompleted ||
                  validateQuestionsQuestSolution(quest, solution),
                solution,
              };
            });
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
