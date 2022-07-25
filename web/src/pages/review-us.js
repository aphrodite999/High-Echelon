import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        // title=""
        // description=""
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-16 md:pt-20 pb-22 md:pb-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://macash-reviews-platform.flywheelsites.com/"
              title="Reviews Platform"
              width="100%"
              height="1500px"
              border="0"
            />
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
  }
`;

export default Page;
