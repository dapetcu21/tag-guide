import { useMemo } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router";
import { useSaveGame } from "~/lib/saveGame";
import { encodeSave } from "~/lib/serialize";

export default function ExportView() {
  const [saveGame, _] = useSaveGame();
  const qrValue = useMemo(() => encodeSave(saveGame), [saveGame]);
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[calc(min(100vh-16*var(--spacing),100vw))] p-[calc(0.15*min(100vh-16*var(--spacing),100vw))] bg-white aspect-square shrink">
        <QRCode
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
          }}
          viewBox={`0 0 256 256`}
          className="w-full"
          value={qrValue}
        />
      </div>
      <Link
        to="/"
        type="button"
        className="h-12 mb-4 px-4 content-center rounded-sm hover:bg-gray-300 border-1"
      >
        Back
      </Link>
    </div>
  );
}
