import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    I am a passionate Full Stack Developer and Automation Specialist with a Master's in Computer Science from Saint Louis University. I thrive on solving complex challenges and creating impactful solutions.
                </p>
                <p>
                    With over 5 years of experience in software development and test automation, I have honed my skills in various technologies like React.js, Selenium, and .NET.
                </p>
                <div className="skills-container">
                    <h3>Key Skills</h3>
                    <ul className="skills-list">
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Selenium</li>
                        <li>.NET</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="resume-container">
                    <a href="./assets/SridurgaKakinadaResume.pdf" className="resume-btn" download>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
