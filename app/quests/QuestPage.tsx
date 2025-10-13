"use client";

import classNames from "classnames";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router";
import { type PageKey, PageType } from "~/lib/PageKey";
import { type Quest, QuestType } from "~/lib/quests";
import {
  defaultQuestSaveGame,
  type QuestSaveGame,
  useSaveGame,
} from "~/lib/saveGame";
import {
  asQuestionsSolution,
  getNextUnansweredQuestion,
  isQuestionAvailable,
  validateAnswerInSaveGame,
} from "~/lib/util";
import { QuestBrief } from "./QuestBrief";
import { QuestDebrief } from "./QuestDebrief";
import { QuestionPage } from "./QuestionPage";

const PageDot = ({
  page,
  selected,
  invalid,
  setPage,
}: {
  page: PageKey;
  selected: boolean;
  invalid: boolean;
  setPage: (_: PageKey) => void;
}) => {
  const handleClick = useCallback(() => setPage(page), [setPage, page]);
  return (
    <button
      type="button"
      className={classNames("w-2", "h-2", {
        "font-bold": selected,
        "text-red-400": invalid,
      })}
      onClick={handleClick}
    >
      {"*"}
    </button>
  );
};

function QuestContainer({
  children,
  availablePages,
  currentPage,
  setPage,
  quest,
  questSaveGame,
  validate,
}: {
  children: ReactNode;
  availablePages: Array<PageKey>;
  currentPage: PageKey;
  setPage: (_: PageKey) => void;
  quest: Quest;
  questSaveGame: QuestSaveGame;
  validate: boolean;
}) {
  let currentPageIndex = -1;
  const pageDots = availablePages.map((pageKey, index) => {
    const selected =
      pageKey.type === currentPage.type &&
      (pageKey.type !== PageType.Question ||
        currentPage.type !== PageType.Question ||
        pageKey.questionIndex === currentPage.questionIndex);

    if (selected) {
      currentPageIndex = index;
    }

    const invalid =
      validate &&
      pageKey.type === PageType.Question &&
      quest.type === QuestType.Questions &&
      !validateAnswerInSaveGame(
        quest.questions[pageKey.questionIndex],
        questSaveGame,
      );

    return (
      <PageDot
        key={
          pageKey.type === PageType.Question
            ? `q-${pageKey.questionIndex}`
            : pageKey.type
        }
        page={pageKey}
        setPage={setPage}
        selected={selected}
        invalid={invalid}
      />
    );
  });

  return (
    <div>
      <Link to="/">All quests</Link>
      <div>{children}</div>
      <div className="flex flex-row justify-center items-center">
        {currentPageIndex !== -1 && currentPageIndex > 0 && (
          <button
            type="button"
            onClick={() => setPage(availablePages[currentPageIndex - 1])}
          >
            Prev
          </button>
        )}
        {pageDots}
        {currentPageIndex !== -1 &&
          currentPageIndex + 1 < availablePages.length && (
            <button
              type="button"
              onClick={() => setPage(availablePages[currentPageIndex + 1])}
            >
              Next
            </button>
          )}
      </div>
    </div>
  );
}

export function QuestPage({
  quest
}: {
  quest: Quest;
}) {
  const [saveGame, setSaveGame] = useSaveGame();
  const questSaveGame = saveGame.quests[quest.id] ?? defaultQuestSaveGame;

  const setQuestSaveGame = useCallback(
    (updater: (_: QuestSaveGame) => QuestSaveGame) => {
      setSaveGame((s) => ({
        ...s,
        quests: {
          ...s.quests,
          [quest.id]: updater(s.quests[quest.id] ?? defaultQuestSaveGame),
        },
      }));
    },
    [quest.id, setSaveGame],
  );

  const [page, setPage] = useState<PageKey>(() => {
    return { type: PageType.Brief };
  });

  // On completion, navigate to debrief
  const { isCompleted } = questSaveGame;
  const prevIsCompleted = useRef(isCompleted);
  useEffect(() => {
    if (prevIsCompleted.current !== isCompleted) {
      prevIsCompleted.current = isCompleted;
      if (isCompleted) {
        setPage({ type: PageType.Debrief });
      }
    }
  }, [isCompleted]);

  const availablePages = useMemo(() => {
    const pages: Array<PageKey> = [{ type: PageType.Brief }];

    if (quest.type === QuestType.Questions) {
      for (let i = 0; i < quest.questions.length; i++) {
        if (isQuestionAvailable(quest.questions[i], questSaveGame)) {
          pages.push({ type: PageType.Question, questionIndex: i });
        }
      }
    }

    if (questSaveGame.isCompleted) pages.push({ type: PageType.Debrief });

    return pages;
  }, [quest, questSaveGame]);

  // If an answer was selected for an unanswered question, move on to the next unanswered question
  const handleAnswerSelected = useCallback(
    (
      previousSolution: Record<string, number> | null,
      previousAnswerIndex: number,
    ) => {
      if (previousAnswerIndex !== -1) {
        return;
      }

      if (page.type !== PageType.Question) {
        return;
      }

      const questionIndex = getNextUnansweredQuestion(
        quest,
        page.questionIndex,
        questSaveGame,
        previousSolution,
      );

      if (questionIndex >= 0) {
        setPage({ type: PageType.Question, questionIndex });
      }
    },
    [quest, questSaveGame, page],
  );

  // Validation starts only when all questions are unlocked and all mandatory questions are answered
  const shouldValidateQuestions = useMemo(() => {
    if (quest.type !== QuestType.Questions) return false;
    if (questSaveGame.isCompleted) return true;

    const solution = asQuestionsSolution(questSaveGame.solution);

    for (const question of quest.questions) {
      if (!isQuestionAvailable(question, questSaveGame)) return false;

      if (question.correctAnswer != null && solution?.[question.id] == null)
        return false;
    }

    return true;
  }, [quest, questSaveGame]);

  const pageContent = (() => {
    switch (page.type) {
      case PageType.Brief:
        return (
          <QuestBrief
            quest={quest}
            questSaveGame={questSaveGame}
            setQuestSaveGame={setQuestSaveGame}
            setPage={setPage}
          />
        );
      case PageType.Debrief: {
        if (!questSaveGame.isCompleted) {
          throw new Error("Quest not completed yet");
        }

        return <QuestDebrief quest={quest} />;
      }

      case PageType.Question: {
        if (
          quest.type !== QuestType.Questions ||
          page.questionIndex < 0 ||
          page.questionIndex >= quest.questions.length ||
          !isQuestionAvailable(
            quest.questions[page.questionIndex],
            questSaveGame,
          )
        ) {
          throw new Error("Question not available");
        }

        return (
          <QuestionPage
            quest={quest}
            question={quest.questions[page.questionIndex]}
            questSaveGame={questSaveGame}
            setQuestSaveGame={setQuestSaveGame}
            onAnswerSelected={handleAnswerSelected}
            validate={shouldValidateQuestions}
          />
        );
      }
    }
  })();

  return (
    <QuestContainer
      availablePages={availablePages}
      currentPage={page}
      setPage={setPage}
      quest={quest}
      questSaveGame={questSaveGame}
      validate={shouldValidateQuestions}
    >
      {pageContent}
    </QuestContainer>
  );
}
