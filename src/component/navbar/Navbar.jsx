import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {BsInstagram} from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState("false");

  function handleNav() {
    setNav((prevVal) => !prevVal);
  }

  return (
    <div className="nav-container | flex bg-light">
      <div className="name">
        <h2>Zara Maxwell</h2>
      </div>

      <div className="nav__links" data-visible={nav}>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/travel">Travel</NavLink>
        <NavLink to="/street">Street-Photography</NavLink>
        <a className="insta" href="https://www.instagram.com/"><BsInstagram /></a>
      </div>

      <div className="mobile-nav" data-visible={nav} onClick={handleNav}>
        <span className="sr-only">Menu</span>
      </div>
    </div>
  );
};
export default Navbar;
