import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ModalLoanOptions from "../components/Modal/ModalLoanOptions";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const faqs = [
    {
      question: "What is an APR?",
      answer: (
        <>
          <p>
            An Annual Percentage Rate (APR) is the cost of a mortgage on an
            annual basis. It’s likely to be higher than the standard interest
            rate of note because it also considers points and other costs. Home
            buyers can use the APR to compare different mortgages based on the
            loan’s annual cost because it shows the true cost of a loan.
          </p>
        </>
      ),
    },
    {
      question: "Should I pay points to lower my interest rate?",
      answer: (
        <>
          <p>
            Paying for points to lower an interest rate can be a good idea if
            you plan on staying in your home for at least a few years. If you
            remain in the home longer, the monthly savings may not cover the
            cost you paid up front. The benefit of paying for points is that
            it’ll keep your monthly loan payment where you want it and can also
            help you qualify for a bigger loan amount.
          </p>
        </>
      ),
    },
    {
      question: "What is PMI (Private Mortgage Insurance)?",
      answer: (
        <>
          <p>
            Private Mortgage Insurance (PMI) is what lenders use to protect
            themselves if you can’t pay your mortgage and end up defaulting.
            It's typically required if your down payment is less than 20%.
          </p>
        </>
      ),
    },
  ];

  const loans = [
    {
      id: 0,
      featuredImage: data.conventional.childImageSharp.gatsbyImageData,
      popupImage: data.conventionalPopup.childImageSharp.gatsbyImageData,
      title: "Conventional",
      excerpt:
        "Conventional loans, which are privately funded, are the most common in the mortgage industry.",
      description: (
        <>
          <p>
            Conventional loans are funded by banks, credit unions, and mortgage
            companies. Typically, the interest rate will be higher than a
            government-backed mortgage, like an FHA loan, and the lending
            requirements will be stricter. They also tend to have a fixed
            interest rate and a down payment of 3%.
          </p>
        </>
      ),
      category: ["All", "Rate Security", "Lower Equity / Money Down"],
    },
    {
      id: 1,
      featuredImage: data.FHA.childImageSharp.gatsbyImageData,
      popupImage: data.FHAPopup.childImageSharp.gatsbyImageData,
      title: "FHA Loans",
      excerpt:
        "FHA loans are insured against default by the Federal Housing Administration (FHA)",
      description: (
        <>
          <p>
            FHA loans are typically a good option for first-time home buyers or
            those with spotty credit history. They’re guaranteed by the
            government. The benefits include a smaller down payment, lower
            interest rates, it’s easier on credit-challenged borrowers, and 100%
            of the down payment can be in the form of a gift.
          </p>
        </>
      ),
      category: ["All", "Easy Qualification", "Lower Equity / Money Down"],
    },
    {
      id: 2,
      featuredImage: data.VA.childImageSharp.gatsbyImageData,
      popupImage: data.VAPopup.childImageSharp.gatsbyImageData,
      title: "VA",
      excerpt:
        "VA loans are guaranteed home loans for qualified veterans, active service members, and surviving spouses.",
      description: (
        <>
          <p>
            The U.S. Department of Veterans Affairs guarantees a VA loan. The
            most significant benefit is that no down payment is required.
            There’s also no minimum credit score you’re not required to pay
            Private Mortgage Insurance (PMI), and you can pay off the loan at
            any time without penalty.
          </p>
        </>
      ),
      category: ["All", "Lower Equity / Money Down"],
    },
    {
      id: 3,
      featuredImage: data.jumbo.childImageSharp.gatsbyImageData,
      popupImage: data.jumboPopup.childImageSharp.gatsbyImageData,
      title: "Jumbo",
      excerpt:
        "A jumbo loan allows you to finance a home that's priced over the government's loan limit.",
      description: (
        <>
          <p>
            If a home you're considering purchasing is priced over the
            conforming loan limit set by the Federal Housing Finance Agency
            (FHFA), you can apply for a jumbo loan. For example, if a home is
            listed on the market at $500,000, but the conforming loan limit is
            $400,000, then a jumbo loan would come into play. The interest rates
            are typically competitive and the down payments are low. However,
            you'll need to have a solid credit score and high annual income to
            qualify.
          </p>
        </>
      ),
      category: ["All", "Loan Flexibility"],
    },
    {
      id: 4,
      featuredImage: data.interestOnly.childImageSharp.gatsbyImageData,
      popupImage: data.interestOnlyPopup.childImageSharp.gatsbyImageData,
      title: "Interest Only",
      excerpt:
        "You pay only the interest for a certain period of time, typically the first five or 10 years.",
      description: (
        <>
          <p>
            Interest-only loans can be beneficial if you’re seeking better
            monthly cash flow at the beginning of your loan term. However,
            you’ll need to be prepared for your monthly payments to go up
            significantly once the period ends. Typically, an interest-only
            mortgage comes into play if you want to buy a more expensive home
            with a lower monthly payment out of the gate.
          </p>
        </>
      ),
      category: ["All", "Lower Equity / Money Down"],
    },
    {
      id: 5,
      featuredImage: data.balloon.childImageSharp.gatsbyImageData,
      popupImage: data.balloonPopup.childImageSharp.gatsbyImageData,
      title: "Balloon",
      excerpt:
        "With a balloon loan, you initially pay a low monthly payment, then at the end of the term, a balloon payment is due.",
      description: (
        <>
          <p>
            A balloon mortgage has an initial period (typically five or seven
            years) of low monthly payments. Once that period ends, a large
            balloon payment is due to pay off the balance owed on the loan.
            Buyers who are interested in a balloon mortgage typically plan to be
            in a home for a short amount of time. It can be risky. For example,
            if the homeowner decides to sell or refinance when the large payment
            is due but runs into difficulty, it could cause hardship.
          </p>
        </>
      ),
      category: ["All", "Loan Flexibility"],
    },
    {
      id: 6,
      featuredImage: data.reverse.childImageSharp.gatsbyImageData,
      popupImage: data.reversePopup.childImageSharp.gatsbyImageData,
      title: "Reverse",
      excerpt:
        "Allows those 62 or older to convert a portion of their home equity into cash while living in their home.",
      description: (
        <>
          <p>
            With a reverse mortgage, the lender pays the homeowner each month
            using the home’s equity. And as long as the 2.0 Purchaseowner
            remains in the home, there are no fees, and no principal or interest
            is due. The advantage of a reverse mortgage is that if a senior
            needs money for expenses, such as caregiving, it's available to
            them. The disadvantage is that the home equity is being used while
            they are alive and therefore won't be available to pass down to
            heirs.
          </p>
        </>
      ),
      category: ["All", "Loan Flexibility"],
    },
    {
      id: 7,
      featuredImage: data.graduatedPayment.childImageSharp.gatsbyImageData,
      popupImage: data.graduatedPaymentPopup.childImageSharp.gatsbyImageData,
      title: "Graduated Payment",
      excerpt:
        "Your monthly payment will increase annually for a specific period of time, then become fixed for the remainder of the loan.",
      description: (
        <>
          <p>
            Graduated payment mortgages start with low monthly payments and
            gradually increase over time. They’re geared towards buyers who
            can’t afford a larger payment but still want to buy a home. The loan
            gives them an opportunity to slowly build to a larger payment.
            Graduated payment mortgages are also an option when interest rates
            are high and are pushing up the cost of monthly mortgage payments.
          </p>
        </>
      ),
      category: ["All", "Rate Security"],
    },
  ];

  const [setCategory, setCategoryState] = useState("All");
  const [setActive, setActiveState] = useState(null);
  const [setFilters, setFiltersState] = useState(false);

  const categoryFilterClickHandler = (category, id) => {
    setCategoryState(category);
    setActiveState(id);
    setFiltersState(false);
  };

  const filterRevealClickHandler = () => {
    setFiltersState(!setFilters);
  };

  const filteredProducts = loans.filter((loan) =>
    loan.category.includes(setCategory)
  );

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Purchase a Home | Chicago Mortgage Lender | MacAsh"
        description="You're ready to buy. We're ready to go. And we act FAST. Fill out our easy online application and close on your new Chicago area home in just 15 days."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-32 pt-10 md:pt-0 overflow-x-hidden">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-5 lg:gap-x-10 gap-y-8 items-center">
            <div className="relative z-20 md:col-start-1 md:col-span-5">
              <h1>Let’s Get You Your Dream Home</h1>
              <p className="font-display italic text-xl md:text-2xl">
                You're ready to buy. We're ready to go, and we act FAST. Start
                with our simple online application, and you can close on your
                new home in just 15 days. With MacAsh, you won't pay for a
                pre-approval, appraisal, or the big bank overhead.
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

      <section className="mb-20 md:mb-32 ">
        <div className="container">
          <header className="text-center mb-8 md:mb-10">
            <h2>Compare Home Loans</h2>
          </header>

          <button
            onKeyDown={() => filterRevealClickHandler()}
            onClick={() => filterRevealClickHandler()}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden mb-6"
          >
            Filters <i className="far fa-chevron-down ml-2"></i>
          </button>

          <div
            className={`absolute md:relative left-0 p-6 md:p-0 ml-4 md:ml-0 origin-top-left bg-white rounded-md shadow-lg md:shadow-none transform z-10 transition-all duration-100 ease-linear ${
              setFilters === true
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 md:opacity-100 md:scale-100"
            }`}
          >
            <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 md:mb-16">
              <button
                onKeyDown={() => categoryFilterClickHandler("All", 1)}
                onClick={() => categoryFilterClickHandler("All", 1)}
                className={`hover:text-primary-400 font-display text-sm lg:text-base tracking-wide text-left md:text-center  ${
                  setActive === 1 ? "text-primary-400" : "text-gray-600/60"
                }`}
              >
                All
              </button>
              <button
                onKeyDown={() =>
                  categoryFilterClickHandler("Easy Qualification", 2)
                }
                onClick={() =>
                  categoryFilterClickHandler("Easy Qualification", 2)
                }
                className={`hover:text-primary-400 font-display text-sm lg:text-base tracking-wide text-left md:text-center  ${
                  setActive === 2 ? "text-primary-400" : "text-gray-600/60"
                }`}
              >
                Easy Qualification
              </button>
              <button
                onKeyDown={() =>
                  categoryFilterClickHandler("Loan Flexibility", 3)
                }
                onClick={() =>
                  categoryFilterClickHandler("Loan Flexibility", 3)
                }
                className={`hover:text-primary-400 font-display text-sm lg:text-base tracking-wide text-left md:text-center  ${
                  setActive === 3 ? "text-primary-400" : "text-gray-600/60"
                }`}
              >
                Loan Flexibility
              </button>
              <button
                onKeyDown={() => categoryFilterClickHandler("Rate Security", 4)}
                onClick={() => categoryFilterClickHandler("Rate Security", 4)}
                className={`hover:text-primary-400 font-display text-sm lg:text-base tracking-wide text-left md:text-center  ${
                  setActive === 4 ? "text-primary-400" : "text-gray-600/60"
                }`}
              >
                Rate Security
              </button>
              <button
                onKeyDown={() =>
                  categoryFilterClickHandler("Lower Equity / Money Down", 5)
                }
                onClick={() =>
                  categoryFilterClickHandler("Lower Equity / Money Down", 5)
                }
                className={`hover:text-primary-400 font-display text-sm lg:text-base tracking-wide text-left md:text-center  ${
                  setActive === 5 ? "text-primary-400" : "text-gray-600/60"
                }`}
              >
                Lower Equity / Money Down
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 gap-y-6">
            {filteredProducts.map((loan, i) => {
              return (
                <button
                  className="bg-white shadow-3xl hover:shadow-4xl rounded-xl flex flex-col overflow-hidden"
                  aria-label="Modal trigger"
                  data-modal-open="modal-loan-options"
                  onClick={() => setSlideIndex(loan.id)}
                  key={i}
                >
                  <GatsbyImage image={loan.featuredImage} />
                  <div className="pt-3 px-6 pb-3.5 text-center">
                    <p className="font-heading text-gray-900 text-lg font-bold mb-3">
                      {loan.title}
                    </p>
                    <p className="text-sm mb-0">{loan.excerpt}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div>
              <img
                src="https://via.placeholder.com/560x400?text=FPO"
                alt="How It Works"
              />
            </div>
            <div className="md:mt-10 lg:mt-28">
              <div>
                <h2>How It Works</h2>
                <p className="mb-0">
                  We make it easy. Apply online using our secure application.
                  Then, we'll get to work right away to get you qualified and
                  find the best rates. You'll get a pre-approval letter, and
                  once you're ready to buy, we help you close on your new home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

      <Testimonials />
      <ValueProps />
      {/* <RecentBlogPosts /> */}
      <CallToAction />
      <ModalLoanOptions slideIndex={slideIndex} slides={loans} />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Purchase.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Purchase.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "2.0 Purchase/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 920)
      }
    }
    conventional: file(
      relativePath: { eq: "2.0 Purchase/2.0 Conventional.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    conventionalPopup: file(
      relativePath: { eq: "2.0 Purchase/Pop-up/Conventional.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    FHA: file(relativePath: { eq: "2.0 Purchase/2.1 FHA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    FHAPopup: file(relativePath: { eq: "2.0 Purchase/Pop-up/FHA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    VA: file(relativePath: { eq: "2.0 Purchase/2.2 VA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    VAPopup: file(relativePath: { eq: "2.0 Purchase/Pop-up/VA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    jumbo: file(relativePath: { eq: "2.0 Purchase/2.3 Jumbo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    jumboPopup: file(relativePath: { eq: "2.0 Purchase/Pop-up/Jumbo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    interestOnly: file(
      relativePath: { eq: "2.0 Purchase/2.4 Interest-Only.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    interestOnlyPopup: file(
      relativePath: { eq: "2.0 Purchase/Pop-up/Interest-Only.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    balloon: file(relativePath: { eq: "2.0 Purchase/2.5 Balloon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    balloonPopup: file(
      relativePath: { eq: "2.0 Purchase/Pop-up/Balloon.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    reverse: file(relativePath: { eq: "2.0 Purchase/2.6 Reverse.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    reversePopup: file(
      relativePath: { eq: "2.0 Purchase/Pop-up/Reverse.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    graduatedPayment: file(
      relativePath: { eq: "2.0 Purchase/2.7 Graduated Payment.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
    graduatedPaymentPopup: file(
      relativePath: { eq: "2.0 Purchase/Pop-up/Graduated.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 572)
      }
    }
  }
`;
export default Page;
