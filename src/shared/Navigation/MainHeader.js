import React from "react";
import PropTypes from "prop-types";

import "./MainHeader.css";
function MainHeader({ children }) {
  return <header className="main-header">{children}</header>;
}

MainHeader.propTypes = {};

export default MainHeader;
