import classNames from "classnames";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import type { Quest, QuestType } from "@/lib/quests";
import type { QuestSaveGame, QuestSolution } from "@/lib/saveGame";

function validate(input: string, correctInputs: Array<string>): number | null {
  // TODO: fuzzy search
  const index = correctInputs.indexOf(input);
  return index >= 0 ? index : null;
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
    return <QuestInputEditing quest={quest} onCompletion={onCompletion} />;

  let solution: string;

  if (typeof questSaveGame.solution === "string")
    solution = questSaveGame.solution;
  else if (typeof questSaveGame.solution === "number" && quest.correctInputs)
    solution = quest.correctInputs[questSaveGame.solution];
  else solution = "Invalid solution";

  return (
    <div>
      <div>{solution}</div>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
}

export function QuestInputEditing({
  quest,
  onCompletion,
}: {
  quest: Quest & { type: QuestType.TextInput };
  onCompletion: (solution: QuestSolution) => void;
}) {
  const [value, setValue] = useState("");
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
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
