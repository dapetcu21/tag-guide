import html2canvas from "html2canvas";
import { Fragment, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router";
import { type ScanTokenOrigin, scanTokenOrigins } from "~/lib/scanTokens";

const OriginDescription = ({
  scanToken,
  origin,
}: {
  scanToken: string;
  origin: ScanTokenOrigin;
}) => (
  <Fragment>
    <div>{scanToken}</div>
    <div>{`Quest ${origin.questId}`}</div>
    {origin.questionIndex !== null && (
      <div>{`Question #${origin.questionIndex} (${origin.questionId})`}</div>
    )}
  </Fragment>
);
const takeScreenShot = (node: HTMLElement, slug: string, options = {}) => {
  if (!node) {
    throw new Error("You should provide correct html node.");
  }
  html2canvas(node, options)
    .then((canvas) => {
      const croppedCanvas = document.createElement("canvas");
      const croppedCanvasContext = croppedCanvas.getContext("2d");
      // init data
      const cropPositionTop = 0;
      const cropPositionLeft = 0;
      const cropWidth = canvas.width;
      const cropHeight = canvas.height;

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCanvasContext?.drawImage(
        canvas,
        cropPositionLeft,
        cropPositionTop,
      );

      const base64Image = croppedCanvas.toDataURL();
      const a = document.createElement("a");
      a.href = base64Image;
      a.download = `${slug}.png`;
      a.click();
      a.remove();
    })
    .catch(console.error);
};

const QRCodeEntry = ({
  scanToken,
  origin,
  pageOrigin,
  size,
}: {
  scanToken?: string;
  origin?: ScanTokenOrigin;
  pageOrigin: string;
  size: number;
}) => {
  const path = scanToken != null ? `/s/${scanToken}` : "";
  const ref = useRef(null);
  return (
    <div className="flex flex-col items-center">
      <Link
        className="border-solid border-black border-1 bg-white m-1"
        to={path}
      >
        <div
          ref={ref}
          className="bg-white"
          style={{
            padding: `${size * 0.2}px`,
          }}
        >
          <QRCode
            value={`${pageOrigin.replace(/\/+$/, "")}${path}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      </Link>
      {origin != null && scanToken != null ? (
        <OriginDescription scanToken={scanToken} origin={origin} />
      ) : (
        <div>Index</div>
      )}
      <button
        type="button"
        onClick={() => {
          if (!ref.current) return;
          takeScreenShot(ref.current, scanToken ?? "index");
        }}
        className="hidden not-print:block border border-radius hover:bg-gray-300"
      >
        Download QR code
      </button>
    </div>
  );
};

export default function QRList() {
  const [pageOrigin, setOrigin] = useState(() => window.location.origin);
  const [size, setSize] = useState(256);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="p4 hidden not-print:block">
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          className="m-1 border-1"
          value={pageOrigin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          className="m-1 border-1"
          value={size}
          onChange={(e) => setSize(Number.parseFloat(e.target.value))}
        />
      </div>
      <div className="w-full flex flex-row justify-center flex-wrap break-inside-avoid">
        <QRCodeEntry pageOrigin={pageOrigin} size={size} />
        {[...scanTokenOrigins.entries()].map(([scanToken, origin]) => (
          <QRCodeEntry
            key={scanToken}
            scanToken={scanToken}
            origin={origin}
            pageOrigin={pageOrigin}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}
