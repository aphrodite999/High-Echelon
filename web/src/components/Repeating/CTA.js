import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import houseImg from '../../../src/images/bg.png';
const CTA = ({ heading, headingLevel, subtext, className }) => {
  const HeadingTag = headingLevel || "h2";
  const currentWidth = 0;
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    currentWidth = window.innerWidth;
  }
 
  return (
    // <section
    //   className={`bg-cta pt-14 md:pt-20 pb-18 md:pb-10 ${
    //     className || ""
    //   }`}
    // >
    <section class = "bg-no-repeat bg-cover bg-center md:pb-18 md:pb-10" style={{backgroundImage: `url('${houseImg}')`}}>
      { (currentWidth>=1712) ? 
          <div className="text-center">
            <svg width={currentWidth} height="2" viewBox="0 0 1712 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center">
              <line y1="1.5" x2={currentWidth} y2="1.5" stroke="url(#paint0_linear_1569_821)" stroke-width="3"/>
              <defs>
              <linearGradient id="paint0_linear_1569_821" x1="0" y1="3.50435" x2="1705.71" y2="3.4388" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A2A09D" stop-opacity="0"/>
              <stop offset="0.145833" stop-color="#CB9636"/>
              <stop offset="0.265625" stop-color="#CFA855"/>
              <stop offset="0.427083" stop-color="#FCE4A7"/>
              <stop offset="0.578125" stop-color="#F0D592"/>
              <stop offset="0.713542" stop-color="#CFA855"/>
              <stop offset="0.828125" stop-color="#CB9636"/>
              <stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg> 
          </div>
          : ''
        }
      <div className="container pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end md:mb-8">
          <header className="max-w-2xl text-center md:text-left">          
            <HeadingTag class = "text-primary-100">
              {heading || ["Get a Free Consultation"]}
            </HeadingTag>

            <p className="font-display text-base md:text-base text-white md:mb-0">
              {subtext ||
                "Work smarter, not harder. Get started with High Echelon, a top small business CPA serving the greater Atlanta area and Georgia, today."}
            </p>
          </header>

          <div className="flex items-center space-x-4">
            <ButtonSolid
                href="/request-rates/"
                text="Book a Call"
                className="w-full md:w-auto"
              />
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default CTA;
