import { Fragment, useMemo } from "react";
import { decodeSave } from "~/lib/serialize";

export default function CollectibleCard({
  scanToken,
  printable,
}: {
  scanToken: string;
  printable?: boolean;
}) {
  const saveGame = useMemo(() => decodeSave(scanToken), [scanToken]);

  return (
    <Fragment>
      {!!printable && (
        <style>
          {`
          @page { margin: 0mm; }
          body { margin: 0mm; }
        `}
        </style>
      )}
      <div className="w-[150mm] h-[100mm] m-0 overflow-auto bg-blue-600 text-white">
        <pre>{JSON.stringify(saveGame, null, 2)}</pre>
      </div>
    </Fragment>
  );
}
