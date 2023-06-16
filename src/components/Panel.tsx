import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Button from "./Button";
import { useState } from "react";

const Panel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleTogglePanel = () => {
    console.log(expanded);
    setExpanded(!expanded);
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {header}
        <Button
          outline
          onClick={() => handleTogglePanel()}
        >
          <GoChevronDown />
        </Button>
      </div>

      {expanded && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  );
};

export default Panel;
