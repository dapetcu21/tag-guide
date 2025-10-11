"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { type PageKey, PageType } from "@/lib/PageKey";
import { QuestType, questsById } from "@/lib/quests";
import {
  defaultQuestSaveGame,
  type QuestSaveGame,
  useSaveGame,
} from "@/lib/saveGame";
import { isQuestionAvailable } from "@/lib/util";
import { QuestBrief } from "./QuestBrief";
import { QuestDebrief } from "./QuestDebrief";
import { QuestionPage } from "./QuestionPage";

// biome-ignore lint/correctness/noUnusedFunctionParameters: <not implemented>
const PageDot = ({ page, onClick }: { page: PageKey; onClick: () => void }) => (
  <button type="button" className="w-2 h-2" onClick={onClick}>
    {"*"}
  </button>
);

function QuestContainer({
  children,
  availablePages,
  currentPage,
  setPage,
}: {
  children: ReactNode;
  availablePages: Array<PageKey>;
  currentPage: PageKey;
  setPage: (_: PageKey) => void;
}) {
  let currentPageIndex = -1;
  const pageDots = availablePages.map((pageKey, index) => {
    const selected =
      pageKey.type === currentPage.type &&
      (pageKey.type !== PageType.Question ||
        currentPage.type !== PageType.Question ||
        pageKey.questionIndex === currentPage.questionIndex);

    if (selected) currentPageIndex = index;

    return (
      <PageDot
        key={
          pageKey.type === PageType.Question
            ? `q-${pageKey.questionIndex}`
            : pageKey.type
        }
        page={pageKey}
        onClick={() => setPage(pageKey)}
      />
    );
  });

  return (
    <div>
      <Link href="/">All quests</Link>
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

export default function QuestPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const quest = questsById.get(id);

  const [saveGame, setSaveGame] = useSaveGame();
  const questSaveGame = saveGame.quests[id] ?? defaultQuestSaveGame;
  const setQuestSaveGame = useCallback(
    (updater: (_: QuestSaveGame) => QuestSaveGame) => {
      setSaveGame((s) => ({
        ...s,
        quests: {
          ...s.quests,
          [id]: updater(s.quests[id] ?? defaultQuestSaveGame),
        },
      }));
    },
    [id, setSaveGame],
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

  const getPages = useMemo(() => {
    if (quest == null) return [];

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

  if (quest == null) {
    return notFound();
  }

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
          return notFound();
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
          return notFound();
        }

        return (
          <QuestionPage
            quest={quest}
            question={quest.questions[page.questionIndex]}
            questSaveGame={questSaveGame}
            setQuestSaveGame={setQuestSaveGame}
          />
        );
      }
    }
  })();

  return (
    <QuestContainer
      availablePages={getPages}
      currentPage={page}
      setPage={setPage}
    >
      {pageContent}
    </QuestContainer>
  );
}
