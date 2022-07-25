import React, { Component } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list {
    ${tw`overflow-visible`}
  }
`;

export default class Slider extends Component {
  render() {
    // function PrevArrow(props) {
    //   const {onClick} = props;
    //   return (
    //     <button onClick={onClick} className="slick-prev" aria-label="Previous Slide"><i className="far fa-chevron-left"></i></button>
    //   );
    // }

    // function NextArrow(props) {
    //   const {onClick} = props;
    //   return (
    //     <button onClick={onClick} className="slick-next" aria-label="Next Slide"><i className="far fa-chevron-right"></i></button>
    //   );
    // }

    const sliderSettings = {
      dots: false,
      arrows: false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToShow: 5,
      slidesToScroll: 1,
      slidesPerRow: 1,
      infinite: true,
      fade: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            slidesPerRow: 1,
            fade: false,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            fade: false,
            centerMode: true,
            centerPadding: "200px",
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            fade: false,
            centerMode: true,
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            fade: false,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            fade: false,
            centerMode: true,
            centerPadding: "70px",
          },
        },
      ],
    };

    return (
      <StyledSlider>
        <Slick {...sliderSettings}>{this.props.children}</Slick>
      </StyledSlider>
    );
  }
}
