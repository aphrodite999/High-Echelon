import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, children }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setIcon, setIconState] = useState("far fa-chevron-down");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setIconState(
      setActive === "active" ? "far fa-chevron-down" : "far fa-chevron-up"
    );
  }

  return (
    <ul className="overflow-hidden">
      <button className={`${setActive}`} onClick={toggleAccordion}>
        {title}
        <i className={`${setIcon} text-base text-gray-600 ml-2`} />
      </button>
      <div
        ref={content}
        className="overflow-auto transition-all duration-300 ease-linear"
        style={{ maxHeight: `${setHeight}` }}
      >
        <div className="flex-col pl-0 space-y-4 pt-4 pb-1">{children}</div>
      </div>
    </ul>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
