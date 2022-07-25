import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  .slick-prev,
  .slick-next {
    ${tw`w-auto h-auto`}
    i {
      ${tw`text-6xl text-white`}
    }
    &:hover {
      /* ${tw``} */
    }
  }
  .slick-prev {
    ${tw`left-10!`}
  }
  .slick-next {
    ${tw`right-10!`}
  }
`;

const Slider = ({ slideIndex, className, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="fal fa-chevron-left"></i>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-arrow slick-next"
        aria-label="Next Slide"
      >
        <i className="fal fa-chevron-right"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <StyledSlider className="relative">
          <Slick {...sliderSettings} ref={slider}>
            {children}
          </Slick>
        </StyledSlider>
      </div>
    </section>
  );
};

export default Slider;
