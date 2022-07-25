import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import ValueProps from "../components/Repeating/ValueProps";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Mortgage Broker and Realtor Partnership | MacAsh"
        description="Realtors—let's work together! When you partner with MacAsh, your trusted Chicago-area mortgage broker, we help you wow your clients and earn you more referrals."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-5 lg:gap-x-10 gap-y-8 items-center">
            <div className="relative z-20 md:col-start-1 md:col-span-5">
              <h1>Realtors, Let’s Work Together</h1>
              <p className="font-display italic text-xl md:text-2xl">
                Wow your clients and earn more referrals with our fast, simple,
                and affordable process. MacAsh makes financing easy, and as our
                realtor partner, you get access to hundreds of mortgage products
                for every type of customer.
              </p>
              <ButtonSolid href="/request-rates/" text="Start Now" />
            </div>
            <div className="relative md:h-[540px] -mx-4 md:mx-0 md:col-end-13 md:col-span-7">
              <div className="md:absolute md:left-0 md:w-[58vw] md:h-full overflow-hidden">
                <div className="hidden md:block bg-white w-60 transform rotate-[-20deg] h-screen absolute -left-20 top-0 z-10"></div>
                <GatsbyImage
                  image={data.heroDesktop.childImageSharp.gatsbyImageData}
                  className="w-full md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12 max-w-4xl">
            <h2>We Value Your Clients As Much As You Do</h2>
            <p>
              At MacAsh, we prioritize your clients. We believe in transparency,
              honesty, trust, and communication to make you, their real estate
              agent, look good. Here are some of the great benefits we offer
              your purchase clients:
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-16 md:gap-x-10 lg:gap-x-20">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">
                  Fast, Upfront Pre-Approvals
                </h3>
                <p className="mb-0">
                  We never charge for a pre-approval or credit report.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">Free Appraisals</h3>
                <p className="mb-0">
                  We either get an appraisal waiver, or we cover the cost.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">$150 Charitable Donation</h3>
                <p className="mb-0">
                  We let your client choose from a 501c(3) charity to donate to
                  after closing.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">Stress-Free Closing</h3>
                <p className="mb-0">
                  We take the weight off your clients with our smooth, fast, and
                  efficient closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-8 items-center relative">
            <div className="md:col-start-1 md:col-span-7 md:row-start-1">
              <GatsbyImage
                image={data.doIQuality.childImageSharp.gatsbyImageData}
                className="w-full"
              />
            </div>
            <div className="md:col-end-13 md:col-span-6 md:row-start-1 md:bg-white md:shadow-3xl md:rounded md:px-10 lg:px-14 md:py-8 lg:py-12 z-10">
              <h2>The Perks Of A MacAsh Partnership</h2>
              <p>
                As a real estate agent, we want to earn your trust and help you
                grow your business. When partnering with us, you’ll enjoy:
              </p>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Fast, upfront pre-approvals from the largest wholesale lender
                  in the country
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Initial CD at underwrite for greater closing speed and no
                  hang-ups
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  State-of-the-art digital underwriting/processing for quick
                  turn times
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  An outstanding customer experience from a lender that’s
                  passionate about helping clients
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <RecentBlogPosts /> */}
      <Testimonials />
      <ValueProps />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Conventional.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Conventional.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "14.0 Real Estate Partners/1.0 Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    doIQuality: file(
      relativePath: { eq: "14.0 Real Estate Partners/2.0 Perks.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 661)
      }
    }
  }
`;
export default Page;
