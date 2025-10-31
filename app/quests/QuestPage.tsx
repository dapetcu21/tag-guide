import classNames from "classnames";
import { type ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { LuTrophy } from "react-icons/lu";
import {
  MdChevronLeft,
  MdChevronRight,
  MdCircle,
  MdClose,
  MdQuestionMark,
  MdWarningAmber,
} from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router";
import { QRScannerProvider } from "~/components/QRScanner";
import Rulers from "~/components/Rulers";
import { Link, setTransitionTypes } from "~/lib/fakeTransitionType";
import { type Quest, QuestType } from "~/lib/Quest";
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
  index,
  selectedIndex,
}: {
  page: PageRoute;
  selected: boolean;
  invalid: boolean;
  index: number;
  selectedIndex: number;
}) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    if (selected) return;
    setTransitionTypes([index < selectedIndex ? "quest-prev" : "quest-next"]);
    navigate(page.path, { viewTransition: true });
  }, [page.path, navigate, selected, index, selectedIndex]);

  return (
    <button
      type="button"
      className={classNames(
        "size-12 flex relative justify-center items-center transition-colors",
        {
          "text-orange": selected,
        },
      )}
      onClick={handleClick}
    >
      {page.type === PageType.Brief && <MdQuestionMark size={26} />}
      {page.type === PageType.Debrief && <LuTrophy size={26} />}
      {page.type === PageType.Question && <MdCircle size={12} />}
      <div
        className={classNames(
          "absolute top-2 left-[50%] transform transition-all translate-x-[-50%] bg-yellow rounded-t-[50%] text-orange p-1 pb-2",
          invalid
            ? "opacity-100 translate-y-[-100%]"
            : "opacity-0 translate-y-[0]",
        )}
      >
        <MdWarningAmber size={26} />
      </div>
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
  availablePages.forEach((page, index) => {
    const selected = currentPath === page.path;
    if (selected) {
      currentPageIndex = index;
    }
  });

  let hasAnyInvalid = false;

  const pageDots = availablePages.map((page, index) => {
    const selected = currentPath === page.path;

    const invalid =
      validate &&
      page.type === PageType.Question &&
      quest.type === QuestType.Questions &&
      !validateAnswerInSaveGame(
        quest.questions[page.questionIndex],
        questSaveGame,
      );

    hasAnyInvalid = hasAnyInvalid || invalid;

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
        index={index}
        selectedIndex={currentPageIndex}
      />
    );
  });

  const hasPrev = currentPageIndex !== -1 && currentPageIndex > 0;
  const hasNext =
    currentPageIndex !== -1 && currentPageIndex + 1 < availablePages.length;

  return (
    <div className="flex flex-col justify-stretch items-center w-full h-full p-4 overflow-hidden">
      <div className="w-full h-full max-w-2xl relative">
        <Rulers viewTransitionName="main-rulers" />
        <style>
          {`
            html.view-transition-home-${quest.id} #quest-container {
              view-transition-name: quest-${quest.id};
              view-transition-class: quest;
            }
          `}
        </style>
        <div id="quest-container" className="w-full h-full">
          <div id="quest-page" className="w-full h-full border-pink">
            <div
              className={classNames(
                "bg-yellow w-full h-full rounded-2xl overflow-auto pt-16 px-4",
                {
                  "pb-20": hasAnyInvalid,
                  "pb-12": !hasAnyInvalid,
                },
              )}
            >
              {children}
            </div>
          </div>
          <Link
            id="quest-close"
            className="absolute top-0 left-0 size-16 flex justify-center items-center"
            to="/"
            viewTransition={{ types: [`home-${quest.id}`] }}
          >
            <MdClose className="bg-yellow rounded-[50%] p-2" size={48} />
          </Link>
          <div
            id="quest-nav"
            className="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center bg-yellow rounded-b-2xl"
          >
            <button
              type="button"
              className={classNames(
                "flex justify-center items-center size-12",
                hasPrev ? "opacity-100" : "opacity-0",
              )}
              disabled={!hasPrev}
              onClick={() => {
                setTransitionTypes(["quest-prev"]);
                navigate(availablePages[currentPageIndex - 1].path, {
                  viewTransition: true,
                });
              }}
            >
              <MdChevronLeft size={32} />
            </button>
            {pageDots}
            <button
              type="button"
              className={classNames(
                "flex justify-center items-center size-12",
                hasNext ? "opacity-100" : "opacity-0",
              )}
              disabled={!hasNext}
              onClick={() => {
                setTransitionTypes(["quest-next"]);
                navigate(availablePages[currentPageIndex + 1].path, {
                  viewTransition: true,
                });
              }}
            >
              <MdChevronRight size={32} />
            </button>
          </div>
        </div>
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
        setTransitionTypes(["quest-next"]);
        navigate(`/quests/${quest.id}/debrief`, { viewTransition: true });
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

      if ((question.answers == null || question.correctAnswer != null) && solution?.[question.id] == null)
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
