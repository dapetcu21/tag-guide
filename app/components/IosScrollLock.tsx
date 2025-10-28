import { type ReactNode, useEffect } from "react";

import "./IosScrollLock.css";

export function IosScrollLock({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isIOS =
      // biome-ignore lint/suspicious/noExplicitAny: vendor-specific extension
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    function setIOSHeight() {
      document.documentElement.style.setProperty(
        "--isl-vh",
        `${window.innerHeight * 0.01}px`,
      );
    }

    let removeEventListener: () => void = () => {};

    if (isIOS) {
      setIOSHeight();
      window.addEventListener("resize", setIOSHeight);
      removeEventListener = () => { window.removeEventListener("resize", setIOSHeight); }
    }

    return removeEventListener;
  }, []);

  return (
    <div className="isl_holder">
      <div className="isl_scroller">
        <div className="isl_scroller_inner">
          <div className="isl_scroller_content">{children}</div>
        </div>
      </div>
    </div>
  );
}
