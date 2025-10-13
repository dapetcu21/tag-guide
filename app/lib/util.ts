import { type Quest, type Question, QuestType } from "./quests";
import type { QuestSaveGame, QuestSolution } from "./saveGame";

export const isQuestionAvailable = (
  question: Question,
  questSaveGame: QuestSaveGame,
) =>
  question.scanToken === undefined ||
  questSaveGame.discoveries.includes(question.id);

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

export const validateAnswer = (question: Question, answer: number) =>
  question.correctAnswer === undefined || answer === question.correctAnswer;

export function validateQuestionsQuestSolution(
  quest: Quest,
  solution: QuestSolution,
) {
  if (quest.type !== QuestType.Questions) return false;

  let numRequiredQuestions = Math.min(
    quest.numRequiredQuestions ?? quest.questions.length,
    quest.questions.length,
  );

  if (numRequiredQuestions === 0) return true;

  if (!solution || typeof solution !== "object") {
    return false;
  }

  for (const question of quest.questions) {
    const answer = solution[question.id];
    if (answer !== undefined && validateAnswer(question, answer)) {
      numRequiredQuestions--;
      if (numRequiredQuestions <= 0) return true;
    }
  }

  return false;
}

export const asQuestionsSolution = (
  solution: QuestSolution,
): Record<string, number> | null =>
  typeof solution === "object" ? solution : null;

export function getNextUnansweredQuestion(
  quest: Quest,
  startingQuestionIndex: number,
  questSaveGame: QuestSaveGame,
  previousSolution: Record<string, number> | null,
): number {
  if (quest.type !== QuestType.Questions) {
    return -1;
  }

  const numQuestions = quest.questions.length;
  for (let i = 1; i < numQuestions; i++) {
    const indexNotWrapped = startingQuestionIndex + i;
    const index =
      indexNotWrapped >= numQuestions
        ? indexNotWrapped - numQuestions
        : indexNotWrapped;

    const question = quest.questions[index];
    if (!isQuestionAvailable(question, questSaveGame)) {
      continue;
    }

    const solutionAnswer = previousSolution?.[question.id];
    if (solutionAnswer === undefined) {
      return index;
    }
  }

  return -1;
}

export const validateAnswerInSaveGame = (
  question: Question,
  questSaveGame: QuestSaveGame,
) =>
  question.correctAnswer == null ||
  question.correctAnswer ===
    asQuestionsSolution(questSaveGame.solution)?.[question.id];
