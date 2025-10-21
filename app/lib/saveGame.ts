import { useCallback, useSyncExternalStore } from "react";

export type QuestSolution = null | string | number | Record<string, number>;

export type QuestSaveGame = {
  isCompleted: boolean;
  solution: QuestSolution;
  discoveries: Record<string, boolean>;
};

export type SaveGame = {
  salt: number;
  quests: Record<string, QuestSaveGame>;
};

export const defaultSaveGame: SaveGame = { salt: 0, quests: {} };
export const defaultQuestSaveGame: QuestSaveGame = {
  isCompleted: false,
  solution: null,
  discoveries: {},
};
const localStorageKey = "saveGame";

const getNewSaveGame = () => {
  const buffer = new Uint16Array(1);
  crypto.getRandomValues(buffer);
  return {
    ...defaultSaveGame,
    salt: buffer[0],
  };
};

let cachedSaveGame: SaveGame | null = null;
export function getSaveGame(): SaveGame {
  if (cachedSaveGame) return cachedSaveGame;

  try {
    const localStorageItem = localStorage.getItem(localStorageKey);
    if (localStorageItem !== null)
      cachedSaveGame = JSON.parse(localStorageItem);
  } catch (_) {}

  if (!cachedSaveGame) {
    cachedSaveGame = getNewSaveGame();
  }

  return cachedSaveGame;
}

const subscribers: Set<() => void> = new Set();

export function subscribeToSaveGame(onChange: () => void) {
  subscribers.add(onChange);
  return () => subscribers.delete(onChange);
}

export type SaveGameReducer = (_: SaveGame) => SaveGame;

export function setSaveGame(reducer: SaveGameReducer) {
  cachedSaveGame = reducer(getSaveGame());

  try {
    localStorage.setItem(localStorageKey, JSON.stringify(cachedSaveGame));
  } catch (_) {}

  // To prevent issues when unsubscribing during the callback
  for (const onChange of Array.from(subscribers)) {
    onChange();
  }
}

export const resetSaveGame = () => setSaveGame(() => getNewSaveGame());

const getServerSnapshot = () => defaultSaveGame;
export function useSaveGame(): [SaveGame, (reducer: SaveGameReducer) => void] {
  return [
    useSyncExternalStore<SaveGame>(
      subscribeToSaveGame,
      getSaveGame,
      getServerSnapshot,
    ),
    setSaveGame,
  ];
}

export type QuestSaveGameReducer = (_: QuestSaveGame) => QuestSaveGame;

export const reduceQuestSaveGame = (
  s: SaveGame,
  questId: string,
  reducer: QuestSaveGameReducer,
) => ({
  ...s,
  quests: {
    ...s.quests,
    [questId]: reducer(s.quests[questId] ?? defaultQuestSaveGame),
  },
});

export function useQuestSaveGame(
  questId: string,
): [QuestSaveGame, (reducer: QuestSaveGameReducer) => void] {
  const [saveGame, setSaveGame] = useSaveGame();
  const questSaveGame = saveGame.quests[questId] ?? defaultQuestSaveGame;

  const setQuestSaveGame = useCallback(
    (reducer: QuestSaveGameReducer) => {
      setSaveGame((s) => reduceQuestSaveGame(s, questId, reducer));
    },
    [questId, setSaveGame],
  );

  return [questSaveGame, setQuestSaveGame];
}
