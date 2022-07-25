import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />

      <Hero
        backgroundImages={data.reviewsBack.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        mobileRemoveBackground={true}
        textAlignment="text-center md:text-left"
        padding="pt-10 md:pt-24 pb-14 md:pb-32"
      >
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="mb-6 text-white">Testimonials</h1>
          <p className="text-base ">
            Don’t just take our word for it—hear feedback directly from our clients.
          </p>

          <ButtonSolid href="/review-us/" text="Leave a Review" />
        </div>
      </Hero>

      <section className="pt-16 md:pt-28 pb-22 md:pb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    reviewsBack: file(relativePath: { eq: "reviews/reviews-back.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Reviews.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "reviews/Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

export default Page;
