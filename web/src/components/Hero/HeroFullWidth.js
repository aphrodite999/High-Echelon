import React from "react";
import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledHero = styled(BgImage)`
  &:before,
  &:after {
    ${({ mobileRemoveBackground }) =>
      mobileRemoveBackground && tw`!hidden md:!block`};
  }
`;

const Hero = ({
  className,
  padding,
  backgroundImages,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  mobileRemoveBackground,
  textAlignment,
  textMaxWidth,
  children,
}) => (
  <StyledHero
    className={`${padding} ${className}`}
    image={backgroundImages}
    mobileRemoveBackground={mobileRemoveBackground}
    style={{
      backgroundSize: backgroundSize || "cover",
      backgroundPosition: backgroundPosition || "center",
      backgroundRepeat: backgroundRepeat || "no-repeat",
    }}
  >
    <div className="container">
      <header className={`${textAlignment} ${textMaxWidth}`}>{children}</header>
    </div>
  </StyledHero>
);

export default Hero;
