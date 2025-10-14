import { QuestType, quests, questsById } from "./quests";
import { reduceQuestSaveGame, setSaveGame } from "./saveGame";

export type ScanTokenOrigin = {
  questId: string;
  questionIndex: number | null;
  questionId: string | null;
};

export const scanTokenOrigins: Map<string, ScanTokenOrigin> = new Map();
for (const quest of quests) {
  if (quest.type === QuestType.Scannable) {
    scanTokenOrigins.set(quest.scanToken, {
      questId: quest.id,
      questionIndex: null,
      questionId: null,
    });
  } else if (quest.type === QuestType.Questions) {
    for (let i = 0; i < quest.questions.length; i++) {
      const question = quest.questions[i];
      if (question.scanToken != null) {
        scanTokenOrigins.set(question.scanToken, {
          questId: quest.id,
          questionIndex: i,
          questionId: question.id,
        });
      }
    }
  }
}

export function processScanToken(scanToken: string): string | null {
  const origin = scanTokenOrigins.get(scanToken);
  if (origin == null) return null;

  const quest = questsById.get(origin.questId);
  if (quest == null) return null;

  if (quest.type === QuestType.Scannable && quest.scanToken === scanToken) {
    setSaveGame((s) =>
      reduceQuestSaveGame(s, quest.id, (qs) => ({
        ...qs,
        isCompleted: true,
      })),
    );
    return `/quests/${quest.id}/debrief`;
  }

  if (quest.type === QuestType.Questions && origin.questionIndex !== null) {
    const question = quest.questions[origin.questionIndex];
    setSaveGame((s) =>
      reduceQuestSaveGame(s, quest.id, (qs) => ({
        ...qs,
        discoveries: {
          ...qs.discoveries,
          [question.id]: true,
        },
      })),
    );
    return `/quests/${quest.id}/questions/${origin.questionIndex}`;
  }

  return null;
}
