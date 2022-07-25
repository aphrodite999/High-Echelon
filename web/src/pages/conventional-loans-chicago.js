import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const Page = ({ data }) => {
  const faqs = [
    {
      question: "What is a conventional loan?",
      answer: (
        <>
          <p>Acc</p>
        </>
      ),
    },
    {
      question: "What types of homes can I buy with a conventional loan?",
      answer: (
        <>
          <p>
            You can purchase single-family homes, condos, townhomes, lofts, and
            qualifying mobile homes. You can use the home you buy as either your
            primary residence, a vacation property, or investment property.
          </p>
        </>
      ),
    },
    {
      question: "How much income is required?",
      answer: (
        <>
          <p>
            Lenders are concerned with your debt-to-income ratio, not your
            income level. They want to know that you have room in your budget
            for a mortgage payment. The maximum debt-to-income ratio you can
            have to qualify for a conventional loan is 45%.
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Conventional Loans Chicago | MacAsh Home Loans"
        description="Shopping homes in the Chicago area? Apply for a conventional loan today and get access to great rates and terms from MacAsh, your independent mortgage broker."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-5 lg:gap-x-10 gap-y-8 items-center">
            <div className="relative z-20 md:col-start-1 md:col-span-5">
              <h1>Conventional Loans In Chicago</h1>
              <p className="font-display italic text-xl md:text-2xl">
                Do you have a strong credit score and history? Have you saved up
                for a down payment to buy a home in the Chicago area? If so, you
                may qualify for great terms and rates with a conventional loan.
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

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container flex justify-center items-center flex-col">
          <p className="font-body text-4xl text-black font-body mt-9 mb-6 max-w-[560px] w-3/5 text-center">
            The Key To Good Business
          </p>
          <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 text-center leading-8">
            When you have a clear understanding of your financials, you can make
            smart business decisions and gain valuable insights that’ll help you
            plan for the future. It can mean the difference between failure and
            success—you’ll want accurate data, and we deliver.
          </p>
        </div>
        <div className="flex justify-center items-center text-center h-64 px-4">
          <svg
            max-width="1094"
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

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="flex w-1/2">
            <p className="font-body text-4xl text-black font-body mt-9 mb-6 max-w-[560px] w-3/5">
              Our Services & Deliverables
            </p>
            <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 leading-8">
              You can count on High Echelon to professionally and accurately
              handle your small business accounting needs. We will:
            </p>
            <div>
              <div className="flex">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 leading-8">
                  Reconcile your bank and credit card statements
                </p>
              </div>
              <div className="flex">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 leading-8">
                  Reconcile your bank and credit card statements
                </p>
              </div>
              <div className="flex">
                <i className="fa fa-check text" aria-hidden="true"></i>
                <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 leading-8">
                  Reconcile your bank and credit card statements
                </p>
              </div>
              <div className="flex">
                <i className="fa fa-check" aria-hidden="true"></i>
                <p className="font-body text-base text-black font-body max-w-[736px] w-2/3 leading-8">
                  Reconcile your bank and credit card statements
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <GatsbyImage
              image={data.accountingImage.childImageSharp.gatsbyImageData}
              className="w-full md:h-full"
            />
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
              <h2>Do I Qualify?</h2>
              <p className="font-display italic text-xl lg:text-2xl">
                Here are the requirements if you’re considering applying for a
                conventional home loan.
              </p>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Credit Score Of At Least 620
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Down Payment Of At Least 3%
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Debt-To-Income Ratio No More Than 45%
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Appraisal To Verify Home Value And Condition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-32 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-14">
            <h2>Frequently Asked Questions</h2>
          </header>

          <Accordion
            allowZeroExpanded={true}
            className="border-t border-solid border-gray-800/20"
          >
            {faqs.map((faq, i) => {
              return (
                <div key={i}>
                  <AccordionItem
                    className="border-b border-solid border-gray-800/20 pt-6 md:pt-7 pb-5 md:pb-6"
                    uuid={i}
                  >
                    <AccordionItemButton className="flex items-center hover:outline-none">
                      <AccordionItemState>
                        {(state) => {
                          return (
                            <>
                              <div className="w-10 h-10 flex items-center justify-center border border-primary-900 rounded-full mr-6">
                                <i
                                  className={`far ${
                                    state.expanded ? "fa-minus" : "fa-plus"
                                  } text-xl text-primary-400`}
                                ></i>
                              </div>

                              <p
                                className={`font-heading text-xl md:text-3xl font-bold mb-0 ${
                                  state.expanded
                                    ? "text-primary-400"
                                    : "text-gray-700"
                                }`}
                              >
                                {faq.question}
                              </p>
                            </>
                          );
                        }}
                      </AccordionItemState>
                    </AccordionItemButton>
                    <AccordionItemPanel className="pt-7 animate-fadeIn">
                      <p className="mb-0 text-black">{faq.answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>

          <div className="flex items-center mt-8">
            For more resources visit{" "}
            <a
              href="https://www.youtube.com/channel/UCbrfuoN9pcc1GstBXFW5hRw"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 border border-primary-900 rounded-full flex justify-center items-center ml-3"
            >
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M12.003 16.4325L12.0029 16.9325L12.0029 16.4325H12.0027H12.0017L11.9978 16.4325L11.9819 16.4325L11.9194 16.4323C11.8645 16.4322 11.7835 16.432 11.6796 16.4315C11.4719 16.4305 11.1728 16.4285 10.8081 16.4245C10.0783 16.4165 9.08654 16.4006 8.03736 16.3687C6.98736 16.3369 5.88397 16.2892 4.92976 16.218C3.96111 16.1457 3.1895 16.052 2.77708 15.9386L2.77614 15.9384C2.35227 15.8228 1.96543 15.5973 1.65432 15.2839L1.30525 15.6303L1.65432 15.2839C1.34421 14.9714 1.12014 14.5825 1.00465 14.1555C0.234496 11.0586 0.439117 6.07721 0.994051 2.77479C1.1109 2.3547 1.33304 1.97223 1.63884 1.66413C1.94995 1.35069 2.3368 1.12515 2.76068 1.00958L2.76161 1.00932C3.17444 0.895899 3.94643 0.801213 4.91507 0.727501C5.86937 0.654879 6.97285 0.605257 8.0229 0.571448C9.07214 0.537665 10.064 0.519794 10.7937 0.510374C11.1585 0.505665 11.4576 0.50307 11.6653 0.501653C11.7692 0.500945 11.8502 0.500531 11.9052 0.500294L11.9677 0.500058L11.9835 0.500012L11.9874 0.500002L11.9877 0.5H11.9879L11.9889 0.5L11.9928 0.500002L12.0087 0.500015L12.0712 0.500124C12.1261 0.500248 12.2071 0.500496 12.311 0.500994C12.5187 0.501989 12.8177 0.50398 13.1825 0.507966C13.9122 0.515938 14.904 0.531879 15.9531 0.563732C17.0031 0.595611 18.1065 0.643309 19.0607 0.714488C20.0293 0.786745 20.8009 0.880523 21.2133 0.993835L21.2142 0.994092C21.6381 1.10966 22.025 1.33518 22.3361 1.64861C22.6458 1.96066 22.8697 2.34903 22.9853 2.77549C23.7521 5.88978 23.581 10.8713 22.9968 14.1713C22.8801 14.5921 22.6577 14.9753 22.3514 15.2839C22.0403 15.5973 21.6534 15.8228 21.2295 15.9384L21.2286 15.9386C20.8162 16.052 20.0446 16.1457 19.076 16.218C18.1218 16.2892 17.0184 16.3369 15.9684 16.3687C14.9193 16.4006 13.9275 16.4165 13.1978 16.4245C12.833 16.4285 12.534 16.4305 12.3263 16.4315C12.2224 16.432 12.1414 16.4322 12.0864 16.4323L12.0239 16.4325L12.0081 16.4325L12.0042 16.4325H12.0032H12.003Z"
                    stroke="black"
                    className="fill-current text-white group-hover:text-primary-400 transition-colors duration-300 ease-linear"
                  />
                  <path
                    d="M9.60187 12.0946L15.8202 8.46619L9.60196 4.83782L9.60187 12.0946Z"
                    className="fill-current text-primary-900 group-hover:text-white transition-colors duration-300 ease-linear"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* <RecentBlogPosts /> */}
      <Testimonials className="mb-0" />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    accountingImage: file(
      relativePath: { eq: "3.0 Accounting Services/2.0 Service pages.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 720)
      }
    }
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
    heroDesktop: file(relativePath: { eq: "3.0 Conventional/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    doIQuality: file(
      relativePath: { eq: "3.0 Conventional/do-i-qualify.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 661)
      }
    }
  }
`;
export default Page;
