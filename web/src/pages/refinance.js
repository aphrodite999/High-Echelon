import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import RefinanceForm from "../components/Form/Refinance";

const Page = ({ data }) => {
  return (
    <Layout hideHeader={true} hideFooter={true}>
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section>
        <div className="absolute w-full px-4 lg:px-10 py-4 lg:py-8 flex justify-between items-center z-10">
          <AniLink fade to="/">
            <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} />
          </AniLink>

          <AniLink fade to="/request-rates/">
            <i className="fal fa-times text-xl text-black hover:text-primary-400 transition-all duration-300 ease-linear"></i>
          </AniLink>
        </div>
        <div className="grid lg:grid-cols-12 h-screen">
          <div className="lg:col-start-1 lg:col-span-3 bg-primary-50 py-12 lg:pt-32 lg:pb-12 lg:px-10 hidden lg:flex justify-between items-start flex-col">
            <div>
              <p className="text-sm">
                Let’s get the ball rolling so you can refinance your home! We
                have a few basic questions to help us get started. Or, if you’d
                like immediate assistance, please give us a call at{" "}
                <a
                  href="tel:773-501-3997"
                  className="underline text-primary-400 whitespace-nowrap"
                >
                  (773) 501-3997
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:col-end-13 lg:col-span-9 py-8 lg:py-12 px-4 lg:px-20 mt-14 lg:mt-0 relative">
            <div className="relative h-full">
              <RefinanceForm />
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
