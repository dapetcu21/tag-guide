import classNames from "classnames";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import type { Quest, QuestType } from "@/lib/quests";
import type { QuestSolution } from "@/lib/saveGame";

function validate(input: string, correctInputs: Array<string>): number | null {
  // TODO: fuzzy search
  const index = correctInputs.indexOf(input);
  return index >= 0 ? index : null;
}

export function QuestInput({
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

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
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
  }, [quest, value, onCompletion]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={classNames("border-2", isValid ? "border-white" : "border-red-800")}
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
