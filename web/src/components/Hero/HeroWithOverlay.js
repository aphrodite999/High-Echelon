import React from "react";
import { BgImage } from "gbimage-bridge";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

// const StyledBackgroundImage = styled(BgImage)``;

const Hero = ({
  className,
  heading,
  subtext,
  image,
  imageMaxHeight,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  nextBackgroundColor,
  children,
}) => (
  <section className={`${nextBackgroundColor} ${className || ""}`}>
    <div className={`${imageMaxHeight || "h-[350px] md:h-[550px]"}`}>
      <BgImage
        className="h-full"
        image={image}
        style={{
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center",
          backgroundRepeat: backgroundRepeat || "no-repeat",
        }}
      ></BgImage>
    </div>
    <div className="container">
      <div className="bg-primary-400 shadow-2xl pt-14 md:pt-16 px-6 pb-14 md:pb-14 rounded-xl text-center relative bottom-10 md:bottom-28">
        <h1>{heading}</h1>
        <p className="font-heading text-xl md:text-3xl font-medium italic">
          {subtext}
        </p>
        {children}
      </div>
    </div>
  </section>
);

export default Hero;
