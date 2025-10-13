export enum QuestType {
  Scannable,
  TextInput,
  Questions,
}

export type Question = {
  id: string;
  text: string;
  answers: Array<string>;
  correctAnswer?: number; // 0-3. Omit to not require validation
  scanToken?: string; // Add this to hide the question until scanned. Omit to always display.
};

export type Quest = {
  id: string;
  text: string;
  image?: string;
  completionText: string;
  completionImage?: string;
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
    text: "Scan the QR to complete this quest.",
    completionText: "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "test_text",
    text: `Type "Cats/Dogs are cool!" to complete this quest.`,
    completionText: "Congrats! You like animals.",
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "test_questions",
    text: "Answer the questions correctly.",
    completionText: "Congrats! You can do math.",
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: "2 + 2 = ?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 3,
      },
      {
        id: "q2",
        text: "2 - 2 = ?",
        answers: ["1", "2", "0", "4"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "test_questions_qr",
    text: "Answer one of the questions.",
    completionText: "Congrats! You have opinions.",
    type: QuestType.Questions,
    numRequiredQuestions: 1,
    questions: [
      {
        id: "color",
        text: "What is your favorite color?",
        answers: ["Red", "Green", "Blue", "Yellow"],
        scanToken: "q1",
      },
      {
        id: "author",
        text: "What is your favorite fantasy author?",
        answers: [
          "Neil Gaiman",
          "Terry Pratchett",
          "Brandon Sanderson",
          "George R. R. Martin",
        ],
        scanToken: "q2",
      },
    ],
  },
];

export const questsById: Map<string, Quest> = new Map(
  quests.map((quest) => [quest.id, quest]),
);
