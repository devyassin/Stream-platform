import React from "react";

const NavItem = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

const NavItemDropDown = (props) => {
  return <li className="nav-items dropdown">{props.children}</li>;
};

export { NavItemDropDown };
export default NavItem;
