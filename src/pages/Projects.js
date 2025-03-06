import React from "react";
import "../styles/Projects.css";

// Import project images
import mouserImg from "../assets/projects/mouser.png";
import smartMirrorImg from "../assets/projects/smart-mirror.png";
import eLearningImg from "../assets/projects/e-learning2.png";
import healthcareAppImg from "../assets/projects/healthcare-app2.png";
import warfarinMLImg from "../assets/projects/warfarin-ml.png";

const Projects = () => {
    const projects = [
        {
            title: "Mouser – Open Source with SLU",
            description: "Developed a laboratory data management system for tracking animal experiments with RFID-based identification.",
            technologies: "Python, CustomTkinter, SQLite, PySerial, RFID",
            link: "https://github.com/shridurga/Mouser",
            image: mouserImg 
        },
        {
            title: "Smart Mirror",
            description: "Built an interactive Smart Mirror with face recognition and customizable dashboards, integrated with real-time APIs.",
            technologies: "Python, Django, Tkinter, OpenCV, Heroku",
            link: "https://drive.google.com/drive/folders/1Xqam2byh9qanBZQ7dw2tYqj8FdUSdid3?usp=sharing",
            image: smartMirrorImg 
        },
        {
            title: "E-Learning Platform",
            description: "Built an adaptive e-learning platform with seamless transitions between text, audio, and video for personalized learning. Integrated dynamic UI enhancements, interactive quizzes, and real-time progress tracking to boost engagement.",
            technologies: "React, Node.js, HTML, CSS, Figma",
            link: "https://github.com/shridurga/HCI_E-Learning",
            image: eLearningImg 
        },
        {
            title: "Healthcare Communication Web App",
            description: "Built a real-time doctor-patient communication web app with authentication, chatbot consultations, and health form submissions.",
            technologies: "React, Spring Boot, MySQL, Docker, JIRA",
            link: "https://github.com/shridurga/AtomSridurga",
            image: healthcareAppImg 
        },
        {
            title: "Warfarin Dosing Prediction ML Pipeline",
            description: "Developed an ML-based precision medicine tool for predicting optimal Warfarin dosage, deployed on Hugging Face.",
            technologies: "Python, ML, Random Forest, KNN, CNN, Gradio, Hugging Face",
            link: "https://huggingface.co/spaces/SridurgaKakinada/FinalProject",
            image: warfarinMLImg 
        }
    ];

    return (
        <div className="projects-container">
            {/* Header Image */}
            <h1 className="title">
                <span className="recent-text">My Recent</span>&nbsp;
                <span className="works-text"> Works</span>
            </h1>
            <h3 className="subtitle1">
                Here are a few projects I've worked on recently.
            </h3>

            {/* Project Cards */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                     <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-view">
                        View Project
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
