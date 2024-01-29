import React from "react";
import './navbar.css'

const Navbar = () => {
    return(
    <header className="header">
        <nav className="navbar">
        <div className="logo">
      <h2 className="logo-heading">Jeffrey Ongicho</h2>
        </div>
    <div className="hamburger" id="hamburger">
      <i className="fas fa-bars hamburger-icon" />
      <i className="fas fa-times cross-icon" />
    </div>
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-list-items">
          <a className="links" href="#home">
            Home
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#projects">
            Projects
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#about">
            About
          </a>
        </li>
        <li className="menu-list-items">
          <a className="links" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    );
}
export default Navbar;
