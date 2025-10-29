import classNames, { type Argument } from "classnames";
import type { Quest } from "~/lib/Quest";

export const QuestIcon = ({
  quest,
  isCompleted,
  className,
  ...rest
}: {
  quest: Quest;
  isCompleted: boolean;
  className: Argument;
} & React.ComponentProps<"div">) => {
  if (quest.image == null) return null;

  return (
    <div
      style={{
        maskImage: `url(${quest.image}`,
        maskSize: "contain",
        maskPosition: "50% 50%",
        WebkitMaskImage: `url(${quest.image}`,
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "50% 50%",
      }}
      className={classNames(className, isCompleted ? "bg-orange" : "bg-white")}
      {...rest}
    ></div>
  );
};
