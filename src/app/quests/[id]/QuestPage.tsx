"use client";

import { notFound } from "next/navigation";
import { use, useCallback, useState } from "react";
import { type PageKey, PageType } from "@/lib/PageKey";
import { questsById } from "@/lib/quests";
import {
  defaultQuestSaveGame,
  type QuestSaveGame,
  type QuestSolution,
  useSaveGame,
} from "@/lib/saveGame";
import { QuestBrief } from "./QuestBrief";
import { QuestDebrief } from "./QuestDebrief";

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
    (newValue: QuestSaveGame) => {
      setSaveGame({
        ...saveGame,
        quests: { ...saveGame.quests, [id]: newValue },
      });
    },
    [id, saveGame, setSaveGame],
  );

  const [page, setPage] = useState<PageKey>(() => {
    return { type: PageType.Brief };
  });

  const handleCompletion = useCallback(
    (solution: QuestSolution | undefined) => {
      setQuestSaveGame(
        solution === undefined
          ? {
            ...questSaveGame,
            isCompleted: true,
          }
          : {
            ...questSaveGame,
            isCompleted: true,
            solution,
          },
      );

      setPage({ type: PageType.Debrief });
    },
    [questSaveGame, setQuestSaveGame],
  );

  if (quest == null) return notFound();

  switch (page.type) {
    case PageType.Brief:
      return (
        <QuestBrief
          quest={quest}
          questSaveGame={questSaveGame}
          onCompletion={handleCompletion}
          setPage={setPage}
        />
      );
    case PageType.Debrief:
      return (
        <QuestDebrief
          quest={quest}
          questSaveGame={questSaveGame}
          setPage={setPage}
        />
      );
    case PageType.Question:
      return notFound();
  }
}
