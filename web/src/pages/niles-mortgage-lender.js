import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import SliderMobileCards from "../components/Slider/SliderMobileCards";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Niles Mortgage Lender | Home Loans | MacAsh"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your independent mortgage broker in Niles and northern Illinois."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        backgroundPosition="0 50%"
        mobileRemoveBackground={true}
        textMaxWidth="md:max-w-[461px]"
        textAlignment="text-center md:text-left"
        padding="pt-10 md:pt-12 pb-14 md:pb-60"
      >
        <p className="font-heading text-gray-900 text-mobile-7xl md:text-7xl font-bold tracking-wider mb-3 md:mb-4">
          Your fast track to home ownership.
        </p>

        <svg
          width="100$"
          height="12"
          viewBox="0 0 461 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 mx-auto"
        >
          <path d="M0 0h461l-10.498 12H0V0z" fill="#1E291D" />
        </svg>

        <p className="font-body text-lg md:text-xl text-gray-900 font-semibold">
          Fast, simple, and affordable process—with the MacAsh family by your
          side.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 md:space-x-5">
          <ButtonSolid href="/refinance/" text="Refinance" />
          <ButtonGhost href="/purchase/" text="Purchase" />
        </div>
      </Hero>

      <GatsbyImage
        image={data.heroMobile.childImageSharp.gatsbyImageData}
        className="md:hidden w-full"
      />

      <section className="mb-20 md:mb-32 pt-16 md:pt-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10 lg:gap-x-16 items-center">
            <div className="md:col-start-1 md:col-span-7">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Niles Home Loans"
              />
            </div>
            <div className="md:col-end-13 md:col-span-5">
              <h1>Niles Home Loans</h1>
              <p className="font-display italic text-xl md:text-2xl">
                Apply online. Close in 15 days. It really is that easy. Make
                your dream home a reality with MacAsh, your independent mortgage
                lender in Niles and northern Illinois.
              </p>
              <ButtonGhost
                href="/about/"
                text="Learn More"
                icon="far fa-arrow-right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32 overflow-x-hidden">
        <div className="container">
          <header className="md:text-center mb-10 md:mb-14">
            <h2>We’re Here For You</h2>
          </header>
          <SliderMobileCards>
            <AniLink fade to="/realtors/" className="group">
              <GatsbyImage
                image={data.realEstateAgents.childImageSharp.gatsbyImageData}
                alt="Real Estate Agents"
                className="mb-5"
              />
              <h3 className="text-xl mb-4">Real Estate Agents</h3>
              <p>
                Partner with MacAsh and your primary purchase clients will
                receive pre-approvals, appraisals at no cost to the borrower,
                and a fast close.
              </p>
              <ButtonWithIcon href="/realtors/" text="Learn More" />
              <div className="bg-primary-400 h-[6px] w-0 group-hover:w-full mt-3 transition-all duration-500 ease-linear"></div>
            </AniLink>

            <AniLink fade to="/request-rates/" className="group">
              <GatsbyImage
                image={data.homeBuyersOwners.childImageSharp.gatsbyImageData}
                alt="Home Buyers And Owners"
                className="mb-5"
              />
              <h3 className="text-xl mb-4">Home Buyers And Owners</h3>
              <p>
                Ready to buy a home? Are you considering refinancing? MacAsh can
                find you the best rates.
              </p>
              <ButtonWithIcon href="/request-rates/" text="Learn More" />
              <div className="bg-primary-400 h-[6px] w-0 group-hover:w-full mt-3 transition-all duration-500 ease-linear"></div>
            </AniLink>

            <AniLink fade to="/va-loans-chicago/" className="group">
              <GatsbyImage
                image={data.veterans.childImageSharp.gatsbyImageData}
                alt="Our Valued Veterans"
                className="mb-5"
              />
              <h3 className="text-xl mb-4">Our Valued Veterans</h3>
              <p>
                Are you a retired or active military member? We'll help you
                secure a no-money-down VA loan, complete a 100% cash-out
                refinance, or take advantage of the VA interest rate reduction
                loan (VA IRRL).
              </p>
              <ButtonWithIcon href="/va-loans-chicago/" text="Learn More" />
              <div className="bg-primary-400 h-[6px] w-0 group-hover:w-full mt-3 transition-all duration-500 ease-linear"></div>
            </AniLink>
          </SliderMobileCards>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 mb-16 md:mb-32">
            <div className="md:mt-10 lg:mt-28">
              <div>
                <h2>
                  Time To Experience The Fastest Refinance In The Business
                </h2>
                <p className="font-display italic text-lg md:text-2xl">
                  Lower your monthly mortgage payment, get extra cash, or
                  shorten your loan. Let’s do this.
                </p>
                <div>
                  <ButtonGhost
                    href="/home-refinance-chicago/"
                    text="Refinance Now"
                    icon="far fa-arrow-right"
                  />
                </div>
              </div>
            </div>
            <div>
              <GatsbyImage
                image={data.refinance.childImageSharp.gatsbyImageData}
                alt="Time To Experience The Fastest Refinance In The Business"
                className="-mx-4 md:mx-0"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div className="md:mt-10 lg:mt-28">
              <div>
                <h2>Ready To Buy?</h2>
                <p className="font-display italic text-lg md:text-2xl">
                  Whether you're a first-time buyer or shopping for a new home
                  in Niles, get started with MacAsh. We make it quick and easy.
                </p>
                <div>
                  <ButtonGhost
                    href="/home-purchase/"
                    text="Let’s Go"
                    icon="far fa-arrow-right"
                  />
                </div>
              </div>
            </div>
            <div>
              <GatsbyImage
                image={data.purchase.childImageSharp.gatsbyImageData}
                alt="Ready To Buy?"
                className="-mx-4 md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="text-center md:text-left mb-8 md:mb-16">
            <h2 className="heading-three">Our Featured Loan Programs</h2>
          </header>
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-10 md:gap-x-5 lg:gap-x-10">
            <AniLink
              fade
              to="/conventional-loans-chicago/"
              className="group grid md:grid-cols-12 shadow-3xl hover:shadow-4xl rounded-xl overflow-hidden text-center md:text-left transition-all duration-300 ease-linear"
            >
              <div className="md:col-start-1 md:col-span-4">
                <GatsbyImage
                  image={data.conventional.childImageSharp.gatsbyImageData}
                  alt="Conventional Loan"
                  className="w-full h-full"
                />
              </div>
              <div className="md:col-end-13 md:col-span-8">
                <div className="px-4 md:px-5 lg:px-8 pt-3 md:pt-6 pb-6">
                  <h3 className="heading-four mb-2.5">Conventional Loan</h3>
                  <p className="mb-0">
                    Have a solid credit score and low debt? Go with a
                    conventional loan.
                  </p>
                </div>
              </div>
            </AniLink>

            <AniLink
              fade
              to="/fha-loans-chicago/"
              className="group grid md:grid-cols-12 shadow-3xl hover:shadow-4xl rounded-xl overflow-hidden text-center md:text-left transition-all duration-300 ease-linear"
            >
              <div className="md:col-start-1 md:col-span-4">
                <GatsbyImage
                  image={data.FHA.childImageSharp.gatsbyImageData}
                  alt="FHA Loan"
                  className="w-full h-full"
                />
              </div>
              <div className="md:col-end-13 md:col-span-8">
                <div className="px-4 md:px-5 lg:px-8 pt-3 md:pt-6 pb-6">
                  <h3 className="heading-four mb-2.5">FHA Loan</h3>
                  <p className="mb-0">
                    Need a little leniency on your credit score? Consider an FHA
                    loan.
                  </p>
                </div>
              </div>
            </AniLink>

            <AniLink
              fade
              to="/va-loans-chicago/"
              className="group grid md:grid-cols-12 shadow-3xl hover:shadow-4xl rounded-xl overflow-hidden text-center md:text-left transition-all duration-300 ease-linear"
            >
              <div className="md:col-start-1 md:col-span-4">
                <GatsbyImage
                  image={data.VA.childImageSharp.gatsbyImageData}
                  alt="VA Loan"
                  className="w-full h-full"
                />
              </div>
              <div className="md:col-end-13 md:col-span-8">
                <div className="px-4 md:px-5 lg:px-8 pt-3 md:pt-6 pb-6">
                  <h3 className="heading-four mb-2.5">VA Loan</h3>
                  <p className="mb-0">
                    Qualified service members can get a no-money-down VA loan.
                  </p>
                </div>
              </div>
            </AniLink>

            <AniLink
              fade
              to="/jumbo-loans-chicago/"
              className="group grid md:grid-cols-12 shadow-3xl hover:shadow-4xl rounded-xl overflow-hidden text-center md:text-left transition-all duration-300 ease-linear"
            >
              <div className="md:col-start-1 md:col-span-4">
                <GatsbyImage
                  image={data.jumbo.childImageSharp.gatsbyImageData}
                  alt="Jumbo Loan"
                  className="w-full h-full"
                />
              </div>
              <div className="md:col-end-13 md:col-span-8">
                <div className="px-4 md:px-5 lg:px-8 pt-3 md:pt-6 pb-6">
                  <h3 className="heading-four mb-2.5">Jumbo Loan</h3>
                  <p className="mb-0">
                    Have your sights set on a higher-priced home? You may need a
                    jumbo loan.
                  </p>
                </div>
              </div>
            </AniLink>
          </div>
        </div>
      </section>

      <ValueProps />
      <Testimonials />
      <About />
      {/* <RecentBlogPosts /> */}

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <h2>The Niles Life</h2>
              <p className="mb-0">
                At MacAsh, we make our home in northern Illinois and are proud
                to be a local mortgage broker in Niles. This Chicago suburb is
                well known for its notable landmark, the Leaning Tower of Niles
                (a small-scale replica of Italy's Leaning Tower of Pisa), which
                can be spotted in the film "Wayne's World." Niles is centrally
                located for easy access to O'Hare International Airport,
                downtown Chicago, and Lake Michigan. Niles is a great place to
                put your roots down, and we're happy to help you land your dream
                home here in Illinois.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.city.childImageSharp.gatsbyImageData}
                alt="The Niles Life"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
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
    heroDesktop: file(relativePath: { eq: "home/hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/hero-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    intro: file(relativePath: { eq: "home/2.0 intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 668)
      }
    }
    realEstateAgents: file(relativePath: { eq: "home/3.0 Client 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    homeBuyersOwners: file(relativePath: { eq: "home/3.1 Clietn 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    veterans: file(relativePath: { eq: "home/3.2 Cient 3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    purchase: file(relativePath: { eq: "home/5.0 Purchase.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    refinance: file(relativePath: { eq: "home/4.0 Refinance.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    conventional: file(relativePath: { eq: "home/6.0 Conventional.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    FHA: file(relativePath: { eq: "home/6.1 FHA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    VA: file(relativePath: { eq: "home/7.0 VA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    jumbo: file(relativePath: { eq: "home/7.1 Jumbo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    city: file(relativePath: { eq: "cities/Niles.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
