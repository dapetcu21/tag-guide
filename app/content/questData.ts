import type { Quest } from "~/lib/Quest";
import { track1Quests } from "./quests/track1";
import { track2Quests } from "./quests/track2";
import { track3Quests } from "./quests/track3";
import { track4Quests } from "./quests/track4";

/**
 * All quests in the exhibition, organized by track:
 * - Track 1: Play is Language
 * - Track 2: Play is Learning
 * - Track 3: Play is Self-Discovery
 * - Track 4: Play is Making/Design
 */
export const quests: Array<Quest> = [
  ...track1Quests,
  ...track2Quests,
  ...track3Quests,
  ...track4Quests,
];
