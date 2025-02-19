import React from "react";
import "../styles/Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Mouser – Open Source with SLU",
            description: "Developed a laboratory data management system for tracking animal experiments with RFID-based identification.",
            technologies: "Python, CustomTkinter, SQLite, PySerial, RFID",
            link: "https://github.com/shridurga/Mouser" 
        },
        {
            title: "Smart Mirror",
            description: "Built an interactive Smart Mirror with face recognition and customizable dashboards, integrated with real-time APIs.",
            technologies: "Python, Django, Tkinter, OpenCV, Heroku",
            link: "https://drive.google.com/drive/folders/1Xqam2byh9qanBZQ7dw2tYqj8FdUSdid3?usp=sharing" 
        },
        {
            title: "E-Learning Platform",
            description: "Developed an adaptive e-learning platform with multimedia switching and UI enhancements for better engagement.",
            technologies: "React, Node.js, HTML, CSS, Figma",
            link: "https://github.com/shridurga/HCI_E-Learning" 
        },
        {
            title: "Healthcare Communication Web App",
            description: "Built a real-time doctor-patient communication web app with authentication, chatbot consultations, and health form submissions.",
            technologies: "React, Spring Boot, MySQL, Docker, JIRA",
            link: "https://github.com/shridurga/AtomSridurga" 
        },
        {
            title: "Warfarin Dosing Prediction ML Pipeline",
            description: "Developed an ML-based precision medicine tool for predicting optimal Warfarin dosage, deployed on Hugging Face.",
            technologies: "Python, ML, Random Forest, KNN, CNN, Gradio, Hugging Face",
            link: "https://huggingface.co/spaces/SridurgaKakinada/FinalProject" 
        }
    ];

    return (
        <div className="projects-container">
            <h1 className="title">My Works – What I’ve Built Recently</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
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
