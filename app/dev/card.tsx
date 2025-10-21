import CollectibleCard from "~/components/CollectibleCard";
import type { Route } from "./+types/card";

export default function CardPage({ params }: Route.ComponentProps) {
  return <CollectibleCard scanToken={params.token} printable />;
}
