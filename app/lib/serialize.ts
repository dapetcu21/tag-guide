import { decode, encode } from "base64-arraybuffer";
import { QuestType, quests } from "./quests";
import {
  defaultSaveGame,
  reduceQuestSaveGame,
  type SaveGame,
} from "./saveGame";
import { asQuestionsSolution } from "./util";

export const version = 0;

const freeInputQuests = quests.filter(
  (q) => q.type === QuestType.TextInput && q.correctInputs != null,
);
const freeQuestions = quests
  .filter((q) => q.type === QuestType.Questions)
  .flatMap((q) =>
    q.questions
      .filter((que) => que.correctAnswer == null)
      .map((que) => [q, que]),
  );

const saltSize = 2;
const completedSize = Math.ceil(quests.length / 8);
const freeInputSize = freeInputQuests.length;
const freeQuestionsSize = Math.ceil(freeQuestions.length / 4);
const freeQuestionsAnsweredSize = Math.ceil(freeQuestions.length / 8);

export function serializeSave(save: SaveGame): ArrayBuffer {
  const buffer = new ArrayBuffer(
    saltSize +
      completedSize +
      freeInputSize +
      freeQuestionsSize +
      freeQuestionsAnsweredSize,
  );

  const saltBytes = new Uint16Array(buffer, 0, saltSize);
  saltBytes[0] = save.salt;

  const completedBytes = new Uint8Array(buffer, 0, saltSize + completedSize);
  for (let i = 0; i < quests.length; i++) {
    if (save.quests[quests[i].id]?.isCompleted)
      completedBytes[i >> 3] |= 1 << (i & 7);
  }

  const freeInputBytes = new Uint8Array(
    buffer,
    saltSize + completedSize,
    freeInputSize,
  );
  for (let i = 0; i < freeInputQuests.length; i++) {
    freeInputBytes[i] = (save.quests[freeInputQuests[i].id]?.solution ??
      255) as number;
  }

  const freeQuestionBytes = new Uint8Array(
    buffer,
    saltSize + completedSize + freeInputSize,
    freeQuestionsSize,
  );
  const freeQuestionAnsweredBytes = new Uint8Array(
    buffer,
    saltSize + completedSize + freeInputSize + freeQuestionsSize,
    freeQuestionsAnsweredSize,
  );

  for (let i = 0; i < freeQuestions.length; i++) {
    const [quest, question] = freeQuestions[i];
    const answer = asQuestionsSolution(save.quests[quest.id]?.solution)?.[
      question.id
    ];
    if (answer != null) freeQuestionAnsweredBytes[i >> 3] |= 1 << (i & 7);
    freeQuestionBytes[i >> 2] |= (answer ?? 0) << ((i & 3) << 1);
  }

  return buffer;
}

export function deserializeSave(buffer: ArrayBuffer): SaveGame {
  let save = defaultSaveGame;

  const saltBytes = new Uint16Array(buffer, 0, saltSize);
  save = { ...save, salt: saltBytes[0] };

  const completedBytes = new Uint8Array(buffer, 0, saltSize + completedSize);
  for (let i = 0; i < quests.length; i++) {
    if (completedBytes[i >> 3] & (1 << (i & 7))) {
      save = reduceQuestSaveGame(save, quests[i].id, (qs) => ({
        ...qs,
        isCompleted: true,
      }));
    }
  }

  const freeInputBytes = new Uint8Array(
    buffer,
    saltSize + completedSize,
    freeInputSize,
  );
  for (let i = 0; i < freeInputQuests.length; i++) {
    save = reduceQuestSaveGame(save, freeInputQuests[i].id, (qs) => ({
      ...qs,
      solution: freeInputBytes[i],
    }));
  }

  const freeQuestionBytes = new Uint8Array(
    buffer,
    saltSize + completedSize + freeInputSize,
    freeQuestionsSize,
  );
  const freeQuestionAnsweredBytes = new Uint8Array(
    buffer,
    saltSize + completedSize + freeInputSize + freeQuestionsSize,
    freeQuestionsAnsweredSize,
  );

  for (let i = 0; i < freeQuestions.length; i++) {
    const [quest, question] = freeQuestions[i];

    if (freeQuestionAnsweredBytes[i >> 3] & (1 << (i & 7))) {
      const answer = (freeQuestionBytes[i >> 2] >> ((i & 3) << 1)) & 3;
      save = reduceQuestSaveGame(save, quest.id, (qs) => ({
        ...qs,
        solution: {
          ...asQuestionsSolution(save.quests[quest.id]?.solution),
          [question.id]: answer,
        },
      }));
    }
  }

  for (const quest of quests) {
    if (quest.type === QuestType.Questions) {
      for (const question of quest.questions) {
        if (
          question.correctAnswer != null &&
          save.quests?.[quest.id]?.isCompleted
        ) {
          save = reduceQuestSaveGame(save, quest.id, (qs) => ({
            ...qs,
            solution: {
              ...asQuestionsSolution(save.quests[quest.id]?.solution),
              [question.id]: question.correctAnswer ?? 0,
            },
          }));
        }

        if (
          question.scanToken &&
          asQuestionsSolution(save.quests?.[quest.id]?.solution)?.[
            question.id
          ] != null
        ) {
          save = reduceQuestSaveGame(save, quest.id, (qs) => ({
            ...qs,
            discoveries: {
              ...qs.discoveries,
              [question.id]: true,
            },
          }));
        }
      }
    }
  }

  return save;
}

export const encodeSave = (s: SaveGame) =>
  encode(serializeSave(s)).replaceAll("+", "-").replaceAll("/", "_");

export const decodeSave = (s: string) =>
  deserializeSave(decode(s.replaceAll("-", "+").replaceAll("_", "/")));
