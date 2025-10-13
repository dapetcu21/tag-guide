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
  route("s/:scanToken", "routes/scanResult.tsx"),
  ...(process.env.NODE_ENV === "production"
    ? []
    : prefix("/dev", [route("qr-list", "dev/qrList.tsx")])),
] satisfies RouteConfig;
