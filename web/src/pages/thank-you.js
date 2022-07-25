import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 pb-20 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1 className="heading-two">Thanks For Submitting!</h1>
              <p>
                We'll be getting in touch with you shortly. In the meantime, if
                you'd like to get started on your application, you can apply
                now. Our online application is safe, secure, and easy to fill
                out.
              </p>
              <ButtonSolid
                href="https://www.blink.mortgage/app/signup/p/macashhomeloansllc"
                outboundLink={true}
                text="Apply Now"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} />
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
    hero: file(relativePath: { eq: "thank-you/1.0 hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 680)
      }
    }
  }
`;
export default Page;
