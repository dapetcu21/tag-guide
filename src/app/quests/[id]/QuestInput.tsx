import classNames from "classnames";
import {
  type ChangeEvent,
  type FocusEventHandler,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import type { Quest, QuestType } from "@/lib/quests";
import type { QuestSaveGame, QuestSolution } from "@/lib/saveGame";

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
  onCompletion,
}: {
  quest: Quest & { type: QuestType.TextInput };
  questSaveGame: QuestSaveGame;
  onCompletion: (solution: QuestSolution) => void;
}) {
  const [editing, setEditing] = useState(() => !questSaveGame.isCompleted);
  const handleEditClick = useCallback(() => setEditing(true), []);

  if (editing)
    return (
      <QuestInputEditing
        quest={quest}
        initialValue={
          questSaveGame.isCompleted ? getSolution(quest, questSaveGame) : ""
        }
        onCompletion={onCompletion}
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
  onCompletion,
}: {
  quest: Quest & { type: QuestType.TextInput };
  initialValue: string;
  onCompletion: (solution: QuestSolution) => void;
}) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      const correctValue: string | number | null =
        quest.correctInputs == null
          ? value
          : validate(value, quest.correctInputs);

      const isValid = correctValue !== null;
      setIsValid(isValid);

      if (isValid) {
        onCompletion(correctValue);
      }
    },
    [quest, value, onCompletion],
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
