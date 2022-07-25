import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Scrollspy from "react-scrollspy";

const StyledScrollNavigation = styled.div`
  .scroll-navigation {
    ul {
      li {
        &.is-current {
          a {
            ${tw`text-primary-100`}
          }
        }
      }
    }
  }
`;

const ScrollNavigation = ({ children, className }) => {
  // Toggle Dropdown
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const scrollNavigationList = useRef(null);

  const clickHandler = () => {
    setActiveState(setActive === "" && "active");
    setHeightState(setActive === "active" ? "0px" : "400px");
  };

  return (
    <StyledScrollNavigation
      className={`${className} ${setActive}`}
      onKeyDown={clickHandler}
      onClick={clickHandler}
    >
      {/* <span className="inline text-white lg:hidden">Services Menu</span> */}
      <nav className="scroll-navigation lg:sticky lg:top-40">
        <Scrollspy
          items={[
            "anchor-1",
            "anchor-2",
            "anchor-3",
            "anchor-4",
            "anchor-5",
            "anchor-6",
            "anchor-7",
            "anchor-8",
            "anchor-9",
            "anchor-10",
          ]}
          offset={-100}
          currentClassName="is-current"
          ref={scrollNavigationList}
          className="scrollspy flex flex-col space-y-2 !max-h-full transition-all duration-300 ease-linear"
          style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </Scrollspy>
      </nav>
    </StyledScrollNavigation>
  );
};

export default ScrollNavigation;
