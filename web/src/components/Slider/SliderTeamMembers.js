import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
`;
const Slider = ({ slideIndex, slides }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    fade: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  return (
    <StyledSlider>
      <div className="container p-0">
        <Slick {...sliderSettings} ref={slider} className="h-full">
          {slides.map((content, i) => {
            return (
              <div>
                <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10 lg:gap-x-16">
                  <div className="md:col-start-1 md:col-span-4">
                    <GatsbyImage image={content.image} />
                  </div>

                  <div className="md:col-end-13 md:col-span-8">
                    <div className="heading-two text-black mb-2">
                      {content.name}
                    </div>
                    <div className="font-heading text-sm uppercase font-semibold text-gray-300 mb-4">
                      {content.title}
                    </div>

                    <div className="grid lg:flex flex-wrap items-center gap-y-3 lg:space-x-6 mb-8 md:mb-10">
                      <a
                        href={`tel:${content.phone}`}
                        className="text-primary-400 text-sm font-semibold flex items-center space-x-2"
                      >
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <span>{content.phone}</span>
                      </a>

                      <a
                        href={`mailto:${content.email}`}
                        className="text-primary-400 text-sm font-semibold flex items-center space-x-2"
                      >
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <span>{content.email}</span>
                      </a>

                      <div className="text-primary-400 text-sm font-semibold flex items-center space-x-2">
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        <span>NMLS: #{content.nmls}</span>
                      </div>
                    </div>

                    {content.bio}

                    <ButtonSolid
                      href={content.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      text={`Apply with ${content.name.split(" ")[0]}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slick>
      </div>
    </StyledSlider>
  );
};

export default Slider;
