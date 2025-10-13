import { redirect } from "react-router";
import type { Route } from "./+types/scanResult";
import { processScanToken } from "~/lib/scanTokens";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const navigateTo = processScanToken(params.scanToken);

  if (navigateTo) throw redirect(navigateTo);
  throw redirect("/");

  return {};
}

export default function Quest(_: Route.ComponentProps) {
  throw new Error("Not reachable");
}
