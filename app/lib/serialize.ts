import { QuestType, quests } from "./quests";
import type { SaveGame } from "./saveGame";
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

const completedSize = Math.ceil(quests.length / 8);
const freeInputSize = freeInputQuests.length;
const freeQuestionsSize = Math.ceil(freeQuestions.length / 4);

export function serializeSave(save: SaveGame): ArrayBuffer {
  const buffer = new ArrayBuffer(
    completedSize + freeInputSize + freeQuestionsSize,
  );

  const completedBytes = new Uint8Array(buffer, 0, completedSize);
  for (let i = 0; i < quests.length; i++) {
    if (save.quests[quests[i].id]?.isCompleted)
      completedBytes[i >> 3] |= 1 << (i & 7);
  }

  const freeInputBytes = new Uint8Array(buffer, completedSize, freeInputSize);
  for (let i = 0; i < freeInputQuests.length; i++) {
    freeInputBytes[i] = (save.quests[freeInputQuests[i].id]?.solution ??
      255) as number;
  }

  const freeQuestionBytes = new Uint8Array(
    buffer,
    completedSize + freeInputSize,
    freeQuestionsSize,
  );
  for (let i = 0; i < freeQuestions.length; i++) {
    const [quest, question] = freeQuestions[i];
    const answer =
      asQuestionsSolution(save.quests[quest.id]?.solution)?.[question.id] ?? 0;
    freeQuestionBytes[i >> 2] |= answer << ((i & 3) << 1);
  }

  return buffer;
}
