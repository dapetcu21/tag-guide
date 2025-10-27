import { Fragment } from "react/jsx-runtime";
import Rulers from "~/components/Rulers";
import { Link } from "~/lib/fakeTransitionType";
import { type Quest, quests } from "~/lib/quests";
import { ResetSaveGame } from "./ResetSaveGame";

const QuestTile = ({ quest }: { quest: Quest }) => (
  <Link
    className="bg-yellow aspect-square rounded-[50%]"
    style={
      {
        viewTransitionName: `quest-${quest.id}`,
        viewTransitionClass: `quest`,
      // biome-ignore lint/suspicious/noExplicitAny: viewTransitionClass not typed yet
      } as any
    }
    to={`/quests/${quest.id}`}
    viewTransition={{ types: ["home"] }}
  />
);

export function Home() {
  return (
    <div className="font-sans grid grid-rows-[88px_1fr_20px] justify-items-stretch w-screen h-screen overflow-hidden p-8 pb-20 sm:p-20">
      <div className="row-start-1 flex flex-row justify-center items-start mb-4">
        <div className="text-impact text-[60px]">The Art of the Game</div>
      </div>
      <style>
        {`
          #home-grid-container {
            container: home-grid / size;
          }
          @container home-grid (aspect-ratio > 1) {
            #home-grid {
              flex-direction: row;
            }
          }
        `}
      </style>
      <div id="home-grid-container" className="row-start-2 flex flex-col">
        <div
          id="home-grid"
          className="flex flex-col justify-center items-stretch w-full h-full"
        >
          <main className="grid relative grid-cols-4 grid-rows-4 gap-1 aspect-square">
            <Rulers viewTransitionName="main-rulers"/>
            {quests.map((quest) => (
              <QuestTile key={quest.id} quest={quest} />
            ))}
          </main>
        </div>
      </div>
      <footer className="row-start-3 pt-16 flex gap-[24px] flex-wrap items-center justify-center">
        <ResetSaveGame />
        {process.env.NODE_ENV !== "production" && (
          <Fragment>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              to="/export"
            >
              Export
            </Link>
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
