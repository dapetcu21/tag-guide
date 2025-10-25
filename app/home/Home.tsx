import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import { type Quest, quests } from "~/lib/quests";
import { ResetSaveGame } from "./ResetSaveGame";

const QuestTile = ({ quest }: { quest: Quest }) => (
  <Link className="bg-orange aspect-square" to={`/quests/${quest.id}`} />
);

export function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-stretch min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="row-start-2 flex flex-col justify-center items-stretch">
        <main className="grid grid-cols-4 gap-1">
          {quests.map((quest) => (
            <QuestTile key={quest.id} quest={quest} />
          ))}
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <ResetSaveGame />
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          to="/export"
        >
          Export
        </Link>
        {process.env.NODE_ENV !== "production" && (
          <Fragment>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              to="/dev/qr-list"
            >
              All QR codes
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              to="/dev/card"
            >
              Card
            </Link>
          </Fragment>
        )}
      </footer>
    </div>
  );
}
