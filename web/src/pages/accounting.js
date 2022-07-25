import { React, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import CarouselForm from "../components/Repeating/Carousel";
import Accordian from "../components/Accordion/Accord";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

import OffCanvas from "../components/OffCanvas/OffCanvas";
// import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";



const Page = ({ data }) => {

  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
        <section className="mb-20 md:mb-32 mt-12">
            <div className="container">
                <div className="relative grid md:grid-cols-12 md:gap-x-10 lg:gap-x-16 gap-y-8 items-center">
                    <div className="md:col-start-1 md:col-span-12">
                        <GatsbyImage image={data.accountServicesImage.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="md:absolute bg-primary-700 shadow-inner md:col-start-6 md:col-span-7 p-12">
                        <h2 className="font-light text-4xl text-primary-200">
                            Small Business Accounting Services in Greater Atlanta
                        </h2>
                        <p className="font-light font-display text-xl md:text-xl">
                            You can’t manage a business without accurate financial statements. 
                            We can get you there.
                        </p>
                        <ButtonSolid
                            className="font-light"
                            href="/about/"
                            text="Book a Call"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-12 flex justify-content items-center flex-col">
            <div className="flex justify-content items-center flex-col md:mx-88 md:min-w-120 sm:mx-8 px-7">
                <p className="text-4xl font-thin mb-6">The Key To Good Business</p>
                <p className="text-base font-light leading-7">
                    When you have a clear understanding of your
                    financials, you can make smart business decisions
                    and gain valuable insights that’ll help you plan
                    for the future. It can mean the difference between
                    failure and success—you’ll want accurate data, and we deliver.
                </p>
            </div>
            <div className="flex justify-center items-center h-64">
                <svg
                    height="3"
                    viewBox="0 0 1094 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M0 1.5h1094"
                    stroke="url(#paint0_linear_1129_1425)"
                    strokeWidth="3"
                    />
                    <defs>
                    <linearGradient
                        id="paint0_linear_1129_1425"
                        x1="0"
                        y1="2.00435"
                        x2="w-10/12"
                        y2="1.96651"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#A2A09D" stopOpacity="0" />
                        <stop offset=".145833" stopColor="#CB9636" />
                        <stop offset=".265625" stopColor="#CFA855" />
                        <stop offset=".427083" stopColor="#FCE4A7" />
                        <stop offset=".578125" stopColor="#F0D592" />
                        <stop offset=".713542" stopColor="#CFA855" />
                        <stop offset=".828125" stopColor="#CB9636" />
                        <stop offset="1" stopColor="#A7A7A7" stopOpacity="0" />
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>

        <section className="mb-20 md:mb-32 mt-12">
            <div className="container">
                <div className="lg:flex items-center md:block">
                    <div className="flex justify-center flex-col lg:w-1/2 md:w-full md:mb-8 sm:mb-8">
                        <div className="pl-10">
                            <p className="text-4xl font-thin mb-6">Our Services & Deliverables</p>
                            <p className="text-base font-light  mb-6">
                                You can count on High Echelon to professionally
                                and accurately handle your small business accounting needs. We will:
                            </p>
                            <div className="text-base font-light">
                                <div className="flex">
                                    <i className="fa fa-check text-primary-100 mr-3"></i>
                                    <p className="text-base font-semibold mb-3">Reconcile your bank and credit card statements</p>
                                </div>
                                <div className="flex">
                                    <i className="fa fa-check text-primary-100 mr-3"></i>
                                    <p className="text-base font-semibold mb-3">Register a new business at the state and federal level</p>
                                </div>
                                <div className="flex">
                                    <i className="fa fa-check text-primary-100 mr-3"></i>
                                    <p className="text-base font-semibold mb-3">Talk out the pros and cons of different approaches</p>
                                </div>
                                <div className="flex">
                                    <i className="fa fa-check text-primary-100 mr-3"></i>
                                    <p className="text-base font-semibold mb-3">Advise you on a big purchase or sale that may be on the horizon</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="max-w-140">
                      <GatsbyImage
                          image={
                              data.accountingProfileImage.childImageSharp
                              .gatsbyImageData
                          }
                          alt="Small Business Consulting"
                          className="rounded-[8px] ml-20"
                      />
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20 md:mb-32 mt-12">
            <div className="container">
                <div className="lg:flex items-center md:block">
                    <div className="lg:w-1/2 md:w-full mr-20 md:mb-8 sm:mb-8">
                        <GatsbyImage
                            image={
                                data.accountingStartImage.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="rounded-[8px]"
                        />
                    </div>
                    <div className="flex justify-center flex-col lg:w-1/2 md:w-full">
                        <div className="px-10">
                            <p className="text-4xl font-thin mb-6">How To Get Started</p>
                            <p className="text-base font-light  mb-6">
                                We begin with an introductory call at no cost to you.
                                First, we want to understand your goals and align on expectations,
                                timeline, and outcomes. And from there, we’ll present you with a
                                proposal outlining a plan and the associated costs.
                            </p>
                            <ButtonSolid
                                className="font-light"
                                href="/about/"
                                text="Book a Call"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20 md:mb-32 mt-12">
            <div className="container">
                <p className="text-4xl mb-4">Answers To Frequently Asked Questions</p>
                <Accordian />
            </div>
        </section>

        <section className="mb-20 md:mb-32">
            <div className="container">
                <div className="gap-y-8 md:gap-x-10 lg:gap-x-16">
                    <div className="mb-8 flex justify-center items-center flex-col">
                        <h3 className="text-primary-700 text-4xl font-thin mb-12">
                            We are Here To Make Your Business Better
                        </h3>
                        <p className="md:w-2/3 sm:w-full italic text-xl md:text-base sm:text-base font-light mb-12">
                            Get streamlined end-to-end services for everything from entity
                            formation to accounting, payroll, and taxes. It’s all here, in a
                            single, full-stack solution that simplifies it all.
                        </p>
                    </div>
                    <div className="md:flex sm:block">
                        <AniLink fade to="/va-loans-chicago/" className="mr-10 mb-6 w-1/3">
                          <div className=" max-w-fit">
                            <GatsbyImage
                            image={
                                data.accountingStartImage.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="mb-6 rounded-[8px] h-60"
                            />
                          </div>
                            <div className="justify-center flex-col py-2">
                                <h3 className="text-lg mb-4 text-primary-700">
                                    Small Business Consulting
                                </h3>
                                <p className="text-base">
                                    Need advice or help in navigating the best way to form your
                                    business? Talk with the experts.
                                </p>
                            </div>
                        </AniLink>
                        <AniLink fade to="/va-loans-chicago/" className="mr-10 mb-6 w-1/3">
                          <div className="max-w-140">
                            <GatsbyImage
                              image={
                                  data.accountServicesImage.childImageSharp.gatsbyImageData
                              }
                              alt="Accounting Services"
                              className="mb-6 rounded-[8px] h-60 w-full"
                              />
                            </div>
                            <div className="justify-center flex-col py-2">
                                <h3 className="text-lg mb-4 text-primary-700">
                                    Accounting Services
                                </h3>
                                <p className="text-base">
                                    Receive accurate, secure delivery of monthly, quarterly, and
                                    annual financial statements.
                                </p>    
                            </div>
                        </AniLink>
                        <AniLink fade to="/va-loans-chicago/" className="mr-10 mb-6 w-1/3 h-60">
                          <div className="max-w-140">
                            <GatsbyImage
                            image={
                                data.smallBusinessConsultingImage.childImageSharp
                                .gatsbyImageData
                            }
                            alt="Small Business Consulting"
                            className="mb-6 rounded-[8px] h-60 max-w-140"
                            />
                          </div>
                            <div className="justify-center flex-col py-2">
                            <h3 className="text-lg mb-4 text-primary-700">
                                Payroll Management
                            </h3>
                            <p className="text-base">
                                Get lightweight, user-friendly, cost-efficient payroll
                                processing, and hiring/termination automation.
                            </p>
                            </div>
                        </AniLink>
                    </div>
                </div>
            </div>
        </section>
      {/* <ValueProps /> */}
      {/* <Testimonials /> */}
      <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <p className="text-4xl font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section>
      <About />
      {/* <RecentBlogPosts /> */}
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    accountingProfileImage: file(
        relativePath: { eq: "3.0 Accounting Services/2.0 Service pages.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    accountingStartImage: file(
        relativePath: { eq: "home/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
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
    smallBusinessConsultingImage: file(
      relativePath: { eq: "1.0 Homepage/3.0 Small Business desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "3.0 Accounting Services/1.0 Hero desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 651)
      }
    }
    payrollManagementImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    incomeTaxPreparationImage: file(
      relativePath: { eq: "1.0 Homepage/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero mobile.jpg" }) {
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
  }
`;
export default Page;
