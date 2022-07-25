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
      question: "What is an FHA loan?",
      answer: (
        <>
          <p>
            FHA stands for the Federal Housing Administration, the government
            agency that insures the loan. They're not the issuer—private lenders
            such as banks or credit unions are the ones that issue the loans.
            Lenders must be approved by the FHA in order to provide them to
            consumers.
          </p>
        </>
      ),
    },
    {
      question: "Are FHA loans just for first-time home buyers?",
      answer: (
        <>
          <p>
            Although first-time home buyers do make up the majority of those who
            apply for an FHA loan, they're open to anyone who qualifies.
          </p>
        </>
      ),
    },
    {
      question: "What if my debt-to-income ratio is high?",
      answer: (
        <>
          <p>
            The ceiling is 43 percent, however, FHA guidelines do allow
            debt-to-income ratios to go higher (as high as 56 percent).
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="FHA Loans Chicago | MacAsh Home Loans"
        description="Shopping homes in the Chicago area? Apply for a government-backed FHA loan today and get access to great rates and terms from MacAsh."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-5 lg:gap-x-10 gap-y-8 items-center">
            <div className="relative z-20 md:col-start-1 md:col-span-5">
              <h1>FHA Loans In Chicago</h1>
              <p className="font-display italic text-xl md:text-2xl">
                If you are credit-score challenged or have a low to moderate
                income, you may qualify for a government-backed FHA loan. Your
                Chicago dream home is attainable.
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
          <header className="mb-10 md:mb-12">
            <h2>The Benefits Of An FHA Loan</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-16 md:gap-x-10 lg:gap-x-20">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">Affordable Interest Rates</h3>
                <p className="mb-0">
                  The interest rates on FHA loans remain the same, no matter
                  what your credit score is.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">Lower Credit Scores OK</h3>
                <p className="mb-0">
                  FHA credit score requirements are much less restrictive than
                  conventional loans.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">Low Down Payment</h3>
                <p className="mb-0">
                  Depending on your credit score, the required down payment can
                  be as low as 3.5 percent.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="min-w-[40px] h-10 rounded-full bg-gray-50 flex items-center justify-center">
                <i class="far fa-check text-primary-400"></i>
              </div>
              <div>
                <h3 className="heading-four mb-2">No Income Limits</h3>
                <p className="mb-0">
                  If you have a high income but also credit problems, you may
                  still qualify for an FHA loan.
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
              <h2>Do I Qualify?</h2>
              <p className="font-display italic text-xl lg:text-2xl">
                Here are the requirements if you’re considering applying for an
                FHA loan.
              </p>
              <ul className="flex flex-col space-y-2.5">
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Minimum Credit Score Of 580 With 3.5% Down
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Credit Score Of 500 To 579 With 10% Down
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Debt-To-Income Ratio No Greater Than 43 Percent
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Mortgage Insurance Premium Required
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  Home Must Be Your Primary Residence
                </li>
                <li className="flex items-center font-semibold text-gray-700 before:w-8 before:h-[3px] before:bg-gray-900 before:mr-4">
                  You Must Have A Steady Income
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
                <g clip-path="url(#clip0)">
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
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/FHA.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/FHA.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "4.0 FHA/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    doIQuality: file(relativePath: { eq: "4.0 FHA/do-i-qualify.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 661)
      }
    }
  }
`;
export default Page;
