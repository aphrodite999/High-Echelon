import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Background from "../Background/Background";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(relativePath: { eq: "repeating/value-props/01-heart.svg" }) {
        publicURL
      }
      icon2: file(relativePath: { eq: "repeating/value-props/02-Technology.svg" }) {
        publicURL
      }
      icon3: file(relativePath: { eq: "repeating/value-props/03-Billing.svg" }) {
        publicURL
      }
      bg1: file(relativePath: { eq: "repeating/value-props/Ellipse9.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      bg2: file(relativePath: { eq: "repeating/value-props/Ellipse8.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      bg3: file(relativePath: { eq: "repeating/value-props/Ellipse7.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const content = [
    {
      icon: data.icon1.publicURL,
      bg:data.bg1.childImageSharp.gatsbyImageData,
      heading: "We Care, Deeply",
      text: "Everything we do is done with heart and a strong belief in accuracy, fairness, and work that’s completed properly.",
    },
    {
      icon: data.icon2.publicURL,
      bg:data.bg2.childImageSharp.gatsbyImageData,
      heading: "We Use The Best Technology",
      text: "We’re a small business CPA firm that uses industry-leading security controls, automation, and financial reporting tools.",
    },
    {
      icon: data.icon3.publicURL,
      bg:data.bg3.childImageSharp.gatsbyImageData,
      heading: "We Provide Predictable Billing",
      text: "There are no surprises. You get predictable budgeting for your current and future accounting, payroll, and taxes.",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "bg-primary-700 mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="md:max-w-2xl md:mx-auto md:text-center pt-32">
          <HeadingTag className="text-primary-200 font-light text-4xl">{heading || "Why US?"}</HeadingTag>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 md:text-center pb-32">
          {content.map((content, i) => {
            return (
              <Background
                backgroundImages={content.bg}
                padding="pt-24 md:pt-18 pb-8 md:pb-10"
                className={`relative overflow-x-hidden ${className || "mb-24 md:mb-32"}`}
              >
              <div
                key={i}
                className="flex md:block items-start space-x-6 md:space-x-0"
              >
                <img
                  src={content.icon}
                  alt={content.heading}
                  className="md:mx-auto md:mb-2"
                />
                <div>
                  <h3 className="text-primary-200 heading-five mb-2">{content.heading}</h3>
                  <p className="text-primary-500 text-base mb-0">{content.text}</p>
                </div>
              </div>
              </Background>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default ValueProps;
