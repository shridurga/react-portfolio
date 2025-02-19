import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Sridurga Kakinada. All Rights Reserved.</p>

            {/* Social Media Links */}
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/sridurga97/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/shridurga" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>

            {/* Back to Top Button
            <button 
                className="back-to-top" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back to Top
            </button> */}
        </footer>
    );
};

export default Footer;
