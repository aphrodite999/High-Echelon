import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  ${tw`relative`}
  &:before {
    content: "";
    ${tw`absolute left-0 w-full h-full bg-white transform -translate-x-full z-10`}
  }
  .slick-list,
  .slick-slider {
    ${tw`md:overflow-visible`}
  }
  /* .slick-list {
    ${tw`z-20`}
  } */
  /* .slick-slide {
    ${tw`mr-20`}
  } */
  .slick-prev,
  .slick-next {
    ${tw`h-20 w-20 bg-transparent border border-solid border-opacity-40 rounded-full`}
    i {
      ${tw`text-base`}
    }
    &:hover {
      ${tw`border-opacity-100`}
    }
  }
  .slick-dots {
    ${tw`left-0 top-0 text-left h-0 flex! flex-col z-20`}
    transform: translateX(-35%);
    li {
      ${tw`w-full w-full mb-5`}
      &:before {
        ${tw`text-sm text-gray-700 text-opacity-40 transition-all duration-300 ease-linear`}
      }
      &:first-of-type {
        &:before {
          content: "Design & Drafting";
        }
      }
      &:nth-of-type(2) {
        &:before {
          content: "Building Permits";
        }
      }
      &:nth-of-type(3) {
        &:before {
          content: "Construction Admin";
        }
      }
      &:nth-of-type(4) {
        &:before {
          content: "Photorealistic Rendering";
        }
      }
      &:nth-of-type(5) {
        &:before {
          content: "Real Estate Photography";
        }
      }
      &.slick-active {
        &:before {
          ${tw`text-opacity-100`}
        }
      }
    }
    button {
      ${tw`w-full absolute top-0`}
    }
  }
  .slider-nav {
    ${tw`md:hidden!`}
    .slick-list {
      ${tw`pr-24`}
    }
    .gatsby-image-wrapper {
      ${tw`transform scale-75 transition-all duration-300 ease-linear`}
    }
    .slick-active {
      .gatsby-image-wrapper {
        ${tw`scale-100`}
      }
    }
  }
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  handleAfterChange = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  nextSlide = () => {
    this.state.nav2.slickNext();
  };
  prevSlide = () => {
    this.state.nav2.slickPrev();
  };

  render() {
    const sliderSettings = {
      dots: true,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      afterChange: this.handleAfterChange,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            fade: true,
          },
        },
      ],
    };
    const imageSliderSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
    };

    return (
      <StaticQuery
        query={graphql`
          {
            slide1Desktop: file(
              relativePath: { eq: "home/5.1 Fully Licensed Design.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide1Mobile: file(
              relativePath: { eq: "home/5.1 Fully Licensed Design_sq.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide2Desktop: file(
              relativePath: { eq: "home/5.2 Building Permits.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide2Mobile: file(
              relativePath: { eq: "home/5.2 Building Permit Services_Sq.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide3Desktop: file(
              relativePath: { eq: "home/5.3 Construction Admin.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide3Mobile: file(
              relativePath: { eq: "home/5.3 Construction Admin_Sq.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide4Desktop: file(
              relativePath: { eq: "home/5.4 Photorealistic Rendering.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide4Mobile: file(
              relativePath: { eq: "home/5.4 Photorealistic Rendering_Sq.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide5Desktop: file(
              relativePath: { eq: "home/5.5 Real Estate Photography.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            slide5Mobile: file(
              relativePath: { eq: "home/5.5 Real Estate Photography_Sq.jpg" }
            ) {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        `}
        render={(data) => (
          <StyledSlider>
            <Slick className="slider-nav mb-8" {...imageSliderSettings}>
              <div>
                <GatsbyImage
                  image={data.slide1Mobile.childImageSharp.gatsbyImageData}
                  alt="Fully Licensed Design - Architectural, Structural & Civil"
                />
              </div>
              <div>
                <GatsbyImage
                  image={data.slide2Mobile.childImageSharp.gatsbyImageData}
                  alt="Building Permits"
                />
              </div>
              <div>
                <GatsbyImage
                  image={data.slide3Mobile.childImageSharp.gatsbyImageData}
                  alt="Construction Administration"
                />
              </div>
              <div>
                <GatsbyImage
                  image={data.slide4Mobile.childImageSharp.gatsbyImageData}
                  alt="Photorealistic Rendering"
                />
              </div>
              <div>
                <GatsbyImage
                  image={data.slide5Mobile.childImageSharp.gatsbyImageData}
                  alt="Real Estate Photography"
                />
              </div>
            </Slick>

            <div className="flex md:hidden items-center justify-end relative -top-7 -mb-4">
              <div className="text-sm font-heading font-bold tracking-wider">
                <span className="text-black">
                  {"0"}
                  {this.state.currentSlide + 1}
                </span>
                / <span className="text-black text-opacity-20">{"05"}</span>
              </div>
            </div>

            <Slick {...sliderSettings}>
              <div>
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
                  <div className="hidden md:block">
                    <GatsbyImage
                      image={data.slide1Desktop.childImageSharp.gatsbyImageData}
                      alt="Fully Licensed Design - Architectural, Structural & Civil"
                    />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:pr-10 lg:pr-20">
                    <span className="text-primary-400 font-heading font-black text-4xl hidden md:block mb-1">
                      01
                    </span>
                    <h3 className="heading-four font-light">
                      Fully Licensed Design - Architectural, Structural & Civil
                    </h3>
                    <p>
                      Our team of expert draftsmen provide a high-quality design
                      and drafting experience. We take your ideas and turn them
                      into reality through sketching, drafting, and 3D
                      renderings. And we do it your way. At Design Appruv, we
                      always include our clients in every step of the design
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
                  <div className="hidden md:block">
                    <GatsbyImage
                      image={data.slide2Desktop.childImageSharp.gatsbyImageData}
                      alt="Building Permits"
                    />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:pr-10 lg:pr-20">
                    <span className="text-primary-400 font-heading font-black text-4xl hidden md:block mb-1">
                      02
                    </span>
                    <h3 className="heading-four font-light">
                      Building Permits
                    </h3>
                    <p>
                      We alleviate the stress and confusion of the building
                      permit process. We stay in contact with your building
                      permit office to maintain your project's integrity and
                      adhere to your timeline. Other services including
                      conditional use permits, occupancy permits, and food and
                      alcohol permits.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
                  <div className="hidden md:block">
                    <GatsbyImage
                      image={data.slide3Desktop.childImageSharp.gatsbyImageData}
                      alt="Construction Administration"
                    />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:pr-10 lg:pr-20">
                    <span className="text-primary-400 font-heading font-black text-4xl hidden md:block mb-1">
                      03
                    </span>
                    <h3 className="heading-four font-light">
                      Construction Administration
                    </h3>
                    <p>
                      We’re proud to be one of the only vertically integrated
                      drafting and construction bidding & administration teams
                      in San Diego County. From initial budgeting and scheduling
                      to onsite leadership and management, our experienced
                      project management team caters to your specific needs.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
                  <div className="hidden md:block">
                    <GatsbyImage
                      image={data.slide4Desktop.childImageSharp.gatsbyImageData}
                      alt="Photorealistic Rendering"
                    />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:pr-10 lg:pr-20">
                    <span className="text-primary-400 font-heading font-black text-4xl hidden md:block mb-1">
                      04
                    </span>
                    <h3 className="heading-four font-light">
                      Photorealistic Rendering
                    </h3>
                    <p>
                      Need to visualize your project even more before it gets
                      built? See your design from the inside out with our
                      photorealistic rendering services. With HGTV levels of
                      animation, get a 360-degree view of the project with
                      unparalleled detail and quality.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
                  <div className="hidden md:block">
                    <GatsbyImage
                      image={data.slide5Desktop.childImageSharp.gatsbyImageData}
                      alt="Real Estate Photography"
                    />
                  </div>
                  <div className="md:pt-4 lg:pt-7 md:pr-10 lg:pr-20">
                    <span className="text-primary-400 font-heading font-black text-4xl hidden md:block mb-1">
                      05
                    </span>
                    <h3 className="heading-four font-light">
                      Real Estate Photography
                    </h3>
                    <p>
                      Make a great first impression with high-quality images.
                      Design Appruv offers drone photography, 3D walkthroughs,
                      and cinematic marketing videos for interior & exterior
                      areas. Showcase the best of your project with our
                      professional real estate photography.
                    </p>
                  </div>
                </div>
              </div>
            </Slick>

            <div className="hidden md:flex items-center absolute right-0 bottom-0 md:mr-10 lg:mr-20">
              <button
                onClick={this.prevSlide}
                className="hidden md:block focus:outline-none"
              >
                <i className="far fa-long-arrow-left text-black focus:no-underline"></i>
              </button>

              <div className="text-sm font-heading font-bold tracking-wider mx-8">
                <span className="text-black">
                  {"0"}
                  {this.state.currentSlide + 1}
                </span>
                {" / "}
                <span className="text-black text-opacity-20">{"05"}</span>
              </div>

              <button
                onClick={this.nextSlide}
                className="hidden md:block focus:outline-none"
              >
                <i className="far fa-long-arrow-right text-black focus:no-underline"></i>
              </button>
            </div>
          </StyledSlider>
        )}
      />
    );
  }
}
