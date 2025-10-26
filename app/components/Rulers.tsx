import { Fragment } from "react/jsx-runtime";

const style = (viewTransitionName: string | undefined, suffix: string) =>
  viewTransitionName
    ? { viewTransitionName: `${viewTransitionName}-${suffix}` }
    : {};

export default function Rulers({
  viewTransitionName,
}: {
  viewTransitionName?: string;
}) {
  return (
    <Fragment>
      <div
        className="absolute left-[-100vw] top-[-2px] w-[200vw] h-[2px] bg-pink"
        style={style(viewTransitionName, "top")}
      />
      <div
        className="absolute left-[-100vw] bottom-[-2px] w-[200vw] h-[2px] bg-pink"
        style={style(viewTransitionName, "bottom")}
      />
      <div
        className="absolute top-[-100vh] left-[-2px] w-[2px] h-[200vh] bg-pink"
        style={style(viewTransitionName, "left")}
      />
      <div
        className="absolute top-[-100vh] right-[-2px] w-[2px] h-[200vh] bg-pink"
        style={style(viewTransitionName, "right")}
      />
    </Fragment>
  );
}
