import { useOutletContext } from "react-router";
import type { Quest } from "~/lib/quests";
import type { QuestSaveGame } from "~/lib/saveGame";

export type QuestContext = {
  quest: Quest;
  questSaveGame: QuestSaveGame;
  setQuestSaveGame: (
    updater: (questSaveGame: QuestSaveGame) => QuestSaveGame,
  ) => void;
  validate: boolean;
};

export const useQuestContext = () => useOutletContext<QuestContext>();
