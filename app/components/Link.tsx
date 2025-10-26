import { forwardRef, useCallback } from "react";
import {
  Link as OriginalLink,
  type LinkProps as OriginalLinkProps,
} from "react-router";

type LinkProps = Omit<OriginalLinkProps, "viewTransition"> & {
  viewTransition?: boolean | { types: Array<string> };
};

let nextTypes: Array<string> | null = null;

const startViewTransition = Document.prototype.startViewTransition
if (startViewTransition) {
  Document.prototype.startViewTransition = function (callbackOptions) {
    if (nextTypes) {
      callbackOptions =
        callbackOptions && typeof callbackOptions === "object"
          // biome-ignore lint/suspicious/noExplicitAny: DOM type definitions not up to date
          ? { ...(callbackOptions as any), types: nextTypes }
          : { update: callbackOptions, types: nextTypes };
      nextTypes = null;
    }
    return startViewTransition.apply(this, [callbackOptions]);
  };
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkWithRef({ onClick, viewTransition, ...rest }, forwardedRef) {
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          if (viewTransition && typeof viewTransition === "object")
            nextTypes = viewTransition.types;
        }
      },
      [onClick, viewTransition],
    );

    return (
      <OriginalLink
        ref={forwardedRef}
        onClick={handleClick}
        viewTransition={!!viewTransition}
        {...rest}
      />
    );
  },
);
