import React, { Component } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list {
    ${tw`overflow-visible p-0!`}
  }
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    > div {
      ${tw`mr-6`}
    }
    div {
      ${tw`outline-none`}
    }
  }
`;
export default class Slider extends Component {
  componentDidMount() {
    var self = this;
    setTimeout(function () {
      self.forceUpdate();
    }, 100);
  }

  render() {
    const { children } = this.props;

    // Previous Arrow
    // function PrevArrow(props) {
    //   const { onClick } = props;
    //   return (
    //     <button
    //       onClick={onClick}
    //       className="slick-prev"
    //       aria-label="Previous Slide"
    //     >
    //       <i className="far fa-chevron-left"></i>
    //     </button>
    //   );
    // }

    // Next Arrow
    // function NextArrow(props) {
    //   const { onClick } = props;
    //   return (
    //     <button
    //       onClick={onClick}
    //       className="slick-next"
    //       aria-label="Next Slide"
    //     >
    //       <i className="far fa-chevron-right"></i>
    //     </button>
    //   );
    // }

    const sliderSettings = {
      responsive: [
        {
          breakpoint: 10000,
          settings: "unslick",
        },
        {
          breakpoint: 1023,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 7500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // prevArrow: <PrevArrow />,
            // nextArrow: <NextArrow />,
          },
        },
      ],
    };

    return (
      <StyledSlider>
        <Slick
          {...sliderSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-5 lg:gap-x-10"
        >
          {children}
        </Slick>
      </StyledSlider>
    );
  }
}
