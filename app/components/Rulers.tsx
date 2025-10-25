import { Fragment } from "react/jsx-runtime";

export default function Rulers() {
  return (
    <Fragment>
      <div className="absolute left-1/2 top-[-2px] w-[2pt] h-[2px] bg-pink scale-x-10000000" />
      <div className="absolute left-1/2 bottom-[-2px] w-[2px] h-[2px] bg-pink scale-x-10000000" />
      <div className="absolute top-1/2 left-[-2px] w-[2px] h-[2px] bg-pink scale-y-10000000" />
      <div className="absolute top-1/2 right-[-2px] w-[2px] h-[2px] bg-pink scale-y-10000000" />
    </Fragment>
  );
}
