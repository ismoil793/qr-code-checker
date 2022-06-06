import React from "react";
import PropTypes from "prop-types";
// import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <div className="app-layout">
      {/* <Sidebar /> */}
      <div className="app-main">
        <main className="app-content">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
