import { type Quest, type Question, QuestType } from "./quests";
import type { QuestSaveGame } from "./saveGame";

export const isQuestionAvailable = (
  question: Question,
  questSaveGame: QuestSaveGame,
) =>
  question.scanToken === undefined ||
  isQuestionDiscovered(question, questSaveGame);

export const isQuestionDiscovered = (
  question: Question,
  questSaveGame: QuestSaveGame,
) => questSaveGame.discoveries.includes(question.id);

export function getNextAvailableQuestion(
  quest: Quest,
  questSaveGame: QuestSaveGame,
  start: number,
) {
  if (quest.type !== QuestType.Questions) {
    return -1;
  }

  const { questions } = quest;

  for (let i = start; i < questions.length; i++) {
    if (isQuestionAvailable(questions[i], questSaveGame)) {
      return i;
    }
  }

  return -1;
}

export function getPreviousAvailableQuestion(
  quest: Quest,
  questSaveGame: QuestSaveGame,
  start: number,
) {
  if (quest.type !== QuestType.Questions) {
    return -1;
  }

  const { questions } = quest;

  for (let i = start; i >= 0; i--) {
    if (isQuestionAvailable(questions[i], questSaveGame)) {
      return i;
    }
  }

  return -1;
}

export function getNextDiscoveredQuestion(
  quest: Quest,
  questSaveGame: QuestSaveGame,
  start: number,
) {
  if (quest.type !== QuestType.Questions) {
    return -1;
  }

  const { questions } = quest;

  for (let i = start; i < questions.length; i++) {
    if (isQuestionDiscovered(questions[i], questSaveGame)) {
      return i;
    }
  }

  return -1;
}

export function getPreviousDiscoveredQuestion(
  quest: Quest,
  questSaveGame: QuestSaveGame,
  start: number,
) {
  if (quest.type !== QuestType.Questions) {
    return -1;
  }

  const { questions } = quest;

  for (let i = start; i >= 0; i--) {
    if (isQuestionDiscovered(questions[i], questSaveGame)) {
      return i;
    }
  }

  return -1;
}

export function hasUnavailableQuestions(
  quest: Quest,
  questSaveGame: QuestSaveGame,
) {
  if (quest.type !== QuestType.Questions) {
    return false;
  }

  for (const question of quest.questions) {
    if (!isQuestionAvailable(question, questSaveGame)) {
      return true;
    }
  }

  return false;
}
