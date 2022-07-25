import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Background from "../Background/Background";
import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`text-primary-900 text-xl h-12 w-14 bg-white bg-opacity-30 border border-solid border-primary-900 rounded-3xl transform-none top-auto bottom-0`}
    &:hover {
      ${tw`bg-primary-100 border-primary-100 text-white`}
    }
  }
  .slick-prev {
    ${tw``}
  }
  .slick-next {
    ${tw`left-36`}
  }
  .slick-dots {
    ${tw`relative mt-10 md:mt-0 md:-top-4 flex! justify-center md:justify-start items-center space-x-3 md:ml-18`}
    li {
      ${tw`h-4 w-4 rounded-full bg-transparent hover:bg-primary-100 border border-black hover:border-primary-100 mr-0 transition-colors duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary-100 border-primary-100`}
      }
    }
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/testimonials/Background Desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/testimonials/Background Mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      zillow: file(relativePath: { eq: "repeating/testimonials/zillow.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 86)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "Communication, respect, and responsiveness are very important to me and I cannot say enough about Kevin and MacAsh when it comes to these attributes. I highly recommend them not only for this but for the superior rates he was able to secure me. Great communication every step of the way via email, call, and text.",
      name: "jsilva125, Chicago, Illinois",
      platform: data.zillow.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "There's no shortage of lenders and brokers out there. It's a very competitive space but Kevin set the bar high. I refinanced with him and the entire process was easy, quick, and efficient. I was always kept in the loop from applying to closing and felt like Kevin gave his 100% attention to my loan. Thank you!!",
      name: "RefugioBautista, Elgin, IL",
      platform: data.zillow.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  const backgroundImages = [
    getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Background
      backgroundImages={backgroundImages}
      mobileRemoveBackground={true}
      padding="pt-24 md:pt-18 pb-8 md:pb-10"
      className={`relative overflow-x-hidden ${className || "mb-24 md:mb-32"}`}
    >
      <div className="md:hidden -mx-4">
        <GatsbyImage
          image={data.backgroundMobile.childImageSharp.gatsbyImageData}
        />
      </div>

      <div className="-mt-56 md:mt-0 z-10 relative">
        <header className="mb-6 md:mb-8 max-w-[190px] md:max-w-full">
          <HeadingTag>Why We Do What We Do</HeadingTag>
        </header>

        <StyledSlider className="relative">
          <Slider>
            {testimonials.map((testimonial, i) => {
              return (
                <div key={i}>
                  <blockquote className="md:max-w-[529px] md:w-3/4 bg-white md:bg-transparent rounded-xl md:rounded-none p-8 md:p-0 shadow-6xl md:shadow-none">
                    <q className="md:text-xl md:font-medium">
                      {testimonial.quote}
                    </q>
                    <footer className="mt-6 md:mb-16 mx-auto">
                      <div>
                        <cite className="not-italic flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
                          <div className="md:text-primary-800 font-bold uppercase mb-3 md:mb-0">
                            <span>{testimonial.name}</span>
                          </div>
                          <GatsbyImage image={testimonial.platform} />
                        </cite>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              );
            })}
          </Slider>
        </StyledSlider>
      </div>
    </Background>
  );
};

export default Testimonial;
