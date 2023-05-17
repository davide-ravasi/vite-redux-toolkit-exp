import classNames from "classnames";

function Skeleton({ times }: {times: number}) {
  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return <div key={index}>loading</div>;
    });

  return boxes;
}

export default Skeleton;
