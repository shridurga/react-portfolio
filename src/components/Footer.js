import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            {/* Left Side: Text */}
            <p>&copy; 2025 Sridurga Kakinada. All Rights Reserved.</p>

            {/* Right Side: Social Media Icons */}
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/sridurga97/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a href="https://github.com/shridurga" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
