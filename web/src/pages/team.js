import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import About from "../components/Repeating/About";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    team: [
      {
        image: data.KC.childImageSharp.gatsbyImageData,
        name: "Kevin “KC” Duffy",
        title: "Managing Partner & Founder",
        phone: "(773) 501-3997",
        email: "KC@MacAshHomeLoans.com",
        nmls: "1045534",
        applyLink:
          "https://www.blink.mortgage/app/signup/p/macashhomeloansllc/kevinduffy?campaign=KC",
        bio: (
          <>
            <p>
              Kevin “KC” Duffy has been a licensed loan officer since 2006 and
              serves Illinois and Florida. He’s a Founder and Managing Partner
              of MacAsh Home Loans. KC married his high school sweetheart
              Colleen Duffy in 2008 and has two children, Macayla Ashley Duffy
              (who the company is named after) and Kevin Allen Duffy. KC is a
              mortgage expert, knows the ins and outs of all programs and
              guidelines, and can answer questions for any part of the process.
              In addition to his mortgage experience, KC is a lifelong student
              and is currently earning his Doctorate at Concordia University
              Chicago, where he is also an Adjunct Professor in Business
              Administration.
            </p>
          </>
        ),
      },
      {
        image: data.kevin.childImageSharp.gatsbyImageData,
        name: "Kevin Duffy",
        title: "Marketing & Finance Director",
        phone: "(847) 417-2730",
        email: "KC@MacAshHomeLoans.com",
        nmls: "2099617",
        applyLink:
          "https://www.blink.mortgage/app/signup/p/macashhomeloansllc/kevinduffy?campaign=Kevin",
        bio: (
          <>
            <p>
              Kevin Duffy is a founder and active partner of MacAsh Home Loans.
              He has 40 years of business experience, managing teams of 40+
              people in the information technology industry. One of the most
              significant accomplishments was spearheading a groundbreaking
              process that changed ITIL V3 training across the United States and
              Canada. Kevin has vast investment experience and has previously
              opened and run several businesses. He’s a father of four children
              and a grandfather of 12 grandchildren. To quote Jimmy V, his bags
              are always packed.
            </p>
          </>
        ),
      },
      {
        image: data.mike.childImageSharp.gatsbyImageData,
        name: "Mike Duffy",
        title: "Loan Officer",
        phone: "(847) 510-7684",
        email: "Mike.Duffy@MacAshHomeLoans.com",
        nmls: "2136344",
        applyLink:
          "https://www.blink.mortgage/app/signup/p/macashhomeloansllc/MikeDuffy?campaign=Mike",
        bio: (
          <>
            <p>
              Mike Duffy is a licensed loan officer serving Illinois and
              Florida. He’s also worked on property taxes to reduce overall
              mortgage costs since 2008. Mike’s experience in finance and IT
              increases his ability to connect to his customers and save them
              money. Mike is married, has two children, and enjoys coaching
              their sports teams in his free time.
            </p>
          </>
        ),
      },
      {
        image: data.anthony.childImageSharp.gatsbyImageData,
        name: "Anthony Borgert",
        title: "Loan Officer",
        phone: "(702) 557-7031",
        email: "Anthony.Borgert@MacAshHomeLoans.com",
        nmls: "2140908",
        applyLink:
          "https://www.blink.mortgage/app/signup/p/macashhomeloansllc/anthonyborgert?campaign=Anthony",
        bio: (
          <>
            <p>
              Anthony Borgert is a licensed mortgage loan officer in Illinois.
              He has years of experience as a real estate investor acquiring
              properties at real estate auctions. Anthony has always helped
              strategize with other experienced investors during his real estate
              investment career to find the best ways to line up financing on
              properties. He's a veteran of the United States Air Force, where
              he proudly served as an air traffic controller. Anthony is an
              expert on VA home loans as he has used these loans on his personal
              properties.
            </p>
          </>
        ),
      },
      {
        image: data.eric.childImageSharp.gatsbyImageData,
        name: "Eric Czerwinski",
        title: "Loan Officer",
        phone: "(321) 222-6901",
        email: "Eric.Czerwinski@MacAshHomeLoans.com",
        nmls: "2133178",
        applyLink:
          "https://www.blink.mortgage/app/signup/p/macashhomeloansllc/ericczerwinski?campaign=Eric",
        bio: (
          <>
            <p>
              Eric Czerwinski is a licensed loan officer in Florida and
              Illinois. His 30+ years of residential real estate investment
              experience allow him to offer his clients creative options to
              achieve their financial goals. Eric is married and has four
              'almost adult' children. He firmly promotes education and
              opportunities to give back to the community he serves. He loves
              being involved in FIRST Robotics, the Special Olympics, and beach
              cleanups.
            </p>
          </>
        ),
      },
      {
        image: data.tom.childImageSharp.gatsbyImageData,
        name: "Tom Giese",
        title: "Loan Officer",
        phone: "(773) 419-9538",
        email: "Tom.Giese@MacAshhomeLoans.com",
        nmls: "2225175",
        applyLink:
          " https://www.blink.mortgage/app/signup/p/macashhomeloansllc/kevinduffy?campaign=Fullapp",
        bio: (
          <>
            <p>
              Tom Giese is a licensed loan officer in the state of Illinois.
              Devoted to service and helping others, he is a Law Enforcement
              Officer of over 15 years, and he proudly served in the U.S. Coast
              Guard for six years. Tom has a huge passion for home buying and
              brings extensive knowledge and experience in general contracting,
              home renovations, and property maintenance. He is ready to focus
              on serving you and reaching your financial and home buying goals.
              In addition to his busy home life as a father of two, Tom is the
              owner of KTG Builders - General Contracting and Custom Carpentry,
              and his wife has been a licensed real estate agent in the State of
              Illinois for over five years.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Meet the Team | MacAsh Home Loans | Chicago"
        description="Meet the MacAsh team—Chicago's top loan experts who are ready to help you buy a home or walk you through a refinance. Apply today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-10 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h1>The MacAsh Team</h1>
            <p className="font-display tracking-wide">
              We're family-owned with a team of top loan experts ready to help
              you buy a new home or refinance. At the heart of everything we do
              is you, our valued customers.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-6">
            {content.team.map((content, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(i)}
                  key={i}
                  className="group relative text-left"
                >
                  <div className="overflow-hidden mb-6">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <div className="font-heading text-xl font-semibold text-gray-900 mb-1">
                    {content.name}
                  </div>
                  <div className="font-heading text-sm uppercase font-semibold text-gray-300 mb-0">
                    {content.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <About />

      <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h2>Careers At MacAsh</h2>
              <p className="font-display italic text-xl md:text-2xl">
                Are you a mortgage specialist who works from the heart? Are you
                committed to creating the best home buying experience for
                people? You’d be a great fit for our team!
              </p>
              <ButtonGhost
                href="mailto:KC@macashhomeloans.com"
                icon="far fa-arrow-right"
                text="Apply Today"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.careers.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ValueProps />
      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} slides={content.team} />
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
    tom: file(relativePath: { eq: "8.0 Team/tom.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    anthony: file(relativePath: { eq: "8.0 Team/Anthony.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    eric: file(relativePath: { eq: "8.0 Team/Eric - HS.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    KC: file(relativePath: { eq: "8.0 Team/KC.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    kevin: file(relativePath: { eq: "8.0 Team/Kevin.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    mike: file(relativePath: { eq: "8.0 Team/Mike.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    careers: file(relativePath: { eq: "8.0 Team/3.0 Careers.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
