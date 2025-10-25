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
  answers: Array<IntlFunc>;
  correctAnswer?: number; // 0-3. Omit to not require validation
  scanToken?: string; // Add this to hide the question until scanned. Omit to always display.
};

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

export const quests: Array<Quest> = [
  {
    id: "test_scannable",
    brief: (t) =>
      t("test_scannable.brief", "Scan the QR to complete this quest."),
    debrief: (t) =>
      t("test_scannable.debrief", "Congrats! You scanned the QR."),
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "test_text",
    brief: (t) =>
      t("test_text.brief", `Type "Cats/Dogs are cool!" to complete this quest.`),
    debrief: (t) =>
      t("test_text.debrief", "Congrats! You like animals."),
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "test_questions",
    brief: (t) => t("test_questions.brief", "Answer the questions correctly."),
    debrief: (t) =>
      t("test_questions.debrief", "Congrats! You can do math."),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) => t("test_questions.q1.text", "2 + 2 = ?"),
        answers: [
          (t) => t("test_questions.q1.a1", "1"),
          (t) => t("test_questions.q1.a2", "2"),
          (t) => t("test_questions.q1.a3", "3"),
          (t) => t("test_questions.q1.a4", "4"),
        ],
        correctAnswer: 3,
      },
      {
        id: "q2",
        text: (t) => t("test_questions.q2.text", "2 - 2 = ?"),
        answers: [
          (t) => t("test_questions.q2.a1", "1"),
          (t) => t("test_questions.q2.a2", "2"),
          (t) => t("test_questions.q2.a3", "0"),
          (t) => t("test_questions.q2.a4", "4"),
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "test_questions_qr",
    brief: (t) => t("test_questions_qr.brief", "Answer one of the questions."),
    debrief: (t) =>
      t("test_questions_qr.debrief", "Congrats! You have opinions."),
    type: QuestType.Questions,
    numRequiredQuestions: 1,
    questions: [
      {
        id: "color",
        text: (t) =>
          t("test_questions_qr.color.text", "What is your favorite color?"),
        answers: [
          (t) => t("test_questions_qr.color.red", "Red"),
          (t) => t("test_questions_qr.color.green", "Green"),
          (t) => t("test_questions_qr.color.blue", "Blue"),
          (t) => t("test_questions_qr.color.yellow", "Yellow"),
        ],
        scanToken: "q1",
      },
      {
        id: "author",
        text: (t) =>
          t(
            "test_question_qr.author.text",
            "What is your favorite fantasy author?",
          ),
        answers: [
          (t) => t("test_question_qr.author.gaiman", "Neil Gaiman"),
          (t) => t("test_question_qr.author.pratchett", "Terry Pratchett"),
          (t) => t("test_question_qr.author.sanderson", "Brandon Sanderson"),
          (t) => t("test_question_qr.author.rrmartin", "George R. R. Martin"),
        ],
        scanToken: "q2",
      },
    ],
  },
];

export const questsById: Map<string, Quest> = new Map(
  quests.map((quest) => [quest.id, quest]),
);
