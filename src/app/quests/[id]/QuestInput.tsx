import classNames from "classnames";
import {
  type ChangeEvent,
  type FocusEventHandler,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import type { Quest, QuestType } from "@/lib/quests";
import type { QuestSaveGame } from "@/lib/saveGame";

function validate(input: string, correctInputs: Array<string>): number | null {
  // TODO: fuzzy search
  const index = correctInputs.indexOf(input);
  return index >= 0 ? index : null;
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
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
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
          : validate(value, quest.correctInputs);

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
          "border-2",
          isValid ? "border-white" : "border-red-800",
        )}
        value={value}
        // biome-ignore lint/a11y/noAutofocus: <is requested by the user when they press edit>
        autoFocus={initialValue !== ""}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
