import { redirect } from "react-router";
import { getSaveGame } from "~/lib/saveGame";
import { encodeSave } from "~/lib/serialize";

export async function clientLoader() {
  throw redirect(`/dev/card/${encodeSave(getSaveGame())}`);
}

export default function CardPage() {
  return <div />;
}
