import { Fragment } from "react/jsx-runtime";
import { Trans } from "react-i18next";
import Rulers from "~/components/Rulers";
import { mockQuests, quests } from "~/content/quests";
import { Link } from "~/lib/fakeTransitionType";
import type { Quest } from "~/lib/Quest";
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
  let displayedQuests = quests;
  let useMockQuests = false;

  if (process.env.NODE_ENV !== "production") {
    try {
      useMockQuests = !!JSON.parse(
        localStorage.getItem("useMockQuests") ?? "false",
      );
    } catch (_e) {}

    if (useMockQuests) displayedQuests = mockQuests;
  }

  return (
    <div className="font-sans grid grid-rows-[88px_1fr_20px] justify-items-stretch w-full h-full overflow-hidden p-8 pb-20 sm:p-20">
      <div className="row-start-1 flex flex-row justify-center items-start mb-4">
        <div className="text-impact text-[60px]">
          <Trans i18nKey="home.title">The Art of the Game</Trans>
        </div>
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
            <Rulers viewTransitionName="main-rulers" />
            {displayedQuests.map((quest) => (
              <QuestTile key={quest.id} quest={quest} />
            ))}
          </main>
        </div>
      </div>
      <footer className="row-start-3 pt-16 flex gap-[24px] flex-wrap items-center justify-center">
        <ResetSaveGame />
        {process.env.NODE_ENV !== "production" && (
          <Fragment>
            <button
              type="button"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              onClick={() => {
                try {
                  localStorage.setItem(
                    "useMockQuests",
                    JSON.stringify(!useMockQuests),
                  );
                  window.location.reload();
                } catch (_e) {}
              }}
            >
              {useMockQuests ? "Real quests" : "Mock quests"}
            </button>
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
              QR codes
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
