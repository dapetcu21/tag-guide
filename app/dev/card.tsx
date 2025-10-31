import { useParams } from "react-router";
import CollectibleCard from "~/components/CollectibleCard";

export default function CardPage() {
  const params = useParams<{ token: string }>();
  return <CollectibleCard scanToken={params.token!} printable />;
}
