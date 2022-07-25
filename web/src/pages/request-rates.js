import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout hideHeader={true} hideFooter={true}>
      <SearchEngineOptimization
        title="Request Rates | Chicago Mortgage Broker | MacAsh"
        description="Get the latest home loan rates from MacAsh, your trusted Chicago independent mortgage broker. Apply today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section>
        <div className="md:absolute w-full px-4 md:px-10 pt-8 flex justify-between items-center z-10">
          <AniLink fade to="/">
            <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} />
          </AniLink>

          <AniLink fade to="/">
            <i className="fal fa-times text-xl text-black hover:text-primary-400 transition-all duration-300 ease-linear"></i>
          </AniLink>
        </div>
        <div className="grid md:grid-cols-2 text-center md:h-screen relative">
          <div className="py-24 md:py-16 px-6 md:px-8 lg:px-12 flex justify-center items-center">
            <div>
              <p className="heading-two">I want to purchase a home.</p>
              <ButtonSolid href="/purchase/" text="Purchase" />
            </div>
          </div>

          <div className="h-px md:h-full w-full md:w-px bg-black/30 md:absolute inset-0 m-auto"></div>

          <div className="py-24 md:py-16 px-6 md:px-8 lg:px-12 flex justify-center items-center">
            <div>
              <p className="heading-two">I want to refinance my home.</p>
              <ButtonSolid href="/refinance/" text="Refinance" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    logo: file(relativePath: { eq: "global/Logo Black.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 93, placeholder: NONE)
      }
    }
  }
`;
export default Page;
