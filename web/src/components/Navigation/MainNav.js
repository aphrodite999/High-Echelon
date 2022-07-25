import React, { useState, useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  // const [modalState, setModalState] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const openContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "block";
  }

  const closeContactModal = () => {
    document.getElementById("bottom-right-modal").style.display = "none"; 
  }
  
  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo desktop.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 310, placeholder: NONE)
        }
      }
    }
  `);

  

  // Define logos based on header style
  let initialLogo = null,
    // stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    loanPrograms: [
      {
        name: "Services",
        href: "home-purchase"
      },
      {
        name: "Small Business Consulting",
        href: "/accounting/",
      },
      {
        name: "Account Services",
        href: "/conventional-loans-chicago/",
      },
      {
        name: "Payroll Management",
        href: "/fha-loans-chicago/",
      },
      {
        name: "Income Tax Preparation",
        href: "/jumbo-loans-chicago/",
      },
    ],
    about: [
      {
        name: "About",
        href: "/about/",
      },
    ],
  };

  return (
    <nav
      id="main-navigation"
      className={`py-2 lg:py-2 bg-white shadow-5xl lg:shadow-none w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : "lg:bg-black"
      } ${
        headerHasBorder && "lg:border-b lg:border-solid lg:border-gray-300"
      } ${offcanvasOpen ? "" : ""} ${headerDarkMode && "lg:!bg-white"} ${
        scrolled && "!fixed !bg-white top-0 left-0 w-full !shadow-5xl z-50"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvas-open={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex-auto flex justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`${scrolled && "hidden"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.darkLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
            </div>

            <div className={`hidden ${scrolled && "!block"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={data.darkLogo.childImageSharp.gatsbyImageData}
                  alt="MacAsh Home Loans Logo"
                  className="h-[64px] md:h-[64px] w-[310px]"
                />
              </div>
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:mr-8"
          >
            <li
              className="relative"
              role="presentation"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <AniLink
                fade
                to="/home-purchase/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  subMenuHovering1
                    ? "after:w-full after:left-0 after:right-auto"
                    : "after:w-0 after:left-auto after:right-0"
                } ${scrolled && "text-gray-900"} ${
                  headerLinkColor === "white" ? "text-gray-900" : "text-white"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                Services
              </AniLink>
              <div
                className={`absolute top-0 bg-white shadow-3xl w-auto transform -translate-x-8 p-10 z-10 transition-all duration-300 ease-linear ${
                  subMenuHovering1
                    ? " visible translate-y-14 opacity-100"
                    : "invisible translate-y-20 opacity-0"
                }`}
              >
                <div>
                  <ul className="flex flex-col space-y-5">
                    {navigation.loanPrograms.slice(1).map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="group inline-flex items-center justify-between w-full relative font-body text-xl font-medium text-gray-900 hover:text-gray-900"
                        >
                          <span>{item.name}</span>
                          {/* <i className="far fa-arrow-right text-xl text-gray-900 group-hover:text-gray-900 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear"></i> */}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/about/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                About
              </AniLink>
            </li>

            <li className="group">
              <AniLink
                fade
                to="/reviews/"
                className={`font-body relative text-base font-semibold pb-8 after:absolute after:bottom-6 after:left-auto hover:after:left-0 after:right-0 hover:after:right-auto after:w-0 hover:after:w-full after:h-1 after:bg-primary-100 after:transition-all after:duration-300 after:ease-linear ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white" ? "text-white" : "text-gray-900"
                } ${headerDarkMode && "lg:!text-gray-900"}`}
              >
                Reviews
              </AniLink>
            </li>

            <li className="group">
              <ButtonSolid
                onClick={()=>openContactModal()}
                text="Contact US"
                altStyle={true}
                className="bg-primary-700 min-w-0 text-base"
              />
            </li>
          </ul>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div>
                <ul id="navigation-mobile" className="mb-12">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-7"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center focus:outline-none">
                          <p className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline mb-0 transition-colors duration-300 ease-linear">
                            Services
                          </p>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6">
                          <ul className="flex flex-col space-y-3">
                            {navigation.loanPrograms.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  className="relative block font-body font-semibold text-gray-900 hover:text-gray-900"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/about/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline transition-colors duration-300 ease-linear"
                      >
                        About
                      </AniLink>
                    </li>

                    <li>
                      <AniLink
                        fade
                        to="/reviews/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline transition-colors duration-300 ease-linear"
                      >
                        Reviews
                      </AniLink>
                    </li>

                    <li>
                      <AniLink
                        data-modal-open="modal-contact"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                        className="font-heading text-3xl text-gray-900 hover:text-gray-900 font-bold no-underline cursor-pointer transition-colors duration-300 ease-linear"
                      >
                        Contact
                      </AniLink>
                    </li>
                  </Accordion>
                </ul>

                <ButtonSolid
                  href="/request-rates/"
                  text="Request Rates"
                  className="w-full"
                />
              </div>
            </OffCanvas>
          </div>
        </div>
          <div id="bottom-right-modal" data-modal-placement="bottom-right" tabindex="-1" className="fade hidden overflow-y-auto overflow-x-hidden bg-white fixed top-0 right-0 right-0 z-50 w-1/2 h-modal md:h-full">
              <div className="relative w-full h-full md:h-auto">
                  <div className=" bg-white dark:bg-gray-700">
                      <div className="flex justify-between items-center p-5 border-b dark:border-primary-500">
                        <div className="flex items-center">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1.5 text-primary-100"
                          >
                            <path
                              d="M1.08124.769072L4.33117.019088c.35312-.081249.71561.103122.85936.434365L6.6905 3.95338c.13125.30624.04375.66561-.21562.87498L4.58117 6.37833c1.12498 2.39682 3.09056 4.39057 5.53743 5.53737l1.5499-1.8937c.2125-.25937.5688-.34687.875-.21562l3.4999 1.49992c.3344.1469.5188.5094.4375.8625l-.75 3.25c-.0781.3375-.3781.5812-.7312.5812C6.99674 16 .5 9.51576.5 1.50031c0-.35.240621-.653115.58124-.731238z"
                              fill="#D2B15E"
                            />
                          </svg>
                          <a
                            href="tel:773-501-3997"
                            className="text-sm font-semibold text-primary-100"
                          >
                            (773) 501-3997
                          </a>
                        </div>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="bottom-right-modal" onClick={()=>closeContactModal()}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="pb-8 space-y-6 px-20 ">
                        <p className="text-4xl text-center my-8">Contact Us</p>
                        <div className="mb-10 text-black flex">
                          <button className="w-1/2 flex justify-center items-center bg-gray-200 py-2">
                            <div className="flex justify-center items-center">
                              <i className="fal fa-calendar mr-2 text-xl"></i>
                              <p className="m-0">Book a Call</p>
                            </div>
                          </button>
                          <button className="w-1/2 flex justify-center items-center border-black bg-primary-100 py-2 text-white">
                            <div className="flex justify-center items-center">
                              <i class="fal fa-envelope mr-2 text-xl"></i>
                              <p className="m-0">Contact Us</p>
                            </div>
                          </button>
                        </div>
                        <div className="mb-8">
                          <div className="mb-5">
                            <label
                              className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                              htmlFor="first-name"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              onChange={()=>handleChange()}
                              required={true}
                              className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                            />
                          </div>
                          <div className="flex">
                            <div className="mb-5 w-1/2 mr-3">
                              <label
                                className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                                htmlFor="phone-number"
                              >
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone-number"
                                onChange={()=>handleChange()}
                                required={true}
                                className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                              />
                            </div>
                            <div className="mb-5 w-1/2">
                              <label
                                className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                                htmlFor="email-address"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                name="email-address"
                                onChange={()=>handleChange()}
                                required={true}
                                className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                              />
                            </div>
                          </div>
                          <div className="mb-5">
                            <label
                              className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                              htmlFor="first-name"
                            >
                              What Can We Help You With ?
                            </label>
                            <select name="helps" className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear">
                              <option value="" disabled selected>Select Ones ...</option>
                              <option value="0">Accounting</option>
                              <option value="1">Service</option>
                              <option value="2">About</option>
                            </select>
                          </div>
                          <div className="mb-5">
                            <label
                              className="font-body text-sm font-semibold text-gray-900 block mb-1 text-base"
                              htmlFor="first-name"
                            >
                              Message(Optional)
                            </label>
                            <textarea
                              type="textarea"
                              name="message"
                              onChange={()=>handleChange()}
                              required={true}
                              rows="5"
                              className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-100 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                            />
                          </div>
                          <ButtonSolid
                            // onClick={()}
                            text="Send"
                            altStyle={true}
                            className="bg-primary-700 min-w-0 text-base w-1/3"
                          />
                        </div>
                              
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </nav>
  );
};
export default MainNav;
