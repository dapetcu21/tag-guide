import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { type IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffectEvent,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { processScanToken } from "~/lib/scanTokens";

export const QRScannerContext = createContext<() => void>(() => {});

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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <QRScannerPanel onClose={closeDialog} />
          </div>
        </div>
      </Dialog>
    </QRScannerContext>
  );
};
function QRScannerPanel({ onClose }: { onClose: () => void }) {
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

  return (
    <DialogPanel
      transition
      className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
    >
      <Scanner onScan={handleScan} />
    </DialogPanel>
  );
}

export const useOpenQRScanner = () => useContext(QRScannerContext);

export function QRScannerButton() {
  const openQRScanner = useOpenQRScanner();
  return (
    <button type="button" onClick={openQRScanner}>
      Scan QR
    </button>
  );
}
