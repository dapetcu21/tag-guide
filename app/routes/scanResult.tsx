import { redirect } from "react-router";
import { processScanToken } from "~/lib/scanTokens";
import type { Route } from "./+types/scanResult";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const navigateTo = processScanToken(params.scanToken);

  if (navigateTo) throw redirect(navigateTo);
  throw redirect("/");
}

export default function Quest(_: Route.ComponentProps) {
  throw new Error("Not reachable");
}
