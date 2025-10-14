"use client";

import classNames from "classnames";
import { type ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { QRScannerProvider } from "~/components/QRScanner";
import { type Quest, QuestType } from "~/lib/quests";
import { type QuestSaveGame, useQuestSaveGame } from "~/lib/saveGame";
import {
  asQuestionsSolution,
  isQuestionAvailable,
  validateAnswerInSaveGame,
} from "~/lib/util";

enum PageType {
  Brief,
  Debrief,
  Question,
}

type PageRoute = {
  path: string;
  type: PageType;
  questionIndex: number;
};

const PageDot = ({
  page,
  selected,
  invalid,
}: {
  page: PageRoute;
  selected: boolean;
  invalid: boolean;
}) => {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate(page.path),
    [page.path, navigate],
  );
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
  quest,
  questSaveGame,
  validate,
}: {
  children: ReactNode;
  availablePages: Array<PageRoute>;
  quest: Quest;
  questSaveGame: QuestSaveGame;
  validate: boolean;
}) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  let currentPageIndex = -1;
  const pageDots = availablePages.map((page, index) => {
    const selected = currentPath === page.path;
    if (selected) {
      currentPageIndex = index;
    }

    const invalid =
      validate &&
      page.type === PageType.Question &&
      quest.type === QuestType.Questions &&
      !validateAnswerInSaveGame(
        quest.questions[page.questionIndex],
        questSaveGame,
      );

    return (
      <PageDot
        key={
          page.type === PageType.Question
            ? `q-${page.questionIndex}`
            : page.type
        }
        page={page}
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
            onClick={() => navigate(availablePages[currentPageIndex - 1].path)}
          >
            Prev
          </button>
        )}
        {pageDots}
        {currentPageIndex !== -1 &&
          currentPageIndex + 1 < availablePages.length && (
            <button
              type="button"
              onClick={() =>
                navigate(availablePages[currentPageIndex + 1].path)
              }
            >
              Next
            </button>
          )}
      </div>
    </div>
  );
}

export function QuestPage({ quest }: { quest: Quest }) {
  const [questSaveGame, setQuestSaveGame] = useQuestSaveGame(quest.id);

  const navigate = useNavigate();

  // On completion, navigate to debrief
  const { isCompleted } = questSaveGame;
  const prevIsCompleted = useRef(isCompleted);
  useEffect(() => {
    if (prevIsCompleted.current !== isCompleted) {
      prevIsCompleted.current = isCompleted;
      if (isCompleted) {
        navigate(`/quests/${quest.id}/debrief`);
      }
    }
  }, [isCompleted, navigate, quest]);

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

  const availablePages = useMemo(() => {
    const prefix = `/quests/${quest.id}`;
    const pages: Array<PageRoute> = [
      { path: `${prefix}/brief`, type: PageType.Brief, questionIndex: -1 },
    ];

    if (quest.type === QuestType.Questions) {
      for (let i = 0; i < quest.questions.length; i++) {
        if (isQuestionAvailable(quest.questions[i], questSaveGame)) {
          pages.push({
            path: `${prefix}/questions/${i}`,
            type: PageType.Question,
            questionIndex: i,
          });
        }
      }
    }

    if (questSaveGame.isCompleted)
      pages.push({
        path: `${prefix}/debrief`,
        type: PageType.Debrief,
        questionIndex: -1,
      });
    return pages;
  }, [quest, questSaveGame]);

  return (
    <QRScannerProvider>
      <QuestContainer
        availablePages={availablePages}
        quest={quest}
        questSaveGame={questSaveGame}
        validate={shouldValidateQuestions}
      >
        <Outlet
          context={{
            quest,
            questSaveGame,
            setQuestSaveGame,
            validate: shouldValidateQuestions,
          }}
        />
      </QuestContainer>
    </QRScannerProvider>
  );
}
