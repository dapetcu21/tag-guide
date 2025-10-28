import type { DefaultNamespace, TFunction } from "i18next";

export enum QuestType {
  Scannable,
  TextInput,
  Questions,
}
type IntlFunc = (t: TFunction<DefaultNamespace>) => string;

export type Question = {
  id: string;
  text: IntlFunc;
  scanToken?: string; // Add this to hide the question until scanned. Omit to always display.
} & (
  | {
      answers: Array<IntlFunc>;
      correctAnswer?: number; // 0-3. Omit to not require validation
    }
  | {
      answers?: undefined;
      correctInputs?: Array<string>; // Omit to allow free answer
    }
);

export type Quest = {
  id: string;
  image?: string;
  brief: IntlFunc;
  debrief: IntlFunc;
} & (
  | {
      type: QuestType.Scannable;
      scanToken: string;
    }
  | {
      type: QuestType.TextInput;
      correctInputs?: Array<string>; // Omit to allow free answer
      typoTolerance: number; // Number of allowable mistyped characters
    }
  | {
      type: QuestType.Questions;
      questions: Array<Question>;
      numRequiredQuestions?: number; // Number of questions required to complete the quest. Omit to require all questions
    }
);
