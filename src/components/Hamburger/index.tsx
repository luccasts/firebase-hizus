import { useState } from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";

export interface HamburgerProps {
  onClick: () => void;
}

export function Hamburger(props: HamburgerProps) {
  const { onClick } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen((prev: boolean) => !prev);
    onClick();
  };
  return (
    <button onClick={handleClick} type="button" className="button">
      <div className={`line ${isOpen ? "rotate45deg" : "rotate-0"}`} />
      <div
        className={`line ${
          isOpen ? "bg-transparent-translateX" : "translate-0"
        }`}
      />
      <div className={`line ${isOpen ? "rotate-45deg" : "rotate-0"}`} />
      <div
        // onMouseLeave={() => setOpen(false)}
        className={`${isOpen ? "open_Hamburger" : "null"}`}
      >
        {isOpen ? (
          <>
            <ul className="list">
              <li>
                <Link to={"/perifericos"}>Periféricos</Link>
              </li>
              <li>
                <Link to={"/hardware"}>Hardware</Link>
              </li>
            </ul>
          </>
        ) : null}
      </div>
    </button>
  );
}
