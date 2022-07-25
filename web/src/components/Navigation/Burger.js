import React from "react";
import { bool, func } from "prop-types";
import styled from "@emotion/styled";

const StyledBurger = styled.button`
  .line {
    transform-origin: 1px;
    &:first-of-type {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-of-type(2) {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateX(20px)" : "translateX(0)"};
    }
    &:nth-of-type(3) {
      transform: ${({ offcanvasOpen }) =>
        offcanvasOpen ? "translateY(2px) rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({ offcanvasOpen, setOffcanvasOpen, headerStyle, scrolled }) => {
  const isExpanded = offcanvasOpen ? true : false;
  return (
    <StyledBurger
      className="flex flex-col justify-between w-auto h-4 bg-transparent border-0 cursor-pointer focus:outline-none relative z-30"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      offcanvasOpen={offcanvasOpen}
      onClick={() => setOffcanvasOpen(!offcanvasOpen)}
      headerStyle={headerStyle}
      scrolled={scrolled}
    >
      <div
        className={`line relative w-6 h-[2px] z-10 transition-all duration-300 ease-linear ${
          headerStyle === "overlap" ? "bg-gray-800" : "bg-gray-800"
        } ${scrolled && "bg-primary-600"} ${offcanvasOpen && "bg-primary-600"}`}
      />
      <div
        className={`line relative w-6 h-[2px] z-10 transition-all duration-300 ease-linear ${
          headerStyle === "overlap" ? "bg-gray-800" : "bg-gray-800"
        } ${scrolled && "bg-primary-600"} ${
          offcanvasOpen && "bg-primary-600"
        } ${offcanvasOpen && "opacity-0"}`}
      />
      <div
        className={`line relative w-6 h-[2px] z-10 transition-all duration-300 ease-linear ${
          headerStyle === "overlap" ? "bg-gray-800" : "bg-gray-800"
        } ${scrolled && "bg-primary-600"} ${offcanvasOpen && "bg-primary-600"}`}
      />
    </StyledBurger>
  );
};

Burger.propTypes = {
  offcanvasOpen: bool.isRequired,
  setOffcanvasOpen: func.isRequired,
};

export default Burger;
