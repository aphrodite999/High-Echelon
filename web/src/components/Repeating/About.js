import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonGhost from "../Button/ButtonGhost";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      team: file(relativePath: { eq: "repeating/about/Michelle B&W.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 651)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
          <div className="md:col-start-1 md:col-span-9">
            <GatsbyImage image={data.team.childImageSharp.gatsbyImageData} />
          </div>
          <div className="md:absolute bg-white shadow-inner md:col-start-6 md:col-span-7 ml p-12">
            <HeadingTag className="text-primary-700">
              Who We Are
            </HeadingTag>
            <p className="font-display text-xl md:text-2xl">
              CPA Michelle Frank founded High Echelon to help small businesses simplify 
              and streamline their finances so they can focus on growth and success. 
              Accounting doesn’t need to be complicated—we make it easy.
            </p>
            <ButtonGhost
              href="/about/"
              text="Read Our Story"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
