import { type Quest, QuestType } from "~/lib/Quest";

export const mockQuests: Array<Quest> = [
  {
    id: "test_scannable",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "test_text",
    brief: () => 'Type "Cats/Dogs are cool!" to complete this quest.',
    debrief: () => "Congrats! You like animals.",
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "test_questions",
    brief: () => "Answer the questions correctly.",
    debrief: () => "Congrats! You can do math.",
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: () => "2 + 2 = ?",
        answers: [() => "1", () => "2", () => "3", () => "4"],
        correctAnswer: 3,
      },
      {
        id: "q2",
        text: () => "2 - 2 = ?",
        answers: [() => "1", () => "2", () => "0", () => "4"],
        correctAnswer: 2,
      },
      {
        id: "q3",
        text: () => 'Type "meow" to continue',
        correctInputs: ["meow"],
      },
    ],
  },
  {
    id: "test_questions_qr",
    brief: () => "Answer one of the questions.",
    debrief: () => "Congrats! You have opinions.",
    type: QuestType.Questions,
    numRequiredQuestions: 1,
    questions: [
      {
        id: "color",
        text: () => "What is your favorite color?",
        answers: [() => "Red", () => "Green", () => "Blue", () => "Yellow"],
        scanToken: "q1",
      },
      {
        id: "author",
        text: () => "What is your favorite fantasy author?",
        answers: [
          () => "Neil Gaiman",
          () => "Terry Pratchett",
          () => "Brandon Sanderson",
          () => "George R. R. Martin",
        ],
        scanToken: "q2",
      },
    ],
  },
];
