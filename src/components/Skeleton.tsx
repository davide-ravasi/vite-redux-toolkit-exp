import classNames from "classnames";
import * as React from "react";

function Skeleton({ times, className }: { times: number, className: string }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return <div key={index} className={outerClassNames}>
        <div className={innerClassNames} />
      </div>;
    });

  return (
    <>
      {boxes.map((el) => {
        return el;
      })}
    </>
  );
}

export default Skeleton;
