import classNames from "classnames";
import leven from "leven";
import {
  type ChangeEvent,
  type FocusEventHandler,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import { transliterate } from "transliteration";
import type { Quest, QuestType } from "~/lib/quests";
import type { QuestSaveGame } from "~/lib/saveGame";
import { QuestButton } from "./QuestButton";

const normalizeInput = (s: string): string =>
  transliterate(s)
    .toLowerCase()
    .replaceAll(/[^a-z]+/g, " ")
    .trim();

function validateInput(
  input: string,
  correctInputs: Array<string>,
): number | null {
  const normalizedInput = normalizeInput(input);
  const treshold = 3; // Max allowed mistaken characters

  const [_, bestIndex] = correctInputs.reduce(
    (acc, variant, currentIndex) => {
      const distance = leven(normalizedInput, normalizeInput(variant));
      return distance < acc[0] ? [distance, currentIndex] : acc;
    },
    [treshold + 1, -1],
  );

  return bestIndex >= 0 ? bestIndex : null;
}

function getSolution(
  quest: Quest & { type: QuestType.TextInput },
  questSaveGame: QuestSaveGame,
) {
  if (typeof questSaveGame.solution === "string") {
    return questSaveGame.solution;
  }

  if (typeof questSaveGame.solution === "number" && quest.correctInputs) {
    return quest.correctInputs[questSaveGame.solution];
  }

  return "Invalid solution";
}

export function QuestInput({
  quest,
  questSaveGame,
  setQuestSaveGame,
}: {
  quest: Quest & { type: QuestType.TextInput };
  questSaveGame: QuestSaveGame;
  setQuestSaveGame: (
    updater: (questSaveGame: QuestSaveGame) => QuestSaveGame,
  ) => void;
}) {
  const [editing, setEditing] = useState(() => !questSaveGame.isCompleted);
  const handleEditClick = useCallback(() => setEditing(true), []);
  const handleSubmit = useCallback(() => setEditing(false), []);

  if (editing)
    return (
      <QuestInputEditing
        quest={quest}
        initialValue={
          questSaveGame.isCompleted ? getSolution(quest, questSaveGame) : ""
        }
        setQuestSaveGame={setQuestSaveGame}
        onSubmit={handleSubmit}
      />
    );

  return (
    <div>
      <div>{getSolution(quest, questSaveGame)}</div>
      <QuestButton onClick={handleEditClick}>Edit</QuestButton>
    </div>
  );
}

const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
  e.currentTarget.select();
};

export function QuestInputEditing({
  quest,
  initialValue,
  setQuestSaveGame,
  onSubmit,
}: {
  quest: Quest & { type: QuestType.TextInput };
  initialValue: string;
  setQuestSaveGame: (
    updater: (questSaveGame: QuestSaveGame) => QuestSaveGame,
  ) => void;
  onSubmit: () => void;
}) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      const solution: string | number | null =
        quest.correctInputs == null
          ? value
          : validateInput(value, quest.correctInputs);

      const isValid = solution !== null;
      setIsValid(isValid);

      if (isValid) {
        setQuestSaveGame((s) => ({
          ...s,
          isCompleted: true,
          solution,
        }));
        onSubmit();
      }
    },
    [quest, value, setQuestSaveGame, onSubmit],
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={classNames(
          "border-2 w-full p-2",
          isValid ? "border-midnight" : "border-magenta",
        )}
        value={value}
        // biome-ignore lint/a11y/noAutofocus: <is requested by the user when they press edit>
        autoFocus={initialValue !== ""}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      <QuestButton type="submit">Submit</QuestButton>
    </form>
  );
}
