import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
`;

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-arrow-left"></i>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center slick-next"
        aria-label="Next Slide"
      >
        <i className="far fa-arrow-right"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
