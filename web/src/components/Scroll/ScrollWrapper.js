import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledScroll = styled.section`
  ${tw`flex items-center justify-center`}
`;

const Scroll = ({ children, className }) => {
  return (
    <StyledScroll className="relative">
      <div className={`scroll-navigation-wrapper w-full ${className}`}>
        {children[0]}
        {children[1]}
      </div>
    </StyledScroll>
  );
};

export default Scroll;
