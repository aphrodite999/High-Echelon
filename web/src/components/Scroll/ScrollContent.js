import React from "react";
import styled from "@emotion/styled";
// import tw from 'twin.macro'

const StyledScrollContent = styled.div``;

const ScrollContent = ({ children, className }) => {
  return (
    <StyledScrollContent className={className}>{children}</StyledScrollContent>
  );
};

export default ScrollContent;
