import React from "react";
import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Header from "../Header/Header";

const StyledBackgroundImage = styled(BgImage)`
  &:before,
  &:after {
    ${({ backgroundFixed }) => backgroundFixed && tw`lg:bg-fixed`};
  }
`;

const Hero = ({
  className,
  headingLevel,
  heading,
  subtext,
  subtextSize,
  subtextClassName,
  textAlignment,
  textMaxWidth,
  textMargin,
  image,
  backgroundFixed,
  imageMaxHeight,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
}) => (
  <section className={`pt-10 md:pt-14 ${className || ""}`}>
    <div className="container">
      <Header
        headingLevel={headingLevel || "h1"}
        heading={heading}
        subtext={subtext}
        subtextSize={subtextSize || "text-2xl-mobile md:text-2xl"}
        subtextClassName={subtextClassName || ""}
        textAlignment={textAlignment || "text-left"}
        textMaxWidth={textMaxWidth || ""}
        textMargin={textMargin || "mb-12"}
      />
    </div>
    <div className={`h-50vw ${imageMaxHeight}`}>
      <StyledBackgroundImage
        className="h-full"
        image={image}
        backgroundFixed={backgroundFixed || false}
        style={{
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center",
          backgroundRepeat: backgroundRepeat || "no-repeat",
        }}
      ></StyledBackgroundImage>
    </div>
  </section>
);

export default Hero;
