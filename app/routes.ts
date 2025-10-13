import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/quest.tsx", [
    ...prefix("/quests/:questId", [
      index("routes/questIndex.tsx"),
      route("brief", "quests/QuestBrief.tsx"),
      route("debrief", "quests/QuestDebrief.tsx"),
      route("questions/:questionIndex", "quests/QuestionPage.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
