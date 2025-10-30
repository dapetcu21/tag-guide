import { Fragment } from "react/jsx-runtime";
import { Trans } from "react-i18next";
import Rulers from "~/components/Rulers";
import { mockQuests, quests } from "~/content/quests";
import { Link } from "~/lib/fakeTransitionType";
import type { Quest } from "~/lib/Quest";
import { useSaveGame } from "~/lib/saveGame";
import { QuestIcon } from "~/quests/QuestIcon";
import { ResetSaveGame } from "./ResetSaveGame";
import { useMemo } from "react";

const QuestTile = ({
  quest,
  isCompleted,
}: {
  quest: Quest;
  isCompleted: boolean;
}) => (
  <Fragment>
    <style>
      {`
        html.view-transition-home-${quest.id} #quest-${quest.id} {
          view-transition-name: quest-${quest.id};
          view-transition-class: quest;
        }
        html.view-transition-home-${quest.id} #quest-icon-${quest.id} {
          view-transition-name: quest-icon-${quest.id};
          view-transition-class: quest-icon;
        }
      `}
    </style>
    <Link
      id={`quest-${quest.id}`}
      className="bg-yellow aspect-square rounded-[50%] flex justify-center items-center"
      to={`/quests/${quest.id}`}
      viewTransition={{ types: [`home-${quest.id}`] }}
    >
      <QuestIcon
        id={`quest-icon-${quest.id}`}
        className="size-[70%]"
        quest={quest}
        isCompleted={isCompleted}
      />
    </Link>
  </Fragment>
);

export function Home() {
  let displayedQuests = quests;
  let displaysMockQuests = false;

  if (process.env.NODE_ENV !== "production") {
    try {
      displaysMockQuests = !!JSON.parse(
        localStorage.getItem("useMockQuests") ?? "false",
      );
    } catch (_e) { }

    if (displaysMockQuests) displayedQuests = mockQuests;
  }

  const [saveGame] = useSaveGame();

  const isEmptySave = useMemo(
    () => Object.keys(saveGame.quests).length === 0,
    [saveGame],
  );

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
      <div className="flex flex-col items-stretch">
        <div
          id="home-grid-container"
          className="row-start-2 flex flex-col flex-1"
        >
          <div
            id="home-grid"
            className="flex flex-col justify-center items-stretch w-full h-full"
          >
            <main className="grid relative grid-cols-4 grid-rows-4 gap-1 aspect-square">
              <Rulers viewTransitionName="main-rulers" />
              {displayedQuests.map((quest) => (
                <QuestTile
                  key={quest.id}
                  quest={quest}
                  isCompleted={saveGame.quests[quest.id]?.isCompleted ?? false}
                />
              ))}
            </main>
          </div>
        </div>
        {isEmptySave && (
          <div className="text-center flex flex-col self-center items-center max-w-xs">
            <Trans i18nKey="home.empty_save_instruction">
              <div>Select any quest to begin.</div>
              <div>Complete all for a prize at the reception.</div>
            </Trans>
          </div>
        )}
      </div>
      <footer className="row-start-3 pt-16 flex gap-[24px] flex-wrap items-center justify-center">
        {!isEmptySave && <ResetSaveGame />}
        {process.env.NODE_ENV !== "production" && (
          <Fragment>
            <button
              type="button"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              onClick={() => {
                try {
                  localStorage.setItem(
                    "useMockQuests",
                    JSON.stringify(!displaysMockQuests),
                  );
                  window.location.reload();
                } catch (_e) { }
              }}
            >
              {displaysMockQuests ? "Real quests" : "Mock quests"}
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
