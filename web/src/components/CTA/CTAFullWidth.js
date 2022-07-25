import React from "react";
import { BgImage } from "gbimage-bridge";

const CTA = ({
  className,
  padding,
  backgroundImages,
  backgroundColor,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  textAlignment,
  textMaxWidth,
  children,
}) => (
  <BgImage
    className={`${padding} ${backgroundColor} ${className || ""}`}
    image={backgroundImages}
    style={{
      backgroundSize: backgroundSize ? backgroundSize : "cover",
      backgroundPosition: backgroundPosition ? backgroundPosition : "center",
      backgroundRepeat: backgroundRepeat ? backgroundRepeat : "no-repeat",
    }}
  >
    <div className="container">
      <header className={`${textAlignment} ${textMaxWidth}`}>{children}</header>
    </div>
  </BgImage>
);

export default CTA;
