import type { Quest } from "~/lib/Quest";

import { mockQuests } from "./mockQuestData";
import { quests } from "./questData";

export { mockQuests } from "./mockQuestData";
export { quests } from "./questData";

export const allQuests =
  process.env.NODE_ENV === "production" ? quests : [...mockQuests, ...quests];

export const questsById: Map<string, Quest> = new Map(
  allQuests.map((quest) => [quest.id, quest]),
);
