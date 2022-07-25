import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import MicroModal from "micromodal";

import ButtonSolid from "../Button/ButtonSolid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
  .slick-list,
  .slick-slider {
    ${tw`md:overflow-visible`}
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

  const closeClickHandler = () => {
    MicroModal.close("modal-job-description");
  };

  return (
    <StyledSlider>
      <div className="container">
        <Slick {...sliderSettings} ref={slider} className="h-full">
          {slides.map((content, i) => {
            return (
              <div>
                <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10 lg:gap-x-20">
                  <div className="md:col-start-1 md:col-span-8">
                    <header className="mb-10">
                      <p className="font-heading text-gray-900 font-bold text-4xl mb-5">
                        {content.position}
                      </p>
                    </header>
                    {content.description}
                    <button onClick={closeClickHandler}>
                      <ButtonSolid modal="modal-apply" text="Apply Now" />
                    </button>
                  </div>

                  <div className="md:col-end-13 md:col-span-4 hidden md:block">
                    <div className="bg-[#A68098] bg-opacity-20 px-6 md:px-10 py-8 rounded-xl md:sticky md:top-0">
                      <p className="text-gray-900 font-bold text-4xl mb-5">
                        Ready to Apply?
                      </p>
                      <p>
                        Let's do it! We'll ask you to fill in a few details
                        about yourself and send your resume.
                      </p>
                      <button onClick={closeClickHandler}>
                        <ButtonSolid modal="modal-apply" text="Apply Now" />
                      </button>
                    </div>
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
