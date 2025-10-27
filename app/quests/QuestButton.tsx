import classNames, { type Argument } from "classnames";
import type { MouseEventHandler, ReactNode } from "react";

export const QuestButton = ({
  onClick,
  icon,
  children,
  type,
  className,
  noMargin,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: Argument;
  noMargin?: boolean;
  children: ReactNode;
}) => (
  <button
    type={type ?? "button"}
    className={classNames(
      "w-full bg-orange flex flex-row items-stretch justify-center",
      !noMargin && "my-2",
      className,
    )}
    onClick={onClick}
  >
    <div className="p-2 flex flex-row items-center justify-center">
      {children}
    </div>
    {!!icon && (
      <div className="h-12 flex justify-center items-center">{icon}</div>
    )}
  </button>
);
