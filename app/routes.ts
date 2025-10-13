import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/quests/:questId", "routes/quest.tsx"),
] satisfies RouteConfig;
