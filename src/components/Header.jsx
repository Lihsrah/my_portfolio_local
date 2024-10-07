import React, { useState } from "react";
import "../assets/CSS/Header.css";
import logo_1 from "../assets/IMAGES/logo_1.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, showMenu] = useState(false);

  return (
    <>
      <header className="full-width">
        <div className="header_wrapper full-width flex flex-center space-between">
          <div className="logo flex flex-center justify-center">
            {/* <img src={logo} alt="" /> */}
            <img src={logo_1} alt="" />
          </div>

          <div className="nav_list_container">
            <div className={menu ? "menu_active" : "menu"}>
              <div className="flex flex-center justify-center">
                <div className={menu ? "nav_button nav_active" : "nav_button" } onClick={(e) => {showMenu((menu) => !menu)}}>
                  <span class="nav_icon">&nbsp;</span>
                </div>
              </div>

              <div className={menu ? "menu_list" : "d-none"}>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/resume">Resume</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
