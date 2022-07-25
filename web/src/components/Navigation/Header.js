import React, { useState, useLayoutEffect } from "react";

// import PromoBar from "../Header/PromoBar";
import UtilityNav from "../Navigation/UtilityNav";
import MainNav from "../Navigation/MainNav";

const Header = ({
  headerStyle,
  headerLinkColor,
  headerHasBorder,
  headerDarkMode,
  hideHeader,
}) => {
  // determine if page has scrolled
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useLayoutEffect(() => {
    const siteNavigation = document.querySelector("#site-navigation"),
      promoBar = document.querySelector("#promo-bar"),
      utilityNavigation = document.querySelector("#utlity-navigation"),
      mainNavigation = document.querySelector("#main-navigation"),
      offcanvasNavigation = document.querySelector("#offcanvas-navigation"),
      bodyContent = document.querySelector("#body-content");

    if (offcanvasNavigation) {
      offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
    }

    const handleLoad = () => {
      // calculate #offcanvas-navigation menu offset top
      if (offcanvasNavigation) {
        offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
      }
    };

    const handleResize = () => {
      // calculate #offcanvas-navigation offset top on resize
      if (offcanvasNavigation) {
        offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";
      }
    };

    const handleScroll = () => {
      let isScrolled;

      if (utilityNavigation !== null && promoBar !== null) {
        isScrolled =
          window.scrollY >
          utilityNavigation.offsetHeight + promoBar.offsetHeight;
      } else if (promoBar !== null) {
        isScrolled = window.scrollY > promoBar.offsetHeight;
      } else if (utilityNavigation !== null) {
        isScrolled = window.scrollY > utilityNavigation.offsetHeight;
      } else {
        isScrolled = window.scrollY > 0;
      }

      if (isScrolled) {
        setScrolled(true);
        // recalculate #offcanvas-navigation offset top on scroll
        if (offcanvasNavigation) {
          offcanvasNavigation.style.top = mainNavigation.offsetHeight + "px";

          // recalculate #body-content offset top on scroll
          if (headerStyle === "overlap") {
            bodyContent.style.marginTop = "0px";
            bodyContent.style.paddingTop = null;
          } else {
            bodyContent.style.paddingTop = mainNavigation.offsetHeight + "px";
            bodyContent.style.marginTop = null;
          }
        }
      } else {
        setScrolled(false);

        // calculate #offcanvas-navigation menu offset top
        if (offcanvasNavigation) {
          offcanvasNavigation.style.top = siteNavigation.offsetHeight + "px";

          // recalculate #body-content offset top on scroll
          if (headerStyle === "overlap") {
            // bodyContent.style.marginTop = "-" + mainNavigation.offsetHeight + "px";
            bodyContent.style.paddingTop = null;
          } else {
            bodyContent.style.paddingTop = null;
            bodyContent.style.marginTop = null;
          }
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("load", handleLoad, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, [scrolled, headerStyle]);

  return (
    <div
      id="site-navigation"
      className={`relative z-30 ${hideHeader && "!hidden"}`}
    >
      {/* <PromoBar /> */}
      <UtilityNav />
      <MainNav
        scrolled={scrolled}
        headerStyle={headerStyle}
        headerLinkColor={headerLinkColor}
        headerHasBorder={headerHasBorder}
        headerDarkMode={headerDarkMode}
      />
    </div>
  );
};
export default Header;
