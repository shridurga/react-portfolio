import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <h1 className="logo">Sk.</h1>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
