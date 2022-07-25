import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
// import SliderMobileCards from "../components/Slider/SliderMobileCards";
import Testimonials from "../components/Repeating/Testimonials";
import CarouselForm from "../components/Repeating/Carousel";
// import Carousel from "../components/Repeating/Carousel";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
// import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
      <section>
        <Hero
          backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
          backgroundPosition="0% 20%"
          mobileRemoveBackground={true}
          textAlignment="text-center"
          padding="pt-10 md:pt-12 pb-14 md:pb-60"
          maxheight="max-height-[725px]"
        >
          <p className="font-heading text-white text-mobile-7xl md:text-7xl tracking-wider mb-12 md:mb-4 mt-40">
            WE ARE HIGH ECHELON
          </p>
          <p className="font-body text-lg md:text-xl text-white font-semibold mb-16">
            We are High Echelon Elevated consulting, payroll, accounting & tax
            services.
          </p>
          <div className="flex justify-center md:justify-center space-x-4 md:space-x-5">
            <ButtonSolid href="/refinance/" text="Book a Call" />
          </div>
        </Hero>
        <div className="relative top-[-100px] md:mx-28 sm:mx-4 xsm:mx-4 flex justify-center">
          
          <div className="absolute container bg-primary-700 flex justify-center md:justify-center items-center flex-col rounded-[8px]">
            <svg
              height="3"
              viewBox="0 0 1094 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-10 w-full"
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
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.0267 30.523l-16.334-14.6733c-.3378-.3035-1.208-.5485-1.5115-.2108l-.0172.0666c-.1411.1351-.24.3327-.2884.5021-.1159.4024-.1603.846-.1502 1.2635.0101.3973.0807.7946.2097 1.1707.0605.1764.1392.3478.2209.5152.0423.0867.0857.1735.1331.2572-3.0644 2.7285-8.6566 8.6394-10.28 16.587-.0323.1553-.1049.3015-.2158.4155-1.7434 1.7807-4.1009 2.8757-6.5612 3.0159-3.8226.2198-7.6845.0766-11.4809-.4225l-1.3723-.1795c-.8027-.1038-1.5892-.0443-2.3464.1341-.1351.0313-.2743.0293-.4074-.009-1.2896-.3691-4.9559-1.1102-8.0888 1.1979-1.8594 1.3703-3.026 3.4505-3.7067 5.6214-.4325 1.3784-.6856 2.8102-.8268 4.2461-.0807.8167-.1472 1.6486-.1392 2.4704.0061.5607-.0665 1.1193-.0645 1.6789.001.4043.0555.8067.0656 1.21.009.3711-.0807.7855.0615 1.1404.2571.6443 1.698-.8329 1.8482-1.0608.6121-.9347.716-2.0862.7462-3.1742.0292-1.0799.0918-2.1366.241-3.2085.242-1.7424.6877-3.511 1.6093-5.0265.4316-.7099.9761-1.3573 1.6456-1.8544.3731-.2783.7623-.492 1.1545-.6554.7331-.3045 1.4389.477 1.0396 1.1626-.0585.1009-.1149.2027-.1704.3076-.6867 1.2906-1.1505 2.8203-1.4197 4.6796-.7875 5.444.2228 10.8648 1.1989 16.1072.4386 2.3585.5233 3.7651.7613 6.0429.0111.1523.0151.3015-.0353.4497-.0605.1795-.1674.3428-.2602.5072-.0332.0585-.0665.118-.1008.1765-.0736.0867-.1452.1764-.2077.3005-.0615.121-.0625.2974.0555.363.0453.0252.0988.0282.1502.0302.0252 0 1.6406.0746 1.9985.0504.0877-.006.971-.003 1.1445-.1724.0988-.0968.0907-.2561.0756-.3933-.0252-.2339-.0514-.4668-.0776-.7007-.0626-.5667-.2239-1.1032-.2854-1.6658-.0555-.5001-.1119-.9993-.1714-1.4984-.1573-1.3209-.3247-2.6438-.5677-3.9527-.3832-2.061-.7704-4.1503-1.0467-6.2436-.0746-.5717.4568-1.0416 1.0154-.8974 1.2947.3338 2.8748.6171 4.5032.6171h.0303S36.326 69.9559 36.3674 70.34c.0383.3661-.1694.7764-.0303 1.1082.1543.366 3.509.241 3.6623.0081.1885-.2874-.0898-.6413-.2309-.8833-.2229-.3822-6.8365-13.1941-6.8365-13.1941-.2219-.4437-.0031-.9761.4648-1.1394.4971-.1744.9821-.3933 1.446-.6675.6624-.3913 1.2422-.8753 1.7514-1.4379.2259-.2501.5637-.357.8823-.247 2.2849.7885 7.0543 1.8402 15.1452 2.9503.7421.1019 1.4611.1523 2.1558.1523.2098 0 .4165-.0061.6201-.0172.4135-.0221.7714.2824.836.6918l1.7907 11.26.0908.5687s.0948 1.0013.1311 1.1899c.0383.1996.0333.3841-.0192.5808-.0393.1462-.128.3761-.0494.5223.0656.123.2813.1502.4084.125.7421-.002 1.4853-.005 2.2274-.003.1432 0 .7603.008.8843-.0383.2228-.0827.2007-.3519.121-.5556-.1543-.3963-.4608-.6938-.6957-1.0406l-.2027-.3277c-.0051-.0141-.0111-.0293-.0162-.0434-.1129-.2954-.2198-.5929-.3166-.8944l-1.8987-11.9366c-.0615-.3872.1644-.7523.5284-.8995 1.1475-.4628 2.178-1.1232 3.0815-1.9632l-.0081.0716 4.6857.5546c.5677.0675.8954.6796.6363 1.1888l-3.0321 5.9653-.3327.6554c-.0454.0474-.0918.0938-.1372.1412-.1492.1543-.2944.3126-.4446.4648-.1271.1301-.24.2309-.4064.2662-.0716.0152-.1139.0615-.1422.114-.006.0091-.01.0222-.0141.0332-.008.0242-.0151.0464-.0151.0716 0 .0111-.0061.0162-.0061.0283.0021.362.9922 2.0832 1.4036 2.5047.5304.5445.7704-.0857 1.0084-.5415.1593-.3055.3186-.6111.4779-.9156.1967-.3761.5828-1.1323.5798-1.1353l4.9469-9.7325c.2592-.5102-.0686-1.1223-.6363-1.1898l-5.5044-.6504c-.5687-.0675-.8904-.6756-.6323-1.1868.5062-1.0013.9166-2.1175 1.2201-3.3517.8208-3.3406.6655-7.0654-.4598-11.0695-.0746-.2672-.1412-.5092-.2006-.729-.1412-.5233.253-1.0336.7945-1.0336h9.6599c.2833 0 .5465-.1462.6977-.3861l1.7374-2.779c.2117-.3388.1492-.7805-.1472-1.0477l-.001.0031zM52.9625 54.3398c-8.0546-1.1051-12.0244-2.0298-13.9079-2.5904-.4346-.1291-.6958-.5828-.5597-1.0144.2279-.7179.3973-1.4964.5093-2.3353.0605-.4578-.2904-.8702-.7512-.9085l-.8763-.0716c-.4285-.0353-.8218.2652-.8793.6907-.3448 2.5622-1.331 4.3389-2.9362 5.2887-2.8445 1.6849-7.0523.6181-9.1265-.0847-.3256-.1099-.5455-.4114-.5545-.7552-.0394-1.5115.0171-3.017.2329-4.5063.2269-1.5659.603-2.8263 1.1505-3.8558 1.089-2.0449 2.8768-3.1178 4.7755-2.8677.0353.005 1.3834.1815 1.3834.1815 3.9517.5183 7.9729.6655 11.9518.4396 1.7484-.0998 3.4525-.5868 4.9993-1.3925.5354-.2783 1.1777.0766 1.2009.6796.1755 4.4871 1.7646 8.9127 4.7553 13.2183-.4376-.0172-.8903-.0525-1.3683-.118l.001.002zm10.5341-7.375c-.6312 2.5693-1.9905 5.3684-4.842 6.7034-.4185.1957-.9317.0202-1.1203-.4013-1.7333-3.875-2.1094-7.4475-1.086-10.6349 1.0557-3.2881 3.3931-5.5266 5.081-6.785.4638-.3459 1.1253-.118 1.2796.4396.0766.2783.1603.5758.249.8934 1.0074 3.5806 1.1546 6.8718.4387 9.7838v.001zm1.8099-14.647c-.3599-.0182-.7169-.0585-1.0718-.0877-.6323-.0515-1.2604-.0656-1.8886.1492-.8642.2944-1.6103.9337-2.3484 1.452-.8188.5747-1.5741 1.2735-2.2668 1.9925-1.6456 1.7051-2.9423 3.7469-3.6733 6.0066-.0888.2743-.1694.5516-.241.8299-.2229.8661-1.5075.7633-1.6103-.1251-.1755-1.5044-.1694-3.0139.0211-4.5244.6323-5.0265 3.1914-9.326 5.7425-12.4841.2954-.365.8369-.4014 1.1848-.0857 2.3635 2.1487 4.6575 4.3721 6.9857 6.5592.3832.3599-.6695.3247-.8318.3166l-.0021.001zm5.2897-4.2985l-1.0557 2.2738c-.2379.5112-.9065.6392-1.3138.248-1.4046-1.3491-3.2973-3.1601-4.9873-4.7482-.4194-.3943-.8318-.7996-1.2634-1.1788-.4497-.3952-.9478-.7371-1.3663-1.1676-.1593-.1634-.4225-.4931-.1885-.7018.3045-.2713.6009-.5516.8984-.8319.3721-.3519.7512-.6957 1.1374-1.0305.3126-.2713.7744-.2612 1.0829.0151l6.8607 6.1629c.2693.242.3489.6302.1967.958l-.0011.001zm4.3863 3.9496c-.0555.0867-.1281.1472-.2107.1886-.24.119-.5355.0685-.7936.0665-.4205-.004-.8399-.0091-1.2604-.0091-.601 0-.9993-.6231-.7462-1.1686l.3741-.8067c.2329-.5011.8843-.6352 1.2957-.2652l.6474.5808c.2379.2138 1.0002.6433.9367.9771-.0282.1462-.1633.3136-.242.4366h-.001z"
                fill="url(#paint0_linear_1112_665)"
              />
              <path
                d="M46.5493.300186C21.102.300186.398926 21.0033.398926 46.4506S21.102 92.601 46.5493 92.601s46.1505-20.7031 46.1505-46.1504S71.9966.300186 46.5493.300186zm0 89.903014c-24.1253 0-43.75256-19.6272-43.75256-43.7526 0-24.1254 19.62616-43.75159 43.75256-43.75159 24.1264 0 43.7526 19.62719 43.7526 43.75259S70.6747 90.2042 46.5493 90.2042v-.001z"
                fill="url(#paint1_linear_1112_665)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1112_665"
                  x1="13.2871"
                  y1="71.9196"
                  x2="75.0241"
                  y2="71.9196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".239583" stopColor="#D2B15E" />
                  <stop offset=".421875" stopColor="#CB9636" />
                  <stop offset=".6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1112_665"
                  x1="-1.79871"
                  y1="92.601"
                  x2="87.9382"
                  y2="92.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".239583" stopColor="#D2B15E" />
                  <stop offset=".421875" stopColor="#CB9636" />
                  <stop offset=".6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
              </defs>
            </svg>
            <p className="font-body text-4xl text-white font-body mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
              A Small Business CPA Firm Serving Atlanta & Beyond
            </p>
            <p className="font-body text-sm text-white font-body max-w-[736px] md:w-2/3 sm:w-full text-center">
              If you’re looking for a meticulous CPA firm that can simplify your
              books, you’ve come to the right place. At High Echelon, we value
              client communication, accuracy, a streamlined workflow, and
              creating a positive experience for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* <GatsbyImage
        image={data.heroMobile.childImageSharp.gatsbyImageData}
        className="md:hidden w-full"
      /> */}

      <section className="mt-80 md:mt-120 mb-20 md:mb-32 pt-16 md:pt-24">
        <div className="container">
          <div className="gap-y-8 md:gap-x-10 lg:gap-x-16 items-center">
            <div className="mb-8">
              <h3 className="md:w-2/3 sm:w-full text-primary-700 text-4xl">
                We are Here To Make Your Business Better
              </h3>
              <p className="md:w-2/3 sm:w-full font-display italic text-xl md:text-base mt-6">
                Get streamlined end-to-end services for everything from entity
                formation to accounting, payroll, and taxes. It’s all here, in a
                single, full-stack solution that simplifies it all.
              </p>
            </div>
            <div className="flex mb-5">
              <AniLink fade to="/va-loans-chicago/" className="md:flex mr-5 w-1/2 sm:block">
                <GatsbyImage
                  image={
                    data.smallBusinessConsultingImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-2 text-primary-700">
                    Small Business Consulting
                  </h3>
                  <p className="text-base">
                    Need advice or help in navigating the best way to form your
                    business? Talk with the experts.
                  </p>
                </div>
              </AniLink>
              <AniLink fade to="/va-loans-chicago/" className="md:flex mr-5 w-1/2 sm:block">
                <GatsbyImage
                  image={
                    data.accountServicesImage.childImageSharp.gatsbyImageData
                  }
                  alt="Accounting Services"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Accounting Services
                  </h3>
                  <p className="text-base">
                    Receive accurate, secure delivery of monthly, quarterly, and
                    annual financial statements.
                  </p>
                </div>
              </AniLink>
            </div>
            <div className="flex mb-5">
              <AniLink fade to="/va-loans-chicago/" className="md:flex mr-5 w-1/2 sm:block">
                <GatsbyImage
                  image={
                    data.payrollManagementImage.childImageSharp.gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Payroll Management
                  </h3>
                  <p className="text-base">
                    Get lightweight, user-friendly, cost-efficient payroll
                    processing, and hiring/termination automation.
                  </p>
                </div>
              </AniLink>
              <AniLink fade to="/va-loans-chicago/" className="md:flex mr-5 w-1/2 sm:block">
                <GatsbyImage
                  image={
                    data.incomeTaxPreparationImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px]"
                />
                <div className="flex justify-center flex-col py-2 pl-3">
                  <h3 className="text-lg mb-4 text-primary-700">
                    Income Tax Preparation
                  </h3>
                  <p className="text-base">
                    Get propt tax preparation for yourself or your business,
                    including help with complicated returns.
                  </p>
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* <Carousel /> */}
      <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 sm:px-2">
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
      relativePath: { eq: "1.0 Homepage/3.1 Accounting Services desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
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
