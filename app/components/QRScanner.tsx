import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { type IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffectEvent,
  useMemo,
  useState,
} from "react";
import { Trans } from "react-i18next";
import { MdOutlineCameraswitch } from "react-icons/md";
import { useNavigate } from "react-router";
import { processScanToken } from "~/lib/scanTokens";
import { QuestButton } from "~/quests/QuestButton";

export const QRScannerContext = createContext<() => void>(() => { });

export const QRScannerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <QRScannerContext value={openDialog}>
      {children}
      <Dialog open={open} onClose={closeDialog} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-row min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <QRScannerPanel open={open} onClose={closeDialog} />
          </div>
        </div>
      </Dialog>
    </QRScannerContext>
  );
};
function QRScannerPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const handleScan = useEffectEvent((results: Array<IDetectedBarcode>) => {
    let navigateTo: string | null = null;

    results.forEach((code) => {
      const url = new URL(code.rawValue);

      const match = url.pathname.match(/^\/s\/(.*)\/?$/);
      if (!match) return;
      const scanToken = match[1];

      navigateTo = processScanToken(scanToken) ?? navigateTo;
    });

    if (navigateTo) {
      onClose();
      navigate(navigateTo);
    }
  });

  const [error, setError] = useState("");
  const handleError = useCallback((e: unknown) => {
    if (e instanceof DOMException) {
      if (e.name === "NotAllowedError") {
        setError("Camera permission denied");
        return;
      }
      if (e.name === "NotFoundError") {
        setError("No camera found");
        return;
      }
      setError(e.message);
      return;
    }
    setError("An error has occured while starting the camera");
  }, []);

  const [frontFacing, setFrontFacing] = useState(false);
  const toggleFacingMode = useCallback(() => setFrontFacing((f) => !f), []);
  const constraints = useMemo(
    () => ({ facingMode: { ideal: frontFacing ? "user" : "environment" } }),
    [frontFacing],
  );

  return (
    <DialogPanel
      transition
      className="flex flex-col items-stretch w-full sm:max-w-lg transform transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95"
    >
      <div className="relative rounded-lg overflow-hidden bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 sm:mt-8 aspect-square">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex p-[17%] items-center justify-center">
          <div className="text-red-500 font-bold">{error}</div>
        </div>
        <Scanner
          onScan={handleScan}
          onError={handleError}
          constraints={constraints}
          scanDelay={2000}
          allowMultiple={false}
          formats={["qr_code"]}
          sound={true}
          paused={!open}
          components={{
            onOff: false,
            torch: true,
            zoom: true,
            finder: true,
          }}
        >
          <button
            type="button"
            onClick={toggleFacingMode}
            className="absolute bottom-[83px] right-[8px] z-2"
          >
            <MdOutlineCameraswitch className="size-[30px] text-yellow-400" />
          </button>
        </Scanner>
      </div>
      <QuestButton className="mt-2" noMargin onClick={onClose}>
        <Trans i18nKey="scan.close">Close</Trans>
      </QuestButton>
    </DialogPanel>
  );
}

export const useOpenQRScanner = () => useContext(QRScannerContext);

export function QRScannerButton() {
  const openQRScanner = useOpenQRScanner();
  return (
    <QuestButton onClick={openQRScanner}>
      <Trans i18nKey="scan.open">Scan QR</Trans>
    </QuestButton>
  );
}
