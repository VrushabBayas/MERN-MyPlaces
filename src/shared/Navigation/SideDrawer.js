import React from "react";
import PropTypes from "prop-types";

import "./SideDrawer.css";
function SideDrawer(props) {
  return <aside className="side-drawer">{props.children}</aside>;
}

SideDrawer.propTypes = {};

export default SideDrawer;
