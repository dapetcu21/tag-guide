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
  route("export", "routes/export.tsx"),
  ...(process.env.NODE_ENV === "production" &&
  !process.env.VITE_ENABLE_DEV_ROUTES
    ? []
    : prefix("/dev", [
        route("qr-list", "dev/qrList.tsx"),
        ...prefix("card", [
          index("dev/cardIndex.tsx"),
          route(":token", "dev/card.tsx"),
        ]),
      ])),
] satisfies RouteConfig;
