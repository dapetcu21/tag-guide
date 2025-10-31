import classNames from "classnames";
import leven from "leven";
import {
  type ChangeEvent,
  type FocusEventHandler,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import { Trans } from "react-i18next";
import { transliterate } from "transliteration";
import type { QuestSolution } from "~/lib/saveGame";
import { QuestButton } from "./QuestButton";

const normalizeInput = (s: string): string =>
  transliterate(s)
    .toLowerCase()
    .replaceAll(/[^a-z]+/g, " ")
    .trim();

function validateInput(
  input: string,
  correctInputs: Array<string>,
  typoTolerance: number // Max allowed mistaken characters
): number | null {
  const normalizedInput = normalizeInput(input);

  const [_, bestIndex] = correctInputs.reduce(
    (acc, variant, currentIndex) => {
      const distance = leven(normalizedInput, normalizeInput(variant));
      return distance < acc[0] ? [distance, currentIndex] : acc;
    },
    [(typoTolerance ?? 3) + 1, -1],
  );

  return bestIndex >= 0 ? bestIndex : null;
}

export function getSolution(
  correctInputs: Array<string> | undefined,
  solution: QuestSolution | undefined,
) {
  if (typeof solution === "string") {
    return solution;
  }

  if (typeof solution === "number" && correctInputs) {
    return correctInputs[solution];
  }

  return "Invalid solution";
}

export function QuestInput({
  isCompleted,
  correctInputs,
  typoTolerance,
  solution,
  setSolution,
}: {
  isCompleted: boolean;
  correctInputs: Array<string> | undefined;
  typoTolerance: number;
  solution: QuestSolution | undefined;
  setSolution: (solution: number | string) => void;
}) {
  const [editing, setEditing] = useState(() => !isCompleted);
  const handleEditClick = useCallback(() => setEditing(true), []);
  const handleSubmit = useCallback(() => setEditing(false), []);

  if (editing)
    return (
      <QuestInputEditing
        initialValue={isCompleted ? getSolution(correctInputs, solution) : ""}
        correctInputs={correctInputs}
        typoTolerance={typoTolerance}
        setSolution={setSolution}
        onSubmit={handleSubmit}
      />
    );

  return (
    <div>
      <div className="text-orange">
        {"❝"}
        <span className="text-midnight">
          {getSolution(correctInputs, solution)}
        </span>
        {"❞"}
      </div>
      <QuestButton onClick={handleEditClick}>
        <Trans i18nKey="quest.input.edit">Edit</Trans>
      </QuestButton>
    </div>
  );
}

const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
  e.currentTarget.select();
};

export function QuestInputEditing({
  initialValue,
  correctInputs,
  typoTolerance,
  setSolution,
  onSubmit,
}: {
  initialValue: string;
  correctInputs: Array<string> | undefined;
  typoTolerance: number;
  setSolution: (solution: number | string) => void;
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
        correctInputs == null ? value : validateInput(value, correctInputs, typoTolerance);

      const isValid = solution !== null;
      setIsValid(isValid);

      if (isValid) {
        setSolution(solution);
        onSubmit();
      }
    },
    [correctInputs, typoTolerance, value, setSolution, onSubmit],
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
      <QuestButton type="submit">
        <Trans i18nKey="quest.input.submit">Submit</Trans>
      </QuestButton>
    </form>
  );
}
