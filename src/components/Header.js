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
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
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
