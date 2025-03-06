import React, { useState } from "react";
import "../styles/About.css";
import githubProfile from "../assets/github-profile.png"; // Add your GitHub image

const About = () => {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section className="about-section">
            <div className="about-container">
                
                {/* Right Side - About Content (Now Before Image) */}
                <div className="about-right">

                    <h2 className="title">
                        <span className="recent-text">Know Who</span>&nbsp;
                        <span className="works-text"> I'M</span>
                    </h2>

                    <p>
    I am a Full-Stack Developer and Automation Engineer with 5+ years of experience building 
    scalable, secure, and high-performance applications. My expertise spans across frontend, backend, and cloud technologies, 
    enabling me to create seamless software solutions from design to deployment.
</p>
<p>
    I specialize in React.js, Java, Spring Boot, Node.js, AWS, and CI/CD automation. 
    My passion lies in solving complex problems, optimizing software efficiency, and integrating cutting-edge tools 
    for performance-driven applications.
</p>


                    {/* Tab Navigation */}
                    <div className="about-tabs">
                        <span 
                            className={activeTab === "skills" ? "active-tab" : ""} 
                            onClick={() => setActiveTab("skills")}
                        >Skills</span>

                        <span 
                            className={activeTab === "education" ? "active-tab" : ""} 
                            onClick={() => setActiveTab("education")}
                        >Education</span>
                    </div>

                    {/* Tab Content */}
                    <div className="about-content">
                        {activeTab === "skills" && (
                            <ul>
                                <li><strong>Frontend:</strong> React.js, Redux, TypeScript, JavaScript, HTML, CSS</li>
                                <li><strong>Backend:</strong> Java, Spring Boot, Node.js, Python, Django</li>
                                <li><strong>Cloud & DevOps:</strong> AWS, Docker, Kubernetes, Terraform</li>
                                <li><strong>Testing & Automation:</strong> Selenium, Cypress, Jest</li>
                            </ul>
                        )}

                        {activeTab === "education" && (
                            <ul>
                                <li>Master's in Computer Science – Saint Louis University (2023-2024)</li>
                                <li>B.Tech in Electronics & Communication – GVP College of Engineering (2014-2018)</li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Left Side - GitHub or Work Image (Now After Text) */}
                <div className="about-left">
                    <img src={githubProfile} alt="GitHub Profile" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default About;
