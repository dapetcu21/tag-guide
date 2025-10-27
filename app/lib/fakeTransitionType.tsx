import { forwardRef, useCallback } from "react";
import {
  Link as OriginalLink,
  type LinkProps as OriginalLinkProps,
} from "react-router";

type LinkProps = Omit<OriginalLinkProps, "viewTransition"> & {
  viewTransition?: boolean | { types: Array<string> };
};

let nextTypes: Array<string> = [];

export function setTransitionTypes(types: Array<string>) {
  nextTypes = types;
}

const prefix = "view-transition-";

const removeAllClasses = () => {
  const classList = document.documentElement.classList;
  const classesToRemove = Array.from(classList.values()).filter((c) =>
    c.startsWith(prefix),
  );
  classesToRemove.forEach((c) => {
    classList.remove(c);
  });
};

const startViewTransition = Document.prototype.startViewTransition;
if (startViewTransition) {
  Document.prototype.startViewTransition = function (callbackOptions) {
    removeAllClasses();

    const classList = document.documentElement.classList;
    nextTypes.forEach((t) => {
      classList.add(prefix + t);
    });
    nextTypes = [];

    const t = startViewTransition.apply(this, [callbackOptions]);
    t.finished.catch(() => {}).then(removeAllClasses);
    return t;
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
