import { useSyncExternalStore } from "react";

export type QuestSolution = null | string | number | Record<string, number>;

export type QuestSaveGame = {
  isCompleted: boolean;
  solution: QuestSolution;
  discoveries: Record<string, boolean>;
};

export type SaveGame = { quests: Record<string, QuestSaveGame> };

export const defaultSaveGame: SaveGame = { quests: {} };
export const defaultQuestSaveGame: QuestSaveGame = {
  isCompleted: false,
  solution: null,
  discoveries: {},
};
const localStorageKey = "saveGame";

let cachedSaveGame: SaveGame | null = null;
export function getSaveGame(): SaveGame {
  if (cachedSaveGame) return cachedSaveGame;

  try {
    const localStorageItem = localStorage.getItem(localStorageKey);
    if (localStorageItem !== null)
      cachedSaveGame = JSON.parse(localStorageItem);
  } catch (_) {}

  if (!cachedSaveGame) {
    cachedSaveGame = defaultSaveGame;
  }

  return cachedSaveGame;
}

const subscribers: Set<() => void> = new Set();

export function subscribeToSaveGame(onChange: () => void) {
  subscribers.add(onChange);
  return () => subscribers.delete(onChange);
}

export function setSaveGame(updater: (_: SaveGame) => SaveGame) {
  cachedSaveGame = updater(getSaveGame());

  try {
    localStorage.setItem(localStorageKey, JSON.stringify(cachedSaveGame));
  } catch (_) {}

  // To prevent issues when unsubscribing during the callback
  for (const onChange of Array.from(subscribers)) {
    onChange();
  }
}

export const resetSaveGame = () => setSaveGame(() => defaultSaveGame);

const getServerSnapshot = () => defaultSaveGame;
export function useSaveGame(): [
  SaveGame,
  (updater: (saveGame: SaveGame) => SaveGame) => void,
] {
  return [
    useSyncExternalStore<SaveGame>(
      subscribeToSaveGame,
      getSaveGame,
      getServerSnapshot,
    ),
    setSaveGame,
  ];
}
