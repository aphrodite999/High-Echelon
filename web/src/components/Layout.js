import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

const Layout = ({
  children,
  headerStyle,
  headerLinkColor,
  headerHasBorder,
  headerDarkMode,
  hideHeader,
  hideFooter,
}) => {
  return (
    <div>
      <Helmet></Helmet>
      <Header
        headerStyle={headerStyle}
        headerLinkColor={headerLinkColor}
        headerHasBorder={headerHasBorder}
        headerDarkMode={headerDarkMode}
        hideHeader={hideHeader}
      />
      <main id="body-content" className="bg-white">
        {children}
      </main>
      <Footer hideFooter={hideFooter} />
    </div>
  );
};

Layout.propTypes = {
  headerStyle: PropTypes.string,
  headerLinkColor: PropTypes.string,
  headerHasBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
