import type { MouseEventHandler, ReactNode } from "react";

export const QuestButton = ({ onClick, icon, children, type }: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}) => (
  <button
    type={type ?? "button"}
    className="w-full my-2 bg-orange flex flex-row items-stretch justify-center"
    onClick={onClick}
  >
    <div className="p-2 flex flex-row items-center justify-center">{children}</div>
    {!!icon && (
      <div className="h-12 flex justify-center items-center">{icon}</div>
    )}
  </button>
);

