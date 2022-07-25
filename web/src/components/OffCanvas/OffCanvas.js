import React from "react";
// import { bool } from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledOffCanvas = styled.nav`
  ${tw`bg-white fixed top-0 left-0 w-full h-screen pt-10 pb-40 px-6 z-10 overflow-y-scroll transition-transform duration-500 ease-in-out`}
  transform: ${({ offcanvasOpen }) =>
    offcanvasOpen ? "translateX(0%)" : "translateX(-100%)"};
`;

const OffCanvas = ({ children, offcanvasOpen, ...props }) => {
  const isHidden = offcanvasOpen ? true : false;

  if (typeof window !== `undefined`) {
    if (offcanvasOpen) {
      document.body.style.overflow = "hidden";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.getElementsByTagName("html")[0].style.overflow = "";
    }
  }

  return (
    <StyledOffCanvas
      offcanvasOpen={offcanvasOpen}
      aria-hidden={!isHidden}
      {...props}
    >
      {children}
    </StyledOffCanvas>
  );
};

// StyledOffCanvas.propTypes = {
//   offcanvasOpen: bool.isRequired,
// };

export default OffCanvas;
