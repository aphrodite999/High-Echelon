import React, { useRef } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  ${tw`lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-50vw!`}
  .slick-dots {
    ${tw`mt-6`}
  }
  .slick-list {
    ${tw`md:overflow-visible md:relative`}
  }
  .slick-track {
    ${tw`md:flex md:items-center`}
  }
  .slick-slide {
    ${tw`lg:p-0 lg:right-0 lg:top-0 lg:w-50vw!`}
  }
  .slick-dots {
    ${tw`relative mt-6 flex! flex-col -mt-28 -ml-12`}
    li {
      ${tw`w-auto h-auto mx-2`}
      &.slick-active {
        button {
          ${tw`bg-primary-100 w-3 h-3`}
        }
      }
    }
    button {
      ${tw`w-2 h-2 bg-primary-100 bg-opacity-20 rounded-full mb-3 transition ease-in duration-300`}
      &:before {
        ${tw`hidden`}
      }
    }
  }
  .slick-prev,
  .slick-next {
    ${tw`w-16 h-16 border border-solid border-gray-200 rounded-full transition-all duration-300 ease-linear z-10`}
    &:before {
      ${tw`hidden`}
    }
    i {
      ${tw`text-primary-100 text-sm transition-all duration-300 ease-linear`}
    }
    &:hover {
      ${tw`bg-primary-100 border-primary-100`}
      i {
        ${tw`text-white`}
      }
    }
  }
`;
const Slider = ({ children }) => {
  const slider = useRef();

  const sliderSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: false,
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
