import React from "react";
import "./styles.scss";

import logo from "../../logo.svg";
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <img src={logo} alt="City Tour Company" />
        <ul className="navLinks">
          <li>
            <a className="navLink" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navLink" href="/">
              About
            </a>
          </li>
          <li>
            <a className="navLink active" href="/">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
